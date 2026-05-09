import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO TƯỚNG QUÂN - Mộc, Võ Tinh + Quyền Tinh, vòng Lộc Tồn (vị trí 5)
 * Là một trong 4 sao của bộ Binh Hình Tướng Ấn
 */
export const luanGiai_TuongQuan: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung sao Tướng Quân
  // ============================================================
  {
    id: 'tuong-quan-tinh-chat-chung',
    title: 'Tướng Quân - Đặc tính chung',
    sao: ['Tướng Quân'],
    doUuTien: 30,
    tomTat: `**Tướng Quân** là cát tinh nằm ở vị trí thứ năm của vòng Lộc Tồn /
Bác Sĩ, ngũ hành Mộc, mang đặc tính Võ tinh kiêm Quyền tinh — hình tượng vị
tướng cầm quân, biểu trưng cho uy quyền và mệnh lệnh.

Tướng Quân thuộc bộ "Binh Hình Tướng Ấn" gồm Phục Binh, Thiên Hình, Tướng Quân
và Quốc Ấn — bộ sao uy dũng chỉ về quyền tước và võ nghiệp.

Cốt lõi tính cách của đương số có Tướng Quân tọa thủ:

- Cương trực, thẳng tính, nóng tính, ngang tàng và bất khuất
- Can đảm, dũng mãnh, hiên ngang, đôi khi làm càn và táo bạo
- Kiêu căng, có óc lãnh tụ, mang tinh thần sứ quân và ham cầm quyền

Cần phân biệt Tướng Quân với Hóa Quyền: Hóa Quyền chủ sự nắm quyền bính thật
sự, còn Tướng Quân chỉ thể hiện sự khao khát quyền bính — háo danh, hiếu thắng,
có chí muốn nắm quyền chứ chưa chắc đã nắm được.`,
  },

  // ============================================================
  // 2. Bộ Binh Hình Tướng Ấn
  // ============================================================
  {
    id: 'tuong-quan-binh-hinh-an',
    title: 'Tướng Quân + Phục Binh + Thiên Hình + Quốc Ấn = "Binh Hình Tướng Ấn"',
    sao: ['Tướng Quân', 'Phục Binh', 'Thiên Hình', 'Quốc Ấn'],
    ketHop: ['Phục Binh', 'Thiên Hình', 'Quốc Ấn'],
    doUuTien: 75,
    tomTat: `Khi Tướng Quân hội đủ Phục Binh, Thiên Hình và Quốc Ấn, đương số có
được bộ "Binh Hình Tướng Ấn" — bộ sao uy dũng bậc nhất, chỉ về quyền tước và võ
nghiệp.

Hình tượng cách cục: có đầy đủ binh (Phục Binh), uy (Thiên Hình), tướng (Tướng
Quân) và ấn (Quốc Ấn) — tướng lĩnh thực thụ, có thể cầm quân và cầm quyền.

Đây là cách rất quý cho đương số theo võ nghiệp, làm lãnh đạo, công tác trong
quân đội hoặc công an.`,
  },

  // ============================================================
  // 3. Tướng Quân + Phục Binh + Thiên Mã - tướng có quân
  // ============================================================
  {
    id: 'tuong-quan-phuc-binh-thien-ma',
    title: 'Tướng Quân + Phục Binh + Thiên Mã - "Tướng có quân, có uy"',
    sao: ['Tướng Quân'],
    ketHop: ['Phục Binh', 'Thiên Mã'],
    doUuTien: 65,
    tomTat: `Khi Tướng Quân hội cùng Phục Binh và Thiên Mã, đương số đắc cách "tướng
có quân, có uy" — đủ bộ và hợp cách.

Theo quan điểm cổ, cả Thiên Tướng lẫn Tướng Quân đều cần đi với Phục Binh và
Thiên Mã mới thực sự là tướng quân thực thụ: Phục Binh tượng trưng cho quân lính
để điều động, Thiên Mã là ngựa để xuất chinh. Có cả hai thì vị tướng mới đủ
phương tiện và lực lượng để chinh chiến.`,
  },

  // ============================================================
  // 4. Tướng Quân + Thiên Tướng - Lưỡng Tướng trùng phùng
  // ============================================================
  {
    id: 'tuong-quan-thien-tuong',
    title: 'Tướng Quân + Thiên Tướng - "Lưỡng Tướng trùng phùng"',
    sao: ['Tướng Quân'],
    ketHop: ['Thiên Tướng'],
    doUuTien: 70,
    tomTat: `Khi Tướng Quân hội cùng Thiên Tướng, đương số có cách "lưỡng tướng
trùng phùng" — uy quyền hiển hách. Nếu hai sao đồng cung thì cách càng mạnh, ý
nghĩa quân sự được nhấn mạnh rõ rệt.`,
  },

  {
    id: 'tuong-quan-thien-tuong-nu-menh',
    title: 'Tướng Quân + Thiên Tướng - Nữ mệnh đảm lược',
    sao: ['Tướng Quân'],
    ketHop: ['Thiên Tướng'],
    gioiTinh: 'Nữ',
    doUuTien: 65,
    tomTat: `Nữ mệnh có Tướng Quân hội cùng Thiên Tướng thường đảm lược, tài ba,
hoạt động và quyết đoán như nam giới. Trong gia đình, đương số rất có uy quyền
và thường lấn át uy quyền của chồng.`,
  },

  // ============================================================
  // 5. Tướng Quân tại Mệnh
  // ============================================================
  {
    id: 'tuong-quan-tai-menh',
    title: 'Tướng Quân tại Mệnh - Khí phách mạnh mẽ',
    sao: ['Tướng Quân'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Tướng Quân thủ Mệnh là vị tướng nắm quyền điều động binh sĩ trong
tay — đặt cạnh các sao đầu não khác để dễ hình dung: Tử Vi là Vua, Thiên Phủ là
Hoàng Hậu, Thiên Tướng là quyền thần, còn Tướng Quân là vị tướng cầm quân ngoài
trận.

Về tướng mạo, đương số có dáng vẻ oai phong, tạng người cao lớn khỏe khoắn, bước
đi vững vàng, khí chất khó lẫn vào đám đông.

Về tính cách:

- Thẳng thắn, cương trực, giàu tinh thần dấn thân
- Sẵn sàng đối diện thử thách, thích chỉ huy, mang tố chất thủ lĩnh
- Mặt trái là dễ sa vào nóng nảy, hiếu thắng, đôi khi liều lĩnh thiếu cân nhắc

Bản chất sâu xa của Tướng Quân là ham cầm quyền, háo danh và hiếu thắng. Đương
số khao khát quyền lực nhưng không nhất thiết nắm được trong tay như khi có Hóa
Quyền.`,
  },

  // ============================================================
  // 6. Nữ mệnh có Tướng Quân - đảm lược + ghen tuông
  // ============================================================
  {
    id: 'tuong-quan-nu-menh',
    title: 'Nữ mệnh có Tướng Quân - Đảm lược + ghen tuông',
    sao: ['Tướng Quân'],
    cung: ['Mệnh'],
    doUuTien: 75,
    tomTat: `Nữ mệnh có Tướng Quân thủ Mệnh thường mang tính cách mạnh bạo như
nam nhi — đảm lược, tài ba, hoạt động không kém nam giới và có khả năng làm sự
nghiệp lớn.

Mặt cảm xúc của đương số khá đặc biệt: ghen tuông mạnh, biểu lộ cảm xúc một
cách mãnh liệt và khó kiềm chế.

Mặt trái của tính cương cường là dễ lấn át uy quyền của chồng trong gia đình.
Nếu chồng không đủ bản lĩnh hoặc cũng cương cường, hôn nhân dễ rơi vào xung
đột.`,
  },

  // ============================================================
  // 7. Tướng Quân tại Phụ Mẫu
  // ============================================================
  {
    id: 'tuong-quan-tai-phu-mau',
    title: 'Tướng Quân tại Phụ Mẫu',
    sao: ['Tướng Quân'],
    cung: ['Phụ Mẫu'],
    doUuTien: 72,
    tomTat: `Khi Tướng Quân cư Phụ Mẫu, cha mẹ của đương số là người có tiếng
tăm, có uy quyền, địa vị và tiếng nói quan trọng trong xã hội hoặc trong công
việc.

Cha mẹ có khả năng dẫn dắt và định hướng tương lai cho con cái. Điều kiện kinh
tế của gia đình nhìn chung khá giả, tạo nền tảng vững chắc giúp đương số phát
triển trong tương lai.`,
  },

  // ============================================================
  // 8. Tướng Quân tại Phúc Đức
  // ============================================================
  {
    id: 'tuong-quan-tai-phuc-duc',
    title: 'Tướng Quân tại Phúc Đức',
    sao: ['Tướng Quân'],
    cung: ['Phúc Đức'],
    doUuTien: 72,
    tomTat: `Tướng Quân cư Phúc Đức có công năng tăng tuổi thọ cho đương số.

Trong dòng họ thường có người làm nên sự nghiệp, phần nhiều theo nghiệp công
an, quân đội hoặc các lực lượng vũ trang. Cũng có gia tộc từng có liệt sĩ hy
sinh nơi chiến trường — truyền thống võ nghiệp và tinh thần dũng cảm trở thành
"bệ phóng vàng" giúp con cháu tự tin bước vào đời với khí phách.

Mặt khác, dù có người làm nên trong họ, các thành viên thường bất hòa với nhau
— ai cũng cá tính mạnh nên dễ xung đột.`,
  },

  // ============================================================
  // 9. Tướng Quân tại Điền Trạch
  // ============================================================
  {
    id: 'tuong-quan-tai-dien-trach',
    title: 'Tướng Quân tại Điền Trạch',
    sao: ['Tướng Quân'],
    cung: ['Điền Trạch'],
    doUuTien: 70,
    tomTat: `Tướng Quân cư Điền Trạch giúp đương số gia tăng lợi ích trong việc
tạo dựng nhà cửa và lựa được đất tốt.

Đặc trưng vị trí đất ở thường có:

- Nơi an ninh, có thành quách
- Có cơ sở hành chính, quân sự đầy đủ
- Hoặc vùng đất xưa kia có bờ rào, thành cổ

Khi cung này có thêm nhiều ám tinh, đó là dấu hiệu liên quan đến vong linh nam
giới gắn với đất đai. Mọi quyết định mua bán, xây dựng đều cần đương số cân nhắc
kỹ càng để tránh thiệt hại tài sản, sức khỏe và rủi ro về sau.`,
  },

  // ============================================================
  // 10. Tướng Quân tại Quan Lộc
  // ============================================================
  {
    id: 'tuong-quan-tai-quan-loc',
    title: 'Tướng Quân tại Quan Lộc',
    sao: ['Tướng Quân'],
    cung: ['Quan Lộc'],
    doUuTien: 80,
    tomTat: `Tướng Quân cư Quan Lộc đem lại lợi ích cho công danh và chức vụ —
đương số có uy quyền, có óc lãnh tụ, sức ảnh hưởng đáng kể đối với tổ chức và
cấp dưới.`,
  },

  {
    id: 'tuong-quan-tai-quan-loc-thien-tuong',
    title: 'Tướng Quân + Thiên Tướng tại Quan Lộc - Lưỡng Tướng trùng phùng',
    sao: ['Tướng Quân'],
    ketHop: ['Thiên Tướng'],
    cung: ['Quan Lộc'],
    doUuTien: 75,
    tomTat: `Khi Tướng Quân hội cùng Thiên Tướng tại Quan Lộc, đương số đắc cách
"lưỡng tướng trùng phùng" — uy quyền càng nổi bật, được đồng nghiệp và cấp dưới
kính nể như tướng lĩnh cầm quân.`,
  },

  {
    id: 'tuong-quan-tai-quan-loc-thien-hinh-dac',
    title: 'Tướng Quân + Thiên Hình đắc địa tại Quan Lộc',
    sao: ['Tướng Quân'],
    ketHop: ['Thiên Hình'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    cung: ['Quan Lộc'],
    doUuTien: 75,
    tomTat: `Khi Tướng Quân hội cùng Thiên Hình đắc địa tại Quan Lộc, uy quyền
của đương số càng được nâng cao, tiếng nói được người trên kẻ dưới coi trọng.`,
  },

  {
    id: 'tuong-quan-tai-quan-loc-thien-hinh-ham',
    title: 'Tướng Quân + Thiên Hình lạc hãm tại Quan Lộc',
    sao: ['Tướng Quân'],
    ketHop: ['Thiên Hình'],
    trangThai: ['Hãm'],
    cung: ['Quan Lộc'],
    doUuTien: 75,
    tomTat: `Khi Tướng Quân hội cùng Thiên Hình lạc hãm tại Quan Lộc, công danh
của đương số dễ gặp biến cố — từ vị trí cao có thể bị giáng chức, nghỉ hưu sớm
hoặc gặp tai họa nghề nghiệp.`,
  },

  // ============================================================
  // 11. Tướng Quân tại Nô Bộc
  // ============================================================
  {
    id: 'tuong-quan-tai-no-boc',
    title: 'Tướng Quân tại Nô Bộc',
    sao: ['Tướng Quân'],
    cung: ['Nô Bộc'],
    doUuTien: 70,
    tomTat: `Tướng Quân cư Nô Bộc cho thấy đương số có bè bạn và người giúp việc
đắc lực.

Tuy nhiên, đương số cần thận trọng với các mối quan hệ bạn bè và đồng nghiệp —
tránh để bị lấn át hoặc bị họ lạm quyền nhân danh mình.

Khi cung này hội nhiều cát tinh, đương số có duyên gặp được bạn bè tài giỏi,
sẵn sàng giúp đỡ trong công việc lẫn cuộc sống thường ngày.`,
  },

  // ============================================================
  // 12. Tướng Quân tại Thiên Di
  // ============================================================
  {
    id: 'tuong-quan-tai-thien-di',
    title: 'Tướng Quân tại Thiên Di',
    sao: ['Tướng Quân'],
    cung: ['Thiên Di'],
    doUuTien: 72,
    tomTat: `Tướng Quân cư Thiên Di khiến đương số ra ngoài xã hội có dáng vẻ
oai phong, dễ nhiếp phục được người khác và thể hiện sự giỏi giang, uy tín, năng
lực — được người xung quanh kính nể.

Mặt trái của sự tự tin là dễ sinh kiêu căng, ngạo mạn — đương số có thể tự "gieo
họa vào thân" lúc nào không hay.

Khi cung Thiên Di xung chiếu thêm Phục Binh, Thất Sát, Liêm Trinh Thất Sát, Tử
Phá hoặc Tử Tham, đương số phải đề phòng rắc rối pháp lý, kiện tụng và mâu
thuẫn ngoài xã hội.`,
  },

  // ============================================================
  // 13. Tướng Quân tại Tật Ách
  // ============================================================
  {
    id: 'tuong-quan-tai-tat-ach',
    title: 'Tướng Quân tại Tật Ách',
    sao: ['Tướng Quân'],
    cung: ['Tật Ách'],
    doUuTien: 72,
    tomTat: `Tướng Quân cư Tật Ách có công năng giải trừ tai nạn cho đương số.

Mặt trái: nếu đương số nóng tính và làm càn, lại hay gặp rủi ro và dễ bị cầm
giữ (giam cầm).

Tướng Quân ở cung này thường kéo theo những tai nạn bất ngờ và khó lường:

- Vấn đề sức khỏe phát sinh đột ngột
- Rủi ro khi đi lại hoặc tham gia hoạt động xã hội
- Mâu thuẫn nhỏ dễ leo thang thành xung đột, va chạm; cũng có nguy cơ bị kẻ
  tiểu nhân hãm hại`,
  },

  // ============================================================
  // 14. Tướng Quân tại Tài Bạch
  // ============================================================
  {
    id: 'tuong-quan-tai-tai-bach',
    title: 'Tướng Quân tại Tài Bạch',
    sao: ['Tướng Quân'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `Tướng Quân cư Tài Bạch đem lại lợi ích cho việc cầu tài và làm
giàu. Đương số phù hợp với những nghề cần quyết đoán, dám đầu tư lớn như cổ
phiếu hoặc địa ốc.

Tiền tài kiếm được phần lớn dựa trên quyền lực, vị thế và sức ảnh hưởng tới
người khác. Thu nhập có xu hướng ổn định và lâu dài.

Mặt trái: nếu đương số không biết chi tiêu khéo léo, của cải dễ rơi vào cảnh
"tiền vào như nước, tiền ra như sông", khó tích lũy bền vững.`,
  },

  // ============================================================
  // 15. Tướng Quân tại Tử Tức
  // ============================================================
  {
    id: 'tuong-quan-tai-tu-tuc',
    title: 'Tướng Quân tại Tử Tức',
    sao: ['Tướng Quân'],
    cung: ['Tử Tức'],
    doUuTien: 72,
    tomTat: `Tướng Quân cư Tử Tức cho thấy con cái của đương số có sức khỏe,
có khả năng thành danh và mang tố chất lãnh đạo thiên bẩm — dễ đạt thành tựu
nổi bật.

Tướng mạo con cái cao lớn, khỏe mạnh, tràn đầy sức sống. Tính tình cương trực,
nóng nảy, đôi khi nghịch ngợm như "ngựa non háu đá" — đương số cần uốn nắn khéo
léo để con phát huy được điểm mạnh.

Một đặc trưng đáng lưu ý: cung này thường ít con.`,
  },

  // ============================================================
  // 16. Tướng Quân tại Phu Thê
  // ============================================================
  {
    id: 'tuong-quan-tai-phu-the',
    title: 'Tướng Quân tại Phu Thê',
    sao: ['Tướng Quân'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `Tướng Quân cư Phu Thê cho thấy người hôn phối của đương số có tài,
có danh, có uy quyền — có tiếng nói và khả năng định đoạt trong gia đình.

Bạn đời mang tính cách mạnh mẽ, tự tin, biết lo toan và gánh vác trách nhiệm
chung, nhờ đó tổ ấm được vun vén tròn vẹn.

Khi cung này có thêm cát tinh, vợ hoặc chồng của đương số có địa vị xã hội,
được người khác kính trọng, đồng thời hỗ trợ chủ mệnh trong công việc và những
quyết định quan trọng.

Dù cát tinh hội tụ, vẫn có một điểm cần lưu ý: người hôn phối hay ghen tuông.`,
  },

  // ============================================================
  // 17. Tướng Quân tại Huynh Đệ
  // ============================================================
  {
    id: 'tuong-quan-tai-huynh-de',
    title: 'Tướng Quân tại Huynh Đệ',
    sao: ['Tướng Quân'],
    cung: ['Huynh Đệ'],
    doUuTien: 72,
    tomTat: `Tướng Quân cư Huynh Đệ cho thấy anh chị em của đương số dễ tham gia
kinh doanh, buôn bán — môi trường gia đình mang tính năng động xen lẫn cạnh
tranh.

Bản thân đương số đôi lúc bị anh em lấn át, chịu sức ép từ những người có tiếng
nói hơn mình.

Quan hệ anh em thiếu đồng đều: có người nắm vị thế quyết định, người khác phải
học cách nhường nhịn và thích ứng để giữ hòa khí.`,
  },

  {
    id: 'tuong-quan-tai-huynh-de-thien-ma-loc-ton',
    title: 'Tướng Quân + Thiên Mã + Lộc Tồn tại Huynh Đệ - anh em quyền quý',
    sao: ['Tướng Quân'],
    ketHop: ['Thiên Mã', 'Lộc Tồn'],
    cung: ['Huynh Đệ'],
    doUuTien: 67,
    tomTat: `Khi Tướng Quân hội cùng Thiên Mã và Lộc Tồn tại Huynh Đệ, anh chị
em của đương số là những người quyền quý.`,
  },

  {
    id: 'tuong-quan-tai-huynh-de-thai-phuc-vuong',
    title: 'Tướng Quân + Phục Binh + Thai + Đế Vượng tại Huynh Đệ - dị bào',
    sao: ['Tướng Quân'],
    ketHop: ['Phục Binh', 'Thai', 'Đế Vượng'],
    cung: ['Huynh Đệ'],
    doUuTien: 67,
    tomTat: `Khi Tướng Quân hội cùng Phục Binh, Thai và Đế Vượng tại Huynh Đệ
(bộ Thai Phục Vượng Tướng), anh chị em của đương số là dị bào (khác mẹ hoặc
khác cha), hoặc trong số đó có người dâm đãng.`,
  },

  // ============================================================
  // 18. Tướng Quân + Tuần Triệt - ông tướng cụt đầu
  // ============================================================
  {
    id: 'tuong-quan-tuan-triet',
    title: 'Tướng Quân + Tuần Triệt - "Ông tướng cụt đầu"',
    sao: ['Tướng Quân'],
    ketHop: ['Tuần', 'Triệt'],
    doUuTien: 65,
    tomTat: `Khi Tướng Quân bị Tuần hoặc Triệt án ngữ, đương số rơi vào cách
"ông tướng cụt đầu" — cách cực xấu, quyền uy và dũng mãnh gần như bị triệt tiêu
hoàn toàn.

Hệ quả nặng nề có thể bao gồm:

- Tổn hại tánh mạng, công danh, quyền thế
- Bị truất giáng, bãi cách
- Tai nạn xe cộ, phi cơ, gươm đao, súng đạn ở mức khủng khiếp`,
  },

  {
    id: 'tuong-quan-tuan-triet-thien-hinh',
    title: 'Tướng Quân + Tuần/Triệt + Thiên Hình - tăng nguy hại',
    sao: ['Tướng Quân'],
    ketHop: ['Tuần', 'Triệt', 'Thiên Hình'],
    doUuTien: 60,
    tomTat: `Khi Tướng Quân bị Tuần hoặc Triệt án ngữ và lại hội thêm Thiên
Hình, mức nguy hại tăng cao, kéo theo nhiều rắc rối và tai ương bất ngờ — đặc
biệt cần đề phòng khi cách này xuất hiện trong vận hạn.`,
  },

  {
    id: 'tuong-quan-tuan-triet-hoa-ky',
    title: 'Tướng Quân + Tuần/Triệt + Hóa Kỵ - tăng nguy hại',
    sao: ['Tướng Quân'],
    ketHop: ['Tuần', 'Triệt', 'Hóa Kỵ'],
    doUuTien: 60,
    tomTat: `Khi Tướng Quân bị Tuần hoặc Triệt án ngữ và lại hội thêm Hóa Kỵ,
mức nguy hại tăng cao, kéo theo nhiều rắc rối và tai ương bất ngờ — đặc biệt
cần đề phòng khi cách này xuất hiện trong vận hạn.`,
  },

  {
    id: 'tuong-quan-tuan-triet-kiep-sat',
    title: 'Tướng Quân + Tuần/Triệt + Kiếp Sát - tăng nguy hại',
    sao: ['Tướng Quân'],
    ketHop: ['Tuần', 'Triệt', 'Kiếp Sát'],
    doUuTien: 60,
    tomTat: `Khi Tướng Quân bị Tuần hoặc Triệt án ngữ và lại hội thêm Kiếp Sát,
mức nguy hại tăng cao, kéo theo nhiều rắc rối và tai ương bất ngờ — đặc biệt
cần đề phòng khi cách này xuất hiện trong vận hạn.`,
  },

  // ============================================================
  // 19. Tướng Quân + Phục Binh + Không Kiếp - mưu sát
  // ============================================================
  {
    id: 'tuong-quan-phuc-binh-khong-kiep',
    title: 'Tướng Quân + Phục Binh + Không Kiếp - Nguy hiểm tính mạng',
    sao: ['Tướng Quân'],
    ketHop: ['Phục Binh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 65,
    tomTat: `Khi Tướng Quân hội cùng Phục Binh và Địa Không hoặc Địa Kiếp, đương
số gặp nguy hiểm đến tính mạng vì bị người mưu sát.

Cách cục cực hung: Tướng Quân vốn đã bị quân phản (Phục Binh), nay lại gặp Không
Kiếp tăng phần ám hại — có người ám toán sau lưng. Đương số cần cẩn trọng đặc
biệt khi vận hạn đi vào cung này.`,
  },

  // ============================================================
  // 20. Tướng Quân + Đào Hồng - thất tiết, hoang dâm
  // ============================================================
  {
    id: 'tuong-quan-dao-hong',
    title: 'Tướng Quân + Đào Hoa / Hồng Loan - Thất tiết, hoang dâm',
    sao: ['Tướng Quân'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 60,
    tomTat: `Khi Tướng Quân hội cùng Đào Hoa hoặc Hồng Loan, đương số gặp cách
xấu cho phẩm hạnh. Mức độ ảnh hưởng cụ thể tùy theo giới tính và việc có thêm
Phá Quân, Phục Binh đi kèm hay không — xem các luận giải chuyên biệt phía sau.`,
  },

  {
    id: 'tuong-quan-dao-hong-pha-quan-phuc-binh',
    title: 'Tướng Quân + Đào/Hồng + Phá Quân + Phục Binh - dâm dục loạn luân',
    sao: ['Tướng Quân'],
    ketHop: ['Đào Hoa', 'Hồng Loan', 'Phá Quân', 'Phục Binh'],
    doUuTien: 55,
    tomTat: `Khi Tướng Quân hội cùng Đào Hoa hoặc Hồng Loan, lại có thêm Phá
Quân và Phục Binh, đương số dâm dục quá đáng, dễ rơi vào tư thông, ngoại dâm
và loạn luân.`,
  },

  {
    id: 'tuong-quan-dao-hong-nam',
    title: 'Tướng Quân + Đào / Hồng - Nam mệnh hoang dâm',
    sao: ['Tướng Quân'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    gioiTinh: 'Nam',
    doUuTien: 55,
    tomTat: `Nam mệnh có Tướng Quân hội cùng Đào Hoa hoặc Hồng Loan thường mắc
tật hoang dâm — đam mê sắc dục quá độ, khó kiểm soát.`,
  },

  {
    id: 'tuong-quan-dao-hong-nu',
    title: 'Tướng Quân + Đào / Hồng - Nữ mệnh thất tiết',
    sao: ['Tướng Quân'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    gioiTinh: 'Nữ',
    doUuTien: 55,
    tomTat: `Nữ mệnh có Tướng Quân hội cùng Đào Hoa hoặc Hồng Loan thường gặp
nhiều rắc rối tơ duyên: tình cảm rối ren, dễ bị thất tiết, sa vào ngoại dâm.

Đây là cách rất xấu cho phẩm hạnh, đặc biệt nguy hiểm với nữ mệnh.`,
  },

  // ============================================================
  // 21. Bộ Thai Phục Vượng Tướng (đặc biệt nữ mệnh)
  // ============================================================
  {
    id: 'tuong-quan-thai-phuc-vuong',
    title: 'Tướng Quân + Thai + Phục Binh + Đế Vượng - Bộ "Thai Phục Vượng Tướng"',
    sao: ['Tướng Quân'],
    ketHop: ['Thai', 'Phục Binh', 'Đế Vượng'],
    doUuTien: 65,
    tomTat: `Khi Tướng Quân hội đủ Thai, Phục Binh và Đế Vượng, đương số đắc bộ
"Thai Phục Vượng Tướng" — chủ về thăng trầm và thử thách trong tình duyên, đặc
biệt liên quan đến lừa dối hoặc trắc trở hôn nhân.

Với nữ mệnh, cách này đáng ngại hơn: cần đề phòng rủi ro tổn hại thể xác, tránh
sập bẫy tình ái rồi bị lợi dụng. Đương số dễ vướng quan hệ ngoài luồng, hoặc
vướng thị phi tình ái mang tính lừa gạt và chiếm đoạt.

Khi cung có thêm Phúc thiện tinh hóa giải, vợ chồng thường phải trải qua thời
gian sống chung như một sự thử thách trước khi về một nhà; vượt qua được giai
đoạn này thì cuộc hôn nhân vẫn ổn.`,
  },

  // ============================================================
  // 22. Lời khuyên hóa giải Tướng Quân
  // ============================================================
  {
    id: 'tuong-quan-hoa-giai',
    title: 'Lời khuyên hóa giải hung họa Tướng Quân',
    sao: ['Tướng Quân'],
    doUuTien: 70,
    tomTat: `Sự mạnh mẽ của Tướng Quân là "con dao hai lưỡi" — đương số nên chủ
động tu dưỡng và lựa chọn môi trường để chuyển hung thành cát.

Về nghề nghiệp: nên chọn môi trường đòi hỏi kỷ luật cao như quân đội, công an,
lực lượng vũ trang, hoặc các lĩnh vực cần tổ chức và lãnh đạo. Trong khuôn khổ
đó, sự nóng nảy và cương cường được tôi luyện thành bản lĩnh và quyết đoán.

Về tu dưỡng tâm tính: dùng quyền lực để giúp người, tích phúc đức — "gieo nhân
lành thì gặt quả ngọt", tránh được cảnh "sinh nghề tử nghiệp" do quyền lực phản
chủ.

Khi gặp Tuần Triệt án ngữ: đương số cần giữ bình tĩnh, không tham lam, không
sinh hận. Lùi một bước, chọn công việc ổn định và an toàn; khi thời vận trở
lại có thể bứt phá mạnh mẽ.

Với các đại vận và tiểu vận có Tướng Quân hội thêm Thiên Hình, Hóa Kỵ, Địa
Không, Địa Kiếp, Tuần hoặc Triệt: đương số phải hết sức thận trọng, tránh va
chạm và biết "dĩ hòa vi quý" để vượt sóng gió.`,
  },
];
