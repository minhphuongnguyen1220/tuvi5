import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO BỆNH - Hỏa, Bại Tinh nhỏ.
 *
 * Vị trí THỨ 7 trong Vòng Trường Sinh 12 sao:
 * Trường Sinh: Mộc Dục: Quan Đới: Lâm Quan: Đế Vượng: Suy
 * BỆNH: Tử: Mộ: Tuyệt: Thai: Dưỡng
 *
 * An theo CỤC.
 *
 * Đặc trưng:
 * - Sau giai đoạn "Suy" già đi, xuống sức: tới giai đoạn ĐỔ BỆNH
 * - Trên cơ thể xuất hiện nhiều bệnh tật do cơ quan chức năng suy giảm
 * - Tính chất "MƯA DẦM THẤM LÂU" — bệnh âm ỉ, không phát tác dữ dội
 * - Sao nhỏ — không phải đại hung tinh, nhưng kéo dài
 * - Tướng mạo: gầy gò, xanh xao, vàng vọt, dáng chậm rãi
 * - Tinh thần: không phấn chấn, lười, "việc nhà thì nhác việc chú bác thì siêng"
 * - LƯU Ý: Luận sao Bệnh ở Mệnh phải phối hợp với cung Tật Ách + Phúc Đức
 */
export const luanGiai_Benh: DoanLuanGiai[] = [
  {
    id: 'benh-tinh-chat-chung',
    title: 'Bệnh - Đặc tính chung',
    sao: ['Bệnh'],
    doUuTien: 33,
    tomTat: `**Bệnh** là phụ tinh thuộc nhóm bại tinh nhỏ, đứng ở vị trí thứ bảy
trong vòng Trường Sinh, ngũ hành Hỏa. Sao này tiếp nối ngay sau giai đoạn Suy
— khi cơ thể đã già đi và xuống sức, các cơ quan chức năng không còn đủ sức
chống lại tác nhân gây bệnh, tới đoạn đổ bệnh thực sự.

Bệnh không phải đại hung tinh, song mang tính chất "mưa dầm thấm lâu": căn
bệnh âm ỉ chứ ít phát tác dữ dội, không nặng lắm nhưng kéo dài. Đương số
thường rơi vào trạng thái suy nhược toàn diện — kém ăn, kém ngủ, kém nghỉ
ngơi, thiếu bồi dưỡng — nên dễ nhiễm lạnh, sổ mũi, nhức đầu, đúng kiểu "nắng
không ưa, mưa không chịu".

Khi luận sao Bệnh tại Mệnh, cần phối hợp đồng thời với cung Tật Ách (chủ
bệnh tật) và Phúc Đức (chủ tinh thần phúc phần) mới xác định được mức độ
ảnh hưởng thực sự.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'benh-tang-ho-khoc-hu-benh-phu-tat-ach-nan-y',
    title: 'Bệnh + Tang Hổ + Khốc Hư + Bệnh Phù tại Tật - Bệnh nan y',
    sao: ['Bệnh'],
    cung: ['Tật Ách'],
    ketHop: ['Tang Môn', 'Bạch Hổ', 'Thiên Khốc', 'Thiên Hư', 'Bệnh Phù'],
    doUuTien: 65,
    tomTat: `Khi Bệnh hội đầy đủ Tang Môn, Bạch Hổ, Thiên Khốc, Thiên Hư cùng
Bệnh Phù tại Tật Ách mà không có Tuần hay Triệt án ngữ, đương số dễ mắc bệnh
nan y, cả đời phải lo toan vì bệnh tật.

Trục Tang - Hổ mang sắc thái kiếp nghiệp; Khốc - Hư báo hiệu bệnh trầm kha;
Bệnh Phù lại thêm tính mãn tính lười biếng. Cộng dồn lại, bệnh của đương số
thuộc loại khó chữa, kéo dài cả đời.

Hóa giải duy nhất là Tuần Triệt án ngữ làm giảm tác động, kèm theo Quan
Phúc, Tứ Đức cùng Quang Quý hỗ trợ thì mới mong giảm nhẹ.`,
  },

  {
    id: 'benh-luong-tuong-quang-quy-quan-phuc-nghe-thuoc',
    title: 'Bệnh + Thiên Lương + Thiên Tướng + Quang Quý + Quan Phúc tại Quan - Nghề thuốc',
    sao: ['Bệnh'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Lương', 'Thiên Tướng', 'Ân Quang', 'Thiên Quan'],
    doUuTien: 60,
    tomTat: `Khi Bệnh đóng tại Quan Lộc cùng Thiên Lương, Thiên Tướng, Ân Quang
và Thiên Quan, đương số hợp cách nghề thuốc — đây chính là bộ biến nguy
thành cơ, hóa cái xấu của Bệnh thành nghề cứu người.

Phân tích từng thành phần:

- Thiên Lương cùng Thiên Tướng mang ý phúc thiện cứu khổ
- Ân Quang cùng Thiên Quý đại diện cho quý nhân giúp đỡ
- Thiên Quan cùng Thiên Phúc là phúc thiện thiên ban
- Bệnh đi cùng các sao này chuyển thành sứ mệnh chăm sóc người khác

Đương số phù hợp với các nghề thầy lang, y tá, điều dưỡng, hoặc các lĩnh
vực y dược, trị liệu — càng dấn thân càng phát huy được cái duyên của
mình.`,
  },

  {
    id: 'benh-hoa-ky-dai-hao-thien-khong-hao-tai-vi-benh',
    title: 'Bệnh + Hóa Kỵ + Đại Hao + Thiên Không tại Tài - Hao tài vì bệnh',
    sao: ['Bệnh'],
    cung: ['Tài Bạch'],
    ketHop: ['Hóa Kỵ', 'Đại Hao', 'Thiên Không'],
    doUuTien: 55,
    tomTat: `Khi Bệnh tại Tài Bạch hội cùng Hóa Kỵ, Đại Hao và Thiên Không,
đương số hao tổn tiền tài chính vì bệnh tật. Tiền của ra đi không phải vì
ăn chơi hay đầu tư thất bại, mà do những khoản chi bất ngờ liên quan đến
sức khỏe — của bản thân hoặc của người thân cần chăm sóc.

Tình thế thường rơi vào cảnh "tiền mất tật mang": vừa tốn kém vừa không
giải quyết được tận gốc. Đương số nên chủ động chuẩn bị tài chính dự phòng
cho rủi ro sức khỏe ngay từ giai đoạn còn vững vàng.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // BỆNH TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'benh-tai-menh',
    title: 'Bệnh tại Mệnh',
    sao: ['Bệnh'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Đương số có **Bệnh** thủ Mệnh thường mang tướng mạo gầy gò ốm yếu,
sắc diện nhợt nhạt, da dẻ ít hồng hào mà thiên về xanh xao, vàng vọt. Người
ngoài hay nhận xét chủ mệnh thiếu sức sống; dáng điệu chậm rãi, không lanh
lợi, lực sinh mệnh tự thân không thật vững vàng.

Về sức khỏe, cơ thể đương số dễ đau ốm bệnh tật, ăn kém ngủ ít, tinh thần
không dồi dào. Chủ mệnh dễ nhiễm lạnh, sổ mũi, nhức đầu, đúng kiểu "nắng
không ưa, mưa không chịu". Đại vận đầu tiên là giai đoạn sao Bệnh gây ảnh
hưởng rõ nét nhất.

Về tinh thần và tính cách, đương số không phấn chấn, không tráng kiện;
ngại hoạt động, đôi khi hơi lười, thích nằm hơn làm. Điểm thú vị là chủ
mệnh "việc nhà thì nhác, việc chú bác thì siêng" — ở nhà thì uể oải, ra
ngoài lại cuồng nhiệt năng nổ. Càng ở nhà nhiều, đương số càng dễ chán
nản và sa sút tinh thần.

Bù lại, sao Bệnh có vài đặc điểm có lợi:

- Lợi khi đi xa
- Hợp lấy vợ nhà có điều kiện
- Cung Phúc Đức tốt sẽ đỡ được nhiều

Cần lưu ý: Bệnh ở Mệnh không có nghĩa đương số thật sự đang mang bệnh hay
sẵn bệnh, mà chỉ nói lên lực sinh mệnh không vững vàng — dễ bệnh, dễ ốm,
dễ suy nhược nếu không biết bảo dưỡng.`,
  },

  {
    id: 'benh-tai-phu-mau',
    title: 'Bệnh tại Phụ Mẫu',
    sao: ['Bệnh'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Khi **Bệnh** đóng tại Phụ Mẫu, sức khỏe cha mẹ đương số dễ ốm yếu,
bản thân các cụ cũng hơi lười và ít quan tâm chăm sóc con cái. Quan hệ giữa
chủ mệnh với phụ mẫu vì thế thiếu phần gắn kết.

Thời thơ ấu, đương số thường thiếu sự quan tâm, chăm sóc đầy đủ từ cha mẹ —
có thể vì hoàn cảnh mưu sinh khó khăn, cũng có thể vì bản thân cha mẹ không
chú trọng việc gắn bó với con. Khi đã thiếu gần gũi, đương số dễ cảm thấy
thiệt thòi về tình cảm và khó tâm sự, sẻ chia với cha mẹ ngay cả khi đã
trưởng thành.`,
  },

  {
    id: 'benh-tai-phuc-duc',
    title: 'Bệnh tại Phúc Đức',
    sao: ['Bệnh'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `Khi **Bệnh** cư Phúc Đức, mồ mả và bàn thờ tổ tiên ít được quan
tâm chăm sóc; phần âm phần của ông bà tổ tiên đến đời đương số nảy sinh
vấn đề, cần tu dưỡng và trông nom lại. Trong họ hàng nhiều người bị bệnh,
hay ốm hay đau — dấu hiệu cho thấy dòng họ đang bị mất kết nối tâm linh,
thiếu phúc âm truyền đời.

Về tâm tính, đương số ít tin vào tâm linh hay nhân quả, không mặn mà với
việc thờ phụng gia tiên hoặc tu dưỡng nội tâm. Phải tới khi vấp ngã giữa
đường đời, chủ mệnh mới bắt đầu tỉnh ngộ và quay về với phần hồn cốt của
gia tộc.

Sao Bệnh ở Phúc Đức ám chỉ sự bộc phát của những vấn đề liên quan đến đời
sống tâm linh — buộc đương số phải chú ý, không thể tiếp tục lơ là.`,
  },

  {
    id: 'benh-tai-dien-trach',
    title: 'Bệnh tại Điền Trạch',
    sao: ['Bệnh'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Khi **Bệnh** đóng tại Điền Trạch, nhà cửa của đương số ít được
quan tâm, chủ mệnh lười dọn dẹp nên không gian sống thường bừa bộn, bụi
bặm. Tổ ấm vì thế biến thành chốn hao tổn năng lượng thay vì nơi nạp lại
khí lực.

Phong thủy nơi ở thường không tốt, khí trường trong nhà trì trệ, khiến chủ
mệnh ở nhà nhiều thì hay bị ốm đau, suy nhược; tâm trạng, sức khỏe và vận
khí đều bị ảnh hưởng. Một đặc điểm khác là nhà thuộc dạng dễ đông con.

Lời khuyên gói gọn ở câu "nhà sạch thì mát, bát sạch ngon cơm" — chăm sóc
không gian sống chính là cách chăm sóc sức khỏe và tinh thần một cách trực
tiếp nhất.`,
  },

  {
    id: 'benh-tai-quan-loc',
    title: 'Bệnh tại Quan Lộc',
    sao: ['Bệnh'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `Khi **Bệnh** cư Quan Lộc, môi trường làm việc của đương số dễ
mang tính độc hại — liên quan tới hóa chất, vệ sinh, bệnh tật — và bản
thân chủ mệnh cũng giảm sự quan tâm với sự nghiệp, công việc.

Sự nghiệp dễ rơi vào giai đoạn suy trầm: đương số thiếu động lực, không
còn hứng thú công việc, cảm thấy mệt mỏi và mất phương hướng. Đôi khi chủ
mệnh duy trì công việc chỉ vì trách nhiệm chứ không còn lý tưởng để theo
đuổi.

Trường hợp Bệnh hợp với cát tinh như Thiên Lương, Thiên Tướng, Ân Quang,
Thiên Quý, Thiên Quan, Thiên Phúc, đương số nên theo nghề thuốc — thầy
lang, y tá, y dược, điều dưỡng, trị liệu. Đây là cách biến nguy thành cơ,
chuyển sao Bệnh từ điểm yếu thành nghề cứu người.

Mảng hôn nhân lại có nét tích cực: người hôn phối của chủ mệnh thường
năng động, nhiệt huyết, giúp ích cho đương số rất nhiều trong cuộc sống.`,
  },

  {
    id: 'benh-tai-no-boc',
    title: 'Bệnh tại Nô Bộc',
    sao: ['Bệnh'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Khi **Bệnh** đóng tại Nô Bộc, bạn bè quanh đương số thuộc dạng
hơi kém, hơi lười, nhiều bệnh nhiều tật; bản thân chủ mệnh cũng không quá
quan tâm đến bạn bè. Đồng nghiệp và bằng hữu thường thiếu năng lực hoặc
không thật lòng.

Đương số dễ rơi vào cảnh "làm ơn mắc oán", phải đứng mũi chịu sào, việc
gì cũng ôm vào người mà rốt cuộc mệt đầu lại chẳng được ghi công. Khi sát
bại tinh hội thêm vào, bạn bè trở nên xấu hẳn, nhiều bệnh hoạn; chủ mệnh
phải đề phòng kẻ tiểu nhân để tránh ảnh hưởng tới sự phát triển công
việc.`,
  },

  {
    id: 'benh-tai-thien-di',
    title: 'Bệnh tại Thiên Di',
    sao: ['Bệnh'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `Khi **Bệnh** cư Thiên Di, đương số vốn là người năng nổ nhiệt
huyết, song lại ít quan tâm tham gia các hoạt động bên ngoài và ít để ý
đến mọi người xung quanh. Đúng kiểu "chim lồng quen hơi tổ" — chủ mệnh
chỉ thấy thoải mái khi ở nhà, mức độ năng động bị giảm sút rõ rệt. Dù
trong lòng vẫn mong muốn dấn thân ra ngoài, đương số hay gặp cản trở.

Về phương diện đi xa, chủ mệnh dễ ốm đau, gặp cản trở và mệt mỏi tâm lý
trong các chuyến công tác hay du lịch dài ngày. Cần đặc biệt cẩn trọng
với môi trường xung quanh để tránh đau ốm khi ra khỏi vùng quen thuộc.`,
  },

  {
    id: 'benh-tai-tat-ach',
    title: 'Bệnh tại Tật Ách',
    sao: ['Bệnh'],
    cung: ['Tật Ách'],
    doUuTien: 80,
    tomTat: `Khi **Bệnh** đóng đúng tại Tật Ách, đương số có sức khỏe kém —
đây là vị trí chủ về bệnh tật, đau yếu, suy nhược một cách trực tiếp.
Chủ mệnh thường buồn rầu, khờ khạo, hay nhầm lẫn; cơ thể hư nhược, tật
bệnh, lao khổ và dễ nhiễm bệnh kéo dài, khó dứt điểm.

Đáng ngại nhất là khi gặp bộ Tang Môn - Bạch Hổ - Thiên Khốc - Thiên Hư
cộng thêm Bệnh Phù, mà không có Tuần Triệt án ngữ. Lúc đó đương số dễ
mắc bệnh nan y, cả đời phải lo toan bệnh tật.

Hóa giải dựa vào Tuần Triệt án ngữ, cùng các sao trợ lực như Thiên Quan,
Thiên Phúc, Tứ Đức, Ân Quang, Thiên Quý. Thời nay y khoa phát triển nên
cảnh "vô phương cứu chữa" cũng giảm bớt phần nào so với cổ thư.`,
  },

  {
    id: 'benh-tai-tai-bach',
    title: 'Bệnh tại Tài Bạch',
    sao: ['Bệnh'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `Khi **Bệnh** cư Tài Bạch, ý chí kiếm tiền của đương số không cao,
mang khí chất bạc nhược và thiếu đầu óc thực tế. Tư duy kiếm tiền thiên về
thụ động, thiếu tham vọng; chủ mệnh dễ chán nản trong việc mưu sinh. Dù
có nhạy bén với tiền bạc thì tâm lý cũng nhanh mệt mỏi và bỏ cuộc.

Khi Bệnh tại Tài Bạch lại đi cùng Hóa Kỵ và sát bại tinh, đương số hao tổn
tiền tài chủ yếu vì bệnh tật. Những khoản chi bất ngờ liên quan đến sức
khỏe đẩy chủ mệnh vào cảnh "tiền mất tật mang" — vừa hết tiền vừa không
khỏe lại được.`,
  },

  {
    id: 'benh-tai-tu-tuc',
    title: 'Bệnh tại Tử Tức',
    sao: ['Bệnh'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Khi **Bệnh** đóng tại Tử Tức, đường con cái của đương số ít người,
con sinh ra dễ ốm đau bệnh tật hoặc khó nuôi.

Khi cung này hội thêm nhiều sát bại tinh thuộc nhóm hung sát bại hình kỵ,
con cái dễ mắc dị tật, đồng thời tình cảm giữa chủ mệnh và con cái có sự
xa cách rõ rệt.

Lời khuyên cho đương số là chú trọng sức khỏe sinh sản ngay từ trước khi
có con, giữ chế độ dưỡng thai cẩn thận, và học cách lắng nghe, thấu hiểu
con từ sớm để tránh khoảng cách tâm lý khi con lớn lên.`,
  },

  {
    id: 'benh-tai-tu-tuc-nu-kho-de',
    title: 'Bệnh tại Tử Tức - nữ khó đẻ sinh nở khó',
    sao: ['Bệnh'],
    cung: ['Tử Tức'],
    gioiTinh: 'Nữ',
    doUuTien: 68,
    tomTat: `Riêng với nữ mệnh có **Bệnh** thủ Tử Tức, đương số dễ mắc cảnh khó
đẻ và gặp khó khăn trong sinh nở. Sức khỏe sinh sản của chủ mệnh thuộc
dạng yếu, vì thế cần khám tiền sản kỹ lưỡng cùng chế độ dưỡng thai chu
đáo trong suốt thai kỳ.`,
  },

  {
    id: 'benh-tai-phu-the',
    title: 'Bệnh tại Phu Thê',
    sao: ['Bệnh'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `Khi **Bệnh** cư Phu Thê, hai vợ chồng đương số ít quan tâm nhau
trong sinh hoạt thường ngày. Người hôn phối hơi lười, ý chí không cao,
sức khỏe dễ ốm đau tật bệnh; sức đề kháng kém nên cần được tẩm bổ và
tăng cường thường xuyên.

Theo cách đối ứng Bệnh - Trường Sinh xung chiếu, đương số có sự nghiệp
công danh dễ phát triển hơn người hôn phối — tức là chủ mệnh là trụ cột
trong cặp đôi này.

Đây cũng là cách của những người hi sinh quá nhiều trong tình yêu: tình
cảm dồn về một phía khiến đối phương cảm thấy ngột ngạt và không còn
muốn quan tâm đáp lại. Đương số cần học cách thấu hiểu từ những điều
nhỏ nhất thay vì cố gắng lo toan tất cả.`,
  },

  {
    id: 'benh-tai-huynh-de',
    title: 'Bệnh tại Huynh Đệ',
    sao: ['Bệnh'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Khi **Bệnh** đóng tại Huynh Đệ, anh chị em ruột của đương số hơi
lười, hay bệnh tật ốm đau, thể trạng nhìn chung kém.

Về quan hệ, anh chị em có thể sống xa nhau nên tình cảm dần phai nhạt;
mối quan hệ trong gia đình thiếu sự chia sẻ, ít gặp gỡ nên dễ trở nên
lạnh nhạt theo thời gian. Dù máu mủ ruột rà, không vun đắp thì tình cảm
cũng phai mờ — đương số nên chủ động giữ liên lạc nếu muốn duy trì sự gắn
bó với anh em.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // BỆNH VÀO ĐẠI VẬN
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'benh-vao-dai-van-tuoi-day-thi',
    title: 'Bệnh vào đại vận - Tuổi dậy thì',
    sao: ['Bệnh'],
    doUuTien: 50,
    tomTat: `Khi **Bệnh** nhập đại vận đúng vào tuổi dậy thì, lại có hung tinh
xung chiếu, đương số dễ rơi vào hiện tượng chậm lớn, thiếu dinh dưỡng,
rối loạn nội tiết, dáng người thấp bé gầy yếu, sức đề kháng kém hẳn so
với bạn cùng lứa.

Khi luận đoán đại vận này, vẫn cần lấy cung Tật Ách làm trọng điểm và
phối hợp thêm với vận hạn để xác định chính xác mức độ ảnh hưởng.`,
  },

  {
    id: 'benh-vao-dai-van-trung-nien',
    title: 'Bệnh vào đại vận - Trung niên 25-45 tuổi',
    sao: ['Bệnh'],
    doUuTien: 50,
    tomTat: `Khi **Bệnh** nhập đại vận trung niên trong khoảng 25-45 tuổi, mức
độ nghiêm trọng thường không thể hiện rõ — nhất là khi đại vận có thêm
các sao cát lợi đi kèm.

Sao Bệnh ở giai đoạn này chủ yếu chỉ ra quá trình đương số hi sinh sức
khỏe để đánh đổi sự nghiệp: lao động cường độ cao, làm việc quá sức để
đổi lấy thành công vật chất.

Lời khuyên cho chủ mệnh là biết dừng đúng lúc, không nên "đốt cháy" cơ
thể vô tội vạ. Nền tảng sức khỏe mất đi giai đoạn này sẽ phải trả giá
nặng vào hậu vận.`,
  },

  {
    id: 'benh-vao-dai-van-hau-van',
    title: 'Bệnh vào đại vận - Hậu vận tuổi già',
    sao: ['Bệnh'],
    doUuTien: 50,
    tomTat: `Khi **Bệnh** nhập đại vận tuổi già, sức khỏe đương số suy yếu
thêm một bậc so với thông thường — vốn đã đi xuống do tuổi tác hoặc bệnh
nền, nay đại vận có Bệnh càng là tín hiệu suy yếu rõ rệt.

Cảnh báo "gió lay cây yếu" rất ứng với giai đoạn này: chỉ cần một tác
động nhỏ cũng có thể dẫn đến biến chứng lớn. Chủ mệnh cần điều chỉnh
nghiêm ngặt chế độ ăn uống và ngủ nghỉ, thăm khám kịp thời và thận trọng
với mọi triệu chứng dù nhỏ.`,
  },
];
