import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THIÊN ĐỒNG
 */
export const luanGiai_ThienDong: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung của sao Thiên Đồng
  // ============================================================
  {
    id: 'thien-dong-tinh-chat-chung',
    title: 'Thiên Đồng - Đặc tính chung',
    sao: ['Thiên Đồng'],
    doUuTien: 30,
    tomTat: `**Thiên Đồng** thuộc chòm Nam Đẩu Tinh, ngũ hành Thủy (Dương Thủy),
chủ về Phúc - Lộc - Thọ (đủ cả Tam Tinh) và quản trưởng cung Phúc Đức. Hóa khí
là Dịch (di chuyển); tên thường gọi là Đồng.

Vị trí miếu hãm:

- **Miếu**: Dần, Thân
- **Vượng**: Tý
- **Đắc**: Mão, Tỵ, Hợi
- **Hãm**: Thìn, Tuất, Sửu, Mùi, Ngọ, Dậu`,

    chiTiet: `## Bản chất

Trong hệ chính tinh, Thiên Đồng là một trong những bộ sao mang rất nhiều đặc
tính tốt đẹp. Đây chính là sự hưởng thụ — cõi vui, cõi lạc thú, cõi thiên thai.
Tam tinh Phúc - Lộc - Thọ đều có đủ ở đương số có sao này.

## Phú cổ nhân về Thiên Đồng

> Thiên Đồng mặt lớn mình dày
> Dáng người đôn hậu diện đầy phương viên
> Tâm cao trí đại nhưng hiền
> Không cao ngạo dẫu bút nghiên thực tài
> Đãm hiềm đà kỵ lâm lai
> Mắt lươn ti hí lại hay ngồi đồng

## Hán Việt

Đồng nghĩa là Hòa Đồng, Đồng Bóng, Đồng Cốt, Đồng Chí, Hòa Tan, Hòa Quện — hòa
giữa cõi trần và cõi âm, gieo duyên lành cho mọi người. Vì thế Thiên Đồng là
sao chủ về tâm linh; đương số đam mê tìm hiểu chuyện tâm linh, thích hầu đồng
hầu bóng.

## Hóa khí Dịch

Hóa khí của Thiên Đồng là Dịch (di chuyển) — đương số không ngồi im một chỗ
được, thích đi đây đi đó, ham vui, thích ngắm cảnh. Khó làm việc gì gò bó về
thời gian và không gian.

## Phúc tinh hóa giải tự nhiên

Đương số có Thiên Đồng vô tư, vô lo, vô nghĩ: không ai có thể hại được, họa
đến đều có thể tự hóa giải. Tâm an thì vạn sự lành, vì thế Thiên Đồng cũng
cai quản tuổi thọ — chủ mệnh có Thiên Đồng thủ Mệnh hoặc Thân rất hiếm khi
mất sớm.

## Sao kỵ

Thiên Đồng rất kỵ Hình, Riêu, Không Kiếp, Hóa Kỵ và Đà La: dễ trở nên hồ đồ,
ăn chơi thái quá, ăn không nói có, hư hỏng, cờ bạc, nghiện ngập.`,
  },

  // ============================================================
  // 2. Thiên Đồng tại Mệnh - dung mạo
  // ============================================================
  {
    id: 'thien-dong-tai-menh-dung-mao',
    title: 'Thiên Đồng tại Mệnh - Dung mạo',
    sao: ['Thiên Đồng'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Đương số có **Thiên Đồng** cư Mệnh thường mặt lớn, mình dày, người
to cao, da trắng; dáng đôn hậu, diện mạo tròn đầy.`,
  },

  {
    id: 'thien-dong-tai-menh-dung-mao-ham',
    title: 'Thiên Đồng Hãm tại Mệnh - Dung mạo',
    sao: ['Thiên Đồng'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    doUuTien: 75,
    tomTat: `Khi Thiên Đồng **Hãm** tại Mệnh, đương số có nước da ngăm đen, dáng
hơi lùn và béo tròn, mắt dễ một mí.`,
  },

  {
    id: 'thien-dong-tai-menh-dung-mao-ham-hoa-ky-da-la',
    title: 'Thiên Đồng Hãm tại Mệnh + Hóa Kỵ + Đà La',
    sao: ['Thiên Đồng'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    ketHop: ['Hóa Kỵ', 'Đà La'],
    doUuTien: 72,
    tomTat: `Khi Thiên Đồng **Hãm** tại Mệnh có Hóa Kỵ cùng Đà La hội tụ, đương
số mắt lươn ti hí và dễ đi hầu đồng.`,
  },

  // ============================================================
  // 3. Thiên Đồng tại Mệnh - tính cách chung
  // ============================================================
  {
    id: 'thien-dong-tai-menh-tinh-cach',
    title: 'Thiên Đồng tại Mệnh - Tính cách',
    sao: ['Thiên Đồng'],
    cung: ['Mệnh'],
    doUuTien: 85,
    tomTat: `Đương số có **Thiên Đồng** cư Mệnh hiền lành, tốt bụng, vô tư, gặp
nhiều may mắn và thích giúp đỡ người khác. Tính tình cởi mở, phóng khoáng, ham
ăn ham uống, mang nét trẻ con — cả thèm chóng chán, ưa nịnh, hay rỗi hay hờn.

Tâm hồn bay bổng, treo ngược cành cây — chủ mệnh thích thơ văn, yêu cỏ cây hoa
lá, ưa cuộc sống an nhàn đạm bạc và không tranh giành với ai.`,

    chiTiet: `## Tính trẻ con

Đồng cũng có nghĩa là Trẻ Con, Trẻ Mục Đồng — vì thế đương số có Thiên Đồng
mang đậm nét hồn nhiên:

- Ham vui, ham chơi, ham hưởng lạc
- Nhanh giận nhanh quên, ít khi để bụng chuyện người khác
- Cả thèm chóng chán: thích cái gì đòi cho bằng được, hôm sau lại bỏ
- Hôm nay yêu người này, mai có thể yêu người khác được ngay
- Ưa nịnh, rất thích nịnh và tự ái cao
- Lúc rỗi thì như đứa trẻ con hay rỗi

## Tính giao tiếp

Ngồi ở đâu chủ mệnh cũng có thể nói chuyện được, lê la câu cà câu muống, mồm
mép tép nhảy như con chim trích — lúc cần nói thì nói cả ngày không nghỉ, lúc
không cần thì cả ngày không thốt một câu.

## Đa thú vui

Vì thích hưởng thụ, trên trời dưới đất cái gì đương số cũng thích — đàn ca sáo
nhị, chơi hoa lan, đồ cổ, làm đẹp, mua sắm. Thiên Đồng rất dễ thành nghiện
(nghiện mua sắm, nghiện sắm đồ, nghiện thú vui); chơi gì cũng hơi thái quá:
chơi lan thì trong nhà cả vườn lan, chơi đàn thì có cả trăm cây đàn.`,
  },

  // ============================================================
  // 4. Thiên Đồng tại Mệnh - tính cách theo trạng thái
  // ============================================================
  {
    id: 'thien-dong-tai-menh-tinh-cach-trang-thai',
    title: 'Thiên Đồng tại Mệnh - Tính cách theo trạng thái (chiTiet)',
    sao: ['Thiên Đồng'],
    cung: ['Mệnh'],
    doUuTien: 50,
    tomTat: `Tính cách của đương số có Thiên Đồng tại Mệnh biến thiên mạnh theo
trạng thái —`,

    chiTiet: `## Tổng quan

Tính cách của đương số có Thiên Đồng tại Mệnh biến thiên mạnh theo trạng thái
miếu hãm; ngoài ra màu da cũng cho biết khá nhiều về vận trình.

## Lưu ý màu da

- Béo trắng: thoáng đãng, kiếm tiền dễ, may mắn — ít khi rơi vào cảnh nghèo.
- Da đen: keo kiệt, thực dục, có phần ích kỷ và hay vô tâm.`,
  },

  {
    id: 'thien-dong-tai-menh-mieu',
    title: 'Thiên Đồng Miếu tại Mệnh - Tính cách',
    sao: ['Thiên Đồng'],
    cung: ['Mệnh'],
    chi: ['Dần', 'Thân'],
    trangThai: ['Miếu'],
    doUuTien: 80,
    tomTat: `Khi Thiên Đồng **Miếu** tại Mệnh ở Dần hoặc Thân, đương số thông
minh, ôn hòa, vui tính, chăm chỉ, đức hạnh và tốt bụng. Chủ mệnh hay thay đổi
công việc, ý chí quyết tâm không cao nên làm gì cũng dễ bỏ giữa chừng. Bù lại,
cuộc sống khá giả, thanh nhàn và thọ trường.`,
  },

  {
    id: 'thien-dong-tai-menh-dac',
    title: 'Thiên Đồng Đắc tại Mệnh - Tính cách',
    sao: ['Thiên Đồng'],
    cung: ['Mệnh'],
    chi: ['Mão', 'Tỵ', 'Hợi'],
    trangThai: ['Đắc'],
    doUuTien: 80,
    tomTat: `Khi Thiên Đồng **Đắc** tại Mệnh ở Mão, Tỵ hay Hợi, đương số thích
phiêu lưu, hay đổi chỗ ở, chỗ làm và công việc. Tính tình phong lưu lãng mạn,
nay đây mai đó; ưa chuyện tâm linh, thích làm phước và giúp đỡ người khác.

Lập trường của chủ mệnh không vững vàng, hay thay đổi. Khi xử lý công việc,
đương số dễ rơi vào trạng thái tình cảm nhiều hơn lý trí, sống ân tình ân
nghĩa. Số dễ ly hương tổ nghiệp, làm ăn nơi xứ người.`,
  },

  {
    id: 'thien-dong-tai-menh-ham',
    title: 'Thiên Đồng Hãm tại Mệnh - Tính cách',
    sao: ['Thiên Đồng'],
    cung: ['Mệnh'],
    chi: ['Thìn', 'Tuất', 'Dậu', 'Sửu', 'Mùi', 'Ngọ'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `Khi Thiên Đồng **Hãm** tại Mệnh ở Thìn, Tuất, Dậu, Sửu, Mùi hay
Ngọ, đương số có tính khí thay đổi thất thường, sáng nắng chiều mưa. Chủ mệnh
hay làm ơn mắc oán, thường gặp thị phi hiểu lầm; sử dụng ngôn ngữ bỗ bã, không
cẩn trọng và làm gì cũng cần dựa vào người khác mới thành công.

Đương số dễ ăn cơm nhà vác tù và hàng tổng — thích giúp đỡ người khác đến quên
việc nhà. Tính tự ái rất cao. Tuy vậy về già suy nghĩ chín chắn hơn, cuộc sống
ổn định lại.`,
  },

  // ============================================================
  // 5. Thiên Đồng tại Mệnh - công danh tài lộc & phúc thọ
  // ============================================================
  {
    id: 'thien-dong-tai-menh-tai-loc-phuc-tho',
    title: 'Thiên Đồng tại Mệnh - Tài lộc & phúc thọ',
    sao: ['Thiên Đồng'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `Thiên Đồng chủ về may mắn nên đương số dễ kiếm tiền, ít khi phải lo
lắng chuyện tiền bạc. Tuy vậy chủ mệnh tính phóng khoáng, thích chi tiêu, ham
ăn ham chơi: đôi lúc gặp khó khăn về tiền nhưng hết tiền lại có.

Là một Phúc Tinh, Thiên Đồng giữ cho đương số hiếm khi mất sớm và cũng không
ai hại được vì khả năng tự hóa giải.`,
  },

  // ============================================================
  // 6. Bộ sao TỐT của Thiên Đồng
  // ============================================================
  {
    id: 'thien-dong-bo-sao-tot',
    title: 'Thiên Đồng - Bộ sao TỐT',
    sao: ['Thiên Đồng'],
    doUuTien: 50,
    tomTat: `Các bộ sao tốt của Thiên Đồng bao gồm:

- Thiên Đồng tại Ngọ (đơn thủ): uy quyền hiển hách, trấn giữ một phương
- Đồng Lương Dần Thân — "khi xưa bạch thủ mà nay sang giàu": sư phạm, y dược,
  lý luận
- Đồng Âm Tý Ngọ — cách "Thủy Trừng Quế Ngạc", Tý đẹp hơn Ngọ
- Cách Cơ Nguyệt Đồng Lương và Cơ Cự Đồng: cách cục tốt
- Thiên Đồng cùng Long Phượng cùng Khôi Việt: làm thầy cúng nổi danh`,

    chiTiet: `## Thiên Đồng tại Ngọ (đơn thủ)

Tuy Thiên Đồng tại Ngọ là hãm, đương số vẫn có uy quyền hiển hách và trấn giữ
một phương.

## Đồng Lương Dần Thân (Thiên Đồng + Thiên Lương)

> Đồng Lương đắc cách Dần Thân
> Khi xưa bạch thủ mà nay sang giàu

Đương số có cách Đồng Lương Dần Thân thường mang năng khiếu sư phạm, y dược
cùng lý luận sắc bén.

## Đồng Âm Tý Ngọ - Thủy Trừng Quế Ngạc

Thiên Đồng cùng Thái Âm tại hai cung Tý hoặc Ngọ tạo thành cách **Thủy Trừng
Quế Ngạc**. Đồng Âm tại Tý đẹp hơn ở Ngọ.

## Các cách cục bộ ba

- **Cơ Nguyệt Đồng Lương**: cách cục thượng cát
- **Cơ Cự Đồng**: cũng là cách cục tốt

## Thiên Đồng + Long Phượng + Khôi Việt

Đương số có bộ sao này thường làm thầy cúng nổi danh.`,
  },

  // ============================================================
  // 7. Bộ sao XẤU của Thiên Đồng
  // ============================================================
  {
    id: 'thien-dong-bo-sao-xau',
    title: 'Thiên Đồng - Bộ sao XẤU',
    sao: ['Thiên Đồng'],
    doUuTien: 50,
    tomTat: `Các bộ sao xấu của Thiên Đồng bao gồm:

- Thiên Đồng cùng Không Kiếp cùng Linh Hỏa: ham chơi, lầm đường lạc lối, cờ
  bạc, nghèo khổ
- Thiên Đồng cùng Hóa Kỵ hoặc Đà La (Hãm): làm ơn mắc oán, có nghiệp tâm linh
- Cự Đồng tại Sửu Mùi: ngang tàng, nói nhiều, khó tính`,

    chiTiet: `## Thiên Đồng + Không Kiếp + Linh Hỏa

Khi gặp bộ này, đương số ham chơi, dễ lầm đường lạc lối; rơi vào cờ bạc và
nghèo khổ.

## Thiên Đồng + Thái Âm + Thiên Riêu + Thiên Khốc

Đây cũng là một bộ kỵ đối với đương số có Thiên Đồng — đặc biệt nặng với nữ
mệnh.

## Thiên Đồng hãm địa + Hóa Kỵ / Đà La

Đương số làm ơn mắc oán, có nghiệp tâm linh — đời trước có người làm thầy.

## Cự Đồng tại Sửu Mùi

Sửu Mùi thuộc cung Thủy, Cự Đồng hành Thủy nên rơi vào hãm địa:

- Tính cách ngang tàng, bướng bỉnh
- Tướng hình thay đổi, da trắng thành ngăm
- Thiên Đồng tính bộp chộp gặp Cự Môn đa nghi: chủ mệnh khó chịu, khó chiều,
  nói nhiều và rất khó tính`,
  },

  {
    id: 'thien-dong-thai-am-rieu-khoc-nu-menh',
    title: 'Thiên Đồng + Thái Âm + Riêu Khốc - Nữ mệnh',
    sao: ['Thiên Đồng'],
    gioiTinh: 'Nữ',
    ketHop: ['Thái Âm', 'Thiên Riêu', 'Thiên Khốc'],
    doUuTien: 70,
    tomTat: `Nữ mệnh có Thiên Đồng cùng Thái Âm hội Thiên Riêu và Thiên Khốc,
đương số đẹp nhưng hồng nhan bạc phận.`,
  },

  {
    id: 'thien-dong-ham-hoa-ky-da-la-tai-menh',
    title: 'Thiên Đồng Hãm + Hóa Kỵ / Đà La tại Mệnh',
    sao: ['Thiên Đồng'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    ketHop: ['Hóa Kỵ', 'Đà La'],
    doUuTien: 75,
    tomTat: `Khi Thiên Đồng **Hãm** tại Mệnh gặp Hóa Kỵ hoặc Đà La, đương số
làm ơn mắc oán và mang nghiệp tâm linh — thường đời trước có người làm thầy.`,
  },

  // ============================================================
  // 8. Cách Đồng Lương Dần Thân tại Mệnh
  // ============================================================
  {
    id: 'thien-dong-menh-dan-than-dong-luong',
    title: 'Đồng Lương cư Mệnh tại Dần / Thân',
    sao: ['Thiên Đồng', 'Thiên Lương'],
    cung: ['Mệnh'],
    chi: ['Dần', 'Thân'],
    ketHop: ['Đồng Lương'],
    doUuTien: 92,
    tomTat: `Khi **Đồng Lương** đồng cung tại Dần hoặc Thân, đương số được hưởng
**Thượng cách** — đắc cách Đồng Lương Dần Thân:

> Đồng Lương đắc cách Dần Thân,
> Khi xưa bạch thủ mà nay sang giàu

Chủ mệnh bạch thủ thành gia (tay trắng làm nên), mang năng khiếu sư phạm, y
dược cùng lý luận sắc bén.`,
  },

  // ============================================================
  // 9. Cách Đồng Âm Tý Ngọ - Thủy Trừng Quế Ngạc
  // ============================================================
  {
    id: 'thien-dong-menh-ty-ngo-dong-am',
    title: 'Đồng Âm cư Mệnh tại Tý / Ngọ - Thủy Trừng Quế Ngạc',
    sao: ['Thiên Đồng', 'Thái Âm'],
    cung: ['Mệnh'],
    chi: ['Tý', 'Ngọ'],
    ketHop: ['Đồng Âm', 'Thủy Trừng Quế Ngạc'],
    doUuTien: 92,
    tomTat: `Khi Thiên Đồng cùng Thái Âm đồng cung tại Tý hoặc Ngọ, đương số
hợp thành cách **Thủy Trừng Quế Ngạc**. Đồng Âm tại Tý đẹp hơn ở Ngọ.`,
  },

  {
    id: 'thien-dong-menh-ty-ngo-dong-am-nam-menh',
    title: 'Đồng Âm cư Mệnh tại Tý / Ngọ - Nam mệnh',
    sao: ['Thiên Đồng', 'Thái Âm'],
    cung: ['Mệnh'],
    chi: ['Tý', 'Ngọ'],
    gioiTinh: 'Nam',
    ketHop: ['Đồng Âm', 'Thủy Trừng Quế Ngạc'],
    doUuTien: 85,
    tomTat: `Nam mệnh có Đồng Âm tại Tý hoặc Ngọ (cách Thủy Trừng Quế Ngạc),
đương số tính tình nhẹ nhàng, uyển chuyển.`,
  },

  {
    id: 'thien-dong-menh-ty-ngo-dong-am-nu-menh',
    title: 'Đồng Âm cư Mệnh tại Tý / Ngọ - Nữ mệnh',
    sao: ['Thiên Đồng', 'Thái Âm'],
    cung: ['Mệnh'],
    chi: ['Tý', 'Ngọ'],
    gioiTinh: 'Nữ',
    ketHop: ['Đồng Âm', 'Thủy Trừng Quế Ngạc'],
    doUuTien: 85,
    tomTat: `Nữ mệnh có Đồng Âm tại Tý hoặc Ngọ (cách Thủy Trừng Quế Ngạc),
đương số mang **Mệnh Phụ Phu Nhân**, vượng phu ích tử.`,
  },

  // ============================================================
  // 10. Cự Đồng tại Sửu Mùi (Mệnh)
  // ============================================================
  {
    id: 'thien-dong-menh-suu-mui-cu-dong',
    title: 'Cự Đồng cư Mệnh tại Sửu / Mùi',
    sao: ['Thiên Đồng', 'Cự Môn'],
    cung: ['Mệnh'],
    chi: ['Sửu', 'Mùi'],
    ketHop: ['Cự Đồng'],
    doUuTien: 88,
    tomTat: `Khi Cự Đồng đồng cung Mệnh tại Sửu hoặc Mùi, cả hai sao đều rơi
vào **Hãm** địa (Sửu Mùi thuộc cung Thủy, Cự Đồng hành Thủy):

- Đương số tính cách ngang tàng, bướng bỉnh
- Tướng hình thay đổi, da trắng thành ngăm
- Thiên Đồng bộp chộp gặp Cự Môn đa nghi: chủ mệnh khó chịu, khó chiều, nói
  nhiều và rất khó tính`,
  },

  // ============================================================
  // 11. Thiên Đồng tại Mệnh ở Ngọ
  // ============================================================
  {
    id: 'thien-dong-menh-tai-ngo',
    title: 'Thiên Đồng cư Mệnh tại Ngọ',
    sao: ['Thiên Đồng'],
    cung: ['Mệnh'],
    chi: ['Ngọ'],
    doUuTien: 88,
    tomTat: `Khi Thiên Đồng đơn thủ Mệnh tại Ngọ, dù sao này rơi vào hãm địa
(có Thái Âm xung), đương số vẫn được hưởng cách hay: uy quyền hiển hách và
trấn giữ một phương.`,
  },

  // ============================================================
  // 12. Thiên Đồng ở Phụ Mẫu
  // ============================================================
  {
    id: 'thien-dong-tai-phu-mau',
    title: 'Thiên Đồng tại Phụ Mẫu',
    sao: ['Thiên Đồng'],
    cung: ['Phụ Mẫu'],
    doUuTien: 80,
    tomTat: `Khi Thiên Đồng cư Phụ Mẫu, cha mẹ đương số được tăng tuổi thọ và
hưởng phước báu truyền thừa từ gia tiên.

- Diễn giải theo chi cụ thể được tách thành luận giải riêng.`,

    chiTiet: `## Đặc điểm chung

Thiên Đồng cư Phụ Mẫu chủ về tuổi thọ và phước báu của cha mẹ — kết quả thay
đổi theo vị trí cụ thể.

- Diễn giải theo chi cụ thể được tách thành luận giải riêng.`,
  },

  {
    id: 'thien-dong-tai-phu-mau-mao-ty-hoi',
    title: 'Thiên Đồng tại Phụ Mẫu - Mão / Tỵ / Hợi',
    sao: ['Thiên Đồng'],
    cung: ['Phụ Mẫu'],
    chi: ['Mão', 'Tỵ', 'Hợi'],
    doUuTien: 75,
    tomTat: `Khi Thiên Đồng cư Phụ Mẫu tại Mão, Tỵ hoặc Hợi, cha mẹ đương số
rất khá giả, kinh tế rất tốt.`,
  },

  {
    id: 'thien-dong-tai-phu-mau-dan-than',
    title: 'Thiên Đồng tại Phụ Mẫu - Dần / Thân',
    sao: ['Thiên Đồng'],
    cung: ['Phụ Mẫu'],
    chi: ['Dần', 'Thân'],
    doUuTien: 75,
    tomTat: `Khi Thiên Đồng **Miếu** tại Phụ Mẫu ở Dần hoặc Thân, cha mẹ đương
số rất khá giả, được hưởng phúc và tuổi thọ tăng — Dần tốt hơn Thân.`,
  },

  {
    id: 'thien-dong-tai-phu-mau-ty-ngo',
    title: 'Thiên Đồng tại Phụ Mẫu - Tý / Ngọ',
    sao: ['Thiên Đồng'],
    cung: ['Phụ Mẫu'],
    chi: ['Tý', 'Ngọ'],
    doUuTien: 75,
    tomTat: `Khi Thiên Đồng cư Phụ Mẫu tại Tý hoặc Ngọ, cha mẹ đương số rất
khá, có tài, hiền hòa và sống thọ.`,
  },

  {
    id: 'thien-dong-tai-phu-mau-dau',
    title: 'Thiên Đồng Hãm tại Phụ Mẫu - Dậu',
    sao: ['Thiên Đồng'],
    cung: ['Phụ Mẫu'],
    chi: ['Dậu'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi Thiên Đồng **Hãm** tại Phụ Mẫu ở Dậu, cha mẹ đương số chỉ ở
mức bình thường, hay đau yếu — đặc biệt là mẹ vì có Thái Âm hãm xung chiếu.`,
  },

  {
    id: 'thien-dong-tai-phu-mau-thin-tuat',
    title: 'Thiên Đồng Hãm tại Phụ Mẫu - Thìn / Tuất',
    sao: ['Thiên Đồng'],
    cung: ['Phụ Mẫu'],
    chi: ['Thìn', 'Tuất'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi Thiên Đồng **Hãm** tại Phụ Mẫu ở Thìn hoặc Tuất, cha mẹ và
con cái xung khắc, bất hòa.`,
  },

  {
    id: 'thien-dong-tai-phu-mau-suu-mui',
    title: 'Cự Đồng tại Phụ Mẫu - Sửu / Mùi',
    sao: ['Thiên Đồng', 'Cự Môn'],
    cung: ['Phụ Mẫu'],
    chi: ['Sửu', 'Mùi'],
    ketHop: ['Cự Đồng'],
    doUuTien: 80,
    tomTat: `Khi Cự Đồng cư Phụ Mẫu tại Sửu hoặc Mùi, cha mẹ đương số bất hòa,
sớm xa cách nhau và tuổi thọ giảm.`,
  },

  // ============================================================
  // 13. Thiên Đồng ở Phúc Đức
  // ============================================================
  {
    id: 'thien-dong-tai-phuc-duc',
    title: 'Thiên Đồng tại Phúc Đức',
    sao: ['Thiên Đồng'],
    cung: ['Phúc Đức'],
    doUuTien: 85,
    tomTat: `Thiên Đồng vốn cai quản cung Phúc Đức — khi tọa thủ tại đây là
**Thượng cách**. Đương số được hưởng phước báu tổ tiên, mồ yên mả đẹp; họ
hàng nhiều người đi xa làm ăn xứ người.

Khi hội nhiều Đà La, Hóa Kỵ, Linh Hỏa, Hình Riêu, Thiên Lương hay Nguyệt Đức,
đời trước họ hàng đương số có người làm thầy, thầy pháp, thầy đồng — hoặc có
người bị cơ hành rất khổ.`,

    chiTiet: `## Thượng cách

Thiên Đồng cai quản cung Phúc Đức nên đây là vị trí tốt nhất của sao này.
Đương số được hưởng phước báu tổ tiên, mồ yên mả đẹp; họ hàng nhiều người đi
xa làm ăn xứ người.

## Hung kết hợp

Khi hội Đà La, Hóa Kỵ, Linh Hỏa, Hình Riêu, Thiên Lương hoặc Nguyệt Đức, đời
trước họ hàng đương số có người làm thầy, thầy pháp, thầy đồng, hoặc có người
bị cơ hành rất khổ cực.

Khi gặp nhiều sát tinh, họ hàng có người ăn chơi xa đọa, cờ bạc, nghiện hút.
Các cụ là người lãng tử phong lưu, lấy nhiều vợ.

- Diễn giải theo chi cụ thể được tách thành luận giải riêng.`,
  },

  {
    id: 'thien-dong-tai-phuc-duc-ham-dau-thin-tuat',
    title: 'Thiên Đồng Hãm tại Phúc Đức - Dậu / Thìn / Tuất',
    sao: ['Thiên Đồng'],
    cung: ['Phúc Đức'],
    chi: ['Dậu', 'Thìn', 'Tuất'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi Thiên Đồng **Hãm** tại Phúc Đức ở Dậu, Thìn hoặc Tuất, phúc
đức dòng họ chưa tốt; cuộc đời đương số lúc vui lúc buồn, ra ngoài hay gặp
thị phi và họ hàng ly tán.`,
  },

  {
    id: 'thien-dong-tai-phuc-duc-dong-am-ty-ngo',
    title: 'Đồng Âm tại Phúc Đức - Tý / Ngọ',
    sao: ['Thiên Đồng', 'Thái Âm'],
    cung: ['Phúc Đức'],
    chi: ['Tý', 'Ngọ'],
    ketHop: ['Đồng Âm'],
    doUuTien: 80,
    tomTat: `Khi Đồng Âm cư Phúc Đức tại Tý hoặc Ngọ, họ hàng đương số thọ
trường, nhiều người làm ăn xa quê hương và có người quý hiển. Ngọ xấu hơn Tý —
chủ mệnh phải đi xa mới thuận lợi.`,
  },

  {
    id: 'thien-dong-tai-phuc-duc-dong-luong-dan-than',
    title: 'Đồng Lương tại Phúc Đức - Dần / Thân',
    sao: ['Thiên Đồng', 'Thiên Lương'],
    cung: ['Phúc Đức'],
    chi: ['Dần', 'Thân'],
    ketHop: ['Đồng Lương'],
    doUuTien: 82,
    tomTat: `Khi Đồng Lương cư Phúc Đức tại Dần hoặc Thân, họ hàng đương số
hòa thuận, thanh bình; gia đình nhiều người sống rất thọ, công danh thành đạt
và viên mãn.`,
  },

  {
    id: 'thien-dong-tai-phuc-duc-cu-dong-suu-mui',
    title: 'Cự Đồng tại Phúc Đức - Sửu / Mùi',
    sao: ['Thiên Đồng', 'Cự Môn'],
    cung: ['Phúc Đức'],
    chi: ['Sửu', 'Mùi'],
    ketHop: ['Cự Đồng'],
    doUuTien: 80,
    tomTat: `Khi Cự Đồng cư Phúc Đức tại Sửu hoặc Mùi, phúc của đương số chưa
tốt: nhiều người ly tán, mồ mả mỗi ngôi một nơi không được quy tập; công danh
lận đận, tình duyên trắc trở.`,
  },

  // ============================================================
  // 14. Thiên Đồng ở Điền Trạch
  // ============================================================
  {
    id: 'thien-dong-tai-dien-trach',
    title: 'Thiên Đồng tại Điền Trạch',
    sao: ['Thiên Đồng'],
    cung: ['Điền Trạch'],
    doUuTien: 80,
    tomTat: `Khi Thiên Đồng cư Điền Trạch, đương số thờ cúng tại gia tốt, gia
đình ăn ở hòa thuận, song hay phải thay đổi chỗ ở.

- Diễn giải theo chi cụ thể được tách thành luận giải riêng.`,

    chiTiet: `## Đặc điểm chung

Thiên Đồng cư Điền Trạch chủ về thờ cúng tại gia tốt, gia đình đương số ăn ở
hòa thuận, hay phải thay đổi chỗ ở.

- Diễn giải theo chi cụ thể được tách thành luận giải riêng.`,
  },

  {
    id: 'thien-dong-tai-dien-trach-mao',
    title: 'Thiên Đồng tại Điền Trạch - Mão',
    sao: ['Thiên Đồng'],
    cung: ['Điền Trạch'],
    chi: ['Mão'],
    doUuTien: 80,
    tomTat: `Khi Thiên Đồng cư Điền Trạch tại Mão, nhà cửa của đương số nhiều,
kinh doanh bất động sản tốt và điền sản ngày càng thịnh vượng.`,
  },

  {
    id: 'thien-dong-tai-dien-trach-dau-ham',
    title: 'Thiên Đồng Hãm tại Điền Trạch - Dậu',
    sao: ['Thiên Đồng'],
    cung: ['Điền Trạch'],
    chi: ['Dậu'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi Thiên Đồng **Hãm** tại Điền Trạch ở Dậu, đương số hay thay nhà
đổi cửa, đất đai ít và thường ở chỗ trũng.`,
  },

  {
    id: 'thien-dong-tai-dien-trach-thin-tuat',
    title: 'Thiên Đồng tại Điền Trạch - Thìn / Tuất',
    sao: ['Thiên Đồng'],
    cung: ['Điền Trạch'],
    chi: ['Thìn', 'Tuất'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi Thiên Đồng cư Điền Trạch tại Thìn hoặc Tuất, đương số tạo
dựng nhà cửa khó khăn; vẫn có nhà nhưng nhiều rủi ro và dễ tranh chấp về điền
sản.`,
  },

  {
    id: 'thien-dong-tai-dien-trach-dong-luong-dan-than',
    title: 'Đồng Lương tại Điền Trạch - Dần / Thân',
    sao: ['Thiên Đồng', 'Thiên Lương'],
    cung: ['Điền Trạch'],
    chi: ['Dần', 'Thân'],
    ketHop: ['Đồng Lương'],
    doUuTien: 80,
    tomTat: `Khi Đồng Lương cư Điền Trạch tại Dần hoặc Thân, nhà cửa của đương
số trước ít sau nhiều.`,
  },

  // ============================================================
  // 15. Thiên Đồng ở Quan Lộc
  // ============================================================
  {
    id: 'thien-dong-tai-quan-loc',
    title: 'Thiên Đồng tại Quan Lộc',
    sao: ['Thiên Đồng'],
    cung: ['Quan Lộc'],
    doUuTien: 82,
    tomTat: `Khi Thiên Đồng cư Quan Lộc, đương số biết theo thời thế, đi tắt
đón đầu và khởi thủy ngành nghề mới như công nghệ thông tin, tài chính, kinh
doanh. Hội Không Kiếp cùng Linh Hỏa, chủ mệnh có thể thành công ở BitCoin
và tài chính rủi ro.

Đương số hay chuyển công việc, công việc hay phải di chuyển. Phù hợp với công
trình, xây dựng, vận tải, phục vụ, nhà hàng quán ăn.`,

    chiTiet: `## Đặc điểm

Thiên Đồng mang hành Thủy nên đương số biết theo thời thế, đi tắt đón đầu và
khởi thủy một ngành nghề mới — công nghệ thông tin, tài chính, kinh doanh.

Khi hội thêm Không Kiếp cùng Linh Hỏa, chủ mệnh có thể theo nghề công nghệ rủi
ro như BitCoin, tài chính: rất thành công và giàu có.

## Tính chất công việc

- Hay chuyển công việc, công việc hay phải di chuyển từ chỗ này sang chỗ khác
- Phù hợp các nghề công trình, lắp đặt, xây dựng, vận tải
- Hành Thủy hợp nghề phục vụ, mở quán ăn, nhà hàng

## Đam mê & rủi ro

Thiên Đồng tại Quan Lộc khiến đương số rất say mê công việc — say mê kinh
doanh kiếm tiền thì rất thành công, song say mê cờ bạc thì bán nhà cũng chơi.

## Cách cục tốt nhất

Đồng Lương và Đồng Âm cư Quan Lộc là đẹp nhất: đương số có công danh hiển
hách, có tiếng nói và ít phải thay đổi công việc.`,
  },

  // ============================================================
  // 16. Thiên Đồng ở Nô Bộc
  // ============================================================
  {
    id: 'thien-dong-tai-no-boc',
    title: 'Thiên Đồng tại Nô Bộc',
    sao: ['Thiên Đồng'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Khi Thiên Đồng cư Nô Bộc, cách chưa được đẹp đối với đương số.

- Hội Không Kiếp, Kình Đà, Hình Kỵ hoặc Linh Hỏa: bạn bè ăn chơi cờ bạc, dễ
  rủ chủ mệnh vào chốn xa đọa và dễ làm ơn mắc oán`,
  },

  {
    id: 'thien-dong-tai-no-boc-dac-mieu-vuong',
    title: 'Thiên Đồng Đắc / Miếu / Vượng tại Nô Bộc',
    sao: ['Thiên Đồng'],
    cung: ['Nô Bộc'],
    trangThai: ['Đắc', 'Miếu', 'Vượng'],
    doUuTien: 72,
    tomTat: `Khi Thiên Đồng **Đắc / Miếu / Vượng** tại Nô Bộc đi cùng sao tốt,
đương số lắm bạn nhiều bè, gồm nhiều thành phần nhưng đều giúp đỡ tốt.`,
  },

  // ============================================================
  // 17. Thiên Đồng ở Thiên Di
  // ============================================================
  {
    id: 'thien-dong-tai-thien-di',
    title: 'Thiên Đồng tại Thiên Di',
    sao: ['Thiên Đồng'],
    cung: ['Thiên Di'],
    doUuTien: 80,
    tomTat: `Khi Thiên Đồng cư Thiên Di, đương số đi lại nhiều, chạy như ngựa
không khác Thiên Mã. Ra ngoài chủ mệnh hay được bạn bè mời ăn mời uống, nhậu
nhẹt.

- Diễn giải theo chi cụ thể được tách thành luận giải riêng.`,

    chiTiet: `## Đặc điểm chung

Thiên Đồng cư Thiên Di chủ về việc đi lại nhiều, đương số được bạn bè mời ăn
uống, nhậu nhẹt. Đặc điểm cụ thể thay đổi mạnh theo vị trí.

- Diễn giải theo chi cụ thể được tách thành luận giải riêng.`,
  },

  {
    id: 'thien-dong-tai-thien-di-mao',
    title: 'Thiên Đồng tại Thiên Di - Mão',
    sao: ['Thiên Đồng'],
    cung: ['Thiên Di'],
    chi: ['Mão'],
    doUuTien: 75,
    tomTat: `Khi Thiên Đồng cư Thiên Di tại Mão, đương số hay gặp quý nhân
giúp đỡ và ra ngoài được nhiều người yêu mến.`,
  },

  {
    id: 'thien-dong-tai-thien-di-dau',
    title: 'Thiên Đồng Hãm tại Thiên Di - Dậu',
    sao: ['Thiên Đồng'],
    cung: ['Thiên Di'],
    chi: ['Dậu'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi Thiên Đồng **Hãm** tại Thiên Di ở Dậu, đương số hay phải đi
xa, ra ngoài vất vả; thường gặp thị phi phiền lòng và dễ mất nơi xứ người.`,
  },

  {
    id: 'thien-dong-tai-thien-di-ty-hoi',
    title: 'Thiên Đồng tại Thiên Di - Tỵ / Hợi',
    sao: ['Thiên Đồng'],
    cung: ['Thiên Di'],
    chi: ['Tỵ', 'Hợi'],
    doUuTien: 75,
    tomTat: `Khi Thiên Đồng cư Thiên Di tại Tỵ hoặc Hợi, đương số đi xa, cuộc
sống nay đây mai đó và hay phải thay đổi chỗ ở.`,
  },

  {
    id: 'thien-dong-tai-thien-di-thin-tuat',
    title: 'Thiên Đồng tại Thiên Di - Thìn / Tuất',
    sao: ['Thiên Đồng'],
    cung: ['Thiên Di'],
    chi: ['Thìn', 'Tuất'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi Thiên Đồng cư Thiên Di tại Thìn hoặc Tuất, đương số ra ngoài
nên cẩn trọng; làm gì cũng cần suy nghĩ thấu đáo, dễ gặp thị phi tranh cãi.`,
  },

  {
    id: 'thien-dong-tai-thien-di-ty-ngo-dan-than',
    title: 'Thiên Đồng tại Thiên Di - Tý / Ngọ / Dần / Thân',
    sao: ['Thiên Đồng'],
    cung: ['Thiên Di'],
    chi: ['Tý', 'Ngọ', 'Dần', 'Thân'],
    doUuTien: 78,
    tomTat: `Khi Thiên Đồng cư Thiên Di tại Tý, Ngọ, Dần hoặc Thân, đương số
ra ngoài hay gặp quý nhân giúp đỡ, được nhiều người quý mến; làm ăn kinh
doanh nên giàu.`,
  },

  {
    id: 'thien-dong-tai-thien-di-cu-dong-suu-mui',
    title: 'Cự Đồng tại Thiên Di - Sửu / Mùi',
    sao: ['Thiên Đồng', 'Cự Môn'],
    cung: ['Thiên Di'],
    chi: ['Sửu', 'Mùi'],
    ketHop: ['Cự Đồng'],
    doUuTien: 78,
    tomTat: `Khi Cự Đồng cư Thiên Di tại Sửu hoặc Mùi, cách bán cát bán hung
đối với đương số: gặp nhiều sao tốt thì ra ngoài vào những chốn sang trọng,
dễ ly hương; gặp nhiều sao xấu thì gần như chắc chắn dính đến căn đồng số
lính.`,
  },

  // ============================================================
  // 18. Thiên Đồng ở Tật Ách
  // ============================================================
  {
    id: 'thien-dong-tai-tat-ach',
    title: 'Thiên Đồng tại Tật Ách (đặc tính chung)',
    sao: ['Thiên Đồng'],
    cung: ['Tật Ách'],
    doUuTien: 80,
    tomTat: `Khi Thiên Đồng cư Tật Ách, sao này chủ về bộ máy tiêu hóa nói
chung — không chỉ đích danh bộ phận nào.

- Hội nhiều sát tinh: bộ máy tiêu hóa của đương số bị ảnh hưởng, hay đau dạ
  dày, đặc biệt khi thêm Song Hao`,
  },

  {
    id: 'thien-dong-tai-tat-ach-hoa-ky',
    title: 'Thiên Đồng + Hóa Kỵ tại Tật Ách',
    sao: ['Thiên Đồng'],
    cung: ['Tật Ách'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 75,
    tomTat: `Khi Thiên Đồng cùng Hóa Kỵ cư Tật Ách, đương số hay đau bụng, đi
ngoài, tiêu chảy, khó tiêu.`,
  },

  {
    id: 'thien-dong-tai-tat-ach-khong-kiep',
    title: 'Thiên Đồng + Không Kiếp tại Tật Ách',
    sao: ['Thiên Đồng'],
    cung: ['Tật Ách'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 75,
    tomTat: `Khi Thiên Đồng gặp Địa Không hoặc Địa Kiếp tại Tật Ách, đương số
hay đau dạ dày, đường ruột và bệnh đường ăn uống.`,
  },

  // ============================================================
  // 19. Thiên Đồng ở Tài Bạch
  // ============================================================
  {
    id: 'thien-dong-tai-tai-bach',
    title: 'Thiên Đồng tại Tài Bạch',
    sao: ['Thiên Đồng'],
    cung: ['Tài Bạch'],
    doUuTien: 80,
    tomTat: `Khi Thiên Đồng cư Tài Bạch, tài lộc của đương số biến thiên mạnh
theo vị trí.

- Diễn giải theo chi cụ thể được tách thành luận giải riêng.`,

    chiTiet: `## Đặc điểm chung

Thiên Đồng cư Tài Bạch chủ về tài lộc của đương số — biến thiên mạnh theo vị
trí.

- Diễn giải theo chi cụ thể và cách cục đồng cung được tách thành luận giải
  riêng.`,
  },

  {
    id: 'thien-dong-tai-tai-bach-mao',
    title: 'Thiên Đồng tại Tài Bạch - Mão',
    sao: ['Thiên Đồng'],
    cung: ['Tài Bạch'],
    chi: ['Mão'],
    doUuTien: 78,
    tomTat: `Khi Thiên Đồng cư Tài Bạch tại Mão, đương số tay trắng làm giàu;
càng về già càng nhiều của.`,
  },

  {
    id: 'thien-dong-tai-tai-bach-dong-am-ty',
    title: 'Đồng Âm tại Tài Bạch - Tý',
    sao: ['Thiên Đồng', 'Thái Âm'],
    cung: ['Tài Bạch'],
    chi: ['Tý'],
    ketHop: ['Đồng Âm'],
    doUuTien: 80,
    tomTat: `Khi Đồng Âm cư Tài Bạch tại Tý, đương số tay trắng làm giàu; càng
về già càng nhiều của.`,
  },

  {
    id: 'thien-dong-tai-tai-bach-dau',
    title: 'Thiên Đồng Hãm tại Tài Bạch - Dậu',
    sao: ['Thiên Đồng'],
    cung: ['Tài Bạch'],
    chi: ['Dậu'],
    trangThai: ['Hãm'],
    doUuTien: 75,
    tomTat: `Khi Thiên Đồng **Hãm** tại Tài Bạch ở Dậu, tiền bạc của đương số
tụ tán thất thường.`,
  },

  {
    id: 'thien-dong-tai-tai-bach-ty-hoi',
    title: 'Thiên Đồng tại Tài Bạch - Tỵ / Hợi',
    sao: ['Thiên Đồng'],
    cung: ['Tài Bạch'],
    chi: ['Tỵ', 'Hợi'],
    doUuTien: 75,
    tomTat: `Khi Thiên Đồng cư Tài Bạch tại Tỵ hoặc Hợi, đương số phải lang
thang nay đây mai đó, làm nghề lưu động mới có tiền và cũng dễ bị hao tán.`,
  },

  {
    id: 'thien-dong-tai-tai-bach-thin-tuat',
    title: 'Thiên Đồng tại Tài Bạch - Thìn / Tuất',
    sao: ['Thiên Đồng'],
    cung: ['Tài Bạch'],
    chi: ['Thìn', 'Tuất'],
    trangThai: ['Hãm'],
    doUuTien: 75,
    tomTat: `Khi Thiên Đồng **Hãm** tại Tài Bạch ở Thìn hoặc Tuất, tiền của
đương số vào tay này lại ra tay khác, hay túng thiếu.`,
  },

  {
    id: 'thien-dong-tai-tai-bach-dong-am-ngo',
    title: 'Đồng Âm tại Tài Bạch - Ngọ',
    sao: ['Thiên Đồng', 'Thái Âm'],
    cung: ['Tài Bạch'],
    chi: ['Ngọ'],
    ketHop: ['Đồng Âm'],
    doUuTien: 75,
    tomTat: `Khi Đồng Âm cư Tài Bạch tại Ngọ, đương số kiếm tiền khó khăn,
chậm chạp và vất vả; thường phải bôn ba làm đủ mọi nghề. Đến tuổi trung niên,
tiền bạc của chủ mệnh mới yên ổn.`,
  },

  {
    id: 'thien-dong-tai-tai-bach-cu-dong',
    title: 'Cự Đồng tại Tài Bạch',
    sao: ['Thiên Đồng', 'Cự Môn'],
    cung: ['Tài Bạch'],
    chi: ['Sửu', 'Mùi'],
    ketHop: ['Cự Đồng'],
    doUuTien: 78,
    tomTat: `Khi Cự Đồng cư Tài Bạch tại Sửu hoặc Mùi, tiền bạc của đương số
vào ra thất thường, dễ túng thiếu, dễ có tranh chấp tiền bạc hoặc thưa kiện.
Chủ mệnh phải xa xứ làm ăn mới tốt.`,
  },

  {
    id: 'thien-dong-tai-tai-bach-dong-luong',
    title: 'Đồng Lương tại Tài Bạch',
    sao: ['Thiên Đồng', 'Thiên Lương'],
    cung: ['Tài Bạch'],
    chi: ['Dần', 'Thân'],
    ketHop: ['Đồng Lương'],
    doUuTien: 80,
    tomTat: `Khi Đồng Lương cư Tài Bạch tại Dần hoặc Thân, đương số khá giả và
rất thích hợp ngành nghề kinh doanh, mua bán.`,
  },

  // ============================================================
  // 20. Thiên Đồng ở Tử Tức
  // ============================================================
  {
    id: 'thien-dong-tai-tu-tuc',
    title: 'Thiên Đồng tại Tử Tức',
    sao: ['Thiên Đồng'],
    cung: ['Tử Tức'],
    doUuTien: 80,
    tomTat: `Khi Thiên Đồng cư Tử Tức, đương số thông thường có cả trai lẫn
gái. Sau này con cái lớn lên thường đi xa, không ở với bố mẹ.`,
  },

  {
    id: 'thien-dong-tai-tu-tuc-mao',
    title: 'Thiên Đồng tại Tử Tức - Mão',
    sao: ['Thiên Đồng'],
    cung: ['Tử Tức'],
    chi: ['Mão'],
    doUuTien: 75,
    tomTat: `Khi Thiên Đồng cư Tử Tức tại Mão, đương số nhiều con.`,
  },

  {
    id: 'thien-dong-tai-tu-tuc-mao-cat-tinh',
    title: 'Thiên Đồng tại Tử Tức - Mão + Nguyệt Đức / Khôi Việt',
    sao: ['Thiên Đồng'],
    cung: ['Tử Tức'],
    chi: ['Mão'],
    ketHop: ['Nguyệt Đức', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 80,
    tomTat: `Khi Thiên Đồng cư Tử Tức tại Mão có thêm Nguyệt Đức cùng Khôi
Việt hội tụ, đương số nhiều con và con cái quý hiển.`,
  },

  {
    id: 'thien-dong-tai-tu-tuc-dau',
    title: 'Thiên Đồng Hãm tại Tử Tức - Dậu',
    sao: ['Thiên Đồng'],
    cung: ['Tử Tức'],
    chi: ['Dậu'],
    trangThai: ['Hãm'],
    doUuTien: 75,
    tomTat: `Khi Thiên Đồng **Hãm** tại Tử Tức ở Dậu, đương số ít con.`,
  },

  {
    id: 'thien-dong-tai-tu-tuc-ty-hoi',
    title: 'Thiên Đồng tại Tử Tức - Tỵ / Hợi',
    sao: ['Thiên Đồng'],
    cung: ['Tử Tức'],
    chi: ['Tỵ', 'Hợi'],
    doUuTien: 75,
    tomTat: `Khi Thiên Đồng cư Tử Tức tại Tỵ hoặc Hợi, đương số có hai con; con
cái dễ ly tán đi xa lập nghiệp.`,
  },

  {
    id: 'thien-dong-tai-tu-tuc-cu-dong',
    title: 'Cự Đồng tại Tử Tức - Sửu / Mùi',
    sao: ['Thiên Đồng', 'Cự Môn'],
    cung: ['Tử Tức'],
    chi: ['Sửu', 'Mùi'],
    ketHop: ['Cự Đồng'],
    doUuTien: 78,
    tomTat: `Khi Cự Đồng cư Tử Tức tại Sửu hoặc Mùi, đương số ít con, muộn
con; con khó nuôi và bất hòa với cha mẹ.`,
  },

  // ============================================================
  // 21. Thiên Đồng ở Phu Thê
  // ============================================================
  {
    id: 'thien-dong-tai-phu-the',
    title: 'Thiên Đồng tại Phu Thê',
    sao: ['Thiên Đồng'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `Khi Thiên Đồng cư Phu Thê, cách không hay đối với đương số: vợ
chồng thường cách trở.`,

    chiTiet: `## Câu phú

> Cung Thê Thiếp Đồng Lương hội đó
> Hai vợ chồng một tổ sinh lai

- Diễn giải theo chi cụ thể được tách thành luận giải riêng.`,
  },

  {
    id: 'thien-dong-tai-phu-the-mao',
    title: 'Thiên Đồng tại Phu Thê - Mão',
    sao: ['Thiên Đồng'],
    cung: ['Phu Thê'],
    chi: ['Mão'],
    doUuTien: 75,
    tomTat: `Khi Thiên Đồng cư Phu Thê tại Mão, đường hôn nhân của đương số
muộn, hay gặp trắc trở thuở ban đầu nhưng về sau hạnh phúc.`,
  },

  {
    id: 'thien-dong-tai-phu-the-dau',
    title: 'Thiên Đồng Hãm tại Phu Thê - Dậu',
    sao: ['Thiên Đồng'],
    cung: ['Phu Thê'],
    chi: ['Dậu'],
    trangThai: ['Hãm'],
    doUuTien: 75,
    tomTat: `Khi Thiên Đồng **Hãm** tại Phu Thê ở Dậu, gia đình đương số bất
hòa và hay phải cách trở.`,
  },

  {
    id: 'thien-dong-tai-phu-the-ty',
    title: 'Thiên Đồng tại Phu Thê - Tỵ',
    sao: ['Thiên Đồng'],
    cung: ['Phu Thê'],
    chi: ['Tỵ'],
    doUuTien: 75,
    tomTat: `Khi Thiên Đồng cư Phu Thê tại Tỵ, vợ chồng đương số có chuyện nợ,
dễ cách trở xa nhau và hay buồn phiền chuyện làm ăn.`,
  },

  {
    id: 'thien-dong-tai-phu-the-thin-tuat',
    title: 'Thiên Đồng tại Phu Thê - Thìn / Tuất',
    sao: ['Thiên Đồng'],
    cung: ['Phu Thê'],
    chi: ['Thìn', 'Tuất'],
    trangThai: ['Hãm'],
    doUuTien: 75,
    tomTat: `Khi Thiên Đồng **Hãm** tại Phu Thê ở Thìn hoặc Tuất, vợ chồng
đương số khắc khẩu, hạnh phúc không trọn vẹn.`,
  },

  {
    id: 'thien-dong-tai-phu-the-dong-luong-dan-than',
    title: 'Đồng Lương tại Phu Thê - Dần / Thân',
    sao: ['Thiên Đồng', 'Thiên Lương'],
    cung: ['Phu Thê'],
    chi: ['Dần', 'Thân'],
    ketHop: ['Đồng Lương'],
    doUuTien: 80,
    tomTat: `Khi Đồng Lương cư Phu Thê tại Dần hoặc Thân, đương số lập gia
đình sớm; vợ chồng thường có họ hàng với nhau hoặc là người cùng xứ — cũng có
thể quen biết anh chị em trước rồi mới lập gia đình với người thân trong nhà.
Hai họ thường quen biết nhau từ trước.`,
  },

  {
    id: 'thien-dong-tai-phu-the-cu-dong-suu-mui',
    title: 'Cự Đồng tại Phu Thê - Sửu / Mùi',
    sao: ['Thiên Đồng', 'Cự Môn'],
    cung: ['Phu Thê'],
    chi: ['Sửu', 'Mùi'],
    ketHop: ['Cự Đồng'],
    doUuTien: 80,
    tomTat: `Khi Cự Đồng cư Phu Thê tại Sửu hoặc Mùi, vợ chồng đương số bất
hòa, hay xảy ra mâu thuẫn trong lời ăn tiếng nói. Dễ cách trở, hoặc phải có
một thời gian xa cách mới tốt.`,
  },

  // ============================================================
  // 22. Thiên Đồng ở Huynh Đệ
  // ============================================================
  {
    id: 'thien-dong-tai-huynh-de',
    title: 'Thiên Đồng tại Huynh Đệ',
    sao: ['Thiên Đồng'],
    cung: ['Huynh Đệ'],
    doUuTien: 80,
    tomTat: `Khi Thiên Đồng cư Huynh Đệ, đương số có nhà đông anh em và anh em
hòa thuận.

- Đắc địa: anh em vui vẻ hòa nhã; hội nhiều sao tốt thì nhiều người thành
  danh, thọ trường
- Thông thường trai gái có đủ; anh em hay phải đi xa, lập nghiệp nơi phương
  xa`,
  },

  // ============================================================
  // 23. Đại vận / Hạn đến Thiên Đồng
  // ============================================================
  {
    id: 'thien-dong-dai-van-han',
    title: 'Đại vận & hạn đến Thiên Đồng',
    sao: ['Thiên Đồng'],
    doUuTien: 50,
    tomTat: `Đại vận đến Thiên Đồng, đương số thường phải đi xa, thay đổi công
việc; hay nhậu nhẹt ăn chơi, thiên về hưởng thụ vui chơi, tìm đến tâm linh và
thích xem bói.

Khi hội Hình, Kỵ, Không Kiếp hoặc Hóa Kỵ, chủ mệnh dễ dính cờ bạc, ăn chơi,
gái gú và dễ dính dáng đến pháp luật.

Riêng Thiên Đồng cùng Hóa Kỵ cùng Hình Riêu, đương số phải ra trình đồng.`,

    chiTiet: `## Đại vận đến Thiên Đồng

Khi đại vận đến Thiên Đồng, đương số thường gặp những biểu hiện sau:

- Phải đi xa, thay đổi công việc
- Thường xuyên nhậu nhẹt, ăn chơi
- Thiên về hưởng thụ và vui chơi
- Tìm đến tâm linh nhiều, thích đi xem bói

## Theo trạng thái

Trạng thái miếu hãm của Thiên Đồng quyết định mức độ thuận lợi của vận — chi
tiết được tách thành luận giải riêng theo trạng thái.

## Hội sao xấu

Khi vận đến Thiên Đồng có Hình, Kỵ, Không Kiếp hoặc Hóa Kỵ, đương số dễ dính
dáng cờ bạc, ăn chơi, gái gú — chuyện gì cũng trải qua và rất dễ dính dáng
đến pháp luật.

Riêng Thiên Đồng cùng Hóa Kỵ cùng Hình Riêu, chủ mệnh phải ra trình đồng (tức
phải ra hầu đồng).

## Hạn đến Thiên Đồng

- Sáng sủa: hưng thịnh về tài, danh và may mắn
- Xấu xa: hậu hạn xấu — hao của, bị kiện tụng, bị đổi chỗ`,
  },

  {
    id: 'thien-dong-dai-van-dac',
    title: 'Đại vận đến Thiên Đồng - Đắc',
    sao: ['Thiên Đồng'],
    trangThai: ['Đắc', 'Miếu', 'Vượng'],
    doUuTien: 60,
    tomTat: `Khi đại vận đến Thiên Đồng **Đắc / Miếu / Vượng**, đương số giao
du nhiều, quen biết nhiều người và đón vận đẹp.`,
  },

  {
    id: 'thien-dong-dai-van-ham',
    title: 'Đại vận đến Thiên Đồng - Hãm',
    sao: ['Thiên Đồng'],
    trangThai: ['Hãm'],
    doUuTien: 60,
    tomTat: `Khi đại vận đến Thiên Đồng **Hãm**, đương số buôn tẩu buôn chì,
nay đây mai đó và vất vả.`,
  },
];
