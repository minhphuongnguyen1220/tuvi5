import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO QUAN PHỦ - Hỏa, Phù Tinh + Hình Tinh, vòng Lộc Tồn (vị trí 12 - CUỐI)
 * LUÔN xung chiếu với Tấu Thư - chủ về lý luận, pháp luật, kiện tụng
 */
export const luanGiai_QuanPhu: DoanLuanGiai[] = [
  {
    id: 'quan-phu-tinh-chat-chung',
    title: 'Quan Phủ - Đặc tính chung',
    sao: ['Quan Phủ'],
    doUuTien: 30,
    tomTat: `**Quan Phủ** là phụ tinh thuộc vòng Lộc Tồn, đứng ở vị trí thứ 12 —
vị trí cuối cùng của vòng. Sao mang ngũ hành Hỏa, hóa khí thành Phù Tinh kiêm
Hình Tinh, tức là vừa phù trợ vừa mang sắc thái khắc nghiệt của hình pháp.

Trong vòng Lộc Tồn, Quan Phủ luôn nằm trong tam hợp với Hỷ Thần và Tiểu Hao,
đồng thời luôn xung chiếu với Tấu Thư (cách 6 cung). Chính vì xung chiếu với
Tấu Thư — vốn chủ về đơn từ — nên Quan Phủ chủ về đơn kiện, thưa kiện, biện
luận đúng sai.

Đặc tính cốt lõi của sao xoay quanh khả năng lý luận, quan tụng, sự thông
minh sắc bén và tính khắt khe. Bản chất của sao mang hai mặt rõ rệt:

- Mặt tốt: lý luận sắc bén, soi xét đúng sai, minh bạch trong luật pháp —
  đương số trở thành "người cầm cân nảy mực".
- Mặt xấu: kiện cáo, thị phi, biện bác, đơn từ và tranh chấp triền miên.`,
  },

  {
    id: 'quan-phu-tai-menh',
    title: 'Quan Phủ tại Mệnh',
    sao: ['Quan Phủ'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `Khi Quan Phủ thủ Mệnh, đương số có khả năng xét đoán và lý luận
tốt, song đôi khi hơi khắt khe và tính toán nhiều. Tinh thần cạnh tranh, đố kỵ
và nặng báo phục thường biểu hiện rõ — chủ mệnh sẵn sàng dùng thủ đoạn để
tranh thắng và khơi mào trả đũa.

Quan Phủ tọa Mệnh cũng được xem là dấu hiệu nghiệp chướng của việc báo oán,
thù dai và thị phi.`,
  },
  {
    id: 'quan-phu-tai-menh-xuong-khuc-thai-tue',
    title: 'Quan Phủ tại Mệnh + Văn Xương/Văn Khúc/Thái Tuế - Lợi pháp luật',
    sao: ['Quan Phủ'],
    cung: ['Mệnh'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Thái Tuế'],
    doUuTien: 73,
    tomTat: `Khi Quan Phủ tọa Mệnh có thêm Văn Xương, Văn Khúc hoặc Thái Tuế
hội về, cách cục trở nên rất lợi cho con đường pháp luật — kiện cáo, thị phi,
biện hộ và bút chiến đều thuận. Đây là tổ hợp cần thiết cho những nghề:

- Thẩm phán, luật sư
- Thanh tra, kiểm toán
- Điều tra, giám sát

Đương số là mẫu người làm việc theo nguyên tắc và logic, đúng nghĩa "người
cầm cân nảy mực".`,
  },
  {
    id: 'quan-phu-tai-menh-sat-bai',
    title: 'Quan Phủ tại Mệnh + Sát bại tinh - Hèn hạ trả thù',
    sao: ['Quan Phủ'],
    cung: ['Mệnh'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp', 'Hóa Kỵ', 'Đại Hao', 'Tiểu Hao'],
    doUuTien: 73,
    tomTat: `Khi Quan Phủ tọa Mệnh đi cùng các sát bại tinh như Kình Dương,
Đà La, Hỏa Tinh, Linh Tinh, Địa Không, Địa Kiếp, Hóa Kỵ, Đại Hao hay Tiểu Hao,
cách cục biến thành mẫu người hèn hạ, gian nịnh và phản bội. Đương số có thể
rơi vào hai chiều:

- Cố oán, ưa trả thù, thích kiện tụng, câu chấp và đố kỵ.
- Hoặc bản thân đương số bị người khác oán, báo thù, kiện cáo và phản bội.`,
  },

  {
    id: 'quan-phu-tai-phu-mau',
    title: 'Quan Phủ tại Phụ Mẫu',
    sao: ['Quan Phủ'],
    cung: ['Phụ Mẫu'],
    doUuTien: 70,
    tomTat: `Khi Quan Phủ cư Phụ Mẫu cùng cát tinh và văn tinh, cha mẹ đương
số làm những nghề liên quan đến hành pháp, pháp luật, hành chính — các nghề
đòi hỏi công tâm và minh bạch.

Tuy nhiên cha mẹ cũng dễ bất hòa, cãi nhau vì trái ngược quan điểm sống.`,
  },
  {
    id: 'quan-phu-tai-phu-mau-sat-bai',
    title: 'Quan Phủ tại Phụ Mẫu + Sát bại tinh - Cha mẹ ly dị kiện cáo',
    sao: ['Quan Phủ'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp', 'Hóa Kỵ', 'Đại Hao', 'Tiểu Hao'],
    doUuTien: 65,
    tomTat: `Khi Quan Phủ cư Phụ Mẫu đi kèm các sát bại tinh như Kình Dương,
Đà La, Hỏa Tinh, Linh Tinh, Địa Không, Địa Kiếp, Hóa Kỵ, Đại Hao hay Tiểu Hao,
mâu thuẫn giữa cha mẹ vượt khỏi cãi vã thông thường mà dễ dẫn đến:

- Chia tay, ly dị
- Kiện tụng nhau
- Xa cách vì bất hòa tư tưởng`,
  },

  {
    id: 'quan-phu-tai-phuc-duc',
    title: 'Quan Phủ tại Phúc Đức',
    sao: ['Quan Phủ'],
    cung: ['Phúc Đức'],
    doUuTien: 70,
    tomTat: `Khi Quan Phủ cư Phúc Đức, dòng họ đương số có nhiều người ưa lý lẽ
nên dễ sa vào cảnh tranh cãi, kiện tụng lẫn nhau vì bất đồng quan điểm. Mâu
thuẫn thường xoay quanh quyền lợi, đất đai, hương hỏa và mồ mả tổ tiên — thậm
chí ngay cả việc thờ cúng cũng có thể nảy sinh bất đồng.

Về đường hôn phối, đặc trưng là gia đình người hôn phối khó tính, khắt khe,
hay soi xét hoặc trong nhà có người làm về ngành luật.`,
  },
  {
    id: 'quan-phu-tai-phuc-duc-luc-cat-quyen',
    title: 'Quan Phủ tại Phúc Đức + Lục Cát/Quyền tinh - Tổ tiên làm quan',
    sao: ['Quan Phủ'],
    cung: ['Phúc Đức'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt', 'Hóa Quyền'],
    doUuTien: 65,
    tomTat: `Khi Quan Phủ cư Phúc Đức gặp Lục Cát (Tả Phù, Hữu Bật, Văn Xương,
Văn Khúc, Thiên Khôi, Thiên Việt) hoặc Hóa Quyền, ông bà tổ tiên đương số có
người làm quan lớn, vốn khắt khe và quyền biến.`,
  },

  {
    id: 'quan-phu-tai-dien-trach',
    title: 'Quan Phủ tại Điền Trạch',
    sao: ['Quan Phủ'],
    cung: ['Điền Trạch'],
    doUuTien: 72,
    tomTat: `Khi Quan Phủ cư Điền, nhà cửa của đương số thường nằm gần nơi
công môn, công quyền — tòa án, viện kiểm sát, công an, ủy ban.

Đương số dễ mắc vào tranh tụng và kiện cáo về điền sản, đất đai:

- Rắc rối giấy tờ, quyền sử dụng đất
- Tranh chấp chia tài sản

Bản thân đương số khó tính hoặc hàng xóm khó tính, vì thế dễ bất đồng và bị
thưa kiện chỉ vì những điều nhỏ nhặt.`,
  },

  {
    id: 'quan-phu-tai-quan-loc',
    title: 'Quan Phủ tại Quan Lộc',
    sao: ['Quan Phủ'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `Khi Quan Phủ cư Quan, đương số thường học luật và hành nghề luật
— thẩm phán, trạng sư (luật sư), công chứng viên, kiểm soát viên. Tư duy của
chủ mệnh sắc bén, giỏi lập luận; phong cách làm việc tỉ mỉ, cẩn trọng và khắt
khe.

Công việc đòi hỏi khả năng soi xét, phán đoán, suy luận với tính khắt khe rất
cao. Đồng thời đó là môi trường có tính cạnh tranh, đương số cũng hay bị cạnh
tranh trong nghề nghiệp.

Mặt khác, công việc dễ vướng pháp luật, kiện tụng, khởi tố — chủ mệnh cần hết
sức cẩn thận, đề phòng bị "đâm sau lưng" và những kiểu cạnh tranh không lành
mạnh.`,
  },

  {
    id: 'quan-phu-tai-no-boc',
    title: 'Quan Phủ tại Nô Bộc',
    sao: ['Quan Phủ'],
    cung: ['Nô Bộc'],
    doUuTien: 70,
    tomTat: `Khi Quan Phủ cư Nô mà không có cát tinh hỗ trợ, đương số dễ bị
bạn bè và đồng nghiệp ghen ghét, chơi xấu và thưa kiện. Quan hệ luôn đi kèm
sự đề phòng, xét nét và thiếu hài hòa:

- Dễ bị hiểu lầm, nói xấu
- Bị người thân tín trở mặt, chơi xấu sau lưng`,
  },
  {
    id: 'quan-phu-tai-no-boc-luc-cat',
    title: 'Quan Phủ tại Nô Bộc + Lục Cát - Bạn pháp luật',
    sao: ['Quan Phủ'],
    cung: ['Nô Bộc'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 65,
    tomTat: `Khi Quan Phủ cư Nô có Lục Cát (Tả Phù, Hữu Bật, Văn Xương, Văn
Khúc, Thiên Khôi, Thiên Việt) hội về, đương số quen nhiều người làm về hình
pháp, pháp luật. Đây là những người bạn tốt, có năng lực phán xử, có thể giúp
đương số xử lý các vấn đề pháp luật.`,
  },

  {
    id: 'quan-phu-tai-thien-di',
    title: 'Quan Phủ tại Thiên Di',
    sao: ['Quan Phủ'],
    cung: ['Thiên Di'],
    doUuTien: 72,
    tomTat: `Khi Quan Phủ cư Di, đương số ra ngoài dễ dính thị phi và kiện
tụng — kiểu "làm ơn mắc oán", bị người khác soi mói và dèm pha.`,
  },
  {
    id: 'quan-phu-tai-thien-di-luc-cat',
    title: 'Quan Phủ tại Thiên Di + Lục Cát - Trọng trách minh bạch',
    sao: ['Quan Phủ'],
    cung: ['Thiên Di'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 67,
    tomTat: `Khi Quan Phủ cư Thiên Di có Lục Cát (Tả Phù, Hữu Bật, Văn Xương,
Văn Khúc, Thiên Khôi, Thiên Việt) hội về, đương số có thể cứu giải hoặc được
giao trọng trách yêu cầu tính minh bạch cao như kiểm tra, thanh tra, giám sát.

Đây là cách cục cho thấy đương số có tín nhiệm cao, được tin tưởng giao những
việc quan trọng bên ngoài.`,
  },

  {
    id: 'quan-phu-tai-tat-ach',
    title: 'Quan Phủ tại Tật Ách - Tai họa pháp lý',
    sao: ['Quan Phủ'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `Khi Quan Phủ cư Tật, mối nguy tiềm ẩn của đương số đến từ pháp
lý, kiện tụng và thị phi — ảnh hưởng cả sức khỏe tinh thần lẫn thể chất.

Cách hóa giải đáng chú ý: nếu đương số làm nghề luật pháp thì ảnh hưởng tiêu
cực được giảm nhẹ, nhờ chính sự hiểu biết mà thoát hiểm và chuyển bại thành
thắng.`,
  },
  {
    id: 'quan-phu-tai-tat-ach-tue-ky-liem-ho-hinh',
    title: 'Quan Phủ tại Tật Ách + Tuế/Kỵ/Liêm/Hổ/Hình - Vòng lao lý',
    sao: ['Quan Phủ'],
    cung: ['Tật Ách'],
    ketHop: ['Thái Tuế', 'Hóa Kỵ', 'Liêm Trinh', 'Bạch Hổ', 'Thiên Hình'],
    doUuTien: 70,
    tomTat: `Khi Quan Phủ cư Tật Ách gặp thêm Thái Tuế, Hóa Kỵ, Liêm Trinh,
Bạch Hổ hoặc Thiên Hình, nguy cơ rơi vào vòng lao lý và tù tội tăng lên đáng
kể.`,
  },
  {
    id: 'quan-phu-tai-tat-ach-thai-tue',
    title: 'Quan Phủ tại Tật Ách + Thái Tuế - Suốt đời cửa công môn',
    sao: ['Quan Phủ'],
    cung: ['Tật Ách'],
    ketHop: ['Thái Tuế'],
    doUuTien: 70,
    tomTat: `Khi Quan Phủ đi cùng Thái Tuế tại Tật Ách, đương số rơi vào cảnh
"suốt đời mòn mòn ngồi cửa công môn" — cuộc đời gắn liền với tòa án.`,
  },

  {
    id: 'quan-phu-tai-tai-bach',
    title: 'Quan Phủ tại Tài Bạch',
    sao: ['Quan Phủ'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `Khi Quan Phủ cư Tài, đương số là người cẩn trọng và nguyên tắc
trong tiền nong — chi tiêu có kiểm soát, đòi hỏi sự minh bạch và rõ ràng.

Cách cục phù hợp với những nghề:

- Kiểm toán viên, kế toán pháp lý
- Cố vấn tài chính
- Luật sư chuyên về hợp đồng, tài sản

Đương số cũng là kiểu người kiếm tiền bằng nghề kiện (luật sư, hộ giá viên),
hoặc đi cạnh tranh, kiện tụng người khác để có tiền cho mình.`,
  },
  {
    id: 'quan-phu-tai-tai-bach-hung-sat',
    title: 'Quan Phủ tại Tài Bạch + Hung sát - Kiện tụng vì tiền',
    sao: ['Quan Phủ'],
    cung: ['Tài Bạch'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Khi Quan Phủ cư Tài Bạch gặp các hung sát như Kình Dương, Đà La,
Hỏa Tinh, Linh Tinh, Địa Không hay Địa Kiếp, đương số dễ bị kiện tụng và thị
phi vì tiền bạc, thậm chí bị phản bội vì tiền (lường gạt).`,
  },

  {
    id: 'quan-phu-tai-tu-tuc',
    title: 'Quan Phủ tại Tử Tức',
    sao: ['Quan Phủ'],
    cung: ['Tử Tức'],
    doUuTien: 72,
    tomTat: `Khi Quan Phủ cư Tử Tức cùng cát tinh, con cái đương số thông minh,
tư duy sắc bén, suy xét tốt — hợp làm nghề thẩm phán, ngành luật và những
lĩnh vực đòi hỏi óc phân tích.

Tuy nhiên nếu cung Phối cũng xấu, có thể xảy ra cảnh tranh giành quyền nuôi
con giữa hai vợ chồng khi ly hôn.`,
  },
  {
    id: 'quan-phu-tai-tu-tuc-sat-bai',
    title: 'Quan Phủ tại Tử Tức + Sát bại - Khắc khẩu tranh tụng con',
    sao: ['Quan Phủ'],
    cung: ['Tử Tức'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp', 'Hóa Kỵ', 'Đại Hao', 'Tiểu Hao'],
    doUuTien: 67,
    tomTat: `Khi Quan Phủ cư Tử Tức gặp các sát bại tinh (Kình Dương, Đà La,
Hỏa Tinh, Linh Tinh, Địa Không, Địa Kiếp, Hóa Kỵ, Đại Hao, Tiểu Hao), đương số
khắc khẩu với con cái; xấu nữa thì có thể tranh tụng với con.`,
  },

  {
    id: 'quan-phu-tai-phu-the',
    title: 'Quan Phủ tại Phu Thê',
    sao: ['Quan Phủ'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `Khi Quan Phủ cư Phu Thê, đời sống hôn nhân của đương số thiên về
lý trí và ít tình cảm. Người hôn phối nguyên tắc, giỏi lý luận, có thể làm
trong ngành pháp luật hay hình pháp.

Vì tính cách quá rạch ròi và xét nét nên hai vợ chồng dễ bất hòa, soi xét
nhau, tranh luận gay gắt mà không ai chịu nhường ai.`,
  },
  {
    id: 'quan-phu-tai-phu-the-sat-bai',
    title: 'Quan Phủ tại Phu Thê + Sát bại - Đệ đơn ly dị',
    sao: ['Quan Phủ'],
    cung: ['Phu Thê'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp', 'Hóa Kỵ', 'Đại Hao', 'Tiểu Hao'],
    doUuTien: 70,
    tomTat: `Khi Quan Phủ cư Phu Thê gặp các sát bại tinh (Kình Dương, Đà La,
Hỏa Tinh, Linh Tinh, Địa Không, Địa Kiếp, Hóa Kỵ, Đại Hao, Tiểu Hao), Quan Phủ
chính là "quan tòa" — nơi hai người đệ đơn ly dị.`,
  },

  {
    id: 'quan-phu-tai-huynh-de',
    title: 'Quan Phủ tại Huynh Đệ',
    sao: ['Quan Phủ'],
    cung: ['Huynh Đệ'],
    doUuTien: 70,
    tomTat: `Khi Quan Phủ cư Huynh Đệ, anh chị em đương số dễ bất hòa, tranh
giành của cải mà kiện tụng lẫn nhau. Mỗi người có tư duy riêng, ít chịu
nhường nhịn nên hay tranh cãi quanh:

- Phân chia tài sản thừa kế
- Đất đai tổ tiên
- Trách nhiệm phụng dưỡng cha mẹ

Nếu trong nhà có người làm luật sư hay thẩm phán, mâu thuẫn được hòa giải,
giảm tranh chấp nội bộ — rất tốt cho cả gia đình.`,
  },

  {
    id: 'quan-phu-thai-tue-da-ky',
    title: 'Quan Phủ + Thái Tuế + Đà La + Hóa Kỵ - Thị phi mất ngủ',
    sao: ['Quan Phủ'],
    ketHop: ['Thái Tuế', 'Đà La', 'Hóa Kỵ'],
    doUuTien: 65,
    tomTat: `Khi Quan Phủ hội đủ Thái Tuế, Đà La và Hóa Kỵ, cách cục chủ về
thị phi và kiện cáo, làm đương số mất ăn mất ngủ vì cạnh tranh hơn thiệt.

Mâu thuẫn cũ được khơi mào lại, biến thành biến cố pháp lý kéo dài: kiện tụng
dai dẳng. Lời nói của đương số khi này như gươm giáo — chỉ một hành động nhỏ
cũng có thể dẫn đến hậu quả lớn về pháp lý.`,
  },

  {
    id: 'quan-phu-hinh-khong-kiep',
    title: 'Quan Phủ + Thiên Hình + Không Kiếp - Thù oán mưu sát',
    sao: ['Quan Phủ'],
    ketHop: ['Thiên Hình', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 65,
    tomTat: `Khi Quan Phủ đi cùng Thiên Hình, Địa Không và Địa Kiếp, thế cục
xoay quanh oan trái và ân oán cá nhân. Bản mệnh có thể rơi vào nhiều chiều:

- Bị thù oán, kiện cáo
- Bị người khác dựng chuyện, mưu sát vì thù
- Hoặc chính bản thân vì sinh hận mà gây họa

Cuối cùng, đương số dễ bị cuốn vào vòng xoáy trả thù.`,
  },

  {
    id: 'quan-phu-sat-ho-hinh',
    title: 'Quan Phủ + Thất Sát + Bạch Hổ + Thiên Hình - Bị tù vu cáo',
    sao: ['Quan Phủ'],
    ketHop: ['Thất Sát', 'Bạch Hổ', 'Thiên Hình'],
    doUuTien: 65,
    tomTat: `Khi Quan Phủ hội cùng Thất Sát, Bạch Hổ và Thiên Hình, cách chủ về
tù tội và án phạt. Đương số dễ gặp những biến cố nghiêm trọng:

- Bị vu khống, gài bẫy
- Rước họa vào thân do tin lầm người
- Mang họa pháp lý nghiêm trọng

Đây là cách cục cực hung — cần đặc biệt thận trọng khi luận giải.`,
  },

  {
    id: 'quan-phu-liem-tang-ho-hinh-nguc-nan-dao',
    title: 'Quan Phủ + Liêm Trinh + Tang Môn + Bạch Hổ - "Hình ngục nan đào"',
    sao: ['Quan Phủ'],
    ketHop: ['Liêm Trinh', 'Tang Môn', 'Bạch Hổ'],
    doUuTien: 70,
    tomTat: `Khi Quan Phủ hội đủ Liêm Trinh, Tang Môn và Bạch Hổ, cách cục mang
tên **"hình ngục nan đào"** — cảnh lao lý khó tránh. Điềm báo cực xấu, ám
chỉ:

- Tù tội
- Tai nạn, tang thương
- Nguyên nhân thường do bị phản bội hoặc báo thù mà có

Đây là một trong những cách cục cảnh báo nguy hiểm nhất liên quan đến pháp lý
trong tử vi — cần kiểm tra cẩn thận khi luận giải.`,
  },

  {
    id: 'quan-phu-vao-han',
    title: 'Quan Phủ vào hạn',
    sao: ['Quan Phủ'],
    doUuTien: 50,
    tomTat: `Khi hạn có Quan Phủ — đặc biệt đi cùng Thái Tuế, Đà La hoặc Hóa
Kỵ — vận trình đương số rơi vào vòng xoáy tranh chấp và kiện tụng dai dẳng.

Đây là thời điểm những mâu thuẫn cũ được khơi mào trở lại; những điều tưởng
đã lắng xuống lại trỗi dậy thành biến cố pháp lý. Sức ảnh hưởng của hạn có
thể biến lời nói thành gươm giáo — chỉ một hành động nhỏ cũng dẫn đến hậu quả
lớn về pháp lý.

Lời khuyên cho hạn này:

- Cẩn trọng ký kết giấy tờ và hợp đồng
- Tránh để lòng tự ái, hơn thua làm hỏng việc lớn
- "Một câu nhịn, chín câu lành" — biết lùi để giữ bình an`,
  },
];
