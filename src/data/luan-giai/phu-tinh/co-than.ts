import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO CÔ THẦN - Thổ, Ám Tinh.
 *
 * An theo NHÓM 3 CHI của năm sinh (engine).
 *
 * QUY LUẬT BẮT BUỘC:
 * - Cô Thần và Quả Tú LUÔN tam hợp hội chiếu nhau (engine an theo nhóm)
 * - Bộ đôi Cô-Quả không bao giờ tách lẻ
 *
 * Đặc trưng riêng:
 * - "Nam kỵ Cô" — Cô Thần đi với NAM mệnh phát tác mạnh nhất
 * - Cô Thần Phúc Đức = nhà có ÔNG MÃNH linh thiêng (nam mất sớm)
 *
 * Phần CHUNG cặp Cô-Quả đã viết tại file này với
 * sao: ['Cô Thần', 'Quả Tú'].
 */
export const luanGiai_CoThan: DoanLuanGiai[] = [
  {
    id: 'co-than-tinh-chat-chung',
    title: 'Cô Thần - Đặc tính chung',
    sao: ['Cô Thần'],
    doUuTien: 32,
    tomTat: `**Cô Thần** là phụ tinh thuộc nhóm ám tinh, ngũ hành Thổ, an theo
nhóm ba chi của năm sinh. Tên gọi rút gọn thường dùng là "Cô".

Sao này đại diện cho thần cô đơn, mang đặc tính cô độc, lạnh lùng, thu
mình co lại để tự bảo vệ. Đương số có Cô Thần thường ít giao thiệp, có
khuynh hướng lãnh đạo và tư duy độc lập — sống nhiều với chính mình hơn
là với đám đông.

Một số quy luật cơ bản cần nhớ khi đọc Cô Thần:

- Cô Thần luôn tam hợp hội chiếu cùng Quả Tú, hai sao không bao giờ tách
  lẻ.
- Câu "Nam kỵ Cô, Nữ kỵ Quả" cho biết Cô Thần phát tác mạnh nhất với nam
  mệnh, đặc biệt kỵ mẹ và vợ — gây cô độc với phụ nữ trong gia đình.

Về mặt tâm linh, Cô Thần đóng tại Phúc Đức thường ứng với nhà có "ông
Mãnh" linh thiêng phù trì — chỉ người nam trong họ mất sớm khi còn trẻ.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // PHẦN CHUNG CẶP CÔ-QUẢ
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'co-qua-bo-doi-tinh-chat',
    title: 'Bộ Cô-Quả - Đặc tính chung của cặp đôi',
    sao: ['Cô Thần', 'Quả Tú'],
    doUuTien: 60,
    tomTat: `Bộ **Cô Thần - Quả Tú** luôn tam hợp hội chiếu, không bao giờ
tách lẻ. Cặp đôi này chủ về thời gian trầm lắng, cô độc và khép kín; ít
giao du, khó tìm tri âm đồng cảm. Ở cung nào có hai sao này đóng, đương
số đều cảm thấy thiếu thốn tình cảm và ít được quan tâm.

Mặt sáng của bộ Cô - Quả là tinh thần độc lập và sớm trưởng thành. Đương
số biết tự lo, tự chăm sóc bản thân; ở mức độ tích cực, đây có thể là đặc
trưng của vị lãnh đạo hay kẻ đứng đầu — người luôn có cái nhìn khác biệt
với đám đông.

Mặt tối thì rõ nét hơn: đương số luôn thu mình để tự bảo vệ, càng ngày
càng tách biệt và khó chia sẻ. Đôi khi trở thành kẻ lập dị, khác người
mà không ai muốn đến gần.

Câu "Nam kỵ Cô, Nữ kỵ Quả" diễn giải cụ thể:

- Nam mệnh có Cô Thần thì cô độc mạnh nhất, kỵ mẹ kỵ vợ.
- Nữ mệnh có Quả Tú thì cô độc mạnh nhất, kỵ chồng kỵ cha.
- Cả hai đều là yếu tố báo hiệu cảnh góa bụa.

Bộ Cô - Quả nói chung gây hại cho hôn nhân, cầu hôn, đoàn tụ và chuyện
chung sống vợ chồng.`,
  },

  {
    id: 'co-qua-che-dao-hong',
    title: 'Cô-Quả chế Đào Hồng - Phá hỏng nhân duyên',
    sao: ['Cô Thần', 'Quả Tú'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 60,
    tomTat: `Khi Cô Thần - Quả Tú gặp Đào Hoa - Hồng Loan, Thổ chế Mộc nên có
khả năng giảm chế tính đào hoa.

Hai mặt của tổ hợp này khá rõ:

- Mặt tích cực, bộ Cô - Quả hạn chế phát tác đào hoa lăng nhăng, giúp
  đương số giữ được đường nhân duyên ngay ngắn.
- Mặt tiêu cực, đôi khi sự kìm chế đó lại trở thành phá hỏng duyên lành,
  đưa đương số tới cô đơn ngay cả khi nhiều người xung quanh để ý —
  đúng câu "lắm mối tối nằm không".

Cách Hồng - Không - Cô - Quả là cảnh báo nặng nhất, ứng nghiệm tại Dần
của tuổi Sửu hoặc tại Thân của tuổi Mùi. Cô - Quả ở vị trí này phá hỏng
nhân duyên mạnh mẽ, biến duyên thành nghiệp, đưa đương số tới cô độc
và dần hướng về tu hành, mong cầu tỉnh thức.

Để chế giải Cô - Quả có thể trông cậy vào: Thái Âm, Thái Dương, bộ Tam
Minh (Đào Hoa, Hồng Loan, Hỷ Thần) cùng Liêm Trinh hoặc Tham Lang.`,
  },

  {
    id: 'co-qua-tuan-triet-khong-kiep-cao-so',
    title: 'Cô-Quả + Tuần/Triệt + Không Kiếp - Người cao số',
    sao: ['Cô Thần', 'Quả Tú'],
    cung: ['Phu Thê'],
    ketHop: ['Tuần', 'Triệt'],
    doUuTien: 65,
    tomTat: `Khi Cô - Quả đóng tại Phu Thê đi cùng Tuần Triệt và Không Kiếp,
đương số là người cao số, dễ hình khắc chia ly với vợ chồng.

Bộ Hồng Không Cô Quả ở đây gồm Hồng Loan, Thiên Không, Cô Thần và Quả
Tú đầy đủ — cảnh báo "lắm mối tối nằm không". Đương số nên kết hôn muộn
để tránh "đứt gánh giữa đường", nếu không thì cô khắc đến sớm gây đau
thương cho cả hai bên.

Cảnh báo cụ thể:

- Khó chung sống lâu dài.
- Vợ chồng dễ xa nhau một thời gian rất dài.
- Một người làm thì người kia phá, không tìm được tiếng nói chung.

Để hóa giải, đương số nên kết hôn sau tuổi 30, tu thân tích đức và làm
việc thiện. Có thêm sao Phúc thiện đi cùng như Quan Phúc hay Quang Quý
thì cách cục được giảm nhẹ.`,
  },

  {
    id: 'co-qua-cac-sao-che-giai',
    title: 'Các sao chế giải Cô-Quả tại Mệnh',
    sao: ['Cô Thần', 'Quả Tú'],
    cung: ['Mệnh'],
    ketHop: ['Thái Dương'],
    doUuTien: 50,
    tomTat: `Khi Cô Thần - Quả Tú thủ Mệnh, có một nhóm sao đặc biệt có khả
năng chế giải sự cô độc của bộ này.

Nhóm sao chế giải mạnh gồm:

- Thái Âm cùng Thái Dương (Nhật Nguyệt) — ánh sáng xua đi cô độc.
- Bộ Tam Minh là Đào Hoa, Hồng Loan và Hỷ Thần — duyên tình rộn ràng.
- Liêm Trinh ở vai trò đào hoa thứ.
- Tham Lang ở vai trò chính đào hoa.

Khi đương số có Cô - Quả thủ Mệnh kèm các sao trên hội chiếu, cách cục
giảm tác họa rõ rệt: vẫn giữ được tinh thần độc lập vốn có nhưng không
rơi vào cô đơn cực độ. Đương số vẫn có duyên kết bạn và kết hôn bình
thường.

Đặc biệt với nam mệnh, nếu có Cô Thần đi cùng Thái Âm sáng thì hình
ảnh mẹ và vợ cũng sáng theo, giảm rõ rệt nét "kỵ mẹ kỵ vợ" của Cô
Thần.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÔ THẦN TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'co-than-tai-menh',
    title: 'Cô Thần tại Mệnh',
    sao: ['Cô Thần'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `Khi Cô Thần thủ Mệnh, đương số đại diện cho hình ảnh thần cô
đơn, cô độc.

Về tính tình, đương số cô độc, lạnh lùng, có vẻ khó khăn và khó gần;
không thích giao du, giao thiệp với mọi người, sống nội tâm và lúc nào
cũng giữ vẻ cô đơn lạnh lùng không bộc lộ ra ngoài. Tuy vậy, bên trong
vẫn khá năng động — chỉ là không cho người khác thấy.

Đặc trưng tâm lý sâu hơn: cuộc sống dễ gặp vướng mắc và tai họa nên
đương số có xu hướng thu mình để tự bảo vệ. Lâu dần điều này thành thói
quen, khó mở lòng dù muốn.

Quy luật "nam kỵ Cô" phát tác đặc biệt mạnh ở cung Mệnh:

- Đương số nam có Cô Thần thủ Mệnh kỵ mẹ và kỵ vợ.
- Là yếu tố báo hiệu góa bụa, hại cho đường hôn nhân.
- Khó cởi mở và thiếu chủ động trong yêu đương.
- Khó gắn bó lâu dài với một người.

Hướng hóa giải: đương số cần học cách chia sẻ và mở lòng để tránh trượt
xuống vùng cô độc lạc lõng.`,
  },

  {
    id: 'co-than-tai-phu-mau',
    title: 'Cô Thần tại Phụ Mẫu',
    sao: ['Cô Thần'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Khi Cô Thần đóng tại Phụ Mẫu, cha mẹ của đương số là người khắt
khe, khó chịu, khó tính và khó gần.

Đặc điểm cha mẹ: khó hợp tính nhau, mỗi người một ý; bản thân cha mẹ
sống cô độc, cô đơn, hay lầm lũi và làm những công việc đơn lẻ một mình.

Mối quan hệ với con cái cũng phản chiếu nét cô độc đó. Cha mẹ ít bạn bè,
ít quan tâm chia sẻ với con; khi có vấn đề thường tự mình giải quyết, ít
khi nhờ tới ai khác.

Khi cung Phụ Mẫu hội thêm sát bại tinh và Tuần Triệt, nhân duyên cha mẹ
bị giảm sút rõ — cha mẹ ly hôn hoặc không thọ, có khi một bên yểu mệnh.
Đương số sớm phải tự lực cánh sinh và thiếu nương tựa cảm xúc trong
giai đoạn trưởng thành.`,
  },

  {
    id: 'co-than-tai-phuc-duc-ong-manh',
    title: 'Cô Thần tại Phúc Đức - Ông Mãnh linh thiêng',
    sao: ['Cô Thần'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `Khi Cô Thần đóng tại Phúc Đức, dòng họ thiếu đoàn kết, mỗi
người một phương — dù ở gần cũng ít qua lại.

Đặc trưng dòng họ:

- Họ hàng ít người, mỗi người lẻ tẻ một nơi.
- Trong dòng họ nhiều người đàn ông chết sớm.
- Mồ mả mỗi người một nơi, không quy tụ — gọi là "mồ hoang, nầm hoang".
- Trong nhà có người cô độc, góa bụa.
- Có bà cô, ông chú không lấy vợ chồng, ở góa cả đời.

Điểm tâm linh đặc biệt: Cô Thần Phúc Đức ứng với nhà có "ông Mãnh" linh
thiêng — người nam mất sớm khi còn trẻ, sau khi mất trở thành Mãnh phù
trì cho con cháu.

Cách hóa giải gồm chú ý thờ cúng ông Mãnh đầy đủ, tu phúc và làm việc
thiện. Đương số nên kết hôn muộn vì Cô - Quả ở Phúc làm chậm đường
lương duyên, tránh sốt ruột vội vàng.`,
  },

  {
    id: 'co-than-tai-dien-trach',
    title: 'Cô Thần tại Điền Trạch',
    sao: ['Cô Thần'],
    cung: ['Điền Trạch'],
    doUuTien: 76,
    tomTat: `Khi Cô Thần đóng tại Điền Trạch, đương số là người giữ được
nghiệp sản cha ông để lại.

Đương số giữ được nhà cửa, đất đai, ruộng vườn; giỏi chi tiêu và quản
lý tài sản. Số có "tay cầm giữ" về nhà đất nên gia sản vững bền theo
thời gian.

Mặt khác của tính giữ là cách biệt với cộng đồng:

- Ít giao du với hàng xóm xung quanh.
- "Cả năm không nói chuyện một lần" — lối sống khép kín.
- Theo phương châm "đèn nhà ai nấy rạng", không mặn mà chuyện làng
  trên xóm dưới.

Một dấu hiệu nhỏ thường thấy: gần nhà đương số có kẻ mãi không chịu
lấy vợ lấy chồng — hơi khí Cô Thần lan ra cả khu vực.`,
  },

  {
    id: 'co-than-tai-quan-loc',
    title: 'Cô Thần tại Quan Lộc',
    sao: ['Cô Thần'],
    cung: ['Quan Lộc'],
    doUuTien: 75,
    tomTat: `Khi Cô Thần đóng tại Quan Lộc, sự nghiệp đương số mang tính độc
lập và một mình.

Trong công việc, đương số có tính độc lập, không muốn dựa vào ai. Khả
năng kết hợp với người khác không cao; không thích làm tập thể, ngại
tiếp xúc nhiều người và không muốn hùn vốn chung.

Khó khăn theo đó cũng rõ: khó phát triển quan hệ xã hội, gặp khó khăn
phải tự mình giải quyết và không có ai đứng bên giúp đỡ.

Một đặc trưng môi trường thú vị là chênh lệch giới tính rõ rệt — Cô
Thần ở Quan Lộc thường khiến nơi làm việc ít nam, toàn nữ (ngược lại
Quả Tú ở Quan Lộc thì ít nữ, toàn nam).`,
  },

  {
    id: 'co-than-tai-no-boc',
    title: 'Cô Thần tại Nô Bộc',
    sao: ['Cô Thần'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Khi Cô Thần đóng tại Nô Bộc, đương số chơi bạn không được bền
lâu.

Đặc điểm quan hệ bạn bè:

- Được một thời gian lại dễ bỏ nhau đi.
- Khó thích nghi với xã hội.
- Ít bè bạn.
- Giao thiệp miễn cưỡng, thiếu hạnh phúc và niềm tin.

Có chênh lệch giới tính rõ nét: Cô Thần ở Nô Bộc thì đương số ít bạn
nam (ngược lại Quả Tú ở Nô Bộc thì ít bạn nữ).

Sâu hơn nữa, đương số không được bạn bè và cấp dưới tin tưởng, ít chia
sẻ giúp đỡ và khó tìm được tri kỷ trung thành.

Khi hội Hóa Quyền đi cùng Hóa Kỵ, Thất Sát và Phá Quân, cấp dưới của
đương số có xu hướng âm mưu, vượt quyền trong âm thầm — đáng lo nhất ở
môi trường công sở.`,
  },

  {
    id: 'co-than-tai-thien-di',
    title: 'Cô Thần tại Thiên Di',
    sao: ['Cô Thần'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `Khi Cô Thần đóng tại Thiên Di, đương số ra ngoài luôn cẩn thận
và hạn chế tiếp xúc.

Đương số hạn chế tiếp xúc nếu không cần thiết, ra ngoài ít được ai giúp
đỡ, không chủ động giao tiếp và chỉ xã giao khi thực sự cần.

Đặc trưng giới tính của môi trường ngoài: Cô Thần tại Thiên Di khiến
đương số ra ngoài tiếp xúc nhiều với phụ nữ (ngược lại Quả Tú thì tiếp
xúc nhiều với đàn ông). Mạng lưới quan hệ vì vậy thừa nữ thiếu nam.

Khi cát tinh hội như Văn Xương, Văn Khúc, Tam Thai, Bát Tọa, Phong Cáo
và Khôi Việt, đương số ra ngoài được mọi người mến chuộng nhờ tài năng
đặc biệt; khí chất nổi bật được trọng nể, dù bản thân vẫn giữ khoảng
cách với đám đông.`,
  },

  {
    id: 'co-than-tai-tat-ach',
    title: 'Cô Thần tại Tật Ách',
    sao: ['Cô Thần'],
    cung: ['Tật Ách'],
    doUuTien: 76,
    tomTat: `Khi Cô Thần đóng tại Tật Ách, đương số mang bệnh tật đơn lẻ và
dễ chết mà không ai biết.

Đặc trưng bệnh tập trung ở đường ruột, hậu môn, bệnh trĩ và hệ tiêu hóa
nói chung. Bệnh hay tái đi tái lại, dứt được rồi vẫn quay về.

Điểm đáng lo nhất ở cung này là chết đơn độc:

- Cô - Quả cư Tật khiến đương số dễ chết không ai biết.
- Mãi lâu sau người thân mới phát hiện ra.
- Hay mắc tai họa và bệnh tật đơn lẻ một mình, đúng vào những lúc
  không có ai bên cạnh.

Một chi tiết về ngày chết được lưu trong sách cổ: Cô Thần cư Tật ứng
với ngày chết có con rể bên cạnh (ngược lại Quả Tú cư Tật thì ngày chết
có con dâu bên cạnh).`,
  },

  {
    id: 'co-than-tai-tai-bach',
    title: 'Cô Thần tại Tài Bạch',
    sao: ['Cô Thần'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `Khi Cô Thần đóng tại Tài Bạch, đương số là người gìn giữ được
tiền bạc, của cải vững chắc.

Đặc trưng tài vận: chi tiêu đồng tiền hợp lý, tích lũy âm thầm và không
thích bị hỏi han. Đương số có nguồn kiếm tiền bí mật mà không muốn cho
ai biết, thường kiếm tiền từ công việc đơn lẻ một mình.

Khi đi cùng Vũ Khúc, Lộc Tồn và Đẩu Quân, tính giữ tiền đẩy lên thái
quá — đương số dễ thành người keo kiệt, bủn xỉn.

Khi phối Hỏa Tinh, Địa Kiếp cùng Song Hao, tài vận tụ rồi tán, không ổn
định và khó tích lũy về lâu dài.

Một điểm cẩn thận: tính dè dặt và ít chia sẻ của Cô Thần dễ khiến đương
số bỏ lỡ cơ hội làm ăn tốt vốn cần kết nối và trao đổi thông tin.`,
  },

  {
    id: 'co-than-tai-tu-tuc',
    title: 'Cô Thần tại Tử Tức',
    sao: ['Cô Thần'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Khi Cô Thần đóng tại Tử Tức, đường con cái của đương số bị giảm
số lượng — ít con, muộn con và hiếm con.

Con cái ít chia sẻ, không tin tưởng bố mẹ nhiều; sau lớn rồi không ở
gần nhà.

Có chênh lệch giới tính rõ: Cô Thần khiến đương số ít con trai (ngược
lại Quả Tú thì ít con gái). Vì Cô Thần thiên năng lượng dương nên
đương số có Cô Thần ở Tử Tức dễ có con trai hơn con gái — nhưng vẫn
trong tổng thể số con ít.

Về quan hệ tình cảm sau này: con dễ sống xa cha mẹ, lớn lên ít chia sẻ
và thiếu sự tin tưởng gần gũi vốn có giữa các thế hệ.`,
  },

  {
    id: 'co-than-tai-phu-the',
    title: 'Cô Thần tại Phu Thê',
    sao: ['Cô Thần'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `Khi Cô Thần đóng tại Phu Thê, cách cục bất lợi cho đường hôn
nhân của đương số.

Dù đã "kết tóc se duyên", đương số vẫn cảm thấy cô đơn, lẻ loi, thiếu
tình thương và thiếu sự thấu hiểu từ bạn đời. Vợ chồng mỗi người một
tính, khó hòa hợp; hay cãi nhau, bất đồng quan điểm và không ai chịu
hiểu ai. Có những lúc vợ chồng xa nhau một thời gian rất dài, dù không
chính thức ly hôn.

Khi đi cùng bộ Hồng - Không - Cô - Quả và bị Tuần Triệt án ngữ, cách
"lắm mối tối nằm không" hiện rõ. Đương số là người cao số, hình khắc
chia ly nặng — nên kết hôn muộn để tránh đứt gánh giữa đường.

Đặc biệt với nam mệnh, đúng câu "Nam kỵ Cô", cách này phát tác mạnh
nhất.`,
  },

  {
    id: 'co-than-tai-huynh-de',
    title: 'Cô Thần tại Huynh Đệ',
    sao: ['Cô Thần'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Khi Cô Thần đóng tại Huynh Đệ, đương số ít anh chị em, có thể
là con một.

Anh chị em từ nhỏ ít quan tâm chia sẻ với nhau; lớn lên thì mỗi người
một nơi, chả mấy khi hỏi thăm hay giúp đỡ nhau khi cần.

Có chênh lệch giới tính rõ rệt: Cô Thần khiến đương số ít anh em trai —
mình là trai thì dễ có chị em gái nhiều hơn (ngược lại Quả Tú thì ít
chị em gái).`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÔ-QUẢ + CÁC SAO XẤU
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'co-qua-phuc-binh-benh-phu-noi-xau',
    title: 'Cô-Quả + Phục Binh + Bệnh Phù + Cự Môn - Bị nói xấu gièm pha',
    sao: ['Cô Thần', 'Quả Tú'],
    ketHop: ['Phục Binh', 'Bệnh Phù', 'Cự Môn'],
    doUuTien: 50,
    tomTat: `Khi Cô - Quả gặp Phục Binh, Bệnh Phù, Cự Môn, Điếu Khách và Địa
Không, đương số dễ bị nói xấu và gièm pha.

Đặc trưng tổ hợp: tính cách cô lập, trầm lặng và ít giao tiếp dễ tạo
rào cản trong đường nhân duyên. Đương số dễ gặp cảnh bị nói xấu, hiểu
lầm, bị công kích bằng lời nói sau lưng dù không làm gì sai.

Ở chiều ngược lại, do ảnh hưởng của Phục Binh, đôi khi chính đương số
lại là người nói xấu và gièm pha người khác — tổ hợp này khiến cả hai
phía đều dính tai tiếng.`,
  },

  {
    id: 'co-qua-hoa-ky-thai-tue-ghen-ghet',
    title: 'Cô-Quả tại Mệnh + Hóa Kỵ + Thái Tuế - Bị ghen ghét ruồng bỏ',
    sao: ['Cô Thần', 'Quả Tú'],
    cung: ['Mệnh'],
    ketHop: ['Hóa Kỵ', 'Thái Tuế'],
    doUuTien: 50,
    tomTat: `Khi Cô - Quả thủ Mệnh đi cùng Điếu Khách, Đà La, Hóa Kỵ, Thái
Tuế, Khốc Hư và Bạch Hổ, đương số dễ bị ghen ghét, đố kỵ, ruồng bỏ và
thất sủng.

Cách cục này tạo ra cảm giác khó gần và độc lập một cách lạnh nhạt; vì
vậy đương số dễ vướng ghen ghét, đố kỵ và cạnh tranh từ người xung
quanh.

Khi hội thêm Thất Sát, Phá Quân, Đẩu Quân và Tuế Phá, đương số càng nổi
bật nhưng càng cô độc, khó hòa nhập với môi trường chung.

Trong tình huống thực tế thường thấy: đương số có Cô - Quả thủ Mệnh đi
cùng các sao tài năng — năng lực vượt trội nhưng lại bị đố kỵ bởi
chính những người xung quanh, nên thành tựu khó được công nhận đúng
mức.`,
  },
];
