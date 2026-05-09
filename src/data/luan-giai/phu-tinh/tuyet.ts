import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO TUYỆT - Thổ, Hung Tinh.
 *
 * Vị trí THỨ 10 trong Vòng Trường Sinh 12 sao:
 * Trường Sinh: Mộc Dục: Quan Đới: Lâm Quan: Đế Vượng: Suy
 * Bệnh: Tử: Mộ: TUYỆT: Thai: Dưỡng
 *
 * An theo CỤC.
 *
 * Đặc trưng:
 * - Sau "Mộ": giai đoạn THÂN XÁC TAN BIẾN VÀO ĐẤT
 * - Đại diện cho SỰ BẾ TẮC, CHẤM DỨT, TIÊU DIỆT
 * - Là điểm dừng - dấu chấm hết của một giai đoạn
 * - Đồng thời là sự CHUẨN BỊ CHO TÁI SINH ở kiếp sau
 * - Đặc biệt: KÌM HÃM sức phá hoại của sát tinh đồng cung
 * : tai họa chỉ dừng ở mức SUY TÍNH, chưa phát tác thành hiện thực
 * - Tính kín kẽ, đa mưu túc trí, sống nội tâm
 */
export const luanGiai_Tuyet: DoanLuanGiai[] = [
  {
    id: 'tuyet-tinh-chat-chung',
    title: 'Tuyệt - Đặc tính chung',
    sao: ['Tuyệt'],
    doUuTien: 33,
    tomTat: `**Tuyệt** là phụ tinh thuộc hung tinh, đứng ở vị trí thứ 10 trong
vòng Trường Sinh, ngũ hành Thổ.

Bản chất Tuyệt mang đặc tính bế tắc, phá hoại và tiêu diệt — chấm dứt và
suy tàn. Sau giai đoạn "Mộ", thân xác tan biến vào đất; đây là dấu chấm
hết của một giai đoạn.

Tuyệt có vai trò hai mặt rất đặc biệt. Bản thân là hung tinh chủ về bế
tắc và suy tàn, nhưng đồng thời lại kìm hãm sức phá hoại của sát tinh
đồng cung — khiến tai họa chỉ dừng ở mức suy tính, chưa phát tác thành
hiện thực. Sao này vừa u tối bế tắc lại vừa ẩn chứa sự khôn ngoan, kín
đáo.

Về tâm tính, đương số có sao Tuyệt mang dáng dấp kín đáo, gầy khô và
thiếu sức sống, thần thái trầm mặc, ít bộc lộ cảm xúc, da có phần tối màu.
Đương số khôn ngoan, kín kẽ, đa mưu túc trí, sống nội tâm và thiên về toan
tính hơn là hành động bộc phát.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP XẤU
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'tuyet-thien-ma-tuan-triet-ngua-cung-duong',
    title: 'Tuyệt + Thiên Mã + Tuần Triệt - Ngựa cùng đường',
    sao: ['Tuyệt'],
    ketHop: ['Thiên Mã'],
    doUuTien: 60,
    tomTat: `Khi Tuyệt hội cùng Thiên Mã có thêm Tuần hoặc Triệt, lá số tạo
thành cảnh "ngựa cùng đường". Công việc bế tắc, đương số dễ gặp tiểu nhân
quấy phá, đồng nghiệp chống đối và bị người trên kìm hãm. Cơ hội thăng
tiến thường đến rồi vụt mất; nỗ lực nhiều mà khó đạt thành tựu.

Đây là cách điển hình cho Tuyệt Mã có thêm Tuần Triệt chế thêm — ngựa kéo
xe gặp đường tuyệt rồi bị chặn — cảnh ngộ tuyệt vọng.`,
  },

  {
    id: 'tuyet-sat-pha-tham-tranh-chap',
    title: 'Tuyệt + Thất Sát + Phá Quân + Tham Lang - Tranh chấp kiện tụng',
    sao: ['Tuyệt'],
    ketHop: ['Thất Sát', 'Phá Quân', 'Tham Lang'],
    doUuTien: 60,
    tomTat: `Khi Tuyệt hội cùng Thất Sát, Phá Quân và Tham Lang, vận số
đương số tiềm ẩn hiểm họa bất ngờ. Tai họa thường không lộ rõ từ đầu mà
âm ỉ ngấm ngầm, đến lúc bộc phát mới gây hậu quả nặng nề.

Hệ quả thường thấy là tranh chấp pháp lý, kiện tụng, mất mát tài sản và
tai nạn bất ngờ. Sát Phá Tham vốn là bộ võ tinh hành động, nay có Tuyệt
đi cùng làm tăng tính phá hoại bí ẩn của bộ này.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // TUYỆT TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'tuyet-tai-menh',
    title: 'Tuyệt tại Mệnh',
    sao: ['Tuyệt'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Khi Tuyệt thủ Mệnh, đương số là người kín kẽ, đa mưu túc trí
nhưng công việc khó hanh thông.

Về tướng mạo, đương số mang dáng dấp kín đáo, gầy khô và thiếu sức sống,
thần thái trầm mặc, ít bộc lộ cảm xúc, da có phần tối màu.

Về tính cách, đương số khôn ngoan, kín kẽ, đa mưu túc trí, sống nội tâm
và thiên về toan tính suy nghĩ nhiều hơn là hành động bộc phát. Đây là
biểu hiện rõ nét của sự khô cạn, tiêu tán mà sao Tuyệt chủ quản.

Trong sự nghiệp, công việc của đương số khó hanh thông, dễ gặp trở ngại
và chậm tiến triển.

Đặc tính hai mặt khi đi cùng sát tinh đáng được nhấn mạnh: Tuyệt có khả
năng kìm hãm sức phá hoại của sát tinh, khiến tai họa chỉ dừng ở mức suy
tính chứ chưa phát tác thành hiện thực. Đương số tuy nóng tính và nhiều
mưu mô nhưng vẫn kiểm soát được mình, không để cho những tật xấu hay thủ
đoạn bộc lộ ra ngoài. Nhờ vậy, đương số trở thành người rất giỏi, khó ai
qua mắt.`,
  },

  {
    id: 'tuyet-tai-phu-mau',
    title: 'Tuyệt tại Phụ Mẫu',
    sao: ['Tuyệt'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Khi Tuyệt cư Phụ Mẫu, cha mẹ đương số vất vả, kín đáo và dè
dặt. Sức khỏe của cha mẹ dễ suy giảm; con đường công danh sự nghiệp gặp
nhiều trắc trở, phải trải qua gian khó mới gây dựng được gia đình. Tính
tình cha mẹ kín đáo, dè dặt, ít chia sẻ và không hanh thông trong quan
hệ xã hội.

Khi kết hợp với tài tinh, cha mẹ chịu khó tiết kiệm, tích lũy, biết lo
cho con cái và giữ gìn gia sản. Dù vậy, cuộc đời vẫn nhiều gian lao và
ít được an nhàn.`,
  },

  {
    id: 'tuyet-tai-phuc-duc',
    title: 'Tuyệt tại Phúc Đức',
    sao: ['Tuyệt'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `Khi Tuyệt cư Phúc Đức, phúc phần tổ tiên kém, mồ mả dòng họ
không yên, khó tụ phúc cho con cháu hưởng. Đương số ít được che chở, dễ
phải ly hương lập nghiệp và tự gây dựng lại phước đức cho chính mình.
Trong dòng họ có nhiều người nghèo khó, ốm đau bệnh tật và không giữ
được hương khói tổ tiên.

Khi hội Tuần Triệt hoặc nhiều sát bại tinh, mồ mả càng dễ thất lạc, nằm
ở nơi địa thế xấu, nhiều xung xạ. Đương số khó bền thọ, dễ gặp tai họa
bất ngờ hoặc biến cố ngoài ý muốn.`,
  },

  {
    id: 'tuyet-tai-dien-trach',
    title: 'Tuyệt tại Điền Trạch',
    sao: ['Tuyệt'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Khi Tuyệt cư Điền Trạch, sao này gây trở ngại cho việc tạo
dựng và duy trì tài sản; nhà cửa, đất đai khó duy trì lâu dài. Nơi sinh
sống và chỗ làm việc dễ rơi vào tình thế bất lợi: nhà ở ngõ hẻm, đường
cụt, tối tăm, ít người qua lại; cuộc sống thiếu sinh khí, mang cảm giác
cô quạnh.

Khi hợp với cát tinh như Hóa Lộc, Lục Cát Tinh, Thái Âm, Thiên Phủ hay
Lộc Tồn, đương số vẫn có khả năng tạo dựng cơ ngơi vững vàng. Tài sản
thường được giữ kín theo xu hướng "tiền chôn của giấu", hoặc để người khác
đứng tên — ít ai biết thực lực thật. Việc tích lũy âm thầm ấy vừa là thế
mạnh tránh thị phi, vừa là một hạn chế.`,
  },

  {
    id: 'tuyet-tai-quan-loc',
    title: 'Tuyệt tại Quan Lộc',
    sao: ['Tuyệt'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `Khi Tuyệt cư Quan Lộc, con đường công danh của đương số gặp
nhiều phiền nhiễu và khó khăn; công việc tiến triển chậm, dễ bị cản trở
giữa chừng và rơi vào tình trạng "dậm chân tại chỗ".

Mặt tích cực nằm ở tính bí mật của Tuyệt: đương số hợp với các nghề đòi
hỏi sự kín đáo và bảo mật cao như điều tra, an ninh, nghiên cứu khoa học
chuyên sâu hay những công việc đứng sau hậu trường.

Khi hội cát tinh như Thiên Khôi, Thiên Việt, Ân Quang hay Thiên Quý, sự
"ẩn mình" trở thành thế mạnh; chuyên tâm làm việc, đương số đạt được
thành tựu nhất định.`,
  },

  {
    id: 'tuyet-tai-no-boc',
    title: 'Tuyệt tại Nô Bộc',
    sao: ['Tuyệt'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Khi Tuyệt cư Nô Bộc, số lượng bạn bè và đồng nghiệp của đương
số giảm sút; đương số khó nhận được sự giúp đỡ, thậm chí dễ rơi vào cảnh
cô độc.

Khi hội Địa Không, Địa Kiếp, Kình Dương hay Đà La, đương số càng dễ bị
bạn bè xa lánh, hoặc bị lợi dụng và đâm sau lưng.

Đặc tính ẩn kín cũng có hai mặt: đương số có những mối quan hệ bí mật,
bạn bè ngầm, sự giúp đỡ đến từ những người không ai biết tới.

Khi hội cát tinh, đương số tuy ít bạn nhưng đều là tri kỷ, luôn âm thầm
giúp đỡ.`,
  },

  {
    id: 'tuyet-tai-thien-di',
    title: 'Tuyệt tại Thiên Di',
    sao: ['Tuyệt'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `Khi Tuyệt cư Thiên Di, đương số ra ngoài xã hội gặp nhiều vất
vả khó khăn; đường giao tế không thuận lợi, dễ bị cản trở và ít gặp may
mắn trong các quan hệ bên ngoài. Đương số phải đối mặt với cô đơn, rơi
vào cảnh "tự lực cánh sinh".

Về tính cách, đương số kín kẽ, lầm lì, ít cởi mở nên khó hòa nhập với
môi trường mới.

Khi hội nhiều cát tinh, sự kín đáo và kiên nhẫn lại giúp đương số đạt
thành tựu trong những môi trường đòi hỏi bí mật và thận trọng.`,
  },

  {
    id: 'tuyet-tai-tat-ach',
    title: 'Tuyệt tại Tật Ách',
    sao: ['Tuyệt'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `Khi Tuyệt cư Tật Ách, đặc tính hai mặt thể hiện rõ. Mặc dù là
hung tinh nhưng Tuyệt làm giảm trừ sự phát tác của bệnh tật: bệnh tiến
triển chậm, ít khi dữ dội đột ngột.

Mặt trái nằm ở tính ẩn kín: vì ẩn kín nên khó chẩn đoán, dễ kéo dài và
gây hao mòn sức khỏe.

Khi hội nhiều sát bại tinh như Địa Không, Địa Kiếp, Kình Dương, Đà La,
Linh Tinh hay Hỏa Tinh, bệnh càng trở nên nguy hiểm — chuyển sang mãn
tính hoặc di truyền.`,
  },

  {
    id: 'tuyet-tai-tai-bach',
    title: 'Tuyệt tại Tài Bạch',
    sao: ['Tuyệt'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `Khi Tuyệt cư Tài Bạch, đương số có xu hướng giấu tiền và lập
quỹ riêng. Nguồn thu nhập thường bí mật, ít người biết; phương thức kiếm
tiền đôi khi không minh bạch và dễ liên quan đến hoạt động kín đáo, khó
công khai.

Bản chất Tuyệt hạn chế dòng chảy tài chính nên tiền bạc khó phát triển
mạnh, dễ bế tắc hoặc dừng lại.

Khi hội sát bại tinh như Kình Dương, Đà La, Linh Tinh hay Hỏa Tinh, tiền
tài càng tiêu tán, đương số khó giữ của và hay vướng kiện tụng, thị phi
về tài chính.`,
  },

  {
    id: 'tuyet-tai-tu-tuc',
    title: 'Tuyệt tại Tử Tức',
    sao: ['Tuyệt'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Khi Tuyệt cư Tử Tức, đường con cái của đương số gián đoạn —
không thuận lợi, số lượng ít hơn so với mong muốn, con cái sinh ra chậm
và muộn. Một số trường hợp con sức khỏe yếu, hay đau ốm; tính tình khép
kín, ít cởi mở; việc nối dõi gián đoạn.

Đáng chú ý, con cái khó phát triển sự nghiệp lớn như cha mẹ; duyên phận
giữa con cái với cha mẹ không gắn bó bền chặt.

Khi kết hợp cát tinh như Lục Cát Tinh, Tứ Đức, Lộc Tồn hay Hóa Lộc, ảnh
hưởng được giảm nhẹ; con tuy không đông nhưng hiếu thuận, chăm lo cho cha
mẹ và có khả năng thành công theo hướng khác truyền thống.`,
  },

  {
    id: 'tuyet-tai-phu-the',
    title: 'Tuyệt tại Phu Thê',
    sao: ['Tuyệt'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `Khi Tuyệt cư Phu Thê, hôn nhân của đương số dễ gặp trở ngại;
nhân duyên vợ chồng không trọn vẹn như mong muốn. Người phối ngẫu trầm
lặng, ít bộc lộ cảm xúc, thiếu sự chia sẻ và quan tâm; đời sống hôn nhân
lạnh nhạt và không gắn kết tinh thần.

Khi hội nhiều sát bại tinh, nguy cơ bất hòa, xa cách và chia ly hiện rõ.

Khi hợp với Hóa Lộc, hôn nhân tuy không nồng nhiệt nhưng bền vững, theo
kiểu "an phận thủ thường"; vợ chồng gắn bó lâu dài nhờ nhẫn nhịn và trách
nhiệm.`,
  },

  {
    id: 'tuyet-tai-huynh-de',
    title: 'Tuyệt tại Huynh Đệ',
    sao: ['Tuyệt'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Khi Tuyệt cư Huynh Đệ, đương số có ít anh chị em, dễ gặp cảnh
xa cách và không gắn bó bền chặt. Anh chị em thường là những người vất
vả, khó phát đạt, đường đời nhiều trắc trở; tính cách kín đáo, ít chia
sẻ; sự gắn kết tình cảm trong gia đình không trọn vẹn.

Riêng cách Tuyệt kết hợp với Thiên Tướng và Đế Vượng tại Huynh Đệ, đương
số dễ có anh chị em dị bào: nếu cung Huynh Đệ ở cung dương thì cùng cha
khác mẹ, ở cung âm thì cùng mẹ khác cha.`,
  },
];
