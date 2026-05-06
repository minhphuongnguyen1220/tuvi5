import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO VŨ KHÚC - Tài Tinh, Quyền Tinh
 */
export const luanGiai_VuKhuc: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung của sao Vũ Khúc
  // ============================================================
  {
    id: 'vu-khuc-tinh-chat-chung',
    title: 'Vũ Khúc - Đặc tính chung',
    sao: ['Vũ Khúc'],
    doUuTien: 30,
    tomTat: `**Vũ Khúc** thuộc chòm Bắc Đẩu, ngũ hành Kim, tính Âm. Đây là Tài
Tinh kiêm Quyền Tinh — chủ về tiền bạc, của cải và quyền lực. Tên thường gọi
tắt là "Vũ".

Vũ Khúc đứng thứ tư trong chòm Tử Vi, nối tiếp Tử Vi, Thiên Cơ, Thái Dương
rồi tới Vũ Khúc, sau đó là Thiên Đồng và Liêm Trinh.

Vị trí miếu hãm:

- Miếu địa
  - Thìn, Tuất, Sửu, Mùi
- Vượng địa
  - Dần, Thân, Tý, Ngọ
- Đắc địa
  - Mão, Dậu
- Hãm địa
  - Tỵ, Hợi`,

    chiTiet: `Vũ Khúc là chính tinh tài lộc hàng đầu trong khoa Tử Vi, đại
diện cho mảng tài chính kinh doanh, khả năng kiếm tiền và quản lý của cải,
cùng khao khát giàu có của đương số.

Khát vọng nơi đương số có Vũ Khúc đều rất thực tế, tính toán cẩn trọng và rõ
ràng chứ không mơ mộng hão huyền. Đôi khi tham vọng quá mức khiến đương số
trở nên cố chấp, sẵn sàng làm nhiều thứ để theo đuổi mong muốn.

Bên cạnh tính tài, Vũ Khúc còn thể hiện sự cứng rắn, quyết đoán và mang uy
nghiêm của người lãnh đạo. Đương số có khả năng lập nghiệp từ tay trắng,
dựa vào năng lực bản thân.`,
  },

  // ============================================================
  // 2. Vũ Khúc - tính "Cô Thần / Quả Tú"
  // ============================================================
  {
    id: 'vu-khuc-co-than',
    title: 'Vũ Khúc - Đặc tính "Cô Thần / Quả Tú / Đế Tinh Cô Đơn"',
    sao: ['Vũ Khúc'],
    doUuTien: 35,
    tomTat: `Một đặc trưng quan trọng cần ghi nhớ: Vũ Khúc mang tính chất Cô
Thần, Quả Tú — được mệnh danh là "Đế Tinh Cô Đơn".

Dù ở trạng thái đắc địa hay hãm địa, Vũ Khúc đều khiến đương số cách biệt
với người thân, ít bè bạn, sống cô độc và ít hạnh phúc gia đình lẫn xã hội;
khó kết nối quan hệ với người khác.

Đặc tính này đặc biệt bất lợi cho nữ mệnh, gây trắc trở duyên nợ.`,
  },
  {
    id: 'vu-khuc-co-than-co-qua-dau-quan-thai-tue',
    title: 'Vũ Khúc + Cô Thần/Quả Tú/Đẩu Quân/Thái Tuế - Tăng lẻ loi',
    sao: ['Vũ Khúc'],
    ketHop: ['Cô Thần', 'Quả Tú', 'Đẩu Quân', 'Thái Tuế'],
    doUuTien: 30,
    tomTat: `Khi Vũ Khúc gặp thêm các sao hiu quạnh như Cô Thần, Quả Tú, Đẩu
Quân hay Thái Tuế, ý nghĩa lẻ loi của đương số tăng lên rất nhiều — đặc biệt
bất lợi cho nữ mệnh.`,
  },

  // ============================================================
  // 3. Vũ Khúc tại Mệnh - tướng mạo
  // ============================================================
  {
    id: 'vu-khuc-tai-menh-tuong-mao',
    title: 'Vũ Khúc tại Mệnh - Tướng mạo (chung)',
    sao: ['Vũ Khúc'],
    cung: ['Mệnh'],
    doUuTien: 75,
    tomTat: `Đương số có Vũ Khúc cư Mệnh thường mang vóc dáng nhỏ nhắn dong
dỏng, đầu to thân nhỏ, giọng vang thanh thoát, tác phong nhanh nhẹn hoạt bát
nhưng vẫn lộ nét lãnh đạm và kín kẽ.`,
  },

  {
    id: 'vu-khuc-tai-menh-dac-tuong-mao',
    title: 'Vũ Khúc Đắc tại Mệnh - Tướng mạo',
    sao: ['Vũ Khúc'],
    cung: ['Mệnh'],
    trangThai: ['Đắc', 'Miếu', 'Vượng'],
    doUuTien: 80,
    tomTat: `Khi Vũ Khúc ở Đắc, Miếu hoặc Vượng địa tại Mệnh, đương số có
thân hình nở nang cao vừa tầm, nặng cân, đầu và mặt dài, vẻ mặt uy nghi,
tiếng nói to và có nốt ruồi ở chỗ kín.`,
  },

  {
    id: 'vu-khuc-tai-menh-ham-tuong-mao',
    title: 'Vũ Khúc Hãm tại Mệnh - Tướng mạo',
    sao: ['Vũ Khúc'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `Khi Vũ Khúc Hãm địa tại Mệnh, đương số dáng người bé nhỏ, thấp,
da hơi đen, có nhiều ngấn vết, tóc rậm và xấu.`,
  },

  // ============================================================
  // 4. Vũ Khúc tại Mệnh - tính cách
  // ============================================================
  {
    id: 'vu-khuc-tai-menh-tinh-cach',
    title: 'Vũ Khúc tại Mệnh - Tính cách (chung)',
    sao: ['Vũ Khúc'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `Đương số có Vũ Khúc cư Mệnh đặc trưng ở chỗ ngay thẳng, kiên
định, giải quyết công việc nhanh, chăm chỉ và ý chí bền bỉ. Tính cô độc, ít
nói, không thích giao du nơi đông người.`,

    chiTiet: `Tính cách của đương số có Vũ Khúc cư Mệnh mang đậm chất "Đế
Tinh Cô Đơn" — cương khắc đặc trưng. Đương số nghiêm nghị, cứng rắn, tài
giỏi, tỏa nét đẹp tự tin; đôi khi rất cố chấp và hiếu thắng. Tính cô độc, ít
nói, không thích giao du nơi đông người; bản chất hành Kim khiến đương số xa
cách với mọi người xung quanh.

Trong xử lý công việc, đương số giải quyết nhanh và quyết đoán, chăm chỉ
chịu khó, ý chí bền bỉ và quyết tâm rất lớn để theo đuổi mục tiêu.`,
  },

  {
    id: 'vu-khuc-tai-menh-dac-tinh-cach',
    title: 'Vũ Khúc Đắc tại Mệnh - Tính cách',
    sao: ['Vũ Khúc'],
    cung: ['Mệnh'],
    trangThai: ['Đắc', 'Miếu', 'Vượng'],
    doUuTien: 85,
    tomTat: `Khi Vũ Khúc ở Đắc, Miếu hoặc Vượng địa tại Mệnh, đương số thông
minh, có chí lớn, sở hữu óc kinh doanh và tài buôn bán. Tính tình mạnh bạo,
quả quyết, cương nghị, thẳng thắn và hiếu thắng.`,
  },

  {
    id: 'vu-khuc-tai-menh-ham-tinh-cach',
    title: 'Vũ Khúc Hãm tại Mệnh - Tính cách',
    sao: ['Vũ Khúc'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    doUuTien: 85,
    tomTat: `Khi Vũ Khúc Hãm địa tại Mệnh, đương số kém thông minh, tham
lận, thiếu lương thiện, hà tiện bủn xỉn và ương ngạnh.`,
  },

  // ============================================================
  // 5. Vũ Khúc tại Mệnh - sự nghiệp tài lộc
  // ============================================================
  {
    id: 'vu-khuc-tai-menh-su-nghiep',
    title: 'Vũ Khúc tại Mệnh - Sự nghiệp & tài lộc (chung)',
    sao: ['Vũ Khúc'],
    cung: ['Mệnh'],
    doUuTien: 75,
    tomTat: `Điểm sáng nhất của đương số có Vũ Khúc cư Mệnh là năng lực kinh
doanh và quản lý tài chính. Đương số được ví như người "nhìn đâu cũng thấy
tiền" — con mắt tinh tường nhìn ra cơ hội buôn bán sinh lời.`,

    chiTiet: `Về lĩnh vực phù hợp, đương số nên theo các ngành kinh doanh,
tài chính và buôn bán làm chủ đạo. Bên cạnh đó, các ngành cần quyết đoán và
kỷ luật như chính trị, quân sự hay luật pháp cũng rất hợp với khí chất của
Vũ Khúc. Khi giữ được tính thẳng thắn, có chữ tín và làm việc thận trọng,
đương số đạt được cả tiền tài lẫn danh vọng.

Thành công của đương số thường đến sau tuổi 30 — đúng câu "lửa thử vàng,
gian nan thử sức" — phải trải qua thử thách, tích lũy kinh nghiệm mới tỏa
sáng rực rỡ.

Đương số mệnh Kim, Thủy hoặc Thổ (tương sinh hoặc tương đồng với Vũ Khúc)
có công danh tài lộc tốt nhất.`,
  },

  {
    id: 'vu-khuc-tai-menh-dac-su-nghiep',
    title: 'Vũ Khúc Đắc tại Mệnh - Sự nghiệp',
    sao: ['Vũ Khúc'],
    cung: ['Mệnh'],
    trangThai: ['Đắc', 'Miếu', 'Vượng'],
    doUuTien: 85,
    tomTat: `Khi Vũ Khúc ở Đắc, Miếu hoặc Vượng địa tại Mệnh, đương số suốt
đời giàu sang, tiền bạc dư dả, được nắm giữ tiền bạc, có uy danh lừng lẫy
và sự nghiệp lớn lao.`,
  },

  {
    id: 'vu-khuc-tai-menh-ham-su-nghiep',
    title: 'Vũ Khúc Hãm tại Mệnh - Sự nghiệp',
    sao: ['Vũ Khúc'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    doUuTien: 85,
    tomTat: `Khi Vũ Khúc Hãm địa tại Mệnh, đương số bất đắc chí, công danh
trắc trở, tiền bạc khó kiếm, phá tán tổ nghiệp, phải ly hương tự lập và
không nhờ được người thân.`,
  },

  {
    id: 'vu-khuc-tai-menh-suu-mui-su-nghiep',
    title: 'Vũ Khúc tại Mệnh ở Sửu / Mùi - Sự nghiệp',
    sao: ['Vũ Khúc'],
    cung: ['Mệnh'],
    chi: ['Sửu', 'Mùi'],
    doUuTien: 85,
    tomTat: `Khi Vũ Khúc tọa Mệnh tại Sửu hoặc Mùi, đương số lúc thiếu thời
no ấm song chẳng mấy khi xứng ý toại lòng về công danh tiền bạc. Sau 30
tuổi mới tốt và càng về già càng khá hơn.`,
  },

  // ============================================================
  // 6. Nữ mệnh Vũ Khúc
  // ============================================================
  {
    id: 'vu-khuc-nu-menh',
    title: 'Vũ Khúc - Nữ mệnh',
    sao: ['Vũ Khúc'],
    cung: ['Mệnh'],
    gioiTinh: 'Nữ',
    doUuTien: 82,
    tomTat: `Nữ mệnh có Vũ Khúc cư Mệnh đúng câu "giỏi việc nước, đảm việc
nhà" — tài giỏi, đảm đang, gan dạ, can trường, vừa tháo vát vừa biết quán
xuyến.

Tính cô độc đặc biệt bất lợi cho nữ mệnh. Đương số thường trắc trở, lận đận
tình duyên, đặt công việc lên trước tình cảm và coi trọng vật chất cùng độc
lập tài chính. Trong gia đình dễ rơi vào cảnh "đoạt quyền chồng" gây bất
hòa; tính bảo thủ, không thích giao tiếp và ngại thể hiện tình cảm khiến
khoảng cách hôn nhân ngày càng lớn.

Lời khuyên cho đương số là cần cân bằng công việc với tình cảm, chịu khó sẻ
chia và mềm mỏng thì hôn nhân vẫn ấm êm. Lá số cần nhiều sao tốt đẹp thì
duyên nợ mới hoàn mỹ và giàu sang.`,
  },

  // ============================================================
  // 7. Vũ Khúc tại Mệnh - phúc thọ tai họa
  // ============================================================
  {
    id: 'vu-khuc-tai-menh-phuc-tho',
    title: 'Vũ Khúc tại Mệnh - Phúc thọ & tai họa (đặc tính chung)',
    sao: ['Vũ Khúc'],
    cung: ['Mệnh'],
    doUuTien: 75,
    tomTat: `Vũ Khúc cư Mệnh chủ yếu mang tính cô độc — dù nam hay nữ đương
số đều trắc trở, lận đận tình duyên và ít hạnh phúc gia đình.`,
  },

  {
    id: 'vu-khuc-tai-menh-phuc-tho-cat-tinh',
    title: 'Vũ Khúc + Hóa Lộc / Lộc Tồn / Khôi Việt / Ân Quang tại Mệnh',
    sao: ['Vũ Khúc'],
    cung: ['Mệnh'],
    ketHop: ['Hóa Lộc', 'Lộc Tồn', 'Thiên Khôi', 'Thiên Việt', 'Ân Quang'],
    doUuTien: 70,
    tomTat: `Khi Vũ Khúc cư Mệnh gặp Hóa Lộc, Lộc Tồn, Thiên Khôi, Thiên Việt
hoặc Ân Quang, đương số được nhiều may mắn.`,
  },

  {
    id: 'vu-khuc-tai-menh-phuc-tho-sat-tinh',
    title: 'Vũ Khúc + Sát tinh đồng cung tại Mệnh',
    sao: ['Vũ Khúc'],
    cung: ['Mệnh'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Khi Vũ Khúc cư Mệnh đồng cung sát tinh — Kình Dương, Đà La, Hỏa
Tinh, Linh Tinh, Địa Không hay Địa Kiếp — đương số cần cẩn trọng vận hạn
về tiền, dễ vướng rắc rối và khó khăn trong công việc.`,
  },

  // ============================================================
  // 8. Bộ sao TỐT của Vũ Khúc
  // ============================================================
  {
    id: 'vu-khuc-bo-sao-tot',
    title: 'Vũ Khúc - Bộ sao TỐT (đặc tính chung)',
    sao: ['Vũ Khúc'],
    doUuTien: 50,
    tomTat: `Bộ sao tốt của Vũ Khúc gồm các tổ hợp với Văn Khúc, Lộc Tồn cùng
Thiên Mã, Hóa Quyền, Thiên Phủ đi cùng Tử Tướng, hoặc Tấu Thư đi cùng Đào
Hồng — tất cả đều tạo ra cách cục đẹp.

Xem từng tổ hợp cụ thể trong các luận giải riêng.`,
  },

  {
    id: 'vu-khuc-bo-sao-tot-van-khuc',
    title: 'Vũ Khúc + Văn Khúc đắc địa',
    sao: ['Vũ Khúc'],
    ketHop: ['Văn Khúc'],
    doUuTien: 45,
    tomTat: `Khi Vũ Khúc gặp Văn Khúc đắc địa, đương số thông minh học rộng,
mang chất "bán văn bán võ" — võ nghiệp ở chốn văn phòng, làm tham mưu hoặc
thiết kế.`,
  },

  {
    id: 'vu-khuc-bo-sao-tot-loc-ton-thien-ma',
    title: 'Vũ Khúc + Lộc Tồn + Thiên Mã',
    sao: ['Vũ Khúc'],
    ketHop: ['Lộc Tồn', 'Thiên Mã'],
    doUuTien: 45,
    tomTat: `Khi Vũ Khúc gặp Lộc Tồn cùng Thiên Mã, đương số lập nghiệp xa
quê, sự nghiệp rất thịnh vượng.`,
  },

  {
    id: 'vu-khuc-bo-sao-tot-loc-ton-thien-ma-dan',
    title: 'Vũ Khúc + Lộc Tồn + Thiên Mã ở Dần',
    sao: ['Vũ Khúc'],
    chi: ['Dần'],
    ketHop: ['Lộc Tồn', 'Thiên Mã'],
    doUuTien: 50,
    tomTat: `Khi Vũ Khúc gặp Lộc Tồn cùng Thiên Mã ở cung Dần, sự nghiệp của
đương số rất lớn ở chốn tha hương.`,
  },

  {
    id: 'vu-khuc-bo-sao-tot-loc-ton-hoa-quyen-dan-than',
    title: 'Vũ Khúc + Lộc Tồn + Hóa Quyền ở Dần / Thân',
    sao: ['Vũ Khúc'],
    chi: ['Dần', 'Thân'],
    ketHop: ['Lộc Tồn', 'Hóa Quyền'],
    doUuTien: 45,
    tomTat: `Khi Vũ Khúc gặp Lộc Tồn cùng Hóa Quyền ở Dần hoặc Thân, đương
số hết sức giàu có.`,
  },

  {
    id: 'vu-khuc-bo-sao-tot-hoa-quyen-nu-menh',
    title: 'Vũ Khúc + Hóa Quyền (nữ mệnh)',
    sao: ['Vũ Khúc'],
    ketHop: ['Hóa Quyền'],
    gioiTinh: 'Nữ',
    doUuTien: 50,
    tomTat: `Nữ mệnh có Vũ Khúc gặp Hóa Quyền thường khôn ngoan tần tảo, gây
dựng sự nghiệp cho chồng đến mức người chồng phải nể sợ.`,
  },

  {
    id: 'vu-khuc-bo-sao-tot-thien-phu-tu-tuong',
    title: 'Vũ Khúc + Thiên Phủ + Tử Tướng',
    sao: ['Vũ Khúc'],
    ketHop: ['Thiên Phủ', 'Tử Vi', 'Thiên Tướng'],
    doUuTien: 45,
    tomTat: `Khi Vũ Khúc gặp Thiên Phủ cùng Tử Vi hoặc Thiên Tướng, đương số
được hưởng phú quý và thọ.`,
  },

  {
    id: 'vu-khuc-bo-sao-tot-tau-thu-dao-hong-thien-hy',
    title: 'Vũ Khúc + Tấu Thư + Đào Hồng + Thiên Hỷ',
    sao: ['Vũ Khúc'],
    ketHop: ['Tấu Thư', 'Đào Hoa', 'Hồng Loan', 'Thiên Hỷ'],
    doUuTien: 45,
    tomTat: `Khi Vũ Khúc gặp Tấu Thư cùng Đào Hoa, Hồng Loan và Thiên Hỷ,
đương số là ca sĩ, kịch sĩ giỏi hoặc thợ may khéo.`,
  },

  {
    id: 'vu-khuc-bo-sao-tot-thien-hinh-thien-rieu-tau-thu',
    title: 'Vũ Khúc + Thiên Hình + Thiên Riêu + Tấu Thư',
    sao: ['Vũ Khúc'],
    ketHop: ['Thiên Hình', 'Thiên Riêu', 'Tấu Thư'],
    doUuTien: 45,
    tomTat: `Khi Vũ Khúc gặp Thiên Hình, Thiên Riêu và Tấu Thư, đương số là
thợ mộc giỏi.`,
  },

  // ============================================================
  // 9. Bộ sao XẤU của Vũ Khúc
  // ============================================================
  {
    id: 'vu-khuc-bo-sao-xau',
    title: 'Vũ Khúc - Bộ sao XẤU (đặc tính chung)',
    sao: ['Vũ Khúc'],
    doUuTien: 50,
    tomTat: `Bộ sao xấu của Vũ Khúc cần đặc biệt cẩn trọng gồm các tổ hợp
với Phá Quân, Thất Sát đi cùng Liêm Trinh, Kình Đà, Kiếp Sát hoặc Hóa Kỵ.

Khi Vũ Khúc Hãm cùng Kiếp Sát đồng cung và có Kình Dương chiếu, đương số
trở nên rất gian ác bất lương, giết người không gớm tay, khát máu.

Xem các tổ hợp cụ thể trong các luận giải riêng.`,
  },

  {
    id: 'vu-khuc-bo-sao-xau-pha-quan-ty-hoi',
    title: 'Vũ Khúc + Phá Quân ở Tỵ / Hợi',
    sao: ['Vũ Khúc'],
    chi: ['Tỵ', 'Hợi'],
    ketHop: ['Phá Quân'],
    doUuTien: 45,
    tomTat: `Khi Vũ Khúc gặp Phá Quân ở Tỵ hoặc Hợi, đương số tham lận, bất
lương, lập nghiệp xa, suốt đời vất vả lao khổ — không giữ được nghiệp tổ
mà phá tán đến hết.`,
  },

  {
    id: 'vu-khuc-bo-sao-xau-sat-pha-liem-mao',
    title: 'Vũ Khúc + Thất Sát + Phá Quân + Liêm Trinh ở Mão',
    sao: ['Vũ Khúc'],
    chi: ['Mão'],
    ketHop: ['Thất Sát', 'Phá Quân', 'Liêm Trinh'],
    doUuTien: 45,
    tomTat: `Khi Vũ Khúc gặp Thất Sát, Phá Quân và Liêm Trinh ở Mão, đương
số dễ gặp tai nạn điện lửa, sấm sét, bệnh thần kinh, cô đơn và bần hàn.`,
  },

  {
    id: 'vu-khuc-bo-sao-xau-kinh-da-pha-quan',
    title: 'Vũ Khúc + Kình Dương + Đà La + Phá Quân',
    sao: ['Vũ Khúc'],
    ketHop: ['Kình Dương', 'Đà La', 'Phá Quân'],
    doUuTien: 45,
    tomTat: `Khi Vũ Khúc gặp Kình Dương, Đà La cùng Phá Quân, đương số bị
khốn hại vì tiền.`,
  },

  {
    id: 'vu-khuc-bo-sao-xau-hoa-ky',
    title: 'Vũ Khúc + Hóa Kỵ',
    sao: ['Vũ Khúc'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 45,
    tomTat: `Khi Vũ Khúc gặp Hóa Kỵ, sự nghiệp đầu tư kinh thương của đương
số lận đận: không hợp kinh doanh, chỉ nên theo công nghiệp, kỹ thuật hoặc
võ nghiệp.`,
  },

  // ============================================================
  // 10. Vũ Phủ Tý / Ngọ tại Mệnh
  // ============================================================
  {
    id: 'vu-khuc-menh-ty-ngo-vu-phu',
    title: 'Vũ Phủ cư Mệnh tại Tý / Ngọ',
    sao: ['Vũ Khúc', 'Thiên Phủ'],
    cung: ['Mệnh'],
    chi: ['Tý', 'Ngọ'],
    ketHop: ['Vũ Phủ', 'Vũ Khúc Thiên Phủ đồng cung'],
    doUuTien: 92,
    tomTat: `Khi Vũ Khúc và Thiên Phủ đồng cung tại Tý hoặc Ngọ, lá số hình
thành cách **Vũ Phủ** — Tài Tinh và Lộc Khố cùng cung.

Đương số cực giàu, có khả năng quản lý tài chính tuyệt vời, giữ được tổ
nghiệp, đường công danh dễ toại nguyện.

Đương số phù hợp với buôn bán, kinh doanh, công kỹ nghệ hoặc nghề pha chế
chế biến.`,
  },

  {
    id: 'vu-khuc-menh-ty-ngo-vu-phu-nu-hoa-ky',
    title: 'Nữ - Vũ Phủ cư Mệnh tại Tý/Ngọ + Hóa Kỵ',
    sao: ['Vũ Khúc', 'Thiên Phủ'],
    cung: ['Mệnh'],
    chi: ['Tý', 'Ngọ'],
    gioiTinh: 'Nữ',
    ketHop: ['Vũ Phủ', 'Hóa Kỵ'],
    doUuTien: 88,
    tomTat: `Nữ mệnh có Vũ Phủ tại Tý hoặc Ngọ gặp Hóa Kỵ chủ về hôn nhân
đứt đoạn hoặc sinh ly, không hạnh phúc đến già.`,
  },

  // ============================================================
  // 11. Vũ Tướng Dần / Thân tại Mệnh
  // ============================================================
  {
    id: 'vu-khuc-menh-dan-than-vu-tuong',
    title: 'Vũ Tướng cư Mệnh tại Dần / Thân',
    sao: ['Vũ Khúc', 'Thiên Tướng'],
    cung: ['Mệnh'],
    chi: ['Dần', 'Thân'],
    ketHop: ['Vũ Tướng', 'Vũ Khúc Thiên Tướng đồng cung'],
    doUuTien: 92,
    tomTat: `Khi Vũ Khúc và Thiên Tướng đồng cung tại Dần hoặc Thân, lá số
hình thành cách **Vũ Tướng** (Thiên Tướng tại Dần Thân là Miếu địa).

Tài Tinh kết hợp Ấn Tinh đem lại cho đương số sức mạnh thực thi đi kèm tài
lộc; quan trường hay thương nghiệp đều đắc lợi.

Khi Vũ Khúc Hóa Kỵ đồng độ, tính chất Thiên Tướng biến thành xấu, đương số
chỉ hợp với nghề chuyên môn để mưu sinh.`,
  },

  // ============================================================
  // 12. Vũ Tham Sửu / Mùi tại Mệnh
  // ============================================================
  {
    id: 'vu-khuc-menh-suu-mui-vu-tham',
    title: 'Vũ Tham cư Mệnh tại Sửu / Mùi',
    sao: ['Vũ Khúc', 'Tham Lang'],
    cung: ['Mệnh'],
    chi: ['Sửu', 'Mùi'],
    ketHop: ['Vũ Tham', 'Vũ Khúc Tham Lang đồng cung'],
    doUuTien: 92,
    tomTat: `Khi Vũ Khúc và Tham Lang đồng cung tại Sửu hoặc Mùi, lá số hình
thành cách **Vũ Tham**.

Đương số rất hợp nghề kinh doanh, làm thợ khéo, công kỹ nghệ và mang tinh
thần nghệ sĩ.

Đặc trưng của cách này là thành công đến chậm — phải sau 30 tuổi mới phát
triển. Đương số có nhà đất tổ tiên nhưng phải tự tay tạo dựng mới lớn lao;
càng lớn tuổi càng có nhiều nhà cửa.`,
  },

  {
    id: 'vu-khuc-menh-suu-mui-vu-tham-loc',
    title: 'Vũ Tham cư Mệnh tại Sửu / Mùi + Lộc Tồn + Hóa Lộc',
    sao: ['Vũ Khúc', 'Tham Lang'],
    cung: ['Mệnh'],
    chi: ['Sửu', 'Mùi'],
    ketHop: ['Lộc Tồn', 'Hóa Lộc'],
    doUuTien: 87,
    tomTat: `Khi Vũ Tham tại Sửu hoặc Mùi gặp thêm Lộc Tồn cùng Hóa Lộc, sự
nghiệp tiền bạc của đương số phát triển nhanh chóng; hậu vận có của ăn của
để.`,
  },

  {
    id: 'vu-khuc-menh-suu-mui-vu-tham-nu-hoa-ky',
    title: 'Nữ - Vũ Tham cư Mệnh tại Sửu/Mùi + Hóa Kỵ',
    sao: ['Vũ Khúc', 'Tham Lang'],
    cung: ['Mệnh'],
    chi: ['Sửu', 'Mùi'],
    gioiTinh: 'Nữ',
    ketHop: ['Vũ Tham', 'Hóa Kỵ'],
    doUuTien: 88,
    tomTat: `Nữ mệnh có Vũ Tham tại Sửu hoặc Mùi gặp Hóa Kỵ cần cảnh báo
nguy cơ bạn đời phá gia, hao tài.`,
  },

  // ============================================================
  // 13. Vũ Sát Mão / Dậu tại Mệnh
  // ============================================================
  {
    id: 'vu-khuc-menh-mao-dau-vu-sat',
    title: 'Vũ Sát cư Mệnh tại Mão / Dậu',
    sao: ['Vũ Khúc', 'Thất Sát'],
    cung: ['Mệnh'],
    chi: ['Mão', 'Dậu'],
    ketHop: ['Vũ Sát', 'Vũ Khúc Thất Sát đồng cung'],
    doUuTien: 90,
    tomTat: `Khi Vũ Khúc và Thất Sát đồng cung tại Mão hoặc Dậu, lá số hình
thành cách **Vũ Sát**.

Đương số thành công trong công danh sự nghiệp nhưng phải đi xa mới tốt.
Đường công danh tuổi trẻ lên xuống thất thường, càng lớn tuổi sự nghiệp
càng tốt.

Hợp với các ngành quân sự, kỹ thuật, công kỹ nghệ, thầu khoán, xây dựng và
địa ốc.`,
  },

  // ============================================================
  // 14. Vũ Phá Tỵ / Hợi tại Mệnh - cách XẤU
  // ============================================================
  {
    id: 'vu-khuc-menh-ty-hoi-vu-pha',
    title: 'Vũ Phá cư Mệnh tại Tỵ / Hợi - Cách XẤU',
    sao: ['Vũ Khúc', 'Phá Quân'],
    cung: ['Mệnh'],
    chi: ['Tỵ', 'Hợi'],
    ketHop: ['Vũ Phá', 'Vũ Khúc Phá Quân đồng cung'],
    doUuTien: 90,
    tomTat: `Khi Vũ Khúc và Phá Quân đồng cung tại Tỵ hoặc Hợi, lá số hình
thành cách **Vũ Phá** — cách xấu nhất của Vũ Khúc, vì Vũ Khúc tại Tỵ và Hợi
vốn đã Hãm địa.

Đương số tham lận, bất lương, phải lập nghiệp ở xa và suốt đời vất vả lao
khổ; không giữ được nghiệp tổ, phá tán cho đến hết.

Đi vào quan chức không tốt, chỉ hợp với làm ăn mua bán — nhưng vẫn nhiều
rủi ro.`,
  },

  // ============================================================
  // 15. Vũ Khúc đơn thủ tại Thìn / Tuất
  // ============================================================
  {
    id: 'vu-khuc-menh-thin-tuat',
    title: 'Vũ Khúc đơn thủ cư Mệnh tại Thìn / Tuất',
    sao: ['Vũ Khúc'],
    cung: ['Mệnh'],
    chi: ['Thìn', 'Tuất'],
    doUuTien: 90,
    tomTat: `Khi Vũ Khúc đơn thủ tại Thìn hoặc Tuất — Miếu địa, vị trí rất
đẹp — cơ nghiệp tiền nhân để lại cho đương số rất lớn lao, càng về sau càng
thịnh vượng.`,
  },

  {
    id: 'vu-khuc-tai-phu-the-thin-tuat',
    title: 'Vũ Khúc tại Phu Thê ở Thìn / Tuất',
    sao: ['Vũ Khúc'],
    cung: ['Phu Thê'],
    chi: ['Thìn', 'Tuất'],
    doUuTien: 82,
    tomTat: `Khi Vũ Khúc cư Phu Thê ở Thìn hoặc Tuất, đương số nên lập gia
đình muộn hoặc lấy người bằng tuổi mình để được hưởng giàu sang nhờ đối
tượng.`,
  },

  {
    id: 'vu-khuc-tai-huynh-de-thin-tuat-cat',
    title: 'Vũ Khúc + cát tinh tại Huynh Đệ ở Thìn / Tuất',
    sao: ['Vũ Khúc'],
    cung: ['Huynh Đệ'],
    chi: ['Thìn', 'Tuất'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 75,
    tomTat: `Khi Vũ Khúc cư Huynh Đệ ở Thìn hoặc Tuất gặp các cát tinh như
Tả Phù, Hữu Bật, Văn Xương, Văn Khúc, Thiên Khôi hay Thiên Việt, anh em của
đương số hòa hợp, dù ít trợ giúp nhau nhưng tình cảm gắn bó.`,
  },

  // ============================================================
  // 16. Vũ Khúc ở Phụ Mẫu
  // ============================================================
  {
    id: 'vu-khuc-tai-phu-mau',
    title: 'Vũ Khúc tại Phụ Mẫu (đặc tính chung)',
    sao: ['Vũ Khúc'],
    cung: ['Phụ Mẫu'],
    doUuTien: 78,
    tomTat: `Khi Vũ Khúc cư Phụ Mẫu, cha mẹ của đương số giỏi kinh doanh
buôn bán, có điều kiện kinh tế khá giả.

Vì Vũ Khúc là sao hình khắc, tình cảm cha mẹ và con cái không nồng ấm, ít
gần gũi.`,
  },

  {
    id: 'vu-khuc-tai-phu-mau-pha-quan',
    title: 'Vũ Khúc + Phá Quân tại Phụ Mẫu',
    sao: ['Vũ Khúc'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Phá Quân'],
    doUuTien: 73,
    tomTat: `Khi Vũ Khúc cư Phụ Mẫu gặp Phá Quân, cha mẹ của đương số bất
hòa, thọ duyên không bền và thọ mệnh không cao.`,
  },

  {
    id: 'vu-khuc-tai-phu-mau-co-qua-dau-quan-thien-hinh',
    title: 'Vũ Khúc + Cô Quả / Đẩu Quân / Thiên Hình tại Phụ Mẫu',
    sao: ['Vũ Khúc'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Cô Thần', 'Quả Tú', 'Đẩu Quân', 'Thiên Hình'],
    doUuTien: 73,
    tomTat: `Khi Vũ Khúc cư Phụ Mẫu gặp Cô Thần, Quả Tú, Đẩu Quân hoặc Thiên
Hình, cha mẹ của đương số khó sống với nhau đến già.`,
  },

  // ============================================================
  // 17. Vũ Khúc ở Phúc Đức
  // ============================================================
  {
    id: 'vu-khuc-tai-phuc-duc',
    title: 'Vũ Khúc tại Phúc Đức (chung)',
    sao: ['Vũ Khúc'],
    cung: ['Phúc Đức'],
    doUuTien: 73,
    tomTat: `Khi Vũ Khúc cư Phúc Đức, dòng họ của đương số có người góa
chồng, sống cô đơn.

Mồ mả tổ tiên thường đặt ở chỗ xa, riêng lẻ, ít được con cháu quan tâm
chăm sóc.`,
  },
  {
    id: 'vu-khuc-tai-phuc-duc-co-qua-tang-mon',
    title: 'Vũ Khúc tại Phúc Đức + Cô Quả/Tang Môn - Góa chồng cô đơn',
    sao: ['Vũ Khúc'],
    cung: ['Phúc Đức'],
    ketHop: ['Cô Thần', 'Quả Tú', 'Tang Môn'],
    doUuTien: 68,
    tomTat: `Khi Vũ Khúc cư Phúc Đức gặp Cô Thần, Quả Tú hoặc Tang Môn, dòng
họ của đương số có người góa chồng, sống cô đơn rất rõ rệt.`,
  },

  {
    id: 'vu-khuc-tai-phuc-duc-hoa-ky',
    title: 'Vũ Khúc + Hóa Kỵ tại Phúc Đức',
    sao: ['Vũ Khúc'],
    cung: ['Phúc Đức'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 68,
    tomTat: `Khi Vũ Khúc cư Phúc Đức gặp Hóa Kỵ, đương số hao tốn tiền bạc.`,
  },

  {
    id: 'vu-khuc-tai-phuc-duc-mieu-vuong',
    title: 'Vũ Khúc Miếu/Vượng tại Phúc Đức',
    sao: ['Vũ Khúc'],
    cung: ['Phúc Đức'],
    trangThai: ['Miếu', 'Vượng'],
    doUuTien: 76,
    tomTat: `Khi Vũ Khúc ở Miếu hoặc Vượng địa tại Phúc Đức, dòng họ của
đương số có nhiều người kinh doanh giàu có, cuộc sống thuận lợi.`,
  },

  {
    id: 'vu-khuc-tai-phuc-duc-ham',
    title: 'Vũ Khúc Hãm tại Phúc Đức',
    sao: ['Vũ Khúc'],
    cung: ['Phúc Đức'],
    trangThai: ['Hãm'],
    doUuTien: 76,
    tomTat: `Khi Vũ Khúc Hãm địa tại Phúc Đức, đương số hao tổn tinh thần,
dễ phải suy nghĩ lo lắng nhiều.`,
  },

  // ============================================================
  // 18. Vũ Khúc ở Điền Trạch - VỊ TRÍ ĐẮC ĐỊA NHẤT
  // ============================================================
  {
    id: 'vu-khuc-tai-dien-trach',
    title: 'Vũ Khúc tại Điền Trạch - Vị trí ĐẮC ĐỊA NHẤT (đặc tính chung)',
    sao: ['Vũ Khúc'],
    cung: ['Điền Trạch'],
    doUuTien: 85,
    tomTat: `Cung Điền Trạch là vị trí đắc địa nhất của Vũ Khúc:

> Vũ Khúc mà đóng cung Điền,
> Phú gia địch quốc vượng quyền hào môn

Đương số lắm đất nhiều nhà, có khả năng tích tụ điền sản lớn.

Khi Miếu địa, đương số được thừa kế sản nghiệp lớn của cha ông; gặp Lộc
tinh hay tá cát còn có thể mua thêm và phát triển sản nghiệp. Đương số
thuận lợi với việc xây dựng và mua bán đất đai.

Tuy vậy, đương số dễ bị ảnh hưởng phong thủy. Vì Vũ Khúc mang tính cô độc
nên nhà cửa thường ít người, không khí lạnh lẽo.`,
  },
  {
    id: 'vu-khuc-tai-dien-trach-hoa-ky',
    title: 'Vũ Khúc tại Điền Trạch + Hóa Kỵ - Phong thủy bất lợi',
    sao: ['Vũ Khúc'],
    cung: ['Điền Trạch'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 80,
    tomTat: `Khi Vũ Khúc cư Điền Trạch gặp Hóa Kỵ, đương số rất dễ bị ảnh
hưởng phong thủy xấu liên quan đến nhà cửa, đất đai và mộ phần.`,
  },

  {
    id: 'vu-khuc-tai-dien-trach-thin-tuat',
    title: 'Vũ Khúc đơn thủ tại Điền Trạch ở Thìn / Tuất',
    sao: ['Vũ Khúc'],
    cung: ['Điền Trạch'],
    chi: ['Thìn', 'Tuất'],
    doUuTien: 85,
    tomTat: `Khi Vũ Khúc đơn thủ tại Điền Trạch ở Thìn hoặc Tuất, cơ nghiệp
tổ tiên của đương số rất lớn lao, càng về sau càng thịnh vượng.`,
  },

  {
    id: 'vu-khuc-tai-dien-trach-thien-phu',
    title: 'Vũ Khúc + Thiên Phủ tại Điền Trạch',
    sao: ['Vũ Khúc'],
    cung: ['Điền Trạch'],
    ketHop: ['Thiên Phủ'],
    doUuTien: 83,
    tomTat: `Khi Vũ Khúc cư Điền Trạch gặp Thiên Phủ, đương số giữ gìn được
tổ nghiệp; nếu không hưởng điền sản thì cũng thừa hưởng nghề nghiệp của
cha mẹ và dòng họ. Về sau đương số làm nên sự nghiệp nhà đất.`,
  },

  {
    id: 'vu-khuc-tai-dien-trach-tham-lang',
    title: 'Vũ Khúc + Tham Lang tại Điền Trạch',
    sao: ['Vũ Khúc'],
    cung: ['Điền Trạch'],
    ketHop: ['Tham Lang'],
    doUuTien: 83,
    tomTat: `Khi Vũ Khúc cư Điền Trạch gặp Tham Lang, đương số có nhà đất
tổ tiên nhưng phải tự tay tạo dựng mới lớn lao. Càng lớn tuổi đương số
càng có nhiều nhà cửa.`,
  },

  {
    id: 'vu-khuc-tai-dien-trach-thien-tuong',
    title: 'Vũ Khúc + Thiên Tướng tại Điền Trạch',
    sao: ['Vũ Khúc'],
    cung: ['Điền Trạch'],
    ketHop: ['Thiên Tướng'],
    doUuTien: 83,
    tomTat: `Khi Vũ Khúc cư Điền Trạch gặp Thiên Tướng, nhà đất của đương
số ban đầu mua vào bán ra thất thường, càng lớn tuổi càng nhiều.`,
  },

  {
    id: 'vu-khuc-tai-dien-trach-that-sat',
    title: 'Vũ Khúc + Thất Sát tại Điền Trạch',
    sao: ['Vũ Khúc'],
    cung: ['Điền Trạch'],
    ketHop: ['Thất Sát'],
    doUuTien: 83,
    tomTat: `Khi Vũ Khúc cư Điền Trạch gặp Thất Sát, đương số không có hoặc
có rất ít điền sản; nhà tổ tiên do hoàn cảnh cũng phải bỏ. Về già đương số
mới có nơi ăn chốn ở chắc chắn.`,
  },

  // ============================================================
  // 19. Vũ Khúc ở Quan Lộc
  // ============================================================
  {
    id: 'vu-khuc-tai-quan-loc',
    title: 'Vũ Khúc tại Quan Lộc (đặc tính chung)',
    sao: ['Vũ Khúc'],
    cung: ['Quan Lộc'],
    doUuTien: 85,
    tomTat: `Khi Vũ Khúc cư Quan Lộc, sự nghiệp của đương số rất tốt.

Đương số bản Mệnh hành Thổ, Thủy hoặc Kim, Vũ Khúc đắc địa và có thêm cát
tinh thì sự nghiệp công danh vô cùng hiển đạt.

Hai lĩnh vực chính phù hợp gồm:

- Kinh doanh, tài chính, vận tải, vàng bạc, khoa học kỹ thuật (mảng Kim)
- Quân đội, công an, cảnh sát, pháp luật (cần quyền uy và kỷ luật)`,
  },

  {
    id: 'vu-khuc-tai-quan-loc-loc-quyen',
    title: 'Vũ Khúc + Lộc Tồn / Hóa Lộc / Hóa Quyền tại Quan Lộc',
    sao: ['Vũ Khúc'],
    cung: ['Quan Lộc'],
    ketHop: ['Lộc Tồn', 'Hóa Lộc', 'Hóa Quyền'],
    doUuTien: 80,
    tomTat: `Khi Vũ Khúc cư Quan Lộc gặp Lộc Tồn, Hóa Lộc hoặc Hóa Quyền, sự
nghiệp đương số hiển đạt và đạt địa vị cao.`,
  },

  {
    id: 'vu-khuc-tai-quan-loc-hoa-linh',
    title: 'Vũ Khúc + Hỏa / Linh tại Quan Lộc',
    sao: ['Vũ Khúc'],
    cung: ['Quan Lộc'],
    ketHop: ['Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 80,
    tomTat: `Khi Vũ Khúc cư Quan Lộc gặp Hỏa Tinh hoặc Linh Tinh, đương số
mất chức hay thất nghiệp ít nhất một lần trong đời.`,
  },

  {
    id: 'vu-khuc-tai-quan-loc-hoa-ky',
    title: 'Vũ Khúc + Hóa Kỵ tại Quan Lộc',
    sao: ['Vũ Khúc'],
    cung: ['Quan Lộc'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 80,
    tomTat: `Khi Vũ Khúc cư Quan Lộc gặp Hóa Kỵ, đương số không hợp kinh
doanh hay đầu tư tài chính, chỉ nên theo công nghiệp, kỹ thuật hoặc võ
nghiệp.`,
  },

  {
    id: 'vu-khuc-tai-quan-loc-thien-phu',
    title: 'Vũ Khúc + Thiên Phủ tại Quan Lộc',
    sao: ['Vũ Khúc'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Phủ'],
    doUuTien: 80,
    tomTat: `Khi Vũ Khúc cư Quan Lộc gặp Thiên Phủ, đường công danh của
đương số dễ toại nguyện, có tài hoa, hoặc theo buôn bán, kinh doanh, công
kỹ nghệ, pha chế chế biến đều phát tài.`,
  },

  {
    id: 'vu-khuc-tai-quan-loc-thien-tuong',
    title: 'Vũ Khúc + Thiên Tướng tại Quan Lộc',
    sao: ['Vũ Khúc'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Tướng'],
    doUuTien: 80,
    tomTat: `Khi Vũ Khúc cư Quan Lộc gặp Thiên Tướng, đương số đắc lợi cả
trong quan trường lẫn thương nghiệp.`,
  },

  {
    id: 'vu-khuc-tai-quan-loc-that-sat',
    title: 'Vũ Khúc + Thất Sát tại Quan Lộc',
    sao: ['Vũ Khúc'],
    cung: ['Quan Lộc'],
    ketHop: ['Thất Sát'],
    doUuTien: 80,
    tomTat: `Khi Vũ Khúc cư Quan Lộc gặp Thất Sát, đương số thành công trong
công danh sự nghiệp nhưng phải đi xa mới tốt. Tuổi trẻ đường công danh lên
xuống thất thường. Hợp với các ngành quân sự, kỹ thuật, công kỹ nghệ, thầu
khoán, xây dựng và địa ốc.`,
  },

  {
    id: 'vu-khuc-tai-quan-loc-pha-quan',
    title: 'Vũ Khúc + Phá Quân tại Quan Lộc',
    sao: ['Vũ Khúc'],
    cung: ['Quan Lộc'],
    ketHop: ['Phá Quân'],
    doUuTien: 80,
    tomTat: `Khi Vũ Khúc cư Quan Lộc gặp Phá Quân, đương số đi vào quan
chức không tốt bằng làm ăn mua bán.`,
  },

  {
    id: 'vu-khuc-tai-quan-loc-tham-lang',
    title: 'Vũ Khúc + Tham Lang tại Quan Lộc',
    sao: ['Vũ Khúc'],
    cung: ['Quan Lộc'],
    ketHop: ['Tham Lang'],
    doUuTien: 80,
    tomTat: `Khi Vũ Khúc cư Quan Lộc gặp Tham Lang, đương số rất hợp các
nghề kinh doanh, thợ khéo, công kỹ nghệ và mang tinh thần nghệ sĩ — nhưng
phải sau 30 tuổi mới phát.`,
  },

  // ============================================================
  // 20. Vũ Khúc ở Nô Bộc
  // ============================================================
  {
    id: 'vu-khuc-tai-no-boc',
    title: 'Vũ Khúc tại Nô Bộc (đặc tính chung)',
    sao: ['Vũ Khúc'],
    cung: ['Nô Bộc'],
    doUuTien: 70,
    tomTat: `Khi Vũ Khúc cư Nô Bộc, đây là vị trí chưa đẹp vì Vũ Khúc vốn
mang tính Cô Thần.`,
  },

  {
    id: 'vu-khuc-tai-no-boc-ty-ngo',
    title: 'Vũ Khúc tại Nô Bộc ở Tý / Ngọ',
    sao: ['Vũ Khúc'],
    cung: ['Nô Bộc'],
    chi: ['Tý', 'Ngọ'],
    doUuTien: 75,
    tomTat: `Khi Vũ Khúc cư Nô Bộc ở Tý hoặc Ngọ, đương số có nhiều bạn bè
tài giỏi và được hỗ trợ.`,
  },

  {
    id: 'vu-khuc-tai-no-boc-tham-lang',
    title: 'Vũ Khúc + Tham Lang tại Nô Bộc',
    sao: ['Vũ Khúc'],
    cung: ['Nô Bộc'],
    ketHop: ['Tham Lang'],
    doUuTien: 70,
    tomTat: `Khi Vũ Khúc cư Nô Bộc gặp Tham Lang, bạn bè của đương số phần
nhiều chỉ là bạn xã giao, không giúp đỡ được nhau.`,
  },

  {
    id: 'vu-khuc-tai-no-boc-hoa-loc-ta-huu',
    title: 'Vũ Khúc + Hóa Lộc + Tả Hữu tại Nô Bộc',
    sao: ['Vũ Khúc'],
    cung: ['Nô Bộc'],
    ketHop: ['Hóa Lộc', 'Tả Phù', 'Hữu Bật'],
    doUuTien: 70,
    tomTat: `Khi Vũ Khúc cư Nô Bộc gặp Hóa Lộc cùng Tả Phù hoặc Hữu Bật,
đương số có thực quyền và được kính trọng. Nếu thiếu Tả Hữu thì phải bôn
ba tự lực.`,
  },

  {
    id: 'vu-khuc-tai-no-boc-sat-pha-sat-tinh',
    title: 'Vũ Khúc + Thất Sát / Phá Quân / Sát tinh tại Nô Bộc',
    sao: ['Vũ Khúc'],
    cung: ['Nô Bộc'],
    ketHop: ['Thất Sát', 'Phá Quân', 'Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 70,
    tomTat: `Khi Vũ Khúc cư Nô Bộc gặp Thất Sát, Phá Quân hoặc các sát tinh
khác, đương số dễ bị bạn bè phản bội, lợi dụng tiền bạc — đúng cảnh "làm
ơn mắc oán".`,
  },

  {
    id: 'vu-khuc-tai-no-boc-thien-phu',
    title: 'Vũ Khúc + Thiên Phủ tại Nô Bộc',
    sao: ['Vũ Khúc'],
    cung: ['Nô Bộc'],
    ketHop: ['Thiên Phủ'],
    doUuTien: 70,
    tomTat: `Khi Vũ Khúc cư Nô Bộc gặp Thiên Phủ, đương số có nhiều bạn bè
tốt, có quyền thế và nhận được nhiều giúp đỡ.`,
  },

  // ============================================================
  // 21. Vũ Khúc ở Thiên Di
  // ============================================================
  {
    id: 'vu-khuc-tai-thien-di',
    title: 'Vũ Khúc tại Thiên Di (đặc tính chung)',
    sao: ['Vũ Khúc'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `Khi Vũ Khúc cư Thiên Di, đương số phải đi xa làm ăn.`,
  },

  {
    id: 'vu-khuc-tai-thien-di-dac-cat',
    title: 'Vũ Khúc Đắc + cát tinh tại Thiên Di',
    sao: ['Vũ Khúc'],
    cung: ['Thiên Di'],
    trangThai: ['Đắc', 'Miếu', 'Vượng'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 80,
    tomTat: `Khi Vũ Khúc đắc địa tại Thiên Di gặp cát tinh — đặc biệt với
đương số mệnh Thủy, Thổ hoặc Kim — ra ngoài buôn bán làm giàu rất dễ dàng.`,
  },

  {
    id: 'vu-khuc-tai-thien-di-ham',
    title: 'Vũ Khúc Hãm tại Thiên Di',
    sao: ['Vũ Khúc'],
    cung: ['Thiên Di'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `Khi Vũ Khúc Hãm địa tại Thiên Di, nhất là với mệnh khắc, đương
số chỉ làm tiểu thương và khó kiếm tiền.`,
  },

  {
    id: 'vu-khuc-tai-thien-di-loc-ma',
    title: 'Vũ Khúc + Lộc Tồn / Hóa Lộc / Thiên Mã tại Thiên Di',
    sao: ['Vũ Khúc'],
    cung: ['Thiên Di'],
    ketHop: ['Lộc Tồn', 'Hóa Lộc', 'Thiên Mã'],
    doUuTien: 75,
    tomTat: `Khi Vũ Khúc cư Thiên Di gặp Lộc Tồn, Hóa Lộc hoặc Thiên Mã,
việc ra ngoài của đương số rất dễ dàng và hưởng nhiều phúc lộc.`,
  },

  {
    id: 'vu-khuc-tai-thien-di-thien-tuong-cat',
    title: 'Vũ Khúc + Thiên Tướng + cát tại Thiên Di',
    sao: ['Vũ Khúc'],
    cung: ['Thiên Di'],
    ketHop: ['Thiên Tướng'],
    doUuTien: 75,
    tomTat: `Khi Vũ Khúc cư Thiên Di gặp Thiên Tướng cùng cát tinh, đương
số được đề bạt và có quý nhân phù trợ.`,
  },

  {
    id: 'vu-khuc-tai-thien-di-ky-khong-kiep-kinh-da',
    title: 'Vũ Khúc + Hóa Kỵ / Không Kiếp / Kình Đà tại Thiên Di',
    sao: ['Vũ Khúc'],
    cung: ['Thiên Di'],
    ketHop: ['Hóa Kỵ', 'Địa Không', 'Địa Kiếp', 'Kình Dương', 'Đà La'],
    doUuTien: 75,
    tomTat: `Khi Vũ Khúc cư Thiên Di gặp Hóa Kỵ, Địa Không, Địa Kiếp, Kình
Dương hoặc Đà La, đương số dễ mất tiền và gặp thị phi tranh chấp.`,
  },

  {
    id: 'vu-khuc-tai-thien-di-sat-pha',
    title: 'Vũ Khúc + Thất Sát / Phá Quân tại Thiên Di',
    sao: ['Vũ Khúc'],
    cung: ['Thiên Di'],
    ketHop: ['Thất Sát', 'Phá Quân'],
    doUuTien: 75,
    tomTat: `Khi Vũ Khúc cư Thiên Di gặp Thất Sát hoặc Phá Quân, đương số
ra ngoài cô độc, tinh thần bất an.`,
  },

  // ============================================================
  // 22. Vũ Khúc ở Tật Ách
  // ============================================================
  {
    id: 'vu-khuc-tai-tat-ach',
    title: 'Vũ Khúc tại Tật Ách (đặc tính chung)',
    sao: ['Vũ Khúc'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `Khi Vũ Khúc cư Tật Ách, sức khỏe đương số chủ về các bệnh
đường hô hấp và khí huyết. Yếu tố Kim mang khí "tiêu sát" nên dễ tổn
thương.

- Đương số bản mệnh hành Mộc hoặc Hỏa: bệnh nhiều hơn
- Hợp bản mệnh và Vũ Khúc đắc địa: khí huyết tốt, mạnh khỏe luôn
- Hãm địa và khắc bản mệnh: hay mắc bệnh phong hoặc trĩ`,
  },

  {
    id: 'vu-khuc-tai-tat-ach-mao',
    title: 'Vũ Khúc Đắc tại Tật Ách ở Mão',
    sao: ['Vũ Khúc'],
    cung: ['Tật Ách'],
    chi: ['Mão'],
    trangThai: ['Đắc'],
    doUuTien: 80,
    tomTat: `Khi Vũ Khúc Đắc địa tại Tật Ách ở Mão, đương số dễ mắc bệnh
thần kinh hoặc khí huyết.`,
  },

  {
    id: 'vu-khuc-tai-tat-ach-dau',
    title: 'Vũ Khúc tại Tật Ách ở Dậu',
    sao: ['Vũ Khúc'],
    cung: ['Tật Ách'],
    chi: ['Dậu'],
    doUuTien: 80,
    tomTat: `Khi Vũ Khúc cư Tật Ách ở Dậu, đương số bị nội thương khó chữa.`,
  },

  {
    id: 'vu-khuc-tai-tat-ach-thien-tuong',
    title: 'Vũ Khúc + Thiên Tướng tại Tật Ách',
    sao: ['Vũ Khúc'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Tướng'],
    doUuTien: 75,
    tomTat: `Khi Vũ Khúc cư Tật Ách gặp Thiên Tướng, đương số có ám tật.`,
  },

  {
    id: 'vu-khuc-tai-tat-ach-tham-xuong-khuc',
    title: 'Vũ Khúc + Tham Lang + Xương Khúc tại Tật Ách',
    sao: ['Vũ Khúc'],
    cung: ['Tật Ách'],
    ketHop: ['Tham Lang', 'Văn Xương', 'Văn Khúc'],
    doUuTien: 75,
    tomTat: `Khi Vũ Khúc cư Tật Ách gặp Tham Lang cùng Văn Xương hoặc Văn
Khúc, đương số có nhiều nốt ruồi, mắc bệnh lông tóc.`,
  },

  {
    id: 'vu-khuc-tai-tat-ach-that-sat',
    title: 'Vũ Khúc + Thất Sát tại Tật Ách',
    sao: ['Vũ Khúc'],
    cung: ['Tật Ách'],
    ketHop: ['Thất Sát'],
    doUuTien: 75,
    tomTat: `Khi Vũ Khúc cư Tật Ách gặp Thất Sát, đương số dễ mắc bệnh ở
bộ máy tiêu hóa.`,
  },

  {
    id: 'vu-khuc-tai-tat-ach-long-tri',
    title: 'Vũ Khúc + Long Trì tại Tật Ách',
    sao: ['Vũ Khúc'],
    cung: ['Tật Ách'],
    ketHop: ['Long Trì'],
    doUuTien: 75,
    tomTat: `Khi Vũ Khúc cư Tật Ách gặp Long Trì, đương số có nốt ruồi đỏ.`,
  },

  {
    id: 'vu-khuc-tai-tat-ach-thien-rieu',
    title: 'Vũ Khúc + Thiên Riêu tại Tật Ách',
    sao: ['Vũ Khúc'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Riêu'],
    doUuTien: 75,
    tomTat: `Khi Vũ Khúc cư Tật Ách gặp Thiên Riêu, đương số mắc bệnh tê
thấp hoặc phù chân tay.`,
  },

  {
    id: 'vu-khuc-tai-tat-ach-rieu-viet-pha-toai',
    title: 'Vũ Khúc + Thiên Riêu + Thiên Việt + Phá Toái tại Tật Ách',
    sao: ['Vũ Khúc'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Riêu', 'Thiên Việt', 'Phá Toái'],
    doUuTien: 75,
    tomTat: `Khi Vũ Khúc cư Tật Ách gặp Thiên Riêu, Thiên Việt và Phá Toái,
đương số bị câm.`,
  },

  {
    id: 'vu-khuc-tai-tat-ach-kinh-da-thien-hinh',
    title: 'Vũ Khúc + Kình Đà / Thiên Hình tại Tật Ách',
    sao: ['Vũ Khúc'],
    cung: ['Tật Ách'],
    ketHop: ['Kình Dương', 'Đà La', 'Thiên Hình'],
    doUuTien: 75,
    tomTat: `Khi Vũ Khúc cư Tật Ách gặp Kình Dương, Đà La hoặc Thiên Hình,
đương số dễ phải phẫu thuật hoặc tổn thương nặng.`,
  },

  {
    id: 'vu-khuc-tai-tat-ach-hoa-ma-khoc-hu',
    title: 'Vũ Khúc + Hỏa Tinh / Thiên Mã / Thiên Khốc / Thiên Hư tại Tật Ách',
    sao: ['Vũ Khúc'],
    cung: ['Tật Ách'],
    ketHop: ['Hỏa Tinh', 'Thiên Mã', 'Thiên Khốc', 'Thiên Hư'],
    doUuTien: 75,
    tomTat: `Khi Vũ Khúc cư Tật Ách gặp Hỏa Tinh, Thiên Mã, Thiên Khốc hoặc
Thiên Hư, đương số thường bị chảy máu mũi.`,
  },

  {
    id: 'vu-khuc-tai-tat-ach-khong-kiep',
    title: 'Vũ Khúc + Địa Không / Địa Kiếp tại Tật Ách',
    sao: ['Vũ Khúc'],
    cung: ['Tật Ách'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 75,
    tomTat: `Khi Vũ Khúc cư Tật Ách gặp Địa Không hoặc Địa Kiếp, đương số
mắc bệnh khí quản như lao hay viêm phổi; sát tinh nhẹ thì chỉ bị ho.`,
  },

  // ============================================================
  // 23. Vũ Khúc ở Tài Bạch - VỊ TRÍ HỢP VỊ
  // ============================================================
  {
    id: 'vu-khuc-tai-tai-bach',
    title: 'Vũ Khúc tại Tài Bạch - Vị trí HỢP VỊ (đặc tính chung)',
    sao: ['Vũ Khúc'],
    cung: ['Tài Bạch'],
    doUuTien: 80,
    tomTat: `Vũ Khúc vốn là sao chủ cung Tài Bạch, đóng tại đây rất hợp vị.

Đương số cần tránh các sao khắc gồm Phá Quân đồng cung, Đại Tiểu Hao, Tuần
Triệt, Địa Không, Địa Kiếp, Kình Dương, Đà La, Phục Binh và Hóa Kỵ.`,
  },

  {
    id: 'vu-khuc-tai-tai-bach-mieu-vuong',
    title: 'Vũ Khúc Miếu/Vượng tại Tài Bạch',
    sao: ['Vũ Khúc'],
    cung: ['Tài Bạch'],
    trangThai: ['Miếu', 'Vượng'],
    doUuTien: 86,
    tomTat: `Khi Vũ Khúc ở Miếu hoặc Vượng địa tại Tài Bạch, đương số tiền
tài dồi dào, thuận lợi kiếm tiền và năng lực quản lý tài chính tốt.`,
  },

  {
    id: 'vu-khuc-tai-tai-bach-loc-ta-huu',
    title: 'Vũ Khúc + Hóa Lộc / Lộc Tồn / Tả Hữu tại Tài Bạch',
    sao: ['Vũ Khúc'],
    cung: ['Tài Bạch'],
    ketHop: ['Hóa Lộc', 'Lộc Tồn', 'Tả Phù', 'Hữu Bật'],
    doUuTien: 83,
    tomTat: `Khi Vũ Khúc cư Tài Bạch gặp Hóa Lộc, Lộc Tồn, Tả Phù hoặc Hữu
Bật, đương số đại phú đại quý.`,
  },

  {
    id: 'vu-khuc-tai-tai-bach-loc-ma-hoa-loc',
    title: 'Vũ Khúc + Lộc Tồn + Thiên Mã + Hóa Lộc tại Tài Bạch',
    sao: ['Vũ Khúc'],
    cung: ['Tài Bạch'],
    ketHop: ['Lộc Tồn', 'Thiên Mã', 'Hóa Lộc'],
    doUuTien: 83,
    tomTat: `Khi Vũ Khúc cư Tài Bạch gặp Lộc Tồn, Thiên Mã và Hóa Lộc, lá
số hình thành cách **Cự Phú** — đương số rất giàu có.`,
  },

  {
    id: 'vu-khuc-tai-tai-bach-tu-vi-thien-tuong',
    title: 'Vũ Khúc + Tử Vi / Thiên Tướng hội chiếu tại Tài Bạch',
    sao: ['Vũ Khúc'],
    cung: ['Tài Bạch'],
    ketHop: ['Tử Vi', 'Thiên Tướng'],
    doUuTien: 83,
    tomTat: `Khi Vũ Khúc cư Tài Bạch có Tử Vi hoặc Thiên Tướng hội chiếu,
đương số thịnh vượng về vật chất.`,
  },

  {
    id: 'vu-khuc-tai-tai-bach-tham-lang-loc',
    title: 'Vũ Khúc + Tham Lang + Lộc Tồn / Hóa Lộc tại Tài Bạch',
    sao: ['Vũ Khúc'],
    cung: ['Tài Bạch'],
    ketHop: ['Tham Lang', 'Lộc Tồn', 'Hóa Lộc'],
    doUuTien: 83,
    tomTat: `Khi Vũ Khúc cư Tài Bạch gặp Tham Lang cùng Lộc Tồn hoặc Hóa
Lộc, sự nghiệp tiền bạc của đương số phát triển nhanh.`,
  },

  {
    id: 'vu-khuc-tai-tai-bach-kinh-da',
    title: 'Vũ Khúc + Kình Đà tại Tài Bạch',
    sao: ['Vũ Khúc'],
    cung: ['Tài Bạch'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 83,
    tomTat: `Khi Vũ Khúc cư Tài Bạch gặp Kình Dương hoặc Đà La, đương số vì
tiền mà gặp tai họa và tranh chấp.`,
  },

  {
    id: 'vu-khuc-tai-tai-bach-khong-kiep',
    title: 'Vũ Khúc + Không Kiếp tại Tài Bạch',
    sao: ['Vũ Khúc'],
    cung: ['Tài Bạch'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 83,
    tomTat: `Khi Vũ Khúc cư Tài Bạch gặp Địa Không hoặc Địa Kiếp, đương số
kiếm tiền bận rộn nhưng khó tích lũy, phá hao nhiều và dễ phá sản vì cờ
bạc.`,
  },

  // ============================================================
  // 24. Vũ Khúc ở Tử Tức
  // ============================================================
  {
    id: 'vu-khuc-tai-tu-tuc',
    title: 'Vũ Khúc tại Tử Tức (đặc tính chung)',
    sao: ['Vũ Khúc'],
    cung: ['Tử Tức'],
    doUuTien: 78,
    tomTat: `Vũ Khúc không thích cung Tử Tức — đương số chủ về hiếm muộn,
ít con.

Đẻ con gái tốt hơn con trai, vì vậy đương số nên đẻ con gái trước. Con cái
mạnh mẽ, cương cường, không hợp tính cha mẹ.`,
  },

  {
    id: 'vu-khuc-tai-tu-tuc-cat-tinh',
    title: 'Vũ Khúc + Cát tinh tại Tử Tức',
    sao: ['Vũ Khúc'],
    cung: ['Tử Tức'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 73,
    tomTat: `Khi Vũ Khúc cư Tử Tức gặp các cát tinh như Tả Phù, Hữu Bật,
Văn Xương, Văn Khúc, Thiên Khôi hay Thiên Việt, đương số chỉ được hưởng
việc đông con hơn, không cải thiện địa vị hay may mắn cho con cái.`,
  },

  {
    id: 'vu-khuc-tai-tu-tuc-tham-sat',
    title: 'Vũ Khúc + Tham Lang / Thất Sát tại Tử Tức',
    sao: ['Vũ Khúc'],
    cung: ['Tử Tức'],
    ketHop: ['Tham Lang', 'Thất Sát'],
    doUuTien: 73,
    tomTat: `Khi Vũ Khúc cư Tử Tức gặp Tham Lang hoặc Thất Sát, đương số
khó có con hoặc sinh con muộn. Riêng với Thất Sát, con của đương số chơi
bời phá tán hoặc khắc khẩu với cha mẹ.`,
  },

  {
    id: 'vu-khuc-tai-tu-tuc-thien-phu',
    title: 'Vũ Khúc + Thiên Phủ tại Tử Tức',
    sao: ['Vũ Khúc'],
    cung: ['Tử Tức'],
    ketHop: ['Thiên Phủ'],
    doUuTien: 73,
    tomTat: `Khi Vũ Khúc cư Tử Tức gặp Thiên Phủ, con cái của đương số
thông minh ngoan ngoãn; chủ về hai con.`,
  },

  // ============================================================
  // 25. Vũ Khúc ở Phu Thê - VỊ TRÍ BẤT LỢI NHẤT
  // ============================================================
  {
    id: 'vu-khuc-tai-phu-the',
    title: 'Vũ Khúc tại Phu Thê - Vị trí BẤT LỢI NHẤT (đặc tính chung)',
    sao: ['Vũ Khúc'],
    cung: ['Phu Thê'],
    doUuTien: 85,
    tomTat: `Cung Phu Thê là vị trí bất lợi nhất của Vũ Khúc — cho thấy
hình khắc, cô đơn, đương số dễ chia ly hoặc hôn nhân thiếu bền vững.

Lá số cần nhiều cát tinh thì hôn nhân mới tốt đẹp. Lời khuyên dành cho
đương số là kết hôn muộn để có sự chín chắn, giảm bớt hình khắc.`,
  },

  {
    id: 'vu-khuc-tai-phu-the-vu-phu-ty-ngo-hoa-ky',
    title: 'Vũ Phủ Tý/Ngọ + Hóa Kỵ tại Phu Thê',
    sao: ['Vũ Khúc', 'Thiên Phủ'],
    cung: ['Phu Thê'],
    chi: ['Tý', 'Ngọ'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 80,
    tomTat: `Khi Vũ Phủ tại Tý hoặc Ngọ ở Phu Thê gặp Hóa Kỵ, nữ mệnh chịu
cảnh hôn nhân đứt đoạn, nam mệnh thì vợ chồng sinh ly.`,
  },

  {
    id: 'vu-khuc-tai-phu-the-vu-phu-ty-ngo-hoa-ky-nu',
    title: 'Vũ Phủ Tý/Ngọ + Hóa Kỵ tại Phu Thê - Nữ mệnh',
    sao: ['Vũ Khúc', 'Thiên Phủ'],
    cung: ['Phu Thê'],
    chi: ['Tý', 'Ngọ'],
    gioiTinh: 'Nữ',
    ketHop: ['Hóa Kỵ'],
    doUuTien: 78,
    tomTat: `Nữ mệnh có Vũ Phủ tại Tý hoặc Ngọ ở Phu Thê gặp Hóa Kỵ chủ về
hôn nhân đứt đoạn.`,
  },

  {
    id: 'vu-khuc-tai-phu-the-vu-phu-ty-ngo-hoa-ky-nam',
    title: 'Vũ Phủ Tý/Ngọ + Hóa Kỵ tại Phu Thê - Nam mệnh',
    sao: ['Vũ Khúc', 'Thiên Phủ'],
    cung: ['Phu Thê'],
    chi: ['Tý', 'Ngọ'],
    gioiTinh: 'Nam',
    ketHop: ['Hóa Kỵ'],
    doUuTien: 78,
    tomTat: `Nam mệnh có Vũ Phủ tại Tý hoặc Ngọ ở Phu Thê gặp Hóa Kỵ chủ về
cảnh vợ chồng sinh ly.`,
  },

  {
    id: 'vu-khuc-tai-phu-the-vu-tham-suu-mui-hoa-ky',
    title: 'Vũ Tham Sửu/Mùi + Hóa Kỵ tại Phu Thê',
    sao: ['Vũ Khúc', 'Tham Lang'],
    cung: ['Phu Thê'],
    chi: ['Sửu', 'Mùi'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 80,
    tomTat: `Khi Vũ Tham tại Sửu hoặc Mùi ở Phu Thê gặp Hóa Kỵ, bạn đời của
đương số phá gia, hao tài. Có thêm các sao văn hoặc đào hoa, bạn đời còn
thay lòng đổi dạ, có người thứ ba.`,
  },

  {
    id: 'vu-khuc-tai-phu-the-thin-tuat',
    title: 'Vũ Khúc tại Phu Thê ở Thìn/Tuất',
    sao: ['Vũ Khúc'],
    cung: ['Phu Thê'],
    chi: ['Thìn', 'Tuất'],
    doUuTien: 80,
    tomTat: `Khi Vũ Khúc cư Phu Thê ở Thìn hoặc Tuất, đương số nên lập gia
đình muộn hoặc lấy người bằng tuổi để được hưởng giàu sang nhờ đối tượng.`,
  },

  {
    id: 'vu-khuc-tai-phu-the-hoa-loc',
    title: 'Vũ Khúc + Hóa Lộc tại Phu Thê',
    sao: ['Vũ Khúc'],
    cung: ['Phu Thê'],
    ketHop: ['Hóa Lộc'],
    doUuTien: 80,
    tomTat: `Khi Vũ Khúc cư Phu Thê gặp Hóa Lộc, vợ của đương số tài giỏi
hơn chồng.`,
  },

  {
    id: 'vu-khuc-tai-phu-the-pha-quan',
    title: 'Vũ Khúc + Phá Quân tại Phu Thê',
    sao: ['Vũ Khúc'],
    cung: ['Phu Thê'],
    ketHop: ['Phá Quân'],
    doUuTien: 80,
    tomTat: `Khi Vũ Khúc cư Phu Thê gặp Phá Quân, vợ chồng đương số đều
tài giỏi nhưng xung khắc lớn, dễ xa cách hoặc trải qua nhiều lần đò.`,
  },

  // ============================================================
  // 26. Vũ Khúc ở Huynh Đệ
  // ============================================================
  {
    id: 'vu-khuc-tai-huynh-de',
    title: 'Vũ Khúc tại Huynh Đệ (đặc tính chung)',
    sao: ['Vũ Khúc'],
    cung: ['Huynh Đệ'],
    doUuTien: 73,
    tomTat: `Khi Vũ Khúc cư Huynh Đệ, đương số có anh chị em ít, không hợp
tính nhau.

Nếu anh em theo võ nghiệp, lực lượng vũ trang hoặc kỹ thuật thì hình khắc
giảm bớt.`,
  },

  {
    id: 'vu-khuc-tai-huynh-de-sat-tinh',
    title: 'Vũ Khúc + Sát tinh tại Huynh Đệ',
    sao: ['Vũ Khúc'],
    cung: ['Huynh Đệ'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Khi Vũ Khúc cư Huynh Đệ gặp các sát tinh như Kình Dương, Đà
La, Hỏa Tinh, Linh Tinh, Địa Không hay Địa Kiếp, anh em đương số xích
mích do tranh chấp và đoạt quyền.`,
  },

  {
    id: 'vu-khuc-tai-huynh-de-phu-tuong',
    title: 'Vũ Khúc + Thiên Phủ / Thiên Tướng tại Huynh Đệ',
    sao: ['Vũ Khúc'],
    cung: ['Huynh Đệ'],
    ketHop: ['Thiên Phủ', 'Thiên Tướng'],
    doUuTien: 70,
    tomTat: `Khi Vũ Khúc cư Huynh Đệ gặp Thiên Phủ hoặc Thiên Tướng, anh
chị em đương số đều khá giả, có quyền có tài.`,
  },

  {
    id: 'vu-khuc-tai-huynh-de-pha-quan',
    title: 'Vũ Khúc + Phá Quân tại Huynh Đệ',
    sao: ['Vũ Khúc'],
    cung: ['Huynh Đệ'],
    ketHop: ['Phá Quân'],
    doUuTien: 70,
    tomTat: `Khi Vũ Khúc cư Huynh Đệ gặp Phá Quân, anh em đương số hay xô
xát.`,
  },

  {
    id: 'vu-khuc-tai-huynh-de-that-sat',
    title: 'Vũ Khúc + Thất Sát tại Huynh Đệ',
    sao: ['Vũ Khúc'],
    cung: ['Huynh Đệ'],
    ketHop: ['Thất Sát'],
    doUuTien: 70,
    tomTat: `Khi Vũ Khúc cư Huynh Đệ gặp Thất Sát, anh em đương số cần xa
cách nhau để không khắc khẩu xung đột.`,
  },

  // ============================================================
  // 27. Đại vận / Hạn gặp Vũ Khúc
  // ============================================================
  {
    id: 'vu-khuc-dai-van-han',
    title: 'Đại vận & hạn gặp Vũ Khúc',
    sao: ['Vũ Khúc'],
    doUuTien: 50,
    tomTat: `Khi đại hạn của đương số đi đến cung có Vũ Khúc:

- Vũ Khúc đắc địa và có cát tinh hội tụ: thuận lợi tiền bạc, công danh
- Vũ Khúc Hãm địa hoặc gặp sát tinh: vận hạn về tiền, dễ phá tán và vướng
  tranh chấp`,
  },
  {
    id: 'vu-khuc-han-loc-ma-co-hy-hong',
    title: 'Hạn Vũ Khúc + Lộc Tồn/Mã/Cơ/Hỷ/Hồng - Thành gia thất',
    sao: ['Vũ Khúc'],
    ketHop: ['Lộc Tồn', 'Thiên Mã', 'Thiên Cơ', 'Thiên Hỷ', 'Hồng Loan'],
    doUuTien: 45,
    tomTat: `Khi đại hạn đi đến cung có Vũ Khúc gặp Lộc Tồn, Thiên Mã,
Thiên Cơ, Thiên Hỷ và Hồng Loan, đương số thành gia thất — lập gia đình.`,
  },
];
