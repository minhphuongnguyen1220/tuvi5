import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO PHÚC ĐỨC - Thổ, Phúc Tinh, vòng Thái Tuế (vị trí 10).
 * ⚠️ KHÁC với CUNG Phúc Đức - đây là SAO! Tag dùng `sao: ['Phúc Đức']` (không phải `cung`).
 *
 * LUÔN đồng cung với THIÊN ĐỨC (theo quy luật an sao - hardcode trong engine).
 * Là SAO GIẢI mạnh, đặc tính tương tự Long Đức.
 */
export const luanGiai_PhucDuc: DoanLuanGiai[] = [
  {
    id: 'phuc-duc-sao-tinh-chat-chung',
    title: 'Sao Phúc Đức - Đặc tính chung',
    sao: ['Phúc Đức'],
    doUuTien: 32,
    tomTat: `**Sao Phúc Đức** — phụ tinh **PHÚC TINH** trong **vòng Thái Tuế**, vị trí thứ
**10**.

⚠️ **PHÂN BIỆT với CUNG Phúc Đức** — đây là **SAO**, có thể đóng tại bất kỳ
cung nào trong 12 cung lá số.

**Ngũ hành:** **Thổ**.

**Hóa khí:** **Phúc Tinh**.

⚡ **LUÔN đồng cung với THIÊN ĐỨC** (theo quy luật an sao — hardcode):
- Thiên Đức là **PHÚC TINH** mạnh
- Hai sao **TĂNG CƯỜNG** lẫn nhau → bộ **PHÚC ĐỨC + THIÊN ĐỨC** đồng cung là
  **CÁCH ĐẸP** trong tử vi

**Đặc tính:** **KHOAN HÒA, NHÂN HẬU, ĐOAN CHÍNH, PHÚC THIỆN**, **GIẢI ĐƯỢC TAI
NẠN, HUNG NGUY**.`,
  },

  {
    id: 'phuc-duc-sao-giai',
    title: 'Sao Phúc Đức là Sao Giải mạnh',
    sao: ['Phúc Đức'],
    doUuTien: 50,
    tomTat: `⚡ **Sao Phúc Đức là một SAO GIẢI MẠNH** — tương tự **Long Đức**:

🌟 **Khả năng:**
- **GIẢI TRỪ bệnh tật NHỎ** và **TAI HỌA NHỎ**
- Mang lại **MAY MẮN, HỶ SỰ**

🌟 **Cùng nhóm GIẢI TINH với:**
- **Thiên Giải, Địa Giải, Giải Thần** (3 sao Giải chuyên biệt)
- **Thiên Quan, Thiên Phúc** (cứu giải)
- **Thiếu Âm, Thiếu Dương** (sao của vòng Thái Tuế)
- **Quang Quý** (Ân Quang + Thiên Quý)
- **Tả Phù, Hữu Bật** (Lục Cát Tả Hữu)
- **Tràng Sinh, Đế Vượng** (vòng Tràng Sinh)
- **Long Đức** (cùng vòng Thái Tuế)

⚡ **CÀNG NHIỀU GIẢI TINH → CÀNG TĂNG hiệu lực CỨU GIẢI**.

→ Cách cục đẹp: **lá số có cả Long Đức + Phúc Đức** đồng cung/hợp chiếu cùng
**Tứ Đức** → **GIẢI HỌA mạnh nhất**.`,
  },

  {
    id: 'phuc-duc-sao-tai-menh',
    title: 'Sao Phúc Đức tại Mệnh - ôn hòa thích thiện',
    sao: ['Phúc Đức'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `🌟 **Sao Phúc Đức thủ Mệnh:**

🌟 **Tính cách nổi bật:**
- **ÔN HÒA, ĐÔN HẬU, NHÂN TỪ, ĐOAN CHÍNH**
- Có **LÒNG BÁC ÁI**, thích **LÀM VIỆC THIỆN**
- Thích **GIÚP ĐỠ NGƯỜI KHÁC**
- Sống **HIỀN LÀNH, KHIÊM CUNG**
- Dễ được mọi người **QUÝ TRỌNG và TIN CẬY**

⚡ **Triết lý sống:**
- Đương số là người "**TRỌNG ĐỨC HƠN TÀI**"
- **COI TRỌNG NGHĨA LÝ và DANH DỰ** hơn lợi ích vật chất
- **TỪ BI**, từ thiện, hay **GIÚP ĐỠ, LÀM PHÚC**

🌟 **Sức mạnh GIẢI HỌA:**
Là **GIẢI TINH MẠNH** — khi **đắc địa** giúp:
- **GIẢM NHẸ** hoặc **HÓA GIẢI** tai họa nhỏ, bệnh tật, thị phi

🌟 **+ Thiên Đức** (luôn đồng cung) **+ Thiên Quan / Thiên Phúc / Giải Thần /
Thiên Giải / Địa Giải / Quang Quý / Tả Hữu / Thiếu Dương / Thiếu Âm:**
- Hiệu lực cứu giải **TĂNG GẤP BỘI**
- Sự phối hợp nhiều giải tinh giúp đương số:
  - **GẶP MAY MẮN BẤT NGỜ**
  - **TAI QUA NẠN KHỎI**
  - Công việc **THUẬN BUỒM XUÔI GIÓ**
  - Được **QUÝ NHÂN giúp đỡ**`,
  },

  {
    id: 'phuc-duc-sao-tai-phu-mau',
    title: 'Sao Phúc Đức tại Phụ Mẫu',
    sao: ['Phúc Đức'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `🌟 **Sao Phúc Đức tại Phụ Mẫu:**
- Cha mẹ **NHÂN HẬU, TỪ THIỆN**
- Có **NGHỀ KHÉO**
- Sống **CHÂN CHẤT**, biết lấy **ĐỨC LÀM GỐC**
- Hành xử **ÔN HÒA**, **GIỮ CHỮ TÍN**, **TRỌNG NGHĨA TÌNH**
- Có xu hướng **GIÚP NGƯỜI, LÀM VIỆC THIỆN**
- Tham gia các **HOẠT ĐỘNG PHÚC LỢI** hoặc **TÔN GIÁO**
- Luôn **KHUYÊN CON CHÁU HƯỚNG THIỆN**, **TÍCH ĐỨC, TU TÂM**

🌟 **Đặc điểm gia đình:**
- Có **NỀ NẾP GIA PHONG** rõ ràng
- Con cái được nuôi dạy trong **MÔI TRƯỜNG ĐẠO ĐỨC**
- Biết **KÍNH TRÊN NHƯỜNG DƯỚI**
- Đương số được **THỪA HƯỞNG TÍNH CÁCH ÔN HÒA, NHÂN TỪ**
- Nhờ **PHÚC ẤM của cha mẹ** → dễ được **GIÚP ĐỠ lúc khó khăn**, tránh **nhiều
  tai ương**

🌟 **+ Thiên Đức / Thiên Phúc / Quang Quý / Thiên Quan:**
- Phúc khí của cha mẹ càng **MẠNH**
- Gia đạo **HƯNG VƯỢNG**
- Con cái **HIỂN ĐẠT**

⚠️ **+ Không / Kiếp / Hình / Kỵ:**
- Phúc phần **SUY GIẢM**
- Cha mẹ phải trải qua **BỆNH TẬT, TRẮC TRỞ**
- Nhờ **tính chất CỨU GIẢI** của Phúc Đức nên tai họa thường được **HÓA GIẢI**,
  khó thành điều dữ`,
  },

  {
    id: 'phuc-duc-sao-tai-phuc-duc-cung',
    title: 'Sao Phúc Đức tại CUNG Phúc Đức - phúc dày',
    sao: ['Phúc Đức'],
    cung: ['Phúc Đức'],
    doUuTien: 85,
    tomTat: `🌟 **Sao Phúc Đức tại CUNG Phúc Đức** = **CÁCH ĐẸP** — phúc khí cực mạnh.

🌟 **Đặc trưng:**
- Họ hàng trong dòng tộc phần nhiều là **NGƯỜI HIỀN LÀNH, NHÂN HẬU**
- Cư xử **ĐÚNG MỰC**
- **MỒ MẢ TỔ TIÊN THUẬN VỊ**, **đất đai LONG MẠCH yên ổn**
- Được **ÂM PHÚC che chở**
- Con cháu được hưởng **MAY MẮN, BÌNH AN**, nhiều người **THÀNH ĐẠT**

🌟 **+ Thiên Đức + Nguyệt Đức:** đồng cung là **CÁCH ĐẸP NHẤT**:
- Họ hàng **PHÚC HẬU**
- Mồ mả **THUẬN VỊ**
- Dòng họ có nhiều người **TRỌNG NGHĨA, hay GIÚP NGƯỜI**
- Gặp **CHUYỆN NGUY NAN** thường có **QUÝ NHÂN TƯƠNG TRỢ** hoặc được **HÓA
  GIẢI**

🌟 **+ Quang Quý / Thiên Quan / Thiên Phúc:** phúc đức càng **LỚN**:
- Phước phần tổ tiên **SÂU DÀY**
- Con cháu được hưởng **PHÚC THỌ**
- Dễ tạo dựng **SỰ NGHIỆP**`,
  },

  {
    id: 'phuc-duc-sao-tai-dien-trach',
    title: 'Sao Phúc Đức tại Điền Trạch',
    sao: ['Phúc Đức'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `🌟 **Sao Phúc Đức tại Điền Trạch:**
- Đi đâu cũng có **NGƯỜI GIÚP ĐỠ về NHÀ CỬA**, nơi ăn chốn ở
- Được **QUÝ NHÂN hoặc bạn bè HỖ TRỢ** trong việc:
  - Tìm nhà
  - Mua đất
  - Xây dựng chỗ ở **ổn định**

🌟 **Đặc trưng người ở:**
- **TÂM TÍNH HIỀN HÒA**, biết **GIỮ HÒA KHÍ**
- Quan hệ với **HÀNG XÓM LÁNG GIỀNG RẤT TỐT**, **ÍT TRANH CHẤP** hay điều tiếng
- Luôn là người **CHỦ ĐỘNG NHƯỜNG NHỊN, HÒA GIẢI**, tạo không khí thuận hòa
- Biết **TRÂN TRỌNG nơi mình ở**, biết **VUN VÉN, GIỮ GÌN nhà cửa GỌN GÀNG, YÊN
  ỔN**

🌟 **Triết lý sống:**
- KHÔNG đặt nặng **VẬT CHẤT** hay hình thức
- **ĂN Ở GIẢN DỊ**, dễ thích nghi với hoàn cảnh
- Dù **giàu hay nghèo** cũng biết **AN PHẬN** và **HÀI LÒNG với hiện tại**`,
  },

  {
    id: 'phuc-duc-sao-tai-quan-loc',
    title: 'Sao Phúc Đức tại Quan Lộc',
    sao: ['Phúc Đức'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `🌟 **Sao Phúc Đức tại Quan Lộc:**
- **CÔNG DANH HAY GẶP MAY**
- Có **LƯƠNG TÂM nghề nghiệp**
- Có **QUÝ NHÂN GIÚP ĐỠ**
- Được **CẤP TRÊN TIN TƯỞNG**, **đồng nghiệp YÊU MẾN**

🌟 **Đặc trưng làm việc:**
- Làm việc có **TRÁCH NHIỆM, CÓ ĐẠO ĐỨC**
- Biết đặt **LỢI ÍCH CHUNG** lên trên **lợi ích cá nhân**
- KHÔNG chỉ mưu cầu thành công cho riêng mình
- Muốn mang lại **GIÁ TRỊ TÍCH CỰC** cho tập thể và xã hội
- Dù làm nghề gì cũng **TẬN TỤY, GIỮ CHỮ TÍN**
- KHÔNG làm điều **GIAN TRÁ** hay bất chính

🌟 **Kết quả:**
- Sự nghiệp **BỀN VỮNG**
- **DANH TIẾNG TỐT**
- Được người khác **KÍNH TRỌNG**`,
  },

  {
    id: 'phuc-duc-sao-tai-no-boc',
    title: 'Sao Phúc Đức tại Nô Bộc',
    sao: ['Phúc Đức'],
    cung: ['Nô Bộc'],
    doUuTien: 70,
    tomTat: `🌟 **Sao Phúc Đức tại Nô Bộc:**
- Bè bạn, người làm, người giúp việc **NHÂN HẬU**
- Đương số được **MỌI NGƯỜI XUNG QUANH YÊU MẾN, TÔN TRỌNG**
- Sẵn sàng **GIÚP ĐỠ KHI CẦN**
- Bạn bè, đồng nghiệp phần nhiều là người **HIỀN LÀNH, THẬT THÀ**, có **LÒNG
  TRUNG THÀNH** và biết cư xử **đúng mực**

🌟 **Đặc trưng quan hệ:**
- Các mối quan hệ xã hội thường **HÒA THUẬN**
- **ÍT XẢY RA TRANH CHẤP, HIỀM KHÍCH**
- Đương số biết **GIỮ CHỮ TÍN**, sống **CHÂN THÀNH**
- Lấy **ĐỨC mà CẢM HÓA NGƯỜI KHÁC**`,
  },

  {
    id: 'phuc-duc-sao-tai-thien-di',
    title: 'Sao Phúc Đức tại Thiên Di',
    sao: ['Phúc Đức'],
    cung: ['Thiên Di'],
    doUuTien: 72,
    tomTat: `🌟 **Sao Phúc Đức tại Thiên Di:**
- Ra ngoài **KHIÊM TỐN**, hay **GẶP QUÝ NHÂN**
- Đương số gặp **NHIỀU THUẬN LỢI**
- Phong thái **NHẸ NHÀNG, KHIÊM TỐN**, cư xử **ĐÚNG MỰC**
- Dễ **TẠO THIỆN CẢM** với người khác

🌟 **Hồi báo:**
Bản thân chủ mệnh thích **LÀM VIỆC THIỆN** → khi gặp khó khăn cũng được **người
đời ĐÁP LẠI** bằng **SỰ TỬ TẾ và HỖ TRỢ CHÂN THÀNH**.`,
  },

  {
    id: 'phuc-duc-sao-tai-tat-ach',
    title: 'Sao Phúc Đức tại Tật Ách',
    sao: ['Phúc Đức'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `🌟 **Sao Phúc Đức tại Tật Ách - cứu giải MẠNH MẼ:**
- **GIẢI TRỪ tai nạn, bệnh tật NHỎ**
- Giúp đương số **GIẢM NHẸ tai ương, bệnh tật và những RỦI RO** trong đời sống

🌟 **Phước phần bảo hộ:**
- Chủ mệnh thường **GẶP MAY MẮN trong việc ĐIỀU TRỊ BỆNH**
- Khi đau yếu dễ gặp được **THẦY THUỐC GIỎI, THUỐC TỐT**
- Có **CƠ DUYÊN** được người khác **GIÚP ĐỠ ĐÚNG LÚC** để **THOÁT khỏi HIỂM NGUY**

⚡ **Cơ chế hóa giải:**
Nhờ **TÂM THIỆN và CÔNG ĐỨC tích lũy** mà:
- Tai họa được **HÓA GIẢI**
- **NẶNG hóa NHẸ**, **NHẸ hóa KHÔNG**

💡 **Lời khuyên:** chủ mệnh nên **HÀNH THIỆN, LÀM PHÚC, GIÚP NGƯỜI** — vì càng
**GIEO NHÂN LÀNH** thì:
- **PHÚC KHÍ càng DÀY**
- **SỨC KHỎE càng ỔN ĐỊNH**
- Ít gặp **TAI NẠN LỚN**`,
  },

  {
    id: 'phuc-duc-sao-tai-tai-bach',
    title: 'Sao Phúc Đức tại Tài Bạch',
    sao: ['Phúc Đức'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `🌟 **Sao Phúc Đức tại Tài Bạch:**
- **KIẾM TIỀN CHÍNH ĐÁNG**, có **LÒNG TỪ THIỆN**
- Người kiếm tiền bằng **CON ĐƯỜNG CHÂN CHÍNH, LƯƠNG THIỆN**
- Có **ĐẠO ĐỨC** trong cách sử dụng của cải
- **COI TRỌNG NGHĨA HƠN TÀI**, KHÔNG vì tiền mà làm điều **GIAN TRÁ** hay tranh
  đoạt với người khác

🌟 **Đặc trưng tài lộc:**
- Trong các vấn đề tài chính: **ÔN HÒA, NHƯỜNG NHỊN**
- Đôi khi sẵn sàng **CHỊU THIỆT** để **TRÁNH BẤT HÒA**
- Thường **GẶP MAY MẮN** trong việc kiếm tiền
- Dù không quá tham vọng nhưng tiền tài đến một cách **TỰ NHIÊN, ĐỦ DÙNG, ỔN
  ĐỊNH**, ít khi túng thiếu
- Được **GIÚP ĐỠ** hoặc **GẶP MAY** về tiền bạc

🌟 **Cách dùng tiền:**
- Có xu hướng dùng tiền cho những **VIỆC THIỆN**:
  - Giúp đỡ người khó khăn
  - Làm **TỪ THIỆN, CÔNG ĐỨC**
  - **TU TẠO PHÚC PHẦN** cho bản thân và gia đình
- Nhờ biết **DÙNG TIỀN ĐÚNG CÁCH** và có **TÂM LÀNH** → tài lộc tuy không phất
  mạnh nhưng **BỀN VỮNG VÀ AN ỔN**
- Của cải **RA ĐI LẠI QUAY VỀ**, không bị **TỔN HAO LỚN**`,
  },

  {
    id: 'phuc-duc-sao-tai-tu-tuc',
    title: 'Sao Phúc Đức tại Tử Tức',
    sao: ['Phúc Đức'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `🌟 **Sao Phúc Đức tại Tử Tức:**
- Con cái **HÒA THUẬN, HIẾU THẢO**
- **HIỀN LÀNH**, biết **KÍNH TRỌNG cha mẹ** và hòa thuận với anh chị em

⚡ **Triết lý nhân quả:**
Con cái là **KẾT QUẢ của PHƯỚC LÀNH** tích tụ từ cha mẹ — nên cha mẹ càng:
- **HÀNH THIỆN, LÀM PHÚC**
→ Con cái càng **HIỂN ĐẠT**, có **ĐẠO ĐỨC** và gặp **NHIỀU MAY MẮN**

🌟 **+ Thiên Đồng + Nguyệt Đức:**
- Vợ chồng có **CON SỚM**
- Việc **SINH NỞ THUẬN LỢI**
- Con cái **DỄ NUÔI**, **TÍNH TÌNH NGOAN HIỀN**
- Đứa trẻ sinh ra thường có **PHÚC PHẦN**, được **QUÝ NHÂN PHÙ TRỢ**
- Dễ **THÀNH CÔNG khi trưởng thành**`,
  },

  {
    id: 'phuc-duc-sao-tai-phu-the',
    title: 'Sao Phúc Đức tại Phu Thê',
    sao: ['Phúc Đức'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `🌟 **Sao Phúc Đức tại Phu Thê:**
- Hôn nhân **HÀI HÒA, ÊM ẤM** và có **NHIỀU PHƯỚC LÀNH**
- Người hôn phối **CÓ NHAN SẮC, ĐỨNG ĐẮN**, tính tình **NHẸ NHÀNG**
- Biết **ĐỐI NHÂN XỬ THẾ**

🌟 **Đời sống vợ chồng:**
- Chủ mệnh biết **NHƯỜNG NHỊN, MỀM MỎNG**
- Sẵn sàng **LÙI MỘT BƯỚC** để **GIỮ HÒA KHÍ** và tránh xung đột
- Gia đạo thường **YÊN ỔN, ÍT SÓNG GIÓ**
- Đôi bên **TÔN TRỌNG và CẢM THÔNG** cho nhau

🌟 **+ Thiên Đức + Nguyệt Đức:** tình cảm vợ chồng càng **BỀN CHẶT**:
- Đôi bên có sự **TƯƠNG KÍNH NHƯ TÂN**
- Biết **CÙNG NHAU VUN VÉN, vượt qua khó khăn**

🌟 **+ Đào Hoa:** vợ chồng:
- **HÒA HỢP** về tâm tính
- **XỨNG ĐÔI về dung mạo**
- Yêu thương gắn bó, có **DUYÊN NỢ SÂU DÀY**`,
  },

  {
    id: 'phuc-duc-sao-tai-huynh-de',
    title: 'Sao Phúc Đức tại Huynh Đệ',
    sao: ['Phúc Đức'],
    cung: ['Huynh Đệ'],
    doUuTien: 70,
    tomTat: `🌟 **Sao Phúc Đức tại Huynh Đệ:**
- Anh chị em **HÒA THUẬN**
- Tình thân **HÒA THUẬN**, biết **YÊU THƯƠNG, NHƯỜNG NHỊN** và **GIÚP ĐỠ NHAU**
- Mối quan hệ giữa các thành viên **ẤM ÁP**, **ÍT XẢY RA TRANH CÃI** hay bất hòa

🌟 **Tinh thần:**
- Nếu có **xung khắc nhỏ** cũng dễ được **HÓA GIẢI** nhờ **TẤM LÒNG BAO DUNG và
  NHÂN HẬU** của mỗi người
- Anh chị em đều có **TÂM TÍNH HIỀN LÀNH, TRỌNG TÌNH NGHĨA**
- Khi một người gặp khó khăn → những người khác **SẴN LÒNG HỖ TRỢ, ĐỠ ĐẦN**

⚡ **Phúc phần tổ tiên:**
Phúc Đức ở cung Huynh Đệ còn biểu thị **PHÚC PHẦN TỔ TIÊN ĐỂ LẠI** cho anh em
trong họ tộc → giúp gia đình có **SỰ GẮN BÓ và YÊU THƯƠNG BỀN CHẶT**.`,
  },

  {
    id: 'phuc-duc-sao-vao-han',
    title: 'Sao Phúc Đức vào hạn - cát lành',
    sao: ['Phúc Đức'],
    doUuTien: 55,
    tomTat: `🌟 **Sao Phúc Đức nhập hạn** thường mang đến:
- **MAY MẮN, CÁT LÀNH**
- **HÓA GIẢI TAI ƯƠNG**
- Giúp đương số **VƯỢT QUA KHÓ KHĂN một cách NHẸ NHÀNG**

🌟 **Đặc trưng vận hạn:**
- Thường gặp được **QUÝ NHÂN GIÚP ĐỠ**
- Thuận lợi trong **CÔNG VIỆC, TÌNH CẢM** và các **MỐI QUAN HỆ XÃ HỘI**

🌟 **+ Nguyệt Đức + Đào Hoa + Hồng Loan:** điềm lành về **NHÂN DUYÊN**:
- Dễ **GẶP NGƯỜI KHÁC PHÁI** tốt bụng, hiền hậu
- Thậm chí được **NGƯỜI LÀM MAI MỐI** để nên **DUYÊN VỢ CHỒNG**
- Mối quan hệ tình cảm **THUẬN LỢI**, có **DUYÊN TRỜI ĐỊNH**, dễ kết thành đôi
  lứa chính thức

🌟 **Người ĐÃ CÓ GIA ĐÌNH:** hạn này thường mang lại **HÒA KHÍ trong hôn nhân**:
- Vợ chồng **HIỂU NHAU HƠN**
- Dễ **HÓA GIẢI HIỂU LẦM**

🌟 **Người ĐỘC THÂN:** đây là thời điểm **TỐT** để:
- **GẶP GỠ**
- **MỞ LÒNG**
- **KẾT NỐI TÌNH CẢM**`,
  },

  {
    id: 'phuc-duc-sao-loi-khuyen',
    title: 'Lời khuyên cho người sao Phúc Đức',
    sao: ['Phúc Đức'],
    doUuTien: 35,
    tomTat: `💡 **Sao Phúc Đức là PHÚC TINH** mang ý nghĩa **CỨU GIẢI** — biểu tượng của:
- **PHƯỚC BÁU**
- **ĐẠO NGHĨA**
- **LÒNG NHÂN HẬU**

🌟 **Đặc trưng:** Phúc Đức luôn mang **KHÍ CHẤT ÔN HÒA**:
- **HÓA GIẢI tai ương**
- **GIỮ GÌN HÒA KHÍ**
- Tạo nên **THUẬN DUYÊN trong đời sống**

💡 **Bí quyết PHÁT HUY Phúc Đức:**
- **HÀNH THIỆN, LÀM PHÚC**
- **NÓI LỜI LÀNH** — tu khẩu
- **GIỮ TÂM ĐỨC**
- **TÔN TRỌNG TỔ TIÊN**, thờ phụng chu đáo
- **GIÚP ĐỠ NGƯỜI KHÓ KHĂN** không tính toán

→ Khi tu dưỡng đúng cách:
- **PHÚC KHÍ càng SÂU**
- **HỌA TAI càng NHẸ**
- Đường đời thêm phần **SUÔN SẺ, HANH THÔNG**`,
  },
];
