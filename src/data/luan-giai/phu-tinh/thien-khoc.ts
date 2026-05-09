import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THIÊN KHỐC - Thủy, Bại Tinh, chòm Nam Đẩu Tinh.
 * Đắc địa: Tý, Ngọ, Dần, Thân.
 *
 * Bộ KHỐC HƯ với Thiên Hư - phần CHUNG (Khốc Hư Tý Ngọ tiền bần hậu phú,
 * Khốc Hư + Sát/Phá quyền cao, Lục Bại Tinh, hạn) đã viết tại thien-hu.ts.
 *
 * Mã Khốc Khách (Thiên Mã + Thiên Khốc + Điếu Khách) đã viết tại thien-ma.ts + dieu-khach.ts.
 */
export const luanGiai_ThienKhoc: DoanLuanGiai[] = [
  {
    id: 'thien-khoc-tinh-chat-chung',
    title: 'Thiên Khốc - Đặc tính chung',
    sao: ['Thiên Khốc'],
    doUuTien: 32,
    tomTat: `**Thiên Khốc** là phụ tinh thuộc Bại Tinh trong chòm Nam Đẩu Tinh,
ngũ hành Thủy, hóa khí là Bại Tinh. Tên gọi tắt là Khốc — biểu thị cho tiếng
khóc than và sự rầu rĩ. Sao này đắc địa tại bốn cung Tý, Ngọ, Dần, Thân.

Về quy luật an sao, Thiên Khốc được an theo địa chi của năm sinh: chọn cung
Ngọ làm năm Tý, từ đó chạy ngược kim đồng hồ tới địa chi của năm sinh sẽ ra
vị trí Thiên Khốc. Sao này luôn nằm trong tam hợp của Tuế - Hổ - Phù; tại
cung dương thường đi với bộ Tang Môn + Tuế Phá + Điếu Khách, còn tại cung âm
nằm trong bộ Thái Tuế + Bạch Hổ + Quan Phù.

Thiên Khốc cùng **Thiên Hư** tạo bộ **Khốc Hư**, đồng thời là một trong sáu
sao thuộc Lục Bại Tinh: Đại Hao, Tiểu Hao, Thiên Khốc, Thiên Hư, Tang Môn,
Bạch Hổ. Đặc tính chủ đạo của Thiên Khốc là cản trở, ưu phiền, nước mắt,
thương đau, thị phi, rầu rĩ và bi thương.`,
  },

  {
    id: 'thien-khoc-tuong-mao',
    title: 'Thiên Khốc - Tướng mạo',
    sao: ['Thiên Khốc'],
    cung: ['Mệnh'],
    doUuTien: 45,
    tomTat: `Khi Thiên Khốc thủ Mệnh, đương số thường có nước da xanh xao, mắt
có quầng thâm, gương mặt thiếu sức sống và nhợt nhạt, toát lên vẻ buồn rầu
khó giấu. Ánh mắt không có hồn, hay nhìn xuống và ít nhìn ra xa; phong thái
trầm mặc, ít cười.

Tướng mạo này tương tự Thiên Hư, vì cả hai đều thuộc Thủy và đều là Bại
Tinh.`,
  },

  {
    id: 'thien-khoc-tai-menh',
    title: 'Thiên Khốc tại Mệnh - tính cách lầm lì',
    sao: ['Thiên Khốc'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Đương số có Thiên Khốc thủ Mệnh thường mang tính cách lầm lì, lạnh
lùng, hay bôn ba bên ngoài và luôn buồn phiền vì lắm chuyện phải suy nghĩ.
Khi giao tiếp, đương số hơi kém hòa đồng, dễ xúc động và hay khóc thầm trong
lòng.

Về tư tưởng, đương số khá bi quan và tiêu cực, hay càm ràm phàn nàn. Vì nhận
nhiều đả kích và gặp nhiều thị phi nên trong lòng dễ sinh hận thù, bực dọc
với đời. Trí nhớ của đương số không tốt, đầu óc lơ đãng khó tập trung và dễ
giật mình.`,
  },

  {
    id: 'thien-khoc-tai-menh-nu',
    sao: ['Thiên Khốc'],
    cung: ['Mệnh'],
    gioiTinh: 'Nữ',
    doUuTien: 75,
    tomTat: `Nữ mệnh có Thiên Khốc thủ Mệnh thường khóc nhiều vì chuyện tình
cảm, hay lo nghĩ và rơi nước mắt thầm lặng.`,
  },

  {
    id: 'thien-khoc-tai-menh-dac',
    sao: ['Thiên Khốc'],
    cung: ['Mệnh'],
    chi: ['Tý', 'Ngọ', 'Dần', 'Thân'],
    doUuTien: 78,
    tomTat: `Khi Thiên Khốc thủ Mệnh đắc địa tại Tý, Ngọ, Dần hoặc Thân, đương
số là người có ý chí và tài năng — đặc biệt là tài văn chương, chữ nghĩa.
Khả năng ăn nói tốt, giỏi phản biện và hùng biện, giọng nói đanh thép, có
năng khiếu chính trị.

Tuổi trẻ tuy vất vả bôn ba và gặp nhiều đau khổ, hoàn cảnh trớ trêu, nhưng
chính những trải nghiệm ấy lại nuôi dưỡng cho đương số ý chí và quyết tâm
vượt lên trên hoàn cảnh.`,
  },

  {
    id: 'thien-khoc-tai-menh-ham',
    sao: ['Thiên Khốc'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    doUuTien: 75,
    tomTat: `Khi Thiên Khốc **Hãm** địa thủ Mệnh, đương số chủ về cản trở, đau
khổ và xui xẻo trong cuộc đời.`,
  },

  {
    id: 'thien-khoc-tai-menh-ham-khong-kiep-dieu-khach-cu-mon',
    sao: ['Thiên Khốc'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Điếu Khách', 'Cự Môn'],
    doUuTien: 72,
    tomTat: `Khi Thiên Khốc Hãm địa tại Mệnh hội cùng Địa Không, Địa Kiếp, Điếu
Khách hoặc Cự Môn, đương số chủ về tang tóc, tai ương và bệnh tật suốt đời.`,
  },

  {
    id: 'thien-khoc-tai-menh-tuat-thin',
    sao: ['Thiên Khốc'],
    cung: ['Mệnh'],
    chi: ['Tuất', 'Thìn'],
    doUuTien: 73,
    tomTat: `Khi Thiên Khốc tại Mệnh đóng ở Tuất hoặc Thìn, đương số hay gặp
tai nạn và đoản mệnh.`,
  },

  {
    id: 'thien-khoc-hoa-quyen',
    title: 'Thiên Khốc + Hóa Quyền - tiếng tăm vang xa',
    sao: ['Thiên Khốc'],
    ketHop: ['Hóa Quyền'],
    doUuTien: 70,
    tomTat: `Khi Thiên Khốc gặp Hóa Quyền, đương số có tiếng tăm và danh tiếng
vang xa, được nhiều người biết đến. Hóa Quyền vốn là sao quyền lực, kết hợp
với tiếng khóc nhà trời của Thiên Khốc đã biến tiếng khóc thành tiếng nói có
sức mạnh, có ảnh hưởng.

Cách cục này đặc biệt phù hợp với những đương số làm chính trị, diễn thuyết
hay nhà hùng biện.`,
  },

  {
    id: 'thien-khoc-tang-mon-tang-toc',
    title: 'Thiên Khốc + Tang Môn - tang tóc liên miên',
    sao: ['Thiên Khốc'],
    ketHop: ['Tang Môn'],
    doUuTien: 65,
    tomTat: `Khi Thiên Khốc gặp Tang Môn, đương số dễ gặp chuyện tang tóc liên
miên ngay từ khi mới sinh ra. Vào những năm có hạn này, đương số dễ gặp biến
cố lớn, chuyện buồn thấm thía hoặc có tang sự trong gia đình.

Đây là một trong các cách cục có tang đã đề cập tại tang-mon.ts (Tang Mã Khốc
Hư).`,
  },

  {
    id: 'thien-khoc-tai-phu-mau',
    title: 'Thiên Khốc tại Phụ Mẫu',
    sao: ['Thiên Khốc'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Khi Thiên Khốc tọa thủ Phụ Mẫu, cha mẹ của đương số hay ủ rũ, than
vãn rầu rĩ, gặp chuyện phiền lòng và phải bôn ba vất vả để mưu sinh.`,
  },

  {
    id: 'thien-khoc-tai-phu-mau-khoc-hu-ty-ngo',
    sao: ['Thiên Khốc'],
    cung: ['Phụ Mẫu'],
    chi: ['Tý', 'Ngọ'],
    ketHop: ['Thiên Hư'],
    doUuTien: 72,
    tomTat: `Khi bộ **Khốc Hư** đóng tại Phụ Mẫu ở Tý hoặc Ngọ, cha mẹ đương số
hồi trẻ vất vả, về già gặt hái được nhiều thành công.`,
  },

  {
    id: 'thien-khoc-tai-phu-mau-ma-khoc-khach',
    sao: ['Thiên Khốc'],
    cung: ['Phụ Mẫu'],
    chi: ['Dần', 'Thân'],
    ketHop: ['Thiên Mã', 'Điếu Khách'],
    doUuTien: 72,
    tomTat: `Khi cách **Mã Khốc Khách** (Thiên Khốc + Thiên Mã + Điếu Khách)
đóng tại Phụ Mẫu ở Dần hoặc Thân, cha mẹ của đương số tài năng giỏi giang,
hay đi xa và gặp được thời thế tốt.`,
  },

  {
    id: 'thien-khoc-tai-phu-mau-sat-tinh',
    sao: ['Thiên Khốc'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Tang Môn', 'Thái Tuế', 'Hóa Kỵ', 'Thiên Hình'],
    doUuTien: 70,
    tomTat: `Khi Thiên Khốc tại Phụ Mẫu hội cùng các sát tinh nặng như Địa
Không, Địa Kiếp, Tang Môn, Thái Tuế, Hóa Kỵ hoặc Thiên Hình, sự đau buồn
càng tăng nặng, dễ dẫn tới cảnh chia ly và mất mát lớn trong gia đình.`,
  },

  {
    id: 'thien-khoc-tai-phuc-duc',
    title: 'Thiên Khốc tại Phúc Đức',
    sao: ['Thiên Khốc'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `Khi Thiên Khốc tọa thủ Phúc Đức, đương số chủ về sự hao tổn phúc
thọ, hay gặp trắc trở và trái ngang trong cuộc sống. Trong dòng họ thường có
nhiều người trải qua cuộc sống vất vả, gặp nhiều xui xẻo và có chuyện buồn
khổ phải gánh chịu.`,
  },

  {
    id: 'thien-khoc-tai-phuc-duc-dac-cat-tinh',
    sao: ['Thiên Khốc'],
    cung: ['Phúc Đức'],
    chi: ['Tý', 'Ngọ', 'Dần', 'Thân'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 72,
    tomTat: `Khi Thiên Khốc đắc địa (Tý, Ngọ, Dần, Thân) tại Phúc Đức và hội cát
tinh như Tả Phù, Hữu Bật, Văn Xương, Văn Khúc, Thiên Khôi hay Thiên Việt, mồ
mả gia tiên ở vị trí đẹp, dòng họ phúc dày. Người trong nhà đương số thành
đạt và đạt được nhiều thành tựu.`,
  },

  {
    id: 'thien-khoc-tai-phuc-duc-ham-sat-tinh',
    sao: ['Thiên Khốc'],
    cung: ['Phúc Đức'],
    trangThai: ['Hãm'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 70,
    tomTat: `Khi Thiên Khốc Hãm địa tại Phúc Đức gặp các sát tinh như Địa Không,
Địa Kiếp, Kình Dương, Đà La, Hỏa Tinh hoặc Linh Tinh, phúc phần của đương số
giảm sút và đời sống gặp nhiều trắc trở.`,
  },

  {
    id: 'thien-khoc-tai-dien-trach',
    title: 'Thiên Khốc tại Điền Trạch',
    sao: ['Thiên Khốc'],
    cung: ['Điền Trạch'],
    doUuTien: 72,
    tomTat: `Khi Thiên Khốc tọa thủ Điền Trạch, đương số gặp nhiều khó khăn vất
vả, hao tốn tiền bạc trong việc xây dựng và tạo dựng nhà cửa, hay lo nghĩ ưu
sầu vì chuyện tiền nong.`,
  },

  {
    id: 'thien-khoc-tai-dien-trach-dan-than',
    sao: ['Thiên Khốc'],
    cung: ['Điền Trạch'],
    chi: ['Dần', 'Thân'],
    doUuTien: 70,
    tomTat: `Khi Thiên Khốc tại Điền Trạch đóng ở Dần hoặc Thân, đương số hay
chuyển nhà, có duyên với kinh doanh — đặc biệt là buôn bán bất động sản —
khả năng kiếm tiền tốt. Trong nhà thường có nhiều thiết bị âm thanh, loa
đài.`,
  },

  {
    id: 'thien-khoc-tai-dien-trach-ty-ngo',
    sao: ['Thiên Khốc'],
    cung: ['Điền Trạch'],
    chi: ['Tý', 'Ngọ'],
    doUuTien: 70,
    tomTat: `Khi Thiên Khốc đắc địa Tý hoặc Ngọ tại Điền Trạch, ứng vào câu
"tiền bần hậu phú" — ban đầu khó khăn, về sau phát đạt.`,
  },

  {
    id: 'thien-khoc-tai-quan-loc',
    title: 'Thiên Khốc tại Quan Lộc',
    sao: ['Thiên Khốc'],
    cung: ['Quan Lộc'],
    doUuTien: 75,
    tomTat: `Khi Thiên Khốc tọa thủ Quan Lộc, sự nghiệp đương số trắc trở khó
khăn ở những ngày đầu, tuy nhiên về sau dễ có tiếng tăm và công danh.

Vì mang tính chất buồn bã và khó khăn, sao này phù hợp với những nghề như
hội chữ thập đỏ, bác sĩ tâm lý, ban tang lễ, công tác xã hội hay làm từ
thiện.`,
  },

  {
    id: 'thien-khoc-tai-quan-loc-ty-ngo',
    sao: ['Thiên Khốc'],
    cung: ['Quan Lộc'],
    chi: ['Tý', 'Ngọ'],
    doUuTien: 72,
    tomTat: `Khi Thiên Khốc đắc địa Tý hoặc Ngọ tại Quan Lộc, tuổi trẻ đương số
gian truân nhưng hậu vận thành công, sự nghiệp ổn định và phát triển.`,
  },

  {
    id: 'thien-khoc-tai-quan-loc-dan-than',
    sao: ['Thiên Khốc'],
    cung: ['Quan Lộc'],
    chi: ['Dần', 'Thân'],
    doUuTien: 72,
    tomTat: `Khi Thiên Khốc đắc địa Dần hoặc Thân tại Quan Lộc, chủ mệnh là người
tài năng, gặp được thời thế tốt và đạt được thành tựu lớn.`,
  },

  {
    id: 'thien-khoc-tai-quan-loc-ham',
    sao: ['Thiên Khốc'],
    cung: ['Quan Lộc'],
    trangThai: ['Hãm'],
    doUuTien: 72,
    tomTat: `Khi Thiên Khốc Hãm địa tại Quan Lộc, sự nghiệp đương số gặp khó
khăn kéo dài, dễ bị tiểu nhân quấy phá và phải nỗ lực rất nhiều mới đạt được
thành tựu.`,
  },

  {
    id: 'thien-khoc-tai-no-boc',
    title: 'Thiên Khốc tại Nô Bộc',
    sao: ['Thiên Khốc'],
    cung: ['Nô Bộc'],
    doUuTien: 70,
    tomTat: `Khi Thiên Khốc tọa thủ Nô Bộc, đương số ít bạn, hay gặp chuyện buồn
phiền vì bạn bè đồng nghiệp. Cấp dưới không gắn bó lâu dài, "nay ở mai đi",
và dễ nảy sinh tâm lý oán trách đương số chỉ vì những chuyện nhỏ nhặt.

Khi Thiên Khốc đắc địa, bạn bè và đồng nghiệp tuy không đông nhưng trung
thành sâu sắc, biết chia sẻ giúp đỡ nhau và ít gặp thị phi.`,
  },

  {
    id: 'thien-khoc-tai-thien-di',
    title: 'Thiên Khốc tại Thiên Di',
    sao: ['Thiên Khốc'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `Khi Thiên Khốc tọa thủ Thiên Di, đương số hay đi công tác và làm ăn
xa quê hương. Những ngày đầu thường vất vả khó khăn hơn người khác; ra ngoài
giao thiệp dễ gặp xích mích, thị phi, xung đột và cãi vã.

Khi Thiên Khốc đắc địa, nếu đương số biết kiên trì nhẫn nại thì về sau sẽ
đạt được thành công và tiếng tăm. Công việc xa nhà thuận lợi, gặp được thời
vận tốt nên dễ nổi tiếng.`,
  },

  {
    id: 'thien-khoc-tai-tat-ach',
    title: 'Thiên Khốc tại Tật Ách - bệnh lao phổi, tai mũi họng',
    sao: ['Thiên Khốc'],
    cung: ['Tật Ách'],
    doUuTien: 80,
    tomTat: `Khi Thiên Khốc tọa thủ Tật Ách, đương số dễ mắc các bệnh hô hấp
như lao phổi và tai mũi họng, đồng thời cũng hay gặp các bệnh về da và bệnh
hệ thần kinh.

Về tâm lý, đương số khổ tâm và đau buồn vì bệnh tật cùng tai họa, hay hốt
hoảng và hoang mang. Một điểm đáng chú ý: khi đương số mất, được nhiều người
khóc lóc thương tiếc, đám tang có nhiều kèn trống.`,
  },

  {
    id: 'thien-khoc-tai-tat-ach-dac',
    sao: ['Thiên Khốc'],
    cung: ['Tật Ách'],
    chi: ['Tý', 'Ngọ', 'Dần', 'Thân'],
    doUuTien: 73,
    tomTat: `Khi Thiên Khốc đắc địa (Tý, Ngọ, Dần, Thân) tại Tật Ách, sức khỏe
của đương số ổn định, ít bệnh nặng; mỗi khi đau ốm đều được người thân quan
tâm chăm sóc cẩn thận.`,
  },

  {
    id: 'thien-khoc-tai-tai-bach',
    title: 'Thiên Khốc tại Tài Bạch',
    sao: ['Thiên Khốc'],
    cung: ['Tài Bạch'],
    doUuTien: 72,
    tomTat: `Khi Thiên Khốc tọa thủ Tài Bạch, đương số gặp nhiều khó khăn trong
việc kiếm tiền, hay lo lắng suy nghĩ vì vấn đề tiền bạc tài chính, có những
giai đoạn kiếm tiền vất vả.`,
  },

  {
    id: 'thien-khoc-tai-tai-bach-ty-ngo',
    sao: ['Thiên Khốc'],
    cung: ['Tài Bạch'],
    chi: ['Tý', 'Ngọ'],
    doUuTien: 70,
    tomTat: `Khi Thiên Khốc đắc địa Tý hoặc Ngọ tại Tài Bạch, ứng vào câu "tiền
bần hậu phú" — tuổi trẻ vất vả nhưng nhờ kiên trì và tài năng, đương số dễ
giàu có về sau.`,
  },

  {
    id: 'thien-khoc-tai-tai-bach-dan-than',
    sao: ['Thiên Khốc'],
    cung: ['Tài Bạch'],
    chi: ['Dần', 'Thân'],
    doUuTien: 70,
    tomTat: `Khi Thiên Khốc đắc địa Dần hoặc Thân tại Tài Bạch, đương số là
người giỏi ăn nói, giỏi kinh doanh và dễ gặp được thời vận phù hợp.`,
  },

  {
    id: 'thien-khoc-tai-tai-bach-ham',
    sao: ['Thiên Khốc'],
    cung: ['Tài Bạch'],
    trangThai: ['Hãm'],
    doUuTien: 70,
    tomTat: `Khi Thiên Khốc Hãm địa tại Tài Bạch, đương số hay thất thoát, hao
tán tiền của; làm ăn vất vả nhưng lợi nhuận không ổn định.`,
  },

  {
    id: 'thien-khoc-tai-tu-tuc',
    title: 'Thiên Khốc tại Tử Tức',
    sao: ['Thiên Khốc'],
    cung: ['Tử Tức'],
    doUuTien: 72,
    tomTat: `Khi Thiên Khốc tọa thủ Tử Tức, đương số khó sinh con và khó nuôi
con, dễ bị mất con, gặp nhiều chuyện phiền muộn sầu não về vấn đề con cái.`,
  },

  {
    id: 'thien-khoc-tai-tu-tuc-ty-ngo',
    sao: ['Thiên Khốc'],
    cung: ['Tử Tức'],
    chi: ['Tý', 'Ngọ'],
    doUuTien: 70,
    tomTat: `Khi Thiên Khốc đắc địa Tý hoặc Ngọ tại Tử Tức, đương số tuổi trẻ
vất vả với con cái, về già được nhờ con cái; con cái hiếu thảo và thành đạt.`,
  },

  {
    id: 'thien-khoc-tai-tu-tuc-dan-than',
    sao: ['Thiên Khốc'],
    cung: ['Tử Tức'],
    chi: ['Dần', 'Thân'],
    doUuTien: 70,
    tomTat: `Khi Thiên Khốc đắc địa Dần hoặc Thân tại Tử Tức, con cái của đương
số tài năng giỏi giang nhưng sống xa cha mẹ, không được ở gần, hay đi xa lập
nghiệp.`,
  },

  {
    id: 'thien-khoc-tai-phu-the',
    title: 'Thiên Khốc tại Phu Thê',
    sao: ['Thiên Khốc'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `Khi Thiên Khốc tọa thủ Phu Thê, vợ chồng hay bất đồng quan điểm,
hay giận hờn khóc lóc than vãn, có xu hướng bắt bẻ nhau. Đương số hay buồn
và rơi nhiều nước mắt vì chuyện hôn nhân, gia đình và tình duyên.`,
  },

  {
    id: 'thien-khoc-tai-phu-the-kinh-da-khong-kiep-ky',
    sao: ['Thiên Khốc'],
    cung: ['Phu Thê'],
    ketHop: ['Kình Dương', 'Đà La', 'Địa Không', 'Địa Kiếp', 'Hóa Kỵ'],
    doUuTien: 72,
    tomTat: `Khi Thiên Khốc tại Phu Thê hội cùng Kình Dương, Đà La, Địa Không,
Địa Kiếp hoặc Hóa Kỵ, vợ chồng đương số xung khắc nặng.`,
  },

  {
    id: 'thien-khoc-tai-phu-the-ty-ngo',
    sao: ['Thiên Khốc'],
    cung: ['Phu Thê'],
    chi: ['Tý', 'Ngọ'],
    doUuTien: 72,
    tomTat: `Khi Thiên Khốc đắc địa Tý hoặc Ngọ tại Phu Thê, vợ chồng ban đầu
nhiều xích mích nhưng dần hóa giải; càng về sau càng hạnh phúc và sung túc.`,
  },

  {
    id: 'thien-khoc-tai-phu-the-dan-than',
    sao: ['Thiên Khốc'],
    cung: ['Phu Thê'],
    chi: ['Dần', 'Thân'],
    doUuTien: 72,
    tomTat: `Khi Thiên Khốc đắc địa Dần hoặc Thân tại Phu Thê, vợ chồng đương
số quê quán xa nhau; sau khi kết hôn cùng nhau đi xa lập nghiệp.`,
  },

  {
    id: 'thien-khoc-tai-huynh-de',
    title: 'Thiên Khốc tại Huynh Đệ',
    sao: ['Thiên Khốc'],
    cung: ['Huynh Đệ'],
    doUuTien: 70,
    tomTat: `Khi Thiên Khốc tọa thủ Huynh Đệ, anh chị em của đương số sống xa
nhau và không gần gũi.`,
  },

  {
    id: 'thien-khoc-tai-huynh-de-ham-sat-tinh',
    sao: ['Thiên Khốc'],
    cung: ['Huynh Đệ'],
    trangThai: ['Hãm'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 65,
    tomTat: `Khi Thiên Khốc Hãm địa tại Huynh Đệ hội cùng các sát tinh như Địa
Không, Địa Kiếp, Kình Dương, Đà La, Hỏa Tinh hoặc Linh Tinh, đương số trải
qua nhiều chuyện buồn vì anh chị em.`,
  },

  {
    id: 'thien-khoc-tai-huynh-de-dac',
    sao: ['Thiên Khốc'],
    cung: ['Huynh Đệ'],
    chi: ['Tý', 'Ngọ', 'Dần', 'Thân'],
    doUuTien: 65,
    tomTat: `Khi Thiên Khốc đắc địa (Tý, Ngọ, Dần, Thân) tại Huynh Đệ, anh chị
em hòa nhã, biết quan tâm nhau dù có phần xa cách về địa lý.`,
  },

  {
    id: 'thien-khoc-loi-khuyen',
    title: 'Lời khuyên cho người Thiên Khốc',
    sao: ['Thiên Khốc'],
    doUuTien: 35,
    tomTat: `Đương số có Thiên Khốc trong lá số tuy đường đời nhiều nước mắt và
thăng trầm, nhưng chính những điều này lại giúp đương số trưởng thành, kiên
cường và sáng suốt hơn người thường.

Sức mạnh của sao này nằm ở tài văn chương khi đắc địa, khả năng hùng biện
sắc bén, nghị lực vượt khó, và khi qua đời được nhiều người thương tiếc. Mặt
khác, đương số dễ rơi vào lầm lì bi quan, hay khóc thầm buồn phiền, trí nhớ
kém đãng trí và dễ mắc các bệnh về hô hấp, thần kinh.

Để phát huy Thiên Khốc, đương số nên:

- Phát huy ý chí vượt khó, đặc biệt khi sao đắc Tý hoặc Ngọ
- Dùng tài ăn nói vào những nghề như hùng biện, chính trị, giảng dạy
- Chăm sóc sức khỏe, đặc biệt là phổi và mũi họng
- Giải tỏa cảm xúc, không kìm nén nước mắt thành u uất
- Quý trọng niềm vui, biết thương cảm và sẻ chia với người khác

Sao Thiên Khốc như một lời nhắc nhở: con người phải biết quý trọng niềm
vui, biết thương cảm và sẻ chia với người khác.`,
  },
];
