import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THIÊN Y - Thủy, Tùy Tinh.
 *
 * An theo THÁNG SINH (engine: khởi từ Sửu thuận theo tháng sinh).
 *
 * ⚡ QUY LUẬT BẮT BUỘC: LUÔN ĐỒNG CUNG với Thiên Riêu (cùng khởi từ Sửu).
 *
 * Ý nghĩa chiết tự:
 *   - "Y" = sức khỏe, chữa bệnh, thầy thuốc, thuốc men
 *   - "Thiên" = trời
 *   - "Thiên Y" = phúc đức, sự che chở, cứu chữa tốt nhất ông trời ban
 *
 * Đắc địa: Dần, Mão, Thân, Dậu (cùng vị trí Riêu)
 * Hãm địa: các cung còn lại
 *
 * Phần CHUNG cặp Riêu-Y đã viết tại file thien-rieu.ts với
 * sao: ['Thiên Riêu', 'Thiên Y'].
 */
export const luanGiai_ThienY: DoanLuanGiai[] = [
  {
    id: 'thien-y-tinh-chat-chung',
    title: 'Thiên Y - Đặc tính chung',
    sao: ['Thiên Y'],
    doUuTien: 32,
    tomTat: `**Thiên Y** — phụ tinh **TÙY TINH**, an theo **tháng sinh**.

**Ngũ hành:** **Thủy**.

⚡ **Tên gọi:**
- "**Y**" = sức khỏe, chữa bệnh, thầy thuốc, thuốc men
- "**Thiên Y**" = phúc đức may mắn, sự **CHE CHỞ, CỨU CHỮA TỐT NHẤT** mà
  ông trời ban cho

⚡ **Đặc tính:**
- **SẠCH SẼ, VỆ SINH**
- **GIỎI VỀ NGHỀ THUỐC, Y DƯỢC**
- **CỨU GIẢI BỆNH TẬT**

⚡ **Vai trò trong cặp Riêu-Y:**
- Là **THUỐC CỦA NHÀ TRỜI** (cân bằng với Thiên Riêu = bệnh nhà Trời)
- Khi **ĐẮC ĐỊA** → bộc lộ y học, lấn át Riêu, dục tính được giấu kín
- Khi **HÃM ĐỊA** → khả năng cứu giải yếu, Riêu lấn át

⚡ **Vai trò trong bộ Riêu-Y-Hình tam hợp:**
- Y = thuốc, Riêu = thảo dược, Hình = dao kéo châm cứu
- Bộ y dược chuyên môn

⚠️ **Rất kỵ sát tinh:**
- Khi gặp sát tinh → tư chất thầy thuốc bị mờ tối, **LÀM LIỀU, LÀM ẨU**
- **DỐT về trình độ**, lương tâm và trách nhiệm nghề nghiệp không cao
- Sát tinh làm giảm sự **MÁT TAY** và cơ duyên cứu độ
- Trường hợp xấu → sức khỏe kém, dễ **MẤT SỚM** vì bệnh tật`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP NỔI TIẾNG - BÁC SỸ THEO CHUYÊN KHOA
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-y-tuong-quan-phuc-bien-thuoc',
    title: 'Thiên Y + Tướng + Quan Phúc - Lương y giỏi như Biển Thước',
    sao: ['Thiên Y'],
    ketHop: ['Thiên Tướng', 'Thiên Quan'],
    doUuTien: 60,
    tomTat: `**Thiên Y + Thiên Tướng + Thiên Quan + Thiên Phúc** — **LƯƠNG Y, THẦY THUỐC
GIỎI MÁT TAY** như **BIỂN THƯỚC**.

⚡ **Phân tích bộ sao:**
- **Thiên Y**: chuyên môn y dược
- **Thiên Tướng**: vị trí ấn (uy tín nghề)
- **Quan Phúc**: tâm phúc thiện, được trời ban phúc

⚡ **Đặc trưng:**
- Là thầy thuốc **CỨU NHIỀU NGƯỜI**
- Danh tiếng **LƯU TRUYỀN HẬU THẾ** (như Biển Thước - thầy thuốc nổi tiếng
  Trung Hoa cổ)`,
  },

  {
    id: 'thien-y-tuong-hinh-hoa-da-phau-thuat',
    title: 'Thiên Y + Tướng + Hình (Kiếp Sát) - Bác sỹ giải phẫu Hoa Đà',
    sao: ['Thiên Y'],
    ketHop: ['Thiên Tướng', 'Thiên Hình'],
    doUuTien: 60,
    tomTat: `**Thiên Y + Thiên Tướng + Thiên Hình (hay Kiếp Sát)** — **BÁC SỸ GIẢI PHẪU
GIỎI** như **HOA ĐÀ**.

⚡ **Phân tích:**
- **Thiên Y**: y học
- **Thiên Tướng**: ấn tín, uy nghi
- **Thiên Hình** hoặc **Kiếp Sát**: dao kéo, mổ xẻ, sát phạt

⚡ **Đặc trưng:**
- Bác sỹ **PHẪU THUẬT** giỏi
- Như Hoa Đà - thần y mổ xẻ thời Tam Quốc
- Tay nghề mổ xẻ chuyên nghiệp, cứu sống nhiều người`,
  },

  {
    id: 'thien-y-nhat-nguyet-quan-phuc-bac-sy-chieu-dien',
    title: 'Thiên Y + Nhật/Nguyệt + Quan Phúc - Bác sỹ chiếu điện/nhãn khoa',
    sao: ['Thiên Y'],
    ketHop: ['Thái Dương', 'Thái Âm'],
    doUuTien: 55,
    tomTat: `**Thiên Y + Thái Dương / Thái Âm + Thiên Quan + Thiên Phúc** — **BÁC SỸ
CHIẾU ĐIỆN, NHÃN KHOA** hoặc **THẦN KINH**.

⚡ **Phân tích:**
- **Nhật / Nguyệt** = ánh sáng → **CHIẾU ĐIỆN** (X-quang, MRI, siêu âm)
- Thái Dương cũng chủ về **MẮT** → nhãn khoa
- Cũng chủ về **THẦN KINH** (não bộ, hệ thần kinh)
- **Quan Phúc** đảm bảo tâm phúc thiện cứu người

⚡ **Hợp nghề:**
- **Bác sỹ chẩn đoán hình ảnh** (X-quang, MRI, siêu âm)
- **Bác sỹ nhãn khoa**
- **Bác sỹ thần kinh**`,
  },

  {
    id: 'thien-y-tuong-thai-bac-sy-phu-khoa',
    title: 'Thiên Y + Tướng + Thai - Bác sỹ phụ khoa',
    sao: ['Thiên Y'],
    ketHop: ['Thiên Tướng', 'Thai'],
    doUuTien: 55,
    tomTat: `**Thiên Y + Thiên Tướng + Thai** — **BÁC SỸ PHỤ KHOA, ĐỠ ĐẺ**.

⚡ **Phân tích:**
- **Thiên Y**: y học
- **Thiên Tướng**: ấn tín nghề
- **Thai** (đất Thai trong Tràng Sinh): **BÀO THAI, MANG THAI**

⚡ **Hợp nghề:**
- **BÁC SỸ TRỊ BỆNH ĐÀN BÀ**
- **CHỬA ĐẺ, ĐỠ ĐẺ**
- **PHỤ KHOA, SẢN KHOA**`,
  },

  {
    id: 'thien-y-co-nguyet-dong-luong-y-sy',
    title: 'Thiên Y + Cơ Nguyệt Đồng Lương - Y sỹ giỏi',
    sao: ['Thiên Y'],
    ketHop: ['Thiên Cơ', 'Thái Âm', 'Thiên Đồng', 'Thiên Lương'],
    doUuTien: 55,
    tomTat: `**Thiên Y + bộ Cơ Nguyệt Đồng Lương** — **Y SỸ GIỎI**.

⚡ **Phân tích:**
- **Cơ Nguyệt Đồng Lương** = bộ chính tinh thiện đẹp (đặc biệt **Thiên Lương**
  là **THỌ TINH**)
- Bộ này vốn hợp các nghề **Y DƯỢC, GIÁO DỤC, CỨU NGƯỜI**
- Thêm Thiên Y → tăng cường chuyên môn y học

⚡ **Hợp nghề:**
- Y sỹ chuyên môn cao
- Lương y chữa bệnh
- Đặc biệt **Đông y**, **YHCT** (Lương + Cơ là bộ trí tuệ thiện lương)`,
  },

  {
    id: 'thien-y-rieu-bo-phan-sinh-duc',
    title: 'Thiên Y + Riêu - Chuyên khoa sinh dục',
    sao: ['Thiên Y'],
    ketHop: ['Thiên Riêu'],
    doUuTien: 55,
    tomTat: `**Thiên Y + Thiên Riêu (đồng cung luôn)** — chuyên khoa **BỘ PHẬN SINH DỤC**.

⚡ **Đặc trưng:**
- Riêu chủ về **DỤC TÍNH, BỘ PHẬN SINH DỤC**
- Y chủ về chuyên môn y học
- Hợp lại → **BÁC SỸ NAM KHOA, PHỤ KHOA, SINH SẢN**

⚡ **Quy tắc chung:** Tùy theo bộ sao y khoa đi liền với **BỘ PHẬN CƠ THỂ
NÀO** thì y sỹ sẽ **CHUYÊN KHOA** về bộ phận đó:
- Y + Nhật/Nguyệt → mắt, thần kinh
- Y + Tướng + Thai → phụ khoa
- Y + Riêu → sinh dục
- Y + Hình → phẫu thuật`,
  },

  {
    id: 'thien-y-khong-kiep-so-suat-chet-nguoi',
    title: 'Thiên Y + Không / Kiếp - Sơ suất chết người',
    sao: ['Thiên Y'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 55,
    tomTat: `⚠️ **Thiên Y + Địa Không / Địa Kiếp** — trong đời y sỹ phải có lần **SƠ SUẤT
LÀM CHẾT NGƯỜI**.

⚡ **Cảnh báo:**
- Là cách rất xấu cho người làm nghề y
- Sát tinh phá đi sự mát tay
- Có thể vướng **TAI TIẾNG NGHỀ NGHIỆP** lớn
- Hoặc bị **KIỆN TỤNG, CHỊU TRÁCH NHIỆM** y đức

⚡ **Hóa giải:**
- Cần **HỌC HÀNH KỸ LƯỠNG**, không làm liều
- **THẬN TRỌNG** trong từng ca
- Tránh nghề **PHẪU THUẬT** nếu có cách này
- Tu thân tích đức thường xuyên`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // THIÊN Y TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-y-tai-menh',
    title: 'Thiên Y tại Mệnh',
    sao: ['Thiên Y'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `**Thiên Y thủ Mệnh** — người **CẨN THẬN, TỶ MỶ, ƯA SẠCH SẼ**, có năng khiếu
**Y DƯỢC**.

⚡ **Tướng mạo:**
- **NHIỀU LÔNG TÓC** (đặc điểm Thiên Riêu đồng cung)
- **Đắc địa:** khỏe mạnh, **DA DẺ HỒNG HÀO**, đầy sức sống — có thể làm
  người mẫu, chuyên gia chăm sóc sức khỏe, vận động viên thể hình
- **Hãm địa:** **XANH XAO, THIẾU SỨC SỐNG**, gầy ốm

⚡ **Tính cách:**
- **CẨN THẬN, TỶ MỶ, GỌN GÀNG, NGĂN NẮP**
- Năng khiếu **Y DƯỢC, THUỐC MEN**
- Tiếp cận lĩnh vực **CHĂM SÓC SỨC KHỎE**

⚡ **Đắc địa:**
- Học hành **THÔNG TUỆ**, học ít biết nhiều
- Thích **Y DƯỢC, TỬ VI, LÝ SỐ**
- Thích **KHÁM PHÁ, ẨN DẬT, HOÀI CỔ**
- Hợp **THẦY THUỐC, BÁC SỸ MÁT TAY**

⚡ **Hãm địa:**
- Bị **DỤC TÍNH RIÊU** lấn át, khó phát triển
- Có ý thức **PHÒNG CHỮA BỆNH**
- Trong đời phải có thời gian dài liên tục **DÙNG THUỐC**
- Có **BỆNH HIỂM**`,
  },

  {
    id: 'thien-y-tai-phu-mau',
    title: 'Thiên Y tại Phụ Mẫu',
    sao: ['Thiên Y'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Thiên Y tại Phụ Mẫu** — đắc địa cha mẹ thông minh khỏe mạnh.

⚡ **Đắc địa:**
- Cha mẹ có người làm **Y DƯỢC, THẦY THUỐC, BÁC SỸ**
- **GIỎI GIANG, THÔNG MINH**
- **SỨC KHỎE TỐT**
- Biết quan tâm chăm sóc sức khỏe cho cả gia đình

⚡ **Hãm địa:**
- Cha mẹ hay **ỐM ĐAU, BỆNH TẬT**
- Phải **DÙNG THUỐC MEN**, khám chữa nhiều
- Sát bại tinh hội → **GIẢM THỌ** cha mẹ
- Hoặc cha mẹ có **NGƯỜI THỨ BA** bên ngoài (do Thiên Riêu đồng cung)

⚡ **Hội Không Kiếp + Hỏa Linh + Bệnh Phù:** tuổi thọ cha mẹ càng dễ giảm sút.`,
  },

  {
    id: 'thien-y-tai-phuc-duc',
    title: 'Thiên Y tại Phúc Đức',
    sao: ['Thiên Y'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `**Thiên Y tại Phúc Đức** — đắc địa con cháu **HỌC HÀNH TỐT**, dòng họ tổ
tiên có nhiều người làm trong **NGÀNH Y DƯỢC**.

⚡ **Đắc địa:**
- Hay **CỨU GIÚP NGƯỜI**, làm việc thiện
- Được ông bà tổ tiên **PHÙ TRÌ** cho **MAY MẮN, SỨC KHỎE**
- Ốm đau có **THẦY THUỐC CỨU**
- Gia đình người hôn phối có người làm **Y DƯỢC**

⚡ **Hãm địa:**
- Dòng họ nhiều người hay **ỐM ĐAU BỆNH TẬT**
- Có thể **DI TRUYỀN** tới đương số
- Tâm thiện giảm sút (vì lo chuyện cá nhân)`,
  },

  {
    id: 'thien-y-tai-dien-trach',
    title: 'Thiên Y tại Điền Trạch',
    sao: ['Thiên Y'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Thiên Y tại Điền Trạch** — đất gần **BỆNH VIỆN, TRẠM XÁ, NHÀ THUỐC**.

⚡ **Đắc địa:**
- Nhà xung quanh có nhiều **THẦY THUỐC, BÁC SỸ** chữa bệnh
- **THỔ NHƯỠNG** tốt
- Nhiều người **KHỎE MẠNH, THÔNG MINH**

⚡ **Hãm địa:**
- Nơi ở hay xảy ra **ỐM ĐAU, BỆNH TẬT**
- Dễ có **MA TÀ ÁM** (Thiên Riêu)
- Đất phải thờ
- Xung quanh dễ xảy ra **BỆNH DỊCH TRUYỀN NHIỄM** lây lan
- Nhà cửa có nguy cơ trở thành **"TÂM DỊCH"** để có thầy thuốc đến cứu giải`,
  },

  {
    id: 'thien-y-tai-quan-loc',
    title: 'Thiên Y tại Quan Lộc - Hợp nghề Y dược',
    sao: ['Thiên Y'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `**Thiên Y tại Quan Lộc** — ngành nghề liên quan **THUỐC MEN, Y DƯỢC, Y HỌC**.

⚡ **Đắc địa Mão/Dậu/Dần/Thân:**
- Nghề nghiệp **HIỂN VINH**
- **ĐƯỢC NGƯỜI ĐỜI BIẾT TIẾNG**

⚡ **Hợp nghề:**
- **THUỐC MEN, Y DƯỢC, Y HỌC**
- **TỔ CHỨC THIỆN NGUYỆN, CHỮ THẬP ĐỎ**

⚡ **Bị sát tinh đánh phá:**
- Làm các công tác **GIÁN TIẾP, PHỤ TRỢ** trong ngành y
- Quản lý hành chính, cấp cứu, kinh doanh
- Hoặc **TRỒNG CÂY DƯỢC LIỆU, DƯỢC PHẨM**

⚠️ **Hội Không Kiếp:** Trong đời y sỹ phải có lần **SƠ SUẤT LÀM CHẾT NGƯỜI**.

⚡ **Hãm địa:**
- Công việc liên quan nhiều tới **BỆNH TẬT, BỆNH HOẠN**
- Môi trường làm việc **ĐỘC HẠI**
- Suy giảm sức khỏe của đương số`,
  },

  {
    id: 'thien-y-tai-no-boc',
    title: 'Thiên Y tại Nô Bộc',
    sao: ['Thiên Y'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Thiên Y tại Nô Bộc** — đắc địa bạn bè nhiều người làm **NGÀNH Y DƯỢC**.

⚡ **Đắc địa:**
- Bạn bè **THÔNG MINH, CẨN THẬN, CHỈN CHU**
- Bản thân ốm đau có **NGƯỜI QUAN TÂM, CHĂM SÓC**

⚡ **Hãm địa:**
- Bạn bè đồng nghiệp **SỨC KHỎE KÉM**, hay ốm đau
- Đây có thể là người **THẦY THUỐC, BÁC SỸ** với cung Nô đóng vai
  **BỆNH NHÂN** cần cứu giúp

⚡ **Hãm địa + sát bại tinh:**
- Bạn bè ăn chơi chác tán
- Nhiều **BỆNH TẬT**`,
  },

  {
    id: 'thien-y-tai-thien-di',
    title: 'Thiên Y tại Thiên Di',
    sao: ['Thiên Y'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Thiên Y tại Thiên Di** — đắc địa ra ngoài **MAY MẮN**, ốm đau có **NGƯỜI
HỖ TRỢ**.

⚡ **Đắc địa:**
- Đi xa hay được gặp **MAY MẮN**
- Ra ngoài tới môi trường liên quan **NGÀNH Y DƯỢC**
- Quen nhiều **BÁC SỸ, THẦY THUỐC**
- Biết **TỰ CHĂM SÓC** bản thân, **TỰ LẬP TỐT**

⚡ **Hãm địa:**
- Ra ngoài hay bị **ỐM ĐAU, BỆNH TẬT**
- Ăn chơi chác tán dễ bị **LÂY BỆNH TRUYỀN NHIỄM XÃ HỘI**
- Đặc biệt rõ rệt khi hội thêm **SÁT BẠI TINH**`,
  },

  {
    id: 'thien-y-tai-tat-ach',
    title: 'Thiên Y tại Tật Ách',
    sao: ['Thiên Y'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `**Thiên Y tại Tật Ách** — đắc địa giải trừ bớt **BỆNH TẬT, TAI ÁCH**.

⚡ **Đắc địa:**
- **ỐM ĐAU LÀ CÓ THUỐC CHỮA**
- Khả năng giải trừ đến từ **Ý THỨC TỰ CHĂM SÓC** bản thân
- Giảm trừ được bệnh tật

⚡ **Đặc tính bệnh (Thủy):**
- Liên quan **MÁU HUYẾT**
- **HỆ THỐNG TIÊU HÓA, THẬN**

⚡ **Hãm địa:**
- Sức khỏe thường **KHÔNG TỐT**
- Hay ốm đau, bệnh tật **KÉO DÀI**
- Phải **DÙNG THUỐC MEN ĐIỀU TRỊ** đi cùng`,
  },

  {
    id: 'thien-y-tai-tai-bach',
    title: 'Thiên Y tại Tài Bạch',
    sao: ['Thiên Y'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Thiên Y tại Tài Bạch** — đắc địa kiếm tiền từ **NGÀNH Y, CHĂM SÓC SỨC KHỎE**.

⚡ **Đắc địa:**
- Kiếm tiền từ **NGÀNH Y DƯỢC**
- **CHÂM CỨU, CHĂM SÓC SỨC KHỎE**
- **SPA, HUẤN LUYỆN VIÊN THỂ HÌNH**

⚡ **Hãm địa:**
- Hay **TIÊU TỐN NHIỀU TIỀN** cho chuyện ốm đau và thuốc men
- "Của đi vì bệnh"`,
  },

  {
    id: 'thien-y-tai-tu-tuc',
    title: 'Thiên Y tại Tử Tức',
    sao: ['Thiên Y'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Thiên Y tại Tử Tức** — đắc địa con cái **KHỎE MẠNH, THÔNG MINH**, sau theo
nghề y.

⚡ **Đắc địa:**
- Con cái **KHỎE MẠNH, THÔNG MINH, TỰ LẬP TỐT**
- Sau này có đứa theo **NGHỀ Y DƯỢC, CHĂM SÓC SỨC KHỎE**
- Đi cùng Thiên Lương + Thiên Tướng → **TÂM TÍNH LƯƠNG THIỆN**, thích giúp người

⚡ **Hãm địa:**
- Con cái hay **ỐM ĐAU, BỆNH TẬT**
- Phải **ĐIỀU TRỊ THUỐC MEN LIÊN TỤC**`,
  },

  {
    id: 'thien-y-tai-phu-the',
    title: 'Thiên Y tại Phu Thê',
    sao: ['Thiên Y'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `**Thiên Y tại Phu Thê** — đắc địa người hôn phối **THÔNG MINH, ĐẢM ĐANG**.

⚡ **Đắc địa:**
- Vợ chồng là người **THÔNG MINH, CHỈN CHU, ĐẢM ĐANG, CẨN THẬN**
- Biết **QUAN TÂM CHĂM SÓC GIA ĐÌNH**, đặc biệt là **SỨC KHỎE**
- Người hôn phối dễ làm trong **NGÀNH Y DƯỢC**

⚡ **Hãm địa:**
- Người hôn phối hay **ỐM ĐAU, BỆNH TẬT**
- Phải **ĐIỀU TRỊ THUỐC MEN** nhiều
- Hội nhiều sát bại tinh → **GIẢM THỌ** duyên vợ chồng`,
  },

  {
    id: 'thien-y-tai-huynh-de',
    title: 'Thiên Y tại Huynh Đệ',
    sao: ['Thiên Y'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Thiên Y tại Huynh Đệ** — đắc địa anh chị em **GIỎI GIANG**.

⚡ **Đắc địa:**
- Anh chị em **GIỎI GIANG**
- Có người làm trong **NGÀNH Y DƯỢC**
- Hồi nhỏ dễ được anh chị **QUÝ MẾN, CHĂM SÓC** cẩn thận

⚡ **Hãm địa:**
- Anh chị em hay bị **ỐM ĐAU, THƯƠNG TẬT**
- Phải **ĐIỀU TRỊ, THUỐC MEN LIÊN TỤC**`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // THIÊN Y VÀO HẠN
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-y-vao-han',
    title: 'Thiên Y vào hạn',
    sao: ['Thiên Y'],
    doUuTien: 50,
    tomTat: `**Thiên Y vào hạn** — dễ **ỐM ĐAU**, phải chạy chữa thầy thuốc.

⚡ **Đặc trưng:**
- Vì Thiên Riêu **LUÔN ĐI ĐÔI** với Thiên Y
- Có khi gặp **BỆNH VỀ BỘ PHẬN SINH DỤC** (tiểu tiện, phong tình, bệnh đàn bà)

⚡ **Phải đề phòng:**
- **ĐAU YẾU, GIỮ GÌN SỨC KHỎE**
- Có thể bản thân bị bệnh
- Hoặc người thân bị bệnh → cần chăm sóc, điều trị, trông nom

⚡ **Hội Tham Lang + Thiên Đồng:**
- Càng phải đề phòng **BỆNH XÃ HỘI** do **TỬU SẮC PHONG TÌNH**

⚡ **Đắc địa + cát tinh trợ lực:**
- Người trong ngành y dễ **LẬP CÔNG DANH**
- Cứu nhiều người
- Thăng tiến

⚠️ **Sát tinh hội:**
- Vướng vào **TAI TIẾNG NGHỀ NGHIỆP**
- Sức khỏe bị giảm sút`,
  },
];
