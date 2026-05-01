import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THIÊN THỌ - Thổ, Phù Tinh.
 *
 * An theo NĂM SINH (engine: từ cung an Thân = năm Tý, thuận đến chi năm sinh).
 *
 * Đặc trưng: TRUNG HẬU - ÔN HÒA - TĂNG TUỔI THỌ.
 *
 * ⚡ CẶP TÀI-THỌ - quan hệ NHÂN-QUẢ (đặc trưng nổi bật nhất):
 *   - Thiên Tài = HẠT MẦM (nơi gieo NHÂN)
 *   - Thiên Thọ = TRÁI QUẢ (nơi gặt QUẢ)
 *   - Phần CHUNG cặp đôi đã viết tại file này với tag sao: ['Thiên Thọ','Thiên Tài']
 */
export const luanGiai_ThienTho: DoanLuanGiai[] = [
  {
    id: 'thien-tho-tinh-chat-chung',
    title: 'Thiên Thọ - Đặc tính chung',
    sao: ['Thiên Thọ'],
    doUuTien: 32,
    tomTat: `**Thiên Thọ** — phụ tinh **PHÙ TINH**, an theo **năm sinh**.

**Ngũ hành:** **Thổ**.

⚡ **Đặc tính:**
- **Trung hậu, chu đáo, hiền hậu, cần cù**
- Sống **"dĩ hòa vi quý"** — không thích tranh giành quyền thế
- Đôi khi **thiếu quyết đoán, cố chấp, né tránh trách nhiệm**

⚡ **Vai trò:**
- **Tăng tuổi thọ, giảm bệnh tật** cho cung tọa thủ
- Là **TRÁI QUẢ** trong cặp Nhân-Quả với **Thiên Tài** (hạt mầm)
- Nơi Thiên Thọ đóng = nơi nhận **THÀNH QUẢ** từ những gì đã gieo ở cung có Thiên Tài

⚡ **Khái quát:**
- **Cát tinh hội:** sự nghiệp ổn định, hôn nhân ít sóng gió, ít bệnh nặng,
  tài lộc vững bền
- **Sát tinh hội:** thiếu quyết đoán dễ bỏ lỡ cơ hội, hôn nhân trắc trở,
  bệnh tật tai họa, tiền vào nhanh ra nhanh khó giữ`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // PHẦN CHUNG CẶP ĐÔI: TÀI-THỌ NHÂN-QUẢ
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'tai-tho-nhan-qua',
    title: 'Tài-Thọ - Quan hệ Nhân Quả (gieo nhân gặt quả)',
    sao: ['Thiên Thọ', 'Thiên Tài'],
    doUuTien: 60,
    tomTat: `**Bộ Thiên Tài - Thiên Thọ** — cặp song tinh có quan hệ **NHÂN-QUẢ**
độc đáo nhất trong tử vi:

🌱 **Thiên Tài** = **HẠT MẦM** — nơi cần **GIEO NHÂN** (đầu tư công sức,
   chăm sóc, làm phúc, tu tập)
🍎 **Thiên Thọ** = **TRÁI QUẢ** — nơi **GẶT QUẢ** (nhận thành tựu,
   may mắn, phúc trạch hoặc tai họa nếu gieo nhân xấu)

⚡ **Quy luật vận dụng:**
- Tra vị trí **Thiên Tài** đóng ở cung nào → đó là **NƠI CẦN VUN BỒI**
- Tra vị trí **Thiên Thọ** đóng ở cung nào → đó là **NƠI ĐƯỢC HƯỞNG QUẢ**
- Gieo nhân lành ở cung Thiên Tài → quả lành sẽ đến tại cung Thiên Thọ
- Gieo nhân xấu (lười nhác, vô tâm, làm ác) → quả xấu cũng đến đúng vị trí

⚡ **Ý nghĩa khuyên răn:** "Gieo gió gặt bão, ở hiền gặp lành" — bộ sao
nhắc người sống thiện lương, biết soi chiếu hành động bản thân, vì mọi
việc làm đều có hồi báo rõ ràng.`,
    chiTiet: `## Cặp Tài-Thọ - Triết lý Nhân Quả Phật pháp

Trong toàn bộ hệ sao tử vi, **Thiên Tài và Thiên Thọ** là cặp duy nhất
mang ý nghĩa **NHÂN - QUẢ** rõ rệt, ví như giáo lý nhà Phật về quy luật
"gieo nhân nào gặt quả nấy".

### Cách vận dụng cụ thể trên lá số

**Bước 1:** Xác định Thiên Tài đóng cung nào → đó là cung **GIEO NHÂN**.

**Bước 2:** Xác định Thiên Thọ đóng cung nào → đó là cung **GẶT QUẢ**.

**Bước 3:** Đối chiếu ý nghĩa:
- Thiên Tài tại **Phụ Mẫu**, Thiên Thọ tại **Mệnh** → chăm cha mẹ hết lòng
  thì chính bản thân (Mệnh) sẽ được hưởng phúc, tăng thọ về sau
- Thiên Tài tại **Tử Tức**, Thiên Thọ tại **Phúc Đức** → đầu tư cho con cái,
  về già được hưởng phúc trạch họ tộc
- Thiên Tài tại **Phúc Đức**, Thiên Thọ tại **Tài Bạch** → chăm lo mồ mả
  gia tiên, làm việc thiện thì tài lộc dồi dào
- Thiên Tài tại **Tật Ách**, Thiên Thọ tại **Quan Lộc** → giữ gìn sức khỏe,
  rèn luyện thân thể thì sự nghiệp thăng tiến

### Quy luật nghịch (gieo xấu gặt xấu)

- Lười biếng, vô tâm tại cung có Thiên Tài → quả xấu cũng đến đúng tại
  cung Thiên Thọ. Không có chuyện gieo lười mà gặt phúc.
- Nếu Thiên Tài đi với **Sát-Hình-Kỵ** → việc gieo nhân càng khó khăn
- Nếu Thiên Thọ đi với **Không-Kiếp-Đà-Kỵ** → quả nhận được bị chiết giảm

### Cách hóa giải khi cặp Tài-Thọ phạm sát tinh

- **Tu thân, hành thiện, làm phúc** đúng hướng cung Thiên Tài đóng
- **Chăm sóc, đầu tư công sức thật sự** vào lĩnh vực mà Thiên Tài cai quản
- Không cần chi tiền nhiều — quan trọng là **TÂM** và **HÀNH ĐỘNG**
- Đặc biệt khi cặp này đi với **Tứ Đức** (Long-Phúc-Thiên-Nguyệt Đức) →
  cải vận rất mạnh, phúc trạch dày`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // THIÊN THỌ TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-tho-tai-menh',
    title: 'Thiên Thọ tại Mệnh',
    sao: ['Thiên Thọ'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `**Thiên Thọ thủ Mệnh** — đương số là người **TRUNG THỰC, ÔN HÒA, HIỀN HẬU,
CẦN CÙ**, sống "dĩ hòa vi quý", **KHÔNG TRANH GIÀNH** quyền thế.

⚡ **Mặt sáng:**
- Tính tình điềm đạm, ít gây thù chuốc oán
- Có khả năng **TĂNG TUỔI THỌ** cho bản thân
- Phúc lộc song hành với cung có **Thiên Tài**

⚡ **Mặt tối:**
- Đôi khi xử sự **THIẾU QUYẾT ĐOÁN**, hay né tránh trách nhiệm
- Quá ôn hòa biến thành **CỐ CHẤP, AN PHẬN**, dễ bỏ lỡ cơ hội

⚡ **Quy luật vận dụng:** Mệnh có Thiên Thọ thì phải xem **THIÊN TÀI Ở CUNG
NÀO** — đó là nơi cần gieo nhân (đầu tư, chăm sóc, làm thiện), bản thân sẽ
nhận lại thành quả.`,
  },

  {
    id: 'thien-tho-tai-phu-mau',
    title: 'Thiên Thọ tại Phụ Mẫu',
    sao: ['Thiên Thọ'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Thiên Thọ tại Phụ Mẫu** — cha mẹ **HIỀN HẬU, KHIÊM CUNG, THỌ TRƯỜNG**.

⚡ **Cát tinh hội:**
- Hội **Thiên Quan, Thiên Phúc, Quang Quý, Tả Hữu** → cha mẹ phúc dày, được
  quý nhân che chở, gia đạo yên ổn, con cái hưởng phúc ấm

⚡ **Sát tinh hội (Kình Đà Không Kiếp Hóa Kỵ):**
- Cha mẹ vẫn có phúc thọ nhưng **TRẢI QUA NHIỀU LẦN BỆNH TẬT, TAI NẠN**
- Tính cách bảo thủ, cố chấp, ít chịu thay đổi
- Quan hệ cha mẹ - con cái xa cách, khó cảm thông

⚡ **Hóa giải tăng thọ cho cha mẹ:** Tra vị trí cung có **Thiên Tài** → gieo
phúc, làm thiện, bố thí ĐÚNG VÀO PHƯƠNG VỊ ĐÓ → cha mẹ tăng tuổi thọ, sức
khỏe vững bền.`,
  },

  {
    id: 'thien-tho-tai-phu-the',
    title: 'Thiên Thọ tại Phu Thê - chênh lệch tuổi rõ rệt',
    sao: ['Thiên Thọ'],
    cung: ['Phu Thê'],
    doUuTien: 76,
    tomTat: `**Thiên Thọ thủ Phu Thê** — vợ chồng **CHAN HÒA, NÂNG ĐỠ NHAU**, đời sống
hôn nhân ít sóng gió.

⚡ **Đặc trưng riêng - CHÊNH LỆCH TUỔI RÕ RỆT:**
- **Trên 10 tuổi** nếu chồng già hơn vợ
- **Trên 4-5 tuổi** nếu vợ già hơn chồng
- Sự chênh lệch này KHÔNG làm giảm duyên nợ — ngược lại giúp vợ chồng
  **BỔ KHUYẾT cho nhau**

⚡ **Cát tinh hội:**
- **Tả Hữu, Thiên Phúc, Thiên Quan, Quang Quý** → đời sống hôn nhân càng ít
  sóng gió, hai vợ chồng đồng lòng xây dựng gia đạo hưng vượng, là chỗ dựa
  tinh thần vững chắc cho nhau suốt đời

⚡ **Tăng thọ cho người hôn phối:** Tra cung có **Thiên Tài** → quan tâm,
toàn tâm với người hôn phối → gia đình yên ấm, kết quả quý báu sẽ đến tại
cung Thiên Thọ.`,
  },

  {
    id: 'thien-tho-tai-dien-trach',
    title: 'Thiên Thọ tại Điền Trạch',
    sao: ['Thiên Thọ'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Thiên Thọ tại Điền Trạch** — đương số dễ **THỪA HƯỞNG ĐIỀN SẢN, NHÀ CỬA,
ĐẤT CÁT** từ tổ tiên, được trao tặng, truyền lại.

⚡ **Mức độ thừa hưởng** lớn hay nhỏ tùy vào sự **QUAN TÂM CHĂM SÓC** đối
với cung có **Thiên Tài**.

⚡ **Cát tinh hội:**
- Đương số hiền hậu, tốt bụng, sống chan hòa → được hàng xóm láng giềng
  quý mến, gia trạch yên ổn

⚡ **Sát tinh hội (Không Kiếp Kình Đà):**
- Nhận được nhà đất nhưng **KHÓ GIỮ**, phải chia sẻ hoặc sang nhượng
- Gia trạch không yên, quan hệ láng giềng dễ bất hòa`,
  },

  {
    id: 'thien-tho-tai-quan-loc',
    title: 'Thiên Thọ tại Quan Lộc',
    sao: ['Thiên Thọ'],
    cung: ['Quan Lộc'],
    doUuTien: 75,
    tomTat: `**Thiên Thọ tại Quan Lộc** — trong công việc thường **NHẸ NHÀNG, TỪ TỐN,
CHU ĐÁO, THẬN TRỌNG**, ít nóng nảy.

⚡ **Mặt sáng:**
- Được đồng nghiệp, cấp trên **TIN TƯỞNG**
- Sự nghiệp **ỔN ĐỊNH, LÂU BỀN**, gặp nhiều may mắn, có quý nhân nâng đỡ

⚡ **Mặt tối:**
- **THIẾU QUYẾT ĐOÁN, AN PHẬN** → dễ bỏ lỡ cơ hội, khó bứt phá mạnh mẽ
- Càng đúng khi gặp **Kình Dương, Đà La, Hóa Kỵ**

⚡ **Cách giữ sự nghiệp:** Tu dưỡng, tích thiện ở cung có **Thiên Tài** →
giữ được công danh, không thất bại nặng nề.`,
  },

  {
    id: 'thien-tho-tai-no-boc',
    title: 'Thiên Thọ tại Nô Bộc',
    sao: ['Thiên Thọ'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Thiên Thọ tại Nô Bộc** — bạn bè, đồng nghiệp **HIỀN LÀNH, TRUNG HẬU,
CẢM THÔNG**, ít tranh giành, nhiệt tình hỗ trợ trong công việc lẫn cuộc sống.

⚡ **Cát tinh hội:**
- Hội **Tả Hữu, Văn Xương, Văn Khúc** → nhiều bạn tốt, quý nhân xung quanh

⚡ **Sát tinh hội (Đà La, Hóa Kỵ, Địa Không):**
- Bạn bè trở thành **GÁNH NẶNG**, sự giúp đỡ không như kỳ vọng
- Có người **LỢI DỤNG** khiến bản thân vướng bận`,
  },

  {
    id: 'thien-tho-tai-thien-di',
    title: 'Thiên Thọ tại Thiên Di',
    sao: ['Thiên Thọ'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Thiên Thọ tại Thiên Di** — ra ngoài **NHẸ NHÀNG, TỪ TỐN**, dễ gây thiện
cảm với người khác.

⚡ **Cát tinh hội (Tả Hữu, Xương Khúc, Ân Quang, Thiên Quý):**
- Đi xa, **XUẤT NGOẠI** đều có quý nhân phù trợ
- Được người khác **NỂ TRỌNG, NÂNG ĐỠ**
- Công việc luôn suôn sẻ, thuận lợi

⚡ **Sát tinh hội (Đà La, Không Kiếp, Hóa Kỵ):**
- Vướng phiền toái, cản trở khi đi xa
- Dễ bị **TIỂU NHÂN LỢI DỤNG**
- Việc tha hương không yên ổn`,
  },

  {
    id: 'thien-tho-tai-tat-ach',
    title: 'Thiên Thọ tại Tật Ách - HỢP CÁCH (giảm bệnh tăng thọ)',
    sao: ['Thiên Thọ'],
    cung: ['Tật Ách'],
    doUuTien: 82,
    tomTat: `**Thiên Thọ thủ Tật Ách** — vị trí **HỢP CÁCH NHẤT** của Thiên Thọ:
**GIẢM BỆNH TẬT, TĂNG SỨC KHỎE, KÉO DÀI THỌ MỆNH**.

⚡ **Cát tinh hội:**
- Hội **Thiên Lương, Thiên Phúc, Thiên Quan** → ít bệnh nặng, nếu có cũng
  nhanh qua khỏi, dễ gặp **THẦY GIỎI, THUỐC HAY**
- Tăng thọ trường rất rõ

⚡ **Sát tinh hội (Không Kiếp, Đà La, Hóa Kỵ):**
- Có khả năng gặp **BỆNH TẬT, TAI HỌA**, thậm chí **NGUY HIỂM TÍNH MẠNG**
- Phá cách hoàn toàn, không còn khả năng tăng thọ

⚡ **Tăng cường phúc thọ:** Tra cung có **Thiên Tài** → tu nhân tích đức
đúng vị trí đó → đây chính là gốc gieo nhân để Thiên Thọ tại Tật mang lại
điều tốt lành.`,
  },

  {
    id: 'thien-tho-tai-tai-bach',
    title: 'Thiên Thọ tại Tài Bạch',
    sao: ['Thiên Thọ'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Thiên Thọ tại Tài Bạch** — đương số **BIẾT ĐỦ, BIẾT HÀI LÒNG** với thu
nhập, không quá nặng nề chuyện tiền bạc.

⚡ **Cát tinh hội (Tử Phủ, Lộc Tồn, Hóa Lộc):**
- Tài lộc **VỮNG BỀN**
- Được quý nhân nâng đỡ về kinh tế
- Nhận tài sản từ cha mẹ truyền lại

⚡ **Sát bại tinh hội:**
- Tích lũy tài sản gặp trở ngại
- Tiền vào nhiều nhưng **HAO NHANH**, khó giữ lâu
- Tuy vậy hao tổn không đến mức khánh kiệt — thường có người giúp đỡ
  lúc khó khăn`,
  },

  {
    id: 'thien-tho-tai-tu-tuc',
    title: 'Thiên Thọ tại Tử Tức',
    sao: ['Thiên Thọ'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Thiên Thọ tại Tử Tức** — con cái **HIỀN LÀNH, NGOAN NGOÃN, BIẾT LỄ NGHĨA,
HIẾU THUẬN**.

⚡ **Cát tinh hội:**
- Con cái sáng dạ, **HỌC HÀNH ĐỖ ĐẠT**
- Sự nghiệp vững vàng, mang lại phúc lành và niềm vui gia đạo
- Đương số về sau **HƯỞNG PHÚC, NHỜ CẬY** con cái, tuổi già an nhàn

⚡ **Sát tinh hội (Địa Kiếp, Kình Dương, Đà La):**
- Đường con cái **TRẮC TRỞ, CHẬM MUỘN**
- Khó nhờ vả về vật chất

⚡ **Hóa giải:** Gieo nhân lành tại vị trí **Thiên Tài** → phúc trạch của
con cái mới vững bền.`,
  },

  {
    id: 'thien-tho-tai-phuc-duc',
    title: 'Thiên Thọ tại Phúc Đức - HỢP CÁCH (gia tộc thọ)',
    sao: ['Thiên Thọ'],
    cung: ['Phúc Đức'],
    doUuTien: 80,
    tomTat: `**Thiên Thọ thủ Phúc Đức** — vị trí **HỢP CÁCH** của Thiên Thọ: **DÒNG HỌ
THỌ TRƯỜNG**, nhiều người hiền lành, chu đáo, để lại gương sáng cho con cháu
noi theo.

⚡ **Cát tinh hội:**
- Đương số **HƯỞNG PHÚC KHÍ TỪ GIA TIÊN**
- Dễ gặp may mắn, nhiều lần được giúp đỡ trong đời
- Hội **Văn Xương, Văn Khúc** → phúc tinh càng dày

⚡ **Sát tinh hội (Không Kiếp, Kình Dương):**
- Phúc khí gia tộc **SUY GIẢM**
- Trong họ dễ có người **ĐOẢN THỌ** hoặc cuộc sống nhiều thăng trầm

⚡ **Hóa giải:** Hành thiện, tu tập, làm phúc tại vị trí có **Thiên Tài** →
hậu vận hưởng phúc ấm.`,
  },

  {
    id: 'thien-tho-tai-huynh-de',
    title: 'Thiên Thọ tại Huynh Đệ',
    sao: ['Thiên Thọ'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Thiên Thọ tại Huynh Đệ** — anh chị em **GẮN BÓ, CHAN HÒA, YÊU THƯƠNG
GIÚP ĐỠ NHAU**, đương số được anh chị em **BAO BỌC, NÂNG ĐỠ**.

⚡ **Đặc trưng:** Anh chị em **CÁCH TUỔI NHAU XA**.

⚡ **Cát tinh hội (Thiên Quan, Thiên Phúc, Ân Quang, Thiên Quý):**
- Anh chị em hiền lành, tử tế, có học thức, sống trọng đạo nghĩa
- Mang lại phúc ấm cho gia đình và dòng họ

⚡ **Sát tinh hội (Không Kiếp, Kình Dương):**
- Tình cảm anh chị em **XA CÁCH**
- Ít có cơ hội ở gần, khó nương tựa khi cần`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // KẾT HỢP ĐẶC BIỆT
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-tho-thien-luong-tho-truong',
    title: 'Thiên Thọ + Thiên Lương - Thọ trường hưởng phúc',
    sao: ['Thiên Thọ'],
    ketHop: ['Thiên Lương'],
    doUuTien: 55,
    tomTat: `**Thiên Thọ + Thiên Lương đồng cung** — câu phú: **"Thiên Thọ Thiên Lương -
THỌ TRƯỜNG, HƯỞNG PHÚC, SỐNG LÂU"**.

⚡ Thiên Lương là **THỌ TINH** chính của tử vi, kết hợp với Thiên Thọ tạo
thành cách **SONG THỌ** mạnh mẽ:
- Thọ mệnh kéo dài rõ rệt
- Hưởng phúc trạch dày
- Ít bệnh tật, nếu có cũng nhanh qua khỏi`,
  },

  {
    id: 'thien-tho-thien-luong-tat-phuc',
    title: 'Thiên Thọ + Thiên Lương tại Tật/Phúc - Thọ trường tột bậc',
    sao: ['Thiên Thọ'],
    cung: ['Tật Ách', 'Phúc Đức'],
    ketHop: ['Thiên Lương'],
    doUuTien: 60,
    tomTat: `🌟 **Thiên Thọ + Thiên Lương đồng cung tại Tật Ách hoặc Phúc Đức** — vị
trí ĐẶC BIỆT TỐT của bộ song thọ:
- Thọ mệnh kéo dài, hưởng phúc dày
- Đây là cách AN LÀNH BẬC NHẤT về phúc thọ`,
  },

  {
    id: 'thien-tho-tu-duc-cai-van',
    title: 'Thiên Thọ + bộ Tứ Đức - Cải vận tăng thọ',
    sao: ['Thiên Thọ'],
    ketHop: ['Long Đức', 'Phúc Đức', 'Thiên Đức', 'Nguyệt Đức'],
    doUuTien: 50,
    tomTat: `**Thiên Thọ hội bộ Tứ Đức** (Long Đức + Phúc Đức + Thiên Đức + Nguyệt Đức)
— cách cục **CẢI VẬN TĂNG THỌ** rất mạnh.

⚡ **Bộ Tứ Đức** vốn là sao Giải đặc biệt, kết hợp với khí ôn hòa của
Thiên Thọ:
- **Hóa giải sát tinh** đến tận gốc
- **Tăng phúc thọ** đến mức tối đa
- Là một trong những cách **AN LÀNH NHẤT** trong tử vi`,
  },

  {
    id: 'thien-tho-tu-duc-tat-phuc',
    title: 'Thiên Thọ + Tứ Đức tại Tật/Phúc - Trường thọ',
    sao: ['Thiên Thọ'],
    cung: ['Tật Ách', 'Phúc Đức'],
    ketHop: ['Long Đức', 'Phúc Đức', 'Thiên Đức', 'Nguyệt Đức'],
    doUuTien: 55,
    tomTat: `🌟 **Thiên Thọ + Tứ Đức tại Tật Ách hoặc Phúc Đức** → đặc biệt **TRƯỜNG
THỌ**:
- Sao Giải tập trung hóa giải mọi sát tinh
- Phúc thọ đạt đỉnh
- An lành tột bậc cả về sức khỏe lẫn phúc trạch dòng họ`,
  },
];
