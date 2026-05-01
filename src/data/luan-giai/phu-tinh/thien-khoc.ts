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

⚠️ **Trí nhớ:**
- **KHÔNG TỐT**
- Đầu óc **LƠ ĐÃNG, KHÔNG TẬP TRUNG**
- Dễ **GIẬT MÌNH**`,
  },

  {
    id: 'thien-khoc-tai-menh-nu',
    sao: ['Thiên Khốc'],
    cung: ['Mệnh'],
    gioiTinh: 'Nữ',
    doUuTien: 75,
    tomTat: `⚠️ **Thiên Khốc thủ Mệnh - Nữ mệnh:**
- **KHÓC NHIỀU vì chuyện TÌNH CẢM**
- Lo nghĩ nhiều, hay **KHÓC LÓC**`,
  },

  {
    id: 'thien-khoc-tai-menh-dac',
    sao: ['Thiên Khốc'],
    cung: ['Mệnh'],
    chi: ['Tý', 'Ngọ', 'Dần', 'Thân'],
    doUuTien: 78,
    tomTat: `🌟 **Thiên Khốc thủ Mệnh ĐẮC ĐỊA (Tý/Ngọ/Dần/Thân):**
- Người có **Ý CHÍ, TÀI NĂNG**
- Đặc biệt là **TÀI VĂN CHƯƠNG, CHỮ NGHĨA**
- **TÀI ĂN NÓI**, giỏi **PHẢN BIỆN, HÙNG BIỆN**
- Giọng nói **ĐANH THÉP**
- Có **NĂNG KHIẾU CHÍNH TRỊ**
- Tuổi trẻ **VẤT VẢ, BÔN BA**, gặp nhiều **đau khổ, hoàn cảnh trớ trêu**
- Nhờ đó có **Ý CHÍ và QUYẾT TÂM** vượt lên trên hoàn cảnh`,
  },

  {
    id: 'thien-khoc-tai-menh-ham',
    sao: ['Thiên Khốc'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    doUuTien: 75,
    tomTat: `⚠️ **Thiên Khốc thủ Mệnh Hãm địa:** chủ về **CẢN TRỞ, ĐAU KHỔ, XUI XẺO**.`,
  },

  {
    id: 'thien-khoc-tai-menh-ham-khong-kiep-dieu-khach-cu-mon',
    sao: ['Thiên Khốc'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Điếu Khách', 'Cự Môn'],
    doUuTien: 72,
    tomTat: `⚠️ **Thiên Khốc Hãm địa tại Mệnh + Không Kiếp / Điếu Khách / Cự Môn:**
chủ **TANG TÓC, TAI ƯƠNG, BỆNH TẬT SUỐT ĐỜI**.`,
  },

  {
    id: 'thien-khoc-tai-menh-tuat-thin',
    sao: ['Thiên Khốc'],
    cung: ['Mệnh'],
    chi: ['Tuất', 'Thìn'],
    doUuTien: 73,
    tomTat: `⚠️ **Thiên Khốc tại Mệnh ở Tuất / Thìn:** hay **TAI NẠN**, **ĐOẢN MỆNH**.`,
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
- **BÔN BA, VẤT VẢ** để mưu sinh`,
  },

  {
    id: 'thien-khoc-tai-phu-mau-khoc-hu-ty-ngo',
    sao: ['Thiên Khốc'],
    cung: ['Phụ Mẫu'],
    chi: ['Tý', 'Ngọ'],
    ketHop: ['Thiên Hư'],
    doUuTien: 72,
    tomTat: `🌟 **Khốc Hư Tý/Ngọ tại Phụ Mẫu:** cha mẹ **HỒI TRẺ VẤT VẢ**, về già
**GẶT HÁI được NHIỀU THÀNH CÔNG**.`,
  },

  {
    id: 'thien-khoc-tai-phu-mau-ma-khoc-khach',
    sao: ['Thiên Khốc'],
    cung: ['Phụ Mẫu'],
    chi: ['Dần', 'Thân'],
    ketHop: ['Thiên Mã', 'Điếu Khách'],
    doUuTien: 72,
    tomTat: `🌟 **Thiên Khốc + Thiên Mã + Điếu Khách tại Dần/Thân (Mã Khốc Khách)
ở Phụ Mẫu:**
- Cha mẹ **TÀI NĂNG, GIỎI GIANG**
- Hay **ĐI XA**, gặp được **THỜI THẾ TỐT**`,
  },

  {
    id: 'thien-khoc-tai-phu-mau-sat-tinh',
    sao: ['Thiên Khốc'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Tang Môn', 'Thái Tuế', 'Hóa Kỵ', 'Thiên Hình'],
    doUuTien: 70,
    tomTat: `⚠️ **Thiên Khốc tại Phụ Mẫu + Sát Tinh nặng (Không Kiếp, Tang, Tuế, Hóa
Kỵ, Hình):**
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
  XẺO** và có **CHUYỆN BUỒN KHỔ**`,
  },

  {
    id: 'thien-khoc-tai-phuc-duc-dac-cat-tinh',
    sao: ['Thiên Khốc'],
    cung: ['Phúc Đức'],
    chi: ['Tý', 'Ngọ', 'Dần', 'Thân'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 72,
    tomTat: `🌟 **Thiên Khốc Đắc địa (Tý/Ngọ/Dần/Thân) + Cát Tinh tại Phúc Đức:**
- **MỒ MẢ GIA TIÊN ĐẸP**, ở vị trí tốt
- Dòng họ có **PHÚC DÀY**
- Người trong nhà đương số **THÀNH ĐẠT**
- Đạt được **NHIỀU THÀNH TỰU**`,
  },

  {
    id: 'thien-khoc-tai-phuc-duc-ham-sat-tinh',
    sao: ['Thiên Khốc'],
    cung: ['Phúc Đức'],
    trangThai: ['Hãm'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 70,
    tomTat: `⚠️ **Thiên Khốc Hãm địa + Sát Tinh (Không Kiếp / Kình / Đà / Hỏa Linh)
tại Phúc Đức:**
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
- Hay **LO NGHĨ, ƯU SẦU** vì tiền bạc`,
  },

  {
    id: 'thien-khoc-tai-dien-trach-dan-than',
    sao: ['Thiên Khốc'],
    cung: ['Điền Trạch'],
    chi: ['Dần', 'Thân'],
    doUuTien: 70,
    tomTat: `🌟 **Thiên Khốc tại Điền Trạch ở Dần / Thân:**
- Đương số hay **CHUYỂN NHÀ**
- Có **DUYÊN với KINH DOANH**, đặc biệt là **BUÔN BÁN BẤT ĐỘNG SẢN**
- Có **KHẢ NĂNG KIẾM TIỀN tốt**
- Trong nhà có nhiều **THIẾT BỊ ÂM THANH, LOA ĐÀI**`,
  },

  {
    id: 'thien-khoc-tai-dien-trach-ty-ngo',
    sao: ['Thiên Khốc'],
    cung: ['Điền Trạch'],
    chi: ['Tý', 'Ngọ'],
    doUuTien: 70,
    tomTat: `🌟 **Thiên Khốc Đắc địa Tý/Ngọ tại Điền Trạch:** "**TIỀN BẦN HẬU PHÚ**" —
ban đầu khó khăn, về sau phát đạt.`,
  },

  {
    id: 'thien-khoc-tai-quan-loc',
    title: 'Thiên Khốc tại Quan Lộc',
    sao: ['Thiên Khốc'],
    cung: ['Quan Lộc'],
    doUuTien: 75,
    tomTat: `⚠️ **Thiên Khốc tại Quan Lộc:**
- Sự nghiệp **trắc trở, khó khăn** ở những ngày đầu
- Tuy nhiên về sau dễ có **TIẾNG TĂM, CÔNG DANH**

🌟 **Nghề phù hợp** (tính chất buồn bã, khó khăn):
- **HỘI CHỮ THẬP ĐỎ**
- **BÁC SĨ TÂM LÝ**
- **BAN TANG LỄ**
- **CÔNG TÁC XÃ HỘI**, **TỪ THIỆN**`,
  },

  {
    id: 'thien-khoc-tai-quan-loc-ty-ngo',
    sao: ['Thiên Khốc'],
    cung: ['Quan Lộc'],
    chi: ['Tý', 'Ngọ'],
    doUuTien: 72,
    tomTat: `🌟 **Thiên Khốc Đắc địa Tý/Ngọ tại Quan Lộc:**
- Tuổi trẻ **GIAN TRUÂN** nhưng **HẬU VẬN THÀNH CÔNG**
- Sự nghiệp **ỔN ĐỊNH và PHÁT TRIỂN**`,
  },

  {
    id: 'thien-khoc-tai-quan-loc-dan-than',
    sao: ['Thiên Khốc'],
    cung: ['Quan Lộc'],
    chi: ['Dần', 'Thân'],
    doUuTien: 72,
    tomTat: `🌟 **Thiên Khốc Đắc địa Dần/Thân tại Quan Lộc:**
- Chủ mệnh **TÀI NĂNG**, gặp **THỜI THẾ TỐT**
- Đạt được **THÀNH TỰU LỚN**`,
  },

  {
    id: 'thien-khoc-tai-quan-loc-ham',
    sao: ['Thiên Khốc'],
    cung: ['Quan Lộc'],
    trangThai: ['Hãm'],
    doUuTien: 72,
    tomTat: `⚠️ **Thiên Khốc Hãm địa tại Quan Lộc:**
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
- **THỔI NHIỀU KÈN TRỐNG**`,
  },

  {
    id: 'thien-khoc-tai-tat-ach-dac',
    sao: ['Thiên Khốc'],
    cung: ['Tật Ách'],
    chi: ['Tý', 'Ngọ', 'Dần', 'Thân'],
    doUuTien: 73,
    tomTat: `🌟 **Thiên Khốc Đắc địa (Tý/Ngọ/Dần/Thân) tại Tật Ách:** sức khỏe **ổn
định**, ít bệnh nặng, khi đau ốm **được người thân quan tâm chăm sóc cẩn thận**.`,
  },

  {
    id: 'thien-khoc-tai-tai-bach',
    title: 'Thiên Khốc tại Tài Bạch',
    sao: ['Thiên Khốc'],
    cung: ['Tài Bạch'],
    doUuTien: 72,
    tomTat: `⚠️ **Thiên Khốc tại Tài Bạch:**
- Đương số gặp nhiều **KHÓ KHĂN trong việc kiếm tiền**
- Hay **LO LẮNG, SUY NGHĨ** vì vấn đề tiền bạc, tài chính
- Việc kiếm tiền có lúc **VẤT VẢ**`,
  },

  {
    id: 'thien-khoc-tai-tai-bach-ty-ngo',
    sao: ['Thiên Khốc'],
    cung: ['Tài Bạch'],
    chi: ['Tý', 'Ngọ'],
    doUuTien: 70,
    tomTat: `🌟 **Thiên Khốc Đắc địa Tý/Ngọ tại Tài Bạch:** "**TIỀN BẦN HẬU PHÚ**" —
tuổi trẻ vất vả nhưng nhờ kiên trì và tài năng, dễ **GIÀU CÓ về sau**.`,
  },

  {
    id: 'thien-khoc-tai-tai-bach-dan-than',
    sao: ['Thiên Khốc'],
    cung: ['Tài Bạch'],
    chi: ['Dần', 'Thân'],
    doUuTien: 70,
    tomTat: `🌟 **Thiên Khốc Đắc địa Dần/Thân tại Tài Bạch:**
- Người **GIỎI ĂN NÓI**
- **GIỎI KINH DOANH**
- Dễ gặp được **THỜI VẬN PHÙ HỢP**`,
  },

  {
    id: 'thien-khoc-tai-tai-bach-ham',
    sao: ['Thiên Khốc'],
    cung: ['Tài Bạch'],
    trangThai: ['Hãm'],
    doUuTien: 70,
    tomTat: `⚠️ **Thiên Khốc Hãm địa tại Tài Bạch:** hay **THẤT THOÁT, HAO TÁN**, làm
ăn vất vả nhưng **lợi nhuận không ổn định**.`,
  },

  {
    id: 'thien-khoc-tai-tu-tuc',
    title: 'Thiên Khốc tại Tử Tức',
    sao: ['Thiên Khốc'],
    cung: ['Tử Tức'],
    doUuTien: 72,
    tomTat: `⚠️ **Thiên Khốc tại Tử Tức:**
- **KHÓ SINH CON**, **KHÓ NUÔI CON**
- Dễ bị **MẤT CON**
- Gặp nhiều chuyện **PHIỀN MUỘN, SẦU NÃO** về vấn đề con cái`,
  },

  {
    id: 'thien-khoc-tai-tu-tuc-ty-ngo',
    sao: ['Thiên Khốc'],
    cung: ['Tử Tức'],
    chi: ['Tý', 'Ngọ'],
    doUuTien: 70,
    tomTat: `🌟 **Thiên Khốc Đắc địa Tý/Ngọ tại Tử Tức:**
- Tuổi trẻ vất vả với con cái
- Về già **ĐƯỢC NHỜ con cái**
- Con cái **HIẾU THẢO, THÀNH ĐẠT**`,
  },

  {
    id: 'thien-khoc-tai-tu-tuc-dan-than',
    sao: ['Thiên Khốc'],
    cung: ['Tử Tức'],
    chi: ['Dần', 'Thân'],
    doUuTien: 70,
    tomTat: `🌟 **Thiên Khốc Đắc địa Dần/Thân tại Tử Tức:**
- Con cái **TÀI NĂNG, GIỎI GIANG**
- Nhưng **SỐNG XA CHA MẸ**, không được ở gần
- Hay **đi xa lập nghiệp**`,
  },

  {
    id: 'thien-khoc-tai-phu-the',
    title: 'Thiên Khốc tại Phu Thê',
    sao: ['Thiên Khốc'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `⚠️ **Thiên Khốc tại Phu Thê:**
- Vợ chồng hay **BẤT ĐỒNG QUAN ĐIỂM**
- Hay **GIẬN HỜN, KHÓC LÓC, THAN VÃN**
- Có xu hướng **BẮT BẺ NHAU**
- Đương số hay **BUỒN và RƠI NHIỀU NƯỚC MẮT** vì chuyện hôn nhân, gia đình, tình
  duyên`,
  },

  {
    id: 'thien-khoc-tai-phu-the-kinh-da-khong-kiep-ky',
    sao: ['Thiên Khốc'],
    cung: ['Phu Thê'],
    ketHop: ['Kình Dương', 'Đà La', 'Địa Không', 'Địa Kiếp', 'Hóa Kỵ'],
    doUuTien: 72,
    tomTat: `⚠️ **Thiên Khốc tại Phu Thê + Kình Dương / Đà La / Không Kiếp / Hóa Kỵ:**
vợ chồng **XUNG KHẮC**.`,
  },

  {
    id: 'thien-khoc-tai-phu-the-ty-ngo',
    sao: ['Thiên Khốc'],
    cung: ['Phu Thê'],
    chi: ['Tý', 'Ngọ'],
    doUuTien: 72,
    tomTat: `🌟 **Thiên Khốc Đắc địa Tý/Ngọ tại Phu Thê:** vợ chồng ban đầu nhiều
**XÍCH MÍCH** nhưng **HÓA GIẢI** — càng về sau càng **HẠNH PHÚC, SUNG TÚC**.`,
  },

  {
    id: 'thien-khoc-tai-phu-the-dan-than',
    sao: ['Thiên Khốc'],
    cung: ['Phu Thê'],
    chi: ['Dần', 'Thân'],
    doUuTien: 72,
    tomTat: `🌟 **Thiên Khốc Đắc địa Dần/Thân tại Phu Thê:** vợ chồng **QUÊ QUÁN XA
NHAU**, sau khi kết hôn **đi xa lập nghiệp**.`,
  },

  {
    id: 'thien-khoc-tai-huynh-de',
    title: 'Thiên Khốc tại Huynh Đệ',
    sao: ['Thiên Khốc'],
    cung: ['Huynh Đệ'],
    doUuTien: 70,
    tomTat: `⚠️ **Thiên Khốc tại Huynh Đệ:** anh chị em **SỐNG XA NHAU**, **KHÔNG GẦN
GŨI**.`,
  },

  {
    id: 'thien-khoc-tai-huynh-de-ham-sat-tinh',
    sao: ['Thiên Khốc'],
    cung: ['Huynh Đệ'],
    trangThai: ['Hãm'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 65,
    tomTat: `⚠️ **Thiên Khốc Hãm địa + sát tinh tại Huynh Đệ:** đương số trải qua nhiều
chuyện **BUỒN vì anh chị em**.`,
  },

  {
    id: 'thien-khoc-tai-huynh-de-dac',
    sao: ['Thiên Khốc'],
    cung: ['Huynh Đệ'],
    chi: ['Tý', 'Ngọ', 'Dần', 'Thân'],
    doUuTien: 65,
    tomTat: `🌟 **Thiên Khốc Đắc địa (Tý/Ngọ/Dần/Thân) tại Huynh Đệ:** anh chị em
**HÒA NHÃ**, biết **QUAN TÂM NHAU** mặc dù có phần **XA CÁCH về địa lý**.`,
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
