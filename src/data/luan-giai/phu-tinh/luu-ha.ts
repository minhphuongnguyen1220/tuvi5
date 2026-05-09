import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO LƯU HÀ - Thủy, Ác Tinh.
 *
 * An theo CAN năm sinh.
 *
 * Đặc trưng:
 * - "Lưu Hà" = dòng nước trong mát nhẹ nhàng nhưng SÂU THẲM, LẶNG LẼ
 * - Đẹp bên ngoài nhưng luôn có HUNG HIỂM rình rập bên trong
 * - Nhẹ nhàng, khéo léo, mềm mỏng (lời ăn tiếng nói): bên trong toan tính
 * - Đặc tính: thâm trầm, sát phạt, thủy tai, sông nước, hung họa
 *
 * QUY LUẬT NGHỊCH LÝ ÂM DƯƠNG (cụ Thiên Lương):
 * - Lưu Hà + Kiếp Sát luôn ở vị trí nghịch lý âm dương trên lá số
 * - Đánh phá ngăn cản những ai KHÔNG XỨNG ĐÁNG được động vào Lộc Tồn
 * - Áp dụng cho tuổi Bính - Đinh - Mậu - Kỷ - Nhâm - Quý (Lộc Tồn vị trí
 * âm dương nghịch lý)
 *
 * Bộ Lưu Hà + Kiếp Sát = bộ đôi ác sát tinh sức phá hoại MẠNH.
 */
export const luanGiai_LuuHa: DoanLuanGiai[] = [
  {
    id: 'luu-ha-tinh-chat-chung',
    title: 'Lưu Hà - Đặc tính chung',
    sao: ['Lưu Hà'],
    doUuTien: 32,
    tomTat: `**Lưu Hà** là phụ tinh thuộc nhóm ác tinh, an theo Can năm sinh,
ngũ hành Thủy. Tên gọi "Lưu Hà" gợi hình ảnh dòng nước trong mát nhẹ nhàng
nhưng sâu thẳm, lặng lẽ — đẹp ở bề ngoài mà có hung hiểm rình rập bên trong.

Đặc tính nổi bật của sao này là thâm trầm, sát phạt, gắn với thủy tai, sông
nước và hung họa. Đương số có Lưu Hà bên ngoài thường nhẹ nhàng, khéo léo,
mềm mỏng trong lời ăn tiếng nói và cử chỉ; bên trong lại nhiều toan tính,
mưu mô, thủ đoạn, chỉ đợi con mồi mất cảnh giác mà nhấn chìm.

Lưu Hà có hai mặt rất rõ:

- Khi hội nhiều sát bại tinh, tính hung hiểm thể hiện rõ rệt; đặc biệt đi
  cùng Kiếp Sát thì thành bộ đôi ác sát tinh có sức phá hoại lớn.
- Khi hội phúc thiện tinh, Lưu Hà chuyển hóa thành tài năng diễn thuyết, MC,
  câu từ trau chuốt êm tai.

Quy luật nghịch lý âm dương: Lưu Hà cùng Kiếp Sát luôn ở vị trí nghịch lý âm
dương trên lá số, chuyên đánh phá những ai không xứng đáng được động vào Lộc
Tồn — áp dụng cho các tuổi Bính, Đinh, Mậu, Kỷ, Nhâm, Quý.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP NỔI TIẾNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'luu-ha-thanh-long-rong-xanh-vung-vay',
    title: 'Lưu Hà + Thanh Long - Rồng xanh vùng vẫy trên sông lớn',
    sao: ['Lưu Hà'],
    ketHop: ['Thanh Long'],
    doUuTien: 60,
    tomTat: `Khi Lưu Hà đồng cung Thanh Long, đương số được hưởng cách "rồng
xanh vùng vẫy trên sông lớn" (đã có ở thanh-long.ts).

Ý nghĩa của cách:

- Đương số gặp vận hội tốt, đắc thời
- Lợi cho thi cử, cầu danh, cầu tài
- Lợi cho làm ăn và thi thố tài năng
- Có tài hùng biện vô cùng logic`,
  },

  {
    id: 'luu-ha-cung-thuy-hop-vi',
    title: 'Lưu Hà tại Hợi/Tý - cung Thủy hợp vị',
    sao: ['Lưu Hà'],
    chi: ['Hợi', 'Tý'],
    doUuTien: 55,
    tomTat: `Khi Lưu Hà đóng tại Hợi hoặc Tý — cung Thủy hợp vị — đương số
phát huy được tài hùng biện, lợi cho việc thi cử và cầu danh. Tuy nhiên do
thiếu Thanh Long nên dịp may ít hơn so với cách Lưu Hà + Thanh Long, và
đương số dễ mắc nạn sông nước.`,
  },

  {
    id: 'luu-ha-tau-thu-thai-tue-hung-bien',
    title: 'Lưu Hà + Tấu Thư + Thái Tuế - Tài hùng biện logic',
    sao: ['Lưu Hà'],
    ketHop: ['Tấu Thư'],
    doUuTien: 55,
    tomTat: `Khi Lưu Hà gặp Tấu Thư (hoặc Thanh Long), đương số học giỏi và
có tài hùng biện vô cùng logic. Khả năng ăn nói lưu loát, biện luận sắc bén,
câu từ chặt chẽ và mạch lạc.

Hội thêm Thái Tuế, năng khiếu hùng biện càng nổi bật — đương số có thể trở
thành nhà chính trị, luật sư hoặc diễn giả.`,
  },

  {
    id: 'luu-ha-vu-co-tau-loc-dao-hong-nghe-sy',
    title: 'Lưu Hà + Vũ Khúc + Cơ + Tấu + Lộc + Đào Hồng - Nghệ sỹ nổi tiếng',
    sao: ['Lưu Hà'],
    ketHop: ['Vũ Khúc', 'Thiên Cơ'],
    doUuTien: 60,
    tomTat: `Khi Lưu Hà hội đủ Vũ Khúc, Thiên Cơ, Tấu Thư, Hóa Lộc cùng Đào
Hoa và Hồng Loan, đương số trở thành nghệ sỹ, ca sỹ hoặc nhà diễn thuyết
tài năng nổi tiếng. Câu từ trau chuốt êm tai, sức thu hút lớn, kéo về rất
đông khán giả; tài năng âm nhạc kết hợp với tài ngôn ngữ là điểm mạnh
chính.

Phân tích vai trò từng sao trong bộ:

- Vũ Khúc: tài năng âm nhạc
- Thiên Cơ: trí tuệ linh hoạt
- Tấu Thư: văn chương và hùng biện
- Hóa Lộc: tài lộc, danh vọng
- Đào Hoa, Hồng Loan: sức hút duyên dáng
- Lưu Hà: tài ăn nói trau chuốt`,
  },

  {
    id: 'luu-ha-kiep-sat-bo-doi-ac-sat',
    title: 'Lưu Hà + Kiếp Sát - Bộ đôi ác sát tinh phá hoại',
    sao: ['Lưu Hà'],
    ketHop: ['Kiếp Sát'],
    doUuTien: 55,
    tomTat: `Khi Lưu Hà gặp Kiếp Sát, hai sao tạo thành bộ đôi ác sát tinh có
sức phá hoại vô cùng mạnh. Tính hung hiểm và nguy hại thể hiện rõ rệt nhất ở
cách này; thâm trầm và sát phạt cộng hưởng nhau, là cặp đáng cảnh giác hàng
đầu khi luận về Lưu Hà.

Quy luật bố trí: Lưu Hà cùng Kiếp Sát luôn ở vị trí nghịch lý âm dương trên
lá số, chuyên đánh phá những ai không xứng đáng động vào Lộc Tồn — áp dụng
cho các tuổi Bính, Đinh, Mậu, Kỷ, Nhâm, Quý.

Hóa giải: cần các phúc thiện tinh như Quan Phúc, Ân Quang, Thiên Quý cùng
Tứ Đức đi kèm mới giảm bớt được tác họa.`,
  },

  {
    id: 'luu-ha-kinh-pha-hao-tuyet-quy-ke',
    title: 'Lưu Hà + Kình + Phá + Hao + Tuyệt - Quỷ kế đa mưu',
    sao: ['Lưu Hà'],
    ketHop: ['Kình Dương', 'Phá Quân'],
    doUuTien: 50,
    tomTat: `Khi Lưu Hà hội đủ Kình Dương, Phá Quân, Đại Hao, Tiểu Hao và
Tuyệt, đương số là người nhiều quỷ kế, đa mưu, độc hiểm. Đương số có thể ra
tay diệt thù mà không lộ tông tích, không bị lương tâm cắn rứt — đúng là bộ
sao của kẻ lập mưu thâm độc.

Đây là cách cục cực xấu với người không có sao Phúc tương trợ; cần tu thân
tích đức để hóa giải bớt sát khí.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // LƯU HÀ TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'luu-ha-tai-menh',
    title: 'Lưu Hà tại Mệnh',
    sao: ['Lưu Hà'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `Đương số có Lưu Hà thủ Mệnh là người ăn nói lưu loát, có tài
hùng biện cao. Đương số thích nói, giảng thuyết, diễn giảng hay và phong
phú; bên trong thâm trầm, nhiều toan tính, có sự khôn ngoan ẩn giấu. Khi
Lưu Hà đi với sao xấu, tính cách trở nên độc ác, thâm hiểm, có thủ đoạn,
thậm chí gây chết chóc.

Về nghề nghiệp, đương số hợp:

- Ngoại giao, giao tiếp, bán hàng — kiểu "dân sale, bán nước bọt"
- Các ngành liên quan sông nước (ngư dân, thủy thủ)
- Hóa học, hải sản, dầu hỏa
- Diễn thuyết, MC, ca sỹ, nghệ sỹ (khi đắc cách)

Về phúc thọ và tai họa, đương số dễ:

- Có tai nạn sông nước, trong đời dễ có lần chết đuối
- Mắc các chứng máu huyết, máu loãng
- Gặp tai nạn đường sá

Khi cát tinh hội (Tấu Thư, Thanh Long, Thái Tuế), tài hùng biện của đương
số vô cùng logic, nổi bật trong học tập và công việc.`,
  },

  {
    id: 'luu-ha-tai-menh-nu-bang-huyet',
    title: 'Lưu Hà tại Mệnh - Nữ băng huyết',
    sao: ['Lưu Hà'],
    cung: ['Mệnh'],
    gioiTinh: 'Nữ',
    doUuTien: 73,
    tomTat: `Nữ mệnh có Lưu Hà thủ Mệnh dễ bị băng huyết lúc sinh đẻ; các
chứng bệnh máu huyết, máu loãng cũng nghiêm trọng hơn so với nam mệnh.`,
  },

  {
    id: 'luu-ha-tai-menh-cung-thuy',
    title: 'Lưu Hà tại Mệnh - Hợi/Tý cung Thủy hợp vị',
    sao: ['Lưu Hà'],
    cung: ['Mệnh'],
    chi: ['Hợi', 'Tý'],
    doUuTien: 73,
    tomTat: `Khi Lưu Hà thủ Mệnh đóng tại Hợi hoặc Tý (cung Thủy hợp vị),
đương số phát huy được đúng mức tài năng của sao. Tuy nhiên cũng vì đắc vị
mà hung họa sông nước càng phải đề phòng kỹ.`,
  },

  {
    id: 'luu-ha-tai-phu-mau',
    title: 'Lưu Hà tại Phụ Mẫu',
    sao: ['Lưu Hà'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Lưu Hà tại Phụ Mẫu cho thấy cha mẹ đương số có tài ăn nói và
hùng biện tốt.

Khi cát tinh hội, cha mẹ làm các nghề liên quan ăn nói, ngoại giao, MC dẫn
chương trình, và thường dùng khả năng đó cho con cái những lời khuyên bổ
ích. Ngoài ra cha mẹ còn có thể làm các nghề liên quan sông nước, cà phê,
giải khát.

Đặc trưng của cha mẹ là thông minh, nhiều mưu tính, mưu mẹo; con cái khó
qua mắt cha mẹ. Cha mẹ luôn toan tính, lo toan cho tương lai con cái.

Một số kết hợp đáng chú ý:

- Lưu Hà + Hóa Khoa: cha mẹ để lại "danh thơm tiếng tốt" cho con
- Lưu Hà + Địa Không, Địa Kiếp: cha mẹ vướng sai lầm, tội lỗi, con cái mang
  tiếng vạ lây`,
  },

  {
    id: 'luu-ha-tai-phuc-duc',
    title: 'Lưu Hà tại Phúc Đức',
    sao: ['Lưu Hà'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `Lưu Hà tại Phúc Đức cho thấy đương số càng xa quê hương càng khá
giả, làm ăn càng phất lên. Mồ mả tổ tiên thường đặt tại nơi gần ao hồ, sông
suối, đất ẩm thấp; trong dòng họ có nhiều người có tài ăn nói lưu loát.

Quan hệ họ hàng đôi khi "bằng mặt không bằng lòng" — miệng nói cười nhưng
trong lòng toan tính.

Cảnh báo: trong họ hàng dễ có người chết đuối hoặc gặp thủy tai.

Khi hội Hóa Khoa, Hóa Quyền, Thiên Khôi, Thiên Việt, dòng họ có nhiều người
thành danh, truyền phúc khí cho con cháu.`,
  },

  {
    id: 'luu-ha-tai-dien-trach',
    title: 'Lưu Hà tại Điền Trạch',
    sao: ['Lưu Hà'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Lưu Hà tại Điền Trạch khiến nhà của đương số thường gần sông
suối, ao hồ. Đất hay bị úng thủy, nhiều nước, ngập lụt; nặng nhất có thể
đến mức không ở được. Quanh nhà gần sông suối nên cẩn thận chuyện chết
đuối.

Khi Lưu Hà đi cùng Kiếp Sát và Hóa Kỵ, cảnh báo càng đặc biệt nghiêm trọng:
dễ có người chết đuối, gặp lũ lụt, đất ngập úng và nhà cửa không yên.

Hàng xóm hay nói chuyện, vui vẻ, song dễ đàm tiếu và hãm hại sau lưng nếu
phật lòng.

Đương số cần đề phòng thủy tai và lũ cuốn ở những vùng có nguy cơ cao.`,
  },

  {
    id: 'luu-ha-tai-quan-loc',
    title: 'Lưu Hà tại Quan Lộc',
    sao: ['Lưu Hà'],
    cung: ['Quan Lộc'],
    doUuTien: 76,
    tomTat: `Lưu Hà tại Quan Lộc khiến đương số hợp các nghề giao tiếp và
diễn thuyết.

Khi cát tinh hội (Thanh Long, Văn Xương, Văn Khúc), đương số có danh phận,
làm các ngành liên quan sông nước, hóa học, hải sản, dầu hỏa.

Khi gặp Phục Binh, Thiên Đồng, Cự Môn cùng Thiên Trù, đương số mở cửa hàng
giải khát, trung tâm tiệc cưới, ăn uống hoặc làm giảng đường thuyết trình.

Khi sát tinh hội (Kiếp Sát, Địa Không, Địa Kiếp, Kình Dương, Đà La, Thái
Tuế), công danh đương số thăng giáng thất thường, đôi khi bị tai ương họa
hại.`,
  },

  {
    id: 'luu-ha-tai-no-boc',
    title: 'Lưu Hà tại Nô Bộc',
    sao: ['Lưu Hà'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Lưu Hà tại Nô Bộc cho thấy bạn bè đương số hay nói và có biệt
tài hùng biện; khả năng nói có thể làm đối phương kinh ngạc.

Khi không có cát tinh hỗ trợ, đương số dễ bị bạn bè lừa và hãm hại; bạn bè
khéo léo bên ngoài nhưng nhiều toan tính, mưu mô, thâm hiểm. Đặc biệt khi
hội Hóa Kỵ, Đà La, Địa Kiếp, bạn bè có thể phản bội và đâm sau lưng.

Trong môi trường ngoại giao, thương mại, chính trị, nếu đương số đảm nhiệm
vị trí quan trọng thì cần có người bảo vệ.`,
  },

  {
    id: 'luu-ha-tai-thien-di',
    title: 'Lưu Hà tại Thiên Di',
    sao: ['Lưu Hà'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `Lưu Hà tại Thiên Di khiến đương số ra ngoài ăn nói lưu loát,
được người khác giới để ý, đôi khi được yêu quý nhờ tài ăn nói.

Cảnh báo:

- Phải cẩn thận vùng sông nước và nạn thủy tai; đôi khi đương số hay phải
  đi tới những vùng sông nước
- Ra ngoài gặp nhiều kẻ hai mặt, ngoài ngọt nhẹ nhưng trong toan tính
- Dễ bị lừa gạt nếu không cẩn thận

Khi đi cùng Cự Môn, Hóa Kỵ, sát tinh và Thiên Hình, đương số cần đề phòng
nạn thủy tai một cách rõ rệt.`,
  },

  {
    id: 'luu-ha-tai-tat-ach',
    title: 'Lưu Hà tại Tật Ách',
    sao: ['Lưu Hà'],
    cung: ['Tật Ách'],
    doUuTien: 76,
    tomTat: `Lưu Hà tại Tật Ách khiến đương số mắc các bệnh về máu huyết: dễ
bị máu loãng, băng huyết, có khi bị chết đuối hoặc phải mổ xẻ. Việc nuôi
súc vật cũng không có lợi.

Riêng nữ giới thường gặp bất lợi khi sinh đẻ, có bệnh về máu huyết khi lâm
bồn.

Đương số cần đặc biệt chú ý chuyện sông nước, đi lại tàu thuyền, tránh tai
nạn và thương tật.

Một số kết hợp cảnh báo:

- Lưu Hà + Cự Môn: đề phòng họa từ miệng mà ra
- Lưu Hà + Linh Tinh, Đà La: tránh rượu bia và chất kích thích vì dễ rơi
  vào trạng thái không tỉnh táo, gây tai họa`,
  },

  {
    id: 'luu-ha-tai-tai-bach',
    title: 'Lưu Hà tại Tài Bạch',
    sao: ['Lưu Hà'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `Lưu Hà tại Tài Bạch cho thấy đương số dễ kiếm tiền nhưng tiền
bạc thất thường, ra vào nhanh.

Cách kiếm tiền đặc trưng là dùng khả năng thuyết phục, trình bày, diễn
thuyết, kèm nhiều mưu toan và tính toán.

Mặt tối: đương số đôi khi sẵn sàng phản bội, lừa đảo để kiếm tiền; ngược
lại cũng có lúc bị người khác lừa bằng "miếng mồi ngon".

Khi cát tinh hội (Tả Phù, Hữu Bật, Thiên Khôi, Thiên Việt), tiền ra vào có
kiểm soát, đương số không rơi vào cảnh thiếu thốn.

Khi sát tinh hội (Địa Kiếp, Phục Binh, Đại Hao, Tiểu Hao, Hóa Kỵ), đương số
kiếm tiền bất chấp, sẵn sàng phản bội và lừa đảo.`,
  },

  {
    id: 'luu-ha-tai-tu-tuc',
    title: 'Lưu Hà tại Tử Tức',
    sao: ['Lưu Hà'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Lưu Hà tại Tử Tức cho thấy con cái đương số có tài ăn nói. Tuy
nhiên cũng có những cảnh báo cần lưu ý:

- Con cái dễ mắc bệnh máu huyết
- Cẩn thận khi con vui chơi vùng sông nước, dễ đuối nước

Tính cách con cái thâm trầm, nhiều mưu mẹo và khó đoán.`,
  },

  {
    id: 'luu-ha-tu-tuc-nu-bang-huyet',
    title: 'Lưu Hà tại Tử Tức - Nữ băng huyết khi sinh đẻ',
    sao: ['Lưu Hà'],
    cung: ['Tử Tức'],
    gioiTinh: 'Nữ',
    doUuTien: 70,
    tomTat: `Nữ mệnh có Lưu Hà tại Tử Tức dễ bị băng huyết lúc sinh đẻ. Đường
sinh nở gian nan, hay gặp biến chứng máu huyết.`,
  },

  {
    id: 'luu-ha-tai-phu-the',
    title: 'Lưu Hà tại Phu Thê',
    sao: ['Lưu Hà'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `Lưu Hà tại Phu Thê cho thấy vợ chồng đương số đều có tài ăn nói.

Khuyến cáo: đương số nên lấy người khác làng khác xóm để tránh xung đột bất
hòa giữa hai bên gia đình.

Tình cảm vợ chồng không thật lòng hoàn toàn với nhau, hay có ẩn ý che giấu,
bên ngoài hay nói để vui lòng đối phương.

Cảnh báo về sức khỏe và tai họa: người hôn phối dễ mắc bệnh máu huyết và
gặp tai họa sông nước.

Về nghề nghiệp, người hôn phối có tài thuyết trình nên hợp với các công
việc giao tiếp, dạy học để phát huy khả năng nói. Khi có thêm Hóa Khoa,
Văn Xương, đương số được nhờ danh tiếng của bạn đời.`,
  },

  {
    id: 'luu-ha-tai-huynh-de',
    title: 'Lưu Hà tại Huynh Đệ',
    sao: ['Lưu Hà'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Lưu Hà tại Huynh Đệ cho thấy anh chị em đương số có tài ăn nói,
gắn bó với các nghề dạy học và buôn bán. Tuy nhiên anh chị em thường "bằng
mặt không bằng lòng", dễ có mưu toan bên trong.

Khi cát tinh hội, có thể giải bớt khía cạnh xấu và anh chị em trở thành
những người tài năng, giỏi giang.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // LƯU HÀ VÀO HẠN
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'luu-ha-han-cu-ky-chet-duoi',
    title: 'Hạn: Lưu Hà + Cự Môn + Hóa Kỵ - Chết đuối máu huyết',
    sao: ['Lưu Hà'],
    ketHop: ['Cự Môn', 'Hóa Kỵ'],
    doUuTien: 55,
    tomTat: `Khi hạn có Lưu Hà đi cùng Cự Môn và Hóa Kỵ, đương số cần cẩn
thận chuyện chết đuối và máu huyết. Tai nạn không hẳn là ngẫu nhiên — có
thể có kẻ chủ mưu hoặc tiểu nhân hãm hại; bản thân Cự Môn cùng Hóa Kỵ vốn
chủ thị phi, khi đi với Lưu Hà sông nước thì hóa thành tai họa thủy.

Phòng tránh:

- Đề phòng bão lũ nguy hiểm, đặc biệt khi có thêm Địa Kiếp
- Tránh xa vùng sông nước trong giai đoạn hạn
- Cẩn thận phát ngôn (ảnh hưởng Cự Môn) để tránh khẩu thiệt sinh họa`,
  },

  {
    id: 'luu-ha-han-kiep-kinh-dao-thuong',
    title: 'Hạn: Lưu Hà + Kiếp Sát + Kình Dương - Đao thương đạo tặc',
    sao: ['Lưu Hà'],
    ketHop: ['Kiếp Sát', 'Kình Dương'],
    doUuTien: 55,
    tomTat: `Khi hạn có Lưu Hà gặp Kiếp Sát cùng Kình Dương, đương số có thể
chết bởi đao thương, đạo tặc hoặc chết đuối. Lưu Hà cùng Kiếp Sát đã là bộ
ác sát, thêm Kình Dương dao kéo nên tai họa hết sức khủng khiếp; có thể bị
giết, cướp hoặc chết đuối.

Phòng tránh:

- Tránh đi đêm và những vùng vắng vẻ
- Không tham gia tranh chấp, đánh nhau
- Tránh vùng sông nước trong hạn
- Tu thân tích đức để hóa giải bớt`,
  },

  {
    id: 'luu-ha-han-ma-tang-mon-suc-vat-chet',
    title: 'Hạn: Lưu Hà + Mã / Tang Môn - Súc vật chết dịch',
    sao: ['Lưu Hà'],
    ketHop: ['Thiên Mã', 'Tang Môn'],
    doUuTien: 50,
    tomTat: `Khi hạn có Lưu Hà đi cùng Thiên Mã hoặc Tang Môn, súc vật nuôi
trong nhà đương số dễ bị chết dịch. Vật nuôi (gà, lợn, trâu, bò, chó, mèo)
dễ mắc bệnh, chết hàng loạt và gây hao tổn.

Phòng tránh:

- Hạn này không nên nuôi thú cưng mới
- Đang nuôi thì cần đề phòng khi cho thú cưng ra ngoài
- Tăng cường tiêm phòng và vệ sinh chuồng trại
- Không đầu tư mạo hiểm vào chăn nuôi quy mô lớn`,
  },
];
