import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THIÊN HƯ - Thủy, Bại Tinh.
 * LUÔN đồng cung TUẾ PHÁ (quy luật an sao - hardcode trong engine).
 * Bộ KHỐC HƯ với Thiên Khốc - phần CHUNG bộ này viết tại đây với tag ['Thiên Khốc', 'Thiên Hư'].
 *
 * Một trong Lục Bại Tinh: Tiểu Hao, Đại Hao, Thiên Khốc, Thiên Hư, Tang Môn, Bạch Hổ.
 * Đắc địa Tý/Ngọ: cách "Khốc Hư Tý Ngọ - tiền bần hậu phú".
 */
export const luanGiai_ThienHu: DoanLuanGiai[] = [
  {
    id: 'thien-hu-tinh-chat-chung',
    title: 'Thiên Hư - Đặc tính chung',
    sao: ['Thiên Hư'],
    doUuTien: 32,
    tomTat: `**Thiên Hư** là phụ tinh thuộc nhóm bại tinh, ngũ hành Thủy, hóa
khí thành bại tinh trong tử vi. Theo quy luật an sao của engine, Thiên Hư
luôn đồng cung với Tuế Phá; đồng thời tam hợp với Tang Môn và Điếu Khách —
một vòng tam hợp mang tính chống đối, ít có khả năng xây dựng. Sao này còn
có quan hệ rất mật thiết với Thiên Khốc, hai sao đứng chung tạo thành bộ
**Khốc Hư** quen thuộc.

Vai trò chính của Thiên Hư là gây thêm cản trở, reo rắc tâm lý hoang mang
lo lắng, đồng thời mang tới nỗi u buồn nặng tâm tư cho cung sao đóng. Vì
thuộc hành Thủy nên sao có tính thấm xuống — biểu hiện ở tình cảm ủy mị, u
sầu, khép kín và nội tâm.

Tóm lại, đặc tính của Thiên Hư xoay quanh: cản trở, kêu than, trách móc,
oán hận, phiền não, khổ đau và xui xẻo.`,
  },

  {
    id: 'khoc-hu-ty-ngo-tien-ban-hau-phu',
    title: 'Khốc Hư Tý Ngọ - "Tiền bần hậu phú"',
    sao: ['Thiên Khốc', 'Thiên Hư'],
    chi: ['Tý', 'Ngọ'],
    doUuTien: 85,
    tomTat: `Câu phú nổi tiếng "**Khốc Hư Tý Ngọ, tiền bần hậu phú**" mô tả
chính cách cục này: khi Thiên Khốc và Thiên Hư đứng chung tại cung Tý hoặc
Ngọ — cả hai đều đắc địa.

Đặc trưng của đương số có cách này:

- Tuổi trẻ vất vả, gian lao
- Nhờ nghị lực phi thường và phấn đấu không mệt mỏi mà tiến tới thành công,
  vinh quang xứng đáng

Triết lý của cách rất sâu: tiếng khóc, kêu than, oán hận thuở thiếu thời
dần biến thành tiếng cười, tiếng vui đùa và hò reo về sau. Đây chính là
kiểu "trước khổ sau sướng" — gian nan trở thành bàn đạp để vượt số mệnh,
càng gặp thử thách càng thêm bản lĩnh.

Đây là cách đẹp nhất của bộ **Khốc Hư**, biến bại tinh thành quý cách. Ý
nghĩa càng rõ rệt khi đi kèm với các cát tinh khác.`,
  },

  {
    id: 'khoc-hu-luc-bai-tinh',
    title: 'Khốc Hư trong Lục Bại Tinh',
    sao: ['Thiên Khốc', 'Thiên Hư'],
    doUuTien: 50,
    tomTat: `Bộ **Khốc Hư** (Thiên Khốc + Thiên Hư) là một trong sáu Lục Bại
Tinh quan trọng của tử vi, gồm: Tiểu Hao, Đại Hao, Thiên Khốc, Thiên Hư,
Tang Môn và Bạch Hổ.

Xét riêng từng sao trong cặp đôi này:

- Thiên Khốc chủ về tiếng khóc, sự buồn rầu, rầu rĩ
- Thiên Hư chủ về cản trở, ưu phiền, kêu than oán hận

Khi đứng chung, hai sao tạo thành cảnh "nước mắt cộng tiếng kêu than" —
được xem là bộ buồn nhất trong tử vi. Trừ trường hợp đắc địa tại Tý/Ngọ
(đã thành cách "tiền bần hậu phú"), bộ này thường gieo rắc nỗi buồn cho
cung mà sao đóng, cần có cát tinh hóa giải mới giảm bớt.`,
  },

  {
    id: 'thien-hu-tuong-mao',
    title: 'Thiên Hư - Tướng mạo',
    sao: ['Thiên Hư'],
    cung: ['Mệnh'],
    doUuTien: 45,
    tomTat: `Khi Thiên Hư thủ Mệnh, đương số thường có dáng vẻ bên ngoài khá
đặc trưng: da xanh xao, mắt có quầng đen hoặc thâm, diện mạo buồn tẻ, gương
mặt thiếu khí sắc. Đôi mắt kém thần, hay trông xuống chứ không trông xa,
toàn thân toát lên vẻ trầm mặc, ít cười. Gương mặt nhợt nhạt, ánh mắt như
không có hồn.`,
  },

  {
    id: 'thien-hu-tai-menh',
    title: 'Thiên Hư tại Mệnh - tính tình ưu tư',
    sao: ['Thiên Hư'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Khi Thiên Hư thủ Mệnh, tâm lý đương số nghiêng hẳn về phía u
buồn ủy mị, hay phiền muộn, mang nét bi quan yếm thế. Đương số đãng trí,
nghĩ đâu quên đó, hay giật mình hốt hoảng và hoang mang. Cảnh "ăn không
ngon, ngủ không yên" diễn ra thường xuyên — lúc nào cũng nơm nớp lo lắng
một điều gì đó.

Về lời nói, đương số thích kêu than, kể lể và cằn nhằn; đôi khi còn ăn nói
sai ngoa.`,
  },

  {
    id: 'thien-hu-tai-menh-ham',
    sao: ['Thiên Hư'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    doUuTien: 75,
    tomTat: `Khi Thiên Hư **Hãm** địa tại Mệnh, sao này phát huy mặt xấu
nhiều nhất: chủ về cản trở, khốn khổ, đau buồn trong tâm hồn, đồng thời
gieo rắc xui xẻo dưới nhiều hình thức. Trường hợp nặng, đương số có thể
yểu mệnh.`,
  },

  {
    id: 'thien-hu-tai-menh-khong-kiep-dieu-khach-cu-mon',
    sao: ['Thiên Hư'],
    cung: ['Mệnh'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Điếu Khách', 'Cự Môn'],
    doUuTien: 72,
    tomTat: `Khi Thiên Hư tại Mệnh đi cùng Địa Không, Địa Kiếp, Điếu Khách
hoặc Cự Môn, đương số rơi vào cảnh suốt đời bi ai — lúc nào cũng đau buồn,
than khóc, tiếc thương vì bệnh tật hoặc tang tóc trong nhà.`,
  },

  {
    id: 'thien-hu-dac-ty-ngo-hung-bien',
    title: 'Thiên Hư đắc Tý/Ngọ + Khốc - tài hùng biện chính trị',
    sao: ['Thiên Hư'],
    cung: ['Mệnh'],
    chi: ['Tý', 'Ngọ'],
    ketHop: ['Thiên Khốc'],
    doUuTien: 82,
    tomTat: `Khi Thiên Hư cùng Thiên Khốc đắc địa tại Tý hoặc Ngọ và đóng
Mệnh, đương số là người có chí lớn, văn tài lỗi lạc — đặc biệt sở trường
hùng biện. Lời nói đanh thép, hùng hồn; có khiếu hoạt động chính trị rõ
nét.

Cuộc đời đương số thường vất vả khổ đau buổi đầu, gặp nhiều cảnh trớ trêu;
song chính những thử thách ấy lại làm điểm bật, hun đúc ý chí vững vàng để
chiến thắng số phận.

Đây là cách hóa giải tốt nhất của Thiên Hư — biến u sầu thành nội lực.`,
  },

  {
    id: 'khoc-hu-sat-pha-quyen-cao',
    title: 'Khốc Hư + Thất Sát/Phá Quân đắc địa - quyền cao chức trọng',
    sao: ['Thiên Khốc', 'Thiên Hư'],
    ketHop: ['Thất Sát', 'Phá Quân'],
    doUuTien: 78,
    tomTat: `Khi bộ **Khốc Hư** đồng cung với Thất Sát đắc địa hoặc với Phá
Quân đắc địa, đương số trở thành người quyền cao chức trọng, uy danh lừng
lẫy, được thiên hạ nể phục cả về uy lẫn tài.

Đây là cách biến bại tinh thành quyền tinh — Khốc Hư khi gặp võ tướng
(Sát/Phá) đắc địa thì quyền lực nổi bật.

Lưu ý: Sát/Phá phải đắc địa mới thành cách. Nếu Sát/Phá hãm địa thì cách
trở nên hung dữ thêm.`,
  },

  {
    id: 'thien-hu-tai-phu-mau',
    title: 'Thiên Hư tại Phụ Mẫu',
    sao: ['Thiên Hư'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Khi Thiên Hư đóng Phụ Mẫu, cha mẹ đương số là người vất vả, hay
bất bình, gặp nghịch cảnh và thường đứng lên đấu tranh trong cả công việc
lẫn đời sống. Cha mẹ hay ủ rũ, ủ sầu, than khổ trước những bất công gặp
phải.`,
  },

  {
    id: 'thien-hu-tai-phu-mau-khoc-hu-ty-ngo',
    sao: ['Thiên Hư'],
    cung: ['Phụ Mẫu'],
    chi: ['Tý', 'Ngọ'],
    ketHop: ['Thiên Khốc'],
    doUuTien: 72,
    tomTat: `Khi bộ **Khốc Hư** đắc tại Tý/Ngọ trong cung Phụ Mẫu, cha mẹ
đương số tuổi trẻ vất vả nhưng về già thành công mỹ mãn.`,
  },

  {
    id: 'thien-hu-tai-phu-mau-sat-tinh',
    sao: ['Thiên Hư'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 70,
    tomTat: `Khi Thiên Hư tại Phụ Mẫu gặp thêm sát tinh (Kình Dương, Đà La,
Hỏa Tinh, Linh Tinh), cha mẹ dễ nóng nảy, bảo thủ; gia đình thiếu hòa khí,
dẫn đến cảnh ly tán hoặc góa bụa.`,
  },

  {
    id: 'thien-hu-tai-phuc-duc',
    title: 'Thiên Hư tại Phúc Đức',
    sao: ['Thiên Hư'],
    cung: ['Phúc Đức'],
    doUuTien: 70,
    tomTat: `Khi Thiên Hư đóng Phúc Đức, sao ảnh hưởng tới phúc phần dòng họ
— biểu hiện rõ rệt theo trạng thái đắc hoặc hãm cụ thể.`,
  },

  {
    id: 'thien-hu-tai-phuc-duc-ham',
    sao: ['Thiên Hư'],
    cung: ['Phúc Đức'],
    trangThai: ['Hãm'],
    doUuTien: 75,
    tomTat: `Khi Thiên Hư **Hãm** địa tại Phúc Đức, đương số bị giảm thọ;
trong dòng họ có âm hồn báo oán, nhiều người thân vất vả không may mắn,
hay gặp hoàn cảnh trớ trêu sinh ra bất mãn buồn khổ.`,
  },

  {
    id: 'thien-hu-tai-phuc-duc-ty-ngo',
    sao: ['Thiên Hư'],
    cung: ['Phúc Đức'],
    chi: ['Tý', 'Ngọ'],
    doUuTien: 72,
    tomTat: `Khi Thiên Hư **Đắc** địa tại Tý hoặc Ngọ trong cung Phúc Đức,
mồ mả nhà đương số phát đạt, phúc dày, dòng họ có nhiều người thành
công.`,
  },

  {
    id: 'thien-hu-tai-dien-trach',
    title: 'Thiên Hư tại Điền Trạch',
    sao: ['Thiên Hư'],
    cung: ['Điền Trạch'],
    doUuTien: 72,
    tomTat: `Khi Thiên Hư đóng Điền Trạch, đương số khó kiếm tiền, hao tài,
luôn lo âu sầu bi vì tiền bạc của cải. Nhà cửa hay hỏng cửa cổng; công năng
và thiết kế không hợp lý, gây khó chịu cho người ở. Đất ở thường xấu, dễ
phải có lần bán nhà bán đất trong đời.`,
  },

  {
    id: 'thien-hu-tai-dien-trach-ty-ngo',
    sao: ['Thiên Hư'],
    cung: ['Điền Trạch'],
    chi: ['Tý', 'Ngọ'],
    doUuTien: 70,
    tomTat: `Khi Thiên Hư **Đắc** địa tại Tý/Ngọ trong cung Điền Trạch, đương
số ứng cách "tiền bần hậu phú" — trước nghèo sau giàu.`,
  },

  {
    id: 'thien-hu-tai-dien-trach-quang-quy-ta-huu-khoi-viet',
    sao: ['Thiên Hư'],
    cung: ['Điền Trạch'],
    ketHop: ['Ân Quang', 'Thiên Quý', 'Tả Phù', 'Hữu Bật', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 70,
    tomTat: `Khi Thiên Hư tại Điền Trạch gặp các cát tinh Ân Quang, Thiên
Quý, Tả Phù, Hữu Bật, Thiên Khôi hoặc Thiên Việt, đất đai về sau gia tăng
phúc khí và gia đình hưng thịnh.`,
  },

  {
    id: 'thien-hu-tai-quan-loc',
    title: 'Thiên Hư tại Quan Lộc',
    sao: ['Thiên Hư'],
    cung: ['Quan Lộc'],
    doUuTien: 75,
    tomTat: `Khi Thiên Hư đóng Quan Lộc, công việc của đương số hay gặp cảnh
bất công và cản trở, sinh buồn khổ sầu bi. Vì luôn đồng cung Tuế Phá, đương
số dễ thua thiệt, đứng sau người khác; trong lòng phẫn uất, khó chịu, bất
bình mà không biết kêu than với ai.

Về định hướng nghề nghiệp, đương số phù hợp các công việc liên quan đến
việc buồn và hoàn cảnh khó khăn — như Hội Chữ Thập Đỏ, bác sỹ tâm lý, ban
tang lễ.`,
  },

  {
    id: 'thien-hu-tai-quan-loc-ty-ngo',
    sao: ['Thiên Hư'],
    cung: ['Quan Lộc'],
    chi: ['Tý', 'Ngọ'],
    doUuTien: 72,
    tomTat: `Khi Thiên Hư **Đắc** địa tại Tý/Ngọ trong cung Quan Lộc, đương
số tuổi trẻ vất vả, về sau thành công thành đạt và làm được đại sự.`,
  },

  {
    id: 'thien-hu-tai-no-boc',
    title: 'Thiên Hư tại Nô Bộc',
    sao: ['Thiên Hư'],
    cung: ['Nô Bộc'],
    doUuTien: 70,
    tomTat: `Khi Thiên Hư đóng Nô Bộc, đương số hay bị bạn bè, đồng nghiệp
hoặc cấp dưới nói xấu sau lưng, không thành thật trong giao tiếp; quan hệ
thường có bất đồng và khó chịu, đương số hay phải kêu than vì bạn bè.`,
  },

  {
    id: 'thien-hu-tai-no-boc-khong-kiep-kinh-da-hinh-sat',
    sao: ['Thiên Hư'],
    cung: ['Nô Bộc'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Kình Dương', 'Đà La', 'Thiên Hình'],
    doUuTien: 67,
    tomTat: `Khi Thiên Hư tại Nô Bộc gặp Địa Không, Địa Kiếp, Kình Dương, Đà
La hoặc Thiên Hình, quan hệ bạn bè và đồng nghiệp nhiều thị phi, khó giữ
được tình cảm bền chặt — bạn bè dễ phản bội, lợi dụng, lừa gạt.`,
  },

  {
    id: 'thien-hu-tai-no-boc-quang-quy-ta-huu-khoi-viet',
    sao: ['Thiên Hư'],
    cung: ['Nô Bộc'],
    ketHop: ['Ân Quang', 'Thiên Quý', 'Tả Phù', 'Hữu Bật', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 67,
    tomTat: `Khi Thiên Hư tại Nô Bộc gặp Ân Quang, Thiên Quý, Tả Phù, Hữu
Bật, Thiên Khôi hoặc Thiên Việt, bạn bè và đồng nghiệp lúc đầu có hiểu lầm
nhưng về sau lại trở thành chỗ dựa đắc lực cho đương số.`,
  },

  {
    id: 'thien-hu-tai-thien-di',
    title: 'Thiên Hư tại Thiên Di',
    sao: ['Thiên Hư'],
    cung: ['Thiên Di'],
    doUuTien: 72,
    tomTat: `Khi Thiên Hư đóng Thiên Di, lúc đương số ra ngoài hay gặp cảnh
bất bình, bất đồng và khó chịu; nhiều người chống đối lại mình, dễ sinh ưu
buồn, bực tức và kêu than.`,
  },

  {
    id: 'thien-hu-tai-thien-di-ty-ngo',
    sao: ['Thiên Hư'],
    cung: ['Thiên Di'],
    chi: ['Tý', 'Ngọ'],
    doUuTien: 70,
    tomTat: `Khi Thiên Hư **Đắc** địa tại Tý/Ngọ trong cung Thiên Di, tuổi
trẻ đương số ra ngoài đi làm xa vất vả, nhưng về sau thành công thành đạt
và làm được đại sự.`,
  },

  {
    id: 'thien-hu-tai-tat-ach',
    title: 'Thiên Hư tại Tật Ách',
    sao: ['Thiên Hư'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `Khi Thiên Hư đóng Tật Ách, đương số hay phải kêu than buồn khổ
về bệnh tật và tai họa; lúc nhắm mắt cũng có nhiều người khóc thương.

Vì Thiên Hư luôn đi cùng Tuế Phá, đương số còn dễ bị rụng răng sớm — răng
xấu, sâu răng, mọc lệch.`,
  },

  {
    id: 'thien-hu-tai-tat-ach-khong-kiep-kinh-da-linh-hoa',
    sao: ['Thiên Hư'],
    cung: ['Tật Ách'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Kình Dương', 'Đà La', 'Linh Tinh', 'Hỏa Tinh'],
    doUuTien: 72,
    tomTat: `Khi Thiên Hư tại Tật Ách gặp Địa Không, Địa Kiếp, Kình Dương, Đà
La, Linh Tinh hoặc Hỏa Tinh, đương số dễ mắc bệnh thần kinh, tim mạch, tiêu
hóa hoặc bệnh nan y; khổ sở về răng miệng, gặp tai nạn và phải mổ xẻ nhiều
lần.`,
  },

  {
    id: 'thien-hu-tai-tai-bach',
    title: 'Thiên Hư tại Tài Bạch',
    sao: ['Thiên Hư'],
    cung: ['Tài Bạch'],
    doUuTien: 72,
    tomTat: `Khi Thiên Hư đóng Tài Bạch, đường tiền bạc của đương số không
được hanh thông; luôn có việc phải tiêu pha do hoàn cảnh đưa đến. Đương số
hay buồn khổ u sầu vì tiền nong, hay gặp bất trắc và bất công trong việc
kiếm tiền.`,
  },

  {
    id: 'thien-hu-tai-tai-bach-ty-ngo',
    sao: ['Thiên Hư'],
    cung: ['Tài Bạch'],
    chi: ['Tý', 'Ngọ'],
    doUuTien: 70,
    tomTat: `Khi Thiên Hư **Đắc** địa tại Tý/Ngọ (cách **Khốc Hư**) trong
cung Tài Bạch, đương số ứng cách "tiền bần hậu phú".`,
  },

  {
    id: 'thien-hu-tai-tai-bach-khong-kiep-ky',
    sao: ['Thiên Hư'],
    cung: ['Tài Bạch'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `Khi Thiên Hư tại Tài Bạch gặp Địa Không, Địa Kiếp hoặc Hóa Kỵ,
đương số dễ phá sản trắng tay, hoặc phải trải qua nhiều lần mất mát mới
giữ được chút tài sản.`,
  },

  {
    id: 'thien-hu-tai-tu-tuc',
    title: 'Thiên Hư tại Tử Tức',
    sao: ['Thiên Hư'],
    cung: ['Tử Tức'],
    doUuTien: 72,
    tomTat: `Khi Thiên Hư đóng Tử Tức, đương số sinh con khó nuôi, sinh
nhiều mà nuôi được ít, có khi đẻ mất con hoặc sát con; hay buồn khổ sầu bi
về chuyện con cái. Con cái không được như mong đợi, hay gây khó chịu cho
đương số. Từ nhỏ con đã hay chống đối, làm điều trái ngược, hay khóc ăn
vạ, răng thường không đẹp.`,
  },

  {
    id: 'thien-hu-tai-tu-tuc-ty-ngo',
    sao: ['Thiên Hư'],
    cung: ['Tử Tức'],
    chi: ['Tý', 'Ngọ'],
    doUuTien: 70,
    tomTat: `Khi Thiên Hư **Đắc** địa tại Tý/Ngọ trong cung Tử Tức, đương số
tuổi trẻ vất vả vì con cái nhưng về già được nhờ.`,
  },

  {
    id: 'thien-hu-tai-phu-the',
    title: 'Thiên Hư tại Phu Thê',
    sao: ['Thiên Hư'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `Khi Thiên Hư đóng Phu Thê, vợ chồng đương số hay bất đồng quan
điểm, nay giận mai hờn, hay khóc lóc kêu than và thích bắt bẻ. Đương số
buồn khổ than vãn chuyện hôn nhân; nhân duyên trắc trở buổi đầu, ăn ở với
nhau có nước mắt.`,
  },

  {
    id: 'thien-hu-tai-phu-the-kinh-da-khong-kiep-ky',
    sao: ['Thiên Hư'],
    cung: ['Phu Thê'],
    ketHop: ['Kình Dương', 'Đà La', 'Địa Không', 'Địa Kiếp', 'Hóa Kỵ'],
    doUuTien: 72,
    tomTat: `Khi Thiên Hư tại Phu Thê gặp thêm Kình Dương, Đà La, Địa Không,
Địa Kiếp hoặc Hóa Kỵ, vợ chồng xung khắc nhau.`,
  },

  {
    id: 'thien-hu-tai-phu-the-ty-ngo',
    sao: ['Thiên Hư'],
    cung: ['Phu Thê'],
    chi: ['Tý', 'Ngọ'],
    doUuTien: 72,
    tomTat: `Khi Thiên Hư **Đắc** địa tại Tý/Ngọ trong cung Phu Thê, vợ
chồng đương số vất vả và bất đồng thời gian đầu, nhưng càng về sau càng
yên ấm và thành đạt.`,
  },

  {
    id: 'thien-hu-tai-huynh-de',
    title: 'Thiên Hư tại Huynh Đệ',
    sao: ['Thiên Hư'],
    cung: ['Huynh Đệ'],
    doUuTien: 70,
    tomTat: `Khi Thiên Hư đóng Huynh Đệ, đương số hay phải buồn rầu vì
chuyện anh chị em — anh chị em dễ bất hòa với nhau.`,
  },

  {
    id: 'khoc-hu-vao-han-dac',
    title: 'Khốc Hư vào hạn - đắc địa lợi 5 năm đầu',
    sao: ['Thiên Khốc', 'Thiên Hư'],
    doUuTien: 55,
    tomTat: `Khi bộ **Khốc Hư** vào hạn, tác dụng chỉ thực sự có lợi nếu sao
**Đắc** địa.

Trường hợp Khốc Hư đắc địa tại Tý/Ngọ:

- Vào đại hạn: chỉ thịnh trong năm năm đầu
- Vào tiểu hạn: chỉ thịnh nửa năm đầu
- Sau đó hết hiệu lực

Trường hợp Khốc Hư **Hãm** địa: đây là giai đoạn đương số gặp nhiều bất
mãn nghịch cảnh, phải kêu than u sầu, cuộc sống buồn rầu mất phương
hướng.`,
  },

  {
    id: 'khoc-hu-han-tang-mon',
    title: 'Khốc Hư + Tang Môn vào hạn - chuyện tang tóc',
    sao: ['Thiên Khốc', 'Thiên Hư'],
    ketHop: ['Tang Môn'],
    doUuTien: 50,
    tomTat: `Khi bộ **Khốc Hư** đi cùng Tang Môn vào hạn, đương số dễ gặp
chuyện tang tóc trong nhà, hoặc biến cố lớn cùng những chuyện buồn thấm
thía trong năm đó.`,
  },

  {
    id: 'thien-hu-loi-khuyen',
    title: 'Lời khuyên cho người Thiên Hư',
    sao: ['Thiên Hư'],
    doUuTien: 35,
    tomTat: `Thiên Hư biểu hiện những lúc khó khăn trắc trở hoặc thất bại
tạm thời — khiến đương số bất an, mất niềm tin hoặc chán nản.

Yếu điểm cần lưu ý:

- U buồn, ủy mị
- Hoang mang, đãng trí
- Kêu than, kể lể
- Bi quan, yếm thế

Để hóa giải, đương số nên duy trì thái độ cẩn trọng, chậm rãi trong quyết
định và khéo léo trong quan hệ với mọi người xung quanh. Học cách thích
nghi với thay đổi, giữ bình tĩnh trước nghịch cảnh và tích cực tìm kiếm sự
giúp đỡ khi cần. Xây dựng thói quen lành mạnh, giữ tinh thần lạc quan và
kiên nhẫn lâu dài.

Khi tu dưỡng đúng cách, Thiên Hư có thể chuyển biến khó khăn thành cơ hội
trưởng thành — đặc biệt khi đắc Tý/Ngọ thì cách "tiền bần hậu phú" sẽ
phát.`,
  },
];
