import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO CỰ MÔN
 */
export const luanGiai_CuMon: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung của sao Cự Môn (hiện ở mọi cung có Cự Môn)
  // ============================================================
  {
    id: 'cu-mon-tinh-chat-chung',
    title: 'Cự Môn - Đặc tính chung',
    sao: ['Cự Môn'],
    doUuTien: 30,
    tomTat: `Cự Môn thuộc chòm Bắc Đẩu Tinh, ngũ hành Thủy, tính Âm. Hóa khí là
sao Thị Phi, mang tính "chảy ngầm" — thường đem nhiều phiền toái và thị phi
đến cho đương số có sao này tọa thủ ở các cung trọng yếu.

Vị trí miếu hãm:

- Miếu địa
  - Mão, Dậu (đồng cung Thiên Cơ) — tốt nhất
- Vượng địa
  - Các cung còn lại
- Đắc địa
  - Tý, Ngọ, Hợi
- Hãm địa
  - Thìn, Tuất, Sửu, Mùi — xấu nhất`,

    chiTiet: `So sánh Cự Môn với các sao có nét tương đồng:

- Cự Môn so với Tham Lang và Thiên Cơ — cả ba đều hướng ngoại nhưng:
  - Tham Lang: đa tài đa nghệ, giao tiếp thiên về lãng mạn (tửu, sắc, tài, khí)
  - Thiên Cơ: giao tiếp thiên về liên lạc, vì người mà bôn tẩu vất vả
  - Cự Môn: dùng miệng là chính, thiên về diễn giảng biện thuyết đúng sai

- Cự Môn so với Văn Khúc — cùng thiên về tài biện luận nhưng:
  - Văn Khúc: kỹ xảo biện luận, chú trọng tu từ, mang hàm nghĩa "tài" và "đào hoa"
  - Cự Môn: chú trọng thực tế, gồm phân tích và liên tưởng, tài khí tương đối ít

Khí hóa của Cự Môn là Ám — trong bóng tối vẫn thấy được ánh sáng bên ngoài.
Đương số có Cự Môn nhờ vậy mà quan sát sự vật thấu đáo hơn người thường.`,
  },

  // ============================================================
  // 2. Cự Môn tại Mệnh - dung mạo & tính cách
  // ============================================================
  {
    id: 'cu-mon-tai-menh-dung-mao-tinh-cach',
    title: 'Cự Môn tại Mệnh - Dung mạo & tính cách',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Đương số có Cự Môn tọa thủ Mệnh thường mang dáng vẻ:

- Ánh mắt nhìn đoan chính, vẻ mặt nghiêm túc
- Giọng nói cao thanh, hành động nhanh nhẹn

Về tính cách:

- Ngay thẳng bộc trực, đa nghi, học nhiều nhưng ít tinh thông
- Giàu khả năng nghiên cứu, hiểu biết rộng, biện luận sắc sảo
- Lấy công việc làm mục đích hàng đầu, ít thiên về thú vui

Dung mạo cụ thể tùy trạng thái — xem các entry chuyên biệt theo Miếu / Hãm.`,

    chiTiet: `Đương số có Cự Môn tại Mệnh thường có khuôn mặt thánh thiện khả
ái, cũng có thể là vẻ mặt hiền lành ít nói. Lục thân thiếu hòa hợp; chủ mệnh
chủ quan và tự tin, thường tỏ thái độ bất mãn với hiện tại nên thích gây
chuyện thị phi — lúc thiện lúc ác thường không biểu hiện ra ngoài.

Trong công việc và học hành:

- Học nhiều nhưng ít tinh thông
- Phong cách làm việc thường tỏ ra khó khăn vất vả, khó có sự thanh nhàn

Trong quan hệ và tâm lý:

- Tính tình đa nghi, kết bạn ban đầu thì tốt nhưng cuối cùng lại ác
- Tư duy lãnh đạm, trong lòng nhỏ nhen, hiếm khi rộng lượng
- Làm việc lớn thường quá chú trọng tới hình thức mà bỏ qua khả năng phân
  tích, quan sát, phán đoán, ghi nhớ và liên tưởng

Tuy vậy, đương số giàu khả năng nghiên cứu nên thường có tầm hiểu biết rộng,
có sáng kiến. Dù không thiên về giao tiếp, khả năng biểu đạt rất tốt và biện
luận sắc sảo. Có xu hướng sống cuộc đời thanh bạch, lấy công việc làm mục
đích hàng đầu.`,
  },

  {
    id: 'cu-mon-tai-menh-mieu',
    title: 'Cự Môn Miếu tại Mệnh - Dung mạo',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    trangThai: ['Miếu'],
    doUuTien: 78,
    tomTat: `Khi Cự Môn Miếu địa tại Mệnh, đương số có cơ thể cao đậm, vẻ
ngoài phúc hậu lương thiện.`,
  },

  {
    id: 'cu-mon-tai-menh-ham-dung-mao',
    title: 'Cự Môn Hãm tại Mệnh - Dung mạo',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi Cự Môn Hãm địa tại Mệnh, đương số có thân thể cao gầy.`,
  },

  // ============================================================
  // 3. Cự Môn tại Mệnh - 12 biểu hiện đặc trưng
  // ============================================================
  {
    id: 'cu-mon-tai-menh-12-bieu-hien',
    title: 'Cự Môn tại Mệnh - 12 biểu hiện',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    doUuTien: 70,
    tomTat: `Cự Môn ở Mệnh thường có 12 biểu hiện đặc trưng — bao gồm khả năng
tháo gỡ khó khăn, khoan dung độ lượng, có tài ăn nói, biết hy vọng vào tương lai,
nhưng cũng dễ rơi vào ảo tưởng và bị hiểu lầm. **Bấm "Đọc chi tiết"** để xem đầy đủ.`,

    chiTiet: `## 12 biểu hiện cụ thể

1. Bất luận ở hoàn cảnh khó khăn nào, phần lớn đều có thể tháo gỡ được trở ngại
   khó khăn bước đầu, biết hy vọng vào tương lai.

2. Khoan dung độ lượng, biết khoan dung hơn nữa còn hiểu đạo lý.

3. Có khả năng hội nhập được cuộc sống đa dạng muôn màu, biểu hiện cụ thể bằng
   ngôn ngữ và hành động, dễ được mọi người chấp nhận và hoan nghênh.

4. Có thể hiểu được sự việc và truyền đạt thông tin, hóa giải khúc mắc.

5. Nằm giữa ranh giới thị phi và chính trực, nhưng không bị mất đi bản tính
   lương thiện, mà còn giữ được đạo trung dung.

6. Có chuyện thầm kín trong lòng không thể bày tỏ với người khác, hoặc là dấu
   đầu hở đuôi.

7. Thường rơi vào ảo tưởng mà tự chuốc lấy phiền muộn, thậm chí còn tự hủy hoại
   mình.

8. Nhàn rỗi, càng nói càng sai, **thường khổ tại miệng**, bị người khác hiểu lầm
   oán trách.

9. Trước khi được xã hội công nhận, phải trải qua nhiều vất vả, chỉ cần giữ vững
   ý chí, cuối cùng cũng thành công.

10. Mạnh bạo hơn người, thường làm những chuyện mà mọi người không ngờ tới, hoặc
    những việc không được mọi người tán thành, khiến mọi người bàn tán.

11. Cơ hội sử dụng ngôn ngữ hơn người, cũng thường vận dụng tài ăn nói của mình
    mà đạt được lợi ích.

12. Cuộc đời có nhiều cơ hội phải đấu tranh.`,
  },

  // ============================================================
  // 4. Cự Môn tại Mệnh - phụ nữ
  // ============================================================
  {
    id: 'cu-mon-tai-menh-phu-nu',
    title: 'Cự Môn tại Mệnh - Phụ nữ',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    gioiTinh: 'Nữ',
    doUuTien: 75,
    tomTat: `**Phụ nữ có Cự Môn cư Mệnh:** thường có lòng tự tôn cao, bụng thẳng
dạ ngay, sức sống mạnh mẽ, đa nghi. Khi can thiệp công việc của chồng thường
thiếu thận trọng trong ngôn ngữ → dễ tổn thương bầu không khí gia đình. Tuy
nhiên rất chăm chỉ, đảm nhiệm tốt cả công việc và gia đình.

⚠️ **Sao Cự Môn không nên xuất hiện trong Mệnh nữ giới** — câu "ngôn đa tất thất"
áp dụng đặc biệt cho phụ nữ Cự Môn.`,

    chiTiet: `Phụ nữ cung Mệnh có sao Cự Môn thường có lòng tự tôn rất cao, bụng
thẳng dạ ngay, sức sống mạnh mẽ, đa nghi. Thường hay tự so bì với người khác mà
tự chuốc lấy phiền muộn trong lòng.

Khi can thiệp vào chuyện gia đình hay công việc của chồng, thường thiếu thận
trọng trong ngôn ngữ — lời nói phản cảm thường gây tổn thương bầu không khí
hạnh phúc, ấm cúng.

Mặt tích cực: làm việc chăm chỉ cần mẫn, xử lý mọi việc trong gia đình chu đáo,
công việc và gia đình đều đảm nhiệm tốt.`,
  },

  // ============================================================
  // 5. Cự Môn tại Mệnh - nghề nghiệp & "miệng"
  // ============================================================
  {
    id: 'cu-mon-tai-menh-nghe-nghiep',
    title: 'Cự Môn tại Mệnh - Nghề nghiệp',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    doUuTien: 70,
    tomTat: `Cự Môn tượng trưng cho **"miệng"** — phù hợp những nghề dùng miệng
là chính: **giáo sư, quan tòa, luật sư, nhà ngoại giao, người dẫn chương trình,
nhân viên kinh doanh, ca sỹ, diễn viên, nghề dịch vụ, người làm PR**.

Khuyên: nên học và tinh thông ngoại ngữ. Cuối đời thường nhận được sự chăm sóc
của con cháu.`,

    chiTiet: `Cự Môn không thể tách rời khỏi "miệng" — có "khẩu phúc", giỏi quan
hệ công chúng, phần nhiều là những người gây dựng sự nghiệp bằng lời nói.

**Lời khuyên nghề nghiệp:** nên theo những nghề dùng miệng, nên học và tinh
thông nhiều ngoại ngữ. Khi đi theo phương thức chính phái, bản tính "thị phi"
dễ bị "phê bình" sẽ chuyển sang xu hướng **"giám sát đúng sai"**, **"đánh giá
sự hoàn thiện"** — phát huy khả năng phân tích thực tiễn của Cự Môn.

**Về "thị phi":** không phải có ý gây chuyện thị phi. Người Cự Môn có khả năng
phân tích rất tốt, rõ ràng nên dễ "thị phi". Cố gắng không nên gây chuyện thị
phi, nhưng cũng khó tránh khỏi.

**Cuối đời:** người Cự Môn thủ Mệnh phần lớn đều nhận được sự chăm sóc của con
cháu.`,
  },

  // ============================================================
  // 6. Cự Môn kết hợp các sao khác (Tứ Hóa, sát tinh)
  // ============================================================
  {
    id: 'cu-mon-ket-hop-tu-hoa-sat-tinh',
    title: 'Cự Môn + Tứ Hóa & sát tinh',
    sao: ['Cự Môn'],
    doUuTien: 50,
    tomTat: `**Cự Môn + Tam Cát Hóa (Lộc/Quyền/Khoa)** = bổng lộc dồi dào, tài
diễn thuyết được trọng dụng. **Hay nhất là Hóa Quyền** miếu vượng → làm quan lớn,
trách nhiệm ngoại giao.

⚠️ **Cự Môn kỵ:**
- **Hóa Kỵ:** ngôn từ sắc bén, nói khó nghe → dễ đắc tội với người
- **Kình Dương + Đà La:** chuyện tình cảm sóng gió, thị phi
- **Hỏa Tinh + Linh Tinh:** tăng phần khó khăn
- **Địa Không + Địa Kiếp** đồng cung Mệnh: một đời vất vả, thậm chí thời thơ
  ấu bị bỏ rơi`,

    chiTiet: `## Cự Môn + Lộc Tồn

Cự Môn là sao đơn độc, **duy có Lộc Tồn mới có thể hóa giải**. Cự Môn thâm nhập
vào các cung Lục thân, chủ về phần lớn người đó bạc duyên với lục thân; nếu
không kết hợp với Lộc Tồn hoặc đồng cung Hóa Lộc → tâm thần thường bất an, hoặc
có hiện tượng cô đơn.

## Cự Môn + Tứ Hóa

Cự Môn được tam cát Hóa Lộc/Quyền/Khoa → bổng lộc dồi dào, tài diễn thuyết hùng
biện được trọng dụng. Tính chất khác biệt:

- **Hóa Lộc:** mang cảm tính, hiền lành không cưỡng bức, quan sát tình cảnh nói chuyện.
- **Hóa Quyền:** giảng lý mang tính quyền uy, trật tự rõ ràng, tăng trọng lượng
  lời nói, tăng lòng tin và độ tin cậy → giảm bớt thị phi.
- **Hóa Khoa:** lời nói nho nhã, mang phong thái quân tử.

**Cự Môn thích nhất Hóa Quyền:** miếu vượng + lục cát tinh → làm quan lớn, trách
nhiệm ngoại giao. Không miếu vượng vẫn gánh trọng trách.

**Cự Môn miếu vượng + Hóa Lộc + cát tinh hội chiếu:** sự nghiệp thấy rõ. Nếu
Hóa Lộc gặp **Hồng Loan, Thiên Hỷ, Văn Xương, Văn Khúc, Hàm Trì** → phát triển
văn hóa nghệ thuật, biểu diễn giải trí, phần nhiều thành danh.

**Cự Môn không thích Hóa Kỵ:** ngôn từ sắc bén, nói khó nghe, dễ đắc tội. Nếu
Hóa Kỵ + Sát tinh → chú ý thị phi nơi quan trường.

## Cự Môn + Sát tinh

- **Kình Dương + Đà La:** kỵ nhất, chuyện tình cảm sóng gió, thị phi nhiều.
- **Hỏa Tinh + Linh Tinh:** tăng phần khó khăn.
- **Địa Không + Địa Kiếp** đồng cung Mệnh: một đời vất vả, thậm chí thời thơ
  ấu bị bỏ rơi.`,
  },

  // ============================================================
  // 7. Cự Môn ở Phụ Mẫu
  // ============================================================
  {
    id: 'cu-mon-tai-phu-mau',
    title: 'Cự Môn tại Phụ Mẫu',
    sao: ['Cự Môn'],
    cung: ['Phụ Mẫu'],
    doUuTien: 80,
    tomTat: `**Cự Môn tại Phụ Mẫu** chủ về mối quan hệ cha mẹ - con cái không tốt,
nhiều biến động, mâu thuẫn. Đây là sao **không tốt** ở cung này.`,
    chiTiet: `## Quan hệ cha mẹ - con cái

Mối quan hệ cha mẹ con cái không được tốt.

**Khi có Thiên Cơ đồng cung:** số nên làm con nuôi người khác hoặc bái thêm cha
mẹ để tránh sự hình khắc phân ly. Lúc này cha mẹ gặp nhiều bất lợi, làm ăn lụi
bại, tài sản gia sản của tổ tiên dễ bị kẻ khác chiếm đoạt.

**Cự Môn + Thái Dương** hội tụ tại cung Phụ Mẫu: cha mẹ con cái mâu thuẫn, khắc
khẩu cãi vã không ngớt.

**Cự Môn + Kình Dương / Đà La / Hỏa Tinh / Linh Tinh / Địa Không / Địa Kiếp /
Thiên Hình:** số khắc cha mẹ, mồ côi cha hoặc mẹ.`,
  },

  // ============================================================
  // 8. Cự Môn ở Phúc Đức
  // ============================================================
  {
    id: 'cu-mon-tai-phuc-duc',
    title: 'Cự Môn tại Phúc Đức',
    sao: ['Cự Môn'],
    cung: ['Phúc Đức'],
    doUuTien: 80,
    tomTat: `**Cự Môn tại Phúc Đức:** người cố chấp, bảo thủ, đa nghi, không nhất
quán. Không chịu tiếp thu ý kiến → tự mang phiền não. Thần kinh không ổn định,
hay mất ngủ. Khó có an lạc trong cuộc sống.

**Lời khuyên:** điều hoà tâm tính, biết lắng nghe, không chạy theo vật chất.`,
    chiTiet: `## Tính cách

Người có sao Cự Môn đóng tại cung Phúc Đức là người **cố chấp, bảo thủ, tính
đa nghi, không nhất quán, kiên định**. Không chịu tiếp thu ý kiến từ người khác,
tự mang đến phiền não cho bản thân. Làm việc không có định hướng, hay thay đổi.
Thần kinh không ổn định, hay mất ngủ → không có sự minh mẫn, tỉnh táo.

## Cát hung kết hợp sao

Tại cung này Cự Môn ảnh hưởng đến sự vui vẻ, yên ổn — khó có an lạc, hạnh phúc.

**Gặp các sao tốt** (Thiên Đồng, Thái Dương): được hưởng phần nào phúc lộc, có
phẩm chất tu dưỡng.

**Gặp các sao xấu** (Kình Dương, Đà La, Hỏa Tinh, Linh Tinh): hay lo nghĩ, ưu
phiền, hay khẩu thiệt, vướng vào tranh chấp, không có phúc để hưởng.

**Gặp Địa Không, Địa Kiếp:** không thực hiện được dự định, ước mơ.

## Lời khuyên

Bản thân người có sao Cự Môn cư tại cung Phúc Đức phải biết **điều hoà tâm tính,
biết lắng nghe người khác nói, không chạy theo vật chất**.`,
  },

  // ============================================================
  // 9. Cự Môn ở Điền Trạch
  // ============================================================
  {
    id: 'cu-mon-tai-dien-trach',
    title: 'Cự Môn tại Điền Trạch',
    sao: ['Cự Môn'],
    cung: ['Điền Trạch'],
    doUuTien: 80,
    tomTat: `**Cự Môn tại Điền Trạch:** khi được Hóa Lộc/Quyền hoặc Lộc Tồn → tự
tay tạo dựng sản nghiệp, có uy quyền, khẩu phúc, có thể trở thành nhà ngoại giao
giỏi.

⚠️ Nếu gặp Hóa Kỵ hoặc sát tinh → sản nghiệp dễ bị lừa đảo, vướng kiện tụng,
phải phiêu bạt tứ hải.`,
    chiTiet: `## Cát kết hợp

**Hóa Lộc / Hóa Quyền:** chủ tự tay tạo dựng sản nghiệp, là người có uy quyền,
khẩu phúc. Có tài trở thành nhà ngoại giao giỏi, thầy nổi tiếng.

**Cùng cung Lộc Tồn:** chủ về sự may mắn, tai ách được giải trừ.

**Gặp Thiên Đồng, Hồng Loan, Thiên Hỷ, Văn Xương, Văn Khúc:** có tài và sẽ
thành công trong các lĩnh vực nghệ thuật văn học.

## Hung kết hợp

**Hóa Kỵ hoặc Kình Dương / Đà La / Thiên Hình / Đại Hao / Thất Sát / Tham Lang
/ Phá Quân:** hay gặp khó khăn, biến cố và họa sát. Người này sẽ vướng vào buôn
chuyện thị phi, hay bất mãn, ăn nói khó nghe, hay kiện tụng, **sản nghiệp dễ bị
lừa đảo**.

Đất đai nhà cửa vướng vào tranh chấp, kiện tụng pháp luật. Số chịu nhiều đau
khổ, tổn thương, hay gặp họa cướp trộm, binh đao, **phải phiêu bạt tứ hải**.`,
  },

  // ============================================================
  // 10. Cự Môn ở Quan Lộc
  // ============================================================
  {
    id: 'cu-mon-tai-quan-loc',
    title: 'Cự Môn tại Quan Lộc',
    sao: ['Cự Môn'],
    cung: ['Quan Lộc'],
    doUuTien: 80,
    tomTat: `**Cự Môn nhập miếu tại Quan Lộc:** chủ về sáng lập sự nghiệp, phát
triển từ nghề chuyên môn. Người có **tài ăn nói, ngoại giao tốt, khả năng nghiên
cứu giỏi**. Phù hợp **tư pháp, y học, học thuật, truyền thông, y bốc mệnh tướng**
— người có chức có quyền.`,
    chiTiet: `## Cát kết hợp

**Hóa Quyền, Hóa Lộc, Lộc Tồn:** người nổi tiếng, nhân vật lớn trong giới
thương nghiệp.

**Gặp Thái Dương:** danh tiếng hơn tiền tài.

## Hung kết hợp

**Gặp Thiên Cơ:** biến động đa đoan, công việc hay thay đổi, là người hay ảo
tưởng, dục vọng lớn.

**Gặp Thiên Đồng:** làm gì cũng không có đầu có đuôi, làm việc nhiều nhưng
không thể kết thúc.

**Gặp Hóa Kỵ:** vướng vào tranh chấp, cãi vã, sự nghiệp không ổn định, trong
sự thành công có nhiều thất bại.

**Gặp sát tinh** (Kình Dương, Đà La, Địa Không, Địa Kiếp, Linh Tinh, Đại Hao,
Thiên Hình): công việc hay bị kiện tụng, tranh chấp, vướng vào pháp luật.`,
  },

  // ============================================================
  // 11. Cự Môn ở Nô Bộc
  // ============================================================
  {
    id: 'cu-mon-tai-no-boc',
    title: 'Cự Môn tại Nô Bộc',
    sao: ['Cự Môn'],
    cung: ['Nô Bộc'],
    doUuTien: 78,
    tomTat: `**Cự Môn tại Nô Bộc:** quan hệ với bạn bè / cấp dưới hay tranh cãi.
Xem entry chuyên biệt theo trạng thái và chi.`,
    chiTiet: `## Cát kết hợp

**Cát diệu nhập miếu (Hóa Lộc, Lộc Tồn):** hay xảy ra tranh cãi với bạn bè
nhưng nhiều bạn lập nên sự nghiệp, có cấp dưới thông minh, có tài, thẳng tính,
chăm chỉ.

**Thái Dương đồng độ:** bạn bè là người tốt, hay giúp đỡ, tính trượng nghĩa.

## Hung kết hợp

**Đồng độ Thiên Đồng:** bạn bè hay gây thị phi.

**Gặp Hóa Kỵ:** bạn bè không giúp đỡ, ủng hộ; bản thân hay gặp tranh cãi, đối
mặt với tiếng xấu.

**Gặp Kình Dương / Đà La / Linh Tinh / Hỏa Tinh:** bạn bè là kẻ vô ơn, hay hãm
hại, phản bội.

**Địa Không / Địa Kiếp / Thiên Sát / Đại Hao + Hóa Kỵ:** dễ bị trộm cướp, mất
mát do bạn bè gây nên.

## Theo vị trí

Xem entry chuyên biệt cho Miếu (Mão/Dậu) và Hãm (Thìn/Tuất).`,
  },

  {
    id: 'cu-mon-tai-no-boc-mieu-mao-dau',
    title: 'Cự Môn Miếu tại Nô Bộc - Mão / Dậu',
    sao: ['Cự Môn'],
    cung: ['Nô Bộc'],
    chi: ['Mão', 'Dậu'],
    trangThai: ['Miếu'],
    doUuTien: 78,
    tomTat: `**Cự Môn MIẾU tại Nô Bộc (Mão / Dậu):** cấp dưới lúc trẻ không đắc
lực, **về già có thể tốt**.`,
  },

  {
    id: 'cu-mon-tai-no-boc-ham-thin-tuat',
    title: 'Cự Môn Hãm tại Nô Bộc - Thìn / Tuất',
    sao: ['Cự Môn'],
    cung: ['Nô Bộc'],
    chi: ['Thìn', 'Tuất'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `⚠️ **Cự Môn HÃM tại Nô Bộc (Thìn / Tuất):** công việc lộn xộn, dễ
rơi vào "ăn cháo đá bát".`,
  },

  // ============================================================
  // 12. Cự Môn ở Thiên Di
  // ============================================================
  {
    id: 'cu-mon-tai-thien-di',
    title: 'Cự Môn tại Thiên Di',
    sao: ['Cự Môn'],
    cung: ['Thiên Di'],
    doUuTien: 80,
    tomTat: `**Cự Môn tại Thiên Di:** số xuất ngoại; sự nghiệp liên quan **tư
pháp, xuất bản, ngoại giao, quảng cáo**. Khả năng giao tiếp giỏi, có tài diễn
thuyết.

⚠️ Hay bị đố kỵ, ganh ghét, gặp thị phi do tính đa nghi.`,
    chiTiet: `## Đặc điểm chung

Số xuất ngoại. Sự nghiệp liên quan đến tư pháp, xuất bản, ngoại giao, quảng cáo.
Khả năng giao tiếp giỏi, có tài diễn thuyết.

Tuy nhiên hay bị đố kỵ, ganh ghét, gây hiềm khích, dễ gặp thị phi, bị bêu riếu
do có tính đa nghi, hay lừa lọc, xảo trá, làm việc không quyết đoán → vất vả.

## Cát kết hợp

**Hóa Quyền, Hóa Lộc, Lộc Tồn:** tăng uy quyền, tài lộc, phúc lợi.

**Thái Dương đồng cung:** số xuất ngoại có thu hoạch bất ngờ; cũng hay bị
đố kỵ.

## Hung kết hợp

**Hóa Kỵ:** xuất ngoại nhiều cãi vã, tranh chấp.

**Đà La / Kình Dương / Thiên Hình / Linh Tinh hội chiếu:** xuất ngoại hay bị
tai nạn, gặp thị phi. Nếu lưu niên hóa sát → tai họa lao tù, hình khắc, tử thương.`,
  },

  // ============================================================
  // 13. Cự Môn ở Tật Ách
  // ============================================================
  {
    id: 'cu-mon-tai-tat-ach',
    title: 'Cự Môn tại Tật Ách',
    sao: ['Cự Môn'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `**Cự Môn tại Tật Ách:** sức khỏe suy giảm. Hay mắc bệnh **dạ dày,
phổi, mụn nhọt, ung thư** và các chứng âm tồn. Xem entry chuyên biệt theo trạng
thái.`,
    chiTiet: `## Theo vị trí

Xem entry chuyên biệt cho Miếu / Vượng và Hãm.

## Cát kết hợp

**Tử Vi / Lộc Tồn:** hóa giải, trừ ách.

## Hung kết hợp

**Sát tinh** (Không Kiếp, Hóa Kỵ, Kình Dương, Đà La): nhiều tai họa, thương
tích đầy mình, cô đơn, bệnh nặng, thất tài, vướng hình pháp.`,
  },

  {
    id: 'cu-mon-tai-tat-ach-mieu-vuong',
    title: 'Cự Môn Miếu / Vượng tại Tật Ách',
    sao: ['Cự Môn'],
    cung: ['Tật Ách'],
    trangThai: ['Miếu', 'Vượng'],
    doUuTien: 78,
    tomTat: `**Cự Môn MIẾU / VƯỢNG tại Tật Ách:** ít bệnh; **tai và tiêu hóa
không tốt**.`,
  },

  {
    id: 'cu-mon-tai-tat-ach-ham',
    title: 'Cự Môn Hãm tại Tật Ách',
    sao: ['Cự Môn'],
    cung: ['Tật Ách'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `⚠️ **Cự Môn HÃM tại Tật Ách:** dễ bị **tật mủ máu, bệnh thận, dạ
dày, phổi, ung thư**.`,
  },

  // ============================================================
  // 14. Cự Môn ở Tài Bạch
  // ============================================================
  {
    id: 'cu-mon-tai-tai-bach',
    title: 'Cự Môn tại Tài Bạch',
    sao: ['Cự Môn'],
    cung: ['Tài Bạch'],
    doUuTien: 80,
    tomTat: `**Cự Môn tại Tài Bạch:** dựa vào **tâm lực, trí lực, khẩu tài** mà
thành công. Có Hóa Quyền/Lộc/Lộc Tồn → giàu có, quyền lực. Tuy nhiên hay gặp
**chèn ép trong công việc**, cần chú ý lời ăn tiếng nói.`,
    chiTiet: `## Đặc điểm

Có chí khí, tài năng nhưng hay gặp rắc rối, khó khăn, bị người khác chèn ép,
lật đổ trong công việc.

## Cát kết hợp

**Hóa Quyền / Hóa Lộc / Lộc Tồn đồng cung:** giàu có, quyền lực.

**Thái Dương đồng cung:** nhận được sự tín nhiệm tin tưởng từ những người xung
quanh, cơ nghiệp được mở rộng.

**Tử Vi / Lộc Tồn đồng cung:** tính xấu của Cự Môn được khắc chế, giải trừ tai ách.

## Hung kết hợp

**Kình Dương, Đà La hội cùng:** vướng tranh chấp, kiện tụng.

**Hỏa Tinh / Linh Tinh / Địa Không / Địa Kiếp / Đại Hao:** tổn hao do binh đao,
cướp bóc, hỏa tai.

**Thất Sát / Tham Lang / Phá Quân:** dễ bị tù tội.

**Hóa Kỵ:** họa từ miệng mà ra.

**Cự Môn + Thiên Cơ đồng cung:** tài lộc nhiều biến động.

**Cự Môn + Thiên Đồng đồng cung:** tay trắng lập nghiệp theo nghề kỹ thuật, nghệ thuật.

## Lời khuyên

Cần chú ý lời ăn tiếng nói tránh vướng thị phi.`,
  },

  // ============================================================
  // 15. Cự Môn ở Tử Tức
  // ============================================================
  {
    id: 'cu-mon-tai-tu-tuc',
    title: 'Cự Môn tại Tử Tức',
    sao: ['Cự Môn'],
    cung: ['Tử Tức'],
    doUuTien: 80,
    tomTat: `**Cự Môn tại Tử Tức:** sinh con không thuận lợi. Cần ánh sáng Thái
Dương + Hóa Quyền/Lộc/Lộc Tồn để giải u ám. Cát hội → 3 con trở lên, gia đình
giàu sang. Hung hội → cô độc, nuôi con thừa tự.`,
    chiTiet: `## Đặc điểm

Sinh con cái không được thuận lợi. Có tài ăn nói nhưng hay vướng thị phi tranh
chấp, đố kỵ, bị cạnh tranh.

## Cát kết hợp

**Thái Dương / Tả Phù / Hữu Bật / Thiên Khôi / Thiên Việt / Hóa Quyền / Hóa Lộc
/ Lộc Tồn:** số 3 con trở lên, gia đình giàu sang phú quý, **con cái thông minh
đa tài, con hơn cha về sự nghiệp**.

## Hung kết hợp

**Thiên Cơ / Thiên Đồng / Kình Dương / Đà La / Hỏa Tinh / Linh Tinh / Địa Không
/ Địa Kiếp:** số là người cô độc, **nuôi con thừa tự**, con cái hay bệnh tật,
hao tài tốn của.

## Lời khuyên

Cự Môn cần ánh sáng của **Thái Dương** để giải u ám tối tăm. Cần **Hóa Quyền /
Hóa Lộc / Lộc Tồn** để tạo ánh sáng tốt lành.

Nên cẩn trọng lời ăn tiếng nói, sống hòa hợp với mọi người.`,
  },

  // ============================================================
  // 16. Cự Môn ở Phu Thê
  // ============================================================
  {
    id: 'cu-mon-tai-phu-the',
    title: 'Cự Môn tại Phu Thê',
    sao: ['Cự Môn'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `**Cự Môn tại Phu Thê:** chủ về **lời qua tiếng lại, cãi vã** với bạn
đời. Để tránh: lấy người **hơn tuổi, hào sảng, thông minh, dũng cảm** (như khi
Thái Dương đồng cung). Xem entry chuyên biệt cho Nữ mệnh.`,
    chiTiet: `## Lời khuyên chung

Tại cung này Cự Môn chủ về lời qua tiếng lại, cãi vã với bạn đời. Để tránh nên
lấy người hơn tuổi, tính tình bạn đời hào sảng, thông minh, dũng cảm, sống có
trách nhiệm — đặc biệt khi **Thái Dương đồng cung**.

## Cát kết hợp

Xem entry chuyên biệt cho Nữ mệnh + Hóa Quyền/Lộc/Lộc Tồn/Tả Hữu.

**Cùng cung Thiên Cơ / Thiên Đồng:** là người tài năng, xinh đẹp, **dễ dính vào
hình khắc chia ly**.

## Hung kết hợp

**Kình Dương / Đà La / Hỏa Tinh / Linh Tinh / Thiên Hình / Cô Thần / Quả Tú:**
khắc với bạn đời, hay khắc khẩu, ở riêng.

**Hóa Kỵ:** hay bị thị phi bởi lời ăn tiếng nói.

**Hội cùng Kình / Đà / Hỏa / Linh / Thiên Hình:** xem entry chuyên biệt cho Nữ
mệnh ba đời chồng.`,
  },

  {
    id: 'cu-mon-tai-phu-the-nu-cat',
    title: 'Cự Môn tại Phu Thê + cát tinh - Nữ mệnh',
    sao: ['Cự Môn'],
    cung: ['Phu Thê'],
    gioiTinh: 'Nữ',
    ketHop: ['Hóa Quyền', 'Hóa Lộc', 'Lộc Tồn', 'Tả Phù', 'Hữu Bật'],
    doUuTien: 78,
    tomTat: `✅ **Nữ mệnh — Cự Môn tại Phu Thê + Hóa Quyền / Hóa Lộc / Lộc Tồn /
Tả Phù / Hữu Bật:** thường thông minh, lanh lẹ, biết chăm lo cho chồng cho con,
vun vén gia đình. Số là người **lấy được chồng tài giỏi, giàu sang phú quý**,
có sự nghiệp lớn.`,
  },

  {
    id: 'cu-mon-tai-phu-the-nu-sat',
    title: 'Cự Môn tại Phu Thê + Sát tinh - Nữ mệnh',
    sao: ['Cự Môn'],
    cung: ['Phu Thê'],
    gioiTinh: 'Nữ',
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Thiên Hình'],
    doUuTien: 78,
    tomTat: `⚠️ **Nữ mệnh — Cự Môn tại Phu Thê + Kình / Đà / Hỏa / Linh / Thiên
Hình:** mệnh **ba đời chồng**. Số nên làm vợ lẽ, về ở không cần tổ chức hôn lễ.`,
  },

  // ============================================================
  // 17. Cự Môn ở Huynh Đệ
  // ============================================================
  {
    id: 'cu-mon-tai-huynh-de',
    title: 'Cự Môn tại Huynh Đệ',
    sao: ['Cự Môn'],
    cung: ['Huynh Đệ'],
    doUuTien: 80,
    tomTat: `**Cự Môn tại Huynh Đệ:** anh em có tài ăn nói nhưng quan hệ không
tốt, hay vướng thị phi, không hòa thuận, có anh em khác mẹ.`,
    chiTiet: `## Đặc điểm

Anh em là người có tài ăn nói, quan hệ giữa anh em không tốt, hay vướng thị
phi, không hòa thuận, **có anh em khác mẹ**.

## Cát kết hợp

**Tả Phù / Hữu Bật / Thiên Khôi / Thiên Việt / Văn Xương / Văn Khúc / Ân Quang
/ Thiên Phúc + Hóa Quyền / Hóa Lộc / Lộc Tồn:** anh em là người tài giỏi, tự
lập được sự nghiệp thành tựu lớn.

**Thái Dương đồng cung:** nhập cách (tốt).

## Hung kết hợp

**Thiên Cơ đồng cung:** anh em bất hòa vì tư lợi cá nhân, tham vọng, gây chia
rẽ xích mích.

**Thiên Đồng đồng cung:** có anh em kết nghĩa nhưng tốt trước xấu sau.

**Địa Không / Địa Kiếp / Hình Hao:** anh em mâu thuẫn.

**Kình Dương / Đà La / Hỏa Tinh / Linh Tinh / Cô Thần / Quả Tú:** tranh chấp,
hình khắc, thị phi.`,
  },

  // ============================================================
  // 18. Cách cục đặc biệt của Cự Môn (gắn với cung Mệnh) — đã tách
  // ============================================================
  {
    id: 'cu-mon-cach-cuc-dac-biet',
    title: 'Các cách cục đặc biệt của Cự Môn',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    doUuTien: 55,
    tomTat: `**Cự Môn tại Mệnh** có nhiều cách cục đặc biệt — chia theo bộ kết
hợp và vị trí. Mỗi cách cục được tách thành luận giải riêng.`,
    chiTiet: `## Tổng quan

Cự Môn tại Mệnh có nhiều cách cục đặc biệt — chia theo bộ kết hợp và vị trí.

→ Mỗi cách cục được tách thành luận giải riêng (xem các entry chuyên biệt
phía dưới).`,
  },

  {
    id: 'cu-mon-cach-cu-nhat-dan',
    title: 'Cách Cự Nhật tại Dần',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    chi: ['Dần'],
    ketHop: ['Thái Dương'],
    doUuTien: 50,
    tomTat: `✅ **Cự Nhật tại Dần:** ba đời thịnh vượng giàu sang, vinh hiển,
vang danh. Có thêm **Quyền + Phượng** → tăng tốt đẹp. Gặp **Lộc Tồn** → hạn
xấu khổ suốt đời.`,
  },

  {
    id: 'cu-mon-cach-cu-nhat-than',
    title: 'Cách Cự Nhật tại Thân',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    chi: ['Thân'],
    ketHop: ['Thái Dương'],
    doUuTien: 50,
    tomTat: `**Cự Nhật tại Thân:** chỉ ở mức **khá giả**, công danh đến trước
tiền bạc.`,
  },

  {
    id: 'cu-mon-cach-cu-co-mao-dau',
    title: 'Cách Cự Cơ tại Mão / Dậu',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    chi: ['Mão', 'Dậu'],
    ketHop: ['Thiên Cơ'],
    doUuTien: 50,
    tomTat: `✅ **Cự Cơ tại Mão / Dậu:** số làm quan chức lớn, giàu có nhiều tiền
của. **Mão tốt hơn Dậu**. Với 4 tuổi **Ất, Kỷ, Bính, Tân** → hưng thịnh phát
đạt cả phú và quý.

**Có thêm Tiểu Hao + Đại Hao:** tiếng tăm lừng lẫy, vang danh muôn nơi, có tiền
tài, uy quyền, tính phóng khoáng, hoang phí.`,
  },

  {
    id: 'cu-mon-cach-cu-khoa-thin-tuat',
    title: 'Cách Cự Khoa tại Thìn / Tuất',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    chi: ['Thìn', 'Tuất'],
    ketHop: ['Hóa Khoa'],
    doUuTien: 50,
    tomTat: `✅ **Cự Khoa tại Thìn / Tuất:** biệt tài ăn nói, diễn thuyết trước
đám đông giỏi.`,
  },

  {
    id: 'cu-mon-cach-tuoi-tan-tu-mo',
    title: 'Cự Môn - Tuổi Tân tại Tứ Mộ',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    chi: ['Thìn', 'Tuất', 'Sửu', 'Mùi'],
    doUuTien: 50,
    tomTat: `**Tuổi Tân, Mệnh ở Tứ Mộ, Cự ngự trị:** Cự bị hãm nhưng vẫn **khá
giả**. Có **Tả Phù + Hữu Bật** → rủi ro giảm dù có Hóa Kỵ đồng cung.`,
  },

  {
    id: 'cu-mon-cach-cu-ham-kinh-da',
    title: 'Cách xấu - Cự hãm + Kình Đà',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 50,
    tomTat: `⚠️ **Cự hãm + Kình Đà:** yếu đuối, thiếu sức sống, hay **mắc bệnh
hiểm nghèo**. Không bệnh thì dễ rơi vào **con đường phạm pháp** (trộm cắp);
con gái thì **lăng loàn, tai tiếng**.`,
  },

  {
    id: 'cu-mon-cach-cu-linh-hoa',
    title: 'Cách xấu - Cự + Linh + Hỏa',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    ketHop: ['Linh Tinh', 'Hỏa Tinh'],
    doUuTien: 50,
    tomTat: `⚠️ **Cự + Linh + Hỏa:** cách rất xấu, hạn nặng → **chết yểu** hoặc
tai nạn lớn khó qua khỏi.

**+ Đà + Kình:** gặp biến cố tâm lý, trầm cảm u uất → **tự vẫn**. Không thì bị
**tàn tật, chân tay bỏng nặng**.`,
  },

  {
    id: 'cu-mon-cach-cu-ty-ngo-loc-ton',
    title: 'Cự Môn tại Tý / Ngọ + Lộc Tồn đồng cung',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    chi: ['Tý', 'Ngọ'],
    ketHop: ['Lộc Tồn'],
    doUuTien: 50,
    tomTat: `⚠️ **Cự tại Tý / Ngọ + Lộc Tồn đồng cung:** có tài nhưng **không
gặp thời**.`,
  },

  {
    id: 'cu-mon-cach-cu-hoi-ty-loc-ton',
    title: 'Cự Môn tại Hợi / Tý + Lộc Tồn đồng cung',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    chi: ['Hợi', 'Tý'],
    ketHop: ['Lộc Tồn'],
    doUuTien: 50,
    tomTat: `⚠️ **Cự tại Hợi / Tý + Lộc Tồn đồng cung:** tham vọng lớn nhưng
**không hiện thực hóa được**, tài năng không được khai phá.`,
  },

  {
    id: 'cu-mon-cach-cu-tham-rieu-hao',
    title: 'Cách xấu - Cự + Tham + Riêu / Hao',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    ketHop: ['Tham Lang', 'Thiên Riêu', 'Đại Hao', 'Tiểu Hao'],
    doUuTien: 50,
    tomTat: `⚠️ **Cự + Tham + Riêu** hoặc **Cự + Tham + Hao:** chủ hạn tại gia
— **thất nghiệp, tù tội, hay gặp nạn**.`,
  },

  {
    id: 'cu-mon-cach-cuc-nu-hoa-ky',
    title: 'Cự Môn + Hóa Kỵ - Nữ mệnh',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    gioiTinh: 'Nữ',
    ketHop: ['Hóa Kỵ'],
    doUuTien: 78,
    tomTat: `⚠️ **Nữ mệnh — Cự Môn + Hóa Kỵ tại Mệnh:** đàn bà thì **thất tiết**,
con gái thì **thất trinh**.`,
  },
];
