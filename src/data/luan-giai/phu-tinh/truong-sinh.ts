import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO TRƯỜNG SINH - Thủy, Thiện Tinh.
 *
 * Sao ĐẦU TIÊN của Vòng Trường Sinh 12 sao:
 * Trường Sinh: Mộc Dục: Quan Đới: Lâm Quan: Đế Vượng: Suy
 * Bệnh: Tử: Mộ: Tuyệt: Thai: Dưỡng
 *
 * An theo CỤC (Thủy Nhị/Mộc Tam/Kim Tứ/Thổ Ngũ/Hỏa Lục).
 *
 * QUY LUẬT BẮT BUỘC:
 * - Trường Sinh LUÔN tam hợp với Đế Vượng và Mộ: cách "SINH VƯỢNG MỘ"
 *
 * Vai trò ĐẶC BIỆT:
 * - Là VÒNG ĐỊA (Địa Lợi) trong Thiên-Địa-Nhân
 * - HỆ SỐ KHUẾCH ĐẠI - làm tăng tính chất sao đi cùng (tốt: càng tốt,
 * xấu: càng xấu)
 * - Tượng trưng SINH-LÃO-BỆNH-TỬ của con người - Trường Sinh = mới sinh
 * ra (mang ý nghĩa may mắn, vui vẻ, nghị lực)
 *
 * Tên gọi tắt: "Sinh".
 */
export const luanGiai_TruongSinh: DoanLuanGiai[] = [
  {
    id: 'truong-sinh-tinh-chat-chung',
    title: 'Trường Sinh - Đặc tính chung',
    sao: ['Trường Sinh'],
    doUuTien: 32,
    tomTat: `**Trường Sinh** là phụ tinh thuộc hàng thiện tinh, đứng đầu Vòng
Trường Sinh 12 sao. Ngũ hành Thủy.

Trong bộ Thiên - Địa - Nhân, Trường Sinh đại diện cho vòng Địa Lợi (Thiên
thời ứng vào vòng Thái Tuế, Nhân hòa ứng vào vòng Lộc Tồn). Sao này mang
đặc tính phúc thọ, sinh khí và thịnh vượng, biểu thị sự sinh sôi nảy nở,
mới hình thành — tinh khiết, trong sáng và phát triển. Đặc trưng nổi bật
nhất là gia tăng tính chất các sao trong cùng cung.

Vai trò đặc biệt của Trường Sinh là một hệ số khuếch đại: như "hệ số kích
thích" làm tăng cường, bổ sung ý nghĩa của sao đi kèm. Tốt thì càng tốt
(với cát tinh), xấu thì càng xấu (với sát tinh, hung tinh) — vì vậy phải
xét kỹ sao đồng cung mới đoán được tốt hay xấu.

Trong tượng Sinh - Lão - Bệnh - Tử, Trường Sinh ứng với cảnh "mới sinh ra",
sinh linh mới chào đời, mang ý nghĩa may mắn, vui vẻ và nghị lực. Tên gọi
tắt: "Sinh".`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // QUY LUẬT TAM HỢP + KHUẾCH ĐẠI
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'truong-sinh-tam-hop-sinh-vuong-mo',
    title: 'Quy luật Sinh - Vượng - Mộ tam hợp',
    sao: ['Trường Sinh'],
    ketHop: ['Đế Vượng', 'Mộ'],
    doUuTien: 60,
    tomTat: `Trường Sinh luôn tam hợp với Đế Vượng và Mộ — quy luật bắt buộc
trong vòng Trường Sinh, tạo cách **Sinh - Vượng - Mộ**.

Ý nghĩa từng cung trong cách:

- Trường Sinh (cung 1) là sinh khí khởi đầu
- Đế Vượng (cung 5) là đỉnh cao thịnh vượng
- Mộ (cung 9) là chôn cất, kết tụ

Ba sao tam hợp tạo thành vòng tuần hoàn sinh - phát - kết, ảnh hưởng lớn
đến sức sống, sự nghiệp và tài lộc của đương số. Khi cả ba cung này tốt
(nhiều cát tinh hội tụ), cuộc đời đương số hưng thịnh bền vững; ngược lại
khi xấu (nhiều sát tinh), tai họa lan tỏa cả ba cung.

Câu phú nổi tiếng: "Khá khen cung Phúc nhà ngươi / Trường Sinh, Đế Vượng
lắm người thành danh".`,
  },

  {
    id: 'truong-sinh-vai-tro-khuech-dai',
    title: 'Trường Sinh - Vai trò KHUẾCH ĐẠI tốt-xấu',
    sao: ['Trường Sinh'],
    doUuTien: 60,
    tomTat: `Vai trò khuếch đại là đặc trưng quan trọng nhất phải nắm khi
luận về Trường Sinh. Bản thân sao này không có giá trị tốt - xấu độc lập
mà phụ thuộc hoàn toàn vào sao đồng cung: cát tinh đi cùng Trường Sinh thì
tính tốt được nhân lên gấp bội, sát tinh đi cùng thì tai họa cũng tăng
cường mạnh mẽ.

Khi đồng cung cát tinh (Tử Vi, Thiên Phủ, Thiên Lương, Lộc Tồn, Hóa Khoa,
Thiên Khôi, Thiên Việt, Ân Quang, Thiên Quý...), Trường Sinh tăng phúc thọ,
tài lộc và con cái cho đương số; có lợi cho việc sinh nở (đặc biệt khi đi
cùng Long Trì, Phượng Các, Thai), đồng thời mở ra cơ hội thăng tiến.

Khi đồng cung sát bại tinh (Kình Dương, Đà La, Hỏa Tinh, Linh Tinh, Địa
Không, Địa Kiếp, Hóa Kỵ...), Trường Sinh lại gia tăng độ liều lĩnh và
những tính xấu của các sao này, làm tăng nhiều nguy cơ bất lợi cho đương
số — bệnh tật, công danh và tài lộc đều bị triết giảm.

Khi luận đoán, bắt buộc phải xét kỹ sao đồng cung trước khi kết luận
Trường Sinh tốt hay xấu.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP NỔI TIẾNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'truong-sinh-thien-ma-thanh-van-dac-lo',
    title: 'Mã ngộ Trường Sinh - Thanh vân đắc lộ',
    sao: ['Trường Sinh'],
    ketHop: ['Thiên Mã'],
    doUuTien: 60,
    tomTat: `Câu phú nổi tiếng: **"Mã ngộ Trường Sinh - Thanh vân đắc lộ"**.

Khi Thiên Mã đồng cung Trường Sinh, đường mây xanh đắc lộ — đương số gặp
vận hội may mắn về nhiều mặt, đường công danh thuận buồm xuôi gió.

Đặc trưng của người có cách này là năng động, nhiệt huyết, song hành cùng
may mắn đúng thời. Công danh dễ tiến đạt, tài lộc gia tăng và công việc
thành tựu.

Bộ này đã được mô tả tại file thien-ma.ts — đây là một trong chín cách
Thiên Mã nổi tiếng (Phù Dư Mã, Thư Hùng Mã, Chiến Mã, Mã Khốc Khách, Phù
Thi Mã, Chiết Túc Mã, Tử Mã, **Mã ngộ Trường Sinh**).`,
  },

  {
    id: 'truong-sinh-tu-vi-thien-phu-phu-quy-bao-dung',
    title: 'Trường Sinh + Tử Vi / Thiên Phủ - Phú quý bao dung',
    sao: ['Trường Sinh'],
    ketHop: ['Tử Vi', 'Thiên Phủ'],
    doUuTien: 55,
    tomTat: `Khi Trường Sinh đồng cung Tử Vi hoặc Thiên Phủ, đương số ở thế
bề trên, phú quý và phước thiện. Đặc trưng tính cách là bao dung, quảng
đại, dễ tha thứ và không câu chấp.

Nếu cách này không gặp sát bại tinh, đương số dễ là người có chức tước, vai
vế trong xã hội, đứng đầu một tập đoàn hoặc tập thể, lãnh đạo có khí chất.

Phân tích bộ sao: Tử Vi là Đế tinh, Thiên Phủ là Tài Khố tinh, được Trường
Sinh khuếch đại tạo nên cách bậc đại nhân.`,
  },

  {
    id: 'truong-sinh-cau-phu-phuc-duc-de-vuong',
    title: 'Câu phú: Trường Sinh + Đế Vượng tại Phúc Đức',
    sao: ['Trường Sinh'],
    cung: ['Phúc Đức'],
    ketHop: ['Đế Vượng'],
    doUuTien: 70,
    tomTat: `Câu phú nổi tiếng: "Khá khen cung Phúc nhà ngươi / Trường Sinh,
Đế Vượng lắm người thành danh".

Khi Trường Sinh đồng cung Đế Vượng tại Phúc Đức, đây là cách cực đẹp.
Dòng họ đương số chắc chắn có người hiển đạt; bản thân chủ mệnh được hưởng
phúc lộc lâu dài, con cháu hưng thịnh.

Quy luật của cách này nằm ở chỗ Trường Sinh và Đế Vượng vốn là hai trong
ba sao của tam hợp Sinh - Vượng - Mộ. Khi cả hai cùng đóng tại Phúc Đức,
đó là cách hiếm gặp đặc biệt đẹp.`,
  },

  {
    id: 'truong-sinh-loc-ma-am-tham-dien-bds',
    title: 'Trường Sinh + Lộc/Mã/Âm/Tham tại Điền - BĐS phát đạt',
    sao: ['Trường Sinh'],
    cung: ['Điền Trạch'],
    ketHop: ['Hóa Lộc', 'Lộc Tồn', 'Thiên Mã'],
    doUuTien: 60,
    tomTat: `Khi Trường Sinh tại Điền Trạch hội cùng Hóa Lộc, Lộc Tồn, Thiên
Mã, Thái Âm hoặc Tham Lang, đương số có duyên với buôn bán và kinh doanh
bất động sản phát đạt.

Phân tích bộ sao:

- Trường Sinh đem sinh khí vào cung Điền, đất đai dồi dào
- Lộc Tồn, Hóa Lộc là tài tinh hợp với bất động sản
- Thiên Mã chủ về di chuyển kinh doanh
- Thái Âm là sao chủ điền sản, tài bên trong
- Tham Lang đem đào hoa kinh doanh năng động

Đương số có duyên với đất đai, nhà cửa và ruộng vườn dồi dào, buôn bán và
kinh doanh bất động sản phát đạt. Nơi ở và làm việc thường khang trang
hiện đại, đông người qua lại.`,
  },

  {
    id: 'truong-sinh-khoi-viet-quang-quy-quan-loc',
    title: 'Trường Sinh + Khôi Việt + Quang Quý + Hóa Khoa tại Quan Lộc',
    sao: ['Trường Sinh'],
    cung: ['Quan Lộc'],
    ketHop: ['Hóa Khoa', 'Thiên Khôi'],
    doUuTien: 60,
    tomTat: `Khi Trường Sinh tại Quan Lộc hội cùng Hóa Khoa, Thiên Khôi, Thiên
Việt, Ân Quang và Thiên Quý, sự nghiệp đương số rực rỡ, có thể vươn tới
đỉnh cao danh vọng.

Phân tích bộ sao:

- Trường Sinh tạo sinh khí, nhiệt huyết khuếch đại
- Hóa Khoa chủ khoa bảng, danh tiếng
- Thiên Khôi, Thiên Việt là Thiên Ất Quý Nhân
- Ân Quang, Thiên Quý là phúc tinh quý nhân, đấng linh thiêng

Đương số mở ra nhiều cơ hội thăng tiến, được dòng sinh khí bồi đắp cho
công danh nên ít bế tắc, dễ đạt thành tựu lớn.`,
  },

  {
    id: 'truong-sinh-kinh-da-suc-khoe-suy-yeu',
    title: 'Trường Sinh + Kình Đà - Sức khỏe suy yếu',
    sao: ['Trường Sinh'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 50,
    tomTat: `Khi Trường Sinh đi cùng Kình Dương và Đà La, sức khỏe đương số
suy yếu — sinh khí bị hung sát khắc chế.

Đương số mắc bệnh tật triền miên, cơ thể suy yếu và khí lực cạn dần. Bệnh
tái đi tái lại, làm giảm thọ mệnh; thân thể chẳng được an yên.`,
  },

  {
    id: 'truong-sinh-kinh-da-tat-ach',
    title: 'Trường Sinh + Kình Đà tại Tật - Bệnh phát sinh liên tục',
    sao: ['Trường Sinh'],
    cung: ['Tật Ách'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 55,
    tomTat: `Khi Trường Sinh đi cùng Kình Dương và Đà La tại Tật Ách, cách cục
đặc biệt nguy hiểm: đặc tính dồi dào, nảy nở của Trường Sinh chuyển thành
tiêu cực — bệnh không bao giờ hết, phát sinh liên tục, bệnh tật và tai họa
nối tiếp nhau.`,
  },

  {
    id: 'truong-sinh-hoa-linh-cong-danh-trac-tro',
    title: 'Trường Sinh + Hỏa Linh - Công danh trắc trở',
    sao: ['Trường Sinh'],
    ketHop: ['Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 50,
    tomTat: `Khi Trường Sinh đi cùng Hỏa Tinh và Linh Tinh, công danh đương
số trắc trở. Con đường công danh khó khăn, đương số vất vả hết mình với
công việc nhưng thành quả nhận lại không tương xứng.

Cảnh báo: cách này còn vướng kiện tụng, thị phi và bị kẻ tiểu nhân hãm hại.

Để hóa giải, cần Tử Vi, Thiên Phủ, Thiên Lương, Thiên Đồng đi cùng Tả Phù,
Hữu Bật, Thiên Khôi, Thiên Việt giải bớt.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // TRƯỜNG SINH TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'truong-sinh-tai-menh',
    title: 'Trường Sinh tại Mệnh',
    sao: ['Trường Sinh'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `Khi Trường Sinh thủ Mệnh, đương số có tướng mạo to lớn, khỏe
mạnh, tràn đầy sức sống. Tầm vóc to lớn, sức khỏe tốt, tinh thần năng nổ
nhiệt huyết cao và có triển vọng sống lâu sống thọ.

Tính cách độ lượng, nhân từ, quảng đại — Trường Sinh vốn là quý tinh và
thiện tinh, làm tăng phúc thọ, tài lộc, con cái cho đương số. Cách này còn
có lợi cho việc sinh nở, đặc biệt khi đi cùng Long Trì, Phượng Các và Thai.

Hậu vận của đương số rất đẹp: càng về già càng may mắn, thọ trường và con
cháu sum vầy.

Cảnh báo về vai trò khuếch đại tính xấu: khi đồng cung sát bại tinh, Trường
Sinh làm tăng độ liều lĩnh và tính xấu — đương số trở nên hấp tấp, dễ tự
chuốc tai họa cho bản thân.`,
  },

  {
    id: 'truong-sinh-tai-phu-mau',
    title: 'Trường Sinh tại Phụ Mẫu',
    sao: ['Trường Sinh'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Khi Trường Sinh đóng tại Phụ Mẫu, đây là dấu hiệu cát lành cho
cha mẹ đương số. Cha mẹ có sức khỏe tốt, tinh thần năng động, tính tình
chịu khó ít khi uể oải và tuổi thọ cao.

Cha mẹ là tấm gương cần cù, nghị lực và sức sống dồi dào cho con cái. Nhờ
đó, đương số được hưởng nguồn sinh khí cùng phúc thọ từ cha mẹ.`,
  },

  {
    id: 'truong-sinh-tai-phuc-duc',
    title: 'Trường Sinh tại Phúc Đức - HỢP CÁCH',
    sao: ['Trường Sinh'],
    cung: ['Phúc Đức'],
    doUuTien: 80,
    tomTat: `Phúc Đức là vị trí hợp cách của Trường Sinh — phước khí dày dặn.
Dòng họ đương số nhiều người sống thọ, mồ mả tổ tiên kết phát, hậu duệ được
che chở phù trì.

Bản thân đương số tâm tính thiện lương, hưởng phúc phần từ quá khứ và biết
vun bồi phúc đức cho thế hệ sau.

Đặc biệt khi đồng cung **Đế Vượng**, ứng câu phú: "Khá khen cung Phúc nhà
ngươi / Trường Sinh, Đế Vượng lắm người thành danh" — dòng họ chắc chắn có
người hiển đạt.`,
  },

  {
    id: 'truong-sinh-tai-dien-trach',
    title: 'Trường Sinh tại Điền Trạch',
    sao: ['Trường Sinh'],
    cung: ['Điền Trạch'],
    doUuTien: 76,
    tomTat: `Khi Trường Sinh cư Điền Trạch, của tiền và đất đai của đương số
dồi dào, có duyên với đất đai; nhà cửa và ruộng vườn cũng dồi dào tương xứng.

Khi hội cùng các tài tinh (Hóa Lộc, Lộc Tồn, Thiên Mã, Thái Âm, Tham Lang),
đương số có duyên với buôn bán và kinh doanh bất động sản, phát đạt mạnh.

Nơi ở và làm việc khang trang, rộng lớn, sạch sẽ, đông đúc và hiện đại.
Gia trạch hưng thịnh, thuận lợi cho việc tích lũy tài sản cố định.`,
  },

  {
    id: 'truong-sinh-tai-quan-loc',
    title: 'Trường Sinh tại Quan Lộc',
    sao: ['Trường Sinh'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `Khi Trường Sinh tại Quan Lộc, đương số nhiệt huyết và năng nổ
trong công việc. Sự nghiệp dễ phát triển, mở ra nhiều cơ hội thăng tiến —
như dòng sinh khí bồi đắp cho công danh nên ít bế tắc, dễ đạt thành tựu
lớn và có thể lên đỉnh cao.

Khi hội cùng Hóa Khoa, Thiên Khôi, Thiên Việt, Ân Quang và Thiên Quý, sự
nghiệp đương số rực rỡ, vươn tới đỉnh cao danh vọng. Nhiệt huyết năng nổ
trong công việc tạo thành thành tựu lớn.`,
  },

  {
    id: 'truong-sinh-tai-no-boc',
    title: 'Trường Sinh tại Nô Bộc',
    sao: ['Trường Sinh'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Khi Trường Sinh tại Nô Bộc, đương số lắm bạn nhiều bè, trong số
ấy có nhiều người thành đạt. Đương số giao du rộng rãi, cuộc đời được phát
triển nhờ bạn bè giúp đỡ; nhiều bạn có vị trí cao trong xã hội.

Khi hội cát tinh, bạn bè, đồng nghiệp và cấp dưới hỗ trợ đương số mạnh mẽ.

Khi hội sát tinh (Địa Không, Địa Kiếp, Kình Dương, Đà La, Cự Môn, Hóa Kỵ),
mối quan hệ trở nên bất lợi, gây hao tốn và lôi đương số vào những rắc rối.`,
  },

  {
    id: 'truong-sinh-tai-thien-di',
    title: 'Trường Sinh tại Thiên Di',
    sao: ['Trường Sinh'],
    cung: ['Thiên Di'],
    doUuTien: 76,
    tomTat: `Khi Trường Sinh cư Thiên Di, đương số ra ngoài nhiều may mắn,
dễ thành công. Đặc trưng có chút nghịch lý: ở nhà thì lười, nhưng khi ra
ngoài và sống xa gia đình thì lại rất chăm chỉ.

Vận may cho phép đương số dễ gặt hái thành công; vợ thường to béo, gia đình
có điều kiện. Cách này mở ra nhiều thuận lợi cho quá trình làm ăn và lập
nghiệp xa quê.`,
  },

  {
    id: 'truong-sinh-tai-tat-ach-bat-loi',
    title: 'Trường Sinh tại Tật Ách - BẤT LỢI',
    sao: ['Trường Sinh'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `Tật Ách là vị trí ngoại lệ của Trường Sinh — bất lợi vì đặc tính
dồi dào nảy nở chuyển thành tiêu cực, khuếch đại bệnh tật cho đương số.

Bệnh của đương số nhiều và lâu khỏi; đặc tính "dồi dào, đâm trồi nẩy nở"
khiến bệnh không bao giờ hết, bệnh tật và tai họa liên tục phát sinh.

Khi hội sát tinh (Địa Không, Địa Kiếp, Kình Dương, Đà La, Cự Môn, Hóa Kỵ),
đương số càng dễ mắc bệnh lâu ngày, khó dứt điểm.

Sao giải hóa: **Hóa Khoa**, Thiên Quan, Thiên Phúc, Thiên Khôi, Thiên Việt,
Ân Quang, Thiên Quý cùng Tuần - Triệt giúp tai họa được hóa giải, bệnh tật
dần suy giảm.`,
  },

  {
    id: 'truong-sinh-tai-tai-bach',
    title: 'Trường Sinh tại Tài Bạch',
    sao: ['Trường Sinh'],
    cung: ['Tài Bạch'],
    doUuTien: 78,
    tomTat: `Khi Trường Sinh cư Tài Bạch, nguồn kiếm tiền của đương số luôn
dồi dào — hết tiền chỗ này lại có chỗ khác, tiền bạc luôn nảy nở sinh sôi.
Đương số không bao giờ phải lo hết tiền, hết lại có, hiếm khi rơi vào cảnh
túng thiếu.

Cách cục này thuận lợi cho việc tích lũy, làm ăn và đầu tư; của cải có
xu hướng tăng trưởng, tạo cảm giác an tâm tài chính suốt cả cuộc đời.`,
  },

  {
    id: 'truong-sinh-tai-tu-tuc',
    title: 'Trường Sinh tại Tử Tức',
    sao: ['Trường Sinh'],
    cung: ['Tử Tức'],
    doUuTien: 76,
    tomTat: `Khi Trường Sinh đóng tại Tử Tức, đương số đông con cái; con cái
khỏe mạnh, năng động, mang lại niềm vui cho gia đình. Sau khi sinh con,
vợ chồng làm ăn thường phát đạt hơn.

Về biểu tượng, cách này nói lên sự nối dài huyết mạch và hưng thịnh gia đạo
cho đương số.`,
  },

  {
    id: 'truong-sinh-tai-phu-the',
    title: 'Trường Sinh tại Phu Thê',
    sao: ['Trường Sinh'],
    cung: ['Phu Thê'],
    doUuTien: 76,
    tomTat: `Khi Trường Sinh đóng tại Phu Thê, người hôn phối của đương số
khỏe mạnh và sống thọ. Nhà vợ hoặc nhà chồng có điều kiện, khá giả; sau
khi cưới, công việc và của cải của đương số đi lên, phát triển tốt hơn.

Cách cục cụ thể: sự nghiệp khởi sắc sau hôn nhân, tài vận thuận lợi, của
cải ngày càng tích lũy.`,
  },

  {
    id: 'truong-sinh-tai-huynh-de',
    title: 'Trường Sinh tại Huynh Đệ',
    sao: ['Trường Sinh'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Khi Trường Sinh đóng tại Huynh Đệ, anh em đương số đông vui và
sung túc, gắn bó với nhau và tạo thành chỗ dựa cho nhau; nhà cửa sung túc.

Khi hội cát tinh, anh em hòa thuận.

Khi hội sát tinh (Địa Không, Địa Kiếp, Kình Dương, Đà La, Cự Môn, Hóa Kỵ),
anh em dễ nảy sinh mâu thuẫn và gây phiền lụy cho nhau.`,
  },
];
