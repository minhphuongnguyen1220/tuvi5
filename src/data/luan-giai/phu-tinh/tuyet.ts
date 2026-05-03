import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO TUYỆT - Thổ, Hung Tinh.
 *
 * Vị trí THỨ 10 trong Vòng Trường Sinh 12 sao:
 * Trường Sinh: Mộc Dục: Quan Đới: Lâm Quan: Đế Vượng: Suy
 * Bệnh: Tử: Mộ: TUYỆT: Thai: Dưỡng
 *
 * An theo CỤC.
 *
 * Đặc trưng:
 * - Sau "Mộ": giai đoạn THÂN XÁC TAN BIẾN VÀO ĐẤT
 * - Đại diện cho SỰ BẾ TẮC, CHẤM DỨT, TIÊU DIỆT
 * - Là điểm dừng - dấu chấm hết của một giai đoạn
 * - Đồng thời là sự CHUẨN BỊ CHO TÁI SINH ở kiếp sau
 * - Đặc biệt: KÌM HÃM sức phá hoại của sát tinh đồng cung
 * : tai họa chỉ dừng ở mức SUY TÍNH, chưa phát tác thành hiện thực
 * - Tính kín kẽ, đa mưu túc trí, sống nội tâm
 */
export const luanGiai_Tuyet: DoanLuanGiai[] = [
  {
    id: 'tuyet-tinh-chat-chung',
    title: 'Tuyệt - Đặc tính chung',
    sao: ['Tuyệt'],
    doUuTien: 33,
    tomTat: `**Tuyệt** — phụ tinh **HUNG TINH**, vị trí **THỨ 10** vòng Trường Sinh.

**Ngũ hành:** **Thổ**.

**Đặc tính:**
- **BẾ TẮC, PHÁ HOẠI, TIÊU DIỆT**
- **CHẤM DỨT, SUY TÀN**
- Sau Mộ: thân xác **TAN BIẾN VÀO ĐẤT**
- Là **DẤU CHẤM HẾT** một giai đoạn

**Vai trò 2 mặt:**
- Bản thân là **HUNG TINH** chủ về bế tắc, suy tàn
- Đặc biệt: **KÌM HÃM** sức phá hoại của **SÁT TINH** đồng cung
  - tai họa chỉ dừng ở mức **SUY TÍNH**, chưa phát tác thành hiện thực
- Vừa **U TỐI BẾ TẮC** vừa **ẨN CHỨA SỰ KHÔN NGOAN, KÍN ĐÁO**

**Tâm tính người Tuyệt:**
- Chủ nhân lá số mang dáng dấp **KÍN ĐÁO**
- **GẦY KHÔ, THIẾU SỨC SỐNG**
- Thần thái **TRẦM MẶC**
- Ít bộc lộ cảm xúc, da có phần **TỐI MÀU**
- **KHÔN NGOAN, KÍN KẼ, ĐA MƯU TÚC TRÍ**
- Sống **NỘI TÂM**, thiên về **TOAN TÍNH** hơn hành động bộc phát`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP XẤU
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'tuyet-thien-ma-tuan-triet-ngua-cung-duong',
    title: 'Tuyệt + Thiên Mã + Tuần Triệt - Ngựa cùng đường',
    sao: ['Tuyệt'],
    ketHop: ['Thiên Mã'],
    doUuTien: 60,
    tomTat: `**Tuyệt + Thiên Mã + Tuần / Triệt** — như "**NGỰA CÙNG ĐƯỜNG**".

**Đặc trưng:**
- Công việc **BẾ TẮC**
- Dễ gặp **TIỂU NHÂN QUẤY PHÁ**
- **ĐỒNG NGHIỆP CHỐNG ĐỐI**
- Bị **NGƯỜI TRÊN KÌM HÃM**
- Cơ hội thăng tiến thường **ĐẾN RỒI VỤT MẤT**
- Nỗ lực nhiều nhưng **KHÓ ĐẠT THÀNH TỰU**

Đây là cách điển hình cho **TUYỆT MÃ** + chế thêm Tuần/Triệt — ngựa kéo
xe gặp đường tuyệt + chặn — cảnh ngộ tuyệt vọng.`,
  },

  {
    id: 'tuyet-sat-pha-tham-tranh-chap',
    title: 'Tuyệt + Thất Sát + Phá Quân + Tham Lang - Tranh chấp kiện tụng',
    sao: ['Tuyệt'],
    ketHop: ['Thất Sát', 'Phá Quân', 'Tham Lang'],
    doUuTien: 60,
    tomTat: `**Tuyệt + Thất Sát + Phá Quân + Tham Lang** — vận số tiềm ẩn **HIỂM HỌA
BẤT NGỜ**.

**Đặc trưng:**
- Tai họa thường **KHÔNG LỘ RÕ** từ đầu
- **ÂM Ỉ, NGẤM NGẦM**
- Khi bộc phát thì gây **HẬU QUẢ NẶNG NỀ**

**Hệ quả:**
- **TRANH CHẤP PHÁP LÝ, KIỆN TỤNG**
- **MẤT MÁT TÀI SẢN**
- **TAI NẠN BẤT NGỜ**

Sát Phá Tham là bộ võ tinh hành động — Tuyệt làm tăng tính phá hoại bí
ẩn của bộ này.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // TUYỆT TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'tuyet-tai-menh',
    title: 'Tuyệt tại Mệnh',
    sao: ['Tuyệt'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `**Tuyệt thủ Mệnh** — người **KÍN KẼ ĐA MƯU TÚC TRÍ**, công việc khó hanh
thông.

**Tướng mạo:**
- Mang dáng dấp **KÍN ĐÁO**
- **GẦY KHÔ, THIẾU SỨC SỐNG**
- Thần thái **TRẦM MẶC**
- Ít bộc lộ cảm xúc
- Da có phần **TỐI MÀU**

**Tính cách:**
- **KHÔN NGOAN, KÍN KẼ**
- **ĐA MƯU TÚC TRÍ**
- Sống **NỘI TÂM**
- Thiên về **TOAN TÍNH, SUY NGHĨ NHIỀU** hơn hành động bộc phát
- Biểu hiện rõ nét của sự **KHÔ CẠN, TIÊU TÁN** mà sao Tuyệt chủ quản

**Sự nghiệp:**
- Công việc **KHÓ HANH THÔNG**
- Dễ gặp **TRỞ NGẠI**
- **CHẬM TIẾN TRIỂN**

**Đặc tính 2 mặt khi đi cùng sát tinh:**
- Tuyệt có khả năng **KÌM HÃM** sức phá hoại của sát tinh
- Tai họa chỉ dừng ở mức **SUY TÍNH**, chưa **PHÁT TÁC THÀNH HIỆN THỰC**
- Người **NÓNG TÍNH, NHIỀU MƯU MÔ** nhưng **KIỂM SOÁT ĐƯỢC MÌNH**
- Không để cho những **TẬT XẤU, THỦ ĐOẠN** trong mình bộc lộ ra
- Thành một người **RẤT GIỎI, KHÓ AI QUA MẮT**`,
  },

  {
    id: 'tuyet-tai-phu-mau',
    title: 'Tuyệt tại Phụ Mẫu',
    sao: ['Tuyệt'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Tuyệt tại Phụ Mẫu** — cha mẹ **VẤT VẢ, KÍN ĐÁO DÈ DẶT**.

**Đặc trưng:**
- Cha mẹ **VẤT VẢ**
- Sức khỏe dễ **SUY GIẢM**
- Con đường công danh sự nghiệp thường gặp **NHIỀU TRẮC TRỞ**
- Phải trải qua **GIAN KHÓ** mới gây dựng được gia đình
- Tính tình cha mẹ **KÍN ĐÁO, DÈ DẶT, ÍT CHIA SẺ**
- **KHÔNG HANH THÔNG** trong quan hệ xã hội

**Kết hợp tài tinh:**
- Cha mẹ **CHỊU KHÓ TIẾT KIỆM, TÍCH LŨY**
- Biết **LO CHO CON CÁI**
- **GIỮ GÌN GIA SẢN**
- Dù vậy cuộc đời vẫn **NHIỀU GIAN LAO**, ít được an nhàn`,
  },

  {
    id: 'tuyet-tai-phuc-duc',
    title: 'Tuyệt tại Phúc Đức',
    sao: ['Tuyệt'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `**Tuyệt tại Phúc Đức** — phúc phần tổ tiên **KÉM**, mồ mả không yên.

**Đặc trưng:**
- **PHÚC PHẦN TỔ TIÊN KÉM**
- **MỒ MẢ DÒNG HỌ KHÔNG YÊN**
- **KHÓ TỤ PHÚC** để con cháu hưởng
- Đương số **ÍT ĐƯỢC CHE CHỞ**
- Dễ phải **LY HƯƠNG LẬP NGHIỆP**
- Tự gây dựng lại **PHƯỚC ĐỨC** cho chính mình
- Nhiều người trong dòng họ **NGHÈO KHÓ, ỐM ĐAU BỆNH TẬT**
- **KHÔNG GIỮ ĐƯỢC HƯƠNG KHÓI** tổ tiên

**Hội Tuần / Triệt hoặc nhiều sát bại tinh:**
- Mồ mả càng dễ **THẤT LẠC**
- Nằm ở **NƠI ĐỊA THẾ XẤU**, nhiều xung xạ
- Chủ mệnh **KHÓ BỀN THỌ**
- Gặp **TAI HỌA BẤT NGỜ** hoặc biến cố ngoài ý muốn`,
  },

  {
    id: 'tuyet-tai-dien-trach',
    title: 'Tuyệt tại Điền Trạch',
    sao: ['Tuyệt'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Tuyệt tại Điền Trạch** — nhà ở **NGÕ HẺM, ĐƯỜNG CỤT**, tài sản giấu kín.

**Đặc trưng:**
- Gây **TRỞ NGẠI** cho việc tạo dựng và duy trì tài sản
- Nhà cửa, đất đai **KHÓ DUY TRÌ LÂU DÀI**
- Nơi sinh sống / chỗ làm việc dễ rơi vào **TÌNH THẾ BẤT LỢI**
- Nhà ở **NGÕ HẺM, ĐƯỜNG CỤT, TỐI TĂM**
- **ÍT NGƯỜI QUA LẠI**
- Cuộc sống **THIẾU SINH KHÍ**, mang cảm giác **CÔ QUẠNH**

**Hợp cát tinh** (Hóa Lộc, Lục Cát Tinh, Thái Âm, Thiên Phủ, Lộc Tồn):
- Vẫn có khả năng **TẠO DỰNG CƠ NGƠI VỮNG VÀNG**
- Tài sản thường **GIỮ KÍN**
- Xu hướng "**TIỀN CHÔN CỦA GIẤU**"
- Hoặc để **NGƯỜI KHÁC ĐỨNG TÊN**: ít ai biết thực lực
- **TÍCH LŨY ÂM THẦM** — vừa là thế mạnh tránh thị phi, vừa là hạn chế`,
  },

  {
    id: 'tuyet-tai-quan-loc',
    title: 'Tuyệt tại Quan Lộc',
    sao: ['Tuyệt'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `**Tuyệt tại Quan Lộc** — công danh **NHIỀU PHIỀN NHIỄU**, hợp nghề kín đáo
bảo mật.

**Đặc trưng:**
- Con đường công danh gặp **NHIỀU PHIỀN NHIỄU, KHÓ KHĂN**
- Công việc **TIẾN TRIỂN CHẬM**
- Dễ bị **CẢN TRỞ GIỮA CHỪNG**
- Rơi vào tình trạng "**DẬM CHÂN TẠI CHỖ**"

**Mặt tích cực - tính bí mật của Tuyệt:**
- Hợp các nghề đòi hỏi **KÍN ĐÁO, BẢO MẬT CAO**
- **ĐIỀU TRA, AN NINH**
- **NGHIÊN CỨU KHOA HỌC CHUYÊN SÂU**
- Công việc **ĐỨNG SAU HẬU TRƯỜNG**

**Cát tinh hội** (Khôi Việt, Ân Quang, Thiên Quý):
- Sự "**ẨN MÌNH**" trở thành thế mạnh
- Chuyên tâm làm việc: đạt **THÀNH TỰU NHẤT ĐỊNH**`,
  },

  {
    id: 'tuyet-tai-no-boc',
    title: 'Tuyệt tại Nô Bộc',
    sao: ['Tuyệt'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Tuyệt tại Nô Bộc** — bạn bè **GIẢM SÚT**, dễ cô độc.

**Đặc trưng:**
- **SỐ LƯỢNG BẠN BÈ, ĐỒNG NGHIỆP** giảm sút
- Đương số **KHÓ NHẬN GIÚP ĐỠ**
- Thậm chí dễ rơi vào **CẢNH CÔ ĐỘC**

**Hội Địa Không, Địa Kiếp, Kình Đà:**
- Càng dễ bị **BẠN BÈ XA LÁNH**
- Hoặc bị **LỢI DỤNG, ĐÂM SAU LƯNG**

**Đặc tính ẩn kín 2 mặt:**
- Đương số có **MỐI QUAN HỆ BÍ MẬT**
- **BẠN BÈ NGẦM**
- Sự giúp đỡ từ những người **KHÔNG AI BIẾT TỚI**

**Cát tinh hội:**
- ÍT BẠN nhưng đều là **TRI KỶ**
- Luôn **ÂM THẦM GIÚP ĐỠ**`,
  },

  {
    id: 'tuyet-tai-thien-di',
    title: 'Tuyệt tại Thiên Di',
    sao: ['Tuyệt'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Tuyệt tại Thiên Di** — ra ngoài **VẤT VẢ KHÓ KHĂN**, đường giao tế không
thuận.

**Đặc trưng:**
- Ra ngoài xã hội gặp **NHIỀU VẤT VẢ, KHÓ KHĂN**
- Đường giao tế **KHÔNG THUẬN LỢI**
- Dễ bị **CẢN TRỞ**
- **ÍT GẶP MAY MẮN** trong quan hệ bên ngoài
- Phải đối mặt với **CÔ ĐƠN**
- Rơi vào cảnh "**TỰ LỰC CÁNH SINH**"

**Tính cách:**
- **KÍN KẼ, LẦM LÌ, ÍT CỞI MỞ**
- Khó **HÒA NHẬP** với môi trường mới

**Cát tinh hội nhiều:**
- Sự **KÍN ĐÁO VÀ KIÊN NHẪN** giúp đạt thành tựu
- Trong môi trường đòi hỏi **BÍ MẬT, THẬN TRỌNG**`,
  },

  {
    id: 'tuyet-tai-tat-ach',
    title: 'Tuyệt tại Tật Ách',
    sao: ['Tuyệt'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `**Tuyệt tại Tật Ách** — bệnh **TIẾN TRIỂN CHẬM** nhưng khó chẩn đoán.

**Đặc trưng 2 mặt:**
- Mặc dù là hung tinh nhưng **GIẢM TRỪ** sự phát tác của bệnh tật
- Bệnh **TIẾN TRIỂN CHẬM**
- **ÍT KHI DỮ DỘI ĐỘT NGỘT**

**Mặt trái - tính ẩn kín:**
- Vì **ẨN KÍN** nên **KHÓ CHẨN ĐOÁN**
- Dễ **KÉO DÀI**
- Gây **HAO MÒN SỨC KHỎE**

**Hội nhiều sát bại tinh** (Không Kiếp, Kình Đà, Linh Hỏa):
- Bệnh càng **NGUY HIỂM**
- Thành **MÃN TÍNH, DI TRUYỀN**`,
  },

  {
    id: 'tuyet-tai-tai-bach',
    title: 'Tuyệt tại Tài Bạch',
    sao: ['Tuyệt'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Tuyệt tại Tài Bạch** — **GIẤU TIỀN, CÓ QUỸ RIÊNG**, phương thức kiếm tiền
ít minh bạch.

**Đặc trưng:**
- Xu hướng **GIẤU TIỀN**, có **QUỸ RIÊNG**
- **NGUỒN THU NHẬP BÍ MẬT** ít người biết
- Phương thức kiếm tiền đôi khi **KHÔNG MINH BẠCH**
- Dễ liên quan đến **HOẠT ĐỘNG KÍN ĐÁO**, khó công khai

**Bản chất hạn chế:**
- **HẠN CHẾ** dòng chảy tài chính
- Tiền bạc **KHÓ PHÁT TRIỂN MẠNH**
- Dễ **BẾ TẮC** hoặc dừng lại

**Hội sát bại tinh** (Kình Đà, Linh Hỏa):
- Tiền tài càng **TIÊU TÁN**
- **KHÓ GIỮ CỦA**
- Hay vướng **KIỆN TỤNG, THỊ PHI** về tài chính`,
  },

  {
    id: 'tuyet-tai-tu-tuc',
    title: 'Tuyệt tại Tử Tức',
    sao: ['Tuyệt'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Tuyệt tại Tử Tức** — đường con cái **GIÁN ĐOẠN**, ít con muộn con.

**Đặc trưng:**
- Đường con cái **KHÔNG THUẬN LỢI**
- **SỐ LƯỢNG ÍT** hơn so với mong muốn
- Con cái sinh ra **CHẬM, MUỘN**
- Một số trường hợp con **SỨC KHỎE YẾU, HAY ĐAU ỐM**
- Tính tình **KHÉP KÍN**, ít cởi mở
- **GIÁN ĐOẠN** trong việc nối dõi

**Đặc biệt:**
- Con cái khó phát triển **SỰ NGHIỆP LỚN** như cha mẹ
- Duyên phận với cha mẹ **KHÔNG GẮN BÓ BỀN CHẶT**

**Kết hợp cát tinh** (Lục Cát, Tứ Đức, Lộc Tồn, Hóa Lộc):
- Ảnh hưởng được **GIẢM NHẸ**
- Con tuy không đông nhưng **HIẾU THUẬN, CHĂM LO** cha mẹ
- Có khả năng thành công theo hướng **KHÁC TRUYỀN THỐNG**`,
  },

  {
    id: 'tuyet-tai-phu-the',
    title: 'Tuyệt tại Phu Thê',
    sao: ['Tuyệt'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `**Tuyệt tại Phu Thê** — hôn nhân **TRỞ NGẠI**, hôn phối trầm lặng lạnh nhạt.

**Đặc trưng:**
- Hôn nhân dễ gặp **TRỞ NGẠI**
- Nhân duyên vợ chồng **KHÔNG TRỌN VẸN** như mong muốn
- Người phối ngẫu **TRẦM LẶNG, ÍT BỘC LỘ CẢM XÚC**
- **THIẾU SỰ CHIA SẺ VÀ QUAN TÂM**
- Đời sống hôn nhân **LẠNH NHẠT**
- **KHÔNG GẮN KẾT TINH THẦN**

**Hội nhiều sát bại tinh:**
- Nguy cơ **BẤT HÒA, XA CÁCH, CHIA LY** rõ rệt

**Hợp Hóa Lộc:**
- Hôn nhân tuy **KHÔNG NỒNG NHIỆT** nhưng **BỀN VỮNG**
- "**AN PHẬN THỦ THƯỜNG**"
- Vợ chồng gắn bó lâu dài nhờ **NHẪN NHỊN VÀ TRÁCH NHIỆM**`,
  },

  {
    id: 'tuyet-tai-huynh-de',
    title: 'Tuyệt tại Huynh Đệ',
    sao: ['Tuyệt'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Tuyệt tại Huynh Đệ** — anh chị em **KHÔNG ĐÔNG, XA CÁCH**.

**Đặc trưng:**
- Anh chị em **KHÔNG ĐÔNG**
- Dễ có cảnh **XA CÁCH**
- **KHÔNG GẮN BÓ BỀN CHẶT**
- Thường là những người **VẤT VẢ, KHÓ PHÁT ĐẠT**
- Đường đời nhiều **TRẮC TRỞ**
- Tính cách **KÍN ĐÁO, ÍT CHIA SẺ**
- Gắn kết tình cảm trong gia đình **KHÔNG TRỌN VẸN**

**Tuyệt + Thiên Tướng + Đế Vượng:**
- Dễ có **ANH CHỊ EM DỊ BÀO**
- Cung Bào ở **CUNG DƯƠNG**: cùng cha khác mẹ
- Cung Bào ở **CUNG ÂM**: cùng mẹ khác cha`,
  },
];
