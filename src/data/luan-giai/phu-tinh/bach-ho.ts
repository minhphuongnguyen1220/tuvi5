import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO BẠCH HỔ - Kim, Bại Tinh, vòng Thái Tuế (vị trí 9).
 * Tam hợp Tuế-Hổ-Phù. Đối xung Tang Môn (TRỤC TANG-HỔ - kiếp nghiệp).
 * Một trong Tứ Linh (Cái Long Hổ Phượng) - phần chung Tứ Linh viết tại thanh-long.ts.
 * Hổ + Phi Liêm "hổ mọc cánh" viết tại phi-liem.ts.
 */
export const luanGiai_BachHo: DoanLuanGiai[] = [
  {
    id: 'bach-ho-tinh-chat-chung',
    title: 'Bạch Hổ - Đặc tính chung',
    sao: ['Bạch Hổ'],
    doUuTien: 32,
    tomTat: `**Bạch Hổ** là phụ tinh thuộc nhóm Bại Tinh trong vòng Thái Tuế,
chiếm vị trí thứ chín. Sao thuộc hành Kim, hóa khí Bại Tinh.

Trong vòng Thái Tuế, Bạch Hổ giữ vai trò đặc biệt:

- Tam hợp Tuế - Hổ - Phù (Thái Tuế + Bạch Hổ + Quan Phù) — vòng tam hợp
  của chính nghĩa, trách nhiệm và xây dựng
- Luôn đối xung Tang Môn, tạo nên cặp Tang - Hổ — trục kiếp nghiệp,
  duyên nợ

Về vị trí: Bạch Hổ **Đắc** địa tại Dần, Thân, Mão, Dậu; **Hãm** địa tại
các chi còn lại (Tý, Sửu, Thìn, Tỵ, Ngọ, Mùi, Tuất, Hợi).

Tính chất chính của sao gồm hình thương, tai nạn, bệnh tật, máu huyết,
thị phi, cùng sự hùng dũng, uy quyền, tài năng và khẩu nghiệp.

Bản chất hai mặt của Bạch Hổ: dù ở vị trí đắc hay hãm, sao vẫn luôn thể
hiện tính chất can đảm, hùng dũng, quyền lực, giàu nghị lực, tài giỏi
và quyền biến.`,
  },

  {
    id: 'bach-ho-truc-tang-ho',
    title: 'Trục Tang - Hổ (Tang Môn xung Bạch Hổ) - kiếp nghiệp',
    sao: ['Bạch Hổ', 'Tang Môn'],
    doUuTien: 70,
    tomTat: `Trục Tang - Hổ (Tang Môn đối xung Bạch Hổ qua sáu cung) là cặp
bài trùng kiếp nghiệp, duyên nợ mà đời này đương số phải gặp.

- Tang Môn chủ về duyên nợ tiền kiếp — nghiệp từ kiếp trước theo sang
  kiếp này phải trả
- Bạch Hổ chủ về kiếp nghiệp hiện tại — biểu hiện qua ốm đau, hình
  thương, mất mát

Khi Tang - Hổ đóng tại bất kỳ vị trí nào, đương số đều luôn nặng lòng
suốt đời ở vị trí đó — đây là duyên nợ kiếp này phải trả, không thể
thoát.`,
    chiTiet: `Phân tích sâu trục Tang - Hổ:

Tang Môn — nghiệp tiền kiếp:

- Đương số có Tang Môn hãm địa ở Mệnh thường có vết chàm, vết bớt trên
  người
- Mới sinh khó nuôi, gia đình thường vất vả trong việc chăm sóc
- Nếu cung Phụ Mẫu có một chút sát tinh, lớn lên đương số dễ mất cha
  hoặc mất mẹ

Bạch Hổ — họa kiếp này:

- Chủ về máu huyết, khổ ải
- Hãm địa ở Mệnh: đương số đối diện nhiều khó khăn, chịu thiệt thòi
- Đặc biệt nặng nề với nữ nhân

Khi Tang - Hổ đóng tại Mệnh hoặc Phu Thê, đương số ôm bộ này thường có
lương duyên không thuận. Việc tìm chồng tìm vợ không thuận lợi, số một
lần đò khó thành gia thất. Khi rơi vào cung Phu Thê, vợ chồng duyên kém
bền — lấy nhau như để trả nợ nghiệp. Bạch Hổ hãm địa ở Phu Thê còn dễ
khiến người hôn phối mất sớm, vợ chồng rơi vào cảnh sinh ly tử biệt.

Câu phú liên quan:

> *"Cự ngộ Hổ, chó đá chầu*
> *Ngộ Dương Đà, có thạch đầu tại gia*
> *Thiên Cơ, Bạch Hổ mà gia*
> *Tang Môn, Điếu Khách, là sa hoàng tuyền"*`,
  },

  {
    id: 'bach-ho-tu-linh-quan-ngu-ho-tam-linh',
    title: 'Bạch Hổ - Quan Ngũ Hổ - tâm linh căn đồng',
    sao: ['Bạch Hổ'],
    doUuTien: 55,
    tomTat: `Trong văn hóa Á Đông, Bạch Hổ là Hổ Trắng — một trong Ngũ Hổ
Thần Tướng (Quan Ngũ Hổ), là chư vị sơn thần uy linh có nhiệm vụ gác
cổng đền phủ, tiêu diệt tà ma và đem lại cân bằng cho ngũ phương trời
đất.

Năm ông Hổ năm màu tượng trưng cho năm hướng và năm ngũ hành, được thờ
để trấn giữ, không cho vong tà xâm nhập nơi tôn nghiêm.

Cách báo căn đồng số lính liên quan đến Bạch Hổ: khi Bạch Hổ đóng tại
cung Điền Trạch, có Tứ Linh hội chiếu (đối với người tuổi lẻ), đồng
thời cung Mệnh, Tật Ách hoặc Phúc Đức có sao chỉ căn số — đương số dễ
dính duyên nghiệp thờ Thánh, có căn đồng số lính, có duyên với Phật
Thánh, Đạo Mẫu.`,
  },

  {
    id: 'bach-ho-tai-menh-dac-dia',
    title: 'Bạch Hổ tại Mệnh - đắc địa (Dần Thân Mão Dậu)',
    sao: ['Bạch Hổ'],
    cung: ['Mệnh'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    doUuTien: 82,
    tomTat: `Khi Bạch Hổ **Đắc** địa tại Mệnh (Dần, Thân, Mão, Dậu), đương
số sở hữu nhiều nét tính cách nổi bật:

- Can đảm, quả cảm, có ý chí và nghị lực lớn
- Tài giỏi, có sự quyền biến, ứng phó nhanh nhạy với mọi nghịch cảnh
- Khả năng xét đoán tốt, lý luận giỏi, có tài hùng biện
- Sống độc lập, biết bứt phá trước nghịch cảnh
- Có lý tưởng sống rõ ràng, ứng biến linh hoạt

Riêng với nữ nhân, Bạch Hổ Đắc địa tại Mệnh cho khí phách và uy quyền
hơn người. Đương số thông minh, có tâm tính cùng ý chí mạnh mẽ như nam
nhân — mẫu người ngoài mềm trong rắn, đôi khi còn mạnh mẽ hơn cả nam
giới.

Đây là mẫu người lãnh đạo, phù hợp với chính trị, quân sự và hành pháp.`,
  },

  {
    id: 'bach-ho-tai-menh-ham-dia',
    title: 'Bạch Hổ tại Mệnh - hãm địa',
    sao: ['Bạch Hổ'],
    cung: ['Mệnh'],
    chi: ['Tý', 'Sửu', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Tuất', 'Hợi'],
    doUuTien: 80,
    tomTat: `Khi Bạch Hổ **Hãm** địa tại Mệnh (Tý, Sửu, Thìn, Tỵ, Ngọ, Mùi,
Tuất, Hợi), đương số tuy vẫn can đảm, quả cảm song tính tình lại hơi
ương ngạnh, bướng bỉnh, ngoan cố và cứng đầu. Chủ mệnh hay suy tư, lo
lắng, nhiều phiền muộn và mang nét cô độc; thích ăn ngon mặc đẹp, không
quá đặt nặng vấn đề gia giáo. Trong giao tế, đương số thích kiểm soát
và hay nghĩ tiêu cực.

Về phúc thọ và tai họa, cách này bất lợi cả cho cha mẹ, gia đạo, con
cái lẫn cho chính bản thân đương số trên các phương diện tâm sinh lý,
tính tình và vận số.

Với nữ nhân hãm địa, đương số gặp nhiều trục trặc về tình duyên, gia
đạo và hôn nhân. Chủ mệnh phải lấy chồng muộn, có khi phải cưới chạy
tang; nếu không thì góa bụa, đau khổ vì chồng con. Cách này còn bất lợi
cho việc sinh nở, ảnh hưởng đến tử cung và kinh nguyệt. Bạch Hổ ở vị
thế này cần đắc địa kèm sao giải mạnh mới chế giảm được phần nào.`,
  },

  {
    id: 'bach-ho-tai-menh-ham-sat-bai',
    title: 'Bạch Hổ Hãm + Sát Bại tinh tại Mệnh - khổ cực cô độc',
    sao: ['Bạch Hổ'],
    cung: ['Mệnh'],
    chi: ['Tý', 'Sửu', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Tuất', 'Hợi'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 75,
    tomTat: `Khi Bạch Hổ Hãm địa đi cùng các sát bại tinh thuộc bộ Lục
Sát tại Mệnh, đương số gặp nhiều tai họa nặng nề:

- Cuộc sống khổ cực, cô độc
- Hôn nhân khắc vợ hoặc khắc chồng, số góa bụa, cô đơn
- Có thể bị bắt bớ, giam cầm liên quan đến pháp luật
- Bệnh tật trầm kha, tai nạn nguy hiểm, có thể yểu tử`,
  },

  {
    id: 'bach-ho-cong-danh-su-nghiep',
    title: 'Bạch Hổ - Công danh sự nghiệp',
    sao: ['Bạch Hổ'],
    cung: ['Mệnh'],
    doUuTien: 70,
    tomTat: `Khi Bạch Hổ đi cùng cát tinh, đương số thông minh, tài năng
và hiển đạt về công danh sự nghiệp — có uy quyền, sắc sảo, can đảm và
nghị lực dồi dào.

Khi Bạch Hổ có văn tinh hội chiếu, đương số (đặc biệt là nam nhân)
thành đạt trong lĩnh vực chính trị. Khi đi kèm võ tinh, đương số thành
đạt về quân sự.

Khi Bạch Hổ gặp Thiên Hình, Không Kiếp và Hóa Kỵ, đương số dễ dính
kiện tụng, rắc rối pháp luật, dễ bị vu oan, hoặc trải qua nhiều lần
sụp đổ rồi lại đứng dậy.

Một đặc trưng phúc lộc cần ghi nhớ: Bạch Hổ không chủ về giàu sang phú
quý, mà là nền tảng để đương số tự thân lập nghiệp, đạt thành tựu bền
vững.`,
  },

  {
    id: 'bach-ho-cong-danh-dac-dia',
    title: 'Bạch Hổ Đắc địa - Của cải bền vững tự lập',
    sao: ['Bạch Hổ'],
    cung: ['Mệnh'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 65,
    tomTat: `Khi Bạch Hổ Đắc địa tại Mệnh, đương số có của cải đến chậm
nhưng giữ được lâu. Chủ mệnh không thích nhờ cậy, thuần một con đường
tự thân lập nghiệp.`,
  },

  {
    id: 'bach-ho-cong-danh-ham',
    title: 'Bạch Hổ Hãm - Tiền bạc trăn trở',
    sao: ['Bạch Hổ'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    doUuTien: 65,
    tomTat: `Khi Bạch Hổ Hãm địa tại Mệnh, tiền bạc là nỗi trăn trở thường
trực của đương số — làm bao nhiêu cũng không thấy đủ.`,
  },

  {
    id: 'bach-ho-tai-menh-han-tai-hoa',
    title: 'Bạch Hổ tại Mệnh - tai họa, hôn nhân',
    sao: ['Bạch Hổ'],
    cung: ['Mệnh'],
    doUuTien: 75,
    tomTat: `Bạch Hổ thủ Mệnh là một trong những sao cảnh báo về thương
tích, tai nạn và bệnh tật kéo dài. Không chỉ bản thân đương số, mà cả
cha mẹ, con cái và người thân trong gia đình cũng dễ vướng vận xui sức
khỏe, đặc biệt là các bệnh máu huyết, gân cốt hoặc tai nạn bất ngờ.

Về hôn nhân, sao này tạo nên cách "duyên nợ nghiệt duyên":

- Nữ mệnh dễ góa bụa, phải cưới chạy tang, hoặc ưu phiền vì chồng con
- Nam mệnh dễ khắc vợ; vợ lấy về dễ xa cách, ly tán, hoặc sống lạnh
  nhạt không thấu hiểu

Chỉ khi gặp được nhiều cát tinh hóa giải, đương số mới có hy vọng có
được một mái ấm yên bình, đủ đầy.`,
  },

  {
    id: 'bach-ho-tai-menh-kinh-duong',
    title: 'Bạch Hổ + Kình Dương tại Mệnh - khó thụ thai',
    sao: ['Bạch Hổ'],
    cung: ['Mệnh'],
    ketHop: ['Kình Dương'],
    doUuTien: 70,
    tomTat: `Khi Bạch Hổ đi cùng Kình Dương tại Mệnh, đương số khó thụ
thai, sinh khó, dễ sảy thai và gặp các vấn đề hậu sản.`,
  },

  {
    id: 'bach-ho-tai-menh-da-la',
    title: 'Bạch Hổ + Đà La tại Mệnh - khó thụ thai',
    sao: ['Bạch Hổ'],
    cung: ['Mệnh'],
    ketHop: ['Đà La'],
    doUuTien: 70,
    tomTat: `Khi Bạch Hổ đi cùng Đà La tại Mệnh, đương số khó thụ thai,
sinh khó, dễ sảy thai và gặp các vấn đề hậu sản.`,
  },

  {
    id: 'bach-ho-tai-menh-dia-kiep',
    title: 'Bạch Hổ + Địa Kiếp tại Mệnh - khó thụ thai',
    sao: ['Bạch Hổ'],
    cung: ['Mệnh'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Khi Bạch Hổ đi cùng Địa Kiếp tại Mệnh, đương số khó thụ thai,
sinh khó, dễ sảy thai và gặp các vấn đề hậu sản.`,
  },

  {
    id: 'bach-ho-tai-menh-thien-hinh',
    title: 'Bạch Hổ + Thiên Hình tại Mệnh - khó thụ thai',
    sao: ['Bạch Hổ'],
    cung: ['Mệnh'],
    ketHop: ['Thiên Hình'],
    doUuTien: 70,
    tomTat: `Khi Bạch Hổ đi cùng Thiên Hình tại Mệnh, đương số khó thụ
thai, sinh khó, dễ sảy thai và gặp các vấn đề hậu sản.`,
  },

  {
    id: 'bach-ho-tai-phu-mau',
    title: 'Bạch Hổ tại Phụ Mẫu',
    sao: ['Bạch Hổ'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Khi Bạch Hổ Hãm địa tại Phụ Mẫu, tuổi thọ của cha mẹ giảm
sút; ông bà sinh thành hay ốm đau bệnh tật, thường mắc các bệnh về
máu huyết. Bản thân đương số cũng dễ có bệnh di truyền, cả đời phải
lo toan và phiền não cả về cha mẹ lẫn bệnh tật của chính mình.

Khi Bạch Hổ Đắc địa tại Phụ Mẫu, cha mẹ đương số là người giỏi giang,
có công danh sự nghiệp tốt, có quyền thế và tiếng nói trong xã hội.
Tuy vẫn không tránh khỏi ốm đau trong cuộc sống nhưng mức độ chỉ ở
mức nhẹ, không phải lo lắng quá nhiều như khi hãm địa.`,
  },

  {
    id: 'bach-ho-tai-phu-mau-dac-cat-tinh',
    title: 'Bạch Hổ Đắc + Cát Tinh tại Phụ Mẫu - cha mẹ làm quan to',
    sao: ['Bạch Hổ'],
    cung: ['Phụ Mẫu'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 70,
    tomTat: `Khi Bạch Hổ Đắc địa đi cùng các cát tinh thuộc bộ Lục Cát
tại Phụ Mẫu, cha mẹ đương số có thể làm quan chức to hoặc làm chủ
doanh nghiệp.`,
  },

  {
    id: 'bach-ho-tai-phuc-duc',
    title: 'Bạch Hổ tại Phúc Đức',
    sao: ['Bạch Hổ'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `Khi Bạch Hổ Hãm địa tại Phúc Đức, trong dòng họ nhiều người
mắc bệnh máu huyết, ung nhọt; những bệnh này có thể di truyền tới đời
đương số và gây giảm thọ. Trong họ cũng nhiều người vất vả, nghèo khổ,
cô độc; có người chết non vì giảm tuổi thọ. Đương số cần chăm chỉ thờ
phụng tổ tiên để gia tăng phúc khí.

Về phương diện tâm linh, chủ mệnh phải quan tâm nhiều tới chuyện mồ mả,
thờ cúng tổ tiên ông bà cha mẹ. Gần mộ tổ tiên thường có một viên đá
trắng rất linh thiêng nằm ngay cạnh.

Khi Bạch Hổ Đắc địa tại Phúc Đức, ông bà tổ tiên xưa kia có người làm
quan lớn có uy quyền, rất linh thiêng. Trong dòng họ có nhiều người
thành đạt, làm quan chức to và có nhiều quyền hành.`,
  },

  {
    id: 'bach-ho-tai-phuc-duc-dac-cat-tinh',
    title: 'Bạch Hổ Đắc + Cát Tinh tại Phúc Đức - vinh danh dòng họ',
    sao: ['Bạch Hổ'],
    cung: ['Phúc Đức'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 70,
    tomTat: `Khi Bạch Hổ Đắc địa đi cùng các cát tinh thuộc bộ Lục Cát
tại Phúc Đức, đương số được vinh danh nhờ dòng họ và gia tộc.`,
  },

  {
    id: 'bach-ho-tai-dien-trach',
    title: 'Bạch Hổ tại Điền Trạch - duyên đất, đá trắng linh',
    sao: ['Bạch Hổ'],
    cung: ['Điền Trạch'],
    doUuTien: 78,
    tomTat: `Bạch Hổ tại Điền Trạch nói lên duyên đất đai đặc biệt của
đương số. Dưới nhà dễ có cốt, hoặc đất trước kia là nghĩa trang, mộ
địa; gần nhà thường có một viên đá trắng rất linh. Chủ mệnh có nhiều
duyên nợ với nơi đang ở — nhiều khi ở đó là để trả nghiệp nợ trước
đây gây ra. Đương số hay phải lo toan, nặng đầu về nhà cửa, đất đai
và con cái.

Các nghề phù hợp với cách này:

- Buôn bất động sản
- Kiến trúc sư
- Kỹ sư thi công xây dựng
- Quản lý dự án bất động sản

Về tính cách, Bạch Hổ cư Điền tạo nên người thích khoe khoang, phô
trương; muốn thể hiện sự giàu có bằng nhà to, sang trọng, hoành tráng.
Cơ quan công tác của đương số cũng đòi hỏi quy mô lớn, uy tín và đẳng
cấp.`,
  },

  {
    id: 'bach-ho-tai-quan-loc',
    title: 'Bạch Hổ tại Quan Lộc',
    sao: ['Bạch Hổ'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `Khi Bạch Hổ đóng tại Quan Lộc, đương số là người nặng lòng
nhiều với công việc — sự nghiệp như duyên nợ của cuộc đời, lúc nào
cũng công việc, đặc biệt rõ nét khi Thân cư Quan.

Chủ mệnh coi sự nghiệp như sứ mệnh đời mình, không ngại khó và luôn
xông pha — song cũng chính vì vậy mà dễ tự đẩy mình vào căng thẳng,
vất vả.`,
  },

  {
    id: 'bach-ho-tai-quan-loc-cat-tinh',
    title: 'Bạch Hổ + Cát Tinh tại Quan Lộc - thăng tiến nổi danh',
    sao: ['Bạch Hổ'],
    cung: ['Quan Lộc'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 73,
    tomTat: `Khi Bạch Hổ đi cùng các cát tinh thuộc bộ Lục Cát tại Quan
Lộc, đường công danh của đương số rất thuận lợi: thăng tiến nhanh, uy
quyền tăng lên, đảm nhiệm vị trí cao và gây dựng được uy tín xã hội.
Đương số phát đạt và nổi danh về học thuật.`,
  },

  {
    id: 'bach-ho-tai-quan-loc-sat-tinh',
    title: 'Bạch Hổ + Sát tinh tại Quan Lộc - vu oan hình tù',
    sao: ['Bạch Hổ'],
    cung: ['Quan Lộc'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 73,
    tomTat: `Khi Bạch Hổ đi cùng sát tinh thuộc bộ Lục Sát tại Quan Lộc,
đương số gặp rắc rối và tai họa nhiều — dễ bị vu oan, bắt bớ, hình tù
vì công việc.`,
  },

  {
    id: 'bach-ho-tai-quan-loc-dan-ho-ve-rung',
    title: 'Bạch Hổ tại Quan Lộc tại Dần - "Hổ về rừng"',
    sao: ['Bạch Hổ'],
    cung: ['Quan Lộc'],
    chi: ['Dần'],
    doUuTien: 80,
    tomTat: `Bạch Hổ đóng tại Quan Lộc cư Dần thành cách "Hổ về rừng".

Khi gặp thời vận tốt, đương số phát huy được tài năng và đạt chức
quyền cao. Cách này đặc biệt tốt cho các tuổi Giáp, Kỷ — đương số dễ
nổi danh hậu thế.`,
  },

  {
    id: 'bach-ho-tai-no-boc',
    title: 'Bạch Hổ tại Nô Bộc',
    sao: ['Bạch Hổ'],
    cung: ['Nô Bộc'],
    doUuTien: 72,
    tomTat: `Bạch Hổ tại Nô Bộc cho thấy bạn bè, đồng nghiệp và người giúp
việc của đương số có tính cách ương ngạnh, bướng bỉnh, dũng mãnh, hay
lấn át và vượt quyền chủ mệnh. Bản thân đương số phải lo âu, quan tâm
cho bạn bè, đồng nghiệp và cấp dưới nhiều hơn bình thường.

Khi Bạch Hổ Đắc địa, đương số có nhiều bạn bè và đồng nghiệp làm quan,
có chức quyền — tuy nhiên điều này có thể tạo áp lực và sự cạnh tranh
lớn cho chính chủ mệnh.

Khi Bạch Hổ Hãm địa, đương số cần cẩn trọng vì dễ dính rắc rối và thị
phi với những người này.`,
  },

  {
    id: 'bach-ho-tai-thien-di',
    title: 'Bạch Hổ tại Thiên Di',
    sao: ['Bạch Hổ'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `Khi Bạch Hổ đóng tại Thiên Di, đương số có nhiều mối lo toan
và đi ra ngoài thường gánh vác trách nhiệm với xã hội, với mọi người
xung quanh.

Khi Bạch Hổ Hãm địa, ra ngoài đương số dễ bị lấn át, bắt nạt; đi xa
dễ gặp tai nạn và ốm đau. Khi Đắc địa, đương số có quyền lực khi ra
ngoài, hay được ở gần người có quyền chức.

Để hóa giải Bạch Hổ tại Di, đương số nên tránh xa rủi ro và không gây
tranh cãi, thị phi với người khác.`,
  },

  {
    id: 'bach-ho-tai-thien-di-ta-phu-don-thu',
    title: 'Bạch Hổ Đắc + Tả Phù tại Thiên Di - thư ký trợ lý quyền lớn',
    sao: ['Bạch Hổ'],
    cung: ['Thiên Di'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    ketHop: ['Tả Phù'],
    doUuTien: 70,
    tomTat: `Khi Bạch Hổ Đắc địa đi cùng Tả Phù đơn thủ tại Thiên Di,
đương số dễ làm thư ký, trợ lý cho người quyền lớn (xét theo cấu trúc
Tả Phù đơn thủ tại bản cung tương ứng).`,
  },

  {
    id: 'bach-ho-tai-thien-di-huu-bat-don-thu',
    title: 'Bạch Hổ Đắc + Hữu Bật tại Thiên Di - thư ký trợ lý quyền lớn',
    sao: ['Bạch Hổ'],
    cung: ['Thiên Di'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    ketHop: ['Hữu Bật'],
    doUuTien: 70,
    tomTat: `Khi Bạch Hổ Đắc địa đi cùng Hữu Bật đơn thủ tại Thiên Di,
đương số dễ làm thư ký, trợ lý cho người quyền lớn (xét theo cấu trúc
Hữu Bật đơn thủ tại bản cung tương ứng).`,
  },

  {
    id: 'bach-ho-tai-tat-ach',
    title: 'Bạch Hổ tại Tật Ách - bệnh máu huyết',
    sao: ['Bạch Hổ'],
    cung: ['Tật Ách'],
    doUuTien: 80,
    tomTat: `Khi Bạch Hổ đóng tại Tật Ách, đương số gặp những vấn đề sức
khỏe lớn — đặc biệt liên quan đến máu huyết và gân cốt:

- Hoại huyết, huyết áp cao
- Đau gân, đau tim, nhức xương, tê thấp
- Nhiễm trùng máu, các bệnh tim mạch

Đối với nữ nhân, ảnh hưởng càng nặng nề: kinh nguyệt không đều, các
vấn đề về tử cung, ảnh hưởng đến chuyện sinh nở.

Về tâm lý và tinh thần, đương số hay rơi vào trạng thái u sầu, buồn
bã, bi quan.`,
  },

  {
    id: 'bach-ho-tai-tat-ach-hinh-liem-ky',
    title: 'Bạch Hổ + Thiên Hình + Liêm Trinh + Hóa Kỵ tại Tật Ách - hình tù',
    sao: ['Bạch Hổ'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Hình', 'Liêm Trinh', 'Hóa Kỵ'],
    doUuTien: 75,
    tomTat: `Khi Bạch Hổ đi cùng Thiên Hình, Liêm Trinh và Hóa Kỵ tại
Tật Ách, đương số gặp tai họa hình tù, hình ngục — dễ phạm pháp luật
và bị bắt bớ.`,
  },

  {
    id: 'bach-ho-tai-tai-bach',
    title: 'Bạch Hổ tại Tài Bạch',
    sao: ['Bạch Hổ'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `Khi Bạch Hổ đóng tại Tài Bạch, đương số là người có nhiều
lo toan và nặng nề về tiền bạc, lúc nào cũng vất vả chăm chăm vào việc
kiếm tiền.

Về nghề nghiệp, Bạch Hổ cư Tài cho ra mẫu người có uy quyền trong
chuyện tiền bạc, dễ làm các nghề liên quan đến tài chính: kế toán,
kiểm toán, thủ quỹ, thủ kho, quản lý tài sản, hoặc kinh doanh quy mô
lớn.`,
  },

  {
    id: 'bach-ho-tai-tai-bach-hinh-liem-ky',
    title: 'Bạch Hổ + Thiên Hình + Liêm Trinh + Hóa Kỵ tại Tài Bạch - tù tội vì tiền',
    sao: ['Bạch Hổ'],
    ketHop: ['Thiên Hình', 'Liêm Trinh', 'Hóa Kỵ'],
    cung: ['Tài Bạch'],
    doUuTien: 70,
    tomTat: `Khi Bạch Hổ đi cùng Thiên Hình, Liêm Trinh và Hóa Kỵ tại
Tài Bạch, đương số gặp tai họa liên quan đến tiền bạc — có thể ngồi
tù vì tiền, hoặc bị lừa gạt mất trắng.`,
  },

  {
    id: 'bach-ho-tai-tu-tuc',
    title: 'Bạch Hổ tại Tử Tức - duyên nợ con cái',
    sao: ['Bạch Hổ'],
    cung: ['Tử Tức'],
    doUuTien: 78,
    tomTat: `Bạch Hổ tại Tử Tức ám chỉ đương số có nhiều duyên nợ với con
cái từ nhiều kiếp trước, sang đến kiếp này phải trả.

Đương số khó sinh con, dễ sảy thai hoặc sinh non ngày tháng; sinh ra
thì khó nuôi, hoặc có sinh con nhưng lại không được nuôi. Vì là duyên
nợ tiền kiếp nên phải gặp và phải trả, không thể thoát.`,
  },

  {
    id: 'bach-ho-tai-tu-tuc-kinh-duong',
    title: 'Bạch Hổ + Kình Dương tại Tử Tức - khó có con',
    sao: ['Bạch Hổ'],
    cung: ['Tử Tức'],
    ketHop: ['Kình Dương'],
    doUuTien: 73,
    tomTat: `Khi Bạch Hổ đi cùng Kình Dương tại Tử Tức, đương số khó có
con; trường hợp nặng còn có thể không có con cái.`,
  },

  {
    id: 'bach-ho-tai-tu-tuc-that-sat',
    title: 'Bạch Hổ + Thất Sát tại Tử Tức - khó có con',
    sao: ['Bạch Hổ'],
    cung: ['Tử Tức'],
    ketHop: ['Thất Sát'],
    doUuTien: 73,
    tomTat: `Khi Bạch Hổ đi cùng Thất Sát tại Tử Tức, đương số khó có
con; trường hợp nặng còn có thể không có con cái.`,
  },

  {
    id: 'bach-ho-tai-tu-tuc-dia-khong',
    title: 'Bạch Hổ + Địa Không tại Tử Tức - sinh nhiều nuôi ít',
    sao: ['Bạch Hổ'],
    cung: ['Tử Tức'],
    ketHop: ['Địa Không'],
    doUuTien: 73,
    tomTat: `Khi Bạch Hổ đi cùng Địa Không tại Tử Tức, đương số sinh nhiều
nuôi ít, hay sảy thai và có thể phải nạo phá thai.`,
  },

  {
    id: 'bach-ho-tai-tu-tuc-dia-kiep',
    title: 'Bạch Hổ + Địa Kiếp tại Tử Tức - sinh nhiều nuôi ít',
    sao: ['Bạch Hổ'],
    cung: ['Tử Tức'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 73,
    tomTat: `Khi Bạch Hổ đi cùng Địa Kiếp tại Tử Tức, đương số sinh nhiều
nuôi ít, hay sảy thai và có thể phải nạo phá thai.`,
  },

  {
    id: 'bach-ho-tai-tu-tuc-khong-kiep-hinh',
    title: 'Bạch Hổ + Địa Không + Địa Kiếp + Thiên Hình tại Tử Tức - sinh mổ con chết bụng mẹ',
    sao: ['Bạch Hổ'],
    cung: ['Tử Tức'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Thiên Hình'],
    doUuTien: 70,
    tomTat: `Khi Bạch Hổ đi cùng Địa Không, Địa Kiếp và Thiên Hình tại
Tử Tức, đương số phải sinh mổ, sinh khó, hoặc nặng hơn là con chết
trong bụng mẹ.`,
  },

  {
    id: 'bach-ho-tai-tu-tuc-thai',
    title: 'Bạch Hổ + Thai tại Tử Tức - sảy thai chết non',
    sao: ['Bạch Hổ'],
    cung: ['Tử Tức'],
    ketHop: ['Thai'],
    doUuTien: 73,
    tomTat: `Khi Bạch Hổ đi cùng Thai tại Tử Tức, đương số dễ sảy thai
hoặc con chết non.`,
  },

  {
    id: 'bach-ho-tai-phu-the',
    title: 'Bạch Hổ tại Phu Thê - duyên nghiệp hôn nhân',
    sao: ['Bạch Hổ'],
    cung: ['Phu Thê'],
    doUuTien: 80,
    tomTat: `Bạch Hổ tại Phu Thê cho thấy đương số có nhiều duyên nghiệp
với người vợ hoặc người chồng. Chủ mệnh nhiều lo toan, trăn trở cho
người hôn phối; hôn nhân thường không bền lâu.

Đương số dễ rơi vào cảnh tang chồng tang vợ, hoặc gặp cảnh ly thân,
ly hôn, ở góa khi các cung phối thuộc xấu. Cách này còn mang ý nghĩa
"cưới chạy tang"; người hôn phối hay ốm đau bệnh tật liên miên.

Khi Bạch Hổ Đắc địa, người hôn phối là người uy quyền. Khi có thêm cát
tinh, đặc biệt là Hóa Quyền hoặc Khôi Việt, người hôn phối thường làm
quan to, đồng thời các tác nhân xấu về bệnh tật cũng giảm thiểu. Người
hôn phối trợ giúp tốt cho sự nghiệp đương số — tuy nhiên cũng dẫn tới
xu hướng gia trưởng trong gia đình.`,
  },

  {
    id: 'bach-ho-tai-huynh-de',
    title: 'Bạch Hổ tại Huynh Đệ',
    sao: ['Bạch Hổ'],
    cung: ['Huynh Đệ'],
    doUuTien: 72,
    tomTat: `Bạch Hổ tại Huynh Đệ ảnh hưởng không tốt đến mối quan hệ
anh chị em của đương số.

Chủ mệnh hay phải lo lắng, gặp nhiều khó khăn phiền muộn vì anh chị
em; bản thân thường phải đứng ra gánh vác giúp đỡ anh chị em rất
nhiều. Anh chị em trong gia đình hay ốm đau, thậm chí có người chết
non.

Khi Bạch Hổ Đắc địa, anh chị em đương số thành đạt, có uy quyền trong
xã hội, song lại hay lấn át và chuyên quyền với chủ mệnh — dễ gây xung
đột, không hòa thuận trong gia đình. Có thể là hiểu lầm, hoặc cách
biệt tuổi tác và tính cách quá lớn dẫn tới rạn nứt — đương số cần vun
đắp khéo léo mới giữ được hòa khí lâu dài.`,
  },

  {
    id: 'bach-ho-tau-thu-hung-bien',
    title: 'Bạch Hổ + Tấu Thư - tài hùng biện',
    sao: ['Bạch Hổ'],
    ketHop: ['Tấu Thư'],
    doUuTien: 75,
    tomTat: `Khi Bạch Hổ đi cùng Tấu Thư, đương số chủ về thành công trong
lĩnh vực ngôn ngữ học.

Đặc tính của cách này:

- Sở hữu tài ăn nói hùng biện
- Có khả năng diễn thuyết hùng hồn
- Ngôn từ lưu loát, có tính thuyết phục cao
- Sức quyến rũ sâu sắc, biết khuấy động đám đông bằng lời nói sắc sảo

Các nghề tiêu biểu: chính khách, ứng viên tranh cử, giáo sư, quan tòa,
luật sư, nhà diễn thuyết, MC.

Khi có thêm Lưu Hà, Lưu Thiên Khốc, Lưu Thiên Hư, Văn Xương hoặc Văn
Khúc, tài hùng biện diễn thuyết của đương số có thể vươn đến tầm quốc
tế và thành danh sớm.`,
  },

  {
    id: 'bach-ho-kinh-duong-thien-hinh',
    title: 'Bạch Hổ + Kình Dương / Thiên Hình - võ tướng (Hổ Kình, Hổ Hình)',
    sao: ['Bạch Hổ'],
    ketHop: ['Kình Dương', 'Thiên Hình'],
    doUuTien: 75,
    tomTat: `Bạch Hổ đi cùng Kình Dương (gọi là Hổ Kình) hoặc Bạch Hổ đi
cùng Thiên Hình (gọi là Hổ Hình) — đồng cung hay hợp chiếu — đều cho
ra mẫu võ tướng:

- Tinh thần kiên định, chí khí hiên ngang
- Quyết tâm cao, có mưu cơ quyền biến
- Khả năng chiến đấu mạnh mẽ, hữu dũng đa mưu
- Tài thao lược

Đương số rất đắc lợi về võ nghiệp, phù hợp với quân sự, công an, hành
pháp, tư pháp, hoặc lãnh đạo doanh nghiệp ở các vị trí cần sự quyết
đoán.`,
  },

  {
    id: 'bach-ho-tham-lang-thu-du-can',
    title: 'Bạch Hổ + Tham Lang - bị thú dữ cắn',
    sao: ['Bạch Hổ'],
    ketHop: ['Tham Lang'],
    doUuTien: 65,
    tomTat: `Bạch Hổ đi cùng Tham Lang ám chỉ đương số dễ bị thú dữ cắn —
cần chú ý khi tiếp xúc với động vật.

Khi đi cùng các sao thuộc bộ Sát - Hình - Kỵ, bộ này có thể kích phát
họa lớn: dấu hiệu bị thú dữ cắn chết, mất mát đột ngột, tử vong không
báo trước. Người luận đoán cần xem và kiểm tra hạn để nhận định năm
có tai họa.

Cách phòng tránh: đương số nên hạn chế làm việc với động vật hoang dã,
không nuôi thú dữ, cẩn thận khi đi rừng hay sở thú trong các năm hạn
xấu.`,
  },

  {
    id: 'bach-ho-tu-hung-tang-ho-dieu-binh',
    title: 'Tang - Hổ - Điếu - Binh (Tứ Hung) - tai nạn chết người',
    sao: ['Bạch Hổ'],
    ketHop: ['Tang Môn', 'Điếu Khách', 'Phục Binh'],
    doUuTien: 78,
    tomTat: `Bạch Hổ đi cùng Tang Môn, Điếu Khách và Phục Binh hợp thành
bộ Tứ Hung — rất độc.

Bộ này báo hiệu tai nạn chết người, họa lớn, tang tóc trong nhà, sự
ly biệt bất ngờ, đại tang trong gia đình.

Cách hóa giải: nếu có Thiên Đồng chiếu thì hóa giải được phần lớn —
Thiên Đồng là phúc tinh, có khả năng chế ngự sát khí.

Đây là một trong những cách cục nguy hiểm nhất liên quan đến tai họa
tang tóc trong tử vi — người luận đoán cần kiểm tra cẩn thận khi luận
giải.`,
  },

  {
    id: 'bach-ho-luu-tang-luu-ho-dai-tang',
    title: 'Bạch Hổ + Lưu Tang Môn + Lưu Bạch Hổ - đại tang liên tiếp',
    sao: ['Bạch Hổ'],
    ketHop: ['Lưu Tang Môn', 'Lưu Bạch Hổ'],
    doUuTien: 75,
    tomTat: `Bạch Hổ đi cùng Lưu Tang Môn và Lưu Bạch Hổ hợp thành bộ Tứ
Hung Lưu — mang đến tang tóc liên tiếp, ưu phiền nhiều và đại tang.
Đây là một cách cục khốn khổ, báo hiệu mất mát và đau khổ trong cuộc
sống.

Khi đương số bước vào đại hạn hoặc tiểu hạn có những sao này (đặc biệt
là đồng cung), phải đề phòng kỹ lưỡng — thời điểm này rất dễ gặp đại
tang hoặc tai họa khiến cả gia đình chao đảo.

Trường hợp Bạch Hổ đi cùng Tang Môn, Lưu Tang, Lưu Hổ, Lưu Khốc và Lưu
Hư báo hiệu nhiều tang liên tiếp, có đại tang.`,
  },

  {
    id: 'bach-ho-khoc-ma-suc-vat-chet',
    title: 'Bạch Hổ + Thiên Khốc + Thiên Mã - súc vật chết',
    sao: ['Bạch Hổ'],
    ketHop: ['Thiên Khốc', 'Thiên Mã'],
    doUuTien: 55,
    tomTat: `Bạch Hổ đi cùng Thiên Khốc và Thiên Mã báo hiệu súc vật chết
vì bệnh tật.

Cách này đặc trưng cho người chăn nuôi, làm nghề thú y, hoặc nuôi thú
cưng — trong năm hạn dễ mất con vật yêu quý vì bệnh.

Theo nghĩa rộng, Mã chủ ngựa xe và sự di chuyển, nên cách này còn ám
chỉ mất mát tài sản di chuyển.`,
  },

  {
    id: 'bach-ho-ho-rieu-ho-da-can',
    title: 'Bạch Hổ + Thiên Riêu / Đà La / Hình / Khốc - bị ác thú cắn',
    sao: ['Bạch Hổ'],
    doUuTien: 60,
    tomTat: `Có nhiều tổ hợp Bạch Hổ đều báo hiệu cảnh đương số bị ác thú
cắn:

- Bạch Hổ đi cùng Thiên Riêu (Hổ Riêu)
- Bạch Hổ đi cùng Đà La, Hóa Kỵ và Thái Dương (Hổ Đà Kỵ Nhật)
- Bạch Hổ đi cùng Đà La và Thiên Hình (Hổ Đà Hình)
- Bạch Hổ đi cùng Thiên Khốc và Thiên Riêu (Hổ Khốc Riêu)
- Bạch Hổ tại Dần đi với Địa Kiếp tại Tuất

Tất cả các bộ này đều cảnh báo đương số dễ bị thú dữ cắn, động vật
tấn công — đặc biệt khi gặp năm hạn có sao tương tự.

Lời khuyên: tránh các nghề liên quan đến thú dữ, kiểm tra hạn trước
khi đi rừng, săn bắn hoặc nuôi động vật hoang.`,
  },

  {
    id: 'bach-ho-vao-han',
    title: 'Bạch Hổ vào hạn - cách giải',
    sao: ['Bạch Hổ'],
    doUuTien: 55,
    tomTat: `Khi Bạch Hổ vào hạn, người luận đoán cần xem xét thật kỹ —
đặc biệt chú ý các bộ sao Lưu. Vì Bạch Hổ chủ về máu huyết, bệnh tật,
ốm đau, tù tội và tang tóc, nên Lưu Bạch Hổ đi đến đâu sẽ mang theo
phiền não tới đó.

Trong hạn Bạch Hổ, tính khí đương số cương quyết, mạnh mẽ — nếu không
kiểm soát sẽ chuyển thành cứng đầu, ngang ngược. Chủ mệnh dễ rơi vào
bẫy tâm lý với lối tư duy "trắng - đen", hành xử thiếu cân nhắc và tự
rước họa vào thân.

Cách giải hạn Bạch Hổ đơn giản nhất là điều chỉnh tâm tính:

- Giữ tinh thần ổn định
- Biết suy xét trước sau
- Tránh vì nóng vội mà hành động thiếu suy nghĩ

Khả năng kiểm soát cảm xúc chính là chìa khóa mạnh nhất giúp đương số
vượt qua được vận hạn này.`,
  },

  {
    id: 'bach-ho-theo-do-tuoi',
    title: 'Bạch Hổ - ảnh hưởng theo các giai đoạn đời',
    sao: ['Bạch Hổ'],
    doUuTien: 40,
    tomTat: `Ảnh hưởng của Bạch Hổ biến chuyển theo từng chặng đường đời
của đương số.

Tuổi nhỏ (đến hết tuổi dậy thì): Bạch Hổ dù đắc hay hãm đều tạo ảnh
hưởng lớn khi đương số còn nhỏ. Bắt đầu có nhận thức và kết thúc tuổi
dậy thì là giai đoạn mạnh về bản năng, khó kiểm soát rủi ro. Trẻ có
Mệnh Bạch Hổ hoặc đang trong hạn Bạch Hổ rất cần cha mẹ quan tâm sát
sao để tránh tai họa nghiêm trọng và khó lường.

Sau 30 tuổi: với Mệnh Bạch Hổ, ảnh hưởng giảm nhẹ vì tính khí đương số
đã chín chắn, biết suy xét kỹ càng. Tuy nhiên chủ mệnh vẫn phải đề
phòng các hạn có sao Bạch Hổ chiếu qua.

Hậu vận: Bạch Hổ có thể mang lại lợi thế khi về già. Đương số có Bạch
Hổ ở cung Thân, hoặc sau 40-60 tuổi nhập vận Bạch Hổ, vẫn tiếp tục
tìm kiếm lý tưởng sống và cống hiến cho xã hội thay vì nghỉ ngơi an
nhàn. Tuy nhiên, sao này khiến chủ mệnh trở nên khó tính hơn — dễ ảnh
hưởng đến mối quan hệ với con cháu trong nhà.`,
  },

  {
    id: 'bach-ho-loi-khuyen-tu-duong',
    title: 'Lời khuyên tu dưỡng cho người Bạch Hổ',
    sao: ['Bạch Hổ'],
    doUuTien: 35,
    tomTat: `Bạch Hổ là tinh tú đặc biệt — vừa mang khí chất thần thú uy
dũng, vừa chứa đựng những thử thách nghiệt ngã của cuộc đời.

Bạch Hổ chỉ xấu khi ở vị trí không tốt (hãm địa), bị các sát hình kỵ
tác động, hoặc bị kích phát thành tai họa.

Khi biết trước số mệnh, đương số có thể từ hành động mà thay đổi:

- Lấy đức hóa sát — dùng đức độ thay cho tranh đấu
- Lấy trí tuệ soi đường — không hành động vội vã
- Tích cực làm việc thiện — chuyển hung thành cát
- Tu tâm tính — kiểm soát cảm xúc, không nóng nảy
- Chăm phụng tổ tiên — đặc biệt khi Hổ ở Phúc Đức hoặc Điền Trạch
- Thờ kính Phật Thánh — nếu có căn đồng số lính

Đương số vẫn có cơ hội chuyển hung thành cát — Tử Vi không phải định
mệnh, mà là định hướng để tu dưỡng.`,
  },
];
