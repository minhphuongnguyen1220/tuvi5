import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO TỬ - Thủy, Bại Tinh.
 *
 * KHÁC HOÀN TOÀN với chính tinh TỬ VI! Tag riêng là 'Tử' (không phải 'Tử Vi').
 *
 * Vị trí THỨ 8 trong Vòng Trường Sinh 12 sao:
 *   Trường Sinh → Mộc Dục → Quan Đới → Lâm Quan → Đế Vượng → Suy →
 *   Bệnh → TỬ → Mộ → Tuyệt → Thai → Dưỡng
 *
 * An theo CỤC.
 *
 * Đặc trưng:
 *   - Sau giai đoạn "Bệnh" → tới giai đoạn CHẾT
 *   - Đa sầu đa cảm, kín đáo, bi quan
 *   - Gắn với SỰ MẤT MÁT, SUY TÀN, TANG THƯƠNG
 *   - Sự CHẤM DỨT chu kỳ sống
 *   - CHE GIẤU sự hung bạo của sát tinh
 *   - HẠN CHẾ phúc lộc của cát tinh
 *   - Tính chất KÍN ĐÁO, BÍ MẬT, BÊN TRONG
 */
export const luanGiai_Tu: DoanLuanGiai[] = [
  {
    id: 'tu-tinh-chat-chung',
    title: 'Tử - Đặc tính chung',
    sao: ['Tử'],
    doUuTien: 33,
    tomTat: `**Tử** — phụ tinh **BẠI TINH**, vị trí **THỨ 8** vòng Trường Sinh.

**Ngũ hành:** **Thủy**.

⚠️ **LƯU Ý:** Sao **TỬ** này KHÁC HOÀN TOÀN với chính tinh **TỬ VI** — đây là
sao trong vòng Trường Sinh.

⚡ **Đặc tính:**
- **ĐA SẦU ĐA CẢM, THÂM TRẦM, KÍN ĐÁO**
- **THIẾU ĐỘNG LỰC**
- Gắn liền với **SỰ MẤT MÁT, SUY TÀN, TANG THƯƠNG**
- **CHẤM DỨT** của chu kỳ sống

⚡ **Vai trò 2 mặt:**
- **CHE GIẤU** sự hung bạo của **SÁT TINH**
- **HẠN CHẾ** phúc lộc của **CÁT TINH** mang lại
- → Đi cùng cát tinh giảm tốt, đi cùng sát tinh giảm xấu

⚡ **Tâm tính:**
- Bản tính **U SẦU**
- Diện mạo **KHÔNG TƯƠI SÁNG**
- Thân hình **NHỎ NHẮN, KÉM PHÁT TRIỂN**
- **NỘI TÂM PHỨC TẠP**
- Ít bộc lộ cảm xúc thật
- Luôn **SUY NGHĨ KÍN ĐÁO**, không để lộ`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP XẤU
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'tu-kinh-da-ky-hung-bao',
    title: 'Tử + Kình Đà + Hóa Kỵ - Hung bạo cãi vã',
    sao: ['Tử'],
    ketHop: ['Kình Dương', 'Đà La', 'Hóa Kỵ'],
    doUuTien: 60,
    tomTat: `⚠️ **Tử + Kình Dương + Đà La + Hóa Kỵ** — tính cách trở nên **HUNG BẠO**.

⚠️ **Đặc trưng:**
- Tính cách trở nên **HUNG BẠO**
- Dễ **NÓNG NẢY**
- **BẤT ĐỒNG, TRANH CÃI**
- Không kiểm soát được cảm xúc
- Tử + sát tinh càng bộc lộ tính cực đoan của sao Tử`,
  },

  {
    id: 'tu-phi-liem-ma-tang-ho-khoc-hoa-linh-tang-thuong',
    title: 'Tử + Phi Liêm + Mã + Tang + Hổ + Khốc + Hỏa + Linh - Họ hàng tang thương',
    sao: ['Tử'],
    ketHop: ['Phi Liêm', 'Thiên Mã', 'Tang Môn', 'Bạch Hổ', 'Thiên Khốc', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 60,
    tomTat: `⚠️ **Tử + Phi Liêm + Thiên Mã + Tang Môn + Bạch Hổ + Thiên Khốc + Hỏa Tinh +
Linh Tinh** — họ hàng gặp **TAI HỌA TANG THƯƠNG**.

⚠️ **Đặc trưng:**
- Trong họ **NHIỀU NGƯỜI MẤT SỚM**
- Tang sự liên miên
- Bộ này tập trung tất cả các sao **TANG TÓC, MAI TÁNG, KHÓC THAN**
- Đặc biệt vào **HẠN** càng nguy hiểm`,
  },

  {
    id: 'tu-thai-phu-phuc-binh-phong-cao-thuong-binh-liet-si',
    title: 'Tử + Thai Phụ + Phục Binh + Phong Cáo tại Phúc - Thương binh liệt sĩ',
    sao: ['Tử'],
    cung: ['Phúc Đức'],
    ketHop: ['Thai Phụ', 'Phục Binh', 'Phong Cáo'],
    doUuTien: 60,
    tomTat: `**Tử + Thai Phụ + Phục Binh + Phong Cáo tại Phúc Đức** — họ hàng có người
**HY SINH VÌ NGHĨA LỚN**.

⚡ **Đặc trưng:**
- Họ hàng có người **HY SINH VÌ NGHĨA LỚN**
- Có **THƯƠNG BINH, LIỆT SĨ** hy sinh trên chiến trường
- Phong Cáo + Thai Phụ = phong tước hậu sự
- Phục Binh = quân nhân
- Tử = sự ra đi
- → Phối hợp thành cách **HY SINH VINH DANH**`,
  },

  {
    id: 'tu-dau-quan-tai-dien-tan-tien',
    title: 'Tử + Đẩu Quân tại Tài / Điền - Chi li tằn tiện có của để dành',
    sao: ['Tử'],
    cung: ['Tài Bạch', 'Điền Trạch'],
    ketHop: ['Đẩu Quân'],
    doUuTien: 55,
    tomTat: `**Tử + Đẩu Quân tại Tài Bạch / Điền Trạch** — chủ mệnh sống **CHI LI, TẰN
TIỆN** nhưng nhờ vậy mà **CÓ CỦA ĐỂ DÀNH**.

⚡ **Đặc trưng:**
- Sống **CHI LI, TẰN TIỆN**
- Tính toán từng đồng
- Nhờ vậy mà **CÓ CỦA ĐỂ DÀNH**
- Đặc biệt thiên về **TÍCH TRỮ TÀI SẢN**
- Đôi khi bị xem là **HÀ TIỆN**`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // TỬ TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'tu-tai-menh',
    title: 'Tử tại Mệnh',
    sao: ['Tử'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `**Tử thủ Mệnh** — người **SÂU SẮC KÍN ĐÁO** nhưng hay **U SẦU BI QUAN**.

⚡ **Diện mạo:**
- Diện mạo thường **KHÔNG TƯƠI SÁNG**
- Thân hình **NHỎ NHẮN, KÉM PHÁT TRIỂN**

⚡ **Tính cách:**
- **NỘI TÂM PHỨC TẠP**
- **ÍT BỘC LỘ CẢM XÚC** thật
- Luôn **SUY NGHĨ KÍN ĐÁO**, không để lộ
- **U SẦU, BI QUAN**

⚡ **Sự nghiệp:**
- Con đường công danh **TRẢI QUA NHIỀU KHÓ KHĂN**
- **ÍT GẶP MAY MẮN**
- Dễ gắn với những nghề liên quan tới **BÍ MẬT, KÍN ĐÁO, TÂM LINH, TANG LỄ**
- Trường hợp làm những công việc khác → **ÍT ĐƯỢC TRỌNG DỤNG**, sự nghiệp
  **BẤP BÊNH**

⚡ **Tình duyên:**
- **TRẮC TRỞ**
- Người hôn phối **KÍN TIẾNG, CHI TIÊU TIẾT KIỆM**
- Gia đạo dễ **LẠNH NHẠT**
- Chủ mệnh biết **TIẾT KIỆM, THẬM CHÍ KEO KIỆT**
- Cách kiếm tiền có nguy cơ **KHÔNG MINH BẠCH, PHI PHÁP**

⚡ **Phúc thọ:**
- Sao Tử làm **GIẢM PHÚC THỌ**
- **ÍT HƯỞNG PHƯỚC PHẦN** tổ tiên
- Dễ gặp **TANG THƯƠNG, SẦU THẢM**

⚡ **Hóa giải:** Cần "**TU NHÂN TÍCH ĐỨC**" — gieo nhân lành để gặt quả thiện.`,
  },

  {
    id: 'tu-tai-phu-mau',
    title: 'Tử tại Phụ Mẫu',
    sao: ['Tử'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Tử tại Phụ Mẫu** — sức khỏe cha mẹ **YẾU**, gia đình **KÍN TIẾNG**.

⚡ **Khi đi cùng sát tinh** (Hỏa Linh, Thiên Hình, Kiếp Sát, Cô Thần, Quả
Tú):
- Sức khỏe của cha mẹ **YẾU**, dễ **ĐAU ỐM**
- Người trong gia đình thường **KÍN TIẾNG, SỐNG THẦM LẶNG**
- Ít giao lưu như "**NGƯỜI DƯNG NƯỚC LÃ**"
- Nhân duyên với cha mẹ **KHÔNG QUÁ GẮN BÓ**
- **KHÔNG HÒA HỢP**, khó **THẤU HIỂU LẪN NHAU**`,
  },

  {
    id: 'tu-tai-phuc-duc',
    title: 'Tử tại Phúc Đức',
    sao: ['Tử'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `**Tử tại Phúc Đức** — dòng họ **ÍT PHÚC PHẦN**, mồ mả tổ tiên bị bỏ bê.

⚡ **Đặc trưng:**
- Dòng họ **ÍT PHÚC PHẦN**
- Người thân **KÍN TIẾNG**, không quan tâm nhau
- **MỒ MẢ TỔ TIÊN** bị **BỎ BÊ**, không được chăm sóc cẩn thận

⚠️ **Hội thêm sát tinh** (Địa Không, Địa Kiếp):
- **KHÔNG ĐƯỢC HƯỞNG PHÚC** tổ tiên
- Phải **LÀM THIỆN BỒI DƯỠNG PHÚC PHẦN** mới có khả năng **CẢI THIỆN VẬN
  MỆNH**

⚡ **Đặc biệt** (Tử + Thai Phụ + Phục Binh + Phong Cáo):
- Họ hàng có người **HY SINH VÌ NGHĨA LỚN, THƯƠNG BINH LIỆT SĨ**`,
  },

  {
    id: 'tu-tai-dien-trach',
    title: 'Tử tại Điền Trạch',
    sao: ['Tử'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Tử tại Điền Trạch** — nhà cửa ở **NGÕ HẺM, SÂU KÍN, KHÓ TÌM**.

⚡ **Đặc trưng:**
- Nhà cửa ở nơi **NGÕ HẺM, SÂU KÍN, KHÓ TÌM**
- Đương số **BIẾT TIẾT KIỆM, GIỮ CỦA TỐT**
- **TÍNH TOÁN CHI LI**, ít khi phung phí

⚠️ **Đi cùng nhiều ám sát tinh** (Thiên Riêu, Đà La, Hóa Kỵ, Cô Thần, Quả
Tú, Tang Môn):
- Nhà gần nơi có **TRƯỜNG KHÍ NĂNG LƯỢNG XẤU**
- Phong thủy âm u, không tốt cho sức khỏe`,
  },

  {
    id: 'tu-tai-quan-loc',
    title: 'Tử tại Quan Lộc',
    sao: ['Tử'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `**Tử tại Quan Lộc** — công danh **TRẮC TRỞ**, hợp nghề kín đáo.

⚡ **Đặc trưng:**
- Hợp các công việc đòi hỏi **KÍN KẼ, BÍ MẬT**
- Hoặc liên quan đến **TANG LỄ, TÂM LINH**
- Chuyên môn **SÂU KÍN, ÍT NGƯỜI BIẾT**

⚠️ **Sao Tử + ám tinh** (Thiên Riêu, Đà La, Hóa Kỵ):
- Công danh **TRẮC TRỞ**
- Ít gặp **MAY MẮN**
- **KHÓ PHÁT TRIỂN**

⚠️ **Nếu không theo lĩnh vực đặc thù:**
- Sự nghiệp **LẬN ĐẬN**
- Ít được **CẤP TRÊN TRỌNG DỤNG**`,
  },

  {
    id: 'tu-tai-no-boc',
    title: 'Tử tại Nô Bộc',
    sao: ['Tử'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Tử tại Nô Bộc** — **ÍT BẠN BÈ**, mối quan hệ không chân thành.

⚡ **Đặc trưng:**
- Có **ÍT BẠN BÈ, ĐỒNG NGHIỆP**
- Những mối quan hệ xã hội **KHÔNG CHÂN THÀNH**
- **KHÓ GẮN BÓ LÂU DÀI**

⚠️ **Khi hoạn nạn:**
- Đương số **KHÔNG NHẬN ĐƯỢC NHIỀU SỰ GIÚP ĐỠ**
- Chủ yếu phải "**TỰ LỰC CÁNH SINH**"`,
  },

  {
    id: 'tu-tai-thien-di',
    title: 'Tử tại Thiên Di',
    sao: ['Tử'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Tử tại Thiên Di** — **ÍT RA NGOÀI**, ngại giao tiếp.

⚡ **Đặc trưng:**
- **ÍT RA NGOÀI**
- **NGẠI GIAO TIẾP**
- Không quan tâm nhiều đến mọi người xung quanh

⚠️ **Hội cùng Quả Tú, Cô Thần, Đẩu Quân:**
- Khi xuất hành lại càng **KÍN KẼ**
- **KHÓ HÒA NHẬP**
- Công việc xa quê hay làm ăn nơi đất khách thường **GẶP NHIỀU KHÓ KHĂN**`,
  },

  {
    id: 'tu-tai-tat-ach',
    title: 'Tử tại Tật Ách',
    sao: ['Tử'],
    cung: ['Tật Ách'],
    doUuTien: 80,
    tomTat: `**Tử tại Tật Ách** — bệnh **KHÓ PHÁT HIỆN**, tích tụ bên trong.

⚡ **Đặc trưng:**
- Dễ mắc những **CĂN BỆNH KHÓ PHÁT HIỆN**
- Bệnh **TÍCH TỤ BÊN TRONG**
- Hoặc liên quan đến **TÂM LINH**

⚠️ **Khi đi cùng nhiều ám sát tinh:**
- Bệnh càng **NẶNG**
- **KHÓ CHỮA DỨT ĐIỂM**

⚡ **Hóa giải:** Tình trạng này chỉ có khả năng được hóa giải khi **TỬ GẶP
TRIỆT**.`,
  },

  {
    id: 'tu-tai-tai-bach',
    title: 'Tử tại Tài Bạch',
    sao: ['Tử'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Tử tại Tài Bạch** — kiếm tiền **KHÔNG MINH BẠCH**.

⚠️ **Đặc trưng:**
- Việc kiếm tiền **KHÔNG MINH BẠCH**

⚠️ **Gặp nhiều sát bại tinh:**
- Dễ theo con đường **PHI PHÁP** hoặc **TRỐN THUẾ**

⚡ **Đặc tính tốt:**
- Chủ mệnh biết **TIẾT KIỆM**
- Đôi khi bị xem là **CHI LI, HÀ TIỆN**

⚡ **Tử + Hóa Kỵ + Đẩu Quân:**
- Càng ứng nghiệm tính chi li, kiếm tiền không minh bạch`,
  },

  {
    id: 'tu-tai-tu-tuc',
    title: 'Tử tại Tử Tức',
    sao: ['Tử'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Tử tại Tử Tức** — con cái **ÍT, KHÓ NUÔI**.

⚡ **Khi kết hợp** (Đẩu Quân, Thiên Hình, Kình Dương, Song Hao):
- **GIẢM SỐ LƯỢNG** con cái
- Chủ mệnh **KHÓ SINH** hoặc dễ **SẨY THAI**

⚠️ **Đặc trưng:**
- Con cái sinh ra thường **KHÓ NUÔI**
- **KHÔNG NGHE LỜI CHA MẸ**
- Có nguy cơ **BỊ BỆNH TẬT**

⚡ **Hậu vận:**
- Đương số càng **VẤT VẢ VÌ CON**
- Khó có được sự **AN NHÀN**`,
  },

  {
    id: 'tu-tai-phu-the',
    title: 'Tử tại Phu Thê',
    sao: ['Tử'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `**Tử tại Phu Thê** — hôn nhân **KHÔNG HÒA THUẬN**, hôn phối kín tiếng.

⚡ **Đặc trưng:**
- Hôn nhân **KHÔNG HÒA THUẬN**
- Dễ gặp **TRẮC TRỞ, BẤT HÒA**
- Người phối ngẫu **KÍN TIẾNG, TRẦM LẶNG**
- **CHI TIÊU TIẾT KIỆM**

⚠️ **Hội thêm sát bại tinh:**
- Nhân duyên càng **MONG MANH**
- Nguy cơ **ĐỔ VỠ CAO**
- Sức khỏe bị **ẢNH HƯỞNG NGHIÊM TRỌNG**`,
  },

  {
    id: 'tu-tai-huynh-de',
    title: 'Tử tại Huynh Đệ',
    sao: ['Tử'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Tử tại Huynh Đệ** — **ÍT ANH CHỊ EM**, dễ chia lìa.

⚡ **Đặc trưng:**
- **ÍT ANH CHỊ EM**
- Trong đó dễ có người **ĐAU ỐM**
- **SỐNG KHÉP KÍN**, ít quan tâm nhau

⚠️ **Hội thêm sát tinh:**
- Gia đạo càng dễ **CHIA LÌA**
- Anh em có nguy cơ **XUNG KHẮC**
- Hoặc **MẤT SỚM**`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // HÓA GIẢI SAO TỬ
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'tu-hoa-giai',
    title: 'Hóa giải sao Tử',
    sao: ['Tử'],
    doUuTien: 40,
    tomTat: `**Hóa giải sao Tử** — cần **NGỒI THIỀN, TẬP YOGA**, giảm căng thẳng.

⚡ **Khi gặp hạn cần:**
- **NGHỈ NGƠI**
- **KHÁM SỨC KHỎE ĐỊNH KỲ**
- Thực hành **THIỀN, YOGA**
- Áp dụng kỹ thuật **GIẢM CĂNG THẲNG**

⚡ **Tinh thần:**
- Học cách **NHÌN ĐỜI LẠC QUAN**
- **MỞ LÒNG** kết nối với mọi người

⚡ **Sự nghiệp:**
- Giữ thái độ **CẨN TRỌNG**
- **KHÔNG QUYẾT ĐỊNH VỘI VÀNG**
- Tập trung **ỔN ĐỊNH** công việc hiện tại
- Tránh **MẠO HIỂM**

⚡ **Tu tâm tích đức:**
- Làm nhiều **VIỆC TỐT**
- **GIÚP ĐỠ NGƯỜI KHÁC** → tăng phước phần
- Dễ được **QUÝ NHÂN GIÚP** khi gặp khó khăn`,
  },
];
