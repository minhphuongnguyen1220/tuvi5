import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THIÊN VIỆT - Lục Cát Tinh, Quý Tinh
 *
 * Phần chung của cặp Khôi Việt (vị trí miếu hãm, "Khôi Việt thủ Mệnh",
 * "Song Quý Nhân") đã viết tại file thien-khoi.ts với tag cả 2 sao.
 * File này chỉ viết phần RIÊNG của Thiên Việt + 11 cung.
 */
export const luanGiai_ThienViet: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung của sao Thiên Việt
  // ============================================================
  {
    id: 'thien-viet-tinh-chat-chung',
    title: 'Thiên Việt - Đặc tính chung',
    sao: ['Thiên Việt'],
    doUuTien: 30,
    tomTat: `**Thiên Việt** còn có tên gọi khác là Âm Quý Nhân, thuộc bộ Lục Cát
Tinh, Nam Đẩu Tinh, ngũ hành Hỏa (Âm Hỏa đới Mộc). Hóa khí của sao này là Quý
Tinh, chủ về khoa giáp và quyền tước.

Cùng với Thiên Khôi, Thiên Việt hợp thành bộ Khôi Việt — còn gọi là Thiên Ất
Quý Nhân — biểu tượng cho may mắn, học hành thành đạt và sự che chở của quý
nhân trong đời đương số.

So với Thiên Khôi, Thiên Việt có nhiều điểm khác biệt rõ rệt: Khôi mềm dẻo
thiên về tình cảm, còn Việt nghiêng về lý trí, cứng rắn và nguyên tắc. Khôi
đại diện cho đầu, Việt đại diện cho vai. Khôi tượng trưng cho văn bằng giấy
khen, Việt tượng trưng cho bút nghiên. Xét về tài năng và quyền uy, Khôi nhỉnh
hơn Việt một bậc.`,

    chiTiet: `Về vận trình của đương số:

- Sự nghiệp: việc học hành hanh thông, dễ đỗ đạt; công việc thuận lợi và thăng
  tiến nhanh nhờ quý nhân nâng đỡ. Khi sao đóng ở vị trí đẹp, chủ mệnh có thể
  giữ chức vụ cao trong xã hội.
- Duyên vận: người hôn phối xuất thân cao quý, đoan chính, sự nghiệp vững
  vàng. Khi hội nhiều sao sáng, hôn nhân của đương số viên mãn.
- Tài lộc: chủ mệnh có duyên với tiền bạc, dễ được người chức quyền nâng đỡ.
  Có thêm Lộc Tồn, Tả Phù, Hữu Bật hoặc Hóa Quyền thì tài lộc càng vượng.

Lưu ý: các nguyên tắc chung của cặp Khôi Việt — vị trí miếu hãm, không an
Thìn Tuất, nguyên tắc Tuần Triệt đảo ngược, cách "Ư gia quốc vi nhân trưởng",
"Song Quý Nhân" — đã được viết tại sao Thiên Khôi.`,
  },

  // ============================================================
  // 2. Bộ sao tốt riêng của Thiên Việt
  // ============================================================
  {
    id: 'thien-viet-bo-sao-tot-xuong-khuc-quang-quy',
    title: 'Thiên Việt + Xương Khúc + Quang Quý - Văn bằng cao nhất',
    sao: ['Thiên Việt'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Ân Quang', 'Thiên Quý'],
    doUuTien: 50,
    tomTat: `Khi Thiên Việt gặp Văn Xương, Văn Khúc, Ân Quang và Thiên Quý, đương
số thi đỗ những văn bằng cao nhất. Nếu cách "Tọa Khôi hướng Việt" thì chủ mệnh
đỗ cao ngay khi tuổi còn trẻ.`,
  },

  {
    id: 'thien-viet-bo-sao-tot-nhat-nguyet',
    title: 'Thiên Việt + Nhật Nguyệt hãm - Phục hồi sức sáng',
    sao: ['Thiên Việt'],
    ketHop: ['Thái Dương', 'Thái Âm'],
    doUuTien: 50,
    tomTat: `Khi Thiên Việt gặp Thái Dương, Thái Âm hãm địa, sao này phục hồi sức
sáng cho cặp Nhật Nguyệt — đây là cách cứu giải quý cho đương số.`,
  },

  {
    id: 'thien-viet-bo-sao-tot-hoa-khoa',
    title: 'Thiên Việt + Hóa Khoa / Thai Phụ / Phong Cáo - Quý cách',
    sao: ['Thiên Việt'],
    ketHop: ['Hóa Khoa'],
    doUuTien: 50,
    tomTat: `Khi Thiên Việt đi cùng Hóa Khoa, Thai Phụ hoặc Phong Cáo, đương số
được quý cách.`,
  },

  {
    id: 'thien-viet-bo-sao-tot-thai-phu',
    title: 'Thiên Việt + Thai Phụ - Quý cách',
    sao: ['Thiên Việt'],
    ketHop: ['Thai Phụ'],
    doUuTien: 50,
    tomTat: `Khi Thiên Việt đi cùng Thai Phụ, đương số được quý cách.`,
  },

  {
    id: 'thien-viet-bo-sao-tot-phong-cao',
    title: 'Thiên Việt + Phong Cáo - Quý cách',
    sao: ['Thiên Việt'],
    ketHop: ['Phong Cáo'],
    doUuTien: 50,
    tomTat: `Khi Thiên Việt đi cùng Phong Cáo, đương số được quý cách.`,
  },

  {
    id: 'thien-viet-bo-sao-tot-da-ky',
    title: 'Thiên Việt + Đà Kỵ - Kẻ sĩ ẩn dật',
    sao: ['Thiên Việt'],
    ketHop: ['Đà La', 'Hóa Kỵ'],
    doUuTien: 50,
    tomTat: `Khi Thiên Việt gặp Đà La và Hóa Kỵ, đương số mang dáng dấp "kẻ sĩ
ẩn dật" — có tài nhưng ẩn mình, không được trọng dụng.`,
  },

  // ============================================================
  // 3. Thiên Việt tại Mệnh
  // ============================================================
  {
    id: 'thien-viet-tai-menh',
    title: 'Thiên Việt tại Mệnh',
    sao: ['Thiên Việt'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Khi **Thiên Việt** cư Mệnh — Âm Quý Nhân — đương số mang vận may và
được sự che chở của quý nhân trong cuộc đời. Chủ mệnh học hành giỏi giang, trí
tuệ sắc sảo, biết nắm bắt cơ hội và sở hữu tố chất lãnh đạo cùng khả năng điều
hành tập thể.

Khác với Thiên Khôi, Thiên Việt nổi bật ở lý trí, sự cứng rắn và nguyên tắc.

Về công danh, đương số mở ra nhiều cơ may thuận lợi: thi cử đỗ đạt, công việc
hanh thông, được hưởng lợi từ chính sách hay thời thế. Trong sự nghiệp, chủ
mệnh thường gặp những thời cơ vàng đáng quý.`,
  },

  {
    id: 'thien-viet-tai-menh-sat-tinh',
    title: 'Thiên Việt tại Mệnh + Lục Sát / Hóa Kỵ - Tai họa bất ngờ',
    sao: ['Thiên Việt'],
    cung: ['Mệnh'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 75,
    tomTat: `Khi Thiên Việt gặp Lục Sát tại Mệnh, đương số bị cảnh báo về tai họa
bất ngờ — thương tích vùng đầu, vai, thần kinh, hoặc các sự cố như điện giật,
vũ khí, tai nạn xe cộ.`,
  },

  {
    id: 'thien-viet-tai-menh-hoa-ky',
    title: 'Thiên Việt tại Mệnh + Hóa Kỵ - Tai họa bất ngờ',
    sao: ['Thiên Việt'],
    cung: ['Mệnh'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 75,
    tomTat: `Khi Thiên Việt gặp Hóa Kỵ tại Mệnh, đương số bị cảnh báo về tai họa
bất ngờ — thương tích vùng đầu, vai, thần kinh.`,
  },

  {
    id: 'thien-viet-tai-menh-thien-hinh',
    title: 'Thiên Việt tại Mệnh + Thiên Hình - Tai họa bất ngờ',
    sao: ['Thiên Việt'],
    cung: ['Mệnh'],
    ketHop: ['Thiên Hình'],
    doUuTien: 75,
    tomTat: `Khi Thiên Việt gặp Thiên Hình tại Mệnh, đương số bị cảnh báo về tai
họa bất ngờ — thương tích vùng đầu, vai, thần kinh.`,
  },

  // ============================================================
  // 4. Thiên Việt tại Phụ Mẫu
  // ============================================================
  {
    id: 'thien-viet-tai-phu-mau',
    title: 'Thiên Việt tại Phụ Mẫu',
    sao: ['Thiên Việt'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Khi Thiên Việt cư Phụ Mẫu đi cùng Thiên Khôi, Thai Phụ, Phong Cáo
hoặc Hóa Khoa, cha mẹ đương số thuộc tầng lớp tri thức, có chỗ đứng trong xã
hội; chủ mệnh dễ là con trưởng hoặc trụ cột trong gia đình.

Công danh của cha mẹ ít trắc trở, được quý nhân nâng đỡ, sự nghiệp thăng tiến
thuận lợi.`,
  },

  {
    id: 'thien-viet-tai-phu-mau-cat-tinh',
    title: 'Thiên Việt tại Phụ Mẫu + Lục Cát - Cha mẹ danh vị cao',
    sao: ['Thiên Việt'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 70,
    tomTat: `Khi Thiên Việt hội đủ bộ Lục Cát tại Phụ Mẫu, cha mẹ đương số có
danh vị cao trong xã hội. Con cái nhờ vậy hưởng phúc và có điều kiện phát
triển.`,
  },

  // ============================================================
  // 5. Thiên Việt tại Phúc Đức
  // ============================================================
  {
    id: 'thien-viet-tai-phuc-duc',
    title: 'Thiên Việt tại Phúc Đức',
    sao: ['Thiên Việt'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `Khi Thiên Việt cư Phúc Đức, dòng tộc của đương số có nhiều người
thông minh, đỗ đạt thành danh, mang vinh quang về cho tổ tiên.`,
  },

  {
    id: 'thien-viet-tai-phuc-duc-khoi',
    title: 'Thiên Việt tại Phúc Đức + Thiên Khôi - Phúc trời chở che',
    sao: ['Thiên Việt'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Khôi'],
    doUuTien: 73,
    tomTat: `Khi Thiên Việt gặp Thiên Khôi tại Phúc Đức, phúc phần của đương số
như được trời đất chở che: dòng họ đông người trường thọ, nề nếp tốt đẹp truyền
đời.`,
  },

  {
    id: 'thien-viet-tai-phuc-duc-hoa-khoa',
    title: 'Thiên Việt tại Phúc Đức + Hóa Khoa',
    sao: ['Thiên Việt'],
    cung: ['Phúc Đức'],
    ketHop: ['Hóa Khoa'],
    doUuTien: 73,
    tomTat: `Khi Thiên Việt gặp Hóa Khoa tại Phúc Đức, phúc phần của đương số
như được trời đất chở che: dòng họ đông người trường thọ, nề nếp tốt đẹp truyền
đời.`,
  },

  {
    id: 'thien-viet-tai-phuc-duc-quan-phuc',
    title: 'Thiên Việt tại Phúc Đức + Thiên Quan + Thiên Phúc',
    sao: ['Thiên Việt'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Quan', 'Thiên Phúc'],
    doUuTien: 73,
    tomTat: `Khi Thiên Việt gặp Thiên Quan và Thiên Phúc tại Phúc Đức, phúc phần
của đương số như được trời đất chở che: dòng họ đông người trường thọ, nề nếp
tốt đẹp truyền đời.`,
  },

  {
    id: 'thien-viet-tai-phuc-duc-quang-quy',
    title: 'Thiên Việt tại Phúc Đức + Ân Quang + Thiên Quý',
    sao: ['Thiên Việt'],
    cung: ['Phúc Đức'],
    ketHop: ['Ân Quang', 'Thiên Quý'],
    doUuTien: 73,
    tomTat: `Khi Thiên Việt gặp Ân Quang và Thiên Quý tại Phúc Đức, phúc phần
của đương số như được trời đất chở che: dòng họ đông người trường thọ, nề nếp
tốt đẹp truyền đời.`,
  },

  {
    id: 'thien-viet-tai-phuc-duc-hoa-linh',
    title: 'Thiên Việt tại Phúc Đức + Hỏa Linh - Đoản mệnh tai nạn',
    sao: ['Thiên Việt'],
    cung: ['Phúc Đức'],
    ketHop: ['Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 73,
    tomTat: `Khi Thiên Việt gặp Hỏa Tinh và Linh Tinh tại Phúc Đức, trong họ của
đương số dễ có người đoản mệnh hoặc gặp tai nạn bất ngờ; phúc khí khó giữ bền
lâu.`,
  },

  {
    id: 'thien-viet-tai-phuc-duc-thien-hinh',
    title: 'Thiên Việt tại Phúc Đức + Thiên Hình',
    sao: ['Thiên Việt'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Hình'],
    doUuTien: 73,
    tomTat: `Khi Thiên Việt gặp Thiên Hình tại Phúc Đức, trong họ của đương số
dễ có người đoản mệnh hoặc gặp tai nạn bất ngờ; phúc khí khó giữ bền lâu.`,
  },

  {
    id: 'thien-viet-tai-phuc-duc-hoa-ky',
    title: 'Thiên Việt tại Phúc Đức + Hóa Kỵ',
    sao: ['Thiên Việt'],
    cung: ['Phúc Đức'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 73,
    tomTat: `Khi Thiên Việt gặp Hóa Kỵ tại Phúc Đức, trong họ của đương số dễ
có người đoản mệnh hoặc gặp tai nạn bất ngờ; phúc khí khó giữ bền lâu.`,
  },

  // ============================================================
  // 6. Thiên Việt tại Điền Trạch
  // ============================================================
  {
    id: 'thien-viet-tai-dien-trach',
    title: 'Thiên Việt tại Điền Trạch',
    sao: ['Thiên Việt'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Khi Thiên Việt hội Thiên Khôi cùng cát tinh tại Điền Trạch, chuyện
nhà cửa đất đai của đương số thuận lợi: chủ mệnh dựng nên cơ ngơi vững chắc,
an cư rồi lạc nghiệp.

Nhà ở khang trang sáng sủa, ở vị trí cao ráo — thường là đầu ngõ, đầu đường
hoặc chung cư cao tầng. Gia đình đương số giữ được nề nếp, trọng văn hóa nên
được bà con láng giềng tin tưởng, giao phó trách nhiệm cộng đồng.`,
  },

  {
    id: 'thien-viet-tai-dien-trach-hoa-linh',
    title: 'Thiên Việt tại Điền Trạch + Hỏa Linh - Cháy nổ',
    sao: ['Thiên Việt'],
    cung: ['Điền Trạch'],
    ketHop: ['Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 70,
    tomTat: `Khi Thiên Việt gặp Hỏa Tinh và Linh Tinh tại Điền Trạch, đương số
cần đề phòng cháy nổ và chập điện trong nhà.`,
  },

  // ============================================================
  // 7. Thiên Việt tại Quan Lộc
  // ============================================================
  {
    id: 'thien-viet-tai-quan-loc',
    title: 'Thiên Việt tại Quan Lộc',
    sao: ['Thiên Việt'],
    cung: ['Quan Lộc'],
    doUuTien: 80,
    tomTat: `Khi Thiên Việt cư Quan Lộc, công danh của đương số rạng rỡ, sự
nghiệp như "một bước lên mây": được người trên tin tưởng, cấp dưới nể trọng.

Chủ mệnh phát triển trong các ngành công nghệ, cơ điện, y khoa — đặc biệt là
các chuyên khoa đầu, vai, thần kinh.`,
  },

  {
    id: 'thien-viet-tai-quan-loc-ta-huu',
    title: 'Thiên Việt tại Quan Lộc + Tả Phù + Hữu Bật - Chức vụ cao',
    sao: ['Thiên Việt'],
    cung: ['Quan Lộc'],
    ketHop: ['Tả Phù', 'Hữu Bật'],
    doUuTien: 75,
    tomTat: `Khi Thiên Việt gặp Tả Phù và Hữu Bật tại Quan Lộc, đương số đảm
nhiệm chức vụ cao, quản lý cả tập thể.`,
  },

  {
    id: 'thien-viet-tai-quan-loc-thien-khoi',
    title: 'Thiên Việt tại Quan Lộc + Thiên Khôi - Danh tiếng vang xa',
    sao: ['Thiên Việt'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Khôi'],
    doUuTien: 75,
    tomTat: `Khi Thiên Việt gặp Thiên Khôi tại Quan Lộc, danh tiếng đương số
vang xa, càng về hậu vận càng bền vững.`,
  },

  {
    id: 'thien-viet-tai-quan-loc-xuong-khuc',
    title: 'Thiên Việt tại Quan Lộc + Văn Xương + Văn Khúc',
    sao: ['Thiên Việt'],
    cung: ['Quan Lộc'],
    ketHop: ['Văn Xương', 'Văn Khúc'],
    doUuTien: 75,
    tomTat: `Khi Thiên Việt gặp Văn Xương và Văn Khúc tại Quan Lộc, danh tiếng
đương số vang xa, càng về hậu vận càng bền vững.`,
  },

  {
    id: 'thien-viet-tai-quan-loc-tau-thu',
    title: 'Thiên Việt tại Quan Lộc + Tấu Thư',
    sao: ['Thiên Việt'],
    cung: ['Quan Lộc'],
    ketHop: ['Tấu Thư'],
    doUuTien: 75,
    tomTat: `Khi Thiên Việt gặp Tấu Thư tại Quan Lộc, danh tiếng đương số vang
xa, càng về hậu vận càng bền vững.`,
  },

  // ============================================================
  // 8. Thiên Việt tại Nô Bộc
  // ============================================================
  {
    id: 'thien-viet-tai-no-boc',
    title: 'Thiên Việt tại Nô Bộc',
    sao: ['Thiên Việt'],
    cung: ['Nô Bộc'],
    doUuTien: 78,
    tomTat: `Khi Thiên Việt cư Nô Bộc, bạn bè, cấp dưới và học trò của đương số
đều giỏi giang, trong đó có người trở thành cánh tay phải đắc lực. Chủ mệnh
cũng dễ gặp được quý nhân quyền thế giúp đỡ.`,
  },
  {
    id: 'thien-viet-tai-no-boc-luc-cat',
    title: 'Thiên Việt tại Nô Bộc + Lục Cát - Mở cơ hội lớn',
    sao: ['Thiên Việt'],
    cung: ['Nô Bộc'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 73,
    tomTat: `Khi Thiên Việt hội đủ bộ Lục Cát — Tả Phù, Hữu Bật, Văn Xương, Văn
Khúc, Thiên Khôi, Thiên Việt — tại Nô Bộc, đương số nên kết giao với người học
rộng, có địa vị để mở ra cơ hội lớn cho mình.`,
  },
  {
    id: 'thien-viet-tai-no-boc-tu-sat',
    title: 'Thiên Việt tại Nô Bộc + Tứ Sát - Tránh người quyền cao',
    sao: ['Thiên Việt'],
    cung: ['Nô Bộc'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 73,
    tomTat: `Khi Thiên Việt gặp Tứ Sát — Kình Dương, Đà La, Hỏa Tinh, Linh Tinh
— tại Nô Bộc, đương số nên tránh gần người quyền cao chức trọng kẻo tự rước
họa vào thân.`,
  },

  // ============================================================
  // 9. Thiên Việt tại Thiên Di
  // ============================================================
  {
    id: 'thien-viet-tai-thien-di',
    title: 'Thiên Việt tại Thiên Di',
    sao: ['Thiên Việt'],
    cung: ['Thiên Di'],
    doUuTien: 78,
    tomTat: `Khi Thiên Việt cư Thiên Di, đương số gặp vận may mỗi khi ra ngoài
xã hội. Chủ mệnh hay gặp quý nhân dẫn đường chỉ lối, kết giao được những người
tài giỏi quyền thế. Con đường tha hương hay xuất ngoại mang lại nhiều thành
tựu và danh tiếng.

Đây là vị trí cát lợi: sự nghiệp đương số lên như diều gặp gió nhờ ngoại duyên
và quan hệ xã hội.`,
  },

  // ============================================================
  // 10. Thiên Việt tại Tật Ách
  // ============================================================
  {
    id: 'thien-viet-tai-tat-ach',
    title: 'Thiên Việt tại Tật Ách',
    sao: ['Thiên Việt'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `Khi Thiên Việt cư Tật Ách, sao này giúp đương số giảm nhẹ tai ương
và những bệnh tật nhỏ trong đời.`,
  },
  {
    id: 'thien-viet-tai-tat-ach-hoa-linh-hinh-rieu',
    title: 'Thiên Việt tại Tật Ách + Hỏa/Linh/Hình/Riêu - Tai nạn đầu vai',
    sao: ['Thiên Việt'],
    cung: ['Tật Ách'],
    ketHop: ['Hỏa Tinh', 'Linh Tinh', 'Thiên Hình', 'Thiên Riêu'],
    doUuTien: 73,
    tomTat: `Khi Thiên Việt gặp Hỏa Tinh, Linh Tinh, Thiên Hình hoặc Thiên Riêu
tại Tật Ách, đương số đối mặt nguy cơ tai nạn về đầu, vai, hoặc các sự cố như
dao kiếm, điện giật, xe cộ.`,
  },
  {
    id: 'thien-viet-tai-tat-ach-thien-quan-phuc',
    title: 'Thiên Việt tại Tật Ách + Thiên Quan/Phúc - Tu tâm hóa hung',
    sao: ['Thiên Việt'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Quan', 'Thiên Phúc'],
    doUuTien: 73,
    tomTat: `Khi Thiên Việt gặp Thiên Quan và Thiên Phúc tại Tật Ách, nếu đương
số biết tu tâm hướng thiện thì hạn nặng hóa nhẹ, được quý nhân hỗ trợ; mắc
bệnh thì gặp thầy giỏi thuốc hay.`,
  },

  // ============================================================
  // 11. Thiên Việt tại Tài Bạch
  // ============================================================
  {
    id: 'thien-viet-tai-tai-bach',
    title: 'Thiên Việt tại Tài Bạch',
    sao: ['Thiên Việt'],
    cung: ['Tài Bạch'],
    doUuTien: 78,
    tomTat: `Khi Thiên Việt cư Tài Bạch, đương số mở ra mối duyên lớn với tiền
tài. Chủ mệnh thường được quý nhân chỉ lối, nâng đỡ trong kinh doanh và quản
lý tài chính.

Nhờ học vấn, danh tiếng và uy tín xã hội, đương số mở rộng được thu nhập, tài
chính ổn định và thịnh vượng.`,
  },
  {
    id: 'thien-viet-tai-tai-bach-loc-ton-ta-huu-quyen',
    title: 'Thiên Việt tại Tài Bạch + Lộc Tồn/Tả Hữu/Hóa Quyền - Tài lộc dồi dào',
    sao: ['Thiên Việt'],
    cung: ['Tài Bạch'],
    ketHop: ['Lộc Tồn', 'Tả Phù', 'Hữu Bật', 'Hóa Quyền'],
    doUuTien: 73,
    tomTat: `Khi Thiên Việt gặp Lộc Tồn, Tả Phù, Hữu Bật hoặc Hóa Quyền tại Tài
Bạch, tài lộc của đương số dồi dào, càng làm càng vượng.`,
  },

  // ============================================================
  // 12. Thiên Việt tại Tử Tức
  // ============================================================
  {
    id: 'thien-viet-tai-tu-tuc',
    title: 'Thiên Việt tại Tử Tức',
    sao: ['Thiên Việt'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Khi Thiên Việt cư Tử Tức, con sinh ra của đương số thông tuệ, hiếu
thuận, dễ làm nên nghiệp lớn và trở thành niềm tự hào của gia đình.`,
  },
  {
    id: 'thien-viet-tai-tu-tuc-luc-cat',
    title: 'Thiên Việt tại Tử Tức + Lục Cát - Con quý hiển',
    sao: ['Thiên Việt'],
    cung: ['Tử Tức'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 70,
    tomTat: `Khi Thiên Việt hội đủ bộ Lục Cát — Tả Phù, Hữu Bật, Văn Xương, Văn
Khúc, Thiên Khôi, Thiên Việt — tại Tử Tức, con cái của đương số quý hiển, có
chức quyền; cha mẹ rạng nhà rạng cửa nhờ con.`,
  },
  {
    id: 'thien-viet-tai-tu-tuc-hinh-hoa-linh',
    title: 'Thiên Việt tại Tử Tức + Hình/Hỏa/Linh - Sinh nở khó',
    sao: ['Thiên Việt'],
    cung: ['Tử Tức'],
    ketHop: ['Thiên Hình', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 70,
    tomTat: `Khi Thiên Việt gặp Thiên Hình, Hỏa Tinh hoặc Linh Tinh tại Tử Tức,
quá trình sinh nở của đương số khó khăn; con dễ gặp tai nạn nguy hiểm khiến
cha mẹ phải bận lòng.`,
  },

  // ============================================================
  // 13. Thiên Việt tại Phu Thê
  // ============================================================
  {
    id: 'thien-viet-tai-phu-the',
    title: 'Thiên Việt tại Phu Thê',
    sao: ['Thiên Việt'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `Khi Thiên Việt cư Phu Thê, người bạn đời của đương số xuất thân
danh giá, đoan chính, có sự nghiệp riêng vững vàng.

Vợ chồng đương số hợp cảnh trai tài gái sắc, không chỉ giỏi mà còn có địa vị
khiến người khác ngưỡng mộ.`,
  },
  {
    id: 'thien-viet-tai-phu-the-bo-quy',
    title: 'Thiên Việt tại Phu Thê + Phủ/Nhật Nguyệt/Lộc Quyền/Quang Quý - Hôn nhân viên mãn',
    sao: ['Thiên Việt'],
    cung: ['Phu Thê'],
    ketHop: ['Thiên Phủ', 'Thái Dương', 'Thái Âm', 'Hóa Lộc', 'Hóa Quyền', 'Thanh Long', 'Ân Quang', 'Thiên Quý'],
    doUuTien: 73,
    tomTat: `Khi Thiên Việt hội Thiên Phủ, Thái Dương - Thái Âm sáng, Hóa Lộc,
Hóa Quyền, Thanh Long, Ân Quang hay Thiên Quý tại Phu Thê, hôn nhân của đương
số viên mãn; vợ chồng thuận hòa, gắn bó keo sơn đến răng long đầu bạc.`,
  },

  // ============================================================
  // 14. Thiên Việt tại Huynh Đệ
  // ============================================================
  {
    id: 'thien-viet-tai-huynh-de',
    title: 'Thiên Việt tại Huynh Đệ',
    sao: ['Thiên Việt'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Khi Thiên Việt cư Huynh Đệ, anh chị em của đương số thông tuệ giỏi
giang, có chí tiến thủ, tạo dựng được sự nghiệp vững vàng.

Quy tắc vai vế giữa hai sao Khôi Việt khá rõ ràng:

- Thiên Khôi tại Huynh Đệ: trên đương số thường có 3 anh chị
- Thiên Việt tại Huynh Đệ: dưới đương số thường có 3 người em

Anh chị em của chủ mệnh vừa tài ba vừa biết đùm bọc nương tựa lẫn nhau, tình
cảm gia đình gắn bó bền vững.`,
  },
];
