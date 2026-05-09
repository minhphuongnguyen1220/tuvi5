import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THIÊN THƯƠNG - Thủy, Hung Tinh.
 *
 * QUY LUẬT BẮT BUỘC: Thiên Thương LUÔN cố định tại cung NÔ BỘC
 * (engine hardcode `src/core/tuvi/phu-tinh.ts`).
 *
 * Đặc trưng:
 * - Là sao nhỏ phụ - DÙNG ĐỂ XEM VẬN HẠN (đặc biệt tiểu hạn)
 * - KHÔNG có ý nghĩa nhiều trên toàn cuộc đời
 * - Cùng Thiên Sứ (cố định cung Tật) tạo bộ THƯƠNG SỨ
 * - Biểu tượng "thiên ý" — tổn thương từ những mối quan hệ lợi ích
 *
 * Phần CHUNG bộ Thương-Sứ đã viết tại file này với
 * sao: ['Thiên Thương', 'Thiên Sứ'].
 */
export const luanGiai_ThienThuong: DoanLuanGiai[] = [
  {
    id: 'thien-thuong-tinh-chat-chung',
    title: 'Thiên Thương - Đặc tính chung (cố định tại Nô Bộc)',
    sao: ['Thiên Thương'],
    doUuTien: 32,
    tomTat: `**Thiên Thương** là phụ tinh hung tinh, ngũ hành Thủy, luôn cố
định tại cung Nô Bộc trên lá số (đây là quy luật bắt buộc do engine
hardcode).

Sao này chủ về tổn thương, buồn phiền, mất mát — và đặc biệt nhất là
những vết thương đến từ những mối quan hệ tưởng như thân cận, dưới hình
thức biến cố khó lường.

Ý nghĩa biểu tượng nằm ở chỗ Nô Bộc là cung của các mối quan hệ mang
tính lợi ích — cấp dưới, đồng nghiệp, bạn bè xã giao. Việc Thiên Thương
cố định tại đây mang hàm ý "thiên ý": có lợi ích thì ắt có tranh đoạt và
mâu thuẫn, con người khó tránh khỏi tổn thương từ chính những mối quan
hệ lợi ích này.

Thiên Thương là sao nhỏ và phụ, không có ý nghĩa nhiều trên toàn cuộc
đời mà chỉ dùng khi xem vận hạn (đặc biệt là tiểu hạn). Cùng với Thiên
Sứ, hai sao tạo thành bộ Thương Sứ trứ danh.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // PHẦN CHUNG CẶP THƯƠNG-SỨ
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thuong-su-bo-doi-tinh-chat',
    title: 'Bộ Thương Sứ - Đặc tính chung (xem hạn)',
    sao: ['Thiên Thương', 'Thiên Sứ'],
    doUuTien: 60,
    tomTat: `Bộ **Thương Sứ** gồm Thiên Thương và Thiên Sứ — cặp hung tinh cố
định: Thiên Thương luôn ở cung Nô Bộc, Thiên Sứ luôn ở cung Tật Ách.

Đặc tính chung là buồn thảm, xui xẻo và không may, ngăn trở mọi công
việc của đương số, mang lại tang thương, bệnh tật, tai họa.

Vai trò của bộ Thương Sứ khá đặc biệt: hai sao này chỉ có ý nghĩa khi
xem hạn, không tác động nhiều trên toàn cuộc đời. Khi giải đoán vận hạn
(nhất là tiểu hạn), người luận mới cần lưu ý vị trí và sự hội tụ của
Thương Sứ với các sao khác.

Cảnh báo của Nguyễn Mạnh Bảo: năm hạn gặp phải hai sao này mà thiếu sao
giải đủ mạnh, đương số dù không chết cũng nguy mạng.

Cùng với Thiên La cố định tại Thìn và Địa Võng cố định tại Tuất, bốn sao
Thương - Sứ - La - Võng tạo thành bốn "lưới trời" cố định trên lá số.`,
  },

  {
    id: 'thuong-su-vi-tri-xau-hoa-den-mau',
    title: 'Thương Sứ - Vị trí XẤU họa đến mau',
    sao: ['Thiên Thương', 'Thiên Sứ'],
    doUuTien: 65,
    tomTat: `Bộ Thương Sứ có những vị trí đặc biệt xấu — nơi họa đến rất mau
khi đương số vào hạn:

- Họa đến mau
  - Thiên Sứ ở Dần, Thân, Tỵ, Hợi (Tứ Sinh)
- Họa đến thật mau
  - Thiên Thương ở Sửu, Mão, Thìn, Dậu, Tuất
  - Thiên Sứ ở Tý, Mão, Thìn, Ngọ, Mùi
- Vị trí cảnh báo riêng
  - Thương Sứ ở Tý, Dần được đánh giá là độc

Khi luận hạn cần xem trước cung Tật có Thiên Sứ và cung Nô có Thiên
Thương, đối chiếu vị trí địa chi của hai cung này, rồi mới xem các sao
hung tụ về có hay không.`,
  },

  {
    id: 'thuong-su-cac-sao-giai',
    title: 'Sao GIẢI bộ Thương Sứ',
    sao: ['Thiên Thương', 'Thiên Sứ'],
    doUuTien: 60,
    tomTat: `Khi luận hạn gặp Thương Sứ, việc tra cứu các sao có khả năng giải
là cực kỳ quan trọng:

- Chính tinh giải
  - Tử Vi (Đế tinh, uy quyền)
  - Thiên Phủ (che chở ổn định)
  - Thiên Lương (phúc đức, trường thọ)
  - Thiên Đồng (phúc lộc)
- Bàng tinh giải
  - Hóa Khoa, Hóa Lộc (vận may, tri thức, của cải)
  - Tả Phù, Hữu Bật (được người khác giúp đỡ)
  - **Quang Quý** (Ân Quang + Thiên Quý)
  - Khôi Việt (Thiên Ất Quý Nhân)
- Sao giải đặc thù
  - Tam Giải (Thiên Giải + Địa Giải + Giải Thần)
  - Quan Phúc (Thiên Quan + Thiên Phúc)
  - Tuần, Triệt (lá chắn triệt tiêu hung họa)

Nếu cung Phúc nhiều sao tốt và mạnh, sức chế giải sẽ mạnh và toàn diện.

Lưu ý quan trọng: chữ "giải" ở đây không có nghĩa là sự việc hoàn toàn
không xảy đến. Nếu vẫn đến, nó sẽ không tác họa đúng mức nhờ gặp được
sao giải hiệu lực — đó mới là cách hiểu đúng.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // THIÊN THƯƠNG TẠI CUNG NÔ BỘC + CÁC BỘ HẠN
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-thuong-tai-no-boc',
    title: 'Thiên Thương tại Nô Bộc - Tổn thương từ phe mình',
    sao: ['Thiên Thương'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Thiên Thương cố định tại cung Nô Bộc khiến đương số gặp nhiều
phiền muộn buồn bã trong các mối quan hệ xã giao.

Cảnh báo nằm ở chỗ tổn thương đến từ chính những người xung quanh —
đặc biệt là đồng nghiệp, cộng sự, bạn bè. Hình ảnh hay được mô tả là
cuộc đời như một ván cờ, và Thương ở Nô chính là những nước đi bất ngờ
từ "phe mình" — buộc đương số phải đề phòng và tỉnh táo ngay giữa những
mối quan hệ tưởng vô hại nhất.

Để hóa giải, đương số nên làm nhiều việc thiện và lan tỏa năng lượng
tích cực, giữ tâm hòa nhã tránh tranh chấp, tỉnh táo trước lời nói và
hành động của người khác. Nếu cung Phúc có nhiều sao tốt, mức độ tổn
thương có thể giảm thiểu đáng kể.`,
  },

  {
    id: 'thien-thuong-han-xuong-khuc-que-su-hoa-thuong',
    title: 'Hạn: Thương + Xương / Khúc - Quế Sứ Hoa Thương',
    sao: ['Thiên Thương'],
    ketHop: ['Văn Xương', 'Văn Khúc'],
    doUuTien: 60,
    tomTat: `Khi Thiên Thương gặp **Văn Xương** hoặc **Văn Khúc** vào hạn, đó
chính là cách **Quế Sứ Hoa Thương** — tác họa được đánh giá là khủng
khiếp, đương số có thể chết non nếu cả hai hạn cùng xấu.

Hình tượng cách cục được ví như "lời buồn thương" hay "lời ca sầu khổ" —
giống tiếng khóc trong tang lễ, nước mắt nhiều hơn tiếng cười, mất mát
và bi thương ẩn sau vẻ đẹp và trí tuệ vốn có của Xương Khúc.

Cách càng nguy hiểm khi có thêm Thất Sát, Kình Đà, Linh Tinh hội tụ —
khi đó rủi ro chết yểu là rõ rệt.

Đương số khi gặp tổ hợp này cần hết sức thận trọng, dù ngày nay nhiều
yếu tố nguy hiểm đã được kiểm soát hơn xưa.`,
  },

  {
    id: 'thien-thuong-han-thien-hinh-bi-danh',
    title: 'Hạn: Thương + Thiên Hình tại Nô Bộc - Bị đánh',
    sao: ['Thiên Thương'],
    cung: ['Nô Bộc'],
    ketHop: ['Thiên Hình'],
    doUuTien: 55,
    tomTat: `Khi Thiên Thương gặp **Thiên Hình** vào hạn, đó là họa "Hình
Thương" — đương số có thể bị đánh, va chạm, hành vi mang tính bạo lực.

Tại Nô Bộc (vị trí cố định của Thiên Thương), đương số dễ gặp xung đột
với người xung quanh, đặc biệt là đồng nghiệp, bạn bè, cộng sự.

Cách càng nghiêm trọng khi có thêm Phá Quân, Vũ Khúc, Thất Sát hội về —
khi ấy hành động bạo lực có cường độ mạnh hơn nhiều.`,
  },

  {
    id: 'thien-thuong-han-thien-hinh-no-boc-kiep-sat-phuc-binh-hoa-ky',
    title: 'Hạn: Thương + Thiên Hình + Kiếp Sát + Phục Binh + Hóa Kỵ tại Nô Bộc',
    sao: ['Thiên Thương'],
    ketHop: ['Thiên Hình', 'Kiếp Sát', 'Phục Binh', 'Hóa Kỵ'],
    cung: ['Nô Bộc'],
    doUuTien: 50,
    tomTat: `Khi Thiên Thương gặp Thiên Hình, Kiếp Sát, Phục Binh và Hóa Kỵ
cùng tụ tại Nô Bộc, đương số phải gánh chịu vết thương tâm lý âm ỉ rất
khó hồi phục.`,
  },

  {
    id: 'thien-thuong-han-tang-mon-tang-thuong',
    title: 'Hạn: Thương + Tang Môn - Mất mát đau thương',
    sao: ['Thiên Thương'],
    ketHop: ['Tang Môn'],
    doUuTien: 55,
    tomTat: `Thiên Thương gặp **Tang Môn** vào hạn là điềm báo mất mát đau
thương. Tổ hợp này mang tính u buồn, báo hiệu tang sự, nhất là khi nhập
hạn xấu — có thể có những biến đổi phi thường trong đời sống đương số.`,
  },

  {
    id: 'thien-thuong-han-tang-mon-dao-viet',
    title: 'Hạn: Thương + Tang Môn + Đào Hoa + Thiên Việt - cách biệt âm dương',
    sao: ['Thiên Thương'],
    ketHop: ['Tang Môn', 'Đào Hoa', 'Thiên Việt'],
    doUuTien: 50,
    tomTat: `Khi Thiên Thương gặp Tang Môn, Đào Hoa và Thiên Việt vào hạn (ở
cung tình cảm bất ổn), đó là tín hiệu kết thúc, đổ vỡ một mối quan hệ mà
đương số kỳ vọng nhiều. Trường hợp nặng có thể là cách biệt âm dương với
người thân cận.`,
  },

  {
    id: 'thien-thuong-su-han-kinh-hoa-rieu-cu',
    title: 'Hạn: Thương Sứ + Kình + Hỏa + Riêu + Cự - Hại của hại người',
    sao: ['Thiên Thương', 'Thiên Sứ'],
    ketHop: ['Kình Dương', 'Hỏa Tinh', 'Thiên Riêu', 'Cự Môn'],
    doUuTien: 55,
    tomTat: `Khi bộ Thương Sứ gặp đầy đủ Kình Dương, Hỏa Tinh, Thiên Riêu và
Cự Môn vào hạn, đương số rơi vào cảnh "hại của, hại người". Phân tích
các sao thành phần:

- Kình Dương + Hỏa Tinh là sao chủ hao tán, sát
- Cự Môn + Thiên Riêu là sao Ám
- Hợp lại tạo cảnh tài sản tiêu tán

Cảnh báo: đương số dễ bị ghen ghét, đố kỵ sinh thị phi, hao tổn cả vật
chất lẫn tinh thần.

Để hóa giải, đương số cần giữ thận trọng trong lời ăn tiếng nói, cẩn
thận khi giao tiếp xã hội, tránh "họa vô đơn chí" ập đến cùng lúc.`,
  },

  {
    id: 'thien-thuong-su-han-am-dau-rac-roi',
    title: 'Hạn: Thương + Sứ - Hay ốm đau, rắc rối vì bạn',
    sao: ['Thiên Thương', 'Thiên Sứ'],
    doUuTien: 55,
    tomTat: `Khi cả Thiên Thương và Thiên Sứ cùng vào hạn (đối xứng), đương số
hay ốm đau và đồng thời gặp rắc rối vì bạn bè.

Thiên Sứ tại Tật Ách kéo theo những đợt ốm đau, trong khi Thiên Thương
tại Nô Bộc khuấy động rắc rối từ phía bạn bè. Hai mặt cùng tác động cùng
lúc: vừa bệnh hoạn, vừa bị người thân cận làm khổ.

Đương số cần đề phòng cả hai mặt cùng lúc — sức khỏe (Sứ tại Tật) và
mối quan hệ (Thương tại Nô) — đặc biệt thận trọng trong giao thiệp lúc
đang bệnh hoạn yếu thế.`,
  },

  {
    id: 'thien-thuong-su-han-luc-sat-nguy-mang',
    title: 'Hạn: Thương Sứ + Lục Sát - Nguy mạng',
    sao: ['Thiên Thương', 'Thiên Sứ'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 65,
    tomTat: `Khi bộ Thương Sứ gặp Lục Sát Tinh vào hạn, đương số nguy mạng,
thậm chí có thể chết. Lục Sát Tinh gồm:

- Kình Dương và Đà La (Cát Sát)
- Hỏa Tinh và Linh Tinh (Hỏa Sát)
- Địa Không và Địa Kiếp (Không Kiếp)

Cảnh báo nghiêm trọng: năm hạn mà gặp Thương Sứ kết hợp Lục Sát, nếu
thiếu sao giải đủ mạnh, đương số không chết cũng nguy mạng.

Sao giải hiệu quả gồm Tử Vi, Thiên Phủ, Thiên Lương, Thiên Đồng — có
thể giải được phần lớn tác hại.

Khi luận tiểu hạn có Thương Sứ, ưu tiên đầu tiên của người xem là kiểm
tra Lục Sát đồng cung và trong tam hợp.`,
  },

  {
    id: 'thien-thuong-han-khoc-thi-cu',
    title: 'Hạn: Thương + Thiên Khốc - Thi cử lận đận',
    sao: ['Thiên Thương'],
    ketHop: ['Thiên Khốc'],
    doUuTien: 50,
    tomTat: `Khi Thiên Thương gặp **Thiên Khốc** vào hạn, đương số phải chịu
cảnh thi cử lận đận.

Thiên Khốc thuộc bộ Khốc Hư - bại tinh, kết hợp với Thiên Thương vốn
chủ u buồn mất mát, khiến kết quả thi cử không như ý, lận đận trượt lên
trượt xuống.

Để hóa giải cần các sao Văn (**Văn Xương**, **Văn Khúc** đắc địa),
**Khôi Việt**, **Hóa Khoa** hội chiếu để bù đắp lại.`,
  },
];
