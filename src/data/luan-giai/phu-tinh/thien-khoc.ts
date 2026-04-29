import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THIÊN KHỐC - Thủy, Bại Tinh, chòm Nam Đẩu Tinh.
 * Đắc địa: Tý, Ngọ, Dần, Thân.
 *
 * Bộ KHỐC HƯ với Thiên Hư - phần CHUNG (Khốc Hư Tý Ngọ tiền bần hậu phú,
 * Khốc Hư + Sát/Phá quyền cao, Lục Bại Tinh, hạn) đã viết tại thien-hu.ts.
 *
 * Mã Khốc Khách (Thiên Mã + Thiên Khốc + Điếu Khách) đã viết tại thien-ma.ts + dieu-khach.ts.
 */
export const luanGiai_ThienKhoc: DoanLuanGiai[] = [
  {
    id: 'thien-khoc-tinh-chat-chung',
    title: 'Thiên Khốc - Đặc tính chung',
    sao: ['Thiên Khốc'],
    doUuTien: 32,
    tomTat: `**Thiên Khốc** — phụ tinh **BẠI TINH**, thuộc chòm **NAM ĐẨU TINH**.

**Tên gọi tắt:** **Khốc** — biểu thị cho **TIẾNG KHÓC THAN, sự RẦU RĨ**.

**Ngũ hành:** **Thủy**.

**Hóa khí:** **Bại Tinh**.

⚡ **Vị trí ĐẮC địa:** **Tý, Ngọ, Dần, Thân**.

⚡ **Quy luật an sao:**
- An theo **địa chi của năm sinh**
- Chọn vị trí **cung Ngọ** làm **năm Tý**
- Từ năm Tý chạy **NGƯỢC kim đồng hồ** tới địa chi của năm sinh → ra Thiên Khốc
- Luôn nằm trong tam hợp của **TUẾ - HỔ - PHÙ**

⚡ **Vị thế tại các cung:**
- **Cung DƯƠNG:** thường đi với bộ **Tang Môn + Tuế Phá + Điếu Khách**
- **Cung ÂM:** nằm trong bộ **Thái Tuế + Bạch Hổ + Quan Phù**

⚡ **Quan hệ:**
- Cùng **THIÊN HƯ** tạo bộ **KHỐC HƯ**
- Một trong **LỤC BẠI TINH**: Đại Hao, Tiểu Hao, Thiên Khốc, Thiên Hư, Tang Môn,
  Bạch Hổ

**Đặc tính:** **CẢN TRỞ, ƯU PHIỀN, NƯỚC MẮT, THƯƠNG ĐAU, THỊ PHI, RẦU RĨ, BI
THƯƠNG**.`,
  },

  {
    id: 'thien-khoc-tuong-mao',
    title: 'Thiên Khốc - Tướng mạo',
    sao: ['Thiên Khốc'],
    cung: ['Mệnh'],
    doUuTien: 45,
    tomTat: `⚠️ **Thiên Khốc thủ Mệnh - Tướng mạo:**

⚠️ **Đặc điểm:**
- **NƯỚC DA XANH XAO**
- **MẮT có QUẦNG THÂM**
- Toát lên vẻ **BUỒN RẦU**
- Gương mặt **THIẾU SỨC SỐNG, NHỢT NHẠT**
- **Mắt KHÔNG có HỒN**, hay **NHÌN XUỐNG**
- Không hay nhìn ra xa
- Trầm mặc, ít cười

(Tương tự Thiên Hư — vì cả hai đều là Thủy + Bại Tinh).`,
  },

  {
    id: 'thien-khoc-tai-menh',
    title: 'Thiên Khốc tại Mệnh - tính cách lầm lì',
    sao: ['Thiên Khốc'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `⚠️ **Thiên Khốc thủ Mệnh - tính cách:**

⚠️ **Đặc trưng:**
- Tính cách **LẦM LÌ, LẠNH LÙNG**
- Hay **BÔN BA bên ngoài**
- **BUỒN PHIỀN**, gặp nhiều chuyện **SUY NGHĨ**
- Ra ngoài hơi **KÉM HÒA ĐỒNG**
- **DỄ XÚC ĐỘNG**, hay **KHÓC THẦM**

⚠️ **Tư tưởng:**
- **BI QUAN, TIÊU CỰC**
- Hay **CÀM RÀM, PHÀN NÀN**
- Nhận nhiều **ĐẢ KÍCH**, gặp nhiều **THỊ PHI** → sinh **HẬN THÙ, BỰC DỌC** với
  đời

⚠️ **Đối với NỮ MỆNH:**
- **KHÓC NHIỀU vì chuyện TÌNH CẢM**
- Lo nghĩ nhiều, hay **KHÓC LÓC**

⚠️ **Trí nhớ:**
- **KHÔNG TỐT**
- Đầu óc **LƠ ĐÃNG, KHÔNG TẬP TRUNG**
- Dễ **GIẬT MÌNH**

🌟 **Đắc địa (Tý/Ngọ/Dần/Thân):**
- Người có **Ý CHÍ, TÀI NĂNG**
- Đặc biệt là **TÀI VĂN CHƯƠNG, CHỮ NGHĨA**
- **TÀI ĂN NÓI**, giỏi **PHẢN BIỆN, HÙNG BIỆN**
- Giọng nói **ĐANH THÉP**
- Có **NĂNG KHIẾU CHÍNH TRỊ**
- Tuổi trẻ **VẤT VẢ, BÔN BA**, gặp nhiều **đau khổ, hoàn cảnh trớ trêu**
- Nhờ đó có **Ý CHÍ và QUYẾT TÂM** vượt lên trên hoàn cảnh

⚠️ **Hãm địa:**
- Chủ về **CẢN TRỞ, ĐAU KHỔ, XUI XẺO**
- **+ Không Kiếp / Điếu Khách / Cự Môn:** chủ **TANG TÓC, TAI ƯƠNG, BỆNH TẬT
  SUỐT ĐỜI**
- **Thiên Khốc tại Tuất / Thìn:** hay **TAI NẠN**, **ĐOẢN MỆNH**`,
  },

  {
    id: 'thien-khoc-hoa-quyen',
    title: 'Thiên Khốc + Hóa Quyền - tiếng tăm vang xa',
    sao: ['Thiên Khốc'],
    ketHop: ['Hóa Quyền'],
    doUuTien: 70,
    tomTat: `🌟 **Thiên Khốc + Hóa Quyền:** có **TIẾNG TĂM, DANH TIẾNG VANG XA**, được
**NHIỀU NGƯỜI BIẾT ĐẾN**.

→ Hóa Quyền (sao quyền lực) kết hợp với Thiên Khốc (tiếng khóc nhà trời) → biến
**tiếng khóc thành TIẾNG NÓI** có sức mạnh, có ảnh hưởng.

🌟 Đặc biệt phù hợp với người **làm chính trị, diễn thuyết, nhà hùng biện**.`,
  },

  {
    id: 'thien-khoc-tang-mon-tang-toc',
    title: 'Thiên Khốc + Tang Môn - tang tóc liên miên',
    sao: ['Thiên Khốc'],
    ketHop: ['Tang Môn'],
    doUuTien: 65,
    tomTat: `⚠️ **Thiên Khốc + Tang Môn:** dễ gặp **CHUYỆN TANG TÓC LIÊN MIÊN** từ khi mới
sinh ra.

⚠️ Năm có hạn này → đương số dễ gặp:
- **BIẾN CỐ LỚN**
- **CHUYỆN BUỒN THẤM THÍA**
- Có thể có **TANG sự** trong gia đình

→ Một trong các **CÁCH CỤC CÓ TANG** đã đề cập tại tang-mon.ts (Tang Mã Khốc Hư).`,
  },

  {
    id: 'thien-khoc-tai-phu-mau',
    title: 'Thiên Khốc tại Phụ Mẫu',
    sao: ['Thiên Khốc'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `⚠️ **Thiên Khốc tại Phụ Mẫu:**
- Cha mẹ hay **Ủ RŨ, THAN VÃN, RẦU RĨ**
- Gặp chuyện **PHIỀN LÒNG**
- **BÔN BA, VẤT VẢ** để mưu sinh

🌟 **Khốc Hư Tý/Ngọ tại Phụ Mẫu:** cha mẹ **HỒI TRẺ VẤT VẢ**, về già **GẶT HÁI
được NHIỀU THÀNH CÔNG**.

🌟 **Thiên Khốc + Thiên Mã + Điếu Khách tại Dần/Thân (Mã Khốc Khách):**
- Cha mẹ **TÀI NĂNG, GIỎI GIANG**
- Hay **ĐI XA**, gặp được **THỜI THẾ TỐT**

⚠️ **+ Sát Tinh nặng (Không Kiếp, Tang, Tuế, Hóa Kỵ, Hình):**
- Sự đau buồn càng **TĂNG NẶNG**
- Dẫn tới cảnh **CHIA LY, MẤT MÁT LỚN**`,
  },

  {
    id: 'thien-khoc-tai-phuc-duc',
    title: 'Thiên Khốc tại Phúc Đức',
    sao: ['Thiên Khốc'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `⚠️ **Thiên Khốc tại Phúc Đức:**
- Chủ về sự **HAO TỔN PHÚC THỌ**
- Hay gặp **TRẮC TRỞ, TRÁI NGANG** trong cuộc sống
- Trong dòng họ có nhiều người trải qua **CUỘC SỐNG VẤT VẢ**, gặp nhiều **XUI
  XẺO** và có **CHUYỆN BUỒN KHỔ**

🌟 **Đắc địa (Tý/Ngọ/Dần/Thân) + Cát Tinh:**
- **MỒ MẢ GIA TIÊN ĐẸP**, ở vị trí tốt
- Dòng họ có **PHÚC DÀY**
- Người trong nhà đương số **THÀNH ĐẠT**
- Đạt được **NHIỀU THÀNH TỰU**

⚠️ **Hãm + Sát Tinh (Không Kiếp / Kình / Đà / Hỏa Linh):**
- Phúc phần **GIẢM SÚT**
- Đời sống gặp **TRẮC TRỞ**`,
  },

  {
    id: 'thien-khoc-tai-dien-trach',
    title: 'Thiên Khốc tại Điền Trạch',
    sao: ['Thiên Khốc'],
    cung: ['Điền Trạch'],
    doUuTien: 72,
    tomTat: `⚠️ **Thiên Khốc tại Điền Trạch:**
- Đương số gặp **NHIỀU KHÓ KHĂN, VẤT VẢ**
- **HAO TỐN nhiều TIỀN BẠC** trong việc xây dựng, tạo dựng nhà cửa
- Hay **LO NGHĨ, ƯU SẦU** vì tiền bạc

🌟 **Thiên Khốc tại Dần / Thân:**
- Đương số hay **CHUYỂN NHÀ**
- Có **DUYÊN với KINH DOANH**, đặc biệt là **BUÔN BÁN BẤT ĐỘNG SẢN**
- Có **KHẢ NĂNG KIẾM TIỀN tốt**
- Trong nhà có nhiều **THIẾT BỊ ÂM THANH, LOA ĐÀI**

🌟 **Đắc địa Tý/Ngọ:** "**TIỀN BẦN HẬU PHÚ**" — ban đầu khó khăn, về sau phát đạt.`,
  },

  {
    id: 'thien-khoc-tai-quan-loc',
    title: 'Thiên Khốc tại Quan Lộc',
    sao: ['Thiên Khốc'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `⚠️ **Thiên Khốc tại Quan Lộc:**
- Sự nghiệp **trắc trở, khó khăn** ở những ngày đầu
- Tuy nhiên về sau dễ có **TIẾNG TĂM, CÔNG DANH**

🌟 **Nghề phù hợp** (tính chất buồn bã, khó khăn):
- **HỘI CHỮ THẬP ĐỎ**
- **BÁC SĨ TÂM LÝ**
- **BAN TANG LỄ**
- **CÔNG TÁC XÃ HỘI**, **TỪ THIỆN**

🌟 **Đắc địa Tý/Ngọ:**
- Tuổi trẻ **GIAN TRUÂN** nhưng **HẬU VẬN THÀNH CÔNG**
- Sự nghiệp **ỔN ĐỊNH và PHÁT TRIỂN**

🌟 **Đắc Dần/Thân:**
- Chủ mệnh **TÀI NĂNG**, gặp **THỜI THẾ TỐT**
- Đạt được **THÀNH TỰU LỚN**

⚠️ **Hãm địa:**
- Sự nghiệp gặp **KHÓ KHĂN KÉO DÀI**
- Dễ bị **TIỂU NHÂN QUẤY PHÁ**
- Cần **NỖ LỰC NHIỀU** mới đạt được thành tựu`,
  },

  {
    id: 'thien-khoc-tai-no-boc',
    title: 'Thiên Khốc tại Nô Bộc',
    sao: ['Thiên Khốc'],
    cung: ['Nô Bộc'],
    doUuTien: 70,
    tomTat: `⚠️ **Thiên Khốc tại Nô Bộc:**
- Đương số **ÍT BẠN**
- Hay gặp **CHUYỆN BUỒN PHIỀN** vì bạn bè, đồng nghiệp
- **CẤP DƯỚI KHÔNG GẮN BÓ LÂU DÀI**, "nay ở mai đi"
- Dễ nảy sinh **TÂM LÝ OÁN TRÁCH** đương số vì những chuyện nhỏ

🌟 **Đắc địa:** bạn bè, đồng nghiệp **TUY KHÔNG ĐÔNG nhưng TRUNG THÀNH, SÂU SẮC**:
- Biết **CHIA SẺ, GIÚP ĐỠ NHAU**
- **ÍT GẶP THỊ PHI** với bạn bè`,
  },

  {
    id: 'thien-khoc-tai-thien-di',
    title: 'Thiên Khốc tại Thiên Di',
    sao: ['Thiên Khốc'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `⚠️ **Thiên Khốc tại Thiên Di:**
- Đương số hay **ĐI CÔNG TÁC**, đi làm ăn xa quê hương
- Những ngày đầu **VẤT VẢ, KHÓ KHĂN** hơn người khác
- Ra ngoài giao thiệp hay gặp **XÍCH MÍCH, THỊ PHI, XUNG ĐỘT, CÃI VÃ**

🌟 **Đắc địa:**
- Nếu biết **KIÊN TRÌ, NHẪN NẠI** → về sau sẽ đạt được **THÀNH CÔNG và TIẾNG
  TĂM**
- Công việc xa nhà **THUẬN LỢI**
- Gặp **THỜI VẬN TỐT**, dễ **NỔI TIẾNG**`,
  },

  {
    id: 'thien-khoc-tai-tat-ach',
    title: 'Thiên Khốc tại Tật Ách - bệnh lao phổi, tai mũi họng',
    sao: ['Thiên Khốc'],
    cung: ['Tật Ách'],
    doUuTien: 80,
    tomTat: `⚠️ **Thiên Khốc tại Tật Ách - báo hiệu các bệnh:**

⚠️ **Bệnh hô hấp:**
- **LAO PHỔI**
- **TAI MŨI HỌNG**

⚠️ **Bệnh khác:**
- **BỆNH VỀ DA**
- **BỆNH HỆ THẦN KINH**

⚠️ **Tâm lý:**
- **KHỔ TÂM, ĐAU BUỒN** vì bệnh tật và tai họa
- **HAY HỐT HOẢNG, HOANG MANG**

⚡ **Đặc biệt khi mất:**
- Được **NHIỀU NGƯỜI KHÓC LÓC, THƯƠNG TIẾC**
- **THỔI NHIỀU KÈN TRỐNG**

🌟 **Đắc địa:** sức khỏe **ổn định**, ít bệnh nặng, khi đau ốm **được người thân
quan tâm chăm sóc cẩn thận**.`,
  },

  {
    id: 'thien-khoc-tai-tai-bach',
    title: 'Thiên Khốc tại Tài Bạch',
    sao: ['Thiên Khốc'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `⚠️ **Thiên Khốc tại Tài Bạch:**
- Đương số gặp nhiều **KHÓ KHĂN trong việc kiếm tiền**
- Hay **LO LẮNG, SUY NGHĨ** vì vấn đề tiền bạc, tài chính
- Việc kiếm tiền có lúc **VẤT VẢ**

🌟 **Đắc địa Tý/Ngọ:** "**TIỀN BẦN HẬU PHÚ**" — tuổi trẻ vất vả nhưng nhờ kiên
trì và tài năng, dễ **GIÀU CÓ về sau**.

🌟 **Đắc Dần/Thân:**
- Người **GIỎI ĂN NÓI**
- **GIỎI KINH DOANH**
- Dễ gặp được **THỜI VẬN PHÙ HỢP**

⚠️ **Hãm địa:** hay **THẤT THOÁT, HAO TÁN**, làm ăn vất vả nhưng **lợi nhuận
không ổn định**.`,
  },

  {
    id: 'thien-khoc-tai-tu-tuc',
    title: 'Thiên Khốc tại Tử Tức',
    sao: ['Thiên Khốc'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `⚠️ **Thiên Khốc tại Tử Tức:**
- **KHÓ SINH CON**, **KHÓ NUÔI CON**
- Dễ bị **MẤT CON**
- Gặp nhiều chuyện **PHIỀN MUỘN, SẦU NÃO** về vấn đề con cái

🌟 **Đắc địa Tý/Ngọ:**
- Tuổi trẻ vất vả với con cái
- Về già **ĐƯỢC NHỜ con cái**
- Con cái **HIẾU THẢO, THÀNH ĐẠT**

🌟 **Đắc Dần/Thân:**
- Con cái **TÀI NĂNG, GIỎI GIANG**
- Nhưng **SỐNG XA CHA MẸ**, không được ở gần
- Hay **đi xa lập nghiệp**`,
  },

  {
    id: 'thien-khoc-tai-phu-the',
    title: 'Thiên Khốc tại Phu Thê',
    sao: ['Thiên Khốc'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `⚠️ **Thiên Khốc tại Phu Thê:**
- Vợ chồng hay **BẤT ĐỒNG QUAN ĐIỂM**
- Hay **GIẬN HỜN, KHÓC LÓC, THAN VÃN**
- Có xu hướng **BẮT BẺ NHAU**
- Đương số hay **BUỒN và RƠI NHIỀU NƯỚC MẮT** vì chuyện hôn nhân, gia đình, tình
  duyên

⚠️ **+ Kình Dương / Đà La / Không Kiếp / Hóa Kỵ:** vợ chồng **XUNG KHẮC**.

🌟 **Đắc địa Tý/Ngọ:** vợ chồng ban đầu nhiều **XÍCH MÍCH** nhưng **HÓA GIẢI** —
càng về sau càng **HẠNH PHÚC, SUNG TÚC**.

🌟 **Đắc Dần/Thân:** vợ chồng **QUÊ QUÁN XA NHAU**, sau khi kết hôn **đi xa lập
nghiệp**.`,
  },

  {
    id: 'thien-khoc-tai-huynh-de',
    title: 'Thiên Khốc tại Huynh Đệ',
    sao: ['Thiên Khốc'],
    cung: ['Huynh Đệ'],
    doUuTien: 70,
    tomTat: `⚠️ **Thiên Khốc tại Huynh Đệ:**
- Anh chị em **SỐNG XA NHAU**, **KHÔNG GẦN GŨI**

⚠️ **+ Sao Xấu:**
- Đương số trải qua nhiều chuyện **BUỒN vì anh chị em**

🌟 **Đắc địa:** anh chị em **HÒA NHÃ**, biết **QUAN TÂM NHAU** mặc dù có phần
**XA CÁCH về địa lý**.`,
  },

  {
    id: 'thien-khoc-loi-khuyen',
    title: 'Lời khuyên cho người Thiên Khốc',
    sao: ['Thiên Khốc'],
    doUuTien: 35,
    tomTat: `💡 **Người có sao Thiên Khốc trong lá số dẫu đường đời nhiều NƯỚC MẮT, THĂNG
TRẦM**, nhưng chính điều này lại giúp họ **TRƯỞNG THÀNH, KIÊN CƯỜNG** và **SÁNG
SUỐT** hơn.

🌟 **Sức mạnh:**
- **TÀI VĂN CHƯƠNG** (khi đắc địa)
- **HÙNG BIỆN sắc bén**
- **NGHỊ LỰC** vượt khó
- Khi qua đời **được nhiều người thương tiếc**

⚠️ **Yếu điểm:**
- **LẦM LÌ, BI QUAN**
- Hay **KHÓC THẦM, BUỒN PHIỀN**
- **TRÍ NHỚ kém**, đãng trí
- Dễ mắc bệnh **HÔ HẤP, THẦN KINH**

💡 **Bí quyết phát huy Thiên Khốc:**
- **PHÁT HUY Ý CHÍ** vượt khó - đặc biệt khi đắc Tý/Ngọ
- **DÙNG TÀI ĂN NÓI** vào nghề **HÙNG BIỆN, CHÍNH TRỊ, GIẢNG DẠY**
- **CHĂM SÓC SỨC KHỎE** - phổi, mũi họng
- **GIẢI TỎA CẢM XÚC** - không kìm nén nước mắt thành u uất
- **QUÝ TRỌNG niềm vui**, biết **THƯƠNG CẢM và SẺ CHIA** với người khác

→ Ngôi sao này như **lời nhắc nhở**: con người phải **biết quý trọng NIỀM VUI**,
**biết THƯƠNG CẢM và SẺ CHIA** với người khác.`,
  },
];
