/**
 * Kiểu dữ liệu cho lá số tử vi.
 * Tất cả thuật ngữ giữ nguyên tiếng Việt để khớp với cách user mô tả quy tắc an sao.
 */

// ===== Thiên Can & Địa Chi =====

export const CAN_LIST = [
  'Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu',
  'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý',
] as const;
export type Can = typeof CAN_LIST[number];

export const CHI_LIST = [
  'Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ',
  'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi',
] as const;
export type Chi = typeof CHI_LIST[number];

export interface CanChi {
  can: Can;
  chi: Chi;
}

// ===== Âm dương =====

/** Âm/Dương của Can (Giáp/Bính/Mậu/Canh/Nhâm = Dương; Ất/Đinh/Kỷ/Tân/Quý = Âm) */
export type AmDuong = 'Âm' | 'Dương';

export type GioiTinh = 'Nam' | 'Nữ';

/** Âm/Dương của lá số: kết hợp Can năm sinh + giới tính */
export type AmDuongLaSo = 'Dương Nam' | 'Âm Nam' | 'Dương Nữ' | 'Âm Nữ';

// ===== Ngũ hành =====

export type NguHanh = 'Kim' | 'Mộc' | 'Thủy' | 'Hỏa' | 'Thổ';

/**
 * Ngũ hành nạp âm (60 hoa giáp).
 * Ví dụ: "Hải Trung Kim", "Lư Trung Hỏa", "Đại Lâm Mộc"...
 * Lưu cả tên ngũ hành (Kim/Mộc/...) và tên gọi đầy đủ.
 */
export interface NguHanhNapAm {
  hanh: NguHanh;
  tenGoi: string; // vd "Hải Trung Kim"
}

// ===== Cục =====

export type TenCuc =
  | 'Thủy Nhị Cục'
  | 'Mộc Tam Cục'
  | 'Kim Tứ Cục'
  | 'Thổ Ngũ Cục'
  | 'Hỏa Lục Cục';

export interface Cuc {
  ten: TenCuc;
  hanh: NguHanh;
  so: 2 | 3 | 4 | 5 | 6;
}

// ===== 12 Cung =====

export const TEN_CUNG_LIST = [
  'Mệnh', 'Phụ Mẫu', 'Phúc Đức', 'Điền Trạch', 'Quan Lộc', 'Nô Bộc',
  'Thiên Di', 'Tật Ách', 'Tài Bạch', 'Tử Tức', 'Phu Thê', 'Huynh Đệ',
] as const;
export type TenCung = typeof TEN_CUNG_LIST[number];

// ===== Sao =====

/** 14 chính tinh */
export const CHINH_TINH_LIST = [
  'Tử Vi', 'Thiên Cơ', 'Thái Dương', 'Vũ Khúc', 'Thiên Đồng', 'Liêm Trinh',
  'Thiên Phủ', 'Thái Âm', 'Tham Lang', 'Cự Môn', 'Thiên Tướng', 'Thiên Lương',
  'Thất Sát', 'Phá Quân',
] as const;
export type ChinhTinh = typeof CHINH_TINH_LIST[number];

export type LoaiSao = 'chính tinh' | 'phụ tinh' | 'sát tinh' | 'tạp tinh';

/** Trạng thái sao tại một cung: Miếu / Vượng / Đắc / Bình hòa / Hãm */
export type TrangThaiSao = 'Miếu' | 'Vượng' | 'Đắc' | 'Bình' | 'Hãm';

export interface Sao {
  ten: string;
  loai: LoaiSao;
  trangThai?: TrangThaiSao;
}

// ===== Cung trong lá số =====

export interface CungTrongLaSo {
  ten: TenCung;          // tên cung (Mệnh, Phụ Mẫu, ...)
  chi: Chi;              // địa chi của cung (Tý, Sửu, ...)
  can: Can;              // thiên can của cung (tính từ can năm sinh)
  laMenh: boolean;       // đây có phải cung Mệnh không
  laThan: boolean;       // đây có phải cung Thân không
  saoChinh: Sao[];       // các chính tinh ở cung này
  saoPhu: Sao[];         // phụ tinh, sát tinh, tạp tinh ở cung này
}

// ===== Vận hạn =====

export interface DaiVan {
  cung: Chi;        // địa chi của cung đại vận
  tuoiBatDau: number; // tuổi bắt đầu đại vận này
  tuoiKetThuc: number; // tuổi kết thúc
}

export interface TieuVan {
  cung: Chi;
  tuoi: number;
}

export interface NguyetVan {
  cung: Chi;
  thangAmLich: number;
}

// ===== Lá số đầy đủ =====

export interface ThongTinSinh {
  ngaySinh: Date;     // ngày dương lịch
  gioiTinh: GioiTinh;
  hoTen?: string;
}

export interface ThongTinAmLich {
  namAmLich: number;
  thangAmLich: number;
  ngayAmLich: number;
  laThangNhuan: boolean;
  canChiNam: CanChi;
  canChiThang: CanChi;
  canChiNgay: CanChi;
  canChiGio: CanChi;  // ⭐ tự tính (lib không hỗ trợ)
}

export interface LaSo {
  thongTinSinh: ThongTinSinh;
  thongTinAmLich: ThongTinAmLich;
  amDuongLaSo: AmDuongLaSo;
  nguHanhNapAm: NguHanhNapAm;     // vd "Hải Trung Kim"
  menhChu: string;                 // vd "Tham Lang"
  thanChu: string;                 // vd "Văn Xương"
  cuc: Cuc;
  cungMenh: Chi;                   // địa chi của cung Mệnh
  cungThan: Chi;
  cacCung: CungTrongLaSo[];        // 12 cung (theo thứ tự địa chi Tý → Hợi)
  daiVan: DaiVan[];                // 12 đại vận
  tieuVanHienTai?: TieuVan;        // vận năm đang xét
  nguyetVanHienTai?: NguyetVan;    // vận tháng đang xét
}
