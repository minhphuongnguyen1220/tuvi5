import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO TRIỆT (Triệt Lộ Không Vong) - Kim, Tùy Tinh.
 *
 * CHỨA PHẦN CHUNG CỦA CẶP TUẦN-TRIỆT (tag ['Tuần', 'Triệt']).
 *
 * Tuần Triệt thuộc bộ TỨ KHÔNG: Địa Không + Thiên Không + Tuần Không + Triệt Không.
 * Tên đầy đủ:
 *   - Tuần = Tuần Trung Không Vong
 *   - Triệt = Triệt Lộ Không Vong
 * "Không" = trống rỗng, "Vong" = mất, chết, đi vắng.
 *
 * ĐẶC TÍNH CHUNG:
 *   - NGĂN TRỞ, CHẶN ĐỨNG, TRỪ BỎ tại nơi đóng
 *   - Như BỨC TƯỜNG THÀNH chặn ngang đường
 *   - Đóng GIỮA 2 CUNG (engine: La So.triet = [Chi1, Chi2])
 *   - Chi phối TẤT CẢ các sao đồng cung — không vị nể bất cứ sao nào
 *   - 2 mặt: chỗ tốt → giảm phát; chỗ xấu → ngăn họa
 *
 * KHÁC NHAU:
 *   - Triệt = Kim, anh cả MẠNH BẠO, bức tường chắn ngang
 *     • Mạnh nhất tới ~30 tuổi (tam thập nhi lập), sau đó giảm dần
 *     • Đắc địa Thân-Dậu (tuổi Giáp/Kỷ)
 *   - Tuần = Hỏa, em trai DỊU HƠN, chiếc phanh xe
 *     • Càng về già càng MẠNH, đeo bám đến suốt đời
 *     • Đắc địa Tỵ-Ngọ (tuần Giáp Thân, Giáp Ngọ)
 *
 * VÒNG MỞ KHÓA: Khi vào vận có Tuần → mở Triệt; vào vận Triệt → mở Tuần.
 *
 * CÂU PHÚ "TRIỆT ĐÁO KIM CUNG, TUẦN LÂM HỎA ĐỊA" — đắc địa.
 *
 * CẢNH BÁO: Hai sao này có thể BIẾN TỐT THÀNH XẤU và XẤU THÀNH TỐT.
 * Hiệu lực nghịch đảo dễ làm LẠC HƯỚNG LUẬN ĐOÁN nếu cân nhắc không tinh vi.
 */
export const luanGiai_Triet: DoanLuanGiai[] = [
  // ═══════════════════════════════════════════════════════════════════════
  // PHẦN CHUNG CẶP TUẦN-TRIỆT (tag ['Tuần', 'Triệt'])
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'tuan-triet-tinh-chat-chung',
    title: 'Tuần Triệt - Bộ Tứ Không, ngăn trở chặn đứng',
    sao: ['Tuần', 'Triệt'],
    doUuTien: 36,
    tomTat: `**Tuần - Triệt** — bộ **TỨ KHÔNG** (Địa Không + Thiên Không + Tuần Không +
Triệt Không), chuyên về **NGĂN TRỞ, CHẶN ĐỨNG, GIẢM CHẾ**.

**Triệt:** Kim. **Tuần:** Hỏa. **Hóa khí:** Tùy Tinh.

⚡ **Đặc tính:**
- **Triệt:** Bế tắc, ngăn trở, chướng ngại, **CHẶN ĐỨNG, PHÁ HỦY**
- **Tuần:** Sự **TRẮC TRỞ, DAI DẲNG**, xoay trở chậm chạp

⚡ **Vai trò chung:**
- "**KHÔNG VONG**" — trống rỗng, mất, đi vắng
- Như **BỨC TƯỜNG THÀNH** chặn giữa con đường
- **NGĂN MỌI GIAO THÔNG** đi qua

⚡ **2 mặt:**
- Tại nơi **TỐT TƯƠI, NHIỀU CÁT TINH** → đáng tiếc, mọi sự tốt **BỊ NGĂN
  TRỞ, KHÔNG ĐƯỢC BỘC PHÁT**
- Tại nơi có **SÁT BẠI TINH** → "**TRẠI CẢI TẠO**" hữu ích, không cho
  những kẻ lưu manh gây hại
- Chi phối **TẤT CẢ CÁC SAO** đồng cung — không vị nể bất cứ sao nào
- Có thể **NỬA XẤU NỬA TỐT** tùy vị trí

⚠️ **CẢNH BÁO:** Hai sao này có thể **BIẾN TỐT THÀNH XẤU và XẤU THÀNH TỐT**.
Hiệu lực **NGHỊCH ĐẢO** dễ làm **LẠC HƯỚNG LUẬN ĐOÁN** nếu cân nhắc không
tinh vi.`,
  },

  {
    id: 'tuan-triet-anh-em-triet-manh-tuoi-tre',
    title: 'Quan hệ Tuần - Triệt: Triệt mạnh tuổi trẻ, Tuần mạnh về già',
    sao: ['Tuần', 'Triệt'],
    doUuTien: 35,
    tomTat: `**Tuần - Triệt** như **ANH EM RUỘT THỊT** — cùng ý nghĩa ngăn cản, nhưng
**TRIỆT** mạnh bạo hơn **TUẦN**.

⚡ **Phân biệt vai trò:**
- **TRIỆT** = anh cả, **MẠNH BẠO, DỮ DỘI** hơn
  - **BỨC TƯỜNG CHẮN NGANG** đường, không cho ai qua
  - Báo hiệu **SỰ BẾ TẮC, CHƯỚNG NGẠI LỚN**, **LỤI BẠI NẶNG NỀ**
- **TUẦN** = em trai, **DỊU HƠN**
  - **CHIẾC PHANH XE** làm tốc độ chậm dần lại
  - Báo hiệu **KHÓ KHĂN, NGĂN TRỞ**

⚡ **Hiệu lực theo thời gian:**
- **TRIỆT:** Mạnh nhất tới khoảng **30 TUỔI** (tam thập nhi lập)
  - Giai đoạn từ đó con người TỰ LẬP, **KHÔNG CÒN CHỊU ẢNH HƯỞNG NẶNG** của
    gia đình
  - Có thể vùng vẫy, tự do, làm những điều trước kia chưa thể
- **TUẦN:** Theo thời gian về lâu dài → **CÀNG MẠNH MẼ HƠN**
  - **ĐEO BÁM ĐẾN SUỐT CUỘC ĐỜI**

⚡ **Vòng mở khóa:**
- Vào vận có **TUẦN** → **MỞ TRIỆT** (loại bỏ tạm thời tác dụng Triệt)
- Vào vận có **TRIỆT** → **MỞ TUẦN**
- Khi được mở khóa: tha hồ **TUNG TĂNG, BAY NHẢY**
- Cảnh báo: nếu nơi đó **NHIỀU SÁT BẠI TINH** thì phải **DÈ CHỪNG**, tai
  họa có thể tới gần`,
  },

  {
    id: 'tuan-triet-vo-chinh-dieu-mo-neo-vung-chac',
    title: 'Tuần Triệt + Vô Chính Diệu - Mỏ neo vững chắc',
    sao: ['Tuần', 'Triệt'],
    doUuTien: 60,
    tomTat: `**Tuần - Triệt + cung VÔ CHÍNH DIỆU** — như **MỎ NEO** giúp con thuyền không
người lái trở nên vững chắc.

⚡ **Đặc trưng:**
- Cung VCD = **NƠI VÔ CHỦ**, không có chính tinh tọa thủ
- Thường bị **LUNG LAY, XOAY CHUYỂN** bởi tác nhân bên ngoài
- Tuần - Triệt biến thành **BỨC TƯỜNG VỮNG CHẮC, KIÊN CỐ**
- Luôn bảo vệ nơi chúng đóng khỏi **TÁC NHÂN BÊN NGOÀI**
- **BỀN BỈ VỚI THỜI GIAN**

⚡ **Cấp độ đẹp:**
- VCD + đủ **TỨ KHÔNG** (Tuần + Triệt + Thiên Không + Địa Không) = **RẤT
  ĐẸP**
- VCD + **TAM KHÔNG** = **ĐẸP**
- VCD + **NHỊ KHÔNG** = **TẦM THƯỜNG**
- VCD + **NHẤT KHÔNG** = **KÉM**`,
  },

  {
    id: 'tuan-triet-dac-dia-cau-phu',
    title: 'Triệt đáo Kim cung, Tuần lâm Hỏa địa - Đắc địa',
    sao: ['Tuần', 'Triệt'],
    doUuTien: 60,
    tomTat: `**Câu phú: "Triệt đáo Kim cung, Tuần lâm Hỏa địa"** — vị trí **ĐẮC ĐỊA** của 2
sao.

⚡ **Đặc trưng:**
- **Sao Triệt đắc địa tại 2 cung Thân - Dậu** ứng tuổi can **GIÁP - KỶ**
- **Sao Tuần đắc địa tại 2 cung Tỵ - Ngọ** ứng **TUẦN GIÁP THÂN, GIÁP NGỌ**

⚡ **Tại vị trí đắc địa:**
- Tuần - Triệt chỉ **NGĂN TRỞ, CHẶN ĐỨNG SÁT BẠI TINH** (không cho bộc lộ)
- Với **CÁT TINH** thì **TIẾP TỤC PHÁT HUY**, không động chạm
- → Đây là cách **ĐẸP NHẤT** của Tuần Triệt
- Người ta rất ưa thích Tuần - Triệt đứng đúng vị trí đắc địa của nó`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP CHUNG CỦA TUẦN TRIỆT
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'tuan-triet-niem-dau-thieu-nien-tan-kho',
    title: 'Tuần Triệt niên đầu, thiếu niên tân khổ',
    sao: ['Tuần', 'Triệt'],
    cung: ['Mệnh'],
    doUuTien: 70,
    tomTat: `**Câu phú: "Tuần Triệt niên đầu, thiếu niên tân khổ"** — Tuần Triệt thủ Mệnh
→ tuổi trẻ **LẬN ĐẬN, NGHÈO CỰC, BÔN BA**.

⚠️ **Đặc trưng:**
- **TUỔI TRẺ** thường dễ phải **LẬN ĐẬN, NGHÈO, CỰC, BÔN BA, ĐAU ỐM**
- Công việc **HỌC TẬP** gặp **TRẮC TRỞ**
- Nhất là khi Tuần Triệt đi theo **2 ĐẠI VẬN ĐẦU ĐỜI** của đương số

⚡ **Ngoại lệ:**
- Khi Mệnh đắc Tuần Triệt **HỢP CÁCH**
- Cung **PHÚC, PHỤ MẪU, HUYNH ĐỆ ĐẸP**
- → Cũng không sao cả

⚡ **Tính cách:**
- Người thường **ÍT NÓI, LẦM LÌ**
- Không thích **BỘC LỘ RA NGOÀI**
- **CẤT GIẤU MỌI THỨ BÊN TRONG**
- Tuổi trẻ hay gặp trắc trở ngăn cản → dễ trở nên **TRẦM TÍNH**, không
  muốn chia sẻ

⚡ **Sát bại tinh đánh chiếm:**
- Trở thành người **NÓNG TÍNH, NHIỀU MƯU MÔ**
- Nhưng **KIỂM SOÁT ĐƯỢC MÌNH**
- Không để **TẬT XẤU, THỦ ĐOẠN** trong mình bộc lộ
- Thành một người **RẤT GIỎI, KHÓ AI QUA MẮT**

⚡ **Người sinh bất phùng thời:**
- Tuổi trẻ dễ gặp **TAI HỌA BẤT NGỜ**
- Càng lớn lên (Triệt giảm dần) → mọi thứ **TỐT HƠN**
- Còn Tuần thì càng ngày **CẢN TRỞ CÀNG MẠNH MẼ HƠN**`,
  },

  {
    id: 'tuan-triet-nam-trieu-nu-tuan',
    title: 'Nam ưa Triệt, Nữ ưa Tuần',
    sao: ['Tuần', 'Triệt'],
    doUuTien: 50,
    tomTat: `⚡ **Quy tắc giới tính:** **NAM nhân thường ưa TRIỆT hơn TUẦN**, **NỮ nhân
thường ưa TUẦN hơn TRIỆT**.

⚡ **Nam mệnh:**
- **Gặp Tuần** → càng về già càng gặp **NHIỀU GIAN TRUÂN, CẢN TRỞ**
- Khó **NGÓC ĐẦU** lên được
- **Gặp Triệt** → chỉ khó khăn tuổi trẻ
- Tạo nên nhiều **Ý CHÍ QUYẾT TÂM THAY ĐỔI**

⚡ **Nữ mệnh:** Ngược lại — Tuần dịu hơn nên hợp với phụ nữ; Triệt mạnh quá
nên dễ gây trắc trở quá mức cho nữ.`,
  },

  {
    id: 'tuan-triet-tu-vi-thien-tuong-bai-chuc',
    title: 'Tuần Triệt + Tử Vi/Thiên Tướng/Tướng Quân/Quốc Ấn - Bãi chức mất quyền',
    sao: ['Tuần', 'Triệt'],
    ketHop: ['Thiên Tướng', 'Tướng Quân', 'Quốc Ấn'],
    doUuTien: 60,
    tomTat: `⚠️ **Tuần Triệt + Thiên Tướng / Tướng Quân / Quốc Ấn** — công danh **TREO CAO
NGÃ ĐAU**.

⚠️ **Đặc trưng:**
- Công danh **KHÔNG CAO**
- "**TREO CAO THÌ NGÃ ĐAU**"
- Dễ bị **SA THẢI, MẤT CHỨC**

⚠️ **Riêng Triệt + Thiên Tướng / Tướng Quân / Tử Vi:**
- Dễ dính **TAI HỌA NGUY HIỂM TỚI TÍNH MẠNG**

⚡ **Tử Vi + Thiên Tướng + Tuần Triệt:**
- Là người dễ hay gặp **TAI NẠN, ỐM ĐAU**
- Người dễ **NHỤT CHÍ, HAY THAY ĐỔI**
- Công danh **KHÔNG CAO**
- Dễ có **NHIỀU LẦN BỊ MẤT CHỨC, ĐUỔI VIỆC**`,
  },

  {
    id: 'triet-tham-lang-giam-tho',
    title: 'Triệt + Tham Lang - Giảm thọ',
    sao: ['Triệt'],
    ketHop: ['Tham Lang'],
    doUuTien: 60,
    tomTat: `⚠️ **Sao Tham Lang gặp Triệt** → **GIẢM THỌ**.

⚠️ **Đặc trưng:**
- Tham Lang vốn là sao **THỌ TINH**
- Khi gặp Triệt → bị **CẮT ĐỨT** → **GIẢM TUỔI THỌ**
- Cũng giảm tính **THAM DỤC, ĐÀO HOA, HƯỞNG LẠC** của Tham
- Chuyển sang **TẬP TRUNG TRÍ TUỆ, KHÉO LÉO**`,
  },

  {
    id: 'tuan-triet-cu-mon-ty-ngo-thach-trung-an-ngoc',
    title: 'Tuần Triệt + Cự Môn Tý/Ngọ - Thạch trung ẩn ngọc',
    sao: ['Tuần', 'Triệt'],
    chi: ['Tý', 'Ngọ'],
    ketHop: ['Cự Môn'],
    doUuTien: 75,
    tomTat: `**Tuần Triệt + Cự Môn tại Tý / Ngọ** — thành cách **THẠCH TRUNG ẨN NGỌC** (NGỌC ẨN TRONG ĐÁ).

⚡ **Đặc trưng:**
- Trở thành con người **VÔ CÙNG THÔNG MINH VÀ SẮC SẢO**
- **GIẢM CHẾ** đi cái **THỊ PHI, NÓI NHIỀU** của Cự Môn
- Cự Môn vốn ám tinh + thị phi → Tuần Triệt biến thành **TRÍ TUỆ ẨN**
- Như **NGỌC QUÝ ẨN TRONG ĐÁ THÔ**
- Cách **CỰC ĐẸP**`,
  },

  {
    id: 'tuan-triet-am-duong-ham-tang-sang',
    title: 'Tuần Triệt + Thái Âm Thái Dương HÃM - Tăng sáng',
    sao: ['Tuần', 'Triệt'],
    ketHop: ['Thái Âm', 'Thái Dương'],
    doUuTien: 65,
    tomTat: `**Tuần Triệt + Thái Âm + Thái Dương HÃM ĐỊA** — thì **TỐT**, làm **TĂNG SÁNG**
cho Âm Dương.

⚡ **Đặc trưng:**
- Bình thường Tuần Triệt giảm cát tinh
- Nhưng với **NHẬT NGUYỆT HÃM** (vốn không có ánh sáng) thì NGƯỢC LẠI
- → Tuần Triệt làm **TĂNG SÁNG** cho Nhật Nguyệt
- Đây là cách **HÓA GIẢI** đặc biệt cho Nhật Nguyệt hãm địa
- Phá thế **CỬA ĐÓNG**, mở ra ánh sáng

⚡ **Quy tắc đặc biệt:** Tuần Triệt + chính tinh **HÃM** thì giảm cái xấu →
nhiều khi tốt hơn vị trí miếu vượng.`,
  },

  {
    id: 'tuan-triet-thien-phu-phu-phung-khong',
    title: 'Tuần Triệt + Thiên Phủ - Phủ phùng Không, kho rỗng',
    sao: ['Tuần', 'Triệt'],
    ketHop: ['Thiên Phủ'],
    doUuTien: 60,
    tomTat: `⚠️ **Tuần Triệt + Thiên Phủ** → thành cách **PHỦ PHÙNG KHÔNG**, chủ về **CÁI
KHO RỖNG**.

⚠️ **Đặc trưng:**
- Thiên Phủ vốn là sao **TÀI TINH**, kho cất của
- Gặp Tuần / Triệt → "**KHO RỖNG**"
- **KHÓ TÍCH LŨY** được tài sản, của cải
- Tài lộc **HAO HỤT, THẤT THOÁT**
- Cách **PHỦ PHÙNG KHÔNG** là cách xấu của Thiên Phủ`,
  },

  {
    id: 'triet-thien-ma-vo-chong-bo-nhau',
    title: 'Triệt + Thiên Mã - Vợ chồng bỏ nhau',
    sao: ['Triệt'],
    ketHop: ['Thiên Mã'],
    cung: ['Phu Thê'],
    doUuTien: 55,
    tomTat: `⚠️ **Triệt + Thiên Mã tại Phu Thê** — vợ chồng **BỎ NHAU RẤT DỄ DÀNG**.

⚠️ **Đặc trưng:**
- Vợ chồng **BỎ NHAU RẤT DỄ DÀNG**
- **VỢ CHỒNG ÔM CON BỎ VỀ NHÀ**
- Mã = di chuyển + Triệt = cắt đứt → ly tán nhanh chóng
- Đặc biệt với mối tình đầu`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // TUẦN TRIỆT VÀO HẠN
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'tuan-triet-vao-han',
    title: 'Tuần Triệt vào hạn - Hai mặt nghịch đảo',
    sao: ['Tuần', 'Triệt'],
    doUuTien: 50,
    tomTat: `**Tuần Triệt vào hạn** — hiệu lực **NGHỊCH ĐẢO** rất mạnh.

⚡ **Cơ chế mở khóa:**
- Hạn vào **TRIỆT** thì **MỞ TUẦN**
- Hạn vào **TUẦN** thì **MỞ TRIỆT**

⚠️ **Hai mặt:**
- **Gặp sao SÁNG SỦA** → hạn lại trở nên **MỜ ÁM**, mưu sự **TRẮC TRỞ, THẤT
  BẠI**
- **Gặp sao XẤU XA** → hạn được trở nên **SÁNG SỦA**, dù có gặp trắc trở
  ban đầu

⚡ **Cảnh báo:**
- Đặc biệt cung Hạn gặp Tuần - Triệt **RẤT ĐÁNG LƯU Ý**
- Hai sao này có hiệu lực **MẠNH** ở các đại, tiểu hạn
- Có thể **BIẾN TỐT THÀNH XẤU và XẤU THÀNH TỐT**
- Hiệu lực nghịch đảo **DỄ LÀM LẠC HƯỚNG LUẬN ĐOÁN**`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // SAO TRIỆT TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'triet-tai-menh',
    title: 'Triệt tại Mệnh - Vất vả tự lập từ sớm',
    sao: ['Triệt'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `**Triệt thủ Mệnh** — từ bé **VẤT VẢ NGHÈO KHỔ**, phải tự lập từ sớm.

⚡ **Diện mạo:**
- Dáng vóc **CHẮC KHỎE, HƠI ĐẬM**
- Khuôn mặt **NGHIÊM NGHỊ**
- Thuở nhỏ hay **ỐM ĐAU, KHÓ NUÔI**
- Dễ để lại **SẸO** hoặc **DẤU VẾT** trên thân thể

⚡ **Tính cách:**
- **KÍN ĐÁO, THẬN TRỌNG, ÍT LỜI**
- Bên trong chất chứa **SỰ TỪNG TRẢI**
- Dễ "**NGỘ**" ra chân lý sau nhiều biến cố

⚡ **Đi cùng cát tinh** (Thiên Lương, Văn Xương, Văn Khúc):
- Tính cách **ĐIỀM ĐẠM, KHÔN NGOAN**
- Về sau dễ **THÀNH CÔNG**

⚠️ **Hội với sát tinh** (Kình Đà, Hỏa Linh):
- Dễ **BI QUAN, TỰ TI, BẤT AN**
- **KHÓ VƯỢT QUA NGHỊCH CẢNH**

⚡ **Công danh:**
- Triệt như **VÁCH NGĂN** khiến sự nghiệp **LẮM LẦN TRẮC TRỞ**
- Cơ hội đến nhưng **TUỘT KHỎI TAY**
- Thường phải **ĐI ĐƯỜNG VÒNG**

⚡ **Phúc thọ:**
- Trải qua nhiều **BIẾN ĐỘNG BẤT NGỜ**, thăng trầm không đoán trước
- Đi với cát tinh: phúc lộc **HAO HỤT, ĐƯỢC RỒI LẠI MẤT**
- Hội với hung sát tinh: Triệt thành "**LƯỠI KÉO CẮT HỌA**", **THOÁT NẠN
  TRONG GANG TẤC**, giữ được tính mạng

⚠️ **Vô chính diệu + Tam Không / Tứ Không:** làm nên **DANH PHẬN** nhưng
không bền, tuổi niên thiếu vất vả.`,
  },

  {
    id: 'triet-menh-phu-mau-mo-coi',
    title: 'Triệt tại Mệnh và Phụ Mẫu - Mồ côi sớm',
    sao: ['Triệt'],
    cung: ['Mệnh', 'Phụ Mẫu'],
    doUuTien: 70,
    tomTat: `⚠️ **Triệt đồng thời tại Mệnh và Phụ Mẫu** — có thể **MỒ CÔI SỚM** hoặc
sớm ra đời tự lập.

⚡ **Đặc trưng:**
- Phúc ấm cha mẹ bị **CHẶN ĐỨNG**
- Đương số phải **TỰ LẬP TỪ NHỎ**
- Thiếu sự nâng đỡ từ phía gia đình`,
  },

  {
    id: 'triet-tai-phu-mau',
    title: 'Triệt tại Phụ Mẫu',
    sao: ['Triệt'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Triệt tại Phụ Mẫu** — báo hiệu sự **HỤT HẪNG TÌNH THÂN**.

⚠️ **Đặc trưng:**
- Cha mẹ **MẤT SỚM, LY TÁN**
- Hoặc còn đủ nhưng **KHÓ GẦN GŨI, ÍT GẮN BÓ**
- Tính chất triệt tiêu khiến **PHÚC ẤM TỔ TIÊN** và sự nâng đỡ **GIẢM SÚT**
- Con cái **KHÓ CẬY NHỜ**

⚠️ **Hội nhiều sát tinh:**
- Cha mẹ dễ **ĐOẢN THỌ**
- Đặc biệt khi Nhật, Nguyệt **LẠC HÃM** hoặc bị **KHÔNG KIẾP CHIẾU**

⚡ **Mặt tích cực:**
- Khi đối diện nghịch cảnh, Triệt **GIẢM NHẸ HUNG HỌA**
- Khi cung Phụ Mẫu có cát tinh (Thiên Lương, Thiên Đồng, Tả Hữu) → Triệt
  khiến tốt đẹp bị **SUY GIẢM**, tình thương không trọn vẹn
- Đương số ít được che chở → buộc phải **DỰA VÀO BẢN THÂN**, sớm rèn nghị
  lực`,
  },

  {
    id: 'triet-tai-phuc-duc',
    title: 'Triệt tại Phúc Đức',
    sao: ['Triệt'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `**Triệt tại Phúc Đức** — gia tộc **THIẾU HÒA THUẬN**, dễ ly tán.

⚡ **Đặc trưng:**
- Phần phúc đức **BỊ TRỤC TRẶC** trên phương diện nào đó
- Gia tộc thiếu hòa thuận, **DỄ LY TÁN**
- Phúc phần truyền lại **KHÔNG TRỌN VẸN**
- Đương số khó được nhận **MAY MẮN, PHÚC PHẦN** mà tổ tiên để lại
- **GIẢM BỚT LƯƠNG DUYÊN, MAY MẮN**, dễ **MUỘN VỢ MUỘN CHỒNG**
- Mồ mả tổ tiên thường **KÉM**, đặt tại vị trí không đẹp, hay bị gì đó
  vây quanh hoặc chắn ngang phía trước mặt

⚡ **Đặc biệt - Triệt + Dương Thỉ:**
- Dòng họ **THẤT TỰ**, phải **LẬP CON NUÔI**

⚡ **Hai pha của Triệt tại Phúc:**
- Triệt → **TUỔI TRẺ KHÔNG NHIỀU MAY MẮN**
- Phải **TỰ TÔN BỒI PHÚC ĐỨC**
- Càng **VỀ GIÀ CÀNG ĐƯỢC HƯỞNG** phước đức ấy

⚡ **VCD + Triệt:**
- **GIẢM RỐI REN**, phúc khí **KHÔNG BỊ TIÊU HAO**

⚠️ **Hội Kình Đà, Hỏa Linh, Không Kiếp:**
- Hạn xấu **CÀNG NẶNG**
- Gia đình dễ **LY TÁN**
- Tinh thần **BẤT AN**`,
  },

  {
    id: 'triet-tai-dien-trach',
    title: 'Triệt tại Điền Trạch',
    sao: ['Triệt'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Triệt tại Điền Trạch** — đất đai nhà cửa **KHÓ GIỮ**, dễ hao hụt sang
nhượng.

⚠️ **Đặc trưng:**
- Đất đai, nhà cửa **KHÓ GIỮ**
- Dễ **HAO HỤT, SANG NHƯỢNG**
- Đổi thay **NHIỀU LẦN**
- Chỉ có tài sản trong **MỘT GIAI ĐOẠN** nào đó
- Tài sản có nhưng **KHÔNG ĐỨNG TÊN MÌNH**
- Người làm ra của nhưng phải **CHẬT VẬT**

⚡ **Đi cùng Tả Hữu, Thiên Phủ, Lộc Tồn:**
- Vẫn có **NƠI ĂN CHỐN Ở** nhưng **KHÔNG BỀN**
- **DỰNG RỒI PHÁ, MUA RỒI LẠI BÁN**

⚡ **Hội nhiều hung sát tinh:**
- Triệt thành "**LÁ CHẮN**"
- Giảm bớt **TRANH CHẤP ĐẤT CÁT** hay nguy cơ **PHÁ SẢN**

⚡ **Vị trí nhà:**
- Triệt cư Điền → nhà thường ở **NGÃ BA, NGÃ TƯ ĐƯỜNG**

⚡ **Triệt cư Phúc - Điền:** không được hưởng **DI SẢN TỔ PHỤ** để lại.
⚡ **Triệt cư Điền - Quan:** tuổi trẻ vất vả, **KHÓ TÍCH LŨY** tiền bạc của
cải.`,
  },

  {
    id: 'triet-tai-quan-loc',
    title: 'Triệt tại Quan Lộc',
    sao: ['Triệt'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `**Triệt tại Quan Lộc** — công danh **LẬN ĐẬN, GIÁN ĐOẠN**.

⚠️ **Đặc trưng:**
- Công danh **LẬN ĐẬN, KHÓ NHỌC** mới làm nên
- Thuyền đi **NGƯỢC GIÓ** — có cơ hội nhưng khó giữ trọn
- Người phải chịu **VẤT VẢ** trong một thời gian
- Công danh thường **KHÓ CAO**
- Vào đời **MUỘN**, sự nghiệp **NHIỀU LẦN GIÁN ĐOẠN**
- Tất tả **NGƯỢC XUÔI** mới mong giữ chỗ đứng

⚠️ **Triệt + Thiên Tướng / Tướng Quân:**
- Dễ có thể bị **BÃI CHỨC**
- Hay bị **TAI NẠN TRONG CÔNG VỤ**

⚡ **Gặp sao cát** (Tử Vi, Thiên Phủ, Khôi Việt, Hóa Quyền):
- Công danh **HIỂN ĐẠT** nhưng **CHÓNG TÀN**
- Quyền uy **KHÓ BỀN**

⚡ **Hội hung sát tinh** (Phá Quân, Kình Đà, Không Kiếp):
- Triệt là yếu tố **CỨU GIẢI**
- Giảm bớt **PHÁ BẠI NẶNG NỀ**

⚡ **Triệt cư Quan - Nô:**
- Trong công việc **KHÔNG TẠO ĐƯỢC MỐI QUAN HỆ** bạn bè, đồng nghiệp, cấp
  dưới
- **KHÓ PHÁT TRIỂN**

⚡ **Hợp nghề:** Học thuật, **NGHIÊN CỨU**, công việc không nặng bon chen.`,
  },

  {
    id: 'triet-tai-no-boc',
    title: 'Triệt tại Nô Bộc',
    sao: ['Triệt'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Triệt tại Nô Bộc** — tôi tớ **THAY ĐỔI**, ra vào luôn.

⚡ **Đặc trưng:**
- Tôi tớ **THAY ĐỔI, RA VÀO LUÔN**
- **KHÔNG AI Ở LÂU DÀI**
- Mối quan hệ "**CÓ CŨNG NHƯ KHÔNG**"
- Hứa hẹn nhiều mà **ÍT AI GIÚP ĐỠ TRỌN VẸN**
- Tình bạn **KÉM BỀN**
- Phải **DỰA VÀO SỨC MÌNH** nhiều hơn mong chờ trợ lực

⚡ **Có Tả Hữu, Khôi Việt, Xương Khúc, Thiên Phúc:**
- Triệt làm **GIẢM KHẢ NĂNG HỖ TRỢ**
- Bản mệnh **BỊ BỎ RƠI** khi cần

⚡ **Đi với hung sát tinh** (Kình Đà, Hóa Kỵ, Không Kiếp):
- Triệt **HÓA GIẢI** tính xấu
- Tránh được **PHẢN TRẮC, LỪA GẠT**

⚡ **Triệt cư Nô - Di:**
- Ra ngoài **ÍT BẠN ÍT BÈ**
- Không hay giao tiếp, quan hệ với ai
- Lúc có việc cần thì **KHÔNG CÓ AI BÊN CẠNH**`,
  },

  {
    id: 'triet-tai-thien-di',
    title: 'Triệt tại Thiên Di',
    sao: ['Triệt'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Triệt tại Thiên Di** — bôn ba bên ngoài **VẤP NGĂN TRỞ**.

⚠️ **Đặc trưng:**
- Bôn ba bên ngoài dễ **VẤP NGĂN TRỞ**
- Đi xa hay lập nghiệp **KHÓ THÀNH TOẠI**
- Sống **KHÉP KÍN, DÈ DẶT XÃ GIAO**
- **ÍT MỞ LÒNG** với người lạ
- Vận số khó phát triển ở **MÔI TRƯỜNG NGOẠI VI**
- **XUẤT NGOẠI LẮM TRẮC TRỞ**
- Là người **ÍT RA NGOÀI**, ít quan hệ giao tiếp
- Đặc biệt khi có Tuần - Triệt **TẠI 2 CUNG NÔ - DI**

⚡ **Đồng cung cát tinh** (Thiên Mã, Lộc Tồn, Tả Hữu, Xương Khúc, Khôi Việt):
- Triệt **GIẢM VẬN MAY**
- Bạn bè xa xứ **KHÓ NHỜ CẬY**

⚡ **Hội hung sát tinh** (Kình Đà, Không Kiếp, Linh Hỏa, Hóa Kỵ):
- Triệt **CẮT BỚT HUNG HỌA**
- Giảm tai ương đường xa

⚡ **Tuần Triệt tại 2 cung Di - Tật → TỐT:**
- Người ra ngoài **CẨN TRỌNG**
- Ít dính **TAI VẠ, BỆNH TẬT**`,
  },

  {
    id: 'triet-tai-tat-ach',
    title: 'Triệt tại Tật Ách - Vị trí ĐẸP',
    sao: ['Triệt'],
    cung: ['Tật Ách'],
    doUuTien: 80,
    tomTat: `**Triệt tại Tật Ách** — vị trí **"ĐẸP"** của Triệt — **ĐÁNH TAN BỆNH TẬT, TAI
HỌA**.

⚡ **Rất CẦN có Tuần Triệt tại Tật Ách** vì nhờ 2 sao này mà bệnh, tật và họa
sẽ **TIÊU TÁN** hay **GIẢM THIỂU** rất nhiều — sức khỏe và may mắn được
**BẢO ĐẢM** nhiều hơn.

⚡ **Đặc trưng:**
- **ĐÁNH TAN BỆNH TẬT, TAI HỌA**
- Tính chất **CHẶN ĐỨNG** giúp giảm nhẹ bệnh tật, tai nạn
- Nhiều lần **THOÁT HIỂM TRONG GANG TẤC**

⚡ **Cung Tật Ách có nhiều hung tinh** (Kình Đà, Linh Hỏa, Không Kiếp):
- Triệt lập tức phát huy khả năng **CHE CHẮN**
- **HÓA HUNG THÀNH CÁT**
- **HẠN NẶNG THÀNH NHẸ**

⚠️ **Hai mặt:**
- Cung có nhiều phúc tinh (Thiên Lương, Thiên Đồng, Thái Âm, Thiên Phủ):
  - Triệt khiến **PHÚC KHÍ HAO TỔN**
  - **SỨC KHỎE GIẢM SÚT**
  - Dễ mắc **BỆNH VẶT** hoặc **GIẢM TUỔI THỌ**
- Người có Triệt tại Tật thường:
  - **CƠ ĐỊA NHẠY CẢM**
  - Dễ **ĐAU ỐM** nhưng cũng **CHÓNG HỒI PHỤC**`,
  },

  {
    id: 'triet-tai-tai-bach',
    title: 'Triệt tại Tài Bạch',
    sao: ['Triệt'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Triệt tại Tài Bạch** — tài lộc **HAO TÁN, GIÁN ĐOẠN**.

⚠️ **Đặc trưng:**
- Tài lộc **HAO TÁN**
- Con đường kiếm tiền dễ bị **GIÁN ĐOẠN**
- **CẢN TRỞ** khả năng kiếm tiền, thu nhập
- Người **KHÔNG CÓ TÀI SẢN**, hoặc chỉ có trong **MỘT GIAI ĐOẠN**
- Làm ra của nhưng phải **CHẬT VẬT**

⚡ **Cung này có nhiều chính tinh miếu vượng** (Vũ Khúc, Thiên Phủ, Thái
Dương, Thái Âm):
- Tiền bạc **KHÓ TỤ**
- Làm nhiều mà **HƯỞNG ÍT**
- Cơ hội đến rồi **VUỘT MẤT**

⚡ **Hội hung tinh** (Kình Đà, Linh Hỏa, Không Kiếp):
- Triệt phát huy **MẶT TÍCH CỰC**
- Giúp **NGĂN CHẶN PHÁ HAO** nặng
- Tránh được cảnh **TRẮNG TAY**

⚡ **Tuần Triệt cư Tài - Tật:**
- Đồng tiền kiếm ra **CHẬM, ÍT**
- Nhưng **HẠN CHẾ** dính tai họa, bệnh tật

⚡ **Đặc điểm:** Người này thu nhập thường ở mức **ĐỦ ĂN ĐỦ TIÊU**, ít khi
giàu sang hiển hách.`,
  },

  {
    id: 'triet-tai-tu-tuc',
    title: 'Triệt tại Tử Tức',
    sao: ['Triệt'],
    cung: ['Tử Tức'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Đức', 'Phúc Đức'],
    doUuTien: 78,
    tomTat: `**Triệt tại Tử Tức** — **SÁT CON ĐẦU LÒNG**, sinh con đầu khó nuôi.

⚠️ **Đặc trưng:**
- **SÁT CON, NHẤT LÀ CON ĐẦU LÒNG**
- Sinh con đầu lòng **KHÓ KHĂN, KHÓ NUÔI**
- Bản mệnh dễ gặp cảnh **CHẬM CON**
- **CON ĐẦU KHÓ NUÔI**
- Hoặc cha mẹ và con cái **THIẾU GẦN GŨI**

⚡ **Triệt thủ Tử:**
- Thường dễ **XẢY THAI**, **HAO HỤT CON CÁI**
- Con cái hay gặp **TRẮC TRỞ** sau này, ở **XA CHA MẸ**

⚡ **Hợp phúc tinh** (Tả Hữu, Xương Khúc, Thiên Đức, Phúc Đức):
- Dù Triệt làm **GIẢM SỐ LƯỢNG** con
- Nhưng con cái đều **HIẾU THUẬN, THÀNH ĐẠT**
- **BIẾT BÁO HIẾU** cha mẹ

⚠️ **Triệt + Kình Đà, Không Kiếp, Linh Hỏa, Hóa Kỵ:**
- Sinh nở càng **GIAN NAN**
- Con cái **ÍT ỎI**
- Dễ **XA CÁCH** hoặc không nhờ cậy được
- Có thể **CÁCH TRỞ ÂM DƯƠNG**, con sinh ra **YỂU MỆNH**`,
  },

  {
    id: 'triet-tai-phu-the',
    title: 'Triệt tại Phu Thê',
    sao: ['Triệt'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `**Triệt tại Phu Thê** — duyên tình **TRẮC TRỞ**, hôn nhân tới muộn.

⚠️ **Đặc trưng:**
- Duyên tình **TRẮC TRỞ**, hôn nhân tới **MUỘN**
- Sự **THẤT BẠI** của mối tình đầu
- Dễ lỡ dở tình đầu hoặc trải qua nhiều trắc trở
- Sau khi kết hôn vợ chồng có **KHOẢNG CÁCH**
- Hay sinh **KHẮC KHẨU**
- Ít khi **HÒA HỢP TRỌN VẸN**

⚠️ **Tình huống xấu nhất:**
- Báo hiệu **CÁCH TRỞ ÂM DƯƠNG**
- Vợ chồng dễ **CHIA LY** hay **GÓA BỤA**

⚡ **Lấy người KHÁC LÀNG, KHÁC TỈNH** mới tốt — nhưng nhân duyên phải gặp
khó khăn.

⚡ **Triệt + Thiên Mã:**
- Vợ chồng **BỎ NHAU RẤT DỄ DÀNG**
- Vợ chồng **ÔM CON BỎ VỀ NHÀ**

⚡ **Triệt cư Phu Thê:** dễ có lần **TƯỞNG SẮP CƯỚI RỒI LẠI THÔI**.

⚠️ **Triệt + Kình Đà, Linh Hỏa, Hóa Kỵ:**
- Hôn nhân càng **NHIỀU BIẾN ĐỘNG**
- **KẾT SỚM DỄ TAN**

⚡ **Đồng cung Tả Hữu, Xương Khúc, Thiên Hỷ, Hồng Loan:**
- Triệt **TIẾT CHẾ ĐIỂM KHẮC**
- Tình cảm sau **THỬ THÁCH** càng thêm **BỀN CHẶT**`,
  },

  {
    id: 'triet-tai-huynh-de',
    title: 'Triệt tại Huynh Đệ',
    sao: ['Triệt'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Triệt tại Huynh Đệ** — anh chị em **XUNG KHẮC** hoặc **ÍT ANH CHỊ EM**.

⚡ **Đặc trưng:**
- Anh chị em **XUNG KHẮC** hoặc ít anh chị em
- Tình cảm anh em **THIẾU GẮN BÓ**
- Mỗi người **MỘT PHƯƠNG**
- Bản mệnh ít được **NHỜ CẬY**
- Tình cảm gia đình **LẠNH NHẠT**, thiếu hòa khí

⚡ **Đặc biệt - Triệt + Dương Thỉ:**
- Dễ có **ANH CẢ, CHỊ CẢ MẤT SỚM**

⚠️ **Gặp Kình Đà, Hỏa Linh, Hóa Kỵ:**
- Sự **CHIA CÁCH** càng rõ
- Quan hệ anh em **NHẠT DẦN**
- Thậm chí **HIỀM KHÍCH** kéo dài

⚡ **Mặt tích cực của Triệt:**
- Làm **GIẢM XUNG ĐỘT** gay gắt
- Hạn chế **TRANH CHẤP LỚN** trong gia tộc

⚡ **Hội nhiều cát tinh, phúc tinh:**
- Anh em tuy giữ **KHOẢNG CÁCH**, ít thân thiết
- Nhưng vẫn **TÔN TRỌNG VÀ SẴN SÀNG GIÚP** khi cần`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // TRIỆT KẾT HỢP CÁC CHÍNH TINH
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'triet-de-tinh-mat-uy-quyen',
    title: 'Triệt + Tử Vi/Thiên Phủ/Liêm Trinh/Vũ Khúc - Bị mất việc giáng chức',
    sao: ['Triệt'],
    ketHop: ['Tử Vi', 'Thiên Phủ'],
    doUuTien: 60,
    tomTat: `⚠️ **Triệt + Tử Vi / Thiên Phủ / Liêm Trinh / Vũ Khúc** — **BỊ MẤT VIỆC,
GIÁNG CHỨC**.

⚠️ **Đặc trưng:**
- Công danh dễ **MẤT**
- Chức quyền **KHÓ BỀN**
- Người giỏi giang nhưng dễ bị **GẠT RA BÊN LỀ**
- **KHÓ GIỮ CHỨC QUYỀN**
- Năng lực **KHÔNG ĐƯỢC TRỌNG DỤNG**
- Dễ **DANG DỞ** trong công việc
- Hoặc rơi vào cảnh **CÔ ĐỘC**, không có đất dụng võ`,
  },

  {
    id: 'triet-am-duong-suy-yeu-cong-danh',
    title: 'Triệt + Thái Dương/Thái Âm - Suy yếu công danh hao tổn phúc lộc',
    sao: ['Triệt'],
    ketHop: ['Thái Dương', 'Thái Âm'],
    doUuTien: 60,
    tomTat: `⚠️ **Triệt + Thái Dương / Thái Âm (đắc địa)** — **SUY YẾU CÔNG DANH, HAO TỔN
PHÚC LỘC**.

⚠️ **Triệt + Thái Dương đắc:**
- Sự nghiệp **ĐI XUỐNG**
- Trí tuệ **KÉM SÁNG**
- Nam giới dễ **SUY THỌ**

⚠️ **Triệt + Thái Âm đắc:**
- **MẤT PHÚ QUÝ**
- Nữ giới **SINH NỞ KHÓ KHĂN**
- Sức khỏe **KÉM**

⚡ **Riêng Âm Dương HÃM ĐỊA:**
- Lại nhờ Tuần Triệt mà **HÓA GIẢI** phần nào
- Tuần Triệt **TĂNG SÁNG** cho Nhật Nguyệt hãm`,
  },

  {
    id: 'triet-sat-pha-tuong-mat-uy-quyen',
    title: 'Triệt + Thất Sát/Phá Quân/Tướng Quân - Mất uy quyền nhiều va chạm',
    sao: ['Triệt'],
    ketHop: ['Thất Sát', 'Phá Quân', 'Tướng Quân'],
    doUuTien: 55,
    tomTat: `⚠️ **Triệt + Thất Sát / Phá Quân / Tướng Quân** — **MẤT UY QUYỀN**, nhiều va
chạm.

⚠️ **Triệt + Thất Sát:**
- Như **LƯỠI GƯƠM BỊ ĐÁNH GÃY**
- **MẤT ĐI UY LỰC**

⚡ **Triệt + Phá Quân:**
- **GIẢM TÍNH PHÁ PHÁCH**
- Hội cùng Triệt sẽ **THẬN TRỌNG HƠN**
- Nhưng vẫn **LẮM THĂNG TRẦM**

⚠️ **Triệt + Tướng Quân:**
- Bị biến đổi thành **TÍNH NÓNG NẢY**
- Dễ gây **XUNG ĐỘT**
- Vướng **HỌA BẤT NGỜ**, nhất là nơi công cộng`,
  },

  {
    id: 'triet-cu-co-tham-bot-thi-phi',
    title: 'Triệt + Cự Môn/Thiên Cơ/Tham Lang - Bớt thị phi',
    sao: ['Triệt'],
    ketHop: ['Cự Môn', 'Thiên Cơ', 'Tham Lang'],
    doUuTien: 55,
    tomTat: `**Triệt + Cự Môn / Thiên Cơ / Tham Lang** — **BỚT THỊ PHI**, chuyển hóa thành
trí tuệ.

⚡ **Triệt + Cự Môn:**
- **BỚT TÍNH KHẨU NGHIỆP**
- Dễ **THÀNH CÔNG TRONG NGHIÊN CỨU**

⚡ **Triệt + Thiên Cơ:**
- Thiên Cơ chủ **HOẠT BÁT, HAY LỠ MIỆNG**
- Gặp Triệt → **THẬN TRỌNG, SÂU SẮC**

⚡ **Triệt + Tham Lang:**
- **GIẢM ĐÀO HOA, HƯỞNG LẠC**
- Tập trung **TRÍ TUỆ, KHÉO LÉO**
- Dễ đạt thành tựu nhờ biết **KIỀM CHẾ BẢN THÂN**

⚠️ **Lưu ý:** Tham + Triệt có thể **GIẢM THỌ** (xem bộ Tham giảm thọ).`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁCH HÓA GIẢI CHUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'tuan-triet-hoa-giai',
    title: 'Hóa giải Tuần Triệt - Tích phúc, kiên nhẫn, nắm thời cơ',
    sao: ['Tuần', 'Triệt'],
    doUuTien: 40,
    tomTat: `**Hóa giải Tuần Triệt** — không phải xóa bỏ, mà là **CHUYỂN HÓA**.

⚡ **Tinh thần chung:**
- Biến **CẢN TRỞ** thành **RÈN LUYỆN**
- Biến **CHẬM TRỄ** thành **TÍCH LŨY**
- Đạt **THÀNH TỰU BỀN VỮNG** hơn

⚡ **Tích phúc, giải nghiệp:**
- Tuần Triệt chủ **HAO HỤT** → muốn bù đắp phải **TÍCH CỰC GIEO PHÚC**
- **HÀNH THIỆN TÍCH ĐỨC**
- **HIẾU KÍNH CHA MẸ**, hòa thuận họ hàng
- Tu dưỡng tâm linh: **NIỆM PHẬT, THIỀN, ĐỌC SÁCH ĐẠO LÝ**
- Khi gặp hạn nặng → **LỄ CẦU AN, ĐI CHÙA CHIỀN**

⚡ **Lối sống, cách hành xử:**
- **KIÊN NHẪN**, biết "**CHẬM MÀ CHẮC**", tránh nóng vội
- **CẨN TRỌNG NGÔN TỪ** để tránh thị phi (Cự Môn, Tham Lang)
- **GIỮ GÌN SỨC KHỎE** nếu Triệt đóng Tật, Tài, Phúc
- Phu Thê / Huynh Đệ / Phụ Mẫu → **NHƯỜNG NHỊN, GIỮ HÒA KHÍ**

⚡ **Thời điểm nắm bắt cơ hội:**
- Tuần Triệt **KHÔNG CHẶN ĐỨNG MÃI MÃI** mà chỉ ngăn trở **MỘT GIAI ĐOẠN**
- Khi vận tốt và cát tinh chiếu → **MẠNH DẠN NẮM BẮT**
- Như **CÁNH CỬA ĐÓNG NHƯNG KHÔNG KHÓA**
- Chỉ cần **BIẾT CHỜ ĐỢI, GÕ ĐÚNG THỜI ĐIỂM** thì cửa sẽ mở`,
  },
];
