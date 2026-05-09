import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO LINH TINH - Lục Sát Tinh
 * (Phần chung của cặp Hỏa Linh được viết tại đây vì user gửi đoạn này
 * cùng content Linh Tinh)
 */
export const luanGiai_LinhTinh: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung của sao Linh Tinh
  // ============================================================
  {
    id: 'linh-tinh-tinh-chat-chung',
    title: 'Linh Tinh - Đặc tính chung',
    sao: ['Linh Tinh'],
    doUuTien: 30,
    tomTat: `**Linh Tinh** thuộc bộ Lục Sát Tinh, ngũ hành Hỏa nhưng mang tính Âm
— khác với Hỏa Tinh thuộc Dương Hỏa. Hóa khí là Sát Tinh và Hung Tinh, nên
sao này gắn với hung bạo, sát phạt, tai nạn, cô độc và nghèo khó.

Vị trí miếu hãm:

- **Đắc** địa
  - Dần, Mão, Thìn, Tỵ, Ngọ — cùng dải đắc với Hỏa Tinh
- **Hãm** địa
  - Mùi, Thân, Dậu, Tuất, Hợi, Tý, Sửu

Linh Tinh đứng cặp với Hỏa Tinh thành bộ "Hỏa Linh".`,

    chiTiet: `So sánh Hỏa Tinh với Linh Tinh — cùng là Hỏa nhưng tính chất
khác nhau:

- Hỏa Tinh thuộc Dương Hỏa, bộc phát rõ ràng như đám cháy lộ thiên; tác họa
  đến từ những vụ cháy nổ thấy được.
- Linh Tinh thuộc Âm Hỏa, ngầm ẩn và thâm trầm; tai họa thường ập đến bất
  ngờ và sắc bén, khó phòng bị trước.

Hai sao cùng đắc và cùng hãm tại các cung giống nhau, đều ưa cung ban ngày
và cùng kỵ cung ban đêm.`,
  },

  // ============================================================
  // 2. Cặp Hỏa Linh - hình tượng và bản chất
  // ============================================================
  {
    id: 'linh-tinh-cap-hoa-linh',
    title: 'Cặp Hỏa Linh - Hình tượng & bản chất',
    sao: ['Linh Tinh', 'Hỏa Tinh'],
    doUuTien: 35,
    tomTat: `Hỏa Tinh và Linh Tinh đều mang hình tượng cây hương, ngọn nến hay
ngọn đèn dầu — tượng trưng cho ánh sáng nhỏ trong đêm tối.

- Khi đóng tại cung ban ngày (Dần đến Ngọ), ánh sáng được phù trợ nên đôi
  sao này **đắc** địa, tác họa giảm hẳn; đứng cùng Tham Lang còn thành thượng
  cách.
- Khi đóng tại cung ban đêm (Mùi đến Sửu), ánh sáng yếu ớt nên rơi vào **hãm**
  địa: tai họa, bệnh tật và căng thẳng thần kinh kéo dài. Lúc này cần Tuần,
  Triệt, Tử hoặc Tuyệt đi cùng để giảm chế.

Khác với bốn sát tinh còn lại, Hỏa Linh chủ về tai họa tinh thần nhiều hơn
vật chất.`,

    chiTiet: `Về đặc trưng tâm lý, dù đóng ở đâu Hỏa Linh cũng mang đến cảm
giác u sầu ủ buồn cho đương số, hay phải lo toan chuyện này chuyện khác.
Tích lũy lâu ngày dễ dẫn tới căng thẳng thần kinh, trầm cảm, phẫn uất. Khi
có thêm Thiên Cơ hoặc Thiên Lương (sao thuộc Mộc) đi cùng, tình trạng có
thể tiến tới điên dại hoặc bệnh thần kinh thực thụ.

Về tác họa vật chất, Hỏa Linh đóng vai như tia lửa điện hay vật nóng — gây
cháy nổ, điện giật, súng đạn. Nếu có thêm Thiên Hình, Thiên Việt hoặc Hóa
Kỵ, tai họa đến càng nhanh và rõ rệt.

Đặc điểm "nội tâm" của Hỏa Linh là tính nóng bộc lộ ra ngoài thì ít, nhưng
âm ỉ bên trong thì nhiều. Suy nghĩ và lo toan cứ chạy đi chạy lại trong đầu
đương số, khó kiểm soát; càng cố giữ thì càng rối ren.`,
  },

  // ============================================================
  // 3. Hiệu ứng tâm linh của Hỏa Linh
  // ============================================================
  {
    id: 'linh-tinh-hieu-ung-tam-linh',
    title: 'Hỏa Linh - Hiệu ứng tâm linh "ma làm, cơ hành"',
    sao: ['Linh Tinh', 'Hỏa Tinh'],
    doUuTien: 50,
    tomTat: `Hỏa Linh là cặp sao có hiệu ứng tâm linh cao. Hình tượng ngọn nến,
ngọn đèn dầu trong đền phủ khiến đương số dễ thu hút ma tà vây quanh, nhiễu
loạn — tâm trí không yên, luôn bị xáo động, đi khám chữa cũng không ra
bệnh.

Người tìm hiểu tâm linh thường gọi tình trạng này là "bị ma làm, bị cơ
hành". Khi có thêm Thiên Cơ, Cự Môn, Thiên Riêu, Đà La hay Hóa Kỵ đi cùng,
hiệu ứng càng rõ rệt.

Cách hóa giải nằm ở Tuần, Triệt, Tuyệt, Tử kết hợp với phúc thiện tinh —
giúp đương số hướng thiện, giác ngộ và thoát khỏi tham sân si để không còn
âu lo sầu tư.`,
  },

  // ============================================================
  // 4. Linh Tinh tại Mệnh - tướng mạo
  // ============================================================
  {
    id: 'linh-tinh-tai-menh-tuong-mao',
    title: 'Linh Tinh tại Mệnh - Tướng mạo',
    sao: ['Linh Tinh'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `Đương số có Linh Tinh tọa thủ Mệnh thường có dáng gầy thô, da
sạm, gương mặt khó gần; tay chân dễ có vết sẹo.`,
  },

  {
    id: 'linh-tinh-tai-menh-nam-thai-duong',
    title: 'Linh Tinh Mệnh - Nam mệnh + Thái Dương đắc',
    sao: ['Linh Tinh'],
    cung: ['Mệnh'],
    gioiTinh: 'Nam',
    ketHop: ['Thái Dương'],
    doUuTien: 75,
    tomTat: `Nam mệnh có Linh Tinh tại Mệnh được Thái Dương đắc địa hội chiếu,
gương mặt đương số trở nên sáng sủa và uy nghiêm hơn hẳn dáng vẻ thô sạm
thường thấy của sao này.`,
  },

  // ============================================================
  // 5. Linh Tinh tại Mệnh - tính cách & sự nghiệp
  // ============================================================
  {
    id: 'linh-tinh-tai-menh-tinh-cach',
    title: 'Linh Tinh tại Mệnh - Tính cách & sự nghiệp',
    sao: ['Linh Tinh'],
    cung: ['Mệnh'],
    doUuTien: 85,
    tomTat: `Đương số có Linh Tinh cư Mệnh tính nóng vội, biểu hiện cụ thể
chịu ảnh hưởng mạnh từ trạng thái sao đắc hay hãm.`,

    chiTiet: `Về tài lộc, Linh Tinh khiến tiền bạc đến với đương số khó giữ
lại được, dễ phá tán theo những biến cố bất ngờ.

Về phúc thọ, đương số thường có thương tích ở tay chân; cuộc đời khó tránh
được những phen "thập tử nhất sinh".`,
  },

  {
    id: 'linh-tinh-tai-menh-dac-dia',
    title: 'Linh Tinh tại Mệnh - Đắc địa',
    sao: ['Linh Tinh'],
    cung: ['Mệnh'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 85,
    tomTat: `Khi Linh Tinh **Đắc** địa cư Mệnh, đương số dũng cảm, can trường,
cứng rắn và không ngại nguy hiểm. Đây là chất liệu tốt cho võ nghiệp, quân
sự, công an hoặc nghề lính cứu hỏa.`,
  },

  {
    id: 'linh-tinh-tai-menh-ham',
    title: 'Linh Tinh tại Mệnh - Hãm địa',
    sao: ['Linh Tinh'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    doUuTien: 85,
    tomTat: `Khi Linh Tinh **Hãm** địa cư Mệnh, đương số bốc đồng, "nóng giận
mất khôn", dễ gây chuyện bất lợi cho mình và khó giữ được hòa khí với những
người xung quanh.`,
  },

  {
    id: 'linh-tinh-tai-menh-ham-sat',
    title: 'Linh Tinh Mệnh - Hãm + sát tinh',
    sao: ['Linh Tinh'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 80,
    tomTat: `Khi Linh Tinh Hãm tại Mệnh gặp thêm Kình Dương, Đà La, Hỏa Tinh,
Địa Không hoặc Địa Kiếp, công danh đương số thăng giáng thất thường; lao
động chân tay vất vả mà thành quả không tương xứng với công sức bỏ ra.`,
  },

  {
    id: 'linh-tinh-tai-menh-khong-kiep',
    title: 'Linh Tinh Mệnh + Không Kiếp - nghèo khổ',
    sao: ['Linh Tinh'],
    cung: ['Mệnh'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 75,
    tomTat: `Linh Tinh tại Mệnh gặp Địa Không cùng Địa Kiếp khiến đương số
sống cuộc đời nghèo khổ túng thiếu, suốt năm "giật gấu vá vai".`,
  },

  {
    id: 'linh-tinh-tai-menh-dac-tham',
    title: 'Linh Tinh Mệnh đắc + Tham Lang / cát tinh',
    sao: ['Linh Tinh'],
    cung: ['Mệnh'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    ketHop: ['Tham Lang', 'Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 75,
    tomTat: `Khi Linh Tinh **Đắc** địa tại Mệnh gặp Tham Lang hoặc các cát
tinh Tả Phù, Hữu Bật, Văn Xương, Văn Khúc, Thiên Khôi, Thiên Việt, tài lộc
đến với đương số bất ngờ — nhưng cũng dễ tiêu tan nếu không biết cách giữ.`,
  },

  {
    id: 'linh-tinh-tai-menh-ham-dau-ty',
    title: 'Linh Tinh Mệnh hãm tại Dậu / Tý',
    sao: ['Linh Tinh'],
    cung: ['Mệnh'],
    chi: ['Dậu', 'Tý'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `Khi Linh Tinh **Hãm** tại Dậu hoặc Tý cư Mệnh, tai họa ập đến
với đương số nhanh và nặng — thường trở tay không kịp.`,
  },

  // ============================================================
  // 6. Linh Tham - Thượng cách (cùng Hỏa Tham)
  // ============================================================
  {
    id: 'linh-tinh-linh-tham',
    title: 'Linh Tham - Thượng cách của Linh Tinh',
    sao: ['Linh Tinh', 'Tham Lang'],
    ketHop: ['Linh Tham'],
    doUuTien: 65,
    tomTat: `Linh Tinh đứng cùng Tham Lang tạo thành cách **Linh Tham** —
thượng cách của Linh Tinh, có vị thế tương đương Hỏa Tham.

Đây là minh chứng cho thấy Lục Sát Tinh không phải lúc nào cũng xấu: Hỏa
Linh đi với Tham Lang thì trở thành tốt đẹp, phò tá rất nhiều cho chủ tinh.

Đương số có cách này thường:

- Trở thành người uy quyền
- Phát danh trong ngành võ nghiệp
- Danh chấn uy bang, giàu có bền lâu

Cùng với Hỏa Tham, Linh Tham là hai cách thượng đẳng của bộ Hỏa Linh.`,
  },

  // ============================================================
  // 7. Linh Tinh gặp hạn
  // ============================================================
  {
    id: 'linh-tinh-han',
    title: 'Hạn gặp Linh Tinh',
    sao: ['Linh Tinh'],
    doUuTien: 50,
    tomTat: `Khi hạn đến Linh Tinh, đương số dễ vướng tai nạn, bỏng, bệnh tật
và trục trặc trong công việc.

Cách hóa giải tập trung vào điều hòa tâm tính và rèn bình tĩnh để tránh hấp
tấp; cẩn trọng với dụng cụ sắc bén, điện và lửa; tham gia thể thao để giảm
căng thẳng; đồng thời nuôi lòng nhân hậu, từ bi để hóa sát khí và gia tăng
phúc đức.

Những nghề phù hợp gồm võ nghiệp, quân đội, cứu hộ, y dược, kỹ thuật và
thủ công tinh xảo.`,
  },

  {
    id: 'linh-tinh-han-tang-mon',
    title: 'Linh Tinh hạn + Tang Môn',
    sao: ['Linh Tinh'],
    ketHop: ['Tang Môn'],
    doUuTien: 55,
    tomTat: `Khi hạn Linh Tinh gặp thêm Tang Môn, đương số có thể có tang sự
trong gia đình hoặc rơi vào trạng thái tinh thần bất ổn.`,
  },

  // ============================================================
  // 8. Linh Tinh tại Phụ Mẫu
  // ============================================================
  {
    id: 'linh-tinh-tai-phu-mau',
    title: 'Linh Tinh tại Phụ Mẫu',
    sao: ['Linh Tinh'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Linh Tinh tại Phụ Mẫu khiến quan hệ giữa đương số với cha mẹ
chịu ảnh hưởng mạnh từ trạng thái sao đắc hay hãm.`,
  },

  {
    id: 'linh-tinh-tai-phu-mau-ham',
    title: 'Linh Tinh Phụ Mẫu - Hãm địa',
    sao: ['Linh Tinh'],
    cung: ['Phụ Mẫu'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi Linh Tinh **Hãm** tại Phụ Mẫu, cha mẹ đương số dễ gặp tai
ương bất ngờ liên quan đến lửa, điện, dao kéo và xe cộ. Tính nóng nảy
khiến vợ chồng xung khắc, dễ chia ly. Bố mẹ thường theo nghề chân tay vất
vả, nguy hiểm.`,
  },

  {
    id: 'linh-tinh-tai-phu-mau-kinh-da-khong-kiep',
    title: 'Linh Tinh Phụ Mẫu + Kình Đà / Không Kiếp',
    sao: ['Linh Tinh'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Kình Dương', 'Đà La', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Linh Tinh tại Phụ Mẫu gặp Kình Dương, Đà La, Địa Không hoặc Địa
Kiếp khiến đương số phải tự lập từ nhỏ, dễ phải gánh nghiệp duyên và tai
họa do cha mẹ để lại.`,
  },

  {
    id: 'linh-tinh-tai-phu-mau-dac-dia',
    title: 'Linh Tinh Phụ Mẫu - Đắc địa',
    sao: ['Linh Tinh'],
    cung: ['Phụ Mẫu'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 78,
    tomTat: `Khi Linh Tinh **Đắc** địa tại Phụ Mẫu, cha mẹ đương số cứng cỏi
và kiên cường — hợp với võ nghiệp, quân đội, công an. Theo lối "thương cho
roi cho vọt", đương số nhờ nề nếp gia đình mà sớm trưởng thành.`,
  },

  {
    id: 'linh-tinh-tai-phu-mau-dac-cat',
    title: 'Linh Tinh Phụ Mẫu - Đắc + cát tinh',
    sao: ['Linh Tinh'],
    cung: ['Phụ Mẫu'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 72,
    tomTat: `Khi Linh Tinh **Đắc** địa tại Phụ Mẫu gặp thêm cát tinh như Tả
Phù, Hữu Bật, Văn Xương, Văn Khúc, Thiên Khôi, Thiên Việt, cha mẹ đương số
là người có danh vọng và uy tín.`,
  },

  // ============================================================
  // 9. Linh Tinh tại Phúc Đức
  // ============================================================
  {
    id: 'linh-tinh-tai-phuc-duc',
    title: 'Linh Tinh tại Phúc Đức',
    sao: ['Linh Tinh'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `Linh Tinh tại Phúc Đức ảnh hưởng đến phúc đức dòng họ của đương
số.`,
  },

  {
    id: 'linh-tinh-tai-phuc-duc-ham',
    title: 'Linh Tinh Phúc Đức - Hãm địa',
    sao: ['Linh Tinh'],
    cung: ['Phúc Đức'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi Linh Tinh **Hãm** tại Phúc Đức, phúc đức tổ tiên của đương
số suy yếu; họ hàng tai ương, nghèo khó, mỗi người mỗi ngả.`,
  },

  {
    id: 'linh-tinh-tai-phuc-duc-sat',
    title: 'Linh Tinh Phúc Đức + Kình Đà Không Kiếp',
    sao: ['Linh Tinh'],
    cung: ['Phúc Đức'],
    ketHop: ['Kình Dương', 'Đà La', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Linh Tinh tại Phúc Đức gặp Kình Dương, Đà La, Địa Không hoặc Địa
Kiếp tạo cảnh "phúc mỏng nghiệp dày" — con cháu phải tự thân vận động, dễ
bị liên lụy bởi nghiệp duyên từ dòng họ.`,
  },

  {
    id: 'linh-tinh-tai-phuc-duc-dac-dia',
    title: 'Linh Tinh Phúc Đức - Đắc địa',
    sao: ['Linh Tinh'],
    cung: ['Phúc Đức'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 78,
    tomTat: `Khi Linh Tinh **Đắc** địa tại Phúc Đức, họ hàng đương số có
người can trường, chí khí mạnh mẽ. Gia tộc thường có truyền thống nghề võ
hoặc quân đội, có danh tiếng và uy tín. Gia đình kỷ luật nề nếp khiến con
cháu được rèn giũa, trưởng thành sớm và có chí tiến thủ.`,
  },

  // ============================================================
  // 10. Linh Tinh tại Điền Trạch
  // ============================================================
  {
    id: 'linh-tinh-tai-dien-trach',
    title: 'Linh Tinh tại Điền Trạch',
    sao: ['Linh Tinh'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Linh Tinh cư Điền Trạch khiến điền sản của đương số chịu ảnh
hưởng từ tính sát phạt của sao này.`,
  },

  {
    id: 'linh-tinh-tai-dien-trach-ham',
    title: 'Linh Tinh Điền Trạch - Hãm địa',
    sao: ['Linh Tinh'],
    cung: ['Điền Trạch'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi Linh Tinh **Hãm** tại Điền Trạch, điền sản của đương số hao
hụt và mất mát do hỏa hoạn, tai nạn hoặc tranh chấp. Nhà cửa khó yên, hay
phải chuyển chỗ và dễ ở gần những nơi có yếu tố nguy hiểm.`,
  },

  {
    id: 'linh-tinh-tai-dien-trach-sat',
    title: 'Linh Tinh Điền Trạch + Hỏa / Kình / Đà',
    sao: ['Linh Tinh'],
    cung: ['Điền Trạch'],
    ketHop: ['Hỏa Tinh', 'Kình Dương', 'Đà La'],
    doUuTien: 70,
    tomTat: `Linh Tinh tại Điền Trạch gặp Hỏa Tinh, Kình Dương hoặc Đà La
khiến đất đai của đương số tiêu tán, dễ vướng kiện cáo nhà đất; gia đình
thiếu hòa khí.`,
  },

  {
    id: 'linh-tinh-tai-dien-trach-dac-dia',
    title: 'Linh Tinh Điền Trạch - Đắc địa',
    sao: ['Linh Tinh'],
    cung: ['Điền Trạch'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 78,
    tomTat: `Khi Linh Tinh **Đắc** địa tại Điền Trạch, nhà cửa của đương số
kiên cố và bền vững. Việc mua bán đất thuận lợi nhưng chủ yếu dựa vào tự
thân tạo dựng, ít hưởng phúc tổ tiên. Gia trạch thường nằm gần nơi có
tính Hỏa.`,
  },

  // ============================================================
  // 11. Linh Tinh tại Quan Lộc
  // ============================================================
  {
    id: 'linh-tinh-tai-quan-loc',
    title: 'Linh Tinh tại Quan Lộc',
    sao: ['Linh Tinh'],
    cung: ['Quan Lộc'],
    doUuTien: 80,
    tomTat: `Linh Tinh cư Quan Lộc khiến công danh của đương số chịu ảnh
hưởng từ trạng thái sao đắc hay hãm.`,
  },

  {
    id: 'linh-tinh-tai-quan-loc-ham',
    title: 'Linh Tinh Quan Lộc - Hãm địa',
    sao: ['Linh Tinh'],
    cung: ['Quan Lộc'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `Khi Linh Tinh **Hãm** tại Quan Lộc, công việc của đương số trắc
trở, thay đổi liên tục; khó giữ được địa vị cao và dễ gặp tiểu nhân hoặc
tranh chấp nơi công sở.`,
  },

  {
    id: 'linh-tinh-tai-quan-loc-ham-sat',
    title: 'Linh Tinh Quan Lộc - Hãm + Hỏa Kình Tang Bệnh',
    sao: ['Linh Tinh'],
    cung: ['Quan Lộc'],
    trangThai: ['Hãm'],
    ketHop: ['Hỏa Tinh', 'Kình Dương', 'Tang Môn', 'Bệnh Phù'],
    doUuTien: 75,
    tomTat: `Khi Linh Tinh **Hãm** Quan Lộc gặp thêm Hỏa Tinh, Kình Dương,
Tang Môn hoặc Bệnh Phù, công việc của đương số càng thêm trắc trở và va
chạm — ứng nghiệm rất rõ.`,
  },

  {
    id: 'linh-tinh-tai-quan-loc-dac-dia',
    title: 'Linh Tinh Quan Lộc - Đắc địa',
    sao: ['Linh Tinh'],
    cung: ['Quan Lộc'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 80,
    tomTat: `Khi Linh Tinh **Đắc** địa tại Quan Lộc, đương số có chí tiến
thủ, dám nhận nhiệm vụ khó khăn liều lĩnh. Trực giác nhạy bén và bản tính
gan dạ giúp đương số hợp với quân sự, công an, cứu hộ. Công việc nhiều thử
thách nhưng mang lại danh tiếng, được cấp trên và đồng nghiệp tôn trọng.`,
  },

  // ============================================================
  // 12. Linh Tinh tại Nô Bộc
  // ============================================================
  {
    id: 'linh-tinh-tai-no-boc',
    title: 'Linh Tinh tại Nô Bộc',
    sao: ['Linh Tinh'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Linh Tinh tại Nô Bộc ảnh hưởng đến quan hệ của đương số với bạn
bè và cấp dưới.`,
  },

  {
    id: 'linh-tinh-tai-no-boc-ham',
    title: 'Linh Tinh Nô Bộc - Hãm địa',
    sao: ['Linh Tinh'],
    cung: ['Nô Bộc'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi Linh Tinh **Hãm** tại Nô Bộc, bạn bè và cấp dưới của đương
số không trung thành, dễ rơi vào cảnh "nuôi ong tay áo, nuôi cáo trong
nhà".`,
  },

  {
    id: 'linh-tinh-tai-no-boc-hao-khong-kiep',
    title: 'Linh Tinh Nô Bộc + Đại Hao / Không Kiếp',
    sao: ['Linh Tinh'],
    cung: ['Nô Bộc'],
    ketHop: ['Đại Hao', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Linh Tinh tại Nô Bộc gặp Đại Hao, Địa Không hoặc Địa Kiếp khiến
tài sản của đương số hao hụt vì bạn bè hay người dưới quyền gây tổn thất —
cần thận trọng khi quản lý tài chính tập thể.`,
  },

  {
    id: 'linh-tinh-tai-no-boc-dac-dia',
    title: 'Linh Tinh Nô Bộc - Đắc địa',
    sao: ['Linh Tinh'],
    cung: ['Nô Bộc'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 78,
    tomTat: `Khi Linh Tinh **Đắc** địa tại Nô Bộc, bạn bè và cấp dưới của
đương số trung thành, "hoạn nạn có nhau". Đương số nhờ vậy mở rộng quan
hệ, có thể dựa vào bạn bè hoặc người dưới quyền để tiến thân.`,
  },

  // ============================================================
  // 13. Linh Tinh tại Thiên Di
  // ============================================================
  {
    id: 'linh-tinh-tai-thien-di',
    title: 'Linh Tinh tại Thiên Di',
    sao: ['Linh Tinh'],
    cung: ['Thiên Di'],
    doUuTien: 78,
    tomTat: `Linh Tinh tại Thiên Di ảnh hưởng đến chuyện đi xa và công việc
xa nhà của đương số.`,
  },

  {
    id: 'linh-tinh-tai-thien-di-ham',
    title: 'Linh Tinh Thiên Di - Hãm địa',
    sao: ['Linh Tinh'],
    cung: ['Thiên Di'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `Khi Linh Tinh **Hãm** tại Thiên Di, đương số đi xa hay gặp trở
ngại, tai nạn và tổn thất về sức khỏe lẫn tiền bạc.`,
  },

  {
    id: 'linh-tinh-tai-thien-di-ham-sat',
    title: 'Linh Tinh Thiên Di - Hãm + Hỏa / Cự Môn / Thiên Mã',
    sao: ['Linh Tinh'],
    cung: ['Thiên Di'],
    trangThai: ['Hãm'],
    ketHop: ['Hỏa Tinh', 'Cự Môn', 'Thiên Mã'],
    doUuTien: 75,
    tomTat: `Khi Linh Tinh **Hãm** Thiên Di gặp thêm Hỏa Tinh, Cự Môn hoặc
Thiên Mã, đương số phải chuyển chỗ làm nhiều lần; chuyện kinh doanh cũng
trắc trở.`,
  },

  {
    id: 'linh-tinh-tai-thien-di-dac-dia',
    title: 'Linh Tinh Thiên Di - Đắc địa',
    sao: ['Linh Tinh'],
    cung: ['Thiên Di'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 80,
    tomTat: `Khi Linh Tinh **Đắc** địa tại Thiên Di, đương số dám đương đầu
thử thách, trực giác tốt và xử lý tình huống nhanh. Có quý nhân giúp đỡ,
đương số dễ phát triển sự nghiệp nơi đất khách.`,
  },

  // ============================================================
  // 14. Linh Tinh tại Tật Ách
  // ============================================================
  {
    id: 'linh-tinh-tai-tat-ach',
    title: 'Linh Tinh tại Tật Ách',
    sao: ['Linh Tinh'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `Linh Tinh tại Tật Ách ảnh hưởng đến sức khỏe và bệnh tật của
đương số.`,
  },

  {
    id: 'linh-tinh-tai-tat-ach-ham',
    title: 'Linh Tinh Tật Ách - Hãm địa',
    sao: ['Linh Tinh'],
    cung: ['Tật Ách'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `Khi Linh Tinh **Hãm** tại Tật Ách, đương số dễ gặp tai nạn đột
ngột hoặc bệnh tật khó lường — đặc biệt liên quan đến dao kéo, súng đạn,
điện giật, lửa và nước.`,
  },

  {
    id: 'linh-tinh-tai-tat-ach-sat',
    title: 'Linh Tinh Tật Ách + Hỏa / Kình / Hình / Bệnh',
    sao: ['Linh Tinh'],
    cung: ['Tật Ách'],
    ketHop: ['Hỏa Tinh', 'Kình Dương', 'Thiên Hình', 'Bệnh Phù'],
    doUuTien: 75,
    tomTat: `Linh Tinh tại Tật Ách gặp Hỏa Tinh, Kình Dương, Thiên Hình hoặc
Bệnh Phù khiến cơ thể đương số tổn thương; tai nạn có nguy cơ ảnh hưởng
đến tính mạng.`,
  },

  {
    id: 'linh-tinh-tai-tat-ach-phuc-quy',
    title: 'Linh Tinh Tật Ách + Thiên Phúc / Thiên Quý / Bác Sĩ',
    sao: ['Linh Tinh'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Phúc', 'Thiên Quý', 'Bác Sĩ'],
    doUuTien: 75,
    tomTat: `Linh Tinh tại Tật Ách gặp Thiên Phúc, Thiên Quý hoặc Bác Sĩ
giúp hóa giải phần lớn tai họa; đương số hồi phục nhanh, sức khỏe tốt và
sức đề kháng ổn định.`,
  },

  // ============================================================
  // 15. Linh Tinh tại Tài Bạch
  // ============================================================
  {
    id: 'linh-tinh-tai-tai-bach',
    title: 'Linh Tinh tại Tài Bạch',
    sao: ['Linh Tinh'],
    cung: ['Tài Bạch'],
    doUuTien: 78,
    tomTat: `Linh Tinh tại Tài Bạch ảnh hưởng đến tài lộc của đương số.`,
  },

  {
    id: 'linh-tinh-tai-tai-bach-ham-sat',
    title: 'Linh Tinh Tài Bạch - Hãm + Hỏa / Không Kiếp / Đại Hao',
    sao: ['Linh Tinh'],
    cung: ['Tài Bạch'],
    trangThai: ['Hãm'],
    ketHop: ['Hỏa Tinh', 'Địa Không', 'Địa Kiếp', 'Đại Hao'],
    doUuTien: 78,
    tomTat: `Khi Linh Tinh **Hãm** tại Tài Bạch gặp Hỏa Tinh, Địa Không, Địa
Kiếp hoặc Đại Hao, đương số phá tài, "tiền mất tật mang"; kinh doanh dễ
thất bại hoặc bị lừa gạt.`,
  },

  {
    id: 'linh-tinh-tai-tai-bach-dac-dia',
    title: 'Linh Tinh Tài Bạch - Đắc địa',
    sao: ['Linh Tinh'],
    cung: ['Tài Bạch'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 80,
    tomTat: `Khi Linh Tinh **Đắc** địa tại Tài Bạch, đương số có trực giác
tốt về tài chính, dám mạo hiểm nhưng vẫn biết kiểm soát rủi ro.`,
  },

  {
    id: 'linh-tinh-tai-tai-bach-phuc-quy-loc',
    title: 'Linh Tinh Tài Bạch + Thiên Phúc / Quang Quý / Hóa Lộc',
    sao: ['Linh Tinh'],
    cung: ['Tài Bạch'],
    ketHop: ['Thiên Phúc', 'Ân Quang', 'Thiên Quý', 'Hóa Lộc'],
    doUuTien: 75,
    tomTat: `Linh Tinh tại Tài Bạch gặp Thiên Phúc, Ân Quang, Thiên Quý hoặc
Hóa Lộc giúp đương số dễ phát tài qua đầu tư, buôn bán hoặc nghề thiên về
sức mạnh và kỹ thuật.`,
  },

  // ============================================================
  // 16. Linh Tinh tại Tử Tức
  // ============================================================
  {
    id: 'linh-tinh-tai-tu-tuc',
    title: 'Linh Tinh tại Tử Tức',
    sao: ['Linh Tinh'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Linh Tinh tại Tử Tức ảnh hưởng đến đường con cái của đương số.`,
  },

  {
    id: 'linh-tinh-tai-tu-tuc-ham',
    title: 'Linh Tinh Tử Tức - Hãm địa',
    sao: ['Linh Tinh'],
    cung: ['Tử Tức'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi Linh Tinh **Hãm** tại Tử Tức, con cái của đương số yếu ớt,
hay mắc bệnh và dễ gặp tai nạn nhỏ. Tính tình bướng bỉnh, nóng nảy, hay
"cãi chày cãi cối" và xung đột với cha mẹ.`,
  },

  {
    id: 'linh-tinh-tai-tu-tuc-sat',
    title: 'Linh Tinh Tử Tức + Không Kiếp / Hình / Riêu',
    sao: ['Linh Tinh'],
    cung: ['Tử Tức'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Thiên Hình', 'Thiên Riêu'],
    doUuTien: 73,
    tomTat: `Linh Tinh tại Tử Tức gặp Địa Không, Địa Kiếp, Thiên Hình hoặc
Thiên Riêu khiến con cái ly tán, sống xa cha mẹ hoặc trắc trở chuyện học
hành.`,
  },

  {
    id: 'linh-tinh-tai-tu-tuc-dac-dia',
    title: 'Linh Tinh Tử Tức - Đắc địa',
    sao: ['Linh Tinh'],
    cung: ['Tử Tức'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 78,
    tomTat: `Khi Linh Tinh **Đắc** địa tại Tử Tức, con cái của đương số nhanh
nhẹn, có cá tính, tự lập sớm và biết bảo vệ bản thân.`,
  },

  {
    id: 'linh-tinh-tai-tu-tuc-phuc-quy',
    title: 'Linh Tinh Tử Tức + Thiên Phúc / Quang Quý',
    sao: ['Linh Tinh'],
    cung: ['Tử Tức'],
    ketHop: ['Thiên Phúc', 'Ân Quang', 'Thiên Quý'],
    doUuTien: 73,
    tomTat: `Linh Tinh tại Tử Tức gặp Thiên Phúc, Ân Quang hoặc Thiên Quý
khiến con cái của đương số học giỏi, thông minh, có tài năng nghệ thuật
hoặc khả năng lãnh đạo.`,
  },

  // ============================================================
  // 17. Linh Tinh tại Phu Thê
  // ============================================================
  {
    id: 'linh-tinh-tai-phu-the',
    title: 'Linh Tinh tại Phu Thê',
    sao: ['Linh Tinh'],
    cung: ['Phu Thê'],
    doUuTien: 80,
    tomTat: `Linh Tinh tại Phu Thê ảnh hưởng đến quan hệ vợ chồng của đương
số.`,
  },

  {
    id: 'linh-tinh-tai-phu-the-ham',
    title: 'Linh Tinh Phu Thê - Hãm địa',
    sao: ['Linh Tinh'],
    cung: ['Phu Thê'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `Khi Linh Tinh **Hãm** tại Phu Thê, vợ chồng đương số mâu thuẫn
kéo dài, dẫn đến hình khắc, ly tán hoặc ly hôn. Người phối ngẫu dễ gặp tai
nạn, bệnh tật và làm nghề nguy hiểm. Đương số cần kiềm chế tính nóng nảy
để giữ hòa khí.`,
  },

  {
    id: 'linh-tinh-tai-phu-the-dac-dia',
    title: 'Linh Tinh Phu Thê - Đắc địa',
    sao: ['Linh Tinh'],
    cung: ['Phu Thê'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 80,
    tomTat: `Khi Linh Tinh **Đắc** địa tại Phu Thê, xung đột giữa hai người
chủ yếu do cá tính khác biệt, không nghiêm trọng và thường dung hòa được
sau mâu thuẫn. Người phối ngẫu của đương số cao to, mạnh mẽ, dũng cảm và
quyết đoán.`,
  },

  // ============================================================
  // 18. Linh Tinh tại Huynh Đệ
  // ============================================================
  {
    id: 'linh-tinh-tai-huynh-de',
    title: 'Linh Tinh tại Huynh Đệ',
    sao: ['Linh Tinh'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Linh Tinh tại Huynh Đệ ảnh hưởng đến quan hệ giữa đương số với
anh chị em.`,
  },

  {
    id: 'linh-tinh-tai-huynh-de-ham',
    title: 'Linh Tinh Huynh Đệ - Hãm địa',
    sao: ['Linh Tinh'],
    cung: ['Huynh Đệ'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi Linh Tinh **Hãm** tại Huynh Đệ, anh chị em đương số bất đồng
lớn, xa cách cả về địa lý lẫn tình cảm. Gia đình nghèo khó, quan hệ gia
tộc không bền, ít giúp đỡ nhau và chịu ảnh hưởng xấu từ nghiệp duyên của
nhau.`,
  },

  {
    id: 'linh-tinh-tai-huynh-de-dac-dia',
    title: 'Linh Tinh Huynh Đệ - Đắc địa',
    sao: ['Linh Tinh'],
    cung: ['Huynh Đệ'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 78,
    tomTat: `Khi Linh Tinh **Đắc** địa tại Huynh Đệ, anh em đương số cá tính
mạnh, đôi khi cứng đầu nhưng vẫn gắn bó và hỗ trợ nhau khi cần. Phần lớn
có xu hướng làm nghề thiên về sức mạnh, võ nghiệp hoặc các ngành mang tính
thử thách.`,
  },
];
