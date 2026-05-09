import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO BỆNH PHÙ - Thổ, Bại Tinh, vòng Lộc Tồn (vị trí 9)
 * Sao chủ về đau ốm, suy nhược, bệnh tật mãn tính
 */
export const luanGiai_BenhPhu: DoanLuanGiai[] = [
  {
    id: 'benh-phu-tinh-chat-chung',
    title: 'Bệnh Phù - Đặc tính chung',
    sao: ['Bệnh Phù'],
    doUuTien: 30,
    tomTat: `**Bệnh Phù** là phụ tinh thuộc bại tinh trong vòng Bác Sĩ (vị trí
thứ 9), ngũ hành Thổ. Sao này tượng trưng cho sức khỏe mỏng manh, sức đề
kháng yếu — nỗi đau yếu, bệnh tật đeo bám.

Bản chất Bệnh Phù gắn với sự suy nhược dai dẳng và buồn rầu vì bệnh tật:
bệnh mãn tính kéo dài, tinh thần chán nản uể oải, tâm trạng thường không
ổn định và dễ rơi vào căng thẳng.

Mang đặc trưng hành Thổ vốn chủ sự bế tắc và cố định, các loại bệnh do
Bệnh Phù dẫn dắt thường khó chữa, đeo bám lâu ngày — viêm xoang, đau dạ
dày hoặc cảm cúm dây dưa từ tuần này sang tuần khác là những hình ảnh
quen thuộc.`,
  },

  {
    id: 'benh-phu-tai-menh',
    title: 'Bệnh Phù tại Mệnh - Bệnh tật ốm đau',
    sao: ['Bệnh Phù'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `Khi Bệnh Phù thủ Mệnh, đương số có thể chất suy yếu và tinh thần
trì trệ, bệnh tật kéo dài không rõ nguyên nhân. Tướng mạo phản ánh khá rõ:

- Sắc diện kém tươi, da dẻ không hồng hào
- Ánh mắt thiếu thần sắc
- Thể trạng mệt mỏi, hễ "trái gió trở trời" là sinh ốm đau

Về tâm lý, đương số dễ rơi vào trạng thái lười biếng — uể oải, buồn chán,
né tránh vận động khiến thể chất càng suy nhược thêm. Cái lười xuất phát
từ trong tư tưởng nên đương số ngại dấn thân, ngại thay đổi.

Bệnh mãn tính đeo bám là điểm đặc trưng: viêm xoang, đau dạ dày, cảm cúm
kéo dài. Tuy không đến mức "thập tử nhất sinh" nhưng đương số phải sống
trong vòng lặp ốm đau dai dẳng.

Cảnh báo vòng lặp nguy hiểm: càng mệt thì càng lười, càng lười thì càng
yếu, rồi lại càng mệt — nếu không có ý chí cải thiện, đương số có nguy
cơ "sống chung với bệnh tật suốt đời".`,
  },

  {
    id: 'benh-phu-tai-phu-mau',
    title: 'Bệnh Phù tại Phụ Mẫu',
    sao: ['Bệnh Phù'],
    cung: ['Phụ Mẫu'],
    doUuTien: 70,
    tomTat: `Bệnh Phù cư Phụ Mẫu là dấu hiệu không tích cực về sức khỏe cha
mẹ — cơ thể dễ đau ốm, tinh thần mỏi mệt kéo dài.

Cha mẹ thường không quan tâm nhiều tới nhà cửa, con cái; không khí gia
đình lạnh nhạt, thiếu đầm ấm.

Mối liên kết cha mẹ - con có khoảng trống khó lấp đầy: cha mẹ ít tâm sự,
con cái cũng khó sẻ chia, tình cảm gia đình vì thế mà xa cách.`,
  },

  {
    id: 'benh-phu-tai-phuc-duc',
    title: 'Bệnh Phù tại Phúc Đức',
    sao: ['Bệnh Phù'],
    cung: ['Phúc Đức'],
    doUuTien: 72,
    tomTat: `Bệnh Phù cư Phúc Đức báo hiệu phúc phần dòng họ suy giảm. Trong
gia tộc nhiều người ốm đau triền miên, sức khỏe yếu hoặc mắc bệnh mãn
tính dai dẳng.

Tinh thần chủ mệnh cũng mang nhiều nỗi lo sợ khó dứt, luôn thường trực
cảm giác bất an không rõ nguyên do.

Con cháu đời sau ít lưu tâm đến việc thờ cúng, tu sửa mồ mả, nên vận khí
dòng họ khó hanh thông.`,
  },

  {
    id: 'benh-phu-tai-dien-trach',
    title: 'Bệnh Phù tại Điền Trạch',
    sao: ['Bệnh Phù'],
    cung: ['Điền Trạch'],
    doUuTien: 72,
    tomTat: `Bệnh Phù cư Điền cho thấy nơi ở mang phong thủy không tốt. Nhà
thường ẩm thấp, thiếu ánh nắng mặt trời, người ở dễ sinh ốm đau hoặc mỏi
mệt không rõ lý do.

Đương số thường mang tâm thế ỷ lại, lười biếng nên nhà cửa ít được chăm
sóc, dễ rơi vào tình trạng bẩn thỉu, ẩm thấp. Ở lâu càng sinh bệnh, cả
thể chất lẫn tinh thần đều hao tổn.

Tâm lý đương số u uất, chán nản, không có cảm giác được "tiếp lửa" mỗi
khi trở về tổ ấm.`,
  },

  {
    id: 'benh-phu-tai-quan-loc',
    title: 'Bệnh Phù tại Quan Lộc',
    sao: ['Bệnh Phù'],
    cung: ['Quan Lộc'],
    doUuTien: 75,
    tomTat: `Bệnh Phù cư Quan khiến sự nghiệp đương số không sáng lạn, dễ rơi
vào tình cảnh "lực bất tòng tâm".

Đương số dễ có hứng thú và làm việc trong các ngành liên quan đến y học,
chăm sóc sức khỏe, cứu chữa bệnh — thầy thuốc, bác sĩ, y tá. Tính chất
công việc đẩy đương số vào tình cảnh "đầu tắt mặt tối", kiệt sức cả về
tâm lý lẫn sức khỏe.

Dù có năng lực, sức khỏe lại không theo kịp nên sự nghiệp khó hanh thông,
lộ trình thăng tiến thường bị gián đoạn.`,
  },

  {
    id: 'benh-phu-tai-no-boc',
    title: 'Bệnh Phù tại Nô Bộc',
    sao: ['Bệnh Phù'],
    cung: ['Nô Bộc'],
    doUuTien: 68,
    tomTat: `Bệnh Phù cư Nô khiến mối quan hệ đồng nghiệp, bạn bè dễ nảy sinh
phiền lụy. Đương số ít trải lòng, sống khép kín, lười giao tiếp xã hội nên
không có nhiều bạn bè.

Khi xung đột phát sinh, mọi việc thường không dứt khoát mà kéo dài lê thê
gây mệt mỏi cho cả hai phía.

Đương số dễ phải lo lắng, gồng mình cáng đáng trách nhiệm thay người
khác, trong khi chính mình lại không được ai thấu hiểu thật lòng.`,
  },

  {
    id: 'benh-phu-tai-thien-di',
    title: 'Bệnh Phù tại Thiên Di',
    sao: ['Bệnh Phù'],
    cung: ['Thiên Di'],
    doUuTien: 70,
    tomTat: `Bệnh Phù cư Di khiến đương số dễ gặp bất lợi mỗi khi bước ra ngoài
xã hội. Trạng thái thường xuyên mệt mỏi, dễ ốm đau, không đủ năng lượng
để thích nghi với môi trường bên ngoài.

Hình ảnh trong mắt mọi người vì thế mà thiếu chỉn chu, kém rạng rỡ, dễ bị
đánh giá là người chậm chạp, kém năng động.

Đây là biểu hiện rõ nét của việc thiếu chăm sóc bản thân hoặc xuống cấp
sức khỏe do không hợp thời tiết, không hợp nhịp sống đô thị.`,
  },

  {
    id: 'benh-phu-tai-tat-ach',
    title: 'Bệnh Phù tại Tật Ách - Sức khỏe điểm yếu nghiêm trọng',
    sao: ['Bệnh Phù'],
    cung: ['Tật Ách'],
    doUuTien: 80,
    tomTat: `Bệnh Phù cư Tật Ách cho thấy sức khỏe là điểm yếu mà đương số cần
đặc biệt chú ý. Cơ thể yếu ớt, sức đề kháng thấp nên dễ cảm lạnh, nhức
đầu, sổ mũi; các triệu chứng lặt vặt thường kéo dài lê thê chứ không dứt
điểm gọn ghẽ.

Mỗi sự biến động thời tiết đều trở thành một đợt thử thách thể lực thực
sự với đương số.

Lời khuyên: cần chăm sóc bản thân thật kỹ lưỡng, tránh để mình rơi vào
vòng xoáy bệnh tật triền miên.`,
  },

  {
    id: 'benh-phu-tai-tat-ach-thien-hinh',
    title: 'Bệnh Phù + Thiên Hình tại Tật Ách - bệnh trở nặng phải mổ',
    sao: ['Bệnh Phù'],
    ketHop: ['Thiên Hình'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `Khi Bệnh Phù gặp **Thiên Hình** tại Tật Ách, bệnh tình của đương
số có thể trở nặng, có nguy cơ phải mổ xẻ, phẫu thuật hoặc trải qua đợt
điều trị chuyên sâu.`,
  },

  {
    id: 'benh-phu-tai-tat-ach-hoa-ky',
    title: 'Bệnh Phù + Hóa Kỵ tại Tật Ách - bệnh trở nặng phải mổ',
    sao: ['Bệnh Phù'],
    ketHop: ['Hóa Kỵ'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `Khi Bệnh Phù gặp **Hóa Kỵ** tại Tật Ách, bệnh tình của đương số
có thể trở nặng, có nguy cơ phải mổ xẻ, phẫu thuật hoặc cần điều trị
chuyên sâu kéo dài.`,
  },

  {
    id: 'benh-phu-tai-tai-bach',
    title: 'Bệnh Phù tại Tài Bạch',
    sao: ['Bệnh Phù'],
    cung: ['Tài Bạch'],
    doUuTien: 72,
    tomTat: `Bệnh Phù cư Tài Bạch khiến tiền bạc của đương số "vào cửa trước,
ra cửa sau". Cuộc sống kiếm tiền không thuận lợi — tiền làm ra chưa kịp
tích lũy đã vội tiêu tan, đôi khi phải chi trả nhiều cho thuốc men, viện
phí.

Một số đương số thiếu động lực làm việc, không chịu khó kiếm tiền hoặc bị
chính bệnh tật làm gián đoạn sự nghiệp, khiến tài chính luôn rơi vào cảnh
"thiếu trước hụt sau".`,
  },

  {
    id: 'benh-phu-tai-tu-tuc',
    title: 'Bệnh Phù tại Tử Tức',
    sao: ['Bệnh Phù'],
    cung: ['Tử Tức'],
    doUuTien: 70,
    tomTat: `Bệnh Phù cư Tử Tức khiến mối quan hệ giữa đương số và con cái
không khăng khít, hoặc thiếu sự quan tâm bồi dưỡng cần thiết. Tình cảm
cha mẹ - con đôi khi tồn tại khoảng trống im lặng khó lấp đầy.

Việc dạy dỗ con cái ít được chú trọng từ sớm; đến khi đương số muốn bù
đắp thì đã muộn.

Con cái cũng dễ bị bệnh vặt khiến đương số rơi vào trạng thái mệt mỏi,
nặng lòng trong việc chăm sóc.`,
  },

  {
    id: 'benh-phu-tai-phu-the',
    title: 'Bệnh Phù tại Phu Thê',
    sao: ['Bệnh Phù'],
    cung: ['Phu Thê'],
    doUuTien: 72,
    tomTat: `Bệnh Phù cư Phu Thê khiến mối quan hệ vợ chồng của đương số mang
tính phụ thuộc lẫn nhau. Người hôn phối thường có sức khỏe kém, hay suy
nghĩ tiêu cực và dễ rơi vào trạng thái uể oải, thiếu lửa trong tình cảm.

Mối quan hệ vợ chồng vì thế mang nét lệ thuộc nhiều hơn là sẻ chia — cả
hai cùng ở thế chờ đợi người kia thay đổi, không ai chủ động đứng ra hàn
gắn trước.

Hôn nhân nguội lạnh, không còn được như kỳ vọng ban đầu của cả hai.`,
  },

  {
    id: 'benh-phu-tai-huynh-de',
    title: 'Bệnh Phù tại Huynh Đệ',
    sao: ['Bệnh Phù'],
    cung: ['Huynh Đệ'],
    doUuTien: 68,
    tomTat: `Bệnh Phù cư Huynh Đệ khiến mối quan hệ anh chị em bị ảnh hưởng
bởi vấn đề sức khỏe. Anh chị em thường xuyên ốm đau hoặc mắc bệnh mãn
tính dai dẳng, không có cách chữa dứt điểm.

Lúc nhỏ tình cảm có thể thân thiết, nhưng càng trưởng thành lại càng
lạnh nhạt vì ít quan tâm qua lại.

Một số trường hợp anh em có tật xấu khó bỏ hoặc nảy sinh tính ỷ lại,
khiến đương số phải bận tâm không ít.`,
  },

  {
    id: 'benh-phu-tuoi-nho-day-thi',
    title: 'Bệnh Phù ở tuổi nhỏ và dậy thì',
    sao: ['Bệnh Phù'],
    doUuTien: 55,
    tomTat: `Đại vận có Bệnh Phù rơi vào tuổi nhỏ và dậy thì giống như "kẻ gây
rối trật tự" trong giai đoạn quan trọng nhất của đương số. Lúc này dễ gặp
phiền lụy về tinh thần và sức khỏe, khó thích nghi với môi trường học
tập, khó kết bạn hoặc rèn luyện thể chất.

Đặc biệt với phái nữ, đại vận 10 năm có Bệnh Phù trong giai đoạn dậy thì
tác động làm thay đổi suy nghĩ và hành vi theo chiều hướng không tốt —
đây là điểm cần lưu ý đặc biệt.`,
  },

  {
    id: 'benh-phu-truong-thanh-hau-van',
    title: 'Bệnh Phù giai đoạn trưởng thành và hậu vận',
    sao: ['Bệnh Phù'],
    doUuTien: 55,
    tomTat: `Bệnh Phù trong giai đoạn trưởng thành (20-40 tuổi) ảnh hưởng nhiều
nhất đến công việc của đương số, làm gián đoạn tinh thần và ý chí phấn
đấu khi đáng lẽ đây là lúc bứt phá.

Bước sang hậu vận sau 40 tuổi, Bệnh Phù tác động rõ rệt về thể chất: sức
đề kháng với bệnh nền suy giảm, càng có tuổi sức khỏe càng không như
trước. Nếu xuất hiện trong hành vận, sao này còn đẩy nhanh các tiến trình
bệnh tật vốn đã tiềm ẩn.`,
  },

  {
    id: 'benh-phu-hoa-giai',
    title: 'Lời khuyên hóa giải Bệnh Phù',
    sao: ['Bệnh Phù'],
    doUuTien: 70,
    tomTat: `Hóa giải Bệnh Phù không khó, nhưng đòi hỏi đương số phải kỷ luật
và bền bỉ:

- Lập nếp sống lành mạnh
  - "Lấy kỷ luật làm thầy, lấy thói quen làm bạn"
  - Vận động đều đặn, không cho phép mình lười biếng
  - Ăn ngủ đúng giờ giấc, đặc biệt với người đau dạ dày

- Cảnh giác trường kỳ
  - Bệnh Phù ở đâu thì ở đó xảy ra tác động lặp đi lặp lại suốt đời
  - Chỉ cần buông lỏng một chút là rơi vào vòng lặp lười biếng, trì trệ

- Đặc biệt với bệnh mãn tính
  - Tuyệt đối không được chủ quan
  - Khám sức khỏe định kỳ
  - Theo phác đồ điều trị nghiêm túc

Bản chất Bệnh Phù là thiếu sinh khí, nên chỉ cần đương số chủ động bồi
đắp bằng luyện tập và sinh hoạt khoa học là có thể vượt qua được.`,
  },
];
