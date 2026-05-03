import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO HOA CÁI - Kim, Cát Tinh (Đài Các Tinh).
 *
 * Một trong TỨ LINH (Long Trì - Phượng Các - Bạch Hổ - Hoa Cái).
 * Hình tượng: CHIẾC LỌNG CHE uy nghi trong lễ rước trạng nguyên.
 *
 * Đặc tính: TRÍ TUỆ, KHÍ CHẤT, PHÚ QUÝ, DANH VỌNG, ĐỖ ĐẠT, PHỤNG SỰ,
 * NGHI THỨC KHUÔN PHÉP, TÂM LINH NGHỆ THUẬT.
 *
 * Cát tinh giống Hoa Cái: Long Trì, Phượng Các, Văn Xương, Văn Khúc,
 * Thiên Khôi, Thiên Việt.
 */
export const luanGiai_HoaCai: DoanLuanGiai[] = [
  {
    id: 'hoa-cai-tinh-chat-chung',
    title: 'Hoa Cái - Đặc tính chung',
    sao: ['Hoa Cái'],
    doUuTien: 32,
    tomTat: `**Hoa Cái** — phụ tinh **CÁT TINH** (còn gọi **Đài Các Tinh**), một trong **TỨ
LINH** (Long Trì - Phượng Các - Bạch Hổ - Hoa Cái).

**Ngũ hành:** **Kim**.

**Hình tượng:** **CHIẾC LỌNG CHE** uy nghi trong lễ rước trạng nguyên.

**Đặc tính:**
- **TRÍ TUỆ, KHÍ CHẤT THANH CAO, PHÚ QUÝ**
- **DANH VỌNG, ĐỖ ĐẠT, PHỤNG SỰ**
- Yêu cái đẹp, tôn trọng **NGHI THỨC, KHUÔN PHÉP**
- Nhiều trường hợp gắn với **TÂM LINH** hoặc **NGHỆ THUẬT**
- Tính cách thông tuệ, chăm chỉ, chịu khó nhưng có phần **BẢO THỦ, SĨ DIỆN**

**Ảnh hưởng chính:**
- Làm **NỔI BẬT TÀI NĂNG**, nâng cao **ĐỊA VỊ và UY TÍN** cá nhân
- Tạo nền tảng **PHÚC ĐỨC**, hỗ trợ **HỌC HÀNH, THI CỬ, CÔNG DANH**
- Gặp sao xấu dễ thành **BẢO THỦ, SĨ DIỆN**

**Bộ cát tinh giống Hoa Cái:** Long Trì, Phượng Các, Văn Xương, Văn Khúc,
Thiên Khôi, Thiên Việt.

**Duyên vận:**
- Nhân duyên tốt, dễ thu hút thiện cảm từ người **KHÁC GIỚI**
- Bạn đời có **ĐỊA VỊ** hoặc **XUẤT THÂN TỐT**

**Sự nghiệp:**
- Thường được **QUÝ NHÂN NÂNG ĐỠ**
- Dễ đạt **THÀNH TỰU LÂU DÀI** nếu biết nắm bắt cơ hội`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CUNG MỆNH
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'hoa-cai-menh-khi-chat-thanh-cao',
    title: 'Hoa Cái tại Mệnh - Khí chất thanh cao',
    sao: ['Hoa Cái'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `**Hoa Cái tại Mệnh** — vừa là dấu hiệu **MAY MẮN**, vừa khơi dậy **KHÍ CHẤT
THANH CAO**.

**Đặc trưng:**
- Dễ được **TRỌNG VỌNG**, được **QUÝ NHÂN NÂNG ĐỠ**
- Trên đường **CÔNG DANH, TÀI LỘC** đều có thuận lợi

**Dung mạo (cả nam và nữ):**
- **PHONG THÁI SANG TRỌNG**, khí chất nổi bật
- Dễ tạo **THIỆN CẢM** ngay từ ánh nhìn đầu tiên
- **THÂN HÌNH ĐẦY ĐẶN**, gương mặt sáng
- Đôi khi có **NỐT RUỒI SON** hoặc **NÁM NHẸ** trên mặt
- Khác Đào Hoa (hấp dẫn bề ngoài), Hoa Cái cuốn hút nhờ **PHONG CÁCH CHỈN
  CHU, TINH TẾ và VẺ ĐẸP TRÍ TUỆ**

**Tính cách:**
- **THÔNG TUỆ, CHĂM CHỈ, CHỊU KHÓ** nhưng có phần **BẢO THỦ**
- Yêu cái đẹp, ưa **TRƯNG DIỆN**, thích thu hút sự chú ý
- Dễ trải qua **HỈ - NỘ - ÁI - Ố** trong cuộc đời

**Tâm linh:**
- Thường mang **CĂN SỐ TÂM LINH**
- **GIÁC QUAN THỨ SÁU** nhạy bén
- Cảm nhận được điều người khác không thể thấy
- Có **GIẤC MƠ LINH ỨNG** chuẩn xác đến bất ngờ`,
  },

  {
    id: 'hoa-cai-menh-xuong-khuc-khoi-quyen',
    title: 'Hoa Cái + Văn Xương/Văn Khúc/Thiên Khôi/Hóa Quyền tại Mệnh - Vừa tài vừa thế',
    sao: ['Hoa Cái'],
    cung: ['Mệnh'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Hóa Quyền'],
    doUuTien: 70,
    tomTat: `**Hoa Cái + Văn Xương/Văn Khúc/Thiên Khôi/Hóa Quyền tại Mệnh** — người
**VỪA CÓ TÀI, VỪA CÓ THẾ**.

**Đặc trưng:**
- Dễ bước vào **HÀNG NGŨ ĐƯỢC TRỌNG VỌNG**
- Có **VĂN TÀI + QUYỀN UY** kết hợp
- Học hành thi cử đỗ đạt
- **DANH VỌNG ĐI ĐÔI VỚI THỰC LỰC**`,
  },

  {
    id: 'hoa-cai-menh-tien-cai-hau-ma-cai-moc-rieu',
    title: 'Hoa Cái + Tiền Cái Hậu Mã / Cái Mộc Riêu - Kinh doanh giàu sang',
    sao: ['Hoa Cái'],
    cung: ['Mệnh'],
    ketHop: ['Thiên Mã', 'Mộc Dục', 'Thiên Riêu'],
    doUuTien: 68,
    tomTat: `**Bộ Tiền Cái - Hậu Mã** (Hoa Cái + Thiên Mã) hoặc **Cái - Mộc - Riêu** (Hoa
Cái + Mộc Dục + Thiên Riêu) — thúc đẩy mạnh **KHẢ NĂNG KINH DOANH**.

**Đặc trưng:**
- Đưa đến **GIÀU SANG**
- **VỊ THẾ CAO** trong xã hội
- Khả năng **GIAO DỊCH, THƯƠNG MẠI** xuất sắc
- Hoa Cái + Mã = **CÔNG DANH KIỆM TÀI**`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC CUNG KHÁC
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'hoa-cai-phu-mau-cha-me-quan-xuyen',
    title: 'Hoa Cái tại Phụ Mẫu - Cha mẹ giỏi quán xuyến',
    sao: ['Hoa Cái'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Hoa Cái tại Phụ Mẫu** — đủ bộ **TỨ LINH** (Long Trì - Phượng Các - Bạch Hổ
- Hoa Cái) cùng cung.

**Đặc trưng cha mẹ:**
- **BIẾT QUÁN XUYẾN GIA ĐÌNH, GIỎI GIANG, CHU TOÀN**
- Sự đảm đang đi với tính cách **GHÊ GỚM, NGHIÊM KHẮC**
- Có phần **ÁP ĐẶT** con cái phải theo ý mình

**Kinh tế:**
- Nhờ **NHÂN DUYÊN TỐT** và **CHĂM CHỈ**: tự gây dựng **NỀN TẢNG VỮNG VÀNG**
- Gặp thêm cát tinh: **ĐỊA VỊ XÃ HỘI CAO**, sự nghiệp thăng hoa
- Danh tiếng gia đình **NHIỀU NGƯỜI KÍNH NỂ**`,
  },

  {
    id: 'hoa-cai-phu-the-hao-hoa',
    title: 'Hoa Cái tại Phu Thê - Hôn nhân hào hoa',
    sao: ['Hoa Cái'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `**Hoa Cái tại Phu Thê** — hôn nhân mang đậm nét **HÀO HOA**.

**Đặc trưng:**
- Cả hai vợ chồng đều thích **TRƯNG DIỆN, ĐIỆU ĐÀ**
- Có đôi phần **BẢO THỦ**

**Bạn đời:**
- Thường xuất thân từ **GIA ĐÌNH DANH GIÁ**
- **ĐIỀU KIỆN KINH TẾ TỐT**
- Có thể hỗ trợ mạnh mẽ về **TÀI CHÍNH lẫn VỊ THẾ XÃ HỘI**

**Cảnh báo:**
- Sự sung túc và **TÂM LÝ Ỷ LẠI** dễ khiến mối quan hệ tựa **BÌNH PHONG**
- **ĐẸP NHƯNG RỖNG RUỘT**
- Thiếu sự **GẮN KẾT** và **ĐỘNG LỰC CÙNG TIẾN**`,
  },

  {
    id: 'hoa-cai-phu-the-tam-thai-bat-toa-quang-quy',
    title: 'Hoa Cái + Tam Thai/Bát Tọa/Ân Quang/Thiên Quý tại Phu Thê - Chiều chuộng quá đà',
    sao: ['Hoa Cái'],
    cung: ['Phu Thê'],
    ketHop: ['Tam Thai', 'Bát Tọa', 'Ân Quang', 'Thiên Quý'],
    doUuTien: 65,
    tomTat: `**Hoa Cái + Tam Thai - Bát Tọa hoặc Ân Quang - Thiên Quý tại Phu Thê** — vợ
chồng dễ **CHIỀU CHUỘNG NHAU QUÁ ĐÀ**.

**Đặc trưng:**
- **CHIỀU CHUỘNG QUÁ ĐÀ** dẫn đến **LƯỜI BIẾNG**
- Cả hai dễ **Ỷ LẠI** vào nhau
- Mất đi **ĐỘNG LỰC CẦU TIẾN**`,
  },

  {
    id: 'hoa-cai-dien-trach-thanh-tri-vung',
    title: 'Hoa Cái tại Điền Trạch - Thành trì che chở',
    sao: ['Hoa Cái'],
    cung: ['Điền Trạch'],
    doUuTien: 78,
    tomTat: `**Hoa Cái tại Điền Trạch** — như **THÀNH TRÌ VỮNG VÀNG** che chở cho gia
đạo.

**Đặc trưng:**
- **NHÀ CAO CỬA RỘNG**
- **BẤT ĐỘNG SẢN CÓ GIÁ TRỊ**
- Khả năng **TÍCH LŨY LÂU DÀI**
- Gặp cách cục đẹp: giữ được cơ nghiệp + khéo **SINH LỢI TỪ BĐS**
- **LÃI MẸ ĐẺ LÃI CON**, giàu sang càng thêm sung túc

**Cảnh báo:**
- Vào vận xấu hoặc gặp sát tinh: thành lũy **RẠN NỨT**
- **TRANH CHẤP ĐẤT ĐAI**
- **HAO HỤT TÀI SẢN** hoặc **NHÀ CỬA XUỐNG CẤP**
- Cẩn trọng khi đầu tư lớn`,
  },

  {
    id: 'hoa-cai-quan-loc-thang-tien',
    title: 'Hoa Cái tại Quan Lộc - Sự nghiệp thăng tiến',
    sao: ['Hoa Cái'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `**Hoa Cái tại Quan Lộc** — báo hiệu **ĐIỀM LÀNH** trong đường công danh.

**Đặc trưng:**
- Dễ **GÂY DỰNG UY TÍN**
- Làm việc **HIỆU QUẢ**
- Được **NGƯỜI TRÊN KẺ DƯỚI KÍNH TRỌNG**
- Củng cố cả **ĐỜI SỐNG VẬT CHẤT lẫn TÂM LINH**`,
  },

  {
    id: 'hoa-cai-quan-loc-an-quang-thien-quy-xuong-khuc-long-phuong',
    title: 'Hoa Cái + Ân Quang/Thiên Quý/Văn Xương/Văn Khúc/Long Trì/Phượng Các tại Quan Lộc - Thi cử đỗ đạt',
    sao: ['Hoa Cái'],
    cung: ['Quan Lộc'],
    ketHop: ['Ân Quang', 'Thiên Quý', 'Văn Xương', 'Văn Khúc', 'Long Trì', 'Phượng Các'],
    doUuTien: 72,
    tomTat: `**Hoa Cái + Ân Quang Thiên Quý + Xương Khúc + Long Phượng tại Quan Lộc** —
**THĂNG TIẾN + THI CỬ ĐỖ ĐẠT**.

**Đặc trưng:**
- Cơ hội **THĂNG TIẾN RỘNG MỞ**
- **THI CỬ ĐỖ ĐẠT** mỹ mãn
- Bộ sao **VĂN HIỂN + KHOA BẢNG** đầy đủ
- Đường công danh sáng láng, **DANH TIẾNG VANG XA**`,
  },

  {
    id: 'hoa-cai-thien-di-suc-hut',
    title: 'Hoa Cái tại Thiên Di - Sức hút đặc biệt',
    sao: ['Hoa Cái'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Hoa Cái tại Thiên Di** — phần nào tương đồng cách thủ ở vị trí gốc.

**Đặc trưng:**
- Tỏa ra **SỨC HÚT ĐẶC BIỆT**
- Dễ khiến **NGƯỜI TRÊN KẺ DƯỚI THƯƠNG MẾN**
- Tính tình **VUI VẺ, CỞI MỞ**
- Lời ăn tiếng nói **KHÉO LÉO**
- Có **NÉT DUYÊN NGẦM** khó lẫn

**Phù hợp:**
- Công việc cần **GIAO TIẾP, THƯƠNG LƯỢNG**
- **TIẾP TÂN, NGOẠI GIAO, ĐẠI DIỆN THƯƠNG MẠI**

**Cảnh báo:**
- Đi cùng **SÁT TINH**: sự nổi bật quá mức trở thành **CON DAO HAI LƯỠI**
- Mang đến **THỊ PHI, RẮC RỐI** không đáng có`,
  },

  {
    id: 'hoa-cai-no-boc-ban-be-quyen-the',
    title: 'Hoa Cái tại Nô Bộc - Bạn bè quyền thế',
    sao: ['Hoa Cái'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Hoa Cái tại Nô Bộc** — bạn bè đa số là **QUYỀN THẾ, GIÀU CÓ, GIỎI GIANG**.

**Đặc trưng:**
- Đi đâu cũng có người **LĂN XẢ GIÚP ĐỠ**
- **HẾT LÒNG HẬU THUẪN** như cánh tay phải đắc lực
- Trong môi trường **NGHỆ THUẬT, GIẢI TRÍ**: hay có cơ duyên gặp **NGƯỜI
  NỔI TIẾNG**

**Gặp thêm cát tinh:**
- Vận **QUÝ NHÂN** càng mạnh
- Mối quan hệ trở thành **BỆ PHÓNG** giúp sự nghiệp + tài chính thăng hoa`,
  },

  {
    id: 'hoa-cai-tat-ach-truc-giac-nhay-ben',
    title: 'Hoa Cái tại Tật Ách - Trực giác nhạy bén',
    sao: ['Hoa Cái'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `**Hoa Cái tại Tật Ách** — như được trời trao **"CON MẮT THỨ BA"**.

**Đặc trưng:**
- **TRỰC GIÁC NHẠY BÉN**
- Dễ cảm nhận điều **HUYỀN BÍ**
- Có **GIẤC MƠ LINH ỨNG**
- Dấu hiệu **CĂN SỐ TÂM LINH**, nhất là khi có thêm các sao huyền diệu

**Cảnh báo bệnh tình:**
- Liên quan **BỆNH TÌNH DỤC, SỨC KHỎE SINH LÝ**
- Đặc biệt khi hội cùng **ĐÀO HOA, THIÊN RIÊU, MỘC DỤC**
- Gặp sát tinh: bệnh **ÂM Ỉ, KHÓ KIỂM SOÁT, MÃN TÍNH**
- Nên chú trọng **PHÒNG BỆNH TỪ SỚM**`,
  },

  {
    id: 'hoa-cai-tat-ach-dao-rieu-moc-duc',
    title: 'Hoa Cái + Đào Hoa/Thiên Riêu/Mộc Dục tại Tật Ách - Bệnh sinh lý',
    sao: ['Hoa Cái'],
    cung: ['Tật Ách'],
    ketHop: ['Đào Hoa', 'Thiên Riêu', 'Mộc Dục'],
    doUuTien: 65,
    tomTat: `**Hoa Cái + Đào Hoa - Thiên Riêu - Mộc Dục tại Tật Ách** — cảnh báo
**BỆNH TÌNH DỤC, SỨC KHỎE SINH LÝ**.

**Đặc trưng:**
- Bệnh **SINH LÝ, TÌNH DỤC**
- Gặp thêm sát tinh: **ÂM Ỉ, KHÓ KIỂM SOÁT, MÃN TÍNH**
- Cần phòng bệnh sớm`,
  },

  {
    id: 'hoa-cai-tai-bach-ham-kiem-tien',
    title: 'Hoa Cái tại Tài Bạch - Ham kiếm tiền',
    sao: ['Hoa Cái'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Hoa Cái tại Tài Bạch** — **SAY MÊ KIẾM TIỀN**.

**Đặc trưng:**
- Sống theo phương châm **"ĐÃ BƯỚC LÀ PHẢI TIẾN"**
- **KHÔNG BAO GIỜ BẰNG LÒNG VỚI HIỆN TẠI**
- Có **CỦA ĐỂ DÀNH KÍN ĐÁO** trong nhà
- Dưới quyền có người phụ giúp tạo **NGUỒN THU ỔN ĐỊNH**

**Cảnh báo:**
- Quá tập trung sự nghiệp dễ **BỎ QUÊN GIA ĐÌNH**
- Đặc biệt **ÍT CHĂM SÓC CON CÁI**`,
  },

  {
    id: 'hoa-cai-tai-bach-thien-ma-loc-ton-hoa-loc',
    title: 'Hoa Cái + Thiên Mã/Lộc Tồn/Hóa Lộc tại Tài Bạch - Sinh lời mạnh',
    sao: ['Hoa Cái'],
    cung: ['Tài Bạch'],
    ketHop: ['Thiên Mã', 'Lộc Tồn', 'Hóa Lộc'],
    doUuTien: 70,
    tomTat: `**Hoa Cái + Thiên Mã - Lộc Tồn - Hóa Lộc tại Tài Bạch** — bộ sao **TÀI LỘC
ĐẦY ĐỦ**.

**Đặc trưng:**
- Dễ **NẮM BẮT CƠ HỘI TỐT** để sinh lời
- **TIỀN BẠC RỦNG RỈNH**
- Có **NGUỒN THU ỔN ĐỊNH**
- Tài chính **VỮNG VÀNG**`,
  },

  {
    id: 'hoa-cai-tu-tuc-con-thong-minh',
    title: 'Hoa Cái tại Tử Tức - Con cái thông minh',
    sao: ['Hoa Cái'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Hoa Cái tại Tử Tức** — con cái bộc lộ **TƯ CHẤT THÔNG MINH** từ nhỏ.

**Đặc trưng:**
- Con cái **THÔNG MINH, GIỎI GIANG, CÓ CHÍ TIẾN THỦ** từ nhỏ
- Kinh tế vững vàng giúp con hưởng **ĐIỀU KIỆN TỐT**
- Phát triển trong **HỌC HÀNH và SỰ NGHIỆP**

**Cảnh báo - con dao hai lưỡi:**
- Cha mẹ **NUÔNG CHIỀU QUÁ MỨC**: **YÊU QUÁ HÓA HƯ CON**
- Con thêm phần **BƯỚNG BỈNH, KHÓ BẢO**
- Trưởng thành có xu hướng **SỐNG ĐỘC LẬP**, ít dựa gia đình
- Cha mẹ **KHÓ ĐƯỢC NƯƠNG NHỜ** về sau`,
  },

  {
    id: 'hoa-cai-phuc-duc-goc-phuc-vung',
    title: 'Hoa Cái tại Phúc Đức - Gốc phúc vững chắc',
    sao: ['Hoa Cái'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `**Hoa Cái tại Phúc Đức** — tựa **NGỌN ĐÈN TỔ** soi sáng cả gia tộc.

**Đặc trưng:**
- **MỒ MẢ DÒNG HỌ YÊN ẤM** ở thế đất đẹp, **PHONG THỦY THUẬN**
- Tạo **GỐC PHÚC VỮNG CHÃI** cho con cháu đời sau
- Gia phả xuất hiện những bậc **HIỂN ĐẠT, VINH QUY BÁI TỔ**
- Để lại **DANH THƠM BẢNG VÀNG**

**Phúc phần:**
- Con cháu đời sau thêm **SÁNG DẠ, THÔNG TUỆ**
- Sớm **ĐỊNH HƯỚNG TƯƠNG LAI**, dễ đạt thành tựu

**Cảnh báo:**
- Gặp sao xấu: dòng họ **PHÁT SINH MÂU THUẪN**
- Phúc khí **DẦN MAI MỘT**`,
  },

  {
    id: 'hoa-cai-phuc-duc-ta-huu-xuong-khuc',
    title: 'Hoa Cái + Tả Phù/Hữu Bật/Văn Xương/Văn Khúc tại Phúc Đức - Đèn tổ soi sáng',
    sao: ['Hoa Cái'],
    cung: ['Phúc Đức'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc'],
    doUuTien: 68,
    tomTat: `**Hoa Cái + Tả Phù - Hữu Bật + Văn Xương - Văn Khúc tại Phúc Đức** — **NGỌN
ĐÈN TỔ** soi sáng dòng họ.

**Đặc trưng:**
- Dòng tộc có thêm **NHIỀU NGƯỜI TÀI GIỎI**
- Có người đạt **ĐỊA VỊ CAO**
- **LÀM RẠNG DANH GIA ĐÌNH**
- Phúc đức truyền nhiều đời`,
  },

  {
    id: 'hoa-cai-huynh-de-anh-em-cham-chi',
    title: 'Hoa Cái tại Huynh Đệ - Anh em chăm chỉ chịu khó',
    sao: ['Hoa Cái'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Hoa Cái tại Huynh Đệ** — anh em **CHĂM CHỈ, CHỊU KHÓ và CÓ KHÍ CHẤT HƠN
NGƯỜI**.

**Đặc trưng:**
- Mối quan hệ trên dưới **THUẬN HÒA**
- **NHIỀU NGƯỜI THÀNH ĐẠT**
- Sẵn lòng **GIÚP ĐỠ NHAU** khi gặp khó khăn`,
  },

  {
    id: 'hoa-cai-huynh-de-ta-huu-khang-khit',
    title: 'Hoa Cái + Tả Phù/Hữu Bật tại Huynh Đệ - Anh em khăng khít',
    sao: ['Hoa Cái'],
    cung: ['Huynh Đệ'],
    ketHop: ['Tả Phù', 'Hữu Bật'],
    doUuTien: 68,
    tomTat: `**Hoa Cái + Tả Phù - Hữu Bật tại Huynh Đệ** — tăng thêm **SỰ KHĂNG KHÍT** ruột thịt.

**Đặc trưng:**
- "Anh em như thể tay chân, rách lành đùm bọc, dở hay đỡ đần"
- Mối quan hệ **GẮN BÓ KEO SƠN**
- Đùm bọc lẫn nhau khi khó khăn`,
  },
];
