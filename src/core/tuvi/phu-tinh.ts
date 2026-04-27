import { Chi, Can, Cuc, AmDuongLaSo, TenCung, CHI_LIST } from './types';
import { chiCuaGio } from './lich-am';

/** Modulo cho số âm: kết quả luôn trong [0, 12) */
function mod12(x: number): number {
  return ((x % 12) + 12) % 12;
}

/**
 * Module phụ tinh - các vòng sao và sao phụ.
 *
 * G2-1: Vòng Trường Sinh (12 sao)
 *   Thứ tự: Trường Sinh → Mộc Dục → Quan Đới → Lâm Quan → Đế Vượng
 *           → Suy → Bệnh → Tử → Mộ → Tuyệt → Thai → Dưỡng
 *
 *   Vị trí Trường Sinh theo Cục:
 *     Thủy Nhị Cục → Thân
 *     Thổ Ngũ Cục  → Thân
 *     Hỏa Lục Cục  → Dần
 *     Mộc Tam Cục  → Hợi
 *     Kim Tứ Cục   → Tỵ
 *
 *   Chiều an:
 *     Dương Nam, Âm Nữ → thuận (chiều kim đồng hồ = chi tăng)
 *     Âm Nam, Dương Nữ → nghịch
 */

export const VONG_TRUONG_SINH = [
  'Trường Sinh', 'Mộc Dục', 'Quan Đới', 'Lâm Quan',
  'Đế Vượng', 'Suy', 'Bệnh', 'Tử',
  'Mộ', 'Tuyệt', 'Thai', 'Dưỡng',
] as const;
export type SaoVongTruongSinh = typeof VONG_TRUONG_SINH[number];

/**
 * Vị trí sao Trường Sinh theo Cục.
 */
function chiTruongSinhTheoCuc(cuc: Cuc): Chi {
  switch (cuc.ten) {
    case 'Thủy Nhị Cục': return 'Thân';
    case 'Thổ Ngũ Cục':  return 'Thân';
    case 'Hỏa Lục Cục':  return 'Dần';
    case 'Mộc Tam Cục':  return 'Hợi';
    case 'Kim Tứ Cục':   return 'Tỵ';
  }
}

/**
 * Tính vị trí 12 sao Vòng Trường Sinh.
 *
 * @returns Map { tên sao → Chi của cung }
 */
export function tinhVongTruongSinh(
  cuc: Cuc,
  amDuongLaSo: AmDuongLaSo,
): Record<SaoVongTruongSinh, Chi> {
  const chiKhoi = chiTruongSinhTheoCuc(cuc);
  const idxKhoi = CHI_LIST.indexOf(chiKhoi);

  const thuanChieu = amDuongLaSo === 'Dương Nam' || amDuongLaSo === 'Âm Nữ';

  const result = {} as Record<SaoVongTruongSinh, Chi>;
  for (let i = 0; i < 12; i++) {
    const sao = VONG_TRUONG_SINH[i];
    const idx = thuanChieu
      ? (idxKhoi + i) % 12
      : ((idxKhoi - i) % 12 + 12) % 12;
    result[sao] = CHI_LIST[idx];
  }
  return result;
}

/**
 * G2-2: Vòng Thái Tuế (12 cung × 13 sao - vì Thiếu Dương đồng cung Thiên Không).
 *
 * Vị trí Thái Tuế = cung có địa chi trùng với chi năm sinh âm lịch.
 * Đi THUẬN chiều kim đồng hồ (chi tăng) qua các sao:
 *
 *   0: Thái Tuế
 *   1: Thiếu Dương + Thiên Không (đồng cung)
 *   2: Tang Môn
 *   3: Thiếu Âm
 *   4: Quan Phù
 *   5: Tử Phù
 *   6: Tuế Phá
 *   7: Long Đức
 *   8: Bạch Hổ
 *   9: Phúc Đức        ← lưu ý: trùng tên với CUNG Phúc Đức, đây là SAO
 *  10: Điếu Khách
 *  11: Trực Phù
 */
export const VONG_THAI_TUE_OFFSET: Array<{ offset: number; sao: string[] }> = [
  { offset: 0,  sao: ['Thái Tuế'] },
  { offset: 1,  sao: ['Thiếu Dương', 'Thiên Không'] },
  { offset: 2,  sao: ['Tang Môn'] },
  { offset: 3,  sao: ['Thiếu Âm'] },
  { offset: 4,  sao: ['Quan Phù'] },
  { offset: 5,  sao: ['Tử Phù'] },
  { offset: 6,  sao: ['Tuế Phá'] },
  { offset: 7,  sao: ['Long Đức'] },
  { offset: 8,  sao: ['Bạch Hổ'] },
  { offset: 9,  sao: ['Phúc Đức'] },
  { offset: 10, sao: ['Điếu Khách'] },
  { offset: 11, sao: ['Trực Phù'] },
];

export function tinhVongThaiTue(chiNamSinh: Chi): Record<string, Chi> {
  const idxKhoi = CHI_LIST.indexOf(chiNamSinh);
  const result: Record<string, Chi> = {};
  for (const { offset, sao: saos } of VONG_THAI_TUE_OFFSET) {
    const chi = CHI_LIST[(idxKhoi + offset) % 12];
    for (const sao of saos) result[sao] = chi;
  }
  return result;
}

/**
 * G2-3: Vòng Lộc Tồn (12 cung, 13 sao - bao gồm Bác Sĩ đồng cung Lộc Tồn).
 *
 * Vị trí Lộc Tồn theo Can năm sinh:
 *   Giáp → Dần, Ất → Mão
 *   Bính → Tỵ, Mậu → Tỵ
 *   Đinh → Ngọ, Kỷ → Ngọ
 *   Canh → Thân, Tân → Dậu
 *   Nhâm → Hợi, Quý → Tý
 *
 * Bác Sĩ luôn đồng cung với Lộc Tồn.
 *
 * Chiều an:
 *   Dương Nam, Âm Nữ → thuận (chiều kim đồng hồ)
 *   Âm Nam, Dương Nữ → nghịch
 *
 * Thứ tự (offset từ Lộc Tồn):
 *   0:  Lộc Tồn + Bác Sĩ
 *   1:  Lực Sĩ
 *   2:  Thanh Long
 *   3:  Tiểu Hao
 *   4:  Tướng Quân
 *   5:  Tấu Thư
 *   6:  Phi Liêm
 *   7:  Hỷ Thần
 *   8:  Bệnh Phù
 *   9:  Đại Hao
 *   10: Phục Binh
 *   11: Quan Phủ
 */
export const VONG_LOC_TON_OFFSET: Array<{ offset: number; sao: string[] }> = [
  { offset: 0,  sao: ['Lộc Tồn', 'Bác Sĩ'] },
  { offset: 1,  sao: ['Lực Sĩ'] },
  { offset: 2,  sao: ['Thanh Long'] },
  { offset: 3,  sao: ['Tiểu Hao'] },
  { offset: 4,  sao: ['Tướng Quân'] },
  { offset: 5,  sao: ['Tấu Thư'] },
  { offset: 6,  sao: ['Phi Liêm'] },
  { offset: 7,  sao: ['Hỷ Thần'] },
  { offset: 8,  sao: ['Bệnh Phù'] },
  { offset: 9,  sao: ['Đại Hao'] },
  { offset: 10, sao: ['Phục Binh'] },
  { offset: 11, sao: ['Quan Phủ'] },
];

function chiLocTonTheoCan(canNamSinh: Can): Chi {
  const bang: Record<Can, Chi> = {
    'Giáp': 'Dần',  'Ất':   'Mão',
    'Bính': 'Tỵ',   'Đinh': 'Ngọ',
    'Mậu':  'Tỵ',   'Kỷ':   'Ngọ',
    'Canh': 'Thân', 'Tân':  'Dậu',
    'Nhâm': 'Hợi',  'Quý':  'Tý',
  };
  return bang[canNamSinh];
}

export function tinhVongLocTon(
  canNamSinh: Can,
  amDuongLaSo: AmDuongLaSo,
): Record<string, Chi> {
  const idxKhoi = CHI_LIST.indexOf(chiLocTonTheoCan(canNamSinh));
  const thuanChieu = amDuongLaSo === 'Dương Nam' || amDuongLaSo === 'Âm Nữ';

  const result: Record<string, Chi> = {};
  for (const { offset, sao: saos } of VONG_LOC_TON_OFFSET) {
    const idx = thuanChieu
      ? (idxKhoi + offset) % 12
      : ((idxKhoi - offset) % 12 + 12) % 12;
    for (const sao of saos) result[sao] = CHI_LIST[idx];
  }
  return result;
}

/**
 * G2-A: Sao theo CHI cố định (vị trí giống nhau trên mọi lá số).
 *   Thiên La luôn ở cung Thìn
 *   Địa Võng luôn ở cung Tuất
 */
export const SAO_THEO_CHI_CO_DINH: Record<string, Chi> = {
  'Thiên La': 'Thìn',
  'Địa Võng': 'Tuất',
};

/**
 * G2-A2: Sao theo TÊN CUNG cố định (chi thay đổi tuỳ lá số).
 *   Thiên Thương luôn ở cung Nô Bộc
 *   Thiên Sứ luôn ở cung Tật Ách
 *
 * Sẽ resolve trong lap-la-so.ts dựa trên cacCung array.
 */
export const SAO_THEO_TEN_CUNG_CO_DINH: Record<string, TenCung> = {
  'Thiên Thương': 'Nô Bộc',
  'Thiên Sứ': 'Tật Ách',
};

/**
 * G2-C: Sao theo THÁNG SINH âm lịch.
 * Mỗi sao có cung khởi (tháng 1) và chiều an (thuận/nghịch). Bước = thangSinh - 1.
 */
export const SAO_THEO_THANG_SINH: Array<{ ten: string; chiKhoi: Chi; thuan: boolean }> = [
  { ten: 'Thiên Hình',  chiKhoi: 'Dậu',  thuan: true },
  { ten: 'Thiên Y',     chiKhoi: 'Sửu',  thuan: true },
  { ten: 'Thiên Riêu',  chiKhoi: 'Sửu',  thuan: true },  // đồng cung Thiên Y
  { ten: 'Thiên Giải',  chiKhoi: 'Thân', thuan: true },
  { ten: 'Địa Giải',    chiKhoi: 'Mùi',  thuan: true },
  { ten: 'Tả Phụ',      chiKhoi: 'Thìn', thuan: true },
  { ten: 'Hữu Bật',     chiKhoi: 'Tuất', thuan: false }, // nghịch — đối Tả Phụ qua Sửu-Mùi
];

export function tinhSaoTheoThangSinh(thangSinhAm: number): Record<string, Chi> {
  if (thangSinhAm < 1 || thangSinhAm > 12) {
    throw new Error(`Tháng sinh âm không hợp lệ: ${thangSinhAm}`);
  }
  const result: Record<string, Chi> = {};
  const buoc = thangSinhAm - 1;
  for (const { ten, chiKhoi, thuan } of SAO_THEO_THANG_SINH) {
    const idxKhoi = CHI_LIST.indexOf(chiKhoi);
    const idx = thuan ? mod12(idxKhoi + buoc) : mod12(idxKhoi - buoc);
    result[ten] = CHI_LIST[idx];
  }
  return result;
}

/**
 * G2-B: Sao theo GIỜ sinh (đơn giản — không phụ thuộc chi năm sinh).
 *   Văn Xương: Tuất (Tý) → đếm NGHỊCH đến giờ sinh
 *   Văn Khúc:  Tuất (Tý) → đếm THUẬN
 *   Thai Phụ:  Ngọ (Tý)  → THUẬN
 *   Phong Cáo: Dần (Tý)  → THUẬN
 *   Địa Kiếp:  Hợi (Tý)  → THUẬN
 *   Địa Không: Hợi (Tý)  → NGHỊCH
 */
export const SAO_THEO_GIO_SINH: Array<{ ten: string; chiKhoi: Chi; thuan: boolean }> = [
  { ten: 'Văn Xương', chiKhoi: 'Tuất', thuan: false },  // khởi Tuất, nghịch — đối Văn Khúc qua Sửu-Mùi
  { ten: 'Văn Khúc',  chiKhoi: 'Thìn', thuan: true },   // khởi Thìn, thuận
  { ten: 'Thai Phụ',  chiKhoi: 'Ngọ',  thuan: true },
  { ten: 'Phong Cáo', chiKhoi: 'Dần',  thuan: true },
  { ten: 'Địa Kiếp',  chiKhoi: 'Hợi',  thuan: true },
  { ten: 'Địa Không', chiKhoi: 'Hợi',  thuan: false },
];

export function tinhSaoTheoGioSinh(gioSinh: number): Record<string, Chi> {
  const idxChiGio = CHI_LIST.indexOf(chiCuaGio(gioSinh));
  const result: Record<string, Chi> = {};
  for (const { ten, chiKhoi, thuan } of SAO_THEO_GIO_SINH) {
    const idxKhoi = CHI_LIST.indexOf(chiKhoi);
    const idx = thuan ? mod12(idxKhoi + idxChiGio) : mod12(idxKhoi - idxChiGio);
    result[ten] = CHI_LIST[idx];
  }
  return result;
}

/**
 * Hỏa Tinh / Linh Tinh — phụ thuộc Chi năm sinh + giờ sinh + âm dương lá số.
 *
 * Vị trí khởi (giờ Tý) theo Chi năm:
 *   Hỏa Tinh:  Dần/Ngọ/Tuất → Sửu;  Thân/Tý/Thìn → Dần;  Tỵ/Dậu/Sửu → Mão;  Hợi/Mão/Mùi → Dậu
 *   Linh Tinh: Dần/Ngọ/Tuất → Mão;  Thân/Tý/Thìn → Tuất; Tỵ/Dậu/Sửu → Tuất; Hợi/Mão/Mùi → Tuất
 *
 * Chiều an:
 *   Hỏa Tinh:  Dương Nam/Âm Nữ → THUẬN, Âm Nam/Dương Nữ → NGHỊCH
 *   Linh Tinh: NGƯỢC LẠI Hỏa Tinh
 */
const KHOI_HOA_TINH: Record<Chi, Chi> = {
  'Dần': 'Sửu', 'Ngọ': 'Sửu', 'Tuất': 'Sửu',
  'Thân': 'Dần', 'Tý': 'Dần', 'Thìn': 'Dần',
  'Tỵ': 'Mão', 'Dậu': 'Mão', 'Sửu': 'Mão',
  'Hợi': 'Dậu', 'Mão': 'Dậu', 'Mùi': 'Dậu',
};
const KHOI_LINH_TINH: Record<Chi, Chi> = {
  'Dần': 'Mão', 'Ngọ': 'Mão', 'Tuất': 'Mão',
  'Thân': 'Tuất', 'Tý': 'Tuất', 'Thìn': 'Tuất',
  'Tỵ': 'Tuất', 'Dậu': 'Tuất', 'Sửu': 'Tuất',
  'Hợi': 'Tuất', 'Mão': 'Tuất', 'Mùi': 'Tuất',
};

export function tinhHoaLinhTinh(
  chiNamSinh: Chi,
  gioSinh: number,
  amDuongLaSo: AmDuongLaSo,
): Record<string, Chi> {
  const idxChiGio = CHI_LIST.indexOf(chiCuaGio(gioSinh));
  const duongNamAmNu = amDuongLaSo === 'Dương Nam' || amDuongLaSo === 'Âm Nữ';

  const idxHoaKhoi = CHI_LIST.indexOf(KHOI_HOA_TINH[chiNamSinh]);
  const idxLinhKhoi = CHI_LIST.indexOf(KHOI_LINH_TINH[chiNamSinh]);

  // Hỏa: Dương Nam/Âm Nữ thuận; Linh: ngược lại
  const idxHoa = duongNamAmNu ? mod12(idxHoaKhoi + idxChiGio) : mod12(idxHoaKhoi - idxChiGio);
  const idxLinh = duongNamAmNu ? mod12(idxLinhKhoi - idxChiGio) : mod12(idxLinhKhoi + idxChiGio);

  return {
    'Hỏa Tinh': CHI_LIST[idxHoa],
    'Linh Tinh': CHI_LIST[idxLinh],
  };
}

/**
 * G2-D: Sao theo NGÀY sinh.
 *   Tam Thai:   từ Tả Phụ là ngày 1, THUẬN đến ngày sinh
 *   Bát Tọa:    từ Hữu Bật là ngày 1, NGHỊCH đến ngày sinh
 *   Thiên Quý:  từ Văn Khúc là ngày 1, NGHỊCH đến (ngày sinh - 1)
 *   Ân Quang:   từ Văn Xương là ngày 1, THUẬN đến (ngày sinh - 1)
 */
export function tinhSaoTheoNgaySinh(
  ngaySinhAm: number,
  positions: { taPhu: Chi; huuBat: Chi; vanXuong: Chi; vanKhuc: Chi },
): Record<string, Chi> {
  const result: Record<string, Chi> = {};
  result['Tam Thai']   = CHI_LIST[mod12(CHI_LIST.indexOf(positions.taPhu)   + (ngaySinhAm - 1))];
  result['Bát Tọa']    = CHI_LIST[mod12(CHI_LIST.indexOf(positions.huuBat)  - (ngaySinhAm - 1))];
  result['Thiên Quý']  = CHI_LIST[mod12(CHI_LIST.indexOf(positions.vanKhuc) - (ngaySinhAm - 2))];
  result['Ân Quang']   = CHI_LIST[mod12(CHI_LIST.indexOf(positions.vanXuong)+ (ngaySinhAm - 2))];
  return result;
}

/**
 * G2-E: Sao theo CAN năm sinh (offset từ Lộc Tồn).
 *   Kình Dương: Lộc Tồn + 1 thuận
 *   Đà La:      Lộc Tồn + 1 nghịch
 *   Lưu Niên Văn Tinh: + 3 thuận
 *   Đường Phù: + 5 thuận
 *   Quốc Ấn:   + 8 thuận
 */
export const SAO_OFFSET_TU_LOC_TON: Array<{ ten: string; offset: number; thuan: boolean }> = [
  { ten: 'Kình Dương',         offset: 1, thuan: true },
  { ten: 'Đà La',              offset: 1, thuan: false },
  { ten: 'Lưu Niên Văn Tinh',  offset: 3, thuan: true },
  { ten: 'Đường Phù',          offset: 5, thuan: true },
  { ten: 'Quốc Ấn',            offset: 8, thuan: true },
];

export function tinhSaoOffsetTuLocTon(chiLocTon: Chi): Record<string, Chi> {
  const idxLocTon = CHI_LIST.indexOf(chiLocTon);
  const result: Record<string, Chi> = {};
  for (const { ten, offset, thuan } of SAO_OFFSET_TU_LOC_TON) {
    const idx = thuan ? mod12(idxLocTon + offset) : mod12(idxLocTon - offset);
    result[ten] = CHI_LIST[idx];
  }
  return result;
}
