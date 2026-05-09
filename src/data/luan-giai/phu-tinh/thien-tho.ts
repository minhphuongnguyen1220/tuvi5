import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THIÊN THỌ - Thổ, Phù Tinh.
 *
 * An theo NĂM SINH (engine: từ cung an Thân = năm Tý, thuận đến chi năm sinh).
 *
 * Đặc trưng: TRUNG HẬU - ÔN HÒA - TĂNG TUỔI THỌ.
 *
 * CẶP TÀI-THỌ - quan hệ NHÂN-QUẢ (đặc trưng nổi bật nhất):
 * - Thiên Tài = HẠT MẦM (nơi gieo NHÂN)
 * - Thiên Thọ = TRÁI QUẢ (nơi gặt QUẢ)
 * - Phần CHUNG cặp đôi đã viết tại file này với tag sao: ['Thiên Thọ','Thiên Tài']
 */
export const luanGiai_ThienTho: DoanLuanGiai[] = [
  {
    id: 'thien-tho-tinh-chat-chung',
    title: 'Thiên Thọ - Đặc tính chung',
    sao: ['Thiên Thọ'],
    doUuTien: 32,
    tomTat: `**Thiên Thọ** là phụ tinh thuộc nhóm Phù Tinh, mang ngũ hành Thổ
và được an theo năm sinh.

Đặc tính cốt lõi của sao là sự trung hậu, chu đáo, hiền hậu và cần cù. Đương
số có Thiên Thọ thường sống "dĩ hòa vi quý", không thích tranh giành quyền
thế; tuy đôi khi mặt trái biểu hiện thành thiếu quyết đoán, cố chấp và né
tránh trách nhiệm.

Vai trò của sao có hai khía cạnh chính: tăng tuổi thọ và giảm bệnh tật cho
cung tọa thủ; đồng thời là "trái quả" trong cặp nhân-quả với **Thiên Tài**
(hạt mầm). Nơi Thiên Thọ đóng chính là nơi đương số nhận thành quả từ những
gì đã gieo ở cung có Thiên Tài.

Khái quát ảnh hưởng:

- Khi cát tinh hội về, sự nghiệp ổn định, hôn nhân ít sóng gió, ít bệnh nặng,
  tài lộc vững bền.
- Khi sát tinh hội về, sự thiếu quyết đoán làm đương số dễ bỏ lỡ cơ hội; hôn
  nhân trắc trở, bệnh tật và tai họa nhiều, tiền vào nhanh ra nhanh khó
  giữ.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // PHẦN CHUNG CẶP ĐÔI: TÀI-THỌ NHÂN-QUẢ
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'tai-tho-nhan-qua',
    title: 'Tài-Thọ - Quan hệ Nhân Quả (gieo nhân gặt quả)',
    sao: ['Thiên Thọ', 'Thiên Tài'],
    doUuTien: 60,
    tomTat: `Bộ **Thiên Tài - Thiên Thọ** là cặp song tinh có quan hệ nhân-quả
độc đáo nhất trong tử vi.

Trong đó, Thiên Tài đóng vai trò "hạt mầm" — nơi đương số cần gieo nhân: đầu
tư công sức, chăm sóc, làm phúc, tu tập. Thiên Thọ đóng vai trò "trái quả" —
nơi đương số gặt thành tựu, may mắn, phúc trạch, hoặc tai họa nếu gieo nhân
xấu.

Quy luật vận dụng khi xem lá số:

- Tra vị trí Thiên Tài đóng ở cung nào — đó là nơi cần vun bồi.
- Tra vị trí Thiên Thọ đóng ở cung nào — đó là nơi được hưởng quả.
- Gieo nhân lành ở cung Thiên Tài thì quả lành sẽ đến tại cung Thiên Thọ.
- Gieo nhân xấu (lười nhác, vô tâm, làm ác) thì quả xấu cũng đến đúng vị trí
  của Thiên Thọ.

Ý nghĩa khuyên răn của bộ sao gói gọn trong câu "gieo gió gặt bão, ở hiền gặp
lành" — nhắc đương số sống thiện lương, biết soi chiếu hành động bản thân, vì
mọi việc làm đều có hồi báo rõ ràng.`,
    chiTiet: `## Cặp Tài-Thọ - Triết lý Nhân Quả Phật pháp

Trong toàn bộ hệ sao tử vi, **Thiên Tài và Thiên Thọ** là cặp duy nhất mang
ý nghĩa nhân - quả rõ rệt, ví như giáo lý nhà Phật về quy luật "gieo nhân nào
gặt quả nấy".

### Cách vận dụng cụ thể trên lá số

Bước 1: Xác định Thiên Tài đóng cung nào — đó là cung gieo nhân.

Bước 2: Xác định Thiên Thọ đóng cung nào — đó là cung gặt quả.

Bước 3: Đối chiếu ý nghĩa cụ thể trên lá số:

- Thiên Tài tại Phụ Mẫu, Thiên Thọ tại Mệnh: chăm cha mẹ hết lòng thì chính
  bản thân đương số (Mệnh) sẽ được hưởng phúc, tăng thọ về sau.
- Thiên Tài tại Tử Tức, Thiên Thọ tại Phúc Đức: đầu tư cho con cái, về già
  hưởng phúc trạch họ tộc.
- Thiên Tài tại Phúc Đức, Thiên Thọ tại Tài Bạch: chăm lo mồ mả gia tiên,
  làm việc thiện thì tài lộc dồi dào.
- Thiên Tài tại Tật Ách, Thiên Thọ tại Quan Lộc: giữ gìn sức khỏe, rèn luyện
  thân thể thì sự nghiệp thăng tiến.

### Quy luật nghịch (gieo xấu gặt xấu)

- Lười biếng, vô tâm tại cung có Thiên Tài thì quả xấu cũng đến đúng tại cung
  Thiên Thọ. Không có chuyện gieo lười mà gặt phúc.
- Khi Thiên Tài đi cùng các sao Sát - Hình - Kỵ, việc gieo nhân càng khó
  khăn.
- Khi Thiên Thọ đi cùng Địa Không, Địa Kiếp, Đà La hay Hóa Kỵ, quả nhận được
  bị chiết giảm.

### Cách hóa giải khi cặp Tài-Thọ phạm sát tinh

- Tu thân, hành thiện, làm phúc đúng hướng cung Thiên Tài đóng.
- Chăm sóc, đầu tư công sức thật sự vào lĩnh vực mà Thiên Tài cai quản.
- Không cần chi tiền nhiều — quan trọng là tâm và hành động.
- Đặc biệt khi cặp này đi cùng bộ Tứ Đức (Long Đức, Phúc Đức, Thiên Đức,
  Nguyệt Đức), cải vận rất mạnh và phúc trạch rất dày.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // THIÊN THỌ TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-tho-tai-menh',
    title: 'Thiên Thọ tại Mệnh',
    sao: ['Thiên Thọ'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `Khi Thiên Thọ thủ Mệnh, đương số là người trung thực, ôn hòa,
hiền hậu và cần cù; sống "dĩ hòa vi quý", không tranh giành quyền thế.

Mặt sáng của cách cục là tính tình điềm đạm, ít gây thù chuốc oán; chủ mệnh
có khả năng tăng tuổi thọ cho bản thân, phúc lộc song hành với cung có Thiên
Tài.

Mặt tối là đôi khi đương số xử sự thiếu quyết đoán, hay né tránh trách nhiệm.
Sự ôn hòa quá mức biến thành cố chấp và an phận, dễ làm chủ mệnh bỏ lỡ cơ
hội.

Quy luật vận dụng quan trọng: khi Mệnh có Thiên Thọ, phải xem Thiên Tài đóng
ở cung nào — đó chính là nơi đương số cần gieo nhân (đầu tư, chăm sóc, làm
thiện) để bản thân nhận lại thành quả.`,
  },

  {
    id: 'thien-tho-tai-phu-mau',
    title: 'Thiên Thọ tại Phụ Mẫu',
    sao: ['Thiên Thọ'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Khi Thiên Thọ tại Phụ Mẫu, cha mẹ đương số hiền hậu, khiêm cung
và thọ trường.

Khi cát tinh hội về cùng Thiên Quan, Thiên Phúc, Ân Quang, Thiên Quý, Tả Phù
hay Hữu Bật, cha mẹ phúc dày, được quý nhân che chở; gia đạo yên ổn và con
cái hưởng phúc ấm.

Khi sát tinh hội về (Kình Dương, Đà La, Địa Không, Địa Kiếp, Hóa Kỵ), cha mẹ
vẫn có phúc thọ nhưng phải trải qua nhiều lần bệnh tật, tai nạn; tính cách
bảo thủ, cố chấp, ít chịu thay đổi. Quan hệ cha mẹ - con cái khi đó cũng xa
cách, khó cảm thông.

Cách hóa giải tăng thọ cho cha mẹ: tra vị trí cung có Thiên Tài rồi gieo
phúc, làm thiện, bố thí đúng vào phương vị đó — cha mẹ sẽ tăng tuổi thọ và
sức khỏe vững bền.`,
  },

  {
    id: 'thien-tho-tai-phu-the',
    title: 'Thiên Thọ tại Phu Thê - chênh lệch tuổi rõ rệt',
    sao: ['Thiên Thọ'],
    cung: ['Phu Thê'],
    doUuTien: 76,
    tomTat: `Khi Thiên Thọ thủ Phu Thê, vợ chồng đương số chan hòa, biết nâng
đỡ nhau; đời sống hôn nhân ít sóng gió.

Một đặc trưng riêng đáng chú ý là cảnh chênh lệch tuổi rõ rệt giữa hai vợ
chồng — trên 10 tuổi nếu chồng già hơn vợ, hoặc trên 4-5 tuổi nếu vợ già
hơn chồng. Sự chênh lệch này không làm giảm duyên nợ; ngược lại, hai người
bổ khuyết được cho nhau.

Khi cát tinh hội về cùng Tả Phù, Hữu Bật, Thiên Phúc, Thiên Quan, Ân Quang,
Thiên Quý, đời sống hôn nhân càng ít sóng gió. Hai vợ chồng đồng lòng xây
dựng gia đạo hưng vượng, là chỗ dựa tinh thần vững chắc cho nhau suốt đời.

Cách tăng thọ cho người hôn phối: tra cung có Thiên Tài, từ đó quan tâm và
toàn tâm với người hôn phối — gia đình sẽ yên ấm, kết quả quý báu sẽ đến tại
cung Thiên Thọ.`,
  },

  {
    id: 'thien-tho-tai-dien-trach',
    title: 'Thiên Thọ tại Điền Trạch',
    sao: ['Thiên Thọ'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Khi Thiên Thọ tại Điền Trạch, đương số dễ thừa hưởng điền sản,
nhà cửa và đất cát từ tổ tiên — được trao tặng hoặc truyền lại.

Mức độ thừa hưởng lớn hay nhỏ tùy vào sự quan tâm chăm sóc của đương số đối
với cung có Thiên Tài.

Khi cát tinh hội về, đương số hiền hậu, tốt bụng, sống chan hòa nên được hàng
xóm láng giềng quý mến, gia trạch yên ổn.

Khi sát tinh hội về (Địa Không, Địa Kiếp, Kình Dương, Đà La), nhà đất tuy
nhận được nhưng khó giữ — phải chia sẻ hoặc sang nhượng; gia trạch không yên,
quan hệ láng giềng dễ bất hòa.`,
  },

  {
    id: 'thien-tho-tai-quan-loc',
    title: 'Thiên Thọ tại Quan Lộc',
    sao: ['Thiên Thọ'],
    cung: ['Quan Lộc'],
    doUuTien: 75,
    tomTat: `Khi Thiên Thọ tại Quan Lộc, phong cách làm việc của đương số nhẹ
nhàng, từ tốn, chu đáo và thận trọng, ít nóng nảy.

Mặt sáng: chủ mệnh được đồng nghiệp và cấp trên tin tưởng; sự nghiệp ổn định,
lâu bền, gặp nhiều may mắn và có quý nhân nâng đỡ.

Mặt tối: đương số thiếu quyết đoán, an phận nên dễ bỏ lỡ cơ hội, khó bứt phá
mạnh mẽ. Hiện tượng này càng đúng khi gặp Kình Dương, Đà La hay Hóa Kỵ.

Cách giữ sự nghiệp: tu dưỡng và tích thiện ở cung có Thiên Tài thì đương số
sẽ giữ được công danh, không thất bại nặng nề.`,
  },

  {
    id: 'thien-tho-tai-no-boc',
    title: 'Thiên Thọ tại Nô Bộc',
    sao: ['Thiên Thọ'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Khi Thiên Thọ tại Nô Bộc, bạn bè và đồng nghiệp của đương số hiền
lành, trung hậu, biết cảm thông; ít tranh giành và nhiệt tình hỗ trợ trong cả
công việc lẫn cuộc sống.

Khi cát tinh hội về cùng Tả Phù, Hữu Bật, Văn Xương, Văn Khúc, đương số có
nhiều bạn tốt và quý nhân xung quanh.

Khi sát tinh hội về (Đà La, Hóa Kỵ, Địa Không), bạn bè trở thành gánh nặng;
sự giúp đỡ không như kỳ vọng, có người còn lợi dụng khiến đương số vướng
bận.`,
  },

  {
    id: 'thien-tho-tai-thien-di',
    title: 'Thiên Thọ tại Thiên Di',
    sao: ['Thiên Thọ'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `Khi Thiên Thọ tại Thiên Di, đương số ra ngoài nhẹ nhàng, từ tốn
và dễ gây thiện cảm với người khác.

Khi cát tinh hội về cùng Tả Phù, Hữu Bật, Văn Xương, Văn Khúc, Ân Quang,
Thiên Quý, đương số đi xa hay xuất ngoại đều có quý nhân phù trợ; được người
khác nể trọng, nâng đỡ và công việc luôn suôn sẻ, thuận lợi.

Khi sát tinh hội về (Đà La, Địa Không, Địa Kiếp, Hóa Kỵ), đương số vướng
phiền toái, cản trở khi đi xa; dễ bị tiểu nhân lợi dụng, việc tha hương không
yên ổn.`,
  },

  {
    id: 'thien-tho-tai-tat-ach',
    title: 'Thiên Thọ tại Tật Ách - HỢP CÁCH (giảm bệnh tăng thọ)',
    sao: ['Thiên Thọ'],
    cung: ['Tật Ách'],
    doUuTien: 82,
    tomTat: `Khi Thiên Thọ thủ Tật Ách, đây là vị trí hợp cách nhất của Thiên
Thọ — chủ về giảm bệnh tật, tăng sức khỏe và kéo dài thọ mệnh.

Khi cát tinh hội về cùng Thiên Lương, Thiên Phúc, Thiên Quan, đương số ít
bệnh nặng; nếu có cũng nhanh qua khỏi và dễ gặp thầy giỏi, thuốc hay. Khả
năng tăng thọ trường rất rõ.

Khi sát tinh hội về (Địa Không, Địa Kiếp, Đà La, Hóa Kỵ), đương số có khả
năng gặp bệnh tật, tai họa, thậm chí nguy hiểm tính mạng — phá cách hoàn
toàn, không còn khả năng tăng thọ.

Cách tăng cường phúc thọ: tra cung có Thiên Tài rồi tu nhân tích đức đúng vị
trí đó. Đây chính là gốc gieo nhân để Thiên Thọ tại Tật Ách mang lại điều tốt
lành.`,
  },

  {
    id: 'thien-tho-tai-tai-bach',
    title: 'Thiên Thọ tại Tài Bạch',
    sao: ['Thiên Thọ'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `Khi Thiên Thọ tại Tài Bạch, đương số biết đủ, biết hài lòng với
thu nhập, không quá nặng nề chuyện tiền bạc.

Khi cát tinh hội về cùng Tử Vi, Thiên Phủ, Lộc Tồn hay Hóa Lộc, tài lộc của
đương số vững bền; được quý nhân nâng đỡ về kinh tế, có thể nhận tài sản từ
cha mẹ truyền lại.

Khi sát bại tinh hội về, việc tích lũy tài sản gặp trở ngại — tiền vào nhiều
nhưng hao nhanh, khó giữ lâu. Tuy vậy, hao tổn không đến mức khánh kiệt vì
đương số thường có người giúp đỡ lúc khó khăn.`,
  },

  {
    id: 'thien-tho-tai-tu-tuc',
    title: 'Thiên Thọ tại Tử Tức',
    sao: ['Thiên Thọ'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Khi Thiên Thọ tại Tử Tức, con cái đương số hiền lành, ngoan
ngoãn, biết lễ nghĩa và hiếu thuận.

Khi cát tinh hội về, con cái sáng dạ, học hành đỗ đạt; sự nghiệp vững vàng,
mang lại phúc lành và niềm vui gia đạo. Đương số về sau hưởng phúc, nhờ cậy
được con cái và tuổi già an nhàn.

Khi sát tinh hội về (Địa Kiếp, Kình Dương, Đà La), đường con cái trắc trở,
chậm muộn; khó nhờ vả về vật chất.

Cách hóa giải: gieo nhân lành tại vị trí Thiên Tài thì phúc trạch của con cái
mới vững bền.`,
  },

  {
    id: 'thien-tho-tai-phuc-duc',
    title: 'Thiên Thọ tại Phúc Đức - HỢP CÁCH (gia tộc thọ)',
    sao: ['Thiên Thọ'],
    cung: ['Phúc Đức'],
    doUuTien: 80,
    tomTat: `Khi Thiên Thọ thủ Phúc Đức, đây là vị trí hợp cách của sao —
dòng họ thọ trường, nhiều người hiền lành, chu đáo và để lại gương sáng cho
con cháu noi theo.

Khi cát tinh hội về, đương số hưởng phúc khí từ gia tiên, dễ gặp may mắn và
nhiều lần được giúp đỡ trong đời. Có thêm Văn Xương hay Văn Khúc, phúc tinh
càng dày.

Khi sát tinh hội về (Địa Không, Địa Kiếp, Kình Dương), phúc khí gia tộc suy
giảm; trong họ dễ có người đoản thọ hoặc cuộc sống nhiều thăng trầm.

Cách hóa giải: hành thiện, tu tập, làm phúc tại vị trí có Thiên Tài thì hậu
vận đương số sẽ hưởng phúc ấm.`,
  },

  {
    id: 'thien-tho-tai-huynh-de',
    title: 'Thiên Thọ tại Huynh Đệ',
    sao: ['Thiên Thọ'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Khi Thiên Thọ tại Huynh Đệ, anh chị em gắn bó, chan hòa, yêu
thương và giúp đỡ nhau; đương số được anh chị em bao bọc, nâng đỡ.

Đặc trưng đáng chú ý: anh chị em thường cách tuổi nhau xa.

Khi cát tinh hội về cùng Thiên Quan, Thiên Phúc, Ân Quang, Thiên Quý, anh
chị em hiền lành, tử tế, có học thức và sống trọng đạo nghĩa — mang lại phúc
ấm cho gia đình và dòng họ.

Khi sát tinh hội về (Địa Không, Địa Kiếp, Kình Dương), tình cảm anh chị em
xa cách; ít có cơ hội ở gần và khó nương tựa khi cần.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // KẾT HỢP ĐẶC BIỆT
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-tho-thien-luong-tho-truong',
    title: 'Thiên Thọ + Thiên Lương - Thọ trường hưởng phúc',
    sao: ['Thiên Thọ'],
    ketHop: ['Thiên Lương'],
    doUuTien: 55,
    tomTat: `Khi Thiên Thọ đồng cung với Thiên Lương, câu phú nhắc rõ "Thiên
Thọ Thiên Lương — thọ trường, hưởng phúc, sống lâu".

Thiên Lương vốn là thọ tinh chính của tử vi; kết hợp với Thiên Thọ tạo thành
cách song thọ mạnh mẽ — thọ mệnh kéo dài rõ rệt, đương số hưởng phúc trạch
dày, ít bệnh tật và nếu có cũng nhanh qua khỏi.`,
  },

  {
    id: 'thien-tho-thien-luong-tat-phuc',
    title: 'Thiên Thọ + Thiên Lương tại Tật/Phúc - Thọ trường tột bậc',
    sao: ['Thiên Thọ'],
    cung: ['Tật Ách', 'Phúc Đức'],
    ketHop: ['Thiên Lương'],
    doUuTien: 60,
    tomTat: `Khi Thiên Thọ đồng cung với Thiên Lương đóng tại Tật Ách hoặc Phúc
Đức, đây là vị trí đặc biệt tốt của bộ song thọ. Thọ mệnh kéo dài, đương số
hưởng phúc dày — đây chính là cách an lành bậc nhất về phúc thọ.`,
  },

  {
    id: 'thien-tho-tu-duc-cai-van',
    title: 'Thiên Thọ + bộ Tứ Đức - Cải vận tăng thọ',
    sao: ['Thiên Thọ'],
    ketHop: ['Long Đức', 'Phúc Đức', 'Thiên Đức', 'Nguyệt Đức'],
    doUuTien: 50,
    tomTat: `Khi Thiên Thọ hội đủ bộ Tứ Đức (Long Đức, Phúc Đức, Thiên Đức,
Nguyệt Đức), cách cục cải vận tăng thọ rất mạnh.

Bộ Tứ Đức vốn là sao Giải đặc biệt; kết hợp với khí ôn hòa của Thiên Thọ
giúp hóa giải sát tinh đến tận gốc và tăng phúc thọ đến mức tối đa. Đây là
một trong những cách an lành nhất trong tử vi.`,
  },

  {
    id: 'thien-tho-tu-duc-tat-phuc',
    title: 'Thiên Thọ + Tứ Đức tại Tật/Phúc - Trường thọ',
    sao: ['Thiên Thọ'],
    cung: ['Tật Ách', 'Phúc Đức'],
    ketHop: ['Long Đức', 'Phúc Đức', 'Thiên Đức', 'Nguyệt Đức'],
    doUuTien: 55,
    tomTat: `Khi Thiên Thọ đi cùng Tứ Đức tại Tật Ách hoặc Phúc Đức, đương số
đặc biệt trường thọ. Sao Giải tập trung hóa giải mọi sát tinh, phúc thọ đạt
đỉnh — an lành tột bậc cả về sức khỏe lẫn phúc trạch dòng họ.`,
  },
];
