import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO TRƯỜNG SINH - Thủy, Thiện Tinh.
 *
 * Sao ĐẦU TIÊN của Vòng Trường Sinh 12 sao:
 *   Trường Sinh → Mộc Dục → Quan Đới → Lâm Quan → Đế Vượng → Suy →
 *   Bệnh → Tử → Mộ → Tuyệt → Thai → Dưỡng
 *
 * An theo CỤC (Thủy Nhị/Mộc Tam/Kim Tứ/Thổ Ngũ/Hỏa Lục).
 *
 * ⚡ QUY LUẬT BẮT BUỘC:
 *   - Trường Sinh LUÔN tam hợp với Đế Vượng và Mộ → cách "SINH VƯỢNG MỘ"
 *
 * ⚡ Vai trò ĐẶC BIỆT:
 *   - Là VÒNG ĐỊA (Địa Lợi) trong Thiên-Địa-Nhân
 *   - HỆ SỐ KHUẾCH ĐẠI - làm tăng tính chất sao đi cùng (tốt → càng tốt,
 *     xấu → càng xấu)
 *   - Tượng trưng SINH-LÃO-BỆNH-TỬ của con người - Trường Sinh = mới sinh
 *     ra (mang ý nghĩa may mắn, vui vẻ, nghị lực)
 *
 * Tên gọi tắt: "Sinh".
 */
export const luanGiai_TruongSinh: DoanLuanGiai[] = [
  {
    id: 'truong-sinh-tinh-chat-chung',
    title: 'Trường Sinh - Đặc tính chung',
    sao: ['Trường Sinh'],
    doUuTien: 32,
    tomTat: `**Trường Sinh** — phụ tinh **THIỆN TINH**, sao **ĐẦU TIÊN** của Vòng Trường
Sinh 12 sao.

**Ngũ hành:** **Thủy**.

⚡ **Vị trí trong Thiên-Địa-Nhân:**
- **Vòng Địa** (Địa Lợi)
- Thiên thời = vòng Thái Tuế / Nhân hòa = vòng Lộc Tồn

⚡ **Đặc tính:**
- **Phúc thọ, sinh khí, thịnh vượng**
- **GIA TĂNG TÍNH CHẤT** các sao trong cùng cung
- Biểu thị **SỰ SINH SÔI, NẢY NỞ, MỚI HÌNH THÀNH**
- Tinh khiết trong sáng và phát triển

⚡ **VAI TRÒ ĐẶC BIỆT - HỆ SỐ KHUẾCH ĐẠI:**
- Như "**hệ số kích thích**" làm tăng cường, bổ sung ý nghĩa sao đi kèm
- **TỐT → càng TỐT** (cát tinh)
- **XẤU → càng XẤU** (sát tinh, hung tinh)
- Cần xét kỹ sao đồng cung mới đoán được tốt/xấu

⚡ **Tượng trưng Sinh-Lão-Bệnh-Tử:**
- Trường Sinh = **MỚI SINH RA** — sinh linh mới chào đời
- Mang ý nghĩa **MAY MẮN, VUI VẺ, NGHỊ LỰC**

⚡ **Tên gọi tắt:** "**Sinh**".`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // QUY LUẬT TAM HỢP + KHUẾCH ĐẠI
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'truong-sinh-tam-hop-sinh-vuong-mo',
    title: 'Quy luật Sinh - Vượng - Mộ tam hợp',
    sao: ['Trường Sinh'],
    ketHop: ['Đế Vượng', 'Mộ'],
    doUuTien: 60,
    tomTat: `**Trường Sinh LUÔN tam hợp Đế Vượng và Mộ** — quy luật bắt buộc trong vòng
Trường Sinh.

⚡ **Cách "SINH VƯỢNG MỘ":**
- **Trường Sinh** (cung 1) = sinh khí khởi đầu
- **Đế Vượng** (cung 5) = đỉnh cao thịnh vượng
- **Mộ** (cung 9) = chôn cất, kết tụ

⚡ **Ý nghĩa tổng thể:**
- 3 sao tam hợp tạo **VÒNG TUẦN HOÀN** sinh - phát - kết
- Ảnh hưởng tới **SỨC SỐNG, SỰ NGHIỆP, TÀI LỘC** lớn
- Khi 3 cung này tốt (nhiều cát tinh) → cuộc đời **HƯNG THỊNH BỀN VỮNG**
- Khi xấu (nhiều sát tinh) → tai họa lan tỏa cả 3 cung

⚡ **Câu phú nổi tiếng:** **"Khá khen cung Phúc nhà ngươi / Trường Sinh,
Đế Vượng lắm người thành danh"** — khi Sinh + Vượng đồng cung tại Phúc Đức.`,
  },

  {
    id: 'truong-sinh-vai-tro-khuech-dai',
    title: 'Trường Sinh - Vai trò KHUẾCH ĐẠI tốt-xấu',
    sao: ['Trường Sinh'],
    doUuTien: 60,
    tomTat: `**Trường Sinh là HỆ SỐ KHUẾCH ĐẠI** — đặc trưng quan trọng nhất phải nắm.

⚡ **Cơ chế:**
- KHÔNG có giá trị TỐT-XẤU độc lập
- Phụ thuộc vào sao đồng cung
- **CÁT TINH + Sinh** → tính tốt được nhân lên gấp bội
- **SÁT TINH + Sinh** → tai họa tăng cường mạnh mẽ

⚡ **Khi đồng cung CÁT TINH** (Tử Vi, Thiên Phủ, Thiên Lương, Lộc Tồn,
Hóa Khoa, Khôi Việt, Quang Quý...):
- Tăng **PHÚC THỌ, TÀI LỘC, CON CÁI**
- Có lợi cho **SINH NỞ** (như Long Phượng, Thai)
- Mở ra cơ hội **THĂNG TIẾN**

⚠️ **Khi đồng cung SÁT BẠI TINH** (Kình Đà, Hỏa Linh, Không Kiếp, Kỵ...):
- Gia tăng **ĐỘ LIỀU LĨNH**, tính xấu của chúng
- Tăng nhiều **NGUY CƠ BẤT LỢI** cho đương số
- Bệnh tật, công danh, tài lộc đều bị triết giảm

⚡ **Khi luận đoán:** Bắt buộc **XÉT KỸ SAO ĐỒNG CUNG** trước khi kết luận
Trường Sinh tốt hay xấu.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP NỔI TIẾNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'truong-sinh-thien-ma-thanh-van-dac-lo',
    title: 'Mã ngộ Trường Sinh - Thanh vân đắc lộ',
    sao: ['Trường Sinh'],
    ketHop: ['Thiên Mã'],
    doUuTien: 60,
    tomTat: `**Câu phú nổi tiếng:** **"MÃ NGỘ TRƯỜNG SINH - THANH VÂN ĐẮC LỘ"**.

⚡ **Ý nghĩa:**
- Thiên Mã + Trường Sinh đồng cung → đường mây xanh đắc lộ
- Vận hội **MAY MẮN VỀ NHIỀU MẶT**
- Đường công danh thuận buồm xuôi gió

⚡ **Đặc trưng người có cách này:**
- **NĂNG ĐỘNG, NHIỆT HUYẾT**
- Song hành cùng **MAY MẮN ĐÚNG THỜI**
- Công danh dễ dàng **TIẾN ĐẠT**
- Tài lộc **GIA TĂNG**
- Công việc **THÀNH TỰU**

⚡ **Đã có bộ này tại file thien-ma.ts** — đây là 1 trong 9 cách Thiên Mã
nổi tiếng (Phù Dư Mã, Thư Hùng Mã, Chiến Mã, Mã Khốc Khách, Phù Thi Mã,
Chiết Túc Mã, Tử Mã, **Mã ngộ Trường Sinh**).`,
  },

  {
    id: 'truong-sinh-tu-vi-thien-phu-phu-quy-bao-dung',
    title: 'Trường Sinh + Tử Vi / Thiên Phủ - Phú quý bao dung',
    sao: ['Trường Sinh'],
    ketHop: ['Tử Vi', 'Thiên Phủ'],
    doUuTien: 55,
    tomTat: `**Trường Sinh + Tử Vi / Thiên Phủ đồng cung** — người ở **THẾ BỀ TRÊN, PHÚ
QUÝ, PHƯỚC THIỆN**.

⚡ **Đặc trưng:**
- **BAO DUNG, QUẢNG ĐẠI**
- **DỄ THA THỨ, KHÔNG CÂU CHẤP**

⚡ **Nếu KHÔNG gặp sát bại tinh:**
- Dễ là người có **CHỨC TƯỚC, VAI VẾ** trong xã hội
- **ĐỨNG ĐẦU** một tập đoàn, tập thể
- Lãnh đạo có khí chất

⚡ **Phân tích:**
- Tử Vi = Đế tinh
- Thiên Phủ = Tài Khố tinh
- + Trường Sinh khuếch đại → cách bậc đại nhân`,
  },

  {
    id: 'truong-sinh-cau-phu-phuc-duc-de-vuong',
    title: 'Câu phú: Trường Sinh + Đế Vượng tại Phúc Đức',
    sao: ['Trường Sinh'],
    cung: ['Phúc Đức'],
    ketHop: ['Đế Vượng'],
    doUuTien: 70,
    tomTat: `**Câu phú nổi tiếng:**

> **"Khá khen cung Phúc nhà ngươi**
> **Trường Sinh, Đế Vượng lắm người thành danh"**

⚡ **Ý nghĩa:**
- **Trường Sinh + Đế Vượng đồng cung** tại Phúc Đức → cách CỰC ĐẸP
- Dòng họ chắc chắn có **NGƯỜI HIỂN ĐẠT**
- Chủ mệnh hưởng **PHÚC LỘC LÂU DÀI**
- Con cháu **HƯNG THỊNH**

⚡ **Quy luật:** Trường Sinh và Đế Vượng vốn là 2 trong cách "Sinh-Vượng-Mộ"
tam hợp — khi cả 2 đồng cung ở Phúc Đức là cách hiếm gặp đặc biệt đẹp.`,
  },

  {
    id: 'truong-sinh-loc-ma-am-tham-dien-bds',
    title: 'Trường Sinh + Lộc/Mã/Âm/Tham tại Điền - BĐS phát đạt',
    sao: ['Trường Sinh'],
    cung: ['Điền Trạch'],
    ketHop: ['Hóa Lộc', 'Lộc Tồn', 'Thiên Mã'],
    doUuTien: 60,
    tomTat: `**Trường Sinh tại Điền Trạch + Hóa Lộc / Lộc Tồn / Thiên Mã / Thái Âm /
Tham Lang** — duyên với **BUÔN BÁN, KINH DOANH BẤT ĐỘNG SẢN PHÁT ĐẠT**.

⚡ **Phân tích bộ sao:**
- **Trường Sinh** = sinh khí tại Điền (đất đai dồi dào)
- **Lộc Tồn / Hóa Lộc** = tài tinh hợp BĐS
- **Thiên Mã** = di chuyển kinh doanh
- **Thái Âm** = sao chủ điền sản, tài bên trong
- **Tham Lang** = đào hoa kinh doanh năng động

⚡ **Đặc trưng:**
- Có **DUYÊN VỚI ĐẤT ĐAI**
- Nhà cửa, ruộng vườn **DỒI DÀO**
- Buôn bán, kinh doanh BĐS **PHÁT ĐẠT**
- Nơi ở/làm việc **KHANG TRANG, HIỆN ĐẠI**, đông người qua lại`,
  },

  {
    id: 'truong-sinh-khoi-viet-quang-quy-quan-loc',
    title: 'Trường Sinh + Khôi Việt + Quang Quý + Hóa Khoa tại Quan Lộc',
    sao: ['Trường Sinh'],
    cung: ['Quan Lộc'],
    ketHop: ['Hóa Khoa', 'Thiên Khôi'],
    doUuTien: 60,
    tomTat: `**Trường Sinh tại Quan Lộc + Hóa Khoa + Khôi Việt + Quang Quý** — sự nghiệp
**RỰC RỠ ĐỈNH CAO DANH VỌNG**.

⚡ **Phân tích bộ sao:**
- **Trường Sinh** = sinh khí, nhiệt huyết khuếch đại
- **Hóa Khoa** = khoa bảng, danh tiếng
- **Khôi Việt** = Thiên Ất Quý Nhân
- **Quang Quý** = phúc tinh quý nhân (đấng linh thiêng)

⚡ **Đặc trưng:**
- Sự nghiệp **RỰC RỠ**
- Có khả năng vươn tới **ĐỈNH CAO DANH VỌNG**
- Mở ra nhiều cơ hội **THĂNG TIẾN**
- Như "**dòng sinh khí bồi đắp**" cho công danh
- Ít bế tắc, dễ đạt **THÀNH TỰU LỚN**`,
  },

  {
    id: 'truong-sinh-kinh-da-suc-khoe-suy-yeu',
    title: 'Trường Sinh + Kình Đà - Sức khỏe suy yếu',
    sao: ['Trường Sinh'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 50,
    tomTat: `⚠️ **Trường Sinh + Kình Dương + Đà La** — **SỨC KHỎE SUY YẾU**.

⚡ **Đặc trưng:**
- Sinh khí **BỊ HUNG SÁT KHẮC CHẾ**
- Đương số mắc bệnh tật **TRIỀN MIÊN**
- Cơ thể **SUY YẾU**, khí lực cạn dần
- Bệnh **TÁI ĐI TÁI LẠI**
- Làm **GIẢM THỌ MỆNH**
- Thân thể chẳng được an yên

⚡ **Đặc biệt nguy hiểm tại Tật Ách:**
- Đặc tính **DỒI DÀO, NẢY NỞ** chuyển thành tiêu cực
- Bệnh không bao giờ hết, **PHÁT SINH LIÊN TỤC**`,
  },

  {
    id: 'truong-sinh-hoa-linh-cong-danh-trac-tro',
    title: 'Trường Sinh + Hỏa Linh - Công danh trắc trở',
    sao: ['Trường Sinh'],
    ketHop: ['Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 50,
    tomTat: `⚠️ **Trường Sinh + Hỏa Tinh + Linh Tinh** — **CÔNG DANH TRẮC TRỞ**.

⚡ **Đặc trưng:**
- Con đường công danh **KHÓ KHĂN**
- Chủ mệnh **VẤT VẢ, HẾT MÌNH** với công việc
- Nhưng thành quả nhận lại **KHÔNG TƯƠNG XỨNG**

⚠️ **Cảnh báo:**
- Thậm chí vướng **KIỆN TỤNG, THỊ PHI**
- Bị **KẺ TIỂU NHÂN HÃM HẠI**

⚡ **Hóa giải:** Cần Tử Vi/Phủ/Lương/Đồng + Tả Hữu + Khôi Việt giải bớt.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // TRƯỜNG SINH TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'truong-sinh-tai-menh',
    title: 'Trường Sinh tại Mệnh',
    sao: ['Trường Sinh'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `**Trường Sinh thủ Mệnh** — tướng mạo **TO LỚN, KHỎE MẠNH, TRÀN ĐẦY SỨC SỐNG**.

⚡ **Tướng mạo:**
- **TẦM VÓC TO LỚN**, sức khỏe tốt
- Tinh thần **NĂNG NỔ, NHIỆT HUYẾT CAO**
- Triển vọng **SỐNG LÂU, SỐNG THỌ**

⚡ **Tính cách:**
- **ĐỘ LƯỢNG, NHÂN TỪ, QUẢNG ĐẠI**
- Là **QUÝ TINH, THIỆN TINH**
- Tăng **PHÚC THỌ, TÀI LỘC, CON CÁI**
- Có lợi cho **SINH NỞ** (đặc biệt khi đi cùng Long Phượng, Thai)

⚡ **Hậu vận đẹp:**
- Càng về già càng **MAY MẮN**
- Đương số **THỌ TRƯỜNG**
- Con cháu **SUM VẦY**

⚠️ **Cảnh báo - khuếch đại tính xấu:**
- Khi đồng cung sát bại tinh → tăng **ĐỘ LIỀU LĨNH, TÍNH XẤU**
- Trở nên **HẤP TẤP**, dễ gây tai họa cho bản thân`,
  },

  {
    id: 'truong-sinh-tai-phu-mau',
    title: 'Trường Sinh tại Phụ Mẫu',
    sao: ['Trường Sinh'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Trường Sinh tại Phụ Mẫu** — dấu hiệu **CÁT LÀNH** cho cha mẹ.

⚡ **Đặc trưng:**
- Cha mẹ có **SỨC KHỎE TỐT**
- Tinh thần **NĂNG ĐỘNG**
- Tính tình **CHỊU KHÓ**, ít khi uể oải
- **TUỔI THỌ CAO**

⚡ **Tấm gương cho con cái:**
- **CẦN CÙ, NGHỊ LỰC**
- Sức sống **DỒI DÀO**

⚡ **Đương số được hưởng:**
- Nguồn **SINH KHÍ và PHÚC THỌ** từ cha mẹ`,
  },

  {
    id: 'truong-sinh-tai-phuc-duc',
    title: 'Trường Sinh tại Phúc Đức - HỢP CÁCH',
    sao: ['Trường Sinh'],
    cung: ['Phúc Đức'],
    doUuTien: 80,
    tomTat: `**Trường Sinh tại Phúc Đức** — vị trí **HỢP CÁCH**, **PHƯỚC KHÍ DÀY**.

⚡ **Đặc trưng:**
- Dòng họ nhiều người **SỐNG THỌ**
- **MỒ MẢ TỔ TIÊN KẾT PHÁT**
- Hậu duệ được **CHE CHỞ, PHÙ TRÌ**

⚡ **Đương số:**
- Tâm tính **THIỆN LƯƠNG**
- Hưởng phúc phần từ quá khứ
- Biết **VUN BỒI PHÚC ĐỨC** cho thế hệ sau

⚡ **Câu phú đặc biệt khi đồng cung Đế Vượng:**
> **"Khá khen cung Phúc nhà ngươi**
> **Trường Sinh, Đế Vượng lắm người thành danh"**

→ Dòng họ chắc chắn có **NGƯỜI HIỂN ĐẠT**.`,
  },

  {
    id: 'truong-sinh-tai-dien-trach',
    title: 'Trường Sinh tại Điền Trạch',
    sao: ['Trường Sinh'],
    cung: ['Điền Trạch'],
    doUuTien: 76,
    tomTat: `**Trường Sinh tại Điền Trạch** — của tiền, đất đai **DỒI DÀO**.

⚡ **Đặc trưng:**
- Có **DUYÊN VỚI ĐẤT ĐAI**
- Nhà cửa và ruộng vườn **DỒI DÀO**

⚡ **Hội tài tinh (Hóa Lộc, Lộc Tồn, Thiên Mã, Thái Âm, Tham Lang):**
- Duyên với **BUÔN BÁN, KINH DOANH BẤT ĐỘNG SẢN**
- Phát đạt mạnh

⚡ **Nơi ở/làm việc:**
- **KHANG TRANG, RỘNG LỚN**
- **SẠCH SẼ, ĐÔNG ĐÚC, HIỆN ĐẠI**
- Gia trạch **HƯNG THỊNH**
- Thuận lợi tích lũy tài sản cố định`,
  },

  {
    id: 'truong-sinh-tai-quan-loc',
    title: 'Trường Sinh tại Quan Lộc',
    sao: ['Trường Sinh'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `**Trường Sinh tại Quan Lộc** — đương số **NHIỆT HUYẾT, NĂNG NỔ** trong công
việc.

⚡ **Đặc trưng:**
- Sự nghiệp dễ **PHÁT TRIỂN**
- Mở ra nhiều cơ hội **THĂNG TIẾN**
- Như **DÒNG SINH KHÍ BỒI ĐẮP** cho công danh
- Ít bế tắc, dễ đạt **THÀNH TỰU LỚN**
- Có thể lên **ĐỈNH CAO**

⚡ **Hội Hóa Khoa + Khôi Việt + Quang Quý:**
- Sự nghiệp **RỰC RỠ**
- Đỉnh cao **DANH VỌNG**

⚡ Nhiệt huyết năng nổ trong công việc → tạo thành **THÀNH TỰU LỚN**.`,
  },

  {
    id: 'truong-sinh-tai-no-boc',
    title: 'Trường Sinh tại Nô Bộc',
    sao: ['Trường Sinh'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Trường Sinh tại Nô Bộc** — **LẮM BẠN NHIỀU BÈ**, bạn bè nhiều người **THÀNH ĐẠT**.

⚡ **Đặc trưng:**
- **GIAO DU RỘNG RÃI**
- Cuộc đời được **PHÁT TRIỂN** nhờ bạn bè giúp đỡ
- Nhiều bạn có **VỊ TRÍ CAO** trong xã hội

⚡ **Cát tinh hội:** Bạn bè, đồng nghiệp, cấp dưới **HỖ TRỢ MẠNH**.

⚠️ **Sát tinh hội (Không Kiếp + Kình Đà + Cự Kỵ):**
- Mối quan hệ **BẤT LỢI**
- Gây **HAO TỐN**
- Lôi kéo vào **RẮC RỐI**`,
  },

  {
    id: 'truong-sinh-tai-thien-di',
    title: 'Trường Sinh tại Thiên Di',
    sao: ['Trường Sinh'],
    cung: ['Thiên Di'],
    doUuTien: 76,
    tomTat: `**Trường Sinh tại Thiên Di** — ra ngoài **NHIỀU MAY MẮN**, dễ thành công.

⚡ **Đặc trưng nghịch lý:**
- Ở nhà thì **LƯỜI**
- Ra ngoài, sống xa gia đình thì **RẤT CHĂM CHỈ**

⚡ **Vận may:**
- Dễ **GẶT HÁI THÀNH CÔNG**
- Vợ dễ **TO BÉO**, gia đình **CÓ ĐIỀU KIỆN**

⚡ **Mở ra nhiều thuận lợi** trong quá trình **LÀM ĂN, LẬP NGHIỆP XA QUÊ**.`,
  },

  {
    id: 'truong-sinh-tai-tat-ach-bat-loi',
    title: 'Trường Sinh tại Tật Ách - BẤT LỢI',
    sao: ['Trường Sinh'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `⚠️ **Trường Sinh tại Tật Ách** — **BẤT LỢI**, đặc tính dồi dào nảy nở chuyển
thành tiêu cực.

⚡ **Đặc trưng:**
- Bệnh tật **NHIỀU VÀ LÂU KHỎI**
- Đặc tính "**DỒI DÀO, ĐÂM TRỒI NẨY NỞ**" → bệnh **KHÔNG BAO GIỜ HẾT**
- Bệnh tật và tai họa **LIÊN TỤC PHÁT SINH**

⚠️ **Sát tinh hội (Không Kiếp + Kình Đà + Cự Kỵ):**
- Càng dễ mắc **BỆNH LÂU NGÀY**, khó dứt điểm

⚡ **Sao GIẢI - hóa giải:**
- **Hóa Khoa, Thiên Quan, Thiên Phúc**
- **Khôi Việt, Quang Quý**
- **Tuần - Triệt**
→ Tai họa được hóa giải, bệnh tật dần suy giảm.

⚡ Đây là **VỊ TRÍ NGOẠI LỆ** của Trường Sinh — vì khuếch đại bệnh tật.`,
  },

  {
    id: 'truong-sinh-tai-tai-bach',
    title: 'Trường Sinh tại Tài Bạch',
    sao: ['Trường Sinh'],
    cung: ['Tài Bạch'],
    doUuTien: 78,
    tomTat: `**Trường Sinh tại Tài Bạch** — nguồn kiếm tiền **LUÔN DỒI DÀO**.

⚡ **Đặc trưng:**
- Hết tiền chỗ này lại có chỗ khác
- Tiền bạc **LUÔN NẢY NỞ SINH SÔI**
- **KHÔNG BAO GIỜ LO HẾT TIỀN**, hết lại có
- Hiếm khi rơi vào **TÚNG THIẾU**

⚡ **Cách cục thuận lợi cho:**
- **TÍCH LŨY**
- **LÀM ĂN, ĐẦU TƯ**
- Của cải có xu hướng **TĂNG TRƯỞNG**
- Tạo sự **AN TÂM TÀI CHÍNH** cả cuộc đời`,
  },

  {
    id: 'truong-sinh-tai-tu-tuc',
    title: 'Trường Sinh tại Tử Tức',
    sao: ['Trường Sinh'],
    cung: ['Tử Tức'],
    doUuTien: 76,
    tomTat: `**Trường Sinh tại Tử Tức** — **ĐÔNG CON CÁI**, con cái **KHỎE MẠNH, NĂNG ĐỘNG**.

⚡ **Đặc trưng:**
- Con cái mang lại **NIỀM VUI** cho gia đình
- Đẻ con xong vợ chồng **LÀM ĂN PHÁT ĐẠT** hơn

⚡ **Biểu tượng:**
- **NỐI DÀI HUYẾT MẠCH**
- **HƯNG THỊNH GIA ĐẠO**`,
  },

  {
    id: 'truong-sinh-tai-phu-the',
    title: 'Trường Sinh tại Phu Thê',
    sao: ['Trường Sinh'],
    cung: ['Phu Thê'],
    doUuTien: 76,
    tomTat: `**Trường Sinh tại Phu Thê** — người hôn phối **KHỎE MẠNH, SỐNG THỌ**.

⚡ **Đặc trưng:**
- Nhà vợ/chồng **CÓ ĐIỀU KIỆN**, khá giả
- Cưới vợ/chồng xong → công việc và của cải **ĐI LÊN, PHÁT TRIỂN TỐT HƠN**

⚡ **Cách cục:**
- Sự nghiệp **KHỞI SẮC** sau hôn nhân
- Tài vận **THUẬN LỢI**
- Của cải **NGÀY CÀNG TÍCH LŨY**`,
  },

  {
    id: 'truong-sinh-tai-huynh-de',
    title: 'Trường Sinh tại Huynh Đệ',
    sao: ['Trường Sinh'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Trường Sinh tại Huynh Đệ** — anh em **ĐÔNG VUI, SUNG TÚC**.

⚡ **Đặc trưng:**
- Anh em **GẮN BÓ**, tạo thành **CHỖ DỰA** cho nhau
- Nhà sung túc

⚡ **Cát tinh hội:**
- Anh em **HÒA THUẬN**

⚠️ **Sát tinh hội (Không Kiếp + Kình Đà + Cự Môn + Hóa Kỵ):**
- Dễ nảy sinh **MÂU THUẪN**
- Gây **PHIỀN LỤY**`,
  },
];
