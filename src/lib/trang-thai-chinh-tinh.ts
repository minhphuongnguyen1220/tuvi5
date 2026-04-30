import type { Chi, ChinhTinh, TrangThaiSao } from '@/core/tuvi/types';

/**
 * Bảng tra TRẠNG THÁI (Miếu/Vượng/Đắc/Bình/Hãm) của 14 chính tinh tại 12 chi.
 *
 * Source: extract từ tomTat của 14 file `src/data/luan-giai/chinh-tinh/*.ts`,
 * section "Vị trí miếu hãm" trong entry tinh-chat-chung.
 *
 * **CHỖ THIẾU DATA (cần user bổ sung — 64/168 entries):**
 * - 4 sao chưa có data nào: Thiên Cơ, Liêm Trinh, Tham Lang, Thất Sát
 * - Tử Vi: thiếu Tỵ (theo file Tử Vi không có Hãm địa, có thể là 'Bình')
 * - Thiên Phủ: thiếu Mão, Tỵ, Ngọ, Thân, Hợi (file chỉ liệt kê Miếu + Hãm)
 * - Thái Âm: thiếu Sửu, Mùi (file dùng "Mọc/Lặn" cho Dần/Thân — map về 'Bình')
 * - Thiên Lương: thiếu Sửu, Mùi
 * - Phá Quân: thiếu Sửu, Mão, Thìn, Tỵ, Tuất, Hợi
 *
 * Lookup `undefined` → UI KHÔNG hiển thị viết tắt.
 *
 * Edge cases đã xử lý:
 * - Cự Môn "Vượng các cung còn lại" → suy ra Dần, Tỵ, Thân
 * - Thái Âm "Mọc/Lặn" (Dần, Thân) → map 'Bình' (giao thoa sáng tối)
 * - Thái Âm "Đắc viên" → 'Đắc'
 * - "Bình hòa" → 'Bình'
 */
export const TRANG_THAI_CHINH_TINH: Partial<Record<ChinhTinh, Partial<Record<Chi, TrangThaiSao>>>> = {
  'Tử Vi': {
    'Tý':  'Bình',  'Sửu': 'Đắc',   'Dần':  'Miếu',  'Mão':  'Bình',
    'Thìn':'Vượng', /* Tỵ thiếu */  'Ngọ':  'Miếu',  'Mùi':  'Đắc',
    'Thân':'Miếu',  'Dậu': 'Bình',  'Tuất': 'Vượng', 'Hợi':  'Bình',
  },

  // 'Thiên Cơ': data chưa có trong file luận giải

  'Thái Dương': {
    'Tý':  'Hãm',   'Sửu': 'Đắc',   'Dần':  'Vượng', 'Mão':  'Vượng',
    'Thìn':'Vượng', 'Tỵ':  'Miếu',  'Ngọ':  'Miếu',  'Mùi':  'Đắc',
    'Thân':'Hãm',   'Dậu': 'Hãm',   'Tuất': 'Hãm',   'Hợi':  'Hãm',
  },

  'Vũ Khúc': {
    'Tý':  'Vượng', 'Sửu': 'Miếu',  'Dần':  'Vượng', 'Mão':  'Đắc',
    'Thìn':'Miếu',  'Tỵ':  'Hãm',   'Ngọ':  'Vượng', 'Mùi':  'Miếu',
    'Thân':'Vượng', 'Dậu': 'Đắc',   'Tuất': 'Miếu',  'Hợi':  'Hãm',
  },

  'Thiên Đồng': {
    'Tý':  'Vượng', 'Sửu': 'Hãm',   'Dần':  'Miếu',  'Mão':  'Đắc',
    'Thìn':'Hãm',   'Tỵ':  'Đắc',   'Ngọ':  'Hãm',   'Mùi':  'Hãm',
    'Thân':'Miếu',  'Dậu': 'Hãm',   'Tuất': 'Hãm',   'Hợi':  'Đắc',
  },

  // 'Liêm Trinh': data chưa có trong file luận giải

  'Thiên Phủ': {
    'Tý':  'Miếu',  'Sửu': 'Miếu',  'Dần':  'Miếu',  /* Mão thiếu */
    'Thìn':'Miếu',  /* Tỵ thiếu */ /* Ngọ thiếu */   'Mùi':  'Miếu',
    /* Thân thiếu */'Dậu': 'Hãm',   'Tuất': 'Miếu',  /* Hợi thiếu */
  },

  'Thái Âm': {
    'Tý':  'Đắc',   /* Sửu thiếu */ 'Dần':  'Bình',  'Mão':  'Hãm',
    'Thìn':'Hãm',   'Tỵ':  'Hãm',   'Ngọ':  'Hãm',   /* Mùi thiếu */
    'Thân':'Bình',  'Dậu': 'Đắc',   'Tuất': 'Đắc',   'Hợi':  'Đắc',
  },

  // 'Tham Lang': data chưa có trong file luận giải

  'Cự Môn': {
    'Tý':  'Đắc',   'Sửu': 'Hãm',   'Dần':  'Vượng', 'Mão':  'Miếu',
    'Thìn':'Hãm',   'Tỵ':  'Vượng', 'Ngọ':  'Đắc',   'Mùi':  'Hãm',
    'Thân':'Vượng', 'Dậu': 'Miếu',  'Tuất': 'Hãm',   'Hợi':  'Đắc',
  },

  'Thiên Tướng': {
    'Tý':  'Vượng', 'Sửu': 'Đắc',   'Dần':  'Miếu',  'Mão':  'Hãm',
    'Thìn':'Vượng', 'Tỵ':  'Đắc',   'Ngọ':  'Vượng', 'Mùi':  'Đắc',
    'Thân':'Miếu',  'Dậu': 'Hãm',   'Tuất': 'Vượng', 'Hợi':  'Đắc',
  },

  'Thiên Lương': {
    'Tý':  'Vượng', /* Sửu thiếu */ 'Dần':  'Vượng', 'Mão':  'Vượng',
    'Thìn':'Miếu',  'Tỵ':  'Hãm',   'Ngọ':  'Miếu',  /* Mùi thiếu */
    'Thân':'Vượng', 'Dậu': 'Hãm',   'Tuất': 'Miếu',  'Hợi':  'Hãm',
  },

  // 'Thất Sát': data chưa có trong file luận giải

  'Phá Quân': {
    'Tý':  'Miếu',  /* Sửu thiếu */ 'Dần':  'Hãm',   /* Mão thiếu */
    /* Thìn thiếu *//* Tỵ thiếu */  'Ngọ':  'Miếu',  'Mùi':  'Miếu',
    'Thân':'Hãm',   'Dậu': 'Hãm',   /* Tuất thiếu *//* Hợi thiếu */
  },
};

/**
 * Tra trạng thái sao tại chi cụ thể. Trả về `undefined` nếu chưa có data.
 */
export function trangThaiChinhTinh(sao: string, chi: Chi): TrangThaiSao | undefined {
  return TRANG_THAI_CHINH_TINH[sao as ChinhTinh]?.[chi];
}

/**
 * Viết tắt trạng thái — dùng để hiển thị bên cạnh tên sao trên lá số.
 * Vd: 'Miếu' → 'M', 'Vượng' → 'V', 'Đắc' → 'Đ', 'Bình' → 'B', 'Hãm' → 'H'.
 */
export const VIET_TAT_TRANG_THAI: Record<TrangThaiSao, string> = {
  'Miếu':  'M',
  'Vượng': 'V',
  'Đắc':   'Đ',
  'Bình':  'B',
  'Hãm':   'H',
};
