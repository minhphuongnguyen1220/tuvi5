import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THIÊN TRÙ - Thổ, Cát Tinh (Phúc Tinh + Lộc Tinh).
 *
 * Thuộc bộ TỨ LỘC: Thiên Trù + Lộc Tồn + Hóa Lộc + Lưu Niên Văn Tinh.
 *
 * Đặc tính: PHÚC THỰC, LỘC ĂN UỐNG, NO ĐỦ, HƯỞNG THỤ, SUNG TÚC VẬT CHẤT.
 * Người có Thiên Trù giỏi NẤU ĂN, SÀNH ĂN, BIẾT HƯỞNG THỤ.
 * Hình tượng: "Có Thiên Trù trong nhà lúc nào cũng có nồi cơm nghi ngút khói".
 *
 * Hợp ngành: ẨM THỰC, NHÀ HÀNG, KHÁCH SẠN, KINH DOANH HÀNG TIÊU DÙNG.
 */
export const luanGiai_ThienTru: DoanLuanGiai[] = [
  {
    id: 'thien-tru-tinh-chat-chung',
    title: 'Thiên Trù - Đặc tính chung',
    sao: ['Thiên Trù'],
    doUuTien: 32,
    tomTat: `**Thiên Trù** thuộc nhóm phụ tinh cát tinh, ngũ hành Thổ, hóa khí vừa
là Phúc Tinh vừa là Lộc Tinh, chủ về phúc thực và lộc ăn uống. Sao này nằm
trong bộ Tứ Lộc gồm Thiên Trù, Lộc Tồn, Hóa Lộc và Lưu Niên Văn Tinh.

Đặc tính nổi bật của Thiên Trù là phúc thực, no đủ, hưởng thụ, sung túc vật
chất, đi kèm khả năng quản lý và tích trữ lương thực, của cải. Hình tượng cổ
điển ví "có Thiên Trù trong nhà lúc nào cũng có nồi cơm nghi ngút khói" —
đương số được "ăn trắng mặc trơn", cuộc sống đủ đầy, ít khi phải lo chuyện
cơm áo gạo tiền.

Tác động chính của sao là giúp đương số giỏi nấu ăn, sành ăn, biết hưởng thụ
và có cuộc sống sung túc.

Về sự nghiệp, Thiên Trù phù hợp với các ngành ẩm thực, nhà hàng, khách sạn và
kinh doanh hàng tiêu dùng.

Về duyên vận, hôn nhân thường hòa thuận; vợ chồng dễ gắn kết qua bữa cơm gia
đình hoặc những chuyến du lịch chung.

Về phúc thọ, sức khỏe đương số ổn định, ít bệnh vặt; khi ốm đau cũng nhanh
hồi phục nhờ chế độ ăn uống hợp lý.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CUNG MỆNH
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-tru-menh-dam-dang-sanh-an',
    title: 'Thiên Trù tại Mệnh - Đảm đang sành ăn nấu giỏi',
    sao: ['Thiên Trù'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Khi Thiên Trù tọa thủ Mệnh, đương số là người đảm đang, sành ăn và
nấu ăn giỏi. Cơ địa khỏe mạnh, dung nhan tươi tắn cho thấy phúc khí trời ban.

Đương số nấu ăn ngon, biết thưởng thức ẩm thực một cách tinh tế và rất khéo
léo trong việc chăm sóc gia đình cũng như những người xung quanh.

Về tính cách, đương số vui vẻ, hào sảng, biết tận hưởng cuộc sống. Có nét
duyên ngầm khiến mọi người cảm thấy thoải mái khi tiếp xúc.

Trên đường sự nghiệp, đương số thích kết bạn qua bàn ăn, chén rượu và đặc
biệt phù hợp với các ngành ẩm thực, dịch vụ, du lịch.`,
  },

  {
    id: 'thien-tru-menh-loc-ton-hoa-loc-ta-huu',
    title: 'Thiên Trù + Hóa Lộc/Lộc Tồn/Tả Phù/Hữu Bật tại Mệnh - Trời ban phúc lộc',
    sao: ['Thiên Trù'],
    cung: ['Mệnh'],
    ketHop: ['Hóa Lộc', 'Lộc Tồn', 'Tả Phù', 'Hữu Bật'],
    doUuTien: 70,
    tomTat: `Khi Thiên Trù tại Mệnh hội đủ Hóa Lộc, Lộc Tồn cùng Tả Phù, Hữu
Bật, đương số được trời ban phúc lộc ăn uống đầy đủ, ít khi thiếu thốn. Sự
nghiệp rộng mở, lại được quý nhân nâng đỡ trên mọi nẻo đường.`,
  },

  {
    id: 'thien-tru-menh-hoa-ky-khong-kiep-huong-thu-qua-da',
    title: 'Thiên Trù + Hóa Kỵ/Địa Không/Địa Kiếp tại Mệnh - Hưởng thụ quá đà',
    sao: ['Thiên Trù'],
    cung: ['Mệnh'],
    ketHop: ['Hóa Kỵ', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 60,
    tomTat: `Khi Thiên Trù tại Mệnh gặp Hóa Kỵ cùng Địa Không, Địa Kiếp, đương
số dễ sa vào hưởng thụ thái quá, lâm cảnh nợ nần và sức khỏe xuống dốc vì
tiệc tùng triền miên.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC CUNG KHÁC
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-tru-phu-mau-cha-me-kha-gia',
    title: 'Thiên Trù tại Phụ Mẫu - Cha mẹ khá giả vun vén',
    sao: ['Thiên Trù'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Khi Thiên Trù tọa Phụ Mẫu, cha mẹ của đương số có điều kiện kinh
tế khá giả, biết "tích cốc phòng cơ". Đương số từ nhỏ đã được cơm no áo ấm,
không phải chịu cảnh thiếu thốn. Cha mẹ thường có khiếu nấu nướng, thích
thưởng thức món ngon, bữa cơm gia đình lúc nào cũng tươm tất đủ đầy.`,
  },

  {
    id: 'thien-tru-phu-mau-thien-luong-ta-huu-cha-me-tho',
    title: 'Thiên Trù + Thiên Lương/Tả Phù/Hữu Bật tại Phụ Mẫu - Cha mẹ sống thọ',
    sao: ['Thiên Trù'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Thiên Lương', 'Tả Phù', 'Hữu Bật'],
    doUuTien: 68,
    tomTat: `Khi Thiên Trù tọa Phụ Mẫu đi cùng Thiên Lương, Tả Phù, Hữu Bật, cha
mẹ của đương số sung túc, sống thọ và khỏe mạnh, lại rất giỏi việc chăm sóc
gia đình.`,
  },

  {
    id: 'thien-tru-phu-mau-hoa-ky-khong-kiep-bien-co-tieu-hoa',
    title: 'Thiên Trù + Hóa Kỵ/Địa Kiếp/Địa Không tại Phụ Mẫu - Cha mẹ bệnh tiêu hóa',
    sao: ['Thiên Trù'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Hóa Kỵ', 'Địa Kiếp', 'Địa Không'],
    doUuTien: 60,
    tomTat: `Khi Thiên Trù tọa Phụ Mẫu gặp Hóa Kỵ cùng Địa Không, Địa Kiếp, gia
đình dễ gặp biến cố tài chính, hoặc cha mẹ dễ mắc các bệnh liên quan tới
tiêu hóa.`,
  },

  {
    id: 'thien-tru-phuc-duc-dong-toc-an-uong-sung-tuc',
    title: 'Thiên Trù tại Phúc Đức - Dòng họ phúc ăn uống',
    sao: ['Thiên Trù'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `Khi Thiên Trù tọa Phúc Đức, dòng họ của đương số có phúc phần ăn
uống sung túc, ít khi thiếu thốn và hay tổ chức tụ họp. Tổ tiên thường từng
làm các nghề buôn bán, ẩm thực hoặc trồng trọt chăn nuôi, để lại lộc cho
con cháu hưởng, làm ăn thuận lợi.

Khi hội Long Trì, Phượng Các, Văn Xương, Văn Khúc, phúc phần càng dày, gia
đình đông vui hòa thuận.

Khi gặp Địa Không, Địa Kiếp hay Hóa Kỵ, trong họ dễ có người ăn chơi hoang
phí, gây hao tán tổ nghiệp.`,
  },

  {
    id: 'thien-tru-thien-di-may-man-tha-huong',
    title: 'Thiên Trù tại Thiên Di - Tha hương gặp may',
    sao: ['Thiên Trù'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `Khi Thiên Trù tọa Thiên Di, đương số xuất ngoại hay làm ăn xa đều
gặp may. Đương số dễ kết giao bạn bè qua các bữa tiệc, biến mối quan hệ thành
nguồn sinh tài lộc; quen biết nhiều người có vị thế, đi đâu cũng được giúp
đỡ và mời ăn uống.

Khi đi cùng sát tinh, đương số dễ hao tài vì ăn chơi hoặc bị lừa khi đi xa.`,
  },

  {
    id: 'thien-tru-quan-loc-am-thuc-buon-ban',
    title: 'Thiên Trù tại Quan Lộc - Hợp ẩm thực buôn bán',
    sao: ['Thiên Trù'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `Khi Thiên Trù tọa Quan Lộc, đương số rất hợp với các ngành ăn
uống, nhà hàng và kinh doanh hàng tiêu dùng. Đương số "hợp vía" với nghề, có
duyên buôn bán, biết chiều lòng khách hàng; làm việc kiên trì, tỉ mỉ, làm
đâu chắc đó. Công việc hanh thông, "tiền vào như nước".

Khi gặp Hóa Kỵ cùng Địa Không, Địa Kiếp, đương số dễ thất bại do quản lý kém
và tiêu hao quá nhiều vốn.`,
  },

  {
    id: 'thien-tru-no-boc-ban-be-tiec-tung',
    title: 'Thiên Trù tại Nô Bộc - Bạn bè thân thiện qua tiệc tùng',
    sao: ['Thiên Trù'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Khi Thiên Trù tọa Nô Bộc, bạn bè, đồng nghiệp và nhân viên của
đương số đều thân thiện, dễ mến. Họ giúp đỡ trong công việc và chia sẻ niềm
vui ẩm thực qua các buổi tụ họp đầm ấm; mối quan hệ cũng được mở rộng nhờ
tiệc tùng.

Khi đi cùng Thiên Phúc, Tả Phù, Hữu Bật, cơ hội kinh doanh đến từ chính
những bữa ăn và buổi tiệc.

Khi kết hợp Địa Kiếp, Kình Dương hay Hóa Kỵ, đương số dễ bị bạn bè lợi dụng,
rơi vào cảnh "ăn cháo đá bát".`,
  },

  {
    id: 'thien-tru-dien-trach-nha-cua-am-cung',
    title: 'Thiên Trù tại Điền Trạch - Nhà cửa ấm cúng bếp đỏ lửa',
    sao: ['Thiên Trù'],
    cung: ['Điền Trạch'],
    doUuTien: 78,
    tomTat: `Khi Thiên Trù tọa Điền Trạch, gia đình đương số có đất đai vườn
tược cùng nhà cửa khang trang, bếp núc luôn đỏ lửa. Cuộc sống gia đình ấm
cúng, sung túc, "của ăn của để" dồi dào.

Khi hội Tả Phù, Hữu Bật cùng Thiên Phúc, đương số làm nông nghiệp hay kinh
doanh thực phẩm dễ phát đạt.

Khi gặp Kình Dương cùng Đà La, đương số phải tốn tiền sửa sang nhà cửa liên
tục hoặc mua sắm quá tay.`,
  },

  {
    id: 'thien-tru-tat-ach-suc-khoe-on-dinh',
    title: 'Thiên Trù tại Tật Ách - Sức khỏe ổn định ít bệnh vặt',
    sao: ['Thiên Trù'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `Khi Thiên Trù tọa Tật Ách, sức khỏe đương số ổn định, ít bệnh vặt;
khi ốm đau cũng nhanh hồi phục nhờ ăn uống hợp lý.

Tuy nhiên, theo thuyết "bệnh từ miệng mà vào", đam mê ẩm thực dễ khiến đương
số ăn uống vô độ, mắc các bệnh tiêu hóa, gan, dạ dày.

Khi gặp Thiên Lương hay Thiên Phúc, bệnh thường nhẹ và dễ chữa. Ngược lại,
khi gặp Kình Dương, Đà La hay Hóa Kỵ, bệnh dễ hóa nặng.

Lời khuyên là đương số nên ăn uống khoa học và sinh hoạt điều độ.`,
  },

  {
    id: 'thien-tru-tai-bach-nguon-tai-chinh-on-dinh',
    title: 'Thiên Trù tại Tài Bạch - Nguồn tài chính ổn định',
    sao: ['Thiên Trù'],
    cung: ['Tài Bạch'],
    doUuTien: 78,
    tomTat: `Khi Thiên Trù tọa Tài Bạch, nguồn tài chính của đương số ổn định,
ít khi túng thiếu. Tiền bạc thường đến từ kinh doanh thực phẩm, nông sản hay
dịch vụ ăn uống. Đương số biết chi tiêu hợp lý, có "của ăn của để", cuộc
sống thịnh vượng phát đạt.

Khi gặp Kình Dương cùng Hóa Kỵ, tài chính dễ thất thoát do ăn chơi, tiêu xài
quá đà.`,
  },

  {
    id: 'thien-tru-phu-the-vo-chong-hoa-thuan',
    title: 'Thiên Trù tại Phu Thê - Vợ chồng hòa thuận qua bữa cơm',
    sao: ['Thiên Trù'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `Khi Thiên Trù tọa Phu Thê, đời sống hôn nhân của đương số hòa
thuận. Vợ chồng dễ gắn kết qua bữa cơm gia đình, biết chăm sóc nhau từ
những điều nhỏ nhặt.

Khi đi cùng Văn Xương, Văn Khúc hay Lộc Tồn, bạn đời có tay nghề nấu nướng,
chi tiêu hợp lý, khiến cuộc sống thêm viên mãn.

Khi đi cùng Đào Hoa, Hóa Kỵ hay Hồng Loan, đương số dễ tốn tiền vì ăn chơi
tiệc tùng, hoặc vướng vào người thứ ba.`,
  },

  {
    id: 'thien-tru-huynh-de-anh-em-am-cum',
    title: 'Thiên Trù tại Huynh Đệ - Anh em hòa thuận thích tiệc tùng',
    sao: ['Thiên Trù'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Khi Thiên Trù tọa Huynh Đệ, anh chị em của đương số hòa thuận,
thích tiệc tùng. Họ gắn kết qua những bữa cơm đầm ấm, sẵn sàng giúp đỡ nhau
về kinh tế, hoặc cùng nhau làm ăn trong lĩnh vực thực phẩm, ăn uống.

Khi đi cùng Địa Kiếp hay Kình Dương, anh em bất hòa và dễ tranh chấp tiền
bạc.`,
  },

  {
    id: 'thien-tru-tu-tuc-bep-nha-troi',
    title: 'Thiên Trù tại Tử Tức - Bếp nhà trời con đam mê ẩm thực',
    sao: ['Thiên Trù'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Khi Thiên Trù tọa Tử Tức, con cái của đương số được mệnh danh là
"bếp nhà trời" — có niềm đam mê ẩm thực, thích ăn ngon và giỏi nấu nướng.
Các con khéo ăn khéo nói, ngoan ngoãn hiếu thảo, biết hưởng thụ cuộc sống.

Đương số tuy chi tiêu nhiều cho con nhưng nhận lại được niềm vui và phúc đức.

Khi gặp Hóa Kỵ cùng Địa Kiếp, con cái ăn chơi tiêu xài nhiều, không biết giữ
của, gây hao tán cho cha mẹ.`,
  },
];
