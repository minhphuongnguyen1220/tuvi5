import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO VĂN XƯƠNG - Lục Cát Tinh, Văn Tinh
 */
export const luanGiai_VanXuong: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung của sao Văn Xương
  // ============================================================
  {
    id: 'van-xuong-tinh-chat-chung',
    title: 'Văn Xương - Đặc tính chung',
    sao: ['Văn Xương'],
    doUuTien: 30,
    tomTat: `**Văn Xương** thuộc bộ Lục Cát Tinh, là văn tinh, ngũ hành Kim, đặc
tính chủ về khoa giáp, quý hiển và thông minh.

Ưu điểm của sao này: đem cho đương số tài văn chương, nghệ thuật, lòng
hiếu học, tư duy tốt và khả năng lý luận hùng biện sắc bén.

Nhược điểm: cảm xúc dễ bị lay động trước hoàn cảnh.

Vị trí miếu hãm:

- Đắc địa tại Thìn, Tuất, Sửu, Mùi, Tỵ, Hợi
- Hãm địa tại Tý, Dần, Ngọ, Thân

Văn Xương luôn đi cặp với **Văn Khúc** thành bộ "Xương Khúc" — biểu trưng
cho học vấn, văn hóa và nghệ thuật.`,
  },

  // ============================================================
  // 2. Văn Xương tại Mệnh - tướng mạo & tính cách
  // ============================================================
  {
    id: 'van-xuong-tai-menh',
    title: 'Văn Xương tại Mệnh',
    sao: ['Văn Xương'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Đương số có Văn Xương cư Mệnh sở hữu vẻ mặt thanh tú, khôi ngô; nữ
mệnh thường có nhan sắc.

Về tính cách, đương số thông minh bẩm sinh, tài năng và học thức, có
tâm hồn nhạy cảm, thích khám phá kiến thức mới. Năng khiếu nghệ thuật
(văn chương, mỹ thuật, âm nhạc) thể hiện rõ; đương số nhạy cảm với
ngôn từ, hình ảnh, màu sắc và âm thanh.

Khả năng hùng biện rất mạnh, ăn nói lưu loát và khéo léo, nhờ đó con
đường công danh và tài lộc phát triển tốt.`,

    chiTiet: `## Sự nghiệp

Đương số dễ thành danh, đắc thời nhờ chính tài năng. Sự nghiệp phát
triển, dễ tạo được uy danh và sự nổi tiếng, gặt hái nhiều thành tựu.
Có thể dành rất nhiều thời gian cho việc học, có xu hướng vươn tới
học vị thạc sĩ, tiến sĩ, giáo sư.

## Hôn nhân

Đương số giàu tình cảm, đa cảm, đa tình và nhạy cảm. Mối quan hệ hôn
nhân nhìn chung khá ổn định; người hôn phối có thể là người danh giá,
có học thức và nhiều bằng cấp.

## Tài lộc

Đương số biết tận dụng tri thức để tạo dựng tài lộc, chi tiêu hợp lý,
có kế hoạch tích lũy và đầu tư rõ ràng. Tài vận ổn định, ít khi túng
thiếu.

## Phúc thọ

Cuộc sống đương số phú quý, phúc thọ, ổn định và có uy danh, ít khi
gặp tai họa nguy hiểm.`,
  },

  // ============================================================
  // 3. Bộ sao TỐT của Văn Xương
  // ============================================================
  {
    id: 'van-xuong-bo-sao-tot',
    title: 'Văn Xương - Bộ sao TỐT (chỉ dẫn chung)',
    sao: ['Văn Xương'],
    doUuTien: 50,
    tomTat: `Các bộ sao tốt của Văn Xương được tách thành luận giải riêng dưới
đây.`,
  },

  {
    id: 'van-xuong-khuc-khoa',
    title: 'Văn Xương + Văn Khúc + Hóa Khoa - đỗ đạt văn bằng cao',
    sao: ['Văn Xương'],
    ketHop: ['Văn Khúc', 'Hóa Khoa'],
    doUuTien: 45,
    tomTat: `Khi Văn Xương hội Văn Khúc và Hóa Khoa, đương số dễ dàng đỗ đạt và có
văn bằng, chứng chỉ cao.`,
  },

  {
    id: 'van-xuong-khoi-viet',
    title: 'Văn Xương + Thiên Khôi + Thiên Việt - quý nhân phù trợ',
    sao: ['Văn Xương'],
    ketHop: ['Thiên Khôi', 'Thiên Việt'],
    doUuTien: 45,
    tomTat: `Khi Văn Xương hội Thiên Khôi và Thiên Việt, đương số gặp quý nhân phù
trợ, đường học hành và công danh thuận lợi.`,
  },

  {
    id: 'van-xuong-thai-phong',
    title: 'Văn Xương + Thai Phụ + Phong Cáo - tiến thân qua bằng cấp',
    sao: ['Văn Xương'],
    ketHop: ['Thai Phụ', 'Phong Cáo'],
    doUuTien: 45,
    tomTat: `Khi Văn Xương hội Thai Phụ và Phong Cáo, đương số có cơ hội tiến thân
qua bằng cấp giấy tờ; gia đình có truyền thống hiếu học.`,
  },

  {
    id: 'van-xuong-vu-khuc',
    title: 'Văn Xương + Vũ Khúc - tài năng văn chương nghệ thuật',
    sao: ['Văn Xương'],
    ketHop: ['Vũ Khúc'],
    doUuTien: 45,
    tomTat: `Khi Văn Xương hội Vũ Khúc, đương số có tài năng văn chương, nghệ
thuật, dễ có danh tiếng lẫy lừng.`,
  },

  {
    id: 'van-xuong-vu-khuc-ta-huu',
    title: 'Văn Xương + Vũ Khúc + Tả Phù + Hữu Bật - phú quý hiển vinh',
    sao: ['Văn Xương'],
    ketHop: ['Vũ Khúc', 'Tả Phù', 'Hữu Bật'],
    doUuTien: 45,
    tomTat: `Khi Văn Xương hội Vũ Khúc, **Tả Phù** và Hữu Bật, đương số càng phú
quý hiển vinh.`,
  },

  // ============================================================
  // 4. Bộ sao XẤU của Văn Xương
  // ============================================================
  {
    id: 'van-xuong-bo-sao-xau',
    title: 'Văn Xương - Bộ sao XẤU (chỉ dẫn chung)',
    sao: ['Văn Xương'],
    doUuTien: 50,
    tomTat: `Các bộ sao xấu của Văn Xương được tách thành luận giải riêng dưới
đây.`,
  },

  {
    id: 'van-xuong-hoa-ky',
    title: 'Văn Xương + Hóa Kỵ - học mà không ứng dụng',
    sao: ['Văn Xương'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 45,
    tomTat: `Khi Văn Xương đi cùng **Hóa Kỵ**, đương số học nhiều mà không ứng
dụng được, dễ vướng tai tiếng và thị phi.`,
  },

  {
    id: 'van-xuong-khong-kiep',
    title: 'Văn Xương + Địa Không / Địa Kiếp - công danh gián đoạn',
    sao: ['Văn Xương'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 45,
    tomTat: `Khi Văn Xương đi cùng Địa Không hoặc Địa Kiếp, đương số gặp khó khăn,
trắc trở trong học hành và công việc; có thể gặp tai họa bất ngờ
khiến công danh bị gián đoạn.`,
  },

  {
    id: 'van-xuong-thien-hinh',
    title: 'Văn Xương + Thiên Hình - thương tật pháp lý',
    sao: ['Văn Xương'],
    ketHop: ['Thiên Hình'],
    doUuTien: 45,
    tomTat: `Khi Văn Xương đi cùng Thiên Hình, đương số có thể bị thương tật hoặc
gặp rắc rối pháp lý.`,
  },

  {
    id: 'van-xuong-phuc-binh-bach-ho',
    title: 'Văn Xương + Phục Binh / Bạch Hổ - tiểu nhân hại sau lưng',
    sao: ['Văn Xương'],
    ketHop: ['Phục Binh', 'Bạch Hổ'],
    doUuTien: 45,
    tomTat: `Khi Văn Xương đi cùng Phục Binh hoặc Bạch Hổ, đương số dễ bị phản
bội, cản trở bởi người thân hay bạn bè; có tiểu nhân gây họa sau
lưng.`,
  },

  // ============================================================
  // 5. Văn Xương tại Phụ Mẫu
  // ============================================================
  {
    id: 'van-xuong-tai-phu-mau',
    title: 'Văn Xương tại Phụ Mẫu',
    sao: ['Văn Xương'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Đương số có Văn Xương đóng Phụ Mẫu thường có cha mẹ là người học
thức, có chức danh, hoặc là người tài nghệ khéo léo, có danh tiếng
về thủ công và nghệ thuật.

Cha mẹ thường dễ xúc động, đa sầu đa cảm, dễ lung lay trước cái đẹp,
nhạy cảm với những tâm hồn nghệ sĩ lãng mạn, nhẹ nhàng.`,
  },

  // ============================================================
  // 6. Văn Xương tại Phúc Đức
  // ============================================================
  {
    id: 'van-xuong-tai-phuc-duc',
    title: 'Văn Xương tại Phúc Đức',
    sao: ['Văn Xương'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `Đương số có Văn Xương đóng Phúc Đức xuất thân từ dòng họ có truyền
thống hiếu học, nhiều người có bằng cấp và đạt chức vị cao.

Đương số được hưởng phúc đức của gia đình dòng họ, học tập tốt, dễ
thành công và gặt hái nhiều thành tựu.`,
  },

  // ============================================================
  // 7. Văn Xương tại Điền Trạch
  // ============================================================
  {
    id: 'van-xuong-tai-dien-trach',
    title: 'Văn Xương tại Điền Trạch',
    sao: ['Văn Xương'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Đương số có Văn Xương đóng Điền Trạch dễ có được điền sản. Nhà cửa
thường ở khu vực có dân trí cao, hàng xóm láng giềng là người học
thức.

Đương số thích bài trí và chăm chút nhà cửa, không gian sống gọn
gàng, sạch sẽ và mang tính nghệ thuật cao.`,
  },

  // ============================================================
  // 8. Văn Xương tại Quan Lộc
  // ============================================================
  {
    id: 'van-xuong-tai-quan-loc',
    title: 'Văn Xương tại Quan Lộc',
    sao: ['Văn Xương'],
    cung: ['Quan Lộc'],
    doUuTien: 80,
    tomTat: `Đương số có Văn Xương đóng Quan Lộc là người ham học, thích tìm hiểu
điều mới mẻ, khéo tay, giàu trí tưởng tượng và có khả năng cảm thụ
nghệ thuật tốt.

Đương số phù hợp với các công việc liên quan đến đồ thủ công, mỹ
nghệ, mỹ thuật, văn học, mỹ phẩm, thiết kế — và dễ phát triển mạnh
mẽ trong các ngành này.`,
  },

  // ============================================================
  // 9. Văn Xương tại Nô Bộc
  // ============================================================
  {
    id: 'van-xuong-tai-no-boc',
    title: 'Văn Xương tại Nô Bộc',
    sao: ['Văn Xương'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Đương số có Văn Xương đóng Nô Bộc thường có bạn bè, đồng nghiệp là
người học thức, tốt bụng nhưng ham vui.

Họ có thiên hướng nghệ thuật, ăn nói khéo léo, dễ tạo thiện cảm; tuy
đôi khi thiếu thực tế hoặc dễ bị chi phối bởi cảm xúc.

Đương số dễ được đồng nghiệp quý mến và hỗ trợ nhờ giao tiếp nhẹ
nhàng, lịch thiệp, hiểu biết sâu rộng.`,
  },

  // ============================================================
  // 10. Văn Xương tại Thiên Di
  // ============================================================
  {
    id: 'van-xuong-tai-thien-di',
    title: 'Văn Xương tại Thiên Di',
    sao: ['Văn Xương'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `Đương số có Văn Xương đóng Thiên Di mỗi khi ra ngoài đều được làm
quen, tiếp cận với nhiều bạn bè có học thức và danh giá.

Đương số xây dựng được mối quan hệ chất lượng, học hỏi được nhiều
điều mới mẻ và được hỗ trợ, giúp đỡ nhiệt tình từ những người này.`,
  },

  // ============================================================
  // 11. Văn Xương tại Tật Ách
  // ============================================================
  {
    id: 'van-xuong-tai-tat-ach',
    title: 'Văn Xương tại Tật Ách',
    sao: ['Văn Xương'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `Đương số có Văn Xương đóng Tật Ách thường ít bệnh, sức khỏe ổn định,
hiếm khi gặp bệnh nghiêm trọng.`,
  },

  {
    id: 'van-xuong-tat-ach-linh-hoa-khong-kiep-ky',
    title: 'Văn Xương Tật + Linh / Hỏa / Không / Kiếp / Kỵ - bệnh nan y',
    sao: ['Văn Xương'],
    cung: ['Tật Ách'],
    ketHop: ['Linh Tinh', 'Hỏa Tinh', 'Địa Không', 'Địa Kiếp', 'Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `Khi Văn Xương đóng Tật Ách hội Linh Tinh, Hỏa Tinh, Địa Không, Địa
Kiếp hoặc Hóa Kỵ, đương số dễ gặp bệnh nan y khó chữa — tuy nhiên
cũng có khả năng gặp được quý nhân hỗ trợ, tai qua nạn khỏi.`,
  },

  // ============================================================
  // 12. Văn Xương tại Tài Bạch
  // ============================================================
  {
    id: 'van-xuong-tai-tai-bach',
    title: 'Văn Xương tại Tài Bạch',
    sao: ['Văn Xương'],
    cung: ['Tài Bạch'],
    doUuTien: 78,
    tomTat: `Khi Văn Xương đóng Tài Bạch, chất lượng tài chính của đương số phụ
thuộc nặng vào sao kết hợp.`,
  },

  {
    id: 'van-xuong-tai-bach-ta-huu-quang-quy-khuc-khoi-viet',
    title: 'Văn Xương Tài + Tả Hữu / Quang Quý / Văn Khúc / Khôi Việt - giàu có sung túc',
    sao: ['Văn Xương'],
    cung: ['Tài Bạch'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Ân Quang', 'Thiên Quý', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 73,
    tomTat: `Khi Văn Xương đóng Tài Bạch hội Tả Phù, Hữu Bật, Ân Quang, Thiên
Quý, Văn Khúc, Thiên Khôi hay Thiên Việt, đương số giàu có, sung
túc, tài chính dư dả.`,
  },

  {
    id: 'van-xuong-tai-bach-khong-kiep-kinh-da-hoa-linh-ky-hao',
    title: 'Văn Xương Tài + Không / Kiếp / Kình / Đà / Hỏa / Linh / Kỵ / Hao - phá tán',
    sao: ['Văn Xương'],
    cung: ['Tài Bạch'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Hóa Kỵ', 'Đại Hao'],
    doUuTien: 73,
    tomTat: `Khi Văn Xương đóng Tài Bạch hội Địa Không, Địa Kiếp, Kình Dương, Đà
La, Hỏa Tinh, Linh Tinh, Hóa Kỵ hoặc Đại Hao, đương số dễ phá tán,
tài sản tiêu hao dần. Tuy nhiên dù phá tán vẫn có người giúp đỡ và
hỗ trợ vực dậy.`,
  },

  // ============================================================
  // 13. Văn Xương tại Tử Tức
  // ============================================================
  {
    id: 'van-xuong-tai-tu-tuc',
    title: 'Văn Xương tại Tử Tức',
    sao: ['Văn Xương'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Đương số có Văn Xương đóng Tử Tức cho thấy con cái học hành tài
giỏi, chăm chỉ, ham tìm tòi; trong nhà dễ có người theo nghệ thuật.`,
  },

  {
    id: 'van-xuong-tu-tuc-ta-huu-thien-dong-dac',
    title: 'Văn Xương Tử Tức + Tả Hữu / Thiên Đồng đắc - nhiều con phát đạt',
    sao: ['Văn Xương'],
    cung: ['Tử Tức'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Thiên Đồng'],
    doUuTien: 70,
    tomTat: `Khi Văn Xương đóng Tử Tức hội Tả Phù, Hữu Bật hoặc Thiên Đồng đắc
địa, đương số thường có nhiều con; con cái phát đạt và giàu có.`,
  },

  // ============================================================
  // 14. Văn Xương tại Phu Thê
  // ============================================================
  {
    id: 'van-xuong-tai-phu-the',
    title: 'Văn Xương tại Phu Thê',
    sao: ['Văn Xương'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `Đương số có Văn Xương đóng Phu Thê có người hôn phối học thức và
danh giá. Mối quan hệ hôn nhân hòa thuận, vợ chồng ít xảy ra mâu
thuẫn.`,
  },

  // ============================================================
  // 15. Văn Xương tại Huynh Đệ
  // ============================================================
  {
    id: 'van-xuong-tai-huynh-de',
    title: 'Văn Xương tại Huynh Đệ',
    sao: ['Văn Xương'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Đương số có Văn Xương đóng Huynh Đệ thường đông anh chị em: có người
thành danh xây dựng sự nghiệp lớn, có người phong lưu tài hoa theo
nghệ thuật.

Riêng chị em gái thường tình duyên khá lận đận.`,
  },

  {
    id: 'van-xuong-huynh-de-hoa-khoa',
    title: 'Văn Xương Huynh Đệ + Hóa Khoa - anh em đùm bọc',
    sao: ['Văn Xương'],
    cung: ['Huynh Đệ'],
    ketHop: ['Hóa Khoa'],
    doUuTien: 70,
    tomTat: `Khi Văn Xương đóng Huynh Đệ hội Hóa Khoa, anh chị em đùm bọc và yêu
thương nhau.`,
  },

  {
    id: 'van-xuong-huynh-de-hoa-ky',
    title: 'Văn Xương Huynh Đệ + Hóa Kỵ - mâu thuẫn tài sản',
    sao: ['Văn Xương'],
    cung: ['Huynh Đệ'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `Khi Văn Xương đóng Huynh Đệ hội Hóa Kỵ, anh chị em dễ mâu thuẫn về
tài sản.`,
  },

  {
    id: 'van-xuong-huynh-de-kinh-khong-kiep',
    title: 'Văn Xương Huynh Đệ + Kình Dương / Không Kiếp - nguy hiểm bản mệnh',
    sao: ['Văn Xương'],
    cung: ['Huynh Đệ'],
    ketHop: ['Kình Dương', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Khi Văn Xương đóng Huynh Đệ hội Kình Dương, Địa Không hoặc Địa Kiếp,
dễ có người trong anh em gặp chuyện nguy hiểm đến bản mệnh.`,
  },

  // ============================================================
  // 16. Hạn gặp Văn Xương
  // ============================================================
  {
    id: 'van-xuong-han',
    title: 'Hạn gặp Văn Xương',
    sao: ['Văn Xương'],
    doUuTien: 50,
    tomTat: `Khi vận hạn đến Văn Xương, đương số có lợi cho học tập và công danh.

Cách hóa giải khi cần:

- Bình tĩnh tỉnh táo, không hành động vội vàng
- Tập trung vào học tập và chuyên môn
- Tu dưỡng tâm tính, làm việc thiện để hóa nghiệp
- Chọn bạn mà chơi, tránh thị phi`,
  },

  {
    id: 'van-xuong-han-khong-kiep-kinh-da-hoa-linh-ky-hinh',
    title: 'Văn Xương vào hạn + Không / Kiếp / Kình / Đà / Hỏa / Linh / Kỵ / Hình - trở ngại thi cử',
    sao: ['Văn Xương'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Hóa Kỵ', 'Thiên Hình'],
    doUuTien: 45,
    tomTat: `Khi Văn Xương vào hạn hội Địa Không, Địa Kiếp, Kình Dương, Đà La,
Hỏa Tinh, Linh Tinh, Hóa Kỵ hoặc Thiên Hình, đương số gặp trở ngại
trong thi cử và học hành; sự nghiệp bị gián đoạn, dễ vướng thị phi,
kiện tụng và tranh chấp.`,
  },
];
