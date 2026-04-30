import type { NguHanh } from '@/core/tuvi/types';

/**
 * Bảng tra ngũ hành của 14 chính tinh.
 * Theo tử vi Việt Nam phổ biến (Bắc phái + sách cổ).
 */
export const NGU_HANH_CHINH_TINH: Record<string, NguHanh> = {
  'Tử Vi': 'Thổ',
  'Thiên Cơ': 'Mộc',
  'Thái Dương': 'Hỏa',
  'Vũ Khúc': 'Kim',
  'Thiên Đồng': 'Thủy',
  'Liêm Trinh': 'Hỏa',
  'Thiên Phủ': 'Thổ',
  'Thái Âm': 'Thủy',
  'Tham Lang': 'Thủy',
  'Cự Môn': 'Thủy',
  'Thiên Tướng': 'Thủy',
  'Thiên Lương': 'Thổ',
  'Thất Sát': 'Kim',
  'Phá Quân': 'Thủy',
};

/**
 * Bảng tra ngũ hành của 97 phụ tinh + 2 sao Tùy Tinh (Tuần / Triệt).
 * Trích từ data luận giải `src/data/luan-giai/phu-tinh/*.ts` — phần header
 * "Ngũ hành" trong tomTat của entry đầu tiên.
 */
export const NGU_HANH_PHU_TINH: Record<string, NguHanh> = {
  // Lục Cát Tinh
  'Tả Phù': 'Thổ',
  'Hữu Bật': 'Thủy',
  'Văn Xương': 'Kim',
  'Văn Khúc': 'Thủy',
  'Thiên Khôi': 'Hỏa',
  'Thiên Việt': 'Hỏa',

  // Lục Sát Tinh
  'Kình Dương': 'Kim',
  'Đà La': 'Kim',
  'Hỏa Tinh': 'Hỏa',
  'Linh Tinh': 'Hỏa',
  'Địa Không': 'Hỏa',
  'Địa Kiếp': 'Hỏa',

  // Tứ Hóa
  'Hóa Lộc': 'Mộc',
  'Hóa Quyền': 'Mộc',
  'Hóa Khoa': 'Thủy',
  'Hóa Kỵ': 'Thủy',

  // Lộc - Mã - Tam Minh
  'Lộc Tồn': 'Thổ',
  'Thiên Mã': 'Hỏa',
  'Đào Hoa': 'Mộc',
  'Hồng Loan': 'Thủy',
  'Thiên Hỷ': 'Thủy',

  // Vòng Lộc Tồn / Bác Sĩ
  'Bác Sĩ': 'Thủy',
  'Lực Sĩ': 'Hỏa',
  'Thanh Long': 'Thủy',
  'Tiểu Hao': 'Hỏa',
  'Tướng Quân': 'Mộc',
  'Tấu Thư': 'Kim',
  'Phi Liêm': 'Hỏa',
  'Hỷ Thần': 'Hỏa',
  'Bệnh Phù': 'Thổ',
  'Đại Hao': 'Hỏa',
  'Phục Binh': 'Hỏa',
  'Quan Phủ': 'Hỏa',

  // Vòng Thái Tuế
  'Thái Tuế': 'Hỏa',
  'Thiếu Dương': 'Hỏa',
  'Tang Môn': 'Mộc',
  'Thiếu Âm': 'Thủy',
  'Quan Phù': 'Hỏa',
  'Tử Phù': 'Hỏa',
  'Tuế Phá': 'Hỏa',
  'Long Đức': 'Thủy',
  'Bạch Hổ': 'Kim',
  'Phúc Đức': 'Thổ',
  'Điếu Khách': 'Hỏa',
  'Trực Phù': 'Hỏa',

  // Khốc Hư + nhóm năm sinh khác
  'Thiên Khốc': 'Thủy',
  'Thiên Hư': 'Thủy',
  'Kiếp Sát': 'Hỏa',
  'Phá Toái': 'Hỏa',
  'Long Trì': 'Thủy',
  'Phượng Các': 'Thổ',
  'Quốc Ấn': 'Thổ',
  'Lưu Niên Văn Tinh': 'Kim',
  'Thiên Thọ': 'Thổ',
  'Thiên Tài': 'Thổ',
  'Ân Quang': 'Mộc',
  'Thiên Quý': 'Thổ',
  'Thiên Quan': 'Hỏa',
  'Thiên Phúc': 'Hỏa',

  // Bộ Giải - Hình - Riêu - Y - Sứ Thương - Cô Quả - Lưu Hà
  'Thiên Giải': 'Hỏa',
  'Địa Giải': 'Thổ',
  'Giải Thần': 'Mộc',
  'Thiên Hình': 'Hỏa',
  'Thiên Riêu': 'Thủy',
  'Thiên Y': 'Thủy',
  'Lưu Hà': 'Thủy',
  'Cô Thần': 'Thổ',
  'Quả Tú': 'Thổ',
  'Thiên Thương': 'Thủy',
  'Thiên Sứ': 'Thủy',

  // Vòng Trường Sinh
  'Trường Sinh': 'Thủy',
  'Mộc Dục': 'Thủy',
  'Quan Đới': 'Kim',
  'Lâm Quan': 'Kim',
  'Đế Vượng': 'Kim',
  'Suy': 'Thủy',
  'Bệnh': 'Hỏa',
  'Tử': 'Thủy',
  'Mộ': 'Thổ',
  'Tuyệt': 'Thổ',
  'Thai': 'Thổ',
  'Dưỡng': 'Mộc',

  // Tứ Vinh + Tam Thai Bát Tọa + Tứ Đức + còn lại
  'Thai Phụ': 'Kim',
  'Phong Cáo': 'Thổ',
  'Tam Thai': 'Thủy',
  'Bát Tọa': 'Mộc',
  'Thiên Đức': 'Hỏa',
  'Nguyệt Đức': 'Hỏa',
  'Hoa Cái': 'Kim',
  'Thiên Không': 'Hỏa',
  'Thiên La': 'Thổ',
  'Địa Võng': 'Thổ',
  'Đẩu Quân': 'Hỏa',
  'Thiên Trù': 'Thổ',
  'Đường Phù': 'Mộc',

  // Tùy Tinh (Tứ Không) — có hành cố định
  'Tuần': 'Hỏa',
  'Triệt': 'Kim',
};

/**
 * Tra ngũ hành của một sao theo tên.
 * Tự động tìm trong cả bảng chính tinh + phụ tinh.
 * Trả về `undefined` nếu không có (để caller fallback màu mặc định).
 */
export function nguHanhCuaSao(tenSao: string): NguHanh | undefined {
  return NGU_HANH_CHINH_TINH[tenSao] ?? NGU_HANH_PHU_TINH[tenSao];
}

/**
 * Class màu Tailwind theo ngũ hành.
 * - Kim: bạc xám
 * - Mộc: xanh lá đậm
 * - Thủy: ĐEN (theo phong thủy cổ — user xác nhận)
 * - Hỏa: đỏ
 * - Thổ: nâu vàng
 *
 * Đọc tốt trên nền `bg-amber-50` của lá số.
 */
export const MAU_NGU_HANH: Record<NguHanh, string> = {
  'Kim': 'text-slate-600',
  'Mộc': 'text-green-700',
  'Thủy': 'text-stone-900',
  'Hỏa': 'text-red-600',
  'Thổ': 'text-amber-700',
};

/**
 * Lấy class màu Tailwind cho một sao theo ngũ hành của nó.
 * Nếu sao không có trong bảng tra → trả về màu mặc định (xám đen).
 */
export function mauCuaSao(tenSao: string, fallback = 'text-stone-700'): string {
  const hanh = nguHanhCuaSao(tenSao);
  return hanh ? MAU_NGU_HANH[hanh] : fallback;
}
