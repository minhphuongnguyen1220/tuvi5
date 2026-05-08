import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO ĐIẾU KHÁCH - Hỏa, Bại Tinh, vòng Thái Tuế (vị trí 11).
 * Tam hợp Tang Tuế Điếu (Tang Môn + Thái Tuế + Điếu Khách) - phần CHUNG đã viết tại tang-mon.ts.
 * Nhị hợp Hồng Loan, Lục Hại Thiên Hỷ.
 * Mã Khốc Khách (Thiên Mã + Thiên Khốc + Điếu Khách) đã viết tại thien-ma.ts.
 * Tang Hổ Điếu Binh (Tứ Hung) đã viết tại bach-ho.ts.
 *
 *: SAO CUỐI hoàn tất vòng Thái Tuế 12/12!
 */
export const luanGiai_DieuKhach: DoanLuanGiai[] = [
  {
    id: 'dieu-khach-tinh-chat-chung',
    title: 'Điếu Khách - Đặc tính chung',
    sao: ['Điếu Khách'],
    doUuTien: 32,
    tomTat: `**Điếu Khách** thuộc nhóm phụ tinh, mang tính bại tinh trong vòng Thái
Tuế và đứng ở vị trí thứ 11. Ngũ hành thuộc Hỏa, hóa khí là bại tinh.

Về vị thế trong lá số:

- Tam hợp Tang - Tuế - Điếu cùng Tang Môn và Thái Tuế
- Nhị hợp với Hồng Loan, lục hại với Thiên Hỷ
- Có thể tam hợp hoặc đồng cung với Thiên Mã

Chiết tự tên sao cũng nói lên tính chất: "Khách" mang nghĩa lữ khách, khách
phương xa, thực khách hay quý khách; "Điếu" có thể hiểu là lời văn tiếng nói,
cũng có thể là văn điếu - lời chia buồn. Vì thế Điếu Khách chủ về chia buồn,
ăn chơi và đi xa.

Đặc tính nổi bật của sao là ăn chơi, phá sản, tài ăn nói cùng những mặt phụ
như nói phét, khoác lác, tiệc tùng, phù phiếm và văn điếu chia buồn.`,
  },

  {
    id: 'dieu-khach-ma-khoc-khach',
    title: 'Mã Khốc Khách (Thiên Mã + Thiên Khốc + Điếu Khách) - Ngựa rung chuông vàng',
    sao: ['Điếu Khách'],
    ketHop: ['Thiên Mã', 'Thiên Khốc'],
    doUuTien: 80,
    tomTat: `Khi Điếu Khách hội cùng Thiên Mã và Thiên Khốc, đương số có cách
**Mã Khốc Khách** - còn gọi là "ngựa rung chuông vàng". Đây là cách cục rất
quý trong khoa tử vi.

Phân tích tính chất từng sao:

- Thiên Khốc chủ về buồn bã, thiệt thòi
- Điếu Khách chủ về ăn chơi, đi xa
- Thiên Mã chủ về may mắn và nghị lực

Khi ba sao kết lại, nỗi buồn của Khốc, sự xa cách của Khách và động lực của
Mã hòa nhập với nhau, biến thành động lực tiến lên. Đương số là người giàu
nghị lực, gặp nhiều khó khăn vẫn vượt qua được, đi xa thì thành đạt.

Đây là cách cục đẹp nhất của Điếu Khách - biến bại tinh thành quý tinh.`,
  },

  {
    id: 'dieu-khach-tu-ngo-mao-dau-co-qua',
    title: 'Điếu Khách tại Tý/Ngọ/Mão/Dậu - đồng cung Quả Tú + tam hợp Cô Thần',
    sao: ['Điếu Khách'],
    chi: ['Tý', 'Ngọ', 'Mão', 'Dậu'],
    doUuTien: 75,
    tomTat: `Đặc biệt với bốn người tuổi Tý, Ngọ, Mão, Dậu, do quy luật an sao
bắt buộc, Điếu Khách luôn đồng cung với Quả Tú và tam hợp với Cô Thần.

Đặc trưng của đương số:

- Tính tự lập rất cao
- Luôn tìm tòi cái mới trong công việc
- Làm việc lọ mọ và chăm chỉ

Sao Cô - Quả vốn mang tính cô độc; khi đi cùng Điếu Khách, đương số thường
có chuyên môn giỏi, chịu khó nghiên cứu và sáng tạo.

Đây là một cách hóa giải tính ăn chơi của Điếu Khách - biến bại tinh thành
chuyên gia ngành nghề.`,
  },

  {
    id: 'dieu-khach-tai-menh',
    title: 'Điếu Khách tại Mệnh - ăn chơi hưởng lạc',
    sao: ['Điếu Khách'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Khi Điếu Khách thủ Mệnh, đương số là người phong khoáng, có tài
ăn nói và giỏi giao tiếp. Bên cạnh đó, đương số dễ đam mê cờ bạc, thích vận
đỏ đen, ăn chơi hưởng lạc và đam mê các thú vui phù phiếm. Cả nam và nữ mệnh
đều ham vui ham chơi, thích đi mua sắm không tiếc tay.

Về mặt ngôn ngữ, đương số thích nói, thích vui, thích "chém gió", dễ trở
thành người ba hoa, bốc phét, nói phét hay khoác lác. Lời nói có sức thu hút
nhưng đôi khi quá đà khiến người nghe bán tín bán nghi.

Do cấu trúc tam hợp Tang - Tuế - Điếu, đương số mặc định chi tiêu không có
chủ đích và luôn lo lắng trong công việc.

Cảnh báo cần lưu ý:

- Thẩm mỹ chỉ chú ý vẻ ngoài hào nhoáng hơn giá trị lâu dài
- Chi tiêu như "ngựa hoang đứt dây cương"
- Thích cờ bạc, dễ tạo nợ nần và phải vay mượn khắp nơi
- Vì tam hợp Tang - Tuế - Điếu, đương số dễ chán nản, buồn vu vơ và lo lắng`,
  },

  {
    id: 'dieu-khach-van-tinh',
    title: 'Điếu Khách + Văn Tinh - học hành chăm chỉ',
    sao: ['Điếu Khách'],
    ketHop: ['Văn Xương', 'Văn Khúc'],
    doUuTien: 70,
    tomTat: `Khi Điếu Khách hội cùng nhiều văn tinh như Văn Xương, Văn Khúc,
đương số trở thành người học hành siêng năng, đam mê công việc, mải mê kiếm
tiền chứ không còn đam mê cờ bạc nữa. Tài ăn nói nay được kết hợp với trí
tuệ, giúp đương số có khả năng thuyết phục và hùng biện.

Đây là cách chuyển hóa Điếu Khách từ ăn chơi sang học hành chăm chỉ. Cùng
với hai cách hóa giải khác - Mã Khốc Khách và đồng cung Cô - Quả - đây là
ba con đường giải tính xấu của Điếu Khách.`,
  },

  {
    id: 'dieu-khach-chinh-tinh-an-choi',
    title: 'Điếu Khách + Chính Tinh ăn chơi - tăng độ hào phóng',
    sao: ['Điếu Khách'],
    ketHop: ['Thiên Đồng', 'Tham Lang', 'Thái Âm', 'Liêm Trinh', 'Thiên Phủ'],
    doUuTien: 70,
    tomTat: `Khi Điếu Khách gặp các chính tinh có thiên hướng ăn chơi như
Thiên Đồng, Tham Lang, Thái Âm, Liêm Trinh hay Thiên Phủ, độ ăn chơi và hào
phóng càng tăng theo từng nét tính cách:

- Thiên Đồng đem đến sự ăn chơi hưởng lạc bẩm sinh
- Tham Lang nghiêng về đào hoa, hưởng thụ và cờ bạc
- Thái Âm khiến đa cảm, lãng mạn quá mức
- Liêm Trinh tạo nét cứng đầu, đam mê đến cùng
- Thiên Phủ giàu có nhưng tiêu hoang

Trong trường hợp này, cần xét thêm Lục Sát Tinh, ám tinh cùng Tuần Triệt mới
có thể kết luận chính xác.`,
  },

  {
    id: 'dieu-khach-chinh-tinh-an-choi-sat-tinh',
    title: 'Điếu Khách + Chính Tinh ăn chơi + Sát tinh - cờ bạc nợ nần',
    sao: ['Điếu Khách'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 65,
    tomTat: `Khi Điếu Khách đã đi cùng các chính tinh ăn chơi (Đồng, Tham, Âm,
Liêm, Phủ) lại còn gặp thêm Lục Sát tinh, đương số càng dễ dính dáng đến cờ
bạc và nợ nần.`,
  },

  {
    id: 'dieu-khach-tai-phu-mau',
    title: 'Điếu Khách tại Phụ Mẫu',
    sao: ['Điếu Khách'],
    cung: ['Phụ Mẫu'],
    doUuTien: 72,
    tomTat: `Khi Điếu Khách đóng tại Phụ Mẫu, cha mẹ của đương số là người ăn
chơi, phong khoáng và hay đi đó đi đây. Quan hệ giữa cha mẹ và con cái mang
tính xã giao, thiếu sự gần gũi và thân mật; cha mẹ như khách đến nhà, có
khuynh hướng xa cách.

Vì Điếu Khách cũng là sao chủ về buồn phiền và cờ bạc, bố mẹ của đương số
cũng dễ rơi vào cảnh ly tán.`,
  },

  {
    id: 'dieu-khach-tai-phu-mau-sat',
    title: 'Điếu Khách + Sát tinh tại Phụ Mẫu - bố mẹ ly tán',
    sao: ['Điếu Khách'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 67,
    tomTat: `Khi Điếu Khách tại Phụ Mẫu lại gặp thêm Lục Sát tinh, mối quan hệ
giữa cha mẹ và con cái càng dễ đổ vỡ; bố mẹ ly tán hoặc rơi vào buồn phiền,
vướng vào tệ nạn.`,
  },

  {
    id: 'dieu-khach-tai-phu-mau-hoa-ky',
    title: 'Điếu Khách + Hóa Kỵ tại Phụ Mẫu - bố mẹ ly tán',
    sao: ['Điếu Khách'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 67,
    tomTat: `Khi Điếu Khách tại Phụ Mẫu gặp thêm Hóa Kỵ, mối quan hệ giữa cha
mẹ và con cái càng dễ đổ vỡ; bố mẹ ly tán hoặc rơi vào buồn phiền, vướng vào
tệ nạn.`,
  },

  {
    id: 'dieu-khach-tai-phu-mau-thien-hinh',
    title: 'Điếu Khách + Thiên Hình tại Phụ Mẫu - bố mẹ ly tán',
    sao: ['Điếu Khách'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Thiên Hình'],
    doUuTien: 67,
    tomTat: `Khi Điếu Khách tại Phụ Mẫu gặp thêm Thiên Hình, mối quan hệ giữa
cha mẹ và con cái càng dễ đổ vỡ; bố mẹ ly tán hoặc rơi vào buồn phiền, vướng
vào tệ nạn.`,
  },

  {
    id: 'dieu-khach-tai-phuc-duc',
    title: 'Điếu Khách tại Phúc Đức',
    sao: ['Điếu Khách'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `Khi Điếu Khách đóng tại Phúc Đức (đương số mặc định bị Thái Tuế
chiếu chủ thân), tính cách của đương số có nhiều nét đáng quý: tài ăn nói
tốt, thẳng thắn, tôn trọng sự thật, dám nghĩ dám làm và có thể gánh vác được
việc lớn.

Mặt khó nằm ở chiều sâu tâm lý: trong suy nghĩ ẩn giấu luôn có những bất
mãn, tinh thần khó được yên ổn.

Xét theo dòng họ, đời trước của đương số có người ăn chơi, cờ bạc và nợ nần.
Trong họ thường có những tiệc tùng to lớn hoặc phải đi xa để tìm kiếm cơ
hội.`,
  },

  {
    id: 'dieu-khach-tai-phuc-duc-dai-hao',
    title: 'Điếu Khách + Đại Hao tại Phúc Đức - liên lụy họ hàng',
    sao: ['Điếu Khách'],
    cung: ['Phúc Đức'],
    ketHop: ['Đại Hao'],
    doUuTien: 70,
    tomTat: `Khi Điếu Khách tại Phúc Đức gặp thêm Đại Hao, đương số dễ bị liên
lụy từ họ hàng do đời trước ăn chơi cờ bạc nợ nần.`,
  },

  {
    id: 'dieu-khach-tai-phuc-duc-tieu-hao',
    title: 'Điếu Khách + Tiểu Hao tại Phúc Đức - liên lụy họ hàng',
    sao: ['Điếu Khách'],
    cung: ['Phúc Đức'],
    ketHop: ['Tiểu Hao'],
    doUuTien: 70,
    tomTat: `Khi Điếu Khách tại Phúc Đức gặp thêm Tiểu Hao, đương số dễ bị liên
lụy từ họ hàng do đời trước ăn chơi cờ bạc nợ nần.`,
  },

  {
    id: 'dieu-khach-tai-phuc-duc-thien-ma',
    title: 'Điếu Khách + Thiên Mã tại Phúc Đức - liên lụy họ hàng',
    sao: ['Điếu Khách'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Mã'],
    doUuTien: 70,
    tomTat: `Khi Điếu Khách tại Phúc Đức gặp thêm Thiên Mã, đương số dễ bị liên
lụy từ họ hàng do đời trước ăn chơi cờ bạc nợ nần.`,
  },

  {
    id: 'dieu-khach-tai-phuc-duc-da-la',
    title: 'Điếu Khách + Đà La tại Phúc Đức - liên lụy họ hàng',
    sao: ['Điếu Khách'],
    cung: ['Phúc Đức'],
    ketHop: ['Đà La'],
    doUuTien: 70,
    tomTat: `Khi Điếu Khách tại Phúc Đức gặp thêm Đà La, đương số dễ bị liên
lụy từ họ hàng do đời trước ăn chơi cờ bạc nợ nần.`,
  },

  {
    id: 'dieu-khach-tai-phuc-duc-thien-rieu',
    title: 'Điếu Khách + Thiên Riêu tại Phúc Đức - liên lụy họ hàng',
    sao: ['Điếu Khách'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Riêu'],
    doUuTien: 70,
    tomTat: `Khi Điếu Khách tại Phúc Đức gặp thêm Thiên Riêu, đương số dễ bị
liên lụy từ họ hàng do đời trước ăn chơi cờ bạc nợ nần.`,
  },

  {
    id: 'dieu-khach-tai-phuc-duc-hoa-ky',
    title: 'Điếu Khách + Hóa Kỵ tại Phúc Đức - liên lụy họ hàng',
    sao: ['Điếu Khách'],
    cung: ['Phúc Đức'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `Khi Điếu Khách tại Phúc Đức gặp thêm Hóa Kỵ, đương số dễ bị liên
lụy từ họ hàng do đời trước ăn chơi cờ bạc nợ nần.`,
  },

  {
    id: 'dieu-khach-tai-phuc-duc-dia-kiep',
    title: 'Điếu Khách + Địa Kiếp tại Phúc Đức - liên lụy họ hàng',
    sao: ['Điếu Khách'],
    cung: ['Phúc Đức'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Khi Điếu Khách tại Phúc Đức gặp thêm Địa Kiếp, đương số dễ bị liên
lụy từ họ hàng do đời trước ăn chơi cờ bạc nợ nần.`,
  },

  {
    id: 'dieu-khach-tai-dien-trach',
    title: 'Điếu Khách tại Điền Trạch',
    sao: ['Điếu Khách'],
    cung: ['Điền Trạch'],
    doUuTien: 72,
    tomTat: `Khi Điếu Khách đóng tại Điền Trạch, đương số có nhà cửa đẹp, ưa
trang trí làm đẹp cho nơi ở. Nơi ở thường thay đổi nhiều lần, được đi đến
nhiều nơi; văn phòng, công ty, nhà xưởng cũng hay phải di chuyển.

Một đặc trưng nổi bật là kiểu "vẽ rồng vẽ phượng": đương số chú trọng trang
hoàng nhà cửa lộng lẫy bên ngoài để khoe với người khác, nhưng "vẽ rồng vẽ
phượng mà ruột rỗng tuếch" khiến mọi người nhìn vào thấy giả tạo. Người
ngưỡng mộ thì ít mà bàn ra tán vào thì nhiều.

Vì mang bản chất "động", Điếu Khách khiến chủ mệnh thường phải chuyển văn
phòng, công ty, nhà ở nhiều lần trong đời.`,
  },

  {
    id: 'dieu-khach-tai-quan-loc',
    title: 'Điếu Khách tại Quan Lộc',
    sao: ['Điếu Khách'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `Khi Điếu Khách đóng tại Quan Lộc, đương số làm việc trong môi
trường tiệc tùng, có quan khách tới lui thường xuyên, hoặc làm các công việc
mang tính dịch vụ.

Mặt khó là phải đi lại nhiều, hay thay đổi công việc và công việc thường
không thuận lợi.

Tính chất "bận rộn" này được nhìn nhận khác nhau giữa xã hội xưa và nay:

- Trong xã hội xưa, sự bận rộn đồng nghĩa với vất vả, đương số thuộc tầng
  lớp lao động hoặc dưới trướng người quyền quý
- Trong xã hội hiện đại, sự bận rộn đem lại tiền tài dễ kiếm dù vẫn phải
  đánh đổi sức lực`,
  },

  {
    id: 'dieu-khach-tai-quan-loc-ma-khoc-khach',
    title: 'Điếu Khách + Thiên Mã + Thiên Khốc tại Quan Lộc - Mã Khốc Khách',
    sao: ['Điếu Khách'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Mã', 'Thiên Khốc'],
    doUuTien: 73,
    tomTat: `Khi Điếu Khách tại Quan Lộc kết hợp với Thiên Mã và Thiên Khốc,
đương số thành cách Mã Khốc Khách - một cách rất tốt. Công việc gặp nhiều
may mắn, dễ kiếm tiền và mang tính đưa đón, bận rộn.`,
  },

  {
    id: 'dieu-khach-tai-no-boc',
    title: 'Điếu Khách tại Nô Bộc',
    sao: ['Điếu Khách'],
    cung: ['Nô Bộc'],
    doUuTien: 72,
    tomTat: `Khi Điếu Khách đóng tại Nô Bộc, bạn bè của đương số là người ăn
chơi và phóng khoáng.

Mặt tích cực:

- Tính chất cởi mở giúp đương số dễ kết giao
- Có thể bàn việc ngay trên bàn tiệc
- Phù hợp với người làm ngoại giao, kinh doanh

Mặt tiêu cực là kiểu kết giao này dễ kéo theo những mối quan hệ tiêu cực,
khiến đương số sa đà vào thói xấu.`,
  },

  {
    id: 'dieu-khach-tai-no-boc-dai-hao',
    title: 'Điếu Khách + Đại Hao tại Nô Bộc - bạn bè mờ ám',
    sao: ['Điếu Khách'],
    cung: ['Nô Bộc'],
    ketHop: ['Đại Hao'],
    doUuTien: 67,
    tomTat: `Khi Điếu Khách tại Nô Bộc gặp thêm Đại Hao, bạn bè của đương số
dây dưa, liên đới và mờ ám; đương số dễ bị kéo vào thói hư tật xấu.`,
  },

  {
    id: 'dieu-khach-tai-no-boc-tieu-hao',
    title: 'Điếu Khách + Tiểu Hao tại Nô Bộc - bạn bè mờ ám',
    sao: ['Điếu Khách'],
    cung: ['Nô Bộc'],
    ketHop: ['Tiểu Hao'],
    doUuTien: 67,
    tomTat: `Khi Điếu Khách tại Nô Bộc gặp thêm Tiểu Hao, bạn bè của đương số
dây dưa, liên đới và mờ ám; đương số dễ bị kéo vào thói hư tật xấu.`,
  },

  {
    id: 'dieu-khach-tai-no-boc-dia-kiep',
    title: 'Điếu Khách + Địa Kiếp tại Nô Bộc - bạn bè mờ ám',
    sao: ['Điếu Khách'],
    cung: ['Nô Bộc'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 67,
    tomTat: `Khi Điếu Khách tại Nô Bộc gặp thêm Địa Kiếp, bạn bè của đương số
dây dưa, liên đới và mờ ám; đương số dễ bị kéo vào thói hư tật xấu.`,
  },

  {
    id: 'dieu-khach-tai-no-boc-da-la',
    title: 'Điếu Khách + Đà La tại Nô Bộc - bạn bè mờ ám',
    sao: ['Điếu Khách'],
    cung: ['Nô Bộc'],
    ketHop: ['Đà La'],
    doUuTien: 67,
    tomTat: `Khi Điếu Khách tại Nô Bộc gặp thêm Đà La, bạn bè của đương số dây
dưa, liên đới và mờ ám; đương số dễ bị kéo vào thói hư tật xấu.`,
  },

  {
    id: 'dieu-khach-tai-no-boc-thien-rieu',
    title: 'Điếu Khách + Thiên Riêu tại Nô Bộc - bạn bè mờ ám',
    sao: ['Điếu Khách'],
    cung: ['Nô Bộc'],
    ketHop: ['Thiên Riêu'],
    doUuTien: 67,
    tomTat: `Khi Điếu Khách tại Nô Bộc gặp thêm Thiên Riêu, bạn bè của đương
số dây dưa, liên đới và mờ ám; đương số dễ bị kéo vào thói hư tật xấu.`,
  },

  {
    id: 'dieu-khach-tai-no-boc-hoa-ky',
    title: 'Điếu Khách + Hóa Kỵ tại Nô Bộc - bạn bè mờ ám',
    sao: ['Điếu Khách'],
    cung: ['Nô Bộc'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 67,
    tomTat: `Khi Điếu Khách tại Nô Bộc gặp thêm Hóa Kỵ, bạn bè của đương số
dây dưa, liên đới và mờ ám; đương số dễ bị kéo vào thói hư tật xấu.`,
  },

  {
    id: 'dieu-khach-tai-thien-di',
    title: 'Điếu Khách tại Thiên Di - xuất ngoại lập nghiệp',
    sao: ['Điếu Khách'],
    cung: ['Thiên Di'],
    doUuTien: 78,
    tomTat: `Khi Điếu Khách đóng tại Thiên Di (cấu trúc tam hợp tạo phối với
Thiên Mã), họ hàng của đương số có nhiều người ly tông tổ nghiệp, lập nghiệp
phương xa.

Bản thân đương số:

- Dễ có số xuất ngoại
- Ra ngoài ngoại giao tốt, có tài ăn nói
- Ra ngoài thường có cơ hội ăn uống tiệc tùng`,
  },

  {
    id: 'dieu-khach-tai-thien-di-thai-duong',
    title: 'Điếu Khách + Thái Dương tại Thiên Di',
    sao: ['Điếu Khách'],
    cung: ['Thiên Di'],
    ketHop: ['Thái Dương'],
    doUuTien: 73,
    tomTat: `Khi Điếu Khách tại Thiên Di gặp thêm Thái Dương - một sao "động"
mạnh - đương số càng có xu hướng xuất ngoại.`,
  },

  {
    id: 'dieu-khach-tai-thien-di-vu-khuc',
    title: 'Điếu Khách + Vũ Khúc tại Thiên Di',
    sao: ['Điếu Khách'],
    cung: ['Thiên Di'],
    ketHop: ['Vũ Khúc'],
    doUuTien: 73,
    tomTat: `Khi Điếu Khách tại Thiên Di gặp thêm Vũ Khúc - một sao "động"
mạnh - đương số càng có xu hướng xuất ngoại.`,
  },

  {
    id: 'dieu-khach-tai-thien-di-cu-mon',
    title: 'Điếu Khách + Cự Môn tại Thiên Di',
    sao: ['Điếu Khách'],
    cung: ['Thiên Di'],
    ketHop: ['Cự Môn'],
    doUuTien: 73,
    tomTat: `Khi Điếu Khách tại Thiên Di gặp thêm Cự Môn - một sao "động" mạnh
- đương số càng có xu hướng xuất ngoại.`,
  },

  {
    id: 'dieu-khach-tai-thien-di-hoa-tinh',
    title: 'Điếu Khách + Hỏa Tinh tại Thiên Di',
    sao: ['Điếu Khách'],
    cung: ['Thiên Di'],
    ketHop: ['Hỏa Tinh'],
    doUuTien: 73,
    tomTat: `Khi Điếu Khách tại Thiên Di gặp thêm Hỏa Tinh - một sao "động"
mạnh - đương số càng có xu hướng xuất ngoại.`,
  },

  {
    id: 'dieu-khach-tai-thien-di-luu-ha',
    title: 'Điếu Khách + Lưu Hà tại Thiên Di - cách đẹp ngoại giao',
    sao: ['Điếu Khách'],
    cung: ['Thiên Di'],
    ketHop: ['Lưu Hà'],
    doUuTien: 73,
    tomTat: `Khi Điếu Khách tại Thiên Di gặp thêm Lưu Hà, đương số được cách
đẹp ngoại giao: việc ký kết hợp tác thường xảy ra trong những lần đi giao
lưu với đối tác - rất phù hợp với công việc ngoại giao.`,
  },

  {
    id: 'dieu-khach-tai-thien-di-quoc-an',
    title: 'Điếu Khách + Quốc Ấn tại Thiên Di - cách đẹp ngoại giao',
    sao: ['Điếu Khách'],
    cung: ['Thiên Di'],
    ketHop: ['Quốc Ấn'],
    doUuTien: 73,
    tomTat: `Khi Điếu Khách tại Thiên Di gặp thêm Quốc Ấn, đương số được cách
đẹp ngoại giao: việc ký kết hợp tác thường xảy ra trong những lần đi giao
lưu với đối tác - rất phù hợp với công việc ngoại giao.`,
  },

  {
    id: 'dieu-khach-tai-thien-di-hoa-loc',
    title: 'Điếu Khách + Hóa Lộc tại Thiên Di - cách đẹp ngoại giao',
    sao: ['Điếu Khách'],
    cung: ['Thiên Di'],
    ketHop: ['Hóa Lộc'],
    doUuTien: 73,
    tomTat: `Khi Điếu Khách tại Thiên Di gặp thêm Hóa Lộc, đương số được cách
đẹp ngoại giao: việc ký kết hợp tác thường xảy ra trong những lần đi giao
lưu với đối tác - rất phù hợp với công việc ngoại giao.`,
  },

  {
    id: 'dieu-khach-tai-thien-di-tham-lang',
    title: 'Điếu Khách + Tham Lang tại Thiên Di - cách đẹp ngoại giao',
    sao: ['Điếu Khách'],
    cung: ['Thiên Di'],
    ketHop: ['Tham Lang'],
    doUuTien: 73,
    tomTat: `Khi Điếu Khách tại Thiên Di gặp thêm Tham Lang, đương số được
cách đẹp ngoại giao: việc ký kết hợp tác thường xảy ra trong những lần đi
giao lưu với đối tác - rất phù hợp với công việc ngoại giao.`,
  },

  {
    id: 'dieu-khach-tai-thien-di-nam-menh',
    title: 'Điếu Khách tại Thiên Di - Nam mệnh',
    sao: ['Điếu Khách'],
    cung: ['Thiên Di'],
    gioiTinh: 'Nam',
    doUuTien: 70,
    tomTat: `Với nam mệnh có Điếu Khách tọa Thiên Di, vì bản chất "làm khách",
đương số ra ngoài ăn uống tiệc tùng nhiều sẽ giảm sự quan tâm tới gia đình -
ảnh hưởng xấu đến tình duyên và gia đạo.`,
  },

  {
    id: 'dieu-khach-tai-tat-ach',
    title: 'Điếu Khách tại Tật Ách - nghiệp hưởng thụ',
    sao: ['Điếu Khách'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `Khi Điếu Khách đóng tại Tật Ách, ý nghĩa của sao thiên về "nghiệp"
nhiều hơn là bệnh tật cụ thể.

Về tâm lý, đương số thường mắc bệnh thuộc phạm vi tinh thần. Nếu đã rơi vào
vòng xoáy đam mê tiêu tiền hay sự xa hoa thì rất khó bỏ - giống như người bị
"bùa mê thuốc lú" mà không dứt ra được.

Về tài chính:

- Hay phải chi tiền bất ngờ
- Có nhiều đam mê thú vui tốn tiền, đã mê là khó bỏ
- Thoáng tính, thích ăn ngon mặc đẹp
- Có nhiều tiêu nhiều, có ít tiêu ít, khó giữ tiền bạc

Đây cũng là nghiệp quả của bại tinh - chỉ nhìn vào cái trước mắt mà không
toan tính lâu dài. Vì vậy, khi rơi vào cảnh khó khăn, người khác vất vả một
thì đương số phải vất vả gấp mười.`,
  },

  {
    id: 'dieu-khach-tai-tai-bach',
    title: 'Điếu Khách tại Tài Bạch',
    sao: ['Điếu Khách'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `Khi Điếu Khách đóng tại Tài Bạch, đương số hay lo nghĩ; đồng tiền
tụ tán không thất thường nhưng "tiền như vật ngoài thân". Trong công việc
luôn phải cố gắng, hay gặp người phá bĩnh; chi tiêu khó giữ lại được về
mình.

Cổ nhân nói "đồng tiền đi liền khúc ruột", còn ngôi sao này thì chẳng khác
nào "dốc hết ruột gan cho người khác".

Một số nghề phù hợp với Điếu Khách tại Tài Bạch:

- Mở nhà hàng, kinh doanh thực phẩm
- Phục vụ ăn uống
- Kinh doanh tang lễ (vì Điếu = văn điếu)`,
  },

  {
    id: 'dieu-khach-tai-tai-bach-thien-khoi',
    title: 'Điếu Khách + Thiên Khôi tại Tài Bạch - làm chủ',
    sao: ['Điếu Khách'],
    cung: ['Tài Bạch'],
    ketHop: ['Thiên Khôi'],
    doUuTien: 70,
    tomTat: `Khi Điếu Khách tại Tài Bạch gặp thêm Thiên Khôi, đương số có khả
năng làm chủ.`,
  },

  {
    id: 'dieu-khach-tai-tai-bach-thien-viet',
    title: 'Điếu Khách + Thiên Việt tại Tài Bạch - làm chủ',
    sao: ['Điếu Khách'],
    cung: ['Tài Bạch'],
    ketHop: ['Thiên Việt'],
    doUuTien: 70,
    tomTat: `Khi Điếu Khách tại Tài Bạch gặp thêm Thiên Việt, đương số có khả
năng làm chủ.`,
  },

  {
    id: 'dieu-khach-tai-tai-bach-hoa-quyen',
    title: 'Điếu Khách + Hóa Quyền tại Tài Bạch - làm chủ',
    sao: ['Điếu Khách'],
    cung: ['Tài Bạch'],
    ketHop: ['Hóa Quyền'],
    doUuTien: 70,
    tomTat: `Khi Điếu Khách tại Tài Bạch gặp thêm Hóa Quyền, đương số có khả
năng làm chủ.`,
  },

  {
    id: 'dieu-khach-tai-tai-bach-ta-phu',
    title: 'Điếu Khách + Tả Phù tại Tài Bạch - làm chủ',
    sao: ['Điếu Khách'],
    cung: ['Tài Bạch'],
    ketHop: ['Tả Phù'],
    doUuTien: 70,
    tomTat: `Khi Điếu Khách tại Tài Bạch gặp thêm Tả Phù, đương số có khả năng
làm chủ.`,
  },

  {
    id: 'dieu-khach-tai-tai-bach-huu-bat',
    title: 'Điếu Khách + Hữu Bật tại Tài Bạch - làm chủ',
    sao: ['Điếu Khách'],
    cung: ['Tài Bạch'],
    ketHop: ['Hữu Bật'],
    doUuTien: 70,
    tomTat: `Khi Điếu Khách tại Tài Bạch gặp thêm Hữu Bật, đương số có khả
năng làm chủ.`,
  },

  {
    id: 'dieu-khach-tai-tai-bach-dia-kiep',
    title: 'Điếu Khách + Địa Kiếp tại Tài Bạch - cờ bạc xa hoa',
    sao: ['Điếu Khách'],
    cung: ['Tài Bạch'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Khi Điếu Khách tại Tài Bạch gặp thêm Địa Kiếp, đương số dễ đam
mê cờ bạc, hoặc dùng nhiều tiền để phục vụ nhu cầu xa hoa của bản thân.`,
  },

  {
    id: 'dieu-khach-tai-tai-bach-phuc-binh',
    title: 'Điếu Khách + Phục Binh tại Tài Bạch - cờ bạc xa hoa',
    sao: ['Điếu Khách'],
    cung: ['Tài Bạch'],
    ketHop: ['Phục Binh'],
    doUuTien: 70,
    tomTat: `Khi Điếu Khách tại Tài Bạch gặp thêm Phục Binh, đương số dễ đam
mê cờ bạc, hoặc dùng nhiều tiền để phục vụ nhu cầu xa hoa của bản thân.`,
  },

  {
    id: 'dieu-khach-tai-tai-bach-dai-hao',
    title: 'Điếu Khách + Đại Hao tại Tài Bạch - cờ bạc xa hoa',
    sao: ['Điếu Khách'],
    cung: ['Tài Bạch'],
    ketHop: ['Đại Hao'],
    doUuTien: 70,
    tomTat: `Khi Điếu Khách tại Tài Bạch gặp thêm Đại Hao, đương số dễ đam mê
cờ bạc, hoặc dùng nhiều tiền để phục vụ nhu cầu xa hoa của bản thân.`,
  },

  {
    id: 'dieu-khach-tai-tai-bach-tieu-hao',
    title: 'Điếu Khách + Tiểu Hao tại Tài Bạch - cờ bạc xa hoa',
    sao: ['Điếu Khách'],
    cung: ['Tài Bạch'],
    ketHop: ['Tiểu Hao'],
    doUuTien: 70,
    tomTat: `Khi Điếu Khách tại Tài Bạch gặp thêm Tiểu Hao, đương số dễ đam mê
cờ bạc, hoặc dùng nhiều tiền để phục vụ nhu cầu xa hoa của bản thân.`,
  },

  {
    id: 'dieu-khach-tai-tai-bach-da-la',
    title: 'Điếu Khách + Đà La tại Tài Bạch - cờ bạc xa hoa',
    sao: ['Điếu Khách'],
    cung: ['Tài Bạch'],
    ketHop: ['Đà La'],
    doUuTien: 70,
    tomTat: `Khi Điếu Khách tại Tài Bạch gặp thêm Đà La, đương số dễ đam mê cờ
bạc, hoặc dùng nhiều tiền để phục vụ nhu cầu xa hoa của bản thân.`,
  },

  {
    id: 'dieu-khach-tai-tai-bach-kinh-duong',
    title: 'Điếu Khách + Kình Dương tại Tài Bạch - cờ bạc xa hoa',
    sao: ['Điếu Khách'],
    cung: ['Tài Bạch'],
    ketHop: ['Kình Dương'],
    doUuTien: 70,
    tomTat: `Khi Điếu Khách tại Tài Bạch gặp thêm Kình Dương, đương số dễ đam
mê cờ bạc, hoặc dùng nhiều tiền để phục vụ nhu cầu xa hoa của bản thân.`,
  },

  {
    id: 'dieu-khach-tai-tu-tuc',
    title: 'Điếu Khách tại Tử Tức - con du học',
    sao: ['Điếu Khách'],
    cung: ['Tử Tức'],
    doUuTien: 72,
    tomTat: `Khi Điếu Khách đóng tại Tử Tức, con cái của đương số có phần ăn
chơi và hay đi học ở xa nhà. Các cháu thông minh, hoạt ngôn, có nhiều tài lẻ
và dễ đi du học nước ngoài.

Mặt khó là tâm các con hướng ra ngoài nên trưởng thành sớm. Bố mẹ dễ phiền
lụy lo lắng chuyện con cái bị cái xấu lôi kéo, mối quan hệ với con cũng
thiếu sự thân mật.`,
  },

  {
    id: 'dieu-khach-tai-tu-tuc-sat-tinh',
    title: 'Điếu Khách + Sát tinh tại Tử Tức - con khó nuôi',
    sao: ['Điếu Khách'],
    cung: ['Tử Tức'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 67,
    tomTat: `Khi Điếu Khách tại Tử Tức gặp thêm Lục Sát tinh, con cái của
đương số nuôi nấng khó khăn và tốn kém tiền bạc.`,
  },

  {
    id: 'dieu-khach-tai-phu-the',
    title: 'Điếu Khách tại Phu Thê',
    sao: ['Điếu Khách'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `Khi Điếu Khách đóng tại Phu Thê, ngôi sao Hỏa này không hợp với
cung này: mối quan hệ vợ chồng có phần xa cách và thiếu tình cảm.

Tính cách của đương số:

- Chính trực, thẳng thắn, quan điểm đúng sai rõ ràng
- Có ý chí và nghị lực, bản lĩnh, kiên trì, bền bỉ
- Tự lập, có chút ngang tàng và bảo thủ

Người hôn phối của đương số:

- Vui vẻ, hòa đồng, hoạt bát
- Kiếm tiền giỏi, giỏi xoay xở đồng tiền
- Tiêu tiền phóng khoáng
- Có tài ăn nói, ham vui ham chơi`,
  },

  {
    id: 'dieu-khach-tai-phu-the-dia-kiep',
    title: 'Điếu Khách + Địa Kiếp tại Phu Thê - bị đào tiền',
    sao: ['Điếu Khách'],
    cung: ['Phu Thê'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Khi Điếu Khách tại Phu Thê gặp thêm Địa Kiếp (kèm Lộc ở vị trí bổ
trợ), tình huống chuyển thành cảnh người bạn đời nhìn đương số như "mỏ
vàng" - bị đào tiền.`,
  },

  {
    id: 'dieu-khach-tai-phu-the-da-la',
    title: 'Điếu Khách + Đà La tại Phu Thê - bị đào tiền',
    sao: ['Điếu Khách'],
    cung: ['Phu Thê'],
    ketHop: ['Đà La'],
    doUuTien: 70,
    tomTat: `Khi Điếu Khách tại Phu Thê gặp thêm Đà La (kèm Lộc ở vị trí bổ
trợ), tình huống chuyển thành cảnh người bạn đời nhìn đương số như "mỏ
vàng" - bị đào tiền.`,
  },

  {
    id: 'dieu-khach-tai-phu-the-thien-rieu',
    title: 'Điếu Khách + Thiên Riêu tại Phu Thê - bị đào tiền',
    sao: ['Điếu Khách'],
    cung: ['Phu Thê'],
    ketHop: ['Thiên Riêu'],
    doUuTien: 70,
    tomTat: `Khi Điếu Khách tại Phu Thê gặp thêm Thiên Riêu (kèm Lộc ở vị trí
bổ trợ), tình huống chuyển thành cảnh người bạn đời nhìn đương số như "mỏ
vàng" - bị đào tiền.`,
  },

  {
    id: 'dieu-khach-tai-phu-the-hoa-ky',
    title: 'Điếu Khách + Hóa Kỵ tại Phu Thê - bị đào tiền',
    sao: ['Điếu Khách'],
    cung: ['Phu Thê'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `Khi Điếu Khách tại Phu Thê gặp thêm Hóa Kỵ (kèm Lộc ở vị trí bổ
trợ), tình huống chuyển thành cảnh người bạn đời nhìn đương số như "mỏ
vàng" - bị đào tiền.`,
  },

  {
    id: 'dieu-khach-tai-phu-the-xuong-khuc-ta-huu',
    title: 'Điếu Khách + Văn Xương + Văn Khúc + Tả Phù + Hữu Bật tại Phu Thê - tương kính như tân',
    sao: ['Điếu Khách'],
    cung: ['Phu Thê'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Tả Phù', 'Hữu Bật'],
    doUuTien: 70,
    tomTat: `Khi Điếu Khách tại Phu Thê hội đủ Văn Xương, Văn Khúc, Tả Phù và
Hữu Bật (đắc cách), mối quan hệ vợ chồng trở nên ổn định. Hai người dù sau
thời gian dài chung sống vẫn giữ được nét "tương kính như tân"; tính xa cách
của Điếu Khách được chuyển hóa thành sự lịch sự và biết giữ khoảng cách
đúng mực.`,
  },

  {
    id: 'dieu-khach-tai-huynh-de',
    title: 'Điếu Khách tại Huynh Đệ',
    sao: ['Điếu Khách'],
    cung: ['Huynh Đệ'],
    doUuTien: 70,
    tomTat: `Khi Điếu Khách đóng tại Huynh Đệ, đương số có anh em ăn chơi và
chi tiêu rộng rãi; cũng có anh em phải chi tiền nhiều cho việc ốm đau. Mối
quan hệ giữa anh em kém thân thiết, mang nhiều nét khách khí và xã giao.`,
  },

  {
    id: 'dieu-khach-tai-huynh-de-dai-hao',
    title: 'Điếu Khách + Đại Hao tại Huynh Đệ - kéo vào thói hư',
    sao: ['Điếu Khách'],
    cung: ['Huynh Đệ'],
    ketHop: ['Đại Hao'],
    doUuTien: 65,
    tomTat: `Khi Điếu Khách tại Huynh Đệ gặp thêm Đại Hao, anh chị em trong
nhà có xu hướng kéo đương số vào thói hư tật xấu.`,
  },

  {
    id: 'dieu-khach-tai-huynh-de-tieu-hao',
    title: 'Điếu Khách + Tiểu Hao tại Huynh Đệ - kéo vào thói hư',
    sao: ['Điếu Khách'],
    cung: ['Huynh Đệ'],
    ketHop: ['Tiểu Hao'],
    doUuTien: 65,
    tomTat: `Khi Điếu Khách tại Huynh Đệ gặp thêm Tiểu Hao, anh chị em trong
nhà có xu hướng kéo đương số vào thói hư tật xấu.`,
  },

  {
    id: 'dieu-khach-tai-huynh-de-dia-kiep',
    title: 'Điếu Khách + Địa Kiếp tại Huynh Đệ - kéo vào thói hư',
    sao: ['Điếu Khách'],
    cung: ['Huynh Đệ'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 65,
    tomTat: `Khi Điếu Khách tại Huynh Đệ gặp thêm Địa Kiếp, anh chị em trong
nhà có xu hướng kéo đương số vào thói hư tật xấu.`,
  },

  {
    id: 'dieu-khach-tai-huynh-de-da-la',
    title: 'Điếu Khách + Đà La tại Huynh Đệ - kéo vào thói hư',
    sao: ['Điếu Khách'],
    cung: ['Huynh Đệ'],
    ketHop: ['Đà La'],
    doUuTien: 65,
    tomTat: `Khi Điếu Khách tại Huynh Đệ gặp thêm Đà La, anh chị em trong nhà
có xu hướng kéo đương số vào thói hư tật xấu.`,
  },

  {
    id: 'dieu-khach-tai-huynh-de-thien-rieu',
    title: 'Điếu Khách + Thiên Riêu tại Huynh Đệ - kéo vào thói hư',
    sao: ['Điếu Khách'],
    cung: ['Huynh Đệ'],
    ketHop: ['Thiên Riêu'],
    doUuTien: 65,
    tomTat: `Khi Điếu Khách tại Huynh Đệ gặp thêm Thiên Riêu, anh chị em trong
nhà có xu hướng kéo đương số vào thói hư tật xấu.`,
  },

  {
    id: 'dieu-khach-tai-huynh-de-hoa-ky',
    title: 'Điếu Khách + Hóa Kỵ tại Huynh Đệ - kéo vào thói hư',
    sao: ['Điếu Khách'],
    cung: ['Huynh Đệ'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 65,
    tomTat: `Khi Điếu Khách tại Huynh Đệ gặp thêm Hóa Kỵ, anh chị em trong nhà
có xu hướng kéo đương số vào thói hư tật xấu.`,
  },

  {
    id: 'dieu-khach-tai-huynh-de-van-xuong',
    title: 'Điếu Khách + Văn Xương tại Huynh Đệ - hưởng tiếng thơm',
    sao: ['Điếu Khách'],
    cung: ['Huynh Đệ'],
    ketHop: ['Văn Xương'],
    doUuTien: 65,
    tomTat: `Khi Điếu Khách tại Huynh Đệ gặp thêm Văn Xương - sao khoa bảng -
chủ mệnh được hưởng tiếng thơm từ anh chị em.`,
  },

  {
    id: 'dieu-khach-tai-huynh-de-van-khuc',
    title: 'Điếu Khách + Văn Khúc tại Huynh Đệ - hưởng tiếng thơm',
    sao: ['Điếu Khách'],
    cung: ['Huynh Đệ'],
    ketHop: ['Văn Khúc'],
    doUuTien: 65,
    tomTat: `Khi Điếu Khách tại Huynh Đệ gặp thêm Văn Khúc - sao khoa bảng -
chủ mệnh được hưởng tiếng thơm từ anh chị em.`,
  },

  {
    id: 'dieu-khach-tai-huynh-de-hoa-khoa',
    title: 'Điếu Khách + Hóa Khoa tại Huynh Đệ - hưởng tiếng thơm',
    sao: ['Điếu Khách'],
    cung: ['Huynh Đệ'],
    ketHop: ['Hóa Khoa'],
    doUuTien: 65,
    tomTat: `Khi Điếu Khách tại Huynh Đệ gặp thêm Hóa Khoa - sao khoa bảng -
chủ mệnh được hưởng tiếng thơm từ anh chị em.`,
  },

  {
    id: 'dieu-khach-tai-huynh-de-phong-cao',
    title: 'Điếu Khách + Phong Cáo tại Huynh Đệ - hưởng tiếng thơm',
    sao: ['Điếu Khách'],
    cung: ['Huynh Đệ'],
    ketHop: ['Phong Cáo'],
    doUuTien: 65,
    tomTat: `Khi Điếu Khách tại Huynh Đệ gặp thêm Phong Cáo - sao khoa bảng -
chủ mệnh được hưởng tiếng thơm từ anh chị em.`,
  },

  {
    id: 'dieu-khach-co-bac-no-nan',
    title: 'Điếu Khách + Đà La + Địa Kiếp - cờ bạc nợ nần',
    sao: ['Điếu Khách'],
    ketHop: ['Đà La', 'Địa Kiếp'],
    doUuTien: 65,
    tomTat: `Khi Điếu Khách hội cùng Đà La và Địa Kiếp (có thể thêm Hỏa Tinh,
Đại Hao, Hóa Kỵ và những chính tinh dễ kích động như Thiên Cơ, Cự Môn), tổ
hợp tạo nên một xu hướng đáng lo ngại:

- Hình thành xu hướng dính dáng cờ bạc nợ nần
- Tâm lý đố kỵ với người khác
- Nghiện cảm giác kích thích khi chiến thắng
- Tạo thành vòng lặp nợ nần, khó thoát ra

Đây là cách cục cực nguy hiểm - cần đặc biệt thận trọng vào hạn.`,
  },

  {
    id: 'dieu-khach-co-bac-no-nan-tuan-khong',
    title: 'Điếu Khách + Đà La + Địa Kiếp + Tuần Không - càng kẹt vòng lặp',
    sao: ['Điếu Khách'],
    ketHop: ['Đà La', 'Địa Kiếp', 'Tuần'],
    doUuTien: 60,
    tomTat: `Khi tổ hợp Điếu Khách + Đà La + Địa Kiếp lại gặp thêm Tuần Không,
đương số càng kẹt sâu trong vòng lặp cờ bạc nợ nần và rất khó thoát ra.`,
  },

  {
    id: 'dieu-khach-kiep-kinh-hoa-tang',
    title: 'Điếu Khách + Kiếp + Kình + Hỏa - tang thương',
    sao: ['Điếu Khách'],
    ketHop: ['Địa Kiếp', 'Kình Dương', 'Hỏa Tinh'],
    doUuTien: 65,
    tomTat: `Khi Điếu Khách hội cùng Địa Kiếp, Kình Dương và Hỏa Tinh, cấu
trúc này mang ý nghĩa tang thương. Cơ sở chiết tự nằm ở chữ "Điếu" trong văn
điếu - lời buồn thương, chia buồn.

Khi tổ hợp này nhập hạn vào các cung lục thân, nó sẽ thúc đẩy tai nạn hoặc
vấn đề tang thương, gây phiền lụy cho đương số và gia đình gặp tang tóc.`,
  },

  {
    id: 'dieu-khach-kiep-kinh-hoa-luc-than-tang',
    title: 'Điếu Khách + Kiếp + Kình + Hỏa tại Lục Thân - Tang thương',
    sao: ['Điếu Khách'],
    cung: ['Phụ Mẫu', 'Phu Thê', 'Tử Tức', 'Huynh Đệ'],
    ketHop: ['Địa Kiếp', 'Kình Dương', 'Hỏa Tinh'],
    doUuTien: 60,
    tomTat: `Khi tổ hợp Điếu Khách + Địa Kiếp + Kình Dương + Hỏa Tinh đóng tại
các cung lục thân (Phụ Mẫu, Phu Thê, Tử Tức, Huynh Đệ), hạn này thúc đẩy tai
nạn hoặc vấn đề tang thương với người thân thuộc cung tương ứng, gây phiền
lụy cho đương số và gia đình gặp tang tóc.`,
  },

  {
    id: 'dieu-khach-kinh-hinh-tai-nan',
    title: 'Điếu Khách + Kình Dương + Thiên Hình - tai nạn đi xa',
    sao: ['Điếu Khách'],
    ketHop: ['Kình Dương', 'Thiên Hình'],
    doUuTien: 65,
    tomTat: `Khi Điếu Khách hội cùng Kình Dương và Thiên Hình - bản thân Điếu
Khách vốn mang tính phương xa - đương số khi nhập hạn đi xa dễ gặp tai nạn
bất ngờ, hoặc dễ bị người lạ mặt tiếp cận với ý đồ xấu.

Lời khuyên cho hạn này:

- Cẩn trọng khi đi xa
- Tránh tiếp xúc người lạ không rõ nguồn gốc
- Chọn ngày giờ tốt để xuất hành`,
  },

  {
    id: 'dieu-khach-loi-khuyen',
    title: 'Lời khuyên cho người Điếu Khách',
    sao: ['Điếu Khách'],
    doUuTien: 35,
    tomTat: `Điếu Khách vừa có thể mang lại sự khéo léo trong giao tiếp, vừa
dễ đẩy đương số vào vòng xoáy của phù hoa, hưởng lạc.

Sức mạnh của sao:

- Tài ăn nói, giao tiếp giỏi
- Phong khoáng, cởi mở
- Có thể có cách Mã Khốc Khách - "ngựa rung chuông vàng" - mang lại nghị
  lực vượt khó

Yếu điểm cần lưu ý:

- Thiên hướng ăn chơi, dễ sa vào cờ bạc
- Hay nói phét, khoác lác
- Tiền bạc khó giữ
- Mối quan hệ thiếu chiều sâu, mang tính xã giao

Có ba cách hóa giải Điếu Khách:

1. **Mã Khốc Khách** - kết hợp Thiên Mã và Thiên Khốc: biến nỗi buồn thành
   nghị lực
2. **Tý/Ngọ/Mão/Dậu + Cô - Quả** - đồng cung Quả Tú: tự lập, có chuyên môn
   giỏi
3. **Văn Xương + Văn Khúc** - học hành chăm chỉ, mải mê kiếm tiền chứ không
   cờ bạc

Một số bí quyết phát huy mặt tốt của Điếu Khách:

- Tiết chế chi tiêu, tránh mua sắm phù phiếm
- Tránh cờ bạc, đỏ đen - đó là vực thẳm
- Dùng tài ăn nói vào công việc (ngoại giao, kinh doanh) thay vì "chém gió"
- Biến phiêu lưu thành cơ hội học tập - đi xa để học hỏi, không chỉ ăn chơi
- Giữ mối quan hệ chiều sâu với gia đình, không chỉ xã giao bên ngoài

Khi biết hóa giải đúng cách, Điếu Khách trở thành doanh nhân giỏi ngoại
giao, ký kết hợp đồng trên bàn tiệc - biến bại tinh thành quý tinh.`,
  },
];
