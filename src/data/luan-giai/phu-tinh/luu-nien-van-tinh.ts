import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO LƯU NIÊN VĂN TINH - Kim, sao Lộc Tồn thứ 2.
 * An offset +3 thuận từ Lộc Tồn (engine hardcode).
 *
 * Có khả năng HÓA GIẢI bệnh tật, tai họa nhẹ - giống Lộc Tồn.
 * Chủ về học vấn, tri thức, khoa bảng.
 */
export const luanGiai_LuuNienVanTinh: DoanLuanGiai[] = [
  {
    id: 'luu-nien-van-tinh-tinh-chat-chung',
    title: 'Lưu Niên Văn Tinh - Đặc tính chung',
    sao: ['Lưu Niên Văn Tinh'],
    doUuTien: 32,
    tomTat: `**Lưu Niên Văn Tinh** — phụ tinh **VĂN TINH**, được coi như **SAO LỘC TỒN THỨ
HAI**.

**Ngũ hành:** **Kim**.

⚡ **Vị thế:**
- An offset **+3 thuận từ Lộc Tồn** (engine hardcode)
- Là **VĂN TINH thứ ba** sau Văn Xương, Văn Khúc
- Có khả năng **HÓA GIẢI bệnh tật, tai họa nhẹ** (giống Lộc Tồn) — chủ yếu
  bằng **KIẾN THỨC, KHOA HỌC KỸ THUẬT**

⚡ **Vai trò:**
- Chủ về **HỌC VẤN, TRI THỨC**
- **SỰ KHAI MỞ TRÍ TUỆ**
- Con đường **THI CỬ HỌC HÀNH** nhiều thành tựu
- **KHOA BẢNG**

**Đặc tính:** **THANH TÚ, TRÍ THỨC, HỌC VẤN, BẰNG CẤP, NGHIÊN CỨU, THẦY GIÁO**.`,
  },

  {
    id: 'luu-nien-van-tinh-tuong-mao',
    title: 'Lưu Niên Văn Tinh - Tướng mạo',
    sao: ['Lưu Niên Văn Tinh'],
    cung: ['Mệnh'],
    doUuTien: 50,
    tomTat: `🌟 **Lưu Niên Văn Tinh thủ Mệnh - Tướng mạo:**

🌟 **Đặc điểm:**
- Vẻ mặt **THANH TÚ, KHÔI NGÔ**
- Dáng dấp luôn **NHÃ NHẶN, THƯ SINH, HỌC THỨC**
- Nét đẹp thiên về **DUYÊN DÁNG và TINH TẾ**

🌟 **Khí chất:**
- Thần sắc toát lên sự **ĐIỀM ĐẠM, TRÍ THỨC**
- Dễ **TẠO THIỆN CẢM** với người đối diện`,
  },

  {
    id: 'luu-nien-van-tinh-tuong-mao-nu',
    title: 'Lưu Niên Văn Tinh tại Mệnh - Nữ mệnh nhan sắc',
    sao: ['Lưu Niên Văn Tinh'],
    cung: ['Mệnh'],
    gioiTinh: 'Nữ',
    doUuTien: 45,
    tomTat: `🌟 **Lưu Niên Văn Tinh thủ Mệnh — nữ mệnh:**
- Có **NHAN SẮC**
- Dáng vẻ **THƯ SINH, NHÃ NHẶN, TRÍ THỨC**
- Vẻ đẹp **DUYÊN DÁNG VÀ TINH TẾ**`,
  },

  {
    id: 'luu-nien-van-tinh-tai-menh',
    title: 'Lưu Niên Văn Tinh tại Mệnh - thông minh học cao',
    sao: ['Lưu Niên Văn Tinh'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `🌟 **Lưu Niên Văn Tinh thủ Mệnh:**

🌟 **Tính cách:**
- **THÔNG MINH, có HỌC THỨC**
- **HOẠT BÁT**
- Có **NĂNG KHIẾU SẮC BÉN** về:
  - **VĂN CHƯƠNG**
  - **MỸ THUẬT**
  - **ÂM NHẠC**
  - Nhiều lĩnh vực khác

🌟 **Giao tiếp:**
- Có khả năng **ĂN NÓI, GIAO TIẾP TỐT**
- Khi nói chuyện thường có **CHUYÊN MÔN SÂU**
- "**Trên thông thiên văn dưới tường địa lý**"
- Lập luận **RÕ RÀNG**, lời nói **CÓ TRỌNG TÂM**

🌟 **Học hành:**
- Vì chủ về **HỌC HÀNH KHOA BẢNG** → **CHỊU KHÓ, YÊU THÍCH HỌC TẬP**
- Chịu khó **TÌM HIỂU** các kiến thức xung quanh

🌟 **Công danh:**
- Người **HỌC CAO HIỂU RỘNG**
- Học có thể lên tới **THẠC SỸ – TIẾN SỸ – GIÁO SƯ**
- Người **PHÁT MẠNH ngành VĂN, NGHỆ THUẬT**
- Hay được **MAY MẮN** trong công danh, học tập
- Có **ĐIỀU KIỆN HỌC HÀNH thực nghiệm tốt**
- **THỜI THẾ HẬU THUẪN**, người ngoài **GIÚP ĐỠ NHIỀU**`,
  },

  {
    id: 'luu-nien-xuong-khuc-khoi-viet-long-phuong',
    title: 'Lưu Niên Văn Tinh + Xương Khúc + Khôi Việt + Long Phượng - thủ khoa',
    sao: ['Lưu Niên Văn Tinh'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt', 'Long Trì', 'Phượng Các'],
    doUuTien: 85,
    tomTat: `🌟 **Lưu Niên Văn Tinh + Văn Xương + Văn Khúc + Thiên Khôi + Thiên Việt + Long
Trì + Phượng Các:**

🌟 **Đặc trưng:**
- Là người **VÔ CÙNG THÔNG MINH, XUẤT CHÚNG**
- "**HỌC MỘT HIỂU MƯỜI**"
- **ĐỖ THỦ KHOA**
- **GHI DANH BẢNG VÀNG**

→ Đây là **CÁCH CỤC ĐẸP NHẤT** cho con đường **KHOA CỬ**:
- Ba văn tinh (**Văn Xương, Văn Khúc, Lưu Niên Văn Tinh**) hội tụ
- + Khôi Việt (quý nhân) + Long Phượng (đôi cát tinh)
- → **VƯƠNG GIẢ HỌC THUẬT**`,
  },

  {
    id: 'luu-nien-thien-co-cu-mon',
    title: 'Lưu Niên Văn Tinh + Thiên Cơ + Cự Môn - chuyên môn sâu',
    sao: ['Lưu Niên Văn Tinh'],
    ketHop: ['Thiên Cơ', 'Cự Môn'],
    doUuTien: 75,
    tomTat: `🌟 **Lưu Niên Văn Tinh + Thiên Cơ + Cự Môn:**

🌟 **Đặc trưng:**
- **VÔ CÙNG THÔNG MINH**
- Có khả năng **TƯ DUY LOGIC TUYỆT VỜI**
- Học **VÔ CÙNG GIỎI**
- **CHUYÊN MÔN SÂU**

→ **Thiên Cơ** (mưu trí, biến hóa) + **Cự Môn** (lý luận sắc bén) + **Lưu Niên
Văn Tinh** (học vấn) = bộ **TRÍ TUỆ XUẤT CHÚNG** — hợp với:
- **NHÀ NGHIÊN CỨU**
- **CHUYÊN GIA**
- **GIÁO SƯ**
- **NHÀ KHOA HỌC**`,
  },

  {
    id: 'luu-nien-tai-phu-mau',
    title: 'Lưu Niên Văn Tinh tại Phụ Mẫu',
    sao: ['Lưu Niên Văn Tinh'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `🌟 **Lưu Niên Văn Tinh tại Phụ Mẫu:**
- Cha mẹ là người **CÓ HỌC THỨC, CÓ CHỮ NGHĨA, CÓ CHỨC DANH**
- Nếu không thì cũng có **TÀI NGHỆ KHÉO LÉO**
- Cha mẹ có **NHIỀU BẰNG CẤP**, học lên được cao
- Có thể là **THẠC SỸ, GIÁO SƯ, TIẾN SỸ**

⚡ **Đương số ÂM DƯƠNG THUẬN LÝ:**
- Sinh ra trong gia đình **GIA GIÁO, GIỎI GIANG**
- Tuổi trẻ thường có **ĐIỀU KIỆN HỌC TẬP TỐT**
- **THUẬN LỢI THI CỬ, THÀNH DANH**

⚡ **Khi đẻ đương số:**
Sự nghiệp học tập và công danh của cha mẹ dễ **THUẬN LỢI, PHÁT TRIỂN HƠN**.

⚡ **Đặc trưng hôn nhân:**
- Người dễ **KẾT HÔN MUỘN**
- Người hôn phối là người **CÓ ĐIỀU KIỆN, GIÀU CÓ**`,
  },

  {
    id: 'luu-nien-tai-phuc-duc',
    title: 'Lưu Niên Văn Tinh tại Phúc Đức',
    sao: ['Lưu Niên Văn Tinh'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `🌟 **Lưu Niên Văn Tinh tại Phúc Đức:**
- Được hưởng **PHÚC ĐỨC**, **GIA TĂNG TUỔI THỌ**, **SỐNG LÂU**
- Sinh ra trong dòng họ, gia đình có **TRI THỨC CAO**
- **TRUYỀN THỐNG HỌC TẬP NGHIÊN CỨU TỐT**
- Nhiều người **CÓ BẰNG CẤP**, đạt **KHOA BẢNG CAO**

⚡ **Đặc biệt:**
- Trong dòng họ dễ có **THẦN ĐỒNG** sinh ra
- Nhất là khi hội thêm **Văn Xương + Văn Khúc + Khôi Việt + Long Trì + Phượng
  Các**

🌟 **Đặc tính tâm linh:**
- Tổ tiên **MỒ YÊN MẢ ĐẸP**
- Dòng họ **PHÁT ĐẠT NGHIỆP VĂN**, nhiều người **ĐỖ ĐẠT**
- Trên mộ các cụ thường hay có **CÂU ĐỐI, CÂU THƠ**

🌟 **Hôn nhân:**
Gia đình người hôn phối là **GIA ĐÌNH GIA GIÁO**, cha mẹ là người có **HỌC THỨC,
NHIỀU BẰNG CẤP CAO**.`,
  },

  {
    id: 'luu-nien-tai-dien-trach',
    title: 'Lưu Niên Văn Tinh tại Điền Trạch - thư phòng',
    sao: ['Lưu Niên Văn Tinh'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `🌟 **Lưu Niên Văn Tinh tại Điền Trạch:**
- Gia tăng **NÉT ĐẸP** của nhà cửa, nơi ở
- Nhà thường **GỌN GÀNG, SẠCH SẼ**
- Có **NHIỀU SÁCH**
- Treo **NHIỀU BẰNG CẤP, GIẢI THƯỞNG**
- Nhà dễ có **THƯ PHÒNG, PHÒNG ĐỌC SÁCH RIÊNG**

🌟 **Tính nghệ thuật cao:**
- Nhiều **TRANH ẢNH, ĐỒ VẬT TRANG TRÍ ĐẸP ĐẼ**
- Hay treo **CÂU CHÂM NGÔN, TRIẾT LÝ** của vĩ nhân

🌟 **Khu vực nhà ở:**
- **DÂN TRÍ CAO**
- Nhiều người hàng xóm có **HỌC THỨC, VĂN HÓA, TÌNH CẢM**
- Dễ có **NHIỀU ĐỨA TRẺ THÔNG MINH, HỌC GIỎI** được sinh ra`,
  },

  {
    id: 'luu-nien-tai-quan-loc',
    title: 'Lưu Niên Văn Tinh tại Quan Lộc',
    sao: ['Lưu Niên Văn Tinh'],
    cung: ['Quan Lộc'],
    doUuTien: 80,
    tomTat: `🌟 **Lưu Niên Văn Tinh tại Quan Lộc:**
- Là người làm các nghề **ĐẶC BIỆT, ĐẶC SẮC** về:
  - **KHÉO LÉO CHÂN TAY**
  - **NGÔN NGỮ**
  - **THỦ CÔNG, MỸ NGHỆ, MỸ THUẬT**
  - **VĂN HỌC NGHỆ THUẬT**
- → **NỔI TIẾNG và PHÁT TÀI**

🌟 **Đặc trưng:**
- Người **HAM HỌC, THÍCH TÌM HIỂU**
- **NHIỀU BẰNG CẤP, KHEN THƯỞNG**
- **SỬ DỤNG ĐÚNG ngành học** vào nghề nghiệp
- Công việc có tính **NGHIÊN CỨU, TÌM HIỂU CAO**
- Có thể **HỌC THÊM BẰNG CẤP** để **THĂNG TIẾN**
- Hay được **CỬ ĐI HỌC THÊM CHUYÊN MÔN** bên ngoài

⚡ **Triết lý "Nhất nghệ tinh, nhất thân vinh":**
- Tài lộc phát sinh từ **CHÍNH NĂNG LỰC và GIÁ TRỊ TRI THỨC** đương số tạo ra
- Không phải do **MAY RỦI nhất thời**`,
  },

  {
    id: 'luu-nien-tai-no-boc',
    title: 'Lưu Niên Văn Tinh tại Nô Bộc',
    sao: ['Lưu Niên Văn Tinh'],
    cung: ['Nô Bộc'],
    doUuTien: 72,
    tomTat: `🌟 **Lưu Niên Văn Tinh tại Nô Bộc:**
- Bè bạn, người giúp việc là người có **CHỮ NGHĨA**, hoặc có **TÀI NGHỆ ĐẶC BIỆT**
- Nhưng **HAM VUI**

🌟 **Đặc trưng:**
- Bạn bè có **HỌC THỨC, HAM HỌC**
- **NHIỀU BẰNG CẤP**
- Có thể **GIÚP ĐỠ** mình trong công việc và học tập`,
  },

  {
    id: 'luu-nien-no-boc-menh-luong-tuong',
    title: 'Lưu Niên Văn Tinh Nô + Thiên Lương/Tướng tại Mệnh - thầy giáo',
    sao: ['Lưu Niên Văn Tinh'],
    cung: ['Nô Bộc', 'Mệnh'],
    ketHop: ['Thiên Lương', 'Thiên Tướng'],
    doUuTien: 67,
    tomTat: `🌟 **Lưu Niên Văn Tinh tại Nô Bộc + Thiên Lương / Thiên Tướng tại Mệnh:**
- Dễ làm **THẦY GIÁO MÁT TAY**
- Có **NHIỀU HỌC TRÒ HIỂN ĐẠT, XUẤT SẮC**`,
  },

  {
    id: 'luu-nien-tai-thien-di',
    title: 'Lưu Niên Văn Tinh tại Thiên Di - du học',
    sao: ['Lưu Niên Văn Tinh'],
    cung: ['Thiên Di'],
    doUuTien: 78,
    tomTat: `🌟 **Lưu Niên Văn Tinh tại Thiên Di:**
- Người ra ngoài, đi xa thường hay gặp **MAY MẮN, THUẬN LỢI**
- Trong **CÔNG DANH, THI CỬ**
- Được trao tặng **NHIỀU BẰNG CẤP, KHEN THƯỞNG**

🌟 **Đặc biệt:**
- Người **THUẬN LỢI** trong việc **ĐI XA**
- Có thể **ĐI HỌC XA, ĐI DU HỌC**
- Hay tới những nơi có **HỌC THỨC, VĂN HÓA CAO, NGHỆ THUẬT**
- Ra ngoài học tập **NHIỀU THỨ**, có người **CHỈ BẢO, HƯỚNG DẪN, KÈM CẶP**

🌟 **Quý nhân:**
- Hay được các **QUÝ NHÂN PHÙ TRỢ**
- Gặp được **NHIỀU NGƯỜI có KIẾN THỨC UYÊN THÂM, TÀI GIỎI** giúp đỡ, giảng dạy`,
  },

  {
    id: 'luu-nien-tai-tat-ach',
    title: 'Lưu Niên Văn Tinh tại Tật Ách',
    sao: ['Lưu Niên Văn Tinh'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `🌟 **Lưu Niên Văn Tinh tại Tật Ách:**

⚠️ **Bệnh đặc trưng:**
- Có ngũ hành thuộc **KIM** → bệnh dễ liên quan tới **PHẾ PHỔI, VÒM HỌNG**

🌟 **Sao GIẢI - như Lộc Tồn thứ 2:**
- Có tính chất **HÓA GIẢI bệnh tật, tai họa NHẸ**
- Phần lớn được sử dụng bằng **KIẾN THỨC, KHOA HỌC KỸ THUẬT** để hóa giải
- Ốm đau thì **GẶP BÁC SỸ GIỎI**
- Gặp tai họa thì có **ĐỦ TÀI TRÍ SÁNG SUỐT** để giải quyết

⚡ **Đặc trưng:**
- Trong những hoàn cảnh **KHÓ KHĂN, ỐM ĐAU, BỆNH TẬT** thường:
  - **TÌM HIỂU, HỌC TẬP** được **NHỮNG CÁI MỚI**
  - **NHANH HƠN, THÔNG SUỐT HƠN**
- Biến thời gian **DƯỠNG BỆNH** thành **CƠ HỘI NGHIÊN CỨU**

⚡ **Khi mất đi:**
- Có **BÀI ĐIẾU VĂN TƯỞNG NHỚ vô cùng HAY và XÚC ĐỘNG**
- Được **TRUY TẶNG nhiều BẰNG KHEN, GIẤY KHEN**`,
  },

  {
    id: 'luu-nien-tai-tai-bach',
    title: 'Lưu Niên Văn Tinh tại Tài Bạch',
    sao: ['Lưu Niên Văn Tinh'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `🌟 **Lưu Niên Văn Tinh tại Tài Bạch:**
- Là người **TÌM HIỂU NGHIÊN CỨU SÂU** về **TÀI CHÍNH**
- Kiếm được tiền nhờ **HỌC TẬP NGHIÊN CỨU, HỌC VẤN**
- Có thể sử dụng **BẰNG CẤP, NGÀNH NGHỀ MÌNH HỌC** để **KIẾM TIỀN**

🌟 **Đặc trưng:**
- Hay đạt được **HỌC BỔNG, QUỸ KHUYẾN HỌC**
- Tạo điều kiện cho **HỌC TẬP**
- Hay **BỎ NHIỀU TIỀN** cho việc **HỌC TẬP, NGHIÊN CỨU, ĐI DU HỌC**
- Sau dễ **KIẾM ĐƯỢC TIỀN nhờ KIẾN THỨC** đó

⚡ **Triết lý:**
- Đầu tư cho **TRÍ TUỆ** chính là **NỀN MÓNG VỮNG CHẮC NHẤT** để phát triển
  tài lộc bền vững`,
  },

  {
    id: 'luu-nien-tai-tu-tuc',
    title: 'Lưu Niên Văn Tinh tại Tử Tức - quý tử',
    sao: ['Lưu Niên Văn Tinh'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `🌟 **Lưu Niên Văn Tinh tại Tử Tức:**
- Con cái **HỌC HÀNH TỐT**
- **GIA TĂNG SỐ LƯỢNG về CON**

🌟 **Tính cách con:**
- **THÔNG MINH, CHĂM HỌC**
- **HAM TÌM TÒI**
- Có đứa thích theo **NGHỆ THUẬT**

🌟 **Quý tử:**
- Dễ **SINH QUÝ TỬ**
- Con cái có **NHIỀU BẰNG CẤP, HỌC VỊ**
- Có thể **HỌC LÊN CAO**
- Đạt **NHIỀU THÀNH TÍCH, CHỨC DANH** trong cuộc đời`,
  },

  {
    id: 'luu-nien-tai-phu-the',
    title: 'Lưu Niên Văn Tinh tại Phu Thê',
    sao: ['Lưu Niên Văn Tinh'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `🌟 **Lưu Niên Văn Tinh tại Phu Thê:**
- Vợ chồng **DANH GIÁ**, có **HỌC THỨC**
- **HÒA THUẬN, ĐẸP ĐÔI**

🌟 **Người hôn phối:**
- **HAM HỌC TẬP**
- Có **NHIỀU BẰNG CẤP**
- Học lên được **CAO**
- Có **THIÊN HƯỚNG NGHỆ THUẬT TỐT**
- Có **CHUYÊN MÔN SÂU**
- Thuận lợi trong con đường **CÔNG DANH, KHOA BẢNG**
- Đạt **NHIỀU THÀNH TỰU**

🌟 Đời sống hôn nhân **HÒA THUẬN, ĐỒNG ĐIỆU về TRÍ TUỆ** — vợ chồng cùng chí
hướng học tập.`,
  },

  {
    id: 'luu-nien-tai-huynh-de',
    title: 'Lưu Niên Văn Tinh tại Huynh Đệ',
    sao: ['Lưu Niên Văn Tinh'],
    cung: ['Huynh Đệ'],
    doUuTien: 72,
    tomTat: `🌟 **Lưu Niên Văn Tinh tại Huynh Đệ:**
- Anh chị em đều là người có **HỌC VẤN, HỌC CAO**
- **NHIỀU BẰNG CẤP, NHIỀU THÀNH TỰU**

🌟 **Đặc trưng:**
- Người tuổi trẻ sống trong **MÔI TRƯỜNG có ANH CHỊ EM GIỎI**
- Dễ được **HỖ TRỢ, KÈM CẶP**
- Giúp **TIẾP THU KIẾN THỨC, HỌC TẬP THUẬN LỢI HƠN**

→ Như "**gần đèn thì sáng**" — đương số được hưởng lợi từ môi trường gia đình
trí thức.`,
  },

  {
    id: 'luu-nien-vao-han',
    title: 'Lưu Niên Văn Tinh vào hạn',
    sao: ['Lưu Niên Văn Tinh'],
    doUuTien: 60,
    tomTat: `🌟 **Lưu Niên Văn Tinh vào hạn:**

🌟 **Đặc trưng vận hạn:**
- Hạn thiên về **TÌM HIỂU, HỌC TẬP** thêm **KIẾN THỨC MỚI**
- Hạn dễ **ĐI HỌC THÊM** cái gì đó mới
- Hoặc **ĐI DU HỌC**
- Nếu không thì đơn giản chỉ là giai đoạn **MUA THÊM SÁCH VỞ về đọc**
- Đầu óc **THÔNG SUỐT** và **DỄ TIẾP THU HƠN**

🌟 **Quý nhân:**
- Dễ có **QUÝ NHÂN PHÙ TRỢ**
- Có người **BẢO BAN HỖ TRỢ, GIÚP ĐỠ**
- Khiến cho **KIẾN THỨC, TRÍ TUỆ** được **MỞ MANG, PHÁT TRIỂN HƠN**

🌟 **+ Văn Xương + Văn Khúc + Khôi Việt + Long Phượng:**
- Dễ **ĐỖ THỦ KHOA, GHI DANH BẢNG VÀNG**
- **HỌC LÊN GIÁO SƯ, TIẾN SỸ**
- Đạt **NHIỀU GIẢI THƯỞNG CAO** về học tập, nghiên cứu

→ Đặc biệt tốt cho **học sinh, sinh viên, người nghiên cứu** vào năm hạn này.`,
  },

  {
    id: 'luu-nien-loi-khuyen',
    title: 'Lời khuyên cho người Lưu Niên Văn Tinh',
    sao: ['Lưu Niên Văn Tinh'],
    doUuTien: 35,
    tomTat: `💡 **Lưu Niên Văn Tinh là ngôi sao phản ánh rõ nét VAI TRÒ CỦA TRI THỨC** trong
từng giai đoạn cuộc đời.

🌟 **Sức mạnh:**
- **HỌC VẤN cao**
- **THÔNG MINH XUẤT CHÚNG**
- **KHOA BẢNG, KHEN THƯỞNG**
- Sao **GIẢI**, hóa giải tai ương nhỏ

💡 **Bí quyết phát huy Lưu Niên Văn Tinh:**
- Khai mở **TƯ DUY**
- Nâng cao **HỌC VẤN**
- Theo đuổi con đường **CÔNG DANH gắn với TRÍ TUỆ**
- **ĐẦU TƯ cho HỌC TẬP** — học là tài sản bền vững nhất
- **NGHIÊN CỨU CHUYÊN SÂU** thay vì học rộng nông
- Đi với **Văn Xương + Văn Khúc** thành **TAM VĂN TINH** — nhân lên sức mạnh
- **CHUYÊN MÔN HÓA** — biến tri thức thành nghề nghiệp

→ Khi được **kích hoạt đúng thời điểm và vị trí**, Lưu Niên Văn Tinh giúp **KHAI
MỞ TƯ DUY, NÂNG CAO HỌC VẤN** cho con đường **CÔNG DANH gắn với TRÍ TUỆ**.`,
  },
];
