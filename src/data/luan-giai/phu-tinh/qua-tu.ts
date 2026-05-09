import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO QUẢ TÚ - Thổ, Ám Tinh.
 *
 * An theo NHÓM 3 CHI của năm sinh (engine).
 *
 * Quy luật bắt buộc: Quả Tú LUÔN tam hợp Cô Thần.
 *
 * Đặc trưng riêng:
 * - "Nữ kỵ Quả" — Quả Tú đi với NỮ mệnh phát tác mạnh nhất
 * - Quả Tú thiên về NỘI TÂM TRẦM MẶC (khác Cô Thần thiên về TÁCH BIỆT)
 * - Quả Tú Phúc Đức = nhà có BÀ CÔ TỔ linh thiêng (nữ mất sớm)
 *
 * Phần CHUNG cặp Cô-Quả đã viết tại file co-than.ts với
 * sao: ['Cô Thần', 'Quả Tú'].
 */
export const luanGiai_QuaTu: DoanLuanGiai[] = [
  {
    id: 'qua-tu-tinh-chat-chung',
    title: 'Quả Tú - Đặc tính chung',
    sao: ['Quả Tú'],
    doUuTien: 32,
    tomTat: `**Quả Tú** là phụ tinh thuộc nhóm Ám Tinh, mang ngũ hành Thổ. Sao
được an theo nhóm 3 chi năm sinh (do engine xử lý) và thường được gọi tắt là
"Quả".

Đặc tính cốt lõi của sao xoay quanh sự cô độc, khép kín và nỗi u buồn trong
nội tâm. Đương số có Quả Tú thường kín đáo, ít bộc lộ mặt tốt ra ngoài; dáng
vẻ trầm lặng, ít nói, khó hòa nhập với tập thể.

So với Cô Thần — vốn thiên về tách biệt khỏi tập thể — Quả Tú lại nghiêng về
nội tâm trầm mặc. Quy luật cơ bản của sao là luôn tam hợp hội chiếu với **Cô
Thần**. Câu "nam kỵ Cô, nữ kỵ Quả" cho thấy Quả Tú phát tác mạnh nhất với nữ
mệnh, đặc biệt kỵ chồng và cha.

Về tâm linh, Quả Tú đóng tại Phúc Đức ám chỉ trong nhà có "bà cô tổ" linh
thiêng phù trì — tức người nữ trong họ mất sớm khi còn trẻ.

Mặt sáng của sao này cũng đáng kể: khi gặp cát tinh, đương số có tư duy độc
lập, biết tự lo liệu, giữ kỷ luật, đôi khi mở ra cơ duyên với tâm linh và tu
tập.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // QUẢ TÚ TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'qua-tu-tai-menh',
    title: 'Quả Tú tại Mệnh',
    sao: ['Quả Tú'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `Khi Quả Tú thủ Mệnh, đương số toát ra thần thái lạnh lùng, gương
mặt u buồn và ít nói; không mấy khi chủ động giao du. Bạn bè vì thế thưa
thớt, các mối quan hệ khó gắn bó bền lâu. Sự cô độc khiến chủ mệnh hay cảm
thấy mình là "nạn nhân của số phận" — chán nản và ngại đổi thay.

Cần phân biệt Quả Tú và Cô Thần ở điểm này: Quả Tú thiên về nội tâm trầm mặc
(sâu sắc, lặng lẽ), còn Cô Thần thiên về sự tách biệt khỏi tập thể.

Điểm sáng của đương số là sự kiên nhẫn cùng ý chí cứng cỏi khi đối diện khó
khăn.

Khi cát tinh hội về như Hóa Khoa, Văn Xương, Văn Khúc, Thiên Khôi, Thiên Việt,
Thai Phụ, Phong Cáo, nét u buồn của chủ mệnh dần chuyển hóa thành sự sâu sắc.
Đương số được trọng vọng nhờ vẻ điềm đạm, chín chắn và học vấn vững vàng.

Khi hội Thiên Tướng, Thất Sát, Hóa Quyền, Tướng Quân, vẻ trầm lặng hóa thành
khí chất uy nghi; lời nói của đương số có sức nặng, dễ trở thành người cầm
quyền trong tập thể.`,
  },

  {
    id: 'qua-tu-tai-menh-nu-menh',
    title: 'Quả Tú tại Mệnh - Nữ mệnh',
    sao: ['Quả Tú'],
    cung: ['Mệnh'],
    gioiTinh: 'Nữ',
    doUuTien: 73,
    tomTat: `Theo câu "nữ kỵ Quả", Quả Tú thủ Mệnh phát tác mạnh nhất với nữ
mệnh — đặc biệt kỵ chồng và kỵ cha.

Đường tình duyên và hôn nhân của đương số trắc trở, sống cô độc trong nội tâm
ngay cả khi bên ngoài có đông người vây quanh. Cha hoặc chồng cũng dễ gặp tai
ương, bệnh tật hay xa cách.`,
  },

  {
    id: 'qua-tu-tai-phu-mau',
    title: 'Quả Tú tại Phụ Mẫu',
    sao: ['Quả Tú'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Khi Quả Tú tại Phụ Mẫu, cha mẹ đương số thường sống khép kín,
nghiêm khắc và ít sẻ chia.

Khi cát tinh hội về (Văn Xương, Văn Khúc, Thiên Khôi, Thiên Việt, Hóa Khoa),
cha mẹ là người có học thức và đạo đức; con cái trưởng thành sớm và hưởng
phúc ấm từ cha mẹ.

Khi sát tinh hội về, cha mẹ tình cảm lạnh nhạt, dễ bất hòa và chia ly; bản
thân cha mẹ cũng cô độc, hay buồn phiền — con cái sớm phải tự lực cánh sinh.`,
  },

  {
    id: 'qua-tu-tai-phu-mau-tuan',
    title: 'Quả Tú + Tuần tại Phụ Mẫu - cha hoặc mẹ yểu mệnh',
    sao: ['Quả Tú'],
    ketHop: ['Tuần'],
    cung: ['Phụ Mẫu'],
    doUuTien: 70,
    tomTat: `Khi Quả Tú đi cùng Tuần tại Phụ Mẫu, một bên cha hoặc mẹ của đương
số yểu mệnh.`,
  },

  {
    id: 'qua-tu-tai-phu-mau-triet',
    title: 'Quả Tú + Triệt tại Phụ Mẫu - cha hoặc mẹ yểu mệnh',
    sao: ['Quả Tú'],
    ketHop: ['Triệt'],
    cung: ['Phụ Mẫu'],
    doUuTien: 70,
    tomTat: `Khi Quả Tú đi cùng Triệt tại Phụ Mẫu, một bên cha hoặc mẹ của
đương số yểu mệnh.`,
  },

  {
    id: 'qua-tu-tai-phu-mau-khong-kiep-dai-hao',
    title: 'Quả Tú + Không Kiếp + Đại Hao tại Phụ Mẫu - phúc ấm suy giảm',
    sao: ['Quả Tú'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Đại Hao'],
    cung: ['Phụ Mẫu'],
    doUuTien: 70,
    tomTat: `Khi Quả Tú hội cùng Địa Không, Địa Kiếp và Đại Hao tại Phụ Mẫu,
phúc ấm gia đình suy giảm — đúng câu "đời cha ăn mặn, con khát nước". Con cái
phải chịu hệ lụy từ những việc của cha mẹ trước đó.`,
  },

  {
    id: 'qua-tu-tai-phuc-duc-ba-co-to',
    title: 'Quả Tú tại Phúc Đức - Bà Cô Tổ linh thiêng',
    sao: ['Quả Tú'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `Khi Quả Tú tại Phúc Đức, sao tạo nên sự xa cách trong dòng họ.

Khi cát tinh hội về (Thiên Đức, Long Trì, Phượng Các, Thiên Việt), gia tộc
được hưởng phúc nhờ "bà cô tổ" phù trì; con cháu duyên đến muộn nhưng hôn
nhân lại yên ấm.

Đây cũng là tâm linh đặc biệt của Quả Tú tại Phúc Đức: nhà có bà cô tổ linh
thiêng — tức người nữ mất sớm khi còn trẻ trở thành bà cô tổ phù trì cho hậu
duệ.

Khi sát tinh hội về, gia tộc phân tán, mồ mả không tụ; con cháu phải tha
hương.`,
  },

  {
    id: 'qua-tu-tai-phuc-duc-khong-kiep-tuan',
    title: 'Quả Tú + Không Kiếp + Tuần tại Phúc Đức - tuyệt tự',
    sao: ['Quả Tú'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Tuần'],
    cung: ['Phúc Đức'],
    doUuTien: 73,
    tomTat: `Khi Quả Tú hội cùng Địa Không, Địa Kiếp và Tuần tại Phúc Đức,
phúc của đương số mỏng, thọ yếu và có nguy cơ tuyệt tự.`,
  },

  {
    id: 'qua-tu-tai-phuc-duc-khong-kiep-triet',
    title: 'Quả Tú + Không Kiếp + Triệt tại Phúc Đức - tuyệt tự',
    sao: ['Quả Tú'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Triệt'],
    cung: ['Phúc Đức'],
    doUuTien: 73,
    tomTat: `Khi Quả Tú hội cùng Địa Không, Địa Kiếp và Triệt tại Phúc Đức,
phúc của đương số mỏng, thọ yếu và có nguy cơ tuyệt tự.`,
  },

  {
    id: 'qua-tu-tai-phuc-duc-nu-doan-menh',
    title: 'Quả Tú tại Phúc Đức + sát tinh - Nữ đoản mệnh',
    sao: ['Quả Tú'],
    cung: ['Phúc Đức'],
    gioiTinh: 'Nữ',
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Khi Quả Tú tại Phúc Đức gặp sát tinh hội về (Kình Dương, Đà La,
Hỏa Tinh, Linh Tinh, Địa Không, Địa Kiếp) trên lá số nữ mệnh, phụ nữ trong
dòng họ dễ đoản mệnh, mất sớm — đường thọ yếu hơn nam giới trong gia tộc.`,
  },

  {
    id: 'qua-tu-tai-dien-trach',
    title: 'Quả Tú tại Điền Trạch',
    sao: ['Quả Tú'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Khi Quả Tú tại Điền Trạch, sao liên quan trực tiếp tới đất đai,
mồ mả và nhà cửa của đương số.

Khi sát tinh hội về, điền sản khó bền, dễ xảy ra tranh chấp, hao hụt và phân
tán; trong nhà thường có phụ nữ đoản duyên. Sinh hoạt khép kín, đương số khó
hòa thuận với làng xóm.

Khi cát tinh hội về, đất nhà vững chắc; đời sau có duyên gây dựng bất động
sản bền lâu. Gia đạo ổn định; giao tiếp ngoài xã hội tuy không nhiều nhưng
giữ được sự yên ả, ít thị phi.`,
  },

  {
    id: 'qua-tu-tai-quan-loc',
    title: 'Quả Tú tại Quan Lộc',
    sao: ['Quả Tú'],
    cung: ['Quan Lộc'],
    doUuTien: 75,
    tomTat: `Khi Quả Tú tại Quan Lộc, đương số phải "đơn thương độc mã" trên
con đường sự nghiệp — tự mình gánh vác công danh, ít được dựa dẫm vào người
khác. Cách cục phù hợp với những nghề nghiên cứu, quản lý tài sản và hành
chính.

Khi cát tinh hội về, sự nghiệp bền vững, hợp với những công việc đòi hỏi tự
chủ.

Khi sát tinh hội về (Kình Dương, Đà La, Địa Không, Địa Kiếp, Hóa Kỵ), công
danh thăng trầm; đương số dễ bị cô lập, thất bại trong hợp tác — tệ hơn còn
vướng tranh chấp và kiện tụng.

Một đặc trưng môi trường của Quả Tú: nơi đương số làm việc thường ít nữ và
nhiều nam (ngược lại với Cô Thần là ít nam, nhiều nữ).`,
  },

  {
    id: 'qua-tu-tai-no-boc',
    title: 'Quả Tú tại Nô Bộc',
    sao: ['Quả Tú'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Khi Quả Tú tại Nô Bộc, quan hệ xung quanh đương số không nhiều
nhưng phần đa đáng tin cậy.

Khi cát tinh hội về, cộng sự của chủ mệnh trung thành, sẵn sàng "kề vai sát
cánh" lúc cần.

Khi sát tinh hội về (Hóa Kỵ, Địa Không, Địa Kiếp), tình bạn rơi vào cảnh
"sớm nở tối tàn"; đương số dễ bị phản bội, gặp tai bay vạ gió vì bị bạn bè
ảnh hưởng — cấp dưới cũng thiếu gắn bó.

Đặc trưng giới tính của Quả Tú: bạn bè ít nữ, nhiều nam.`,
  },

  {
    id: 'qua-tu-tai-thien-di',
    title: 'Quả Tú tại Thiên Di',
    sao: ['Quả Tú'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `Khi Quả Tú tại Thiên Di, đương số ra ngoài thận trọng, ít kết bạn
mới.

Khi sát tinh hội về, ra ngoài chủ mệnh dễ gặp thị phi và tranh chấp, bị hiểu
lầm và cản trở; quan hệ xã giao mong manh, nhanh tàn — có thể "rước họa vào
thân".

Khi cát tinh hội về, dù ít nói và giữ khoảng cách, đương số gây ấn tượng nhờ
tài năng và uy tín. Mạng lưới ngoại giao tuy ít nhưng chất lượng — chủ mệnh
được nhiều nam giới nể trọng và giúp đỡ.

Đặc trưng giới tính của Quả Tú tại Thiên Di: đương số tiếp xúc nhiều với đàn
ông, mạng lưới quan hệ thừa nam thiếu nữ.`,
  },

  {
    id: 'qua-tu-tai-tat-ach',
    title: 'Quả Tú tại Tật Ách',
    sao: ['Quả Tú'],
    cung: ['Tật Ách'],
    doUuTien: 76,
    tomTat: `Khi Quả Tú tại Tật Ách, đương số ốm đau không ai hay, hoạn nạn
không ai biết.

Đặc trưng bệnh thường gặp:

- Bệnh đường tiêu hóa, hậu môn, trĩ
- Bệnh mãn tính hay tái lại
- Tai họa thường đến âm thầm, nhất là khi đương số ở một mình

Cảnh báo cần lưu ý: cách cục để lại hậu quả nghiêm trọng nếu không được phát
hiện và xử lý kịp thời.

Khi cát tinh hội về, sức khỏe đương số tuy không dồi dào nhưng nhờ biết giữ
thói quen sống điều độ nên bệnh tật phòng ngừa được, tai nạn cũng giảm nhẹ.`,
  },

  {
    id: 'qua-tu-tai-tai-bach',
    title: 'Quả Tú tại Tài Bạch',
    sao: ['Quả Tú'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `Khi Quả Tú tại Tài Bạch, tài chính của đương số kém ổn định và
khó tích lũy.

Khi sát tinh vây hãm, việc kinh doanh buôn bán trắc trở, hay hao hụt — đúng
kiểu "tiền vào cửa trước, ra cửa sau".

Khi cát tinh hội về (Vũ Khúc, Lộc Tồn, Đẩu Quân), khả năng quản lý tài chính
của đương số tốt; tuy không phát tài bất ngờ, thu nhập vẫn ổn định và chủ
mệnh "góp gió thành bão" mà nên cơ nghiệp.`,
  },

  {
    id: 'qua-tu-tai-tu-tuc',
    title: 'Quả Tú tại Tử Tức',
    sao: ['Quả Tú'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Khi Quả Tú tại Tử Tức, đường con cái không như ý — đương số khó
thấy được cảnh "con đàn cháu đống".

Khi sát tinh đồng cung, sinh nở dễ rơi vào hiếm muộn, con khó nuôi; cha mẹ
con cái xa mặt cách lòng, ít có sự sẻ chia.

Khi cát tinh nâng đỡ, dù ít con nhưng đương số sinh được con hiếu thuận,
thông minh, có chí lập thân và dễ thành đạt.

Chênh lệch giới tính của Quả Tú: ít con gái (ngược với Cô Thần là ít con
trai).`,
  },

  {
    id: 'qua-tu-tai-phu-the',
    title: 'Quả Tú tại Phu Thê',
    sao: ['Quả Tú'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `Khi Quả Tú tại Phu Thê, sao tác động trực tiếp tới đời sống hôn
nhân của đương số.

Khi cát tinh hội về (bộ Tứ Đức cùng Lục Cát Tinh), hôn nhân yên ổn; vợ chồng
"dĩ hòa vi quý", biết tôn trọng khoảng trời riêng của nhau. Đời sống gia
đình tuy không quá ngọt ngào nhưng yên ấm; con cái được chăm sóc chu toàn.

Khi đồng cung Tuần, Triệt, Địa Không, Địa Kiếp hay Hồng Loan, tình cảm rơi
vào cảnh "cơm chẳng lành, canh chẳng ngọt"; vợ chồng hay bất đồng và xa
cách. Hôn nhân mang màu cô độc, không có sự thấu hiểu.`,
  },

  {
    id: 'qua-tu-tai-phu-the-nu-menh',
    title: 'Quả Tú tại Phu Thê - Nữ mệnh',
    sao: ['Quả Tú'],
    cung: ['Phu Thê'],
    gioiTinh: 'Nữ',
    doUuTien: 73,
    tomTat: `Theo câu "nữ kỵ Quả", Quả Tú tại Phu Thê đặc biệt phát tác mạnh
với nữ mệnh — kỵ chồng, kỵ cha.

Đương số hôn nhân muộn hoặc gặp trục trặc; người chồng dễ gặp tai ương, đau
ốm hay xa cách. Dù đã thành gia thất, chủ mệnh vẫn sống trong nỗi cô độc nội
tâm.`,
  },

  {
    id: 'qua-tu-tai-huynh-de',
    title: 'Quả Tú tại Huynh Đệ',
    sao: ['Quả Tú'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Khi Quả Tú tại Huynh Đệ, sự gắn kết trong tình thân của đương số
giảm sút.

Khi hội cùng Cô Thần, Tuần, Triệt, Địa Không hay Địa Kiếp, cách cục ly tán
hiện rõ rệt — anh chị em "bằng mặt không bằng lòng", mạnh ai nấy sống.

Khi cát tinh hội về, anh chị em ít nhưng "nghĩa nặng tình thâm"; dù mỗi
người một nơi vẫn biết đùm bọc, giúp đỡ nhau cả về tinh thần lẫn vật chất.

Chênh lệch giới tính của Quả Tú: đương số ít chị em gái; nếu mình là gái thì
dễ có anh em trai.`,
  },
];
