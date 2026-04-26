import {
  Chi, Cuc, AmDuongLaSo, GioiTinh, TenCung, DaiVan, TieuVan, NguyetVan,
  CHI_LIST, TEN_CUNG_LIST,
} from './types';
import { diaChi12Cung } from './cung';
import { chiCuaGio } from './lich-am';

/**
 * Module xử lý vận hạn: Đại vận, Tiểu vận, Nguyệt vận.
 */

/**
 * Tính 12 đại vận của lá số.
 *
 * Quy tắc (user đã xác nhận):
 *   1. Số tuổi bắt đầu Đại vận đầu = số Cục (Thủy 2, Mộc 3, Kim 4, Thổ 5, Hỏa 6).
 *   2. Đại vận đầu kéo dài 10 năm: từ (Cục) đến (Cục + 9) tuổi, tại cung Mệnh.
 *   3. Chiều di chuyển:
 *      - Dương Nam / Âm Nữ → THUẬN chiều cung (Mệnh → Phụ Mẫu → Phúc Đức → ...)
 *      - Âm Nam / Dương Nữ → NGHỊCH chiều cung (Mệnh → Huynh Đệ → Phu Thê → ...)
 *
 * @returns Mảng 12 phần tử, mỗi phần tử ứng với 1 đại vận theo thứ tự xuất hiện theo tuổi.
 */
export function tinhDaiVan(
  cuc: Cuc,
  amDuongLaSo: AmDuongLaSo,
  chiCungMenh: Chi,
): DaiVan[] {
  const tuoiKhoi = cuc.so;
  const thuanChieu = amDuongLaSo === 'Dương Nam' || amDuongLaSo === 'Âm Nữ';

  const cungToChi = diaChi12Cung(chiCungMenh);
  // Theo thứ tự cung: Mệnh, Phụ Mẫu, ..., Huynh Đệ
  const dsCungThuan: TenCung[] = [...TEN_CUNG_LIST];
  // Theo chiều nghịch: Mệnh, Huynh Đệ, ..., Phụ Mẫu
  const dsCungNghich: TenCung[] = [
    TEN_CUNG_LIST[0],                    // Mệnh
    ...TEN_CUNG_LIST.slice(1).reverse(), // Huynh Đệ → Phu Thê → ... → Phụ Mẫu
  ];
  const thuTu = thuanChieu ? dsCungThuan : dsCungNghich;

  const result: DaiVan[] = [];
  for (let i = 0; i < 12; i++) {
    const tenCung = thuTu[i];
    const chi = cungToChi[tenCung];
    result.push({
      cung: chi,
      tuoiBatDau: tuoiKhoi + i * 10,
      tuoiKetThuc: tuoiKhoi + i * 10 + 9,
    });
  }
  return result;
}

/**
 * Tìm đại vận đang ở tuổi cụ thể.
 * @returns DaiVan hoặc null nếu tuổi nằm ngoài khoảng (vd nhỏ hơn tuổi khởi đại vận đầu)
 */
export function daiVanCuaTuoi(daiVanList: DaiVan[], tuoi: number): DaiVan | null {
  return daiVanList.find(dv => tuoi >= dv.tuoiBatDau && tuoi <= dv.tuoiKetThuc) ?? null;
}

/**
 * TIỂU VẬN (mỗi cung 1 năm).
 *
 * Quy tắc (user đã xác nhận):
 *   1. Cung khởi đầu (tuổi 1) theo tam hợp năm sinh:
 *      - Thân/Tý/Thìn → Tuất
 *      - Tỵ/Dậu/Sửu  → Mùi
 *      - Dần/Ngọ/Tuất → Thìn
 *      - Hợi/Mão/Mùi → Sửu
 *   2. Chiều: Nam thuận, Nữ nghịch
 *   3. Tiểu vận tuổi N = cung khởi đầu + (N-1) bước theo chiều
 *
 * Lưu ý: "tuổi" ở đây là tuổi mụ (năm sinh = tuổi 1).
 */

const CUNG_KHOI_TIEU_VAN: Record<Chi, Chi> = {
  // Thủy cục: Thân-Tý-Thìn → Tuất
  'Thân': 'Tuất', 'Tý': 'Tuất', 'Thìn': 'Tuất',
  // Kim cục: Tỵ-Dậu-Sửu → Mùi
  'Tỵ': 'Mùi', 'Dậu': 'Mùi', 'Sửu': 'Mùi',
  // Hỏa cục: Dần-Ngọ-Tuất → Thìn
  'Dần': 'Thìn', 'Ngọ': 'Thìn', 'Tuất': 'Thìn',
  // Mộc cục: Hợi-Mão-Mùi → Sửu
  'Hợi': 'Sửu', 'Mão': 'Sửu', 'Mùi': 'Sửu',
};

/**
 * Tính cung tiểu vận của một tuổi (tuổi mụ) cụ thể.
 *
 * @param chiNamSinh Chi của năm sinh
 * @param gioiTinh   Nam / Nữ
 * @param tuoiMu     Tuổi mụ (1 = năm sinh)
 */
export function tinhTieuVan(
  chiNamSinh: Chi,
  gioiTinh: GioiTinh,
  tuoiMu: number,
): TieuVan {
  if (tuoiMu < 1) throw new Error(`Tuổi mụ không hợp lệ: ${tuoiMu}`);

  const cungKhoi = CUNG_KHOI_TIEU_VAN[chiNamSinh];
  const idxKhoi = CHI_LIST.indexOf(cungKhoi);
  const buoc = tuoiMu - 1;

  // Nam: thuận (cộng); Nữ: nghịch (trừ)
  const idxResult = gioiTinh === 'Nam'
    ? (idxKhoi + buoc) % 12
    : ((idxKhoi - buoc) % 12 + 12) % 12;

  return { cung: CHI_LIST[idxResult], tuoi: tuoiMu };
}

/**
 * NGUYỆT VẬN (mỗi cung 1 tháng).
 *
 * Quy tắc (Tử Vi phái Nam Tông Việt Nam, user đã xác nhận):
 * "Tháng đếm nghịch, Giờ đếm thuận"
 *
 *   Bước 1: Lấy cung Tiểu hạn của năm cần xem làm mốc.
 *   Bước 2: Coi cung Tiểu hạn là tháng 1, đếm NGHỊCH đến tháng SINH âm lịch của
 *           đương số. Dừng tại cung X.
 *   Bước 3: Tại cung X, coi đó là giờ Tý, đếm THUẬN đến giờ SINH thực tế.
 *           Dừng tại cung Y.
 *   Bước 4: Cung Y = Tháng Giêng (tháng 1) của Nguyệt vận năm đó.
 *           Tháng N = thuận (N-1) cung từ Y.
 *
 * Ví dụ: Sinh tháng 5 âm, giờ Mùi; năm xem có Tiểu hạn Tuất.
 *   B2: Tuất (T1) → Dậu → Thân → Mùi → Ngọ (T5). Cung X = Ngọ.
 *   B3: Tý=Ngọ, Sửu=Mùi, Dần=Thân, Mão=Dậu, Thìn=Tuất, Tỵ=Hợi, Ngọ=Tý, Mùi=Sửu.
 *       Cung Y = Sửu.
 *   B4: Tháng Giêng = Sửu. T2 Dần, T3 Mão, ..., T12 Tý.
 */

/** Tính cung tháng Giêng của Nguyệt vận theo công thức "tháng đếm nghịch, giờ đếm thuận". */
export function cungThangGiengNguyetVan(
  chiTieuHan: Chi,
  thangSinhAmLich: number,
  gioSinh: number,
): Chi {
  if (thangSinhAmLich < 1 || thangSinhAmLich > 12) {
    throw new Error(`Tháng sinh âm không hợp lệ: ${thangSinhAmLich}`);
  }
  const idxTieuHan = CHI_LIST.indexOf(chiTieuHan);

  // Bước 2: Coi tiểu hạn là tháng 1, lùi (tháng sinh - 1) cung
  const idxX = ((idxTieuHan - (thangSinhAmLich - 1)) % 12 + 12) % 12;

  // Bước 3: Tại X coi là giờ Tý, tiến đến giờ sinh
  const chiGioSinh = chiCuaGio(gioSinh);
  const idxGioSinh = CHI_LIST.indexOf(chiGioSinh); // Tý=0, Sửu=1, ..., Mùi=7
  const idxY = (idxX + idxGioSinh) % 12;

  return CHI_LIST[idxY];
}

/**
 * Tính cung Nguyệt vận của tháng N trong năm cần xem.
 *
 * @param chiTieuHan       Cung tiểu hạn của năm cần xem
 * @param thangSinhAmLich  Tháng sinh âm lịch (1-12) của đương số
 * @param gioSinh          Giờ sinh dương lịch (0-23) của đương số
 * @param thangXem         Tháng âm muốn xem trong năm đó (1-12)
 */
export function tinhNguyetVan(
  chiTieuHan: Chi,
  thangSinhAmLich: number,
  gioSinh: number,
  thangXem: number,
): NguyetVan {
  if (thangXem < 1 || thangXem > 12) {
    throw new Error(`Tháng cần xem không hợp lệ: ${thangXem}`);
  }
  const chiThangGieng = cungThangGiengNguyetVan(chiTieuHan, thangSinhAmLich, gioSinh);
  const idxGieng = CHI_LIST.indexOf(chiThangGieng);
  const idxKetQua = (idxGieng + thangXem - 1) % 12;
  return { cung: CHI_LIST[idxKetQua], thangAmLich: thangXem };
}
