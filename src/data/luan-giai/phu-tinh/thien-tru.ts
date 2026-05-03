import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THIÊN TRÙ - Thổ, Cát Tinh (Phúc Tinh + Lộc Tinh).
 *
 * Thuộc bộ TỨ LỘC: Thiên Trù + Lộc Tồn + Hóa Lộc + Lưu Niên Văn Tinh.
 *
 * Đặc tính: PHÚC THỰC, LỘC ĂN UỐNG, NO ĐỦ, HƯỞNG THỤ, SUNG TÚC VẬT CHẤT.
 * Người có Thiên Trù giỏi NẤU ĂN, SÀNH ĂN, BIẾT HƯỞNG THỤ.
 * Hình tượng: "Có Thiên Trù trong nhà lúc nào cũng có nồi cơm nghi ngút khói".
 *
 * Hợp ngành: ẨM THỰC, NHÀ HÀNG, KHÁCH SẠN, KINH DOANH HÀNG TIÊU DÙNG.
 */
export const luanGiai_ThienTru: DoanLuanGiai[] = [
  {
    id: 'thien-tru-tinh-chat-chung',
    title: 'Thiên Trù - Đặc tính chung',
    sao: ['Thiên Trù'],
    doUuTien: 32,
    tomTat: `**Thiên Trù** — phụ tinh **CÁT TINH** chủ về **PHÚC THỰC, LỘC ĂN UỐNG**.

**Ngũ hành:** **Thổ**.

**Hóa khí:** **PHÚC TINH + LỘC TINH**.

**Vị thế:**
- Thuộc **BỘ TỨ LỘC**:
  - **Thiên Trù** + **Lộc Tồn** + **Hóa Lộc** + **Lưu Niên Văn Tinh**

**Đặc tính:**
- **PHÚC THỰC, NO ĐỦ, HƯỞNG THỤ**
- **SUNG TÚC VẬT CHẤT**
- Khả năng **QUẢN LÝ, TÍCH TRỮ LƯƠNG THỰC** của cải

**Hình tượng:**
- "**CÓ THIÊN TRÙ, trong nhà lúc nào cũng có NỒI CƠM NGHI NGÚT KHÓI**"
- Đương số "**ĂN TRẮNG MẶC TRƠN**"
- Cuộc sống **ĐỦ ĐẦY**
- Ít khi phải lo chuyện **CƠM ÁO GẠO TIỀN**

**Tác động chính:**
- **GIỎI NẤU ĂN, SÀNH ĂN**
- Biết **HƯỞNG THỤ**
- Cuộc sống **SUNG TÚC**

**Sự nghiệp:**
- Phù hợp **ẨM THỰC, NHÀ HÀNG, KHÁCH SẠN**
- **KINH DOANH HÀNG TIÊU DÙNG**

**Duyên vận:**
- Hôn nhân **HÒA THUẬN**
- Vợ chồng dễ gắn kết qua **BỮA CƠM GIA ĐÌNH** hoặc **DU LỊCH**

**Phúc thọ:**
- Sức khỏe **ỔN ĐỊNH, ÍT BỆNH VẶT**
- Ốm đau **NHANH HỒI PHỤC** nhờ chế độ ăn uống hợp lý`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CUNG MỆNH
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-tru-menh-dam-dang-sanh-an',
    title: 'Thiên Trù tại Mệnh - Đảm đang sành ăn nấu giỏi',
    sao: ['Thiên Trù'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `**Thiên Trù tại Mệnh** — người **ĐẢM ĐANG, SÀNH ĂN, NẤU ĂN GIỎI**.

**Cơ địa:**
- **CƠ ĐỊA KHỎE MẠNH**
- **DUNG NHAN TƯƠI TẮN**

**Khả năng:**
- **NẤU ĂN NGON**
- **SÀNH ĂN**, biết thưởng thức ẩm thực
- Khéo léo **CHĂM SÓC GIA ĐÌNH** và người khác

**Tính cách:**
- **VUI VẺ, HÀO SẢNG**
- Biết **TẬN HƯỞNG CUỘC SỐNG**
- Có **NÉT DUYÊN NGẦM**, mọi người **THOẢI MÁI** khi tiếp xúc

**Sự nghiệp:**
- Thích kết bạn qua **BÀN ĂN, CHÉN RƯỢU**
- Phù hợp **ẨM THỰC, DỊCH VỤ, DU LỊCH**`,
  },

  {
    id: 'thien-tru-menh-loc-ton-hoa-loc-ta-huu',
    title: 'Thiên Trù + Hóa Lộc/Lộc Tồn/Tả Phù/Hữu Bật tại Mệnh - Trời ban phúc lộc',
    sao: ['Thiên Trù'],
    cung: ['Mệnh'],
    ketHop: ['Hóa Lộc', 'Lộc Tồn', 'Tả Phù', 'Hữu Bật'],
    doUuTien: 70,
    tomTat: `**Thiên Trù + Hóa Lộc - Lộc Tồn + Tả Hữu tại Mệnh** — **TRỜI BAN PHÚC LỘC**.

**Đặc trưng:**
- Trời ban **PHÚC LỘC ĂN UỐNG ĐẦY ĐỦ**
- **ÍT KHI THIẾU THỐN**
- Sự nghiệp **RỘNG MỞ**
- Được **QUÝ NHÂN NÂNG ĐỠ**`,
  },

  {
    id: 'thien-tru-menh-hoa-ky-khong-kiep-huong-thu-qua-da',
    title: 'Thiên Trù + Hóa Kỵ/Địa Không/Địa Kiếp tại Mệnh - Hưởng thụ quá đà',
    sao: ['Thiên Trù'],
    cung: ['Mệnh'],
    ketHop: ['Hóa Kỵ', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 60,
    tomTat: `**Thiên Trù + Hóa Kỵ + Địa Không Địa Kiếp tại Mệnh** — sa vào **HƯỞNG THỤ
THÁI QUÁ**.

**Cảnh báo:**
- **HƯỞNG THỤ THÁI QUÁ**
- Lâm cảnh **NỢ NẦN**
- Sức khỏe **XUỐNG DỐC** vì **TIỆC TÙNG**`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC CUNG KHÁC
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-tru-phu-mau-cha-me-kha-gia',
    title: 'Thiên Trù tại Phụ Mẫu - Cha mẹ khá giả vun vén',
    sao: ['Thiên Trù'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Thiên Trù tại Phụ Mẫu** — cha mẹ **KHÁ GIẢ, GIỎI VUN VÉN**.

**Đặc trưng:**
- Cha mẹ điều kiện kinh tế **KHÁ GIẢ**
- "**TÍCH CỐC PHÒNG CƠ**"
- Đương số từ nhỏ được **CƠM NO ÁO ẤM**, không chịu thiếu thốn
- Cha mẹ có **KHIẾU NẤU NƯỚNG**, thích **THƯỞNG THỨC MÓN NGON**
- Bữa cơm gia đình **TƯƠM TẤT, ĐỦ ĐẦY**`,
  },

  {
    id: 'thien-tru-phu-mau-thien-luong-ta-huu-cha-me-tho',
    title: 'Thiên Trù + Thiên Lương/Tả Phù/Hữu Bật tại Phụ Mẫu - Cha mẹ sống thọ',
    sao: ['Thiên Trù'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Thiên Lương', 'Tả Phù', 'Hữu Bật'],
    doUuTien: 68,
    tomTat: `**Thiên Trù + Thiên Lương + Tả Hữu tại Phụ Mẫu** — cha mẹ **SUNG TÚC + SỐNG
THỌ**.

**Đặc trưng:**
- Cha mẹ **SUNG TÚC**
- **SỐNG THỌ, KHỎE MẠNH**
- Giỏi **CHĂM SÓC GIA ĐÌNH**`,
  },

  {
    id: 'thien-tru-phu-mau-hoa-ky-khong-kiep-bien-co-tieu-hoa',
    title: 'Thiên Trù + Hóa Kỵ/Địa Kiếp/Địa Không tại Phụ Mẫu - Cha mẹ bệnh tiêu hóa',
    sao: ['Thiên Trù'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Hóa Kỵ', 'Địa Kiếp', 'Địa Không'],
    doUuTien: 60,
    tomTat: `**Thiên Trù + Hóa Kỵ + Địa Không Địa Kiếp tại Phụ Mẫu** — cha mẹ **BIẾN CỐ
TÀI CHÍNH** hoặc **BỆNH TIÊU HÓA**.

**Cảnh báo:**
- Gia đình gặp **BIẾN CỐ TÀI CHÍNH**
- Hoặc cha mẹ **DỄ MẮC BỆNH** liên quan **TIÊU HÓA**`,
  },

  {
    id: 'thien-tru-phuc-duc-dong-toc-an-uong-sung-tuc',
    title: 'Thiên Trù tại Phúc Đức - Dòng họ phúc ăn uống',
    sao: ['Thiên Trù'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `**Thiên Trù tại Phúc Đức** — dòng họ **PHÚC PHẦN ĂN UỐNG SUNG TÚC**.

**Đặc trưng:**
- Dòng họ **ÍT KHI THIẾU THỐN**
- Hay **TỔ CHỨC TỤ HỌP**
- Tổ tiên từng làm nghề **BUÔN BÁN, ẨM THỰC** hoặc **TRỒNG TRỌT CHĂN NUÔI**
- Đời con cháu được **HƯỞNG LỘC**
- Làm ăn **THUẬN LỢI**

**Hội Long Trì + Phượng Các + Văn Xương + Văn Khúc:**
- Phúc phần **CÀNG DÀY**
- Gia đình **ĐÔNG VUI HÒA THUẬN**

**Gặp Địa Không, Địa Kiếp, Hóa Kỵ:**
- Trong họ dễ có người **ĂN CHƠI HOANG PHÍ**
- **HAO TÁN TỔ NGHIỆP**`,
  },

  {
    id: 'thien-tru-thien-di-may-man-tha-huong',
    title: 'Thiên Trù tại Thiên Di - Tha hương gặp may',
    sao: ['Thiên Trù'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Thiên Trù tại Thiên Di** — xuất ngoại / làm xa **GẶP MAY**.

**Đặc trưng:**
- Khi xuất ngoại / làm ăn xa **GẶP MAY MẮN**
- Dễ **KẾT GIAO BẠN BÈ** qua bữa tiệc
- Mối quan hệ: **SINH TÀI LỘC**
- Quen biết **NHIỀU NGƯỜI CÓ VỊ THẾ**
- Đi đâu cũng được **GIÚP ĐỠ, MỜI ĂN UỐNG**

**Cảnh báo - đi cùng sát tinh:**
- **HAO TÀI** vì ăn chơi
- Bị **LỪA** khi đi xa`,
  },

  {
    id: 'thien-tru-quan-loc-am-thuc-buon-ban',
    title: 'Thiên Trù tại Quan Lộc - Hợp ẩm thực buôn bán',
    sao: ['Thiên Trù'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `**Thiên Trù tại Quan Lộc** — hợp **ẨM THỰC, NHÀ HÀNG, HÀNG TIÊU DÙNG**.

**Đặc trưng:**
- Hợp ngành **ĂN UỐNG, NHÀ HÀNG**
- **KINH DOANH HÀNG TIÊU DÙNG**
- "**HỢP VÍA**" với nghề
- Có **DUYÊN BUÔN BÁN**
- Biết **CHIỀU LÒNG KHÁCH HÀNG**
- **KIÊN TRÌ, TỈ MỈ, LÀM ĐÂU CHẮC ĐÓ**
- Công việc **HANH THÔNG**, "**TIỀN VÀO NHƯ NƯỚC**"

**Cảnh báo - Hóa Kỵ + Địa Không Địa Kiếp:**
- Dễ **THẤT BẠI** do **QUẢN LÝ KÉM**
- **TIÊU HAO QUÁ NHIỀU VỐN**`,
  },

  {
    id: 'thien-tru-no-boc-ban-be-tiec-tung',
    title: 'Thiên Trù tại Nô Bộc - Bạn bè thân thiện qua tiệc tùng',
    sao: ['Thiên Trù'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Thiên Trù tại Nô Bộc** — bạn bè **THÂN THIỆN, DỄ MẾN**.

**Đặc trưng:**
- Bạn bè / đồng nghiệp / nhân viên **THÂN THIỆN, DỄ MẾN**
- Giúp đỡ trong công việc + chia sẻ **NIỀM VUI ẨM THỰC**
- Có **BUỔI TỤ HỌP ĐẦM ẤM**
- Mở rộng quan hệ qua **TIỆC TÙNG**

**Đi cùng Thiên Phúc, Tả Phù, Hữu Bật:**
- Cơ hội **KINH DOANH** đến từ **BỮA ĂN, BUỔI TIỆC**

**Kết hợp Địa Kiếp, Kình Dương, Hóa Kỵ:**
- Bị bạn bè **LỢI DỤNG**
- "**ĂN CHÁO ĐÁ BÁT**"`,
  },

  {
    id: 'thien-tru-dien-trach-nha-cua-am-cung',
    title: 'Thiên Trù tại Điền Trạch - Nhà cửa ấm cúng bếp đỏ lửa',
    sao: ['Thiên Trù'],
    cung: ['Điền Trạch'],
    doUuTien: 78,
    tomTat: `**Thiên Trù tại Điền Trạch** — gia đình **ĐẤT ĐAI, VƯỜN TƯỢC, NHÀ CỬA KHANG
TRANG**.

**Đặc trưng:**
- **ĐẤT ĐAI, VƯỜN TƯỢC**
- **NHÀ CỬA KHANG TRANG**
- **BẾP NÚC LUÔN ĐỎ LỬA**
- Cuộc sống gia đình **ẤM CÚNG, SUNG TÚC**
- "**CỦA ĂN CỦA ĐỂ**" dồi dào

**Hội Tả Phù + Hữu Bật + Thiên Phúc:**
- Làm **NÔNG NGHIỆP** hay **KINH DOANH THỰC PHẨM** dễ phát đạt

**Cảnh báo - Kình Dương + Đà La:**
- Phải **TỐN TIỀN SỬA SANG NHÀ CỬA** liên tục
- **MUA SẮM QUÁ TAY**`,
  },

  {
    id: 'thien-tru-tat-ach-suc-khoe-on-dinh',
    title: 'Thiên Trù tại Tật Ách - Sức khỏe ổn định ít bệnh vặt',
    sao: ['Thiên Trù'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `**Thiên Trù tại Tật Ách** — sức khỏe **ỔN ĐỊNH, ÍT BỆNH VẶT**.

**Đặc trưng:**
- Sức khỏe **ỔN ĐỊNH, ÍT BỆNH VẶT**
- Ốm đau **NHANH HỒI PHỤC** nhờ ăn uống hợp lý

**Cảnh báo - "BỆNH TỪ MIỆNG MÀ VÀO":**
- Đam mê ẩm thực dễ **ĂN UỐNG VÔ ĐỘ**
- Mắc bệnh **TIÊU HÓA, GAN, DẠ DÀY**

**Bệnh nhẹ dễ chữa:**
- Gặp **THIÊN LƯƠNG, THIÊN PHÚC**

**Bệnh hóa nặng:**
- Gặp **KÌNH DƯƠNG, ĐÀ LA, HÓA KỴ**

**Lời khuyên:**
- Ăn uống **KHOA HỌC**, sinh hoạt **ĐIỀU ĐỘ**`,
  },

  {
    id: 'thien-tru-tai-bach-nguon-tai-chinh-on-dinh',
    title: 'Thiên Trù tại Tài Bạch - Nguồn tài chính ổn định',
    sao: ['Thiên Trù'],
    cung: ['Tài Bạch'],
    doUuTien: 78,
    tomTat: `**Thiên Trù tại Tài Bạch** — nguồn tài chính **ỔN ĐỊNH, ÍT TÚNG THIẾU**.

**Đặc trưng:**
- Tiền bạc đến từ:
  - **KINH DOANH THỰC PHẨM, NÔNG SẢN**
  - **DỊCH VỤ ĂN UỐNG**
- Biết chi tiêu hợp lý: "**CỦA ĂN CỦA ĐỂ**"
- Cuộc sống **THỊNH VƯỢNG, PHÁT ĐẠT**

**Cảnh báo - Kình Dương + Hóa Kỵ:**
- Tài chính dễ **THẤT THOÁT**
- Do **ĂN CHƠI, TIÊU XÀI QUÁ ĐÀ**`,
  },

  {
    id: 'thien-tru-phu-the-vo-chong-hoa-thuan',
    title: 'Thiên Trù tại Phu Thê - Vợ chồng hòa thuận qua bữa cơm',
    sao: ['Thiên Trù'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `**Thiên Trù tại Phu Thê** — đời sống hôn nhân **HÒA THUẬN**.

**Đặc trưng:**
- Vợ chồng dễ gắn kết qua **BỮA CƠM GIA ĐÌNH**
- Biết **CHĂM SÓC NHAU** từ điều nhỏ nhặt

**Đi cùng Văn Xương, Văn Khúc, Lộc Tồn:**
- Bạn đời có **TAY NGHỀ NẤU NƯỚNG**
- **CHI TIÊU HỢP LÝ**
- Cuộc sống thêm **VIÊN MÃN**

**Cảnh báo - Đào Hoa + Hóa Kỵ + Hồng Loan:**
- **TỐN TIỀN** vì ăn chơi, tiệc tùng
- Hoặc vì **NGƯỜI THỨ BA**`,
  },

  {
    id: 'thien-tru-huynh-de-anh-em-am-cum',
    title: 'Thiên Trù tại Huynh Đệ - Anh em hòa thuận thích tiệc tùng',
    sao: ['Thiên Trù'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Thiên Trù tại Huynh Đệ** — anh chị em **HÒA THUẬN, THÍCH TIỆC TÙNG**.

**Đặc trưng:**
- Anh chị em **HÒA THUẬN**
- Gắn kết qua **BỮA CƠM ĐẦM ẤM**
- Giúp đỡ nhau về **KINH TẾ**
- Cùng làm ăn trong lĩnh vực **THỰC PHẨM, ĂN UỐNG**

**Cảnh báo - Địa Kiếp + Kình Dương:**
- Anh em **BẤT HÒA**
- **TRANH CHẤP TIỀN BẠC**`,
  },

  {
    id: 'thien-tru-tu-tuc-bep-nha-troi',
    title: 'Thiên Trù tại Tử Tức - Bếp nhà trời con đam mê ẩm thực',
    sao: ['Thiên Trù'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Thiên Trù tại Tử Tức** — mệnh danh "**BẾP NHÀ TRỜI**".

**Đặc trưng:**
- Con cái có **NIỀM ĐAM MÊ ẨM THỰC**
- **THÍCH ĂN NGON, GIỎI NẤU NƯỚNG**
- **KHÉO ĂN KHÉO NÓI**
- **NGOAN NGOÃN, HIẾU THẢO**
- Biết **HƯỞNG THỤ CUỘC SỐNG**

**Cha mẹ:**
- **CHI TIÊU NHIỀU CHO CON**
- Nhận lại **NIỀM VUI, PHÚC ĐỨC**

**Cảnh báo - Hóa Kỵ + Địa Kiếp:**
- Con cái **ĂN CHƠI, TIÊU XÀI NHIỀU**
- **KHÔNG BIẾT GIỮ CỦA**
- Gây **HAO TÁN** cho cha mẹ`,
  },
];
