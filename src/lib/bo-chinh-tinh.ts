import type { ChinhTinh } from '@/core/tuvi/types';

export type BoChinhTinh =
  | 'Tử Phủ Vũ Tướng'
  | 'Sát Phá Tham'
  | 'Cơ Nguyệt Đồng Lương'
  | 'Cự Nhật';

/** Mỗi chính tinh thuộc 1 trong 4 bộ chính tinh truyền thống. */
const MAP_BO: Record<ChinhTinh, BoChinhTinh> = {
  'Tử Vi':       'Tử Phủ Vũ Tướng',
  'Thiên Phủ':   'Tử Phủ Vũ Tướng',
  'Vũ Khúc':     'Tử Phủ Vũ Tướng',
  'Thiên Tướng': 'Tử Phủ Vũ Tướng',
  'Liêm Trinh':  'Tử Phủ Vũ Tướng',

  'Thất Sát':    'Sát Phá Tham',
  'Phá Quân':    'Sát Phá Tham',
  'Tham Lang':   'Sát Phá Tham',

  'Thiên Cơ':    'Cơ Nguyệt Đồng Lương',
  'Thái Âm':     'Cơ Nguyệt Đồng Lương',
  'Thiên Đồng':  'Cơ Nguyệt Đồng Lương',
  'Thiên Lương': 'Cơ Nguyệt Đồng Lương',

  'Cự Môn':      'Cự Nhật',
  'Thái Dương':  'Cự Nhật',
};

export function boCuaChinhTinh(sao: ChinhTinh): BoChinhTinh {
  return MAP_BO[sao];
}

/** Mô tả ngắn từng bộ — dùng cho phần Tổng quan. */
export const MO_TA_BO: Record<BoChinhTinh, string> = {
  'Tử Phủ Vũ Tướng':
    'Bộ chủ về phú quý, địa vị và quản lý. Đương số thiên hướng giữ chức trách, có khả năng tổ chức, lãnh đạo và ổn định cuộc sống — phù hợp đường quan, đường tài chính, hành chính.',
  'Sát Phá Tham':
    'Bộ chủ về biến động, hành động và đột phá. Đương số có tinh thần chiến đấu, dám dấn thân, đời sống nhiều bước ngoặt — phù hợp kinh doanh, võ nghiệp, khởi nghiệp, sáng tạo.',
  'Cơ Nguyệt Đồng Lương':
    'Bộ chủ về trí tuệ, văn chương và phúc thiện. Đương số thiên về suy nghĩ, tính toán, có tâm tu dưỡng, sống đời thanh nhàn — phù hợp giáo dục, y dược, văn hóa, tham mưu.',
  'Cự Nhật':
    'Bộ chủ về ngôn ngữ và danh tiếng. Đương số có tài ăn nói, hùng biện, dễ nổi tiếng nhưng cũng dễ vướng thị phi — phù hợp luật, ngoại giao, MC, truyền thông, giảng dạy.',
};
