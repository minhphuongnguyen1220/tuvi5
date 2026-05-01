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
    tomTat: `**Tham Lang** thuộc chòm **Thiên Phủ** (sao thứ ba), ngũ hành
**Mộc** tính **Dương** (Dương Mộc).

**Nằm trong tổ hợp SÁT - PHÁ - THAM** (Thất Sát + Phá Quân + Tham Lang) — đại
diện cho **Tham - Sân - Si**. Có khi mở rộng thành **Sát - Phá - Tham - Liêm**
(thêm Liêm Trinh).

**Tham Lang chủ về:**
- **Lòng tham tiền tài**
- **Tham tình**
- **Tham dục**

→ Đôi khi còn được xem là **TAI TINH** vì lòng tham luôn là nguồn cơn của tai họa.

**Tượng:** **bông hoa hồng đỏ rực như lửa** — đầy **tham vọng, động lực và
dục vọng**. Là **bộ sao đào hoa** — thể hiện ham muốn về **vật chất + dục tình**.`,

    chiTiet: `## Vị trí trong khoa tử vi

Tham Lang là **sao thứ ba** trong tám sao thuộc chòm sao **Thiên Phủ**.

## Bản chất

- **Ngũ hành:** Mộc (Dương Mộc)
- Là **bộ sao đào hoa** — thể hiện ham muốn về **vật chất, dục tình**

## Tổ hợp Sát - Phá - Tham

Tham Lang nằm trong bộ ba:
- **Thất Sát** + **Phá Quân** + **Tham Lang**

→ Đại diện cho **Tham - Sân - Si** của con người.

Có khi mở rộng thành **Sát - Phá - Tham - Liêm** (thêm Liêm Trinh).

## Tham Lang chủ về

Trong tổ hợp này, Tham Lang chủ về:
- **Lòng tham tiền tài**
- **Tham tình**
- **Tham dục**

→ Do đó, đôi khi Tham Lang còn được xem là **tai tinh** vì **lòng tham luôn
là nguồn cơn của tai họa**.

## Hình tượng

Để dễ hình dung, hãy liên tưởng Tham Lang như:
- **Bông hoa hồng đỏ rực như lửa**
- Đầy **tham vọng, động lực và dục vọng**`,
  },

  // ============================================================
  // 2. Tham Lang - Bộ sao tốt
  // ============================================================
  {
    id: 'tham-lang-bo-sao-tot',
    title: 'Tham Lang - Các bộ sao tốt (đặc tính chung)',
    sao: ['Tham Lang'],
    doUuTien: 50,
    tomTat: `**Tham Lang có nhiều bộ sao tốt** — Hỏa/Linh tạo cách bạo phát, Tả
Hữu Khôi Việt mang quý nhân, Tam Hóa giúp chuyển hóa đam mê thành thành tựu.`,

    chiTiet: `## Các bộ sao tốt thường gặp

Tham Lang có **nhiều bộ sao tốt** chủ về bạo phát, quý nhân và chuyển hóa
đam mê thành thành tựu. Các tổ hợp cụ thể được tách thành các luận giải
riêng (Hỏa Tham / Linh Tham, Tả Hữu Khôi Việt, Tam Hóa).`,
  },

  {
    id: 'tham-lang-bo-sao-tot-hoa-linh',
    title: 'Tham Lang + Hỏa Tinh / Linh Tinh đắc địa (Hỏa Tham / Linh Tham)',
    sao: ['Tham Lang'],
    ketHop: ['Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 45,
    tomTat: `✅ **Tham Lang + Hỏa Tinh / Linh Tinh (đắc địa):** tạo thành cách
**HỎA THAM** hoặc **LINH THAM** — chủ về **bạo phát tài lộc và quyền uy**, thành
công đến **nhanh và mạnh**. Thường thấy ở **võ tướng** hoặc **doanh nhân lớn**.`,
  },

  {
    id: 'tham-lang-bo-sao-tot-ta-huu-khoi-viet',
    title: 'Tham Lang + Tả Hữu + Khôi Việt',
    sao: ['Tham Lang'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 45,
    tomTat: `✅ **Tham Lang + Tả Phù + Hữu Bật + Thiên Khôi + Thiên Việt:** mệnh
chủ có **quý nhân trợ lực**, dễ nắm vai trò **lãnh đạo**, có duyên với **chính
trị** hoặc **tâm linh**.`,
  },

  {
    id: 'tham-lang-bo-sao-tot-hoa-loc',
    title: 'Tham Lang + Hóa Lộc',
    sao: ['Tham Lang'],
    ketHop: ['Hóa Lộc'],
    doUuTien: 45,
    tomTat: `✅ **Tham Lang + Hóa Lộc:** tăng khả năng **kiếm tiền** và tăng
**giao tiếp**.`,
  },

  {
    id: 'tham-lang-bo-sao-tot-hoa-quyen',
    title: 'Tham Lang + Hóa Quyền',
    sao: ['Tham Lang'],
    ketHop: ['Hóa Quyền'],
    doUuTien: 45,
    tomTat: `✅ **Tham Lang + Hóa Quyền:** mang lại **uy quyền** và **khả năng
chỉ huy**.`,
  },

  {
    id: 'tham-lang-bo-sao-tot-hoa-khoa',
    title: 'Tham Lang + Hóa Khoa',
    sao: ['Tham Lang'],
    ketHop: ['Hóa Khoa'],
    doUuTien: 45,
    tomTat: `✅ **Tham Lang + Hóa Khoa:** giúp đương số **chuyển hóa đam mê**
thành **giá trị học thuật / nghệ thuật**, được **xã hội công nhận**.`,
  },

  // ============================================================
  // 3. Tham Lang - Bộ sao xấu
  // ============================================================
  {
    id: 'tham-lang-bo-sao-xau',
    title: 'Tham Lang - Các bộ sao xấu (đặc tính chung)',
    sao: ['Tham Lang'],
    doUuTien: 50,
    tomTat: `⚠️ **Tham Lang có nhiều bộ sao kỵ:** Kình Đà kích hoạt mặt tối, Không
Kiếp tham vọng viển vông, Tuần/Triệt biến đổi tính chất, Hóa Kỵ sinh tranh chấp.`,

    chiTiet: `## Kình Dương + Đà La — kích hoạt mặt tối

⚠️ **Kình Dương + Đà La** kích hoạt mặt tối của Tham Lang tọa Mệnh:
- Dễ dẫn đến **sa đọa vì:**
  - **Sắc**
  - **Rượu**
  - **Cờ bạc**

## Địa Không + Địa Kiếp — viển vông

⚠️ **+ Địa Không + Địa Kiếp:**
- Tham vọng trở nên **viển vông**
- Cuộc đời **khó thực hiện lý tưởng**
- Dễ rơi vào con đường **lừa đảo** hoặc **giang hồ**

## Tuần / Triệt — 2 mặt khác nhau

Tham Lang đi cùng **Tuần, Triệt** có khả năng **tiết giảm** hoặc **biến đổi
tính chất** của sao:

✅ **Gặp Triệt:** thường giúp đương số **biết kiềm chế**.

⚠️ **Gặp Tuần:** dễ sinh **khoác lác**, **nói nhiều làm ít**.

## Hóa Kỵ — ghen tuông

⚠️ **Hội cùng Hóa Kỵ:**
- Làm tăng tính **ghen tuông, đố kỵ**
- Dễ vì **tình hoặc tiền** mà sinh **tranh chấp, oán hận**`,
  },

  {
    id: 'tham-lang-bo-sao-xau-kinh-da',
    title: 'Tham Lang + Kình Dương + Đà La',
    sao: ['Tham Lang'],
    cung: ['Mệnh'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 45,
    tomTat: `⚠️ **Tham Lang + Kình Dương + Đà La đồng độ:** kích hoạt mặt tối của
Tham Lang, dễ dẫn đến **sa đọa vì sắc, rượu, cờ bạc**.`,
  },

  {
    id: 'tham-lang-bo-sao-xau-khong-kiep',
    title: 'Tham Lang + Địa Không + Địa Kiếp',
    sao: ['Tham Lang'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 45,
    tomTat: `⚠️ **Tham Lang + Địa Không + Địa Kiếp:** tham vọng trở nên **viển
vông**, cuộc đời **khó thực hiện lý tưởng**, dễ rơi vào con đường **lừa đảo**
hoặc **giang hồ**.`,
  },

  {
    id: 'tham-lang-bo-sao-xau-tuan-triet',
    title: 'Tham Lang + Tuần / Triệt',
    sao: ['Tham Lang'],
    ketHop: ['Tuần', 'Triệt'],
    doUuTien: 45,
    tomTat: `**Tham Lang + Tuần / Triệt:** có khả năng **tiết giảm** hoặc **biến
đổi tính chất** của sao.

✅ **Gặp Triệt:** thường giúp đương số **biết kiềm chế**.

⚠️ **Gặp Tuần:** dễ sinh **khoác lác**, **nói nhiều làm ít**.`,
  },

  {
    id: 'tham-lang-bo-sao-xau-hoa-ky',
    title: 'Tham Lang + Hóa Kỵ',
    sao: ['Tham Lang'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 45,
    tomTat: `⚠️ **Tham Lang + Hóa Kỵ:** làm tăng tính **ghen tuông, đố kỵ**, dễ
vì **tình hoặc tiền** mà sinh **tranh chấp, oán hận**.`,
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
    tomTat: `**Tham Lang tại Mệnh:** **thực tế, thông minh, khôn ngoan**. Bề
ngoài **ung dung chậm rãi**, nội tâm có **ngọn lửa tham vọng âm ỉ**.

**Sống thiên về cảm xúc và bản năng** — khi đã hứng thú thì theo đuổi đến
cùng với **đam mê mãnh liệt**. Phản ứng **rất nhanh** — **hành động trước,
cân nhắc hệ quả sau**.

**Khôn khéo + ngoại giao** — giỏi ăn nói, biết lấy lòng người, sẵn sàng dùng
**lời mềm mỏng / nịnh bợ** để đạt mục tiêu.

✅ **Đào hoa mạnh** — sức hút tự nhiên với người khác giới. Đường tình cảm
**phong phú nhưng rối ren**.

✅ **Duyên TÂM LINH** — kết nối mạnh với Tử Vi, phong thủy, tướng số. Nhiều
người tu tập / nghiên cứu / hành nghề tâm linh.`,

    chiTiet: `## Tính cách bề ngoài vs bên trong

**Bề ngoài:**
- **Thực tế, thông minh, khôn ngoan**
- Ung dung, chậm rãi

**Bên trong:**
- Luôn tồn tại một **ngọn lửa tham vọng âm ỉ**, **khó dập tắt**

## Sống theo bản năng

Mệnh chủ sống thiên về **cảm xúc và bản năng**:
- Khi đã nảy sinh hứng thú với điều gì → sẵn sàng **theo đuổi đến cùng**
- Với **đam mê và nhiệt huyết mãnh liệt**

## Phản ứng nhanh

- Khả năng phản ứng với hoàn cảnh xung quanh **rất nhanh**
- Thường nghiêng về **hành động trước rồi mới cân nhắc hệ quả sau**

## Khôn khéo + ngoại giao

Sao Tham Lang khiến đương số trở nên **khôn khéo**:
- Có **tài ngoại giao**
- **Giỏi ăn nói**
- Biết cách **lấy lòng người khác** để đạt mục tiêu
- Sẵn sàng dùng **lời lẽ mềm mỏng, nịnh bợ** nếu mang lại lợi ích thiết thực

## ✅ Đào hoa

Với tính chất đào hoa mạnh:
- Thường sở hữu **sức hút tự nhiên**
- Dễ gây **thiện cảm** với người khác giới

→ Đường tình cảm khá **phong phú** nhưng cũng nhiều **rối ren**, khó tránh
khỏi những **mối duyên đến nhanh mà đi cũng vội**.

## ✅ Duyên với tâm linh

Một đặc điểm đáng chú ý:
- Sao Tham Lang tạo nên **sự kết nối mạnh mẽ** giữa đương số và các bộ môn
  huyền học:
  - **Tử Vi**
  - **Phong thủy**
  - **Tướng số**

→ Không ít mệnh chủ có xu hướng:
- **Tu tập**
- **Nghiên cứu tâm linh**
- Hoặc **trở thành người hành nghề** trong lĩnh vực này`,
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
    tomTat: `**Tham Lang tại Mệnh — sự nghiệp:** gắn liền với **cạnh tranh, biến
động, bước ngoặt bất ngờ**. **Mẫu mệnh "LẮM TÀI NHIỀU TẬT"** — đạt thành tựu
lớn nhưng cũng dễ thất bại nếu thiếu tiết chế.

**Lĩnh vực phù hợp:**
- **Nghệ thuật, thẩm mỹ, ẩm thực**
- **Kinh doanh, thể thao, võ thuật**
- Vai trò **quản lý / điều hành**

**Tham Lang là sao của BỘC PHÁT** — gặp vận tốt + **Hỏa Tinh / Linh Tinh** →
**phát tài rất nhanh**.

⚠️ **Thiếu sao ổn định / không tu dưỡng:** thành công khó bền — **dễ đến rồi
dễ mất**.`,

    chiTiet: `## Đặc điểm sự nghiệp

Con đường công danh của Tham Lang gắn liền với:
- **Cạnh tranh**
- **Biến động**
- Những **bước ngoặt bất ngờ**

→ Đây là mẫu mệnh cách **"lắm tài nhiều tật"**:
- Có thể đạt **thành tựu lớn**
- Nhưng cũng dễ gặp **thất bại** nếu thiếu sự tiết chế

## Lĩnh vực phù hợp

Đương số dễ phát triển trong:
- **Nghệ thuật**
- **Thẩm mỹ**
- **Ẩm thực**
- **Kinh doanh**
- **Thể thao**
- **Võ thuật**

Khả năng **tổ chức và sắp xếp công việc khá tốt** → phù hợp với:
- Vị trí **quản lý**
- Hoặc **điều hành**

## Sao của BỘC PHÁT

Tham Lang là **sao của sự bộc phát**:
- Khi gặp **vận tốt**
- Đặc biệt hội tụ **Hỏa Tinh** hoặc **Linh Tinh**

→ Mệnh chủ **phát tài rất nhanh**.

## ⚠️ Thành công khó bền

Tuy nhiên, nếu thiếu các sao ổn định hoặc không biết tu dưỡng bản thân:
- Thành công thường **khó bền**
- **Dễ đến rồi lại dễ mất**`,
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
    tomTat: `⚠️ **Tham Lang tại Mệnh — hôn nhân nhiều sóng gió** (đặc biệt **tiền
vận**). Đương số trải qua **nhiều mối tình** kèm theo **tổn thương cảm xúc**.

**Khi đã yêu:** yêu **rất mãnh liệt**, **chiếm hữu cao**, dễ phát sinh **ghen
tuông**.

✅ **Lời khuyên:** **kết hôn muộn**. Người phối ngẫu phù hợp là người có **cá
tính mạnh**, đủ bản lĩnh để **tiết chế và định hướng lại** tính cách phóng
túng của bản mệnh.`,

    chiTiet: `## Đặc điểm hôn nhân

Phương diện hôn nhân của Tham Lang tại Mệnh:
- **Nhiều sóng gió**
- Nhất là ở **tiền vận**

→ Đương số trải qua **nhiều mối tình**, kèm theo những **tổn thương về cảm xúc**.

## Khi đã yêu

- Yêu **rất mãnh liệt**
- Có xu hướng **chiếm hữu cao**
- Dễ phát sinh **ghen tuông**

## Lời khuyên

Để xây dựng hôn nhân bền vững:
- Đương số nên **kết hôn muộn**

**Người phối ngẫu phù hợp:**
- Là người có **cá tính mạnh**
- Đủ **bản lĩnh** để:
  - **Tiết chế**
  - **Định hướng lại** tính cách phóng túng của bản mệnh`,
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
    tomTat: `**Tham Lang là THỌ TINH** → đương số **thể lực tốt, sức bền cao**,
khả năng ăn uống và thích nghi mạnh. **Ngoại hình thường trẻ lâu hơn tuổi thật**.

⚠️ **Tuy nhiên** — do khuynh hướng **ham hưởng thụ**, cần đặc biệt lưu tâm:
- Bệnh **GAN, THẬN, hệ TIÊU HÓA**
- Các vấn đề phát sinh từ **đời sống tình cảm thiếu tiết chế**`,

    chiTiet: `## Tham Lang là thọ tinh

Trên lá số, Mệnh Tham Lang là một **thọ tinh** nên đương số:
- Có **thể lực tốt**
- **Sức bền cao**
- Khả năng **ăn uống** và **thích nghi với môi trường khá mạnh**
- Ngoại hình thường **trẻ lâu hơn so với tuổi thật**

## ⚠️ Bệnh cần lưu ý

Do khuynh hướng **ham hưởng thụ**, người Tham Lang nhập Mệnh cần đặc biệt
lưu tâm đến:

**Hệ cơ quan:**
- **Gan**
- **Thận**
- **Hệ tiêu hóa**

**Hệ quả từ tình cảm:**
- Các vấn đề phát sinh từ **đời sống tình cảm thiếu tiết chế**`,
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
    tomTat: `**Tham Lang tại Mệnh:** **tham vọng lớn + khả năng kiếm tiền**.
Có duyên với tài lộc — đặc biệt **kinh doanh, đầu tư**, ngành nghề **linh
hoạt cao**.

⚠️ **Bản tính tiêu xài phóng khoáng + thích hưởng thụ** → tiền bạc **"vào
nhanh ra nhanh"**.

✅ Muốn **giàu có bền vững** cần học cách:
- **Quản lý tài chính**
- **Tích lũy**
- **Kiểm soát ham muốn cá nhân**`,

    chiTiet: `## Tham vọng + khả năng kiếm tiền

Sao Tham Lang an cung Mệnh chủ về:
- **Tham vọng lớn**
- **Khả năng kiếm tiền**

→ Đương số có **duyên với tài lộc**, đặc biệt trong:
- **Kinh doanh**
- **Đầu tư**
- Các ngành nghề mang tính **linh hoạt cao**

## ⚠️ "Vào nhanh ra nhanh"

Bản tính:
- **Tiêu xài phóng khoáng**
- **Thích hưởng thụ**

→ Khiến tiền bạc thường rơi vào trạng thái **"vào nhanh ra nhanh"**.

## Lời khuyên

Muốn đạt sự **giàu có bền vững**, người sở hữu Tham Lang tại Mệnh cần học cách:
- **Quản lý tài chính**
- Biết **tích lũy**
- **Kiểm soát ham muốn cá nhân**`,
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
    tomTat: `⚠️ **Tham Lang tại Tý — HÃM ĐỊA**, cách **"PHIẾM THỦY ĐÀO HOA"**:
đào hoa và lãng mạn rất mạnh, dễ **sa vào tửu sắc, cờ bạc**. Cuộc đời **phiêu
bạt, tình duyên lận đận**, khó ổn định.

✅ **Tham Lang tại Ngọ — ĐẮC ĐỊA**, đối cung có **Tử Vi** → cách cục **thông
minh, mưu trí, tầm nhìn xa**. Không gặp nhiều sát tinh → **xây dựng sự nghiệp
lớn**, nắm **quyền lực kinh tế**.`,

    chiTiet: `## Tham Lang tại Tý (hãm địa)

⚠️ **Tham Lang an Mệnh tại Tý rơi vào hãm địa** — còn gọi là cách **"Phiếm
Thủy Đào Hoa"** (đào hoa trôi nổi).

**Đặc điểm:**
- Tính **đào hoa và lãng mạn biểu hiện rất mạnh**
- Cũng dễ **sa vào tửu sắc, cờ bạc**
- Cuộc đời đương số thường **phiêu bạt**
- **Tình duyên lận đận**, khó ổn định lâu dài

## Tham Lang tại Ngọ (đắc địa)

✅ **Tại Ngọ, Tham Lang đắc địa**, **đối cung có sao Tử Vi** → tạo nên cách cục:
- **Thông minh**
- **Mưu trí**
- **Tầm nhìn xa**

**Nếu không gặp nhiều sát tinh:**
- Mệnh chủ có thể **xây dựng sự nghiệp lớn**
- Nắm giữ **quyền lực về kinh tế**`,
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
    tomTat: `✅ **Tham Lang Mệnh tại Sửu / Mùi — MIẾU ĐỊA**, đồng cung **Vũ Khúc**
→ cách **"VŨ THAM ĐỒNG HÀNH"**.

→ Mệnh cách **"TIỀN BẦN HẬU PHÚ"**: tuổi trẻ vất vả nhưng **trung và hậu vận
RẤT GIÀU CÓ**.

⚠️ Tuy nhiên, do ảnh hưởng của **Vũ Khúc cô độc** — cuộc sống **nội tâm cô
đơn, ít tri kỷ**.`,

    chiTiet: `## Cách "Vũ Tham đồng hành"

Sửu và Mùi là **hai cung miếu địa** của Mệnh Tham Lang:
- **Đồng cung với Vũ Khúc**
- → Hình thành cách **"Vũ Tham đồng hành"**

## Mệnh cách "tiền bần hậu phú"

- **Tuổi trẻ vất vả**
- Nhưng **trung và hậu vận rất giàu có**

## ⚠️ Cô đơn nội tâm

Tuy nhiên, do ảnh hưởng của **Vũ Khúc cô độc:**
- Cuộc sống **nội tâm thường cô đơn**
- **Ít tri kỷ**`,
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
    tomTat: `**Tham Lang Mệnh tại Dần / Thân — ĐƠN THỦ**, là vị trí **khá tốt**.

✅ **Tại Dần:** mệnh chủ dễ **thành công sớm** — thiếu niên đã có **danh tiếng**.

⚠️ **Tại Thân:** cuộc đời **nhiều tranh luận, thị phi** — thành công đến từ
sự **phấn đấu bền bỉ**.`,

    chiTiet: `## Đặc điểm chung

Ở Dần và Thân, cung Mệnh có Tham Lang **đơn thủ** — là vị trí **khá tốt**.

## Tại Dần

✅ Mệnh chủ dễ **thành công sớm**:
- **Thiếu niên đã có danh tiếng**

## Tại Thân

⚠️ Khi giải đoán lá số bói mệnh, vị trí Thân tiết lộ:
- Cuộc đời **nhiều tranh luận, thị phi**
- Thành công đến từ **sự phấn đấu bền bỉ**`,
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
    tomTat: `**Tham Lang Mệnh tại Mão / Dậu — đồng cung TỬ VI** → cách **"TỬ
THAM MÃO DẬU"**, còn gọi là **"ĐÀO HOA PHẠM CHỦ"**.

**Đặc tính:** dục vọng và ham muốn hưởng thụ **RẤT MẠNH**.

✅ **Hội cát tinh:** đương số dễ trở thành **nghệ sĩ, người sáng tạo xuất chúng**.

⚠️ **Hội hung tinh:** sa đà **cám dỗ**, **chán nản đời sống thế tục** → có
xu hướng tìm đến **TU HÀNH**.`,

    chiTiet: `## Cách "Tử Tham Mão Dậu" — Đào Hoa Phạm Chủ

Tham Lang tại **Mão / Dậu** đồng cung với **Tử Vi** → tạo thành cách **"Tử
Tham Mão Dậu"**, còn gọi là **"Đào Hoa Phạm Chủ"** (đào hoa phạm vào sao chủ).

## Đặc tính

**Dục vọng và ham muốn hưởng thụ rất mạnh.**

## ✅ Hội cát tinh

Đương số dễ trở thành:
- **Nghệ sĩ**
- **Người sáng tạo xuất chúng**

## ⚠️ Hội hung tinh

- Có nguy cơ **sa đà vào cám dỗ**
- **Chán nản đời sống thế tục**
- Có xu hướng tìm đến **tu hành**`,
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
    tomTat: `✅ **Tham Lang tại Thìn / Tuất — VƯỢNG ĐỊA**, thuộc thế **THIÊN LA
- ĐỊA VÕNG**.

Mệnh chủ:
- Có **tài kinh doanh**
- **Tham vọng lớn**
- Thường **phát đạt sau tuổi 30**

⚠️ Tuy nhiên, con đường đi đến thành công phải trải qua **nhiều biến cố và
thử thách**.`,

    chiTiet: `## Cấu trúc

**Thìn và Tuất** là hai cung **vượng địa**, thuộc thế **"Thiên La - Địa Võng"**.

## Đặc tính

Mệnh chủ:
- Có **tài kinh doanh**
- **Tham vọng lớn**
- Thường **phát đạt sau tuổi 30**

## ⚠️ Thử thách

Tuy nhiên, con đường đi đến thành công phải trải qua:
- **Nhiều biến cố**
- **Nhiều thử thách**`,
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
    tomTat: `⚠️ **Tham Lang tại Tỵ / Hợi — HÃM ĐỊA**, đồng cung **Liêm Trinh**
→ cách **"LIÊM THAM TỴ HỢI"**, còn gọi **"HÌNH NGỤC NAN ĐÀO"** (khó thoát
ngục hình).

**Tính cách:** **liều lĩnh** — dễ vướng:
- **Tình ái phức tạp**
- Các **rắc rối pháp luật**

✅ Cứu cánh: **cát tinh hóa giải**.`,

    chiTiet: `## Cách "Liêm Tham Tỵ Hợi"

Mệnh Tham Lang ở **Tỵ / Hợi** là vị trí **hãm địa**, đồng cung với **Liêm Trinh**:
- → Tạo thành cách **"Liêm Tham Tỵ Hợi"**
- Còn gọi là **"Hình ngục nan đào"** (khó thoát ngục hình)

## Tính cách

Đương số:
- **Liều lĩnh**

→ Dễ vướng vào:
- **Tình ái phức tạp**
- Các **rắc rối pháp luật**

## Cứu cánh

Nếu được **cát tinh hóa giải**.`,
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
    tomTat: `**Tham Lang tại Quan Lộc:** sự nghiệp liên quan **giải trí, vui chơi,
nghệ thuật**. Làm giàu nhờ **khả năng xã giao**, dễ thịnh vượng trong **mua
bán**.

**+ Sao đào hoa đồng độ:** nghề liên quan đến **người khác giới** hoặc **tiêu
dùng, trang điểm**.

✅ **Đắc địa:** thích hợp các nghề **khai sáng** hoặc **kinh doanh phong cách
đặc biệt** → dễ thành công.`,

    chiTiet: `## Đặc điểm chung

Tham Lang thủ cung Quan chủ về:
- Sự nghiệp liên quan đến **giải trí, vui chơi**
- Hoặc có tính chất **nghệ thuật**

**Xu hướng làm giàu:**
- Thường nhờ **khả năng xã giao**
- Dễ thịnh vượng trong việc **mua bán**

## + Sao đào hoa đồng độ

Nghề nghiệp phần nhiều sẽ liên quan đến:
- **Người khác giới**
- Hoặc thiên về công việc **tiêu dùng, trang điểm**, ...

## ✅ Đắc địa

Thích hợp với những nghề nghiệp:
- Có tính **khai sáng**
- Hoặc có **phong cách kinh doanh đặc biệt**

→ Nhờ vậy mà dễ đi đến **thành công**.`,
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
    tomTat: `**Tham Lang tại Tài Bạch:** **phóng khoáng, rộng rãi** nhưng biết
**tính toán + kiếm tiền giỏi**. Tuy nhiên **không giỏi giữ tiền** — thiên về
**"lấy công làm thủ"**. Xem entry chuyên biệt theo trạng thái và bộ kết hợp.`,

    chiTiet: `## Tính cách tài chính

Tham Lang ở cung Tài chủ về người:
- **Phóng khoáng, rộng rãi**
- Nhưng vẫn biết cách **tính toán và kiếm tiền giỏi**

**Tuy nhiên:** Tham Lang **không giỏi giữ tiền** — thiên về khuynh hướng
**"lấy công làm thủ"**.

→ Diễn giải theo trạng thái và bộ kết hợp được tách thành luận giải riêng.`,
  },

  {
    id: 'tham-lang-tai-tai-bach-dac-mieu-vuong',
    title: 'Tham Lang Đắc / Miếu / Vượng tại Tài Bạch',
    sao: ['Tham Lang'],
    cung: ['Tài Bạch'],
    trangThai: ['Đắc', 'Miếu', 'Vượng'],
    doUuTien: 80,
    tomTat: `✅ **Tham Lang ĐẮC / MIẾU / VƯỢNG tại Tài Bạch:** **dễ kiếm tiền**,
**nhanh phát đạt**, phù hợp các nghề **buôn bán, kinh doanh** → trở nên **giàu
có**.`,
  },

  {
    id: 'tham-lang-tai-tai-bach-hoa-ky',
    title: 'Tham Lang Hóa Kỵ tại Tài Bạch',
    sao: ['Tham Lang'],
    cung: ['Tài Bạch'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 75,
    tomTat: `⚠️ **Tham Lang Hóa Kỵ tại Tài Bạch:** kiếm tiền dễ vướng **thị phi,
tranh chấp tiền bạc**.`,
  },

  {
    id: 'tham-lang-tai-tai-bach-liem-trinh',
    title: 'Tham Lang tại Tài Bạch + Liêm Trinh',
    sao: ['Tham Lang'],
    cung: ['Tài Bạch'],
    ketHop: ['Liêm Trinh'],
    doUuTien: 75,
    tomTat: `⚠️ **Tham Lang tại Tài Bạch + Liêm Trinh:** sẽ phải **vất vả** trong
vấn đề tài chính.`,
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
    tomTat: `**Tham Lang tại Phụ Mẫu:** đặc tính cha mẹ thay đổi theo trạng
thái + bộ kết hợp — xem entry chuyên biệt.`,

    chiTiet: `## Tổng quan

Tham Lang tại Phụ Mẫu chủ về cha mẹ — biểu hiện thay đổi theo trạng thái và
bộ kết hợp.

→ Diễn giải theo trạng thái + bộ kết hợp được tách thành luận giải riêng.`,
  },

  {
    id: 'tham-lang-tai-phu-mau-mieu-vuong',
    title: 'Tham Lang Miếu / Vượng tại Phụ Mẫu',
    sao: ['Tham Lang'],
    cung: ['Phụ Mẫu'],
    trangThai: ['Miếu', 'Vượng'],
    doUuTien: 78,
    tomTat: `✅ **Tham Lang MIẾU / VƯỢNG tại Phụ Mẫu:** cha mẹ **sống thọ, sức khỏe
tốt**.`,
  },

  {
    id: 'tham-lang-tai-phu-mau-ham',
    title: 'Tham Lang Hãm tại Phụ Mẫu',
    sao: ['Tham Lang'],
    cung: ['Phụ Mẫu'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `⚠️ **Tham Lang HÃM tại Phụ Mẫu:** hôn nhân cha mẹ **không bền chặt,
dễ ly biệt**.`,
  },

  {
    id: 'tham-lang-tai-phu-mau-linh-hoa-khong-kiep',
    title: 'Tham Lang tại Phụ Mẫu + Linh Tinh + Hỏa Tinh + Không Kiếp (đắc)',
    sao: ['Tham Lang'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Linh Tinh', 'Hỏa Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `✅ **Tham Lang tại Phụ Mẫu + Linh Tinh + Hỏa Tinh + Không Kiếp đồng
hội ở vị trí Đắc địa:** cha mẹ **giàu có, an nhàn**.`,
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
    tomTat: `**Tham Lang tại Phu Thê:** đặc tính hôn nhân thay đổi theo trạng
thái và giới tính — chia thành các entry chuyên biệt.

⚠️ Tổng quát: **ly hôn rồi tái hôn sẽ càng BẤT LỢI**.`,

    chiTiet: `## Tổng quan

Tham Lang tại Phu Thê chủ về hôn nhân — diễn giải theo trạng thái và giới
tính được tách thành luận giải riêng.

## ⚠️ Tái hôn

Trong mọi trường hợp, nếu **ly hôn rồi tái hôn** sẽ càng **bất lợi**.`,
  },

  {
    id: 'tham-lang-tai-phu-the-vuong',
    title: 'Tham Lang Vượng tại Phu Thê',
    sao: ['Tham Lang'],
    cung: ['Phu Thê'],
    trangThai: ['Vượng'],
    doUuTien: 80,
    tomTat: `✅ **Tham Lang VƯỢNG tại Phu Thê:** yếu tố đào hoa giảm nhẹ → **vợ
chồng tài giỏi, hôn nhân hạnh phúc**. Dù có sát tinh, sóng gió chỉ ở **trước hôn
nhân**. Nên **kết hôn muộn**.`,
  },

  {
    id: 'tham-lang-tai-phu-the-ham-nam',
    title: 'Tham Lang Hãm tại Phu Thê - Nam mệnh',
    sao: ['Tham Lang'],
    cung: ['Phu Thê'],
    trangThai: ['Hãm'],
    gioiTinh: 'Nam',
    doUuTien: 78,
    tomTat: `⚠️ **Nam mệnh — Tham Lang HÃM tại Phu Thê:** nên lấy **vợ lớn tuổi
hơn mình**.`,
  },

  {
    id: 'tham-lang-tai-phu-the-ham-nu',
    title: 'Tham Lang Hãm tại Phu Thê - Nữ mệnh',
    sao: ['Tham Lang'],
    cung: ['Phu Thê'],
    trangThai: ['Hãm'],
    gioiTinh: 'Nữ',
    doUuTien: 78,
    tomTat: `⚠️ **Nữ mệnh — Tham Lang HÃM tại Phu Thê:** cần lấy chồng **xứng
đôi** mới tránh sự cố.`,
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
    tomTat: `**Tham Lang tại Tử Tức:** quan hệ cha con phụ thuộc lớn vào các sao
đi kèm — gặp cát tinh thì hòa hợp, gặp sát/kỵ thì bất hòa.`,

    chiTiet: `## ✅ Gặp cát tinh

- Chủ về **cha con hòa hợp**
- Con cái **tài hoa, ngoan ngoãn**

## ⚠️ Gặp sao sát / sao kị

- Chủ về **cha con bất hòa**
- Con cái **xa cha mẹ**
- Hay **ham vui** khiến cuộc đời **gian truân, vất vả**`,
  },

  {
    id: 'tham-lang-tai-tu-tuc-cat-tinh',
    title: 'Tham Lang tại Tử Tức + Cát tinh',
    sao: ['Tham Lang'],
    cung: ['Tử Tức'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 70,
    tomTat: `✅ **Tham Lang tại Tử Tức + Cát tinh:** chủ về **cha con hòa hợp**,
con cái **tài hoa, ngoan ngoãn**.`,
  },

  {
    id: 'tham-lang-tai-tu-tuc-sat-ky',
    title: 'Tham Lang tại Tử Tức + Sát / Kỵ',
    sao: ['Tham Lang'],
    cung: ['Tử Tức'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `⚠️ **Tham Lang tại Tử Tức + Sát / Kỵ:** chủ về **cha con bất hòa**,
con cái **xa cha mẹ**, hay **ham vui** khiến cuộc đời **gian truân, vất vả**.`,
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
    tomTat: `✅ **Tham Lang nhập Miếu tại Điền Trạch:** được **thừa kế tổ nghiệp**
gia đình để lại.

✅ **+ Hỏa Tinh / Linh Tinh đồng độ:** tự bản thân có thể **mở rộng tài sản,
mua bất động sản**.

→ Tuy nhiên, cung Điền Trạch Tham Lang nên **TỰ MÌNH GÂY DỰNG SỰ NGHIỆP** thì
mới **lâu dài**.`,

    chiTiet: `## Tham Lang nhập Miếu

- Chủ về được **thừa kế tổ nghiệp gia đình** để lại

## + Hỏa Tinh / Linh Tinh đồng độ

- Tự bản thân có thể **mở rộng tài sản**
- **Mua bất động sản**, ...

## Lời khuyên

Tuy nhiên, cung Điền Trạch Tham Lang nên **tự mình gây dựng sự nghiệp** thì
mới được **lâu dài**.`,
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
    tomTat: `✅ **Tham Lang tại Phúc Đức:** **phát huy ưu điểm**, đem lại nhiều
**may mắn**. Xem entry chuyên biệt theo Vũ Khúc / trạng thái Hãm.`,

    chiTiet: `## Đặc điểm chung

Tham Lang chủ cung Phúc Đức sẽ:
- **Phát huy những ưu điểm** của sao
- Đem lại nhiều **may mắn**

→ Diễn giải theo trạng thái + bộ kết hợp được tách thành luận giải riêng.`,
  },

  {
    id: 'tham-lang-tai-phuc-duc-vu-khuc',
    title: 'Tham Lang tại Phúc Đức + Vũ Khúc',
    sao: ['Tham Lang'],
    cung: ['Phúc Đức'],
    ketHop: ['Vũ Khúc'],
    doUuTien: 75,
    tomTat: `✅ **Tham Lang tại Phúc Đức + Vũ Khúc đồng hợp:** họ hàng nhiều người
**giàu nhờ buôn bán**, **phúc lộc đầy đủ**.`,
  },

  {
    id: 'tham-lang-tai-phuc-duc-vuong-vu-khuc',
    title: 'Tham Lang Vượng tại Phúc Đức + Vũ Khúc',
    sao: ['Tham Lang'],
    cung: ['Phúc Đức'],
    trangThai: ['Vượng'],
    ketHop: ['Vũ Khúc'],
    doUuTien: 80,
    tomTat: `✅ **Tham Lang VƯỢNG tại Phúc Đức + Vũ Khúc:** được hưởng **phúc thọ**,
có **hậu vận**, họ hàng cũng được **vinh hoa phú quý**.`,
  },

  {
    id: 'tham-lang-tai-phuc-duc-ham-dao-hong',
    title: 'Tham Lang Hãm tại Phúc Đức + Đào Hồng',
    sao: ['Tham Lang'],
    cung: ['Phúc Đức'],
    trangThai: ['Hãm'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 78,
    tomTat: `⚠️ **Tham Lang HÃM tại Phúc Đức + Đào Hoa / Hồng Loan:** cuộc đời
**phong lưu**, **khí chất và tài nghệ** khiến **người khác giới chao đảo**.`,
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
    tomTat: `**Tham Lang tại Nô Bộc:** **nhiều bạn bè, nhiều mối quan hệ xã giao**.

✅ **+ Cát tinh:** được **trợ lực từ người tài giỏi**.

⚠️ **Không có sao tốt:** người dưới quyền **không nhờ cậy được**, dễ có lòng
**xâm phạm lợi ích bản thân**.`,

    chiTiet: `## Đặc điểm chung

Tại cung Nô, Tham Lang chủ về:
- **Nhiều bạn bè**
- **Nhiều mối quan hệ xã giao**

## Cát kết hợp

Tuy nhiên vẫn cần có các **cát tinh** thì mới được **trợ lực từ những người
tài giỏi**.

## ⚠️ Không có sao tốt

- Người dưới quyền **không nhờ cậy được**
- Dễ có lòng **xâm phạm lợi ích của bản thân**`,
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
    tomTat: `✅ **Tham Lang tại Thiên Di Vượng địa:** chủ về được **người dìu dắt**,
được **hỗ trợ**, tạo cơ hội phát triển.

✅ **+ Hỏa Tinh / Linh Tinh đồng độ:** thiên di có thể giúp đỡ để trở nên
**giàu có**.`,

    chiTiet: `## Vượng địa

Chủ về:
- Được **người dìu dắt**
- Được **hỗ trợ**
- Tạo cơ hội để **phát triển**

## + Hỏa Tinh / Linh Tinh đồng độ

Thiên Di có thể giúp đỡ để trở nên **giàu có**.`,
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
    tomTat: `**Tham Lang tại Huynh Đệ:** anh em **hòa hợp**, **giao du rộng**,
**anh em đông**.

⚠️ **+ Đào Hoa đồng hội:** chị em gái dễ **vất vả đường tình duyên**.`,

    chiTiet: `## Đặc điểm chung

Tham Lang ở cung Huynh Đệ đều chủ về:
- Anh em **hòa hợp**
- **Giao du rộng**
- **Anh em đông**

## ⚠️ + Đào Hoa đồng hội

- Chị em gái dễ **vất vả đường tình duyên**`,
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
    tomTat: `**Tham Lang thuộc DƯƠNG MỘC + còn thuộc THỦY** → tại Tật Ách chủ
về **bệnh GAN, THẬN, sinh dục**.

→ Diễn giải theo trạng thái được tách thành luận giải riêng.`,

    chiTiet: `## Bệnh chính

Tham Lang thuộc **dương Mộc**, còn thuộc **Thủy** → tại Tật Ách chủ về:
- **Bệnh gan**
- **Bệnh thận**
- Hoặc **bệnh sinh dục**
- ...

→ Diễn giải theo trạng thái được tách thành luận giải riêng.`,
  },

  {
    id: 'tham-lang-tai-tat-ach-mieu-vuong',
    title: 'Tham Lang Miếu / Vượng tại Tật Ách',
    sao: ['Tham Lang'],
    cung: ['Tật Ách'],
    trangThai: ['Miếu', 'Vượng'],
    doUuTien: 75,
    tomTat: `✅ **Tham Lang MIẾU / VƯỢNG tại Tật Ách:** có thể **giảm bớt tai
họa, bệnh tật**.`,
  },
];
