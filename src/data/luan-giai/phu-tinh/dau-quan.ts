import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO ĐẨU QUÂN - Hỏa, Hung Tinh.
 *
 * Đặc tính: CÔ ĐỘC, KHẮT KHE, NGUYÊN TẮC, NGĂN NẮP, CẨN THẬN, GIỮ CỦA BỀN LÂU.
 * Hình tượng: người "CẦM CÂN NẢY MỰC" sau lưng Thái Tuế.
 *
 * Hợp với CÔNG VIỆC TỈ MỈ - KỶ LUẬT - TÍNH TOÁN: kế toán, thủ quỹ, thủ kho.
 * Cô độc gần giống Cô Thần - khó hòa hợp, hôn nhân muộn.
 */
export const luanGiai_DauQuan: DoanLuanGiai[] = [
  {
    id: 'dau-quan-tinh-chat-chung',
    title: 'Đẩu Quân - Đặc tính chung',
    sao: ['Đẩu Quân'],
    doUuTien: 32,
    tomTat: `**Đẩu Quân** thuộc nhóm phụ tinh hung tinh, ngũ hành Hỏa, mang hình tượng
người "cầm cân nảy mực" đứng sau lưng Thái Tuế. Đặc tính nổi bật của sao là cô
độc, khắt khe, nguyên tắc, sống ngăn nắp cẩn thận và giữ của bền lâu.

Đẩu Quân tác động đến đương số theo hai mặt rõ rệt:

- Mặt tốt: mang lại sự chuẩn mực, bền bỉ và khả năng duy trì thành quả lâu dài.
- Mặt xấu: dễ rơi vào cô độc, khắt khe, bảo thủ, khó dung hòa với người xung
  quanh.

Về duyên vận, đương số thường kết hôn muộn do quá kỹ tính trong việc lựa chọn
hôn phối; tình cảm cũng dễ có khoảng cách, thiếu sự thấu hiểu trọn vẹn.

Về sự nghiệp, Đẩu Quân hợp với những công việc đòi hỏi tỉ mỉ, kỷ luật và tính
toán như kế toán, thủ quỹ, thủ kho. Tuy nhiên, đương số dễ bỏ lỡ cơ hội mới do
tính bảo thủ vốn có.

Về tài lộc, đương số giỏi tích lũy tài sản, duy trì dòng tiền ổn định và ít
tiêu xài hoang phí. Mặt khác, sự ngại thay đổi đôi khi khiến đương số bỏ lỡ
những cơ hội tăng thu nhập đáng giá.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CUNG MỆNH
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'dau-quan-menh-co-chap-don-doc',
    title: 'Đẩu Quân tại Mệnh - Cố chấp đơn độc',
    sao: ['Đẩu Quân'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Khi Đẩu Quân tọa thủ Mệnh, đương số mang tính tình cố chấp và đơn
độc. Là người "cầm cân nảy mực" sau lưng Thái Tuế, đương số gánh trách nhiệm
nặng nề và đặc biệt giỏi quản lý tài sản, ngân sách, tài chính.

Tính cách của đương số khá giống Cô Thần — có xu hướng cô độc, ít bạn bè, dễ
bị người ngoài hiểu lầm là khắt khe khó gần. Đời sống thường rất cẩn thận, kỹ
tính và đề cao nguyên tắc.

Về tướng mạo, đương số có sắc diện nghiêm nghị, ít khi cười nói, ánh mắt sắc
sảo trầm tĩnh, phong thái đĩnh đạc và ít biểu lộ cảm xúc ra bên ngoài.

Trên đường công danh tài lộc, đương số thiên về giữ của, thường được giao
quyền quản lý tài chính ngân sách, hợp với các vị trí thủ kho, thủ quỹ, kế
toán.`,
  },

  {
    id: 'dau-quan-menh-sat-bai-tinh-gian-xao',
    title: 'Đẩu Quân + sát bại tinh tại Mệnh - Gian xảo quỷ quyệt',
    sao: ['Đẩu Quân'],
    cung: ['Mệnh'],
    ketHop: ['Kình Dương', 'Đà La', 'Địa Không', 'Địa Kiếp', 'Hóa Kỵ', 'Thiên Hình'],
    doUuTien: 60,
    tomTat: `Khi Đẩu Quân tại Mệnh gặp sát bại tinh như Kình Dương, Đà La, Địa
Không, Địa Kiếp, Hóa Kỵ hay Thiên Hình, tính tỉ mỉ kỹ lưỡng vốn có của đương
số dễ bị dùng vào những mưu mô xấu. Đương số trở nên gian xảo, quỷ quyệt và dễ
vướng vào chuyện bất chính.`,
  },

  {
    id: 'dau-quan-menh-loc-ton-vu-khuc-co-qua-keo-kiet',
    title: 'Đẩu Quân + Lộc Tồn/Vũ Khúc/Cô Thần/Quả Tú tại Mệnh - Keo kiệt',
    sao: ['Đẩu Quân'],
    cung: ['Mệnh'],
    ketHop: ['Lộc Tồn', 'Vũ Khúc', 'Cô Thần', 'Quả Tú'],
    doUuTien: 60,
    tomTat: `Khi Đẩu Quân tại Mệnh đi cùng Lộc Tồn, Vũ Khúc, Cô Thần hay Quả Tú,
tính cách đương số thêm phần keo kiệt, bần tiện. Đương số thuộc kiểu người
"vắt cổ chày ra nước", chỉ biết tính toán cho bản thân mà ít khi rộng tay với
người khác.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC CUNG KHÁC
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'dau-quan-phu-mau-cha-me-nghiem-khac',
    title: 'Đẩu Quân tại Phụ Mẫu - Cha mẹ nghiêm khắc làm tài chính',
    sao: ['Đẩu Quân'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Khi Đẩu Quân tọa Phụ Mẫu, cha mẹ của đương số khó tính và nghiêm
khắc, đặt nặng kỷ cương nề nếp trong việc nuôi dạy con cái. Tính cách áp đặt
đôi khi khiến không khí gia đình trở nên nặng nề, dễ sinh hiểu lầm và bất hòa.

Về nghề nghiệp, một hoặc cả hai bậc sinh thành thường làm nghề liên quan tới
tài chính như kế toán, thủ quỹ, hậu cần. Trong nhà hiếm khi có chuyện tiêu
xài phung phí; cha mẹ luôn biết vun vén, chi tiêu tiết kiệm.`,
  },

  {
    id: 'dau-quan-phuc-duc-dong-toc-it-sum-hop',
    title: 'Đẩu Quân tại Phúc Đức - Dòng họ ít sum họp',
    sao: ['Đẩu Quân'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `Khi Đẩu Quân tọa Phúc Đức, dòng họ của đương số ít sum họp, thiếu
sự gắn kết. Mỗi người mỗi tính, không ai chịu nhường ai.

Khi hội cát tinh, tổ tiên có thể từng làm quan hoặc đảm nhiệm việc trông giữ
kho lương, hậu cần.

Về phúc khí dòng tộc, có phần khắt khe và nghiêm ngặt, đòi hỏi con cháu phải
ăn ngay ở thẳng, sống đúng đạo lý. Nhiều gia đình giữ nề nếp thờ cúng chuẩn
chỉnh, hương hỏa lễ nghi không dám ngơi tay.`,
  },

  {
    id: 'dau-quan-dien-trach-tho-dia-kho-tinh',
    title: 'Đẩu Quân tại Điền Trạch - Thổ địa khó tính',
    sao: ['Đẩu Quân'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Khi Đẩu Quân tọa Điền Trạch, đương số chẳng khác nào "thổ địa khó
tính" ngồi canh cổng nhà. Đương số khắt khe và tỉ mỉ trong chuyện nhà cửa, đòi
hỏi mọi ngóc ngách phải ngăn nắp tươm tất; chỉ cần nhà cửa lộn xộn là dễ thấy
trái tai gai mắt.

Đương số coi nhà như gốc rễ cuộc đời, giữ nhà rất kỹ và không dễ thay đổi nơi
ở. Cách sống quy củ, nghiêm khắc, ít cởi mở khiến đương số khó thân thiết với
hàng xóm.`,
  },

  {
    id: 'dau-quan-quan-loc-trach-nhiem-cao',
    title: 'Đẩu Quân tại Quan Lộc - Trách nhiệm cao gánh vác',
    sao: ['Đẩu Quân'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `Khi Đẩu Quân tọa Quan Lộc, đương số gánh vác việc lớn trong công
việc — chu toàn, nguyên tắc, cân đo đong đếm từng ly. Chính sự kỹ tính ấy đôi
khi khiến đương số mất lòng người khác.

Đương số thường có trách nhiệm rất cao, hiếm khi thay đổi môi trường làm việc;
thâm niên càng lâu thì vị trí càng vững, công danh thuận buồm xuôi gió.

Khi hội cát tinh, đương số dễ được thăng chức và nắm quyền lãnh đạo. Ngược
lại, nếu đi cùng sát bại tinh, đương số dễ sinh tâm bất mãn, khó hòa hợp với
tập thể.`,
  },

  {
    id: 'dau-quan-no-boc-it-ban-be',
    title: 'Đẩu Quân tại Nô Bộc - Ít bạn bè giữ khoảng cách',
    sao: ['Đẩu Quân'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Khi Đẩu Quân tọa Nô Bộc, đương số ít bạn bè và ít giao thiệp. Tính
hay tính toán thiệt hơn khiến đương số chơi với ai cũng dè chừng, giữ khoảng
cách, khó duy trì tình bạn thân thiết lâu dài.

Nơi công sở, đương số đặt yêu cầu cao về sự chỉn chu, nguyên tắc và minh bạch.
Sự khắt khe ấy có thể dẫn đến bất đồng với đồng nghiệp hay cấp dưới.`,
  },

  {
    id: 'dau-quan-thien-di-tram-lang-thi-phi',
    title: 'Đẩu Quân tại Thiên Di - Trầm lặng dễ vướng thị phi',
    sao: ['Đẩu Quân'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `Khi Đẩu Quân tọa Thiên Di, đương số mang khí chất trầm lặng và hay
tính toán. Người ngoài dễ hiểu lầm là lạnh lùng, "sống chỉ biết mình". Đương
số ra ngoài ít nói ít cười, mất nhiều thời gian để tạo thiện cảm, nên dễ vướng
thị phi không đáng có.

Bất lợi rõ rệt nhất là khó xây dựng được hình ảnh quảng giao, dù năng lực và
phẩm chất của đương số vốn không tệ.`,
  },

  {
    id: 'dau-quan-tat-ach-than-kinh-cang-thang',
    title: 'Đẩu Quân tại Tật Ách - Thần kinh căng thẳng mất ngủ',
    sao: ['Đẩu Quân'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `Khi Đẩu Quân tọa Tật Ách, đương số thường nghĩ nhiều, lo xa, thần
kinh luôn trong trạng thái căng thẳng. Tâm trí lúc nào cũng cân đo thiệt hơn
nên dễ mất ngủ và lo âu kéo dài.

Một số đương số phải đối mặt với bệnh huyết áp, các vấn đề về thần kinh hoặc
trầm cảm, do áp lực vô hình tích tụ qua năm tháng.`,
  },

  {
    id: 'dau-quan-tat-ach-thien-hinh-kinh-duong-mo-xe',
    title: 'Đẩu Quân + Thiên Hình/Kình Dương tại Tật Ách - Nguy cơ mổ xẻ',
    sao: ['Đẩu Quân'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Hình', 'Kình Dương'],
    doUuTien: 65,
    tomTat: `Khi Đẩu Quân tọa Tật Ách đi cùng Thiên Hình hay Kình Dương, bệnh
tật của đương số nghiêng về hướng mổ xẻ, châm chích, can thiệp dao kéo. Đương
số cần đề phòng các tình huống phải phẫu thuật.`,
  },

  {
    id: 'dau-quan-tai-bach-giu-tien-rach-roi',
    title: 'Đẩu Quân tại Tài Bạch - Tay hòm chìa khóa',
    sao: ['Đẩu Quân'],
    cung: ['Tài Bạch'],
    doUuTien: 78,
    tomTat: `Khi Đẩu Quân tọa Tài Bạch, tiền vào tay đương số không dễ thất
thoát. Đương số biết kiếm tiền và biết giữ tiền, đặc biệt giỏi tính toán; tiêu
xài chừng mực, rạch ròi từng khoản, tính kỹ đến mức không lệch một xu.

Đương số phù hợp với những công việc đòi hỏi độ chính xác cao như kế toán,
kiểm toán, tài chính, quản lý tài sản.

Khi hội cát tinh, đương số giữ vai trò "tay hòm chìa khóa" trong nội bộ gia
đình, tập đoàn hay cơ quan nhà nước.`,
  },

  {
    id: 'dau-quan-tu-tuc-hiem-muon-it-con',
    title: 'Đẩu Quân tại Tử Tức - Hiếm muộn ít con',
    sao: ['Đẩu Quân'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Khi Đẩu Quân tọa Tử Tức, đường con cái của đương số thường có dấu
hiệu hiếm muộn, sinh nở chậm trễ và ít con. Tính chất này gần giống với các
sao Cô Thần, Quả Tú, Lộc Tồn.

Quan hệ cha mẹ - con cái có nhiều khoảng cách. Con cái cẩn trọng, khó chiều,
có phần khắt khe khó gần. Tình cảm vẫn có nhưng sống chung như nước với lửa,
mỗi người một ý — kiểu "mạnh ai nấy sống" trong cùng một mái nhà.`,
  },

  {
    id: 'dau-quan-phu-the-con-dao-hai-luoi',
    title: 'Đẩu Quân tại Phu Thê - Con dao hai lưỡi',
    sao: ['Đẩu Quân'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `Khi Đẩu Quân tọa Phu Thê, sao này đóng vai trò con dao hai lưỡi
trong tình duyên của đương số.

Mặt xấu: đương số khó mở lòng, bạn đời ít có dịp thấu hiểu trọn vẹn. Tính khí
cẩn trọng, khắt khe đôi khi chuyển thành cố chấp, khiến hôn nhân dễ rơi vào
cảnh "cơm không lành, canh chẳng ngọt". Tình trạng này càng nặng khi đi cùng
hung sát.

Mặt tốt: chính sự nghiêm túc và lối sống có chừng mực lại trở thành lá chắn,
ngăn chặn thói đào hoa, phong lưu, dễ dãi; tiết chế dục tính và giữ gìn lòng
chung thủy, tránh được những tình cảm ngoài luồng.

Đương số rất kén chọn bạn đời, nhưng một khi tìm được người xứng đôi vừa ý
thì hết mực trân trọng và giữ gìn.`,
  },

  {
    id: 'dau-quan-huynh-de-anh-em-kho-hoa-hop',
    title: 'Đẩu Quân tại Huynh Đệ - Anh em khó hòa hợp',
    sao: ['Đẩu Quân'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Khi Đẩu Quân tọa Huynh Đệ, anh chị em ruột của đương số khó hòa
hợp với nhau. Cách cục này báo hiệu gia đình ít anh chị em; nếu đông đúc thì
cũng khó tìm được tiếng nói chung.

Khi gặp Cô Thần, Quả Tú, Lộc Tồn, Vũ Khúc hay Thất Sát, đương số rơi vào cảnh
"có anh em mà chẳng được nhờ" — cùng dòng máu, cùng mái nhà nhưng trong lòng
luôn có khoảng cách.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // HẠN VẬN
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'dau-quan-han-kinh-hinh-kiep-pha-toai-mo-xe',
    title: 'Hạn Đẩu Quân + Kình Dương/Thiên Hình/Địa Kiếp/Phá Toái - Cưa cắt mổ xẻ',
    sao: ['Đẩu Quân'],
    ketHop: ['Kình Dương', 'Thiên Hình', 'Địa Kiếp', 'Phá Toái'],
    doUuTien: 60,
    tomTat: `Khi xét hạn, cách luận theo sao đơn lẻ không còn chính xác. Đẩu
Quân chỉ là một mảnh ghép nhỏ trong cục diện; phải đi kèm nhóm sát tinh mạnh
gồm Kình Dương, Thiên Hình, Địa Kiếp, Phá Toái, đồng thời cung Tật Ách và
Thiên Di trên lá số phải có dấu hiệu hình thương họa hại, mới đủ tạo cục diện
đáng lo.

Khi hội đủ các yếu tố trên, đương số có nguy cơ mổ xẻ phẫu thuật, cưa cắt
châm chích trong vận hạn này.`,
  },

  {
    id: 'dau-quan-han-khoi-viet-hoa-quyen-thang-tien',
    title: 'Hạn Đẩu Quân + Khôi Việt/Hóa Quyền - Đảm nhiệm nhiệm vụ mới',
    sao: ['Đẩu Quân'],
    ketHop: ['Thiên Khôi', 'Thiên Việt', 'Hóa Quyền'],
    doUuTien: 60,
    tomTat: `Khi hạn Đẩu Quân gặp Thiên Khôi, Thiên Việt cùng Hóa Quyền, đương
số bước vào thời điểm được giao phó trách nhiệm mới, đặc biệt trong các công
việc quản lý, sắp xếp tài chính, ngân sách. Tính cẩn trọng và ngăn nắp giúp
đương số ghi điểm với cấp trên, dễ được tin tưởng giao phó những vị trí cần
sự tỉ mỉ và chính xác cao.

Khi cát tinh đi cùng Khôi Việt và Hóa Quyền, đương số được cất nhắc vượt bậc,
thăng tiến nhanh hơn lộ trình bình thường.`,
  },
];
