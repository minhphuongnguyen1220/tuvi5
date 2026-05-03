import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THIÊN PHÚC - Hỏa, Phúc Tinh + Thiện Tinh.
 * Tên gọi đầy đủ: "THIÊN PHÚC QUÝ NHÂN".
 *
 * An theo HÀNG CAN của tuổi.
 *
 * Đặc trưng riêng:
 * - Xu hướng TỪ THIỆN CAO, đi giúp đỡ
 * - Mong muốn đem lại HẠNH PHÚC đến cho mọi người
 * - Khác Thiên Quan (ôn hòa, ở ẩn)
 *
 * Phần CHUNG cặp Quan Phúc đã viết tại file thien-quan.ts với
 * sao: ['Thiên Quan', 'Thiên Phúc'].
 */
export const luanGiai_ThienPhuc: DoanLuanGiai[] = [
  {
    id: 'thien-phuc-tinh-chat-chung',
    title: 'Thiên Phúc - Đặc tính chung',
    sao: ['Thiên Phúc'],
    doUuTien: 32,
    tomTat: `**Thiên Phúc** — phụ tinh **PHÚC TINH + THIỆN TINH**, tên gọi đầy đủ:
**"THIÊN PHÚC QUÝ NHÂN"**.

**Ngũ hành:** **Hỏa**.

**Đặc tính riêng:**
- **MAY MẮN, PHÚC THỌ**, lòng từ bi
- **XU HƯỚNG TỪ THIỆN CAO**
- Thích **ĐI GIÚP ĐỠ, HỖ TRỢ** người khác
- **MONG MUỐN ĐEM LẠI HẠNH PHÚC** đến cho mọi người

**Vai trò:**
- **CỨU KHỐN PHÒ NGUY**, chế khắc các ác sát tinh
- Làm giảm tai ương do hung tinh gây ra
- Phù hợp với **LĨNH VỰC NHÂN ĐẠO CAO**: y tế, giáo dục, hội chữ thập đỏ,
  tổ chức thiện nguyện

**Khác Thiên Quan:** Thiên Quan thiên về **AN ẨN, HÒA NHÃ** — Thiên Phúc
thiên về **HÀNH ĐỘNG TỪ THIỆN, LAN TỎA THIỆN LƯƠNG**.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // THIÊN PHÚC TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-phuc-tai-menh',
    title: 'Thiên Phúc tại Mệnh - HỢP CÁCH',
    sao: ['Thiên Phúc'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `**Thiên Phúc thủ Mệnh** — vị trí **HỢP CÁCH**, mang **PHÚC KHÍ LỚN, NHÂN
TỪ**.

**Tướng hình:**
- **HIỀN HẬU, ÔN HÒA, DỄ NHÌN**
- **ĐÔI MẮT SÁNG**, đôi tai dày, dái tai dài
- Cử chỉ **TỪ TỐN, NHẸ NHÀNG**, không vội vàng hấp tấp

**Tính cách:**
- **THIỆN TÂM, NHÂN HẬU, ĐỨC ĐỘ**
- Luôn sẵn sàng **CỨU GIÚP NGƯỜI KHÁC**
- Tin tưởng vào **TÂM LINH**, có **DUYÊN TU TẬP** và **NGỘ TÍNH CAO**
- Thích sự **YÊN BÌNH**, không bon chen: ít có kẻ thù, người ghen ghét

**Phúc thọ:**
- Khả năng **CỨU GIẢI TAI HỌA**, làm giảm bớt hung nguy và bệnh tật
- Càng **TU NHÂN TÍCH ĐỨC**, làm nhiều việc thiện: phúc thọ càng tăng
- Càng gặp nhiều may mắn, được người khác **GIÚP ĐỠ**

**Đặc trưng riêng so với Thiên Quan:** Thiên Phúc thiên về **HÀNH ĐỘNG**
giúp người, không chỉ ở ẩn an thân.`,
  },

  {
    id: 'thien-phuc-tai-phu-mau',
    title: 'Thiên Phúc tại Phụ Mẫu',
    sao: ['Thiên Phúc'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Thiên Phúc tại Phụ Mẫu** — cha mẹ là người **LỄ NGHĨA, HIỀN HẬU**, hay
**LÀM TỪ THIỆN**, được mọi người **QUÝ MẾN, KÍNH TRỌNG**.

**Đặc trưng:**
- Cả cha và mẹ đều thích tìm hiểu **TÍN NGƯỠNG, TÂM LINH**
- Tin vào **LUẬT NHÂN QUẢ**

**Đương số được hưởng:**
- Sinh ra trong gia đình **CÓ GIÁO DỤC**
- Hưởng **PHÚC LỘC** do cha mẹ để lại
- Cả về **VẬT CHẤT lẫn ÂM ĐỨC**`,
  },

  {
    id: 'thien-phuc-tai-phuc-duc',
    title: 'Thiên Phúc tại Phúc Đức - HỢP CÁCH',
    sao: ['Thiên Phúc'],
    cung: ['Phúc Đức'],
    doUuTien: 80,
    tomTat: `**Thiên Phúc thủ Phúc Đức** — vị trí **HỢP CÁCH**, ông bà tổ tiên và dòng
họ có nhiều người **HIỀN LÀNH, THIỆN LƯƠNG**.

**Đặc trưng:**
- Bản thân đương số được hưởng **PHÚC ẤM, MAY MẮN**
- Có trách nhiệm **"UỐNG NƯỚC NHỚ NGUỒN"**
- Tiếp tục **VUN BỒI PHÚC ĐỨC** cho con cháu đời sau

**Mộ phần:**
- **MỒ MẢ TỔ TIÊN YÊN ỔN**, ở nơi đẹp
- Có trường hợp được **CHÔN CẤT GẦN CHÙA**
- Hoặc **GỬI TRO CỐT LÊN CHÙA**`,
  },

  {
    id: 'thien-phuc-tai-dien-trach',
    title: 'Thiên Phúc tại Điền Trạch',
    sao: ['Thiên Phúc'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Thiên Phúc tại Điền Trạch** — trong nhà thường **THỜ PHẬT, TU TẬP TẠI
GIA**, thờ cúng chỉn chu.

**Đặc trưng:**
- Nhà cửa **SẠCH SẼ, GỌN GÀNG, NGĂN NẮP, CÓ QUI CỦ**
- Gia đình **THUẬN HÒA**
- Hay giúp đỡ **HÀNG XÓM LÁNG GIỀNG**: được nhiều người quý mến

**Tâm tính:**
- Sẵn sàng **HIẾN ĐẤT ĐAI, NHÀ CỬA** cho việc nghĩa
- Đứng ra **THÀNH LẬP CƠ QUAN TỪ THIỆN**
- Của cải vật chất có thể cho người khác mà không luyến tiếc`,
  },

  {
    id: 'thien-phuc-tai-quan-loc',
    title: 'Thiên Phúc tại Quan Lộc',
    sao: ['Thiên Phúc'],
    cung: ['Quan Lộc'],
    doUuTien: 75,
    tomTat: `**Thiên Phúc tại Quan Lộc** — trong công việc hay **GIÚP ĐỠ NGƯỜI KHÁC** và
cũng thường được mọi người giúp đỡ.

**Hợp lĩnh vực:**
- **Y TẾ** (bác sỹ, y tá)
- **GIÁO DỤC** (giáo viên, giảng dạy)
- **HỘI CHỮ THẬP ĐỎ**
- **TỔ CHỨC THIỆN NGUYỆN**

**Đặc trưng:**
- **KHÔNG DÙNG THỦ ĐOẠN** cạnh tranh
- **KHÔNG LÀM HẠI AI**
- Có công việc, sự nghiệp **THIỆN LƯƠNG, CHÂN CHÍNH**
- Mức độ thành công tùy vào **PHÚC PHẦN sẵn có** và "nhân tốt" đã gieo`,
  },

  {
    id: 'thien-phuc-tai-no-boc',
    title: 'Thiên Phúc tại Nô Bộc',
    sao: ['Thiên Phúc'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Thiên Phúc tại Nô Bộc** — có **DUYÊN KẾT GIAO** với những người **BẠN
TỐT, BẠN ĐỒNG TU**.

**Đặc trưng:**
- Học hỏi từ các **BẬC CHÂN TU**, người có đạo đức
- Đồng nghiệp, cấp dưới là người **TỐT BỤNG, ĐÁNG TIN CẬY**
- Luôn sẵn sàng **GIÚP ĐỠ**

**Hoạt động xã hội:**
- Hay tham gia **HOẠT ĐỘNG THIỆN NGUYỆN**
- **CỨU TRỢ CỘNG ĐỒNG** cùng bạn bè`,
  },

  {
    id: 'thien-phuc-tai-thien-di',
    title: 'Thiên Phúc tại Thiên Di - HỢP CÁCH',
    sao: ['Thiên Phúc'],
    cung: ['Thiên Di'],
    doUuTien: 78,
    tomTat: `**Thiên Phúc thủ Thiên Di** — vị trí **HỢP CÁCH**, khi ra ngoài hay **LÀM
VIỆC THIỆN**, sẵn sàng giúp đỡ người khác **MỘT CÁCH VÔ TƯ**.

**Đặc trưng:**
- Thường được **QUÝ NHÂN GIÚP ĐỠ**
- Gặp nhiều **MAY MẮN VÀ THUẬN LỢI**

**Tính cách ra ngoài:**
- **ĐIỀM ĐẠM, KHOAN DUNG**
- Hay ở trong môi trường gồm **NGƯỜI THIỆN LÀNH, THÍCH TU TẬP**
- Tâm trí luôn **NHẸ NHÀNG, AN YÊN**
- Ít khi gặp sự **CẠNH TRANH, KÈN CỰA**`,
  },

  {
    id: 'thien-phuc-tai-tat-ach',
    title: 'Thiên Phúc tại Tật Ách - HỢP CÁCH',
    sao: ['Thiên Phúc'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `**Thiên Phúc thủ Tật Ách** — vị trí **HỢP CÁCH**, khi gặp bệnh tật tai
ương thường **"TAI QUA NẠN KHỎI"**, được **QUÝ NHÂN CHE CHỞ**.

**Tăng cường khả năng cứu giải:**
- Nếu chủ mệnh **CHỊU KHÓ TU TẬP, LÀM VIỆC THIỆN TỪ SỚM**: khả năng cứu
  giải càng **MẠNH MẼ**
- Càng tu càng giải tốt

**Tang lễ:**
- Khi qua đời, tang lễ được tổ chức **TRANG NGHIÊM**
- Có **NHÀ SƯ, TU SỸ** đến cầu nguyện
- Thanh thản hành trình cuối đời

**Lưu ý:** vị trí Tật Ách chỉ giảm nhẹ tai ương, không bằng cung gốc — vận
hạn xấu nặng vẫn có thể chết yểu. Quan Phúc tại Tật chỉ giảm bớt mức độ.`,
  },

  {
    id: 'thien-phuc-tai-tai-bach',
    title: 'Thiên Phúc tại Tài Bạch',
    sao: ['Thiên Phúc'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Thiên Phúc tại Tài Bạch** — chủ nhân lá số là người hay **DÙNG TIỀN BẠC
ĐỂ LÀM VIỆC THIỆN**, cúng dường, bố thí, giúp đỡ xã hội.

**Cách kiếm tiền:**
- **CHÂN CHÍNH**, không dùng thủ đoạn gian dối
- Không cạnh tranh không lành mạnh
- "Ở hiền gặp lành": thường gặp **MAY MẮN VỀ TIỀN BẠC**
- Được người khác **GIÚP ĐỠ** lúc khó khăn

**Tâm thí:**
- Sẵn sàng **CHO ĐI TÀI SẢN, SỰ NGHIỆP** để làm từ thiện
- **VÔ TƯ, KHÔNG MÀNG DANH LỢI**
- Thí Vô Úy - bố thí từ tâm chứ không cần công trạng`,
  },

  {
    id: 'thien-phuc-tai-tu-tuc',
    title: 'Thiên Phúc tại Tử Tức',
    sao: ['Thiên Phúc'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Thiên Phúc tại Tử Tức** — con cái **HIỀN LÀNH, HIẾU THUẬN**, lớn lên trở
thành người **TỬ TẾ**.

**Đặc trưng:**
- Đương số dễ **NHẬN CON NUÔI**
- Về già được con cái **CHĂM SÓC, PHỤNG DƯỠNG CHU ĐÁO**
- Con cái có người **THÍCH TU TẬP, LÀM TỪ THIỆN**
- Giàu **LÒNG TRẮC ẨN**

**Sát bại tinh hội:**
- **KHÓ CÓ CON**
- Thường nhờ đến **CẦU TỰ** mới có`,
  },

  {
    id: 'thien-phuc-tai-phu-the',
    title: 'Thiên Phúc tại Phu Thê - Hóa giải xung khắc',
    sao: ['Thiên Phúc'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `**Thiên Phúc tại Phu Thê** — cuộc sống vợ chồng **HÒA HỢP, BIẾT NHƯỜNG NHỊN,
YÊU THƯƠNG NHAU**, sống có tình có nghĩa và bền lâu.

**Người hôn phối:**
- **HIỀN LÀNH, TỐT TÍNH, CÓ ĐỨC TIN**
- Thích tìm hiểu **TÂM LINH, TÍN NGƯỠNG**, tin vào nhân quả

**Khả năng HÓA GIẢI ĐẶC BIỆT:**
- Dù cung Phu Thê có **ĐÀO HOA, KHÔNG KIẾP, THIÊN HÌNH** vẫn được hóa giải
- Hôn nhân **ẤM ÊM**
- "Thuận vợ thuận chồng tát biển Đông cũng cạn"

Đây là một trong những vị trí **QUAN TRỌNG NHẤT** của Thiên Phúc — bảo
vệ hôn nhân khỏi mọi sao xấu.`,
  },

  {
    id: 'thien-phuc-tai-huynh-de',
    title: 'Thiên Phúc tại Huynh Đệ',
    sao: ['Thiên Phúc'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Thiên Phúc tại Huynh Đệ** — anh chị em **HÒA THUẬN, TÌNH NGHĨA**, luôn
**GIÚP ĐỠ NHAU TẬN TÌNH**.

**Đặc trưng:**
- Trong số anh chị em có người **THÍCH TU TẬP**
- Tìm hiểu **NHÂN SINH, TÍN NGƯỠNG**
- Sống **HƯỚNG THIỆN**

**Cát tinh hội (Quang Quý + Dưỡng):**
- Khả năng có **ANH CHỊ EM NUÔI** hoặc **KẾT NGHĨA**
- Tình thân **KEO SƠN**`,
  },
];
