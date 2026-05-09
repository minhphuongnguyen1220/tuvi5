import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO VĂN KHÚC - Lục Cát Tinh, Văn Tinh + Phúc Tinh
 */
export const luanGiai_VanKhuc: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung của sao Văn Khúc
  // ============================================================
  {
    id: 'van-khuc-tinh-chat-chung',
    title: 'Văn Khúc - Đặc tính chung',
    sao: ['Văn Khúc'],
    doUuTien: 30,
    tomTat: `**Văn Khúc** thuộc bộ Lục Cát Tinh, vừa là **Văn tinh** vừa là Phúc
tinh, ngũ hành Thủy. Sao này chủ về học vấn, khoa bảng và tài năng nghệ thuật.

Vị trí miếu hãm:

- Đắc địa: Thìn, Tuất, Sửu, Mùi, Tỵ, Hợi
- Hãm địa: Tý, Dần, Ngọ, Thân

Vì là hành Thủy, Văn Khúc mang sẵn tính đào hoa — khác với Văn Xương hành Kim:
cảm xúc của đương số có Văn Khúc dễ thay đổi, có khuynh hướng yêu đương phong
lưu.`,

    chiTiet: `So sánh **Văn Xương** và **Văn Khúc** — hai văn tinh thường đi cùng
nhau nhưng bản chất khác biệt:

- Văn Xương ngũ hành Kim, mang tính chính trực và học vấn, năng khiếu thiên về
  văn chương cùng hùng biện
- Văn Khúc ngũ hành Thủy, mang tính đa cảm và đào hoa, năng khiếu thiên về
  nghệ thuật và thủ công

Cả hai cùng đắc địa tại Thìn, Tuất, Sửu, Mùi, Tỵ, Hợi và cùng hãm tại Tý, Dần,
Ngọ, Thân — vị trí miếu hãm trùng nhau nhưng phong cách thể hiện khác hẳn: Văn
Xương ngay thẳng chính trực, còn Văn Khúc đa tình, đào hoa và dễ lay động trước
cái đẹp.

Khi Văn Xương đi cùng Văn Khúc thành cặp **Xương Khúc**, đó là biểu trưng cho
tài học vấn, văn chương và nghệ thuật. Cách Xương Khúc giáp Mệnh hoặc đồng cung
rất quý: đương số thông minh tài năng, thi cử đỗ đạt cao.

Về vận trình của đương số có Văn Khúc:

- Sự nghiệp phù hợp văn học, nghệ thuật, thủ công, mỹ nghệ và ngôn ngữ
- Duyên vận có vợ chồng "môn đăng hộ đối", cùng học thức và sống hòa thuận
- Tài lộc đến từ trí tuệ và học vấn; đương số có kiến thức kinh tế áp dụng
  được vào thực tiễn
- Phúc thọ cần lưu ý: dễ mắc bệnh tình ái, nếu Văn Khúc hãm hoặc gặp sát tinh
  có thể vướng bệnh nan y khó chữa`,
  },

  // ============================================================
  // 2. Văn Khúc tại Mệnh
  // ============================================================
  {
    id: 'van-khuc-tai-menh',
    title: 'Văn Khúc tại Mệnh',
    sao: ['Văn Khúc'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Văn Khúc cư Mệnh khiến đương số có vẻ ngoài thanh tú, điển trai,
thanh lịch, mang phong thái thư sinh.

Về tính cách, đương số đam mê đèn sách, cẩn thận, thông minh, có thể "trên
thông thiên văn, dưới tường địa lý" và rất tự giác trong học hành. Tài năng
thiên về văn chương, mỹ thuật, âm nhạc và khiếu ăn nói.

Khi không gặp hung sát tinh, đương số là người thẳng thắn, chính trực, biết
bảo vệ lẽ phải và không lọc lừa.

Tuy nhiên, vì hành Thủy cộng với tính nghệ thuật cao, đương số rất đa cảm, dễ
lay động trước cái đẹp — đào hoa tiềm ẩn, tình cảm dễ thay đổi, có khuynh hướng
yêu đương phong lưu.`,

    chiTiet: `Về tính tình: đương số thông minh, có học thức, hoạt bát, có năng
khiếu sắc bén về văn chương, mỹ thuật, âm nhạc và nhiều lĩnh vực khác.

Về công danh tài lộc, vai trò của trạng thái sao rất rõ rệt:

- Khi **Văn Khúc đắc địa**, bộ sao mang ý nghĩa phú quý, hiển đạt, phúc thọ
  rất có giá trị
- Có thêm Lộc Tồn, tài năng đương số xuất chúng
- Có thêm Vũ Khúc, tài năng kiêm cả văn võ, đương số có uy danh lừng lẫy và
  giàu sang
- Cách giáp Mệnh cũng tốt, song đương số đắc thời nhờ hoàn cảnh bên ngoài
  nhiều hơn là tài năng tự thân

Khi **Văn Khúc hãm địa**, vận đời của đương số trở nên xấu rõ rệt: khốn khổ,
phải bỏ làng lập nghiệp ở xa, có tật hoặc gặp tai họa, có khi yểu tử.`,
  },

  {
    id: 'van-khuc-tai-menh-nu-menh',
    title: 'Văn Khúc tại Mệnh - Nữ mệnh duyên dáng',
    sao: ['Văn Khúc'],
    cung: ['Mệnh'],
    gioiTinh: 'Nữ',
    doUuTien: 75,
    tomTat: `Nữ mệnh có Văn Khúc thủ Mệnh thường duyên dáng, nhan sắc xinh đẹp,
phong thái đoan trang. Đương số đa cảm, lãng mạn và rất dễ lay động trước cái
đẹp.`,
  },

  {
    id: 'van-khuc-menh-ham-nu-sat-tinh',
    title: 'Văn Khúc Hãm + sát tinh tại Mệnh - Nữ giang hồ',
    sao: ['Văn Khúc'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    gioiTinh: 'Nữ',
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 73,
    tomTat: `Nữ mệnh có Văn Khúc **Hãm** lại gặp thêm Kình Dương, Đà La, Hỏa
Tinh, Linh Tinh, Địa Không hoặc Địa Kiếp tại Mệnh, đương số có thể rơi vào số
gái giang hồ, khắc chồng, ti tiện, dâm đãng — cuộc đời thường u buồn vì gia
đạo.`,
  },

  // ============================================================
  // 3. Bộ sao TỐT của Văn Khúc
  // ============================================================
  {
    id: 'van-khuc-bo-sao-tot',
    title: 'Văn Khúc - Bộ sao TỐT',
    sao: ['Văn Khúc'],
    doUuTien: 50,
    tomTat: `Tổng quan các bộ sao tốt của Văn Khúc — chi tiết từng cách cục được
trình bày trong các luận giải phía sau.`,
  },

  {
    id: 'van-khuc-hoa-khoa',
    title: 'Văn Khúc + Hóa Khoa - thi đỗ cao',
    sao: ['Văn Khúc'],
    ketHop: ['Hóa Khoa'],
    doUuTien: 45,
    tomTat: `Khi Văn Khúc hội cùng Hóa Khoa, đương số thi đỗ dễ dàng và đỗ cao,
đạt được văn bằng cao trong học vấn.`,
  },

  {
    id: 'van-khuc-hoa-khoa-khoi-viet',
    title: 'Văn Khúc + Hóa Khoa + Khôi Việt - khoa giáp tột đỉnh',
    sao: ['Văn Khúc'],
    ketHop: ['Hóa Khoa', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 45,
    tomTat: `Khi Văn Khúc hội cùng Hóa Khoa, Thiên Khôi và Thiên Việt, đương số
đắc cách khoa giáp tột đỉnh — thông minh xuất chúng, được trọng dụng đắc thời.`,
  },

  {
    id: 'van-khuc-hoa-khoa-khoi-viet-nhat-nguyet',
    title: 'Văn Khúc + Hóa Khoa + Khôi Việt + Nhật Nguyệt sáng - tầm quốc tế',
    sao: ['Văn Khúc'],
    ketHop: ['Hóa Khoa', 'Thiên Khôi', 'Thiên Việt', 'Thái Dương', 'Thái Âm'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 45,
    tomTat: `Khi Văn Khúc hội cùng Hóa Khoa, Thiên Khôi, Thiên Việt và có Nhật
Nguyệt sáng, tài năng của đương số đạt mức quốc tế — danh tiếng vượt khỏi biên
giới quốc gia.`,
  },

  {
    id: 'van-khuc-thai-duong-sang',
    title: 'Văn Khúc + Thái Dương sáng - lịch duyệt học rộng',
    sao: ['Văn Khúc'],
    ketHop: ['Thái Dương'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 45,
    tomTat: `Khi Văn Khúc gặp Thái Dương sáng (Miếu, Vượng hoặc Đắc), đương số
là người lịch duyệt, học rộng và biết nhiều — kiến thức rộng khắp, ứng đối linh
hoạt.`,
  },

  {
    id: 'van-khuc-thien-luong',
    title: 'Văn Khúc + Thiên Lương - quý hiển uy danh',
    sao: ['Văn Khúc'],
    ketHop: ['Thiên Lương'],
    doUuTien: 45,
    tomTat: `Khi Văn Khúc hội cùng Thiên Lương, đương số quý hiển và có uy danh
lớn trong xã hội.`,
  },

  {
    id: 'van-khuc-thien-co',
    title: 'Văn Khúc + Thiên Cơ - khéo léo thủ công',
    sao: ['Văn Khúc'],
    ketHop: ['Thiên Cơ'],
    doUuTien: 45,
    tomTat: `Khi Văn Khúc hội cùng Thiên Cơ, đương số khéo léo, tinh xảo về thủ
công và có biệt tài về ngôn ngữ.`,
  },

  {
    id: 'van-khuc-vu-khuc-luong-khuc',
    title: 'Văn Khúc + Vũ Khúc - cách "Lưỡng Khúc" văn võ',
    sao: ['Văn Khúc'],
    ketHop: ['Vũ Khúc'],
    doUuTien: 45,
    tomTat: `Khi Văn Khúc hội cùng Vũ Khúc, đương số đắc cách **"Lưỡng Khúc"** —
tài năng văn võ song toàn, tiếng tăm lừng lẫy.`,
  },

  {
    id: 'van-khuc-vu-khuc-ta-huu',
    title: 'Văn Khúc + Vũ Khúc + Tả Phù / Hữu Bật - phú quý song toàn',
    sao: ['Văn Khúc'],
    ketHop: ['Vũ Khúc', 'Tả Phù', 'Hữu Bật'],
    doUuTien: 45,
    tomTat: `Khi Văn Khúc hội cùng Vũ Khúc và Tả Phù hoặc Hữu Bật, đương số phú
quý song toàn, được hiển vinh về đường võ nghiệp.`,
  },

  // ============================================================
  // 4. Bộ sao XẤU của Văn Khúc
  // ============================================================
  {
    id: 'van-khuc-bo-sao-xau',
    title: 'Văn Khúc - Bộ sao XẤU',
    sao: ['Văn Khúc'],
    doUuTien: 50,
    tomTat: `Tổng quan các bộ sao xấu của Văn Khúc — chi tiết từng cách cục được
trình bày trong các luận giải phía sau.`,
  },

  {
    id: 'van-khuc-liem-trinh-suu-mui-mao-dau',
    title: 'Văn Khúc + Liêm Trinh tại Sửu/Mùi/Mão/Dậu - giảm thọ',
    sao: ['Văn Khúc'],
    ketHop: ['Liêm Trinh'],
    chi: ['Sửu', 'Mùi', 'Mão', 'Dậu'],
    doUuTien: 45,
    tomTat: `Khi Văn Khúc hội cùng Liêm Trinh tại các cung Sửu, Mùi, Mão hoặc
Dậu, đương số bị giảm thọ.`,
  },

  {
    id: 'van-khuc-tuan-triet',
    title: 'Văn Khúc + Tuần / Triệt - thi cử lận đận',
    sao: ['Văn Khúc'],
    ketHop: ['Tuần', 'Triệt'],
    doUuTien: 45,
    tomTat: `Khi Văn Khúc bị Tuần hoặc Triệt án ngữ, đương số thi cử lận đận,
dang dở và gián đoạn; công danh chật vật, có thể phải tha phương, vướng tù tội,
thậm chí yểu tử.`,
  },

  {
    id: 'van-khuc-hoa-ky',
    title: 'Văn Khúc + Hóa Kỵ - thi cử lận đận',
    sao: ['Văn Khúc'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 45,
    tomTat: `Khi Văn Khúc hội cùng **Hóa Kỵ**, đương số thi cử lận đận, dang dở
và gián đoạn; công danh chật vật, có thể phải tha phương, vướng tù tội, thậm
chí yểu tử.`,
  },

  {
    id: 'van-khuc-pha-quan',
    title: 'Văn Khúc + Phá Quân đồng cung - thi cử lận đận',
    sao: ['Văn Khúc'],
    ketHop: ['Phá Quân'],
    doUuTien: 45,
    tomTat: `Khi Văn Khúc đồng cung với Phá Quân, đương số thi cử lận đận, dang
dở và gián đoạn; công danh chật vật, có thể phải tha phương, vướng tù tội,
thậm chí yểu tử.`,
  },

  {
    id: 'van-khuc-thien-rieu',
    title: 'Văn Khúc + Thiên Riêu - đào hoa lụy tình',
    sao: ['Văn Khúc'],
    ketHop: ['Thiên Riêu'],
    doUuTien: 45,
    tomTat: `Khi Văn Khúc hội cùng Thiên Riêu, đương số rất lãng mạn và xinh
đẹp, song dễ rơi vào đào hoa quá mức và lụy tình.`,
  },

  // ============================================================
  // 5. Cách Xương Khúc - Văn Xương + Văn Khúc
  // ============================================================
  {
    id: 'van-khuc-cach-xuong-khuc',
    title: 'Cách Xương Khúc - Văn Xương + Văn Khúc',
    sao: ['Văn Khúc', 'Văn Xương'],
    doUuTien: 60,
    tomTat: `Khi **Văn Xương** và Văn Khúc đi cùng nhau — đồng cung, giáp Mệnh
hoặc hội chiếu — đương số đắc cách **Xương Khúc**, biểu trưng cho học vấn và
văn nghệ.

Khi cách Xương Khúc đi với Hóa Khoa cùng Thiên Khôi, Thiên Việt, đương số đạt
khoa giáp tột đỉnh: thông minh xuất chúng, có tài thao lược và được trọng dụng
đắc thời.

Khi đi cùng Vũ Khúc, ta có cách "Lưỡng Khúc" văn võ song toàn — đương số có
quyền uy, quyết đoán đồng thời có trí tuệ, danh tiếng và tài lộc thịnh vượng.

Một điểm đáng lưu ý: dù Nhật Nguyệt hãm địa, Xương Khúc vẫn giúp đương số thành
công sớm nhờ thông minh và chăm chỉ.`,
  },

  {
    id: 'xuong-khuc-nhat-nguyet-sang',
    title: 'Xương Khúc + Nhật Nguyệt sáng - tài năng quốc tế',
    sao: ['Văn Khúc', 'Văn Xương'],
    ketHop: ['Thái Dương', 'Thái Âm'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 55,
    tomTat: `Khi cặp Xương Khúc gặp Nhật Nguyệt sáng (Miếu, Vượng hoặc Đắc),
tài năng của đương số đạt tầm quốc tế và dễ nổi danh.`,
  },

  // ============================================================
  // 6. Văn Khúc tại Phụ Mẫu
  // ============================================================
  {
    id: 'van-khuc-tai-phu-mau',
    title: 'Văn Khúc tại Phụ Mẫu',
    sao: ['Văn Khúc'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Văn Khúc cư Phụ Mẫu cho thấy cha mẹ của đương số là người có học
thức, yêu thích nghệ thuật và văn chương, sống tình cảm và dễ xúc động.

Đương số được sinh ra trong gia đình gia giáo, thừa hưởng tri thức từ cha mẹ
và có điều kiện thuận lợi để học tập, rèn luyện.`,
  },

  // ============================================================
  // 7. Văn Khúc tại Phúc Đức
  // ============================================================
  {
    id: 'van-khuc-tai-phuc-duc',
    title: 'Văn Khúc tại Phúc Đức',
    sao: ['Văn Khúc'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `Văn Khúc cư Phúc Đức cho thấy gia tộc của đương số có truyền thống
hiếu học, nhiều người đỗ đạt cao và có bằng cấp.

Đương số thừa hưởng được khả năng nghiên cứu cùng tinh thần ham học của dòng
họ.`,
  },

  {
    id: 'van-khuc-tai-phuc-duc-van-xuong',
    title: 'Văn Khúc + Văn Xương tại Phúc Đức - phúc phần dồi dào',
    sao: ['Văn Khúc'],
    cung: ['Phúc Đức'],
    ketHop: ['Văn Xương'],
    doUuTien: 73,
    tomTat: `Khi Văn Khúc hội cùng **Văn Xương** tại Phúc Đức, nền tảng và phúc
phần của đương số càng dồi dào. Tổ tiên có "mồ yên mả đẹp", trên mộ thường có
câu đối hoặc câu thơ.`,
  },

  {
    id: 'van-khuc-tai-phuc-duc-hoa-khoa',
    title: 'Văn Khúc + Hóa Khoa tại Phúc Đức - phúc phần dồi dào',
    sao: ['Văn Khúc'],
    cung: ['Phúc Đức'],
    ketHop: ['Hóa Khoa'],
    doUuTien: 73,
    tomTat: `Khi Văn Khúc hội cùng Hóa Khoa tại Phúc Đức, nền tảng và phúc phần
của đương số càng dồi dào. Tổ tiên có "mồ yên mả đẹp", trên mộ thường có câu
đối hoặc câu thơ.`,
  },

  {
    id: 'van-khuc-tai-phuc-duc-khoi-viet',
    title: 'Văn Khúc + Thiên Khôi / Thiên Việt tại Phúc Đức - phúc phần dồi dào',
    sao: ['Văn Khúc'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Khôi', 'Thiên Việt'],
    doUuTien: 73,
    tomTat: `Khi Văn Khúc hội cùng Thiên Khôi hoặc Thiên Việt tại Phúc Đức, nền
tảng và phúc phần của đương số càng dồi dào. Tổ tiên có "mồ yên mả đẹp", trên
mộ thường có câu đối hoặc câu thơ.`,
  },

  {
    id: 'van-khuc-tai-phuc-duc-quoc-an',
    title: 'Văn Khúc + Quốc Ấn tại Phúc Đức - phúc phần dồi dào',
    sao: ['Văn Khúc'],
    cung: ['Phúc Đức'],
    ketHop: ['Quốc Ấn'],
    doUuTien: 73,
    tomTat: `Khi Văn Khúc hội cùng Quốc Ấn tại Phúc Đức, nền tảng và phúc phần
của đương số càng dồi dào. Tổ tiên có "mồ yên mả đẹp", trên mộ thường có câu
đối hoặc câu thơ.`,
  },

  // ============================================================
  // 8. Văn Khúc tại Điền Trạch
  // ============================================================
  {
    id: 'van-khuc-tai-dien-trach',
    title: 'Văn Khúc tại Điền Trạch',
    sao: ['Văn Khúc'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Văn Khúc cư Điền Trạch cho thấy nhà của đương số đẹp, có tính nghệ
thuật, nhiều sách vở, tranh ảnh và bằng khen.

Đương số thường ở khu vực có dân trí cao — hàng xóm láng giềng phần nhiều cũng
là người có học thức và văn hóa.`,
  },

  // ============================================================
  // 9. Văn Khúc tại Quan Lộc
  // ============================================================
  {
    id: 'van-khuc-tai-quan-loc',
    title: 'Văn Khúc tại Quan Lộc',
    sao: ['Văn Khúc'],
    cung: ['Quan Lộc'],
    doUuTien: 80,
    tomTat: `Văn Khúc cư Quan Lộc khiến đương số phù hợp với các nghề liên quan
đến văn học, nghệ thuật, thủ công, mỹ nghệ và ngôn ngữ.

Đương số học hỏi nhanh, thích tìm hiểu kiến thức mới — nhờ vậy mở rộng được
vốn sống và tri thức.

Việc có nhiều bằng cấp cộng với khả năng vận dụng kiến thức vào công việc giúp
đương số dễ nổi danh và đạt được nhiều thành tựu lớn.`,
  },

  // ============================================================
  // 10. Văn Khúc tại Nô Bộc
  // ============================================================
  {
    id: 'van-khuc-tai-no-boc',
    title: 'Văn Khúc tại Nô Bộc',
    sao: ['Văn Khúc'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Văn Khúc cư Nô Bộc cho thấy bạn bè đồng nghiệp của đương số là
người có học thức, có tài nghệ, thường giúp đỡ được trong học tập và công việc.

Vì Văn Khúc mang sẵn tính đào hoa, giữa đương số và bạn bè đồng nghiệp dễ nảy
sinh tình cảm — cần lưu ý để tránh các tình huống khó xử về sau.`,
  },

  // ============================================================
  // 11. Văn Khúc tại Thiên Di
  // ============================================================
  {
    id: 'van-khuc-tai-thien-di',
    title: 'Văn Khúc tại Thiên Di',
    sao: ['Văn Khúc'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `Văn Khúc cư Thiên Di khiến đương số ra ngoài có khả năng ngoại
giao tốt, được nhiều người quý mến và giúp đỡ — đặc biệt là người khác giới.

Đương số thường lui tới những nơi có văn hóa và gặp được người giỏi: theo lẽ
"đi một ngày đàng, học một sàng khôn", đương số mở mang được kiến thức lẫn nhân
duyên.`,
  },

  // ============================================================
  // 12. Văn Khúc tại Tật Ách - VỊ TRÍ KHÔNG TỐT
  // ============================================================
  {
    id: 'van-khuc-tai-tat-ach',
    title: 'Văn Khúc tại Tật Ách - Vị trí KHÔNG TỐT',
    sao: ['Văn Khúc'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `Văn Khúc tại Tật Ách là vị trí không tốt: cung này chủ về bệnh tật
liên quan đến tình ái nơi đương số.

Khi Văn Khúc hãm địa, hoặc gặp thêm Linh Tinh, Hỏa Tinh, Địa Không, Địa Kiếp
hay **Hóa Kỵ**, đương số dễ mắc các bệnh nan y và bệnh khó chữa.`,
  },

  // ============================================================
  // 13. Văn Khúc tại Tài Bạch
  // ============================================================
  {
    id: 'van-khuc-tai-tai-bach',
    title: 'Văn Khúc tại Tài Bạch',
    sao: ['Văn Khúc'],
    cung: ['Tài Bạch'],
    doUuTien: 78,
    tomTat: `Văn Khúc cư Tài Bạch cho thấy đương số kiếm tiền bằng trí tuệ, học
vấn hoặc các nghề văn chương, nghệ thuật.

Đương số biết nghiên cứu sâu về tài chính, có kiến thức kinh tế áp dụng được
vào thực tiễn.

Mặt khác, đương số có xu hướng chi tiêu và đầu tư nhiều cho việc làm đẹp, cho
nghệ thuật, và cả cho các vấn đề yêu đương tình cảm bên ngoài.`,
  },

  // ============================================================
  // 14. Văn Khúc tại Tử Tức
  // ============================================================
  {
    id: 'van-khuc-tai-tu-tuc',
    title: 'Văn Khúc tại Tử Tức',
    sao: ['Văn Khúc'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Văn Khúc cư Tử Tức cho thấy đương số có đông con.`,
  },

  {
    id: 'van-khuc-tai-tu-tuc-van-xuong',
    title: 'Văn Khúc + Văn Xương tại Tử Tức - con cái thông minh',
    sao: ['Văn Khúc'],
    cung: ['Tử Tức'],
    ketHop: ['Văn Xương'],
    doUuTien: 70,
    tomTat: `Khi Văn Khúc hội cùng **Văn Xương** tại Tử Tức, con cái của đương
số thông minh, chăm chỉ và có năng khiếu về học tập cũng như nghệ thuật.`,
  },

  {
    id: 'van-khuc-tai-tu-tuc-khoi-viet',
    title: 'Văn Khúc + Thiên Khôi / Thiên Việt tại Tử Tức - con cái thông minh',
    sao: ['Văn Khúc'],
    cung: ['Tử Tức'],
    ketHop: ['Thiên Khôi', 'Thiên Việt'],
    doUuTien: 70,
    tomTat: `Khi Văn Khúc hội cùng Thiên Khôi hoặc Thiên Việt tại Tử Tức, con
cái của đương số thông minh, chăm chỉ và có năng khiếu về học tập cũng như
nghệ thuật.`,
  },

  // ============================================================
  // 15. Văn Khúc tại Phu Thê
  // ============================================================
  {
    id: 'van-khuc-tai-phu-the',
    title: 'Văn Khúc tại Phu Thê',
    sao: ['Văn Khúc'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `Văn Khúc cư Phu Thê cho thấy vợ chồng "môn đăng hộ đối", cùng học
thức và sống hòa thuận.

Người hôn phối của đương số có thiên hướng nghệ thuật, ham học hỏi và có khả
năng học lên cao.

Bản thân đương số trong tình cảm là người giàu cảm xúc, đắm say khi yêu.`,
  },

  // ============================================================
  // 16. Văn Khúc tại Huynh Đệ
  // ============================================================
  {
    id: 'van-khuc-tai-huynh-de',
    title: 'Văn Khúc tại Huynh Đệ',
    sao: ['Văn Khúc'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Văn Khúc cư Huynh Đệ cho thấy gia đình đương số đông anh chị em,
trong đó dễ có người thành danh, tài hoa và phong lưu.

Anh chị em thường đi theo con đường học hành, nghệ thuật, văn chương — tạo
nên truyền thống hiếu học cho gia đình.

Đương số thừa hưởng được nhiều giá trị tốt đẹp từ môi trường tích cực đó.`,
  },

  // ============================================================
  // 17. Văn Khúc + Liêm Trinh tại Tỵ / Hợi - cách XẤU
  // ============================================================
  {
    id: 'van-khuc-liem-trinh-ty-hoi',
    title: 'Văn Khúc + Liêm Trinh tại Tỵ / Hợi - Cách XẤU',
    sao: ['Văn Khúc', 'Liêm Trinh'],
    cung: ['Mệnh'],
    chi: ['Tỵ', 'Hợi'],
    doUuTien: 88,
    tomTat: `Khi Văn Khúc hội cùng Liêm Trinh tại Tỵ hoặc Hợi, đương số rơi vào
cách cực xấu: giảm thọ, hay gặp tai họa và tù tội, có thể yểu tử.

Đặc biệt khi cách này lại đi cùng Tuần, Triệt, **Hóa Kỵ** hoặc Phá Quân, đương
số học hành thi cử lận đận, công danh chật vật, phải tha phương, vướng tù tội
và yểu tử.`,
  },

  {
    id: 'van-khuc-liem-trinh-rieu-ty-hoi-nu',
    title: 'Văn Khúc + Liêm Trinh + Riêu tại Tỵ/Hợi - Nữ lụy tình',
    sao: ['Văn Khúc', 'Liêm Trinh'],
    cung: ['Mệnh'],
    chi: ['Tỵ', 'Hợi'],
    gioiTinh: 'Nữ',
    ketHop: ['Thiên Riêu'],
    doUuTien: 80,
    tomTat: `Nữ mệnh có Văn Khúc hội cùng Liêm Trinh và Thiên Riêu tại Tỵ hoặc
Hợi mang thêm sắc thái đào hoa và đa tình: đương số xinh đẹp, lãng mạn nhưng
lụy tình, đồng thời thường thích các chủ đề tâm linh và tín ngưỡng.`,
  },
];
