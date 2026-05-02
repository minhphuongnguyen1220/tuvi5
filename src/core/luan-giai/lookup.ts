import type { CungTrongLaSo, GioiTinh } from '@/core/tuvi/types';
import { tatCaLuanGiai, type DoanLuanGiai } from '@/data/luan-giai';
import { NGU_HANH_CHINH_TINH, NGU_HANH_PHU_TINH } from '@/lib/mau-ngu-hanh';
import { CAT_TINH, HUNG_TINH, VONG_TRUONG_SINH } from '@/lib/phan-loai-sao';

/**
 * Kiểm tra 1 chuỗi có phải tên sao THỰC không (tồn tại trong bảng tra ngũ
 * hành). Cách cục label như "Tử Phủ đồng cung", "Đào Hoa Phạm Chủ" sẽ trả false.
 */
function laTenSaoThuc(name: string): boolean {
  return NGU_HANH_CHINH_TINH[name] !== undefined ||
         NGU_HANH_PHU_TINH[name] !== undefined;
}

/**
 * Phân nhóm sao để sort entries theo thứ tự hiển thị:
 *   0 = Chính tinh
 *   1 = Phụ tinh CÁT (không vòng Trường Sinh)
 *   2 = Phụ tinh trung tính (không vòng Trường Sinh)
 *   3 = Phụ tinh HUNG (không vòng Trường Sinh)
 *   4 = Vòng Trường Sinh
 *   5 = Tuần / Triệt (luôn cuối)
 *   6 = Không có sao (cung-only entry) → đầu hoặc cuối tùy quyết định, hiện cuối
 */
function nhomSao(tenSao: string): number {
  if (!tenSao) return 6;
  if (NGU_HANH_CHINH_TINH[tenSao]) return 0;
  if (tenSao === 'Tuần' || tenSao === 'Triệt') return 5;
  if (VONG_TRUONG_SINH.has(tenSao)) return 4;
  if (HUNG_TINH.has(tenSao)) return 3;
  if (CAT_TINH.has(tenSao)) return 1;
  return 2; // trung tính
}

/**
 * Phân loại entry theo loại nội dung trong cùng 1 sao:
 *   0 = Ý nghĩa sao trong cung (chỉ có cung field, không trangThai/ketHop)
 *   1 = Ý nghĩa theo trạng thái (có trangThai)
 *   2 = Kết hợp với sao khác (có ketHop)
 */
function loaiNoiDung(entry: DoanLuanGiai): number {
  const hasTT = !!(entry.trangThai && entry.trangThai.length > 0);
  const hasKH = !!(entry.ketHop && entry.ketHop.length > 0);
  if (!hasTT && !hasKH) return 0;
  if (hasTT && !hasKH) return 1;
  return 2;
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
export function timLuanGiaiCuaCung(cung: CungTrongLaSo, gioiTinh?: GioiTinh): DoanLuanGiai[] {
  const allSao = [...cung.saoChinh, ...cung.saoPhu];
  const tatCaSaoTrongCung = allSao.map(s => s.ten);

  // Map vị trí sao trong cung để sort cùng nhóm theo thứ tự hiển thị
  const viTriSao = new Map<string, number>();
  allSao.forEach((s, i) => viTriSao.set(s.ten, i));

  return tatCaLuanGiai
    .filter((doan) => {
      // SKIP entries quá generic — phải có ÍT NHẤT 1 dimension cụ thể
      const hasSpecific = !!(
        (doan.cung && doan.cung.length > 0) ||
        (doan.chi && doan.chi.length > 0) ||
        (doan.ketHop && doan.ketHop.length > 0) ||
        (doan.trangThai && doan.trangThai.length > 0) ||
        doan.gioiTinh
      );
      if (!hasSpecific) return false;

      // Lọc theo giới tính
      if (doan.gioiTinh && gioiTinh && doan.gioiTinh !== gioiTinh) return false;

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
    .sort((a, b) => {
      // Tìm "primary sao" của entry: sao đầu tiên TRONG CUNG (đã được lookup)
      // Nếu entry áp dụng nhiều sao, dùng sao có vị trí sớm nhất trong cung.
      const saoCuaA = (a.sao ?? []).filter(s => tatCaSaoTrongCung.includes(s));
      const saoCuaB = (b.sao ?? []).filter(s => tatCaSaoTrongCung.includes(s));
      const primaryA = saoCuaA.sort((x, y) => (viTriSao.get(x) ?? 999) - (viTriSao.get(y) ?? 999))[0] ?? '';
      const primaryB = saoCuaB.sort((x, y) => (viTriSao.get(x) ?? 999) - (viTriSao.get(y) ?? 999))[0] ?? '';

      // 1. Sort theo nhóm sao (chính tinh > phụ tinh cát > trung tính > hung > vòng TS > Tuần/Triệt)
      const nhomA = nhomSao(primaryA);
      const nhomB = nhomSao(primaryB);
      if (nhomA !== nhomB) return nhomA - nhomB;

      // 2. Cùng nhóm: sort theo vị trí sao trong cung
      const viTriA = viTriSao.get(primaryA) ?? 999;
      const viTriB = viTriSao.get(primaryB) ?? 999;
      if (viTriA !== viTriB) return viTriA - viTriB;

      // 3. Cùng sao: sort theo loại nội dung (cung > trạng thái > kết hợp)
      const loaiA = loaiNoiDung(a);
      const loaiB = loaiNoiDung(b);
      if (loaiA !== loaiB) return loaiA - loaiB;

      // 4. Cuối cùng: theo doUuTien (cao trước)
      return (b.doUuTien ?? 50) - (a.doUuTien ?? 50);
    });
}
