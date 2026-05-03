import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO MỘC DỤC - Thủy, Dâm Tinh nhỏ.
 *
 * Vị trí THỨ 2 trong Vòng Trường Sinh 12 sao:
 * Trường Sinh: MỘC DỤC: Quan Đới: Lâm Quan: Đế Vượng: Suy
 * Bệnh: Tử: Mộ: Tuyệt: Thai: Dưỡng
 *
 * An theo CỤC, đứng sau Trường Sinh 1 cung.
 *
 * Đặc trưng:
 * - Là phụ tinh nhưng không có nhiều ý nghĩa (DÂM TINH NHỎ)
 * - Tượng "tuổi dậy thì, mới lớn"
 * - Hay thay đổi, chí không bền, cả thèm chóng chán
 * - Chú trọng vẻ bề ngoài (tắm rửa, chưng diện, làm dáng)
 */
export const luanGiai_MocDuc: DoanLuanGiai[] = [
  {
    id: 'moc-duc-tinh-chat-chung',
    title: 'Mộc Dục - Đặc tính chung',
    sao: ['Mộc Dục'],
    doUuTien: 32,
    tomTat: `**Mộc Dục** — phụ tinh **DÂM TINH NHỎ**, vị trí **THỨ 2** vòng Trường Sinh.

**Ngũ hành:** **Thủy**.

**Đặc tính:**
- **Tuổi dậy thì, mới lớn**, nông nổi
- **Tắm rửa, chưng diện, phô trương, làm dáng**
- Quan trọng **VẺ BỀ NGOÀI**
- **Xác thịt, lông tóc**
- **Phong lưu, nhàn hạ**

**Vai trò trong vòng Trường Sinh:**
- Đứng sau Trường Sinh 1 cung
- Tượng **GIAI ĐOẠN MỚI LỚN** sau khi sinh ra
- Là **DÂM TINH NHỎ** (không mạnh như Đào Hoa, Tham Lang, Thiên Riêu)

**Khái quát:**
- Phụ tinh **KHÔNG CÓ NHIỀU Ý NGHĨA** độc lập
- Nhưng ảnh hưởng không nhỏ đến tính cách và một số khía cạnh đời sống
- Đặc biệt rõ rệt với **MỆNH VÔ CHÍNH DIỆU**`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'moc-duc-vcd-quan-diem-khong-vung',
    title: 'Mệnh VCD + Mộc Dục - Quan điểm không vững',
    sao: ['Mộc Dục'],
    cung: ['Mệnh'],
    doUuTien: 65,
    tomTat: `**Mệnh Vô Chính Diệu nằm tại đất Mộc Dục** — đặc tính **HAY THAY ĐỔI** càng
nổi bật.

**Đặc trưng:**
- Trở thành người **QUAN ĐIỂM KHÔNG RÕ RÀNG**, hay thay đổi
- Dễ bị **MÔI TRƯỜNG BÊN NGOÀI TÁC ĐỘNG** làm lung lay
- Hay **BỎ DỞ CÔNG VIỆC**

**Học hành:**
- Thường **GIÁN ĐOẠN**
- Dù có học cũng **KHÔNG ĐỖ**
- Hay **THAY ĐỔI NGÀNH HỌC**
- Hoặc đổi nghề mà **DỞ DỞ DANG DANG**

**Cảnh báo:** Đây là cách cục **ĐẶC BIỆT XẤU** với người Mệnh VCD —
cần có sao Phúc Thiện đi cùng (Quan Phúc, Quang Quý, Tứ Đức) để giảm bớt.`,
  },

  {
    id: 'moc-duc-van-tinh-quang-quy-dong-y',
    title: 'Mộc Dục + Văn Xương + Khôi Việt + Quang Quý - Đông y',
    sao: ['Mộc Dục'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Ân Quang'],
    doUuTien: 55,
    tomTat: `**Mộc Dục + Văn Xương + Văn Khúc + Khôi Việt + Tả Hữu + Ân Quang + Thiên
Quý** — thành công trong **Y KHOA, ĐẶC BIỆT ĐÔNG Y**.

**Phân tích bộ sao:**
- **Văn Xương + Văn Khúc** = trí tuệ chuyên môn
- **Khôi Việt** = quý nhân nâng đỡ
- **Quang Quý** = phúc tinh quý nhân
- **Mộc Dục** (Thủy) = đặc tính dưỡng sinh, thảo dược
- **Tả Hữu** = trợ lực được người tin cậy

**Đặc trưng:**
- Khả năng **THÀNH CÔNG TRONG Y KHOA**
- Đặc biệt phù hợp **ĐÔNG Y, YHCT, DƯỠNG SINH**
- Bộ này hóa giải được tính dâm của Mộc Dục thành **DƯỠNG SINH HỌC**`,
  },

  {
    id: 'moc-duc-dao-hong-rieu-sat-trang-hoa',
    title: 'Mộc Dục + Đào Hồng + Riêu + sát tinh - Trăng hoa ham muốn',
    sao: ['Mộc Dục'],
    ketHop: ['Đào Hoa', 'Hồng Loan', 'Thiên Riêu'],
    doUuTien: 55,
    tomTat: `**Mộc Dục + Đào Hoa + Hồng Loan + Thiên Riêu + sát tinh** — tính chất
**TRĂNG HOA, HAM MUỐN THỂ XÁC** bộc lộ mạnh mẽ.

**Đặc trưng:**
- Bộ Đào Hồng + Mộc Dục + Riêu = các sao **DÂM TINH** cộng hưởng
- Tính dâm dục được khuếch đại
- Dễ rơi vào **TÌNH ÁI XÁC THỊT**, các mối quan hệ ngoài luồng

**Hệ quả:**
- Đường tình cảm **ĐỔ VỠ VÌ TIỂU TAM**
- Hôn nhân **TRẮC TRỞ, CHIA LY**
- Đặc biệt nguy hiểm với phụ nữ

**Hóa giải:**
- **Tứ Đức** (Long-Phúc-Thiên-Nguyệt Đức) chế dâm tính
- **Quan Phúc, Quang Quý** giảm tác họa
- **Vũ Khúc** chuyển dâm thành quý`,
  },

  {
    id: 'moc-duc-kinh-da-ky-tat-ach-benh-sinh-san',
    title: 'Mộc Dục + Kình Đà + Hóa Kỵ + Không Kiếp tại Tật - Bệnh sinh sản',
    sao: ['Mộc Dục'],
    cung: ['Tật Ách'],
    ketHop: ['Kình Dương', 'Đà La', 'Hóa Kỵ'],
    doUuTien: 60,
    tomTat: `**Mộc Dục + Kình Dương + Đà La + Hóa Kỵ + Không Kiếp tại Tật Ách** —
nguy cơ **BỆNH SINH SẢN, SINH LÝ**.

**Đặc trưng:**
- Mộc Dục chủ **BỘ PHẬN SINH DỤC, ĐƯỜNG TIẾT NIỆU**
- Cộng sát tinh: bệnh đường **TÌNH DỤC, TIẾT NIỆU** tăng cao
- Bệnh **TIM MẠCH** (do Mộc Dục thuộc Thủy)

**Hóa giải:** Cần Tử Vi + Thiên Phủ + Lương + Đồng + Hóa Khoa hội chiếu
giảm bớt.`,
  },

  {
    id: 'moc-duc-tat-ach-nu-sinh-san',
    title: 'Mộc Dục + sát tinh tại Tật - Nữ mệnh sinh sản',
    sao: ['Mộc Dục'],
    cung: ['Tật Ách'],
    gioiTinh: 'Nữ',
    ketHop: ['Kình Dương', 'Đà La', 'Hóa Kỵ'],
    doUuTien: 55,
    tomTat: `**Mộc Dục + Kình Dương + Đà La + Hóa Kỵ + Không Kiếp tại Tật Ách —
nữ mệnh:**

Vấn đề **SINH SẢN** nghiêm trọng:
- **HƯ THAI**
- **KHÓ SINH**
- **SẢY THAI** ngoài ý muốn`,
  },

  {
    id: 'moc-duc-sat-tinh-menh-quan-phu-nong-noi',
    title: 'Mộc Dục + sát tinh tại Mệnh/Quan/Phu - Nông nổi thiếu kiên định',
    sao: ['Mộc Dục'],
    cung: ['Mệnh', 'Quan Lộc', 'Phu Thê'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh'],
    doUuTien: 60,
    tomTat: `**Mộc Dục + sát tinh tại Mệnh / Quan Lộc / Phu Thê** — tăng tính **NÔNG
NỔI, THIẾU KIÊN ĐỊNH**.

**Đặc trưng:**
- Đương số dễ **BỎ DỞ CÔNG VIỆC**
- Sự nghiệp **KHÓ ỔN ĐỊNH**
- "**ĐỨNG NÚI NÀY TRÔNG NÚI NỌ**"

**Hôn nhân:**
- Quyết định **VỘI VÀNG**, thiếu suy nghĩ chín chắn
- Là nguyên nhân dẫn đến **TRẮC TRỞ VÀ CHIA LY**

**Hóa giải:** Cần sao Phúc Thiện ổn định (Quan Phúc, Tứ Đức) + Tuần Triệt
giảm bớt tính bốc đồng.`,
  },

  {
    id: 'moc-duc-linh-hoa-kinh-thu-cong',
    title: 'Mộc Dục + Linh Tinh + Hỏa Tinh + Kình Dương - Nghề thủ công',
    sao: ['Mộc Dục'],
    cung: ['Quan Lộc'],
    ketHop: ['Linh Tinh', 'Hỏa Tinh'],
    doUuTien: 50,
    tomTat: `**Mộc Dục + Linh Tinh + Hỏa Tinh + Kình Dương tại Quan Lộc** — làm các nghề
**THỦ CÔNG**.

**Hợp nghề:**
- **TRANG ĐIỂM, MAKE UP**
- Làm **ĐỒ MỸ KÝ, TRANG SỨC**
- Các ngành **THỦ CÔNG, MỸ NGHỆ**

**Phân tích:**
- Mộc Dục = chú trọng vẻ ngoài
- Hỏa Linh + Kình = nghệ thuật cắt may, đốt nung
- Hợp lại: ngành nghề thủ công liên quan làm đẹp

**Đặc trưng:** Kiếm tiền bằng đôi tay khéo léo, không cần học vấn cao.`,
  },

  {
    id: 'moc-duc-hoa-ky-sat-tu-tuc-con-hu-pha-tan',
    title: 'Mộc Dục + Hóa Kỵ + sát tinh tại Tử Tức - Con hư phá tán',
    sao: ['Mộc Dục'],
    cung: ['Tử Tức'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 50,
    tomTat: `**Mộc Dục + Hóa Kỵ + nhiều hung sát bại tinh tại Tử Tức** — con cái
**HƯ HỎNG, PHÁ TÁN**.

**Đặc trưng:**
- Con cái **ĂN CHƠI, SÀNH ĐIỆU**
- Càng dễ **HƯ HỎNG**
- Có xu hướng **PHÁ TÁN TÀI SẢN** của cha mẹ
- Đam mê hưởng thụ, không lo học hành

**Hóa giải:**
- Giáo dục từ nhỏ rất quan trọng
- Cần Quan Phúc, Tứ Đức bù đắp nhân cách`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // MỘC DỤC TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'moc-duc-tai-menh',
    title: 'Mộc Dục tại Mệnh',
    sao: ['Mộc Dục'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `**Mộc Dục thủ Mệnh** — tính cách của **TUỔI TRẺ MỚI LỚN**, **NÔNG NỔI, SĨ
DIỆN**.

**Tướng mạo:**
- Rất **CHÚ TRỌNG VẺ BỀ NGOÀI**
- Đam mê **CHƯNG DIỆN, TRANG ĐIỂM**
- Có **GU THẨM MỸ**
- Bộc lộ cá tính qua cách ăn mặc

**Tính cách:**
- Như cô gái/chàng trai **MỚI LỚN, DẬY THÌ**
- **HAY THAY ĐỔI**, chí không bền
- **THÍCH NHANH MÀ CHÁN CŨNG NHANH**
- Hay **BỎ DỞ VIỆC NỬA CHỪNG**
- **NÔNG NỔI, SĨ DIỆN, DỄ BẤT ĐỒNG**
- Chỉ cần một **MỒI LỬA** có thể vì sĩ diện gây tai họa
- Quan tâm nhiều về **HÌNH THỨC BÊN NGOÀI**, đặc tính thích **LÀM ĐẸP**

**Nghề nghiệp:**
- **LÀM ĐẸP, THẨM MỸ, THỜI TRANG, GIẢI TRÍ**
- **VỆ SINH, MÔI TRƯỜNG**
- Hội nhiều cát tinh + phúc thiện: **BÁC SỸ, THẦY THUỐC ĐÔNG Y**

**Cảnh báo Mệnh VCD:** đặc tính hay thay đổi càng nổi bật, học hành
khó đỗ.`,
  },

  {
    id: 'moc-duc-tai-phu-mau',
    title: 'Mộc Dục tại Phụ Mẫu',
    sao: ['Mộc Dục'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Mộc Dục tại Phụ Mẫu** — cha mẹ có **NẾP SỐNG GỌN GÀNG, SẠCH SẼ**.

**Đặc trưng:**
- Ưa **TẮM RỬA, TRƯNG DIỆN**
- Lối sống chỉn chu

**Sát tinh hội (Không Kiếp + Kình Đà + Linh Hỏa + Hình Riêu + Hóa Kỵ):**
- Tình trạng hôn nhân của cha mẹ dễ **BỊ XEN NGANG BỞI NGƯỜI THỨ BA**
- Tính **TRĂNG HOA BÊN NGOÀI**
- Cha mẹ có thể **NGOẠI TÌNH**`,
  },

  {
    id: 'moc-duc-tai-phuc-duc',
    title: 'Mộc Dục tại Phúc Đức',
    sao: ['Mộc Dục'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `**Mộc Dục tại Phúc Đức** — mồ mả tổ tiên **XÂY ĐẸP**.

**Đặc trưng:**
- Mồ mả ở nơi nhiều **CỎ CÂY** xung quanh
- Được **CHĂM SÓC, SỬA SANG, CẢI TẠO** thường xuyên
- Sạch sẽ, gọn gàng

Dòng họ có nhiều người **KẾT HÔN SỚM** hoặc có xu hướng lo lắng chăm
chút mồ mả.`,
  },

  {
    id: 'moc-duc-tai-dien-trach',
    title: 'Mộc Dục tại Điền Trạch',
    sao: ['Mộc Dục'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Mộc Dục tại Điền Trạch** — nhà cửa, nơi làm việc **SẠCH SẼ, GỌN GÀNG**.

**Đặc trưng:**
- Hay **SỬA SANG, CẢI TẠO, TRANG HOÀNG** lại
- Xung quanh có **NHIỀU CÂY CỐI, UM TÙM**

**Vị trí nhà:**
- Dễ gần **BỆNH VIỆN, NƠI Ô NHIỄM**: hay phải **KHỬ KHUẨN, VỆ SINH**
- Hoặc gần **SÔNG NƯỚC** (Mộc Dục thuộc Thủy)`,
  },

  {
    id: 'moc-duc-tai-quan-loc',
    title: 'Mộc Dục tại Quan Lộc',
    sao: ['Mộc Dục'],
    cung: ['Quan Lộc'],
    doUuTien: 76,
    tomTat: `**Mộc Dục tại Quan Lộc** — công việc có tính **ĐA DẠNG, THAY ĐỔI**.

**Đặc trưng:**
- Hay phải **QUAN TÂM TỚI HÌNH THỨC BÊN NGOÀI**
- Tham gia các **HOẠT ĐỘNG GIẢI TRÍ**

**Hợp nghề - liên quan ngoại hình + giao tiếp:**
- **TRUYỀN THÔNG, THỜI TRANG, THIẾT KẾ**
- **VỆ SINH, MÔI TRƯỜNG**
- **Người mẫu, MC, diễn viên**

**Sát tinh hội (Linh Tinh + Hỏa Tinh + Kình Dương):**
- Nghề **THỦ CÔNG**: trang điểm, làm đồ mỹ ký, mỹ nghệ`,
  },

  {
    id: 'moc-duc-tai-no-boc',
    title: 'Mộc Dục tại Nô Bộc',
    sao: ['Mộc Dục'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Mộc Dục tại Nô Bộc** — bạn bè dễ **ĂN CHƠI, SÀNH ĐIỆU**.

**Sát tinh hội (Không Kiếp + Đà La + Đào Hồng):**
- Dễ có **QUAN HỆ NGOÀI LUỒNG**
- Phục vụ **HAM MUỐN XÁC THỊT**
- Bạn bè đa phần là người **HƯỞNG THỤ**

Bạn bè không phải tri kỷ sâu sắc — chủ yếu giao du nhằm **CHƠI BỜI VUI VẺ**.`,
  },

  {
    id: 'moc-duc-tai-thien-di',
    title: 'Mộc Dục tại Thiên Di',
    sao: ['Mộc Dục'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Mộc Dục tại Thiên Di** — ra ngoài **ĂN MẶC GỌN GÀNG, SẠCH SẼ, TƯƠM TẤT**.

**Đặc trưng nghịch lý:**
- **Ở NHÀ THÌ THẦM KÍN**
- **RA NGOÀI THÍCH THỂ HIỆN, PHÔ TRƯƠNG**

Hai mặt đối lập trong cùng con người — có hai phong cách sống khác hẳn
ở nhà và ngoài xã hội.`,
  },

  {
    id: 'moc-duc-tai-tat-ach-bo-phan-sinh-duc',
    title: 'Mộc Dục tại Tật Ách - Bộ phận sinh dục, đường tiết niệu',
    sao: ['Mộc Dục'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `**Mộc Dục tại Tật Ách** — **BỘ PHẬN SINH DỤC, ĐƯỜNG TIẾT NIỆU** dễ có vấn đề.

**Đặc trưng:**
- **NHU CẦU SINH LÝ** của đương số cao
- Dễ gây ra:
  - **BỆNH ĐƯỜNG SINH DỤC**
  - **TIM MẠCH** (do Mộc Dục Thủy)

**Hóa giải:** Cần dưỡng sinh, tu thân, tránh quan hệ phóng túng.`,
  },

  {
    id: 'moc-duc-tat-ach-nu-de-kho',
    title: 'Mộc Dục tại Tật Ách - Nữ khó đẻ, sảy thai',
    sao: ['Mộc Dục'],
    cung: ['Tật Ách'],
    gioiTinh: 'Nữ',
    doUuTien: 73,
    tomTat: `**Mộc Dục tại Tật Ách — nữ mệnh:**
- Dễ gây **KHÓ ĐẺ**
- **SẨY THAI** ngoài ý muốn
- Càng xấu hơn khi có thêm **ÁM, SÁT TINH** (Hóa Kỵ, Đà La, Riêu, Không Kiếp)`,
  },

  {
    id: 'moc-duc-tai-tai-bach',
    title: 'Mộc Dục tại Tài Bạch',
    sao: ['Mộc Dục'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Mộc Dục tại Tài Bạch** — kiếm tiền từ **LÀM ĐẸP, GIẢI TRÍ, CÂY XANH**.

**Mặt tích cực:**
- Có khả năng kiếm tiền từ:
  - **LÀM ĐẸP, THẨM MỸ**
  - **GIẢI TRÍ, NGHỆ THUẬT**
  - **CÂY XANH, CẢNH QUAN**

**Mặt tiêu cực:**
- Là sao **GÂY TỐN TIỀN** cho:
  - Việc **LÀM ĐẸP**
  - Đầu tư **THỜI TRANG**
  - **PHÔ TRƯƠNG TIỀN CỦA**
  - Trang hoàng cho **CÁI BÊN NGOÀI**
  - Giải quyết **NHU CẦU SINH LÝ**`,
  },

  {
    id: 'moc-duc-tai-tu-tuc',
    title: 'Mộc Dục tại Tử Tức',
    sao: ['Mộc Dục'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Mộc Dục tại Tử Tức** — sao gây ra **ÍT CON, MUỘN CON, HAO CON**.

**Đặc trưng:**
- Con cái **ĂN CHƠI, SÀNH ĐIỆU**
- Đam mê hưởng thụ

**Sát tinh hội (Hóa Kỵ + Kình Đà + Không Kiếp):**
- Con cái dễ **HƯ HỎNG**
- **PHÁ TÁN TÀI SẢN** của cha mẹ`,
  },

  {
    id: 'moc-duc-tai-phu-the',
    title: 'Mộc Dục tại Phu Thê',
    sao: ['Mộc Dục'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `**Mộc Dục tại Phu Thê** — người hôn phối **SÀNH ĐIỆU**.

**Đặc trưng:**
- Thích **ĂN MẶC, CHẢI TRUỐT**
- **NHIỀU LÔNG TÓC**
- Hơi **BỐC ĐỒNG**, hay thay đổi

**Đặc trưng đặc biệt:** Vợ chồng **ĂN NẰM VỚI NHAU RỒI MỚI CƯỚI** (ăn
cơm trước kẻng).`,
  },

  {
    id: 'moc-duc-tai-huynh-de',
    title: 'Mộc Dục tại Huynh Đệ',
    sao: ['Mộc Dục'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Mộc Dục tại Huynh Đệ** — anh chị em **GỌN GÀNG, BÓNG BẨY**.

**Đặc trưng:**
- Vẻ ngoài chỉn chu, sành điệu
- Quan tâm hình thức

**Sát bại tinh hội:**
- Anh em **ĂN CHƠI, ĐUA ĐÒI**
- Thậm chí **NGHIỆN NGẬP**`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // MỘC DỤC VÀO HẠN
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'moc-duc-vao-han',
    title: 'Mộc Dục vào hạn',
    sao: ['Mộc Dục'],
    doUuTien: 50,
    tomTat: `**Mộc Dục vào hạn** — vận có tính chất **ĂN CHƠI, HƯỞNG THỤ**.

**Đặc trưng:**
- Đi vào **QUAN TÂM CHĂM SÓC BỀ NGOÀI** bản thân hơn
- Đầu tư **THỜI TRANG, MỸ PHẨM**
- Dễ rơi vào **TÌNH ÁI XÁC THỊT**

**Hai mặt:**
- Mặt tích cực: Cải thiện ngoại hình, gặp duyên mới
- Mặt tiêu cực: Sa đà tửu sắc, ngoại tình, hao tài

**Lưu ý:** Hạn này cần **TIẾT CHẾ** ham muốn, hướng vào sáng tạo, làm
đẹp tích cực thay vì phù hoa dục vọng.`,
  },
];
