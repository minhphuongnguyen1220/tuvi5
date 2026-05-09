import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO PHÁ TOÁI - Hỏa, Hung Tinh.
 * LUÔN nằm trong tam hợp TỊ - DẬU - SỬU (Kim Cục).
 * An theo Tứ Sinh / Tứ Chính / Tứ Mộ của chi năm.
 *
 * Hình tượng: CUỐNG HỌNG.
 * Đặc tính: phá hoại, ngang ngược, hao tài tốn của.
 *
 * Theo cụ Thiên Lương: sinh ra để CÂN BẰNG tam hợp Kim Cục với Mộc Cục
 * (Hợi-Mão-Mùi) - tam hợp yếu thế nhất.
 */
export const luanGiai_PhaToai: DoanLuanGiai[] = [
  {
    id: 'pha-toai-tinh-chat-chung',
    title: 'Phá Toái - Đặc tính chung',
    sao: ['Phá Toái'],
    doUuTien: 32,
    tomTat: `**Phá Toái** là phụ tinh hung, ngũ hành Hỏa, hóa khí Hung Tinh.
Sao này luôn nằm trong tam hợp Tỵ - Dậu - Sửu (Kim Cục), an theo Tứ Sinh /
Tứ Chính / Tứ Mộ của chi năm sinh. Tam hợp Kim Cục chủ về cô đơn cô độc,
rắn rỏi bất khuất.

Hình tượng của Phá Toái như một đứa trẻ cứng đầu, chỉ biết tới mình, luôn
cho là mình đúng và không muốn ai hơn. Đương số có sao này đóng tại bất kỳ
cung nào cũng dễ có những hành động gây phiền phức, phá ngang, cản trở mọi
thứ xung quanh — bất kể đối tượng là việc tốt hay việc xấu, cát tinh hay
sát bại tinh.

Đặc tính 2 chiều của Phá Toái:

- Phá hoại biến cát tinh thành vô dụng
- Nhưng cũng có thể biến hung tinh mất đi tác dụng xấu, trở nên vô hại

Tại bất kỳ vị trí nào Phá Toái đóng đều có nhiều biến động — người xem lá
số phải vô cùng cẩn thận và chặt chẽ.

Đặc tính tổng thể: phá hoại, ngang ngược, thất bại, hao tài tốn của. Hình
tượng cơ thể: cuống họng.`,
    chiTiet: `Lý do Phá Toái chỉ nằm trong tam hợp Kim Cục Tỵ-Dậu-Sửu (theo
cụ Thiên Lương) là để cân bằng với tam hợp Mộc Cục Hợi-Mão-Mùi — tam hợp
được đánh giá là yếu thế nhất trong bốn tam hợp cục.

Phá Toái mang sứ mệnh:

- Cản trở, ngăn chặn sự lấn át tổng thể của tam hợp Kim Cục với Mộc Cục
- Tạo nên thế cục cân bằng hơn giữa hai thế đối đầu

Như vậy Phá Toái không phải hung tinh thuần xấu, mà là công cụ cân bằng
trong hệ thống tử vi.`,
  },

  {
    id: 'pha-toai-tai-menh',
    title: 'Phá Toái tại Mệnh - bướng bỉnh ngang ngược',
    sao: ['Phá Toái'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Đương số có Phá Toái thủ Mệnh thường mang tính tình ương ngạnh,
cứng cổ, ngoan cố và ngang ngược. Phong cách táo bạo nhưng dễ phá tán, hao
hụt và gây trở ngại cho mọi công việc.

Ngay từ nhỏ chủ mệnh đã có dấu hiệu lý sự, thích cãi nhau, khả năng bao
biện và lý sự xuất hiện rất sớm. Tuy vậy sự bao biện này chủ yếu mang tính
chống đối, ngoan cố, không phải để tìm chân lý.

Trong công việc, đương số thiếu bền chí, làm được nửa đường thì đứt gánh
và bỏ cuộc. So với Tuế Phá, Phá Toái còn ngang ngược và ngoan cố hơn.

Hình tượng cơ thể của Phá Toái là cuống họng, vì thế đương số thường có
giọng hơi ồm, hơi ngang; lúc nói chuyện hay gây cảm giác ức chế cho người
nghe.

Bản chất sâu hơn:

- Tính cách hơi ngược đời, thích đi ngược chống đối đường hướng và đám đông
- Cái tôi cao, ích kỷ
- Phá ngang vì muốn có sự khác biệt với mọi người
- Muốn là điểm nhấn của những người xung quanh`,
  },

  {
    id: 'pha-toai-tai-phu-mau',
    title: 'Phá Toái tại Phụ Mẫu',
    sao: ['Phá Toái'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Khi Phá Toái đóng tại Phụ Mẫu, cha mẹ đương số thường hay áp đặt
và cản trở ý kiến lẫn hành động của con cái. Hai người mỗi người một tính,
hay sinh chuyện cãi nhau, "không ai chịu ai". Gia đạo nhiều sóng gió, dễ
rơi vào cảnh "cơm chẳng lành, canh chẳng ngọt".`,
  },

  {
    id: 'pha-toai-phu-mau-sat-tuan-triet',
    title: 'Phá Toái Phụ Mẫu + Sát Bại / Tuần / Triệt - cha mẹ chia ly',
    sao: ['Phá Toái'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp', 'Tuần', 'Triệt'],
    doUuTien: 70,
    tomTat: `Khi Phá Toái cư Phụ Mẫu gặp sát bại tinh hoặc Tuần, Triệt, duyên
cha mẹ của đương số bị giảm rõ rệt — có khả năng dẫn tới chia ly.`,
  },

  {
    id: 'pha-toai-tai-phuc-duc',
    title: 'Phá Toái tại Phúc Đức',
    sao: ['Phá Toái'],
    cung: ['Phúc Đức'],
    doUuTien: 72,
    tomTat: `Phá Toái cư Phúc Đức thường ứng vào mồ tổ tiên dễ bị chắn ngang,
cản trở xung quanh. Trong dòng họ nhiều người có cái tôi cao nên hay xảy ra
bất đồng, cãi nhau; con cháu dễ xung khắc, "bằng mặt không bằng lòng".`,
  },

  {
    id: 'pha-toai-phuc-duc-linh-tinh',
    title: 'Phá Toái Phúc Đức + Linh Tinh - phiền muộn tăng',
    sao: ['Phá Toái'],
    cung: ['Phúc Đức'],
    ketHop: ['Linh Tinh'],
    doUuTien: 67,
    tomTat: `Khi Phá Toái Phúc Đức gặp Linh Tinh, nỗi phiền muộn của đương số
càng tăng.`,
  },

  {
    id: 'pha-toai-phuc-duc-kinh-da-ky-rieu',
    title: 'Phá Toái Phúc Đức + Kình Đà / Hóa Kỵ / Thiên Riêu - nói ngọng nói lắp',
    sao: ['Phá Toái'],
    cung: ['Phúc Đức'],
    ketHop: ['Kình Dương', 'Đà La', 'Hóa Kỵ', 'Thiên Riêu'],
    doUuTien: 67,
    tomTat: `Khi Phá Toái Phúc Đức đi cùng Kình Dương, Đà La, Hóa Kỵ hoặc
Thiên Riêu, đương số thường mắc tật nói ngọng hoặc nói lắp.`,
  },

  {
    id: 'pha-toai-tai-dien-trach',
    title: 'Phá Toái tại Điền Trạch - cột điện chắn cửa',
    sao: ['Phá Toái'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Khi Phá Toái cư Điền Trạch, ngôi nhà của đương số thường bị chắn
phía trước hoặc chắn ngang — có thể là cột điện chắn trước cửa, cũng có thể
là cây cối án ngữ lối ra vào.

Về quan hệ, đương số hay gây bất bình với hàng xóm xung quanh, làm một mình
một kiểu nên dễ gây xung đột. Quan hệ với láng giềng không hòa thuận, dễ
"lời ra tiếng vào".`,
  },

  {
    id: 'pha-toai-tai-quan-loc',
    title: 'Phá Toái tại Quan Lộc',
    sao: ['Phá Toái'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `Phá Toái cư Quan Lộc cản trở con đường công danh của đương số.
Chủ mệnh có cái tôi cao nên khó kết hợp làm nhóm, hay phá ngang. Trong công
việc và học tập, đương số thường xuyên bị người khác cản trở, phá ngang ý
định của mình.`,
  },

  {
    id: 'pha-toai-quan-loc-tu-phu-dong-luong-quang-quy',
    title: 'Phá Toái Quan + Tử Phủ + Đồng Lương + Quang Quý - bác sỹ tai mũi họng',
    sao: ['Phá Toái'],
    cung: ['Quan Lộc'],
    ketHop: ['Tử Vi', 'Thiên Phủ', 'Thiên Đồng', 'Thiên Lương', 'Ân Quang', 'Thiên Quý'],
    doUuTien: 73,
    tomTat: `Khi Phá Toái Quan Lộc hội cùng Tử Vi, Thiên Phủ, Thiên Đồng,
Thiên Lương, Ân Quang và Thiên Quý, đương số rất hợp với nghề bác sỹ tai
mũi họng.

Đây là cách hóa giải đẹp Phá Toái — vì hình tượng của sao là cuống họng,
nên làm nghề chữa trị cuống họng (tai-mũi-họng) chính là đắc cách.`,
  },

  {
    id: 'pha-toai-tai-no-boc',
    title: 'Phá Toái tại Nô Bộc',
    sao: ['Phá Toái'],
    cung: ['Nô Bộc'],
    doUuTien: 70,
    tomTat: `Khi Phá Toái cư Nô Bộc, bạn bè, đồng nghiệp và cấp dưới của đương
số hay phá ngang, chơi xỏ, cản trở công việc lẫn cuộc sống. Bạn bè có cái
tôi cao, hay áp đặt — rất khó chơi.

Lời khuyên cho chủ mệnh là "chọn bạn mà chơi" và đề cao cảnh giác trong
giao tiếp.`,
  },

  {
    id: 'pha-toai-no-boc-cat-tinh',
    title: 'Phá Toái Nô + Cát Tinh - quan hệ bất hòa nhỏ vẫn bền chặt',
    sao: ['Phá Toái'],
    cung: ['Nô Bộc'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt', 'Ân Quang', 'Thiên Quý'],
    doUuTien: 65,
    tomTat: `Khi Phá Toái Nô Bộc gặp Lục Cát hoặc Quang Quý, mối quan hệ của
đương số đôi khi vẫn có bất hòa nhỏ, nhưng nhìn chung vẫn tốt đẹp và bền
chặt.`,
  },

  {
    id: 'pha-toai-tai-thien-di',
    title: 'Phá Toái tại Thiên Di',
    sao: ['Phá Toái'],
    cung: ['Thiên Di'],
    doUuTien: 72,
    tomTat: `Khi Phá Toái cư Thiên Di, đương số ra ngoài hay bị cản trở, áp
đặt và phá ngang. Bản thân chủ mệnh ra ngoài cái tôi rất cao, hay ngang
ngược phá phách, thích đi ngược đám đông. Vì thế dễ gặp rắc rối và ngăn
trở trong di chuyển hoặc công việc.`,
  },

  {
    id: 'pha-toai-thien-di-kinh-da-rieu-ky',
    title: 'Phá Toái Di + Kình / Đà / Riêu / Kỵ - ứng nghiệm mạnh',
    sao: ['Phá Toái'],
    cung: ['Thiên Di'],
    ketHop: ['Kình Dương', 'Đà La', 'Thiên Riêu', 'Hóa Kỵ'],
    doUuTien: 67,
    tomTat: `Khi Phá Toái Thiên Di đi cùng Kình Dương, Đà La, Thiên Riêu hoặc
Hóa Kỵ, các đặc tính trên càng ứng nghiệm mạnh — đương số khó thuận lợi
trong môi trường xã hội.`,
  },

  {
    id: 'pha-toai-tai-tat-ach',
    title: 'Phá Toái tại Tật Ách - cuống họng amidan',
    sao: ['Phá Toái'],
    cung: ['Tật Ách'],
    doUuTien: 80,
    tomTat: `Phá Toái tại Tật Ách mang một nét nghịch lý thú vị — đương số
thường ít bệnh, có khả năng đánh tan bệnh tật. Lý do là Phá Toái chủ sự hao
tán (giống Đại Hao, Tiểu Hao), nên bệnh đến cũng tán đi.

Bệnh đặc trưng của sao này gắn với hình tượng cuống họng — đương số dễ
mắc các chứng amidan, áp xe, viêm họng.

Ngoài ra Phá Toái thủ Tật còn chủ về bệnh quái gở: cách phản ứng và trở
bệnh riêng, khác thường, khó phát hiện và nhận định.`,
  },

  {
    id: 'pha-toai-tat-ach-khong-kiep',
    title: 'Phá Toái Tật + Không Kiếp - ung thư phổi vòm họng',
    sao: ['Phá Toái'],
    cung: ['Tật Ách'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 75,
    tomTat: `Khi Phá Toái Tật Ách hội cùng **Địa Không** và **Địa Kiếp**, các
biểu hiện càng rõ rệt — đương số dễ mắc ung thư phổi hoặc ung thư vòm họng.`,
  },

  {
    id: 'pha-toai-tat-ach-kinh-da-ky-rieu',
    title: 'Phá Toái Tật + Kình Đà + Hóa Kỵ + Thiên Riêu - nói ngọng nói lắp',
    sao: ['Phá Toái'],
    cung: ['Tật Ách'],
    ketHop: ['Kình Dương', 'Đà La', 'Hóa Kỵ', 'Thiên Riêu'],
    doUuTien: 75,
    tomTat: `Khi Phá Toái Tật Ách đi cùng Kình Dương, Đà La, Hóa Kỵ và Thiên
Riêu, đương số chủ về tật nói ngọng hoặc nói lắp.`,
  },

  {
    id: 'pha-toai-tat-ach-hoa-linh',
    title: 'Phá Toái Tật + Hỏa / Linh - bệnh nan y',
    sao: ['Phá Toái'],
    cung: ['Tật Ách'],
    ketHop: ['Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 75,
    tomTat: `Khi Phá Toái Tật Ách gặp Hỏa Tinh hoặc Linh Tinh, đương số dễ
mắc bệnh nan y.`,
  },

  {
    id: 'pha-toai-tai-tai-bach',
    title: 'Phá Toái tại Tài Bạch',
    sao: ['Phá Toái'],
    cung: ['Tài Bạch'],
    doUuTien: 72,
    tomTat: `Khi Phá Toái cư Tài Bạch, con đường tiền bạc của đương số dễ bị
cản trở và phá ngang. Chủ mệnh tiêu tiền theo cách khác người, "một mình một
kiểu, mặc ai can ngăn", chi tiêu không hợp lý — dù nhận được nhiều lời
khuyên vẫn cố chấp giữ ý mình.`,
  },

  {
    id: 'pha-toai-tai-bach-khong-kiep-kiep-sat',
    title: 'Phá Toái Tài + Không / Kiếp / Kiếp Sát - khủng hoảng tài chính',
    sao: ['Phá Toái'],
    cung: ['Tài Bạch'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Kiếp Sát'],
    doUuTien: 67,
    tomTat: `Khi Phá Toái Tài Bạch hội cùng **Địa Không**, **Địa Kiếp** hoặc
Kiếp Sát, đương số rơi vào khủng hoảng tài chính, túng thiếu — thậm chí
có thể làm tiêu tán sản nghiệp gia đình.`,
  },

  {
    id: 'pha-toai-tai-tu-tuc',
    title: 'Phá Toái tại Tử Tức',
    sao: ['Phá Toái'],
    cung: ['Tử Tức'],
    doUuTien: 72,
    tomTat: `Phá Toái cư Tử Tức cản trở đường con cái của đương số, làm giảm
bớt số lượng — có khả năng hiếm muộn hoặc con cái không như kỳ vọng.

Về tính cách, con cái của đương số thường bướng bỉnh, ngang tàng, không
nghe lời bố mẹ và hay làm điều ngược lại.`,
  },

  {
    id: 'pha-toai-tu-tuc-tang-ho-khoc',
    title: 'Phá Toái Tử Tức + Tang Môn / Bạch Hổ / Thiên Khốc - lận đận con cái',
    sao: ['Phá Toái'],
    cung: ['Tử Tức'],
    ketHop: ['Tang Môn', 'Bạch Hổ', 'Thiên Khốc'],
    doUuTien: 67,
    tomTat: `Khi Phá Toái Tử Tức đi cùng Tang Môn, Bạch Hổ hoặc Thiên Khốc,
đương số càng lận đận về đường con cái.`,
  },

  {
    id: 'pha-toai-tu-tuc-da-ky',
    title: 'Phá Toái Tử Tức + Đà La / Hóa Kỵ - con bướng bỉnh',
    sao: ['Phá Toái'],
    cung: ['Tử Tức'],
    ketHop: ['Đà La', 'Hóa Kỵ'],
    doUuTien: 67,
    tomTat: `Khi Phá Toái Tử Tức gặp Đà La hoặc Hóa Kỵ, con cái đương số bướng
bỉnh không nghe lời, khiến cha mẹ phiền muộn.`,
  },

  {
    id: 'pha-toai-tai-phu-the',
    title: 'Phá Toái tại Phu Thê',
    sao: ['Phá Toái'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `Khi Phá Toái cư Phu Thê, người hôn phối của đương số có cái tôi
cao, hai vợ chồng mỗi người một tính, hay cãi nhau, phá đám và ngang ngược
— "trống đánh xuôi kèn thổi ngược".

Đi vào cụ thể, đương số vất vả còn người hôn phối ngang ngạnh vô cùng,
thích làm gì thì tùy ý, đôi khi sai trái vẫn cãi cố cho bằng được. Vì thế
Phá Toái cư cung Phu Thê rất dễ vì chuyện cãi cọ mà vợ chồng bất hòa, ly
dị.`,
  },

  {
    id: 'pha-toai-phu-the-sat-bai-tinh',
    title: 'Phá Toái Phu Thê + Sát Bại Tinh - khó bền duyên',
    sao: ['Phá Toái'],
    cung: ['Phu Thê'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 73,
    tomTat: `Khi Phá Toái Phu Thê gặp các sát bại tinh (Kình, Đà, Hỏa, Linh,
**Không**, **Kiếp**), duyên vợ chồng của đương số khó được bền lâu.`,
  },

  {
    id: 'pha-toai-phu-the-kinh-da-ky-hoa-linh-rieu',
    title: 'Phá Toái Phu Thê + Kình / Đà / Kỵ / Hỏa / Linh / Riêu - ly thân ly hôn',
    sao: ['Phá Toái'],
    cung: ['Phu Thê'],
    ketHop: ['Kình Dương', 'Đà La', 'Hóa Kỵ', 'Hỏa Tinh', 'Linh Tinh', 'Thiên Riêu'],
    doUuTien: 73,
    tomTat: `Khi Phá Toái Phu Thê đi cùng Kình Dương, Đà La, Hóa Kỵ, Hỏa Linh
hoặc Thiên Riêu, duyên phận càng mong manh — dễ dẫn tới ly thân, ly hôn.`,
  },

  {
    id: 'pha-toai-phu-the-cat-tinh',
    title: 'Phá Toái Phu Thê + Cát Tinh - va chạm thành trải nghiệm',
    sao: ['Phá Toái'],
    cung: ['Phu Thê'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 73,
    tomTat: `Khi Phá Toái Phu Thê gặp Lục Cát Tinh, những va chạm ban đầu
giữa hai vợ chồng lại trở thành trải nghiệm giúp đôi bên rút kinh nghiệm,
biết nhường nhịn và dần tốt lên.`,
  },

  {
    id: 'pha-toai-tai-huynh-de',
    title: 'Phá Toái tại Huynh Đệ',
    sao: ['Phá Toái'],
    cung: ['Huynh Đệ'],
    doUuTien: 70,
    tomTat: `Khi Phá Toái cư Huynh Đệ, anh chị em của đương số khó hòa hợp,
hay bất đồng ý kiến và quan điểm, không thể cùng đi đến một kết luận —
"chung giọt máu nhưng không chung lòng".

Đặc biệt nếu anh em ở chung càng dễ nảy sinh xích mích và tranh cãi khó hòa
giải.`,
  },

  {
    id: 'pha-toai-huynh-de-co-qua-ky',
    title: 'Phá Toái Huynh Đệ + Cô Thần / Quả Tú / Hóa Kỵ - thể hiện rõ nét',
    sao: ['Phá Toái'],
    cung: ['Huynh Đệ'],
    ketHop: ['Cô Thần', 'Quả Tú', 'Hóa Kỵ'],
    doUuTien: 65,
    tomTat: `Khi Phá Toái Huynh Đệ đi cùng Cô Thần, Quả Tú hoặc Hóa Kỵ, các
biểu hiện trên càng thể hiện rõ nét.`,
  },

  {
    id: 'pha-toai-luu-ha-pha-quan',
    title: 'Phá Toái + Lưu Hà + Phá Quân - Phá Toái Quân Lưỡng Phủ',
    sao: ['Phá Toái'],
    ketHop: ['Lưu Hà', 'Phá Quân'],
    doUuTien: 80,
    tomTat: `Khi Phá Toái đồng cung Lưu Hà và Phá Quân, lá số hình thành cách
**Phá Toái Quân Lưỡng Phủ** — một trong những cách đẹp nhất của Phá Toái.

Đương số có cách này rất uy hùng, hiển đạt về võ nghiệp, có nhiều chiến
tích — biến hung tinh thành tướng quân uy dũng.

Cùng với cách Tử Phủ Đồng Lương + Quang Quý (bác sỹ tai mũi họng), đây là
hai cách hóa giải đẹp nhất của Phá Toái.`,
  },

  {
    id: 'pha-toai-khoa-quyen-phat-kien-moi',
    title: 'Phá Toái + Hóa Khoa / Hóa Quyền - phát kiến mới',
    sao: ['Phá Toái'],
    ketHop: ['Hóa Khoa', 'Hóa Quyền'],
    doUuTien: 70,
    tomTat: `Khi Phá Toái gặp Hóa Khoa và Hóa Quyền, cách cục trở nên tốt đẹp.
Đương số hay có phát kiến mới, dám đi ngược với quan niệm cũ; tư duy đột
phá, sáng tạo. Nhờ tính bướng bỉnh kết hợp với trí tuệ, chủ mệnh có thể tạo
ra những đổi mới có giá trị.

Đây là cách chuyển hóa tích cực Phá Toái — biến ngang ngược thành phá cách
sáng tạo.`,
  },

  {
    id: 'pha-toai-kinh-ky-noi-ngong',
    title: 'Phá Toái + Kình + Kỵ - tật nói ngọng nói lắp',
    sao: ['Phá Toái'],
    ketHop: ['Kình Dương', 'Hóa Kỵ', 'Thiên Riêu', 'Phá Quân'],
    doUuTien: 70,
    tomTat: `Khi Phá Toái đi cùng Kình Dương, Hóa Kỵ và Thiên Riêu (có thể
thêm Phá Quân), đương số thường mang tật về phát âm: nói ngọng, nói lắp,
ngang ngược trong giao tiếp; phát âm khó rõ, lời nói ra thiếu trôi chảy.

Hệ quả là chủ mệnh có khi khiến người khác hiểu lầm, giao tiếp bị hạn chế,
khó thuyết phục được người đối diện. Công việc và các mối quan hệ vì thế
gặp nhiều khó khăn, cản trở.`,
  },

  {
    id: 'pha-toai-hoa-linh-hinh',
    title: 'Phá Toái + Hỏa/Linh + Thiên Hình - chết vì ác bệnh',
    sao: ['Phá Toái'],
    ketHop: ['Hỏa Tinh', 'Linh Tinh', 'Thiên Hình'],
    doUuTien: 70,
    tomTat: `Khi Phá Toái gặp Hỏa Tinh hoặc Linh Tinh đi cùng Thiên Hình,
đương số có nguy cơ chết vì ác tật, ác bệnh — bệnh không thể chữa khỏi.

Đây là cách cục cực hung trong tử vi — chủ mệnh cần đặc biệt kiểm tra sức
khỏe định kỳ và phát hiện bệnh sớm.`,
  },

  {
    id: 'pha-toai-hoa-linh-khong-kiep-nan-y',
    title: 'Phá Toái + Hỏa Linh + Không Kiếp - bệnh hiểm nghèo',
    sao: ['Phá Toái'],
    ketHop: ['Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Khi Phá Toái gặp Hỏa Tinh, Linh Tinh đi cùng **Địa Không** và
**Địa Kiếp**, nguy cơ mắc bệnh hiểm nghèo càng cao. Các bệnh nan y có thể
ứng vào đương số gồm ung thư, xuất huyết não, viêm thanh quản, các chứng
liên quan đến phổi và vòm họng.

Lời khuyên cho chủ mệnh là chăm sóc sức khỏe từ sớm, đề phòng bệnh nặng
khó chữa.`,
  },

  {
    id: 'pha-toai-vu-khuc-tay-chan',
    title: 'Phá Toái + Vũ Khúc / Sát / Tham - tai họa tay chân',
    sao: ['Phá Toái'],
    ketHop: ['Vũ Khúc', 'Thất Sát', 'Tham Lang'],
    doUuTien: 65,
    tomTat: `Khi Phá Toái đồng cung hoặc hội chiếu Vũ Khúc, Thất Sát hoặc
Tham Lang, đương số dễ gặp tai họa liên quan đến tay chân: gãy xương, tai
nạn chấn thương trong lao động, tai nạn giao thông.

Lời khuyên: chủ mệnh nên thận trọng khi đi lại, vận hành máy móc, và tránh
làm việc trong môi trường nguy hiểm.`,
  },

  {
    id: 'pha-toai-loi-khuyen',
    title: 'Lời khuyên cho người Phá Toái',
    sao: ['Phá Toái'],
    doUuTien: 35,
    tomTat: `Đương số có Phá Toái dẫu biết "lành ít dữ nhiều", nhưng không
phải vì thế mà buông xuôi số phận. Triết lý "đức năng thắng số" cho thấy
cái tâm, cái đức của con người hoàn toàn có khả năng làm dịu bớt sự khắc
nghiệt của lá số.

Yếu điểm cần khắc phục:

- Ngoan cố, ngang ngược
- Cái tôi cao, ích kỷ
- Hay phá ngang, hao tài
- Bệnh cuống họng, amidan, nói ngọng

Bí quyết phát huy Phá Toái dành cho chủ mệnh:

- Rèn tính kiên trì
- Bớt nóng nảy, ương bướng
- Hạ cái tôi xuống để hung tính được giảm bớt
- Học cách hợp tác với người khác
- Chọn bạn mà chơi
- Chăm sóc sức khỏe cuống họng, hô hấp
- Phát huy mặt sáng tạo, đột phá (đặc biệt khi có Hóa Khoa, Hóa Quyền)

Khi tu dưỡng đúng cách, cuộc đời đương số từ đó cũng thêm phần hanh thông.`,
  },
];
