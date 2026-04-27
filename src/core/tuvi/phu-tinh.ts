import { Chi, Cuc, AmDuongLaSo, CHI_LIST } from './types';

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
