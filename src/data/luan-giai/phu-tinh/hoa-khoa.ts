import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO HÓA KHOA - Tứ Hóa, Đệ Nhất Giải Thần
 *
 * Bộ Tam Hóa Liên Châu (Lộc + Quyền + Khoa) đã viết tại file hoa-loc.ts
 * với tag cả 3 sao. File này tập trung phần riêng của Hóa Khoa + 11 cung.
 */
export const luanGiai_HoaKhoa: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung của sao Hóa Khoa
  // ============================================================
  {
    id: 'hoa-khoa-tinh-chat-chung',
    title: 'Hóa Khoa - Đặc tính chung',
    sao: ['Hóa Khoa'],
    doUuTien: 30,
    tomTat: `**Hóa Khoa** thuộc bộ **Tứ Hóa** (Hóa Lộc, Hóa Quyền, Hóa Khoa, Hóa
Kỵ), ngũ hành **Thủy** (Âm Thủy).

**Hóa khí:** **Văn Tinh + Phúc Tinh** — chủ về **khoa giáp**, được ví như
**"ngọn đèn trí tuệ"** soi đường.

**Đặc tính:** **thông minh, hiếu học, từ thiện, nhân hậu** — vừa có **HỌC** vừa
có **HẠNH**, vừa có **tài** vừa có **đức**.

**Vị trí miếu hãm:**
- **Vượng địa:** Dần, Thân, Hợi, Sửu, Mùi, Thìn, Tuất
- **Hãm địa:** Tý, Dậu (và một số cung khác)

**Cách an:** theo **Thiên Can năm sinh** — mỗi người chỉ có **DUY NHẤT 1 Hóa
Khoa** trong lá số.

Hóa Khoa rất tốt nếu đóng ở **Phúc, Mệnh, Thân, Quan**.`,
  },

  // ============================================================
  // 2. Hóa Khoa - "Đệ Nhất Giải Thần"
  // ============================================================
  {
    id: 'hoa-khoa-de-nhat-giai-than',
    title: 'Hóa Khoa - "Đệ Nhất Giải Thần"',
    sao: ['Hóa Khoa'],
    doUuTien: 35,
    tomTat: `**Hóa Khoa là PHÚC TINH, là ĐỆ NHẤT GIẢI THẦN** — sao giải tai
ương mạnh nhất.

**Khả năng giải:**
- Giải **một số lớn tai ương, bệnh tật**
- Bộ phận cơ thể nào bị **hình thương** mà có Hóa Khoa đi kèm: **bệnh nhẹ đi,
  có thể chữa trị được**
- **Chế ngự được sát tinh** (Kình, Đà, Không, Kiếp, Hỏa, Linh)

**Tam Hóa Liên Châu:** Hóa Khoa + Hóa Quyền + Hóa Lộc phối chiếu Mệnh / Thân
khả năng cứu giải **GIA TĂNG GẤP BỘI**: may mắn đến liên tiếp (chỉ cần không
gặp sát hay ám tinh).`,
  },

  // ============================================================
  // 3. Hóa Khoa tại Mệnh - tính tình
  // ============================================================
  {
    id: 'hoa-khoa-tai-menh-tinh-tinh',
    title: 'Hóa Khoa tại Mệnh - Tính tình',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    doUuTien: 85,
    tomTat: `**Hóa Khoa cư Mệnh:**

- **Thông minh, hiếu học, hay tìm tòi, hiếu kỳ, tự học**
- **Dễ đỗ đạt**, có **khoa bảng cao**, học rộng biết nhiều
- Có **tài năng suy luận, nghiên cứu, giáo khoa**
- **Nhân hậu, từ thiện, nết tốt**

(Xem entry chuyên biệt theo trạng thái Đắc / Hãm.)`,
  },

  {
    id: 'hoa-khoa-tai-menh-tinh-tinh-dac-dia',
    title: 'Hóa Khoa tại Mệnh Đắc địa - Trí nhớ tốt, tư duy sắc bén',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 78,
    tomTat: `**Hóa Khoa Đắc địa tại Mệnh:**

- **Trí nhớ tốt, tư duy logic sắc bén**
- "Lấy nhu thắng cương", ứng xử **ôn hòa**, giữ lễ nghĩa
- Có thể nổi danh nhờ **tri thức**`,
  },

  {
    id: 'hoa-khoa-tai-menh-tinh-tinh-ham',
    title: 'Hóa Khoa tại Mệnh Hãm - Lý luận suông',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `**Hóa Khoa Hãm địa tại Mệnh:**

- Vẫn có trí tuệ cao nhưng **khó phát huy** vì môi trường không thuận hoặc bị
  sát tinh phá
- Dễ thành **lý luận suông, giỏi lý thuyết mà thiếu thực tế**`,
  },

  // ============================================================
  // 4. Hóa Khoa tại Mệnh - công danh
  // ============================================================
  {
    id: 'hoa-khoa-tai-menh-cong-danh',
    title: 'Hóa Khoa tại Mệnh - Công danh',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `**Hóa Khoa cư Mệnh - công danh:**

- Có **quan chức**, có **danh thơm tiếng tốt**
- **Văn tài xuất chúng** — đặc biệt **tài MÔ PHẠM, khả năng giáo khoa, năng
  khiếu lý thuyết gia**
- Thường có **NGHỀ VĂN HÓA**: dạy học, khảo cứu, viết văn`,
  },

  {
    id: 'hoa-khoa-tai-menh-cong-danh-thien-khoi',
    title: 'Hóa Khoa + Thiên Khôi tại Mệnh - Tài năng phát triển',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Thiên Khôi'],
    doUuTien: 75,
    tomTat: `**Hóa Khoa + Thiên Khôi tại Mệnh:** tài năng càng phát triển, công danh thuận lợi.`,
  },

  {
    id: 'hoa-khoa-tai-menh-cong-danh-thien-viet',
    title: 'Hóa Khoa + Thiên Việt tại Mệnh - Tài năng phát triển',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Thiên Việt'],
    doUuTien: 75,
    tomTat: `**Hóa Khoa + Thiên Việt tại Mệnh:** tài năng càng phát triển, công danh thuận lợi.`,
  },

  {
    id: 'hoa-khoa-tai-menh-cong-danh-van-xuong',
    title: 'Hóa Khoa + Văn Xương tại Mệnh - Tài năng phát triển',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Văn Xương'],
    doUuTien: 75,
    tomTat: `**Hóa Khoa + Văn Xương tại Mệnh:** tài năng càng phát triển, văn tài xuất chúng.`,
  },

  {
    id: 'hoa-khoa-tai-menh-cong-danh-van-khuc',
    title: 'Hóa Khoa + Văn Khúc tại Mệnh - Tài năng phát triển',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Văn Khúc'],
    doUuTien: 75,
    tomTat: `**Hóa Khoa + Văn Khúc tại Mệnh:** tài năng càng phát triển, văn tài xuất chúng.`,
  },

  {
    id: 'hoa-khoa-tai-menh-cong-danh-thai-duong',
    title: 'Hóa Khoa + Thái Dương sáng tại Mệnh - Tài năng phát triển',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Thái Dương'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 75,
    tomTat: `**Hóa Khoa + Thái Dương (sáng) tại Mệnh:** tài năng càng phát triển, công danh hiển đạt.`,
  },

  {
    id: 'hoa-khoa-tai-menh-cong-danh-thai-am',
    title: 'Hóa Khoa + Thái Âm sáng tại Mệnh - Tài năng phát triển',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Thái Âm'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 75,
    tomTat: `**Hóa Khoa + Thái Âm (sáng) tại Mệnh:** tài năng càng phát triển, công danh hiển đạt.`,
  },

  {
    id: 'hoa-khoa-tai-menh-cong-danh-sat-tinh',
    title: 'Hóa Khoa + Sát tinh tại Mệnh - Chậm khoa bảng',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 75,
    tomTat: `**Hóa Khoa + Sát tinh tại Mệnh:** không đỗ cao hoặc **chậm khoa bảng** — nhưng KHÔNG mất tư chất thông minh, năng tài văn hóa.`,
  },

  {
    id: 'hoa-khoa-tai-menh-cong-danh-van-tinh',
    title: 'Hóa Khoa + Văn tinh tại Mệnh - Hiển đạt',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Lưu Niên Văn Tinh', 'Hóa Khoa'],
    doUuTien: 75,
    tomTat: `**Hóa Khoa + Văn tinh tại Mệnh:** **hiển đạt** trên đường công danh, văn tài xuất chúng.`,
  },

  {
    id: 'hoa-khoa-tai-menh-cong-danh-quy-tinh-thien-khoi',
    title: 'Hóa Khoa + Quý tinh (Thiên Khôi) tại Mệnh - Có danh',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Thiên Khôi'],
    doUuTien: 75,
    tomTat: `**Hóa Khoa + Thiên Khôi tại Mệnh:** **có danh**, được quý nhân nâng đỡ.`,
  },

  {
    id: 'hoa-khoa-tai-menh-cong-danh-quy-tinh-thien-viet',
    title: 'Hóa Khoa + Quý tinh (Thiên Việt) tại Mệnh - Có danh',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Thiên Việt'],
    doUuTien: 75,
    tomTat: `**Hóa Khoa + Thiên Việt tại Mệnh:** **có danh**, được quý nhân nâng đỡ.`,
  },

  {
    id: 'hoa-khoa-tai-menh-cong-danh-tai-tinh-vu-khuc',
    title: 'Hóa Khoa + Tài tinh (Vũ Khúc) tại Mệnh - Có lộc',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Vũ Khúc'],
    doUuTien: 75,
    tomTat: `**Hóa Khoa + Vũ Khúc tại Mệnh:** **có lộc** ngoài đời nhiều hơn.`,
  },

  {
    id: 'hoa-khoa-tai-menh-cong-danh-tai-tinh-loc-ton',
    title: 'Hóa Khoa + Tài tinh (Lộc Tồn) tại Mệnh - Có lộc',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Lộc Tồn'],
    doUuTien: 75,
    tomTat: `**Hóa Khoa + Lộc Tồn tại Mệnh:** **có lộc** ngoài đời nhiều hơn.`,
  },

  {
    id: 'hoa-khoa-tai-menh-cong-danh-tai-tinh-hoa-loc',
    title: 'Hóa Khoa + Tài tinh (Hóa Lộc) tại Mệnh - Có lộc',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Hóa Lộc'],
    doUuTien: 75,
    tomTat: `**Hóa Khoa + Hóa Lộc tại Mệnh:** **có lộc** ngoài đời nhiều hơn.`,
  },

  // ============================================================
  // 5. Bộ sao TỐT của Hóa Khoa
  // ============================================================
  {
    id: 'hoa-khoa-bo-sao-tot',
    title: 'Hóa Khoa - Bộ sao TỐT',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh', 'Tài Bạch', 'Quan Lộc'],
    ketHop: ['Hóa Lộc', 'Hóa Quyền'],
    doUuTien: 55,
    tomTat: `**Tam Hóa Liên Châu** (Khoa + Quyền + Lộc) tại Mệnh / Tài / Quan: **QUÝ CÁCH, phúc lớn**, công danh vinh hiển. Tuổi **Canh, Tân** làm to mà yểu.

**Hóa Khoa độc thủ + Khôi Việt + Thiên Hỷ:** **dễ thành công** trong việc làm.`,
  },

  {
    id: 'hoa-khoa-bo-sao-tot-ta-huu-tam-hoa',
    title: 'Hóa Khoa + Tả Hữu lai triều (Tam Hóa củng Mệnh) - Công khanh',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Hóa Lộc', 'Hóa Quyền'],
    doUuTien: 50,
    tomTat: `**Hóa Khoa + Tả Hữu lai triều (Tam Hóa củng Mệnh):** làm tới **CÔNG KHANH**.`,
  },

  {
    id: 'hoa-khoa-bo-sao-tot-hoa-loc-trung-nhieu',
    title: 'Hóa Khoa + Hóa Lộc trùng nhiêu tại Mệnh - Phụ tử văn chương cái thế',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Hóa Lộc'],
    doUuTien: 50,
    tomTat: `**Hóa Khoa + Hóa Lộc trùng nhiêu ư Mệnh:** **phụ tử văn chương cái thế** (cha con đều văn chương xuất chúng).`,
  },

  {
    id: 'hoa-khoa-bo-sao-tot-hoa-ky-ty',
    title: 'Hóa Khoa + Hóa Kỵ tại Tý cư Mệnh - Ngôn lành danh thuận',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    chi: ['Tý'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 50,
    tomTat: `**Hóa Khoa + Hóa Kỵ tại Tý cư Mệnh:** **NGÔN LÀNH DANH THUẬN**.`,
  },

  {
    id: 'hoa-khoa-bo-sao-tot-van-xuong',
    title: 'Hóa Khoa + Văn Xương - Đỗ sớm',
    sao: ['Hóa Khoa'],
    ketHop: ['Văn Xương'],
    doUuTien: 50,
    tomTat: `**Hóa Khoa + Văn Xương:** **đỗ sớm**.`,
  },

  {
    id: 'hoa-khoa-bo-sao-tot-van-khuc',
    title: 'Hóa Khoa + Văn Khúc - Đỗ sớm',
    sao: ['Hóa Khoa'],
    ketHop: ['Văn Khúc'],
    doUuTien: 50,
    tomTat: `**Hóa Khoa + Văn Khúc:** **đỗ sớm**.`,
  },

  {
    id: 'hoa-khoa-bo-sao-tot-loc-ton-hoi-dan-than',
    title: 'Hóa Khoa + Lộc Tồn tại Hợi/Dần/Thân - Danh vị oanh liệt',
    sao: ['Hóa Khoa'],
    chi: ['Hợi', 'Dần', 'Thân'],
    ketHop: ['Lộc Tồn'],
    doUuTien: 50,
    tomTat: `**Hóa Khoa + Lộc Tồn tại Hợi / Dần / Thân:** **DANH VỊ OANH LIỆT**.`,
  },

  // ============================================================
  // 6. Bộ sao XẤU của Hóa Khoa
  // ============================================================
  {
    id: 'hoa-khoa-bo-sao-xau-dia-khong',
    title: 'Hóa Khoa + Địa Không - Không làm nên',
    sao: ['Hóa Khoa'],
    ketHop: ['Địa Không'],
    doUuTien: 50,
    tomTat: `**Hóa Khoa + Địa Không:** **không làm nên**, nhưng vẫn là **danh sĩ**, làm thầy người ta.`,
  },

  {
    id: 'hoa-khoa-bo-sao-xau-dia-kiep',
    title: 'Hóa Khoa + Địa Kiếp - Không làm nên',
    sao: ['Hóa Khoa'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 50,
    tomTat: `**Hóa Khoa + Địa Kiếp:** **không làm nên**, nhưng vẫn là **danh sĩ**, làm thầy người ta.`,
  },

  {
    id: 'hoa-khoa-bo-sao-xau-tuan',
    title: 'Hóa Khoa + Tuần - Một bước nên quan nhưng không bền',
    sao: ['Hóa Khoa'],
    ketHop: ['Tuần'],
    doUuTien: 50,
    tomTat: `**Hóa Khoa + Tuần:** **một bước nên quan nhưng không bền**.`,
  },

  {
    id: 'hoa-khoa-bo-sao-xau-triet',
    title: 'Hóa Khoa + Triệt - Một bước nên quan nhưng không bền',
    sao: ['Hóa Khoa'],
    ketHop: ['Triệt'],
    doUuTien: 50,
    tomTat: `**Hóa Khoa + Triệt:** **một bước nên quan nhưng không bền**.`,
  },

  {
    id: 'hoa-khoa-bo-sao-xau-luc-sat',
    title: 'Hóa Khoa + Lục Sát - Tổn hại danh tiếng',
    sao: ['Hóa Khoa'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 50,
    tomTat: `**Hóa Khoa + Kình Đà / Hỏa Linh / Không Kiếp:** thị phi, ganh ghét, **tổn hại danh tiếng**, công danh trắc trở, thi cử lận đận.`,
  },

  {
    id: 'hoa-khoa-bo-sao-xau-hoa-ky',
    title: 'Hóa Khoa + Hóa Kỵ - Tranh luận thị phi',
    sao: ['Hóa Khoa'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 50,
    tomTat: `**Hóa Khoa + Hóa Kỵ:** dễ gặp **tranh luận, thị phi, phản bác** dù lời nói đúng lý: cần tiết chế cầu toàn trong phát ngôn / viết lách.`,
  },

  {
    id: 'hoa-khoa-bo-sao-xau-dia-kiep-tranh-luan',
    title: 'Hóa Khoa + Địa Kiếp - Tranh luận thị phi',
    sao: ['Hóa Khoa'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 49,
    tomTat: `**Hóa Khoa + Địa Kiếp:** dễ gặp **tranh luận, thị phi, phản bác** dù lời nói đúng lý: cần tiết chế cầu toàn trong phát ngôn / viết lách.`,
  },

  {
    id: 'hoa-khoa-bo-sao-xau-linh-tinh',
    title: 'Hóa Khoa + Linh Tinh - Tranh luận thị phi',
    sao: ['Hóa Khoa'],
    ketHop: ['Linh Tinh'],
    doUuTien: 50,
    tomTat: `**Hóa Khoa + Linh Tinh:** dễ gặp **tranh luận, thị phi, phản bác** dù lời nói đúng lý: cần tiết chế cầu toàn trong phát ngôn / viết lách.`,
  },

  // ============================================================
  // 7. Hóa Khoa tại Phụ Mẫu
  // ============================================================
  {
    id: 'hoa-khoa-tai-phu-mau',
    title: 'Hóa Khoa tại Phụ Mẫu',
    sao: ['Hóa Khoa'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Hóa Khoa tại Phụ Mẫu** — đắc địa:

Cha mẹ là **người học cao, biết dạy con**, lấy **giáo dục làm gốc**. Gia đình
**nề nếp, trọng chữ tín, danh thơm**.

**Hãm địa:** cha mẹ có tài nhưng **duyên phận cách trở, tình cảm lạnh nhạt**.
Tư tưởng cao **khó gần** hoặc **áp đặt lý tưởng** khiến con mệt mỏi.`,
  },

  {
    id: 'hoa-khoa-tai-phu-mau-van-khuc',
    title: 'Hóa Khoa + Văn Khúc tại Phụ Mẫu - Dòng họ coi trọng giáo dục',
    sao: ['Hóa Khoa'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Văn Khúc'],
    doUuTien: 70,
    tomTat: `**Hóa Khoa + Văn Khúc tại Phụ Mẫu:** dòng họ **coi trọng giáo dục**, con kế thừa **nền tảng tri thức vững vàng**.`,
  },

  {
    id: 'hoa-khoa-tai-phu-mau-van-xuong',
    title: 'Hóa Khoa + Văn Xương tại Phụ Mẫu - Dòng họ coi trọng giáo dục',
    sao: ['Hóa Khoa'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Văn Xương'],
    doUuTien: 70,
    tomTat: `**Hóa Khoa + Văn Xương tại Phụ Mẫu:** dòng họ **coi trọng giáo dục**, con kế thừa **nền tảng tri thức vững vàng**.`,
  },

  {
    id: 'hoa-khoa-tai-phu-mau-thien-khoi',
    title: 'Hóa Khoa + Thiên Khôi tại Phụ Mẫu - Giàu lớn',
    sao: ['Hóa Khoa'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Thiên Khôi'],
    doUuTien: 70,
    tomTat: `**Hóa Khoa + Thiên Khôi tại Phụ Mẫu:** **giàu lớn**. (Coi mồ mả: Hóa Khoa chủ ngôi **dương phần**.)`,
  },

  {
    id: 'hoa-khoa-tai-phu-mau-sat-tinh',
    title: 'Hóa Khoa + Sát tinh tại Phụ Mẫu - Cha mẹ đoản thọ',
    sao: ['Hóa Khoa'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 70,
    tomTat: `**Hóa Khoa + Sát tinh tại Phụ Mẫu:** cha mẹ có trí tuệ cao nhưng **đoản thọ / bất trắc / ly tán**, **danh tiếng tổn hại**.`,
  },

  // ============================================================
  // 8. Hóa Khoa tại Phúc Đức
  // ============================================================
  {
    id: 'hoa-khoa-tai-phuc-duc',
    title: 'Hóa Khoa tại Phúc Đức',
    sao: ['Hóa Khoa'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `**Hóa Khoa tại Phúc Đức:** **phúc ấm từ dòng họ**, được tổ tiên
**che chở**.

(Xem entry chuyên biệt theo trạng thái Đắc / Hãm.)`,
  },

  {
    id: 'hoa-khoa-tai-phuc-duc-quyen-xuong-khuc',
    title: 'Hóa Khoa + Hóa Quyền + Văn Xương + Văn Khúc tại Phúc Đức - Giòng dõi văn gia',
    sao: ['Hóa Khoa'],
    cung: ['Phúc Đức'],
    ketHop: ['Hóa Quyền', 'Văn Xương', 'Văn Khúc'],
    doUuTien: 73,
    tomTat: `**Hóa Khoa + Hóa Quyền + Văn Xương + Văn Khúc tại Phúc Đức:** **giòng dõi văn gia**.`,
  },

  {
    id: 'hoa-khoa-tai-phuc-duc-xuong-khuc',
    title: 'Hóa Khoa + Văn Xương + Văn Khúc tại Phúc Đức - Đỗ lớn',
    sao: ['Hóa Khoa'],
    cung: ['Phúc Đức'],
    ketHop: ['Văn Xương', 'Văn Khúc'],
    doUuTien: 73,
    tomTat: `**Hóa Khoa + Văn Xương + Văn Khúc tại Phúc Đức:** **đỗ lớn**.`,
  },

  {
    id: 'hoa-khoa-tai-phuc-duc-hoa-loc',
    title: 'Hóa Khoa + Hóa Lộc tại Phúc Đức - Thọ',
    sao: ['Hóa Khoa'],
    cung: ['Phúc Đức'],
    ketHop: ['Hóa Lộc'],
    doUuTien: 73,
    tomTat: `**Hóa Khoa + Hóa Lộc tại Phúc Đức:** **THỌ**.`,
  },

  {
    id: 'hoa-khoa-tai-phuc-duc-vu-tham',
    title: 'Hóa Khoa + Vũ Khúc + Tham Lang tại Phúc Đức - Phát anh hùng',
    sao: ['Hóa Khoa'],
    cung: ['Phúc Đức'],
    ketHop: ['Vũ Khúc', 'Tham Lang'],
    doUuTien: 73,
    tomTat: `**Hóa Khoa + Vũ Khúc + Tham Lang tại Phúc Đức:** **PHÁT ANH HÙNG**.`,
  },

  {
    id: 'hoa-khoa-tai-phuc-duc-dac-dia',
    title: 'Hóa Khoa tại Phúc Đức Đắc địa - Truyền thống học hành',
    sao: ['Hóa Khoa'],
    cung: ['Phúc Đức'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 73,
    tomTat: `**Hóa Khoa Đắc địa tại Phúc Đức:**

- Dòng họ có **truyền thống học hành**, người thân nhiều **danh vị**
- Hưởng **phúc tổ lâu dài**, lập nghiệp nhờ **nền tảng gia tộc**
- Tư tưởng **thanh cao, sống trọng nghĩa lý**`,
  },

  {
    id: 'hoa-khoa-tai-phuc-duc-ham',
    title: 'Hóa Khoa tại Phúc Đức Hãm - Phúc mỏng dần',
    sao: ['Hóa Khoa'],
    cung: ['Phúc Đức'],
    trangThai: ['Hãm'],
    doUuTien: 73,
    tomTat: `**Hóa Khoa Hãm địa tại Phúc Đức:**

- Sống nặng lý tưởng, **thiếu thực tế, dễ cô lập**
- Tổ tiên có danh nhưng **không đủ lực phù trợ**, **phúc mỏng dần**`,
  },

  {
    id: 'hoa-khoa-tai-phuc-duc-ham-luc-sat',
    title: 'Hóa Khoa Hãm + Lục Sát tại Phúc Đức - Danh tiếng tổ tiên mai một',
    sao: ['Hóa Khoa'],
    cung: ['Phúc Đức'],
    trangThai: ['Hãm'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 68,
    tomTat: `**Hóa Khoa Hãm + Sát tinh / Không Kiếp tại Phúc Đức:** danh tiếng tổ tiên dễ **bôi nhọ / mai một**.`,
  },

  // ============================================================
  // 9. Hóa Khoa tại Điền Trạch
  // ============================================================
  {
    id: 'hoa-khoa-tai-dien-trach',
    title: 'Hóa Khoa tại Điền Trạch',
    sao: ['Hóa Khoa'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Hóa Khoa tại Điền Trạch:** sở hữu nhà cửa do **học vấn / danh
tiếng** mang lại. **Khang trang**, gắn liền môi trường **giáo dục, văn hóa cao**.
"An cư lạc nghiệp", gia đạo yên ổn, **nề nếp lễ nghĩa**.

**Hãm địa:** nhà đẹp nhưng **không khí lạnh nhạt, thiếu kết nối cảm xúc**.
Chốn cư ngụ **khó ổn định lâu dài**, nay đây mai đó.`,
  },

  {
    id: 'hoa-khoa-tai-dien-trach-tam-hoa',
    title: 'Hóa Khoa + Tam Hóa tại Điền Trạch - Ruộng vườn tiền của nhiều',
    sao: ['Hóa Khoa'],
    cung: ['Điền Trạch'],
    ketHop: ['Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa'],
    doUuTien: 70,
    tomTat: `**Hóa Khoa + Tam Hóa tại Điền Trạch:** **ruộng vườn tiền của nhiều**.`,
  },

  {
    id: 'hoa-khoa-tai-dien-trach-vu-khuc',
    title: 'Hóa Khoa + Vũ Khúc tại Điền Trạch - Điền tài vượng phát',
    sao: ['Hóa Khoa'],
    cung: ['Điền Trạch'],
    ketHop: ['Vũ Khúc'],
    doUuTien: 70,
    tomTat: `**Hóa Khoa + Vũ Khúc tại Điền Trạch:** **điền tài vượng phát**.`,
  },

  {
    id: 'hoa-khoa-tai-dien-trach-thien-tuong',
    title: 'Hóa Khoa + Thiên Tướng tại Điền Trạch - Điền tài vượng phát',
    sao: ['Hóa Khoa'],
    cung: ['Điền Trạch'],
    ketHop: ['Thiên Tướng'],
    doUuTien: 70,
    tomTat: `**Hóa Khoa + Thiên Tướng tại Điền Trạch:** **điền tài vượng phát**.`,
  },

  {
    id: 'hoa-khoa-tai-dien-trach-thien-luong',
    title: 'Hóa Khoa + Thiên Lương tại Điền Trạch - Điền tài vượng phát',
    sao: ['Hóa Khoa'],
    cung: ['Điền Trạch'],
    ketHop: ['Thiên Lương'],
    doUuTien: 70,
    tomTat: `**Hóa Khoa + Thiên Lương tại Điền Trạch:** **điền tài vượng phát**.`,
  },

  {
    id: 'hoa-khoa-tai-dien-trach-ta-phu',
    title: 'Hóa Khoa + Tả Phù tại Điền Trạch - Điền tài vượng phát',
    sao: ['Hóa Khoa'],
    cung: ['Điền Trạch'],
    ketHop: ['Tả Phù'],
    doUuTien: 70,
    tomTat: `**Hóa Khoa + Tả Phù tại Điền Trạch:** **điền tài vượng phát**.`,
  },

  {
    id: 'hoa-khoa-tai-dien-trach-huu-bat',
    title: 'Hóa Khoa + Hữu Bật tại Điền Trạch - Điền tài vượng phát',
    sao: ['Hóa Khoa'],
    cung: ['Điền Trạch'],
    ketHop: ['Hữu Bật'],
    doUuTien: 70,
    tomTat: `**Hóa Khoa + Hữu Bật tại Điền Trạch:** **điền tài vượng phát**.`,
  },

  {
    id: 'hoa-khoa-tai-dien-trach-thien-khoi',
    title: 'Hóa Khoa + Thiên Khôi tại Điền Trạch - Sớm có bất động sản',
    sao: ['Hóa Khoa'],
    cung: ['Điền Trạch'],
    ketHop: ['Thiên Khôi'],
    doUuTien: 70,
    tomTat: `**Hóa Khoa + Thiên Khôi tại Điền Trạch:** dễ mua nhà, sớm có bất động sản nhờ **tài học hoặc nghề tri thức**.`,
  },

  {
    id: 'hoa-khoa-tai-dien-trach-van-xuong',
    title: 'Hóa Khoa + Văn Xương tại Điền Trạch - Sớm có bất động sản',
    sao: ['Hóa Khoa'],
    cung: ['Điền Trạch'],
    ketHop: ['Văn Xương'],
    doUuTien: 70,
    tomTat: `**Hóa Khoa + Văn Xương tại Điền Trạch:** dễ mua nhà, sớm có bất động sản nhờ **tài học hoặc nghề tri thức**.`,
  },

  {
    id: 'hoa-khoa-tai-dien-trach-van-khuc',
    title: 'Hóa Khoa + Văn Khúc tại Điền Trạch - Sớm có bất động sản',
    sao: ['Hóa Khoa'],
    cung: ['Điền Trạch'],
    ketHop: ['Văn Khúc'],
    doUuTien: 70,
    tomTat: `**Hóa Khoa + Văn Khúc tại Điền Trạch:** dễ mua nhà, sớm có bất động sản nhờ **tài học hoặc nghề tri thức**.`,
  },

  // ============================================================
  // 10. Hóa Khoa tại Quan Lộc
  // ============================================================
  {
    id: 'hoa-khoa-tai-quan-loc',
    title: 'Hóa Khoa tại Quan Lộc',
    sao: ['Hóa Khoa'],
    cung: ['Quan Lộc'],
    doUuTien: 82,
    tomTat: `**Hóa Khoa tại Quan Lộc - VỊ TRÍ TỐT:** sự nghiệp sáng nhờ **học
vấn, hiểu biết**. **Trọng tri thức**, dễ **đỗ đạt**, có **danh tiếng học thuật**.
"**Hữu xạ tự nhiên hương**" — thăng tiến nhờ **năng lực thực sự và chính trực**.

Phù hợp công việc liên quan **lý luận, quản lý, giảng huấn, nghiên cứu**.

(Xem entry chuyên biệt cho cách Tam Hóa + Tả Hữu + Phá Quân tại Tý/Ngọ.)

**Hãm địa:** sự nghiệp "**lên thác xuống ghềnh**" do **lý tưởng hóa nghề
nghiệp**. Học nhiều nhưng **khó chuyển hóa thành kết quả thực tế**.`,
  },

  {
    id: 'hoa-khoa-tai-quan-loc-quyen-tu-vi-vu-khuc',
    title: 'Hóa Khoa + Hóa Quyền + Tử Vi + Vũ Khúc tại Quan Lộc - Hiển vinh',
    sao: ['Hóa Khoa'],
    cung: ['Quan Lộc'],
    ketHop: ['Hóa Quyền', 'Tử Vi', 'Vũ Khúc'],
    doUuTien: 77,
    tomTat: `**Hóa Khoa + Hóa Quyền + Tử Vi + Vũ Khúc tại Quan Lộc:** **hiển vinh**.`,
  },

  {
    id: 'hoa-khoa-tai-quan-loc-quyen-tu-vi-thien-ma',
    title: 'Hóa Khoa + Hóa Quyền + Tử Vi + Thiên Mã tại Quan Lộc - Hiển vinh',
    sao: ['Hóa Khoa'],
    cung: ['Quan Lộc'],
    ketHop: ['Hóa Quyền', 'Tử Vi', 'Thiên Mã'],
    doUuTien: 77,
    tomTat: `**Hóa Khoa + Hóa Quyền + Tử Vi + Thiên Mã tại Quan Lộc:** **hiển vinh**.`,
  },

  {
    id: 'hoa-khoa-tai-quan-loc-quyen-thien-phu-vu-khuc',
    title: 'Hóa Khoa + Hóa Quyền + Thiên Phủ + Vũ Khúc tại Quan Lộc - Hiển vinh',
    sao: ['Hóa Khoa'],
    cung: ['Quan Lộc'],
    ketHop: ['Hóa Quyền', 'Thiên Phủ', 'Vũ Khúc'],
    doUuTien: 77,
    tomTat: `**Hóa Khoa + Hóa Quyền + Thiên Phủ + Vũ Khúc tại Quan Lộc:** **hiển vinh**.`,
  },

  {
    id: 'hoa-khoa-tai-quan-loc-quyen-thien-phu-thien-ma',
    title: 'Hóa Khoa + Hóa Quyền + Thiên Phủ + Thiên Mã tại Quan Lộc - Hiển vinh',
    sao: ['Hóa Khoa'],
    cung: ['Quan Lộc'],
    ketHop: ['Hóa Quyền', 'Thiên Phủ', 'Thiên Mã'],
    doUuTien: 77,
    tomTat: `**Hóa Khoa + Hóa Quyền + Thiên Phủ + Thiên Mã tại Quan Lộc:** **hiển vinh**.`,
  },

  {
    id: 'hoa-khoa-tai-quan-loc-dia-khong',
    title: 'Hóa Khoa + Địa Không tại Quan Lộc - Tai tiếng',
    sao: ['Hóa Khoa'],
    cung: ['Quan Lộc'],
    ketHop: ['Địa Không'],
    doUuTien: 77,
    tomTat: `**Hóa Khoa + Địa Không tại Quan Lộc:** đề phòng **tai tiếng do lời nói, tranh luận học thuật**, vướng **vụ việc pháp lý** trong nghề.`,
  },

  {
    id: 'hoa-khoa-tai-quan-loc-dia-kiep',
    title: 'Hóa Khoa + Địa Kiếp tại Quan Lộc - Tai tiếng',
    sao: ['Hóa Khoa'],
    cung: ['Quan Lộc'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 77,
    tomTat: `**Hóa Khoa + Địa Kiếp tại Quan Lộc:** đề phòng **tai tiếng do lời nói, tranh luận học thuật**, vướng **vụ việc pháp lý** trong nghề.`,
  },

  {
    id: 'hoa-khoa-tai-quan-loc-hoa-ky',
    title: 'Hóa Khoa + Hóa Kỵ tại Quan Lộc - Tai tiếng',
    sao: ['Hóa Khoa'],
    cung: ['Quan Lộc'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 77,
    tomTat: `**Hóa Khoa + Hóa Kỵ tại Quan Lộc:** đề phòng **tai tiếng do lời nói, tranh luận học thuật**, vướng **vụ việc pháp lý** trong nghề.`,
  },

  {
    id: 'hoa-khoa-quan-loc-tam-hoa-ta-huu-pha-quan-ty-ngo',
    title: 'Hóa Khoa tại Quan Lộc + Tam Hóa + Tả Hữu + Phá Quân tại Tý/Ngọ - Quân công lớn',
    sao: ['Hóa Khoa'],
    cung: ['Quan Lộc'],
    chi: ['Tý', 'Ngọ'],
    ketHop: ['Hóa Lộc', 'Hóa Quyền', 'Tả Phù', 'Hữu Bật', 'Phá Quân'],
    doUuTien: 80,
    tomTat: `**Hóa Khoa tại Quan Lộc + Tam Hóa + Tả Hữu + Phá Quân tại Tý hoặc
Ngọ:**

**QUÂN CÔNG LỚN, HIỂN HÁCH** — cách cục đỉnh cao về sự nghiệp võ nghiệp /
quan lộ.`,
  },

  // ============================================================
  // 11. Hóa Khoa tại Nô Bộc
  // ============================================================
  {
    id: 'hoa-khoa-tai-no-boc',
    title: 'Hóa Khoa tại Nô Bộc',
    sao: ['Hóa Khoa'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Hóa Khoa tại Nô Bộc** — bạn bè quanh đương số mang **tính tri thức**.

(Xem entry chuyên biệt theo trạng thái Đắc / Hãm.)`,
  },

  {
    id: 'hoa-khoa-tai-no-boc-tam-hoa',
    title: 'Hóa Khoa + Tam Hóa tại Nô Bộc - Nhiều người giúp đỡ',
    sao: ['Hóa Khoa'],
    cung: ['Nô Bộc'],
    ketHop: ['Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa'],
    doUuTien: 70,
    tomTat: `**Hóa Khoa + Tam Hóa tại Nô Bộc:** **nhiều người giúp đỡ đắc lực, làm nên**.`,
  },

  {
    id: 'hoa-khoa-tai-no-boc-dac-dia',
    title: 'Hóa Khoa tại Nô Bộc Đắc địa - Bạn bè tri thức',
    sao: ['Hóa Khoa'],
    cung: ['Nô Bộc'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 70,
    tomTat: `**Hóa Khoa Đắc địa tại Nô Bộc:**

- Chơi với **người có học, trọng lễ nghĩa, tri thức** — thầy cô, học giả, bạn
  **thanh cao văn nhã**
- Chọn người đồng hành theo **đạo đức, học vấn, cách giao tiếp**
- **Được kính trọng**, ít tranh chấp với cấp dưới`,
  },

  {
    id: 'hoa-khoa-tai-no-boc-ham',
    title: 'Hóa Khoa tại Nô Bộc Hãm - Lý tưởng hóa bạn bè',
    sao: ['Hóa Khoa'],
    cung: ['Nô Bộc'],
    trangThai: ['Hãm'],
    doUuTien: 70,
    tomTat: `**Hóa Khoa Hãm địa tại Nô Bộc:**

- **Lý tưởng hóa bạn bè** — chọn theo tư tưởng hơn thực tế
- Bạn **chỉ hợp lý tưởng nhưng không hỗ trợ thực tế**
- **Nói lý nhiều**, khó hòa nhập môi trường bình dân / thương mại`,
  },

  // ============================================================
  // 12. Hóa Khoa tại Thiên Di
  // ============================================================
  {
    id: 'hoa-khoa-tai-thien-di',
    title: 'Hóa Khoa tại Thiên Di',
    sao: ['Hóa Khoa'],
    cung: ['Thiên Di'],
    doUuTien: 78,
    tomTat: `**Hóa Khoa tại Thiên Di:** xuất hiện nơi công cộng với **hình
tượng có tri thức**.

Dễ **trọng dụng** trong **giáo dục, chính trị, pháp luật** hoặc lĩnh vực yêu
cầu học vấn. Đi xa học hành / công tác **kết quả tốt**, gặp **người nâng đỡ**.

**Hãm địa:** thường **nói lý thuyết**, thiếu thực tế: người khác khó gần. Đi
xa **tĩnh tại nhưng ít sinh khí** — có lợi học tập nhưng tài lộc chậm.`,
  },

  {
    id: 'hoa-khoa-tai-thien-di-hoa-quyen',
    title: 'Hóa Khoa + Hóa Quyền tại Thiên Di - Đi ra có tài lợi',
    sao: ['Hóa Khoa'],
    cung: ['Thiên Di'],
    ketHop: ['Hóa Quyền'],
    doUuTien: 73,
    tomTat: `**Hóa Khoa + Hóa Quyền tại Thiên Di:** **đi ra có tài lợi, người ta quý nể**.`,
  },

  {
    id: 'hoa-khoa-tai-thien-di-quyen-ta-huu-khoi-viet',
    title: 'Hóa Khoa + Hóa Quyền + Tả Hữu + Khôi Việt tại Thiên Di - Đi ra làm nên lớn',
    sao: ['Hóa Khoa'],
    cung: ['Thiên Di'],
    ketHop: ['Hóa Quyền', 'Tả Phù', 'Hữu Bật', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 73,
    tomTat: `**Hóa Khoa + Hóa Quyền + Tả Hữu + Khôi Việt tại Thiên Di:** **đi ra làm nên lớn**, gặp quý nhân tín nhiệm.`,
  },

  {
    id: 'hoa-khoa-tai-thien-di-khoi-viet-nhat-nguyet-tu-phu',
    title: 'Hóa Khoa + Khôi Việt + Nhật Nguyệt + Tử Phủ tại Thiên Di - Đi ra làm nên lớn',
    sao: ['Hóa Khoa'],
    cung: ['Thiên Di'],
    ketHop: ['Thiên Khôi', 'Thiên Việt', 'Thái Dương', 'Thái Âm', 'Tử Vi', 'Thiên Phủ'],
    doUuTien: 73,
    tomTat: `**Hóa Khoa + Khôi Việt + Nhật Nguyệt + Tử Phủ tại Thiên Di:** **đi ra làm nên lớn**, gặp quý nhân tín nhiệm.`,
  },

  {
    id: 'hoa-khoa-tai-thien-di-tam-hoa',
    title: 'Hóa Khoa + Tam Hóa tại Thiên Di - Quyền binh giàu sang',
    sao: ['Hóa Khoa'],
    cung: ['Thiên Di'],
    ketHop: ['Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa'],
    doUuTien: 73,
    tomTat: `**Hóa Khoa + Tam Hóa tại Thiên Di:** **quyền binh, giàu sang**.`,
  },

  {
    id: 'hoa-khoa-tai-thien-di-hoa-ky',
    title: 'Hóa Khoa + Hóa Kỵ tại Thiên Di - Tranh luận thị phi',
    sao: ['Hóa Khoa'],
    cung: ['Thiên Di'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 73,
    tomTat: `**Hóa Khoa + Hóa Kỵ tại Thiên Di:** **tranh luận, thị phi, phản bác** dù đúng lý.`,
  },

  {
    id: 'hoa-khoa-tai-thien-di-dia-kiep',
    title: 'Hóa Khoa + Địa Kiếp tại Thiên Di - Tranh luận thị phi',
    sao: ['Hóa Khoa'],
    cung: ['Thiên Di'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 73,
    tomTat: `**Hóa Khoa + Địa Kiếp tại Thiên Di:** **tranh luận, thị phi, phản bác** dù đúng lý.`,
  },

  {
    id: 'hoa-khoa-tai-thien-di-linh-tinh',
    title: 'Hóa Khoa + Linh Tinh tại Thiên Di - Tranh luận thị phi',
    sao: ['Hóa Khoa'],
    cung: ['Thiên Di'],
    ketHop: ['Linh Tinh'],
    doUuTien: 73,
    tomTat: `**Hóa Khoa + Linh Tinh tại Thiên Di:** **tranh luận, thị phi, phản bác** dù đúng lý.`,
  },

  // ============================================================
  // 13. Hóa Khoa tại Tật Ách - GIẢI BỆNH MẠNH
  // ============================================================
  {
    id: 'hoa-khoa-tai-tat-ach',
    title: 'Hóa Khoa tại Tật Ách - Giải bệnh mạnh',
    sao: ['Hóa Khoa'],
    cung: ['Tật Ách'],
    doUuTien: 80,
    tomTat: `**Hóa Khoa tại Tật Ách:** vị trí TỐT — phòng bệnh bằng **tri thức,
hiểu biết**; trị bệnh bằng **lý luận, khoa học, y học chính quy**.

Đối mặt nghịch cảnh bằng **lý trí, hiểu nguyên nhân gốc rễ**.

**Ít mắc bệnh trầm trọng** — nếu có thì **phát hiện sớm, điều trị hợp lý, dễ
hồi phục**. Tâm lý **ổn định, ít lo âu cực đoan**, giữ bình tĩnh.

**Hãm địa:** dễ mắc **bệnh hệ thần kinh, suy nghĩ quá mức, lo âu** do lý trí
vận động quá nhiều. **Phân tích bệnh quá chi tiết**: **tâm bệnh hoặc loạn
tưởng**, thiếu cân bằng tâm-thân-trí.`,
  },

  {
    id: 'hoa-khoa-tai-tat-ach-tam-hoa',
    title: 'Hóa Khoa + Tam Hóa tại Tật Ách - Ốm gặp thuốc',
    sao: ['Hóa Khoa'],
    cung: ['Tật Ách'],
    ketHop: ['Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa'],
    doUuTien: 75,
    tomTat: `**Hóa Khoa + Tam Hóa tại Tật Ách:** **ốm gặp thuốc, tai nạn gặp người cứu**.`,
  },

  {
    id: 'hoa-khoa-tai-tat-ach-ta-huu-tu-phu',
    title: 'Hóa Khoa + Tả Hữu + Tử Phủ tại Tật Ách - Ốm gặp thuốc',
    sao: ['Hóa Khoa'],
    cung: ['Tật Ách'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Tử Vi', 'Thiên Phủ'],
    doUuTien: 75,
    tomTat: `**Hóa Khoa + Tả Hữu + Tử Phủ tại Tật Ách:** **ốm gặp thuốc, tai nạn gặp người cứu**.`,
  },

  // ============================================================
  // 14. Hóa Khoa tại Tài Bạch
  // ============================================================
  {
    id: 'hoa-khoa-tai-tai-bach',
    title: 'Hóa Khoa tại Tài Bạch',
    sao: ['Hóa Khoa'],
    cung: ['Tài Bạch'],
    doUuTien: 78,
    tomTat: `**Hóa Khoa tại Tài Bạch** — tài lộc gắn với **chất xám, học vấn**.

(Xem entry chuyên biệt theo trạng thái Đắc / Hãm.)`,
  },

  {
    id: 'hoa-khoa-tai-tai-bach-van-khuc',
    title: 'Hóa Khoa + Văn Khúc tại Tài Bạch - Lợi từ chất xám',
    sao: ['Hóa Khoa'],
    cung: ['Tài Bạch'],
    ketHop: ['Văn Khúc'],
    doUuTien: 73,
    tomTat: `**Hóa Khoa + Văn Khúc tại Tài Bạch:** lợi từ **học bổng, bản quyền, công trình nghiên cứu, dạy học, viết sách, tư vấn chuyên môn**.`,
  },

  {
    id: 'hoa-khoa-tai-tai-bach-thien-khoi',
    title: 'Hóa Khoa + Thiên Khôi tại Tài Bạch - Lợi từ chất xám',
    sao: ['Hóa Khoa'],
    cung: ['Tài Bạch'],
    ketHop: ['Thiên Khôi'],
    doUuTien: 73,
    tomTat: `**Hóa Khoa + Thiên Khôi tại Tài Bạch:** lợi từ **học bổng, bản quyền, công trình nghiên cứu, dạy học, viết sách, tư vấn chuyên môn**.`,
  },

  {
    id: 'hoa-khoa-tai-tai-bach-thien-viet',
    title: 'Hóa Khoa + Thiên Việt tại Tài Bạch - Lợi từ chất xám',
    sao: ['Hóa Khoa'],
    cung: ['Tài Bạch'],
    ketHop: ['Thiên Việt'],
    doUuTien: 73,
    tomTat: `**Hóa Khoa + Thiên Việt tại Tài Bạch:** lợi từ **học bổng, bản quyền, công trình nghiên cứu, dạy học, viết sách, tư vấn chuyên môn**.`,
  },

  {
    id: 'hoa-khoa-tai-tai-bach-tam-hoa',
    title: 'Hóa Khoa + Tam Hóa tại Tài Bạch - Điền tài vượng phát',
    sao: ['Hóa Khoa'],
    cung: ['Tài Bạch'],
    ketHop: ['Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa'],
    doUuTien: 73,
    tomTat: `**Hóa Khoa + Tam Hóa tại Tài Bạch:** **điền tài vượng phát**.`,
  },

  {
    id: 'hoa-khoa-tai-tai-bach-vu-tuong-luong-ta-huu',
    title: 'Hóa Khoa + Vũ + Tướng + Lương + Tả Hữu tại Tài Bạch - Điền tài vượng phát',
    sao: ['Hóa Khoa'],
    cung: ['Tài Bạch'],
    ketHop: ['Vũ Khúc', 'Thiên Tướng', 'Thiên Lương', 'Tả Phù', 'Hữu Bật'],
    doUuTien: 73,
    tomTat: `**Hóa Khoa + Vũ + Tướng + Lương + Tả Hữu tại Tài Bạch:** **điền tài vượng phát**.`,
  },

  {
    id: 'hoa-khoa-tai-tai-bach-hoa-ky',
    title: 'Hóa Khoa + Hóa Kỵ tại Tài Bạch - Tài lộc trì hoãn',
    sao: ['Hóa Khoa'],
    cung: ['Tài Bạch'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 73,
    tomTat: `**Hóa Khoa + Hóa Kỵ tại Tài Bạch:** tài lộc **trì hoãn**: tránh **bảo thủ về quan điểm tài chính**.`,
  },

  {
    id: 'hoa-khoa-tai-tai-bach-kinh-duong',
    title: 'Hóa Khoa + Kình Dương tại Tài Bạch - Tài lộc trì hoãn',
    sao: ['Hóa Khoa'],
    cung: ['Tài Bạch'],
    ketHop: ['Kình Dương'],
    doUuTien: 73,
    tomTat: `**Hóa Khoa + Kình Dương tại Tài Bạch:** tài lộc **trì hoãn**: tránh **bảo thủ về quan điểm tài chính**.`,
  },

  {
    id: 'hoa-khoa-tai-tai-bach-da-la',
    title: 'Hóa Khoa + Đà La tại Tài Bạch - Tài lộc trì hoãn',
    sao: ['Hóa Khoa'],
    cung: ['Tài Bạch'],
    ketHop: ['Đà La'],
    doUuTien: 73,
    tomTat: `**Hóa Khoa + Đà La tại Tài Bạch:** tài lộc **trì hoãn**: tránh **bảo thủ về quan điểm tài chính**.`,
  },

  {
    id: 'hoa-khoa-tai-tai-bach-dac-dia',
    title: 'Hóa Khoa tại Tài Bạch Đắc địa - Tài lộc tri thức',
    sao: ['Hóa Khoa'],
    cung: ['Tài Bạch'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 73,
    tomTat: `**Hóa Khoa Đắc địa tại Tài Bạch:**

- Tài lộc từ nghề **tri thức, luật pháp, giáo dục, y tế, lý luận**
- Đầu tư cho **học vấn, phát triển bản thân**
- Tài vận **ổn định, tích lũy**, làm ăn **uy tín**`,
  },

  {
    id: 'hoa-khoa-tai-tai-bach-ham',
    title: 'Hóa Khoa tại Tài Bạch Hãm - Nghèo trong cao quý',
    sao: ['Hóa Khoa'],
    cung: ['Tài Bạch'],
    trangThai: ['Hãm'],
    doUuTien: 73,
    tomTat: `**Hóa Khoa Hãm địa tại Tài Bạch:**

- Tiền đến **chậm** do quá tính toán, bỏ qua cơ hội thực tế
- **"Nghèo trong cao quý"** — không bon chen, khó làm giàu nhanh`,
  },

  // ============================================================
  // 15. Hóa Khoa tại Tử Tức
  // ============================================================
  {
    id: 'hoa-khoa-tai-tu-tuc',
    title: 'Hóa Khoa tại Tử Tức',
    sao: ['Hóa Khoa'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Hóa Khoa tại Tử Tức:** điềm tốt sinh con - nuôi con. Con cái
**học hành tốt, đỗ đạt**, thành công qua **con đường tri thức**: cha mẹ "**mát
mặt**".

Cách dạy con thiên về **lý trí, giáo dưỡng đạo đức**, dùng tình cảm nhẹ nhàng
**cảm hóa**.

Đôi khi **kỳ vọng cao** về học hành / đạo đức: áp lực cho con / khoảng cách
thế hệ. "**Nuôi con bằng tư tưởng**", thiếu thực tế.`,
  },

  {
    id: 'hoa-khoa-tai-tu-tuc-tam-hoa',
    title: 'Hóa Khoa + Tam Hóa tại Tử Tức - Sinh quý tử',
    sao: ['Hóa Khoa'],
    cung: ['Tử Tức'],
    ketHop: ['Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa'],
    doUuTien: 70,
    tomTat: `**Hóa Khoa + Tam Hóa tại Tử Tức:** sinh **quý tử, làm nên sang giàu**.`,
  },

  {
    id: 'hoa-khoa-tai-tu-tuc-van-xuong',
    title: 'Hóa Khoa + Văn Xương tại Tử Tức - Con xuất chúng học thuật',
    sao: ['Hóa Khoa'],
    cung: ['Tử Tức'],
    ketHop: ['Văn Xương'],
    doUuTien: 70,
    tomTat: `**Hóa Khoa + Văn Xương tại Tử Tức:** con cái **xuất chúng học thuật**, tiếng thơm đạo đức trong **giáo dục, công quyền**.`,
  },

  {
    id: 'hoa-khoa-tai-tu-tuc-van-khuc',
    title: 'Hóa Khoa + Văn Khúc tại Tử Tức - Con xuất chúng học thuật',
    sao: ['Hóa Khoa'],
    cung: ['Tử Tức'],
    ketHop: ['Văn Khúc'],
    doUuTien: 70,
    tomTat: `**Hóa Khoa + Văn Khúc tại Tử Tức:** con cái **xuất chúng học thuật**, tiếng thơm đạo đức trong **giáo dục, công quyền**.`,
  },

  {
    id: 'hoa-khoa-tai-tu-tuc-thien-khoi',
    title: 'Hóa Khoa + Thiên Khôi tại Tử Tức - Con xuất chúng học thuật',
    sao: ['Hóa Khoa'],
    cung: ['Tử Tức'],
    ketHop: ['Thiên Khôi'],
    doUuTien: 70,
    tomTat: `**Hóa Khoa + Thiên Khôi tại Tử Tức:** con cái **xuất chúng học thuật**, tiếng thơm đạo đức trong **giáo dục, công quyền**.`,
  },

  {
    id: 'hoa-khoa-tai-tu-tuc-thien-viet',
    title: 'Hóa Khoa + Thiên Việt tại Tử Tức - Con xuất chúng học thuật',
    sao: ['Hóa Khoa'],
    cung: ['Tử Tức'],
    ketHop: ['Thiên Việt'],
    doUuTien: 70,
    tomTat: `**Hóa Khoa + Thiên Việt tại Tử Tức:** con cái **xuất chúng học thuật**, tiếng thơm đạo đức trong **giáo dục, công quyền**.`,
  },

  {
    id: 'hoa-khoa-tai-tu-tuc-ta-phu',
    title: 'Hóa Khoa + Tả Phù tại Tử Tức - Con xuất chúng học thuật',
    sao: ['Hóa Khoa'],
    cung: ['Tử Tức'],
    ketHop: ['Tả Phù'],
    doUuTien: 70,
    tomTat: `**Hóa Khoa + Tả Phù tại Tử Tức:** con cái **xuất chúng học thuật**, tiếng thơm đạo đức trong **giáo dục, công quyền**.`,
  },

  {
    id: 'hoa-khoa-tai-tu-tuc-huu-bat',
    title: 'Hóa Khoa + Hữu Bật tại Tử Tức - Con xuất chúng học thuật',
    sao: ['Hóa Khoa'],
    cung: ['Tử Tức'],
    ketHop: ['Hữu Bật'],
    doUuTien: 70,
    tomTat: `**Hóa Khoa + Hữu Bật tại Tử Tức:** con cái **xuất chúng học thuật**, tiếng thơm đạo đức trong **giáo dục, công quyền**.`,
  },

  {
    id: 'hoa-khoa-tai-tu-tuc-dia-khong',
    title: 'Hóa Khoa + Địa Không tại Tử Tức - Con biệt lập',
    sao: ['Hóa Khoa'],
    cung: ['Tử Tức'],
    ketHop: ['Địa Không'],
    doUuTien: 70,
    tomTat: `**Hóa Khoa + Địa Không tại Tử Tức:** con **biệt lập, không dễ chia sẻ**.`,
  },

  {
    id: 'hoa-khoa-tai-tu-tuc-dia-kiep',
    title: 'Hóa Khoa + Địa Kiếp tại Tử Tức - Con biệt lập',
    sao: ['Hóa Khoa'],
    cung: ['Tử Tức'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 70,
    tomTat: `**Hóa Khoa + Địa Kiếp tại Tử Tức:** con **biệt lập, không dễ chia sẻ**.`,
  },

  {
    id: 'hoa-khoa-tai-tu-tuc-hoa-ky',
    title: 'Hóa Khoa + Hóa Kỵ tại Tử Tức - Con biệt lập',
    sao: ['Hóa Khoa'],
    cung: ['Tử Tức'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `**Hóa Khoa + Hóa Kỵ tại Tử Tức:** con **biệt lập, không dễ chia sẻ**.`,
  },

  {
    id: 'hoa-khoa-tai-tu-tuc-thien-hinh',
    title: 'Hóa Khoa + Thiên Hình tại Tử Tức - Con biệt lập',
    sao: ['Hóa Khoa'],
    cung: ['Tử Tức'],
    ketHop: ['Thiên Hình'],
    doUuTien: 70,
    tomTat: `**Hóa Khoa + Thiên Hình tại Tử Tức:** con **biệt lập, không dễ chia sẻ**.`,
  },

  // ============================================================
  // 16. Hóa Khoa tại Phu Thê
  // ============================================================
  {
    id: 'hoa-khoa-tai-phu-the',
    title: 'Hóa Khoa tại Phu Thê',
    sao: ['Hóa Khoa'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `**Hóa Khoa tại Phu Thê:** hôn phối **hiểu chuyện, nhẹ nhàng, trọng
tri thức**.

Vợ chồng **đồng cảm, tôn trọng** lẫn nhau về quan điểm sống và lý tưởng. Hôn
nhân xây dựng trên **chia sẻ, đối thoại** — "thuận vợ thuận chồng tát biển Đông
cũng cạn".

Có xu hướng **lý tưởng hóa hôn nhân**: kỳ vọng nhiều dễ **hụt hẫng**. Bạn
đời giỏi lý thuyết đạo lý nhưng **thiếu thực tế, thụ động, khô khan biểu hiện
tình cảm**.`,
  },

  {
    id: 'hoa-khoa-tai-phu-the-tam-hoa-khoi-viet',
    title: 'Hóa Khoa + Tam Hóa + Khôi Việt tại Phu Thê - Quý nhân hảo phối',
    sao: ['Hóa Khoa'],
    cung: ['Phu Thê'],
    ketHop: ['Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 73,
    tomTat: `**Hóa Khoa + Tam Hóa + Khôi Việt tại Phu Thê:** **quý nhân hảo phối**.`,
  },

  {
    id: 'hoa-khoa-tai-phu-the-hoa-ky',
    title: 'Hóa Khoa + Hóa Kỵ tại Phu Thê - Tranh cãi bất đồng lý tưởng',
    sao: ['Hóa Khoa'],
    cung: ['Phu Thê'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 73,
    tomTat: `**Hóa Khoa + Hóa Kỵ tại Phu Thê:** **tranh cãi do bất đồng lý tưởng** từ điều nhỏ nhặt.`,
  },

  {
    id: 'hoa-khoa-tai-phu-the-dia-khong',
    title: 'Hóa Khoa + Địa Không tại Phu Thê - Tranh cãi bất đồng lý tưởng',
    sao: ['Hóa Khoa'],
    cung: ['Phu Thê'],
    ketHop: ['Địa Không'],
    doUuTien: 73,
    tomTat: `**Hóa Khoa + Địa Không tại Phu Thê:** **tranh cãi do bất đồng lý tưởng** từ điều nhỏ nhặt.`,
  },

  {
    id: 'hoa-khoa-tai-phu-the-dia-kiep',
    title: 'Hóa Khoa + Địa Kiếp tại Phu Thê - Tranh cãi bất đồng lý tưởng',
    sao: ['Hóa Khoa'],
    cung: ['Phu Thê'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 73,
    tomTat: `**Hóa Khoa + Địa Kiếp tại Phu Thê:** **tranh cãi do bất đồng lý tưởng** từ điều nhỏ nhặt.`,
  },

  // ============================================================
  // 17. Hóa Khoa tại Huynh Đệ
  // ============================================================
  {
    id: 'hoa-khoa-tai-huynh-de',
    title: 'Hóa Khoa tại Huynh Đệ',
    sao: ['Hóa Khoa'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Hóa Khoa tại Huynh Đệ:** anh em **tri thức, đức độ, thương yêu,
giúp đỡ nhau** trên con đường học vấn / sự nghiệp, đặc biệt về **tinh thần**.

Gia đình nhỏ **nề nếp**, anh em cùng phát triển hài hòa.

**Hãm địa:** anh em **khoảng cách do khác biệt trình độ, lý tưởng**: "mỗi
người một thế giới riêng". Hòa khí nhưng **ít gắn bó thực chất**, hỗ trợ bằng
**lý thuyết nhiều hơn thực tiễn**.`,
  },

  {
    id: 'hoa-khoa-tai-huynh-de-thien-khoi',
    title: 'Hóa Khoa + Thiên Khôi tại Huynh Đệ - Anh em giỏi giang',
    sao: ['Hóa Khoa'],
    cung: ['Huynh Đệ'],
    ketHop: ['Thiên Khôi'],
    doUuTien: 70,
    tomTat: `**Hóa Khoa + Thiên Khôi tại Huynh Đệ:** anh em **giỏi giang, nổi danh học hành**, hoạt động trong **chuyên môn cao**.`,
  },

  {
    id: 'hoa-khoa-tai-huynh-de-thien-viet',
    title: 'Hóa Khoa + Thiên Việt tại Huynh Đệ - Anh em giỏi giang',
    sao: ['Hóa Khoa'],
    cung: ['Huynh Đệ'],
    ketHop: ['Thiên Việt'],
    doUuTien: 70,
    tomTat: `**Hóa Khoa + Thiên Việt tại Huynh Đệ:** anh em **giỏi giang, nổi danh học hành**, hoạt động trong **chuyên môn cao**.`,
  },

  {
    id: 'hoa-khoa-tai-huynh-de-van-xuong',
    title: 'Hóa Khoa + Văn Xương tại Huynh Đệ - Anh em giỏi giang',
    sao: ['Hóa Khoa'],
    cung: ['Huynh Đệ'],
    ketHop: ['Văn Xương'],
    doUuTien: 70,
    tomTat: `**Hóa Khoa + Văn Xương tại Huynh Đệ:** anh em **giỏi giang, nổi danh học hành**, hoạt động trong **chuyên môn cao**.`,
  },

  {
    id: 'hoa-khoa-tai-huynh-de-van-khuc',
    title: 'Hóa Khoa + Văn Khúc tại Huynh Đệ - Anh em giỏi giang',
    sao: ['Hóa Khoa'],
    cung: ['Huynh Đệ'],
    ketHop: ['Văn Khúc'],
    doUuTien: 70,
    tomTat: `**Hóa Khoa + Văn Khúc tại Huynh Đệ:** anh em **giỏi giang, nổi danh học hành**, hoạt động trong **chuyên môn cao**.`,
  },

  {
    id: 'hoa-khoa-tai-huynh-de-dia-khong',
    title: 'Hóa Khoa + Địa Không tại Huynh Đệ - Hiểu nhầm tranh luận',
    sao: ['Hóa Khoa'],
    cung: ['Huynh Đệ'],
    ketHop: ['Địa Không'],
    doUuTien: 70,
    tomTat: `**Hóa Khoa + Địa Không tại Huynh Đệ:** **hiểu nhầm, tranh luận do bất đồng quan điểm**, mâu thuẫn ngầm không nói ra.`,
  },

  {
    id: 'hoa-khoa-tai-huynh-de-dia-kiep',
    title: 'Hóa Khoa + Địa Kiếp tại Huynh Đệ - Hiểu nhầm tranh luận',
    sao: ['Hóa Khoa'],
    cung: ['Huynh Đệ'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 70,
    tomTat: `**Hóa Khoa + Địa Kiếp tại Huynh Đệ:** **hiểu nhầm, tranh luận do bất đồng quan điểm**, mâu thuẫn ngầm không nói ra.`,
  },

  {
    id: 'hoa-khoa-tai-huynh-de-hoa-ky',
    title: 'Hóa Khoa + Hóa Kỵ tại Huynh Đệ - Hiểu nhầm tranh luận',
    sao: ['Hóa Khoa'],
    cung: ['Huynh Đệ'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `**Hóa Khoa + Hóa Kỵ tại Huynh Đệ:** **hiểu nhầm, tranh luận do bất đồng quan điểm**, mâu thuẫn ngầm không nói ra.`,
  },

  // ============================================================
  // 18. Hóa Khoa tại Mệnh - cảnh báo "Ngụy quân tử"
  // ============================================================
  {
    id: 'hoa-khoa-tai-menh-nguy-quan-tu',
    title: 'Hóa Khoa tại Mệnh - Cảnh báo "Ngụy quân tử / Tốt mã rẻ cùi"',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    doUuTien: 70,
    tomTat: `**Hóa Khoa là "tấm áo khoác" bao bọc bên ngoài** — đôi khi khiến
đương số quá chú trọng **hình thức** hoặc **sự hoàn hảo về tri thức**. Không tu
tập tâm hồn: dễ rơi vào **TỰ MÃN với kiến thức của mình**.`,
  },

  {
    id: 'hoa-khoa-tai-menh-nguy-quan-tu-sat-tinh',
    title: 'Hóa Khoa + Sát tinh tại Mệnh - Ngụy quân tử',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 65,
    tomTat: `**Hóa Khoa + Nhiều sát tinh tại Mệnh:** Hóa Khoa biến tướng thành **"NGỤY QUÂN TỬ"** — dùng học thức để **che đậy mưu mô bên trong** (hình tượng **Nhạc Bất Quần**).`,
  },

  {
    id: 'hoa-khoa-tai-menh-nguy-quan-tu-dia-khong',
    title: 'Hóa Khoa + Địa Không tại Mệnh - Thùng rỗng kêu to',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Địa Không'],
    doUuTien: 65,
    tomTat: `**Hóa Khoa + Địa Không tại Mệnh:** **"thùng rỗng kêu to"** — chỉ có **vỏ bên ngoài** mà bên trong không có gì: kiểu **"tốt mã rẻ cùi"**.`,
  },

  {
    id: 'hoa-khoa-tai-menh-nguy-quan-tu-dia-kiep',
    title: 'Hóa Khoa + Địa Kiếp tại Mệnh - Thùng rỗng kêu to',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 65,
    tomTat: `**Hóa Khoa + Địa Kiếp tại Mệnh:** **"thùng rỗng kêu to"** — chỉ có **vỏ bên ngoài** mà bên trong không có gì: kiểu **"tốt mã rẻ cùi"**.`,
  },

  {
    id: 'hoa-khoa-tai-menh-nguy-quan-tu-kinh-duong',
    title: 'Hóa Khoa + Kình Dương tại Mệnh - Cạnh tranh áp lực',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Kình Dương'],
    doUuTien: 65,
    tomTat: `**Hóa Khoa + Kình Dương tại Mệnh:** danh tiếng đi đôi với **cạnh tranh, áp lực, thị phi** — luôn có thế lực **chống lại / kéo mình xuống**.`,
  },

  {
    id: 'hoa-khoa-tai-menh-nguy-quan-tu-da-la',
    title: 'Hóa Khoa + Đà La tại Mệnh - Cạnh tranh áp lực',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Đà La'],
    doUuTien: 65,
    tomTat: `**Hóa Khoa + Đà La tại Mệnh:** danh tiếng đi đôi với **cạnh tranh, áp lực, thị phi** — luôn có thế lực **chống lại / kéo mình xuống**.`,
  },

  {
    id: 'hoa-khoa-tai-menh-nguy-quan-tu-hoa-tinh',
    title: 'Hóa Khoa + Hỏa Tinh tại Mệnh - Lên nhanh để lỗ hổng',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Hỏa Tinh'],
    doUuTien: 65,
    tomTat: `**Hóa Khoa + Hỏa Tinh tại Mệnh:** danh tiếng / nền tảng **lên quá nhanh**: để lại **lỗ hổng lớn** khó xử lý kịp.`,
  },

  {
    id: 'hoa-khoa-tai-menh-nguy-quan-tu-linh-tinh',
    title: 'Hóa Khoa + Linh Tinh tại Mệnh - Lên nhanh để lỗ hổng',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Linh Tinh'],
    doUuTien: 65,
    tomTat: `**Hóa Khoa + Linh Tinh tại Mệnh:** danh tiếng / nền tảng **lên quá nhanh**: để lại **lỗ hổng lớn** khó xử lý kịp.`,
  },

  // ============================================================
  // 19. Hóa Khoa tại Mệnh - hôn nhân & sức khỏe & tài lộc
  // ============================================================
  {
    id: 'hoa-khoa-tai-menh-hon-nhan-tai-loc',
    title: 'Hóa Khoa tại Mệnh - Hôn nhân, sức khỏe & tài lộc',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `**Hóa Khoa cư Mệnh:**

**Hôn nhân:** mối quan hệ **văn minh, tôn trọng** — người hôn phối **có học
thức, gia giáo**, "**xứng đôi vừa lứa**", lễ độ tinh tế. Khi mâu thuẫn: **ngồi
phân tích đúng sai** thay vì cãi vã. Đôi khi **quá lý trí**: mối quan hệ
**thiếu nồng cháy, lãng mạn**.

**Sức khỏe:** biết **tự chăm sóc bản thân** dựa trên **kiến thức y khoa và lối
sống điều độ**. Bệnh tật: gặp **thầy giỏi thuốc hay**, tìm phương pháp **chữa
trị khoa học**.

**Tài lộc:** Hóa Khoa **không phải tài tinh trực tiếp** như Hóa Lộc — là **chìa
khóa mở kho tàng vật chất qua CHẤT XÁM**. Kiếm tiền bằng **kiến thức, bằng cấp,
uy tín chuyên môn**. **Tài lộc bền vững** vì xây trên **năng lực thực tế**, không
do may mắn / đầu cơ. Được tin tưởng giao **trọng trách tiền bạc** vì **thanh bạch,
minh bạch**.`,
  },

  // ============================================================
  // 20. Lời khuyên cho người Hóa Khoa cư Mệnh
  // ============================================================
  {
    id: 'hoa-khoa-loi-khuyen',
    title: 'Hóa Khoa - Lời khuyên',
    sao: ['Hóa Khoa'],
    doUuTien: 40,
    tomTat: `**Lời khuyên cho người Hóa Khoa cư Mệnh:**

Đừng để học thức biến mình thành **"mọt sách khô khan"** hoặc **"kẻ kiêu
ngạo về tri thức"**.

**Trí tuệ thực sự** không nằm ở **bằng cấp / hiểu biết** mà ở **cách dùng
kiến thức mang lại GIÁ TRỊ cho cuộc đời**.

Dùng "**Đệ Nhất Giải Thần**" để **THẤU HIỂU và BAO DUNG** cho người kém may
mắn về nhận thức.

- Khi dùng trí tuệ **PHỤNG SỰ thay vì PHÔ DIỄN**: tấm áo giáp Hóa Khoa rực rỡ
hơn:
- Vượt qua mọi bão giông
- **Để lại danh thơm cho hậu thế**
- Càng về **hậu vận càng hưởng nhiều phúc lộc, danh tiếng lan xa**

Đặc trưng người Hóa Khoa: **không cần bon chen tranh đoạt** mà vẫn có **chỗ
đứng vững vàng** nhờ uy tín, học thức, sự tin cậy. Thành công có thể chậm nhưng
**bền vững và ít sóng gió**.`,
  },
];
