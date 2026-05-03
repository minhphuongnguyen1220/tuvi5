import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO TỬ VI - Đế Tinh, đứng đầu Bắc Đẩu
 */
export const luanGiai_TuVi: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung của sao Tử Vi
  // ============================================================
  {
    id: 'tu-vi-tinh-chat-chung',
    title: 'Tử Vi - Đặc tính chung',
    sao: ['Tử Vi'],
    doUuTien: 30,
    tomTat: `**Tử Vi (紫薇)** thuộc chòm **Bắc Đẩu**, là **"Đế Tinh"** — sao đứng
đầu của tất cả các sao trong tử vi đẩu số. Hình tượng là **vị vua**, hóa khí là
**tôn quý** — thể hiện khí thế **độc tôn, quyền uy**.

**Cai quản:** cung Quan Lộc và cung Tài Bạch.
**Chủ quản 5 chính tinh:** Liêm Trinh, Thiên Cơ, Thiên Đồng, Vũ Khúc, Thái Dương.

**Vị trí miếu hãm** (Tử Vi **KHÔNG có hãm địa**):
- **Miếu địa:** Ngọ, Dần, Thân (sáng nhất)
- **Vượng địa:** Thìn, Tuất
- **Đắc địa:** Sửu, Mùi
- **Bình hòa:** Tý, Mão, Dậu, Hợi (tốt, không mấy ảnh hưởng)`,

    chiTiet: `## Bản chất "Đế Vương"

Tử Vi là **vua của tất cả các vua**, truyền lệnh cho tất cả các sao. Mang tính
**uy nghiêm, đường bệ, cao quý**.

**Tử Vi cần quần thần phò tá:** một vị vua đơn độc không có người phò tá
(thiếu Tả Phù, Hữu Bật) sẽ trở thành **"cô quân"** — nắm quyền nhưng đơn độc,
nói nhưng không có ai nghe.

## Minh quân hay bạo chúa

Một vị vua có thể là **minh quân hoặc bạo chúa** — tính cách Tử Vi cũng phản
ánh cả hai khía cạnh:
- **Hội cát tinh** (đặc biệt Tả Hữu): minh quân, lãnh đạo có đức
- **Hội hung sát tinh**: bạo chúa, độc đoán, gian xảo

Khi luận giải, cần đánh giá khách quan các sao phụ và cung vị khác để xác định
khía cạnh nào của Tử Vi được bộc lộ nhiều hơn.

## Cách "Bách Quan Triều Củng"

Khi Tử Vi được hội tụ đầy đủ **Tả Phù + Hữu Bật + Thiên Khôi + Thiên Việt**
- trở thành cách **"Bách Quan Triều Củng"**: vua được trăm quan triều bái
**lãnh đạo thực thụ**, được cấp dưới trung thành ủng hộ, có quý nhân đề bạt.`,
  },

  // ============================================================
  // 2. Tử Vi tại Mệnh - tướng mạo
  // ============================================================
  {
    id: 'tu-vi-tai-menh-tuong-mao',
    title: 'Tử Vi tại Mệnh - Tướng mạo',
    sao: ['Tử Vi'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `**Tử Vi cư Mệnh** mang tướng mạo **đoan trang, dáng vóc đẫy đà, khuôn
mặt vuông vức**, da hơi ngăm, dễ gây ấn tượng bởi **khí chất uy nghi và tự tin**.

Dáng người **tầm thước, đậm**, ít người cao (trừ khi đồng cung **Đào Hoa, Hồng
Loan, Tướng Quân, Thiên Tướng** thì to cao). Ăn mặc **tươm tất gọn gàng**, đi
**lưng hơi gù**, đi nhẹ nhàng, làm việc **từ tốn và có phần hơi chậm**.

Có nét **thông minh, có chí hướng, dễ gặp quý nhân nâng đỡ**.
Xem entry chuyên biệt cho từng giới tính.`,
  },

  {
    id: 'tu-vi-tai-menh-tuong-mao-nam',
    title: 'Tử Vi tại Mệnh - Tướng mạo Nam mệnh',
    sao: ['Tử Vi'],
    cung: ['Mệnh'],
    gioiTinh: 'Nam',
    doUuTien: 75,
    tomTat: `**Nam mệnh — Tử Vi cư Mệnh:** **khí khái oai nghiêm**, năng lực **lãnh
đạo tập thể**.`,
  },

  {
    id: 'tu-vi-tai-menh-tuong-mao-nu',
    title: 'Tử Vi tại Mệnh - Tướng mạo Nữ mệnh',
    sao: ['Tử Vi'],
    cung: ['Mệnh'],
    gioiTinh: 'Nữ',
    doUuTien: 75,
    tomTat: `**Nữ mệnh — Tử Vi cư Mệnh:** mặt mày thanh tú, dáng vẻ **đoan trang
nền nã**, biết lo toan, hợp hình mẫu **"vợ hiền mẹ đảm"**.`,
  },

  // ============================================================
  // 2b. Tử Vi tại Mệnh - tính cách theo nhóm vị trí
  // ============================================================
  {
    id: 'tu-vi-tai-menh-tinh-cach-theo-vi-tri',
    title: 'Tử Vi tại Mệnh - Tính cách theo vị trí (chiTiet)',
    sao: ['Tử Vi'],
    cung: ['Mệnh'],
    doUuTien: 50,
    tomTat: `**Tính cách Tử Vi cư Mệnh thay đổi theo vị trí.**
Xem entry chuyên biệt theo trạng thái và chi cụ thể.`,

    chiTiet: `## Tính cách chung Tử Vi cư Mệnh

Người có Tử Vi đóng cung Mệnh thường:
- Hơi **rón rén, rụt rè**, hay cười, **điềm đạm và ít nói**
- Tính tình **thẳng thắn, cương trực, ôn hòa, phước thiện**
- Tự cho mình là **đàn anh đàn chị**, có phần **khó gần khó tiếp xúc**
- Tự cho có quyền và **khả năng áp đặt** lên người khác
- Mang **hình hài người lãnh đạo**, ít nói và quân tử

## Đặc điểm tâm lý

- **KHÔNG bao giờ hứa trước** điều gì khi chưa biết / chưa định hình vấn đề
- **Không giữ thù hận**, sẵn lòng tha thứ (giống Thiên Tướng)
- **Không gây thù chuốc oán**, đặc biệt với người đã từng giúp mình (giống Thiên Đồng)
- Vui vẻ, nhẹ nhàng

## Cách ứng xử với người bạn đời

Đương số có xu hướng **nhường nhịn người bạn đời**, đặc biệt khi về nhà mọi
việc đều bỏ lại phía sau, **hơi nể** người bạn đời.`,
  },

  {
    id: 'tu-vi-tai-menh-mieu',
    title: 'Tử Vi Miếu tại Mệnh - Tôn quý',
    sao: ['Tử Vi'],
    cung: ['Mệnh'],
    chi: ['Dần', 'Thân', 'Ngọ'],
    trangThai: ['Miếu'],
    doUuTien: 82,
    tomTat: `**Tử Vi MIẾU tại Mệnh (Dần / Thân / Ngọ) — TÔN QUÝ:** uy nghi,
nghiêm cẩn, trung hậu, thông minh, làm việc có trách nhiệm. **Lãnh đạo khiến
người khác tâm phục khẩu phục**, chỉ huy tập thể, đạt thành công lớn.`,
  },

  {
    id: 'tu-vi-tai-menh-vuong',
    title: 'Tử Vi Vượng tại Mệnh - Giàu sang',
    sao: ['Tử Vi'],
    cung: ['Mệnh'],
    chi: ['Thìn', 'Tuất'],
    trangThai: ['Vượng'],
    doUuTien: 82,
    tomTat: `**Tử Vi VƯỢNG tại Mệnh (Thìn / Tuất) — GIÀU SANG:** tài trí mưu
lược, oai phong, **giỏi kinh doanh, quản lý tài chính tốt**: cuộc sống giàu
sang thịnh vượng.`,
  },

  {
    id: 'tu-vi-tai-menh-dac',
    title: 'Tử Vi Đắc tại Mệnh - Phúc thọ',
    sao: ['Tử Vi'],
    cung: ['Mệnh'],
    chi: ['Sửu', 'Mùi'],
    trangThai: ['Đắc'],
    doUuTien: 82,
    tomTat: `**Tử Vi ĐẮC tại Mệnh (Sửu / Mùi) — PHÚC THỌ:** thông minh, liều
lĩnh, thao lược, có thiện tâm, **biết hy sinh, suy nghĩ cho mọi người**: phúc
thọ cao hơn người.`,
  },

  {
    id: 'tu-vi-tai-menh-binh',
    title: 'Tử Vi Bình tại Mệnh - Tố chất tốt',
    sao: ['Tử Vi'],
    cung: ['Mệnh'],
    chi: ['Tý', 'Mão', 'Dậu', 'Hợi'],
    trangThai: ['Bình'],
    doUuTien: 80,
    tomTat: `**Tử Vi BÌNH tại Mệnh (Tý / Mão / Dậu / Hợi) — TỐ CHẤT TỐT:** nhân
hậu, hiền lành, có tư tưởng lớn, nhiều người có **tín ngưỡng mạnh, bước vào con
đường tu hành**.`,
  },

  // ============================================================
  // 3. Tử Vi tại Mệnh - tính cách & thế cục tốt-xấu
  // ============================================================
  {
    id: 'tu-vi-tai-menh-tinh-cach',
    title: 'Tử Vi tại Mệnh - Tính cách',
    sao: ['Tử Vi'],
    cung: ['Mệnh'],
    doUuTien: 88,
    tomTat: `**Tử Vi cư Mệnh** = mẫu người có **tinh thần trách nhiệm, cầu toàn**.
Tính ngay thẳng, điềm đạm, **coi trọng danh dự**, thích phân minh rõ ràng, có
**thiên hướng nắm quyền và giỏi quản lý**.

Khuynh hướng **muốn duy trì địa vị tôn quý của bậc "đế vương"**: muốn được tôn
trọng, **thừa nhận, dẫn dắt, thể hiện vai trò trung tâm**.

**"Vật cực tất phản":** quá cầu toàn: chịu thiệt thòi; quyền lực thể hiện
không phù hợp: khó khăn trong các mối quan hệ.`,

    chiTiet: `## Tính chất TỐT vs XẤU (đối xứng)

| Tốt | Xấu |
|---|---|
| **Cầu toàn** | Cầu toàn quá mức, lo xa |
| **Trách nhiệm, bao dung** | Gánh vác mọi thứ: bản thân chịu thiệt |
| **Nhìn xa trông rộng** | Thiếu thực tế, nhiều hoài nghi |
| **Lãnh đạo, quy tụ quyền lực** | Lòng tự tôn lớn, thể hiện quyền lực không phù hợp |
| **Ngoài cứng trong mềm** | Cảm tính, dễ bị lợi dụng |

## Đặc điểm "ngoài cứng trong mềm"

Tử Vi là **người đứng đầu**: không thể bộc lộ áp lực của bản thân cho người
khác: **ngoài cứng, trong mềm**. Đây vừa là sức mạnh (giữ vững vị thế lãnh đạo)
vừa là điểm yếu (chịu thiệt thòi cá nhân).`,
  },

  // ============================================================
  // 4. "Cô quân" - Tử Vi đứng một mình thiếu Tả Hữu
  // ============================================================
  {
    id: 'tu-vi-co-quan',
    title: '"Cô Quân" - Tử Vi đứng một mình thiếu Tả Hữu',
    sao: ['Tử Vi'],
    cung: ['Mệnh'],
    doUuTien: 70,
    tomTat: `**Cách "CÔ QUÂN":** Tử Vi đứng một mình mà **không có cát tinh**,
đặc biệt **thiếu Tả Phù + Hữu Bật**: rơi vào thế cô độc.

Tựa như **người cầm cờ ra trận nhưng thiếu quân theo** — có quyền nhưng không có
ai phò tá: dẫn đến **bảo thủ, độc đoán, khó dung hòa lòng người**, "nói nhưng
không ai nghe".

- **Lời khuyên:** đoán Tử Vi tại Mệnh phải tìm Tả Phù, Hữu Bật, Thiên Khôi,
Thiên Việt trong tam phương.`,
  },

  // ============================================================
  // 5. Bộ sao TỐT của Tử Vi
  // ============================================================
  {
    id: 'tu-vi-bo-sao-tot',
    title: 'Tử Vi - Bộ sao TỐT',
    sao: ['Tử Vi'],
    doUuTien: 50,
    tomTat: `**Tử Vi cần "Bách Quan Triều Củng"** — hội tụ đầy đủ trợ tinh:

- **Tả Phù + Hữu Bật:** quyền lực được củng cố qua giúp đỡ thực tế
- **Thiên Khôi + Thiên Việt:** quý nhân đề bạt, cơ hội thăng tiến
- **Văn Xương + Văn Khúc:** trí tuệ, mưu lược: biến thành **minh quân**
- **Lộc Tồn + Hóa Lộc + Thiên Mã:** nguồn lực tài chính vững chắc
- **Hóa Quyền:** uy quyền bẩm sinh được củng cố
- **Hóa Khoa:** danh tiếng, học vấn, được công nhận`,
  },

  // ============================================================
  // 6. Bộ sao XẤU của Tử Vi
  // ============================================================
  {
    id: 'tu-vi-bo-sao-xau',
    title: 'Tử Vi - Bộ sao XẤU',
    sao: ['Tử Vi'],
    doUuTien: 50,
    tomTat: `**Tử Vi gặp hung sát tinh: biến thành "Bạo Quân" hoặc "Cô Quân":**

- **Kình Dương + Đà La + Hỏa Linh:** từ chính nhân quân tử: tiểu nhân, từ điềm
  đạm: nóng vội, hung bạo, cố chấp, gian xảo, **dễ vướng kiện tụng**
- **Tuần / Triệt án ngữ:** vua bị **phế truất, giam lỏng**: có tài cũng không
  phát huy, công danh khó thành
- **Địa Không + Địa Kiếp:** phá vỡ thực tế: ảo tưởng, hành động khác thường,
  công danh **"lâu đài trên cát"**, dễ **bạo phát bạo tàn**
- Khi có thêm **Tham Lang / Phá Quân + sát tinh**: tài lộc khó bền, dễ tiêu
  tan, hôn nhân bất hòa, **2 lần đò**`,
  },

  // ============================================================
  // 7. Tử Phủ đồng cung tại Dần / Thân
  // ============================================================
  {
    id: 'tu-vi-menh-dan-than-tu-phu',
    title: 'Tử Phủ đồng cung cư Mệnh tại Dần / Thân',
    sao: ['Tử Vi', 'Thiên Phủ'],
    cung: ['Mệnh'],
    chi: ['Dần', 'Thân'],
    ketHop: ['Tử Phủ đồng cung'],
    doUuTien: 92,
    tomTat: `**Tử Vi + Thiên Phủ đồng cung tại Dần / Thân** = cách **"Tử Phủ đồng
cung"**: chủ về **MỘT ĐỜI GIÀU CÓ**.

Hai **Đế Tinh** cùng cung — **phúc - quyền - tài** đầy đủ. Người có:
- **Khí chất đĩnh đạc, nhân cách chính trực**
- **Tài năng quản lý xuất sắc**
- **Cuộc đời an nhàn, trường thọ** ("Tử Phủ đồng cung, chung thân phúc hậu")

Có mâu thuẫn nội tại: Tử Vi muốn **khai phá**, Thiên Phủ lại **bảo thủ ổn
định**: đôi khi **do dự, thiếu quyết đoán** trước quyết định đột phá.`,

    chiTiet: `## Đặc điểm

- Dáng người đầy đặn, tầm thước, phúc hậu
- Khuôn mặt vuông vức / tròn đầy, da sáng, **phong thái đĩnh đạc, khoan thai, uy nghi**
- **Nhân hậu, chính trực, khoan hòa, trách nhiệm cao**
- Là người **quân tử, trọng chữ tín**, không thích thủ đoạn

## Mâu thuẫn nội tại

Tử Vi (khai phá, sáng tạo, cao ngạo) + Thiên Phủ (ổn định, bảo thủ, cẩn trọng)
- đôi khi **do dự, thiếu quyết đoán** trước quyết định đột phá. Có khí phách
lãnh đạo nhưng **thiếu sự liều lĩnh** để tiên phong.

## Sự nghiệp

**KHÔNG phù hợp khởi nghiệp mạo hiểm** — cực kỳ thành công trong vai trò:
- **Quản lý cấp cao** trong tập đoàn lớn
- Cơ quan **nhà nước**
- Lĩnh vực đòi hỏi **uy tín và ổn định**: tài chính, ngân hàng, giáo dục`,
  },

  {
    id: 'tu-vi-menh-ty-hoi-tu-phu-hoi-chieu',
    title: 'Tử Phủ hội chiếu cư Mệnh tại Tỵ / Hợi',
    sao: ['Tử Vi', 'Thiên Phủ'],
    cung: ['Mệnh'],
    chi: ['Tỵ', 'Hợi'],
    ketHop: ['Tử Phủ đồng cung'],
    doUuTien: 85,
    tomTat: `**Mệnh tại Tỵ / Hợi** (cung Sinh) — Tử Vi + Thiên Phủ hội chiếu
áp dụng tinh thần cách **"Tử Phủ đồng cung"**: chủ về **một đời giàu có**
(mức độ kém hơn cách Tử Phủ đồng cung gốc).`,
  },

  // ============================================================
  // 8. Tử Tướng đồng cung tại Thìn / Tuất
  // ============================================================
  {
    id: 'tu-vi-menh-thin-tuat-tu-tuong',
    title: 'Tử Tướng đồng cung cư Mệnh tại Thìn / Tuất',
    sao: ['Tử Vi', 'Thiên Tướng'],
    cung: ['Mệnh'],
    chi: ['Thìn', 'Tuất'],
    ketHop: ['Tử Tướng', 'Tử Vi Thiên Tướng đồng cung'],
    doUuTien: 92,
    tomTat: `**Tử Vi + Thiên Tướng đồng cung tại Thìn / Tuất** = cách **"Tử Tướng"**.

**Đế Tinh + Ấn Tinh** đồng cung: mang **uy quyền, khả năng lãnh đạo, năng lực
quản lý xuất sắc**. Có tố chất **giữ trật tự, ra quyết định đúng đắn, tạo ảnh
hưởng xã hội**.

Vị trí nằm trong **Thiên La - Địa Võng**, đối diện **Phá Quân**: nội tâm
đôi khi **mâu thuẫn**: vừa khao khát quyền lực vừa dễ bốc đồng. Cần **cân bằng
tham vọng và lý trí**.`,

    chiTiet: `## Phong thái

- Toát lên **dáng vẻ đĩnh đạc**, phong thái bậc lãnh đạo, **ôn hòa, trọng đạo lý**
- Bên trong **đầy tham vọng, ý chí mạnh mẽ**: nội tâm vừa khao khát quyền lực
  vừa đầy mâu thuẫn

- Xem entry chuyên biệt cho từng giới tính.`,
  },

  {
    id: 'tu-vi-menh-thin-tuat-tu-tuong-nu',
    title: 'Tử Tướng cư Mệnh Thìn/Tuất - Nữ mệnh',
    sao: ['Tử Vi', 'Thiên Tướng'],
    cung: ['Mệnh'],
    chi: ['Thìn', 'Tuất'],
    gioiTinh: 'Nữ',
    ketHop: ['Tử Tướng'],
    doUuTien: 85,
    tomTat: `**Nữ mệnh — Tử Tướng cư Mệnh Thìn/Tuất:** thông minh, chững chạc,
bản lĩnh; quản lý xuất sắc, tháo vát; hội cát tinh: nữ lãnh đạo, doanh nhân
thành đạt.

Tính mạnh mẽ + khao khát kiểm soát + Phá Quân xung chiếu: dễ áp đặt bạn
đời: khuyên kết hôn muộn hoặc lấy người lớn tuổi, trưởng thành, bao dung.`,
  },

  {
    id: 'tu-vi-menh-thin-tuat-tu-tuong-nam',
    title: 'Tử Tướng cư Mệnh Thìn/Tuất - Nam mệnh',
    sao: ['Tử Vi', 'Thiên Tướng'],
    cung: ['Mệnh'],
    chi: ['Thìn', 'Tuất'],
    gioiTinh: 'Nam',
    ketHop: ['Tử Tướng'],
    doUuTien: 85,
    tomTat: `**Nam mệnh — Tử Tướng cư Mệnh Thìn/Tuất:** uy nghi, tự tôn cao, tài
năng tổ chức, mưu lược; nhạy bén với chính trị, quản lý doanh nghiệp, hành
chính công.

Áp lực Thiên La - Địa Võng: con đường tiến thân hiếm khi bằng phẳng. Thiếu
phò tá: "cô quân" bảo thủ, độc đoán. Tổ hợp Tử Tướng + Phá Quân khi quyết
định lớn dễ "bạc bẽo, lục thân bất nhận".`,
  },

  // ============================================================
  // 9. Tử Phá đồng cung tại Sửu / Mùi
  // ============================================================
  {
    id: 'tu-vi-menh-suu-mui-tu-pha',
    title: 'Tử Phá đồng cung cư Mệnh tại Sửu / Mùi (đặc tính chung)',
    sao: ['Tử Vi', 'Phá Quân'],
    cung: ['Mệnh'],
    chi: ['Sửu', 'Mùi'],
    ketHop: ['Tử Phá', 'Tử Vi Phá Quân đồng cung'],
    doUuTien: 92,
    tomTat: `**Tử Vi + Phá Quân đồng cung tại Sửu / Mùi** = cách **"Tử Phá"** —
mẫu người **TIÊN PHONG, dám nghĩ dám làm**, có **tư duy cải cách mạnh mẽ**.

Như được trao sức mạnh **khai mở con đường mới**, dám bước vào nơi không ai dám
bước. Tuy nhiên càng mạnh mẽ: cuộc đời càng nhiều **khúc quanh, biến động,
cạnh tranh, sóng gió**.

Phá Quân Thủy bị Tử Vi Thổ kiểm soát: mâu thuẫn về lý tưởng không phải vấn
đề lớn. Tử Vi tạo **khuôn khổ giới hạn** cho Phá Quân: phát huy năng lực tốt hơn.`,

    chiTiet: `## Đặc điểm

- **Năng lực khai sáng mạnh mẽ**
- Động lực và tham vọng lớn — luôn muốn **đi đầu** trong một lĩnh vực
- Khả năng **lãnh đạo rất mạnh**, là người **đứng đầu, tiên phong**
- Tận dụng **tính phá bỏ truyền thống** của Phá Quân
- Phá Quân được Tử Vi tạo khuôn: bớt liều, **phát huy năng lực có kiểm soát**

## Hôn nhân muộn

- Xem entry chuyên biệt cho từng giới tính.

**KHÔNG nên đi cùng Văn Xương / Văn Khúc** — làm giảm sự liều lĩnh và quyết
đoán.

## Cách "Quân tử tại dã"

Tử Phá Sửu Mùi còn gọi là cách **"Quân tử tại dã"** — nghĩa là **lúc hiền lúc
hung**, lúc tốt lúc xấu — **gần người xấu là xấu theo, gần người tốt thì tốt theo**.

Đặc điểm:
- Có **tài kinh doanh, tài ứng biến**, tính tình hoạt bát nhanh nhẹn
- Có **nhân hậu** + **cái tôi cao quý** của Tử Vi
- Có **phá phách và liều lĩnh** của Phá Quân
- Tự cho mình là **đệ nhất thiên hạ**, thích làm gì thì làm
- Dễ trở thành **hồ đồ, ngang ngược, hống hách**: cũng là dạng cách **"Đế Ngộ Hung Đồ"**
- Hình dáng: **cao lớn, mặt mũi rất đẹp**, làm ăn buôn bán kinh tế thịnh vượng
- **Khó có công danh với đời** dù làm ăn được`,
  },

  {
    id: 'tu-vi-menh-suu-mui-tu-pha-nu',
    title: 'Tử Phá Sửu/Mùi - Nữ mệnh hôn nhân muộn',
    sao: ['Tử Vi', 'Phá Quân'],
    cung: ['Mệnh'],
    chi: ['Sửu', 'Mùi'],
    gioiTinh: 'Nữ',
    ketHop: ['Tử Phá'],
    doUuTien: 85,
    tomTat: `**Nữ mệnh — Tử Phá Sửu/Mùi:** dễ rơi vào cách **cao số, kén
chồng**, hoặc do thiên về quyền lực: **át chồng**: thường **lấy chồng muộn**.`,
  },

  {
    id: 'tu-vi-menh-suu-mui-tu-pha-nam',
    title: 'Tử Phá Sửu/Mùi - Nam mệnh hôn nhân muộn',
    sao: ['Tử Vi', 'Phá Quân'],
    cung: ['Mệnh'],
    chi: ['Sửu', 'Mùi'],
    gioiTinh: 'Nam',
    ketHop: ['Tử Phá'],
    doUuTien: 85,
    tomTat: `**Nam mệnh — Tử Phá Sửu/Mùi:** lý tưởng và tầm mắt cao: cũng
**lấy vợ muộn**, thường khi sự nghiệp đạt thành tựu nhất định mới nghĩ chuyện
kết hôn.`,
  },

  {
    id: 'tu-vi-menh-suu-mui-tu-pha-ta-huu-khoi-viet-khoa-quyen',
    title: 'Tử Phá Sửu/Mùi + Tả Hữu / Khôi Việt / Hóa Khoa / Hóa Quyền',
    sao: ['Tử Vi', 'Phá Quân'],
    cung: ['Mệnh'],
    chi: ['Sửu', 'Mùi'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Thiên Khôi', 'Thiên Việt', 'Hóa Khoa', 'Hóa Quyền'],
    doUuTien: 87,
    tomTat: `**Tử Phá Sửu/Mùi + Tả Hữu / Khôi Việt / Hóa Khoa / Hóa Quyền:** Phá
Quân **mềm tính hơn**, bớt xung đột.`,
  },

  {
    id: 'tu-vi-menh-suu-mui-tu-pha-hoa-loc',
    title: 'Tử Phá Sửu/Mùi + Hóa Lộc',
    sao: ['Tử Vi', 'Phá Quân'],
    cung: ['Mệnh'],
    chi: ['Sửu', 'Mùi'],
    ketHop: ['Hóa Lộc'],
    doUuTien: 87,
    tomTat: `**Tử Phá Sửu/Mùi + Hóa Lộc:** đắc cách thành tựu lớn — **làm đến
đâu có thành tựu đến đó**, ngày càng tăng trưởng.`,
  },

  {
    id: 'tu-vi-menh-suu-mui-tu-pha-kinh-hoa',
    title: 'Tử Phá Sửu/Mùi + Kình Dương / Hỏa Tinh',
    sao: ['Tử Vi', 'Phá Quân'],
    cung: ['Mệnh'],
    chi: ['Sửu', 'Mùi'],
    ketHop: ['Kình Dương', 'Hỏa Tinh'],
    doUuTien: 87,
    tomTat: `**Tử Phá Sửu/Mùi + Kình Dương / Hỏa Tinh:** dễ phá cách: cuộc đời
nhiều chìm nổi, khó quy tụ lực lượng.`,
  },

  {
    id: 'tu-vi-menh-suu-mui-tu-pha-da-linh',
    title: 'Tử Phá Sửu/Mùi + Đà La / Linh Tinh',
    sao: ['Tử Vi', 'Phá Quân'],
    cung: ['Mệnh'],
    chi: ['Sửu', 'Mùi'],
    ketHop: ['Đà La', 'Linh Tinh'],
    doUuTien: 87,
    tomTat: `**Tử Phá Sửu/Mùi + Đà La / Linh Tinh:** thành **cứng đầu**, khó
tiếp thu cái tốt.`,
  },

  {
    id: 'tu-vi-menh-suu-mui-tu-pha-khong-kiep',
    title: 'Tử Phá Sửu/Mùi + Không Kiếp',
    sao: ['Tử Vi', 'Phá Quân'],
    cung: ['Mệnh'],
    chi: ['Sửu', 'Mùi'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 87,
    tomTat: `**Tử Phá Sửu/Mùi + Địa Không / Địa Kiếp:** phá cách: tư tưởng
**lệch lạc, lập dị**.`,
  },

  // ============================================================
  // 10. Tử Tham đồng cung tại Mão / Dậu - Đào Hoa Phạm Chủ
  // ============================================================
  {
    id: 'tu-vi-menh-mao-dau-tu-tham',
    title: 'Tử Tham đồng cung cư Mệnh tại Mão / Dậu - "Đào Hoa Phạm Chủ" (đặc tính chung)',
    sao: ['Tử Vi', 'Tham Lang'],
    cung: ['Mệnh'],
    chi: ['Mão', 'Dậu'],
    ketHop: ['Tử Tham', 'Tử Vi Tham Lang đồng cung', 'Đào Hoa Phạm Chủ'],
    doUuTien: 92,
    tomTat: `**Tử Vi + Tham Lang đồng cung tại Mão / Dậu** = cách **"Tử Tham"**,
còn gọi **"Đào Hoa Phạm Chủ"**.

Tham Lang (đào hoa tinh) làm **giảm chính khí của Tử Vi**: tính quyết đoán dễ
bị hiểu lầm. Tuy nhiên so với Tham Lang đơn: **đứng đắn hơn**, không thuần dục
vọng — hướng đến cái **thi vị, tầm mắt cao**.

Cổ nhân cho rằng "nặng dục vọng" — nhưng chỉ rơi vào nhục dục khi **PHÁ CÁCH**
(gặp Đà La, Linh Tinh, Không Kiếp). Hiện đại hiểu là **đa cảm, lãng mạn, thích
đổi mới** nhưng vẫn **lý trí, thanh cao**.`,

    chiTiet: `## Tính cách

Vừa có sắc thái **Tử Vi** (chính khí, cao quý) vừa có sắc thái **Tham Lang**
(đào hoa, dục vọng):
- **Tham vọng lớn, biết nhìn thời cuộc**
- Đào hoa nhưng **đứng đắn hơn Tham Lang đơn**
- Khả năng gánh vác **yếu hơn các cách Tử Vi khác** vì đào hoa làm lu mờ chính khí

- Xem entry chuyên biệt cho từng giới tính.

**KHÔNG nên đi cùng Văn Xương / Văn Khúc** — dễ phá cách, giảm năng lực lãnh
đạo, **thiên về làm chuyên môn** hơn là đứng đầu tổ chức.

- Tử Tham nên **TRÁNH Không Kiếp** thì dễ phát hơn.

## Cách "Tử Tham Không Kiếp thoát tục chi tăng"

Cổ nhân có câu: **"Tử Tham Không Kiếp thoát tục chi tăng"** — người Mệnh Tử
Tham gặp **Không + Kiếp** dễ **chán nản cuộc sống: tìm đến tu hành**.

## Lý do về ngũ hành

Tử Vi hành **Thổ**, Tham Lang hành **Mộc**, **Mộc khắc Thổ**: làm Tử Vi mất giá
trị, mất tính mềm mại / ôn lương / cứu giải. Thêm vào đó Tử Vi tại Mão / Dậu ở
trạng thái **Bình Hòa**: không phát huy hết sức mạnh, **dễ bị Tham Lang chi phối**.`,
  },

  {
    id: 'tu-vi-menh-mao-dau-tu-tham-nu',
    title: 'Tử Tham Mão/Dậu - Nữ mệnh',
    sao: ['Tử Vi', 'Tham Lang'],
    cung: ['Mệnh'],
    chi: ['Mão', 'Dậu'],
    gioiTinh: 'Nữ',
    ketHop: ['Tử Tham'],
    doUuTien: 85,
    tomTat: `**Nữ mệnh — Tử Tham Mão/Dậu:** cách cục **làm việc lớn**, tham
vọng + tầm nhìn: **dễ thành lãnh đạo**.

Vất vả hơn nam — sự lả lướt đào hoa làm lu mờ tôn nghiêm Tử Vi: **dễ thị
phi, hiểu lầm**.`,
  },

  {
    id: 'tu-vi-menh-mao-dau-tu-tham-ta-phu-thien-khoi',
    title: 'Tử Tham Mão/Dậu + Tả Phù / Thiên Khôi',
    sao: ['Tử Vi', 'Tham Lang'],
    cung: ['Mệnh'],
    chi: ['Mão', 'Dậu'],
    ketHop: ['Tả Phù', 'Thiên Khôi'],
    doUuTien: 87,
    tomTat: `**Tử Tham Mão/Dậu + Tả Phù / Thiên Khôi:** giảm đào hoa, **TĂNG
chính khí Tử Vi** — đặc biệt cần Tả Phù hoặc Thiên Khôi.`,
  },

  {
    id: 'tu-vi-menh-mao-dau-tu-tham-huu-bat-thien-viet',
    title: 'Tử Tham Mão/Dậu + Hữu Bật / Thiên Việt',
    sao: ['Tử Vi', 'Tham Lang'],
    cung: ['Mệnh'],
    chi: ['Mão', 'Dậu'],
    ketHop: ['Hữu Bật', 'Thiên Việt'],
    doUuTien: 87,
    tomTat: `**Tử Tham Mão/Dậu + Hữu Bật / Thiên Việt:** cần tránh các sát tinh
khác vì dễ thúc đẩy đào hoa.`,
  },

  {
    id: 'tu-vi-menh-mao-dau-tu-tham-da-linh',
    title: 'Tử Tham Mão/Dậu + Đà La / Linh Tinh',
    sao: ['Tử Vi', 'Tham Lang'],
    cung: ['Mệnh'],
    chi: ['Mão', 'Dậu'],
    ketHop: ['Đà La', 'Linh Tinh'],
    doUuTien: 87,
    tomTat: `**Tử Tham Mão/Dậu + Đà La / Linh Tinh:** kích phát **đam mê tửu
sắc**: Tử Vi mất chính khí.`,
  },

  {
    id: 'tu-vi-menh-mao-dau-tu-tham-kinh-hoa',
    title: 'Tử Tham Mão/Dậu + Kình Dương / Hỏa Tinh - CHẾ PHÁT',
    sao: ['Tử Vi', 'Tham Lang'],
    cung: ['Mệnh'],
    chi: ['Mão', 'Dậu'],
    ketHop: ['Kình Dương', 'Hỏa Tinh'],
    doUuTien: 87,
    tomTat: `**Tử Tham Mão/Dậu + Kình Dương / Hỏa Tinh:** **CHẾ PHÁT** — hưởng
đặc tính tốt, có **uy quyền**, khó tránh vọng động vất vả nhưng **thành tựu lớn
hơn**.`,
  },

  {
    id: 'tu-vi-menh-mao-dau-tu-tham-khong-kiep',
    title: 'Tử Tham Mão/Dậu + Không Kiếp',
    sao: ['Tử Vi', 'Tham Lang'],
    cung: ['Mệnh'],
    chi: ['Mão', 'Dậu'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 87,
    tomTat: `**Tử Tham Mão/Dậu + Địa Không / Địa Kiếp:** biến tướng tham vọng,
**bất đắc chí** — dễ tha hóa nếu làm ngành biến động. Đến trung niên dễ **chọn
tu tập, tâm linh** vì bất đắc chí.`,
  },

  // ============================================================
  // 11. Tử Sát đồng cung tại Tỵ / Hợi
  // ============================================================
  {
    id: 'tu-vi-menh-ty-hoi-tu-sat',
    title: 'Tử Sát đồng cung cư Mệnh tại Tỵ / Hợi (đặc tính chung)',
    sao: ['Tử Vi', 'Thất Sát'],
    cung: ['Mệnh'],
    chi: ['Tỵ', 'Hợi'],
    ketHop: ['Tử Sát', 'Tử Vi Thất Sát đồng cung', 'Hóa Sát thành Quyền'],
    doUuTien: 92,
    tomTat: `**Tử Vi + Thất Sát đồng cung tại Tỵ / Hợi** = cách **"Tử Sát"** —
biểu trưng cho người **CHÍ LỚN, BẢN LĨNH MẠNH MẼ**, không ngại va chạm, sẵn
sàng đi con đường riêng.

Tướng mạo: **cao, dáng uy nghiêm, mặt dài cương nghị**, khí chất mạnh mẽ.

Tính cách: **quyết đoán, lãnh đạo bẩm sinh**, nóng nảy nghiêm khắc, làm việc
**dựa lý trí và hiệu quả** hơn tình cảm. Tử Vi dung hòa được Thất Sát: **không
quá thái quá**.

- Phù hợp: **quân đội, cảnh sát, an ninh, điều hành doanh nghiệp lớn, công
nghiệp - sản xuất**.`,

    chiTiet: `## Đặc điểm cách "Hóa Sát thành Quyền"

Tính chất **"Hóa Sát thành Quyền"** thể hiện rõ rệt: đương số có **quyền hành
lớn**, đảm nhận vị trí quan trọng, phù hợp **chỉ huy quân đội / cảnh sát /
giám đốc điều hành**.

## Hội cát tinh

- **Tả Phù / Hữu Bật:** quyền lực được **củng cố** qua giúp đỡ thực tế
- **Thiên Khôi / Thiên Việt:** **quý nhân giúp đỡ** từ cấp trên, tài năng được
  công nhận, được trao **trọng trách lớn**
- **Lộc Tồn / Hóa Lộc:** quyền lực + kinh tế mạnh: kế hoạch lớn triển khai dễ
- **Hóa Quyền:** củng cố và **gia tăng quyền lực** — cần hài hòa, tránh lạm dụng`,
  },

  {
    id: 'tu-vi-tu-sat-tai-quan-loc',
    title: 'Tử Sát tại Quan Lộc - đắc vị nhất',
    sao: ['Tử Vi', 'Thất Sát'],
    cung: ['Quan Lộc'],
    ketHop: ['Tử Sát', 'Hóa Sát thành Quyền'],
    doUuTien: 88,
    tomTat: `**Tử Sát tại Quan Lộc** — vị trí **đắc vị nhất** của Tử Sát. Tính
chất **"Hóa Sát thành Quyền"** thể hiện rõ rệt: đương số có **quyền hành
lớn**, đảm nhận vị trí quan trọng.`,
  },

  {
    id: 'tu-vi-menh-ty-hoi-tu-sat-kinh-da-hinh',
    title: 'Tử Sát Tỵ/Hợi + Kình Đà / Thiên Hình',
    sao: ['Tử Vi', 'Thất Sát'],
    cung: ['Mệnh'],
    chi: ['Tỵ', 'Hợi'],
    ketHop: ['Kình Dương', 'Đà La', 'Thiên Hình'],
    doUuTien: 87,
    tomTat: `**Tử Sát Tỵ/Hợi + Kình Đà / Thiên Hình:** quyền lực bị **lạm dụng**
- độc đoán, tàn bạo, liều lĩnh, **xung đột bạo lực, tranh chấp pháp lý**.`,
  },

  {
    id: 'tu-vi-menh-ty-hoi-tu-sat-hoa-linh',
    title: 'Tử Sát Tỵ/Hợi + Hỏa Linh',
    sao: ['Tử Vi', 'Thất Sát'],
    cung: ['Mệnh'],
    chi: ['Tỵ', 'Hợi'],
    ketHop: ['Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 87,
    tomTat: `**Tử Sát Tỵ/Hợi + Hỏa Tinh / Linh Tinh:** nóng nảy bộc phát
quyết định **vội vàng**: thất bại, sự nghiệp bất ổn.`,
  },

  {
    id: 'tu-vi-menh-ty-hoi-tu-sat-khong-kiep',
    title: 'Tử Sát Tỵ/Hợi + Không Kiếp',
    sao: ['Tử Vi', 'Thất Sát'],
    cung: ['Mệnh'],
    chi: ['Tỵ', 'Hợi'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 87,
    tomTat: `**Tử Sát Tỵ/Hợi + Địa Không / Địa Kiếp:** bất ổn biến động — dễ
**sụp đổ đột ngột, phá sản**.`,
  },

  {
    id: 'tu-vi-menh-ty-hoi-tu-sat-tuan-triet',
    title: 'Tử Sát Tỵ/Hợi + Tuần / Triệt',
    sao: ['Tử Vi', 'Thất Sát'],
    cung: ['Mệnh'],
    chi: ['Tỵ', 'Hợi'],
    ketHop: ['Tuần', 'Triệt'],
    doUuTien: 87,
    tomTat: `**Tử Sát Tỵ/Hợi + Tuần / Triệt:** có tài nhưng **không cơ hội thể
hiện**, gò bó bất mãn, "có danh không có quyền".`,
  },

  // ============================================================
  // 12. Tử Vi đơn thủ tại Ngọ - "Cực Hướng Ly Minh"
  // ============================================================
  {
    id: 'tu-vi-menh-ngo-cuc-huong-ly-minh',
    title: 'Tử Vi cư Mệnh tại Ngọ - "Cực Hướng Ly Minh"',
    sao: ['Tử Vi'],
    cung: ['Mệnh'],
    chi: ['Ngọ'],
    ketHop: ['Cực Hướng Ly Minh'],
    doUuTien: 95,
    tomTat: `**Tử Vi cư Ngọ — "CỰC HƯỚNG LY MINH"** — cách ĐẸP NHẤT trong khoa
tử vi.

Tử Vi về đúng vị trí **cực đỉnh của trời đất**, là **"Đế đứng đầu triều"**.
Thêm **Tả Phù + Hữu Bật** hoặc chỉ cần **Khôi Việt**: công danh địa vị, **thành
danh thành đạt, tiếng tăm lẫy lừng**.

Đương số rất ít nói, **chỉ tủm tỉm cười**. Cuộc đời gặp nhiều **may mắn**, ra
ngoài xã hội bạn bè anh em **nể trọng kính phục vô cùng**.

**Tử Vi cư Ngọ + Tuần / Triệt** = cách **"Đới Ấn Triều Hồi"** — **MẤT đường
công danh**. Tử Vi dù ở cung nào cũng **không ưa Tuần Triệt**.`,
  },

  // ============================================================
  // 12b. Tử Vi đơn thủ tại Tý
  // ============================================================
  {
    id: 'tu-vi-menh-ty',
    title: 'Tử Vi đơn thủ cư Mệnh tại Tý',
    sao: ['Tử Vi'],
    cung: ['Mệnh'],
    chi: ['Tý'],
    doUuTien: 88,
    tomTat: `**Tử Vi đơn thủ cư Tý** — vị trí **bình hòa**, là tốt nhưng không
mấy ảnh hưởng.

Người **nhân hậu, hiền lành, có tư tưởng lớn**. Nhiều người có **tín ngưỡng
mạnh mẽ, bước vào con đường tu hành đạo lý**.

Tử Vi đơn thủ: **CẦN Tả Hữu Khôi Việt** trong tam phương để tránh rơi vào
**"Cô Quân"**.`,
  },

  // ============================================================
  // 13. Tứ Hóa Can Ất - Tử Vi Hóa Khoa
  // ============================================================
  {
    id: 'tu-vi-hoa-khoa-can-at',
    title: 'Tử Vi Hóa Khoa (Can Ất) - cư Mệnh',
    sao: ['Tử Vi'],
    cung: ['Mệnh'],
    ketHop: ['Tử Vi Hóa Khoa', 'Can Ất'],
    doUuTien: 75,
    tomTat: `**Năm Can Ất: Tử Vi Hóa Khoa.**

Người Tử Vi Hóa Khoa cư Mệnh: tập trung vào **danh dự, uy tín, học vấn** thay
vì quyền lực hay tiền bạc. **Giảm độc đoán cố chấp**, **tăng linh hoạt**, biết
tiếp thu và phân biệt đúng sai.

Năng lực phát huy mạnh ở **nghiên cứu học thuật, giáo dục, tham mưu chiến lược**.

Sự nổi bật dễ kéo theo **đố kỵ, ganh ghét**: cần tỉnh táo và khéo léo trong
quan hệ xã hội.`,
  },

  // ============================================================
  // 14. Tứ Hóa Can Nhâm - Tử Vi Hóa Quyền
  // ============================================================
  {
    id: 'tu-vi-hoa-quyen-can-nham',
    title: 'Tử Vi Hóa Quyền (Can Nhâm) - cư Mệnh',
    sao: ['Tử Vi'],
    cung: ['Mệnh'],
    ketHop: ['Tử Vi Hóa Quyền', 'Can Nhâm'],
    doUuTien: 75,
    tomTat: `**Năm Can Nhâm: Tử Vi Hóa Quyền.**

Người Tử Vi Hóa Quyền cư Mệnh: **quyết liệt, thao túng quyền lực**, thể hiện
uy thế rõ rệt như **vị quân vương thực thụ** — khí chất bức người, áp đảo cấp
dưới và cả cấp trên.

**Tính ương bướng tăng cao**, năng lực **gánh vác trách nhiệm và dám làm dám
chịu** cũng tăng mạnh. Sẵn sàng chi trả mọi giá để **bảo vệ thể diện và cái tôi**.

**Khuyết điểm:** vì Can Nhâm cũng làm **Vũ Khúc Hóa Kỵ**: **không nên tự
bỏ vốn kinh doanh**, nên dùng quyền lực và trí tuệ để **quản lý điều hành
tổ chức**.`,
  },

  // ============================================================
  // 15. Tử Vi ở Phụ Mẫu
  // ============================================================
  {
    id: 'tu-vi-tai-phu-mau',
    title: 'Tử Vi tại Phụ Mẫu (đặc tính chung)',
    sao: ['Tử Vi'],
    cung: ['Phụ Mẫu'],
    doUuTien: 80,
    tomTat: `**Tử Vi tại Phụ Mẫu:** cha mẹ **tuổi thọ cao**, gia đình có **quyền
thế, địa vị xã hội**.`,
  },

  {
    id: 'tu-vi-tai-phu-mau-cat-tinh',
    title: 'Tử Vi + Tả Hữu / Khôi Việt / Hóa Quyền / Ấn Cáo tại Phụ Mẫu',
    sao: ['Tử Vi'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Thiên Khôi', 'Thiên Việt', 'Hóa Quyền', 'Quốc Ấn', 'Phong Cáo'],
    doUuTien: 75,
    tomTat: `**Tử Vi + Tả Hữu / Khôi Việt / Hóa Quyền / Quốc Ấn / Phong Cáo tại
Phụ Mẫu:** phúc dày, cha mẹ có **tiếng nói, danh chức** trong tổ chức / xã hội —
đương số được giúp đỡ, định hướng từ cha mẹ.`,
  },

  {
    id: 'tu-vi-tai-phu-mau-tham-pha-khong-kinh',
    title: 'Tử Vi + Tham Lang / Phá Quân / Không Kiếp / Kình Đà tại Phụ Mẫu',
    sao: ['Tử Vi'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Tham Lang', 'Phá Quân', 'Địa Không', 'Địa Kiếp', 'Kình Dương', 'Đà La'],
    doUuTien: 75,
    tomTat: `**Tử Vi + Tham Lang / Phá Quân / Không Kiếp / Kình Đà tại Phụ Mẫu:**
**phúc ấm giảm**, cha mẹ dễ **chia ly hoặc kiện cáo hôn nhân**.`,
  },

  // ============================================================
  // 16. Tử Vi ở Phúc Đức
  // ============================================================
  {
    id: 'tu-vi-tai-phuc-duc',
    title: 'Tử Vi tại Phúc Đức (đặc tính chung)',
    sao: ['Tử Vi'],
    cung: ['Phúc Đức'],
    doUuTien: 80,
    tomTat: `**Tử Vi tại Phúc Đức:** dòng họ **cao quý**, nhiều người **làm quan,
công danh hiển đạt**.

- **Điềm đạm cẩn trọng, nội tâm tự tin, kiên cường**
- Khuyết: **ham muốn quyền lực**, theo đuổi xa vời, thiếu thực tế`,
  },

  {
    id: 'tu-vi-tai-phuc-duc-phu-tuong-sat',
    title: 'Tử Vi + Thiên Phủ / Thiên Tướng / Thất Sát tại Phúc Đức',
    sao: ['Tử Vi'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Phủ', 'Thiên Tướng', 'Thất Sát'],
    doUuTien: 75,
    tomTat: `**Tử Vi + Thiên Phủ / Thiên Tướng / Thất Sát tại Phúc Đức:** trong
họ có người **thành danh phương xa**.`,
  },

  {
    id: 'tu-vi-tai-phuc-duc-ta-huu-cat-tinh',
    title: 'Tử Vi + Tả Hữu + cát tinh tại Phúc Đức',
    sao: ['Tử Vi'],
    cung: ['Phúc Đức'],
    ketHop: ['Tả Phù', 'Hữu Bật'],
    doUuTien: 75,
    tomTat: `**Tử Vi + Tả Phù / Hữu Bật + cát tinh tại Phúc Đức:** phúc khí dày,
**gia tộc bề thế**.`,
  },

  {
    id: 'tu-vi-tai-phuc-duc-tham-pha-khong-kinh',
    title: 'Tử Vi + Tham / Phá / Không Kiếp / Kình Đà tại Phúc Đức',
    sao: ['Tử Vi'],
    cung: ['Phúc Đức'],
    ketHop: ['Tham Lang', 'Phá Quân', 'Địa Không', 'Địa Kiếp', 'Kình Dương', 'Đà La'],
    doUuTien: 75,
    tomTat: `**Tử Vi + Tham Lang / Phá Quân / Không Kiếp / Kình Đà tại Phúc Đức:**
phúc suy giảm, **họ hàng ly tán**, có người vướng **lao lý**.`,
  },

  // ============================================================
  // 17. Tử Vi ở Điền Trạch
  // ============================================================
  {
    id: 'tu-vi-tai-dien-trach',
    title: 'Tử Vi tại Điền Trạch (đặc tính chung)',
    sao: ['Tử Vi'],
    cung: ['Điền Trạch'],
    doUuTien: 80,
    tomTat: `**Tử Vi tại Điền Trạch:** sở hữu **nhiều đất đai, nhà cửa khang trang
sạch sẽ**. Trong nhà có **phòng đọc sách, nơi thờ tự nghiêm cẩn**.`,
  },

  {
    id: 'tu-vi-tai-dien-trach-xuong-khuc-ta-huu',
    title: 'Tử Vi + Văn Xương / Văn Khúc / Tả Hữu tại Điền Trạch',
    sao: ['Tử Vi'],
    cung: ['Điền Trạch'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Tả Phù', 'Hữu Bật'],
    doUuTien: 75,
    tomTat: `**Tử Vi + Văn Xương / Văn Khúc / Tả Hữu tại Điền Trạch:** gia trạch
gọn gàng.`,
  },

  {
    id: 'tu-vi-tai-dien-trach-luc-cat',
    title: 'Tử Vi + cát tinh nhiều tại Điền Trạch',
    sao: ['Tử Vi'],
    cung: ['Điền Trạch'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 75,
    tomTat: `**Tử Vi + nhiều cát tinh tại Điền Trạch:** dễ thêm nhà cửa, **tích
lũy bất động sản giá trị**.`,
  },

  {
    id: 'tu-vi-tai-dien-trach-sat-pha-tham',
    title: 'Tử Vi + Thất Sát / Phá Quân / Tham Lang tại Điền Trạch',
    sao: ['Tử Vi'],
    cung: ['Điền Trạch'],
    ketHop: ['Thất Sát', 'Phá Quân', 'Tham Lang'],
    doUuTien: 75,
    tomTat: `**Tử Vi + Thất Sát / Phá Quân / Tham Lang tại Điền Trạch:** điền
sản **dễ tiêu tán**, nhà cửa thay đổi liên miên, khó an cư.`,
  },

  // ============================================================
  // 18. Tử Vi ở Quan Lộc
  // ============================================================
  {
    id: 'tu-vi-tai-quan-loc',
    title: 'Tử Vi tại Quan Lộc (đặc tính chung)',
    sao: ['Tử Vi'],
    cung: ['Quan Lộc'],
    doUuTien: 88,
    tomTat: `**Tử Vi tại Quan Lộc — vị trí ĐẸP** — sự nghiệp **hanh thông**, có
**tài lãnh đạo, tổ chức công việc đâu vào đó**.`,
  },

  {
    id: 'tu-vi-tai-quan-loc-that-sat',
    title: 'Tử Vi + Thất Sát tại Quan Lộc',
    sao: ['Tử Vi'],
    cung: ['Quan Lộc'],
    ketHop: ['Thất Sát'],
    doUuTien: 83,
    tomTat: `**Tử Vi + Thất Sát tại Quan Lộc:** hợp **nghề võ, tài chính, kiểm
sát**.`,
  },

  {
    id: 'tu-vi-tai-quan-loc-thien-tuong',
    title: 'Tử Vi + Thiên Tướng tại Quan Lộc',
    sao: ['Tử Vi'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Tướng'],
    doUuTien: 83,
    tomTat: `**Tử Vi + Thiên Tướng tại Quan Lộc:** giỏi **quản lý tài chính**,
có tố chất lãnh đạo (hơi độc đoán).`,
  },

  {
    id: 'tu-vi-tai-quan-loc-hinh-rieu-ky',
    title: 'Tử Vi + Thiên Hình / Thiên Riêu / Hóa Kỵ tại Quan Lộc',
    sao: ['Tử Vi'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Hình', 'Thiên Riêu', 'Hóa Kỵ'],
    doUuTien: 83,
    tomTat: `**Tử Vi + Thiên Hình / Thiên Riêu / Hóa Kỵ tại Quan Lộc:** dễ sa
**cờ bạc, đỏ đen**.`,
  },

  {
    id: 'tu-vi-tai-quan-loc-pha-tham-khong-kiep',
    title: 'Tử Vi + Phá Quân / Tham Lang / Không Kiếp tại Quan Lộc',
    sao: ['Tử Vi'],
    cung: ['Quan Lộc'],
    ketHop: ['Phá Quân', 'Tham Lang', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 83,
    tomTat: `**Tử Vi + Phá Quân / Tham Lang / Địa Không / Địa Kiếp tại Quan
Lộc:** công danh **trắc trở, vướng tai họa** trong công việc — nếu có cát tinh
hỗ trợ vẫn thành công nhưng phải **trải đắng cay rồi mới hưởng mật ngọt**.`,
  },

  // ============================================================
  // 19. Tử Vi ở Nô Bộc
  // ============================================================
  {
    id: 'tu-vi-tai-no-boc',
    title: 'Tử Vi tại Nô Bộc (đặc tính chung)',
    sao: ['Tử Vi'],
    cung: ['Nô Bộc'],
    doUuTien: 78,
    tomTat: `**Tử Vi tại Nô Bộc:** quan hệ với cấp dưới và bạn bè biến thiên mạnh
theo các sao đi cùng — xem từng tổ hợp cụ thể trong các luận giải riêng.`,
  },

  {
    id: 'tu-vi-tai-no-boc-thai-bat-toa-hong-hy',
    title: 'Tử Vi + Thai / Bát Tọa / Hồng Loan / Thiên Hỷ / Hỷ Thần tại Nô Bộc',
    sao: ['Tử Vi'],
    cung: ['Nô Bộc'],
    ketHop: ['Thai', 'Bát Tọa', 'Hồng Loan', 'Thiên Hỷ', 'Hỷ Thần'],
    doUuTien: 73,
    tomTat: `**Tử Vi + Thai / Bát Tọa / Hồng Loan / Thiên Hỷ / Hỷ Thần tại Nô
Bộc:** nhiều **bạn bè quyền quý, cấp dưới trung thành**. Khó tránh tất tả
ngược xuôi vì lo cho người khác.`,
  },

  {
    id: 'tu-vi-tai-no-boc-ky-khong-kiep-tuan',
    title: 'Tử Vi + Hóa Kỵ / Không Kiếp / Tuần tại Nô Bộc',
    sao: ['Tử Vi'],
    cung: ['Nô Bộc'],
    ketHop: ['Hóa Kỵ', 'Địa Không', 'Địa Kiếp', 'Tuần'],
    doUuTien: 73,
    tomTat: `**Tử Vi + Hóa Kỵ / Địa Không / Địa Kiếp / Tuần án ngữ tại Nô Bộc:**
cẩn trọng **bạn xấu**, kéo bè kết cánh, **bị lợi dụng**, dính vào thị phi.`,
  },

  // ============================================================
  // 20. Tử Vi ở Thiên Di
  // ============================================================
  {
    id: 'tu-vi-tai-thien-di',
    title: 'Tử Vi tại Thiên Di (đặc tính chung)',
    sao: ['Tử Vi'],
    cung: ['Thiên Di'],
    doUuTien: 80,
    tomTat: `**Tử Vi tại Thiên Di:** ra ngoài **may mắn**, dễ có **quý nhân nâng đỡ**,
**kết giao người có địa vị**.`,
  },

  {
    id: 'tu-vi-tai-thien-di-khoi-viet-long-phuong',
    title: 'Tử Vi + Khôi Việt / Long Trì / Phượng Các tại Thiên Di',
    sao: ['Tử Vi'],
    cung: ['Thiên Di'],
    ketHop: ['Thiên Khôi', 'Thiên Việt', 'Long Trì', 'Phượng Các'],
    doUuTien: 75,
    tomTat: `**Tử Vi + Khôi Việt / Long Trì / Phượng Các tại Thiên Di:** rất
tốt — ra ngoài may mắn, được quý nhân hỗ trợ.`,
  },

  {
    id: 'tu-vi-tai-thien-di-tham-pha-de-ngo-hung-do',
    title: 'Tử Vi + Tham Lang / Phá Quân + Không Kiếp / Hóa Kỵ / sát tinh - "Đế Ngộ Hung Đồ"',
    sao: ['Tử Vi'],
    cung: ['Thiên Di'],
    ketHop: ['Tham Lang', 'Phá Quân', 'Địa Không', 'Địa Kiếp', 'Hóa Kỵ', 'Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 75,
    tomTat: `**Tử Vi + Tham Lang / Phá Quân + Không Kiếp / Hóa Kỵ / sát tinh tại
Thiên Di:** rơi vào thế **"Đế Ngộ Hung Đồ"** (vua gặp đường hung): dễ **bị lừa
gạt**, dính kiện tụng, bị **qua cầu rút ván**.`,
  },

  // ============================================================
  // 21. Tử Vi ở Tật Ách
  // ============================================================
  {
    id: 'tu-vi-tai-tat-ach',
    title: 'Tử Vi tại Tật Ách',
    sao: ['Tử Vi'],
    cung: ['Tật Ách'],
    doUuTien: 80,
    tomTat: `**Tử Vi là chính tinh có khả năng HÓA GIẢI bệnh tật, tai ương** — gặp
nạn thường có **quý nhân dang tay cứu nguy**.

**2 nhóm bệnh chính:**
- **Bệnh tiêu hóa:** đau dạ dày, tiêu chảy, tỳ vị yếu (Tử Vi hành **Thổ** chủ tỳ vị)
- **Bệnh thần kinh:** đau đầu, căng thẳng, áp lực, **dễ trầm cảm** (Tử Vi chủ
  trung ương lãnh đạo: ứng với thần kinh, não bộ)

Cũng chủ về bệnh **suy nhược, mệt mỏi quá độ** — cần xây dựng lối sống lành mạnh,
cân bằng làm việc / nghỉ ngơi.`,
  },

  {
    id: 'tu-vi-tai-tat-ach-khoi-viet-cat-tinh',
    title: 'Tử Vi + Khôi Việt + cát tinh tại Tật Ách',
    sao: ['Tử Vi'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Khôi', 'Thiên Việt', 'Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc'],
    doUuTien: 75,
    tomTat: `**Tử Vi + Khôi Việt + cát tinh tại Tật Ách:** lúc lâm chung được
**nhiều người thương tiếc, phúng viếng trọng thể**, có cả **quan chức, người
quyền quý** đến đưa tiễn.`,
  },

  // ============================================================
  // 22. Tử Vi ở Tài Bạch
  // ============================================================
  {
    id: 'tu-vi-tai-tai-bach',
    title: 'Tử Vi tại Tài Bạch (đặc tính chung)',
    sao: ['Tử Vi'],
    cung: ['Tài Bạch'],
    doUuTien: 85,
    tomTat: `**Tử Vi tại Tài Bạch:** tiền bạc **dồi dào, của cải sung túc**, công
việc thuận buồm xuôi gió: **hiếm khi rơi vào cảnh thiếu thốn**.`,
  },

  {
    id: 'tu-vi-tai-tai-bach-thien-phu-loc',
    title: 'Tử Vi + Thiên Phủ + Lộc Tồn / Hóa Lộc tại Tài Bạch',
    sao: ['Tử Vi'],
    cung: ['Tài Bạch'],
    ketHop: ['Thiên Phủ', 'Lộc Tồn', 'Hóa Lộc'],
    doUuTien: 80,
    tomTat: `**Tử Vi + Thiên Phủ + Lộc Tồn / Hóa Lộc tại Tài Bạch:** dễ giàu,
**làm ít hưởng nhiều**.`,
  },

  {
    id: 'tu-vi-tai-tai-bach-ngo-loc',
    title: 'Tử Vi tại Tài Bạch (cư Ngọ) + Lộc Tồn / Hóa Lộc',
    sao: ['Tử Vi'],
    cung: ['Tài Bạch'],
    chi: ['Ngọ'],
    ketHop: ['Lộc Tồn', 'Hóa Lộc'],
    doUuTien: 80,
    tomTat: `**Tử Vi cư Ngọ tại Tài Bạch + Lộc Tồn / Hóa Lộc:** dễ giàu,
**làm ít hưởng nhiều**.`,
  },

  {
    id: 'tu-vi-tai-tai-bach-tham-pha-tuan-triet',
    title: 'Tử Vi + Tham Lang / Phá Quân / Tuần / Triệt tại Tài Bạch',
    sao: ['Tử Vi'],
    cung: ['Tài Bạch'],
    ketHop: ['Tham Lang', 'Phá Quân', 'Tuần', 'Triệt'],
    doUuTien: 80,
    tomTat: `**Tử Vi + Tham Lang / Phá Quân / Tuần / Triệt tại Tài Bạch:** tài
lộc khó bền, dễ **tiêu tan, hao tài**, bị kẻ khác **lợi dụng** — bộ Sát Phá Tham
gặp Tử Vi sẽ **khắc chế tính cát lành**.`,
  },

  // ============================================================
  // 23. Tử Vi ở Tử Tức
  // ============================================================
  {
    id: 'tu-vi-tai-tu-tuc',
    title: 'Tử Vi tại Tử Tức (đặc tính chung)',
    sao: ['Tử Vi'],
    cung: ['Tử Tức'],
    doUuTien: 80,
    tomTat: `**Tử Vi tại Tử Tức:** chủ về **sinh con quý hiển**, con cái **công danh
hiển đạt**.

- Con cái **mạnh mẽ, tự lập, có tinh thần trách nhiệm**
- Khuyết: con **kỹ tính, cầu toàn, ít bộc lộ tình cảm, kiêu ngạo**`,
  },

  {
    id: 'tu-vi-tai-tu-tuc-cat-tinh',
    title: 'Tử Vi + Thiên Phủ / Thiên Tướng / Thất Sát / Tả Hữu / Hóa Lộc tại Tử Tức',
    sao: ['Tử Vi'],
    cung: ['Tử Tức'],
    ketHop: ['Thiên Phủ', 'Thiên Tướng', 'Thất Sát', 'Tả Phù', 'Hữu Bật', 'Hóa Lộc'],
    doUuTien: 75,
    tomTat: `**Tử Vi + Thiên Phủ / Thiên Tướng / Thất Sát / Tả Hữu / Hóa Lộc
tại Tử Tức:** đông con, **hiếu thuận**, cha mẹ **nở mày nở mặt**.`,
  },

  {
    id: 'tu-vi-tai-tu-tuc-tham-pha',
    title: 'Tử Vi + Tham Lang / Phá Quân tại Tử Tức',
    sao: ['Tử Vi'],
    cung: ['Tử Tức'],
    ketHop: ['Tham Lang', 'Phá Quân'],
    doUuTien: 75,
    tomTat: `**Tử Vi + Tham Lang / Phá Quân tại Tử Tức:** dấu hiệu **muộn con,
ít con** hoặc **cha mẹ - con cái thiếu hòa thuận**.`,
  },

  // ============================================================
  // 24. Tử Vi ở Phu Thê
  // ============================================================
  {
    id: 'tu-vi-tai-phu-the',
    title: 'Tử Vi tại Phu Thê',
    sao: ['Tử Vi'],
    cung: ['Phu Thê'],
    doUuTien: 80,
    tomTat: `**Tử Vi tại Phu Thê:** người bạn đời có **khí chất, vị trí xã hội
cao**. Hôn nhân thường gặp người **hơn tuổi** hoặc ở vị trí cao hơn.
Xem entry chuyên biệt cho từng giới tính và bộ kết hợp cụ thể.`,

    chiTiet: `## Mặt tốt

- Biết quan tâm, chăm sóc, ôn hòa
- Mối quan hệ hòa thuận, **được người bạn đời giúp đỡ**

## Mặt bất lợi

- Có thể **nghiêm khắc, cầu toàn**
- Dễ bị **kiểm soát, bao bọc quá mức**`,
  },

  {
    id: 'tu-vi-tai-phu-the-cat-tinh-nam',
    title: 'Tử Vi + Thiên Phủ / Xương Khúc / Tả Hữu tại Phu Thê - Nam mệnh',
    sao: ['Tử Vi'],
    cung: ['Phu Thê'],
    gioiTinh: 'Nam',
    ketHop: ['Thiên Phủ', 'Văn Xương', 'Văn Khúc', 'Tả Phù', 'Hữu Bật'],
    doUuTien: 78,
    tomTat: `**Nam mệnh — Tử Vi + Thiên Phủ / Xương Khúc / Tả Hữu tại Phu Thê:**
hôn nhân **bền chặt**, vợ chồng **đùm bọc lẫn nhau** — lấy được **vợ giỏi
giang**, gia đình bên vợ thuộc **danh giá**.`,
  },

  {
    id: 'tu-vi-tai-phu-the-cat-tinh-nu',
    title: 'Tử Vi + Thiên Phủ / Xương Khúc / Tả Hữu tại Phu Thê - Nữ mệnh',
    sao: ['Tử Vi'],
    cung: ['Phu Thê'],
    gioiTinh: 'Nữ',
    ketHop: ['Thiên Phủ', 'Văn Xương', 'Văn Khúc', 'Tả Phù', 'Hữu Bật'],
    doUuTien: 78,
    tomTat: `**Nữ mệnh — Tử Vi + Thiên Phủ / Xương Khúc / Tả Hữu tại Phu Thê:**
hôn nhân **bền chặt** — lấy **chồng sang giàu**, gia đình bên chồng thuộc **danh
giá**.`,
  },

  {
    id: 'tu-vi-tai-phu-the-sat-tham-pha',
    title: 'Tử Vi + sát tinh / Tham Lang / Phá Quân tại Phu Thê',
    sao: ['Tử Vi'],
    cung: ['Phu Thê'],
    ketHop: ['Tham Lang', 'Phá Quân', 'Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 78,
    tomTat: `**Tử Vi + sát tinh / Tham Lang / Phá Quân tại Phu Thê:** vợ chồng
**bất hòa**, "cơm chẳng lành canh chẳng ngọt", có thể **2 lần đò**.`,
  },

  // ============================================================
  // 25. Tử Vi ở Huynh Đệ
  // ============================================================
  {
    id: 'tu-vi-tai-huynh-de',
    title: 'Tử Vi tại Huynh Đệ (đặc tính chung)',
    sao: ['Tử Vi'],
    cung: ['Huynh Đệ'],
    doUuTien: 78,
    tomTat: `**Tử Vi tại Huynh Đệ:** anh em **tính tình hiền lành**, mối quan hệ
**hòa thuận**, máu chảy ruột mềm.

- Anh em có **phẩm chất tốt**, có thể **hợp tác làm ăn**
- Bản thân thường ở **địa vị dưới**, làm **người hỗ trợ**`,
  },

  {
    id: 'tu-vi-tai-huynh-de-pha-quan',
    title: 'Tử Vi + Phá Quân tại Huynh Đệ',
    sao: ['Tử Vi'],
    cung: ['Huynh Đệ'],
    ketHop: ['Phá Quân'],
    doUuTien: 73,
    tomTat: `**Tử Vi + Phá Quân tại Huynh Đệ:** dễ có **anh em dị bào** (khác
mẹ), tình cảm trên dưới thiếu hòa hợp.`,
  },

  {
    id: 'tu-vi-tai-huynh-de-tham-lang-sat-tinh',
    title: 'Tử Vi + Tham Lang + sát tinh tại Huynh Đệ',
    sao: ['Tử Vi'],
    cung: ['Huynh Đệ'],
    ketHop: ['Tham Lang', 'Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 73,
    tomTat: `**Tử Vi + Tham Lang + sát tinh tại Huynh Đệ:** trong nhà có **anh
em ngỗ nghịch**, thói côn đồ, hoặc **chết trẻ, yểu mệnh**.`,
  },

  // ============================================================
  // 26. Tử Vi + vòng Thái Tuế = Tứ Linh
  // ============================================================
  {
    id: 'tu-vi-vong-thai-tue-tu-linh',
    title: 'Tử Vi ôm vòng Thái Tuế - Cách Tứ Linh',
    sao: ['Tử Vi'],
    cung: ['Mệnh'],
    ketHop: ['Tứ Linh', 'Vòng Thái Tuế'],
    doUuTien: 70,
    tomTat: `**Tử Vi đi ôm vòng Thái Tuế** (với người tuổi âm) + **Giải Thần +
Phượng Các**: tạo thành bộ **TỨ LINH** trong tam hợp Mệnh.

- **Chắc chắn thành công**, được giao **trọng trách rất lớn**.`,
  },

  {
    id: 'tu-vi-vong-thai-tue-tu-linh-tu-tuong',
    title: 'Tứ Linh + Tử Tướng Thìn/Tuất - làm quan',
    sao: ['Tử Vi', 'Thiên Tướng'],
    cung: ['Mệnh'],
    chi: ['Thìn', 'Tuất'],
    ketHop: ['Tứ Linh', 'Vòng Thái Tuế', 'Tử Tướng'],
    doUuTien: 75,
    tomTat: `**Tứ Linh + Tử Tướng Thìn/Tuất ôm vòng Thái Tuế:** dễ làm quan,
có tài lãnh đạo chỉ huy.`,
  },

  // ============================================================
  // 27. Đại vận / Hạn gặp Tử Vi
  // ============================================================
  {
    id: 'tu-vi-dai-van-han',
    title: 'Đại vận & hạn gặp Tử Vi (đặc tính chung)',
    sao: ['Tử Vi'],
    doUuTien: 50,
    tomTat: `**Đại vận đến Tử Vi** = "tìm được minh quân" — rất thuận lợi cho công
danh, **công việc thăng tiến**, tài lộc dồi dào, tai ách **từ hung hóa cát**, may
mắn về tiền bạc.

**Rất hiếm khi mất ở Đại vận Tử Vi**, trừ khi gặp quá nhiều sát tinh (Tang Mã,
Hình Kỵ, Kình Đà, Không Kiếp).

**Đại vận Tử Sát đồng cung:** bán cát bán hung — nhưng vẫn may mắn cho công danh.`,

    chiTiet: `## Hạn đến Tử Vi

Tử Vi không có hãm địa — xem entry chuyên biệt theo trạng thái và bộ kết hợp.

## Đại vận đến Tử Vi - ý nghĩa

Giống như tìm được **minh quân** — trong công việc sẽ tìm được công việc làm
**dưới trướng một ông chủ rất giỏi, tốt bụng, có tài quản lý**, tài lộc hưng vượng.`,
  },

  {
    id: 'tu-vi-dai-van-mieu-vuong-dac',
    title: 'Đại vận đến Tử Vi - Miếu / Vượng / Đắc',
    sao: ['Tử Vi'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 55,
    tomTat: `**Đại vận đến Tử Vi MIẾU / VƯỢNG / ĐẮC:** **rất tốt**, danh tài
đều lợi, may mắn toàn diện.`,
  },

  {
    id: 'tu-vi-dai-van-binh',
    title: 'Đại vận đến Tử Vi - Bình hòa',
    sao: ['Tử Vi'],
    chi: ['Tý', 'Hợi', 'Mão', 'Dậu'],
    trangThai: ['Bình'],
    doUuTien: 55,
    tomTat: `**Đại vận đến Tử Vi BÌNH HÒA (Tý / Hợi / Mão / Dậu):** kém tốt, bình
thường — gặp bất lợi thì khó qua.`,
  },

  {
    id: 'tu-vi-dai-van-han-khoi-viet',
    title: 'Đại vận / hạn Tử Vi + Khôi Việt',
    sao: ['Tử Vi'],
    ketHop: ['Thiên Khôi', 'Thiên Việt'],
    doUuTien: 45,
    tomTat: `**Đại vận / hạn Tử Vi + Khôi Việt:** **thắng lợi về mọi mặt**.`,
  },

  {
    id: 'tu-vi-dai-van-han-sat-tinh',
    title: 'Đại vận / hạn Tử Vi + Sát tinh',
    sao: ['Tử Vi'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Hóa Kỵ', 'Thiên Hình'],
    doUuTien: 45,
    tomTat: `**Đại vận / hạn Tử Vi + Sát tinh** (Không, Kiếp, Kỵ, Thiên Hình):
**đau ốm, mất của, kiện tụng**.`,
  },

  {
    id: 'tu-vi-dai-van-han-kinh-da-ky',
    title: 'Đại vận / hạn Tử Vi + Kình Đà Kỵ',
    sao: ['Tử Vi'],
    ketHop: ['Kình Dương', 'Đà La', 'Hóa Kỵ'],
    doUuTien: 45,
    tomTat: `**Đại vận / hạn Tử Vi + Kình Dương / Đà La / Hóa Kỵ:** **đau ốm,
mắc lừa**.`,
  },
];
