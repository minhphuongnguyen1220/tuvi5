import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO KÌNH DƯƠNG - Lục Sát Tinh
 */
export const luanGiai_KinhDuong: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung của sao Kình Dương
  // ============================================================
  {
    id: 'kinh-duong-tinh-chat-chung',
    title: 'Kình Dương - Đặc tính chung',
    sao: ['Kình Dương'],
    doUuTien: 30,
    tomTat: `**Kình Dương** (còn gọi là Dương Nhận) thuộc bộ Lục Sát Tinh, ngũ
hành Kim — là Dương Kim đới Hỏa. Hóa khí của sao là Hình Tinh và Hung Tinh,
nên đặc tính chính nằm ở sát phạt, cô đơn, bần hàn, bệnh tật và tai nạn.

Vị trí miếu hãm:

- **Đắc** địa
  - Thìn, Tuất, Sửu, Mùi
- **Hãm** địa
  - Tý, Ngọ, Mão, Dậu, Dần, Thân, Tỵ, Hợi

Người xưa ví Kình Dương như "thanh gươm bén để giữa trời" — đương số biết
dùng thì mở đường công danh, dùng không khéo thì gây tai họa cho chính
mình.`,

    chiTiet: `Kình Dương đứng cùng Đà La tạo thành bộ "Kình Đà" — luôn kèm
hai bên sao Lộc Tồn để canh giữ Lộc Tồn.

Trong tử vi, Kình Dương là một trong sáu sao của bộ Lục Sát Tinh:

- Kình Dương, Đà La (bộ Kình Đà)
- Địa Không, Địa Kiếp (bộ Không Kiếp)
- Linh Tinh, Hỏa Tinh (bộ Linh Hỏa)

Sáu sao này gọi tắt là "Kình Đà Không Kiếp Linh Hỏa".

Khi Kình Dương tọa thủ tại cung Vô Chính Diệu (không có chính tinh), gọi
là cách "Hung Tinh độc thủ" — tính chất hung tinh phát huy mạnh mẽ nhất.`,
  },

  // ============================================================
  // 2. Kình Dương tại Mệnh - tướng mạo
  // ============================================================
  {
    id: 'kinh-duong-tai-menh-tuong-mao',
    title: 'Kình Dương tại Mệnh - Tướng mạo',
    sao: ['Kình Dương'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `Đương số có Kình Dương tọa thủ Mệnh thường có thân hình cao to
thô kệch, da xám, lộ hầu lộ nhãn; dáng đi lệch vai, hơi gù.`,
  },

  {
    id: 'kinh-duong-tai-menh-tuong-mao-dac-dia',
    title: 'Kình Dương Mệnh - Đắc địa thần thái',
    sao: ['Kình Dương'],
    cung: ['Mệnh'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 78,
    tomTat: `Khi Kình Dương **Đắc** địa cư Mệnh, thần thái đương số uy nghi
và vạm vỡ như tướng quân.`,
  },

  // ============================================================
  // 3. Kình Dương tại Mệnh - tính cách
  // ============================================================
  {
    id: 'kinh-duong-tai-menh-tinh-cach',
    title: 'Kình Dương tại Mệnh - Tính cách',
    sao: ['Kình Dương'],
    cung: ['Mệnh'],
    doUuTien: 85,
    tomTat: `Tính cách của đương số có Kình Dương cư Mệnh chịu ảnh hưởng
mạnh từ trạng thái sao đắc hay hãm.`,
  },

  {
    id: 'kinh-duong-tai-menh-tinh-cach-dac-dia',
    title: 'Kình Dương Mệnh - Đắc địa tính cách',
    sao: ['Kình Dương'],
    cung: ['Mệnh'],
    chi: ['Thìn', 'Tuất', 'Sửu', 'Mùi'],
    doUuTien: 85,
    tomTat: `Khi Kình Dương **Đắc** địa cư Mệnh tại Thìn, Tuất, Sửu hoặc Mùi,
đương số dũng cảm, cương nghị, quen hành động và "nói ít làm nhiều". Tính
hơi nóng nảy nhưng rất thẳng thắn, đúng theo kiểu "cây ngay không sợ chết
đứng".`,
  },

  {
    id: 'kinh-duong-tai-menh-tinh-cach-ham',
    title: 'Kình Dương Mệnh - Hãm địa tính cách',
    sao: ['Kình Dương'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    doUuTien: 85,
    tomTat: `Khi Kình Dương **Hãm** địa cư Mệnh, đương số nóng nảy, bướng
bỉnh, trí tuệ kém phần sáng suốt và hay "việc bé xé ra to" — dễ vướng
tranh cãi và tự chuốc họa cho mình.`,
  },

  // ============================================================
  // 4. Kình Dương tại Mệnh - sự nghiệp & tài lộc
  // ============================================================
  {
    id: 'kinh-duong-tai-menh-su-nghiep',
    title: 'Kình Dương tại Mệnh - Sự nghiệp & tài lộc',
    sao: ['Kình Dương'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Về tài lộc, đương số có Kình Dương cư Mệnh phải tự thân lao lực
mới có tiền, ít hưởng được phúc lộc sẵn có từ tổ tiên hay người khác.`,
  },

  {
    id: 'kinh-duong-tai-menh-dac-cat',
    title: 'Kình Dương Mệnh - Đắc địa + cát tinh',
    sao: ['Kình Dương'],
    cung: ['Mệnh'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 78,
    tomTat: `Khi Kình Dương **Đắc** địa cư Mệnh có Tả Phù, Hữu Bật, Văn
Xương, Văn Khúc, Thiên Khôi hoặc Thiên Việt đi cùng, đương số phù hợp với
võ nghiệp, quân sự, công an, cứu hộ — hoặc nghề liên quan đến dao kéo và
mổ xẻ như bác sĩ phẫu thuật.`,
  },

  {
    id: 'kinh-duong-tai-menh-ham',
    title: 'Kình Dương Mệnh - Hãm địa sự nghiệp',
    sao: ['Kình Dương'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `Khi Kình Dương **Hãm** địa cư Mệnh, đương số dễ dính vào hung
nghiệp, làm những nghề nặng nhọc lao lực chân tay. Công việc không bền,
phải thay đổi thường xuyên.`,
  },

  {
    id: 'kinh-duong-tai-menh-linh-hoa-kiep',
    title: 'Kình Dương Mệnh + Linh / Hỏa / Kiếp Sát',
    sao: ['Kình Dương'],
    cung: ['Mệnh'],
    ketHop: ['Linh Tinh', 'Hỏa Tinh', 'Kiếp Sát'],
    doUuTien: 75,
    tomTat: `Kình Dương cư Mệnh gặp Linh Tinh, Hỏa Tinh hoặc Kiếp Sát khiến
tiền của đương số hao tán; càng dễ gặp họa nguy hiểm tới tính mạng.`,
  },

  {
    id: 'kinh-duong-tai-menh-tuan-triet-cat',
    title: 'Kình Dương Mệnh + Tuần / Triệt / cát tinh',
    sao: ['Kình Dương'],
    cung: ['Mệnh'],
    ketHop: ['Tuần', 'Triệt', 'Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 72,
    tomTat: `Kình Dương cư Mệnh gặp Tuần, Triệt hoặc các cát tinh Tả Phù,
Hữu Bật, Văn Xương, Văn Khúc, Thiên Khôi, Thiên Việt sẽ giảm bớt phần hung
của sao này.`,
  },

  // ============================================================
  // 5. Kình Dương tại Mệnh - phúc thọ tai họa
  // ============================================================
  {
    id: 'kinh-duong-tai-menh-phuc-tho',
    title: 'Kình Dương tại Mệnh - Phúc thọ & tai họa',
    sao: ['Kình Dương'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `Đương số có Kình Dương cư Mệnh thường liều lĩnh, hấp tấp — đây
chính là gốc của những tai họa lặp đi lặp lại trong đời.`,
  },

  {
    id: 'kinh-duong-tai-menh-ngo',
    title: 'Kình Dương tại Mệnh - Ngọ',
    sao: ['Kình Dương'],
    cung: ['Mệnh'],
    chi: ['Ngọ'],
    doUuTien: 82,
    tomTat: `Khi Kình Dương cư Mệnh tại Ngọ, hung tính đặc biệt nguy hiểm —
đương số dễ chết yểu, gặp tai nạn bất ngờ hoặc tàn tật.`,
  },

  {
    id: 'kinh-duong-tai-menh-mao-dau',
    title: 'Kình Dương tại Mệnh - Mão / Dậu',
    sao: ['Kình Dương'],
    cung: ['Mệnh'],
    chi: ['Mão', 'Dậu'],
    doUuTien: 82,
    tomTat: `Khi Kình Dương cư Mệnh tại Mão hoặc Dậu, đương số có khả năng
phá sản và sống cuộc đời lao khổ.`,
  },

  // ============================================================
  // 6. Cách Kình Dương + Linh/Hỏa - thân thể dị tật
  // ============================================================
  {
    id: 'kinh-duong-linh-hoa',
    title: 'Kình Dương + Linh/Hỏa Tinh - Thân thể dị tật',
    sao: ['Kình Dương', 'Linh Tinh', 'Hỏa Tinh'],
    doUuTien: 60,
    tomTat: `Khi Kình Dương đứng cùng Linh Tinh và Hỏa Tinh, đương số phải
chịu cảnh thương tật, hình khắc thân thể.

Chấn thương thường đến từ dao kéo, điện lửa, súng đạn hay những tai nạn
bất ngờ. Cuộc đời nghèo khó, vất vả và ít nhận được sự giúp đỡ từ người
khác.`,
  },

  // ============================================================
  // 7. Cách Kình Dương + Không Kiếp - côn đồ đạo tặc
  // ============================================================
  {
    id: 'kinh-duong-khong-kiep',
    title: 'Kình Dương + Không Kiếp/Phục Binh - Côn đồ đạo tặc',
    sao: ['Kình Dương', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 60,
    tomTat: `Kình Dương đi cùng Địa Không, Địa Kiếp và Phục Binh khiến đương
số dễ bị lôi kéo vào thị phi, va chạm — hoặc sa chân vào con đường côn
đồ, đạo tặc.

Đương số thường hành nghề sát sinh; có trường hợp vì nông nổi mà vướng
vào vòng lao lý.`,
  },

  // ============================================================
  // 8. Cách Kình Dương + Hình Riêu Kiếp Sát - sát chồng/vợ
  // ============================================================
  {
    id: 'kinh-duong-hinh-rieu',
    title: 'Kình Dương + Thiên Hình/Riêu/Kiếp Sát - Sát chồng/vợ',
    sao: ['Kình Dương', 'Thiên Hình', 'Thiên Riêu'],
    doUuTien: 60,
    tomTat: `Kình Dương đi cùng Thiên Hình, Thiên Riêu và Kiếp Sát khiến đời
sống hôn nhân của đương số trắc trở. Hai vợ chồng khó tìm được tiếng nói
chung, thường xuyên cãi vã và xung đột — dễ dẫn đến ly hôn.`,
  },

  {
    id: 'kinh-duong-hinh-rieu-nu',
    title: 'Kình Dương + Hình Riêu - Nữ mệnh sát chồng',
    sao: ['Kình Dương', 'Thiên Hình', 'Thiên Riêu'],
    gioiTinh: 'Nữ',
    doUuTien: 62,
    tomTat: `Nữ mệnh có Kình Dương đi cùng Thiên Hình, Thiên Riêu và Kiếp
Sát mang số sát chồng.`,
  },

  {
    id: 'kinh-duong-hinh-rieu-nam',
    title: 'Kình Dương + Hình Riêu - Nam mệnh sát vợ',
    sao: ['Kình Dương', 'Thiên Hình', 'Thiên Riêu'],
    gioiTinh: 'Nam',
    doUuTien: 62,
    tomTat: `Nam mệnh có Kình Dương đi cùng Thiên Hình, Thiên Riêu và Kiếp
Sát mang số sát vợ.`,
  },

  // ============================================================
  // 9. Cách Kình Dương + Thái Tuế/Điếu Khách - xa cách cha mẹ
  // ============================================================
  {
    id: 'kinh-duong-thai-tue',
    title: 'Kình Dương + Thái Tuế/Điếu Khách - Xa cách cha mẹ',
    sao: ['Kình Dương', 'Thái Tuế', 'Điếu Khách'],
    doUuTien: 55,
    tomTat: `Kình Dương đi cùng Thái Tuế và Điếu Khách khiến đương số xa
cách song thân:

- Có người vì cha mẹ mất sớm
- Có người phải tha hương cầu thực, bôn ba khắp chốn

Tình cảm gia đình vì thế dễ sứt mẻ, lạnh nhạt.`,
  },

  // ============================================================
  // 10. Hạn Kình Dương + Thiên Hình tại Ngọ
  // ============================================================
  {
    id: 'kinh-duong-thien-hinh-ngo',
    title: 'Kình Dương + Thiên Hình tại Ngọ - Cực HUNG',
    sao: ['Kình Dương', 'Thiên Hình'],
    chi: ['Ngọ'],
    doUuTien: 65,
    tomTat: `Kình Dương đi cùng Thiên Hình tại Ngọ là cách cực hung — đương
số bị tù.`,
  },

  {
    id: 'kinh-duong-hinh-ngo-luc-sat',
    title: 'Kình Dương + Hình tại Ngọ + Lục Sát',
    sao: ['Kình Dương', 'Thiên Hình'],
    chi: ['Ngọ'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 60,
    tomTat: `Kình Dương đi cùng Thiên Hình tại Ngọ kèm thêm bộ Lục Sát (Kình
Dương, Đà La, Hỏa Tinh, Linh Tinh, Địa Không, Địa Kiếp) là cách rất xấu —
đương số có thể chết trong thời gian này.`,
  },

  // ============================================================
  // 11. Hạn Kình Dương + Vũ Khúc + Phá Quân
  // ============================================================
  {
    id: 'kinh-duong-vu-pha',
    title: 'Kình Dương + Vũ Khúc + Phá Quân - Bị hại vì tiền',
    sao: ['Kình Dương', 'Vũ Khúc', 'Phá Quân'],
    doUuTien: 55,
    tomTat: `Kình Dương đi cùng Vũ Khúc và Phá Quân khiến đương số bị khốn
hại vì tiền: tài lộc tan tác, vướng vào tranh chấp tiền bạc; có thể bị
lừa lọc hoặc liên lụy về tài chính.`,
  },

  // ============================================================
  // 12. Lời khuyên hóa giải Kình Dương
  // ============================================================
  {
    id: 'kinh-duong-loi-khuyen',
    title: 'Kình Dương - Lời khuyên hóa giải',
    sao: ['Kình Dương'],
    doUuTien: 40,
    tomTat: `Chìa khóa hóa giải Kình Dương nằm ở hai chữ kiên nhẫn và nhún
nhường:

- Rèn tính kiên nhẫn, tránh cố chấp hay hiếu thắng quá mức
- Khi gặp rắc rối, giữ thái độ ôn hòa và xử lý bằng lý trí
- Chọn nghề phù hợp như võ nghiệp, quân đội, công an, kỹ thuật, phẫu
  thuật — biến "dao" thành công cụ tạo thành tựu
- Chú ý an toàn đi lại, tránh va chạm dao kéo, xe cộ, điện lửa
- Tham gia thể thao và rèn luyện thân thể để giải tỏa nóng nảy, đồng thời
  giảm nguy cơ thương tật`,
  },

  // ============================================================
  // 13. Kình Dương tại Phụ Mẫu
  // ============================================================
  {
    id: 'kinh-duong-tai-phu-mau',
    title: 'Kình Dương tại Phụ Mẫu',
    sao: ['Kình Dương'],
    cung: ['Phụ Mẫu'],
    doUuTien: 78,
    tomTat: `Kình Dương tại Phụ Mẫu ảnh hưởng đến quan hệ giữa đương số với
cha mẹ.`,
  },

  {
    id: 'kinh-duong-tai-phu-mau-ham',
    title: 'Kình Dương Phụ Mẫu - Hãm địa',
    sao: ['Kình Dương'],
    cung: ['Phụ Mẫu'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `Khi Kình Dương **Hãm** tại Phụ Mẫu, cha mẹ đương số nóng nảy
và dễ xung đột với nhau, có thể ly tán hoặc một người đoản mệnh. Bố mẹ
thường vướng nghề sát sinh hoặc lao động nặng nhọc. Đương số thiệt thòi
tình cảm và phải sớm tự lập.`,
  },

  {
    id: 'kinh-duong-tai-phu-mau-dac-dia',
    title: 'Kình Dương Phụ Mẫu - Đắc địa',
    sao: ['Kình Dương'],
    cung: ['Phụ Mẫu'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 80,
    tomTat: `Khi Kình Dương **Đắc** địa tại Phụ Mẫu, cha mẹ đương số chính
trực và có uy quyền — thường theo nghề quân đội, công an, võ nghiệp hoặc
"dao kéo cứu người". Nhà có nề nếp gia phong rõ ràng, nhờ đó con cái
trưởng thành sớm.`,
  },

  // ============================================================
  // 14. Kình Dương tại Phúc Đức
  // ============================================================
  {
    id: 'kinh-duong-tai-phuc-duc',
    title: 'Kình Dương tại Phúc Đức',
    sao: ['Kình Dương'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `Kình Dương tại Phúc Đức ảnh hưởng đến phúc đức dòng họ của
đương số.`,
  },

  {
    id: 'kinh-duong-tai-phuc-duc-ham',
    title: 'Kình Dương Phúc Đức - Hãm địa',
    sao: ['Kình Dương'],
    cung: ['Phúc Đức'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi Kình Dương **Hãm** tại Phúc Đức, họ hàng đương số ly tán và
thiếu gắn kết. Trong gia tộc có người yểu mệnh, tàn tật hoặc gặp tai nạn.
Mồ mả tổ tiên xuống cấp, nứt vỡ — cần sửa sang.`,
  },

  {
    id: 'kinh-duong-tai-phuc-duc-dac-dia',
    title: 'Kình Dương Phúc Đức - Đắc địa',
    sao: ['Kình Dương'],
    cung: ['Phúc Đức'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 78,
    tomTat: `Khi Kình Dương **Đắc** địa tại Phúc Đức, gia tộc đương số uy
nghi; mồ mả tổ tiên khang trang, đặt nơi long mạch, gần miếu đình hay
tượng đá. Người trong họ cứng cỏi, hiên ngang và có uy tín — danh giá
gia tộc được giữ vững.`,
  },

  // ============================================================
  // 15. Kình Dương tại Điền Trạch
  // ============================================================
  {
    id: 'kinh-duong-tai-dien-trach',
    title: 'Kình Dương tại Điền Trạch',
    sao: ['Kình Dương'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Kình Dương tại Điền Trạch ảnh hưởng đến nhà cửa và đất đai của
đương số.`,
  },

  {
    id: 'kinh-duong-tai-dien-trach-ham',
    title: 'Kình Dương Điền Trạch - Hãm địa',
    sao: ['Kình Dương'],
    cung: ['Điền Trạch'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi Kình Dương **Hãm** tại Điền Trạch, đương số phải sửa sang
tu bổ nhà cửa thường xuyên. Đất méo mó, không cân đối; dễ mua nhầm chỗ
có cốt, mồ mả hoặc phạm phong thủy. Thành viên trong nhà nóng tính, hay
cãi vã.`,
  },

  {
    id: 'kinh-duong-tai-dien-trach-dac-dia',
    title: 'Kình Dương Điền Trạch - Đắc địa',
    sao: ['Kình Dương'],
    cung: ['Điền Trạch'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 78,
    tomTat: `Khi Kình Dương **Đắc** địa tại Điền Trạch, nhà cửa đương số
khang trang, bền vững dù phải đôi lần thay đổi mới ổn định. Gia trạch
thường gần đền chùa, nghĩa trang hay tượng voi quỳ — nhưng nhờ phúc phần
nên ít bị ảnh hưởng xấu. Gia đình kỷ luật và nề nếp.`,
  },

  // ============================================================
  // 16. Kình Dương tại Quan Lộc
  // ============================================================
  {
    id: 'kinh-duong-tai-quan-loc',
    title: 'Kình Dương tại Quan Lộc',
    sao: ['Kình Dương'],
    cung: ['Quan Lộc'],
    doUuTien: 80,
    tomTat: `Kình Dương tại Quan Lộc ảnh hưởng đến công danh và sự nghiệp
của đương số.`,
  },

  {
    id: 'kinh-duong-tai-quan-loc-ham',
    title: 'Kình Dương Quan Lộc - Hãm địa',
    sao: ['Kình Dương'],
    cung: ['Quan Lộc'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `Khi Kình Dương **Hãm** tại Quan Lộc, công danh của đương số bị
cản trở — tựa như "voi quỳ chặn cửa công môn", nỗ lực nhiều mà thành quả
không tương xứng. Đương số phải thay đổi nghề liên tục và ít khi đạt vị
trí cao.`,
  },

  {
    id: 'kinh-duong-tai-quan-loc-dac-dia',
    title: 'Kình Dương Quan Lộc - Đắc địa',
    sao: ['Kình Dương'],
    cung: ['Quan Lộc'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 80,
    tomTat: `Khi Kình Dương **Đắc** địa tại Quan Lộc, đương số phù hợp theo
võ nghiệp, quân đội, công an hoặc nghề cần sức mạnh và kỷ luật.`,
  },

  {
    id: 'kinh-duong-tai-quan-loc-thien-ma',
    title: 'Kình Dương Quan Lộc + Thiên Mã',
    sao: ['Kình Dương'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Mã'],
    doUuTien: 75,
    tomTat: `Kình Dương tại Quan Lộc có Thiên Mã đi cùng giúp đương số trở
thành võ tướng giữ trọng trách lớn nơi biên cương.`,
  },

  {
    id: 'kinh-duong-tai-quan-loc-tu-phu',
    title: 'Kình Dương Quan Lộc + Tử Vi / Thiên Phủ',
    sao: ['Kình Dương'],
    cung: ['Quan Lộc'],
    ketHop: ['Tử Vi', 'Thiên Phủ'],
    doUuTien: 75,
    tomTat: `Kình Dương tại Quan Lộc gặp Tử Vi hoặc Thiên Phủ giúp đương số
chuyển hướng sang kinh doanh, buôn bán phát đạt.`,
  },

  // ============================================================
  // 17. Kình Dương tại Nô Bộc
  // ============================================================
  {
    id: 'kinh-duong-tai-no-boc',
    title: 'Kình Dương tại Nô Bộc',
    sao: ['Kình Dương'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Kình Dương tại Nô Bộc ảnh hưởng đến quan hệ của đương số với
bạn bè và đồng nghiệp.`,
  },

  {
    id: 'kinh-duong-tai-no-boc-ham',
    title: 'Kình Dương Nô Bộc - Hãm địa',
    sao: ['Kình Dương'],
    cung: ['Nô Bộc'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi Kình Dương **Hãm** tại Nô Bộc, bạn bè và đồng nghiệp của
đương số bướng bỉnh, thường xung đột và ẩu đả với nhau.`,
  },

  {
    id: 'kinh-duong-tai-no-boc-khong-kiep-rieu',
    title: 'Kình Dương Nô Bộc + Không Kiếp / Thiên Riêu',
    sao: ['Kình Dương'],
    cung: ['Nô Bộc'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Thiên Riêu'],
    doUuTien: 73,
    tomTat: `Kình Dương tại Nô Bộc gặp Địa Không, Địa Kiếp hoặc Thiên Riêu
khiến đương số dễ bị phản bội, hãm hại — đúng cảnh "nuôi ong tay áo, nuôi
cáo trong nhà".`,
  },

  {
    id: 'kinh-duong-tai-no-boc-dac-dia',
    title: 'Kình Dương Nô Bộc - Đắc địa',
    sao: ['Kình Dương'],
    cung: ['Nô Bộc'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 78,
    tomTat: `Khi Kình Dương **Đắc** địa tại Nô Bộc, bạn bè và đồng nghiệp
của đương số phần nhiều xuất thân từ quân đội, công an hoặc nghề liên
quan đến sức mạnh, kỷ luật, võ nghiệp. Họ thẳng thắn, nghĩa khí, sẵn sàng
giúp đỡ khi cần.`,
  },

  // ============================================================
  // 18. Kình Dương tại Thiên Di
  // ============================================================
  {
    id: 'kinh-duong-tai-thien-di',
    title: 'Kình Dương tại Thiên Di',
    sao: ['Kình Dương'],
    cung: ['Thiên Di'],
    doUuTien: 78,
    tomTat: `Kình Dương tại Thiên Di ảnh hưởng đến chuyện đi xa và ra ngoài
của đương số.`,
  },

  {
    id: 'kinh-duong-tai-thien-di-ham',
    title: 'Kình Dương Thiên Di - Hãm địa',
    sao: ['Kình Dương'],
    cung: ['Thiên Di'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `Khi Kình Dương **Hãm** tại Thiên Di, đương số ra ngoài dễ vướng
cãi vã, thị phi và kiện tụng. Nguy cơ tai nạn xe cộ, súng đạn, điện lửa
hay ẩu đả luôn rình rập. Công việc nặng nhọc nhưng thành quả không như
mong muốn.`,
  },

  {
    id: 'kinh-duong-tai-thien-di-ham-sat',
    title: 'Kình Dương Thiên Di - Hãm + nhiều hung tinh',
    sao: ['Kình Dương'],
    cung: ['Thiên Di'],
    trangThai: ['Hãm'],
    ketHop: ['Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp', 'Hóa Kỵ'],
    doUuTien: 75,
    tomTat: `Khi Kình Dương **Hãm** tại Thiên Di gặp thêm nhiều hung tinh
như Đà La, Hỏa Tinh, Linh Tinh, Địa Không, Địa Kiếp hay Hóa Kỵ, đương số
dễ bị lừa và bị phản bội.`,
  },

  {
    id: 'kinh-duong-tai-thien-di-dac-dia',
    title: 'Kình Dương Thiên Di - Đắc địa',
    sao: ['Kình Dương'],
    cung: ['Thiên Di'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 80,
    tomTat: `Khi Kình Dương **Đắc** địa tại Thiên Di, đương số thể hiện được
bản lĩnh khi ra ngoài — có uy tín, được trọng vọng và gặp quý nhân phù
trợ. Buôn bán dễ phát tài khi hợp tác cùng người chí hướng.`,
  },

  // ============================================================
  // 19. Kình Dương tại Tật Ách
  // ============================================================
  {
    id: 'kinh-duong-tai-tat-ach',
    title: 'Kình Dương tại Tật Ách',
    sao: ['Kình Dương'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `Kình Dương tại Tật Ách ảnh hưởng đến sức khỏe của đương số.`,
  },

  {
    id: 'kinh-duong-tai-tat-ach-ham',
    title: 'Kình Dương Tật Ách - Hãm địa',
    sao: ['Kình Dương'],
    cung: ['Tật Ách'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `Khi Kình Dương **Hãm** tại Tật Ách, sức khỏe của đương số suy
yếu; dễ mắc bệnh nặng khó chữa hoặc gặp tai nạn từ dao kéo, máy móc, súng
đạn, điện lửa.`,
  },

  {
    id: 'kinh-duong-tai-tat-ach-ham-sat',
    title: 'Kình Dương Tật Ách - Hãm + sát bại tinh',
    sao: ['Kình Dương'],
    cung: ['Tật Ách'],
    trangThai: ['Hãm'],
    ketHop: ['Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp', 'Hóa Kỵ'],
    doUuTien: 75,
    tomTat: `Khi Kình Dương **Hãm** tại Tật Ách gặp thêm sát bại tinh như
Đà La, Hỏa Tinh, Linh Tinh, Địa Không, Địa Kiếp hay Hóa Kỵ, đương số mắc
bệnh hiểm nghèo phải phẫu thuật nhiều lần; dễ vướng kiện tụng, hình tù do
tai họa thân thể.`,
  },

  {
    id: 'kinh-duong-tai-tat-ach-y-luong-quy',
    title: 'Kình Dương Tật Ách + Thiên Lương / Y / Quang Quý / Bác Sĩ',
    sao: ['Kình Dương'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Lương', 'Thiên Y', 'Ân Quang', 'Thiên Quý', 'Bác Sĩ'],
    doUuTien: 75,
    tomTat: `Kình Dương tại Tật Ách gặp Thiên Lương, Thiên Y, Ân Quang,
Thiên Quý hoặc Bác Sĩ giúp đương số chuyển nguy thành an — sức khỏe dẻo
dai, hồi phục nhanh. Đương số có thể làm bác sĩ ngoại khoa, châm cứu hay
nghề y học cứu người.`,
  },

  // ============================================================
  // 20. Kình Dương tại Tài Bạch
  // ============================================================
  {
    id: 'kinh-duong-tai-tai-bach',
    title: 'Kình Dương tại Tài Bạch',
    sao: ['Kình Dương'],
    cung: ['Tài Bạch'],
    doUuTien: 78,
    tomTat: `Kình Dương tại Tài Bạch ảnh hưởng đến tài lộc của đương số.`,
  },

  {
    id: 'kinh-duong-tai-tai-bach-ham-sat',
    title: 'Kình Dương Tài Bạch - Hãm + Không Kiếp / Kiếp Sát',
    sao: ['Kình Dương'],
    cung: ['Tài Bạch'],
    trangThai: ['Hãm'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Kiếp Sát'],
    doUuTien: 78,
    tomTat: `Khi Kình Dương **Hãm** tại Tài Bạch gặp Địa Không, Địa Kiếp hay
Kiếp Sát, tài vận của đương số bất ổn — dễ mất mát, phá tán do đầu tư sai
lầm hoặc bị lừa gạt. Đương số lao động chân tay nặng nhọc, vất vả mà tiền
bạc khó giữ.`,
  },

  {
    id: 'kinh-duong-tai-tai-bach-tu-phu-loc',
    title: 'Kình Dương Tài Bạch + Tử Phủ Lộc Tồn Hóa Lộc',
    sao: ['Kình Dương'],
    cung: ['Tài Bạch'],
    ketHop: ['Tử Vi', 'Thiên Phủ', 'Lộc Tồn', 'Hóa Lộc'],
    doUuTien: 75,
    tomTat: `Kình Dương tại Tài Bạch gặp Tử Vi, Thiên Phủ, Lộc Tồn hoặc Hóa
Lộc giúp đương số trở thành người buôn bán lớn, kinh doanh mạnh tay. Tiền
bạc đến từ ngành kim loại, cơ khí, giải phẫu, dao kéo — duyên phát tài
thường đến trong biến động.`,
  },

  // ============================================================
  // 21. Kình Dương tại Tử Tức
  // ============================================================
  {
    id: 'kinh-duong-tai-tu-tuc',
    title: 'Kình Dương tại Tử Tức',
    sao: ['Kình Dương'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Kình Dương tại Tử Tức ảnh hưởng đến đường con cái của đương
số.`,
  },

  {
    id: 'kinh-duong-tai-tu-tuc-ham',
    title: 'Kình Dương Tử Tức - Hãm địa',
    sao: ['Kình Dương'],
    cung: ['Tử Tức'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi Kình Dương **Hãm** tại Tử Tức, con cái đương số bướng bỉnh
quá mức, hay cãi cha mẹ; sức khỏe kém, duyên phận mỏng — sinh nhiều nuôi
ít. Con khi lớn xa cách, không phụng dưỡng cha mẹ.`,
  },

  {
    id: 'kinh-duong-tai-tu-tuc-dac-dia',
    title: 'Kình Dương Tử Tức - Đắc địa',
    sao: ['Kình Dương'],
    cung: ['Tử Tức'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 78,
    tomTat: `Khi Kình Dương **Đắc** địa tại Tử Tức, con cái đương số có chí
tiến thủ, sớm tự lập, thông minh và bản lĩnh — cha mẹ tự hào. Tuy đôi khi
"cứng đầu khó dạy", nhưng càng lớn càng hiếu nghĩa.`,
  },

  // ============================================================
  // 22. Kình Dương tại Phu Thê
  // ============================================================
  {
    id: 'kinh-duong-tai-phu-the',
    title: 'Kình Dương tại Phu Thê',
    sao: ['Kình Dương'],
    cung: ['Phu Thê'],
    doUuTien: 80,
    tomTat: `Kình Dương tại Phu Thê ảnh hưởng đến hôn nhân của đương số.`,
  },

  {
    id: 'kinh-duong-tai-phu-the-ham',
    title: 'Kình Dương Phu Thê - Hãm địa',
    sao: ['Kình Dương'],
    cung: ['Phu Thê'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `Khi Kình Dương **Hãm** tại Phu Thê, hôn nhân của đương số trắc
trở; vợ chồng xung đột dẫn đến ly thân, ly hôn hoặc tái giá. Bạn đời mắc
bệnh, thương tích hay vướng kiện tụng. Tình cảm dễ rơi vào cảnh "đồng
sàng dị mộng".`,
  },

  {
    id: 'kinh-duong-tai-phu-the-dac-cat',
    title: 'Kình Dương Phu Thê - Đắc + Tử Phủ Lộc Tồn',
    sao: ['Kình Dương'],
    cung: ['Phu Thê'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    ketHop: ['Tử Vi', 'Thiên Phủ', 'Lộc Tồn'],
    doUuTien: 78,
    tomTat: `Khi Kình Dương **Đắc** địa tại Phu Thê có Tử Vi, Thiên Phủ hoặc
Lộc Tồn đi cùng, bạn đời của đương số mạnh mẽ, quả cảm và sự nghiệp thành
công. Hai vợ chồng ban đầu khắc khẩu nhưng càng về sau càng nhường nhịn,
hỗ trợ nhau — hôn nhân bền lâu, con cái hưởng phúc.`,
  },

  // ============================================================
  // 23. Kình Dương tại Huynh Đệ
  // ============================================================
  {
    id: 'kinh-duong-tai-huynh-de',
    title: 'Kình Dương tại Huynh Đệ',
    sao: ['Kình Dương'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Kình Dương tại Huynh Đệ ảnh hưởng đến quan hệ của đương số với
anh chị em.`,
  },

  {
    id: 'kinh-duong-tai-huynh-de-ham',
    title: 'Kình Dương Huynh Đệ - Hãm địa',
    sao: ['Kình Dương'],
    cung: ['Huynh Đệ'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi Kình Dương **Hãm** tại Huynh Đệ, anh chị em đương số lận
đận; có người bệnh tật, tai nạn hoặc yểu mệnh. Quan hệ xung đột, bất hòa,
"mạnh ai nấy sống". Thậm chí có người trở thành gánh nặng, làm khổ lụy
nhau.`,
  },

  {
    id: 'kinh-duong-tai-huynh-de-dac-dia',
    title: 'Kình Dương Huynh Đệ - Đắc địa',
    sao: ['Kình Dương'],
    cung: ['Huynh Đệ'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 78,
    tomTat: `Khi Kình Dương **Đắc** địa tại Huynh Đệ, anh chị em đương số
mạnh mẽ, cương nghị. Tuy khắc khẩu nhưng trong lòng vẫn thương nhau, sẵn
sàng hỗ trợ khi khó khăn. Mỗi người có sự nghiệp riêng.`,
  },
];
