import {
  Can, Chi, CanChi, TenCung,
  CAN_LIST, CHI_LIST, TEN_CUNG_LIST,
} from './types';
import { chiCuaGio } from './lich-am';

/**
 * Module xử lý 12 cung trên lá số tử vi.
 *
 * Quy tắc (Bắc phái VN, theo Tử Vi Đẩu Số Toàn Thư):
 *
 * 1. An cung Mệnh:
 *    - Khởi tại cung DẦN là tháng 1 âm lịch
 *    - Đếm thuận (Dần → Mão → Thìn ...) đến tháng sinh
 *    - Tại đó, đếm NGHỊCH theo chi giờ sinh (Tý = 0 bước, Sửu = 1, ..., Hợi = 11)
 *    - Vị trí dừng là cung Mệnh
 *
 * 2. An cung Thân: giống Mệnh nhưng đếm THUẬN theo chi giờ sinh.
 *
 * 3. Thứ tự 12 cung quanh cung Mệnh (theo chiều thuận địa chi):
 *    Mệnh → Phụ Mẫu → Phúc Đức → Điền Trạch → Quan Lộc → Nô Bộc
 *    → Thiên Di → Tật Ách → Tài Bạch → Tử Tức → Phu Thê → Huynh Đệ
 *
 * 4. Can của mỗi cung (Ngũ Hổ Độn): Can của cung Dần được xác định theo
 *    Can năm sinh, sau đó can tăng dần theo chiều thuận địa chi.
 */

const DAN_INDEX = CHI_LIST.indexOf('Dần'); // = 2

/**
 * An cung Mệnh.
 * @param thangAm Tháng âm lịch (1-12, không phân biệt nhuận)
 * @param gioSinh Giờ sinh dương lịch (0-23)
 * @returns Địa chi của cung Mệnh
 */
export function anCungMenh(thangAm: number, gioSinh: number): Chi {
  if (thangAm < 1 || thangAm > 12) throw new Error(`Tháng âm không hợp lệ: ${thangAm}`);

  // Khởi Dần (tháng 1) → thuận đến tháng sinh
  const posThangSinh = (DAN_INDEX + (thangAm - 1)) % 12;

  // Tại posThangSinh, đếm nghịch theo chi giờ
  const chiGio = chiCuaGio(gioSinh);
  const chiGioIdx = CHI_LIST.indexOf(chiGio);

  const posMenh = (posThangSinh - chiGioIdx + 12) % 12;
  return CHI_LIST[posMenh];
}

/**
 * An cung Thân.
 */
export function anCungThan(thangAm: number, gioSinh: number): Chi {
  if (thangAm < 1 || thangAm > 12) throw new Error(`Tháng âm không hợp lệ: ${thangAm}`);

  const posThangSinh = (DAN_INDEX + (thangAm - 1)) % 12;
  const chiGio = chiCuaGio(gioSinh);
  const chiGioIdx = CHI_LIST.indexOf(chiGio);

  const posThan = (posThangSinh + chiGioIdx) % 12;
  return CHI_LIST[posThan];
}

/**
 * Tính địa chi của 12 cung.
 * Trả về mảng theo thứ tự TEN_CUNG_LIST: [Mệnh, Phụ Mẫu, Phúc Đức, ..., Huynh Đệ]
 */
export function diaChi12Cung(chiCungMenh: Chi): Record<TenCung, Chi> {
  const menhIdx = CHI_LIST.indexOf(chiCungMenh);
  const result = {} as Record<TenCung, Chi>;

  for (let i = 0; i < 12; i++) {
    const tenCung = TEN_CUNG_LIST[i];
    const chiIdx = (menhIdx + i) % 12;
    result[tenCung] = CHI_LIST[chiIdx];
  }
  return result;
}

/**
 * Can của cung Dần theo Can năm sinh (Ngũ Hổ Độn).
 *   Giáp/Kỷ   → Bính Dần (Can = Bính, idx 2)
 *   Ất/Canh   → Mậu Dần  (idx 4)
 *   Bính/Tân  → Canh Dần (idx 6)
 *   Đinh/Nhâm → Nhâm Dần (idx 8)
 *   Mậu/Quý   → Giáp Dần (idx 0)
 */
function canCuaCungDan(canNamSinh: Can): Can {
  const bang: Record<Can, Can> = {
    'Giáp': 'Bính', 'Kỷ': 'Bính',
    'Ất': 'Mậu', 'Canh': 'Mậu',
    'Bính': 'Canh', 'Tân': 'Canh',
    'Đinh': 'Nhâm', 'Nhâm': 'Nhâm',
    'Mậu': 'Giáp', 'Quý': 'Giáp',
  };
  return bang[canNamSinh];
}

/**
 * Tính Can của mỗi cung (theo chi của cung) dựa trên Can năm sinh.
 * Trả về Map{Chi → Can}.
 */
export function canMoi12Cung(canNamSinh: Can): Record<Chi, Can> {
  const canDan = canCuaCungDan(canNamSinh);
  const canDanIdx = CAN_LIST.indexOf(canDan);

  const result = {} as Record<Chi, Can>;
  for (let i = 0; i < 12; i++) {
    const chi = CHI_LIST[i];
    // Khoảng cách từ Dần (idx 2) đến chi này theo chiều thuận
    const offset = (i - DAN_INDEX + 12) % 12;
    const canIdx = (canDanIdx + offset) % 10;
    result[chi] = CAN_LIST[canIdx];
  }
  return result;
}

/**
 * Tổng hợp: tính địa chi + can cho 12 cung.
 * @returns Mảng 12 phần tử theo thứ tự TEN_CUNG_LIST, mỗi phần tử có {tenCung, chi, can}
 */
export function tinhCanChi12Cung(
  chiCungMenh: Chi,
  canNamSinh: Can,
): { tenCung: TenCung; chi: Chi; canChi: CanChi }[] {
  const cungToChi = diaChi12Cung(chiCungMenh);
  const chiToCan = canMoi12Cung(canNamSinh);

  return TEN_CUNG_LIST.map((tenCung) => {
    const chi = cungToChi[tenCung];
    const can = chiToCan[chi];
    return { tenCung, chi, canChi: { can, chi } };
  });
}
