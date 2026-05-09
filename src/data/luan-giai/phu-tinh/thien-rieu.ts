import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THIÊN RIÊU - Thủy, Dâm Tinh + Ám Tinh + Bại Tinh.
 *
 * An theo THÁNG SINH (engine: khởi từ Sửu thuận theo tháng sinh).
 *
 * QUY LUẬT BẮT BUỘC:
 * - LUÔN ĐỒNG CUNG với Thiên Y (cùng khởi từ Sửu - hardcode engine)
 * - LUÔN TAM HỢP với Thiên Hình: bộ RIÊU-Y-HÌNH
 *
 * Khởi sinh tại Sửu = nơi giao hoan đất trời (Thái Âm Thái Dương đồng cung)
 * = giờ hoan lạc đôi nam nữ: chủ về DỤC TÍNH, ham muốn nhục dục.
 *
 * Đắc địa: Dần, Mão, Thân, Dậu — sang khôn ngoan thông minh kín đáo
 * Hãm địa: các cung còn lại — bộc lộ dâm dục mạnh
 *
 * BỘ TAM ÁM: Riêu - Đà - Kỵ (3 ám tinh): tâm linh đồng bóng mạnh
 *
 * Phần CHUNG cặp Riêu-Y đã viết tại file này với
 * sao: ['Thiên Riêu', 'Thiên Y'].
 */
export const luanGiai_ThienRieu: DoanLuanGiai[] = [
  {
    id: 'thien-rieu-tinh-chat-chung',
    title: 'Thiên Riêu - Đặc tính chung',
    sao: ['Thiên Riêu'],
    doUuTien: 32,
    tomTat: `**Thiên Riêu** là phụ tinh mang ba thuộc tính cùng lúc — Dâm Tinh,
Ám Tinh và Bại Tinh — được an theo tháng sinh, ngũ hành Thủy.

Đặc tính của sao thiên về phong lưu khoái lạc, chơi bời, a dua, dễ tin và mờ
ám. Khí Thủy khiến đương số mang nét u buồn, đa sầu đa cảm và lãng mạn. Vì
khởi từ Sửu — nơi giao hoan đất trời — sao chủ về ham muốn nhục dục. Hình
tượng đặc trưng là lông tóc nhiều, ứng với nhu cầu sinh lý cao.

Vị trí của Thiên Riêu cho khác biệt rõ rệt:

- **Đắc** địa tại Dần, Mão, Thân, Dậu: thông minh, sắc bén, khôn ngoan, kín
  đáo
- **Hãm** địa tại các cung còn lại: bộc lộ phong lưu, dâm dục, chơi bời

Thiên Riêu cùng Đà La và Hóa Kỵ tạo thành bộ Tam Ám: đương số mê tín tâm linh
đồng bóng, dễ bị ma tà ám. Theo quy luật engine, sao luôn đồng cung với Thiên
Y và luôn tam hợp Thiên Hình tạo thành bộ Riêu-Y-Hình. Sao đặc biệt cản trở
sự sáng sủa của Nhật Nguyệt.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // PHẦN CHUNG CẶP RIÊU-Y
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'rieu-y-bo-doi-can-bang',
    title: 'Bộ Riêu-Y - Hai thái cực Bệnh & Thuốc cân bằng',
    sao: ['Thiên Riêu', 'Thiên Y'],
    doUuTien: 60,
    tomTat: `Bộ Riêu-Y gồm Thiên Riêu và Thiên Y đồng cung là hai thái cực đối
xứng trong tử vi. Cả hai sao cùng khởi tại Sửu — giao hoan đất trời, thủy
triều cao nhất, lúc con người cần ấm áp. Thiên Riêu được xem là "bệnh của
nhà trời" với phong tình sắc dục và tính ám tinh; Thiên Y là "thuốc của nhà
trời" với khí thanh khiết, có khả năng chữa bệnh và cứu giải.

Quy luật cân bằng theo vị trí của bộ Riêu-Y:

- Tại **Hãm** địa, đòn cân nghiêng về Thiên Riêu — tác họa dâm dục lấn át.
  Khả năng cứu giải của Thiên Y còn yếu, đặc tính phong lưu, dâm đãng và ám
  tinh bộc phát mạnh.
- Tại **Đắc** địa Dần, Mão, Thân, Dậu, đòn cân nghiêng về Thiên Y. Đặc tính
  y học, y dược của Thiên Y lấn át; dục tính của Thiên Riêu vẫn còn nhưng
  được Thiên Y giấu kín, kín đáo không lộ ra.

Như sen mọc trong bùn, đắc địa không khiến đương số mất đi ý nghĩa dâm dục
của Thiên Riêu, chỉ là khôn khéo che giấu mà thôi.`,
  },

  {
    id: 'rieu-y-hinh-tam-hop-y-duoc',
    title: 'Bộ Riêu-Y-Hình - Tam hợp y dược chuyên môn',
    sao: ['Thiên Riêu', 'Thiên Y'],
    ketHop: ['Thiên Hình'],
    doUuTien: 60,
    tomTat: `Bộ Riêu-Y-Hình gồm Thiên Riêu và Thiên Y luôn đồng cung, Thiên
Hình luôn tam hợp. Vai trò ba sao trong bộ:

- Thiên Y tượng trưng cho thuốc và y học, kiến thức chuyên môn
- Thiên Riêu tượng trưng cho thảo dược, sự tinh tế và nhạy bén
- Thiên Hình tượng trưng cho châm cứu, bấm huyệt, dao kéo — thể hiện kỷ
  luật trong điều trị

Khi đắc địa cả bộ, đương số có thể trở thành y sĩ, dược sĩ rất giỏi với
chuyên môn cao, là bác sĩ phẫu thuật dùng dao kéo cứu chữa hoặc thầy lang
châm cứu bấm huyệt.

Hệ quả khi bộ này đóng tại bất kỳ cung nào là thể chất của cung đó yếu ớt:
đương số thường xuyên đau yếu lặt vặt, hoặc bị bệnh mãn tính phải điều trị
thuốc men.`,
  },

  {
    id: 'rieu-y-hinh-hoi-cat-tinh',
    title: 'Bộ Riêu-Y-Hình + cát tinh - Y dược chuyên sâu',
    sao: ['Thiên Riêu', 'Thiên Y'],
    ketHop: ['Thiên Hình', 'Thiên Lương', 'Thiên Tướng', 'Phúc Đức', 'Hóa Khoa', 'Ân Quang', 'Thiên Quý'],
    doUuTien: 65,
    tomTat: `Khi bộ Riêu-Y-Hình hội cát tinh — Thiên Lương, Thiên Tướng, Phúc
Đức, Hóa Khoa hay Quang Quý — đương số có tính cẩn thận, ưa sạch sẽ và tỷ
mỉ. Đầu óc phân tích rõ ràng, chi ly. Đương số có năng khiếu cao về y dược,
thuốc men và thảo dược; chăm sóc bệnh nhân rất mát tay.`,
  },

  {
    id: 'thien-rieu-tam-am-rieu-da-ky',
    title: 'Bộ Tam Ám - Riêu Đà Kỵ - Đồng bóng tâm linh',
    sao: ['Thiên Riêu'],
    ketHop: ['Đà La', 'Hóa Kỵ'],
    doUuTien: 55,
    tomTat: `Bộ Tam Ám gồm Thiên Riêu, Đà La và Hóa Kỵ — ba ám tinh lớn nhất
trong tử vi. Bộ này chủ về ám tật, mờ ám và sự không may mắn; đương số có dục
vọng cao và rất kỵ khi đi cùng Thái Âm hay Thái Dương vì cản sáng Nhật Nguyệt.

Ở mặt tâm linh, đương số mang tâm lý đồng bóng và mê tín cao, hay đi lễ bái
chùa đền, xem tử vi, bói toán; một số nghiên cứu khoa học dự đoán. Đương số
có linh cảm và trực giác tốt, hay mơ ứng nghiệm và có thể hành nghề tâm linh.

Khi hội đủ Tam Ám, tính chất tâm linh trở nên mạnh mẽ và khó kiểm soát: đôi
khi đương số dễ bị ma tà ám, đi theo phá hoại; đầu óc thần kinh có vấn đề và
dễ trở nên điên dại.`,
  },

  {
    id: 'thien-rieu-dac-dia-dan-mao-than-dau',
    title: 'Thiên Riêu đắc địa Dần Mão Thân Dậu',
    sao: ['Thiên Riêu'],
    chi: ['Dần', 'Mão', 'Thân', 'Dậu'],
    doUuTien: 80,
    tomTat: `Khi **Thiên Riêu** ở **Đắc** địa tại Dần, Mão, Thân hoặc Dậu —
vị trí đẹp nhất của sao — đương số trở nên thông minh, khôn ngoan, kín kẽ;
có cơ mưu, học thuật cao thâm và uyên bác. Dáng vẻ phong lưu, thích đến nơi
ăn chơi vũ trường hộp đêm. Đúng nghĩa "sen mọc trong bùn", sắc dục của đương
số được giấu kín, không lộ ra.

Cần lưu ý rằng Thiên Riêu đắc địa vẫn không mất đi ý nghĩa dâm dục — chỉ là
được giấu kín, biến thành sự khôn khéo và kín đáo.

Về tài năng, đương số thông minh, có sở thích tìm hiểu nghề thuốc, châm cứu,
cứu chữa người. Khi hội nhiều phúc thiện tinh, đương số trở thành thầy thuốc,
dược sĩ giỏi.`,
  },

  {
    id: 'thien-rieu-cau-phu-hinh-rieu-nu-menh',
    title: 'Câu phú: Hình Riêu phận gái long đong',
    sao: ['Thiên Riêu'],
    cung: ['Mệnh'],
    gioiTinh: 'Nữ',
    ketHop: ['Thiên Hình'],
    doUuTien: 70,
    tomTat: `Câu phú nổi tiếng cảnh báo nữ mệnh có Thiên Riêu cùng Thiên Hình:

> "Hình, Riêu phận gái long đong
> Ví không lộn chồng ắt cũng phản phu"

Ý nghĩa câu phú là nữ mệnh có Hình và Riêu tại Mệnh thì đường tình duyên lận
đận, hoặc tái hôn đổi chồng, hoặc phản phu — lừa dối chồng, ngoại tình.

Đây là cách cục nữ rất xấu, đặc biệt khi đi cùng Đào Hoa, Hồng Loan, Kình
Dương, Đà La, Hóa Kỵ, Linh Tinh, Hỏa Tinh, Địa Không hay Địa Kiếp.

Hóa giải bằng cách tu thân, tăng đạo đức; có sao phúc thiện đi cùng như Thiên
Quan, Thiên Phúc, Quang Quý hay Tứ Đức sẽ giảm bớt tác họa.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP NỔI TIẾNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-rieu-co-luong-bac-sy-thay-thuoc',
    title: 'Riêu + Cơ Lương + Tả Hữu + Bác Sỹ - Thầy thuốc danh giá',
    sao: ['Thiên Riêu'],
    ketHop: ['Thiên Cơ', 'Thiên Lương'],
    doUuTien: 60,
    tomTat: `Khi Thiên Riêu đắc địa hội cùng Thiên Cơ, Thiên Lương, Tả Phù, Hữu
Bật và Bác Sỹ, đương số trở thành thầy thuốc danh giá cao tay. Phân tích bộ
sao này:

- Thiên Cơ và Thiên Lương là bộ chính tinh thiện thuộc tính bác sĩ, lương y
- Tả Phù và Hữu Bật là trợ tinh được người tin cậy
- Bác Sỹ là sao chuyên môn y học thuộc vòng Lộc Tồn
- Thiên Riêu đắc địa tượng trưng cho thảo dược, tinh tế và nhạy bén

Đương số nổi danh là thầy thuốc cao tay, mát tay chữa bệnh, được nhiều người
tìm đến.`,
  },

  {
    id: 'thien-rieu-thay-phu-thuy',
    title: 'Riêu + Tả Hữu + Hình Kỵ + Lưỡng Phù - Thầy phù thủy giỏi',
    sao: ['Thiên Riêu'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Tử Phù'],
    doUuTien: 55,
    tomTat: `Khi Thiên Riêu hội Tả Phù, Hữu Bật, Thiên Hình, Hóa Kỵ và lưỡng
phù gồm Tử Phù cùng Trực Phù, đương số trở thành thầy phù thủy rất giỏi.
Phân tích bộ sao:

- Tử Phù và Trực Phù là lưỡng phù trong vòng Thái Tuế
- Thiên Hình cùng Hóa Kỵ tượng trưng cho bùa chú
- Thiên Riêu là ám tinh, mang tính tâm linh
- Tả Phù và Hữu Bật là trợ lực

Đương số hành nghề phù thủy, đồng cốt, thầy pháp; có khả năng tâm linh mạnh,
cao tay và nổi tiếng. Khi hội thêm Thiên Khôi, Thiên Việt, Long Trì, Phượng
Các và Thiên Đồng, đương số thành thầy pháp cao tay nổi tiếng.`,
  },

  {
    id: 'thien-rieu-xuong-khuc-co-am-anh-sinh-ly',
    title: 'Riêu + Xương Khúc + Cơ - Ám ảnh sinh lý kiểu Hồ Xuân Hương',
    sao: ['Thiên Riêu'],
    ketHop: ['Văn Xương', 'Văn Khúc'],
    doUuTien: 55,
    tomTat: `Khi Thiên Riêu hội cùng Văn Xương, Văn Khúc và Thiên Cơ, đương số
bị dày vò vì nhu cầu sinh lý — ám ảnh sinh lý rất nặng. Đương số có khuynh
hướng sáng tác vần thơ dâm tình kiểu Hồ Xuân Hương và hết sức dâm đãng.

Bộ Văn Xương, Văn Khúc cùng Thiên Cơ vốn là bộ thông minh tài văn; khi gặp
Thiên Riêu, tài văn của đương số chuyển thành thơ ca dâm tình ẩn ý.`,
  },

  {
    id: 'thien-rieu-luc-sat-dao-hong-lang-lo',
    title: 'Riêu + lục sát + Đào Hồng - Lẳng lơ dâm đãng',
    sao: ['Thiên Riêu'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 55,
    tomTat: `Khi Thiên Riêu hội Hóa Kỵ, Đà La, Cự Môn, Linh Tinh, Hỏa Tinh,
Kình Dương, Địa Không, Địa Kiếp cùng Đào Hoa, Hồng Loan, đương số vừa lẳng
lơ vừa dâm đãng — bất kể trai hay gái, có hay chưa có gia đình. Yếu tố ngoại
tình và đa mang rất nặng, với nhiều hạng người và trong mọi hoàn cảnh.

Các bộ kết hợp khác cùng tính chất:

- Thiên Riêu cùng Thiên Đồng: đương số thay cũ đổi mới về sinh lý, có gia
  đình thì ngoại tình
- Thiên Riêu cùng Thai: rất dâm dục, có con riêng
- Thiên Riêu cùng Văn Khúc, Văn Xương: đương số có tánh dâm dật
- Thiên Riêu đắc địa cùng Lưu Hà: thông minh, công việc trôi chảy, có tính
  dâm ngầm`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // THIÊN RIÊU TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-rieu-tai-menh',
    title: 'Thiên Riêu tại Mệnh',
    sao: ['Thiên Riêu'],
    cung: ['Mệnh'],
    doUuTien: 75,
    tomTat: `Khi **Thiên Riêu** thủ Mệnh, đương số ham vui, thích chơi bời và
phóng đãng. Cơ thể nhiều lông, đa mao — cả nam lẫn nữ — ứng với đặc điểm nhu
cầu sinh lý cao.

Về tính cách, đương số dễ tin người, nhẹ dạ, tính tình không dứt khoát; khó
cầu công danh và thi cử.

Về bệnh lý, đương số dễ mắc bệnh ở bộ phận sinh dục như lậu, liệt dương, teo;
nhu cầu sinh lý cao khiến đầu óc luôn giằng co nội tâm. Đương số cũng dễ bị
bệnh âm, thần kinh và vong ám.`,
  },

  {
    id: 'thien-rieu-tai-menh-dac',
    sao: ['Thiên Riêu'],
    cung: ['Mệnh'],
    chi: ['Dần', 'Mão', 'Thân', 'Dậu'],
    doUuTien: 73,
    tomTat: `Khi Thiên Riêu **Đắc** địa tại Dần, Mão, Thân hoặc Dậu thủ Mệnh,
đương số có cơ mưu, học thuật uyên bác; dáng vẻ phong lưu, thích chơi bời
nhưng kín đáo.

Đắc địa hợp với các nghề như y dược, spa, làm tóc, bác sĩ phụ khoa - nam
khoa, hành nghề tâm linh.`,
  },

  {
    id: 'thien-rieu-tai-menh-ham',
    sao: ['Thiên Riêu'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    doUuTien: 73,
    tomTat: `Khi Thiên Riêu **Hãm** địa thủ Mệnh, đương số trở nên thâm độc, đa
nghi, giỏi ứng phó. Dung mạo đẹp đẽ và thích dâm dục; phần nhiều vì chuyện
sắc dục mà mang họa, phá gia bại sản.`,
  },

  {
    id: 'thien-rieu-tai-menh-ham-dao-hong',
    sao: ['Thiên Riêu'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 70,
    tomTat: `Khi Thiên Riêu **Hãm** địa đi cùng Đào Hoa và Hồng Loan tại Mệnh,
đặc tính dâm dục cùng sa ngã của đương số càng nặng — phá gia bại sản.`,
  },

  {
    id: 'thien-rieu-tai-menh-nu',
    sao: ['Thiên Riêu'],
    cung: ['Mệnh'],
    gioiTinh: 'Nữ',
    doUuTien: 70,
    tomTat: `Khi Thiên Riêu thủ Mệnh nữ, ứng với câu phú:

> "Hình Riêu phận gái long đong / Ví không lộn chồng ắt cũng phản phu".`,
  },

  {
    id: 'thien-rieu-tai-phu-mau',
    title: 'Thiên Riêu tại Phụ Mẫu',
    sao: ['Thiên Riêu'],
    cung: ['Phụ Mẫu'],
    doUuTien: 73,
    tomTat: `Khi **Thiên Riêu** đóng tại Phụ Mẫu, cha mẹ của đương số có tay
nghề khéo, sống bằng nghề liên quan đến sông nước. Cha mẹ có tài về nghệ
thuật, mỹ thuật, có hoa tay.

Về tâm linh, cha mẹ thích chuyện tâm linh, bói toán, xem tử vi; hay đi hầu
đồng và lễ đền chùa.`,
  },

  {
    id: 'thien-rieu-tai-phu-mau-sat-bai-tinh-dao-hoa',
    sao: ['Thiên Riêu'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp', 'Đào Hoa'],
    doUuTien: 70,
    tomTat: `Khi Thiên Riêu tại Phụ Mẫu hội sát bại tinh cùng đào hoa, duyên
giữa đương số và cha mẹ giảm; cha mẹ dễ có người bên ngoài, thường ăn nằm
trước rồi cưới sau.`,
  },

  {
    id: 'thien-rieu-tai-phu-mau-dac-phuc-thien',
    sao: ['Thiên Riêu'],
    cung: ['Phụ Mẫu'],
    trangThai: ['Đắc'],
    ketHop: ['Thiên Quan', 'Thiên Phúc'],
    doUuTien: 70,
    tomTat: `Khi Thiên Riêu **Đắc** địa hội phúc thiện tinh tại Phụ Mẫu, cha
mẹ của đương số làm dược sĩ, thầy thuốc cứu người, hoặc theo nghề cắt tóc,
spa.`,
  },

  {
    id: 'thien-rieu-tai-phuc-duc',
    title: 'Thiên Riêu tại Phúc Đức',
    sao: ['Thiên Riêu'],
    cung: ['Phúc Đức'],
    doUuTien: 73,
    tomTat: `Khi **Thiên Riêu** đóng tại Phúc Đức, dòng họ của đương số có nữ
lận đận tình duyên và nam phong lưu.

Đặc trưng dòng họ thể hiện rõ:

- Nữ trong dòng họ lận đận tình duyên chồng con; có ác tật, chết non, cô độc
- Nam trong dòng họ phóng đãng phong lưu, đi xa, có tài nghệ đặc biệt

Về tâm linh, dòng họ có người làm thầy bà, hành nghề tâm linh, truyền thừa
lại tới đời đương số. Bản thân đương số dễ có giác quan tâm linh mạnh.`,
  },

  {
    id: 'thien-rieu-tai-phuc-duc-dac',
    sao: ['Thiên Riêu'],
    cung: ['Phúc Đức'],
    trangThai: ['Đắc'],
    doUuTien: 70,
    tomTat: `Khi Thiên Riêu **Đắc** địa tại Phúc Đức, đương số có phúc lớn,
được tổ tiên phù hộ; mỗi khi mong cầu cứu giúp đều linh ứng. Mồ mả của tổ
tiên có cây cỏ mọc um tùm, xanh tốt; dễ có mồ kết linh thiêng.`,
  },

  {
    id: 'thien-rieu-tai-dien-trach',
    title: 'Thiên Riêu tại Điền Trạch',
    sao: ['Thiên Riêu'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Khi **Thiên Riêu** đóng tại Điền Trạch, nhà ở của đương số gần
nơi tâm linh, đền chùa miếu mạo. Nhà dễ có vong linh cư ngụ bên trong; nếu
hội thêm sao tâm linh khác, đương số dễ mở đền mở phủ tại nhà.

Về đặc điểm nhà cửa, nhà thường ở nơi ẩm ướt, cây cỏ mọc um tùm, trông cổ
quái và ma mị.

Khu vực xung quanh nhà thường gần nơi ăn chơi hưởng thụ, hay xảy ra nhiều tệ
nạn xã hội; nhiều cảnh gia đình lục đục, bồ bịch, phản bội.`,
  },

  {
    id: 'thien-rieu-tai-quan-loc',
    title: 'Thiên Riêu tại Quan Lộc',
    sao: ['Thiên Riêu'],
    cung: ['Quan Lộc'],
    doUuTien: 73,
    tomTat: `Khi **Thiên Riêu** đóng tại Quan Lộc, bản chất ám tinh của sao
cản trở và phá hoại công danh, học tập của đương số. Sao chỉ đẹp khi **Đắc**
địa.

Về tâm linh, đương số có thể là người hành nghề tâm linh, xem bói, xem tử
vi, làm thầy pháp.`,
  },

  {
    id: 'thien-rieu-tai-quan-loc-thien-hinh',
    sao: ['Thiên Riêu'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Hình'],
    doUuTien: 70,
    tomTat: `Khi Thiên Riêu đi cùng Thiên Hình tại Quan Lộc mà không có cát
tinh, đương số hợp với nghề làm tóc, spa.`,
  },

  {
    id: 'thien-rieu-tai-quan-loc-dac-phuc-thien',
    sao: ['Thiên Riêu'],
    cung: ['Quan Lộc'],
    trangThai: ['Đắc'],
    ketHop: ['Thiên Quan', 'Thiên Phúc'],
    doUuTien: 70,
    tomTat: `Khi Thiên Riêu **Đắc** địa hội phúc thiện tinh tại Quan Lộc, đương
số làm thầy thuốc, bác sĩ nam khoa, phụ khoa, sinh dục.`,
  },

  {
    id: 'thien-rieu-tai-quan-loc-khoi-viet-ta-huu-long-phuong-dong',
    sao: ['Thiên Riêu'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Khôi', 'Thiên Việt', 'Tả Phù', 'Hữu Bật', 'Long Trì', 'Phượng Các', 'Thiên Đồng'],
    doUuTien: 70,
    tomTat: `Khi Thiên Riêu tại Quan Lộc hội Thiên Khôi, Thiên Việt, Tả Phù,
Hữu Bật, Long Trì, Phượng Các và Thiên Đồng, đương số trở thành thầy pháp
cao tay nổi tiếng.`,
  },

  {
    id: 'thien-rieu-tai-quan-loc-dao-hoa-tinh',
    sao: ['Thiên Riêu'],
    cung: ['Quan Lộc'],
    ketHop: ['Đào Hoa', 'Hồng Loan', 'Thiên Hỷ'],
    doUuTien: 68,
    tomTat: `Khi Thiên Riêu tại Quan Lộc đi cùng đào hoa tinh, đương số được
quý mến nhưng dễ phát sinh tình cảm ngoài luồng tại nơi làm việc.`,
  },

  {
    id: 'thien-rieu-tai-no-boc',
    title: 'Thiên Riêu tại Nô Bộc',
    sao: ['Thiên Riêu'],
    cung: ['Nô Bộc'],
    doUuTien: 73,
    tomTat: `Khi **Thiên Riêu** đóng tại Nô Bộc, bè bạn và người giúp việc của
đương số nay ở mai đi, ham chơi nhưng có tài nghệ đặc biệt.

Về tâm linh, bạn bè của đương số có nhiều thầy đồng, cô đồng và những người
quan tâm tâm linh, bói toán; bản thân đương số hay làm công việc liên quan
giới tâm linh, thờ cúng.`,
  },

  {
    id: 'thien-rieu-tai-no-boc-ham',
    sao: ['Thiên Riêu'],
    cung: ['Nô Bộc'],
    trangThai: ['Hãm'],
    doUuTien: 70,
    tomTat: `Khi Thiên Riêu **Hãm** địa tại Nô Bộc, bạn bè và đồng nghiệp của
đương số ăn chơi, trác táng. Đương số dễ có quan hệ ngoài luồng với bạn bè
khác giới, sa vào tình một đêm.`,
  },

  {
    id: 'thien-rieu-tai-no-boc-dac-phuc-thien',
    sao: ['Thiên Riêu'],
    cung: ['Nô Bộc'],
    trangThai: ['Đắc'],
    ketHop: ['Thiên Quan', 'Thiên Phúc'],
    doUuTien: 70,
    tomTat: `Khi Thiên Riêu **Đắc** địa hội phúc thiện tinh tại Nô Bộc, bạn bè
của đương số có nhiều thầy thuốc, bác sĩ giỏi, mát tay bốc thuốc chữa bệnh
tốt.`,
  },

  {
    id: 'thien-rieu-tai-thien-di',
    title: 'Thiên Riêu tại Thiên Di',
    sao: ['Thiên Riêu'],
    cung: ['Thiên Di'],
    doUuTien: 73,
    tomTat: `Khi **Thiên Riêu** đóng tại Thiên Di, đương số ra ngoài không có
nơi chốn cố định, đa nghệ. Đương số hay thích tới những nơi ăn chơi, nhục
dục; có nhiều mối quan hệ không lành mạnh và sa vào tình một đêm. Khi đi xa
cũng dễ có ma tà, vong theo về. Đương số thích đi xem bói toán và lễ đền
chùa.`,
  },

  {
    id: 'thien-rieu-tai-thien-di-sat-tinh-dao-hoa',
    sao: ['Thiên Riêu'],
    cung: ['Thiên Di'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Đào Hoa', 'Hồng Loan'],
    doUuTien: 70,
    tomTat: `Khi Thiên Riêu tại Thiên Di hội sát tinh và đào hoa, đương số
vướng tình một đêm cùng các mối quan hệ sắc dục thiếu lành mạnh.`,
  },

  {
    id: 'thien-rieu-tai-thien-di-quan-phuc',
    sao: ['Thiên Riêu'],
    cung: ['Thiên Di'],
    ketHop: ['Thiên Quan', 'Thiên Phúc'],
    doUuTien: 70,
    tomTat: `Khi Thiên Riêu tại Thiên Di đi cùng Thiên Quan và Thiên Phúc,
đương số thường tới nơi chùa chiền, nghiên cứu huyền học, song vẫn nhạy cảm
với trường khí âm.`,
  },

  {
    id: 'thien-rieu-tai-tat-ach',
    title: 'Thiên Riêu tại Tật Ách',
    sao: ['Thiên Riêu'],
    cung: ['Tật Ách'],
    doUuTien: 76,
    tomTat: `Khi **Thiên Riêu** đóng tại Tật Ách, bệnh tật của đương số liên
quan đến máu huyết và bộ phận sinh dục; bệnh tật sinh ra do quan hệ tình dục
bừa bãi. Đương số dễ mắc bệnh âm, bệnh tâm linh, có liên quan đến ma tà;
thần kinh và sức khỏe không ổn định.

Đặc biệt khi sao Hãm địa, nhu cầu sinh lý của đương số rất cao và hay có đấu
tranh dữ dội bên trong nội tâm về vấn đề này, dẫn đến trạng thái tự ám thị
hoặc cô lập nội tâm.

Hóa giải bằng cách giữ chừng mực trong lối sống, tránh để dục vọng chi phối
tâm trí.`,
  },

  {
    id: 'thien-rieu-tai-tai-bach',
    title: 'Thiên Riêu tại Tài Bạch',
    sao: ['Thiên Riêu'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `Khi **Thiên Riêu** đóng tại Tài Bạch, tài lộc của đương số ra vào
thất thường. Đương số ưa thích cờ bạc, trò chơi giải trí, nghệ thuật; hoặc
phát tài qua nghề thuốc, nghề thầy giáo.

Về mặt tiêu cực, đương số dễ tốn tiền cho chuyện trai gái, cờ bạc, ăn chơi,
hút sắc, có thể làm các ngành nghề liên quan mảng trái xã hội.

Về tâm linh, đương số hay tiêu tốn tiền cho chuyện tâm linh, xem bói, giải
hạn; hoặc ngược lại làm thầy đồng, thầy pháp, thầy bói để kiếm tiền từ
chuyện tâm linh.`,
  },

  {
    id: 'thien-rieu-tai-tu-tuc',
    title: 'Thiên Riêu tại Tử Tức',
    sao: ['Thiên Riêu'],
    cung: ['Tử Tức'],
    doUuTien: 73,
    tomTat: `Khi **Thiên Riêu** đóng tại Tử Tức, đương số sinh nở khó khăn,
hoặc khó nuôi con, hoặc có con riêng của vợ, chồng. Con cái của đương số hay
chơi bời.

Về tâm linh, con cái của đương số hay tin vào tâm linh, bói toán.`,
  },

  {
    id: 'thien-rieu-tai-tu-tuc-ham',
    sao: ['Thiên Riêu'],
    cung: ['Tử Tức'],
    trangThai: ['Hãm'],
    doUuTien: 70,
    tomTat: `Khi Thiên Riêu **Hãm** địa tại Tử Tức, con cái của đương số sau
dễ chơi bời, phá tán; có đứa bỏ nhà theo trai hoặc theo gái, lăng nhăng tình
cảm.`,
  },

  {
    id: 'thien-rieu-tai-tu-tuc-dac',
    sao: ['Thiên Riêu'],
    cung: ['Tử Tức'],
    trangThai: ['Đắc'],
    doUuTien: 70,
    tomTat: `Khi Thiên Riêu **Đắc** địa tại Tử Tức, con cái của đương số trưởng
thành, thông minh; có đứa làm thầy thuốc, bác sĩ.`,
  },

  {
    id: 'thien-rieu-tai-tu-tuc-linh-hoa-da-ky-dong',
    sao: ['Thiên Riêu'],
    cung: ['Tử Tức'],
    ketHop: ['Linh Tinh', 'Hỏa Tinh', 'Đà La', 'Hóa Kỵ', 'Thiên Đồng'],
    doUuTien: 68,
    tomTat: `Khi Thiên Riêu tại Tử Tức hội Linh Tinh, Hỏa Tinh, Đà La, Hóa Kỵ
và Thiên Đồng, đương số có đứa con nặng căn, dễ có vấn đề về thần kinh.`,
  },

  {
    id: 'thien-rieu-tai-phu-the',
    title: 'Thiên Riêu tại Phu Thê',
    sao: ['Thiên Riêu'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `Khi **Thiên Riêu** đóng tại Phu Thê, người hôn phối của đương số
nhiều lông tóc, nhu cầu sinh lý cao, thường dễ ăn cơm trước kẻng.

Về tâm linh, người hôn phối thích chuyện tâm linh, bói toán, hay đi đền
chùa.`,
  },

  {
    id: 'thien-rieu-tai-phu-the-dac',
    sao: ['Thiên Riêu'],
    cung: ['Phu Thê'],
    trangThai: ['Đắc'],
    doUuTien: 73,
    tomTat: `Khi Thiên Riêu **Đắc** địa tại Phu Thê, vợ chồng đương số ưa thích
vui chơi, văn nghệ; là cặp phong lưu tài tử.`,
  },

  {
    id: 'thien-rieu-tai-phu-the-dac-phuc-thien',
    sao: ['Thiên Riêu'],
    cung: ['Phu Thê'],
    trangThai: ['Đắc'],
    ketHop: ['Thiên Quan', 'Thiên Phúc'],
    doUuTien: 70,
    tomTat: `Khi Thiên Riêu **Đắc** địa hội phúc thiện tinh tại Phu Thê, đương
số có người bạn đời làm thầy thuốc, bác sĩ giỏi.`,
  },

  {
    id: 'thien-rieu-tai-phu-the-ham',
    sao: ['Thiên Riêu'],
    cung: ['Phu Thê'],
    trangThai: ['Hãm'],
    doUuTien: 73,
    tomTat: `Khi Thiên Riêu **Hãm** địa tại Phu Thê, vợ chồng đương số rơi vào
cảnh "ông ăn chả, bà ăn nem". Đặc biệt khi có sát bại tinh đi cùng đào hoa
tinh, duyên vợ chồng khó bền — cả vợ cả chồng đều có tình nhân bên ngoài.`,
  },

  {
    id: 'thien-rieu-tai-huynh-de',
    title: 'Thiên Riêu tại Huynh Đệ',
    sao: ['Thiên Riêu'],
    cung: ['Huynh Đệ'],
    doUuTien: 73,
    tomTat: `Khi **Thiên Riêu** đóng tại Huynh Đệ, đương số dễ có anh chị em
dị bào hoặc anh chị em nuôi. Trong anh chị em có người phong lưu tài tử;
cũng có người bỏ nhà theo trai hoặc theo gái, ăn chơi lang bạt.`,
  },

  {
    id: 'thien-rieu-tai-huynh-de-dac-phuc-thien',
    sao: ['Thiên Riêu'],
    cung: ['Huynh Đệ'],
    trangThai: ['Đắc'],
    ketHop: ['Thiên Quan', 'Thiên Phúc'],
    doUuTien: 70,
    tomTat: `Khi Thiên Riêu **Đắc** địa hội phúc thiện tinh tại Huynh Đệ, anh
chị em của đương số giỏi giang; có người làm thầy thuốc, bác sĩ nổi tiếng.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // THIÊN RIÊU VÀO HẠN
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-rieu-han-bo-tai-han',
    title: 'Thiên Riêu vào hạn - Các bộ tai họa',
    sao: ['Thiên Riêu'],
    doUuTien: 50,
    tomTat: `Khi **Thiên Riêu** vào hạn, người già không sống lâu, trẻ hay
quấy. Các bộ kết hợp tai họa thường gặp:

- Riêu cùng Phá Toái: ốm đau, khẩu thiệt
- Riêu cùng Thai: dễ có con riêng
- Riêu cùng Tham Lang và Hóa Kỵ: tai nạn sông nước, khẩu thiệt, kiện tụng,
  lo buồn
- Riêu cùng Địa Không, Địa Kiếp và Thai: chửa hoang, bị hiếp dâm, bị bắt ép
  làm nghề mãi dâm
- Riêu cùng Thái Dương, Đà La và Hóa Kỵ: đau mắt nặng, đau yếu, hao tài; có
  quan chức thì bị truất giáng
- Riêu cùng Thiên Hình và Bệnh: bệnh phù
- Riêu cùng Thiên Hình, Bệnh và Địa Không, Địa Kiếp: bệnh phong tình như
  lậu, bệnh xã hội

Hạn ở hãm địa liên quan nhiều tới nhục dục, xác thịt và ăn chơi.`,
  },
];
