import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THÁI TUẾ - Hỏa, Phù Tinh + Hình Tinh, ĐỨNG ĐẦU vòng Thái Tuế (vị trí 1).
 * Tam hợp Tuế - Hổ - Phù (Thái Tuế + Bạch Hổ + Quan Phù) — chính nghĩa, xây dựng, bền bỉ.
 * Đối xung với Tuế Phá. An theo Chi năm sinh - tại cung địa chi trùng chi năm sinh.
 */
export const luanGiai_ThaiTue: DoanLuanGiai[] = [
  {
    id: 'thai-tue-tinh-chat-chung',
    title: 'Thái Tuế - Đặc tính chung',
    sao: ['Thái Tuế'],
    doUuTien: 32,
    tomTat: `**Thái Tuế** là phụ tinh thuộc loại Phù Tinh kiêm Hình Tinh, đứng đầu vòng
Thái Tuế (vị trí thứ nhất) và là một trong những phụ tinh quan trọng bậc nhất
của khoa Tử Vi. Sao mang ngũ hành Hỏa, hóa khí Phù Tinh và Hình Tinh, còn được
gọi là Tuế, Thái Tuế Tinh Quân hay La Hầu.

Về vị thế trong vòng Thái Tuế:

- An theo chi năm sinh — Thái Tuế ngự tại cung có địa chi trùng chi năm sinh
- Vòng Thái Tuế luôn an thuận chiều kim đồng hồ, khởi đầu từ Thái Tuế
- 12 sao theo thứ tự: Thái Tuế, Thiếu Dương, Tang Môn, Thiếu Âm, Quan Phù, Tử
  Phù, Tuế Phá, Long Đức, Bạch Hổ, Phúc Đức, Điếu Khách, Trực Phù

Tam hợp Tuế - Hổ - Phù (Thái Tuế cùng Bạch Hổ và Quan Phù) là vòng tam hợp của
tuổi, đại diện cho chính nghĩa, xây dựng và bền bỉ — đường lối đúng đắn. Đối
xung với Thái Tuế là Tuế Phá (cách 6 cung) — sao chuyên phá vỡ.

Đặc tính tổng quát của sao: lý luận, tranh cãi, quan tụng, thông minh, đấu
tranh, lập luận sắc bén, cô độc, bảo thủ.`,
    chiTiet: `Thái Tuế mang nhiều ý nghĩa tốt khi nằm tại cung Mệnh, song trong khoa Tử
Vi hiếm có sao nào tốt hoàn toàn — kết quả thực sự còn phụ thuộc vào vị trí,
thế đứng và các sao khác đồng cung hay hợp chiếu.

Bản chất hai mặt của Thái Tuế thể hiện rõ:

- Mặt tốt
  - Chủ về lời nói, lập luận, lý luận sắc bén
  - Đương số chính trực, thẳng thắn, tôn trọng và bảo vệ sự thật
  - Có trí tiến thủ, học hành chăm chỉ
  - Thiên hướng nghề: luật sư, thẩm phán, nghiên cứu, giáo viên, chính trị gia
- Mặt xấu
  - Bảo thủ, không nể phục người khác, khó tính, nguyên tắc
  - Hay bị nói xấu, chỉ trích, công kích, bút chiến
  - Hay bị kiện cáo
  - Tai họa chủ yếu liên quan đến ngôn ngữ và lời nói

Về khái niệm phạm Thái Tuế hàng năm: hàng năm có Lưu Thái Tuế an theo chi năm
hiện tại (ví dụ năm Tý thì Lưu Thái Tuế tại Tý). Năm bị phạm, xung, trực hoặc
hình Thái Tuế thường xảy ra nhiều mất mát, thua thiệt — đương số cần kiêng dè.`,
  },

  {
    id: 'thai-tue-tam-hop-tue-ho-phu',
    title: 'Tam hợp Tuế - Hổ - Phù (Thái Tuế + Bạch Hổ + Quan Phù)',
    sao: ['Thái Tuế', 'Bạch Hổ', 'Quan Phù'],
    doUuTien: 60,
    tomTat: `Tam hợp **Tuế - Hổ - Phù** (Thái Tuế cùng Bạch Hổ và Quan Phù) là một trong
những tam hợp của tuổi, đại diện cho:

- Chính nghĩa
- Xây dựng
- Trách nhiệm
- Bền bỉ
- Đường lối đúng đắn

Trong bốn vòng tam hợp tuổi (Tuế Hổ Phù, Tang Tuế Điếu, Mã Khốc Khách, Bạch
Hổ Long Trì...), Tuế Hổ Phù là vòng đại diện cho lẽ phải — đương số tự nhiên
mang tinh thần đoan chính, cầu thị.

Khi ba sao này hội tụ tam hợp tại Mệnh - Tài - Quan, đương số có cốt cách
cao, lời nói trọng lượng, hợp với các nghề pháp luật, quản lý, giáo dục và
nghiên cứu. Tuy vậy, khẩu nghiệp vẫn nặng — đương số cần tu khẩu để giảm bớt
thị phi.`,
  },

  {
    id: 'thai-tue-tai-menh',
    title: 'Thái Tuế tại Mệnh - thượng cách',
    sao: ['Thái Tuế'],
    cung: ['Mệnh'],
    doUuTien: 82,
    tomTat: `Thái Tuế nhập Mệnh là **thượng cách** trong khoa Tử Vi.

Tính cách nổi bật của đương số:

- Trí óc thông tuệ, chăm bồi dưỡng tri thức
- Tư duy sắc bén, đặc biệt giỏi ăn nói
- Khả năng lý luận, biện chứng và thuyết phục — nhờ tài đối đáp mà vượt qua
  được nhiều tình huống khó
- Chính trực, dám đấu tranh vì công bằng

Về thiên hướng nghề, đương số hợp với báo chí, luật pháp, giáo dục, nghiên
cứu và chính trị — là người tôn trọng sự thật và bảo vệ sự thật tuyệt đối.

Mặt khác, đương số:

- Bảo thủ, thích tranh luận, dễ "chuyện bé xé ra to"
- Không bao giờ nể phục người khác
- Khó tính, nguyên tắc
- Ít giao tiếp, ngại bộc lộ bản thân
- Lời nói sắc bén như "con dao hai lưỡi" — nếu không tiết chế thì dễ mang
  họa, bị công kích, hiểu lầm và "làm ơn mắc oán"`,
    chiTiet: `Đặc tính nội tâm của đương số có Thái Tuế thủ Mệnh:

- Luôn nghĩ mình là người giỏi nhất
- Ưa tranh cãi, không chịu thua trong lý lẽ
- Đồng thời ngại giao tiếp, không thích bộc lộ — nội tâm phong phú nhưng kín
  đáo

Về công danh, sao này có lợi cho đương số: trí tiến thủ rõ rệt, học hành chăm
chỉ. Các ngành phù hợp gồm:

- Luật sư, thẩm phán, kiểm sát viên
- Nghiên cứu sinh, giảng viên đại học
- Giáo viên, nhà giáo dục
- Chính trị gia, nhà ngoại giao
- Nhà báo, biên tập viên, phê bình

Cảnh báo về ngôn ngữ: vì Thái Tuế chủ về lời nói nên đại đa số tai họa của
đương số có sao này thủ Mệnh đều xuất phát từ miệng — cãi vã, bút chiến, bị
kiện vì lời nói, hiểu lầm và mất tình cảm vì khẩu khí.

Lời khuyên: "một câu nhịn, chín câu lành" — biết tiết chế lời nói chính là
biết hóa giải Thái Tuế.`,
  },

  {
    id: 'thai-tue-tai-than',
    title: 'Thái Tuế tại cung an Thân - già cô đơn',
    sao: ['Thái Tuế'],
    doUuTien: 60,
    tomTat: `Khi cung an Thân có Thái Tuế, đương số về già dễ rơi vào cảnh cô đơn, cô
độc, khó tính và ít giao tiếp với bên ngoài.

Đặc trưng thường thấy:

- Tự cô lập mình do bảo thủ, không nể ai
- Lời nói càng già càng cay nghiệt — con cháu, bạn bè dần xa lánh
- Có thể sống ẩn dật, hoặc dồn tâm trí vào viết lách, nghiên cứu

Lời khuyên: đương số nên chủ động mở rộng quan hệ từ khi còn trẻ và biết tu
khẩu — về già sẽ bớt cô độc hơn.`,
  },

  {
    id: 'thai-tue-tuoi-am-tu-linh',
    title: 'Thái Tuế tại Mệnh + Tuổi Âm + Tứ Linh (Cái Long Hổ Phượng)',
    sao: ['Thái Tuế'],
    cung: ['Mệnh'],
    ketHop: ['Hoa Cái', 'Long Trì', 'Bạch Hổ', 'Phượng Các'],
    doUuTien: 78,
    tomTat: `Đương số tuổi âm (Sửu, Mão, Tỵ, Mùi, Dậu, Hợi) có Thái Tuế tọa Mệnh đi
cùng bộ **Tứ Linh** (Hoa Cái, Long Trì, Bạch Hổ, Phượng Các) thành cách rực rỡ.

Sở dĩ chỉ tuổi âm mới hưởng trọn vẹn cách này là vì với người tuổi âm, vòng
Thái Tuế và Tứ Linh hội tụ đẹp tại tam hợp tuổi, tạo cách dễ hơn nhiều so với
tuổi dương.

Ý nghĩa của cách:

- Đường công danh "diều gặp gió", lên nhanh chóng
- Đạt được địa vị và danh tiếng
- Có sức mạnh tạo dựng, bảo vệ lẽ phải, đấu tranh với cái xấu
- Đương số chính trực, thẳng thắn, có uy tín lớn

Đây là một trong những cách đẹp nhất của vòng Thái Tuế — kết hợp giữa lý
tính của Thái Tuế và uy danh của Tứ Linh.`,
  },

  {
    id: 'thai-tue-xuong-khuc-khoi-viet',
    title: 'Thái Tuế + Xương Khúc + Khôi Việt - khoa bảng hiển đạt',
    sao: ['Thái Tuế'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 75,
    tomTat: `Khi Thái Tuế gặp Văn Xương hoặc Văn Khúc đi cùng Thiên Khôi hoặc Thiên Việt,
đương số có bộ **khoa bảng hiển đạt**.

Thái Tuế chủ học hành, cầu thị và tiến thủ; kết hợp với Xương Khúc (văn
chương) và Khôi Việt (quý nhân khoa cử) sẽ đem lại:

- Thi cử dễ dàng đỗ đạt
- Công danh hiển đạt, sự nghiệp thông suốt
- Chỗ đứng vững chắc trong giới học thuật, hành pháp và ngoại giao

Đây là cách cục trí tuệ rất đẹp cho đương số làm nghề trí óc — luật sư, giáo
sư, nhà nghiên cứu, nhà ngoại giao.`,
  },

  {
    id: 'thai-tue-hoa-cai-hoa-ky',
    title: 'Thái Tuế + Hoa Cái / Hóa Kỵ - kiêu kỳ bảo thủ',
    sao: ['Thái Tuế'],
    ketHop: ['Hoa Cái', 'Hóa Kỵ'],
    doUuTien: 60,
    tomTat: `Khi Thái Tuế gặp Hoa Cái hoặc Hóa Kỵ, đương số ăn nói kiêu kỳ, mất cảm
tình với người xung quanh.

Đặc trưng:

- Cực bảo thủ, coi mình là nhất
- Lời nói có vẻ đạo cao đức trọng nhưng dễ xa rời thực tế
- Người nghe cảm thấy khó chịu, không gần gũi được

Đây là cách Thái Tuế phát xấu — biến lý luận sắc bén thành kẻ kiêu ngạo cô
độc.`,
  },

  {
    id: 'thai-tue-thien-hinh',
    title: 'Thái Tuế + Thiên Hình - tai bay vạ gió kiện tù',
    sao: ['Thái Tuế'],
    ketHop: ['Thiên Hình'],
    doUuTien: 65,
    tomTat: `Khi Thái Tuế gặp Thiên Hình, đương số chủ về tai bay vạ gió, có thể bị
kiện tụng và tù tội.

Thiên Hình là sao của dao kéo và hình ngục, gặp Thái Tuế (kiện tụng) sẽ
khiến:

- Đương số vướng pháp lý không lường trước
- Lời nói thành chứng cứ chống lại chính mình
- Có thể bị truy tố hình sự, giam cầm

Cách này đặc biệt nguy hiểm khi rơi vào đại vận xấu.`,
  },

  {
    id: 'thai-tue-thien-hinh-tat-ach',
    title: 'Thái Tuế + Thiên Hình tại Tật Ách - Đặc biệt nguy hiểm',
    sao: ['Thái Tuế'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Hình'],
    doUuTien: 70,
    tomTat: `Khi Thái Tuế đi cùng Thiên Hình tại cung Tật Ách, cách rất nguy hiểm:

- Bệnh tật cùng kiện tụng cùng phát một lúc
- Đương số dễ phải mổ xẻ, vào tù vì tai nạn pháp lý
- Cần tránh kiện cáo và đề phòng tai nạn dao kéo`,
  },

  {
    id: 'thai-tue-da-la-hoa-ky',
    title: 'Thái Tuế + Đà La + Hóa Kỵ - quê kệch ngu độn',
    sao: ['Thái Tuế'],
    ketHop: ['Đà La', 'Hóa Kỵ'],
    doUuTien: 60,
    tomTat: `Khi Thái Tuế gặp Đà La và Hóa Kỵ, đương số trở nên quê kệch và ngu độn.

Bộ này phá hỏng tinh thần học thuật, lý luận vốn có của Thái Tuế:

- Gây ngăn trở cho công việc
- Hại đến quyền thế và tài lộc
- Lời nói thô thiển, lạc lõng, không thuyết phục được ai

Khác với cách Khôi Việt cùng Xương Khúc làm sáng Thái Tuế, bộ này làm tối
Thái Tuế.`,
  },

  {
    id: 'thai-tue-thien-rieu-da-la',
    title: 'Thái Tuế + Thiên Riêu + Đà La - lật lọng',
    sao: ['Thái Tuế'],
    ketHop: ['Thiên Riêu', 'Đà La'],
    doUuTien: 60,
    tomTat: `Khi Thái Tuế gặp Thiên Riêu và Đà La, đương số hay lật lọng, nói một đằng
làm một nẻo.

Đặc tính của cách:

- Thất tín, không giữ lời
- Mưu mô — lý luận sắc bén nhưng dùng để lừa người
- Không nên giao việc quan trọng cho đương số
- Trong tình cảm hay phản bội, bội ước

Cách này biến Thái Tuế từ chính trực thành xảo quyệt — rất cần đề phòng.`,
  },

  {
    id: 'thai-tue-dan-dau-thien-hinh-kinh-duong',
    title: 'Thái Tuế tại Dần / Dậu + Thiên Hình + Kình Dương - tai họa khẩu thiệt',
    sao: ['Thái Tuế'],
    chi: ['Dần', 'Dậu'],
    ketHop: ['Thiên Hình', 'Kình Dương'],
    doUuTien: 80,
    tomTat: `Khi Thái Tuế tại cung Dần hoặc Dậu đi cùng Thiên Hình và Kình Dương, đương
số gặp đại nạn về thị phi, tai bay vạ gió, khẩu thiệt, tai tiếng và tù tội.

Đây là cách cục cực hung — đặc biệt nguy hiểm khi vào hạn:

- Bị vu oan không lý do
- Lời nói thành chứng cứ đưa ra tòa
- Có thể bị giam giữ, tù đày
- Mất danh dự, tiếng xấu lan truyền

Trong giai đoạn hạn này, đương số cần đặc biệt tu khẩu, tránh kiện cáo và
không ký kết bừa bãi.`,
  },

  {
    id: 'thai-tue-tai-phu-mau',
    title: 'Thái Tuế tại Phụ Mẫu',
    sao: ['Thái Tuế'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Khi Thái Tuế đóng tại Phụ Mẫu, trong nhà thường thiếu hòa khí, hay xảy ra
tranh chấp. Cha mẹ và con cái không hợp tánh.`,
  },

  {
    id: 'thai-tue-tai-phu-mau-da',
    title: 'Thái Tuế + Đà La tại Phụ Mẫu - Cha mẹ xa cách',
    sao: ['Thái Tuế'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Đà La'],
    doUuTien: 70,
    tomTat: `Khi Thái Tuế gặp Đà La tại Phụ Mẫu, cha mẹ xa cách, gia đình ly tán. Cha
mẹ thường gặp tai họa, đáng lo ngại nhất là vướng kiện cáo.`,
  },

  {
    id: 'thai-tue-tai-phu-mau-hoa-ky',
    title: 'Thái Tuế + Hóa Kỵ tại Phụ Mẫu - Cha mẹ xa cách',
    sao: ['Thái Tuế'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `Khi Thái Tuế gặp Hóa Kỵ tại Phụ Mẫu, cha mẹ xa cách, gia đình ly tán. Cha
mẹ thường gặp tai họa, đáng lo ngại nhất là vướng kiện cáo.`,
  },

  {
    id: 'thai-tue-tai-phu-mau-xuong',
    title: 'Thái Tuế + Văn Xương tại Phụ Mẫu - Cha mẹ giỏi giang',
    sao: ['Thái Tuế'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Văn Xương'],
    doUuTien: 70,
    tomTat: `Khi Thái Tuế đi cùng Văn Xương tại Phụ Mẫu, cha mẹ giỏi giang, quyền quý
— có người làm nghề liên quan đến ăn nói, kiện tụng (luật sư, giáo viên, nhà
báo, chính trị gia). Hôn nhân êm ấm, con cái được nền tảng tốt.`,
  },

  {
    id: 'thai-tue-tai-phu-mau-khuc',
    title: 'Thái Tuế + Văn Khúc tại Phụ Mẫu - Cha mẹ giỏi giang',
    sao: ['Thái Tuế'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Văn Khúc'],
    doUuTien: 70,
    tomTat: `Khi Thái Tuế đi cùng Văn Khúc tại Phụ Mẫu, cha mẹ giỏi giang, quyền quý
— có người làm nghề liên quan đến ăn nói, kiện tụng (luật sư, giáo viên, nhà
báo, chính trị gia). Hôn nhân êm ấm, con cái được nền tảng tốt.`,
  },

  {
    id: 'thai-tue-tai-phu-mau-khoi',
    title: 'Thái Tuế + Thiên Khôi tại Phụ Mẫu - Cha mẹ giỏi giang',
    sao: ['Thái Tuế'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Thiên Khôi'],
    doUuTien: 70,
    tomTat: `Khi Thái Tuế đi cùng Thiên Khôi tại Phụ Mẫu, cha mẹ giỏi giang, quyền quý
— có người làm nghề liên quan đến ăn nói, kiện tụng (luật sư, giáo viên, nhà
báo, chính trị gia). Hôn nhân êm ấm, con cái được nền tảng tốt.`,
  },

  {
    id: 'thai-tue-tai-phu-mau-viet',
    title: 'Thái Tuế + Thiên Việt tại Phụ Mẫu - Cha mẹ giỏi giang',
    sao: ['Thái Tuế'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Thiên Việt'],
    doUuTien: 70,
    tomTat: `Khi Thái Tuế đi cùng Thiên Việt tại Phụ Mẫu, cha mẹ giỏi giang, quyền quý
— có người làm nghề liên quan đến ăn nói, kiện tụng. Hôn nhân êm ấm, con cái
được nền tảng tốt.`,
  },

  {
    id: 'thai-tue-tai-phu-mau-ta',
    title: 'Thái Tuế + Tả Phù tại Phụ Mẫu - Cha mẹ giỏi giang',
    sao: ['Thái Tuế'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Tả Phù'],
    doUuTien: 70,
    tomTat: `Khi Thái Tuế đi cùng Tả Phù tại Phụ Mẫu, cha mẹ giỏi giang, quyền quý —
có người làm nghề liên quan đến ăn nói, kiện tụng. Hôn nhân êm ấm, con cái
được nền tảng tốt.`,
  },

  {
    id: 'thai-tue-tai-phu-mau-huu',
    title: 'Thái Tuế + Hữu Bật tại Phụ Mẫu - Cha mẹ giỏi giang',
    sao: ['Thái Tuế'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Hữu Bật'],
    doUuTien: 70,
    tomTat: `Khi Thái Tuế đi cùng Hữu Bật tại Phụ Mẫu, cha mẹ giỏi giang, quyền quý —
có người làm nghề liên quan đến ăn nói, kiện tụng. Hôn nhân êm ấm, con cái
được nền tảng tốt.`,
  },

  {
    id: 'thai-tue-tai-phuc-duc',
    title: 'Thái Tuế tại Phúc Đức - đại thượng cách',
    sao: ['Thái Tuế'],
    cung: ['Phúc Đức'],
    doUuTien: 85,
    tomTat: `Thái Tuế đóng tại Phúc Đức là **đại thượng cách** trong khoa Tử Vi.`,
  },

  {
    id: 'thai-tue-tai-phuc-duc-luc-cat',
    title: 'Thái Tuế + Lục Cát tại Phúc Đức - Dòng họ thành đạt',
    sao: ['Thái Tuế'],
    cung: ['Phúc Đức'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 75,
    tomTat: `Khi Thái Tuế đi cùng bộ **Lục Cát** (Tả Phù, Hữu Bật, Văn Xương, Văn Khúc,
Thiên Khôi, Thiên Việt) tại Phúc Đức, dòng họ của đương số có nhiều người
thành đạt, làm quan to. Gia tộc thuận hòa, thờ cúng chu toàn — con cháu được
hưởng phúc và gặp may mắn trong sự nghiệp.`,
  },

  {
    id: 'thai-tue-tai-phuc-duc-da',
    title: 'Thái Tuế + Đà La tại Phúc Đức - Dòng họ thiếu hòa khí',
    sao: ['Thái Tuế'],
    cung: ['Phúc Đức'],
    ketHop: ['Đà La'],
    doUuTien: 73,
    tomTat: `Khi Thái Tuế gặp Đà La tại Phúc Đức, đương số không được hưởng phúc, trong
họ thiếu hòa khí, thường có tranh chấp lẫn nhau, khắc khẩu giữa bề trên và
con cháu. Phúc phần tổ tiên suy giảm, con cháu phải tự lực vươn lên.`,
  },

  {
    id: 'thai-tue-tai-phuc-duc-hoa-ky',
    title: 'Thái Tuế + Hóa Kỵ tại Phúc Đức - Dòng họ thiếu hòa khí',
    sao: ['Thái Tuế'],
    cung: ['Phúc Đức'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 73,
    tomTat: `Khi Thái Tuế gặp Hóa Kỵ tại Phúc Đức, đương số không được hưởng phúc,
trong họ thiếu hòa khí, thường có tranh chấp lẫn nhau, khắc khẩu giữa bề
trên và con cháu. Phúc phần tổ tiên suy giảm, con cháu phải tự lực vươn lên.`,
  },

  {
    id: 'thai-tue-tai-phuc-duc-khong',
    title: 'Thái Tuế + Địa Không tại Phúc Đức - Dòng họ thiếu hòa khí',
    sao: ['Thái Tuế'],
    cung: ['Phúc Đức'],
    ketHop: ['Địa Không'],
    doUuTien: 73,
    tomTat: `Khi Thái Tuế gặp Địa Không tại Phúc Đức, đương số không được hưởng phúc,
trong họ thiếu hòa khí, thường có tranh chấp lẫn nhau. Phúc phần tổ tiên suy
giảm, con cháu phải tự lực vươn lên.`,
  },

  {
    id: 'thai-tue-tai-phuc-duc-kiep',
    title: 'Thái Tuế + Địa Kiếp tại Phúc Đức - Dòng họ thiếu hòa khí',
    sao: ['Thái Tuế'],
    cung: ['Phúc Đức'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 73,
    tomTat: `Khi Thái Tuế gặp Địa Kiếp tại Phúc Đức, đương số không được hưởng phúc,
trong họ thiếu hòa khí, thường có tranh chấp lẫn nhau. Phúc phần tổ tiên suy
giảm, con cháu phải tự lực vươn lên.`,
  },

  {
    id: 'thai-tue-tai-dien-trach',
    title: 'Thái Tuế tại Điền Trạch',
    sao: ['Thái Tuế'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Khi Thái Tuế đi cùng Tam Thai, Bát Tọa, Tả Phù, Hữu Bật, Văn Xương hoặc
Văn Khúc tại Điền Trạch, đương số có nhà cửa vững vàng, bất động sản phong
thủy tốt, buôn bán thuận lợi.

Ngược lại, khi Thái Tuế đi cùng Thiên Hình, Thiên Riêu, Địa Không, Địa Kiếp,
Kình Dương, Đà La, Đại Hao hoặc Tiểu Hao tại Điền Trạch, đương số lận đận về
nhà cửa, hay xích mích và bị lừa. Tình trạng cụ thể:

- Hay xảy ra tranh chấp đất cát
- Hao tán của cải vì kiện tụng
- Phải tu sửa, chuyển nhà nhiều lần
- Nếu nhiều hung sát tinh: tổn thất lớn về điền sản, gia đình ly tán vì đất`,
  },

  {
    id: 'thai-tue-tai-quan-loc',
    title: 'Thái Tuế tại Quan Lộc',
    sao: ['Thái Tuế'],
    cung: ['Quan Lộc'],
    doUuTien: 80,
    tomTat: `Thái Tuế tại Quan Lộc rất hợp với các nghề chủ về dùng lời nói, lý luận,
hoặc nghề liên quan đến pháp luật:

- Luật sư, giáo sư, thẩm phán, trưởng tòa
- Nhà giáo, nhà nghiên cứu
- Chính trị, ngoại giao

Đương số có tài quản lý, tài tổ chức sắp xếp công việc, quản lý nhân sự và
lập kế hoạch giỏi.

Nếu làm chính trị, đương số thiên về phe đối lập, hay chỉ trích và đồng thời
bị chỉ trích trong nghề.`,
  },

  {
    id: 'thai-tue-tai-quan-loc-sat-tinh',
    title: 'Thái Tuế + Tứ Sát tại Quan Lộc - Tai nạn nghề nghiệp',
    sao: ['Thái Tuế'],
    cung: ['Quan Lộc'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 72,
    tomTat: `Khi Thái Tuế đi cùng bộ **Tứ Sát** (Kình Dương, Đà La, Hỏa Tinh, Linh Tinh)
tại Quan Lộc, đương số:

- Hay làm nghề tay chân hoặc thuộc mảng trái xã hội
- Dễ bị tai nạn nghề nghiệp, kiện tụng
- Bị tiểu nhân phá hoại, sự nghiệp khó bền
- Uy tín sứt mẻ, công danh lỡ dở`,
  },

  {
    id: 'thai-tue-tai-quan-loc-hoa-ky',
    title: 'Thái Tuế + Hóa Kỵ tại Quan Lộc - Tai nạn nghề nghiệp',
    sao: ['Thái Tuế'],
    cung: ['Quan Lộc'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 72,
    tomTat: `Khi Thái Tuế gặp Hóa Kỵ tại Quan Lộc, đương số:

- Hay làm nghề tay chân hoặc thuộc mảng trái xã hội
- Dễ bị tai nạn nghề nghiệp, kiện tụng
- Bị tiểu nhân phá hoại, sự nghiệp khó bền
- Uy tín sứt mẻ, công danh lỡ dở`,
  },

  {
    id: 'thai-tue-tai-no-boc',
    title: 'Thái Tuế tại Nô Bộc',
    sao: ['Thái Tuế'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Khi Thái Tuế đóng tại Nô Bộc, đương số ra ngoài có nhiều tham vọng, ưa
chơi với người chức cao quyền rộng và hay kén chọn bạn bè.

Đương số làm nghề nhà giáo có cách này — nếu nhiều cát tinh hội tụ thì học
trò sau này công danh rực rỡ, làm nổi tiếng cho thầy.

Cách nói chuyện bảo thủ của đương số dễ làm mất lòng bạn bè và đồng nghiệp.`,
  },

  {
    id: 'thai-tue-tai-no-boc-khong',
    title: 'Thái Tuế + Địa Không tại Nô Bộc - Bị lừa gạt',
    sao: ['Thái Tuế'],
    cung: ['Nô Bộc'],
    ketHop: ['Địa Không'],
    doUuTien: 70,
    tomTat: `Khi Thái Tuế gặp Địa Không tại Nô Bộc, đương số dễ bị bạn bè lừa gạt, gặp
tai bay vạ gió dẫn tới thị phi.`,
  },

  {
    id: 'thai-tue-tai-no-boc-kiep',
    title: 'Thái Tuế + Địa Kiếp tại Nô Bộc - Bị lừa gạt',
    sao: ['Thái Tuế'],
    cung: ['Nô Bộc'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Khi Thái Tuế gặp Địa Kiếp tại Nô Bộc, đương số dễ bị bạn bè lừa gạt, gặp
tai bay vạ gió dẫn tới thị phi.`,
  },

  {
    id: 'thai-tue-tai-no-boc-hoa-ky',
    title: 'Thái Tuế + Hóa Kỵ tại Nô Bộc - Bị lừa gạt',
    sao: ['Thái Tuế'],
    cung: ['Nô Bộc'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `Khi Thái Tuế gặp Hóa Kỵ tại Nô Bộc, đương số dễ bị bạn bè lừa gạt, gặp tai
bay vạ gió dẫn tới thị phi.`,
  },

  {
    id: 'thai-tue-tai-no-boc-luc-cat',
    title: 'Thái Tuế + Lục Cát tại Nô Bộc - Bạn bè học thức nâng đỡ',
    sao: ['Thái Tuế'],
    cung: ['Nô Bộc'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 70,
    tomTat: `Khi Thái Tuế đi cùng bộ Lục Cát (Tả Phù, Hữu Bật, Văn Xương, Văn Khúc,
Thiên Khôi, Thiên Việt) tại Nô Bộc, bạn bè và đồng nghiệp của đương số đều
là người học thức, sẵn lòng nâng đỡ đương số trước khó khăn.`,
  },

  {
    id: 'thai-tue-tai-thien-di',
    title: 'Thái Tuế tại Thiên Di',
    sao: ['Thái Tuế'],
    cung: ['Thiên Di'],
    doUuTien: 78,
    tomTat: `Khi Thái Tuế đóng tại Thiên Di, đương số ra ngoài hay bị miệng tiếng và
khẩu thiệt trong giao thiệp, hay kiện cáo và cãi vã với người ngoài.`,
  },

  {
    id: 'thai-tue-tai-thien-di-hoa-ky',
    title: 'Thái Tuế + Hóa Kỵ tại Thiên Di - Cãi vã lớn',
    sao: ['Thái Tuế'],
    cung: ['Thiên Di'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 73,
    tomTat: `Khi Thái Tuế gặp Hóa Kỵ tại Thiên Di, đương số dễ xảy ra cãi vã lớn, thậm
chí dây dưa tới pháp luật.`,
  },

  {
    id: 'thai-tue-tai-thien-di-da',
    title: 'Thái Tuế + Đà La tại Thiên Di - Cãi vã lớn',
    sao: ['Thái Tuế'],
    cung: ['Thiên Di'],
    ketHop: ['Đà La'],
    doUuTien: 73,
    tomTat: `Khi Thái Tuế gặp Đà La tại Thiên Di, đương số dễ xảy ra cãi vã lớn, thậm
chí dây dưa tới pháp luật.`,
  },

  {
    id: 'thai-tue-tai-thien-di-kinh',
    title: 'Thái Tuế + Kình Dương tại Thiên Di - Cãi vã lớn',
    sao: ['Thái Tuế'],
    cung: ['Thiên Di'],
    ketHop: ['Kình Dương'],
    doUuTien: 73,
    tomTat: `Khi Thái Tuế gặp Kình Dương tại Thiên Di, đương số dễ xảy ra cãi vã lớn,
thậm chí dây dưa tới pháp luật.`,
  },

  {
    id: 'thai-tue-tai-thien-di-tam-minh',
    title: 'Thái Tuế + Tam Minh tại Thiên Di - Quý nhân nâng đỡ',
    sao: ['Thái Tuế'],
    cung: ['Thiên Di'],
    ketHop: ['Đào Hoa', 'Hồng Loan', 'Thiên Hỷ'],
    doUuTien: 73,
    tomTat: `Khi Thái Tuế đi cùng bộ **Tam Minh** (Đào Hoa, Hồng Loan, Thiên Hỷ) tại
Thiên Di, đương số được nhiều quý nhân nâng đỡ. Càng đi xa càng thuận lợi,
danh tiếng lan rộng, sự nghiệp "thuận buồm xuôi gió".`,
  },

  {
    id: 'thai-tue-tai-thien-di-tu-linh',
    title: 'Thái Tuế + Tứ Linh tại Thiên Di - Quý nhân nâng đỡ',
    sao: ['Thái Tuế'],
    cung: ['Thiên Di'],
    ketHop: ['Long Trì', 'Phượng Các', 'Bạch Hổ', 'Hoa Cái'],
    doUuTien: 73,
    tomTat: `Khi Thái Tuế đi cùng bộ **Tứ Linh** (Long Trì, Phượng Các, Bạch Hổ, Hoa
Cái) tại Thiên Di, đương số được nhiều quý nhân nâng đỡ. Càng đi xa càng
thuận lợi.`,
  },

  {
    id: 'thai-tue-tai-thien-di-xuong',
    title: 'Thái Tuế + Văn Xương tại Thiên Di - Quý nhân nâng đỡ',
    sao: ['Thái Tuế'],
    cung: ['Thiên Di'],
    ketHop: ['Văn Xương'],
    doUuTien: 73,
    tomTat: `Khi Thái Tuế đi cùng Văn Xương tại Thiên Di, đương số được nhiều quý nhân
nâng đỡ. Càng đi xa càng thuận lợi.`,
  },

  {
    id: 'thai-tue-tai-thien-di-khuc',
    title: 'Thái Tuế + Văn Khúc tại Thiên Di - Quý nhân nâng đỡ',
    sao: ['Thái Tuế'],
    cung: ['Thiên Di'],
    ketHop: ['Văn Khúc'],
    doUuTien: 73,
    tomTat: `Khi Thái Tuế đi cùng Văn Khúc tại Thiên Di, đương số được nhiều quý nhân
nâng đỡ. Càng đi xa càng thuận lợi.`,
  },

  {
    id: 'thai-tue-tai-thien-di-khoi',
    title: 'Thái Tuế + Thiên Khôi tại Thiên Di - Quý nhân nâng đỡ',
    sao: ['Thái Tuế'],
    cung: ['Thiên Di'],
    ketHop: ['Thiên Khôi'],
    doUuTien: 73,
    tomTat: `Khi Thái Tuế đi cùng Thiên Khôi tại Thiên Di, đương số được nhiều quý
nhân nâng đỡ. Càng đi xa càng thuận lợi.`,
  },

  {
    id: 'thai-tue-tai-thien-di-viet',
    title: 'Thái Tuế + Thiên Việt tại Thiên Di - Quý nhân nâng đỡ',
    sao: ['Thái Tuế'],
    cung: ['Thiên Di'],
    ketHop: ['Thiên Việt'],
    doUuTien: 73,
    tomTat: `Khi Thái Tuế đi cùng Thiên Việt tại Thiên Di, đương số được nhiều quý
nhân nâng đỡ. Càng đi xa càng thuận lợi.`,
  },

  {
    id: 'thai-tue-tai-tat-ach',
    title: 'Thái Tuế tại Tật Ách',
    sao: ['Thái Tuế'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `Khi Thái Tuế đóng tại Tật Ách, đương số hay bị chuyện thị phi, kiện cáo,
tù tội, đánh đập, mổ xẻ và tai nạn dọc đường.`,
  },

  {
    id: 'thai-tue-tai-tat-ach-kinh',
    title: 'Thái Tuế + Kình Dương tại Tật Ách - Bệnh nặng mổ xẻ',
    sao: ['Thái Tuế'],
    cung: ['Tật Ách'],
    ketHop: ['Kình Dương'],
    doUuTien: 73,
    tomTat: `Khi Thái Tuế gặp Kình Dương tại Tật Ách, đương số dễ mắc bệnh nặng, phải
mổ xẻ nhiều lần hoặc dính líu kiện cáo.`,
  },

  {
    id: 'thai-tue-tai-tat-ach-da',
    title: 'Thái Tuế + Đà La tại Tật Ách - Bệnh nặng mổ xẻ',
    sao: ['Thái Tuế'],
    cung: ['Tật Ách'],
    ketHop: ['Đà La'],
    doUuTien: 73,
    tomTat: `Khi Thái Tuế gặp Đà La tại Tật Ách, đương số dễ mắc bệnh nặng, phải mổ xẻ
nhiều lần hoặc dính líu kiện cáo.`,
  },

  {
    id: 'thai-tue-tai-tat-ach-hoa-ky',
    title: 'Thái Tuế + Hóa Kỵ tại Tật Ách - Bệnh nặng mổ xẻ',
    sao: ['Thái Tuế'],
    cung: ['Tật Ách'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 73,
    tomTat: `Khi Thái Tuế gặp Hóa Kỵ tại Tật Ách, đương số dễ mắc bệnh nặng, phải mổ
xẻ nhiều lần hoặc dính líu kiện cáo.`,
  },

  {
    id: 'thai-tue-tai-tat-ach-khong',
    title: 'Thái Tuế + Địa Không tại Tật Ách - Bệnh nặng mổ xẻ',
    sao: ['Thái Tuế'],
    cung: ['Tật Ách'],
    ketHop: ['Địa Không'],
    doUuTien: 73,
    tomTat: `Khi Thái Tuế gặp Địa Không tại Tật Ách, đương số dễ mắc bệnh nặng, phải
mổ xẻ nhiều lần hoặc dính líu kiện cáo.`,
  },

  {
    id: 'thai-tue-tai-tat-ach-kiep',
    title: 'Thái Tuế + Địa Kiếp tại Tật Ách - Bệnh nặng mổ xẻ',
    sao: ['Thái Tuế'],
    cung: ['Tật Ách'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 73,
    tomTat: `Khi Thái Tuế gặp Địa Kiếp tại Tật Ách, đương số dễ mắc bệnh nặng, phải mổ
xẻ nhiều lần hoặc dính líu kiện cáo.`,
  },

  {
    id: 'thai-tue-tai-tat-ach-thien-hinh',
    title: 'Thái Tuế + Thiên Hình tại Tật Ách - Bệnh nặng mổ xẻ',
    sao: ['Thái Tuế'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Hình'],
    doUuTien: 73,
    tomTat: `Khi Thái Tuế gặp Thiên Hình tại Tật Ách, đương số dễ mắc bệnh nặng, phải
mổ xẻ nhiều lần hoặc dính líu kiện cáo.`,
  },

  {
    id: 'thai-tue-tai-tat-ach-luc-cat',
    title: 'Thái Tuế + Lục Cát tại Tật Ách - Bệnh phát hiện sớm',
    sao: ['Thái Tuế'],
    cung: ['Tật Ách'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 70,
    tomTat: `Khi Thái Tuế đi cùng bộ Lục Cát (Tả Phù, Hữu Bật, Văn Xương, Văn Khúc,
Thiên Khôi, Thiên Việt) tại Tật Ách, tác hại được giảm nhẹ — bệnh được phát
hiện sớm, đương số gặp thầy giỏi thuốc hay mà qua cơn hung hiểm, biến nguy
thành an.`,
  },

  {
    id: 'thai-tue-tai-tai-bach',
    title: 'Thái Tuế tại Tài Bạch',
    sao: ['Thái Tuế'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `Khi Thái Tuế đi cùng sao tốt tại Tài Bạch, đương số dễ kiếm tiền, "nói ra
tiền" — hợp với nghề buôn bán và pháp luật nhờ tài ăn nói khôn khéo cùng lý
luận sắc bén.

Đương số tỏ ra keo kiệt với tiền — giữ tiền chặt nhưng cũng khó hào phóng.`,
  },

  {
    id: 'thai-tue-tai-tai-bach-da',
    title: 'Thái Tuế + Đà La tại Tài Bạch - Tranh chấp tiền tài',
    sao: ['Thái Tuế'],
    cung: ['Tài Bạch'],
    ketHop: ['Đà La'],
    doUuTien: 70,
    tomTat: `Khi Thái Tuế gặp Đà La tại Tài Bạch, đương số hay vướng tranh chấp về
tiền tài:

- Dù có kiếm tiền nhanh, lợi bất ngờ, vẫn hay sinh tai họa và rủi ro
- Tiền bạc dễ "của thiên trả địa", hao tán vì kiện tụng
- Có thể bị kẻ xấu lợi dụng, dây vào kiện tụng và mất trắng`,
  },

  {
    id: 'thai-tue-tai-tai-bach-hoa-ky',
    title: 'Thái Tuế + Hóa Kỵ tại Tài Bạch - Tranh chấp tiền tài',
    sao: ['Thái Tuế'],
    cung: ['Tài Bạch'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `Khi Thái Tuế gặp Hóa Kỵ tại Tài Bạch, đương số hay vướng tranh chấp về
tiền tài:

- Tiền bạc dễ "của thiên trả địa", hao tán vì kiện tụng
- Có thể bị kẻ xấu lợi dụng, dây vào kiện tụng và mất trắng`,
  },

  {
    id: 'thai-tue-tai-tai-bach-khong',
    title: 'Thái Tuế + Địa Không tại Tài Bạch - Tranh chấp tiền tài',
    sao: ['Thái Tuế'],
    cung: ['Tài Bạch'],
    ketHop: ['Địa Không'],
    doUuTien: 70,
    tomTat: `Khi Thái Tuế gặp Địa Không tại Tài Bạch, đương số hay vướng tranh chấp về
tiền tài:

- Tiền bạc dễ "của thiên trả địa", hao tán vì kiện tụng
- Có thể bị kẻ xấu lợi dụng, dây vào kiện tụng và mất trắng`,
  },

  {
    id: 'thai-tue-tai-tai-bach-kiep',
    title: 'Thái Tuế + Địa Kiếp tại Tài Bạch - Tranh chấp tiền tài',
    sao: ['Thái Tuế'],
    cung: ['Tài Bạch'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Khi Thái Tuế gặp Địa Kiếp tại Tài Bạch, đương số hay vướng tranh chấp về
tiền tài:

- Tiền bạc dễ "của thiên trả địa", hao tán vì kiện tụng
- Có thể bị kẻ xấu lợi dụng, dây vào kiện tụng và mất trắng`,
  },

  {
    id: 'thai-tue-tai-tu-tuc',
    title: 'Thái Tuế tại Tử Tức',
    sao: ['Thái Tuế'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Khi Thái Tuế đóng tại Tử Tức, con cái không hợp tính cha mẹ — mỗi lần mở
miệng lại bất hòa do khắc khẩu.`,
  },

  {
    id: 'thai-tue-tai-tu-tuc-van-xuong',
    title: 'Thái Tuế + Văn Xương tại Tử Tức - con thông minh',
    sao: ['Thái Tuế'],
    ketHop: ['Văn Xương'],
    cung: ['Tử Tức'],
    doUuTien: 70,
    tomTat: `Khi Thái Tuế đi cùng Văn Xương tại Tử Tức, con cái của đương số thông
minh, tư duy tốt, thành đạt và trưởng thành — dễ thành danh.`,
  },

  {
    id: 'thai-tue-tai-tu-tuc-van-khuc',
    title: 'Thái Tuế + Văn Khúc tại Tử Tức - con thông minh',
    sao: ['Thái Tuế'],
    ketHop: ['Văn Khúc'],
    cung: ['Tử Tức'],
    doUuTien: 70,
    tomTat: `Khi Thái Tuế đi cùng Văn Khúc tại Tử Tức, con cái của đương số thông
minh, tư duy tốt, thành đạt và trưởng thành — dễ thành danh.`,
  },

  {
    id: 'thai-tue-tai-tu-tuc-thien-khoi',
    title: 'Thái Tuế + Thiên Khôi tại Tử Tức - con thông minh',
    sao: ['Thái Tuế'],
    ketHop: ['Thiên Khôi'],
    cung: ['Tử Tức'],
    doUuTien: 70,
    tomTat: `Khi Thái Tuế đi cùng Thiên Khôi tại Tử Tức, con cái của đương số thông
minh, tư duy tốt, thành đạt và trưởng thành — dễ thành danh.`,
  },

  {
    id: 'thai-tue-tai-tu-tuc-thien-viet',
    title: 'Thái Tuế + Thiên Việt tại Tử Tức - con thông minh',
    sao: ['Thái Tuế'],
    ketHop: ['Thiên Việt'],
    cung: ['Tử Tức'],
    doUuTien: 70,
    tomTat: `Khi Thái Tuế đi cùng Thiên Việt tại Tử Tức, con cái của đương số thông
minh, tư duy tốt, thành đạt và trưởng thành — dễ thành danh.`,
  },

  {
    id: 'thai-tue-tai-tu-tuc-da-la',
    title: 'Thái Tuế + Đà La tại Tử Tức',
    sao: ['Thái Tuế'],
    ketHop: ['Đà La'],
    cung: ['Tử Tức'],
    doUuTien: 70,
    tomTat: `Khi Thái Tuế gặp Đà La tại Tử Tức, quan hệ cha mẹ và con cái như nước với
lửa:

- Con cái ăn chơi đua đòi
- Dễ vướng tệ nạn, vi phạm pháp luật
- Cha mẹ phải lao tâm khổ tứ vì con`,
  },

  {
    id: 'thai-tue-tai-tu-tuc-kinh-duong',
    title: 'Thái Tuế + Kình Dương tại Tử Tức',
    sao: ['Thái Tuế'],
    ketHop: ['Kình Dương'],
    cung: ['Tử Tức'],
    doUuTien: 70,
    tomTat: `Khi Thái Tuế gặp Kình Dương tại Tử Tức, quan hệ cha mẹ và con cái như
nước với lửa:

- Con cái ăn chơi đua đòi
- Dễ vướng tệ nạn, vi phạm pháp luật
- Cha mẹ phải lao tâm khổ tứ vì con`,
  },

  {
    id: 'thai-tue-tai-tu-tuc-hoa-ky',
    title: 'Thái Tuế + Hóa Kỵ tại Tử Tức',
    sao: ['Thái Tuế'],
    ketHop: ['Hóa Kỵ'],
    cung: ['Tử Tức'],
    doUuTien: 70,
    tomTat: `Khi Thái Tuế gặp Hóa Kỵ tại Tử Tức, quan hệ cha mẹ và con cái như nước
với lửa:

- Con cái ăn chơi đua đòi
- Dễ vướng tệ nạn, vi phạm pháp luật
- Cha mẹ phải lao tâm khổ tứ vì con`,
  },

  {
    id: 'thai-tue-tai-tu-tuc-dia-khong',
    title: 'Thái Tuế + Địa Không tại Tử Tức',
    sao: ['Thái Tuế'],
    ketHop: ['Địa Không'],
    cung: ['Tử Tức'],
    doUuTien: 70,
    tomTat: `Khi Thái Tuế gặp Địa Không tại Tử Tức, quan hệ cha mẹ và con cái như nước
với lửa:

- Con cái ăn chơi đua đòi
- Dễ vướng tệ nạn, vi phạm pháp luật
- Cha mẹ phải lao tâm khổ tứ vì con`,
  },

  {
    id: 'thai-tue-tai-tu-tuc-dia-kiep',
    title: 'Thái Tuế + Địa Kiếp tại Tử Tức',
    sao: ['Thái Tuế'],
    ketHop: ['Địa Kiếp'],
    cung: ['Tử Tức'],
    doUuTien: 70,
    tomTat: `Khi Thái Tuế gặp Địa Kiếp tại Tử Tức, quan hệ cha mẹ và con cái như nước
với lửa:

- Con cái ăn chơi đua đòi
- Dễ vướng tệ nạn, vi phạm pháp luật
- Cha mẹ phải lao tâm khổ tứ vì con`,
  },

  {
    id: 'thai-tue-tai-phu-the',
    title: 'Thái Tuế tại Phu Thê',
    sao: ['Thái Tuế'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `Khi Thái Tuế đóng tại Phu Thê, vợ chồng đương số bất hòa, hay cãi vã và
lắm lời, có thể đi đến ly dị, ly hôn — trừ phi vợ hoặc chồng hành nghề luật
sư hay thẩm phán thì mới chuyển hóa được khẩu nghiệp này.

Đặc trưng đáng chú ý: vợ chồng nương tựa nhau, dính dấp nhau nhiều vì quyền
lợi, danh tiếng, địa vị và dư luận — ảnh hưởng bên ngoài tác động rất nặng
vào đời sống riêng tư.`,
  },

  {
    id: 'thai-tue-tai-phu-the-hoa-ky',
    title: 'Thái Tuế + Hóa Kỵ tại Phu Thê',
    sao: ['Thái Tuế'],
    ketHop: ['Hóa Kỵ'],
    cung: ['Phu Thê'],
    doUuTien: 73,
    tomTat: `Khi Thái Tuế gặp Hóa Kỵ tại Phu Thê, đời sống vợ chồng "trống đánh xuôi,
kèn thổi ngược" — hôn nhân khó tránh chia ly. Mối quan hệ ràng buộc bởi
trách nhiệm hoặc lợi ích nhiều hơn tình cảm — con cái cũng chịu ảnh hưởng.`,
  },

  {
    id: 'thai-tue-tai-phu-the-da-la',
    title: 'Thái Tuế + Đà La tại Phu Thê',
    sao: ['Thái Tuế'],
    ketHop: ['Đà La'],
    cung: ['Phu Thê'],
    doUuTien: 73,
    tomTat: `Khi Thái Tuế gặp Đà La tại Phu Thê, đời sống vợ chồng "trống đánh xuôi,
kèn thổi ngược" — hôn nhân khó tránh chia ly.`,
  },

  {
    id: 'thai-tue-tai-phu-the-kinh-duong',
    title: 'Thái Tuế + Kình Dương tại Phu Thê',
    sao: ['Thái Tuế'],
    ketHop: ['Kình Dương'],
    cung: ['Phu Thê'],
    doUuTien: 73,
    tomTat: `Khi Thái Tuế gặp Kình Dương tại Phu Thê, đời sống vợ chồng "trống đánh
xuôi, kèn thổi ngược" — hôn nhân khó tránh chia ly.`,
  },

  {
    id: 'thai-tue-tai-phu-the-dia-khong',
    title: 'Thái Tuế + Địa Không tại Phu Thê',
    sao: ['Thái Tuế'],
    ketHop: ['Địa Không'],
    cung: ['Phu Thê'],
    doUuTien: 73,
    tomTat: `Khi Thái Tuế gặp Địa Không tại Phu Thê, đời sống vợ chồng "trống đánh
xuôi, kèn thổi ngược" — hôn nhân khó tránh chia ly.`,
  },

  {
    id: 'thai-tue-tai-phu-the-dia-kiep',
    title: 'Thái Tuế + Địa Kiếp tại Phu Thê',
    sao: ['Thái Tuế'],
    ketHop: ['Địa Kiếp'],
    cung: ['Phu Thê'],
    doUuTien: 73,
    tomTat: `Khi Thái Tuế gặp Địa Kiếp tại Phu Thê, đời sống vợ chồng "trống đánh xuôi,
kèn thổi ngược" — hôn nhân khó tránh chia ly.`,
  },

  {
    id: 'thai-tue-tai-phu-the-thien-khoi',
    title: 'Thái Tuế + Thiên Khôi tại Phu Thê - vợ chồng nâng đỡ',
    sao: ['Thái Tuế'],
    ketHop: ['Thiên Khôi'],
    cung: ['Phu Thê'],
    doUuTien: 73,
    tomTat: `Khi Thái Tuế đi cùng Thiên Khôi tại Phu Thê, vợ chồng nâng đỡ nhau trong
sự nghiệp, hôn nhân bền chặt, gia đình có tiếng thơm trong xã hội.`,
  },

  {
    id: 'thai-tue-tai-phu-the-thien-viet',
    title: 'Thái Tuế + Thiên Việt tại Phu Thê - vợ chồng nâng đỡ',
    sao: ['Thái Tuế'],
    ketHop: ['Thiên Việt'],
    cung: ['Phu Thê'],
    doUuTien: 73,
    tomTat: `Khi Thái Tuế đi cùng Thiên Việt tại Phu Thê, vợ chồng nâng đỡ nhau trong
sự nghiệp, hôn nhân bền chặt, gia đình có tiếng thơm trong xã hội.`,
  },

  {
    id: 'thai-tue-tai-phu-the-van-xuong',
    title: 'Thái Tuế + Văn Xương tại Phu Thê - vợ chồng nâng đỡ',
    sao: ['Thái Tuế'],
    ketHop: ['Văn Xương'],
    cung: ['Phu Thê'],
    doUuTien: 73,
    tomTat: `Khi Thái Tuế đi cùng Văn Xương tại Phu Thê, vợ chồng nâng đỡ nhau trong
sự nghiệp, hôn nhân bền chặt, gia đình có tiếng thơm trong xã hội.`,
  },

  {
    id: 'thai-tue-tai-phu-the-van-khuc',
    title: 'Thái Tuế + Văn Khúc tại Phu Thê - vợ chồng nâng đỡ',
    sao: ['Thái Tuế'],
    ketHop: ['Văn Khúc'],
    cung: ['Phu Thê'],
    doUuTien: 73,
    tomTat: `Khi Thái Tuế đi cùng Văn Khúc tại Phu Thê, vợ chồng nâng đỡ nhau trong sự
nghiệp, hôn nhân bền chặt, gia đình có tiếng thơm trong xã hội.`,
  },

  {
    id: 'thai-tue-tai-phu-the-ta-phu',
    title: 'Thái Tuế + Tả Phù tại Phu Thê - vợ chồng nâng đỡ',
    sao: ['Thái Tuế'],
    ketHop: ['Tả Phù'],
    cung: ['Phu Thê'],
    doUuTien: 73,
    tomTat: `Khi Thái Tuế đi cùng Tả Phù tại Phu Thê, vợ chồng nâng đỡ nhau trong sự
nghiệp, hôn nhân bền chặt, gia đình có tiếng thơm trong xã hội.`,
  },

  {
    id: 'thai-tue-tai-phu-the-huu-bat',
    title: 'Thái Tuế + Hữu Bật tại Phu Thê - vợ chồng nâng đỡ',
    sao: ['Thái Tuế'],
    ketHop: ['Hữu Bật'],
    cung: ['Phu Thê'],
    doUuTien: 73,
    tomTat: `Khi Thái Tuế đi cùng Hữu Bật tại Phu Thê, vợ chồng nâng đỡ nhau trong sự
nghiệp, hôn nhân bền chặt, gia đình có tiếng thơm trong xã hội.`,
  },

  {
    id: 'thai-tue-tai-huynh-de',
    title: 'Thái Tuế tại Huynh Đệ',
    sao: ['Thái Tuế'],
    cung: ['Huynh Đệ'],
    doUuTien: 72,
    tomTat: `Khi Thái Tuế đóng tại Huynh Đệ, anh chị em trong gia đình tuy có khắc khẩu
và khác chí hướng nhưng vẫn có sự giúp đỡ qua lại. Trong anh chị em có người
cô độc, đau bệnh.`,
  },

  {
    id: 'thai-tue-dai-van-tot',
    title: 'Thái Tuế đại vận - thuận lợi',
    sao: ['Thái Tuế'],
    doUuTien: 55,
    tomTat: `Khi đại vận 10 năm gặp Thái Tuế, công danh đương số thuận lợi, gặp nhiều
may mắn và dễ thành công.

Đây là giai đoạn:

- Học hành, thi cử thuận lợi
- Sự nghiệp thăng tiến
- Có cơ hội củng cố danh tiếng
- Nói lời nào ra trọng lượng lời ấy

Khi có thêm cát tinh trong đại vận, khó khăn trước mắt cũng chính là cơ hội
giúp đương số trưởng thành, mở ra hướng phát triển tích cực.`,
  },

  {
    id: 'thai-tue-tieu-han-xau',
    title: 'Thái Tuế tiểu hạn - bất lợi',
    sao: ['Thái Tuế'],
    doUuTien: 55,
    tomTat: `Khi tiểu hạn (1 năm) gặp Thái Tuế, đương số gặp cảnh không tốt chút nào —
trái ngược hoàn toàn với đại vận.

Các biến cố có thể xảy ra:

- Cãi vã, đôi co trong năm đó
- Có thể đi dạy học
- Thất tình, cô độc
- Cẩn thận khi lập gia đình trong năm này
- Hay sinh quan tụng, khẩu thiệt
- Thời vận gian truân, vất vả

Khi có thêm Đà La hoặc Kiếp Sát: ra ngoài lắm tai nạn, nguy hại đến tính
mạng.

Khi có nhiều sát tinh nặng (Đà La, Kiếp Sát, Thiên Hình, Hóa Kỵ), đương số
dễ vướng:

- Kiện tụng, thị phi
- Tai nạn ảnh hưởng tính mạng
- Công việc và tài chính lao đao

Cách hóa giải hạn Thái Tuế:

- Giữ gìn lời ăn tiếng nói — tránh hơn thua khi giao tiếp, "chín bỏ làm
  mười"
- Tránh dính tới pháp luật — không ký hợp đồng thiếu rõ ràng, không đứng
  tên hộ
- Đi lại cẩn trọng — đặc biệt khi đi cùng Đà La, Kình Dương, Kiếp Sát thì
  hạn chế xuất hành xa
- Kiểm soát cảm xúc trong công việc và tình cảm — không quyết định vội vàng
  về đất đai, đầu tư`,
  },

  {
    id: 'thai-tue-pham-xung-truc-hinh',
    title: 'Phạm / Xung / Trực / Hình Thái Tuế hàng năm',
    sao: ['Thái Tuế'],
    doUuTien: 50,
    tomTat: `Về khái niệm Lưu Thái Tuế hàng năm: hàng năm có Lưu Thái Tuế an theo chi
năm hiện tại (ví dụ năm Tý thì Lưu Thái Tuế tại cung Tý).

Năm bị bốn cách sau thì xảy ra nhiều mất mát, thua thiệt:

- **Phạm Thái Tuế** — tuổi trùng chi năm hiện tại (ví dụ tuổi Tý gặp năm Tý)
- **Xung Thái Tuế** — tuổi xung với chi năm hiện tại (Tý xung Ngọ)
- **Trực Thái Tuế** — tuổi cùng tam hợp với chi năm
- **Hình Thái Tuế** — tuổi nằm trong tứ hành xung với chi năm

Năm phạm Thái Tuế thường có:

- Mất mát, thua thiệt
- Tai nạn, bệnh tật
- Kiện tụng, thị phi
- Bất ổn về tinh thần

Cách hóa giải:

- Cúng giải hạn Thái Tuế đầu năm
- Tích đức, làm việc thiện
- Giữ tâm an — không tranh chấp, không kiện cáo
- Ăn nói cẩn trọng, tránh khẩu nghiệp
- Bố thí, phóng sinh đầu năm`,
  },

  {
    id: 'thai-tue-loi-khuyen-tu-duong',
    title: 'Lời khuyên tu dưỡng cho người Thái Tuế',
    sao: ['Thái Tuế'],
    doUuTien: 35,
    tomTat: `Sao Thái Tuế là "con dao hai lưỡi" trong khoa Tử Vi.

Nếu biết tu dưỡng, Thái Tuế trở thành quý tinh hỗ trợ công danh:

- Lý luận sắc bén thành biện luận có ích
- Tranh đấu thành bảo vệ lẽ phải
- Bảo thủ thành kiên định nguyên tắc

Nếu bảo thủ và nóng nảy, đương số dễ chuốc họa vào thân:

- Lời nói thành gươm giáo
- Tranh đấu thành báo thù, kiện tụng
- Bảo thủ thành cô lập, không ai phục

Bí quyết hóa Thái Tuế:

- Tu khẩu — lời nói trước khi thốt ra phải nghĩ ba lần
- Lấy đức hóa sát — dùng đức độ thay tranh đấu
- Dùng trí tuệ thay lý luận — không hơn thua trong câu chữ
- Tích cực làm việc thiện — phước báu hóa giải khẩu nghiệp
- Học nhẫn — biết lùi để tiến`,
  },
];
