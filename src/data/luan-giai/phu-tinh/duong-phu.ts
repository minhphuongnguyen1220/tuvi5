import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO ĐƯỜNG PHÙ - Mộc, Cát Tinh + Quý Tinh.
 *
 * Đặc tính: SỰ THANH TỊNH, CAO SANG, có lợi cho CÔNG DANH - ĐIỀN SẢN - TÀI LỘC.
 * Hình tượng: "LÁ BÙA MAY MẮN" cho công danh và tài lộc.
 *
 * Khả năng CỨU GIẢI: dù là phụ tinh nhưng có khả năng XOAY CHUYỂN VẬN MỆNH,
 * BIẾN NGUY THÀNH AN, gia tăng MAY MẮN và TÀI LỘC.
 *
 * Hợp NGHỀ: trí óc, quản lý, hình ảnh chỉn chu, công quyền, chính phủ.
 */
export const luanGiai_DuongPhu: DoanLuanGiai[] = [
  {
    id: 'duong-phu-tinh-chat-chung',
    title: 'Đường Phù - Đặc tính chung',
    sao: ['Đường Phù'],
    doUuTien: 32,
    tomTat: `**Đường Phù** — phụ tinh **CÁT TINH + QUÝ TINH**, ví như "**LÁ BÙA MAY MẮN**"
cho công danh và tài lộc.

**Ngũ hành:** **Mộc**.

**Hóa khí:** **Cát Tinh + Quý Tinh**.

**Đặc tính:**
- **THANH TỊNH, CAO SANG**
- Có **TRÍ TUỆ**
- **CÔNG DANH và SỰ NGHIỆP TRIỂN VỌNG**
- Có lợi cho **CÔNG DANH - ĐIỀN SẢN - TÀI LỘC**

**Khả năng cứu giải:**
- Dù là **PHỤ TINH** nhưng có khả năng **CỨU GIẢI**
- **XOAY CHUYỂN VẬN MỆNH**, **BIẾN NGUY THÀNH AN**
- Gia tăng **MAY MẮN, TÀI LỘC**

**Sự nghiệp:**
- Hợp công việc **TRÍ ÓC, QUẢN LÝ**
- Đòi hỏi **HÌNH ẢNH CHỈN CHU**
- Phù hợp **CÔNG QUYỀN, CHÍNH PHỦ**

**Duyên vận:**
- Vợ chồng **GẮN KẾT CHẶT CHẼ**
- Bạn đời **NĂNG LỰC + PHẨM CHẤT TỐT**, được nhiều người **NỂ TRỌNG**

**Phúc thọ:**
- **GIẢM TÍNH TÁC HỌA của BỆNH TẬT**
- Tránh được **NHIỀU BỆNH CÙNG LÚC**
- Ốm đau ắt **CÓ CÁCH CHỮA**`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CUNG MỆNH
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'duong-phu-menh-danh-vi-hoc-rong',
    title: 'Đường Phù tại Mệnh - Danh vị học rộng hiểu biết',
    sao: ['Đường Phù'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `**Đường Phù tại Mệnh** — chủ về **DANH VỊ, HỌC RỘNG, HIỂU BIẾT**.

**Phong thái:**
- **ĐẠO MẠO, ĐĨNH NGỘ**
- **PHONG THÁI UY NGHI, ĐƯỜNG HOÀNG, BỆ VỆ**

**Học hành - khoa cử:**
- Quý tinh: có lợi cho **HỌC HÀNH, KHOA CỬ**
- **THÔNG MINH, HỌC RỘNG**
- Có **KHOA BẢNG, BẰNG CẤP**
- Làm trong **CƠ QUAN, ĐƠN VỊ, TỔ CHỨC**: cơ hội **THĂNG TIẾN, NẮM CHỨC
  VỤ CAO**

**Tâm lý:**
- Thích công việc **NHẸ NHÀNG, NHÀN HẠ**
- Không muốn **LAO ĐỘNG VẤT VẢ**
- Muốn **KIẾM TIỀN NHANH, LÀM GIÀU MỘT SỚM MỘT CHIỀU**`,
  },

  {
    id: 'duong-phu-menh-sat-bai-tinh-lieu-linh',
    title: 'Đường Phù + sát bại tinh tại Mệnh - Liều lĩnh gian trá',
    sao: ['Đường Phù'],
    cung: ['Mệnh'],
    ketHop: ['Kình Dương', 'Đà La', 'Địa Không', 'Địa Kiếp', 'Hóa Kỵ', 'Thiên Hình'],
    doUuTien: 60,
    tomTat: `**Đường Phù + sát bại tinh tại Mệnh** — trở thành **LIỀU LĨNH, GIAN TRÁ**.

**Cảnh báo:**
- Vì muốn **KIẾM TIỀN NHANH**
- Trở thành người **LIỀU LĨNH, GIAN TRÁ**
- Làm việc **BẤT NHÂN, PHI NGHĨA**
- Đạt mục đích **NHANH CHÓNG** bằng mọi giá`,
  },

  {
    id: 'duong-phu-menh-bach-ho-lao-ly',
    title: 'Đường Phù + Bạch Hổ tại Mệnh - Dính lao lý',
    sao: ['Đường Phù'],
    cung: ['Mệnh'],
    ketHop: ['Bạch Hổ'],
    doUuTien: 65,
    tomTat: `**Đường Phù + Bạch Hổ đồng cung tại Mệnh** — nguy cơ **LAO LÝ**.

**Cảnh báo:**
- Nguy cơ **DÍNH VÀO LAO LÝ**
- Thậm chí bị **BẮT GIAM, XÉT XỬ, KẾT ÁN**`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC CUNG KHÁC
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'duong-phu-phu-mau-cha-me-thanh-cao',
    title: 'Đường Phù tại Phụ Mẫu - Cha mẹ cốt cách thanh cao',
    sao: ['Đường Phù'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Đường Phù tại Phụ Mẫu** — cha mẹ **CỐT CÁCH THANH CAO, QUÝ PHÁI**.

**Đặc trưng:**
- Cha mẹ **CỐT CÁCH THANH CAO, QUÝ PHÁI**
- **HIỀN LÀNH**, thích **THANH NHÀN**

**Hội nhiều cát tinh:**
- Cha mẹ là **QUAN CHỨC**
- Thuộc giới **QUÝ TỘC, GIÀU SANG**
- **KINH TẾ VỮNG VÀNG**

**Đáng lưu ý - đi cùng Địa Không, sao Bệnh, Bệnh Phù:**
- Cha mẹ mắc bệnh **CHUYỂN HÓA, TIỂU ĐƯỜNG**`,
  },

  {
    id: 'duong-phu-phuc-duc-gia-toc-vung-vang',
    title: 'Đường Phù tại Phúc Đức - Gia tộc nền tảng vững',
    sao: ['Đường Phù'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `**Đường Phù tại Phúc Đức** — gia tộc **NỀN TẢNG VỮNG VÀNG**.

**Hội Thiên Khôi, Thiên Việt, Phúc Đức, Thiếu Dương, Hóa Khoa, Hóa Lộc:**
- Được **TỔ TIÊN PHÙ HỘ**
- Gặp nhiều **MAY MẮN**
- Được nhiều người **GIÚP ĐỠ**

**Cảnh báo - đi cùng Sát Kỵ Hình:**
- Hiện tượng **NHÀ THỜ TỔ BỊ PHÁ HOẠI, LỤN BẠI**
- **HƯƠNG HỎA KHÔNG GIỮ ĐƯỢC LÂU**`,
  },

  {
    id: 'duong-phu-dien-trach-buon-ban-dat-dai',
    title: 'Đường Phù tại Điền Trạch - Lợi cho buôn đất đai',
    sao: ['Đường Phù'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Đường Phù tại Điền Trạch** — có lợi cho **BUÔN BÁN ĐẤT ĐAI**.

**Cần đi cùng Tả Phù, Hữu Bật + sao Lộc:**
- Phải đi cùng **TẢ HỮU** mang tính trợ lực
- Đặc biệt cần **SAO LỘC** để gia tăng cơ hội **CHUYỂN ĐỔI, GIAO DỊCH**

**Hội Long Trì, Phượng Các:**
- Nhà cửa **RỘNG LỚN, UY NGHIÊM**
- Hoặc gần **NƠI CÔNG QUYỀN**`,
  },

  {
    id: 'duong-phu-quan-loc-cong-quyen-tri-oc',
    title: 'Đường Phù tại Quan Lộc - Việc bàn giấy trí óc công quyền',
    sao: ['Đường Phù'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `**Đường Phù tại Quan Lộc** — gắn với "**VIỆC BÀN GIẤY**" / **TRÍ ÓC, QUẢN
LÝ**.

**Đặc trưng:**
- Bản chất **THANH CAO, NHÀN HẠ**
- Công việc **TRÍ ÓC, QUẢN LÝ**
- Đòi hỏi **HÌNH ẢNH CHỈN CHU**

**Hội Thiên Hình + Hóa Quyền:**
- Làm trong môi trường **CÔNG QUYỀN, CHÍNH PHỦ**

**Lời khuyên:**
- Làm việc **QUY CỦ, TUÂN THỦ NGUYÊN TẮC** đôi khi **BỎ LỠ CƠ HỘI**
- "**BIẾT TIẾN BIẾT THOÁI, MỀM NẮN RẮN BUÔNG**"
- Là **KIM CHỈ NAM** để giữ vị trí và phát triển`,
  },

  {
    id: 'duong-phu-no-boc-quan-he-ro-rang',
    title: 'Đường Phù tại Nô Bộc - Quan hệ rõ ràng dài lâu',
    sao: ['Đường Phù'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Đường Phù tại Nô Bộc** — gia tăng tính tốt đẹp của **MỐI QUAN HỆ BẠN BÈ**.

**Đi cùng Tả Phù, Hữu Bật, Hóa Khoa:**
- **NGĂN CHẶN MỜ ÁM**
- Chơi với nhau **RÕ RÀNG** về lợi ích
- **DUY TRÌ DÀI LÂU**

**Cảnh báo - đi cùng Đà La, Linh Tinh, Địa Kiếp, Lưu Hà, Phục Binh:**
- Đường Phù **VẼ RA LỐI ĐI** của kẻ xấu
- Nhiều **KHUẤT TẤT GIAN DỐI** trong quan hệ
- **KÉO ĐƯƠNG SỐ VÀO**: khó thoát ra`,
  },

  {
    id: 'duong-phu-thien-di-noi-sang-trong',
    title: 'Đường Phù tại Thiên Di - Lui tới nơi sang trọng',
    sao: ['Đường Phù'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Đường Phù tại Thiên Di** — chủ mệnh thường lui tới **NƠI SANG TRỌNG**.

**Đặc trưng:**
- Lui tới những **NƠI SANG TRỌNG**
- Dễ tiếp cận **NGƯỜI TẦNG LỚP CAO** trong xã hội
- Việc đi xa giúp **PHÁT TRIỂN TÍCH CỰC**, **ĐỔI ĐỜI**
- Thoát khỏi "**AO LÀNG**"

**Cảnh báo - hội Địa Kiếp, Lưu Hà, Phục Binh, Đà La, Linh Tinh, Thiên
Riêu, Hóa Kỵ:**
- **TAI HỌA** khi xuất xứ
- Đi xa dễ vướng **KIỆN TỤNG, PHÁP LUẬT**
- Khó tránh **"LỆ LÀNG"** ở nơi mình đến`,
  },

  {
    id: 'duong-phu-tat-ach-giam-benh-tat',
    title: 'Đường Phù tại Tật Ách - Giảm tác họa bệnh tật',
    sao: ['Đường Phù'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `**Đường Phù tại Tật Ách** — **GIẢM TÍNH TÁC HỌA của BỆNH TẬT**.

**Đặc trưng:**
- **GIẢM TÁC HỌA của BỆNH TẬT**
- Tránh **NHIỀU BỆNH CÙNG LÚC**
- Ốm đau ắt **CÓ CÁCH CHỮA**

**Suy đoán nghiệp quả:**
- Dùng để suy đoán **NGHIỆP QUẢ** của một người`,
  },

  {
    id: 'duong-phu-tat-ach-cu-mon-thien-hinh-quyen-kien-tung',
    title: 'Đường Phù + Cự Môn + Thiên Hình/Hóa Quyền + sát tinh tại Tật Ách - Vướng kiện tụng',
    sao: ['Đường Phù'],
    cung: ['Tật Ách'],
    ketHop: ['Cự Môn', 'Thiên Hình', 'Hóa Quyền', 'Địa Kiếp', 'Hóa Kỵ', 'Địa Không', 'Hỏa Tinh', 'Đà La'],
    doUuTien: 60,
    tomTat: `**Đường Phù + Cự Môn + Thiên Hình - Hóa Quyền + Kiếp Kỵ Không Hỏa Đà tại
Tật Ách** — vướng **KIỆN TỤNG**.

**Cảnh báo:**
- Vướng vào **KIỆN TỤNG**
- Phải đứng trước **VÀNH MÓNG NGỰA**
- Phải **BIỆN HỘ** cho chính bản thân`,
  },

  {
    id: 'duong-phu-tat-ach-hoa-hinh-quyen-cat-tinh-cong-quyen',
    title: 'Đường Phù + Hóa Hình/Hóa Quyền + cát tinh - Công việc tố tụng tòa án',
    sao: ['Đường Phù'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Hình', 'Hóa Quyền', 'Tả Phù', 'Hữu Bật'],
    doUuTien: 62,
    tomTat: `**Đường Phù + Hóa Hình + Hóa Quyền + cát tinh tốt** — công việc **TỐ TỤNG,
TÒA ÁN, CÔNG QUYỀN**.

**Đặc trưng:**
- Phù hợp công việc liên quan **TỐ TỤNG**
- Làm việc ở **TÒA ÁN**
- Hoặc môi trường **CÔNG QUYỀN**`,
  },

  {
    id: 'duong-phu-tai-bach-mot-nguon-thu',
    title: 'Đường Phù tại Tài Bạch - Một nguồn thu duy nhất',
    sao: ['Đường Phù'],
    cung: ['Tài Bạch'],
    doUuTien: 70,
    tomTat: `**Đường Phù tại Tài Bạch** — **KHÔNG PHÁT HUY ĐƯỢC NHIỀU ĐIỂM TỐT**.

**Đặc trưng:**
- Kiếm tiền bằng việc **NHẸ NHÀNG, ÍT ÁP LỰC**
- Chỉ có **MỘT NGUỒN THU DUY NHẤT**
- **LUỒNG TIỀN BỊ HẠN CHẾ**
- Không có **ĐỘNG LỰC ĐA DẠNG** cách kiếm tiền
- Cuộc sống **KHÓ PHÁT TRIỂN**`,
  },

  {
    id: 'duong-phu-tu-tuc-quan-he-tot-dep',
    title: 'Đường Phù tại Tử Tức - Hỗ trợ quan hệ với con cái',
    sao: ['Đường Phù'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Đường Phù tại Tử Tức** — hỗ trợ quan hệ với con cái **TỐT ĐẸP**.

**Điều kiện tiên quyết:**
- Phải có **GẮN KẾT CHẶT CHẼ** từ cát tinh
- **TẢ HỮU + VĂN XƯƠNG VĂN KHÚC**

**Đi cùng Xương Khúc:**
- Tình cảm càng **ĐẬM SÂU**
- Cha mẹ luôn **LO LẮNG, QUAN TÂM** đến con cái

**Cảnh báo - hội sát tinh hình thương:**
- Đề phòng con cái **TAI NẠN trên ĐƯỜNG LỚN**
- **TAI NẠN GIAO THÔNG**
- Do **SAI LỆCH TÍN HIỆU**`,
  },

  {
    id: 'duong-phu-phu-the-vo-chong-gan-ket',
    title: 'Đường Phù tại Phu Thê - Vợ chồng gắn kết bạn đời quý phái',
    sao: ['Đường Phù'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `**Đường Phù tại Phu Thê** — vợ chồng **GẮN KẾT CHẶT CHẼ**.

**Đi cùng Xương Khúc, Quang Quý:**
- Vợ chồng **GẮN KẾT CHẶT CHẼ**
- Sau thời gian dài, tình cảm vẫn "**MẬT NGỌT**" như đầu

**Đi cùng sao bằng cấp, học thức, danh giá, quyền quý:**
- Bạn đời có **NĂNG LỰC + PHẨM CHẤT TỐT**
- Được nhiều người **NỂ TRỌNG**

**Cảnh báo - đi cùng Địa Kiếp, Thiên Hình, Hóa Kỵ:**
- Mối quan hệ vợ chồng **TRẮC TRỞ**
- Đường Phù như **CƠ QUAN CÔNG QUYỀN**
- Đến lần đầu để **KẾT HÔN**: lần thứ hai để **LY HÔN**`,
  },

  {
    id: 'duong-phu-huynh-de-anh-em-ben-chat',
    title: 'Đường Phù tại Huynh Đệ - Anh em bền chặt khi có Tả Hữu',
    sao: ['Đường Phù'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Đường Phù tại Huynh Đệ** — không tạo ảnh hưởng quá mạnh.

**Đi cùng Tả Phù + Hữu Bật:**
- Mối quan hệ anh chị em **BỀN CHẶT, THÂN THIẾT**
- **HỢP TÁC ĂN Ý**

**Cảnh báo - đi cùng Địa Không, Địa Kiếp, Hóa Kỵ, Hỏa Tinh:**
- Anh em thân thiết dễ vướng **VÒNG LAO LÝ**
- Gây **LIÊN LỤY** đến bản thân đương số`,
  },
];
