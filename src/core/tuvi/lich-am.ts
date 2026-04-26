import { LunarDate } from 'vietnamese-lunar-calendar';
import { Can, Chi, CanChi, ThongTinAmLich, CAN_LIST, CHI_LIST } from './types';

/**
 * Wrapper quanh thư viện vietnamese-lunar-calendar.
 *
 * Lưu ý: thư viện không tính được Can Chi GIỜ (chỉ trả về giờ Tý mặc định
 * cho mọi giờ trong ngày). Vì vậy hàm này tự tính lại theo giờ thực tế dựa
 * trên Can ngày + giờ sinh, dùng quy tắc Ngũ Thử Độn.
 */

/**
 * Đổi giờ (0-23) sang địa chi.
 * Tý: 23h-0h59 (giờ Tý gồm 23-1)
 * Sửu: 1-3, Dần: 3-5, Mão: 5-7, Thìn: 7-9, Tỵ: 9-11
 * Ngọ: 11-13, Mùi: 13-15, Thân: 15-17, Dậu: 17-19, Tuất: 19-21, Hợi: 21-23
 */
export function chiCuaGio(gio: number): Chi {
  if (gio < 0 || gio > 23) throw new Error(`Giờ không hợp lệ: ${gio}`);
  // 23h và 0h đều là Tý → index 0; 1h-2h là Sửu → index 1; ...
  const chiIndex = Math.floor(((gio + 1) % 24) / 2);
  return CHI_LIST[chiIndex];
}

/**
 * Tính Can Chi của giờ theo quy tắc Ngũ Thử Độn (五鼠遁):
 * - Ngày Giáp / Kỷ: Giờ Tý = Giáp Tý
 * - Ngày Ất / Canh: Giờ Tý = Bính Tý
 * - Ngày Bính / Tân: Giờ Tý = Mậu Tý
 * - Ngày Đinh / Nhâm: Giờ Tý = Canh Tý
 * - Ngày Mậu / Quý: Giờ Tý = Nhâm Tý
 *
 * Các giờ sau đó tăng Can dần theo thứ tự (Sửu, Dần, ...).
 */
export function canChiCuaGio(canNgay: Can, gio: number): CanChi {
  const chi = chiCuaGio(gio);
  const chiIndex = CHI_LIST.indexOf(chi);

  // Index Can của giờ Tý theo Can ngày
  const canTyTheoNgay: Record<Can, number> = {
    'Giáp': 0, 'Kỷ': 0,        // Giáp Tý
    'Ất': 2,  'Canh': 2,       // Bính Tý
    'Bính': 4, 'Tân': 4,       // Mậu Tý
    'Đinh': 6, 'Nhâm': 6,      // Canh Tý
    'Mậu': 8,  'Quý': 8,       // Nhâm Tý
  };

  const canIndex = (canTyTheoNgay[canNgay] + chiIndex) % 10;
  return { can: CAN_LIST[canIndex], chi };
}

/**
 * Đổi ngày dương sang âm + tính Can Chi đầy đủ (năm/tháng/ngày/giờ).
 *
 * @param ngaySinh Ngày sinh dương lịch (Date object phải có giờ + phút chính xác)
 */
export function doiSangAmLich(ngaySinh: Date): ThongTinAmLich {
  const lunar = new LunarDate(ngaySinh);

  const canChiNam: CanChi = {
    can: lunar.lunarYear.can as Can,
    chi: lunar.lunarYear.chi as Chi,
  };
  const canChiThang: CanChi = {
    can: lunar.lunarMonth.can as Can,
    chi: lunar.lunarMonth.chi as Chi,
  };
  const canChiNgay: CanChi = {
    can: lunar.lunarDate.can as Can,
    chi: lunar.lunarDate.chi as Chi,
  };
  const canChiGio = canChiCuaGio(canChiNgay.can, ngaySinh.getHours());

  return {
    namAmLich: lunar.year,
    thangAmLich: lunar.month,
    ngayAmLich: lunar.date,
    laThangNhuan: lunar.isLeap,
    canChiNam,
    canChiThang,
    canChiNgay,
    canChiGio,
  };
}
