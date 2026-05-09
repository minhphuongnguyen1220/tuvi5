import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO BÁC SĨ - Cát Tinh, Thủy, đứng đầu vòng Bác Sĩ
 * (Bác Sĩ LUÔN đồng cung Lộc Tồn - phần "Lộc Tồn + Bác Sĩ thủ Mệnh" đã viết tại loc-ton.ts)
 */
export const luanGiai_BacSi: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung sao Bác Sĩ
  // ============================================================
  {
    id: 'bac-si-tinh-chat-chung',
    title: 'Bác Sĩ - Đặc tính chung',
    sao: ['Bác Sĩ'],
    doUuTien: 30,
    tomTat: `**Bác Sĩ** là phụ tinh thuộc nhóm cát tinh, ngũ hành Thủy, đứng đầu
vòng Bác Sĩ gồm mười hai sao an theo can năm sinh.

Đặc tính cốt lõi của Bác Sĩ là sáng suốt, từ bi nhân hậu, khéo léo, gắn
với văn chương, học hành và thi cử. Bác Sĩ luôn đồng cung với Lộc Tồn —
vì vậy nhiều người gọi nhầm vòng này là "vòng Lộc Tồn", thực chất phải gọi
là vòng Bác Sĩ mới đúng vì Bác Sĩ là sao đứng đầu.

So với Hóa Khoa, Bác Sĩ có đặc tính tương đồng (cùng chủ học hành và giải
cứu bệnh tật) nhưng không mạnh bằng Hóa Khoa.

Ý nghĩa chính của Bác Sĩ:

- Đương số thông minh, suy nghĩ kín kẽ, chu đáo, sâu sắc
- Ngôn ngữ linh hoạt, hoạt bát nhân hậu, khoan hòa
- Mang lợi ích cho thi cử học hành và giúp giải trừ bệnh tật
- Có khả năng cứu chữa bệnh nhẹ`,

    chiTiet: `## Vòng Bác Sĩ - 12 sao theo thứ tự

(An theo Can năm sinh — chiều thuận với Dương Nam/Âm Nữ, nghịch với Âm Nam/Dương Nữ)

| # | Sao | Tính chất |
|---|---|---|
| 0 | **Bác Sĩ + Lộc Tồn** đồng cung | Cát - học thức, tài lộc |
| 1 | **Lực Sĩ** | Cát - sức lực, lao động |
| 2 | **Thanh Long** | Cát - hỷ khí, tin vui |
| 3 | **Tiểu Hao** | Hung nhẹ - hao tán nhỏ |
| 4 | **Tướng Quân** | Cát - quyền uy, võ tướng |
| 5 | **Tấu Thư** | Cát - văn chương, học thức |
| 6 | **Phi Liêm** | Hung - thị phi, tin đồn |
| 7 | **Hỷ Thần** | Cát - hỷ sự, vui mừng |
| 8 | **Bệnh Phù** | Hung - bệnh tật |
| 9 | **Đại Hao** | Hung - hao tán lớn |
| 10 | **Phục Binh** | Hung - phục kích, ám hại |
| 11 | **Quan Phủ** | Hung - kiện tụng, pháp đình |

## Khả năng đặc biệt

Bác Sĩ hóa giải được một số hung tinh về bệnh tật — gặp Bác Sĩ thì bệnh
thường mau bình phục.

## Ảnh hưởng tổng quan

Sự hiện diện của Bác Sĩ trong lá số thường mang lại sức khỏe tốt, ít bệnh
tật; đương số có duyên với ngành y, dược, giáo dục; hôn nhân hài hòa và
giảm bớt biến động; tài lộc ổn định và có mức độ kiểm soát.`,
  },

  // ============================================================
  // 2. Bác Sĩ tại Mệnh
  // ============================================================
  {
    id: 'bac-si-tai-menh',
    title: 'Bác Sĩ tại Mệnh - Thông minh học hành đỗ đạt',
    sao: ['Bác Sĩ'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Đương số có Bác Sĩ thủ Mệnh là người từ bi sáng suốt, thông minh,
hiểu biết sâu rộng, suy xét kín kẽ và khôn ngoan, khéo léo trong ngôn từ.

Phong thái điềm đạm, biết cân nhắc trước sau; cực kỳ khéo léo trong giao
tiếp và ứng xử nên dễ tạo thiện cảm, được mọi người quý trọng và tín
nhiệm. Đương số có học thức cao và được tăng thọ trường.

Về khả năng tự bảo vệ, đương số biết cách chăm sóc bản thân, sống có lối
sống khoa học, đề cao tinh thần phòng bệnh hơn chữa bệnh, đồng thời còn
có khả năng chữa bệnh nhẹ cho mình và người thân.

Vì Bác Sĩ luôn đồng cung Lộc Tồn, đương số thừa hưởng vận khí no ấm và ổn
định: cuộc sống vững vàng, ít thiếu thốn, dễ được thừa hưởng tiền bạc hay
tài sản từ gia đình. Tuy nhiên cung Mệnh luôn bị Kình Dương cùng Đà La
giáp do quy luật an Lộc Tồn, khiến tuổi thơ đương số mang nét cô độc và
phải tự lập từ sớm. Chi tiết hơn xin xem mục "Lộc Tồn + Bác Sĩ thủ Mệnh"
và "Kình Đà giáp Lộc Tồn".`,

    chiTiet: `## Học hành - đỗ đạt

Khi Bác Sĩ hội cùng Hóa Khoa, Thái Âm, Thái Dương, Văn Xương hoặc Văn
Khúc, đương số học hành đỗ đạt và dễ thành danh. Cách cục đặc biệt hợp
với những lĩnh vực đòi hỏi chuyên môn cao như nghiên cứu, giáo dục; công
danh vang lừng rạng rỡ.

## Năng khiếu Y học

Khi Bác Sĩ hội cùng phúc thiện tinh như Thiên Lương, Thiên Tướng, Ân
Quang, Thiên Quý, Thiên Quan, Thiên Phúc, đương số có năng khiếu y học,
giáo dục, nghệ thuật, dường như được trời phú đôi tay "chữa lành". Đương
số thuận lợi theo đuổi y dược, dễ trở thành thầy thuốc, bác sĩ giỏi, đóng
góp giá trị cao cho cộng đồng.

## Sức khỏe

Đương số rất biết chăm sóc bản thân, duy trì lối sống khoa học và điều
độ. Nếu chẳng may lâm bệnh, dễ gặp được thầy giỏi hoặc tìm ra phương
pháp điều trị hiệu quả nên mau bình phục.`,
  },

  // ============================================================
  // 3. Bác Sĩ tại Phụ Mẫu
  // ============================================================
  {
    id: 'bac-si-tai-phu-mau',
    title: 'Bác Sĩ tại Phụ Mẫu',
    sao: ['Bác Sĩ'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Bác Sĩ cư Phụ Mẫu cho thấy cha mẹ đương số là người có học thức,
điềm đạm, có đạo đức, biết vun vén và dạy con cái theo nề nếp.

Gia đình khá giả, cha mẹ tích được nhiều tài sản và để lại cho con cháu
sau này. Đương số được sinh trong môi trường đủ đầy, được chăm sóc và
định hướng rõ ràng, không phải chật vật mưu sinh.

Bù lại, bản thân đương số đôi khi dễ ốm đau, mắc bệnh vặt khi còn nhỏ —
đặc trưng đến từ cấu hình sao quanh Bác Sĩ, Lộc Tồn, Đà La và Kình Dương.`,
  },
  {
    id: 'bac-si-tai-phu-mau-luc-cat',
    title: 'Bác Sĩ tại Phụ Mẫu + Lục Cát - Cha mẹ thăng tiến',
    sao: ['Bác Sĩ'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 70,
    tomTat: `Khi Bác Sĩ hội đủ bộ Lục Cát gồm Tả Phù, Hữu Bật, Văn Xương, Văn
Khúc, Thiên Khôi, Thiên Việt tại Phụ Mẫu, cha mẹ của đương số càng lớn
tuổi càng thăng tiến, có thể trở thành chủ doanh nghiệp, lãnh đạo hoặc
quan chức cao cấp.`,
  },

  // ============================================================
  // 4. Bác Sĩ tại Phúc Đức
  // ============================================================
  {
    id: 'bac-si-tai-phuc-duc',
    title: 'Bác Sĩ tại Phúc Đức',
    sao: ['Bác Sĩ'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `Bác Sĩ cư Phúc Đức báo dòng họ của đương số có học thức cao, thành
đạt, phúc phần lớn. Trong họ dễ có phần mộ hoặc đất hương hỏa linh thiêng
mang lại sung túc và phú quý cho con cháu — mồ mả kết phát.

Đương số được hưởng may mắn từ phúc đức tổ tiên, có thể thừa hưởng đất
đai hay tài sản từ ông bà. Đương số có duyên với người có địa vị, quyền
cao chức trọng trong xã hội và gặp nhiều may mắn trong cuộc sống.

Người hôn phối của đương số giỏi giang, có chức quyền, cầm con dấu; gia
đình bên hôn phối đều là người thành đạt và tài chính mạnh.`,
  },

  // ============================================================
  // 5. Bác Sĩ tại Điền Trạch
  // ============================================================
  {
    id: 'bac-si-tai-dien-trach',
    title: 'Bác Sĩ tại Điền Trạch',
    sao: ['Bác Sĩ'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Bác Sĩ cư Điền Trạch cho thấy đương số có duyên có lộc với đất
cát, được thừa hưởng điền sản từ tổ tiên để lại.

Đương số quan tâm chăm lo cho ngôi nhà nên nhà cửa gọn gàng, sạch sẽ và
thanh nhã; trong nhà thường có một thư phòng riêng — nét đặc trưng rất
"Bác Sĩ" cho thấy chất học thức của vị trí này.`,
  },
  {
    id: 'bac-si-tai-dien-trach-co-dong-xuong-khuc-dao',
    title: 'Bác Sĩ tại Điền Trạch + Cơ/Đồng/Xương Khúc/Đào - Kiến trúc sư',
    sao: ['Bác Sĩ'],
    cung: ['Điền Trạch'],
    ketHop: ['Thiên Cơ', 'Thiên Đồng', 'Văn Xương', 'Văn Khúc', 'Đào Hoa'],
    doUuTien: 70,
    tomTat: `Khi Bác Sĩ hội cùng Thiên Cơ, Thiên Đồng, Văn Xương, Văn Khúc cùng
Đào Hoa tại Điền Trạch, đương số có tài năng nghệ thuật liên quan kiến
trúc, thiết kế, dễ trở thành kiến trúc sư, kỹ sư hoặc nghệ sĩ nổi tiếng;
ngoài ra cũng có thể bén duyên với bất động sản dài lâu.`,
  },

  // ============================================================
  // 6. Bác Sĩ tại Quan Lộc
  // ============================================================
  {
    id: 'bac-si-tai-quan-loc',
    title: 'Bác Sĩ tại Quan Lộc',
    sao: ['Bác Sĩ'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `Bác Sĩ cư Quan Lộc mang lại may mắn trong công việc và công danh
cho đương số.

Phong cách làm việc của đương số cẩn trọng, tỉ mỉ, tác phong điềm đạm; có
trí tuệ và tài năng nên được cấp trên tin tưởng và giao trọng trách quan
trọng. Đương số thường được đảm nhận chức vụ cao hoặc làm chủ doanh
nghiệp.

Bên cạnh năng lực chuyên môn, đương số còn có lòng từ bi nhân hậu, yêu
thương và sẵn lòng giúp đỡ mọi người — phẩm chất khiến uy tín được củng
cố theo thời gian.`,
  },
  {
    id: 'bac-si-tai-quan-loc-phuc-thien',
    title: 'Bác Sĩ tại Quan Lộc + Phúc thiện tinh - Bác sĩ thầy thuốc',
    sao: ['Bác Sĩ'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Lương', 'Thiên Tướng', 'Ân Quang', 'Thiên Quý', 'Thiên Quan', 'Thiên Phúc'],
    doUuTien: 73,
    tomTat: `Khi Bác Sĩ hội đủ bộ phúc thiện tinh gồm Thiên Lương, Thiên Tướng,
Ân Quang, Thiên Quý, Thiên Quan, Thiên Phúc tại Quan Lộc, đương số làm
nghề bác sĩ, thầy thuốc hoặc giáo viên — được nhiều người kính trọng.`,
  },

  // ============================================================
  // 7. Bác Sĩ tại Nô Bộc
  // ============================================================
  {
    id: 'bac-si-tai-no-boc',
    title: 'Bác Sĩ tại Nô Bộc',
    sao: ['Bác Sĩ'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Bác Sĩ cư Nô Bộc cho thấy đương số nhận được tín nhiệm và kính
trọng từ khách hàng, đồng nghiệp và cấp trên.

Đương số hay được bạn bè, đồng nghiệp, cấp dưới yêu quý, giúp đỡ, tặng
quà, được mời nhậu nhẹt ăn uống; có lộc trong làm ăn và chung vốn với bạn
bè. Khả năng làm ăn chung với bạn bè và đồng nghiệp được phát huy mạnh
nhờ vị trí này.

Bạn bè và đồng nghiệp của đương số là người có học thức, chuyên môn giỏi
— môi trường giao thiệp cũng vì thế mà được nâng tầm.`,
  },
  {
    id: 'bac-si-tai-no-boc-khoi-viet',
    title: 'Bác Sĩ tại Nô Bộc + Khôi Việt - Bạn quyền cao',
    sao: ['Bác Sĩ'],
    cung: ['Nô Bộc'],
    ketHop: ['Thiên Khôi', 'Thiên Việt', 'Ân Quang', 'Thiên Quý'],
    doUuTien: 70,
    tomTat: `Khi Bác Sĩ hội cùng quý tinh như Thiên Khôi, Thiên Việt, Ân Quang
hoặc Thiên Quý tại Nô Bộc, bạn bè của đương số là người có địa vị, quyền
cao chức trọng trong xã hội và có tiếng nói trong cộng đồng.`,
  },

  // ============================================================
  // 8. Bác Sĩ tại Thiên Di
  // ============================================================
  {
    id: 'bac-si-tai-thien-di',
    title: 'Bác Sĩ tại Thiên Di',
    sao: ['Bác Sĩ'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `Bác Sĩ cư Thiên Di cho thấy đương số có tài năng và khả năng ngoại
giao xuất sắc.

Đương số khôn ngoan, cẩn thận và khiêm nhường, dễ thích nghi với môi
trường mới, hay gặp may mắn khi bước ra ngoài. Đương số hay được mời đi
ăn, rủ đi chơi xa, tham dự tiệc và sự kiện, gặp gỡ các mối quan hệ có
giá trị.

Nhờ vậy công việc của đương số cũng thuận buồm xuôi gió, mở ra nhiều cơ
hội phát triển dài lâu.`,
  },

  // ============================================================
  // 9. Bác Sĩ tại Tật Ách
  // ============================================================
  {
    id: 'bac-si-tai-tat-ach',
    title: 'Bác Sĩ tại Tật Ách - Sức khỏe được bảo vệ',
    sao: ['Bác Sĩ'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `Bác Sĩ cư Tật Ách là dấu hiệu tốt — sức khỏe của đương số được
bảo vệ.

Đương số có ý thức cao trong việc chăm sóc bản thân, duy trì thói quen
sống khoa học. Khi có bệnh thường may tìm được thầy thuốc giỏi và mau
khỏi bệnh.

Một đặc trưng riêng của vị trí này là đương số phải mất tiền để giải trừ
bệnh tật, giống như nét nghĩa của Lộc Tồn cư Tật Ách.

Trong những hoàn cảnh tai họa hay nạn dịch, đương số luôn biết cách kiếm
tiền xung quanh hoàn cảnh đó — ví dụ điển hình là bán khẩu trang đúng mùa
covid. Một số đương số còn có cơ hội kiếm thêm thu nhập từ những tình
huống đặc thù như dịch bệnh.`,
  },

  // ============================================================
  // 10. Bác Sĩ tại Tài Bạch
  // ============================================================
  {
    id: 'bac-si-tai-tai-bach',
    title: 'Bác Sĩ tại Tài Bạch',
    sao: ['Bác Sĩ'],
    cung: ['Tài Bạch'],
    doUuTien: 78,
    tomTat: `Bác Sĩ cư Tài Bạch cho thấy đương số có kiến thức sâu rộng về tài
chính và tiền bạc, cẩn thận, biết tính toán và hiếm khi tiêu xài hoang
phí — một mẫu người quản lý dòng tiền rất có ý thức.`,
  },
  {
    id: 'bac-si-tai-tai-bach-tai-tinh',
    title: 'Bác Sĩ tại Tài Bạch + Tài tinh - Ngành tài chính kế toán',
    sao: ['Bác Sĩ'],
    cung: ['Tài Bạch'],
    ketHop: ['Vũ Khúc', 'Thiên Phủ', 'Lộc Tồn', 'Hóa Lộc'],
    doUuTien: 73,
    tomTat: `Khi Bác Sĩ hội cùng tài tinh như Vũ Khúc, Thiên Phủ, Lộc Tồn hoặc
Hóa Lộc tại Tài Bạch, công việc của đương số thường liên quan đến ngành
tài chính, kế toán; đương số kiếm tiền giỏi và quản lý tài chính tốt.`,
  },
  {
    id: 'bac-si-tai-tai-bach-luc-cat',
    title: 'Bác Sĩ tại Tài Bạch + Lục Cát - Dòng tiền ổn định',
    sao: ['Bác Sĩ'],
    cung: ['Tài Bạch'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 73,
    tomTat: `Khi Bác Sĩ hội đủ bộ Lục Cát gồm Tả Phù, Hữu Bật, Văn Xương, Văn
Khúc, Thiên Khôi, Thiên Việt tại Tài Bạch, dòng tiền của đương số tăng
trưởng đều đặn và ổn định, ít gặp sóng gió bấp bênh.`,
  },
  {
    id: 'bac-si-tai-tai-bach-vu-khuc-co-qua-dau-quan',
    title: 'Bác Sĩ tại Tài Bạch + Vũ Khúc/Cô Quả/Đẩu Quân - Keo kiệt',
    sao: ['Bác Sĩ'],
    cung: ['Tài Bạch'],
    ketHop: ['Vũ Khúc', 'Cô Thần', 'Quả Tú', 'Đẩu Quân'],
    doUuTien: 73,
    tomTat: `Khi Bác Sĩ đi cùng Vũ Khúc, Cô Thần, Quả Tú hoặc Đẩu Quân tại Tài
Bạch, sự cẩn trọng tài chính của đương số bị đẩy quá đà, biến thành keo
kiệt và tính toán chi li.`,
  },

  // ============================================================
  // 11. Bác Sĩ tại Tử Tức
  // ============================================================
  {
    id: 'bac-si-tai-tu-tuc',
    title: 'Bác Sĩ tại Tử Tức',
    sao: ['Bác Sĩ'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Bác Sĩ cư Tử Tức cho thấy đường con cái của đương số có phần chậm
hoặc muộn — dễ rơi vào cảnh hiếm muộn, đôi khi phải nhờ can thiệp của y
học để hỗ trợ mang thai.

Bù lại, con cái sinh ra thông minh, ngoan ngoãn, hiếu thảo và thành đạt —
chậm nhưng quý.`,
  },
  {
    id: 'bac-si-tai-tu-tuc-xuong-khuc',
    title: 'Bác Sĩ tại Tử Tức + Văn Xương/Văn Khúc - Con giỏi lãnh đạo',
    sao: ['Bác Sĩ'],
    cung: ['Tử Tức'],
    ketHop: ['Văn Xương', 'Văn Khúc'],
    doUuTien: 70,
    tomTat: `Khi Bác Sĩ hội cùng Văn Xương, Văn Khúc tại Tử Tức, con cái của
đương số học hành giỏi giang, có tố chất lãnh đạo và mang lại niềm tự hào
lớn cho gia đình.`,
  },

  // ============================================================
  // 12. Bác Sĩ tại Phu Thê
  // ============================================================
  {
    id: 'bac-si-tai-phu-the',
    title: 'Bác Sĩ tại Phu Thê',
    sao: ['Bác Sĩ'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `Bác Sĩ cư Phu Thê cho thấy đương số kén chọn trong việc chọn vợ
chọn chồng, đặt tiêu chuẩn cao. Đặc trưng là kết hôn muộn, người hôn phối
dễ hơn tuổi mình.

Người hôn phối điềm đạm, giỏi giang, có học thức cao, có tiền tài, địa vị,
chức tước trong xã hội, thậm chí nhiều tài sản hoặc quyền cao chức trọng.

Hôn nhân nhìn chung ổn định và bền chặt vì được xây dựng dựa trên tôn
trọng cùng lý trí, ít bị chi phối bởi cảm xúc bồng bột.`,
  },

  // ============================================================
  // 13. Bác Sĩ tại Huynh Đệ
  // ============================================================
  {
    id: 'bac-si-tai-huynh-de',
    title: 'Bác Sĩ tại Huynh Đệ',
    sao: ['Bác Sĩ'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Bác Sĩ cư Huynh Đệ cho thấy đương số ít anh chị em và chênh lệch
tuổi nhiều so với anh chị em.

Anh chị em là người có học thức, thành đạt, sự nghiệp vững vàng và hay
giúp đỡ đương số. Họ có thể trở thành chỗ dựa tốt, hậu thuẫn cả vật chất
lẫn tinh thần trong những giai đoạn quan trọng của cuộc đời đương số.`,
  },

  // ============================================================
  // 14. Bác Sĩ + Hóa Khoa
  // ============================================================
  {
    id: 'bac-si-hoa-khoa',
    title: 'Bác Sĩ + Hóa Khoa - Học hành chuyên môn cao',
    sao: ['Bác Sĩ'],
    ketHop: ['Hóa Khoa'],
    doUuTien: 60,
    tomTat: `Khi Bác Sĩ gặp Hóa Khoa, đương số là người có học hành và chuyên
môn cao. Hai sao có đặc tính giống nhau (cùng chủ học hành và giải bệnh)
khi gặp nhau tạo nên cộng hưởng mạnh: đương số đỗ đạt khoa cử, chuyên
môn được công nhận chính thức, bằng cấp cao và học vị tốt. Cách cục đặc
biệt thuận lợi cho nghiên cứu, giáo dục, y dược.`,
  },

  // ============================================================
  // 15. Bác Sĩ + Âm Dương + Xương Khúc - Thành danh nổi tiếng
  // ============================================================
  {
    id: 'bac-si-am-duong-xuong-khuc',
    title: 'Bác Sĩ + Âm Dương + Xương Khúc - Thành danh nổi tiếng',
    sao: ['Bác Sĩ'],
    ketHop: ['Thái Âm', 'Thái Dương', 'Văn Xương', 'Văn Khúc'],
    doUuTien: 60,
    tomTat: `Khi Bác Sĩ hội đủ Thái Âm, Thái Dương cùng Văn Xương, Văn Khúc,
đương số thành danh nổi tiếng, công danh vang lừng rạng rỡ. Đây là cách
cục đẹp dành cho người làm trong lĩnh vực trí thức, học giả, nghiên cứu,
giáo dục — danh tiếng được công nhận rộng rãi.`,
  },

  // ============================================================
  // 16. Bác Sĩ + phúc thiện tinh - năng khiếu y học
  // ============================================================
  {
    id: 'bac-si-phuc-thien-tinh',
    title: 'Bác Sĩ + Phúc Thiện tinh - Năng khiếu y học, làm thầy thuốc',
    sao: ['Bác Sĩ'],
    ketHop: ['Thiên Lương', 'Thiên Tướng', 'Ân Quang', 'Thiên Quý', 'Thiên Quan', 'Thiên Phúc'],
    doUuTien: 62,
    tomTat: `Khi Bác Sĩ hội đủ Thiên Lương, Thiên Tướng, Ân Quang, Thiên Quý,
Thiên Quan, Thiên Phúc, đương số có năng khiếu trong các lĩnh vực y học,
giáo dục và nghệ thuật, dường như được trời phú đôi tay "chữa lành".

Đương số thuận lợi theo đuổi ngành y dược, dễ trở thành thầy thuốc, bác
sĩ giỏi, đóng góp giá trị cao cho cộng đồng — đúng nghĩa cái tên Bác Sĩ
là sao của người làm nghề chữa bệnh, dạy dỗ và cứu giúp.`,
  },

  // ============================================================
  // 17. Bác Sĩ vào hạn
  // ============================================================
  {
    id: 'bac-si-vao-han',
    title: 'Bác Sĩ vào hạn',
    sao: ['Bác Sĩ'],
    doUuTien: 50,
    tomTat: `Hạn có Bác Sĩ là giai đoạn đương số trau dồi kiến thức, xây dựng
nền tảng và tích lũy tài chính. Vì Bác Sĩ luôn đồng cung Lộc Tồn, hạn
này cũng ám chỉ thời kỳ no ấm và thịnh vượng về vật chất.

Cần lưu ý một nguyên tắc an sao: cung vận có Bác Sĩ và Lộc Tồn luôn ở thế
bị Kình Dương cùng Đà La giáp. Vì vậy thời gian đầu đương số có thể gặp
một số thử thách hoặc áp lực; nếu kiên trì vượt qua, đương số gặt hái
thành quả bền vững và lấy đó làm bàn đạp vững chắc cho tương lai.

Nếu trong hạn có thêm dấu hiệu bệnh tật, sự hiện diện của Bác Sĩ vẫn báo
mau bình phục và có duyên gặp được thầy giỏi để giải bệnh.`,
  },
];
