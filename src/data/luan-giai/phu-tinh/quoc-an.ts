import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO QUỐC ẤN - Thổ, Quý Tinh.
 * An theo offset +8 thuận từ Lộc Tồn (vòng Lộc Tồn).
 * Trong tam hợp với Lộc Tồn.
 *
 * Một trong 4 sao của bộ BINH HÌNH TƯỚNG ẤN (Phục Binh + Thiên Hình +
 * Tướng Quân + Quốc Ấn) - phần CHUNG đã viết tại tuong-quan.ts.
 *
 * Hình tượng: CON DẤU ĐỎ, ẤN TÍN trời ban.
 */
export const luanGiai_QuocAn: DoanLuanGiai[] = [
  {
    id: 'quoc-an-tinh-chat-chung',
    title: 'Quốc Ấn - Đặc tính chung',
    sao: ['Quốc Ấn'],
    doUuTien: 32,
    tomTat: `**Quốc Ấn** — phụ tinh **QUÝ TINH**.

**Ngũ hành:** **Thổ**.

**Hóa khí:** **Quý Tinh**.

**Vị thế:**
- Luôn nằm trong **TAM HỢP với Lộc Tồn**
- An offset **+8 thuận từ Lộc Tồn** (engine hardcode)
- Một trong 4 sao của bộ **BINH HÌNH TƯỚNG ẤN** (Phục Binh + Thiên Hình +
  Tướng Quân + Quốc Ấn) - lãnh đạo lớn

**Chiết tự:**
- **QUỐC** = quốc gia, đất nước
- **ẤN** = ấn tín, con dấu

**Hình tượng:**
- **CON DẤU ĐỎ**
- **CHỮ KÝ** của người đứng đầu một tập thể
- **ẤN TÍN của trời ban**
- Thể hiện **TRÁCH NHIỆM, QUYỀN LỰC CAO**
- **KHẢ NĂNG QUẢN LÝ, ĐIỀU PHỐI** những con người trong tập thể

**Đặc tính:** **QUAN LỘC, CÔNG DANH, ẤN TÍN, QUYỀN UY, QUÝ HIỂN**.

**Vai trò:**
- Chủ về **CÔNG DANH, HỌC TẬP**
- Đem tới **NHIỀU QUYỀN LỰC và TRÁCH NHIỆM CAO** khi đóng tại bất cứ đâu`,
  },

  {
    id: 'quoc-an-tai-menh-quan-tu',
    title: 'Quốc Ấn tại Mệnh - phong thái quân tử',
    sao: ['Quốc Ấn'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `**Quốc Ấn thủ Mệnh:**

**Phong thái:**
- Có **PHONG ĐỘ TRƯỢNG PHU**
- **TÁC PHONG QUÂN TỬ**
- Đi đứng **ĐĨNH ĐẠC**, nói năng **QUÂN TỬ**

**Đặc trưng:**
Những đức độ này do **GIAI CẤP, QUYỀN TƯỚC, CHỨC VỊ, PHẨM HÀM** mà có — **không
hẳn** do bản tính, nết hạnh **CƠ HỮU**.

**Tính cách:**
- Có **NHIỀU QUYỀN LỰC**: luôn có **NHIỀU TRÁCH NHIỆM** đi cùng
- **TỪ TỐN, CẨN THẬN** cho những quyết định, hành động của mình
- Nhất là khi quyết định đó **ẢNH HƯỞNG TỚI NHIỀU NGƯỜI** xung quanh
- **TINH THẦN TRÁCH NHIỆM CAO**`,
  },

  {
    id: 'quoc-an-tai-menh-cong-danh',
    title: 'Quốc Ấn tại Mệnh - công danh khoa bảng',
    sao: ['Quốc Ấn'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `**Quốc Ấn thủ Mệnh - Công danh & Phúc thọ:**

**Quyền uy:**
- Có **UY QUYỀN, TƯỚC VỊ, HUY CHƯƠNG**
- Thường làm các công việc **CHÍNH THỨC** và có **QUYỀN VỊ**

**Khoa bảng:**
- Chủ về **ĐỖ ĐẠT, KHOA BẢNG, BẰNG SẮC**
- Học trò có Ấn: **THI ĐỖ ĐIỂM CAO**, làm **BAN CÁN SỰ trong lớp**

**Phạm vi quyền chức:**
- Không hẳn chỉ có **QUYỀN BINH**
- Có thể có nghĩa trên **ĐỊA HẠT KHÁC** như **VĂN HÓA**
- (Việc gia nhập **HÀN LÂM VIỆN** cũng là một hình thái của Quốc Ấn)

**Phúc thọ:**
- Tượng trưng cho **GIAI CẤP THƯỢNG LƯU**
- Lúc chết có thể được **PHONG THẦN** hoặc được **LƯU DANH**
- Người đời **CÚNG BÁI, PHỤNG THỜ**

**Điều kiện:** Những ý nghĩa này chỉ có khi **ẤN KHÔNG BỊ TUẦN, TRIỆT án ngữ**
hoặc **SÁT BẠI TINH đánh phá** làm mất đi ý nghĩa đẹp.`,
  },
  {
    id: 'quoc-an-tai-menh-cong-danh-cat-tinh',
    title: 'Quốc Ấn tại Mệnh + Phong Cáo/Hóa Khoa/Xương Khúc/Long Phượng - Phong áo mũ',
    sao: ['Quốc Ấn'],
    cung: ['Mệnh'],
    ketHop: ['Phong Cáo', 'Hóa Khoa', 'Văn Xương', 'Văn Khúc', 'Long Trì', 'Phượng Các'],
    doUuTien: 73,
    tomTat: `**Quốc Ấn + Phong Cáo / Hóa Khoa / Văn Xương / Văn Khúc / Long Trì
/ Phượng Các tại Mệnh:**
- Có **KHEN TẶNG** của Hội đồng Khoa
- Được **PHONG ÁO MŨ** trong lễ phát bằng phát thưởng **RỠ RÀNG**`,
  },

  {
    id: 'quoc-an-tai-phu-mau',
    title: 'Quốc Ấn tại Phụ Mẫu',
    sao: ['Quốc Ấn'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Quốc Ấn tại Phụ Mẫu:**
- Cha mẹ dễ có **CÔNG DANH, QUYỀN TƯỚC, SỰ NGHIỆP CAO**
- Có người làm **LÃNH ĐẠO, QUẢN LÝ, TỔ TRƯỞNG**
  - (Tùy theo mức độ đẹp của các sao đi cùng)
- Cha mẹ là người **THÀNH ĐẠT**, có **BẰNG CẤP, HỌC VỊ**
- Sau này dễ được **CẦM DẤU**, **QUẢN LÝ NHIỀU NGƯỜI** bên dưới
- Có **QUYẾT ĐỊNH ẢNH HƯỞNG TỚI NHIỀU NGƯỜI**`,
  },

  {
    id: 'quoc-an-tai-phuc-duc',
    title: 'Quốc Ấn tại Phúc Đức',
    sao: ['Quốc Ấn'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `**Quốc Ấn tại Phúc Đức** = **PHÁT QUÝ, PHÁT QUANG**:

**Đặc trưng:**
- Dòng dõi có **KHOA DANH, UY THẾ**
- Nhiều người **HIỂN ĐẠT**
- Được giữ **CHÍNH CHỨC**, có **HUY CHƯƠNG**`,
  },
  {
    id: 'quoc-an-tai-phuc-duc-luc-cat',
    title: 'Quốc Ấn tại Phúc Đức + Lục Cát - Tổ tiên làm quan to',
    sao: ['Quốc Ấn'],
    cung: ['Phúc Đức'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 73,
    tomTat: `**Quốc Ấn + Lục Cát (Tả Phù / Hữu Bật / Văn Xương / Văn Khúc /
Thiên Khôi / Thiên Việt) tại Phúc Đức:**
- Các cụ tổ tiên xưa nhiều người **LÀM QUAN TO**, có **QUYỀN CHỨC**
- Có **ẤN VUA BAN**
- Đến đời nay vẫn có người làm`,
  },
  {
    id: 'quoc-an-tai-phuc-duc-binh-hinh-tuong',
    title: 'Quốc Ấn tại Phúc Đức + Phục Binh/Thiên Hình/Tướng Quân - Võ nghiệp',
    sao: ['Quốc Ấn'],
    cung: ['Phúc Đức'],
    ketHop: ['Phục Binh', 'Thiên Hình', 'Tướng Quân'],
    doUuTien: 73,
    tomTat: `**Quốc Ấn + Phục Binh + Thiên Hình + Tướng Quân tại Phúc Đức:**
- Tổ tiên và dòng họ phát về **VÕ NGHIỆP**
- Nhiều người làm **TƯỚNG LĨNH** trong ngành **LỰC LƯỢNG VŨ TRANG**`,
  },

  {
    id: 'quoc-an-tai-dien-trach',
    title: 'Quốc Ấn tại Điền Trạch - địa linh nhân kiệt',
    sao: ['Quốc Ấn'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Quốc Ấn tại Điền Trạch:**
- Nơi mình ở, sinh sống là vùng đất **"ĐỊA LINH NHÂN KIỆT"**
- Sinh ra **NHIỀU NHÂN TÀI, NHIỀU QUAN CHỨC**
- **NGƯỜI CÓ ĐỊA VỊ** trong xã hội

**Đặc trưng:**
- Hay buôn bán kinh doanh, **ĐẤU THẦU đất đai, nhà cửa**
- Nhà cửa có **ĐẦY ĐỦ GIẤY TỜ, SỔ ĐỎ** hợp pháp
- Hay bày **ẤN TRIỆN PHONG THỦY** trong nhà
- Nhà hay treo **NHIỀU BẰNG CẤP, GIẤY KHEN, GIẢI THƯỞNG**
- Thích bày biện **PHONG THỦY**, vật phẩm linh thiêng để **giữ vượng khí**`,
  },

  {
    id: 'quoc-an-tai-quan-loc',
    title: 'Quốc Ấn tại Quan Lộc - chức vụ quyền uy',
    sao: ['Quốc Ấn'],
    cung: ['Quan Lộc'],
    doUuTien: 82,
    tomTat: `**Quốc Ấn tại Quan Lộc:**
- Là người luôn có **CHỨC VỤ, QUYỀN UY** trong công việc và học tập
- Hay được **NHẬN VỊ TRÍ LÃNH ĐẠO, QUẢN LÝ** một tập thể
- Càng hội nhiều **CÁT TINH** thì chức vụ đó càng **LỚN**

**Học hành:**
- Thi cử thường **THUẬN LỢI**
- Dễ được **ĐỀ TÊN BẢNG VÀNG, HỌC BỔNG, KHEN THƯỞNG**

**Đặc trưng:**
- Có **CHỨC VỊ, CON DẤU RIÊNG, CHỮ KÝ RIÊNG**
- Quan trọng, **ẢNH HƯỞNG TỚI NHIỀU NGƯỜI**

**Không nhiều cát tinh đẹp:**
- Đôi khi có thể làm **VỊ TRÍ THƯ KÝ giữ DẤU**
- Hoặc làm **VĂN THƯ chuyên đóng dấu**

**Quốc Ấn + Tuần / Triệt:**
- Công danh **KHÔNG CAO, BÌNH BÌNH**
- Nếu lên cao quá thì dễ có lúc **BỊ GIÁNG CHỨC, MẤT VIỆC**

**Binh Hình Tướng Ấn:**
- Chủ phát về **VÕ NGHIỆP**
- Làm bên **LỰC LƯỢNG VŨ TRANG**, có **PHẨM HÀM CAO, QUYỀN UY LỚN**`,
  },

  {
    id: 'quoc-an-tai-no-boc',
    title: 'Quốc Ấn tại Nô Bộc',
    sao: ['Quốc Ấn'],
    cung: ['Nô Bộc'],
    doUuTien: 70,
    tomTat: `**Quốc Ấn tại Nô Bộc:**
- Bạn bè nhiều người **GIỎI GIANG, TÀI NĂNG**
- Có **QUYỀN, CÓ CHỨC**
- Làm **LÃNH ĐẠO**

- "**Đi với bụt mặc áo cà sa, đi với ma mặc áo giấy**": đương số được **NÂNG ĐỠ**,
**"thơm lây"**.`,
  },

  {
    id: 'quoc-an-tai-thien-di',
    title: 'Quốc Ấn tại Thiên Di',
    sao: ['Quốc Ấn'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Quốc Ấn tại Thiên Di:**
- Người ra ngoài hay được ở gần **CÁC VỊ LÃNH ĐẠO, QUAN CHỨC LỚN**
- Là người ra ngoài có **ĐỊA VỊ, CHỨC QUYỀN**
- Có thể **QUẢN LÝ một tập thể** phía dưới
- Được **NHIỀU NGƯỜI NỂ TRỌNG**`,
  },

  {
    id: 'quoc-an-thien-di-ta-huu-menh-quan',
    title: 'Quốc Ấn Thiên Di + Tả Hữu tại Mệnh/Quan - Thư ký trợ lý',
    sao: ['Quốc Ấn'],
    cung: ['Thiên Di', 'Mệnh', 'Quan Lộc'],
    ketHop: ['Tả Phù', 'Hữu Bật'],
    doUuTien: 70,
    tomTat: `**Quốc Ấn tại Thiên Di + Tả Phù / Hữu Bật tại Mệnh hoặc Quan Lộc:**
- Dễ làm **THƯ KÝ, TRỢ LÝ** cho sếp/lãnh đạo cấp cao
- Đứng ngay cạnh quyền lực, hỗ trợ điều hành tổ chức`,
  },

  {
    id: 'quoc-an-tai-tat-ach-tam-linh',
    title: 'Quốc Ấn tại Tật Ách - căn Nhà Trần',
    sao: ['Quốc Ấn'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `**Quốc Ấn tại Tật Ách - tâm linh đặc biệt:**

**Đặc trưng:**
- Là người **THÍCH chuyện TÂM LINH, THỜ CÚNG**
- Ốm đau bệnh tật là hay ra **ĐỀN, RA CHÙA**
- **CÚNG LỄ** để xin khỏi bệnh`,
  },

  {
    id: 'quoc-an-tat-menh-tam-linh-can-tran',
    title: 'Quốc Ấn Tật + sao Tâm linh tại Mệnh - Căn Nhà Trần',
    sao: ['Quốc Ấn'],
    cung: ['Tật Ách', 'Mệnh'],
    ketHop: ['Thiên Riêu', 'Đà La', 'Hoa Cái', 'Đẩu Quân'],
    doUuTien: 70,
    tomTat: `**Cách báo CĂN ĐẶC BIỆT** — Quốc Ấn tại Tật Ách + Mệnh hội nhiều
SAO TÂM LINH (Riêu, Đà, Hoa Cái, Đẩu Quân...):
- Dễ có **CĂN BÊN TỨ PHỦ**, **NHÀ TRẦN**
- Chủ yếu là **CĂN SỐ BÊN NHÀ TRẦN**
- Có **LỘC SÁT QUỶ TRỪ TÀ**

- Đây là cách báo **CĂN ĐỒNG SỐ LÍNH** đặc biệt — duyên với Đạo Tứ Phủ, đặc
biệt là **NHÀ TRẦN** (Đức Thánh Trần Hưng Đạo).`,
  },

  {
    id: 'quoc-an-tai-tai-bach',
    title: 'Quốc Ấn tại Tài Bạch - chìa khóa ngân khố',
    sao: ['Quốc Ấn'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Quốc Ấn tại Tài Bạch:**
- Hay có **VỊ TRÍ QUẢN LÝ, THU GIỮ, ĐIỀU PHỐI** về tài chính, tiền tệ
- Người **NẮM GIỮ QUYỀN HÀNH CAO** về tài chính

**Nghề tiêu biểu:**
- **THỦ KHO**
- **KẾ TOÁN TRƯỞNG**
- **THỦ QUỸ**
- Quản lý ngân quỹ tổ chức

**Hình tượng:**
- Người **CẦM CHÌA KHÓA NGÂN KHỐ**
- Có **QUYỀN QUYẾT ĐỊNH** về tiền bạc trong một tập thể`,
  },

  {
    id: 'quoc-an-tai-tu-tuc',
    title: 'Quốc Ấn tại Tử Tức',
    sao: ['Quốc Ấn'],
    cung: ['Tử Tức'],
    doUuTien: 72,
    tomTat: `**Quốc Ấn tại Tử Tức:**
- Con cái dễ **GIỎI GIANG, THÀNH ĐẠT**
- Lớn lên có thể trở thành **"ÔNG NỌ BÀ KIA"**
- Có **ĐỊA VỊ trong xã hội**
- Có thể **QUẢN LÝ ÍT NHẤT một nhóm người**
- Có phẩm chất tốt, năng lực vượt trội: được mọi người xung quanh **YÊU MẾN,
  KÍNH NỂ**`,
  },

  {
    id: 'quoc-an-tai-phu-the',
    title: 'Quốc Ấn tại Phu Thê',
    sao: ['Quốc Ấn'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `**Quốc Ấn tại Phu Thê:**
- Vợ chồng của mình là người có **QUYỀN TƯỚC, ĐỊA VỊ**
- Làm **LÃNH ĐẠO** hoặc **CHỦ DOANH NGHIỆP**
- Người hôn phối **THÔNG MINH, GIỎI GIANG**, có **BẰNG CẤP**
- Bạn đời thường **GIÚP ĐỠ đương số nhiều** trong công việc và con đường phát
  triển sự nghiệp`,
  },

  {
    id: 'quoc-an-tai-huynh-de',
    title: 'Quốc Ấn tại Huynh Đệ',
    sao: ['Quốc Ấn'],
    cung: ['Huynh Đệ'],
    doUuTien: 70,
    tomTat: `**Quốc Ấn tại Huynh Đệ:**
- Anh chị em **GIỎI GIANG**, có **ĐỊA VỊ trong xã hội**`,
  },
  {
    id: 'quoc-an-tai-huynh-de-luc-cat',
    title: 'Quốc Ấn tại Huynh Đệ + Lục Cát - Anh em lãnh đạo lớn',
    sao: ['Quốc Ấn'],
    cung: ['Huynh Đệ'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 65,
    tomTat: `**Quốc Ấn + Lục Cát (Tả Phù / Hữu Bật / Văn Xương / Văn Khúc /
Thiên Khôi / Thiên Việt) tại Huynh Đệ:**
- Dễ làm **LÃNH ĐẠO LỚN** hoặc **CHỦ DOANH NGHIỆP THÀNH ĐẠT**
- "**Một người làm quan cả họ được nhờ**"`,
  },

  {
    id: 'quoc-an-phong-cao',
    title: 'Quốc Ấn + Phong Cáo - phong chức ban quyền',
    sao: ['Quốc Ấn'],
    ketHop: ['Phong Cáo'],
    doUuTien: 75,
    tomTat: `**Quốc Ấn + Phong Cáo:**

**Đặc trưng:**
- Chủ về được **PHONG CHỨC, BAN QUYỀN**
- **TẶNG HUY CHƯƠNG**
- Hoặc được **LÊN CHỨC**

- Bộ **Ấn-Cáo** là cặp đôi **CHỨC TƯỚC + BẰNG CẤP** kinh điển trong tử vi —
khi vào hạn càng ứng nghiệm.`,
  },

  {
    id: 'quoc-an-binh-hinh-tuong',
    title: 'Quốc Ấn + Phục Binh + Thiên Hình + Tướng Quân - Binh Hình Tướng Ấn',
    sao: ['Quốc Ấn'],
    ketHop: ['Phục Binh', 'Thiên Hình', 'Tướng Quân'],
    doUuTien: 85,
    tomTat: `**Quốc Ấn + Phục Binh + Thiên Hình + Tướng Quân** = bộ **BINH HÌNH TƯỚNG ẤN**.

**Đặc trưng:**
- Chủ về **QUYỀN UY VÕ NGHIỆP HIỂN ĐẠT**
- **SĨ QUAN THAM MƯU XUẤT SẮC**
- Có thể làm **LÃNH ĐẠO LỚN** của một tập thể nhiều người
- **QUYỀN UY VÔ CÙNG LỚN**
- Có **NHIỀU QUYẾT ĐỊNH QUAN TRỌNG** ảnh hưởng lớn tới tập thể

- Đây là **CÁCH CỤC ĐẠI QUYỀN UY** trong tử vi — đặc biệt phát về:
- **QUÂN ĐỘI, CÔNG AN**
- **AN NINH**
- **HÀNH PHÁP**

- (Phần chung Binh Hình Tướng Ấn đã viết tại tuong-quan.ts)`,
  },

  {
    id: 'quoc-an-tuong-tam-hoa',
    title: 'Quốc Ấn + Tướng Quân + Tam Hóa - vận may quan trường',
    sao: ['Quốc Ấn'],
    ketHop: ['Tướng Quân', 'Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa'],
    doUuTien: 80,
    tomTat: `**Quốc Ấn + Tướng Quân + Tam Hóa** (Hóa Lộc + Hóa Quyền + Hóa Khoa):

**Đặc trưng:**
- Chủ về **GẶP VẬN HỘI MAY MẮN LỚN** về **QUAN TRƯỜNG**
- Được **HIỂN ĐẠT về CÔNG DANH**
- Làm **CHỨC VỤ rất TO**

- Cách cục **CỰC ĐẸP** — Tam Hóa là tam giải thần (Lộc, Quyền, Khoa) cộng
Quốc Ấn cộng Tướng Quân: đường **THĂNG TIẾN VƯƠNG GIẢ**.`,
  },

  {
    id: 'quoc-an-tuan-triet',
    title: 'Quốc Ấn + Tuần / Triệt - công danh trắc trở',
    sao: ['Quốc Ấn'],
    ketHop: ['Tuần', 'Triệt'],
    doUuTien: 65,
    tomTat: `**Quốc Ấn + Tuần / Triệt:**

**Đặc trưng:**
- Chủ về **CÔNG DANH TRẮC TRỞ, THẤT BẠI**
- Bị **CÁCH CHỨC, BÃI MIỄN, SA THẢI**
- **TRANH CỬ THẤT BẠI**

**Nguy hiểm:** có khả năng được **bổ nhiệm chức vụ quan trọng**, nhưng chưa
kịp **phát huy năng lực** đã bị **GIÁNG CHỨC, CÁCH CHỨC** hoặc **MẤT VIỆC**.

Thậm chí còn có tình huống bị **VU OAN**, bị người khác **GIÈM PHA, NÓI XẤU**.

**Cách hóa giải:**
- KHÔNG cố gắng vươn lên vị trí **QUÁ CAO** nếu chưa đủ **năng lực**
- Không **CHẠY THEO chức tước, quyền lực**
- Xây dựng **UY TÍN CÁ NHÂN** bằng **TRÍ TUỆ, ĐẠO ĐỨC, CHUYÊN MÔN**
- Tìm **NGƯỜI LÃNH ĐẠO XỨNG ĐÁNG**

- Khi đó dù không có "ấn tín" chính thức thì **lời nói vẫn có TRỌNG LƯỢNG**.`,
  },

  {
    id: 'quoc-an-vao-han',
    title: 'Quốc Ấn vào hạn',
    sao: ['Quốc Ấn'],
    doUuTien: 60,
    tomTat: `**Quốc Ấn vào hạn - cát điềm:**

**Đặc trưng:**
- **ĐẮC THỜI, ĐẮC QUAN, ĐẮC KHOA**
- Được **THĂNG CHỨC**
- **ĐẢM NHIỆM VỊ TRÍ MỚI**
- Có **QUYỀN UY, CON DẤU**

**Khen thưởng:**
- Có **HUY CHƯƠNG**
- Có **BẰNG KHEN, GIẤY KHEN**

- Năm có hạn này là **THỜI ĐIỂM TỐT** để xin việc, nộp đơn thi tuyển, cầu
chức. Đặc biệt khi đi với **Phong Cáo** thì chắc chắn được **bổ nhiệm**.`,
  },

  {
    id: 'quoc-an-loi-khuyen',
    title: 'Lời khuyên cho người Quốc Ấn',
    sao: ['Quốc Ấn'],
    doUuTien: 35,
    tomTat: `**Quốc Ấn rực rỡ khi gặp CÁT TINH**, nhưng cũng dễ **LẬN ĐẬN khi đi cùng SÁT
TINH phá hoại**.

**Triết lý:**
**Quyền lực CHỈ BỀN khi được xây dựng dựa trên:**
- **TÀI NĂNG**
- **ĐẠO ĐỨC**
- **UY TÍN CÁ NHÂN**

**Bí quyết phát huy Quốc Ấn:**
- **GIỮ CÁI TÂM TRONG SÁNG**
- **LÀM VIỆC ĐƯỜNG ĐƯỜNG CHÍNH CHÍNH**
- **SỐNG KHIÊM NHƯỜNG**
- **TÍCH ĐỨC, RÈN ĐẠO**
- **KHÔNG CHẠY THEO** quyền lực hư vinh
- Phát huy **CHUYÊN MÔN** thay vì chỉ "**chữ ký**"

- Khi không cố vươn lên cao **QUÁ NĂNG LỰC**, mà tích lũy bằng **trí tuệ, đạo
đức**: sẽ **HƯỞNG QUYỀN UY BỀN VỮNG** suốt đời.`,
  },
];
