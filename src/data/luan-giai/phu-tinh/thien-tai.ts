import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THIÊN TÀI - Thổ, Phù Tinh + Ám Tinh.
 *
 * An theo NĂM SINH (engine: từ cung Mệnh = năm Tý, thuận đến chi năm sinh).
 *
 * Đặc trưng: TRÍ TUỆ SẮC BÉN - THÔNG MINH XUẤT CHÚNG nhưng KIÊU NGẠO TỰ CAO.
 *
 * CẶP TÀI-THỌ - quan hệ NHÂN-QUẢ:
 * - Thiên Tài = HẠT MẦM (gieo NHÂN) — vị trí cần đầu tư, vun bồi
 * - Thiên Thọ = TRÁI QUẢ (gặt QUẢ) — vị trí được hưởng thành tựu
 * - Phần CHUNG cặp đôi đã viết tại file thien-tho.ts với tag
 * sao: ['Thiên Thọ','Thiên Tài']
 */
export const luanGiai_ThienTai: DoanLuanGiai[] = [
  {
    id: 'thien-tai-tinh-chat-chung',
    title: 'Thiên Tài - Đặc tính chung',
    sao: ['Thiên Tài'],
    doUuTien: 32,
    tomTat: `**Thiên Tài** vừa là phù tinh vừa kiêm ám tinh, ngũ hành Thổ, an
theo năm sinh.

Đặc tính nổi bật của sao là trí tuệ sắc bén, thông minh xuất chúng và ứng
biến linh hoạt. Đương số có Thiên Tài thường nhìn xa trông rộng, biết nắm bắt
cơ hội để vươn lên dẫn đầu, đồng thời thích khám phá kiến thức mới và rất ham
hiểu biết. Mặt tối của sao là tính kiêu ngạo, tự cao — dễ coi thường người
khác và biến thành ám tinh khi đi sai đường.

Về vai trò trên lá số, Thiên Tài đóng vai trò "hạt mầm" gieo nhân trong cặp
nhân quả với Thiên Thọ — sao đóng vai trò "trái quả". Vị trí Thiên Tài tọa
chính là nơi đương số cần vun bồi, đầu tư công sức và làm phúc. Tài đi với
đức: nếu biết tu dưỡng đạo đức thì thành nhân tài, ngược lại sẽ sa vào tự mãn
và gây mất thiện cảm.

Khái quát hai chiều cát hung:

- Khi hội cát tinh như bộ Tứ Đức, Quang Quý hay Hóa Khoa, đương số tài đức
  vẹn toàn, được trọng vọng, sự nghiệp vững vàng.
- Khi hội sát tinh như Sát Hình Kỵ, Hỏa Tinh, Linh Tinh, đương số kiêu ngạo
  gây thị phi, tài năng bị bài xích, dễ rơi vào cảnh "con dao hai lưỡi" tự
  hại bản thân.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // THIÊN TÀI TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-tai-tai-menh',
    title: 'Thiên Tài tại Mệnh',
    sao: ['Thiên Tài'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `Khi Thiên Tài thủ Mệnh, đương số có đầu óc linh hoạt, trí tuệ sắc
bén, khả năng xoay chuyển tình thế nhanh nhạy hơn người. Đây là sao "con dao
hai lưỡi" với hai mặt rõ rệt:

- Mặt tích cực: đương số dễ gặt hái thành tựu nhờ năng lực hơn người, biết
  tự soi chiếu bản thân, dễ nhận ra khuyết điểm để sửa đổi.
- Mặt tiêu cực: nếu đặt tài năng sai chỗ, đương số biến thành kiêu ngạo, tự
  cao, xem thường người khác hoặc dùng tài làm việc trái đạo lý.

Đặc trưng quý nhất của Mệnh Thiên Tài là khả năng tự soi chiếu, dễ nhận ra
khuyết điểm để sửa, nhờ vậy giảm bớt sai lầm trên đường đời.

Khi Thiên Tài gặp bộ Tứ Đức (Long Đức, Phúc Đức, Thiên Đức, Nguyệt Đức),
đương số có tài đức vẹn toàn, được lòng thiên hạ và hưởng phúc bền lâu.

Một điểm đặc biệt: khi Thiên Tài thủ Mệnh thì Thiên Thọ thủ cung an Thân —
gieo duyên nào gặt quả ấy, làm điều thiện sẽ nhận lại may mắn về cuối đời.`,
  },

  {
    id: 'thien-tai-tai-phu-mau',
    title: 'Thiên Tài tại Phụ Mẫu',
    sao: ['Thiên Tài'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tài thủ Phụ Mẫu, cha mẹ của đương số là người trí tuệ,
nhanh nhạy và giỏi giang.

Khi hội cát tinh như Tả Phù, Hữu Bật, Thiên Khôi, Thiên Việt, Văn Xương, Văn
Khúc, đặc biệt là Hóa Lộc, Hóa Quyền, Hóa Khoa, cha mẹ không chỉ có tài mà
còn có thế, đủ sức nâng đỡ con cái. Cách Thiên Tài đi cùng Hóa Khoa khiến cha
mẹ trở thành tấm gương cho con cái noi theo trên hành trình lập nghiệp.

Khi hội sát tinh như Kình Dương, Hỏa Tinh, cha mẹ có tài năng nổi bật nhưng
tự cao tự đại, hay khinh thường người khác; gia đạo khó hòa hợp, cha mẹ con
cái phần xa cách.

Về đạo hiếu, đương số càng cần chăm sóc cha mẹ chu đáo để giữ trọn đạo hiếu —
cũng là cách gieo phúc để con cháu đời sau đối đãi lại với mình.`,
  },

  {
    id: 'thien-tai-tai-phu-the',
    title: 'Thiên Tài tại Phu Thê',
    sao: ['Thiên Tài'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tài thủ Phu Thê, bạn đời của đương số thông minh, tài
giỏi nhưng dễ ngạo mạn và coi thường người khác.

Khi đi cùng Cự Môn, lời nói của bạn đời nhiều lần mang ý khinh thường, khiến
tình cảm có khoảng cách. Quan hệ vợ chồng dễ phát sinh mâu thuẫn, khó duy trì
hòa hợp lâu dài.

Để giữ hôn nhân yên ấm, đương số cần cố gắng nâng cao năng lực bản thân để
xứng đôi vừa lứa, tránh cảnh "đũa lệch" cả về tài năng lẫn vị thế với bạn
đời. Khi toàn tâm với người hôn phối, gia đình sẽ yên ấm và kết quả quý báu
sẽ đến tại cung Thiên Thọ.`,
  },

  {
    id: 'thien-tai-tai-phuc-duc',
    title: 'Thiên Tài tại Phúc Đức - phải chăm gia tiên',
    sao: ['Thiên Tài'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `Khi Thiên Tài thủ Phúc Đức, dòng họ của đương số nhiều người thông
minh, tài hoa, dễ xuất hiện nhân vật kiệt xuất.

Đương số gánh một trách nhiệm đặc biệt: phải chăm sóc họ hàng dòng tộc, đặc
biệt là mồ mả và bàn thờ gia tiên. Có vậy mới hưởng trọn "lộc ấm" lâu dài từ
tổ tiên truyền lại.

Về tâm thái, đương số là người tài đi kèm cái tôi lớn nên dễ coi nhẹ người
khác. Nếu khéo léo và biết khiêm nhường, đương số sẽ học hỏi được nhiều, khi
gặp khó khăn cũng được họ hàng hỗ trợ.

Khi hội sát tinh như Thất Sát, Hóa Kỵ hay Thiên Hình, người giỏi trong họ
không nhiệt tình nâng đỡ, có thái độ lạnh nhạt hoặc coi thường đương số.`,
  },

  {
    id: 'thien-tai-tai-dien-trach',
    title: 'Thiên Tài tại Điền Trạch',
    sao: ['Thiên Tài'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tài thủ Điền Trạch, đương số có duyên chăm lo chuyện
nhà cửa, bếp núc và hạnh phúc gia đình. Gia trạch sinh khí tốt, dễ sản sinh
nhân tài, con cháu học hành sáng dạ.

Khi hội bộ Tứ Đức, nhà ở toát lên nề nếp và sự tôn nghiêm. Khi hội Thiên Khôi,
Thiên Việt, Tả Phù, Hữu Bật, Văn Xương, Văn Khúc, Lộc Tồn, Quang Quý, Thiên
Giải, nơi ở thành "đất lành chim đậu", hưng vượng lâu dài.

Khi gặp phá cách như Hỏa Tinh, Linh Tinh, Địa Không, Địa Kiếp, Tang Môn, Bạch
Hổ, Phá Toái, Thiên Hư tại Điền và Phúc, đời sống tinh thần bất ổn; tâm dễ
sinh tự cao, lạnh nhạt và ít hòa đồng với xóm giềng.

Đương số sống ở nhà có phần tự cao nên ít tiếp xúc với hàng xóm láng giềng.`,
  },

  {
    id: 'thien-tai-tai-quan-loc',
    title: 'Thiên Tài tại Quan Lộc',
    sao: ['Thiên Tài'],
    cung: ['Quan Lộc'],
    doUuTien: 76,
    tomTat: `Khi Thiên Tài thủ Quan Lộc, chí hướng sự nghiệp của đương số rất
rõ ràng, luôn muốn khẳng định bản thân.

Mặt sáng: đương số nổi bật trong chuyên môn nhờ nhanh nhạy và sáng tạo, hay
đưa ra phát kiến riêng.

Mặt tối: tính tự cao dễ khiến đương số nhầm lẫn trong quyết định và bị kẻ
khác đố kỵ, ghen ghét.

Khi hội sát tinh như Cự Môn, Linh Tinh, Đà La, Phục Binh, Tang Môn, Hóa Kỵ,
nguy cơ bị chèn ép, cướp công nơi công sở khó tránh.

Khi hội cát tinh như Văn Xương, Văn Khúc, Thai Phụ, Phong Cáo, tài năng đặt
đúng chỗ như "cá gặp nước"; đương số dễ trở thành danh sĩ trong học thuật,
khoa học, nghệ thuật.`,
  },

  {
    id: 'thien-tai-tai-no-boc',
    title: 'Thiên Tài tại Nô Bộc',
    sao: ['Thiên Tài'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tài thủ Nô Bộc, đương số hay phải quan tâm và hỗ trợ bạn
bè, đồng nghiệp, cấp dưới. Vòng quan hệ quy tụ nhiều người thông minh, có
tài, song thường kiêu ngạo và khó gần.

Khi hội cát tinh, đặc biệt là các văn tinh và Hóa Khoa, đương số dễ kết giao
với những người tri thức danh vọng khiến mình nể phục. Nếu giữ tâm cầu thị,
đương số sẽ mở ra nhiều cơ hội phát triển nhờ các mối liên hệ này.

Khi hội sát tinh như Sát, Hình, Kỵ, bạn bè dù giỏi giang nhưng xem nhẹ đương
số, tỏ thái độ "không cùng đẳng cấp".

Theo quy luật nhân quả, gieo phúc cho bạn bè và cấp dưới ở vị trí này thì
cung Thiên Thọ sẽ là nơi gặt quả ngọt.`,
  },

  {
    id: 'thien-tai-tai-thien-di',
    title: 'Thiên Tài tại Thiên Di',
    sao: ['Thiên Tài'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tài thủ Thiên Di, đương số có nhiều duyên nợ với môi
trường bên ngoài; ra xã hội dễ gây chú ý vì tài năng. Tuy nhiên, chính cái
tôi cao đôi khi khiến đương số bị người khác ghen ghét, đố kỵ, chèn ép.

Khi hội nhiều văn tinh, đặc biệt Thiên Cơ đi cùng Hóa Lộc, Hóa Khoa, Hóa
Quyền, đương số đắc cách xuất ngoại — rất hợp với việc đi xa, du học, nâng
cao chuyên môn và xây dựng sự nghiệp nơi đất khách.

Trên cung này, đương số hay phải quan tâm, giúp đỡ và xây dựng xã hội bên
ngoài tốt đẹp hơn — đây chính là cách gieo nhân.`,
  },

  {
    id: 'thien-tai-tai-tat-ach',
    title: 'Thiên Tài tại Tật Ách - đặc biệt nghề chữa bệnh',
    sao: ['Thiên Tài'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `Khi Thiên Tài thủ Tật Ách, thân thể và tinh thần đương số dễ suy
nhược, hay mắc các bệnh thần kinh, sinh lý (dương liệt âm hư), khí huyết.
Đương số buộc phải chú ý dưỡng sinh, giữ gìn sức khỏe để phòng tránh tai họa
bất ngờ.

Cách hợp nhất tại cung này là theo nghề chữa bệnh: đương số bén duyên với
nghề bác sỹ, thầy thuốc, thầy giáo. Dùng tài năng để giúp đời, cứu người, đương
số sớm gặt hái quả ngọt tại cung Thiên Thọ — đây là cách hóa giải đẹp nhất
của Thiên Tài tại Tật.

Khi hội sát tinh như Kình Dương, Đà La, đương số mang tâm tính ngạo mạn, nóng
nảy, hành xử thiếu chín chắn trong giao tiếp.`,
  },

  {
    id: 'thien-tai-tai-tai-bach',
    title: 'Thiên Tài tại Tài Bạch',
    sao: ['Thiên Tài'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tài thủ Tài Bạch, đương số có bản lĩnh, tự tin, giỏi
kiếm tiền và nghĩ ra nhiều cách kiếm tiền.

Mặt tối là dễ sinh kiêu ngạo, phô trương quá mức; nếu thiếu khiêm nhường thì
khó giữ tiền.

Khi hội cát tinh, sự tự tin thúc đẩy đương số dám nghĩ dám làm và thu được
thành quả lớn.

Khi hội sát tinh như Kình Dương, Đà La, Hóa Quyền, đương số thích thể hiện,
lao vào cạnh tranh khốc liệt và dễ bị đối thủ bài xích.

Theo quy luật nhân quả, đương số càng làm nhiều việc thiện, chi tiêu cho
những giá trị tích cực thì càng gieo phúc đức, hưởng thêm may mắn tại cung
Thiên Thọ.`,
  },

  {
    id: 'thien-tai-tai-tu-tuc',
    title: 'Thiên Tài tại Tử Tức',
    sao: ['Thiên Tài'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tài thủ Tử Tức, con cái của đương số thông minh, nhanh
nhạy, xuất chúng.

Khi hội cát tinh, nếu được định hướng từ nhỏ, con cái sẽ đạt chuyên môn sâu
và trở thành người tài trong lĩnh vực mình theo đuổi.

Khi hội sát tinh, năng lực của con cái thiếu cân bằng, chỉ nổi trội ở một
môn học hay một kỹ năng, mặt khác lại yếu — về lâu dài dễ rơi vào tình trạng
học lệch, thiếu hụt kiến thức.

Một lưu ý đặc biệt: đương số phải chú trọng giáo dục lễ nghĩa và đạo đức cho
con. Chỉ khi tài năng và nhân cách song hành, thành công mới bền vững. Nếu
chỉ chăm tài mà bỏ đức, con cái dễ trở nên kiêu căng tự phụ.`,
  },

  {
    id: 'thien-tai-tai-huynh-de',
    title: 'Thiên Tài tại Huynh Đệ',
    sao: ['Thiên Tài'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tài thủ Huynh Đệ, đương số là người có trách nhiệm, hay
đứng ra lo toan và bao bọc anh chị em.

Theo quy luật nhân quả, sự giúp đỡ ấy không phải lúc nào cũng được đáp lại
trực tiếp, nhưng về lâu dài sẽ mang lại phúc báo và sự hậu thuẫn nhiều phương
diện — gặt quả tại cung có Thiên Thọ.

Anh chị em trong nhà giỏi giang, song tài năng cần được rèn luyện và bồi đắp
mới phát triển vững vàng.

Khi hội cát tinh như Thiên Khôi, Thiên Việt, Quang Quý, Tả Phù, Hữu Bật, anh
chị em không chỉ tự khẳng định được năng lực mà còn trở thành chỗ dựa tốt
cho đương số.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // KẾT HỢP ĐẶC BIỆT
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-tai-thien-co-da-hoc-da-nang',
    title: 'Thiên Tài + Thiên Cơ - Đa học đa năng',
    sao: ['Thiên Tài'],
    ketHop: ['Thiên Cơ'],
    doUuTien: 55,
    tomTat: `Khi Thiên Tài đồng cung Thiên Cơ, sách phú có câu "Thiên Cơ Thiên
Tài thông minh tài trí tăng gấp bội, đa học đa năng".

Trí tuệ Thiên Cơ vốn cao, nay thêm Thiên Tài thì sắc bén gấp bội. Thiên Tài
còn có khả năng cải thiện những khuyết điểm của Thiên Cơ:

- Bù đắp tính lo xa quá mức của Thiên Cơ.
- Bù đắp khả năng tính toán mà Thiên Cơ vốn thiếu cương quyết.

Cách dụng tốt nhất là phát huy đa năng đa tài, học gì cũng giỏi, đặc biệt hợp
với nghiên cứu khoa học, lập trình tin học, phân tích chiến lược, cố vấn
tham mưu.`,
  },

  {
    id: 'thien-tai-tu-duc-tai-duc-ven-toan',
    title: 'Thiên Tài + bộ Tứ Đức - Tài đức vẹn toàn',
    sao: ['Thiên Tài'],
    ketHop: ['Long Đức', 'Phúc Đức', 'Thiên Đức', 'Nguyệt Đức'],
    doUuTien: 55,
    tomTat: `Khi Thiên Tài hội đủ bộ Tứ Đức gồm Long Đức, Phúc Đức, Thiên Đức và
Nguyệt Đức, đương số đắc cách tài đức vẹn toàn.

Ý nghĩa cốt lõi của cách này là chữ "tài" song hành cùng chữ "đức" — đương
số có tài lại có đức, ắt được lòng thiên hạ, vừa được người đời trọng vọng
vừa hưởng phúc bền lâu.

Tứ Đức còn chế ngự tính kiêu ngạo, tự cao của Thiên Tài, dẫn dắt tài năng
theo hướng chính đạo, không còn nguy cơ "con dao hai lưỡi" tự hại bản thân.

Đây là một trong những cách an lành nhất cho đương số có Thiên Tài.`,
  },

  {
    id: 'thien-tai-quang-quy-quan-phuc-thong-minh',
    title: 'Thiên Tài + Quang Quý + Quan Phúc - Thông minh điềm đạm',
    sao: ['Thiên Tài'],
    ketHop: ['Ân Quang'],
    doUuTien: 50,
    tomTat: `Khi Thiên Tài đi cùng bộ Quang Quý (Ân Quang, Thiên Quý) và Quan
Phúc (Thiên Quan, Thiên Phúc), sách phú có câu "thông minh, điềm đạm, tài
giỏi".

Quang Quý là quý tinh, tăng phẩm chất cao quý cho đương số. Quan Phúc là sao
Giải, tăng phúc đức cứu giải. Khi kết hợp, tài năng Thiên Tài được dẫn dắt
vào con đường điềm đạm hiền hậu.

Cách này hóa giải hoàn toàn tính kiêu ngạo của Thiên Tài, biến đương số
thành nhân vật vừa tài vừa hiền, hợp với các nghề tư vấn, giáo dục, từ
thiện.`,
  },
];
