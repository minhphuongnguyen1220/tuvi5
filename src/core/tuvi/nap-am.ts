import { Can, Chi, CanChi, NguHanh, NguHanhNapAm, CAN_LIST, CHI_LIST } from './types';

/**
 * Bảng 60 Hoa Giáp - Ngũ hành Nạp âm.
 *
 * Mỗi tổ hợp Can-Chi có một tên gọi nạp âm + ngũ hành tương ứng.
 * Cứ 2 năm liên tiếp dùng chung 1 nạp âm (vd: Giáp Tý + Ất Sửu = Hải Trung Kim).
 *
 * Bảng theo sách Tử Vi Đẩu Số Toàn Thư (Bắc phái Việt Nam).
 *
 * ⚠️ User cần kiểm tra lại các tên gọi nạp âm này, đặc biệt:
 * - Giáp Thìn / Ất Tỵ: "Phú Đăng Hỏa" hay "Phúc Đăng Hỏa" (có cả 2 cách)
 * - Nhâm Tý / Quý Sửu: "Tang Đố Mộc" hay "Tang Chá Mộc"
 */

interface NapAmEntry {
  hanh: NguHanh;
  tenGoi: string;
}

// Bảng 30 cặp (60 năm). Mỗi entry áp dụng cho 2 Can-Chi liên tiếp.
const BANG_NAP_AM: NapAmEntry[] = [
  { hanh: 'Kim', tenGoi: 'Hải Trung Kim' },     // 0: Giáp Tý, Ất Sửu
  { hanh: 'Hỏa', tenGoi: 'Lư Trung Hỏa' },      // 1: Bính Dần, Đinh Mão
  { hanh: 'Mộc', tenGoi: 'Đại Lâm Mộc' },       // 2: Mậu Thìn, Kỷ Tỵ
  { hanh: 'Thổ', tenGoi: 'Lộ Bàng Thổ' },       // 3: Canh Ngọ, Tân Mùi
  { hanh: 'Kim', tenGoi: 'Kiếm Phong Kim' },    // 4: Nhâm Thân, Quý Dậu
  { hanh: 'Hỏa', tenGoi: 'Sơn Đầu Hỏa' },       // 5: Giáp Tuất, Ất Hợi
  { hanh: 'Thủy', tenGoi: 'Giản Hạ Thủy' },     // 6: Bính Tý, Đinh Sửu
  { hanh: 'Thổ', tenGoi: 'Thành Đầu Thổ' },     // 7: Mậu Dần, Kỷ Mão
  { hanh: 'Kim', tenGoi: 'Bạch Lạp Kim' },      // 8: Canh Thìn, Tân Tỵ
  { hanh: 'Mộc', tenGoi: 'Dương Liễu Mộc' },    // 9: Nhâm Ngọ, Quý Mùi
  { hanh: 'Thủy', tenGoi: 'Tuyền Trung Thủy' }, // 10: Giáp Thân, Ất Dậu
  { hanh: 'Thổ', tenGoi: 'Ốc Thượng Thổ' },     // 11: Bính Tuất, Đinh Hợi
  { hanh: 'Hỏa', tenGoi: 'Tích Lịch Hỏa' },     // 12: Mậu Tý, Kỷ Sửu
  { hanh: 'Mộc', tenGoi: 'Tùng Bách Mộc' },     // 13: Canh Dần, Tân Mão
  { hanh: 'Thủy', tenGoi: 'Trường Lưu Thủy' },  // 14: Nhâm Thìn, Quý Tỵ
  { hanh: 'Kim', tenGoi: 'Sa Trung Kim' },      // 15: Giáp Ngọ, Ất Mùi
  { hanh: 'Hỏa', tenGoi: 'Sơn Hạ Hỏa' },        // 16: Bính Thân, Đinh Dậu
  { hanh: 'Mộc', tenGoi: 'Bình Địa Mộc' },      // 17: Mậu Tuất, Kỷ Hợi
  { hanh: 'Thổ', tenGoi: 'Bích Thượng Thổ' },   // 18: Canh Tý, Tân Sửu
  { hanh: 'Kim', tenGoi: 'Kim Bạch Kim' },      // 19: Nhâm Dần, Quý Mão
  { hanh: 'Hỏa', tenGoi: 'Phú Đăng Hỏa' },      // 20: Giáp Thìn, Ất Tỵ — có sách viết "Phúc Đăng Hỏa"
  { hanh: 'Thủy', tenGoi: 'Thiên Hà Thủy' },    // 21: Bính Ngọ, Đinh Mùi
  { hanh: 'Thổ', tenGoi: 'Đại Trạch Thổ' },     // 22: Mậu Thân, Kỷ Dậu
  { hanh: 'Kim', tenGoi: 'Thoa Xuyến Kim' },    // 23: Canh Tuất, Tân Hợi
  { hanh: 'Mộc', tenGoi: 'Tang Đố Mộc' },       // 24: Nhâm Tý, Quý Sửu — có sách viết "Tang Chá Mộc"
  { hanh: 'Thủy', tenGoi: 'Đại Khê Thủy' },     // 25: Giáp Dần, Ất Mão
  { hanh: 'Thổ', tenGoi: 'Sa Trung Thổ' },      // 26: Bính Thìn, Đinh Tỵ
  { hanh: 'Hỏa', tenGoi: 'Thiên Thượng Hỏa' },  // 27: Mậu Ngọ, Kỷ Mùi
  { hanh: 'Mộc', tenGoi: 'Thạch Lựu Mộc' },     // 28: Canh Thân, Tân Dậu
  { hanh: 'Thủy', tenGoi: 'Đại Hải Thủy' },     // 29: Nhâm Tuất, Quý Hợi
];

/**
 * Tìm chỉ số trong vòng lục thập hoa giáp (60 năm).
 * Quy ước: Giáp Tý = 0, Ất Sửu = 1, ..., Quý Hợi = 59.
 */
function chiSoHoaGiap(canChi: CanChi): number {
  const canIdx = CAN_LIST.indexOf(canChi.can);  // 0-9
  const chiIdx = CHI_LIST.indexOf(canChi.chi);  // 0-11

  // Trong lục thập hoa giáp, can chi hợp lệ có cùng tính chẵn/lẻ.
  // Công thức: tìm số 0-59 thoả mãn: i % 10 === canIdx && i % 12 === chiIdx
  for (let i = 0; i < 60; i++) {
    if (i % 10 === canIdx && i % 12 === chiIdx) return i;
  }
  throw new Error(`Can Chi không hợp lệ: ${canChi.can} ${canChi.chi}`);
}

/** Lấy ngũ hành nạp âm của 1 năm Can-Chi (vd Giáp Tý → Hải Trung Kim). */
export function napAmCuaNam(canChiNam: CanChi): NguHanhNapAm {
  const idx = chiSoHoaGiap(canChiNam);
  const cap = Math.floor(idx / 2); // 0-29
  return BANG_NAP_AM[cap];
}
