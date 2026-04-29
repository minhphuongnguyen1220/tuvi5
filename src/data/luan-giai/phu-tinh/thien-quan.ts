import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THIÊN QUAN - Hỏa, Phúc Tinh + Thiện Tinh.
 * Tên gọi đầy đủ: "THIÊN QUAN QUÝ NHÂN".
 *
 * An theo HÀNG CAN của tuổi (yếu tố THIÊN do trời sắp đặt).
 *
 * Đặc trưng riêng:
 *   - Tính ÔN HÒA, Ở ẨN, không bon chen, ít kẻ thù
 *   - Khác Thiên Phúc (xu hướng từ thiện đi giúp đỡ)
 *
 * ⚡ CẶP QUAN PHÚC - Sự giúp đỡ TỪ ĐẤNG LINH THIÊNG do Thiên ban:
 *   - Phần CHUNG đã viết tại file này với sao: ['Thiên Quan', 'Thiên Phúc']
 *   - Phúc đức = nhân quả tổ tiên + tiền kiếp tích tụ ("quả đã chín")
 *   - Phải tu tập, từ thiện thì mới gieo thêm hạt giống tốt
 */
export const luanGiai_ThienQuan: DoanLuanGiai[] = [
  {
    id: 'thien-quan-tinh-chat-chung',
    title: 'Thiên Quan - Đặc tính chung',
    sao: ['Thiên Quan'],
    doUuTien: 32,
    tomTat: `**Thiên Quan** — phụ tinh **PHÚC TINH + THIỆN TINH**, tên gọi đầy đủ:
**"THIÊN QUAN QUÝ NHÂN"**.

**Ngũ hành:** **Hỏa**.

⚡ **Đặc tính riêng:**
- Tính cách **ÔN HÒA, HÒA NHÃ**
- Thích **YÊN BÌNH, Ở ẨN**, không muốn bon chen, cạnh tranh
- Ít có kẻ thủ, người ghen ghét

⚡ **Vai trò:**
- **CỨU KHỐN PHÒ NGUY**, gia tăng phúc thọ
- **GIẢI TRỪ BỆNH TẬT, TAI HỌA, HUNG NGUY**
- Đi với ác sát tinh **KHÔNG CÓ HẠI**
- Cư cung nào cũng **CHẾ KHẮC, GIẢI TRỪ** tai nạn họa hại
- Hội với sao nào cũng **TỐT**

⚡ **Khác Thiên Phúc:** Thiên Phúc thiên về **TỪ THIỆN, ĐI GIÚP ĐỠ**, mong
đem hạnh phúc đến mọi người — Thiên Quan thiên về **AN ẨN**, hòa nhã.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // PHẦN CHUNG CẶP QUAN PHÚC
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'quan-phuc-bo-doi-tinh-chat',
    title: 'Bộ Quan Phúc - Đặc tính chung',
    sao: ['Thiên Quan', 'Thiên Phúc'],
    doUuTien: 60,
    tomTat: `**Bộ Quan Phúc** (Thiên Quan + Thiên Phúc) — **CẶP QUÝ NHÂN PHÚC THIỆN
TINH** quan trọng:
- **THIÊN QUAN QUÝ NHÂN** + **THIÊN PHÚC QUÝ NHÂN**
- An theo **HÀNG CAN** của tuổi

⚡ **Đặc tính chung:**
- **Phúc tinh, Thiện tinh** — chủ về cứu khốn phò nguy, gia tăng phúc thọ
- **GIẢI TRỪ BỆNH TẬT, TAI HỌA, HUNG NGUY**
- Đi với ác sát tinh **KHÔNG CÓ HẠI**
- Cư cung nào cũng **CHẾ KHẮC giải trừ** tai nạn
- Hội với sao nào cũng **TỐT cả**

⚡ **Yếu tố THIÊN do TRỜI SẮP ĐẶT:**
- Phúc đức không tự dưng mà có — là **NHÂN QUẢ** từ tổ tiên + tiền kiếp
- Đến kiếp này được thừa hưởng → **"QUẢ ĐÃ CHÍN"**
- Con người KHÓ NẮM GIỮ, KIỂM SOÁT — chỉ đến do **TU TẬP, LÀM PHÚC** từ
  nhiều kiếp

⚡ **Vị trí HỢP NHẤT:** Quan Phúc tọa thủ tại **Mệnh, Thân, Phúc, Thiên Di,
Tật Ách** — đắc cách nhất.

⚡ **Ý nghĩa giáo dục:** Hướng con người tới **TU TẬP, TỪ THIỆN, LÀM PHÚC**
— tiếp tục con đường tôn bồi phước đức, nếu chỉ dùng mà không gieo thêm
"hạt giống tốt" thì mãi rồi cũng sẽ hết.`,
    chiTiet: `## Bộ Quan Phúc - Triết lý "Quả đã chín" và sự tiếp nối

### Bản chất Quan Phúc khác hẳn các sao Giải khác

Trong tử vi có nhiều **SAO GIẢI** (Tứ Đức, Thiên Giải, Địa Giải, Giải Thần,
Quang Quý...) nhưng **QUAN PHÚC** đặc biệt ở chỗ:

- **Tả Hữu** = sự giúp đỡ của **NGƯỜI ĐỜI**
- **Quang Quý** = sự giúp đỡ của **ĐẤNG LINH THIÊNG TRONG HIỆN TẠI**
- **Quan Phúc** = sự giúp đỡ của **THIÊN BAN từ TỔ TIÊN + TIỀN KIẾP**

### Sao "Quả đã chín"

Quan Phúc đại diện cho phước đức **ĐÃ TÍCH TỤ TỪ NHIỀU KIẾP**:
- Tổ tiên đã hành thiện, tích đức → để lại cho con cháu
- Bản thân tiền kiếp đã tu tập → kiếp này hưởng quả

### Vì sao phải tiếp tục tu tập

Nếu chỉ DÙNG mà không tiếp tục GIEO thêm hạt giống tốt thì:
- Phước báo cũng có giới hạn — sẽ hết
- Con cháu mất chỗ dựa âm đức
- Tự bản thân tiền kiếp sau cũng nghèo phước

→ Đây là điều khiến Quan Phúc **VƯỢT TRỘI** so với các sao Giải khác:
ngoài CỨU GIẢI hiện tại, còn **NHẮC NHỞ HÀNH THIỆN cho tương lai**.

### Mức độ giải họa phụ thuộc vào TU TẬP

- Mệnh có Quan Phúc nhưng **KHÔNG TU** → giải họa hạn chế
- Mệnh có Quan Phúc + **CHỊU KHÓ TU TẬP, LÀM PHÚC TỪ SỚM** → khả năng cứu
  giải càng MẠNH, càng LỚN
- Đây là sự khác biệt độc đáo của Quan Phúc — sao Giải có "điều kiện".`,
  },

  {
    id: 'quan-phuc-phan-biet-quan-vs-phuc',
    title: 'Phân biệt Thiên Quan (ở ẩn) vs Thiên Phúc (đi giúp đỡ)',
    sao: ['Thiên Quan', 'Thiên Phúc'],
    doUuTien: 50,
    tomTat: `**Phân biệt vai trò Thiên Quan vs Thiên Phúc** trong cặp Quan Phúc:

⚡ **THIÊN QUAN** — thiên về **AN ẨN, HÒA NHÃ**:
- Tính cách **ÔN HÒA**, thích sự yên bình, ở ẩn
- **KHÔNG MUỐN BON CHEN**, cạnh tranh
- Ít có kẻ thù, người ghen ghét
- Phúc khí thiên về **GIỮ MÌNH**, an thân lập mệnh

⚡ **THIÊN PHÚC** — thiên về **TỪ THIỆN, GIÚP ĐỠ**:
- Xu hướng **TỪ THIỆN CAO**
- Thích **ĐI GIÚP ĐỠ, HỖ TRỢ** người khác
- Mong muốn **ĐEM LẠI HẠNH PHÚC** đến cho mọi người
- Phúc khí thiên về **HÀNH ĐỘNG**, lan tỏa thiện lương

⚡ **Khi đồng cung** → cả hai mặt được kết hợp: vừa giữ mình vừa giúp người.`,
  },

  {
    id: 'quan-phuc-cau-phu-tu-duc-giai-than',
    title: 'Câu phú: Thiên Nguyệt Đức Giải Thần tàng + Quan Phúc trừ hung',
    sao: ['Thiên Quan', 'Thiên Phúc'],
    doUuTien: 50,
    tomTat: `**Câu phú nổi tiếng:**
> **"Thiên Nguyệt Đức, Giải Thần tàng**
> **Cùng là Quan Phúc một làng trừ hung"**

⚡ **Ý nghĩa:** Liệt kê các sao GIẢI HỌA TRỪ HUNG mạnh:
- **Thiên Đức + Nguyệt Đức** (bộ Tứ Đức)
- **Giải Thần** (luôn đồng cung Phượng Các)
- **Thiên Quan + Thiên Phúc** (Quan Phúc)

⚡ **Quan Phúc đứng ngang hàng** với Tứ Đức và Giải Thần về khả năng giải họa
— đây là sự khẳng định địa vị của bộ này trong nhóm sao Giải.`,
  },

  {
    id: 'quan-phuc-cau-phu-quy-nhan-bat-nhap',
    title: 'Câu phú: Quý nhân bất nhập Quý hương nan giải hung tinh',
    sao: ['Thiên Quan', 'Thiên Phúc'],
    doUuTien: 55,
    tomTat: `**Câu phú quan trọng:**
> **"Quí nhân bất nhập Quí hương**
> **Nan giải hung tinh chi hoạch nhiễu"**

⚡ **Dịch nghĩa:** Mệnh, Thân có hung tinh quấy nhiễu — nếu **KHÔNG CÓ
QUÝ NHÂN HỘI HỢP** thì khó thoát được tai ương họa hại.

⚡ **Quý Nhân ở đây gồm 4 sao:**
- **Thiên Quan + Thiên Phúc** (Quan Phúc Quý Nhân)
- **Thiên Khôi + Thiên Việt** (Thiên Ất Quý Nhân)

⚡ **Ý nghĩa thực tế:**
- Mệnh xấu, Hạn xấu → cần Quý Nhân hội tụ mới giải được
- Đây là **TIÊU CHUẨN VÀNG** để xét lá số có thoát hung không
- Thiếu Quý Nhân → tai ương khó tránh dù có sao Giải khác`,
  },

  {
    id: 'quan-phuc-vi-tri-hop-cach',
    title: 'Quan Phúc tại 5 vị trí HỢP CÁCH NHẤT (Mệnh-Thân-Phúc-Di-Tật)',
    sao: ['Thiên Quan', 'Thiên Phúc'],
    cung: ['Mệnh', 'Phúc Đức', 'Thiên Di', 'Tật Ách'],
    doUuTien: 75,
    tomTat: `**Quan Phúc tọa thủ tại Mệnh, Thân, Phúc Đức, Thiên Di, Tật Ách** — 5 vị
trí **HỢP CÁCH NHẤT** của bộ này.

⚡ **Vì sao 5 cung này hợp:**
- **Mệnh** — cứu giải hung họa cho bản thân
- **Thân** — bảo vệ phần thực hành cuộc đời (Thân chủ hậu vận)
- **Phúc Đức** — tăng phúc trạch dòng họ, mộ phần
- **Thiên Di** — ra ngoài có quý nhân, gặp môi trường thiện lành
- **Tật Ách** — bệnh tật tai họa được hóa giải

⚡ **Tại các cung khác:** vẫn tốt nhưng không đắc cách như 5 cung trên.

⚡ **Mức độ cứu giải tăng:** Mệnh xấu hay Vận xấu thì Quan Phúc tại Tật vẫn
có thể chết yểu — vì Mệnh quan trọng hơn Tật. Càng tu tập, làm phúc từ sớm
thì khả năng cứu giải càng mạnh.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP NỔI TIẾNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'quan-phuc-tu-duc-luc-than-tu',
    title: 'Quan Phúc + Tứ Đức - Lòng nhân hậu nhân lên gấp bội',
    sao: ['Thiên Quan', 'Thiên Phúc'],
    ketHop: ['Long Đức'],
    doUuTien: 55,
    tomTat: `**Quan Phúc + Tứ Đức** (Thiên Đức + Nguyệt Đức + Long Đức + Phúc Đức) —
**LÒNG NHÂN HẬU NHÂN LÊN GẤP NHIỀU LẦN**.

⚡ **Đặc trưng:**
- Chủ mệnh luôn **SỐNG VÌ NGƯỜI KHÁC**
- Ưu tiên **VIỆC CHUNG hơn việc riêng**
- Sẵn sàng **HY SINH LỢI ÍCH CÁ NHÂN** để giúp đỡ những người xung quanh
- Đức độ tột đỉnh

⚡ **Đây là cách AN LÀNH NHẤT** trong tử vi cho người mệnh phúc thiện —
hội tụ tất cả sao Giải mạnh nhất.`,
  },

  {
    id: 'quan-phuc-y-tuong-ta-huu-thay-thuoc',
    title: 'Quan Phúc + Thiên Y + Tướng + Tả Hữu - Thầy thuốc mát tay',
    sao: ['Thiên Quan', 'Thiên Phúc'],
    ketHop: ['Thiên Y', 'Thiên Tướng'],
    doUuTien: 60,
    tomTat: `**Quan Phúc + Thiên Y + Thiên Tướng + Tả Phù + Hữu Bật** — **THẦY THUỐC,
LƯƠNG Y CHỮA BỆNH GIỎI MÁT TAY**.

⚡ **Phân tích bộ sao:**
- **Quan Phúc**: tâm phúc thiện, cứu người
- **Thiên Y**: chuyên môn y học
- **Thiên Tướng**: vị trí ấn (uy tín nghề)
- **Tả Hữu**: được người đời tin cậy

⚡ **Bộ này còn có biến thể: Thiên Tướng + Riêu + Y + Quan Phúc** = bác sỹ
rất mát tay — Thiên Riêu thêm sự tinh tế, nhạy bén trong chẩn bệnh.

⚡ **Hợp nghề:** thầy thuốc, bác sỹ, lương y, châm cứu, đông y.`,
  },

  {
    id: 'quan-phuc-co-nguyet-dong-luong-luong-y',
    title: 'Quan Phúc + Cơ Nguyệt Đồng Lương - Lương y công tác xã hội',
    sao: ['Thiên Quan', 'Thiên Phúc'],
    ketHop: ['Thiên Cơ', 'Thái Âm'],
    doUuTien: 60,
    tomTat: `**Quan Phúc + bộ Cơ Nguyệt Đồng Lương** — **LƯƠNG Y, NGƯỜI HẢO TÂM, PHÚC
THIỆN, CÔNG TÁC XÃ HỘI**.

⚡ **Phân tích:**
- **Cơ Nguyệt Đồng Lương** = bộ chính tinh thiện đẹp (Thiên Cơ + Thái Âm +
  Thiên Đồng + Thiên Lương)
- Thêm Quan Phúc → tăng tính phúc thiện cứu người

⚡ **Hướng nghiệp:**
- **Lương y** chữa bệnh
- **Hảo tâm** quyên tặng từ thiện
- **Công tác xã hội**, hội chữ thập đỏ
- **Nghề có tính nhân đạo cao**`,
  },

  {
    id: 'quan-phuc-tu-tham-khong-kiep-mao-dau-tu',
    title: 'Quan Phúc + Tử Tham + Không Kiếp Mão/Dậu - Đi tu cứu độ',
    sao: ['Thiên Quan', 'Thiên Phúc'],
    chi: ['Mão', 'Dậu'],
    ketHop: ['Tử Vi', 'Tham Lang'],
    doUuTien: 60,
    tomTat: `**Quan Phúc + Tử Vi + Tham Lang + Địa Không + Địa Kiếp đồng cung Mão/Dậu**
— **NGƯỜI ĐI TU, CỨU ĐỘ ĐƯỢC NHIỀU NGƯỜI**.

⚡ **Phân tích:**
- **Tử Tham Mão/Dậu** = "Đào Hoa Phạm Chủ" — thường là cách dâm dật
- **Không Kiếp** đồng cung phá Đào Hoa → biến thành **TU HÀNH, GIÁC NGỘ**
- Quan Phúc làm tăng **THIỆN TÂM, KHẢ NĂNG GIÁC NGỘ**

⚡ **Đặc trưng:**
- Là người **TU HÀNH, HỌC ĐẠO**
- Khả năng **GIÁC NGỘ CAO**
- Dùng con đường tu hành để **CỨU ĐỘ, GIÚP ĐỠ NHIỀU NGƯỜI**
- Sự hiện diện của đương số mang lại **YÊN BÌNH** cho những người bên cạnh

⚡ Đây là cách **HÓA GIẢI ĐẸP NHẤT** của Tử Tham Mão/Dậu.`,
  },

  {
    id: 'quan-phuc-ta-huu-hanh-dong',
    title: 'Quan Phúc + Tả Hữu - Lòng thiện thành hành động',
    sao: ['Thiên Quan', 'Thiên Phúc'],
    ketHop: ['Tả Phù', 'Hữu Bật'],
    doUuTien: 50,
    tomTat: `**Quan Phúc + Tả Phù + Hữu Bật** — **LÒNG THIỆN BIẾN THÀNH HÀNH ĐỘNG CỤ THỂ**.

⚡ **Đặc trưng:**
- Tích cực tham gia **HOẠT ĐỘNG XÃ HỘI, TỪ THIỆN**
- Có khả năng **QUY TỤ, KÊU GỌI** mọi người cùng làm việc tốt
- Lòng thiện không chỉ là cảm xúc mà thành **HÀNH ĐỘNG cụ thể**

⚡ **Phân tích:** Tả Hữu là "trợ tinh" — biến tính chất bên trong (Quan Phúc
phúc thiện) thành thực hành bên ngoài.`,
  },

  {
    id: 'quan-phuc-xuong-khuc-cam-hoa',
    title: 'Quan Phúc + Văn Xương + Văn Khúc - Cảm hóa người',
    sao: ['Thiên Quan', 'Thiên Phúc'],
    ketHop: ['Văn Xương', 'Văn Khúc'],
    doUuTien: 50,
    tomTat: `**Quan Phúc + Văn Xương + Văn Khúc** — **KIẾN THỨC UYÊN THÂM, LỜI NÓI CÓ
SỨC THUYẾT PHỤC**.

⚡ **Đặc trưng:**
- Có **KIẾN THỨC SÂU RỘNG**
- **LỜI NÓI THUYẾT PHỤC**
- Dùng sự thông minh, hiểu biết để **KHUYÊN RĂN, CẢM HÓA** người khác
- Hướng đến những điều **THIỆN LÀNH**

⚡ **Hợp nghề:**
- Diễn giả, giáo viên, tu sỹ giảng pháp
- Tác giả sách self-help, sách đạo
- Người truyền cảm hứng thiện lương`,
  },

  {
    id: 'quan-phuc-quang-quy-duong-anh-em-nuoi',
    title: 'Quan Phúc + Quang Quý + Dưỡng - Anh chị em nuôi (Huynh Đệ)',
    sao: ['Thiên Quan', 'Thiên Phúc'],
    cung: ['Huynh Đệ'],
    ketHop: ['Ân Quang', 'Thiên Quý'],
    doUuTien: 55,
    tomTat: `**Quan Phúc + Quang Quý + Dưỡng tại Huynh Đệ** — **DỄ CÓ ANH CHỊ EM NUÔI,
KẾT NGHĨA**.

⚡ **Phân tích bộ sao:**
- **Quan Phúc**: thiện duyên, tâm linh
- **Quang Quý**: phúc tinh quý nhân
- **Dưỡng** (sao trong Vòng Tràng Sinh): nuôi dưỡng

⚡ **Đặc trưng:**
- Tình thân **KHĂNG KHÍT** chẳng khác gì máu mủ
- Anh chị em ruột + nuôi cùng tu tập, làm thiện
- Đại gia đình lan tỏa năng lượng tốt lành`,
  },

  {
    id: 'quan-phuc-hinh-hao-ky-dong-hac',
    title: 'Quan Phúc + Hình Hao Kỵ + Đồng hãm - Đồng bóng',
    sao: ['Thiên Quan', 'Thiên Phúc'],
    ketHop: ['Thiên Hình', 'Hóa Kỵ'],
    doUuTien: 45,
    tomTat: `**Quan Phúc + Thiên Hình + Đại Hao + Hóa Kỵ + Thiên Đồng hãm** — người
**HAY THAY ĐỔI TÍNH TÌNH, ƯA THÍCH ĐỒNG BÓNG KHÔNG CHÁN**.

⚡ **Phân tích:**
- Quan Phúc thiện duyên + sát tinh phá → biến tâm linh thành **ĐỒNG BÓNG**
- Đặc biệt khi hội với **THIÊN ĐỒNG HÃM** → mê tín, thay đổi vô thường

⚡ **Cảnh báo:**
- Dễ bị lừa bởi đồng cô, đồng cậu giả
- Tâm trí bất ổn, dễ tin vào tà phái
- Cần học hỏi đúng phái chính thống`,
  },

  {
    id: 'quan-phuc-vao-han',
    title: 'Quan Phúc vào hạn - Hạn cần giải',
    sao: ['Thiên Quan', 'Thiên Phúc'],
    doUuTien: 50,
    tomTat: `**Quan Phúc vào hạn** — hai mặt cần lưu ý.

⚡ **Mặt tích cực:**
- Hạn thích **ĐI VÀO TU TẬP**
- **LÀM VIỆC THIỆN NGUYỆN, TỪ THIỆN**
- Tâm trí hướng về đạo nghĩa

⚡ **Mặt cảnh báo:**
- Hạn dễ có **VƯỚNG MẮC, TAI HỌA** nên mới có Quan Phúc đi cùng để hóa giải
- Quan Phúc thường xuất hiện ở những hạn cần **CỨU GIẢI**

⚡ **Cách dụng:**
- Cần **TU TẬP, CHĂM LÀM PHÚC** trong giai đoạn này
- Khả năng hóa giải sẽ **MẠNH HƠN** khi tâm hướng thiện
- Nếu không tu thì Quan Phúc chỉ giải được phần nào`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // THIÊN QUAN TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-quan-tai-menh',
    title: 'Thiên Quan tại Mệnh - HỢP CÁCH',
    sao: ['Thiên Quan'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `**Thiên Quan thủ Mệnh** — vị trí **HỢP CÁCH**, mang trong mình **LÁ BÙA
BẢO VỆ** giảm trừ tai họa, hóa giải bệnh tật.

⚡ **Tướng hình:**
- Diện mạo **DỄ NHÌN, HIỀN HẬU, ÔN HÒA**
- **ĐÔI MẮT SÁNG**, hiền hòa
- **ĐÔI TAI DÀY, DÁI TAI DÀI** phúc hậu
- Cử chỉ **TỪ TỐN, ĐIỀM ĐẠM, NHẸ NHÀNG** (không vội vàng hấp tấp)

⚡ **Tính cách:**
- **Thiện tâm, nhân hậu, hiền lành, đức độ**
- Hay **LÀM VIỆC THIỆN**, cứu giúp người
- **TÍN NGƯỠNG CAO**, tin tưởng nơi Phật Trời
- Có **CĂN DUYÊN TU TẬP**, có thể đắc quả
- Tính cách **ÔN HÒA, Ở ẨN**, không bon chen → ít kẻ thù

⚡ **Phúc thọ:**
- **CỨU GIẢI tai họa, giảm hung nguy, giảm bệnh tật**
- Càng **TU NHÂN TÍCH ĐỨC** → phước thọ càng tăng
- Tác dụng **NGANG TỨ ĐỨC, GIẢI THẦN** trong giải họa`,
  },

  {
    id: 'thien-quan-tai-phu-mau',
    title: 'Thiên Quan tại Phụ Mẫu',
    sao: ['Thiên Quan'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Thiên Quan tại Phụ Mẫu** — cha mẹ **LỄ NGHĨA, HIỀN HẬU**, hay từ thiện.

⚡ **Đặc trưng:**
- Cha mẹ là người **HIỀN HẬU, TỪ THIỆN**, được mọi người **QUÝ MẾN, KÍNH
  TRỌNG**
- Người **NGỘ ĐẠO**, thích tìm hiểu **PHẬT PHÁP, TÂM LINH**, tin nhân quả

⚡ **Cát tinh hội (Tả Phù - Hữu Bật):**
- Cha mẹ **HIỀN TỪ, CHUẨN MỰC**
- Sống có nghĩa có tình → được mọi người quý trọng
- Tin nhân quả, có duyên tìm hiểu **ĐẠO PHÁP**
- Tích **ÂM ĐỨC** để lại phúc phần cho con cháu

⚡ **Đương số được hưởng:**
- **PHÚC LỘC** cha mẹ để lại bằng **ÂM ĐỨC** hay **DƯƠNG ĐỨC**
- Sinh ra trong sự **GIÁO DỤC ĐÚNG ĐẮN, HƯỚNG THIỆN**`,
  },

  {
    id: 'thien-quan-tai-phuc-duc',
    title: 'Thiên Quan tại Phúc Đức - HỢP CÁCH',
    sao: ['Thiên Quan'],
    cung: ['Phúc Đức'],
    doUuTien: 80,
    tomTat: `**Thiên Quan thủ Phúc Đức** — vị trí **HỢP CÁCH**, ông bà tổ tiên đa số là
người **LƯƠNG THIỆN, CÓ CĂN TU HÀNH**.

⚡ **Đặc trưng:**
- Để lại **PHÚC NỀN BỀN VỮNG** cho con cháu
- Phần mộ thường được an táng ở **NƠI ĐẸP, YÊN ỔN**
- Đôi khi gắn với **CHÙA CHIỀN** hoặc gửi cốt tại nơi cửa Phật

⚡ **Bản mệnh được hưởng:**
- **PHÚC ĐỨC, MAY MẮN** của tổ tiên ông bà để lại
- Có nhiều việc phải tiếp tục **TÔN BỒI**
- Có **CĂN DUYÊN TU TẬP** tại kiếp này

⚡ **Cát tinh hội (Văn Xương - Văn Khúc, Tam Thai - Bát Tọa, Hóa Lộc, Hóa
Quyền):**
- Càng khẳng định dòng họ có người **ĐỖ ĐẠT**
- **DANH THƠM LƯU TRUYỀN**
- Phúc ấm lan tỏa đến đời sau`,
  },

  {
    id: 'thien-quan-tai-dien-trach',
    title: 'Thiên Quan tại Điền Trạch',
    sao: ['Thiên Quan'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Thiên Quan tại Điền Trạch** — ở nhà có người **THÍCH TU TẬP, RƯỚC PHẬT
VỀ THỜ**.

⚡ **Đặc trưng:**
- Nhà cửa **SẠCH SẼ, GỌN GÀNG, NGĂN NẮP, QUI CỦ**
- Sống ôn hòa, hay giúp đỡ hàng xóm láng giềng → được nhiều người **QUÝ MẾN**
- Cuộc sống **HÔN NHÂN GIA ĐÌNH HẠNH PHÚC, BỀN LÂU**
- Mọi thành viên **HÒA THUẬN, LỄ NGHĨA, CÓ PHÉP TẮC**

⚡ **Cát tinh hội (Thiên Phúc, Long Trì - Phượng Các):**
- Nhà cửa **KHANG TRANG, NGĂN NẮP**
- Có **BÀN THỜ PHẬT** hoặc rước tượng Phật về thờ phụng
- Gia đạo **ÊM ẤM, THUẬN HÒA**

⚡ **Tâm tính:**
- Tấm lòng **RỘNG RÃI**
- Sẵn sàng **HIẾN ĐẤT ĐAI** cho việc nghĩa
- Đứng ra **LẬP HỘI TỪ THIỆN**
- Coi việc tích phúc như bổn phận tự nhiên`,
  },

  {
    id: 'thien-quan-tai-quan-loc',
    title: 'Thiên Quan tại Quan Lộc',
    sao: ['Thiên Quan'],
    cung: ['Quan Lộc'],
    doUuTien: 75,
    tomTat: `**Thiên Quan tại Quan Lộc** — trong công việc hay **GIÚP ĐỠ NGƯỜI KHÁC**
và cũng được mọi người giúp đỡ lại.

⚡ **Hướng nghiệp:**
- Công việc có **TÍNH NHÂN ĐẠO CAO**:
  - **Hội chữ thập đỏ, thiện nguyện, tổ chức cứu trợ**
  - **Thầy giáo, bác sỹ**
- Hoặc chí ít là người **LƯƠNG THIỆN**, không cạnh tranh, chơi xấu ai

⚡ **Cát tinh hội (Thiên Cơ - Thiên Lương, Tử Vi, Thiên Đồng):**
- Dễ liên quan đến **TU HÀNH**
- Làm trong bang **HỘ TRÌ TAM BẢO**
- Hoặc đi tu, làm việc trong **CƠ QUAN TỪ THIỆN, NHÂN SINH**

⚡ **Vận may:** Trong công danh, sự nghiệp, học tập hay được **MAY MẮN, CÓ
NGƯỜI GIÚP ĐỠ** — mức độ tùy thuộc vào **PHÚC PHẦN sẵn có** và những "nhân
tốt" mà bản thân đã gieo.`,
  },

  {
    id: 'thien-quan-tai-no-boc',
    title: 'Thiên Quan tại Nô Bộc',
    sao: ['Thiên Quan'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Thiên Quan tại Nô Bộc** — có **DUYÊN CHƠI VỚI BẠN BÈ TỐT** hoặc các
**BẠN ĐỒNG TU**.

⚡ **Đặc trưng:**
- Cơ hội **HỌC HỎI CÁC BẬC CHÂN TU ĐẮC ĐẠO**
- Bạn bè, đồng nghiệp, cấp dưới là người **GIẢN DỊ, TỐT BỤNG, TIN CẬY**
- Có thể **GIÚP ĐỠ, HỖ TRỢ NHIỀU** được cho đương số

⚡ **Hoạt động xã hội:**
- Hay tham gia **CỨU TẾ, HỖ TRỢ CHỮ THẬP ĐỎ**
- Cùng bạn bè làm các hoạt động cộng đồng

⚡ **Vai trò bạn bè:**
- Vừa là **TRI KỶ**
- Vừa là **KIM CHỈ NAM** trong hành trình sống tâm linh`,
  },

  {
    id: 'thien-quan-tai-thien-di',
    title: 'Thiên Quan tại Thiên Di - HỢP CÁCH',
    sao: ['Thiên Quan'],
    cung: ['Thiên Di'],
    doUuTien: 78,
    tomTat: `**Thiên Quan thủ Thiên Di** — vị trí **HỢP CÁCH**, ra ngoài hay **LÀM PHÚC,
GIÚP ĐỠ** người khác.

⚡ **Tính cách ra ngoài:**
- **ĐIỀM ĐẠM, NHẸ NHÀNG, KHOAN DUNG**
- Không gây hận thù với ai bao giờ

⚡ **Đường đời:**
- Hay gặp **QUÝ NHÂN GIÚP ĐỠ**
- Dễ gặp cơ may đến **NHỮNG NƠI AN LÀNH**
- Thường gặp **THUẬN LỢI TỐT ĐẸP**
- Dễ gặp **THIÊN THỜI ĐỊA LỢI NHÂN HÒA**

⚡ **Môi trường:**
- Hay ở trong môi trường **NGƯỜI THIỆN LÀNH, THÍCH TU TẬP**
- Tâm trí lúc nào cũng **NHẸ NHÀNG, AN YÊN**
- Ít gặp sự cạnh tranh, kèn cựa

⚡ **Khi gặp khó khăn:**
- Chỉ cần **GIỮ TÂM SÁNG** và hành thiện → tai ương được hóa giải
- May mắn đến vào lúc then chốt, "GẶP THẦY GẶP THUỐC"`,
  },

  {
    id: 'thien-quan-tai-tat-ach',
    title: 'Thiên Quan tại Tật Ách - HỢP CÁCH',
    sao: ['Thiên Quan'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `**Thiên Quan thủ Tật Ách** — mang ý nghĩa **CỨU GIẢI MẠNH MẼ**.

⚡ **Đặc trưng:**
- Khi hoạn nạn hoặc gặp cảnh hiểm nguy → thường được **THẦN LINH PHÙ HỘ**
  hoặc **QUÝ NHÂN TRỢ GIÚP**
- Người có thói quen **TÍCH ĐỨC HÀNH THIỆN** càng dễ vượt qua
- Bệnh tật, tai ương → **BIẾN HUNG THÀNH CÁT**

⚡ **Hình tượng đặc biệt - tang sự:**
- Trong **TANG SỰ NGÀY CHẾT** có:
  - **THẦY CHÙA ĐƯA LINH**
  - **DÂU THẢO RỂ HIỀN** đưa tiễn
  - **CHÙA CHIỀN, SƯ TĂNG HỘ NIỆM**
- Quan Phúc có hình tượng là **NGƯỜI TU HÀNH, NHÀ SƯ, TU SỸ**
- Tạo nên sự **THANH THẢN** cho hành trình cuối đời

⚠️ **Cảnh báo:** Tật Ách KHÔNG MẠNH BẰNG MỆNH — nếu Mệnh xấu hay Vận xấu
thì vẫn có thể chết yểu. Càng tu tập, làm phúc từ sớm thì khả năng cứu giải
càng mạnh.`,
  },

  {
    id: 'thien-quan-tai-tai-bach',
    title: 'Thiên Quan tại Tài Bạch',
    sao: ['Thiên Quan'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Thiên Quan tại Tài Bạch** — người có **TÂM HƯỚNG THIỆN** trong việc sử
dụng của cải.

⚡ **Đặc trưng:**
- Hay **DÙNG TIỀN BỐ THÍ, CÚNG DƯỜNG**
- Sử dụng tiền bạc vào mục đích **LƯƠNG THIỆN, XÃ HỘI**
- Có thể **CHO TIỀN CỦA**, đôi khi cả gia tài sự nghiệp để làm từ thiện
- Coi tiền bạc như **PHƯƠNG TIỆN GIEO PHÚC** → chẳng nề hà khi cho đi

⚡ **"Thí Vô Úy" - từ thiện từ tâm:**
- Là những người dám bố thí **MÃNH ĐẤT CÔNG VIÊN, THƯ VIỆN**...
- Phải có Quan Phúc trong **MỆNH-THÂN và TÀI-ĐIỀN** (xung hoặc giáp hợp)
- **KHÔNG CẦN DANH HÃO**, không cần công trạng

⚡ **Cách kiếm tiền:**
- **LƯƠNG THIỆN, KHÔNG GIAN DỐI**
- Không ưa cạnh tranh, kèn cựa
- "Ở hiền gặp lành" → đôi khi may mắn về tiền bạc, được người giúp đỡ
- Đặc biệt **Quan + Phúc + Giải Thần đồng cung** → giải ách, mở lối quý nhân`,
  },

  {
    id: 'thien-quan-tai-tu-tuc',
    title: 'Thiên Quan tại Tử Tức',
    sao: ['Thiên Quan'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Thiên Quan tại Tử Tức** — con cái **HIỀN LÀNH, HIẾU THUẬN**, sau lớn
thành người **TỬ TẾ**.

⚡ **Đặc trưng:**
- Về già được con cái **HIẾU THUẬN CHĂM LO PHỤNG DƯỠNG**
- Con cái có đứa **THÍCH TU TẬP, TU HÀNH**
- Hay thích **LÀM THIỆN NGUYỆN, CỨU TRỢ** hoàn cảnh khó khăn

⚡ **Sát bại tinh hội:**
- **KHÓ CÓ CON**, phải đi **CẦU TỰ** mới có
- Hội thêm đất **DƯỠNG** → dễ có **CON NUÔI**
- Như sự bù đắp của trời cho duyên làm cha mẹ`,
  },

  {
    id: 'thien-quan-tai-phu-the',
    title: 'Thiên Quan tại Phu Thê - Hóa giải mọi xung khắc',
    sao: ['Thiên Quan'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `**Thiên Quan tại Phu Thê** — bạn đời **HIỀN LÀNH, TỐT TÍNH, CÓ LÒNG TỪ
THIỆN** — chí ít là người chồng/vợ đã có **DUYÊN LÀNH TỪ TIỀN KIẾP**.

⚡ **Đặc trưng:**
- Vợ chồng **HÒA HỢP, BIẾT NHƯỜNG NHỊN**
- Sống với nhau **CÓ TÌNH NGHĨA, BỀN LÂU**
- Người hôn phối là người **TÍN TÂM**, thích tu tập, tìm hiểu tâm linh, tin
  nhân quả

⚡ **Khả năng HÓA GIẢI ĐẶC BIỆT:**
- Dù cung Phu Thê có **ĐÀO HOA, KHÔNG KIẾP, THIÊN HÌNH** vẫn thường **AN
  LÀNH KHÔNG ĐỔ VỠ** và **KHÔNG ĐAU KHỔ**
- Dù gặp khó khăn cũng có **QUÝ NHÂN GIÚP ĐỠ** hay giải bày
- Đây là một trong **KHẢ NĂNG HÓA GIẢI MẠNH NHẤT** của Quan Phúc`,
  },

  {
    id: 'thien-quan-tai-huynh-de',
    title: 'Thiên Quan tại Huynh Đệ',
    sao: ['Thiên Quan'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Thiên Quan tại Huynh Đệ** — anh chị em **HÒA THUẬN, TÌNH NGHĨA**, luôn
giúp đỡ nhau **TẬN TÌNH VÔ ĐIỀU KIỆN**.

⚡ **Đặc trưng:**
- Anh chị em có người **THÍCH TU TẬP, TÌM HIỂU PHẬT PHÁP**
- Lan tỏa năng lượng tốt lành đến cả gia đình

⚡ **Cát tinh hội (Tả Phù - Hữu Bật):**
- Anh chị em **GẮN BÓ, ĐỠ NÂNG NHAU, KEO SƠN**
- Trong số đó có người **SỚM BÉN DUYÊN TU TẬP**

⚡ **Đồng cung Quang Quý hoặc Dưỡng:**
- Dễ có **ANH CHỊ EM NUÔI**
- Tình thân **KHĂNG KHÍT** chẳng khác gì máu mủ`,
  },
];
