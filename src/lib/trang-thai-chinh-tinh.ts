import type { Chi, ChinhTinh, TrangThaiSao } from '@/core/tuvi/types';

/**
 * Bảng tra TRẠNG THÁI (Miếu/Vượng/Đắc/Bình/Hãm) của 14 chính tinh tại 12 chi.
 *
 * Source:
 * - 10 sao đầu: extract từ tomTat các file `src/data/luan-giai/chinh-tinh/*.ts`
 * - 4 sao sau (Thiên Cơ, Liêm Trinh, Tham Lang, Thất Sát) + bổ sung: data
 *   user xác nhận trực tiếp (chuyên gia tử vi).
 *
 * **HOÀN TẤT 168/168 entries** — toàn bộ trạng thái đã được user xác nhận.
 *
 * Lookup `undefined` → UI KHÔNG hiển thị viết tắt.
 *
 * Edge cases đã xử lý:
 * - Tử Vi: user override Tỵ + Hợi đều Vượng (file gốc Hợi=Bình)
 * - Thiên Phủ: user override toàn bộ (file gốc Miếu nhiều sao thì user ghi Vượng/Đắc/Bình)
 * - Thái Âm: user override toàn bộ (file gốc dùng "Mọc/Lặn" cho Dần/Thân, user ghi Hãm/Vượng)
 * - Phá Quân: user override (Mùi từ Miếu thành Vượng)
 * - Thiên Lương: bổ sung Sửu/Mùi = Vượng
 */
export const TRANG_THAI_CHINH_TINH: Partial<Record<ChinhTinh, Partial<Record<Chi, TrangThaiSao>>>> = {
  'Tử Vi': {
    'Tý':  'Bình',  'Sửu': 'Đắc',   'Dần':  'Miếu',  'Mão':  'Bình',
    'Thìn':'Vượng', 'Tỵ':  'Vượng', 'Ngọ':  'Miếu',  'Mùi':  'Đắc',
    'Thân':'Miếu',  'Dậu': 'Bình',  'Tuất': 'Vượng', 'Hợi':  'Vượng',
  },

  'Thiên Cơ': {
    'Tý':  'Đắc',   'Sửu': 'Đắc',   'Dần':  'Hãm',   'Mão':  'Miếu',
    'Thìn':'Miếu',  'Tỵ':  'Vượng', 'Ngọ':  'Đắc',   'Mùi':  'Đắc',
    'Thân':'Vượng', 'Dậu': 'Miếu',  'Tuất': 'Miếu',  'Hợi':  'Hãm',
  },

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

  'Liêm Trinh': {
    'Tý':  'Vượng', 'Sửu': 'Đắc',   'Dần':  'Vượng', 'Mão':  'Hãm',
    'Thìn':'Miếu',  'Tỵ':  'Hãm',   'Ngọ':  'Vượng', 'Mùi':  'Đắc',
    'Thân':'Vượng', 'Dậu': 'Hãm',   'Tuất': 'Miếu',  'Hợi':  'Hãm',
  },

  'Thiên Phủ': {
    'Tý':  'Vượng', 'Sửu': 'Bình',  'Dần':  'Vượng', 'Mão':  'Bình',
    'Thìn':'Đắc',   'Tỵ':  'Đắc',   'Ngọ':  'Vượng', 'Mùi':  'Đắc',
    'Thân':'Vượng', 'Dậu': 'Bình',  'Tuất': 'Đắc',   'Hợi':  'Đắc',
  },

  'Thái Âm': {
    'Tý':  'Vượng', 'Sửu': 'Đắc',   'Dần':  'Hãm',   'Mão':  'Hãm',
    'Thìn':'Hãm',   'Tỵ':  'Hãm',   'Ngọ':  'Hãm',   'Mùi':  'Đắc',
    'Thân':'Vượng', 'Dậu': 'Miếu',  'Tuất': 'Miếu',  'Hợi':  'Miếu',
  },

  'Tham Lang': {
    'Tý':  'Hãm',   'Sửu': 'Miếu',  'Dần':  'Đắc',   'Mão':  'Hãm',
    'Thìn':'Vượng', 'Tỵ':  'Hãm',   'Ngọ':  'Hãm',   'Mùi':  'Miếu',
    'Thân':'Đắc',   'Dậu': 'Hãm',   'Tuất': 'Vượng', 'Hợi':  'Hãm',
  },

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
    'Tý':  'Vượng', 'Sửu': 'Vượng', 'Dần':  'Vượng', 'Mão':  'Vượng',
    'Thìn':'Miếu',  'Tỵ':  'Hãm',   'Ngọ':  'Miếu',  'Mùi':  'Vượng',
    'Thân':'Vượng', 'Dậu': 'Hãm',   'Tuất': 'Miếu',  'Hợi':  'Hãm',
  },

  'Thất Sát': {
    'Tý':  'Miếu',  'Sửu': 'Đắc',   'Dần':  'Miếu',  'Mão':  'Hãm',
    'Thìn':'Hãm',   'Tỵ':  'Vượng', 'Ngọ':  'Miếu',  'Mùi':  'Đắc',
    'Thân':'Miếu',  'Dậu': 'Hãm',   'Tuất': 'Hãm',   'Hợi':  'Vượng',
  },

  'Phá Quân': {
    'Tý':  'Miếu',  'Sửu': 'Vượng', 'Dần':  'Hãm',   'Mão':  'Hãm',
    'Thìn':'Đắc',   'Tỵ':  'Hãm',   'Ngọ':  'Miếu',  'Mùi':  'Vượng',
    'Thân':'Hãm',   'Dậu': 'Hãm',   'Tuất': 'Đắc',   'Hợi':  'Hãm',
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
 */
export const VIET_TAT_TRANG_THAI: Record<TrangThaiSao, string> = {
  'Miếu':  'M',
  'Vượng': 'V',
  'Đắc':   'Đ',
  'Bình':  'B',
  'Hãm':   'H',
};
