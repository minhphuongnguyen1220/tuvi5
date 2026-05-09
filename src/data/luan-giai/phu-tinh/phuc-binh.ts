import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO PHỤC BINH - Hỏa, Ác Tinh, vòng Lộc Tồn (vị trí 11)
 * LUÔN đối xung với Tướng Quân - chủ về cơ mưu, xảo trá, đa nghi
 */
export const luanGiai_PhucBinh: DoanLuanGiai[] = [
  {
    id: 'phuc-binh-tinh-chat-chung',
    title: 'Phục Binh - Đặc tính chung',
    sao: ['Phục Binh'],
    doUuTien: 30,
    tomTat: `**Phục Binh** là phụ tinh thuộc vòng Lộc Tồn, đứng ở vị trí thứ 11,
ngũ hành Hỏa và hóa khí Ác Tinh. Sao luôn đối xung với Tướng Quân (cách 6
cung), chủ về cơ mưu, quyền biến, xảo trá, thủ đoạn, dối lừa, đa nghi và ám
hại.

Về bản chất, đương số có Phục Binh không có sức mạnh thể chất như Tướng
Quân mà bù lại bằng sự khôn ngoan và xảo trá. Chủ mệnh biết dồn cơn bực
tức để đợi thời cơ trả thù, dùng mưu mẹo thay cho quyền biến. Vì khéo che
giấu nên đương số đôi khi trở thành khó đoán, lắm dã tâm và nham hiểm — dễ
bị nhìn nhận như một kẻ xấu.

Phục Binh phần lớn mang ý nghĩa xấu ở các cung, trừ khi đi với bộ Binh Hình
Tướng Ấn — đó là cách chỉ võ nghiệp uy quyền.`,
  },

  {
    id: 'phuc-binh-tai-menh',
    title: 'Phục Binh tại Mệnh',
    sao: ['Phục Binh'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `Khi Phục Binh thủ Mệnh, đương số là người có tính đố kỵ và hay
cạnh tranh ngầm, hay nói xấu dèm pha người khác. Theo lẽ "gieo nhân nào gặt
quả nấy", chủ mệnh cũng dễ bị người khác đố kỵ và mưu hại lại.

Tính cách đương số khó đoán, dễ có hành động hay suy nghĩ khiến người chung
quanh bất ngờ.`,
  },

  {
    id: 'phuc-binh-tai-menh-kiep',
    title: 'Phục Binh + Địa Kiếp tại Mệnh - Kẻ gian',
    sao: ['Phục Binh'],
    cung: ['Mệnh'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 73,
    tomTat: `Khi Phục Binh đi cùng Địa Kiếp tại Mệnh, đương số trở thành kẻ
gian, trộm cắp, lừa đảo và hay đâm sau lưng.`,
  },

  {
    id: 'phuc-binh-tai-menh-da',
    title: 'Phục Binh + Đà La tại Mệnh - Kẻ gian',
    sao: ['Phục Binh'],
    cung: ['Mệnh'],
    ketHop: ['Đà La'],
    doUuTien: 73,
    tomTat: `Khi Phục Binh đi cùng Đà La tại Mệnh, đương số trở thành kẻ gian,
trộm cắp, lừa đảo và hay đâm sau lưng.`,
  },

  {
    id: 'phuc-binh-tai-menh-hoa-ky',
    title: 'Phục Binh + Hóa Kỵ tại Mệnh - Kẻ gian',
    sao: ['Phục Binh'],
    cung: ['Mệnh'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 73,
    tomTat: `Khi Phục Binh đi cùng Hóa Kỵ tại Mệnh, đương số trở thành kẻ
gian, trộm cắp, lừa đảo và hay đâm sau lưng.`,
  },

  {
    id: 'phuc-binh-tai-menh-hoa-tinh',
    title: 'Phục Binh + Hỏa Tinh tại Mệnh - Kẻ gian',
    sao: ['Phục Binh'],
    cung: ['Mệnh'],
    ketHop: ['Hỏa Tinh'],
    doUuTien: 73,
    tomTat: `Khi Phục Binh đi cùng Hỏa Tinh tại Mệnh, đương số trở thành kẻ
gian, trộm cắp, lừa đảo và hay đâm sau lưng.`,
  },

  {
    id: 'phuc-binh-tai-menh-linh',
    title: 'Phục Binh + Linh Tinh tại Mệnh - Kẻ gian',
    sao: ['Phục Binh'],
    cung: ['Mệnh'],
    ketHop: ['Linh Tinh'],
    doUuTien: 73,
    tomTat: `Khi Phục Binh đi cùng Linh Tinh tại Mệnh, đương số trở thành kẻ
gian, trộm cắp, lừa đảo và hay đâm sau lưng.`,
  },

  {
    id: 'phuc-binh-tai-menh-cat-tinh',
    title: 'Phục Binh + Lục Cát tại Mệnh - Mưu lược tài ba',
    sao: ['Phục Binh'],
    cung: ['Mệnh'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 73,
    tomTat: `Khi Phục Binh tại Mệnh gặp một trong sáu cát tinh — Tả Phù, Hữu
Bật, Văn Xương, Văn Khúc, Thiên Khôi hay Thiên Việt — đương số trở thành
người thông minh, đa mưu và quyền biến, khó mà bị lừa, là một nhà mưu lược
tài ba.`,
  },

  {
    id: 'phuc-binh-tai-phu-mau',
    title: 'Phục Binh tại Phụ Mẫu',
    sao: ['Phục Binh'],
    cung: ['Phụ Mẫu'],
    doUuTien: 70,
    tomTat: `Khi Phục Binh cư Phụ Mẫu, cha mẹ của đương số là người khôn
ngoan và khó đoán; chủ mệnh làm gì cũng không qua khỏi mắt bố mẹ.

Bù lại, đương số là người con hiếu thảo, biết lắng nghe và chăm sóc cha
mẹ.`,
  },

  {
    id: 'phuc-binh-tai-phu-mau-dao',
    title: 'Phục Binh + Đào Hoa tại Phụ Mẫu - Cha mẹ phản bội nhau',
    sao: ['Phục Binh'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Đào Hoa'],
    doUuTien: 70,
    tomTat: `Khi Phục Binh đi cùng Đào Hoa tại Phụ Mẫu, cha mẹ của đương số
dễ phản bội nhau, có tình nhân bên ngoài.`,
  },

  {
    id: 'phuc-binh-tai-phu-mau-hong',
    title: 'Phục Binh + Hồng Loan tại Phụ Mẫu - Cha mẹ phản bội nhau',
    sao: ['Phục Binh'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Hồng Loan'],
    doUuTien: 70,
    tomTat: `Khi Phục Binh đi cùng Hồng Loan tại Phụ Mẫu, cha mẹ của đương
số dễ phản bội nhau, có tình nhân bên ngoài.`,
  },

  {
    id: 'phuc-binh-tai-phu-mau-rieu',
    title: 'Phục Binh + Thiên Riêu tại Phụ Mẫu - Cha mẹ phản bội nhau',
    sao: ['Phục Binh'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Thiên Riêu'],
    doUuTien: 70,
    tomTat: `Khi Phục Binh đi cùng Thiên Riêu tại Phụ Mẫu, cha mẹ của đương
số dễ phản bội nhau, có tình nhân bên ngoài.`,
  },

  {
    id: 'phuc-binh-tai-phu-mau-thai',
    title: 'Phục Binh + Thai tại Phụ Mẫu - Cha mẹ phản bội nhau',
    sao: ['Phục Binh'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Thai'],
    doUuTien: 70,
    tomTat: `Khi Phục Binh đi cùng Thai tại Phụ Mẫu, cha mẹ của đương số dễ
phản bội nhau, có tình nhân bên ngoài.`,
  },

  {
    id: 'phuc-binh-tai-phuc-duc',
    title: 'Phục Binh tại Phúc Đức',
    sao: ['Phục Binh'],
    cung: ['Phúc Đức'],
    doUuTien: 70,
    tomTat: `Khi Phục Binh cư Phúc Đức, trong dòng họ đương số nhiều người
mang tính tính toán so đo, ngầm hại lẫn nhau. Gia đình người hôn phối cũng
nhiều mưu tính sau lưng chủ mệnh.`,
  },

  {
    id: 'phuc-binh-tai-phuc-duc-tu-tuyet',
    title: 'Phục Binh + Tử + Tuyệt tại Phúc Đức - Chết trận',
    sao: ['Phục Binh'],
    cung: ['Phúc Đức'],
    ketHop: ['Tử', 'Tuyệt'],
    doUuTien: 68,
    tomTat: `Khi Phục Binh đi cùng Tử và Tuyệt tại Phúc Đức, trong nhà đương
số có người chết trận hoặc chết đường chết chợ.`,
  },

  {
    id: 'phuc-binh-tai-dien-trach',
    title: 'Phục Binh tại Điền Trạch',
    sao: ['Phục Binh'],
    cung: ['Điền Trạch'],
    doUuTien: 72,
    tomTat: `Khi Phục Binh cư Điền Trạch, nơi ở hoặc nơi làm việc của đương
số dễ có trộm cắp xung quanh. Chủ mệnh là người nhiều mưu mô, toan tính về
của cải đất đai; hoặc ngược lại dễ bị mưu mô chiếm hữu, lừa lọc tài sản —
mua đất bị lừa bán giá cao, bị làm giả giấy tờ.

Về mặt tâm linh: Phục Binh luôn đối xung với Tướng Quân, nên Phục Binh
cư Điền thì đất cát dễ có vong, có cốt.`,
  },

  {
    id: 'phuc-binh-tai-quan-loc',
    title: 'Phục Binh tại Quan Lộc',
    sao: ['Phục Binh'],
    cung: ['Quan Lộc'],
    doUuTien: 75,
    tomTat: `Khi Phục Binh cư Quan Lộc, công danh của đương số hay bị tiểu
nhân rình rập dèm pha, đường tiến thân trắc trở; hoặc ở chiều ngược lại,
chủ mệnh là người đa mưu nhiều kế, sẵn sàng chơi xấu người khác để đạt
mục đích.

Phục Binh ở cung này phù hợp với những công việc cần mưu trí cao, có
khả năng "bắt bài, lừa được người khác" — như công an, cảnh sát, luật sư,
thẩm phán.

Về tính phò tá, đương số thường phục vụ và hỗ trợ cấp trên, đóng vai trò
quân sư đứng sau hậu trường.`,
  },

  {
    id: 'phuc-binh-tai-quan-loc-sat-tinh',
    title: 'Phục Binh + Tứ Sát tại Quan Lộc - Lừa đảo trục lợi',
    sao: ['Phục Binh'],
    cung: ['Quan Lộc'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 70,
    tomTat: `Khi Phục Binh tại Quan Lộc gặp tứ sát Kình Dương, Đà La, Hỏa
Tinh hay Linh Tinh, ngành nghề của đương số dễ mang tính lừa đảo, trục
lợi.`,
  },

  {
    id: 'phuc-binh-tai-no-boc',
    title: 'Phục Binh tại Nô Bộc',
    sao: ['Phục Binh'],
    cung: ['Nô Bộc'],
    doUuTien: 70,
    tomTat: `Khi Phục Binh cư Nô Bộc, bè bạn và người giúp việc của đương
số không tốt, hay phản trắc lừa gạt — chủ mệnh hay bị phản bội.

Mặt tích cực, đương số có xu hướng hết lòng phục vụ, giúp đỡ bạn bè và
đồng nghiệp.`,
  },

  {
    id: 'phuc-binh-tai-no-boc-thai-phuc-vuong-tuong',
    title: 'Phục Binh + Thai + Đế Vượng + Tướng Quân tại Nô Bộc - Nhiều bạn tình',
    sao: ['Phục Binh'],
    cung: ['Nô Bộc'],
    ketHop: ['Thai', 'Đế Vượng', 'Tướng Quân'],
    doUuTien: 70,
    tomTat: `Khi Phục Binh hội đủ Thai, Đế Vượng và Tướng Quân tại Nô Bộc
(bộ Thai Phục Vượng Tướng), đương số ra ngoài có nhiều bạn tình, quan hệ
nam nữ phức tạp.`,
  },

  {
    id: 'phuc-binh-tai-thien-di',
    title: 'Phục Binh tại Thiên Di',
    sao: ['Phục Binh'],
    cung: ['Thiên Di'],
    doUuTien: 72,
    tomTat: `Khi Phục Binh cư Thiên Di, đương số là người tính mạnh mẽ,
cương trực, thích uy quyền; ra ngoài thường bị đố kỵ, cạnh tranh, ghen
ghét, có thể bị ám hại nếu đi cùng sao xấu.

Nếu đương số là người thẳng thắn bộc tính, ưa mềm mỏng, ra ngoài dễ bị
lừa.`,
  },

  {
    id: 'phuc-binh-tai-thien-di-luc-cat',
    title: 'Phục Binh + Lục Cát tại Thiên Di - Phò tá lãnh đạo',
    sao: ['Phục Binh'],
    cung: ['Thiên Di'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 70,
    tomTat: `Khi Phục Binh tại Thiên Di gặp một trong sáu cát tinh — Tả Phù,
Hữu Bật, Văn Xương, Văn Khúc, Thiên Khôi hay Thiên Việt — đương số dễ được
kề cận và phò tá cho các bậc lãnh đạo.`,
  },

  {
    id: 'phuc-binh-tai-thien-di-khong',
    title: 'Phục Binh + Địa Không tại Thiên Di - Bị ám hại',
    sao: ['Phục Binh'],
    cung: ['Thiên Di'],
    ketHop: ['Địa Không'],
    doUuTien: 70,
    tomTat: `Khi Phục Binh đi cùng Địa Không tại Thiên Di, đương số thường
bị đố kỵ, cạnh tranh và ám hại. Ban đầu nhiều va vấp, dễ bị lừa, song chính
trải nghiệm ấy rèn cho chủ mệnh thành con người bản lĩnh và mưu trí.`,
  },

  {
    id: 'phuc-binh-tai-thien-di-kiep',
    title: 'Phục Binh + Địa Kiếp tại Thiên Di - Bị ám hại',
    sao: ['Phục Binh'],
    cung: ['Thiên Di'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Khi Phục Binh đi cùng Địa Kiếp tại Thiên Di, đương số thường bị
đố kỵ, cạnh tranh và ám hại. Ban đầu nhiều va vấp, dễ bị lừa, song chính
trải nghiệm ấy rèn cho chủ mệnh thành con người bản lĩnh và mưu trí.`,
  },

  {
    id: 'phuc-binh-tai-thien-di-da',
    title: 'Phục Binh + Đà La tại Thiên Di - Bị ám hại',
    sao: ['Phục Binh'],
    cung: ['Thiên Di'],
    ketHop: ['Đà La'],
    doUuTien: 70,
    tomTat: `Khi Phục Binh đi cùng Đà La tại Thiên Di, đương số thường bị đố
kỵ, cạnh tranh và ám hại. Ban đầu nhiều va vấp, dễ bị lừa, song chính trải
nghiệm ấy rèn cho chủ mệnh thành con người bản lĩnh và mưu trí.`,
  },

  {
    id: 'phuc-binh-tai-thien-di-hoa-ky',
    title: 'Phục Binh + Hóa Kỵ tại Thiên Di - Bị ám hại',
    sao: ['Phục Binh'],
    cung: ['Thiên Di'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `Khi Phục Binh đi cùng Hóa Kỵ tại Thiên Di, đương số thường bị
đố kỵ, cạnh tranh và ám hại. Ban đầu nhiều va vấp, dễ bị lừa, song chính
trải nghiệm ấy rèn cho chủ mệnh thành con người bản lĩnh và mưu trí.`,
  },

  {
    id: 'phuc-binh-tai-tat-ach',
    title: 'Phục Binh tại Tật Ách',
    sao: ['Phục Binh'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `Khi Phục Binh cư Tật Ách, đương số hay bị mất trộm, mất của;
tiền bạc dễ bị người khác sang đoạt, cướp giật, ăn chặn hoặc hao tán tài
sản.

Chủ mệnh dễ bị người khác ám hại, hoặc bệnh tật, tai họa bất ngờ ập đến
không kịp trở tay. Bệnh có xu hướng ẩn tàng, khó phát hiện sớm.`,
  },

  {
    id: 'phuc-binh-tai-tai-bach',
    title: 'Phục Binh tại Tài Bạch',
    sao: ['Phục Binh'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `Khi Phục Binh cư Tài Bạch, đương số là người nhiều mưu kế để
kiếm tiền. Chủ mệnh dễ vì tiền mà phản bội, lừa người khác; hoặc ở chiều
ngược lại, bị người khác phản bội.`,
  },

  {
    id: 'phuc-binh-tai-tai-bach-sat-tinh',
    title: 'Phục Binh + Tứ Sát tại Tài Bạch - Bất lương',
    sao: ['Phục Binh'],
    cung: ['Tài Bạch'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 70,
    tomTat: `Khi Phục Binh tại Tài Bạch gặp tứ sát Kình Dương, Đà La, Hỏa
Tinh hay Linh Tinh, đương số sẵn sàng làm việc bất lương, hoặc dễ bị
người khác lừa về tiền bạc.`,
  },

  {
    id: 'phuc-binh-tai-tai-bach-luc-cat',
    title: 'Phục Binh + Lục Cát tại Tài Bạch - Đa mưu phò tá',
    sao: ['Phục Binh'],
    cung: ['Tài Bạch'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 70,
    tomTat: `Khi Phục Binh tại Tài Bạch gặp một trong sáu cát tinh — Tả Phù,
Hữu Bật, Văn Xương, Văn Khúc, Thiên Khôi hay Thiên Việt — đương số đa mưu,
biết nhiều cách làm ra tiền, phần lớn qua việc phò tá, phục vụ người khác.`,
  },

  {
    id: 'phuc-binh-tai-tu-tuc',
    title: 'Phục Binh tại Tử Tức + Thai Phục Vượng Tướng',
    sao: ['Phục Binh'],
    cung: ['Tử Tức'],
    ketHop: ['Đế Vượng', 'Tướng Quân', 'Thai'],
    doUuTien: 70,
    tomTat: `Khi Phục Binh cư Tử Tức và hội đủ Đế Vượng, Tướng Quân cùng Thai
(bộ Thai Phục Vượng Tướng), vợ chồng đương số dễ có con riêng bên ngoài, có
bầu rồi mới cưới hoặc lỡ kế hoạch mà có con.`,
  },

  {
    id: 'phuc-binh-tai-tu-tuc-binh-hinh-tuong-an',
    title: 'Phục Binh + Thiên Hình + Tướng Quân + Quốc Ấn tại Tử Tức',
    sao: ['Phục Binh'],
    cung: ['Tử Tức'],
    ketHop: ['Thiên Hình', 'Tướng Quân', 'Quốc Ấn'],
    doUuTien: 73,
    tomTat: `Khi Phục Binh tại Tử Tức hội đủ Thiên Hình, Tướng Quân và Quốc
Ấn (bộ Binh Hình Tướng Ấn), con cái đương số thông minh, mưu trí, sau dễ
theo võ nghiệp, quân đội hoặc công an.`,
  },

  {
    id: 'phuc-binh-tai-phu-the',
    title: 'Phục Binh tại Phu Thê',
    sao: ['Phục Binh'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `Khi Phục Binh cư Phu Thê, hôn nhân của đương số hay bị ngăn trở;
vợ chồng bất hòa, khắc khẩu. Người hôn phối là kẻ lắm mưu nhiều kế.`,
  },

  {
    id: 'phuc-binh-tai-phu-the-dao',
    title: 'Phục Binh + Đào Hoa tại Phu Thê - Ngoại tình',
    sao: ['Phục Binh'],
    cung: ['Phu Thê'],
    ketHop: ['Đào Hoa'],
    doUuTien: 70,
    tomTat: `Khi Phục Binh đi cùng Đào Hoa tại Phu Thê, đương số dễ có ngoại
tình bên ngoài; vợ chồng hay li kỵ, không tin tưởng nhau.`,
  },

  {
    id: 'phuc-binh-tai-phu-the-hong',
    title: 'Phục Binh + Hồng Loan tại Phu Thê - Ngoại tình',
    sao: ['Phục Binh'],
    cung: ['Phu Thê'],
    ketHop: ['Hồng Loan'],
    doUuTien: 70,
    tomTat: `Khi Phục Binh đi cùng Hồng Loan tại Phu Thê, đương số dễ có
ngoại tình bên ngoài; vợ chồng hay li kỵ, không tin tưởng nhau.`,
  },

  {
    id: 'phuc-binh-tai-phu-the-rieu',
    title: 'Phục Binh + Thiên Riêu tại Phu Thê - Ngoại tình',
    sao: ['Phục Binh'],
    cung: ['Phu Thê'],
    ketHop: ['Thiên Riêu'],
    doUuTien: 70,
    tomTat: `Khi Phục Binh đi cùng Thiên Riêu tại Phu Thê, đương số dễ có
ngoại tình bên ngoài; vợ chồng hay li kỵ, không tin tưởng nhau.`,
  },

  {
    id: 'phuc-binh-tai-phu-the-thai',
    title: 'Phục Binh + Thai tại Phu Thê - Ngoại tình',
    sao: ['Phục Binh'],
    cung: ['Phu Thê'],
    ketHop: ['Thai'],
    doUuTien: 70,
    tomTat: `Khi Phục Binh đi cùng Thai tại Phu Thê, đương số dễ có ngoại
tình bên ngoài; vợ chồng hay li kỵ, không tin tưởng nhau.`,
  },

  {
    id: 'phuc-binh-tai-phu-the-thai-phuc-vuong-tuong',
    title: 'Phục Binh + Thai Phục Vượng Tướng tại Phu Thê - Tiền dâm hậu thú',
    sao: ['Phục Binh'],
    cung: ['Phu Thê'],
    ketHop: ['Thai', 'Đế Vượng', 'Tướng Quân'],
    doUuTien: 73,
    tomTat: `Khi Phục Binh tại Phu Thê hội đủ Thai, Đế Vượng và Tướng Quân
(bộ Thai Phục Vượng Tướng), đương số rơi vào cảnh "tiền dâm hậu thú" mới
ra vợ chồng — bạn đời có con riêng rồi mới lấy nhau; sau khi lấy cũng dễ
có ngoại tình và con riêng.`,
  },

  {
    id: 'phuc-binh-tai-phu-the-hoa-ky',
    title: 'Phục Binh + Hóa Kỵ tại Phu Thê - Ngăn trở',
    sao: ['Phục Binh'],
    cung: ['Phu Thê'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `Khi Phục Binh đi cùng Hóa Kỵ tại Phu Thê, vợ chồng đương số bị
ngăn trở lúc lấy nhau, sau đó bất hòa, "nay giận, mai hờn".`,
  },

  {
    id: 'phuc-binh-tai-huynh-de',
    title: 'Phục Binh tại Huynh Đệ + Thai Phục Vượng Tướng',
    sao: ['Phục Binh'],
    cung: ['Huynh Đệ'],
    ketHop: ['Thai', 'Đế Vượng', 'Tướng Quân'],
    doUuTien: 70,
    tomTat: `Khi Phục Binh cư Huynh Đệ và hội đủ Thai, Đế Vượng cùng Tướng
Quân (bộ Thai Phục Vượng Tướng), trong số anh chị em của đương số có người
phong lưu, hoặc có anh chị em dị bào — khác cha hoặc khác mẹ.`,
  },

  {
    id: 'phuc-binh-tai-huynh-de-pha-tuong',
    title: 'Phục Binh + Phá Quân + Tướng Quân tại Huynh Đệ - Hoang thai',
    sao: ['Phục Binh'],
    cung: ['Huynh Đệ'],
    ketHop: ['Phá Quân', 'Tướng Quân'],
    doUuTien: 68,
    tomTat: `Khi Phục Binh đi cùng Phá Quân và Tướng Quân chiếu xung tại
Huynh Đệ, đương số có chị em gái theo trai, say mê đến nỗi hoang thai bỏ
mình.`,
  },

  {
    id: 'phuc-binh-binh-hinh-tuong-an',
    title: 'Phục Binh + Thiên Hình + Tướng Quân + Quốc Ấn - "Binh Hình Tướng Ấn"',
    sao: ['Phục Binh'],
    ketHop: ['Thiên Hình', 'Tướng Quân', 'Quốc Ấn'],
    doUuTien: 75,
    tomTat: `Khi Phục Binh hội đủ Thiên Hình, Tướng Quân và Quốc Ấn, đó là
bộ **Binh Hình Tướng Ấn** — đương số hiển đạt về võ nghiệp. Đây là ngoại
lệ tốt của Phục Binh, mang quyền uy thật sự.

Lưu ý: chủ mệnh có thể gặp tai họa bất ngờ về súng đạn, đao kiếm nếu bước
vào hạn xấu — đúng câu "sinh nghề tử nghiệp".`,
  },

  {
    id: 'phuc-binh-tuong-dao-thai',
    title: 'Phục Binh + Tướng Quân + Đào Hoa + Thai - Dâm bôn (đặc biệt nữ)',
    sao: ['Phục Binh'],
    cung: ['Mệnh', 'Phu Thê', 'Nô Bộc'],
    ketHop: ['Tướng Quân', 'Đào Hoa', 'Thai'],
    doUuTien: 65,
    tomTat: `Khi Phục Binh hội đủ Tướng Quân, Đào Hoa và Thai, đương số dễ
dính chuyện dâm bôn.

Với nữ mệnh, gặp bộ này là cực xấu: dễ bị lừa tình, thất trinh thất tiết,
vướng các mối quan hệ phức tạp dẫn đến xâm hại thể xác.

Nếu cung Mệnh, Phu Thê hay Nô Bộc — hoặc trong vận hạn — có Thai Phục
Vượng Tướng, đương số dễ có quan hệ tình cảm trước hôn nhân, chung sống
rồi mới cưới.`,
  },

  {
    id: 'phuc-binh-tuong-khong-kiep-ta-huu',
    title: 'Phục Binh + Tướng + Không Kiếp + Tả Hữu - Băng cướp',
    sao: ['Phục Binh'],
    ketHop: ['Tướng Quân', 'Địa Không', 'Địa Kiếp', 'Tả Phù', 'Hữu Bật'],
    doUuTien: 65,
    tomTat: `Khi Phục Binh hội đủ Tướng Quân, Địa Không, Địa Kiếp cùng Tả
Phù và Hữu Bật, đương số có gian phi kết đảng để trộm cướp, giết người và
ám hại. Đây là cách cục cực hung, báo hiệu cảnh vướng vào băng đảng tội
phạm có tổ chức.`,
  },

  {
    id: 'phuc-binh-hoa-ky-thai-tue',
    title: 'Phục Binh + Hóa Kỵ + Thái Tuế - Kiện cáo, vu khống',
    sao: ['Phục Binh'],
    ketHop: ['Hóa Kỵ', 'Thái Tuế'],
    doUuTien: 60,
    tomTat: `Khi Phục Binh đi cùng Hóa Kỵ và Thái Tuế, đương số hay bị kiện
cáo, vu khống, vướng thị phi — đặc biệt trong vận hạn, có sự cạnh tranh,
kiện tụng và những nỗi lo lắng do thị phi gây ra.`,
  },

  {
    id: 'phuc-binh-han-tang',
    title: 'Hạn Phục Binh + Tang Môn - Tang sự',
    sao: ['Phục Binh'],
    ketHop: ['Tang Môn'],
    doUuTien: 55,
    tomTat: `Khi vào hạn Phục Binh có thêm Tang Môn, đương số gặp hạn có
tang.`,
  },

  {
    id: 'phuc-binh-han-pha-tuong-thai-rieu',
    title: 'Hạn Phục Binh + Phá Quân + Tướng Quân + Thai + Thiên Riêu',
    sao: ['Phục Binh'],
    ketHop: ['Phá Quân', 'Tướng Quân', 'Thai', 'Thiên Riêu'],
    doUuTien: 55,
    tomTat: `Khi vào hạn Phục Binh hội đủ Phá Quân, Tướng Quân, Thai và
Thiên Riêu, đương số cả nghe bị lừa dối, tơ duyên trắc trở, có cảnh chửa
hoang.`,
  },

  {
    id: 'phuc-binh-hoa-giai',
    title: 'Lời khuyên hóa giải Phục Binh - Biến đa nghi thành cẩn trọng',
    sao: ['Phục Binh'],
    doUuTien: 70,
    tomTat: `Để hóa giải sao Phục Binh, đương số cần chuyển hóa năng lượng
tiêu cực thành tích cực bằng vài hướng cụ thể.

Trước hết, dùng mưu trí đúng cách: thay vì toan tính hãm hại người khác,
hướng năng lực vào việc lập kế hoạch chiến lược trong kinh doanh, nghiên
cứu khoa học hoặc các bộ môn đấu trí.

Tiếp đến, biến đa nghi thành cẩn trọng — biến tâm thế "âm mưu" thành khả
năng dự đoán và phòng bị rủi ro.

Đương số cũng nên tận dụng tính phò trợ vốn có của Phục Binh: chủ động
trở thành trợ lý, người phò tá, một cộng sự đáng tin cậy, dùng sự khôn
ngoan giúp đỡ cấp trên và đối tác.

Cuối cùng, hãy sống minh bạch — thực hành lối sống minh bạch và thẳng
thắn trong giao tiếp, biến "phục kích chờ thời" theo nghĩa tiêu cực thành
sự kiên nhẫn lành mạnh, biết chờ thời cơ chín muồi để hành động quang
minh chính đại.`,
  },
];
