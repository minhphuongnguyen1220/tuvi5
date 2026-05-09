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
    tomTat: `**Bát Tọa** là phụ tinh thuộc nhóm cát tinh, có những đặc tính
riêng khác với Tam Thai. Ngũ hành Mộc (trong khi Tam Thai thuộc Thủy).

Hình tượng đặc trưng của Bát Tọa là chiếc xe sang cùng cửa ngõ bề thế, môn
hộ — tượng trưng cho vị thế, sự công nhận và phong thái đĩnh đạc của đương
số trong xã hội.

Mang bản chất hành Mộc, Bát Tọa đem đến sự tăng trưởng, ổn định và phúc lộc,
làm tốt đẹp cho bất kỳ cung nào nó tọa thủ.

Khi so sánh với Tam Thai:

- Tam Thai biểu trưng cho quyền uy cấp cao (vầng trán), nghiêng về danh
  tiếng và địa vị
- **Bát Tọa** biểu trưng cho chiếc xe sang và cửa ngõ bề thế (cái cằm),
  nghiêng về vật chất, phương tiện và môn hộ`,
  },

  {
    id: 'bat-toa-tai-menh-rieng',
    title: 'Bát Tọa tại Mệnh - Cằm đầy đặn quý phái',
    sao: ['Bát Tọa'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `Khi Bát Tọa thủ Mệnh, đương số mang những đặc tính riêng (khác
với Tam Thai).

Về hình thể, Bát Tọa tượng trưng cho cái cằm: đương số có chiếc cằm đầy
đặn, nở nang, tạo nên nét phúc hậu quý phái. Dáng điệu khoan thai, bệ vệ,
từ tốn và bình tĩnh.

Tính tình đương số khôn ngoan, nhân hậu, mang phong thái bậc quyền quý.
Đương số yêu thích cuộc sống thanh nhàn, không ham tranh đấu hay bon chen
với đời, lấy "dĩ hòa vi quý" làm phương châm và luôn giữ thái độ hòa nhã,
khoan dung.

Về công danh:

- Hội nhiều cát tinh, đương số thành đạt, đạt địa vị cao và có nhiều thành
  tựu vẻ vang
- Đơn thủ, đương số sống an phận, bình yên — tuy không cao sang nhưng cũng
  không vất vả

Khi gặp nhiều sát bại tinh, ưu điểm của Bát Tọa bị lu mờ: đương số trở nên
lười biếng, mang tâm lý ỷ lại, thiếu chí tiến thủ, vì vậy khó làm nên
nghiệp lớn.`,
  },

  {
    id: 'bat-toa-tai-dien-trach-rieng',
    title: 'Bát Tọa tại Điền Trạch - Cửa ngõ bề thế xe cộ sang trọng',
    sao: ['Bát Tọa'],
    cung: ['Điền Trạch'],
    doUuTien: 78,
    tomTat: `Khi Bát Tọa tại Điền Trạch, sao này mang đặc trưng riêng về cửa
ngõ, môn hộ cùng phương tiện sang trọng cho đương số.

Hình tượng tại đây là cửa ngõ và môn hộ kết hợp với phương tiện đi lại sang
trọng. Khác với Tam Thai vốn chủ về nhà cửa khang trang nói chung, Bát Tọa
nhấn mạnh phần cửa ngõ và xe cộ.

Sao này mang lại may mắn lớn về nhà cửa và đất đai cho đương số: dễ có nhà
cao cửa rộng, bề thế khang trang. Việc mua bán hay tạo dựng điền sản đều
dễ dàng, thuận lợi; đương số có thể được thừa hưởng hoặc nhận giúp đỡ từ
người khác.

Nhà cửa của đương số thường tọa lạc ở nơi đông người, có xe cộ và phương
tiện đi lại giá trị, cổng ngõ to đẹp thể hiện vị thế.`,
  },

  {
    id: 'bat-toa-tat-ach-gap-thay-thuoc',
    title: 'Bát Tọa tại Tật Ách - Gặp thầy gặp thuốc',
    sao: ['Bát Tọa'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `Khi Bát Tọa tại Tật Ách, đương số khi mắc bệnh dễ gặp được thầy
giỏi cứu chữa.

Sao này có khả năng giải trừ tai ương cùng các bệnh tật nhỏ, giảm thiểu
nguy hiểm và biến họa lớn thành nhỏ, bệnh nặng thành nhẹ.

Đặc biệt khi bị bệnh, đương số dễ gặp thầy gặp thuốc, được chẩn đoán đúng
và điều trị hiệu quả.

Đến khi qua đời, đương số cũng ra đi nhẹ nhàng, thanh thản, được nhiều
người quyền quý đến thăm viếng.`,
  },
];
