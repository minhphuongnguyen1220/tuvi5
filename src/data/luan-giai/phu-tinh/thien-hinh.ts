import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THIÊN HÌNH - Dương Hỏa, sao SINH SÁT.
 *
 * An theo THÁNG SINH (engine: khởi từ Dậu thuận theo tháng sinh).
 *
 * Đặc trưng:
 *   - Chủ quản SINH SÁT, lưỡng thiện lưỡng họa
 *   - LUÔN trong TAM HỢP với Thiên Riêu (cùng Tứ Mộ, cách 4 cung)
 *   - Ý tượng: SẤM SÉT, SÁT PHẠT, TÙ NGỤC, cai quản nạn ách con người
 *   - ĐẮC ĐỊA tại Dần / Thân / Mão / Dậu — phúc thọ song toàn
 *   - HÃM ĐỊA tại các cung còn lại
 *
 * Bộ kết hợp đặc biệt:
 *   - BINH HÌNH TƯỚNG ẤN (Phục Binh + Thiên Hình + Tướng Quân + Quốc Ấn)
 *     = uy nghi lẫm liệt cầm quân
 *   - HÌNH RIÊU (Thiên Hình + Thiên Riêu) = dao kéo + đào hoa
 */
export const luanGiai_ThienHinh: DoanLuanGiai[] = [
  {
    id: 'thien-hinh-tinh-chat-chung',
    title: 'Thiên Hình - Đặc tính chung',
    sao: ['Thiên Hình'],
    doUuTien: 32,
    tomTat: `**Thiên Hình** — phụ tinh **SINH SÁT**, an theo **tháng sinh**.

**Ngũ hành:** **Dương Hỏa**.

⚡ **Chủ quản:**
- **SINH SÁT, LƯỠNG THIỆN LƯỠNG HỌA**
- Cai quản **NẠN ÁCH** của con người

⚡ **Ý tượng:**
- **SẤM SÉT, SÁT PHẠT, TÙ NGỤC**
- Bính quyền vạn lý
- "Như con dao 2 lưỡi" — vừa mang ý chí kiên cường + sự quyết đoán + dám
  đương đầu khó khăn, vừa ẩn chứa **THƯƠNG TẬT, KIỆN CÁO, THỊ PHI**

⚡ **Quy luật quan trọng:**
- **LUÔN trong TAM HỢP với Thiên Riêu** → bộ **HÌNH RIÊU** (dao kéo + đào hoa)
- Đắc địa **DẦN, THÂN, MÃO, DẬU** → tiếng tăm lừng lẫy, phúc thọ song toàn,
  cẩn trọng, nghiêm nghị, công tâm, công danh bền vững
- Hãm địa các cung còn lại → tai họa nặng

⚡ **Vai trò trong bộ Binh Hình Tướng Ấn:** Cùng Phục Binh + Tướng Quân +
Quốc Ấn → **UY NGHI LẪM LIỆT** cầm quân (đã nhắc tại tuong-quan.ts).`,
  },

  {
    id: 'thien-hinh-dac-dia-dan-than-mao-dau',
    title: 'Thiên Hình đắc địa Dần Thân Mão Dậu',
    sao: ['Thiên Hình'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    doUuTien: 80,
    tomTat: `**Thiên Hình ĐẮC ĐỊA tại Dần / Thân / Mão / Dậu** — vị trí đẹp nhất.

⚡ **Đặc trưng:**
- **TIẾNG TĂM LỪNG LẪY**
- **PHÚC THỌ SONG TOÀN**
- **CẨN TRỌNG, NGHIÊM NGHỊ, CÔNG TÂM, RÕ RÀNG**
- **CÔNG DANH BỀN VỮNG**

⚡ **Hợp nghề:**
- **QUÂN ĐỘI, AN NINH, QUỐC PHÒNG**
- **CÔNG AN, PHÁP LUẬT**
- **THANH TRA, GIÁM SÁT**
- **VÕ NGHIỆP** — đặc biệt với bộ Binh Hình Tướng Ấn

⚡ **Cát tinh hội:**
- Tài thao lược, nhạy bén
- Khát khao chứng tỏ bản thân
- Trở thành **TƯỚNG LĨNH, LÃNH ĐẠO QUÂN SỰ**`,
  },

  {
    id: 'thien-hinh-rieu-bo-doi-tam-hop',
    title: 'Bộ Hình Riêu - Tam hợp dao kéo + đào hoa',
    sao: ['Thiên Hình'],
    ketHop: ['Thiên Riêu'],
    doUuTien: 55,
    tomTat: `**Bộ Hình Riêu** (Thiên Hình + Thiên Riêu) — luôn **TAM HỢP** do quy luật
an sao.

⚡ **Tính chất kép:**
- **THIÊN HÌNH** — Dương Hỏa — sát phạt, dao kéo, sấm sét
- **THIÊN RIÊU** — đào hoa, dâm tinh
- Hợp lại → **BỘ DAO KÉO + ĐÀO HOA**

⚡ **Hợp nghề:**
- **BÁC SỸ, Y SĨ** (tay nghề mổ xẻ + tinh tế)
- Bộ **Tướng + Y + Quang Quý + Bác Sỹ + Hình Riêu** = bác sỹ giải phẫu giỏi
- **PHẪU THUẬT THẨM MỸ**

⚡ **Mặt tối:**
- Bị **SẸO MẶT, TAY CHÂN** (đặc tính Hình)
- Đào hoa Riêu kết hợp Hình → bệnh hoa liễu, vạ tình`,
  },

  {
    id: 'thien-hinh-rieu-bo-doi-nu-menh',
    title: 'Bộ Hình Riêu - Nữ mệnh',
    sao: ['Thiên Hình'],
    gioiTinh: 'Nữ',
    ketHop: ['Thiên Riêu'],
    doUuTien: 50,
    tomTat: `⚡ **Nữ mệnh có bộ Hình Riêu:** tính nóng nảy, dễ chọn **PHẪU THUẬT
THẨM MỸ** (đặc biệt khi có thêm **Đào Hoa / Hồng Loan**).`,
  },

  {
    id: 'thien-hinh-nu-menh-che-dao-hong',
    title: 'Thiên Hình Mệnh nữ - Chế Đào Hồng đào hoa',
    sao: ['Thiên Hình'],
    cung: ['Mệnh'],
    gioiTinh: 'Nữ',
    doUuTien: 60,
    tomTat: `**Thiên Hình thủ Mệnh nữ** — đặc trưng quý: **CHẾ ĐÀO HOA**.

⚡ **Tác dụng đặc biệt với phụ nữ:**
- **Triết giảm tính chất ĐA TÌNH, ĐÀO HOA**
- Là người **NGAY THẲNG, KHÔNG LẲNG LƠ**
- Cho dù mệnh có nhiều bộ sao đa tình:
  - Đào Hoa
  - Hồng Loan
  - Thiên Riêu

⚡ **Tương tự Vũ Khúc đối với Đào Hoa:**
- Vũ Khúc + Đào → tính dâm chuyển thành quý
- Thiên Hình + Đào Hồng → tính dâm chuyển thành ngay thẳng đoan chính
- Đặc biệt hữu ích trong xã hội xưa với nữ mệnh`,
  },

  {
    id: 'thien-hinh-binh-tuong-an-uy-nghi',
    title: 'Thiên Hình + Binh + Tướng + Ấn - Uy nghi lẫm liệt',
    sao: ['Thiên Hình'],
    ketHop: ['Phục Binh', 'Tướng Quân', 'Quốc Ấn'],
    doUuTien: 60,
    tomTat: `**Bộ BINH HÌNH TƯỚNG ẤN** (Phục Binh + Thiên Hình + Tướng Quân + Quốc Ấn)
— **UY NGHI LẪM LIỆT, PHÚC THỌ SONG TOÀN**.

⚡ **Đặc trưng:**
- Đương số có **CÔNG DANH** lớn
- Cầm quân tác chiến
- Thành công trong **QUÂN SỰ, AN NINH, QUỐC PHÒNG**
- Trở thành **TƯỚNG LĨNH** hoặc lãnh đạo quân sự

⚡ **Phân tích bộ sao:**
- **Phục Binh**: lực lượng dưới quyền
- **Thiên Hình**: quyền sát phạt
- **Tướng Quân**: vị trí thống soái
- **Quốc Ấn**: ấn tín quyền lực

⚡ Đây là cách cục **CAO CẤP NHẤT** của võ tướng.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // THIÊN HÌNH TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-hinh-tai-menh',
    title: 'Thiên Hình tại Mệnh',
    sao: ['Thiên Hình'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `**Thiên Hình thủ Mệnh** — vẻ ngoài **LẠNH LÙNG, UY NGHIÊM**.

⚡ **Tướng mạo:**
- **HAY CAU MÀY, QUẮC MẮT**
- Nét mặt **THIẾU SỰ TƯƠI TỈNH**, hay lo âu
- **LÔNG MÀY DỰNG, TRÁN SẠM ĐEN, RĂNG XẤU**
- **MẶT, TRÁN, ĐẦU thường có SẸO**
- Trên người dễ có **VẾT MỔ TO**
- Tay chân thường dính **THƯƠNG TẬT**
- Nói **KHÓ HÉ RĂNG**, thể hiện sự khó tính ngay từ cái nhìn đầu
- Chụp ảnh thường **XẤU, KHÔNG ĂN ẢNH**

⚡ **Tính cách:**
- **NÓNG NẢY, BẤT NHẪN, TRỰC TÍNH, HUNG BẠO, CẦU KỲ** (do Hỏa)
- **KHẮT KHE, YÊU CẦU CAO** về sự hoàn hảo
- Hay để ý **TIỂU TIẾT**, suy xét cẩn trọng thái quá
- Khả năng **PHÁN XÉT TINH VI, TỈ MỈ, CÔNG MINH**
- **HÀ KHẮC VỚI BẢN THÂN** → vừa mang tính sát của Không Kiếp + cô độc
  của Cô Quả
- Ít gần gũi người khác, kể cả thân nhân

⚡ **Tâm tưởng:**
- Từ bé thường bị **GIÁO DỤC HÀ KHẮC** của cha mẹ
- Mang tâm tưởng **ĐƠN ĐỘC, CÁU GẮT**
- Hành động theo cảm tính → không lường hậu họa

⚠️ **Cảnh báo:** Thiên Hình tại Mệnh không có sao hóa giải → tù ngục, đại
phẫu, đại nạn đau đớn, nguy hiểm luôn cận kề.

⚡ **Đam mê & cái tôi:** Hình cũng chủ về **ĐAM MÊ CHÁY BỎNG**, cái tôi lớn,
nhạy bén với môi trường khác lạ → tại Mệnh là cách hay khi dễ hòa đồng.`,
  },

  {
    id: 'thien-hinh-tai-phu-mau',
    title: 'Thiên Hình tại Phụ Mẫu',
    sao: ['Thiên Hình'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Thiên Hình tại Phụ Mẫu** — sao Hung làm **GIẢM THỌ CHA MẸ**.

⚡ **Đặc trưng:**
- Cha mẹ **NÓNG NẢY, KHẮT KHE**
- Dễ **BẠO HÀNH** và gây **ÁP LỰC** cho đương số`,
  },

  {
    id: 'thien-hinh-tai-phu-mau-dac-dia',
    title: 'Thiên Hình tại Phụ Mẫu - Đắc địa',
    sao: ['Thiên Hình'],
    cung: ['Phụ Mẫu'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    doUuTien: 78,
    tomTat: `**Thiên Hình ĐẮC ĐỊA tại Phụ Mẫu (Dần/Thân/Mão/Dậu):**
- Cha mẹ là người **NGHIÊM KHẮC, KỶ LUẬT CAO**
- Thường làm trong các ngành **QUÂN SỰ, PHÁP LUẬT, GIÁM SÁT, Y HỌC DAO KÉO**`,
  },

  {
    id: 'thien-hinh-tai-phu-mau-cat-tinh',
    title: 'Thiên Hình tại Phụ Mẫu + cát tinh - cha mẹ uy tín',
    sao: ['Thiên Hình'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Ân Quang', 'Thiên Quý', 'Tả Phù', 'Hữu Bật', 'Hóa Khoa', 'Hóa Quyền', 'Hóa Lộc'],
    doUuTien: 70,
    tomTat: `**Thiên Hình tại Phụ Mẫu + Quang Quý + Tả Hữu + Khoa Quyền Lộc:**
- Cha mẹ có **UY TÍN, CHỨC VỤ CAO**`,
  },

  {
    id: 'thien-hinh-tai-phu-mau-ham-sat',
    title: 'Thiên Hình tại Phụ Mẫu - Hãm + sát tinh',
    sao: ['Thiên Hình'],
    cung: ['Phụ Mẫu'],
    trangThai: ['Hãm'],
    ketHop: ['Kình Dương', 'Đà La', 'Hóa Kỵ', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 75,
    tomTat: `⚠️ **Thiên Hình HÃM tại Phụ Mẫu + sát tinh (Kình Đà, Hóa Kỵ, Không Kiếp):**
- Cha mẹ **NÓNG NẢY QUÁ MỨC**, áp đặt
- Dễ **YỂU MỆNH**
- Gia đạo **NHIỀU SÓNG GIÓ**
- Con cái khó nương nhờ`,
  },

  {
    id: 'thien-hinh-tai-phuc-duc',
    title: 'Thiên Hình tại Phúc Đức',
    sao: ['Thiên Hình'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `**Thiên Hình tại Phúc Đức** — **GIẢM THỌ, GIẢM PHƯỚC, TĂNG HỌA**.

⚡ **Đặc trưng:**
- **SÁT PHẠT, ĐẤU ĐÁ** trong họ hàng
- **THẤT THOÁT MỒ MẢ**
- Trong họ hàng có người **CỨNG RẮN, THẲNG THẮN, UY NGHIÊM**
- Vì tính khắt khe → họ hàng **DỄ XA CÁCH**, ít hòa thuận`,
  },

  {
    id: 'thien-hinh-tai-phuc-duc-dac-dia-cat-tinh',
    title: 'Thiên Hình Phúc Đức - Đắc + cát tinh',
    sao: ['Thiên Hình'],
    cung: ['Phúc Đức'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    ketHop: ['Ân Quang', 'Thiên Quý', 'Tả Phù', 'Hữu Bật', 'Hóa Khoa', 'Hóa Quyền', 'Hóa Lộc'],
    doUuTien: 70,
    tomTat: `**Thiên Hình Đắc địa Phúc Đức + Quang Quý + Tả Hữu + Khoa Quyền Lộc:**
- Phúc khí giảm nhưng vẫn còn người trong họ **GÂY DỰNG DANH DỰ**
- Có chỗ dựa tinh thần
- Hậu vận hưởng **TÍNH CÁCH MẠNH MẼ, Ý CHÍ KIÊN CƯỜNG** từ tổ tiên`,
  },

  {
    id: 'thien-hinh-tai-phuc-duc-ham',
    title: 'Thiên Hình tại Phúc Đức - Hãm',
    sao: ['Thiên Hình'],
    cung: ['Phúc Đức'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `⚠️ **Thiên Hình HÃM tại Phúc Đức:**
- Họ hàng **ÍT NGƯỜI SỐNG THỌ**
- Tranh chấp **ĐẤT CÁT, MỒ MẢ THẤT TÁN**
- Dòng tộc **BẤT HÒA**`,
  },

  {
    id: 'thien-hinh-tai-dien-trach',
    title: 'Thiên Hình tại Điền Trạch',
    sao: ['Thiên Hình'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Thiên Hình tại Điền Trạch** — chậm tích lũy điền sản.

⚡ **Đặc trưng:**
- Ít **GIAO TIẾP** với hàng xóm
- **DÍNH KIỆN TỤNG, TRANH CHẤP** đất đai
- Sinh tâm lý **CHÁN Ở NHÀ, CHÁN VIỆC NHÀ**
- **ĐỊA THỔ GÂY ỐM ĐAU** nhiều
- **CHÁY NỔ TAI ƯƠNG** sinh ra từ đó`,
  },

  {
    id: 'thien-hinh-tai-dien-trach-dac-dia',
    title: 'Thiên Hình Điền Trạch - Đắc địa',
    sao: ['Thiên Hình'],
    cung: ['Điền Trạch'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    doUuTien: 78,
    tomTat: `**Thiên Hình ĐẮC tại Điền Trạch (Dần/Thân/Mão/Dậu):**
- Nhà cửa thường ở gần các nơi **CÔNG QUYỀN**: trụ sở công an, tòa án, đơn vị quân đội
- Đương số có **Ý THỨC KỶ LUẬT CAO** trong quản lý nhà cửa
- Sống **NGĂN NẮP**`,
  },

  {
    id: 'thien-hinh-tai-dien-trach-cat-tinh',
    title: 'Thiên Hình Điền Trạch + Tả Hữu Khoa Quyền Lộc',
    sao: ['Thiên Hình'],
    cung: ['Điền Trạch'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Hóa Khoa', 'Hóa Quyền', 'Hóa Lộc'],
    doUuTien: 70,
    tomTat: `**Thiên Hình tại Điền Trạch + Tả Hữu + Khoa Quyền Lộc:**
- Nhà cửa **KHANG TRANG, KIÊN CỐ**`,
  },

  {
    id: 'thien-hinh-tai-dien-trach-ham',
    title: 'Thiên Hình tại Điền Trạch - Hãm địa',
    sao: ['Thiên Hình'],
    cung: ['Điền Trạch'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `⚠️ **Thiên Hình HÃM tại Điền Trạch:**
- Điền sản **KHÓ TÍCH LŨY**
- Tranh chấp **KIỆN TỤNG ĐẤT ĐAI**
- Gia đình **THIẾU HÒA KHÍ, XUNG ĐỘT**
- Có thể **MẤT ĐẤT, BÁN NHÀ**`,
  },

  {
    id: 'thien-hinh-tai-quan-loc',
    title: 'Thiên Hình tại Quan Lộc',
    sao: ['Thiên Hình'],
    cung: ['Quan Lộc'],
    doUuTien: 76,
    tomTat: `**Thiên Hình tại Quan Lộc** — giỏi **CHUYÊN MÔN, KỸ THUẬT, KẺ VẼ, IN ẤN,
MỔ XẺ**, tư duy độc lập, phán đoán nhanh.

⚡ **Đặc trưng:**
- **CHẬM PHÁT TRIỂN**, bị hãm đường công danh
- **TAI NẠN NGHỀ NGHIỆP** khó tránh
- Hình biểu tượng của **CHẬM TRỄ DỤNG TÀI**
- Luôn bị **ÁP LỰC, ĐẤU ĐÁ** của người khác`,
  },

  {
    id: 'thien-hinh-tai-quan-loc-dac-dia',
    title: 'Thiên Hình Quan Lộc - Đắc địa',
    sao: ['Thiên Hình'],
    cung: ['Quan Lộc'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    doUuTien: 78,
    tomTat: `**Thiên Hình ĐẮC tại Quan Lộc (Dần/Thân/Mão/Dậu):**
- Hợp **QUÂN SỰ, Y KHOA, THANH TRA, GIÁM SÁT**
- Tuy chậm tiến nhưng có **THÀNH TỰU**
- Khi gặp vận tốt sẽ được **DỤNG TÀI**, nổi bật trong lĩnh vực`,
  },

  {
    id: 'thien-hinh-tai-quan-loc-ham',
    title: 'Thiên Hình tại Quan Lộc - Hãm địa',
    sao: ['Thiên Hình'],
    cung: ['Quan Lộc'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `⚠️ **Thiên Hình HÃM tại Quan Lộc:**
- Đường công danh **TRẮC TRỞ**
- Hay vướng **THỊ PHI** nơi làm việc
- Dễ bị **CÁCH CHỨC, KỶ LUẬT**
- Thậm chí vướng **VÒNG LAO LÝ**`,
  },

  {
    id: 'thien-hinh-tai-no-boc',
    title: 'Thiên Hình tại Nô Bộc',
    sao: ['Thiên Hình'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Thiên Hình tại Nô Bộc** — **ÍT BẠN, KHÔNG CÓ BẠN CHUNG THÀNH**, khó kiếm
**TRI KỶ**.

⚡ **Đặc trưng:**
- Luôn vì bạn bè mà **RƯỚC HỌA VÀO THÂN**
- Bé bị **BẠN BẮT NẠT**
- Lớn bị người đời **LÁNH XA**
- Ẩn tàng **CĂM HẬN KÉO DÀI**, tìm cách **TRẢ ÂN BÁO OÁN**`,
  },

  {
    id: 'thien-hinh-tai-no-boc-dac-dia',
    title: 'Thiên Hình Nô Bộc - Đắc địa',
    sao: ['Thiên Hình'],
    cung: ['Nô Bộc'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    doUuTien: 78,
    tomTat: `**Thiên Hình ĐẮC tại Nô Bộc (Dần/Thân/Mão/Dậu):**
- Ít bạn bè nhưng mối quan hệ **RÕ RÀNG, RẠCH RÒI**
- Hợp với người trong môi trường **QUÂN ĐỘI, PHÁP LUẬT, Y TẾ**
- Bạn bè có khả năng giúp đỡ trong công việc nhưng vẫn khó tìm tri kỷ thật sự`,
  },

  {
    id: 'thien-hinh-tai-no-boc-ham-sat',
    title: 'Thiên Hình Nô Bộc - Hãm + Kình Đà Kỵ Riêu Đào Hồng',
    sao: ['Thiên Hình'],
    cung: ['Nô Bộc'],
    trangThai: ['Hãm'],
    ketHop: ['Kình Dương', 'Đà La', 'Hóa Kỵ', 'Thiên Riêu', 'Đào Hoa', 'Hồng Loan'],
    doUuTien: 75,
    tomTat: `⚠️ **Thiên Hình HÃM Nô Bộc + Kình Đà / Kỵ / Riêu / Đào / Hồng:**
- Số lượng bạn bè **CÀNG ÍT**, dễ phản bội
- **GÂY THỊ PHI**
- Thuở nhỏ **BỊ BẠN BẮT NẠT**
- Lớn lên **BỊ NGƯỜI ĐỜI XA LÁNH**`,
  },

  {
    id: 'thien-hinh-tai-thien-di',
    title: 'Thiên Hình tại Thiên Di',
    sao: ['Thiên Hình'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Thiên Hình tại Thiên Di** — ra ngoài **NGẠI GIAO TIẾP**, luôn gặp **NGHỊCH
CẢNH TRỚ TRÊU**, thích dùng **VŨ LỰC** giải quyết tranh chấp.

⚡ **Đặc trưng:**
- **KHÔNG ƯA ĐI XA**, không thích xuất ngoại
- Hay gặp **CHUYỆN XUI XẺO**, thiếu may mắn
- **KỸ NĂNG MỀM** giao tiếp & xử lý tình huống **KÉM**
- Báo hiệu tình trạng **CHẬM MUỘN KẾT HÔN**
- Đi xa làm điều phải quấy ắt **DÍNH TÙ TỘI**`,
  },

  {
    id: 'thien-hinh-tai-thien-di-dac-dia',
    title: 'Thiên Hình Thiên Di - Đắc địa',
    sao: ['Thiên Hình'],
    cung: ['Thiên Di'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    doUuTien: 78,
    tomTat: `**Thiên Hình ĐẮC tại Thiên Di (Dần/Thân/Mão/Dậu):**
- Đi ra ngoài mang dáng vẻ **NGHIÊM NGHỊ, ÍT NÓI, KHÓ GẦN** nhưng **LÀM ĐƯỢC VIỆC**
- Có **UY QUYỀN** khiến người khác nể sợ`,
  },

  {
    id: 'thien-hinh-tai-thien-di-cat-tinh',
    title: 'Thiên Hình Thiên Di + Tả Hữu Khoa Quyền Lộc',
    sao: ['Thiên Hình'],
    cung: ['Thiên Di'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Hóa Khoa', 'Hóa Quyền', 'Hóa Lộc'],
    doUuTien: 70,
    tomTat: `**Thiên Hình Thiên Di + Tả Hữu + Khoa Quyền Lộc:**
- Dễ được **TRỌNG DỤNG**, có chỗ dựa, lập công danh`,
  },

  {
    id: 'thien-hinh-tai-thien-di-ham',
    title: 'Thiên Hình tại Thiên Di - Hãm địa',
    sao: ['Thiên Hình'],
    cung: ['Thiên Di'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `⚠️ **Thiên Hình HÃM tại Thiên Di:**
- Vướng **KIỆN TỤNG, VA CHẠM**
- Dùng đến **BẠO LỰC** giải quyết mâu thuẫn
- Không hợp **XUẤT NGOẠI**`,
  },

  {
    id: 'thien-hinh-tai-tat-ach',
    title: 'Thiên Hình tại Tật Ách',
    sao: ['Thiên Hình'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `**Thiên Hình tại Tật Ách** — dễ dính **HÌNH THƯƠNG**.

⚡ **Đặc trưng:**
- **CHÂN TAY LẮM SẸO**
- Hay bị **ĐIỆN GIẬT, BỎNG NƯỚC, BỎNG DẦU, CHÁY NỔ**
- Thường dính nhiều đến **PHÁP LUẬT**`,
  },

  {
    id: 'thien-hinh-tai-tat-ach-dac-dia',
    title: 'Thiên Hình Tật Ách - Đắc địa',
    sao: ['Thiên Hình'],
    cung: ['Tật Ách'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    doUuTien: 78,
    tomTat: `**Thiên Hình ĐẮC tại Tật Ách (Dần/Thân/Mão/Dậu):**
- **SỨC CHỊU ĐỰNG TỐT**
- Vượt qua nghịch cảnh bằng **Ý CHÍ KIÊN CƯỜNG**
- Tuy hay gặp va chạm nhưng chỉ để lại **DẤU VẾT BÊN NGOÀI**`,
  },

  {
    id: 'thien-hinh-tai-tat-ach-cat-tinh',
    title: 'Thiên Hình Tật Ách + Thiên Phủ Tả Hữu Khoa Quyền Lộc',
    sao: ['Thiên Hình'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Phủ', 'Tả Phù', 'Hữu Bật', 'Hóa Khoa', 'Hóa Quyền', 'Hóa Lộc'],
    doUuTien: 70,
    tomTat: `**Thiên Hình Tật Ách + Thiên Phủ + Tả Hữu + Khoa Quyền Lộc:** ứng nghiệm tốt, sức chịu đựng tăng cường.`,
  },

  {
    id: 'thien-hinh-tai-tat-ach-ham',
    title: 'Thiên Hình tại Tật Ách - Hãm địa',
    sao: ['Thiên Hình'],
    cung: ['Tật Ách'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `⚠️ **Thiên Hình HÃM tại Tật Ách:**
- Họa **HÌNH THƯƠNG NẶNG**
- **TAI NẠN NGHỀ NGHIỆP, BỎNG LỬA, ĐIỆN GIẬT, CHÁY NỔ**
- Trên người nhiều **SẸO, VẾT MỔ** hoặc bệnh nan giải`,
  },

  {
    id: 'thien-hinh-tai-tat-ach-khong-kiep-kinh-da',
    title: 'Thiên Hình Tật Ách + Không Kiếp Kình Đà',
    sao: ['Thiên Hình'],
    cung: ['Tật Ách'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Kình Dương', 'Đà La'],
    doUuTien: 70,
    tomTat: `⚠️ **Thiên Hình Tật Ách + Không Kiếp + Kình Đà:** **NGHIỆN NGẬP, TÙ TỘI, KIỆN TỤNG**.`,
  },

  {
    id: 'thien-hinh-tai-tat-ach-dong-ky',
    title: 'Thiên Hình Tật Ách + Thiên Đồng + Hóa Kỵ',
    sao: ['Thiên Hình'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Đồng', 'Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `⚠️ **Thiên Hình Tật Ách + Thiên Đồng + Hóa Kỵ:** **ĂN CHƠI, SA VÀO TỬU SẮC**.`,
  },

  {
    id: 'thien-hinh-tai-tat-ach-nu-menh',
    title: 'Thiên Hình tại Tật Ách - Nữ mệnh',
    sao: ['Thiên Hình'],
    cung: ['Tật Ách'],
    gioiTinh: 'Nữ',
    doUuTien: 75,
    tomTat: `⚠️ **Thiên Hình tại Tật Ách (nữ mệnh):**
- **KHÓ SINH NỞ**, dễ sảy thai
- Tính nóng, liều lĩnh, hành động bốc đồng → họa thân`,
  },

  {
    id: 'thien-hinh-tai-tai-bach',
    title: 'Thiên Hình tại Tài Bạch',
    sao: ['Thiên Hình'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Thiên Hình tại Tài Bạch** — đương số **KHÓ TÍCH TRỮ TIỀN CỦA**.

⚡ **Đặc trưng:**
- Làm ăn **THẤT THOÁT KHÔNG KIỂM SOÁT**
- Giảm sự **GIÀU CÓ, THỊNH VƯỢNG**
- **HAM CỦA TIỀN** nhưng **LƯỜI TÍCH LŨY** và **SỢ KINH DOANH**, sợ thất bại
- Luôn tìm cách **TIÊU TRƯỚC** khi nghĩ cách kiếm
- Vận xấu ắt **BÁN NHÀ CỬA TƯ GIA** trả nợ`,
  },

  {
    id: 'thien-hinh-tai-tai-bach-dac-dia',
    title: 'Thiên Hình Tài Bạch - Đắc địa',
    sao: ['Thiên Hình'],
    cung: ['Tài Bạch'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    doUuTien: 78,
    tomTat: `**Thiên Hình ĐẮC tại Tài Bạch (Dần/Thân/Mão/Dậu):**
- Kiếm tiền từ ngành nghề đặc thù đòi hỏi **SẮC BÉN, CAN ĐẢM**
- Tiền đến từ công việc gắn **TÍNH SÁT PHẠT, MỔ XẺ**
- Tuy vất vả nhưng tạo được chỗ đứng nhờ **CHUYÊN MÔN**
- Tiêu xài mạnh tay nhưng vẫn **CÂN ĐỐI** tài chính`,
  },

  {
    id: 'thien-hinh-tai-tai-bach-ham-sat',
    title: 'Thiên Hình Tài Bạch - Hãm + Kình Đà Kỵ Không Kiếp',
    sao: ['Thiên Hình'],
    cung: ['Tài Bạch'],
    trangThai: ['Hãm'],
    ketHop: ['Kình Dương', 'Đà La', 'Hóa Kỵ', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 78,
    tomTat: `⚠️ **Thiên Hình HÃM Tài Bạch + Kình Đà Kỵ Không Kiếp:**
- Vì tiền mà **MANG HỌA**
- Sa vào **NỢ NẦN, KIỆN TỤNG, TRANH CHẤP TÀI SẢN**
- Phải bán nhà trả nợ`,
  },

  {
    id: 'thien-hinh-tai-tu-tuc',
    title: 'Thiên Hình tại Tử Tức',
    sao: ['Thiên Hình'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Thiên Hình tại Tử Tức** — **HIẾM CON, ÍT CON, MUỘN CON**, hoặc con khó nuôi.

⚡ **Đặc trưng:**
- Cha mẹ **NGHIÊM KHẮC** với con cái
- Con lớn ắt **CHỐNG ĐỐI, NGANG NGƯỢC**
- Con cái **THIẾU HÒA THUẬN, TRANH GIÀNH** của cải
- **SINH CON DỄ MỔ**
- Hay **ỐM ĐAU VẬN NẠN**`,
  },

  {
    id: 'thien-hinh-tai-tu-tuc-dac-dia',
    title: 'Thiên Hình Tử Tức - Đắc địa',
    sao: ['Thiên Hình'],
    cung: ['Tử Tức'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    doUuTien: 78,
    tomTat: `**Thiên Hình ĐẮC tại Tử Tức (Dần/Thân/Mão/Dậu):**
- Con cái **HIỂN ĐẠT CÔNG DANH**
- **BÍNH QUYỀN VẠN LÝ, TRẤN ẢI BIÊN CƯƠNG**
- Hợp **BINH NGHIỆP, QUÂN ĐỘI, CÔNG AN**`,
  },

  {
    id: 'thien-hinh-tai-tu-tuc-cat-tinh',
    title: 'Thiên Hình Tử Tức + Tả Hữu Khoa Quyền Lộc',
    sao: ['Thiên Hình'],
    cung: ['Tử Tức'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Hóa Khoa', 'Hóa Quyền', 'Hóa Lộc'],
    doUuTien: 70,
    tomTat: `**Thiên Hình Tử Tức + Tả Hữu + Khoa Quyền Lộc:** con cái được trọng dụng, hiển hách.`,
  },

  {
    id: 'thien-hinh-tai-tu-tuc-ham-sat',
    title: 'Thiên Hình Tử Tức - Hãm + Kình Đà Riêu',
    sao: ['Thiên Hình'],
    cung: ['Tử Tức'],
    trangThai: ['Hãm'],
    ketHop: ['Kình Dương', 'Đà La', 'Thiên Riêu'],
    doUuTien: 75,
    tomTat: `⚠️ **Thiên Hình HÃM Tử Tức + Kình Đà Riêu:**
- Con cái **GÂY HỌA**
- Dính **VÒNG LAO LÝ**
- Làm cha mẹ phiền muộn`,
  },

  {
    id: 'thien-hinh-tai-phu-the',
    title: 'Thiên Hình tại Phu Thê - Tam Hình Khắc',
    sao: ['Thiên Hình'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `**Thiên Hình tại Phu Thê** — vợ chồng **NGƯỢC TÍNH**, khó cưng, khó chiều.

⚡ **TAM HÌNH KHẮC** (cảnh báo quan trọng):
- **KHẮC THÂN**: không ưa ngủ cùng
- **KHẮC Ý**: không tâm đầu ý hợp, không bàn bạc, không đồng thuận
- **KHẮC KHẨU**: xung đột, cãi nhau

⚡ **Đặc trưng nhẹ:**
- Vợ chồng **CÁ TÍNH MẠNH**, khó chiều
- Khắt khe trong cư xử → đời sống thiếu **LÃNG MẠN**
- Hôn nhân khắc khẩu nhưng vẫn giữ **RÀNG BUỘC TRÁCH NHIỆM**
- Người hôn phối **CẨN TRỌNG, GIỎI CHUYÊN MÔN, THÀNH ĐẠT, UY QUYỀN**`,
  },

  {
    id: 'thien-hinh-tai-phu-the-ham-sat',
    title: 'Thiên Hình Phu Thê - Hãm + Kình Đà Kỵ Riêu Đào Hồng',
    sao: ['Thiên Hình'],
    cung: ['Phu Thê'],
    trangThai: ['Hãm'],
    ketHop: ['Kình Dương', 'Đà La', 'Hóa Kỵ', 'Thiên Riêu', 'Đào Hoa', 'Hồng Loan'],
    doUuTien: 78,
    tomTat: `⚠️ **Thiên Hình HÃM Phu Thê + Kình Đà / Hóa Kỵ / Riêu / Đào / Hồng:**
- **BẠO LỰC, NỢ NẦN, NGHIỆN NGẬP**
- Một người làm một người phá
- Kẻ yểu người thọ
- Hôn nhân **DANG DỞ, CHIA LY** hoặc **TÁI HÔN**`,
  },

  {
    id: 'thien-hinh-tai-huynh-de',
    title: 'Thiên Hình tại Huynh Đệ',
    sao: ['Thiên Hình'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Thiên Hình tại Huynh Đệ** — **ÍT ANH EM**, anh em **KHÓ HÒA THUẬN**.

⚡ **Đặc trưng:**
- Không **NHỜ ĐƯỢC** anh em
- **GÂY CHIA RẼ TÌNH CẢM**`,
  },

  {
    id: 'thien-hinh-tai-huynh-de-dac-dia',
    title: 'Thiên Hình Huynh Đệ - Đắc địa',
    sao: ['Thiên Hình'],
    cung: ['Huynh Đệ'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    doUuTien: 78,
    tomTat: `**Thiên Hình ĐẮC tại Huynh Đệ (Dần/Thân/Mão/Dậu):**
- Anh em **TÍNH CÁCH MẠNH MẼ, ĐỘC LẬP**
- Mỗi người **CHÍ KHÍ RIÊNG**
- Gia đình **CÓ UY TÍN**`,
  },

  {
    id: 'thien-hinh-tai-huynh-de-binh-tuong-an',
    title: 'Thiên Hình Huynh Đệ + Binh Tướng Ấn',
    sao: ['Thiên Hình'],
    cung: ['Huynh Đệ'],
    ketHop: ['Phục Binh', 'Tướng Quân', 'Quốc Ấn'],
    doUuTien: 70,
    tomTat: `**Thiên Hình Huynh Đệ + Binh + Tướng + Ấn:** có người **THÀNH ĐẠT, CÔNG DANH HIỂN HÁCH**.`,
  },

  {
    id: 'thien-hinh-tai-huynh-de-ham-sat',
    title: 'Thiên Hình Huynh Đệ - Hãm + Lục Sát / Phục Tướng',
    sao: ['Thiên Hình'],
    cung: ['Huynh Đệ'],
    trangThai: ['Hãm'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp', 'Phục Binh', 'Tướng Quân'],
    doUuTien: 75,
    tomTat: `⚠️ **Thiên Hình HÃM Huynh Đệ + Lục Sát / Phục Tướng:**
- Anh em **KHÓ HÒA THUẬN**, ít trợ giúp
- Vì tiền bạc, lợi ích mà **TRỞ MẶT**
- Bị anh em **LỪA GẠT**
- Tranh chấp tài sản → tình cảm **SỨT MẺ**`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // THIÊN HÌNH VÀO HẠN - 8 BỘ KẾT HỢP
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-hinh-han-dau-kinh-mo-xe',
    title: 'Hạn: Hình + Đẩu / Kình - Châm chích cắt mổ xẻ',
    sao: ['Thiên Hình'],
    ketHop: ['Kình Dương'],
    doUuTien: 50,
    tomTat: `**Thiên Hình + Đẩu Quân / Kình Dương vào hạn** — **CHÂM CHÍCH, CẮT, MỔ XẺ**.

⚡ **Đặc trưng:**
- Phải **PHẪU THUẬT Y KHOA**
- Tai nạn **CHẢY MÁU, TRẦY XƯỚC**
- "Thân xác chịu khổ, tinh thần chẳng yên"

⚡ **Hóa giải:**
- **GIỮ GÌN SỨC KHỎE**
- Tránh tham gia công việc **NGUY HIỂM**
- Hạn chế va chạm với **DAO KÉO, MÁY MÓC**`,
  },

  {
    id: 'thien-hinh-han-ky-kiep-dao-thuong',
    title: 'Hạn: Hình + Kỵ + Kiếp - Phòng nạn đao thương',
    sao: ['Thiên Hình'],
    ketHop: ['Hóa Kỵ', 'Địa Kiếp'],
    doUuTien: 50,
    tomTat: `**Thiên Hình + Hóa Kỵ + Địa Kiếp vào hạn** — **PHÒNG NẠN ĐAO THƯƠNG**.

⚡ **Cảnh báo:**
- Nguy cơ tai nạn **DAO KÉO, ĐÂM CHÉM**
- Cần đặc biệt cẩn trọng khi sử dụng dụng cụ sắc nhọn
- Tránh nơi **VẮNG VẺ, NGUY HIỂM**`,
  },

  {
    id: 'thien-hinh-han-hao-kiep-sat-hao-tan',
    title: 'Hạn: Hình + Hao + Kiếp + Sát - Hao tán ốm đau',
    sao: ['Thiên Hình'],
    ketHop: ['Đại Hao', 'Địa Kiếp', 'Thất Sát'],
    doUuTien: 50,
    tomTat: `**Thiên Hình + Hao + Kiếp + Sát vào hạn** — **HAO TÁN ỐM ĐAU**.

⚡ **Đặc trưng:**
- Tiền của trong nhà **KHÓ GIỮ**
- Tiêu tán không chỉ vì đầu tư sai mà còn **CHI PHÍ BỆNH TẬT**
- Việc bất ngờ ngoài ý muốn

⚡ **Hóa giải:**
- Sống **TIẾT KIỆM**
- Tránh đầu tư **MẠO HIỂM**
- Đề phòng lời mời gọi hấp dẫn ẩn rủi ro`,
  },

  {
    id: 'thien-hinh-han-linh-viet-set-dien',
    title: 'Hạn: Hình + Linh / Hỏa ngộ Việt - Sét điện súng đạn',
    sao: ['Thiên Hình'],
    ketHop: ['Linh Tinh', 'Thiên Việt'],
    doUuTien: 55,
    tomTat: `**Thiên Hình + Linh Tinh / Hỏa Tinh ngộ Thiên Việt vào hạn** — **PHÒNG SÉT,
ĐIỆN, SÚNG ĐẠN**.

⚡ **Cảnh báo - "trời giáng họa":**
- Tiềm ẩn nguy cơ tai nạn do **ĐIỆN GIẬT, CHÁY NỔ**
- Đặc biệt dễ bị **SÉT ĐÁNH**
- Khó lường trước

⚡ **Hóa giải:**
- Đặc biệt chú ý **AN TOÀN ĐIỆN**
- **TRÁNH TRÚ DƯỚI GỐC CÂY TO** khi mưa dông
- Hạn chế tiếp xúc thiết bị điện khi giông sét
- Làm nhiều **VIỆC THIỆN, CẦU AN** — phúc dày thì họa khó chạm thân`,
  },

  {
    id: 'thien-hinh-han-phu-kien-tung',
    title: 'Hạn: Hình + Phù - Kiện tụng',
    sao: ['Thiên Hình'],
    ketHop: ['Quan Phù'],
    doUuTien: 50,
    tomTat: `**Thiên Hình + Quan Phù vào hạn** — **PHÒNG KIỆN TỤNG**.

⚡ **Đặc trưng:**
- Vướng vào **KIỆN CÁO, TÒA ÁN**
- Có thể là nguyên đơn hoặc bị đơn

⚡ **Trầm trọng hơn khi ngộ Không Kiếp:**
- Bị người **THÙ GHÉT, HÃM HẠI**
- Bị **KIỆN THƯA** vô lý

⚡ **Hóa giải:** Cẩn trọng trong giao dịch, ký kết hợp đồng. Tránh va chạm
pháp lý.`,
  },

  {
    id: 'thien-hinh-han-ky-pha-danh-bai',
    title: 'Hạn: Hình + Kỵ + Phá - Đánh nhau bị bại',
    sao: ['Thiên Hình'],
    ketHop: ['Hóa Kỵ', 'Phá Quân'],
    doUuTien: 50,
    tomTat: `**Thiên Hình + Hóa Kỵ + Phá Quân vào hạn** — **ĐÁNH NHAU BỊ BẠI**.

⚡ **Đặc trưng:**
- Sinh **VA CHẠM, XUNG ĐỘT**
- Dẫn đến **KIỆN CÁO, ĐÁNH NHAU**
- Khả năng **THUA TRẬN** cao

⚡ **Hóa giải:**
- **KIỀM CHẾ NÓNG NẢY**
- "**MỘT ĐIỀU NHỊN, CHÍN ĐIỀU LÀNH**"
- Tránh châm ngòi tranh cãi
- Thiền định, tụng kinh — **"TÂM AN THÌ SỰ AN"**`,
  },

  {
    id: 'thien-hinh-han-tue-khau-thiet',
    title: 'Hạn: Hình + Thái Tuế - Khẩu thiệt thị phi',
    sao: ['Thiên Hình'],
    ketHop: ['Thái Tuế'],
    doUuTien: 50,
    tomTat: `**Thiên Hình + Thái Tuế vào hạn** — **KHẨU THIỆT, THỊ PHI**.

⚡ **Đặc trưng:**
- Thị phi do **LỜI NÓI**
- Vướng tai bay vạ gió, tranh cãi
- Hiểu lầm trong giao tiếp

⚡ **Hóa giải:**
- **GIỮ MIỆNG** trong giai đoạn này
- Tránh **PHÁT NGÔN BỪA BÃI**
- Không tham gia tranh luận vô bổ`,
  },
];
