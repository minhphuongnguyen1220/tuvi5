import { Chi, Can, Cuc, AmDuongLaSo, CHI_LIST } from './types';

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
