import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO BÁT TỌA - Mộc, Cát Tinh.
 *
 * PHẦN CHUNG CỦA CẶP TAM THAI - BÁT TỌA viết tại file `tam-thai.ts`
 * với tag sao: ['Tam Thai', 'Bát Tọa'].
 *
 * 11 CUNG cũng được viết CHUNG tại `tam-thai.ts` (luận giải Tam Thai - Bát
 * Tọa cùng nhau).
 *
 * File này CHỈ chứa:
 * - Đặc tính RIÊNG của Bát Tọa (khác Tam Thai)
 * - Bát Tọa tại Mệnh riêng (hình tượng CÁI CẰM)
 * - Bát Tọa tại Điền Trạch riêng (cửa ngõ + phương tiện sang trọng)
 *
 * Đặc trưng RIÊNG của Bát Tọa (so với Tam Thai):
 * - Bát Tọa = MỘC (khác Tam Thai = THỦY)
 * - Hình tượng CÁI CẰM (khác Tam Thai = VẦNG TRÁN)
 * - Tượng trưng CHIẾC XE SANG, CỬA NGÕ BỀ THẾ, MÔN HỘ
 * - Phương tiện đi lại sang trọng, vị thế xã hội
 * - Mang đến TĂNG TRƯỞNG, ỔN ĐỊNH, PHÚC LỘC (đặc trưng hành Mộc)
 */
export const luanGiai_BatToa: DoanLuanGiai[] = [
  {
    id: 'bat-toa-tinh-chat-rieng',
    title: 'Bát Tọa - Đặc tính riêng (Mộc, cửa ngõ bề thế)',
    sao: ['Bát Tọa'],
    doUuTien: 33,
    tomTat: `**Bát Tọa** — phụ tinh **CÁT TINH**, đặc tính RIÊNG khác Tam Thai.

**Ngũ hành:** **Mộc** (khác Tam Thai = Thủy).

**Hình tượng riêng:**
- **CHIẾC XE SANG** + **CỬA NGÕ BỀ THẾ**, môn hộ
- Tượng trưng cho **VỊ THẾ, SỰ CÔNG NHẬN, PHONG THÁI ĐĨNH ĐẠC** trong xã
  hội

**Bản chất hành Mộc:**
- Mang đến **TĂNG TRƯỞNG, ỔN ĐỊNH, PHÚC LỘC**
- Làm tốt đẹp cho bất kỳ cung nào nó tọa thủ

**So với Tam Thai:**
- Tam Thai = quyền uy CẤP CAO (vầng trán)
- Bát Tọa = chiếc xe sang, cửa ngõ bề thế (cái cằm)
- Tam Thai nghiêng về **DANH TIẾNG, ĐỊA VỊ**
- Bát Tọa nghiêng về **VẬT CHẤT, PHƯƠNG TIỆN, MÔN HỘ**`,
  },

  {
    id: 'bat-toa-tai-menh-rieng',
    title: 'Bát Tọa tại Mệnh - Cằm đầy đặn quý phái',
    sao: ['Bát Tọa'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `**Bát Tọa thủ Mệnh** — đặc tính **RIÊNG** của Bát Tọa (khác Tam Thai).

**Hình thể:**
- Bát Tọa tượng trưng cho **CÁI CẰM**
- **CHIẾC CẰM ĐẦY ĐẶN, NỞ NANG**
- Tạo nên nét **PHÚC HẬU, QUÝ PHÁI**
- Dáng điệu **KHOAN THAI, BỆ VỆ, TỪ TỐN, BÌNH TĨNH**

**Tính tình:**
- Người **KHÔN NGOAN, NHÂN HẬU**
- Có **PHONG THÁI BẬC QUYỀN QUÝ**
- Yêu thích cuộc sống **THANH NHÀN**
- Không ham **TRANH ĐẤU, BON CHEN** với đời
- "**DĨ HÒA VI QUÝ**"
- Luôn giữ thái độ **HÒA NHÃ, KHOAN DUNG**

**Công danh:**
- Hội nhiều cát tinh: **THÀNH ĐẠT, ĐỊA VỊ CAO**, nhiều thành tựu vẻ vang
- Đơn thủ: người **AN PHẬN, BÌNH YÊN**, không cao sang nhưng không vất vả

**Gặp nhiều sát bại tinh:**
- Ưu điểm Bát Tọa **BỊ LU MỜ**
- Trở nên **LƯỜI BIẾNG, TÂM LÝ Ỷ LẠI**
- **THIẾU CHÍ TIẾN THỦ**
- Khó làm nên **NGHIỆP LỚN**`,
  },

  {
    id: 'bat-toa-tai-dien-trach-rieng',
    title: 'Bát Tọa tại Điền Trạch - Cửa ngõ bề thế xe cộ sang trọng',
    sao: ['Bát Tọa'],
    cung: ['Điền Trạch'],
    doUuTien: 78,
    tomTat: `**Bát Tọa tại Điền Trạch** — đặc trưng RIÊNG: **CỬA NGÕ, MÔN HỘ + PHƯƠNG
TIỆN SANG TRỌNG**.

**Hình tượng đặc trưng:**
- Bát Tọa tượng trưng cho **CỬA NGÕ, MÔN HỘ**
- **PHƯƠNG TIỆN ĐI LẠI SANG TRỌNG**
- Khác Tam Thai (chủ về nhà cửa khang trang chung) - Bát Tọa nhấn mạnh
  **CỬA NGÕ + XE CỘ**

**Đặc trưng:**
- Mang lại **MAY MẮN LỚN** về nhà cửa, đất đai
- Đương số dễ có **NHÀ CAO CỬA RỘNG, BỀ THẾ, KHANG TRANG**
- Việc mua bán, tạo dựng điền sản **DỄ DÀNG THUẬN LỢI**
- Được **THỪA HƯỞNG** hoặc được người khác **GIÚP ĐỠ**

**Vị trí nhà:**
- Nhà cửa thường ở nơi **ĐÔNG NGƯỜI**
- Có **XE CỘ, PHƯƠNG TIỆN ĐI LẠI GIÁ TRỊ**
- Cổng ngõ to đẹp, thể hiện vị thế`,
  },

  {
    id: 'bat-toa-tat-ach-gap-thay-thuoc',
    title: 'Bát Tọa tại Tật Ách - Gặp thầy gặp thuốc',
    sao: ['Bát Tọa'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `**Bát Tọa tại Tật Ách** — khi bệnh dễ **GẶP ĐƯỢC THẦY GIỎI** cứu chữa.

**Đặc trưng:**
- Có khả năng **GIẢI TRỪ TAI ƯƠNG, BỆNH TẬT NHỎ**
- Giảm thiểu **NGUY HIỂM**
- Biến **HỌA LỚN THÀNH NHỎ, BỆNH NẶNG THÀNH NHẸ**

**Đặc biệt:**
- Khi bị bệnh dễ **GẶP THẦY, GẶP THUỐC** cứu chữa
- Được **CHẨN ĐOÁN ĐÚNG**, điều trị hiệu quả

**Khi qua đời:**
- Cũng **NHẸ NHÀNG, THANH THẢN**
- Được **NHIỀU NGƯỜI QUYỀN QUÝ** đến thăm viếng`,
  },
];
