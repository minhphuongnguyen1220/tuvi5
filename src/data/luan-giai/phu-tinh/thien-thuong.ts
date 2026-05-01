import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THIÊN THƯƠNG - Thủy, Hung Tinh.
 *
 * ⚡ QUY LUẬT BẮT BUỘC: Thiên Thương LUÔN cố định tại cung NÔ BỘC
 * (engine hardcode `src/core/tuvi/phu-tinh.ts`).
 *
 * Đặc trưng:
 *   - Là sao nhỏ phụ - DÙNG ĐỂ XEM VẬN HẠN (đặc biệt tiểu hạn)
 *   - KHÔNG có ý nghĩa nhiều trên toàn cuộc đời
 *   - Cùng Thiên Sứ (cố định cung Tật) tạo bộ THƯƠNG SỨ
 *   - Biểu tượng "thiên ý" — tổn thương từ những mối quan hệ lợi ích
 *
 * Phần CHUNG bộ Thương-Sứ đã viết tại file này với
 * sao: ['Thiên Thương', 'Thiên Sứ'].
 */
export const luanGiai_ThienThuong: DoanLuanGiai[] = [
  {
    id: 'thien-thuong-tinh-chat-chung',
    title: 'Thiên Thương - Đặc tính chung (cố định tại Nô Bộc)',
    sao: ['Thiên Thương'],
    doUuTien: 32,
    tomTat: `**Thiên Thương** — phụ tinh **HUNG TINH**.

**Ngũ hành:** **Thủy**.

⚡ **QUY LUẬT BẮT BUỘC:** LUÔN cố định tại cung **NÔ BỘC** (engine hardcode).

⚡ **Đặc tính:**
- **Tổn thương, buồn phiền, mất mát**
- Đến từ các mối quan hệ tưởng như **THÂN CẬN**
- Biến cố **KHÓ LƯỜNG**

⚡ **Ý nghĩa biểu tượng:**
- Cung Nô Bộc = mối quan hệ mang tính **LỢI ÍCH** (cấp dưới, đồng nghiệp,
  bạn bè xã giao)
- Thiên Thương cố định → **"THIÊN Ý"** — có lợi ích thì ắt có tranh đoạt,
  mâu thuẫn
- Con người KHÓ TRÁNH KHỎI tổn thương từ mối quan hệ lợi ích

⚡ **Vai trò:**
- Là sao **NHỎ, PHỤ** — không có ý nghĩa nhiều trên toàn cuộc đời
- **CHỈ DÙNG ĐỂ XEM VẬN HẠN** (đặc biệt là tiểu hạn)
- Cùng Thiên Sứ tạo bộ **THƯƠNG SỨ**`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // PHẦN CHUNG CẶP THƯƠNG-SỨ
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thuong-su-bo-doi-tinh-chat',
    title: 'Bộ Thương Sứ - Đặc tính chung (xem hạn)',
    sao: ['Thiên Thương', 'Thiên Sứ'],
    doUuTien: 60,
    tomTat: `**Bộ Thương Sứ** (Thiên Thương + Thiên Sứ) — cặp HUNG TINH **CỐ ĐỊNH**:
- **Thiên Thương** luôn ở cung **NÔ BỘC**
- **Thiên Sứ** luôn ở cung **TẬT ÁCH**

⚡ **Đặc tính chung:**
- **BUỒN THẢM**
- **XUI XẺO, KHÔNG MAY**, ngăn trở mọi công việc
- Mang lại **TANG THƯƠNG, BỆNH TẬT, TAI HỌA**

⚡ **Vai trò ĐẶC BIỆT - chỉ có ý nghĩa khi xem HẠN:**
- KHÔNG có ý nghĩa nhiều trên toàn cuộc đời
- **CHỈ DÙNG ĐỂ XEM VẬN HẠN**, đặc biệt là **TIỂU HẠN**
- Khi giải đoán vận hạn mới cần lưu ý vị trí và sự **HỘI TỤ** của Thương-Sứ
  với các sao khác

⚠️ **Cảnh báo của Nguyễn Mạnh Bảo:**
- Năm hạn gặp 2 sao này → **KHÔNG CHẾT CŨNG NGUY MẠNG**
- Nếu thiếu **SAO GIẢI ĐỦ MẠNH**

⚡ **Quan hệ với Thiên La - Địa Võng - Lưới Trời:**
- Thiên Sứ luôn ở Tật + Thiên Thương ở Nô + Thiên La cố định Thìn + Địa Võng
  cố định Tuất → các "lưới trời" cố định trên lá số`,
  },

  {
    id: 'thuong-su-vi-tri-xau-hoa-den-mau',
    title: 'Thương Sứ - Vị trí XẤU họa đến mau',
    sao: ['Thiên Thương', 'Thiên Sứ'],
    doUuTien: 65,
    tomTat: `**Vị trí XẤU NHẤT của bộ Thương Sứ** — họa đến mau khi vào hạn:

⚡ **Họa ĐẾN MAU:**
- **Thiên Sứ** ở **Dần / Thân / Tỵ / Hợi** (Tứ Sinh)

⚡ **Họa ĐẾN THẬT MAU:**
- **Thiên Thương** ở **Sửu / Mão / Thìn / Dậu / Tuất**
- **Thiên Sứ** ở **Tý / Mão / Thìn / Ngọ / Mùi**

⚡ **Vị trí cảnh báo riêng:**
- **Thương Sứ ở Tý, Dần** → ĐỘC

⚠️ **Cách dụng:** Khi luận hạn cần xem trước:
1. Cung Tật có Thiên Sứ
2. Cung Nô có Thiên Thương
3. Vị trí địa chi của 2 cung này
4. Sao hung tụ về có hay không`,
  },

  {
    id: 'thuong-su-cac-sao-giai',
    title: 'Sao GIẢI bộ Thương Sứ',
    sao: ['Thiên Thương', 'Thiên Sứ'],
    doUuTien: 60,
    tomTat: `**Các sao có khả năng GIẢI bộ Thương Sứ** (rất quan trọng khi luận hạn):

⚡ **Chính tinh giải:**
- **Tử Vi** (Đế tinh - uy quyền)
- **Thiên Phủ** (che chở ổn định)
- **Thiên Lương** (phúc đức trường thọ)
- **Thiên Đồng** (phúc lộc)

⚡ **Bàng tinh giải:**
- **Hóa Khoa, Hóa Lộc** (vận may, tri thức, của cải)
- **Tả Phù, Hữu Bật** (được người khác giúp đỡ)
- **Quang Quý** (Ân Quang + Thiên Quý)
- **Khôi Việt** (Thiên Ất Quý Nhân)

⚡ **Sao giải đặc thù:**
- **Tam Giải** (Thiên Giải + Địa Giải + Giải Thần)
- **Quan Phúc** (Thiên Quan + Thiên Phúc)
- **Tuần, Triệt** (lá chắn triệt tiêu hung họa)

⚡ **CUNG PHÚC TỐT:** Phúc nhiều sao tốt, mạnh → chế giải **MẠNH VÀ TOÀN DIỆN**.

⚠️ **Lưu ý quan trọng:** "GIẢI" ở đây không có nghĩa là sự việc **HOÀN TOÀN
KHÔNG XẢY ĐẾN**. Mà là nếu có đến, **CHUYỆN CHẲNG MAY KHÔNG TÁC HỌA ĐÚNG MỨC**
nhờ gặp sao giải hiệu lực.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // THIÊN THƯƠNG TẠI CUNG NÔ BỘC + CÁC BỘ HẠN
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-thuong-tai-no-boc',
    title: 'Thiên Thương tại Nô Bộc - Tổn thương từ phe mình',
    sao: ['Thiên Thương'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Thiên Thương cố định cung Nô Bộc** — đương số gặp **NHIỀU PHIỀN MUỘN BUỒN BÃ**.

⚡ **Cảnh báo:**
- Tổn thương từ **NGƯỜI XUNG QUANH**
- Đặc biệt **ĐỒNG NGHIỆP, CỘNG SỰ, BẠN BÈ**

⚡ **Hình ảnh:**
- Cuộc đời như ván cờ
- Thương ở Nô = những **NƯỚC ĐI BẤT NGỜ** từ "phe mình"
- Buộc đề phòng, tỉnh táo giữa mối quan hệ tưởng vô hại

⚡ **Cách hóa giải:**
- Làm nhiều **VIỆC THIỆN**, lan tỏa năng lượng tích cực
- Giữ tâm **HÒA NHÃ**, tránh tranh chấp
- Tỉnh táo trước **LỜI NÓI VÀ HÀNH ĐỘNG**
- Cung Phúc nhiều sao tốt → giảm thiểu đáng kể`,
  },

  {
    id: 'thien-thuong-han-xuong-khuc-que-su-hoa-thuong',
    title: 'Hạn: Thương + Xương / Khúc - Quế Sứ Hoa Thương',
    sao: ['Thiên Thương'],
    ketHop: ['Văn Xương', 'Văn Khúc'],
    doUuTien: 60,
    tomTat: `⚠️ **Thiên Thương + Văn Xương / Văn Khúc vào hạn** — cách **QUẾ SỨ HOA THƯƠNG**.

⚡ **Đặc trưng:**
- Tác họa **KHỦNG KHIẾP**
- Có thể **CHẾT NON** nếu 2 hạn cùng xấu

⚡ **Hình tượng:**
- "**LỜI BUỒN THƯƠNG**" hay "**LỜI CA SẦU KHỔ**"
- Như tiếng khóc trong tang lễ
- Nước mắt nhiều hơn tiếng cười
- Mất mát, bi thương ẩn sau vẻ đẹp và trí tuệ

⚠️ **Càng nguy hiểm khi:** thêm **THẤT SÁT, KÌNH ĐÀ, LINH TINH** → rủi
ro **CHẾT YỂU**.

⚡ **Cảnh báo:** Bản mệnh hết sức thận trọng khi gặp tổ hợp này, dù ngày
nay nhiều yếu tố nguy hiểm đã được kiểm soát.`,
  },

  {
    id: 'thien-thuong-han-thien-hinh-bi-danh',
    title: 'Hạn: Thương + Thiên Hình tại Nô Bộc - Bị đánh',
    sao: ['Thiên Thương'],
    cung: ['Nô Bộc'],
    ketHop: ['Thiên Hình'],
    doUuTien: 55,
    tomTat: `⚠️ **Thiên Thương + Thiên Hình vào hạn** — họa **"HÌNH THƯƠNG"** = **BỊ ĐÁNH**.

⚡ **Đặc trưng:**
- Tai họa liên quan **VA CHẠM, ĐÁNH ĐẬP**
- Hành vi mang tính **BẠO LỰC**

⚡ **Tại Nô Bộc (cố định):**
- Dễ gặp **XUNG ĐỘT** với người xung quanh
- Đặc biệt **ĐỒNG NGHIỆP, BẠN BÈ, CỘNG SỰ**

⚠️ **Càng nghiêm trọng + Phá Quân + Vũ Khúc + Thất Sát:**
- Hành động bạo lực mạnh hơn

⚠️ **+ Kiếp Sát + Phục Binh + Hóa Kỵ:**
- Vết thương **TÂM LÝ ÂM Ỉ**, khó hồi phục`,
  },

  {
    id: 'thien-thuong-han-tang-mon-tang-thuong',
    title: 'Hạn: Thương + Tang Môn - Mất mát đau thương',
    sao: ['Thiên Thương'],
    ketHop: ['Tang Môn'],
    doUuTien: 55,
    tomTat: `⚠️ **Thiên Thương + Tang Môn vào hạn** — điềm báo **MẤT MÁT ĐAU THƯƠNG**.

⚡ **Đặc trưng:**
- Tổ hợp mang tính **U BUỒN**
- Báo hiệu **TANG SỰ**, nhất là khi nhập hạn xấu
- Có thể **BIẾN ĐỔI PHI THƯỜNG**

⚠️ **+ Đào Hoa + Thiên Việt + cung tình cảm bất ổn:**
- Tín hiệu **KẾT THÚC, ĐỔ VỠ** mối quan hệ kỳ vọng nhiều
- Trường hợp nặng → **CÁCH BIỆT ÂM DƯƠNG** với người thân cận`,
  },

  {
    id: 'thien-thuong-su-han-kinh-hoa-rieu-cu',
    title: 'Hạn: Thương Sứ + Kình + Hỏa + Riêu + Cự - Hại của hại người',
    sao: ['Thiên Thương', 'Thiên Sứ'],
    ketHop: ['Kình Dương', 'Hỏa Tinh', 'Thiên Riêu', 'Cự Môn'],
    doUuTien: 55,
    tomTat: `⚠️ **Thiên Thương + Thiên Sứ + Kình Dương + Hỏa Tinh + Thiên Riêu + Cự Môn**
— **HẠI CỦA, HẠI NGƯỜI**.

⚡ **Đặc trưng:**
- **Kình Dương + Hỏa Tinh** = sao chủ **HAO TÁN, SÁT**
- **Cự Môn + Thiên Riêu** = sao **ÁM**
- Hợp lại → **TÀI SẢN TIÊU TÁN**

⚡ **Cảnh báo:**
- Bị **GHEN GHÉT, ĐỐ KỴ** sinh thị phi
- **HAO TỔN VẬT CHẤT LẪN TINH THẦN**

⚡ **Hóa giải:**
- Giữ **THẬN TRỌNG** trong lời ăn tiếng nói
- Cẩn thận **GIAO TIẾP XÃ HỘI**
- Tránh **HỌA VÔ ĐƠN CHÍ**`,
  },

  {
    id: 'thien-thuong-su-han-am-dau-rac-roi',
    title: 'Hạn: Thương + Sứ - Hay ốm đau, rắc rối vì bạn',
    sao: ['Thiên Thương', 'Thiên Sứ'],
    doUuTien: 55,
    tomTat: `**Thiên Thương + Thiên Sứ vào hạn (đối xứng)** — **HAY ỐM ĐAU + RẮC RỐI VÌ BẠN**.

⚡ **Đặc trưng:**
- **Thiên Sứ** (Tật) → hay **ỐM ĐAU**
- **Thiên Thương** (Nô) → hay gặp **RẮC RỐI VÌ BẠN BÈ**
- Hai mặt cùng tác động: vừa bệnh vừa người thân hại

⚡ **Cảnh báo:**
- Cần đề phòng cả 2 mặt:
  1. **SỨC KHỎE** (Sứ tại Tật)
  2. **MỐI QUAN HỆ** (Thương tại Nô)
- Thận trọng giao thiệp lúc bệnh hoạn`,
  },

  {
    id: 'thien-thuong-su-han-luc-sat-nguy-mang',
    title: 'Hạn: Thương Sứ + Lục Sát - Nguy mạng',
    sao: ['Thiên Thương', 'Thiên Sứ'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 65,
    tomTat: `⚠️ **Thương Sứ gặp Lục Sát Tinh vào hạn** — **NGUY MẠNG, có thể CHẾT**.

⚡ **Lục Sát Tinh:**
- **Kình Dương + Đà La** (Cát Sát)
- **Hỏa Tinh + Linh Tinh** (Hỏa Sát)
- **Địa Không + Địa Kiếp** (Không Kiếp)

⚠️ **Cảnh báo nghiêm trọng:**
- Năm hạn mà gặp 2 sao Thương Sứ + Lục Sát → **KHÔNG CHẾT CŨNG NGUY MẠNG**
- Nếu thiếu **SAO GIẢI ĐỦ MẠNH**

⚡ **Sao giải:** Tử Vi + Thiên Phủ + Thiên Lương + Thiên Đồng → có thể giải
được phần lớn.

⚡ **Ưu tiên kiểm tra:** Khi luận tiểu hạn có Thương Sứ → bắt buộc check
Lục Sát đồng cung và trong tam hợp.`,
  },

  {
    id: 'thien-thuong-han-khoc-thi-cu',
    title: 'Hạn: Thương + Thiên Khốc - Thi cử lận đận',
    sao: ['Thiên Thương'],
    ketHop: ['Thiên Khốc'],
    doUuTien: 50,
    tomTat: `**Thiên Thương + Thiên Khốc vào hạn** — **THI CỬ LẬN ĐẬN**.

⚡ **Đặc trưng:**
- **Thiên Khốc** = bộ Khốc Hư - bại tinh
- **Thiên Thương** = u buồn mất mát
- Hợp lại → kết quả thi cử **KHÔNG NHƯ Ý**, lận đận, trượt lên trượt xuống

⚡ **Hóa giải:** Cần các sao Văn (Xương Khúc đắc), Khôi Việt, Hóa Khoa hội
chiếu để bù đắp.`,
  },
];
