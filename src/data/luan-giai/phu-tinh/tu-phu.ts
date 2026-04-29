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
- Nhờ **đức tính NHẪN NHỊN** mà dần **ỔN ĐỊNH**, để lại **PHÚC PHẦN cho con cháu**

🌟 **+ Nguyệt Đức + Đào Hoa:**
- Cha mẹ **CƯỚI NHAU SỚM**
- Thời trẻ có **NHIỀU MỐI TÌNH DỞ DANG**
- Về sau vẫn **BỀN VỮNG**

🌟 **+ Thiên Lương / Thiên Khôi / Văn Xương / Văn Khúc:**
- Cha mẹ **CÓ HỌC THỨC**
- Gia đạo về sau càng **AN NHÀN**

⚠️ **+ Kình Dương / Đà La / Hóa Kỵ:**
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
- Phúc phần liên quan tâm linh

🌟 **+ Thiên Lương / Nguyệt Đức / Văn Xương / Văn Khúc:**
- Gia tộc nhiều người **HỌC CAO**
- Chăm chỉ "**GIEO NHÂN LÀNH**" nên **PHÚC ĐỨC LÂU DÀI**

⚠️ **+ Kình Dương / Hóa Kỵ / Không Kiếp:**
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

🌟 **+ Tử Vi / Thiên Phủ / Đồng Lương / Quang Quý:** thành cách **CÁT LÀNH**:
- Nhà dễ **RƯỚC PHẬT BÀ QUAN ÂM về thờ**
- Nhà gắn với **PHẬT PHÁP**, không gian **LINH THIÊNG**
- Giúp **VƯỢNG KHÍ**, **AN ỔN LÂU DÀI**

⚠️ **+ Hỏa Tinh / Linh Tinh / Hóa Kỵ:**
- Nguy cơ cao **DÍNH TRANH CHẤP, KIỆN TỤNG**
- Phải **THAY ĐỔI CHỖ Ở** nhiều lần

💡 Nếu biết **TU TẬP, HÀNH THIỆN, LẬP BÀN THỜ PHẬT** thì **TAI ƯƠNG** phần
nhiều cũng được **HÓA GIẢI**.`,
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
- **XỬ LÝ SỰ CỐ**

🌟 **+ Thiên Lương / Tử Vi / Thiên Phủ / Văn Xương / Văn Khúc:**
- Sự nghiệp có **QUÝ NHÂN HỖ TRỢ**
- Thuận lợi trong **GIÁO DỤC, TỪ THIỆN, CHỮA BỆNH**

⚠️ **+ Sát Tinh:**
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
- Bị bạn bè, đồng nghiệp **LỢI DỤNG, PHẢN BỘI**

⚠️ **+ Đào Hoa:**
- **THỊ PHI** càng nhiều
- Vướng vào chuyện **TRAI GÁI PHỨC TẠP** dù đã yên bề gia thất
- **TIẾNG XẤU khó gột**
- Người nhiều mối tình dở dang, kết hôn rồi càng nhiều người thích, gây ra **tai
  họa**

🌟 **+ Thiên Khôi / Thiên Việt / Tả Hữu / Văn Xương / Văn Khúc:**
- Có **QUÝ NHÂN nâng đỡ**
- Bạn bè tốt giúp **bù đắp thiệt thòi**

⚠️ **+ Kình Dương / Hóa Kỵ / Không Kiếp:**
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
- Nhờ sự **ĐIỀM ĐẠM** nên tránh được **VA CHẠM LỚN**, **ÍT GÂY THÙ CHUỐC OÁN**

🌟 **+ Đào Hoa / Hồng Loan:**
- Dễ **GẶP QUÝ NHÂN**
- Được **NHIỀU NGƯỜI QUÝ MẾN**, đặc biệt là **bạn KHÁC GIỚI**
- Cách **NHÚN NHƯỜNG, ĐIỀM ĐẠM** thu hút

⚠️ **+ Hóa Kỵ / Không Kiếp / Hỏa Linh:**
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
- Cơ thể dễ mắc **BỆNH VẶT, KÉO DÀI DAI DẲNG** → tinh thần **MỆT MỎI**

🌟 **+ Thiên Lương / Nguyệt Đức / Thiên Đức / Thiên Quan / Thiên Phúc:**
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
- **CÚNG GIƯỜNG CHƯ TĂNG**

🌟 **+ Thiên Phúc / Thiên Quan / Thiên Đức / Nguyệt Đức / Văn Xương / Văn Khúc:**
- Tài chính **ỔN ĐỊNH** hơn
- Dòng tiền **CHẬM nhưng SẠCH và VỮNG**
- Chi vào **VIỆC NGHĨA** → **HƯỞNG PHÚC BÁO LÂU DÀI**

⚠️ **+ Hóa Kỵ / Kình Dương / Đà La / Không Kiếp / Hỏa Linh:**
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
  gia đạo

🌟 **+ Thiên Đức / Nguyệt Đức / Thiên Quan / Thiên Phúc / Tả Hữu / Văn Xương /
Văn Khúc:**
- Con cái **SÁNG DẠ, HIẾU THUẬN**
- **CÔNG THÀNH DANH TOẠI**

⚠️ **+ Kình Dương / Đà La / Hóa Kỵ / Không Kiếp / Hỏa Linh:**
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
