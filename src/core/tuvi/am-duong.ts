import { Can, Chi, AmDuong, AmDuongLaSo, GioiTinh, NguHanh } from './types';

/**
 * Quy tắc âm/dương cố định trong tử vi:
 * - Can dương: Giáp, Bính, Mậu, Canh, Nhâm (index chẵn)
 * - Can âm:   Ất, Đinh, Kỷ, Tân, Quý        (index lẻ)
 * - Chi dương: Tý, Dần, Thìn, Ngọ, Thân, Tuất
 * - Chi âm:    Sửu, Mão, Tỵ, Mùi, Dậu, Hợi
 */

const CAN_DUONG: Can[] = ['Giáp', 'Bính', 'Mậu', 'Canh', 'Nhâm'];
const CHI_DUONG: Chi[] = ['Tý', 'Dần', 'Thìn', 'Ngọ', 'Thân', 'Tuất'];

export function amDuongCuaCan(can: Can): AmDuong {
  return CAN_DUONG.includes(can) ? 'Dương' : 'Âm';
}

export function amDuongCuaChi(chi: Chi): AmDuong {
  return CHI_DUONG.includes(chi) ? 'Dương' : 'Âm';
}

/**
 * Ngũ hành của Can:
 * Giáp Ất → Mộc
 * Bính Đinh → Hỏa
 * Mậu Kỷ → Thổ
 * Canh Tân → Kim
 * Nhâm Quý → Thủy
 */
export function nguHanhCuaCan(can: Can): NguHanh {
  const bang: Record<Can, NguHanh> = {
    'Giáp': 'Mộc', 'Ất': 'Mộc',
    'Bính': 'Hỏa', 'Đinh': 'Hỏa',
    'Mậu': 'Thổ', 'Kỷ': 'Thổ',
    'Canh': 'Kim', 'Tân': 'Kim',
    'Nhâm': 'Thủy', 'Quý': 'Thủy',
  };
  return bang[can];
}

/**
 * Ngũ hành của Chi:
 * Tý Hợi → Thủy
 * Sửu Thìn Mùi Tuất → Thổ
 * Dần Mão → Mộc
 * Tỵ Ngọ → Hỏa
 * Thân Dậu → Kim
 */
export function nguHanhCuaChi(chi: Chi): NguHanh {
  const bang: Record<Chi, NguHanh> = {
    'Tý': 'Thủy', 'Hợi': 'Thủy',
    'Sửu': 'Thổ', 'Thìn': 'Thổ', 'Mùi': 'Thổ', 'Tuất': 'Thổ',
    'Dần': 'Mộc', 'Mão': 'Mộc',
    'Tỵ': 'Hỏa', 'Ngọ': 'Hỏa',
    'Thân': 'Kim', 'Dậu': 'Kim',
  };
  return bang[chi];
}

/**
 * Xác định âm/dương của lá số:
 * Dựa trên Can năm sinh (xác định âm/dương) + giới tính.
 *
 * - Năm Can dương + Nam → Dương Nam
 * - Năm Can dương + Nữ → Dương Nữ
 * - Năm Can âm + Nam → Âm Nam
 * - Năm Can âm + Nữ → Âm Nữ
 */
export function xacDinhAmDuongLaSo(canNamSinh: Can, gioiTinh: GioiTinh): AmDuongLaSo {
  const amDuong = amDuongCuaCan(canNamSinh);
  return `${amDuong} ${gioiTinh}` as AmDuongLaSo;
}
