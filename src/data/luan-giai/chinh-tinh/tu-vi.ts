import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO TỬ VI
 *
 * Mỗi entry trong mảng dưới đây = 1 đoạn luận giải.
 * Bạn có thể thêm/sửa/xoá các entry tuỳ ý.
 *
 * Cấu trúc cơ bản:
 *   {
 *     id: 'mã-không-dấu-không-trùng',
 *     sao: ['Tử Vi'],     // áp dụng cho sao Tử Vi
 *     cung: ['Mệnh'],     // chỉ khi ở cung Mệnh
 *     chi: ['Tý', 'Ngọ'], // chỉ ở vị trí Tý hoặc Ngọ
 *     doUuTien: 80,       // số lớn = hiện trước
 *     tomTat: 'đoạn ngắn miễn phí',
 *     chiTiet: 'đoạn dài, sau này trả phí',
 *   }
 *
 * Quy tắc:
 *   - Trường nào bỏ trống = áp dụng cho TẤT CẢ
 *   - Càng nhiều trường có giá trị = càng cụ thể, ưu tiên nên cao hơn
 */

export const luanGiai_TuVi: DoanLuanGiai[] = [
  {
    id: 'tu-vi-tinh-chat-chung',
    title: 'Tử Vi - Đặc tính chung',
    sao: ['Tử Vi'],
    doUuTien: 30,
    tomTat: `**Tử Vi** là chủ tinh số 1 trong tử vi đẩu số, biểu trưng cho ngôi vua, tính
chất uy nghi, đường bệ, cao quý. Người có Tử Vi thường có khí chất lãnh đạo,
tự trọng cao, có khả năng quy tụ người khác.`,
    chiTiet: `(Phần chi tiết — sau này khoá sau paywall)

Tử Vi thuộc Thổ phương Bắc, là chủ của Bắc Đẩu... [nội dung dài]`,
  },
  {
    id: 'tu-vi-tai-menh',
    title: 'Tử Vi tại cung Mệnh',
    sao: ['Tử Vi'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Người có **Tử Vi cư Mệnh** thường có dáng vẻ uy nghi, khí chất lãnh đạo,
được người trên kính nể. Tính tình tự trọng, không thích bị ràng buộc, có chí
hướng cao nhưng đôi khi cô độc.`,
    chiTiet: `Tử Vi tại Mệnh chia 12 vị trí... [phần dài]`,
  },
  {
    id: 'tu-vi-tai-menh-ngo',
    title: 'Tử Vi cư Ngọ',
    sao: ['Tử Vi'],
    cung: ['Mệnh'],
    chi: ['Ngọ'],
    doUuTien: 95,
    tomTat: `**Tử Vi cư Ngọ** là cách "Tử Vi đắc địa" — đây là vị trí miếu vượng nhất.
Người có cách này thường có sự nghiệp hiển hách, được trọng dụng, danh vọng cao.`,
  },
  {
    id: 'tu-vi-tai-phu-thê',
    title: 'Tử Vi tại Phu Thê',
    sao: ['Tử Vi'],
    cung: ['Phu Thê'],
    doUuTien: 80,
    tomTat: `**Tử Vi tại Phu Thê** chỉ người bạn đời có khí chất, vị trí xã hội cao hoặc
có cá tính mạnh. Hôn nhân thường gặp người hơn tuổi hoặc ở vị trí cao hơn.`,
  },
];
