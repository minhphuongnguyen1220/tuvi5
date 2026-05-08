import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO ĐỊA KHÔNG - Lục Sát Tinh
 * (Phần chung của bộ Không Kiếp được viết tại đây vì user gửi đoạn này
 * cùng content Địa Không)
 */
export const luanGiai_DiaKhong: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung của sao Địa Không
  // ============================================================
  {
    id: 'dia-khong-tinh-chat-chung',
    title: 'Địa Không - Đặc tính chung',
    sao: ['Địa Không'],
    doUuTien: 30,
    tomTat: `**Địa Không** (tên khác Đoạn Trường Sát) thuộc bộ Lục Sát Tinh,
ngũ hành Hỏa (Âm Hỏa). Hóa khí của sao là sát tinh, hung tinh, dâm tinh.

Vị trí miếu hãm:

- **Đắc địa**: Dần, Thân, Tỵ, Hợi.
- **Hãm địa**: các cung còn lại, đặc biệt nặng tại Thìn, Tuất.

Cùng **Địa Kiếp** lập thành bộ "Không Kiếp" — biểu tượng cho trống rỗng,
mất mát, phá hoại tiềm ẩn, hành động liều lĩnh không theo quy luật.`,
  },

  // ============================================================
  // 2. Bộ Không Kiếp - Sát tinh NẶNG NHẤT
  // ============================================================
  {
    id: 'khong-kiep-sat-tinh-nang-nhat',
    title: 'Bộ Không Kiếp - Sát tinh NẶNG NHẤT trong tử vi',
    sao: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 35,
    tomTat: `Địa Không cùng Địa Kiếp là hai sát tinh nặng nhất, mạnh nhất
trong các sao xấu. Tuy chỉ là phụ tinh, ảnh hưởng của hai sao này mạnh
ngang ngửa với chính tinh đắc địa.

Chỉ riêng một trong hai sao cũng đủ hóa giải hầu hết hiệu lực của sao tốt
nhất là Tử Vi. Khi Mệnh có cả Địa Không và Địa Kiếp, mọi việc của đương số
đều hoàn toàn thất bại.

Càng về già, Không Kiếp càng tác họa mãnh liệt hơn — ảnh hưởng tăng theo
thời gian.`,

    chiTiet: `## Vị trí đắc địa - hoạnh phát hoạnh phá

Tại bốn vị trí đắc địa Tỵ, Hợi, Dần, Thân, hai sao này vẫn còn tiềm phục
phá hoại, dù có gia tăng tài danh nhanh chóng. Hoạnh phát đi liền hoạnh phá
— may đi liền rủi (đau ốm, mất của, tang khó…).

Vị trí tốt nhất là cung Tỵ: hành Hỏa của sao tương hòa cung Hỏa, đương số
hoạch phát mau chóng và bất ngờ về quan, tài, vận hội (trúng số lớn, thăng
chức nhanh, uy quyền bộc phát).

Cung Hợi mang ý nghĩa tương tự nhưng cường độ kém hơn (Hợi Thủy khắc Hỏa);
nhờ đó tai họa suy trầm cũng không nhanh như ở Tỵ.

Tại Tỵ và Hợi, Kiếp Không không bao giờ đồng cung — hệ số tăng gấp bội cả
về lợi và bất lợi.

Tại Dần và Thân, Kiếp Không độc thủ và xung chiếu nhau; phát đạt không
mạnh bằng Tỵ Hợi. Dần tốt hơn Thân (Dần Mộc hợp Hỏa, Thân Kim khắc Hỏa).

## Phạm vi ảnh hưởng

Tại tám vị trí hãm địa, sức phá hoại của Không Kiếp sâu rộng, đặc biệt khi
cả hai phối chiếu lẫn nhau:

- Tai họa gia tăng cả số lượng lẫn cường độ.
- Liên lụy đến người thân thuộc.
- Đánh dấu xuống dốc vĩnh quyết nếu hãm tại các cung quan yếu (Phúc, Mệnh,
  Thân).`,
  },

  // ============================================================
  // 3. Tuần Triệt - tác động đảo ngược
  // ============================================================
  {
    id: 'khong-kiep-tuan-triet',
    title: 'Không Kiếp gặp Tuần Triệt - Tác động ĐẢO NGƯỢC',
    sao: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 35,
    tomTat: `Nguyên tắc Tuần Triệt với Không Kiếp đảo ngược so với cách hiểu
thông thường:

- Kiếp Không **Đắc địa** gặp Tuần Triệt được coi như **Hãm địa** — luận
  đoán phải đảo ngược lại.
- Kiếp Không **Hãm địa** gặp Tuần Triệt được chế giảm hoặc triệt tiêu sức
  phá hoại của sát tinh, song không hẳn biến thành tốt đẹp.

Quy tắc tương tự cặp Khôi Việt nhưng ngược chiều ảnh hưởng.`,
  },

  // ============================================================
  // 4. Thể thức tác họa của Không Kiếp
  // ============================================================
  {
    id: 'khong-kiep-the-thuc-tac-hoa',
    title: 'Không Kiếp - Thể thức tác họa',
    sao: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 32,
    tomTat: `Không Kiếp tác họa nhanh và bất ngờ vì là sao Hỏa. Nếu đắc địa
thì phù trợ cũng nhanh và bất ngờ như vậy.

Hai sao này tượng trưng cho những trường hợp bất khả kháng mà sức người
khó chế ngự — đương số hầu như bị tràn ngập bởi yếu tố bất khả cưỡng,
không chủ động được tình thế. Khi thiếu sao cứu giải mạnh, đây là dấu hiệu
báo cái chết nhanh chóng, bất ngờ và tàn bạo.`,
  },

  // ============================================================
  // 5. Không Kiếp đắc địa - tính tình
  // ============================================================
  {
    id: 'khong-kiep-dac-tinh-tinh',
    title: 'Không Kiếp ĐẮC ĐỊA - Tính tình',
    sao: ['Địa Không', 'Địa Kiếp'],
    cung: ['Mệnh'],
    doUuTien: 75,
    tomTat: `Không Kiếp **Đắc địa** tại Mệnh khiến đương số có mưu trí thâm
trầm và lợi hại; can đảm, táo bạo, dám nói dám làm; kín đáo, bí mật, hay
giấu diếm; hay suy xét, mưu trí cao thâm; thủ đoạn cao, hay dùng thủ đoạn
gian quyệt; ích kỷ.

Đặc tính này đúng cho cả nam và nữ.`,
  },

  // ============================================================
  // 6. Không Kiếp hãm - tính tình
  // ============================================================
  {
    id: 'khong-kiep-ham-tinh-tinh',
    title: 'Không Kiếp HÃM - Tính tình côn đồ',
    sao: ['Địa Không', 'Địa Kiếp'],
    cung: ['Mệnh'],
    doUuTien: 75,
    tomTat: `Không Kiếp **Hãm** tại Mệnh khiến đương số có tính nết của
phường côn đồ:

- Ích kỷ tột độ, trắng trợn, hại công nghĩa cũng không lùi bước.
- Tự kỷ ám thị, suy tật xấu của người từ tật xấu của mình.
- Xảo quyệt, gian tà, biển lận, tham lam.
- Lưu manh hạng nặng: tham nhũng, hối lộ, lường gạt, gian lận, trộm cướp,
  bất lương, hiếp dâm.

Đây không chỉ là tiểu nhân mà là côn đồ. Có thêm sao xấu khác đi cùng:
càng chắc chắn.`,
  },

  // ============================================================
  // 7. Công danh tài lộc Không Kiếp
  // ============================================================
  {
    id: 'khong-kiep-cong-danh-tai-loc',
    title: 'Không Kiếp - Công danh & tài lộc',
    sao: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Khi đắc địa, Không Kiếp không bảo đảm trọn vẹn lâu dài cho
đương số. Sự nghiệp hoạnh phát hoạnh phá, uy quyền tiền bạc thăng trầm.
Nếu phú quý lớn thì hoặc không hưởng được lâu, hoặc phải có lần phá sản,
lụn bại.

Khi hãm địa, đương số cực kỳ nghèo khổ, vất vả, không có sự nghiệp và sinh
kế.

Khi Không Kiếp giáp Mệnh, đương số liên lụy ít nhiều: vất vả, tha phương
lập nghiệp, bị mưu hại, trộm cắp.`,
  },

  // ============================================================
  // 8. Phúc thọ tai họa - đặc biệt nữ mệnh
  // ============================================================
  {
    id: 'khong-kiep-phu-nu',
    title: 'Không Kiếp - ĐẶC BIỆT BẤT LỢI CHO NỮ MỆNH',
    sao: ['Địa Không', 'Địa Kiếp'],
    trangThai: ['Hãm'],
    gioiTinh: 'Nữ',
    doUuTien: 78,
    tomTat: `Không Kiếp **Hãm** đặc biệt bất lợi với phụ nữ:

- Sát phu, sát con.
- Tai nạn trinh tiết (mất trinh, hãm hiếp), ảnh hưởng suốt đời.
- Hồng nhan bạc mệnh, đa truân, hay lụy vì tình.`,

    chiTiet: `Trầm cảm tiềm ẩn, đa truân, hồng nhan bạc mệnh đặc biệt nặng nề khi sao hãm.`,
  },

  {
    id: 'khong-kiep-dac-dia-thang-tram',
    title: 'Không Kiếp - Đắc địa thăng trầm',
    sao: ['Địa Không', 'Địa Kiếp'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 70,
    tomTat: `Không Kiếp **Đắc địa**: đương số vất vả cực nhọc, tai họa tiềm
tàng nhưng không hung hiểm; phải chịu nhiều thăng trầm vinh - nhục.`,
  },

  {
    id: 'khong-kiep-ham-nghiep-chuong',
    title: 'Không Kiếp HÃM - Nghiệp chướng',
    sao: ['Địa Không', 'Địa Kiếp'],
    trangThai: ['Hãm'],
    doUuTien: 75,
    tomTat: `Không Kiếp **Hãm** như nghiệp chướng bám vào vận mệnh đương số:
tật nguyền vĩnh viễn, bệnh nặng; hung họa nhiều và nặng nề; nghèo khổ, cô
độc, vô sản phải đi xa làm ăn; yểu mạng.`,
  },

  {
    id: 'khong-kiep-sat-tinh-phu-the',
    title: 'Không Kiếp + Sát tinh - gián đoạn phu thê',
    sao: ['Địa Không', 'Địa Kiếp'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 65,
    tomTat: `Không Kiếp gặp sát tinh (Kình Dương, Đà La, Hỏa Tinh, Linh
Tinh) — dù sao đắc địa: gián đoạn phu thê (vợ hoặc chồng chết sớm).`,
  },

  {
    id: 'khong-kiep-dao-hong-ai-tinh',
    title: 'Không Kiếp + Đào Hồng - nghiệp ái tình',
    sao: ['Địa Không', 'Địa Kiếp'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 70,
    tomTat: `Không Kiếp gặp Đào Hoa, Hồng Loan (cả nam và nữ): đương số mang
nghiệp chướng ái tình, đau khổ điêu đứng tình duyên, cưới xin nhiều lần,
mắc bệnh phong tình, yểu mạng.`,
  },

  {
    id: 'khong-kiep-dao-hong-nu',
    title: 'Không Kiếp + Đào Hồng - Nữ mệnh',
    sao: ['Địa Không', 'Địa Kiếp'],
    gioiTinh: 'Nữ',
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 72,
    tomTat: `Nữ mệnh có Đào Hồng cùng Không Kiếp: đa phu, hồng nhan bạc
mệnh, có thể là gái giang hồ; chưa chồng thì rất lang chạ. Đương số dễ bị
hãm hiếp, mất trinh, thất tiết; gia đạo nhiều lần tan vỡ, bị ruồng bỏ hoặc
có thể bị giết vì tình.`,
  },

  // ============================================================
  // 9. Sao chế giải Không Kiếp hãm
  // ============================================================
  {
    id: 'khong-kiep-sao-che-giai',
    title: 'Không Kiếp hãm - Sao chế giải',
    sao: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 50,
    tomTat: `Không Kiếp hãm địa có một số sao chế giải, song chỉ giảm bớt
chứ không mất hẳn:

- Chính tinh: Tử Vi miếu/vượng địa, Thiên Phủ miếu/vượng địa.
- Phụ tinh (bốn sao tương đối mạnh): Tuần, Triệt, Thiên Giải, Hóa Khoa.

Các sao giải khác không đủ sức chế ngự Không Kiếp hãm địa. Lưu ý quan
trọng: Không Kiếp hãm làm giảm sự tốt đẹp của cát tinh nhiều hơn là cát
tinh làm mất sự hung họa của Không Kiếp.`,
  },

  // ============================================================
  // 10. Sao tăng ác Không Kiếp
  // ============================================================
  {
    id: 'khong-kiep-sao-tang-ac',
    title: 'Không Kiếp - Sao TĂNG ÁC',
    sao: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 50,
    tomTat: `Các sao tăng ác cho Không Kiếp hãm địa:

- Võ tinh hãm — Sát, Phá, Liêm, Tham hãm địa: tác họa gấp bội.
- Sát tinh hãm — Kình, Đà, Linh, Hỏa hãm địa: góp phần thêm hiểm họa.
- Tả Hữu cũng góp phần.`,
  },

  // ============================================================
  // 11. Các cách kết hợp đặc biệt của Không Kiếp
  // ============================================================
  {
    id: 'khong-kiep-cach-ket-hop',
    title: 'Không Kiếp - Các cách kết hợp đặc biệt',
    sao: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 55,
    tomTat: `Trong các cách kết hợp đặc biệt của Không Kiếp, đáng chú ý nhất
là cách "Phi Thường" — Đế Vương: Không Kiếp đắc cùng Tử, Phủ, Vũ, Tướng
đắc; Sát, Phá, Liêm, Tham đắc; Tả, Hữu, Khôi, Việt, Xương, Khúc, Long,
Phượng, Đào, Hồng, Khoa, Quyền, Lộc; Kình, Đà, Hình, Hổ. Đương số có cách
này trở thành nguyên thủ, đế vương, danh tiếng lừng lẫy.`,
  },
  {
    id: 'khong-kiep-tuong-ma-khoa-dac-menh',
    title: 'Không Kiếp + Thiên Tướng/Thiên Mã/Hóa Khoa đắc địa cư Mệnh - Sự nghiệp lừng lẫy',
    sao: ['Địa Không', 'Địa Kiếp'],
    cung: ['Mệnh'],
    ketHop: ['Thiên Tướng', 'Thiên Mã', 'Hóa Khoa'],
    doUuTien: 50,
    tomTat: `Không Kiếp cùng Thiên Tướng, Thiên Mã hoặc Hóa Khoa đắc địa cư
Mệnh: đương số tài giỏi, lập sự nghiệp lừng lẫy trong cảnh loạn ly.`,
  },
  {
    id: 'khong-kiep-tu-phu',
    title: 'Không Kiếp + Tử Phủ cùng đắc - Thăng trầm công danh',
    sao: ['Địa Không', 'Địa Kiếp'],
    ketHop: ['Tử Vi', 'Thiên Phủ'],
    doUuTien: 50,
    tomTat: `Không Kiếp gặp Tử Vi và Thiên Phủ cùng đắc: đương số thăng trầm
công danh. Khi Tử Phủ bị Tuần Triệt, hung họa hiểm nghèo khó tránh.`,
  },
  {
    id: 'khong-kiep-kinh-da-hoa-linh-ham',
    title: 'Không Kiếp + Kình Đà Hỏa Linh cùng hãm - Khắc vợ sát phu',
    sao: ['Địa Không', 'Địa Kiếp'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 50,
    tomTat: `Không Kiếp gặp Kình Dương, Đà La, Hỏa Tinh, Linh Tinh cùng hãm:
nguy hiểm tính mạng — cả nam nữ đều khắc vợ, sát phu.`,

    chiTiet: `## Các bộ đặc biệt khác

- Kiếp đi cùng Cơ (hoặc Hỏa): hỏa tai — cháy nhà, bỏng lửa.
- Kiếp đi cùng Tham đồng cung: thủy tai — chết đuối, bị giết dưới nước;
  nếu không thì lang thang độ nhật, dễ sa đường tù tội.
- Không (Kiếp) cùng Binh, Hình, Kỵ: gian phi, trộm cướp, du đãng, côn đồ
  toàn diện (ăn cắp, khảo của, hiếp dâm, giết người).
- Kiếp cùng Không, Tử, Tham: cách tu sĩ — nhưng vì ảnh hưởng Không Kiếp có
  thể phá giới, trở lại trần hoàn.
- Kiếp cùng Phù, Khốc, Khách, Cự, Nhật: tai họa, tang khó, đau buồn liên
  tiếp, chung thân bất hạnh.`,
  },

  // ============================================================
  // 12. Địa Không tại Mệnh
  // ============================================================
  {
    id: 'dia-khong-tai-menh',
    title: 'Địa Không tại Mệnh',
    sao: ['Địa Không'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `**Địa Không** cư Mệnh khiến đương số bên ngoài trầm tĩnh, ít
nói nhưng bên trong tiềm ẩn sức chịu đựng bền bỉ.`,
  },

  {
    id: 'dia-khong-tai-menh-dac-dia',
    title: 'Địa Không Mệnh - Đắc địa',
    sao: ['Địa Không'],
    cung: ['Mệnh'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 80,
    tomTat: `Địa Không **Đắc địa** tại Mệnh: đương số có khả năng làm mới
bản thân, vực dậy sau thất bại, giữ được sự tỉnh táo trong "nước sôi lửa
bỏng".`,
  },

  {
    id: 'dia-khong-tai-menh-dac-cat',
    title: 'Địa Không Mệnh + Thiên Phủ / Tả Hữu / Văn Xương',
    sao: ['Địa Không'],
    cung: ['Mệnh'],
    ketHop: ['Thiên Phủ', 'Tả Phù', 'Hữu Bật', 'Văn Xương'],
    doUuTien: 75,
    tomTat: `Địa Không tại Mệnh gặp Thiên Phủ, Tả Phù, Hữu Bật hoặc Văn
Xương: tăng nội lực cho đương số, phát huy được trí tuệ và sáng tạo âm
thầm.`,
  },

  {
    id: 'dia-khong-tai-menh-ham',
    title: 'Địa Không Mệnh - Hãm địa',
    sao: ['Địa Không'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `Địa Không **Hãm** tại Mệnh: đương số cô đơn, lạc lõng "như cá
lạc sông". Cuộc sống biến động, mất niềm tin vào bản thân, khó mở lòng với
người khác.`,
  },

  {
    id: 'dia-khong-tai-menh-ham-sat',
    title: 'Địa Không Mệnh + Địa Kiếp / Kình / Hình',
    sao: ['Địa Không'],
    cung: ['Mệnh'],
    ketHop: ['Địa Kiếp', 'Kình Dương', 'Thiên Hình'],
    doUuTien: 75,
    tomTat: `Địa Không tại Mệnh gặp Địa Kiếp, Kình Dương hoặc Thiên Hình:
đương số hao tổn sức khỏe, tài lực; tai họa đến bất ngờ.`,
  },

  // ============================================================
  // 13. Địa Không tại Phụ Mẫu
  // ============================================================
  {
    id: 'dia-khong-tai-phu-mau',
    title: 'Địa Không tại Phụ Mẫu',
    sao: ['Địa Không'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Địa Không** tại Phụ Mẫu ảnh hưởng đến quan hệ của đương số
với cha mẹ.`,
  },

  {
    id: 'dia-khong-tai-phu-mau-dac-dia',
    title: 'Địa Không Phụ Mẫu - Đắc địa',
    sao: ['Địa Không'],
    cung: ['Phụ Mẫu'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 78,
    tomTat: `Địa Không **Đắc địa** tại Phụ Mẫu: quan hệ giữa đương số với
cha mẹ kín đáo nhưng sâu sắc, có sự tôn trọng. Sức khỏe cha mẹ thiếu ổn
định nhưng không nghiêm trọng. Đương số phải vất vả chăm lo cha mẹ, hoặc
gánh hậu quả do cha mẹ để lại.`,
  },

  {
    id: 'dia-khong-tai-phu-mau-ham',
    title: 'Địa Không Phụ Mẫu - Hãm địa',
    sao: ['Địa Không'],
    cung: ['Phụ Mẫu'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Địa Không **Hãm** tại Phụ Mẫu: gia đạo bất hòa, "cơm chẳng lành
canh chẳng ngọt". Cha mẹ sức khỏe kém, hay gặp biến cố, hoặc vướng cờ bạc
rượu chè.`,
  },

  {
    id: 'dia-khong-tai-phu-mau-hung-tinh',
    title: 'Địa Không Phụ Mẫu + hung tinh',
    sao: ['Địa Không'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Kiếp', 'Hóa Kỵ'],
    doUuTien: 73,
    tomTat: `Địa Không tại Phụ Mẫu gặp hung tinh (Kình Dương, Đà La, Hỏa
Tinh, Linh Tinh, Địa Kiếp, Hóa Kỵ): quan hệ giữa đương số và cha mẹ càng
rạn nứt.`,
  },

  // ============================================================
  // 14. Địa Không tại Phúc Đức
  // ============================================================
  {
    id: 'dia-khong-tai-phuc-duc',
    title: 'Địa Không tại Phúc Đức',
    sao: ['Địa Không'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `**Địa Không** tại Phúc Đức ảnh hưởng đến phúc đức tinh thần của
đương số.`,
  },

  {
    id: 'dia-khong-tai-phuc-duc-dac-dia',
    title: 'Địa Không Phúc Đức - Đắc địa',
    sao: ['Địa Không'],
    cung: ['Phúc Đức'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 80,
    tomTat: `Địa Không **Đắc địa** tại Phúc Đức: đương số có ý thức làm việc
thiện, giữ đạo đức, tin "gieo nhân lành gặt quả ngọt". Đời sống tinh thần
đè nén, dễ cô đơn, song trung niên hậu vận chuyển biến tốt hơn.`,
  },

  {
    id: 'dia-khong-tai-phuc-duc-ham',
    title: 'Địa Không Phúc Đức - Hãm địa',
    sao: ['Địa Không'],
    cung: ['Phúc Đức'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `Địa Không **Hãm** tại Phúc Đức: đương số trắc trở tinh thần,
thiếu an lành, nhiều áp lực; bị ảnh hưởng bởi nghiệp chướng, phúc phần
mỏng manh.`,
  },

  {
    id: 'dia-khong-tai-phuc-duc-sat',
    title: 'Địa Không Phúc Đức + Địa Kiếp / Kình / sát tinh',
    sao: ['Địa Không'],
    cung: ['Phúc Đức'],
    ketHop: ['Địa Kiếp', 'Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 73,
    tomTat: `Địa Không tại Phúc Đức gặp Địa Kiếp, Kình Dương, Đà La, Hỏa
Tinh hoặc Linh Tinh: đương số cẩn trọng sức khỏe tinh thần, phúc bị hao
mòn.`,
  },

  // ============================================================
  // 15. Địa Không tại Điền Trạch
  // ============================================================
  {
    id: 'dia-khong-tai-dien-trach',
    title: 'Địa Không tại Điền Trạch',
    sao: ['Địa Không'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Địa Không** tại Điền Trạch ảnh hưởng đến nhà cửa, đất đai của
đương số.`,
  },

  {
    id: 'dia-khong-tai-dien-trach-dac-dia',
    title: 'Địa Không Điền Trạch - Đắc địa',
    sao: ['Địa Không'],
    cung: ['Điền Trạch'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 78,
    tomTat: `Địa Không **Đắc địa** tại Điền Trạch: đương số kín đáo, ít phô
trương chuyện nhà cửa; gắn bó quê cha đất tổ, muốn giữ gìn gia sản. Tính
phá hoại tiềm ẩn vẫn còn — tai họa khó lường, lúc khó khăn đương số phải
tìm đường thoát thân trước, khó giữ gia sản trọn vẹn.`,
  },

  {
    id: 'dia-khong-tai-dien-trach-ham',
    title: 'Địa Không Điền Trạch - Hãm địa',
    sao: ['Địa Không'],
    cung: ['Điền Trạch'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Địa Không **Hãm** tại Điền Trạch: đương số thất thoát tài sản,
mất nhà; gặp tai họa từ môi trường sống. Quan hệ trong nhà thiếu hòa khí,
phải di chuyển nhiều lần.`,
  },

  // ============================================================
  // 16. Địa Không tại Quan Lộc
  // ============================================================
  {
    id: 'dia-khong-tai-quan-loc',
    title: 'Địa Không tại Quan Lộc',
    sao: ['Địa Không'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `**Địa Không** tại Quan Lộc ảnh hưởng đến công danh sự nghiệp
của đương số.`,
  },

  {
    id: 'dia-khong-tai-quan-loc-dac-dia',
    title: 'Địa Không Quan Lộc - Đắc địa',
    sao: ['Địa Không'],
    cung: ['Quan Lộc'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 80,
    tomTat: `Địa Không **Đắc địa** tại Quan Lộc: đương số có giai đoạn phát
triển hưng thịnh, song càng phát đạt càng dễ sụp đổ nhanh. Lúc thành công
là lúc "ngủ quên trên chiến thắng" nên khó tránh tai họa. Đương số có thể
dùng tiểu xảo, thủ đoạn bất chính — để lại rủi ro lâu dài.`,
  },

  {
    id: 'dia-khong-tai-quan-loc-ham',
    title: 'Địa Không Quan Lộc - Hãm địa',
    sao: ['Địa Không'],
    cung: ['Quan Lộc'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `Địa Không **Hãm** tại Quan Lộc: công danh đương số không ổn
định, "đầu voi đuôi chuột"; làm việc đơn độc.`,
  },

  {
    id: 'dia-khong-tai-quan-loc-thien-khong-sat',
    title: 'Địa Không Quan Lộc + Thiên Không / sát tinh',
    sao: ['Địa Không'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Không', 'Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Kiếp'],
    doUuTien: 75,
    tomTat: `Địa Không tại Quan Lộc gặp Thiên Không hoặc sát tinh (Kình
Dương, Đà La, Hỏa Tinh, Linh Tinh, Địa Kiếp): sự nghiệp đương số gián
đoạn, có tâm lý bỏ dở giữa chừng.`,
  },

  // ============================================================
  // 17. Địa Không tại Nô Bộc
  // ============================================================
  {
    id: 'dia-khong-tai-no-boc',
    title: 'Địa Không tại Nô Bộc',
    sao: ['Địa Không'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Địa Không** tại Nô Bộc ảnh hưởng đến quan hệ bạn bè và cấp
dưới của đương số.`,
  },

  {
    id: 'dia-khong-tai-no-boc-dac-dia',
    title: 'Địa Không Nô Bộc - Đắc địa',
    sao: ['Địa Không'],
    cung: ['Nô Bộc'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 78,
    tomTat: `Địa Không **Đắc địa** tại Nô Bộc: đương số có mối quan hệ với
người tài giỏi, song "lắm tài nhiều tật" — bạn bè đủ tốt xấu. Việc bạn bè
làm sai có thể khiến đương số chịu liên lụy.`,
  },

  {
    id: 'dia-khong-tai-no-boc-ham',
    title: 'Địa Không Nô Bộc - Hãm địa',
    sao: ['Địa Không'],
    cung: ['Nô Bộc'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Địa Không **Hãm** tại Nô Bộc: đương số dễ gặp kẻ "bằng mặt
không bằng lòng", ngấm ngầm tính toán phía sau.`,
  },

  {
    id: 'dia-khong-tai-no-boc-sat',
    title: 'Địa Không Nô Bộc + sát tinh',
    sao: ['Địa Không'],
    cung: ['Nô Bộc'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Kiếp'],
    doUuTien: 73,
    tomTat: `Địa Không tại Nô Bộc gặp sát tinh (Kình Dương, Đà La, Hỏa Tinh,
Linh Tinh, Địa Kiếp): bạn bè và cấp dưới gây rắc rối, phản bội, lợi dụng
đương số.`,
  },

  // ============================================================
  // 18. Địa Không tại Thiên Di
  // ============================================================
  {
    id: 'dia-khong-tai-thien-di',
    title: 'Địa Không tại Thiên Di',
    sao: ['Địa Không'],
    cung: ['Thiên Di'],
    doUuTien: 78,
    tomTat: `**Địa Không** tại Thiên Di khiến đương số ra ngoài gặp nhiều
rủi ro liên tục, song luôn đi kèm những lợi ích hấp dẫn.`,
  },

  {
    id: 'dia-khong-tai-thien-di-dac-dia',
    title: 'Địa Không Thiên Di - Đắc địa',
    sao: ['Địa Không'],
    cung: ['Thiên Di'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 80,
    tomTat: `Địa Không **Đắc địa** tại Thiên Di: tác họa giảm thiểu nhưng
nguy cơ vẫn còn. Đương số cần tránh tham vọng hoặc hành động bất chính.`,
  },

  {
    id: 'dia-khong-tai-thien-di-ham',
    title: 'Địa Không Thiên Di - Hãm địa',
    sao: ['Địa Không'],
    cung: ['Thiên Di'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `Địa Không **Hãm** tại Thiên Di: đương số lạc lõng, cô đơn khi
xa quê. Giao tiếp kém linh hoạt, khó tạo quan hệ sâu sắc, dễ bị hiểu lầm
xa cách. Đi xa dễ gặp tai tiếng, thị phi.`,
  },

  // ============================================================
  // 19. Địa Không tại Tật Ách
  // ============================================================
  {
    id: 'dia-khong-tai-tat-ach',
    title: 'Địa Không tại Tật Ách',
    sao: ['Địa Không'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `**Địa Không** tại Tật Ách khiến bệnh tật và tai họa đến với
đương số bất ngờ.`,
  },

  {
    id: 'dia-khong-tai-tat-ach-dac-dia',
    title: 'Địa Không Tật Ách - Đắc địa',
    sao: ['Địa Không'],
    cung: ['Tật Ách'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 80,
    tomTat: `Địa Không **Đắc địa** tại Tật Ách: đương số dễ mắc bệnh hoặc
gặp tai họa nhưng có thể vượt qua hoặc chữa trị kịp thời.`,
  },

  {
    id: 'dia-khong-tai-tat-ach-ham',
    title: 'Địa Không Tật Ách - Hãm địa',
    sao: ['Địa Không'],
    cung: ['Tật Ách'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `Địa Không **Hãm** tại Tật Ách: bệnh của đương số khó tìm
nguyên nhân, khó chẩn đoán.`,
  },

  {
    id: 'dia-khong-tai-tat-ach-kiep-kinh',
    title: 'Địa Không Tật Ách + Địa Kiếp / Kình',
    sao: ['Địa Không'],
    cung: ['Tật Ách'],
    ketHop: ['Địa Kiếp', 'Kình Dương'],
    doUuTien: 75,
    tomTat: `Địa Không tại Tật Ách gặp Địa Kiếp hoặc Kình Dương: đương số
gặp tai nạn bất ngờ hoặc bệnh hiểm nghèo — cần phòng tránh từ sớm.`,
  },

  // ============================================================
  // 20. Địa Không tại Tài Bạch
  // ============================================================
  {
    id: 'dia-khong-tai-tai-bach',
    title: 'Địa Không tại Tài Bạch',
    sao: ['Địa Không'],
    cung: ['Tài Bạch'],
    doUuTien: 78,
    tomTat: `**Địa Không** tại Tài Bạch ảnh hưởng đến tài lộc của đương số.`,
  },

  {
    id: 'dia-khong-tai-tai-bach-dac-dia',
    title: 'Địa Không Tài Bạch - Đắc địa',
    sao: ['Địa Không'],
    cung: ['Tài Bạch'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 80,
    tomTat: `Địa Không **Đắc địa** tại Tài Bạch: đương số quản lý tài chính
khôn ngoan, kiếm tiền bằng đường táo bạo (đầu cơ, tích trữ), thậm chí có
thể chọn con đường bất chính.`,
  },

  {
    id: 'dia-khong-tai-tai-bach-ta-huu-khoa',
    title: 'Địa Không Tài Bạch + Tả Hữu / Hóa Khoa',
    sao: ['Địa Không'],
    cung: ['Tài Bạch'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Hóa Khoa'],
    doUuTien: 75,
    tomTat: `Địa Không tại Tài Bạch gặp Tả Phù, Hữu Bật hoặc Hóa Khoa: tính
liều lĩnh giảm bớt, đương số được đưa về chính giới.`,
  },

  {
    id: 'dia-khong-tai-tai-bach-ham',
    title: 'Địa Không Tài Bạch - Hãm địa',
    sao: ['Địa Không'],
    cung: ['Tài Bạch'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `Địa Không **Hãm** tại Tài Bạch: đương số hao tài tốn của, mất
mát tiền bạc; thu nhập thất thường, khó giữ ổn định lâu dài. Tâm lý lười
biếng, muốn làm giàu nhanh dễ khiến đương số sa ngã vào việc kiếm tiền
không chính đáng.`,
  },

  // ============================================================
  // 21. Địa Không tại Tử Tức
  // ============================================================
  {
    id: 'dia-khong-tai-tu-tuc',
    title: 'Địa Không tại Tử Tức',
    sao: ['Địa Không'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Địa Không** tại Tử Tức ảnh hưởng đến quan hệ giữa đương số
với con cái.`,
  },

  {
    id: 'dia-khong-tai-tu-tuc-dac-dia',
    title: 'Địa Không Tử Tức - Đắc địa',
    sao: ['Địa Không'],
    cung: ['Tử Tức'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 78,
    tomTat: `Địa Không **Đắc địa** tại Tử Tức: quan hệ giữa đương số với con
kín đáo nhưng đầy yêu thương, dù đôi khi vẫn có những tổn thương để lại
vết sẹo khó lành.`,
  },

  {
    id: 'dia-khong-tai-tu-tuc-ham',
    title: 'Địa Không Tử Tức - Hãm địa',
    sao: ['Địa Không'],
    cung: ['Tử Tức'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Địa Không **Hãm** tại Tử Tức: quan hệ giữa đương số với con cái
không thuận lợi, thiếu đồng điệu, khoảng cách thế hệ. Sự không thấu hiểu
dễ đẩy con vào cảnh "lầm đường lạc lối".`,
  },

  {
    id: 'dia-khong-tai-tu-tuc-sat',
    title: 'Địa Không Tử Tức + Kình Đà Hỏa Linh Hình Kỵ',
    sao: ['Địa Không'],
    cung: ['Tử Tức'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Thiên Hình', 'Hóa Kỵ'],
    doUuTien: 73,
    tomTat: `Địa Không tại Tử Tức gặp Kình Dương, Đà La, Hỏa Tinh, Linh
Tinh, Thiên Hình, Hóa Kỵ: con cái làm liên lụy đến cha mẹ.`,
  },

  // ============================================================
  // 22. Địa Không tại Phu Thê
  // ============================================================
  {
    id: 'dia-khong-tai-phu-the',
    title: 'Địa Không tại Phu Thê',
    sao: ['Địa Không'],
    cung: ['Phu Thê'],
    doUuTien: 80,
    tomTat: `**Địa Không** tại Phu Thê ảnh hưởng đến hôn nhân của đương số.`,
  },

  {
    id: 'dia-khong-tai-phu-the-dac-dia',
    title: 'Địa Không Phu Thê - Đắc địa',
    sao: ['Địa Không'],
    cung: ['Phu Thê'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 80,
    tomTat: `Địa Không **Đắc địa** tại Phu Thê: mối quan hệ giữa đương số
và bạn đời sâu sắc nhưng vẫn có lúc không có tiếng nói chung; xung đột lớn
hơn vì hai bên không cảm thấy được thấu hiểu.`,
  },

  {
    id: 'dia-khong-tai-phu-the-ham',
    title: 'Địa Không Phu Thê - Hãm địa',
    sao: ['Địa Không'],
    cung: ['Phu Thê'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `Địa Không **Hãm** tại Phu Thê: hôn nhân trục trặc, thiếu gắn
kết. Quan hệ lạnh nhạt, bạn đời có tư tưởng hoặc quan điểm đạo đức sai
lệch, hoặc xảy ra hiểu lầm nghiêm trọng gây rạn nứt lớn.`,
  },

  // ============================================================
  // 23. Địa Không tại Huynh Đệ
  // ============================================================
  {
    id: 'dia-khong-tai-huynh-de',
    title: 'Địa Không tại Huynh Đệ',
    sao: ['Địa Không'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Địa Không** tại Huynh Đệ ảnh hưởng đến quan hệ của đương số
với anh chị em.`,
  },

  {
    id: 'dia-khong-tai-huynh-de-dac-dia',
    title: 'Địa Không Huynh Đệ - Đắc địa',
    sao: ['Địa Không'],
    cung: ['Huynh Đệ'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 78,
    tomTat: `Địa Không **Đắc địa** tại Huynh Đệ: quan hệ anh chị em hình
khắc nhưng không gay gắt; có thể phải sống xa nhau hoặc làm nghề mạo hiểm.
Anh chị em đương số thành công nhưng giúp đỡ không bền lâu — đương số
thường phải đứng ra giải quyết những rắc rối do họ gây ra.`,
  },

  {
    id: 'dia-khong-tai-huynh-de-ham',
    title: 'Địa Không Huynh Đệ - Hãm địa',
    sao: ['Địa Không'],
    cung: ['Huynh Đệ'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Địa Không **Hãm** tại Huynh Đệ: quan hệ căng thẳng, thiếu gắn
kết; mâu thuẫn, hiểu lầm sâu sắc khiến đương số dễ tổn thương tình cảm và
bị liên lụy từ anh chị em.`,
  },

  // ============================================================
  // 24. 3 cách tai ương khi Địa Không gặp hung tinh
  // ============================================================
  {
    id: 'dia-khong-tai-uong-3-cach',
    title: 'Địa Không gặp hung tinh - 3 cách tai ương',
    sao: ['Địa Không'],
    doUuTien: 55,
    tomTat: `Khi Địa Không gặp hung tinh, có ba cách tai ương đáng lưu ý —
xem các tổ hợp cụ thể bên dưới.`,
  },
  {
    id: 'dia-khong-hoa-linh-hoa-tai',
    title: 'Địa Không + Hỏa Tinh/Linh Tinh - Hỏa tai',
    sao: ['Địa Không'],
    ketHop: ['Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 50,
    tomTat: `Địa Không gặp Hỏa Tinh hoặc Linh Tinh: hỏa tai — cháy nổ do
bất cẩn, điện chập, cháy nhà. Đương số cần kiểm tra điện, bếp, không để
vật dễ cháy gần nguồn nhiệt.`,
  },
  {
    id: 'dia-khong-tham-lang-thuy-tai',
    title: 'Địa Không + Tham Lang - Tai ương sông nước',
    sao: ['Địa Không'],
    ketHop: ['Tham Lang'],
    doUuTien: 50,
    tomTat: `Địa Không gặp Tham Lang: tai ương sông nước — sông hồ, biển
cả. Đương số nên hạn chế đi đường thủy, chuẩn bị kỹ và tuân thủ quy định
an toàn.`,
  },
  {
    id: 'dia-khong-hung-tinh-khac-khac-vo',
    title: 'Địa Không + Hung tinh - Khắc vợ sát phu',
    sao: ['Địa Không'],
    ketHop: ['Kình Dương', 'Đà La', 'Hóa Kỵ', 'Thiên Hình', 'Bạch Hổ'],
    doUuTien: 50,
    tomTat: `Địa Không gặp hung tinh (Kình Dương, Đà La, Hóa Kỵ, Thiên
Hình, Bạch Hổ): vợ chồng lục đục, xa cách, đoạn tuyệt — nam khắc vợ, nữ
sát phu. Đương số nên chọn bạn đời hợp mệnh, rèn kiên nhẫn và lòng bao
dung.`,
  },

  // ============================================================
  // 25. Hóa giải Địa Không
  // ============================================================
  {
    id: 'dia-khong-hoa-giai',
    title: 'Địa Không - Cách hóa giải',
    sao: ['Địa Không'],
    doUuTien: 40,
    tomTat: `Cách hóa giải Địa Không nằm ở việc hiểu được cái tôi của chính
mình.

Khi Địa Không thủ Mệnh, đương số nên:

- Nhìn thấy con người thật của mình, hiểu cái tôi và cái siêu tôi.
- Chuyển hóa tổn thương thành sự chấp nhận, thành thật với bản thân.
- Thay đổi tam quan cho phù hợp với lối sống đạo đức và xã hội.
- Tu tâm dưỡng tính, tránh lối phá cách — về với lối mòn, cách thức được
  số đông chấp nhận.

Khi Địa Không tại các cung quan hệ, đương số nên tìm hiểu bản chất của
mối quan hệ và học cách hòa giải. Vì Địa Không có tính xáo trộn lớn, đương
số cần chủ động thiết lập nguyên tắc ngay từ đầu — nếu không sẽ vất vả khi
sao tác họa.`,
  },
];
