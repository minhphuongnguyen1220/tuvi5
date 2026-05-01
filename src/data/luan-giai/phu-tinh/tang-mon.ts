import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO TANG MÔN - Mộc, Bại Tinh, vòng Thái Tuế (vị trí 3).
 * Một trong Lục Bại Tinh (Song Hao Tang Hổ Khốc Hư).
 * LUÔN ĐỐI XUNG Bạch Hổ - cặp Tang-Hổ kiếp nghiệp (phần CHUNG đã viết tại bach-ho.ts).
 * Tam hợp Tang Tuế Điếu (Tang Môn + Thái Tuế + Điếu Khách) - bất mãn, đấu tranh.
 *
 * Đắc địa Dần Thân Mão Dậu (giống Bạch Hổ).
 */
export const luanGiai_TangMon: DoanLuanGiai[] = [
  {
    id: 'tang-mon-tinh-chat-chung',
    title: 'Tang Môn - Đặc tính chung',
    sao: ['Tang Môn'],
    doUuTien: 32,
    tomTat: `**Tang Môn** — phụ tinh **BẠI TINH** trong **vòng Thái Tuế**, vị trí thứ **3**.

**Ngũ hành:** **Mộc**.

**Hóa khí:** **Bại Tinh**.

**Tên gọi tắt:** **Tang**.

⚡ **Vị thế:**
- Một trong **LỤC BẠI TINH**: Tiểu Hao + Đại Hao + Tang Môn + Bạch Hổ + Thiên
  Khốc + Thiên Hư (**Song Hao Tang Hổ Khốc Hư**)
- **LUÔN ĐỐI XUNG Bạch Hổ** — cặp **TANG - HỔ** kiếp nghiệp duyên nợ
- Tam hợp **TANG - TUẾ - ĐIẾU** (Tang Môn + Thái Tuế + Điếu Khách) — tam hợp
  của sự **BẤT MÃN, ĐẤU TRANH**, luôn có **Thiên Mã** đồng hành (tam hợp)

⚡ **Vị trí:**
- **ĐẮC địa:** Dần, Thân, Mão, Dậu
- **HÃM địa:** Tý, Sửu, Thìn, Tỵ, Ngọ, Mùi, Tuất, Hợi

**Đặc tính:** **TANG TÓC, HÌNH THƯƠNG, TAI NẠN, TANG THƯƠNG, BỆNH TẬT, CHẾT
CHÓC**.

⚠️ Cùng **Bạch Hổ** đối xung, Tang Môn là sao **NGHIỆP NẶNG** trong tử vi —
duyên nợ kiếp này phải trả.`,
  },

  {
    id: 'tang-mon-tam-hop-tang-tue-dieu',
    title: 'Tam hợp Tang - Tuế - Điếu (Tang Môn + Thái Tuế + Điếu Khách)',
    sao: ['Tang Môn', 'Thái Tuế', 'Điếu Khách'],
    doUuTien: 60,
    tomTat: `⚡ **Tam hợp TANG - TUẾ - ĐIẾU** (Tang Môn + Thái Tuế + Điếu Khách):

→ Vòng tam hợp của:
- **BẤT MÃN với hoàn cảnh**
- **CHỐNG ĐỐI sự an bài định mệnh**
- Tinh thần **ĐẤU TRANH, KHAO KHÁT thay đổi**
- Bản chất **không chấp nhận thua thiệt**

⚡ **Quy luật bắt buộc:** Tam hợp Tang-Tuế-Điếu **LUÔN có THIÊN MÃ** đồng hành
(tam hợp với Mã) → tinh thần **CHUYỂN HÓA bất mãn thành Ý CHÍ, NGHỊ LỰC**.

🌟 **Mặt tích cực:**
- Người có nghị lực **ngầm** để **đấu tranh, chứng tỏ bản lĩnh**
- Khi có **Thiên Mã hội họp** → tinh thần càng **MÃNH LIỆT**
- Tự tay **lập nghiệp**, không trông chờ số phận

→ TRÁI NGƯỢC với tam hợp **Âm Long Trực** (nhường nhịn, ở hiền gặp lành) —
Tang Tuế Điếu là **NGỌN LỬA chiến đấu**.`,
  },

  {
    id: 'tang-mon-luc-bai-tinh',
    title: 'Tang Môn trong Lục Bại Tinh - Song Hao Tang Hổ Khốc Hư',
    sao: ['Tang Môn'],
    ketHop: ['Tiểu Hao', 'Đại Hao', 'Bạch Hổ', 'Thiên Khốc', 'Thiên Hư'],
    doUuTien: 50,
    tomTat: `⚠️ **LỤC BẠI TINH** = Tiểu Hao + Đại Hao + Tang Môn + Bạch Hổ + Thiên Khốc +
Thiên Hư (**SONG HAO TANG HỔ KHỐC HƯ**).

→ 6 sao **BẠI TINH** chính trong tử vi, mỗi sao đều có đặc tính **HAO TỔN, MẤT
MÁT, BUỒN PHIỀN**.

⚠️ Khi nhiều sao của bộ này **HỘI TỤ** tại 1 cung quan trọng:
- Vận trình **CỰC NẶNG**
- **HAO TÀI, BUỒN KHỔ, MẤT MÁT** dồn dập
- Cần **GIẢI TINH MẠNH** mới chế giảm

(Xem entry chuyên biệt cho Tang Môn đắc địa.)`,
  },

  {
    id: 'tang-mon-tai-menh-dac-dia',
    title: 'Tang Môn tại Mệnh - đắc địa (Dần Thân Mão Dậu)',
    sao: ['Tang Môn'],
    cung: ['Mệnh'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    doUuTien: 80,
    tomTat: `🌟 **Tang Môn ĐẮC ĐỊA tại Mệnh (Dần / Thân / Mão / Dậu):**

🌟 **Tính cách nổi bật:**
- **CAN ĐẢM, QUẢ CẢM**, có **NGHỊ LỰC**, **TÀI GIỎI**
- **QUYỀN BIẾN**, ứng phó được với **mọi nghịch cảnh**
- Khả năng **XÉT ĐOÁN, LÝ LUẬN GIỎI**
- Có **TÀI HÙNG BIỆN**

🌟 **Đa năng - đa hiệu:**
- Thích hoạt động **CHÍNH TRỊ**
- Có khả năng **HIỂN ĐẠT về VÕ NGHIỆP**
- Bộ sao **VĂN VÕ SONG TOÀN**

(Xem entries chuyên biệt theo giới tính.)`,
  },

  {
    id: 'tang-mon-tai-menh-dac-dia-nam',
    title: '🌟 Tang Môn Đắc địa tại Mệnh - Nam mệnh',
    sao: ['Tang Môn'],
    cung: ['Mệnh'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    gioiTinh: 'Nam',
    doUuTien: 73,
    tomTat: `🌟 **Tang Môn ĐẮC ĐỊA tại Mệnh - Nam mệnh:**

🌟 **+ Văn tinh hội chiếu:** hiển đạt về **CHÍNH TRỊ**.
🌟 **+ Võ tinh đi kèm:** hiển đạt về **QUÂN SỰ**.`,
  },

  {
    id: 'tang-mon-tai-menh-dac-dia-nu',
    title: '🌟 Tang Môn Đắc địa tại Mệnh - Nữ mệnh khí phách',
    sao: ['Tang Môn'],
    cung: ['Mệnh'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    gioiTinh: 'Nữ',
    doUuTien: 73,
    tomTat: `🌟 **Tang Môn ĐẮC địa tại Mệnh - Nữ mệnh:**

- **KHÍ PHÁCH**, ý chí **MẠNH NHƯ ĐÀN ÔNG**
- Có **TÂM TÍNH NAM GIỚI**
- Người **rất ĐẶC BIỆT** — **TỰ TAY LẬP NGHIỆP**
- **QUÁN XUYẾN cả nội trợ và ngoại giao**
- Vừa đắc dụng trong **gia đình**, vừa đắc dụng ngoài **xã hội**`,
  },

  {
    id: 'tang-mon-tai-menh-ham-dia',
    title: 'Tang Môn tại Mệnh - hãm địa',
    sao: ['Tang Môn'],
    cung: ['Mệnh'],
    chi: ['Tý', 'Sửu', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Tuất', 'Hợi'],
    doUuTien: 78,
    tomTat: `⚠️ **Tang Môn HÃM ĐỊA tại Mệnh (Tý/Sửu/Thìn/Tỵ/Ngọ/Mùi/Tuất/Hợi):**

⚠️ **Tính cách:**
- **ƯƠNG NGẠNH, NGOAN CỐ, CỨNG ĐẦU, BƯỚNG BỈNH**
- **ƯU TƯ**, hay **LO LẮNG, PHIỀN MUỘN, CÔ ĐỘC**
- Thích **CHƠI BỜI**, **ĂN NGON MẶC ĐẸP**
- **KHÔNG NẶNG về gia giáo**

⚠️ **Đặc trưng tâm lý nội tâm:**
- Diện mạo **PHẢNG PHẤT NÉT BUỒN**, ánh mắt **NẶNG TRĨU TÂM SỰ**
- **ĐA SẦU ĐA CẢM**
- Hay **LO XA**, dễ **XÚC ĐỘNG**
- Đôi khi rơi vào trạng thái "**LO BÒ TRẮNG RĂNG**"

⚠️ **Nguy cơ tâm bệnh:**
- Bản tính nhạy cảm + lo nhiều → **CĂNG THẲNG, STRESS KÉO DÀI**
- Cảm xúc dồn nén dễ trở thành **TRẦM CẢM** hoặc **RỐI LOẠN LO ÂU**
- Cần học cách **BUÔNG BỎ** ưu tư vô hình`,
  },

  {
    id: 'tang-mon-menh-mo-coi',
    title: 'Tang Môn thủ Mệnh - mồ côi sớm, gia đạo bất lợi',
    sao: ['Tang Môn'],
    cung: ['Mệnh'],
    doUuTien: 75,
    tomTat: `⚠️ **Tang Môn thủ Mệnh** (dù **ĐẮC ĐỊA**) — bất lợi cho **GIA ĐẠO**:

⚠️ **Đặc trưng:**
- **MỒ CÔI SỚM**, có khi **mới lọt lòng mẹ**
- Sao bất lợi **NHẤT** cho:
  - **Đại gia đình** (mồ côi)
  - **Tiểu gia đình** (xung, khắc, ly cách)

⚠️ **Riêng phái NỮ:** gia đạo, hôn nhân thường **TRẮC TRỞ**:
- Phải **MUỘN CHỒNG**
- Phải **CƯỚI CHẠY TANG**
- Nếu không thì **GÓA BỤA** hoặc **đau khổ ưu phiền vì chồng con**

⚠️ **Bất lợi sinh nở (nữ Mệnh):**
- Có thể **NGUY HIỂM TÍNH MẠNG vì sinh đẻ** — mình chết hoặc con chết
- Đau yếu **TỬ CUNG**, **HƯ THAI**
- Dù có sinh con cũng **HẾT SỨC KHÓ NUÔI**

⚠️ **+ Sát Tinh:**
- **KHỔ CỰC, CÔ ĐỘC**
- **KHẮC vợ chồng**, GÓA BỤA
- **BẮT BỚ, GIAM CẦM**
- **BỆNH TRẦM KHA**
- **TAI NẠN nguy hiểm tính mạng**, **YỂU TỬ**
- Cần **SAO GIẢI MẠNH** mới chế giảm`,
  },

  {
    id: 'tang-mon-tai-menh-tai-loc',
    title: 'Tang Môn tại Mệnh - tài lộc đặc biệt',
    sao: ['Tang Môn'],
    cung: ['Mệnh'],
    doUuTien: 70,
    tomTat: `⚠️ **Đặc trưng tài lộc kỳ lạ của Tang Môn:**

⚡ **Tiền có thể đến từ những BIẾN CỐ hoặc CHUYỆN BUỒN:**
- **Phúng điếu**
- **Thừa kế** từ người đã khuất
- **Bảo hiểm, đền bù** liên quan đến tai nạn và mất mát

⚠️ **Đặc tính kiếm tiền:**
- Đường tài lộc gắn liền với **TRĂN TRỞ, SUY TƯ thường trực**
- Đồng tiền là thành quả của **LO TOAN MỆT MỎI**
- Đi kèm **TOAN TÍNH và ÁP LỰC TINH THẦN ĐÈ NẶNG**

🌟 **Nghề phù hợp Tang Môn:**
- **LUẬT SƯ, THẨM PHÁN, CHÍNH TRỊ GIA, NHÀ PHÊ BÌNH**
- **NHÀ VĂN, NHÀ THƠ** (mang chiều sâu nội tâm khác biệt)
- Các nghề liên quan **TANG LỄ, BẢO HIỂM, THỪA KẾ**`,
  },

  {
    id: 'tang-mon-tau-thu',
    title: 'Tang Môn + Tấu Thư - tài hùng biện',
    sao: ['Tang Môn'],
    ketHop: ['Tấu Thư'],
    doUuTien: 75,
    tomTat: `🌟 **Tang Môn + Tấu Thư:** cả hai sao **HỢP NGHĨA về KHOA NGÔN NGỮ, TÀI HÙNG
BIỆN**.

🌟 **Đặc trưng:**
- Khả năng **DIỄN THUYẾT HÙNG HỒN**
- Lời lẽ **LƯU LOÁT và KHÍCH ĐỘNG**
- Có **SỨC QUYẾN RŨ bằng NGÔN NGỮ** rất sâu sắc

🌟 **Nghề tiêu biểu:**
- **CHÍNH KHÁCH, ỨNG VIÊN TRANH CỬ**
- **GIÁO SƯ**
- **QUAN TÒA, LUẬT SƯ**

🌟 **+ Lưu Hà / Lưu Thiên Khốc / Lưu Thiên Hư / Văn Xương / Văn Khúc:** tài hùng
biện đạt **MỨC QUỐC TẾ**:
- **HIỂN ĐẠT về KHOA CỬ** (thi đỗ cao)
- **CÔNG DANH** (chức phận lớn, nhiều người biết tiếng)
- **TÂM LÝ CHIẾN** (huy động quần chúng, vận động tinh thần)

→ Đây là cách **HÓA GIẢI ĐẸP NHẤT** Tang Môn — biến nỗi đau thành **TIẾNG NÓI**.`,
  },

  {
    id: 'tang-mon-tai-menh-cat-tinh',
    title: 'Tang Môn tại Mệnh + Cát Tinh',
    sao: ['Tang Môn'],
    cung: ['Mệnh'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Thiên Khôi', 'Thiên Việt', 'Ân Quang', 'Thiên Quý'],
    doUuTien: 70,
    tomTat: `🌟 **Tang Môn tại Mệnh + Tả Hữu / Khôi Việt / Quang Quý:**

🌟 **+ Khôi Việt + Quang Quý:**
- Bản mệnh hay **ÂM THẦM GIÚP ĐỠ** người khác
- Vì "**ở hiền gặp lành**" → dễ được **QUÝ NHÂN nâng đỡ**

🌟 **+ Tả Phù + Hữu Bật:**
- Bên ngoài thể hiện tính cách **HÒA ĐỒNG**, biết **GIỮ HÒA KHÍ**
- Bên trong **CHE GIẤU CẢM XÚC**, không thể hiện bất mãn để **bảo vệ MỐI QUAN
  HỆ XÃ HỘI**
- Nét tính cách **KHÓ ĐOÁN** này khiến bản mệnh trở thành **CÁ NHÂN THÚ VỊ**
- Dễ mang lại **NIỀM VUI BẤT NGỜ** cho người xung quanh`,
  },

  {
    id: 'tang-mon-menh-hung-tinh',
    title: 'Tang Môn tại Mệnh + Hung Tinh - lập dị bị ghét bỏ',
    sao: ['Tang Môn'],
    cung: ['Mệnh'],
    ketHop: ['Hỏa Tinh', 'Linh Tinh', 'Thiên Hình', 'Kình Dương', 'Đà La', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `⚠️ **Tang Môn tại Mệnh + Hung Tinh:**

⚠️ **+ Hỏa Tinh / Linh Tinh / Thiên Hình:**
- Cảm xúc bị **KÌM NÉN lâu ngày** dễ **BỘC PHÁT**, gây hậu quả **khó lường**
- Dễ rơi vào trạng thái **LIỀU LĨNH, MẠO HIỂM**
- Thậm chí có thể **TỔN HẠI BẢN THÂN**

⚠️ **+ Kình Đà / Không Kiếp:**
- Chủ mệnh **KHÓ TÍNH và LẬP DỊ**
- Khiến những người xung quanh **rất khó để LÀM HÀI LÒNG hay THẤU HIỂU**
- Dễ đẩy người mang Tang Môn vào cảnh **BỊ CÔ LẬP** hoặc **BỊ NGƯỜI ĐỜI GHÉT BỎ**

🌟 **Mặt tích cực bất ngờ + Không Kiếp:**
- Khi sự bất mãn **đạt đến cùng cực** dưới tác động của Không Kiếp
- Đương số có thể **NHÌN THẤU SỰ HƯ ẢO** của cuộc đời
- Biến **BẤT MÃN** thành **ĐỘNG LỰC PHÁT TRIỂN** trên con đường **TU TẬP**`,
  },

  {
    id: 'tang-mon-tai-phu-mau',
    title: 'Tang Môn tại Phụ Mẫu',
    sao: ['Tang Môn'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `⚠️ **Tang Môn tại Phụ Mẫu:**
- **SINH RA ĐÃ CÓ TANG**
- Hoặc cha mẹ **NGHÈO KHỔ, ĐAU YẾU**
- Hoặc phải **THAY ĐỔI nơi ăn chốn ở**

⚠️ Đây là cung phối hợp với Tang Môn = báo hiệu **MẤT MẸ hoặc CHA SỚM**, đặc
biệt nếu hãm địa hoặc có thêm sát tinh.`,
  },

  {
    id: 'tang-mon-tai-phuc-duc',
    title: 'Tang Môn tại Phúc Đức',
    sao: ['Tang Môn'],
    cung: ['Phúc Đức'],
    doUuTien: 70,
    tomTat: `⚠️ **Tang Môn tại Phúc Đức:**
- **TỔN THỌ**
- **GIA ĐÌNH KHÔNG TOÀN VẸN**

→ Phúc phần dòng họ **SUY GIẢM** — cần đặc biệt làm phúc, tích đức để bù đắp.`,
  },

  {
    id: 'tang-mon-tai-dien-trach',
    title: 'Tang Môn tại Điền Trạch',
    sao: ['Tang Môn'],
    cung: ['Điền Trạch'],
    doUuTien: 72,
    tomTat: `⚠️ **Tang Môn tại Điền Trạch:**

⚠️ **+ Hỏa Tinh** (Tang Hỏa):
- Có **CHÁY NHÀ** hoặc **một phần nhà**

⚠️ **+ Phục Binh + Địa Không + Thiên Phù** (Tang Phục Không Phù):
- **VÔ SẢN** — không có tài sản nhà cửa

🌟 **+ Đào Hoa + Hồng Loan** (Tang Đào Hồng):
- **HƯỞNG DI SẢN của CÔ DÌ** để lại`,
  },

  {
    id: 'tang-mon-tai-tat-ach',
    title: 'Tang Môn tại Tật Ách - máu huyết, tinh thần',
    sao: ['Tang Môn'],
    cung: ['Tật Ách'],
    doUuTien: 80,
    tomTat: `⚠️ **Tang Môn tại Tật Ách:** báo hiệu **HAI LOẠI BỆNH TẬT**:

⚠️ **1. Bệnh TINH THẦN:**
- **ÂU SẦU, U BUỒN, ỦY MỊ, BI QUAN**
- Trầm cảm, rối loạn lo âu

⚠️ **2. Bệnh VẬT CHẤT - MÁU HUYẾT, GÂN CỐT:**
- **HOẠI HUYẾT, ÁP HUYẾT CAO**
- **ĐAU GÂN, ĐAU TIM**
- **NHỨC XƯƠNG, TÊ THẤP**

⚠️ **Đối với phụ nữ:**
- Tình trạng **KHÍ HUYẾT KÉM** dẫn đến:
  - **Đau yếu KINH NGUYỆT**
  - Vấn đề **TỬ CUNG**
  - Ảnh hưởng đến **SINH NỞ**

⚠️ **Lưu ý:** Bệnh hoạn này **càng RÕ RỆT** ngay cả khi Tang Môn đóng ở vị
trí đắc cách — không vì đắc địa mà miễn nhiễm.`,
  },

  {
    id: 'tang-mon-tai-tu-tuc',
    title: 'Tang Môn tại Tử Tức',
    sao: ['Tang Môn'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `⚠️ **Tang Môn tại Tử Tức:**
- **KHÓ SINH**, **SINH NON ngày tháng**
- **SINH CON KHÓ NUÔI**
- Sinh con nhưng **KHÔNG NUÔI ĐƯỢC**

⚠️ **+ Kình Dương / Thất Sát:** có thể **KHÔNG CON**.
⚠️ **+ Địa Không / Địa Kiếp:** **SÁT CON**.
⚠️ **+ Thai:** **SẢY THAI, CON CHẾT NON**.
⚠️ **+ Không Kiếp + Thai:** có thể **PHÁ THAI**.
⚠️ **+ Thiên Hình:**
- **MỔ XẺ** lúc sinh nở
- **CON CHẾT TRONG BỤNG MẸ**
- **KHÓ ĐẺ, PHÁ THAI**`,
  },

  {
    id: 'tang-mon-tai-phu-the',
    title: 'Tang Môn tại Phu Thê',
    sao: ['Tang Môn'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `⚠️ **Tang Môn tại Phu Thê:** có một trong các tình trạng sau:

⚠️ **CƯỚI CHẠY TANG**.

⚠️ **TANG CHỒNG hoặc TANG VỢ**, hoặc **LY THÂN, LY HÔN**.

⚠️ **Ở GÓA** (nếu các cung trọng yếu khác như Phúc Đức xấu).

⚠️ **HÓA GIẢI:** lấy vợ/chồng **CÓ TẬT** (mù lòa, què gãy) → mới **TRÁNH ĐƯỢC
HÌNH KHẮC, CHIA LY**.

→ Đây là cách **HÓA GIẢI ĐẶC BIỆT** — "**lấy người tật để giải nghiệp**".`,
  },

  {
    id: 'tang-mon-tai-huynh-de',
    title: 'Tang Môn tại Huynh Đệ',
    sao: ['Tang Môn'],
    cung: ['Huynh Đệ'],
    doUuTien: 70,
    tomTat: `⚠️ **Tang Môn tại Huynh Đệ:**
- Thường **MẤT ANH CHỊ EM**

⚠️ **+ Trực Phù** (Tang Môn Trực Tuế): anh chị em **BẤT HÒA**.

⚠️ **+ Thiên Mã** (Tang Mã): anh chị em **LY TÁN** — mỗi người một phương.`,
  },

  {
    id: 'tang-mon-han-co-tang',
    title: 'Tang Môn vào hạn - các cách có TANG',
    sao: ['Tang Môn'],
    doUuTien: 70,
    tomTat: `⚠️ **Tang Môn vào hạn - các trường hợp CÓ TANG:**

⚠️ **Tang + Mã + Khốc + Hư** hoặc **Tang + Quả Tú + Khốc + Hư**.

⚠️ **Tang Môn + Bệnh Phù + Điếu Khách**.

⚠️ **+ Lưu Tang + Lưu Hổ + Lưu Khốc + Lưu Hư:** **NHIỀU TANG LIÊN TIẾP**, có
**ĐẠI TANG**.

⚠️ **Tang + Thiên Hình + Điếu Khách**.

⚠️ **Tang Môn + Thiên Khốc + Thiên Mã** (Tang Khốc Mã): **SÚC VẬT CHẾT VÌ BỆNH
TẬT**.

⚠️ **Tang + Điếu Khách + Hóa Kỵ + Thiên Hình** (Tang Khách Kỵ Hình): **TỰ ẢI**
(tự tử).

⚠️ Đại - Tiểu Hạn cần lưu ý xem **KỸ Tang Môn và Lưu Tang, Lưu Hổ**. Nếu **đồng
cung** thì sự **HUNG HIỂM CÀNG NHIỀU**.`,
  },

  {
    id: 'tang-mon-loi-khuyen',
    title: 'Lời khuyên cho người Tang Môn',
    sao: ['Tang Môn'],
    doUuTien: 35,
    tomTat: `💡 **Tang Môn dường như sinh ra đã GÁNH một phần "NGHIỆP" lo toan của trần
gian.**

🌟 **Sức mạnh:**
- Trí tuệ **SẮC BÉN**
- **NGHỊ LỰC** ngầm
- Tài **HÙNG BIỆN**
- **TỰ TAY LẬP NGHIỆP**

⚠️ **Yếu điểm:**
- **LO TOAN, ÁP LỰC tinh thần**
- Dễ **TRẦM CẢM**
- Gia đạo **trắc trở**
- **MỒ CÔI sớm**

💡 **Bí quyết phát huy Tang Môn:**
- **KIỂM SOÁT CẢM XÚC** là yếu tố tiên quyết
- **BUÔNG BỎ những lo lắng KHÔNG CẦN THIẾT**
- Không biến **SỰ CỐ NHỎ** thành **NỖI BUỒN QUÁ LỚN**
- Tìm đến các liệu pháp **TU DƯỠNG TINH THẦN**:
  - **THIỀN ĐỊNH**
  - **YOGA**
- Thay vì **CHÌM ĐẮM trong sự bất mãn** hay **than thân trách phận** → biến
  **ĐAU THƯƠNG thành HÀNH ĐỘNG**
- Dùng nghị lực của bộ **TANG-TUẾ-ĐIẾU** để **PHẤN ĐẤU**

→ Những **LUẬT SƯ GIỎI** hay **NHÀ VĂN LỚN** đều biết cách **mượn NỖI ĐAU làm
CHẤT LIỆU** để thành danh.`,
  },
];
