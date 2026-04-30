import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO LÂM QUAN - Kim, Cát Tinh + Quyền Quý.
 *
 * Vị trí THỨ 4 trong Vòng Trường Sinh 12 sao:
 *   Trường Sinh → Mộc Dục → Quan Đới → LÂM QUAN → Đế Vượng → Suy →
 *   Bệnh → Tử → Mộ → Tuyệt → Thai → Dưỡng
 *
 * An theo CỤC, thuộc nhóm sao Bắc Đẩu.
 *
 * Đặc trưng:
 *   - Giai đoạn BẮT ĐẦU TRƯỞNG THÀNH, BƯỚC RA ĐỜI
 *   - Hành động làm việc phục vụ bản thân và xã hội
 *   - Chủ về QUYỀN QUÝ, BỔNG LỘC, THĂNG TIẾN
 *   - Tính chất: KIÊU NGẠO, KHOE KHOANG, TỰ PHỤ (do mới có thành tựu đầu tiên)
 *   - Hình tượng: CỔ, THANH QUẢN, VÒM HỌNG, TUYẾN GIÁP
 *   - Tính chất: tương tự HÓA LỘC nhưng nhẹ hơn — chủ bổng lộc và hưởng thụ
 *   - KHUẾCH ĐẠI tính chất các sao đi cùng (giống như Trường Sinh)
 */
export const luanGiai_LamQuan: DoanLuanGiai[] = [
  {
    id: 'lam-quan-tinh-chat-chung',
    title: 'Lâm Quan - Đặc tính chung',
    sao: ['Lâm Quan'],
    doUuTien: 33,
    tomTat: `**Lâm Quan** — phụ tinh **CÁT TINH + QUYỀN QUÝ**, vị trí **THỨ 4** vòng
Trường Sinh.

**Ngũ hành:** **Kim**. **Chòm:** Bắc Đẩu.

⚡ **Đặc tính:**
- Giai đoạn **BẮT ĐẦU TRƯỞNG THÀNH, BƯỚC RA ĐỜI**
- Chủ về **QUYỀN QUÝ, BỔNG LỘC, THĂNG TIẾN**
- Hình tượng: **CỔ, THANH QUẢN, VÒM HỌNG, TUYẾN GIÁP**

⚡ **Vai trò:**
- Đứng sau Quan Đới, trước Đế Vượng
- Là sao **HỖ TRỢ MẠNH MẼ** — KHUẾCH ĐẠI tính chất các sao đi cùng
- Tương tự **HÓA LỘC** nhẹ — chủ bổng lộc, hưởng thụ

⚡ **Tính cách hai mặt:**
- ✅ Mặt tốt: thành đạt, có chí tiến thủ, chăm chỉ, có địa vị
- ⚠️ Mặt xấu: **KIÊU NGẠO, KHOE KHOANG, TỰ PHỤ** (do bắt đầu có thành tựu)
- ⚠️ Khoe khoang khi ở với người thân — kín kẽ thận trọng khi gặp người lạ`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP TỐT
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'lam-quan-thien-ma-thang-tien',
    title: 'Lâm Quan + Thiên Mã - Thăng tiến nhanh, bôn ba phát đạt',
    sao: ['Lâm Quan'],
    ketHop: ['Thiên Mã'],
    doUuTien: 65,
    tomTat: `**Lâm Quan + Thiên Mã** — cách cục **RẤT ĐẸP**, tượng trưng cho **THĂNG
TIẾN NHANH, BÔN BA MÀ PHÁT ĐẠT**.

⚡ **Phân tích:**
- **Lâm Quan** = bổng lộc, chức quyền
- **Thiên Mã** = động lực, di chuyển, giao thương
- Hai sao kết hợp = **VỪA CHĂM CHỈ VỪA GẶP THỜI**

⚡ **Đặc trưng:**
- **TIỀN TÀI VÀ DANH VỌNG** đều tăng mạnh
- Chủ về **GIAO THƯƠNG, BUÔN BÁN TỐT**
- Trở nên **GIÀU CÓ**
- Mệnh tạo gặp **THUẬN LỢI** trong việc kiếm tiền`,
  },

  {
    id: 'lam-quan-khoi-viet-chuc-cao',
    title: 'Lâm Quan + Khôi Việt - Chức cao quyền lực',
    sao: ['Lâm Quan'],
    ketHop: ['Thiên Khôi', 'Thiên Việt'],
    doUuTien: 65,
    tomTat: `**Lâm Quan + Thiên Khôi + Thiên Việt** — đương số dễ **ĐỨNG Ở VỊ TRÍ CAO**,
được tín nhiệm.

⚡ **Đặc trưng:**
- Chủ về người có **VỊ TRÍ CAO TRONG XÃ HỘI**
- Có **TIẾNG NÓI VÀ QUYỀN LỰC** trong tập thể
- Được **TÍN NHIỆM**
- Dễ **LÀM ĐẾN CHỨC CAO**, có địa vị`,
  },

  {
    id: 'lam-quan-truong-sinh-de-vuong-nhan-duc',
    title: 'Lâm Quan + Trường Sinh + Đế Vượng - Nhân đức tích phúc',
    sao: ['Lâm Quan'],
    ketHop: ['Trường Sinh', 'Đế Vượng'],
    doUuTien: 65,
    tomTat: `**Lâm Quan + Trường Sinh + Đế Vượng** — thế **BỀN VỮNG**, người có **NHÂN
ĐỨC, BIẾT TÍCH PHÚC**.

⚡ **Đặc trưng:**
- Sinh-Vượng-Mộ tam hợp + Lâm Quan đỉnh cao
- Hậu vận **GIÀU SANG LÂU DÀI**
- Có **NHÂN ĐỨC** ăn ở
- Biết **TÍCH PHÚC** cho con cháu

⚡ **Phối thêm Hóa Lộc, Lộc Tồn:**
- Tiền bạc càng **DỒI DÀO**
- Cuộc sống **SUNG TÚC SUỐT ĐỜI**`,
  },

  {
    id: 'lam-quan-that-sat-pha-quan-nhieu-nghe',
    title: 'Lâm Quan + Thất Sát + Phá Quân - Nhiều nghề cùng lúc',
    sao: ['Lâm Quan'],
    ketHop: ['Thất Sát', 'Phá Quân'],
    doUuTien: 55,
    tomTat: `**Lâm Quan + Thất Sát / Phá Quân** — thích làm **NHIỀU NGHỀ, NHIỀU ĐẦU
VIỆC** khác nhau cùng một lúc.

⚡ **Đặc trưng:**
- Năng lượng dồi dào, không chịu ngồi yên
- Khả năng đảm đương nhiều mặt trận
- Hợp các nghề **CHỦ ĐỘNG** — kinh doanh, tự doanh, môi giới
- Cẩn thận: **CHỌN VIỆC KỸ** kẻo tham nhiều mà không sâu`,
  },

  {
    id: 'lam-quan-dao-hoa-phuc-vu-khac-phai',
    title: 'Lâm Quan + Đào Hoa - Phục vụ khác phái',
    sao: ['Lâm Quan'],
    ketHop: ['Đào Hoa'],
    doUuTien: 50,
    tomTat: `**Lâm Quan + Đào Hoa** — mệnh tạo thích làm những việc **PHỤC VỤ NGƯỜI
KHÁC PHÁI**.

⚡ **Đặc trưng:**
- Hợp các công việc **GẶP GỠ NHIỀU NGƯỜI KHÁC PHÁI**
- Dễ **PHÁT ĐẠT NHỜ** các công việc này
- Hợp ngành: dịch vụ làm đẹp, spa, thời trang nữ/nam, MC, lễ tân, sales
  giao tiếp khách hàng

⚡ **Lưu ý:** cần Tứ Đức + Quan Phúc giảm bớt tính dâm tình của Đào Hoa.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP XẤU
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'lam-quan-khong-kiep-kinh-da-gian-doi',
    title: 'Lâm Quan + Không Kiếp + Kình Đà - Khoe mẽ gian dối',
    sao: ['Lâm Quan'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Kình Dương', 'Đà La'],
    doUuTien: 60,
    tomTat: `⚠️ **Lâm Quan + Địa Không + Địa Kiếp + Kình Dương + Đà La** — tính khoe
khoang biến thành **GIAN DỐI, LẺO MÉP, MÁNH KHÓE**.

⚠️ **Đặc trưng:**
- Dùng **MÁNH KHÓE** để tạo hình ảnh **GIẢ TẠO**
- **GIAN DỐI**, lừa lọc
- **LẺO MÉP**, nói nhiều mà không có thực chất
- Công danh đang lên có thể **SỤT GIẢM** vì chính sự kiêu ngạo và **LỜI NÓI
  SƠ HỞ**

⚠️ **Hệ quả:**
- Dễ gặp **TAI ƯƠNG, RỦI RO**
- **PHÁ TÁN** sự nghiệp đang lên`,
  },

  {
    id: 'lam-quan-moc-duc-an-choi',
    title: 'Lâm Quan + Mộc Dục - Sa vào ăn chơi làm dáng',
    sao: ['Lâm Quan'],
    ketHop: ['Mộc Dục'],
    doUuTien: 55,
    tomTat: `⚠️ **Lâm Quan + Mộc Dục** — quá chú trọng **NGOẠI HÌNH**, dễ sa vào ăn chơi.

⚡ **Đặc trưng:**
- Quá chú trọng **NGOẠI HÌNH**
- Dễ **SA VÀO ĂN CHƠI**, làm dáng
- **THIẾU THỰC CHẤT**
- Bổng lộc Lâm Quan thành phù hoa hưởng thụ

⚡ **Hóa giải:** Tứ Đức, Quan Phúc, Tử Vi giảm bớt phù phiếm.`,
  },

  {
    id: 'lam-quan-bai-tinh-cong-danh-sup',
    title: 'Lâm Quan + nhiều bại tinh - Công danh sụp vì kiêu ngạo',
    sao: ['Lâm Quan'],
    ketHop: ['Tiểu Hao', 'Đại Hao', 'Tang Môn', 'Bạch Hổ'],
    doUuTien: 55,
    tomTat: `⚠️ **Lâm Quan + nhiều bại tinh** — công danh đang lên có thể **SỤT GIẢM**.

⚡ **Đặc trưng:**
- Vì chính **SỰ KIÊU NGẠO**
- **LỜI NÓI SƠ HỞ**
- Đắc tội vì khoe khoang
- Thị phi vây quanh

⚡ **Đặc biệt nguy hiểm khi đi cùng hung sát tinh** — gặp những **RẮC RỐI
TRONG ĐỜI SỐNG, CÔNG VIỆC** gây ảnh hưởng đến cuộc sống.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // LÂM QUAN TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'lam-quan-tai-menh',
    title: 'Lâm Quan tại Mệnh',
    sao: ['Lâm Quan'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `**Lâm Quan thủ Mệnh** — biểu tượng của **THÀNH ĐẠT, CẦN MẪN**, mang dáng
vẻ người có địa vị.

⚡ **Tướng mạo:**
- **CAO TO, VẠM VỠ**
- Phong thái **KHỎE KHOẮN**, toát lên vẻ **UY NGHI** và sinh lực mạnh
- Chú trọng **VẺ BỀ NGOÀI**, thích **LÀM ĐẸP, LÀM ĐIỆU**
- Nói năng **KIỂU CÁCH**

⚡ **Tính cách:**
- **HAM DANH VỌNG**, khao khát địa vị
- Rất **COI TRỌNG THỂ DIỆN**
- Tự trọng cao — giữ hình ảnh tốt
- **TỰ PHỤ, KHOE KHOANG** (mặt trái) — hay khoe thành quả
- **CẦN MẪN, CÓ TRÁCH NHIỆM** (mặt phải) — chăm chỉ làm việc, bền bỉ
- **KHÓ CHẤP NHẬN TỤT LÙI**

⚡ **Đặc biệt - giao tiếp 2 mặt:**
- Với **NGƯỜI THÂN QUEN**: nói nhiều, thích kể chuyện, khoe thành tích, thể
  hiện cái tôi
- Với **NGƯỜI LẠ / MÔI TRƯỜNG CHÍNH THỨC**: kín kẽ, thận trọng, dè dặt,
  giữ kẽ hình ảnh

⚡ **Sự nghiệp:**
- Sự nghiệp đi lên **RÕ RỆT** ở giai đoạn **TRUNG VẬN**
- Tư duy **LÀM CHỦ**, thích nắm quyền, điều hành
- Hợp **VỊ TRÍ QUẢN LÝ, LÃNH ĐẠO**
- Được **GIA ĐÌNH NÂNG ĐỠ**, gặp cấp trên trao cơ hội

⚡ **Tài lộc:**
- Có **CỦA ĂN CỦA ĐỂ**, ít thiếu thốn
- **HƯỞNG THỤ TỪ ĐỊA VỊ, CHỨC DANH**
- Thích **PHÔ DIỄN GIÀU SANG** qua ăn mặc, nhà cửa, phương tiện

⚠️ **Mặt cảnh báo:**
- **KIÊU NGẠO** khơi dậy đố kỵ thị phi
- Cần **HỌC KHIÊM TỐN, GIỮ CẦN MẪN**`,
  },

  {
    id: 'lam-quan-tai-menh-hon-nhan-xung-doi',
    title: 'Lâm Quan tại Mệnh - Hôn nhân xứng đôi vừa lứa',
    sao: ['Lâm Quan'],
    cung: ['Mệnh'],
    doUuTien: 60,
    tomTat: `**Lâm Quan tại Mệnh** — hôn nhân **XỨNG ĐÔI VỪA LỨA**.

⚡ **Đặc trưng:**
- Coi trọng **ĐỊA VỊ, HÌNH THỨC, GIA PHONG**
- Bạn đời thường là người có **HỌC THỨC, NỀ NẾP**
- Hoặc **XUẤT THÂN TƯƠNG XỨNG**
- Gia đình mang dáng vẻ **CHỈN CHU, QUY CỦ**, có phần kiểu cách

⚠️ **Cảnh báo:**
- Quá coi trọng **THỂ DIỆN VÀ HÌNH ẢNH BÊN NGOÀI**
- Đời sống vợ chồng đôi khi **CĂNG THẲNG VÀ THIẾU TỰ NHIÊN**
- Hai người có xu hướng **GIỮ KẼ**
- Phô bày hạnh phúc với thiên hạ nhiều hơn **CHIA SẺ CẢM XÚC THẬT**
- Nếu không khéo sẽ tạo ra **KHOẢNG CÁCH TRONG NỘI TÂM**`,
  },

  {
    id: 'lam-quan-tai-menh-suc-khoe-co',
    title: 'Lâm Quan tại Mệnh - Sức khỏe vùng cổ',
    sao: ['Lâm Quan'],
    cung: ['Mệnh'],
    doUuTien: 58,
    tomTat: `**Lâm Quan tại Mệnh** — cần **CHÚ TRỌNG VÙNG CỔ**.

⚡ **Hình tượng vùng cổ:**
- Lâm Quan gắn với **CỔ, HỌNG, THANH QUẢN, TUYẾN GIÁP, GÁY**
- Cần lưu ý các bệnh: **VIÊM HỌNG, AMIDAN, U TUYẾN GIÁP, ĐAU GÁY, THOÁI HOÁ
  ĐỐT SỐNG CỔ**

⚡ **Hợp cát tinh:** Sức khỏe nhìn chung **BỀN BỈ**.

⚠️ **Hội nhiều sát tinh** (Hỏa Linh, Kình Đà, Hóa Kỵ):
- Bệnh tật khu vực này dễ **DIỄN BIẾN PHỨC TẠP**
- **KHÓ DỨT**`,
  },

  {
    id: 'lam-quan-tai-phu-mau',
    title: 'Lâm Quan tại Phụ Mẫu',
    sao: ['Lâm Quan'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Lâm Quan tại Phụ Mẫu** — cha mẹ **THÀNH ĐẠT, CÓ CHỨC VỊ**.

⚡ **Đặc trưng:**
- Cha mẹ **THÀNH ĐẠT**, có chức vị
- Là người **KHÉO ĂN NÓI**, thích **KỂ CHUYỆN**
- Hợp âm dương thuận lý:
  - Trong nhà **PHÚC ĐỨC DỒI DÀO**
  - Có **NGƯỜI LÀM QUAN**
  - **DÒNG HỌ GIÀU CÓ**
  - Gia đình **NGƯỜI HÔN PHỐI** của mệnh tạo cũng có điều kiện`,
  },

  {
    id: 'lam-quan-tai-phuc-duc',
    title: 'Lâm Quan tại Phúc Đức',
    sao: ['Lâm Quan'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `**Lâm Quan tại Phúc Đức** — gia tộc **PHÁT PHƯỚC**, dòng họ thành đạt.

⚡ **Cát tinh hội:**
- Gia tộc được **PHÁT PHƯỚC**
- Trong dòng tộc nhiều người **THÀNH ĐẠT, LÀM QUAN TO, GIÀU CÓ**
- Phúc khí tổ tiên dày
- Đời con cháu hưởng dư phúc`,
  },

  {
    id: 'lam-quan-tai-quan-loc',
    title: 'Lâm Quan tại Quan Lộc',
    sao: ['Lâm Quan'],
    cung: ['Quan Lộc'],
    doUuTien: 80,
    tomTat: `**Lâm Quan tại Quan Lộc** — vị trí **HỢP CÁCH**, đường công danh tốt đẹp.

⚡ **Đặc trưng:**
- Đường công danh **TỐT ĐẸP**
- Thường xuyên **RA VÀO NHỮNG NƠI QUYỀN QUÝ**
- Dễ làm **THAM MƯU, PHỤ TÁ** cho người có quyền cao chức trọng
- **THỊNH PHÁT** — có cả **DANH VỌNG LẪN VINH HOA**
- Sống **PHONG LƯU, GIÀU CÓ**
- Là người **LƯƠNG THIỆN, KHIÊM TỐN, CAO THƯỢNG**

⚡ **Cát tinh sáng sủa hội:**
- **PHÁT ĐẠT TỪ SỚM**, cuộc sống vui vẻ
- **GIỎI ĂN NÓI** → hợp **NGOẠI GIAO, BUÔN BÁN**

⚠️ **Sát bại tinh, ám tinh hội:**
- Gặp **PHIỀN NHIỄU**
- **NGĂN TRỞ** trong công việc`,
  },

  {
    id: 'lam-quan-tai-dien-trach',
    title: 'Lâm Quan tại Điền Trạch',
    sao: ['Lâm Quan'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Lâm Quan tại Điền Trạch** — **NHIỀU ĐẤT ĐAI, NHÀ CỬA, TÀI SẢN**.

⚡ **Đặc trưng:**
- **NHIỀU ĐẤT ĐAI, NHÀ CỬA, TÀI SẢN**
- Đất đai, nhà cửa **RỘNG RÃI**
- Nhà được **TRANG HOÀNG ĐẸP ĐẼ**
- Là **NIỀM TỰ HÀO** của đương số

⚡ **Cát tinh hội:**
- Càng **DƯ DẢ** về tiền bạc, tài sản
- Nhà cửa khang trang đầy đủ tiện nghi`,
  },

  {
    id: 'lam-quan-tai-no-boc',
    title: 'Lâm Quan tại Nô Bộc',
    sao: ['Lâm Quan'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Lâm Quan tại Nô Bộc** — **NHIỀU BẠN BÈ THÀNH ĐẠT, NỔI DANH**.

⚡ **Đặc trưng:**
- Có **NHIỀU BẠN BÈ THÀNH ĐẠT, NỔI DANH**
- Được **NHIỀU NGƯỜI BIẾT ĐẾN**
- Mạng lưới quan hệ rộng và chất lượng

⚠️ **Sát bại tinh hội:**
- Bạn bè thích **GIAN DỐI, ĂN CHƠI ĐUA ĐÒI**
- Bị **NHIỄM TÍNH XẤU** của bạn bè`,
  },

  {
    id: 'lam-quan-tai-thien-di',
    title: 'Lâm Quan tại Thiên Di',
    sao: ['Lâm Quan'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Lâm Quan tại Thiên Di** — **KHÉO ĂN KHÉO NÓI**, ra ngoài được yêu quý.

⚡ **Đặc trưng:**
- **KHÉO ĂN KHÉO NÓI**
- Ra ngoài được **MỌI NGƯỜI YÊU QUÝ**
- Gặp **NGƯỜI THÀNH ĐẠT** và học tập được nhiều thứ từ họ

⚡ **Đặc trưng nghịch lý ở nhà ↔ ra ngoài:**
- Lúc **Ở NHÀ**: ít nói, **ÂM TRẦM, ÍT CHIA SẺ** với người thân
- Khi **RA NGOÀI**: kín kẽ nhưng hoạt bát, biết che giấu cái xấu`,
  },

  {
    id: 'lam-quan-tai-tat-ach',
    title: 'Lâm Quan tại Tật Ách',
    sao: ['Lâm Quan'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `**Lâm Quan tại Tật Ách** — bệnh **CỔ, CUỐNG HỌNG, VÒM HỌNG**.

⚡ **Hình tượng:**
- Lâm Quan tượng trưng cho **VÙNG CỔ**
- Cần đề phòng các bệnh:
  - **CỔ, CUỐNG HỌNG, VÒM HỌNG**
  - **VIÊM AMIDAN, U TUYẾN GIÁP**
  - **ĐAU GÁY, THOÁI HÓA ĐỐT SỐNG CỔ**

⚠️ **Đặc biệt:**
- Lâm Quan ở Tật Ách dễ biểu hiện cho người **MẮC NHIỀU BỆNH CÙNG LÚC**
- Cần kiểm tra sức khỏe định kỳ`,
  },

  {
    id: 'lam-quan-tai-tai-bach',
    title: 'Lâm Quan tại Tài Bạch',
    sao: ['Lâm Quan'],
    cung: ['Tài Bạch'],
    doUuTien: 80,
    tomTat: `**Lâm Quan tại Tài Bạch** — cách cục **ĐẸP**, số lượng tiền tài, của cải
**NHIỀU**.

⚡ **Đặc trưng:**
- **TIỀN TÀI, CỦA CẢI NHIỀU**
- Cát tinh hội → **TĂNG VẺ ĐẸP** cung Tài Bạch

⚡ **Lâm Quan + Thiên Mã đồng cung:**
- **THUẬN LỢI** trong việc kiếm tiền
- Chủ về **GIAO THƯƠNG, BUÔN BÁN TỐT**
- Trở nên **GIÀU CÓ**

⚡ **Hợp tích lũy:** ngôi sao giúp **TÍCH LŨY** từ địa vị, danh tiếng và bổng
lộc — không chỉ kiếm mà còn biết **HƯỞNG THỤ**.`,
  },

  {
    id: 'lam-quan-tai-tu-tuc',
    title: 'Lâm Quan tại Tử Tức',
    sao: ['Lâm Quan'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Lâm Quan tại Tử Tức** — con cái **ĐÔNG, THÀNH DANH**.

⚡ **Cát tinh hội:**
- **ĐÔNG CON CÁI**
- Con cái **THÀNH DANH**
- **KHÉO ĂN NÓI**
- Là **NIỀM TỰ HÀO** của cha mẹ`,
  },

  {
    id: 'lam-quan-tai-phu-the',
    title: 'Lâm Quan tại Phu Thê',
    sao: ['Lâm Quan'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `**Lâm Quan tại Phu Thê** — người hôn phối **THÀNH ĐẠT, KHÉO ĂN NÓI**.

⚡ **Đặc trưng:**
- Người hôn phối dễ là người **THÀNH ĐẠT**
- **KHÉO ĂN NÓI**, được lòng mọi người

⚠️ **Mặt trái:**
- Tính tình có phần **TỰ MÃN, KIÊU NGẠO NGẦM**
- Dễ dẫn đến việc người hôn phối **XEM THƯỜNG MỆNH TẠO**
- Trong cuộc sống gia đình, **NGƯỜI HÔN PHỐI NẮM QUYỀN** và đưa ra những
  **QUYẾT ĐỊNH QUAN TRỌNG**

⚡ **Phối thêm cát tinh** (Khôi Việt, Thanh Long, Quang Quý): cân bằng quyền
lực, hôn nhân hạnh phúc.`,
  },

  {
    id: 'lam-quan-tai-huynh-de',
    title: 'Lâm Quan tại Huynh Đệ',
    sao: ['Lâm Quan'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Lâm Quan tại Huynh Đệ** — trong nhà **NHIỀU ANH CHỊ EM**, có người thành
đạt.

⚡ **Đặc trưng:**
- Trong nhà **NHIỀU ANH CHỊ EM**
- Anh em dễ có người **THÀNH ĐẠT**

⚠️ **Đặc biệt:**
- Nếu mệnh tạo là **CON TRƯỞNG** trong nhà
- Mệnh tạo dễ bị **CÁC EM TRANH QUYỀN**
- Hoặc có **NGƯỜI KHÁC GÁNH VÁC TRÁCH NHIỆM** thay`,
  },
];
