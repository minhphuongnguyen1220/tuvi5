import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO DƯỠNG - Mộc.
 *
 * Vị trí THỨ 12 (CUỐI) trong Vòng Trường Sinh 12 sao:
 * Trường Sinh: Mộc Dục: Quan Đới: Lâm Quan: Đế Vượng: Suy
 * Bệnh: Tử: Mộ: Tuyệt: Thai: DƯỠNG
 *
 * An theo CỤC. Sao KẾT THÚC vòng Trường Sinh.
 *
 * Đặc trưng:
 * - Sau khi đã kết "Thai" rồi thì phải NUÔI DƯỠNG, QUAN TÂM chờ thành người
 * - CHĂM SÓC, NUÔI DƯỠNG, CẨN THẬN, CẦN CÙ, DUY TRÌ
 * - Đặc điểm tên gọi: TÊN CÚNG CƠM, BIỆT DANH, BIỆT HIỆU, THAY ĐỔI TÊN HỌ
 * - Người được ĐỠ ĐẦU, được nhiều người chăm sóc
 * - Đương số cũng thích chăm sóc người khác (cây, súc vật, người)
 * - Hậu vận: ĐÔNG CON ĐÔNG CHÁU khi Thân có sao Dưỡng
 */
export const luanGiai_Duong: DoanLuanGiai[] = [
  {
    id: 'duong-tinh-chat-chung',
    title: 'Dưỡng - Đặc tính chung',
    sao: ['Dưỡng'],
    doUuTien: 33,
    tomTat: `**Dưỡng** là phụ tinh thuộc nhóm cát thiện tinh, ngũ hành Mộc, đứng ở
vị trí thứ mười hai và cũng là vị trí cuối cùng của vòng Trường Sinh.

Khí chất của Dưỡng nằm ở hai chữ "chăm sóc" và "nuôi dưỡng". Sau khi đã kết
Thai, mầm sống phải được quan tâm bảo bọc, ngày ngày tưới tắm chờ ngày thành
hình — đó là tinh thần cốt lõi của sao này. Cẩn thận, cần cù, biết duy trì
mới làm cho sự sống đi tới được đích.

Là sao kết thúc vòng Trường Sinh, Dưỡng giữ vai trò ươm trồng sau khi mầm
đã hình thành, tích hợp tinh thần bảo bọc và lòng nhân hậu vào cuộc đời
đương số.

Một đặc điểm thú vị riêng của Dưỡng là gắn với tên gọi:

- Đương số thường có tên cúng cơm, biệt danh, biệt hiệu khác với tên thật
- Đôi khi từng đổi tên trong đời
- Tên gọi phản ánh sự tái sinh, đổi vận hoặc dấu vết được nuôi nấng bảo bọc`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP TỐT
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'duong-quang-quy-quan-phuc-ta-huu-quy-trong',
    title: 'Dưỡng + Quang Quý + Quan Phúc + Tả Hữu - Khéo léo được quý trọng',
    sao: ['Dưỡng'],
    ketHop: ['Ân Quang', 'Thiên Quý', 'Thiên Quan', 'Thiên Phúc', 'Tả Phù', 'Hữu Bật'],
    doUuTien: 65,
    tomTat: `Khi Dưỡng hội đủ Ân Quang, Thiên Quý, Thiên Quan, Thiên Phúc cùng
Tả Phù, Hữu Bật, đương số trở thành mẫu người khéo léo, đức độ, đi đến đâu
cũng được mọi người quý trọng và sẵn lòng giúp đỡ hết mình.

Bộ này cộng hưởng rất đẹp: Ân Quang cùng Thiên Quý là phúc tinh đại diện
cho đấng linh thiêng phù trợ, Thiên Quan cùng Thiên Phúc mang phúc thiện do
trời ban, Tả Phù cùng Hữu Bật là quý nhân người đời nâng đỡ. Đặt trên nền
tính chăm sóc nuôi dưỡng của Dưỡng, đương số vừa giàu lòng quan tâm vừa
được vây quanh bởi quý nhân hai phía âm dương.`,
  },

  {
    id: 'duong-hy-than-tu-tuc-quy-tu',
    title: 'Dưỡng + Hỷ Thần / Thiên Hỷ tại Tử Tức - Sinh con quý tử',
    sao: ['Dưỡng'],
    cung: ['Tử Tức'],
    ketHop: ['Hỷ Thần', 'Thiên Hỷ'],
    doUuTien: 65,
    tomTat: `Sách phú có câu "Dưỡng Hỷ lâm ư Tử Tức tất sanh con quý tử". Khi
Dưỡng cùng Hỷ Thần hoặc Thiên Hỷ hội tại Tử Tức, đây là điềm đại cát cho
đường con cái: đương số sinh được con quý tử, con cái hiếu thảo và dễ
nuôi. Bộ Dưỡng cộng Hỷ ghép lại đúng nghĩa "nuôi dưỡng" cùng "hỷ sự" — tự
nhiên kết quả là đứa con đáng quý.`,
  },

  {
    id: 'duong-thanh-long-long-tri-quy-toc',
    title: 'Dưỡng + Thanh Long + Long Trì - Nuôi dưỡng quý tộc',
    sao: ['Dưỡng'],
    ketHop: ['Thanh Long', 'Long Trì'],
    doUuTien: 55,
    tomTat: `Dưỡng đi cùng Thanh Long, Long Trì khiến chất nuôi dưỡng nhuốm màu
sang trọng và quý tộc. Đương số có thể là người được đỡ đầu bởi nhân vật
quyền quý, có duyên với các nghề phục vụ tầng lớp thượng lưu, hoặc nhận
con đỡ đầu của những gia đình danh giá. Cách cục mở ra cánh cửa giao thiệp
với giới có địa vị, mang lại nâng đỡ rõ rệt cho cuộc đời.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP XẤU
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'duong-khoc-hu-sat-con',
    title: 'Dưỡng + Khốc Hư - Sát con dễ sẩy thai',
    sao: ['Dưỡng'],
    ketHop: ['Thiên Khốc', 'Thiên Hư'],
    doUuTien: 55,
    tomTat: `Khi Dưỡng gặp Thiên Khốc cùng Thiên Hư, tính chất nuôi dưỡng bị
nhuốm khí ai oán, biến thành sát con và đặc biệt dễ sẩy thai. Đương số
phải đề phòng chuyện con cái khó nuôi, sức khỏe của con kém. Để hóa giải,
cần có Tứ Đức, Thiên Quan, Thiên Phúc cùng Hỷ Thần đến hội mới chuyển
được vận.`,
  },

  {
    id: 'duong-tuong-suy-toi-to-giup-viec',
    title: 'Dưỡng + Thiên Tướng + Suy tại Thiên Di - Làm tôi tớ giúp việc',
    sao: ['Dưỡng'],
    ketHop: ['Thiên Tướng', 'Suy'],
    cung: ['Thiên Di'],
    doUuTien: 55,
    tomTat: `Dưỡng cùng Thiên Tướng và Suy hội tại Thiên Di đẩy đương số vào
môi trường phục dịch nhà quyền môn. Đương số dễ làm tôi tớ, giúp việc cho
gia đình quyền quý, gần gũi với tầng lớp cao sang nhưng ở vai trò phục vụ.
Với người có nội lực, đây là cơ hội học hỏi và tiếp xúc giới thượng lưu;
với người yếu thế, cách cục thành nghề phục dịch thuần túy.`,
  },

  {
    id: 'duong-bai-tinh-tuong-quan-benh-phu-vat-va-phuc-vu',
    title: 'Dưỡng + Tướng Quân + Bệnh Phù - Vất vả phục vụ',
    sao: ['Dưỡng'],
    ketHop: ['Tướng Quân', 'Bệnh Phù'],
    doUuTien: 55,
    tomTat: `Khi Dưỡng đi cùng Tướng Quân và Bệnh Phù, sát tinh hãm địa biến
tính chăm sóc thành gánh nặng mệt mỏi. Đương số dễ rơi vào cảnh phải làm
tôi tớ, giúp việc, vất vả phục vụ nhà quyền quý mà không được ghi nhận.
Tinh thần "nuôi dưỡng" lúc này không còn là phúc lành, mà thành nỗi lo
toan mỏi mệt cho người khác trong khi bản thân thiệt thòi.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // DƯỠNG TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'duong-tai-menh',
    title: 'Dưỡng tại Mệnh',
    sao: ['Dưỡng'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Đương số có Dưỡng thủ Mệnh mang bản chất cần cù, nhẫn nại, bền
chí; không phải kiểu người bộc phát hay hấp tấp mà làm gì cũng chậm rãi
chắc chắn. Dù gặp khó khăn vẫn kiên trì theo đuổi mục tiêu, như người gieo
mầm rồi ngày ngày chăm bón chờ cây ra trái.

Tâm hồn giàu lòng trắc ẩn, dễ rung động trước nỗi khổ của người khác. Không
chỉ thương người, đương số còn yêu cây cỏ, động vật, thích chăm sóc, che
chở và nuôi dưỡng tất cả những gì sống động xung quanh mình.

Về sức khỏe, đương số không được khỏe mạnh, thân thể yếu ớt, hay mắc bệnh
tật và tai họa. Lúc nhỏ hoặc khi bước vào chu kỳ mới của cuộc đời thường
có sức khỏe yếu, dễ đau ốm vặt — như cây non phải được chăm sóc kỹ lưỡng
mới lớn được.

Một đặc điểm rất riêng: đương số thường có tên cúng cơm, biệt danh riêng
hoặc từng đổi tên trong đời, phản ánh sự tái sinh và đổi vận. Đương số
cũng là người được đỡ đầu — mỗi khi bệnh tật hay hoạn nạn, có người kịp
thời giúp đỡ.

Trong đối nhân xử thế, đương số dễ nuôi con và nuôi súc vật, thích quan
tâm chăm sóc mọi người xung quanh, đồng thời cũng biết quan tâm chăm sóc
chính bản thân mình và yêu đời. Hậu vận đông con đông cháu, được quan tâm
chăm lo lúc tuổi già.`,
  },

  {
    id: 'duong-tai-menh-su-nghiep-y-te',
    title: 'Dưỡng tại Mệnh - Sự nghiệp gắn với chăm sóc y tế',
    sao: ['Dưỡng'],
    cung: ['Mệnh'],
    doUuTien: 60,
    tomTat: `Sự nghiệp của đương số có Dưỡng thủ Mệnh gắn liền với chăm sóc và
y tế. Đương số hợp các lĩnh vực phục vụ và chăm sóc, làm việc bằng cái tâm
hơn là cái lợi, sẵn sàng hy sinh thời gian và công sức cho người khác. Nhờ
vậy đương số được cấp trên, khách hàng và đồng nghiệp tin tưởng dài lâu.

Khi Dưỡng hội cùng Ân Quang, Thiên Quý, Thiên Quan, Thiên Phúc, con đường
sự nghiệp càng sáng tỏ. Đương số có duyên với y tế, giáo dục, chăm sóc
cộng đồng, môi trường, thú y cùng các công việc nuôi dưỡng và chữa lành.

Hướng phát triển không bùng nổ nhanh nhưng tiến lên vững chắc, càng về sau
càng có vị trí ổn định — đúng tinh thần "tích tiểu thành đại" của một sao
thuộc giai đoạn ươm mầm.`,
  },

  {
    id: 'duong-tai-menh-hon-nhan-am-ap',
    title: 'Dưỡng tại Mệnh - Hôn nhân ấm áp hy sinh',
    sao: ['Dưỡng'],
    cung: ['Mệnh'],
    doUuTien: 58,
    tomTat: `Trong hôn nhân, đương số có Dưỡng thủ Mệnh là mẫu bạn đời hết mực
chu đáo, quan tâm từ bữa ăn, giấc ngủ đến tâm trạng của người mình yêu.
Đương số luôn muốn chăm lo và bảo vệ đối phương, khiến gia đình mang màu
sắc ấm áp với nhiều hy sinh thầm lặng.

Một nét đặc biệt là đương số dễ rơi vào những mối quan hệ tình cảm khác
huyết thống: nuôi con riêng của vợ hoặc chồng, nhận con nuôi, gắn bó với
anh chị em kết nghĩa. Những mối dây tình cảm tuy không chung máu mủ nhưng
sâu đậm và bền lâu — đó cũng là cách Dưỡng thể hiện chất nuôi dưỡng của
mình ở phạm vi hôn nhân, gia đình.`,
  },

  {
    id: 'duong-tai-menh-tai-loc-tich-luy',
    title: 'Dưỡng tại Mệnh - Tài lộc tích lũy bền bỉ',
    sao: ['Dưỡng'],
    cung: ['Mệnh'],
    doUuTien: 58,
    tomTat: `Tài lộc của đương số có Dưỡng thủ Mệnh đến theo con đường tích
lũy bền bỉ chứ không bạo phát. Đương số giỏi vun vén, biết tiết kiệm, xoay
xở từng chút một, đúng tinh thần "góp gió thành bão" — tài sản theo thời
gian ngày càng ổn định.

Đương số cũng có duyên nhận được hỗ trợ tài chính từ người khác nhờ uy
tín, sự tử tế và lòng tin mà mình tạo dựng. Các nguồn thu không quá lớn
nhưng đều đặn và an toàn, hợp với người ưa sự chắc chắn hơn là phiêu lưu
tài chính.`,
  },

  {
    id: 'duong-tai-phu-mau',
    title: 'Dưỡng tại Phụ Mẫu',
    sao: ['Dưỡng'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Dưỡng cư Phụ Mẫu khiến đương số trở thành người con hết mực thờ
cha kính mẹ, hay quan tâm chăm lo cho cha mẹ. Cha mẹ của đương số cũng dễ
ốm đau hoặc gặp phiền hà nên cần con cái quan tâm chăm sóc và giúp đỡ.

Bản thân cha mẹ là người giàu lòng nhân ái, hay quan tâm chăm sóc đương
số cùng mọi người xung quanh, hay giúp đỡ người khác và được bà con, láng
giềng cùng xã hội yêu quý.

Khi Dưỡng hợp thêm Ân Quang, Thiên Quý, Thiên Quan, Thiên Phúc cùng Hóa
Lộc, đương số càng tận tâm phụng dưỡng đúng đạo làm con. Đôi khi vì cha mẹ
hay đau yếu, gặp phiền muộn nên đương số phải đứng ra chăm lo trực tiếp.`,
  },

  {
    id: 'duong-tai-phuc-duc',
    title: 'Dưỡng tại Phúc Đức',
    sao: ['Dưỡng'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `Dưỡng cư Phúc Đức báo số đương số dễ làm con nuôi họ khác, hoặc
nhận con nuôi, đỡ đầu cho người khác. Đương số là người quan tâm chăm lo
tới mồ mả tổ tiên, chịu khó làm việc thiện, giúp người và tích phước.

Khi cách cục hợp Thiên Quan, Thiên Phúc, Ân Quang cùng Thiên Quý, đương số
ăn ở có hậu, tin rằng "gieo nhân lành sẽ gặt quả tốt", thường âm thầm giúp
đỡ mọi người trong lúc khó khăn mà không phô trương.`,
  },

  {
    id: 'duong-tai-dien-trach',
    title: 'Dưỡng tại Điền Trạch',
    sao: ['Dưỡng'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Dưỡng cư Điền Trạch khiến đương số chú tâm tới nhà cửa và môi
trường sống. Nhà của đương số dễ nuôi thú vật, trồng nhiều cây cỏ xung
quanh; bản thân đương số chịu khó vun vén, tích cóp, xây sửa nhà cửa và
quan tâm giúp đỡ hàng xóm láng giềng.

Đương số thích chăm chút, sửa sang, sắp xếp nhà cửa, đam mê trồng cây và
nuôi chim cá, luôn giữ gìn môi trường sống ấm cúng và gọn gàng. Quan hệ
với hàng xóm hòa nhã, đúng nghĩa "tối lửa tắt đèn có nhau".`,
  },

  {
    id: 'duong-tai-quan-loc',
    title: 'Dưỡng tại Quan Lộc',
    sao: ['Dưỡng'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `Dưỡng cư Quan Lộc cho thấy đương số là người quan tâm và chú trọng
nhiều vào công danh sự nghiệp, đặt sự nghiệp lên hàng đầu, không ngừng nỗ
lực để con đường công danh phát triển rực rỡ.

Đương số hợp các ngành nghề thuộc lĩnh vực dịch vụ và chăm sóc khách hàng.
Nếu cách cục hội nhiều phúc thiện tinh, đương số dễ làm bác sĩ, điều
dưỡng, y tá, hộ sinh, hoặc theo các nghề liên quan tới cây xanh, môi
trường, vật nuôi, chăn nuôi và chăm sóc thú cưng.

Tinh thần làm nghề của Dưỡng đúng câu "một nghề cho chín, còn hơn chín
nghề" — chuyên tâm và bền bỉ tạo nên chỗ đứng.`,
  },

  {
    id: 'duong-tai-no-boc',
    title: 'Dưỡng tại Nô Bộc',
    sao: ['Dưỡng'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Dưỡng cư Nô Bộc cho thấy đương số là người quan tâm tới bạn bè,
đồng nghiệp, bệnh nhân, học trò cùng gia chủ, coi trọng tình nghĩa.

Khi cách cục hội nhiều sao tốt, đương số hợp các nghề bác sĩ, giáo viên,
nhà từ thiện, hiệp hội cứu trợ — nơi tinh thần chăm sóc của Dưỡng phát
huy rõ nét nhất.

Ngược lại, nếu hội nhiều sát bại tinh, đương số có thể làm người ở, giúp
việc nhà người, dễ rơi vào cảnh làm thuê và phục dịch cho gia đình người
khác.`,
  },

  {
    id: 'duong-tai-thien-di',
    title: 'Dưỡng tại Thiên Di',
    sao: ['Dưỡng'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `Dưỡng cư Thiên Di cho thấy đương số ra ngoài hay giúp đỡ và chăm
sóc mọi người xung quanh, hay đi cứu trợ và giúp người. Đây là số mệnh đi
giúp đỡ, phục vụ thế giới bên ngoài, mang theo trái tim biết thương người;
đương số dễ tham gia các hoạt động từ thiện, cứu trợ và những công việc
phục vụ cộng đồng.

Khi Dưỡng hội cùng Tướng Quân và Suy, đương số dễ làm tôi tớ, giúp việc
nhà quyền môn, phục vụ trong môi trường quyền quý, gần gũi với tầng lớp
cao sang.`,
  },

  {
    id: 'duong-tai-tat-ach',
    title: 'Dưỡng tại Tật Ách',
    sao: ['Dưỡng'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `Dưỡng cư Tật Ách báo bệnh tật và tai họa đã xâm nhập tiềm tàng và
tích tụ dần. Đương số dễ gặp các loại bệnh tiềm ẩn, tích tụ lâu ngày mới
phát ra; vì vậy cần quan tâm chăm sóc sức khỏe đều đặn, cẩn thận tránh
làm điều ác để hạn chế tác họa, đồng thời sống thiện lương để giảm hung
khí của vị trí này.`,
  },

  {
    id: 'duong-tai-tai-bach',
    title: 'Dưỡng tại Tài Bạch',
    sao: ['Dưỡng'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `Dưỡng cư Tài Bạch cho thấy đương số chịu khó tích cóp, quan tâm
tạo ra của tiền, hay được người khác giúp đỡ và cho tiền. Đương số biết
tích góp, chăm chỉ tạo dựng của cải theo lối bền bỉ.

Khi Dưỡng hội cùng Ân Quang, Thiên Quý, Thiên Khôi, Thiên Việt cùng Tả Phù,
Hữu Bật, đương số rất dễ nhận được sự giúp đỡ về tài chính, được cho tiền
hoặc hưởng lợi từ sự quan tâm của người khác.`,
  },

  {
    id: 'duong-tai-tu-tuc',
    title: 'Dưỡng tại Tử Tức',
    sao: ['Dưỡng'],
    cung: ['Tử Tức'],
    doUuTien: 78,
    tomTat: `Dưỡng cư Tử Tức cho thấy đương số quan tâm và chăm lo đường con
cái. Con cái thường dễ đau ốm nên đương số phải gửi vía làm con nuôi nhà
người, có con nuôi hoặc cho con nhờ người khác nuôi hộ; có khi đương số
nhận con đỡ đầu, hoặc nuôi con riêng của chồng vợ.

Tính chất cát hung tùy bộ kết hợp:

- Khi gặp Thiên Khốc cùng Thiên Hư, cách cục sát con và rất dễ sẩy.
- Khi gặp Hỷ Thần hoặc Thiên Hỷ, ứng câu phú "Dưỡng Hỷ lâm ư Tử Tức tất
  sanh con quý tử" — sinh được con quý tử.
- Khi gặp Thiên Khốc, Thiên Hư cộng Địa Không, Địa Kiếp cùng Kình Dương,
  Đà La và Hỏa Tinh, Linh Tinh, đương số thường gặp mất mát, sẩy thai.
- Khi gặp Hỷ Thần hoặc Thiên Hỷ cùng Văn Xương, Văn Khúc, Thiên Khôi,
  Thiên Việt, đây là điềm lành, sinh được con quý tử.`,
  },

  {
    id: 'duong-tai-phu-the',
    title: 'Dưỡng tại Phu Thê',
    sao: ['Dưỡng'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `Dưỡng cư Phu Thê cho thấy người hôn phối dễ làm các nghề dịch vụ,
chăm sóc, nghề y hoặc nghề giáo. Người hôn phối cũng dễ hay mắc ốm đau,
khiến đương số phải quan tâm và chăm sóc nhiều — đúng tinh thần "nuôi
dưỡng" mà Dưỡng đưa vào cung phối ngẫu.`,
  },

  {
    id: 'duong-tai-huynh-de',
    title: 'Dưỡng tại Huynh Đệ',
    sao: ['Dưỡng'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Dưỡng cư Huynh Đệ cho thấy đương số có anh em kết nghĩa, anh chị
em nuôi hoặc dị bào. Mối dây tình cảm tuy không cùng huyết thống nhưng
sâu đậm — đặc trưng "nuôi dưỡng người ngoài thành thân" của sao này.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // DƯỠNG VÀO HẠN
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'duong-vao-han-benh-tat',
    title: 'Dưỡng vào hạn - Bệnh tật dai dẳng',
    sao: ['Dưỡng'],
    doUuTien: 50,
    tomTat: `Khi đương số bước vào đại hạn hoặc tiểu hạn có Dưỡng đi kèm sao
bệnh tật nặng, bệnh tình thường dai dẳng và khó chữa. Đương số dễ phải
điều trị dài ngày, thậm chí nằm viện.

Đặc biệt nếu hạn rơi vào cung Tật Ách, bệnh tình càng dai dẳng và khó
dứt; năm đó đương số cần quan tâm chú ý cẩn thận về sức khỏe nhiều hơn
bình thường.`,
  },
];
