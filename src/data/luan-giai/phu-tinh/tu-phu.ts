import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO TỬ PHÙ - Hỏa, Hung Tinh nhẹ, vòng Thái Tuế (vị trí 6).
 * Tam hợp Đào - Không - Sát (Đào Hoa + Thiên Không + Kiếp Sát) - cùng tam hợp với Thiếu Dương.
 * LUÔN đồng cung với NGUYỆT ĐỨC (quy luật an sao) - Nguyệt Đức khuyên nhủ, hóa giải.
 * Theo Thái Thứ Lang: chủ tang thương, ý nghĩa sự chết, báo hiệu tang thương.
 */
export const luanGiai_TuPhu: DoanLuanGiai[] = [
  {
    id: 'tu-phu-tinh-chat-chung',
    title: 'Tử Phù - Đặc tính chung',
    sao: ['Tử Phù'],
    doUuTien: 32,
    tomTat: `**Tử Phù** — phụ tinh **HUNG TINH (loại NHẸ)** trong **vòng Thái Tuế**, vị trí
thứ **6**.

**Ngũ hành:** **Hỏa**.

⚡ **Vị thế trong vòng Thái Tuế:**
- Đứng **NGAY SAU Quan Phù** (vị trí 5) — Quan Phù chỉ sự **đấu tranh, tranh
  cãi để xây dựng**, sau đó là Tử Phù chủ sự **buồn thảm, nguy khốn, gặp tai vạ**
- Tam hợp **ĐÀO - KHÔNG - SÁT** (Đào Hoa + Thiên Không + Kiếp Sát) — chỉ tuýp
  người **THÔNG MINH, TÀI NĂNG, NHANH NHẸN** nhưng **lắm tài thì nhiều tật**

⚡ **LUÔN đồng cung NGUYỆT ĐỨC** (theo quy luật an sao):
- Nguyệt Đức là sao **PHÚC** đi cùng để **KHUYÊN NHỦ, HÓA GIẢI**
- Đưa người ta tới **TU TẬP, ĐẠO HẠNH** thoát khỏi ưu phiền

**Đặc tính:** **TẬT BỆNH, BUỒN THẢM, NGUY KHỐN, GÂY RẮC RỐI NGĂN TRỞ công việc**.

⚠️ **Theo Thái Thứ Lang:** sao Tử Phù còn có ý nghĩa **SỰ CHẾT, BÁO HIỆU TANG
THƯƠNG** — cần thận trọng trong các vận hạn xấu.`,
  },

  {
    id: 'tu-phu-tam-hop-dao-khong-sat',
    title: 'Tử Phù trong tam hợp Đào Không Sát',
    sao: ['Tử Phù'],
    ketHop: ['Đào Hoa', 'Thiên Không', 'Kiếp Sát'],
    doUuTien: 60,
    tomTat: `⚡ **Tam hợp ĐÀO - KHÔNG - SÁT** (Đào Hoa + Thiên Không + Kiếp Sát) — Tử Phù
nằm trong tam hợp này (cùng tam hợp với **Thiếu Dương**).

🌟 **Ưu điểm:**
- **THÔNG MINH, TÀI NĂNG**
- **KHÔN LANH, NHANH NHẸN**
- Có **NHIỆT HUYẾT**, năng động

⚠️ **Nhược điểm (lắm tài nhiều tật):**
- Hay **VẤP NGÃ**, rơi vào tình huống **ÉO LE**
- Gặp **NHIỀU TAI VẠ**, **TẬT BỆNH**
- **Buồn thảm, nguy khốn**

⚡ **Cứu giải tự nhiên:**
Vì luôn có **NGUYỆT ĐỨC** đồng cung → khuyên nhủ, hóa giải → đưa đương số tới
**TU TẬP, ĐẠO HẠNH** thoát khỏi ưu phiền.

→ Đây là tam hợp đối lập với Âm Long Trực (ôn hòa nhường nhịn) — mạnh mẽ nhưng
trắc trở.`,
  },

  {
    id: 'tu-phu-tai-menh',
    title: 'Tử Phù tại Mệnh - thiệt thòi nội tâm',
    sao: ['Tử Phù'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `⚠️ **Tử Phù thủ Mệnh:**

🌟 **Tính cách:**
- **HIỀN LÀNH**, coi trọng **DĨ HÒA VI QUÝ**
- Hay phải **CHỊU THIỆT THÒI, RẮC RỐI**
- Nhưng đón nhận một cách **BÌNH THẢN**, không oán trách
- Bản tính thiên về **NỘI TÂM**, hay **SUY NGHĨ**, dễ **U SẦU**
- Có khả năng **GIỮ THÁI ĐỘ TÍCH CỰC**, biến khó khăn thành **động lực**

⚡ **Đặc trưng đối nghịch:**
- Luôn nằm trong tam hợp Đào Không Sát → **THÔNG MINH, NĂNG ĐỘNG, NHIỆT HUYẾT**
- Nhưng cũng **HAY VẤP NGÃ**, rơi vào tình huống **ÉO LE**

🌟 **Sức mạnh hóa giải:**
Tử Phù đi cùng **NGUYỆT ĐỨC** (luôn đồng cung) giúp đương số "**GẶP DỮ HÓA
LÀNH**", **NHIỀU PHEN THOÁT khỏi HIỂM CẢNH**.`,
  },

  {
    id: 'tu-phu-dao-hoa',
    title: 'Tử Phù + Đào Hoa - lắm mối tối nằm không',
    sao: ['Tử Phù'],
    ketHop: ['Đào Hoa'],
    doUuTien: 65,
    tomTat: `⚠️ **Tử Phù + Đào Hoa đồng cung:** **"LẮM MỐI TỐI NẰM KHÔNG"**.

⚠️ **Đặc trưng:**
- Người **ĐA TÌNH**, lắm **mối tình dở dang**
- **TÌNH DUYÊN khó trọn vẹn**
- **NHIỀU CUỘC TÌNH dở dang**

→ Khi đặt trong tam hợp Đào Không Sát: tài hoa, đào hoa nhưng **THIẾU DUYÊN ỔN
ĐỊNH** — yêu nhiều, cuối cùng vẫn **CÔ ĐƠN**.`,
  },

  {
    id: 'tu-phu-thien-luong-can-tu',
    title: 'Tử Phù + Thiên Lương - căn duyên tâm linh',
    sao: ['Tử Phù'],
    ketHop: ['Thiên Lương'],
    doUuTien: 70,
    tomTat: `🌟 **Tử Phù + Thiên Lương** (đồng cung hoặc hội chiếu) **+ phúc tinh:**

🌟 **Đặc trưng:**
- Người **LƯƠNG THIỆN**
- Có nhiều **CĂN DUYÊN VỚI TÂM LINH**
- Thích **NGHIÊN CỨU PHẬT PHÁP**
- Dễ **TÌM THẤY SỰ AN YÊN** trong **TÔN GIÁO, TRIẾT HỌC, PHẬT PHÁP**

→ Đây là cách **HÓA GIẢI ĐẸP NHẤT** của Tử Phù — biến **buồn thảm thành tâm
linh**, **rắc rối thành tu tập**.

🌟 Kết hợp Nguyệt Đức (luôn đồng cung) + Thiên Lương → **vận trình BÌNH AN**,
ít sóng gió.`,
  },

  {
    id: 'tu-phu-tai-phu-mau',
    title: 'Tử Phù tại Phụ Mẫu',
    sao: ['Tử Phù'],
    cung: ['Phụ Mẫu'],
    doUuTien: 72,
    tomTat: `🌟 **Tử Phù tại Phụ Mẫu:**
- Cha mẹ **HIỀN LÀNH, TỪ THIỆN**
- Thích **TU TẬP**
- Nhân hậu, có xu hướng **HÀNH THIỆN**

⚠️ **Mặt khó:**
- **TUỔI TRẺ** hay gặp các hoàn cảnh **RẮC RỐI**, **CHỊU THIỆT THÒI**
- Công việc không thuận lợi
- Nhờ **đức tính NHẪN NHỊN** mà dần **ỔN ĐỊNH**, để lại **PHÚC PHẦN cho con cháu**`,
  },

  {
    id: 'tu-phu-tai-phu-mau-nguyet-duc-dao-hoa',
    title: 'Tử Phù + Nguyệt Đức + Đào Hoa tại Phụ Mẫu - cưới sớm',
    sao: ['Tử Phù'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Nguyệt Đức', 'Đào Hoa'],
    doUuTien: 67,
    tomTat: `🌟 **Tử Phù + Nguyệt Đức + Đào Hoa tại Phụ Mẫu:**
- Cha mẹ **CƯỚI NHAU SỚM**
- Thời trẻ có **NHIỀU MỐI TÌNH DỞ DANG**
- Về sau vẫn **BỀN VỮNG**`,
  },

  {
    id: 'tu-phu-tai-phu-mau-thien-luong',
    title: 'Tử Phù + Thiên Lương tại Phụ Mẫu - cha mẹ học thức',
    sao: ['Tử Phù'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Thiên Lương'],
    doUuTien: 67,
    tomTat: `🌟 **Tử Phù + Thiên Lương tại Phụ Mẫu:**
- Cha mẹ **CÓ HỌC THỨC**
- Gia đạo về sau càng **AN NHÀN**`,
  },

  {
    id: 'tu-phu-tai-phu-mau-thien-khoi',
    title: 'Tử Phù + Thiên Khôi tại Phụ Mẫu - cha mẹ học thức',
    sao: ['Tử Phù'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Thiên Khôi'],
    doUuTien: 67,
    tomTat: `🌟 **Tử Phù + Thiên Khôi tại Phụ Mẫu:**
- Cha mẹ **CÓ HỌC THỨC**
- Gia đạo về sau càng **AN NHÀN**`,
  },

  {
    id: 'tu-phu-tai-phu-mau-van-xuong',
    title: 'Tử Phù + Văn Xương tại Phụ Mẫu - cha mẹ học thức',
    sao: ['Tử Phù'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Văn Xương'],
    doUuTien: 67,
    tomTat: `🌟 **Tử Phù + Văn Xương tại Phụ Mẫu:**
- Cha mẹ **CÓ HỌC THỨC**
- Gia đạo về sau càng **AN NHÀN**`,
  },

  {
    id: 'tu-phu-tai-phu-mau-van-khuc',
    title: 'Tử Phù + Văn Khúc tại Phụ Mẫu - cha mẹ học thức',
    sao: ['Tử Phù'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Văn Khúc'],
    doUuTien: 67,
    tomTat: `🌟 **Tử Phù + Văn Khúc tại Phụ Mẫu:**
- Cha mẹ **CÓ HỌC THỨC**
- Gia đạo về sau càng **AN NHÀN**`,
  },

  {
    id: 'tu-phu-tai-phu-mau-kinh-duong',
    title: 'Tử Phù + Kình Dương tại Phụ Mẫu - bất hòa biến động',
    sao: ['Tử Phù'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Kình Dương'],
    doUuTien: 67,
    tomTat: `⚠️ **Tử Phù + Kình Dương tại Phụ Mẫu:**
- Cha mẹ hay **BẤT HÒA**
- Cuộc sống nhiều **biến động**, vướng **rắc rối, thị phi**`,
  },

  {
    id: 'tu-phu-tai-phu-mau-da-la',
    title: 'Tử Phù + Đà La tại Phụ Mẫu - bất hòa biến động',
    sao: ['Tử Phù'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Đà La'],
    doUuTien: 67,
    tomTat: `⚠️ **Tử Phù + Đà La tại Phụ Mẫu:**
- Cha mẹ hay **BẤT HÒA**
- Cuộc sống nhiều **biến động**, vướng **rắc rối, thị phi**`,
  },

  {
    id: 'tu-phu-tai-phu-mau-hoa-ky',
    title: 'Tử Phù + Hóa Kỵ tại Phụ Mẫu - bất hòa biến động',
    sao: ['Tử Phù'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 67,
    tomTat: `⚠️ **Tử Phù + Hóa Kỵ tại Phụ Mẫu:**
- Cha mẹ hay **BẤT HÒA**
- Cuộc sống nhiều **biến động**, vướng **rắc rối, thị phi**`,
  },

  {
    id: 'tu-phu-tai-phuc-duc',
    title: 'Tử Phù tại Phúc Đức',
    sao: ['Tử Phù'],
    cung: ['Phúc Đức'],
    doUuTien: 72,
    tomTat: `⚠️ **Tử Phù tại Phúc Đức:**
- Dòng họ **NHIỀU NGƯỜI VẤT VẢ** nhưng **HIỀN HẬU, CHẤT PHÁC**
- Nhiều người thích **TU TẬP**, quan tâm **CHUYỆN TÂM LINH**, lui tới **chùa
  chiền, miếu mạo**
- Đương số hay **MẮC RẮC RỐI, CHỊU THIỆT THÒI** trong quan hệ họ hàng dòng tộc

⚡ **Đặc điểm tâm linh:**
- **MỒ MẢ TỔ TIÊN** đặt **GẦN nơi có TƯỢNG PHẬT BÀ QUAN ÂM**
- Phúc phần liên quan tâm linh`,
  },

  {
    id: 'tu-phu-tai-phuc-duc-thien-luong',
    title: 'Tử Phù + Thiên Lương tại Phúc Đức - học cao phúc đức',
    sao: ['Tử Phù'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Lương'],
    doUuTien: 67,
    tomTat: `🌟 **Tử Phù + Thiên Lương tại Phúc Đức:**
- Gia tộc nhiều người **HỌC CAO**
- Chăm chỉ "**GIEO NHÂN LÀNH**" nên **PHÚC ĐỨC LÂU DÀI**`,
  },

  {
    id: 'tu-phu-tai-phuc-duc-nguyet-duc',
    title: 'Tử Phù + Nguyệt Đức tại Phúc Đức - học cao phúc đức',
    sao: ['Tử Phù'],
    cung: ['Phúc Đức'],
    ketHop: ['Nguyệt Đức'],
    doUuTien: 67,
    tomTat: `🌟 **Tử Phù + Nguyệt Đức tại Phúc Đức:**
- Gia tộc nhiều người **HỌC CAO**
- Chăm chỉ "**GIEO NHÂN LÀNH**" nên **PHÚC ĐỨC LÂU DÀI**`,
  },

  {
    id: 'tu-phu-tai-phuc-duc-van-xuong',
    title: 'Tử Phù + Văn Xương tại Phúc Đức - học cao phúc đức',
    sao: ['Tử Phù'],
    cung: ['Phúc Đức'],
    ketHop: ['Văn Xương'],
    doUuTien: 67,
    tomTat: `🌟 **Tử Phù + Văn Xương tại Phúc Đức:**
- Gia tộc nhiều người **HỌC CAO**
- Chăm chỉ "**GIEO NHÂN LÀNH**" nên **PHÚC ĐỨC LÂU DÀI**`,
  },

  {
    id: 'tu-phu-tai-phuc-duc-van-khuc',
    title: 'Tử Phù + Văn Khúc tại Phúc Đức - học cao phúc đức',
    sao: ['Tử Phù'],
    cung: ['Phúc Đức'],
    ketHop: ['Văn Khúc'],
    doUuTien: 67,
    tomTat: `🌟 **Tử Phù + Văn Khúc tại Phúc Đức:**
- Gia tộc nhiều người **HỌC CAO**
- Chăm chỉ "**GIEO NHÂN LÀNH**" nên **PHÚC ĐỨC LÂU DÀI**`,
  },

  {
    id: 'tu-phu-tai-phuc-duc-kinh-duong',
    title: 'Tử Phù + Kình Dương tại Phúc Đức - bất hòa tai ương',
    sao: ['Tử Phù'],
    cung: ['Phúc Đức'],
    ketHop: ['Kình Dương'],
    doUuTien: 67,
    tomTat: `⚠️ **Tử Phù + Kình Dương tại Phúc Đức:**
- Họ tộc dễ **BẤT HÒA**
- Vướng **TAI ƯƠNG** liên quan đến **ĐẤT CÁT, MỒ MẢ**`,
  },

  {
    id: 'tu-phu-tai-phuc-duc-hoa-ky',
    title: 'Tử Phù + Hóa Kỵ tại Phúc Đức - bất hòa tai ương',
    sao: ['Tử Phù'],
    cung: ['Phúc Đức'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 67,
    tomTat: `⚠️ **Tử Phù + Hóa Kỵ tại Phúc Đức:**
- Họ tộc dễ **BẤT HÒA**
- Vướng **TAI ƯƠNG** liên quan đến **ĐẤT CÁT, MỒ MẢ**`,
  },

  {
    id: 'tu-phu-tai-phuc-duc-dia-khong',
    title: 'Tử Phù + Địa Không tại Phúc Đức - bất hòa tai ương',
    sao: ['Tử Phù'],
    cung: ['Phúc Đức'],
    ketHop: ['Địa Không'],
    doUuTien: 67,
    tomTat: `⚠️ **Tử Phù + Địa Không tại Phúc Đức:**
- Họ tộc dễ **BẤT HÒA**
- Vướng **TAI ƯƠNG** liên quan đến **ĐẤT CÁT, MỒ MẢ**`,
  },

  {
    id: 'tu-phu-tai-phuc-duc-dia-kiep',
    title: 'Tử Phù + Địa Kiếp tại Phúc Đức - bất hòa tai ương',
    sao: ['Tử Phù'],
    cung: ['Phúc Đức'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 67,
    tomTat: `⚠️ **Tử Phù + Địa Kiếp tại Phúc Đức:**
- Họ tộc dễ **BẤT HÒA**
- Vướng **TAI ƯƠNG** liên quan đến **ĐẤT CÁT, MỒ MẢ**`,
  },

  {
    id: 'tu-phu-tai-dien-trach',
    title: 'Tử Phù tại Điền Trạch',
    sao: ['Tử Phù'],
    cung: ['Điền Trạch'],
    doUuTien: 72,
    tomTat: `⚠️ **Tử Phù tại Điền Trạch:**
- Hay có **RẮC RỐI, TAI HỌA** khi ở nhà
- **NHÀ CỬA hay có VẤN ĐỀ**
- **Khó AN YÊN**, hay phải **SỬA SANG**
- Hoặc **DÍNH TRANH CHẤP PHÁP LÝ**

💡 Nếu biết **TU TẬP, HÀNH THIỆN, LẬP BÀN THỜ PHẬT** thì **TAI ƯƠNG** phần
nhiều cũng được **HÓA GIẢI**.`,
  },

  {
    id: 'tu-phu-tai-dien-trach-tu-vi',
    title: 'Tử Phù + Tử Vi tại Điền Trạch - cát lành Phật pháp',
    sao: ['Tử Phù'],
    cung: ['Điền Trạch'],
    ketHop: ['Tử Vi'],
    doUuTien: 67,
    tomTat: `🌟 **Tử Phù + Tử Vi tại Điền Trạch** thành cách **CÁT LÀNH**:
- Nhà dễ **RƯỚC PHẬT BÀ QUAN ÂM về thờ**
- Nhà gắn với **PHẬT PHÁP**, không gian **LINH THIÊNG**
- Giúp **VƯỢNG KHÍ**, **AN ỔN LÂU DÀI**`,
  },

  {
    id: 'tu-phu-tai-dien-trach-thien-phu',
    title: 'Tử Phù + Thiên Phủ tại Điền Trạch - cát lành Phật pháp',
    sao: ['Tử Phù'],
    cung: ['Điền Trạch'],
    ketHop: ['Thiên Phủ'],
    doUuTien: 67,
    tomTat: `🌟 **Tử Phù + Thiên Phủ tại Điền Trạch** thành cách **CÁT LÀNH**:
- Nhà dễ **RƯỚC PHẬT BÀ QUAN ÂM về thờ**
- Nhà gắn với **PHẬT PHÁP**, không gian **LINH THIÊNG**
- Giúp **VƯỢNG KHÍ**, **AN ỔN LÂU DÀI**`,
  },

  {
    id: 'tu-phu-tai-dien-trach-thien-dong',
    title: 'Tử Phù + Thiên Đồng tại Điền Trạch - cát lành Phật pháp',
    sao: ['Tử Phù'],
    cung: ['Điền Trạch'],
    ketHop: ['Thiên Đồng'],
    doUuTien: 67,
    tomTat: `🌟 **Tử Phù + Thiên Đồng tại Điền Trạch** thành cách **CÁT LÀNH**:
- Nhà dễ **RƯỚC PHẬT BÀ QUAN ÂM về thờ**
- Nhà gắn với **PHẬT PHÁP**, không gian **LINH THIÊNG**
- Giúp **VƯỢNG KHÍ**, **AN ỔN LÂU DÀI**`,
  },

  {
    id: 'tu-phu-tai-dien-trach-thien-luong',
    title: 'Tử Phù + Thiên Lương tại Điền Trạch - cát lành Phật pháp',
    sao: ['Tử Phù'],
    cung: ['Điền Trạch'],
    ketHop: ['Thiên Lương'],
    doUuTien: 67,
    tomTat: `🌟 **Tử Phù + Thiên Lương tại Điền Trạch** thành cách **CÁT LÀNH**:
- Nhà dễ **RƯỚC PHẬT BÀ QUAN ÂM về thờ**
- Nhà gắn với **PHẬT PHÁP**, không gian **LINH THIÊNG**
- Giúp **VƯỢNG KHÍ**, **AN ỔN LÂU DÀI**`,
  },

  {
    id: 'tu-phu-tai-dien-trach-an-quang',
    title: 'Tử Phù + Ân Quang tại Điền Trạch - cát lành Phật pháp',
    sao: ['Tử Phù'],
    cung: ['Điền Trạch'],
    ketHop: ['Ân Quang'],
    doUuTien: 67,
    tomTat: `🌟 **Tử Phù + Ân Quang tại Điền Trạch** thành cách **CÁT LÀNH**:
- Nhà dễ **RƯỚC PHẬT BÀ QUAN ÂM về thờ**
- Nhà gắn với **PHẬT PHÁP**, không gian **LINH THIÊNG**
- Giúp **VƯỢNG KHÍ**, **AN ỔN LÂU DÀI**`,
  },

  {
    id: 'tu-phu-tai-dien-trach-thien-quy',
    title: 'Tử Phù + Thiên Quý tại Điền Trạch - cát lành Phật pháp',
    sao: ['Tử Phù'],
    cung: ['Điền Trạch'],
    ketHop: ['Thiên Quý'],
    doUuTien: 67,
    tomTat: `🌟 **Tử Phù + Thiên Quý tại Điền Trạch** thành cách **CÁT LÀNH**:
- Nhà dễ **RƯỚC PHẬT BÀ QUAN ÂM về thờ**
- Nhà gắn với **PHẬT PHÁP**, không gian **LINH THIÊNG**
- Giúp **VƯỢNG KHÍ**, **AN ỔN LÂU DÀI**`,
  },

  {
    id: 'tu-phu-tai-dien-trach-hoa-tinh',
    title: 'Tử Phù + Hỏa Tinh tại Điền Trạch - tranh chấp kiện tụng',
    sao: ['Tử Phù'],
    cung: ['Điền Trạch'],
    ketHop: ['Hỏa Tinh'],
    doUuTien: 67,
    tomTat: `⚠️ **Tử Phù + Hỏa Tinh tại Điền Trạch:**
- Nguy cơ cao **DÍNH TRANH CHẤP, KIỆN TỤNG**
- Phải **THAY ĐỔI CHỖ Ở** nhiều lần`,
  },

  {
    id: 'tu-phu-tai-dien-trach-linh-tinh',
    title: 'Tử Phù + Linh Tinh tại Điền Trạch - tranh chấp kiện tụng',
    sao: ['Tử Phù'],
    cung: ['Điền Trạch'],
    ketHop: ['Linh Tinh'],
    doUuTien: 67,
    tomTat: `⚠️ **Tử Phù + Linh Tinh tại Điền Trạch:**
- Nguy cơ cao **DÍNH TRANH CHẤP, KIỆN TỤNG**
- Phải **THAY ĐỔI CHỖ Ở** nhiều lần`,
  },

  {
    id: 'tu-phu-tai-dien-trach-hoa-ky',
    title: 'Tử Phù + Hóa Kỵ tại Điền Trạch - tranh chấp kiện tụng',
    sao: ['Tử Phù'],
    cung: ['Điền Trạch'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 67,
    tomTat: `⚠️ **Tử Phù + Hóa Kỵ tại Điền Trạch:**
- Nguy cơ cao **DÍNH TRANH CHẤP, KIỆN TỤNG**
- Phải **THAY ĐỔI CHỖ Ở** nhiều lần`,
  },

  {
    id: 'tu-phu-tai-quan-loc',
    title: 'Tử Phù tại Quan Lộc',
    sao: ['Tử Phù'],
    cung: ['Quan Lộc'],
    doUuTien: 75,
    tomTat: `⚠️ **Tử Phù tại Quan Lộc:**
- **CẢN TRỞ CÔNG VIỆC**
- Hay mắc **LỖI NHỎ, SƠ SUẤT**
- Bị **CẤP TRÊN ĐÁNH GIÁ THẤP**
- Sự nghiệp **LẬN ĐẬN** — phải "**TRẦY DA TRÓC VẢY**" qua nhiều thử thách

🌟 **Nghề phù hợp** (hợp với đặc tính rắc rối):
- **DỊCH VỤ, HỖ TRỢ, GIẢI CỨU** các tai nạn
- **SỬA CHỮA**
- **CỨU HỘ, Y TẾ**
- **XỬ LÝ SỰ CỐ**`,
  },

  {
    id: 'tu-phu-tai-quan-loc-thien-luong',
    title: 'Tử Phù + Thiên Lương tại Quan Lộc - quý nhân hỗ trợ',
    sao: ['Tử Phù'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Lương'],
    doUuTien: 70,
    tomTat: `🌟 **Tử Phù + Thiên Lương tại Quan Lộc:**
- Sự nghiệp có **QUÝ NHÂN HỖ TRỢ**
- Thuận lợi trong **GIÁO DỤC, TỪ THIỆN, CHỮA BỆNH**`,
  },

  {
    id: 'tu-phu-tai-quan-loc-tu-vi',
    title: 'Tử Phù + Tử Vi tại Quan Lộc - quý nhân hỗ trợ',
    sao: ['Tử Phù'],
    cung: ['Quan Lộc'],
    ketHop: ['Tử Vi'],
    doUuTien: 70,
    tomTat: `🌟 **Tử Phù + Tử Vi tại Quan Lộc:**
- Sự nghiệp có **QUÝ NHÂN HỖ TRỢ**
- Thuận lợi trong **GIÁO DỤC, TỪ THIỆN, CHỮA BỆNH**`,
  },

  {
    id: 'tu-phu-tai-quan-loc-thien-phu',
    title: 'Tử Phù + Thiên Phủ tại Quan Lộc - quý nhân hỗ trợ',
    sao: ['Tử Phù'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Phủ'],
    doUuTien: 70,
    tomTat: `🌟 **Tử Phù + Thiên Phủ tại Quan Lộc:**
- Sự nghiệp có **QUÝ NHÂN HỖ TRỢ**
- Thuận lợi trong **GIÁO DỤC, TỪ THIỆN, CHỮA BỆNH**`,
  },

  {
    id: 'tu-phu-tai-quan-loc-van-xuong',
    title: 'Tử Phù + Văn Xương tại Quan Lộc - quý nhân hỗ trợ',
    sao: ['Tử Phù'],
    cung: ['Quan Lộc'],
    ketHop: ['Văn Xương'],
    doUuTien: 70,
    tomTat: `🌟 **Tử Phù + Văn Xương tại Quan Lộc:**
- Sự nghiệp có **QUÝ NHÂN HỖ TRỢ**
- Thuận lợi trong **GIÁO DỤC, TỪ THIỆN, CHỮA BỆNH**`,
  },

  {
    id: 'tu-phu-tai-quan-loc-van-khuc',
    title: 'Tử Phù + Văn Khúc tại Quan Lộc - quý nhân hỗ trợ',
    sao: ['Tử Phù'],
    cung: ['Quan Lộc'],
    ketHop: ['Văn Khúc'],
    doUuTien: 70,
    tomTat: `🌟 **Tử Phù + Văn Khúc tại Quan Lộc:**
- Sự nghiệp có **QUÝ NHÂN HỖ TRỢ**
- Thuận lợi trong **GIÁO DỤC, TỪ THIỆN, CHỮA BỆNH**`,
  },

  {
    id: 'tu-phu-tai-quan-loc-tu-sat',
    title: 'Tử Phù + Tứ Sát tại Quan Lộc - sóng gió thị phi',
    sao: ['Tử Phù'],
    cung: ['Quan Lộc'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 70,
    tomTat: `⚠️ **Tử Phù + Sát Tinh tại Quan Lộc** (Kình Dương / Đà La / Hỏa
Tinh / Linh Tinh):
- Kéo theo nhiều **SÓNG GIÓ, THỊ PHI**
- **TIỂU NHÂN cản trở**
- Phải **ĐỔI VIỆC nhiều lần** mới ổn định`,
  },

  {
    id: 'tu-phu-tai-no-boc',
    title: 'Tử Phù tại Nô Bộc',
    sao: ['Tử Phù'],
    cung: ['Nô Bộc'],
    doUuTien: 70,
    tomTat: `⚠️ **Tử Phù tại Nô Bộc:**
- Hay gặp **RẮC RỐI, CHỊU THIỆT** với bạn bè, cấp dưới
- Nhiều khi quá **CẢ TIN, TỐT BỤNG** mà rơi vào cảnh "**LÀM ƠN MẮC OÁN**"
- Bị bạn bè, đồng nghiệp **LỢI DỤNG, PHẢN BỘI**`,
  },

  {
    id: 'tu-phu-tai-no-boc-dao-hoa',
    title: 'Tử Phù + Đào Hoa tại Nô Bộc - thị phi tình ái',
    sao: ['Tử Phù'],
    cung: ['Nô Bộc'],
    ketHop: ['Đào Hoa'],
    doUuTien: 65,
    tomTat: `⚠️ **Tử Phù + Đào Hoa tại Nô Bộc:**
- **THỊ PHI** càng nhiều
- Vướng vào chuyện **TRAI GÁI PHỨC TẠP** dù đã yên bề gia thất
- **TIẾNG XẤU khó gột**
- Người nhiều mối tình dở dang, kết hôn rồi càng nhiều người thích, gây ra
  **tai họa**`,
  },

  {
    id: 'tu-phu-tai-no-boc-luc-cat',
    title: 'Tử Phù + Lục Cát tại Nô Bộc - quý nhân nâng đỡ',
    sao: ['Tử Phù'],
    cung: ['Nô Bộc'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 65,
    tomTat: `🌟 **Tử Phù + Thiên Khôi / Thiên Việt / Tả Phù / Hữu Bật / Văn Xương
/ Văn Khúc tại Nô Bộc:**
- Có **QUÝ NHÂN nâng đỡ**
- Bạn bè tốt giúp **bù đắp thiệt thòi**`,
  },

  {
    id: 'tu-phu-tai-no-boc-kinh-duong',
    title: 'Tử Phù + Kình Dương tại Nô Bộc - bạn phản trắc',
    sao: ['Tử Phù'],
    cung: ['Nô Bộc'],
    ketHop: ['Kình Dương'],
    doUuTien: 65,
    tomTat: `⚠️ **Tử Phù + Kình Dương tại Nô Bộc:**
- Bạn bè dễ **PHẢN TRẮC**
- Gặp kẻ **TIỂU NHÂN PHÁ HOẠI**
- Vừa **HAO TÀI** vừa sinh **KIỆN TỤNG**`,
  },

  {
    id: 'tu-phu-tai-no-boc-hoa-ky',
    title: 'Tử Phù + Hóa Kỵ tại Nô Bộc - bạn phản trắc',
    sao: ['Tử Phù'],
    cung: ['Nô Bộc'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 65,
    tomTat: `⚠️ **Tử Phù + Hóa Kỵ tại Nô Bộc:**
- Bạn bè dễ **PHẢN TRẮC**
- Gặp kẻ **TIỂU NHÂN PHÁ HOẠI**
- Vừa **HAO TÀI** vừa sinh **KIỆN TỤNG**`,
  },

  {
    id: 'tu-phu-tai-no-boc-dia-khong',
    title: 'Tử Phù + Địa Không tại Nô Bộc - bạn phản trắc',
    sao: ['Tử Phù'],
    cung: ['Nô Bộc'],
    ketHop: ['Địa Không'],
    doUuTien: 65,
    tomTat: `⚠️ **Tử Phù + Địa Không tại Nô Bộc:**
- Bạn bè dễ **PHẢN TRẮC**
- Gặp kẻ **TIỂU NHÂN PHÁ HOẠI**
- Vừa **HAO TÀI** vừa sinh **KIỆN TỤNG**`,
  },

  {
    id: 'tu-phu-tai-no-boc-dia-kiep',
    title: 'Tử Phù + Địa Kiếp tại Nô Bộc - bạn phản trắc',
    sao: ['Tử Phù'],
    cung: ['Nô Bộc'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 65,
    tomTat: `⚠️ **Tử Phù + Địa Kiếp tại Nô Bộc:**
- Bạn bè dễ **PHẢN TRẮC**
- Gặp kẻ **TIỂU NHÂN PHÁ HOẠI**
- Vừa **HAO TÀI** vừa sinh **KIỆN TỤNG**`,
  },

  {
    id: 'tu-phu-tai-thien-di',
    title: 'Tử Phù tại Thiên Di',
    sao: ['Tử Phù'],
    cung: ['Thiên Di'],
    doUuTien: 70,
    tomTat: `🌟 **Tử Phù tại Thiên Di:**
- Bản tính **HIỀN LÀNH**, ưa **NHẪN NHỊN** để giữ hòa khí
- Ra ngoài thường **NHÚN NHƯỜNG, CHỊU THIỆT THÒI**
- **Không hay tranh đấu**, dễ **BỊ LỢI DỤNG**
- Nhờ sự **ĐIỀM ĐẠM** nên tránh được **VA CHẠM LỚN**, **ÍT GÂY THÙ CHUỐC OÁN**`,
  },

  {
    id: 'tu-phu-tai-thien-di-dao-hoa',
    title: 'Tử Phù + Đào Hoa tại Thiên Di - quý mến khác giới',
    sao: ['Tử Phù'],
    cung: ['Thiên Di'],
    ketHop: ['Đào Hoa'],
    doUuTien: 65,
    tomTat: `🌟 **Tử Phù + Đào Hoa tại Thiên Di:**
- Dễ **GẶP QUÝ NHÂN**
- Được **NHIỀU NGƯỜI QUÝ MẾN**, đặc biệt là **bạn KHÁC GIỚI**
- Cách **NHÚN NHƯỜNG, ĐIỀM ĐẠM** thu hút`,
  },

  {
    id: 'tu-phu-tai-thien-di-hong-loan',
    title: 'Tử Phù + Hồng Loan tại Thiên Di - quý mến khác giới',
    sao: ['Tử Phù'],
    cung: ['Thiên Di'],
    ketHop: ['Hồng Loan'],
    doUuTien: 65,
    tomTat: `🌟 **Tử Phù + Hồng Loan tại Thiên Di:**
- Dễ **GẶP QUÝ NHÂN**
- Được **NHIỀU NGƯỜI QUÝ MẾN**, đặc biệt là **bạn KHÁC GIỚI**
- Cách **NHÚN NHƯỜNG, ĐIỀM ĐẠM** thu hút`,
  },

  {
    id: 'tu-phu-tai-thien-di-hoa-ky',
    title: 'Tử Phù + Hóa Kỵ tại Thiên Di - xuất hành bất lợi',
    sao: ['Tử Phù'],
    cung: ['Thiên Di'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 65,
    tomTat: `⚠️ **Tử Phù + Hóa Kỵ tại Thiên Di:**
- Việc **XUẤT HÀNH** thường **BẤT LỢI**
- Dễ **HAO TÀI**
- Vướng **THỊ PHI** hay chuyện **TÌNH CẢM PHỨC TẠP**`,
  },

  {
    id: 'tu-phu-tai-thien-di-dia-khong',
    title: 'Tử Phù + Địa Không tại Thiên Di - xuất hành bất lợi',
    sao: ['Tử Phù'],
    cung: ['Thiên Di'],
    ketHop: ['Địa Không'],
    doUuTien: 65,
    tomTat: `⚠️ **Tử Phù + Địa Không tại Thiên Di:**
- Việc **XUẤT HÀNH** thường **BẤT LỢI**
- Dễ **HAO TÀI**
- Vướng **THỊ PHI** hay chuyện **TÌNH CẢM PHỨC TẠP**`,
  },

  {
    id: 'tu-phu-tai-thien-di-dia-kiep',
    title: 'Tử Phù + Địa Kiếp tại Thiên Di - xuất hành bất lợi',
    sao: ['Tử Phù'],
    cung: ['Thiên Di'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 65,
    tomTat: `⚠️ **Tử Phù + Địa Kiếp tại Thiên Di:**
- Việc **XUẤT HÀNH** thường **BẤT LỢI**
- Dễ **HAO TÀI**
- Vướng **THỊ PHI** hay chuyện **TÌNH CẢM PHỨC TẠP**`,
  },

  {
    id: 'tu-phu-tai-thien-di-hoa-tinh',
    title: 'Tử Phù + Hỏa Tinh tại Thiên Di - xuất hành bất lợi',
    sao: ['Tử Phù'],
    cung: ['Thiên Di'],
    ketHop: ['Hỏa Tinh'],
    doUuTien: 65,
    tomTat: `⚠️ **Tử Phù + Hỏa Tinh tại Thiên Di:**
- Việc **XUẤT HÀNH** thường **BẤT LỢI**
- Dễ **HAO TÀI**
- Vướng **THỊ PHI** hay chuyện **TÌNH CẢM PHỨC TẠP**`,
  },

  {
    id: 'tu-phu-tai-thien-di-linh-tinh',
    title: 'Tử Phù + Linh Tinh tại Thiên Di - xuất hành bất lợi',
    sao: ['Tử Phù'],
    cung: ['Thiên Di'],
    ketHop: ['Linh Tinh'],
    doUuTien: 65,
    tomTat: `⚠️ **Tử Phù + Linh Tinh tại Thiên Di:**
- Việc **XUẤT HÀNH** thường **BẤT LỢI**
- Dễ **HAO TÀI**
- Vướng **THỊ PHI** hay chuyện **TÌNH CẢM PHỨC TẠP**`,
  },

  {
    id: 'tu-phu-tai-tat-ach',
    title: 'Tử Phù tại Tật Ách',
    sao: ['Tử Phù'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `⚠️ **Tử Phù tại Tật Ách:**
- Hay mắc các **TAI HỌA, TAI NẠN, BỆNH TẬT NHỎ**
- Cơ thể dễ mắc **BỆNH VẶT, KÉO DÀI DAI DẲNG** → tinh thần **MỆT MỎI**`,
  },

  {
    id: 'tu-phu-tai-tat-ach-thien-luong',
    title: 'Tử Phù + Thiên Lương tại Tật Ách - thầy giỏi thuốc hay',
    sao: ['Tử Phù'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Lương'],
    doUuTien: 70,
    tomTat: `🌟 **Tử Phù + Thiên Lương tại Tật Ách:**
- Dễ gặp được **THẦY GIỎI, THUỐC HAY**
- Nhiều lần "**TAI QUA NẠN KHỎI**"
- Có **DUYÊN với Y HỌC** hoặc **TÂM LINH**
- Biết hướng thiện để **HÓA GIẢI NGHIỆP BỆNH**`,
  },

  {
    id: 'tu-phu-tai-tat-ach-nguyet-duc',
    title: 'Tử Phù + Nguyệt Đức tại Tật Ách - thầy giỏi thuốc hay',
    sao: ['Tử Phù'],
    cung: ['Tật Ách'],
    ketHop: ['Nguyệt Đức'],
    doUuTien: 70,
    tomTat: `🌟 **Tử Phù + Nguyệt Đức tại Tật Ách:**
- Dễ gặp được **THẦY GIỎI, THUỐC HAY**
- Nhiều lần "**TAI QUA NẠN KHỎI**"
- Có **DUYÊN với Y HỌC** hoặc **TÂM LINH**
- Biết hướng thiện để **HÓA GIẢI NGHIỆP BỆNH**`,
  },

  {
    id: 'tu-phu-tai-tat-ach-thien-duc',
    title: 'Tử Phù + Thiên Đức tại Tật Ách - thầy giỏi thuốc hay',
    sao: ['Tử Phù'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Đức'],
    doUuTien: 70,
    tomTat: `🌟 **Tử Phù + Thiên Đức tại Tật Ách:**
- Dễ gặp được **THẦY GIỎI, THUỐC HAY**
- Nhiều lần "**TAI QUA NẠN KHỎI**"
- Có **DUYÊN với Y HỌC** hoặc **TÂM LINH**
- Biết hướng thiện để **HÓA GIẢI NGHIỆP BỆNH**`,
  },

  {
    id: 'tu-phu-tai-tat-ach-thien-quan',
    title: 'Tử Phù + Thiên Quan tại Tật Ách - thầy giỏi thuốc hay',
    sao: ['Tử Phù'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Quan'],
    doUuTien: 70,
    tomTat: `🌟 **Tử Phù + Thiên Quan tại Tật Ách:**
- Dễ gặp được **THẦY GIỎI, THUỐC HAY**
- Nhiều lần "**TAI QUA NẠN KHỎI**"
- Có **DUYÊN với Y HỌC** hoặc **TÂM LINH**
- Biết hướng thiện để **HÓA GIẢI NGHIỆP BỆNH**`,
  },

  {
    id: 'tu-phu-tai-tat-ach-thien-phuc',
    title: 'Tử Phù + Thiên Phúc tại Tật Ách - thầy giỏi thuốc hay',
    sao: ['Tử Phù'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Phúc'],
    doUuTien: 70,
    tomTat: `🌟 **Tử Phù + Thiên Phúc tại Tật Ách:**
- Dễ gặp được **THẦY GIỎI, THUỐC HAY**
- Nhiều lần "**TAI QUA NẠN KHỎI**"
- Có **DUYÊN với Y HỌC** hoặc **TÂM LINH**
- Biết hướng thiện để **HÓA GIẢI NGHIỆP BỆNH**`,
  },

  {
    id: 'tu-phu-tai-tai-bach',
    title: 'Tử Phù tại Tài Bạch',
    sao: ['Tử Phù'],
    cung: ['Tài Bạch'],
    doUuTien: 72,
    tomTat: `⚠️ **Tử Phù tại Tài Bạch:**
- Hay **CHỊU RẮC RỐI**, **TIÊU HAO NHỎ** về tiền bạc
- **CẨN TRỌNG**, ít dám **đầu tư lớn**
- Thiên về **TÍCH LŨY NHỎ** hoặc làm **THIỆN NGUYỆN**
- Tiền tài tuy **kiếm được** nhưng **KHÓ GIỮ**, dễ **HAO TỐN** vào việc bất ngờ

🌟 **Đặc tính tích phúc:**
- **CHỊU KHÓ QUYÊN GÓP LÀM PHÚC**
- **CÚNG GIƯỜNG CHƯ TĂNG**`,
  },

  {
    id: 'tu-phu-tai-tai-bach-thien-phuc',
    title: 'Tử Phù + Thiên Phúc tại Tài Bạch - tài chính ổn định',
    sao: ['Tử Phù'],
    cung: ['Tài Bạch'],
    ketHop: ['Thiên Phúc'],
    doUuTien: 67,
    tomTat: `🌟 **Tử Phù + Thiên Phúc tại Tài Bạch:**
- Tài chính **ỔN ĐỊNH** hơn
- Dòng tiền **CHẬM nhưng SẠCH và VỮNG**
- Chi vào **VIỆC NGHĨA** → **HƯỞNG PHÚC BÁO LÂU DÀI**`,
  },

  {
    id: 'tu-phu-tai-tai-bach-thien-quan',
    title: 'Tử Phù + Thiên Quan tại Tài Bạch - tài chính ổn định',
    sao: ['Tử Phù'],
    cung: ['Tài Bạch'],
    ketHop: ['Thiên Quan'],
    doUuTien: 67,
    tomTat: `🌟 **Tử Phù + Thiên Quan tại Tài Bạch:**
- Tài chính **ỔN ĐỊNH** hơn
- Dòng tiền **CHẬM nhưng SẠCH và VỮNG**
- Chi vào **VIỆC NGHĨA** → **HƯỞNG PHÚC BÁO LÂU DÀI**`,
  },

  {
    id: 'tu-phu-tai-tai-bach-thien-duc',
    title: 'Tử Phù + Thiên Đức tại Tài Bạch - tài chính ổn định',
    sao: ['Tử Phù'],
    cung: ['Tài Bạch'],
    ketHop: ['Thiên Đức'],
    doUuTien: 67,
    tomTat: `🌟 **Tử Phù + Thiên Đức tại Tài Bạch:**
- Tài chính **ỔN ĐỊNH** hơn
- Dòng tiền **CHẬM nhưng SẠCH và VỮNG**
- Chi vào **VIỆC NGHĨA** → **HƯỞNG PHÚC BÁO LÂU DÀI**`,
  },

  {
    id: 'tu-phu-tai-tai-bach-nguyet-duc',
    title: 'Tử Phù + Nguyệt Đức tại Tài Bạch - tài chính ổn định',
    sao: ['Tử Phù'],
    cung: ['Tài Bạch'],
    ketHop: ['Nguyệt Đức'],
    doUuTien: 67,
    tomTat: `🌟 **Tử Phù + Nguyệt Đức tại Tài Bạch:**
- Tài chính **ỔN ĐỊNH** hơn
- Dòng tiền **CHẬM nhưng SẠCH và VỮNG**
- Chi vào **VIỆC NGHĨA** → **HƯỞNG PHÚC BÁO LÂU DÀI**`,
  },

  {
    id: 'tu-phu-tai-tai-bach-van-xuong',
    title: 'Tử Phù + Văn Xương tại Tài Bạch - tài chính ổn định',
    sao: ['Tử Phù'],
    cung: ['Tài Bạch'],
    ketHop: ['Văn Xương'],
    doUuTien: 67,
    tomTat: `🌟 **Tử Phù + Văn Xương tại Tài Bạch:**
- Tài chính **ỔN ĐỊNH** hơn
- Dòng tiền **CHẬM nhưng SẠCH và VỮNG**
- Chi vào **VIỆC NGHĨA** → **HƯỞNG PHÚC BÁO LÂU DÀI**`,
  },

  {
    id: 'tu-phu-tai-tai-bach-van-khuc',
    title: 'Tử Phù + Văn Khúc tại Tài Bạch - tài chính ổn định',
    sao: ['Tử Phù'],
    cung: ['Tài Bạch'],
    ketHop: ['Văn Khúc'],
    doUuTien: 67,
    tomTat: `🌟 **Tử Phù + Văn Khúc tại Tài Bạch:**
- Tài chính **ỔN ĐỊNH** hơn
- Dòng tiền **CHẬM nhưng SẠCH và VỮNG**
- Chi vào **VIỆC NGHĨA** → **HƯỞNG PHÚC BÁO LÂU DÀI**`,
  },

  {
    id: 'tu-phu-tai-tai-bach-hoa-ky',
    title: 'Tử Phù + Hóa Kỵ tại Tài Bạch - hao tán mất tiền',
    sao: ['Tử Phù'],
    cung: ['Tài Bạch'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 67,
    tomTat: `⚠️ **Tử Phù + Hóa Kỵ tại Tài Bạch:**
- Cẩn trọng **HAO TÁN**
- **MẤT TIỀN do LỪA ĐẢO, TRANH CHẤP, TAI NẠN**`,
  },

  {
    id: 'tu-phu-tai-tai-bach-kinh-duong',
    title: 'Tử Phù + Kình Dương tại Tài Bạch - hao tán mất tiền',
    sao: ['Tử Phù'],
    cung: ['Tài Bạch'],
    ketHop: ['Kình Dương'],
    doUuTien: 67,
    tomTat: `⚠️ **Tử Phù + Kình Dương tại Tài Bạch:**
- Cẩn trọng **HAO TÁN**
- **MẤT TIỀN do LỪA ĐẢO, TRANH CHẤP, TAI NẠN**`,
  },

  {
    id: 'tu-phu-tai-tai-bach-da-la',
    title: 'Tử Phù + Đà La tại Tài Bạch - hao tán mất tiền',
    sao: ['Tử Phù'],
    cung: ['Tài Bạch'],
    ketHop: ['Đà La'],
    doUuTien: 67,
    tomTat: `⚠️ **Tử Phù + Đà La tại Tài Bạch:**
- Cẩn trọng **HAO TÁN**
- **MẤT TIỀN do LỪA ĐẢO, TRANH CHẤP, TAI NẠN**`,
  },

  {
    id: 'tu-phu-tai-tai-bach-dia-khong',
    title: 'Tử Phù + Địa Không tại Tài Bạch - hao tán mất tiền',
    sao: ['Tử Phù'],
    cung: ['Tài Bạch'],
    ketHop: ['Địa Không'],
    doUuTien: 67,
    tomTat: `⚠️ **Tử Phù + Địa Không tại Tài Bạch:**
- Cẩn trọng **HAO TÁN**
- **MẤT TIỀN do LỪA ĐẢO, TRANH CHẤP, TAI NẠN**`,
  },

  {
    id: 'tu-phu-tai-tai-bach-dia-kiep',
    title: 'Tử Phù + Địa Kiếp tại Tài Bạch - hao tán mất tiền',
    sao: ['Tử Phù'],
    cung: ['Tài Bạch'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 67,
    tomTat: `⚠️ **Tử Phù + Địa Kiếp tại Tài Bạch:**
- Cẩn trọng **HAO TÁN**
- **MẤT TIỀN do LỪA ĐẢO, TRANH CHẤP, TAI NẠN**`,
  },

  {
    id: 'tu-phu-tai-tai-bach-hoa-tinh',
    title: 'Tử Phù + Hỏa Tinh tại Tài Bạch - hao tán mất tiền',
    sao: ['Tử Phù'],
    cung: ['Tài Bạch'],
    ketHop: ['Hỏa Tinh'],
    doUuTien: 67,
    tomTat: `⚠️ **Tử Phù + Hỏa Tinh tại Tài Bạch:**
- Cẩn trọng **HAO TÁN**
- **MẤT TIỀN do LỪA ĐẢO, TRANH CHẤP, TAI NẠN**`,
  },

  {
    id: 'tu-phu-tai-tai-bach-linh-tinh',
    title: 'Tử Phù + Linh Tinh tại Tài Bạch - hao tán mất tiền',
    sao: ['Tử Phù'],
    cung: ['Tài Bạch'],
    ketHop: ['Linh Tinh'],
    doUuTien: 67,
    tomTat: `⚠️ **Tử Phù + Linh Tinh tại Tài Bạch:**
- Cẩn trọng **HAO TÁN**
- **MẤT TIỀN do LỪA ĐẢO, TRANH CHẤP, TAI NẠN**`,
  },

  {
    id: 'tu-phu-tai-tu-tuc',
    title: 'Tử Phù tại Tử Tức',
    sao: ['Tử Phù'],
    cung: ['Tử Tức'],
    doUuTien: 72,
    tomTat: `⚠️ **Tử Phù tại Tử Tức:**
- Con cái **THỈNH THOẢNG ỐM ĐAU**, mắc **TAI NẠN NHỎ**, gặp chuyện **RẮC RỐI**
  trong tuổi thơ
- **DỄ CÓ CON CẦU TỰ** (cầu khẩn mới có)
- **DỄ SINH CON GÁI**

🌟 **Mặt tích cực:**
- Con cái **HIỀN LÀNH, NGOAN NGOÃN**
- **Biết nghe lời**, ít gây phiền toái
- Sự **THIỆT THÒI NHỎ** của con được xem yếu tố **"GIẢM TRỪ" tai ương nặng** cho
  gia đạo`,
  },

  {
    id: 'tu-phu-tai-tu-tuc-thien-duc',
    title: 'Tử Phù + Thiên Đức tại Tử Tức - con sáng dạ',
    sao: ['Tử Phù'],
    cung: ['Tử Tức'],
    ketHop: ['Thiên Đức'],
    doUuTien: 67,
    tomTat: `🌟 **Tử Phù + Thiên Đức tại Tử Tức:**
- Con cái **SÁNG DẠ, HIẾU THUẬN**
- **CÔNG THÀNH DANH TOẠI**`,
  },

  {
    id: 'tu-phu-tai-tu-tuc-nguyet-duc',
    title: 'Tử Phù + Nguyệt Đức tại Tử Tức - con sáng dạ',
    sao: ['Tử Phù'],
    cung: ['Tử Tức'],
    ketHop: ['Nguyệt Đức'],
    doUuTien: 67,
    tomTat: `🌟 **Tử Phù + Nguyệt Đức tại Tử Tức:**
- Con cái **SÁNG DẠ, HIẾU THUẬN**
- **CÔNG THÀNH DANH TOẠI**`,
  },

  {
    id: 'tu-phu-tai-tu-tuc-thien-quan',
    title: 'Tử Phù + Thiên Quan tại Tử Tức - con sáng dạ',
    sao: ['Tử Phù'],
    cung: ['Tử Tức'],
    ketHop: ['Thiên Quan'],
    doUuTien: 67,
    tomTat: `🌟 **Tử Phù + Thiên Quan tại Tử Tức:**
- Con cái **SÁNG DẠ, HIẾU THUẬN**
- **CÔNG THÀNH DANH TOẠI**`,
  },

  {
    id: 'tu-phu-tai-tu-tuc-thien-phuc',
    title: 'Tử Phù + Thiên Phúc tại Tử Tức - con sáng dạ',
    sao: ['Tử Phù'],
    cung: ['Tử Tức'],
    ketHop: ['Thiên Phúc'],
    doUuTien: 67,
    tomTat: `🌟 **Tử Phù + Thiên Phúc tại Tử Tức:**
- Con cái **SÁNG DẠ, HIẾU THUẬN**
- **CÔNG THÀNH DANH TOẠI**`,
  },

  {
    id: 'tu-phu-tai-tu-tuc-ta-phu',
    title: 'Tử Phù + Tả Phù tại Tử Tức - con sáng dạ',
    sao: ['Tử Phù'],
    cung: ['Tử Tức'],
    ketHop: ['Tả Phù'],
    doUuTien: 67,
    tomTat: `🌟 **Tử Phù + Tả Phù tại Tử Tức:**
- Con cái **SÁNG DẠ, HIẾU THUẬN**
- **CÔNG THÀNH DANH TOẠI**`,
  },

  {
    id: 'tu-phu-tai-tu-tuc-huu-bat',
    title: 'Tử Phù + Hữu Bật tại Tử Tức - con sáng dạ',
    sao: ['Tử Phù'],
    cung: ['Tử Tức'],
    ketHop: ['Hữu Bật'],
    doUuTien: 67,
    tomTat: `🌟 **Tử Phù + Hữu Bật tại Tử Tức:**
- Con cái **SÁNG DẠ, HIẾU THUẬN**
- **CÔNG THÀNH DANH TOẠI**`,
  },

  {
    id: 'tu-phu-tai-tu-tuc-van-xuong',
    title: 'Tử Phù + Văn Xương tại Tử Tức - con sáng dạ',
    sao: ['Tử Phù'],
    cung: ['Tử Tức'],
    ketHop: ['Văn Xương'],
    doUuTien: 67,
    tomTat: `🌟 **Tử Phù + Văn Xương tại Tử Tức:**
- Con cái **SÁNG DẠ, HIẾU THUẬN**
- **CÔNG THÀNH DANH TOẠI**`,
  },

  {
    id: 'tu-phu-tai-tu-tuc-van-khuc',
    title: 'Tử Phù + Văn Khúc tại Tử Tức - con sáng dạ',
    sao: ['Tử Phù'],
    cung: ['Tử Tức'],
    ketHop: ['Văn Khúc'],
    doUuTien: 67,
    tomTat: `🌟 **Tử Phù + Văn Khúc tại Tử Tức:**
- Con cái **SÁNG DẠ, HIẾU THUẬN**
- **CÔNG THÀNH DANH TOẠI**`,
  },

  {
    id: 'tu-phu-tai-tu-tuc-kinh-duong',
    title: 'Tử Phù + Kình Dương tại Tử Tức - con bệnh lận đận',
    sao: ['Tử Phù'],
    cung: ['Tử Tức'],
    ketHop: ['Kình Dương'],
    doUuTien: 67,
    tomTat: `⚠️ **Tử Phù + Kình Dương tại Tử Tức:**
- Con dễ **MẮC BỆNH**, **HỌC HÀNH LẬN ĐẬN**
- **TÌNH DUYÊN TRẮC TRỞ**
- **LẬP GIA ĐÌNH MUỘN**`,
  },

  {
    id: 'tu-phu-tai-tu-tuc-da-la',
    title: 'Tử Phù + Đà La tại Tử Tức - con bệnh lận đận',
    sao: ['Tử Phù'],
    cung: ['Tử Tức'],
    ketHop: ['Đà La'],
    doUuTien: 67,
    tomTat: `⚠️ **Tử Phù + Đà La tại Tử Tức:**
- Con dễ **MẮC BỆNH**, **HỌC HÀNH LẬN ĐẬN**
- **TÌNH DUYÊN TRẮC TRỞ**
- **LẬP GIA ĐÌNH MUỘN**`,
  },

  {
    id: 'tu-phu-tai-tu-tuc-hoa-ky',
    title: 'Tử Phù + Hóa Kỵ tại Tử Tức - con bệnh lận đận',
    sao: ['Tử Phù'],
    cung: ['Tử Tức'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 67,
    tomTat: `⚠️ **Tử Phù + Hóa Kỵ tại Tử Tức:**
- Con dễ **MẮC BỆNH**, **HỌC HÀNH LẬN ĐẬN**
- **TÌNH DUYÊN TRẮC TRỞ**
- **LẬP GIA ĐÌNH MUỘN**`,
  },

  {
    id: 'tu-phu-tai-tu-tuc-dia-khong',
    title: 'Tử Phù + Địa Không tại Tử Tức - con bệnh lận đận',
    sao: ['Tử Phù'],
    cung: ['Tử Tức'],
    ketHop: ['Địa Không'],
    doUuTien: 67,
    tomTat: `⚠️ **Tử Phù + Địa Không tại Tử Tức:**
- Con dễ **MẮC BỆNH**, **HỌC HÀNH LẬN ĐẬN**
- **TÌNH DUYÊN TRẮC TRỞ**
- **LẬP GIA ĐÌNH MUỘN**`,
  },

  {
    id: 'tu-phu-tai-tu-tuc-dia-kiep',
    title: 'Tử Phù + Địa Kiếp tại Tử Tức - con bệnh lận đận',
    sao: ['Tử Phù'],
    cung: ['Tử Tức'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 67,
    tomTat: `⚠️ **Tử Phù + Địa Kiếp tại Tử Tức:**
- Con dễ **MẮC BỆNH**, **HỌC HÀNH LẬN ĐẬN**
- **TÌNH DUYÊN TRẮC TRỞ**
- **LẬP GIA ĐÌNH MUỘN**`,
  },

  {
    id: 'tu-phu-tai-tu-tuc-hoa-tinh',
    title: 'Tử Phù + Hỏa Tinh tại Tử Tức - con bệnh lận đận',
    sao: ['Tử Phù'],
    cung: ['Tử Tức'],
    ketHop: ['Hỏa Tinh'],
    doUuTien: 67,
    tomTat: `⚠️ **Tử Phù + Hỏa Tinh tại Tử Tức:**
- Con dễ **MẮC BỆNH**, **HỌC HÀNH LẬN ĐẬN**
- **TÌNH DUYÊN TRẮC TRỞ**
- **LẬP GIA ĐÌNH MUỘN**`,
  },

  {
    id: 'tu-phu-tai-tu-tuc-linh-tinh',
    title: 'Tử Phù + Linh Tinh tại Tử Tức - con bệnh lận đận',
    sao: ['Tử Phù'],
    cung: ['Tử Tức'],
    ketHop: ['Linh Tinh'],
    doUuTien: 67,
    tomTat: `⚠️ **Tử Phù + Linh Tinh tại Tử Tức:**
- Con dễ **MẮC BỆNH**, **HỌC HÀNH LẬN ĐẬN**
- **TÌNH DUYÊN TRẮC TRỞ**
- **LẬP GIA ĐÌNH MUỘN**`,
  },

  {
    id: 'tu-phu-tai-phu-the',
    title: 'Tử Phù tại Phu Thê',
    sao: ['Tử Phù'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `🌟 **Tử Phù tại Phu Thê:**

🌟 **Đặc trưng người hôn phối:**
- **HIỀN LÀNH, NHẸ NHÀNG**
- **KHÔNG CHẤP NHẶT**
- **LÒNG ĐỘ LƯỢNG cao**
- Ưa **LÀM PHÚC**, thích **TU TẬP**, tìm hiểu **TÂM LINH**
- **TRỌNG TÌNH NGHĨA**, tâm hướng thiện

🌟 **Hôn nhân:**
- Có **NỀN TẢNG VỮNG VÀNG**
- Vợ chồng biết **NHƯỜNG NHỊN, CẢM THÔNG**

⚠️ **Mặt khó:**
- Người hôn phối hay gặp **TAI NẠN, BỆNH TẬT NHỎ**
- Khiến gia đạo phải **BẬN LÒNG LO TOAN**

🌟 **+ Thiên Đức / Nguyệt Đức / Tả Hữu / Văn Xương:**
- Hôn nhân **BỀN VỮNG**, vợ chồng "**như đũa có đôi**"

⚠️ **+ Sát Tinh:**
- Dễ **BẤT ỔN**
- **Sự nhẫn nhịn** vẫn là chìa khóa giữ ấm cửa nhà`,
  },

  {
    id: 'tu-phu-tai-huynh-de',
    title: 'Tử Phù tại Huynh Đệ',
    sao: ['Tử Phù'],
    cung: ['Huynh Đệ'],
    doUuTien: 70,
    tomTat: `🌟 **Tử Phù tại Huynh Đệ:**
- Anh chị em phần đa là người **HIỀN LÀNH, NHÂN HẬU**
- **TRỌNG TÌNH HƠN LỢI**
- Hay **NHƯỜNG NHỊN MÌNH**
- Tính cách **ĐIỀM ĐẠM** → mối quan hệ **HÒA THUẬN**, "**chị ngã em nâng**"
- Trong nhà có người **THIÊN HƯỚNG TÂM LINH**, thích **TU TẬP** hoặc **NGHIÊN
  CỨU HUYỀN HỌC**

⚠️ **Mặt khó:**
- Anh em dễ gặp **TRẮC TRỞ**
- Mỗi người một nỗi niềm khiến tình cảm **XA CÁCH**

🌟 **+ Cát Tinh:** anh em **GẮN BÓ**, có người **HỌC HÀNH GIỎI GIANG**, làm
**RẠNG DANH dòng họ**.

⚠️ **+ Sát Tinh:** dễ sinh **RẮC RỐI** — đương số nhiều phen phải **GÁNH VÁC THAY
ANH EM**.`,
  },

  {
    id: 'tu-phu-han-kinh-da',
    title: 'Tử Phù vào hạn + Kình Dương / Đà La / Hóa Kỵ - tai nạn máu huyết',
    sao: ['Tử Phù'],
    ketHop: ['Kình Dương', 'Đà La', 'Hóa Kỵ'],
    doUuTien: 65,
    tomTat: `⚠️ **Tử Phù vào hạn + Kình Dương / Đà La / Hóa Kỵ:**

⚠️ **Nguy cơ:**
- **TAI NẠN, PHẪU THUẬT**
- Vấn đề **MÁU HUYẾT** tăng cao
- **Bệnh vặt dai dẳng**, thương tích nhỏ
- **TÂM LÝ LO LẮNG** nhiều hơn bệnh trạng thực tế

💡 **Lời khuyên hạn:**
- Giữ **AN TOÀN ĐI LẠI**
- **CHĂM SÓC THÂN THỂ KỸ LƯỠNG**
- Tránh **CHỦ QUAN** mà gặp họa bất ngờ

🌟 **+ Thiên Đức / Nguyệt Đức / Giải Thần:**
- Bệnh thường **SỚM ĐƯỢC CHỮA KHỎI**
- Dễ gặp được **THẦY THUỐC GIỎI**
- Bệnh tình **TỪ HUNG HÓA CÁT**`,
  },

  {
    id: 'tu-phu-han-sat-tinh-hao-tai',
    title: 'Tử Phù vào hạn + Sát Tinh - hao tài tốn của',
    sao: ['Tử Phù'],
    doUuTien: 65,
    tomTat: `⚠️ **Tử Phù vào hạn + Sát Tinh:** báo hiệu **HAO HỤT TÀI CHÍNH**.

⚠️ **Nguyên nhân:**
- Đương số dễ **HAO TÀI TỐN CỦA** một cách **bất ngờ**
- Có thể vì:
  - **SỬA CHỮA, KHẮC PHỤC SỰ CỐ**
  - **CHỮA BỆNH**
  - Mất mát do **BỊ LỪA GẠT**
- Đi với sát tinh, tiền dễ mất **vô ích**, gặp cảnh "**TIỀN MẤT TẬT MANG**"
- Bị **KẺ XẤU LỢI DỤNG** hoặc vướng **KIỆN TỤNG**

🌟 **+ Hóa Lộc / Văn Xương / Văn Khúc / Thiên Việt:**
- Hao tài thường mang ý nghĩa **TÍCH PHÚC**:
  - **Quyên góp**
  - Chi tiêu cho **HỌC HÀNH, TU DƯỠNG**
- Tuy **MẤT TIỀN** nhưng **SINH PHÚC về sau**`,
  },

  {
    id: 'tu-phu-loi-khuyen',
    title: 'Lời khuyên cho người Tử Phù',
    sao: ['Tử Phù'],
    doUuTien: 35,
    tomTat: `💡 **Tử Phù tuy gắn liền với SỰ THIỆT THÒI**, nhưng cũng là dấu hiệu nhắc nhở
về **LÒNG KIÊN NHẪN và SỰ NHÂN HẬU**.

🌟 **Sức mạnh tự nhiên:**
- **Nguyệt Đức luôn đồng cung** → khả năng **HÓA GIẢI** mạnh
- Thiệt thòi nhỏ thường **GIẢM TRỪ** tai họa lớn cho gia đạo

💡 **Bí quyết phát huy Tử Phù:**
- **CHỦ ĐỘNG TU DƯỠNG**, hành thiện
- **THẬN TRỌNG** trong ứng xử
- **HƯỚNG về TÂM LINH** — kết hợp với Thiên Lương sẽ tìm thấy bình an
- **KIÊN NHẪN** trước nghịch cảnh
- **GIỮ TÂM TÍCH CỰC** — biến khó khăn thành động lực
- **TRÁNH ĐAM MÊ Đào Hoa** — sẽ thoát khỏi bi kịch tình duyên

→ Khi biết **CHỦ ĐỘNG**, đương số không chỉ **GIẢM BỚT RỦI RO** mà còn biến
**NGHỊCH CẢNH thành NỀN TẢNG để TRƯỞNG THÀNH** — Tử Phù trở thành **bạn đồng
hành dẫn lối** đến đạo hạnh.`,
  },
];
