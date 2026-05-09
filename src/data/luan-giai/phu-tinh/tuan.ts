import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO TUẦN (Tuần Trung Không Vong) - Hỏa, Tùy Tinh.
 *
 * Vị trí:
 * - Đóng GIỮA 2 CUNG (engine: LaSo.tuan = [Chi1, Chi2])
 * - Tính theo Can+Chi năm sinh
 *
 * PHẦN CHUNG CỦA CẶP TUẦN-TRIỆT viết tại file `triet.ts` với tag
 * sao: ['Tuần', 'Triệt'].
 *
 * File này chỉ chứa:
 * - Đặc tính RIÊNG của Tuần
 * - 11 cung của Tuần (đã có cung Mệnh tại phần Tuần Triệt chung ở triet.ts)
 * - Một số bộ kết hợp đặc biệt riêng cho Tuần
 *
 * Đặc trưng RIÊNG của Tuần (so với Triệt):
 * - Tuần = HỎA (em trai dịu hơn Triệt - Kim mạnh bạo)
 * - Tuần như CHIẾC PHANH XE làm chậm dần
 * - Càng VỀ GIÀ càng MẠNH, đeo bám đến SUỐT ĐỜI
 * - Đắc địa Tỵ-Ngọ (tuần Giáp Thân, Giáp Ngọ)
 * - Khi cư cùng cung tài/điền với di sản tổ tiên thì giữ được nhưng
 * khó bán
 */
export const luanGiai_Tuan: DoanLuanGiai[] = [
  {
    id: 'tuan-tinh-chat-rieng',
    title: 'Tuần - Đặc tính riêng (Hỏa, dịu hơn Triệt, mạnh về già)',
    sao: ['Tuần'],
    doUuTien: 33,
    tomTat: `**Tuần** (Tuần Trung Không Vong) là phụ tinh tùy tinh, ngũ hành Hỏa,
thuộc bộ Tứ Không.

Đặc tính riêng của Tuần là sự chậm chạp, cản trở, trống rỗng và hao hụt; mang
đến những trắc trở dai dẳng, khiến đương số xoay trở chậm chạp.

Vai trò của Tuần thể hiện hai mặt rõ rệt:

- Khi gặp sát bại tinh, Tuần giúp ngăn chặn ảnh hưởng xấu.
- Tuy nhiên Tuần cũng đồng thời làm suy giảm sức mạnh của các cát tinh đi
  cùng.

So với Triệt thuộc Kim mang tính mạnh bạo, dữ dội như bức tường chắn ngang,
Tuần thuộc Hỏa nên dịu hơn, đóng vai trò như chiếc phanh xe làm chậm dần.

Về hiệu lực theo thời gian, Tuần ngày càng mạnh mẽ hơn, đeo bám đương số đến
suốt cuộc đời — càng về già càng mạnh, ngược với Triệt vốn mạnh ở tuổi trẻ.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // TUẦN TẠI 11 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'tuan-tai-menh',
    title: 'Tuần tại Mệnh - Tuổi thơ vất vả, lầm lì',
    sao: ['Tuần'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Khi **Tuần** thủ Mệnh, đương số có tuổi thơ vất vả, không được "ăn
sung mặc sướng", phải bôn ba lo nghĩ nhiều ở giai đoạn đầu đời — đúng câu
"Tuần Triệt niên đầu, thiếu niên tân khổ".

Về tính tình, đương số lầm lì ít nói, mọi buồn phiền và kế hoạch đều cất giữ
kín trong lòng, không dễ bộc lộ ra ngoài.

Trên đường sự nghiệp, nhân duyên và tài lộc đều gian nan trắc trở. Đương số
lúc nhỏ gặp khó khăn trong việc học hành; nếu không được hóa giải thì những
cản trở này vẫn đeo bám khi lớn lên.

Mặt "bảo hộ" của Tuần thể hiện rõ khi sao tọa cung có nhiều sát bại tinh như
Hỏa Tinh, Linh Tinh, Kình Dương, Đà La, Hóa Kỵ, Kiếp Sát — Tuần giữ vai trò
kìm hãm, không cho tính chất xấu bộc phát.

Lời khuyên là đương số nên chủ động làm việc thiện, rèn luyện giao tiếp và
chú trọng sức khỏe tinh thần để giảm bớt tính u sầu, cô lập.`,
  },

  {
    id: 'tuan-tai-phu-mau',
    title: 'Tuần tại Phụ Mẫu',
    sao: ['Tuần'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Khi Tuần tọa Phụ Mẫu, cha mẹ của đương số có cuộc sống vất vả,
sức khỏe yếu. Mối quan hệ giữa cha mẹ và con cái không gắn kết, ít sự chia
sẻ.

Tuần cư Phụ Mẫu chỉ hạn chế được ảnh hưởng xấu khi cung là Vô Chính Diệu hoặc
có chính tinh hãm địa. Đặc biệt, khi Nhật Nguyệt lạc hãm đồng thời, Tuần có
khả năng ngăn cản tác động xấu, mang lại sự yên ổn — Tuần Triệt đi với Nhật
Nguyệt hãm còn được xem là tăng sáng cho Âm Dương.

Đối với người âm dương thuận lý, tuổi trẻ vẫn thường gặp khó khăn, cản trở
trên con đường học tập và công danh.`,
  },

  {
    id: 'tuan-tai-phuc-duc',
    title: 'Tuần tại Phúc Đức',
    sao: ['Tuần'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `Khi Tuần tọa Phúc Đức, phúc phần tổ tiên không mạnh, đương số khó
được hưởng sẵn phúc của dòng họ. Tuần Không ở cung Phúc chỉ thực sự hữu dụng
khi cung này là Vô Chính Diệu hoặc có chính tinh hãm địa đi cùng.

Lời khuyên là đương số phải tự bồi đắp phúc bằng cái đức và cái tâm của
mình, tu dưỡng tâm linh, làm việc thiện.

Tuần cư Phúc khiến đương số càng lớn càng kém may mắn, ít được tổ tiên phù
trợ — ngược với Triệt vốn càng già càng được hưởng phúc tự bồi.

Khi Tuần đồng thời có mặt ở Phúc và Điền, nhà cửa thường là của tổ tiên để
lại nhưng khó bán được, chỉ sử dụng để ở và thờ cúng tổ tiên.`,
  },

  {
    id: 'tuan-tai-dien-trach',
    title: 'Tuần tại Điền Trạch',
    sao: ['Tuần'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Khi Tuần tọa Điền Trạch, nhà cửa của đương số thường ở cuối ngõ,
cuối hành lang chung cư, được vây quanh bởi tường rào và hàng xóm — vị trí
khó tiếp cận. Đương số làm ra của nhưng phải chật vật.

Khi Tuần cùng có mặt ở Phúc và Điền, đương số không được hưởng di sản tổ phụ
để lại, hoặc nhà của tổ tiên để lại nhưng khó bán, chỉ để ở và thờ cúng.

Khi Tuần đồng thời ở Điền và Quan, công việc có thể tích lũy được của cải
tài sản, nhưng hay bị hao hụt, hao mất một phần; càng về già càng khó tích
tụ.

Đặc điểm chung là đương số gặp khó khăn trong việc thừa hưởng điền sản từ
tổ tiên, thường phải "tự thân vận động" mới mua được nhà.`,
  },

  {
    id: 'tuan-tai-quan-loc',
    title: 'Tuần tại Quan Lộc',
    sao: ['Tuần'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `Khi Tuần tọa Quan Lộc, công danh của đương số lận đận, thăng tiến
chậm. Đương số phải chịu nhiều vất vả mới có được thành tựu; công việc không
thuận lợi, rơi vào cảnh "để thì buồn mà cắt thì đau".

Khi Tuần đi cùng Thiên Tướng hay Triệt, đương số dễ bị sa thải, mất chức
hoặc gặp rắc rối công vụ.

Khi cung Quan Vô Chính Diệu hoặc hội nhiều sát bại tinh như Kình Dương, Đà
La, Hóa Kỵ, Tuần có khả năng giúp giảm nhẹ tai họa, song nguyên tắc chung
vẫn là gây cản trở, chậm trễ.

Khi Tuần đồng thời ở Quan và Nô, công việc của đương số hay liên quan, dính
dáng tới bạn bè đồng nghiệp; đôi khi vì họ mà công danh khó lên cao, hay
gặp sự cố và cản trở.`,
  },

  {
    id: 'tuan-tai-no-boc',
    title: 'Tuần tại Nô Bộc',
    sao: ['Tuần'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Khi Tuần tọa Nô Bộc, bạn bè của đương số ít thân thiết và dễ đổi
thay. Khi hoạn nạn, đương số khó nhận được sự giúp đỡ của bạn bè và đồng
nghiệp. Về già càng ít kết giao, chỉ giữ được vài mối thân tình hiếm hoi.

Đương số ra ngoài ít bạn, chỉ chơi thân với một số ít người; càng về già
càng ít bạn bè bên cạnh.`,
  },

  {
    id: 'tuan-tai-thien-di',
    title: 'Tuần tại Thiên Di',
    sao: ['Tuần'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `Khi Tuần tọa Thiên Di, đương số ít ra ngoài, sống khép kín và khó
hòa nhập trong môi trường mới. Hành trình đi làm ăn xa hay xuất ngoại cũng
gặp trắc trở, nhiều khi phải quay về.

Khi Tuần đồng thời ở Nô và Di, đương số là người ít ra ngoài, ra ngoài cũng
ít quan hệ giao tiếp.

Khi Tuần đứng cùng cung Tật, sao này lại giúp giảm bớt rủi ro, đương số ít
gặp tai vạ.

Mặt khác, đương số đi làm ăn xa thường không thuận lợi, hay gặp cản trở và
tai vạ ở bên ngoài.`,
  },

  {
    id: 'tuan-tai-tat-ach',
    title: 'Tuần tại Tật Ách - Vị trí THUẬN, lá bùa hộ mệnh',
    sao: ['Tuần'],
    cung: ['Tật Ách'],
    doUuTien: 80,
    tomTat: `Khi Tuần tọa Tật Ách, đây là vị trí thuận của Tuần, đóng vai trò
như lá bùa hộ mệnh giúp kìm hãm, ngăn chặn bệnh tật và giảm tai họa cho
đương số.

So với Triệt cư Tật vốn đánh tan bệnh tật và tai họa đi, **Tuần** cư Tật chỉ
ngăn cản, giữ nguyên không cho bệnh tật hay tai họa phát triển và tái phát.
Vì vậy cung Tật vẫn thường ưa Triệt hơn Tuần.

Đặc tính của Tuần ở đây giống "lá bùa hộ mệnh" — giữ bệnh không phát triển
và giúp đương số tránh được biến chứng.

Đương số tuy vậy không được chủ quan, vẫn cần chăm lo sức khỏe và thăm khám
định kỳ.`,
  },

  {
    id: 'tuan-tai-tai-bach',
    title: 'Tuần tại Tài Bạch',
    sao: ['Tuần'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `Khi Tuần tọa Tài Bạch, tiền bạc của đương số trắc trở, đến rồi lại
đi, khó giữ được lâu dài.

Khi hội với Tử Vi, Thiên Phủ, Vũ Khúc, khả năng nắm bắt cơ hội tài chính
càng khó khăn — Phủ phùng Không thành kho rỗng.

Lời khuyên là đương số tránh đầu tư mạo hiểm, ghi nhớ "tham thì thâm" và đặc
biệt cẩn trọng trong việc quản lý chi tiêu.

Khi Tuần đồng thời ở Tài và Tật, đồng tiền kiếm ra chậm và ít, nhưng bù lại
hạn chế được những tai họa, bệnh tật đi cùng.`,
  },

  {
    id: 'tuan-tai-tu-tuc',
    title: 'Tuần tại Tử Tức',
    sao: ['Tuần'],
    cung: ['Tử Tức'],
    doUuTien: 78,
    tomTat: `Khi Tuần tọa Tử Tức, đương số chậm có con, dễ sảy thai, con đầu
khó nuôi hoặc ở xa cha mẹ.

Tuần thủ cung Tử Tức thường khiến đương số chậm trễ trong chuyện con cái và
gặp nhiều vấn đề ngăn trở.

Khi cung Vô Chính Diệu hoặc có chính tinh hãm địa đi cùng sát bại tinh, ảnh
hưởng tiêu cực của Tuần được giảm nhẹ.

Khi gặp Phá Quân, Thất Sát hãm địa đi cùng Địa Không, Địa Kiếp, Hỏa Tinh,
Linh Tinh, Tuần lại trở thành phương tiện cứu cánh tích cực, giúp đương số
tránh được tai họa và xung khắc.

Khi Tuần đồng thời ở Tử và Phối, đương số chậm vợ chậm chồng, nhưng cưới
thường dễ được "cả trâu lẫn nghé".`,
  },

  {
    id: 'tuan-tai-phu-the',
    title: 'Tuần tại Phu Thê',
    sao: ['Tuần'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `Khi Tuần tọa Phu Thê, nhân duyên của đương số trắc trở; mối tình
đầu dễ thất bại, hôn nhân phải trải qua gian nan mới tìm được người phù hợp.

Cách hóa giải là đương số nên lấy người ở xa, khác làng khác tỉnh để giảm
bớt ảnh hưởng xấu. Bạn đời thường là người trầm tính, kín đáo.

Khi Tuần đi cùng Thiên Mã, Thiên Hình hay những sát tinh mạnh khác, đương
số cần cẩn trọng vì dễ phải ly tán, chia xa.`,
  },

  {
    id: 'tuan-tai-huynh-de',
    title: 'Tuần tại Huynh Đệ',
    sao: ['Tuần'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Khi Tuần tọa Huynh Đệ, đương số có ít anh chị em, gia cảnh của họ
lại gặp nhiều vất vả. Anh cả hay chị cả sớm đi xa, hoặc mối quan hệ anh chị
em không thân thiết và dễ xung khắc.

Khi cung Vô Chính Diệu đi cùng Tuần, những ảnh hưởng tiêu cực có khả năng
được giảm bớt — cung Vô Chính Diệu cộng Tuần có khi lại biến thành mỏ neo
vững chắc.`,
  },
];
