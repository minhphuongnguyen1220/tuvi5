import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO TUẾ PHÁ - Hỏa, vòng Thái Tuế (vị trí 7).
 * LUÔN ĐỐI XUNG Thái Tuế (cách 6 cung) - sao "phá vỡ" trật tự.
 * LUÔN đồng cung với THIÊN HƯ (quy luật an sao - hardcode trong engine).
 * Tam hợp Tang Tuế Điếu (Tang Môn + Thái Tuế + Điếu Khách) - phần CHUNG đã viết tại tang-mon.ts.
 *
 * Hình tượng: BỘ RĂNG - sâu răng, hư răng, mọc lệch.
 */
export const luanGiai_TuePha: DoanLuanGiai[] = [
  {
    id: 'tue-pha-tinh-chat-chung',
    title: 'Tuế Phá - Đặc tính chung',
    sao: ['Tuế Phá'],
    doUuTien: 32,
    tomTat: `**Tuế Phá** — phụ tinh trong **vòng Thái Tuế**, vị trí thứ **7**.

**Ngũ hành:** **Hỏa**.

⚡ **Vị thế trong vòng Thái Tuế:**
- **LUÔN XUNG CHIẾU Thái Tuế** (đối xung 6 cung) — sao **"PHÁ VỠ" trật tự**
- Tam hợp với **TANG MÔN, ĐIẾU KHÁCH** — tam hợp của sự **CHỐNG ĐỐI**, tính
  xây dựng KHÔNG cao
- **LUÔN đồng cung THIÊN HƯ** (quy luật an sao - hardcode trong engine):
  Thiên Hư là **HAO BẠI TINH** chủ về **buồn rầu, nước mắt, kêu than buồn khổ**
  → thể hiện **không được toại lòng, thỏa mãn** trong cuộc đời

⚡ **Vai trò:**
- **CHỐNG LẠI sự an bài định mệnh**
- **QUẬT CƯỜNG ĐẢ PHÁ** trật tự đã có
- Phá vỡ **NỀN TẢNG CŨ**, quan điểm **trái chiều**

**Đặc tính:** **CÁI RĂNG, TRỞ NGẠI, CHỐNG ĐỐI, ĐẤU TRANH, ĐÒI HỎI, PHÁ TÁN**.

🌟 **Triết lý Tuế Phá:** "**Thua thầy bằng vạn không bằng kém bạn một ly**" —
luôn sống với tinh thần **GANH ĐUA, CẠNH TRANH**, vươn mình cải thiện bản thân.`,
  },

  {
    id: 'tue-pha-thien-hu-dong-cung',
    title: 'Tuế Phá + Thiên Hư (luôn đồng cung)',
    sao: ['Tuế Phá', 'Thiên Hư'],
    doUuTien: 60,
    tomTat: `⚡ **Tuế Phá LUÔN đồng cung với Thiên Hư** (quy luật an sao bắt buộc):

⚠️ **Thiên Hư** = HAO BẠI TINH, chủ về:
- **BUỒN RẦU, NƯỚC MẮT**
- **KÊU THAN, BUỒN KHỔ**
- **KHÔNG ĐƯỢC TOẠI LÒNG, THỎA MÃN** trong cuộc đời

→ Sự kết hợp này tạo nên **SẮC THÁI BUỒN** đặc trưng:
- Người có Tuế Phá thường có **NỖI U HOÀI** sâu kín
- Lúc nào cũng cảm thấy **ĐIỀU GÌ ĐÓ chưa trọn vẹn**

🌟 **Đẹp nhất tại Tý Ngọ** (Tuế Phá + Khốc Hư ở Tý/Ngọ):
- Tuýp người **TUỔI TRẺ KHÔNG NGỪNG ĐẤU TRANH**
- Về cuối đạt được **THÀNH QUẢ NHẤT ĐỊNH**
- Cách **"TIỀN BẦN HẬU PHÚ"** (đầu nghèo cuối giàu)`,
  },

  {
    id: 'tue-pha-tai-menh',
    title: 'Tuế Phá tại Mệnh - ngang ngược cứng đầu',
    sao: ['Tuế Phá'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `⚠️ **Tuế Phá thủ Mệnh:**

⚠️ **Tính cách:**
- **NGANG NGƯỢC, CỨNG ĐẦU, NGHỊCH NGỢM, PHÁ TÁN**
- Hay thích **KỂ LỂ về NỖI KHỔ** của bản thân, hoàn cảnh
- Nhưng với những bất bình đó, làm việc với **QUYẾT TÂM RẤT CAO**

⚠️ **Đặc tính tranh luận:**
- Hay **KHÍCH BÁC, ĐÂM CHỌC**
- Bày tỏ **QUAN ĐIỂM TRÁI CHIỀU**, **TRANH LUẬN** với người khác
- Dễ **NỔI NÓNG, KÍCH ĐỘNG, LA LỐI, QUÁT THÁO**, **mất bình tĩnh** (vì hành Hỏa)

🌟 **Tiến trình từ nhỏ đến lớn:**
- Ngay từ **NHỎ** đã là đứa trẻ có **CÁ TÍNH, NGANG BƯỚNG**, "**KHÓ BẢO**"
- Càng lớn càng **GAI GÓC, SẮC SẢO, ĐÁO ĐỂ**
- **KHÔNG DỄ BỊ BẮT NẠT**

⚠️ **Cảnh báo (Tuế Phá luôn đồng cung Thiên Hư):**
- Cuộc đời **ÍT KHI TOẠI LÒNG**
- Lắm **TRẮC TRỞ**

🌟 **Cách "tiền bần hậu phú":** Tuế Phá + Khốc Hư tại **Tý / Ngọ**:
- Tuổi trẻ **không ngừng nỗ lực**
- Về sau đạt được **thành quả xứng đáng**`,
  },

  {
    id: 'tue-pha-rang',
    title: 'Tuế Phá - Hình tượng "cái răng"',
    sao: ['Tuế Phá'],
    doUuTien: 50,
    tomTat: `⚡ **Tuế Phá có hình tượng là BỘ RĂNG.**

⚠️ **Đặc trưng cơ thể (khi Tuế Phá thủ Mệnh hoặc Tật):**
- **RĂNG XẤU**, men răng kém
- **MỌC LỆCH**
- Hay **ĐAU**

⚠️ **Tuế Phá + Thiên Khốc + Thiên Hư:** **HAY ĐAU RĂNG, SÂU RĂNG, HƯ RĂNG**.

⚠️ **Tuế Phá + Thiên Riêu + Thiên Đồng + Triệt:** **DỄ RỤNG RĂNG SỚM**.

🌟 **Nghề nha khoa - cách đẹp:**
**Tuế Phá + Cơ Nguyệt Đồng Lương + Thiên Hình + Quang Quý:**
→ **BÁC SỸ NHA KHOA GIỎI** — biến "vấn đề răng" của mình thành **nghề chữa răng**
cho người khác.`,
  },

  {
    id: 'tue-pha-menh-cuong-tinh',
    title: 'Tuế Phá + sao mạnh - cá tính mãnh liệt',
    sao: ['Tuế Phá'],
    cung: ['Mệnh'],
    ketHop: ['Kình Dương', 'Hỏa Tinh', 'Linh Tinh', 'Phá Quân', 'Vũ Khúc', 'Thất Sát', 'Tham Lang'],
    doUuTien: 70,
    tomTat: `⚠️ **Tuế Phá tại Mệnh + Kình Dương / Hỏa Linh / Phá Quân / Vũ Khúc / Thất Sát
/ Tham Lang:**

⚠️ Cá tính của chủ mệnh càng trở nên **MÃNH LIỆT** như **CON NGỰA BẤT KHAM**:
- Nếu **không biết kiềm chế** thì dễ "**ĐỨT DÂY CƯƠNG**"
- **SA NGÃ** vì nóng nảy
- **MỐI QUAN HỆ XÃ HỘI ĐỔ VỠ**

⚠️ **Cảnh báo:** đây là cách **TỰ GÂY HỌA CHO MÌNH** — sức bộc phát mạnh nhưng
**THIẾU KIỀM CHẾ** sẽ thành **PHÁ HOẠI**.`,
  },

  {
    id: 'tue-pha-tai-phu-mau',
    title: 'Tuế Phá tại Phụ Mẫu',
    sao: ['Tuế Phá'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `⚠️ **Tuế Phá tại Phụ Mẫu:**
- Cha mẹ và con cái **KHÔNG HỢP TÍNH** nhau
- Hay **CHỐNG ĐỐI** nhau, "**TRỐNG ĐÁNH XUÔI KÈN THỔI NGƯỢC**"
- Ý kiến của đương số dễ **bị cha mẹ PHẢN ĐỐI**

⚡ **Tính cha mẹ:**
- Là những người hay **BẤT BÌNH**
- **ĐỨNG LÊN ĐẤU TRANH** trong công việc lẫn đời sống
- Ra ngoài dễ dính **THỊ PHI, KIỆN CÁO PHÁP LUẬT**
- Có người hay **ĐAU RĂNG, SÂU RĂNG**, hay phải đi **KHÁM CHỮA RĂNG**

⚠️ **+ Sát Hình Kỵ:**
- Càng dễ tạo ra **TÍNH HÌNH KHẮC** cho mối quan hệ
- Chủ mệnh nên tìm cách **SỚM XA GIA ĐÌNH** để **TRÁNH ẢNH HƯỞNG XẤU**`,
  },

  {
    id: 'tue-pha-tai-phuc-duc',
    title: 'Tuế Phá tại Phúc Đức',
    sao: ['Tuế Phá'],
    cung: ['Phúc Đức'],
    doUuTien: 72,
    tomTat: `⚠️ **Tuế Phá tại Phúc Đức:**
- Họ hàng thường **KHÔNG ƯA**, **BẤT BÌNH với nhau**
- Dễ xảy ra **CÃI CỌ**
- Dòng họ thường có **LUẬT LỆ KHẮT KHE**, đi NGƯỢC với xã hội bên ngoài → khiến
  nhiều người **KHÓ CHỊU**

⚡ **Đặc điểm tâm linh:**
- **MỒ MẢ KHÔNG ĐƯỢC KHANG TRANG**
- Hay bị **THẤT LẠC, PHÁ BỎ**
- Hoặc phải **DI DỜI CHUYỂN MỘ** đi nơi khác

⚠️ Đời sống tinh thần có **NHIỀU BIẾN ĐỘNG**:
- Bên trong **ẨN GIẤU** những suy nghĩ **bất mãn** nhưng không bộc lộ
- **+ Kình Dương / Hỏa Linh:** năng lượng tinh thần đó **BỘC PHÁT MẠNH MẼ**`,
  },

  {
    id: 'tue-pha-tai-dien-trach',
    title: 'Tuế Phá tại Điền Trạch',
    sao: ['Tuế Phá'],
    cung: ['Điền Trạch'],
    doUuTien: 72,
    tomTat: `⚠️ **Tuế Phá tại Điền Trạch:**
- Hay có **BẤT BÌNH, CÃI CỌ với HÀNG XÓM**
- Người ở trong nhà thường hay **ĐAU RĂNG**
- Nhà thường hay **HỎNG CỬA CỔNG**
- **CÔNG NĂNG và THIẾT KẾ KHÔNG HỢP LÝ**, gây khó chịu cho người ở
- **ĐẤT Ở XẤU**, dễ phải có lần **BÁN NHÀ, BÁN ĐẤT**

⚠️ **+ Sát Kỵ Hình:**
- Càng **BẤT LỢI**
- Tình trạng **TRANH CHẤP đất đai, tài sản** rất dễ xảy ra

🌟 **+ Tả Phù / Hữu Bật / Khôi Việt + Lộc:**
- Việc **GIAO DỊCH bán nhà** diễn ra **NHANH CHÓNG, THUẬN LỢI**`,
  },

  {
    id: 'tue-pha-tai-quan-loc',
    title: 'Tuế Phá tại Quan Lộc - nghề kiểm tra soi xét',
    sao: ['Tuế Phá'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `⚠️ **Tuế Phá tại Quan Lộc:**
- Trong công việc hay **BẤT BÌNH, KHÓ CHỊU**
- Thích đứng lên **ĐẤU TRANH, ĐÒI HỎI QUYỀN LỢI**
- Dễ dính **THỊ PHI, TRANH TỤNG**
- Dễ **THUA THIỆT, ĐỨNG SAU** → sinh ra **PHẪN UẤT, KHÓ CHỊU, BẤT BÌNH** mà
  không biết kêu than với ai

🌟 **Mặt tích cực:**
- Tuế Phá là **NHÂN TỐ TÁC ĐỘNG NGƯỢC**
- Nhờ đó **bộ máy công ty** sẽ tìm ra **LỖ HỔNG**, **CẢI THIỆN HƠN**

🌟 **Nghề phù hợp** (kiểm tra, rà soát, bắt bẻ lỗi sai):
- **CÔNG AN, CẢNH SÁT HÌNH SỰ**
- **KIỂM SÁT VIÊN, KIỂM TOÁN**
- **THẨM PHÁN, LUẬT SƯ**

🌟 **+ Cơ Nguyệt Đồng Lương + Thiên Hình + Quang Quý:** là **BÁC SỸ NHA KHOA
GIỎI**.`,
  },

  {
    id: 'tue-pha-tai-no-boc',
    title: 'Tuế Phá tại Nô Bộc',
    sao: ['Tuế Phá'],
    cung: ['Nô Bộc'],
    doUuTien: 70,
    tomTat: `⚠️ **Tuế Phá tại Nô Bộc:**
- Hay bị **BẠN BÈ, ĐỒNG NGHIỆP, CẤP DƯỚI NÓI XẤU**
- **KHÔNG THÀNH THẬT**
- **Không được bạn em ưa**
- Hay có **BẤT ĐỒNG, KHÓ CHỊU** với nhau
- Hay phải **KÊU THAN vì bạn bè**

⚠️ **+ Hỏa Linh / Kình Đà / Không Kiếp:**
- Càng **ÍT BẠN BÈ**
- Hầu hết những người chơi với chủ mệnh đều tỏ thái độ **BẤT MÃN, không thể HÒA
  HỢP** khi ở gần
- Dần sẽ có sự **XA CÁCH**

🌟 **+ Tả Phù / Hữu Bật:** bạn bè tuy hay **GÓP Ý THẲNG THẮN, KHÓ NGHE** nhưng
vẫn **THẬT LÒNG GIÚP ĐỠ, HỖ TRỢ**.`,
  },

  {
    id: 'tue-pha-tai-thien-di',
    title: 'Tuế Phá tại Thiên Di',
    sao: ['Tuế Phá'],
    cung: ['Thiên Di'],
    doUuTien: 78,
    tomTat: `⚡ **Tuế Phá tại Thiên Di** → cung Mệnh **luôn có Thái Tuế** đối xung:

🌟 Người có **TÍNH CÁCH muốn đóng góp xây dựng**, **CHÍNH TRỰC**:
- Khi ra ngoài hay gặp phải cảnh **BẤT BÌNH**
- Phải **ĐẤU TRANH**

⚠️ **Mặt khó:**
- Gặp nhiều sự **BẤT ĐỒNG, KHÓ CHỊU**
- **Nhiều người chống đối lại**
- Đôi khi khiến họ **MẤT LÒNG nhiều người**

🌟 **+ Tả Hữu / Quang Quý / Tứ Linh (Long Trì + Phượng Các + Bạch Hổ + Hoa Cái):**
- Sự **ĐÓNG GÓP** của chủ mệnh được **GHI NHẬN**
- Tạo nên **ẢNH HƯỞNG TÍCH CỰC** cho tập thể`,
  },

  {
    id: 'tue-pha-tai-tat-ach',
    title: 'Tuế Phá tại Tật Ách - vấn đề răng + nghiệp',
    sao: ['Tuế Phá'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `⚠️ **Tuế Phá tại Tật Ách:**

⚠️ **Vấn đề RĂNG:**
- **DỄ RỤNG RĂNG SỚM**
- **RĂNG XẤU, SÂU RĂNG, MỌC LỆCH**

⚠️ **Nghiệp quả:**
- Dễ bị người khác **GHEN GHÉT, CHỐNG ĐỐI**
- Đem đến **TAI HỌA, BỆNH TẬT** cho mình
- Hay phải chịu những **TAI HỌA, TAI NẠN KHÔNG PHẢI DO MÌNH** mà do **bên ngoài
  mang tới**
- Gây **UẤT ỨC, CĂM HẬN**

⚠️ **+ Phá Quân / Đại Hao / Tiểu Hao / Kình Đà:**
- Càng dễ gặp **XUNG ĐỘT, TRANH CHẤP**
- Dẫn đến **BỆNH TẬT, TAI HỌA**`,
  },

  {
    id: 'tue-pha-tai-tai-bach',
    title: 'Tuế Phá tại Tài Bạch',
    sao: ['Tuế Phá'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `⚠️ **Tuế Phá tại Tài Bạch:**
- Tiền bạc **KHÔNG ĐƯỢC HANH THÔNG**
- Luôn có việc **PHẢI TIÊU PHA**, hoàn cảnh đưa đến
- Hay có **MÂU THUẪN, BẤT BÌNH** về chuyện tiền bạc, kinh tế
- **TỐN TIỀN** cho việc **KHÁM CHỮA RĂNG, LỢI**

🌟 **Nghề kiếm tiền của người Tuế Phá Tài:**
- **NHỜ tranh cãi, đấu tranh, đòi quyền lợi** → kiếm được tiền

🌟 **+ Hóa Khoa / Hóa Quyền / Thiên Khôi / Thiên Việt:**
- Con đường tài lộc **SÁNG**
- Nhờ làm việc **CHÍNH ĐẠO** mà phát tài

⚠️ **+ Sát Tinh:**
- Phải kiếm tiền từ những nghề **RỦI RO CAO**:
  - **Đòi nợ thuê**
  - **Bảo kê**
  - **Cho vay nặng lãi**`,
  },

  {
    id: 'tue-pha-tai-tu-tuc',
    title: 'Tuế Phá tại Tử Tức',
    sao: ['Tuế Phá'],
    cung: ['Tử Tức'],
    doUuTien: 72,
    tomTat: `⚠️ **Tuế Phá tại Tử Tức:**
- Con **NGỖ NGHỊCH, KHÓ DẠY, PHÁ CỦA**, hay **CÃI**
- Con cái **KHÔNG NHƯ MONG ĐỢI**
- **Không đạt được những thành tích** như mình mong muốn
- Hay **GÂY KHÓ CHỊU** cho đương số
- Từ nhỏ đã **CHỐNG ĐỐI**, làm những điều **TRÁI NGƯỢC**, hay **KHÓC ĂN VẠ**
- **Răng thường KHÔNG ĐẸP**

⚠️ **+ Cơ / Cự / Nhật / Lương** (sao chủ về lý luận):
- Càng **MUỘN PHIỀN** vì đường con cái

🌟 **+ Xương Khúc / Khôi Việt:**
- Dù con cái **BƯỚNG BỈNH** nhưng **THÔNG MINH**
- Có khả năng **TỰ HỌC**

⚠️ **+ Kình Hỏa Kỵ:**
- Phải đề phòng con cái gặp **TAI NẠN ở thuở nhỏ** vì tâm tính **TÒ MÒ, HIẾU
  ĐỘNG**`,
  },

  {
    id: 'tue-pha-tai-phu-the',
    title: 'Tuế Phá tại Phu Thê',
    sao: ['Tuế Phá'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `⚠️ **Tuế Phá tại Phu Thê:**
- Vợ chồng hay **BẤT ĐỒNG QUAN ĐIỂM** với nhau
- "**Nay giận mai hờn**", hay **KHÓC LÓC KÊU THAN**
- Thích **BẮT BẺ**
- Mối quan hệ **KHÔNG CÓ LÃNG MẠN**, càng ở với nhau lâu càng **THẲNG THỪNG, BỘP
  CHỘP**
- Luôn **LÀM THEO Ý MÌNH**, **không quan tâm cảm xúc đối phương**

⚠️ **Người hôn phối:** răng **HƠI XẤU, KHẤP KHIỂNG**.

🌟 **+ Thiên Mã:** vợ chồng dễ **XA QUÊ, CÁCH QUÁN** — cưới nhau về cùng nhau
**ĐI XA LẬP NGHIỆP**.

⚠️ **+ Sát Bại Tinh + Tuần Triệt:** vợ chồng dễ **ÔM CON BỎ ĐI, CHIA TAY NHAU**.

⚠️ **+ Thất Sát / Vũ Khúc / Hóa Kỵ / Kình Đà:** tác động **XẤU NẶNG NHẤT**.

🌟 **+ Lộc / Hóa Khoa / Văn Xương / Văn Khúc / Khôi Việt / Tứ Đức:**
- Mối quan hệ **ÍT SÓNG GIÓ**
- Duy trì được sự **TỐT ĐẸP**`,
  },

  {
    id: 'tue-pha-tai-huynh-de',
    title: 'Tuế Phá tại Huynh Đệ',
    sao: ['Tuế Phá'],
    cung: ['Huynh Đệ'],
    doUuTien: 70,
    tomTat: `⚠️ **Tuế Phá tại Huynh Đệ:**
- Anh chị em **KHÔNG HỢP TÍNH** nhau
- Hay có **BẤT ĐỒNG, CHỐNG ĐỐI**

🌟 **+ Thiên Mã:** anh chị em **XA CÁCH**, **mỗi người một phương**:
- **NGHỊ LỰC CAO**
- Gặp nhau là vẫn hay **TRANH LUẬN, CÃI NHAU**

🌟 **+ Cát Tinh:** bên ngoài có thể **PHẢN ĐỐI** nhưng trong lòng vẫn **ÂM THẦM
TRỢ GIÚP** nhau:
- Chỉ cần chủ mệnh **không khước từ** hoặc gây tổn hại mối quan hệ
- Vẫn có được **TRỢ LỰC từ anh chị em**`,
  },

  {
    id: 'tue-pha-thien-rieu-dam-bon',
    title: 'Tuế Phá + Thiên Riêu - chơi bời du đãng',
    sao: ['Tuế Phá'],
    ketHop: ['Thiên Riêu'],
    doUuTien: 60,
    tomTat: `⚠️ **Tuế Phá + Thiên Riêu:**
- **CHƠI BỜI, DU ĐÃNG**
- **DÂM BÔN**

→ Đào hoa của Thiên Riêu kết hợp với tính phá tán của Tuế Phá → **lệch lạc**
trong tình cảm, hành xử **buông tuồng**.`,
  },

  {
    id: 'tue-pha-xuong-khuc-tri-tue',
    title: 'Tuế Phá + Văn Xương + Văn Khúc - trí tuệ danh tiếng',
    sao: ['Tuế Phá'],
    ketHop: ['Văn Xương', 'Văn Khúc'],
    doUuTien: 70,
    tomTat: `🌟 **Tuế Phá + Văn Xương + Văn Khúc:** thúc đẩy chủ mệnh theo đuổi con đường
**CHINH PHỤC TRI THỨC**.

🌟 **Đặc trưng:**
- Tính **BẤT MÃN**, "**KHÔNG CHỊU NGỒI YÊN**" của Tuế Phá kết hợp với văn tinh
  → động lực **HỌC TẬP, NGHIÊN CỨU**
- Nhiều **NHÀ KHOA HỌC, HỌC GIẢ** thành danh nhờ tính "**chưa bao giờ thấy đủ**"
  ấy để **BỨT PHÁ**

🌟 **+ Hóa Khoa:** danh tiếng càng dễ **VANG XA**.

⚠️ **Cảnh báo:** để danh tiếng đi đôi với **NỘI LỰC bản thân** thì phải có
**CÁT TINH TRỢ LỰC** — nếu không sẽ rơi vào cảnh "**THÙNG RỖNG KÊU TO**", có
**TIẾNG nhưng không có MIẾNG**.`,
  },

  {
    id: 'tue-pha-sat-ky-hinh-dau-kho',
    title: 'Tuế Phá + Sát + Kỵ + Hình - đau khổ oán đời',
    sao: ['Tuế Phá'],
    ketHop: ['Thất Sát', 'Hóa Kỵ', 'Thiên Hình'],
    doUuTien: 65,
    tomTat: `⚠️ **Tuế Phá + Sát + Kỵ + Hình:** cuộc đời chủ mệnh phải trải qua không ít
**SÓNG GIÓ, ĐAU KHỔ, OÁN TRÁCH**.

⚠️ **Đặc trưng:**
- Phải **CHUỐC THÊM nhiều KHỔ LỤY**
- Sống trong cảnh **than thân trách phận**
- Khó tìm thấy **bình an nội tâm**

💡 **Cách hóa giải:** đương số nên biết **AN PHẬN**:
- **TIẾN CHẬM mà CHẮC**
- Mới mong tìm được **BÌNH AN**`,
  },

  {
    id: 'tue-pha-loi-khuyen',
    title: 'Lời khuyên cho người Tuế Phá',
    sao: ['Tuế Phá'],
    doUuTien: 35,
    tomTat: `💡 **Tuế Phá là ngôi sao mang ĐẦY THỬ THÁCH** nhưng cũng **CHẤT CHỨA NHIỀU
TIỀM NĂNG**.

🌟 **Sức mạnh:**
- **NGHỊ LỰC ngầm**, không khuất phục
- Tinh thần **CHỐNG ĐỐI bất công**
- Có thể trở thành **NGỌN LỬA hun đúc TRÍ TUỆ**

⚠️ **Yếu điểm:**
- **NÓNG NẢY, MẤT BÌNH TĨNH**
- Hay **KÊU THAN, BẤT MÃN**
- Phá tán **mối quan hệ**
- Vấn đề **RĂNG**

💡 **Bí quyết phát huy Tuế Phá:**
- **TIẾT CHẾ SỰ NÓNG NẢY**
- Học cách **LẮNG NGHE**
- **CHỌN CON ĐƯỜNG CHÍNH ĐẠO** — không chống đối tiêu cực
- **CHĂM SÓC RĂNG MIỆNG** từ trẻ
- Biến **BẤT MÃN** thành **ĐỘNG LỰC PHẤN ĐẤU**

→ Khi biết tu dưỡng đúng cách, Tuế Phá **KHÔNG còn là TRỞ NGẠI** mà hóa thành
**NGỌN LỬA HUN ĐÚC TRÍ TUỆ**, giúp đương số **KHẲNG ĐỊNH BẢN THÂN**.

⚡ **Cảnh báo phải trải qua nhiều VA VẤP:**
Phải trải qua nhiều khó khăn — **chính những KHÓ KHĂN đó lại là BƯỚC ĐỆM** để
**TRƯỞNG THÀNH**.`,
  },
];
