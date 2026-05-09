import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO TANG MÔN - Mộc, Bại Tinh, vòng Thái Tuế (vị trí 3).
 * Một trong Lục Bại Tinh (Song Hao Tang Hổ Khốc Hư).
 * LUÔN ĐỐI XUNG Bạch Hổ - cặp Tang-Hổ kiếp nghiệp (phần CHUNG đã viết tại bach-ho.ts).
 * Tam hợp Tang Tuế Điếu (Tang Môn + Thái Tuế + Điếu Khách) - bất mãn, đấu tranh.
 *
 * Đắc địa Dần Thân Mão Dậu (giống Bạch Hổ).
 */
export const luanGiai_TangMon: DoanLuanGiai[] = [
  {
    id: 'tang-mon-tinh-chat-chung',
    title: 'Tang Môn - Đặc tính chung',
    sao: ['Tang Môn'],
    doUuTien: 32,
    tomTat: `**Tang Môn** là phụ tinh thuộc loại bại tinh trong vòng Thái Tuế, đứng
ở vị trí thứ ba. Sao này thuộc ngũ hành Mộc, hóa khí là bại tinh, thường được
gọi tắt là Tang.

Tang Môn nằm trong bộ Lục Bại Tinh — gồm Tiểu Hao, Đại Hao, Tang Môn, Bạch Hổ,
Thiên Khốc và Thiên Hư, còn được gọi là Song Hao Tang Hổ Khốc Hư. Sao này luôn
đối xung với Bạch Hổ, hợp thành cặp Tang - Hổ kiếp nghiệp duyên nợ; đồng thời
tam hợp với Thái Tuế và Điếu Khách, tạo thành tam hợp Tang - Tuế - Điếu mang
tinh thần bất mãn và đấu tranh, luôn có Thiên Mã đồng hành.

Về vị trí, Tang Môn **đắc** ở Dần, Thân, Mão, Dậu; **hãm** ở các cung còn lại
là Tý, Sửu, Thìn, Tỵ, Ngọ, Mùi, Tuất, Hợi.

Đặc tính cốt lõi của sao là tang tóc, hình thương, tai nạn, tang thương, bệnh
tật và chết chóc. Cùng Bạch Hổ đối xung, Tang Môn được coi là sao mang nghiệp
nặng trong tử vi — duyên nợ kiếp này phải trả.`,
  },

  {
    id: 'tang-mon-tam-hop-tang-tue-dieu',
    title: 'Tam hợp Tang - Tuế - Điếu (Tang Môn + Thái Tuế + Điếu Khách)',
    sao: ['Tang Môn', 'Thái Tuế', 'Điếu Khách'],
    doUuTien: 60,
    tomTat: `Tam hợp Tang - Tuế - Điếu hợp bởi Tang Môn, Thái Tuế và Điếu Khách
là vòng tam hợp đặc trưng cho sự bất mãn với hoàn cảnh, chống đối lại an bài
định mệnh và mang tinh thần đấu tranh, khao khát thay đổi. Bản chất chung của
bộ sao này là không chấp nhận thua thiệt.

Có một quy luật bắt buộc với bộ tam hợp này: Tang - Tuế - Điếu luôn có Thiên
Mã đồng hành (tam hợp với Mã), nhờ đó tinh thần bất mãn được chuyển hóa thành
ý chí và nghị lực. Đương số có bộ này thường mang nghị lực ngầm để đấu tranh
và chứng tỏ bản lĩnh; khi Thiên Mã hội họp thì tinh thần càng mãnh liệt, đương
số tự tay lập nghiệp chứ không trông chờ số phận.

Bộ Tang - Tuế - Điếu trái ngược hoàn toàn với tam hợp Âm - Long - Trực vốn
nhường nhịn, ở hiền gặp lành — tam hợp này là ngọn lửa chiến đấu.`,
  },

  {
    id: 'tang-mon-luc-bai-tinh',
    title: 'Tang Môn trong Lục Bại Tinh - Song Hao Tang Hổ Khốc Hư',
    sao: ['Tang Môn'],
    ketHop: ['Tiểu Hao', 'Đại Hao', 'Bạch Hổ', 'Thiên Khốc', 'Thiên Hư'],
    doUuTien: 50,
    tomTat: `Lục Bại Tinh gồm Tiểu Hao, Đại Hao, Tang Môn, Bạch Hổ, Thiên Khốc
và Thiên Hư — quen gọi là Song Hao Tang Hổ Khốc Hư. Đây là sáu sao bại tinh
chính trong tử vi, mỗi sao đều mang đặc tính hao tổn, mất mát, buồn phiền.

Khi nhiều sao của bộ này hội tụ tại một cung quan trọng, vận trình của đương
số trở nên cực nặng: hao tài, buồn khổ, mất mát dồn dập, cần đến giải tinh
mạnh mới chế giảm được phần nào.`,
  },

  {
    id: 'tang-mon-tai-menh-dac-dia',
    title: 'Tang Môn tại Mệnh - đắc địa (Dần Thân Mão Dậu)',
    sao: ['Tang Môn'],
    cung: ['Mệnh'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    doUuTien: 80,
    tomTat: `Khi Tang Môn **đắc** ở Mệnh tại Dần, Thân, Mão hoặc Dậu, đương số
mang tính cách can đảm, quả cảm, có nghị lực và tài giỏi. Khả năng quyền biến
giúp đương số ứng phó được với mọi nghịch cảnh, kèm theo đó là khả năng xét
đoán, lý luận sắc bén và tài hùng biện.

Đương số ở thế đắc địa này thường đa năng và đa hiệu: thích hoạt động chính
trị, đồng thời có khả năng hiển đạt về võ nghiệp — nói cách khác, đây là bộ
sao văn võ song toàn. Các luận giải chuyên biệt theo giới tính được tách
riêng để tiện tham khảo.`,
  },

  {
    id: 'tang-mon-tai-menh-dac-dia-nam',
    title: 'Tang Môn Đắc địa tại Mệnh - Nam mệnh',
    sao: ['Tang Môn'],
    cung: ['Mệnh'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    gioiTinh: 'Nam',
    doUuTien: 73,
    tomTat: `Nam mệnh có Tang Môn **đắc** tại Mệnh là người đa năng, văn võ
song toàn — theo nhánh nào thì hiển đạt theo nhánh đó.`,
  },

  {
    id: 'tang-mon-tai-menh-dac-dia-nam-van-tinh',
    title: 'Tang Môn Đắc + Văn tinh tại Mệnh - Nam hiển đạt chính trị',
    sao: ['Tang Môn'],
    cung: ['Mệnh'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    gioiTinh: 'Nam',
    ketHop: ['Văn Xương', 'Văn Khúc', 'Lưu Niên Văn Tinh', 'Hóa Khoa'],
    doUuTien: 70,
    tomTat: `Nam mệnh có Tang Môn **đắc** tại Mệnh đi cùng Văn Xương, Văn Khúc,
Lưu Niên Văn Tinh hoặc Hóa Khoa thì hiển đạt về con đường chính trị.`,
  },

  {
    id: 'tang-mon-tai-menh-dac-dia-nam-vo-tinh-thien-hinh',
    title: 'Tang Môn Đắc + Thiên Hình tại Mệnh - Nam hiển đạt quân sự',
    sao: ['Tang Môn'],
    cung: ['Mệnh'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    gioiTinh: 'Nam',
    ketHop: ['Thiên Hình'],
    doUuTien: 70,
    tomTat: `Nam mệnh có Tang Môn **đắc** tại Mệnh đi cùng Thiên Hình (võ tinh)
thì hiển đạt về con đường quân sự.`,
  },

  {
    id: 'tang-mon-tai-menh-dac-dia-nam-vo-tinh-thien-tuong',
    title: 'Tang Môn Đắc + Thiên Tướng tại Mệnh - Nam hiển đạt quân sự',
    sao: ['Tang Môn'],
    cung: ['Mệnh'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    gioiTinh: 'Nam',
    ketHop: ['Thiên Tướng'],
    doUuTien: 70,
    tomTat: `Nam mệnh có Tang Môn **đắc** tại Mệnh đi cùng Thiên Tướng (võ tinh)
thì hiển đạt về con đường quân sự.`,
  },

  {
    id: 'tang-mon-tai-menh-dac-dia-nam-vo-tinh-tuong-quan',
    title: 'Tang Môn Đắc + Tướng Quân tại Mệnh - Nam hiển đạt quân sự',
    sao: ['Tang Môn'],
    cung: ['Mệnh'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    gioiTinh: 'Nam',
    ketHop: ['Tướng Quân'],
    doUuTien: 70,
    tomTat: `Nam mệnh có Tang Môn **đắc** tại Mệnh đi cùng Tướng Quân (võ tinh)
thì hiển đạt về con đường quân sự.`,
  },

  {
    id: 'tang-mon-tai-menh-dac-dia-nu',
    title: 'Tang Môn Đắc địa tại Mệnh - Nữ mệnh khí phách',
    sao: ['Tang Môn'],
    cung: ['Mệnh'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    gioiTinh: 'Nữ',
    doUuTien: 73,
    tomTat: `Nữ mệnh có Tang Môn **đắc** tại Mệnh là người khí phách, ý chí
mạnh mẽ như đàn ông và mang tâm tính nam giới. Đương số rất đặc biệt: tự tay
lập nghiệp, quán xuyến được cả nội trợ lẫn ngoại giao, vừa đắc dụng trong gia
đình vừa đắc dụng ngoài xã hội.`,
  },

  {
    id: 'tang-mon-tai-menh-ham-dia',
    title: 'Tang Môn tại Mệnh - hãm địa',
    sao: ['Tang Môn'],
    cung: ['Mệnh'],
    chi: ['Tý', 'Sửu', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Tuất', 'Hợi'],
    doUuTien: 78,
    tomTat: `Khi Tang Môn **hãm** ở Mệnh tại Tý, Sửu, Thìn, Tỵ, Ngọ, Mùi, Tuất
hoặc Hợi, đương số mang tính ương ngạnh, ngoan cố, cứng đầu và bướng bỉnh.
Tâm trạng hay ưu tư, lo lắng, phiền muộn và cô độc; đương số thích chơi bời,
ăn ngon mặc đẹp và không nặng về gia giáo.

Về tâm lý nội tâm, diện mạo của đương số phảng phất nét buồn, ánh mắt nặng
trĩu tâm sự. Tính đa sầu đa cảm, hay lo xa và dễ xúc động, đôi khi rơi vào
trạng thái "lo bò trắng răng" — lo những chuyện chưa xảy ra hoặc không đáng
phải lo.

Bản tính nhạy cảm cộng với thói quen lo nhiều khiến đương số dễ rơi vào tình
trạng căng thẳng, stress kéo dài. Cảm xúc dồn nén lâu ngày dễ trở thành trầm
cảm hoặc rối loạn lo âu, vì vậy đương số cần học cách buông bỏ những ưu tư
vô hình.`,
  },

  {
    id: 'tang-mon-menh-mo-coi',
    title: 'Tang Môn thủ Mệnh - mồ côi sớm, gia đạo bất lợi',
    sao: ['Tang Môn'],
    cung: ['Mệnh'],
    doUuTien: 75,
    tomTat: `Khi Tang Môn thủ Mệnh — dù ở thế **đắc** — đương số vẫn bất lợi về
gia đạo. Đặc trưng nổi bật là mồ côi sớm, có khi mới lọt lòng mẹ; đây là sao
bất lợi nhất cho cả đại gia đình (gây cảnh mồ côi) lẫn tiểu gia đình (gây
xung khắc, ly cách).

Riêng với phái nữ, gia đạo và hôn nhân thường trắc trở: đương số phải muộn
chồng, phải cưới chạy tang, hoặc nếu không thì cũng góa bụa, đau khổ ưu phiền
vì chồng con.

Về sinh nở, nữ mệnh có Tang Môn thủ Mệnh có thể nguy hiểm tính mạng vì sinh
đẻ — mình chết hoặc con chết; đương số cũng dễ đau yếu tử cung, hư thai. Dù
sinh được con thì cũng hết sức khó nuôi.`,
  },

  {
    id: 'tang-mon-menh-mo-coi-sat-tinh',
    title: 'Tang Môn + Tứ Sát thủ Mệnh - Khổ cực bệnh trầm kha',
    sao: ['Tang Môn'],
    cung: ['Mệnh'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 70,
    tomTat: `Khi Tang Môn cùng Tứ Sát (Kình Dương, Đà La, Hỏa Tinh, Linh Tinh)
thủ Mệnh, đương số khổ cực, cô độc, khắc vợ chồng và có khả năng góa bụa.
Bộ sao này còn báo hiệu cảnh bị bắt bớ giam cầm, mắc bệnh trầm kha, tai nạn
nguy hiểm tính mạng và có thể yểu tử. Cần đến sao giải mạnh mới chế giảm
được.`,
  },

  {
    id: 'tang-mon-tai-menh-tai-loc',
    title: 'Tang Môn tại Mệnh - tài lộc đặc biệt',
    sao: ['Tang Môn'],
    cung: ['Mệnh'],
    doUuTien: 70,
    tomTat: `Đường tài lộc của đương số có Tang Môn tại Mệnh mang sắc thái rất
khác lạ. Tiền của có thể đến từ những biến cố hay chuyện buồn — như phúng
điếu, thừa kế từ người đã khuất, hoặc từ các khoản bảo hiểm và đền bù liên
quan đến tai nạn, mất mát.

Đặc tính kiếm tiền của đương số gắn liền với trăn trở và suy tư thường trực:
đồng tiền là thành quả của lo toan mệt mỏi, đi kèm toan tính và áp lực tinh
thần đè nặng.

Về nghề nghiệp, Tang Môn rất hợp với những công việc đòi hỏi chiều sâu nội
tâm và tinh thần đấu tranh — như luật sư, thẩm phán, chính trị gia, nhà phê
bình, nhà văn, nhà thơ — hoặc các nghề liên quan đến tang lễ, bảo hiểm và
thừa kế.`,
  },

  {
    id: 'tang-mon-tau-thu',
    title: 'Tang Môn + Tấu Thư - tài hùng biện',
    sao: ['Tang Môn'],
    ketHop: ['Tấu Thư'],
    doUuTien: 75,
    tomTat: `Tang Môn cùng Tấu Thư là cặp sao hợp nghĩa về khoa ngôn ngữ và
tài hùng biện. Đương số có khả năng diễn thuyết hùng hồn, lời lẽ lưu loát và
khích động, mang sức quyến rũ bằng ngôn ngữ rất sâu sắc.

Các nghề tiêu biểu cho cách cục này là chính khách, ứng viên tranh cử, giáo
sư, quan tòa và luật sư. Đây cũng được xem là cách hóa giải đẹp nhất cho Tang
Môn — đương số biến nỗi đau thành tiếng nói.`,
  },

  {
    id: 'tang-mon-tau-thu-luu-ha',
    title: 'Tang Môn + Tấu Thư + Lưu Hà - Hùng biện quốc tế',
    sao: ['Tang Môn'],
    ketHop: ['Tấu Thư', 'Lưu Hà'],
    doUuTien: 70,
    tomTat: `Khi Tang Môn cùng Tấu Thư có thêm Lưu Hà, tài hùng biện của đương
số đạt mức quốc tế: hiển đạt về khoa cử (thi đỗ cao), công danh lớn — chức
phận cao và nhiều người biết tiếng — đồng thời rất giỏi về tâm lý chiến, biết
cách huy động quần chúng và vận động tinh thần.`,
  },

  {
    id: 'tang-mon-tau-thu-luu-khoc',
    title: 'Tang Môn + Tấu Thư + Lưu Thiên Khốc - Hùng biện quốc tế',
    sao: ['Tang Môn'],
    ketHop: ['Tấu Thư', 'Lưu Thiên Khốc'],
    doUuTien: 70,
    tomTat: `Khi Tang Môn cùng Tấu Thư có thêm Lưu Thiên Khốc, tài hùng biện
của đương số đạt mức quốc tế: hiển đạt về khoa cử, công danh lớn và rất giỏi
về tâm lý chiến.`,
  },

  {
    id: 'tang-mon-tau-thu-luu-hu',
    title: 'Tang Môn + Tấu Thư + Lưu Thiên Hư - Hùng biện quốc tế',
    sao: ['Tang Môn'],
    ketHop: ['Tấu Thư', 'Lưu Thiên Hư'],
    doUuTien: 70,
    tomTat: `Khi Tang Môn cùng Tấu Thư có thêm Lưu Thiên Hư, tài hùng biện của
đương số đạt mức quốc tế: hiển đạt về khoa cử, công danh lớn và rất giỏi về
tâm lý chiến.`,
  },

  {
    id: 'tang-mon-tau-thu-xuong',
    title: 'Tang Môn + Tấu Thư + Văn Xương - Hùng biện quốc tế',
    sao: ['Tang Môn'],
    ketHop: ['Tấu Thư', 'Văn Xương'],
    doUuTien: 70,
    tomTat: `Khi Tang Môn cùng Tấu Thư có thêm Văn Xương, tài hùng biện của
đương số đạt mức quốc tế: hiển đạt về khoa cử, công danh lớn và rất giỏi về
tâm lý chiến.`,
  },

  {
    id: 'tang-mon-tau-thu-khuc',
    title: 'Tang Môn + Tấu Thư + Văn Khúc - Hùng biện quốc tế',
    sao: ['Tang Môn'],
    ketHop: ['Tấu Thư', 'Văn Khúc'],
    doUuTien: 70,
    tomTat: `Khi Tang Môn cùng Tấu Thư có thêm Văn Khúc, tài hùng biện của
đương số đạt mức quốc tế: hiển đạt về khoa cử, công danh lớn và rất giỏi về
tâm lý chiến.`,
  },

  {
    id: 'tang-mon-tai-menh-khoi-viet-quang-quy',
    title: 'Tang Môn + Khôi Việt + Quang Quý tại Mệnh',
    sao: ['Tang Môn'],
    cung: ['Mệnh'],
    ketHop: ['Thiên Khôi', 'Thiên Việt', 'Ân Quang', 'Thiên Quý'],
    doUuTien: 70,
    tomTat: `Khi Tang Môn ở Mệnh hội cùng Thiên Khôi, Thiên Việt, Ân Quang và
Thiên Quý, đương số hay âm thầm giúp đỡ người khác. Theo lý "ở hiền gặp
lành", đương số dễ được quý nhân nâng đỡ trong những lúc cần thiết.`,
  },

  {
    id: 'tang-mon-tai-menh-ta-huu',
    title: 'Tang Môn + Tả Phù + Hữu Bật tại Mệnh',
    sao: ['Tang Môn'],
    cung: ['Mệnh'],
    ketHop: ['Tả Phù', 'Hữu Bật'],
    doUuTien: 70,
    tomTat: `Khi Tang Môn ở Mệnh đi cùng Tả Phù và Hữu Bật, đương số bên ngoài
thể hiện tính cách hòa đồng và biết giữ hòa khí, nhưng bên trong lại che giấu
cảm xúc, không thể hiện bất mãn để bảo vệ các mối quan hệ xã hội.

Nét tính cách khó đoán này biến đương số thành một cá nhân thú vị, dễ mang
lại niềm vui bất ngờ cho những người xung quanh.`,
  },

  {
    id: 'tang-mon-menh-hoa-linh-hinh',
    title: 'Tang Môn + Hỏa Tinh tại Mệnh - Cảm xúc bộc phát',
    sao: ['Tang Môn'],
    cung: ['Mệnh'],
    ketHop: ['Hỏa Tinh'],
    doUuTien: 68,
    tomTat: `Khi Tang Môn cùng Hỏa Tinh tại Mệnh, cảm xúc kìm nén lâu ngày của
đương số dễ bộc phát, gây hậu quả khó lường. Đương số dễ rơi vào trạng thái
liều lĩnh, mạo hiểm, thậm chí có thể tổn hại đến chính bản thân.`,
  },

  {
    id: 'tang-mon-menh-linh',
    title: 'Tang Môn + Linh Tinh tại Mệnh - Cảm xúc bộc phát',
    sao: ['Tang Môn'],
    cung: ['Mệnh'],
    ketHop: ['Linh Tinh'],
    doUuTien: 68,
    tomTat: `Khi Tang Môn cùng Linh Tinh tại Mệnh, cảm xúc kìm nén lâu ngày
của đương số dễ bộc phát, gây hậu quả khó lường. Đương số dễ rơi vào trạng
thái liều lĩnh, mạo hiểm, thậm chí có thể tổn hại đến chính bản thân.`,
  },

  {
    id: 'tang-mon-menh-thien-hinh',
    title: 'Tang Môn + Thiên Hình tại Mệnh - Cảm xúc bộc phát',
    sao: ['Tang Môn'],
    cung: ['Mệnh'],
    ketHop: ['Thiên Hình'],
    doUuTien: 68,
    tomTat: `Khi Tang Môn cùng Thiên Hình tại Mệnh, cảm xúc kìm nén lâu ngày
của đương số dễ bộc phát, gây hậu quả khó lường. Đương số dễ rơi vào trạng
thái liều lĩnh, mạo hiểm, thậm chí có thể tổn hại đến chính bản thân.`,
  },

  {
    id: 'tang-mon-menh-kinh',
    title: 'Tang Môn + Kình Dương tại Mệnh - Lập dị bị cô lập',
    sao: ['Tang Môn'],
    cung: ['Mệnh'],
    ketHop: ['Kình Dương'],
    doUuTien: 68,
    tomTat: `Khi Tang Môn cùng Kình Dương tại Mệnh, đương số khó tính và lập
dị, khiến những người xung quanh rất khó để làm hài lòng hay thấu hiểu. Cách
này dễ đẩy đương số vào cảnh bị cô lập hoặc bị người đời ghét bỏ.`,
  },

  {
    id: 'tang-mon-menh-da',
    title: 'Tang Môn + Đà La tại Mệnh - Lập dị bị cô lập',
    sao: ['Tang Môn'],
    cung: ['Mệnh'],
    ketHop: ['Đà La'],
    doUuTien: 68,
    tomTat: `Khi Tang Môn cùng Đà La tại Mệnh, đương số khó tính và lập dị,
khiến những người xung quanh rất khó để làm hài lòng hay thấu hiểu. Cách này
dễ đẩy đương số vào cảnh bị cô lập hoặc bị người đời ghét bỏ.`,
  },

  {
    id: 'tang-mon-menh-khong',
    title: 'Tang Môn + Địa Không tại Mệnh - Lập dị, có thể giác ngộ',
    sao: ['Tang Môn'],
    cung: ['Mệnh'],
    ketHop: ['Địa Không'],
    doUuTien: 68,
    tomTat: `Khi Tang Môn cùng Địa Không tại Mệnh, đương số khó tính và lập
dị, dễ bị cô lập như khi gặp Kình Dương hay Đà La. Tuy nhiên cách này lại có
một mặt tích cực bất ngờ: khi sự bất mãn đạt đến cùng cực dưới tác động của
Địa Không, đương số có thể nhìn thấu sự hư ảo của cuộc đời, biến bất mãn
thành động lực phát triển trên con đường tu tập.`,
  },

  {
    id: 'tang-mon-menh-kiep',
    title: 'Tang Môn + Địa Kiếp tại Mệnh - Lập dị, có thể giác ngộ',
    sao: ['Tang Môn'],
    cung: ['Mệnh'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 68,
    tomTat: `Khi Tang Môn cùng Địa Kiếp tại Mệnh, đương số khó tính và lập dị,
dễ bị cô lập. Mặt tích cực của cách này là khi sự bất mãn đạt đến cùng cực
dưới tác động của Địa Kiếp, đương số có thể nhìn thấu sự hư ảo của cuộc đời,
biến bất mãn thành động lực phát triển trên con đường tu tập.`,
  },

  {
    id: 'tang-mon-tai-phu-mau',
    title: 'Tang Môn tại Phụ Mẫu',
    sao: ['Tang Môn'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Khi Tang Môn đóng tại Phụ Mẫu, đương số sinh ra đã có tang trong
nhà, hoặc cha mẹ nghèo khổ, đau yếu, hoặc gia đình phải thay đổi nơi ăn chốn
ở.

Đây là cung phối hợp với Tang Môn báo hiệu việc mất mẹ hoặc cha sớm — đặc
biệt rõ rệt nếu sao này hãm địa hoặc có thêm sát tinh hội họp.`,
  },

  {
    id: 'tang-mon-tai-phuc-duc',
    title: 'Tang Môn tại Phúc Đức',
    sao: ['Tang Môn'],
    cung: ['Phúc Đức'],
    doUuTien: 70,
    tomTat: `Khi Tang Môn đóng tại Phúc Đức, đương số tổn thọ và gia đình
không toàn vẹn. Phúc phần dòng họ suy giảm, vì vậy đương số cần đặc biệt
chú trọng làm phúc, tích đức để bù đắp.`,
  },

  {
    id: 'tang-mon-tai-dien-trach',
    title: 'Tang Môn tại Điền Trạch',
    sao: ['Tang Môn'],
    cung: ['Điền Trạch'],
    doUuTien: 72,
    tomTat: `Tang Môn đóng tại Điền Trạch ảnh hưởng tới nhà cửa, đất đai và
sản nghiệp của đương số; sự cát hung phụ thuộc nhiều vào các sao đi kèm —
xem các luận giải kết hợp ở dưới.`,
  },

  {
    id: 'tang-mon-tai-dien-trach-hoa-tinh',
    title: 'Tang Môn + Hỏa Tinh tại Điền Trạch - Tang Hỏa cháy nhà',
    sao: ['Tang Môn'],
    cung: ['Điền Trạch'],
    ketHop: ['Hỏa Tinh'],
    doUuTien: 70,
    tomTat: `Khi Tang Môn cùng Hỏa Tinh tại Điền Trạch (cách Tang Hỏa), nhà của
đương số có nguy cơ bị cháy hoặc cháy một phần.`,
  },

  {
    id: 'tang-mon-tai-dien-trach-tang-phuc-khong-phu',
    title: 'Tang Môn + Phục Binh + Địa Không + Thiên Phù tại Điền Trạch - Vô sản',
    sao: ['Tang Môn'],
    cung: ['Điền Trạch'],
    ketHop: ['Phục Binh', 'Địa Không', 'Thiên Phù'],
    doUuTien: 70,
    tomTat: `Khi Tang Môn cùng Phục Binh, Địa Không và Thiên Phù tụ tại Điền
Trạch (cách Tang Phục Không Phù), đương số rơi vào cảnh vô sản — không có
tài sản nhà cửa để dựa vào.`,
  },

  {
    id: 'tang-mon-tai-dien-trach-tang-dao-hong',
    title: 'Tang Môn + Đào Hoa + Hồng Loan tại Điền Trạch - Tang Đào Hồng',
    sao: ['Tang Môn'],
    cung: ['Điền Trạch'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 70,
    tomTat: `Khi Tang Môn cùng Đào Hoa và Hồng Loan tại Điền Trạch (cách Tang
Đào Hồng), đương số được hưởng di sản của cô dì để lại.`,
  },

  {
    id: 'tang-mon-tai-tat-ach',
    title: 'Tang Môn tại Tật Ách - máu huyết, tinh thần',
    sao: ['Tang Môn'],
    cung: ['Tật Ách'],
    doUuTien: 80,
    tomTat: `Khi Tang Môn đóng tại Tật Ách, đương số dễ mắc hai loại bệnh tật
song song nhau.

Loại thứ nhất là bệnh thuộc về tinh thần: tâm trạng âu sầu, u buồn, ủy mị,
bi quan, dễ rơi vào trầm cảm hoặc rối loạn lo âu kéo dài.

Loại thứ hai là bệnh vật chất liên quan đến máu huyết và gân cốt: hoại huyết,
áp huyết cao, đau gân, đau tim, nhức xương, tê thấp.

Đối với phụ nữ, tình trạng khí huyết kém còn dẫn đến đau yếu kinh nguyệt,
gặp vấn đề về tử cung và ảnh hưởng đến chuyện sinh nở.

Một lưu ý quan trọng: bệnh hoạn này càng rõ rệt ngay cả khi Tang Môn đóng ở
vị trí đắc cách — tức là đắc địa cũng không miễn nhiễm được.`,
  },

  {
    id: 'tang-mon-tai-tu-tuc',
    title: 'Tang Môn tại Tử Tức',
    sao: ['Tang Môn'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Khi Tang Môn đóng tại Tử Tức, đường con cái của đương số khó
khăn: khó sinh, sinh non ngày tháng, sinh con khó nuôi, hoặc có khi sinh
con nhưng không nuôi được.`,
  },

  {
    id: 'tang-mon-tai-tu-tuc-kinh',
    title: 'Tang Môn + Kình Dương tại Tử Tức - Không con',
    sao: ['Tang Môn'],
    cung: ['Tử Tức'],
    ketHop: ['Kình Dương'],
    doUuTien: 70,
    tomTat: `Khi Tang Môn cùng Kình Dương tại Tử Tức, đương số có khả năng
không con.`,
  },

  {
    id: 'tang-mon-tai-tu-tuc-that-sat',
    title: 'Tang Môn + Thất Sát tại Tử Tức - Không con',
    sao: ['Tang Môn'],
    cung: ['Tử Tức'],
    ketHop: ['Thất Sát'],
    doUuTien: 70,
    tomTat: `Khi Tang Môn cùng Thất Sát tại Tử Tức, đương số có khả năng không
con.`,
  },

  {
    id: 'tang-mon-tai-tu-tuc-khong',
    title: 'Tang Môn + Địa Không tại Tử Tức - Sát con',
    sao: ['Tang Môn'],
    cung: ['Tử Tức'],
    ketHop: ['Địa Không'],
    doUuTien: 70,
    tomTat: `Khi Tang Môn cùng Địa Không tại Tử Tức, đương số ứng vào cảnh sát
con.`,
  },

  {
    id: 'tang-mon-tai-tu-tuc-kiep',
    title: 'Tang Môn + Địa Kiếp tại Tử Tức - Sát con',
    sao: ['Tang Môn'],
    cung: ['Tử Tức'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Khi Tang Môn cùng Địa Kiếp tại Tử Tức, đương số ứng vào cảnh sát
con.`,
  },

  {
    id: 'tang-mon-tai-tu-tuc-thai',
    title: 'Tang Môn + Thai tại Tử Tức - Sảy thai',
    sao: ['Tang Môn'],
    cung: ['Tử Tức'],
    ketHop: ['Thai'],
    doUuTien: 70,
    tomTat: `Khi Tang Môn cùng Thai tại Tử Tức, đương số gặp cảnh sảy thai
hoặc con chết non.`,
  },

  {
    id: 'tang-mon-tai-tu-tuc-khong-kiep-thai',
    title: 'Tang Môn + Địa Không + Địa Kiếp + Thai tại Tử Tức - Phá thai',
    sao: ['Tang Môn'],
    cung: ['Tử Tức'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Thai'],
    doUuTien: 73,
    tomTat: `Khi Tang Môn hội cùng Địa Không, Địa Kiếp và Thai tại Tử Tức,
đương số có thể phải phá thai.`,
  },

  {
    id: 'tang-mon-tai-tu-tuc-thien-hinh',
    title: 'Tang Môn + Thiên Hình tại Tử Tức - Mổ xẻ khó đẻ',
    sao: ['Tang Môn'],
    cung: ['Tử Tức'],
    ketHop: ['Thiên Hình'],
    doUuTien: 73,
    tomTat: `Khi Tang Môn cùng Thiên Hình tại Tử Tức, đương số có thể phải mổ
xẻ lúc sinh nở, gặp cảnh con chết trong bụng mẹ, khó đẻ hoặc phải phá thai.`,
  },

  {
    id: 'tang-mon-tai-phu-the',
    title: 'Tang Môn tại Phu Thê',
    sao: ['Tang Môn'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `Khi Tang Môn đóng tại Phu Thê, đường tình duyên của đương số rơi
vào một trong các tình trạng sau: phải cưới chạy tang; tang chồng hoặc tang
vợ; ly thân hoặc ly hôn; nếu các cung trọng yếu khác cũng xấu thì có thể
phải ở góa.

Có một cách hóa giải đặc biệt cho Tang Môn ở cung này: lấy vợ hoặc chồng có
tật như mù lòa, què gãy thì mới tránh được hình khắc và chia ly. Đây là
phương pháp "lấy người tật để giải nghiệp" — một cách hóa giải khá độc đáo
trong tử vi.`,
  },

  {
    id: 'tang-mon-tai-huynh-de',
    title: 'Tang Môn tại Huynh Đệ',
    sao: ['Tang Môn'],
    cung: ['Huynh Đệ'],
    doUuTien: 70,
    tomTat: `Khi Tang Môn đóng tại Huynh Đệ, đương số thường mất anh chị em
trong đời.`,
  },

  {
    id: 'tang-mon-tai-huynh-de-truc-phu',
    title: 'Tang Môn + Trực Phù tại Huynh Đệ - Bất hòa',
    sao: ['Tang Môn'],
    cung: ['Huynh Đệ'],
    ketHop: ['Trực Phù'],
    doUuTien: 65,
    tomTat: `Khi Tang Môn cùng Trực Phù tại Huynh Đệ (cách Tang Môn Trực Tuế),
anh chị em của đương số bất hòa với nhau.`,
  },

  {
    id: 'tang-mon-tai-huynh-de-thien-ma',
    title: 'Tang Môn + Thiên Mã tại Huynh Đệ - Ly tán',
    sao: ['Tang Môn'],
    cung: ['Huynh Đệ'],
    ketHop: ['Thiên Mã'],
    doUuTien: 65,
    tomTat: `Khi Tang Môn cùng Thiên Mã tại Huynh Đệ (cách Tang Mã), anh chị
em của đương số ly tán — mỗi người một phương.`,
  },

  {
    id: 'tang-mon-han-co-tang',
    title: 'Tang Môn vào hạn - các cách có TANG',
    sao: ['Tang Môn'],
    doUuTien: 70,
    tomTat: `Khi Tang Môn vào hạn, có một số bộ kết hợp ứng vào việc có tang.

Các cặp Tang + Mã + Khốc + Hư hoặc Tang + Quả Tú + Khốc + Hư đều ứng vào tang
sự. Tương tự với Tang Môn + Bệnh Phù + Điếu Khách, hoặc Tang + Thiên Hình +
Điếu Khách.

Bộ Tang Môn + Thiên Khốc + Thiên Mã (cách Tang Khốc Mã) báo hiệu súc vật
chết vì bệnh tật. Bộ Tang + Điếu Khách + Hóa Kỵ + Thiên Hình (cách Tang Khách
Kỵ Hình) thì ứng vào cảnh tự ải — tức tự tử.

Khi xét Đại - Tiểu Hạn, cần lưu ý xem kỹ Tang Môn cùng Lưu Tang và Lưu Hổ.
Nếu các sao này đồng cung thì sự hung hiểm càng nhiều.`,
  },


  {
    id: 'tang-mon-loi-khuyen',
    title: 'Lời khuyên cho người Tang Môn',
    sao: ['Tang Môn'],
    doUuTien: 35,
    tomTat: `Đương số có Tang Môn dường như sinh ra đã gánh một phần "nghiệp"
lo toan của trần gian. Sức mạnh của đương số nằm ở trí tuệ sắc bén, nghị lực
ngầm, tài hùng biện và khả năng tự tay lập nghiệp; nhưng yếu điểm cũng rất rõ
— lo toan và áp lực tinh thần thường trực, dễ trầm cảm, gia đạo trắc trở và
mồ côi sớm.

Bí quyết phát huy tốt Tang Môn nằm ở việc kiểm soát cảm xúc — đây là yếu tố
tiên quyết. Đương số nên buông bỏ những lo lắng không cần thiết, tập không
biến sự cố nhỏ thành nỗi buồn quá lớn, và tìm đến các liệu pháp tu dưỡng
tinh thần như thiền định hay yoga.

Thay vì chìm đắm trong sự bất mãn hay than thân trách phận, đương số nên
biến đau thương thành hành động, dùng nghị lực của bộ Tang - Tuế - Điếu để
phấn đấu. Những luật sư giỏi hay nhà văn lớn đều biết cách mượn nỗi đau làm
chất liệu để thành danh — đây cũng là con đường mà Tang Môn cần đi.`,
  },
];
