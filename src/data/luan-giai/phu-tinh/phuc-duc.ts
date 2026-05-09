import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO PHÚC ĐỨC - Thổ, Phúc Tinh, vòng Thái Tuế (vị trí 10).
 * KHÁC với CUNG Phúc Đức - đây là SAO! Tag dùng `sao: ['Phúc Đức']` (không phải `cung`).
 *
 * LUÔN đồng cung với THIÊN ĐỨC (theo quy luật an sao - hardcode trong engine).
 * Là SAO GIẢI mạnh, đặc tính tương tự Long Đức.
 */
export const luanGiai_PhucDuc: DoanLuanGiai[] = [
  {
    id: 'phuc-duc-sao-tinh-chat-chung',
    title: 'Sao Phúc Đức - Đặc tính chung',
    sao: ['Phúc Đức'],
    doUuTien: 32,
    tomTat: `**Phúc Đức** ở đây là phụ tinh thuộc nhóm Phúc Tinh trong vòng Thái
Tuế, vị trí thứ 10 — cần phân biệt rõ với cung Phúc Đức trong 12 cung
địa bàn. Là sao, nên Phúc Đức có thể đóng tại bất kỳ cung nào trên lá số
của đương số.

Sao Phúc Đức ngũ hành Thổ, hóa khí là Phúc Tinh. Theo quy luật an sao,
Phúc Đức luôn đồng cung với Thiên Đức — bản thân Thiên Đức cũng là một
phúc tinh mạnh, hai sao tăng cường lẫn nhau và cách bộ Phúc Đức + Thiên
Đức đồng cung được xem là cách đẹp trong tử vi.

Đặc tính chung: khoan hòa, nhân hậu, đoan chính, phúc thiện, có khả năng
giải trừ tai nạn và hung nguy cho chủ mệnh.`,
  },

  {
    id: 'phuc-duc-sao-giai',
    title: 'Sao Phúc Đức là Sao Giải mạnh',
    sao: ['Phúc Đức'],
    doUuTien: 50,
    tomTat: `Sao Phúc Đức được xem là một sao giải mạnh với đặc tính tương
tự Long Đức. Khả năng tiêu biểu là giải trừ bệnh tật nhỏ, tai họa nhỏ
và mang lại may mắn, hỷ sự cho đương số.

Sao Phúc Đức cùng nhóm giải tinh với:

- Thiên Giải, Địa Giải, Giải Thần — ba sao Giải chuyên biệt.
- Thiên Quan, Thiên Phúc — cứu giải.
- Thiếu Âm, Thiếu Dương — cùng vòng Thái Tuế.
- Quang Quý — Ân Quang đi cùng Thiên Quý.
- Tả Phù, Hữu Bật — Lục Cát.
- Tràng Sinh, Đế Vượng — vòng Tràng Sinh.
- Long Đức — cùng vòng Thái Tuế.

Càng nhiều giải tinh hội chiếu, hiệu lực cứu giải càng tăng. Cách cục
đẹp nhất là lá số có cả Long Đức + Phúc Đức đồng cung hoặc hợp chiếu
cùng **Tứ Đức**: khả năng giải họa đạt mức mạnh nhất.`,
  },

  {
    id: 'phuc-duc-sao-tai-menh',
    title: 'Sao Phúc Đức tại Mệnh - ôn hòa thích thiện',
    sao: ['Phúc Đức'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `**Phúc Đức** thủ Mệnh đem lại cho đương số tính cách ôn hòa,
đôn hậu, nhân từ và đoan chính. Chủ mệnh có lòng bác ái, thích làm
việc thiện và giúp đỡ người khác, sống hiền lành khiêm cung nên dễ
được mọi người quý trọng và tin cậy.

Triết lý sống của đương số là "trọng đức hơn tài" — coi trọng nghĩa lý
và danh dự hơn lợi ích vật chất, từ bi, từ thiện, hay giúp đỡ và làm
phúc.

Là một giải tinh mạnh, khi đắc địa Phúc Đức giúp giảm nhẹ hoặc hóa
giải tai họa nhỏ, bệnh tật và thị phi cho chủ mệnh.`,
  },

  {
    id: 'phuc-duc-sao-tai-menh-giai-tinh',
    title: 'Sao Phúc Đức Mệnh + Giải tinh',
    sao: ['Phúc Đức'],
    cung: ['Mệnh'],
    ketHop: ['Thiên Đức', 'Thiên Quan', 'Thiên Phúc', 'Giải Thần', 'Thiên Giải', 'Địa Giải', 'Ân Quang', 'Thiên Quý', 'Tả Phù', 'Hữu Bật', 'Thiếu Dương', 'Thiếu Âm'],
    doUuTien: 75,
    tomTat: `Khi Phúc Đức tại Mệnh được Thiên Đức cùng các giải tinh khác —
Thiên Quan, Thiên Phúc, Giải Thần, Thiên Giải, Địa Giải, Quang Quý, Tả
Phù, Hữu Bật, Thiếu Dương, Thiếu Âm — hội chiếu, hiệu lực cứu giải tăng
gấp bội.

Sự phối hợp nhiều giải tinh giúp đương số gặp may mắn bất ngờ, tai qua
nạn khỏi, công việc thuận buồm xuôi gió và luôn có quý nhân giúp đỡ
đúng lúc.`,
  },

  {
    id: 'phuc-duc-sao-tai-phu-mau',
    title: 'Sao Phúc Đức tại Phụ Mẫu',
    sao: ['Phúc Đức'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Phúc Đức** tại Phụ Mẫu cho thấy cha mẹ của đương số nhân
hậu, từ thiện, có nghề khéo, sống chân chất và biết lấy đức làm gốc.
Cha mẹ hành xử ôn hòa, giữ chữ tín, trọng nghĩa tình, có xu hướng
giúp người, làm việc thiện, tham gia các hoạt động phúc lợi hoặc
tôn giáo, luôn khuyên con cháu hướng thiện, tích đức tu tâm.

Đặc điểm gia đình thể hiện rõ nề nếp gia phong: con cái được nuôi
dạy trong môi trường đạo đức, biết kính trên nhường dưới. Đương số
được thừa hưởng tính cách ôn hòa, nhân từ và nhờ phúc ấm cha mẹ mà
dễ được giúp đỡ lúc khó khăn, tránh được nhiều tai ương.`,
  },

  {
    id: 'phuc-duc-sao-tai-phu-mau-giai-tinh',
    title: 'Sao Phúc Đức Phụ Mẫu + Giải tinh',
    sao: ['Phúc Đức'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Thiên Đức', 'Thiên Phúc', 'Ân Quang', 'Thiên Quý', 'Thiên Quan'],
    doUuTien: 73,
    tomTat: `Phúc Đức tại Phụ Mẫu khi được thêm Thiên Đức, Thiên Phúc, Quang
Quý hoặc Thiên Quan hội chiếu thì phúc khí của cha mẹ càng mạnh, gia
đạo hưng vượng và con cái hiển đạt.`,
  },

  {
    id: 'phuc-duc-sao-tai-phu-mau-sat',
    title: 'Sao Phúc Đức Phụ Mẫu + Không Kiếp Hình Kỵ',
    sao: ['Phúc Đức'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Thiên Hình', 'Hóa Kỵ'],
    doUuTien: 73,
    tomTat: `Phúc Đức tại Phụ Mẫu khi gặp Địa Không, Địa Kiếp, Thiên Hình
hoặc Hóa Kỵ thì phúc phần suy giảm, cha mẹ phải trải qua bệnh tật và
trắc trở. Tuy vậy, nhờ tính chất cứu giải sẵn có của Phúc Đức, tai
họa thường được hóa giải, khó thành điều dữ.`,
  },

  {
    id: 'phuc-duc-sao-tai-phuc-duc-cung',
    title: 'Sao Phúc Đức tại CUNG Phúc Đức - phúc dày',
    sao: ['Phúc Đức'],
    cung: ['Phúc Đức'],
    doUuTien: 85,
    tomTat: `Khi sao **Phúc Đức** đóng tại chính cung Phúc Đức, đây là cách
đẹp với phúc khí cực mạnh dành cho đương số.

Họ hàng trong dòng tộc phần nhiều là người hiền lành, nhân hậu, cư xử
đúng mực. Mồ mả tổ tiên thuận vị, đất đai long mạch yên ổn, dòng họ
được âm phúc che chở. Con cháu hưởng được may mắn, bình an, nhiều
người thành đạt.`,
  },

  {
    id: 'phuc-duc-sao-tai-phuc-duc-thien-nguyet-duc',
    title: 'Sao Phúc Đức Phúc Đức + Thiên Đức + Nguyệt Đức',
    sao: ['Phúc Đức'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Đức', 'Nguyệt Đức'],
    doUuTien: 80,
    tomTat: `Sao Phúc Đức cùng Thiên Đức và Nguyệt Đức đồng cung tại Phúc
Đức là cách đẹp nhất. Họ hàng đương số phúc hậu, mồ mả thuận vị; dòng
họ có nhiều người trọng nghĩa, hay giúp người. Khi gặp chuyện nguy nan
thường có quý nhân tương trợ hoặc sự việc tự được hóa giải.`,
  },

  {
    id: 'phuc-duc-sao-tai-phuc-duc-quang-quy',
    title: 'Sao Phúc Đức Phúc Đức + Quang Quý / Thiên Quan / Thiên Phúc',
    sao: ['Phúc Đức'],
    cung: ['Phúc Đức'],
    ketHop: ['Ân Quang', 'Thiên Quý', 'Thiên Quan', 'Thiên Phúc'],
    doUuTien: 78,
    tomTat: `Sao Phúc Đức tại Phúc Đức khi đi cùng Quang Quý, Thiên Quan
hoặc Thiên Phúc thì phúc đức của đương số càng lớn. Phước phần tổ tiên
sâu dày, con cháu hưởng phúc thọ và dễ tạo dựng sự nghiệp.`,
  },

  {
    id: 'phuc-duc-sao-tai-dien-trach',
    title: 'Sao Phúc Đức tại Điền Trạch',
    sao: ['Phúc Đức'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Phúc Đức** tại Điền Trạch cho thấy đương số đi đâu cũng có
người giúp đỡ về nhà cửa, nơi ăn chốn ở. Quý nhân hoặc bạn bè hỗ trợ
chủ mệnh trong việc tìm nhà, mua đất, xây dựng chỗ ở ổn định.

Tâm tính người ở hiền hòa, biết giữ hòa khí; quan hệ với hàng xóm
láng giềng rất tốt, ít tranh chấp hay điều tiếng. Đương số thường
chủ động nhường nhịn, hòa giải, tạo không khí thuận hòa, biết trân
trọng nơi mình ở, vun vén và giữ gìn nhà cửa gọn gàng yên ổn.

Triết lý sống của chủ mệnh không đặt nặng vật chất hay hình thức,
ăn ở giản dị, dễ thích nghi với hoàn cảnh — dù giàu hay nghèo cũng
biết an phận và hài lòng với hiện tại.`,
  },

  {
    id: 'phuc-duc-sao-tai-quan-loc',
    title: 'Sao Phúc Đức tại Quan Lộc',
    sao: ['Phúc Đức'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `**Phúc Đức** tại Quan Lộc giúp đương số hay gặp may trên đường
công danh: chủ mệnh có lương tâm nghề nghiệp, có quý nhân giúp đỡ,
được cấp trên tin tưởng và đồng nghiệp yêu mến.

Trong công việc, chủ mệnh làm việc có trách nhiệm và đạo đức, biết đặt
lợi ích chung lên trên lợi ích cá nhân; không chỉ mưu cầu thành công
riêng mà muốn mang lại giá trị tích cực cho tập thể và xã hội. Dù làm
nghề gì cũng tận tụy, giữ chữ tín, không làm điều gian trá hay bất
chính.

Kết quả là sự nghiệp bền vững, danh tiếng tốt và được người khác kính
trọng.`,
  },

  {
    id: 'phuc-duc-sao-tai-no-boc',
    title: 'Sao Phúc Đức tại Nô Bộc',
    sao: ['Phúc Đức'],
    cung: ['Nô Bộc'],
    doUuTien: 70,
    tomTat: `**Phúc Đức** tại Nô Bộc cho thấy bè bạn, người làm, người giúp
việc của đương số nhân hậu. Chủ mệnh được mọi người xung quanh yêu
mến, tôn trọng và sẵn sàng giúp đỡ khi cần. Bạn bè, đồng nghiệp phần
nhiều là người hiền lành, thật thà, có lòng trung thành và biết cư xử
đúng mực.

Các mối quan hệ xã hội thường hòa thuận, ít xảy ra tranh chấp hay hiềm
khích. Đương số biết giữ chữ tín, sống chân thành, lấy đức cảm hóa
người khác.`,
  },

  {
    id: 'phuc-duc-sao-tai-thien-di',
    title: 'Sao Phúc Đức tại Thiên Di',
    sao: ['Phúc Đức'],
    cung: ['Thiên Di'],
    doUuTien: 72,
    tomTat: `**Phúc Đức** tại Thiên Di đem lại cho đương số phong thái
khiêm tốn khi ra ngoài, hay gặp quý nhân và nhiều thuận lợi trong
giao tiếp. Cách cư xử nhẹ nhàng, đúng mực giúp chủ mệnh dễ tạo thiện
cảm với người khác.

Bản thân đương số thích làm việc thiện, nên khi gặp khó khăn cũng
được người đời đáp lại bằng sự tử tế và hỗ trợ chân thành.`,
  },

  {
    id: 'phuc-duc-sao-tai-tat-ach',
    title: 'Sao Phúc Đức tại Tật Ách',
    sao: ['Phúc Đức'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `**Phúc Đức** tại Tật Ách phát huy mạnh khả năng cứu giải:
giúp đương số giải trừ tai nạn, bệnh tật nhỏ và giảm nhẹ những rủi
ro trong đời sống.

Nhờ phước phần bảo hộ, chủ mệnh thường gặp may mắn trong việc điều
trị bệnh; khi đau yếu dễ gặp được thầy thuốc giỏi, thuốc tốt và có
cơ duyên được người khác giúp đỡ đúng lúc để thoát khỏi hiểm nguy.

Cơ chế hóa giải dựa trên tâm thiện và công đức tích lũy của chủ
mệnh: tai họa được hóa giải, "nặng hóa nhẹ, nhẹ hóa không".

Lời khuyên: đương số nên hành thiện, làm phúc, giúp người — càng
gieo nhân lành thì phúc khí càng dày, sức khỏe càng ổn định và ít
gặp tai nạn lớn.`,
  },

  {
    id: 'phuc-duc-sao-tai-tai-bach',
    title: 'Sao Phúc Đức tại Tài Bạch',
    sao: ['Phúc Đức'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Phúc Đức** tại Tài Bạch đem lại cho đương số cách kiếm tiền
chính đáng và lòng từ thiện. Chủ mệnh kiếm tiền bằng con đường chân
chính, lương thiện, có đạo đức trong cách sử dụng của cải, coi trọng
nghĩa hơn tài và không vì tiền mà làm điều gian trá hay tranh đoạt
với người khác.

Trong các vấn đề tài chính, đương số ôn hòa, nhường nhịn, đôi khi sẵn
sàng chịu thiệt để tránh bất hòa. Chủ mệnh thường gặp may mắn về tiền
bạc; dù không quá tham vọng, tiền tài vẫn đến tự nhiên, đủ dùng và ổn
định, ít khi túng thiếu.

Về cách dùng tiền, đương số có xu hướng dành cho việc thiện — giúp đỡ
người khó khăn, làm từ thiện, công đức, tu tạo phúc phần cho bản thân
và gia đình. Nhờ biết dùng tiền đúng cách và có tâm lành, tài lộc tuy
không phất mạnh nhưng bền vững và an ổn; của cải ra đi lại quay về,
ít bị tổn hao lớn.`,
  },

  {
    id: 'phuc-duc-sao-tai-tu-tuc',
    title: 'Sao Phúc Đức tại Tử Tức',
    sao: ['Phúc Đức'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Phúc Đức** tại Tử Tức cho thấy con cái của đương số hòa
thuận, hiếu thảo, hiền lành, biết kính trọng cha mẹ và hòa thuận với
anh chị em.

Theo lẽ nhân quả, con cái là kết quả của phước lành tích tụ từ cha
mẹ — vì vậy cha mẹ càng hành thiện, làm phúc thì con cái càng hiển
đạt, có đạo đức và gặp nhiều may mắn.`,
  },

  {
    id: 'phuc-duc-sao-tai-tu-tuc-dong-nguyet',
    title: 'Sao Phúc Đức Tử Tức + Thiên Đồng + Nguyệt Đức',
    sao: ['Phúc Đức'],
    cung: ['Tử Tức'],
    ketHop: ['Thiên Đồng', 'Nguyệt Đức'],
    doUuTien: 73,
    tomTat: `Phúc Đức tại Tử Tức khi đi cùng Thiên Đồng và Nguyệt Đức báo
hiệu đương số có con sớm; việc sinh nở thuận lợi, con cái dễ nuôi và
tính tình ngoan hiền. Đứa trẻ sinh ra thường có phúc phần, được quý
nhân phù trợ và dễ thành công khi trưởng thành.`,
  },

  {
    id: 'phuc-duc-sao-tai-phu-the',
    title: 'Sao Phúc Đức tại Phu Thê',
    sao: ['Phúc Đức'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `**Phúc Đức** tại Phu Thê là dấu hiệu hôn nhân hài hòa, êm ấm
và nhiều phước lành cho đương số. Người hôn phối có nhan sắc, đứng
đắn, tính tình nhẹ nhàng và biết đối nhân xử thế.

Trong đời sống vợ chồng, chủ mệnh biết nhường nhịn, mềm mỏng, sẵn
sàng lùi một bước để giữ hòa khí và tránh xung đột. Gia đạo thường
yên ổn, ít sóng gió; đôi bên tôn trọng và cảm thông cho nhau.`,
  },

  {
    id: 'phuc-duc-sao-tai-phu-the-thien-nguyet',
    title: 'Sao Phúc Đức Phu Thê + Thiên Đức + Nguyệt Đức',
    sao: ['Phúc Đức'],
    cung: ['Phu Thê'],
    ketHop: ['Thiên Đức', 'Nguyệt Đức'],
    doUuTien: 73,
    tomTat: `Phúc Đức tại Phu Thê khi đi cùng Thiên Đức và Nguyệt Đức cho
tình cảm vợ chồng càng bền chặt: đôi bên tương kính như tân, biết
cùng nhau vun vén, vượt qua khó khăn.`,
  },

  {
    id: 'phuc-duc-sao-tai-phu-the-dao-hoa',
    title: 'Sao Phúc Đức Phu Thê + Đào Hoa',
    sao: ['Phúc Đức'],
    cung: ['Phu Thê'],
    ketHop: ['Đào Hoa'],
    doUuTien: 73,
    tomTat: `Phúc Đức tại Phu Thê đi cùng Đào Hoa cho thấy vợ chồng đương
số hòa hợp về tâm tính, xứng đôi về dung mạo, yêu thương gắn bó và
có duyên nợ sâu dày.`,
  },

  {
    id: 'phuc-duc-sao-tai-huynh-de',
    title: 'Sao Phúc Đức tại Huynh Đệ',
    sao: ['Phúc Đức'],
    cung: ['Huynh Đệ'],
    doUuTien: 70,
    tomTat: `**Phúc Đức** tại Huynh Đệ cho thấy anh chị em của đương số
hòa thuận, biết yêu thương, nhường nhịn và giúp đỡ nhau. Mối quan hệ
giữa các thành viên ấm áp, ít xảy ra tranh cãi hay bất hòa.

Nếu có xung khắc nhỏ cũng dễ được hóa giải nhờ tấm lòng bao dung và
nhân hậu của mỗi người. Anh chị em đều có tâm tính hiền lành, trọng
tình nghĩa; khi một người gặp khó khăn, những người khác sẵn lòng
hỗ trợ, đỡ đần.

Phúc Đức ở cung Huynh Đệ còn biểu thị phúc phần tổ tiên để lại cho
anh em trong họ tộc, giúp gia đình có sự gắn bó và yêu thương bền
chặt.`,
  },

  {
    id: 'phuc-duc-sao-vao-han',
    title: 'Sao Phúc Đức vào hạn - cát lành',
    sao: ['Phúc Đức'],
    doUuTien: 55,
    tomTat: `Sao Phúc Đức nhập hạn thường mang đến cho đương số may mắn,
cát lành, hóa giải tai ương và giúp chủ mệnh vượt qua khó khăn một
cách nhẹ nhàng.

Trong vận hạn này, đương số thường gặp được quý nhân giúp đỡ; công
việc, tình cảm và các mối quan hệ xã hội đều thuận lợi.

Với người đã có gia đình, hạn này thường mang lại hòa khí trong hôn
nhân: vợ chồng hiểu nhau hơn, dễ hóa giải hiểu lầm. Với người độc
thân, đây là thời điểm tốt để gặp gỡ, mở lòng và kết nối tình cảm.`,
  },

  {
    id: 'phuc-duc-sao-han-nguyet-dao-hong',
    title: 'Sao Phúc Đức hạn + Nguyệt Đức + Đào Hoa + Hồng Loan',
    sao: ['Phúc Đức'],
    ketHop: ['Nguyệt Đức', 'Đào Hoa', 'Hồng Loan'],
    doUuTien: 60,
    tomTat: `Sao Phúc Đức nhập hạn cùng Nguyệt Đức, Đào Hoa và Hồng Loan
là điềm lành về nhân duyên cho đương số: dễ gặp người khác phái tốt
bụng, hiền hậu, thậm chí được người làm mai mối để nên duyên vợ
chồng. Mối quan hệ tình cảm thuận lợi, có duyên trời định, dễ kết
thành đôi lứa chính thức.`,
  },

  {
    id: 'phuc-duc-sao-loi-khuyen',
    title: 'Lời khuyên cho người sao Phúc Đức',
    sao: ['Phúc Đức'],
    doUuTien: 35,
    tomTat: `Sao Phúc Đức là phúc tinh mang ý nghĩa cứu giải — biểu tượng
của phước báu, đạo nghĩa và lòng nhân hậu. Sao luôn mang khí chất ôn
hòa, hóa giải tai ương, giữ gìn hòa khí và tạo nên thuận duyên trong
đời sống của đương số.

Bí quyết phát huy Phúc Đức:

- Hành thiện, làm phúc.
- Nói lời lành — tu khẩu.
- Giữ tâm đức.
- Tôn trọng tổ tiên, thờ phụng chu đáo.
- Giúp đỡ người khó khăn không tính toán.

Khi tu dưỡng đúng cách, phúc khí của chủ mệnh càng sâu, họa tai càng
nhẹ và đường đời thêm phần suôn sẻ, hanh thông.`,
  },
];
