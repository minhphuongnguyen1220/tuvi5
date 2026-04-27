/**
 * Kiểu dữ liệu cho 1 đoạn luận giải.
 *
 * Mỗi đoạn được "đánh thẻ" bằng các trường tag (sao, cung, chi, trạng thái, kết hợp).
 * Engine lookup sẽ tìm các đoạn khớp với 1 cung trong lá số và hiển thị theo độ ưu tiên.
 *
 * Quy tắc khớp:
 *   - Trường rỗng = áp dụng cho TẤT CẢ
 *   - Trường có giá trị = chỉ khớp khi ÍT NHẤT 1 giá trị trùng với cung đang xét
 *
 * Ví dụ:
 *   { sao: ['Tử Vi'], cung: ['Mệnh'] } = chỉ áp dụng khi Tử Vi ở cung Mệnh
 *   { sao: ['Tử Vi'] } = áp dụng cho mọi cung có Tử Vi (mô tả tính chất sao chung)
 */

import type { Chi, TenCung, TrangThaiSao } from '@/core/tuvi/types';

export interface DoanLuanGiai {
  /** ID duy nhất, viết kebab-case không dấu (vd: "tu-vi-tai-menh") */
  id: string;

  /** Tiêu đề ngắn để debug/admin (không hiển thị) */
  title?: string;

  /** Tên các sao mà đoạn này áp dụng (rỗng = mọi sao). Vd: ['Tử Vi'] hoặc ['Tả Phụ', 'Hữu Bật'] */
  sao?: string[];

  /** Tên các cung mà đoạn này áp dụng (rỗng = mọi cung). Vd: ['Mệnh'] */
  cung?: TenCung[];

  /** Các chi (vị trí địa bàn) áp dụng (rỗng = mọi chi). Vd: ['Tý', 'Ngọ'] */
  chi?: Chi[];

  /** Trạng thái sao (Miếu/Vượng/...) — sẽ dùng khi G2 thêm trạng thái. Hiện tại bỏ trống. */
  trangThai?: TrangThaiSao[];

  /** Sao đi cùng (tổ hợp). Vd ['Vũ Khúc'] = chỉ áp dụng khi sao chính + Vũ Khúc cùng cung */
  ketHop?: string[];

  /** Số càng cao càng hiện trước. Mặc định 50. Đoạn rất chuyên biệt nên đặt 80-100. */
  doUuTien?: number;

  /** TÓM TẮT — hiển thị miễn phí. Markdown được hỗ trợ. */
  tomTat: string;

  /** CHI TIẾT — phần đầy đủ, sẽ là "trả phí" về sau. Markdown. Có thể bỏ trống. */
  chiTiet?: string;
}
