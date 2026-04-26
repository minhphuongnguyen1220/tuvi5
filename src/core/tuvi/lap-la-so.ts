import { Sao, LaSo, ThongTinSinh, CungTrongLaSo, ChinhTinh, Chi, GioiTinh } from './types';
import { doiSangAmLich } from './lich-am';
import { xacDinhAmDuongLaSo } from './am-duong';
import { napAmCuaNam } from './nap-am';
import { menhChuTheoChiNam, thanChuTheoChiNam } from './menh-than-chu';
import { anCungMenh, anCungThan, tinhCanChi12Cung } from './cung';
import { xacDinhCuc } from './cuc';
import { anTuVi, anChinhTinh } from './chinh-tinh';
import { tinhDaiVan, tinhTieuVan, tinhNguyetVan } from './van';
import { CHINH_TINH_LIST } from './types';

/**
 * Lập lá số tử vi đầy đủ (Giai đoạn 1).
 *
 * Tổng hợp toàn bộ logic an sao từ thông tin sinh:
 *   - Đổi dương → âm + Can Chi (năm/tháng/ngày/giờ)
 *   - Âm dương lá số, Ngũ hành nạp âm
 *   - Mệnh chủ, Thân chủ
 *   - An cung Mệnh + cung Thân
 *   - Cục
 *   - 12 cung với Can-Chi
 *   - 14 chính tinh
 *   - 12 đại vận
 */
export function lapLaSo(thongTin: ThongTinSinh): LaSo {
  // 1. Đổi sang âm lịch + Can Chi 4 trụ
  const amLich = doiSangAmLich(thongTin.ngaySinh);
  const canChiNam = amLich.canChiNam;

  // 2. Âm dương lá số + Ngũ hành nạp âm
  const amDuongLaSo = xacDinhAmDuongLaSo(canChiNam.can, thongTin.gioiTinh);
  const nguHanhNapAm = napAmCuaNam(canChiNam);

  // 3. Mệnh chủ, Thân chủ (cả hai theo chi năm sinh)
  const menhChu = menhChuTheoChiNam(canChiNam.chi);
  const thanChu = thanChuTheoChiNam(canChiNam.chi);

  // 4. An cung Mệnh + Thân
  const gioSinh = thongTin.ngaySinh.getHours();
  const cungMenh = anCungMenh(amLich.thangAmLich, gioSinh);
  const cungThan = anCungThan(amLich.thangAmLich, gioSinh);

  // 5. 12 cung với can-chi
  const cung12 = tinhCanChi12Cung(cungMenh, canChiNam.can);

  // 6. Cục (dựa vào can-chi cung Mệnh)
  const canChiCungMenh = cung12.find(c => c.tenCung === 'Mệnh')!.canChi;
  const cuc = xacDinhCuc(canChiCungMenh);

  // 7. An Tử Vi + 14 chính tinh
  const chiTuVi = anTuVi(amLich.ngayAmLich, cuc);
  const viTriChinhTinh = anChinhTinh(chiTuVi);

  // 8. Group sao theo chi cung
  const saoTheoCung: Record<Chi, Sao[]> = {} as Record<Chi, Sao[]>;
  for (const sao of CHINH_TINH_LIST) {
    const chi = viTriChinhTinh[sao];
    if (!saoTheoCung[chi]) saoTheoCung[chi] = [];
    saoTheoCung[chi].push({ ten: sao, loai: 'chính tinh' });
  }

  // 9. Tạo cấu trúc CungTrongLaSo cho từng cung
  const cacCung: CungTrongLaSo[] = cung12.map(c => ({
    ten: c.tenCung,
    chi: c.chi,
    can: c.canChi.can,
    laMenh: c.chi === cungMenh,
    laThan: c.chi === cungThan,
    saoChinh: saoTheoCung[c.chi] || [],
    saoPhu: [],
  }));

  // 10. Đại vận
  const daiVan = tinhDaiVan(cuc, amDuongLaSo, cungMenh);

  // 11. Tiểu vận, Nguyệt vận hiện tại (dựa trên năm hiện tại)
  const namHienTai = new Date().getFullYear();
  const namSinh = thongTin.ngaySinh.getFullYear();
  const tuoiMu = namHienTai - namSinh + 1;
  const tieuVanHienTai = tinhTieuVan(canChiNam.chi, thongTin.gioiTinh, tuoiMu);

  // Tháng âm lịch hiện tại (đổi từ ngày dương hiện tại)
  const amLichHienTai = doiSangAmLich(new Date());
  const thangAmHienTai = amLichHienTai.thangAmLich;

  // 12 nguyệt vận của năm đang xét (1 entry/tháng 1-12 âm lịch)
  const nguyetVanCaNam = Array.from({ length: 12 }, (_, i) =>
    tinhNguyetVan(tieuVanHienTai.cung, amLich.thangAmLich, gioSinh, i + 1)
  );

  const nguyetVanHienTai = nguyetVanCaNam[thangAmHienTai - 1];

  return {
    thongTinSinh: thongTin,
    thongTinAmLich: amLich,
    amDuongLaSo,
    nguHanhNapAm,
    menhChu,
    thanChu,
    cuc,
    cungMenh,
    cungThan,
    cacCung,
    daiVan,
    tieuVanHienTai,
    nguyetVanHienTai,
    nguyetVanCaNam,
  };
}
