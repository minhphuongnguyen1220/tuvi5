import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO HỮU BẬT - Lục Cát Tinh
 */
export const luanGiai_HuuBat: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung của sao Hữu Bật
  // ============================================================
  {
    id: 'huu-bat-tinh-chat-chung',
    title: 'Hữu Bật - Đặc tính chung',
    sao: ['Hữu Bật'],
    doUuTien: 30,
    tomTat: `**Hữu Bật** thuộc bộ Lục Cát Tinh, ngũ hành Thủy (Âm Thủy), là
trợ tinh thứ hai của chòm Bắc Đẩu. Hóa khí là Phù Tinh, Hộ Tinh — đóng vai
trò trợ tá của sao Tử Vi và chủ về chế định pháp lệnh.

Đặc tính của Hữu Bật là mạnh mẽ, quyết đoán; sao này dùng hành động và sức
lực để phò tá, trợ giúp. So sánh với Tả Phù: Tả Phù thiên về trí tuệ, nhân
hậu và phúc hậu hơn; còn Hữu Bật thiên về hành động và sức lực, không phúc
hậu bằng.

Vì thuộc Âm Thủy, Hữu Bật mang tính đào hoa nên ảnh hưởng xấu đến đường
tình duyên của đương số.`,

    chiTiet: `## Tinh thần lạc quan tiến thủ

Tương tự Tả Phù, Hữu Bật là phúc tinh mang tinh thần lạc quan tiến thủ,
không sợ gian nan. Sao này có khả năng trợ giúp thiết thực, làm việc tích
cực và sát thực, nên đương số khó tránh khỏi vất vả. Bù lại, đương số trung
hậu thiện lương và bao dung quảng đại.

## Tính đào hoa - "vui ngắn buồn dài"

Vì thuộc Âm Thủy, Hữu Bật mang tính đào hoa và gây ảnh hưởng xấu đến đường
tình duyên: chuyện vui thường phải kết thúc bằng chuyện buồn, đương số
phải chịu nỗi khổ tâm bất đắc dĩ.

Khi Hữu Bật đi cùng Thiên Đồng, Thiên Lương, Thiên Cơ, Cự Môn hay Vũ Khúc,
tính đào hoa càng nổi bật và đường tình duyên không thể phát triển bình
thường được.

Cần lưu ý: Hữu Bật không nên nhập cung Phu Thê và Tử Tức — dễ khiến tình
cảm vợ chồng rạn nứt, ly hôn.

## Khả năng chế định pháp lệnh

Hữu Bật chủ về chế định pháp lệnh nên đương số dễ nảy sinh dã tâm chiếm
đoạt, nhiều mưu mẹo, thích quản chế người khác mà không thích bị người
khác ước thúc.

## Vận trình

- Sự nghiệp: công danh, sự nghiệp và thi cử gặp nhiều thuận lợi, được
  người khác nâng đỡ.
- Duyên vận: dễ có hai đời vợ hoặc chồng, hoặc kết hôn với người đã từng
  lập gia đình. Vợ chồng thường chênh lệch tuổi tác, khác quê quán hoặc
  khác tôn giáo.
- Tài lộc: theo cách "tay trắng làm nên cơ đồ" nhờ chung sức với bạn bè,
  đồng nghiệp.
- Phúc thọ: khi bệnh thường gặp thầy hay thuốc tốt; nếu hội sát tinh thì
  bệnh kéo dài và biến chứng.`,
  },

  // ============================================================
  // 2. Hữu Bật KHÔNG nên đứng một mình
  // ============================================================
  {
    id: 'huu-bat-khong-nen-don-thu',
    title: 'Hữu Bật KHÔNG nên đứng một mình',
    sao: ['Hữu Bật'],
    doUuTien: 35,
    tomTat: `Một nguyên tắc quan trọng: Hữu Bật không nên đứng một mình. Tốt
nhất là đồng cung với chủ tinh cấp Giáp như Tử Vi, Thiên Phủ hay Thiên Đồng
thì mới phát huy được khả năng trợ giúp.

Nếu đứng một mình, Hữu Bật rơi vào cảnh "anh hùng không có đất dụng võ".

Khi đồng cung Tử Vi hoặc Thiên Phủ, đương số chủ về tiền tài danh vọng
song toàn, văn võ toàn tài.

Trường hợp đứng một mình mà còn phải chống chọi với Kình Dương, Hỏa Tinh,
Liêm Trinh lạc hãm, Hữu Bật trở nên yếu thế.`,
  },
  {
    id: 'huu-bat-kinh-da-hoa-linh-ky-xung-pha',
    title: 'Hữu Bật + Kình Đà/Hỏa Linh/Hóa Kỵ xung phá - Người bần tiện',
    sao: ['Hữu Bật'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Hóa Kỵ'],
    doUuTien: 30,
    tomTat: `Khi Hữu Bật bị Kình Dương, Đà La, Hỏa Tinh, Linh Tinh hoặc Hóa
Kỵ xung phá, đương số trở thành người bần tiện.`,
  },

  // ============================================================
  // 3. Cặp Tả Phù Hữu Bật - cách quý
  // ============================================================
  {
    id: 'huu-bat-cap-ta-huu',
    title: 'Cặp Tả Phù Hữu Bật - Cách quý',
    sao: ['Hữu Bật', 'Tả Phù'],
    doUuTien: 60,
    tomTat: `Cặp **Tả Phù + Hữu Bật** là bộ trợ tinh quan trọng nhất trong lá
số.

Cặp này đắc cách trong các trường hợp: đồng cung tại Sửu hoặc Mùi — đương
số đa tài, "văn võ song toàn", thông thạo nhiều nghề, đảm đang tháo vát;
giáp Mệnh ("Tả Hữu giáp Mệnh") tạo thành một cách rất quý; hoặc cùng hội
chiếu Mệnh đem lại nhiều quý nhân và bạn bè trợ lực.

Vai trò của hai sao bổ sung lẫn nhau: Tả Phù mang trí tuệ và nhân hậu (Thổ),
Hữu Bật mang sức lực và hành động (Thủy). Cùng nhau, đương số đầy đủ cả
văn và võ.`,
  },

  // ============================================================
  // 4. Hữu Bật tại Mệnh
  // ============================================================
  {
    id: 'huu-bat-tai-menh',
    title: 'Hữu Bật tại Mệnh',
    sao: ['Hữu Bật'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Khi Hữu Bật cư Mệnh, đương số mang vẻ lạc quan, khoan dung, đôn
hậu, sẵn sàng cứu giúp người khác. Đương số khéo léo, nhanh nhạy, khỏe
mạnh và thích dùng hành động cùng sức lực để giải quyết vấn đề.

Ý thức tự lập của đương số rất cao: sớm xa gia đình, ly hương lập nghiệp
để tìm kiếm thành công. Đương số phù hợp các lĩnh vực đòi hỏi sức mạnh và
quyết đoán, đặc biệt là võ nghiệp.

Một may mắn lớn của đương số là luôn có bạn bè, đồng nghiệp, cấp trên cùng
những người xa lạ giúp đỡ.

Tuy vậy, vì thuộc Âm Thủy, Hữu Bật mang tính đào hoa khiến đường tình
duyên của đương số dễ rơi vào cảnh khổ tâm.

Cách Tả Hữu đồng cung tại Sửu/Mùi được tách thành luận giải riêng.`,

    chiTiet: `## Lưu ý

Hữu Bật cư Mệnh nên đi cùng chính tinh mạnh — đặc biệt là Tử Vi và Thiên
Phủ — để phát huy hết khả năng trợ lực của mình.`,
  },

  {
    id: 'ta-huu-suu-mui-menh',
    title: 'Tả Phù + Hữu Bật đồng cung Sửu / Mùi - Văn võ song toàn',
    sao: ['Hữu Bật'],
    cung: ['Mệnh'],
    chi: ['Sửu', 'Mùi'],
    ketHop: ['Tả Phù'],
    doUuTien: 70,
    tomTat: `Khi **Tả Phù** đồng cung Hữu Bật tại Sửu hoặc Mùi, hoặc cùng
giáp Mệnh và hội chiếu, đương số đa tài, "văn võ song toàn", thông thạo
nhiều nghề, đảm đang và tháo vát. Đây là cách cục đặc biệt của bộ Tả Hữu
tại Sửu/Mùi.`,
  },

  // ============================================================
  // 5. Hữu Bật tại Phụ Mẫu
  // ============================================================
  {
    id: 'huu-bat-tai-phu-mau',
    title: 'Hữu Bật tại Phụ Mẫu',
    sao: ['Hữu Bật'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Khi Hữu Bật cư Phụ Mẫu, cha mẹ đương số là người có tài năng,
khá giả và sẵn sàng giúp đỡ con cái.

Khi còn trẻ, đương số phải theo cha mẹ rời quê hương lập nghiệp ở phương
xa. Đương số thường được người lớn tuổi và quý nhân yêu mến, nhiều trường
hợp có cha mẹ đỡ đầu.`,
  },

  // ============================================================
  // 6. Hữu Bật tại Phúc Đức
  // ============================================================
  {
    id: 'huu-bat-tai-phuc-duc',
    title: 'Hữu Bật tại Phúc Đức',
    sao: ['Hữu Bật'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `Khi Hữu Bật cư Phúc Đức, dòng họ đương số có nhiều người ly
hương và thành công, giàu có ở xứ người. Bản thân đương số được hưởng phúc
đức, sống lâu — càng xa quê càng dễ thành công.`,
  },
  {
    id: 'huu-bat-tai-phuc-duc-khong-kiep-linh-hoa-ky',
    title: 'Hữu Bật tại Phúc Đức + Không/Kiếp/Linh/Hỏa/Hóa Kỵ - Phúc đức suy giảm',
    sao: ['Hữu Bật'],
    cung: ['Phúc Đức'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Linh Tinh', 'Hỏa Tinh', 'Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `Khi Hữu Bật cư Phúc Đức gặp Địa Không, Địa Kiếp, Linh Tinh, Hỏa
Tinh hoặc Hóa Kỵ, phúc đức của đương số suy giảm, dòng họ ly tán và lụn
bại; đương số phải phiêu bạt nơi xa mới được yên thân.`,
  },

  // ============================================================
  // 7. Hữu Bật tại Điền Trạch
  // ============================================================
  {
    id: 'huu-bat-tai-dien-trach',
    title: 'Hữu Bật tại Điền Trạch',
    sao: ['Hữu Bật'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Khi Hữu Bật cư Điền Trạch, đương số sở hữu nhiều bất động sản,
nhà cửa khang trang, thậm chí có cả nhà chính lẫn nhà phụ.

Một điểm đáng chú ý: phần lớn nhà cửa, đất đai và nơi làm việc đều ở xa
quê, do chính tay đương số tự gầy dựng nên.`,
  },

  // ============================================================
  // 8. Hữu Bật tại Quan Lộc
  // ============================================================
  {
    id: 'huu-bat-tai-quan-loc',
    title: 'Hữu Bật tại Quan Lộc',
    sao: ['Hữu Bật'],
    cung: ['Quan Lộc'],
    doUuTien: 80,
    tomTat: `Khi Hữu Bật cư Quan Lộc, công danh, sự nghiệp và thi cử của
đương số gặp nhiều thuận lợi, dễ được người khác nâng đỡ.

Đương số phù hợp với vai trò trợ lý, trợ tá, người chuyên thực thi mệnh
lệnh, hành động quyết đoán — đặc biệt là võ nghiệp.`,
  },

  // ============================================================
  // 9. Hữu Bật tại Nô Bộc
  // ============================================================
  {
    id: 'huu-bat-tai-no-boc',
    title: 'Hữu Bật tại Nô Bộc',
    sao: ['Hữu Bật'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Khi Hữu Bật cư Nô Bộc, đương số có mạng lưới quan hệ xã hội
rộng, bạn bè khắp nơi. Luôn có người sẵn sàng giúp đỡ và hỗ trợ, nên đương
số không bao giờ phải đơn độc một mình.`,
  },

  // ============================================================
  // 10. Hữu Bật tại Thiên Di
  // ============================================================
  {
    id: 'huu-bat-tai-thien-di',
    title: 'Hữu Bật tại Thiên Di',
    sao: ['Hữu Bật'],
    cung: ['Thiên Di'],
    doUuTien: 78,
    tomTat: `Khi Hữu Bật cư Thiên Di, đương số hay đi đây đi đó; mỗi lần ra
ngoài đều có nhiều quý nhân và trợ thủ giúp đỡ.`,
  },
  {
    id: 'huu-bat-tai-thien-di-kinh-da-ky',
    title: 'Hữu Bật tại Thiên Di + Kình/Đà/Hóa Kỵ - Tiểu nhân mưu hại',
    sao: ['Hữu Bật'],
    cung: ['Thiên Di'],
    ketHop: ['Kình Dương', 'Đà La', 'Hóa Kỵ'],
    doUuTien: 73,
    tomTat: `Khi Hữu Bật cư Thiên Di gặp Kình Dương, Đà La hoặc Hóa Kỵ,
đương số dễ bị tiểu nhân bày mưu tính kế, mưu hại có tổ chức và khó lòng
chống đỡ.`,
  },

  // ============================================================
  // 11. Hữu Bật tại Tật Ách
  // ============================================================
  {
    id: 'huu-bat-tai-tat-ach',
    title: 'Hữu Bật tại Tật Ách',
    sao: ['Hữu Bật'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `Khi Hữu Bật cư Tật Ách, mỗi lần đương số ốm đau đều dễ gặp được
thầy hay thuốc tốt và mau chóng khỏi bệnh.`,
  },
  {
    id: 'huu-bat-tai-tat-ach-khong-kiep-kinh-linh',
    title: 'Hữu Bật tại Tật Ách + Không/Kiếp/Kình/Linh hãm - Bệnh kéo dài',
    sao: ['Hữu Bật'],
    cung: ['Tật Ách'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Kình Dương', 'Linh Tinh'],
    doUuTien: 70,
    tomTat: `Khi Hữu Bật cư Tật Ách gặp Địa Không, Địa Kiếp, Kình Dương hoặc
Linh Tinh hãm địa, bệnh tật của đương số kéo dài, khó chữa và gây nhiều
biến chứng.`,
  },

  // ============================================================
  // 12. Hữu Bật tại Tài Bạch
  // ============================================================
  {
    id: 'huu-bat-tai-tai-bach',
    title: 'Hữu Bật tại Tài Bạch',
    sao: ['Hữu Bật'],
    cung: ['Tài Bạch'],
    doUuTien: 78,
    tomTat: `Khi Hữu Bật cư Tài Bạch, con đường kiếm tiền của đương số rộng
mở theo cách "tay trắng làm nên cơ đồ" nhờ chung sức với bạn bè và đồng
nghiệp.

Đương số có nhiều nguồn thu nhập từ nhiều nghề khác nhau và hiếm khi rơi
vào cảnh thiếu thốn.`,
  },

  // ============================================================
  // 13. Hữu Bật tại Tử Tức - VỊ TRÍ KHÔNG NÊN
  // ============================================================
  {
    id: 'huu-bat-tai-tu-tuc',
    title: 'Hữu Bật tại Tử Tức - Vị trí KHÔNG NÊN',
    sao: ['Hữu Bật'],
    cung: ['Tử Tức'],
    doUuTien: 78,
    tomTat: `Hữu Bật không nên cư Tử Tức do tính đào hoa của Âm Thủy. Tại
cung này, sao Hữu Bật làm gia tăng số lượng con cái, đương số dễ có con
nuôi hoặc con khác dòng. Bù lại, con cái sau này tháo vát, đảm đang và có
xu hướng ly hương lập nghiệp.`,
  },

  // ============================================================
  // 14. Hữu Bật tại Phu Thê - VỊ TRÍ XẤU NHẤT
  // ============================================================
  {
    id: 'huu-bat-tai-phu-the',
    title: 'Hữu Bật tại Phu Thê - Vị trí XẤU NHẤT',
    sao: ['Hữu Bật'],
    cung: ['Phu Thê'],
    doUuTien: 85,
    tomTat: `Cung Phu Thê là vị trí xấu nhất của Hữu Bật, do tính đào hoa
Âm Thủy của sao này. Đương số dễ có hai đời vợ hoặc chồng, hoặc kết hôn
với người đã từng lập gia đình. Vợ chồng thường chênh lệch tuổi tác, khác
quê quán hoặc khác tôn giáo.

Tình thế có thể cứu vãn nếu Phu Thê có thêm chính tinh hữu lực hoặc một
số sát tinh tạo thế cân bằng — khi ấy hôn nhân vẫn có thể hài hòa.`,
  },
  {
    id: 'huu-bat-tai-phu-the-kinh-da-khong-kiep-hinh',
    title: 'Hữu Bật tại Phu Thê + Kình Đà/Không Kiếp/Thiên Hình - Ly tán đổ vỡ',
    sao: ['Hữu Bật'],
    cung: ['Phu Thê'],
    ketHop: ['Kình Dương', 'Đà La', 'Địa Không', 'Địa Kiếp', 'Thiên Hình'],
    doUuTien: 80,
    tomTat: `Khi Hữu Bật cư Phu Thê gặp Kình Dương, Đà La, Địa Không, Địa
Kiếp hoặc Thiên Hình, hôn nhân của đương số càng dễ ly tán và đổ vỡ.`,
  },

  // ============================================================
  // 15. Hữu Bật tại Huynh Đệ
  // ============================================================
  {
    id: 'huu-bat-tai-huynh-de',
    title: 'Hữu Bật tại Huynh Đệ',
    sao: ['Hữu Bật'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Khi Hữu Bật cư Huynh Đệ, gia đình đương số đông anh chị em;
nhiều trường hợp có anh chị em dị bào (khác mẹ) hoặc kết nghĩa.

Anh chị em thường rất tháo vát, dù lập nghiệp ở phương xa nhưng luôn sẵn
lòng giúp đỡ nhau khi cần.`,
  },

  // ============================================================
  // 16. Hạn gặp Tả Phù Hữu Bật
  // ============================================================
  {
    id: 'huu-bat-han-ta-phu-huu-bat',
    title: 'Hạn gặp Tả Phù Hữu Bật',
    sao: ['Hữu Bật', 'Tả Phù'],
    doUuTien: 60,
    tomTat: `Khi đại vận hoặc tiểu vận gặp **Tả Phù** cùng Hữu Bật, có hai
nét nổi bật.

Trường hợp ở Thìn, Tuất, Sửu hoặc Mùi và đi cùng cát tinh, đương số gặp
hạn thăng quan tiến chức, vinh hiển. Có người đắc lực hỗ trợ — có thể là
trợ lý, thư ký hay quý nhân.

Cặp sao này cũng chủ về sự bận rộn và di chuyển: đương số phải đi công
tác, thay đổi nơi làm việc, hoặc bắt đầu công việc mới ở phương xa.`,

    chiTiet: `## 1. Hạn thăng quan tiến chức

Khi Tả Phù cùng Hữu Bật ở Thìn, Tuất, Sửu hoặc Mùi và đi cùng nhiều cát
tinh, đương số gặp hạn thăng tiến mạnh mẽ và vinh hiển. Trong vận này
thường có người đắc lực đến hỗ trợ giúp sức — có thể là trợ lý, thư ký,
hoặc quý nhân.

## 2. Bận rộn làm việc xa nhà

Cặp sao này chủ về sự di chuyển, bận rộn và tất bật nhiều việc. Đương số
phải đi công tác, thay đổi nơi làm việc, hoặc bắt đầu công việc mới ở
phương xa.

## 3. Cẩn thận tiểu tam ngoại tình

Hữu Bật bản chất là sao trợ lực, tượng trưng cho người khác đến bên đương
số giúp đỡ. Khi hạn này gặp Đào Hoa, Hồng Loan, Thiên Riêu hay Mộc Dục,
đương số dễ nảy sinh tình cảm ngoài luồng. Nếu không giữ mình, đương số
vướng tình tay ba và hôn nhân rạn nứt.`,
  },
  {
    id: 'huu-bat-han-dao-hong-rieu-moc-duc',
    title: 'Hạn Tả Hữu + Đào Hoa/Hồng Loan/Thiên Riêu/Mộc Dục - Tình ngoài luồng',
    sao: ['Hữu Bật', 'Tả Phù'],
    ketHop: ['Đào Hoa', 'Hồng Loan', 'Thiên Riêu', 'Mộc Dục'],
    doUuTien: 55,
    tomTat: `Khi hạn có **Tả Phù** cùng Hữu Bật gặp Đào Hoa, Hồng Loan, Thiên
Riêu hoặc Mộc Dục, đương số dễ nảy sinh tình cảm ngoài luồng và vướng tình
tay ba; hôn nhân rạn nứt nếu không biết giữ mình.`,
  },
];
