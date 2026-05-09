import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO QUAN ĐỚI - Kim, Quý Tinh + Quyền Tinh.
 *
 * Vị trí THỨ 3 trong Vòng Trường Sinh 12 sao:
 * Trường Sinh: Mộc Dục: QUAN ĐỚI: Lâm Quan: Đế Vượng: Suy
 * Bệnh: Tử: Mộ: Tuyệt: Thai: Dưỡng
 *
 * An theo CỤC (cùng cách an Trường Sinh).
 *
 * Đặc trưng:
 * - Giai đoạn SAU DẬY THÌ, BẮT ĐẦU ĐI LÀM
 * - Chủ về CHỨC VỊ, CÔNG DANH, QUYỀN HÀNH, DANH TIẾNG, THI KHOA CỬ
 * - Hai mặt nổi bật:
 * • Cát: gặp sao tốt: đỗ đạt thành danh, có quyền uy
 * • Hung: gặp sát bại tinh: ví như "DÂY THẮT CỔ" tự trói buộc, càng làm càng loạn
 * - Hình tượng: cái đai lưng, sợi dây thừng, dây cuộn cổ
 */
export const luanGiai_QuanDoi: DoanLuanGiai[] = [
  {
    id: 'quan-doi-tinh-chat-chung',
    title: 'Quan Đới - Đặc tính chung',
    sao: ['Quan Đới'],
    doUuTien: 33,
    tomTat: `**Quan Đới** là phụ tinh thuộc bộ Quý Tinh kiêm Quyền Tinh, ngũ hành
Kim, đứng ở vị trí thứ ba trong vòng Trường Sinh. Sao này tượng trưng cho
giai đoạn sau dậy thì, lúc đương số bắt đầu ra đời làm việc, đảm nhận chức
phận và xây dựng tên tuổi.

Về ý nghĩa chính, Quan Đới chủ về chức vị, công danh, quyền hành, danh
tiếng và đường thi khoa cử. Hình tượng đặc trưng của sao là cái đai lưng và
sợi dây thừng — vật vừa giúp người mặc thêm trang nghiêm, vừa có thể trở
thành dây trói buộc khi dùng sai.

Vai trò hai mặt rõ rệt:

- Đứng sau Mộc Dục, Quan Đới đánh dấu giai đoạn trưởng thành đầu tiên ra
  đời làm việc của đương số.
- Khi đi cùng cát tinh, Quan Đới là sao cát thực sự, đem lại danh vọng
  vững vàng.
- Khi đi cùng sát bại tinh, Quan Đới biến chất thành "dây thắt cổ" — càng
  vùng vẫy càng siết chặt.

Cụ thể về tổ hợp:

- Gặp Hóa Khoa, Hóa Quyền, Văn Xương, Văn Khúc, Long Trì, Phượng Các, Hoa
  Cái, Giải Thần, Khôi Việt: đương số dễ đỗ đạt và làm nên sự nghiệp.
- Gặp Địa Không, Địa Kiếp, Tuần, Triệt: công danh không bền, không thọ,
  vất vả thời trẻ, có thể mồ côi.
- Gặp nhiều ám tinh: vướng rắc rối, phiền nhiễu và ngăn trở.
- Gặp nhiều sát bại tinh: tự trói tự buộc, "ôm rơm nặng bụng", càng chạy
  càng chết, càng làm càng loạn.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP TỐT
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'quan-doi-cat-tinh-do-dat',
    title: 'Quan Đới + Hóa Khoa/Quyền + Xương Khúc + Long Phượng + Khôi Việt - Đỗ đạt',
    sao: ['Quan Đới'],
    ketHop: ['Hóa Khoa', 'Văn Xương'],
    doUuTien: 70,
    tomTat: `Khi Quan Đới hội đủ Hóa Khoa hoặc Hóa Quyền, Văn Xương, Văn Khúc,
Long Trì, Phượng Các, Hoa Cái, Giải Thần cùng Thiên Khôi - Thiên Việt, đương
số có được bộ đỗ đạt làm nên sự nghiệp trọn vẹn.

Mỗi sao trong bộ đảm nhận một vai trò riêng:

- Văn Xương cùng Văn Khúc đem lại trí tuệ và văn chương.
- Hóa Khoa giúp thi cử đỗ đạt, Hóa Quyền giúp nắm quyền chức.
- Long Trì - Phượng Các báo hiệu kim bảng đề tên.
- Hoa Cái cùng Giải Thần là quý tinh phù trợ.
- Thiên Khôi - Thiên Việt là quý nhân nâng đỡ ở các bước ngoặt.

Nhờ vậy đương số dễ đỗ đạt khoa cử, sự nghiệp thăng tiến rực rỡ và được
trọng dụng trong giới chuyên môn.`,
  },

  {
    id: 'quan-doi-tu-phu-thanh-long-van-tinh-van-chuong',
    title: 'Quan Đới + Tử Phủ + Thanh Long + Văn Tinh + Xương Khúc - Văn chương từ nhỏ',
    sao: ['Quan Đới'],
    ketHop: ['Tử Vi', 'Thanh Long', 'Văn Xương'],
    doUuTien: 65,
    tomTat: `Khi Quan Đới đi cùng Tử Vi hoặc Thiên Phủ, có thêm Thanh Long, Văn
Tinh và Văn Xương hoặc Văn Khúc, đương số hợp cách văn chương thi phú từ
nhỏ tuổi. Câu phú "Long cốt liên Quan, hiên ngang lăng miếu" nói về Thanh
Long liên kết với Quan Đới làm cách rạng rỡ.

Đương số thông minh thiên bẩm, văn chương rạng rỡ ngay từ tuổi thiếu thời.
Bài viết và thơ phú có tiếng từ rất sớm. Trong bộ này, Tử Phủ là đế tinh
nâng đỡ, Thanh Long là rồng xanh học vấn, còn Văn Tinh thêm nét văn nhân
tinh tế cho khí chất chung.`,
  },

  {
    id: 'quan-doi-thien-nguyet-duc-tu-bi',
    title: 'Quan Đới + Thiên Đức + Nguyệt Đức - Tâm tính từ bi',
    sao: ['Quan Đới'],
    ketHop: ['Thiên Đức', 'Nguyệt Đức'],
    doUuTien: 55,
    tomTat: `Khi Quan Đới đi cùng Thiên Đức và Nguyệt Đức, đương số mang tâm
tính từ bi, đối nhân xử thế rất tốt và được mọi người kính nể.

Tứ Đức ở đây có vai trò chế bớt tính ham danh ham quyền vốn có của Quan
Đới, biến nó thành sự hiền minh đoan chính. Nhờ vậy đương số trở thành một
bậc chính nhân quân tử, lấy đức làm gốc thay vì chạy theo danh lợi đơn
thuần.`,
  },

  {
    id: 'quan-doi-dao-hong-cong-danh-som',
    title: 'Quan Đới + Đào Hoa + Hồng Loan - Công danh từ sớm',
    sao: ['Quan Đới'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 55,
    tomTat: `Khi Quan Đới gặp Đào Hoa hoặc Hồng Loan, đương số trở thành biểu
tượng cho công danh từ sớm — nổi tiếng khi tuổi còn trẻ và dễ thành danh
giữa đám đông.

Bộ này có nhiều người quý mến và hâm mộ. Đáng chú ý hơn, đặc tính dâm tà
vốn có của Đào - Hồng được chuyển hóa thành duyên vinh hiển lành mạnh,
đặc biệt hợp với những người làm trong giới giải trí và truyền thông —
nơi danh tiếng và sức hút cá nhân là tài sản chính.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP HUNG - "DÂY THẮT CỔ"
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'quan-doi-dao-guom-sung-dan',
    title: 'Quan Đới + Hỏa/Linh/Kiếp/Không/Kình/Đà/Hình - Nạn đao gươm',
    sao: ['Quan Đới'],
    ketHop: ['Hỏa Tinh', 'Linh Tinh', 'Địa Kiếp', 'Địa Không', 'Kình Dương', 'Đà La', 'Thiên Hình'],
    doUuTien: 65,
    tomTat: `Khi Quan Đới gặp đầy đủ Hỏa Tinh, Linh Tinh, Địa Kiếp, Địa Không,
Kình Dương, Đà La và Thiên Hình, đương số dễ vướng nạn đao gươm, súng đạn
và điện giật.

Quan Đới ở cách này ám chỉ cái chết bất thình lình, không lường trước
được. Đặc điểm khắc nghiệt là càng cố chạy càng mau tới, càng gỡ càng
rối. Sao này thủ ở cung nào cũng đều ám chỉ sự chết chóc và bất đắc kỳ
tử, không riêng gì cung Mệnh hay Tật Ách.

Đây là cách cục cực xấu, cần Tứ Đức, Quan Phúc cùng Tuần Triệt giải bớt
mới mong giảm nhẹ tai họa.`,
  },

  {
    id: 'quan-doi-sat-bai-tinh-day-that-co',
    title: 'Quan Đới + nhiều sát bại tinh - Dây thắt cổ',
    sao: ['Quan Đới'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 60,
    tomTat: `Khi Quan Đới hội nhiều sát bại tinh mà không có sao tốt cứu giải,
sao này biến thành sợi dây thắt cổ, đương số tự trói tự ải chính mình.

Đặc trưng cách cục:

- "Ôm rơm nặng bụng" — càng chạy càng chết, càng làm càng loạn.
- Hay làm việc bất chính, đầu cơ tích trữ.
- Khinh đời rồi bị phá gia bại sản.
- Mang tiếng xấu cho cả gia đình.
- Như sợi dây cuốn cổ, càng vùng vẫy càng không thoát ra được.

Hệ quả nặng nhất có thể tới mức tự sát hoặc treo cổ. Tai họa giáng xuống
cả sự nghiệp lẫn danh dự, kèm theo tranh chấp kiện tụng, phá sản và vướng
vòng lao lý.

Để hóa giải cần Quan Phúc, Tứ Đức, Tuần Triệt, Khôi Việt cùng Quang Quý
hội tụ giảm bớt áp lực của bộ sát.`,
  },

  {
    id: 'quan-doi-linh-hoa-cang-thang',
    title: 'Quan Đới + Linh Tinh + Hỏa Tinh - Tâm trí bất ổn',
    sao: ['Quan Đới'],
    ketHop: ['Linh Tinh', 'Hỏa Tinh'],
    doUuTien: 55,
    tomTat: `Khi Quan Đới gặp Linh Tinh và Hỏa Tinh, đương số dễ rơi vào trạng
thái căng thẳng đầu óc và lo âu triền miên. Càng suy nghĩ càng rối ren,
mù mịt; tâm trí bất định, mất phương hướng.

Đời sống lúc này như câu "ngày vui chẳng trọn, đêm ngủ chẳng yên" —
đương số sa vào mớ bòng bong cảm xúc cùng áp lực vô hình không tên.

Cách hóa giải tốt nhất là tu tập tịnh tâm, thiền định; nếu có Tứ Đức và
Quan Phúc đồng hội thì áp lực giảm rõ rệt.`,
  },

  {
    id: 'quan-doi-khong-kiep-tuan-triet-cong-danh-khong-ben',
    title: 'Quan Đới + Không Kiếp + Tuần Triệt - Công danh không bền',
    sao: ['Quan Đới'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 55,
    tomTat: `Khi Quan Đới đi cùng Địa Không, Địa Kiếp và bị Tuần Triệt án ngữ,
số mệnh đương số không được thọ, công danh thiếu bền vững.

Thời trẻ tuổi thường vất vả, xa cách người thân hoặc thậm chí mồ côi.
Làm việc gì cũng hay gặp trở ngại và điều oan trái không tên; thân thể
dễ có đau bệnh, thương tích. Công danh dở dang, mây gió phiêu bồng — có
khi vừa dựng được chút nền tảng đã bị phá đổ.

Quan Phúc, Tứ Đức và Khôi Việt nếu hội chiếu sẽ giải nhẹ cho cách cục
này, nhưng khó xóa bỏ hoàn toàn.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // QUAN ĐỚI TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'quan-doi-tai-menh',
    title: 'Quan Đới tại Mệnh',
    sao: ['Quan Đới'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Khi Quan Đới thủ Mệnh, đương số mang biểu tượng của quyền uy
danh vọng và thường có khả năng thành đạt rõ rệt.

Về tính cách, đương số ham danh, ham chức quyền, hay ôm đồm công việc và
khao khát địa vị xã hội. Chính sự ôm đồm này đem lại quyền uy cùng chức
vị thực sự — nhưng cũng là gốc rễ của mọi rắc rối khi gặp sao xấu.

Mặt tích cực hiện ra khi gặp cát tinh — Hóa Khoa, Hóa Quyền, Văn Xương,
Văn Khúc, Long Trì, Phượng Các: đương số dễ thành công và được trọng
dụng trong giới chuyên môn.

Mặt tiêu cực phát tác khi gặp Địa Không, Địa Kiếp, Tuần, Triệt cùng sát
bại tinh:

- Danh vọng trở thành gánh nặng đè lên vai.
- Sự nghiệp chông gai — càng cố gắng càng bế tắc.
- Tự chuốc lấy tai họa do không biết dừng lại đúng lúc.

Cảnh báo về phúc thọ rất cần lưu ý: Quan Đới ám chỉ sự chết bất thình
lình, không lường trước. Khi gặp Hỏa, Linh, Kiếp, Không, Kình, Đà cùng
Thiên Hình, đương số dễ bị nạn đao gươm, súng đạn hoặc điện giật. Quan
Đới thủ ở cung nào cũng đều mang ngụ ý chết chóc và bất đắc kỳ tử,
không riêng gì cung Mệnh.`,
  },

  {
    id: 'quan-doi-tai-phu-mau',
    title: 'Quan Đới tại Phụ Mẫu',
    sao: ['Quan Đới'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Khi Quan Đới đóng tại Phụ Mẫu, cha mẹ của đương số là người
trọng công danh sự nghiệp.

Đặc trưng chung: cha mẹ "vai mang chí lớn", thường đặt công việc làm ưu
tiên hàng đầu, quan tâm nhiều đến sự nghiệp và hay ôm đồm nhiều việc bên
ngoài về nhà. Không khí gia đình vì thế thiên về tinh thần phấn đấu hơn
là không khí ấm cúng.

Mặt tích cực thấy rõ khi cát tinh và lục cát tinh hội: cha mẹ có sự
nghiệp ổn định, lời nói có trọng lượng và được người đời kính nể.

Mặt tiêu cực phát tác khi có Thiên Hình, Không Kiếp, Kình Đà cùng sát
bại tinh:

- Cha mẹ phải lao tâm khổ tứ vì mưu sinh.
- Sức khỏe bào mòn vì lo toan chồng chất.
- Tuổi thọ cha mẹ giảm đi, dễ vướng vào vòng lao lý do liên đới công
  việc bên ngoài.`,
  },

  {
    id: 'quan-doi-tai-phuc-duc',
    title: 'Quan Đới tại Phúc Đức',
    sao: ['Quan Đới'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `Khi Quan Đới đóng tại Phúc Đức, đương số sinh ra trong dòng họ
hiếu học, nhiều người làm quan và giữ vai trò then chốt trong xã hội.

Trong dòng tộc, nhiều thế hệ thành đạt và có chỗ đứng. Bản thân đương
số khi sinh ra đã có nhiều thuận lợi về sức khỏe, giáo dục cùng tinh
thần trách nhiệm cao.

Khi hợp với cát tinh như Văn Xương, Văn Khúc, Hóa Khoa, Thai Phụ và
Phong Cáo, dòng tộc duy trì được truyền thống hiếu học, có nhiều người
đỗ đạt và làm quan. Con cháu đời sau hưởng phúc khí dồi dào nhờ được
truyền dạy lấy chữ nghĩa làm gốc, ăn ở có hậu và sống đúng đạo nghĩa.`,
  },

  {
    id: 'quan-doi-tai-dien-trach',
    title: 'Quan Đới tại Điền Trạch',
    sao: ['Quan Đới'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Khi Quan Đới đóng tại Điền Trạch, đương số an cư thuận lợi, nhà
thường gần nơi làm việc hoặc văn phòng.

Đặc trưng nơi ở: gần chốn công sở, cơ quan hành chính. Hàng xóm phần
lớn là công chức, trí thức văn minh, môi trường sống có chất "đô thị".

Mặt tích cực hiện ra khi Khôi Việt và Hóa Quyền hội chiếu: chỗ ở khang
trang, hàng xóm là người quyền quý hoặc công chức cấp cao, vị trí gần
nơi công quyền như tòa án, viện kiểm sát hay sở công an. Cuộc sống cộng
đồng có chất an toàn và uy tín.

Ngược lại, khi sát bại tinh hội tụ, nơi ở phong thủy xấu — gần nhà có
người treo cổ hoặc dễ xảy ra tang sự, để lại dư khí không lành cho khu
vực.`,
  },

  {
    id: 'quan-doi-tai-quan-loc',
    title: 'Quan Đới tại Quan Lộc',
    sao: ['Quan Đới'],
    cung: ['Quan Lộc'],
    doUuTien: 80,
    tomTat: `Khi Quan Đới đóng tại Quan Lộc, đây là vị trí hợp cách của sao —
đương số ôm nặng trọng trách và dễ thành danh.

Tính cách trong sự nghiệp: đam mê, nhiều trách nhiệm, hay ôm đồm công
việc về mình và sẵn sàng nhận phần khó. Tâm sự nghiệp rất mạnh, không
chấp nhận đứng yên.

Khi gặp cát tinh, sự nghiệp hanh thông, đương số sớm ngày thành danh và
dễ đỗ đạt.

Khi gặp sát bại tinh và ám tinh, con đường công danh học tập gặp nhiều
trở ngại:

- Càng học càng rối, càng làm càng loạn.
- Trong công việc dễ vướng mắc tai họa không tên.
- Nhiều khi quá trọng tình nghĩa, vì giúp người mà rước họa vào thân.
- Hoặc xử lý việc này lại lỡ đà vướng mắc vào việc khác, không bao giờ
  dứt điểm được.`,
  },

  {
    id: 'quan-doi-tai-no-boc',
    title: 'Quan Đới tại Nô Bộc',
    sao: ['Quan Đới'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Khi Quan Đới đóng tại Nô Bộc, đương số chủ về tinh thần trách
nhiệm cao, hay giúp đỡ và ôm đồm việc của bạn.

Đặc trưng quan hệ: đương số sống có nghĩa có tình, sẵn sàng mang việc
thiên hạ vào thân và hay gia thêm việc của bạn bè vào người mình. Đây
là chất "kẻ trượng nghĩa" trong nhóm.

Khi sát bại tinh hội — Kình Đà, Hóa Kỵ, Thiên Riêu, Hỏa Linh — chất
trượng nghĩa đó dễ phản tác dụng:

- Rơi vào cảnh "làm ơn mắc oán".
- "Mua dây buộc mình", giúp người mà chẳng được báo ơn.
- Thậm chí mang họa vào thân do dính líu vào chuyện không thuộc về
  mình.`,
  },

  {
    id: 'quan-doi-tai-thien-di',
    title: 'Quan Đới tại Thiên Di',
    sao: ['Quan Đới'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `Khi Quan Đới đóng tại Thiên Di, đương số hay lo việc thiên hạ —
đúng kiểu "ăn cơm nhà vác tù và hàng tổng".

Đương số quan tâm và ôm đồm việc bên ngoài, tham công tiếc việc với cả
tập thể và xã hội, đứng ra xử lý đủ chuyện lớn nhỏ trong cộng đồng. Bản
thân hơi bảo thủ và chậm tiến vì còn nặng truyền thống.

Khi sát tinh hội, đặc tính lo việc thiên hạ trở thành tai họa:

- Ra ngoài hay mắc họa, chạy không nổi.
- Không hợp đi xa.
- Bị dẫn dụ, dắt mũi bởi người khác.
- Bị kẻ khác thao túng cho mục đích riêng.
- Mang họa chỉ vì nghĩa khí quá đà, không biết giữ giới hạn.`,
  },

  {
    id: 'quan-doi-tai-tat-ach',
    title: 'Quan Đới tại Tật Ách',
    sao: ['Quan Đới'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `Khi Quan Đới đóng tại Tật Ách, đương số dễ gặp tai họa bất ngờ,
càng chống đỡ càng ràng buộc.

Hình tượng của sao ở cung này tựa như cái dây đai lưng hoặc cuộn dây
thừng. Khi bệnh tật và tai họa đến, càng cố chống đỡ, càng cố chạy thì
lại càng bị thắt lại, khó thoát. Đây chính là nét đặc trưng của những
tai họa bất ngờ, đột ngột và khó tránh.

Cảnh báo: tai bay vạ gió đến mà không kịp trở tay, càng chống đỡ càng
thêm ràng buộc.

Với sao hóa giải như Thiên Giải, Thiên Quan và Thiên Phúc, dù bệnh tật
đeo bám đương số vẫn có thể tìm được phương pháp điều trị phù hợp,
hoặc gặp được thầy giỏi đúng lúc.`,
  },

  {
    id: 'quan-doi-tai-tai-bach',
    title: 'Quan Đới tại Tài Bạch',
    sao: ['Quan Đới'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `Khi Quan Đới đóng tại Tài Bạch, đương số giỏi tạo dựng sự nghiệp
và kiếm tiền từ nhiều nguồn khác nhau.

Đặc trưng tài vận: ham mê kiếm tiền, làm nhiều việc một lúc, có nhiều
nguồn tiền và năng lực tài chính tốt. Đương số không ngại lăn xả để tạo
dòng tiền ổn định, công việc thường liên quan tới ngành tài chính.

Mặt tích cực rõ rệt khi gặp Thái Âm, Thiên Phủ, Vũ Khúc, Hóa Lộc hoặc
Lộc Tồn: "trời cho thời vận", kiếm tiền thuận lợi, cuộc sống dư dả.

Mặt tiêu cực phát tác khi sát bại tinh hội:

- Đương số là người tham lam, không biết đủ.
- Dễ vì tiền mà gây ra tai họa.
- Bước nhầm đường thì phải trả giá bằng danh dự, sức khỏe và pháp lý.`,
  },

  {
    id: 'quan-doi-tai-tu-tuc',
    title: 'Quan Đới tại Tử Tức',
    sao: ['Quan Đới'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Khi Quan Đới đóng tại Tử Tức, con cái của đương số sớm tự lập và
có chí tiến thủ.

Con cái chăm chỉ, giỏi giang, ham muốn chứng tỏ năng lực bản thân và
chịu khó phấn đấu. Chí tiến thủ cao giúp các con sớm rời vòng tay cha
mẹ, tự lập kiếm sống.

Khi sát tinh hội, niềm vui có con thành đạt biến thành mối lo kéo dài:

- Về già đương số vẫn phải lo lắng và buồn phiền vì con cái.
- Cảm giác như mắc quai ở cổ, không thoát ra được.
- Hiếm khi được an nhàn.
- Đau đáu lo âu và phiền muộn vì con suốt phần đời còn lại.`,
  },

  {
    id: 'quan-doi-tai-phu-the',
    title: 'Quan Đới tại Phu Thê',
    sao: ['Quan Đới'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `Khi Quan Đới đóng tại Phu Thê, hôn nhân đương số thuận lợi và
bền vững, người hôn phối thành đạt.

Người bạn đời có năng lực, giỏi giang và có danh tiếng. Bản thân Quan
Đới ôm trọn vòng Sinh - Vượng - Mộ nên cách cục cơ bản đã tốt.

Khi hợp với cát tinh như Khôi Việt, Thanh Long, Ân Quang và Thiên Quý,
cách cục được nâng đỡ thêm — hôn nhân thuận buồm xuôi gió, vợ chồng
cùng đồng lòng dựng xây tổ ấm và gánh vác sự nghiệp chung.`,
  },

  {
    id: 'quan-doi-tai-huynh-de',
    title: 'Quan Đới tại Huynh Đệ',
    sao: ['Quan Đới'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Khi Quan Đới đóng tại Huynh Đệ, anh chị em trong nhà có chí
hướng tự lập rõ rệt.

Trong gia đình dễ có người thành đạt, có tiếng tăm, tự nỗ lực và nhanh
chóng gặt hái thành tựu — gia đạo nhờ đó thơm lây. Mối quan hệ giữa
anh chị em gắn kết, cùng nhau hỗ trợ trên đường công danh.

Khi sát bại tinh hội, mặt sáng đó bị che mờ:

- Đương số hay phải lo toan cho việc nhà anh em.
- Nhiều vướng mắc trong quan hệ, mâu thuẫn không tên.
- Phiền muộn không dứt vì việc nhà anh em mà bản thân lại không thể
  đứng ngoài.`,
  },
];
