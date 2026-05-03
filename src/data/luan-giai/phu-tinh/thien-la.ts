import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THIÊN LA - Thổ, Ám Tinh.
 *
 * Vị trí: LUÔN cố định tại cung THÌN.
 * Cùng cặp với ĐỊA VÕNG (cố định Tuất) → bộ THIÊN LA - ĐỊA VÕNG = "LƯỚI TRỜI".
 *
 * Hóa khí: ÁM TINH ("lưới trời lồng lộng, tuy thưa mà khó thoát").
 * Đặc tính: TÙ HÃM, KHỐN ĐỐN, TRỞ NGẠI, KHÓ KHĂN, RÀNG BUỘC NGHIỆP DUYÊN.
 *
 * Phần CHUNG cặp Thiên La - Địa Võng (hạn cạm bẫy + đi với Lộc/Hình/Liêm)
 * viết tại file `dia-vong.ts`.
 */
export const luanGiai_ThienLa: DoanLuanGiai[] = [
  {
    id: 'thien-la-tinh-chat-chung',
    title: 'Thiên La - Đặc tính chung',
    sao: ['Thiên La'],
    doUuTien: 32,
    tomTat: `**Thiên La** — phụ tinh **ÁM TINH**, mang ý nghĩa **TRÓI BUỘC, TRỞ NGẠI, KHỐN
ĐỐN**.

**Ngũ hành:** **Thổ**.

**Hóa khí:** **Ám Tinh**.

⚡ **Vị trí:** **LUÔN cố định tại cung THÌN**.

⚡ **Hình tượng:** **LƯỚI TRỜI lồng lộng, tuy thưa mà khó thoát**.

⚡ **Đặc tính:**
- **TÙ HÃM, KHỐN ĐỐN, TRỞ NGẠI, KHÓ KHĂN**
- Vòng **KIỀM TỎA** quanh chủ mệnh
- Cảm giác bị **KÌM HÃM**
- Gặp nhiều khó khăn trong **CÔNG VIỆC và CUỘC SỐNG**

⚡ **Bản chất hai mặt:**
- Làm việc **CHÍNH NGHĨA** → dù khởi đầu khó cũng được **ÔNG TRỜI TRỢ GIÚP**,
  cuối cùng **GẶT HÁI THÀNH QUẢ**
- Làm việc **TRÁI ĐẠO** → "**SA CHÂN VÀO BÙN LẦY**", càng vùng vẫy càng mắc sâu

⚡ **Tình duyên:**
- Một khi đã yêu thì **KHÓ DỨT**
- Rời bỏ rồi vẫn **ĐAU ĐÁU NHỚ THƯƠNG**

⚡ **Phúc thọ:**
- Dễ bị **BỆNH LÂU DÀI**
- Phải **CHẠY CHỮA KHẮP NƠI**
- Lạc vào **MÊ TÍN DỊ ĐOAN** khiến "**TIỀN MẤT TẬT MANG**"

⚡ **Tài lộc:**
- Việc kiếm tiền **KHÓ KHĂN**
- Lúc nào cũng có "**LƯỚI TRỜI**" giăng ra chờ sập bẫy`,
  },

  {
    id: 'thien-la-co-dinh-thin',
    title: 'Thiên La - Cố định cung Thìn',
    sao: ['Thiên La'],
    chi: ['Thìn'],
    doUuTien: 35,
    tomTat: `**Thiên La** luôn **CỐ ĐỊNH tại cung Thìn**.

⚡ **Quy luật vị trí:**
- Thiên La cố định tại **Thìn = LƯỚI TRỜI**
- Đối cung là vị trí Địa Võng (Lưới Đất) — tạo thành **TRỤC LƯỚI TRỜI**
- Đây là **vị trí ĐẶC BIỆT** chứa nhiều ràng buộc, nghiệp duyên`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CUNG MỆNH
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-la-menh-rang-buoc-be-tac',
    title: 'Thiên La tại Mệnh - Ràng buộc bế tắc',
    sao: ['Thiên La'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `**Thiên La tại Mệnh** — chủ sự **RÀNG BUỘC, BẾ TẮC**.

⚡ **Đặc trưng:**
- **THÔNG MINH, có TÀI XOAY XỞ, TÍNH TOÁN GIỎI**
- Công việc lại hay bị **CẢN TRỞ, RÀNG BUỘC, VƯỚNG RẮC RỐI**

⚡ **Nguyên nhân (quan trọng):**
- Trở ngại **KHÔNG hẳn do NGOẠI CẢNH**
- Mà chính từ **NỘI TÂM** đương số
- Có xu hướng **SUY NGHĨ NGƯỢC VỚI QUY LUẬT TỰ NHIÊN**
- **HÀNH ĐỘNG TRÁI ĐẠO LÝ**
- Thấy mình **ĐEN ĐỦI, ÔNG TRỜI KHÔNG THƯƠNG**
- Thực chất đang **TỰ TẠO RA CÁI BẪY** cho mình

⚡ **Ví như chiếc lưới trời:**
- Dễ **SA VÀO CÁM DỖ, PHẠM SAI LẦM**`,
  },

  {
    id: 'thien-la-menh-sat-bai-tinh-lao-ly',
    title: 'Thiên La + sát bại tinh tại Mệnh - Lao lý tố tụng',
    sao: ['Thiên La'],
    cung: ['Mệnh'],
    ketHop: ['Kình Dương', 'Đà La', 'Thiên Hình', 'Thiên Khốc', 'Thiên Hư', 'Tang Môn', 'Bạch Hổ', 'Đại Hao', 'Tiểu Hao'],
    doUuTien: 60,
    tomTat: `**Thiên La + Kình Đà + Thiên Hình + Khốc Hư Tang Bạch Hổ Song Hao tại Mệnh**
— "**SA CHÂN VÀO BÙN LẦY**".

⚡ **Đặc trưng:**
- Vướng vào **LAO LÝ, TỐ TỤNG**
- Thậm chí "**THÂN BẠI DANH LIỆT**"
- Càng vùng vẫy càng **MẮC SÂU**
- Cảnh báo nguy hiểm cao về pháp luật`,
  },

  {
    id: 'thien-la-menh-cat-tinh-trach-nhiem',
    title: 'Thiên La + cát tinh tại Mệnh - Trách nhiệm nghĩa vụ',
    sao: ['Thiên La'],
    cung: ['Mệnh'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Ân Quang', 'Thiên Quý', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 65,
    tomTat: `**Thiên La + Tả Hữu + Quang Quý + Khôi Việt tại Mệnh** — "**TRONG HỌA CÓ
PHÚC**".

⚡ **Đặc trưng:**
- Ràng buộc **HÓA THÀNH TRÁCH NHIỆM, NGHĨA VỤ**
- Giúp chủ mệnh sống **ĐÚNG ĐẮN, CÓ ĐẠO NGHĨA**
- **BIẾT TRƯỚC BIẾT SAU**
- Lưới trời thành **VÒNG TAY CHE CHỞ**`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC CUNG KHÁC
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-la-phu-mau-duyen-no',
    title: 'Thiên La tại Phụ Mẫu - Duyên nợ cha mẹ',
    sao: ['Thiên La'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Thiên La tại Phụ Mẫu** — nhân duyên gắn chặt với cha mẹ.

⚡ **Đặc trưng:**
- "**ĐỜI CHA ĂN MẶN, ĐỜI CON KHÁT NƯỚC**"
- Có cát tinh đi cùng → là **TRÁCH NHIỆM, ƠN NGHĨA TRUYỀN ĐỜI**
- Con cái được thừa hưởng **PHÚC ẤM, GIA SẢN** hoặc **DÌU DẮT của GIA TIÊN**

⚡ **Đồng cung Kình Dương, Đà La, Không Kiếp, Hỏa Linh:**
- Dễ xảy ra cảnh **XUNG KHẮC, BẠO LỰC GIA ĐÌNH**
- Con cái nên **RỜI XA** bố mẹ từ sớm để phát triển tốt hơn`,
  },

  {
    id: 'thien-la-phuc-duc-nghiep-dong-toc',
    title: 'Thiên La tại Phúc Đức - Trói buộc nghiệp dòng tộc',
    sao: ['Thiên La'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `**Thiên La tại Phúc Đức** — tượng trưng **CÁI LƯỚI TRÓI BUỘC vào NGHIỆP HỌ
HÀNG**.

⚡ **Đặc trưng:**
- Khó **THOÁT KHỎI ẢNH HƯỞNG DÒNG TỘC**
- Phải **GÁNH NGHIỆP TỔ TIÊN**

⚡ **Đi cùng Kình Đà, Không Kiếp, Hỏa Linh:**
- Càng **ỨNG NGHIỆM** mạnh
- Nghiệp dòng tộc **NẶNG NỀ**

⚡ **Đi cùng cát tinh:**
- Nghiệp **NHẸ HÓA THÀNH PHÚC**
- Vẫn giữ được **GẮN BÓ GIA TỘC**`,
  },

  {
    id: 'thien-la-dien-trach-song-gio-dat-dai',
    title: 'Thiên La tại Điền Trạch - Sóng gió đất đai',
    sao: ['Thiên La'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Thiên La tại Điền Trạch** — đương số gặp nhiều **SÓNG GIÓ liên quan ĐẤT
ĐAI, NHÀ CỬA**.

⚡ **Hội cùng cát tinh - hóa giải:**
- Có khả năng **HÓA GIẢI NGHIỆP**
- Biết **CHĂM LO DỌN DẸP** nhà cửa
- Tạo môi trường sống **TỐT LÀNH**
- Vận nhà **YÊN ỔN**, đời sống **HƯNG THỊNH**`,
  },

  {
    id: 'thien-la-dien-trach-hoa-tinh',
    title: '⚠️ Thiên La + Hỏa Tinh tại Điền Trạch - cháy nổ',
    sao: ['Thiên La'],
    ketHop: ['Hỏa Tinh'],
    cung: ['Điền Trạch'],
    doUuTien: 70,
    tomTat: `⚠️ **Thiên La + Hỏa Tinh tại Điền Trạch:** dễ xảy ra **CHÁY NỔ**.`,
  },

  {
    id: 'thien-la-dien-trach-linh-tinh',
    title: '⚠️ Thiên La + Linh Tinh tại Điền Trạch - cháy nổ',
    sao: ['Thiên La'],
    ketHop: ['Linh Tinh'],
    cung: ['Điền Trạch'],
    doUuTien: 70,
    tomTat: `⚠️ **Thiên La + Linh Tinh tại Điền Trạch:** dễ xảy ra **CHÁY NỔ**.`,
  },

  {
    id: 'thien-la-dien-trach-dia-khong',
    title: '⚠️ Thiên La + Địa Không tại Điền Trạch - bão lũ thiên tai',
    sao: ['Thiên La'],
    ketHop: ['Địa Không'],
    cung: ['Điền Trạch'],
    doUuTien: 70,
    tomTat: `⚠️ **Thiên La + Địa Không tại Điền Trạch:** đề phòng **BÃO LŨ,
THIÊN TAI** hoặc cảnh **MẮC KẸT NGAY TRONG NHÀ**.`,
  },

  {
    id: 'thien-la-dien-trach-dia-kiep',
    title: '⚠️ Thiên La + Địa Kiếp tại Điền Trạch - bão lũ thiên tai',
    sao: ['Thiên La'],
    ketHop: ['Địa Kiếp'],
    cung: ['Điền Trạch'],
    doUuTien: 70,
    tomTat: `⚠️ **Thiên La + Địa Kiếp tại Điền Trạch:** đề phòng **BÃO LŨ,
THIÊN TAI** hoặc cảnh **MẮC KẸT NGAY TRONG NHÀ**.`,
  },

  {
    id: 'thien-la-quan-loc-trong-trach-troi-ban',
    title: 'Thiên La tại Quan Lộc - Trọng trách trời ban',
    sao: ['Thiên La'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `**Thiên La tại Quan Lộc** — chính là "**TRỌNG TRÁCH TRỜI BAN**".

⚡ **Đặc trưng:**
- Làm việc **CHÍNH NGHĨA** → khởi đầu khó nhưng được **ÔNG TRỜI TRỢ GIÚP**
- Cuối cùng **GẶT HÁI THÀNH QUẢ**
- Càng đúng khi kết hợp **TẢ HỮU - KHÔI VIỆT**

⚡ **Cảnh báo:**
- Gặp **KÌNH ĐÀ - HÌNH - TANG MÔN**:
  - Dễ bị cuốn vào công việc **PHI PHÁP, TRÁI ĐẠO LÝ**
  - "**MỘT BƯỚC LẦM, MUÔN ĐỜI DẠI**"
  - Khó có thể **QUAY ĐẦU**`,
  },

  {
    id: 'thien-la-quan-loc-ta-huu-khoi-viet',
    title: 'Thiên La + Tả Phù/Hữu Bật/Thiên Khôi/Thiên Việt tại Quan Lộc - Trợ lực thành công',
    sao: ['Thiên La'],
    cung: ['Quan Lộc'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 70,
    tomTat: `**Thiên La + Tả Hữu + Khôi Việt tại Quan Lộc** — trọng trách trời ban được
**TRỢ LỰC**.

⚡ **Đặc trưng:**
- Làm chính nghĩa → khởi đầu khó cũng **THÀNH CÔNG**
- Có **QUÝ NHÂN PHÒ TÁ**
- **ĐƯỢC ĐỀN ĐÁP** xứng đáng`,
  },

  {
    id: 'thien-la-no-boc-vuong-hoa-vi-ban',
    title: 'Thiên La tại Nô Bộc - Vướng họa vì bạn',
    sao: ['Thiên La'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Thiên La tại Nô Bộc** — chủ mệnh dễ **VƯỚNG HỌA VÌ BẠN BÈ**.

⚡ **Cảnh báo:**
- Kết giao **LẦM BẠN** → bị **LỢI DỤNG** làm việc sai trái
- Từ **VÔ TÌNH thành ĐỒNG PHẠM**
- Đặc biệt khi gặp **ĐỊA KIẾP, PHỤC BINH, SONG HAO, ĐÀ LA**

⚡ **Hội cùng cát tinh:**
- Bạn bè trở thành **SỰ RÀNG BUỘC TỐT**
- Đôi bên **HỖ TRỢ NHAU**
- Mang **LỢI ÍCH THIẾT THỰC**`,
  },

  {
    id: 'thien-la-thien-di-tien-thoai-luong-nan',
    title: 'Thiên La tại Thiên Di - Tiến thoái lưỡng nan',
    sao: ['Thiên La'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Thiên La tại Thiên Di** — hình tượng "**TIẾN THOÁI LƯỠNG NAN**".

⚡ **Đặc trưng:**
- Ra ngoài gặp **CẢN TRỞ**
- **MUỐN ĐI CHẲNG ĐƯỢC, MUỐN VỀ KHÔNG XONG**

⚡ **Kết hợp Kình Dương, Thiên Hình:**
- Phải **ĐỀ PHÒNG TAI NẠN**
- Nhất là **GIAO THÔNG**

⚡ **Có Tả Hữu trợ lực:**
- Trách nhiệm bên ngoài hóa thành **CƠ HỘI**
- Hoàn thành xong nhiệm vụ → **HƯỞNG THÀNH QUẢ**
- Được **KÍNH TRỌNG, NỂ PHỤC**`,
  },

  {
    id: 'thien-la-tat-ach-benh-lau-dai',
    title: 'Thiên La tại Tật Ách - Bệnh lâu dài',
    sao: ['Thiên La'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `**Thiên La tại Tật Ách** — chủ nhân lá số dễ bị **BỆNH LÂU DÀI**.

⚡ **Đặc trưng:**
- **CHẠY CHỮA KHẮP NƠI**
- Lạc vào **MÊ TÍN DỊ ĐOAN** khiến "**TIỀN MẤT TẬT MANG**"

⚡ **Đáng chú ý - kết hợp Không Kiếp, Hỏa Linh:**
- Dễ thành **BỆNH NAN Y**

⚡ **Hóa giải:**
- Hiểu rằng đó là **NGHIỆP THÂN PHẢI TRẢ**
- Sống **TÍCH PHÚC, LÀM LÀNH**
- Bệnh có thể **GIẢM**, họa có thể **TIÊU**`,
  },

  {
    id: 'thien-la-tai-bach-luoi-troi-giang-bay',
    title: 'Thiên La tại Tài Bạch - Lưới trời giăng bẫy',
    sao: ['Thiên La'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Thiên La tại Tài Bạch** — luôn phải **CẨN TRỌNG** việc kiếm tiền vì lúc
nào cũng có "**LƯỚI TRỜI giăng ra chờ sập bẫy**".

⚡ **Cách hành xử đúng:**
- Phải **LÀM ĂN CHÂN CHÍNH**
- Dù khó khăn cũng **KHÔNG VI PHẠM ĐẠO ĐỨC, TÔN CHỈ**
- Đi đúng đường → **TIỀN ÍT NHƯNG BỀN, NGHÈO MÀ YÊN**

⚡ **Cảnh báo - sa vào đường tắt:**
- Gặp thêm **SÁT - KỴ - HÌNH** → "**MỘT PHÚT HUY HOÀNG, NGÀN NĂM KHỔ LỤY**"
- Một phút kiếm tiền **DỄ DÀNG** mà cả cuộc đời gặp **KHÓ KHĂN**`,
  },

  {
    id: 'thien-la-tu-tuc-no-nghiep-con',
    title: 'Thiên La tại Tử Tức - Sợi dây nợ nghiệp với con',
    sao: ['Thiên La'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Thiên La tại Tử Tức** — sợi dây **NỢ NGHIỆP với CON CÁI**.

⚡ **Đặc trưng:**
- Con làm sai → **CHA MẸ CHỊU**
- Con đau ốm → **CHA MẸ PHẢI LO LẮNG**
- Con hư hỏng → **CHA MẸ KHÓ LÀM ĂN**

⚡ **Hội cát tinh:**
- Nợ trở thành **DUYÊN**
- Con cái **NGOAN HIỀN**

⚡ **Gặp Sát - Kỵ - Hình:**
- **CHA MẸ KHỔ VÌ CON**
- **MUỐN THOÁT cũng CHẲNG THỂ**`,
  },

  {
    id: 'thien-la-phu-the-tinh-nang-duyen-no',
    title: 'Thiên La tại Phu Thê - Tình nặng duyên nợ',
    sao: ['Thiên La'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `**Thiên La tại Phu Thê** — tạo ra mối tình **NẶNG DUYÊN NỢ**.

⚡ **Đặc trưng:**
- Một khi đã yêu thì **KHÓ DỨT**
- Rời bỏ rồi vẫn **ĐAU ĐÁU NHỚ THƯƠNG**

⚡ **Gặp Sát - Kỵ - Hình:**
- Tình duyên **KHỔ LỤY**
- Chia tay có cảm giác như "**CHẾT ĐI SỐNG LẠI**"

⚡ **Có cát tinh Văn Xương Văn Khúc, Tả Hữu trợ lực:**
- Tình duyên **GẮN KẾT VÌ NGHĨA TÌNH**
- Không phải do **NGHIỆP XẤU**`,
  },

  {
    id: 'thien-la-huynh-de-than-thiet-hoac-tranh-chap',
    title: 'Thiên La tại Huynh Đệ - Anh em thân thiết hoặc tranh chấp',
    sao: ['Thiên La'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Thiên La tại Huynh Đệ** — anh chị em có **MỐI QUAN HỆ THÂN THIẾT** kể cả
khi đã trưởng thành.

⚡ **Hội Tả Hữu, Khôi Việt:**
- Anh em **THƯỜNG XUYÊN TỤ HỌP**
- **GIÚP ĐỠ NHAU**
- Sống với nhau **VÌ TÌNH NGHĨA**

⚡ **Đi cùng Kình Đà:**
- Anh em dễ xảy ra **TRANH CHẤP LỢI ÍCH**
- Nhất là chuyện **GIA SẢN, THỪA KẾ**
- Tình cảm **RẠN NỨT**`,
  },
];
