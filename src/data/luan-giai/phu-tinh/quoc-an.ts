import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO QUỐC ẤN - Thổ, Quý Tinh.
 * An theo offset +8 thuận từ Lộc Tồn (vòng Lộc Tồn).
 * Trong tam hợp với Lộc Tồn.
 *
 * Một trong 4 sao của bộ BINH HÌNH TƯỚNG ẤN (Phục Binh + Thiên Hình +
 * Tướng Quân + Quốc Ấn) - phần CHUNG đã viết tại tuong-quan.ts.
 *
 * Hình tượng: CON DẤU ĐỎ, ẤN TÍN trời ban.
 */
export const luanGiai_QuocAn: DoanLuanGiai[] = [
  {
    id: 'quoc-an-tinh-chat-chung',
    title: 'Quốc Ấn - Đặc tính chung',
    sao: ['Quốc Ấn'],
    doUuTien: 32,
    tomTat: `**Quốc Ấn** là phụ tinh thuộc nhóm Quý Tinh, ngũ hành Thổ, hóa khí
là Quý Tinh. Sao luôn nằm trong tam hợp với Lộc Tồn, an theo offset +8
thuận từ Lộc Tồn (engine hardcode), và là một trong bốn sao của bộ
**Binh Hình Tướng Ấn** (Phục Binh, Thiên Hình, Tướng Quân, Quốc Ấn) —
cách lãnh đạo lớn trong tử vi.

Chiết tự: "Quốc" là quốc gia, đất nước; "Ấn" là ấn tín, con dấu. Hình
tượng tổng thể là con dấu đỏ, chữ ký của người đứng đầu một tập thể,
ấn tín của trời ban — thể hiện trách nhiệm, quyền lực cao và khả năng
quản lý, điều phối những con người trong tập thể.

Đặc tính: quan lộc, công danh, ấn tín, quyền uy, quý hiển. Sao chủ về
công danh, học tập, đem tới nhiều quyền lực và trách nhiệm cao cho
đương số khi đóng tại bất cứ cung nào.`,
  },

  {
    id: 'quoc-an-tai-menh-quan-tu',
    title: 'Quốc Ấn tại Mệnh - phong thái quân tử',
    sao: ['Quốc Ấn'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `**Quốc Ấn** thủ Mệnh đem lại cho đương số phong độ trượng phu,
tác phong quân tử, đi đứng đĩnh đạc và nói năng quân tử.

Cần lưu ý rằng những đức độ này phần nhiều do giai cấp, quyền tước,
chức vị, phẩm hàm mà có, không hẳn do bản tính nết hạnh cơ hữu của
chủ mệnh.

Vì có nhiều quyền lực, đương số luôn mang theo nhiều trách nhiệm
tương ứng. Chủ mệnh từ tốn, cẩn thận cho mỗi quyết định và hành động,
đặc biệt khi quyết định đó ảnh hưởng tới nhiều người xung quanh —
tinh thần trách nhiệm rất cao.`,
  },

  {
    id: 'quoc-an-tai-menh-cong-danh',
    title: 'Quốc Ấn tại Mệnh - công danh khoa bảng',
    sao: ['Quốc Ấn'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `Về công danh và phúc thọ, **Quốc Ấn** thủ Mệnh giúp đương số có
uy quyền, tước vị, huy chương, thường làm các công việc chính thức và
có quyền vị.

Mặt khoa bảng: sao chủ về đỗ đạt, khoa bảng, bằng sắc; học trò có
Quốc Ấn thi đỗ điểm cao và làm ban cán sự trong lớp.

Phạm vi quyền chức không nhất thiết chỉ là quyền binh, mà có thể
mang ý nghĩa trên các địa hạt khác như văn hóa — việc gia nhập Hàn
Lâm Viện cũng là một hình thái của Quốc Ấn.

Về phúc thọ, sao tượng trưng cho giai cấp thượng lưu; chủ mệnh lúc
chết có thể được phong thần hoặc được lưu danh, người đời cúng bái,
phụng thờ.

Điều kiện: những ý nghĩa đẹp này chỉ thành hiện thực khi Quốc Ấn
không bị Tuần, Triệt án ngữ hoặc sát bại tinh đánh phá làm mất đi
ý nghĩa.`,
  },
  {
    id: 'quoc-an-tai-menh-cong-danh-cat-tinh',
    title: 'Quốc Ấn tại Mệnh + Phong Cáo/Hóa Khoa/Xương Khúc/Long Phượng - Phong áo mũ',
    sao: ['Quốc Ấn'],
    cung: ['Mệnh'],
    ketHop: ['Phong Cáo', 'Hóa Khoa', 'Văn Xương', 'Văn Khúc', 'Long Trì', 'Phượng Các'],
    doUuTien: 73,
    tomTat: `Khi Quốc Ấn tại Mệnh đi cùng Phong Cáo, Hóa Khoa, Văn Xương,
Văn Khúc, Long Trì, Phượng Các, đương số được khen tặng của Hội đồng
Khoa và phong áo mũ trong lễ phát bằng phát thưởng rỡ ràng.`,
  },

  {
    id: 'quoc-an-tai-phu-mau',
    title: 'Quốc Ấn tại Phụ Mẫu',
    sao: ['Quốc Ấn'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Quốc Ấn** tại Phụ Mẫu cho thấy cha mẹ của đương số dễ có công
danh, quyền tước và sự nghiệp cao; có người làm lãnh đạo, quản lý
hoặc tổ trưởng — tùy theo mức độ đẹp của các sao đi cùng.

Cha mẹ là người thành đạt, có bằng cấp, học vị, sau này dễ được cầm
dấu, quản lý nhiều người bên dưới và đưa ra những quyết định ảnh
hưởng tới nhiều người.`,
  },

  {
    id: 'quoc-an-tai-phuc-duc',
    title: 'Quốc Ấn tại Phúc Đức',
    sao: ['Quốc Ấn'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `**Quốc Ấn** tại cung Phúc Đức chủ về phát quý, phát quang cho
dòng họ đương số. Dòng dõi có khoa danh, uy thế, nhiều người hiển
đạt, được giữ chính chức và có huy chương.`,
  },
  {
    id: 'quoc-an-tai-phuc-duc-luc-cat',
    title: 'Quốc Ấn tại Phúc Đức + Lục Cát - Tổ tiên làm quan to',
    sao: ['Quốc Ấn'],
    cung: ['Phúc Đức'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 73,
    tomTat: `Quốc Ấn cùng bộ Lục Cát (Tả Phù, Hữu Bật, Văn Xương, Văn Khúc,
Thiên Khôi, Thiên Việt) tại cung Phúc Đức cho thấy các cụ tổ tiên
xưa của đương số nhiều người làm quan to, có quyền chức, có ấn vua
ban; đến đời nay vẫn có người làm.`,
  },
  {
    id: 'quoc-an-tai-phuc-duc-binh-hinh-tuong',
    title: 'Quốc Ấn tại Phúc Đức + Phục Binh/Thiên Hình/Tướng Quân - Võ nghiệp',
    sao: ['Quốc Ấn'],
    cung: ['Phúc Đức'],
    ketHop: ['Phục Binh', 'Thiên Hình', 'Tướng Quân'],
    doUuTien: 73,
    tomTat: `Quốc Ấn cùng Phục Binh, Thiên Hình, Tướng Quân tại Phúc Đức
cho thấy tổ tiên và dòng họ đương số phát về võ nghiệp; nhiều người
làm tướng lĩnh trong ngành lực lượng vũ trang.`,
  },

  {
    id: 'quoc-an-tai-dien-trach',
    title: 'Quốc Ấn tại Điền Trạch - địa linh nhân kiệt',
    sao: ['Quốc Ấn'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Quốc Ấn** tại Điền Trạch cho thấy nơi đương số ở và sinh sống
là vùng đất "địa linh nhân kiệt", sinh ra nhiều nhân tài, nhiều quan
chức, người có địa vị trong xã hội.

Đặc trưng cách cục: chủ mệnh hay buôn bán, kinh doanh, đấu thầu đất
đai, nhà cửa; nhà cửa có đầy đủ giấy tờ, sổ đỏ hợp pháp, hay bày ấn
triện phong thủy trong nhà, treo nhiều bằng cấp, giấy khen, giải
thưởng và thích bày biện phong thủy, vật phẩm linh thiêng để giữ
vượng khí.`,
  },

  {
    id: 'quoc-an-tai-quan-loc',
    title: 'Quốc Ấn tại Quan Lộc - chức vụ quyền uy',
    sao: ['Quốc Ấn'],
    cung: ['Quan Lộc'],
    doUuTien: 82,
    tomTat: `**Quốc Ấn** tại Quan Lộc cho thấy đương số luôn có chức vụ và
quyền uy trong công việc và học tập, hay được nhận vị trí lãnh đạo,
quản lý một tập thể. Càng hội nhiều cát tinh thì chức vụ đó càng
lớn.

Trong học hành, chủ mệnh thi cử thường thuận lợi, dễ được đề tên
bảng vàng, học bổng và khen thưởng. Đương số có chức vị, con dấu
riêng, chữ ký riêng, quan trọng và ảnh hưởng tới nhiều người.

Khi không có nhiều cát tinh đẹp đi cùng, chủ mệnh đôi khi chỉ làm vị
trí thư ký giữ dấu hoặc văn thư chuyên đóng dấu.

Quốc Ấn gặp Tuần hoặc Triệt: công danh không cao, bình bình; nếu
lên cao quá thì dễ có lúc bị giáng chức, mất việc.

Bộ Binh Hình Tướng Ấn: chủ phát về võ nghiệp, làm bên lực lượng vũ
trang, có phẩm hàm cao, quyền uy lớn.`,
  },

  {
    id: 'quoc-an-tai-no-boc',
    title: 'Quốc Ấn tại Nô Bộc',
    sao: ['Quốc Ấn'],
    cung: ['Nô Bộc'],
    doUuTien: 70,
    tomTat: `**Quốc Ấn** tại Nô Bộc cho thấy bạn bè của đương số nhiều
người giỏi giang, tài năng, có quyền có chức và làm lãnh đạo.

Đúng lẽ "đi với bụt mặc áo cà sa, đi với ma mặc áo giấy" — chủ mệnh
được nâng đỡ và "thơm lây" từ những người bạn quyền lực này.`,
  },

  {
    id: 'quoc-an-tai-thien-di',
    title: 'Quốc Ấn tại Thiên Di',
    sao: ['Quốc Ấn'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Quốc Ấn** tại Thiên Di cho thấy đương số ra ngoài hay được ở
gần các vị lãnh đạo, quan chức lớn, là người ra ngoài có địa vị, chức
quyền, có thể quản lý một tập thể phía dưới và được nhiều người nể
trọng.`,
  },

  {
    id: 'quoc-an-thien-di-ta-huu-menh-quan',
    title: 'Quốc Ấn Thiên Di + Tả Hữu tại Mệnh/Quan - Thư ký trợ lý',
    sao: ['Quốc Ấn'],
    cung: ['Thiên Di', 'Mệnh', 'Quan Lộc'],
    ketHop: ['Tả Phù', 'Hữu Bật'],
    doUuTien: 70,
    tomTat: `Khi Quốc Ấn tại Thiên Di đi cùng Tả Phù hoặc Hữu Bật ở Mệnh
hay Quan Lộc, đương số dễ làm thư ký, trợ lý cho sếp hoặc lãnh đạo
cấp cao — đứng ngay cạnh quyền lực, hỗ trợ điều hành tổ chức.`,
  },

  {
    id: 'quoc-an-tai-tat-ach-tam-linh',
    title: 'Quốc Ấn tại Tật Ách - căn Nhà Trần',
    sao: ['Quốc Ấn'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `**Quốc Ấn** tại Tật Ách báo hiệu đương số có nét tâm linh đặc
biệt: chủ mệnh thích chuyện tâm linh, thờ cúng; ốm đau bệnh tật là
hay ra đền, ra chùa cúng lễ để xin khỏi bệnh.`,
  },

  {
    id: 'quoc-an-tat-menh-tam-linh-can-tran',
    title: 'Quốc Ấn Tật + sao Tâm linh tại Mệnh - Căn Nhà Trần',
    sao: ['Quốc Ấn'],
    cung: ['Tật Ách', 'Mệnh'],
    ketHop: ['Thiên Riêu', 'Đà La', 'Hoa Cái', 'Đẩu Quân'],
    doUuTien: 70,
    tomTat: `Khi Quốc Ấn tại Tật Ách kết hợp với Mệnh hội nhiều sao tâm linh
như Thiên Riêu, Đà La, Hoa Cái, Đẩu Quân, đây là cách báo căn đặc
biệt: đương số dễ có căn bên Tứ Phủ, **Nhà Trần**, chủ yếu là căn số
bên Nhà Trần, có lộc sát quỷ trừ tà.

Đây là cách báo căn đồng số lính đặc biệt — chủ mệnh có duyên với
Đạo Tứ Phủ, đặc biệt là Nhà Trần (Đức Thánh Trần Hưng Đạo).`,
  },

  {
    id: 'quoc-an-tai-tai-bach',
    title: 'Quốc Ấn tại Tài Bạch - chìa khóa ngân khố',
    sao: ['Quốc Ấn'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Quốc Ấn** tại Tài Bạch cho thấy đương số hay có vị trí quản
lý, thu giữ, điều phối về tài chính, tiền tệ — là người nắm giữ
quyền hành cao về tài chính.

Các nghề tiêu biểu: thủ kho, kế toán trưởng, thủ quỹ, quản lý ngân
quỹ tổ chức.

Hình tượng tổng thể là người cầm chìa khóa ngân khố, có quyền quyết
định về tiền bạc trong một tập thể.`,
  },

  {
    id: 'quoc-an-tai-tu-tuc',
    title: 'Quốc Ấn tại Tử Tức',
    sao: ['Quốc Ấn'],
    cung: ['Tử Tức'],
    doUuTien: 72,
    tomTat: `**Quốc Ấn** tại Tử Tức cho thấy con cái của đương số dễ giỏi
giang, thành đạt, lớn lên có thể trở thành "ông nọ bà kia", có địa
vị trong xã hội và quản lý ít nhất một nhóm người. Con cái có phẩm
chất tốt, năng lực vượt trội nên được mọi người xung quanh yêu mến
và kính nể.`,
  },

  {
    id: 'quoc-an-tai-phu-the',
    title: 'Quốc Ấn tại Phu Thê',
    sao: ['Quốc Ấn'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `**Quốc Ấn** tại Phu Thê cho thấy người hôn phối của đương số
có quyền tước, địa vị, làm lãnh đạo hoặc chủ doanh nghiệp; thông
minh, giỏi giang, có bằng cấp. Bạn đời thường giúp đỡ chủ mệnh
nhiều trong công việc và con đường phát triển sự nghiệp.`,
  },

  {
    id: 'quoc-an-tai-huynh-de',
    title: 'Quốc Ấn tại Huynh Đệ',
    sao: ['Quốc Ấn'],
    cung: ['Huynh Đệ'],
    doUuTien: 70,
    tomTat: `**Quốc Ấn** tại Huynh Đệ cho thấy anh chị em của đương số giỏi
giang, có địa vị trong xã hội.`,
  },
  {
    id: 'quoc-an-tai-huynh-de-luc-cat',
    title: 'Quốc Ấn tại Huynh Đệ + Lục Cát - Anh em lãnh đạo lớn',
    sao: ['Quốc Ấn'],
    cung: ['Huynh Đệ'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 65,
    tomTat: `Quốc Ấn cùng bộ Lục Cát (Tả Phù, Hữu Bật, Văn Xương, Văn Khúc,
Thiên Khôi, Thiên Việt) tại Huynh Đệ cho thấy anh chị em đương số
dễ làm lãnh đạo lớn hoặc chủ doanh nghiệp thành đạt — đúng lẽ "một
người làm quan cả họ được nhờ".`,
  },

  {
    id: 'quoc-an-phong-cao',
    title: 'Quốc Ấn + Phong Cáo - phong chức ban quyền',
    sao: ['Quốc Ấn'],
    ketHop: ['Phong Cáo'],
    doUuTien: 75,
    tomTat: `Khi Quốc Ấn đi cùng Phong Cáo, đương số được phong chức, ban
quyền, tặng huy chương hoặc lên chức.

Bộ Ấn-Cáo là cặp đôi chức tước và bằng cấp kinh điển trong tử vi —
khi vào hạn càng ứng nghiệm rõ rệt cho chủ mệnh.`,
  },

  {
    id: 'quoc-an-binh-hinh-tuong',
    title: 'Quốc Ấn + Phục Binh + Thiên Hình + Tướng Quân - Binh Hình Tướng Ấn',
    sao: ['Quốc Ấn'],
    ketHop: ['Phục Binh', 'Thiên Hình', 'Tướng Quân'],
    doUuTien: 85,
    tomTat: `Quốc Ấn cùng Phục Binh, Thiên Hình và Tướng Quân hợp thành bộ
**Binh Hình Tướng Ấn** — chủ về quyền uy võ nghiệp hiển đạt cho
đương số.

Chủ mệnh có khả năng trở thành sĩ quan tham mưu xuất sắc, có thể
làm lãnh đạo lớn của một tập thể nhiều người, quyền uy vô cùng
lớn, đưa ra nhiều quyết định quan trọng ảnh hưởng tới tập thể.

Đây là cách cục đại quyền uy trong tử vi — đặc biệt phát về quân
đội, công an, an ninh, hành pháp.

(Phần chung Binh Hình Tướng Ấn đã viết tại tuong-quan.ts.)`,
  },

  {
    id: 'quoc-an-tuong-tam-hoa',
    title: 'Quốc Ấn + Tướng Quân + Tam Hóa - vận may quan trường',
    sao: ['Quốc Ấn'],
    ketHop: ['Tướng Quân', 'Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa'],
    doUuTien: 80,
    tomTat: `Khi Quốc Ấn đi cùng Tướng Quân và đủ bộ Tam Hóa (Hóa Lộc, Hóa
Quyền, Hóa Khoa), đương số gặp vận hội may mắn lớn về quan trường,
được hiển đạt về công danh và làm chức vụ rất to.

Đây là cách cục cực đẹp — Tam Hóa là tam giải thần (Lộc, Quyền,
Khoa) cộng Quốc Ấn cộng Tướng Quân, mở ra đường thăng tiến vương
giả cho chủ mệnh.`,
  },

  {
    id: 'quoc-an-tuan-triet',
    title: 'Quốc Ấn + Tuần / Triệt - công danh trắc trở',
    sao: ['Quốc Ấn'],
    ketHop: ['Tuần', 'Triệt'],
    doUuTien: 65,
    tomTat: `Quốc Ấn gặp Tuần hoặc Triệt là điềm công danh trắc trở, thất
bại đối với đương số: dễ bị cách chức, bãi miễn, sa thải hoặc tranh
cử thất bại.

Tình huống đặc biệt nguy hiểm là chủ mệnh có khả năng được bổ nhiệm
chức vụ quan trọng nhưng chưa kịp phát huy năng lực đã bị giáng
chức, cách chức hoặc mất việc; thậm chí còn có tình huống bị vu
oan, bị người khác gièm pha, nói xấu.

Cách hóa giải:

- Không cố gắng vươn lên vị trí quá cao nếu chưa đủ năng lực.
- Không chạy theo chức tước, quyền lực.
- Xây dựng uy tín cá nhân bằng trí tuệ, đạo đức, chuyên môn.
- Tìm người lãnh đạo xứng đáng để theo.

Khi đó dù không có "ấn tín" chính thức thì lời nói của chủ mệnh
vẫn có trọng lượng.`,
  },

  {
    id: 'quoc-an-vao-han',
    title: 'Quốc Ấn vào hạn',
    sao: ['Quốc Ấn'],
    doUuTien: 60,
    tomTat: `Quốc Ấn vào hạn là cát điềm cho đương số: đắc thời, đắc quan,
đắc khoa; được thăng chức, đảm nhiệm vị trí mới và có quyền uy, con
dấu trong tay.

Chủ mệnh đồng thời có cơ hội nhận huy chương, bằng khen, giấy khen.

Năm có hạn này là thời điểm tốt để xin việc, nộp đơn thi tuyển hay
cầu chức. Đặc biệt khi đi cùng Phong Cáo thì chắc chắn được bổ
nhiệm.`,
  },

  {
    id: 'quoc-an-loi-khuyen',
    title: 'Lời khuyên cho người Quốc Ấn',
    sao: ['Quốc Ấn'],
    doUuTien: 35,
    tomTat: `Quốc Ấn rực rỡ khi gặp cát tinh, nhưng cũng dễ lận đận khi đi
cùng sát tinh phá hoại. Quyền lực chỉ bền vững khi được xây dựng
trên nền tảng tài năng, đạo đức và uy tín cá nhân.

Bí quyết phát huy Quốc Ấn cho đương số:

- Giữ cái tâm trong sáng.
- Làm việc đường đường chính chính.
- Sống khiêm nhường.
- Tích đức, rèn đạo.
- Không chạy theo quyền lực hư vinh.
- Phát huy chuyên môn thay vì chỉ "chữ ký".

Khi không cố vươn lên cao quá năng lực mà tích lũy bằng trí tuệ và
đạo đức, chủ mệnh sẽ hưởng quyền uy bền vững suốt đời.`,
  },
];
