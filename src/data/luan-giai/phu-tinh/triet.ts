import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO TRIỆT (Triệt Lộ Không Vong) - Kim, Tùy Tinh.
 *
 * CHỨA PHẦN CHUNG CỦA CẶP TUẦN-TRIỆT (tag ['Tuần', 'Triệt']).
 *
 * Tuần Triệt thuộc bộ TỨ KHÔNG: Địa Không + Thiên Không + Tuần Không + Triệt Không.
 * Tên đầy đủ:
 * - Tuần = Tuần Trung Không Vong
 * - Triệt = Triệt Lộ Không Vong
 * "Không" = trống rỗng, "Vong" = mất, chết, đi vắng.
 *
 * ĐẶC TÍNH CHUNG:
 * - NGĂN TRỞ, CHẶN ĐỨNG, TRỪ BỎ tại nơi đóng
 * - Như BỨC TƯỜNG THÀNH chặn ngang đường
 * - Đóng GIỮA 2 CUNG (engine: La So.triet = [Chi1, Chi2])
 * - Chi phối TẤT CẢ các sao đồng cung — không vị nể bất cứ sao nào
 * - 2 mặt: chỗ tốt: giảm phát; chỗ xấu: ngăn họa
 *
 * KHÁC NHAU:
 * - Triệt = Kim, anh cả MẠNH BẠO, bức tường chắn ngang
 * • Mạnh nhất tới ~30 tuổi (tam thập nhi lập), sau đó giảm dần
 * • Đắc địa Thân-Dậu (tuổi Giáp/Kỷ)
 * - Tuần = Hỏa, em trai DỊU HƠN, chiếc phanh xe
 * • Càng về già càng MẠNH, đeo bám đến suốt đời
 * • Đắc địa Tỵ-Ngọ (tuần Giáp Thân, Giáp Ngọ)
 *
 * VÒNG MỞ KHÓA: Khi vào vận có Tuần: mở Triệt; vào vận Triệt: mở Tuần.
 *
 * CÂU PHÚ "TRIỆT ĐÁO KIM CUNG, TUẦN LÂM HỎA ĐỊA" — đắc địa.
 *
 * CẢNH BÁO: Hai sao này có thể BIẾN TỐT THÀNH XẤU và XẤU THÀNH TỐT.
 * Hiệu lực nghịch đảo dễ làm LẠC HƯỚNG LUẬN ĐOÁN nếu cân nhắc không tinh vi.
 */
export const luanGiai_Triet: DoanLuanGiai[] = [
  // ═══════════════════════════════════════════════════════════════════════
  // PHẦN CHUNG CẶP TUẦN-TRIỆT (tag ['Tuần', 'Triệt'])
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'tuan-triet-tinh-chat-chung',
    title: 'Tuần Triệt - Bộ Tứ Không, ngăn trở chặn đứng',
    sao: ['Tuần', 'Triệt'],
    doUuTien: 36,
    tomTat: `**Tuần** và **Triệt** cùng Địa Không, Thiên Không hợp thành bộ Tứ
Không — chuyên ngăn trở, chặn đứng và giảm chế mọi sự tại nơi chúng đóng.

Triệt thuộc Kim, Tuần thuộc Hỏa; cả hai đều mang hóa khí Tùy Tinh. Triệt
thiên về bế tắc, chướng ngại và phá hủy đột ngột; Tuần thiên về trắc trở
dai dẳng, xoay trở chậm chạp.

Vai trò chung của hai sao:

- Mang khí "Không Vong" — trống rỗng, mất mát, đi vắng
- Như bức tường thành chặn ngang con đường, ngăn mọi giao thông qua lại
- Chi phối tất cả các sao đồng cung, không vị nể bất cứ sao nào

Hai mặt của Tuần Triệt:

- Tại nơi tốt tươi nhiều cát tinh: đáng tiếc, mọi sự tốt đẹp bị ngăn trở,
  không được bộc phát
- Tại nơi có sát bại tinh: như "trại cải tạo" hữu ích, không cho những kẻ
  lưu manh gây hại
- Có thể nửa xấu nửa tốt tùy vị trí

Cảnh báo: hai sao này có khả năng biến tốt thành xấu và xấu thành tốt.
Hiệu lực nghịch đảo này dễ làm lạc hướng luận đoán nếu cân nhắc không
tinh vi.`,
  },

  {
    id: 'tuan-triet-anh-em-triet-manh-tuoi-tre',
    title: 'Quan hệ Tuần - Triệt: Triệt mạnh tuổi trẻ, Tuần mạnh về già',
    sao: ['Tuần', 'Triệt'],
    doUuTien: 35,
    tomTat: `Tuần và Triệt như anh em ruột thịt — cùng ý nghĩa ngăn cản, song
Triệt mạnh bạo hơn Tuần.

Phân biệt vai trò:

- Triệt như anh cả, mạnh bạo và dữ dội hơn — bức tường chắn ngang đường,
  không cho ai đi qua. Triệt báo hiệu sự bế tắc, chướng ngại lớn, lụi
  bại nặng nề.
- Tuần như em trai, dịu hơn — chiếc phanh xe làm tốc độ chậm dần lại.
  Tuần báo hiệu khó khăn và ngăn trở mềm hơn.

Hiệu lực theo thời gian khác biệt rõ rệt:

- Triệt mạnh nhất tới khoảng 30 tuổi (tam thập nhi lập). Từ giai đoạn ấy
  đương số đã tự lập, không còn chịu ảnh hưởng nặng của gia đình; chủ
  mệnh có thể vùng vẫy, tự do, làm những điều trước kia chưa thể.
- Tuần thì ngược lại — về lâu dài càng ngày càng mạnh mẽ, đeo bám đến
  suốt cuộc đời.

Hai sao có vòng mở khóa lẫn nhau: vào vận có Tuần thì mở Triệt (loại bỏ
tạm thời tác dụng Triệt), vào vận có Triệt thì mở Tuần. Khi được mở khóa,
đương số tha hồ tung tăng bay nhảy. Tuy nhiên nếu nơi đó có nhiều sát bại
tinh thì phải dè chừng, tai họa có thể tới gần.`,
  },

  {
    id: 'tuan-triet-vo-chinh-dieu-mo-neo-vung-chac',
    title: 'Tuần Triệt + Vô Chính Diệu - Mỏ neo vững chắc',
    sao: ['Tuần', 'Triệt'],
    doUuTien: 60,
    tomTat: `Khi Tuần Triệt đóng tại cung Vô Chính Diệu, hai sao trở thành mỏ
neo giúp con thuyền không người lái trở nên vững chắc.

Cung Vô Chính Diệu vốn là nơi vô chủ, không có chính tinh tọa thủ, nên
thường bị lung lay, xoay chuyển bởi tác nhân bên ngoài. Tuần Triệt khi
ấy biến thành bức tường vững chắc kiên cố, luôn bảo vệ nơi chúng đóng
khỏi tác nhân bên ngoài và bền bỉ với thời gian.

Cấp độ đẹp:

- Vô Chính Diệu đủ Tứ Không (Tuần, Triệt, Thiên Không, Địa Không): rất đẹp
- Vô Chính Diệu có Tam Không: đẹp
- Vô Chính Diệu có Nhị Không: tầm thường
- Vô Chính Diệu chỉ Nhất Không: kém`,
  },

  {
    id: 'tuan-triet-dac-dia-cau-phu',
    title: 'Triệt đáo Kim cung, Tuần lâm Hỏa địa - Đắc địa',
    sao: ['Tuần', 'Triệt'],
    doUuTien: 60,
    tomTat: `Câu phú "Triệt đáo Kim cung, Tuần lâm Hỏa địa" mô tả vị trí đắc
địa của hai sao này.

- Triệt đắc địa tại hai cung Thân và Dậu, ứng với tuổi can Giáp - Kỷ
- Tuần đắc địa tại hai cung Tỵ và Ngọ, ứng với tuần Giáp Thân và Giáp Ngọ

Tại vị trí đắc địa, Tuần Triệt chỉ ngăn trở và chặn đứng sát bại tinh
(không cho bộc lộ); với cát tinh thì tiếp tục phát huy, không động chạm.
Đây là cách đẹp nhất của Tuần Triệt — giới luận đoán xưa nay rất ưa thích
khi gặp Tuần Triệt đứng đúng vị trí đắc địa của chúng.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP CHUNG CỦA TUẦN TRIỆT
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'tuan-triet-niem-dau-thieu-nien-tan-kho',
    title: 'Tuần Triệt niên đầu, thiếu niên tân khổ',
    sao: ['Tuần', 'Triệt'],
    cung: ['Mệnh'],
    doUuTien: 70,
    tomTat: `Câu phú "Tuần Triệt niên đầu, thiếu niên tân khổ" mô tả cảnh
Tuần Triệt thủ Mệnh: tuổi trẻ đương số lận đận, nghèo cực, bôn ba.

Đặc trưng của cách này là tuổi trẻ thường phải lận đận, nghèo, cực, bôn
ba và đau ốm; chuyện học tập gặp nhiều trắc trở. Cảnh khổ càng rõ nét
khi Tuần Triệt đi theo hai đại vận đầu đời của đương số.

Có một ngoại lệ đáng lưu ý: nếu Mệnh đắc Tuần Triệt hợp cách, đồng thời
các cung Phúc Đức, Phụ Mẫu và Huynh Đệ đều đẹp thì cảnh khổ tuổi trẻ
cũng không đáng ngại.

Về tính cách, đương số thường ít nói, lầm lì, không thích bộc lộ ra
ngoài mà cất giấu mọi thứ bên trong. Tuổi trẻ hay gặp trắc trở ngăn cản
khiến chủ mệnh dễ trở nên trầm tính, không muốn chia sẻ.

Khi sát bại tinh đánh chiếm cung Mệnh, đương số trở thành người nóng
tính, nhiều mưu mô — nhưng vẫn kiểm soát được mình, không để tật xấu và
thủ đoạn bộc lộ ra. Kết quả là một con người rất giỏi, khó ai qua mắt.

Đối với người sinh bất phùng thời, tuổi trẻ dễ gặp tai họa bất ngờ.
Càng lớn lên (Triệt giảm dần) mọi thứ càng tốt hơn, song Tuần thì ngược
lại — càng ngày cản trở càng mạnh mẽ hơn.`,
  },

  {
    id: 'tuan-triet-nam-trieu-nu-tuan',
    title: 'Nam ưa Triệt, Nữ ưa Tuần',
    sao: ['Tuần', 'Triệt'],
    doUuTien: 50,
    tomTat: `Một quy tắc giới tính đáng nhớ: nam nhân thường ưa Triệt hơn
Tuần, còn nữ nhân thì ngược lại — ưa Tuần hơn Triệt.

Với nam mệnh, gặp Tuần thì càng về già càng nhiều gian truân, cản trở,
khó ngóc đầu lên được. Gặp Triệt thì chỉ khó khăn tuổi trẻ, đồng thời
sự ngăn cản ấy lại tạo nên ý chí và quyết tâm thay đổi.

Với nữ mệnh thì ngược lại: Tuần dịu hơn nên hợp với phụ nữ; Triệt mạnh
quá, dễ gây trắc trở quá mức cho nữ nhân.`,
  },

  {
    id: 'tuan-triet-tu-vi-thien-tuong-bai-chuc',
    title: 'Tuần Triệt + Tử Vi/Thiên Tướng/Tướng Quân/Quốc Ấn - Bãi chức mất quyền',
    sao: ['Tuần', 'Triệt'],
    ketHop: ['Thiên Tướng', 'Tướng Quân', 'Quốc Ấn'],
    doUuTien: 60,
    tomTat: `Khi Tuần Triệt gặp Thiên Tướng, Tướng Quân hoặc Quốc Ấn, công
danh đương số lâm cảnh "treo cao ngã đau".

Công danh khó cao, dễ bị sa thải hoặc mất chức. Riêng Triệt đi với Thiên
Tướng, Tướng Quân hoặc Tử Vi còn dễ dính tai họa nguy hiểm tới tính mạng.

Cách Tử Vi + Thiên Tướng + Tuần Triệt khắc họa rõ nhất kiểu người dễ gặp
tai nạn ốm đau, hay nhụt chí thay đổi, công danh không cao và nhiều lần
bị mất chức đuổi việc.`,
  },

  {
    id: 'triet-tham-lang-giam-tho',
    title: 'Triệt + Tham Lang - Giảm thọ',
    sao: ['Triệt'],
    ketHop: ['Tham Lang'],
    doUuTien: 60,
    tomTat: `Khi Tham Lang gặp Triệt, đương số bị giảm thọ.

Tham Lang vốn là sao Thọ Tinh; gặp Triệt thì bị cắt đứt, tuổi thọ giảm
sút rõ rệt. Bù lại, tính tham dục, đào hoa và hưởng lạc vốn có của Tham
Lang cũng giảm đi, chuyển sang tập trung trí tuệ và sự khéo léo.`,
  },

  {
    id: 'tuan-triet-cu-mon-ty-ngo-thach-trung-an-ngoc',
    title: 'Tuần Triệt + Cự Môn Tý/Ngọ - Thạch trung ẩn ngọc',
    sao: ['Tuần', 'Triệt'],
    chi: ['Tý', 'Ngọ'],
    ketHop: ['Cự Môn'],
    doUuTien: 75,
    tomTat: `Tuần Triệt đi cùng Cự Môn tại Tý hoặc Ngọ làm thành cách
"Thạch trung ẩn ngọc" — ngọc ẩn trong đá.

Đương số trở thành con người vô cùng thông minh và sắc sảo, đồng thời
được giảm chế tính thị phi, nói nhiều vốn có của Cự Môn. Cự Môn nguyên
là ám tinh kèm thị phi, nay nhờ Tuần Triệt biến thành trí tuệ ẩn — như
viên ngọc quý ẩn trong khối đá thô. Đây là một trong những cách cực đẹp
của Cự Môn.`,
  },

  {
    id: 'tuan-triet-am-duong-ham-tang-sang',
    title: 'Tuần Triệt + Thái Âm Thái Dương HÃM - Tăng sáng',
    sao: ['Tuần', 'Triệt'],
    ketHop: ['Thái Âm', 'Thái Dương'],
    doUuTien: 65,
    tomTat: `Tuần Triệt đi cùng Thái Âm và Thái Dương ở Hãm địa lại là cách
tốt — làm tăng sáng cho cả Nhật và Nguyệt.

Bình thường Tuần Triệt giảm cát tinh, song với Nhật Nguyệt hãm (vốn
không có ánh sáng) thì ngược lại: Tuần Triệt làm tăng sáng cho Nhật
Nguyệt. Đây là cách hóa giải đặc biệt cho Nhật Nguyệt hãm địa, phá thế
"cửa đóng" và mở ra ánh sáng.

Quy tắc đặc biệt cần ghi nhớ: Tuần Triệt đi với chính tinh Hãm thì giảm
cái xấu, nhiều khi còn tốt hơn cả vị trí miếu vượng.`,
  },

  {
    id: 'tuan-triet-thien-phu-phu-phung-khong',
    title: 'Tuần Triệt + Thiên Phủ - Phủ phùng Không, kho rỗng',
    sao: ['Tuần', 'Triệt'],
    ketHop: ['Thiên Phủ'],
    doUuTien: 60,
    tomTat: `Tuần Triệt gặp Thiên Phủ thành cách "Phủ phùng Không" — chủ về
cái kho rỗng.

Thiên Phủ vốn là Tài Tinh, kho cất của; khi gặp Tuần hay Triệt thì
"kho rỗng": đương số khó tích lũy được tài sản, của cải, tài lộc hao
hụt thất thoát. Đây là cách xấu của Thiên Phủ.`,
  },

  {
    id: 'triet-thien-ma-vo-chong-bo-nhau',
    title: 'Triệt + Thiên Mã - Vợ chồng bỏ nhau',
    sao: ['Triệt'],
    ketHop: ['Thiên Mã'],
    cung: ['Phu Thê'],
    doUuTien: 55,
    tomTat: `Triệt đi cùng Thiên Mã tại cung Phu Thê khiến vợ chồng bỏ nhau
rất dễ dàng.

Vợ chồng đường ai nấy đi, có khi vợ chồng ôm con bỏ về nhà mẹ. Mã chủ
di chuyển, Triệt chủ cắt đứt — khi gộp lại thì sự ly tán diễn ra nhanh
chóng, đặc biệt ứng vào mối tình đầu của đương số.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // TUẦN TRIỆT VÀO HẠN
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'tuan-triet-vao-han',
    title: 'Tuần Triệt vào hạn - Hai mặt nghịch đảo',
    sao: ['Tuần', 'Triệt'],
    doUuTien: 50,
    tomTat: `Khi Tuần Triệt vào hạn, hiệu lực nghịch đảo của hai sao thể
hiện rất mạnh.

Cơ chế mở khóa hoạt động chéo: hạn vào Triệt thì mở Tuần, hạn vào Tuần
thì mở Triệt.

Hai mặt của hạn:

- Khi gặp sao sáng sủa, hạn lại trở nên mờ ám, mưu sự trắc trở thất bại
- Khi gặp sao xấu xa, hạn ngược lại trở nên sáng sủa, dù ban đầu có
  vướng trắc trở

Cảnh báo dành cho người luận đoán: cung Hạn gặp Tuần Triệt rất đáng lưu
ý. Hai sao này có hiệu lực mạnh ở các đại tiểu hạn, có thể biến tốt
thành xấu và xấu thành tốt; hiệu lực nghịch đảo dễ làm lạc hướng luận
đoán.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // SAO TRIỆT TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'triet-tai-menh',
    title: 'Triệt tại Mệnh - Vất vả tự lập từ sớm',
    sao: ['Triệt'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `**Triệt** thủ Mệnh báo trước một quãng đời thiếu thời vất vả
nghèo khổ, đương số phải tự lập từ rất sớm.

Về diện mạo, đương số có dáng vóc chắc khỏe, hơi đậm; khuôn mặt nghiêm
nghị; thuở nhỏ hay ốm đau khó nuôi và dễ để lại sẹo hoặc dấu vết trên
thân thể.

Tính cách của chủ mệnh kín đáo, thận trọng, ít lời; bên trong chất chứa
nhiều sự từng trải, dễ "ngộ" ra chân lý sau những biến cố lớn.

Khi Triệt đi cùng cát tinh như Thiên Lương, Văn Xương hoặc Văn Khúc,
đương số có tính cách điềm đạm khôn ngoan và về sau dễ thành công.
Ngược lại, khi hội với sát tinh Kình Đà hoặc Hỏa Linh, chủ mệnh dễ bi
quan, tự ti, bất an và khó vượt qua nghịch cảnh.

Trên đường công danh, Triệt như vách ngăn khiến sự nghiệp lắm lần trắc
trở: cơ hội đến nhưng tuột khỏi tay, đương số thường phải đi đường vòng
mới đạt được điều mình muốn.

Về phúc thọ, đương số trải qua nhiều biến động bất ngờ, thăng trầm khó
đoán trước. Khi Triệt đi với cát tinh, phúc lộc hao hụt, được rồi lại
mất. Khi hội với hung sát tinh, Triệt lại trở thành "lưỡi kéo cắt họa" —
nhiều phen thoát nạn trong gang tấc, giữ được tính mạng.

Trường hợp Vô Chính Diệu kèm Tam Không hoặc Tứ Không, đương số làm nên
được danh phận song không bền, tuổi niên thiếu vẫn vất vả.`,
  },

  {
    id: 'triet-menh-phu-mau-mo-coi',
    title: 'Triệt tại Mệnh và Phụ Mẫu - Mồ côi sớm',
    sao: ['Triệt'],
    cung: ['Mệnh', 'Phụ Mẫu'],
    doUuTien: 70,
    tomTat: `Khi Triệt đồng thời đóng tại Mệnh và Phụ Mẫu, đương số có thể
mồ côi sớm hoặc sớm phải ra đời tự lập.

Phúc ấm cha mẹ bị chặn đứng, khiến chủ mệnh phải tự lập từ nhỏ, thiếu
hẳn sự nâng đỡ từ phía gia đình.`,
  },

  {
    id: 'triet-tai-phu-mau',
    title: 'Triệt tại Phụ Mẫu',
    sao: ['Triệt'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Triệt đóng tại Phụ Mẫu báo hiệu sự hụt hẫng tình thân — cha mẹ
mất sớm, ly tán, hoặc còn đủ song khó gần gũi và ít gắn bó.

Tính chất triệt tiêu khiến phúc ấm tổ tiên cùng sự nâng đỡ giảm sút
mạnh, con cái khó cậy nhờ. Khi cung này hội nhiều sát tinh, cha mẹ dễ
đoản thọ, nhất là khi Nhật Nguyệt lạc hãm hoặc bị Không Kiếp chiếu.

Mặt tích cực: đối diện nghịch cảnh, Triệt giảm nhẹ hung họa. Nếu cung
Phụ Mẫu có cát tinh như Thiên Lương, Thiên Đồng, Tả Hữu thì Triệt khiến
phần tốt đẹp suy giảm, tình thương không trọn vẹn — bù lại đương số ít
được che chở nên buộc phải dựa vào bản thân, sớm rèn nghị lực.`,
  },

  {
    id: 'triet-tai-phuc-duc',
    title: 'Triệt tại Phúc Đức',
    sao: ['Triệt'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `Triệt cư Phúc Đức khiến gia tộc thiếu hòa thuận, dễ ly tán.

Phần phúc đức bị trục trặc trên một phương diện nào đó: gia tộc thiếu
hòa thuận và dễ ly tán; phúc phần truyền lại không trọn vẹn; đương số
khó được hưởng may mắn và phúc phần do tổ tiên để lại. Lương duyên cùng
may mắn cũng giảm bớt, dễ muộn vợ muộn chồng. Mồ mả tổ tiên thường ở vị
trí kém, hay bị một thứ gì đó vây quanh hoặc chắn ngang phía trước mặt.

Trường hợp đặc biệt, Triệt đi cùng Dương Thỉ thì dòng họ thất tự, phải
lập con nuôi.

Hai pha của Triệt tại Phúc:

- Tuổi trẻ không nhiều may mắn, đương số phải tự tôn bồi phúc đức
- Càng về già càng được hưởng phước đức ấy

Khi Vô Chính Diệu đi cùng Triệt, phúc khí giảm rối ren, không bị tiêu
hao. Ngược lại, hội với Kình Đà, Hỏa Linh, Không Kiếp thì hạn xấu càng
nặng — gia đình dễ ly tán, tinh thần bất an.`,
  },

  {
    id: 'triet-tai-dien-trach',
    title: 'Triệt tại Điền Trạch',
    sao: ['Triệt'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Triệt đóng tại Điền Trạch khiến đất đai nhà cửa khó giữ, dễ
hao hụt sang nhượng.

Tài sản đổi thay nhiều lần và đương số chỉ có của trong một giai đoạn
nào đó; có khi tài sản chỉ tồn tại nhưng không đứng tên mình. Người làm
ra của song phải chật vật mới giữ được.

Khi Triệt đi cùng Tả Hữu, Thiên Phủ, Lộc Tồn, đương số vẫn có nơi ăn
chốn ở nhưng không bền — dựng rồi phá, mua rồi lại bán.

Khi cung Điền hội nhiều hung sát tinh, Triệt lại trở thành "lá chắn" —
giảm bớt tranh chấp đất cát hay nguy cơ phá sản.

Về vị trí nhà ở, Triệt cư Điền thường khiến nhà nằm tại ngã ba hoặc ngã
tư đường.

Kết hợp hai cung: Triệt cư Phúc - Điền thì đương số không được hưởng
di sản tổ phụ để lại; Triệt cư Điền - Quan thì tuổi trẻ vất vả, khó
tích lũy tiền bạc của cải.`,
  },

  {
    id: 'triet-tai-quan-loc',
    title: 'Triệt tại Quan Lộc',
    sao: ['Triệt'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `Triệt cư Quan Lộc khiến công danh đương số lận đận, gián đoạn.

Công danh phải khó nhọc mới làm nên, như thuyền đi ngược gió: cơ hội có
song khó giữ trọn, đương số phải chịu vất vả trong một thời gian dài.
Công danh thường khó cao, vào đời muộn, sự nghiệp nhiều lần gián đoạn —
chủ mệnh phải tất tả ngược xuôi mới mong giữ được chỗ đứng.

Khi Triệt đi cùng Thiên Tướng hoặc Tướng Quân, đương số có thể bị bãi
chức hoặc gặp tai nạn trong công vụ. Khi gặp sao cát như Tử Vi, Thiên
Phủ, Khôi Việt, Hóa Quyền, công danh hiển đạt nhưng chóng tàn, quyền
uy khó bền.

Hội hung sát tinh Phá Quân, Kình Đà, Không Kiếp thì Triệt trở thành yếu
tố cứu giải, giảm bớt phá bại nặng nề.

Trường hợp Triệt cư Quan - Nô: trong công việc đương số không tạo được
mối quan hệ với bạn bè, đồng nghiệp, cấp dưới — vì thế khó phát triển.

Nghề hợp với cách này: học thuật, nghiên cứu hoặc các công việc không
nặng tính bon chen.`,
  },

  {
    id: 'triet-tai-no-boc',
    title: 'Triệt tại Nô Bộc',
    sao: ['Triệt'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Triệt cư Nô Bộc khiến tôi tớ thay đổi, ra vào luôn — không ai
ở lâu dài bên đương số.

Mối quan hệ "có cũng như không": người ta hứa hẹn nhiều nhưng ít ai giúp
đỡ trọn vẹn, tình bạn kém bền. Đương số phải dựa vào sức mình nhiều hơn
là mong chờ trợ lực từ bên ngoài.

Khi cung Nô có Tả Hữu, Khôi Việt, Xương Khúc, Thiên Phúc, Triệt làm
giảm khả năng hỗ trợ, khiến bản mệnh bị bỏ rơi đúng lúc cần. Ngược lại,
khi đi với hung sát tinh như Kình Đà, Hóa Kỵ, Không Kiếp thì Triệt hóa
giải tính xấu, giúp đương số tránh được phản trắc và lừa gạt.

Khi Triệt cư Nô - Di đồng thời, đương số ra ngoài ít bạn ít bè, không
hay giao tiếp; lúc có việc cần thì không có ai bên cạnh.`,
  },

  {
    id: 'triet-tai-thien-di',
    title: 'Triệt tại Thiên Di',
    sao: ['Triệt'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `Triệt đóng tại Thiên Di khiến đương số bôn ba bên ngoài lắm
vấp ngăn trở.

Đi xa hay lập nghiệp khó thành toại; chủ mệnh sống khép kín, dè dặt xã
giao và ít mở lòng với người lạ. Vận số khó phát triển ở môi trường
ngoại vi, xuất ngoại lắm trắc trở. Đương số là người ít ra ngoài, ít
quan hệ giao tiếp — đặc biệt rõ nét khi Tuần Triệt đóng đồng thời tại
hai cung Nô - Di.

Khi đồng cung với cát tinh như Thiên Mã, Lộc Tồn, Tả Hữu, Xương Khúc,
Khôi Việt, Triệt giảm vận may, bạn bè xa xứ khó nhờ cậy. Hội hung sát
tinh Kình Đà, Không Kiếp, Linh Hỏa, Hóa Kỵ thì Triệt cắt bớt hung họa,
giảm tai ương đường xa.

Trường hợp Tuần Triệt cư hai cung Di - Tật là cách tốt: đương số ra
ngoài cẩn trọng, ít dính tai vạ và bệnh tật.`,
  },

  {
    id: 'triet-tai-tat-ach',
    title: 'Triệt tại Tật Ách - Vị trí ĐẸP',
    sao: ['Triệt'],
    cung: ['Tật Ách'],
    doUuTien: 80,
    tomTat: `Tật Ách là vị trí "đẹp" của Triệt — nơi Triệt phát huy khả
năng đánh tan bệnh tật và tai họa.

Lá số rất cần Tuần Triệt tại Tật Ách, vì nhờ hai sao này mà bệnh, tật
và họa được tiêu tán hoặc giảm thiểu nhiều, sức khỏe và may mắn được
bảo đảm hơn.

Tính chất chặn đứng của Triệt giúp giảm nhẹ bệnh tật và tai nạn, đương
số nhiều lần thoát hiểm trong gang tấc. Khi cung Tật Ách có nhiều hung
tinh như Kình Đà, Linh Hỏa, Không Kiếp, Triệt lập tức phát huy khả năng
che chắn — hóa hung thành cát, hạn nặng thành nhẹ.

Hai mặt của Triệt tại Tật:

- Khi cung có nhiều phúc tinh như Thiên Lương, Thiên Đồng, Thái Âm,
  Thiên Phủ, Triệt khiến phúc khí hao tổn, sức khỏe giảm sút; đương số
  dễ mắc bệnh vặt hoặc bị giảm tuổi thọ
- Người có Triệt tại Tật thường có cơ địa nhạy cảm, dễ đau ốm song
  cũng chóng hồi phục`,
  },

  {
    id: 'triet-tai-tai-bach',
    title: 'Triệt tại Tài Bạch',
    sao: ['Triệt'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `Triệt cư Tài Bạch khiến tài lộc đương số hao tán, gián đoạn.

Con đường kiếm tiền dễ bị ngắt quãng, khả năng kiếm tiền và thu nhập bị
cản trở. Đương số có khi không có tài sản, hoặc chỉ có trong một giai
đoạn; làm ra của nhưng phải chật vật.

Khi cung Tài có nhiều chính tinh miếu vượng như Vũ Khúc, Thiên Phủ, Thái
Dương, Thái Âm, tiền bạc khó tụ — làm nhiều mà hưởng ít, cơ hội đến rồi
vuột mất. Hội hung tinh Kình Đà, Linh Hỏa, Không Kiếp thì Triệt lại phát
huy mặt tích cực, ngăn chặn phá hao nặng và giúp đương số tránh được
cảnh trắng tay.

Khi Tuần Triệt cư đồng thời Tài - Tật, đồng tiền kiếm ra chậm và ít,
song bù lại hạn chế dính tai họa, bệnh tật.

Nét đặc trưng chung: thu nhập của đương số thường ở mức đủ ăn đủ tiêu,
ít khi giàu sang hiển hách.`,
  },

  {
    id: 'triet-tai-tu-tuc',
    title: 'Triệt tại Tử Tức',
    sao: ['Triệt'],
    cung: ['Tử Tức'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Đức', 'Phúc Đức'],
    doUuTien: 78,
    tomTat: `Triệt cư Tử Tức báo hiệu cảnh sát con — đặc biệt là con đầu
lòng khó nuôi.

Sinh con đầu lòng khó khăn, đương số dễ gặp cảnh chậm con; con đầu khó
nuôi hoặc cha mẹ con cái thiếu gần gũi với nhau.

Khi Triệt thủ Tử Tức, đương số dễ bị xảy thai hoặc hao hụt con cái; con
cái sau này hay gặp trắc trở và sống xa cha mẹ.

Khi Triệt hợp với phúc tinh như Tả Hữu, Xương Khúc, Thiên Đức, Phúc Đức,
dù số lượng con bị giảm song con cái đều hiếu thuận, thành đạt và biết
báo hiếu cha mẹ.

Ngược lại, khi Triệt đi cùng Kình Đà, Không Kiếp, Linh Hỏa, Hóa Kỵ,
chuyện sinh nở càng gian nan, con cái ít ỏi, dễ xa cách hoặc không nhờ
cậy được. Trường hợp xấu nhất là cách trở âm dương, con sinh ra yểu
mệnh.`,
  },

  {
    id: 'triet-tai-phu-the',
    title: 'Triệt tại Phu Thê',
    sao: ['Triệt'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `Triệt cư Phu Thê khiến duyên tình trắc trở, hôn nhân tới muộn.

Mối tình đầu của đương số thường thất bại, dễ lỡ dở hoặc trải qua nhiều
trắc trở. Sau khi kết hôn, vợ chồng vẫn có khoảng cách, hay sinh khắc
khẩu và ít khi hòa hợp trọn vẹn.

Tình huống xấu nhất là báo hiệu cách trở âm dương: vợ chồng dễ chia ly
hay góa bụa.

Một cách hóa giải truyền thống là lấy người khác làng, khác tỉnh — song
nhân duyên ấy cũng phải trải qua khó khăn mới đến được với nhau.

Khi Triệt đi cùng Thiên Mã, vợ chồng bỏ nhau rất dễ dàng, có khi vợ
chồng ôm con bỏ về nhà mẹ. Triệt cư Phu Thê còn dễ tạo cảnh "tưởng sắp
cưới rồi lại thôi".

Khi Triệt hội Kình Đà, Linh Hỏa, Hóa Kỵ, hôn nhân càng nhiều biến động,
kết sớm dễ tan. Ngược lại, khi đồng cung với Tả Hữu, Xương Khúc, Thiên
Hỷ, Hồng Loan, Triệt tiết chế điểm khắc — tình cảm sau thử thách càng
thêm bền chặt.`,
  },

  {
    id: 'triet-tai-huynh-de',
    title: 'Triệt tại Huynh Đệ',
    sao: ['Triệt'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Triệt cư Huynh Đệ khiến anh chị em xung khắc hoặc ít anh chị em.

Tình cảm anh em thiếu gắn bó, mỗi người một phương; bản mệnh ít được
nhờ cậy, không khí gia đình lạnh nhạt và thiếu hòa khí.

Trường hợp đặc biệt: Triệt đi cùng Dương Thỉ dễ khiến anh cả hoặc chị
cả mất sớm.

Khi gặp Kình Đà, Hỏa Linh, Hóa Kỵ thì sự chia cách càng rõ — quan hệ
anh em nhạt dần, thậm chí hiềm khích kéo dài.

Mặt tích cực của Triệt là làm giảm xung đột gay gắt và hạn chế tranh
chấp lớn trong gia tộc. Khi hội nhiều cát tinh và phúc tinh, anh em
tuy giữ khoảng cách, ít thân thiết, song vẫn tôn trọng nhau và sẵn
sàng giúp đỡ khi cần.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // TRIỆT KẾT HỢP CÁC CHÍNH TINH
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'triet-de-tinh-mat-uy-quyen',
    title: 'Triệt + Tử Vi/Thiên Phủ/Liêm Trinh/Vũ Khúc - Bị mất việc giáng chức',
    sao: ['Triệt'],
    ketHop: ['Tử Vi', 'Thiên Phủ'],
    doUuTien: 60,
    tomTat: `Khi Triệt đi cùng Tử Vi, Thiên Phủ, Liêm Trinh hoặc Vũ Khúc,
đương số dễ bị mất việc, giáng chức.

Công danh dễ mất, chức quyền khó bền. Đương số là người giỏi giang
nhưng lại dễ bị gạt ra bên lề, không giữ được chức quyền lâu dài. Năng
lực không được trọng dụng, công việc dễ dang dở; có khi chủ mệnh rơi
vào cảnh cô độc, không có đất dụng võ.`,
  },

  {
    id: 'triet-am-duong-suy-yeu-cong-danh',
    title: 'Triệt + Thái Dương/Thái Âm - Suy yếu công danh hao tổn phúc lộc',
    sao: ['Triệt'],
    ketHop: ['Thái Dương', 'Thái Âm'],
    doUuTien: 60,
    tomTat: `Khi Triệt đi cùng Thái Dương hoặc Thái Âm đắc địa, công danh
suy yếu, phúc lộc hao tổn.

Triệt đi với Thái Dương đắc khiến sự nghiệp đi xuống, trí tuệ kém sáng,
nam giới dễ suy thọ. Triệt đi với Thái Âm đắc thì mất phú quý, nữ giới
sinh nở khó khăn và sức khỏe kém.

Riêng trường hợp Âm Dương ở Hãm địa thì lại nhờ Tuần Triệt mà hóa giải
được phần nào — Tuần Triệt làm tăng sáng cho Nhật Nguyệt hãm.`,
  },

  {
    id: 'triet-sat-pha-tuong-mat-uy-quyen',
    title: 'Triệt + Thất Sát/Phá Quân/Tướng Quân - Mất uy quyền nhiều va chạm',
    sao: ['Triệt'],
    ketHop: ['Thất Sát', 'Phá Quân', 'Tướng Quân'],
    doUuTien: 55,
    tomTat: `Khi Triệt đi cùng Thất Sát, Phá Quân hoặc Tướng Quân, đương số
mất uy quyền và gặp nhiều va chạm.

- Triệt đi với Thất Sát: như lưỡi gươm bị đánh gãy, mất đi uy lực
- Triệt đi với Phá Quân: tính phá phách giảm, hội cùng Triệt thì thận
  trọng hơn, song vẫn lắm thăng trầm
- Triệt đi với Tướng Quân: bị biến đổi thành tính nóng nảy, dễ gây xung
  đột, vướng họa bất ngờ — nhất là nơi công cộng`,
  },

  {
    id: 'triet-cu-co-tham-bot-thi-phi',
    title: 'Triệt + Cự Môn/Thiên Cơ/Tham Lang - Bớt thị phi',
    sao: ['Triệt'],
    ketHop: ['Cự Môn', 'Thiên Cơ', 'Tham Lang'],
    doUuTien: 55,
    tomTat: `Khi Triệt đi cùng Cự Môn, Thiên Cơ hoặc Tham Lang, đương số bớt
thị phi và chuyển hóa cái lực ấy thành trí tuệ.

- Triệt đi với Cự Môn: bớt tính khẩu nghiệp, dễ thành công trong nghiên
  cứu
- Triệt đi với Thiên Cơ: Thiên Cơ vốn hoạt bát hay lỡ miệng, gặp Triệt
  trở nên thận trọng, sâu sắc
- Triệt đi với Tham Lang: giảm đào hoa và hưởng lạc, đương số tập trung
  trí tuệ và sự khéo léo, dễ đạt thành tựu nhờ biết kiềm chế bản thân

Lưu ý: Tham Lang đi với Triệt còn có thể giảm thọ — tham khảo thêm bộ
"Tham Lang giảm thọ".`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁCH HÓA GIẢI CHUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'tuan-triet-hoa-giai',
    title: 'Hóa giải Tuần Triệt - Tích phúc, kiên nhẫn, nắm thời cơ',
    sao: ['Tuần', 'Triệt'],
    doUuTien: 40,
    tomTat: `Hóa giải Tuần Triệt không phải là xóa bỏ, mà là chuyển hóa.

Tinh thần chung: biến cản trở thành rèn luyện, biến chậm trễ thành tích
lũy, từ đó đạt được thành tựu bền vững hơn.

Về tích phúc, giải nghiệp:

- Tuần Triệt chủ về hao hụt, vì vậy muốn bù đắp đương số phải tích cực
  gieo phúc, hành thiện tích đức
- Hiếu kính cha mẹ, hòa thuận họ hàng
- Tu dưỡng tâm linh qua niệm Phật, thiền và đọc sách đạo lý
- Khi gặp hạn nặng nên lễ cầu an, đi chùa chiền

Về lối sống và cách hành xử:

- Kiên nhẫn, biết "chậm mà chắc", tránh nóng vội
- Cẩn trọng ngôn từ để tránh thị phi (đặc biệt khi đi với Cự Môn,
  Tham Lang)
- Giữ gìn sức khỏe nếu Triệt đóng tại Tật, Tài hoặc Phúc
- Trong các cung Phu Thê, Huynh Đệ, Phụ Mẫu thì nhường nhịn, giữ hòa
  khí

Về thời điểm nắm bắt cơ hội: Tuần Triệt không chặn đứng mãi mãi, chỉ
ngăn trở một giai đoạn. Khi vận tốt và cát tinh chiếu, đương số nên
mạnh dạn nắm bắt. Tuần Triệt giống như cánh cửa đóng nhưng không khóa —
chỉ cần biết chờ đợi và gõ đúng thời điểm thì cửa sẽ mở.`,
  },
];
