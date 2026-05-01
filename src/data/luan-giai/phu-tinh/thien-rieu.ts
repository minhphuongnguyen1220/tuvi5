import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THIÊN RIÊU - Thủy, Dâm Tinh + Ám Tinh + Bại Tinh.
 *
 * An theo THÁNG SINH (engine: khởi từ Sửu thuận theo tháng sinh).
 *
 * ⚡ QUY LUẬT BẮT BUỘC:
 *   - LUÔN ĐỒNG CUNG với Thiên Y (cùng khởi từ Sửu - hardcode engine)
 *   - LUÔN TAM HỢP với Thiên Hình → bộ RIÊU-Y-HÌNH
 *
 * Khởi sinh tại Sửu = nơi giao hoan đất trời (Thái Âm Thái Dương đồng cung)
 * = giờ hoan lạc đôi nam nữ → chủ về DỤC TÍNH, ham muốn nhục dục.
 *
 * Đắc địa: Dần, Mão, Thân, Dậu — sang khôn ngoan thông minh kín đáo
 * Hãm địa: các cung còn lại — bộc lộ dâm dục mạnh
 *
 * ⚡ BỘ TAM ÁM: Riêu - Đà - Kỵ (3 ám tinh) → tâm linh đồng bóng mạnh
 *
 * Phần CHUNG cặp Riêu-Y đã viết tại file này với
 * sao: ['Thiên Riêu', 'Thiên Y'].
 */
export const luanGiai_ThienRieu: DoanLuanGiai[] = [
  {
    id: 'thien-rieu-tinh-chat-chung',
    title: 'Thiên Riêu - Đặc tính chung',
    sao: ['Thiên Riêu'],
    doUuTien: 32,
    tomTat: `**Thiên Riêu** — phụ tinh **DÂM TINH + ÁM TINH + BẠI TINH**, an theo
**tháng sinh**.

**Ngũ hành:** **Thủy**.

⚡ **Đặc tính:**
- **Phong lưu khoái lạc, chơi bời, a dua, dễ tin, mờ ám**
- Thủy → **U BUỒN, ĐA SẦU, ĐA CẢM, LÃNG MẠN**
- Khởi từ **SỬU** (giao hoan đất trời) → ham muốn **NHỤC DỤC**

⚡ **Hình tượng:** LÔNG TÓC nhiều — đặc điểm nhu cầu sinh lý cao.

⚡ **Vị trí - khác biệt rõ rệt:**
- **ĐẮC ĐỊA Dần/Mão/Thân/Dậu** → thông minh, sắc bén, khôn ngoan, kín đáo
- **HÃM ĐỊA** các cung còn lại → bộc lộ phong lưu, dâm dục, chơi bời

⚡ **Là 1 trong 3 sao TAM ÁM:** Riêu - Đà La - Hóa Kỵ → mê tín tâm linh
đồng bóng, dễ bị ma tà ám.

⚡ **Quy luật:**
- **LUÔN ĐỒNG CUNG Thiên Y** (engine hardcode)
- **LUÔN TAM HỢP Thiên Hình** → bộ Riêu-Y-Hình

⚡ **Cản trở:** đặc biệt cản sự sáng sủa của **NHẬT NGUYỆT**.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // PHẦN CHUNG CẶP RIÊU-Y
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'rieu-y-bo-doi-can-bang',
    title: 'Bộ Riêu-Y - Hai thái cực Bệnh & Thuốc cân bằng',
    sao: ['Thiên Riêu', 'Thiên Y'],
    doUuTien: 60,
    tomTat: `**Bộ Riêu-Y** (Thiên Riêu + Thiên Y đồng cung) — **HAI THÁI CỰC** đối xứng:

⚡ **Triết lý cân bằng:**
- Cả 2 sao cùng khởi tại **Sửu** (giao hoan đất trời, thủy triều cao nhất,
  con người cần ấm áp)
- **THIÊN RIÊU** = **BỆNH CỦA NHÀ TRỜI** (phong tình sắc dục, ám tinh)
- **THIÊN Y** = **THUỐC CỦA NHÀ TRỜI** (thanh khiết, chữa bệnh, cứu giải)

⚡ **Quy luật cân bằng theo vị trí:**
- ⚖️ **HÃM ĐỊA** → đòn cân nghiêng về **THIÊN RIÊU** (tác họa dâm dục)
  - Khả năng cứu giải của Thiên Y còn yếu
  - Đặc tính phong lưu, dâm đãng, ám tinh bộc phát mạnh
- ⚖️ **ĐẮC ĐỊA** (Dần/Mão/Thân/Dậu) → đòn cân nghiêng về **THIÊN Y**
  - Đặc tính y học, y dược lấn át
  - Dục tính Riêu vẫn còn nhưng được Y **GIẤU KÍN**, kín đáo không lộ ra

⚡ **Như sen mọc trong bùn** — đắc địa không mất ý nghĩa dâm dục, chỉ là
khôn khéo che giấu.`,
  },

  {
    id: 'rieu-y-hinh-tam-hop-y-duoc',
    title: 'Bộ Riêu-Y-Hình - Tam hợp y dược chuyên môn',
    sao: ['Thiên Riêu', 'Thiên Y'],
    ketHop: ['Thiên Hình'],
    doUuTien: 60,
    tomTat: `**Bộ RIÊU-Y-HÌNH** — Thiên Riêu + Thiên Y luôn đồng cung, Thiên Hình luôn
tam hợp.

⚡ **Vai trò 3 sao:**
- **THIÊN Y** = **THUỐC, Y HỌC**, kiến thức chuyên môn
- **THIÊN RIÊU** = **THẢO DƯỢC**, sự tinh tế, nhạy bén
- **THIÊN HÌNH** = **CHÂM CỨU, BẤM HUYỆT, DAO KÉO** (kỷ luật trong điều trị)

⚡ **Khi đắc địa cả bộ:**
- Có thể trở thành **Y SĨ, DƯỢC SĨ RẤT GIỎI**, chuyên môn cao
- **Bác sỹ phẫu thuật** dùng dao kéo cứu chữa
- **Thầy lang** châm cứu bấm huyệt

⚡ **Hệ quả khi đóng bất kỳ cung nào:**
- Thể chất của cung đó **YẾU ỚT**
- Thường xuyên đau yếu lặt vặt
- Hoặc bị bệnh mãn tính phải điều trị thuốc men`,
  },

  {
    id: 'rieu-y-hinh-hoi-cat-tinh',
    title: 'Bộ Riêu-Y-Hình + cát tinh - Y dược chuyên sâu',
    sao: ['Thiên Riêu', 'Thiên Y'],
    ketHop: ['Thiên Hình', 'Thiên Lương', 'Thiên Tướng', 'Phúc Đức', 'Hóa Khoa', 'Ân Quang', 'Thiên Quý'],
    doUuTien: 65,
    tomTat: `⚡ **Bộ Riêu-Y-Hình hội cát tinh** (Thiên Lương / Thiên Tướng / Phúc Đức /
Hóa Khoa / Quang Quý):
- Cẩn thận, ưa sạch sẽ, tỷ mỉ
- Đầu óc **PHÂN TÍCH RÕ RÀNG, CHI LY**
- Năng khiếu cao về **Y DƯỢC, THUỐC MEN, THẢO DƯỢC**
- Chăm sóc bệnh nhân **RẤT MÁT TAY**`,
  },

  {
    id: 'thien-rieu-tam-am-rieu-da-ky',
    title: 'Bộ Tam Ám - Riêu Đà Kỵ - Đồng bóng tâm linh',
    sao: ['Thiên Riêu'],
    ketHop: ['Đà La', 'Hóa Kỵ'],
    doUuTien: 55,
    tomTat: `**Bộ TAM ÁM** — Thiên Riêu + Đà La + Hóa Kỵ — 3 sao **ÁM TINH** lớn nhất
trong tử vi.

⚡ **Tính chất tác họa:**
- Chủ về **ÁM TẬT, MỜ ÁM, KHÔNG MAY MẮN**
- Dục vọng cao
- Rất kỵ khi đi cùng **THÁI ÂM, THÁI DƯƠNG** (cản sáng Nhật Nguyệt)

⚡ **Tâm linh đồng bóng:**
- Tâm lý **ĐỒNG BÓNG VÀ MÊ TÍN CAO**
- Hay đi **LỄ BÁI CHÙA ĐỀN, XEM TỬ VI, BÓI TOÁN**
- Một số nghiên cứu **KHOA HỌC DỰ ĐOÁN**
- Có **LINH CẢM, TRỰC GIÁC TỐT**, hay mơ ứng nghiệm
- Có thể **HÀNH NGHỀ TÂM LINH**

⚡ **Khi hội đủ Tam Ám:**
- Tính chất tâm linh **MẠNH MẼ**, khó kiểm soát
- Đôi khi dễ bị **MA TÀ ÁM**, đi theo phá hoại
- Đầu óc thần kinh có vấn đề
- Dễ trở nên **ĐIÊN DẠI**`,
  },

  {
    id: 'thien-rieu-dac-dia-dan-mao-than-dau',
    title: 'Thiên Riêu đắc địa Dần Mão Thân Dậu',
    sao: ['Thiên Riêu'],
    chi: ['Dần', 'Mão', 'Thân', 'Dậu'],
    doUuTien: 80,
    tomTat: `**Thiên Riêu ĐẮC ĐỊA tại Dần / Mão / Thân / Dậu** — vị trí đẹp nhất.

⚡ **Đặc trưng:**
- **THÔNG MINH, KHÔN NGOAN, KÍN KẼ**
- Có **CƠ MƯU, HỌC THUẬT CAO THÂM, UYÊN BÁC**
- Dáng vẻ **PHONG LƯU**, thích đến nơi ăn chơi vũ trường hộp đêm
- "Như **SEN MỌC TRONG BÙN**" — sắc dục được giấu kín, không lộ ra

⚠️ **Lưu ý:** Riêu đắc địa **VẪN KHÔNG MẤT** ý nghĩa dâm dục — chỉ là
được giấu kín, biến thành sự khôn khéo, kín đáo.

⚡ **Tài năng:**
- Thông minh, có sở thích **TÌM HIỂU NGHỀ THUỐC, CHÂM CỨU**, cứu chữa người
- Hội nhiều phúc thiện tinh → trở thành **THẦY THUỐC, DƯỢC SỸ GIỎI**`,
  },

  {
    id: 'thien-rieu-cau-phu-hinh-rieu-nu-menh',
    title: 'Câu phú: Hình Riêu phận gái long đong',
    sao: ['Thiên Riêu'],
    cung: ['Mệnh'],
    gioiTinh: 'Nữ',
    ketHop: ['Thiên Hình'],
    doUuTien: 70,
    tomTat: `**Câu phú nổi tiếng cảnh báo nữ mệnh:**

> **"Hình, Riêu phận gái long đong**
> **Ví không lộn chồng ắt cũng phản phu"**

⚡ **Ý nghĩa:**
- Phụ nữ Mệnh có **Hình + Riêu** → đường tình duyên **LẬN ĐẬN**
- Hoặc **TÁI HÔN, ĐỔI CHỒNG**
- Hoặc **PHẢN PHU** (lừa dối chồng, ngoại tình)

⚠️ **Cảnh báo:** Đây là cách cục NỮ rất xấu, đặc biệt khi cùng:
- Đào Hoa, Hồng Loan
- Kình Đà, Hóa Kỵ
- Linh Tinh, Hỏa Tinh
- Không Kiếp

⚡ **Hóa giải:** Tu thân, tăng đạo đức, có sao Phúc Thiện đi cùng (Quan
Phúc, Quang Quý, Tứ Đức) → giảm bớt tác họa.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP NỔI TIẾNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-rieu-co-luong-bac-sy-thay-thuoc',
    title: 'Riêu + Cơ Lương + Tả Hữu + Bác Sỹ - Thầy thuốc danh giá',
    sao: ['Thiên Riêu'],
    ketHop: ['Thiên Cơ', 'Thiên Lương'],
    doUuTien: 60,
    tomTat: `**Thiên Riêu (đắc) + Thiên Cơ + Thiên Lương + Tả Phù Hữu Bật + Bác Sỹ** —
**THẦY THUỐC DANH GIÁ CAO TAY**.

⚡ **Phân tích bộ sao:**
- **Thiên Cơ** + **Thiên Lương** = bộ chính tinh thiện (bác sỹ, lương y)
- **Tả Hữu** = trợ tinh được người tin cậy
- **Bác Sỹ** = sao chuyên môn y học (vòng Lộc Tồn)
- **Thiên Riêu đắc địa** = thảo dược, tinh tế nhạy bén

⚡ **Đặc trưng:**
- **DANH GIÁ CAO TAY**
- Mát tay chữa bệnh
- Được nhiều người tìm đến`,
  },

  {
    id: 'thien-rieu-thay-phu-thuy',
    title: 'Riêu + Tả Hữu + Hình Kỵ + Lưỡng Phù - Thầy phù thủy giỏi',
    sao: ['Thiên Riêu'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Tử Phù'],
    doUuTien: 55,
    tomTat: `**Thiên Riêu + Tả Hữu + Hình Kỵ + Lưỡng Phù** (Tử Phù + Trực Phù) —
**THẦY PHÙ THỦY RẤT GIỎI**.

⚡ **Phân tích:**
- **Tử Phù + Trực Phù** = lưỡng phù trong vòng Thái Tuế
- **Hình + Kỵ** = bùa chú
- **Thiên Riêu** = ám tinh, tâm linh
- **Tả Hữu** = trợ lực

⚡ **Đặc trưng:**
- Hành nghề **PHÙ THỦY, ĐỒNG CỐT, THẦY PHÁP**
- Có khả năng **TÂM LINH MẠNH**
- Cao tay, nổi tiếng

⚡ **Hội Khôi Việt + Long Phượng + Thiên Đồng:** thành **THẦY PHÁP CAO TAY,
NỔI TIẾNG**.`,
  },

  {
    id: 'thien-rieu-xuong-khuc-co-am-anh-sinh-ly',
    title: 'Riêu + Xương Khúc + Cơ - Ám ảnh sinh lý kiểu Hồ Xuân Hương',
    sao: ['Thiên Riêu'],
    ketHop: ['Văn Xương', 'Văn Khúc'],
    doUuTien: 55,
    tomTat: `**Thiên Riêu + Văn Xương + Văn Khúc + Thiên Cơ** — bị **DÀY VÒ VÌ NHU CẦU
SINH LÝ**, ám ảnh sinh lý rất nặng.

⚡ **Đặc trưng:**
- **NHU CẦU SINH LÝ BỊ ÁM ẢNH** rất nặng
- Có khuynh hướng **SÁNG TÁC VẦN THƠ DÂM TÌNH** kiểu **HỒ XUÂN HƯƠNG**
- Hết sức **DÂM ĐÃNG**

⚡ **Phân tích:** Văn Xương + Văn Khúc + Thiên Cơ vốn là bộ thông minh tài
văn → khi gặp Thiên Riêu, tài văn chuyển thành thơ ca dâm tình ẩn ý.`,
  },

  {
    id: 'thien-rieu-luc-sat-dao-hong-lang-lo',
    title: 'Riêu + lục sát + Đào Hồng - Lẳng lơ dâm đãng',
    sao: ['Thiên Riêu'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 55,
    tomTat: `**Thiên Riêu + Hóa Kỵ + Đà La + Cự Môn + Linh Hỏa + Kình Đà + Không Kiếp +
Đào Hồng** — vừa **LẲNG LƠ, VỪA DÂM ĐÃNG**, dù trai hay gái, dù có hay
chưa có gia đình.

⚡ **Đặc trưng:**
- Yếu tố **NGOẠI TÌNH, ĐA MANG** rất nặng
- Với **NHIỀU HẠNG NGƯỜI**, trong **MỌI HOÀN CẢNH**

⚡ **Các bộ kết hợp khác cùng tính chất:**
- **Riêu + Đồng** → thay cũ đổi mới về sinh lý, có gia đình thì ngoại tình
- **Riêu + Thai** → rất dâm dục, có **CON RIÊNG**
- **Riêu + Khúc Xương** → người có **TÁNH DÂM DẬT**
- **Riêu đắc địa + Lưu Hà** → thông minh, công việc trôi chảy, có
  **TÍNH DÂM NGẦM**`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // THIÊN RIÊU TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-rieu-tai-menh',
    title: 'Thiên Riêu tại Mệnh',
    sao: ['Thiên Riêu'],
    cung: ['Mệnh'],
    doUuTien: 75,
    tomTat: `**Thiên Riêu thủ Mệnh** — người **HAM VUI, THÍCH CHƠI BỜI, PHÓNG ĐÃNG**.

⚡ **Cơ thể:** **NHIỀU LÔNG, ĐA MAO** (nam và nữ) — đặc điểm nhu cầu sinh
lý cao.

⚡ **Tính cách:**
- **DỄ TIN NGƯỜI, NHẸ DẠ**
- Tính tình **KHÔNG DỨT KHOÁT**
- Khó cầu công danh, thi cử

⚡ **Bệnh lý:**
- Bệnh về **BỘ PHẬN SINH DỤC** (lậu, liệt dương, teo...)
- Nhu cầu sinh lý cao, đầu óc luôn **GIẰNG CO NỘI TÂM**
- Dễ bị **BỆNH ÂM, THẦN KINH, VONG ÁM**`,
  },

  {
    id: 'thien-rieu-tai-menh-dac',
    sao: ['Thiên Riêu'],
    cung: ['Mệnh'],
    chi: ['Dần', 'Mão', 'Thân', 'Dậu'],
    doUuTien: 73,
    tomTat: `🌟 **Thiên Riêu Đắc địa Dần/Mão/Thân/Dậu tại Mệnh:**
- **CƠ MƯU, HỌC THUẬT UYÊN BÁC**
- Dáng vẻ **PHONG LƯU**
- Thích chơi bời nhưng kín đáo

⚡ **Hợp nghề (đắc địa):** Y dược, Spa, làm tóc, bác sỹ phụ khoa nam khoa,
hành nghề tâm linh.`,
  },

  {
    id: 'thien-rieu-tai-menh-ham',
    sao: ['Thiên Riêu'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    doUuTien: 73,
    tomTat: `⚠️ **Thiên Riêu Hãm địa tại Mệnh:**
- **THÂM ĐỘC, ĐA NGHI, GIỎI ỨNG PHÓ**
- Dung mạo đẹp đẽ, **THÍCH DÂM DỤC**
- Phần nhiều vì **CHUYỆN SẮC DỤC** mà mang họa, **PHÁ GIA BẠI SẢN**`,
  },

  {
    id: 'thien-rieu-tai-menh-ham-dao-hong',
    sao: ['Thiên Riêu'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 70,
    tomTat: `⚠️ **Thiên Riêu Hãm địa + Đào Hồng tại Mệnh:** đặc tính dâm dục, sa ngã
**càng nặng** — phá gia bại sản.`,
  },

  {
    id: 'thien-rieu-tai-menh-nu',
    sao: ['Thiên Riêu'],
    cung: ['Mệnh'],
    gioiTinh: 'Nữ',
    doUuTien: 70,
    tomTat: `⚠️ **Thiên Riêu thủ Mệnh - Nữ mệnh - câu phú:**

> "Hình Riêu phận gái long đong / Ví không lộn chồng ắt cũng phản phu".`,
  },

  {
    id: 'thien-rieu-tai-phu-mau',
    title: 'Thiên Riêu tại Phụ Mẫu',
    sao: ['Thiên Riêu'],
    cung: ['Phụ Mẫu'],
    doUuTien: 73,
    tomTat: `**Thiên Riêu tại Phụ Mẫu** — cha mẹ **TAY NGHỀ KHÉO**, sống bằng nghề liên
quan đến **SÔNG NƯỚC**.

⚡ **Đặc trưng:**
- Có tài về **NGHỆ THUẬT, MỸ THUẬT**, có **HOA TAY**

⚡ **Tâm linh:**
- Cha mẹ thích chuyện **TÂM LINH, BÓI TOÁN, XEM TỬ VI**
- Hay đi **HẦU ĐỒNG, ĐỀN CHÙA**`,
  },

  {
    id: 'thien-rieu-tai-phu-mau-sat-bai-tinh-dao-hoa',
    sao: ['Thiên Riêu'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp', 'Đào Hoa'],
    doUuTien: 70,
    tomTat: `⚠️ **Thiên Riêu tại Phụ Mẫu + Sát bại tinh + Đào hoa:**
- **GIẢM DUYÊN** cha mẹ
- Cha mẹ dễ có **NGƯỜI BÊN NGOÀI**
- Cha mẹ thường **ĂN NẰM TRƯỚC, CƯỚI SAU**`,
  },

  {
    id: 'thien-rieu-tai-phu-mau-dac-phuc-thien',
    sao: ['Thiên Riêu'],
    cung: ['Phụ Mẫu'],
    trangThai: ['Đắc'],
    ketHop: ['Thiên Quan', 'Thiên Phúc'],
    doUuTien: 70,
    tomTat: `🌟 **Thiên Riêu Đắc địa + phúc thiện tinh tại Phụ Mẫu:**
- Cha mẹ làm **DƯỢC SỸ, THẦY THUỐC** cứu người
- Hoặc nghề **CẮT TÓC, SPA**`,
  },

  {
    id: 'thien-rieu-tai-phuc-duc',
    title: 'Thiên Riêu tại Phúc Đức',
    sao: ['Thiên Riêu'],
    cung: ['Phúc Đức'],
    doUuTien: 73,
    tomTat: `**Thiên Riêu tại Phúc Đức** — dòng họ **NỮ LẬN ĐẬN** tình duyên, **NAM
PHONG LƯU**.

⚡ **Đặc trưng dòng họ:**
- **Nữ trong dòng họ:** lận đận tình duyên chồng con, **CÓ ÁC TẬT, CHẾT NON,
  CÔ ĐỘC**
- **Nam trong dòng họ:** phóng đãng phong lưu, đi xa, **CÓ TÀI NGHỆ ĐẶC BIỆT**

⚡ **Tâm linh dòng họ:**
- Dòng họ có người làm **THẦY BÀ, TÂM LINH**
- **TRUYỀN THỪA** lại tới đời mình
- Bản thân dễ có **GIÁC QUAN TÂM LINH** mạnh`,
  },

  {
    id: 'thien-rieu-tai-phuc-duc-dac',
    sao: ['Thiên Riêu'],
    cung: ['Phúc Đức'],
    trangThai: ['Đắc'],
    doUuTien: 70,
    tomTat: `🌟 **Thiên Riêu Đắc địa tại Phúc Đức:**
- Có **PHÚC LỚN**, được tổ tiên phù hộ
- **LINH ỨNG** mỗi khi mong cầu cứu giúp
- Mồ mả có **CÂY CỎ MỌC UM TÙM, XANH TỐT**, dễ có **MỒ KẾT** linh thiêng`,
  },

  {
    id: 'thien-rieu-tai-dien-trach',
    title: 'Thiên Riêu tại Điền Trạch',
    sao: ['Thiên Riêu'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Thiên Riêu tại Điền Trạch** — nhà ở gần **NƠI TÂM LINH, ĐỀN CHÙA MIẾU MẠO**.

⚡ **Đặc trưng:**
- Nhà dễ có **VONG LINH** cư ngụ bên trong
- Người dễ **MỞ ĐỀN MỞ PHỦ** tại nhà nếu hội thêm sao tâm linh khác

⚡ **Đặc điểm nhà cửa:**
- Thường ở nơi **ẨM ƯỚT**
- **CÂY CỎ MỌC UM TÙM**
- Trông **CỔ QUÁI, MA MỊ**

⚡ **Xung quanh:**
- Gần nơi **ĂN CHƠI HƯỞNG THỤ**
- Hay xảy ra nhiều **TỆ NẠN XÃ HỘI**
- Nhiều cảnh **GIA ĐÌNH LỤC ĐỤC, BỒ BỊCH, PHẢN BỘI**`,
  },

  {
    id: 'thien-rieu-tai-quan-loc',
    title: 'Thiên Riêu tại Quan Lộc',
    sao: ['Thiên Riêu'],
    cung: ['Quan Lộc'],
    doUuTien: 73,
    tomTat: `**Thiên Riêu tại Quan Lộc** — bản chất ám tinh **CẢN TRỞ, PHÁ HOẠI** công
danh, học tập. Chỉ đẹp khi **ĐẮC ĐỊA**.

⚡ **Tâm linh:**
- Có thể là người làm nghề **TÂM LINH, XEM BÓI, XEM TỬ VI, THẦY PHÁP**`,
  },

  {
    id: 'thien-rieu-tai-quan-loc-thien-hinh',
    sao: ['Thiên Riêu'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Hình'],
    doUuTien: 70,
    tomTat: `⚡ **Thiên Riêu + Thiên Hình tại Quan Lộc** (không có cát tinh): **NGHỀ
LÀM TÓC, SPA**.`,
  },

  {
    id: 'thien-rieu-tai-quan-loc-dac-phuc-thien',
    sao: ['Thiên Riêu'],
    cung: ['Quan Lộc'],
    trangThai: ['Đắc'],
    ketHop: ['Thiên Quan', 'Thiên Phúc'],
    doUuTien: 70,
    tomTat: `🌟 **Thiên Riêu Đắc địa + phúc thiện tinh tại Quan Lộc:** **THẦY THUỐC,
BÁC SỸ NAM KHOA, PHỤ KHOA, SINH DỤC**.`,
  },

  {
    id: 'thien-rieu-tai-quan-loc-khoi-viet-ta-huu-long-phuong-dong',
    sao: ['Thiên Riêu'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Khôi', 'Thiên Việt', 'Tả Phù', 'Hữu Bật', 'Long Trì', 'Phượng Các', 'Thiên Đồng'],
    doUuTien: 70,
    tomTat: `🌟 **Thiên Riêu tại Quan Lộc + Khôi Việt + Tả Hữu + Long Phượng + Thiên
Đồng:** **THẦY PHÁP CAO TAY, NỔI TIẾNG**.`,
  },

  {
    id: 'thien-rieu-tai-quan-loc-dao-hoa-tinh',
    sao: ['Thiên Riêu'],
    cung: ['Quan Lộc'],
    ketHop: ['Đào Hoa', 'Hồng Loan', 'Thiên Hỷ'],
    doUuTien: 68,
    tomTat: `⚡ **Thiên Riêu tại Quan Lộc + đào hoa tinh:**
- Được quý mến
- Dễ phát sinh **TÌNH CẢM NGOÀI LUỒNG** tại nơi làm việc`,
  },

  {
    id: 'thien-rieu-tai-no-boc',
    title: 'Thiên Riêu tại Nô Bộc',
    sao: ['Thiên Riêu'],
    cung: ['Nô Bộc'],
    doUuTien: 73,
    tomTat: `**Thiên Riêu tại Nô Bộc** — bè bạn, người giúp việc **NAY Ở MAI ĐI**, ham
chơi nhưng **CÓ TÀI NGHỆ ĐẶC BIỆT**.

⚡ **Tâm linh:**
- Bạn bè nhiều **THẦY ĐỒNG, CÔ ĐỒNG**
- Nhiều người quan tâm **TÂM LINH, BÓI TOÁN**
- Bản thân hay làm công việc liên quan giới tâm linh, thờ cúng`,
  },

  {
    id: 'thien-rieu-tai-no-boc-ham',
    sao: ['Thiên Riêu'],
    cung: ['Nô Bộc'],
    trangThai: ['Hãm'],
    doUuTien: 70,
    tomTat: `⚠️ **Thiên Riêu Hãm địa tại Nô Bộc:**
- Bạn bè, đồng nghiệp **ĂN CHƠI, TRÁC TÁNG**
- Dễ có **QUAN HỆ NGOÀI LUỒNG** với bạn bè khác giới
- **TÌNH MỘT ĐÊM**`,
  },

  {
    id: 'thien-rieu-tai-no-boc-dac-phuc-thien',
    sao: ['Thiên Riêu'],
    cung: ['Nô Bộc'],
    trangThai: ['Đắc'],
    ketHop: ['Thiên Quan', 'Thiên Phúc'],
    doUuTien: 70,
    tomTat: `🌟 **Thiên Riêu Đắc địa + phúc thiện tinh tại Nô Bộc:**
- Bạn bè nhiều **THẦY THUỐC, BÁC SỸ GIỎI**
- Mát tay, bốc thuốc chữa bệnh tốt`,
  },

  {
    id: 'thien-rieu-tai-thien-di',
    title: 'Thiên Riêu tại Thiên Di',
    sao: ['Thiên Riêu'],
    cung: ['Thiên Di'],
    doUuTien: 73,
    tomTat: `**Thiên Riêu tại Thiên Di** — ra ngoài **KHÔNG CÓ NƠI CHỐN CỐ ĐỊNH**, đa nghệ.

⚡ **Đặc trưng:**
- Hay thích tới những **NƠI ĂN CHƠI, NHỤC DỤC**
- Nhiều mối quan hệ **KHÔNG LÀNH MẠNH**
- **TÌNH MỘT ĐÊM**
- Dễ có **MA TÀ, VONG** theo về
- Thích đi **XEM BÓI TOÁN, ĐỀN CHÙA**`,
  },

  {
    id: 'thien-rieu-tai-thien-di-sat-tinh-dao-hoa',
    sao: ['Thiên Riêu'],
    cung: ['Thiên Di'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Đào Hoa', 'Hồng Loan'],
    doUuTien: 70,
    tomTat: `⚠️ **Thiên Riêu tại Thiên Di + Sát tinh + đào hoa:**
- Vướng tình một đêm
- Mối quan hệ sắc dục thiếu lành mạnh`,
  },

  {
    id: 'thien-rieu-tai-thien-di-quan-phuc',
    sao: ['Thiên Riêu'],
    cung: ['Thiên Di'],
    ketHop: ['Thiên Quan', 'Thiên Phúc'],
    doUuTien: 70,
    tomTat: `🌟 **Thiên Riêu tại Thiên Di + Quan Phúc (Thiên Quan, Thiên Phúc):**
- Thường tới nơi **CHÙA CHIỀN**
- Nghiên cứu **HUYỀN HỌC**
- Vẫn nhạy cảm với trường khí âm`,
  },

  {
    id: 'thien-rieu-tai-tat-ach',
    title: 'Thiên Riêu tại Tật Ách',
    sao: ['Thiên Riêu'],
    cung: ['Tật Ách'],
    doUuTien: 76,
    tomTat: `**Thiên Riêu tại Tật Ách** — bệnh tật liên quan **MÁU HUYẾT, BỘ PHẬN SINH
DỤC**.

⚡ **Đặc trưng:**
- Bệnh tật sinh ra do **QUAN HỆ TÌNH DỤC BỪA BÃI**
- Dễ mắc **BỆNH ÂM, BỆNH TÂM LINH**
- Liên quan **MA TÀ**
- **THẦN KINH VÀ SỨC KHỎE KHÔNG ỔN ĐỊNH**

⚡ **Đặc biệt khi hãm địa:**
- Nhu cầu sinh lý cao
- Hay có **ĐẤU TRANH DỮ DỘI** bên trong nội tâm về vấn đề này
- Trạng thái **TỰ ÁM THỊ** hoặc **CÔ LẬP NỘI TÂM**

⚡ **Hóa giải:** Cần giữ **CHỪNG MỰC** trong lối sống, tránh để dục vọng
chi phối tâm trí.`,
  },

  {
    id: 'thien-rieu-tai-tai-bach',
    title: 'Thiên Riêu tại Tài Bạch',
    sao: ['Thiên Riêu'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Thiên Riêu tại Tài Bạch** — tài lộc **RA VÀO THẤT THƯỜNG**.

⚡ **Đặc trưng:**
- Ưa thích **CỜ BẠC, TRÒ CHƠI GIẢI TRÍ, NGHỆ THUẬT**
- Hoặc nghề **THUỐC, THẦY GIÁO** phát tài

⚡ **Tiêu cực:**
- **TỐN TIỀN** cho chuyện **TRAI GÁI, CỜ BẠC, ĂN CHƠI, HÚT SẮC**
- Có thể làm ngành nghề liên quan mảng **TRÁI XÃ HỘI**

⚡ **Tâm linh:**
- Hay tiêu tốn tiền cho chuyện **TÂM LINH, XEM BÓI, GIẢI HẠN**
- Hoặc ngược lại làm **THẦY ĐỒNG, THẦY PHÁP, THẦY BÓI** kiếm tiền từ chuyện
  tâm linh`,
  },

  {
    id: 'thien-rieu-tai-tu-tuc',
    title: 'Thiên Riêu tại Tử Tức',
    sao: ['Thiên Riêu'],
    cung: ['Tử Tức'],
    doUuTien: 73,
    tomTat: `**Thiên Riêu tại Tử Tức** — **SINH NỞ KHÓ KHĂN**, hoặc khó nuôi con, hoặc
**CÓ CON RIÊNG** của vợ/chồng.

⚡ **Đặc trưng:**
- Con cái hay **CHƠI BỜI**

⚡ **Tâm linh:**
- Con cái hay tin vào **TÂM LINH, BÓI TOÁN**`,
  },

  {
    id: 'thien-rieu-tai-tu-tuc-ham',
    sao: ['Thiên Riêu'],
    cung: ['Tử Tức'],
    trangThai: ['Hãm'],
    doUuTien: 70,
    tomTat: `⚠️ **Thiên Riêu Hãm địa tại Tử Tức:**
- Con cái sau dễ **CHƠI BỜI, PHÁ TÁN**
- Có đứa **BỎ NHÀ THEO TRAI/THEO GÁI**
- Lăng nhăng tình cảm`,
  },

  {
    id: 'thien-rieu-tai-tu-tuc-dac',
    sao: ['Thiên Riêu'],
    cung: ['Tử Tức'],
    trangThai: ['Đắc'],
    doUuTien: 70,
    tomTat: `🌟 **Thiên Riêu Đắc địa tại Tử Tức:**
- Con cái **TRƯỞNG THÀNH, THÔNG MINH**
- Có đứa làm **THẦY THUỐC, BÁC SỸ**`,
  },

  {
    id: 'thien-rieu-tai-tu-tuc-linh-hoa-da-ky-dong',
    sao: ['Thiên Riêu'],
    cung: ['Tử Tức'],
    ketHop: ['Linh Tinh', 'Hỏa Tinh', 'Đà La', 'Hóa Kỵ', 'Thiên Đồng'],
    doUuTien: 68,
    tomTat: `⚠️ **Thiên Riêu tại Tử Tức + Linh Hỏa + Riêu Đà Kỵ + Thiên Đồng:** có đứa
**NẶNG CĂN**, dễ thần kinh có vấn đề.`,
  },

  {
    id: 'thien-rieu-tai-phu-the',
    title: 'Thiên Riêu tại Phu Thê',
    sao: ['Thiên Riêu'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `**Thiên Riêu tại Phu Thê** — người hôn phối **NHIỀU LÔNG TÓC, NHU CẦU SINH
LÝ CAO**, thường dễ **ĂN CƠM TRƯỚC KẺNG**.

⚡ **Tâm linh:** Người hôn phối thích chuyện **TÂM LINH, BÓI TOÁN**, đi đền
chùa.`,
  },

  {
    id: 'thien-rieu-tai-phu-the-dac',
    sao: ['Thiên Riêu'],
    cung: ['Phu Thê'],
    trangThai: ['Đắc'],
    doUuTien: 73,
    tomTat: `🌟 **Thiên Riêu Đắc địa tại Phu Thê:**
- Vợ chồng **ƯA THÍCH VUI CHƠI, VĂN NGHỆ**
- **PHONG LƯU TÀI TỬ**`,
  },

  {
    id: 'thien-rieu-tai-phu-the-dac-phuc-thien',
    sao: ['Thiên Riêu'],
    cung: ['Phu Thê'],
    trangThai: ['Đắc'],
    ketHop: ['Thiên Quan', 'Thiên Phúc'],
    doUuTien: 70,
    tomTat: `🌟 **Thiên Riêu Đắc địa + phúc thiện tinh tại Phu Thê:** có người làm
**THẦY THUỐC, BÁC SỸ GIỎI**.`,
  },

  {
    id: 'thien-rieu-tai-phu-the-ham',
    sao: ['Thiên Riêu'],
    cung: ['Phu Thê'],
    trangThai: ['Hãm'],
    doUuTien: 73,
    tomTat: `⚠️ **Thiên Riêu Hãm địa tại Phu Thê:**
- "**ÔNG ĂN CHẢ, BÀ ĂN NEM**"
- Đặc biệt khi có sát bại tinh + đào hoa tinh đi cùng → khó bền duyên
- Cả vợ cả chồng đều có **TÌNH NHÂN BÊN NGOÀI**`,
  },

  {
    id: 'thien-rieu-tai-huynh-de',
    title: 'Thiên Riêu tại Huynh Đệ',
    sao: ['Thiên Riêu'],
    cung: ['Huynh Đệ'],
    doUuTien: 73,
    tomTat: `**Thiên Riêu tại Huynh Đệ** — dễ có **ANH CHỊ EM DỊ BÀO** hoặc **ANH CHỊ EM
NUÔI**.

⚡ **Đặc trưng:**
- Trong anh chị em có người **PHONG LƯU TÀI TỬ**
- Có người **BỎ NHÀ THEO TRAI/GÁI**, ăn chơi lang bạt`,
  },

  {
    id: 'thien-rieu-tai-huynh-de-dac-phuc-thien',
    sao: ['Thiên Riêu'],
    cung: ['Huynh Đệ'],
    trangThai: ['Đắc'],
    ketHop: ['Thiên Quan', 'Thiên Phúc'],
    doUuTien: 70,
    tomTat: `🌟 **Thiên Riêu Đắc địa + phúc thiện tinh tại Huynh Đệ:**
- Anh chị em **GIỎI**
- Có người làm **THẦY THUỐC, BÁC SỸ NỔI TIẾNG**`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // THIÊN RIÊU VÀO HẠN
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-rieu-han-bo-tai-han',
    title: 'Thiên Riêu vào hạn - Các bộ tai họa',
    sao: ['Thiên Riêu'],
    doUuTien: 50,
    tomTat: `**Thiên Riêu vào hạn** — người **GIÀ KHÔNG SỐNG LÂU**, **TRẺ HAY QUẤY**.

⚡ **Các bộ kết hợp tai họa:**

1. **Riêu + Phá Toái** → ốm đau, **KHẨU THIỆT**
2. **Riêu + Thai** → dễ có **CON RIÊNG**
3. **Riêu + Tham Lang + Hóa Kỵ** → tai nạn **SÔNG NƯỚC**, khẩu thiệt,
   kiện tụng, lo buồn
4. **Riêu + Không Kiếp + Thai** → **CHỬA HOANG, BỊ HIẾP DÂM**, bị bắt ép
   làm nghề **MÃI DÂM**
5. **Riêu + Thái Dương + Đà La + Hóa Kỵ** → đau **MẮT NẶNG**, đau yếu, hao
   tài, có quan chức bị **TRUẤT GIÁNG**
6. **Riêu + Thiên Hình + Bệnh** → **BỆNH PHÙ**
7. **Riêu + Thiên Hình + Bệnh + Không Kiếp** → **BỆNH PHONG TÌNH** (lậu,
   bệnh xã hội)

⚡ **Lưu ý hạn hãm địa:** Hạn liên quan nhiều tới **NHỤC DỤC, XÁC THỊT,
ĂN CHƠI**.`,
  },
];
