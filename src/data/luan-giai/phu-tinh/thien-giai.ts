import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THIÊN GIẢI - Hỏa, Phúc Thiện Tinh.
 *
 * An theo THÁNG SINH (engine: khởi từ Thân thuận theo tháng sinh).
 *
 * Thiên = TRỜI. Giải = tháo gỡ, phân tán, tiêu trừ.
 *: Thiên Giải = sự trợ giúp của ĐẤT TRỜI, các vị thần linh đến từ trên cao.
 *
 * QUY LUẬT ĐẶC BIỆT của cặp Thiên-Địa Giải:
 * - Địa Giải LUÔN đứng SAU Thiên Giải
 * - 2 sao KHÔNG bao giờ đồng cung hoặc tam hợp với nhau
 * - Chỉ có thể NHỊ HỢP tại Tý-Sửu hoặc Ngọ-Mùi
 * - Như mảnh ghép Âm-Dương: khả năng cứu giải chỉ được MỘT NỬA, không
 * trọn vẹn như Giải Thần (sao Năm)
 *
 * Phần CHUNG cặp Thiên-Địa Giải đã viết tại file này với
 * sao: ['Thiên Giải', 'Địa Giải'].
 */
export const luanGiai_ThienGiai: DoanLuanGiai[] = [
  {
    id: 'thien-giai-tinh-chat-chung',
    title: 'Thiên Giải - Đặc tính chung',
    sao: ['Thiên Giải'],
    doUuTien: 32,
    tomTat: `**Thiên Giải** là phụ tinh thuộc nhóm Phúc Thiện Tinh, an theo tháng
sinh, ngũ hành Hỏa. Tên gọi gồm "Thiên" — trời, "Giải" — tháo gỡ; tổng hợp
lại là sự trợ giúp của đất trời, các vị thần linh trên cao đến giúp đỡ
đương số.

Đặc tính chính của sao là giải ách, đem may mắn, trừ họa và gia tăng phúc
thọ. Đây là sao cứu nguy, giải trừ tai ách và bệnh tật cho chủ mệnh.

Thiên Giải cùng với Địa Giải và Giải Thần tạo thành bộ Tam Giải. Tuy
nhiên do Thiên Giải không bao giờ đồng cung được với Địa Giải, khả năng
giải của riêng sao này chỉ phát huy được một nửa.

So với Địa Giải: Thiên Giải mang sự trợ giúp từ trời, đặc tính nhẹ nhàng
thanh thoát, đương số thường cao ráo trắng hồng — trong khi Địa Giải lấy
năng lượng từ đất, người thấp hơi mập.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // PHẦN CHUNG CẶP THIÊN-ĐỊA GIẢI
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-dia-giai-bo-doi-tinh-chat',
    title: 'Bộ Thiên-Địa Giải - Đặc tính chung của cặp đôi',
    sao: ['Thiên Giải', 'Địa Giải'],
    doUuTien: 60,
    tomTat: `Bộ **Thiên Giải + Địa Giải** là cặp sao cứu giải nhỏ trong tử vi,
cả hai cùng an theo tháng sinh. Hai chữ "Thiên" — trời và "Địa" — đất
gắn liền với Tam Tài Thiên-Nhân-Địa, đại diện cho môi trường xung quanh
và các tác nhân bên ngoài ảnh hưởng tới con người, còn "Giải" mang ý
tháo gỡ, phân tán, tiêu trừ.

Về bản chất, đây là sự trợ giúp của đất trời, thần linh, thổ địa đến
với chủ mệnh, chủ về cứu nguy, giải trừ tai ách, bệnh tật và gia tăng
phúc thọ. Đặc tính nổi bật ở đương số có sao này là khoan hòa, đức độ,
thuần hậu, giàu lòng nhân ái và hay giúp đỡ người khác — vai trò tương
tự cặp Thiên Quan Quý Nhân + Thiên Phúc Quý Nhân nhưng nhẹ hơn.

Cặp sao có hai mặt cần lưu ý:

- Tích cực: cứu nguy, giải tai ách, bệnh tật cho đương số.
- Tiêu cực: khi vào Tài Bạch, Điền Trạch hoặc Phúc Đức sẽ làm phân tán
  và hao hụt của cải, song không đến mức bần cùng.`,
  },

  {
    id: 'thien-dia-giai-quy-luat-khong-dong-cung',
    title: 'Quy luật KHÔNG đồng cung - chỉ nhị hợp Tý/Sửu Ngọ/Mùi',
    sao: ['Thiên Giải', 'Địa Giải'],
    doUuTien: 65,
    tomTat: `Cặp Thiên-Địa Giải có một quy luật rất đặc biệt: Địa Giải luôn
đứng ngay sau Thiên Giải, vì vậy hai sao không bao giờ đồng cung và cũng
không bao giờ tam hợp với nhau. Chúng chỉ có thể nhị hợp tại các cặp:

- Tý - Sửu (Thiên Giải Tý, Địa Giải Sửu hoặc ngược lại)
- Ngọ - Mùi (Thiên Giải Ngọ, Địa Giải Mùi hoặc ngược lại)

Hệ quả là khả năng cứu giải của bộ này chỉ được một nửa. Như mảnh ghép
âm-dương, mỗi sao chỉ là một nửa của bộ; không thể hội tụ cùng nhau nên
khả năng cứu nạn, giải ách không trọn vẹn và không mạnh mẽ như Giải Thần
(sao Năm trong Tam Giải).

Trong thực tế, khi đương số gặp hạn xấu mà có Thiên Giải hay Địa Giải:
có thể may mắn gặp được thầy thuốc hoặc người cứu giúp để thoát tai vạ,
nhưng vẫn phải tổn hao sức lực và tiền bạc. Dẫu vậy vẫn còn hơn không có
sự cứu giúp nào.`,
  },

  {
    id: 'thien-dia-giai-phan-biet',
    title: 'Phân biệt Thiên Giải (trời) vs Địa Giải (đất)',
    sao: ['Thiên Giải', 'Địa Giải'],
    doUuTien: 50,
    tomTat: `Tuy cùng là sao cứu giải nhỏ, **Thiên Giải** và **Địa Giải** mang
hai sắc thái khác nhau khi luận về đương số.

Thiên Giải thuộc Hỏa, đại diện cho sự trợ giúp từ trời. Đương số có
tướng mạo cao ráo, làn da trắng hồng, nét thanh tú nhẹ nhàng. Sự trợ
giúp đến từ đấng linh thiêng trên cao và phong cách giải nguy thường
nhẹ nhàng, nhiều khi qua những may mắn bất ngờ.

Địa Giải thuộc Thổ, đại diện cho sự trợ giúp từ đất. Đương số dáng
người thấp, hơi mập, nét mặt hiền lành dễ gần. Trợ giúp đến từ thần
linh, thổ công, thổ địa — môi trường gần gũi xung quanh. Sao này hợp
với phương pháp chữa trị tự nhiên, năng lượng từ môi trường lành mạnh;
tinh thần đương số cũng dễ giao thoa với đất, cảm nhận năng lượng tích
cực hoặc tiêu cực rõ hơn người thường.

Khi hai sao nhị hợp tại Tý/Sửu hoặc Ngọ/Mùi, cả hai mặt được kết hợp
tốt nhất có thể trong khuôn khổ không đồng cung.`,
  },

  {
    id: 'thien-dia-giai-tam-giai',
    title: 'Bộ Tam Giải - Thiên Giải + Địa Giải + Giải Thần',
    sao: ['Thiên Giải', 'Địa Giải'],
    ketHop: ['Giải Thần'],
    doUuTien: 55,
    tomTat: `Trong tử vi có ba sao mang tên "Giải" tạo thành bộ **Tam Giải**:

- Thiên Giải — Hỏa, an theo tháng sinh, đại diện sự trợ giúp từ trời.
- Địa Giải — Thổ, an theo tháng sinh, đại diện sự trợ giúp từ đất.
- Giải Thần — an theo năm sinh, luôn đồng cung Phượng Các (engine
  hardcode), là sự trợ giúp mạnh nhất.

Giải Thần với tư cách là sao Năm có khả năng giải hoàn chỉnh và mạnh
mẽ. Thiên Giải, Địa Giải là sao Tháng nên chỉ cứu giải nhỏ và không
trọn vẹn do quy luật không đồng cung.

Khi đương số có đủ Tam Giải hội tụ, khả năng giải họa đạt mức mạnh
mẽ nhất, đặc biệt khi đi kèm thêm Tử Vi tinh, Quang Quý, Quan Phúc và
Hóa Khoa.`,
  },

  {
    id: 'thien-dia-giai-tai-tat-khong-don-thu',
    title: 'Thiên-Địa Giải tại Tật cần sao phúc thiện hội chiếu',
    sao: ['Thiên Giải', 'Địa Giải'],
    cung: ['Tật Ách'],
    doUuTien: 70,
    tomTat: `Khi Thiên Giải hoặc Địa Giải đơn thủ tại Tật Ách, khả năng cứu
giải dành cho đương số chỉ ở mức giảm nhẹ chứ không trọn vẹn.

Để phát huy mạnh, cần các sao phúc thiện cùng hội chiếu:

- Tử Vi tinh đắc địa.
- Quang Quý — Ân Quang đi cùng Thiên Quý.
- Quan Phúc — Thiên Quan đi cùng Thiên Phúc.
- Giải Thần (sao Năm), giúp hoàn thiện bộ Tam Giải.
- Hóa Khoa — được xem là Đệ Nhất Giải Thần.

Khi có đủ các sao phúc thiện hỗ trợ, bệnh tật của đương số được giải
trừ triệt để; lúc đau ốm dễ gặp thầy hay thuốc giỏi kịp thời, đúng
nghĩa "gặp dữ hóa lành". Ngược lại, nếu thiếu sao phúc thiện đi cùng,
Thiên-Địa Giải đơn thủ chỉ làm giảm nhẹ bệnh chứ không hết hoàn toàn.`,
  },

  {
    id: 'thien-dia-giai-tai-dien-khong-tho',
    title: 'Thiên-Địa Giải tại Điền - KHÔNG nên lập bàn thờ thần linh',
    sao: ['Thiên Giải', 'Địa Giải'],
    cung: ['Điền Trạch'],
    doUuTien: 65,
    tomTat: `Thiên Giải hoặc Địa Giải tại Điền Trạch không được ưa, chúng
làm hao tán và giảm bớt của cải, nhà đất của đương số. Tuy vậy mức độ
phân tán chỉ ở mức nhẹ, không tới mức gây khó khăn cản trở cuộc sống
hay kéo theo nợ nần chất chồng.

Một lưu ý quan trọng: chủ mệnh không nên lập bàn thờ thần linh, thổ
địa tại nơi ở hoặc cửa hàng. Lý do là Thiên-Địa Giải đã sẵn năng
lượng "phân tán"; nếu lập thêm bàn thờ thần linh thổ địa sẽ làm hao
tán thêm của cải.

Mặt tích cực của cách cục này là dù việc tích lũy bị ảnh hưởng, đương
số ít vướng cảnh nợ nần chồng chất, không bị gánh nặng nhà cửa chỗ ở.
Đôi khi tính tán này lại giúp lọc bớt năng lượng xấu trong nơi ở —
đúng lẽ "có tán mới có tụ".`,
  },

  {
    id: 'thien-dia-giai-cua-di-thay-nguoi',
    title: 'Thiên-Địa Giải - Của đi thay người',
    sao: ['Thiên Giải', 'Địa Giải'],
    doUuTien: 55,
    tomTat: `Một đặc tính quan trọng của Thiên-Địa Giải là "của đi thay
người", thể hiện rõ nhất khi vào hạn hoặc đóng tại cung Tài Bạch /
Phúc Đức.

Cơ chế hoạt động: khi gặp tai họa hay bệnh tật, đương số có thể mất
tiền để giải trừ. Đặc tính phân tán của Giải tinh trở thành phương
tiện hóa giải — mất tiền nhưng tránh được họa, đó chính là "của đi
thay người".

Trong thực tế, mọi thứ có thể tiêu tốn tiền bạc để hóa giải đều là
cách đơn giản và thuận tiện nhất; còn có những thứ có tiền cũng không
mua được, không giải quyết được. Vì vậy khi Thiên-Địa Giải vào hạn,
đương số không nên tiếc tiền để giải quyết rắc rối.

Lời khuyên: chủ mệnh có Thiên-Địa Giải ở Tài Bạch nên chủ động chi
tiền làm phúc, từ thiện, cứu người — vừa phù hợp đặc tính sao, vừa
gieo phước cho mai sau.`,
  },

  {
    id: 'thien-dia-giai-vao-han',
    title: 'Thiên-Địa Giải vào hạn - Hai mặt cần lưu ý',
    sao: ['Thiên Giải', 'Địa Giải'],
    doUuTien: 50,
    tomTat: `Thiên-Địa Giải vào hạn có hai mặt rất rõ rệt với đương số.

Mặt tích cực là hóa giải tai ương: tai ách, bệnh tật được giảm bớt;
đang gặp bệnh thì có cơ hội chữa khỏi; gặp khó khăn sẽ có người tương
trợ. Đúng lẽ "họa lớn hóa nhỏ, họa nhỏ hóa không".

Mặt cảnh báo là hao tổn tiền bạc đi kèm với may mắn — của đi thay
người. Điều này càng đúng khi cung hạn rơi vào Tài Bạch hoặc Phúc
Đức.

Yếu tố môi trường rất quan trọng. Nếu đương số sống ở nơi tích cực,
có người giúp đỡ, có thuốc tốt thì bệnh tình dễ hóa giải; ngược lại
khi xung quanh tiêu cực, thiếu lực hỗ trợ thì Thiên-Địa Giải cũng
không thể cứu giúp. Vì vậy chủ mệnh cần chủ động nắm bắt thời cơ, tận
dụng nguồn lực bên ngoài, không nên "há miệng chờ sung".`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // THIÊN GIẢI TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-giai-tai-menh',
    title: 'Thiên Giải tại Mệnh',
    sao: ['Thiên Giải'],
    cung: ['Mệnh'],
    doUuTien: 76,
    tomTat: `**Thiên Giải** thủ Mệnh đem lại cho đương số phẩm chất tốt đẹp
của một phúc tinh.

Tướng mạo thanh tú, dáng vẻ nhẹ nhàng, người cao ráo, làn da trắng
hồng. Tính tình đức độ, khoan hòa, thuần hậu, giàu lòng nhân ái từ
bi và luôn sẵn sàng giúp đỡ người khác khi gặp khó khăn — vai trò
tương tự Thiên Quan Quý Nhân và Thiên Phúc Quý Nhân.

Về phúc thọ, sao này giúp giải trừ bệnh tật, tai họa, tránh được
hoặc giảm nhẹ rủi ro, đem lại tuổi thọ và những may mắn bất ngờ
trong đời sống.

Hạn chế cần lưu ý: năng lực cứu giải không trọn vẹn do quy luật
không đồng cung Địa Giải; khi gặp hoàn cảnh quá xấu, đương số vẫn
phải chịu một phần ảnh hưởng tiêu cực.`,
  },

  {
    id: 'thien-giai-tai-phu-mau',
    title: 'Thiên Giải tại Phụ Mẫu',
    sao: ['Thiên Giải'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Thiên Giải** tại Phụ Mẫu là điềm lành cho cha mẹ — tăng tuổi
thọ và gặp nhiều may mắn.

Cha mẹ của đương số có dung mạo đẹp, tính tình ôn hòa thanh cao, có
điều kiện kinh tế và điền sản, thường hay làm việc thiện. Chủ mệnh
nhờ vậy được hưởng phúc lộc cha mẹ để lại cả về tài chính lẫn âm đức.`,
  },

  {
    id: 'thien-giai-tai-phuc-duc',
    title: 'Thiên Giải tại Phúc Đức',
    sao: ['Thiên Giải'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `**Thiên Giải** tại cung Phúc Đức cho thấy dòng họ của đương số
có nhiều người hiền lành, nhân hậu, hay giúp đỡ lẫn nhau. Mồ mả tổ
tiên yên ổn; nhiều người đã siêu thoát, không còn vấn vương, tái
sinh sang cuộc sống khác.

Một điểm cần lưu ý là đặc tính ly tán của Giải tinh thể hiện trên
dòng họ: con cháu thường ly tán, mỗi người một nơi, mỗi người một
xứ, ít có dịp ở gần nhau.`,
  },

  {
    id: 'thien-giai-tai-dien-trach',
    title: 'Thiên Giải tại Điền Trạch',
    sao: ['Thiên Giải'],
    cung: ['Điền Trạch'],
    doUuTien: 70,
    tomTat: `**Thiên Giải** tại Điền Trạch không đắc địa. Đặc tính phân tán
dễ làm hao hụt, giảm bớt của cải, nhà đất của đương số, song mức
độ không nỗi gây khó khăn lớn.

Điểm sáng là việc tích lũy tài sản tuy bị ảnh hưởng nhưng chủ mệnh
ít khi vướng cảnh nợ nần chất chồng, không có gánh nặng về nhà cửa
hay chỗ ở.

Lưu ý: đương số không nên lập bàn thờ thần linh, thổ địa tại nơi ở
hoặc cửa hàng vì dễ làm hao tán thêm.`,
  },

  {
    id: 'thien-giai-tai-quan-loc',
    title: 'Thiên Giải tại Quan Lộc',
    sao: ['Thiên Giải'],
    cung: ['Quan Lộc'],
    doUuTien: 75,
    tomTat: `**Thiên Giải** tại Quan Lộc đem lại may mắn và thuận lợi trên
con đường công danh của đương số.

Chủ mệnh thường được người khác giúp đỡ trong công việc, dễ dàng
vượt qua khó khăn; chuyện thi cử và cầu chức vụ hanh thông, cơ hội
được khen thưởng và bổ nhiệm gia tăng.

Trong công việc, đương số rất công tâm, có tinh thần xây dựng nên
được nhiều người nể trọng, quý mến. Tính từ thiện của sao khiến
đương số hợp với những nghề cứu người, giúp người như thầy thuốc,
bác sĩ, giáo viên.`,
  },

  {
    id: 'thien-giai-tai-no-boc',
    title: 'Thiên Giải tại Nô Bộc',
    sao: ['Thiên Giải'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Thiên Giải** tại Nô Bộc cho thấy bạn bè của đương số đa phần
tốt tính, hiền lương và thật thà. Chủ mệnh hay được bạn bè giúp đỡ,
đem đến may mắn và tiền bạc; bạn bè đắc lực, sẵn sàng tương trợ
trong lúc hoạn nạn, khó khăn.`,
  },

  {
    id: 'thien-giai-tai-thien-di',
    title: 'Thiên Giải tại Thiên Di - HỢP CÁCH',
    sao: ['Thiên Giải'],
    cung: ['Thiên Di'],
    doUuTien: 78,
    tomTat: `**Thiên Giải** thủ Thiên Di là một vị trí rất tốt cho đương số.
Khi ra ngoài hay đi xa, chủ mệnh thường gặp may mắn, được quý nhân
phù trợ và giúp đỡ vượt qua hiểm nguy, tai họa, thoát nạn dễ dàng.`,
  },

  {
    id: 'thien-giai-tai-tat-ach',
    title: 'Thiên Giải tại Tật Ách - HỢP CÁCH NHẤT',
    sao: ['Thiên Giải'],
    cung: ['Tật Ách'],
    doUuTien: 80,
    tomTat: `**Thiên Giải** thủ Tật Ách là vị trí hợp cách nhất, nơi sao
phát huy tác dụng mạnh mẽ nhất với đương số.

Sao giúp giải trừ bệnh tật và tai họa; khi đau ốm chủ mệnh dễ gặp
được thầy hay thuốc giỏi cứu chữa kịp thời.

Lưu ý quan trọng: nếu chỉ có một mình Thiên Giải đơn thủ mà không
có sao phúc thiện khác hội chiếu, khả năng cứu giải chỉ ở mức giảm
nhẹ bệnh tật. Cần thêm Tử Vi tinh, Quang Quý, Quan Phúc, Giải Thần
hoặc Hóa Khoa hội chiếu thì sao mới phát huy hết khả năng.`,
  },

  {
    id: 'thien-giai-tai-tai-bach',
    title: 'Thiên Giải tại Tài Bạch',
    sao: ['Thiên Giải'],
    cung: ['Tài Bạch'],
    doUuTien: 70,
    tomTat: `**Thiên Giải** tại Tài Bạch không được ưa, đặc tính phân tán
của sao làm hao tán tiền bạc của đương số, dù sự hao hụt không đến
mức lâm vào cảnh nghèo khổ. Tiền vào nhiều nhưng cũng đi nhiều.

Bù lại, chủ mệnh rất công tâm và minh bạch trong tiền bạc — đúng
lẽ "tiền bạc phân minh", chỉ kiếm những đồng tiền trong sạch thanh
cao. Đương số hay chi tiền cho hoạt động từ thiện, giúp đỡ người
khác, dùng tiền để giải trừ tai họa, bệnh tật — biết tận dụng tiền
bạc hóa giải vận xấu theo lẽ "của đi thay người".

Điểm sáng: đương số ít khi phải trăn trở về vấn đề tài chính, vì
chính tính phân tán lại trở thành yếu tố cứu giải khi gặp khó
khăn.`,
  },

  {
    id: 'thien-giai-tai-tu-tuc',
    title: 'Thiên Giải tại Tử Tức',
    sao: ['Thiên Giải'],
    cung: ['Tử Tức'],
    doUuTien: 76,
    tomTat: `**Thiên Giải** tại Tử Tức báo hiệu đường con cái thuận lợi cho
đương số. Chủ mệnh dễ sinh con; con cái sinh ra xinh đẹp, khỏe mạnh,
dễ nuôi, đặc biệt dễ sinh quý tử.

Con cái thường thông minh, hiền lành, hiếu thảo, hay gặp may mắn
trong cuộc sống và nghe lời mẹ cha.`,
  },

  {
    id: 'thien-giai-tai-phu-the',
    title: 'Thiên Giải tại Phu Thê',
    sao: ['Thiên Giải'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `**Thiên Giải** tại Phu Thê là dấu hiệu của một hôn nhân tốt
đẹp. Vợ chồng đương số hòa hợp, "xứng đôi vừa lứa"; quá trình cưới
xin diễn ra dễ dàng, suôn sẻ.

Người hôn phối thanh cao, tốt tính, thích làm việc thiện và được
hưởng nhiều may mắn.

Một cảnh báo nhỏ là tính khí vợ chồng có thể thất thường — "sớm
nắng chiều mưa, giữa trưa phập phù", đôi bên cần biết nhường nhịn
và chia sẻ.`,
  },

  {
    id: 'thien-giai-tai-huynh-de',
    title: 'Thiên Giải tại Huynh Đệ',
    sao: ['Thiên Giải'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Thiên Giải** tại Huynh Đệ cho thấy anh chị em của đương số
hiền lành, tốt bụng, sống hòa thuận và hay giúp đỡ lẫn nhau. Anh
chị em thường gặp may mắn; bệnh tật và tai họa trong cuộc sống
được giảm trừ.`,
  },
];
