import { Sao, LaSo, ThongTinSinh, CungTrongLaSo, ChinhTinh, Chi, GioiTinh } from './types';
import { doiSangAmLich } from './lich-am';
import { xacDinhAmDuongLaSo } from './am-duong';
import { napAmCuaNam } from './nap-am';
import { menhChuTheoChiNam, thanChuTheoChiNam } from './menh-than-chu';
import { anCungMenh, anCungThan, tinhCanChi12Cung } from './cung';
import { xacDinhCuc } from './cuc';
import { anTuVi, anChinhTinh } from './chinh-tinh';
import { tinhDaiVan, tinhTieuVan, tinhNguyetVan } from './van';
import {
  tinhVongTruongSinh, VONG_TRUONG_SINH,
  tinhVongThaiTue, VONG_THAI_TUE_OFFSET,
  tinhVongLocTon, VONG_LOC_TON_OFFSET,
  SAO_THEO_CHI_CO_DINH, SAO_THEO_TEN_CUNG_CO_DINH,
  tinhSaoTheoThangSinh,
} from './phu-tinh';
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

  // 8.5. Vòng Trường Sinh — group sao phụ theo cung
  const vongTruongSinh = tinhVongTruongSinh(cuc, amDuongLaSo);
  const phuTinhTheoCung: Record<Chi, Sao[]> = {} as Record<Chi, Sao[]>;
  for (const sao of VONG_TRUONG_SINH) {
    const chi = vongTruongSinh[sao];
    if (!phuTinhTheoCung[chi]) phuTinhTheoCung[chi] = [];
    phuTinhTheoCung[chi].push({ ten: sao, loai: 'phụ tinh' });
  }

  // 8.6. Vòng Thái Tuế
  const vongThaiTue = tinhVongThaiTue(canChiNam.chi);
  for (const { sao: saos } of VONG_THAI_TUE_OFFSET) {
    for (const sao of saos) {
      const chi = vongThaiTue[sao];
      if (!phuTinhTheoCung[chi]) phuTinhTheoCung[chi] = [];
      // Thiên Không là sát tinh, các sao khác là phụ tinh
      const loai = sao === 'Thiên Không' ? 'sát tinh' : 'phụ tinh';
      phuTinhTheoCung[chi].push({ ten: sao, loai });
    }
  }

  // 8.7. Vòng Lộc Tồn (gồm cả Bác Sĩ đồng cung Lộc Tồn)
  const vongLocTon = tinhVongLocTon(canChiNam.can, amDuongLaSo);
  for (const { sao: saos } of VONG_LOC_TON_OFFSET) {
    for (const sao of saos) {
      const chi = vongLocTon[sao];
      if (!phuTinhTheoCung[chi]) phuTinhTheoCung[chi] = [];
      phuTinhTheoCung[chi].push({ ten: sao, loai: 'phụ tinh' });
    }
  }

  // 8.8. Sao theo chi cố định (Thiên La, Địa Võng)
  for (const [sao, chi] of Object.entries(SAO_THEO_CHI_CO_DINH)) {
    if (!phuTinhTheoCung[chi]) phuTinhTheoCung[chi] = [];
    phuTinhTheoCung[chi].push({ ten: sao, loai: 'phụ tinh' });
  }

  // 8.9. Sao theo tên cung cố định (Thiên Thương ở Nô Bộc, Thiên Sứ ở Tật Ách)
  for (const [sao, tenCung] of Object.entries(SAO_THEO_TEN_CUNG_CO_DINH)) {
    const cungData = cung12.find(c => c.tenCung === tenCung);
    if (cungData) {
      const chi = cungData.chi;
      if (!phuTinhTheoCung[chi]) phuTinhTheoCung[chi] = [];
      phuTinhTheoCung[chi].push({ ten: sao, loai: 'phụ tinh' });
    }
  }

  // 8.10. Sao theo tháng sinh âm
  const saoThangSinh = tinhSaoTheoThangSinh(amLich.thangAmLich);
  for (const [sao, chi] of Object.entries(saoThangSinh)) {
    if (!phuTinhTheoCung[chi]) phuTinhTheoCung[chi] = [];
    // Thiên Hình, Thiên Riêu thường được xem là sát/hung tinh
    const loai = (sao === 'Thiên Hình' || sao === 'Thiên Riêu') ? 'sát tinh' : 'phụ tinh';
    phuTinhTheoCung[chi].push({ ten: sao, loai });
  }

  // 9. Tạo cấu trúc CungTrongLaSo cho từng cung
  const cacCung: CungTrongLaSo[] = cung12.map(c => ({
    ten: c.tenCung,
    chi: c.chi,
    can: c.canChi.can,
    laMenh: c.chi === cungMenh,
    laThan: c.chi === cungThan,
    saoChinh: saoTheoCung[c.chi] || [],
    saoPhu: phuTinhTheoCung[c.chi] || [],
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
