import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO ĐỊA GIẢI - Thổ, Phúc Thiện Tinh.
 *
 * An theo THÁNG SINH (engine: khởi từ Mùi thuận theo tháng sinh).
 *
 * Địa = ĐẤT. Giải = tháo gỡ, hóa giải.
 *: Địa Giải = sự trợ giúp từ ĐẤT, các thế lực gần gũi như thần linh,
 * thổ công, thổ địa.
 *
 * Đặc trưng riêng:
 * - Tướng THẤP NGƯỜI, HƠI MẬP (khác Thiên Giải cao ráo trắng hồng)
 * - Hợp PHƯƠNG PHÁP CHỮA TRỊ TỰ NHIÊN, năng lượng từ môi trường
 * - Tinh thần dễ GIAO THOA VỚI ĐẤT, cảm nhận năng lượng tích cực/tiêu cực
 *
 * Phần CHUNG cặp Thiên-Địa Giải đã viết tại file thien-giai.ts với
 * sao: ['Thiên Giải', 'Địa Giải'].
 */
export const luanGiai_DiaGiai: DoanLuanGiai[] = [
  {
    id: 'dia-giai-tinh-chat-chung',
    title: 'Địa Giải - Đặc tính chung',
    sao: ['Địa Giải'],
    doUuTien: 32,
    tomTat: `**Địa Giải** — phụ tinh **PHÚC THIỆN TINH**, an theo **tháng sinh**.

**Ngũ hành:** **Thổ**.

**Tên gọi:** Địa = đất, Giải = tháo gỡ: **SỰ TRỢ GIÚP TỪ ĐẤT**, các thế
lực gần gũi với con người: **THẦN LINH, THỔ CÔNG, THỔ ĐỊA**.

**Đặc tính:**
- Như **TẤM BÙA HỘ MỆNH** giúp vượt qua khó khăn
- Giảm nhẹ **TAI ƯƠNG**, hóa hung thành cát
- Tăng phúc phần, thọ lộc

**Khác Thiên Giải:**
- Tướng **THẤP NGƯỜI, HƠI MẬP** (Thiên Giải cao ráo trắng hồng)
- Trợ giúp đến từ **MÔI TRƯỜNG GẦN GŨI** (đất, thổ địa) khác Thiên Giải từ
  trên cao
- Hợp với **PHƯƠNG PHÁP CHỮA TRỊ TỰ NHIÊN**, năng lượng từ môi trường lành mạnh

**Lưu ý:** Vì Địa Giải và Thiên Giải KHÔNG bao giờ đồng cung: việc hóa
giải chỉ ở mức **TƯƠNG ĐỐI**. Cần tích đức, làm việc thiện mới chuyển họa
thành phúc trọn vẹn.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // ĐỊA GIẢI TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'dia-giai-tai-menh',
    title: 'Địa Giải tại Mệnh',
    sao: ['Địa Giải'],
    cung: ['Mệnh'],
    doUuTien: 76,
    tomTat: `**Địa Giải thủ Mệnh** — chủ nhân lá số giàu **LÒNG NHÂN ÁI**, may mắn,
**GIẢI ÁCH**.

**Tướng mạo:**
- **THẤP NGƯỜI, HƠI MẬP**
- Tướng mạo **HIỀN LÀNH, NHẸ NHÀNG**
- Dễ được lòng người khác

**Tính tình:**
- **HÒA NHÃ, TỪ TỐN**
- Sống **CÓ ĐỨC**, thích **LÀM VIỆC THIỆN**
- Luôn sẵn sàng **GIÚP ĐỠ NGƯỜI KHÁC**

**Phúc thọ:**
- Như biểu tượng của **SỰ GIÚP ĐỠ TỪ THẦN LINH, THỔ ĐỊA**
- Giảm trừ **TAI ƯƠNG, BỆNH TẬT**
- Tăng thêm **PHÚC PHẦN, THỌ LỘC**

**Hạn chế:** Vì không hội tụ với Thiên Giải: hóa giải chỉ **TƯƠNG ĐỐI**.
Khi gặp vận xấu, nếu thiếu cát tinh khác phối hợp, vẫn phải gánh chịu ít
nhiều khổ ải. Cần **TÍCH ĐỨC, LÀM VIỆC THIỆN** để chuyển họa thành phúc.`,
  },

  {
    id: 'dia-giai-tai-phu-mau',
    title: 'Địa Giải tại Phụ Mẫu',
    sao: ['Địa Giải'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Địa Giải tại Phụ Mẫu** — cha mẹ là người **HIỀN LÀNH, SỐNG CÓ ĐẠO ĐỨC**.

**Đặc trưng:**
- Tính cách **ÔN HÒA, NHẸ NHÀNG**
- Có **TÀI SẢN, KINH TẾ VỮNG**
- Biết **LO XA**
- Hay **LÀM VIỆC THIỆN** để con cháu không phải gặp điều xấu

**Phúc thọ cha mẹ:**
- Sống **THỌ**, ít bệnh tật
- Có **QUÝ NHÂN PHÙ TRỢ**
- Tấm lòng nhân hậu chính là **GỐC RỄ** giúp phúc phần cả gia đình bền lâu`,
  },

  {
    id: 'dia-giai-tai-phuc-duc',
    title: 'Địa Giải tại Phúc Đức',
    sao: ['Địa Giải'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `**Địa Giải tại Phúc Đức** — dòng họ nhiều người **HIỀN LÀNH, TỐT TÍNH**, hay
**GIÚP ĐỠ, HỖ TRỢ NHAU**.

**Đặc trưng đặc biệt - GIAO THOA VỚI ĐẤT:**
- Tinh thần dễ **GIAO THOA VỚI ĐẤT**
- Dễ **CẢM NHẬN ĐƯỢC NĂNG LƯỢNG** môi trường xung quanh
- Cảm nhận năng lượng **TIÊU CỰC, TÍCH CỰC**
- Có khả năng nhạy cảm với địa khí, phong thủy

Đây là đặc trưng riêng của Địa Giải so với Thiên Giải — Địa thuộc Thổ
nên có duyên với đất.`,
  },

  {
    id: 'dia-giai-tai-dien-trach',
    title: 'Địa Giải tại Điền Trạch',
    sao: ['Địa Giải'],
    cung: ['Điền Trạch'],
    doUuTien: 70,
    tomTat: `**Địa Giải tại Điền Trạch** — **KHÔNG HỢP**, đặc tính "giải" làm tiêu tán,
hao hụt một phần tài sản.

**Mức độ:**
- Mất mát ở mức **VỪA PHẢI**
- Không khiến cuộc sống lâm vào cảnh **LAO ĐAO, TÚNG THIẾU**

**Mặt tích cực bất ngờ:**
- Trong một số trường hợp, tính tán giúp **LỌC BỚT NĂNG LƯỢNG XẤU** trong
  nơi ở
- **XẢ ĐỘC ĐỂ THANH LỌC**
- "**CÓ TÁN MỚI CÓ TỤ**", mất mát trước được lợi sau
- Giảm âm khí trong nhà

**Lưu ý:** Không nên lập **BÀN THỜ THẦN LINH, THỔ ĐỊA** tại nơi ở, cửa
hàng — dễ làm hao tán thêm.`,
  },

  {
    id: 'dia-giai-tai-quan-loc',
    title: 'Địa Giải tại Quan Lộc',
    sao: ['Địa Giải'],
    cung: ['Quan Lộc'],
    doUuTien: 75,
    tomTat: `**Địa Giải tại Quan Lộc** — **MAY MẮN, HỖ TRỢ** trong sự nghiệp.

**Đặc trưng:**
- Được mọi người xung quanh **GIÚP ĐỠ**
- Bệnh tật, tai họa được **GIẢM CHẾ**
- Việc **THI CỬ, XIN VIỆC, THĂNG CHỨC** đều **MAY MẮN**
- Tranh tài, thi đua gặp **THUẬN LỢI**

"Được thời, được thế, được lòng người": dù gặp chông gai cũng **DỄ
VƯỢT QUA**.

**Hợp nghề:**
- **THẦY THUỐC, BÁC SĨ**
- **GIÁO VIÊN**
- Công việc **GIÚP NGƯỜI, CỨU NGƯỜI**`,
  },

  {
    id: 'dia-giai-tai-no-boc',
    title: 'Địa Giải tại Nô Bộc',
    sao: ['Địa Giải'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Địa Giải tại Nô Bộc** — đương số thường có **QUÝ NHÂN BÊN MÌNH**, sẵn sàng
giúp đỡ cả vật chất lẫn tinh thần.

**Đặc trưng:**
- Bạn bè, cộng sự đa phần là người **NGAY THẲNG, CHÂN THÀNH**
- Sống **CÓ TÌNH CÓ NGHĨA**
- Luôn sẵn sàng **HỖ TRỢ KHI CẦN**

**Lưu ý:**
- "Chọn bạn mà chơi" vẫn cần nhớ
- Trong các mối quan hệ liên quan đến **TIỀN BẠC, LÀM ĂN** nên **TỈNH TÁO,
  KHÉO LÉO**
- Tránh để **LÒNG TỐT BỊ LỢI DỤNG**`,
  },

  {
    id: 'dia-giai-tai-thien-di',
    title: 'Địa Giải tại Thiên Di',
    sao: ['Địa Giải'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Địa Giải tại Thiên Di** — đi xa thường gặp **MAY MẮN**, được **QUÝ NHÂN
GIÚP ĐỠ**.

**Đặc trưng:**
- Đi **CÔNG TÁC, XUẤT HÀNH, DU LỊCH**, thay đổi môi trường sống đều nhận
  được sự hỗ trợ **ÂM THẦM** từ người khác
- **LỠ ĐƯỜNG** lại có người cho đi nhờ
- **THẤT NGHIỆP** ra ngoài lại tìm được cơ hội mới

**Hạn chế:**
- Địa Giải chỉ giúp **GIẢI PHẦN NÀO** tai ách
- Không thể **TRỪ SẠCH MỌI VẬN ĐEN**
- Cần giữ thái độ **CẨN TRỌNG**, sống tử tế để "gieo nhân lành gặt quả tốt"`,
  },

  {
    id: 'dia-giai-tai-tat-ach',
    title: 'Địa Giải tại Tật Ách - Hợp phương pháp tự nhiên',
    sao: ['Địa Giải'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `**Địa Giải tại Tật Ách** — **HỢP CÁCH**, giải trừ bệnh tật.

**Đặc trưng:**
- Khi đối mặt với bệnh tật, tai ương: dễ có cơ may **GẶP THẦY THUỐC GIỎI**
- Tìm được phương pháp chữa trị **PHÙ HỢP**

**Hợp phương pháp ĐỊA - TỪ ĐẤT MÀ RA:**
- Vốn mang tính **"ĐỊA"** (từ đất mà ra)
- Rất hợp với **PHƯƠNG PHÁP CHỮA TRỊ CÓ NGUỒN GỐC TỰ NHIÊN**
- Hợp **NĂNG LƯỢNG TỪ MÔI TRƯỜNG SỐNG LÀNH MẠNH**
- Hợp **ĐÔNG Y, NAM DƯỢC, THẢO MỘC**, các phương pháp dùng dược liệu tự nhiên`,
  },

  {
    id: 'dia-giai-tai-tai-bach',
    title: 'Địa Giải tại Tài Bạch',
    sao: ['Địa Giải'],
    cung: ['Tài Bạch'],
    doUuTien: 70,
    tomTat: `**Địa Giải tại Tài Bạch** — **KHÔNG HỢP**, làm **TIÊU HAO** một phần của cải.

**Mức độ:**
- Không nghiêm trọng đến mức **TRẮNG TAY, NGHÈO TÚNG**
- Tiền bạc **ĐẾN RỒI LẠI ĐI**

**Cách thức:**
- Đa phần là **CHI TIỀN ĐỂ GIẢI HẠN, LÀM PHƯỚC**
- Mất tiền nhưng **TRÁNH ĐƯỢC HỌA**
- **"CỦA ĐI THAY NGƯỜI"** — câu nói đúng với người có Địa Giải tại Tài Bạch

**Lời khuyên:** Không nên tiếc tiền để giải quyết những rắc rối khi vận
hạn — đây là cách đơn giản và thuận tiện nhất.`,
  },

  {
    id: 'dia-giai-tai-tu-tuc',
    title: 'Địa Giải tại Tử Tức',
    sao: ['Địa Giải'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Địa Giải tại Tử Tức** — những **TAI ÁCH KHI SINH NỞ** sẽ được **HÓA GIẢI**.

**Đặc trưng:**
- Vấn đề trong **MỐI QUAN HỆ VỚI CON CÁI** sẽ được giải trừ
- Dễ sinh con, con cái khỏe mạnh

**Lưu ý quan trọng:**
- Tính "GIẢI" của sao này cũng là **TÍN HIỆU** cho thấy mối quan hệ **ẮT CÓ
  VẤN ĐỀ**
- Phải xem thêm **HUNG SÁT TINH** cùng cung để nhận định mức độ
- Cần tìm hướng giải quyết phù hợp`,
  },

  {
    id: 'dia-giai-tai-phu-the',
    title: 'Địa Giải tại Phu Thê',
    sao: ['Địa Giải'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `**Địa Giải tại Phu Thê** — giúp vợ chồng **BỚT CÃI VÃ**, hóa giải dần dần
những mâu thuẫn.

**Đặc trưng:**
- "**THÁO NÚT THẮT**" trong mối quan hệ vợ chồng
- Hóa giải mâu thuẫn từ từ

**Điều kiện để hôn nhân thuận hòa:**
- Vợ chồng cần **CHỦ ĐỘNG CÙNG NHAU NHÌN NHẬN VẤN ĐỀ**
- Cả hai phải **NHÚN NHƯỜNG, SẺ CHIA**
- Địa Giải chỉ "tháo nút" khi đôi bên hợp tác`,
  },

  {
    id: 'dia-giai-tai-huynh-de',
    title: 'Địa Giải tại Huynh Đệ',
    sao: ['Địa Giải'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Địa Giải tại Huynh Đệ** — anh chị em **HIỀN LÀNH, NHÂN HẬU**, dễ gặp may,
ít bệnh tật.

**Đặc trưng:**
- Quan hệ trong gia đình **HÒA HỢP**
- **TƯƠNG THÂN TƯƠNG ÁI**
- Sẵn sàng **HỖ TRỢ, GIÚP ĐỠ NHAU**`,
  },
];
