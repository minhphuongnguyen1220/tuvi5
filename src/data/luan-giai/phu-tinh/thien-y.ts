import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THIÊN Y - Thủy, Tùy Tinh.
 *
 * An theo THÁNG SINH (engine: khởi từ Sửu thuận theo tháng sinh).
 *
 * QUY LUẬT BẮT BUỘC: LUÔN ĐỒNG CUNG với Thiên Riêu (cùng khởi từ Sửu).
 *
 * Ý nghĩa chiết tự:
 * - "Y" = sức khỏe, chữa bệnh, thầy thuốc, thuốc men
 * - "Thiên" = trời
 * - "Thiên Y" = phúc đức, sự che chở, cứu chữa tốt nhất ông trời ban
 *
 * Đắc địa: Dần, Mão, Thân, Dậu (cùng vị trí Riêu)
 * Hãm địa: các cung còn lại
 *
 * Phần CHUNG cặp Riêu-Y đã viết tại file thien-rieu.ts với
 * sao: ['Thiên Riêu', 'Thiên Y'].
 */
export const luanGiai_ThienY: DoanLuanGiai[] = [
  {
    id: 'thien-y-tinh-chat-chung',
    title: 'Thiên Y - Đặc tính chung',
    sao: ['Thiên Y'],
    doUuTien: 32,
    tomTat: `**Thiên Y** là phụ tinh thuộc nhóm Tùy Tinh, an theo tháng sinh,
ngũ hành Thủy. Chiết tự "Y" mang nghĩa sức khỏe, chữa bệnh, thầy thuốc và
thuốc men; ghép với "Thiên" thành Thiên Y — phúc đức may mắn, sự che chở và
cứu chữa tốt nhất mà ông trời ban cho đương số.

Đặc tính cốt lõi của sao là sạch sẽ vệ sinh, có thiên hướng giỏi nghề thuốc
và y dược, mang ý nghĩa cứu giải bệnh tật.

Trong cặp Riêu-Y, Thiên Y đóng vai trò "thuốc của nhà trời", cân bằng với
Thiên Riêu vốn là "bệnh nhà trời":

- Khi **Đắc địa**, Thiên Y bộc lộ rõ thiên hướng y học, lấn át Riêu, dục
  tính được giấu kín
- Khi **Hãm địa**, khả năng cứu giải yếu đi, để Riêu lấn át

Trong bộ Riêu-Y-Hình tam hợp, ba sao tạo thành bộ y dược chuyên môn — Thiên
Y là thuốc, Thiên Riêu là thảo dược, Thiên Hình là dao kéo châm cứu.

Thiên Y rất kỵ sát tinh: khi gặp sát tinh, tư chất thầy thuốc của đương số
bị mờ tối, dễ làm liều làm ẩu, dốt về trình độ, lương tâm và trách nhiệm
nghề nghiệp không cao. Sát tinh còn làm giảm sự mát tay và cơ duyên cứu
độ; trường hợp xấu, sức khỏe đương số kém, dễ mất sớm vì bệnh tật.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP NỔI TIẾNG - BÁC SỸ THEO CHUYÊN KHOA
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-y-tuong-quan-phuc-bien-thuoc',
    title: 'Thiên Y + Tướng + Quan Phúc - Lương y giỏi như Biển Thước',
    sao: ['Thiên Y'],
    ketHop: ['Thiên Tướng', 'Thiên Quan'],
    doUuTien: 60,
    tomTat: `Khi **Thiên Y** hội cùng Thiên Tướng và bộ Thiên Quan, Thiên Phúc,
đương số trở thành lương y, thầy thuốc giỏi mát tay sánh ngang Biển Thước.

Phân tích bộ sao: Thiên Y đảm trách chuyên môn y dược, Thiên Tướng đem đến
vị trí ấn tín tạo uy tín nghề, còn Quan Phúc cho tâm phúc thiện và phúc
trời ban. Hợp lực ba yếu tố này khiến đương số là thầy thuốc cứu nhiều
người, danh tiếng lưu truyền hậu thế đúng như Biển Thước — thầy thuốc nổi
tiếng Trung Hoa cổ.`,
  },

  {
    id: 'thien-y-tuong-hinh-hoa-da-phau-thuat',
    title: 'Thiên Y + Tướng + Hình (Kiếp Sát) - Bác sỹ giải phẫu Hoa Đà',
    sao: ['Thiên Y'],
    ketHop: ['Thiên Tướng', 'Thiên Hình'],
    doUuTien: 60,
    tomTat: `Khi **Thiên Y** đi cùng Thiên Tướng và Thiên Hình (hoặc Kiếp Sát),
đương số là bác sỹ giải phẫu giỏi như Hoa Đà.

Phân tích bộ sao: Thiên Y giữ phần y học, Thiên Tướng cho ấn tín và uy
nghi, Thiên Hình hoặc Kiếp Sát đại diện cho dao kéo, mổ xẻ và sát phạt.
Tổng hòa lại đương số thành bác sỹ phẫu thuật giỏi sánh với Hoa Đà — thần
y mổ xẻ thời Tam Quốc — tay nghề chuyên nghiệp, cứu sống nhiều người.`,
  },

  {
    id: 'thien-y-nhat-nguyet-quan-phuc-bac-sy-chieu-dien',
    title: 'Thiên Y + Nhật/Nguyệt + Quan Phúc - Bác sỹ chiếu điện/nhãn khoa',
    sao: ['Thiên Y'],
    ketHop: ['Thái Dương', 'Thái Âm'],
    doUuTien: 55,
    tomTat: `Khi **Thiên Y** kết hợp Thái Dương hoặc Thái Âm cùng Thiên Quan,
Thiên Phúc, đương số phát triển theo hướng bác sỹ chiếu điện, nhãn khoa
hoặc thần kinh.

Phân tích: Nhật và Nguyệt biểu trưng cho ánh sáng — tương ứng với chiếu
điện như X-quang, MRI, siêu âm. Thái Dương cũng chủ về mắt nên hợp nhãn
khoa, đồng thời chủ về thần kinh, não bộ và hệ thần kinh. Quan Phúc đảm
bảo tâm phúc thiện cứu người. Cách cục này hợp với các nghề bác sỹ chẩn
đoán hình ảnh, bác sỹ nhãn khoa và bác sỹ thần kinh.`,
  },

  {
    id: 'thien-y-tuong-thai-bac-sy-phu-khoa',
    title: 'Thiên Y + Tướng + Thai - Bác sỹ phụ khoa',
    sao: ['Thiên Y'],
    ketHop: ['Thiên Tướng', 'Thai'],
    doUuTien: 55,
    tomTat: `Khi **Thiên Y** đi cùng Thiên Tướng và Thai, đương số hợp với
nghề bác sỹ phụ khoa, đỡ đẻ.

Phân tích: Thiên Y mang chuyên môn y học, Thiên Tướng đem ấn tín nghề, còn
Thai (đất Thai trong Tràng Sinh) chủ về bào thai và mang thai. Bộ sao này
đẩy đương số đến những lĩnh vực bác sỹ trị bệnh đàn bà, chửa đẻ, đỡ đẻ,
phụ khoa và sản khoa.`,
  },

  {
    id: 'thien-y-co-nguyet-dong-luong-y-sy',
    title: 'Thiên Y + Cơ Nguyệt Đồng Lương - Y sỹ giỏi',
    sao: ['Thiên Y'],
    ketHop: ['Thiên Cơ', 'Thái Âm', 'Thiên Đồng', 'Thiên Lương'],
    doUuTien: 55,
    tomTat: `Khi **Thiên Y** kết hợp với bộ Cơ Nguyệt Đồng Lương, đương số là
y sỹ giỏi.

Cơ Nguyệt Đồng Lương vốn là bộ chính tinh thiện đẹp, đặc biệt Thiên Lương
là Thọ Tinh, hợp các nghề y dược, giáo dục và cứu người. Khi thêm Thiên Y,
chuyên môn y học của đương số được tăng cường rõ rệt. Đương số thường
thành y sỹ chuyên môn cao, lương y chữa bệnh, đặc biệt phù hợp Đông y và
y học cổ truyền — vì Thiên Lương cùng Thiên Cơ vốn là bộ trí tuệ thiện
lương.`,
  },

  {
    id: 'thien-y-rieu-bo-phan-sinh-duc',
    title: 'Thiên Y + Riêu - Chuyên khoa sinh dục',
    sao: ['Thiên Y'],
    ketHop: ['Thiên Riêu'],
    doUuTien: 55,
    tomTat: `Vì **Thiên Y** luôn đồng cung với **Thiên Riêu**, đương số có
chuyên khoa hướng về bộ phận sinh dục. Thiên Riêu chủ về dục tính và bộ
phận sinh dục, Thiên Y chủ về chuyên môn y học; hợp lại tạo nên hướng bác
sỹ nam khoa, phụ khoa và sinh sản.

Quy tắc chung của Thiên Y là: tùy theo bộ sao y khoa đi liền với bộ phận
cơ thể nào thì y sỹ sẽ chuyên khoa về bộ phận đó. Cụ thể:

- Thiên Y cùng Nhật hoặc Nguyệt: hướng về mắt, thần kinh
- Thiên Y cùng Thiên Tướng và Thai: hướng phụ khoa
- Thiên Y cùng Thiên Riêu: hướng sinh dục
- Thiên Y cùng Thiên Hình: hướng phẫu thuật`,
  },

  {
    id: 'thien-y-khong-kiep-so-suat-chet-nguoi',
    title: 'Thiên Y + Không / Kiếp - Sơ suất chết người',
    sao: ['Thiên Y'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 55,
    tomTat: `Khi **Thiên Y** đồng cung Địa Không hoặc Địa Kiếp, trong đời y sỹ
phải có lần sơ suất làm chết người — đây là cách rất xấu cho người làm
nghề y.

Sát tinh phá đi sự mát tay vốn có của Thiên Y, khiến đương số có thể
vướng tai tiếng nghề nghiệp lớn, hoặc bị kiện tụng và phải chịu trách
nhiệm về y đức.

Hóa giải: đương số cần học hành kỹ lưỡng, không làm liều, thận trọng
trong từng ca; tránh nghề phẫu thuật nếu mang cách này, đồng thời tu
thân tích đức thường xuyên.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // THIÊN Y TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-y-tai-menh',
    title: 'Thiên Y tại Mệnh',
    sao: ['Thiên Y'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `Đương số có **Thiên Y** thủ Mệnh thường cẩn thận, tỷ mỷ và ưa
sạch sẽ, mang sẵn năng khiếu y dược.

Về tướng mạo, đương số nhiều lông tóc — đây là đặc điểm do Thiên Riêu đồng
cung mang lại. Tính cách cẩn thận, tỷ mỷ, gọn gàng và ngăn nắp; sẵn năng
khiếu y dược, thuốc men và dễ tiếp cận lĩnh vực chăm sóc sức khỏe.`,
  },

  {
    id: 'thien-y-tai-menh-dac-dia',
    title: 'Thiên Y tại Mệnh - Đắc địa',
    sao: ['Thiên Y'],
    cung: ['Mệnh'],
    chi: ['Dần', 'Mão', 'Thân', 'Dậu'],
    doUuTien: 80,
    tomTat: `Khi **Thiên Y** Đắc địa tại Mệnh ở Dần, Mão, Thân hoặc Dậu, đương
số khỏe mạnh, da dẻ hồng hào và đầy sức sống — có thể làm người mẫu,
chuyên gia chăm sóc sức khỏe hoặc vận động viên thể hình.

Học hành thông tuệ, học ít biết nhiều; sở thích thiên về y dược, tử vi,
lý số, đồng thời ưa khám phá, ẩn dật và hoài cổ. Đương số rất hợp nghề
thầy thuốc, bác sỹ với đôi tay mát.`,
  },

  {
    id: 'thien-y-tai-menh-ham',
    title: 'Thiên Y tại Mệnh - Hãm địa',
    sao: ['Thiên Y'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `Khi **Thiên Y** **Hãm** tại Mệnh, đương số có tướng mạo xanh xao,
thiếu sức sống, gầy ốm; bị dục tính của Thiên Riêu lấn át nên khó phát
triển. Đương số có ý thức phòng chữa bệnh, song trong đời phải có thời
gian dài liên tục dùng thuốc, dễ mang bệnh hiểm.`,
  },

  {
    id: 'thien-y-tai-phu-mau',
    title: 'Thiên Y tại Phụ Mẫu',
    sao: ['Thiên Y'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Thiên Y** tại Phụ Mẫu — khi đắc địa, cha mẹ đương số thông minh
và khỏe mạnh.`,
  },

  {
    id: 'thien-y-tai-phu-mau-dac-dia',
    title: 'Thiên Y tại Phụ Mẫu - Đắc địa',
    sao: ['Thiên Y'],
    cung: ['Phụ Mẫu'],
    chi: ['Dần', 'Mão', 'Thân', 'Dậu'],
    doUuTien: 78,
    tomTat: `Khi **Thiên Y** **Đắc địa** tại Phụ Mẫu ở Dần, Mão, Thân hoặc
Dậu, cha mẹ đương số có người làm trong y dược — có thể là thầy thuốc hoặc
bác sỹ. Cha mẹ giỏi giang, thông minh, sức khỏe tốt và biết quan tâm chăm
sóc sức khỏe cho cả gia đình.`,
  },

  {
    id: 'thien-y-tai-phu-mau-ham',
    title: 'Thiên Y tại Phụ Mẫu - Hãm địa',
    sao: ['Thiên Y'],
    cung: ['Phụ Mẫu'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi **Thiên Y** **Hãm** tại Phụ Mẫu, cha mẹ đương số hay ốm đau
bệnh tật, phải dùng thuốc men và khám chữa nhiều. Nếu sát bại tinh hội
thêm, tuổi thọ cha mẹ giảm sút; hoặc cha mẹ có người thứ ba bên ngoài —
hệ quả của Thiên Riêu đồng cung.`,
  },

  {
    id: 'thien-y-tai-phu-mau-khong-kiep-hoa-linh',
    title: 'Thiên Y Phụ Mẫu + Không Kiếp Hỏa Linh Bệnh Phù',
    sao: ['Thiên Y'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Hỏa Tinh', 'Linh Tinh', 'Bệnh Phù'],
    doUuTien: 70,
    tomTat: `Khi **Thiên Y** tại Phụ Mẫu hội thêm Địa Không, Địa Kiếp, Hỏa
Tinh, Linh Tinh hoặc Bệnh Phù, tuổi thọ cha mẹ đương số càng dễ giảm sút.`,
  },

  {
    id: 'thien-y-tai-phuc-duc',
    title: 'Thiên Y tại Phúc Đức',
    sao: ['Thiên Y'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `**Thiên Y** tại Phúc Đức — dòng họ tổ tiên đương số có nhiều
người làm trong ngành y dược.`,
  },

  {
    id: 'thien-y-tai-phuc-duc-dac-dia',
    title: 'Thiên Y tại Phúc Đức - Đắc địa',
    sao: ['Thiên Y'],
    cung: ['Phúc Đức'],
    chi: ['Dần', 'Mão', 'Thân', 'Dậu'],
    doUuTien: 78,
    tomTat: `Khi **Thiên Y** **Đắc địa** tại Phúc Đức ở Dần, Mão, Thân hoặc
Dậu, con cháu trong dòng họ đương số học hành tốt, hay cứu giúp người và
làm việc thiện. Đương số được ông bà tổ tiên phù trì cho may mắn và sức
khỏe; ốm đau có thầy thuốc cứu, gia đình người hôn phối cũng có người làm
y dược.`,
  },

  {
    id: 'thien-y-tai-phuc-duc-ham',
    title: 'Thiên Y tại Phúc Đức - Hãm địa',
    sao: ['Thiên Y'],
    cung: ['Phúc Đức'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi **Thiên Y** **Hãm** tại Phúc Đức, dòng họ đương số có nhiều
người hay ốm đau bệnh tật, có thể di truyền tới chính đương số. Tâm thiện
cũng giảm sút vì lo chuyện cá nhân nhiều hơn.`,
  },

  {
    id: 'thien-y-tai-dien-trach',
    title: 'Thiên Y tại Điền Trạch',
    sao: ['Thiên Y'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Thiên Y** tại Điền Trạch — đất ở của đương số gần bệnh viện,
trạm xá hoặc nhà thuốc.`,
  },

  {
    id: 'thien-y-tai-dien-trach-dac-dia',
    title: 'Thiên Y tại Điền Trạch - Đắc địa',
    sao: ['Thiên Y'],
    cung: ['Điền Trạch'],
    chi: ['Dần', 'Mão', 'Thân', 'Dậu'],
    doUuTien: 78,
    tomTat: `Khi **Thiên Y** **Đắc địa** tại Điền Trạch ở Dần, Mão, Thân hoặc
Dậu, nhà cửa xung quanh có nhiều thầy thuốc, bác sỹ chữa bệnh. Thổ nhưỡng
khu vực tốt, người ở quanh khỏe mạnh và thông minh.`,
  },

  {
    id: 'thien-y-tai-dien-trach-ham',
    title: 'Thiên Y tại Điền Trạch - Hãm địa',
    sao: ['Thiên Y'],
    cung: ['Điền Trạch'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi **Thiên Y** **Hãm** tại Điền Trạch, nơi ở của đương số hay
xảy ra ốm đau bệnh tật, dễ bị ma tà ám do ảnh hưởng Thiên Riêu — đất phải
thờ. Xung quanh dễ xảy ra bệnh dịch truyền nhiễm lây lan; nhà cửa có nguy
cơ trở thành "tâm dịch" để có thầy thuốc đến cứu giải.`,
  },

  {
    id: 'thien-y-tai-quan-loc',
    title: 'Thiên Y tại Quan Lộc - Hợp nghề Y dược',
    sao: ['Thiên Y'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `**Thiên Y** tại Quan Lộc — sự nghiệp đương số gắn liền với thuốc
men, y dược và y học. Ngoài các nghề y khoa trực tiếp, đương số cũng hợp
với tổ chức thiện nguyện, chữ thập đỏ và các hoạt động cứu người.`,
  },

  {
    id: 'thien-y-tai-quan-loc-dac-dia',
    title: 'Thiên Y Quan Lộc - Đắc địa',
    sao: ['Thiên Y'],
    cung: ['Quan Lộc'],
    chi: ['Mão', 'Dậu', 'Dần', 'Thân'],
    doUuTien: 80,
    tomTat: `Khi **Thiên Y** **Đắc địa** tại Quan Lộc ở Mão, Dậu, Dần hoặc
Thân, nghề nghiệp đương số hiển vinh và được người đời biết tiếng.`,
  },

  {
    id: 'thien-y-tai-quan-loc-sat-tinh',
    title: 'Thiên Y Quan Lộc - bị sát tinh đánh phá',
    sao: ['Thiên Y'],
    cung: ['Quan Lộc'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Khi **Thiên Y** tại Quan Lộc bị sát tinh như Kình Dương, Đà La,
Hỏa Tinh, Linh Tinh, Địa Không hoặc Địa Kiếp đánh phá, đương số làm các
công tác gián tiếp và phụ trợ trong ngành y — quản lý hành chính, cấp
cứu, kinh doanh — hoặc chuyển sang trồng cây dược liệu, dược phẩm.`,
  },

  {
    id: 'thien-y-tai-quan-loc-khong-kiep',
    title: 'Thiên Y Quan Lộc + Không Kiếp',
    sao: ['Thiên Y'],
    cung: ['Quan Lộc'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Khi **Thiên Y** tại Quan Lộc đi cùng Địa Không hoặc Địa Kiếp,
trong đời y sỹ đương số phải có lần sơ suất làm chết người.`,
  },

  {
    id: 'thien-y-tai-quan-loc-ham',
    title: 'Thiên Y Quan Lộc - Hãm địa',
    sao: ['Thiên Y'],
    cung: ['Quan Lộc'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi **Thiên Y** **Hãm** tại Quan Lộc, công việc của đương số liên
quan nhiều tới bệnh tật, bệnh hoạn, môi trường làm việc độc hại — dẫn tới
suy giảm sức khỏe của chính đương số.`,
  },

  {
    id: 'thien-y-tai-no-boc',
    title: 'Thiên Y tại Nô Bộc',
    sao: ['Thiên Y'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Thiên Y** tại Nô Bộc — khi đắc địa, bạn bè đương số nhiều người
làm trong ngành y dược.`,
  },

  {
    id: 'thien-y-tai-no-boc-dac-dia',
    title: 'Thiên Y Nô Bộc - Đắc địa',
    sao: ['Thiên Y'],
    cung: ['Nô Bộc'],
    chi: ['Dần', 'Mão', 'Thân', 'Dậu'],
    doUuTien: 78,
    tomTat: `Khi **Thiên Y** **Đắc địa** tại Nô Bộc ở Dần, Mão, Thân hoặc
Dậu, bạn bè đương số thông minh, cẩn thận và chỉn chu. Khi đương số ốm
đau, luôn có người quan tâm, chăm sóc tận tình.`,
  },

  {
    id: 'thien-y-tai-no-boc-ham',
    title: 'Thiên Y Nô Bộc - Hãm địa',
    sao: ['Thiên Y'],
    cung: ['Nô Bộc'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi **Thiên Y** **Hãm** tại Nô Bộc, bạn bè đồng nghiệp của đương
số sức khỏe kém, hay ốm đau. Cũng có cách hiểu khác: chính đương số là
người thầy thuốc, bác sỹ — còn cung Nô Bộc đóng vai bệnh nhân cần cứu
giúp.`,
  },

  {
    id: 'thien-y-tai-no-boc-ham-sat',
    title: 'Thiên Y Nô Bộc - Hãm + sát bại tinh',
    sao: ['Thiên Y'],
    cung: ['Nô Bộc'],
    trangThai: ['Hãm'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 75,
    tomTat: `Khi **Thiên Y** **Hãm** tại Nô Bộc hội thêm sát bại tinh, bạn bè
đương số ăn chơi chác tán và nhiều bệnh tật.`,
  },

  {
    id: 'thien-y-tai-thien-di',
    title: 'Thiên Y tại Thiên Di',
    sao: ['Thiên Y'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Thiên Y** tại Thiên Di — khi đắc địa, đương số ra ngoài hay
gặp may mắn, ốm đau có người hỗ trợ.`,
  },

  {
    id: 'thien-y-tai-thien-di-dac-dia',
    title: 'Thiên Y Thiên Di - Đắc địa',
    sao: ['Thiên Y'],
    cung: ['Thiên Di'],
    chi: ['Dần', 'Mão', 'Thân', 'Dậu'],
    doUuTien: 78,
    tomTat: `Khi **Thiên Y** **Đắc địa** tại Thiên Di ở Dần, Mão, Thân hoặc
Dậu, đương số đi xa hay được gặp may mắn, ra ngoài tới môi trường liên
quan ngành y dược, quen nhiều bác sỹ và thầy thuốc. Đương số biết tự
chăm sóc bản thân và tự lập tốt.`,
  },

  {
    id: 'thien-y-tai-thien-di-ham',
    title: 'Thiên Y Thiên Di - Hãm địa',
    sao: ['Thiên Y'],
    cung: ['Thiên Di'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi **Thiên Y** **Hãm** tại Thiên Di, đương số ra ngoài hay bị ốm
đau bệnh tật. Lối sống ăn chơi chác tán dễ khiến đương số bị lây bệnh
truyền nhiễm xã hội — biểu hiện đặc biệt rõ rệt khi hội thêm sát bại
tinh.`,
  },

  {
    id: 'thien-y-tai-tat-ach',
    title: 'Thiên Y tại Tật Ách',
    sao: ['Thiên Y'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `**Thiên Y** tại Tật Ách — khi đắc địa, đương số được giải trừ
bớt bệnh tật và tai ách. Vì Thiên Y mang ngũ hành Thủy, đặc tính bệnh
liên quan máu huyết, hệ tiêu hóa và thận.`,
  },

  {
    id: 'thien-y-tai-tat-ach-dac-dia',
    title: 'Thiên Y Tật Ách - Đắc địa',
    sao: ['Thiên Y'],
    cung: ['Tật Ách'],
    chi: ['Dần', 'Mão', 'Thân', 'Dậu'],
    doUuTien: 80,
    tomTat: `Khi **Thiên Y** **Đắc địa** tại Tật Ách ở Dần, Mão, Thân hoặc
Dậu, đương số ốm đau là có thuốc chữa. Khả năng giải trừ phần lớn đến từ
ý thức tự chăm sóc bản thân, nhờ vậy giảm trừ được bệnh tật.`,
  },

  {
    id: 'thien-y-tai-tat-ach-ham',
    title: 'Thiên Y Tật Ách - Hãm địa',
    sao: ['Thiên Y'],
    cung: ['Tật Ách'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `Khi **Thiên Y** **Hãm** tại Tật Ách, sức khỏe đương số thường
không tốt, hay ốm đau và bệnh tật kéo dài, phải dùng thuốc men điều trị
liên tục.`,
  },

  {
    id: 'thien-y-tai-tai-bach',
    title: 'Thiên Y tại Tài Bạch',
    sao: ['Thiên Y'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Thiên Y** tại Tài Bạch — khi đắc địa, đương số kiếm tiền từ
ngành y và lĩnh vực chăm sóc sức khỏe.`,
  },

  {
    id: 'thien-y-tai-tai-bach-dac-dia',
    title: 'Thiên Y Tài Bạch - Đắc địa',
    sao: ['Thiên Y'],
    cung: ['Tài Bạch'],
    chi: ['Dần', 'Mão', 'Thân', 'Dậu'],
    doUuTien: 78,
    tomTat: `Khi **Thiên Y** **Đắc địa** tại Tài Bạch ở Dần, Mão, Thân hoặc
Dậu, đương số kiếm tiền từ ngành y dược, châm cứu, chăm sóc sức khỏe, hoặc
các nghề liên quan như spa và huấn luyện viên thể hình.`,
  },

  {
    id: 'thien-y-tai-tai-bach-ham',
    title: 'Thiên Y Tài Bạch - Hãm địa',
    sao: ['Thiên Y'],
    cung: ['Tài Bạch'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi **Thiên Y** **Hãm** tại Tài Bạch, đương số hay tiêu tốn nhiều
tiền cho chuyện ốm đau và thuốc men — đúng câu "của đi vì bệnh".`,
  },

  {
    id: 'thien-y-tai-tu-tuc',
    title: 'Thiên Y tại Tử Tức',
    sao: ['Thiên Y'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Thiên Y** tại Tử Tức — khi đắc địa, con cái đương số khỏe mạnh,
thông minh và sau này có người theo nghề y.`,
  },

  {
    id: 'thien-y-tai-tu-tuc-dac-dia',
    title: 'Thiên Y Tử Tức - Đắc địa',
    sao: ['Thiên Y'],
    cung: ['Tử Tức'],
    chi: ['Dần', 'Mão', 'Thân', 'Dậu'],
    doUuTien: 78,
    tomTat: `Khi **Thiên Y** **Đắc địa** tại Tử Tức ở Dần, Mão, Thân hoặc
Dậu, con cái đương số khỏe mạnh, thông minh và tự lập tốt. Sau này thường
có đứa theo nghề y dược hoặc lĩnh vực chăm sóc sức khỏe.`,
  },

  {
    id: 'thien-y-tai-tu-tuc-luong-tuong',
    title: 'Thiên Y Tử Tức + Thiên Lương + Thiên Tướng',
    sao: ['Thiên Y'],
    cung: ['Tử Tức'],
    ketHop: ['Thiên Lương', 'Thiên Tướng'],
    doUuTien: 70,
    tomTat: `Khi **Thiên Y** tại Tử Tức hội thêm Thiên Lương và Thiên Tướng,
con cái đương số tâm tính lương thiện và thích giúp người.`,
  },

  {
    id: 'thien-y-tai-tu-tuc-ham',
    title: 'Thiên Y Tử Tức - Hãm địa',
    sao: ['Thiên Y'],
    cung: ['Tử Tức'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi **Thiên Y** **Hãm** tại Tử Tức, con cái đương số hay ốm đau
bệnh tật, phải điều trị thuốc men liên tục.`,
  },

  {
    id: 'thien-y-tai-phu-the',
    title: 'Thiên Y tại Phu Thê',
    sao: ['Thiên Y'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `**Thiên Y** tại Phu Thê — khi đắc địa, người hôn phối của đương
số thông minh và đảm đang.`,
  },

  {
    id: 'thien-y-tai-phu-the-dac-dia',
    title: 'Thiên Y Phu Thê - Đắc địa',
    sao: ['Thiên Y'],
    cung: ['Phu Thê'],
    chi: ['Dần', 'Mão', 'Thân', 'Dậu'],
    doUuTien: 78,
    tomTat: `Khi **Thiên Y** **Đắc địa** tại Phu Thê ở Dần, Mão, Thân hoặc
Dậu, vợ chồng đương số là người thông minh, chỉn chu, đảm đang và cẩn
thận. Bạn đời biết quan tâm chăm sóc gia đình, đặc biệt về sức khỏe, và
dễ làm trong ngành y dược.`,
  },

  {
    id: 'thien-y-tai-phu-the-ham',
    title: 'Thiên Y Phu Thê - Hãm địa',
    sao: ['Thiên Y'],
    cung: ['Phu Thê'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi **Thiên Y** **Hãm** tại Phu Thê, người hôn phối hay ốm đau
bệnh tật, phải điều trị thuốc men nhiều. Nếu hội thêm nhiều sát bại tinh,
duyên vợ chồng giảm thọ.`,
  },

  {
    id: 'thien-y-tai-huynh-de',
    title: 'Thiên Y tại Huynh Đệ',
    sao: ['Thiên Y'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Thiên Y** tại Huynh Đệ — khi đắc địa, anh chị em đương số giỏi
giang.`,
  },

  {
    id: 'thien-y-tai-huynh-de-dac-dia',
    title: 'Thiên Y Huynh Đệ - Đắc địa',
    sao: ['Thiên Y'],
    cung: ['Huynh Đệ'],
    chi: ['Dần', 'Mão', 'Thân', 'Dậu'],
    doUuTien: 78,
    tomTat: `Khi **Thiên Y** **Đắc địa** tại Huynh Đệ ở Dần, Mão, Thân hoặc
Dậu, anh chị em đương số giỏi giang, có người làm trong ngành y dược. Hồi
nhỏ đương số dễ được anh chị quý mến, chăm sóc cẩn thận.`,
  },

  {
    id: 'thien-y-tai-huynh-de-ham',
    title: 'Thiên Y Huynh Đệ - Hãm địa',
    sao: ['Thiên Y'],
    cung: ['Huynh Đệ'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi **Thiên Y** **Hãm** tại Huynh Đệ, anh chị em đương số hay bị
ốm đau, thương tật và phải điều trị thuốc men liên tục.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // THIÊN Y VÀO HẠN
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-y-vao-han',
    title: 'Thiên Y vào hạn',
    sao: ['Thiên Y'],
    doUuTien: 50,
    tomTat: `Khi **Thiên Y** vào hạn, đương số dễ ốm đau và phải chạy chữa
thầy thuốc. Vì Thiên Riêu luôn đi đôi cùng Thiên Y, có khi đương số gặp
bệnh về bộ phận sinh dục — tiểu tiện, phong tình, bệnh đàn bà.

Đương số phải đề phòng đau yếu, giữ gìn sức khỏe; có thể bản thân bị bệnh
hoặc người thân bị bệnh và cần được chăm sóc, điều trị, trông nom.`,
  },

  {
    id: 'thien-y-han-tham-dong',
    title: 'Thiên Y hạn + Tham Lang + Thiên Đồng',
    sao: ['Thiên Y'],
    ketHop: ['Tham Lang', 'Thiên Đồng'],
    doUuTien: 55,
    tomTat: `Khi hạn **Thiên Y** đi cùng Tham Lang và Thiên Đồng, đương số
phải đề phòng bệnh xã hội do tửu sắc phong tình.`,
  },

  {
    id: 'thien-y-han-cat-tinh',
    title: 'Thiên Y hạn đắc địa + cát tinh',
    sao: ['Thiên Y'],
    chi: ['Dần', 'Mão', 'Thân', 'Dậu'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 55,
    tomTat: `Khi hạn **Thiên Y** đắc địa hội thêm cát tinh trợ lực như Tả Phù,
Hữu Bật, Văn Xương, Văn Khúc, Thiên Khôi hoặc Thiên Việt, người trong
ngành y dễ lập công danh, cứu nhiều người và thăng tiến.`,
  },

  {
    id: 'thien-y-han-sat-tinh',
    title: 'Thiên Y hạn + sát tinh',
    sao: ['Thiên Y'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 55,
    tomTat: `Khi hạn **Thiên Y** đi cùng sát tinh như Kình Dương, Đà La, Hỏa
Tinh, Linh Tinh, Địa Không hoặc Địa Kiếp, đương số dễ vướng vào tai tiếng
nghề nghiệp và sức khỏe bị giảm sút.`,
  },
];
