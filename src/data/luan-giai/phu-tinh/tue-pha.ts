import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO TUẾ PHÁ - Hỏa, vòng Thái Tuế (vị trí 7).
 * LUÔN ĐỐI XUNG Thái Tuế (cách 6 cung) - sao "phá vỡ" trật tự.
 * LUÔN đồng cung với THIÊN HƯ (quy luật an sao - hardcode trong engine).
 * Tam hợp Tang Tuế Điếu (Tang Môn + Thái Tuế + Điếu Khách) - phần CHUNG đã viết tại tang-mon.ts.
 *
 * Hình tượng: BỘ RĂNG - sâu răng, hư răng, mọc lệch.
 */
export const luanGiai_TuePha: DoanLuanGiai[] = [
  {
    id: 'tue-pha-tinh-chat-chung',
    title: 'Tuế Phá - Đặc tính chung',
    sao: ['Tuế Phá'],
    doUuTien: 32,
    tomTat: `**Tuế Phá** là phụ tinh trong vòng Thái Tuế, giữ vị trí thứ 7,
ngũ hành Hỏa.

Vị thế của Tuế Phá khá đặc biệt trong vòng Thái Tuế. Sao này luôn xung
chiếu Thái Tuế qua trục đối xung 6 cung, vì vậy mang tính cách "phá vỡ"
trật tự đã có. Tuế Phá tam hợp với Tang Môn và Điếu Khách — tam hợp của
sự chống đối, tính xây dựng không cao. Đáng chú ý hơn cả, Tuế Phá luôn
đồng cung với **Thiên Hư** (quy luật an sao hardcode trong engine);
Thiên Hư là hao bại tinh chủ về buồn rầu, nước mắt, kêu than buồn khổ —
biểu hiện sự không được toại lòng, thỏa mãn trong cuộc đời.

Vai trò chính của Tuế Phá là chống lại sự an bài định mệnh, quật cường
đả phá trật tự đã có, phá vỡ nền tảng cũ và đưa ra quan điểm trái chiều.
Đặc tính bao trùm gồm cái răng, trở ngại, chống đối, đấu tranh, đòi hỏi
và phá tán.

Triết lý của Tuế Phá có thể tóm gọn trong câu "thua thầy bằng vạn không
bằng kém bạn một ly" — đương số luôn sống với tinh thần ganh đua cạnh
tranh, vươn mình cải thiện bản thân.`,
  },

  {
    id: 'tue-pha-thien-hu-dong-cung',
    title: 'Tuế Phá + Thiên Hư (luôn đồng cung)',
    sao: ['Tuế Phá', 'Thiên Hư'],
    doUuTien: 60,
    tomTat: `Tuế Phá luôn đồng cung với **Thiên Hư** — đây là quy luật an
sao bắt buộc, không thể tách rời.

Thiên Hư là hao bại tinh, chủ về buồn rầu, nước mắt, kêu than buồn khổ
và sự không toại lòng thỏa mãn trong cuộc đời. Sự kết hợp này tạo nên
sắc thái buồn đặc trưng cho đương số có Tuế Phá: thường mang nỗi u
hoài sâu kín, lúc nào cũng cảm thấy điều gì đó chưa trọn vẹn.

Đẹp nhất là khi Tuế Phá cùng Khốc Hư đóng tại Tý hoặc Ngọ. Đương số
thuộc tuýp tuổi trẻ không ngừng đấu tranh, về cuối đời đạt được thành
quả nhất định — đây chính là cách "tiền bần hậu phú" (đầu nghèo cuối
giàu).`,
  },

  {
    id: 'tue-pha-tai-menh',
    title: 'Tuế Phá tại Mệnh - ngang ngược cứng đầu',
    sao: ['Tuế Phá'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Đương số có Tuế Phá thủ Mệnh thường ngang ngược, cứng đầu,
nghịch ngợm và phá tán. Đương số hay thích kể lể về nỗi khổ của bản thân
cùng hoàn cảnh, nhưng chính những bất bình ấy lại tiếp thêm cho đương số
quyết tâm rất cao trong công việc.

Trong tranh luận, đương số hay khích bác, đâm chọc, bày tỏ quan điểm trái
chiều và tranh luận với người khác. Vì hành Hỏa, đương số dễ nổi nóng,
kích động, la lối, quát tháo và mất bình tĩnh.

Theo tiến trình từ nhỏ đến lớn, ngay từ thuở thơ ấu đương số đã là đứa
trẻ có cá tính, ngang bướng, "khó bảo". Càng lớn càng gai góc, sắc sảo,
đáo để và không dễ bị bắt nạt.

Tuy nhiên, vì Tuế Phá luôn đồng cung Thiên Hư, đương số phải lưu ý: cuộc
đời ít khi toại lòng và lắm trắc trở.`,
  },

  {
    id: 'tue-pha-tai-menh-ty-ngo-tien-ban-hau-phu',
    title: 'Tuế Phá tại Mệnh - Tý/Ngọ - tiền bần hậu phú',
    sao: ['Tuế Phá'],
    cung: ['Mệnh'],
    chi: ['Tý', 'Ngọ'],
    ketHop: ['Thiên Khốc', 'Thiên Hư'],
    doUuTien: 75,
    tomTat: `Khi Tuế Phá cùng Khốc Hư đóng tại Mệnh ở Tý hoặc Ngọ, đương số
hưởng cách "tiền bần hậu phú": tuổi trẻ không ngừng nỗ lực, về sau đạt
được thành quả xứng đáng.`,
  },

  {
    id: 'tue-pha-rang',
    title: 'Tuế Phá - Hình tượng "cái răng"',
    sao: ['Tuế Phá'],
    doUuTien: 50,
    tomTat: `Tuế Phá có hình tượng cơ thể là bộ răng. Khi sao này thủ Mệnh
hoặc đóng tại Tật Ách, đương số thường có răng xấu, men răng kém, mọc
lệch và hay đau.

Tuế Phá đi cùng Thiên Khốc và Thiên Hư khiến đương số hay đau răng, sâu
răng, hư răng. Còn khi Tuế Phá hội cùng Thiên Riêu, Thiên Đồng và Triệt,
đương số dễ rụng răng sớm.

Mặt tích cực, có một cách rất đẹp gắn với hình tượng này: Tuế Phá hội đủ
cách cục Cơ Nguyệt Đồng Lương cùng Thiên Hình và Quang Quý cho thấy
đương số là bác sỹ nha khoa giỏi — biến chính "vấn đề răng" của mình
thành nghề chữa răng cho người khác.`,
  },

  {
    id: 'tue-pha-menh-cuong-tinh',
    title: 'Tuế Phá + sao mạnh - cá tính mãnh liệt',
    sao: ['Tuế Phá'],
    cung: ['Mệnh'],
    ketHop: ['Kình Dương', 'Hỏa Tinh', 'Linh Tinh', 'Phá Quân', 'Vũ Khúc', 'Thất Sát', 'Tham Lang'],
    doUuTien: 70,
    tomTat: `Khi Tuế Phá thủ Mệnh gặp Kình Dương, Hỏa Linh, Phá Quân, Vũ
Khúc, Thất Sát hay Tham Lang, cá tính của đương số trở nên mãnh liệt như
con ngựa bất kham. Nếu không biết kiềm chế, đương số dễ "đứt dây cương",
sa ngã vì nóng nảy và làm các mối quan hệ xã hội đổ vỡ.

Đây là cách tự gây họa cho mình — sức bộc phát tuy mạnh nhưng vì thiếu
kiềm chế nên dễ chuyển thành phá hoại.`,
  },

  {
    id: 'tue-pha-tai-phu-mau',
    title: 'Tuế Phá tại Phụ Mẫu',
    sao: ['Tuế Phá'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Tuế Phá đóng tại Phụ Mẫu khiến cha mẹ và đương số không hợp
tính nhau. Hai bên hay chống đối nhau theo kiểu "trống đánh xuôi kèn
thổi ngược"; ý kiến của đương số dễ bị cha mẹ phản đối.

Về tính cách của cha mẹ: thường là những người hay bất bình, đứng lên
đấu tranh trong cả công việc lẫn đời sống; ra ngoài dễ dính thị phi và
kiện cáo pháp luật. Trong đó có người hay đau răng, sâu răng và phải đi
khám chữa răng nhiều lần.`,
  },

  {
    id: 'tue-pha-tai-phu-mau-sat-hinh-ky',
    title: 'Tuế Phá tại Phụ Mẫu + Sát Hình Kỵ - hình khắc',
    sao: ['Tuế Phá'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Thiên Hình', 'Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `Tuế Phá tại Phụ Mẫu gặp thêm sát tinh, Thiên Hình và Hóa Kỵ
càng dễ tạo ra tính hình khắc cho mối quan hệ cha mẹ — con cái. Đương số
nên tìm cách sớm xa gia đình để tránh ảnh hưởng xấu.`,
  },

  {
    id: 'tue-pha-tai-phuc-duc',
    title: 'Tuế Phá tại Phúc Đức',
    sao: ['Tuế Phá'],
    cung: ['Phúc Đức'],
    doUuTien: 72,
    tomTat: `Tuế Phá đóng tại Phúc Đức khiến họ hàng đương số thường không
ưa, bất bình với nhau và dễ xảy ra cãi cọ. Dòng họ thường có luật lệ
khắt khe, đi ngược với xã hội bên ngoài, khiến nhiều người khó chịu.

Về phương diện tâm linh, mồ mả của dòng họ không được khang trang, hay
bị thất lạc, phá bỏ, hoặc phải di dời chuyển mộ đi nơi khác.

Đời sống tinh thần của đương số cũng có nhiều biến động: bên trong ẩn
giấu những suy nghĩ bất mãn nhưng không bộc lộ ra ngoài.`,
  },

  {
    id: 'tue-pha-tai-phuc-duc-kinh-hoa-linh',
    title: 'Tuế Phá tại Phúc Đức + Kình Dương / Hỏa Linh - bộc phát',
    sao: ['Tuế Phá'],
    cung: ['Phúc Đức'],
    ketHop: ['Kình Dương', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 67,
    tomTat: `Tuế Phá tại Phúc Đức gặp Kình Dương, Hỏa Tinh hay Linh Tinh
khiến năng lượng tinh thần đang ẩn giấu trong đương số bộc phát mạnh mẽ
ra ngoài.`,
  },

  {
    id: 'tue-pha-tai-dien-trach',
    title: 'Tuế Phá tại Điền Trạch',
    sao: ['Tuế Phá'],
    cung: ['Điền Trạch'],
    doUuTien: 72,
    tomTat: `Tuế Phá đóng tại Điền Trạch khiến đương số hay bất bình, cãi
cọ với hàng xóm. Người ở trong nhà thường hay đau răng. Bản thân nhà cửa
hay hỏng cửa cổng; công năng và thiết kế không hợp lý gây khó chịu cho
người ở. Đất nơi đương số ở thuộc loại xấu, vì vậy dễ phải có lần bán
nhà, bán đất.`,
  },

  {
    id: 'tue-pha-tai-dien-trach-sat-ky-hinh',
    title: 'Tuế Phá tại Điền Trạch + Sát Kỵ Hình - tranh chấp đất đai',
    sao: ['Tuế Phá'],
    cung: ['Điền Trạch'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Hóa Kỵ', 'Thiên Hình'],
    doUuTien: 67,
    tomTat: `Tuế Phá tại Điền Trạch hội cùng sát tinh, Hóa Kỵ và Thiên Hình
càng bất lợi — tình trạng tranh chấp đất đai và tài sản rất dễ xảy ra
với đương số.`,
  },

  {
    id: 'tue-pha-tai-dien-trach-ta-huu-khoi-viet-loc',
    title: 'Tuế Phá tại Điền Trạch + Tả Hữu / Khôi Việt + Lộc - bán nhà thuận lợi',
    sao: ['Tuế Phá'],
    cung: ['Điền Trạch'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Thiên Khôi', 'Thiên Việt', 'Lộc Tồn', 'Hóa Lộc'],
    doUuTien: 67,
    tomTat: `Tuế Phá tại Điền Trạch gặp Tả Phù, Hữu Bật, Thiên Khôi, Thiên
Việt cùng Lộc Tồn hoặc Hóa Lộc khiến việc giao dịch bán nhà của đương
số diễn ra nhanh chóng và thuận lợi.`,
  },

  {
    id: 'tue-pha-tai-quan-loc',
    title: 'Tuế Phá tại Quan Lộc - nghề kiểm tra soi xét',
    sao: ['Tuế Phá'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `Tuế Phá đóng tại Quan Lộc khiến đương số trong công việc hay
bất bình, khó chịu, thích đứng lên đấu tranh đòi hỏi quyền lợi. Vì lẽ ấy
đương số dễ dính thị phi và tranh tụng, lại dễ thua thiệt, đứng sau
người khác — sinh ra phẫn uất, khó chịu, bất bình mà không biết kêu than
với ai.

Mặt tích cực: Tuế Phá là nhân tố tác động ngược, nhờ đó bộ máy công ty
sẽ tìm ra lỗ hổng để cải thiện hơn.

Nghề phù hợp với đương số là những nghề kiểm tra, rà soát, bắt bẻ lỗi
sai như công an, cảnh sát hình sự, kiểm sát viên, kiểm toán, thẩm phán
và luật sư.`,
  },

  {
    id: 'tue-pha-tai-quan-loc-co-nguyet-dong-luong-hinh-quang-quy',
    title: 'Tuế Phá tại Quan Lộc + Cơ Nguyệt Đồng Lương + Hình + Quang Quý - bác sỹ nha khoa',
    sao: ['Tuế Phá'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Cơ', 'Thái Âm', 'Thiên Đồng', 'Thiên Lương', 'Thiên Hình', 'Ân Quang', 'Thiên Quý'],
    doUuTien: 73,
    tomTat: `Tuế Phá tại Quan Lộc hội đủ cách cục Cơ Nguyệt Đồng Lương
cùng Thiên Hình, Ân Quang và Thiên Quý cho thấy đương số là bác sỹ nha
khoa giỏi.`,
  },

  {
    id: 'tue-pha-tai-no-boc',
    title: 'Tuế Phá tại Nô Bộc',
    sao: ['Tuế Phá'],
    cung: ['Nô Bộc'],
    doUuTien: 70,
    tomTat: `Tuế Phá đóng tại Nô Bộc khiến đương số hay bị bạn bè, đồng
nghiệp và cấp dưới nói xấu. Những người chung quanh thường không thành
thật, không ưa đương số. Hai bên hay có bất đồng và khó chịu với nhau
nên đương số hay phải kêu than vì bạn bè.`,
  },

  {
    id: 'tue-pha-tai-no-boc-hoa-linh-kinh-da-khong-kiep',
    title: 'Tuế Phá tại Nô Bộc + Hỏa Linh / Kình Đà / Không Kiếp - ít bạn bè xa cách',
    sao: ['Tuế Phá'],
    cung: ['Nô Bộc'],
    ketHop: ['Hỏa Tinh', 'Linh Tinh', 'Kình Dương', 'Đà La', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 65,
    tomTat: `Tuế Phá tại Nô Bộc gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà
La, Địa Không hay Địa Kiếp khiến đương số càng ít bạn bè. Hầu hết
những người chơi với đương số đều tỏ thái độ bất mãn, không thể hòa hợp
khi ở gần — dần dà tất yếu dẫn đến xa cách.`,
  },

  {
    id: 'tue-pha-tai-no-boc-ta-huu',
    title: 'Tuế Phá tại Nô Bộc + Tả Phù / Hữu Bật - bạn thẳng thắn giúp đỡ',
    sao: ['Tuế Phá'],
    cung: ['Nô Bộc'],
    ketHop: ['Tả Phù', 'Hữu Bật'],
    doUuTien: 65,
    tomTat: `Tuế Phá tại Nô Bộc đi cùng Tả Phù hoặc Hữu Bật cho thấy bạn
bè của đương số tuy hay góp ý thẳng thắn, khó nghe nhưng vẫn thật lòng
giúp đỡ và hỗ trợ.`,
  },

  {
    id: 'tue-pha-tai-thien-di',
    title: 'Tuế Phá tại Thiên Di',
    sao: ['Tuế Phá'],
    cung: ['Thiên Di'],
    doUuTien: 78,
    tomTat: `Tuế Phá đóng tại Thiên Di tức là sao này đối xung Thái Tuế.
Đương số tại vị trí này thường mang tính cách muốn đóng góp xây dựng và
chính trực. Khi ra ngoài, đương số hay gặp phải cảnh bất bình và phải
đứng lên đấu tranh.

Mặt khó của vị trí này là đương số gặp nhiều sự bất đồng, khó chịu và
nhiều người chống đối lại; đôi khi điều ấy khiến đương số mất lòng với
người chung quanh.`,
  },

  {
    id: 'tue-pha-tai-thien-di-ta-huu-quang-quy-tu-linh',
    title: 'Tuế Phá tại Thiên Di + Tả Hữu / Quang Quý / Tứ Linh - được ghi nhận',
    sao: ['Tuế Phá'],
    cung: ['Thiên Di'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Ân Quang', 'Thiên Quý', 'Long Trì', 'Phượng Các', 'Bạch Hổ', 'Hoa Cái'],
    doUuTien: 73,
    tomTat: `Tuế Phá tại Thiên Di hội cùng Tả Phù, Hữu Bật, Ân Quang, Thiên
Quý hoặc bộ **Tứ Linh** (Long Trì + Phượng Các + Bạch Hổ + Hoa Cái) cho
thấy sự đóng góp của đương số được ghi nhận, tạo nên ảnh hưởng tích cực
cho tập thể.`,
  },

  {
    id: 'tue-pha-tai-tat-ach',
    title: 'Tuế Phá tại Tật Ách - vấn đề răng + nghiệp',
    sao: ['Tuế Phá'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `Tuế Phá đóng tại Tật Ách trước hết để lại dấu ấn rõ rệt trên
hàm răng của đương số: dễ rụng răng sớm, răng xấu, sâu răng và mọc lệch.

Về phương diện nghiệp quả, đương số dễ bị người khác ghen ghét, chống
đối — chính sự ấy đem đến tai họa, bệnh tật cho mình. Đương số hay phải
chịu những tai họa, tai nạn không phải do mình mà do bên ngoài mang tới,
gây nên uất ức và căm hận trong lòng.`,
  },

  {
    id: 'tue-pha-tai-tat-ach-pha-hao-kinh-da',
    title: 'Tuế Phá tại Tật Ách + Phá Quân / Hao / Kình Đà - bệnh tật tai họa',
    sao: ['Tuế Phá'],
    cung: ['Tật Ách'],
    ketHop: ['Phá Quân', 'Đại Hao', 'Tiểu Hao', 'Kình Dương', 'Đà La'],
    doUuTien: 73,
    tomTat: `Tuế Phá tại Tật Ách gặp Phá Quân, Đại Hao, Tiểu Hao, Kình
Dương hay Đà La càng dễ kéo đương số vào xung đột, tranh chấp, dẫn đến
bệnh tật và tai họa.`,
  },

  {
    id: 'tue-pha-tai-tai-bach',
    title: 'Tuế Phá tại Tài Bạch',
    sao: ['Tuế Phá'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `Tuế Phá đóng tại Tài Bạch khiến tiền bạc của đương số không
được hanh thông. Hoàn cảnh thường đưa đến những việc phải tiêu pha; lại
hay có mâu thuẫn, bất bình về chuyện tiền bạc, kinh tế. Một khoản chi
đặc trưng là tốn tiền cho việc khám chữa răng và lợi.

Về cách kiếm tiền: đương số có Tuế Phá tại Tài thường nhờ tranh cãi,
đấu tranh và đòi quyền lợi mà kiếm được tiền.`,
  },

  {
    id: 'tue-pha-tai-tai-bach-khoa-quyen-khoi-viet',
    title: 'Tuế Phá tại Tài Bạch + Khoa / Quyền / Khôi Việt - phát tài chính đạo',
    sao: ['Tuế Phá'],
    cung: ['Tài Bạch'],
    ketHop: ['Hóa Khoa', 'Hóa Quyền', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 70,
    tomTat: `Tuế Phá tại Tài Bạch hội cùng Hóa Khoa, Hóa Quyền, Thiên Khôi
hay Thiên Việt mở ra con đường tài lộc sáng cho đương số — phát tài
nhờ làm việc theo chính đạo.`,
  },

  {
    id: 'tue-pha-tai-tai-bach-sat-tinh',
    title: 'Tuế Phá tại Tài Bạch + Sát tinh - nghề rủi ro cao',
    sao: ['Tuế Phá'],
    cung: ['Tài Bạch'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 70,
    tomTat: `Tuế Phá tại Tài Bạch gặp sát tinh khiến đương số phải kiếm
tiền từ những nghề rủi ro cao như đòi nợ thuê, bảo kê hay cho vay nặng
lãi.`,
  },

  {
    id: 'tue-pha-tai-tu-tuc',
    title: 'Tuế Phá tại Tử Tức',
    sao: ['Tuế Phá'],
    cung: ['Tử Tức'],
    doUuTien: 72,
    tomTat: `Tuế Phá đóng tại Tử Tức khiến con cái của đương số ngỗ
nghịch, khó dạy, phá của và hay cãi. Con cái không như mong đợi, không
đạt được những thành tích mà đương số mong muốn, lại hay gây khó chịu
cho cha mẹ. Từ nhỏ đã có biểu hiện chống đối, làm những điều trái ngược
và hay khóc ăn vạ; răng cũng thường không đẹp.`,
  },

  {
    id: 'tue-pha-tai-tu-tuc-co-cu-nhat-luong',
    title: 'Tuế Phá tại Tử Tức + Cơ / Cự / Nhật / Lương - muộn phiền con cái',
    sao: ['Tuế Phá'],
    cung: ['Tử Tức'],
    ketHop: ['Thiên Cơ', 'Cự Môn', 'Thái Dương', 'Thiên Lương'],
    doUuTien: 67,
    tomTat: `Tuế Phá tại Tử Tức gặp Thiên Cơ, Cự Môn, Thái Dương hay Thiên
Lương — những sao chủ về lý luận — càng làm đương số muộn phiền vì
đường con cái.`,
  },

  {
    id: 'tue-pha-tai-tu-tuc-xuong-khuc-khoi-viet',
    title: 'Tuế Phá tại Tử Tức + Xương Khúc / Khôi Việt - con thông minh',
    sao: ['Tuế Phá'],
    cung: ['Tử Tức'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 67,
    tomTat: `Tuế Phá tại Tử Tức hội cùng Văn Xương, Văn Khúc, Thiên Khôi
hay Thiên Việt cho thấy con cái của đương số dù bướng bỉnh nhưng thông
minh và có khả năng tự học.`,
  },

  {
    id: 'tue-pha-tai-tu-tuc-kinh-hoa-ky',
    title: 'Tuế Phá tại Tử Tức + Kình Hỏa Kỵ - tai nạn thuở nhỏ',
    sao: ['Tuế Phá'],
    cung: ['Tử Tức'],
    ketHop: ['Kình Dương', 'Hỏa Tinh', 'Hóa Kỵ'],
    doUuTien: 67,
    tomTat: `Tuế Phá tại Tử Tức gặp Kình Dương, Hỏa Tinh hay Hóa Kỵ buộc
đương số phải đề phòng con cái gặp tai nạn ở thuở nhỏ vì tâm tính tò
mò, hiếu động.`,
  },

  {
    id: 'tue-pha-tai-phu-the',
    title: 'Tuế Phá tại Phu Thê',
    sao: ['Tuế Phá'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `Tuế Phá đóng tại Phu Thê khiến vợ chồng hay bất đồng quan
điểm với nhau. Cảnh "nay giận mai hờn" trở thành quen thuộc, kèm theo
những lúc khóc lóc kêu than và tính hay bắt bẻ. Mối quan hệ giữa hai
bên không có lãng mạn; càng ở với nhau lâu càng thẳng thừng, bộp chộp.
Đương số luôn làm theo ý mình, không quan tâm cảm xúc đối phương.

Về tướng mạo, người hôn phối của đương số thường có răng hơi xấu, khấp
khiểng.`,
  },

  {
    id: 'tue-pha-tai-phu-the-thien-ma',
    title: 'Tuế Phá tại Phu Thê + Thiên Mã - xa quê lập nghiệp',
    sao: ['Tuế Phá'],
    cung: ['Phu Thê'],
    ketHop: ['Thiên Mã'],
    doUuTien: 70,
    tomTat: `Tuế Phá tại Phu Thê gặp Thiên Mã cho thấy vợ chồng đương số
dễ xa quê, cách quán — cưới nhau về cùng đi xa lập nghiệp.`,
  },

  {
    id: 'tue-pha-tai-phu-the-sat-bai-tuan-triet',
    title: 'Tuế Phá tại Phu Thê + Sát Bại + Tuần Triệt - chia tay',
    sao: ['Tuế Phá'],
    cung: ['Phu Thê'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Tuần', 'Triệt'],
    doUuTien: 70,
    tomTat: `Tuế Phá tại Phu Thê hội sát bại tinh cùng Tuần hay Triệt khiến
vợ chồng đương số dễ ôm con bỏ đi, chia tay nhau.`,
  },

  {
    id: 'tue-pha-tai-phu-the-sat-vu-ky-kinh-da',
    title: 'Tuế Phá tại Phu Thê + Thất Sát / Vũ Khúc / Hóa Kỵ / Kình Đà - xấu nặng nhất',
    sao: ['Tuế Phá'],
    cung: ['Phu Thê'],
    ketHop: ['Thất Sát', 'Vũ Khúc', 'Hóa Kỵ', 'Kình Dương', 'Đà La'],
    doUuTien: 70,
    tomTat: `Tuế Phá tại Phu Thê gặp Thất Sát, Vũ Khúc, Hóa Kỵ cùng Kình
Dương và Đà La đem lại tác động xấu nặng nhất cho đường hôn nhân của
đương số.`,
  },

  {
    id: 'tue-pha-tai-phu-the-loc-khoa-xuong-khuc-khoi-viet-tu-duc',
    title: 'Tuế Phá tại Phu Thê + Lộc / Khoa / Xương Khúc / Khôi Việt / Tứ Đức - ít sóng gió',
    sao: ['Tuế Phá'],
    cung: ['Phu Thê'],
    ketHop: ['Lộc Tồn', 'Hóa Lộc', 'Hóa Khoa', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt', 'Long Đức', 'Phúc Đức', 'Thiên Đức', 'Nguyệt Đức'],
    doUuTien: 70,
    tomTat: `Tuế Phá tại Phu Thê hội cùng Lộc Tồn, Hóa Lộc, Hóa Khoa, Văn
Xương, Văn Khúc, Thiên Khôi, Thiên Việt cùng bộ **Tứ Đức** (Long Đức +
Phúc Đức + Thiên Đức + Nguyệt Đức) khiến mối quan hệ vợ chồng ít sóng
gió và duy trì được sự tốt đẹp lâu dài.`,
  },

  {
    id: 'tue-pha-tai-huynh-de',
    title: 'Tuế Phá tại Huynh Đệ',
    sao: ['Tuế Phá'],
    cung: ['Huynh Đệ'],
    doUuTien: 70,
    tomTat: `Tuế Phá đóng tại Huynh Đệ khiến anh chị em của đương số không
hợp tính nhau, hay có bất đồng và chống đối lẫn nhau.`,
  },

  {
    id: 'tue-pha-tai-huynh-de-thien-ma',
    title: 'Tuế Phá tại Huynh Đệ + Thiên Mã - mỗi người một phương',
    sao: ['Tuế Phá'],
    cung: ['Huynh Đệ'],
    ketHop: ['Thiên Mã'],
    doUuTien: 65,
    tomTat: `Tuế Phá tại Huynh Đệ gặp Thiên Mã cho thấy anh chị em xa cách,
mỗi người một phương. Tất cả đều có nghị lực cao, nhưng mỗi lần gặp
nhau là vẫn hay tranh luận, cãi nhau.`,
  },

  {
    id: 'tue-pha-tai-huynh-de-cat-tinh',
    title: 'Tuế Phá tại Huynh Đệ + Cát tinh - âm thầm trợ giúp',
    sao: ['Tuế Phá'],
    cung: ['Huynh Đệ'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 65,
    tomTat: `Tuế Phá tại Huynh Đệ gặp Lục Cát tinh cho thấy anh chị em bên
ngoài có thể phản đối nhau nhưng trong lòng vẫn âm thầm trợ giúp. Chỉ
cần đương số không khước từ hoặc gây tổn hại mối quan hệ thì vẫn nhận
được trợ lực từ anh chị em.`,
  },

  {
    id: 'tue-pha-thien-rieu-dam-bon',
    title: 'Tuế Phá + Thiên Riêu - chơi bời du đãng',
    sao: ['Tuế Phá'],
    ketHop: ['Thiên Riêu'],
    doUuTien: 60,
    tomTat: `Tuế Phá đi cùng Thiên Riêu cho thấy đương số dễ rơi vào chơi
bời, du đãng và dâm bôn. Đào hoa của Thiên Riêu kết hợp với tính phá tán
của Tuế Phá khiến đương số lệch lạc trong tình cảm và hành xử buông
tuồng.`,
  },

  {
    id: 'tue-pha-xuong-khuc-tri-tue',
    title: 'Tuế Phá + Văn Xương + Văn Khúc - trí tuệ danh tiếng',
    sao: ['Tuế Phá'],
    ketHop: ['Văn Xương', 'Văn Khúc'],
    doUuTien: 70,
    tomTat: `Tuế Phá hội đủ Văn Xương và Văn Khúc thúc đẩy đương số theo
đuổi con đường chinh phục tri thức.

Tính bất mãn, "không chịu ngồi yên" của Tuế Phá khi gặp văn tinh sẽ
chuyển thành động lực học tập, nghiên cứu. Nhiều nhà khoa học, học giả
thành danh nhờ chính cái tính "chưa bao giờ thấy đủ" ấy mà bứt phá.

Tuy nhiên, để danh tiếng đi đôi với nội lực bản thân, đương số cần có
cát tinh trợ lực; nếu không, dễ rơi vào cảnh "thùng rỗng kêu to" — có
tiếng nhưng không có miếng.`,
  },

  {
    id: 'tue-pha-xuong-khuc-hoa-khoa',
    title: 'Tuế Phá + Văn Xương + Văn Khúc + Hóa Khoa - danh tiếng vang xa',
    sao: ['Tuế Phá'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Hóa Khoa'],
    doUuTien: 65,
    tomTat: `Tuế Phá đi cùng Văn Xương, Văn Khúc và Hóa Khoa khiến danh
tiếng của đương số càng dễ vang xa.`,
  },

  {
    id: 'tue-pha-sat-ky-hinh-dau-kho',
    title: 'Tuế Phá + Sát + Kỵ + Hình - đau khổ oán đời',
    sao: ['Tuế Phá'],
    ketHop: ['Thất Sát', 'Hóa Kỵ', 'Thiên Hình'],
    doUuTien: 65,
    tomTat: `Tuế Phá hội cùng Thất Sát, Hóa Kỵ và Thiên Hình báo trước
cuộc đời đương số phải trải qua không ít sóng gió, đau khổ và oán
trách. Đương số phải chuốc thêm nhiều khổ lụy, sống trong cảnh than
thân trách phận, khó tìm thấy bình an nội tâm.

Cách hóa giải dành cho đương số là biết an phận, tiến chậm mà chắc —
chỉ như vậy mới mong tìm được bình an thực sự.`,
  },

  {
    id: 'tue-pha-loi-khuyen',
    title: 'Lời khuyên cho người Tuế Phá',
    sao: ['Tuế Phá'],
    doUuTien: 35,
    tomTat: `**Tuế Phá** là ngôi sao mang đầy thử thách nhưng cũng chất
chứa nhiều tiềm năng cho đương số.

Sức mạnh của sao này nằm ở nghị lực ngầm không khuất phục, tinh thần
chống đối bất công và khả năng trở thành ngọn lửa hun đúc trí tuệ. Tuy
nhiên đi cùng đó là không ít yếu điểm: nóng nảy mất bình tĩnh, hay kêu
than bất mãn, dễ phá tán mối quan hệ và những vấn đề về răng.

Để phát huy được Tuế Phá, đương số nên ghi nhớ:

- Tiết chế sự nóng nảy
- Học cách lắng nghe
- Chọn con đường chính đạo, không chống đối tiêu cực
- Chăm sóc răng miệng từ trẻ
- Biến bất mãn thành động lực phấn đấu

Khi biết tu dưỡng đúng cách, Tuế Phá không còn là trở ngại mà hóa thành
ngọn lửa hun đúc trí tuệ, giúp đương số khẳng định bản thân.

Cũng cần nói thêm: đương số tất phải trải qua nhiều va vấp — nhưng
chính những khó khăn đó lại là bước đệm để đương số trưởng thành.`,
  },
];
