import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO SUY - Thủy, Bại Tinh.
 *
 * Vị trí THỨ 6 trong Vòng Trường Sinh 12 sao:
 *   Trường Sinh → Mộc Dục → Quan Đới → Lâm Quan → Đế Vượng → SUY →
 *   Bệnh → Tử → Mộ → Tuyệt → Thai → Dưỡng
 *
 * An theo CỤC, là sao ĐẦU TIÊN của nửa GIẢM SÚT trong vòng Trường Sinh.
 *
 * Đặc trưng:
 *   - Đứng SAU ĐỈNH ĐẾ VƯỢNG → bắt đầu xuống dốc, sa sút
 *   - Sau khi mặt trời lên đỉnh (giờ Ngọ) → đi xuống Mùi, Thân, Dậu...
 *   - Tượng trưng cho TUỔI VỀ GIÀ, CHUẨN BỊ NGHỈ HƯU
 *   - Sao GIẢM THIỂU - hai mặt:
 *     • Đi cùng chính tinh + cát tinh đắc địa → GIẢM ĐỘ SÁNG, SỨC PHÁT HUY
 *     • Đi cùng sát bại tinh + chính tinh hãm → GIẢM TÁC DỤNG XẤU
 *   - Tính cách ÔN HÒA, AN PHẬN, THỎA HIỆP
 *   - Hợp NGHIÊN CỨU, KỸ THUẬT, TỈ MỈ
 *   - DƯƠNG NAM ÂM NỮ - dễ bị hôn phối lấn quyền
 */
export const luanGiai_Suy: DoanLuanGiai[] = [
  {
    id: 'suy-tinh-chat-chung',
    title: 'Suy - Đặc tính chung',
    sao: ['Suy'],
    doUuTien: 33,
    tomTat: `**Suy** — phụ tinh **BẠI TINH**, vị trí **THỨ 6** vòng Trường Sinh — đầu nửa
**GIẢM SÚT**.

**Ngũ hành:** **Thủy**.

⚡ **Đặc tính:**
- **SỰ SA SÚT, YẾU ĐUỐI**
- Sau khi lên đỉnh (Đế Vượng) → bắt đầu **XUỐNG DỐC**
- Tượng trưng **THỜI KỲ VỀ GIÀ**, độ tuổi **CHUẨN BỊ NGHỈ HƯU**
- Sức khỏe và sự nghiệp **ĐẢO CHIỀU ĐI XUỐNG**
- Như mặt trời sau giờ **NGỌ** sẽ đi xuống dần theo **MÙI, THÂN, DẬU**...

⚡ **Tính sao GIẢM THIỂU - HAI MẶT:**
- ✅ **Tốt khi đi cùng sát bại tinh** + chính tinh hãm địa → **GIẢM TÁC DỤNG
  XẤU** của chúng
- ⚠️ **Xấu khi đi cùng cát tinh** đắc địa → **GIẢM ĐỘ SÁNG, SỨC PHÁT HUY**
  của chúng

⚡ **Tính cách:**
- **ÔN HÒA, DỄ THỎA HIỆP, AN PHẬN**
- Hợp **NGHIÊN CỨU, KỸ THUẬT, TỈ MỈ**
- **DƯƠNG NAM, ÂM NỮ:** thường dễ bị **NGƯỜI HÔN PHỐI LẤN ÁT, CẦM QUYỀN**`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP XẤU
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'suy-hoa-linh-khong-kiep-co-luong-ham-pham-phap',
    title: 'Suy + Hỏa Linh + Không Kiếp + Cơ/Lương hãm - Lầm đường phạm pháp',
    sao: ['Suy'],
    ketHop: ['Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp', 'Thiên Cơ'],
    doUuTien: 60,
    tomTat: `⚠️ **Suy + Hỏa Tinh + Linh Tinh + Địa Không + Địa Kiếp + Thiên Cơ / Thiên
Lương hãm địa** — cách cục **SUY TÀN ĐẠO ĐỨC**.

⚠️ **Đặc trưng:**
- Đương số dễ **SA NGÃ**
- Hành vi **PHẠM PHÁP** như **TRỘM CẮP VẶT**
- Hoặc rơi vào cảnh **BỊ LỪA ĐẢO, MẤT CỦA**

⚠️ **Đặc biệt nguy hiểm tại Tuyệt - Suy - Mộc Dục:**
- Nếu chính tinh **HÃM ĐỊA** → nguy cơ bị **DỤ DỖ VÀO CON ĐƯỜNG BẤT CHÍNH**
  rất cao
- Hạn vận này dễ khiến đương số **VƯỚNG VÀO VÒNG LAO LÝ**
- Hoặc **NGUY HIỂM ĐẾN TÍNH MẠNG** nếu không được hóa giải

⚡ **Hóa giải:** Tử Vi, Đồng, Lương + Quang Quý + Quan Phúc + Tuần Triệt cần
có để đỡ.`,
  },

  {
    id: 'suy-menh-cuc-kim-han-ty-suy-nhuoc',
    title: 'Suy + Mệnh Tý / Cục Kim hạn Tý - Sức khỏe suy kiệt',
    sao: ['Suy'],
    chi: ['Tý'],
    doUuTien: 55,
    tomTat: `⚠️ **Suy tác động đến Mệnh / Cục Kim rơi vào hạn cung Tý** — chất lượng
cuộc sống **XUỐNG DỐC RÕ RỆT**.

⚡ **Đặc trưng:**
- Người mang cách cục dễ rơi vào tình trạng **SUY NHƯỢC KÉO DÀI**
- Dù không phát bệnh nặng cũng luôn cảm thấy **UỂ OẢI, THIẾU SINH KHÍ**
- Như cây **THIẾU NƯỚC** dù vẫn còn xanh

⚡ **Cảnh báo:** Cần dưỡng sinh, ăn uống cẩn thận, tránh lao lực — không
nên làm nghề tiêu hao thể lực nhiều.`,
  },

  {
    id: 'suy-cuc-tho-han-mao-thin-ti-benh-man',
    title: 'Suy + Cục Thổ hạn Mão Thìn Tị - Bệnh mãn tính khó dứt',
    sao: ['Suy'],
    chi: ['Mão', 'Thìn', 'Tỵ'],
    doUuTien: 55,
    tomTat: `⚠️ **Suy + Mệnh / Cục Thổ đến hạn Mão / Thìn / Tị** — thể chất dễ gặp **BIẾN
CHỨNG MÃN TÍNH**.

⚡ **Đặc trưng:**
- Bệnh liên quan đến **CÁC BỆNH MÃN TÍNH**
- **KHÓ CHẨN ĐOÁN**
- Hoặc **DAI DẲNG KHÔNG DỨT**

⚡ **Cảnh báo:**
- Cần **CẨN TRỌNG ĂN UỐNG, NGHỈ NGƠI**
- **THEO DÕI SỨC KHỎE** để giảm thiểu rủi ro lớn về hậu vận`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // SUY TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'suy-tai-menh',
    title: 'Suy tại Mệnh',
    sao: ['Suy'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `**Suy thủ Mệnh** — tính cách **ÔN HÒA DỄ THỎA HIỆP**, sa sút sau đỉnh cao.

⚡ **Đặc trưng tính cách:**
- **ÔN HÒA, DỄ THỎA HIỆP, AN PHẬN**
- **NHÚN NHƯỜNG, XUÔI THEO DÒNG ĐỜI**
- **TIẾN BIẾT LÙI** để giữ yên ổn
- **IM LẶNG QUAN SÁT THỜI CUỘC**
- Giỏi **LUỒN LÁCH** trong những tình huống cần mềm dẻo, khéo léo

⚠️ **Mặt trái:**
- Cách sống an phận → **KHÔNG TRẢI QUA THỬ THÁCH**
- Đường công danh **MỜ NHẠT**
- Thiếu **GAN LÌ, TINH THẦN CẠNH TRANH**
- Dù có **TRÍ CÓ MƯU** vẫn **KHÓ BỨT PHÁ**

⚡ **Đặc trưng truyền thống:**
- Khó **TIẾP NỐI TRUYỀN THỐNG** của bố mẹ, anh chị em
- Đến giai đoạn của mình **BẮT ĐẦU ĐI XUỐNG**

⚡ **Sức khỏe:**
- Bản thân **SUY YẾU, SA SÚT**
- **YẾU ĐUỐI VỀ THỂ XÁC**
- **BẤT ĐỊNH, HAY LO**
- Đưa đến **HAO TỔN**
- Sức khỏe bố mẹ **KHÔNG TỐT**, có bệnh trong người

⚡ **Phúc thọ:**
- Phúc kém, **KHÔNG PHÁT**
- Bản thân **KHÔNG ĐƯỢC HƯỞNG PHÚC** của tổ tiên
- Bù lại được trời phú **ĐÔI BÀN TAY KHÉO LÉO, CẨN THẬN, CÓ TÀI**

⚡ **Hợp nghề:** nghiên cứu, kỹ thuật, tỉ mỉ — không hợp nghề **ĐỐI ĐẦU,
CHIẾN TRANH**.

⚠️ **Dương Nam, Âm Nữ:** dễ bị **NGƯỜI HÔN PHỐI LẤN ÁT, CẦM QUYỀN**, đông
anh chị em, nhiều người thành đạt hơn mình.`,
  },

  {
    id: 'suy-tai-phu-mau',
    title: 'Suy tại Phụ Mẫu',
    sao: ['Suy'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Suy tại Phụ Mẫu** — cha mẹ **VẤT VẢ, HIỀN LÀNH, CẦN MẪN**.

⚡ **Đặc trưng:**
- Bản thân khi sinh ra bố mẹ thường **VẤT VẢ**
- **HIỀN LÀNH, CẦN MẪN**
- **LÀM CÔNG ĂN LƯƠNG**
- **SỨC KHỎE SUY GIẢM**

⚡ **Đối ứng:**
- Mệnh dễ thủ **ĐẾ VƯỢNG** → bản thân dễ **TO BÉO**
- Mệnh hội nhiều cát tinh → bản thân dễ **THÀNH TÀI, THÀNH ĐẠT** giúp đỡ
  bố mẹ

⚡ **Cát tinh** (Tả Hữu, Xương Khúc, Hóa Lộc/Quyền/Khoa):
- Cha mẹ từng trải qua **VINH QUANG**, có địa vị nhất định
- Về sau cuộc đời ít biến động, **DẦN MẤT TIẾNG TĂM** từng có

⚠️ **Sát tinh** (Hỏa Linh, Kình Đà):
- Cha mẹ **VẤT VẢ KHÓ KHĂN**`,
  },

  {
    id: 'suy-tai-phuc-duc',
    title: 'Suy tại Phúc Đức',
    sao: ['Suy'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `**Suy tại Phúc Đức** — đời con cháu **ÍT HƯỞNG PHÚC TỔ**.

⚡ **Đặc trưng:**
- Phúc Đức tổ tiên đến đời mình **SUY GIẢM**
- Bản thân **KHÔNG ĐƯỢC HƯỞNG NHIỀU**
- **KHÔNG ĐƯỢC NHIỀU MAY MẮN**

⚡ **Lời nhắc nhở:** "**PHÚC MỎNG THÌ PHẢI DÀY TÂM**".
- Gốc rễ tổ tiên **KHÔNG CÒN HƯNG VƯỢNG**
- Đời con cháu **KHÔNG ĐƯỢC HƯỞNG NHIỀU ÂN PHÚC**
- Hành trình sống phải **DỰA VÀO SỨC MÌNH** để phát triển

⚡ **Lời khuyên:**
- Cuộc đời phải **TÍCH LŨY, TÔN BỒI, GÂY DỰNG THÊM PHƯỚC ĐỨC**
- Cần biết **TÍCH ĐỨC HÀNH THIỆN** để bù đắp thiếu hụt
- Tạo nền tảng mới cho **HẬU VẬN VÀ ĐỜI SAU**`,
  },

  {
    id: 'suy-tai-dien-trach',
    title: 'Suy tại Điền Trạch',
    sao: ['Suy'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Suy tại Điền Trạch** — đầu tư **THUA LỖ**, đất đai hao hụt.

⚡ **Đặc trưng:**
- **GIẢM SỐ LƯỢNG** đất đai, của tiền
- Của cải dễ bị **HAO HỤT**
- Nhà cửa **XUỐNG CẤP**
- Buôn bán bất động sản dễ **THUA LỖ**
- Chuộng nơi sống **TĨNH LẶNG**, tách biệt với chốn xô bồ

⚡ **Đặc biệt:**
- Không được **THỪA KẾ** nhiều tài sản từ gia đình
- Hoặc nếu có cũng **KHÓ GIỮ ĐƯỢC LÂU DÀI**
- Điền sản nếu đem **ĐẦU TƯ DỄ GẶP VẬN RỦI**
- **BÁN KHÔNG ĐƯỢC GIÁ, MUA KHÔNG SINH LỜI**, thậm chí **LỖ VỐN**`,
  },

  {
    id: 'suy-tai-quan-loc',
    title: 'Suy tại Quan Lộc',
    sao: ['Suy'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `**Suy tại Quan Lộc** — công danh **LẬN ĐẬN**, gặp nhiều trắc trở.

⚡ **Đặc trưng:**
- Làm **GIẢM SÁNG** đường học tập, công danh
- Công việc thường **KHÔNG THUẬN LỢI**
- Nghề thường liên quan đến **CÁC NGÀNH NGHỀ ĐÃ CŨ CỔ**
- Các ngành nghề **ĐÃ KHÔNG CÒN THỊNH HÀNH**
- Các ngành nghề trước kia **TỪNG RẤT HOT NAY ĐÃ ĐI XUỐNG**

⚠️ **Hội sát bại tinh** (Hỏa Linh, Không Kiếp, Hóa Kỵ):
- Hành trình công danh **"ĐỨT GÁNH GIỮA ĐƯỜNG"**
- Sự nghiệp **DẬM CHÂN TẠI CHỖ**
- **KHÓ THĂNG TIẾN**
- Phải gắn bó với ngành nghề **NHÀM CHÁN, THIẾU ĐỘT PHÁ**

⚡ **Mặt tốt:** Tính chất "suy tàn" của Suy lại **HÓA GIẢI** khi xuất hiện cát
tinh — tức Suy đi với cát giảm cát, đi với hung lại GIẢM HUNG.`,
  },

  {
    id: 'suy-tai-no-boc',
    title: 'Suy tại Nô Bộc',
    sao: ['Suy'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Suy tại Nô Bộc** — bạn bè **GIẢM SỐ LƯỢNG VÀ CHẤT LƯỢNG**.

⚡ **Đặc trưng:**
- Giảm số lượng và chất lượng **BẠN BÈ, ĐỒNG NGHIỆP**
- Bản thân dễ có **ĐẾ VƯỢNG THỦ QUAN LỘC** → đứng đầu nên **CẤP DƯỚI KÉM
  HƠN MÌNH**
- Cũng có nghĩa: bản thân có **NHIỀU NGƯỜI CẤP DƯỚI**, **DỄ LÀ LÃNH ĐẠO**

⚠️ **Sát bại tinh hội:**
- Bạn bè **KÉM, XẤU**
- Dễ làm **HƯ MÌNH**, kéo theo **NHIỀU TAI HỌA**
- Khó có **TRI KỶ THỰC SỰ**
- Dễ gặp bạn xấu để rồi **BỊ LỢI DỤNG, SA CHÂN VÀO CHỐN THỊ PHI**

⚡ **Cát tinh hội** (Thiên Phủ, Thiên Tướng, Thái Âm sáng):
- Bạn bè sống **CÓ TÌNH CÓ NGHĨA**
- Nhưng vẫn **ÍT ĐƯỢC NHỜ CẬY**`,
  },

  {
    id: 'suy-tai-thien-di',
    title: 'Suy tại Thiên Di',
    sao: ['Suy'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Suy tại Thiên Di** — ra ngoài **KHÔNG MAY MẮN**, hiền lành an phận.

⚡ **Đặc trưng:**
- Người ra ngoài, đi xa thường **KHÔNG ĐƯỢC MAY MẮN, KÉM**
- Người ra ngoài thường **HIỀN LÀNH, AN PHẬN**
- Dễ **ĐÔNG BẠN BÈ**
- Bản thân **SỨC KHỎE HƠI YẾU**
- Hay phải **CHĂM CHÚT BẢN THÂN NHIỀU**

⚡ **Cơ hội đến muộn nhưng có quan hệ tốt:**
- Khi ra ngoài thường gặp **KHÓ KHĂN VỀ SỨC KHỎE**
- **CƠ HỘI ĐẾN MUỘN** hoặc bị người khác cản trở
- Nhờ **BẢN TÍNH THIỆN LÀNH, ĐIỀM ĐẠM, BIẾT CHỪNG MỰC**
- Vẫn dễ tạo **THIỆN CẢM** và xây dựng **MẠNG LƯỚI QUAN HỆ XÃ GIAO**`,
  },

  {
    id: 'suy-tai-tat-ach-benh-tat-nhe',
    title: 'Suy tại Tật Ách - Bệnh tật nhanh khỏi',
    sao: ['Suy'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `**Suy tại Tật Ách** — **BỆNH TẬT NHANH KHỎI** (Suy là sao **GIẢM** nên đi
với Tật là LÀM GIẢM BỆNH).

⚡ **Đặc trưng - một mặt tốt của Suy:**
- **SUY GIẢM BỆNH TẬT**
- Giảm đi sự **NGHIÊM TRỌNG** của tật bệnh và tai họa
- Dù không thể hoàn toàn **TRÁNH KHỎI** trắc trở sức khỏe
- Tổn thương thường bị **HẠN CHẾ**
- Bệnh tật dễ **THUYÊN GIẢM** hoặc **HỒI PHỤC** nhanh hơn dự đoán

⚡ **Dương Nam, Âm Nữ** đặc biệt được **ÂM PHÚC TRỢ LỰC**, ít gặp tai ương
lớn — hay ra ngoài được may mắn, có **PHƯỚC ĐỨC TỔ TIÊN PHÙ HỘ**.`,
  },

  {
    id: 'suy-tai-tai-bach',
    title: 'Suy tại Tài Bạch',
    sao: ['Suy'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Suy tại Tài Bạch** — dễ **HAO HỤT TIỀN TÀI**.

⚡ **Đặc trưng:**
- **SUY GIẢM** khả năng tài chính của đương số
- Kinh tế có phần **ĐI XUỐNG**, không được thuận lợi
- Dễ rơi vào cảnh "**TIỀN VÀO CỬA TRƯỚC, RA CỬA SAU**"
- Tiền tài tích lũy **KHÓ BỀN**
- Đầu tư hay gặp **RỦI RO, THUA LỖ**

⚠️ **Sát tinh hội** (Hóa Kỵ, Không Kiếp, Kiếp Sát):
- Tài chính càng **SUY YẾU**
- Kinh tế **BẤP BÊNH**
- Dễ rơi vào **CHUỖI HAO HỤT** nối tiếp

⚡ **Cát tinh hội** (Lộc Tồn, Hóa Lộc):
- Là người **THẬN TRỌNG**
- **TIÊU DÙNG CÓ TÍNH TOÁN**
- Thiên về **ỔN ĐỊNH** thay vì mạo hiểm`,
  },

  {
    id: 'suy-tai-tu-tuc',
    title: 'Suy tại Tử Tức',
    sao: ['Suy'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Suy tại Tử Tức** — con cái **YẾU KÉM HƠN CHA MẸ**.

⚡ **Đặc trưng:**
- Suy giảm **SỐ LƯỢNG CON CÁI**
- Con cái không được **GIỎI BẰNG CHA MẸ**
- **KHÓ TIẾP NỐI** thành tựu của cha mẹ

⚠️ **Hội nhiều sát bại tinh** (Hóa Kỵ, Đà La, Địa Kiếp):
- Bố mẹ **GIÀU CÓ NHƯNG CON PHÁ**
- Con cái sinh ra thường **YẾU KÉM** hơn cha mẹ
- Thậm chí **SA VÀO TỆ NẠN, ĂN CHƠI** hoặc **BẤT HIẾU**
- Bản mệnh **KHÔNG NHIỀU CON**, hoặc nếu đông thì **MỖI ĐỨA MỘT TÍNH**, khó
  thuận lòng`,
  },

  {
    id: 'suy-tai-phu-the',
    title: 'Suy tại Phu Thê',
    sao: ['Suy'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `**Suy tại Phu Thê** — người hôn phối **HIỀN LÀNH KÉM LANH LẸ**.

⚡ **Đặc trưng:**
- Người hôn phối **HIỀN LÀNH, CẦN MẪN**
- Nhưng **KHÔNG GIỎI GIANG**
- Sống chậm, **KÉM LANH LẸ** → dễ **BỊ ĐỘNG** trong mối quan hệ

⚡ **Đối ứng:**
- Cung Tử Tức có sao **ĐẾ VƯỢNG** hội nhiều cát tinh → dễ **SINH QUÝ TỬ**

⚠️ **Cung này hội thêm sát tinh:**
- Hôn nhân dễ gặp **SÓNG GIÓ**
- Hoặc dẫn đến cảnh **CHIA LY**

⚡ **Cát tinh hội nhiều:**
- Quan hệ vợ chồng **KHÔNG QUÁ NỒNG NHIỆT**
- Nhưng con cái **GIỎI GIANG**, giúp "**GIỮ LỬA**" cho gia đạo`,
  },

  {
    id: 'suy-tai-huynh-de',
    title: 'Suy tại Huynh Đệ',
    sao: ['Suy'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Suy tại Huynh Đệ** — anh chị em **HIỀN LÀNH VẤT VẢ**, dễ mỗi người một nơi.

⚡ **Đặc trưng:**
- Anh chị em **HIỀN LÀNH**, dễ **VẤT VẢ**
- **CÔNG DANH KHÔNG ĐƯỢC CAO**
- Sống **LẶNG LẼ, ÍT SÔI ĐỘNG**
- Tuy hiền lành, nhẫn nại, sống tình nghĩa nhưng dễ rơi vào cảnh "**LỰC BẤT
  TÒNG TÂM**"
- **KHÓ THĂNG TIẾN** trong sự nghiệp

⚠️ **Đồng cung với nhiều hung tinh:**
- Dễ gặp cảnh **CHIA LY**
- Hoặc **MỖI NGƯỜI MỘT NƠI**
- **KHÓ SUM HỌP** đông đủ`,
  },
];
