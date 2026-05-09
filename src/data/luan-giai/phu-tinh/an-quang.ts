import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO ÂN QUANG - Mộc, Phúc Tinh + Quý Tinh.
 *
 * An theo VỊ TRÍ VĂN XƯƠNG (cùng cặp với Thiên Quý an theo Văn Khúc).
 *
 * Đặc trưng cặp Quang Quý:
 * - Sửu/Mùi: ĐỒNG CUNG (đắc cách nhất - đại khoa)
 * - Thìn/Tuất: XUNG CHIẾU
 * - Mão/Dậu/Tỵ/Hợi: TAM HỢP CHIẾU
 * - Tý/Ngọ/Dần/Thân: ĐỨNG RIÊNG (không thành bộ)
 * - Sửu/Mùi còn có cách GIÁP QUANG GIÁP QUÝ
 *
 * Phân biệt:
 * - ÂN QUANG = sự giúp đỡ của ĐẤNG LINH THIÊNG (khác Tả Hữu là người đời)
 * - Thiên hướng VẬT CHẤT, dễ làm THẦY GIÁO, THẦY LANG
 *
 * Phần CHUNG cặp Quang Quý đã viết tại file này với
 * sao: ['Ân Quang', 'Thiên Quý'].
 */
export const luanGiai_AnQuang: DoanLuanGiai[] = [
  {
    id: 'an-quang-tinh-chat-chung',
    title: 'Ân Quang - Đặc tính chung',
    sao: ['Ân Quang'],
    doUuTien: 32,
    tomTat: `**Ân Quang** — phụ tinh thuộc nhóm Phúc tinh và Quý tinh, an theo
vị trí Văn Xương, ngũ hành Mộc.

Đặc tính của Ân Quang là nhân hậu, từ thiện, may mắn, gặp thời, đem lại sự
tốt lành. Sao này cứu khốn phò nguy, giải trừ bệnh tật tai họa, đem lại
phúc thọ, chế hóa tính dâm đãng của Đào Hồng.

Vai trò đặc biệt của Ân Quang là sự giúp đỡ của đấng linh thiêng — khác Tả
Phù, Hữu Bật vốn là sự giúp đỡ của người đời. Sao này gặp sao hung cũng
không có hại; tọa thủ tại bất kỳ cung nào đều mang lại tốt lành, phúc thọ.

Về hướng nghiệp, Ân Quang thiên về vật chất — đương số dễ làm thầy giáo,
thầy lang, các nghề có thiện tính cao.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // PHẦN CHUNG CẶP QUANG QUÝ
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'quang-quy-bo-doi-tinh-chat',
    title: 'Bộ Quang Quý - Đặc tính chung của cặp đôi',
    sao: ['Ân Quang', 'Thiên Quý'],
    doUuTien: 55,
    tomTat: `Bộ **Quang Quý** gồm **Ân Quang** và **Thiên Quý** — cặp đôi phúc
thiện tinh quan trọng nhất của tử vi.

Đặc tính chung của bộ này là phúc tinh kiêm quý tinh, chủ về nhân hậu, từ
thiện, may mắn, gặp thời. Quang Quý cứu khốn phò nguy, giải trừ bệnh tật,
tai họa và đem lại phúc thọ; chế hóa Đào Hồng — giảm tính dâm đãng hoa
nguyệt; gặp sao hung cũng không có hại.

Bộ này là sự giúp đỡ của đấng linh thiêng (so với Tả Hữu là sự giúp đỡ của
người đời).

Về quy luật an sao, Ân Quang an theo Văn Xương, Thiên Quý an theo Văn Khúc.
Hai sao đồng cung tại Sửu hoặc Mùi (đắc cách nhất), xung chiếu tại Thìn
hoặc Tuất, tam hợp chiếu tại Mão, Dậu, Tỵ, Hợi, và đứng riêng lẻ tại Tý,
Ngọ, Dần, Thân.

Như Văn Xương cùng Văn Khúc, Quang Quý cũng phù trì cho Thái Dương Thái Âm,
đặc biệt hợp với Nhật Nguyệt sáng.`,
  },

  {
    id: 'quang-quy-phan-biet-vat-chat-tinh-than',
    title: 'Phân biệt Ân Quang (vật chất) vs Thiên Quý (tinh thần)',
    sao: ['Ân Quang', 'Thiên Quý'],
    doUuTien: 50,
    tomTat: `Tuy cùng là cặp Quang Quý, hai sao có vai trò khác nhau rõ rệt.

**Ân Quang** thuộc Mộc, thiên về vật chất. Tại Mệnh, đương số dễ làm thầy
giáo, thầy lang; hưởng phúc thiên về tài lộc, công danh hữu hình; giúp đỡ
cụ thể, thực tế.

**Thiên Quý** thuộc Thổ, thiên về tinh thần. Tại Mệnh, đương số dễ làm công
chức; hưởng phúc thiên về tâm linh, bình an, danh tiếng; giúp đỡ về đạo
nghĩa, tu dưỡng.

Khi đồng cung tại Sửu hoặc Mùi, cả hai mặt vật chất và tinh thần đều viên
mãn — đây là điều khiến cặp Sửu/Mùi đắc cách nhất.`,
  },

  {
    id: 'quang-quy-suu-mui-dac-cach',
    title: 'Quang Quý đồng cung Sửu/Mùi - đắc cách đại khoa',
    sao: ['Ân Quang', 'Thiên Quý'],
    chi: ['Sửu', 'Mùi'],
    doUuTien: 88,
    tomTat: `Quang Quý đồng cung tại Sửu hoặc Mùi là vị trí **đắc cách** nhất
của bộ này — sách vở ghi "Quang Quý miếu địa tại Sửu Mùi".

Sửu, Mùi là cung Thổ — đất trung dung kết phát phúc khí. Tại đây, Quang Quý
chủ về đại khoa: gặp cát tinh thì học giỏi, công danh hiển đạt. Đương số
hưởng ân huệ trời ban, hay gặp may mắn; gặp khó khăn có người giúp đỡ;
thường có tín ngưỡng, tin vào đấng thiêng liêng.

Câu phú lưu truyền:

> "Quý Ân Sửu Mùi hạn cầu
> Đường mây gặp bước cao sâu cửu trùng"

— vào hạn tại bản cung cầu công danh đỗ đạt cao.

Đặc biệt, chỉ riêng vị trí này mới có cách **giáp Quang giáp Quý** — cách
đẹp nhưng yếu hơn đồng cung trực tiếp.

Khả năng giải họa: tại Sửu, Mùi, Quang Quý giải được hung tinh tọa thủ tại
các cung nhị hợp tương ứng.`,
  },

  {
    id: 'quang-quy-thin-tuat-xung-chieu',
    title: 'Quang Quý xung chiếu Thìn/Tuất - giải Không Kiếp',
    sao: ['Ân Quang', 'Thiên Quý'],
    chi: ['Thìn', 'Tuất'],
    doUuTien: 82,
    tomTat: `Quang Quý xung chiếu tại Thìn, Tuất là vị trí Tứ Mộ, khả năng giải
họa cực mạnh.

Tại Tứ Mộ, hai sao này rất mạnh mẽ, có tác dụng cứu giải ngay cả các hung
tinh hạng nặng như Địa Không, Địa Kiếp đóng đồng cung.

Cụ thể về cách giải hung tinh:

- Tại Thìn, Tuất gặp Địa Không hoặc Địa Kiếp đồng cung hoặc hợp chiếu, Quang
  Quý giải hầu hết tai họa.
- Có thêm Kình Dương, Đà La hãm địa chiếu về cũng không sao.
- Có thêm Thiên Hình, Thiên Riêu cả bộ đi cùng Không Kiếp thì giảm rất nhiều
  tai họa nhưng không hết.`,
  },

  {
    id: 'quang-quy-mao-dau-tam-hop',
    title: 'Quang Quý tại Mão / Dậu - Đắc tam hợp giữ phúc tinh',
    sao: ['Ân Quang', 'Thiên Quý'],
    chi: ['Mão', 'Dậu'],
    doUuTien: 75,
    tomTat: `Quang Quý tại Mão hoặc Dậu — có người cho rằng đắc tại đây, vẫn
giữ được phẩm chất phúc tinh tốt.`,
  },

  {
    id: 'quang-quy-giai-hoa-tong-quat',
    title: 'Quang Quý - Khả năng giải họa chi tiết',
    sao: ['Ân Quang', 'Thiên Quý'],
    doUuTien: 60,
    tomTat: `Quang Quý giải họa rất mạnh, đặc biệt khi thủ tại cung và đi đủ
bộ.

Mức độ giải họa thay đổi theo thế đứng:

- Đủ bộ thủ tại Thìn, Tuất, Sửu, Mùi: mạnh mẽ nhất, giải hầu hết.
- Đồng cung tại Sửu, Mùi: giải được Hình Riêu Không Kiếp đủ bộ thủ chiếu.
- Tam hợp chiếu: giải hung tinh hãm địa cả bộ chiếu, kể cả Kình Đà.
- Đơn thủ (chỉ có một sao): hiệu lực yếu đi nhiều.
- Cách giáp Quang giáp Quý: hầu như không có tác động giải họa khi trong
  cung có hung tinh hãm địa thủ.

Quang Quý giải được Kình Dương hãm tại Tý, Ngọ, Mão, Dậu; giải Địa Không,
Địa Kiếp, Kình Dương, Đà La, Hỏa Tinh, Linh Tinh, Thiên Hình, Thiên Riêu —
nhóm sát tinh hạng nặng. Khi đồng cung, bộ này còn giải được Hình Riêu Không
Kiếp đủ bộ thủ chiếu.

Tuy nhiên, có những trường hợp Quang Quý không giải được:

- Cách hai đời chồng/vợ do Tả Phù, Hữu Bật tại Phu Thê (vì không phải hung
  tinh tác họa).
- Thị phi do Thái Tuế, Đà La, **Hóa Kỵ** gây ra (không giải mạnh được).
- Đơn thủ không giải được Kình cư Ngọ cùng Hình Riêu tam hợp.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP NỔI TIẾNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'quang-quy-thai-cao-tu-vinh',
    title: 'Quang Quý + Thai Cáo (Thai Phụ + Phong Cáo) - Tứ Vinh',
    sao: ['Ân Quang', 'Thiên Quý'],
    ketHop: ['Thai Phụ'],
    doUuTien: 55,
    tomTat: `Quang Quý đi cùng Thai Phụ, Phong Cáo gọi là cách **Tứ Vinh**
(vinh hiển) — đương số dễ hiển đạt.

Câu phú lưu truyền: "Thai Phụ Quang Quý sớm có công danh" — trai thì hiển
đạt, gái thì lấy chồng làm lớn.

Bộ này phát rất sớm về công danh, có cả phẩm tước (Thai Cáo) lẫn phúc đức
(Quang Quý) — vinh hiển toàn diện.`,
  },

  {
    id: 'quang-quy-tu-linh-hong-thuong-cach',
    title: 'Quý Ân Thanh Việt Cái Hồng - Trai cận cửu trùng nữ tác cung phi',
    sao: ['Ân Quang', 'Thiên Quý'],
    ketHop: ['Thanh Long'],
    doUuTien: 55,
    tomTat: `Khi Quang Quý hội Tả Phù, Hữu Bật, Thanh Long, Thiên Khôi, Thiên
Việt, Hoa Cái và Hồng Loan — cách **thượng cách**, chức vị lớn.

Câu phú nổi tiếng:

> "Quý Ân Thanh Việt Cái Hồng
> Trai cận cửu trùng, nữ tác cung phi"

Trai thì cận cửu trùng (gần vua), bậc đại thần, cận thần; nữ thì tác cung
phi — cao quý trong cung đình hoặc lấy chồng địa vị tột đỉnh.

Phân tích vai trò mỗi sao trong bộ: Quang Quý đem phúc đức và sự che chở
của trời; Tả Phù, Hữu Bật là sự nâng đỡ của người đời; Thanh Long mang long
khí cao quý; Thiên Khôi cùng Thiên Việt là Thiên Ất Quý Nhân; Hoa Cái thêm
phẩm cách tâm linh; Hồng Loan đem dung mạo phúc khí. Hội tụ cả phúc, quý,
lộc, duyên ở mức tột đỉnh.`,
  },

  {
    id: 'quang-quy-co-luong-thin-tuat',
    title: 'Quang Quý + Cơ Lương Thìn/Tuất - Đại quý',
    sao: ['Ân Quang', 'Thiên Quý'],
    chi: ['Thìn', 'Tuất'],
    ketHop: ['Thiên Cơ', 'Thiên Lương'],
    doUuTien: 55,
    tomTat: `Quang Quý gặp Thiên Cơ và Thiên Lương đồng cung Thìn hoặc Tuất là
cách **đại quý, làm nên**.

Cách Cơ Lương Thìn/Tuất đã đẹp (chính tinh hợp cách Tứ Mộ). Thêm Quang Quý
đắc địa Tứ Mộ thì tăng cả trí tuệ, phúc thọ và quý nhân — đường công danh
thuận buồm xuôi gió, đương số làm nên việc lớn.`,
  },

  {
    id: 'quang-quy-khoi-viet-suu-mui',
    title: 'Quang Quý + Khôi Việt Sửu/Mùi - Đại quý',
    sao: ['Ân Quang', 'Thiên Quý'],
    chi: ['Sửu', 'Mùi'],
    ketHop: ['Thiên Khôi'],
    doUuTien: 60,
    tomTat: `Quang Quý đi cùng Thiên Khôi, Thiên Việt đồng cung Sửu hoặc Mùi —
cách **đại quý, làm nên**.

Quang Quý đắc cách tại Sửu, Mùi; Khôi Việt là Thiên Ất Quý Nhân — quý nhân
tột đỉnh. Hai cặp quý nhân (linh thiêng và người đời) hội tụ tại đất Thổ:
phúc đại thặng. Đương số đỗ đại khoa, làm quan đến chức cao.`,
  },

  {
    id: 'quang-quy-thien-tuong-dai-quy',
    title: 'Quang Quý + Thiên Tướng - Đại quý làm nên to',
    sao: ['Ân Quang', 'Thiên Quý'],
    ketHop: ['Thiên Tướng'],
    doUuTien: 55,
    tomTat: `Quang Quý gặp Thiên Tướng đồng cung là cách **đại quý, làm nên to**.

Thiên Tướng là sao Ấn (con dấu, quyền lực); Quang Quý là quý nhân phù trợ —
hợp thành cách "phúc ấm đới ấn", vừa có quyền lực vừa có phúc trạch dày. Sự
nghiệp của đương số lớn lao, phúc lộc dồi dào.`,
  },

  {
    id: 'quang-quy-luong-ngo-van-vo-toan-tai',
    title: 'Quang Quý + Tả Hữu + Lương cư Ngọ - Văn võ toàn tài',
    sao: ['Ân Quang', 'Thiên Quý'],
    cung: ['Mệnh'],
    chi: ['Ngọ'],
    ketHop: ['Tả Phù', 'Thiên Lương'],
    doUuTien: 60,
    tomTat: `Quang Quý đi cùng Tả Phù, Hữu Bật và Thiên Lương cư Ngọ — đương
số **văn võ toàn tài**.

Thiên Lương cư Ngọ vốn là cách đẹp (Lương đắc địa). Thêm Tả Phù, Hữu Bật phò
trợ, lại thêm Quang Quý làm phúc tinh — đương số vừa giỏi học hành vừa giỏi
binh nghiệp.

Lưu ý: Thiên Lương ở chỗ khác (không phải Ngọ) cũng tốt, nhưng không đạt
mức "văn võ toàn tài" như tại Ngọ.`,
  },

  {
    id: 'quang-quy-thien-phuc-quyen-loc-lam-lon',
    title: 'Quang Quý + Thiên Phúc + Quyền Lộc - Làm lớn',
    sao: ['Ân Quang', 'Thiên Quý'],
    ketHop: ['Thiên Phúc', 'Hóa Quyền'],
    doUuTien: 55,
    tomTat: `Quang Quý gặp Thiên Phúc, Hóa Quyền và Hóa Lộc — đương số **làm lớn**.

Bộ sao hội tụ đủ bốn yếu tố: Quang Quý là phúc tinh quý nhân, Thiên Phúc là
phúc tinh kiêm quý tinh, Hóa Quyền cho quyền lực thực tế, **Hóa Lộc** cho
tài lộc thực tế — phúc, quý, quyền, lộc đầy đủ. Đường công danh tột đỉnh,
đương số có địa vị cao trong xã hội.`,
  },

  {
    id: 'quang-quy-hy-suu-mui-cong-thanh',
    title: 'Quang Quý + Hỷ tại Sửu/Mùi - Công thành danh toại',
    sao: ['Ân Quang', 'Thiên Quý'],
    chi: ['Sửu', 'Mùi'],
    ketHop: ['Thiên Hỷ'],
    doUuTien: 55,
    tomTat: `Quang Quý gặp Thiên Hỷ tại Sửu hoặc Mùi — đương số **công thành
danh toại**, được người giúp đỡ.

Quang Quý đắc cách Sửu, Mùi (đại khoa); Thiên Hỷ tại Tứ Mộ chủ hỷ sự, may
mắn. Đường công danh thuận lợi, niềm vui đi song hành với danh vọng.`,
  },

  {
    id: 'quang-quy-tu-sat-phuc-loc-kem',
    title: 'Quang Quý + Tứ Sát - Phúc lộc kém đi',
    sao: ['Ân Quang', 'Thiên Quý'],
    ketHop: ['Kình Dương'],
    doUuTien: 45,
    tomTat: `Khi Quang Quý gặp Tứ Sát (Kình Dương, Đà La, Hỏa Tinh, Linh Tinh)
thì phúc lộc kém đi.

Tứ Sát đông đảo cản trở phúc tinh; Quang Quý vẫn giải họa nhưng không phát
triển được tốt nhất, phúc khí bị triết giảm. Cuộc đời đương số vẫn an ổn
nhưng khó hiển đạt lớn.

Hóa giải: vị trí đắc cách của Quang Quý (Sửu, Mùi, Thìn, Tuất) phần nào bù
đắp cho thế bị Tứ Sát quấy phá.`,
  },

  {
    id: 'quang-quy-phu-tri-nhat-nguyet',
    title: 'Quang Quý phù trì Nhật Nguyệt',
    sao: ['Ân Quang', 'Thiên Quý'],
    ketHop: ['Thái Dương'],
    doUuTien: 50,
    tomTat: `Quang Quý phù trì Thái Dương, Thái Âm — bộ phù trợ rất hợp.

Văn Xương cùng Văn Khúc là bộ phù trì mạnh mẽ cho Nhật Nguyệt, song Quang
Quý cũng phù trì cho Nhật Nguyệt hợp hơn các sao khác. Khi Nhật Nguyệt sáng
hội Quang Quý, đương số tăng phúc khí, danh vọng vang xa — đặc biệt khi Nhật
Nguyệt đắc địa.`,
  },

  {
    id: 'quang-quy-vao-han',
    title: 'Quang Quý vào hạn',
    sao: ['Ân Quang', 'Thiên Quý'],
    doUuTien: 50,
    tomTat: `Quang Quý vào hạn giải rất lớn tai họa xảy ra; mưu cầu công danh
có lợi, đương số thi đỗ — nhất là tại Sửu, Mùi.

Câu phú lưu truyền:

> "Quý Ân Sửu Mùi hạn cầu
> Đường mây gặp bước cao sâu cửu trùng"

Trong hạn đại vận có Quang Quý quãng 50-60 tuổi, cuộc sống của đương số êm
đềm, may mắn, an nhàn; hướng tới bình yên, hướng thiện, tu tâm học đạo;
tránh xa cạnh tranh, không mưu cầu vật chất hay địa vị.

Ở mọi tuổi nói chung, hạn Quang Quý có những biểu hiện:

- Sự nghiệp: dễ gặp người nâng đỡ, được tin tưởng, được giao dự án quan trọng.
- Tài chính: có nguồn thu ngoài dự kiến (thưởng, hợp đồng lớn, đầu tư sinh
  lời).
- Học hành: gặp thầy giỏi, môi trường thuận, có cơ hội học bổng.
- Gia đạo: quan hệ hòa thuận, mở rộng giao thiệp tốt.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // ÂN QUANG TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'an-quang-tai-menh',
    title: 'Ân Quang tại Mệnh',
    sao: ['Ân Quang'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `Ân Quang thủ Mệnh là lá số của người "gặp hung hóa cát" — cuộc
sống đương số hiếm khi rơi vào bế tắc lâu dài.

Về tướng hình, đương số có gương mặt phúc hậu, sáng sủa, dễ tạo thiện cảm
ngay từ lần gặp đầu; dáng vẻ điềm đạm, cử chỉ từ tốn, chừng mực; dễ được
tin tưởng và kính trọng.

Về tính cách, đương số tâm hồn phúc thiện, ăn hiền ở lành, có thiện tâm,
nhân hậu, hay giúp người; thông minh, ôn hòa, vui vẻ, trọng ân nghĩa; đối
xử có tình nghĩa, có trước có sau, không lọc lừa bội phản; cư xử tình nghĩa
với bạn bè, hiếu đễ với cha mẹ, chung thủy với vợ chồng.

Khi cát tinh hội (Tả Phù, Hữu Bật, Thiên Quan, Thiên Phúc), Ân Quang hợp
thành "đoàn phúc tinh" — đương số được hậu thuẫn mạnh mẽ từ các mối quan hệ
bạn bè, xã hội.

Về phúc thọ, Ân Quang tại Mệnh giúp giảm nhẹ bệnh tật, vận xui; tuổi thọ
dài; khi gặp hoạn nạn dễ được trả ơn, có người cứu giúp; lâm bệnh thường
gặp bác sĩ giỏi, phương thuốc hợp nên nhanh hồi phục.

Cảnh báo: đương số cần học cách đặt ranh giới, giữ tỉnh táo — không bị lợi
dụng lòng tốt khi quá tin người hoặc ngại va chạm.

Dù đương số không làm lớn, vẫn thường được người ưa quý chuộng.`,
  },

  {
    id: 'an-quang-tai-phu-mau',
    title: 'Ân Quang tại Phụ Mẫu',
    sao: ['Ân Quang'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Ân Quang tại Phụ Mẫu cho gia đình yên ấm, cha mẹ hiền lương, phúc
đức — là chỗ dựa vững chắc về cả tinh thần lẫn vật chất.

Mối quan hệ giữa đương số và cha mẹ hài hòa, hiếm khi có mâu thuẫn lớn.
Đương số có thể có bố mẹ nuôi hoặc người đỡ đầu; đối xử tốt với cha mẹ và
được cha mẹ thương yêu.

Khi cung Phụ Mẫu gặp sao xấu, Ân Quang vẫn giúp giảm thiểu xung đột và giữ
gìn sự gắn kết trong gia đình.`,
  },

  {
    id: 'an-quang-tai-phuc-duc',
    title: 'Ân Quang tại Phúc Đức',
    sao: ['Ân Quang'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `Ân Quang tại Phúc Đức cho đương số được thần linh che chở, hưởng
nhiều phúc đức từ gia tiên.

Cuộc sống nhẹ gánh hơn người, tuổi thọ cao, tâm an mệnh vững. Dòng họ thịnh
vượng, nhiều người hiền lương, hướng thiện; có người làm các nghề y học như
thầy thuốc, giáo viên.

Về mặt tâm linh, đương số là người gìn giữ truyền thống, sống hiếu lễ với
gia tộc tổ tiên; mồ mả dòng họ được chăm lo chu toàn, trở thành điểm tựa
tâm linh bền vững. Khi đương số chết, lại được người hiến đất.

Phúc phần gia tiên tích nhờ tôn chỉ sống có đạo nghĩa suốt cuộc đời.`,
  },

  {
    id: 'an-quang-tai-dien-trach',
    title: 'Ân Quang tại Điền Trạch',
    sao: ['Ân Quang'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Ân Quang tại Điền Trạch cho đương số có lộc với nhà cửa, đất đai.

Đất đai thừa hưởng từ tổ tiên; trong quá trình sinh sống có người hiến đất,
giúp xây nhà; đương số hưởng thừa tự của người trong họ.

Khi cát tinh hội (sao tài lộc), khả năng kinh doanh, đầu tư bất động sản
thành công cao, thêm nguồn thu đáng kể.

Về tâm tính, đương số sẵn sàng quyên góp tài sản, đất đai để giúp đỡ cộng
đồng — phúc phần luôn dồi dào, hiếm khi rơi vào sa cơ thất thế.`,
  },

  {
    id: 'an-quang-tai-tat-ach',
    title: 'Ân Quang tại Tật Ách',
    sao: ['Ân Quang'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `Ân Quang tại Tật Ách như tấm lá chắn bảo vệ, giúp đương số giảm
bớt rủi ro về bệnh tật và tai ương.

Đương số ít bệnh tật, tai họa; đau ốm gặp thầy giỏi, thuốc hay.

Khi có sao xấu (Bệnh Phù, Địa Kiếp), Ân Quang giúp giảm mức độ nặng — đương
số gặp đúng thầy thuốc, phương pháp điều trị hiệu quả, nhờ đó vượt qua biến
cố.

Cuộc sống nhìn chung ít bị biến cố nghiêm trọng đeo bám; nếu có thì phần đa
gặp dữ hóa lành.`,
  },

  {
    id: 'an-quang-tai-no-boc',
    title: 'Ân Quang tại Nô Bộc',
    sao: ['Ân Quang'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Ân Quang tại Nô Bộc cho đương số có mối quan hệ xã hội thuận lợi.

Bạn bè, cộng sự giúp đỡ tận tình; đương số có cấp dưới trung thành, đối tác
lâu dài; đối xử có nghĩa với bạn bè, lấy chí thành mà đãi người; có tôi tớ
đắc lực.

Trong kinh doanh, đương số dễ xây dựng mạng lưới quan hệ vững mạnh, có
nhiều khách hàng tiềm năng.

Khi đi cùng **Thiên Quý** thành bộ Quang Quý, bạn bè và cộng sự không chỉ
giúp đỡ mà còn mở ra những cơ hội lớn trong sự nghiệp.`,
  },

  {
    id: 'an-quang-tai-thien-di',
    title: 'Ân Quang tại Thiên Di',
    sao: ['Ân Quang'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `Ân Quang tại Thiên Di cho đương số may mắn, thuận lợi khi đi xa,
đi công tác, mở rộng mối quan hệ xã hội.

Ra xã hội đương số hay gặp hên may, được người giúp đỡ; giải rất nhiều tai
họa; có bạn hữu tốt.

Trên đường công tác, du học hoặc lập nghiệp xa, đương số thường gặp quý
nhân, mở ra cơ hội ở môi trường mới.

Khi đi cùng **Thiên Quý** thành bộ Quang Quý, cơ hội từ bên ngoài càng lớn
— có thể mở ra bước ngoặt lớn trong sự nghiệp hoặc cuộc sống.`,
  },

  {
    id: 'an-quang-tai-quan-loc',
    title: 'Ân Quang tại Quan Lộc - HỢP CÁCH',
    sao: ['Ân Quang'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `Ân Quang tại Quan Lộc là một trong những vị trí **hợp cách** nhất
cho sự nghiệp.

Đương số dễ được lãnh đạo tín nhiệm, có cơ hội phát triển lớn, được người
trên giúp đỡ che chở; bản thân đương số cũng hay giúp đỡ đồng nghiệp, lấy
chí thành mà đãi người.

Trong công việc, đương số không ưa cạnh tranh, kèn cựa; không bao giờ làm
điều ác hay bất nhân để đạt mục đích — luôn được mọi người tin tưởng,
ngưỡng mộ.

Hợp với các nghề: thầy thuốc, bác sĩ, thầy giáo, công tác xã hội, từ thiện
— đương số dễ đạt thành công bền vững, được người đời kính trọng.`,
  },

  {
    id: 'an-quang-tai-tai-bach',
    title: 'Ân Quang tại Tài Bạch',
    sao: ['Ân Quang'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `Ân Quang tại Tài Bạch cho đương số gặp nhiều vận may về tiền bạc,
tài chính.

Đương số có khả năng cân đối thu chi ổn định, hiếm khi rơi vào cảnh thiếu
thốn kéo dài; lúc nghèo túng có người giúp đỡ; có thể được hưởng di sản;
hay giúp đỡ người nghèo.

Khi cát tinh hội (Hóa Lộc, Lộc Tồn), vận may càng thịnh vượng — dễ thăng
tiến, đầu tư thành công, được người quen giới thiệu cơ hội tốt.

Khi sát tinh hội (**Hóa Kỵ**, Kình Dương), may mắn bị cản trở; Ân Quang giảm
thiểu thiệt hại nhưng không loại bỏ rủi ro hoàn toàn — đương số cần thận
trọng với dự án tài chính mạo hiểm.`,
  },

  {
    id: 'an-quang-tai-tu-tuc',
    title: 'Ân Quang tại Tử Tức',
    sao: ['Ân Quang'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Ân Quang tại Tử Tức cho con cái của đương số hiếu thảo, dễ nuôi
dạy.

Đương số thương con, có con sang quý; con cái hiếu đễ với cha mẹ và được cha
mẹ thương yêu; có thể lập con nuôi để làm phúc; ít khi gặp xung đột lớn hay
mâu thuẫn nghiêm trọng giữa các thế hệ.

Khi đi cùng **Thiên Quý** và sao phúc tinh, con cái không chỉ hiếu thuận mà
còn mang lại vận may cho cha mẹ, có thể thành đạt và hỗ trợ gia đình.`,
  },

  {
    id: 'an-quang-tai-phu-the',
    title: 'Ân Quang tại Phu Thê - Hóa giải nghiệp vợ chồng',
    sao: ['Ân Quang'],
    cung: ['Phu Thê'],
    doUuTien: 76,
    tomTat: `Ân Quang tại Phu Thê cho hôn nhân hòa thuận, hạnh phúc.

Đương số lấy được vợ hoặc chồng quý; vợ chồng ân ái hòa thuận, xứng lứa vừa
đôi; dù trải qua sóng gió vẫn một lòng sắt son.

Đây là bộ sao hóa giải nghiệp vợ chồng: dù có xung khắc thế nào, cuối cùng
cả hai vẫn ở cạnh nhau đến già.

Khi cát tinh hội (sao tài lộc, quyền quý), hôn nhân mang lại lợi ích kinh
tế, tạo điều kiện tốt cho công việc, địa vị của đôi bên. Khi sát tinh hội,
Ân Quang giúp giảm nhẹ xung đột.

Lưu ý đặc biệt: Quang Quý không giải được cách hai đời chồng/vợ do Tả Phù,
Hữu Bật tại Phu Thê gây ra (vì không phải hung tinh tác họa).`,
  },

  {
    id: 'an-quang-tai-huynh-de',
    title: 'Ân Quang tại Huynh Đệ',
    sao: ['Ân Quang'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Ân Quang tại Huynh Đệ cho sự gắn kết, yêu thương giữa anh chị em.

Đương số đối xử với anh chị em có tình nghĩa; anh chị em hòa thuận, giúp đỡ
lẫn nhau (đặc biệt khi đồng cung và không gặp hung tinh hoặc Thái Tuế, Đà
La, **Hóa Kỵ**); có khả năng có anh chị em kết nghĩa, chị em nuôi; hỗ trợ
nhau về tinh thần và tài chính khi cần thiết.

Trường hợp anh chị em thành đạt, họ chính là quý nhân quan trọng của đương
số, mở ra cơ hội lớn.`,
  },
];
