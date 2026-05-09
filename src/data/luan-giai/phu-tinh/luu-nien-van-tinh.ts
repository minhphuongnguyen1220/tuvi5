import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO LƯU NIÊN VĂN TINH - Kim, sao Lộc Tồn thứ 2.
 * An offset +3 thuận từ Lộc Tồn (engine hardcode).
 *
 * Có khả năng HÓA GIẢI bệnh tật, tai họa nhẹ - giống Lộc Tồn.
 * Chủ về học vấn, tri thức, khoa bảng.
 */
export const luanGiai_LuuNienVanTinh: DoanLuanGiai[] = [
  {
    id: 'luu-nien-van-tinh-tinh-chat-chung',
    title: 'Lưu Niên Văn Tinh - Đặc tính chung',
    sao: ['Lưu Niên Văn Tinh'],
    doUuTien: 32,
    tomTat: `**Lưu Niên Văn Tinh** là phụ tinh thuộc nhóm văn tinh, ngũ hành Kim,
được coi như sao Lộc Tồn thứ hai.

Vị thế của sao này khá đặc biệt:

- An offset +3 thuận từ Lộc Tồn (engine đã hardcode)
- Là văn tinh thứ ba sau Văn Xương và Văn Khúc
- Có khả năng hóa giải bệnh tật, tai họa nhẹ giống Lộc Tồn, song chủ yếu
  giải bằng kiến thức và khoa học kỹ thuật

Vai trò chính của Lưu Niên Văn Tinh là chủ về học vấn, tri thức, sự khai
mở trí tuệ, con đường thi cử học hành nhiều thành tựu và khoa bảng.

Đặc tính của sao thiên về thanh tú, trí thức, học vấn, bằng cấp, nghiên
cứu và nghề thầy giáo.`,
  },

  {
    id: 'luu-nien-van-tinh-tuong-mao',
    title: 'Lưu Niên Văn Tinh - Tướng mạo',
    sao: ['Lưu Niên Văn Tinh'],
    cung: ['Mệnh'],
    doUuTien: 50,
    tomTat: `Đương số có Lưu Niên Văn Tinh thủ Mệnh sở hữu vẻ mặt thanh tú và khôi
ngô, dáng dấp lúc nào cũng nhã nhặn, mang phong vị thư sinh học thức.
Nét đẹp thiên về duyên dáng và tinh tế.

Về khí chất, thần sắc đương số toát lên sự điềm đạm và trí thức, dễ tạo
thiện cảm với người đối diện ngay từ lần gặp đầu.`,
  },

  {
    id: 'luu-nien-van-tinh-tuong-mao-nu',
    title: 'Lưu Niên Văn Tinh tại Mệnh - Nữ mệnh nhan sắc',
    sao: ['Lưu Niên Văn Tinh'],
    cung: ['Mệnh'],
    gioiTinh: 'Nữ',
    doUuTien: 45,
    tomTat: `Nữ mệnh có Lưu Niên Văn Tinh thủ Mệnh sở hữu nhan sắc, dáng vẻ thư
sinh nhã nhặn và trí thức, vẻ đẹp thiên về duyên dáng và tinh tế.`,
  },

  {
    id: 'luu-nien-van-tinh-tai-menh',
    title: 'Lưu Niên Văn Tinh tại Mệnh - thông minh học cao',
    sao: ['Lưu Niên Văn Tinh'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Đương số có Lưu Niên Văn Tinh thủ Mệnh nổi bật ở sự thông minh, học
thức và hoạt bát. Sao này đem đến năng khiếu sắc bén ở nhiều lĩnh vực:

- Văn chương
- Mỹ thuật
- Âm nhạc
- Cùng nhiều ngành sáng tạo khác

Về giao tiếp, đương số ăn nói tốt, khi nói chuyện thường có chuyên môn
sâu — "trên thông thiên văn dưới tường địa lý". Lập luận rõ ràng, lời
nói có trọng tâm.

Vì sao chủ về học hành khoa bảng nên đương số chịu khó, yêu thích học
tập, luôn tìm hiểu các kiến thức xung quanh.

Về công danh, đương số học cao hiểu rộng, có thể vươn tới học vị thạc
sỹ, tiến sỹ hay giáo sư. Người phát mạnh ở ngành văn và nghệ thuật,
hay được may mắn trong công danh và học tập, có điều kiện học hành
thực nghiệm tốt; thời thế hậu thuẫn và người ngoài giúp đỡ nhiều.`,
  },

  {
    id: 'luu-nien-xuong-khuc-khoi-viet-long-phuong',
    title: 'Lưu Niên Văn Tinh + Xương Khúc + Khôi Việt + Long Phượng - thủ khoa',
    sao: ['Lưu Niên Văn Tinh'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt', 'Long Trì', 'Phượng Các'],
    doUuTien: 85,
    tomTat: `Khi Lưu Niên Văn Tinh hội đủ **Văn Xương**, **Văn Khúc**, Thiên Khôi,
Thiên Việt, Long Trì và Phượng Các, đương số là người vô cùng thông
minh xuất chúng, "học một hiểu mười", đỗ thủ khoa và ghi danh bảng vàng.

Đây là cách cục đẹp nhất cho con đường khoa cử: ba văn tinh (Văn Xương,
Văn Khúc, Lưu Niên Văn Tinh) hội tụ, cộng thêm Khôi Việt làm quý nhân
và đôi cát tinh Long Phượng yểm trợ — đúng nghĩa "vương giả học thuật".`,
  },

  {
    id: 'luu-nien-thien-co-cu-mon',
    title: 'Lưu Niên Văn Tinh + Thiên Cơ + Cự Môn - chuyên môn sâu',
    sao: ['Lưu Niên Văn Tinh'],
    ketHop: ['Thiên Cơ', 'Cự Môn'],
    doUuTien: 75,
    tomTat: `Khi Lưu Niên Văn Tinh hội Thiên Cơ và Cự Môn, đương số vô cùng thông
minh, có khả năng tư duy logic tuyệt vời, học rất giỏi và chuyên môn
sâu.

Bộ ba sao này bổ sung cho nhau: Thiên Cơ chủ mưu trí biến hóa, Cự Môn
mang lý luận sắc bén, Lưu Niên Văn Tinh đem học vấn — hợp thành bộ trí
tuệ xuất chúng. Cách cục này hợp với nhà nghiên cứu, chuyên gia, giáo
sư và nhà khoa học.`,
  },

  {
    id: 'luu-nien-tai-phu-mau',
    title: 'Lưu Niên Văn Tinh tại Phụ Mẫu',
    sao: ['Lưu Niên Văn Tinh'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Đương số có Lưu Niên Văn Tinh đóng Phụ Mẫu thường có cha mẹ là người
học thức, có chữ nghĩa và chức danh; nếu không thì cũng có tài nghệ
khéo léo. Cha mẹ nhiều bằng cấp, học lên được cao, có thể là thạc sỹ,
giáo sư hoặc tiến sỹ.

Đương số sinh ra trong gia đình gia giáo, giỏi giang, tuổi trẻ thường
có điều kiện học tập tốt, thuận lợi thi cử và thành danh.

Một điểm thú vị: kể từ khi đẻ ra đương số, sự nghiệp học tập và công
danh của cha mẹ thường thuận lợi và phát triển hơn trước.

Về hôn nhân, đương số dễ kết hôn muộn; người hôn phối là người có
điều kiện và giàu có.`,
  },

  {
    id: 'luu-nien-tai-phuc-duc',
    title: 'Lưu Niên Văn Tinh tại Phúc Đức',
    sao: ['Lưu Niên Văn Tinh'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `Đương số có Lưu Niên Văn Tinh đóng Phúc Đức được hưởng phúc đức dồi
dào, gia tăng tuổi thọ và sống lâu. Sinh ra trong dòng họ, gia đình có
tri thức cao và truyền thống học tập nghiên cứu tốt; nhiều người có
bằng cấp, đạt khoa bảng cao.

Đặc biệt trong dòng họ dễ có thần đồng sinh ra, nhất là khi hội thêm
Văn Xương, Văn Khúc, Thiên Khôi, Thiên Việt, Long Trì và Phượng Các.

Về tâm linh, tổ tiên mồ yên mả đẹp, dòng họ phát đạt nghiệp văn, nhiều
người đỗ đạt; trên mộ các cụ thường hay có câu đối, câu thơ.

Về hôn nhân, gia đình người hôn phối là gia đình gia giáo, cha mẹ là
người có học thức và nhiều bằng cấp cao.`,
  },

  {
    id: 'luu-nien-tai-dien-trach',
    title: 'Lưu Niên Văn Tinh tại Điền Trạch - thư phòng',
    sao: ['Lưu Niên Văn Tinh'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Lưu Niên Văn Tinh đóng Điền Trạch gia tăng nét đẹp cho nhà cửa và
nơi ở của đương số. Nhà thường gọn gàng sạch sẽ, có nhiều sách, treo
nhiều bằng cấp và giải thưởng; nhà dễ có thư phòng hoặc phòng đọc sách
riêng.

Tính nghệ thuật trong không gian sống cũng cao: nhiều tranh ảnh, đồ
vật trang trí đẹp đẽ; hay treo những câu châm ngôn, triết lý của vĩ
nhân.

Khu vực nhà ở thường có dân trí cao, hàng xóm nhiều người học thức,
văn hóa và tình cảm; trong vùng dễ có nhiều đứa trẻ thông minh học
giỏi được sinh ra.`,
  },

  {
    id: 'luu-nien-tai-quan-loc',
    title: 'Lưu Niên Văn Tinh tại Quan Lộc',
    sao: ['Lưu Niên Văn Tinh'],
    cung: ['Quan Lộc'],
    doUuTien: 80,
    tomTat: `Đương số có Lưu Niên Văn Tinh đóng Quan Lộc thường làm các nghề đặc
biệt, đặc sắc, đòi hỏi sự khéo léo chân tay, ngôn ngữ, thủ công mỹ
nghệ, mỹ thuật, văn học nghệ thuật — và nhờ đó nổi tiếng và phát tài.

Đặc trưng nghề nghiệp:

- Người ham học, thích tìm hiểu
- Nhiều bằng cấp, khen thưởng
- Sử dụng đúng ngành học vào nghề nghiệp
- Công việc có tính nghiên cứu, tìm hiểu cao
- Có thể học thêm bằng cấp để thăng tiến
- Hay được cử đi học thêm chuyên môn bên ngoài

Triết lý "nhất nghệ tinh, nhất thân vinh" rất đúng với đương số: tài
lộc phát sinh từ chính năng lực và giá trị tri thức bản thân tạo ra,
chứ không phải do may rủi nhất thời.`,
  },

  {
    id: 'luu-nien-tai-no-boc',
    title: 'Lưu Niên Văn Tinh tại Nô Bộc',
    sao: ['Lưu Niên Văn Tinh'],
    cung: ['Nô Bộc'],
    doUuTien: 72,
    tomTat: `Lưu Niên Văn Tinh đóng Nô Bộc cho thấy bè bạn và người giúp việc
xung quanh đương số là người có chữ nghĩa hoặc có tài nghệ đặc biệt,
song lại ham vui.

Cụ thể: bạn bè đương số có học thức, ham học, nhiều bằng cấp; có thể
giúp đỡ đương số trong công việc và học tập.`,
  },

  {
    id: 'luu-nien-no-boc-menh-luong-tuong',
    title: 'Lưu Niên Văn Tinh Nô + Thiên Lương/Tướng tại Mệnh - thầy giáo',
    sao: ['Lưu Niên Văn Tinh'],
    cung: ['Nô Bộc', 'Mệnh'],
    ketHop: ['Thiên Lương', 'Thiên Tướng'],
    doUuTien: 67,
    tomTat: `Khi Lưu Niên Văn Tinh đóng Nô Bộc và Mệnh có Thiên Lương hoặc Thiên
Tướng, đương số dễ làm thầy giáo mát tay, có nhiều học trò hiển đạt,
xuất sắc.`,
  },

  {
    id: 'luu-nien-tai-thien-di',
    title: 'Lưu Niên Văn Tinh tại Thiên Di - du học',
    sao: ['Lưu Niên Văn Tinh'],
    cung: ['Thiên Di'],
    doUuTien: 78,
    tomTat: `Đương số có Lưu Niên Văn Tinh đóng Thiên Di mỗi khi ra ngoài, đi xa
đều hay gặp may mắn và thuận lợi trong công danh thi cử, được trao
tặng nhiều bằng cấp và khen thưởng.

Đặc biệt, đương số thuận lợi trong việc đi xa: có thể đi học xa, đi
du học, hay tới những nơi có học thức, văn hóa cao và nghệ thuật. Ra
ngoài học tập được nhiều thứ, thường có người chỉ bảo, hướng dẫn,
kèm cặp tận tình.

Đương số cũng hay được quý nhân phù trợ, gặp được nhiều người có
kiến thức uyên thâm và tài giỏi giúp đỡ, giảng dạy.`,
  },

  {
    id: 'luu-nien-tai-tat-ach',
    title: 'Lưu Niên Văn Tinh tại Tật Ách',
    sao: ['Lưu Niên Văn Tinh'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `Lưu Niên Văn Tinh đóng Tật Ách có ngũ hành thuộc Kim nên bệnh tật
đương số dễ liên quan tới phế phổi và vòm họng.

Vốn là sao Giải, ví như Lộc Tồn thứ hai, Lưu Niên Văn Tinh có tính
chất hóa giải bệnh tật và tai họa nhẹ. Phần lớn được sử dụng bằng
kiến thức, khoa học kỹ thuật để hóa giải: ốm đau thì gặp bác sỹ
giỏi, gặp tai họa thì có đủ tài trí sáng suốt để tự giải quyết.

Một đặc trưng đáng chú ý: trong những hoàn cảnh khó khăn, ốm đau,
bệnh tật, đương số thường tìm hiểu và học tập được những cái mới
nhanh hơn, thông suốt hơn — biến thời gian dưỡng bệnh thành cơ hội
nghiên cứu.

Khi đương số mất đi, thường có bài điếu văn tưởng nhớ vô cùng hay
và xúc động, được truy tặng nhiều bằng khen và giấy khen.`,
  },

  {
    id: 'luu-nien-tai-tai-bach',
    title: 'Lưu Niên Văn Tinh tại Tài Bạch',
    sao: ['Lưu Niên Văn Tinh'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `Đương số có Lưu Niên Văn Tinh đóng Tài Bạch là người tìm hiểu, nghiên
cứu sâu về tài chính. Tiền bạc kiếm được nhờ học tập nghiên cứu và
học vấn; có thể sử dụng bằng cấp cùng ngành nghề mình học để kiếm
tiền.

Đặc trưng dòng tiền:

- Hay đạt được học bổng, quỹ khuyến học
- Tạo điều kiện cho việc học tập
- Hay bỏ nhiều tiền cho học tập, nghiên cứu, đi du học
- Sau đó dễ kiếm được tiền nhờ chính kiến thức tích lũy được

Triết lý nổi bật: đầu tư cho trí tuệ chính là nền móng vững chắc nhất
để phát triển tài lộc bền vững.`,
  },

  {
    id: 'luu-nien-tai-tu-tuc',
    title: 'Lưu Niên Văn Tinh tại Tử Tức - quý tử',
    sao: ['Lưu Niên Văn Tinh'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Lưu Niên Văn Tinh đóng Tử Tức cho thấy con cái đương số học hành
tốt, đồng thời gia tăng số lượng về con.

Tính cách con cái:

- Thông minh, chăm học
- Ham tìm tòi
- Có đứa thích theo nghệ thuật

Đường con cái dễ sinh quý tử, con có nhiều bằng cấp và học vị, có
thể học lên cao, đạt nhiều thành tích và chức danh trong cuộc đời.`,
  },

  {
    id: 'luu-nien-tai-phu-the',
    title: 'Lưu Niên Văn Tinh tại Phu Thê',
    sao: ['Lưu Niên Văn Tinh'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `Lưu Niên Văn Tinh đóng Phu Thê cho thấy vợ chồng đương số danh giá,
có học thức, hòa thuận và đẹp đôi.

Đặc trưng người hôn phối:

- Ham học tập
- Có nhiều bằng cấp
- Học lên được cao
- Có thiên hướng nghệ thuật tốt
- Có chuyên môn sâu
- Thuận lợi trong con đường công danh, khoa bảng
- Đạt nhiều thành tựu

Đời sống hôn nhân hòa thuận, đồng điệu về trí tuệ — vợ chồng cùng chí
hướng học tập.`,
  },

  {
    id: 'luu-nien-tai-huynh-de',
    title: 'Lưu Niên Văn Tinh tại Huynh Đệ',
    sao: ['Lưu Niên Văn Tinh'],
    cung: ['Huynh Đệ'],
    doUuTien: 72,
    tomTat: `Lưu Niên Văn Tinh đóng Huynh Đệ cho thấy anh chị em của đương số đều
là người học vấn, học cao, nhiều bằng cấp và nhiều thành tựu.

Đương số tuổi trẻ sống trong môi trường có anh chị em giỏi, dễ được
hỗ trợ và kèm cặp, giúp tiếp thu kiến thức và học tập thuận lợi hơn.
Như câu "gần đèn thì sáng" — đương số được hưởng lợi từ chính môi
trường gia đình trí thức.`,
  },

  {
    id: 'luu-nien-vao-han',
    title: 'Lưu Niên Văn Tinh vào hạn',
    sao: ['Lưu Niên Văn Tinh'],
    doUuTien: 60,
    tomTat: `Khi Lưu Niên Văn Tinh đi vào hạn, đương số bước vào giai đoạn thiên
về tìm hiểu và học tập thêm kiến thức mới.

Đặc trưng vận hạn:

- Dễ đi học thêm cái gì đó mới
- Hoặc đi du học
- Nếu không, đơn giản chỉ là giai đoạn mua thêm sách vở về đọc
- Đầu óc thông suốt và dễ tiếp thu hơn

Đương số dễ có quý nhân phù trợ, có người bảo ban hỗ trợ giúp đỡ,
khiến cho kiến thức và trí tuệ được mở mang phát triển hơn.

Đây là vận hạn đặc biệt tốt cho học sinh, sinh viên và người làm
nghiên cứu.`,
  },

  {
    id: 'luu-nien-han-bang-vang',
    title: 'Lưu Niên Văn Tinh + Văn Xương + Văn Khúc + Khôi Việt + Long Phượng vào hạn - đỗ thủ khoa',
    sao: ['Lưu Niên Văn Tinh'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt', 'Long Trì', 'Phượng Các'],
    doUuTien: 55,
    tomTat: `Khi Lưu Niên Văn Tinh hội Văn Xương, Văn Khúc, Thiên Khôi, Thiên Việt,
Long Trì và Phượng Các vào hạn, đương số dễ đỗ thủ khoa, ghi danh bảng
vàng, học lên giáo sư hoặc tiến sỹ và đạt nhiều giải thưởng cao về học
tập, nghiên cứu.`,
  },

  {
    id: 'luu-nien-loi-khuyen',
    title: 'Lời khuyên cho người Lưu Niên Văn Tinh',
    sao: ['Lưu Niên Văn Tinh'],
    doUuTien: 35,
    tomTat: `Lưu Niên Văn Tinh là ngôi sao phản ánh rõ nét vai trò của tri thức
trong từng giai đoạn cuộc đời đương số.

Sức mạnh của sao này gồm:

- Học vấn cao
- Thông minh xuất chúng
- Khoa bảng, khen thưởng
- Đồng thời là sao Giải, hóa giải tai ương nhỏ

Bí quyết phát huy Lưu Niên Văn Tinh:

- Khai mở tư duy, nâng cao học vấn
- Theo đuổi con đường công danh gắn với trí tuệ
- Đầu tư cho học tập — học là tài sản bền vững nhất
- Nghiên cứu chuyên sâu thay vì học rộng nông
- Khi đi với Văn Xương và Văn Khúc thành Tam Văn Tinh, sức mạnh được
  nhân lên
- Chuyên môn hóa, biến tri thức thành nghề nghiệp

Khi được kích hoạt đúng thời điểm và vị trí, Lưu Niên Văn Tinh giúp
đương số khai mở tư duy, nâng cao học vấn cho con đường công danh
gắn với trí tuệ.`,
  },
];
