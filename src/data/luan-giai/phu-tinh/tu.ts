import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO TỬ - Thủy, Bại Tinh.
 *
 * KHÁC HOÀN TOÀN với chính tinh TỬ VI! Tag riêng là 'Tử' (không phải 'Tử Vi').
 *
 * Vị trí THỨ 8 trong Vòng Trường Sinh 12 sao:
 * Trường Sinh: Mộc Dục: Quan Đới: Lâm Quan: Đế Vượng: Suy
 * Bệnh: TỬ: Mộ: Tuyệt: Thai: Dưỡng
 *
 * An theo CỤC.
 *
 * Đặc trưng:
 * - Sau giai đoạn "Bệnh": tới giai đoạn CHẾT
 * - Đa sầu đa cảm, kín đáo, bi quan
 * - Gắn với SỰ MẤT MÁT, SUY TÀN, TANG THƯƠNG
 * - Sự CHẤM DỨT chu kỳ sống
 * - CHE GIẤU sự hung bạo của sát tinh
 * - HẠN CHẾ phúc lộc của cát tinh
 * - Tính chất KÍN ĐÁO, BÍ MẬT, BÊN TRONG
 */
export const luanGiai_Tu: DoanLuanGiai[] = [
  {
    id: 'tu-tinh-chat-chung',
    title: 'Tử - Đặc tính chung',
    sao: ['Tử'],
    doUuTien: 33,
    tomTat: `**Tử** là phụ tinh thuộc bại tinh, đứng ở vị trí thứ 8 trong vòng
Trường Sinh, ngũ hành Thủy. Cần lưu ý sao Tử này hoàn toàn khác chính tinh
Tử Vi — đây chỉ là một sao trong vòng Trường Sinh.

Về bản chất, Tử mang tính đa sầu đa cảm, thâm trầm kín đáo, thiếu động lực
sống và gắn liền với sự mất mát, suy tàn, tang thương. Đây là giai đoạn
chấm dứt của một chu kỳ sống.

Tử có vai trò hai mặt rất đặc biệt: che giấu sự hung bạo của sát tinh, đồng
thời hạn chế phúc lộc mà cát tinh mang lại. Nói cách khác, đi cùng cát tinh
thì giảm bớt phần tốt, đi cùng sát tinh thì giảm bớt phần xấu.

Về tâm tính, đương số có sao Tử thường mang bản tính u sầu, diện mạo không
tươi sáng, thân hình nhỏ nhắn và kém phát triển. Nội tâm phức tạp, ít bộc
lộ cảm xúc thật, luôn suy nghĩ kín đáo và không để lộ ra ngoài.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP XẤU
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'tu-kinh-da-ky-hung-bao',
    title: 'Tử + Kình Đà + Hóa Kỵ - Hung bạo cãi vã',
    sao: ['Tử'],
    ketHop: ['Kình Dương', 'Đà La', 'Hóa Kỵ'],
    doUuTien: 60,
    tomTat: `Khi Tử hội cùng Kình Dương, Đà La và Hóa Kỵ, tính cách đương số
trở nên hung bạo, dễ nóng nảy và thường rơi vào cảnh bất đồng tranh cãi.
Đương số khó kiểm soát được cảm xúc của mình. Tử đi cùng sát tinh càng bộc
lộ rõ những tính cực đoan vốn có của sao này.`,
  },

  {
    id: 'tu-phi-liem-ma-tang-ho-khoc-hoa-linh-tang-thuong',
    title: 'Tử + Phi Liêm + Mã + Tang + Hổ + Khốc + Hỏa + Linh - Họ hàng tang thương',
    sao: ['Tử'],
    ketHop: ['Phi Liêm', 'Thiên Mã', 'Tang Môn', 'Bạch Hổ', 'Thiên Khốc', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 60,
    tomTat: `Khi Tử hội đủ Phi Liêm, Thiên Mã, Tang Môn, Bạch Hổ, Thiên Khốc,
Hỏa Tinh và Linh Tinh, họ hàng đương số dễ gặp tai họa tang thương. Trong
họ có nhiều người mất sớm, tang sự liên miên không dứt.

Bộ này tập trung tất cả các sao mang ý nghĩa tang tóc, mai táng và khóc
than, nên khi vào hạn càng trở nên đặc biệt nguy hiểm.`,
  },

  {
    id: 'tu-thai-phu-phuc-binh-phong-cao-thuong-binh-liet-si',
    title: 'Tử + Thai Phụ + Phục Binh + Phong Cáo tại Phúc - Thương binh liệt sĩ',
    sao: ['Tử'],
    cung: ['Phúc Đức'],
    ketHop: ['Thai Phụ', 'Phục Binh', 'Phong Cáo'],
    doUuTien: 60,
    tomTat: `Khi Tử hội cùng Thai Phụ, Phục Binh và Phong Cáo tại Phúc Đức,
trong họ hàng đương số có người hy sinh vì nghĩa lớn — thương binh, liệt sĩ
hy sinh trên chiến trường.

Phong Cáo cùng Thai Phụ chủ về phong tước hậu sự, Phục Binh chỉ thân phận
quân nhân, còn Tử biểu thị sự ra đi. Ba sao phối hợp cùng Tử kết thành
cách hy sinh vinh danh.`,
  },

  {
    id: 'tu-dau-quan-tai-dien-tan-tien',
    title: 'Tử + Đẩu Quân tại Tài / Điền - Chi li tằn tiện có của để dành',
    sao: ['Tử'],
    cung: ['Tài Bạch', 'Điền Trạch'],
    ketHop: ['Đẩu Quân'],
    doUuTien: 55,
    tomTat: `Khi Tử gặp Đẩu Quân tại Tài Bạch hoặc Điền Trạch, đương số sống
chi li tằn tiện, tính toán đến từng đồng. Nhờ đức tính ấy mà có của để
dành, đặc biệt thiên về tích trữ tài sản. Tuy vậy, đôi khi đương số bị
người ngoài đánh giá là hà tiện.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // TỬ TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'tu-tai-menh',
    title: 'Tử tại Mệnh',
    sao: ['Tử'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Khi Tử thủ Mệnh, đương số là người sâu sắc kín đáo nhưng hay u
sầu bi quan. Diện mạo thường không tươi sáng, thân hình nhỏ nhắn và kém
phát triển.

Về tính cách, đương số mang nội tâm phức tạp, ít bộc lộ cảm xúc thật, luôn
suy nghĩ kín đáo và không để lộ ra ngoài. Bao trùm lên tất cả là nét u sầu
bi quan khó che giấu.

Trên đường công danh, đương số phải trải qua nhiều khó khăn, ít gặp may
mắn. Sự nghiệp dễ gắn với những nghề liên quan tới bí mật, kín đáo, tâm
linh hay tang lễ. Nếu chọn các công việc khác, đương số ít được trọng dụng
và sự nghiệp thường bấp bênh.

Tình duyên cũng trắc trở. Người hôn phối kín tiếng, chi tiêu tiết kiệm,
gia đạo dễ rơi vào cảnh lạnh nhạt. Bản thân đương số biết tiết kiệm, thậm
chí keo kiệt; cách kiếm tiền có nguy cơ không minh bạch hoặc phi pháp.

Về phúc thọ, sao Tử làm giảm phúc thọ, đương số ít hưởng phước phần tổ
tiên và dễ gặp tang thương sầu thảm.

Để hóa giải, đương số cần "tu nhân tích đức" — gieo nhân lành để gặt quả
thiện.`,
  },

  {
    id: 'tu-tai-phu-mau',
    title: 'Tử tại Phụ Mẫu',
    sao: ['Tử'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Khi Tử cư Phụ Mẫu và đi cùng sát tinh như Hỏa Tinh, Linh Tinh,
Thiên Hình, Kiếp Sát, Cô Thần, Quả Tú, sức khỏe của cha mẹ thường yếu, dễ
đau ốm.

Người trong gia đình kín tiếng, sống thầm lặng, ít giao lưu như "người
dưng nước lã". Nhân duyên giữa đương số với cha mẹ không quá gắn bó, không
hòa hợp và khó thấu hiểu lẫn nhau.`,
  },

  {
    id: 'tu-tai-phuc-duc',
    title: 'Tử tại Phúc Đức',
    sao: ['Tử'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `Khi Tử cư Phúc Đức, dòng họ đương số ít phúc phần, người thân
kín tiếng và không quan tâm nhau. Mồ mả tổ tiên thường bị bỏ bê, không
được chăm sóc cẩn thận.

Nếu hội thêm Địa Không hoặc Địa Kiếp, đương số không được hưởng phúc tổ
tiên, phải làm việc thiện để bồi dưỡng phúc phần thì mới có khả năng cải
thiện vận mệnh.

Trường hợp đặc biệt, khi Tử hội cùng Thai Phụ, Phục Binh và Phong Cáo,
trong họ hàng có người hy sinh vì nghĩa lớn, là thương binh hoặc liệt sĩ.`,
  },

  {
    id: 'tu-tai-dien-trach',
    title: 'Tử tại Điền Trạch',
    sao: ['Tử'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Khi Tử cư Điền Trạch, nhà cửa của đương số thường nằm ở ngõ
hẻm sâu kín, khó tìm. Bù lại, đương số biết tiết kiệm và giữ của tốt, tính
toán chi li, ít khi phung phí.

Nếu Tử đi cùng nhiều ám sát tinh như Thiên Riêu, Đà La, Hóa Kỵ, Cô Thần,
Quả Tú hay Tang Môn, nhà của đương số gần nơi có trường khí năng lượng
xấu, phong thủy âm u và không tốt cho sức khỏe.`,
  },

  {
    id: 'tu-tai-quan-loc',
    title: 'Tử tại Quan Lộc',
    sao: ['Tử'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `Khi Tử cư Quan Lộc, đương số hợp với những công việc đòi hỏi
sự kín kẽ, bí mật, hoặc liên quan đến tang lễ và tâm linh. Đó thường là
những chuyên môn sâu kín, ít người biết tới.

Nếu Tử đi cùng các ám tinh như Thiên Riêu, Đà La hoặc Hóa Kỵ, công danh
trắc trở, ít gặp may mắn và khó phát triển.

Nếu đương số không theo các lĩnh vực đặc thù kể trên, sự nghiệp dễ rơi
vào cảnh lận đận, ít được cấp trên trọng dụng.`,
  },

  {
    id: 'tu-tai-no-boc',
    title: 'Tử tại Nô Bộc',
    sao: ['Tử'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Khi Tử cư Nô Bộc, đương số có ít bạn bè và đồng nghiệp. Những
mối quan hệ xã hội thường không chân thành, khó gắn bó lâu dài.

Khi gặp hoạn nạn, đương số không nhận được nhiều sự giúp đỡ và chủ yếu
phải "tự lực cánh sinh".`,
  },

  {
    id: 'tu-tai-thien-di',
    title: 'Tử tại Thiên Di',
    sao: ['Tử'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `Khi Tử cư Thiên Di, đương số ít ra ngoài, ngại giao tiếp, không
mấy quan tâm đến mọi người xung quanh.

Nếu hội cùng Quả Tú, Cô Thần hay Đẩu Quân, mỗi lần xuất hành đương số càng
trở nên kín kẽ và khó hòa nhập. Công việc xa quê hay làm ăn nơi đất khách
thường gặp nhiều khó khăn.`,
  },

  {
    id: 'tu-tai-tat-ach',
    title: 'Tử tại Tật Ách',
    sao: ['Tử'],
    cung: ['Tật Ách'],
    doUuTien: 80,
    tomTat: `Khi Tử cư Tật Ách, đương số dễ mắc những căn bệnh khó phát
hiện, bệnh tích tụ bên trong cơ thể, hoặc các chứng liên quan đến tâm linh.

Nếu Tử đi cùng nhiều ám sát tinh, bệnh càng nặng và khó chữa dứt điểm.

Tình trạng này chỉ có khả năng được hóa giải khi Tử gặp Triệt.`,
  },

  {
    id: 'tu-tai-tai-bach',
    title: 'Tử tại Tài Bạch',
    sao: ['Tử'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `Khi Tử cư Tài Bạch, việc kiếm tiền của đương số thường không
minh bạch.

Nếu gặp nhiều sát bại tinh, đương số dễ đi theo con đường phi pháp hoặc
trốn thuế.

Bù lại, đương số biết tiết kiệm — đôi khi đến mức bị người ngoài xem là
chi li, hà tiện. Khi Tử đi cùng Hóa Kỵ và Đẩu Quân, tính chi li cùng cách
kiếm tiền không minh bạch lại càng ứng nghiệm rõ.`,
  },

  {
    id: 'tu-tai-tu-tuc',
    title: 'Tử tại Tử Tức',
    sao: ['Tử'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Khi Tử cư Tử Tức, đường con cái của đương số ít và khó nuôi.

Nếu Tử kết hợp cùng Đẩu Quân, Thiên Hình, Kình Dương hoặc Song Hao, số
lượng con cái giảm; đương số khó sinh hoặc dễ sẩy thai.

Con cái sinh ra thường khó nuôi, không nghe lời cha mẹ và có nguy cơ bệnh
tật. Hậu vận đương số càng vất vả vì con, khó có được sự an nhàn.`,
  },

  {
    id: 'tu-tai-phu-the',
    title: 'Tử tại Phu Thê',
    sao: ['Tử'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `Khi Tử cư Phu Thê, hôn nhân của đương số không hòa thuận, dễ
gặp trắc trở và bất hòa. Người phối ngẫu kín tiếng, trầm lặng, chi tiêu
tiết kiệm.

Nếu hội thêm sát bại tinh, nhân duyên càng mong manh, nguy cơ đổ vỡ cao
và sức khỏe của cả hai bị ảnh hưởng nghiêm trọng.`,
  },

  {
    id: 'tu-tai-huynh-de',
    title: 'Tử tại Huynh Đệ',
    sao: ['Tử'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Khi Tử cư Huynh Đệ, đương số có ít anh chị em, trong đó dễ có
người đau ốm. Anh em sống khép kín, ít quan tâm lẫn nhau.

Nếu hội thêm sát tinh, gia đạo càng dễ chia lìa, anh em có nguy cơ xung
khắc hoặc mất sớm.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // HÓA GIẢI SAO TỬ
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'tu-hoa-giai',
    title: 'Hóa giải sao Tử',
    sao: ['Tử'],
    doUuTien: 40,
    tomTat: `Để hóa giải sao Tử, khi gặp hạn đương số cần nghỉ ngơi đầy đủ,
khám sức khỏe định kỳ, thực hành thiền và yoga, áp dụng các kỹ thuật giảm
căng thẳng.

Về tinh thần, đương số nên học cách nhìn đời lạc quan, mở lòng kết nối
với mọi người xung quanh.

Trong sự nghiệp, hãy giữ thái độ cẩn trọng, không quyết định vội vàng,
tập trung ổn định công việc hiện tại và tránh những bước đi mạo hiểm.

Quan trọng nhất là tu tâm tích đức: làm nhiều việc tốt, giúp đỡ người khác
để tăng phước phần. Nhờ đó, đương số dễ được quý nhân giúp đỡ khi gặp
khó khăn.`,
  },
];
