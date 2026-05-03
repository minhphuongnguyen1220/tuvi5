import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THIÊN HƯ - Thủy, Bại Tinh.
 * LUÔN đồng cung TUẾ PHÁ (quy luật an sao - hardcode trong engine).
 * Bộ KHỐC HƯ với Thiên Khốc - phần CHUNG bộ này viết tại đây với tag ['Thiên Khốc', 'Thiên Hư'].
 *
 * Một trong Lục Bại Tinh: Tiểu Hao, Đại Hao, Thiên Khốc, Thiên Hư, Tang Môn, Bạch Hổ.
 * Đắc địa Tý/Ngọ: cách "Khốc Hư Tý Ngọ - tiền bần hậu phú".
 */
export const luanGiai_ThienHu: DoanLuanGiai[] = [
  {
    id: 'thien-hu-tinh-chat-chung',
    title: 'Thiên Hư - Đặc tính chung',
    sao: ['Thiên Hư'],
    doUuTien: 32,
    tomTat: `**Thiên Hư** — phụ tinh **BẠI TINH**.

**Ngũ hành:** **Thủy**.

**Hóa khí:** **Bại Tinh**.

**Quy luật an sao:**
- **LUÔN đồng cung với TUẾ PHÁ** (hardcode trong engine)
- Tam hợp với **Tang Môn + Điếu Khách** — vòng tam hợp **CHỐNG ĐỐI**, tính
  xây dựng KHÔNG cao
- Quan hệ **mật thiết** với **THIÊN KHỐC** — tạo bộ **KHỐC HƯ**

**Vai trò:**
- Gây thêm **CẢN TRỞ**
- **REO RẮC tâm lý HOANG MANG, LO LẮNG**
- **U BUỒN, NẶNG TÂM TƯ**

**Đặc tính HÀNH THỦY:**
Có tính **THẤM XUỐNG**: chủ về **TÌNH CẢM ỦY MỊ, U SẦU, KHÉP KÍN, NỘI TÂM**.

**Đặc tính:** **CẢN TRỞ, KÊU THAN, TRÁCH MÓC, OÁN HẬN, PHIỀN NÃO, KHỔ ĐAU,
XUI XẺO**.`,
  },

  {
    id: 'khoc-hu-ty-ngo-tien-ban-hau-phu',
    title: 'Khốc Hư Tý Ngọ - "Tiền bần hậu phú"',
    sao: ['Thiên Khốc', 'Thiên Hư'],
    chi: ['Tý', 'Ngọ'],
    doUuTien: 85,
    tomTat: `**Khốc Hư Tý Ngọ - tiền bần hậu phú** (câu phú nổi tiếng):

> "**Khốc Hư Tý Ngọ, tiền bần hậu phú.**"

**Khi Thiên Khốc + Thiên Hư đứng chung tại cung TÝ hoặc NGỌ - ĐẮC ĐỊA:**

**Đặc trưng:**
- **TUỔI TRẺ VẤT VẢ, GIAN LAO**
- Nhờ **NGHỊ LỰC PHI THƯỜNG**
- **PHẤN ĐẤU không mệt mỏi**
-: Tiến tới **THÀNH CÔNG, VINH QUANG XỨNG ĐÁNG**

**Triết lý:**
- **TIẾNG KHÓC, KÊU THAN, OÁN HẬN** dần trở thành **TIẾNG CƯỜI, TIẾNG VUI ĐÙA,
  HÒ REO**
- Cách "**TRƯỚC KHỔ SAU SƯỚNG**"
- **GIAN NAN làm BÀN ĐẠP** để **VƯỢT SỐ MỆNH**
- Càng gặp **GIAN NAN càng thêm BẢN LĨNH**

- Đây là **CÁCH ĐẸP NHẤT** của bộ Khốc Hư — biến **bại tinh thành quý cách**.

Ý nghĩa càng **RÕ RỆT** nếu đi kèm với các **CÁT TINH** khác.`,
  },

  {
    id: 'khoc-hu-luc-bai-tinh',
    title: 'Khốc Hư trong Lục Bại Tinh',
    sao: ['Thiên Khốc', 'Thiên Hư'],
    doUuTien: 50,
    tomTat: `**Bộ KHỐC HƯ** = Thiên Khốc + Thiên Hư — một trong **LỤC BẠI TINH** quan
trọng:

**LỤC BẠI TINH** = Tiểu Hao + Đại Hao + Thiên Khốc + Thiên Hư + Tang Môn +
Bạch Hổ.

**Đặc trưng cặp đôi:**
- **Thiên Khốc:** chủ **TIẾNG KHÓC**, **buồn rầu, rầu rĩ**
- **Thiên Hư:** chủ **CẢN TRỞ, ƯU PHIỀN**, kêu than oán hận
- **Đứng chung** = **NƯỚC MẮT + TIẾNG KÊU THAN** — bộ buồn nhất tử vi

**Trừ trường hợp đắc địa Tý/Ngọ** (tiền bần hậu phú):
- Bộ này thường **GIEO RẮC NỖI BUỒN** cho cung sao đó đóng
- Cần **CÁT TINH HÓA GIẢI** mới giảm bớt`,
  },

  {
    id: 'thien-hu-tuong-mao',
    title: 'Thiên Hư - Tướng mạo',
    sao: ['Thiên Hư'],
    cung: ['Mệnh'],
    doUuTien: 45,
    tomTat: `**Thiên Hư thủ Mệnh - Tướng mạo:**

**Đặc điểm bên ngoài:**
- **DA XANH XAO**
- **MẮT có QUẦNG ĐEN/THÂM**
- **DIỆN MẠO BUỒN TẺ**, mặt **THIẾU KHÍ SẮC**
- **MẮT KÉM THẦN**, hay **TRÔNG XUỐNG**, không trông xa
- Toát lên vẻ **TRẦM MẶC**, ít cười
- Gương mặt **NHỢT NHẠT**, mắt **không có hồn**`,
  },

  {
    id: 'thien-hu-tai-menh',
    title: 'Thiên Hư tại Mệnh - tính tình ưu tư',
    sao: ['Thiên Hư'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `**Thiên Hư thủ Mệnh - tính tình:**

**Tâm lý:**
- **U BUỒN, ỦY MỊ, ỦY SẦU**, hay **PHIỀN MUỘN**
- **BI QUAN, YẾM THẾ**
- **ĐÃNG TRÍ**, nghĩ đâu quên đó
- Hay **GIẬT MÌNH HỐT HOẢNG, HOANG MANG**
- **"ĂN KHÔNG NGON, NGỦ KHÔNG YÊN"**
- Lúc nào cũng **NƠM NỚP LO LẮNG**

**Lời nói:**
- Thích **KÊU THAN, KỂ LỂ, CẰN NHẰN**
- Đôi khi hay **ĂN NÓI SAI NGOA**`,
  },

  {
    id: 'thien-hu-tai-menh-ham',
    sao: ['Thiên Hư'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    doUuTien: 75,
    tomTat: `**Thiên Hư Hãm địa tại Mệnh - phúc thọ:**
- Sao chủ **CẢN TRỞ, KHỐN KHỔ, ĐAU BUỒN** trong tâm hồn
- **XUI XẺO dưới nhiều hình thức**
- Có thể **YỂU**`,
  },

  {
    id: 'thien-hu-tai-menh-khong-kiep-dieu-khach-cu-mon',
    sao: ['Thiên Hư'],
    cung: ['Mệnh'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Điếu Khách', 'Cự Môn'],
    doUuTien: 72,
    tomTat: `**Thiên Hư tại Mệnh + Không Kiếp / Điếu Khách / Cự Môn:**
- **SUỐT ĐỜI BI AI**
- Lúc nào cũng **đau buồn, than khóc, tiếc thương**
- Vì **bệnh tật, vì TANG TÓC**`,
  },

  {
    id: 'thien-hu-dac-ty-ngo-hung-bien',
    title: 'Thiên Hư đắc Tý/Ngọ + Khốc - tài hùng biện chính trị',
    sao: ['Thiên Hư'],
    cung: ['Mệnh'],
    chi: ['Tý', 'Ngọ'],
    ketHop: ['Thiên Khốc'],
    doUuTien: 82,
    tomTat: `**Thiên Hư + Thiên Khốc đắc địa tại TÝ hoặc NGỌ + Mệnh:**

**Đặc trưng:**
- Người có **CHÍ LỚN**
- **VĂN TÀI LỖI LẠC**, nhất là **TÀI HÙNG BIỆN**
- Nói năng **ĐANH THÉP, HÙNG HỒN**
- Có **KHIẾU HOẠT ĐỘNG CHÍNH TRỊ**

**Cuộc đời:**
- Tuổi trẻ thường **VẤT VẢ, KHỔ ĐAU**, gặp nhiều cảnh **TRỚ TRÊU**
- Nhưng nhờ đó làm **ĐIỂM BẬT**, có **Ý CHÍ VỮNG VÀNG** để **CHIẾN THẮNG SỐ
  PHẬN**

Đây là cách **HÓA GIẢI TỐT NHẤT** của Thiên Hư — biến **u sầu thành nội lực**.`,
  },

  {
    id: 'khoc-hu-sat-pha-quyen-cao',
    title: 'Khốc Hư + Thất Sát/Phá Quân đắc địa - quyền cao chức trọng',
    sao: ['Thiên Khốc', 'Thiên Hư'],
    ketHop: ['Thất Sát', 'Phá Quân'],
    doUuTien: 78,
    tomTat: `**Khốc Hư + Thất Sát đắc địa** hoặc **Khốc Hư + Phá Quân đắc địa** (đồng cung):

**Đặc trưng:**
- Người có **QUYỀN CAO CHỨC TRỌNG**
- **UY DANH LỪNG LẪY**
- Được **THIÊN HẠ NỂ PHỤC** vì **UY và TÀI**

- Đây là cách **BIẾN BẠI TINH thành QUYỀN TINH** — bộ Khốc Hư khi gặp **võ
tướng (Sát/Phá)** đắc địa thì **quyền lực nổi bật**.

**Lưu ý:** Sát/Phá phải **ĐẮC ĐỊA** mới thành cách. Nếu hãm địa thì lại càng
**hung dữ thêm**.`,
  },

  {
    id: 'thien-hu-tai-phu-mau',
    title: 'Thiên Hư tại Phụ Mẫu',
    sao: ['Thiên Hư'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Thiên Hư tại Phụ Mẫu:**
- Cha mẹ **VẤT VẢ**
- Là người hay **BẤT BÌNH**, gặp **NGHỊCH CẢNH**
- Hay **ĐỨNG LÊN ĐẤU TRANH** trong công việc lẫn đời sống
- Cha mẹ hay **Ủ RŨ, Ủ SẦU**, **THAN KHỔ** trước những bất công`,
  },

  {
    id: 'thien-hu-tai-phu-mau-khoc-hu-ty-ngo',
    sao: ['Thiên Hư'],
    cung: ['Phụ Mẫu'],
    chi: ['Tý', 'Ngọ'],
    ketHop: ['Thiên Khốc'],
    doUuTien: 72,
    tomTat: `**Khốc Hư Tý/Ngọ tại Phụ Mẫu:** cha mẹ **TUỔI TRẺ VẤT VẢ**, **về già
THÀNH CÔNG MỸ MÃN**.`,
  },

  {
    id: 'thien-hu-tai-phu-mau-sat-tinh',
    sao: ['Thiên Hư'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 70,
    tomTat: `**Thiên Hư tại Phụ Mẫu + Sát Tinh:** cha mẹ dễ **NÓNG NẢY, BẢO THỦ**,
gia đình **THIẾU HÒA KHÍ**, dẫn đến cảnh **LY TÁN, GÓA BỤA**.`,
  },

  {
    id: 'thien-hu-tai-phuc-duc',
    title: 'Thiên Hư tại Phúc Đức',
    sao: ['Thiên Hư'],
    cung: ['Phúc Đức'],
    doUuTien: 70,
    tomTat: `**Thiên Hư tại Phúc Đức:** ảnh hưởng phúc phần dòng họ — biểu hiện rõ
theo trạng thái đắc / hãm.`,
  },

  {
    id: 'thien-hu-tai-phuc-duc-ham',
    sao: ['Thiên Hư'],
    cung: ['Phúc Đức'],
    trangThai: ['Hãm'],
    doUuTien: 75,
    tomTat: `**Thiên Hư Hãm địa tại Phúc Đức:**
- **GIẢM THỌ**
- Có **ÂM HỒN BÁO OÁN**
- Trong dòng họ nhiều người **VẤT VẢ, KHÔNG MAY MẮN**
- Hay gặp **HOÀN CẢNH TRỚ TRÊU**, gây **bất mãn, buồn khổ**`,
  },

  {
    id: 'thien-hu-tai-phuc-duc-ty-ngo',
    sao: ['Thiên Hư'],
    cung: ['Phúc Đức'],
    chi: ['Tý', 'Ngọ'],
    doUuTien: 72,
    tomTat: `**Thiên Hư Đắc địa Tý/Ngọ tại Phúc Đức:**
- **MỒ MẢ PHÁT ĐẠT**
- **PHÚC DÀY**
- Dòng họ có nhiều người **THÀNH CÔNG**`,
  },

  {
    id: 'thien-hu-tai-dien-trach',
    title: 'Thiên Hư tại Điền Trạch',
    sao: ['Thiên Hư'],
    cung: ['Điền Trạch'],
    doUuTien: 72,
    tomTat: `**Thiên Hư tại Điền Trạch:**
- **KHÓ KIẾM TIỀN**, **HAO TÀI**
- Hay **LO ÂU, SẦU BI** vì tiền bạc, của cải
- Nhà thường hay **HỎNG CỬA CỔNG**
- **CÔNG NĂNG và THIẾT KẾ KHÔNG HỢP LÝ**: gây khó chịu cho người ở
- **ĐẤT Ở XẤU**, dễ phải có lần **BÁN NHÀ, BÁN ĐẤT**`,
  },

  {
    id: 'thien-hu-tai-dien-trach-ty-ngo',
    sao: ['Thiên Hư'],
    cung: ['Điền Trạch'],
    chi: ['Tý', 'Ngọ'],
    doUuTien: 70,
    tomTat: `**Thiên Hư Đắc địa Tý/Ngọ tại Điền Trạch:** **TIỀN BẦN HẬU PHÚ** —
trước nghèo sau giàu.`,
  },

  {
    id: 'thien-hu-tai-dien-trach-quang-quy-ta-huu-khoi-viet',
    sao: ['Thiên Hư'],
    cung: ['Điền Trạch'],
    ketHop: ['Ân Quang', 'Thiên Quý', 'Tả Phù', 'Hữu Bật', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 70,
    tomTat: `**Thiên Hư tại Điền Trạch + Cát Tinh (Quang Quý / Tả Hữu / Khôi Việt):**
- Đất đai về sau **GIA TĂNG PHÚC KHÍ**
- Gia đình **HƯNG THỊNH**`,
  },

  {
    id: 'thien-hu-tai-quan-loc',
    title: 'Thiên Hư tại Quan Lộc',
    sao: ['Thiên Hư'],
    cung: ['Quan Lộc'],
    doUuTien: 75,
    tomTat: `**Thiên Hư tại Quan Lộc:**
- Công việc hay gặp **CẢNH BẤT CÔNG, CẢN TRỞ**
- Gây **BUỒN KHỔ, SẦU BI**
- Cùng Tuế Phá (đồng cung): dễ **THUA THIỆT, ĐỨNG SAU**
- Sinh **PHẪN UẤT, KHÓ CHỊU, BẤT BÌNH** mà không biết kêu than với ai

**Nghề phù hợp:**
- **HỘI CHỮ THẬP ĐỎ**
- **BÁC SỸ TÂM LÝ**
- **BAN TANG LỄ**
- Các công việc liên quan đến **việc buồn**, **hoàn cảnh khó khăn**`,
  },

  {
    id: 'thien-hu-tai-quan-loc-ty-ngo',
    sao: ['Thiên Hư'],
    cung: ['Quan Lộc'],
    chi: ['Tý', 'Ngọ'],
    doUuTien: 72,
    tomTat: `**Thiên Hư Đắc địa Tý/Ngọ tại Quan Lộc:**
- **TUỔI TRẺ VẤT VẢ**, về sau **THÀNH CÔNG, THÀNH ĐẠT**
- Làm được **ĐẠI SỰ**`,
  },

  {
    id: 'thien-hu-tai-no-boc',
    title: 'Thiên Hư tại Nô Bộc',
    sao: ['Thiên Hư'],
    cung: ['Nô Bộc'],
    doUuTien: 70,
    tomTat: `**Thiên Hư tại Nô Bộc:**
- Hay bị bạn bè, đồng nghiệp, cấp dưới **NÓI XẤU**, **KHÔNG THÀNH THẬT**
- **Không được bạn em ưa**
- Hay có **BẤT ĐỒNG, KHÓ CHỊU** với nhau
- Hay phải **KÊU THAN vì bạn bè**`,
  },

  {
    id: 'thien-hu-tai-no-boc-khong-kiep-kinh-da-hinh-sat',
    sao: ['Thiên Hư'],
    cung: ['Nô Bộc'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Kình Dương', 'Đà La', 'Thiên Hình'],
    doUuTien: 67,
    tomTat: `**Thiên Hư tại Nô Bộc + Không / Địa Kiếp / Kình Đà / Hình Sát:** quan
hệ bạn bè, đồng nghiệp nhiều **THỊ PHI**, khó giữ tình cảm bền chặt — bạn bè
**PHẢN BỘI, LỢI DỤNG, LỪA GẠT**.`,
  },

  {
    id: 'thien-hu-tai-no-boc-quang-quy-ta-huu-khoi-viet',
    sao: ['Thiên Hư'],
    cung: ['Nô Bộc'],
    ketHop: ['Ân Quang', 'Thiên Quý', 'Tả Phù', 'Hữu Bật', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 67,
    tomTat: `**Thiên Hư tại Nô Bộc + Ân Quang / Thiên Quý / Tả Hữu / Khôi Việt:**
bạn bè, đồng nghiệp lúc đầu có **HIỂU LẦM** nhưng về sau lại trở thành **CHỖ
DỰA ĐẮC LỰC**.`,
  },

  {
    id: 'thien-hu-tai-thien-di',
    title: 'Thiên Hư tại Thiên Di',
    sao: ['Thiên Hư'],
    cung: ['Thiên Di'],
    doUuTien: 72,
    tomTat: `**Thiên Hư tại Thiên Di:**
- Khi ra ngoài hay gặp cảnh **BẤT BÌNH, BẤT ĐỒNG, KHÓ CHỊU**
- Nhiều người **CHỐNG ĐỐI** lại
- Sinh **ƯU BUỒN, BỰC TỨC, KÊU THAN**`,
  },

  {
    id: 'thien-hu-tai-thien-di-ty-ngo',
    sao: ['Thiên Hư'],
    cung: ['Thiên Di'],
    chi: ['Tý', 'Ngọ'],
    doUuTien: 70,
    tomTat: `**Thiên Hư Đắc địa Tý/Ngọ tại Thiên Di:**
- **TUỔI TRẺ ra ngoài, đi làm xa VẤT VẢ**
- Về sau **THÀNH CÔNG, THÀNH ĐẠT**
- Làm được **ĐẠI SỰ**`,
  },

  {
    id: 'thien-hu-tai-tat-ach',
    title: 'Thiên Hư tại Tật Ách',
    sao: ['Thiên Hư'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `**Thiên Hư tại Tật Ách:**
- Hay phải **KÊU THAN, BUỒN KHỔ** về bệnh tật, tai họa
- Khi **CHẾT có nhiều người KHÓC THƯƠNG**

**Vì Thiên Hư LUÔN đi cùng Tuế Phá:**
- Người dễ bị **RỤNG RĂNG SỚM**
- **Răng XẤU, SÂU RĂNG, MỌC LỆCH**`,
  },

  {
    id: 'thien-hu-tai-tat-ach-khong-kiep-kinh-da-linh-hoa',
    sao: ['Thiên Hư'],
    cung: ['Tật Ách'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Kình Dương', 'Đà La', 'Linh Tinh', 'Hỏa Tinh'],
    doUuTien: 72,
    tomTat: `**Thiên Hư tại Tật Ách + Không Kiếp / Kình Đà / Linh Hỏa:**
- Dễ mắc bệnh **THẦN KINH, TIM MẠCH, TIÊU HÓA** hoặc **bệnh NAN Y**
- Khổ sở về **răng miệng**
- Gặp **TAI NẠN, MỔ XẺ NHIỀU LẦN**`,
  },

  {
    id: 'thien-hu-tai-tai-bach',
    title: 'Thiên Hư tại Tài Bạch',
    sao: ['Thiên Hư'],
    cung: ['Tài Bạch'],
    doUuTien: 72,
    tomTat: `**Thiên Hư tại Tài Bạch:**
- Tiền bạc **KHÔNG ĐƯỢC HANH THÔNG**
- Luôn có việc **PHẢI TIÊU PHA**, hoàn cảnh đưa đến
- Hay **BUỒN KHỔ, U SẦU vì TIỀN NONG**
- Hay gặp **BẤT TRẮC, BẤT CÔNG** trong việc kiếm tiền`,
  },

  {
    id: 'thien-hu-tai-tai-bach-ty-ngo',
    sao: ['Thiên Hư'],
    cung: ['Tài Bạch'],
    chi: ['Tý', 'Ngọ'],
    doUuTien: 70,
    tomTat: `**Thiên Hư Đắc địa Tý/Ngọ (Khốc Hư) tại Tài Bạch:** **TIỀN BẦN HẬU PHÚ**.`,
  },

  {
    id: 'thien-hu-tai-tai-bach-khong-kiep-ky',
    sao: ['Thiên Hư'],
    cung: ['Tài Bạch'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `**Thiên Hư tại Tài Bạch + Không Kiếp / Hóa Kỵ:**
- Dễ **PHÁ SẢN, TRẮNG TAY**
- Hoặc phải **trải qua nhiều lần MẤT MÁT** mới giữ được chút tài sản`,
  },

  {
    id: 'thien-hu-tai-tu-tuc',
    title: 'Thiên Hư tại Tử Tức',
    sao: ['Thiên Hư'],
    cung: ['Tử Tức'],
    doUuTien: 72,
    tomTat: `**Thiên Hư tại Tử Tức:**
- Người **SINH CON KHÓ NUÔI**
- **SINH NHIỀU NUÔI ÍT**
- **ĐẺ MẤT CON, SÁT CON**
- Hay **BUỒN KHỔ, SẦU BI** về chuyện con cái
- Con cái **không như mong đợi**, hay gây khó chịu cho đương số
- Con cái từ nhỏ đã **CHỐNG ĐỐI**, làm điều **TRÁI NGƯỢC**, hay **KHÓC ĂN VẠ**
- **Răng thường KHÔNG ĐẸP**`,
  },

  {
    id: 'thien-hu-tai-tu-tuc-ty-ngo',
    sao: ['Thiên Hư'],
    cung: ['Tử Tức'],
    chi: ['Tý', 'Ngọ'],
    doUuTien: 70,
    tomTat: `**Thiên Hư Đắc địa Tý/Ngọ tại Tử Tức:**
- **TUỔI TRẺ VẤT VẢ với con cái**
- Về già **ĐƯỢC NHỜ**`,
  },

  {
    id: 'thien-hu-tai-phu-the',
    title: 'Thiên Hư tại Phu Thê',
    sao: ['Thiên Hư'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `**Thiên Hư tại Phu Thê:**
- Vợ chồng hay **BẤT ĐỒNG QUAN ĐIỂM**
- "**Nay giận mai hờn**", hay **KHÓC LÓC KÊU THAN**
- Thích **BẮT BẺ**
- **Buồn khổ, than vãn** chuyện hôn nhân
- Nhân duyên **TRẮC TRỞ buổi đầu**, ăn ở với nhau **CÓ NƯỚC MẮT**`,
  },

  {
    id: 'thien-hu-tai-phu-the-kinh-da-khong-kiep-ky',
    sao: ['Thiên Hư'],
    cung: ['Phu Thê'],
    ketHop: ['Kình Dương', 'Đà La', 'Địa Không', 'Địa Kiếp', 'Hóa Kỵ'],
    doUuTien: 72,
    tomTat: `**Thiên Hư tại Phu Thê + Kình Đà / Không Kiếp / Hóa Kỵ:** vợ chồng
**XUNG KHẮC**.`,
  },

  {
    id: 'thien-hu-tai-phu-the-ty-ngo',
    sao: ['Thiên Hư'],
    cung: ['Phu Thê'],
    chi: ['Tý', 'Ngọ'],
    doUuTien: 72,
    tomTat: `**Thiên Hư Đắc địa Tý/Ngọ tại Phu Thê:**
- Vợ chồng **VẤT VẢ, BẤT ĐỒNG thời gian đầu**
- Càng về sau càng **YÊN ẤM và THÀNH ĐẠT**`,
  },

  {
    id: 'thien-hu-tai-huynh-de',
    title: 'Thiên Hư tại Huynh Đệ',
    sao: ['Thiên Hư'],
    cung: ['Huynh Đệ'],
    doUuTien: 70,
    tomTat: `**Thiên Hư tại Huynh Đệ:**
- Hay phải **BUỒN RẦU** chuyện anh chị em
- Anh chị em dễ **BẤT HÒA**`,
  },

  {
    id: 'khoc-hu-vao-han-dac',
    title: 'Khốc Hư vào hạn - đắc địa lợi 5 năm đầu',
    sao: ['Thiên Khốc', 'Thiên Hư'],
    doUuTien: 55,
    tomTat: `**Khốc Hư vào hạn - chỉ LỢI nếu ĐẮC ĐỊA:**

**Đắc địa (Tý/Ngọ):**
- **Đại hạn:** chỉ **THỊNH trong 5 NĂM đầu**
- **Tiểu hạn:** chỉ **THỊNH NỬA NĂM ĐẦU**
- Thời gian sau hết hiệu lực

**Hãm địa:**
- Là giai đoạn gặp nhiều **BẤT MÃN, NGHỊCH CẢNH**
- Phải **KÊU THAN, U SẦU**
- Cuộc sống **buồn rầu, mất phương hướng**`,
  },

  {
    id: 'khoc-hu-han-tang-mon',
    title: 'Khốc Hư + Tang Môn vào hạn - chuyện tang tóc',
    sao: ['Thiên Khốc', 'Thiên Hư'],
    ketHop: ['Tang Môn'],
    doUuTien: 50,
    tomTat: `**Khốc Hư + Tang Môn vào hạn:** dễ gặp **CHUYỆN TANG TÓC** hoặc
**biến cố lớn, chuyện buồn thấm thía** trong năm đó.`,
  },

  {
    id: 'thien-hu-loi-khuyen',
    title: 'Lời khuyên cho người Thiên Hư',
    sao: ['Thiên Hư'],
    doUuTien: 35,
    tomTat: `**Thiên Hư biểu hiện những lúc KHÓ KHĂN, TRẮC TRỞ** hoặc **THẤT BẠI tạm
thời** — khiến đương số **bất an, mất niềm tin** hoặc **chán nản**.

**Yếu điểm:**
- **U BUỒN, ỦY MỊ**
- **HOANG MANG, đãng trí**
- **KÊU THAN, kể lể**
- **BI QUAN, yếm thế**

**Để hóa giải:**
- **DUY TRÌ THÁI ĐỘ CẨN TRỌNG**
- **CHẬM RÃI** trong quyết định
- **KHÉO LÉO** trong quan hệ với mọi người xung quanh
- **HỌC CÁCH THÍCH NGHI** với thay đổi
- **GIỮ BÌNH TĨNH** trước nghịch cảnh
- **TÍCH CỰC TÌM KIẾM SỰ GIÚP ĐỠ** khi cần
- Xây dựng **THÓI QUEN LÀNH MẠNH**
- Giữ **TINH THẦN LẠC QUAN** và **KIÊN NHẪN**

- Khi tu dưỡng đúng cách, Thiên Hư có thể chuyển biến **KHÓ KHĂN thành CƠ HỘI
TRƯỞNG THÀNH** — đặc biệt khi đắc Tý/Ngọ thì cách "**tiền bần hậu phú**" sẽ phát.`,
  },
];
