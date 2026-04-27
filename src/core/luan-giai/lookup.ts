import type { CungTrongLaSo } from '@/core/tuvi/types';
import { tatCaLuanGiai, type DoanLuanGiai } from '@/data/luan-giai';

/**
 * Tìm các đoạn luận giải khớp với 1 cung trong lá số.
 *
 * Quy tắc khớp:
 *   - Bỏ qua trường rỗng (= áp dụng cho mọi giá trị)
 *   - Trường có giá trị: cần ÍT NHẤT 1 phần tử trùng với cung đang xét
 *
 * Sau đó sắp xếp theo doUuTien (cao trước).
 */
export function timLuanGiaiCuaCung(cung: CungTrongLaSo): DoanLuanGiai[] {
  const tatCaSaoTrongCung = [
    ...cung.saoChinh.map(s => s.ten),
    ...cung.saoPhu.map(s => s.ten),
  ];

  return tatCaLuanGiai
    .filter((doan) => {
      // Lọc theo sao
      if (doan.sao && doan.sao.length > 0) {
        if (!doan.sao.some(s => tatCaSaoTrongCung.includes(s))) return false;
      }

      // Lọc theo cung
      if (doan.cung && doan.cung.length > 0) {
        if (!doan.cung.includes(cung.ten)) return false;
      }

      // Lọc theo chi
      if (doan.chi && doan.chi.length > 0) {
        if (!doan.chi.includes(cung.chi)) return false;
      }

      // TODO: Lọc theo trạng thái sao (cần G2 thêm trạng thái)

      // Lọc theo kết hợp sao
      if (doan.ketHop && doan.ketHop.length > 0) {
        const tatCaCoKetHop = doan.ketHop.every(s => tatCaSaoTrongCung.includes(s));
        if (!tatCaCoKetHop) return false;
      }

      return true;
    })
    .sort((a, b) => (b.doUuTien ?? 50) - (a.doUuTien ?? 50));
}
