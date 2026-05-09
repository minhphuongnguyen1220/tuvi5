import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO GIẢI THẦN - Mộc, Thiện Tinh.
 *
 * An theo NĂM SINH (engine: khởi từ Tuất).
 *
 * QUY LUẬT BẮT BUỘC: Giải Thần LUÔN đồng cung Phượng Các (cùng khởi từ
 * Tuất theo năm sinh) — đã hardcode trong engine `src/core/tuvi/phu-tinh.ts`.
 *
 * Vai trò:
 * - Sao GIẢI mạnh nhất trong bộ Tam Giải (Thiên Giải, Địa Giải, Giải Thần)
 * - Bổ trợ cho Phượng Các tạo bộ "PHƯỢNG GIẢI" - bùa hộ mệnh
 * - Vì luôn đi với Phượng Các (Tứ Linh): cũng chủ về GIÀU SANG, THỊNH VƯỢNG
 *
 * Phần CHUNG bộ Phượng Giải đã viết tại file phuong-cac.ts.
 */
export const luanGiai_GiaiThan: DoanLuanGiai[] = [
  {
    id: 'giai-than-tinh-chat-chung',
    title: 'Giải Thần - Đặc tính chung',
    sao: ['Giải Thần'],
    doUuTien: 32,
    tomTat: `**Giải Thần** là phụ tinh thuộc nhóm thiện tinh, ngũ hành Mộc, an theo
năm sinh. Đây là sao Giải mạnh nhất trong bộ Tam Giải (vượt Thiên Giải và
Địa Giải).

Quy luật bắt buộc cần ghi nhớ:

- Giải Thần luôn đồng cung với **Phượng Các** (engine đã hardcode)
- Cùng nhau hai sao này tạo nên bộ **Phượng Giải** — như một tấm bùa hộ mệnh

Vai trò của Giải Thần với đương số:

- Giải ách, đem may mắn, trừ họa, tăng phúc thọ và độ lượng
- Vì luôn đi cùng Phượng Các (thuộc Tứ Linh), Giải Thần còn chủ về giàu sang
  thịnh vượng, đương số dễ làm giàu

Cảnh báo cực kỳ quan trọng: sao này chỉ hóa giải được nạn nhỏ. Nếu cả đại
hạn và tiểu hạn cùng gặp Giải Thần đi với sao xấu mạnh, Giải Thần có thể
đóng vai tử thần, lấy mạng đương số một cách nhanh chóng. Đây là điểm khác
biệt căn bản với các sao Giải khác.`,
  },

  {
    id: 'giai-than-canh-bao-tu-than',
    title: 'CẢNH BÁO - Giải Thần đại tiểu hạn cùng sao xấu = TỬ THẦN',
    sao: ['Giải Thần'],
    doUuTien: 60,
    tomTat: `Đây là cảnh báo đặc biệt về một mặt tối ít người biết của Giải Thần.

Trong điều kiện bình thường, Giải Thần là sao giải ách mạnh, hóa giải tai
ương, trừ hung và đem may mắn cho đương số.

Tuy nhiên khi cả đại hạn và tiểu hạn cùng gặp Giải Thần đi với sao xấu
mạnh, Giải Thần không còn giữ vai trò sao Giải nữa, mà chuyển sang đóng
vai tử thần, có thể lấy mạng đương số rất nhanh.

Cơ chế ở chỗ Giải Thần chỉ có khả năng hóa giải nạn nhỏ. Khi gặp đại nạn,
đại bệnh mà cả hai hạn cùng có sao này, nó sẽ quay sang phía "giải" mệnh
người luôn — chữ "giải" lúc đó mang nghĩa tháo gỡ ra khỏi cõi sống.

Khi luận hạn, cần lưu ý mấy điểm:

- Xem kỹ mức độ hung tinh trong cùng cung
- Hạn có sao xấu nặng mà cả hai vận đều có Giải Thần thì phải cực kỳ thận
  trọng
- Khác hẳn Tứ Đức, Quang Quý, Quan Phúc — vốn luôn giải tốt`,
  },

  {
    id: 'giai-than-bo-phuong-giai-bua-ho-menh',
    title: 'Bộ Phượng Giải - Bùa hộ mệnh, giàu sang thịnh vượng',
    sao: ['Giải Thần'],
    ketHop: ['Phượng Các'],
    doUuTien: 55,
    tomTat: `Bộ **Phượng Giải** gồm Phượng Các và Giải Thần, luôn đồng cung do quy
luật an sao bắt buộc. Bộ này như tấm bùa hộ mệnh, đem may mắn và phúc thọ
đến bất kỳ cung nào hai sao đóng.

Vai trò kép thể hiện rõ nét:

- Phượng Các là sao Cát thuộc Tứ Linh, biểu tượng cho phẩm cách cao quý,
  cái tai bén nhạy
- Giải Thần là sao Giải, có khả năng hóa giải tai ách
- Hai sao cùng đứng vừa cứu giải vừa gia tăng may mắn

Có một đặc điểm bổ trợ đáng chú ý: vì Giải Thần đi đến đâu cũng kéo theo
Hoa Cái, Long Trì, Phượng Các (Tứ Linh) nên còn chủ về giàu sang, đương số
dễ làm giàu. Đây chính là điểm khác biệt giữa Giải Thần với Thiên Giải và
Địa Giải — hai sao kia chỉ giải họa chứ không sinh tài.`,
  },

  {
    id: 'giai-than-tam-tang-bat-toa-nha-lau',
    title: 'Phượng Giải + Tam Thai Bát Tọa - Nhà lầu cao sang có ao hồ',
    sao: ['Giải Thần'],
    cung: ['Điền Trạch'],
    ketHop: ['Tam Thai', 'Bát Tọa'],
    doUuTien: 60,
    tomTat: `Khi Phượng Các, Giải Thần đi cùng **Tam Thai** và **Bát Tọa** tại Điền
Trạch, ứng với câu phú "có nhà lầu cao sang, nhà có ao hồ".

Phân tích cách cục:

- Phượng Giải đóng vai bùa hộ mệnh, bảo vệ gia đình
- Tam Thai và Bát Tọa là bộ sao thanh cao, đem lại gia đạo cao quý
- Hợp lại tạo cơ ngơi đẹp đẽ với nhà lầu, biệt thự, sân vườn, ao hồ

Đặc trưng môi trường sống của đương số: hàng xóm xung quanh nhiều người
có địa vị, chức sắc; nhà thường có hoành phi câu đối; phong thủy chỗ ở
thuộc loại tốt.`,
  },

  {
    id: 'giai-than-da-la-kinh-duong-giam-thi-phi',
    title: 'Giải Thần + Đà La / Kình Dương - Giảm thị phi tai bay vạ gió',
    sao: ['Giải Thần'],
    ketHop: ['Đà La'],
    doUuTien: 50,
    tomTat: `Khi đương số vào hạn có Giải Thần đi cùng Đà La hoặc Kình Dương, thị
phi và tai bay vạ gió giảm đi đáng kể.

Đà La và Kình Dương vốn là sao chủ thị phi, kiện tụng. Giải Thần xuất hiện
làm giảm hẳn các rủi ro đó, giúp đương số tránh được lời đồn thổi xuyên
tạc, tránh mâu thuẫn sứt mẻ uy tín.

Cơ chế hóa giải khá rõ:

- Vận xấu nhanh chóng được tháo gỡ
- Đương số dễ tìm được người đứng ra phân xử công bằng
- Hoặc bất ngờ có bằng chứng minh oan đúng lúc`,
  },

  {
    id: 'giai-than-tieu-nhan-lua-gat',
    title: 'Giải Thần - Quý nhân tháo gỡ tiểu nhân lừa gạt',
    sao: ['Giải Thần'],
    doUuTien: 50,
    tomTat: `Khi đương số gặp hạn có tiểu nhân quấy phá, Giải Thần xuất hiện như
quý nhân kịp thời, tháo gỡ âm mưu và đưa đương số thoát khỏi hiểm cảnh.

Tác dụng cụ thể của Giải Thần lúc này:

- Thanh danh được bảo toàn
- Tài sản được gìn giữ
- Tránh cảnh "tiền mất tật mang" chỉ vì một phút sơ suất

Cần lưu ý Giải Thần không tiêu trừ hoàn toàn rủi ro mà chỉ giảm thiểu
tổn thất, đồng thời thức tỉnh đương số tránh được sai lầm nghiêm trọng.

Sự bảo hộ này đặc biệt hữu ích với người làm ăn, buôn bán, nhất là khi
đang trong quá trình hợp tác hoặc giao dịch lớn.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // GIẢI THẦN TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'giai-than-tai-menh',
    title: 'Giải Thần tại Mệnh - HỢP CÁCH (đi với Phượng Các)',
    sao: ['Giải Thần'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `Đương số có Giải Thần thủ Mệnh đứng vào một trong những vị trí đẹp
nhất, vì sao này luôn kéo theo Phượng Các đồng hành.

Về tướng mạo, đương số có nhan sắc đẹp, da mặt hồng hào và thanh tú,
khuôn mặt thanh thoát nhẹ nhàng, dễ làm người khác thoải mái khi tiếp
xúc. Tướng mạo cụ thể theo giới được tách thành luận giải riêng.

Về tính cách:

- Đức độ, khoan hòa, thuần hậu
- Giàu lòng từ thiện, hay giúp đỡ người khác
- Thẳng thắn, chính trực
- Tâm tính lương thiện, hướng thiện và vị tha

Giải Thần như tấm bùa hộ mệnh trời ban cho đương số: âm thầm bảo vệ khỏi
biến cố bất ngờ, nhiều khi thoát hiểm trong gang tấc, gặp được những giải
may lạ lùng và hết sức bất ngờ.

Khi cát tinh như Văn Xương, Văn Khúc, Thiên Quan, Thiên Phúc cùng hội,
sự bảo hộ và ban phúc càng thêm mạnh; thử thách trở thành bước đệm để
đương số vươn lên tầm cao mới.

Về nghề nghiệp, đương số hợp với công tác xã hội, hoạt động thiện nguyện,
hoặc các ngành đòi hỏi sự tin cậy tuyệt đối từ người khác.`,
  },

  {
    id: 'giai-than-tai-menh-nu',
    title: 'Giải Thần tại Mệnh - Tướng nữ nhu thuận',
    sao: ['Giải Thần'],
    cung: ['Mệnh'],
    gioiTinh: 'Nữ',
    doUuTien: 70,
    tomTat: `Nữ mệnh có Giải Thần thủ Mệnh sở hữu sắc diện đẹp theo lối nhẹ nhàng,
nhu thuận, đầy sức hút. Da mặt hồng hào và thanh tú, phẩm hạnh đoan trang,
giàu lòng từ thiện.`,
  },

  {
    id: 'giai-than-tai-menh-nam',
    title: 'Giải Thần tại Mệnh - Tướng nam đĩnh đạc',
    sao: ['Giải Thần'],
    cung: ['Mệnh'],
    gioiTinh: 'Nam',
    doUuTien: 70,
    tomTat: `Nam mệnh có Giải Thần thủ Mệnh mang dáng vẻ đĩnh đạc, vững vàng, dễ
khiến người khác đặt niềm tin. Da mặt hồng hào, thanh tú; phẩm hạnh đức
độ và chính trực.`,
  },

  {
    id: 'giai-than-tai-phu-mau',
    title: 'Giải Thần tại Phụ Mẫu',
    sao: ['Giải Thần'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Khi Giải Thần đóng tại Phụ Mẫu, cha mẹ của đương số được tăng thọ
trường, đem lại nhiều may mắn cho gia đình.

Đặc trưng cha mẹ:

- Đẹp đẽ, thanh cao, ôn hòa
- Có tài chính, điền sản
- Hay làm phước thiện
- Sống ăn ở có hậu, giàu lòng thương người

Khi cát tinh như Văn Xương, Văn Khúc, Phượng Các cùng hội, cha mẹ là
người thành đạt, có học thức và vị trí xã hội, được nhiều người kính
trọng.

Về phúc thọ, cha mẹ tuổi thọ lâu dài; nếu có bệnh tật cũng gặp được thầy
hay thuốc quý để hóa giải.`,
  },

  {
    id: 'giai-than-tai-phuc-duc',
    title: 'Giải Thần tại Phúc Đức',
    sao: ['Giải Thần'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `Đương số có Giải Thần đóng Phúc Đức xuất thân từ dòng họ nhiều người
khá giả, nhiều người đỗ khoa bảng cao, có truyền thống phẩm hạnh đạo đức
tốt.

Đặc trưng dòng họ:

- Nề nhà đề cao sự học, rèn rũa trí tuệ song song với đạo đức
- Thường có người đỗ đạt, thành danh
- Mồ mả tổ tiên yên ổn, phát phước nhờ ở "đất lành chim đậu"
- Hậu duệ hưởng phúc khí lâu dài

Cũng cần lưu ý đặc tính "giải" tán của Giải Thần khi đóng tại Phúc Đức
sẽ làm hao bớt phúc đức phần nào, song dòng họ về tổng thể vẫn duy trì
được thịnh vượng và may mắn.`,
  },

  {
    id: 'giai-than-tai-dien-trach',
    title: 'Giải Thần tại Điền Trạch - Nhà cao sang',
    sao: ['Giải Thần'],
    cung: ['Điền Trạch'],
    doUuTien: 78,
    tomTat: `Giải Thần vốn không "ưa" cung Điền do đặc tính giải tán, nhưng nhờ
luôn đi cùng Phượng Các nên đương số vẫn có nhà cửa đẹp và sang trọng.

Đặc trưng nhà ở:

- Rộng rãi, sang trọng, thường tọa trên cao
- Nhà có nhiều hoành phi câu đối
- Tọa nơi phong thủy tốt

Hàng xóm xung quanh nhiều người có địa vị và chức sắc trong xã hội,
sống có tình có nghĩa, tạo nên môi trường an cư lý tưởng.

Khi hội thêm **Tam Thai** và **Bát Tọa** lại ứng vào câu phú "có nhà lầu
cao sang, nhà có ao hồ" — biệt thự, sân vườn, cây cảnh đầy đủ.

Có thể ví Giải Thần ở cung này như "người gác cổng" âm thầm bảo hộ cho
mái nhà và cơ nghiệp gia chủ.`,
  },

  {
    id: 'giai-than-tai-quan-loc',
    title: 'Giải Thần tại Quan Lộc',
    sao: ['Giải Thần'],
    cung: ['Quan Lộc'],
    doUuTien: 76,
    tomTat: `Giải Thần đóng Quan Lộc gia tăng thuận lợi cho đương số trong cầu công
danh, chức vụ, thi cử và bằng khen.

Đặc trưng vận sự nghiệp:

- Gặp nhiều may mắn trong công việc, "đi đến đâu cũng có xe đón ngựa đưa"
- Trong công việc không ai hại được
- Chữ tín đặt lên đầu nên đồng nghiệp tin tưởng, cấp trên trọng dụng

Về tính cách nơi công sở, đương số công tâm, tính xây dựng cao, được
nhiều người kính nể quý mến; lúc gặp tai họa lại có người đứng ra cứu
giúp.

Khi cát tinh như Văn Xương, Văn Khúc, Thai Phụ, Phong Cáo cùng hội, cơ
hội thi cử đỗ đạt hoặc được đề bạt càng cao.

Khi sát tinh như Không Kiếp, Kình Đà, Hóa Kỵ hội, cần đề phòng xung đột
quyền lợi và cạnh tranh ngầm; nhưng đặc tính giải của Giải Thần khiến
khó khăn thường chỉ dừng ở mức thử thách, đủ rèn bản lĩnh chứ không
làm chệch hướng sự nghiệp.`,
  },

  {
    id: 'giai-than-tai-no-boc',
    title: 'Giải Thần tại Nô Bộc',
    sao: ['Giải Thần'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Giải Thần đóng Nô Bộc cho thấy bạn bè, đồng nghiệp của đương số nhiều
người quyền quý, giàu có và đắc lực.

Đặc trưng quan hệ:

- Đương số hay được bạn bè giúp đỡ
- Bạn bè đem đến may mắn và tiền bạc
- Báo hiệu duyên số dễ gặp quý nhân phù trợ

Khi cát tinh như Thiên Phủ, Tử Vi, Thái Âm, Hóa Lộc, Lộc Tồn, Hóa Quyền
cùng hội, bạn bè giàu sang quyền thế, luôn sẵn sàng dang tay giúp đỡ
khi đương số cần.

Mạng lưới quan hệ chính là bệ phóng vững chắc cho sự nghiệp; trong
giai đoạn then chốt, một lời giới thiệu của bạn bè có thể thay đổi
cả thế cờ.`,
  },

  {
    id: 'giai-than-tai-thien-di',
    title: 'Giải Thần tại Thiên Di - HỢP CÁCH',
    sao: ['Giải Thần'],
    cung: ['Thiên Di'],
    doUuTien: 78,
    tomTat: `Giải Thần thủ Thiên Di là vị trí tốt: đương số ra ngoài hay gặp quý
nhân, được người mến chuộng.

Đặc trưng cuộc sống bên ngoài:

- Hay ở trong môi trường nhiều người quyền quý, chức tước
- Vận số thường gặp may
- Tránh được va chạm nhỏ
- Tình cờ gặp người dưng giúp đỡ đúng lúc

Ngay cả khi xa nhà, Giải Thần vẫn phát huy khả năng bảo hộ, giúp đương
số tránh được tai nạn, bệnh tật và thị phi ngoài xã hội.

Đương số hợp với nghề ngoại giao, thương mại hoặc bất cứ công việc nào
đòi hỏi di chuyển liên tục, dễ xây dựng được uy tín và thiện cảm với
người mới quen.`,
  },

  {
    id: 'giai-than-tai-tat-ach',
    title: 'Giải Thần tại Tật Ách',
    sao: ['Giải Thần'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `Giải Thần thủ Tật Ách như lá bùa hộ thể, có khả năng giải trừ bệnh
tật và tai họa cho đương số.

Đặc trưng:

- Khi bị ốm, đương số hay gặp được thầy thuốc giỏi cứu chữa
- Dù bệnh nặng hay nhẹ vẫn có cơ duyên gặp thầy hay thuốc giỏi
- Hoặc tình cờ tìm được phương pháp chữa trị hiệu quả

Lưu ý cần xem trong cung có đi kèm hung tinh nào không để đoán mức độ
bảo hộ. Đặc biệt phải nhớ cảnh báo "tử thần" khi cả hai hạn cùng có
Giải Thần đi với sao xấu nặng.`,
  },

  {
    id: 'giai-than-tai-tai-bach',
    title: 'Giải Thần tại Tài Bạch',
    sao: ['Giải Thần'],
    cung: ['Tài Bạch'],
    doUuTien: 73,
    tomTat: `Giải Thần đóng Tài Bạch không thực sự "ưa" cung này (vì làm tán mất,
hao hụt của cải), nhưng nhờ luôn đi cùng Phượng Các nên đương số không
phải lo nghèo khổ.

Tính cách về tiền bạc:

- Công tâm, tiền bạc phân minh
- Chỉ kiếm những đồng tiền sạch sẽ, thanh cao
- Trong làm ăn minh bạch, buôn ngay bán thật
- Dễ tạo dựng uy tín với đối tác và khách hàng

Khi gặp Đại Hao hoặc Hóa Kỵ, đương số cần "liệu cơm gắp mắm", tránh
khoản đầu tư mạo hiểm để không lâm vào cảnh tiền mất tật mang.`,
  },

  {
    id: 'giai-than-tai-tu-tuc',
    title: 'Giải Thần tại Tử Tức',
    sao: ['Giải Thần'],
    cung: ['Tử Tức'],
    doUuTien: 76,
    tomTat: `Giải Thần đóng Tử Tức cho thấy đương số dễ sinh con, sinh ra con đẹp
và dễ nuôi.

Đặc trưng đường con cái:

- Dễ sinh quý tử
- Con cái thông minh, tuấn kiệt
- Hay được gặp may mắn
- Sau này thành danh, thành đạt

Khi hội Phượng Các, con cái ắt vươn tới học vị cao hoặc xây dựng được
sự nghiệp vững vàng, trở thành niềm tự hào cho cha mẹ.

Khi sát tinh như Địa Kiếp, Không Kiếp hội, cha mẹ cần theo sát quá
trình trưởng thành của con, kịp thời định hướng để tránh môi trường
xấu.`,
  },

  {
    id: 'giai-than-tai-phu-the',
    title: 'Giải Thần tại Phu Thê - Trăm năm bạc đầu',
    sao: ['Giải Thần'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `Giải Thần (kèm Phượng Các) tại Phu Thê là bộ sao se duyên cho hôn nhân
"trăm năm bạc đầu".

Đặc trưng đường vợ chồng:

- Đẹp đôi, tương đắc
- Cưới xin dễ dàng
- Người hôn phối quyền quý, thanh cao, có điều kiện kinh tế tốt
- Xuất thân từ gia đình nề nếp, học thức vững vàng
- Cư xử hòa nhã, biết trân trọng nghĩa vợ chồng

Khi cát tinh như Ân Quang, Thiên Quý cùng hội, hôn nhân êm ấm, thuận
buồm xuôi gió cả về tài chính, vị thế lẫn các mối quan hệ xã hội.

Ngay cả khi gặp sao xấu, mâu thuẫn vẫn chóng nguôi và đôi bên kịp hàn
gắn trước khi rạn nứt.`,
  },

  {
    id: 'giai-than-tai-huynh-de',
    title: 'Giải Thần tại Huynh Đệ',
    sao: ['Giải Thần'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Giải Thần đóng Huynh Đệ cho thấy anh chị em của đương số nhiều người
quyền quý, tài năng, giỏi giang và thành đạt.

Đặc trưng tình anh em:

- Mối quan hệ "trên thuận dưới hòa"
- Anh chị em sự nghiệp sớm thành đạt, làm điểm tựa cho cả nhà

Khi cát tinh như Tả Phù, Hữu Bật, Long Trì, Phượng Các cùng hội, tình
cảm càng khăng khít; không chỉ gắn bó huyết thống mà còn đồng hành
trong gây dựng cơ nghiệp.

"Một cây làm chẳng nên non, ba cây chụm lại nên hòn núi cao" — sức mạnh
tình thân giúp gia đình vững vàng trước sóng gió.`,
  },
];
