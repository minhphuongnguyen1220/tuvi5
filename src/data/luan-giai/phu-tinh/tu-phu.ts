import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO TỬ PHÙ - Hỏa, Hung Tinh nhẹ, vòng Thái Tuế (vị trí 6).
 * Tam hợp Đào - Không - Sát (Đào Hoa + Thiên Không + Kiếp Sát) - cùng tam hợp với Thiếu Dương.
 * LUÔN đồng cung với NGUYỆT ĐỨC (quy luật an sao) - Nguyệt Đức khuyên nhủ, hóa giải.
 * Theo Thái Thứ Lang: chủ tang thương, ý nghĩa sự chết, báo hiệu tang thương.
 */
export const luanGiai_TuPhu: DoanLuanGiai[] = [
  {
    id: 'tu-phu-tinh-chat-chung',
    title: 'Tử Phù - Đặc tính chung',
    sao: ['Tử Phù'],
    doUuTien: 32,
    tomTat: `**Tử Phù** là phụ tinh thuộc loại Hung Tinh nhẹ trong vòng Thái Tuế, đứng
ở vị trí thứ 6, ngũ hành Hỏa.

Trong vòng Thái Tuế, Tử Phù đứng ngay sau Quan Phù (vị trí 5). Quan Phù chỉ sự
đấu tranh, tranh cãi để xây dựng; tiếp đó là Tử Phù chủ về buồn thảm, nguy
khốn, gặp tai vạ. Tử Phù nằm trong tam hợp Đào - Không - Sát (Đào Hoa, Thiên
Không, Kiếp Sát) — đặc trưng của lớp người thông minh, tài năng, nhanh nhẹn
nhưng lắm tài thì nhiều tật.

Theo quy luật an sao, Tử Phù luôn đồng cung Nguyệt Đức. Nguyệt Đức là sao phúc
đi kèm để khuyên nhủ và hóa giải, đưa đương số tới con đường tu tập, đạo hạnh
mà thoát khỏi ưu phiền.

Đặc tính chính của Tử Phù là tật bệnh, buồn thảm, nguy khốn, gây rắc rối ngăn
trở công việc. Theo Thái Thứ Lang, sao này còn mang ý nghĩa sự chết, báo hiệu
tang thương — đương số cần thận trọng trong các vận hạn xấu.`,
  },

  {
    id: 'tu-phu-tam-hop-dao-khong-sat',
    title: 'Tử Phù trong tam hợp Đào Không Sát',
    sao: ['Tử Phù'],
    ketHop: ['Đào Hoa', 'Thiên Không', 'Kiếp Sát'],
    doUuTien: 60,
    tomTat: `Tam hợp Đào - Không - Sát gồm Đào Hoa, Thiên Không và Kiếp Sát. Tử Phù
nằm trong tam hợp này, cùng tam hợp với Thiếu Dương.

Về mặt ưu điểm, đương số thông minh, tài năng, khôn lanh, nhanh nhẹn, có nhiệt
huyết và năng động. Mặt nhược thì lắm tài nhiều tật: hay vấp ngã, rơi vào tình
huống éo le, gặp nhiều tai vạ, tật bệnh, buồn thảm và nguy khốn.

Cứu giải tự nhiên đến từ Nguyệt Đức luôn đồng cung — khuyên nhủ, hóa giải, đưa
đương số tới tu tập, đạo hạnh mà thoát khỏi ưu phiền. Đây là tam hợp đối lập
với Âm Long Trực (ôn hòa nhường nhịn) — mạnh mẽ nhưng trắc trở.`,
  },

  {
    id: 'tu-phu-tai-menh',
    title: 'Tử Phù tại Mệnh - thiệt thòi nội tâm',
    sao: ['Tử Phù'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `Khi Tử Phù thủ Mệnh, đương số tính tình hiền lành, coi trọng dĩ hòa vi
quý. Đương số hay phải chịu thiệt thòi, rắc rối nhưng đón nhận một cách bình
thản, không oán trách. Bản tính thiên về nội tâm, hay suy nghĩ và dễ u sầu, song
vẫn có khả năng giữ thái độ tích cực, biến khó khăn thành động lực.

Vì luôn nằm trong tam hợp Đào Không Sát, đương số thông minh, năng động, nhiệt
huyết — nhưng cũng hay vấp ngã, rơi vào tình huống éo le.

Sức mạnh hóa giải đến từ Nguyệt Đức luôn đồng cung, giúp đương số "gặp dữ hóa
lành", nhiều phen thoát khỏi hiểm cảnh.`,
  },

  {
    id: 'tu-phu-dao-hoa',
    title: 'Tử Phù + Đào Hoa - lắm mối tối nằm không',
    sao: ['Tử Phù'],
    ketHop: ['Đào Hoa'],
    doUuTien: 65,
    tomTat: `Khi Tử Phù đồng cung Đào Hoa, đương số rơi vào cảnh "lắm mối tối nằm
không" — đa tình, lắm mối tình dở dang, tình duyên khó trọn vẹn.

Đặt trong tam hợp Đào Không Sát, đương số tài hoa và đào hoa nhưng thiếu duyên
ổn định: yêu nhiều, cuối cùng vẫn cô đơn.`,
  },

  {
    id: 'tu-phu-thien-luong-can-tu',
    title: 'Tử Phù + Thiên Lương - căn duyên tâm linh',
    sao: ['Tử Phù'],
    ketHop: ['Thiên Lương'],
    doUuTien: 70,
    tomTat: `Khi Tử Phù đồng cung hoặc hội chiếu với Thiên Lương cùng phúc tinh,
đương số là người lương thiện, có nhiều căn duyên với tâm linh, thích nghiên
cứu Phật pháp và dễ tìm thấy sự an yên trong tôn giáo, triết học, Phật pháp.

Đây là cách hóa giải đẹp nhất của Tử Phù — biến buồn thảm thành tâm linh, biến
rắc rối thành tu tập. Khi kết hợp Nguyệt Đức (luôn đồng cung) cùng Thiên Lương,
vận trình đương số bình an, ít sóng gió.`,
  },

  {
    id: 'tu-phu-tai-phu-mau',
    title: 'Tử Phù tại Phụ Mẫu',
    sao: ['Tử Phù'],
    cung: ['Phụ Mẫu'],
    doUuTien: 72,
    tomTat: `Khi Tử Phù đóng tại Phụ Mẫu, cha mẹ đương số hiền lành, từ thiện, thích
tu tập, nhân hậu và có xu hướng hành thiện.

Mặt khó của cách này là tuổi trẻ đương số hay gặp các hoàn cảnh rắc rối, chịu
thiệt thòi, công việc không thuận lợi. Nhờ đức tính nhẫn nhịn mà cuộc sống dần
ổn định, để lại phúc phần cho con cháu.`,
  },

  {
    id: 'tu-phu-tai-phu-mau-nguyet-duc-dao-hoa',
    title: 'Tử Phù + Nguyệt Đức + Đào Hoa tại Phụ Mẫu - cưới sớm',
    sao: ['Tử Phù'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Nguyệt Đức', 'Đào Hoa'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Nguyệt Đức cùng Đào Hoa tại Phụ Mẫu, cha mẹ đương số
cưới nhau sớm. Thời trẻ có nhiều mối tình dở dang nhưng về sau vẫn bền vững.`,
  },

  {
    id: 'tu-phu-tai-phu-mau-thien-luong',
    title: 'Tử Phù + Thiên Lương tại Phụ Mẫu - cha mẹ học thức',
    sao: ['Tử Phù'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Thiên Lương'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Thiên Lương tại Phụ Mẫu, cha mẹ đương số có học thức,
gia đạo về sau càng an nhàn.`,
  },

  {
    id: 'tu-phu-tai-phu-mau-thien-khoi',
    title: 'Tử Phù + Thiên Khôi tại Phụ Mẫu - cha mẹ học thức',
    sao: ['Tử Phù'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Thiên Khôi'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Thiên Khôi tại Phụ Mẫu, cha mẹ đương số có học thức,
gia đạo về sau càng an nhàn.`,
  },

  {
    id: 'tu-phu-tai-phu-mau-van-xuong',
    title: 'Tử Phù + Văn Xương tại Phụ Mẫu - cha mẹ học thức',
    sao: ['Tử Phù'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Văn Xương'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Văn Xương tại Phụ Mẫu, cha mẹ đương số có học thức,
gia đạo về sau càng an nhàn.`,
  },

  {
    id: 'tu-phu-tai-phu-mau-van-khuc',
    title: 'Tử Phù + Văn Khúc tại Phụ Mẫu - cha mẹ học thức',
    sao: ['Tử Phù'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Văn Khúc'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Văn Khúc tại Phụ Mẫu, cha mẹ đương số có học thức,
gia đạo về sau càng an nhàn.`,
  },

  {
    id: 'tu-phu-tai-phu-mau-kinh-duong',
    title: 'Tử Phù + Kình Dương tại Phụ Mẫu - bất hòa biến động',
    sao: ['Tử Phù'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Kình Dương'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Kình Dương tại Phụ Mẫu, cha mẹ đương số hay bất hòa,
cuộc sống nhiều biến động và vướng nhiều rắc rối, thị phi.`,
  },

  {
    id: 'tu-phu-tai-phu-mau-da-la',
    title: 'Tử Phù + Đà La tại Phụ Mẫu - bất hòa biến động',
    sao: ['Tử Phù'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Đà La'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Đà La tại Phụ Mẫu, cha mẹ đương số hay bất hòa, cuộc
sống nhiều biến động và vướng nhiều rắc rối, thị phi.`,
  },

  {
    id: 'tu-phu-tai-phu-mau-hoa-ky',
    title: 'Tử Phù + Hóa Kỵ tại Phụ Mẫu - bất hòa biến động',
    sao: ['Tử Phù'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Hóa Kỵ tại Phụ Mẫu, cha mẹ đương số hay bất hòa, cuộc
sống nhiều biến động và vướng nhiều rắc rối, thị phi.`,
  },

  {
    id: 'tu-phu-tai-phuc-duc',
    title: 'Tử Phù tại Phúc Đức',
    sao: ['Tử Phù'],
    cung: ['Phúc Đức'],
    doUuTien: 72,
    tomTat: `Khi Tử Phù đóng tại Phúc Đức, dòng họ đương số có nhiều người vất vả
nhưng hiền hậu, chất phác. Phần đông thích tu tập, quan tâm chuyện tâm linh,
hay lui tới chùa chiền, miếu mạo. Bản thân đương số hay mắc rắc rối, chịu thiệt
thòi trong quan hệ họ hàng dòng tộc.

Một đặc điểm tâm linh đáng chú ý: mồ mả tổ tiên thường đặt gần nơi có tượng
Phật Bà Quan Âm, phúc phần liên quan tới tâm linh.`,
  },

  {
    id: 'tu-phu-tai-phuc-duc-thien-luong',
    title: 'Tử Phù + Thiên Lương tại Phúc Đức - học cao phúc đức',
    sao: ['Tử Phù'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Lương'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Thiên Lương tại Phúc Đức, gia tộc đương số có nhiều
người học cao, chăm chỉ "gieo nhân lành" nên phúc đức kéo dài lâu.`,
  },

  {
    id: 'tu-phu-tai-phuc-duc-nguyet-duc',
    title: 'Tử Phù + Nguyệt Đức tại Phúc Đức - học cao phúc đức',
    sao: ['Tử Phù'],
    cung: ['Phúc Đức'],
    ketHop: ['Nguyệt Đức'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Nguyệt Đức tại Phúc Đức, gia tộc đương số có nhiều
người học cao, chăm chỉ "gieo nhân lành" nên phúc đức kéo dài lâu.`,
  },

  {
    id: 'tu-phu-tai-phuc-duc-van-xuong',
    title: 'Tử Phù + Văn Xương tại Phúc Đức - học cao phúc đức',
    sao: ['Tử Phù'],
    cung: ['Phúc Đức'],
    ketHop: ['Văn Xương'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Văn Xương tại Phúc Đức, gia tộc đương số có nhiều
người học cao, chăm chỉ "gieo nhân lành" nên phúc đức kéo dài lâu.`,
  },

  {
    id: 'tu-phu-tai-phuc-duc-van-khuc',
    title: 'Tử Phù + Văn Khúc tại Phúc Đức - học cao phúc đức',
    sao: ['Tử Phù'],
    cung: ['Phúc Đức'],
    ketHop: ['Văn Khúc'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Văn Khúc tại Phúc Đức, gia tộc đương số có nhiều
người học cao, chăm chỉ "gieo nhân lành" nên phúc đức kéo dài lâu.`,
  },

  {
    id: 'tu-phu-tai-phuc-duc-kinh-duong',
    title: 'Tử Phù + Kình Dương tại Phúc Đức - bất hòa tai ương',
    sao: ['Tử Phù'],
    cung: ['Phúc Đức'],
    ketHop: ['Kình Dương'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Kình Dương tại Phúc Đức, họ tộc đương số dễ bất hòa,
vướng tai ương liên quan đến đất cát, mồ mả.`,
  },

  {
    id: 'tu-phu-tai-phuc-duc-hoa-ky',
    title: 'Tử Phù + Hóa Kỵ tại Phúc Đức - bất hòa tai ương',
    sao: ['Tử Phù'],
    cung: ['Phúc Đức'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Hóa Kỵ tại Phúc Đức, họ tộc đương số dễ bất hòa, vướng
tai ương liên quan đến đất cát, mồ mả.`,
  },

  {
    id: 'tu-phu-tai-phuc-duc-dia-khong',
    title: 'Tử Phù + Địa Không tại Phúc Đức - bất hòa tai ương',
    sao: ['Tử Phù'],
    cung: ['Phúc Đức'],
    ketHop: ['Địa Không'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Địa Không tại Phúc Đức, họ tộc đương số dễ bất hòa,
vướng tai ương liên quan đến đất cát, mồ mả.`,
  },

  {
    id: 'tu-phu-tai-phuc-duc-dia-kiep',
    title: 'Tử Phù + Địa Kiếp tại Phúc Đức - bất hòa tai ương',
    sao: ['Tử Phù'],
    cung: ['Phúc Đức'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Địa Kiếp tại Phúc Đức, họ tộc đương số dễ bất hòa,
vướng tai ương liên quan đến đất cát, mồ mả.`,
  },

  {
    id: 'tu-phu-tai-dien-trach',
    title: 'Tử Phù tại Điền Trạch',
    sao: ['Tử Phù'],
    cung: ['Điền Trạch'],
    doUuTien: 72,
    tomTat: `Khi Tử Phù đóng tại Điền Trạch, đương số hay có rắc rối, tai họa khi
ở nhà; nhà cửa hay có vấn đề, khó an yên, hay phải sửa sang hoặc dính tranh
chấp pháp lý.

Nếu biết tu tập, hành thiện, lập bàn thờ Phật, tai ương phần nhiều cũng được
hóa giải.`,
  },

  {
    id: 'tu-phu-tai-dien-trach-tu-vi',
    title: 'Tử Phù + Tử Vi tại Điền Trạch - cát lành Phật pháp',
    sao: ['Tử Phù'],
    cung: ['Điền Trạch'],
    ketHop: ['Tử Vi'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Tử Vi tại Điền Trạch, cách thành cát lành: nhà đương
số dễ rước Phật Bà Quan Âm về thờ, gắn với Phật pháp, không gian linh thiêng —
nhờ đó vượng khí, an ổn lâu dài.`,
  },

  {
    id: 'tu-phu-tai-dien-trach-thien-phu',
    title: 'Tử Phù + Thiên Phủ tại Điền Trạch - cát lành Phật pháp',
    sao: ['Tử Phù'],
    cung: ['Điền Trạch'],
    ketHop: ['Thiên Phủ'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Thiên Phủ tại Điền Trạch, cách thành cát lành: nhà
đương số dễ rước Phật Bà Quan Âm về thờ, gắn với Phật pháp, không gian linh
thiêng — nhờ đó vượng khí, an ổn lâu dài.`,
  },

  {
    id: 'tu-phu-tai-dien-trach-thien-dong',
    title: 'Tử Phù + Thiên Đồng tại Điền Trạch - cát lành Phật pháp',
    sao: ['Tử Phù'],
    cung: ['Điền Trạch'],
    ketHop: ['Thiên Đồng'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Thiên Đồng tại Điền Trạch, cách thành cát lành: nhà
đương số dễ rước Phật Bà Quan Âm về thờ, gắn với Phật pháp, không gian linh
thiêng — nhờ đó vượng khí, an ổn lâu dài.`,
  },

  {
    id: 'tu-phu-tai-dien-trach-thien-luong',
    title: 'Tử Phù + Thiên Lương tại Điền Trạch - cát lành Phật pháp',
    sao: ['Tử Phù'],
    cung: ['Điền Trạch'],
    ketHop: ['Thiên Lương'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Thiên Lương tại Điền Trạch, cách thành cát lành: nhà
đương số dễ rước Phật Bà Quan Âm về thờ, gắn với Phật pháp, không gian linh
thiêng — nhờ đó vượng khí, an ổn lâu dài.`,
  },

  {
    id: 'tu-phu-tai-dien-trach-an-quang',
    title: 'Tử Phù + Ân Quang tại Điền Trạch - cát lành Phật pháp',
    sao: ['Tử Phù'],
    cung: ['Điền Trạch'],
    ketHop: ['Ân Quang'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Ân Quang tại Điền Trạch, cách thành cát lành: nhà
đương số dễ rước Phật Bà Quan Âm về thờ, gắn với Phật pháp, không gian linh
thiêng — nhờ đó vượng khí, an ổn lâu dài.`,
  },

  {
    id: 'tu-phu-tai-dien-trach-thien-quy',
    title: 'Tử Phù + Thiên Quý tại Điền Trạch - cát lành Phật pháp',
    sao: ['Tử Phù'],
    cung: ['Điền Trạch'],
    ketHop: ['Thiên Quý'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Thiên Quý tại Điền Trạch, cách thành cát lành: nhà
đương số dễ rước Phật Bà Quan Âm về thờ, gắn với Phật pháp, không gian linh
thiêng — nhờ đó vượng khí, an ổn lâu dài.`,
  },

  {
    id: 'tu-phu-tai-dien-trach-hoa-tinh',
    title: 'Tử Phù + Hỏa Tinh tại Điền Trạch - tranh chấp kiện tụng',
    sao: ['Tử Phù'],
    cung: ['Điền Trạch'],
    ketHop: ['Hỏa Tinh'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Hỏa Tinh tại Điền Trạch, đương số có nguy cơ cao dính
tranh chấp, kiện tụng và phải thay đổi chỗ ở nhiều lần.`,
  },

  {
    id: 'tu-phu-tai-dien-trach-linh-tinh',
    title: 'Tử Phù + Linh Tinh tại Điền Trạch - tranh chấp kiện tụng',
    sao: ['Tử Phù'],
    cung: ['Điền Trạch'],
    ketHop: ['Linh Tinh'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Linh Tinh tại Điền Trạch, đương số có nguy cơ cao dính
tranh chấp, kiện tụng và phải thay đổi chỗ ở nhiều lần.`,
  },

  {
    id: 'tu-phu-tai-dien-trach-hoa-ky',
    title: 'Tử Phù + Hóa Kỵ tại Điền Trạch - tranh chấp kiện tụng',
    sao: ['Tử Phù'],
    cung: ['Điền Trạch'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Hóa Kỵ tại Điền Trạch, đương số có nguy cơ cao dính
tranh chấp, kiện tụng và phải thay đổi chỗ ở nhiều lần.`,
  },

  {
    id: 'tu-phu-tai-quan-loc',
    title: 'Tử Phù tại Quan Lộc',
    sao: ['Tử Phù'],
    cung: ['Quan Lộc'],
    doUuTien: 75,
    tomTat: `Khi Tử Phù đóng tại Quan Lộc, công việc của đương số bị cản trở, hay
mắc lỗi nhỏ và sơ suất, dễ bị cấp trên đánh giá thấp. Sự nghiệp lận đận, phải
"trầy da tróc vảy" qua nhiều thử thách mới ổn định.

Đặc tính rắc rối lại hợp với những nghề có tính dịch vụ, hỗ trợ, giải cứu các
tai nạn — như sửa chữa, cứu hộ, y tế, xử lý sự cố.`,
  },

  {
    id: 'tu-phu-tai-quan-loc-thien-luong',
    title: 'Tử Phù + Thiên Lương tại Quan Lộc - quý nhân hỗ trợ',
    sao: ['Tử Phù'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Lương'],
    doUuTien: 70,
    tomTat: `Khi Tử Phù gặp Thiên Lương tại Quan Lộc, sự nghiệp đương số có quý
nhân hỗ trợ, thuận lợi trong giáo dục, từ thiện, chữa bệnh.`,
  },

  {
    id: 'tu-phu-tai-quan-loc-tu-vi',
    title: 'Tử Phù + Tử Vi tại Quan Lộc - quý nhân hỗ trợ',
    sao: ['Tử Phù'],
    cung: ['Quan Lộc'],
    ketHop: ['Tử Vi'],
    doUuTien: 70,
    tomTat: `Khi Tử Phù gặp Tử Vi tại Quan Lộc, sự nghiệp đương số có quý nhân hỗ
trợ, thuận lợi trong giáo dục, từ thiện, chữa bệnh.`,
  },

  {
    id: 'tu-phu-tai-quan-loc-thien-phu',
    title: 'Tử Phù + Thiên Phủ tại Quan Lộc - quý nhân hỗ trợ',
    sao: ['Tử Phù'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Phủ'],
    doUuTien: 70,
    tomTat: `Khi Tử Phù gặp Thiên Phủ tại Quan Lộc, sự nghiệp đương số có quý
nhân hỗ trợ, thuận lợi trong giáo dục, từ thiện, chữa bệnh.`,
  },

  {
    id: 'tu-phu-tai-quan-loc-van-xuong',
    title: 'Tử Phù + Văn Xương tại Quan Lộc - quý nhân hỗ trợ',
    sao: ['Tử Phù'],
    cung: ['Quan Lộc'],
    ketHop: ['Văn Xương'],
    doUuTien: 70,
    tomTat: `Khi Tử Phù gặp Văn Xương tại Quan Lộc, sự nghiệp đương số có quý
nhân hỗ trợ, thuận lợi trong giáo dục, từ thiện, chữa bệnh.`,
  },

  {
    id: 'tu-phu-tai-quan-loc-van-khuc',
    title: 'Tử Phù + Văn Khúc tại Quan Lộc - quý nhân hỗ trợ',
    sao: ['Tử Phù'],
    cung: ['Quan Lộc'],
    ketHop: ['Văn Khúc'],
    doUuTien: 70,
    tomTat: `Khi Tử Phù gặp Văn Khúc tại Quan Lộc, sự nghiệp đương số có quý
nhân hỗ trợ, thuận lợi trong giáo dục, từ thiện, chữa bệnh.`,
  },

  {
    id: 'tu-phu-tai-quan-loc-tu-sat',
    title: 'Tử Phù + Tứ Sát tại Quan Lộc - sóng gió thị phi',
    sao: ['Tử Phù'],
    cung: ['Quan Lộc'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 70,
    tomTat: `Khi Tử Phù gặp Tứ Sát (Kình Dương, Đà La, Hỏa Tinh, Linh Tinh) tại
Quan Lộc, công việc đương số kéo theo nhiều sóng gió, thị phi, có tiểu nhân
cản trở. Đương số phải đổi việc nhiều lần mới ổn định.`,
  },

  {
    id: 'tu-phu-tai-no-boc',
    title: 'Tử Phù tại Nô Bộc',
    sao: ['Tử Phù'],
    cung: ['Nô Bộc'],
    doUuTien: 70,
    tomTat: `Khi Tử Phù đóng tại Nô Bộc, đương số hay gặp rắc rối và chịu thiệt
với bạn bè, cấp dưới. Nhiều khi quá cả tin và tốt bụng nên rơi vào cảnh "làm ơn
mắc oán", bị bạn bè đồng nghiệp lợi dụng và phản bội.`,
  },

  {
    id: 'tu-phu-tai-no-boc-dao-hoa',
    title: 'Tử Phù + Đào Hoa tại Nô Bộc - thị phi tình ái',
    sao: ['Tử Phù'],
    cung: ['Nô Bộc'],
    ketHop: ['Đào Hoa'],
    doUuTien: 65,
    tomTat: `Khi Tử Phù gặp Đào Hoa tại Nô Bộc, thị phi càng nhiều. Đương số dễ
vướng vào chuyện trai gái phức tạp dù đã yên bề gia thất, mang tiếng xấu khó
gột rửa. Đây là người nhiều mối tình dở dang, kết hôn rồi càng nhiều người
thích, dễ gây ra tai họa.`,
  },

  {
    id: 'tu-phu-tai-no-boc-luc-cat',
    title: 'Tử Phù + Lục Cát tại Nô Bộc - quý nhân nâng đỡ',
    sao: ['Tử Phù'],
    cung: ['Nô Bộc'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 65,
    tomTat: `Khi Tử Phù gặp một trong các sao Tả Phù, Hữu Bật, Văn Xương, Văn
Khúc, Thiên Khôi, Thiên Việt tại Nô Bộc, đương số có quý nhân nâng đỡ; bạn bè
tốt giúp bù đắp những thiệt thòi.`,
  },

  {
    id: 'tu-phu-tai-no-boc-kinh-duong',
    title: 'Tử Phù + Kình Dương tại Nô Bộc - bạn phản trắc',
    sao: ['Tử Phù'],
    cung: ['Nô Bộc'],
    ketHop: ['Kình Dương'],
    doUuTien: 65,
    tomTat: `Khi Tử Phù gặp Kình Dương tại Nô Bộc, bạn bè đương số dễ phản trắc,
gặp kẻ tiểu nhân phá hoại — vừa hao tài vừa sinh kiện tụng.`,
  },

  {
    id: 'tu-phu-tai-no-boc-hoa-ky',
    title: 'Tử Phù + Hóa Kỵ tại Nô Bộc - bạn phản trắc',
    sao: ['Tử Phù'],
    cung: ['Nô Bộc'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 65,
    tomTat: `Khi Tử Phù gặp Hóa Kỵ tại Nô Bộc, bạn bè đương số dễ phản trắc, gặp
kẻ tiểu nhân phá hoại — vừa hao tài vừa sinh kiện tụng.`,
  },

  {
    id: 'tu-phu-tai-no-boc-dia-khong',
    title: 'Tử Phù + Địa Không tại Nô Bộc - bạn phản trắc',
    sao: ['Tử Phù'],
    cung: ['Nô Bộc'],
    ketHop: ['Địa Không'],
    doUuTien: 65,
    tomTat: `Khi Tử Phù gặp Địa Không tại Nô Bộc, bạn bè đương số dễ phản trắc,
gặp kẻ tiểu nhân phá hoại — vừa hao tài vừa sinh kiện tụng.`,
  },

  {
    id: 'tu-phu-tai-no-boc-dia-kiep',
    title: 'Tử Phù + Địa Kiếp tại Nô Bộc - bạn phản trắc',
    sao: ['Tử Phù'],
    cung: ['Nô Bộc'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 65,
    tomTat: `Khi Tử Phù gặp Địa Kiếp tại Nô Bộc, bạn bè đương số dễ phản trắc,
gặp kẻ tiểu nhân phá hoại — vừa hao tài vừa sinh kiện tụng.`,
  },

  {
    id: 'tu-phu-tai-thien-di',
    title: 'Tử Phù tại Thiên Di',
    sao: ['Tử Phù'],
    cung: ['Thiên Di'],
    doUuTien: 70,
    tomTat: `Khi Tử Phù đóng tại Thiên Di, đương số bản tính hiền lành, ưa nhẫn
nhịn để giữ hòa khí. Ra ngoài đương số thường nhún nhường, chịu thiệt thòi,
không hay tranh đấu nên dễ bị lợi dụng.

Bù lại, nhờ sự điềm đạm mà đương số tránh được va chạm lớn, ít gây thù chuốc
oán.`,
  },

  {
    id: 'tu-phu-tai-thien-di-dao-hoa',
    title: 'Tử Phù + Đào Hoa tại Thiên Di - quý mến khác giới',
    sao: ['Tử Phù'],
    cung: ['Thiên Di'],
    ketHop: ['Đào Hoa'],
    doUuTien: 65,
    tomTat: `Khi Tử Phù gặp Đào Hoa tại Thiên Di, đương số dễ gặp quý nhân, được
nhiều người quý mến — đặc biệt là bạn khác giới. Phong cách nhún nhường, điềm
đạm là điểm thu hút.`,
  },

  {
    id: 'tu-phu-tai-thien-di-hong-loan',
    title: 'Tử Phù + Hồng Loan tại Thiên Di - quý mến khác giới',
    sao: ['Tử Phù'],
    cung: ['Thiên Di'],
    ketHop: ['Hồng Loan'],
    doUuTien: 65,
    tomTat: `Khi Tử Phù gặp Hồng Loan tại Thiên Di, đương số dễ gặp quý nhân,
được nhiều người quý mến — đặc biệt là bạn khác giới. Phong cách nhún nhường,
điềm đạm là điểm thu hút.`,
  },

  {
    id: 'tu-phu-tai-thien-di-hoa-ky',
    title: 'Tử Phù + Hóa Kỵ tại Thiên Di - xuất hành bất lợi',
    sao: ['Tử Phù'],
    cung: ['Thiên Di'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 65,
    tomTat: `Khi Tử Phù gặp Hóa Kỵ tại Thiên Di, việc xuất hành của đương số
thường bất lợi, dễ hao tài, vướng thị phi hay chuyện tình cảm phức tạp.`,
  },

  {
    id: 'tu-phu-tai-thien-di-dia-khong',
    title: 'Tử Phù + Địa Không tại Thiên Di - xuất hành bất lợi',
    sao: ['Tử Phù'],
    cung: ['Thiên Di'],
    ketHop: ['Địa Không'],
    doUuTien: 65,
    tomTat: `Khi Tử Phù gặp Địa Không tại Thiên Di, việc xuất hành của đương số
thường bất lợi, dễ hao tài, vướng thị phi hay chuyện tình cảm phức tạp.`,
  },

  {
    id: 'tu-phu-tai-thien-di-dia-kiep',
    title: 'Tử Phù + Địa Kiếp tại Thiên Di - xuất hành bất lợi',
    sao: ['Tử Phù'],
    cung: ['Thiên Di'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 65,
    tomTat: `Khi Tử Phù gặp Địa Kiếp tại Thiên Di, việc xuất hành của đương số
thường bất lợi, dễ hao tài, vướng thị phi hay chuyện tình cảm phức tạp.`,
  },

  {
    id: 'tu-phu-tai-thien-di-hoa-tinh',
    title: 'Tử Phù + Hỏa Tinh tại Thiên Di - xuất hành bất lợi',
    sao: ['Tử Phù'],
    cung: ['Thiên Di'],
    ketHop: ['Hỏa Tinh'],
    doUuTien: 65,
    tomTat: `Khi Tử Phù gặp Hỏa Tinh tại Thiên Di, việc xuất hành của đương số
thường bất lợi, dễ hao tài, vướng thị phi hay chuyện tình cảm phức tạp.`,
  },

  {
    id: 'tu-phu-tai-thien-di-linh-tinh',
    title: 'Tử Phù + Linh Tinh tại Thiên Di - xuất hành bất lợi',
    sao: ['Tử Phù'],
    cung: ['Thiên Di'],
    ketHop: ['Linh Tinh'],
    doUuTien: 65,
    tomTat: `Khi Tử Phù gặp Linh Tinh tại Thiên Di, việc xuất hành của đương số
thường bất lợi, dễ hao tài, vướng thị phi hay chuyện tình cảm phức tạp.`,
  },

  {
    id: 'tu-phu-tai-tat-ach',
    title: 'Tử Phù tại Tật Ách',
    sao: ['Tử Phù'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `Khi Tử Phù đóng tại Tật Ách, đương số hay mắc các tai họa, tai nạn,
bệnh tật nhỏ. Cơ thể dễ vướng bệnh vặt kéo dài dai dẳng khiến tinh thần mệt
mỏi.`,
  },

  {
    id: 'tu-phu-tai-tat-ach-thien-luong',
    title: 'Tử Phù + Thiên Lương tại Tật Ách - thầy giỏi thuốc hay',
    sao: ['Tử Phù'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Lương'],
    doUuTien: 70,
    tomTat: `Khi Tử Phù gặp Thiên Lương tại Tật Ách, đương số dễ gặp được thầy
giỏi, thuốc hay; nhiều lần "tai qua nạn khỏi". Đương số có duyên với y học hoặc
tâm linh, biết hướng thiện để hóa giải nghiệp bệnh.`,
  },

  {
    id: 'tu-phu-tai-tat-ach-nguyet-duc',
    title: 'Tử Phù + Nguyệt Đức tại Tật Ách - thầy giỏi thuốc hay',
    sao: ['Tử Phù'],
    cung: ['Tật Ách'],
    ketHop: ['Nguyệt Đức'],
    doUuTien: 70,
    tomTat: `Khi Tử Phù gặp Nguyệt Đức tại Tật Ách, đương số dễ gặp được thầy
giỏi, thuốc hay; nhiều lần "tai qua nạn khỏi". Đương số có duyên với y học hoặc
tâm linh, biết hướng thiện để hóa giải nghiệp bệnh.`,
  },

  {
    id: 'tu-phu-tai-tat-ach-thien-duc',
    title: 'Tử Phù + Thiên Đức tại Tật Ách - thầy giỏi thuốc hay',
    sao: ['Tử Phù'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Đức'],
    doUuTien: 70,
    tomTat: `Khi Tử Phù gặp Thiên Đức tại Tật Ách, đương số dễ gặp được thầy
giỏi, thuốc hay; nhiều lần "tai qua nạn khỏi". Đương số có duyên với y học hoặc
tâm linh, biết hướng thiện để hóa giải nghiệp bệnh.`,
  },

  {
    id: 'tu-phu-tai-tat-ach-thien-quan',
    title: 'Tử Phù + Thiên Quan tại Tật Ách - thầy giỏi thuốc hay',
    sao: ['Tử Phù'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Quan'],
    doUuTien: 70,
    tomTat: `Khi Tử Phù gặp Thiên Quan tại Tật Ách, đương số dễ gặp được thầy
giỏi, thuốc hay; nhiều lần "tai qua nạn khỏi". Đương số có duyên với y học hoặc
tâm linh, biết hướng thiện để hóa giải nghiệp bệnh.`,
  },

  {
    id: 'tu-phu-tai-tat-ach-thien-phuc',
    title: 'Tử Phù + Thiên Phúc tại Tật Ách - thầy giỏi thuốc hay',
    sao: ['Tử Phù'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Phúc'],
    doUuTien: 70,
    tomTat: `Khi Tử Phù gặp Thiên Phúc tại Tật Ách, đương số dễ gặp được thầy
giỏi, thuốc hay; nhiều lần "tai qua nạn khỏi". Đương số có duyên với y học hoặc
tâm linh, biết hướng thiện để hóa giải nghiệp bệnh.`,
  },

  {
    id: 'tu-phu-tai-tai-bach',
    title: 'Tử Phù tại Tài Bạch',
    sao: ['Tử Phù'],
    cung: ['Tài Bạch'],
    doUuTien: 72,
    tomTat: `Khi Tử Phù đóng tại Tài Bạch, đương số hay chịu rắc rối và tiêu hao
nhỏ về tiền bạc. Bản tính cẩn trọng nên ít dám đầu tư lớn, thiên về tích lũy
nhỏ hoặc làm thiện nguyện. Tiền tài tuy kiếm được nhưng khó giữ, dễ hao tốn vào
việc bất ngờ.

Mặt tích phúc của Tử Phù tại Tài Bạch là đương số chịu khó quyên góp làm phúc,
cúng dường chư tăng.`,
  },

  {
    id: 'tu-phu-tai-tai-bach-thien-phuc',
    title: 'Tử Phù + Thiên Phúc tại Tài Bạch - tài chính ổn định',
    sao: ['Tử Phù'],
    cung: ['Tài Bạch'],
    ketHop: ['Thiên Phúc'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Thiên Phúc tại Tài Bạch, tài chính đương số ổn định
hơn; dòng tiền chậm nhưng sạch và vững. Chi tiền vào việc nghĩa thì hưởng phúc
báo lâu dài.`,
  },

  {
    id: 'tu-phu-tai-tai-bach-thien-quan',
    title: 'Tử Phù + Thiên Quan tại Tài Bạch - tài chính ổn định',
    sao: ['Tử Phù'],
    cung: ['Tài Bạch'],
    ketHop: ['Thiên Quan'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Thiên Quan tại Tài Bạch, tài chính đương số ổn định
hơn; dòng tiền chậm nhưng sạch và vững. Chi tiền vào việc nghĩa thì hưởng phúc
báo lâu dài.`,
  },

  {
    id: 'tu-phu-tai-tai-bach-thien-duc',
    title: 'Tử Phù + Thiên Đức tại Tài Bạch - tài chính ổn định',
    sao: ['Tử Phù'],
    cung: ['Tài Bạch'],
    ketHop: ['Thiên Đức'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Thiên Đức tại Tài Bạch, tài chính đương số ổn định
hơn; dòng tiền chậm nhưng sạch và vững. Chi tiền vào việc nghĩa thì hưởng phúc
báo lâu dài.`,
  },

  {
    id: 'tu-phu-tai-tai-bach-nguyet-duc',
    title: 'Tử Phù + Nguyệt Đức tại Tài Bạch - tài chính ổn định',
    sao: ['Tử Phù'],
    cung: ['Tài Bạch'],
    ketHop: ['Nguyệt Đức'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Nguyệt Đức tại Tài Bạch, tài chính đương số ổn định
hơn; dòng tiền chậm nhưng sạch và vững. Chi tiền vào việc nghĩa thì hưởng phúc
báo lâu dài.`,
  },

  {
    id: 'tu-phu-tai-tai-bach-van-xuong',
    title: 'Tử Phù + Văn Xương tại Tài Bạch - tài chính ổn định',
    sao: ['Tử Phù'],
    cung: ['Tài Bạch'],
    ketHop: ['Văn Xương'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Văn Xương tại Tài Bạch, tài chính đương số ổn định
hơn; dòng tiền chậm nhưng sạch và vững. Chi tiền vào việc nghĩa thì hưởng phúc
báo lâu dài.`,
  },

  {
    id: 'tu-phu-tai-tai-bach-van-khuc',
    title: 'Tử Phù + Văn Khúc tại Tài Bạch - tài chính ổn định',
    sao: ['Tử Phù'],
    cung: ['Tài Bạch'],
    ketHop: ['Văn Khúc'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Văn Khúc tại Tài Bạch, tài chính đương số ổn định
hơn; dòng tiền chậm nhưng sạch và vững. Chi tiền vào việc nghĩa thì hưởng phúc
báo lâu dài.`,
  },

  {
    id: 'tu-phu-tai-tai-bach-hoa-ky',
    title: 'Tử Phù + Hóa Kỵ tại Tài Bạch - hao tán mất tiền',
    sao: ['Tử Phù'],
    cung: ['Tài Bạch'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Hóa Kỵ tại Tài Bạch, đương số cần cẩn trọng hao tán —
mất tiền do lừa đảo, tranh chấp, tai nạn.`,
  },

  {
    id: 'tu-phu-tai-tai-bach-kinh-duong',
    title: 'Tử Phù + Kình Dương tại Tài Bạch - hao tán mất tiền',
    sao: ['Tử Phù'],
    cung: ['Tài Bạch'],
    ketHop: ['Kình Dương'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Kình Dương tại Tài Bạch, đương số cần cẩn trọng hao
tán — mất tiền do lừa đảo, tranh chấp, tai nạn.`,
  },

  {
    id: 'tu-phu-tai-tai-bach-da-la',
    title: 'Tử Phù + Đà La tại Tài Bạch - hao tán mất tiền',
    sao: ['Tử Phù'],
    cung: ['Tài Bạch'],
    ketHop: ['Đà La'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Đà La tại Tài Bạch, đương số cần cẩn trọng hao tán —
mất tiền do lừa đảo, tranh chấp, tai nạn.`,
  },

  {
    id: 'tu-phu-tai-tai-bach-dia-khong',
    title: 'Tử Phù + Địa Không tại Tài Bạch - hao tán mất tiền',
    sao: ['Tử Phù'],
    cung: ['Tài Bạch'],
    ketHop: ['Địa Không'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Địa Không tại Tài Bạch, đương số cần cẩn trọng hao
tán — mất tiền do lừa đảo, tranh chấp, tai nạn.`,
  },

  {
    id: 'tu-phu-tai-tai-bach-dia-kiep',
    title: 'Tử Phù + Địa Kiếp tại Tài Bạch - hao tán mất tiền',
    sao: ['Tử Phù'],
    cung: ['Tài Bạch'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Địa Kiếp tại Tài Bạch, đương số cần cẩn trọng hao
tán — mất tiền do lừa đảo, tranh chấp, tai nạn.`,
  },

  {
    id: 'tu-phu-tai-tai-bach-hoa-tinh',
    title: 'Tử Phù + Hỏa Tinh tại Tài Bạch - hao tán mất tiền',
    sao: ['Tử Phù'],
    cung: ['Tài Bạch'],
    ketHop: ['Hỏa Tinh'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Hỏa Tinh tại Tài Bạch, đương số cần cẩn trọng hao
tán — mất tiền do lừa đảo, tranh chấp, tai nạn.`,
  },

  {
    id: 'tu-phu-tai-tai-bach-linh-tinh',
    title: 'Tử Phù + Linh Tinh tại Tài Bạch - hao tán mất tiền',
    sao: ['Tử Phù'],
    cung: ['Tài Bạch'],
    ketHop: ['Linh Tinh'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Linh Tinh tại Tài Bạch, đương số cần cẩn trọng hao
tán — mất tiền do lừa đảo, tranh chấp, tai nạn.`,
  },

  {
    id: 'tu-phu-tai-tu-tuc',
    title: 'Tử Phù tại Tử Tức',
    sao: ['Tử Phù'],
    cung: ['Tử Tức'],
    doUuTien: 72,
    tomTat: `Khi Tử Phù đóng tại Tử Tức, con cái đương số thỉnh thoảng ốm đau, hay
mắc tai nạn nhỏ và gặp chuyện rắc rối trong tuổi thơ. Đương số dễ có con cầu
tự (cầu khẩn mới có), thiên về sinh con gái.

Mặt tích cực là con cái đương số hiền lành, ngoan ngoãn, biết nghe lời, ít gây
phiền toái. Sự thiệt thòi nhỏ của con thường được xem là yếu tố "giảm trừ" tai
ương nặng cho gia đạo.`,
  },

  {
    id: 'tu-phu-tai-tu-tuc-thien-duc',
    title: 'Tử Phù + Thiên Đức tại Tử Tức - con sáng dạ',
    sao: ['Tử Phù'],
    cung: ['Tử Tức'],
    ketHop: ['Thiên Đức'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Thiên Đức tại Tử Tức, con cái đương số sáng dạ, hiếu
thuận, công thành danh toại.`,
  },

  {
    id: 'tu-phu-tai-tu-tuc-nguyet-duc',
    title: 'Tử Phù + Nguyệt Đức tại Tử Tức - con sáng dạ',
    sao: ['Tử Phù'],
    cung: ['Tử Tức'],
    ketHop: ['Nguyệt Đức'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Nguyệt Đức tại Tử Tức, con cái đương số sáng dạ, hiếu
thuận, công thành danh toại.`,
  },

  {
    id: 'tu-phu-tai-tu-tuc-thien-quan',
    title: 'Tử Phù + Thiên Quan tại Tử Tức - con sáng dạ',
    sao: ['Tử Phù'],
    cung: ['Tử Tức'],
    ketHop: ['Thiên Quan'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Thiên Quan tại Tử Tức, con cái đương số sáng dạ, hiếu
thuận, công thành danh toại.`,
  },

  {
    id: 'tu-phu-tai-tu-tuc-thien-phuc',
    title: 'Tử Phù + Thiên Phúc tại Tử Tức - con sáng dạ',
    sao: ['Tử Phù'],
    cung: ['Tử Tức'],
    ketHop: ['Thiên Phúc'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Thiên Phúc tại Tử Tức, con cái đương số sáng dạ, hiếu
thuận, công thành danh toại.`,
  },

  {
    id: 'tu-phu-tai-tu-tuc-ta-phu',
    title: 'Tử Phù + Tả Phù tại Tử Tức - con sáng dạ',
    sao: ['Tử Phù'],
    cung: ['Tử Tức'],
    ketHop: ['Tả Phù'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Tả Phù tại Tử Tức, con cái đương số sáng dạ, hiếu
thuận, công thành danh toại.`,
  },

  {
    id: 'tu-phu-tai-tu-tuc-huu-bat',
    title: 'Tử Phù + Hữu Bật tại Tử Tức - con sáng dạ',
    sao: ['Tử Phù'],
    cung: ['Tử Tức'],
    ketHop: ['Hữu Bật'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Hữu Bật tại Tử Tức, con cái đương số sáng dạ, hiếu
thuận, công thành danh toại.`,
  },

  {
    id: 'tu-phu-tai-tu-tuc-van-xuong',
    title: 'Tử Phù + Văn Xương tại Tử Tức - con sáng dạ',
    sao: ['Tử Phù'],
    cung: ['Tử Tức'],
    ketHop: ['Văn Xương'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Văn Xương tại Tử Tức, con cái đương số sáng dạ, hiếu
thuận, công thành danh toại.`,
  },

  {
    id: 'tu-phu-tai-tu-tuc-van-khuc',
    title: 'Tử Phù + Văn Khúc tại Tử Tức - con sáng dạ',
    sao: ['Tử Phù'],
    cung: ['Tử Tức'],
    ketHop: ['Văn Khúc'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Văn Khúc tại Tử Tức, con cái đương số sáng dạ, hiếu
thuận, công thành danh toại.`,
  },

  {
    id: 'tu-phu-tai-tu-tuc-kinh-duong',
    title: 'Tử Phù + Kình Dương tại Tử Tức - con bệnh lận đận',
    sao: ['Tử Phù'],
    cung: ['Tử Tức'],
    ketHop: ['Kình Dương'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Kình Dương tại Tử Tức, con cái đương số dễ mắc bệnh,
học hành lận đận, tình duyên trắc trở và lập gia đình muộn.`,
  },

  {
    id: 'tu-phu-tai-tu-tuc-da-la',
    title: 'Tử Phù + Đà La tại Tử Tức - con bệnh lận đận',
    sao: ['Tử Phù'],
    cung: ['Tử Tức'],
    ketHop: ['Đà La'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Đà La tại Tử Tức, con cái đương số dễ mắc bệnh, học
hành lận đận, tình duyên trắc trở và lập gia đình muộn.`,
  },

  {
    id: 'tu-phu-tai-tu-tuc-hoa-ky',
    title: 'Tử Phù + Hóa Kỵ tại Tử Tức - con bệnh lận đận',
    sao: ['Tử Phù'],
    cung: ['Tử Tức'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Hóa Kỵ tại Tử Tức, con cái đương số dễ mắc bệnh, học
hành lận đận, tình duyên trắc trở và lập gia đình muộn.`,
  },

  {
    id: 'tu-phu-tai-tu-tuc-dia-khong',
    title: 'Tử Phù + Địa Không tại Tử Tức - con bệnh lận đận',
    sao: ['Tử Phù'],
    cung: ['Tử Tức'],
    ketHop: ['Địa Không'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Địa Không tại Tử Tức, con cái đương số dễ mắc bệnh,
học hành lận đận, tình duyên trắc trở và lập gia đình muộn.`,
  },

  {
    id: 'tu-phu-tai-tu-tuc-dia-kiep',
    title: 'Tử Phù + Địa Kiếp tại Tử Tức - con bệnh lận đận',
    sao: ['Tử Phù'],
    cung: ['Tử Tức'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Địa Kiếp tại Tử Tức, con cái đương số dễ mắc bệnh,
học hành lận đận, tình duyên trắc trở và lập gia đình muộn.`,
  },

  {
    id: 'tu-phu-tai-tu-tuc-hoa-tinh',
    title: 'Tử Phù + Hỏa Tinh tại Tử Tức - con bệnh lận đận',
    sao: ['Tử Phù'],
    cung: ['Tử Tức'],
    ketHop: ['Hỏa Tinh'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Hỏa Tinh tại Tử Tức, con cái đương số dễ mắc bệnh,
học hành lận đận, tình duyên trắc trở và lập gia đình muộn.`,
  },

  {
    id: 'tu-phu-tai-tu-tuc-linh-tinh',
    title: 'Tử Phù + Linh Tinh tại Tử Tức - con bệnh lận đận',
    sao: ['Tử Phù'],
    cung: ['Tử Tức'],
    ketHop: ['Linh Tinh'],
    doUuTien: 67,
    tomTat: `Khi Tử Phù gặp Linh Tinh tại Tử Tức, con cái đương số dễ mắc bệnh,
học hành lận đận, tình duyên trắc trở và lập gia đình muộn.`,
  },

  {
    id: 'tu-phu-tai-phu-the',
    title: 'Tử Phù tại Phu Thê',
    sao: ['Tử Phù'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `Khi Tử Phù đóng tại Phu Thê, người hôn phối của đương số mang đặc
trưng hiền lành, nhẹ nhàng, không chấp nhặt, lòng độ lượng cao. Bạn đời ưa làm
phúc, thích tu tập, tìm hiểu tâm linh, trọng tình nghĩa và tâm hướng thiện.

Hôn nhân nhờ vậy có nền tảng vững vàng; vợ chồng biết nhường nhịn, cảm thông.
Mặt khó là người hôn phối hay gặp tai nạn, bệnh tật nhỏ khiến gia đạo phải bận
lòng lo toan.

Khi có thêm sát tinh, hôn nhân dễ bất ổn — sự nhẫn nhịn vẫn là chìa khóa giữ
ấm cửa nhà.`,
  },

  {
    id: 'tu-phu-tai-phu-the-thien-duc',
    title: 'Tử Phù + Thiên Đức tại Phu Thê - hôn nhân bền vững',
    sao: ['Tử Phù'],
    ketHop: ['Thiên Đức'],
    cung: ['Phu Thê'],
    doUuTien: 70,
    tomTat: `Khi Tử Phù gặp Thiên Đức tại Phu Thê, hôn nhân của đương số bền
vững, vợ chồng "như đũa có đôi".`,
  },

  {
    id: 'tu-phu-tai-phu-the-nguyet-duc',
    title: 'Tử Phù + Nguyệt Đức tại Phu Thê - hôn nhân bền vững',
    sao: ['Tử Phù'],
    ketHop: ['Nguyệt Đức'],
    cung: ['Phu Thê'],
    doUuTien: 70,
    tomTat: `Khi Tử Phù gặp Nguyệt Đức tại Phu Thê, hôn nhân của đương số bền
vững, vợ chồng "như đũa có đôi".`,
  },

  {
    id: 'tu-phu-tai-phu-the-ta-phu',
    title: 'Tử Phù + Tả Phù tại Phu Thê - hôn nhân bền vững',
    sao: ['Tử Phù'],
    ketHop: ['Tả Phù'],
    cung: ['Phu Thê'],
    doUuTien: 70,
    tomTat: `Khi Tử Phù gặp Tả Phù tại Phu Thê, hôn nhân của đương số bền vững,
vợ chồng "như đũa có đôi".`,
  },

  {
    id: 'tu-phu-tai-phu-the-huu-bat',
    title: 'Tử Phù + Hữu Bật tại Phu Thê - hôn nhân bền vững',
    sao: ['Tử Phù'],
    ketHop: ['Hữu Bật'],
    cung: ['Phu Thê'],
    doUuTien: 70,
    tomTat: `Khi Tử Phù gặp Hữu Bật tại Phu Thê, hôn nhân của đương số bền vững,
vợ chồng "như đũa có đôi".`,
  },

  {
    id: 'tu-phu-tai-phu-the-van-xuong',
    title: 'Tử Phù + Văn Xương tại Phu Thê - hôn nhân bền vững',
    sao: ['Tử Phù'],
    ketHop: ['Văn Xương'],
    cung: ['Phu Thê'],
    doUuTien: 70,
    tomTat: `Khi Tử Phù gặp Văn Xương tại Phu Thê, hôn nhân của đương số bền
vững, vợ chồng "như đũa có đôi".`,
  },

  {
    id: 'tu-phu-tai-huynh-de',
    title: 'Tử Phù tại Huynh Đệ',
    sao: ['Tử Phù'],
    cung: ['Huynh Đệ'],
    doUuTien: 70,
    tomTat: `Khi Tử Phù đóng tại Huynh Đệ, anh chị em của đương số phần đa là
người hiền lành, nhân hậu, trọng tình hơn lợi và hay nhường nhịn mình. Tính
cách điềm đạm khiến mối quan hệ trong nhà hòa thuận, "chị ngã em nâng". Trong
nhà thường có người thiên hướng tâm linh, thích tu tập hoặc nghiên cứu huyền
học.

Mặt khó là anh em dễ gặp trắc trở; mỗi người một nỗi niềm khiến tình cảm xa
cách. Khi có thêm cát tinh, anh em gắn bó, có người học hành giỏi giang, làm
rạng danh dòng họ. Khi có thêm sát tinh, dễ sinh rắc rối — đương số nhiều phen
phải gánh vác thay anh em.`,
  },

  {
    id: 'tu-phu-han-kinh-da',
    title: 'Tử Phù vào hạn + Kình Dương / Đà La / Hóa Kỵ - tai nạn máu huyết',
    sao: ['Tử Phù'],
    ketHop: ['Kình Dương', 'Đà La', 'Hóa Kỵ'],
    doUuTien: 65,
    tomTat: `Khi Tử Phù vào hạn cùng Kình Dương, Đà La hoặc Hóa Kỵ, đương số đối
mặt nguy cơ tai nạn, phẫu thuật; vấn đề máu huyết tăng cao; bệnh vặt dai dẳng
và thương tích nhỏ; tâm lý lo lắng nhiều hơn cả bệnh trạng thực tế.

Lời khuyên cho hạn này là giữ an toàn đi lại, chăm sóc thân thể kỹ lưỡng và
tránh chủ quan mà gặp họa bất ngờ.`,
  },

  {
    id: 'tu-phu-han-thien-duc',
    title: 'Tử Phù vào hạn + Thiên Đức - bệnh tình hung hóa cát',
    sao: ['Tử Phù'],
    ketHop: ['Thiên Đức'],
    doUuTien: 60,
    tomTat: `Khi Tử Phù vào hạn cùng Thiên Đức, bệnh tật của đương số thường sớm
được chữa khỏi, dễ gặp được thầy thuốc giỏi; bệnh tình từ hung hóa cát.`,
  },

  {
    id: 'tu-phu-han-nguyet-duc',
    title: 'Tử Phù vào hạn + Nguyệt Đức - bệnh tình hung hóa cát',
    sao: ['Tử Phù'],
    ketHop: ['Nguyệt Đức'],
    doUuTien: 60,
    tomTat: `Khi Tử Phù vào hạn cùng Nguyệt Đức, bệnh tật của đương số thường
sớm được chữa khỏi, dễ gặp được thầy thuốc giỏi; bệnh tình từ hung hóa cát.`,
  },

  {
    id: 'tu-phu-han-giai-than',
    title: 'Tử Phù vào hạn + Giải Thần - bệnh tình hung hóa cát',
    sao: ['Tử Phù'],
    ketHop: ['Giải Thần'],
    doUuTien: 60,
    tomTat: `Khi Tử Phù vào hạn cùng Giải Thần, bệnh tật của đương số thường sớm
được chữa khỏi, dễ gặp được thầy thuốc giỏi; bệnh tình từ hung hóa cát.`,
  },

  {
    id: 'tu-phu-han-sat-tinh-hao-tai',
    title: 'Tử Phù vào hạn + Sát Tinh - hao tài tốn của',
    sao: ['Tử Phù'],
    doUuTien: 65,
    tomTat: `Khi Tử Phù vào hạn cùng sát tinh, đây là dấu hiệu báo hiệu hao hụt
tài chính. Đương số dễ hao tài tốn của một cách bất ngờ — có thể vì sửa chữa,
khắc phục sự cố, chữa bệnh, hoặc mất mát do bị lừa gạt.

Đi cùng sát tinh, tiền dễ mất vô ích, gặp cảnh "tiền mất tật mang", bị kẻ xấu
lợi dụng hoặc vướng kiện tụng.`,
  },

  {
    id: 'tu-phu-han-hoa-loc-tich-phuc',
    title: 'Tử Phù vào hạn + Hóa Lộc - hao tài tích phúc',
    sao: ['Tử Phù'],
    ketHop: ['Hóa Lộc'],
    doUuTien: 60,
    tomTat: `Khi Tử Phù vào hạn cùng Hóa Lộc, hao tài thường mang ý nghĩa tích
phúc — như quyên góp hoặc chi tiêu cho học hành, tu dưỡng. Tuy mất tiền nhưng
sinh phúc về sau.`,
  },

  {
    id: 'tu-phu-han-van-xuong-tich-phuc',
    title: 'Tử Phù vào hạn + Văn Xương - hao tài tích phúc',
    sao: ['Tử Phù'],
    ketHop: ['Văn Xương'],
    doUuTien: 60,
    tomTat: `Khi Tử Phù vào hạn cùng Văn Xương, hao tài thường mang ý nghĩa tích
phúc — như quyên góp hoặc chi tiêu cho học hành, tu dưỡng. Tuy mất tiền nhưng
sinh phúc về sau.`,
  },

  {
    id: 'tu-phu-han-van-khuc-tich-phuc',
    title: 'Tử Phù vào hạn + Văn Khúc - hao tài tích phúc',
    sao: ['Tử Phù'],
    ketHop: ['Văn Khúc'],
    doUuTien: 60,
    tomTat: `Khi Tử Phù vào hạn cùng Văn Khúc, hao tài thường mang ý nghĩa tích
phúc — như quyên góp hoặc chi tiêu cho học hành, tu dưỡng. Tuy mất tiền nhưng
sinh phúc về sau.`,
  },

  {
    id: 'tu-phu-han-thien-viet-tich-phuc',
    title: 'Tử Phù vào hạn + Thiên Việt - hao tài tích phúc',
    sao: ['Tử Phù'],
    ketHop: ['Thiên Việt'],
    doUuTien: 60,
    tomTat: `Khi Tử Phù vào hạn cùng Thiên Việt, hao tài thường mang ý nghĩa
tích phúc — như quyên góp hoặc chi tiêu cho học hành, tu dưỡng. Tuy mất tiền
nhưng sinh phúc về sau.`,
  },

  {
    id: 'tu-phu-loi-khuyen',
    title: 'Lời khuyên cho người Tử Phù',
    sao: ['Tử Phù'],
    doUuTien: 35,
    tomTat: `Tử Phù tuy gắn liền với sự thiệt thòi nhưng cũng là dấu hiệu nhắc
nhở đương số về lòng kiên nhẫn và sự nhân hậu.

Sức mạnh tự nhiên của Tử Phù nằm ở Nguyệt Đức luôn đồng cung — khả năng hóa
giải mạnh, thiệt thòi nhỏ thường giảm trừ tai họa lớn cho gia đạo.

Bí quyết để phát huy Tử Phù gồm:

- Chủ động tu dưỡng, hành thiện
- Thận trọng trong ứng xử
- Hướng về tâm linh — kết hợp với Thiên Lương sẽ tìm thấy bình an
- Kiên nhẫn trước nghịch cảnh
- Giữ tâm tích cực, biến khó khăn thành động lực
- Tránh đam mê Đào Hoa để thoát khỏi bi kịch tình duyên

Khi biết chủ động, đương số không chỉ giảm bớt rủi ro mà còn biến nghịch cảnh
thành nền tảng để trưởng thành — Tử Phù trở thành bạn đồng hành dẫn lối tới
đạo hạnh.`,
  },
];
