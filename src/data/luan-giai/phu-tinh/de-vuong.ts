import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO ĐẾ VƯỢNG - Kim, Phúc Tinh + Quý Tinh.
 *
 * Vị trí THỨ 5 trong Vòng Trường Sinh 12 sao:
 * Trường Sinh: Mộc Dục: Quan Đới: Lâm Quan: ĐẾ VƯỢNG: Suy
 * Bệnh: Tử: Mộ: Tuyệt: Thai: Dưỡng
 *
 * An theo CỤC, là sao ĐỈNH CAO của vòng Trường Sinh.
 *
 * Đặc trưng:
 * - Tượng trưng cho GIAI ĐOẠN ĐỈNH CAO của đời người
 * - Sức khỏe TRÁNG KIỆN nhất, công danh CAO nhất, tiền của DỒI DÀO nhất
 * - GIA TĂNG SỐ LƯỢNG mọi thứ ở cung sao đứng (giống Trường Sinh)
 * - KÍCH PHÁT, KHUẾCH ĐẠI các sao đi cùng (giống vai trò Trường Sinh)
 * - Cách Sinh-Vượng-Mộ tam hợp với Trường Sinh và Mộ
 * - GIẢI TRỪ bệnh tật, tai họa
 * - LỢI ÍCH SINH NỞ, vượng nhân đinh, nhiều con sinh mau
 * - HẠI ĐẠT khi đi cùng sát bại tinh — vì khuếch đại cả cái xấu
 */
export const luanGiai_DeVuong: DoanLuanGiai[] = [
  {
    id: 'de-vuong-tinh-chat-chung',
    title: 'Đế Vượng - Đặc tính chung',
    sao: ['Đế Vượng'],
    doUuTien: 33,
    tomTat: `**Đế Vượng** là phụ tinh thuộc nhóm phúc tinh kiêm quý tinh, ngũ
hành Kim, đứng ở vị trí thứ năm trong vòng Trường Sinh — nơi đỉnh cao của
chu trình mười hai sao này.

Sao chủ giai đoạn rực rỡ nhất của một đời người: lúc sức khỏe tráng kiện,
công danh đạt mức cao và tiền của dồi dào. Đế Vượng đứng ở cung nào cũng
gia tăng số lượng và kích phát các sao đi cùng — đi với cát tinh thì rực rỡ
thêm, song đi với sát bại tinh lại khuếch đại cả cái xấu, dễ thành phá cách.

Trường Sinh, Đế Vượng và Mộ luôn tam hợp với nhau, tạo nên chu trình
sinh-phát-kết của đời người. Đặc điểm cát đáng chú ý của Đế Vượng:

- Giải trừ bệnh tật, tai họa
- Lợi ích cho việc sinh nở, vượng nhân đinh, nhiều con và sinh mau

Cảnh báo: Đế Vượng không ưa đóng cung Tật Ách vì sẽ khuếch đại bệnh tật
chứ không giảm nhẹ.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP TỐT
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'de-vuong-tu-vi-dong-cung',
    title: 'Tử Vi + Đế Vượng đồng cung - Tài lãnh đạo, óc lãnh tụ',
    sao: ['Đế Vượng'],
    ketHop: ['Tử Vi'],
    doUuTien: 75,
    tomTat: `Khi Tử Vi và Đế Vượng đồng cung, đương số có tài lãnh đạo, quản
lý cùng óc lãnh tụ rõ rệt, dễ đứng vị trí thủ lĩnh trong tập thể. Tính tình
quảng đại, quang minh, mang phong thái quân tử và đi theo chính phái.

Đây là cách rạng rỡ vì Tử Vi vốn là đế tinh, Đế Vượng lại là đỉnh cao của
vòng Trường Sinh — hai sao cộng hưởng tạo thành đỉnh cao quyền lực cho
đương số.`,
  },

  {
    id: 'de-vuong-hoa-quyen-quyen-chuc-lon',
    title: 'Đế Vượng + Hóa Quyền - Quyền chức lớn',
    sao: ['Đế Vượng'],
    ketHop: ['Hóa Quyền'],
    doUuTien: 65,
    tomTat: `Đế Vượng gặp Hóa Quyền cho đương số quyền uy đỉnh cao và chức
vụ lớn. Đương số đứng ở vị trí cầm cương trong tổ chức, doanh nghiệp hay cơ
quan, có tiếng nói trọng lượng trong các quyết định lớn.`,
  },

  {
    id: 'de-vuong-hoa-khoa-van-chuong',
    title: 'Đế Vượng + Hóa Khoa - Sự nghiệp văn chương lớn',
    sao: ['Đế Vượng'],
    ketHop: ['Hóa Khoa'],
    doUuTien: 65,
    tomTat: `Đế Vượng gặp Hóa Khoa, đương số lập nên sự nghiệp văn chương
lớn, sản xuất nhiều tác phẩm có giá trị. Là người học rất giỏi, nắm khối
lượng kiến thức khổng lồ — hợp với các nghề nhà văn, nhà nghiên cứu, giáo
sư hay học giả.`,
  },

  {
    id: 'de-vuong-thien-tai',
    title: 'Đế Vượng + Khôi Việt + Xương Khúc + Quốc Ấn + Âm Dương sáng - Thiên tài',
    sao: ['Đế Vượng'],
    ketHop: ['Thiên Khôi', 'Thiên Việt', 'Văn Xương', 'Văn Khúc', 'Quốc Ấn'],
    doUuTien: 75,
    tomTat: `Đế Vượng cùng Thiên Khôi, Thiên Việt, Văn Xương, Văn Khúc, Quốc
Ấn cộng thêm Thái Âm và Thái Dương sáng đẹp tạo thành cách của bậc thiên
tài. Đương số có quan lộ rộng mở, đứng vào hàng đại tài địa vị, tài năng
vượt trội xuất chúng và sự nghiệp hiển đạt lừng lẫy.

Phân tích vai trò từng sao trong cách:

- Khôi Việt là quý nhân tột đỉnh
- Xương Khúc là trí tuệ văn chương
- Quốc Ấn là quyền uy ấn tín
- Nhật-Nguyệt sáng cho uy danh tỏa rộng
- Đế Vượng đảm nhiệm vai trò đỉnh cao kích phát toàn cục`,
  },

  {
    id: 'de-vuong-hoa-loc-phat-tai',
    title: 'Đế Vượng + Hóa Lộc - Phát tài, điền sản dồi dào',
    sao: ['Đế Vượng'],
    ketHop: ['Hóa Lộc'],
    doUuTien: 65,
    tomTat: `Đế Vượng gặp Hóa Lộc, đương số chịu khó kiếm tiền và phát tài,
có của để dành cùng điền sản dồi dào. Năng lực kiếm tiền vượt trội, của cải
không thiếu thốn, sở hữu nhiều đất đai, nhà cửa và tài sản — vào hàng đại
phú.`,
  },

  {
    id: 'de-vuong-trieu-phu-the-gioi',
    title: 'Đế Vượng + Tả Hữu + Âm Dương + Thìn Tuất - Triệu phú thế giới',
    sao: ['Đế Vượng'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Thái Âm', 'Thái Dương'],
    chi: ['Thìn', 'Tuất'],
    doUuTien: 80,
    tomTat: `Đế Vượng cùng Tả Phù, Hữu Bật, Thái Âm và Thái Dương đồng cung
tại Thìn hoặc Tuất là bộ sao cực hợp cách, đưa đương số tới khả năng đại
phú đại quý — tài sản vượt tầm quốc gia, đứng vào hàng triệu phú thế giới.

Trí tuệ, quý nhân và tiền tài đều ở mức đỉnh cao. Phân tích cụ thể:

- Đế Vượng tại Tứ Mộ Thìn Tuất là đất gốc của sao
- Nhật Nguyệt đồng cung Thìn / Tuất tạo thành bộ Nhật Nguyệt cách đẹp
- Tả Phù, Hữu Bật là quý nhân giúp đỡ
- Đế Vượng đảm nhiệm vai trò khuếch đại tất cả`,
  },

  {
    id: 'de-vuong-truong-sinh-anh-em-sung-tuc',
    title: 'Đế Vượng + Trường Sinh + cát tinh - Anh em đông sung túc',
    sao: ['Đế Vượng'],
    cung: ['Huynh Đệ'],
    ketHop: ['Trường Sinh'],
    doUuTien: 60,
    tomTat: `Khi Đế Vượng cùng Trường Sinh và nhiều cát tinh tụ tại Huynh
Đệ, đương số có anh chị em đông mà sung túc. Bộ Sinh-Vượng tam hợp tại cung
này tạo nên chu kỳ sinh phát mạnh trong dòng huyết thống — anh chị em đông
đảo, kinh tế khá giả, biết thương yêu giúp đỡ lẫn nhau.`,
  },

  {
    id: 'de-vuong-thai-tuong-phuc-binh-anh-em-di-bao',
    title: 'Đế Vượng + Thai + Thiên Tướng + Phục Binh - Anh em dị bào',
    sao: ['Đế Vượng'],
    cung: ['Huynh Đệ'],
    ketHop: ['Thai', 'Thiên Tướng', 'Phục Binh'],
    doUuTien: 55,
    tomTat: `Đế Vượng đi cùng Thai, Thiên Tướng và Phục Binh tại Huynh Đệ,
đương số dễ có anh chị em dị bào — cùng cha khác mẹ hoặc cùng mẹ khác cha —
hoặc anh chị em nuôi, đỡ đầu. Trong số đó có người đạt công danh, quan chức,
danh vọng và sống khá giả.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP XẤU
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'de-vuong-sat-tinh-tat-ach',
    title: 'Đế Vượng + Kình Đà + Không Kiếp + Hỏa Linh tại Tật - Bệnh nặng',
    sao: ['Đế Vượng'],
    cung: ['Tật Ách'],
    ketHop: ['Kình Dương', 'Đà La', 'Địa Không', 'Địa Kiếp', 'Linh Tinh', 'Hỏa Tinh'],
    doUuTien: 65,
    tomTat: `Đế Vượng vốn không ưa đóng cung Tật Ách, nay lại gặp đủ Kình
Dương, Đà La, Địa Không, Địa Kiếp, Linh Tinh và Hỏa Tinh thì đương số bệnh
nặng, tai họa nhiều. Sát tinh kích thích bệnh nặng hơn, đương số nhiều tai
họa ập đến hơn — Đế Vượng tại đây khuếch đại cả cái xấu.

Hệ quả thường thấy gồm bệnh nặng kéo dài, tai họa liên tiếp và đặc biệt
nguy hiểm khi vào hạn.

Hóa giải: cần tới Quan Phúc, Tứ Đức, Khôi Việt, Quang Quý hay Tuần Triệt
mới mong giảm bớt được phần nào.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // ĐẾ VƯỢNG TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'de-vuong-tai-menh',
    title: 'Đế Vượng tại Mệnh',
    sao: ['Đế Vượng'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Đương số có Đế Vượng thủ Mệnh mang tài lãnh đạo, ưa làm việc
thiện, là biểu tượng của thịnh đạt và phong túc.

Về hình tướng, đương số có dáng to lớn, bề thế, phương trưởng; dáng đi uy
nghi vững chãi. Nam giới có khí chất trượng phu mạnh mẽ, nữ giới có vẻ
duyên dáng cùng khí chất quyền lực.

Tính tình đương số uy nghi bệ vệ, quảng đại rộng rãi, ưa việc thiện và bác
ái, sẵn có tài lãnh đạo cùng óc lãnh tụ.

Về công danh tài lộc và phúc thọ:

- Gia tăng phúc thọ, thọ trường
- Chủ sự thịnh đạt, phong túc
- Giải trừ bệnh tật, tai họa
- Thăng tiến công danh, sự nghiệp, quyền thế và tiền bạc
- Lợi ích cho việc sinh nở, vượng nhân đinh, nhiều con sinh mau

Đế Vượng là cát tinh, làm tăng tiến công danh, của tiền, nhà cửa, quyền
lực và tuổi thọ; đi cùng sao tốt thì đặc tính sao đó càng rực rỡ. Đương số
có tầm nhìn dài hạn, tinh thần trách nhiệm cao, sự nghiệp vững chãi và dễ
thăng tiến; sống lâu, ít gặp bệnh nghiêm trọng — gặp tai ách cũng nhanh
vượt qua.`,
  },

  {
    id: 'de-vuong-tai-phu-mau',
    title: 'Đế Vượng tại Phụ Mẫu',
    sao: ['Đế Vượng'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Đế Vượng đóng tại Phụ Mẫu, cha mẹ đương số dễ có dáng to béo
nặng cân, tính tình rộng lượng quảng đại, kinh tế khá giả giàu có. Cha mẹ
sống an nhàn, có điều kiện hỗ trợ con cái cả về vật chất lẫn tinh thần;
con cái kính trọng hiếu thảo với cha mẹ, gia đình đầm ấm hạnh phúc.`,
  },

  {
    id: 'de-vuong-tai-phuc-duc',
    title: 'Đế Vượng tại Phúc Đức',
    sao: ['Đế Vượng'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `Đế Vượng đóng tại Phúc Đức, đương số có phúc lớn và dòng họ
thịnh vượng. Đương số hưởng nhiều may mắn; trong dòng họ con cháu đông đảo,
nhiều người thành đạt, thành danh và giàu có. Gia đình bên nhà người hôn
phối cũng có điều kiện. Phúc lớn từ tổ tiên giúp đương số sống trong sung
túc, tạo điều kiện cho sự nghiệp phát triển mạnh mẽ và tài chính đạt đỉnh
cao.`,
  },

  {
    id: 'de-vuong-tai-dien-trach',
    title: 'Đế Vượng tại Điền Trạch',
    sao: ['Đế Vượng'],
    cung: ['Điền Trạch'],
    doUuTien: 78,
    tomTat: `Đế Vượng đóng tại Điền Trạch gia tăng số lượng nhà cửa và tiền
của cho đương số. Đất đai rộng lớn, bề ngang nhiều, có thể thừa kế từ gia
đình hoặc tự gây dựng — tài sản đất đai nhìn chung gia tăng theo thời gian.

Khi sát tinh hội cùng, tài sản dễ bị hao hụt, có khi bị ép bán hoặc đổ sập
do tranh chấp; cũng có nguy cơ đầu tư thiếu minh bạch.

Lời khuyên: cần phương pháp quản lý tài sản khôn ngoan, đầu tư bất động sản
phải có nghiên cứu kỹ, không mua theo cảm tính hay nghe lời đồn.`,
  },

  {
    id: 'de-vuong-tai-quan-loc',
    title: 'Đế Vượng tại Quan Lộc',
    sao: ['Đế Vượng'],
    cung: ['Quan Lộc'],
    doUuTien: 80,
    tomTat: `Đế Vượng tại Quan Lộc đem lại lợi ích cho việc tăng tiến công
danh và quyền thế. Đương số đạt được nhiều thành tựu lớn trong cuộc đời,
sẵn khả năng lãnh đạo và tinh thần trách nhiệm, nhận được sự kính trọng
của người xung quanh. Tư duy mạnh mẽ, rõ ràng và kiên định nên dễ tỏa sáng
trong lĩnh vực của mình.

Khi đi cùng nhiều cát tinh, đương số đạt được nhiều tiếng tăm và cai quản
những vị trí lớn trong xã hội.

Cảnh báo: cần giữ tỉnh táo và đạo đức nghề nghiệp để tránh rủi ro không
đáng có.`,
  },

  {
    id: 'de-vuong-tai-no-boc',
    title: 'Đế Vượng tại Nô Bộc',
    sao: ['Đế Vượng'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Đế Vượng đóng tại Nô Bộc, đương số đông bạn lắm bè, mạng lưới
quan hệ rộng dựa trên tôn trọng và tin tưởng thật sự.

Khi cát tinh hội cùng, đương số có nhiều bạn bè thành đạt, giàu có và
tương hỗ giúp đỡ mình nhiều; bản thân có thể làm thư ký cho các vị lãnh
đạo lớn. Bạn bè, đồng nghiệp và đối tác đều sẵn lòng hỗ trợ trong mọi mặt
của cuộc sống.`,
  },

  {
    id: 'de-vuong-tai-thien-di',
    title: 'Đế Vượng tại Thiên Di',
    sao: ['Đế Vượng'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `Đế Vượng tại Thiên Di, đương số ra ngoài có oai phong, gặp quý
nhân giúp đỡ. Hay gặp may mắn, ít khi vướng tai nạn; là tuýp người thích
ra ngoài nhiều — càng ra ngoài, càng xa bố mẹ thì càng dễ phát triển. Đương
số có phúc tốt, người hôn phối cũng có kinh tế tốt.

Đương số ưa khám phá và học hỏi cái mới, dễ thích nghi với môi trường và
văn hóa mới — sự nghiệp phát triển vượt bậc nhờ quý nhân phù trợ đúng thời
điểm.`,
  },

  {
    id: 'de-vuong-tai-tat-ach',
    title: 'Đế Vượng tại Tật Ách - KHÔNG ƯA',
    sao: ['Đế Vượng'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `Tật Ách là vị trí không ưa của Đế Vượng. Khi sao này đóng tại
đây, đương số nhiều bệnh tật trong người vì Đế Vượng khuếch đại số lượng,
khiến bệnh dồn dập.

Khi sát tinh hội cùng (Kình Dương, Đà La, Địa Không, Địa Kiếp, Linh Tinh,
Hỏa Tinh), bệnh càng bị kích thích nặng hơn và nhiều tai họa ập đến hơn.

Đặc biệt: dù Đế Vượng là sao cát, ở Tật Ách chỉ có thể giảm nhẹ rủi ro chứ
không mang lại sự thịnh vượng trọn vẹn. Đương số cần giữ gìn sức khỏe,
tránh lao lực và không nên để "nước đến chân mới nhảy".`,
  },

  {
    id: 'de-vuong-tai-tai-bach',
    title: 'Đế Vượng tại Tài Bạch',
    sao: ['Đế Vượng'],
    cung: ['Tài Bạch'],
    doUuTien: 80,
    tomTat: `Đế Vượng tại Tài Bạch, đương số có của tiền dồi dào và nhiều
nguồn thu nhập. Đồng tiền tiêu pha, đầu tư hay thu vào thường ở mức lớn;
đương số chăm chỉ làm việc và không phụ thuộc một nguồn thu nhập nào, biết
đa dạng cách kiếm tiền qua bất động sản, kinh doanh hoặc dòng tiền thụ
động.

Khả năng quản lý tiền của đương số cũng rất tốt — không chỉ biết kiếm tiền
mà còn biết quản lý tiền — nên dễ giàu có và thịnh vượng, có thể trở thành
triệu phú sở hữu điền sản rộng lớn.`,
  },

  {
    id: 'de-vuong-tai-tu-tuc',
    title: 'Đế Vượng tại Tử Tức',
    sao: ['Đế Vượng'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Đế Vượng đóng tại Tử Tức, đương số đông con cái và mau sinh —
giống như Trường Sinh khi đóng cung này. Khi cát tinh hội cùng, đương số
đông con và nhiều đứa hiển đạt thông minh; phần lớn con cái khỏe mạnh,
ngoan ngoãn và sáng dạ. Mối quan hệ giữa đương số với con cháu gắn kết
bền chặt, gia đình thuận hòa và sung túc.`,
  },

  {
    id: 'de-vuong-tai-phu-the',
    title: 'Đế Vượng tại Phu Thê',
    sao: ['Đế Vượng'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `Đế Vượng đóng tại Phu Thê, người hôn phối của đương số dễ to
béo, giàu có và vượng tài; hậu vận giàu sang.

Khi cát tinh hội cùng, vợ chồng sống với nhau hạnh phúc và giàu có, có phúc
lớn cùng nhiều may mắn — Đế Vượng ở đây tượng trưng cho tình yêu bền bỉ
và sự hòa hợp lâu dài.

Lời khuyên: để gìn giữ những điều tốt đẹp đó, hai vợ chồng cần đồng hành
vững vàng, mỗi người biết lắng nghe và tôn trọng đối phương.`,
  },

  {
    id: 'de-vuong-tai-huynh-de',
    title: 'Đế Vượng tại Huynh Đệ',
    sao: ['Đế Vượng'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Đế Vượng đóng tại Huynh Đệ, đương số có đông anh chị em, biết
thương yêu và giúp đỡ lẫn nhau, sống gần gũi và yêu thương.

Hai biến thể đáng chú ý:

- Đế Vượng cùng Trường Sinh và cát tinh: anh chị em đông mà sung túc
- Đế Vượng cùng Thai, Thiên Tướng và Phục Binh: dễ có anh chị em dị bào
  hoặc anh chị em nuôi, đỡ đầu — trong số đó có người đạt công danh, quan
  chức, danh vọng và sống khá giả

Khi cát tinh hội cùng, gia đình êm ấm, có người thành đạt và có danh tiếng,
đưa cả dòng họ vươn xa.`,
  },
];
