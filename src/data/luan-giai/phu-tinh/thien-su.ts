import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THIÊN SỨ - Thủy, Hung Tinh.
 *
 * ⚡ QUY LUẬT BẮT BUỘC: Thiên Sứ LUÔN cố định tại cung TẬT ÁCH
 * (engine hardcode `src/core/tuvi/phu-tinh.ts`).
 *
 * Tên gọi: "Thiên" = Trời, "Sứ" = Sứ Giả → THIÊN SỨ = "SỨ GIẢ NHÀ TRỜI"
 * Cố định ở Tật Ách = ngụ ý: ai sinh ra cũng đều phải chết, và khi chết đi
 * thì luôn có Sứ Giả nhà Trời về đưa đi.
 *
 * Phần CHUNG bộ Thương-Sứ đã viết tại file thien-thuong.ts với
 * sao: ['Thiên Thương', 'Thiên Sứ'].
 */
export const luanGiai_ThienSu: DoanLuanGiai[] = [
  {
    id: 'thien-su-tinh-chat-chung',
    title: 'Thiên Sứ - Đặc tính chung (cố định tại Tật Ách)',
    sao: ['Thiên Sứ'],
    doUuTien: 32,
    tomTat: `**Thiên Sứ** — phụ tinh **HUNG TINH**, "SỨ GIẢ NHÀ TRỜI".

**Ngũ hành:** **Thủy**.

⚡ **Tên gọi:**
- "**Thiên**" = Trời
- "**Sứ**" = Sứ Giả
- → **THIÊN SỨ** = **SỨ GIẢ NHÀ TRỜI**

⚡ **QUY LUẬT BẮT BUỘC:** LUÔN cố định tại cung **TẬT ÁCH** (engine hardcode).

⚡ **Ý nghĩa biểu tượng:**
- Cố định ở Tật Ách → ngụ ý:
  - Ai sinh ra cũng đều phải **CHẾT**
  - Khi chết đi luôn có **SỨ GIẢ NHÀ TRỜI** về đưa đi

⚡ **Đặc tính:**
- **Hao tán, tai nạn, trở ngại**
- **Thị phi, khẩu thiệt, quan tụng**
- Buồn thảm, xui xẻo, không may
- Mang lại tang thương, bệnh tật, tai họa

⚡ **Vai trò:**
- Là sao **HUNG TINH NHỎ**
- **CHỈ DÙNG XEM HẠN** (đặc biệt tiểu hạn)
- KHÔNG có ý nghĩa nhiều trên toàn cuộc đời
- Cùng Thiên Thương (cố định Nô) tạo bộ **THƯƠNG SỨ**`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // THIÊN SỨ TẠI CUNG TẬT ÁCH
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-su-tai-tat-ach',
    title: 'Thiên Sứ tại Tật Ách - Sứ giả nhà Trời',
    sao: ['Thiên Sứ'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `**Thiên Sứ cố định cung Tật Ách** — biểu tượng quy luật **SINH-TỬ** không
thể thay đổi.

⚡ **Đặc tính:**
- Đại diện cho **QUY LUẬT BẤT BIẾN**:
  - Con người sinh ra ai cũng phải đối diện **BỆNH TẬT**
  - Cuối cùng sẽ có **"SỨ GIẢ NHÀ TRỜI"** dẫn đi khi số mệnh kết thúc

⚡ **Trên toàn cuộc đời:**
- KHÔNG phải lúc nào cũng đem lại họa hại
- Như **LỜI NHẮC NHỞ** về việc gìn giữ sức khỏe

⚡ **Khi vào hạn (đặc biệt tại Tật Ách + hung sát tinh):**
- Phát huy tính chất XẤU
- Đau ốm **TRIỀN MIÊN**
- Tinh thần **BẤT AN**
- Tai ương **BẤT NGỜ**

⚡ **Cùng "Lưới Trời":**
- Thiên Sứ + Thiên Thương + Thiên La + Địa Võng
- → 4 sao "lưới trời" cố định trên lá số`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // THIÊN SỨ VÀO HẠN - CÁC BỘ KẾT HỢP
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-su-han-co-cu-hinh-kien-tung',
    title: 'Hạn: Sứ + Cơ + Cự + Hình - Kiện tụng',
    sao: ['Thiên Sứ'],
    ketHop: ['Thiên Cơ', 'Cự Môn', 'Thiên Hình'],
    doUuTien: 55,
    tomTat: `⚠️ **Thiên Sứ + Thiên Cơ + Cự Môn + Thiên Hình vào hạn** — **KIỆN TỤNG**.

⚡ **Đặc trưng:**
- Vướng vào **KIỆN TỤNG, TRANH CHẤP PHÁP LÝ**
- Hao tán **TIỀN BẠC VÀ DANH DỰ**

⚡ **Phân tích bộ sao:**
- **Cự Môn** = sao thị phi khẩu thiệt
- **Thiên Hình** = sát phạt pháp luật
- **Thiên Cơ** = mưu kế tính toán
- **Thiên Sứ** = hung tinh kích hoạt

⚡ **Hóa giải:** Cần Tử Vi, Thiên Phủ, Lương, Đồng đi cùng giảm bớt.`,
  },

  {
    id: 'thien-su-han-thai-tue-chet',
    title: 'Hạn: Sứ + Thái Tuế - Chết nếu đại hạn xấu',
    sao: ['Thiên Sứ'],
    ketHop: ['Thái Tuế'],
    doUuTien: 60,
    tomTat: `⚠️ **Thiên Sứ + Thái Tuế vào hạn** — **CHẾT** nếu đại hạn xấu.

⚡ **Đặc trưng:**
- Đại vận xấu + tiểu vận có Sứ + Thái Tuế → hung họa **RÕ RỆT**
- Đương số dễ gặp **BIẾN CỐ LỚN VỀ SỨC KHỎE**

⚡ **Phòng tránh:**
- Chủ động **CHĂM SÓC THÂN THỂ**
- **THĂM KHÁM KỊP THỜI**
- Tránh hoạt động nguy hiểm

⚡ **Hóa giải:** Cần sao giải mạnh (Tử Phủ Lương Đồng + Quan Phúc + Tuần Triệt).`,
  },

  {
    id: 'thien-su-han-thien-khong-luu-ha-kinh-chet',
    title: 'Hạn: Sứ + Thiên Không + Lưu Hà + Kình - Chết',
    sao: ['Thiên Sứ'],
    ketHop: ['Thiên Không', 'Lưu Hà', 'Kình Dương'],
    doUuTien: 65,
    tomTat: `⚠️ **Thiên Sứ + Thiên Không + Lưu Hà + Kình Dương đồng chiếu vào hạn** —
**CHẾT**.

⚡ **Đặc trưng:**
- Bộ sao mang tính **HUNG HIỂM NẶNG NỀ**
- Tổn hại **NGHIÊM TRỌNG** sức khỏe và **TÍNH MẠNG**

⚡ **Phân tích:**
- **Thiên Không** = sao trống không, hủy diệt
- **Lưu Hà** = thủy tai, sát phạt
- **Kình Dương** = dao kéo, sát thương
- **Thiên Sứ** = sứ giả nhà Trời

⚡ **Là một trong các cách CỰC XẤU nhất** khi luận hạn về tử vong.`,
  },

  {
    id: 'thien-su-han-tang-ho-co-tang',
    title: 'Hạn: Sứ + Tang Môn + Bạch Hổ - Có tang',
    sao: ['Thiên Sứ'],
    ketHop: ['Tang Môn', 'Bạch Hổ'],
    doUuTien: 60,
    tomTat: `⚠️ **Thiên Sứ + Tang Môn + Bạch Hổ vào hạn** — **CÓ TANG**.

⚡ **Đặc trưng:**
- Báo hiệu **NỖI ĐAU TANG TÓC**
- Bệnh tật hoặc **MẤT MÁT NẶNG NỀ** trong gia đình
- Tại cung nào → tang có thể xảy ra cho **NGƯỜI THUỘC CUNG ĐÓ**

⚡ **Phân tích:**
- **Tang Môn** = sao tang sự
- **Bạch Hổ** = trục Tang-Hổ kiếp nghiệp (đối xung)
- **Thiên Sứ** = sứ giả nhà Trời kích hoạt

⚡ **Cách đoán:** Tùy vị trí cung khác trong lá số → suy đoán **AI là người
gặp nạn** và **biến cố xảy ra ở đâu**.`,
  },

  {
    id: 'thien-su-ty-kinh-da-tue-chet',
    title: 'Sứ ở Tý + Kình Đà + Thái Tuế nhị hạn - Chết',
    sao: ['Thiên Sứ'],
    chi: ['Tý'],
    ketHop: ['Kình Dương', 'Đà La', 'Thái Tuế'],
    doUuTien: 65,
    tomTat: `⚠️ **Thiên Sứ tại Tý + Kình Dương + Đà La + Thái Tuế vào nhị hạn** — **CHẾT**.

⚡ **Đặc trưng:**
- "Nhị hạn" = cả **ĐẠI HẠN + TIỂU HẠN** cùng phạm
- Cách cục **CỰC XẤU**
- Dễ ứng nghiệm với sự kiện, tình huống **NGUY HIỂM TÍNH MẠNG**

⚡ **Cảnh báo:**
- Nếu không có sao cát tinh chủ hóa giải → khó qua khỏi
- Là một trong các cách **CHẾT** rõ rệt nhất trong tử vi

⚡ **Vị trí Tý là đặc biệt** vì:
- Tý là cung Thủy
- Thiên Sứ Thủy + cung Thủy → tăng tính sát thủy
- Thêm Kình Đà sát + Thái Tuế kích hạn`,
  },

  {
    id: 'thien-su-luc-sat-chet',
    title: 'Sứ + Lục Sát - Chết',
    sao: ['Thiên Sứ'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 65,
    tomTat: `⚠️ **Thiên Sứ gặp Lục Sát Tinh** — **CHẾT**, mức độ nguy hại **CHỒNG CHẤT**.

⚡ **Lục Sát Tinh:**
- **Kình Dương + Đà La** (Cát Sát)
- **Hỏa Tinh + Linh Tinh** (Hỏa Sát)
- **Địa Không + Địa Kiếp** (Không Kiếp)

⚡ **Đặc trưng:**
- Càng hội nhiều hung tinh → biến cố càng lớn
- Cần cẩn trọng về **SỨC KHỎE**
- Khó khăn, trở ngại có thể xảy đến

⚡ **Cảnh báo:** Đây là một trong các cách **CHẾT** nguy hiểm nhất khi luận
hạn — cần kiểm tra kỹ phúc tinh và sao giải.`,
  },

  {
    id: 'thien-su-kinh-da-du-tu-dong-luong-giai',
    title: 'Sứ + Kình + Đà - Dữ (Tử Đồng Lương giải được)',
    sao: ['Thiên Sứ'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 55,
    tomTat: `⚠️ **Thiên Sứ + Kình Dương + Đà La** — **DỮ**.

⚡ **Đặc trưng:**
- Bộ sát tinh nặng cùng Thiên Sứ
- Tai họa lớn

⚡ **Hóa giải HIỆU QUẢ:** Cách này CÓ THỂ GIẢI bằng:
- **Tử Vi**
- **Thiên Đồng**
- **Thiên Lương**

⚡ **Lưu ý:** Khi gặp **Tử/Đồng/Lương** đồng cung hoặc tam hợp → tai họa
chuyển thành **chấn động nhỏ**, không đến mức nguy mạng.`,
  },

  {
    id: 'thien-su-han-van-xuong-thi-cu-lan-dan',
    title: 'Hạn: Sứ + Văn Xương - Khoa trường thi cử lận đận',
    sao: ['Thiên Sứ'],
    ketHop: ['Văn Xương'],
    doUuTien: 50,
    tomTat: `**Thiên Sứ + Văn Xương vào hạn** — **KHOA TRƯỜNG, THI CỬ LẬN ĐẬN**.

⚡ **Đặc trưng:**
- Học hành, thi cử **KHÔNG ĐẠT KỲ VỌNG**
- Kết quả không được như mong muốn
- Khoa cử trắc trở

⚡ **Phân tích:**
- **Văn Xương** = sao chủ thi cử khoa bảng
- **Thiên Sứ** = hung tinh kích hoạt → phá tính tốt của Văn Xương

⚡ **Hóa giải:** Cần Khôi Việt + Hóa Khoa + Tả Hữu hội chiếu bù đắp.`,
  },

  {
    id: 'thien-su-ty-dan-doc',
    title: 'Sứ ở Tý / Dần - Độc',
    sao: ['Thiên Sứ'],
    chi: ['Tý', 'Dần'],
    doUuTien: 60,
    tomTat: `⚠️ **Thiên Sứ tại Tý hoặc Dần** — **ĐỘC**, vị trí xấu nhất.

⚡ **Đặc trưng:**
- Vị trí Tý và Dần phát huy mạnh nhất tính độc của Thiên Sứ

⚡ **Lưu ý:**
- Tý là cung Thủy - cùng hành với Sứ → tăng độc
- Dần là Tứ Sinh - kích hoạt biến động

⚡ **Khi luận:** Cần đặc biệt cảnh giác trong vận hạn.`,
  },

  {
    id: 'thien-su-hoa-den-mau',
    title: 'Sứ - Họa đến mau (Tý/Mão/Thìn/Ngọ/Mùi)',
    sao: ['Thiên Sứ'],
    chi: ['Tý', 'Mão', 'Thìn', 'Ngọ', 'Mùi'],
    doUuTien: 55,
    tomTat: `⚠️ **Thiên Sứ tại Tý / Mão / Thìn / Ngọ / Mùi** — họa đến **MAU**.

⚡ **Đặc trưng:**
- Tại các vị trí này, Thiên Sứ phát tác **NHANH** khi vào hạn
- Cảnh báo cần đề phòng tai họa **BẤT NGỜ**`,
  },

  {
    id: 'thien-su-han-kinh-hoa-rieu-cu-hai-cua-hai-nguoi',
    title: 'Hạn: Sứ + Kình + Hỏa + Riêu + Cự - Hại của hại người',
    sao: ['Thiên Sứ'],
    ketHop: ['Kình Dương', 'Hỏa Tinh', 'Thiên Riêu', 'Cự Môn'],
    doUuTien: 55,
    tomTat: `⚠️ **Thiên Sứ + Kình Dương + Hỏa Tinh + Thiên Riêu + Cự Môn vào hạn** —
**HẠI CỦA, HẠI NGƯỜI**.

⚡ **Đặc trưng:**
- Hao tán **TIỀN BẠC**
- Tổn hại **NGƯỜI THÂN**
- Bị **GHEN GHÉT, ĐỐ KỴ**, sinh thị phi
- Hao tổn **VẬT CHẤT VÀ TINH THẦN**

⚡ **Hóa giải:**
- Giữ tâm hòa nhã
- Tránh tranh chấp, lời nói
- Cát tinh đồng cung sẽ giảm bớt tác họa`,
  },
];
