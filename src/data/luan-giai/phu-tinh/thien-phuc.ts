import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THIÊN PHÚC - Hỏa, Phúc Tinh + Thiện Tinh.
 * Tên gọi đầy đủ: "THIÊN PHÚC QUÝ NHÂN".
 *
 * An theo HÀNG CAN của tuổi.
 *
 * Đặc trưng riêng:
 * - Xu hướng TỪ THIỆN CAO, đi giúp đỡ
 * - Mong muốn đem lại HẠNH PHÚC đến cho mọi người
 * - Khác Thiên Quan (ôn hòa, ở ẩn)
 *
 * Phần CHUNG cặp Quan Phúc đã viết tại file thien-quan.ts với
 * sao: ['Thiên Quan', 'Thiên Phúc'].
 */
export const luanGiai_ThienPhuc: DoanLuanGiai[] = [
  {
    id: 'thien-phuc-tinh-chat-chung',
    title: 'Thiên Phúc - Đặc tính chung',
    sao: ['Thiên Phúc'],
    doUuTien: 32,
    tomTat: `**Thiên Phúc** là phụ tinh thuộc nhóm Phúc Tinh kiêm Thiện Tinh,
tên gọi đầy đủ là "Thiên Phúc Quý Nhân", ngũ hành Hỏa, an theo hàng Can của
tuổi.

Sao này mang lại may mắn, phúc thọ và lòng từ bi cho đương số. Điểm đặc
trưng riêng là xu hướng từ thiện rất cao: đương số thích đi giúp đỡ, hỗ trợ
người khác và mong muốn đem lại hạnh phúc đến cho mọi người.

Trong vai trò cứu khốn phò nguy, Thiên Phúc có khả năng chế khắc các ác sát
tinh, làm giảm tai ương do hung tinh gây ra. Sao này phù hợp với những lĩnh
vực mang tính nhân đạo cao như y tế, giáo dục, hội chữ thập đỏ, các tổ chức
thiện nguyện.

Khác với Thiên Quan thiên về an ẩn và hòa nhã, Thiên Phúc thiên về hành động
từ thiện, lan tỏa sự thiện lương ra cộng đồng.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // THIÊN PHÚC TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-phuc-tai-menh',
    title: 'Thiên Phúc tại Mệnh - HỢP CÁCH',
    sao: ['Thiên Phúc'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `Khi Thiên Phúc thủ Mệnh, đây là vị trí hợp cách: đương số mang
phúc khí lớn và bản tính nhân từ.

Về tướng hình, đương số có vẻ ngoài hiền hậu ôn hòa dễ nhìn, đôi mắt sáng,
đôi tai dày, dái tai dài; cử chỉ từ tốn nhẹ nhàng, không vội vàng hấp tấp.

Tính cách thiện tâm, nhân hậu và đức độ, đương số luôn sẵn sàng cứu giúp
người khác. Phần lớn chủ mệnh tin tưởng vào tâm linh, có duyên tu tập và
ngộ tính cao. Vì thích sự yên bình, không bon chen nên đương số ít có kẻ
thù hay người ghen ghét.

Về phúc thọ, sao này có khả năng cứu giải tai họa, làm giảm bớt hung nguy
và bệnh tật. Càng tu nhân tích đức, làm nhiều việc thiện, đương số càng tăng
phúc thọ và gặp nhiều may mắn, được người khác giúp đỡ.

So với Thiên Quan, Thiên Phúc thiên về hành động giúp người chứ không chỉ
ở ẩn an thân.`,
  },

  {
    id: 'thien-phuc-tai-phu-mau',
    title: 'Thiên Phúc tại Phụ Mẫu',
    sao: ['Thiên Phúc'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Khi Thiên Phúc tại Phụ Mẫu, cha mẹ của đương số là người lễ
nghĩa, hiền hậu, hay làm từ thiện và được mọi người quý mến, kính trọng.

Cả cha lẫn mẹ đều thích tìm hiểu tín ngưỡng, tâm linh và tin vào luật nhân
quả.

Nhờ vậy, đương số được sinh ra trong một gia đình có giáo dục, hưởng phúc
lộc do cha mẹ để lại — cả về vật chất lẫn âm đức.`,
  },

  {
    id: 'thien-phuc-tai-phuc-duc',
    title: 'Thiên Phúc tại Phúc Đức - HỢP CÁCH',
    sao: ['Thiên Phúc'],
    cung: ['Phúc Đức'],
    doUuTien: 80,
    tomTat: `Khi Thiên Phúc thủ Phúc Đức, đây là vị trí hợp cách: ông bà tổ
tiên và dòng họ của đương số có nhiều người hiền lành thiện lương.

Bản thân đương số được hưởng phúc ấm, may mắn, đồng thời mang trách nhiệm
"uống nước nhớ nguồn", tiếp tục vun bồi phúc đức cho con cháu đời sau.

Về mộ phần, mồ mả tổ tiên thường yên ổn, đặt ở nơi đẹp; có trường hợp được
chôn cất gần chùa hoặc gửi tro cốt lên chùa.`,
  },

  {
    id: 'thien-phuc-tai-dien-trach',
    title: 'Thiên Phúc tại Điền Trạch',
    sao: ['Thiên Phúc'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Khi Thiên Phúc tại Điền Trạch, trong nhà đương số thường thờ
Phật, tu tập tại gia, việc thờ cúng được lo liệu chỉn chu.

Nhà cửa sạch sẽ, gọn gàng, ngăn nắp và có quy củ; gia đình thuận hòa. Đương
số hay giúp đỡ hàng xóm láng giềng nên được nhiều người quý mến.

Về tâm tính, đương số sẵn sàng hiến đất đai, nhà cửa cho việc nghĩa, có khi
đứng ra thành lập cơ quan từ thiện. Của cải vật chất cũng có thể cho người
khác mà không luyến tiếc.`,
  },

  {
    id: 'thien-phuc-tai-quan-loc',
    title: 'Thiên Phúc tại Quan Lộc',
    sao: ['Thiên Phúc'],
    cung: ['Quan Lộc'],
    doUuTien: 75,
    tomTat: `Khi Thiên Phúc tại Quan Lộc, trong công việc đương số hay giúp
đỡ người khác và cũng thường nhận lại sự giúp đỡ từ mọi người.

Vị trí này hợp với các lĩnh vực y tế (bác sỹ, y tá), giáo dục (giáo viên,
giảng dạy), hội chữ thập đỏ và các tổ chức thiện nguyện.

Đương số không dùng thủ đoạn cạnh tranh, không làm hại ai; sự nghiệp đi
theo hướng thiện lương chân chính. Mức độ thành công tùy vào phúc phần sẵn
có và "nhân tốt" mà đương số đã gieo.`,
  },

  {
    id: 'thien-phuc-tai-no-boc',
    title: 'Thiên Phúc tại Nô Bộc',
    sao: ['Thiên Phúc'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Khi Thiên Phúc tại Nô Bộc, đương số có duyên kết giao với những
người bạn tốt và bạn đồng tu.

Đương số có cơ hội học hỏi từ các bậc chân tu, người có đạo đức. Đồng nghiệp
và cấp dưới đều tốt bụng, đáng tin cậy, luôn sẵn sàng giúp đỡ.

Đương số cũng hay tham gia các hoạt động thiện nguyện, cứu trợ cộng đồng
cùng bạn bè.`,
  },

  {
    id: 'thien-phuc-tai-thien-di',
    title: 'Thiên Phúc tại Thiên Di - HỢP CÁCH',
    sao: ['Thiên Phúc'],
    cung: ['Thiên Di'],
    doUuTien: 78,
    tomTat: `Khi Thiên Phúc thủ Thiên Di, đây là vị trí hợp cách: khi ra
ngoài đương số hay làm việc thiện, sẵn sàng giúp đỡ người khác một cách vô
tư.

Nhờ đó, đương số thường được quý nhân giúp đỡ, gặp nhiều may mắn và thuận
lợi.

Khi ra ngoài, đương số thể hiện thái độ điềm đạm, khoan dung, hay ở trong
môi trường gồm những người thiện lành thích tu tập. Tâm trí luôn nhẹ nhàng,
an yên, ít khi gặp sự cạnh tranh hay kèn cựa.`,
  },

  {
    id: 'thien-phuc-tai-tat-ach',
    title: 'Thiên Phúc tại Tật Ách - HỢP CÁCH',
    sao: ['Thiên Phúc'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `Khi Thiên Phúc thủ Tật Ách, đây là vị trí hợp cách: khi gặp bệnh
tật tai ương, đương số thường "tai qua nạn khỏi" và được quý nhân che chở.

Nếu chủ mệnh chịu khó tu tập, làm việc thiện từ sớm, khả năng cứu giải càng
mạnh mẽ — càng tu càng giải tốt.

Về sau khi qua đời, tang lễ của đương số được tổ chức trang nghiêm, có nhà
sư hoặc tu sỹ đến cầu nguyện, hành trình cuối đời thanh thản.

Lưu ý: vị trí Tật Ách chỉ giảm nhẹ tai ương, không bằng cung gốc. Khi vận
hạn xấu nặng, đương số vẫn có thể chết yểu; Quan Phúc tại Tật chỉ giảm bớt
mức độ.`,
  },

  {
    id: 'thien-phuc-tai-tai-bach',
    title: 'Thiên Phúc tại Tài Bạch',
    sao: ['Thiên Phúc'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `Khi Thiên Phúc tại Tài Bạch, đương số là người hay dùng tiền bạc
để làm việc thiện, cúng dường, bố thí, giúp đỡ xã hội.

Cách kiếm tiền của đương số chân chính, không dùng thủ đoạn gian dối hay
cạnh tranh không lành mạnh. Đúng theo lẽ "ở hiền gặp lành", đương số thường
gặp may mắn về tiền bạc và được người khác giúp đỡ lúc khó khăn.

Đương số cũng có tâm thí rộng lượng: sẵn sàng cho đi tài sản, sự nghiệp để
làm từ thiện một cách vô tư, không màng danh lợi. Đó là Thí Vô Úy — bố thí
từ tâm chứ không cần công trạng.`,
  },

  {
    id: 'thien-phuc-tai-tu-tuc',
    title: 'Thiên Phúc tại Tử Tức',
    sao: ['Thiên Phúc'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Khi Thiên Phúc tại Tử Tức, con cái của đương số hiền lành, hiếu
thuận, lớn lên trở thành người tử tế.

Đương số dễ nhận con nuôi; về già được con cái chăm sóc, phụng dưỡng chu
đáo. Trong số con cái có người thích tu tập, làm từ thiện và giàu lòng trắc
ẩn.

Khi sát bại tinh hội cùng, đương số khó có con và thường phải nhờ đến cầu
tự mới được như ý.`,
  },

  {
    id: 'thien-phuc-tai-phu-the',
    title: 'Thiên Phúc tại Phu Thê - Hóa giải xung khắc',
    sao: ['Thiên Phúc'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `Khi Thiên Phúc tại Phu Thê, cuộc sống vợ chồng của đương số hòa
hợp, biết nhường nhịn, yêu thương nhau, sống có tình có nghĩa và bền lâu.

Người hôn phối hiền lành, tốt tính, có đức tin, thích tìm hiểu tâm linh tín
ngưỡng và tin vào luật nhân quả.

Đặc biệt, Thiên Phúc tại đây có khả năng hóa giải xung khắc rất mạnh: dù
cung Phu Thê có Đào Hoa, Không Kiếp hay Thiên Hình, hôn nhân vẫn được hóa
giải và giữ được sự ấm êm — đúng như câu "thuận vợ thuận chồng tát biển Đông
cũng cạn". Đây là một trong những vị trí quan trọng nhất của Thiên Phúc,
giúp bảo vệ hôn nhân khỏi mọi sao xấu.`,
  },

  {
    id: 'thien-phuc-tai-huynh-de',
    title: 'Thiên Phúc tại Huynh Đệ',
    sao: ['Thiên Phúc'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Khi Thiên Phúc tại Huynh Đệ, anh chị em của đương số hòa thuận,
tình nghĩa và luôn giúp đỡ nhau tận tình.

Trong số anh chị em thường có người thích tu tập, tìm hiểu nhân sinh tín
ngưỡng và sống hướng thiện.

Khi cát tinh hội cùng (đặc biệt là Quang Quý và Dưỡng), đương số có khả
năng có anh chị em nuôi hoặc kết nghĩa, tình thân keo sơn gắn bó.`,
  },
];
