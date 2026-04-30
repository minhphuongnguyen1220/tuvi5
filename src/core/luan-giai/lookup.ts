import type { CungTrongLaSo } from '@/core/tuvi/types';
import { tatCaLuanGiai, type DoanLuanGiai } from '@/data/luan-giai';
import { NGU_HANH_CHINH_TINH, NGU_HANH_PHU_TINH } from '@/lib/mau-ngu-hanh';

/**
 * Kiểm tra 1 chuỗi có phải tên sao THỰC không (tồn tại trong bảng tra ngũ
 * hành). Cách cục label như "Tử Phủ đồng cung", "Đào Hoa Phạm Chủ" sẽ trả false.
 */
function laTenSaoThuc(name: string): boolean {
  return NGU_HANH_CHINH_TINH[name] !== undefined ||
         NGU_HANH_PHU_TINH[name] !== undefined;
}

/**
 * Tìm các đoạn luận giải khớp với 1 cung trong lá số.
 *
 * Quy tắc khớp:
 *   - Bỏ qua trường rỗng (= áp dụng cho mọi giá trị)
 *   - Trường có giá trị: cần ÍT NHẤT 1 phần tử trùng với cung đang xét
 *   - Entry phải có ÍT NHẤT 1 dimension cụ thể (cung/chi/ketHop/trangThai)
 *     — không chấp nhận entry chỉ có `sao` (quá generic, gây loạn UX)
 *
 * Sau đó sắp xếp theo doUuTien (cao trước).
 */
export function timLuanGiaiCuaCung(cung: CungTrongLaSo): DoanLuanGiai[] {
  const allSao = [...cung.saoChinh, ...cung.saoPhu];
  const tatCaSaoTrongCung = allSao.map(s => s.ten);

  return tatCaLuanGiai
    .filter((doan) => {
      // SKIP entries quá generic — phải có ÍT NHẤT 1 dimension cụ thể
      const hasSpecific = !!(
        (doan.cung && doan.cung.length > 0) ||
        (doan.chi && doan.chi.length > 0) ||
        (doan.ketHop && doan.ketHop.length > 0) ||
        (doan.trangThai && doan.trangThai.length > 0)
      );
      if (!hasSpecific) return false;

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

      // Lọc theo trạng thái: ÍT NHẤT 1 sao matching trong cung phải có trạng thái khớp
      if (doan.trangThai && doan.trangThai.length > 0) {
        const matchTrangThai = allSao.some(s => {
          // Nếu entry có sao filter, sao này phải nằm trong filter
          if (doan.sao && doan.sao.length > 0 && !doan.sao.includes(s.ten)) return false;
          if (!s.trangThai) return false;
          return doan.trangThai!.includes(s.trangThai);
        });
        if (!matchTrangThai) return false;
      }

      // Lọc theo kết hợp sao: ÍT NHẤT 1 sao THỰC trong ketHop phải có mặt
      // trong cung. Cách cục labels (vd "Tử Phủ đồng cung") không tính — chỉ
      // mang tính informational, không filter.
      if (doan.ketHop && doan.ketHop.length > 0) {
        const realSaoInKetHop = doan.ketHop.filter(laTenSaoThuc);
        if (realSaoInKetHop.length > 0) {
          const coKetHop = realSaoInKetHop.some(s => tatCaSaoTrongCung.includes(s));
          if (!coKetHop) return false;
        }
        // Nếu ketHop chỉ chứa labels → bỏ qua filter này (entry vẫn pass)
      }

      return true;
    })
    .sort((a, b) => (b.doUuTien ?? 50) - (a.doUuTien ?? 50));
}
