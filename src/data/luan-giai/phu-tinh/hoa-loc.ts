import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO HÓA LỘC - Tứ Hóa
 */
export const luanGiai_HoaLoc: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung của sao Hóa Lộc
  // ============================================================
  {
    id: 'hoa-loc-tinh-chat-chung',
    title: 'Hóa Lộc - Đặc tính chung',
    sao: ['Hóa Lộc'],
    doUuTien: 30,
    tomTat: `Hóa Lộc thuộc bộ Tứ Hóa cùng với Hóa Quyền, Hóa Khoa và Hóa Kỵ,
ngũ hành Mộc. Hóa khí của sao này vừa là Phúc Tinh vừa là Tài Tinh — chủ về
tài lộc, may mắn và sung túc.

Chữ "Hóa" mang nghĩa biến chuyển, chữ "Lộc" tượng trưng cho kho thóc, kho
tiền: hợp lại nói lên cả của cải lẫn quyền hành.

Vị trí miếu hãm:

- Đắc địa: Thìn, Tuất, Sửu, Mùi, Dần, Mão
- Hãm địa: Tý, Ngọ, Thân, Dậu, Tỵ, Hợi

Cách an theo Thiên Can năm sinh — mỗi đương số chỉ có duy nhất một Hóa Lộc
trong lá số.`,

    chiTiet: `## Đặc điểm

Hóa Lộc là sao chủ tài, mang tới sự phong phú về tiền bạc và có khả năng
"kích tài" mạnh mẽ — giúp các sao đi cùng phát huy mặt cát lợi.

Khác với Lộc Tồn vốn chờ may mắn đến, Hóa Lộc đòi hỏi đương số phải hành
động, chủ động cải tiến và biến hóa. Có như vậy mới khai phá được "kho lộc"
mà sao này hứa hẹn.

## Đắc địa và Hãm địa

Khi đóng tại Đắc địa, Hóa Lộc mở cơ hội giàu sang, thăng tiến, "tiền vào như
nước".

Khi rơi vào Hãm địa, lộc đến dễ tan, kéo theo nhiều hệ lụy về tài chính và
sự nghiệp.`,
  },

  // ============================================================
  // 2. Hóa Lộc tại Mệnh - tướng mạo & tính cách
  // ============================================================
  {
    id: 'hoa-loc-tai-menh-tinh-cach',
    title: 'Hóa Lộc tại Mệnh - Tướng mạo & tính cách',
    sao: ['Hóa Lộc'],
    cung: ['Mệnh'],
    doUuTien: 85,
    tomTat: `Đương số có Hóa Lộc cư Mệnh mang phong thái phú quý, gương mặt
sáng sủa, duyên dáng, dễ tạo thiện cảm. Lông tóc tốt, nam giới râu rậm. Ít
bệnh tật, lạc quan, giàu sức sống.

Mặt trái là thiên về hưởng thụ: dễ lười biếng, thực dụng, tham lam và chú
trọng vẻ ngoài nếu không tu tập.`,

    chiTiet: `## Năng khiếu ẩm thực đặc trưng

Đương số có Hóa Lộc thủ Mệnh rất tinh tế trong ẩm thực — biết nhiều món ăn
lạ, rượu ngon, có thể tự nấu nướng và biến chế sành điệu.

- Đây là kiểu chuyên gia về vị giác, biết thưởng thức cái ngon cái đẹp, có
  xu hướng chăm sóc người khác qua bữa ăn.

## Sự nghiệp và tài lộc

Đương số hợp với các ngành tài chính, ngân hàng, kinh doanh, nghệ thuật, ẩm
thực và dịch vụ cao cấp.

Có đầu óc kinh doanh nhạy bén, năng lực chuyển hóa ý tưởng thành tiền bạc.
Trong công sở, đương số mẫn cán, khéo léo, được cấp trên ưu ái và đồng
nghiệp quý mến.`,
  },

  {
    id: 'hoa-loc-tai-menh-dac-dia',
    title: 'Hóa Lộc Mệnh - Đắc địa',
    sao: ['Hóa Lộc'],
    cung: ['Mệnh'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 85,
    tomTat: `Khi Hóa Lộc Đắc địa tại Mệnh, đương số dịu dàng, tinh anh, khéo
léo trong giao tiếp, mềm mỏng như nhành liễu (đúng với hành Mộc của sao).
Tâm tính lạc quan, có sức hút tự nhiên, cởi mở, nhanh nhẹn và nắm bắt thời
cơ rất nhạy bén.`,
  },

  {
    id: 'hoa-loc-tai-menh-ham',
    title: 'Hóa Lộc Mệnh - Hãm địa',
    sao: ['Hóa Lộc'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    doUuTien: 85,
    tomTat: `Khi Hóa Lộc Hãm địa tại Mệnh, đương số hấp tấp và nóng vội —
đặc biệt với các quyết định tài chính. Tình cảnh giống như "nôn nóng hái
quả non, hỏng cả vụ mùa".`,
  },

  {
    id: 'hoa-loc-tai-menh-tau-thu',
    title: 'Hóa Lộc Mệnh + Tấu Thư',
    sao: ['Hóa Lộc'],
    cung: ['Mệnh'],
    ketHop: ['Tấu Thư'],
    doUuTien: 75,
    tomTat: `Khi Hóa Lộc cư Mệnh có Tấu Thư đi cùng, vị giác của đương số
càng vi diệu — đúng nghĩa một chuyên gia ẩm thực.`,
  },

  {
    id: 'hoa-loc-tai-menh-xuong-khuc-khoa',
    title: 'Hóa Lộc Mệnh + Xương Khúc / Hóa Khoa',
    sao: ['Hóa Lộc'],
    cung: ['Mệnh'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Hóa Khoa'],
    doUuTien: 75,
    tomTat: `Khi Hóa Lộc cư Mệnh gặp Văn Xương, Văn Khúc hoặc Hóa Khoa,
đương số có thể sáng tác sách gia chánh, dạy nấu ăn hoặc chế rượu.`,
  },

  // ============================================================
  // 3. Hóa Lộc tại Mệnh - hôn nhân & sức khỏe
  // ============================================================
  {
    id: 'hoa-loc-tai-menh-hon-nhan-suc-khoe',
    title: 'Hóa Lộc tại Mệnh - Hôn nhân & sức khỏe',
    sao: ['Hóa Lộc'],
    cung: ['Mệnh'],
    doUuTien: 75,
    tomTat: `Về hôn nhân, đương số có cuộc sống vợ chồng ấm áp và sung túc.
Tính hiền dịu dễ chịu khiến quan hệ hôn nhân cân bằng. Biết kiếm tiền nên
đương số trở thành trụ cột gia đình, hôn nhân có nền tảng tốt.

Mặt trái là dễ lười biếng, ỷ lại — khi việc chung bị đùn đẩy thì xích mích.
Đương số cần giữ ranh giới giao tiếp xã giao để tránh hiểu lầm.

Về sức khỏe, Hóa Lộc là phúc tinh có khả năng giải trừ bệnh tật: khi đau
ốm thường gặp thầy giỏi thuốc hay. Cần lưu ý các bệnh tiêu hóa, gan mật,
dư thừa dưỡng chất; đương số cần tiết chế ăn uống và sống điều độ.

Về tài lộc, sao này không chỉ mang tới may mắn — tiền tài còn đến từ chính
sự xoay sở và óc kinh doanh nhạy bén của đương số, đúng kiểu "tiền đẻ ra
tiền".`,
  },

  {
    id: 'hoa-loc-tai-menh-thien-ma',
    title: 'Hóa Lộc + Thiên Mã tại Mệnh - Lộc Mã giao trì',
    sao: ['Hóa Lộc'],
    ketHop: ['Thiên Mã'],
    cung: ['Mệnh'],
    doUuTien: 70,
    tomTat: `Khi Hóa Lộc và Thiên Mã đồng tụ tại Mệnh, đương số được hưởng
cách **Lộc Mã giao trì** — tài lộc đến nhanh, kinh doanh phát đạt.`,
  },

  // ============================================================
  // 4. Bộ sao TỐT - Lộc Mã giao trì
  // ============================================================
  {
    id: 'hoa-loc-loc-ma-giao-tri',
    title: 'Lộc Mã giao trì - Hóa Lộc + Thiên Mã',
    sao: ['Hóa Lộc', 'Thiên Mã'],
    ketHop: ['Lộc Mã giao trì', 'Lộc Mã'],
    doUuTien: 65,
    tomTat: `Hóa Lộc đi cùng Thiên Mã hợp thành cách **Lộc Mã giao trì** —
đương số vừa giàu có vừa có tài năng, công danh thịnh đạt.

- Giữ chức vụ cao cấp, có bổng lộc cao, được cấp nhà công xe nhà nước
- Được người trọng nể vì có cả tiền bạc lẫn quyền tước
- Càng làm càng lớn, càng vất vả càng có thành quả

Đặc điểm chung của cách này là đương số thường phải đi xa làm ăn.

Khi Hóa Lộc và Thiên Mã đồng cung, đúng cách "đích thị phú thương chi
nghiệp" — số buôn bán giàu.`,
  },

  {
    id: 'hoa-loc-loc-ma-giao-tri-thien-di',
    title: 'Lộc Mã giao trì tại Thiên Di',
    sao: ['Hóa Lộc', 'Thiên Mã'],
    cung: ['Thiên Di'],
    ketHop: ['Lộc Mã'],
    doUuTien: 70,
    tomTat: `Khi Lộc Mã giao trì đóng tại Thiên Di, cách này ứng nghiệm đặc
biệt — đương số đi xa làm ăn rất thuận lợi, công danh sự nghiệp thăng tiến
nhanh.`,
  },

  // ============================================================
  // 5. Bộ Tam Hóa - Lộc Quyền Khoa
  // ============================================================
  {
    id: 'hoa-loc-tam-hoa',
    title: 'Bộ Tam Hóa - Lộc Quyền Khoa',
    sao: ['Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa'],
    ketHop: ['Tam Hóa', 'Lộc Quyền Khoa'],
    doUuTien: 70,
    tomTat: `Hóa Lộc, Hóa Quyền và Hóa Khoa hội đủ tạo thành bộ **Tam Hóa**
— đương số có cả văn hóa, quyền hành lẫn tiền bạc.

- Phúc thọ tăng tiến mau lẹ, tai họa giảm thiểu tối đa
- Có hiệu lực cải xấu thành tốt trên cả ba phương diện: học vấn, quyền uy
  và tài lộc

Đây là cách "cái tốt liên tục" — phúc đến liên tiếp, áp dụng được cho cả
nam và nữ.`,
  },

  {
    id: 'hoa-loc-tam-hoa-cung-menh-ta-huu',
    title: 'Tam Hóa củng Mệnh + Tả Hữu',
    sao: ['Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Tả Phù', 'Hữu Bật'],
    doUuTien: 75,
    tomTat: `Khi Tam Hóa củng Mệnh và có thêm Tả Phù, Hữu Bật trợ giúp,
đương số làm tới bậc công khanh.`,
  },

  // ============================================================
  // 6. Các bộ sao tốt khác của Hóa Lộc
  // ============================================================
  {
    id: 'hoa-loc-bo-sao-tot',
    title: 'Hóa Lộc - Các bộ sao TỐT khác',
    sao: ['Hóa Lộc'],
    doUuTien: 55,
    tomTat: `Ngoài Lộc Mã giao trì và Tam Hóa, Hóa Lộc còn hợp thành nhiều
bộ sao tốt khác khi gặp các sao chính tinh hoặc phụ tinh phù hợp.`,
  },

  {
    id: 'hoa-loc-tu-phu',
    title: 'Hóa Lộc + Tử Vi / Thiên Phủ',
    sao: ['Hóa Lộc'],
    ketHop: ['Tử Vi', 'Thiên Phủ'],
    doUuTien: 60,
    tomTat: `Khi Hóa Lộc gặp Tử Vi hoặc Thiên Phủ, đương số hưởng phú và
quý ở mức cao độ.`,
  },

  {
    id: 'hoa-loc-quyen-sat',
    title: 'Hóa Lộc + Hóa Quyền + Thất Sát',
    sao: ['Hóa Lộc'],
    ketHop: ['Hóa Quyền', 'Thất Sát'],
    doUuTien: 60,
    tomTat: `Khi Hóa Lộc đi cùng Hóa Quyền và Thất Sát, đương số làm võ
tướng nắm quyền hành lớn, sự nghiệp hiển đạt.`,
  },

  {
    id: 'hoa-loc-co-luong',
    title: 'Hóa Lộc + Cơ Lương đồng cung',
    sao: ['Hóa Lộc'],
    ketHop: ['Thiên Cơ', 'Thiên Lương'],
    doUuTien: 60,
    tomTat: `Khi Hóa Lộc đồng cung với Thiên Cơ và Thiên Lương, đương số có
thể trở thành triệu phú, tỷ phú, đại tư bản — chuộng làm việc thiện nguyện
và xã hội văn hóa.`,
  },

  {
    id: 'hoa-loc-luong-ty-ngo',
    title: 'Hóa Lộc + Thiên Lương ở Tý / Ngọ',
    sao: ['Hóa Lộc'],
    chi: ['Tý', 'Ngọ'],
    ketHop: ['Thiên Lương'],
    doUuTien: 62,
    tomTat: `Khi Hóa Lộc gặp Thiên Lương ở Tý hoặc Ngọ, đương số là vĩ nhân
kinh bang tế thế, năng tài xuất chúng, sự nghiệp lớn lao.`,
  },

  {
    id: 'hoa-loc-thien-ma-tuong',
    title: 'Hóa Lộc + Thiên Mã + Tướng Quân',
    sao: ['Hóa Lộc'],
    ketHop: ['Thiên Mã', 'Tướng Quân'],
    doUuTien: 60,
    tomTat: `Khi Hóa Lộc đi cùng Thiên Mã và Tướng Quân, đương số là người
anh hùng, quyền quý và giàu sang.`,
  },

  {
    id: 'hoa-loc-thien-tuong',
    title: 'Hóa Lộc + Thiên Tướng',
    sao: ['Hóa Lộc'],
    ketHop: ['Thiên Tướng'],
    doUuTien: 58,
    tomTat: `Khi Hóa Lộc gặp Thiên Tướng, đương số đẹp trai, nhiều nam tính
và có sức thu hút phụ nữ.`,
  },

  {
    id: 'hoa-loc-long-phuong-phu-the',
    title: 'Hóa Lộc Phu Thê + Long Phượng',
    sao: ['Hóa Lộc'],
    cung: ['Phu Thê'],
    ketHop: ['Long Trì', 'Phượng Các'],
    doUuTien: 70,
    tomTat: `Khi Hóa Lộc tại Phu Thê có Long Trì và Phượng Các trợ chiếu,
đương số sánh duyên với người giàu sang đẹp đẽ.`,
  },

  {
    id: 'hoa-loc-hong-loan-phu-the-tai-no',
    title: 'Hóa Lộc + Hồng Loan tại Phu Thê / Tài / Nô',
    sao: ['Hóa Lộc'],
    cung: ['Phu Thê', 'Tài Bạch', 'Nô Bộc'],
    ketHop: ['Hồng Loan'],
    doUuTien: 70,
    tomTat: `Khi Hóa Lộc gặp Hồng Loan ở Phu Thê, Tài Bạch hoặc Nô Bộc,
đương số nhờ của vợ mà làm giàu.`,
  },

  {
    id: 'hoa-loc-nu-loc-ton',
    title: 'Hóa Lộc Nữ Mệnh + Lộc Tồn',
    sao: ['Hóa Lộc'],
    cung: ['Mệnh'],
    gioiTinh: 'Nữ',
    ketHop: ['Lộc Tồn'],
    doUuTien: 70,
    tomTat: `Nữ mệnh có Hóa Lộc tại Mệnh đi cùng Lộc Tồn được hưởng cách
vượng phu ích tử, đại cát.`,
  },

  // ============================================================
  // 7. Bộ sao XẤU của Hóa Lộc
  // ============================================================
  {
    id: 'hoa-loc-bo-sao-xau',
    title: 'Hóa Lộc - Bộ sao XẤU',
    sao: ['Hóa Lộc'],
    doUuTien: 55,
    tomTat: `Bất luận sát tinh nào đi cùng Hóa Lộc cũng phá hầu hết lợi
điểm của sao này — nặng nhất là Tuần Triệt và Không Kiếp.`,
  },

  {
    id: 'hoa-loc-khong-kiep',
    title: 'Hóa Lộc + Không Kiếp - phá sản',
    sao: ['Hóa Lộc'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 60,
    tomTat: `Khi Hóa Lộc gặp Địa Không và Địa Kiếp, đương số hoặc phá sản,
hoặc lúc có lúc phá. Nếu Không Kiếp Đắc địa, đương số thủ đắc tài lộc bất
ngờ và mau chóng. Nếu Hãm địa, tiền bạc đến bằng phương pháp ám muội như
buôn lậu, tham nhũng, sang đoạt — hoặc đương số bị cướp.`,
  },

  {
    id: 'hoa-loc-tam-khong',
    title: 'Hóa Lộc + Tam Không (Mệnh vô chính diệu)',
    sao: ['Hóa Lộc'],
    cung: ['Mệnh'],
    ketHop: ['Tuần', 'Triệt', 'Thiên Không'],
    doUuTien: 58,
    tomTat: `Khi Hóa Lộc đóng tại Mệnh vô chính diệu cùng Tam Không (Tuần,
Triệt, Thiên Không), đương số giàu sang nhưng không bền — phải có lúc bại
sản một lần trong đời.`,
  },

  {
    id: 'hoa-loc-loc-ton-song-loc',
    title: 'Hóa Lộc + Lộc Tồn (Song Lộc)',
    sao: ['Hóa Lộc'],
    ketHop: ['Lộc Tồn'],
    doUuTien: 58,
    tomTat: `Khi Hóa Lộc và Lộc Tồn đồng cung tạo thành **Song Lộc**, đương
số có tiền nhưng thường bị tai họa cũng vì tiền.`,
  },

  {
    id: 'hoa-loc-thien-hy-cu-vu',
    title: 'Hóa Lộc + Thiên Hỷ / Cự Vũ',
    sao: ['Hóa Lộc'],
    ketHop: ['Thiên Hỷ', 'Cự Môn', 'Vũ Khúc'],
    doUuTien: 55,
    tomTat: `Khi Hóa Lộc gặp Thiên Hỷ hoặc bộ Cự Môn, Vũ Khúc, đương số
mang tính chuyên chính.`,
  },

  {
    id: 'hoa-loc-song-loc-tuan-kiep-kinh',
    title: 'Song Lộc + Tuần Không / Kiếp Kình',
    sao: ['Hóa Lộc'],
    ketHop: ['Lộc Tồn', 'Tuần', 'Thiên Không', 'Địa Kiếp', 'Kình Dương'],
    doUuTien: 58,
    tomTat: `Khi Song Lộc (Hóa Lộc + Lộc Tồn) gặp thêm Tuần Không, Địa Kiếp
hoặc Kình Dương, tài chính của đương số không bền mà còn thành bần tiện.`,
  },

  // ============================================================
  // 8. Hóa Lộc tại Phụ Mẫu
  // ============================================================
  {
    id: 'hoa-loc-tai-phu-mau',
    title: 'Hóa Lộc tại Phụ Mẫu',
    sao: ['Hóa Lộc'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Hóa Lộc đóng tại Phụ Mẫu phản ánh quan hệ giữa đương số và cha
mẹ, cùng cảnh huống của chính đấng sinh thành.`,
  },

  {
    id: 'hoa-loc-tai-phu-mau-dac-dia',
    title: 'Hóa Lộc Phụ Mẫu - Đắc địa',
    sao: ['Hóa Lộc'],
    cung: ['Phụ Mẫu'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 78,
    tomTat: `Khi Hóa Lộc Đắc địa tại Phụ Mẫu, cha mẹ đương số có địa vị xã
hội hoặc giữ vị trí trách nhiệm và uy tín cao.`,
  },

  {
    id: 'hoa-loc-tai-phu-mau-van-tinh',
    title: 'Hóa Lộc Phụ Mẫu + Văn Tinh / Hóa Khoa',
    sao: ['Hóa Lộc'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Lưu Niên Văn Tinh', 'Hóa Khoa'],
    doUuTien: 73,
    tomTat: `Khi Hóa Lộc tại Phụ Mẫu gặp Văn Xương, Văn Khúc, Lưu Niên Văn
Tinh hoặc Hóa Khoa, cha mẹ rộng lượng, thông thái, hỗ trợ đương số vượt qua
chông gai.`,
  },

  {
    id: 'hoa-loc-tai-phu-mau-thien-ma',
    title: 'Hóa Lộc Phụ Mẫu + Thiên Mã',
    sao: ['Hóa Lộc'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Thiên Mã'],
    doUuTien: 73,
    tomTat: `Khi Hóa Lộc tại Phụ Mẫu có Thiên Mã đồng hành, cha mẹ đương số
giàu có.`,
  },

  {
    id: 'hoa-loc-tai-phu-mau-ham',
    title: 'Hóa Lộc Phụ Mẫu - Hãm địa',
    sao: ['Hóa Lộc'],
    cung: ['Phụ Mẫu'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi Hóa Lộc Hãm địa tại Phụ Mẫu, mái ấm của đương số chịu áp
lực tài chính, dễ phát sinh xung đột vì thiếu sự quan tâm.`,
  },

  {
    id: 'hoa-loc-tai-phu-mau-sat',
    title: 'Hóa Lộc Phụ Mẫu + Kình Đà / Không Kiếp / Linh Hỏa',
    sao: ['Hóa Lộc'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Kình Dương', 'Đà La', 'Địa Không', 'Địa Kiếp', 'Linh Tinh', 'Hỏa Tinh'],
    doUuTien: 73,
    tomTat: `Khi Hóa Lộc tại Phụ Mẫu gặp Kình Dương, Đà La, Địa Không, Địa
Kiếp, Linh Tinh hoặc Hỏa Tinh, mâu thuẫn giữa đương số và cha mẹ bùng phát
mạnh, kèm biến cố về sức khỏe và tài sản.`,
  },

  // ============================================================
  // 9. Hóa Lộc tại Phúc Đức
  // ============================================================
  {
    id: 'hoa-loc-tai-phuc-duc',
    title: 'Hóa Lộc tại Phúc Đức',
    sao: ['Hóa Lộc'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `Hóa Lộc đóng tại Phúc Đức ví như "của để dành" cho cả dòng họ
của đương số.

- Trong họ nhiều người thành đạt, anh em chan hòa hỗ trợ
- Mồ mả tổ tiên đẹp, vận khí đời sau hưng thịnh
- Đương số hưởng phúc, tránh được tai ương lớn và hay gặp may bất ngờ`,
  },

  {
    id: 'hoa-loc-tai-phuc-duc-quyen',
    title: 'Hóa Lộc Phúc Đức + Hóa Quyền',
    sao: ['Hóa Lộc'],
    cung: ['Phúc Đức'],
    ketHop: ['Hóa Quyền'],
    doUuTien: 75,
    tomTat: `Khi Hóa Lộc tại Phúc Đức có thêm Hóa Quyền, đương số được vinh
hiển.`,
  },

  {
    id: 'hoa-loc-tai-phuc-duc-song-loc',
    title: 'Hóa Lộc Phúc Đức + Lộc Tồn (Song Lộc)',
    sao: ['Hóa Lộc'],
    cung: ['Phúc Đức'],
    ketHop: ['Lộc Tồn'],
    doUuTien: 75,
    tomTat: `Khi Hóa Lộc và Lộc Tồn đồng cư tại Phúc Đức (cách **Song
Lộc**), đương số đại phú. Mồ mả của dòng họ có ngôi mả phát hình cờ —
tượng trưng cho sự giàu sang.`,
  },

  {
    id: 'hoa-loc-tai-phuc-duc-ham',
    title: 'Hóa Lộc Phúc Đức - Hãm địa',
    sao: ['Hóa Lộc'],
    cung: ['Phúc Đức'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi Hóa Lộc Hãm địa tại Phúc Đức, dòng họ đương số dễ tranh
chấp tài sản, đất đai khiến vận khí giảm sút. Đương số cần hành thiện tích
đức để nuôi gốc phúc.`,
  },

  {
    id: 'hoa-loc-tai-phuc-duc-kinh-da-rieu',
    title: 'Hóa Lộc Phúc Đức + Kình Đà / Thiên Riêu',
    sao: ['Hóa Lộc'],
    cung: ['Phúc Đức'],
    ketHop: ['Kình Dương', 'Đà La', 'Thiên Riêu'],
    doUuTien: 73,
    tomTat: `Khi Hóa Lộc tại Phúc Đức gặp Kình Dương, Đà La hoặc Thiên Riêu,
đương số phải đề phòng bệnh tật và sự cố ngoài ý muốn.`,
  },

  // ============================================================
  // 10. Hóa Lộc tại Điền Trạch
  // ============================================================
  {
    id: 'hoa-loc-tai-dien-trach',
    title: 'Hóa Lộc tại Điền Trạch',
    sao: ['Hóa Lộc'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Hóa Lộc đóng tại Điền Trạch đúng cảnh "đất lành chim đậu" —
nhà cửa của đương số khang trang, vị trí đẹp, hợp phong thủy.`,
  },

  {
    id: 'hoa-loc-tai-dien-trach-dac-dia',
    title: 'Hóa Lộc Điền Trạch - Đắc địa',
    sao: ['Hóa Lộc'],
    cung: ['Điền Trạch'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 78,
    tomTat: `Khi Hóa Lộc Đắc địa tại Điền Trạch, đương số dễ mua bán và
tích lũy bất động sản, thuận lợi với các ngành đất đai, xây dựng và nội
thất.`,
  },

  {
    id: 'hoa-loc-tai-dien-trach-thien-tuong',
    title: 'Hóa Lộc Điền Trạch + Thiên Tướng',
    sao: ['Hóa Lộc'],
    cung: ['Điền Trạch'],
    ketHop: ['Thiên Tướng'],
    doUuTien: 73,
    tomTat: `Khi Hóa Lộc tại Điền Trạch có Thiên Tướng đi cùng, đương số có
nhiều ruộng đất.`,
  },

  {
    id: 'hoa-loc-tai-dien-trach-tam-hoa',
    title: 'Hóa Lộc Điền Trạch + Tam Hóa + Cơ + Thái Âm',
    sao: ['Hóa Lộc'],
    cung: ['Điền Trạch'],
    ketHop: ['Hóa Quyền', 'Hóa Khoa', 'Thiên Cơ', 'Thái Âm'],
    doUuTien: 73,
    tomTat: `Khi Hóa Lộc tại Điền Trạch hợp đủ Tam Hóa cùng Thiên Cơ và
Thái Âm, đương số có đất nhiều.`,
  },

  {
    id: 'hoa-loc-tai-dien-trach-ham',
    title: 'Hóa Lộc Điền Trạch - Hãm địa',
    sao: ['Hóa Lộc'],
    cung: ['Điền Trạch'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi Hóa Lộc Hãm địa tại Điền Trạch, đương số dễ vướng tranh
chấp đất đai, nhà cửa xuống cấp hoặc rơi vào vị trí xấu.`,
  },

  {
    id: 'hoa-loc-tai-dien-trach-kinh-da',
    title: 'Hóa Lộc Điền Trạch + Kình Đà',
    sao: ['Hóa Lộc'],
    cung: ['Điền Trạch'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 73,
    tomTat: `Khi Hóa Lộc tại Điền Trạch gặp Kình Dương và Đà La, đương số
mất tài sản, vướng kiện tụng đất đai.`,
  },

  // ============================================================
  // 11. Hóa Lộc tại Quan Lộc
  // ============================================================
  {
    id: 'hoa-loc-tai-quan-loc',
    title: 'Hóa Lộc tại Quan Lộc',
    sao: ['Hóa Lộc'],
    cung: ['Quan Lộc'],
    doUuTien: 82,
    tomTat: `Khi Hóa Lộc đóng tại Quan Lộc, đường sự nghiệp của đương số
hanh thông như cá gặp nước — đặc biệt trong các lĩnh vực kinh doanh, tài
chính, quản lý và lãnh đạo.

Đương số có tài tổ chức, biết tận dụng thời cơ, được đồng nghiệp và cấp
trên tín nhiệm.

Hóa Lộc tại Quan Lộc thường ứng nghiệm với nghề tài chính kinh tế: thuế
vụ, ngân khố, ngân hàng, kế toán.`,
  },

  {
    id: 'hoa-loc-tai-quan-loc-quyen-khoa',
    title: 'Hóa Lộc Quan Lộc + Hóa Quyền + Hóa Khoa',
    sao: ['Hóa Lộc'],
    cung: ['Quan Lộc'],
    ketHop: ['Hóa Quyền', 'Hóa Khoa'],
    doUuTien: 78,
    tomTat: `Khi Hóa Lộc tại Quan Lộc có thêm Hóa Quyền và Hóa Khoa, trí
tuệ của đương số nổi bật, danh vọng và tiền tài song hành cùng tới.`,
  },

  {
    id: 'hoa-loc-tai-quan-loc-quyen-tu-phu-trang-sinh',
    title: 'Hóa Lộc Quan Lộc + Hóa Quyền + Tử Phủ + Tràng Sinh',
    sao: ['Hóa Lộc'],
    cung: ['Quan Lộc'],
    ketHop: ['Hóa Quyền', 'Tử Vi', 'Thiên Phủ', 'Tràng Sinh'],
    doUuTien: 80,
    tomTat: `Khi Hóa Lộc tại Quan Lộc hợp với Hóa Quyền, Tử Vi, Thiên Phủ và
Tràng Sinh, đương số được hưởng cảnh đại quý.`,
  },

  {
    id: 'hoa-loc-tai-quan-loc-quyen-ma-nhat-nguyet',
    title: 'Hóa Lộc Quan Lộc + Hóa Quyền + Thiên Mã + Nhật Nguyệt đắc',
    sao: ['Hóa Lộc'],
    cung: ['Quan Lộc'],
    ketHop: ['Hóa Quyền', 'Thiên Mã', 'Thái Dương', 'Thái Âm'],
    doUuTien: 78,
    tomTat: `Khi Hóa Lộc tại Quan Lộc hội đủ Hóa Quyền, Thiên Mã cùng Thái
Dương và Thái Âm đắc địa, đương số giàu sang rực rỡ.`,
  },

  {
    id: 'hoa-loc-tai-quan-loc-thien-ma',
    title: 'Hóa Lộc Quan Lộc + Thiên Mã',
    sao: ['Hóa Lộc'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Mã'],
    doUuTien: 75,
    tomTat: `Khi Hóa Lộc tại Quan Lộc có Thiên Mã đồng hành, đường thương
nghiệp của đương số phát đạt.`,
  },

  {
    id: 'hoa-loc-tai-quan-loc-ham',
    title: 'Hóa Lộc Quan Lộc - Hãm địa',
    sao: ['Hóa Lộc'],
    cung: ['Quan Lộc'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `Khi Hóa Lộc Hãm địa tại Quan Lộc, công danh đương số bị cản
trở, thị phi nơi công sở liên miên. Tâm lý "đứng núi này trông núi nọ"
khiến đương số tuột mất nhiều cơ hội thăng tiến.`,
  },

  // ============================================================
  // 12. Hóa Lộc tại Nô Bộc
  // ============================================================
  {
    id: 'hoa-loc-tai-no-boc',
    title: 'Hóa Lộc tại Nô Bộc',
    sao: ['Hóa Lộc'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Hóa Lộc đóng tại Nô Bộc phản ánh quan hệ của đương số với bạn
bè và cấp dưới.`,
  },

  {
    id: 'hoa-loc-tai-no-boc-dac-dia',
    title: 'Hóa Lộc Nô Bộc - Đắc địa',
    sao: ['Hóa Lộc'],
    cung: ['Nô Bộc'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 78,
    tomTat: `Khi Hóa Lộc Đắc địa tại Nô Bộc, quan hệ xã hội của đương số
rộng mở, dễ kết giao, bạn bè đồng nghiệp nhiệt tình. Quý nhân vây quanh,
cộng sự cấp dưới hậu thuẫn cả về tài chính lẫn cơ hội làm ăn.`,
  },

  {
    id: 'hoa-loc-tai-no-boc-tu-vi',
    title: 'Hóa Lộc Nô Bộc + Tử Vi chiếu',
    sao: ['Hóa Lộc'],
    cung: ['Nô Bộc'],
    ketHop: ['Tử Vi'],
    doUuTien: 73,
    tomTat: `Khi Hóa Lộc tại Nô Bộc có Tử Vi chiếu tới, đương số được người
chân tay trung thành.`,
  },

  {
    id: 'hoa-loc-tai-no-boc-quyen',
    title: 'Hóa Lộc Nô Bộc + Hóa Quyền',
    sao: ['Hóa Lộc'],
    cung: ['Nô Bộc'],
    ketHop: ['Hóa Quyền'],
    doUuTien: 73,
    tomTat: `Khi Hóa Lộc tại Nô Bộc đi cùng Hóa Quyền, đương số nhờ bạn
thân mà làm nên.`,
  },

  {
    id: 'hoa-loc-tai-no-boc-ham',
    title: 'Hóa Lộc Nô Bộc - Hãm địa',
    sao: ['Hóa Lộc'],
    cung: ['Nô Bộc'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi Hóa Lộc Hãm địa tại Nô Bộc, đương số rơi vào cảnh "bạn ít
bè nhiều" — bề ngoài thân thiết mà bên trong ngấm ngầm tính toán.`,
  },

  {
    id: 'hoa-loc-tai-no-boc-xuong-khuc',
    title: 'Hóa Lộc Nô Bộc + Văn Xương / Văn Khúc',
    sao: ['Hóa Lộc'],
    cung: ['Nô Bộc'],
    ketHop: ['Văn Xương', 'Văn Khúc'],
    doUuTien: 73,
    tomTat: `Khi Hóa Lộc tại Nô Bộc gặp Văn Xương hoặc Văn Khúc, đương số
gặp được bạn hiền và hợp tác thành công.`,
  },

  {
    id: 'hoa-loc-tai-no-boc-kiep-hinh',
    title: 'Hóa Lộc Nô Bộc + Địa Kiếp / Thiên Hình',
    sao: ['Hóa Lộc'],
    cung: ['Nô Bộc'],
    ketHop: ['Địa Kiếp', 'Thiên Hình'],
    doUuTien: 73,
    tomTat: `Khi Hóa Lộc tại Nô Bộc gặp Địa Kiếp hoặc Thiên Hình, đương số
rơi vào cảnh "mật ngọt chết ruồi" — cần tỉnh táo khi chọn bạn.`,
  },

  // ============================================================
  // 13. Hóa Lộc tại Thiên Di
  // ============================================================
  {
    id: 'hoa-loc-tai-thien-di',
    title: 'Hóa Lộc tại Thiên Di',
    sao: ['Hóa Lộc'],
    cung: ['Thiên Di'],
    doUuTien: 78,
    tomTat: `Khi Hóa Lộc đóng tại Thiên Di, đương số đúng nghĩa "ra ngõ gặp
quý nhân".`,
  },

  {
    id: 'hoa-loc-tai-thien-di-tham-lang',
    title: 'Hóa Lộc Thiên Di + Tham Lang',
    sao: ['Hóa Lộc'],
    cung: ['Thiên Di'],
    ketHop: ['Tham Lang'],
    doUuTien: 75,
    tomTat: `Khi Hóa Lộc tại Thiên Di đi cùng Tham Lang, đương số càng
giàu sang, có tài quảng giao và biết nắm bắt thời cơ làm giàu. Đây là lợi
thế lớn cho ngành ngoại giao, kinh doanh và dịch vụ.`,
  },

  {
    id: 'hoa-loc-tai-thien-di-thien-ma',
    title: 'Hóa Lộc Thiên Di + Thiên Mã',
    sao: ['Hóa Lộc'],
    cung: ['Thiên Di'],
    ketHop: ['Thiên Mã'],
    doUuTien: 75,
    tomTat: `Khi Hóa Lộc tại Thiên Di có Thiên Mã đồng hành, đương số "sinh
tài hữu lực" — đi xa thì phát đạt.`,
  },

  {
    id: 'hoa-loc-tai-thien-di-ham',
    title: 'Hóa Lộc Thiên Di - Hãm địa',
    sao: ['Hóa Lộc'],
    cung: ['Thiên Di'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `Khi Hóa Lộc Hãm địa tại Thiên Di, đương số rơi vào cảnh "đi
đêm lắm có ngày gặp ma" — cần tỉnh táo khi giao dịch hoặc hợp tác với
người mới quen.`,
  },

  {
    id: 'hoa-loc-tai-thien-di-sat',
    title: 'Hóa Lộc Thiên Di + Kình Đà / Địa Kiếp / Thiên Hình',
    sao: ['Hóa Lộc'],
    cung: ['Thiên Di'],
    ketHop: ['Kình Dương', 'Đà La', 'Địa Kiếp', 'Thiên Hình'],
    doUuTien: 73,
    tomTat: `Khi Hóa Lộc tại Thiên Di gặp Kình Dương, Đà La, Địa Kiếp hoặc
Thiên Hình, đương số dễ vướng rắc rối, bị kẻ khác phá hoại.`,
  },

  // ============================================================
  // 14. Hóa Lộc tại Tật Ách
  // ============================================================
  {
    id: 'hoa-loc-tai-tat-ach',
    title: 'Hóa Lộc tại Tật Ách',
    sao: ['Hóa Lộc'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `Khi Hóa Lộc đóng tại Tật Ách, sức khỏe đương số ổn định, hồi
phục nhanh khi đau ốm.`,
  },

  {
    id: 'hoa-loc-tai-tat-ach-dac-dia',
    title: 'Hóa Lộc Tật Ách - Đắc địa',
    sao: ['Hóa Lộc'],
    cung: ['Tật Ách'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 80,
    tomTat: `Khi Hóa Lộc Đắc địa tại Tật Ách, đương số mau hết bệnh, gặp
thầy gặp thuốc, có cơ duyên gặp được thầy thuốc giỏi hoặc phương pháp chữa
phù hợp.`,
  },

  {
    id: 'hoa-loc-tai-tat-ach-dong-luong-tu-phu',
    title: 'Hóa Lộc Tật Ách + Đồng + Lương + Tử + Phủ',
    sao: ['Hóa Lộc'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Đồng', 'Thiên Lương', 'Tử Vi', 'Thiên Phủ'],
    doUuTien: 75,
    tomTat: `Khi Hóa Lộc tại Tật Ách hợp Thiên Đồng, Thiên Lương, Tử Vi và
Thiên Phủ, đương số ốm gặp thuốc, nạn gặp người cứu.`,
  },

  {
    id: 'hoa-loc-tai-tat-ach-ham',
    title: 'Hóa Lộc Tật Ách - Hãm địa',
    sao: ['Hóa Lộc'],
    cung: ['Tật Ách'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `Khi Hóa Lộc Hãm địa tại Tật Ách, sức khỏe đương số hao tổn vì
bệnh mãn tính — đặc biệt ở tiêu hóa và gan mật, bệnh kéo dai như đỉa bám.`,
  },

  {
    id: 'hoa-loc-tai-tat-ach-sat',
    title: 'Hóa Lộc Tật Ách + Kình Đà / Địa Kiếp / Thiên Hình',
    sao: ['Hóa Lộc'],
    cung: ['Tật Ách'],
    ketHop: ['Kình Dương', 'Đà La', 'Địa Kiếp', 'Thiên Hình'],
    doUuTien: 73,
    tomTat: `Khi Hóa Lộc tại Tật Ách gặp Kình Dương, Đà La, Địa Kiếp hoặc
Thiên Hình, đương số phải cảnh giác bệnh nặng và tai nạn bất ngờ.`,
  },

  // ============================================================
  // 15. Hóa Lộc tại Tài Bạch - VỊ TRÍ HỢP VỊ
  // ============================================================
  {
    id: 'hoa-loc-tai-tai-bach',
    title: 'Hóa Lộc tại Tài Bạch - Vị trí HỢP VỊ',
    sao: ['Hóa Lộc'],
    cung: ['Tài Bạch'],
    doUuTien: 88,
    tomTat: `Hóa Lộc tại Tài Bạch là vị trí hợp vị nhất — tượng trưng cho
lợi lộc tiền bạc, đương số giàu có dưới mọi hình thức (tiền, điền sản, lộc
ăn).

Dòng tiền của đương số ổn định và sinh lời dài lâu.`,
  },

  {
    id: 'hoa-loc-tai-tai-bach-dac-dia',
    title: 'Hóa Lộc Tài Bạch - Đắc địa',
    sao: ['Hóa Lộc'],
    cung: ['Tài Bạch'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 88,
    tomTat: `Khi Hóa Lộc Đắc địa tại Tài Bạch, tài chính của đương số bền
vững, làm ăn thuận lợi, có duyên với kinh doanh, ngân hàng và bất động
sản.`,
  },

  {
    id: 'hoa-loc-tai-tai-bach-loc-ma-phu',
    title: 'Hóa Lộc Tài Bạch + Lộc Tồn / Thiên Mã / Thiên Phủ',
    sao: ['Hóa Lộc'],
    cung: ['Tài Bạch'],
    ketHop: ['Lộc Tồn', 'Thiên Mã', 'Thiên Phủ'],
    doUuTien: 80,
    tomTat: `Khi Hóa Lộc tại Tài Bạch gặp Lộc Tồn, Thiên Mã hoặc Thiên Phủ,
vận tiền tài của đương số càng vượng, "của vào như nước", đại phú.`,
  },

  {
    id: 'hoa-loc-tai-tai-bach-co-luong',
    title: 'Hóa Lộc Tài Bạch + Cơ Lương / Song Lộc',
    sao: ['Hóa Lộc'],
    cung: ['Tài Bạch'],
    ketHop: ['Thiên Cơ', 'Thiên Lương', 'Lộc Tồn'],
    doUuTien: 78,
    tomTat: `Khi Hóa Lộc tại Tài Bạch gặp Thiên Cơ và Thiên Lương, hoặc tạo
thành Song Lộc với Lộc Tồn, đương số đại phú.`,
  },

  {
    id: 'hoa-loc-tai-tai-bach-hong-loan-da-la',
    title: 'Hóa Lộc Tài Bạch + Hồng Loan + Đà La',
    sao: ['Hóa Lộc'],
    cung: ['Tài Bạch'],
    ketHop: ['Hồng Loan', 'Đà La'],
    doUuTien: 75,
    tomTat: `Khi Hóa Lộc tại Tài Bạch có Hồng Loan và Đà La đi cùng, đương
số hưởng của thừa tự từ người trong họ.`,
  },

  {
    id: 'hoa-loc-tai-tai-bach-an-quang',
    title: 'Hóa Lộc Tài Bạch + Ân Quang',
    sao: ['Hóa Lộc'],
    cung: ['Tài Bạch'],
    ketHop: ['Ân Quang'],
    doUuTien: 73,
    tomTat: `Khi Hóa Lộc tại Tài Bạch có Ân Quang trợ chiếu, đương số hiển
đạt.`,
  },

  {
    id: 'hoa-loc-tai-tai-bach-mo',
    title: 'Hóa Lộc Tài Bạch + Mộ',
    sao: ['Hóa Lộc'],
    cung: ['Tài Bạch'],
    ketHop: ['Mộ'],
    doUuTien: 73,
    tomTat: `Khi Hóa Lộc tại Tài Bạch gặp Mộ, của đến tận tay đương số.`,
  },

  {
    id: 'hoa-loc-tai-tai-bach-dai-tieu-hao',
    title: 'Hóa Lộc Tài Bạch + Đại Hao / Tiểu Hao',
    sao: ['Hóa Lộc'],
    cung: ['Tài Bạch'],
    ketHop: ['Đại Hao', 'Tiểu Hao'],
    doUuTien: 75,
    tomTat: `Khi Hóa Lộc tại Tài Bạch gặp Đại Hao hoặc Tiểu Hao, đương số
kiếm bao nhiêu cũng hết sạch.`,
  },

  {
    id: 'hoa-loc-tai-tai-bach-ham-khong-kiep-ky',
    title: 'Hóa Lộc Tài Bạch - Hãm + Không Kiếp / Hóa Kỵ',
    sao: ['Hóa Lộc'],
    cung: ['Tài Bạch'],
    trangThai: ['Hãm'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Hóa Kỵ'],
    doUuTien: 80,
    tomTat: `Khi Hóa Lộc Hãm địa tại Tài Bạch lại gặp Địa Không, Địa Kiếp
hoặc Hóa Kỵ, đương số rơi vào cảnh "thấy đỏ tưởng chín" — mất trắng. Mỗi
giao dịch phải cân nhắc kỹ; sơ suất là thất thoát hoặc kiện tụng.`,
  },

  // ============================================================
  // 16. Hóa Lộc tại Tử Tức
  // ============================================================
  {
    id: 'hoa-loc-tai-tu-tuc',
    title: 'Hóa Lộc tại Tử Tức',
    sao: ['Hóa Lộc'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Hóa Lộc đóng tại Tử Tức phản ánh đường con cái của đương số.`,
  },

  {
    id: 'hoa-loc-tai-tu-tuc-dac-dia',
    title: 'Hóa Lộc Tử Tức - Đắc địa',
    sao: ['Hóa Lộc'],
    cung: ['Tử Tức'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 78,
    tomTat: `Khi Hóa Lộc Đắc địa tại Tử Tức, con cái đương số khôi ngô,
sáng dạ, sớm bộc lộ tố chất và chí tiến thủ.`,
  },

  {
    id: 'hoa-loc-tai-tu-tuc-khoa-xuong',
    title: 'Hóa Lộc Tử Tức + Hóa Khoa / Văn Xương',
    sao: ['Hóa Lộc'],
    cung: ['Tử Tức'],
    ketHop: ['Hóa Khoa', 'Văn Xương'],
    doUuTien: 73,
    tomTat: `Khi Hóa Lộc tại Tử Tức gặp Hóa Khoa hoặc Văn Xương, con cái
đương số "vinh quy bái tổ", làm rạng danh gia tộc.`,
  },

  {
    id: 'hoa-loc-tai-tu-tuc-tam-hoa',
    title: 'Hóa Lộc Tử Tức + Tam Hóa',
    sao: ['Hóa Lộc'],
    cung: ['Tử Tức'],
    ketHop: ['Hóa Quyền', 'Hóa Khoa'],
    doUuTien: 73,
    tomTat: `Khi Hóa Lộc tại Tử Tức hợp đủ Tam Hóa cùng Hóa Quyền và Hóa
Khoa, con của đương số là quý nhân làm nên sang giàu.`,
  },

  {
    id: 'hoa-loc-tai-tu-tuc-ham',
    title: 'Hóa Lộc Tử Tức - Hãm địa',
    sao: ['Hóa Lộc'],
    cung: ['Tử Tức'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi Hóa Lộc Hãm địa tại Tử Tức, đương số hiếm muộn, hoặc con
cái sức khỏe yếu, tính bướng bỉnh.`,
  },

  {
    id: 'hoa-loc-tai-tu-tuc-kinh-kiep',
    title: 'Hóa Lộc Tử Tức + Kình Dương / Địa Kiếp',
    sao: ['Hóa Lộc'],
    cung: ['Tử Tức'],
    ketHop: ['Kình Dương', 'Địa Kiếp'],
    doUuTien: 73,
    tomTat: `Khi Hóa Lộc tại Tử Tức gặp Kình Dương hoặc Địa Kiếp, đường con
cái có chuyện buồn — bệnh tật, xa cách, ly tán. Đương số cần kiên nhẫn và
bao dung.`,
  },

  // ============================================================
  // 17. Hóa Lộc tại Phu Thê
  // ============================================================
  {
    id: 'hoa-loc-tai-phu-the',
    title: 'Hóa Lộc tại Phu Thê',
    sao: ['Hóa Lộc'],
    cung: ['Phu Thê'],
    doUuTien: 80,
    tomTat: `Khi Hóa Lộc đóng tại Phu Thê, vợ chồng đương số đồng lòng,
tình cảm sắt son, gắn bó. Hai bên biết đồng cam cộng khổ, cùng vun đắp mái
ấm và kinh tế.`,
  },

  {
    id: 'hoa-loc-tai-phu-the-tam-hoa-khoi-viet',
    title: 'Hóa Lộc Phu Thê + Tam Hóa + Khôi Việt',
    sao: ['Hóa Lộc'],
    cung: ['Phu Thê'],
    ketHop: ['Hóa Quyền', 'Hóa Khoa', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 75,
    tomTat: `Khi Hóa Lộc tại Phu Thê hợp đủ Tam Hóa cùng Thiên Khôi và
Thiên Việt, đương số có quý nhân phối hợp.`,
  },

  {
    id: 'hoa-loc-tai-phu-the-hong-loan',
    title: 'Hóa Lộc Phu Thê + Hồng Loan',
    sao: ['Hóa Lộc'],
    cung: ['Phu Thê'],
    ketHop: ['Hồng Loan'],
    doUuTien: 75,
    tomTat: `Khi Hóa Lộc tại Phu Thê có Hồng Loan đi cùng, đương số nhờ của
vợ mà làm giàu.`,
  },

  {
    id: 'hoa-loc-tai-phu-the-phu-quyen',
    title: 'Hóa Lộc Phu Thê + Thiên Phủ + Hóa Quyền',
    sao: ['Hóa Lộc'],
    cung: ['Phu Thê'],
    ketHop: ['Thiên Phủ', 'Hóa Quyền'],
    doUuTien: 75,
    tomTat: `Khi Hóa Lộc tại Phu Thê gặp Thiên Phủ và Hóa Quyền, hôn nhân
của đương số bền chặt, ấm êm.`,
  },

  {
    id: 'hoa-loc-tai-phu-the-ham',
    title: 'Hóa Lộc Phu Thê - Hãm địa',
    sao: ['Hóa Lộc'],
    cung: ['Phu Thê'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `Khi Hóa Lộc Hãm địa tại Phu Thê, hôn nhân đương số rơi vào
cảnh "cơm chẳng lành canh chẳng ngọt" do tiền bạc, công việc và ngoại
cảnh.`,
  },

  {
    id: 'hoa-loc-tai-phu-the-ky-kinh-kiep',
    title: 'Hóa Lộc Phu Thê + Hóa Kỵ / Kình Đà / Địa Kiếp',
    sao: ['Hóa Lộc'],
    cung: ['Phu Thê'],
    ketHop: ['Hóa Kỵ', 'Kình Dương', 'Đà La', 'Địa Kiếp'],
    doUuTien: 75,
    tomTat: `Khi Hóa Lộc tại Phu Thê gặp Hóa Kỵ, Kình Dương, Đà La hoặc
Địa Kiếp, hôn nhân rạn nứt, đương số phải đối mặt với chia ly hoặc người
thứ ba.`,
  },

  // ============================================================
  // 18. Hóa Lộc tại Huynh Đệ
  // ============================================================
  {
    id: 'hoa-loc-tai-huynh-de',
    title: 'Hóa Lộc tại Huynh Đệ',
    sao: ['Hóa Lộc'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Hóa Lộc đóng tại Huynh Đệ phản ánh quan hệ giữa đương số và
anh chị em.`,
  },

  {
    id: 'hoa-loc-tai-huynh-de-dac-dia',
    title: 'Hóa Lộc Huynh Đệ - Đắc địa',
    sao: ['Hóa Lộc'],
    cung: ['Huynh Đệ'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 78,
    tomTat: `Khi Hóa Lộc Đắc địa tại Huynh Đệ, anh em hòa thuận, gắn bó, hỗ
trợ nhau cả tinh thần lẫn vật chất. Đúng cảnh "máu chảy ruột mềm" — anh
em đương số có thể hợp tác làm ăn thành công.`,
  },

  {
    id: 'hoa-loc-tai-huynh-de-tuong-loc',
    title: 'Hóa Lộc Huynh Đệ + Thiên Tướng + Song Lộc',
    sao: ['Hóa Lộc'],
    cung: ['Huynh Đệ'],
    ketHop: ['Thiên Tướng', 'Lộc Tồn'],
    doUuTien: 73,
    tomTat: `Khi Hóa Lộc tại Huynh Đệ có Thiên Tướng và Lộc Tồn (cách
Song Lộc) đi cùng, anh em đương số có người quyền quý, làm quan có chức
vị.`,
  },

  {
    id: 'hoa-loc-tai-huynh-de-thien-ma',
    title: 'Hóa Lộc Huynh Đệ + Thiên Mã',
    sao: ['Hóa Lộc'],
    cung: ['Huynh Đệ'],
    ketHop: ['Thiên Mã'],
    doUuTien: 73,
    tomTat: `Khi Hóa Lộc tại Huynh Đệ có Thiên Mã đồng hành, anh em của
đương số có người buôn bán giàu.`,
  },

  {
    id: 'hoa-loc-tai-huynh-de-ham',
    title: 'Hóa Lộc Huynh Đệ - Hãm địa',
    sao: ['Hóa Lộc'],
    cung: ['Huynh Đệ'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi Hóa Lộc Hãm địa tại Huynh Đệ, tình cảm anh em phai nhạt,
phát sinh mâu thuẫn hoặc tranh chấp tài sản.`,
  },

  {
    id: 'hoa-loc-tai-huynh-de-kinh-kiep-khong-ky',
    title: 'Hóa Lộc Huynh Đệ + Kình Đà / Địa Kiếp / Thiên Không / Hóa Kỵ',
    sao: ['Hóa Lộc'],
    cung: ['Huynh Đệ'],
    ketHop: ['Kình Dương', 'Đà La', 'Địa Kiếp', 'Thiên Không', 'Hóa Kỵ'],
    doUuTien: 73,
    tomTat: `Khi Hóa Lộc tại Huynh Đệ gặp Kình Dương, Đà La, Địa Kiếp,
Thiên Không hoặc Hóa Kỵ, tình anh em sứt mẻ khó hàn gắn; nặng có thể đi
tới tuyệt giao.`,
  },

  // ============================================================
  // 19. Hóa Lộc gặp Sao XẤU - cát xứ tàng hung
  // ============================================================
  {
    id: 'hoa-loc-cat-xu-tang-hung',
    title: 'Hóa Lộc + sao xấu - "Cát xứ tàng hung"',
    sao: ['Hóa Lộc'],
    doUuTien: 55,
    tomTat: `Hóa Lộc kết hợp sao xấu dễ thành cách **cát xứ tàng hung** —
bề ngoài tốt mà ẩn họa lớn bên trong.

- Đương số có Hóa Lộc cần hành động thực tế và giữ tỉnh táo mới khai phá
  được kho lộc.`,
  },

  {
    id: 'hoa-loc-bao-phat-bao-tan',
    title: 'Hóa Lộc + Không Kiếp - bạo phát bạo tàn',
    sao: ['Hóa Lộc'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 56,
    tomTat: `Khi Hóa Lộc gặp Địa Không và Địa Kiếp, đương số rơi vào cảnh
bạo phát bạo tàn — cơ hội tưởng tốt nhưng nhiều rắc rối, mất nhiều hơn
được.`,
  },

  {
    id: 'hoa-loc-canh-tranh-kinh-da',
    title: 'Hóa Lộc + Kình Đà - cạnh tranh',
    sao: ['Hóa Lộc'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 56,
    tomTat: `Khi Hóa Lộc gặp Kình Dương và Đà La, đương số dễ vướng cạnh
tranh — vấn đề không phải sợ cạnh tranh mà sợ chính bản thân không chịu
phát triển.`,
  },

  {
    id: 'hoa-loc-co-hoi-hoa-linh',
    title: 'Hóa Lộc + Hỏa Linh - cơ hội bất ngờ',
    sao: ['Hóa Lộc'],
    ketHop: ['Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 56,
    tomTat: `Khi Hóa Lộc gặp Hỏa Tinh và Linh Tinh, cuộc đời đương số nhiều
cơ hội bất ngờ — đòi hỏi nắm bắt nhanh nhạy.`,
  },
];
