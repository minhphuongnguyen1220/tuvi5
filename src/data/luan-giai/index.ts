/**
 * Index tổng hợp tất cả các đoạn luận giải.
 *
 * Mỗi khi thêm 1 file luận giải mới (vd `chinh-tinh/thien-co.ts`),
 * import file đó và spread vào mảng `tatCaLuanGiai` dưới đây.
 */

import type { DoanLuanGiai } from './types';

import { luanGiai_TuVi } from './chinh-tinh/tu-vi';

export const tatCaLuanGiai: DoanLuanGiai[] = [
  ...luanGiai_TuVi,
  // Thêm các file khác ở đây khi đã viết:
  // ...luanGiai_ThienCo,
  // ...luanGiai_ThaiDuong,
  // ...luanGiai_VuKhuc,
  // ...
];

export type { DoanLuanGiai };
