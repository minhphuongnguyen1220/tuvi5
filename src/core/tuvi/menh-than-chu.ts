import { Chi } from './types';

/**
 * Mệnh chủ và Thân chủ - 2 sao đặc biệt đại diện cho Mệnh và Thân của lá số.
 *
 * - Mệnh chủ: dựa trên Chi NĂM sinh
 * - Thân chủ: dựa trên Chi NĂM sinh
 *
 * Cả hai cùng input là chi năm sinh, nhưng khác bảng tra.
 *
 * (Bắc phái Việt Nam, theo phong cách user xác nhận)
 */

/**
 * Tra Mệnh chủ theo Chi NĂM sinh.
 *
 * Tý        → Tham Lang
 * Sửu, Hợi  → Cự Môn
 * Dần, Tuất → Lộc Tồn
 * Mão, Dậu  → Văn Khúc
 * Thìn, Thân→ Liêm Trinh
 * Tỵ, Mùi   → Vũ Khúc
 * Ngọ       → Phá Quân
 */
export function menhChuTheoChiNam(chiNam: Chi): string {
  const bang: Record<Chi, string> = {
    'Tý': 'Tham Lang',
    'Sửu': 'Cự Môn', 'Hợi': 'Cự Môn',
    'Dần': 'Lộc Tồn', 'Tuất': 'Lộc Tồn',
    'Mão': 'Văn Khúc', 'Dậu': 'Văn Khúc',
    'Thìn': 'Liêm Trinh', 'Thân': 'Liêm Trinh',
    'Tỵ': 'Vũ Khúc', 'Mùi': 'Vũ Khúc',
    'Ngọ': 'Phá Quân',
  };
  return bang[chiNam];
}

/**
 * Tra Thân chủ theo Chi NĂM sinh (không phải chi giờ).
 *
 * Tý         → Hỏa Tinh
 * Ngọ        → Linh Tinh
 * Sửu, Mùi   → Thiên Tướng
 * Dần, Thân  → Thiên Lương
 * Mão, Dậu   → Thiên Đồng
 * Thìn, Tuất → Văn Xương
 * Tỵ, Hợi    → Thiên Cơ
 */
export function thanChuTheoChiNam(chiNam: Chi): string {
  const bang: Record<Chi, string> = {
    'Tý': 'Hỏa Tinh',
    'Ngọ': 'Linh Tinh',
    'Sửu': 'Thiên Tướng', 'Mùi': 'Thiên Tướng',
    'Dần': 'Thiên Lương', 'Thân': 'Thiên Lương',
    'Mão': 'Thiên Đồng', 'Dậu': 'Thiên Đồng',
    'Thìn': 'Văn Xương', 'Tuất': 'Văn Xương',
    'Tỵ': 'Thiên Cơ', 'Hợi': 'Thiên Cơ',
  };
  return bang[chiNam];
}
