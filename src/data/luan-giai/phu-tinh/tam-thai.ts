import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO TAM THAI - Thủy, Cát Tinh.
 *
 * CHỨA PHẦN CHUNG CỦA CẶP TAM THAI - BÁT TỌA (tag ['Tam Thai', 'Bát Tọa']).
 *
 * QUY LUẬT VỊ TRÍ:
 * - Tam Thai an theo NGÀY SINH từ Tả Phù THUẬN
 * - Bát Tọa an theo NGÀY SINH từ Hữu Bật NGHỊCH
 * - Là KẾT QUẢ phò tá của Tả Phù - Hữu Bật
 *
 * BẢN CHẤT CẶP:
 * - Cặp CÁT TINH QUYỀN QUÝ
 * - Chủ về ĐỊA VỊ, SỰ BỆ VỆ, KHOA BẢNG HANH THÔNG
 * - Tượng trưng cho THÀNH QUẢ TỐT ĐẸP, MAY MẮN ĐƯỢC BAN SẴN
 * - KHÔNG cần phải tranh đấu vất vả
 * - Tọa cung nào cũng MANG LẠI TỐT LÀNH cho cung đó
 *
 * Đặc trưng riêng Tam Thai (Thủy):
 * - Hình tượng VẦNG TRÁN
 * - Bệ vệ, khoa giáp, quý hiển, tốt lành, may mắn, khoan hồng
 * - Có khả năng GIẢI TRỪ tai nạn và bệnh tật nhỏ
 */
export const luanGiai_TamThai: DoanLuanGiai[] = [
  // ═══════════════════════════════════════════════════════════════════════
  // PHẦN CHUNG CỦA CẶP TAM THAI - BÁT TỌA
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'tam-thai-bat-toa-tinh-chat-chung',
    title: 'Tam Thai - Bát Tọa - Cặp Cát Tinh Quyền Quý',
    sao: ['Tam Thai', 'Bát Tọa'],
    doUuTien: 35,
    tomTat: `**Tam Thai** và **Bát Tọa** là cặp cát tinh quyền quý, chủ về địa vị,
sự bệ vệ và khoa bảng hanh thông cho đương số.

Đặc tính của cặp sao này khá thú vị:

- Là kết quả của quá trình phò tá của Tả Phù và Hữu Bật
- Tam Thai an theo ngày sinh từ Tả Phù thuận
- Bát Tọa an theo ngày sinh từ Hữu Bật nghịch

Vai trò chủ đạo:

- Tượng trưng cho thành quả tốt đẹp
- Đem lại may mắn được ban sẵn mà đương số không cần tranh đấu vất vả
- Tọa cung nào cũng mang lại tốt lành cho cung đó
- Làm đẹp mọi cung sao mà chúng đứng

Cặp sao này có hai mặt rõ rệt: khi đi cùng cát tinh, đương số quý hiển
hiển đạt thuận lợi; nhưng khi đi cùng sát bại tinh, tính tốt bị lấn át,
đương số dễ thành lười biếng, ỷ lại, "ngồi mát ăn bát vàng".`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP CHUNG CẶP
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'tam-thai-bat-toa-ta-huu-da-phu-the-che-hoa',
    title: 'Tam Thai - Bát Tọa + Tả Hữu Phu Thê - Chế hóa đa phu thê',
    sao: ['Tam Thai', 'Bát Tọa'],
    cung: ['Phu Thê'],
    ketHop: ['Tả Phù', 'Hữu Bật'],
    doUuTien: 60,
    tomTat: `Khi **Tam Thai Bát Tọa** đi cùng **Tả Phù** và **Hữu Bật** đồng cung tại
Phu Thê, đương số được chế hóa phần nào cách đa phu thê.

Vốn dĩ Tả Hữu đồng cung Phu Thê tạo cách đa phu thê (hai đời chồng hay
hai đời vợ). Tam Thai Bát Tọa hội tụ giúp chế hóa phần ảnh hưởng xấu
đó, giảm bớt khả năng đương số phải qua nhiều cuộc hôn nhân. Đây là
cách hóa giải đặc biệt cho cặp Tả Hữu Phu Thê.`,
  },

  {
    id: 'tam-thai-bat-toa-khoi-viet-xuong-khuc-tu-tuc',
    title: 'Tam Thai - Bát Tọa + Khôi Việt + Xương Khúc tại Tử Tức - Con thành đạt',
    sao: ['Tam Thai', 'Bát Tọa'],
    cung: ['Tử Tức'],
    ketHop: ['Thiên Khôi', 'Thiên Việt', 'Văn Xương', 'Văn Khúc'],
    doUuTien: 65,
    tomTat: `Khi Tam Thai Bát Tọa hội Thiên Khôi, Thiên Việt, **Văn Xương**, **Văn Khúc**
tại Tử Tức, con cái đương số càng thành đạt và tài giỏi.

Đặc trưng đường con cái:

- Nhiều con, ngoan ngoãn hiền lương
- Việc nuôi dạy con nhàn nhã, dễ dàng
- Con không trở thành gánh nặng cho cha mẹ

Đây là bộ tổ hợp cực đẹp cho cung Tử Tức.`,
  },

  {
    id: 'tam-thai-bat-toa-tu-vi-thai-duong-khoa-quan',
    title: 'Tam Thai - Bát Tọa + Tử Vi + Thái Dương + Hóa Khoa Quan - Sự nghiệp rực rỡ',
    sao: ['Tam Thai', 'Bát Tọa'],
    cung: ['Quan Lộc'],
    ketHop: ['Tử Vi', 'Thái Dương', 'Hóa Khoa'],
    doUuTien: 65,
    tomTat: `Khi Tam Thai Bát Tọa hội Tử Vi, Thái Dương và Hóa Khoa tại Quan Lộc,
sự nghiệp đương số rực rỡ và thăng tiến dễ dàng.

Đặc trưng cách cục:

- Con đường sự nghiệp càng rực rỡ
- Dễ dàng thăng tiến
- Không cần bon chen nhiều mà vẫn có vị thế, uy tín, danh tiếng

Đây là quý cách cho người làm chính trị, công chức hoặc giáo dục cao
cấp.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP XẤU
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'tam-thai-bat-toa-tuan-triet-ngan-tro',
    title: 'Tam Thai - Bát Tọa + Tuần Triệt - Ngăn trở',
    sao: ['Tam Thai', 'Bát Tọa'],
    ketHop: ['Tuần', 'Triệt'],
    doUuTien: 55,
    tomTat: `Khi Tam Thai Bát Tọa bị Tuần hoặc Triệt án ngữ, sự an nhàn và may mắn
vốn có bị phá vỡ.

Tam Thai Bát Tọa vốn là cát tinh "may mắn ban sẵn", nhưng Tuần Triệt
làm mất đi tính chất tốt lành đặc trưng đó.`,
  },

  {
    id: 'tam-thai-bat-toa-tuan-triet-tam-cung',
    title: 'Tam Thai - Bát Tọa + Tuần Triệt tại Mệnh/Tài/Quan',
    sao: ['Tam Thai', 'Bát Tọa'],
    cung: ['Mệnh', 'Tài Bạch', 'Quan Lộc'],
    ketHop: ['Tuần', 'Triệt'],
    doUuTien: 60,
    tomTat: `Khi Tam Thai Bát Tọa bị Tuần hoặc Triệt án ngữ tại Mệnh, Tài Bạch
hoặc Quan Lộc, sự an nhàn và may mắn vốn có bị phá vỡ. Con đường công
danh thay vì bằng phẳng lại trở nên gập ghềnh, khó khăn; sự quý hiển
bị giảm sút; đương số phải nỗ lực nhiều mới có thể đạt được thành tựu.`,
  },

  {
    id: 'tam-thai-bat-toa-hong-dao-thi-phi-ai-tinh',
    title: 'Tam Thai - Bát Tọa + Hồng Đào Mệnh/Nô/Phu - Thị phi ái tình',
    sao: ['Tam Thai', 'Bát Tọa'],
    cung: ['Mệnh', 'Nô Bộc', 'Phu Thê'],
    ketHop: ['Hồng Loan', 'Đào Hoa'],
    doUuTien: 55,
    tomTat: `Khi Tam Thai Bát Tọa hội Hồng Loan và Đào Hoa tại Mệnh, Nô Bộc hoặc
Phu Thê, đương số dễ vướng thị phi liên quan ái tình.

Mặt tốt: mối tình hoặc cuộc hôn nhân của đương số thường gắn với người
có địa vị, được nhiều người ngưỡng mộ.

Mặt xấu: do Tam Thai Bát Tọa mang nét bệ vệ danh giá, đương số dễ nổi
bật giữa đám đông; chuyện tình cảm vì thế dễ bị công chúng chú ý, soi
mói, dẫn đến thị phi và đàm tiếu.

Đặc biệt nguy hiểm khi đi kèm Kình Đà, Không Kiếp, Hóa Kỵ hay Thiên
Riêu — càng ứng nghiệm mạnh, hôn nhân dễ đổ vỡ vì thị phi, đương số
mất danh dự.`,
  },

  {
    id: 'tam-thai-bat-toa-sat-bai-luoi-bieng',
    title: 'Tam Thai - Bát Tọa + sát bại tinh - Lười biếng ỷ lại',
    sao: ['Tam Thai', 'Bát Tọa'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 55,
    tomTat: `Khi Tam Thai Bát Tọa hội nhiều sát bại tinh, tính tốt vốn có bị lấn
át, đương số trở nên lười biếng và ỷ lại.

Đặc trưng:

- Tính tốt của Tam Thai Bát Tọa bị lấn át
- Đương số trở nên lười biếng, "ngồi mát ăn bát vàng"
- Không có chí tiến thủ
- Chỉ thích hưởng thụ, ỷ lại
- Khó làm nên nghiệp lớn`,
  },

  {
    id: 'tam-thai-bat-toa-khong-kiep-tai-bach-luoi',
    title: 'Tam Thai - Bát Tọa + Không Kiếp tại Tài Bạch - lười kiếm tiền',
    sao: ['Tam Thai', 'Bát Tọa'],
    cung: ['Tài Bạch'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 60,
    tomTat: `Khi Tam Thai Bát Tọa đi cùng Địa Không và Địa Kiếp tại Tài Bạch,
đương số dễ trở nên lười biếng, không quan tâm kiếm tiền và để hao
hụt tài sản sẵn có.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // TAM THAI - BÁT TỌA TẠI 12 CUNG (TAG CHUNG CẶP)
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'tam-thai-tai-menh',
    title: 'Tam Thai tại Mệnh - Khôn ngoan phúc hậu an nhàn',
    sao: ['Tam Thai'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Đương số có **Tam Thai** thủ Mệnh chủ sự khôn ngoan, phúc hậu và an
nhàn.

Về hình thể, Tam Thai tượng trưng cho vầng trán: trán đương số vuông
và cao, cho cảm giác uy nghi vững chãi. Dáng điệu bệ vệ, khoan thai;
đi đứng từ tốn, bình tĩnh.

Về tính cách, đương số khôn ngoan và phúc hậu, tính tình ôn hòa, đặc
biệt yêu thích sự thanh nhàn, không muốn bon chen cạnh tranh với đời.

Về công danh:

- Khi hội cùng nhiều cát tinh, đương số quý hiển và dễ đạt thành công
  lớn
- Khi đơn thủ, cuộc sống an phận, bình bình; không có địa vị quá cao
  nhưng cũng không khổ cực

Khi gặp nhiều sát bại tinh, tính tốt của Tam Thai bị lấn át: đương số
trở nên lười biếng, "ngồi mát ăn bát vàng", không có chí tiến thủ,
chỉ thích hưởng thụ và ỷ lại, khó làm nên nghiệp lớn.`,
  },

  {
    id: 'tam-thai-tai-phu-mau',
    title: 'Tam Thai tại Phụ Mẫu - Cách "giáp Thai giáp Tọa"',
    sao: ['Tam Thai', 'Bát Tọa'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Tam Thai Bát Tọa đóng Phụ Mẫu là vị trí rất đẹp, gọi là cách "**giáp
Thai giáp Tọa**".

Đặc trưng:

- Cha mẹ là người danh giá, có tiếng tăm
- Tính tình hiền lương, khoan thai
- Đương số sinh ra trong gia đình có nền tảng tốt
- Tạo điều kiện thuận lợi để đương số phát triển và thành công sớm
- Cha mẹ không phải gánh nặng
- Mối quan hệ gia đình giảm bớt xung khắc

Cách "giáp Thai giáp Tọa" hình thành khi bản cung được Tam Thai và
Bát Tọa giáp hai bên — quý cách, đương số được nâng đỡ rõ rệt từ
phía cha mẹ.`,
  },

  {
    id: 'tam-thai-tai-phuc-duc',
    title: 'Tam Thai tại Phúc Đức',
    sao: ['Tam Thai'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `Tam Thai đóng Phúc Đức cho thấy đương số hưởng phúc lớn từ tổ tiên.

Đặc trưng:

- Hưởng phúc lớn từ tổ tiên
- Dòng họ có nhiều người danh giá, thành đạt
- Mồ mả ông bà thường được quy tụ một nơi yên ổn và đẹp đẽ
- Bản thân đương số được gia tăng phúc thọ
- Giảm thiểu tai họa
- Gặp nhiều may mắn, có quý nhân phù trợ`,
  },

  {
    id: 'tam-thai-tai-dien-trach',
    title: 'Tam Thai tại Điền Trạch',
    sao: ['Tam Thai'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Tam Thai đóng Điền Trạch tượng trưng cho nhà cửa khang trang bề thế.

Sao này mang lại may mắn và thuận lợi trong việc tạo dựng nhà cửa,
đất đai. Đương số dễ có nhà cao cửa rộng, hoặc được thừa hưởng tài
sản mà không cần làm việc vất vả.`,
  },

  {
    id: 'tam-thai-tai-quan-loc',
    title: 'Tam Thai tại Quan Lộc',
    sao: ['Tam Thai'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `Tam Thai đóng Quan Lộc cho thấy con đường công danh, học hành, thi
cử của đương số thuận lợi. Đương số gặp nhiều may mắn trong công
việc, không phải cạnh tranh gay gắt mà vẫn có vị thế và uy tín.

Khi hội thêm cát tinh như Tử Vi, Thái Dương hay Hóa Khoa, sự nghiệp
càng rực rỡ, dễ dàng thăng tiến và không cần bon chen nhiều.`,
  },

  {
    id: 'tam-thai-tai-no-boc',
    title: 'Tam Thai tại Nô Bộc',
    sao: ['Tam Thai'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Tam Thai đóng Nô Bộc cho thấy bạn bè đương số nhiều người danh giá,
chức phận cao.

Đặc trưng quan hệ:

- Đương số có nhiều bạn bè, đồng nghiệp tốt
- Trong số đó có người danh giá, chức phận cao
- Mối quan hệ với bạn bè và cấp dưới chân thành, hòa thuận
- Ít khi phải lo bị phản bội hay hãm hại

Nếu đương số làm thầy, dễ có học trò giỏi giang và thành đạt — hợp
với nghề giáo viên hay đào tạo.`,
  },

  {
    id: 'tam-thai-tai-thien-di',
    title: 'Tam Thai tại Thiên Di',
    sao: ['Tam Thai'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `Tam Thai đóng Thiên Di cho thấy đương số khi ra ngoài có phong thái
oai vệ, được nhiều người yêu mến và kính trọng.

Đặc trưng cuộc sống bên ngoài:

- Mọi việc đều hanh thông, thuận lợi
- Dễ có quý nhân giúp đỡ
- Thường lui tới những nơi sang trọng, tao nhã
- Dễ dàng tạo dựng được thành tựu và danh tiếng ở phương xa`,
  },

  {
    id: 'tam-thai-tai-tat-ach',
    title: 'Tam Thai tại Tật Ách - Giải tai bệnh nhỏ',
    sao: ['Tam Thai'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `Tam Thai đóng Tật Ách là phúc tinh, có khả năng giải trừ tai nạn và
bệnh tật nhỏ cho đương số.

Đặc trưng bảo hộ:

- Giúp giảm thiểu ưu phiền về sức khỏe
- Biến bệnh nặng thành nhẹ
- Họa lớn thành nhỏ

Khi đương số qua đời cũng nhẹ nhàng, thanh thản, được nhiều người có
chức quyền đến thăm viếng.`,
  },

  {
    id: 'tam-thai-tai-tai-bach',
    title: 'Tam Thai tại Tài Bạch',
    sao: ['Tam Thai'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `Tam Thai đóng Tài Bạch cho thấy tiền bạc đến thuận lợi mà đương số
không cần vất vả.

Đặc trưng dòng tiền:

- Sao này mang lại may mắn và dễ dàng trong việc cầu tài
- Đương số không phải vất vả cạnh tranh mà tiền bạc vẫn đến thuận lợi
- Thường được người khác hỗ trợ

Tuy nhiên khi gặp Địa Không và Địa Kiếp, đương số dễ trở nên lười
biếng, không quan tâm đến việc kiếm tiền và có nguy cơ hao hụt tài
sản sẵn có.`,
  },

  {
    id: 'tam-thai-tai-tu-tuc',
    title: 'Tam Thai tại Tử Tức',
    sao: ['Tam Thai'],
    cung: ['Tử Tức'],
    doUuTien: 78,
    tomTat: `Tam Thai đóng Tử Tức gia tăng số lượng con cái cho đương số, con cái
ngoan ngoãn và hiền lương.

Đặc trưng:

- Gia tăng số lượng con cái
- Việc nuôi dạy con nhàn nhã, dễ dàng
- Con cái ngoan ngoãn, hiền lương
- Không phải gánh nặng cho cha mẹ`,
  },

  {
    id: 'tam-thai-tai-tu-tuc-khoi-viet-xuong-khuc',
    title: 'Tam Thai + Khôi Việt + Xương Khúc tại Tử Tức - con thành đạt',
    sao: ['Tam Thai'],
    ketHop: ['Thiên Khôi', 'Thiên Việt', 'Văn Xương', 'Văn Khúc'],
    cung: ['Tử Tức'],
    doUuTien: 73,
    tomTat: `Khi Tam Thai hội Thiên Khôi, Thiên Việt, Văn Xương và Văn Khúc tại
Tử Tức, con cái đương số càng thành đạt và tài giỏi. Đây là bộ tổ
hợp cực đẹp cho cung Tử Tức.`,
  },

  {
    id: 'tam-thai-tai-phu-the',
    title: 'Tam Thai tại Phu Thê',
    sao: ['Tam Thai'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `Tam Thai đóng Phu Thê cho thấy người hôn phối của đương số danh giá,
tài năng và hiền lương.

Đặc trưng đường vợ chồng:

- Cuộc sống vợ chồng hòa thuận, ít xung khắc
- Giảm bớt những đau buồn
- Việc lập gia đình diễn ra một cách thuận lợi và dễ dàng

Đặc biệt khi Tả Phù và Hữu Bật đồng cung, cách đa phu thê được Tam
Thai chế hóa phần nào — là cách hóa giải đẹp.`,
  },

  {
    id: 'tam-thai-tai-huynh-de',
    title: 'Tam Thai tại Huynh Đệ - Cách "Giáp Thai Tọa"',
    sao: ['Tam Thai', 'Bát Tọa'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Tam Thai Bát Tọa đóng Huynh Đệ cho thấy đương số đông anh chị em, ứng
vào cách "**giáp Thai Tọa**".

Đặc trưng:

- Gia đình đông anh chị em, trong đó có người thành đạt, danh giá
- Mối quan hệ giữa anh chị em hòa thuận, hiền lương
- Không phải lo lắng hay trở thành gánh nặng cho nhau
- Giảm thiểu sự hình khắc

Cách "giáp Thai Tọa" thể hiện đương số ngày nhỏ được kế thừa, được
anh em trong nhà giỏi giang chỉ bảo và dẫn dắt nên dễ có thành tựu
sớm.`,
  },
];
