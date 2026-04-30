import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO ĐẨU QUÂN - Hỏa, Hung Tinh.
 *
 * Đặc tính: CÔ ĐỘC, KHẮT KHE, NGUYÊN TẮC, NGĂN NẮP, CẨN THẬN, GIỮ CỦA BỀN LÂU.
 * Hình tượng: người "CẦM CÂN NẢY MỰC" sau lưng Thái Tuế.
 *
 * Hợp với CÔNG VIỆC TỈ MỈ - KỶ LUẬT - TÍNH TOÁN: kế toán, thủ quỹ, thủ kho.
 * Cô độc gần giống Cô Thần - khó hòa hợp, hôn nhân muộn.
 */
export const luanGiai_DauQuan: DoanLuanGiai[] = [
  {
    id: 'dau-quan-tinh-chat-chung',
    title: 'Đẩu Quân - Đặc tính chung',
    sao: ['Đẩu Quân'],
    doUuTien: 32,
    tomTat: `**Đẩu Quân** — phụ tinh **HUNG TINH**, tính chất **CÔ ĐỘC, KHẮT KHE, NGUYÊN
TẮC**.

**Ngũ hành:** **Hỏa**.

⚡ **Hình tượng:** người "**CẦM CÂN NẢY MỰC**" sau lưng Thái Tuế.

⚡ **Đặc tính:**
- **CÔ ĐỘC, KHẮT KHE, NGUYÊN TẮC**
- **NGĂN NẮP, CẨN THẬN**
- **GIỮ CỦA BỀN LÂU**

⚡ **Tác động chính - hai mặt:**
- **TỐT:** mang lại sự **CHUẨN MỰC, BỀN BỈ**, khả năng **DUY TRÌ THÀNH QUẢ**
- **XẤU:** **CÔ ĐỘC, KHẮT KHE, BẢO THỦ**, khó dung hòa với người khác

⚡ **Duyên vận:**
- Thường **KẾT HÔN MUỘN** do **KỸ TÍNH** trong việc lựa chọn hôn phối
- Tình cảm dễ có **KHOẢNG CÁCH**, thiếu **THẤU HIỂU**

⚡ **Sự nghiệp:**
- Hợp công việc **TỈ MỈ, KỶ LUẬT, TÍNH TOÁN**
- **KẾ TOÁN, THỦ QUỸ, THỦ KHO**
- Có thể **BỎ LỠ CƠ HỘI MỚI** nếu quá **BẢO THỦ**

⚡ **Tài lộc:**
- **GIỎI TÍCH LŨY** tài sản
- **DUY TRÌ ỔN ĐỊNH** dòng tiền
- **ÍT TIÊU XÀI HOANG PHÍ**
- Dễ bỏ lỡ cơ hội **TĂNG THU NHẬP** do **NGẠI THAY ĐỔI**`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CUNG MỆNH
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'dau-quan-menh-co-chap-don-doc',
    title: 'Đẩu Quân tại Mệnh - Cố chấp đơn độc',
    sao: ['Đẩu Quân'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `**Đẩu Quân tại Mệnh** — chủ tính tình **CỐ CHẤP, ĐƠN ĐỘC**.

⚡ **Trách nhiệm:**
- Người "**CẦM CÂN NẢY MỰC**" sau lưng Thái Tuế
- Có **TRÁCH NHIỆM NẶNG NỀ**
- Giỏi **QUẢN LÝ TÀI SẢN, NGÂN SÁCH, TÀI CHÍNH**

⚡ **Tính cách:**
- Khá giống **CÔ THẦN** — xu hướng **CÔ ĐỘC, ÍT BẠN BÈ**
- Bị hiểu lầm là **KHẮT KHE, KHÓ GẦN**
- Sống **CẨN THẬN, KỸ TÍNH, NGUYÊN TẮC**

⚡ **Tướng mạo:**
- **SẮC DIỆN NGHIÊM NGHỊ**
- **ÍT KHI CƯỜI NÓI**
- **ÁNH MẮT SẮC SẢO, TRẦM TĨNH**
- **PHONG THÁI ĐĨNH ĐẠC**
- Ít biểu lộ **CẢM XÚC** ra bên ngoài

⚡ **Công danh - tài lộc:**
- Chủ về **GIỮ CỦA**
- Thường được **GIAO QUYỀN QUẢN LÝ TÀI CHÍNH, NGÂN SÁCH**
- Hợp **THỦ KHO, THỦ QUỸ, KẾ TOÁN**`,
  },

  {
    id: 'dau-quan-menh-sat-bai-tinh-gian-xao',
    title: 'Đẩu Quân + sát bại tinh tại Mệnh - Gian xảo quỷ quyệt',
    sao: ['Đẩu Quân'],
    cung: ['Mệnh'],
    ketHop: ['Kình Dương', 'Đà La', 'Địa Không', 'Địa Kiếp', 'Hóa Kỵ', 'Thiên Hình'],
    doUuTien: 60,
    tomTat: `**Đẩu Quân + sát bại tinh tại Mệnh** — dễ thành **GIAN XẢO, QUỶ QUYỆT**.

⚡ **Đặc trưng:**
- Tính tỉ mỉ kỹ lưỡng → dùng vào **MƯU MÔ XẤU**
- **GIAN XẢO, QUỶ QUYỆT**
- Dễ vướng **CHUYỆN BẤT CHÍNH**`,
  },

  {
    id: 'dau-quan-menh-loc-ton-vu-khuc-co-qua-keo-kiet',
    title: 'Đẩu Quân + Lộc Tồn/Vũ Khúc/Cô Thần/Quả Tú tại Mệnh - Keo kiệt',
    sao: ['Đẩu Quân'],
    cung: ['Mệnh'],
    ketHop: ['Lộc Tồn', 'Vũ Khúc', 'Cô Thần', 'Quả Tú'],
    doUuTien: 60,
    tomTat: `**Đẩu Quân + Lộc Tồn + Vũ Khúc + Cô Thần - Quả Tú tại Mệnh** — tính cách
**KEO KIỆT**.

⚡ **Đặc trưng:**
- Tính cách thêm **KEO KIỆT, BẦN TIỆN**
- Kiểu người "**VẮT CỔ CHÀY RA NƯỚC**"
- Chỉ biết **TÍNH TOÁN CHO BẢN THÂN**`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC CUNG KHÁC
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'dau-quan-phu-mau-cha-me-nghiem-khac',
    title: 'Đẩu Quân tại Phụ Mẫu - Cha mẹ nghiêm khắc làm tài chính',
    sao: ['Đẩu Quân'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Đẩu Quân tại Phụ Mẫu** — cha mẹ **KHÓ TÍNH, NGHIÊM KHẮC**.

⚡ **Đặc trưng:**
- Cha mẹ **KHÓ TÍNH, NGHIÊM KHẮC**
- Đặt nặng **KỶ CƯƠNG NỀ NẾP** trong nuôi dạy
- Tính cách **ÁP ĐẶT** dễ khiến gia đình **NẶNG NỀ**
- Dễ **HIỂU LẦM, BẤT HÒA**

⚡ **Nghề nghiệp cha mẹ:**
- Một hoặc cả hai làm nghề liên quan **TÀI CHÍNH**
- **KẾ TOÁN, THỦ QUỸ, HẬU CẦN**
- Trong nhà hiếm **TIÊU XÀI PHUNG PHÍ**
- Cha mẹ biết **VUN VÉN, CHI TIÊU TIẾT KIỆM**`,
  },

  {
    id: 'dau-quan-phuc-duc-dong-toc-it-sum-hop',
    title: 'Đẩu Quân tại Phúc Đức - Dòng họ ít sum họp',
    sao: ['Đẩu Quân'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `**Đẩu Quân tại Phúc Đức** — dòng họ **ÍT SUM HỌP**.

⚡ **Đặc trưng:**
- Thiếu **GẮN KẾT** dòng tộc
- Mỗi người mỗi tính, **KHÔNG AI NHƯỜNG AI**

⚡ **Hội cát tinh:**
- Tổ tiên có thể từng **LÀM QUAN** hoặc **TRÔNG GIỮ KHO LƯƠNG, HẬU CẦN**

⚡ **Phúc khí dòng tộc:**
- Có phần **KHẮT KHE, NGHIÊM NGẶT**
- Đòi hỏi con cháu **ĂN NGAY Ở THẲNG, PHẢI ĐẠO**
- Nhiều gia đình giữ **NỀ NẾP THỜ CÚNG CHUẨN CHỈNH**
- **HƯƠNG HỎA LỄ NGHI** không dám ngơi tay`,
  },

  {
    id: 'dau-quan-dien-trach-tho-dia-kho-tinh',
    title: 'Đẩu Quân tại Điền Trạch - Thổ địa khó tính',
    sao: ['Đẩu Quân'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Đẩu Quân tại Điền Trạch** — chẳng khác nào **THỔ ĐỊA KHÓ TÍNH** ngồi
canh cổng nhà.

⚡ **Đặc trưng:**
- Khắt khe và **TỈ MỈ trong CHUYỆN NHÀ CỬA**
- Mọi ngóc ngách phải **NGĂN NẮP, TƯƠM TẤT**
- Dễ thấy **TRÁI TAI GAI MẮT** khi nhà cửa lộn xộn

⚡ **Giữ nhà rất kỹ:**
- Coi nhà như **GỐC RỄ CUỘC ĐỜI**
- Không dễ **THAY ĐỔI NƠI Ở**
- Cách sống **QUY CỦ, NGHIÊM KHẮC**
- **ÍT CỞI MỞ**, khó thân với **HÀNG XÓM**`,
  },

  {
    id: 'dau-quan-quan-loc-trach-nhiem-cao',
    title: 'Đẩu Quân tại Quan Lộc - Trách nhiệm cao gánh vác',
    sao: ['Đẩu Quân'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `**Đẩu Quân tại Quan Lộc** — gánh vác **VIỆC LỚN**.

⚡ **Đặc trưng:**
- Trong công việc **CHU TOÀN, NGUYÊN TẮC**
- Cân đo đong đếm **TỪNG LY**
- Dễ **MẤT LÒNG NGƯỜI KHÁC**

⚡ **Trách nhiệm cao:**
- Hiếm khi **THAY ĐỔI MÔI TRƯỜNG LÀM VIỆC**
- Thâm niên càng lâu → **VỊ TRÍ CÀNG VỮNG**
- Công danh **THUẬN BUỒM XUÔI GIÓ**

⚡ **Hội cát tinh:**
- Dễ được **THĂNG CHỨC, NẮM QUYỀN LÃNH ĐẠO**

⚡ **Đi cùng sát bại tinh:**
- Sinh **TÂM BẤT MÃN**
- **KHÓ HÒA HỢP** với tập thể`,
  },

  {
    id: 'dau-quan-no-boc-it-ban-be',
    title: 'Đẩu Quân tại Nô Bộc - Ít bạn bè giữ khoảng cách',
    sao: ['Đẩu Quân'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Đẩu Quân tại Nô Bộc** — **ÍT BẠN BÈ, ÍT GIAO THIỆP**.

⚡ **Đặc trưng:**
- **TÍNH TOÁN THIỆT HƠN**
- Chơi với ai cũng **DÈ CHỪNG, GIỮ KHOẢNG CÁCH**
- Khó **DUY TRÌ TÌNH BẠN THÂN THIẾT** lâu dài

⚡ **Chốn công sở:**
- Đặt yêu cầu cao về **CHỈN CHU, NGUYÊN TẮC, MINH BẠCH**
- Sự khắt khe có thể dẫn đến **BẤT ĐỒNG** với đồng nghiệp / cấp dưới`,
  },

  {
    id: 'dau-quan-thien-di-tram-lang-thi-phi',
    title: 'Đẩu Quân tại Thiên Di - Trầm lặng dễ vướng thị phi',
    sao: ['Đẩu Quân'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Đẩu Quân tại Thiên Di** — khí chất **TRẦM LẶNG, TÍNH TOÁN**.

⚡ **Đặc trưng:**
- Bị thiên hạ hiểu lầm là **LẠNH LÙNG**
- "Sống chỉ biết mình"
- Ra ngoài **ÍT NÓI, ÍT CƯỜI**
- Mất nhiều thời gian để tạo **THIỆN CẢM**
- Dễ vướng **THỊ PHI** không đáng có

⚡ **Bất lợi:**
- Khó xây dựng hình ảnh **QUẢNG GIAO**
- Dù **NĂNG LỰC + PHẨM CHẤT** vốn không tệ`,
  },

  {
    id: 'dau-quan-tat-ach-than-kinh-cang-thang',
    title: 'Đẩu Quân tại Tật Ách - Thần kinh căng thẳng mất ngủ',
    sao: ['Đẩu Quân'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `**Đẩu Quân tại Tật Ách** — **NGHĨ NHIỀU, LO XA, THẦN KINH CĂNG THẲNG**.

⚡ **Đặc trưng:**
- Tâm trí lúc nào cũng **CÂN ĐO THIỆT HƠN**
- Dễ **MẤT NGỦ, LO ÂU KÉO DÀI**
- Một số đối mặt với:
  - Bệnh **HUYẾT ÁP**
  - **THẦN KINH** hoặc **TRẦM CẢM**
- Do **ÁP LỰC VÔ HÌNH** tích tụ năm tháng`,
  },

  {
    id: 'dau-quan-tat-ach-thien-hinh-kinh-duong-mo-xe',
    title: 'Đẩu Quân + Thiên Hình/Kình Dương tại Tật Ách - Nguy cơ mổ xẻ',
    sao: ['Đẩu Quân'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Hình', 'Kình Dương'],
    doUuTien: 65,
    tomTat: `**Đẩu Quân + Thiên Hình + Kình Dương tại Tật Ách** — nguy cơ **MỔ XẺ**.

⚡ **Đặc trưng:**
- Bệnh nghiêng về hướng **MỔ XẺ, CHÂM CHÍCH**
- **CAN THIỆP DAO KÉO**
- Cần đề phòng **PHẪU THUẬT**`,
  },

  {
    id: 'dau-quan-tai-bach-giu-tien-rach-roi',
    title: 'Đẩu Quân tại Tài Bạch - Tay hòm chìa khóa',
    sao: ['Đẩu Quân'],
    cung: ['Tài Bạch'],
    doUuTien: 78,
    tomTat: `**Đẩu Quân tại Tài Bạch** — tiền vào tay **KHÔNG DỄ THẤT THOÁT**.

⚡ **Đặc trưng:**
- **BIẾT KIẾM TIỀN, BIẾT GIỮ TIỀN**
- Đặc biệt giỏi **TÍNH TOÁN**
- Tiêu xài **CHỪNG MỰC, RẠCH RÒI** từng khoản
- Tính kỹ đến mức **KHÔNG LỆCH MỘT XU**

⚡ **Phù hợp:**
- Công việc đòi hỏi **ĐỘ CHÍNH XÁC CAO**
- **KẾ TOÁN, KIỂM TOÁN, TÀI CHÍNH, QUẢN LÝ TÀI SẢN**

⚡ **Hội cát tinh:**
- Giữ vai trò "**TAY HÒM CHÌA KHÓA**"
- Trong **NỘI BỘ GIA ĐÌNH, TẬP ĐOÀN, CƠ QUAN NHÀ NƯỚC**`,
  },

  {
    id: 'dau-quan-tu-tuc-hiem-muon-it-con',
    title: 'Đẩu Quân tại Tử Tức - Hiếm muộn ít con',
    sao: ['Đẩu Quân'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Đẩu Quân tại Tử Tức** — dấu hiệu **HIẾM MUỘN, ÍT CON**.

⚡ **Đặc trưng:**
- **HIẾM MUỘN, SINH NỞ CHẬM TRỄ**
- **ÍT CON**
- Tương tự các sao **CÔ THẦN, QUẢ TÚ, LỘC TỒN**

⚡ **Quan hệ cha mẹ - con cái:**
- Có **NHIỀU KHOẢNG CÁCH**
- Con cái **CẨN TRỌNG, KHÓ CHIỀU**, có phần **KHẮT KHE, KHÓ GẦN**
- Thương vẫn thương, sống chung như **NƯỚC VỚI LỬA**
- Mỗi người một ý → "**MẠNH AI NẤY SỐNG**" trong gia đình`,
  },

  {
    id: 'dau-quan-phu-the-con-dao-hai-luoi',
    title: 'Đẩu Quân tại Phu Thê - Con dao hai lưỡi',
    sao: ['Đẩu Quân'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `**Đẩu Quân tại Phu Thê** — **CON DAO HAI LƯỠI** trong tình duyên.

⚡ **Mặt xấu:**
- Khó **MỞ LÒNG**
- Bạn đời **ÍT THẤU HIỂU TRỌN VẸN**
- Tính khí **CẨN TRỌNG, KHẮT KHE** đôi khi thành **CỐ CHẤP**
- Hôn nhân dễ "**CƠM KHÔNG LÀNH, CANH CHẲNG NGỌT**"
- Đặc biệt nặng khi đi cùng **HUNG SÁT**

⚡ **Mặt tốt - lá chắn:**
- Sự **NGHIÊM TÚC, SỐNG CÓ CHỪNG MỰC** là "**LÁ CHẮN**"
- Ngăn chặn thói **ĐÀO HOA, PHONG LƯU, DỄ DÃI**
- Tiết chế **DỤC TÍNH**
- Giữ gìn **CHUNG THỦY**, tránh **TÌNH CẢM NGOÀI LUỒNG**

⚡ **Kén chọn bạn đời:**
- Một khi tìm được **NGƯỜI XỨNG ĐÔI VỪA Ý**
- **TRÂN TRỌNG và GIỮ GÌN**`,
  },

  {
    id: 'dau-quan-huynh-de-anh-em-kho-hoa-hop',
    title: 'Đẩu Quân tại Huynh Đệ - Anh em khó hòa hợp',
    sao: ['Đẩu Quân'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Đẩu Quân tại Huynh Đệ** — anh chị em ruột **KHÓ HÒA HỢP**.

⚡ **Đặc trưng:**
- Báo hiệu gia đình **ÍT ANH CHỊ EM**
- Đông đúc cũng khó tìm **TIẾNG NÓI CHUNG**

⚡ **Gặp Cô Thần, Quả Tú, Lộc Tồn, Vũ Khúc, Thất Sát:**
- Cảnh "**CÓ ANH EM MÀ CHẲNG ĐƯỢC NHỜ**"
- Cùng dòng máu, cùng mái nhà, nhưng **TRONG LÒNG CÓ KHOẢNG CÁCH**`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // HẠN VẬN
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'dau-quan-han-kinh-hinh-kiep-pha-toai-mo-xe',
    title: 'Hạn Đẩu Quân + Kình Dương/Thiên Hình/Địa Kiếp/Phá Toái - Cưa cắt mổ xẻ',
    sao: ['Đẩu Quân'],
    ketHop: ['Kình Dương', 'Thiên Hình', 'Địa Kiếp', 'Phá Toái'],
    doUuTien: 60,
    tomTat: `**Hạn Đẩu Quân + Kình Dương + Thiên Hình + Địa Kiếp + Phá Toái** — hạn
**CƯA CẮT, MỔ XẺ**.

⚡ **Lưu ý quan trọng:**
- Cách luận theo **SAO ĐƠN LẺ KHÔNG CÒN CHÍNH XÁC**
- Đẩu Quân chỉ là **MỘT MẢNH GHÉP NHỎ**
- Phải đi kèm **NHÓM SÁT TINH MẠNH** (Kình - Hình - Kiếp - Phá Toái)
- **CUNG TẬT ÁCH + THIÊN DI** trên lá số phải đồng thời có **DẤU HIỆU HÌNH
  THƯƠNG, HỌA HẠI**
- Mới đủ tạo **CỤC DIỆN ĐÁNG LO**

⚡ **Đặc trưng:**
- Nguy cơ **MỔ XẺ, PHẪU THUẬT**
- **CƯA CẮT, CHÂM CHÍCH**`,
  },

  {
    id: 'dau-quan-han-khoi-viet-hoa-quyen-thang-tien',
    title: 'Hạn Đẩu Quân + Khôi Việt/Hóa Quyền - Đảm nhiệm nhiệm vụ mới',
    sao: ['Đẩu Quân'],
    ketHop: ['Thiên Khôi', 'Thiên Việt', 'Hóa Quyền'],
    doUuTien: 60,
    tomTat: `**Hạn Đẩu Quân + Thiên Khôi - Thiên Việt + Hóa Quyền** — **ĐẢM NHIỆM NHIỆM
VỤ MỚI**.

⚡ **Đặc trưng:**
- Thời điểm được **GIAO PHÓ TRÁCH NHIỆM MỚI**
- Đặc biệt công việc **QUẢN LÝ, SẮP XẾP TÀI CHÍNH, NGÂN SÁCH**
- Tính **CẨN TRỌNG, NGĂN NẮP** giúp ghi điểm với cấp trên
- Dễ được **TIN TƯỞNG GIAO PHÓ** vị trí cần **TỈ MỈ, CHÍNH XÁC**

⚡ **Cát tinh + Khôi Việt + Hóa Quyền:**
- **CẤT NHẮC VƯỢT BẬC**
- **THĂNG TIẾN NHANH** hơn lộ trình bình thường`,
  },
];
