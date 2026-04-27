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

/**
 * Thiên Khôi + Thiên Việt theo Can năm sinh.
 */
const BANG_KHOI_VIET: Record<Can, { khoi: Chi; viet: Chi }> = {
  'Giáp': { khoi: 'Sửu', viet: 'Mùi' },
  'Ất':   { khoi: 'Tý',  viet: 'Thân' },
  'Bính': { khoi: 'Hợi', viet: 'Dậu' },
  'Đinh': { khoi: 'Hợi', viet: 'Dậu' },
  'Mậu':  { khoi: 'Sửu', viet: 'Mùi' },
  'Kỷ':   { khoi: 'Tý',  viet: 'Thân' },
  'Canh': { khoi: 'Ngọ', viet: 'Dần' },
  'Tân':  { khoi: 'Ngọ', viet: 'Dần' },
  'Nhâm': { khoi: 'Mão', viet: 'Tỵ' },
  'Quý':  { khoi: 'Mão', viet: 'Tỵ' },
};

export function tinhKhoiViet(canNamSinh: Can): Record<string, Chi> {
  const { khoi, viet } = BANG_KHOI_VIET[canNamSinh];
  return { 'Thiên Khôi': khoi, 'Thiên Việt': viet };
}

/**
 * Lưu Hà theo Can năm sinh.
 */
const BANG_LUU_HA: Record<Can, Chi> = {
  'Giáp': 'Dậu',  'Ất': 'Tuất', 'Bính': 'Mùi',
  'Đinh': 'Thìn', 'Mậu': 'Tỵ',  'Kỷ': 'Ngọ',
  'Canh': 'Thân', 'Tân': 'Mão', 'Nhâm': 'Hợi',
  'Quý': 'Dần',
};

export function tinhLuuHa(canNamSinh: Can): Chi {
  return BANG_LUU_HA[canNamSinh];
}

/**
 * Tứ Hóa: bảng sao mà Hóa Lộc/Quyền/Khoa/Kỵ "gắn" vào theo Can năm sinh.
 *
 * Tứ Hóa không có vị trí cố định — chúng theo sao "chủ" (chính tinh hoặc phụ tinh)
 * và đứng cùng cung với sao chủ đó.
 *
 * Chú ý: Hóa Khoa/Kỵ có thể gắn vào phụ tinh (Văn Xương, Văn Khúc, Tả Phụ, Hữu Bật).
 */
/**
 * Thiên Trù theo Can năm sinh.
 */
const BANG_THIEN_TRU: Record<Can, Chi> = {
  'Giáp': 'Tỵ',  'Ất': 'Ngọ',  'Bính': 'Tý',  'Đinh': 'Tỵ',
  'Mậu':  'Ngọ', 'Kỷ': 'Thân', 'Canh': 'Dần', 'Tân':  'Ngọ',
  'Nhâm': 'Dậu', 'Quý': 'Tuất',
};
export function tinhThienTru(canNamSinh: Can): Chi {
  return BANG_THIEN_TRU[canNamSinh];
}

/**
 * Thiên Quan + Thiên Phúc theo Can năm sinh.
 */
const BANG_THIEN_QUAN: Record<Can, Chi> = {
  'Giáp': 'Mùi', 'Ất': 'Thìn', 'Bính': 'Tỵ',  'Đinh': 'Dần',
  'Mậu':  'Mão', 'Kỷ': 'Dậu',  'Canh': 'Hợi', 'Tân':  'Dậu',
  'Nhâm': 'Tuất','Quý': 'Ngọ',
};
const BANG_THIEN_PHUC: Record<Can, Chi> = {
  'Giáp': 'Dậu', 'Ất': 'Thân', 'Bính': 'Tý',  'Đinh': 'Hợi',
  'Mậu':  'Mão', 'Kỷ': 'Dần',  'Canh': 'Ngọ', 'Tân':  'Tỵ',
  'Nhâm': 'Ngọ', 'Quý': 'Tỵ',
};
export function tinhThienQuanPhuc(canNamSinh: Can): Record<string, Chi> {
  return {
    'Thiên Quan': BANG_THIEN_QUAN[canNamSinh],
    'Thiên Phúc': BANG_THIEN_PHUC[canNamSinh],
  };
}

/**
 * Sao đồng cung với sao trong Vòng Thái Tuế.
 *   Long Trì   ↔ Quan Phù
 *   Nguyệt Đức ↔ Tử Phù
 *   Thiên Hư   ↔ Tuế Phá
 *   Thiên Đức  ↔ Phúc Đức (sao trong Vòng Thái Tuế, offset 9 từ Thái Tuế)
 */
export const SAO_DONG_CUNG_THAI_TUE: Record<string, string> = {
  'Long Trì':   'Quan Phù',
  'Nguyệt Đức': 'Tử Phù',
  'Thiên Hư':   'Tuế Phá',
  'Thiên Đức':  'Phúc Đức',
};

/**
 * Sao khởi cung X (năm Tý), đếm NGHỊCH đến chi năm sinh.
 */
export const SAO_NGHICH_TU_NAM: Array<{ ten: string; chiKhoi: Chi }> = [
  { ten: 'Thiên Khốc', chiKhoi: 'Ngọ' },
  { ten: 'Hồng Loan',  chiKhoi: 'Mão' },
  { ten: 'Thiên Hỷ',   chiKhoi: 'Dậu' },
  { ten: 'Phượng Các', chiKhoi: 'Tuất' },
  { ten: 'Giải Thần',  chiKhoi: 'Tuất' },
];

export function tinhSaoNghichTuNam(chiNamSinh: Chi): Record<string, Chi> {
  const idxNam = CHI_LIST.indexOf(chiNamSinh);
  const result: Record<string, Chi> = {};
  for (const { ten, chiKhoi } of SAO_NGHICH_TU_NAM) {
    const idxKhoi = CHI_LIST.indexOf(chiKhoi);
    result[ten] = CHI_LIST[mod12(idxKhoi - idxNam)];
  }
  return result;
}

/**
 * Sao theo tam hợp Chi năm sinh.
 *   Hoa Cái, Đào Hoa, Thiên Mã, Kiếp Sát
 */
type TamHop = 'Dần-Ngọ-Tuất' | 'Thân-Tý-Thìn' | 'Tỵ-Dậu-Sửu' | 'Hợi-Mão-Mùi';

const TAM_HOP_CUA_CHI: Record<Chi, TamHop> = {
  'Dần': 'Dần-Ngọ-Tuất', 'Ngọ': 'Dần-Ngọ-Tuất', 'Tuất': 'Dần-Ngọ-Tuất',
  'Thân': 'Thân-Tý-Thìn', 'Tý': 'Thân-Tý-Thìn', 'Thìn': 'Thân-Tý-Thìn',
  'Tỵ': 'Tỵ-Dậu-Sửu', 'Dậu': 'Tỵ-Dậu-Sửu', 'Sửu': 'Tỵ-Dậu-Sửu',
  'Hợi': 'Hợi-Mão-Mùi', 'Mão': 'Hợi-Mão-Mùi', 'Mùi': 'Hợi-Mão-Mùi',
};

const SAO_THEO_TAM_HOP_NAM: Record<string, Record<TamHop, Chi>> = {
  'Hoa Cái':  { 'Dần-Ngọ-Tuất': 'Tuất', 'Thân-Tý-Thìn': 'Thìn', 'Tỵ-Dậu-Sửu': 'Sửu', 'Hợi-Mão-Mùi': 'Mùi' },
  'Đào Hoa':  { 'Dần-Ngọ-Tuất': 'Mão',  'Thân-Tý-Thìn': 'Dậu',  'Tỵ-Dậu-Sửu': 'Ngọ', 'Hợi-Mão-Mùi': 'Tý' },
  'Thiên Mã': { 'Dần-Ngọ-Tuất': 'Thân', 'Thân-Tý-Thìn': 'Dần',  'Tỵ-Dậu-Sửu': 'Hợi', 'Hợi-Mão-Mùi': 'Tỵ' },
  'Kiếp Sát': { 'Dần-Ngọ-Tuất': 'Hợi',  'Thân-Tý-Thìn': 'Tỵ',   'Tỵ-Dậu-Sửu': 'Dần', 'Hợi-Mão-Mùi': 'Thân' },
};

export function tinhSaoTheoTamHopNam(chiNamSinh: Chi): Record<string, Chi> {
  const tamHop = TAM_HOP_CUA_CHI[chiNamSinh];
  const result: Record<string, Chi> = {};
  for (const [sao, mapping] of Object.entries(SAO_THEO_TAM_HOP_NAM)) {
    result[sao] = mapping[tamHop];
  }
  return result;
}

/**
 * Cô Thần + Quả Tú: theo nhóm 3 chi liên tiếp.
 *   Hợi-Tý-Sửu, Dần-Mão-Thìn, Tỵ-Ngọ-Mùi, Thân-Dậu-Tuất
 */
type Nhom3Chi = 'Hợi-Tý-Sửu' | 'Dần-Mão-Thìn' | 'Tỵ-Ngọ-Mùi' | 'Thân-Dậu-Tuất';

const NHOM_3_CHI_CUA_CHI: Record<Chi, Nhom3Chi> = {
  'Hợi': 'Hợi-Tý-Sửu', 'Tý': 'Hợi-Tý-Sửu', 'Sửu': 'Hợi-Tý-Sửu',
  'Dần': 'Dần-Mão-Thìn', 'Mão': 'Dần-Mão-Thìn', 'Thìn': 'Dần-Mão-Thìn',
  'Tỵ': 'Tỵ-Ngọ-Mùi', 'Ngọ': 'Tỵ-Ngọ-Mùi', 'Mùi': 'Tỵ-Ngọ-Mùi',
  'Thân': 'Thân-Dậu-Tuất', 'Dậu': 'Thân-Dậu-Tuất', 'Tuất': 'Thân-Dậu-Tuất',
};

const SAO_THEO_NHOM_3_CHI: Record<string, Record<Nhom3Chi, Chi>> = {
  'Cô Thần': { 'Hợi-Tý-Sửu': 'Dần', 'Dần-Mão-Thìn': 'Tỵ', 'Tỵ-Ngọ-Mùi': 'Thân', 'Thân-Dậu-Tuất': 'Hợi' },
  'Quả Tú':  { 'Hợi-Tý-Sửu': 'Tuất', 'Dần-Mão-Thìn': 'Sửu', 'Tỵ-Ngọ-Mùi': 'Thìn', 'Thân-Dậu-Tuất': 'Mùi' },
};

export function tinhCoThanQuaTu(chiNamSinh: Chi): Record<string, Chi> {
  const nhom = NHOM_3_CHI_CUA_CHI[chiNamSinh];
  return {
    'Cô Thần': SAO_THEO_NHOM_3_CHI['Cô Thần'][nhom],
    'Quả Tú':  SAO_THEO_NHOM_3_CHI['Quả Tú'][nhom],
  };
}

/**
 * Phá Toái: theo Tứ sinh / Tứ chính / Tứ mộ của chi năm.
 *   Tứ sinh (Dần Thân Tỵ Hợi)   → Dậu
 *   Tứ chính (Tý Ngọ Mão Dậu)   → Tỵ
 *   Tứ mộ (Thìn Tuất Sửu Mùi)   → Sửu
 */
export function tinhPhaToai(chiNamSinh: Chi): Chi {
  const TU_SINH: Chi[] = ['Dần', 'Thân', 'Tỵ', 'Hợi'];
  const TU_CHINH: Chi[] = ['Tý', 'Ngọ', 'Mão', 'Dậu'];
  if (TU_SINH.includes(chiNamSinh)) return 'Dậu';
  if (TU_CHINH.includes(chiNamSinh)) return 'Tỵ';
  return 'Sửu'; // Tứ mộ
}

export const BANG_TU_HOA: Record<Can, { loc: string; quyen: string; khoa: string; ky: string }> = {
  'Giáp': { loc: 'Liêm Trinh',  quyen: 'Phá Quân',    khoa: 'Vũ Khúc',     ky: 'Thái Dương' },
  'Ất':   { loc: 'Thiên Cơ',    quyen: 'Thiên Lương', khoa: 'Tử Vi',       ky: 'Thái Âm' },
  'Bính': { loc: 'Thiên Đồng',  quyen: 'Thiên Cơ',    khoa: 'Văn Xương',   ky: 'Liêm Trinh' },
  'Đinh': { loc: 'Thái Âm',     quyen: 'Thiên Đồng',  khoa: 'Thiên Cơ',    ky: 'Cự Môn' },
  'Mậu':  { loc: 'Tham Lang',   quyen: 'Thái Âm',     khoa: 'Hữu Bật',     ky: 'Thiên Cơ' },
  'Kỷ':   { loc: 'Vũ Khúc',     quyen: 'Tham Lang',   khoa: 'Thiên Lương', ky: 'Văn Khúc' },
  'Canh': { loc: 'Thái Dương',  quyen: 'Vũ Khúc',     khoa: 'Thái Âm',     ky: 'Thiên Đồng' },
  'Tân':  { loc: 'Cự Môn',      quyen: 'Thái Dương',  khoa: 'Văn Khúc',    ky: 'Văn Xương' },
  'Nhâm': { loc: 'Thiên Lương', quyen: 'Tử Vi',       khoa: 'Tả Phụ',      ky: 'Vũ Khúc' },
  'Quý':  { loc: 'Phá Quân',    quyen: 'Cự Môn',      khoa: 'Thái Âm',     ky: 'Tham Lang' },
};
