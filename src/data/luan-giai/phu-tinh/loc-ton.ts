import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO LỘC TỒN - Bắc Đẩu Tinh, Tài Tinh / Quý Tinh
 * (Đầu vòng Lộc Tồn, đồng cung với Bác Sĩ, luôn bị Kình Đà giáp 2 bên)
 */
export const luanGiai_LocTon: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung sao Lộc Tồn
  // ============================================================
  {
    id: 'loc-ton-tinh-chat-chung',
    title: 'Lộc Tồn - Đặc tính chung',
    sao: ['Lộc Tồn'],
    doUuTien: 30,
    tomTat: `**Lộc Tồn** còn được gọi là Thiên Lộc, thuộc Bắc Đẩu Tinh, ngũ hành Âm
Thổ, hóa khí Quý Tinh. Sao này chủ về tước lộc trời cho, lộc vua ban — biểu
trưng cho may mắn, tài lộc, phúc thọ.

Đặc tính nổi bật của Lộc Tồn nằm ở bốn chữ: quyền tước, tài lộc, phúc thọ và
cô đơn.

Khác với Hóa Lộc vốn chủ động và nhanh nhạy do đương số mưu cầu mà có, Lộc
Tồn là lộc trời ban nên mang tính bị động. Lộc đến với chủ mệnh thường khó
nắm giữ, đa phần xuất phát từ may mắn, từ những cơ hội bất ngờ và thường tới
muộn màng.`,

    chiTiet: `## Vai trò trong vòng Lộc Tồn

Lộc Tồn đứng đầu vòng Lộc Tồn, luôn đồng cung với sao Bác Sĩ và nằm trong
tam hợp Bác Sĩ - Lộc Tồn - Tướng Quân - Quốc Ấn. Bộ tam hợp này chủ về quyền
tước, tài lộc, phúc thọ, văn chương, học hành — ai cũng mong có được ở Mệnh,
Tài hay Quan.

## Đặc trưng "lộc trời ban"

Vì là lộc trời cho, lộc vua ban, để bảo vệ khỏi kẻ không xứng đáng, Lộc Tồn
luôn có hai sát tinh bao bọc bên cạnh:

- Kình Dương ví như con voi chầu đứng phía trên
- Đà La ví như con hổ quỳ nằm phía dưới

Chính sự đối ứng này khiến Lộc Tồn mang tính cô độc, vì luôn bị Kình Đà đánh
phá hai bên, không cho ai xâm phạm. Đồng thời Kình Đà cũng đóng vai trò thử
thách: chỉ những người xứng đáng mới vượt qua được và được mời tiến tới Lộc
Tồn.

## Nguồn tài lộc

Tài lộc của Lộc Tồn thường đến từ hai nguồn chính:

- Di sản tổ phụ để lại, nhiều khi truyền nối hai ba đời
- Người khác biếu xén, quà tặng — tức lộc ăn được người ban tặng`,
  },

  // ============================================================
  // 2. Tam hợp Lộc Tồn cần kết hợp tam hợp Thái Tuế (cụ Thiên Lương)
  // ============================================================
  {
    id: 'loc-ton-tam-hop-thai-tue',
    title: 'Lộc Tồn cần kết hợp tam hợp Thái Tuế (cụ Thiên Lương)',
    sao: ['Lộc Tồn'],
    ketHop: ['Thái Tuế', 'Quan Phù', 'Bạch Hổ'],
    doUuTien: 60,
    tomTat: `Theo cụ Thiên Lương, Lộc Tồn nằm trong tam hợp Mệnh - Tài - Quan
chưa hẳn đã đủ để đương số hưởng trọn lộc trời cho.

Cần đắc thêm tam hợp Thái Tuế - Quan Phù - Bạch Hổ — tam hợp của bậc chính
nhân quân tử — thì mới có thể hưởng thụ trọn vẹn lộc trời ban. Thành quả chỉ
đến với người xứng đáng.

Tuổi hợp nhất là thiên can Giáp, Ất, Canh, Tân, đồng thời địa chi đứng trong
tam hợp Lộc Tồn: chủ mệnh khi đó mới được hưởng trọn vẹn niềm vui và may
mắn.`,
  },

  // ============================================================
  // 3. Kình Đà giáp Lộc Tồn - tính cô độc
  // ============================================================
  {
    id: 'loc-ton-kinh-da-giap',
    title: 'Kình Đà giáp Lộc Tồn - Tính cô độc bẩm sinh',
    sao: ['Lộc Tồn'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 55,
    tomTat: `Lộc Tồn LUÔN bị Kình Dương và Đà La giáp hai bên — đây là quy luật
an sao, không thể tránh khỏi.

Hệ quả tổng quát là dù Lộc Tồn ở vị trí nào, hai cung kế bên đều bị Kình Đà
đánh phá, mang theo cô độc và cản trở. Lộc Tồn dù tốt đến đâu cũng kèm theo
thử thách và sự cô đơn bẩm sinh.`,
  },

  // ============================================================
  // 4. Lộc Tồn tại Mệnh
  // ============================================================
  {
    id: 'loc-ton-tai-menh',
    title: 'Lộc Tồn tại Mệnh',
    sao: ['Lộc Tồn'],
    cung: ['Mệnh'],
    doUuTien: 82,
    tomTat: `Khi Lộc Tồn thủ Mệnh, đương số mang dáng vẻ trầm tĩnh, thận trọng,
duyên muộn nhưng có của để dành — càng về hậu vận càng vững vàng.

Về tướng mạo, chủ mệnh thường có thân hình đầy đặn vuông vắn, phong thái
đĩnh đạc từ tốn. Tính cách thông minh, học rộng, có tài tổ chức, sáng kiến,
đứng đắn, nhân hậu, lòng từ thiện cao. Do hành Thổ chi phối nên đương số ôn
hòa, điềm đạm, ít nói, không hấp tấp, đôi khi hơi bị động.

Trong chi tiêu, đương số cẩn thận, biết tính toán dành dụm — nhờ vậy mà nên
giàu.

Đặc trưng cô độc cũng hiện rõ: vì Kình Đà giáp Mệnh, tuổi thơ chủ mệnh
thường cô đơn, xa cách cha mẹ và anh em, phải tự lập từ sớm.`,

    chiTiet: `## Công danh tài lộc

Lộc Tồn là phú tinh, chủ về sự dư dả tiền bạc; công danh chỉ là thứ yếu. Sự
giàu có của đương số thường biểu hiện qua hai nguyên nhân chính:

- Di sản tổ phụ để lại — Lộc Tồn ở Mệnh hoặc Phúc bao giờ cũng được hưởng
  tài sản tổ phụ, nhiều khi truyền nối hai ba đời
- Người khác biếu xén, quà tặng — lộc ăn được người ban tặng, hỗ trợ

Khi Lộc Tồn hội cùng các sao tài tinh, chủ mệnh hết sức phát đạt:

- Chính tinh: Tử Vi, Vũ Khúc, Thiên Phủ, Thái Âm đắc địa
- Phụ tinh: Thiên Mã, Tràng Sinh, Lâm Quan, Đế Vượng, Hóa Lộc, Long Trì,
  Phượng Các, Tả Phù, Hữu Bật, Ân Quang, Thiên Quý, Thiên Quan, Thiên Phúc

## Sự nghiệp

Con đường sự nghiệp của đương số chậm rãi, chắc chắn, bền vững — không có
đột phá bộc phát. Những lĩnh vực phù hợp gồm tài chính, ngân hàng, kế toán,
luật pháp, nghiên cứu, thủ quỹ, quản lý kho tàng.

Vì Kình Đà giáp Mệnh, con đường công danh luôn có cạnh tranh, đố kỵ, thị
phi ngấm ngầm — chủ mệnh phải nỗ lực và kiên trì rất nhiều mới chạm đến
thành công.

## Hôn nhân

Đường tình duyên của đương số đến muộn do tính cách khép kín và cẩn trọng.
Hôn nhân tuy đến chậm nhưng ổn định, vợ chồng biết chia sẻ và giúp đỡ nhau.

Lộc Tồn còn có khả năng chế ngự được sao đào hoa, dâm tinh, nhờ đó giảm
sóng gió và phiền nhiễu trong tình cảm.

## Phúc thọ - sức khỏe

Đương số ít bệnh tật nghiêm trọng, có ốm đau cũng mau qua khỏi. Sao Lộc Tồn
chế ngự được tất cả sao chủ dâm đãng, đào hoa, lả lơi. Chủ mệnh được hưởng
của tiền nhân hoặc hay gặp quý nhân giúp đỡ; nếu không có sát bại tinh đánh
phá thì vinh hiển, sống lâu.`,
  },

  // ----- Sub-rules tách từ Lộc Tồn tại Mệnh -----
  {
    id: 'loc-ton-tai-menh-co-qua',
    sao: ['Lộc Tồn'],
    cung: ['Mệnh'],
    ketHop: ['Cô Thần', 'Quả Tú'],
    doUuTien: 77,
    tomTat: `Khi Lộc Tồn tại Mệnh đi cùng Cô Thần hoặc Quả Tú, tính tiết kiệm vốn có của đương số biến thành ki bo, keo kiệt, bủn xỉn.`,
  },
  {
    id: 'loc-ton-tai-menh-dau-quan',
    sao: ['Lộc Tồn'],
    cung: ['Mệnh'],
    ketHop: ['Đẩu Quân'],
    doUuTien: 77,
    tomTat: `Khi Lộc Tồn tại Mệnh đi cùng Đẩu Quân, tính tiết kiệm vốn có của đương số biến thành ki bo, keo kiệt, bủn xỉn.`,
  },
  {
    id: 'loc-ton-tai-menh-vu-khuc',
    sao: ['Lộc Tồn'],
    cung: ['Mệnh'],
    ketHop: ['Vũ Khúc'],
    doUuTien: 77,
    tomTat: `Khi Lộc Tồn tại Mệnh đi cùng Vũ Khúc, tính tiết kiệm vốn có của đương số biến thành ki bo, keo kiệt, bủn xỉn.`,
  },

  // ============================================================
  // 5. Lộc Tồn + Bác Sĩ tại Mệnh - cách cục đặc biệt
  // ============================================================
  {
    id: 'loc-ton-bac-si-tai-menh',
    title: 'Lộc Tồn + Bác Sĩ thủ Mệnh - Tài chính kết hợp trí tuệ',
    sao: ['Lộc Tồn', 'Bác Sĩ'],
    cung: ['Mệnh'],
    ketHop: ['Bác Sĩ'],
    doUuTien: 85,
    tomTat: `Lộc Tồn luôn đồng cung với Bác Sĩ — khi cả hai cùng thủ Mệnh, đương
số sở hữu sự hợp nhất giữa "của cải" và "trí tuệ". Đây là mẫu người vừa có
tài chính, vừa có học thức, biết dùng trí tuệ để quản lý và phát triển tài
sản.

Đây là bộ sao của người có cuộc sống no ấm, đủ đầy, bền vững và gặp nhiều
may mắn.

Sự đồng cung của Bác Sĩ làm tăng:

- Khả năng suy xét vấn đề thấu đáo
- Khả năng hóa giải bệnh tật, tai ách
- Sự thông minh và học rộng`,
  },

  // ============================================================
  // 6. Lộc Tồn tại Phụ Mẫu
  // ============================================================
  {
    id: 'loc-ton-tai-phu-mau',
    title: 'Lộc Tồn tại Phụ Mẫu',
    sao: ['Lộc Tồn'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Khi Lộc Tồn cư Phụ Mẫu, cha mẹ đương số có của, có tài sản, hoặc
có nghề nghiệp truyền lại cho con cái. Cha mẹ là người điềm đạm, cẩn thận,
hay làm từ thiện, được nhiều may mắn và dễ gây dựng được của tiền.

Tuy nhiên có một điểm quan trọng cần lưu ý: do cấu trúc giáp Kình Đà, đương
số mặc định bị Đà La tọa thủ đối ứng, ngăn chặn sự tiến tới Lộc Tồn. Vì thế
chủ mệnh dễ phải tự gây dựng và khó hưởng được gia sản mẹ cha để lại.

Nếu Đà La hãm địa, bản thân đương số sinh ra dễ ốm đau, có dị tật.

Khi cung này hội nhiều cát tinh, cha mẹ là người có chức quyền, làm chủ,
làm sếp, có ấn có dấu, được hưởng nhiều bổng lộc.`,
  },
  {
    id: 'loc-ton-tai-phu-mau-sat-tinh',
    sao: ['Lộc Tồn'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Khi Lộc Tồn tại Phụ Mẫu hội thêm sát tinh, cha mẹ tính tình nóng nảy, hay khắc khẩu, dễ gặp nạn liên quan đến mổ xẻ, bệnh tật. Đương số phải tự lập từ sớm, đôi khi liên lụy bởi nghiệp duyên cha mẹ.`,
  },

  // ============================================================
  // 7. Lộc Tồn tại Phúc Đức
  // ============================================================
  {
    id: 'loc-ton-tai-phuc-duc',
    title: 'Lộc Tồn tại Phúc Đức',
    sao: ['Lộc Tồn'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `Khi Lộc Tồn cư Phúc Đức, đương số được tăng tuổi thọ, hưởng phúc
và may mắn. Gia đình bên nhà chồng hay nhà vợ thường giàu có, có công danh
sự nghiệp cao.

Đặc trưng dòng họ thể hiện qua mấy nét sau:

- Trong dòng họ dễ có người độc đinh, có người mồ côi, có người mãi không
  chịu lấy vợ hay lấy chồng
- Nhiều người trong họ có điều kiện và kinh tế tốt nhưng ít giúp đỡ nhau,
  mỗi người mỗi phương
- Bản thân chủ mệnh và cha mẹ ít được hưởng của cải tổ tiên do cấu trúc
  Kình Đà giáp các cung gia sản kế bên`,
  },
  {
    id: 'loc-ton-tai-phuc-duc-cat-tinh',
    sao: ['Lộc Tồn'],
    cung: ['Phúc Đức'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 73,
    tomTat: `Khi Lộc Tồn tại Phúc Đức hội thêm bộ Lục Cát, dòng họ đương số biết gìn giữ truyền thống, mồ mả tổ tiên được chăm lo, con cháu thuận lợi trưởng thành.`,
  },
  {
    id: 'loc-ton-tai-phuc-duc-khong-kiep-ky-tuan-triet',
    sao: ['Lộc Tồn'],
    cung: ['Phúc Đức'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Hóa Kỵ', 'Tuần', 'Triệt'],
    doUuTien: 73,
    tomTat: `Khi Lộc Tồn tại Phúc Đức gặp Địa Không, Địa Kiếp, Hóa Kỵ, Tuần hay Triệt, gia tộc đương số ly tán, đời sau phải tự bươn chải, ít được nhờ cậy. Trong họ hàng có người yểu mệnh, tàn tật hoặc chật vật mưu sinh.`,
  },

  // ============================================================
  // 8. Lộc Tồn tại Điền Trạch
  // ============================================================
  {
    id: 'loc-ton-tai-dien-trach',
    title: 'Lộc Tồn tại Điền Trạch',
    sao: ['Lộc Tồn'],
    cung: ['Điền Trạch'],
    doUuTien: 78,
    tomTat: `Khi Lộc Tồn cư Điền, đương số là người giữ của bền vững, được hưởng
tài sản hoặc nghề nghiệp do cha mẹ, ông bà để lại — và phải gây dựng thêm
mới giàu.

Chủ mệnh hay gặp may mắn trong chuyện đất cát, nhà cửa và buôn bán bất động
sản. Nơi ở thường là nơi ông cha để lại hoặc được cấp, được trao tặng.

Bên cạnh đó cần lưu ý vài đặc trưng kèm theo:

- Cấu trúc Kình Dương đối ứng cung sự nghiệp khiến công danh không suôn
  sẻ, dễ trắc trở
- Hàng xóm xung quanh có người độc thân, mãi không lấy vợ hay lấy chồng`,
  },
  {
    id: 'loc-ton-tai-dien-trach-khong-kiep-ky-tuan-triet',
    sao: ['Lộc Tồn'],
    cung: ['Điền Trạch'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Hóa Kỵ', 'Tuần', 'Triệt'],
    doUuTien: 73,
    tomTat: `Khi Lộc Tồn tại Điền Trạch gặp Địa Không, Địa Kiếp, Hóa Kỵ, Tuần hay Triệt, đất đai có nhưng khó giữ, nhà cửa phải sửa sang liên tục, dễ vướng tranh chấp và kiện tụng. Đương số phải vất vả mới bảo toàn được tài sản.`,
  },

  // ============================================================
  // 9. Lộc Tồn tại Quan Lộc
  // ============================================================
  {
    id: 'loc-ton-tai-quan-loc',
    title: 'Lộc Tồn tại Quan Lộc',
    sao: ['Lộc Tồn'],
    cung: ['Quan Lộc'],
    doUuTien: 80,
    tomTat: `Khi Lộc Tồn cư Quan, đương số là người có danh vọng, chức vụ và
tiền bạc, hay được may mắn và bổng lộc trong công việc. Phong cách làm việc
tỉ mỉ, cẩn thận, kĩ càng.

Những nghề phù hợp gồm tài chính, kế toán, ngân hàng, thủ quỹ, kho bạc, hậu
cần — chủ mệnh nắm vai trò "tay hòm chìa khóa" mà khó ai thay thế được.

Một đặc trưng cần ghi nhớ: công danh không có ngay, đương số phải bền bỉ từ
từ mới lên cao và đạt được nhiều thành tựu lớn.`,
  },
  {
    id: 'loc-ton-tai-quan-loc-tu-vi',
    sao: ['Lộc Tồn'],
    cung: ['Quan Lộc'],
    ketHop: ['Tử Vi'],
    doUuTien: 75,
    tomTat: `Khi Lộc Tồn tại Quan Lộc đi cùng Tử Vi, đương số có công danh hiển đạt, tuy chậm mà chắc.`,
  },
  {
    id: 'loc-ton-tai-quan-loc-thien-phu',
    sao: ['Lộc Tồn'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Phủ'],
    doUuTien: 75,
    tomTat: `Khi Lộc Tồn tại Quan Lộc đi cùng Thiên Phủ, đương số có công danh hiển đạt, tuy chậm mà chắc.`,
  },
  {
    id: 'loc-ton-tai-quan-loc-thai-am',
    sao: ['Lộc Tồn'],
    cung: ['Quan Lộc'],
    ketHop: ['Thái Âm'],
    doUuTien: 75,
    tomTat: `Khi Lộc Tồn tại Quan Lộc đi cùng Thái Âm miếu vượng, đương số có công danh hiển đạt, tuy chậm mà chắc.`,
  },
  {
    id: 'loc-ton-tai-quan-loc-hoa-loc',
    sao: ['Lộc Tồn'],
    cung: ['Quan Lộc'],
    ketHop: ['Hóa Lộc'],
    doUuTien: 75,
    tomTat: `Khi Lộc Tồn tại Quan Lộc đi cùng Hóa Lộc, đương số có công danh hiển đạt, tuy chậm mà chắc.`,
  },
  {
    id: 'loc-ton-tai-quan-loc-thien-ma',
    sao: ['Lộc Tồn'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Mã'],
    doUuTien: 75,
    tomTat: `Khi Lộc Tồn tại Quan Lộc đi cùng Thiên Mã, đương số có công danh hiển đạt, tuy chậm mà chắc.`,
  },
  {
    id: 'loc-ton-tai-quan-loc-ta-huu',
    sao: ['Lộc Tồn'],
    cung: ['Quan Lộc'],
    ketHop: ['Tả Phù', 'Hữu Bật'],
    doUuTien: 75,
    tomTat: `Khi Lộc Tồn tại Quan Lộc đi cùng Tả Phù hoặc Hữu Bật, đương số có công danh hiển đạt, tuy chậm mà chắc.`,
  },
  {
    id: 'loc-ton-tai-quan-loc-khoi-viet',
    sao: ['Lộc Tồn'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Khôi', 'Thiên Việt'],
    doUuTien: 75,
    tomTat: `Khi Lộc Tồn tại Quan Lộc đi cùng Thiên Khôi hoặc Thiên Việt, đương số có công danh hiển đạt, tuy chậm mà chắc.`,
  },
  {
    id: 'loc-ton-tai-quan-loc-long-phuong',
    sao: ['Lộc Tồn'],
    cung: ['Quan Lộc'],
    ketHop: ['Long Trì', 'Phượng Các'],
    doUuTien: 75,
    tomTat: `Khi Lộc Tồn tại Quan Lộc đi cùng Long Trì hoặc Phượng Các, đương số có công danh hiển đạt, tuy chậm mà chắc.`,
  },
  {
    id: 'loc-ton-tai-quan-loc-quang-quy',
    sao: ['Lộc Tồn'],
    cung: ['Quan Lộc'],
    ketHop: ['Ân Quang', 'Thiên Quý'],
    doUuTien: 75,
    tomTat: `Khi Lộc Tồn tại Quan Lộc đi cùng Ân Quang hoặc Thiên Quý, đương số có công danh hiển đạt, tuy chậm mà chắc.`,
  },
  {
    id: 'loc-ton-tai-quan-loc-khong-kiep-ky-tuan-triet',
    sao: ['Lộc Tồn'],
    cung: ['Quan Lộc'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Hóa Kỵ', 'Tuần', 'Triệt'],
    doUuTien: 75,
    tomTat: `Khi Lộc Tồn tại Quan Lộc gặp Địa Không, Địa Kiếp, Hóa Kỵ, Tuần hay Triệt, công danh sự nghiệp của đương số không bền, hay có tai họa, thu nhập bấp bênh, chức vụ khó giữ và dễ gặp họa liên quan đến tiền bạc.`,
  },

  // ============================================================
  // 10. Lộc Tồn tại Nô Bộc
  // ============================================================
  {
    id: 'loc-ton-tai-no-boc',
    title: 'Lộc Tồn tại Nô Bộc',
    sao: ['Lộc Tồn'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Khi Lộc Tồn cư Nô, bạn bè của đương số giỏi giang nhưng hơi ít.

Chủ mệnh hay được bạn bè, đồng nghiệp, cấp dưới mời đi ăn, đi chơi; có duyên
hợp tác, giúp đỡ và dễ được biếu xén, tặng quà.

Càng về già, đương số càng hay quen được bạn tốt, bạn giỏi.`,
  },
  {
    id: 'loc-ton-tai-no-boc-khong-kiep-ky-tuan-triet',
    sao: ['Lộc Tồn'],
    cung: ['Nô Bộc'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Hóa Kỵ', 'Tuần', 'Triệt'],
    doUuTien: 70,
    tomTat: `Khi Lộc Tồn tại Nô Bộc gặp Địa Không, Địa Kiếp, Hóa Kỵ, Tuần hay Triệt, mối quan hệ của đương số rơi vào cảnh "bằng mặt mà không bằng lòng". Bạn bè phản trắc, cộng sự lừa lọc, thậm chí rước họa vào thân, kéo theo kiện tụng hoặc tranh chấp.`,
  },

  // ============================================================
  // 11. Lộc Tồn tại Thiên Di
  // ============================================================
  {
    id: 'loc-ton-tai-thien-di',
    title: 'Lộc Tồn tại Thiên Di',
    sao: ['Lộc Tồn'],
    cung: ['Thiên Di'],
    doUuTien: 78,
    tomTat: `Khi Lộc Tồn cư Di, đương số ra ngoài dễ kiếm tiền và gặp may mắn.

Chủ mệnh thường đi một mình, luôn cẩn thận, từ tốn, nhẹ nhàng. Hay được mời
đi ăn, đi uống, được tặng quà — nhìn chung là rất may mắn.`,
  },
  {
    id: 'loc-ton-tai-thien-di-tu-vi',
    sao: ['Lộc Tồn'],
    cung: ['Thiên Di'],
    ketHop: ['Tử Vi'],
    doUuTien: 73,
    tomTat: `Khi Lộc Tồn tại Thiên Di đi cùng Tử Vi, đương số ra ngõ dễ gặp quý nhân, càng đi xa càng có cơ hội đổi đời.`,
  },
  {
    id: 'loc-ton-tai-thien-di-thai-am',
    sao: ['Lộc Tồn'],
    cung: ['Thiên Di'],
    ketHop: ['Thái Âm'],
    doUuTien: 73,
    tomTat: `Khi Lộc Tồn tại Thiên Di đi cùng Thái Âm đắc địa, đương số ra ngõ dễ gặp quý nhân, càng đi xa càng có cơ hội đổi đời.`,
  },
  {
    id: 'loc-ton-tai-thien-di-hoa-loc',
    sao: ['Lộc Tồn'],
    cung: ['Thiên Di'],
    ketHop: ['Hóa Lộc'],
    doUuTien: 73,
    tomTat: `Khi Lộc Tồn tại Thiên Di đi cùng Hóa Lộc, đương số ra ngõ dễ gặp quý nhân, càng đi xa càng có cơ hội đổi đời.`,
  },
  {
    id: 'loc-ton-tai-thien-di-ta-huu',
    sao: ['Lộc Tồn'],
    cung: ['Thiên Di'],
    ketHop: ['Tả Phù', 'Hữu Bật'],
    doUuTien: 73,
    tomTat: `Khi Lộc Tồn tại Thiên Di đi cùng Tả Phù hoặc Hữu Bật, đương số ra ngõ dễ gặp quý nhân, càng đi xa càng có cơ hội đổi đời.`,
  },
  {
    id: 'loc-ton-tai-thien-di-khoi-viet',
    sao: ['Lộc Tồn'],
    cung: ['Thiên Di'],
    ketHop: ['Thiên Khôi', 'Thiên Việt'],
    doUuTien: 73,
    tomTat: `Khi Lộc Tồn tại Thiên Di đi cùng Thiên Khôi hoặc Thiên Việt, đương số ra ngõ dễ gặp quý nhân, càng đi xa càng có cơ hội đổi đời.`,
  },
  {
    id: 'loc-ton-tai-thien-di-khong-kiep-ky-tuan-triet',
    sao: ['Lộc Tồn'],
    cung: ['Thiên Di'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Hóa Kỵ', 'Tuần', 'Triệt'],
    doUuTien: 73,
    tomTat: `Khi Lộc Tồn tại Thiên Di gặp Địa Không, Địa Kiếp, Hóa Kỵ, Tuần hay Triệt, đương số rơi vào cảnh "lộc chưa tới đã tan", tiền bạc khó giữ, gặp người xấu làm hỏng chuyện. Có lúc tưởng được lộc nhưng "lợi bất cập hại" — vướng vào rắc rối pháp lý, thị phi hoặc bị người quen lợi dụng.`,
  },

  // ============================================================
  // 12. Lộc Tồn tại Tật Ách
  // ============================================================
  {
    id: 'loc-ton-tai-tat-ach',
    title: 'Lộc Tồn tại Tật Ách',
    sao: ['Lộc Tồn'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `Khi Lộc Tồn cư Tật, đương số ít bệnh tật và có khả năng giải trừ
tai ách. Lộc Tồn thuộc Thổ nên các bệnh nếu có thường liên quan tới lục phủ
ngũ tạng, gan mật, hệ tiêu hóa, nội tạng.

Đặc trưng giải hạn của cung này biểu hiện qua nhiều nét đặc biệt:

- Khi tai họa, bệnh tật ập đến, đương số giải trừ bằng tiền — mất tiền
  chữa bệnh, bỏ tiền ra bồi thường, dùng tiền để giải quyết sự việc
- Ngày chết được nhiều tiền phúng viếng
- Hay được tiền khi xảy ra tai nạn, thảm họa xung quanh — ví dụ bán khẩu
  trang đúng mùa covid thì tự dưng giàu to

Tuy nhiên nếu kiếm tiền thất đức, "gieo gió gặt bão", tiền chưa tới tay đã
hóa thành họa, đương số dễ mắc bệnh khó chữa.`,
  },
  {
    id: 'loc-ton-tai-tat-ach-sat-tinh',
    sao: ['Lộc Tồn'],
    cung: ['Tật Ách'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Thiên Hình', 'Thiên Riêu', 'Hóa Kỵ', 'Linh Tinh', 'Hỏa Tinh'],
    doUuTien: 73,
    tomTat: `Khi Lộc Tồn tại Tật Ách gặp Địa Không, Địa Kiếp, Thiên Hình, Thiên Riêu, Hóa Kỵ, Linh Tinh hay Hỏa Tinh, đương số gặp nhiều tai nạn hoặc mang ám tật.`,
  },

  // ============================================================
  // 13. Lộc Tồn tại Tài Bạch
  // ============================================================
  {
    id: 'loc-ton-tai-tai-bach',
    title: 'Lộc Tồn tại Tài Bạch',
    sao: ['Lộc Tồn'],
    cung: ['Tài Bạch'],
    doUuTien: 82,
    tomTat: `Khi Lộc Tồn cư Tài, đương số dễ kiếm tiền hoặc hay gặp quý nhân
giúp đỡ, phù hộ — chủ mệnh rất có duyên với tiền bạc.

Chủ mệnh có khả năng kiểm soát chi tiêu tốt, chặt chẽ; làm các ngành nghề
liên quan đến tài chính rất tốt.

Về sau, đương số dễ được ông bà, cha mẹ để lại tiền của, giữ lại được và
tiếp tục phát huy thêm.`,
  },
  {
    id: 'loc-ton-tai-tai-bach-tu-vi',
    sao: ['Lộc Tồn'],
    cung: ['Tài Bạch'],
    ketHop: ['Tử Vi'],
    doUuTien: 77,
    tomTat: `Khi Lộc Tồn tại Tài Bạch đi cùng Tử Vi, đương số đạt cảnh "lộc bất tận hưởng", càng về sau càng hưng vượng, ít khi sa sút.`,
  },
  {
    id: 'loc-ton-tai-tai-bach-thien-phu',
    sao: ['Lộc Tồn'],
    cung: ['Tài Bạch'],
    ketHop: ['Thiên Phủ'],
    doUuTien: 77,
    tomTat: `Khi Lộc Tồn tại Tài Bạch đi cùng Thiên Phủ, đương số đạt cảnh "lộc bất tận hưởng", càng về sau càng hưng vượng, ít khi sa sút.`,
  },
  {
    id: 'loc-ton-tai-tai-bach-vu-khuc',
    sao: ['Lộc Tồn'],
    cung: ['Tài Bạch'],
    ketHop: ['Vũ Khúc'],
    doUuTien: 77,
    tomTat: `Khi Lộc Tồn tại Tài Bạch đi cùng Vũ Khúc, đương số đạt cảnh "lộc bất tận hưởng", càng về sau càng hưng vượng, ít khi sa sút.`,
  },
  {
    id: 'loc-ton-tai-tai-bach-long-phuong',
    sao: ['Lộc Tồn'],
    cung: ['Tài Bạch'],
    ketHop: ['Long Trì', 'Phượng Các'],
    doUuTien: 77,
    tomTat: `Khi Lộc Tồn tại Tài Bạch đi cùng Long Trì hoặc Phượng Các, đương số đạt cảnh "lộc bất tận hưởng", càng về sau càng hưng vượng, ít khi sa sút.`,
  },
  {
    id: 'loc-ton-tai-tai-bach-khong-kiep-ky-thien-khong',
    sao: ['Lộc Tồn'],
    cung: ['Tài Bạch'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Hóa Kỵ', 'Thiên Không'],
    doUuTien: 77,
    tomTat: `Khi Lộc Tồn tại Tài Bạch gặp Địa Không, Địa Kiếp, Hóa Kỵ hay Thiên Không, tiền tài đến dễ và đi cũng dễ. Nhiều trường hợp đương số dính phải lừa đảo, kiện tụng, hoặc hao tán do tham quá hóa liều, đầu cơ sai chỗ.`,
  },

  // ============================================================
  // 14. Lộc Tồn tại Tử Tức
  // ============================================================
  {
    id: 'loc-ton-tai-tu-tuc',
    title: 'Lộc Tồn tại Tử Tức',
    sao: ['Lộc Tồn'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Khi Lộc Tồn cư Tử Tức, đương số dễ chậm con, ít con, và con cái
thường ở xa cha mẹ.

Con cái tuy số lượng ít nhưng chất lượng cao — ngoan, giỏi giang, hiếu thảo.
Vì là "lộc trời ban" nên thường tới muộn.

Cách cục được hóa giải phần nào nếu có Tử Vi, Thiên Phủ hay Thái Âm vượng
địa: con tuy ít nhưng hiếu thuận, có tài có đức; cha mẹ về sau hưởng phúc
nhờ con.`,
  },
  {
    id: 'loc-ton-tai-tu-tuc-sat-tinh',
    sao: ['Lộc Tồn'],
    cung: ['Tử Tức'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Khi Lộc Tồn tại Tử Tức hội thêm sát tinh, đương số dễ phải nhận con nuôi bên ngoài. Có được con cũng ít gần gũi, sống xa nhà hoặc khó dạy bảo.`,
  },

  // ============================================================
  // 15. Lộc Tồn tại Phu Thê
  // ============================================================
  {
    id: 'loc-ton-tai-phu-the',
    title: 'Lộc Tồn tại Phu Thê',
    sao: ['Lộc Tồn'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `Khi Lộc Tồn cư Phu Thê, đương số dễ muộn duyên vợ chồng.

Vợ hay chồng của chủ mệnh là người hiền lành, giỏi giang, có điều kiện kinh
tế tốt — cưới xong thường được một khoản tiền. Đương số thường cưới muộn và
cưới người hơn tuổi mình.

Tình cảm có thể hơi thiếu lửa, thiếu chủ động.`,
  },
  {
    id: 'loc-ton-tai-phu-the-tu-vi',
    sao: ['Lộc Tồn'],
    cung: ['Phu Thê'],
    ketHop: ['Tử Vi'],
    doUuTien: 73,
    tomTat: `Khi Lộc Tồn tại Phu Thê đi cùng Tử Vi, đường hôn nhân của đương số thuận lợi, duyên đến muộn nhưng tình nghĩa sắt son, bền chặt.`,
  },
  {
    id: 'loc-ton-tai-phu-the-thien-phu',
    sao: ['Lộc Tồn'],
    cung: ['Phu Thê'],
    ketHop: ['Thiên Phủ'],
    doUuTien: 73,
    tomTat: `Khi Lộc Tồn tại Phu Thê đi cùng Thiên Phủ, đường hôn nhân của đương số thuận lợi, duyên đến muộn nhưng tình nghĩa sắt son, bền chặt.`,
  },
  {
    id: 'loc-ton-tai-phu-the-thai-am',
    sao: ['Lộc Tồn'],
    cung: ['Phu Thê'],
    ketHop: ['Thái Âm'],
    doUuTien: 73,
    tomTat: `Khi Lộc Tồn tại Phu Thê đi cùng Thái Âm vượng địa, đường hôn nhân của đương số thuận lợi, duyên đến muộn nhưng tình nghĩa sắt son, bền chặt.`,
  },
  {
    id: 'loc-ton-tai-phu-the-hoa-loc',
    sao: ['Lộc Tồn'],
    cung: ['Phu Thê'],
    ketHop: ['Hóa Lộc'],
    doUuTien: 73,
    tomTat: `Khi Lộc Tồn tại Phu Thê đi cùng Hóa Lộc, đường hôn nhân của đương số thuận lợi, duyên đến muộn nhưng tình nghĩa sắt son, bền chặt.`,
  },
  {
    id: 'loc-ton-tai-phu-the-ta-huu',
    sao: ['Lộc Tồn'],
    cung: ['Phu Thê'],
    ketHop: ['Tả Phù', 'Hữu Bật'],
    doUuTien: 73,
    tomTat: `Khi Lộc Tồn tại Phu Thê đi cùng Tả Phù hoặc Hữu Bật, đường hôn nhân của đương số thuận lợi, duyên đến muộn nhưng tình nghĩa sắt son, bền chặt.`,
  },
  {
    id: 'loc-ton-tai-phu-the-sat-tinh',
    sao: ['Lộc Tồn'],
    cung: ['Phu Thê'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 73,
    tomTat: `Khi Lộc Tồn tại Phu Thê có sát tinh hội chiếu, duyên phận của đương số không suôn sẻ, hôn nhân muộn màng hoặc dang dở. Vợ chồng khó tránh cảnh "cơm không lành, canh chẳng ngọt".`,
  },

  // ============================================================
  // 16. Lộc Tồn tại Huynh Đệ
  // ============================================================
  {
    id: 'loc-ton-tai-huynh-de',
    title: 'Lộc Tồn tại Huynh Đệ',
    sao: ['Lộc Tồn'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Khi Lộc Tồn cư Huynh Đệ, đương số có ít anh chị em, thường chênh
tuổi nhau khá nhiều.

Anh chị em là người có điều kiện, hiền lành, thích làm từ thiện.`,
  },
  {
    id: 'loc-ton-tai-huynh-de-cat-tinh',
    sao: ['Lộc Tồn'],
    cung: ['Huynh Đệ'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 70,
    tomTat: `Khi Lộc Tồn tại Huynh Đệ hội thêm bộ Lục Cát, quan hệ anh chị em của đương số khăng khít, đầy phúc khí. Anh em giỏi giang, thương yêu nhau và sẵn sàng tương trợ lúc khó khăn.`,
  },
  {
    id: 'loc-ton-tai-huynh-de-khong-kiep-ky',
    sao: ['Lộc Tồn'],
    cung: ['Huynh Đệ'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `Khi Lộc Tồn tại Huynh Đệ gặp Địa Không, Địa Kiếp hay Hóa Kỵ, anh em của đương số rơi vào cảnh "xa mặt cách lòng", mỗi người mỗi ngả. Cùng máu mủ mà chẳng khác người dưng, thậm chí vì chút lợi nhỏ mà trở mặt.`,
  },

  // ============================================================
  // 17. Lộc Tồn + Hóa Lộc - Song Lộc đại phú
  // ============================================================
  {
    id: 'loc-ton-hoa-loc-song-loc',
    title: 'Lộc Tồn + Hóa Lộc - "Song Lộc" đại phú',
    sao: ['Lộc Tồn', 'Hóa Lộc'],
    ketHop: ['Hóa Lộc'],
    doUuTien: 60,
    tomTat: `Khi Lộc Tồn hội Hóa Lộc, đương số đắc cách **Song Lộc** — sự cộng
hưởng giữa "lộc trời" và "lộc do người tạo ra". Tài lộc đến từ cả hai nguồn,
hình thành cách cục đại phú, tiền bạc vô cùng dồi dào.

Tinh tế ngũ hành cần lưu ý:

- Lộc Tồn thuộc Thổ, Hóa Lộc thuộc Mộc; nếu đồng cung thì hai sao khó tương
  hòa do Mộc khắc Thổ — biểu hiện qua tính chuyên quyền, độc đoán, chế hóa
  về tiền bạc
- Tốt nhất là Hóa Lộc CHIẾU chứ không đồng cung — khi đó cách cục mới đẹp
  trọn vẹn

Khi vào hạn, nếu Lộc Tồn và Hóa Lộc cùng nhập hạn đồng cung thì sự tốt đẹp
bị chiết giảm.`,
  },

  // ============================================================
  // 18. Lộc Tồn + Thiên Mã - Lộc Mã giao trì
  // ============================================================
  {
    id: 'loc-ton-thien-ma-loc-ma-giao-tri',
    title: 'Lộc Tồn + Thiên Mã - "Lộc Mã giao trì"',
    sao: ['Lộc Tồn', 'Thiên Mã'],
    ketHop: ['Thiên Mã'],
    doUuTien: 65,
    tomTat: `Khi Lộc Tồn hội Thiên Mã, đương số đắc cách **Lộc Mã giao trì** —
một trong những cách cục đẹp nhất về tiền tài. Lộc tượng trưng cho tiền của,
Mã tượng trưng cho sự dịch chuyển và cơ hội.

Đây là cách cục của doanh nhân thành đạt: tiền bạc lưu thông, càng đi xa
càng phát tài, mưu sự gì cũng dễ thành công.

Khi vào hạn, mưu sự toại lòng, danh tài hưng vượng đồng thời.`,
  },

  // ============================================================
  // 19. Lộc Tồn + Tuần / Triệt / Phá - kho rỗng
  // ============================================================
  {
    id: 'loc-ton-tuan-triet-pha',
    title: 'Lộc Tồn + Tuần / Triệt / Phá Toái - Kho rỗng',
    sao: ['Lộc Tồn'],
    ketHop: ['Tuần', 'Triệt', 'Phá Toái'],
    doUuTien: 60,
    tomTat: `Khi Lộc Tồn gặp một trong các sao Tuần, Triệt hoặc Phá Toái, gần
như toàn bộ hiệu lực tài chính của Lộc Tồn bị hóa giải. Như kho lộc bị rỗng
không, không còn được bảo vệ bao bọc.

Hệ quả thường thấy:

- Tiền bạc khó tụ, chi tiêu không hợp lý
- May mắn suy giảm, cuộc sống vất vả hơn
- Tài vận trắc trở, dễ thất thoát`,
  },

  // ============================================================
  // 20. Lộc Tồn + Không Kiếp - Lộc phùng Không Kiếp
  // ============================================================
  {
    id: 'loc-ton-khong-kiep',
    title: 'Lộc Tồn + Không Kiếp - "Lộc phùng Không Kiếp"',
    sao: ['Lộc Tồn'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 62,
    tomTat: `Khi Lộc Tồn gặp Địa Không hoặc Địa Kiếp, đương số rơi vào cách
**Lộc phùng Không Kiếp** — kho tàng vốn có của Lộc Tồn hóa thành kho rỗng
do Không Kiếp.

Hệ quả thường thấy:

- Kiếm tiền được một thời gian ngắn rồi phá sản mau lẹ và khủng khiếp
- Bị tai họa về tiền bạc
- Thành công đến nhanh nhưng sụp đổ trong chớp mắt
- Đau yếu, mắc lừa, của tiền khó bền lâu

Khi vào hạn, Lộc Tồn gặp Không Kiếp khiến đương số đau yếu, mắc lừa, của
tiền khó bền.

Lời khuyên cho chủ mệnh là tuyệt đối tránh xa các hình thức đầu tư rủi ro
cao. Con đường làm giàu bền vững nhất là tích lũy và phát triển dựa trên
nền tảng sẵn có.`,
  },

  // ============================================================
  // 21. Lộc Tồn + Hóa Kỵ + Thái Tuế - hao tán
  // ============================================================
  {
    id: 'loc-ton-hoa-ky-thai-tue',
    title: 'Lộc Tồn + Hóa Kỵ + Thái Tuế - Có tiền nhưng hao tán',
    sao: ['Lộc Tồn'],
    ketHop: ['Hóa Kỵ', 'Thái Tuế'],
    doUuTien: 60,
    tomTat: `Khi Lộc Tồn hội cả Hóa Kỵ và Thái Tuế, đương số có tiền nhưng bị
hao tán, bị ăn chặn, bị dị nghị. Trường hợp điển hình là tham nhũng, hối lộ
rồi bị tai tiếng.

Chủ mệnh có tiền nhưng dễ dính vào thị phi, tranh chấp, hoặc kiếm tiền bằng
những con đường không minh bạch gây tai tiếng.`,
  },

  // ============================================================
  // 22. Lộc Tồn + Thiên Không - tham nhũng hà tiện
  // ============================================================
  {
    id: 'loc-ton-thien-khong',
    title: 'Lộc Tồn + Thiên Không - Tham nhũng, hà tiện',
    sao: ['Lộc Tồn'],
    ketHop: ['Thiên Không'],
    doUuTien: 58,
    tomTat: `Khi Lộc Tồn hội Thiên Không, đương số ăn tham nhũng hối lộ, bị thị
phi, bị chúng ghét, sống ích kỷ và hà tiện.

Tài sản kiếm được bao nhiêu cũng khó giữ. Vận số phát tài mà Lộc Tồn mang
đến chỉ là tạm thời, sau đó sẽ bị Thiên Không phá tan vào thời điểm bất ngờ
nhất.`,
  },

  // ============================================================
  // 23. Lộc Tồn + Cự Môn - ngọc che ám
  // ============================================================
  {
    id: 'loc-ton-cu-mon',
    title: 'Lộc Tồn + Cự Môn - Ánh sáng bị che khuất',
    sao: ['Lộc Tồn'],
    ketHop: ['Cự Môn'],
    doUuTien: 58,
    tomTat: `Khi Lộc Tồn hội Cự Môn, sức sáng của Lộc Tồn bị phá rất nhiều.

Lộc Tồn vốn đã chậm trễ, muộn màng; khi đi cùng Cự Môn lại khiến Cự Môn
luôn đóng vai trò ám tinh, khó có khi nào lộ được ánh sáng của viên ngọc
ra ngoài.

Ánh sáng của tài lộc bị che khuất, mọi nỗ lực của đương số dễ rơi vào muộn
màng, trễ nải; tài năng khó được nhìn nhận đúng lúc.`,
  },

  // ============================================================
  // 24. Lộc Tồn vào hạn
  // ============================================================
  {
    id: 'loc-ton-vao-han',
    title: 'Lộc Tồn vào hạn',
    sao: ['Lộc Tồn'],
    doUuTien: 50,
    tomTat: `Khi hạn có sao Lộc Tồn, mọi sự của đương số hanh thông, danh tài
hưng vượng, được nhiều may mắn — đặc biệt là về của tiền.

Tổ hợp đẹp khi vào hạn:

- Lộc Tồn cùng Hóa Lộc: đại phát đại tài (Hóa Lộc CHIẾU mới thật tốt đẹp;
  nếu đồng cung thì sự tốt đẹp bị chiết giảm)
- Lộc Tồn cùng Thiên Mã thành cách **Lộc Mã giao trì**: mưu sự toại lòng,
  danh tài hưng vượng

Tổ hợp xấu khi vào hạn:

- Lộc Tồn gặp Không Kiếp: đau yếu, mắc lừa, của tiền khó bền lâu`,
  },

  // ============================================================
  // 25. Lời khuyên cho người Lộc Tồn thủ Mệnh
  // ============================================================
  {
    id: 'loc-ton-loi-khuyen',
    title: 'Lời khuyên cho người Lộc Tồn thủ Mệnh',
    sao: ['Lộc Tồn'],
    cung: ['Mệnh'],
    doUuTien: 70,
    tomTat: `Một vài lời khuyên dành cho đương số có Lộc Tồn thủ Mệnh:

1. Cởi mở hơn trong giao tiếp, chủ động xây dựng quan hệ xã hội để hóa giải
sự cô độc bẩm sinh do Kình Đà giáp Mệnh.

2. Chấp nhận đố kỵ và cạnh tranh là một phần không tránh khỏi. Giữ vững tâm
thế, hành xử chính trực sẽ giúp chủ mệnh vượt qua sóng gió.

3. Khi gặp Không Kiếp, tuyệt đối tránh xa các hình thức đầu tư rủi ro cao.
Con đường làm giàu bền vững nhất là tích lũy và phát triển trên nền tảng
sẵn có.

4. Bản chất Lộc Tồn là thiện lương: dùng tài lộc làm việc thiện, giúp đỡ
người khác — vừa tích phúc đức vừa hóa giải bất lợi.

5. Vận trình của đương số chậm nhưng chắc, ít rơi vào trắng tay hay phá
sản. Nếu kết hợp được sự thận trọng bẩm sinh với tư duy mở, dám đầu tư
đúng lúc, không quá dè dặt, chủ mệnh sẽ xây dựng được nền móng phúc lộc
cho cả gia đình và con cháu.`,
  },
];
