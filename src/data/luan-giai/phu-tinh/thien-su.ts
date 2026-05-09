import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THIÊN SỨ - Thủy, Hung Tinh.
 *
 * QUY LUẬT BẮT BUỘC: Thiên Sứ LUÔN cố định tại cung TẬT ÁCH
 * (engine hardcode `src/core/tuvi/phu-tinh.ts`).
 *
 * Tên gọi: "Thiên" = Trời, "Sứ" = Sứ Giả: THIÊN SỨ = "SỨ GIẢ NHÀ TRỜI"
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
    tomTat: `**Thiên Sứ** là phụ tinh hung tinh, ngũ hành Thủy, được mệnh danh
là "Sứ giả nhà Trời" — chữ "Thiên" nghĩa là Trời, chữ "Sứ" nghĩa là Sứ
Giả.

Theo quy luật bắt buộc của tử vi (engine hardcode), Thiên Sứ luôn cố
định tại cung Tật Ách trên lá số. Việc cố định này mang ý nghĩa biểu
tượng sâu xa: ai sinh ra cũng đều phải chết, và khi chết đi thì luôn có
Sứ giả nhà Trời về đưa đi — cung Tật Ách chính là nơi an bài quy luật
sinh tử ấy.

Đặc tính của Thiên Sứ là hao tán, tai nạn, trở ngại; thị phi, khẩu
thiệt, quan tụng; buồn thảm và xui xẻo, mang lại tang thương, bệnh tật,
tai họa cho đương số khi vào hạn.

Tuy nhiên, Thiên Sứ chỉ là hung tinh nhỏ và chỉ dùng để xem hạn (đặc
biệt là tiểu hạn), không có ý nghĩa nhiều trên toàn cuộc đời. Cùng với
Thiên Thương cố định tại Nô, hai sao tạo thành bộ **Thương Sứ**.`,
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
    tomTat: `Thiên Sứ cố định tại Tật Ách là biểu tượng cho quy luật sinh tử
không thể thay đổi — con người sinh ra ai cũng phải đối diện với bệnh
tật, và cuối cùng đều có "sứ giả nhà Trời" dẫn đi khi số mệnh kết thúc.

Trên toàn cuộc đời, sao này không phải lúc nào cũng đem lại họa hại;
nhiều khi nó chỉ đóng vai trò như lời nhắc nhở đương số gìn giữ sức
khỏe.

Khi vào hạn — đặc biệt khi tại Tật Ách có thêm hung sát tinh hội tụ —
Thiên Sứ phát huy đầy đủ tính chất xấu của mình: đau ốm triền miên,
tinh thần bất an, tai ương ập đến bất ngờ.

Cùng với Thiên Thương, Thiên La (cố định Thìn) và Địa Võng (cố định
Tuất), Thiên Sứ tạo thành một trong bốn sao "lưới trời" cố định trên lá
số.`,
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
    tomTat: `Khi Thiên Sứ gặp đủ Thiên Cơ, **Cự Môn** và **Thiên Hình** vào
hạn, đương số dễ vướng vào kiện tụng, tranh chấp pháp lý — hao tán cả
tiền bạc lẫn danh dự.

Phân tích bộ sao này cho thấy mỗi sao đóng một vai trò:

- Cự Môn là sao thị phi, khẩu thiệt
- Thiên Hình là sao sát phạt, pháp luật
- Thiên Cơ là mưu kế, tính toán
- Thiên Sứ là hung tinh kích hoạt cả bộ

Để hóa giải, cần Tử Vi, Thiên Phủ, Thiên Lương, Thiên Đồng đi cùng để
giảm bớt tính sát.`,
  },

  {
    id: 'thien-su-han-thai-tue-chet',
    title: 'Hạn: Sứ + Thái Tuế - Chết nếu đại hạn xấu',
    sao: ['Thiên Sứ'],
    ketHop: ['Thái Tuế'],
    doUuTien: 60,
    tomTat: `Khi Thiên Sứ gặp **Thái Tuế** vào hạn, nếu đại hạn cũng xấu thì
đương số có nguy cơ chết.

Đại vận xấu cộng thêm tiểu vận có Sứ và Thái Tuế khiến hung họa rõ rệt,
đương số dễ gặp biến cố lớn về sức khỏe.

Để phòng tránh, đương số cần chủ động chăm sóc thân thể, thăm khám kịp
thời và tránh các hoạt động nguy hiểm.

Để hóa giải, cần sao giải mạnh hội tụ — Tử Phủ Lương Đồng, Quan Phúc,
Tuần Triệt.`,
  },

  {
    id: 'thien-su-han-thien-khong-luu-ha-kinh-chet',
    title: 'Hạn: Sứ + Thiên Không + Lưu Hà + Kình - Chết',
    sao: ['Thiên Sứ'],
    ketHop: ['Thiên Không', 'Lưu Hà', 'Kình Dương'],
    doUuTien: 65,
    tomTat: `Khi Thiên Sứ cùng Thiên Không, Lưu Hà và Kình Dương đồng chiếu
vào hạn, đương số có nguy cơ chết — đây là một trong các cách cực xấu
nhất khi luận hạn về tử vong.

Bộ sao mang tính hung hiểm nặng nề, tổn hại nghiêm trọng cả sức khỏe
lẫn tính mạng. Phân tích từng thành phần:

- Thiên Không là sao trống không, hủy diệt
- Lưu Hà là sao thủy tai, sát phạt
- Kình Dương là sao dao kéo, sát thương
- Thiên Sứ là sứ giả nhà Trời

Bốn sao kết hợp khiến cách cục trở nên cực kỳ nguy hiểm.`,
  },

  {
    id: 'thien-su-han-tang-ho-co-tang',
    title: 'Hạn: Sứ + Tang Môn + Bạch Hổ - Có tang',
    sao: ['Thiên Sứ'],
    ketHop: ['Tang Môn', 'Bạch Hổ'],
    doUuTien: 60,
    tomTat: `Khi Thiên Sứ gặp Tang Môn và Bạch Hổ vào hạn, đó là điềm có
tang. Bộ sao này báo hiệu nỗi đau tang tóc — bệnh tật hoặc mất mát nặng
nề trong gia đình; tang có thể xảy ra cho người thuộc cung mà bộ sao
đóng.

Phân tích cấu trúc bộ sao:

- Tang Môn là sao tang sự
- Bạch Hổ tạo trục Tang - Hổ kiếp nghiệp đối xung
- Thiên Sứ là sứ giả nhà Trời kích hoạt cả bộ

Cách đoán: tùy vị trí cung khác trong lá số mà suy đoán ai là người
gặp nạn và biến cố xảy ra ở đâu.`,
  },

  {
    id: 'thien-su-ty-kinh-da-tue-chet',
    title: 'Sứ ở Tý + Kình Đà + Thái Tuế nhị hạn - Chết',
    sao: ['Thiên Sứ'],
    chi: ['Tý'],
    ketHop: ['Kình Dương', 'Đà La', 'Thái Tuế'],
    doUuTien: 65,
    tomTat: `Khi Thiên Sứ tại Tý gặp đủ Kình Dương, Đà La và Thái Tuế cùng
vào nhị hạn, đương số có nguy cơ chết.

"Nhị hạn" là cảnh cả đại hạn và tiểu hạn cùng phạm — cách cục cực xấu,
dễ ứng nghiệm với các sự kiện, tình huống nguy hiểm tính mạng. Nếu
không có cát tinh chủ hóa giải, đương số khó qua khỏi — đây là một
trong các cách chết rõ rệt nhất trong tử vi.

Vị trí Tý đặc biệt nguy hiểm vì:

- Tý là cung Thủy, cùng hành với Sứ nên tăng tính sát thủy
- Thêm Kình Đà sát và Thái Tuế kích hạn, mức độ càng dữ dội`,
  },

  {
    id: 'thien-su-luc-sat-chet',
    title: 'Sứ + Lục Sát - Chết',
    sao: ['Thiên Sứ'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 65,
    tomTat: `Khi Thiên Sứ gặp Lục Sát Tinh, mức độ nguy hại chồng chất —
đương số có nguy cơ chết. Lục Sát Tinh gồm:

- Kình Dương và Đà La (Cát Sát)
- Hỏa Tinh và Linh Tinh (Hỏa Sát)
- Địa Không và Địa Kiếp (Không Kiếp)

Càng hội nhiều hung tinh, biến cố càng lớn — đương số cần cẩn trọng về
sức khỏe vì khó khăn, trở ngại có thể ập đến bất cứ lúc nào.

Đây là một trong các cách chết nguy hiểm nhất khi luận hạn — cần kiểm
tra kỹ phúc tinh và sao giải trước khi kết luận.`,
  },

  {
    id: 'thien-su-kinh-da-du-tu-dong-luong-giai',
    title: 'Sứ + Kình + Đà - Dữ (Tử Đồng Lương giải được)',
    sao: ['Thiên Sứ'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 55,
    tomTat: `Thiên Sứ gặp Kình Dương và Đà La là cách dữ — bộ sát tinh nặng
cùng Thiên Sứ tạo nên tai họa lớn cho đương số.

May mắn là cách này có thể giải hiệu quả bằng Tử Vi, Thiên Đồng hoặc
Thiên Lương.

Khi gặp **Tử / Đồng / Lương** đồng cung hoặc tam hợp, tai họa được
chuyển thành chấn động nhỏ, không đến mức nguy mạng.`,
  },

  {
    id: 'thien-su-han-van-xuong-thi-cu-lan-dan',
    title: 'Hạn: Sứ + Văn Xương - Khoa trường thi cử lận đận',
    sao: ['Thiên Sứ'],
    ketHop: ['Văn Xương'],
    doUuTien: 50,
    tomTat: `Khi Thiên Sứ gặp **Văn Xương** vào hạn, đương số gặp cảnh khoa
trường, thi cử lận đận. Học hành và thi cử không đạt kỳ vọng, kết quả
không được như mong muốn, khoa cử trắc trở.

Văn Xương vốn là sao chủ thi cử khoa bảng, nhưng khi bị Thiên Sứ — hung
tinh kích hoạt — đi cùng thì tính tốt vốn có sẽ bị phá.

Để hóa giải cần Khôi Việt, Hóa Khoa, Tả Hữu hội chiếu để bù đắp lại
phần khuyết.`,
  },

  {
    id: 'thien-su-ty-dan-doc',
    title: 'Sứ ở Tý / Dần - Độc',
    sao: ['Thiên Sứ'],
    chi: ['Tý', 'Dần'],
    doUuTien: 60,
    tomTat: `Thiên Sứ tại Tý hoặc Dần là vị trí độc nhất — xấu nhất trên lá
số. Tại hai vị trí này, tính độc của Thiên Sứ phát huy mạnh mẽ nhất do:

- Tý là cung Thủy, cùng hành với Sứ nên tăng độc
- Dần thuộc Tứ Sinh, kích hoạt biến động

Khi luận, cần đặc biệt cảnh giác đối với đương số có Thiên Sứ nằm tại
hai vị trí này trong các vận hạn.`,
  },

  {
    id: 'thien-su-hoa-den-mau',
    title: 'Sứ - Họa đến mau (Tý/Mão/Thìn/Ngọ/Mùi)',
    sao: ['Thiên Sứ'],
    chi: ['Tý', 'Mão', 'Thìn', 'Ngọ', 'Mùi'],
    doUuTien: 55,
    tomTat: `Thiên Sứ tại Tý, Mão, Thìn, Ngọ hoặc Mùi là những vị trí khiến
họa đến mau với đương số.

Tại các vị trí này, Thiên Sứ phát tác rất nhanh khi vào hạn — đương số
cần đề phòng tai họa bất ngờ ngay từ đầu vận.`,
  },

  {
    id: 'thien-su-han-kinh-hoa-rieu-cu-hai-cua-hai-nguoi',
    title: 'Hạn: Sứ + Kình + Hỏa + Riêu + Cự - Hại của hại người',
    sao: ['Thiên Sứ'],
    ketHop: ['Kình Dương', 'Hỏa Tinh', 'Thiên Riêu', 'Cự Môn'],
    doUuTien: 55,
    tomTat: `Khi Thiên Sứ gặp đủ Kình Dương, Hỏa Tinh, Thiên Riêu và Cự Môn
vào hạn, đương số rơi vào cảnh "hại của, hại người". Tổ hợp này gây hao
tán tiền bạc, tổn hại người thân, lại bị ghen ghét đố kỵ và sinh thị
phi — hao tổn cả vật chất lẫn tinh thần.

Để hóa giải, đương số cần giữ tâm hòa nhã, tránh tranh chấp và lời nói
gây xích mích; nếu có cát tinh đồng cung sẽ giảm bớt tác họa đáng kể.`,
  },
];
