import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THAM LANG
 */
export const luanGiai_ThamLang: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung của sao Tham Lang
  // ============================================================
  {
    id: 'tham-lang-tinh-chat-chung',
    title: 'Tham Lang - Đặc tính chung',
    sao: ['Tham Lang'],
    doUuTien: 30,
    tomTat: `**Tham Lang** thuộc chòm Thiên Phủ (sao thứ ba), ngũ hành Mộc tính
Dương. Đứng trong tổ hợp Sát - Phá - Tham (Thất Sát + Phá Quân + Tham Lang),
đại diện cho Tham - Sân - Si; có khi mở rộng thành Sát - Phá - Tham - Liêm
(thêm Liêm Trinh).

Tham Lang chủ về lòng tham tiền tài, tham tình và tham dục, đôi khi còn được
xem là tai tinh vì lòng tham luôn là nguồn cơn của tai họa.

Tượng của sao là bông hoa hồng đỏ rực như lửa — đầy tham vọng, động lực và
dục vọng. Đây là bộ sao đào hoa, thể hiện ham muốn về vật chất lẫn dục tình.`,

    chiTiet: `## Vị trí trong khoa tử vi

Tham Lang là sao thứ ba trong tám sao thuộc chòm **Thiên Phủ**.

## Bản chất

- Ngũ hành Mộc, mang tính Dương (Dương Mộc)
- Là bộ sao đào hoa — thể hiện ham muốn về vật chất, dục tình

## Tổ hợp Sát - Phá - Tham

Tham Lang đứng trong bộ ba **Thất Sát + Phá Quân + Tham Lang**, đại diện cho
ba độc Tham - Sân - Si của con người. Có khi mở rộng thành Sát - Phá - Tham
- Liêm khi thêm Liêm Trinh.

## Tham Lang chủ về

Trong tổ hợp này, Tham Lang đảm nhận phần lòng tham tiền tài, tham tình và
tham dục. Bởi vậy đôi khi sao này còn được xem là tai tinh, vì lòng tham
luôn là nguồn cơn của tai họa.

## Hình tượng

Để dễ hình dung, có thể liên tưởng Tham Lang như một bông hoa hồng đỏ rực
như lửa — đầy tham vọng, động lực và dục vọng.`,
  },

  // ============================================================
  // 2. Tham Lang - Bộ sao tốt
  // ============================================================
  {
    id: 'tham-lang-bo-sao-tot',
    title: 'Tham Lang - Các bộ sao tốt (đặc tính chung)',
    sao: ['Tham Lang'],
    doUuTien: 50,
    tomTat: `Tham Lang có nhiều bộ sao tốt — Hỏa hoặc Linh tạo cách bạo phát,
Tả Phù Hữu Bật Khôi Việt mang quý nhân, Tam Hóa giúp chuyển hóa đam mê
thành thành tựu.`,

    chiTiet: `## Các bộ sao tốt thường gặp

Tham Lang có nhiều bộ sao tốt chủ về bạo phát, quý nhân và chuyển hóa đam mê
thành thành tựu. Các tổ hợp cụ thể được tách thành các luận giải riêng (Hỏa
Tham / Linh Tham, Tả Hữu Khôi Việt, Tam Hóa).`,
  },

  {
    id: 'tham-lang-bo-sao-tot-hoa-linh',
    title: 'Tham Lang + Hỏa Tinh / Linh Tinh đắc địa (Hỏa Tham / Linh Tham)',
    sao: ['Tham Lang'],
    ketHop: ['Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 45,
    tomTat: `Khi Tham Lang gặp Hỏa Tinh hoặc Linh Tinh đắc địa, đương số có
cách **Hỏa Tham** hoặc **Linh Tham** — chủ về bạo phát tài lộc và quyền uy,
thành công đến nhanh và mạnh. Cách này thường thấy ở võ tướng hoặc doanh
nhân lớn.`,
  },

  {
    id: 'tham-lang-bo-sao-tot-ta-huu-khoi-viet',
    title: 'Tham Lang + Tả Hữu + Khôi Việt',
    sao: ['Tham Lang'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 45,
    tomTat: `Khi Tham Lang hội đủ Tả Phù, Hữu Bật, Thiên Khôi, Thiên Việt,
đương số có quý nhân trợ lực, dễ nắm vai trò lãnh đạo, có duyên với chính
trị hoặc tâm linh.`,
  },

  {
    id: 'tham-lang-bo-sao-tot-hoa-loc',
    title: 'Tham Lang + Hóa Lộc',
    sao: ['Tham Lang'],
    ketHop: ['Hóa Lộc'],
    doUuTien: 45,
    tomTat: `Tham Lang gặp Hóa Lộc giúp đương số tăng khả năng kiếm tiền và
mở rộng giao tiếp.`,
  },

  {
    id: 'tham-lang-bo-sao-tot-hoa-quyen',
    title: 'Tham Lang + Hóa Quyền',
    sao: ['Tham Lang'],
    ketHop: ['Hóa Quyền'],
    doUuTien: 45,
    tomTat: `Tham Lang gặp Hóa Quyền mang lại uy quyền và khả năng chỉ huy cho
đương số.`,
  },

  {
    id: 'tham-lang-bo-sao-tot-hoa-khoa',
    title: 'Tham Lang + Hóa Khoa',
    sao: ['Tham Lang'],
    ketHop: ['Hóa Khoa'],
    doUuTien: 45,
    tomTat: `Tham Lang gặp Hóa Khoa giúp đương số chuyển hóa đam mê thành giá
trị học thuật hoặc nghệ thuật, được xã hội công nhận.`,
  },

  // ============================================================
  // 3. Tham Lang - Bộ sao xấu
  // ============================================================
  {
    id: 'tham-lang-bo-sao-xau',
    title: 'Tham Lang - Các bộ sao xấu (đặc tính chung)',
    sao: ['Tham Lang'],
    doUuTien: 50,
    tomTat: `Tham Lang có nhiều bộ sao kỵ: Kình Đà kích hoạt mặt tối, Không
Kiếp khiến tham vọng viển vông, Tuần và Triệt biến đổi tính chất, Hóa Kỵ
sinh tranh chấp.`,

    chiTiet: `## Kình Dương + Đà La — kích hoạt mặt tối

Khi Mệnh có Tham Lang gặp **Kình Dương** cùng **Đà La**, mặt tối của sao
được kích hoạt mạnh: đương số dễ sa đọa vì sắc, rượu và cờ bạc.

## Địa Không + Địa Kiếp — viển vông

Khi đi cùng **Địa Không** và **Địa Kiếp**, tham vọng của đương số trở nên
viển vông, cuộc đời khó thực hiện được lý tưởng và dễ rơi vào con đường lừa
đảo hoặc giang hồ.

## Tuần / Triệt — hai mặt khác nhau

Tham Lang đi cùng **Tuần** hoặc **Triệt** có khả năng tiết giảm hoặc biến
đổi tính chất của sao:

- Gặp Triệt thường giúp đương số biết kiềm chế.
- Gặp Tuần dễ sinh khoác lác, nói nhiều làm ít.

## Hóa Kỵ — ghen tuông

Khi hội cùng **Hóa Kỵ**, tính ghen tuông và đố kỵ trong đương số tăng cao;
dễ vì tình hoặc tiền mà sinh tranh chấp, oán hận.`,
  },

  {
    id: 'tham-lang-bo-sao-xau-kinh-da',
    title: 'Tham Lang + Kình Dương + Đà La',
    sao: ['Tham Lang'],
    cung: ['Mệnh'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 45,
    tomTat: `Khi Tham Lang đồng độ Kình Dương và Đà La tại Mệnh, mặt tối của
sao được kích hoạt: đương số dễ sa đọa vì sắc, rượu và cờ bạc.`,
  },

  {
    id: 'tham-lang-bo-sao-xau-khong-kiep',
    title: 'Tham Lang + Địa Không + Địa Kiếp',
    sao: ['Tham Lang'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 45,
    tomTat: `Khi Tham Lang gặp Địa Không cùng Địa Kiếp, tham vọng của đương
số trở nên viển vông, cuộc đời khó thực hiện được lý tưởng, dễ rơi vào con
đường lừa đảo hoặc giang hồ.`,
  },

  {
    id: 'tham-lang-bo-sao-xau-tuan-triet',
    title: 'Tham Lang + Tuần / Triệt',
    sao: ['Tham Lang'],
    ketHop: ['Tuần', 'Triệt'],
    doUuTien: 45,
    tomTat: `Tham Lang đi cùng Tuần hoặc Triệt có khả năng tiết giảm hoặc biến
đổi tính chất của sao.

- Gặp Triệt thường giúp đương số biết kiềm chế.
- Gặp Tuần dễ sinh khoác lác, nói nhiều làm ít.`,
  },

  {
    id: 'tham-lang-bo-sao-xau-hoa-ky',
    title: 'Tham Lang + Hóa Kỵ',
    sao: ['Tham Lang'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 45,
    tomTat: `Tham Lang gặp Hóa Kỵ làm tăng tính ghen tuông, đố kỵ; đương số
dễ vì tình hoặc tiền mà sinh tranh chấp, oán hận.`,
  },

  // ============================================================
  // 4. Tham Lang tại Mệnh - Tham vọng & bản năng
  // ============================================================
  {
    id: 'tham-lang-tai-menh-tham-vong-ban-nang',
    title: 'Tham Lang tại Mệnh - Tham vọng & bản năng',
    sao: ['Tham Lang'],
    cung: ['Mệnh'],
    doUuTien: 85,
    tomTat: `Đương số có Tham Lang tọa Mệnh thường thực tế, thông minh, khôn
ngoan; bề ngoài ung dung chậm rãi nhưng bên trong âm ỉ một ngọn lửa tham
vọng khó dập tắt.

Chủ mệnh sống thiên về cảm xúc và bản năng — khi đã hứng thú thì theo đuổi
đến cùng với đam mê mãnh liệt; phản ứng rất nhanh, hành động trước rồi mới
cân nhắc hệ quả sau.

Đương số khôn khéo, có tài ngoại giao, giỏi ăn nói và biết lấy lòng người;
sẵn sàng dùng lời mềm mỏng hay nịnh bợ để đạt mục tiêu. Tính đào hoa mạnh
khiến sức hút với người khác giới rất tự nhiên, đường tình cảm phong phú
nhưng cũng nhiều rối ren.

Một nét đáng chú ý là duyên tâm linh: Tham Lang tạo kết nối mạnh với Tử Vi,
phong thủy, tướng số — không ít chủ mệnh chọn con đường tu tập, nghiên cứu
hoặc hành nghề trong lĩnh vực huyền học.`,

    chiTiet: `## Tính cách bề ngoài và bên trong

Bề ngoài đương số tỏ ra thực tế, thông minh, khôn ngoan, ung dung chậm rãi.
Nhưng bên trong luôn tồn tại một ngọn lửa tham vọng âm ỉ, khó dập tắt.

## Sống theo bản năng

Chủ mệnh sống thiên về cảm xúc và bản năng. Khi đã nảy sinh hứng thú với
điều gì, đương số sẵn sàng theo đuổi đến cùng với đam mê và nhiệt huyết
mãnh liệt.

## Phản ứng nhanh

Khả năng phản ứng với hoàn cảnh xung quanh rất nhanh, song đương số thường
nghiêng về hành động trước rồi mới cân nhắc hệ quả sau.

## Khôn khéo và ngoại giao

Tham Lang khiến đương số trở nên khôn khéo, có tài ngoại giao, giỏi ăn nói
và biết cách lấy lòng người khác để đạt mục tiêu. Khi mang lại lợi ích thiết
thực, chủ mệnh sẵn sàng dùng cả lời lẽ mềm mỏng, nịnh bợ.

## Đào hoa

Với tính chất đào hoa mạnh, đương số thường sở hữu sức hút tự nhiên, dễ gây
thiện cảm với người khác giới. Đường tình cảm phong phú nhưng cũng nhiều
rối ren, khó tránh khỏi những mối duyên đến nhanh mà đi cũng vội.

## Duyên với tâm linh

Tham Lang còn tạo nên sự kết nối mạnh mẽ giữa đương số và các bộ môn huyền
học như Tử Vi, phong thủy, tướng số. Không ít chủ mệnh có xu hướng tu tập,
nghiên cứu tâm linh hoặc trở thành người hành nghề trong lĩnh vực này.`,
  },

  // ============================================================
  // 5. Tham Lang tại Mệnh - Sự nghiệp ("lắm tài nhiều tật")
  // ============================================================
  {
    id: 'tham-lang-tai-menh-su-nghiep',
    title: 'Tham Lang tại Mệnh - Sự nghiệp ("lắm tài nhiều tật")',
    sao: ['Tham Lang'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Sự nghiệp của đương số có Tham Lang tọa Mệnh gắn liền với cạnh
tranh, biến động và những bước ngoặt bất ngờ. Đây là mẫu mệnh **"lắm tài
nhiều tật"** — đạt thành tựu lớn nhưng cũng dễ thất bại nếu thiếu tiết chế.

Đương số dễ phát triển trong nghệ thuật, thẩm mỹ, ẩm thực, kinh doanh, thể
thao, võ thuật; khả năng tổ chức tốt nên cũng phù hợp với vai trò quản lý
hay điều hành.

Tham Lang là sao của bộc phát: gặp vận tốt, đặc biệt khi hội tụ Hỏa Tinh
hoặc Linh Tinh, chủ mệnh phát tài rất nhanh. Tuy nhiên thiếu sao ổn định
hoặc không tu dưỡng bản thân, thành công thường khó bền — dễ đến rồi cũng
dễ mất.`,

    chiTiet: `## Đặc điểm sự nghiệp

Con đường công danh của đương số có Tham Lang gắn liền với cạnh tranh, biến
động và những bước ngoặt bất ngờ. Đây là mẫu mệnh cách "lắm tài nhiều tật":
có thể đạt thành tựu lớn nhưng cũng dễ gặp thất bại nếu thiếu sự tiết chế.

## Lĩnh vực phù hợp

Đương số dễ phát triển trong các lĩnh vực:

- Nghệ thuật, thẩm mỹ, ẩm thực
- Kinh doanh, thể thao, võ thuật

Khả năng tổ chức và sắp xếp công việc khá tốt, vì vậy chủ mệnh cũng phù hợp
với vị trí quản lý hoặc điều hành.

## Sao của bộc phát

Tham Lang là sao của sự bộc phát. Khi gặp vận tốt, đặc biệt hội tụ **Hỏa
Tinh** hoặc **Linh Tinh**, đương số phát tài rất nhanh.

## Thành công khó bền

Tuy nhiên, nếu thiếu các sao ổn định hoặc không biết tu dưỡng bản thân,
thành công của đương số thường khó bền, dễ đến rồi lại dễ mất.`,
  },

  // ============================================================
  // 6. Tham Lang tại Mệnh - Hôn nhân (nhiều sóng gió)
  // ============================================================
  {
    id: 'tham-lang-tai-menh-hon-nhan',
    title: 'Tham Lang tại Mệnh - Hôn nhân (nhiều sóng gió)',
    sao: ['Tham Lang'],
    cung: ['Mệnh'],
    doUuTien: 75,
    tomTat: `Hôn nhân của đương số có Tham Lang tại Mệnh nhiều sóng gió, nhất
là ở tiền vận. Chủ mệnh trải qua nhiều mối tình, kèm theo những tổn thương
về cảm xúc.

Khi đã yêu thì yêu rất mãnh liệt, có xu hướng chiếm hữu cao và dễ phát sinh
ghen tuông.

Lời khuyên là kết hôn muộn. Người phối ngẫu phù hợp cần có cá tính mạnh, đủ
bản lĩnh để tiết chế và định hướng lại tính cách phóng túng của bản mệnh.`,

    chiTiet: `## Đặc điểm hôn nhân

Phương diện hôn nhân của đương số có Tham Lang tại Mệnh nhiều sóng gió, nhất
là ở tiền vận. Chủ mệnh thường trải qua nhiều mối tình, kèm theo không ít
tổn thương về cảm xúc.

## Khi đã yêu

Khi đã yêu, đương số yêu rất mãnh liệt, có xu hướng chiếm hữu cao và dễ phát
sinh ghen tuông.

## Lời khuyên

Để xây dựng hôn nhân bền vững, đương số nên kết hôn muộn. Người phối ngẫu
phù hợp là người có cá tính mạnh, đủ bản lĩnh để tiết chế và định hướng lại
tính cách phóng túng của bản mệnh.`,
  },

  // ============================================================
  // 7. Tham Lang tại Mệnh - Sức khỏe (thọ tinh)
  // ============================================================
  {
    id: 'tham-lang-tai-menh-suc-khoe',
    title: 'Tham Lang tại Mệnh - Sức khỏe (thọ tinh)',
    sao: ['Tham Lang'],
    cung: ['Mệnh'],
    doUuTien: 75,
    tomTat: `Tham Lang là **thọ tinh**, nên đương số tọa Mệnh thể lực tốt, sức
bền cao, ăn uống và thích nghi mạnh; ngoại hình thường trẻ lâu hơn tuổi
thật.

Tuy vậy, do khuynh hướng ham hưởng thụ, chủ mệnh cần đặc biệt lưu tâm đến
bệnh gan, thận, hệ tiêu hóa và các vấn đề phát sinh từ đời sống tình cảm
thiếu tiết chế.`,

    chiTiet: `## Tham Lang là thọ tinh

Trên lá số, Mệnh có Tham Lang thuộc thọ tinh nên đương số có thể lực tốt,
sức bền cao, khả năng ăn uống và thích nghi với môi trường khá mạnh; ngoại
hình cũng thường trẻ lâu hơn so với tuổi thật.

## Bệnh cần lưu ý

Do khuynh hướng ham hưởng thụ, đương số có Tham Lang nhập Mệnh cần đặc biệt
lưu tâm tới hệ gan, thận và tiêu hóa, cũng như các vấn đề phát sinh từ đời
sống tình cảm thiếu tiết chế.`,
  },

  // ============================================================
  // 8. Tham Lang tại Mệnh - Tài lộc
  // ============================================================
  {
    id: 'tham-lang-tai-menh-tai-loc',
    title: 'Tham Lang tại Mệnh - Tài lộc',
    sao: ['Tham Lang'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Đương số có Tham Lang tại Mệnh sở hữu tham vọng lớn cùng khả năng
kiếm tiền tốt; có duyên với tài lộc, đặc biệt ở mảng kinh doanh, đầu tư và
các ngành nghề linh hoạt.

Bản tính tiêu xài phóng khoáng, lại thích hưởng thụ, nên tiền bạc thường
"vào nhanh ra nhanh".

Muốn giàu có bền vững, chủ mệnh cần học cách quản lý tài chính, tích lũy và
kiểm soát ham muốn cá nhân.`,

    chiTiet: `## Tham vọng và khả năng kiếm tiền

Tham Lang an cung Mệnh chủ về tham vọng lớn cùng khả năng kiếm tiền. Đương
số có duyên với tài lộc, đặc biệt trong kinh doanh, đầu tư và các ngành
nghề mang tính linh hoạt cao.

## "Vào nhanh ra nhanh"

Bản tính tiêu xài phóng khoáng và thích hưởng thụ khiến tiền bạc của đương
số thường rơi vào trạng thái "vào nhanh ra nhanh".

## Lời khuyên

Muốn đạt sự giàu có bền vững, đương số có Tham Lang tại Mệnh cần học cách
quản lý tài chính, biết tích lũy và kiểm soát ham muốn cá nhân.`,
  },

  // ============================================================
  // 9. Tham Lang tại Mệnh + Tý / Ngọ
  // ============================================================
  {
    id: 'tham-lang-tai-menh-ty-ngo',
    title: 'Tham Lang tại Mệnh - Tý / Ngọ',
    sao: ['Tham Lang'],
    cung: ['Mệnh'],
    chi: ['Tý', 'Ngọ'],
    doUuTien: 88,
    tomTat: `Tham Lang an Mệnh tại Tý là **Hãm địa**, rơi vào cách **"Phiếm
Thủy Đào Hoa"**: tính đào hoa và lãng mạn rất mạnh, đương số dễ sa vào tửu
sắc, cờ bạc; cuộc đời phiêu bạt, tình duyên lận đận và khó ổn định.

Tại Ngọ, Tham Lang là **Đắc địa**, đối cung có Tử Vi, tạo cách cục thông
minh, mưu trí và tầm nhìn xa. Nếu không gặp nhiều sát tinh, chủ mệnh xây
dựng được sự nghiệp lớn và nắm quyền lực kinh tế.`,

    chiTiet: `## Tham Lang tại Tý (Hãm địa)

Khi an Mệnh tại Tý, Tham Lang rơi vào **Hãm địa** — còn gọi là cách
**"Phiếm Thủy Đào Hoa"** (đào hoa trôi nổi):

- Tính đào hoa và lãng mạn biểu hiện rất mạnh
- Đương số cũng dễ sa vào tửu sắc, cờ bạc
- Cuộc đời chủ mệnh thường phiêu bạt
- Tình duyên lận đận, khó ổn định lâu dài

## Tham Lang tại Ngọ (Đắc địa)

Tại Ngọ, Tham Lang **Đắc địa**, đối cung có **Tử Vi**, tạo nên cách cục
thông minh, mưu trí và tầm nhìn xa.

Nếu không gặp nhiều sát tinh, chủ mệnh có thể xây dựng sự nghiệp lớn và nắm
giữ quyền lực về kinh tế.`,
  },

  // ============================================================
  // 10. Tham Lang tại Mệnh + Sửu / Mùi - Vũ Tham đồng hành
  // ============================================================
  {
    id: 'tham-lang-tai-menh-suu-mui-vu-tham',
    title: 'Tham Lang tại Mệnh - Sửu / Mùi (Vũ Tham đồng hành)',
    sao: ['Tham Lang'],
    cung: ['Mệnh'],
    chi: ['Sửu', 'Mùi'],
    ketHop: ['Vũ Khúc'],
    doUuTien: 90,
    tomTat: `Tham Lang an Mệnh tại Sửu hoặc Mùi vào **Miếu địa**, đồng cung
**Vũ Khúc** tạo cách **"Vũ Tham đồng hành"**.

Đây là mệnh cách **"tiền bần hậu phú"**: tuổi trẻ vất vả nhưng trung và hậu
vận rất giàu có. Tuy nhiên, do ảnh hưởng của Vũ Khúc cô độc, cuộc sống nội
tâm của đương số thường cô đơn, ít tri kỷ.`,

    chiTiet: `## Cách "Vũ Tham đồng hành"

Sửu và Mùi là hai cung **Miếu địa** của Mệnh Tham Lang, đồng thời cũng là vị
trí đồng cung với **Vũ Khúc** — hình thành cách "Vũ Tham đồng hành".

## Mệnh cách "tiền bần hậu phú"

Đương số có cách này thường tuổi trẻ vất vả nhưng trung và hậu vận rất giàu
có.

## Cô đơn nội tâm

Tuy nhiên, do ảnh hưởng của Vũ Khúc vốn cô độc, cuộc sống nội tâm của chủ
mệnh thường cô đơn, ít tri kỷ.`,
  },

  // ============================================================
  // 11. Tham Lang tại Mệnh + Dần / Thân
  // ============================================================
  {
    id: 'tham-lang-tai-menh-dan-than',
    title: 'Tham Lang tại Mệnh - Dần / Thân (đơn thủ)',
    sao: ['Tham Lang'],
    cung: ['Mệnh'],
    chi: ['Dần', 'Thân'],
    doUuTien: 88,
    tomTat: `Tại Dần và Thân, cung Mệnh có Tham Lang đơn thủ — là vị trí khá
tốt.

Tại Dần, đương số dễ thành công sớm, thiếu niên đã có danh tiếng. Tại Thân,
cuộc đời nhiều tranh luận và thị phi; thành công đến từ sự phấn đấu bền
bỉ.`,

    chiTiet: `## Đặc điểm chung

Ở Dần và Thân, cung Mệnh có Tham Lang đơn thủ — là vị trí khá tốt.

## Tại Dần

Chủ mệnh dễ thành công sớm, thiếu niên đã có danh tiếng.

## Tại Thân

Khi giải đoán lá số, vị trí Thân tiết lộ một cuộc đời nhiều tranh luận và
thị phi; thành công đến từ sự phấn đấu bền bỉ.`,
  },

  // ============================================================
  // 12. Tham Lang tại Mệnh + Mão / Dậu - Tử Tham (Đào Hoa Phạm Chủ)
  // ============================================================
  {
    id: 'tham-lang-tai-menh-mao-dau-tu-tham',
    title: 'Tham Lang tại Mệnh - Mão / Dậu (Tử Tham, Đào Hoa Phạm Chủ)',
    sao: ['Tham Lang'],
    cung: ['Mệnh'],
    chi: ['Mão', 'Dậu'],
    ketHop: ['Tử Vi'],
    doUuTien: 90,
    tomTat: `Tham Lang Mệnh tại Mão hoặc Dậu đồng cung **Tử Vi**, tạo cách
**"Tử Tham Mão Dậu"** — còn gọi là **"Đào Hoa Phạm Chủ"**.

Đặc tính của cách này là dục vọng và ham muốn hưởng thụ rất mạnh. Khi hội
cát tinh, đương số dễ trở thành nghệ sĩ, người sáng tạo xuất chúng. Khi hội
hung tinh, chủ mệnh dễ sa đà vào cám dỗ rồi chán nản đời sống thế tục, có
xu hướng tìm đến tu hành.`,

    chiTiet: `## Cách "Tử Tham Mão Dậu" — Đào Hoa Phạm Chủ

Tham Lang tại Mão hoặc Dậu đồng cung với **Tử Vi** tạo thành cách "Tử Tham
Mão Dậu", còn được gọi là "Đào Hoa Phạm Chủ" (đào hoa phạm vào sao chủ).

## Đặc tính

Dục vọng và ham muốn hưởng thụ của đương số biểu hiện rất mạnh.

## Hội cát tinh

Chủ mệnh dễ trở thành nghệ sĩ hoặc người sáng tạo xuất chúng.

## Hội hung tinh

Đương số có nguy cơ sa đà vào cám dỗ, chán nản đời sống thế tục và có xu
hướng tìm đến tu hành.`,
  },

  // ============================================================
  // 13. Tham Lang tại Mệnh + Thìn / Tuất - Vượng địa Thiên La Địa Võng
  // ============================================================
  {
    id: 'tham-lang-tai-menh-thin-tuat',
    title: 'Tham Lang tại Mệnh - Thìn / Tuất (vượng, Thiên La Địa Võng)',
    sao: ['Tham Lang'],
    cung: ['Mệnh'],
    chi: ['Thìn', 'Tuất'],
    doUuTien: 88,
    tomTat: `Tham Lang an Mệnh tại Thìn hoặc Tuất rơi vào **Vượng địa**, thuộc
thế **"Thiên La - Địa Võng"**.

Đương số có tài kinh doanh, tham vọng lớn và thường phát đạt sau tuổi 30.
Tuy nhiên, con đường đi đến thành công phải trải qua nhiều biến cố và thử
thách.`,

    chiTiet: `## Cấu trúc

Thìn và Tuất là hai cung **Vượng địa** của Tham Lang, đồng thời thuộc thế
**"Thiên La - Địa Võng"**.

## Đặc tính

Chủ mệnh có tài kinh doanh, tham vọng lớn và thường phát đạt sau tuổi 30.

## Thử thách

Tuy vậy, con đường đi đến thành công của đương số phải trải qua nhiều biến
cố và thử thách.`,
  },

  // ============================================================
  // 14. Tham Lang tại Mệnh + Tỵ / Hợi - Liêm Tham (Hình Ngục Nan Đào)
  // ============================================================
  {
    id: 'tham-lang-tai-menh-ty-hoi-liem-tham',
    title: 'Tham Lang tại Mệnh - Tỵ / Hợi (Liêm Tham, Hình Ngục Nan Đào)',
    sao: ['Tham Lang'],
    cung: ['Mệnh'],
    chi: ['Tỵ', 'Hợi'],
    ketHop: ['Liêm Trinh'],
    doUuTien: 88,
    tomTat: `Tham Lang an Mệnh tại Tỵ hoặc Hợi rơi vào **Hãm địa**, đồng cung
**Liêm Trinh** tạo cách **"Liêm Tham Tỵ Hợi"** — còn gọi **"Hình Ngục Nan
Đào"** (khó thoát ngục hình).

Đương số tính liều lĩnh, dễ vướng vào tình ái phức tạp và những rắc rối
pháp luật. Cứu cánh là khi có cát tinh hóa giải.`,

    chiTiet: `## Cách "Liêm Tham Tỵ Hợi"

Mệnh Tham Lang ở Tỵ hoặc Hợi là vị trí **Hãm địa**, đồng cung với **Liêm
Trinh** tạo thành cách "Liêm Tham Tỵ Hợi" — còn gọi là "Hình ngục nan đào"
(khó thoát ngục hình).

## Tính cách

Đương số liều lĩnh, dễ vướng vào tình ái phức tạp cùng các rắc rối pháp
luật.

## Cứu cánh

Khi có cát tinh hóa giải, các tai họa nói trên mới được giảm nhẹ.`,
  },

  // ============================================================
  // 15. Tham Lang tại Quan Lộc
  // ============================================================
  {
    id: 'tham-lang-tai-quan-loc',
    title: 'Tham Lang tại Quan Lộc',
    sao: ['Tham Lang'],
    cung: ['Quan Lộc'],
    doUuTien: 80,
    tomTat: `Tham Lang thủ Quan Lộc khiến sự nghiệp đương số liên quan đến
giải trí, vui chơi hoặc nghệ thuật. Chủ mệnh thường làm giàu nhờ khả năng
xã giao và dễ thịnh vượng trong mua bán.

Khi sao đắc địa, đương số thích hợp với những nghề mang tính khai sáng hoặc
kinh doanh có phong cách đặc biệt, dễ đi đến thành công.`,

    chiTiet: `## Đặc điểm chung

Tham Lang thủ cung Quan chủ về sự nghiệp liên quan tới giải trí, vui chơi
hoặc mang tính nghệ thuật. Đương số thường làm giàu nhờ khả năng xã giao và
dễ thịnh vượng trong việc mua bán.

## Đắc địa

Khi sao đắc địa, chủ mệnh thích hợp với những nghề có tính khai sáng hoặc
phong cách kinh doanh đặc biệt — nhờ vậy mà dễ đi đến thành công.`,
  },

  {
    id: 'tham-lang-tai-quan-loc-dao-hoa',
    title: 'Tham Lang + sao đào hoa (Tam Minh) tại Quan Lộc',
    sao: ['Tham Lang'],
    cung: ['Quan Lộc'],
    ketHop: ['Đào Hoa', 'Hồng Loan', 'Thiên Hỷ'],
    doUuTien: 75,
    tomTat: `Khi Tham Lang gặp sao đào hoa (Đào Hoa, Hồng Loan, Thiên Hỷ) tại
Quan Lộc, nghề nghiệp của đương số thường liên quan đến người khác giới
hoặc lĩnh vực tiêu dùng, trang điểm.`,
  },

  // ============================================================
  // 16. Tham Lang tại Tài Bạch
  // ============================================================
  {
    id: 'tham-lang-tai-tai-bach',
    title: 'Tham Lang tại Tài Bạch',
    sao: ['Tham Lang'],
    cung: ['Tài Bạch'],
    doUuTien: 78,
    tomTat: `Tham Lang ở Tài Bạch khiến đương số phóng khoáng, rộng rãi nhưng
vẫn biết tính toán và kiếm tiền giỏi. Tuy vậy, chủ mệnh không giỏi giữ
tiền, thiên về khuynh hướng "lấy công làm thủ".`,

    chiTiet: `## Tính cách tài chính

Tham Lang ở cung Tài chủ về người phóng khoáng, rộng rãi nhưng vẫn biết
cách tính toán và kiếm tiền giỏi.

Tuy nhiên, đương số không giỏi giữ tiền — thiên về khuynh hướng "lấy công
làm thủ".

Diễn giải theo trạng thái và bộ kết hợp được tách thành luận giải riêng.`,
  },

  {
    id: 'tham-lang-tai-tai-bach-dac-mieu-vuong',
    title: 'Tham Lang Đắc / Miếu / Vượng tại Tài Bạch',
    sao: ['Tham Lang'],
    cung: ['Tài Bạch'],
    trangThai: ['Đắc', 'Miếu', 'Vượng'],
    doUuTien: 80,
    tomTat: `Khi Tham Lang ở **Đắc**, **Miếu** hoặc **Vượng** tại Tài Bạch,
đương số dễ kiếm tiền, nhanh phát đạt; phù hợp với các nghề buôn bán, kinh
doanh và trở nên giàu có.`,
  },

  {
    id: 'tham-lang-tai-tai-bach-hoa-ky',
    title: 'Tham Lang Hóa Kỵ tại Tài Bạch',
    sao: ['Tham Lang'],
    cung: ['Tài Bạch'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 75,
    tomTat: `Khi Tham Lang gặp Hóa Kỵ tại Tài Bạch, đương số kiếm tiền dễ
vướng thị phi và tranh chấp tiền bạc.`,
  },

  {
    id: 'tham-lang-tai-tai-bach-liem-trinh',
    title: 'Tham Lang tại Tài Bạch + Liêm Trinh',
    sao: ['Tham Lang'],
    cung: ['Tài Bạch'],
    ketHop: ['Liêm Trinh'],
    doUuTien: 75,
    tomTat: `Khi Tham Lang đi cùng Liêm Trinh tại Tài Bạch, đương số phải vất
vả trong vấn đề tài chính.`,
  },

  // ============================================================
  // 17. Tham Lang tại Phụ Mẫu
  // ============================================================
  {
    id: 'tham-lang-tai-phu-mau',
    title: 'Tham Lang tại Phụ Mẫu (đặc tính chung)',
    sao: ['Tham Lang'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Tham Lang tại Phụ Mẫu cho thấy đặc tính cha mẹ thay đổi theo
trạng thái và bộ kết hợp đi kèm.`,

    chiTiet: `## Tổng quan

Tham Lang tại Phụ Mẫu chủ về cha mẹ — biểu hiện thay đổi theo trạng thái và
bộ kết hợp.

Diễn giải theo trạng thái và bộ kết hợp được tách thành luận giải riêng.`,
  },

  {
    id: 'tham-lang-tai-phu-mau-mieu-vuong',
    title: 'Tham Lang Miếu / Vượng tại Phụ Mẫu',
    sao: ['Tham Lang'],
    cung: ['Phụ Mẫu'],
    trangThai: ['Miếu', 'Vượng'],
    doUuTien: 78,
    tomTat: `Khi Tham Lang ở **Miếu** hoặc **Vượng** tại Phụ Mẫu, cha mẹ của
đương số sống thọ, sức khỏe tốt.`,
  },

  {
    id: 'tham-lang-tai-phu-mau-ham',
    title: 'Tham Lang Hãm tại Phụ Mẫu',
    sao: ['Tham Lang'],
    cung: ['Phụ Mẫu'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi Tham Lang ở **Hãm** tại Phụ Mẫu, hôn nhân của cha mẹ đương số
không bền chặt, dễ ly biệt.`,
  },

  {
    id: 'tham-lang-tai-phu-mau-linh-hoa-khong-kiep',
    title: 'Tham Lang tại Phụ Mẫu + Linh Tinh + Hỏa Tinh + Không Kiếp (đắc)',
    sao: ['Tham Lang'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Linh Tinh', 'Hỏa Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Khi Tham Lang tại Phụ Mẫu hội đủ Linh Tinh, Hỏa Tinh, Địa Không,
Địa Kiếp ở vị trí Đắc địa, cha mẹ của đương số giàu có và an nhàn.`,
  },

  // ============================================================
  // 18. Tham Lang tại Phu Thê
  // ============================================================
  {
    id: 'tham-lang-tai-phu-the',
    title: 'Tham Lang tại Phu Thê',
    sao: ['Tham Lang'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `Tham Lang tại Phu Thê khiến đặc tính hôn nhân thay đổi theo trạng
thái và giới tính.

Tổng quát, nếu đương số ly hôn rồi tái hôn sẽ càng bất lợi.`,

    chiTiet: `## Tổng quan

Tham Lang tại Phu Thê chủ về hôn nhân — diễn giải theo trạng thái và giới
tính được tách thành luận giải riêng.

## Tái hôn

Trong mọi trường hợp, nếu đương số ly hôn rồi tái hôn sẽ càng bất lợi.`,
  },

  {
    id: 'tham-lang-tai-phu-the-vuong',
    title: 'Tham Lang Vượng tại Phu Thê',
    sao: ['Tham Lang'],
    cung: ['Phu Thê'],
    trangThai: ['Vượng'],
    doUuTien: 80,
    tomTat: `Khi Tham Lang ở **Vượng** tại Phu Thê, yếu tố đào hoa giảm nhẹ:
vợ chồng đương số tài giỏi, hôn nhân hạnh phúc. Dù có sát tinh, sóng gió
cũng chỉ ở giai đoạn trước hôn nhân. Đương số nên kết hôn muộn.`,
  },

  {
    id: 'tham-lang-tai-phu-the-ham-nam',
    title: 'Tham Lang Hãm tại Phu Thê - Nam mệnh',
    sao: ['Tham Lang'],
    cung: ['Phu Thê'],
    trangThai: ['Hãm'],
    gioiTinh: 'Nam',
    doUuTien: 78,
    tomTat: `Khi nam mệnh có Tham Lang **Hãm** tại Phu Thê, đương số nên lấy
vợ lớn tuổi hơn mình.`,
  },

  {
    id: 'tham-lang-tai-phu-the-ham-nu',
    title: 'Tham Lang Hãm tại Phu Thê - Nữ mệnh',
    sao: ['Tham Lang'],
    cung: ['Phu Thê'],
    trangThai: ['Hãm'],
    gioiTinh: 'Nữ',
    doUuTien: 78,
    tomTat: `Khi nữ mệnh có Tham Lang **Hãm** tại Phu Thê, đương số cần lấy
chồng xứng đôi mới tránh được sự cố.`,
  },

  // ============================================================
  // 19. Tham Lang tại Tử Tức
  // ============================================================
  {
    id: 'tham-lang-tai-tu-tuc',
    title: 'Tham Lang tại Tử Tức (đặc tính chung)',
    sao: ['Tham Lang'],
    cung: ['Tử Tức'],
    doUuTien: 80,
    tomTat: `Tham Lang tại Tử Tức khiến quan hệ cha con phụ thuộc lớn vào các
sao đi kèm: gặp cát tinh thì hòa hợp, gặp sát hoặc kỵ thì bất hòa.`,

    chiTiet: `## Gặp cát tinh

Khi đi cùng cát tinh, Tham Lang tại Tử Tức chủ về cha con hòa hợp; con cái
đương số tài hoa, ngoan ngoãn.

## Gặp sao sát hoặc sao kỵ

Khi gặp sát tinh hoặc Hóa Kỵ, cha con bất hòa, con cái xa cha mẹ và hay ham
vui, khiến cuộc đời gian truân, vất vả.`,
  },

  {
    id: 'tham-lang-tai-tu-tuc-cat-tinh',
    title: 'Tham Lang tại Tử Tức + Cát tinh',
    sao: ['Tham Lang'],
    cung: ['Tử Tức'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 70,
    tomTat: `Khi Tham Lang tại Tử Tức hội cát tinh, cha con đương số hòa hợp;
con cái tài hoa, ngoan ngoãn.`,
  },

  {
    id: 'tham-lang-tai-tu-tuc-sat-ky',
    title: 'Tham Lang tại Tử Tức + Sát / Kỵ',
    sao: ['Tham Lang'],
    cung: ['Tử Tức'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `Khi Tham Lang tại Tử Tức gặp sát tinh hoặc Hóa Kỵ, cha con bất
hòa, con cái xa cha mẹ và hay ham vui, khiến cuộc đời gian truân, vất vả.`,
  },

  // ============================================================
  // 20. Tham Lang tại Điền Trạch
  // ============================================================
  {
    id: 'tham-lang-tai-dien-trach',
    title: 'Tham Lang tại Điền Trạch',
    sao: ['Tham Lang'],
    cung: ['Điền Trạch'],
    doUuTien: 80,
    tomTat: `Khi Tham Lang nhập **Miếu** tại Điền Trạch, đương số được thừa
kế tổ nghiệp gia đình để lại.

Tuy nhiên, ở cung Điền Trạch, Tham Lang khuyên chủ mệnh nên tự mình gây
dựng sự nghiệp thì mới được lâu dài.`,

    chiTiet: `## Tham Lang nhập Miếu

Khi nhập Miếu, Tham Lang tại Điền Trạch chủ về việc đương số được thừa kế tổ
nghiệp gia đình để lại.

## Khi có Hỏa Tinh hoặc Linh Tinh đồng độ

Khi đồng độ với Hỏa Tinh hoặc Linh Tinh, đương số có thể tự bản thân mở rộng
tài sản, mua bất động sản.

## Lời khuyên

Tuy nhiên, cung Điền Trạch có Tham Lang khuyên đương số nên tự mình gây
dựng sự nghiệp thì mới được lâu dài.`,
  },

  {
    id: 'tham-lang-tai-dien-trach-hoa-linh',
    title: 'Tham Lang tại Điền Trạch + Hỏa Tinh/Linh Tinh - Mở rộng bất động sản',
    sao: ['Tham Lang'],
    cung: ['Điền Trạch'],
    ketHop: ['Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 75,
    tomTat: `Khi Tham Lang đồng độ Hỏa Tinh hoặc Linh Tinh tại Điền Trạch,
đương số tự bản thân có thể mở rộng tài sản và mua bất động sản.`,
  },

  // ============================================================
  // 21. Tham Lang tại Phúc Đức
  // ============================================================
  {
    id: 'tham-lang-tai-phuc-duc',
    title: 'Tham Lang tại Phúc Đức',
    sao: ['Tham Lang'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `Tham Lang tại Phúc Đức giúp phát huy ưu điểm của sao và đem lại
nhiều may mắn cho đương số.`,

    chiTiet: `## Đặc điểm chung

Tham Lang chủ cung Phúc Đức sẽ phát huy những ưu điểm của sao và đem lại
nhiều may mắn cho đương số.

Diễn giải theo trạng thái và bộ kết hợp được tách thành luận giải riêng.`,
  },

  {
    id: 'tham-lang-tai-phuc-duc-vu-khuc',
    title: 'Tham Lang tại Phúc Đức + Vũ Khúc',
    sao: ['Tham Lang'],
    cung: ['Phúc Đức'],
    ketHop: ['Vũ Khúc'],
    doUuTien: 75,
    tomTat: `Khi Tham Lang đồng hợp Vũ Khúc tại Phúc Đức, họ hàng đương số
nhiều người giàu nhờ buôn bán, phúc lộc đầy đủ.`,
  },

  {
    id: 'tham-lang-tai-phuc-duc-vuong-vu-khuc',
    title: 'Tham Lang Vượng tại Phúc Đức + Vũ Khúc',
    sao: ['Tham Lang'],
    cung: ['Phúc Đức'],
    trangThai: ['Vượng'],
    ketHop: ['Vũ Khúc'],
    doUuTien: 80,
    tomTat: `Khi Tham Lang **Vượng** tại Phúc Đức đi cùng Vũ Khúc, đương số
được hưởng phúc thọ, có hậu vận; họ hàng cũng được vinh hoa phú quý.`,
  },

  {
    id: 'tham-lang-tai-phuc-duc-ham-dao-hong',
    title: 'Tham Lang Hãm tại Phúc Đức + Đào Hồng',
    sao: ['Tham Lang'],
    cung: ['Phúc Đức'],
    trangThai: ['Hãm'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 78,
    tomTat: `Khi Tham Lang **Hãm** tại Phúc Đức đi cùng Đào Hoa, Hồng Loan,
cuộc đời đương số phong lưu; khí chất và tài nghệ khiến người khác giới
chao đảo.`,
  },

  // ============================================================
  // 22. Tham Lang tại Nô Bộc
  // ============================================================
  {
    id: 'tham-lang-tai-no-boc',
    title: 'Tham Lang tại Nô Bộc',
    sao: ['Tham Lang'],
    cung: ['Nô Bộc'],
    doUuTien: 80,
    tomTat: `Tham Lang tại Nô Bộc cho thấy đương số có nhiều bạn bè và nhiều
mối quan hệ xã giao.

Khi không có sao tốt đi kèm, người dưới quyền của đương số không nhờ cậy
được, dễ có lòng xâm phạm lợi ích bản thân chủ mệnh.`,

    chiTiet: `## Đặc điểm chung

Tại cung Nô, Tham Lang chủ về việc đương số có nhiều bạn bè cùng nhiều mối
quan hệ xã giao.

## Không có sao tốt

Khi không có sao tốt đi kèm, người dưới quyền của đương số không nhờ cậy
được, lại dễ có lòng xâm phạm lợi ích của bản thân chủ mệnh.`,
  },

  {
    id: 'tham-lang-tai-no-boc-luc-cat',
    title: 'Tham Lang tại Nô Bộc + Lục Cát - Trợ lực người tài giỏi',
    sao: ['Tham Lang'],
    cung: ['Nô Bộc'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 75,
    tomTat: `Khi Tham Lang tại Nô Bộc hội đủ Lục Cát (Tả Phù, Hữu Bật, Văn
Xương, Văn Khúc, Thiên Khôi, Thiên Việt), đương số được trợ lực từ những
người tài giỏi.`,
  },

  // ============================================================
  // 23. Tham Lang tại Thiên Di
  // ============================================================
  {
    id: 'tham-lang-tai-thien-di',
    title: 'Tham Lang tại Thiên Di',
    sao: ['Tham Lang'],
    cung: ['Thiên Di'],
    doUuTien: 80,
    tomTat: `Khi Tham Lang tại Thiên Di vào Vượng địa, đương số được người
dìu dắt, được hỗ trợ và có cơ hội phát triển.`,

    chiTiet: `## Vượng địa

Tham Lang tại Thiên Di vào Vượng địa chủ về việc đương số được người dìu
dắt, được hỗ trợ và có cơ hội phát triển.`,
  },

  {
    id: 'tham-lang-tai-thien-di-hoa-linh',
    title: 'Tham Lang tại Thiên Di + Hỏa Tinh/Linh Tinh - Giàu có',
    sao: ['Tham Lang'],
    cung: ['Thiên Di'],
    ketHop: ['Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 75,
    tomTat: `Khi Tham Lang đồng độ Hỏa Tinh hoặc Linh Tinh tại Thiên Di, đường
thiên di có thể giúp đương số trở nên giàu có.`,
  },

  // ============================================================
  // 24. Tham Lang tại Huynh Đệ
  // ============================================================
  {
    id: 'tham-lang-tai-huynh-de',
    title: 'Tham Lang tại Huynh Đệ',
    sao: ['Tham Lang'],
    cung: ['Huynh Đệ'],
    doUuTien: 80,
    tomTat: `Tham Lang tại Huynh Đệ cho thấy anh em đương số hòa hợp, giao du
rộng và đông đảo.`,

    chiTiet: `## Đặc điểm chung

Tham Lang ở cung Huynh Đệ đều chủ về việc anh em đương số hòa hợp, giao du
rộng rãi và đông đảo.`,
  },

  {
    id: 'tham-lang-tai-huynh-de-dao-hoa',
    title: 'Tham Lang tại Huynh Đệ + Đào Hoa - Chị em vất vả tình duyên',
    sao: ['Tham Lang'],
    cung: ['Huynh Đệ'],
    ketHop: ['Đào Hoa'],
    doUuTien: 75,
    tomTat: `Khi Tham Lang đồng hội Đào Hoa tại Huynh Đệ, chị em gái của đương
số dễ vất vả về đường tình duyên.`,
  },

  // ============================================================
  // 25. Tham Lang tại Tật Ách
  // ============================================================
  {
    id: 'tham-lang-tai-tat-ach',
    title: 'Tham Lang tại Tật Ách',
    sao: ['Tham Lang'],
    cung: ['Tật Ách'],
    doUuTien: 80,
    tomTat: `Tham Lang thuộc Dương Mộc nhưng còn mang tính Thủy, nên tại Tật
Ách chủ về bệnh gan, thận và bệnh sinh dục.

Diễn giải theo trạng thái được tách thành luận giải riêng.`,

    chiTiet: `## Bệnh chính

Tham Lang thuộc Dương Mộc, đồng thời còn mang tính Thủy, nên tại Tật Ách chủ
về các chứng bệnh:

- Bệnh gan
- Bệnh thận
- Hoặc bệnh sinh dục

Diễn giải theo trạng thái được tách thành luận giải riêng.`,
  },

  {
    id: 'tham-lang-tai-tat-ach-mieu-vuong',
    title: 'Tham Lang Miếu / Vượng tại Tật Ách',
    sao: ['Tham Lang'],
    cung: ['Tật Ách'],
    trangThai: ['Miếu', 'Vượng'],
    doUuTien: 75,
    tomTat: `Khi Tham Lang ở **Miếu** hoặc **Vượng** tại Tật Ách, sao có thể
giảm bớt tai họa và bệnh tật cho đương số.`,
  },
];
