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
