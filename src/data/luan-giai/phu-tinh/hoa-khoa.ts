import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO HÓA KHOA - Tứ Hóa, Đệ Nhất Giải Thần
 *
 * Bộ Tam Hóa Liên Châu (Lộc + Quyền + Khoa) đã viết tại file hoa-loc.ts
 * với tag cả 3 sao. File này tập trung phần riêng của Hóa Khoa + 11 cung.
 */
export const luanGiai_HoaKhoa: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung của sao Hóa Khoa
  // ============================================================
  {
    id: 'hoa-khoa-tinh-chat-chung',
    title: 'Hóa Khoa - Đặc tính chung',
    sao: ['Hóa Khoa'],
    doUuTien: 30,
    tomTat: `**Hóa Khoa** thuộc bộ Tứ Hóa cùng Hóa Lộc, Hóa Quyền và Hóa Kỵ;
ngũ hành Thủy, tính Âm. Hóa khí mang tính Văn Tinh kiêm Phúc Tinh, chủ về
khoa giáp — được ví như ngọn đèn trí tuệ soi đường.

Đặc tính chính ở đương số có Hóa Khoa là thông minh, hiếu học, nhân hậu và
giàu lòng từ thiện; vừa có học vừa có hạnh, vừa có tài vừa có đức.

Vị trí miếu hãm:

- **Vượng** địa: Dần, Thân, Hợi, Sửu, Mùi, Thìn, Tuất
- **Hãm** địa: Tý, Dậu (cùng một số cung khác)

Hóa Khoa được an theo Thiên Can năm sinh, mỗi lá số chỉ có duy nhất một Hóa
Khoa. Sao này phát huy tốt nhất khi đóng tại Phúc Đức, Mệnh, Thân hoặc
Quan Lộc.`,
  },

  // ============================================================
  // 2. Hóa Khoa - "Đệ Nhất Giải Thần"
  // ============================================================
  {
    id: 'hoa-khoa-de-nhat-giai-than',
    title: 'Hóa Khoa - "Đệ Nhất Giải Thần"',
    sao: ['Hóa Khoa'],
    doUuTien: 35,
    tomTat: `Hóa Khoa được xem là Phúc Tinh, đồng thời là Đệ Nhất Giải Thần —
sao giải tai ương mạnh nhất trong tử vi.

Khả năng giải của Hóa Khoa thể hiện ở nhiều mặt:

- Hóa giải phần lớn tai ương, bệnh tật cho đương số
- Bộ phận cơ thể nào bị hình thương mà có Hóa Khoa đi kèm thì bệnh nhẹ
  đi, dễ chữa trị
- Chế ngự được nhiều sát tinh như Kình Dương, Đà La, Địa Không, Địa Kiếp,
  Hỏa Tinh, Linh Tinh

Khi đủ bộ Tam Hóa Liên Châu (Hóa Khoa cùng Hóa Quyền và Hóa Lộc) phối
chiếu Mệnh hoặc Thân, khả năng cứu giải gia tăng gấp bội — may mắn đến
liên tiếp với đương số, miễn không gặp sát tinh hay ám tinh quá nặng.`,
  },

  // ============================================================
  // 3. Hóa Khoa tại Mệnh - tính tình
  // ============================================================
  {
    id: 'hoa-khoa-tai-menh-tinh-tinh',
    title: 'Hóa Khoa tại Mệnh - Tính tình',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    doUuTien: 85,
    tomTat: `Đương số có Hóa Khoa tọa thủ Mệnh thường thông minh, hiếu học,
hay tìm tòi và hiếu kỳ; có tinh thần tự học cao. Đương số dễ đỗ đạt, đạt
khoa bảng cao, học rộng biết nhiều, nổi bật ở khả năng suy luận, nghiên
cứu và truyền đạt giáo khoa.

Về phẩm hạnh, đương số nhân hậu, từ thiện và mang nhiều nết tốt.`,
  },

  {
    id: 'hoa-khoa-tai-menh-tinh-tinh-dac-dia',
    title: 'Hóa Khoa tại Mệnh Đắc địa - Trí nhớ tốt, tư duy sắc bén',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 78,
    tomTat: `Khi Hóa Khoa Đắc địa tại Mệnh, đương số có trí nhớ tốt, tư duy
logic sắc bén. Cách ứng xử ôn hòa theo lối "lấy nhu thắng cương", luôn giữ
lễ nghĩa và có thể nổi danh nhờ tri thức.`,
  },

  {
    id: 'hoa-khoa-tai-menh-tinh-tinh-ham',
    title: 'Hóa Khoa tại Mệnh Hãm - Lý luận suông',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi Hóa Khoa Hãm địa tại Mệnh, đương số vẫn có trí tuệ cao
nhưng khó phát huy do môi trường không thuận hoặc bị sát tinh phá. Vì vậy
dễ rơi vào cảnh lý luận suông, giỏi lý thuyết mà thiếu thực tế.`,
  },

  // ============================================================
  // 4. Hóa Khoa tại Mệnh - công danh
  // ============================================================
  {
    id: 'hoa-khoa-tai-menh-cong-danh',
    title: 'Hóa Khoa tại Mệnh - Công danh',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Về công danh, đương số có Hóa Khoa cư Mệnh thường giữ được quan
chức và có danh thơm tiếng tốt. Văn tài xuất chúng — nổi bật ở tài mô phạm,
khả năng giáo khoa và năng khiếu của một lý thuyết gia.

Đương số phần lớn theo những nghề văn hóa như dạy học, khảo cứu hay viết
văn.`,
  },

  {
    id: 'hoa-khoa-tai-menh-cong-danh-thien-khoi',
    title: 'Hóa Khoa + Thiên Khôi tại Mệnh - Tài năng phát triển',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Thiên Khôi'],
    doUuTien: 75,
    tomTat: `Khi Hóa Khoa cùng Thiên Khôi tại Mệnh, tài năng đương số càng
phát triển và đường công danh được hanh thông.`,
  },

  {
    id: 'hoa-khoa-tai-menh-cong-danh-thien-viet',
    title: 'Hóa Khoa + Thiên Việt tại Mệnh - Tài năng phát triển',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Thiên Việt'],
    doUuTien: 75,
    tomTat: `Khi Hóa Khoa cùng Thiên Việt tại Mệnh, tài năng đương số càng
phát triển và đường công danh được hanh thông.`,
  },

  {
    id: 'hoa-khoa-tai-menh-cong-danh-van-xuong',
    title: 'Hóa Khoa + Văn Xương tại Mệnh - Tài năng phát triển',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Văn Xương'],
    doUuTien: 75,
    tomTat: `Khi Hóa Khoa cùng Văn Xương tại Mệnh, tài năng đương số càng
phát triển, văn tài đặc biệt xuất chúng.`,
  },

  {
    id: 'hoa-khoa-tai-menh-cong-danh-van-khuc',
    title: 'Hóa Khoa + Văn Khúc tại Mệnh - Tài năng phát triển',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Văn Khúc'],
    doUuTien: 75,
    tomTat: `Khi Hóa Khoa cùng Văn Khúc tại Mệnh, tài năng đương số càng
phát triển, văn tài đặc biệt xuất chúng.`,
  },

  {
    id: 'hoa-khoa-tai-menh-cong-danh-thai-duong',
    title: 'Hóa Khoa + Thái Dương sáng tại Mệnh - Tài năng phát triển',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Thái Dương'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 75,
    tomTat: `Khi Hóa Khoa cùng Thái Dương sáng tại Mệnh, tài năng đương số
càng phát triển, công danh hiển đạt.`,
  },

  {
    id: 'hoa-khoa-tai-menh-cong-danh-thai-am',
    title: 'Hóa Khoa + Thái Âm sáng tại Mệnh - Tài năng phát triển',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Thái Âm'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 75,
    tomTat: `Khi Hóa Khoa cùng Thái Âm sáng tại Mệnh, tài năng đương số càng
phát triển, công danh hiển đạt.`,
  },

  {
    id: 'hoa-khoa-tai-menh-cong-danh-sat-tinh',
    title: 'Hóa Khoa + Sát tinh tại Mệnh - Chậm khoa bảng',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 75,
    tomTat: `Khi Hóa Khoa gặp sát tinh tại Mệnh, đương số khó đỗ cao hoặc
chậm khoa bảng. Tuy vậy, tư chất thông minh và năng khiếu văn hóa vẫn
giữ nguyên — không vì sát tinh mà mất đi.`,
  },

  {
    id: 'hoa-khoa-tai-menh-cong-danh-van-tinh',
    title: 'Hóa Khoa + Văn tinh tại Mệnh - Hiển đạt',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Lưu Niên Văn Tinh', 'Hóa Khoa'],
    doUuTien: 75,
    tomTat: `Khi Hóa Khoa cùng Văn tinh tại Mệnh, đương số hiển đạt trên
đường công danh, văn tài xuất chúng.`,
  },

  {
    id: 'hoa-khoa-tai-menh-cong-danh-quy-tinh-thien-khoi',
    title: 'Hóa Khoa + Quý tinh (Thiên Khôi) tại Mệnh - Có danh',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Thiên Khôi'],
    doUuTien: 75,
    tomTat: `Khi Hóa Khoa cùng Thiên Khôi tại Mệnh, đương số có danh tiếng
và được quý nhân nâng đỡ.`,
  },

  {
    id: 'hoa-khoa-tai-menh-cong-danh-quy-tinh-thien-viet',
    title: 'Hóa Khoa + Quý tinh (Thiên Việt) tại Mệnh - Có danh',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Thiên Việt'],
    doUuTien: 75,
    tomTat: `Khi Hóa Khoa cùng Thiên Việt tại Mệnh, đương số có danh tiếng
và được quý nhân nâng đỡ.`,
  },

  {
    id: 'hoa-khoa-tai-menh-cong-danh-tai-tinh-vu-khuc',
    title: 'Hóa Khoa + Tài tinh (Vũ Khúc) tại Mệnh - Có lộc',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Vũ Khúc'],
    doUuTien: 75,
    tomTat: `Khi Hóa Khoa cùng Vũ Khúc tại Mệnh, đương số có thêm lộc ngoài
đời, tài chính sung túc hơn.`,
  },

  {
    id: 'hoa-khoa-tai-menh-cong-danh-tai-tinh-loc-ton',
    title: 'Hóa Khoa + Tài tinh (Lộc Tồn) tại Mệnh - Có lộc',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Lộc Tồn'],
    doUuTien: 75,
    tomTat: `Khi Hóa Khoa cùng Lộc Tồn tại Mệnh, đương số có thêm lộc ngoài
đời, tài chính sung túc hơn.`,
  },

  {
    id: 'hoa-khoa-tai-menh-cong-danh-tai-tinh-hoa-loc',
    title: 'Hóa Khoa + Tài tinh (Hóa Lộc) tại Mệnh - Có lộc',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Hóa Lộc'],
    doUuTien: 75,
    tomTat: `Khi Hóa Khoa cùng Hóa Lộc tại Mệnh, đương số có thêm lộc ngoài
đời, tài chính sung túc hơn.`,
  },

  // ============================================================
  // 5. Bộ sao TỐT của Hóa Khoa
  // ============================================================
  {
    id: 'hoa-khoa-bo-sao-tot',
    title: 'Hóa Khoa - Bộ sao TỐT',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh', 'Tài Bạch', 'Quan Lộc'],
    ketHop: ['Hóa Lộc', 'Hóa Quyền'],
    doUuTien: 55,
    tomTat: `Khi đủ bộ **Tam Hóa Liên Châu** (Hóa Khoa cùng Hóa Quyền và Hóa
Lộc) tại Mệnh, Tài Bạch hoặc Quan Lộc, đương số đạt quý cách, phúc lớn,
công danh vinh hiển. Riêng tuổi Canh và Tân tuy làm tới chức cao nhưng
yểu mệnh.

Khi Hóa Khoa độc thủ tại Mệnh đi cùng Thiên Khôi, Thiên Việt và Thiên Hỷ,
đương số dễ thành công trong công việc.`,
  },

  {
    id: 'hoa-khoa-bo-sao-tot-ta-huu-tam-hoa',
    title: 'Hóa Khoa + Tả Hữu lai triều (Tam Hóa củng Mệnh) - Công khanh',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Hóa Lộc', 'Hóa Quyền'],
    doUuTien: 50,
    tomTat: `Khi Hóa Khoa cùng Tả Phù, Hữu Bật lai triều và Tam Hóa củng
Mệnh, đương số làm tới hàng công khanh.`,
  },

  {
    id: 'hoa-khoa-bo-sao-tot-hoa-loc-trung-nhieu',
    title: 'Hóa Khoa + Hóa Lộc trùng nhiêu tại Mệnh - Phụ tử văn chương cái thế',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Hóa Lộc'],
    doUuTien: 50,
    tomTat: `Khi Hóa Khoa cùng Hóa Lộc trùng nhiêu ư Mệnh, ứng cách "phụ tử
văn chương cái thế" — cha con đương số đều có văn chương xuất chúng.`,
  },

  {
    id: 'hoa-khoa-bo-sao-tot-hoa-ky-ty',
    title: 'Hóa Khoa + Hóa Kỵ tại Tý cư Mệnh - Ngôn lành danh thuận',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    chi: ['Tý'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 50,
    tomTat: `Khi Hóa Khoa cùng Hóa Kỵ tại Tý cư Mệnh, đương số ứng cách
"ngôn lành danh thuận".`,
  },

  {
    id: 'hoa-khoa-bo-sao-tot-van-xuong',
    title: 'Hóa Khoa + Văn Xương - Đỗ sớm',
    sao: ['Hóa Khoa'],
    ketHop: ['Văn Xương'],
    doUuTien: 50,
    tomTat: `Khi Hóa Khoa gặp Văn Xương, đương số đỗ sớm.`,
  },

  {
    id: 'hoa-khoa-bo-sao-tot-van-khuc',
    title: 'Hóa Khoa + Văn Khúc - Đỗ sớm',
    sao: ['Hóa Khoa'],
    ketHop: ['Văn Khúc'],
    doUuTien: 50,
    tomTat: `Khi Hóa Khoa gặp Văn Khúc, đương số đỗ sớm.`,
  },

  {
    id: 'hoa-khoa-bo-sao-tot-loc-ton-hoi-dan-than',
    title: 'Hóa Khoa + Lộc Tồn tại Hợi/Dần/Thân - Danh vị oanh liệt',
    sao: ['Hóa Khoa'],
    chi: ['Hợi', 'Dần', 'Thân'],
    ketHop: ['Lộc Tồn'],
    doUuTien: 50,
    tomTat: `Khi Hóa Khoa cùng Lộc Tồn tại Hợi, Dần hoặc Thân, đương số có
danh vị oanh liệt.`,
  },

  // ============================================================
  // 6. Bộ sao XẤU của Hóa Khoa
  // ============================================================
  {
    id: 'hoa-khoa-bo-sao-xau-dia-khong',
    title: 'Hóa Khoa + Địa Không - Không làm nên',
    sao: ['Hóa Khoa'],
    ketHop: ['Địa Không'],
    doUuTien: 50,
    tomTat: `Khi Hóa Khoa gặp Địa Không, đương số không làm nên đại sự
nhưng vẫn là danh sĩ, có thể làm thầy của người ta.`,
  },

  {
    id: 'hoa-khoa-bo-sao-xau-dia-kiep',
    title: 'Hóa Khoa + Địa Kiếp - Không làm nên',
    sao: ['Hóa Khoa'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 50,
    tomTat: `Khi Hóa Khoa gặp Địa Kiếp, đương số không làm nên đại sự nhưng
vẫn là danh sĩ, có thể làm thầy của người ta.`,
  },

  {
    id: 'hoa-khoa-bo-sao-xau-tuan',
    title: 'Hóa Khoa + Tuần - Một bước nên quan nhưng không bền',
    sao: ['Hóa Khoa'],
    ketHop: ['Tuần'],
    doUuTien: 50,
    tomTat: `Khi Hóa Khoa gặp Tuần, đương số một bước nên quan nhưng không
giữ được bền lâu.`,
  },

  {
    id: 'hoa-khoa-bo-sao-xau-triet',
    title: 'Hóa Khoa + Triệt - Một bước nên quan nhưng không bền',
    sao: ['Hóa Khoa'],
    ketHop: ['Triệt'],
    doUuTien: 50,
    tomTat: `Khi Hóa Khoa gặp Triệt, đương số một bước nên quan nhưng không
giữ được bền lâu.`,
  },

  {
    id: 'hoa-khoa-bo-sao-xau-luc-sat',
    title: 'Hóa Khoa + Lục Sát - Tổn hại danh tiếng',
    sao: ['Hóa Khoa'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 50,
    tomTat: `Khi Hóa Khoa gặp lục sát (Kình Dương, Đà La, Hỏa Tinh, Linh
Tinh, Địa Không, Địa Kiếp), đương số dễ vướng thị phi, ganh ghét, danh
tiếng tổn hại; công danh trắc trở, chuyện thi cử lận đận.`,
  },

  {
    id: 'hoa-khoa-bo-sao-xau-hoa-ky',
    title: 'Hóa Khoa + Hóa Kỵ - Tranh luận thị phi',
    sao: ['Hóa Khoa'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 50,
    tomTat: `Khi Hóa Khoa gặp Hóa Kỵ, đương số dù lời nói đúng lý vẫn dễ
gặp tranh luận, thị phi và phản bác. Cần tiết chế xu hướng cầu toàn trong
phát ngôn lẫn viết lách.`,
  },

  {
    id: 'hoa-khoa-bo-sao-xau-dia-kiep-tranh-luan',
    title: 'Hóa Khoa + Địa Kiếp - Tranh luận thị phi',
    sao: ['Hóa Khoa'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 49,
    tomTat: `Khi Hóa Khoa gặp Địa Kiếp, đương số dù lời nói đúng lý vẫn dễ
gặp tranh luận, thị phi và phản bác. Cần tiết chế xu hướng cầu toàn trong
phát ngôn lẫn viết lách.`,
  },

  {
    id: 'hoa-khoa-bo-sao-xau-linh-tinh',
    title: 'Hóa Khoa + Linh Tinh - Tranh luận thị phi',
    sao: ['Hóa Khoa'],
    ketHop: ['Linh Tinh'],
    doUuTien: 50,
    tomTat: `Khi Hóa Khoa gặp Linh Tinh, đương số dù lời nói đúng lý vẫn dễ
gặp tranh luận, thị phi và phản bác. Cần tiết chế xu hướng cầu toàn trong
phát ngôn lẫn viết lách.`,
  },

  // ============================================================
  // 7. Hóa Khoa tại Phụ Mẫu
  // ============================================================
  {
    id: 'hoa-khoa-tai-phu-mau',
    title: 'Hóa Khoa tại Phụ Mẫu',
    sao: ['Hóa Khoa'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Khi Hóa Khoa đắc địa tại Phụ Mẫu, cha mẹ đương số là người học
cao, biết dạy con và lấy giáo dục làm gốc. Gia đình nề nếp, trọng chữ
tín, có danh thơm.

Khi Hóa Khoa hãm địa, cha mẹ tuy có tài nhưng duyên phận với đương số
cách trở, tình cảm lạnh nhạt; tư tưởng cao khiến cha mẹ khó gần, hoặc
áp đặt lý tưởng làm con cái mệt mỏi.`,
  },

  {
    id: 'hoa-khoa-tai-phu-mau-van-khuc',
    title: 'Hóa Khoa + Văn Khúc tại Phụ Mẫu - Dòng họ coi trọng giáo dục',
    sao: ['Hóa Khoa'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Văn Khúc'],
    doUuTien: 70,
    tomTat: `Khi Hóa Khoa cùng Văn Khúc tại Phụ Mẫu, dòng họ đương số coi
trọng giáo dục; đương số kế thừa nền tảng tri thức vững vàng từ gia đình.`,
  },

  {
    id: 'hoa-khoa-tai-phu-mau-van-xuong',
    title: 'Hóa Khoa + Văn Xương tại Phụ Mẫu - Dòng họ coi trọng giáo dục',
    sao: ['Hóa Khoa'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Văn Xương'],
    doUuTien: 70,
    tomTat: `Khi Hóa Khoa cùng Văn Xương tại Phụ Mẫu, dòng họ đương số coi
trọng giáo dục; đương số kế thừa nền tảng tri thức vững vàng từ gia đình.`,
  },

  {
    id: 'hoa-khoa-tai-phu-mau-thien-khoi',
    title: 'Hóa Khoa + Thiên Khôi tại Phụ Mẫu - Giàu lớn',
    sao: ['Hóa Khoa'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Thiên Khôi'],
    doUuTien: 70,
    tomTat: `Khi Hóa Khoa cùng Thiên Khôi tại Phụ Mẫu, gia tộc đương số
giàu lớn. Xét về mồ mả, Hóa Khoa chủ ngôi dương phần.`,
  },

  {
    id: 'hoa-khoa-tai-phu-mau-sat-tinh',
    title: 'Hóa Khoa + Sát tinh tại Phụ Mẫu - Cha mẹ đoản thọ',
    sao: ['Hóa Khoa'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 70,
    tomTat: `Khi Hóa Khoa cùng sát tinh tại Phụ Mẫu, cha mẹ đương số có trí
tuệ cao nhưng đoản thọ, hay gặp bất trắc hoặc ly tán; danh tiếng cũng
chịu tổn hại.`,
  },

  // ============================================================
  // 8. Hóa Khoa tại Phúc Đức
  // ============================================================
  {
    id: 'hoa-khoa-tai-phuc-duc',
    title: 'Hóa Khoa tại Phúc Đức',
    sao: ['Hóa Khoa'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `Khi Hóa Khoa tọa Phúc Đức, đương số được hưởng phúc ấm từ dòng
họ, có tổ tiên che chở, nâng đỡ trên đường đời.`,
  },

  {
    id: 'hoa-khoa-tai-phuc-duc-quyen-xuong-khuc',
    title: 'Hóa Khoa + Hóa Quyền + Văn Xương + Văn Khúc tại Phúc Đức - Giòng dõi văn gia',
    sao: ['Hóa Khoa'],
    cung: ['Phúc Đức'],
    ketHop: ['Hóa Quyền', 'Văn Xương', 'Văn Khúc'],
    doUuTien: 73,
    tomTat: `Khi Hóa Khoa cùng Hóa Quyền, Văn Xương và Văn Khúc tại Phúc
Đức, đương số xuất thân từ giòng dõi văn gia.`,
  },

  {
    id: 'hoa-khoa-tai-phuc-duc-xuong-khuc',
    title: 'Hóa Khoa + Văn Xương + Văn Khúc tại Phúc Đức - Đỗ lớn',
    sao: ['Hóa Khoa'],
    cung: ['Phúc Đức'],
    ketHop: ['Văn Xương', 'Văn Khúc'],
    doUuTien: 73,
    tomTat: `Khi Hóa Khoa cùng Văn Xương và Văn Khúc tại Phúc Đức, đương số
đỗ lớn.`,
  },

  {
    id: 'hoa-khoa-tai-phuc-duc-hoa-loc',
    title: 'Hóa Khoa + Hóa Lộc tại Phúc Đức - Thọ',
    sao: ['Hóa Khoa'],
    cung: ['Phúc Đức'],
    ketHop: ['Hóa Lộc'],
    doUuTien: 73,
    tomTat: `Khi Hóa Khoa cùng Hóa Lộc tại Phúc Đức, đương số được hưởng
thọ.`,
  },

  {
    id: 'hoa-khoa-tai-phuc-duc-vu-tham',
    title: 'Hóa Khoa + Vũ Khúc + Tham Lang tại Phúc Đức - Phát anh hùng',
    sao: ['Hóa Khoa'],
    cung: ['Phúc Đức'],
    ketHop: ['Vũ Khúc', 'Tham Lang'],
    doUuTien: 73,
    tomTat: `Khi Hóa Khoa cùng Vũ Khúc và Tham Lang tại Phúc Đức, đương số
phát theo cách anh hùng.`,
  },

  {
    id: 'hoa-khoa-tai-phuc-duc-dac-dia',
    title: 'Hóa Khoa tại Phúc Đức Đắc địa - Truyền thống học hành',
    sao: ['Hóa Khoa'],
    cung: ['Phúc Đức'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 73,
    tomTat: `Khi Hóa Khoa Đắc địa tại Phúc Đức, dòng họ đương số có truyền
thống học hành, người thân nhiều danh vị. Đương số hưởng phúc tổ lâu dài,
lập nghiệp dựa trên nền tảng gia tộc; tư tưởng thanh cao, sống trọng
nghĩa lý.`,
  },

  {
    id: 'hoa-khoa-tai-phuc-duc-ham',
    title: 'Hóa Khoa tại Phúc Đức Hãm - Phúc mỏng dần',
    sao: ['Hóa Khoa'],
    cung: ['Phúc Đức'],
    trangThai: ['Hãm'],
    doUuTien: 73,
    tomTat: `Khi Hóa Khoa Hãm địa tại Phúc Đức, đương số sống nặng lý tưởng,
thiếu thực tế và dễ rơi vào cô lập. Tổ tiên có danh nhưng không đủ lực
phù trợ, phúc lộc cứ mỏng dần theo thời gian.`,
  },

  {
    id: 'hoa-khoa-tai-phuc-duc-ham-luc-sat',
    title: 'Hóa Khoa Hãm + Lục Sát tại Phúc Đức - Danh tiếng tổ tiên mai một',
    sao: ['Hóa Khoa'],
    cung: ['Phúc Đức'],
    trangThai: ['Hãm'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 68,
    tomTat: `Khi Hóa Khoa Hãm địa gặp sát tinh hoặc Địa Không, Địa Kiếp tại
Phúc Đức, danh tiếng tổ tiên đương số dễ bị bôi nhọ hoặc mai một dần.`,
  },

  // ============================================================
  // 9. Hóa Khoa tại Điền Trạch
  // ============================================================
  {
    id: 'hoa-khoa-tai-dien-trach',
    title: 'Hóa Khoa tại Điền Trạch',
    sao: ['Hóa Khoa'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Khi Hóa Khoa tọa Điền Trạch, đương số sở hữu nhà cửa nhờ học
vấn và danh tiếng mang lại. Nơi ở khang trang, gắn liền môi trường giáo
dục và văn hóa cao; đúng câu "an cư lạc nghiệp", gia đạo yên ổn, nề nếp
lễ nghĩa.

Khi Hãm địa, nhà cửa tuy đẹp nhưng không khí lạnh nhạt, thiếu kết nối
cảm xúc; chốn cư ngụ cũng khó ổn định lâu dài, đương số phải nay đây
mai đó.`,
  },

  {
    id: 'hoa-khoa-tai-dien-trach-tam-hoa',
    title: 'Hóa Khoa + Tam Hóa tại Điền Trạch - Ruộng vườn tiền của nhiều',
    sao: ['Hóa Khoa'],
    cung: ['Điền Trạch'],
    ketHop: ['Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa'],
    doUuTien: 70,
    tomTat: `Khi Hóa Khoa cùng đủ Tam Hóa tại Điền Trạch, đương số có ruộng
vườn và tiền của nhiều.`,
  },

  {
    id: 'hoa-khoa-tai-dien-trach-vu-khuc',
    title: 'Hóa Khoa + Vũ Khúc tại Điền Trạch - Điền tài vượng phát',
    sao: ['Hóa Khoa'],
    cung: ['Điền Trạch'],
    ketHop: ['Vũ Khúc'],
    doUuTien: 70,
    tomTat: `Khi Hóa Khoa cùng Vũ Khúc tại Điền Trạch, điền tài đương số
vượng phát.`,
  },

  {
    id: 'hoa-khoa-tai-dien-trach-thien-tuong',
    title: 'Hóa Khoa + Thiên Tướng tại Điền Trạch - Điền tài vượng phát',
    sao: ['Hóa Khoa'],
    cung: ['Điền Trạch'],
    ketHop: ['Thiên Tướng'],
    doUuTien: 70,
    tomTat: `Khi Hóa Khoa cùng Thiên Tướng tại Điền Trạch, điền tài đương
số vượng phát.`,
  },

  {
    id: 'hoa-khoa-tai-dien-trach-thien-luong',
    title: 'Hóa Khoa + Thiên Lương tại Điền Trạch - Điền tài vượng phát',
    sao: ['Hóa Khoa'],
    cung: ['Điền Trạch'],
    ketHop: ['Thiên Lương'],
    doUuTien: 70,
    tomTat: `Khi Hóa Khoa cùng Thiên Lương tại Điền Trạch, điền tài đương
số vượng phát.`,
  },

  {
    id: 'hoa-khoa-tai-dien-trach-ta-phu',
    title: 'Hóa Khoa + Tả Phù tại Điền Trạch - Điền tài vượng phát',
    sao: ['Hóa Khoa'],
    cung: ['Điền Trạch'],
    ketHop: ['Tả Phù'],
    doUuTien: 70,
    tomTat: `Khi Hóa Khoa cùng Tả Phù tại Điền Trạch, điền tài đương số
vượng phát.`,
  },

  {
    id: 'hoa-khoa-tai-dien-trach-huu-bat',
    title: 'Hóa Khoa + Hữu Bật tại Điền Trạch - Điền tài vượng phát',
    sao: ['Hóa Khoa'],
    cung: ['Điền Trạch'],
    ketHop: ['Hữu Bật'],
    doUuTien: 70,
    tomTat: `Khi Hóa Khoa cùng Hữu Bật tại Điền Trạch, điền tài đương số
vượng phát.`,
  },

  {
    id: 'hoa-khoa-tai-dien-trach-thien-khoi',
    title: 'Hóa Khoa + Thiên Khôi tại Điền Trạch - Sớm có bất động sản',
    sao: ['Hóa Khoa'],
    cung: ['Điền Trạch'],
    ketHop: ['Thiên Khôi'],
    doUuTien: 70,
    tomTat: `Khi Hóa Khoa cùng Thiên Khôi tại Điền Trạch, đương số dễ mua
nhà và sớm có bất động sản nhờ tài học hoặc nghề tri thức.`,
  },

  {
    id: 'hoa-khoa-tai-dien-trach-van-xuong',
    title: 'Hóa Khoa + Văn Xương tại Điền Trạch - Sớm có bất động sản',
    sao: ['Hóa Khoa'],
    cung: ['Điền Trạch'],
    ketHop: ['Văn Xương'],
    doUuTien: 70,
    tomTat: `Khi Hóa Khoa cùng Văn Xương tại Điền Trạch, đương số dễ mua
nhà và sớm có bất động sản nhờ tài học hoặc nghề tri thức.`,
  },

  {
    id: 'hoa-khoa-tai-dien-trach-van-khuc',
    title: 'Hóa Khoa + Văn Khúc tại Điền Trạch - Sớm có bất động sản',
    sao: ['Hóa Khoa'],
    cung: ['Điền Trạch'],
    ketHop: ['Văn Khúc'],
    doUuTien: 70,
    tomTat: `Khi Hóa Khoa cùng Văn Khúc tại Điền Trạch, đương số dễ mua
nhà và sớm có bất động sản nhờ tài học hoặc nghề tri thức.`,
  },

  // ============================================================
  // 10. Hóa Khoa tại Quan Lộc
  // ============================================================
  {
    id: 'hoa-khoa-tai-quan-loc',
    title: 'Hóa Khoa tại Quan Lộc',
    sao: ['Hóa Khoa'],
    cung: ['Quan Lộc'],
    doUuTien: 82,
    tomTat: `Quan Lộc là vị trí rất tốt cho Hóa Khoa. Sự nghiệp đương số
sáng nhờ học vấn và hiểu biết; đương số trọng tri thức, dễ đỗ đạt và có
danh tiếng học thuật. Đúng câu "hữu xạ tự nhiên hương", thăng tiến đến
nhờ năng lực thực sự cùng sự chính trực.

Đương số phù hợp công việc liên quan đến lý luận, quản lý, giảng huấn
hoặc nghiên cứu.

Khi Hãm địa, sự nghiệp lên thác xuống ghềnh do đương số lý tưởng hóa
nghề nghiệp; học nhiều nhưng khó chuyển hóa thành kết quả thực tế.`,
  },

  {
    id: 'hoa-khoa-tai-quan-loc-quyen-tu-vi-vu-khuc',
    title: 'Hóa Khoa + Hóa Quyền + Tử Vi + Vũ Khúc tại Quan Lộc - Hiển vinh',
    sao: ['Hóa Khoa'],
    cung: ['Quan Lộc'],
    ketHop: ['Hóa Quyền', 'Tử Vi', 'Vũ Khúc'],
    doUuTien: 77,
    tomTat: `Khi Hóa Khoa cùng Hóa Quyền, Tử Vi và Vũ Khúc tại Quan Lộc,
đương số hiển vinh trên đường công danh.`,
  },

  {
    id: 'hoa-khoa-tai-quan-loc-quyen-tu-vi-thien-ma',
    title: 'Hóa Khoa + Hóa Quyền + Tử Vi + Thiên Mã tại Quan Lộc - Hiển vinh',
    sao: ['Hóa Khoa'],
    cung: ['Quan Lộc'],
    ketHop: ['Hóa Quyền', 'Tử Vi', 'Thiên Mã'],
    doUuTien: 77,
    tomTat: `Khi Hóa Khoa cùng Hóa Quyền, Tử Vi và Thiên Mã tại Quan Lộc,
đương số hiển vinh trên đường công danh.`,
  },

  {
    id: 'hoa-khoa-tai-quan-loc-quyen-thien-phu-vu-khuc',
    title: 'Hóa Khoa + Hóa Quyền + Thiên Phủ + Vũ Khúc tại Quan Lộc - Hiển vinh',
    sao: ['Hóa Khoa'],
    cung: ['Quan Lộc'],
    ketHop: ['Hóa Quyền', 'Thiên Phủ', 'Vũ Khúc'],
    doUuTien: 77,
    tomTat: `Khi Hóa Khoa cùng Hóa Quyền, Thiên Phủ và Vũ Khúc tại Quan
Lộc, đương số hiển vinh trên đường công danh.`,
  },

  {
    id: 'hoa-khoa-tai-quan-loc-quyen-thien-phu-thien-ma',
    title: 'Hóa Khoa + Hóa Quyền + Thiên Phủ + Thiên Mã tại Quan Lộc - Hiển vinh',
    sao: ['Hóa Khoa'],
    cung: ['Quan Lộc'],
    ketHop: ['Hóa Quyền', 'Thiên Phủ', 'Thiên Mã'],
    doUuTien: 77,
    tomTat: `Khi Hóa Khoa cùng Hóa Quyền, Thiên Phủ và Thiên Mã tại Quan
Lộc, đương số hiển vinh trên đường công danh.`,
  },

  {
    id: 'hoa-khoa-tai-quan-loc-dia-khong',
    title: 'Hóa Khoa + Địa Không tại Quan Lộc - Tai tiếng',
    sao: ['Hóa Khoa'],
    cung: ['Quan Lộc'],
    ketHop: ['Địa Không'],
    doUuTien: 77,
    tomTat: `Khi Hóa Khoa cùng Địa Không tại Quan Lộc, đương số cần đề
phòng tai tiếng do lời nói và tranh luận học thuật, dễ vướng vụ việc
pháp lý trong nghề.`,
  },

  {
    id: 'hoa-khoa-tai-quan-loc-dia-kiep',
    title: 'Hóa Khoa + Địa Kiếp tại Quan Lộc - Tai tiếng',
    sao: ['Hóa Khoa'],
    cung: ['Quan Lộc'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 77,
    tomTat: `Khi Hóa Khoa cùng Địa Kiếp tại Quan Lộc, đương số cần đề phòng
tai tiếng do lời nói và tranh luận học thuật, dễ vướng vụ việc pháp lý
trong nghề.`,
  },

  {
    id: 'hoa-khoa-tai-quan-loc-hoa-ky',
    title: 'Hóa Khoa + Hóa Kỵ tại Quan Lộc - Tai tiếng',
    sao: ['Hóa Khoa'],
    cung: ['Quan Lộc'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 77,
    tomTat: `Khi Hóa Khoa cùng Hóa Kỵ tại Quan Lộc, đương số cần đề phòng
tai tiếng do lời nói và tranh luận học thuật, dễ vướng vụ việc pháp lý
trong nghề.`,
  },

  {
    id: 'hoa-khoa-quan-loc-tam-hoa-ta-huu-pha-quan-ty-ngo',
    title: 'Hóa Khoa tại Quan Lộc + Tam Hóa + Tả Hữu + Phá Quân tại Tý/Ngọ - Quân công lớn',
    sao: ['Hóa Khoa'],
    cung: ['Quan Lộc'],
    chi: ['Tý', 'Ngọ'],
    ketHop: ['Hóa Lộc', 'Hóa Quyền', 'Tả Phù', 'Hữu Bật', 'Phá Quân'],
    doUuTien: 80,
    tomTat: `Khi Hóa Khoa tại Quan Lộc đi cùng Tam Hóa, Tả Phù, Hữu Bật và
Phá Quân tại Tý hoặc Ngọ, đương số đạt cách cục đỉnh cao về sự nghiệp võ
nghiệp hoặc quan lộ — quân công lớn, hiển hách một thời.`,
  },

  // ============================================================
  // 11. Hóa Khoa tại Nô Bộc
  // ============================================================
  {
    id: 'hoa-khoa-tai-no-boc',
    title: 'Hóa Khoa tại Nô Bộc',
    sao: ['Hóa Khoa'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Khi Hóa Khoa tọa Nô Bộc, bạn bè quanh đương số mang tính tri
thức, ưa giao thiệp với người có học và trọng đạo lý.`,
  },

  {
    id: 'hoa-khoa-tai-no-boc-tam-hoa',
    title: 'Hóa Khoa + Tam Hóa tại Nô Bộc - Nhiều người giúp đỡ',
    sao: ['Hóa Khoa'],
    cung: ['Nô Bộc'],
    ketHop: ['Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa'],
    doUuTien: 70,
    tomTat: `Khi Hóa Khoa cùng đủ Tam Hóa tại Nô Bộc, đương số có nhiều
người giúp đỡ đắc lực, nhờ đó làm nên sự nghiệp.`,
  },

  {
    id: 'hoa-khoa-tai-no-boc-dac-dia',
    title: 'Hóa Khoa tại Nô Bộc Đắc địa - Bạn bè tri thức',
    sao: ['Hóa Khoa'],
    cung: ['Nô Bộc'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 70,
    tomTat: `Khi Hóa Khoa Đắc địa tại Nô Bộc, đương số chơi với người có
học, trọng lễ nghĩa và tri thức — phần lớn là thầy cô, học giả hoặc bạn
bè thanh cao văn nhã. Đương số chọn người đồng hành dựa trên đạo đức,
học vấn và cách giao tiếp; được kính trọng, ít vướng tranh chấp với cấp
dưới.`,
  },

  {
    id: 'hoa-khoa-tai-no-boc-ham',
    title: 'Hóa Khoa tại Nô Bộc Hãm - Lý tưởng hóa bạn bè',
    sao: ['Hóa Khoa'],
    cung: ['Nô Bộc'],
    trangThai: ['Hãm'],
    doUuTien: 70,
    tomTat: `Khi Hóa Khoa Hãm địa tại Nô Bộc, đương số có xu hướng lý tưởng
hóa bạn bè, chọn theo tư tưởng hơn là thực tế. Bạn bè tuy hợp về lý
tưởng nhưng không hỗ trợ thực tế; đương số cũng nói lý nhiều nên khó
hòa nhập vào môi trường bình dân hay thương mại.`,
  },

  // ============================================================
  // 12. Hóa Khoa tại Thiên Di
  // ============================================================
  {
    id: 'hoa-khoa-tai-thien-di',
    title: 'Hóa Khoa tại Thiên Di',
    sao: ['Hóa Khoa'],
    cung: ['Thiên Di'],
    doUuTien: 78,
    tomTat: `Khi Hóa Khoa tọa Thiên Di, đương số xuất hiện nơi công cộng
với hình tượng có tri thức.

Đương số dễ được trọng dụng trong các lĩnh vực giáo dục, chính trị, pháp
luật hoặc những nghề đòi hỏi học vấn cao. Đi xa học hành hay công tác
đều cho kết quả tốt, thường gặp người nâng đỡ trên đường đi.

Khi Hãm địa, đương số hay thiên về nói lý thuyết, thiếu thực tế nên
người khác khó gần. Đi xa thì tĩnh tại nhưng ít sinh khí — có lợi cho
việc học tập song tài lộc lại đến chậm.`,
  },

  {
    id: 'hoa-khoa-tai-thien-di-hoa-quyen',
    title: 'Hóa Khoa + Hóa Quyền tại Thiên Di - Đi ra có tài lợi',
    sao: ['Hóa Khoa'],
    cung: ['Thiên Di'],
    ketHop: ['Hóa Quyền'],
    doUuTien: 73,
    tomTat: `Khi Hóa Khoa cùng Hóa Quyền tại Thiên Di, đương số đi ra
ngoài có tài lợi, được người khác quý nể.`,
  },

  {
    id: 'hoa-khoa-tai-thien-di-quyen-ta-huu-khoi-viet',
    title: 'Hóa Khoa + Hóa Quyền + Tả Hữu + Khôi Việt tại Thiên Di - Đi ra làm nên lớn',
    sao: ['Hóa Khoa'],
    cung: ['Thiên Di'],
    ketHop: ['Hóa Quyền', 'Tả Phù', 'Hữu Bật', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 73,
    tomTat: `Khi Hóa Khoa cùng Hóa Quyền, Tả Phù, Hữu Bật, Thiên Khôi và
Thiên Việt tại Thiên Di, đương số đi xa làm nên đại nghiệp, gặp quý
nhân tín nhiệm.`,
  },

  {
    id: 'hoa-khoa-tai-thien-di-khoi-viet-nhat-nguyet-tu-phu',
    title: 'Hóa Khoa + Khôi Việt + Nhật Nguyệt + Tử Phủ tại Thiên Di - Đi ra làm nên lớn',
    sao: ['Hóa Khoa'],
    cung: ['Thiên Di'],
    ketHop: ['Thiên Khôi', 'Thiên Việt', 'Thái Dương', 'Thái Âm', 'Tử Vi', 'Thiên Phủ'],
    doUuTien: 73,
    tomTat: `Khi Hóa Khoa cùng Thiên Khôi, Thiên Việt, Thái Dương, Thái Âm,
Tử Vi và Thiên Phủ tại Thiên Di, đương số đi xa làm nên đại nghiệp, gặp
quý nhân tín nhiệm.`,
  },

  {
    id: 'hoa-khoa-tai-thien-di-tam-hoa',
    title: 'Hóa Khoa + Tam Hóa tại Thiên Di - Quyền binh giàu sang',
    sao: ['Hóa Khoa'],
    cung: ['Thiên Di'],
    ketHop: ['Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa'],
    doUuTien: 73,
    tomTat: `Khi Hóa Khoa cùng đủ Tam Hóa tại Thiên Di, đương số có quyền
binh và giàu sang.`,
  },

  {
    id: 'hoa-khoa-tai-thien-di-hoa-ky',
    title: 'Hóa Khoa + Hóa Kỵ tại Thiên Di - Tranh luận thị phi',
    sao: ['Hóa Khoa'],
    cung: ['Thiên Di'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 73,
    tomTat: `Khi Hóa Khoa cùng Hóa Kỵ tại Thiên Di, đương số dù lời nói
đúng lý vẫn dễ vướng tranh luận, thị phi và phản bác.`,
  },

  {
    id: 'hoa-khoa-tai-thien-di-dia-kiep',
    title: 'Hóa Khoa + Địa Kiếp tại Thiên Di - Tranh luận thị phi',
    sao: ['Hóa Khoa'],
    cung: ['Thiên Di'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 73,
    tomTat: `Khi Hóa Khoa cùng Địa Kiếp tại Thiên Di, đương số dù lời nói
đúng lý vẫn dễ vướng tranh luận, thị phi và phản bác.`,
  },

  {
    id: 'hoa-khoa-tai-thien-di-linh-tinh',
    title: 'Hóa Khoa + Linh Tinh tại Thiên Di - Tranh luận thị phi',
    sao: ['Hóa Khoa'],
    cung: ['Thiên Di'],
    ketHop: ['Linh Tinh'],
    doUuTien: 73,
    tomTat: `Khi Hóa Khoa cùng Linh Tinh tại Thiên Di, đương số dù lời nói
đúng lý vẫn dễ vướng tranh luận, thị phi và phản bác.`,
  },

  // ============================================================
  // 13. Hóa Khoa tại Tật Ách - GIẢI BỆNH MẠNH
  // ============================================================
  {
    id: 'hoa-khoa-tai-tat-ach',
    title: 'Hóa Khoa tại Tật Ách - Giải bệnh mạnh',
    sao: ['Hóa Khoa'],
    cung: ['Tật Ách'],
    doUuTien: 80,
    tomTat: `Tật Ách là vị trí tốt cho Hóa Khoa. Đương số phòng bệnh bằng
tri thức và sự hiểu biết, trị bệnh bằng lý luận khoa học và y học chính
quy. Khi đối mặt với nghịch cảnh, đương số dùng lý trí để tìm hiểu
nguyên nhân gốc rễ của vấn đề.

Nhờ vậy đương số ít mắc bệnh trầm trọng; nếu có thì cũng phát hiện sớm,
điều trị hợp lý và dễ hồi phục. Tâm lý nói chung ổn định, ít rơi vào lo
âu cực đoan, biết giữ bình tĩnh.

Khi Hãm địa, đương số dễ mắc bệnh thuộc hệ thần kinh, suy nghĩ quá mức
và lo âu do lý trí vận động quá nhiều. Phân tích bệnh quá chi tiết
khiến đương số dễ thành tâm bệnh hoặc loạn tưởng, thiếu sự cân bằng
giữa tâm, thân và trí.`,
  },

  {
    id: 'hoa-khoa-tai-tat-ach-tam-hoa',
    title: 'Hóa Khoa + Tam Hóa tại Tật Ách - Ốm gặp thuốc',
    sao: ['Hóa Khoa'],
    cung: ['Tật Ách'],
    ketHop: ['Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa'],
    doUuTien: 75,
    tomTat: `Khi Hóa Khoa cùng đủ Tam Hóa tại Tật Ách, đương số ốm thì gặp
thuốc, gặp tai nạn thì có người cứu.`,
  },

  {
    id: 'hoa-khoa-tai-tat-ach-ta-huu-tu-phu',
    title: 'Hóa Khoa + Tả Hữu + Tử Phủ tại Tật Ách - Ốm gặp thuốc',
    sao: ['Hóa Khoa'],
    cung: ['Tật Ách'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Tử Vi', 'Thiên Phủ'],
    doUuTien: 75,
    tomTat: `Khi Hóa Khoa cùng Tả Phù, Hữu Bật, Tử Vi và Thiên Phủ tại Tật
Ách, đương số ốm thì gặp thuốc, gặp tai nạn thì có người cứu.`,
  },

  // ============================================================
  // 14. Hóa Khoa tại Tài Bạch
  // ============================================================
  {
    id: 'hoa-khoa-tai-tai-bach',
    title: 'Hóa Khoa tại Tài Bạch',
    sao: ['Hóa Khoa'],
    cung: ['Tài Bạch'],
    doUuTien: 78,
    tomTat: `Khi Hóa Khoa tọa Tài Bạch, tài lộc đương số gắn liền với chất
xám và học vấn — kiếm tiền nhờ trí tuệ chứ không phải may rủi.`,
  },

  {
    id: 'hoa-khoa-tai-tai-bach-van-khuc',
    title: 'Hóa Khoa + Văn Khúc tại Tài Bạch - Lợi từ chất xám',
    sao: ['Hóa Khoa'],
    cung: ['Tài Bạch'],
    ketHop: ['Văn Khúc'],
    doUuTien: 73,
    tomTat: `Khi Hóa Khoa cùng Văn Khúc tại Tài Bạch, đương số có lợi từ
học bổng, bản quyền, công trình nghiên cứu, dạy học, viết sách hoặc tư
vấn chuyên môn.`,
  },

  {
    id: 'hoa-khoa-tai-tai-bach-thien-khoi',
    title: 'Hóa Khoa + Thiên Khôi tại Tài Bạch - Lợi từ chất xám',
    sao: ['Hóa Khoa'],
    cung: ['Tài Bạch'],
    ketHop: ['Thiên Khôi'],
    doUuTien: 73,
    tomTat: `Khi Hóa Khoa cùng Thiên Khôi tại Tài Bạch, đương số có lợi từ
học bổng, bản quyền, công trình nghiên cứu, dạy học, viết sách hoặc tư
vấn chuyên môn.`,
  },

  {
    id: 'hoa-khoa-tai-tai-bach-thien-viet',
    title: 'Hóa Khoa + Thiên Việt tại Tài Bạch - Lợi từ chất xám',
    sao: ['Hóa Khoa'],
    cung: ['Tài Bạch'],
    ketHop: ['Thiên Việt'],
    doUuTien: 73,
    tomTat: `Khi Hóa Khoa cùng Thiên Việt tại Tài Bạch, đương số có lợi từ
học bổng, bản quyền, công trình nghiên cứu, dạy học, viết sách hoặc tư
vấn chuyên môn.`,
  },

  {
    id: 'hoa-khoa-tai-tai-bach-tam-hoa',
    title: 'Hóa Khoa + Tam Hóa tại Tài Bạch - Điền tài vượng phát',
    sao: ['Hóa Khoa'],
    cung: ['Tài Bạch'],
    ketHop: ['Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa'],
    doUuTien: 73,
    tomTat: `Khi Hóa Khoa cùng đủ Tam Hóa tại Tài Bạch, điền tài đương số
vượng phát.`,
  },

  {
    id: 'hoa-khoa-tai-tai-bach-vu-tuong-luong-ta-huu',
    title: 'Hóa Khoa + Vũ + Tướng + Lương + Tả Hữu tại Tài Bạch - Điền tài vượng phát',
    sao: ['Hóa Khoa'],
    cung: ['Tài Bạch'],
    ketHop: ['Vũ Khúc', 'Thiên Tướng', 'Thiên Lương', 'Tả Phù', 'Hữu Bật'],
    doUuTien: 73,
    tomTat: `Khi Hóa Khoa cùng Vũ Khúc, Thiên Tướng, Thiên Lương, Tả Phù
và Hữu Bật tại Tài Bạch, điền tài đương số vượng phát.`,
  },

  {
    id: 'hoa-khoa-tai-tai-bach-hoa-ky',
    title: 'Hóa Khoa + Hóa Kỵ tại Tài Bạch - Tài lộc trì hoãn',
    sao: ['Hóa Khoa'],
    cung: ['Tài Bạch'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 73,
    tomTat: `Khi Hóa Khoa cùng Hóa Kỵ tại Tài Bạch, tài lộc đương số trì
hoãn; cần tránh thái độ bảo thủ về quan điểm tài chính.`,
  },

  {
    id: 'hoa-khoa-tai-tai-bach-kinh-duong',
    title: 'Hóa Khoa + Kình Dương tại Tài Bạch - Tài lộc trì hoãn',
    sao: ['Hóa Khoa'],
    cung: ['Tài Bạch'],
    ketHop: ['Kình Dương'],
    doUuTien: 73,
    tomTat: `Khi Hóa Khoa cùng Kình Dương tại Tài Bạch, tài lộc đương số
trì hoãn; cần tránh thái độ bảo thủ về quan điểm tài chính.`,
  },

  {
    id: 'hoa-khoa-tai-tai-bach-da-la',
    title: 'Hóa Khoa + Đà La tại Tài Bạch - Tài lộc trì hoãn',
    sao: ['Hóa Khoa'],
    cung: ['Tài Bạch'],
    ketHop: ['Đà La'],
    doUuTien: 73,
    tomTat: `Khi Hóa Khoa cùng Đà La tại Tài Bạch, tài lộc đương số trì
hoãn; cần tránh thái độ bảo thủ về quan điểm tài chính.`,
  },

  {
    id: 'hoa-khoa-tai-tai-bach-dac-dia',
    title: 'Hóa Khoa tại Tài Bạch Đắc địa - Tài lộc tri thức',
    sao: ['Hóa Khoa'],
    cung: ['Tài Bạch'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 73,
    tomTat: `Khi Hóa Khoa Đắc địa tại Tài Bạch, đương số kiếm tài lộc từ
các nghề tri thức như luật pháp, giáo dục, y tế hay lý luận. Đương số
sẵn lòng đầu tư cho học vấn và phát triển bản thân; tài vận ổn định,
tích lũy được lâu dài, làm ăn có uy tín.`,
  },

  {
    id: 'hoa-khoa-tai-tai-bach-ham',
    title: 'Hóa Khoa tại Tài Bạch Hãm - Nghèo trong cao quý',
    sao: ['Hóa Khoa'],
    cung: ['Tài Bạch'],
    trangThai: ['Hãm'],
    doUuTien: 73,
    tomTat: `Khi Hóa Khoa Hãm địa tại Tài Bạch, tiền đến với đương số chậm
do quá tính toán, hay bỏ qua cơ hội thực tế. Đây là kiểu "nghèo trong
cao quý" — đương số không bon chen nên khó làm giàu nhanh.`,
  },

  // ============================================================
  // 15. Hóa Khoa tại Tử Tức
  // ============================================================
  {
    id: 'hoa-khoa-tai-tu-tuc',
    title: 'Hóa Khoa tại Tử Tức',
    sao: ['Hóa Khoa'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Khi Hóa Khoa tọa Tử Tức, đây là điềm tốt cho việc sinh con và
nuôi con. Con cái đương số học hành giỏi, đỗ đạt và thành công qua con
đường tri thức, khiến cha mẹ "mát mặt".

Cách dạy con của đương số thiên về lý trí và giáo dưỡng đạo đức, dùng
tình cảm nhẹ nhàng để cảm hóa.

Mặt khác, đương số đôi khi kỳ vọng quá cao về học hành hay đạo đức,
tạo áp lực và khoảng cách thế hệ với con cái. Lối "nuôi con bằng tư
tưởng" cũng dễ thiếu thực tế.`,
  },

  {
    id: 'hoa-khoa-tai-tu-tuc-tam-hoa',
    title: 'Hóa Khoa + Tam Hóa tại Tử Tức - Sinh quý tử',
    sao: ['Hóa Khoa'],
    cung: ['Tử Tức'],
    ketHop: ['Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa'],
    doUuTien: 70,
    tomTat: `Khi Hóa Khoa cùng đủ Tam Hóa tại Tử Tức, đương số sinh quý tử,
con cái về sau làm nên sang giàu.`,
  },

  {
    id: 'hoa-khoa-tai-tu-tuc-van-xuong',
    title: 'Hóa Khoa + Văn Xương tại Tử Tức - Con xuất chúng học thuật',
    sao: ['Hóa Khoa'],
    cung: ['Tử Tức'],
    ketHop: ['Văn Xương'],
    doUuTien: 70,
    tomTat: `Khi Hóa Khoa cùng Văn Xương tại Tử Tức, con cái đương số xuất
chúng về học thuật, nổi tiếng đạo đức trong các lĩnh vực giáo dục hoặc
công quyền.`,
  },

  {
    id: 'hoa-khoa-tai-tu-tuc-van-khuc',
    title: 'Hóa Khoa + Văn Khúc tại Tử Tức - Con xuất chúng học thuật',
    sao: ['Hóa Khoa'],
    cung: ['Tử Tức'],
    ketHop: ['Văn Khúc'],
    doUuTien: 70,
    tomTat: `Khi Hóa Khoa cùng Văn Khúc tại Tử Tức, con cái đương số xuất
chúng về học thuật, nổi tiếng đạo đức trong các lĩnh vực giáo dục hoặc
công quyền.`,
  },

  {
    id: 'hoa-khoa-tai-tu-tuc-thien-khoi',
    title: 'Hóa Khoa + Thiên Khôi tại Tử Tức - Con xuất chúng học thuật',
    sao: ['Hóa Khoa'],
    cung: ['Tử Tức'],
    ketHop: ['Thiên Khôi'],
    doUuTien: 70,
    tomTat: `Khi Hóa Khoa cùng Thiên Khôi tại Tử Tức, con cái đương số xuất
chúng về học thuật, nổi tiếng đạo đức trong các lĩnh vực giáo dục hoặc
công quyền.`,
  },

  {
    id: 'hoa-khoa-tai-tu-tuc-thien-viet',
    title: 'Hóa Khoa + Thiên Việt tại Tử Tức - Con xuất chúng học thuật',
    sao: ['Hóa Khoa'],
    cung: ['Tử Tức'],
    ketHop: ['Thiên Việt'],
    doUuTien: 70,
    tomTat: `Khi Hóa Khoa cùng Thiên Việt tại Tử Tức, con cái đương số xuất
chúng về học thuật, nổi tiếng đạo đức trong các lĩnh vực giáo dục hoặc
công quyền.`,
  },

  {
    id: 'hoa-khoa-tai-tu-tuc-ta-phu',
    title: 'Hóa Khoa + Tả Phù tại Tử Tức - Con xuất chúng học thuật',
    sao: ['Hóa Khoa'],
    cung: ['Tử Tức'],
    ketHop: ['Tả Phù'],
    doUuTien: 70,
    tomTat: `Khi Hóa Khoa cùng Tả Phù tại Tử Tức, con cái đương số xuất
chúng về học thuật, nổi tiếng đạo đức trong các lĩnh vực giáo dục hoặc
công quyền.`,
  },

  {
    id: 'hoa-khoa-tai-tu-tuc-huu-bat',
    title: 'Hóa Khoa + Hữu Bật tại Tử Tức - Con xuất chúng học thuật',
    sao: ['Hóa Khoa'],
    cung: ['Tử Tức'],
    ketHop: ['Hữu Bật'],
    doUuTien: 70,
    tomTat: `Khi Hóa Khoa cùng Hữu Bật tại Tử Tức, con cái đương số xuất
chúng về học thuật, nổi tiếng đạo đức trong các lĩnh vực giáo dục hoặc
công quyền.`,
  },

  {
    id: 'hoa-khoa-tai-tu-tuc-dia-khong',
    title: 'Hóa Khoa + Địa Không tại Tử Tức - Con biệt lập',
    sao: ['Hóa Khoa'],
    cung: ['Tử Tức'],
    ketHop: ['Địa Không'],
    doUuTien: 70,
    tomTat: `Khi Hóa Khoa cùng Địa Không tại Tử Tức, con cái đương số biệt
lập, không dễ chia sẻ tâm tư với cha mẹ.`,
  },

  {
    id: 'hoa-khoa-tai-tu-tuc-dia-kiep',
    title: 'Hóa Khoa + Địa Kiếp tại Tử Tức - Con biệt lập',
    sao: ['Hóa Khoa'],
    cung: ['Tử Tức'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Khi Hóa Khoa cùng Địa Kiếp tại Tử Tức, con cái đương số biệt
lập, không dễ chia sẻ tâm tư với cha mẹ.`,
  },

  {
    id: 'hoa-khoa-tai-tu-tuc-hoa-ky',
    title: 'Hóa Khoa + Hóa Kỵ tại Tử Tức - Con biệt lập',
    sao: ['Hóa Khoa'],
    cung: ['Tử Tức'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `Khi Hóa Khoa cùng Hóa Kỵ tại Tử Tức, con cái đương số biệt
lập, không dễ chia sẻ tâm tư với cha mẹ.`,
  },

  {
    id: 'hoa-khoa-tai-tu-tuc-thien-hinh',
    title: 'Hóa Khoa + Thiên Hình tại Tử Tức - Con biệt lập',
    sao: ['Hóa Khoa'],
    cung: ['Tử Tức'],
    ketHop: ['Thiên Hình'],
    doUuTien: 70,
    tomTat: `Khi Hóa Khoa cùng Thiên Hình tại Tử Tức, con cái đương số biệt
lập, không dễ chia sẻ tâm tư với cha mẹ.`,
  },

  // ============================================================
  // 16. Hóa Khoa tại Phu Thê
  // ============================================================
  {
    id: 'hoa-khoa-tai-phu-the',
    title: 'Hóa Khoa tại Phu Thê',
    sao: ['Hóa Khoa'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `Khi Hóa Khoa tọa Phu Thê, hôn phối của đương số là người hiểu
chuyện, nhẹ nhàng và trọng tri thức.

Vợ chồng đồng cảm, tôn trọng nhau cả về quan điểm sống lẫn lý tưởng.
Hôn nhân được xây dựng trên nền chia sẻ và đối thoại — đúng câu "thuận
vợ thuận chồng tát biển Đông cũng cạn".

Mặt trái là đương số có xu hướng lý tưởng hóa hôn nhân: kỳ vọng nhiều
nên cũng dễ hụt hẫng. Bạn đời tuy giỏi lý thuyết đạo lý nhưng thiếu
thực tế, thụ động và khô khan trong biểu hiện tình cảm.`,
  },

  {
    id: 'hoa-khoa-tai-phu-the-tam-hoa-khoi-viet',
    title: 'Hóa Khoa + Tam Hóa + Khôi Việt tại Phu Thê - Quý nhân hảo phối',
    sao: ['Hóa Khoa'],
    cung: ['Phu Thê'],
    ketHop: ['Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 73,
    tomTat: `Khi Hóa Khoa cùng đủ Tam Hóa và bộ Khôi Việt tại Phu Thê, bạn
đời đương số là quý nhân hảo phối.`,
  },

  {
    id: 'hoa-khoa-tai-phu-the-hoa-ky',
    title: 'Hóa Khoa + Hóa Kỵ tại Phu Thê - Tranh cãi bất đồng lý tưởng',
    sao: ['Hóa Khoa'],
    cung: ['Phu Thê'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 73,
    tomTat: `Khi Hóa Khoa cùng Hóa Kỵ tại Phu Thê, vợ chồng đương số dễ
tranh cãi do bất đồng lý tưởng từ những điều nhỏ nhặt.`,
  },

  {
    id: 'hoa-khoa-tai-phu-the-dia-khong',
    title: 'Hóa Khoa + Địa Không tại Phu Thê - Tranh cãi bất đồng lý tưởng',
    sao: ['Hóa Khoa'],
    cung: ['Phu Thê'],
    ketHop: ['Địa Không'],
    doUuTien: 73,
    tomTat: `Khi Hóa Khoa cùng Địa Không tại Phu Thê, vợ chồng đương số dễ
tranh cãi do bất đồng lý tưởng từ những điều nhỏ nhặt.`,
  },

  {
    id: 'hoa-khoa-tai-phu-the-dia-kiep',
    title: 'Hóa Khoa + Địa Kiếp tại Phu Thê - Tranh cãi bất đồng lý tưởng',
    sao: ['Hóa Khoa'],
    cung: ['Phu Thê'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 73,
    tomTat: `Khi Hóa Khoa cùng Địa Kiếp tại Phu Thê, vợ chồng đương số dễ
tranh cãi do bất đồng lý tưởng từ những điều nhỏ nhặt.`,
  },

  // ============================================================
  // 17. Hóa Khoa tại Huynh Đệ
  // ============================================================
  {
    id: 'hoa-khoa-tai-huynh-de',
    title: 'Hóa Khoa tại Huynh Đệ',
    sao: ['Hóa Khoa'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Khi Hóa Khoa tọa Huynh Đệ, anh em đương số có tri thức và đức
độ, thương yêu và giúp đỡ nhau trên con đường học vấn cũng như sự
nghiệp, đặc biệt về mặt tinh thần. Gia đình nhỏ giữ nề nếp, anh em cùng
phát triển hài hòa.

Khi Hãm địa, anh em có khoảng cách do khác biệt về trình độ và lý
tưởng, mỗi người một thế giới riêng. Tuy giữ hòa khí song ít gắn bó
thực chất; sự hỗ trợ giữa anh em thường nặng phần lý thuyết hơn là
thực tiễn.`,
  },

  {
    id: 'hoa-khoa-tai-huynh-de-thien-khoi',
    title: 'Hóa Khoa + Thiên Khôi tại Huynh Đệ - Anh em giỏi giang',
    sao: ['Hóa Khoa'],
    cung: ['Huynh Đệ'],
    ketHop: ['Thiên Khôi'],
    doUuTien: 70,
    tomTat: `Khi Hóa Khoa cùng Thiên Khôi tại Huynh Đệ, anh em đương số
giỏi giang, nổi danh học hành và hoạt động trong các lĩnh vực chuyên
môn cao.`,
  },

  {
    id: 'hoa-khoa-tai-huynh-de-thien-viet',
    title: 'Hóa Khoa + Thiên Việt tại Huynh Đệ - Anh em giỏi giang',
    sao: ['Hóa Khoa'],
    cung: ['Huynh Đệ'],
    ketHop: ['Thiên Việt'],
    doUuTien: 70,
    tomTat: `Khi Hóa Khoa cùng Thiên Việt tại Huynh Đệ, anh em đương số
giỏi giang, nổi danh học hành và hoạt động trong các lĩnh vực chuyên
môn cao.`,
  },

  {
    id: 'hoa-khoa-tai-huynh-de-van-xuong',
    title: 'Hóa Khoa + Văn Xương tại Huynh Đệ - Anh em giỏi giang',
    sao: ['Hóa Khoa'],
    cung: ['Huynh Đệ'],
    ketHop: ['Văn Xương'],
    doUuTien: 70,
    tomTat: `Khi Hóa Khoa cùng Văn Xương tại Huynh Đệ, anh em đương số
giỏi giang, nổi danh học hành và hoạt động trong các lĩnh vực chuyên
môn cao.`,
  },

  {
    id: 'hoa-khoa-tai-huynh-de-van-khuc',
    title: 'Hóa Khoa + Văn Khúc tại Huynh Đệ - Anh em giỏi giang',
    sao: ['Hóa Khoa'],
    cung: ['Huynh Đệ'],
    ketHop: ['Văn Khúc'],
    doUuTien: 70,
    tomTat: `Khi Hóa Khoa cùng Văn Khúc tại Huynh Đệ, anh em đương số giỏi
giang, nổi danh học hành và hoạt động trong các lĩnh vực chuyên môn
cao.`,
  },

  {
    id: 'hoa-khoa-tai-huynh-de-dia-khong',
    title: 'Hóa Khoa + Địa Không tại Huynh Đệ - Hiểu nhầm tranh luận',
    sao: ['Hóa Khoa'],
    cung: ['Huynh Đệ'],
    ketHop: ['Địa Không'],
    doUuTien: 70,
    tomTat: `Khi Hóa Khoa cùng Địa Không tại Huynh Đệ, anh em đương số dễ
hiểu nhầm và tranh luận do bất đồng quan điểm; nhiều mâu thuẫn ngầm
không nói ra.`,
  },

  {
    id: 'hoa-khoa-tai-huynh-de-dia-kiep',
    title: 'Hóa Khoa + Địa Kiếp tại Huynh Đệ - Hiểu nhầm tranh luận',
    sao: ['Hóa Khoa'],
    cung: ['Huynh Đệ'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Khi Hóa Khoa cùng Địa Kiếp tại Huynh Đệ, anh em đương số dễ
hiểu nhầm và tranh luận do bất đồng quan điểm; nhiều mâu thuẫn ngầm
không nói ra.`,
  },

  {
    id: 'hoa-khoa-tai-huynh-de-hoa-ky',
    title: 'Hóa Khoa + Hóa Kỵ tại Huynh Đệ - Hiểu nhầm tranh luận',
    sao: ['Hóa Khoa'],
    cung: ['Huynh Đệ'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `Khi Hóa Khoa cùng Hóa Kỵ tại Huynh Đệ, anh em đương số dễ hiểu
nhầm và tranh luận do bất đồng quan điểm; nhiều mâu thuẫn ngầm không
nói ra.`,
  },

  // ============================================================
  // 18. Hóa Khoa tại Mệnh - cảnh báo "Ngụy quân tử"
  // ============================================================
  {
    id: 'hoa-khoa-tai-menh-nguy-quan-tu',
    title: 'Hóa Khoa tại Mệnh - Cảnh báo "Ngụy quân tử / Tốt mã rẻ cùi"',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    doUuTien: 70,
    tomTat: `Hóa Khoa giống như một tấm áo khoác bao bọc bên ngoài, đôi khi
khiến đương số quá chú trọng hình thức hoặc theo đuổi sự hoàn hảo về
tri thức. Nếu không tu tập tâm hồn song song, đương số dễ rơi vào trạng
thái tự mãn với kiến thức của chính mình.`,
  },

  {
    id: 'hoa-khoa-tai-menh-nguy-quan-tu-sat-tinh',
    title: 'Hóa Khoa + Sát tinh tại Mệnh - Ngụy quân tử',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 65,
    tomTat: `Khi Hóa Khoa gặp nhiều sát tinh tại Mệnh, sao này biến tướng
thành **ngụy quân tử** — đương số dùng học thức để che đậy mưu mô bên
trong, đúng hình tượng Nhạc Bất Quần.`,
  },

  {
    id: 'hoa-khoa-tai-menh-nguy-quan-tu-dia-khong',
    title: 'Hóa Khoa + Địa Không tại Mệnh - Thùng rỗng kêu to',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Địa Không'],
    doUuTien: 65,
    tomTat: `Khi Hóa Khoa cùng Địa Không tại Mệnh, đương số rơi vào cảnh
"thùng rỗng kêu to" — chỉ có vỏ bên ngoài mà bên trong không có gì,
kiểu "tốt mã rẻ cùi".`,
  },

  {
    id: 'hoa-khoa-tai-menh-nguy-quan-tu-dia-kiep',
    title: 'Hóa Khoa + Địa Kiếp tại Mệnh - Thùng rỗng kêu to',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 65,
    tomTat: `Khi Hóa Khoa cùng Địa Kiếp tại Mệnh, đương số rơi vào cảnh
"thùng rỗng kêu to" — chỉ có vỏ bên ngoài mà bên trong không có gì,
kiểu "tốt mã rẻ cùi".`,
  },

  {
    id: 'hoa-khoa-tai-menh-nguy-quan-tu-kinh-duong',
    title: 'Hóa Khoa + Kình Dương tại Mệnh - Cạnh tranh áp lực',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Kình Dương'],
    doUuTien: 65,
    tomTat: `Khi Hóa Khoa cùng Kình Dương tại Mệnh, danh tiếng đương số
luôn đi đôi với cạnh tranh, áp lực và thị phi; quanh đương số luôn có
thế lực chống lại hoặc tìm cách kéo xuống.`,
  },

  {
    id: 'hoa-khoa-tai-menh-nguy-quan-tu-da-la',
    title: 'Hóa Khoa + Đà La tại Mệnh - Cạnh tranh áp lực',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Đà La'],
    doUuTien: 65,
    tomTat: `Khi Hóa Khoa cùng Đà La tại Mệnh, danh tiếng đương số luôn đi
đôi với cạnh tranh, áp lực và thị phi; quanh đương số luôn có thế lực
chống lại hoặc tìm cách kéo xuống.`,
  },

  {
    id: 'hoa-khoa-tai-menh-nguy-quan-tu-hoa-tinh',
    title: 'Hóa Khoa + Hỏa Tinh tại Mệnh - Lên nhanh để lỗ hổng',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Hỏa Tinh'],
    doUuTien: 65,
    tomTat: `Khi Hóa Khoa cùng Hỏa Tinh tại Mệnh, danh tiếng và nền tảng
đương số lên quá nhanh, để lại những lỗ hổng lớn khó xử lý kịp.`,
  },

  {
    id: 'hoa-khoa-tai-menh-nguy-quan-tu-linh-tinh',
    title: 'Hóa Khoa + Linh Tinh tại Mệnh - Lên nhanh để lỗ hổng',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Linh Tinh'],
    doUuTien: 65,
    tomTat: `Khi Hóa Khoa cùng Linh Tinh tại Mệnh, danh tiếng và nền tảng
đương số lên quá nhanh, để lại những lỗ hổng lớn khó xử lý kịp.`,
  },

  // ============================================================
  // 19. Hóa Khoa tại Mệnh - hôn nhân & sức khỏe & tài lộc
  // ============================================================
  {
    id: 'hoa-khoa-tai-menh-hon-nhan-tai-loc',
    title: 'Hóa Khoa tại Mệnh - Hôn nhân, sức khỏe & tài lộc',
    sao: ['Hóa Khoa'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `Đương số có Hóa Khoa cư Mệnh có những đặc trưng riêng về hôn
nhân, sức khỏe và tài lộc.

Về hôn nhân, mối quan hệ vợ chồng văn minh, tôn trọng nhau; người hôn
phối có học thức, gia giáo, đúng câu "xứng đôi vừa lứa" và rất lễ độ
tinh tế. Khi mâu thuẫn, đôi bên thường ngồi xuống phân tích đúng sai
thay vì cãi vã. Tuy nhiên, đôi khi quá lý trí khiến mối quan hệ thiếu
nồng cháy và lãng mạn.

Về sức khỏe, đương số biết tự chăm sóc bản thân dựa trên kiến thức y
khoa và lối sống điều độ. Khi gặp bệnh tật, đương số tìm được thầy giỏi
thuốc hay, đi theo phương pháp chữa trị khoa học.

Về tài lộc, Hóa Khoa không phải tài tinh trực tiếp như Hóa Lộc — đây là
chìa khóa mở kho tàng vật chất qua chất xám. Đương số kiếm tiền bằng
kiến thức, bằng cấp và uy tín chuyên môn; tài lộc bền vững vì xây trên
năng lực thực tế chứ không do may mắn hay đầu cơ. Nhờ thanh bạch và
minh bạch, đương số được tin tưởng giao trọng trách tiền bạc.`,
  },

  // ============================================================
  // 20. Lời khuyên cho người Hóa Khoa cư Mệnh
  // ============================================================
  {
    id: 'hoa-khoa-loi-khuyen',
    title: 'Hóa Khoa - Lời khuyên',
    sao: ['Hóa Khoa'],
    doUuTien: 40,
    tomTat: `Lời khuyên dành cho đương số có Hóa Khoa cư Mệnh:

Đừng để học thức biến mình thành "mọt sách khô khan" hoặc "kẻ kiêu ngạo
về tri thức". Trí tuệ thực sự không nằm ở bằng cấp hay hiểu biết, mà ở
cách dùng kiến thức để mang lại giá trị cho cuộc đời.

Đương số hãy dùng phẩm chất Đệ Nhất Giải Thần để thấu hiểu và bao dung
cho những người kém may mắn về nhận thức.

Khi đương số dùng trí tuệ để phụng sự thay vì phô diễn, tấm áo giáp Hóa
Khoa sẽ rực rỡ hơn:

- Vượt qua mọi bão giông cuộc đời
- Để lại danh thơm cho hậu thế
- Càng về hậu vận càng hưởng nhiều phúc lộc, danh tiếng lan xa

Đặc trưng của đương số có Hóa Khoa là không cần bon chen tranh đoạt mà
vẫn có chỗ đứng vững vàng nhờ uy tín, học thức và sự tin cậy. Thành
công có thể đến chậm nhưng bền vững và ít sóng gió.`,
  },
];
