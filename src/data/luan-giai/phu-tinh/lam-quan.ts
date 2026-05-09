import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO LÂM QUAN - Kim, Cát Tinh + Quyền Quý.
 *
 * Vị trí THỨ 4 trong Vòng Trường Sinh 12 sao:
 * Trường Sinh: Mộc Dục: Quan Đới: LÂM QUAN: Đế Vượng: Suy
 * Bệnh: Tử: Mộ: Tuyệt: Thai: Dưỡng
 *
 * An theo CỤC, thuộc nhóm sao Bắc Đẩu.
 *
 * Đặc trưng:
 * - Giai đoạn BẮT ĐẦU TRƯỞNG THÀNH, BƯỚC RA ĐỜI
 * - Hành động làm việc phục vụ bản thân và xã hội
 * - Chủ về QUYỀN QUÝ, BỔNG LỘC, THĂNG TIẾN
 * - Tính chất: KIÊU NGẠO, KHOE KHOANG, TỰ PHỤ (do mới có thành tựu đầu tiên)
 * - Hình tượng: CỔ, THANH QUẢN, VÒM HỌNG, TUYẾN GIÁP
 * - Tính chất: tương tự HÓA LỘC nhưng nhẹ hơn — chủ bổng lộc và hưởng thụ
 * - KHUẾCH ĐẠI tính chất các sao đi cùng (giống như Trường Sinh)
 */
export const luanGiai_LamQuan: DoanLuanGiai[] = [
  {
    id: 'lam-quan-tinh-chat-chung',
    title: 'Lâm Quan - Đặc tính chung',
    sao: ['Lâm Quan'],
    doUuTien: 33,
    tomTat: `**Lâm Quan** là phụ tinh thuộc nhóm cát tinh kiêm quyền quý, ngũ
hành Kim, thuộc chòm Bắc Đẩu, đứng ở vị trí thứ tư trong vòng Trường Sinh.

Sao chủ giai đoạn đương số bắt đầu trưởng thành và bước ra đời, chủ về
quyền quý, bổng lộc và thăng tiến. Về hình tượng cơ thể, Lâm Quan ứng với
vùng cổ, thanh quản, vòm họng và tuyến giáp.

Vai trò trong vòng Trường Sinh: Lâm Quan đứng sau Quan Đới và trước Đế
Vượng, là sao hỗ trợ mạnh mẽ — khuếch đại tính chất của các sao đi cùng.
Tính chất gần với Hóa Lộc nhưng nhẹ hơn, chủ bổng lộc và hưởng thụ.

Tính cách của đương số có Lâm Quan mang hai mặt rõ rệt:

- Mặt tốt: thành đạt, có chí tiến thủ, chăm chỉ và có địa vị
- Mặt xấu: kiêu ngạo, khoe khoang, tự phụ vì đang ở giai đoạn bắt đầu có
  thành tựu — khoe khoang khi ở với người thân nhưng kín kẽ, thận trọng
  khi tiếp xúc người lạ`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP TỐT
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'lam-quan-thien-ma-thang-tien',
    title: 'Lâm Quan + Thiên Mã - Thăng tiến nhanh, bôn ba phát đạt',
    sao: ['Lâm Quan'],
    ketHop: ['Thiên Mã'],
    doUuTien: 65,
    tomTat: `Lâm Quan gặp Thiên Mã là cách cục rất đẹp, tượng trưng cho việc
thăng tiến nhanh và bôn ba mà phát đạt.

Lâm Quan vốn chủ bổng lộc, chức quyền; Thiên Mã chủ động lực, di chuyển và
giao thương — hai sao kết hợp khiến đương số vừa chăm chỉ vừa gặp thời.
Tiền tài và danh vọng đều tăng mạnh, chủ về giao thương buôn bán tốt và
trở nên giàu có; đương số gặp thuận lợi trong việc kiếm tiền.`,
  },

  {
    id: 'lam-quan-khoi-viet-chuc-cao',
    title: 'Lâm Quan + Khôi Việt - Chức cao quyền lực',
    sao: ['Lâm Quan'],
    ketHop: ['Thiên Khôi', 'Thiên Việt'],
    doUuTien: 65,
    tomTat: `Lâm Quan gặp Thiên Khôi và Thiên Việt, đương số dễ đứng ở vị
trí cao trong xã hội và được tín nhiệm. Đương số có tiếng nói cùng quyền
lực trong tập thể, dễ làm tới chức cao và có địa vị vững vàng.`,
  },

  {
    id: 'lam-quan-truong-sinh-de-vuong-nhan-duc',
    title: 'Lâm Quan + Trường Sinh + Đế Vượng - Nhân đức tích phúc',
    sao: ['Lâm Quan'],
    ketHop: ['Trường Sinh', 'Đế Vượng'],
    doUuTien: 65,
    tomTat: `Lâm Quan đi cùng Trường Sinh và Đế Vượng tạo thế bền vững —
đương số có nhân đức và biết tích phúc. Bộ Sinh-Vượng-Mộ tam hợp cộng thêm
Lâm Quan đỉnh cao đem lại hậu vận giàu sang lâu dài; đương số có nhân đức
ăn ở và biết tích phúc cho con cháu.

Khi phối thêm Hóa Lộc hoặc Lộc Tồn, tiền bạc của đương số càng dồi dào,
cuộc sống sung túc suốt đời.`,
  },

  {
    id: 'lam-quan-that-sat-pha-quan-nhieu-nghe',
    title: 'Lâm Quan + Thất Sát + Phá Quân - Nhiều nghề cùng lúc',
    sao: ['Lâm Quan'],
    ketHop: ['Thất Sát', 'Phá Quân'],
    doUuTien: 55,
    tomTat: `Lâm Quan gặp Thất Sát hoặc Phá Quân, đương số thích làm nhiều
nghề và nhiều đầu việc khác nhau cùng một lúc. Năng lượng dồi dào, không
chịu ngồi yên, có khả năng đảm đương nhiều mặt trận; hợp với các nghề chủ
động như kinh doanh, tự doanh hay môi giới.

Cảnh báo: đương số cần chọn việc kỹ kẻo tham nhiều mà không sâu.`,
  },

  {
    id: 'lam-quan-dao-hoa-phuc-vu-khac-phai',
    title: 'Lâm Quan + Đào Hoa - Phục vụ khác phái',
    sao: ['Lâm Quan'],
    ketHop: ['Đào Hoa'],
    doUuTien: 50,
    tomTat: `Lâm Quan gặp Đào Hoa, đương số thích làm những việc phục vụ
người khác phái. Hợp các công việc gặp gỡ nhiều người khác phái và dễ phát
đạt nhờ những công việc này — phù hợp với các ngành dịch vụ làm đẹp, spa,
thời trang nữ / nam, MC, lễ tân hay sales giao tiếp khách hàng.

Lưu ý: cần Tứ Đức cùng Quan Phúc để giảm bớt tính dâm tình của Đào Hoa.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP XẤU
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'lam-quan-khong-kiep-kinh-da-gian-doi',
    title: 'Lâm Quan + Không Kiếp + Kình Đà - Khoe mẽ gian dối',
    sao: ['Lâm Quan'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Kình Dương', 'Đà La'],
    doUuTien: 60,
    tomTat: `Khi Lâm Quan gặp đủ Địa Không, Địa Kiếp, Kình Dương và Đà La,
tính khoe khoang vốn có của Lâm Quan biến thành gian dối, lẻo mép và mánh
khóe.

Đương số dùng mánh khóe để tạo hình ảnh giả tạo, gian dối lừa lọc, lẻo mép
nói nhiều mà không có thực chất. Công danh đang lên có thể sụt giảm vì
chính sự kiêu ngạo và lời nói sơ hở của bản thân.

Hệ quả là dễ gặp tai ương, rủi ro và phá tán sự nghiệp đang lên.`,
  },

  {
    id: 'lam-quan-moc-duc-an-choi',
    title: 'Lâm Quan + Mộc Dục - Sa vào ăn chơi làm dáng',
    sao: ['Lâm Quan'],
    ketHop: ['Mộc Dục'],
    doUuTien: 55,
    tomTat: `Lâm Quan đi cùng Mộc Dục, đương số quá chú trọng ngoại hình và
dễ sa vào ăn chơi, làm dáng — thiếu thực chất. Bổng lộc của Lâm Quan ở đây
chuyển thành phù hoa hưởng thụ.

Hóa giải: Tứ Đức, Quan Phúc hoặc Tử Vi giúp giảm bớt tính phù phiếm.`,
  },

  {
    id: 'lam-quan-bai-tinh-cong-danh-sup',
    title: 'Lâm Quan + nhiều bại tinh - Công danh sụp vì kiêu ngạo',
    sao: ['Lâm Quan'],
    ketHop: ['Tiểu Hao', 'Đại Hao', 'Tang Môn', 'Bạch Hổ'],
    doUuTien: 55,
    tomTat: `Lâm Quan gặp nhiều bại tinh, công danh đang lên của đương số
có thể sụt giảm vì chính sự kiêu ngạo và lời nói sơ hở của mình. Đương số
dễ đắc tội vì khoe khoang, thị phi vây quanh.

Đặc biệt nguy hiểm khi đi cùng hung sát tinh — đương số gặp những rắc rối
trong đời sống và công việc, gây ảnh hưởng nặng tới cuộc sống.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // LÂM QUAN TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'lam-quan-tai-menh',
    title: 'Lâm Quan tại Mệnh',
    sao: ['Lâm Quan'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Đương số có Lâm Quan thủ Mệnh là biểu tượng của sự thành đạt
và cần mẫn, mang dáng vẻ người có địa vị.

Về tướng mạo, đương số cao to, vạm vỡ; phong thái khỏe khoắn, toát lên vẻ
uy nghi và sinh lực mạnh. Đương số chú trọng vẻ bề ngoài, thích làm đẹp,
làm điệu và nói năng kiểu cách.

Tính cách:

- Ham danh vọng, khao khát địa vị
- Rất coi trọng thể diện, tự trọng cao và muốn giữ hình ảnh tốt
- Mặt trái: tự phụ, khoe khoang — hay khoe thành quả
- Mặt phải: cần mẫn, có trách nhiệm — chăm chỉ làm việc, bền bỉ
- Khó chấp nhận tụt lùi

Đặc biệt, đương số có cách giao tiếp hai mặt rõ rệt:

- Với người thân quen: nói nhiều, thích kể chuyện, khoe thành tích và thể
  hiện cái tôi
- Với người lạ hoặc trong môi trường chính thức: kín kẽ, thận trọng, dè
  dặt và giữ kẽ hình ảnh

Về sự nghiệp, đương số đi lên rõ rệt ở giai đoạn trung vận. Tư duy làm chủ,
thích nắm quyền và điều hành — hợp các vị trí quản lý, lãnh đạo. Đương số
được gia đình nâng đỡ, hay gặp cấp trên trao cơ hội.

Về tài lộc, đương số có của ăn của để, ít khi thiếu thốn; phần nhiều hưởng
thụ từ địa vị và chức danh. Đương số thích phô diễn giàu sang qua ăn mặc,
nhà cửa và phương tiện.

Cảnh báo: tính kiêu ngạo của đương số dễ khơi dậy đố kỵ và thị phi — cần
học khiêm tốn và giữ cần mẫn.`,
  },

  {
    id: 'lam-quan-tai-menh-hon-nhan-xung-doi',
    title: 'Lâm Quan tại Mệnh - Hôn nhân xứng đôi vừa lứa',
    sao: ['Lâm Quan'],
    cung: ['Mệnh'],
    doUuTien: 60,
    tomTat: `Đương số có Lâm Quan tại Mệnh có hôn nhân xứng đôi vừa lứa.
Đương số coi trọng địa vị, hình thức và gia phong; bạn đời thường là người
có học thức, nề nếp hoặc xuất thân tương xứng. Gia đình mang dáng vẻ chỉn
chu, quy củ, có phần kiểu cách.

Cảnh báo: đương số quá coi trọng thể diện và hình ảnh bên ngoài nên đời
sống vợ chồng đôi khi căng thẳng và thiếu tự nhiên. Hai người có xu hướng
giữ kẽ, phô bày hạnh phúc với thiên hạ nhiều hơn là chia sẻ cảm xúc thật;
nếu không khéo sẽ tạo ra khoảng cách trong nội tâm.`,
  },

  {
    id: 'lam-quan-tai-menh-suc-khoe-co',
    title: 'Lâm Quan tại Mệnh - Sức khỏe vùng cổ',
    sao: ['Lâm Quan'],
    cung: ['Mệnh'],
    doUuTien: 58,
    tomTat: `Đương số có Lâm Quan tại Mệnh cần chú trọng vùng cổ. Lâm Quan
gắn với cổ, họng, thanh quản, tuyến giáp và gáy — đương số nên lưu ý các
bệnh viêm họng, amidan, u tuyến giáp, đau gáy và thoái hóa đốt sống cổ.

Khi gặp cát tinh, sức khỏe nhìn chung bền bỉ. Khi hội nhiều sát tinh như
Hỏa Tinh, Linh Tinh, Kình Dương, Đà La hay Hóa Kỵ, bệnh tật khu vực này dễ
diễn biến phức tạp và khó dứt.`,
  },

  {
    id: 'lam-quan-tai-phu-mau',
    title: 'Lâm Quan tại Phụ Mẫu',
    sao: ['Lâm Quan'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Lâm Quan đóng tại Phụ Mẫu, cha mẹ đương số là người thành đạt,
có chức vị, khéo ăn nói và thích kể chuyện.

Khi hợp âm dương thuận lý, trong nhà phúc đức dồi dào, có người làm quan,
dòng họ giàu có; gia đình bên nhà người hôn phối của đương số cũng có
điều kiện.`,
  },

  {
    id: 'lam-quan-tai-phuc-duc',
    title: 'Lâm Quan tại Phúc Đức',
    sao: ['Lâm Quan'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `Lâm Quan đóng tại Phúc Đức, gia tộc của đương số phát phước,
dòng họ thành đạt. Khi cát tinh hội cùng, trong dòng tộc nhiều người thành
đạt, làm quan to, giàu có; phúc khí tổ tiên dày dặn, đời con cháu được
hưởng dư phúc.`,
  },

  {
    id: 'lam-quan-tai-quan-loc',
    title: 'Lâm Quan tại Quan Lộc',
    sao: ['Lâm Quan'],
    cung: ['Quan Lộc'],
    doUuTien: 80,
    tomTat: `Lâm Quan tại Quan Lộc là vị trí hợp cách, đường công danh của
đương số tốt đẹp. Đương số thường xuyên ra vào những nơi quyền quý, dễ làm
tham mưu hay phụ tá cho người có quyền cao chức trọng. Cuộc sống thịnh
phát — có cả danh vọng lẫn vinh hoa, sống phong lưu giàu có; đương số là
người lương thiện, khiêm tốn và cao thượng.

Khi cát tinh sáng sủa hội cùng, đương số phát đạt từ sớm, cuộc sống vui vẻ
và giỏi ăn nói — hợp với ngoại giao và buôn bán.

Khi sát bại tinh hoặc ám tinh hội cùng, đương số gặp phiền nhiễu và ngăn
trở trong công việc.`,
  },

  {
    id: 'lam-quan-tai-dien-trach',
    title: 'Lâm Quan tại Điền Trạch',
    sao: ['Lâm Quan'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Lâm Quan đóng tại Điền Trạch, đương số nhiều đất đai, nhà cửa
và tài sản. Đất đai, nhà cửa rộng rãi; nhà được trang hoàng đẹp đẽ, là
niềm tự hào của đương số.

Khi cát tinh hội cùng, đương số càng dư dả về tiền bạc và tài sản, nhà cửa
khang trang đầy đủ tiện nghi.`,
  },

  {
    id: 'lam-quan-tai-no-boc',
    title: 'Lâm Quan tại Nô Bộc',
    sao: ['Lâm Quan'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Lâm Quan đóng tại Nô Bộc, đương số có nhiều bạn bè thành đạt
và nổi danh, được nhiều người biết đến — mạng lưới quan hệ rộng và chất
lượng.

Khi sát bại tinh hội cùng, bạn bè của đương số thích gian dối, ăn chơi đua
đòi; đương số dễ bị nhiễm tính xấu của bạn bè.`,
  },

  {
    id: 'lam-quan-tai-thien-di',
    title: 'Lâm Quan tại Thiên Di',
    sao: ['Lâm Quan'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `Lâm Quan tại Thiên Di, đương số khéo ăn khéo nói, ra ngoài
được mọi người yêu quý; hay gặp những người thành đạt và học hỏi được
nhiều thứ từ họ.

Đặc trưng nghịch lý giữa ở nhà và ra ngoài thể hiện rõ:

- Khi ở nhà: ít nói, âm trầm, ít chia sẻ với người thân
- Khi ra ngoài: kín kẽ nhưng hoạt bát, biết che giấu cái xấu`,
  },

  {
    id: 'lam-quan-tai-tat-ach',
    title: 'Lâm Quan tại Tật Ách',
    sao: ['Lâm Quan'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `Lâm Quan đóng tại Tật Ách, đương số dễ mắc các bệnh ở vùng cổ,
cuống họng và vòm họng. Lâm Quan vốn tượng trưng cho vùng cổ nên đương số
cần đề phòng các bệnh viêm amidan, u tuyến giáp, đau gáy và thoái hóa đốt
sống cổ.

Đặc biệt, Lâm Quan ở Tật Ách dễ biểu hiện cho người mắc nhiều bệnh cùng
lúc — đương số cần kiểm tra sức khỏe định kỳ.`,
  },

  {
    id: 'lam-quan-tai-tai-bach',
    title: 'Lâm Quan tại Tài Bạch',
    sao: ['Lâm Quan'],
    cung: ['Tài Bạch'],
    doUuTien: 80,
    tomTat: `Lâm Quan tại Tài Bạch là cách cục đẹp, số lượng tiền tài và
của cải của đương số dồi dào. Khi cát tinh hội cùng, vẻ đẹp cung Tài Bạch
càng được tăng thêm.

Khi Lâm Quan đồng cung với Thiên Mã, đương số thuận lợi trong việc kiếm
tiền, chủ về giao thương và buôn bán tốt, trở nên giàu có.

Lâm Quan là ngôi sao giúp đương số tích lũy từ địa vị, danh tiếng và bổng
lộc — không chỉ kiếm mà còn biết hưởng thụ.`,
  },

  {
    id: 'lam-quan-tai-tu-tuc',
    title: 'Lâm Quan tại Tử Tức',
    sao: ['Lâm Quan'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Lâm Quan đóng tại Tử Tức, con cái của đương số đông và thành
danh. Khi cát tinh hội cùng, đương số đông con cái, con cái thành danh và
khéo ăn nói — là niềm tự hào của cha mẹ.`,
  },

  {
    id: 'lam-quan-tai-phu-the',
    title: 'Lâm Quan tại Phu Thê',
    sao: ['Lâm Quan'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `Lâm Quan đóng tại Phu Thê, người hôn phối của đương số dễ là
người thành đạt, khéo ăn nói và được lòng mọi người.

Mặt trái là tính tình bạn đời có phần tự mãn, kiêu ngạo ngầm, dễ dẫn đến
việc người hôn phối xem thường đương số. Trong cuộc sống gia đình, người
hôn phối là người nắm quyền và đưa ra những quyết định quan trọng.

Khi phối thêm cát tinh như Khôi Việt, Thanh Long hay Quang Quý, quyền lực
giữa hai vợ chồng được cân bằng, hôn nhân hạnh phúc.`,
  },

  {
    id: 'lam-quan-tai-huynh-de',
    title: 'Lâm Quan tại Huynh Đệ',
    sao: ['Lâm Quan'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Lâm Quan đóng tại Huynh Đệ, trong nhà đương số có nhiều anh
chị em và dễ có người thành đạt.

Đặc biệt, nếu đương số là con trưởng trong nhà, dễ bị các em tranh quyền
hoặc có người khác gánh vác trách nhiệm thay mình.`,
  },
];
