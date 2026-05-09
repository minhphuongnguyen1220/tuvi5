import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO ĐỊA GIẢI - Thổ, Phúc Thiện Tinh.
 *
 * An theo THÁNG SINH (engine: khởi từ Mùi thuận theo tháng sinh).
 *
 * Địa = ĐẤT. Giải = tháo gỡ, hóa giải.
 *: Địa Giải = sự trợ giúp từ ĐẤT, các thế lực gần gũi như thần linh,
 * thổ công, thổ địa.
 *
 * Đặc trưng riêng:
 * - Tướng THẤP NGƯỜI, HƠI MẬP (khác Thiên Giải cao ráo trắng hồng)
 * - Hợp PHƯƠNG PHÁP CHỮA TRỊ TỰ NHIÊN, năng lượng từ môi trường
 * - Tinh thần dễ GIAO THOA VỚI ĐẤT, cảm nhận năng lượng tích cực/tiêu cực
 *
 * Phần CHUNG cặp Thiên-Địa Giải đã viết tại file thien-giai.ts với
 * sao: ['Thiên Giải', 'Địa Giải'].
 */
export const luanGiai_DiaGiai: DoanLuanGiai[] = [
  {
    id: 'dia-giai-tinh-chat-chung',
    title: 'Địa Giải - Đặc tính chung',
    sao: ['Địa Giải'],
    doUuTien: 32,
    tomTat: `**Địa Giải** là phụ tinh thuộc nhóm Phúc Thiện Tinh, ngũ hành Thổ,
an theo tháng sinh. Tên sao mang ý nghĩa "sự trợ giúp từ đất" — những thế
lực gần gũi với con người như thần linh, thổ công, thổ địa luôn âm thầm che
chở đương số.

Sao này tựa như tấm bùa hộ mệnh giúp đương số vượt qua khó khăn, giảm nhẹ
tai ương, hóa hung thành cát; đồng thời tăng phúc phần và thọ lộc.

Khác biệt với Thiên Giải:

- Tướng mạo thấp người, hơi mập (Thiên Giải cao ráo, trắng hồng)
- Trợ giúp đến từ môi trường gần gũi như đất, thổ địa — khác Thiên Giải vốn
  từ trên cao
- Hợp với phương pháp chữa trị tự nhiên, năng lượng từ môi trường lành mạnh

Vì Địa Giải và Thiên Giải không bao giờ đồng cung, việc hóa giải chỉ ở mức
tương đối. Đương số cần tích đức, làm việc thiện thì mới chuyển họa thành
phúc trọn vẹn.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // ĐỊA GIẢI TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'dia-giai-tai-menh',
    title: 'Địa Giải tại Mệnh',
    sao: ['Địa Giải'],
    cung: ['Mệnh'],
    doUuTien: 76,
    tomTat: `Khi Địa Giải thủ Mệnh, đương số là người giàu lòng nhân ái, gặp
nhiều may mắn và có khả năng giải ách tự nhiên.

Về tướng mạo, đương số thường thấp người, hơi mập, dáng vẻ hiền lành nhẹ
nhàng nên dễ được lòng người khác. Tính tình hòa nhã, từ tốn, sống có đức,
thích làm việc thiện và luôn sẵn sàng giúp đỡ người xung quanh.

Sao này như biểu tượng của sự che chở từ thần linh, thổ địa: tai ương và
bệnh tật được giảm trừ, phúc phần cùng thọ lộc đều được vun đắp thêm.

Tuy nhiên, vì không hội tụ với Thiên Giải, khả năng hóa giải chỉ tương đối.
Khi gặp vận xấu, nếu thiếu cát tinh khác phối hợp, đương số vẫn phải gánh
chịu ít nhiều khổ ải. Cần tích đức và làm việc thiện để chuyển họa thành
phúc.`,
  },

  {
    id: 'dia-giai-tai-phu-mau',
    title: 'Địa Giải tại Phụ Mẫu',
    sao: ['Địa Giải'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Khi Địa Giải tại Phụ Mẫu, cha mẹ của đương số là người hiền
lành, sống có đạo đức, tính cách ôn hòa nhẹ nhàng.

Cha mẹ thường có tài sản và kinh tế vững vàng, biết lo xa, hay làm việc
thiện để con cháu không phải gặp điều xấu. Nhờ tấm lòng nhân hậu, các bậc
sinh thành sống thọ, ít bệnh tật và có quý nhân phù trợ — đây cũng là gốc
rễ giúp phúc phần cả gia đình bền lâu.`,
  },

  {
    id: 'dia-giai-tai-phuc-duc',
    title: 'Địa Giải tại Phúc Đức',
    sao: ['Địa Giải'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `Khi Địa Giải tại Phúc Đức, dòng họ của đương số có nhiều người
hiền lành, tốt tính, hay giúp đỡ và hỗ trợ lẫn nhau.

Đặc trưng riêng của Địa Giải tại đây là khả năng giao thoa với đất: tinh
thần đương số dễ cảm nhận được năng lượng môi trường xung quanh, phân biệt
được những trường khí tích cực hay tiêu cực, đồng thời nhạy cảm với địa khí
và phong thủy. Đây là điểm khác biệt rõ rệt so với Thiên Giải, bởi Địa Giải
thuộc Thổ nên có duyên với đất.`,
  },

  {
    id: 'dia-giai-tai-dien-trach',
    title: 'Địa Giải tại Điền Trạch',
    sao: ['Địa Giải'],
    cung: ['Điền Trạch'],
    doUuTien: 70,
    tomTat: `Khi Địa Giải tại Điền Trạch, đặc tính "giải" làm tiêu tán và
hao hụt một phần tài sản của đương số. Đây là vị trí không hợp.

Mức độ mất mát ở vào hàng vừa phải, không khiến cuộc sống lâm vào cảnh lao
đao túng thiếu.

Mặt tích cực bất ngờ là trong một số trường hợp, tính tán giúp lọc bớt năng
lượng xấu trong nơi ở, "xả độc để thanh lọc". Theo quy luật "có tán mới có
tụ", mất mát trước sẽ được lợi sau, đồng thời âm khí trong nhà cũng giảm
bớt.

Đương số không nên lập bàn thờ thần linh, thổ địa tại nơi ở hay cửa hàng,
vì dễ làm hao tán thêm.`,
  },

  {
    id: 'dia-giai-tai-quan-loc',
    title: 'Địa Giải tại Quan Lộc',
    sao: ['Địa Giải'],
    cung: ['Quan Lộc'],
    doUuTien: 75,
    tomTat: `Khi Địa Giải tại Quan Lộc, đương số nhận được nhiều may mắn và
sự hỗ trợ trong sự nghiệp.

Mọi người xung quanh sẵn lòng giúp đỡ; bệnh tật, tai họa đều được giảm chế.
Việc thi cử, xin việc, thăng chức đều thuận lợi, tranh tài thi đua cũng gặp
nhiều cơ may. Có thể nói đương số "được thời, được thế, được lòng người" —
dù gặp chông gai cũng dễ vượt qua.

Vị trí này hợp với những nghề mang tính chất giúp người, cứu người như thầy
thuốc, bác sĩ hay giáo viên.`,
  },

  {
    id: 'dia-giai-tai-no-boc',
    title: 'Địa Giải tại Nô Bộc',
    sao: ['Địa Giải'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Khi Địa Giải tại Nô Bộc, đương số thường có quý nhân bên mình,
sẵn sàng giúp đỡ cả vật chất lẫn tinh thần.

Bạn bè và cộng sự đa phần là người ngay thẳng, chân thành, sống có tình có
nghĩa và luôn sẵn sàng hỗ trợ khi cần.

Dù vậy, câu "chọn bạn mà chơi" vẫn cần ghi nhớ. Trong các mối quan hệ liên
quan đến tiền bạc, làm ăn, đương số nên tỉnh táo và khéo léo để tránh để
lòng tốt bị lợi dụng.`,
  },

  {
    id: 'dia-giai-tai-thien-di',
    title: 'Địa Giải tại Thiên Di',
    sao: ['Địa Giải'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `Khi Địa Giải tại Thiên Di, đương số đi xa thường gặp may mắn và
được quý nhân giúp đỡ.

Mỗi lần đi công tác, xuất hành, du lịch hay thay đổi môi trường sống, đương
số đều nhận được sự hỗ trợ âm thầm từ người khác: lỡ đường lại có người cho
đi nhờ, thất nghiệp ra ngoài lại tìm được cơ hội mới.

Tuy vậy, Địa Giải chỉ giúp giải phần nào tai ách chứ không thể trừ sạch mọi
vận đen. Đương số cần giữ thái độ cẩn trọng, sống tử tế để "gieo nhân lành
gặt quả tốt".`,
  },

  {
    id: 'dia-giai-tai-tat-ach',
    title: 'Địa Giải tại Tật Ách - Hợp phương pháp tự nhiên',
    sao: ['Địa Giải'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `Khi Địa Giải tại Tật Ách, sao này hợp cách và có tác dụng giải
trừ bệnh tật cho đương số.

Khi đối mặt với bệnh tật hay tai ương, đương số dễ có cơ may gặp được thầy
thuốc giỏi và tìm được phương pháp chữa trị phù hợp.

Vốn mang tính "địa" — từ đất mà ra — Địa Giải đặc biệt hợp với những phương
pháp chữa trị có nguồn gốc tự nhiên, cùng năng lượng từ môi trường sống lành
mạnh. Đông y, nam dược, thảo mộc cùng các phương pháp dùng dược liệu tự
nhiên đều phát huy hiệu quả tốt cho đương số.`,
  },

  {
    id: 'dia-giai-tai-tai-bach',
    title: 'Địa Giải tại Tài Bạch',
    sao: ['Địa Giải'],
    cung: ['Tài Bạch'],
    doUuTien: 70,
    tomTat: `Khi Địa Giải tại Tài Bạch, sao này không hợp và làm tiêu hao một
phần của cải của đương số.

Mức độ tiêu hao không nghiêm trọng đến mức trắng tay nghèo túng; tiền bạc
chỉ "đến rồi lại đi". Đa phần là chi tiền để giải hạn, làm phước — mất tiền
nhưng tránh được họa. Câu "của đi thay người" rất đúng với đương số có Địa
Giải tại Tài Bạch.

Vì vậy, đương số không nên tiếc tiền để giải quyết những rắc rối khi vận
hạn — đây là cách đơn giản và thuận tiện nhất.`,
  },

  {
    id: 'dia-giai-tai-tu-tuc',
    title: 'Địa Giải tại Tử Tức',
    sao: ['Địa Giải'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Khi Địa Giải tại Tử Tức, những tai ách khi sinh nở của đương số
sẽ được hóa giải; các vấn đề trong mối quan hệ với con cái cũng được giảm
nhẹ dần. Đương số dễ sinh con, con cái khỏe mạnh.

Tuy nhiên, tính "giải" của sao này cũng là tín hiệu cho thấy mối quan hệ
ắt có vấn đề tiềm ẩn. Cần xem thêm hung sát tinh cùng cung để nhận định
mức độ và tìm hướng giải quyết phù hợp.`,
  },

  {
    id: 'dia-giai-tai-phu-the',
    title: 'Địa Giải tại Phu Thê',
    sao: ['Địa Giải'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `Khi Địa Giải tại Phu Thê, sao này giúp vợ chồng đương số bớt cãi
vã, hóa giải dần dần những mâu thuẫn — như "tháo nút thắt" trong mối quan
hệ.

Để hôn nhân thực sự thuận hòa, hai vợ chồng cần chủ động cùng nhau nhìn
nhận vấn đề, biết nhún nhường và sẻ chia. Địa Giải chỉ phát huy tác dụng
"tháo nút" khi đôi bên cùng hợp tác.`,
  },

  {
    id: 'dia-giai-tai-huynh-de',
    title: 'Địa Giải tại Huynh Đệ',
    sao: ['Địa Giải'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Khi Địa Giải tại Huynh Đệ, anh chị em của đương số là những
người hiền lành nhân hậu, dễ gặp may và ít bệnh tật.

Quan hệ trong gia đình hòa hợp, các thành viên tương thân tương ái và sẵn
sàng hỗ trợ giúp đỡ lẫn nhau.`,
  },
];
