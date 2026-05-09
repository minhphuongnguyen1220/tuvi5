import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO SUY - Thủy, Bại Tinh.
 *
 * Vị trí THỨ 6 trong Vòng Trường Sinh 12 sao:
 * Trường Sinh: Mộc Dục: Quan Đới: Lâm Quan: Đế Vượng: SUY
 * Bệnh: Tử: Mộ: Tuyệt: Thai: Dưỡng
 *
 * An theo CỤC, là sao ĐẦU TIÊN của nửa GIẢM SÚT trong vòng Trường Sinh.
 *
 * Đặc trưng:
 * - Đứng SAU ĐỈNH ĐẾ VƯỢNG: bắt đầu xuống dốc, sa sút
 * - Sau khi mặt trời lên đỉnh (giờ Ngọ): đi xuống Mùi, Thân, Dậu...
 * - Tượng trưng cho TUỔI VỀ GIÀ, CHUẨN BỊ NGHỈ HƯU
 * - Sao GIẢM THIỂU - hai mặt:
 * • Đi cùng chính tinh + cát tinh đắc địa: GIẢM ĐỘ SÁNG, SỨC PHÁT HUY
 * • Đi cùng sát bại tinh + chính tinh hãm: GIẢM TÁC DỤNG XẤU
 * - Tính cách ÔN HÒA, AN PHẬN, THỎA HIỆP
 * - Hợp NGHIÊN CỨU, KỸ THUẬT, TỈ MỈ
 * - DƯƠNG NAM ÂM NỮ - dễ bị hôn phối lấn quyền
 */
export const luanGiai_Suy: DoanLuanGiai[] = [
  {
    id: 'suy-tinh-chat-chung',
    title: 'Suy - Đặc tính chung',
    sao: ['Suy'],
    doUuTien: 33,
    tomTat: `**Suy** là phụ tinh thuộc bại tinh, đứng ở vị trí thứ 6 trong vòng
Trường Sinh — bắt đầu nửa giảm sút. Ngũ hành Thủy.

Bản chất sao Suy là sự sa sút và yếu đuối: sau khi đã lên đến đỉnh ở Đế
Vượng, mọi thứ bắt đầu xuống dốc. Sao này tượng trưng cho thời kỳ về già,
độ tuổi chuẩn bị nghỉ hưu, sức khỏe và sự nghiệp đảo chiều đi xuống — như
mặt trời sau giờ Ngọ sẽ đi xuống dần theo Mùi, Thân, Dậu.

Suy là sao giảm thiểu mang hai mặt: đi cùng sát bại tinh hoặc chính tinh
hãm địa thì giảm bớt tác dụng xấu của chúng; đi cùng cát tinh đắc địa lại
làm giảm độ sáng và sức phát huy của chúng.

Về tính cách, đương số có sao Suy thường ôn hòa, dễ thỏa hiệp, an phận,
hợp với nghề nghiên cứu, kỹ thuật và những việc đòi hỏi sự tỉ mỉ. Đặc biệt
với người Dương Nam, Âm Nữ, đương số thường dễ bị người hôn phối lấn át,
cầm quyền.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP XẤU
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'suy-hoa-linh-khong-kiep-co-luong-ham-pham-phap',
    title: 'Suy + Hỏa Linh + Không Kiếp + Cơ/Lương hãm - Lầm đường phạm pháp',
    sao: ['Suy'],
    ketHop: ['Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp', 'Thiên Cơ'],
    doUuTien: 60,
    tomTat: `Khi Suy hội cùng Hỏa Tinh, Linh Tinh, Địa Không, Địa Kiếp và
Thiên Cơ hoặc Thiên Lương hãm địa, lá số tạo thành cách cục suy tàn đạo
đức. Đương số dễ sa ngã, có hành vi phạm pháp như trộm cắp vặt, hoặc rơi
vào cảnh bị lừa đảo và mất của.

Cách này đặc biệt nguy hiểm tại các vị trí Tuyệt, Suy hay Mộc Dục: nếu
chính tinh hãm địa, nguy cơ đương số bị dụ dỗ vào con đường bất chính rất
cao. Hạn vận này dễ khiến đương số vướng vào vòng lao lý, thậm chí nguy
hiểm đến tính mạng nếu không được hóa giải.

Để hóa giải, cần có Tử Vi, Thiên Đồng, Thiên Lương đi cùng Quang Quý, Quan
Phúc và Tuần Triệt mới đỡ được.`,
  },

  {
    id: 'suy-menh-cuc-kim-han-ty-suy-nhuoc',
    title: 'Suy + Mệnh Tý / Cục Kim hạn Tý - Sức khỏe suy kiệt',
    sao: ['Suy'],
    chi: ['Tý'],
    doUuTien: 55,
    tomTat: `Khi Cục Kim của đương số rơi vào hạn cung Tý có sao Suy, chất
lượng cuộc sống xuống dốc rõ rệt. Đương số dễ rơi vào tình trạng suy nhược
kéo dài; dù không phát bệnh nặng, vẫn luôn cảm thấy uể oải và thiếu sinh
khí — như cây thiếu nước dù vẫn còn xanh.

Đương số cần dưỡng sinh, ăn uống cẩn thận, tránh lao lực, không nên làm
nghề tiêu hao thể lực nhiều.`,
  },

  {
    id: 'suy-cuc-tho-han-mao-thin-ti-benh-man',
    title: 'Suy + Cục Thổ hạn Mão Thìn Tị - Bệnh mãn tính khó dứt',
    sao: ['Suy'],
    chi: ['Mão', 'Thìn', 'Tỵ'],
    doUuTien: 55,
    tomTat: `Khi Cục Thổ của đương số đến hạn Mão, Thìn hoặc Tị có sao Suy,
thể chất dễ gặp biến chứng mãn tính. Bệnh tình thường liên quan đến các
chứng mãn tính, khó chẩn đoán hoặc dai dẳng không dứt.

Đương số cần cẩn trọng trong ăn uống, nghỉ ngơi và theo dõi sức khỏe để
giảm thiểu rủi ro lớn về hậu vận.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // SUY TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'suy-tai-menh',
    title: 'Suy tại Mệnh',
    sao: ['Suy'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Khi Suy thủ Mệnh, đương số mang tính cách ôn hòa, dễ thỏa hiệp,
an phận. Đương số nhún nhường, xuôi theo dòng đời, biết tiến biết lùi để
giữ yên ổn, im lặng quan sát thời cuộc và giỏi luồn lách trong những tình
huống cần mềm dẻo, khéo léo.

Mặt trái của lối sống an phận là không trải qua thử thách lớn nên đường
công danh mờ nhạt; đương số thiếu gan lì và tinh thần cạnh tranh, dù có
trí có mưu vẫn khó bứt phá.

Một nét đặc trưng nữa là đương số khó tiếp nối truyền thống của bố mẹ và
anh chị em — đến giai đoạn của mình thì mọi thứ bắt đầu đi xuống.

Về sức khỏe, bản thân đương số suy yếu, sa sút, yếu đuối về thể xác, tâm
trạng bất định và hay lo, từ đó dẫn đến hao tổn. Sức khỏe bố mẹ cũng không
tốt, thường có bệnh trong người.

Về phúc thọ, phúc kém và không phát; đương số không được hưởng phúc của
tổ tiên. Bù lại, được trời phú cho đôi bàn tay khéo léo, cẩn thận và có
tài. Đương số hợp nghề nghiên cứu, kỹ thuật, tỉ mỉ — không hợp những nghề
đối đầu hay liên quan đến chiến tranh.

Riêng trường hợp Dương Nam và Âm Nữ, đương số dễ bị người hôn phối lấn át,
cầm quyền; nhà đông anh chị em và nhiều người thành đạt hơn mình.`,
  },

  {
    id: 'suy-tai-phu-mau',
    title: 'Suy tại Phụ Mẫu',
    sao: ['Suy'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Khi Suy cư Phụ Mẫu, cha mẹ đương số thường vất vả, hiền lành
và cần mẫn. Khi đương số sinh ra, bố mẹ thường đang trong giai đoạn vất
vả, làm công ăn lương, sức khỏe suy giảm.

Do cấu trúc tam hợp, đương số dễ thủ Đế Vượng nên bản thân dễ to béo; nếu
hội nhiều cát tinh, đương số dễ thành tài, thành đạt và quay lại giúp đỡ
bố mẹ.

Khi Phụ Mẫu hội thêm cát tinh như Tả Phù, Hữu Bật, Văn Xương, Văn Khúc,
Hóa Lộc, Hóa Quyền hay Hóa Khoa, cha mẹ từng trải qua vinh quang và có
địa vị nhất định; về sau cuộc đời ít biến động, dần mất tiếng tăm từng có.

Khi gặp sát tinh như Hỏa Tinh, Linh Tinh, Kình Dương hay Đà La, cha mẹ
vất vả khó khăn.`,
  },

  {
    id: 'suy-tai-phuc-duc',
    title: 'Suy tại Phúc Đức',
    sao: ['Suy'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `Khi Suy cư Phúc Đức, phúc đức tổ tiên đến đời đương số đã suy
giảm; đương số không được hưởng nhiều và cũng không được nhiều may mắn.

Có thể tóm gọn cảnh ngộ này thành câu "phúc mỏng thì phải dày tâm". Gốc rễ
tổ tiên không còn hưng vượng, đời con cháu không được hưởng nhiều ân phúc,
hành trình sống phải dựa vào sức mình để phát triển.

Lời khuyên cho đương số là phải tích lũy, tôn bồi và gây dựng thêm phước
đức. Cần biết tích đức hành thiện để bù đắp phần thiếu hụt và tạo nền tảng
mới cho hậu vận cùng đời sau.`,
  },

  {
    id: 'suy-tai-dien-trach',
    title: 'Suy tại Điền Trạch',
    sao: ['Suy'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Khi Suy cư Điền Trạch, đất đai và của tiền của đương số giảm
sút về số lượng. Của cải dễ bị hao hụt, nhà cửa xuống cấp, buôn bán bất
động sản dễ thua lỗ. Đương số cũng chuộng nơi sống tĩnh lặng, tách biệt
với chốn xô bồ.

Một điểm đáng chú ý: đương số không được thừa kế nhiều tài sản từ gia đình
hoặc nếu có cũng khó giữ được lâu dài. Điền sản nếu đem đầu tư dễ gặp vận
rủi — bán không được giá, mua không sinh lời, thậm chí lỗ vốn.`,
  },

  {
    id: 'suy-tai-quan-loc',
    title: 'Suy tại Quan Lộc',
    sao: ['Suy'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `Khi Suy cư Quan Lộc, sao này làm giảm sáng đường học tập và
công danh của đương số. Công việc thường không thuận lợi và hay gắn với
các ngành nghề đã cũ cổ, không còn thịnh hành — những ngành trước kia từng
rất hot nay đã đi xuống.

Nếu hội thêm sát bại tinh như Hỏa Tinh, Linh Tinh, Địa Không, Địa Kiếp hay
Hóa Kỵ, hành trình công danh rơi vào cảnh "đứt gánh giữa đường": sự nghiệp
dậm chân tại chỗ, khó thăng tiến, đương số phải gắn bó với ngành nghề nhàm
chán, thiếu đột phá.

Tuy vậy, tính chất "suy tàn" của Suy lại có mặt tốt riêng: khi xuất hiện
cát tinh, Suy giảm bớt phần cát; nhưng khi đi với hung lại giảm bớt phần
hung.`,
  },

  {
    id: 'suy-tai-no-boc',
    title: 'Suy tại Nô Bộc',
    sao: ['Suy'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Khi Suy cư Nô Bộc, bạn bè và đồng nghiệp của đương số giảm cả
về số lượng lẫn chất lượng.

Do cấu trúc tam hợp, đương số dễ có Đế Vượng thủ Quan Lộc — tức đứng đầu
nên cấp dưới kém hơn mình. Điều này cũng có nghĩa đương số có nhiều người
cấp dưới và dễ trở thành lãnh đạo.

Nếu Nô Bộc hội sát bại tinh, bạn bè kém cỏi và xấu, dễ làm hư đương số,
kéo theo nhiều tai họa. Đương số khó có tri kỷ thực sự, dễ gặp bạn xấu để
rồi bị lợi dụng và sa chân vào chốn thị phi.

Khi hội cát tinh như Thiên Phủ, Thiên Tướng hay Thái Âm sáng, bạn bè sống
có tình có nghĩa, song đương số vẫn ít được nhờ cậy.`,
  },

  {
    id: 'suy-tai-thien-di',
    title: 'Suy tại Thiên Di',
    sao: ['Suy'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `Khi Suy cư Thiên Di, đương số ra ngoài hay đi xa thường không
được may mắn, vận khí kém. Khi xuất ngoại, đương số mang dáng vẻ hiền
lành, an phận, dễ kết được nhiều bạn bè; bản thân sức khỏe hơi yếu và phải
chăm chút bản thân nhiều.

Khi ra ngoài, đương số thường gặp khó khăn về sức khỏe, cơ hội đến muộn
hoặc bị người khác cản trở. Bù lại, nhờ bản tính thiện lành, điềm đạm và
biết chừng mực, đương số vẫn dễ tạo thiện cảm và xây dựng được mạng lưới
quan hệ xã giao.`,
  },

  {
    id: 'suy-tai-tat-ach-benh-tat-nhe',
    title: 'Suy tại Tật Ách - Bệnh tật nhanh khỏi',
    sao: ['Suy'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `Khi Suy cư Tật Ách, bệnh tật của đương số nhanh khỏi — vì Suy
là sao giảm, đi với Tật thì làm giảm bệnh.

Đây là một mặt tốt của Suy: sao này làm suy giảm bệnh tật, giảm đi sự
nghiêm trọng của tật bệnh và tai họa. Dù đương số không thể hoàn toàn
tránh khỏi trắc trở sức khỏe, các tổn thương thường bị hạn chế và bệnh
tật dễ thuyên giảm hoặc hồi phục nhanh hơn dự đoán.

Riêng với Dương Nam và Âm Nữ, đương số đặc biệt được âm phúc trợ lực, ít
gặp tai ương lớn, ra ngoài hay được may mắn nhờ phước đức tổ tiên phù hộ.`,
  },

  {
    id: 'suy-tai-tai-bach',
    title: 'Suy tại Tài Bạch',
    sao: ['Suy'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `Khi Suy cư Tài Bạch, khả năng tài chính của đương số bị suy
giảm. Kinh tế có phần đi xuống, không thuận lợi; đương số dễ rơi vào cảnh
"tiền vào cửa trước, ra cửa sau", tiền tài tích lũy khó bền và đầu tư hay
gặp rủi ro thua lỗ.

Khi Tài Bạch hội thêm sát tinh như Hóa Kỵ, Địa Không, Địa Kiếp hay Kiếp
Sát, tài chính càng suy yếu, kinh tế bấp bênh, đương số dễ rơi vào chuỗi
hao hụt nối tiếp.

Khi hội cát tinh như Lộc Tồn hay Hóa Lộc, đương số là người thận trọng,
tiêu dùng có tính toán, thiên về ổn định thay vì mạo hiểm.`,
  },

  {
    id: 'suy-tai-tu-tuc',
    title: 'Suy tại Tử Tức',
    sao: ['Suy'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Khi Suy cư Tử Tức, số lượng con cái của đương số bị suy giảm;
con cái không giỏi bằng cha mẹ và khó tiếp nối thành tựu của cha mẹ.

Nếu hội nhiều sát bại tinh như Hóa Kỵ, Đà La hay Địa Kiếp, bố mẹ giàu có
nhưng con phá; con cái sinh ra thường yếu kém hơn cha mẹ, thậm chí sa vào
tệ nạn, ăn chơi hoặc bất hiếu. Đương số ít con, hoặc nếu đông thì mỗi đứa
một tính, khó thuận lòng.`,
  },

  {
    id: 'suy-tai-phu-the',
    title: 'Suy tại Phu Thê',
    sao: ['Suy'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `Khi Suy cư Phu Thê, người hôn phối của đương số hiền lành và
cần mẫn nhưng không giỏi giang. Sống chậm, kém lanh lẹ, hôn phối dễ bị
động trong mối quan hệ.

Do cấu trúc tam hợp, cung con cái có sao Đế Vượng hội nhiều cát tinh thì
đương số dễ sinh quý tử.

Khi Phu Thê hội thêm sát tinh, hôn nhân dễ gặp sóng gió hoặc dẫn đến cảnh
chia ly.

Khi hội nhiều cát tinh, quan hệ vợ chồng tuy không quá nồng nhiệt nhưng
con cái giỏi giang, giúp "giữ lửa" cho gia đạo.`,
  },

  {
    id: 'suy-tai-huynh-de',
    title: 'Suy tại Huynh Đệ',
    sao: ['Suy'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Khi Suy cư Huynh Đệ, anh chị em của đương số hiền lành nhưng
dễ vất vả, công danh không được cao, sống lặng lẽ và ít sôi động. Tuy
hiền lành, nhẫn nại và sống tình nghĩa, anh chị em vẫn dễ rơi vào cảnh
"lực bất tòng tâm", khó thăng tiến trong sự nghiệp.

Khi Huynh Đệ đồng cung với nhiều hung tinh, anh chị em dễ gặp cảnh chia
ly, mỗi người một nơi, khó sum họp đông đủ.`,
  },
];
