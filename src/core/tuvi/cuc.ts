import { CanChi, Cuc, NguHanh, TenCuc } from './types';
import { napAmCuaNam } from './nap-am';

/**
 * Xác định Cục của lá số.
 *
 * Quy tắc (Bắc phái VN, theo Tử Vi Đẩu Số Toàn Thư):
 * Lấy Can-Chi của cung Mệnh → tra nạp âm (bảng 60 hoa giáp) → ngũ hành nạp âm = Cục.
 *
 * Mapping ngũ hành → Cục số:
 *   Thủy → Thủy Nhị Cục (2)
 *   Mộc  → Mộc Tam Cục  (3)
 *   Kim  → Kim Tứ Cục   (4)
 *   Thổ  → Thổ Ngũ Cục  (5)
 *   Hỏa  → Hỏa Lục Cục  (6)
 *
 * Cục số quan trọng vì:
 * - Dùng để an Tử Vi (vị trí Tử Vi phụ thuộc Cục số + ngày sinh âm lịch)
 * - Đại vận khởi đầu = Cục số (vd Thủy Nhị Cục → đại vận đầu từ 2 tuổi)
 */

const BANG_HANH_TO_CUC: Record<NguHanh, { ten: TenCuc; so: 2 | 3 | 4 | 5 | 6 }> = {
  'Thủy': { ten: 'Thủy Nhị Cục', so: 2 },
  'Mộc':  { ten: 'Mộc Tam Cục',  so: 3 },
  'Kim':  { ten: 'Kim Tứ Cục',   so: 4 },
  'Thổ':  { ten: 'Thổ Ngũ Cục',  so: 5 },
  'Hỏa':  { ten: 'Hỏa Lục Cục',  so: 6 },
};

/**
 * Xác định Cục từ Can-Chi của cung Mệnh.
 */
export function xacDinhCuc(canChiCungMenh: CanChi): Cuc {
  // Tận dụng lại bảng 60 hoa giáp nạp âm: ngũ hành của nạp âm = ngũ hành Cục
  const napAm = napAmCuaNam(canChiCungMenh);
  const cuc = BANG_HANH_TO_CUC[napAm.hanh];
  return {
    ten: cuc.ten,
    hanh: napAm.hanh,
    so: cuc.so,
  };
}
