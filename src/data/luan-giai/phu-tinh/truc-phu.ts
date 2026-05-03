import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO TRỰC PHÙ - Hỏa, vòng Thái Tuế (vị trí 12 - CUỐI cùng).
 * Tam hợp Âm-Long-Trực (Thiếu Âm + Long Đức + Trực Phù) - phần chung tam hợp đã viết tại thieu-am.ts.
 * Sao chịu nhiều THIỆT THÒI, cống hiến vất vả, sinh ra đa nghi lo sợ.
 */
export const luanGiai_TrucPhu: DoanLuanGiai[] = [
  {
    id: 'truc-phu-tinh-chat-chung',
    title: 'Trực Phù - Đặc tính chung',
    sao: ['Trực Phù'],
    doUuTien: 32,
    tomTat: `**Trực Phù** — phụ tinh trong **vòng Thái Tuế**, vị trí thứ **12 (CUỐI cùng)**.

**Ngũ hành:** **Hỏa**.

**Vị thế trong vòng Thái Tuế:**
- Tam hợp **ÂM - LONG - TRỰC** (Thiếu Âm + Long Đức + Trực Phù) — tam hợp của
  tuýp người **NHƯỜNG NHỊN, CHỊU THIỆT THÒI, DÙNG NHU THẮNG CƯƠNG**

**Vai trò trong tam hợp:**
- **Thiếu Âm:** âm khí mới phát sinh, còn yếu ớt, dễ nhầm lẫn cả tin
- **Long Đức:** biết thiệt thòi nên tu dưỡng, nhân hậu, lương thiện
- **Trực Phù:** **CHỊU NHIỀU THIỆT THÒI**, **không được hưởng công lao xứng
  đáng**, dù gì cũng cảm thấy **đáng tiếc**: sinh ra bản tính **HAY LO SỢ,
  ĐA NGHI**, **luôn sợ mình bị lừa**

**Đặc tính:** **HIỀN HẬU, ĐA NGHI, LO SỢ, CHỊU NHIỀU THIỆT THÒI, CỐNG HIẾN VẤT
VẢ**.`,
  },

  {
    id: 'truc-phu-tai-menh',
    title: 'Trực Phù tại Mệnh - đa nghi cả tin',
    sao: ['Trực Phù'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `**Trực Phù thủ Mệnh:**

**Tính cách bên ngoài:**
- **HIỀN LÀNH, NHẸ NHÀNG**
- Sống thiên về **NỘI TÂM**
- **KHÔNG THÍCH VA CHẠM**

**Mặt trong - bất ổn:**
- **ĐA NGHI**, hay **LO SỢ, SUY NGHĨ**
- **DỄ TIN NGƯỜI**: dễ bị **LỪA, LỢI DỤNG**
- Sau khi bị lừa: sinh **HOÀI NGHI, LO LẮNG**, thiếu **QUYẾT ĐOÁN**
- Tâm lý thường rơi vào trạng thái **"NỬA TIN NỬA NGỜ"**

**Khó quyết đoán:**
- "**Vừa làm vừa run**"
- **Khó GÁNH VÁC ĐẠI SỰ** một mình
- Nên có **NGƯỜI CHỈ ĐƯỜNG, BẠN ĐỒNG HÀNH** hỗ trợ
- Nếu đơn độc, sự nghiệp **lận đận**

**Tâm lý nội tâm:**
- **ÍT NÓI**, hay **CHỊU ĐỰNG**
- Chọn **NHẪN NHỊN** hơn là **TRANH CÃI**
- Khó **BÀY TỎ NỘI TÂM**
- Dễ **THIỆT THÒI** trong tình cảm
- **ÍT ĐƯỢC NGƯỜI KHÁC THẤU HIỂU**`,
  },

  {
    id: 'truc-phu-menh-cat-tinh',
    title: 'Trực Phù tại Mệnh + Cát Tinh - tinh tế nhìn xa',
    sao: ['Trực Phù'],
    cung: ['Mệnh'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 75,
    tomTat: `**Trực Phù tại Mệnh + Tả Phù / Hữu Bật / Văn Xương / Văn Khúc / Thiên Khôi
/ Thiên Việt:**

- Tính cách **THẬN TRỌNG** trở thành **ĐIỂM MẠNH**:
- Sống **TINH TẾ**
- Biết **NHÌN XA TRÔNG RỘNG**
- **Cẩn trọng** trở thành **đức tính tốt**
- Có **quý nhân** giúp đỡ: bù đắp tính **thiếu quyết đoán**

- Đây là cách **HÓA GIẢI** điểm yếu của Trực Phù — biến **đa nghi** thành
**chu đáo**, biến **lo sợ** thành **cẩn trọng**.`,
  },

  {
    id: 'truc-phu-menh-hung-tinh',
    title: 'Trực Phù tại Mệnh + Hung Tinh - mặc cảm cô độc',
    sao: ['Trực Phù'],
    cung: ['Mệnh'],
    ketHop: ['Kình Dương', 'Đà La', 'Linh Tinh', 'Hóa Kỵ'],
    doUuTien: 72,
    tomTat: `**Trực Phù tại Mệnh + Kình Dương / Đà La / Linh Tinh / Hóa Kỵ:**

**Nỗi LO SỢ** dễ biến thành:
- **MẶC CẢM**
- **ĐA NGHI QUÁ ĐỘ**
-: Dẫn đến **CÔ ĐỘC** và **MẤT NIỀM TIN**

Đặc trưng:
- Nhìn ai cũng nghi ngờ
- **Không tin tưởng** ngay cả người thân
- Tự **ÔM gánh nặng** một mình
- Tâm lý dần **lệch lạc**, thậm chí **trầm cảm**

Cách hóa giải: cần **TÌM NGƯỜI tin tưởng** để **chia sẻ**, **không tự cô lập**.`,
  },

  {
    id: 'truc-phu-tai-phu-mau',
    title: 'Trực Phù tại Phụ Mẫu',
    sao: ['Trực Phù'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Trực Phù tại Phụ Mẫu:**
- Cha mẹ **HIỀN LÀNH**, sống **NHẪN NHỊN**, "**DĨ HÒA VI QUÝ**"
- Là người sống **NỘI TÂM, THÂM TRẦM, ÍT NÓI**
- Thường **CHỊU PHẦN THIỆT**

**Mặt trái:**
- **DỄ TIN NGƯỜI**, hay **LO XA**
- Nhiều khi **bỏ lỡ cơ hội** phát triển
- Dễ **bị KẺ XẤU LỢI DỤNG, LỪA GẠT**`,
  },

  {
    id: 'truc-phu-tai-phu-mau-ta-phu',
    title: 'Trực Phù + Tả Phù tại Phụ Mẫu - đức độ quý nhân',
    sao: ['Trực Phù'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Tả Phù'],
    doUuTien: 70,
    tomTat: `**Trực Phù + Tả Phù tại Phụ Mẫu:**
- Cha mẹ càng thêm **ĐỨC ĐỘ**
- Được **QUÝ NHÂN nâng đỡ**
- Gia đạo **YÊN ỔN**, con cháu **HƯỞNG PHÚC**`,
  },

  {
    id: 'truc-phu-tai-phu-mau-huu-bat',
    title: 'Trực Phù + Hữu Bật tại Phụ Mẫu - đức độ quý nhân',
    sao: ['Trực Phù'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Hữu Bật'],
    doUuTien: 70,
    tomTat: `**Trực Phù + Hữu Bật tại Phụ Mẫu:**
- Cha mẹ càng thêm **ĐỨC ĐỘ**
- Được **QUÝ NHÂN nâng đỡ**
- Gia đạo **YÊN ỔN**, con cháu **HƯỞNG PHÚC**`,
  },

  {
    id: 'truc-phu-tai-phu-mau-thien-duc',
    title: 'Trực Phù + Thiên Đức tại Phụ Mẫu - đức độ quý nhân',
    sao: ['Trực Phù'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Thiên Đức'],
    doUuTien: 70,
    tomTat: `**Trực Phù + Thiên Đức tại Phụ Mẫu:**
- Cha mẹ càng thêm **ĐỨC ĐỘ**
- Được **QUÝ NHÂN nâng đỡ**
- Gia đạo **YÊN ỔN**, con cháu **HƯỞNG PHÚC**`,
  },

  {
    id: 'truc-phu-tai-phu-mau-van-xuong',
    title: 'Trực Phù + Văn Xương tại Phụ Mẫu - đức độ quý nhân',
    sao: ['Trực Phù'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Văn Xương'],
    doUuTien: 70,
    tomTat: `**Trực Phù + Văn Xương tại Phụ Mẫu:**
- Cha mẹ càng thêm **ĐỨC ĐỘ**
- Được **QUÝ NHÂN nâng đỡ**
- Gia đạo **YÊN ỔN**, con cháu **HƯỞNG PHÚC**`,
  },

  {
    id: 'truc-phu-tai-phu-mau-van-khuc',
    title: 'Trực Phù + Văn Khúc tại Phụ Mẫu - đức độ quý nhân',
    sao: ['Trực Phù'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Văn Khúc'],
    doUuTien: 70,
    tomTat: `**Trực Phù + Văn Khúc tại Phụ Mẫu:**
- Cha mẹ càng thêm **ĐỨC ĐỘ**
- Được **QUÝ NHÂN nâng đỡ**
- Gia đạo **YÊN ỔN**, con cháu **HƯỞNG PHÚC**`,
  },

  {
    id: 'truc-phu-tai-phu-mau-kinh-duong',
    title: 'Trực Phù + Kình Dương tại Phụ Mẫu - thị phi chia ly',
    sao: ['Trực Phù'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Kình Dương'],
    doUuTien: 70,
    tomTat: `**Trực Phù + Kình Dương tại Phụ Mẫu:**
- Cha mẹ vướng vào **THỊ PHI**
- **SỨC KHỎE SUY GIẢM**, **lực bất tòng tâm**
- Khó tránh cảnh **CHIA LY**`,
  },

  {
    id: 'truc-phu-tai-phu-mau-da-la',
    title: 'Trực Phù + Đà La tại Phụ Mẫu - thị phi chia ly',
    sao: ['Trực Phù'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Đà La'],
    doUuTien: 70,
    tomTat: `**Trực Phù + Đà La tại Phụ Mẫu:**
- Cha mẹ vướng vào **THỊ PHI**
- **SỨC KHỎE SUY GIẢM**, **lực bất tòng tâm**
- Khó tránh cảnh **CHIA LY**`,
  },

  {
    id: 'truc-phu-tai-phu-mau-hoa-ky',
    title: 'Trực Phù + Hóa Kỵ tại Phụ Mẫu - thị phi chia ly',
    sao: ['Trực Phù'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `**Trực Phù + Hóa Kỵ tại Phụ Mẫu:**
- Cha mẹ vướng vào **THỊ PHI**
- **SỨC KHỎE SUY GIẢM**, **lực bất tòng tâm**
- Khó tránh cảnh **CHIA LY**`,
  },

  {
    id: 'truc-phu-tai-phuc-duc',
    title: 'Trực Phù tại Phúc Đức',
    sao: ['Trực Phù'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `**Trực Phù tại Phúc Đức:**
- Ông bà tổ tiên xưa kia **ĂN Ở HIỀN LÀNH**
- Để lại **PHÚC ĐỨC** cho con cháu
- Người trong họ tộc **HIỀN LÀNH, GIẢN DỊ, CHẤT PHÁC**
- **ÍT TÍNH TOÁN CHI LY** với nhau
- Được **TIẾNG THƠM** trong làng xóm

**Mặt trái:**
- Đôi khi dễ **BỊ KẺ KHÁC CHIẾM PHẦN LỢI**
- Bản thân đương số dễ rơi vào cảnh **BẤT AN**, lòng hay **THẤP THỎM**`,
  },

  {
    id: 'truc-phu-tai-phuc-duc-thien-duc',
    title: 'Trực Phù + Thiên Đức tại Phúc Đức - phúc khí vững',
    sao: ['Trực Phù'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Đức'],
    doUuTien: 70,
    tomTat: `**Trực Phù + Thiên Đức tại Phúc Đức:**
- Phúc khí càng **VỮNG**
- Con cháu **CÔNG THÀNH DANH TOẠI**
- Gia đạo **THUẬN HÒA**`,
  },

  {
    id: 'truc-phu-tai-phuc-duc-nguyet-duc',
    title: 'Trực Phù + Nguyệt Đức tại Phúc Đức - phúc khí vững',
    sao: ['Trực Phù'],
    cung: ['Phúc Đức'],
    ketHop: ['Nguyệt Đức'],
    doUuTien: 70,
    tomTat: `**Trực Phù + Nguyệt Đức tại Phúc Đức:**
- Phúc khí càng **VỮNG**
- Con cháu **CÔNG THÀNH DANH TOẠI**
- Gia đạo **THUẬN HÒA**`,
  },

  {
    id: 'truc-phu-tai-phuc-duc-long-tri',
    title: 'Trực Phù + Long Trì tại Phúc Đức - phúc khí vững',
    sao: ['Trực Phù'],
    cung: ['Phúc Đức'],
    ketHop: ['Long Trì'],
    doUuTien: 70,
    tomTat: `**Trực Phù + Long Trì tại Phúc Đức:**
- Phúc khí càng **VỮNG**
- Con cháu **CÔNG THÀNH DANH TOẠI**
- Gia đạo **THUẬN HÒA**`,
  },

  {
    id: 'truc-phu-tai-phuc-duc-phuong-cac',
    title: 'Trực Phù + Phượng Các tại Phúc Đức - phúc khí vững',
    sao: ['Trực Phù'],
    cung: ['Phúc Đức'],
    ketHop: ['Phượng Các'],
    doUuTien: 70,
    tomTat: `**Trực Phù + Phượng Các tại Phúc Đức:**
- Phúc khí càng **VỮNG**
- Con cháu **CÔNG THÀNH DANH TOẠI**
- Gia đạo **THUẬN HÒA**`,
  },

  {
    id: 'truc-phu-tai-phuc-duc-kinh-duong',
    title: 'Trực Phù + Kình Dương tại Phúc Đức - hao phúc bất hòa',
    sao: ['Trực Phù'],
    cung: ['Phúc Đức'],
    ketHop: ['Kình Dương'],
    doUuTien: 70,
    tomTat: `**Trực Phù + Kình Dương tại Phúc Đức:**
- Phúc phần **HAO HỤT**
- Dễ phát sinh **BẤT HÒA NỘI TỘC**
- Đời sau phải **TỰ GỒNG GÁNH**`,
  },

  {
    id: 'truc-phu-tai-phuc-duc-da-la',
    title: 'Trực Phù + Đà La tại Phúc Đức - hao phúc bất hòa',
    sao: ['Trực Phù'],
    cung: ['Phúc Đức'],
    ketHop: ['Đà La'],
    doUuTien: 70,
    tomTat: `**Trực Phù + Đà La tại Phúc Đức:**
- Phúc phần **HAO HỤT**
- Dễ phát sinh **BẤT HÒA NỘI TỘC**
- Đời sau phải **TỰ GỒNG GÁNH**`,
  },

  {
    id: 'truc-phu-tai-phuc-duc-hoa-ky',
    title: 'Trực Phù + Hóa Kỵ tại Phúc Đức - hao phúc bất hòa',
    sao: ['Trực Phù'],
    cung: ['Phúc Đức'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `**Trực Phù + Hóa Kỵ tại Phúc Đức:**
- Phúc phần **HAO HỤT**
- Dễ phát sinh **BẤT HÒA NỘI TỘC**
- Đời sau phải **TỰ GỒNG GÁNH**`,
  },

  {
    id: 'truc-phu-tai-dien-trach',
    title: 'Trực Phù tại Điền Trạch',
    sao: ['Trực Phù'],
    cung: ['Điền Trạch'],
    doUuTien: 72,
    tomTat: `**Trực Phù tại Điền Trạch:** sắc thái **TRẮC TRỞ** về nhà cửa, đất đai.

**Mặt trái:**
- Hay gặp **PHIỀN LÒNG** khi mua bán đất đai, nhà cửa
- Mua bán nhà đất thường **DỄ BỊ LỖ, BỊ LỪA GẠT**
- Kinh doanh bất động sản dễ **THUA LỖ**, thậm chí **MẤT TRẮNG** vì:
  - **Tính CẢ TIN**
  - **Hay DO DỰ**

**Mặt tích cực:**
- Người sống **CHAN HÒA** với hàng xóm
- Hàng xóm cũng **HIỀN LÀNH, NHẸ NHÀNG**
- Môi trường sinh hoạt **YÊN ỔN**`,
  },

  {
    id: 'truc-phu-tai-dien-trach-ta-phu',
    title: 'Trực Phù + Tả Phù tại Điền Trạch - về sau ổn định',
    sao: ['Trực Phù'],
    cung: ['Điền Trạch'],
    ketHop: ['Tả Phù'],
    doUuTien: 67,
    tomTat: `**Trực Phù + Tả Phù tại Điền Trạch:** lúc đầu khó khăn nhưng về
sau **ĐI VÀO ỔN ĐỊNH**.`,
  },

  {
    id: 'truc-phu-tai-dien-trach-huu-bat',
    title: 'Trực Phù + Hữu Bật tại Điền Trạch - về sau ổn định',
    sao: ['Trực Phù'],
    cung: ['Điền Trạch'],
    ketHop: ['Hữu Bật'],
    doUuTien: 67,
    tomTat: `**Trực Phù + Hữu Bật tại Điền Trạch:** lúc đầu khó khăn nhưng
về sau **ĐI VÀO ỔN ĐỊNH**.`,
  },

  {
    id: 'truc-phu-tai-dien-trach-thien-viet',
    title: 'Trực Phù + Thiên Việt tại Điền Trạch - về sau ổn định',
    sao: ['Trực Phù'],
    cung: ['Điền Trạch'],
    ketHop: ['Thiên Việt'],
    doUuTien: 67,
    tomTat: `**Trực Phù + Thiên Việt tại Điền Trạch:** lúc đầu khó khăn nhưng
về sau **ĐI VÀO ỔN ĐỊNH**.`,
  },

  {
    id: 'truc-phu-tai-dien-trach-van-xuong',
    title: 'Trực Phù + Văn Xương tại Điền Trạch - về sau ổn định',
    sao: ['Trực Phù'],
    cung: ['Điền Trạch'],
    ketHop: ['Văn Xương'],
    doUuTien: 67,
    tomTat: `**Trực Phù + Văn Xương tại Điền Trạch:** lúc đầu khó khăn nhưng
về sau **ĐI VÀO ỔN ĐỊNH**.`,
  },

  {
    id: 'truc-phu-tai-dien-trach-loc-ton',
    title: 'Trực Phù + Lộc Tồn tại Điền Trạch - về sau ổn định',
    sao: ['Trực Phù'],
    cung: ['Điền Trạch'],
    ketHop: ['Lộc Tồn'],
    doUuTien: 67,
    tomTat: `**Trực Phù + Lộc Tồn tại Điền Trạch:** lúc đầu khó khăn nhưng
về sau **ĐI VÀO ỔN ĐỊNH**.`,
  },

  {
    id: 'truc-phu-tai-dien-trach-kinh-duong',
    title: 'Trực Phù + Kình Dương tại Điền Trạch - tranh chấp kiện tụng',
    sao: ['Trực Phù'],
    cung: ['Điền Trạch'],
    ketHop: ['Kình Dương'],
    doUuTien: 67,
    tomTat: `**Trực Phù + Kình Dương tại Điền Trạch:** nguy cơ **TRANH CHẤP,
KIỆN TỤNG, HAO TỔN TÀI SẢN** tăng cao. "**Cẩn tắc vô ưu**" trước mọi quyết
định lớn về nhà đất.`,
  },

  {
    id: 'truc-phu-tai-dien-trach-da-la',
    title: 'Trực Phù + Đà La tại Điền Trạch - tranh chấp kiện tụng',
    sao: ['Trực Phù'],
    cung: ['Điền Trạch'],
    ketHop: ['Đà La'],
    doUuTien: 67,
    tomTat: `**Trực Phù + Đà La tại Điền Trạch:** nguy cơ **TRANH CHẤP, KIỆN
TỤNG, HAO TỔN TÀI SẢN** tăng cao. "**Cẩn tắc vô ưu**" trước mọi quyết định lớn
về nhà đất.`,
  },

  {
    id: 'truc-phu-tai-dien-trach-hoa-ky',
    title: 'Trực Phù + Hóa Kỵ tại Điền Trạch - tranh chấp kiện tụng',
    sao: ['Trực Phù'],
    cung: ['Điền Trạch'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 67,
    tomTat: `**Trực Phù + Hóa Kỵ tại Điền Trạch:** nguy cơ **TRANH CHẤP,
KIỆN TỤNG, HAO TỔN TÀI SẢN** tăng cao. "**Cẩn tắc vô ưu**" trước mọi quyết
định lớn về nhà đất.`,
  },

  {
    id: 'truc-phu-tai-dien-trach-dia-khong',
    title: 'Trực Phù + Địa Không tại Điền Trạch - tranh chấp kiện tụng',
    sao: ['Trực Phù'],
    cung: ['Điền Trạch'],
    ketHop: ['Địa Không'],
    doUuTien: 67,
    tomTat: `**Trực Phù + Địa Không tại Điền Trạch:** nguy cơ **TRANH CHẤP,
KIỆN TỤNG, HAO TỔN TÀI SẢN** tăng cao. "**Cẩn tắc vô ưu**" trước mọi quyết
định lớn về nhà đất.`,
  },

  {
    id: 'truc-phu-tai-dien-trach-dia-kiep',
    title: 'Trực Phù + Địa Kiếp tại Điền Trạch - tranh chấp kiện tụng',
    sao: ['Trực Phù'],
    cung: ['Điền Trạch'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 67,
    tomTat: `**Trực Phù + Địa Kiếp tại Điền Trạch:** nguy cơ **TRANH CHẤP,
KIỆN TỤNG, HAO TỔN TÀI SẢN** tăng cao. "**Cẩn tắc vô ưu**" trước mọi quyết
định lớn về nhà đất.`,
  },

  {
    id: 'truc-phu-tai-quan-loc',
    title: 'Trực Phù tại Quan Lộc',
    sao: ['Trực Phù'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `**Trực Phù tại Quan Lộc:**
- Trong công việc luôn **CẦN MẪN, BÌNH LẶNG**
- Biết **NHƯỜNG NHỊN** mọi người xung quanh
- **GIỮ HÒA KHÍ**, ít bon chen
- Có **LƯƠNG TÂM nghề nghiệp**
- **Điềm đạm chấp nhận** thiệt thòi

**Mặt trái:**
- Thành quả **KHÔNG XỨNG ĐÁNG** với công sức bỏ ra
- "**LÀM NHIỀU HƯỞNG ÍT**"
- Đôi khi **người khác hưởng lợi** thay
- **Tính quyết đoán KHÔNG CAO**, hay **lo lắng**
- Cần có **NGƯỜI DẪN ĐƯỜNG, CHỈ BẢO** để **TỰ TIN HƠN**`,
  },

  {
    id: 'truc-phu-tai-quan-loc-luc-cat',
    title: 'Trực Phù + Lục Cát tại Quan Lộc - thăng tiến ổn định',
    sao: ['Trực Phù'],
    cung: ['Quan Lộc'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 73,
    tomTat: `**Trực Phù + Tả Phù / Hữu Bật / Văn Xương / Văn Khúc / Thiên Khôi
/ Thiên Việt tại Quan Lộc:**
- Sự nghiệp **THĂNG TIẾN CHẬM nhưng ỔN ĐỊNH**
- Được **CẤP TRÊN TRỌNG DỤNG**`,
  },

  {
    id: 'truc-phu-tai-quan-loc-kinh-duong',
    title: 'Trực Phù + Kình Dương tại Quan Lộc - công danh trắc trở',
    sao: ['Trực Phù'],
    cung: ['Quan Lộc'],
    ketHop: ['Kình Dương'],
    doUuTien: 73,
    tomTat: `**Trực Phù + Kình Dương tại Quan Lộc:**
- Công danh **TRẮC TRỞ**
- Nhiều lần **BỊ CẢN PHÁ**
- **TIỂU NHÂN CHÈN ÉP**`,
  },

  {
    id: 'truc-phu-tai-quan-loc-da-la',
    title: 'Trực Phù + Đà La tại Quan Lộc - công danh trắc trở',
    sao: ['Trực Phù'],
    cung: ['Quan Lộc'],
    ketHop: ['Đà La'],
    doUuTien: 73,
    tomTat: `**Trực Phù + Đà La tại Quan Lộc:**
- Công danh **TRẮC TRỞ**
- Nhiều lần **BỊ CẢN PHÁ**
- **TIỂU NHÂN CHÈN ÉP**`,
  },

  {
    id: 'truc-phu-tai-quan-loc-hoa-ky',
    title: 'Trực Phù + Hóa Kỵ tại Quan Lộc - công danh trắc trở',
    sao: ['Trực Phù'],
    cung: ['Quan Lộc'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 73,
    tomTat: `**Trực Phù + Hóa Kỵ tại Quan Lộc:**
- Công danh **TRẮC TRỞ**
- Nhiều lần **BỊ CẢN PHÁ**
- **TIỂU NHÂN CHÈN ÉP**`,
  },

  {
    id: 'truc-phu-tai-quan-loc-dia-khong',
    title: 'Trực Phù + Địa Không tại Quan Lộc - công danh trắc trở',
    sao: ['Trực Phù'],
    cung: ['Quan Lộc'],
    ketHop: ['Địa Không'],
    doUuTien: 73,
    tomTat: `**Trực Phù + Địa Không tại Quan Lộc:**
- Công danh **TRẮC TRỞ**
- Nhiều lần **BỊ CẢN PHÁ**
- **TIỂU NHÂN CHÈN ÉP**`,
  },

  {
    id: 'truc-phu-tai-quan-loc-dia-kiep',
    title: 'Trực Phù + Địa Kiếp tại Quan Lộc - công danh trắc trở',
    sao: ['Trực Phù'],
    cung: ['Quan Lộc'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 73,
    tomTat: `**Trực Phù + Địa Kiếp tại Quan Lộc:**
- Công danh **TRẮC TRỞ**
- Nhiều lần **BỊ CẢN PHÁ**
- **TIỂU NHÂN CHÈN ÉP**`,
  },

  {
    id: 'truc-phu-tai-quan-loc-hoa-tinh',
    title: 'Trực Phù + Hỏa Tinh tại Quan Lộc - công danh trắc trở',
    sao: ['Trực Phù'],
    cung: ['Quan Lộc'],
    ketHop: ['Hỏa Tinh'],
    doUuTien: 73,
    tomTat: `**Trực Phù + Hỏa Tinh tại Quan Lộc:**
- Công danh **TRẮC TRỞ**
- Nhiều lần **BỊ CẢN PHÁ**
- **TIỂU NHÂN CHÈN ÉP**`,
  },

  {
    id: 'truc-phu-tai-quan-loc-linh-tinh',
    title: 'Trực Phù + Linh Tinh tại Quan Lộc - công danh trắc trở',
    sao: ['Trực Phù'],
    cung: ['Quan Lộc'],
    ketHop: ['Linh Tinh'],
    doUuTien: 73,
    tomTat: `**Trực Phù + Linh Tinh tại Quan Lộc:**
- Công danh **TRẮC TRỞ**
- Nhiều lần **BỊ CẢN PHÁ**
- **TIỂU NHÂN CHÈN ÉP**`,
  },

  {
    id: 'truc-phu-tai-no-boc',
    title: 'Trực Phù tại Nô Bộc',
    sao: ['Trực Phù'],
    cung: ['Nô Bộc'],
    doUuTien: 70,
    tomTat: `**Trực Phù tại Nô Bộc:**
- Bạn bè, đồng nghiệp, cấp dưới **HIỀN LÀNH, TỐT TÍNH**, **DỄ GẦN**
- **KHÔNG GANH ĐUA, CHÈN ÉP** lẫn nhau
- Vòng tròn xã giao duy trì sự **YÊN ỔN**
- Bản mệnh **ÍT VƯỚNG THỊ PHI**
- Dễ nhận được **CẢM THÔNG, SAN SẺ** khi gặp khó khăn`,
  },

  {
    id: 'truc-phu-tai-no-boc-thien-quan',
    title: 'Trực Phù + Thiên Quan tại Nô Bộc - bạn quý nhân',
    sao: ['Trực Phù'],
    cung: ['Nô Bộc'],
    ketHop: ['Thiên Quan'],
    doUuTien: 65,
    tomTat: `**Trực Phù + Thiên Quan tại Nô Bộc:**
- Bằng hữu càng **TRUNG THÀNH**
- Biết **NÂNG ĐỠ**
- Trở thành **QUÝ NHÂN** mở lối công danh`,
  },

  {
    id: 'truc-phu-tai-no-boc-thien-phuc',
    title: 'Trực Phù + Thiên Phúc tại Nô Bộc - bạn quý nhân',
    sao: ['Trực Phù'],
    cung: ['Nô Bộc'],
    ketHop: ['Thiên Phúc'],
    doUuTien: 65,
    tomTat: `**Trực Phù + Thiên Phúc tại Nô Bộc:**
- Bằng hữu càng **TRUNG THÀNH**
- Biết **NÂNG ĐỠ**
- Trở thành **QUÝ NHÂN** mở lối công danh`,
  },

  {
    id: 'truc-phu-tai-no-boc-long-duc',
    title: 'Trực Phù + Long Đức tại Nô Bộc - bạn quý nhân',
    sao: ['Trực Phù'],
    cung: ['Nô Bộc'],
    ketHop: ['Long Đức'],
    doUuTien: 65,
    tomTat: `**Trực Phù + Long Đức tại Nô Bộc:**
- Bằng hữu càng **TRUNG THÀNH**
- Biết **NÂNG ĐỠ**
- Trở thành **QUÝ NHÂN** mở lối công danh`,
  },

  {
    id: 'truc-phu-tai-no-boc-ta-phu',
    title: 'Trực Phù + Tả Phù tại Nô Bộc - bạn quý nhân',
    sao: ['Trực Phù'],
    cung: ['Nô Bộc'],
    ketHop: ['Tả Phù'],
    doUuTien: 65,
    tomTat: `**Trực Phù + Tả Phù tại Nô Bộc:**
- Bằng hữu càng **TRUNG THÀNH**
- Biết **NÂNG ĐỠ**
- Trở thành **QUÝ NHÂN** mở lối công danh`,
  },

  {
    id: 'truc-phu-tai-no-boc-huu-bat',
    title: 'Trực Phù + Hữu Bật tại Nô Bộc - bạn quý nhân',
    sao: ['Trực Phù'],
    cung: ['Nô Bộc'],
    ketHop: ['Hữu Bật'],
    doUuTien: 65,
    tomTat: `**Trực Phù + Hữu Bật tại Nô Bộc:**
- Bằng hữu càng **TRUNG THÀNH**
- Biết **NÂNG ĐỠ**
- Trở thành **QUÝ NHÂN** mở lối công danh`,
  },

  {
    id: 'truc-phu-tai-no-boc-van-xuong',
    title: 'Trực Phù + Văn Xương tại Nô Bộc - bạn quý nhân',
    sao: ['Trực Phù'],
    cung: ['Nô Bộc'],
    ketHop: ['Văn Xương'],
    doUuTien: 65,
    tomTat: `**Trực Phù + Văn Xương tại Nô Bộc:**
- Bằng hữu càng **TRUNG THÀNH**
- Biết **NÂNG ĐỠ**
- Trở thành **QUÝ NHÂN** mở lối công danh`,
  },

  {
    id: 'truc-phu-tai-no-boc-van-khuc',
    title: 'Trực Phù + Văn Khúc tại Nô Bộc - bạn quý nhân',
    sao: ['Trực Phù'],
    cung: ['Nô Bộc'],
    ketHop: ['Văn Khúc'],
    doUuTien: 65,
    tomTat: `**Trực Phù + Văn Khúc tại Nô Bộc:**
- Bằng hữu càng **TRUNG THÀNH**
- Biết **NÂNG ĐỠ**
- Trở thành **QUÝ NHÂN** mở lối công danh`,
  },

  {
    id: 'truc-phu-tai-no-boc-kinh-duong',
    title: 'Trực Phù + Kình Dương tại Nô Bộc - bạn lợi dụng',
    sao: ['Trực Phù'],
    cung: ['Nô Bộc'],
    ketHop: ['Kình Dương'],
    doUuTien: 65,
    tomTat: `**Trực Phù + Kình Dương tại Nô Bộc:**
- Bạn bè dễ "**BẰNG MẶT KHÔNG BẰNG LÒNG**"
- **LỢI DỤNG LÒNG TIN** hoặc **THỜ Ơ** khi cần cậy nhờ`,
  },

  {
    id: 'truc-phu-tai-no-boc-da-la',
    title: 'Trực Phù + Đà La tại Nô Bộc - bạn lợi dụng',
    sao: ['Trực Phù'],
    cung: ['Nô Bộc'],
    ketHop: ['Đà La'],
    doUuTien: 65,
    tomTat: `**Trực Phù + Đà La tại Nô Bộc:**
- Bạn bè dễ "**BẰNG MẶT KHÔNG BẰNG LÒNG**"
- **LỢI DỤNG LÒNG TIN** hoặc **THỜ Ơ** khi cần cậy nhờ`,
  },

  {
    id: 'truc-phu-tai-no-boc-hoa-ky',
    title: 'Trực Phù + Hóa Kỵ tại Nô Bộc - bạn lợi dụng',
    sao: ['Trực Phù'],
    cung: ['Nô Bộc'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 65,
    tomTat: `**Trực Phù + Hóa Kỵ tại Nô Bộc:**
- Bạn bè dễ "**BẰNG MẶT KHÔNG BẰNG LÒNG**"
- **LỢI DỤNG LÒNG TIN** hoặc **THỜ Ơ** khi cần cậy nhờ`,
  },

  {
    id: 'truc-phu-tai-no-boc-dia-khong',
    title: 'Trực Phù + Địa Không tại Nô Bộc - bạn lợi dụng',
    sao: ['Trực Phù'],
    cung: ['Nô Bộc'],
    ketHop: ['Địa Không'],
    doUuTien: 65,
    tomTat: `**Trực Phù + Địa Không tại Nô Bộc:**
- Bạn bè dễ "**BẰNG MẶT KHÔNG BẰNG LÒNG**"
- **LỢI DỤNG LÒNG TIN** hoặc **THỜ Ơ** khi cần cậy nhờ`,
  },

  {
    id: 'truc-phu-tai-no-boc-dia-kiep',
    title: 'Trực Phù + Địa Kiếp tại Nô Bộc - bạn lợi dụng',
    sao: ['Trực Phù'],
    cung: ['Nô Bộc'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 65,
    tomTat: `**Trực Phù + Địa Kiếp tại Nô Bộc:**
- Bạn bè dễ "**BẰNG MẶT KHÔNG BẰNG LÒNG**"
- **LỢI DỤNG LÒNG TIN** hoặc **THỜ Ơ** khi cần cậy nhờ`,
  },

  {
    id: 'truc-phu-tai-thien-di',
    title: 'Trực Phù tại Thiên Di',
    sao: ['Trực Phù'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Trực Phù tại Thiên Di:**
- Ra ngoài thường **NHƯỜNG NHỊN, NHẸ NHÀNG**
- Hay **GIÚP ĐỠ** mọi người
- Sẵn sàng **CHỊU THIỆT THÒI** về bản thân
- **KHÔNG HAM SÂN SI**: tạo **THIỆN CẢM**, được **NHIỀU NGƯỜI QUÝ MẾN**

**Mặt trái:**
- Khi tiếp xúc **MÔI TRƯỜNG LẠ** thường **THIẾU TỰ TIN**
- **CẢ TIN QUÁ MỨC**: không ít lần **TỰ RƯỚC HỌA VÀO THÂN**
- Đi xa hay bị **LÚNG TÚNG, dễ bị NGƯỜI KHÁC LỪA GẠT**
- Phải qua **vài lần VẤP NGÃ** mới rèn được **sự THẬN TRỌNG**

(Xem entry chuyên biệt cho Cát tinh / Sát tinh.)`,
  },

  {
    id: 'truc-phu-tai-thien-di-luc-cat',
    title: 'Trực Phù + Lục Cát tại Thiên Di - quý nhân nâng đỡ',
    sao: ['Trực Phù'],
    cung: ['Thiên Di'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 70,
    tomTat: `**Trực Phù + Cát tinh tại Thiên Di** (Tả Phù / Hữu Bật / Văn Xương
/ Văn Khúc / Thiên Khôi / Thiên Việt): dễ **GẶP QUÝ NHÂN nâng đỡ** — biến sự
**NHU HÒA** thành **ƯU THẾ**.`,
  },

  {
    id: 'truc-phu-tai-thien-di-tu-sat',
    title: 'Trực Phù + Tứ Sát tại Thiên Di - thị phi gian nan',
    sao: ['Trực Phù'],
    cung: ['Thiên Di'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 70,
    tomTat: `**Trực Phù + Sát tinh tại Thiên Di** (Kình Dương / Đà La / Hỏa
Tinh / Linh Tinh): dễ vướng **HỌA THỊ PHI**, **THA PHƯƠNG LẮM GIAN NAN** —
buộc phải lấy **CẨN TRỌNG** làm đầu.`,
  },

  {
    id: 'truc-phu-tai-tat-ach',
    title: 'Trực Phù tại Tật Ách',
    sao: ['Trực Phù'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `**Trực Phù tại Tật Ách:**
- Dễ **CHỊU THIỆT THÒI** về sức khỏe
- Hay **LO LẮNG, ĐA NGHI**
- Dễ sinh **TÂM BỆNH** do tinh thần **bất an**
- **NHẠY CẢM**, để tâm đến những thay đổi nhỏ
- Dễ rơi vào trạng thái "**LO BÒ TRẮNG RĂNG**"

**Mặt khác:**
- Là người **DỄ BỊ LỪA**
- Hay phải **CHỊU THIỆT, CHỊU TAI HỌA** do **NGƯỜI KHÁC ĐỔ CHO**`,
  },

  {
    id: 'truc-phu-tai-tat-ach-thien-luong',
    title: 'Trực Phù + Thiên Lương tại Tật Ách - duyên thầy thuốc giỏi',
    sao: ['Trực Phù'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Lương'],
    doUuTien: 70,
    tomTat: `**Trực Phù + Thiên Lương tại Tật Ách:**
- Có **DUYÊN GẶP THẦY THUỐC GIỎI** cứu giúp
- Nhiều lần "**TAI QUA NẠN KHỎI**"`,
  },

  {
    id: 'truc-phu-tai-tat-ach-thien-dong',
    title: 'Trực Phù + Thiên Đồng tại Tật Ách - duyên thầy thuốc giỏi',
    sao: ['Trực Phù'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Đồng'],
    doUuTien: 70,
    tomTat: `**Trực Phù + Thiên Đồng tại Tật Ách:**
- Có **DUYÊN GẶP THẦY THUỐC GIỎI** cứu giúp
- Nhiều lần "**TAI QUA NẠN KHỎI**"`,
  },

  {
    id: 'truc-phu-tai-tat-ach-ta-phu',
    title: 'Trực Phù + Tả Phù tại Tật Ách - duyên thầy thuốc giỏi',
    sao: ['Trực Phù'],
    cung: ['Tật Ách'],
    ketHop: ['Tả Phù'],
    doUuTien: 70,
    tomTat: `**Trực Phù + Tả Phù tại Tật Ách:**
- Có **DUYÊN GẶP THẦY THUỐC GIỎI** cứu giúp
- Nhiều lần "**TAI QUA NẠN KHỎI**"`,
  },

  {
    id: 'truc-phu-tai-tat-ach-huu-bat',
    title: 'Trực Phù + Hữu Bật tại Tật Ách - duyên thầy thuốc giỏi',
    sao: ['Trực Phù'],
    cung: ['Tật Ách'],
    ketHop: ['Hữu Bật'],
    doUuTien: 70,
    tomTat: `**Trực Phù + Hữu Bật tại Tật Ách:**
- Có **DUYÊN GẶP THẦY THUỐC GIỎI** cứu giúp
- Nhiều lần "**TAI QUA NẠN KHỎI**"`,
  },

  {
    id: 'truc-phu-tai-tat-ach-van-xuong',
    title: 'Trực Phù + Văn Xương tại Tật Ách - duyên thầy thuốc giỏi',
    sao: ['Trực Phù'],
    cung: ['Tật Ách'],
    ketHop: ['Văn Xương'],
    doUuTien: 70,
    tomTat: `**Trực Phù + Văn Xương tại Tật Ách:**
- Có **DUYÊN GẶP THẦY THUỐC GIỎI** cứu giúp
- Nhiều lần "**TAI QUA NẠN KHỎI**"`,
  },

  {
    id: 'truc-phu-tai-tat-ach-van-khuc',
    title: 'Trực Phù + Văn Khúc tại Tật Ách - duyên thầy thuốc giỏi',
    sao: ['Trực Phù'],
    cung: ['Tật Ách'],
    ketHop: ['Văn Khúc'],
    doUuTien: 70,
    tomTat: `**Trực Phù + Văn Khúc tại Tật Ách:**
- Có **DUYÊN GẶP THẦY THUỐC GIỎI** cứu giúp
- Nhiều lần "**TAI QUA NẠN KHỎI**"`,
  },

  {
    id: 'truc-phu-tai-tat-ach-tu-sat',
    title: 'Trực Phù + Tứ Sát tại Tật Ách - bệnh dai dẳng',
    sao: ['Trực Phù'],
    cung: ['Tật Ách'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 70,
    tomTat: `**Trực Phù + Sát Tinh tại Tật Ách** (Kình Dương / Đà La / Hỏa
Tinh / Linh Tinh):
- Bệnh tình **DAI DẲNG**
- Dễ gặp **HỌA BẤT NGỜ**
- Tốn kém mà **KHÓ DỨT ĐIỂM**`,
  },

  {
    id: 'truc-phu-tai-tai-bach',
    title: 'Trực Phù tại Tài Bạch',
    sao: ['Trực Phù'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Trực Phù tại Tài Bạch:**
- **KIẾM TIỀN CHÍNH ĐÁNG, TRONG SẠCH**
- Có **LÒNG TỪ THIỆN cao**
- **ÍT MUỐN TRANH GIÀNH** với ai
- Hay **GẶP MAY về tiền**
- Sẵn sàng **GIÚP ĐỠ, QUYÊN GÓP TỪ THIỆN, LÀM PHÚC**
- **KHÔNG LỪA LỌC** hay thủ đoạn

**Đặc tính tài chính:**
- **ĂN TIÊU CẨN THẬN**, KHÔNG **đầu tư hoang**
- Tiêu tiền **NHỎ GIỌT**
- **HIẾM KHI rơi vào "CHÁY TÚI"**
- Nhờ vậy tiền nong **ỔN ĐỊNH**

**Mặt trái:**
- **THẬT THÀ DỄ HÓA RA DẠI**
- Lòng thương người có thể bị **LỢI DỤNG**: **HAO TÀI TỐN CỦA**
- Người dễ bị **THẬT THÀ MÀ HAY BỊ LỪA TIỀN**`,
  },

  {
    id: 'truc-phu-tai-tai-bach-loc-ton',
    title: 'Trực Phù + Lộc Tồn tại Tài Bạch - tài chính vững',
    sao: ['Trực Phù'],
    cung: ['Tài Bạch'],
    ketHop: ['Lộc Tồn'],
    doUuTien: 70,
    tomTat: `**Trực Phù + Lộc Tồn tại Tài Bạch:**
- Tài chính thêm phần **VỮNG VÀNG**
- Có **lộc QUÝ NHÂN**
- Cuộc sống **ĐỦ ĐẦY**`,
  },

  {
    id: 'truc-phu-tai-tai-bach-hoa-loc',
    title: 'Trực Phù + Hóa Lộc tại Tài Bạch - tài chính vững',
    sao: ['Trực Phù'],
    cung: ['Tài Bạch'],
    ketHop: ['Hóa Lộc'],
    doUuTien: 70,
    tomTat: `**Trực Phù + Hóa Lộc tại Tài Bạch:**
- Tài chính thêm phần **VỮNG VÀNG**
- Có **lộc QUÝ NHÂN**
- Cuộc sống **ĐỦ ĐẦY**`,
  },

  {
    id: 'truc-phu-tai-tai-bach-ta-phu',
    title: 'Trực Phù + Tả Phù tại Tài Bạch - tài chính vững',
    sao: ['Trực Phù'],
    cung: ['Tài Bạch'],
    ketHop: ['Tả Phù'],
    doUuTien: 70,
    tomTat: `**Trực Phù + Tả Phù tại Tài Bạch:**
- Tài chính thêm phần **VỮNG VÀNG**
- Có **lộc QUÝ NHÂN**
- Cuộc sống **ĐỦ ĐẦY**`,
  },

  {
    id: 'truc-phu-tai-tai-bach-huu-bat',
    title: 'Trực Phù + Hữu Bật tại Tài Bạch - tài chính vững',
    sao: ['Trực Phù'],
    cung: ['Tài Bạch'],
    ketHop: ['Hữu Bật'],
    doUuTien: 70,
    tomTat: `**Trực Phù + Hữu Bật tại Tài Bạch:**
- Tài chính thêm phần **VỮNG VÀNG**
- Có **lộc QUÝ NHÂN**
- Cuộc sống **ĐỦ ĐẦY**`,
  },

  {
    id: 'truc-phu-tai-tai-bach-van-xuong',
    title: 'Trực Phù + Văn Xương tại Tài Bạch - tài chính vững',
    sao: ['Trực Phù'],
    cung: ['Tài Bạch'],
    ketHop: ['Văn Xương'],
    doUuTien: 70,
    tomTat: `**Trực Phù + Văn Xương tại Tài Bạch:**
- Tài chính thêm phần **VỮNG VÀNG**
- Có **lộc QUÝ NHÂN**
- Cuộc sống **ĐỦ ĐẦY**`,
  },

  {
    id: 'truc-phu-tai-tai-bach-van-khuc',
    title: 'Trực Phù + Văn Khúc tại Tài Bạch - tài chính vững',
    sao: ['Trực Phù'],
    cung: ['Tài Bạch'],
    ketHop: ['Văn Khúc'],
    doUuTien: 70,
    tomTat: `**Trực Phù + Văn Khúc tại Tài Bạch:**
- Tài chính thêm phần **VỮNG VÀNG**
- Có **lộc QUÝ NHÂN**
- Cuộc sống **ĐỦ ĐẦY**`,
  },

  {
    id: 'truc-phu-tai-tai-bach-tu-sat',
    title: 'Trực Phù + Tứ Sát tại Tài Bạch - hao hụt tiền bạc',
    sao: ['Trực Phù'],
    cung: ['Tài Bạch'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 70,
    tomTat: `**Trực Phù + Sát Tinh tại Tài Bạch** (Kình Dương / Đà La / Hỏa
Tinh / Linh Tinh):
- Tiền bạc **HAO HỤT**
- Làm nhiều hưởng ít
- Dễ gặp cảnh "**CÔNG DÃ TRÀNG**"`,
  },

  {
    id: 'truc-phu-tai-tu-tuc',
    title: 'Trực Phù tại Tử Tức',
    sao: ['Trực Phù'],
    cung: ['Tử Tức'],
    doUuTien: 70,
    tomTat: `**Trực Phù tại Tử Tức:**
- Con cái **HIỀN LÀNH, HIẾU THUẬN**
- Biết **NHƯỜNG NHỊN**, **SỐNG CHAN HÒA**
- Cha mẹ thường tìm được **NIỀM AN ỦI** từ con cái

**Mặt trái:**
- Bản tính **THẬT THÀ** nên hay **DẠI DỘT TIN NGƯỜI**
- **CHỊU THIỆT** trong **học hành và công việc**
- Cha mẹ không ít lần "**ĂN KHÔNG NGON, NGỦ KHÔNG YÊN**" vì **lo lắng không
  đâu**`,
  },

  {
    id: 'truc-phu-tai-tu-tuc-ta-phu',
    title: 'Trực Phù + Tả Phù tại Tử Tức - con sáng dạ',
    sao: ['Trực Phù'],
    cung: ['Tử Tức'],
    ketHop: ['Tả Phù'],
    doUuTien: 65,
    tomTat: `**Trực Phù + Tả Phù tại Tử Tức:**
- Con sinh ra **SÁNG DẠ, THÀNH ĐẠT**
- Cha mẹ được **NHỜ CẬY**`,
  },

  {
    id: 'truc-phu-tai-tu-tuc-huu-bat',
    title: 'Trực Phù + Hữu Bật tại Tử Tức - con sáng dạ',
    sao: ['Trực Phù'],
    cung: ['Tử Tức'],
    ketHop: ['Hữu Bật'],
    doUuTien: 65,
    tomTat: `**Trực Phù + Hữu Bật tại Tử Tức:**
- Con sinh ra **SÁNG DẠ, THÀNH ĐẠT**
- Cha mẹ được **NHỜ CẬY**`,
  },

  {
    id: 'truc-phu-tai-tu-tuc-van-xuong',
    title: 'Trực Phù + Văn Xương tại Tử Tức - con sáng dạ',
    sao: ['Trực Phù'],
    cung: ['Tử Tức'],
    ketHop: ['Văn Xương'],
    doUuTien: 65,
    tomTat: `**Trực Phù + Văn Xương tại Tử Tức:**
- Con sinh ra **SÁNG DẠ, THÀNH ĐẠT**
- Cha mẹ được **NHỜ CẬY**`,
  },

  {
    id: 'truc-phu-tai-tu-tuc-thien-khoi',
    title: 'Trực Phù + Thiên Khôi tại Tử Tức - con sáng dạ',
    sao: ['Trực Phù'],
    cung: ['Tử Tức'],
    ketHop: ['Thiên Khôi'],
    doUuTien: 65,
    tomTat: `**Trực Phù + Thiên Khôi tại Tử Tức:**
- Con sinh ra **SÁNG DẠ, THÀNH ĐẠT**
- Cha mẹ được **NHỜ CẬY**`,
  },

  {
    id: 'truc-phu-tai-tu-tuc-tu-sat',
    title: 'Trực Phù + Tứ Sát tại Tử Tức - nuôi dạy vất vả',
    sao: ['Trực Phù'],
    cung: ['Tử Tức'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 65,
    tomTat: `**Trực Phù + Sát Tinh tại Tử Tức** (Kình Dương / Đà La / Hỏa
Tinh / Linh Tinh):
- Việc nuôi dạy **VẤT VẢ**
- Hoặc tình cảm có sự **XA CÁCH**`,
  },

  {
    id: 'truc-phu-tai-phu-the',
    title: 'Trực Phù tại Phu Thê - tướng phu thê',
    sao: ['Trực Phù'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `**Trực Phù tại Phu Thê:**
- Người hôn phối **HIỀN HẬU, NHẸ NHÀNG, ĐỨC ĐỘ**
- Sống **TÌNH NGHĨA, NHƯỜNG NHỊN**, **LÂU BỀN**
- **ÍT KHI XẢY RA MÂU THUẪN**
- Khi có mâu thuẫn thì **HẠ CÁI TÔI** xuống ngay để **GIẢNG HÒA**
- Biết **VUN VÉN GIA ĐÌNH**

**Tướng phu thê:**
- Hai vợ chồng **TƯỚNG ĐỐI XỨNG ĐÔI VỪA LỨA**
- Hay thích **LÀM PHƯỚC, HƯỚNG THIỆN**
- Hôn nhân tuy **GIẢN DỊ** nhưng **BỀN LÂU**`,
  },

  {
    id: 'truc-phu-tai-phu-the-ta-phu',
    title: 'Trực Phù + Tả Phù tại Phu Thê - gia đạo êm ấm',
    sao: ['Trực Phù'],
    cung: ['Phu Thê'],
    ketHop: ['Tả Phù'],
    doUuTien: 70,
    tomTat: `**Trực Phù + Tả Phù tại Phu Thê:**
- Gia đạo càng **ÊM ẤM**
- Vợ chồng **ĐỒNG LÒNG GÂY DỰNG CƠ NGHIỆP**`,
  },

  {
    id: 'truc-phu-tai-phu-the-huu-bat',
    title: 'Trực Phù + Hữu Bật tại Phu Thê - gia đạo êm ấm',
    sao: ['Trực Phù'],
    cung: ['Phu Thê'],
    ketHop: ['Hữu Bật'],
    doUuTien: 70,
    tomTat: `**Trực Phù + Hữu Bật tại Phu Thê:**
- Gia đạo càng **ÊM ẤM**
- Vợ chồng **ĐỒNG LÒNG GÂY DỰNG CƠ NGHIỆP**`,
  },

  {
    id: 'truc-phu-tai-phu-the-van-xuong',
    title: 'Trực Phù + Văn Xương tại Phu Thê - gia đạo êm ấm',
    sao: ['Trực Phù'],
    cung: ['Phu Thê'],
    ketHop: ['Văn Xương'],
    doUuTien: 70,
    tomTat: `**Trực Phù + Văn Xương tại Phu Thê:**
- Gia đạo càng **ÊM ẤM**
- Vợ chồng **ĐỒNG LÒNG GÂY DỰNG CƠ NGHIỆP**`,
  },

  {
    id: 'truc-phu-tai-phu-the-thien-khoi',
    title: 'Trực Phù + Thiên Khôi tại Phu Thê - gia đạo êm ấm',
    sao: ['Trực Phù'],
    cung: ['Phu Thê'],
    ketHop: ['Thiên Khôi'],
    doUuTien: 70,
    tomTat: `**Trực Phù + Thiên Khôi tại Phu Thê:**
- Gia đạo càng **ÊM ẤM**
- Vợ chồng **ĐỒNG LÒNG GÂY DỰNG CƠ NGHIỆP**`,
  },

  {
    id: 'truc-phu-tai-phu-the-tu-sat',
    title: 'Trực Phù + Tứ Sát tại Phu Thê - hôn nhân thử thách',
    sao: ['Trực Phù'],
    cung: ['Phu Thê'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 70,
    tomTat: `**Trực Phù + Sát Tinh tại Phu Thê** (Kình Dương / Đà La / Hỏa
Tinh / Linh Tinh):
- Hôn nhân mang màu **THỬ THÁCH**
- Dễ bị **NGƯỜI NGOÀI XEN VÀO**
- Hoặc gặp cảnh **XA CÁCH**
- Cần sự **NHẪN NẠI và BAO DUNG** mới giữ được hạnh phúc`,
  },

  {
    id: 'truc-phu-tai-huynh-de',
    title: 'Trực Phù tại Huynh Đệ',
    sao: ['Trực Phù'],
    cung: ['Huynh Đệ'],
    doUuTien: 70,
    tomTat: `**Trực Phù tại Huynh Đệ:**
- Anh chị em chung sống **CHAN HÒA**
- **TRỌNG TÌNH NGHĨA**
- Biết **NHƯỜNG NHỊN**
- Sẵn sàng **HỖ TRỢ NHAU** khi hoạn nạn
- Tình cảm "**MÁU CHẢY RUỘT MỀM**" là **ĐIỂM TỰA TINH THẦN** vững chắc

**Mặt trái:**
- Anh em dễ **CHỊU THIỆT** vì **TIN LẦM NGƯỜI** mà lâm vào khốn khó`,
  },

  {
    id: 'truc-phu-tai-huynh-de-ta-phu',
    title: 'Trực Phù + Tả Phù tại Huynh Đệ - hòa thuận thành đạt',
    sao: ['Trực Phù'],
    cung: ['Huynh Đệ'],
    ketHop: ['Tả Phù'],
    doUuTien: 65,
    tomTat: `**Trực Phù + Tả Phù tại Huynh Đệ:**
- Anh em không chỉ **HÒA THUẬN** mà còn **THÀNH ĐẠT**
- Hỗ trợ nhau trên đường **CÔNG DANH**`,
  },

  {
    id: 'truc-phu-tai-huynh-de-huu-bat',
    title: 'Trực Phù + Hữu Bật tại Huynh Đệ - hòa thuận thành đạt',
    sao: ['Trực Phù'],
    cung: ['Huynh Đệ'],
    ketHop: ['Hữu Bật'],
    doUuTien: 65,
    tomTat: `**Trực Phù + Hữu Bật tại Huynh Đệ:**
- Anh em không chỉ **HÒA THUẬN** mà còn **THÀNH ĐẠT**
- Hỗ trợ nhau trên đường **CÔNG DANH**`,
  },

  {
    id: 'truc-phu-tai-huynh-de-van-xuong',
    title: 'Trực Phù + Văn Xương tại Huynh Đệ - hòa thuận thành đạt',
    sao: ['Trực Phù'],
    cung: ['Huynh Đệ'],
    ketHop: ['Văn Xương'],
    doUuTien: 65,
    tomTat: `**Trực Phù + Văn Xương tại Huynh Đệ:**
- Anh em không chỉ **HÒA THUẬN** mà còn **THÀNH ĐẠT**
- Hỗ trợ nhau trên đường **CÔNG DANH**`,
  },

  {
    id: 'truc-phu-tai-huynh-de-thien-khoi',
    title: 'Trực Phù + Thiên Khôi tại Huynh Đệ - hòa thuận thành đạt',
    sao: ['Trực Phù'],
    cung: ['Huynh Đệ'],
    ketHop: ['Thiên Khôi'],
    doUuTien: 65,
    tomTat: `**Trực Phù + Thiên Khôi tại Huynh Đệ:**
- Anh em không chỉ **HÒA THUẬN** mà còn **THÀNH ĐẠT**
- Hỗ trợ nhau trên đường **CÔNG DANH**`,
  },

  {
    id: 'truc-phu-tai-huynh-de-tu-sat',
    title: 'Trực Phù + Tứ Sát tại Huynh Đệ - lận đận thị phi',
    sao: ['Trực Phù'],
    cung: ['Huynh Đệ'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 65,
    tomTat: `**Trực Phù + Sát Tinh tại Huynh Đệ** (Kình Dương / Đà La / Hỏa
Tinh / Linh Tinh):
- Người thân **LẬN ĐẬN**
- Hay vướng **THỊ PHI**
- Tình nghĩa vẫn là **SỢI DÂY GẮN KẾT** để giữ gia đạo yên ổn`,
  },

  {
    id: 'truc-phu-vao-han',
    title: 'Trực Phù vào hạn',
    sao: ['Trực Phù'],
    doUuTien: 50,
    tomTat: `**Vận có Trực Phù:** giai đoạn con người trở nên:
- **ĐIỀM ĐẠM, NHẸ NHÀNG**
- **KHÔNG HAM QUYỀN ĐOẠT VỊ**
- Hay **GIÚP ĐỠ NGƯỜI KHÁC** và được **NGƯỜI KHÁC GIÚP ĐỠ LẠI**
- Ứng với câu "**Ở hiền thì gặp lành**"

**Đặc trưng vận hạn:**
- Tâm tính **CẨN TRỌNG**, KHÔNG vội vàng
- Tránh được **rủi ro** lớn
- Thành quả **CHẬM** nhưng **CHẮC**
- Cần đề phòng **lừa gạt, mất mát** do tin lầm người`,
  },

  {
    id: 'truc-phu-loi-khuyen',
    title: 'Lời khuyên cho người Trực Phù',
    sao: ['Trực Phù'],
    doUuTien: 35,
    tomTat: `**Trực Phù mang khí chất NHU HÒA**, giúp đương số giữ sự **NGAY THẲNG, THIỆN
LƯƠNG**.

**Điểm mạnh:**
- **HIỀN LÀNH, NHÂN HẬU**
- Sống **TỬ TẾ, không tranh giành**
- Được **người yêu mến**

**Điểm yếu:**
- **DỄ TIN, DỄ BỊ LỪA**
- **THIẾU QUYẾT ĐOÁN**
- **CHỊU THIỆT THÒI**, đa nghi sau khi bị tổn thương

**Bí quyết phát huy Trực Phù:**
- **CẨN TRỌNG, TỈNH TÁO** làm KIM CHỈ NAM
- **KIỂM TRA KỸ** trước khi tin tưởng — nhất là chuyện tiền bạc, hợp đồng
- **TÌM QUÝ NHÂN, BẠN ĐỒNG HÀNH** đáng tin để cùng tham mưu
- **HỌC QUYẾT ĐOÁN** — không để cảm xúc lo sợ chi phối
- **CHIA SẺ** thay vì **TỰ ÔM** mọi tâm sự
- **GIỮ TÂM THIỆN** — vì đó là sức mạnh tự nhiên của Trực Phù

- Khi biết **CẨN TRỌNG** mà **không đa nghi quá độ**, Trực Phù trở thành **người
quý** trong mắt mọi người — được tin cậy giao việc, được yêu mến lâu dài.`,
  },
];
