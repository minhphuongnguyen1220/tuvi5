import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO CỰ MÔN
 */
export const luanGiai_CuMon: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung của sao Cự Môn (hiện ở mọi cung có Cự Môn)
  // ============================================================
  {
    id: 'cu-mon-tinh-chat-chung',
    title: 'Cự Môn - Đặc tính chung',
    sao: ['Cự Môn'],
    doUuTien: 30,
    tomTat: `Cự Môn thuộc chòm Bắc Đẩu Tinh, ngũ hành Thủy, tính Âm. Hóa khí là
sao Thị Phi, mang tính "chảy ngầm" — thường đem nhiều phiền toái và thị phi
đến cho đương số có sao này tọa thủ ở các cung trọng yếu.

Vị trí miếu hãm:

- Miếu địa
  - Mão, Dậu (đồng cung Thiên Cơ) — tốt nhất
- Vượng địa
  - Các cung còn lại
- Đắc địa
  - Tý, Ngọ, Hợi
- Hãm địa
  - Thìn, Tuất, Sửu, Mùi — xấu nhất`,

    chiTiet: `So sánh Cự Môn với các sao có nét tương đồng:

- Cự Môn so với Tham Lang và Thiên Cơ — cả ba đều hướng ngoại nhưng:
  - Tham Lang: đa tài đa nghệ, giao tiếp thiên về lãng mạn (tửu, sắc, tài, khí)
  - Thiên Cơ: giao tiếp thiên về liên lạc, vì người mà bôn tẩu vất vả
  - Cự Môn: dùng miệng là chính, thiên về diễn giảng biện thuyết đúng sai

- Cự Môn so với Văn Khúc — cùng thiên về tài biện luận nhưng:
  - Văn Khúc: kỹ xảo biện luận, chú trọng tu từ, mang hàm nghĩa "tài" và "đào hoa"
  - Cự Môn: chú trọng thực tế, gồm phân tích và liên tưởng, tài khí tương đối ít

Khí hóa của Cự Môn là Ám — trong bóng tối vẫn thấy được ánh sáng bên ngoài.
Đương số có Cự Môn nhờ vậy mà quan sát sự vật thấu đáo hơn người thường.`,
  },

  // ============================================================
  // 2. Cự Môn tại Mệnh - dung mạo & tính cách
  // ============================================================
  {
    id: 'cu-mon-tai-menh-dung-mao-tinh-cach',
    title: 'Cự Môn tại Mệnh - Dung mạo & tính cách',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Đương số có Cự Môn tọa thủ Mệnh thường mang dáng vẻ:

- Ánh mắt nhìn đoan chính, vẻ mặt nghiêm túc
- Giọng nói cao thanh, hành động nhanh nhẹn

Về tính cách:

- Ngay thẳng bộc trực, đa nghi, học nhiều nhưng ít tinh thông
- Giàu khả năng nghiên cứu, hiểu biết rộng, biện luận sắc sảo
- Lấy công việc làm mục đích hàng đầu, ít thiên về thú vui

Dung mạo cụ thể tùy trạng thái —`,

    chiTiet: `Đương số có Cự Môn tại Mệnh thường có khuôn mặt thánh thiện khả
ái, cũng có thể là vẻ mặt hiền lành ít nói. Lục thân thiếu hòa hợp; chủ mệnh
chủ quan và tự tin, thường tỏ thái độ bất mãn với hiện tại nên thích gây
chuyện thị phi — lúc thiện lúc ác thường không biểu hiện ra ngoài.

Trong công việc và học hành:

- Học nhiều nhưng ít tinh thông
- Phong cách làm việc thường tỏ ra khó khăn vất vả, khó có sự thanh nhàn

Trong quan hệ và tâm lý:

- Tính tình đa nghi, kết bạn ban đầu thì tốt nhưng cuối cùng lại ác
- Tư duy lãnh đạm, trong lòng nhỏ nhen, hiếm khi rộng lượng
- Làm việc lớn thường quá chú trọng tới hình thức mà bỏ qua khả năng phân
  tích, quan sát, phán đoán, ghi nhớ và liên tưởng

Tuy vậy, đương số giàu khả năng nghiên cứu nên thường có tầm hiểu biết rộng,
có sáng kiến. Dù không thiên về giao tiếp, khả năng biểu đạt rất tốt và biện
luận sắc sảo. Có xu hướng sống cuộc đời thanh bạch, lấy công việc làm mục
đích hàng đầu.`,
  },

  {
    id: 'cu-mon-tai-menh-mieu',
    title: 'Cự Môn Miếu tại Mệnh - Dung mạo',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    trangThai: ['Miếu'],
    doUuTien: 78,
    tomTat: `Khi Cự Môn Miếu địa tại Mệnh, đương số có cơ thể cao đậm, vẻ
ngoài phúc hậu lương thiện.`,
  },

  {
    id: 'cu-mon-tai-menh-ham-dung-mao',
    title: 'Cự Môn Hãm tại Mệnh - Dung mạo',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi Cự Môn Hãm địa tại Mệnh, đương số có thân thể cao gầy.`,
  },

  // ============================================================
  // 3. Cự Môn tại Mệnh - 12 biểu hiện đặc trưng
  // ============================================================
  {
    id: 'cu-mon-tai-menh-12-bieu-hien',
    title: 'Cự Môn tại Mệnh - 12 biểu hiện',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    doUuTien: 70,
    tomTat: `Cự Môn cư Mệnh thường để lại 12 biểu hiện đặc trưng trên cuộc đời
đương số — từ khả năng tháo gỡ khó khăn, khoan dung độ lượng, tài ăn nói cho
tới mặt trái là dễ rơi vào ảo tưởng và bị hiểu lầm. Bấm "Đọc chi tiết" để xem
đầy đủ.`,

    chiTiet: `Dưới đây là 12 biểu hiện thường thấy ở đương số có Cự Môn cư
Mệnh:

1. Dù rơi vào hoàn cảnh khó khăn nào, đương số phần lớn đều tháo gỡ được trở
   ngại bước đầu và biết đặt hy vọng vào tương lai.

2. Khoan dung độ lượng, càng biết khoan dung càng thấu hiểu đạo lý.

3. Có khả năng hòa nhập cuộc sống muôn màu, thể hiện rõ qua ngôn ngữ và hành
   động, nhờ đó dễ được mọi người chấp nhận và hoan nghênh.

4. Hiểu rõ sự việc và truyền đạt thông tin một cách thuyết phục, có thể đứng
   ra hóa giải khúc mắc.

5. Đứng giữa lằn ranh thị phi và chính trực, song vẫn giữ được bản tính lương
   thiện và đạo trung dung.

6. Trong lòng thường giữ chuyện thầm kín không bày tỏ được với ai, hoặc nói ra
   thì dấu đầu hở đuôi.

7. Hay rơi vào ảo tưởng mà tự chuốc lấy phiền muộn, thậm chí có lúc tự hủy
   hoại chính mình.

8. Khi nhàn rỗi, đương số càng nói càng sai — khổ tại miệng, dễ bị người khác
   hiểu lầm và oán trách.

9. Trước khi được xã hội công nhận, đương số phải trải qua nhiều vất vả; chỉ
   cần giữ vững ý chí, cuối cùng vẫn thành công.

10. Mạnh bạo hơn người, hay làm những chuyện mọi người không ngờ tới, hoặc
    những việc không được tán thành, khiến dư luận bàn tán.

11. Cơ hội sử dụng ngôn ngữ hơn người, và đương số cũng thường vận dụng tài ăn
    nói của mình để đạt được lợi ích.

12. Cuộc đời có nhiều dịp phải đấu tranh.`,
  },

  // ============================================================
  // 4. Cự Môn tại Mệnh - phụ nữ
  // ============================================================
  {
    id: 'cu-mon-tai-menh-phu-nu',
    title: 'Cự Môn tại Mệnh - Phụ nữ',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    gioiTinh: 'Nữ',
    doUuTien: 75,
    tomTat: `Nữ mệnh có Cự Môn tọa thủ thường mang lòng tự tôn rất cao, bụng
thẳng dạ ngay, sức sống mạnh mẽ và tính đa nghi. Khi can thiệp vào công việc
của chồng, đương số thiếu thận trọng trong lời ăn tiếng nói nên dễ làm tổn
thương bầu không khí gia đình. Tuy vậy, đương số rất chăm chỉ, đảm nhiệm tốt
cả việc nhà lẫn việc xã hội.

Cự Môn vốn không nên xuất hiện ở Mệnh phụ nữ — câu "ngôn đa tất thất" ứng
nghiệm rõ nét nhất cho nữ mệnh có sao này.`,

    chiTiet: `Nữ mệnh có Cự Môn tọa thủ thường mang lòng tự tôn rất cao, bụng
thẳng dạ ngay, sức sống mạnh mẽ và tính đa nghi. Đương số hay tự so bì với
người khác để rồi tự chuốc lấy phiền muộn trong lòng.

Khi can thiệp vào chuyện gia đình hay công việc của chồng, đương số thường
thiếu thận trọng trong ngôn ngữ; những lời nói phản cảm dễ làm tổn thương bầu
không khí hạnh phúc, ấm cúng vốn có.

Bù lại, đương số làm việc chăm chỉ cần mẫn, xử lý mọi việc trong gia đình chu
đáo, đảm đương được cả công việc lẫn nội trợ.`,
  },

  // ============================================================
  // 5. Cự Môn tại Mệnh - nghề nghiệp & "miệng"
  // ============================================================
  {
    id: 'cu-mon-tai-menh-nghe-nghiep',
    title: 'Cự Môn tại Mệnh - Nghề nghiệp',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    doUuTien: 70,
    tomTat: `Cự Môn tượng trưng cho "miệng", nên đương số phù hợp với những
nghề dùng miệng làm chính: giáo sư, quan tòa, luật sư, nhà ngoại giao, người
dẫn chương trình, nhân viên kinh doanh, ca sỹ, diễn viên, nghề dịch vụ, người
làm PR.

Đương số nên học và tinh thông ngoại ngữ. Cuối đời thường nhận được sự chăm
sóc của con cháu.`,

    chiTiet: `Cự Môn không thể tách rời khỏi "miệng" — đương số có khẩu phúc,
giỏi quan hệ công chúng, phần nhiều gây dựng sự nghiệp bằng lời nói.

Về định hướng nghề nghiệp, đương số nên theo những nghề dùng miệng, đồng thời
học và tinh thông nhiều ngoại ngữ. Khi đi theo phương thức chính phái, bản
tính "thị phi" dễ bị phê bình sẽ chuyển hóa sang xu hướng giám sát đúng sai,
đánh giá sự hoàn thiện — phát huy đúng khả năng phân tích thực tiễn của Cự
Môn.

Nói thêm về **thị phi**: không phải Cự Môn có ý gây chuyện. Đương số có khả
năng phân tích rất tốt, mạch lạc rõ ràng, nên dễ động chạm và sa vào thị phi.
Cố gắng không gây chuyện, song cũng khó tránh khỏi hoàn toàn.

Về cuối đời, đương số có Cự Môn thủ Mệnh phần lớn đều nhận được sự chăm sóc
của con cháu.`,
  },

  // ============================================================
  // 6. Cự Môn kết hợp các sao khác (Tứ Hóa, sát tinh)
  // ============================================================
  {
    id: 'cu-mon-ket-hop-tu-hoa-sat-tinh',
    title: 'Cự Môn + Tứ Hóa & sát tinh',
    sao: ['Cự Môn'],
    doUuTien: 50,
    tomTat: `Khi Cự Môn gặp Tam Cát Hóa (Lộc, Quyền, Khoa), đương số bổng lộc
dồi dào, tài diễn thuyết được trọng dụng — đẹp nhất là Hóa Quyền tại miếu
vượng, làm quan lớn và đảm đương trọng trách ngoại giao.

Cự Môn kỵ:

- Hóa Kỵ: ngôn từ sắc bén, nói khó nghe, dễ đắc tội với người
- Kình Dương + Đà La: chuyện tình cảm sóng gió, thị phi
- Hỏa Tinh + Linh Tinh: tăng phần khó khăn
- Địa Không + Địa Kiếp đồng cung Mệnh: một đời vất vả, có khi thời thơ ấu đã
  bị bỏ rơi`,

    chiTiet: `## Cự Môn gặp Lộc Tồn

Cự Môn là sao đơn độc, duy có Lộc Tồn mới có thể hóa giải. Khi Cự Môn thâm
nhập vào các cung Lục thân, đương số phần lớn bạc duyên với người thân; nếu
không có Lộc Tồn hoặc Hóa Lộc đồng cung, tâm thần thường bất an và có cảm
giác cô đơn.

## Cự Môn gặp Tứ Hóa

Khi gặp Tam Cát Hóa Lộc, Quyền, Khoa, đương số có bổng lộc dồi dào, tài diễn
thuyết hùng biện được trọng dụng. Tính chất khác biệt giữa ba sao:

- Khi gặp Hóa Lộc, đương số nói chuyện mang cảm tính, hiền lành không cưỡng
  bức, biết quan sát tình cảnh để cất lời.
- Khi gặp Hóa Quyền, lời lẽ giảng lý mang tính quyền uy, trật tự rõ ràng,
  tăng trọng lượng lời nói cùng độ tin cậy, nhờ vậy giảm bớt thị phi.
- Khi gặp Hóa Khoa, lời nói nho nhã, mang phong thái quân tử.

Cự Môn thích nhất Hóa Quyền: tại miếu vượng và có lục cát tinh hội chiếu,
đương số làm quan lớn, đảm trách ngoại giao; nếu không miếu vượng vẫn gánh
được trọng trách.

Cự Môn miếu vượng gặp Hóa Lộc cùng cát tinh hội chiếu thì sự nghiệp thấy rõ.
Nếu Hóa Lộc lại gặp Hồng Loan, Thiên Hỷ, Văn Xương, Văn Khúc, Hàm Trì, đương
số phát triển trong văn hóa nghệ thuật, biểu diễn giải trí, phần nhiều thành
danh.

Cự Môn không thích Hóa Kỵ: ngôn từ sắc bén, nói khó nghe, dễ đắc tội. Nếu
Hóa Kỵ lại đi cùng sát tinh, đương số phải hết sức chú ý thị phi nơi quan
trường.

## Cự Môn gặp Sát tinh

- Kình Dương cùng Đà La là bộ kỵ nhất: chuyện tình cảm sóng gió, thị phi
  nhiều.
- Hỏa Tinh cùng Linh Tinh làm tăng phần khó khăn.
- Địa Không cùng Địa Kiếp đồng cung Mệnh khiến đương số một đời vất vả, có
  khi thời thơ ấu đã bị bỏ rơi.`,
  },

  // ============================================================
  // 7. Cự Môn ở Phụ Mẫu
  // ============================================================
  {
    id: 'cu-mon-tai-phu-mau',
    title: 'Cự Môn tại Phụ Mẫu',
    sao: ['Cự Môn'],
    cung: ['Phụ Mẫu'],
    doUuTien: 80,
    tomTat: `Cự Môn cư Phụ Mẫu khiến mối quan hệ cha mẹ - con cái không thuận,
nhiều biến động và mâu thuẫn. Đây là sao không tốt ở cung này.`,
    chiTiet: `## Quan hệ cha mẹ - con cái

Mối quan hệ giữa đương số với cha mẹ vốn không được tốt đẹp.

Khi có Thiên Cơ đồng cung, đương số nên làm con nuôi người khác hoặc bái
thêm cha mẹ để tránh hình khắc phân ly. Lúc này cha mẹ gặp nhiều bất lợi,
làm ăn lụi bại, tài sản tổ tiên dễ bị kẻ khác chiếm đoạt.

Khi Cự Môn cùng Thái Dương hội tụ tại Phụ Mẫu, cha mẹ và con cái mâu thuẫn,
khắc khẩu cãi vã không ngớt.

Khi Cự Môn gặp Kình Dương, Đà La, Hỏa Tinh, Linh Tinh, Địa Không, Địa Kiếp
hoặc Thiên Hình, đương số khắc cha mẹ, có thể mồ côi cha hoặc mẹ.`,
  },

  // ============================================================
  // 8. Cự Môn ở Phúc Đức
  // ============================================================
  {
    id: 'cu-mon-tai-phuc-duc',
    title: 'Cự Môn tại Phúc Đức',
    sao: ['Cự Môn'],
    cung: ['Phúc Đức'],
    doUuTien: 80,
    tomTat: `Cự Môn cư Phúc Đức khiến đương số cố chấp, bảo thủ, đa nghi và
không nhất quán. Đương số không chịu tiếp thu ý kiến nên tự mang phiền não
cho mình; thần kinh kém ổn định, hay mất ngủ và khó tìm được an lạc trong
cuộc sống.

Lời khuyên: điều hòa tâm tính, biết lắng nghe và không chạy theo vật chất.`,
    chiTiet: `## Tính cách

Đương số có Cự Môn đóng tại Phúc Đức thường cố chấp, bảo thủ, đa nghi, kém
nhất quán và kiên định. Đương số không chịu tiếp thu ý kiến từ người khác,
tự mang phiền não cho bản thân; làm việc thiếu định hướng, hay thay đổi.
Thần kinh không ổn định, hay mất ngủ, vì thế cũng khó giữ được sự minh mẫn
tỉnh táo.

## Cát hung kết hợp sao

Tại cung này, Cự Môn ảnh hưởng đến sự vui vẻ và yên ổn của đương số nên khó
có được an lạc, hạnh phúc trọn vẹn.

- Gặp cát tinh như Thiên Đồng hay Thái Dương, đương số được hưởng phần nào
  phúc lộc, có phẩm chất tu dưỡng.
- Gặp Kình Dương, Đà La, Hỏa Tinh, Linh Tinh, đương số hay lo nghĩ, ưu phiền,
  vướng khẩu thiệt và tranh chấp, không có phúc để hưởng.
- Gặp Địa Không, Địa Kiếp, đương số không thực hiện được dự định và ước mơ.

## Lời khuyên

Đương số có Cự Môn cư Phúc Đức cần biết điều hòa tâm tính, lắng nghe người
khác nói và không chạy theo vật chất.`,
  },

  // ============================================================
  // 9. Cự Môn ở Điền Trạch
  // ============================================================
  {
    id: 'cu-mon-tai-dien-trach',
    title: 'Cự Môn tại Điền Trạch',
    sao: ['Cự Môn'],
    cung: ['Điền Trạch'],
    doUuTien: 80,
    tomTat: `Cự Môn cư Điền Trạch khi được Hóa Lộc, Hóa Quyền hoặc Lộc Tồn hỗ
trợ thì đương số tự tay tạo dựng sản nghiệp, có uy quyền, khẩu phúc, có thể
trở thành nhà ngoại giao giỏi.

Ngược lại, nếu gặp Hóa Kỵ hoặc sát tinh, sản nghiệp dễ bị lừa đảo, vướng
kiện tụng, đương số phải phiêu bạt tứ hải.`,
    chiTiet: `## Cát kết hợp

Khi gặp Hóa Lộc hoặc Hóa Quyền, đương số tự tay tạo dựng sản nghiệp, là người
có uy quyền và khẩu phúc, có tài trở thành nhà ngoại giao giỏi hay thầy nổi
tiếng.

Khi đồng cung với Lộc Tồn, đương số gặp may mắn, tai ách được giải trừ.

Khi gặp Thiên Đồng, Hồng Loan, Thiên Hỷ, Văn Xương, Văn Khúc, đương số có tài
và thành công trong các lĩnh vực nghệ thuật, văn học.

## Hung kết hợp

Khi gặp Hóa Kỵ hoặc Kình Dương, Đà La, Thiên Hình, Đại Hao, Thất Sát, Tham
Lang, Phá Quân, đương số hay gặp khó khăn, biến cố và họa sát. Đương số dễ
vướng vào chuyện thị phi, hay bất mãn, ăn nói khó nghe, lắm khi kiện tụng;
sản nghiệp cũng dễ bị lừa đảo.

Đất đai nhà cửa của đương số dễ vướng tranh chấp, kiện tụng pháp luật. Cuộc
đời chịu nhiều đau khổ, tổn thương, hay gặp họa cướp trộm, binh đao, phải
phiêu bạt tứ hải.`,
  },

  // ============================================================
  // 10. Cự Môn ở Quan Lộc
  // ============================================================
  {
    id: 'cu-mon-tai-quan-loc',
    title: 'Cự Môn tại Quan Lộc',
    sao: ['Cự Môn'],
    cung: ['Quan Lộc'],
    doUuTien: 80,
    tomTat: `Khi Cự Môn nhập miếu tại Quan Lộc, đương số sáng lập sự nghiệp và
phát triển từ nghề chuyên môn. Đương số có tài ăn nói, ngoại giao tốt, khả
năng nghiên cứu giỏi — phù hợp với tư pháp, y học, học thuật, truyền thông,
y bốc mệnh tướng, là người có chức có quyền.`,
    chiTiet: `## Cát kết hợp

Khi gặp Hóa Quyền, Hóa Lộc hoặc Lộc Tồn, đương số trở thành người nổi tiếng,
nhân vật lớn trong giới thương nghiệp.

Khi gặp Thái Dương, đương số được danh tiếng nhiều hơn tiền tài.

## Hung kết hợp

Khi gặp Thiên Cơ, sự nghiệp đương số biến động đa đoan, công việc hay thay
đổi; đương số cũng hay ảo tưởng và dục vọng lớn.

Khi gặp Thiên Đồng, đương số làm gì cũng không có đầu có đuôi, làm nhiều
nhưng không kết thúc được việc gì.

Khi gặp Hóa Kỵ, đương số vướng tranh chấp, cãi vã; sự nghiệp không ổn định,
trong thành công ẩn chứa nhiều thất bại.

Khi gặp sát tinh như Kình Dương, Đà La, Địa Không, Địa Kiếp, Linh Tinh, Đại
Hao, Thiên Hình, công việc của đương số hay bị kiện tụng, tranh chấp, vướng
vào pháp luật.`,
  },

  // ============================================================
  // 11. Cự Môn ở Nô Bộc
  // ============================================================
  {
    id: 'cu-mon-tai-no-boc',
    title: 'Cự Môn tại Nô Bộc',
    sao: ['Cự Môn'],
    cung: ['Nô Bộc'],
    doUuTien: 78,
    tomTat: `Cự Môn cư Nô Bộc khiến đương số quan hệ với bạn bè và cấp dưới
hay tranh cãi.`,
    chiTiet: `## Cát kết hợp

Khi cát diệu nhập miếu, đặc biệt có Hóa Lộc hoặc Lộc Tồn, đương số tuy hay
xảy ra tranh cãi với bạn bè nhưng nhờ bạn mà lập nên sự nghiệp; cấp dưới của
đương số thông minh, có tài, thẳng tính và chăm chỉ.

Khi Thái Dương đồng độ, bạn bè của đương số là người tốt, hay giúp đỡ, tính
trượng nghĩa.

## Hung kết hợp

Khi Thiên Đồng đồng độ, bạn bè của đương số hay gây thị phi.

Khi gặp Hóa Kỵ, bạn bè không giúp đỡ hay ủng hộ; bản thân đương số hay vướng
tranh cãi và đối mặt với tiếng xấu.

Khi gặp Kình Dương, Đà La, Linh Tinh hoặc Hỏa Tinh, bạn bè của đương số là
kẻ vô ơn, hay hãm hại và phản bội.

Khi gặp Địa Không, Địa Kiếp, Thiên Sát hoặc Đại Hao đi cùng Hóa Kỵ, đương
số dễ bị trộm cướp, mất mát do chính bạn bè gây nên.

## Theo vị trí

`,
  },

  {
    id: 'cu-mon-tai-no-boc-mieu-mao-dau',
    title: 'Cự Môn Miếu tại Nô Bộc - Mão / Dậu',
    sao: ['Cự Môn'],
    cung: ['Nô Bộc'],
    chi: ['Mão', 'Dậu'],
    trangThai: ['Miếu'],
    doUuTien: 78,
    tomTat: `Khi Cự Môn Miếu địa tại Nô Bộc ở Mão hoặc Dậu, cấp dưới của đương
số lúc trẻ không đắc lực, song về già có thể trở nên tốt đẹp.`,
  },

  {
    id: 'cu-mon-tai-no-boc-ham-thin-tuat',
    title: 'Cự Môn Hãm tại Nô Bộc - Thìn / Tuất',
    sao: ['Cự Môn'],
    cung: ['Nô Bộc'],
    chi: ['Thìn', 'Tuất'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi Cự Môn Hãm địa tại Nô Bộc ở Thìn hoặc Tuất, công việc của
đương số lộn xộn, dễ rơi vào cảnh "ăn cháo đá bát".`,
  },

  // ============================================================
  // 12. Cự Môn ở Thiên Di
  // ============================================================
  {
    id: 'cu-mon-tai-thien-di',
    title: 'Cự Môn tại Thiên Di',
    sao: ['Cự Môn'],
    cung: ['Thiên Di'],
    doUuTien: 80,
    tomTat: `Cự Môn cư Thiên Di chủ về số xuất ngoại; sự nghiệp đương số liên
quan đến tư pháp, xuất bản, ngoại giao, quảng cáo. Khả năng giao tiếp giỏi,
có tài diễn thuyết.

Tuy vậy đương số hay bị đố kỵ, ganh ghét, gặp thị phi do bản tính đa nghi.`,
    chiTiet: `## Đặc điểm chung

Đương số có số xuất ngoại; sự nghiệp liên quan đến tư pháp, xuất bản, ngoại
giao, quảng cáo. Khả năng giao tiếp giỏi, có tài diễn thuyết.

Tuy nhiên đương số hay bị đố kỵ, ganh ghét, gây hiềm khích; dễ gặp thị phi,
bị bêu riếu do tính đa nghi, hay lừa lọc xảo trá và làm việc không quyết
đoán nên cuộc đời vất vả.

## Cát kết hợp

Khi gặp Hóa Quyền, Hóa Lộc hoặc Lộc Tồn, đương số tăng uy quyền, tài lộc và
phúc lợi.

Khi Thái Dương đồng cung, đương số xuất ngoại có thu hoạch bất ngờ, song
cũng hay bị đố kỵ.

## Hung kết hợp

Khi gặp Hóa Kỵ, đương số xuất ngoại nhiều cãi vã, tranh chấp.

Khi gặp Đà La, Kình Dương, Thiên Hình hoặc Linh Tinh hội chiếu, đương số
xuất ngoại hay bị tai nạn, gặp thị phi; nếu lưu niên hóa sát còn dẫn đến
tai họa lao tù, hình khắc, tử thương.`,
  },

  // ============================================================
  // 13. Cự Môn ở Tật Ách
  // ============================================================
  {
    id: 'cu-mon-tai-tat-ach',
    title: 'Cự Môn tại Tật Ách',
    sao: ['Cự Môn'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `Cự Môn cư Tật Ách khiến sức khỏe đương số suy giảm; hay mắc các
bệnh dạ dày, phổi, mụn nhọt, ung thư và các chứng âm tồn.`,
    chiTiet: `## Theo vị trí


## Cát kết hợp

Khi gặp Tử Vi hoặc Lộc Tồn, ách bệnh được hóa giải và trừ bỏ.

## Hung kết hợp

Khi gặp sát tinh như Địa Không, Địa Kiếp, Hóa Kỵ, Kình Dương, Đà La, đương
số gặp nhiều tai họa, thương tích đầy mình, cô đơn, bệnh nặng, thất tài và
vướng hình pháp.`,
  },

  {
    id: 'cu-mon-tai-tat-ach-mieu-vuong',
    title: 'Cự Môn Miếu / Vượng tại Tật Ách',
    sao: ['Cự Môn'],
    cung: ['Tật Ách'],
    trangThai: ['Miếu', 'Vượng'],
    doUuTien: 78,
    tomTat: `Khi Cự Môn ở Miếu hoặc Vượng địa tại Tật Ách, đương số ít bệnh,
chỉ phải lưu ý phần tai và tiêu hóa không được tốt.`,
  },

  {
    id: 'cu-mon-tai-tat-ach-ham',
    title: 'Cự Môn Hãm tại Tật Ách',
    sao: ['Cự Môn'],
    cung: ['Tật Ách'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi Cự Môn Hãm địa tại Tật Ách, đương số dễ mắc các bệnh tật mủ
máu, bệnh thận, dạ dày, phổi và ung thư.`,
  },

  // ============================================================
  // 14. Cự Môn ở Tài Bạch
  // ============================================================
  {
    id: 'cu-mon-tai-tai-bach',
    title: 'Cự Môn tại Tài Bạch',
    sao: ['Cự Môn'],
    cung: ['Tài Bạch'],
    doUuTien: 80,
    tomTat: `Cự Môn cư Tài Bạch khiến đương số dựa vào tâm lực, trí lực và
khẩu tài để thành công. Có Hóa Quyền, Hóa Lộc hoặc Lộc Tồn thì đương số giàu
có, quyền lực. Tuy nhiên đương số hay gặp chèn ép trong công việc, cần chú
ý lời ăn tiếng nói.`,
    chiTiet: `## Đặc điểm

Đương số có chí khí và tài năng nhưng hay gặp rắc rối, khó khăn; bị người
khác chèn ép, lật đổ trong công việc.

## Cát kết hợp

Khi Hóa Quyền, Hóa Lộc hoặc Lộc Tồn đồng cung, đương số giàu có và quyền
lực.

Khi Thái Dương đồng cung, đương số nhận được sự tín nhiệm tin tưởng từ
những người xung quanh, cơ nghiệp được mở rộng.

Khi Tử Vi hoặc Lộc Tồn đồng cung, tính xấu của Cự Môn bị khắc chế, tai ách
được giải trừ.

## Hung kết hợp

Khi Kình Dương, Đà La hội cùng, đương số vướng tranh chấp, kiện tụng.

Khi gặp Hỏa Tinh, Linh Tinh, Địa Không, Địa Kiếp hoặc Đại Hao, đương số
tổn hao do binh đao, cướp bóc, hỏa tai.

Khi gặp Thất Sát, Tham Lang hoặc Phá Quân, đương số dễ bị tù tội.

Khi gặp Hóa Kỵ, họa của đương số từ miệng mà ra.

Khi Cự Môn cùng Thiên Cơ đồng cung, tài lộc nhiều biến động.

Khi Cự Môn cùng Thiên Đồng đồng cung, đương số tay trắng lập nghiệp theo
nghề kỹ thuật, nghệ thuật.

## Lời khuyên

Đương số cần chú ý lời ăn tiếng nói để tránh vướng thị phi.`,
  },

  // ============================================================
  // 15. Cự Môn ở Tử Tức
  // ============================================================
  {
    id: 'cu-mon-tai-tu-tuc',
    title: 'Cự Môn tại Tử Tức',
    sao: ['Cự Môn'],
    cung: ['Tử Tức'],
    doUuTien: 80,
    tomTat: `Cự Môn cư Tử Tức khiến đường con cái của đương số không thuận
lợi. Cần ánh sáng Thái Dương cùng Hóa Quyền, Hóa Lộc hoặc Lộc Tồn để giải
u ám. Cát hội thì có 3 con trở lên, gia đình giàu sang; hung hội thì cô
độc, phải nuôi con thừa tự.`,
    chiTiet: `## Đặc điểm

Đương số sinh con cái không được thuận lợi; có tài ăn nói nhưng hay vướng
thị phi, tranh chấp, đố kỵ và bị cạnh tranh.

## Cát kết hợp

Khi gặp Thái Dương, Tả Phù, Hữu Bật, Thiên Khôi, Thiên Việt, Hóa Quyền, Hóa
Lộc hoặc Lộc Tồn, đương số có 3 con trở lên, gia đình giàu sang phú quý;
con cái thông minh đa tài, con hơn cha về sự nghiệp.

## Hung kết hợp

Khi gặp Thiên Cơ, Thiên Đồng, Kình Dương, Đà La, Hỏa Tinh, Linh Tinh, Địa
Không hoặc Địa Kiếp, đương số là người cô độc, phải nuôi con thừa tự; con
cái hay bệnh tật, hao tài tốn của.

## Lời khuyên

Cự Môn cần ánh sáng của Thái Dương để giải u ám tối tăm, cần Hóa Quyền,
Hóa Lộc hoặc Lộc Tồn để tạo ánh sáng tốt lành cho đường con cái.

Đương số nên cẩn trọng lời ăn tiếng nói và sống hòa hợp với mọi người.`,
  },

  // ============================================================
  // 16. Cự Môn ở Phu Thê
  // ============================================================
  {
    id: 'cu-mon-tai-phu-the',
    title: 'Cự Môn tại Phu Thê',
    sao: ['Cự Môn'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `Cự Môn cư Phu Thê chủ về cảnh lời qua tiếng lại, cãi vã giữa
đương số và bạn đời. Để tránh, đương số nên lấy người hơn tuổi, tính tình
hào sảng, thông minh, dũng cảm — đặc biệt khi có Thái Dương đồng cung.`,
    chiTiet: `## Lời khuyên chung

Tại cung này, Cự Môn chủ về lời qua tiếng lại, cãi vã giữa đương số và bạn
đời. Để tránh, đương số nên lấy người hơn tuổi, tính tình bạn đời hào sảng,
thông minh, dũng cảm và sống có trách nhiệm — đặc biệt khi Thái Dương đồng
cung.

## Cát kết hợp

Phù hay Hữu Bật.

Khi cùng cung Thiên Cơ hoặc Thiên Đồng, bạn đời của đương số là người tài
năng, xinh đẹp, song dễ dính vào hình khắc chia ly.

## Hung kết hợp

Khi gặp Kình Dương, Đà La, Hỏa Tinh, Linh Tinh, Thiên Hình, Cô Thần hoặc
Quả Tú, đương số khắc với bạn đời, hay khắc khẩu và phải ở riêng.

Khi gặp Hóa Kỵ, đương số hay bị thị phi bởi chính lời ăn tiếng nói của
mình.

Khi hội cùng Kình Dương, Đà La, Hỏa Tinh, Linh Tinh hay Thiên Hình,`,
  },

  {
    id: 'cu-mon-tai-phu-the-nu-cat',
    title: 'Cự Môn tại Phu Thê + cát tinh - Nữ mệnh',
    sao: ['Cự Môn'],
    cung: ['Phu Thê'],
    gioiTinh: 'Nữ',
    ketHop: ['Hóa Quyền', 'Hóa Lộc', 'Lộc Tồn', 'Tả Phù', 'Hữu Bật'],
    doUuTien: 78,
    tomTat: `Khi nữ mệnh có Cự Môn cư Phu Thê gặp Hóa Quyền, Hóa Lộc, Lộc
Tồn, Tả Phù hoặc Hữu Bật, đương số thường thông minh, lanh lẹ, biết chăm
lo cho chồng cho con và vun vén gia đình. Đương số lấy được người chồng
tài giỏi, giàu sang phú quý, có sự nghiệp lớn.`,
  },

  {
    id: 'cu-mon-tai-phu-the-nu-sat',
    title: 'Cự Môn tại Phu Thê + Sát tinh - Nữ mệnh',
    sao: ['Cự Môn'],
    cung: ['Phu Thê'],
    gioiTinh: 'Nữ',
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Thiên Hình'],
    doUuTien: 78,
    tomTat: `Khi nữ mệnh có Cự Môn cư Phu Thê gặp Kình Dương, Đà La, Hỏa
Tinh, Linh Tinh hoặc Thiên Hình, đương số mang mệnh ba đời chồng. Số nên
làm vợ lẽ, về ở không cần tổ chức hôn lễ.`,
  },

  // ============================================================
  // 17. Cự Môn ở Huynh Đệ
  // ============================================================
  {
    id: 'cu-mon-tai-huynh-de',
    title: 'Cự Môn tại Huynh Đệ',
    sao: ['Cự Môn'],
    cung: ['Huynh Đệ'],
    doUuTien: 80,
    tomTat: `Cự Môn cư Huynh Đệ khiến anh em của đương số có tài ăn nói song
quan hệ giữa anh em không tốt, hay vướng thị phi, không hòa thuận và đương
số có anh em khác mẹ.`,
    chiTiet: `## Đặc điểm

Anh em của đương số có tài ăn nói; tuy nhiên quan hệ giữa anh em không tốt,
hay vướng thị phi và không hòa thuận. Đương số thường có anh em khác mẹ.

## Cát kết hợp

Khi gặp Tả Phù, Hữu Bật, Thiên Khôi, Thiên Việt, Văn Xương, Văn Khúc, Ân
Quang hoặc Thiên Phúc đi cùng Hóa Quyền, Hóa Lộc hay Lộc Tồn, anh em của
đương số là người tài giỏi, tự lập được sự nghiệp thành tựu lớn.

Khi Thái Dương đồng cung, cách cục nhập cát.

## Hung kết hợp

Khi Thiên Cơ đồng cung, anh em bất hòa vì tư lợi cá nhân, tham vọng, gây
chia rẽ xích mích.

Khi Thiên Đồng đồng cung, đương số có anh em kết nghĩa nhưng tốt trước
xấu sau.

Khi gặp Địa Không, Địa Kiếp, Thiên Hình hay Đại Hao, anh em mâu thuẫn.

Khi gặp Kình Dương, Đà La, Hỏa Tinh, Linh Tinh, Cô Thần hoặc Quả Tú, anh
em tranh chấp, hình khắc và thị phi.`,
  },

  // ============================================================
  // 18. Cách cục đặc biệt của Cự Môn (gắn với cung Mệnh) — đã tách
  // ============================================================
  {
    id: 'cu-mon-cach-cuc-dac-biet',
    title: 'Các cách cục đặc biệt của Cự Môn',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    doUuTien: 55,
    tomTat: `Cự Môn tại Mệnh có nhiều cách cục đặc biệt, chia theo bộ kết
hợp sao và vị trí cung. Mỗi cách cục được tách thành luận giải riêng.`,
    chiTiet: `## Tổng quan

Cự Môn tại Mệnh hình thành nhiều cách cục đặc biệt, chia theo bộ kết hợp
sao và vị trí cung.

- Mỗi cách cục được tách thành luận giải riêng —`,
  },

  {
    id: 'cu-mon-cach-cu-nhat-dan',
    title: 'Cách Cự Nhật tại Dần',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    chi: ['Dần'],
    ketHop: ['Thái Dương'],
    doUuTien: 50,
    tomTat: `Khi Cự Nhật tọa Mệnh tại Dần, đương số được ba đời thịnh vượng
giàu sang, vinh hiển và vang danh. Có thêm Hóa Quyền cùng Phượng Các thì
cách càng tốt đẹp; gặp Lộc Tồn lại thành hạn xấu, khổ suốt đời.`,
  },

  {
    id: 'cu-mon-cach-cu-nhat-than',
    title: 'Cách Cự Nhật tại Thân',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    chi: ['Thân'],
    ketHop: ['Thái Dương'],
    doUuTien: 50,
    tomTat: `Khi Cự Nhật tọa Mệnh tại Thân, đương số chỉ ở mức khá giả; công
danh đến trước tiền bạc.`,
  },

  {
    id: 'cu-mon-cach-cu-co-mao-dau',
    title: 'Cách Cự Cơ tại Mão / Dậu',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    chi: ['Mão', 'Dậu'],
    ketHop: ['Thiên Cơ'],
    doUuTien: 50,
    tomTat: `Khi Cự Cơ tọa Mệnh tại Mão hoặc Dậu, đương số làm quan chức lớn,
giàu có nhiều tiền của; Mão tốt hơn Dậu. Với bốn tuổi Ất, Kỷ, Bính, Tân,
đương số hưng thịnh phát đạt cả phú lẫn quý.

Có thêm Tiểu Hao và Đại Hao đi kèm, tiếng tăm đương số lừng lẫy, vang danh
muôn nơi, có tiền tài và uy quyền, tính phóng khoáng và hoang phí.`,
  },

  {
    id: 'cu-mon-cach-cu-khoa-thin-tuat',
    title: 'Cách Cự Khoa tại Thìn / Tuất',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    chi: ['Thìn', 'Tuất'],
    ketHop: ['Hóa Khoa'],
    doUuTien: 50,
    tomTat: `Khi Cự Môn cùng Hóa Khoa tọa Mệnh tại Thìn hoặc Tuất, đương số
có biệt tài ăn nói, diễn thuyết trước đám đông rất giỏi.`,
  },

  {
    id: 'cu-mon-cach-tuoi-tan-tu-mo',
    title: 'Cự Môn - Tuổi Tân tại Tứ Mộ',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    chi: ['Thìn', 'Tuất', 'Sửu', 'Mùi'],
    doUuTien: 50,
    tomTat: `Đương số tuổi Tân, Mệnh ở Tứ Mộ và Cự Môn ngự trị: tuy Cự bị
Hãm nhưng cuộc sống vẫn ở mức khá giả. Có thêm Tả Phù và Hữu Bật, rủi ro
giảm hẳn dù có Hóa Kỵ đồng cung.`,
  },

  {
    id: 'cu-mon-cach-cu-ham-kinh-da',
    title: 'Cách xấu - Cự hãm + Kình Đà',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 50,
    tomTat: `Khi Cự Môn Hãm địa gặp Kình Dương cùng Đà La, đương số yếu đuối,
thiếu sức sống, hay mắc bệnh hiểm nghèo. Không bệnh thì dễ rơi vào con
đường phạm pháp như trộm cắp; nữ mệnh thì lăng loàn, tai tiếng.`,
  },

  {
    id: 'cu-mon-cach-cu-linh-hoa',
    title: 'Cách xấu - Cự + Linh + Hỏa',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    ketHop: ['Linh Tinh', 'Hỏa Tinh'],
    doUuTien: 50,
    tomTat: `Khi Cự Môn gặp cả Linh Tinh và Hỏa Tinh, cách rất xấu và hạn
rất nặng: đương số chết yểu hoặc gặp tai nạn lớn khó qua khỏi.`,
  },

  {
    id: 'cu-mon-cach-cu-da-kinh',
    title: 'Cách xấu - Cự + Đà La + Kình Dương',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    ketHop: ['Đà La', 'Kình Dương'],
    doUuTien: 45,
    tomTat: `Khi Cự Môn gặp Đà La cùng Kình Dương, đương số gặp biến cố tâm
lý, trầm cảm u uất rồi tự vẫn. Không thì bị tàn tật hoặc chân tay bỏng
nặng.`,
  },

  {
    id: 'cu-mon-cach-cu-ty-ngo-loc-ton',
    title: 'Cự Môn tại Tý / Ngọ + Lộc Tồn đồng cung',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    chi: ['Tý', 'Ngọ'],
    ketHop: ['Lộc Tồn'],
    doUuTien: 50,
    tomTat: `Khi Cự Môn tọa Mệnh tại Tý hoặc Ngọ và có Lộc Tồn đồng cung,
đương số có tài nhưng không gặp thời.`,
  },

  {
    id: 'cu-mon-cach-cu-hoi-ty-loc-ton',
    title: 'Cự Môn tại Hợi / Tý + Lộc Tồn đồng cung',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    chi: ['Hợi', 'Tý'],
    ketHop: ['Lộc Tồn'],
    doUuTien: 50,
    tomTat: `Khi Cự Môn tọa Mệnh tại Hợi hoặc Tý và có Lộc Tồn đồng cung,
đương số tham vọng lớn nhưng không hiện thực hóa được, tài năng không có
cơ hội khai phá.`,
  },

  {
    id: 'cu-mon-cach-cu-tham-rieu-hao',
    title: 'Cách xấu - Cự + Tham + Riêu / Hao',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    ketHop: ['Tham Lang', 'Thiên Riêu', 'Đại Hao', 'Tiểu Hao'],
    doUuTien: 50,
    tomTat: `Khi Cự Môn gặp Tham Lang đi cùng Thiên Riêu, hoặc Cự Môn gặp
Tham Lang đi cùng Đại Hao / Tiểu Hao, đương số chủ hạn tại gia: thất
nghiệp, tù tội và hay gặp nạn.`,
  },

  {
    id: 'cu-mon-cach-cuc-nu-hoa-ky',
    title: 'Cự Môn + Hóa Kỵ - Nữ mệnh',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    gioiTinh: 'Nữ',
    ketHop: ['Hóa Kỵ'],
    doUuTien: 78,
    tomTat: `Khi nữ mệnh có Cự Môn cùng Hóa Kỵ tại Mệnh, đàn bà thì thất
tiết, con gái thì thất trinh.`,
  },
];
