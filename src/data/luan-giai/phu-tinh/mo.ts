import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO MỘ - Thổ.
 *
 * Vị trí THỨ 9 trong Vòng Trường Sinh 12 sao:
 * Trường Sinh: Mộc Dục: Quan Đới: Lâm Quan: Đế Vượng: Suy
 * Bệnh: Tử: MỘ: Tuyệt: Thai: Dưỡng
 *
 * An theo CỤC.
 *
 * Đặc trưng:
 * - Sau khi "TỬ" (chết): giai đoạn NHẬP ÁO QUAN, vào quan tài, nằm im
 * dưới đất
 * - Trạng thái ĐỨNG YÊN, NẰM IM, KHÔNG THAY ĐỔI HAY CHUYỂN BIẾN
 * - Đại diện: CHẬM THAY ĐỔI, CHẬM TIẾP THU, CÙ LẦN, BẢO THỦ
 * - Mộ là năm ở DƯỚI ĐẤT: TRÍ TUỆ KHÔNG SÁNG, CHẬM HIỂU (nếu không có
 * cát tinh, văn tinh hỗ trợ)
 * - Vì là chôn cất: CẤT GIẤU, ẨN KHUẤT, BẢO VỆ
 * - Bản thân cũng KHÔNG MUỐN TIÊU TỐN nó (giữ của)
 *
 * Cách Sinh-Vượng-Mộ TAM HỢP với Trường Sinh và Đế Vượng — chu trình
 * sinh-phát-kết của một đời.
 *
 * Đặc biệt Tứ Mộ (Thìn-Tuất-Sửu-Mùi):
 * - Mộ + Thai + Tọa tại Tứ Mộ = mồ mả tốt đẹp con cháu
 * - Mộ + Tam Thai + Bát Tọa tại Tứ Mộ = văn võ kiêm toàn
 */
export const luanGiai_Mo: DoanLuanGiai[] = [
  {
    id: 'mo-tinh-chat-chung',
    title: 'Mộ - Đặc tính chung',
    sao: ['Mộ'],
    doUuTien: 33,
    tomTat: `**Mộ** là phụ tinh chủ về tích tụ và ẩn khuất, đứng ở vị trí thứ 9
trong vòng Trường Sinh và an theo Cục của lá số. Ngũ hành sao thuộc
Thổ.

Đặc tính chính: sau khi "Tử" (chết), Mộ là giai đoạn nhập áo quan, vào
quan tài, nằm im dưới đất. Sao chủ về chôn cất, chậm chạp, chậm tiến,
nhầm lẫn, ngu độn, ngăn trở công việc; đồng thời cũng mang nét cất
giấu, ẩn khuất, bảo vệ.

Trạng thái đứng yên, nằm im, không thay đổi của sao đại diện cho việc
chậm thay đổi, chậm tiếp thu, cù lần, bảo thủ. Vì là năm dưới đất nên
trí tuệ đương số không sáng, chậm hiểu nếu không có cát tinh hay văn
tinh hỗ trợ.

Trong vòng Trường Sinh, Sinh - Vượng - Mộ luôn tam hợp: Trường Sinh,
Đế Vượng và Mộ tạo thành chu trình sinh - phát - kết của đời người.

Đặc tính tích trữ rất rõ: vì là chôn cất nên sao mang tính cất giấu,
ẩn khuất, bảo vệ; bản thân chủ mệnh cũng không muốn tiêu tốn của
cải, có xu hướng giữ của và tiết kiệm.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'mo-tam-thai-bat-toa-tu-mo-van-vo-kiem-toan',
    title: 'Mộ + Tam Thai + Bát Tọa tại Tứ Mộ - Văn võ kiêm toàn',
    sao: ['Mộ'],
    chi: ['Thìn', 'Tuất', 'Sửu', 'Mùi'],
    ketHop: ['Tam Thai', 'Bát Tọa'],
    doUuTien: 65,
    tomTat: `Khi Mộ đi cùng Tam Thai và Bát Tọa tại đất **Tứ Mộ** (Thìn,
Tuất, Sửu, Mùi), đương số có tài năng văn võ kiêm toàn, đặc biệt nổi
trội — đây là cách cục đặc biệt tốt vì Mộ cùng Tam Thai và Bát Tọa
cộng hưởng tại đất gốc của Mộ.`,
  },

  {
    id: 'mo-thai-toa-tu-mo-mo-ma-dep',
    title: 'Mộ + Thai + Tọa tại Tứ Mộ - Mồ mả tốt đẹp',
    sao: ['Mộ'],
    cung: ['Phúc Đức'],
    chi: ['Thìn', 'Tuất', 'Sửu', 'Mùi'],
    ketHop: ['Thai', 'Bát Tọa'],
    doUuTien: 65,
    tomTat: `Khi Mộ đi cùng Thai và Bát Tọa tại đất Tứ Mộ, mồ mả tổ tiên
của đương số tốt đẹp, đắc lợi cho con cháu về sau. Phúc phần dòng họ
bền vững, thịnh vượng lâu dài, báo hiệu nề nếp gia phong và gia tộc
duy trì truyền thống.`,
  },

  {
    id: 'mo-hao-mat-u-toi',
    title: 'Mộ + Song Hao - Hao làm mất tính u tối',
    sao: ['Mộ'],
    ketHop: ['Tiểu Hao', 'Đại Hao'],
    doUuTien: 55,
    tomTat: `Mộ đi cùng Song Hao (Tiểu Hao, Đại Hao) khiến đặc tính u tối
của Mộ bị mất đi. Song Hao phá vỡ trạng thái cất giấu, ẩn khuất của
Mộ; tính chất u tối, bảo thủ giảm bớt, đương số không còn keo kiệt
mà biết tiêu pha, tinh thần thông thoáng hơn.

Đây là cách tương sinh giữa Hao và Mộ — Hao tan Mộ để mở thoáng cho
chủ mệnh.`,
  },

  {
    id: 'mo-long-tri-phuong-cac-di-san',
    title: 'Mộ + Long Trì + Phượng Các - Có di sản tổ phụ',
    sao: ['Mộ'],
    ketHop: ['Long Trì', 'Phượng Các'],
    doUuTien: 60,
    tomTat: `Khi Mộ đi cùng Long Trì và Phượng Các, đương số có di sản tổ
phụ. Long Phượng là quý tinh, phúc tinh; Mộ chủ về tích trữ, cất
giấu — hợp lại thành cách thừa hưởng tài sản gia tộc: đất đai, nhà
cửa, vàng bạc tổ tiên giữ cho con cháu.`,
  },

  {
    id: 'mo-hoa-loc-cua-tan-tay',
    title: 'Mộ + Hóa Lộc - Của đến tận tay',
    sao: ['Mộ'],
    ketHop: ['Hóa Lộc'],
    doUuTien: 60,
    tomTat: `Mộ đi cùng Hóa Lộc cho thấy của cải đến được tận tay đương
số mà không bị phân tán. Tiền bạc giữ lại được, Hóa Lộc cộng Mộ
thành thế tích lũy, không phung phí — tài lộc bền vững.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // MỘ TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'mo-tai-menh',
    title: 'Mộ tại Mệnh',
    sao: ['Mộ'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `**Mộ** thủ Mệnh đem lại cho đương số sự chậm chạp, u mê và bản
tính bảo thủ.

Tướng mạo của chủ mệnh chậm chạp, kém linh hoạt, dáng hình thiếu sức
sống, uể oải; không ưa bon chen, ngại tranh luận, chọn cách sống thu
mình. Dù không bệnh tật vẫn dễ thấy nét uể oải, thiếu sinh khí.

Tính cách: chậm chạp, chậm tiến, ít nhiệt huyết, không ưa tranh
luận, bảo thủ, u mê, dâm dục; ngại va chạm, ưa ổn định, sợ thay
đổi. Đôi khi đương số tự tin quá vào bản thân nên sinh ra ngu muội
và thiếu tính công tâm.

Về tài chính, chủ mệnh thích tiết kiệm, đôi khi hơi keo kiệt, không
phóng khoáng, hay giấu diếm, cất tiền giấu của — đúng kiểu "mèo giữ
mỡ".

Khi cát tinh hội: đức tính giữ gìn của Mộ chuyển hóa thành kiên
nhẫn, cẩn trọng, biết chờ thời.

Khi sát tinh, hung tinh hội chiếu: chủ mệnh rơi vào trạng thái ù lì,
mê muội, bảo thủ đến mức cố chấp, phản ứng chậm với thời cuộc; dễ
lỡ duyên, đánh mất cơ hội thăng tiến và phát triển.`,
  },

  {
    id: 'mo-tai-phu-mau',
    title: 'Mộ tại Phụ Mẫu',
    sao: ['Mộ'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Mộ** tại Phụ Mẫu cho thấy cha mẹ của đương số hiền lành, giản
dị, chịu khó tiết kiệm.

Cha mẹ làm nghề nghiệp cơ bản, ít thay đổi, hơi bảo thủ và chậm
tiến; là người giản dị, chịu khó tiết kiệm tích lũy tiền bạc, của
cải.

Lối sống thiên về sự kín đáo, dè dặt; cha mẹ không giỏi bộc lộ cảm
xúc, sống theo kiểu "tích cốc phòng cơ".

Cảnh báo: bản tính chậm chạp, ngại thay đổi của cha mẹ dễ khiến gia
đình bỏ lỡ nhiều cơ hội cải thiện cuộc sống; con cái cũng khó có
điều kiện để phát triển.`,
  },

  {
    id: 'mo-tai-phuc-duc',
    title: 'Mộ tại Phúc Đức',
    sao: ['Mộ'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `**Mộ** tại cung Phúc Đức báo hiệu mồ yên mả đẹp, đương số được
hưởng phúc tổ tiên.

Mồ mả tổ tiên yên ổn, đẹp đẽ, không bị động hay xâm phạm. Chủ mệnh
giữ được và tiếp tục tôn bồi phúc đức của ông bà tổ tiên để lại,
biết gìn giữ nề nếp gia phong và tiếp nối công đức tổ tiên.

Về cá nhân, đương số ra ngoài gặp nhiều may mắn; sau khi kết hôn
thì mọi việc dễ phát triển hơn.

Cách Mộ + Thai + Tọa tại Tứ Mộ được tách thành luận giải riêng.`,
  },

  {
    id: 'mo-tai-dien-trach',
    title: 'Mộ tại Điền Trạch',
    sao: ['Mộ'],
    cung: ['Điền Trạch'],
    doUuTien: 78,
    tomTat: `**Mộ** tại Điền Trạch cho thấy đương số giữ được nhà ông bà tổ
tiên để lại.

Chủ mệnh có duyên với bất động sản tổ tiên, biết giữ gìn nhà cửa,
ruộng vườn, đất đai; là người chịu khó tích cóp, chi li — đôi khi
"tiền chôn của giấu" thành ra keo kiệt.

Đặc điểm về nhà ở: nhà cửa ít thay đổi, sửa sang; nhà cũ thường
không được tu sửa thường xuyên.

Khi hội nhiều ám sát tinh: nhà của đương số dễ gần nghĩa trang,
nghĩa địa, dưới nhà có thể có hài cốt, nơi ở từng là đất chôn hài
cốt hoặc gần mộ phần, hoặc ẩn chứa yếu tố tâm linh khó lường.

Lưu ý: chủ mệnh cần nghiên cứu kỹ phong thủy để tránh ảnh hưởng lâu
dài đến gia đạo.`,
  },

  {
    id: 'mo-tai-quan-loc',
    title: 'Mộ tại Quan Lộc',
    sao: ['Mộ'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `**Mộ** tại Quan Lộc cho thấy công việc của đương số dậm chân
tại chỗ, ít thay đổi, đứng im một chỗ. Khả năng thăng tiến đi chậm,
thiếu sự đột phá; chủ mệnh thích sự yên ổn, ngại nhảy việc, công
việc lặp đi lặp lại.

Hợp với những nghề mang tính cất giữ kín đáo: bảo quản, cất giữ,
thủ kho, kế toán, lưu trữ; công việc yêu cầu tính bí mật, kín đáo;
các ngành nghề về mồ mả, tang lễ; quản lý tài sản.`,
  },

  {
    id: 'mo-tai-no-boc',
    title: 'Mộ tại Nô Bộc',
    sao: ['Mộ'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Mộ** tại Nô Bộc cho thấy bạn bè của đương số ít nhưng lâu
bền, đơn giản và thật thà.

Số lượng bạn bè giảm; ít giao nhưng chơi với ai thì rất lâu bền.
Mạng lưới quan hệ xã hội của chủ mệnh thường không rộng — đúng lẽ
"bè ít bạn thưa". Bạn bè đơn giản, thật thà nên chơi được lâu dài.
Cộng sự, bạn bè, cấp dưới có đức tính hiền lành, chất phác, không
thích bon chen nên dễ gắn bó.

Mặt trái: dù không phải ai cũng giúp được trong lúc khó khăn, nhưng
ít nhất họ không đem đến điều tiếng cho đương số.`,
  },

  {
    id: 'mo-tai-thien-di',
    title: 'Mộ tại Thiên Di',
    sao: ['Mộ'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Mộ** tại Thiên Di cho thấy đương số ra ngoài hòa nhập chậm và
có nét bảo thủ. Chủ mệnh không ưa tìm hiểu, học hỏi cái mới; ra
ngoài hơi bảo thủ, hay làm những việc cũ, đến những nơi cũ, theo
thói quen, ít đổi mới. Ngại va chạm, đúng kiểu "chim quen tổ cũ" —
cuộc sống chỉ xoay quanh nơi thân quen, hiếm khi bước vào môi
trường lạ lẫm.

Trường hợp cung Phúc Đức vượng giúp giảm tính bảo thủ được tách
thành luận giải riêng.`,
  },

  {
    id: 'mo-thien-di-phuc-vuong',
    title: 'Mộ tại Thiên Di + cung phúc đức vượng - vẫn nhiều may mắn',
    sao: ['Mộ'],
    cung: ['Thiên Di'],
    doUuTien: 68,
    tomTat: `Khi Mộ thủ Thiên Di mà cung phúc khí của đương số vượng đẹp,
chủ mệnh vẫn gặp nhiều điềm lành khi ra ngoài: dễ gặp cơ hội tốt,
được người có địa vị hỗ trợ, được nhiều may mắn nhờ cung số đẹp.
Gia đình người hôn phối dễ có điều kiện; cưới vợ xong mọi thứ đều
hanh thông hơn.

Ở đây cung phúc vượng đã "kéo" Mộ ở Thiên Di vượt qua được tính
bảo thủ và sự hòa nhập chậm.`,
  },

  {
    id: 'mo-tai-tat-ach',
    title: 'Mộ tại Tật Ách',
    sao: ['Mộ'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `**Mộ** tại Tật Ách cho thấy bệnh tật của đương số ẩn bên trong,
khó tìm ra, khó chữa và tích tụ dần; càng về già mới lộ ra dần.

Sức khỏe chủ mệnh tựa như lửa âm ỉ trong tro tàn — bệnh ngấm ngầm
tích tụ theo thời gian, triệu chứng không rõ ràng.

Bệnh thường gặp: bệnh nội tiết (gan mật, tiêu hóa), u bướu, các vấn
đề mãn tính; thể trạng ngày càng sa sút.

Cảnh báo: khi phát tác, bệnh sẽ rất khó điều trị dứt điểm.`,
  },

  {
    id: 'mo-tai-tai-bach',
    title: 'Mộ tại Tài Bạch',
    sao: ['Mộ'],
    cung: ['Tài Bạch'],
    doUuTien: 78,
    tomTat: `**Mộ** tại Tài Bạch cho thấy đương số sống theo kiểu ăn chắc
mặc bền, tiền chôn của giấu.

Chủ mệnh chịu khó tiết kiệm, tích cóp, tích trữ tiền của; đôi khi
thành hơi keo kiệt. Làm bao nhiêu tiết kiệm bấy nhiêu, ít khi tiêu
xài phóng khoáng hay mạo hiểm đầu tư.

Nguồn tiền của đương số thường có tính kín đáo, ít ai biết, hoặc
là của tiền do ông bà tổ tiên để lại. Tài vận thường không "một
bước lên mây" mà nghiêng về việc tích cóp lâu dài hoặc thừa hưởng.

Các bộ kết hợp đáng chú ý:

- Mộ + Long Trì + Phượng Các: có di sản tổ phụ.
- Mộ + Hóa Lộc: của đến tận tay.
- Đi cùng Long Phượng: dễ được hưởng gia sản, đất đai ổn định.
- Gặp Hóa Lộc hoặc Lộc Tồn: của cải đến dễ, ít vướng trở ngại,
  giữ được dài lâu.`,
  },

  {
    id: 'mo-tai-tu-tuc',
    title: 'Mộ tại Tử Tức',
    sao: ['Mộ'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Mộ** tại Tử Tức cho thấy đường con cái của đương số đến chậm,
khó sinh.

Sao không lợi cho việc sinh nở: chủ mệnh khó sinh, khó đẻ, khó có
con; sinh nở dễ gặp trắc trở, phải chờ thời mới có tin vui.

Tính cách con cái: hiền lành nhưng hơi chậm chạp, tư duy không
nhanh, hướng nội, thật thà, không ham bon chen, lối sống thiên về
an phận, ổn định.

Trường hợp xấu: con cái xa cách hoặc không gắn bó lâu dài.

Khi có cát tinh hội chiếu: con cái có lòng hiếu thảo, biết quý
trọng di sản tổ tiên để lại.`,
  },

  {
    id: 'mo-tai-phu-the',
    title: 'Mộ tại Phu Thê',
    sao: ['Mộ'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `**Mộ** tại Phu Thê là dấu hiệu hôn nhân bền chặt, người hôn
phối thủy chung và tiết kiệm.

Người hôn phối hiền lành, thủy chung, ít thay đổi, hơi bảo thủ,
chịu khó nhặt nhạnh, tiết kiệm cho gia đình; thành thật, sống theo
kiểu ăn chắc mặc bền và biết vun vén gia đình.

Ưu thế đáng chú ý: gia đình người hôn phối có điều kiện; đương số
là người nhiều may mắn, được hưởng phúc của gia đình tổ tiên.

Sau khi cưới, vận trình hôn nhân của chủ mệnh có nhiều chuyển biến
tích cực, ít sóng gió; của cải cũng ngày một gia tăng.`,
  },

  {
    id: 'mo-tai-huynh-de',
    title: 'Mộ tại Huynh Đệ',
    sao: ['Mộ'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Mộ** tại Huynh Đệ cho thấy anh chị em của đương số xa cách
nhưng hiền lương, chất phác.

Số lượng anh chị em giảm; những người trong nhà là người hiền
lương, chất phát, đơn giản, chân thành, giản dị, đề cao sự cần kiệm
và không mưu cầu danh lợi.

Hoàn cảnh thực tế: người trong nhà dễ rơi vào cảnh mỗi người một
phương, ít khi sum vầy, mối quan hệ không quá khăng khít.

Mặt tích cực: quan hệ giữa anh chị em thiên về sự yên ổn, nhường
nhịn, trở thành chỗ dựa âm thầm cho nhau khi cần.`,
  },
];
