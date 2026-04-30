/**
 * Phân loại sao theo tính chất CÁT (tốt) / HUNG (xấu) / TRƯỜNG SINH (vòng đặc biệt).
 *
 * Dùng cho UI render: cát tinh xếp cột TRÁI, hung tinh cột PHẢI, vòng Trường
 * Sinh ở GIỮA DƯỚI cung. Phụ tinh trung tính (không có trong 3 set này) → cột
 * trái mặc định.
 *
 * Phân loại theo trường phái Tử Vi Việt Nam phổ biến (Vũ Tài Lục, Thiên Lương).
 * Một số sao mơ hồ (vd Đào Hoa) phân loại theo nét chính.
 */

export const CAT_TINH = new Set<string>([
  // Lục Cát
  'Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt',
  // Tứ Hóa tốt
  'Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa',
  // Lộc - Mã
  'Lộc Tồn', 'Thiên Mã',
  // Tam Minh (đào hoa cát)
  'Đào Hoa', 'Hồng Loan', 'Thiên Hỷ',
  // Tứ Đức
  'Long Đức', 'Phúc Đức', 'Thiên Đức', 'Nguyệt Đức',
  // Quang Quý
  'Ân Quang', 'Thiên Quý',
  // Tam Phúc
  'Thiên Quan', 'Thiên Phúc',
  // Tam Giải
  'Thiên Giải', 'Địa Giải', 'Giải Thần',
  // Tứ Linh (Bạch Hổ thuộc Tứ Linh nhưng tính hung)
  'Long Trì', 'Phượng Các', 'Hoa Cái',
  // Tam Thai - Bát Tọa
  'Tam Thai', 'Bát Tọa',
  // Tứ Vinh
  'Thai Phụ', 'Phong Cáo',
  // Lộc - Văn - Thọ - Tài - Ấn - Y
  'Lưu Niên Văn Tinh', 'Thiên Thọ', 'Thiên Tài', 'Quốc Ấn', 'Thiên Y',
  // Trù - Phù
  'Thiên Trù', 'Đường Phù',
  // Vòng Thái Tuế tốt
  'Thiếu Dương', 'Thiếu Âm',
  // Vòng Lộc Tồn tốt
  'Bác Sĩ', 'Lực Sĩ', 'Thanh Long', 'Tướng Quân', 'Tấu Thư', 'Hỷ Thần',
]);

export const HUNG_TINH = new Set<string>([
  // Lục Sát
  'Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp',
  // Tứ Hóa xấu
  'Hóa Kỵ',
  // Hình - Riêu
  'Thiên Hình', 'Thiên Riêu',
  // Khốc - Hư
  'Thiên Khốc', 'Thiên Hư',
  // Tang - Hổ (Tứ Linh nhưng hung)
  'Tang Môn', 'Bạch Hổ',
  // Song Hao
  'Đại Hao', 'Tiểu Hao',
  // Cô - Quả
  'Cô Thần', 'Quả Tú',
  // Bại tinh khác
  'Phá Toái', 'Kiếp Sát', 'Lưu Hà',
  // Tứ Không (riêng - hung)
  'Thiên Không',
  // Lưới Trời (cố định Thìn-Tuất)
  'Thiên La', 'Địa Võng',
  // Đẩu Quân (Hung)
  'Đẩu Quân',
  // Vòng Thái Tuế xấu
  'Thái Tuế', 'Tuế Phá', 'Quan Phù', 'Tử Phù', 'Trực Phù', 'Điếu Khách',
  // Vòng Lộc Tồn xấu
  'Phi Liêm', 'Bệnh Phù', 'Phục Binh', 'Quan Phủ',
  // Sao cố định cung
  'Thiên Thương', 'Thiên Sứ',
]);

export const VONG_TRUONG_SINH = new Set<string>([
  'Trường Sinh', 'Mộc Dục', 'Quan Đới', 'Lâm Quan', 'Đế Vượng', 'Suy',
  'Bệnh', 'Tử', 'Mộ', 'Tuyệt', 'Thai', 'Dưỡng',
]);

export type PhanLoaiSao = 'cát' | 'hung' | 'trường sinh' | 'trung tính';

/**
 * Phân loại 1 sao theo tên.
 * Mặc định "trung tính" nếu không có trong bảng nào → render ở cột cát (trái).
 */
export function phanLoaiSao(tenSao: string): PhanLoaiSao {
  if (VONG_TRUONG_SINH.has(tenSao)) return 'trường sinh';
  if (HUNG_TINH.has(tenSao)) return 'hung';
  if (CAT_TINH.has(tenSao)) return 'cát';
  return 'trung tính';
}
