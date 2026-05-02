import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THIÊN VIỆT - Lục Cát Tinh, Quý Tinh
 *
 * Phần chung của cặp Khôi Việt (vị trí miếu hãm, "Khôi Việt thủ Mệnh",
 * "Song Quý Nhân") đã viết tại file thien-khoi.ts với tag cả 2 sao.
 * File này chỉ viết phần RIÊNG của Thiên Việt + 11 cung.
 */
export const luanGiai_ThienViet: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung của sao Thiên Việt
  // ============================================================
  {
    id: 'thien-viet-tinh-chat-chung',
    title: 'Thiên Việt - Đặc tính chung',
    sao: ['Thiên Việt'],
    doUuTien: 30,
    tomTat: `**Thiên Việt** (tên gọi khác: **Âm Quý Nhân**) thuộc bộ **Lục Cát
Tinh**, **Nam Đẩu Tinh**, ngũ hành **Hỏa** (Âm Hỏa đới Mộc).

**Hóa khí:** **Quý Tinh** — chủ về **khoa giáp, quyền tước**.

**Cùng với Thiên Khôi** = bộ **"Khôi Việt"** = **"Thiên Ất Quý Nhân"** — biểu
tượng **may mắn, học hành thành đạt, sự che chở của quý nhân**.

**Khác Thiên Khôi:**
- Khôi = mềm dẻo, tình cảm; **Việt = lý trí, cứng rắn, nguyên tắc**
- Khôi = đầu; **Việt = vai**
- Khôi = văn bằng giấy khen; **Việt = bút nghiên**
- Khôi mạnh hơn Việt về tài năng quyền uy`,

    chiTiet: `## Vận trình

- **Sự nghiệp:** học hành **hanh thông, dễ đỗ đạt**, công việc thuận lợi, **thăng
  tiến nhanh nhờ quý nhân nâng đỡ**. Vị trí đẹp có thể giữ chức vụ cao
- **Duyên vận:** người hôn phối **xuất thân cao quý**, đoan chính, sự nghiệp
  vững vàng. Hội nhiều sao sáng → hôn nhân **viên mãn**
- **Tài lộc:** có duyên với tiền bạc, dễ được người **chức quyền nâng đỡ**.
  **+ Lộc Tồn / Tả Hữu / Hóa Quyền:** tài lộc vượng

## Lưu ý

📌 Các nguyên tắc chung của cặp Khôi Việt (vị trí miếu hãm, không an Thìn Tuất,
nguyên tắc Tuần Triệt đảo ngược, cách "Ư gia quốc vi nhân trưởng", "Song Quý
Nhân") đã được viết tại sao Thiên Khôi.`,
  },

  // ============================================================
  // 2. Bộ sao tốt riêng của Thiên Việt
  // ============================================================
  {
    id: 'thien-viet-bo-sao-tot-xuong-khuc-quang-quy',
    title: 'Thiên Việt + Xương Khúc + Quang Quý - Văn bằng cao nhất',
    sao: ['Thiên Việt'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Ân Quang', 'Thiên Quý'],
    doUuTien: 50,
    tomTat: `🌟 **Thiên Việt + Xương Khúc + Quang Quý:** thi đỗ **các văn bằng cao
nhất**, "Tọa Khôi hướng Việt" thì đỗ cao lúc tuổi còn trẻ.`,
  },

  {
    id: 'thien-viet-bo-sao-tot-nhat-nguyet',
    title: 'Thiên Việt + Nhật Nguyệt hãm - Phục hồi sức sáng',
    sao: ['Thiên Việt'],
    ketHop: ['Thái Dương', 'Thái Âm'],
    doUuTien: 50,
    tomTat: `🌟 **Thiên Việt + Nhật Nguyệt hãm:** **phục hồi sức sáng** cho Nhật
Nguyệt hãm — đây là cách cứu giải quý.`,
  },

  {
    id: 'thien-viet-bo-sao-tot-hoa-khoa',
    title: 'Thiên Việt + Hóa Khoa / Thai Phụ / Phong Cáo - Quý cách',
    sao: ['Thiên Việt'],
    ketHop: ['Hóa Khoa'],
    doUuTien: 50,
    tomTat: `🌟 **Thiên Việt + Hóa Khoa / Thai Phụ / Phong Cáo:** quý cách.`,
  },

  {
    id: 'thien-viet-bo-sao-tot-thai-phu',
    title: 'Thiên Việt + Thai Phụ - Quý cách',
    sao: ['Thiên Việt'],
    ketHop: ['Thai Phụ'],
    doUuTien: 50,
    tomTat: `🌟 **Thiên Việt + Thai Phụ:** quý cách.`,
  },

  {
    id: 'thien-viet-bo-sao-tot-phong-cao',
    title: 'Thiên Việt + Phong Cáo - Quý cách',
    sao: ['Thiên Việt'],
    ketHop: ['Phong Cáo'],
    doUuTien: 50,
    tomTat: `🌟 **Thiên Việt + Phong Cáo:** quý cách.`,
  },

  {
    id: 'thien-viet-bo-sao-tot-da-ky',
    title: 'Thiên Việt + Đà Kỵ - Kẻ sĩ ẩn dật',
    sao: ['Thiên Việt'],
    ketHop: ['Đà La', 'Hóa Kỵ'],
    doUuTien: 50,
    tomTat: `⚠️ **Thiên Việt + Đà La + Hóa Kỵ:** **"kẻ sĩ ẩn dật"** — có tài nhưng
ẩn mình, không được trọng dụng.`,
  },

  // ============================================================
  // 3. Thiên Việt tại Mệnh
  // ============================================================
  {
    id: 'thien-viet-tai-menh',
    title: 'Thiên Việt tại Mệnh',
    sao: ['Thiên Việt'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `**Thiên Việt cư Mệnh** — **"Âm Quý Nhân"** mang **may mắn**, sự **che
chở của quý nhân**.

Tính cách: **học hành giỏi giang, trí tuệ sắc sảo**, biết **nắm bắt cơ hội**, có
**tố chất lãnh đạo và khả năng điều hành tập thể**.

Khác Thiên Khôi: Việt nổi bật với **lý trí, cứng rắn và nguyên tắc**.

**Công danh:** mở ra nhiều **cơ may thuận lợi**, thi cử đỗ đạt, công việc hanh
thông, **được hưởng lợi từ chính sách hay thời thế**. Thường gặp **thời cơ vàng**
trong sự nghiệp.`,
  },

  {
    id: 'thien-viet-tai-menh-sat-tinh',
    title: 'Thiên Việt tại Mệnh + Lục Sát / Hóa Kỵ - Tai họa bất ngờ',
    sao: ['Thiên Việt'],
    cung: ['Mệnh'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 75,
    tomTat: `⚠️ **Thiên Việt + Lục Sát tại Mệnh:** cảnh báo **tai họa bất ngờ** —
thương tích vùng **đầu, vai, thần kinh**, hoặc **điện giật, vũ khí, tai nạn xe
cộ**.`,
  },

  {
    id: 'thien-viet-tai-menh-hoa-ky',
    title: 'Thiên Việt tại Mệnh + Hóa Kỵ - Tai họa bất ngờ',
    sao: ['Thiên Việt'],
    cung: ['Mệnh'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 75,
    tomTat: `⚠️ **Thiên Việt + Hóa Kỵ tại Mệnh:** cảnh báo **tai họa bất ngờ** —
thương tích vùng **đầu, vai, thần kinh**.`,
  },

  {
    id: 'thien-viet-tai-menh-thien-hinh',
    title: 'Thiên Việt tại Mệnh + Thiên Hình - Tai họa bất ngờ',
    sao: ['Thiên Việt'],
    cung: ['Mệnh'],
    ketHop: ['Thiên Hình'],
    doUuTien: 75,
    tomTat: `⚠️ **Thiên Việt + Thiên Hình tại Mệnh:** cảnh báo **tai họa bất ngờ**
— thương tích vùng **đầu, vai, thần kinh**.`,
  },

  // ============================================================
  // 4. Thiên Việt tại Phụ Mẫu
  // ============================================================
  {
    id: 'thien-viet-tai-phu-mau',
    title: 'Thiên Việt tại Phụ Mẫu',
    sao: ['Thiên Việt'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Thiên Việt tại Phụ Mẫu** + Thiên Khôi / Thai Phụ / Phong Cáo / Hóa
Khoa: cha mẹ thuộc **tầng lớp tri thức**, có **chỗ đứng trong xã hội**, dễ là
**con trưởng hoặc trụ cột** trong gia đình.

Công danh cha mẹ ít trắc trở, được **quý nhân nâng đỡ**, sự nghiệp **thăng tiến**.`,
  },

  {
    id: 'thien-viet-tai-phu-mau-cat-tinh',
    title: 'Thiên Việt tại Phụ Mẫu + Lục Cát - Cha mẹ danh vị cao',
    sao: ['Thiên Việt'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 70,
    tomTat: `🌟 **Thiên Việt + Lục Cát tại Phụ Mẫu:** cha mẹ có **danh vị cao**,
con cái **hưởng phúc** và có điều kiện phát triển.`,
  },

  // ============================================================
  // 5. Thiên Việt tại Phúc Đức
  // ============================================================
  {
    id: 'thien-viet-tai-phuc-duc',
    title: 'Thiên Việt tại Phúc Đức',
    sao: ['Thiên Việt'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `🌟 **Thiên Việt tại Phúc Đức:** dòng tộc có **nhiều người thông minh,
đỗ đạt thành danh**, mang **vinh quang** về cho tổ tiên.`,
  },

  {
    id: 'thien-viet-tai-phuc-duc-khoi',
    title: 'Thiên Việt tại Phúc Đức + Thiên Khôi - Phúc trời chở che',
    sao: ['Thiên Việt'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Khôi'],
    doUuTien: 73,
    tomTat: `🌟 **Thiên Việt + Thiên Khôi tại Phúc Đức:** phúc phần như **trời đất
chở che**, **đông người trường thọ**, **nề nếp tốt đẹp truyền đời**.`,
  },

  {
    id: 'thien-viet-tai-phuc-duc-hoa-khoa',
    title: 'Thiên Việt tại Phúc Đức + Hóa Khoa',
    sao: ['Thiên Việt'],
    cung: ['Phúc Đức'],
    ketHop: ['Hóa Khoa'],
    doUuTien: 73,
    tomTat: `🌟 **Thiên Việt + Hóa Khoa tại Phúc Đức:** phúc phần như **trời đất
chở che**, **đông người trường thọ**, **nề nếp tốt đẹp truyền đời**.`,
  },

  {
    id: 'thien-viet-tai-phuc-duc-quan-phuc',
    title: 'Thiên Việt tại Phúc Đức + Thiên Quan + Thiên Phúc',
    sao: ['Thiên Việt'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Quan', 'Thiên Phúc'],
    doUuTien: 73,
    tomTat: `🌟 **Thiên Việt + Thiên Quan + Thiên Phúc tại Phúc Đức:** phúc phần
như **trời đất chở che**, **đông người trường thọ**, **nề nếp tốt đẹp truyền đời**.`,
  },

  {
    id: 'thien-viet-tai-phuc-duc-quang-quy',
    title: 'Thiên Việt tại Phúc Đức + Ân Quang + Thiên Quý',
    sao: ['Thiên Việt'],
    cung: ['Phúc Đức'],
    ketHop: ['Ân Quang', 'Thiên Quý'],
    doUuTien: 73,
    tomTat: `🌟 **Thiên Việt + Ân Quang + Thiên Quý tại Phúc Đức:** phúc phần như
**trời đất chở che**, **đông người trường thọ**, **nề nếp tốt đẹp truyền đời**.`,
  },

  {
    id: 'thien-viet-tai-phuc-duc-hoa-linh',
    title: 'Thiên Việt tại Phúc Đức + Hỏa Linh - Đoản mệnh tai nạn',
    sao: ['Thiên Việt'],
    cung: ['Phúc Đức'],
    ketHop: ['Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 73,
    tomTat: `⚠️ **Thiên Việt + Hỏa Tinh + Linh Tinh tại Phúc Đức:** trong họ dễ có
người **đoản mệnh hoặc tai nạn bất ngờ**, phúc khí khó giữ bền lâu.`,
  },

  {
    id: 'thien-viet-tai-phuc-duc-thien-hinh',
    title: 'Thiên Việt tại Phúc Đức + Thiên Hình',
    sao: ['Thiên Việt'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Hình'],
    doUuTien: 73,
    tomTat: `⚠️ **Thiên Việt + Thiên Hình tại Phúc Đức:** trong họ dễ có người
**đoản mệnh hoặc tai nạn bất ngờ**, phúc khí khó giữ bền lâu.`,
  },

  {
    id: 'thien-viet-tai-phuc-duc-hoa-ky',
    title: 'Thiên Việt tại Phúc Đức + Hóa Kỵ',
    sao: ['Thiên Việt'],
    cung: ['Phúc Đức'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 73,
    tomTat: `⚠️ **Thiên Việt + Hóa Kỵ tại Phúc Đức:** trong họ dễ có người **đoản
mệnh hoặc tai nạn bất ngờ**, phúc khí khó giữ bền lâu.`,
  },

  // ============================================================
  // 6. Thiên Việt tại Điền Trạch
  // ============================================================
  {
    id: 'thien-viet-tai-dien-trach',
    title: 'Thiên Việt tại Điền Trạch',
    sao: ['Thiên Việt'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Thiên Việt + Thiên Khôi + cát tinh:** chuyện nhà cửa đất đai **thuận
lợi** → dựng **cơ ngơi vững chắc**, **an cư rồi lạc nghiệp**.

Nhà ở **khang trang, sáng sủa**, vị trí cao ráo (đầu ngõ, đầu đường, chung cư
cao tầng).

Gia đình giữ **nề nếp, trọng văn hóa** → được bà con láng giềng tin tưởng, **giao
phó trách nhiệm cộng đồng**.`,
  },

  {
    id: 'thien-viet-tai-dien-trach-hoa-linh',
    title: 'Thiên Việt tại Điền Trạch + Hỏa Linh - Cháy nổ',
    sao: ['Thiên Việt'],
    cung: ['Điền Trạch'],
    ketHop: ['Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 70,
    tomTat: `⚠️ **Thiên Việt + Hỏa Tinh + Linh Tinh tại Điền Trạch:** đề phòng
**cháy nổ, chập điện**.`,
  },

  // ============================================================
  // 7. Thiên Việt tại Quan Lộc
  // ============================================================
  {
    id: 'thien-viet-tai-quan-loc',
    title: 'Thiên Việt tại Quan Lộc',
    sao: ['Thiên Việt'],
    cung: ['Quan Lộc'],
    doUuTien: 80,
    tomTat: `🌟 **Thiên Việt tại Quan Lộc:** công danh **rạng rỡ**, sự nghiệp **"một
bước lên mây"**, được **người trên tin tưởng, cấp dưới nể trọng**.

Sự nghiệp phát triển trong các ngành: **công nghệ, cơ điện, y khoa** (đặc biệt
chuyên khoa **đầu, vai, thần kinh**).`,
  },

  {
    id: 'thien-viet-tai-quan-loc-ta-huu',
    title: 'Thiên Việt tại Quan Lộc + Tả Phù + Hữu Bật - Chức vụ cao',
    sao: ['Thiên Việt'],
    cung: ['Quan Lộc'],
    ketHop: ['Tả Phù', 'Hữu Bật'],
    doUuTien: 75,
    tomTat: `🌟 **Thiên Việt + Tả Phù + Hữu Bật tại Quan Lộc:** đảm nhiệm **chức
vụ cao**, quản lý cả tập thể.`,
  },

  {
    id: 'thien-viet-tai-quan-loc-thien-khoi',
    title: 'Thiên Việt tại Quan Lộc + Thiên Khôi - Danh tiếng vang xa',
    sao: ['Thiên Việt'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Khôi'],
    doUuTien: 75,
    tomTat: `🌟 **Thiên Việt + Thiên Khôi tại Quan Lộc:** **danh tiếng vang xa**,
càng về hậu vận càng bền vững.`,
  },

  {
    id: 'thien-viet-tai-quan-loc-xuong-khuc',
    title: 'Thiên Việt tại Quan Lộc + Văn Xương + Văn Khúc',
    sao: ['Thiên Việt'],
    cung: ['Quan Lộc'],
    ketHop: ['Văn Xương', 'Văn Khúc'],
    doUuTien: 75,
    tomTat: `🌟 **Thiên Việt + Văn Xương + Văn Khúc tại Quan Lộc:** **danh tiếng
vang xa**, càng về hậu vận càng bền vững.`,
  },

  {
    id: 'thien-viet-tai-quan-loc-tau-thu',
    title: 'Thiên Việt tại Quan Lộc + Tấu Thư',
    sao: ['Thiên Việt'],
    cung: ['Quan Lộc'],
    ketHop: ['Tấu Thư'],
    doUuTien: 75,
    tomTat: `🌟 **Thiên Việt + Tấu Thư tại Quan Lộc:** **danh tiếng vang xa**, càng
về hậu vận càng bền vững.`,
  },

  // ============================================================
  // 8. Thiên Việt tại Nô Bộc
  // ============================================================
  {
    id: 'thien-viet-tai-no-boc',
    title: 'Thiên Việt tại Nô Bộc',
    sao: ['Thiên Việt'],
    cung: ['Nô Bộc'],
    doUuTien: 78,
    tomTat: `**Thiên Việt tại Nô Bộc:** bạn bè, cấp dưới, học trò **giỏi giang**,
có người trở thành **cánh tay phải đắc lực**.

Dễ gặp **quý nhân quyền thế** giúp đỡ.

🌟 **+ Nhiều sao tốt:** nên kết giao với **người học rộng, có địa vị** để mở
cơ hội lớn.

⚠️ **+ Sát tinh:** tránh gần **người quyền cao chức trọng** kẻo tự rước họa
vào thân.`,
  },

  // ============================================================
  // 9. Thiên Việt tại Thiên Di
  // ============================================================
  {
    id: 'thien-viet-tai-thien-di',
    title: 'Thiên Việt tại Thiên Di',
    sao: ['Thiên Việt'],
    cung: ['Thiên Di'],
    doUuTien: 78,
    tomTat: `🌟 **Thiên Việt tại Thiên Di:** vận may **mỗi khi ra ngoài xã hội**.

Hay gặp **quý nhân dẫn đường chỉ lối**, kết giao được người **tài giỏi, quyền thế**.

Con đường **tha hương / xuất ngoại** gặt hái nhiều **thành tựu và danh tiếng**.

→ Đây là vị trí **CÁT LỢI** — sự nghiệp **lên như diều gặp gió** nhờ **ngoại
duyên, quan hệ xã hội**.`,
  },

  // ============================================================
  // 10. Thiên Việt tại Tật Ách
  // ============================================================
  {
    id: 'thien-viet-tai-tat-ach',
    title: 'Thiên Việt tại Tật Ách',
    sao: ['Thiên Việt'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `**Thiên Việt tại Tật Ách:** **giảm nhẹ tai ương, bệnh tật nhỏ**.

⚠️ **+ Hỏa Linh / Thiên Hình / Thiên Riêu:** nguy cơ **tai nạn về đầu, vai**
hoặc **dao kiếm, điện giật, xe cộ**.

🌟 **+ Thiên Quan - Thiên Phúc:** biết **tu tâm hướng thiện** → hạn nặng **hóa
nhẹ**, quý nhân hỗ trợ, mắc bệnh gặp **thầy giỏi thuốc hay**.`,
  },

  // ============================================================
  // 11. Thiên Việt tại Tài Bạch
  // ============================================================
  {
    id: 'thien-viet-tai-tai-bach',
    title: 'Thiên Việt tại Tài Bạch',
    sao: ['Thiên Việt'],
    cung: ['Tài Bạch'],
    doUuTien: 78,
    tomTat: `🌟 **Thiên Việt tại Tài Bạch:** mở **mối duyên lớn với tiền tài**.

Thường được **quý nhân chỉ lối, nâng đỡ** trong kinh doanh / quản lý tài chính.

🌟 **+ Lộc Tồn / Tả Hữu / Hóa Quyền:** tài lộc **dồi dào**, càng làm càng vượng.

Nhờ **học vấn, danh tiếng, uy tín xã hội** → mở rộng thu nhập, tài chính **ổn
định và thịnh vượng**.`,
  },

  // ============================================================
  // 12. Thiên Việt tại Tử Tức
  // ============================================================
  {
    id: 'thien-viet-tai-tu-tuc',
    title: 'Thiên Việt tại Tử Tức',
    sao: ['Thiên Việt'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Thiên Việt tại Tử Tức:** con sinh ra **thông tuệ, hiếu thuận**, dễ
**làm nên nghiệp lớn** → trở thành **niềm tự hào** của gia đình.

🌟 **+ Nhiều cát tinh:** con cái **quý hiển, có chức quyền** → cha mẹ **rạng nhà
rạng cửa** nhờ con.

⚠️ **+ Thiên Hình / Hỏa Linh:** quá trình **sinh nở khó khăn**, con dễ **tai nạn
nguy hiểm**, cha mẹ phải bận lòng.`,
  },

  // ============================================================
  // 13. Thiên Việt tại Phu Thê
  // ============================================================
  {
    id: 'thien-viet-tai-phu-the',
    title: 'Thiên Việt tại Phu Thê',
    sao: ['Thiên Việt'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `**Thiên Việt tại Phu Thê:** người bạn đời **xuất thân danh giá, đoan
chính**, có **sự nghiệp riêng vững vàng**.

Vợ chồng **trai tài gái sắc**, không chỉ giỏi mà còn có **địa vị khiến người khác
ngưỡng mộ**.

🌟 **+ Thiên Phủ / Nhật Nguyệt sáng / Hóa Lộc Quyền / Thanh Long / Ân Quang -
Thiên Quý:** hôn nhân **viên mãn**, vợ chồng thuận hòa, gắn bó keo sơn đến **răng
long đầu bạc**.`,
  },

  // ============================================================
  // 14. Thiên Việt tại Huynh Đệ
  // ============================================================
  {
    id: 'thien-viet-tai-huynh-de',
    title: 'Thiên Việt tại Huynh Đệ',
    sao: ['Thiên Việt'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Thiên Việt tại Huynh Đệ:** anh chị em **thông tuệ, giỏi giang**, có
**chí tiến thủ**, tạo dựng sự nghiệp **vững vàng**.

⚡ **Quy tắc vai vế:**
- **Thiên Khôi tại Huynh Đệ:** trên thường **có 3 anh chị**
- **Thiên Việt tại Huynh Đệ:** dưới thường **có 3 người em**

Anh chị em vừa tài ba vừa **biết đùm bọc, nương tựa lẫn nhau** — tình cảm gia
đình **gắn bó bền vững**.`,
  },
];
