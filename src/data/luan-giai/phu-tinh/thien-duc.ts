import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THIÊN ĐỨC - Hỏa, Phúc Tinh.
 *
 * Vị trí: LUÔN đồng cung sao PHÚC ĐỨC (vòng Thái Tuế vị trí 9).
 * Engine HARDCODE quy luật này trong SAO_DONG_CUNG_THAI_TUE.
 *
 * Thuộc BỘ TỨ ĐỨC (4 sao Đức): Thiên Đức + Nguyệt Đức + Phúc Đức + Long Đức.
 * - Thiên Đức + Phúc Đức ĐỒNG CUNG (vị trí 9 vòng Thái Tuế)
 * - Long Đức ở vị trí 7 vòng Thái Tuế
 * - Nguyệt Đức ĐỒNG CUNG Tử Phù (vị trí 5 vòng Thái Tuế)
 *
 * Đặc trưng:
 * - Phúc Tinh CHỦ về LÒNG NHÂN ÁI, PHÚC ĐỨC, NHÂN HẬU
 * - HÓA GIẢI tai ương, hung họa, bệnh tật nhỏ
 * - Khi đi với Đào Hồng: CHẾ tính dâm tà, biến đoan chính
 * - Câu phú: "Thiên-Nguyệt Đức ngộ Đào Hồng / Trai lấy vợ đẹp gái chồng
 * giàu sang"
 * - "Thiên-Nguyệt Đức + Giải Thần + Quan Phúc một làng trừ hung"
 */
export const luanGiai_ThienDuc: DoanLuanGiai[] = [
  {
    id: 'thien-duc-tinh-chat-chung',
    title: 'Thiên Đức - Phúc tinh hóa giải tai ương',
    sao: ['Thiên Đức'],
    doUuTien: 33,
    tomTat: `**Thiên Đức** là phụ tinh thuộc bộ **Tứ Đức**, ngũ hành Hỏa, mang
hóa khí Phúc Tinh. Sao này chủ về lòng nhân ái, phúc đức và nhân hậu, có khả
năng hóa giải tai ương, hung họa cùng những bệnh tật nhỏ — giúp đương số
"gặp dữ hóa lành", thoát nạn trong cả những tình huống bế tắc.

Về quy luật vị trí, Thiên Đức luôn đồng cung sao Phúc Đức (vòng Thái Tuế vị
trí 9), khác với Long Đức nằm ở vị trí 7. Cả Thiên Đức và Long Đức đều là
sao Đức kiêm sao Giải nhưng đảm nhận hai vai trò bổ trợ trong cùng một bộ.

Bộ **Tứ Đức** gồm Thiên Đức, Nguyệt Đức, Phúc Đức, Long Đức có ba tác dụng
nổi bật:

- Chế Đào Hồng — chuyển đào hoa thành đoan chính
- Hóa giải sát tinh, tăng phúc thọ
- Khi đủ bốn sao, hợp thành cách cục cứu giải mạnh nhất`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÂU PHÚ + BỘ KẾT HỢP CHUNG (TỨ ĐỨC)
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'tu-duc-bon-sao-cuu-giai',
    title: 'Bộ Tứ Đức (Long-Phúc-Thiên-Nguyệt) - Cứu giải mạnh nhất',
    sao: ['Thiên Đức', 'Nguyệt Đức', 'Phúc Đức', 'Long Đức'],
    doUuTien: 70,
    tomTat: `Bộ **Tứ Đức** đầy đủ — Thiên Đức, Nguyệt Đức, Phúc Đức và Long
Đức cùng hội tụ — là cách cứu giải mạnh nhất trong tử vi. Bốn sao Đức gặp
nhau đem lại khả năng cứu giải đỉnh cao: hóa giải sát tinh, tai họa, bệnh
tật, đồng thời tăng phúc thọ và chế Đào Hồng khiến đào hoa chuyển thành
đoan chính.

Vị trí Thiếu Dương và Thiên Không trên vòng Thái Tuế luôn hội tụ đủ Tứ Đức.
Bộ sao này hợp với những đương số có duyên tu tập, đạo hạnh, tâm linh và
phù hợp với các nghề cứu giúp người.

Hai câu phú lưu truyền về bộ Tứ Đức:

- "Thiên - Nguyệt Đức, Giải Thần tàng / Cùng là Quan Phúc một làng trừ hung"
- "Thiên - Nguyệt Đức ngộ Đào Hồng / Trai lấy vợ đẹp, gái chồng giàu sang"`,
  },

  {
    id: 'thien-nguyet-duc-giai-than-quan-phuc',
    title: 'Thiên-Nguyệt Đức + Giải Thần + Quan Phúc - Một làng trừ hung',
    sao: ['Thiên Đức', 'Nguyệt Đức'],
    ketHop: ['Giải Thần', 'Thiên Quan', 'Thiên Phúc'],
    doUuTien: 70,
    tomTat: `Câu phú "Thiên - Nguyệt Đức, Giải Thần tàng / Cùng là Quan Phúc
một làng trừ hung" mô tả bộ giải hung gồm Thiên Đức, Nguyệt Đức, Giải Thần
cùng Quan Phúc hội tụ — cả làng đều được giải họa. Đây là cách cứu nạn cứu
khổ tột bậc, đặc biệt mạnh khi đương số vào hạn xấu.

Phân tích cộng hưởng của bộ này:

- Hai sao Đức cho phúc thiện làm nền
- Giải Thần là sao giải mạnh nhất nằm giữa
- Quan Phúc đem theo quý nhân từ thiên trợ giúp

Bốn yếu tố cùng cộng hưởng tạo nên khả năng hóa giải đỉnh cao.`,
  },

  {
    id: 'thien-nguyet-duc-dao-hong-trai-lay-vo-dep',
    title: 'Thiên-Nguyệt Đức + Đào Hồng - Trai lấy vợ đẹp, gái chồng giàu',
    sao: ['Thiên Đức', 'Nguyệt Đức'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 65,
    tomTat: `Câu phú "Thiên - Nguyệt Đức ngộ Đào Hồng / Trai lấy vợ đẹp, gái
chồng giàu sang" diễn tả quý cách hôn nhân khi Thiên Đức và Nguyệt Đức gặp
bộ Đào Hồng. Đương số nam thì lấy được vợ đẹp, đương số nữ thì có chồng
giàu sang.

Sức nặng của Tứ Đức ở đây nằm ở chỗ chế được tính dâm tà của Đào Hồng,
biến năng lượng đào hoa thành phẩm hạnh đoan chính. Đương số thu hút bạn
đời bằng tính nết đứng đắn chứ không lả lơi, nhờ vậy hôn nhân đồng điệu và
đẹp đôi.`,
  },

  {
    id: 'thien-nguyet-duc-dao-hong-phu-the',
    title: 'Thiên-Nguyệt Đức + Đào Hồng tại Phu Thê',
    sao: ['Thiên Đức', 'Nguyệt Đức'],
    cung: ['Phu Thê'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 70,
    tomTat: `Khi Thiên Đức cùng Nguyệt Đức gặp bộ Đào Hồng tại Phu Thê, vợ
chồng đương số xứng đôi trai tài gái sắc, tình cảm hòa hợp và gia đình
được nhiều người ngưỡng mộ.`,
  },

  {
    id: 'thien-duc-thien-luong-dao-si-tang-nhan',
    title: 'Thiên Đức + Thiên Lương - Đạo sĩ tăng nhân',
    sao: ['Thiên Đức'],
    ketHop: ['Thiên Lương'],
    doUuTien: 60,
    tomTat: `Khi Thiên Đức gặp Thiên Lương đồng cung hoặc hội chiếu, đương
số có duyên tu tập, đạo sĩ tăng nhân. Câu phú "Thiên Lương, Nguyệt Đức
chiếu kề - Một là đạo sĩ, hai là tăng nhân" vốn nói về Nguyệt Đức nhưng
Thiên Đức cũng mang cùng tính chất.

Đương số có duyên tu tập, thích tìm hiểu tâm linh và Phật pháp, bản tính
từ bi nhân hậu. Có thể trở thành đạo sĩ, tăng nhân hoặc gắn bó với các
nghề cứu nhân độ thế.`,
  },

  {
    id: 'thien-duc-tu-phu-dong-luong-quang-quy-quan-phuc-dien',
    title: 'Thiên Đức + Tử Phủ Đồng Lương + Quang Quý + Quan Phúc Điền - Nhà thờ Phật',
    sao: ['Thiên Đức'],
    cung: ['Điền Trạch'],
    ketHop: ['Tử Vi', 'Thiên Phủ', 'Thiên Đồng', 'Thiên Lương', 'Ân Quang', 'Thiên Quan'],
    doUuTien: 60,
    tomTat: `Khi Thiên Đức tại Điền Trạch hội cùng Tử Vi, Thiên Phủ, Thiên
Đồng, Thiên Lương kèm theo Ân Quang, Thiên Quý và Thiên Quan, Thiên Phúc,
nhà của đương số có thờ Phật Bà Quan Âm. Trong nhà thường thờ Phật, Thánh,
gia giáo nề nếp, mộ phần tổ tiên đặt gần nơi thờ Phật.

Đây là cách cục đặc trưng của những gia đình có truyền thống tâm linh; con
cháu đời sau cũng dễ có duyên tu tập.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // THIÊN ĐỨC TẠI 11 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-duc-tai-menh',
    title: 'Thiên Đức tại Mệnh - Tâm hồn đẹp phúc hậu',
    sao: ['Thiên Đức'],
    cung: ['Mệnh'],
    ketHop: ['Phúc Đức'],
    doUuTien: 80,
    tomTat: `Khi Thiên Đức thủ Mệnh, đương số có tâm hồn đẹp và phúc hậu.
Bản chất nhân hậu, khoan dung, đoan chính, tâm hồn trong sáng và giàu lòng
nhân ái. Đương số thích giúp người và làm việc thiện theo lẽ "gieo nhân
lành để gặt phúc" — càng tích đức, phúc báo càng dày. Thiên Đức cũng giúp
đương số hóa giải tai ương, bệnh tật nhỏ và đem lại may mắn, hỷ sự.

Có một đặc điểm cần lưu ý: vì Thiên Đức tại Mệnh cũng đồng cung Phúc Đức,
nên tam hợp Thái Tuế của đương số luôn có Thiếu Dương, Thiên Không, Đào
Hoa, Kiếp Sát và Tử Phù (do Phúc Đức nằm ở vị trí 9 vòng Thái Tuế). Đây là
bộ sao bộc phát và biến động, khiến vận trình không phải lúc nào cũng suôn
sẻ.

Sao Thiên Đức tựa như "khuôn vàng thước ngọc" nhắc đương số tu dưỡng tâm
tính, dùng trí tuệ vào việc chính đáng. Nếu đem mưu trí vào việc sai trái,
thành công cũng chóng tàn.`,
  },

  {
    id: 'thien-duc-tai-menh-sao-giai',
    title: 'Thiên Đức tại Mệnh + Sao giải hỗ trợ',
    sao: ['Thiên Đức'],
    cung: ['Mệnh'],
    ketHop: ['Thiên Giải', 'Địa Giải', 'Giải Thần', 'Thiên Quan', 'Thiên Phúc', 'Ân Quang', 'Thiên Quý', 'Tả Phù', 'Hữu Bật'],
    doUuTien: 75,
    tomTat: `Khi Thiên Đức tại Mệnh có thêm các sao giải hỗ trợ — Thiên
Giải, Địa Giải, Giải Thần, Thiên Quan, Thiên Phúc, Ân Quang, Thiên Quý, Tả
Phù, Hữu Bật — hiệu lực cứu giải càng mạnh. Đương số gặp dữ hóa lành, tai
qua nạn khỏi.`,
  },

  {
    id: 'thien-duc-tai-phu-mau',
    title: 'Thiên Đức tại Phụ Mẫu',
    sao: ['Thiên Đức'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Khi Thiên Đức tại Phụ Mẫu, cha mẹ của đương số là người hiền
hòa, nhân từ. Họ giàu lòng vị tha, sống có tình có nghĩa, biết quan tâm và
giúp đỡ mọi người xung quanh.`,
  },

  {
    id: 'thien-duc-tai-phu-mau-nguyet-duc',
    title: 'Thiên Đức + Nguyệt Đức tại Phụ Mẫu',
    sao: ['Thiên Đức'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Nguyệt Đức'],
    doUuTien: 70,
    tomTat: `Khi Thiên Đức cùng Nguyệt Đức tại Phụ Mẫu, cha mẹ của đương
số càng nhân hậu và đức độ.`,
  },

  {
    id: 'thien-duc-tai-phu-mau-cat-tinh',
    title: 'Thiên Đức + Cát tinh tại Phụ Mẫu',
    sao: ['Thiên Đức'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 70,
    tomTat: `Khi Thiên Đức tại Phụ Mẫu hội thêm Tả Phù, Hữu Bật, Văn Xương,
Văn Khúc, Thiên Khôi hay Thiên Việt, gia đình đương số có nề nếp tốt đẹp,
cha mẹ giữ tiếng thơm về nhân cách và để lại phúc phần dồi dào cho con cái.

Đương số lớn lên trong môi trường tình thương, dễ hình thành nhân cách
thiện lương và hưởng nhiều may mắn.`,
  },

  {
    id: 'thien-duc-tai-phuc-duc',
    title: 'Thiên Đức tại Phúc Đức - Phúc khí gia tộc bền lâu',
    sao: ['Thiên Đức'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `Khi Thiên Đức tại Phúc Đức, phúc khí gia tộc của đương số bền
lâu. Dòng họ có nhiều người sống thiện lương, biết lấy "dĩ hòa vi quý" làm
phương châm và cư xử nhún nhường, nên trong nhà ngoài ngõ đều yên ấm.
Nền tảng đó giúp phúc khí gia tộc kéo dài qua nhiều đời, mồ mả tổ tiên
cũng thuận vị.`,
  },

  {
    id: 'thien-duc-tai-phuc-duc-nguyet-duc',
    title: 'Thiên Đức + Nguyệt Đức tại Phúc Đức (Tứ Đức đầy đủ)',
    sao: ['Thiên Đức'],
    cung: ['Phúc Đức'],
    ketHop: ['Nguyệt Đức'],
    doUuTien: 73,
    tomTat: `Khi Thiên Đức cùng Nguyệt Đức tại Phúc Đức — đồng nghĩa Tứ
Đức đầy đủ — họ hàng đương số phúc hậu, mồ mả tổ tiên đặt gần nơi thờ Phật
Bà Quan Âm. Phúc ấm tổ tiên cực đẹp.`,
  },

  {
    id: 'thien-duc-tai-phuc-duc-tam-thai-bat-toa-quan-phuc',
    title: 'Thiên Đức + Tam Thai Bát Tọa hoặc Quan Phúc tại Phúc Đức',
    sao: ['Thiên Đức'],
    cung: ['Phúc Đức'],
    ketHop: ['Tam Thai', 'Bát Tọa', 'Thiên Quan', 'Thiên Phúc'],
    doUuTien: 73,
    tomTat: `Khi Thiên Đức tại Phúc Đức gặp Tam Thai - Bát Tọa hoặc Thiên
Quan - Thiên Phúc, mồ mả tổ tiên yên ổn và long mạch vượng phát. Gia tộc
có truyền thống hành thiện tích đức, con cháu được hưởng phúc ấm và công
danh sự nghiệp thuận buồm xuôi gió.`,
  },

  {
    id: 'thien-duc-tai-dien-trach',
    title: 'Thiên Đức tại Điền Trạch',
    sao: ['Thiên Đức'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Khi Thiên Đức tại Điền Trạch, đương số dễ gặp quý nhân hỗ trợ
trong việc dựng xây cơ nghiệp và tạo dựng nhà cửa. Mối quan hệ với hàng
xóm láng giềng êm ả, ít thị phi, hiếm khi rơi vào cảnh "bằng mặt không
bằng lòng".

Bản mệnh sống biết đủ, không quá đặt nặng chuyện sang giàu nên thích nghi
tốt với nơi ăn chốn ở.`,
  },

  {
    id: 'thien-duc-tai-quan-loc',
    title: 'Thiên Đức tại Quan Lộc',
    sao: ['Thiên Đức'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `Khi Thiên Đức tại Quan Lộc, sự nghiệp của đương số hanh thông,
ít gặp trở ngại lớn. Đương số luôn đặt cái tâm ngang với tài, làm việc với
lương tri và tinh thần trách nhiệm cao, nhờ vậy dễ nhận được sự tin tưởng
và kính nể từ đồng nghiệp lẫn cấp trên.`,
  },

  {
    id: 'thien-duc-tai-quan-loc-nguyet-duc-quan-phuc-ta-huu',
    title: 'Thiên Đức + Nguyệt Đức + Quan Phúc + Tả Hữu tại Quan Lộc',
    sao: ['Thiên Đức'],
    cung: ['Quan Lộc'],
    ketHop: ['Nguyệt Đức', 'Thiên Quan', 'Thiên Phúc', 'Tả Phù', 'Hữu Bật'],
    doUuTien: 73,
    tomTat: `Khi Thiên Đức tại Quan Lộc hội thêm Nguyệt Đức, Thiên Quan,
Thiên Phúc và Tả Phù, Hữu Bật, vận trình công danh của đương số như "cá
gặp nước", càng làm càng thuận.`,
  },

  {
    id: 'thien-duc-tai-no-boc',
    title: 'Thiên Đức tại Nô Bộc',
    sao: ['Thiên Đức'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Khi Thiên Đức tại Nô Bộc, bạn bè và cộng sự xung quanh đương
số có tấm lòng nhân ái, biết thấu hiểu và nâng đỡ lẫn nhau. Mối liên hệ xã
giao khá yên ấm, ít sóng gió; đương số dễ gặp được người tốt kề vai sát
cánh.`,
  },

  {
    id: 'thien-duc-tai-no-boc-co-nguyet-dong-luong',
    title: 'Thiên Đức + Cơ Nguyệt Đồng Lương + Thiên Phủ tại Nô Bộc',
    sao: ['Thiên Đức'],
    cung: ['Nô Bộc'],
    ketHop: ['Thái Âm', 'Thiên Phủ', 'Thiên Cơ', 'Thiên Đồng', 'Thiên Lương'],
    doUuTien: 70,
    tomTat: `Khi Thiên Đức tại Nô Bộc hội đủ Thái Âm, Thiên Phủ, Thiên Cơ,
Thiên Đồng, Thiên Lương, bạn bè của đương số đều là người hiền lương, đức
độ — cùng đồng hành cả công việc lẫn cuộc sống.`,
  },

  {
    id: 'thien-duc-tai-thien-di',
    title: 'Thiên Đức tại Thiên Di',
    sao: ['Thiên Đức'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `Khi Thiên Đức tại Thiên Di, đương số ra ngoài luôn giữ thái độ
nhã nhặn, khiêm tốn. Biết giúp người lúc khó khăn nên dễ được người khác
đáp lại ân tình.`,
  },

  {
    id: 'thien-duc-tai-thien-di-khoi-viet-quan-phuc',
    title: 'Thiên Đức + Khôi Việt + Quan Phúc tại Thiên Di',
    sao: ['Thiên Đức'],
    cung: ['Thiên Di'],
    ketHop: ['Thiên Khôi', 'Thiên Việt', 'Thiên Quan', 'Thiên Phúc'],
    doUuTien: 70,
    tomTat: `Khi Thiên Đức tại Thiên Di hội cùng Thiên Khôi, Thiên Việt và
Thiên Quan, Thiên Phúc, cuộc sống của đương số nơi đất khách được quý nhân
giúp đỡ, gặp nhiều cơ hội tốt và đạt bước tiến mới trong sự nghiệp.`,
  },

  {
    id: 'thien-duc-tai-tat-ach',
    title: 'Thiên Đức tại Tật Ách - Lá chắn bảo vệ',
    sao: ['Thiên Đức'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `Khi Thiên Đức tại Tật Ách, Phúc tinh thuộc bộ Tứ Đức tạo nên
một "lá chắn bảo vệ" cho đương số. Sự soi chiếu của Phúc tinh giúp giảm
nhẹ bệnh tật và tai nạn nhỏ. Nhờ gieo nhân lành, khi đau ốm đương số dễ
gặp được thầy hay thuốc tốt, bệnh nặng hóa nhẹ và nhiều lần thoát nạn
trong gang tấc.

Lời khuyên dành cho đương số là chăm chỉ làm việc thiện, tích đức và tu
tập tâm linh — tăng phúc cũng đồng nghĩa tăng khả năng cứu giải.`,
  },

  {
    id: 'thien-duc-tai-tai-bach',
    title: 'Thiên Đức tại Tài Bạch',
    sao: ['Thiên Đức'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `Khi Thiên Đức tại Tài Bạch, đương số kiếm tiền minh bạch và
lấy chữ tín làm đầu. Sống theo lý tưởng "đói cho sạch, rách cho thơm",
đương số không bon chen tranh đoạt mà có xu hướng đem tiền làm từ thiện,
tạo phúc đức cho đời. Nhờ tâm sáng mà tài vận ổn định, ít khi lâm vào cảnh
túng thiếu.`,
  },

  {
    id: 'thien-duc-tai-tai-bach-nguyet-duc-quan-phuc',
    title: 'Thiên Đức + Nguyệt Đức + Quan Phúc tại Tài Bạch',
    sao: ['Thiên Đức'],
    cung: ['Tài Bạch'],
    ketHop: ['Nguyệt Đức', 'Thiên Quan', 'Thiên Phúc'],
    doUuTien: 70,
    tomTat: `Khi Thiên Đức tại Tài Bạch hội cùng Nguyệt Đức, Thiên Quan và
Thiên Phúc, đương số có lộc tiền tài và tài vận ổn định.`,
  },

  {
    id: 'thien-duc-tai-tu-tuc',
    title: 'Thiên Đức tại Tử Tức',
    sao: ['Thiên Đức'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Khi Thiên Đức tại Tử Tức, con cái của đương số ngoan hiền,
hiếu thuận, biết kính trên nhường dưới nên gia đình ít xung đột. Theo lẽ
"con cái là lộc trời cho", sự xuất hiện của con cái đem lại niềm vui, làm
tình cảm vợ chồng thêm bền chặt và cuộc sống gia đình ấm êm, hạnh phúc lâu
dài.`,
  },

  {
    id: 'thien-duc-tai-tu-tuc-thien-dong',
    title: 'Thiên Đức + Thiên Đồng tại Tử Tức',
    sao: ['Thiên Đức'],
    cung: ['Tử Tức'],
    ketHop: ['Thiên Đồng'],
    doUuTien: 70,
    tomTat: `Khi Thiên Đức cùng Thiên Đồng tại Tử Tức, vợ chồng đương số dễ
sớm có tin vui về con cái, tổ ấm thêm rộn ràng tiếng cười.`,
  },

  {
    id: 'thien-duc-tai-tu-tuc-nguyet-duc',
    title: 'Thiên Đức + Nguyệt Đức tại Tử Tức',
    sao: ['Thiên Đức'],
    cung: ['Tử Tức'],
    ketHop: ['Nguyệt Đức'],
    doUuTien: 70,
    tomTat: `Khi Thiên Đức cùng Nguyệt Đức tại Tử Tức, vợ chồng đương số dễ
sớm có tin vui về con cái, tổ ấm thêm rộn ràng tiếng cười.`,
  },

  {
    id: 'thien-duc-tai-phu-the',
    title: 'Thiên Đức tại Phu Thê',
    sao: ['Thiên Đức'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `Khi Thiên Đức tại Phu Thê, bạn đời của đương số có dung mạo ưa
nhìn và tính tình đoan trang. Người ấy biết giữ hòa khí trong gia đình;
đôi bên nhường nhịn nhau, mâu thuẫn cũng "chín bỏ làm mười" để tránh xung
đột không đáng.`,
  },

  {
    id: 'thien-duc-tai-phu-the-bo-quy-cach',
    title: 'Thiên Đức + Phủ Âm Dương Đồng + Nguyệt Đức + Đào + Quang Quý tại Phu Thê',
    sao: ['Thiên Đức'],
    cung: ['Phu Thê'],
    ketHop: ['Thiên Phủ', 'Thái Âm', 'Thái Dương', 'Thiên Đồng', 'Nguyệt Đức', 'Đào Hoa', 'Ân Quang', 'Thiên Quý'],
    doUuTien: 73,
    tomTat: `Khi Thiên Đức tại Phu Thê hội thêm Thiên Phủ, Thái Âm, Thái
Dương, Thiên Đồng cùng Nguyệt Đức, Đào Hoa và Ân Quang, Thiên Quý, vợ
chồng đương số xứng đôi trai tài gái sắc, tình cảm hòa hợp và gia đình
được nhiều người ngưỡng mộ, quý mến.`,
  },

  {
    id: 'thien-duc-tai-huynh-de',
    title: 'Thiên Đức tại Huynh Đệ',
    sao: ['Thiên Đức'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Khi Thiên Đức tại Huynh Đệ, anh chị em của đương số thuận hòa,
"chị ngã em nâng".`,
  },

  {
    id: 'thien-duc-tai-huynh-de-ta-huu',
    title: 'Thiên Đức + Tả Phù + Hữu Bật tại Huynh Đệ',
    sao: ['Thiên Đức'],
    cung: ['Huynh Đệ'],
    ketHop: ['Tả Phù', 'Hữu Bật'],
    doUuTien: 70,
    tomTat: `Khi Thiên Đức tại Huynh Đệ hội cùng Tả Phù, Hữu Bật, anh chị
em trong nhà thuận hòa, biết nương tựa và giúp đỡ lẫn nhau. Quan hệ tình
cảm bền chặt, ít xảy ra tranh chấp; theo lẽ "chị ngã em nâng" mà giữ được
sự gắn bó dài lâu.`,
  },
];
