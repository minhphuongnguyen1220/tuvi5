import type { TenCung } from '@/core/tuvi/types';

/** Slug ASCII cho 12 cung — dùng làm anchor id để scroll-to từ mục lục. */
export const SLUG_CUNG: Record<TenCung, string> = {
  'Mệnh': 'menh',
  'Phụ Mẫu': 'phu-mau',
  'Phúc Đức': 'phuc-duc',
  'Điền Trạch': 'dien-trach',
  'Quan Lộc': 'quan-loc',
  'Nô Bộc': 'no-boc',
  'Thiên Di': 'thien-di',
  'Tật Ách': 'tat-ach',
  'Tài Bạch': 'tai-bach',
  'Tử Tức': 'tu-tuc',
  'Phu Thê': 'phu-the',
  'Huynh Đệ': 'huynh-de',
};

export const idCuaCung = (ten: TenCung) => `cung-${SLUG_CUNG[ten]}`;
