import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THIÊN QUAN - Hỏa, Phúc Tinh + Thiện Tinh.
 * Tên gọi đầy đủ: "THIÊN QUAN QUÝ NHÂN".
 *
 * An theo HÀNG CAN của tuổi (yếu tố THIÊN do trời sắp đặt).
 *
 * Đặc trưng riêng:
 * - Tính ÔN HÒA, Ở ẨN, không bon chen, ít kẻ thù
 * - Khác Thiên Phúc (xu hướng từ thiện đi giúp đỡ)
 *
 * CẶP QUAN PHÚC - Sự giúp đỡ TỪ ĐẤNG LINH THIÊNG do Thiên ban:
 * - Phần CHUNG đã viết tại file này với sao: ['Thiên Quan', 'Thiên Phúc']
 * - Phúc đức = nhân quả tổ tiên + tiền kiếp tích tụ ("quả đã chín")
 * - Phải tu tập, từ thiện thì mới gieo thêm hạt giống tốt
 */
export const luanGiai_ThienQuan: DoanLuanGiai[] = [
  {
    id: 'thien-quan-tinh-chat-chung',
    title: 'Thiên Quan - Đặc tính chung',
    sao: ['Thiên Quan'],
    doUuTien: 32,
    tomTat: `**Thiên Quan** — phụ tinh thuộc nhóm Phúc tinh và Thiện tinh, tên
gọi đầy đủ là "Thiên Quan Quý Nhân", ngũ hành Hỏa, an theo hàng Can của tuổi.

Về tính cách, Thiên Quan mang khí chất ôn hòa, hòa nhã, thiên về sự yên bình
và ở ẩn. Đương số có sao này thường không muốn bon chen cạnh tranh, vì vậy
cũng ít có kẻ thù hay người ghen ghét.

Vai trò chính của Thiên Quan là cứu khốn phò nguy, gia tăng phúc thọ; giải
trừ bệnh tật, tai họa, hung nguy. Sao này đi cùng ác sát tinh không có hại,
cư cung nào cũng chế khắc giải trừ tai nạn, hội với sao nào cũng tốt.

So với Thiên Phúc (thiên về từ thiện, đi giúp đỡ, mong đem hạnh phúc đến mọi
người), Thiên Quan thiên về an ẩn, hòa nhã — giữ mình hơn là chủ động ra
giúp người.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // PHẦN CHUNG CẶP QUAN PHÚC
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'quan-phuc-bo-doi-tinh-chat',
    title: 'Bộ Quan Phúc - Đặc tính chung',
    sao: ['Thiên Quan', 'Thiên Phúc'],
    doUuTien: 60,
    tomTat: `Bộ **Quan Phúc** gồm **Thiên Quan Quý Nhân** và **Thiên Phúc Quý
Nhân** — cặp quý nhân phúc thiện tinh quan trọng, đều an theo hàng Can của
tuổi.

Đặc tính chung của bộ này là phúc tinh kiêm thiện tinh, chủ về cứu khốn phò
nguy, gia tăng phúc thọ; giải trừ bệnh tật, tai họa, hung nguy. Đi với ác
sát tinh cũng không có hại, cư cung nào cũng chế khắc giải trừ tai nạn, hội
với sao nào cũng tốt cả.

Quan Phúc là yếu tố thiên do trời sắp đặt — phúc đức không tự dưng mà có, mà
là nhân quả từ tổ tiên cùng tiền kiếp tích tụ, đến kiếp này được thừa hưởng
như "quả đã chín". Con người khó nắm giữ kiểm soát phần này; nó chỉ đến do
tu tập, làm phúc qua nhiều kiếp.

Vị trí hợp nhất của bộ này là Mệnh, cung an Thân, Phúc Đức, Thiên Di và Tật
Ách — đắc cách nhất. Ý nghĩa giáo dục của Quan Phúc là hướng đương số tới tu
tập, từ thiện, làm phúc — tiếp tục con đường tôn bồi phước đức; nếu chỉ
dùng mà không gieo thêm "hạt giống tốt" thì mãi rồi cũng sẽ hết.`,
    chiTiet: `## Bản chất Quan Phúc khác hẳn các sao Giải khác

Trong tử vi có nhiều sao giải họa như Tứ Đức, Thiên Giải, Địa Giải, Giải
Thần, Quang Quý, song Quan Phúc đặc biệt ở chỗ nguồn gốc giúp đỡ.

- Tả Phù, Hữu Bật là sự giúp đỡ của người đời.
- **Ân Quang**, **Thiên Quý** là sự giúp đỡ của đấng linh thiêng trong hiện
  tại.
- Quan Phúc là sự giúp đỡ thiên ban từ tổ tiên và tiền kiếp.

## Sao "quả đã chín"

Quan Phúc đại diện cho phước đức đã tích tụ từ nhiều kiếp. Tổ tiên hành
thiện tích đức để lại cho con cháu; bản thân tiền kiếp đã tu tập nên kiếp
này được hưởng quả.

## Vì sao phải tiếp tục tu tập

Nếu chỉ dùng mà không tiếp tục gieo thêm hạt giống tốt thì phước báo cũng
có giới hạn — sẽ hết. Con cháu mất chỗ dựa âm đức, tự bản thân tiền kiếp sau
cũng nghèo phước.

Đây là điều khiến Quan Phúc vượt trội so với các sao giải khác: ngoài cứu
giải hiện tại, còn nhắc nhở hành thiện cho tương lai.

## Mức độ giải họa phụ thuộc vào tu tập

Mệnh có Quan Phúc nhưng không tu thì giải họa hạn chế. Mệnh có Quan Phúc lại
chịu khó tu tập, làm phúc từ sớm thì khả năng cứu giải càng mạnh, càng lớn.
Đây là sự khác biệt độc đáo của Quan Phúc — sao giải có "điều kiện".`,
  },

  {
    id: 'quan-phuc-phan-biet-quan-vs-phuc',
    title: 'Phân biệt Thiên Quan (ở ẩn) vs Thiên Phúc (đi giúp đỡ)',
    sao: ['Thiên Quan', 'Thiên Phúc'],
    doUuTien: 50,
    tomTat: `Tuy cùng là cặp Quan Phúc, hai sao này có vai trò khác nhau rõ rệt.

**Thiên Quan** thiên về an ẩn, hòa nhã. Tính cách ôn hòa, thích sự yên bình
và ở ẩn, không muốn bon chen cạnh tranh, ít có kẻ thù hay người ghen ghét.
Phúc khí của Thiên Quan thiên về giữ mình, an thân lập mệnh.

**Thiên Phúc** thiên về từ thiện, giúp đỡ. Xu hướng từ thiện cao, thích đi
giúp đỡ hỗ trợ người khác, mong đem lại hạnh phúc cho mọi người. Phúc khí
của Thiên Phúc thiên về hành động, lan tỏa thiện lương.

Khi cả hai đồng cung, đương số có cả hai mặt được kết hợp: vừa giữ mình vừa
giúp người.`,
  },

  {
    id: 'quan-phuc-cau-phu-tu-duc-giai-than',
    title: 'Câu phú: Thiên Nguyệt Đức Giải Thần tàng + Quan Phúc trừ hung',
    sao: ['Thiên Quan', 'Thiên Phúc'],
    doUuTien: 50,
    tomTat: `Sách vở có câu phú:

> "Thiên Nguyệt Đức, Giải Thần tàng
> Cùng là Quan Phúc một làng trừ hung"

Câu này liệt kê các sao giải họa trừ hung mạnh nhất: Thiên Đức cùng Nguyệt
Đức (bộ Tứ Đức), Giải Thần (luôn đồng cung Phượng Các), và Thiên Quan cùng
Thiên Phúc.

Quan Phúc đứng ngang hàng với Tứ Đức và Giải Thần về khả năng giải họa — đây
là sự khẳng định địa vị của bộ này trong nhóm sao giải.`,
  },

  {
    id: 'quan-phuc-cau-phu-quy-nhan-bat-nhap',
    title: 'Câu phú: Quý nhân bất nhập Quý hương nan giải hung tinh',
    sao: ['Thiên Quan', 'Thiên Phúc'],
    doUuTien: 55,
    tomTat: `Câu phú quan trọng trong tử vi:

> "Quí nhân bất nhập Quí hương
> Nan giải hung tinh chi hoạch nhiễu"

Dịch nghĩa: Mệnh, Thân của đương số có hung tinh quấy nhiễu — nếu không có
quý nhân hội hợp thì khó thoát được tai ương họa hại.

Quý nhân ở đây gồm bốn sao: Thiên Quan cùng Thiên Phúc (Quan Phúc Quý Nhân),
và Thiên Khôi cùng Thiên Việt (Thiên Ất Quý Nhân).

Trong thực tế, khi đương số có Mệnh xấu hoặc Hạn xấu, cần quý nhân hội tụ
mới giải được. Đây là tiêu chuẩn vàng để xét lá số có thoát hung không —
thiếu quý nhân thì tai ương khó tránh dù có sao giải khác.`,
  },

  {
    id: 'quan-phuc-vi-tri-hop-cach',
    title: 'Quan Phúc tại 5 vị trí HỢP CÁCH NHẤT (Mệnh-Thân-Phúc-Di-Tật)',
    sao: ['Thiên Quan', 'Thiên Phúc'],
    cung: ['Mệnh', 'Phúc Đức', 'Thiên Di', 'Tật Ách'],
    doUuTien: 75,
    tomTat: `Bộ Quan Phúc tọa thủ tại Mệnh, cung an Thân, Phúc Đức, Thiên Di
hoặc Tật Ách là năm vị trí hợp cách nhất.

Mỗi cung phát huy một mặt riêng: tại Mệnh thì cứu giải hung họa cho bản
thân; tại cung an Thân thì bảo vệ phần thực hành cuộc đời, chủ hậu vận; tại
Phúc Đức thì tăng phúc trạch dòng họ và mộ phần; tại Thiên Di thì khi ra
ngoài có quý nhân, gặp môi trường thiện lành; tại Tật Ách thì bệnh tật tai
họa được hóa giải.

Tại các cung khác, Quan Phúc vẫn tốt nhưng không đắc cách bằng năm cung trên.

Cần lưu ý: nếu Mệnh xấu hay Vận xấu thì Quan Phúc tại Tật Ách vẫn có thể
khiến đương số chết yểu — vì Mệnh quan trọng hơn Tật. Càng tu tập, làm phúc
từ sớm thì khả năng cứu giải càng mạnh.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP NỔI TIẾNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'quan-phuc-tu-duc-luc-than-tu',
    title: 'Quan Phúc + Tứ Đức - Lòng nhân hậu nhân lên gấp bội',
    sao: ['Thiên Quan', 'Thiên Phúc'],
    ketHop: ['Long Đức', 'Phúc Đức', 'Thiên Đức', 'Nguyệt Đức'],
    doUuTien: 55,
    tomTat: `Khi Quan Phúc gặp đủ Tứ Đức (Thiên Đức, Nguyệt Đức, Long Đức,
Phúc Đức), lòng nhân hậu của đương số nhân lên gấp nhiều lần.

Đương số luôn sống vì người khác, ưu tiên việc chung hơn việc riêng, sẵn
sàng hy sinh lợi ích cá nhân để giúp đỡ những người xung quanh — đức độ tột
đỉnh.

Đây là cách an lành nhất trong tử vi cho mệnh phúc thiện, hội tụ tất cả sao
giải mạnh nhất.`,
  },

  {
    id: 'quan-phuc-y-tuong-ta-huu-thay-thuoc',
    title: 'Quan Phúc + Thiên Y + Tướng + Tả Hữu - Thầy thuốc mát tay',
    sao: ['Thiên Quan', 'Thiên Phúc'],
    ketHop: ['Thiên Y', 'Thiên Tướng'],
    doUuTien: 60,
    tomTat: `Khi Quan Phúc gặp Thiên Y, Thiên Tướng, Tả Phù và Hữu Bật, đương
số có cách thầy thuốc, lương y chữa bệnh giỏi mát tay.

Mỗi sao đảm nhận một vai: Quan Phúc cho tâm phúc thiện cứu người, Thiên Y
mang chuyên môn y học, Thiên Tướng tượng trưng cho vị trí ấn (uy tín nghề),
Tả Phù cùng Hữu Bật khiến đương số được người đời tin cậy.

Bộ này còn có biến thể Thiên Tướng cùng Thiên Riêu, Thiên Y và Quan Phúc —
bác sỹ rất mát tay; **Thiên Riêu** thêm sự tinh tế, nhạy bén trong chẩn bệnh.

Hợp nghề thầy thuốc, bác sỹ, lương y, châm cứu, đông y.`,
  },

  {
    id: 'quan-phuc-co-nguyet-dong-luong-luong-y',
    title: 'Quan Phúc + Cơ Nguyệt Đồng Lương - Lương y công tác xã hội',
    sao: ['Thiên Quan', 'Thiên Phúc'],
    ketHop: ['Thiên Cơ', 'Thái Âm'],
    doUuTien: 60,
    tomTat: `Khi Quan Phúc gặp bộ Cơ Nguyệt Đồng Lương (Thiên Cơ, Thái Âm,
Thiên Đồng, Thiên Lương) — bộ chính tinh thiện đẹp — đương số là lương y,
người hảo tâm, phúc thiện, công tác xã hội.

Quan Phúc cộng vào tăng tính phúc thiện cứu người. Hướng nghiệp phù hợp gồm:

- Lương y chữa bệnh
- Hảo tâm quyên tặng từ thiện
- Công tác xã hội, hội chữ thập đỏ
- Các nghề có tính nhân đạo cao`,
  },

  {
    id: 'quan-phuc-tu-tham-khong-kiep-mao-dau-tu',
    title: 'Quan Phúc + Tử Tham + Không Kiếp Mão/Dậu - Đi tu cứu độ',
    sao: ['Thiên Quan', 'Thiên Phúc'],
    chi: ['Mão', 'Dậu'],
    ketHop: ['Tử Vi', 'Tham Lang'],
    doUuTien: 60,
    tomTat: `Khi Quan Phúc gặp Tử Vi cùng Tham Lang và Địa Không, Địa Kiếp đồng
cung Mão hoặc Dậu — cách "đào hoa phạm chủ" thường là cách dâm dật, song
Không Kiếp đồng cung phá Đào Hoa, biến cách thành tu hành giác ngộ. Quan
Phúc làm tăng thiện tâm và khả năng giác ngộ.

Đương số là người tu hành, học đạo, có khả năng giác ngộ cao. Dùng con đường
tu hành để cứu độ, giúp đỡ nhiều người. Sự hiện diện của đương số mang lại
yên bình cho những người bên cạnh.

Đây là cách hóa giải đẹp nhất của Tử Tham Mão/Dậu.`,
  },

  {
    id: 'quan-phuc-ta-huu-hanh-dong',
    title: 'Quan Phúc + Tả Hữu - Lòng thiện thành hành động',
    sao: ['Thiên Quan', 'Thiên Phúc'],
    ketHop: ['Tả Phù', 'Hữu Bật'],
    doUuTien: 50,
    tomTat: `Khi Quan Phúc gặp Tả Phù, Hữu Bật, lòng thiện của đương số biến
thành hành động cụ thể.

Đương số tích cực tham gia hoạt động xã hội, từ thiện; có khả năng quy tụ,
kêu gọi mọi người cùng làm việc tốt. Lòng thiện không chỉ là cảm xúc mà
thành hành động cụ thể.

Tả Hữu vốn là trợ tinh — biến tính chất bên trong (Quan Phúc phúc thiện)
thành thực hành bên ngoài.`,
  },

  {
    id: 'quan-phuc-xuong-khuc-cam-hoa',
    title: 'Quan Phúc + Văn Xương + Văn Khúc - Cảm hóa người',
    sao: ['Thiên Quan', 'Thiên Phúc'],
    ketHop: ['Văn Xương', 'Văn Khúc'],
    doUuTien: 50,
    tomTat: `Khi Quan Phúc gặp **Văn Xương** cùng **Văn Khúc**, đương số có
kiến thức uyên thâm và lời nói đầy sức thuyết phục.

Đương số biết dùng sự thông minh, hiểu biết để khuyên răn, cảm hóa người
khác hướng đến những điều thiện lành.

Hợp nghề: diễn giả, giáo viên, tu sỹ giảng pháp, tác giả sách self-help hay
sách đạo, người truyền cảm hứng thiện lương.`,
  },

  {
    id: 'quan-phuc-quang-quy-duong-anh-em-nuoi',
    title: 'Quan Phúc + Quang Quý + Dưỡng - Anh chị em nuôi (Huynh Đệ)',
    sao: ['Thiên Quan', 'Thiên Phúc'],
    cung: ['Huynh Đệ'],
    ketHop: ['Ân Quang', 'Thiên Quý'],
    doUuTien: 55,
    tomTat: `Khi Quan Phúc đi cùng **Ân Quang**, **Thiên Quý** và sao Dưỡng
(thuộc Vòng Tràng Sinh) tại Huynh Đệ, đương số dễ có anh chị em nuôi, kết
nghĩa.

Phân tích bộ sao: Quan Phúc cho thiện duyên tâm linh, Quang Quý là phúc tinh
quý nhân, Dưỡng đem lại tính chất nuôi dưỡng. Tình thân khăng khít chẳng
khác gì máu mủ; anh chị em ruột cùng anh chị em nuôi cùng tu tập, làm thiện;
đại gia đình lan tỏa năng lượng tốt lành.`,
  },

  {
    id: 'quan-phuc-hinh-hao-ky-dong-hac',
    title: 'Quan Phúc + Hình Hao Kỵ + Đồng hãm - Đồng bóng',
    sao: ['Thiên Quan', 'Thiên Phúc'],
    ketHop: ['Thiên Hình', 'Hóa Kỵ'],
    doUuTien: 45,
    tomTat: `Khi Quan Phúc gặp Thiên Hình, Đại Hao, **Hóa Kỵ** cùng Thiên Đồng
hãm địa, đương số hay thay đổi tính tình, ưa thích đồng bóng không chán.

Quan Phúc thiện duyên gặp sát tinh phá thì biến tâm linh thành đồng bóng;
đặc biệt khi hội thêm Thiên Đồng hãm, đương số dễ mê tín, thay đổi vô
thường.

Cảnh báo: dễ bị lừa bởi đồng cô, đồng cậu giả; tâm trí bất ổn, dễ tin vào
tà phái — cần học hỏi đúng phái chính thống.`,
  },

  {
    id: 'quan-phuc-vao-han',
    title: 'Quan Phúc vào hạn - Hạn cần giải',
    sao: ['Thiên Quan', 'Thiên Phúc'],
    doUuTien: 50,
    tomTat: `Quan Phúc vào hạn có hai mặt cần lưu ý.

Mặt tích cực: hạn này thích hợp đi vào tu tập, làm việc thiện nguyện và từ
thiện; tâm trí đương số hướng về đạo nghĩa.

Mặt cảnh báo: hạn dễ có vướng mắc, tai họa nên Quan Phúc mới đi cùng để hóa
giải. Quan Phúc thường xuất hiện ở những hạn cần cứu giải.

Cách dụng: cần tu tập, chăm làm phúc trong giai đoạn này; khả năng hóa giải
sẽ mạnh hơn khi tâm hướng thiện. Nếu không tu thì Quan Phúc chỉ giải được
phần nào.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // THIÊN QUAN TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-quan-tai-menh',
    title: 'Thiên Quan tại Mệnh - HỢP CÁCH',
    sao: ['Thiên Quan'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `Thiên Quan thủ Mệnh là vị trí **hợp cách**: đương số mang trong
mình lá bùa bảo vệ giảm trừ tai họa, hóa giải bệnh tật.

Về tướng hình, đương số có diện mạo dễ nhìn, hiền hậu, ôn hòa; đôi mắt sáng
hiền hòa, đôi tai dày dái tai dài phúc hậu; cử chỉ từ tốn, điềm đạm, nhẹ
nhàng — không vội vàng hấp tấp.

Về tính cách, đương số thiện tâm, nhân hậu, hiền lành, đức độ; hay làm việc
thiện cứu giúp người; tín ngưỡng cao, tin tưởng nơi Phật Trời, có căn duyên
tu tập và có thể đắc quả. Tính cách ôn hòa, ở ẩn, không bon chen — vì vậy
ít kẻ thù.

Về phúc thọ, Thiên Quan tại Mệnh giúp cứu giải tai họa, giảm hung nguy và
giảm bệnh tật. Đương số càng tu nhân tích đức thì phước thọ càng tăng — tác
dụng ngang Tứ Đức, Giải Thần trong việc giải họa.`,
  },

  {
    id: 'thien-quan-tai-phu-mau',
    title: 'Thiên Quan tại Phụ Mẫu',
    sao: ['Thiên Quan'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Thiên Quan tại Phụ Mẫu cho cha mẹ của đương số là người lễ nghĩa,
hiền hậu, hay từ thiện và được mọi người quý mến, kính trọng. Đó cũng là
người ngộ đạo, thích tìm hiểu Phật pháp, tâm linh, tin nhân quả.

Khi có Tả Phù, Hữu Bật hội cát, cha mẹ càng hiền từ, chuẩn mực, sống có
nghĩa có tình; tin nhân quả, có duyên tìm hiểu đạo pháp; tích âm đức để lại
phúc phần cho con cháu.

Đương số nhờ vậy được hưởng phúc lộc cha mẹ để lại bằng âm đức hoặc dương
đức, sinh ra trong sự giáo dục đúng đắn, hướng thiện.`,
  },

  {
    id: 'thien-quan-tai-phuc-duc',
    title: 'Thiên Quan tại Phúc Đức - HỢP CÁCH',
    sao: ['Thiên Quan'],
    cung: ['Phúc Đức'],
    doUuTien: 80,
    tomTat: `Thiên Quan thủ Phúc Đức là vị trí **hợp cách**. Ông bà tổ tiên của
đương số đa số là người lương thiện, có căn tu hành, để lại phúc nền bền
vững cho con cháu. Phần mộ thường được an táng ở nơi đẹp, yên ổn, đôi khi
gắn với chùa chiền hoặc gửi cốt tại nơi cửa Phật.

Bản mệnh nhờ vậy được hưởng phúc đức, may mắn của tổ tiên ông bà để lại; có
nhiều việc phải tiếp tục tôn bồi và có căn duyên tu tập tại kiếp này.

Khi cát tinh hội (Văn Xương, Văn Khúc, Tam Thai, Bát Tọa, Hóa Lộc, Hóa
Quyền), càng khẳng định dòng họ có người đỗ đạt, danh thơm lưu truyền, phúc
ấm lan tỏa đến đời sau.`,
  },

  {
    id: 'thien-quan-tai-dien-trach',
    title: 'Thiên Quan tại Điền Trạch',
    sao: ['Thiên Quan'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Thiên Quan tại Điền Trạch cho thấy trong nhà có người thích tu
tập, rước Phật về thờ.

Đặc trưng: nhà cửa sạch sẽ, gọn gàng, ngăn nắp, qui củ; sống ôn hòa, hay
giúp đỡ hàng xóm láng giềng nên được nhiều người quý mến. Cuộc sống hôn nhân
gia đình hạnh phúc, bền lâu; mọi thành viên hòa thuận, lễ nghĩa, có phép
tắc.

Khi cát tinh hội (Thiên Phúc, Long Trì, Phượng Các), nhà cửa khang trang,
ngăn nắp; có bàn thờ Phật hoặc rước tượng Phật về thờ phụng; gia đạo êm ấm
thuận hòa.

Về tâm tính, đương số có tấm lòng rộng rãi, sẵn sàng hiến đất đai cho việc
nghĩa, đứng ra lập hội từ thiện; coi việc tích phúc như bổn phận tự nhiên.`,
  },

  {
    id: 'thien-quan-tai-quan-loc',
    title: 'Thiên Quan tại Quan Lộc',
    sao: ['Thiên Quan'],
    cung: ['Quan Lộc'],
    doUuTien: 75,
    tomTat: `Thiên Quan tại Quan Lộc khiến trong công việc đương số hay giúp
đỡ người khác và cũng được mọi người giúp đỡ lại.

Hướng nghiệp phù hợp là công việc có tính nhân đạo cao như hội chữ thập đỏ,
thiện nguyện, tổ chức cứu trợ, thầy giáo, bác sỹ; hoặc chí ít là người lương
thiện, không cạnh tranh hay chơi xấu ai.

Khi cát tinh hội (Thiên Cơ, Thiên Lương, Tử Vi, Thiên Đồng), đương số dễ
liên quan đến tu hành, làm trong bang hộ trì Tam Bảo, hoặc đi tu, làm việc
trong cơ quan từ thiện, nhân sinh.

Về vận may trong công danh, sự nghiệp, học tập, đương số hay được may mắn,
có người giúp đỡ — mức độ tùy thuộc vào phúc phần sẵn có và những "nhân tốt"
mà bản thân đã gieo.`,
  },

  {
    id: 'thien-quan-tai-no-boc',
    title: 'Thiên Quan tại Nô Bộc',
    sao: ['Thiên Quan'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Thiên Quan tại Nô Bộc cho đương số có duyên chơi với bạn bè tốt
hoặc các bạn đồng tu.

Đương số có cơ hội học hỏi các bậc chân tu đắc đạo. Bạn bè, đồng nghiệp, cấp
dưới đều là người giản dị, tốt bụng, tin cậy, có thể giúp đỡ hỗ trợ nhiều
được cho đương số.

Về hoạt động xã hội, đương số hay tham gia cứu tế, hỗ trợ chữ thập đỏ, cùng
bạn bè làm các hoạt động cộng đồng. Bạn bè vừa là tri kỷ, vừa là kim chỉ nam
trong hành trình sống tâm linh.`,
  },

  {
    id: 'thien-quan-tai-thien-di',
    title: 'Thiên Quan tại Thiên Di - HỢP CÁCH',
    sao: ['Thiên Quan'],
    cung: ['Thiên Di'],
    doUuTien: 78,
    tomTat: `Thiên Quan thủ Thiên Di là vị trí **hợp cách**: ra ngoài đương số
hay làm phúc, giúp đỡ người khác.

Tính cách ra ngoài điềm đạm, nhẹ nhàng, khoan dung — không gây hận thù với
ai bao giờ. Trên đường đời hay gặp quý nhân giúp đỡ, dễ gặp cơ may đến những
nơi an lành, thường gặp thuận lợi tốt đẹp, dễ gặp thiên thời địa lợi nhân
hòa.

Về môi trường sống, đương số hay ở trong môi trường người thiện lành, thích
tu tập; tâm trí lúc nào cũng nhẹ nhàng, an yên, ít gặp sự cạnh tranh kèn cựa.

Khi gặp khó khăn, chỉ cần giữ tâm sáng và hành thiện thì tai ương được hóa
giải; may mắn đến vào lúc then chốt — "gặp thầy gặp thuốc".`,
  },

  {
    id: 'thien-quan-tai-tat-ach',
    title: 'Thiên Quan tại Tật Ách - HỢP CÁCH',
    sao: ['Thiên Quan'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `Thiên Quan thủ Tật Ách mang ý nghĩa cứu giải mạnh mẽ.

Khi đương số hoạn nạn hoặc gặp cảnh hiểm nguy, thường được thần linh phù hộ
hoặc quý nhân trợ giúp; người có thói quen tích đức hành thiện càng dễ vượt
qua. Bệnh tật, tai ương biến hung thành cát.

Hình tượng đặc biệt của Quan Phúc thường thấy trong tang sự ngày chết: thầy
chùa đưa linh, dâu thảo rể hiền đưa tiễn, chùa chiền và sư tăng hộ niệm.
Quan Phúc có hình tượng là người tu hành, nhà sư, tu sỹ — tạo nên sự thanh
thản cho hành trình cuối đời.

Cảnh báo: Tật Ách không phải vị trí mạnh nhất — nếu bản cung hoặc vận hạn
xấu thì vẫn có thể chết yểu. Càng tu tập, làm phúc từ sớm thì khả năng cứu
giải càng mạnh.`,
  },

  {
    id: 'thien-quan-tai-tai-bach',
    title: 'Thiên Quan tại Tài Bạch',
    sao: ['Thiên Quan'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `Thiên Quan tại Tài Bạch cho đương số có tâm hướng thiện trong
việc sử dụng của cải.

Đương số hay dùng tiền bố thí, cúng dường; sử dụng tiền bạc vào mục đích
lương thiện, xã hội; có thể cho tiền của, đôi khi cả gia tài sự nghiệp để
làm từ thiện. Đương số coi tiền bạc như phương tiện gieo phúc — chẳng nề hà
khi cho đi.

Có cách "thí vô úy" — từ thiện từ tâm — nghĩa là dám bố thí mảnh đất công
viên, thư viện... Cách này cần Quan Phúc trong Mệnh - Thân và Tài - Điền
(xung hoặc giáp hợp), không cần danh hão, không cần công trạng.

Cách kiếm tiền của đương số lương thiện, không gian dối; không ưa cạnh tranh
kèn cựa — "ở hiền gặp lành" nên đôi khi may mắn về tiền bạc, được người giúp
đỡ. Đặc biệt khi Thiên Quan, Thiên Phúc và Giải Thần đồng cung thì giải ách,
mở lối quý nhân.`,
  },

  {
    id: 'thien-quan-tai-tu-tuc',
    title: 'Thiên Quan tại Tử Tức',
    sao: ['Thiên Quan'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Thiên Quan tại Tử Tức cho con cái của đương số hiền lành, hiếu
thuận, sau lớn thành người tử tế.

Về già, đương số được con cái hiếu thuận chăm lo phụng dưỡng. Con cái có
đứa thích tu tập, tu hành; hay thích làm thiện nguyện, cứu trợ hoàn cảnh
khó khăn.

Khi sát bại tinh hội, đương số khó có con, phải đi cầu tự mới có; nếu hội
thêm đất Dưỡng thì dễ có con nuôi — như sự bù đắp của trời cho duyên làm
cha mẹ.`,
  },

  {
    id: 'thien-quan-tai-phu-the',
    title: 'Thiên Quan tại Phu Thê - Hóa giải mọi xung khắc',
    sao: ['Thiên Quan'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `Thiên Quan tại Phu Thê cho bạn đời của đương số hiền lành, tốt
tính, có lòng từ thiện — chí ít là người chồng hoặc vợ đã có duyên lành từ
tiền kiếp.

Vợ chồng hòa hợp, biết nhường nhịn, sống với nhau có tình nghĩa, bền lâu.
Người hôn phối là người tín tâm, thích tu tập, tìm hiểu tâm linh, tin nhân
quả.

Khả năng hóa giải đặc biệt: dù cung Phu Thê có Đào Hoa, Địa Không, Địa Kiếp,
Thiên Hình, đương số vẫn thường an lành không đổ vỡ và không đau khổ. Dù
gặp khó khăn cũng có quý nhân giúp đỡ hay giải bày — đây là một trong những
khả năng hóa giải mạnh nhất của Quan Phúc.`,
  },

  {
    id: 'thien-quan-tai-huynh-de',
    title: 'Thiên Quan tại Huynh Đệ',
    sao: ['Thiên Quan'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Thiên Quan tại Huynh Đệ cho anh chị em của đương số hòa thuận,
tình nghĩa, luôn giúp đỡ nhau tận tình vô điều kiện. Trong số đó có người
thích tu tập, tìm hiểu Phật pháp — lan tỏa năng lượng tốt lành đến cả gia
đình.

Khi Tả Phù, Hữu Bật cát hội, anh chị em càng gắn bó, đỡ nâng nhau, keo sơn;
trong số đó có người sớm bén duyên tu tập.

Khi đồng cung **Ân Quang**, **Thiên Quý** hoặc đất Dưỡng, đương số dễ có
anh chị em nuôi — tình thân khăng khít chẳng khác gì máu mủ.`,
  },
];
