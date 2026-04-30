/**
 * Index tổng hợp tất cả các đoạn luận giải.
 *
 * Khi viết nội dung mới: chỉ cần mở file tương ứng (vd `chinh-tinh/thien-co.ts`)
 * và thêm entry vào mảng — không cần đụng vào file này.
 */

import type { DoanLuanGiai } from './types';

// Phụ tinh
import { luanGiai_TaPhu } from './phu-tinh/ta-phu';
import { luanGiai_HuuBat } from './phu-tinh/huu-bat';
import { luanGiai_VanXuong } from './phu-tinh/van-xuong';
import { luanGiai_VanKhuc } from './phu-tinh/van-khuc';
import { luanGiai_ThienKhoi } from './phu-tinh/thien-khoi';
import { luanGiai_ThienViet } from './phu-tinh/thien-viet';
import { luanGiai_KinhDuong } from './phu-tinh/kinh-duong';
import { luanGiai_DaLa } from './phu-tinh/da-la';
import { luanGiai_HoaTinh } from './phu-tinh/hoa-tinh';
import { luanGiai_LinhTinh } from './phu-tinh/linh-tinh';
import { luanGiai_DiaKhong } from './phu-tinh/dia-khong';
import { luanGiai_DiaKiep } from './phu-tinh/dia-kiep';
import { luanGiai_HoaLoc } from './phu-tinh/hoa-loc';
import { luanGiai_HoaQuyen } from './phu-tinh/hoa-quyen';
import { luanGiai_HoaKhoa } from './phu-tinh/hoa-khoa';
import { luanGiai_HoaKy } from './phu-tinh/hoa-ky';
import { luanGiai_LocTon } from './phu-tinh/loc-ton';
import { luanGiai_ThienMa } from './phu-tinh/thien-ma';
import { luanGiai_DaoHoa } from './phu-tinh/dao-hoa';
import { luanGiai_HongLoan } from './phu-tinh/hong-loan';
import { luanGiai_ThienHy } from './phu-tinh/thien-hy';
import { luanGiai_BacSi } from './phu-tinh/bac-si';
import { luanGiai_LucSi } from './phu-tinh/luc-si';
import { luanGiai_ThanhLong } from './phu-tinh/thanh-long';
import { luanGiai_TieuHao } from './phu-tinh/tieu-hao';
import { luanGiai_DaiHao } from './phu-tinh/dai-hao';
import { luanGiai_TuongQuan } from './phu-tinh/tuong-quan';
import { luanGiai_TauThu } from './phu-tinh/tau-thu';
import { luanGiai_PhiLiem } from './phu-tinh/phi-liem';
import { luanGiai_HyThan } from './phu-tinh/hy-than';
import { luanGiai_BenhPhu } from './phu-tinh/benh-phu';
import { luanGiai_PhucBinh } from './phu-tinh/phuc-binh';
import { luanGiai_QuanPhu } from './phu-tinh/quan-phu';
import { luanGiai_ThaiTue } from './phu-tinh/thai-tue';
import { luanGiai_BachHo } from './phu-tinh/bach-ho';
import { luanGiai_QuanPhuTT } from './phu-tinh/quan-phu-tt';
import { luanGiai_ThieuAm } from './phu-tinh/thieu-am';
import { luanGiai_LongDuc } from './phu-tinh/long-duc';
import { luanGiai_TrucPhu } from './phu-tinh/truc-phu';
import { luanGiai_ThieuDuong } from './phu-tinh/thieu-duong';
import { luanGiai_TuPhu } from './phu-tinh/tu-phu';
import { luanGiai_PhucDuc } from './phu-tinh/phuc-duc';
import { luanGiai_TangMon } from './phu-tinh/tang-mon';
import { luanGiai_TuePha } from './phu-tinh/tue-pha';
import { luanGiai_DieuKhach } from './phu-tinh/dieu-khach';
import { luanGiai_ThienHu } from './phu-tinh/thien-hu';
import { luanGiai_ThienKhoc } from './phu-tinh/thien-khoc';
import { luanGiai_KiepSat } from './phu-tinh/kiep-sat';
import { luanGiai_PhaToai } from './phu-tinh/pha-toai';
import { luanGiai_LongTri } from './phu-tinh/long-tri';
import { luanGiai_PhuongCac } from './phu-tinh/phuong-cac';
import { luanGiai_QuocAn } from './phu-tinh/quoc-an';
import { luanGiai_LuuNienVanTinh } from './phu-tinh/luu-nien-van-tinh';
import { luanGiai_ThienTho } from './phu-tinh/thien-tho';
import { luanGiai_ThienTai } from './phu-tinh/thien-tai';
import { luanGiai_AnQuang } from './phu-tinh/an-quang';
import { luanGiai_ThienQuy } from './phu-tinh/thien-quy';
import { luanGiai_ThienQuan } from './phu-tinh/thien-quan';
import { luanGiai_ThienPhuc } from './phu-tinh/thien-phuc';
import { luanGiai_ThienGiai } from './phu-tinh/thien-giai';
import { luanGiai_DiaGiai } from './phu-tinh/dia-giai';
import { luanGiai_GiaiThan } from './phu-tinh/giai-than';
import { luanGiai_ThienHinh } from './phu-tinh/thien-hinh';
import { luanGiai_ThienRieu } from './phu-tinh/thien-rieu';
import { luanGiai_ThienY } from './phu-tinh/thien-y';
import { luanGiai_LuuHa } from './phu-tinh/luu-ha';
import { luanGiai_CoThan } from './phu-tinh/co-than';
import { luanGiai_QuaTu } from './phu-tinh/qua-tu';
import { luanGiai_ThienThuong } from './phu-tinh/thien-thuong';
import { luanGiai_ThienSu } from './phu-tinh/thien-su';
import { luanGiai_TruongSinh } from './phu-tinh/truong-sinh';
import { luanGiai_MocDuc } from './phu-tinh/moc-duc';
import { luanGiai_QuanDoi } from './phu-tinh/quan-doi';
import { luanGiai_LamQuan } from './phu-tinh/lam-quan';
import { luanGiai_DeVuong } from './phu-tinh/de-vuong';
import { luanGiai_Suy } from './phu-tinh/suy';

// 14 chính tinh
import { luanGiai_TuVi } from './chinh-tinh/tu-vi';
import { luanGiai_ThienCo } from './chinh-tinh/thien-co';
import { luanGiai_ThaiDuong } from './chinh-tinh/thai-duong';
import { luanGiai_VuKhuc } from './chinh-tinh/vu-khuc';
import { luanGiai_ThienDong } from './chinh-tinh/thien-dong';
import { luanGiai_LiemTrinh } from './chinh-tinh/liem-trinh';
import { luanGiai_ThienPhu } from './chinh-tinh/thien-phu';
import { luanGiai_ThaiAm } from './chinh-tinh/thai-am';
import { luanGiai_ThamLang } from './chinh-tinh/tham-lang';
import { luanGiai_CuMon } from './chinh-tinh/cu-mon';
import { luanGiai_ThienTuong } from './chinh-tinh/thien-tuong';
import { luanGiai_ThienLuong } from './chinh-tinh/thien-luong';
import { luanGiai_ThatSat } from './chinh-tinh/that-sat';
import { luanGiai_PhaQuan } from './chinh-tinh/pha-quan';

// 12 cung
import { luanGiai_Cung_Menh } from './cung/menh';
import { luanGiai_Cung_PhuMau } from './cung/phu-mau';
import { luanGiai_Cung_PhucDuc } from './cung/phuc-duc';
import { luanGiai_Cung_DienTrach } from './cung/dien-trach';
import { luanGiai_Cung_QuanLoc } from './cung/quan-loc';
import { luanGiai_Cung_NoBoc } from './cung/no-boc';
import { luanGiai_Cung_ThienDi } from './cung/thien-di';
import { luanGiai_Cung_TatAch } from './cung/tat-ach';
import { luanGiai_Cung_TaiBach } from './cung/tai-bach';
import { luanGiai_Cung_TuTuc } from './cung/tu-tuc';
import { luanGiai_Cung_PhuThe } from './cung/phu-the';
import { luanGiai_Cung_HuynhDe } from './cung/huynh-de';

export const tatCaLuanGiai: DoanLuanGiai[] = [
  // Chính tinh
  ...luanGiai_TuVi,
  ...luanGiai_ThienCo,
  ...luanGiai_ThaiDuong,
  ...luanGiai_VuKhuc,
  ...luanGiai_ThienDong,
  ...luanGiai_LiemTrinh,
  ...luanGiai_ThienPhu,
  ...luanGiai_ThaiAm,
  ...luanGiai_ThamLang,
  ...luanGiai_CuMon,
  ...luanGiai_ThienTuong,
  ...luanGiai_ThienLuong,
  ...luanGiai_ThatSat,
  ...luanGiai_PhaQuan,

  // Phụ tinh
  ...luanGiai_TaPhu,
  ...luanGiai_HuuBat,
  ...luanGiai_VanXuong,
  ...luanGiai_VanKhuc,
  ...luanGiai_ThienKhoi,
  ...luanGiai_ThienViet,
  ...luanGiai_KinhDuong,
  ...luanGiai_DaLa,
  ...luanGiai_HoaTinh,
  ...luanGiai_LinhTinh,
  ...luanGiai_DiaKhong,
  ...luanGiai_DiaKiep,
  ...luanGiai_HoaLoc,
  ...luanGiai_HoaQuyen,
  ...luanGiai_HoaKhoa,
  ...luanGiai_HoaKy,
  ...luanGiai_LocTon,
  ...luanGiai_ThienMa,
  ...luanGiai_DaoHoa,
  ...luanGiai_HongLoan,
  ...luanGiai_ThienHy,
  ...luanGiai_BacSi,
  ...luanGiai_LucSi,
  ...luanGiai_ThanhLong,
  ...luanGiai_TieuHao,
  ...luanGiai_DaiHao,
  ...luanGiai_TuongQuan,
  ...luanGiai_TauThu,
  ...luanGiai_PhiLiem,
  ...luanGiai_HyThan,
  ...luanGiai_BenhPhu,
  ...luanGiai_PhucBinh,
  ...luanGiai_QuanPhu,
  ...luanGiai_ThaiTue,
  ...luanGiai_BachHo,
  ...luanGiai_QuanPhuTT,
  ...luanGiai_ThieuAm,
  ...luanGiai_LongDuc,
  ...luanGiai_TrucPhu,
  ...luanGiai_ThieuDuong,
  ...luanGiai_TuPhu,
  ...luanGiai_PhucDuc,
  ...luanGiai_TangMon,
  ...luanGiai_TuePha,
  ...luanGiai_DieuKhach,
  ...luanGiai_ThienHu,
  ...luanGiai_ThienKhoc,
  ...luanGiai_KiepSat,
  ...luanGiai_PhaToai,
  ...luanGiai_LongTri,
  ...luanGiai_PhuongCac,
  ...luanGiai_QuocAn,
  ...luanGiai_LuuNienVanTinh,
  ...luanGiai_ThienTho,
  ...luanGiai_ThienTai,
  ...luanGiai_AnQuang,
  ...luanGiai_ThienQuy,
  ...luanGiai_ThienQuan,
  ...luanGiai_ThienPhuc,
  ...luanGiai_ThienGiai,
  ...luanGiai_DiaGiai,
  ...luanGiai_GiaiThan,
  ...luanGiai_ThienHinh,
  ...luanGiai_ThienRieu,
  ...luanGiai_ThienY,
  ...luanGiai_LuuHa,
  ...luanGiai_CoThan,
  ...luanGiai_QuaTu,
  ...luanGiai_ThienThuong,
  ...luanGiai_ThienSu,
  ...luanGiai_TruongSinh,
  ...luanGiai_MocDuc,
  ...luanGiai_QuanDoi,
  ...luanGiai_LamQuan,
  ...luanGiai_DeVuong,
  ...luanGiai_Suy,

  // Cung
  ...luanGiai_Cung_Menh,
  ...luanGiai_Cung_PhuMau,
  ...luanGiai_Cung_PhucDuc,
  ...luanGiai_Cung_DienTrach,
  ...luanGiai_Cung_QuanLoc,
  ...luanGiai_Cung_NoBoc,
  ...luanGiai_Cung_ThienDi,
  ...luanGiai_Cung_TatAch,
  ...luanGiai_Cung_TaiBach,
  ...luanGiai_Cung_TuTuc,
  ...luanGiai_Cung_PhuThe,
  ...luanGiai_Cung_HuynhDe,
];

export type { DoanLuanGiai };
