import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THIÊN HÌNH - Dương Hỏa, sao SINH SÁT.
 *
 * An theo THÁNG SINH (engine: khởi từ Dậu thuận theo tháng sinh).
 *
 * Đặc trưng:
 * - Chủ quản SINH SÁT, lưỡng thiện lưỡng họa
 * - LUÔN trong TAM HỢP với Thiên Riêu (cùng Tứ Mộ, cách 4 cung)
 * - Ý tượng: SẤM SÉT, SÁT PHẠT, TÙ NGỤC, cai quản nạn ách con người
 * - ĐẮC ĐỊA tại Dần / Thân / Mão / Dậu — phúc thọ song toàn
 * - HÃM ĐỊA tại các cung còn lại
 *
 * Bộ kết hợp đặc biệt:
 * - BINH HÌNH TƯỚNG ẤN (Phục Binh + Thiên Hình + Tướng Quân + Quốc Ấn)
 * = uy nghi lẫm liệt cầm quân
 * - HÌNH RIÊU (Thiên Hình + Thiên Riêu) = dao kéo + đào hoa
 */
export const luanGiai_ThienHinh: DoanLuanGiai[] = [
  {
    id: 'thien-hinh-tinh-chat-chung',
    title: 'Thiên Hình - Đặc tính chung',
    sao: ['Thiên Hình'],
    doUuTien: 32,
    tomTat: `**Thiên Hình** là phụ tinh sinh sát, an theo tháng sinh, ngũ hành
Dương Hỏa.

Sao này chủ quản sinh sát theo lẽ "lưỡng thiện lưỡng họa", cai quản nạn ách
của con người. Ý tượng gắn với sấm sét, sát phạt, tù ngục, bính quyền vạn lý
— như con dao hai lưỡi: vừa mang ý chí kiên cường, sự quyết đoán và lòng dám
đương đầu khó khăn, vừa ẩn chứa thương tật, kiện cáo, thị phi.

Quy luật quan trọng cần nhớ:

- Thiên Hình luôn nằm trong tam hợp với Thiên Riêu — tạo bộ Hình Riêu (dao
  kéo cộng đào hoa).
- Đắc địa tại Dần, Thân, Mão, Dậu: tiếng tăm lừng lẫy, phúc thọ song toàn,
  cẩn trọng, nghiêm nghị, công tâm, công danh bền vững.
- Hãm địa các cung còn lại: tai họa nặng nề.

Trong bộ Binh Hình Tướng Ấn, Thiên Hình cùng Phục Binh, Tướng Quân và Quốc
Ấn tạo cách uy nghi lẫm liệt cầm quân (đã nhắc tại tuong-quan.ts).`,
  },

  {
    id: 'thien-hinh-dac-dia-dan-than-mao-dau',
    title: 'Thiên Hình đắc địa Dần Thân Mão Dậu',
    sao: ['Thiên Hình'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    doUuTien: 80,
    tomTat: `Thiên Hình **Đắc địa** tại Dần, Thân, Mão, Dậu là vị trí đẹp
nhất của sao này.

Đương số khi đó tiếng tăm lừng lẫy, phúc thọ song toàn, cẩn trọng, nghiêm
nghị, công tâm, làm việc rõ ràng và công danh bền vững. Sao hợp với những
nghề mang tính kỷ luật cao: quân đội, an ninh, quốc phòng, công an, pháp
luật, thanh tra, giám sát, võ nghiệp — đặc biệt khi đi cùng bộ Binh Hình
Tướng Ấn.

Khi có cát tinh hội tụ, đương số có tài thao lược, nhạy bén, khát khao
chứng tỏ bản thân và có thể trở thành tướng lĩnh hoặc lãnh đạo quân sự.`,
  },

  {
    id: 'thien-hinh-rieu-bo-doi-tam-hop',
    title: 'Bộ Hình Riêu - Tam hợp dao kéo + đào hoa',
    sao: ['Thiên Hình'],
    ketHop: ['Thiên Riêu'],
    doUuTien: 55,
    tomTat: `Bộ Hình Riêu (Thiên Hình cộng Thiên Riêu) luôn nằm trong tam hợp
do quy luật an sao.

Tính chất kép của bộ này thể hiện rõ: Thiên Hình mang Dương Hỏa, sát phạt,
dao kéo, sấm sét; Thiên Riêu thuộc đào hoa, dâm tinh. Hợp lại thành bộ dao
kéo cộng đào hoa.

Đương số có bộ này hợp các nghề bác sỹ, y sỹ — tay nghề mổ xẻ tinh tế. Khi
có thêm Tướng, Y, Quang, Quý, Bác Sỹ, Hình Riêu, đương số trở thành bác sỹ
giải phẫu giỏi. Phẫu thuật thẩm mỹ cũng là hướng đi phù hợp.

Mặt tối của bộ này: dễ bị sẹo mặt, sẹo tay chân do đặc tính của Hình; đào
hoa Riêu kết hợp Hình còn dễ kéo theo bệnh hoa liễu, vạ tình.`,
  },

  {
    id: 'thien-hinh-rieu-bo-doi-nu-menh',
    title: 'Bộ Hình Riêu - Nữ mệnh',
    sao: ['Thiên Hình'],
    gioiTinh: 'Nữ',
    ketHop: ['Thiên Riêu'],
    doUuTien: 50,
    tomTat: `Nữ mệnh có bộ Hình Riêu thường tính nóng nảy, dễ chọn phẫu
thuật thẩm mỹ — đặc biệt khi có thêm Đào Hoa hoặc Hồng Loan đi kèm.`,
  },

  {
    id: 'thien-hinh-nu-menh-che-dao-hong',
    title: 'Thiên Hình Mệnh nữ - Chế Đào Hồng đào hoa',
    sao: ['Thiên Hình'],
    cung: ['Mệnh'],
    gioiTinh: 'Nữ',
    doUuTien: 60,
    tomTat: `**Thiên Hình** thủ Mệnh nữ mang đặc trưng quý: chế đào hoa.

Tác dụng đặc biệt với phụ nữ là triết giảm tính chất đa tình, đào hoa.
Đương số trở thành người ngay thẳng, không lẳng lơ, ngay cả khi mệnh có
nhiều bộ sao đa tình như Đào Hoa, Hồng Loan, Thiên Riêu.

Cơ chế này tương tự Vũ Khúc đối với Đào Hoa: Vũ Khúc cộng Đào chuyển tính
dâm thành quý, Thiên Hình cộng Đào Hồng chuyển tính dâm thành ngay thẳng
đoan chính. Đặc tính này đặc biệt hữu ích trong xã hội xưa với nữ mệnh.`,
  },

  {
    id: 'thien-hinh-binh-tuong-an-uy-nghi',
    title: 'Thiên Hình + Binh + Tướng + Ấn - Uy nghi lẫm liệt',
    sao: ['Thiên Hình'],
    ketHop: ['Phục Binh', 'Tướng Quân', 'Quốc Ấn'],
    doUuTien: 60,
    tomTat: `Bộ **Binh Hình Tướng Ấn** (Phục Binh cộng Thiên Hình cộng Tướng
Quân cộng Quốc Ấn) là cách uy nghi lẫm liệt, phúc thọ song toàn.

Đương số có bộ này thường mang công danh lớn, cầm quân tác chiến, thành
công trong quân sự, an ninh, quốc phòng, có thể trở thành tướng lĩnh hoặc
lãnh đạo quân sự.

Phân tích bộ sao:

- Phục Binh: lực lượng dưới quyền.
- Thiên Hình: quyền sát phạt.
- Tướng Quân: vị trí thống soái.
- Quốc Ấn: ấn tín quyền lực.

Đây là cách cục cao cấp nhất của võ tướng.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // THIÊN HÌNH TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-hinh-tai-menh',
    title: 'Thiên Hình tại Mệnh',
    sao: ['Thiên Hình'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `**Thiên Hình** thủ Mệnh khiến đương số có vẻ ngoài lạnh lùng,
uy nghiêm.

Về tướng mạo, đương số hay cau mày, quắc mắt, nét mặt thiếu sự tươi tỉnh và
hay lo âu. Lông mày dựng, trán sạm đen, răng xấu; mặt, trán, đầu thường có
sẹo, trên người dễ có vết mổ to, tay chân thường dính thương tật. Khi nói
khó hé răng, thể hiện sự khó tính ngay từ cái nhìn đầu, chụp ảnh thường xấu
và không ăn ảnh.

Về tính cách, đương số nóng nảy, bất nhẫn, trực tính, hung bạo, cầu kỳ (do
Hỏa), khắt khe và yêu cầu cao về sự hoàn hảo. Hay để ý tiểu tiết, suy xét
cẩn trọng thái quá nhưng phán xét tinh vi, tỉ mỉ, công minh. Đương số hà
khắc với chính bản thân — vừa mang tính sát của Không Kiếp, vừa mang nét cô
độc của Cô Quả, ít gần gũi người khác kể cả thân nhân.

Về tâm tưởng, từ bé đương số thường bị cha mẹ giáo dục hà khắc nên mang tâm
tưởng đơn độc, cáu gắt; hành động theo cảm tính, không lường hậu họa.

Cảnh báo cần lưu ý: Thiên Hình tại Mệnh khi không có sao hóa giải dễ dẫn
đến tù ngục, đại phẫu, đại nạn đau đớn — nguy hiểm luôn cận kề.

Một mặt tích cực ít người để ý: Hình cũng chủ về đam mê cháy bỏng, cái tôi
lớn, nhạy bén với môi trường khác lạ — tại Mệnh là cách hay khi đương số dễ
hòa đồng được.`,
  },

  {
    id: 'thien-hinh-tai-phu-mau',
    title: 'Thiên Hình tại Phụ Mẫu',
    sao: ['Thiên Hình'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Thiên Hình** tại Phụ Mẫu là sao Hung làm giảm thọ cha mẹ.

Cha mẹ của đương số thường nóng nảy, khắt khe, dễ bạo hành và gây áp lực
lên con cái.`,
  },

  {
    id: 'thien-hinh-tai-phu-mau-dac-dia',
    title: 'Thiên Hình tại Phụ Mẫu - Đắc địa',
    sao: ['Thiên Hình'],
    cung: ['Phụ Mẫu'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    doUuTien: 78,
    tomTat: `Thiên Hình **Đắc địa** tại Phụ Mẫu (Dần, Thân, Mão, Dậu): cha mẹ
đương số là người nghiêm khắc, kỷ luật cao, thường làm trong các ngành quân
sự, pháp luật, giám sát hoặc y học dao kéo.`,
  },

  {
    id: 'thien-hinh-tai-phu-mau-cat-tinh',
    title: 'Thiên Hình tại Phụ Mẫu + cát tinh - cha mẹ uy tín',
    sao: ['Thiên Hình'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Ân Quang', 'Thiên Quý', 'Tả Phù', 'Hữu Bật', 'Hóa Khoa', 'Hóa Quyền', 'Hóa Lộc'],
    doUuTien: 70,
    tomTat: `Khi Thiên Hình tại Phụ Mẫu gặp Ân Quang, Thiên Quý, Tả Phù, Hữu
Bật cùng Hóa Khoa, Hóa Quyền hoặc Hóa Lộc, cha mẹ đương số có uy tín và
chức vụ cao.`,
  },

  {
    id: 'thien-hinh-tai-phu-mau-ham-sat',
    title: 'Thiên Hình tại Phụ Mẫu - Hãm + sát tinh',
    sao: ['Thiên Hình'],
    cung: ['Phụ Mẫu'],
    trangThai: ['Hãm'],
    ketHop: ['Kình Dương', 'Đà La', 'Hóa Kỵ', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 75,
    tomTat: `Thiên Hình **Hãm** tại Phụ Mẫu kèm sát tinh (Kình Dương, Đà La,
Hóa Kỵ, Địa Không, Địa Kiếp): cha mẹ đương số nóng nảy quá mức, hay áp đặt,
dễ yểu mệnh; gia đạo nhiều sóng gió, con cái khó nương nhờ.`,
  },

  {
    id: 'thien-hinh-tai-phuc-duc',
    title: 'Thiên Hình tại Phúc Đức',
    sao: ['Thiên Hình'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `**Thiên Hình** tại Phúc Đức làm giảm thọ, giảm phước, tăng họa.

Đương số có cảnh sát phạt, đấu đá trong họ hàng, thất thoát mồ mả. Trong họ
có người cứng rắn, thẳng thắn, uy nghiêm; nhưng vì tính khắt khe nên họ
hàng dễ xa cách và ít hòa thuận với nhau.`,
  },

  {
    id: 'thien-hinh-tai-phuc-duc-dac-dia-cat-tinh',
    title: 'Thiên Hình Phúc Đức - Đắc + cát tinh',
    sao: ['Thiên Hình'],
    cung: ['Phúc Đức'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    ketHop: ['Ân Quang', 'Thiên Quý', 'Tả Phù', 'Hữu Bật', 'Hóa Khoa', 'Hóa Quyền', 'Hóa Lộc'],
    doUuTien: 70,
    tomTat: `Thiên Hình **Đắc địa** tại Phúc Đức cùng Ân Quang, Thiên Quý, Tả
Phù, Hữu Bật và Hóa Khoa, Hóa Quyền, Hóa Lộc: phúc khí có giảm nhưng vẫn
còn người trong họ gây dựng được danh dự, đương số có chỗ dựa tinh thần và
hậu vận hưởng được tính cách mạnh mẽ, ý chí kiên cường truyền lại từ tổ
tiên.`,
  },

  {
    id: 'thien-hinh-tai-phuc-duc-ham',
    title: 'Thiên Hình tại Phúc Đức - Hãm',
    sao: ['Thiên Hình'],
    cung: ['Phúc Đức'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Thiên Hình **Hãm** tại Phúc Đức: họ hàng đương số ít người sống
thọ, hay tranh chấp đất cát, mồ mả thất tán, dòng tộc bất hòa.`,
  },

  {
    id: 'thien-hinh-tai-dien-trach',
    title: 'Thiên Hình tại Điền Trạch',
    sao: ['Thiên Hình'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Thiên Hình** tại Điền Trạch khiến đương số chậm tích lũy điền
sản.

Đương số ít giao tiếp với hàng xóm, dễ dính kiện tụng, tranh chấp đất đai
và sinh tâm lý chán ở nhà, chán việc nhà. Địa thổ gây ốm đau nhiều, cháy
nổ tai ương cũng dễ sinh ra từ đó.`,
  },

  {
    id: 'thien-hinh-tai-dien-trach-dac-dia',
    title: 'Thiên Hình Điền Trạch - Đắc địa',
    sao: ['Thiên Hình'],
    cung: ['Điền Trạch'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    doUuTien: 78,
    tomTat: `Thiên Hình **Đắc địa** tại Điền Trạch (Dần, Thân, Mão, Dậu): nhà
cửa của đương số thường ở gần các nơi công quyền như trụ sở công an, tòa
án, đơn vị quân đội. Đương số có ý thức kỷ luật cao trong quản lý nhà cửa,
sống ngăn nắp.`,
  },

  {
    id: 'thien-hinh-tai-dien-trach-cat-tinh',
    title: 'Thiên Hình Điền Trạch + Tả Hữu Khoa Quyền Lộc',
    sao: ['Thiên Hình'],
    cung: ['Điền Trạch'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Hóa Khoa', 'Hóa Quyền', 'Hóa Lộc'],
    doUuTien: 70,
    tomTat: `Thiên Hình tại Điền Trạch khi gặp Tả Phù, Hữu Bật cùng Hóa
Khoa, Hóa Quyền, Hóa Lộc: nhà cửa của đương số khang trang, kiên cố.`,
  },

  {
    id: 'thien-hinh-tai-dien-trach-ham',
    title: 'Thiên Hình tại Điền Trạch - Hãm địa',
    sao: ['Thiên Hình'],
    cung: ['Điền Trạch'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Thiên Hình **Hãm** tại Điền Trạch: đương số khó tích lũy điền
sản, hay tranh chấp kiện tụng đất đai. Gia đình thiếu hòa khí, xung đột,
có thể mất đất, bán nhà.`,
  },

  {
    id: 'thien-hinh-tai-quan-loc',
    title: 'Thiên Hình tại Quan Lộc',
    sao: ['Thiên Hình'],
    cung: ['Quan Lộc'],
    doUuTien: 76,
    tomTat: `**Thiên Hình** tại Quan Lộc cho đương số giỏi chuyên môn, kỹ
thuật, kẻ vẽ, in ấn, mổ xẻ; tư duy độc lập và phán đoán nhanh.

Tuy vậy, đương số chậm phát triển, bị hãm đường công danh; tai nạn nghề
nghiệp khó tránh. Hình mang biểu tượng của chậm trễ dụng tài, đương số luôn
phải chịu áp lực và đấu đá từ người khác.`,
  },

  {
    id: 'thien-hinh-tai-quan-loc-dac-dia',
    title: 'Thiên Hình Quan Lộc - Đắc địa',
    sao: ['Thiên Hình'],
    cung: ['Quan Lộc'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    doUuTien: 78,
    tomTat: `Thiên Hình **Đắc địa** tại Quan Lộc (Dần, Thân, Mão, Dậu): hợp
quân sự, y khoa, thanh tra, giám sát. Tuy chậm tiến nhưng đương số có thành
tựu; khi gặp vận tốt sẽ được dụng tài, nổi bật trong lĩnh vực mình theo
đuổi.`,
  },

  {
    id: 'thien-hinh-tai-quan-loc-ham',
    title: 'Thiên Hình tại Quan Lộc - Hãm địa',
    sao: ['Thiên Hình'],
    cung: ['Quan Lộc'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Thiên Hình **Hãm** tại Quan Lộc: đường công danh đương số trắc
trở, hay vướng thị phi nơi làm việc, dễ bị cách chức, kỷ luật, thậm chí
vướng vòng lao lý.`,
  },

  {
    id: 'thien-hinh-tai-no-boc',
    title: 'Thiên Hình tại Nô Bộc',
    sao: ['Thiên Hình'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Thiên Hình** tại Nô Bộc khiến đương số ít bạn, không có bạn
chung thành, khó kiếm tri kỷ.

Đương số luôn vì bạn bè mà rước họa vào thân: thuở bé bị bạn bắt nạt, lớn
lên bị người đời lánh xa. Trong lòng ẩn tàng căm hận kéo dài, tìm cách trả
ân báo oán.`,
  },

  {
    id: 'thien-hinh-tai-no-boc-dac-dia',
    title: 'Thiên Hình Nô Bộc - Đắc địa',
    sao: ['Thiên Hình'],
    cung: ['Nô Bộc'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    doUuTien: 78,
    tomTat: `Thiên Hình **Đắc địa** tại Nô Bộc (Dần, Thân, Mão, Dậu): đương
số ít bạn bè nhưng các mối quan hệ rõ ràng, rạch ròi, hợp với người trong
môi trường quân đội, pháp luật, y tế. Bạn bè có khả năng giúp đỡ trong công
việc, tuy vậy vẫn khó tìm được tri kỷ thật sự.`,
  },

  {
    id: 'thien-hinh-tai-no-boc-ham-sat',
    title: 'Thiên Hình Nô Bộc - Hãm + Kình Đà Kỵ Riêu Đào Hồng',
    sao: ['Thiên Hình'],
    cung: ['Nô Bộc'],
    trangThai: ['Hãm'],
    ketHop: ['Kình Dương', 'Đà La', 'Hóa Kỵ', 'Thiên Riêu', 'Đào Hoa', 'Hồng Loan'],
    doUuTien: 75,
    tomTat: `Thiên Hình **Hãm** tại Nô Bộc kèm Kình Dương, Đà La, Hóa Kỵ,
Thiên Riêu, Đào Hoa hoặc Hồng Loan: số lượng bạn bè càng ít, dễ phản bội và
gây thị phi cho đương số. Thuở nhỏ đương số bị bạn bắt nạt, lớn lên bị
người đời xa lánh.`,
  },

  {
    id: 'thien-hinh-tai-thien-di',
    title: 'Thiên Hình tại Thiên Di',
    sao: ['Thiên Hình'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Thiên Hình** tại Thiên Di khiến đương số ra ngoài ngại giao
tiếp, luôn gặp nghịch cảnh trớ trêu, thích dùng vũ lực để giải quyết tranh
chấp.

Đương số không ưa đi xa, không thích xuất ngoại; hay gặp chuyện xui xẻo,
thiếu may mắn; kỹ năng mềm trong giao tiếp và xử lý tình huống đều kém. Sao
này còn báo hiệu tình trạng chậm muộn kết hôn — đi xa làm điều phải quấy ắt
dính tù tội.`,
  },

  {
    id: 'thien-hinh-tai-thien-di-dac-dia',
    title: 'Thiên Hình Thiên Di - Đắc địa',
    sao: ['Thiên Hình'],
    cung: ['Thiên Di'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    doUuTien: 78,
    tomTat: `Thiên Hình **Đắc địa** tại Thiên Di (Dần, Thân, Mão, Dậu): đương
số đi ra ngoài mang dáng vẻ nghiêm nghị, ít nói, khó gần nhưng làm được
việc, có uy quyền khiến người khác nể sợ.`,
  },

  {
    id: 'thien-hinh-tai-thien-di-cat-tinh',
    title: 'Thiên Hình Thiên Di + Tả Hữu Khoa Quyền Lộc',
    sao: ['Thiên Hình'],
    cung: ['Thiên Di'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Hóa Khoa', 'Hóa Quyền', 'Hóa Lộc'],
    doUuTien: 70,
    tomTat: `Thiên Hình tại Thiên Di gặp Tả Phù, Hữu Bật cùng Hóa Khoa, Hóa
Quyền, Hóa Lộc: đương số dễ được trọng dụng, có chỗ dựa, lập được công
danh.`,
  },

  {
    id: 'thien-hinh-tai-thien-di-ham',
    title: 'Thiên Hình tại Thiên Di - Hãm địa',
    sao: ['Thiên Hình'],
    cung: ['Thiên Di'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Thiên Hình **Hãm** tại Thiên Di: đương số vướng kiện tụng, va
chạm; hay dùng đến bạo lực để giải quyết mâu thuẫn; không hợp xuất ngoại.`,
  },

  {
    id: 'thien-hinh-tai-tat-ach',
    title: 'Thiên Hình tại Tật Ách',
    sao: ['Thiên Hình'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `**Thiên Hình** tại Tật Ách khiến đương số dễ dính hình thương:
chân tay lắm sẹo, hay bị điện giật, bỏng nước, bỏng dầu, cháy nổ, và thường
dính nhiều đến pháp luật.`,
  },

  {
    id: 'thien-hinh-tai-tat-ach-dac-dia',
    title: 'Thiên Hình Tật Ách - Đắc địa',
    sao: ['Thiên Hình'],
    cung: ['Tật Ách'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    doUuTien: 78,
    tomTat: `Thiên Hình **Đắc địa** tại Tật Ách (Dần, Thân, Mão, Dậu): đương
số có sức chịu đựng tốt, vượt qua nghịch cảnh bằng ý chí kiên cường. Tuy
hay gặp va chạm nhưng chỉ để lại dấu vết bên ngoài.`,
  },

  {
    id: 'thien-hinh-tai-tat-ach-cat-tinh',
    title: 'Thiên Hình Tật Ách + Thiên Phủ Tả Hữu Khoa Quyền Lộc',
    sao: ['Thiên Hình'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Phủ', 'Tả Phù', 'Hữu Bật', 'Hóa Khoa', 'Hóa Quyền', 'Hóa Lộc'],
    doUuTien: 70,
    tomTat: `Thiên Hình tại Tật Ách gặp Thiên Phủ, Tả Phù, Hữu Bật cùng Hóa
Khoa, Hóa Quyền, Hóa Lộc: ứng nghiệm tốt, sức chịu đựng của đương số được
tăng cường.`,
  },

  {
    id: 'thien-hinh-tai-tat-ach-ham',
    title: 'Thiên Hình tại Tật Ách - Hãm địa',
    sao: ['Thiên Hình'],
    cung: ['Tật Ách'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Thiên Hình **Hãm** tại Tật Ách: họa hình thương nặng, dễ gặp tai
nạn nghề nghiệp, bỏng lửa, điện giật, cháy nổ. Trên người đương số nhiều
sẹo, vết mổ hoặc bệnh nan giải.`,
  },

  {
    id: 'thien-hinh-tai-tat-ach-khong-kiep-kinh-da',
    title: 'Thiên Hình Tật Ách + Không Kiếp Kình Đà',
    sao: ['Thiên Hình'],
    cung: ['Tật Ách'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Kình Dương', 'Đà La'],
    doUuTien: 70,
    tomTat: `Thiên Hình tại Tật Ách gặp Địa Không, Địa Kiếp cùng Kình Dương,
Đà La: đương số dễ nghiện ngập, tù tội, kiện tụng.`,
  },

  {
    id: 'thien-hinh-tai-tat-ach-dong-ky',
    title: 'Thiên Hình Tật Ách + Thiên Đồng + Hóa Kỵ',
    sao: ['Thiên Hình'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Đồng', 'Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `Thiên Hình tại Tật Ách cùng Thiên Đồng và Hóa Kỵ: đương số dễ ăn
chơi, sa vào tửu sắc.`,
  },

  {
    id: 'thien-hinh-tai-tat-ach-nu-menh',
    title: 'Thiên Hình tại Tật Ách - Nữ mệnh',
    sao: ['Thiên Hình'],
    cung: ['Tật Ách'],
    gioiTinh: 'Nữ',
    doUuTien: 75,
    tomTat: `Nữ mệnh có Thiên Hình tại Tật Ách: đương số khó sinh nở, dễ sảy
thai. Tính nóng, liều lĩnh, hành động bốc đồng dễ kéo theo họa thân.`,
  },

  {
    id: 'thien-hinh-tai-tai-bach',
    title: 'Thiên Hình tại Tài Bạch',
    sao: ['Thiên Hình'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Thiên Hình** tại Tài Bạch khiến đương số khó tích trữ tiền
của.

Làm ăn của đương số thường thất thoát không kiểm soát, giảm sự giàu có,
thịnh vượng. Đương số ham của tiền nhưng lười tích lũy và sợ kinh doanh, sợ
thất bại; luôn tìm cách tiêu trước khi nghĩ cách kiếm. Vào vận xấu ắt phải
bán nhà cửa tư gia để trả nợ.`,
  },

  {
    id: 'thien-hinh-tai-tai-bach-dac-dia',
    title: 'Thiên Hình Tài Bạch - Đắc địa',
    sao: ['Thiên Hình'],
    cung: ['Tài Bạch'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    doUuTien: 78,
    tomTat: `Thiên Hình **Đắc địa** tại Tài Bạch (Dần, Thân, Mão, Dậu): đương
số kiếm tiền từ ngành nghề đặc thù đòi hỏi sắc bén, can đảm. Tiền đến từ
công việc gắn với tính sát phạt, mổ xẻ; tuy vất vả nhưng tạo được chỗ đứng
nhờ chuyên môn. Đương số tiêu xài mạnh tay nhưng vẫn cân đối được tài
chính.`,
  },

  {
    id: 'thien-hinh-tai-tai-bach-ham-sat',
    title: 'Thiên Hình Tài Bạch - Hãm + Kình Đà Kỵ Không Kiếp',
    sao: ['Thiên Hình'],
    cung: ['Tài Bạch'],
    trangThai: ['Hãm'],
    ketHop: ['Kình Dương', 'Đà La', 'Hóa Kỵ', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 78,
    tomTat: `Thiên Hình **Hãm** tại Tài Bạch kèm Kình Dương, Đà La, Hóa Kỵ,
Địa Không, Địa Kiếp: đương số vì tiền mà mang họa, sa vào nợ nần, kiện
tụng, tranh chấp tài sản, phải bán nhà để trả nợ.`,
  },

  {
    id: 'thien-hinh-tai-tu-tuc',
    title: 'Thiên Hình tại Tử Tức',
    sao: ['Thiên Hình'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Thiên Hình** tại Tử Tức khiến đương số hiếm con, ít con, muộn
con, hoặc con khó nuôi.

Cha mẹ nghiêm khắc với con cái; con lớn ắt chống đối, ngang ngược. Con cái
đương số thiếu hòa thuận, hay tranh giành của cải; sinh con dễ phải mổ; con
hay ốm đau vận nạn.`,
  },

  {
    id: 'thien-hinh-tai-tu-tuc-dac-dia',
    title: 'Thiên Hình Tử Tức - Đắc địa',
    sao: ['Thiên Hình'],
    cung: ['Tử Tức'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    doUuTien: 78,
    tomTat: `Thiên Hình **Đắc địa** tại Tử Tức (Dần, Thân, Mão, Dậu): con cái
đương số hiển đạt công danh, bính quyền vạn lý, trấn ải biên cương — hợp
binh nghiệp, quân đội, công an.`,
  },

  {
    id: 'thien-hinh-tai-tu-tuc-cat-tinh',
    title: 'Thiên Hình Tử Tức + Tả Hữu Khoa Quyền Lộc',
    sao: ['Thiên Hình'],
    cung: ['Tử Tức'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Hóa Khoa', 'Hóa Quyền', 'Hóa Lộc'],
    doUuTien: 70,
    tomTat: `Thiên Hình tại Tử Tức gặp Tả Phù, Hữu Bật cùng Hóa Khoa, Hóa
Quyền, Hóa Lộc: con cái được trọng dụng, hiển hách.`,
  },

  {
    id: 'thien-hinh-tai-tu-tuc-ham-sat',
    title: 'Thiên Hình Tử Tức - Hãm + Kình Đà Riêu',
    sao: ['Thiên Hình'],
    cung: ['Tử Tức'],
    trangThai: ['Hãm'],
    ketHop: ['Kình Dương', 'Đà La', 'Thiên Riêu'],
    doUuTien: 75,
    tomTat: `Thiên Hình **Hãm** tại Tử Tức kèm Kình Dương, Đà La, Thiên Riêu:
con cái gây họa, dính vòng lao lý, làm cha mẹ phiền muộn.`,
  },

  {
    id: 'thien-hinh-tai-phu-the',
    title: 'Thiên Hình tại Phu Thê - Tam Hình Khắc',
    sao: ['Thiên Hình'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `**Thiên Hình** tại Phu Thê khiến vợ chồng đương số ngược tính —
khó cưng, khó chiều.

Cảnh báo quan trọng nhất là Tam Hình Khắc:

- Khắc thân: không ưa ngủ cùng.
- Khắc ý: không tâm đầu ý hợp, không bàn bạc, không đồng thuận.
- Khắc khẩu: xung đột, cãi nhau.

Ngoài Tam Hình Khắc, vợ chồng còn có cá tính mạnh, khó chiều, khắt khe
trong cư xử nên đời sống thiếu lãng mạn. Hôn nhân khắc khẩu nhưng vẫn giữ
được ràng buộc trách nhiệm. Người hôn phối của đương số thường cẩn trọng,
giỏi chuyên môn, thành đạt và có uy quyền.`,
  },

  {
    id: 'thien-hinh-tai-phu-the-ham-sat',
    title: 'Thiên Hình Phu Thê - Hãm + Kình Đà Kỵ Riêu Đào Hồng',
    sao: ['Thiên Hình'],
    cung: ['Phu Thê'],
    trangThai: ['Hãm'],
    ketHop: ['Kình Dương', 'Đà La', 'Hóa Kỵ', 'Thiên Riêu', 'Đào Hoa', 'Hồng Loan'],
    doUuTien: 78,
    tomTat: `Thiên Hình **Hãm** tại Phu Thê kèm Kình Dương, Đà La, Hóa Kỵ,
Thiên Riêu, Đào Hoa, Hồng Loan: bạo lực, nợ nần, nghiện ngập trong gia
đình; một người làm một người phá; kẻ yểu người thọ. Hôn nhân của đương số
dang dở, chia ly hoặc phải tái hôn.`,
  },

  {
    id: 'thien-hinh-tai-huynh-de',
    title: 'Thiên Hình tại Huynh Đệ',
    sao: ['Thiên Hình'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Thiên Hình** tại Huynh Đệ khiến đương số ít anh em, anh em khó
hòa thuận. Đương số không nhờ được anh em, sao này còn gây chia rẽ tình
cảm.`,
  },

  {
    id: 'thien-hinh-tai-huynh-de-dac-dia',
    title: 'Thiên Hình Huynh Đệ - Đắc địa',
    sao: ['Thiên Hình'],
    cung: ['Huynh Đệ'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    doUuTien: 78,
    tomTat: `Thiên Hình **Đắc địa** tại Huynh Đệ (Dần, Thân, Mão, Dậu): anh
em đương số tính cách mạnh mẽ, độc lập, mỗi người mang chí khí riêng; gia
đình có uy tín.`,
  },

  {
    id: 'thien-hinh-tai-huynh-de-binh-tuong-an',
    title: 'Thiên Hình Huynh Đệ + Binh Tướng Ấn',
    sao: ['Thiên Hình'],
    cung: ['Huynh Đệ'],
    ketHop: ['Phục Binh', 'Tướng Quân', 'Quốc Ấn'],
    doUuTien: 70,
    tomTat: `Thiên Hình tại Huynh Đệ gặp Phục Binh, Tướng Quân, Quốc Ấn:
trong anh em đương số có người thành đạt, công danh hiển hách.`,
  },

  {
    id: 'thien-hinh-tai-huynh-de-ham-sat',
    title: 'Thiên Hình Huynh Đệ - Hãm + Lục Sát / Phục Tướng',
    sao: ['Thiên Hình'],
    cung: ['Huynh Đệ'],
    trangThai: ['Hãm'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp', 'Phục Binh', 'Tướng Quân'],
    doUuTien: 75,
    tomTat: `Thiên Hình **Hãm** tại Huynh Đệ kèm Lục Sát hoặc Phục Binh,
Tướng Quân: anh em khó hòa thuận, ít trợ giúp; vì tiền bạc, lợi ích mà trở
mặt, đương số bị anh em lừa gạt; tranh chấp tài sản khiến tình cảm sứt mẻ.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // THIÊN HÌNH VÀO HẠN - 8 BỘ KẾT HỢP
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-hinh-han-dau-kinh-mo-xe',
    title: 'Hạn: Hình + Đẩu / Kình - Châm chích cắt mổ xẻ',
    sao: ['Thiên Hình'],
    ketHop: ['Kình Dương'],
    doUuTien: 50,
    tomTat: `Thiên Hình gặp Đẩu Quân hoặc Kình Dương vào hạn: đương số chịu
châm chích, cắt, mổ xẻ.

Đương số phải phẫu thuật y khoa, tai nạn chảy máu, trầy xước — đúng câu
"thân xác chịu khổ, tinh thần chẳng yên".

Cách hóa giải: giữ gìn sức khỏe, tránh tham gia công việc nguy hiểm, hạn
chế va chạm với dao kéo, máy móc.`,
  },

  {
    id: 'thien-hinh-han-ky-kiep-dao-thuong',
    title: 'Hạn: Hình + Kỵ + Kiếp - Phòng nạn đao thương',
    sao: ['Thiên Hình'],
    ketHop: ['Hóa Kỵ', 'Địa Kiếp'],
    doUuTien: 50,
    tomTat: `Thiên Hình cùng Hóa Kỵ và Địa Kiếp vào hạn: đương số phải phòng
nạn đao thương — nguy cơ tai nạn dao kéo, đâm chém, cần đặc biệt cẩn trọng
khi sử dụng dụng cụ sắc nhọn và tránh nơi vắng vẻ, nguy hiểm.`,
  },

  {
    id: 'thien-hinh-han-hao-kiep-sat-hao-tan',
    title: 'Hạn: Hình + Hao + Kiếp + Sát - Hao tán ốm đau',
    sao: ['Thiên Hình'],
    ketHop: ['Đại Hao', 'Địa Kiếp', 'Thất Sát'],
    doUuTien: 50,
    tomTat: `Thiên Hình cùng Đại Hao, Địa Kiếp và Thất Sát vào hạn: hao tán
ốm đau.

Tiền của trong nhà đương số khó giữ, tiêu tán không chỉ vì đầu tư sai mà
còn vì chi phí bệnh tật; việc bất ngờ ngoài ý muốn liên tục xảy ra.

Cách hóa giải: sống tiết kiệm, tránh đầu tư mạo hiểm, đề phòng những lời
mời gọi hấp dẫn ẩn rủi ro phía sau.`,
  },

  {
    id: 'thien-hinh-han-linh-viet-set-dien',
    title: 'Hạn: Hình + Linh / Hỏa ngộ Việt - Sét điện súng đạn',
    sao: ['Thiên Hình'],
    ketHop: ['Linh Tinh', 'Thiên Việt'],
    doUuTien: 55,
    tomTat: `Thiên Hình gặp Linh Tinh hoặc Hỏa Tinh ngộ Thiên Việt vào hạn:
phòng sét, điện, súng đạn — kiểu "trời giáng họa".

Đương số tiềm ẩn nguy cơ tai nạn do điện giật, cháy nổ, đặc biệt dễ bị sét
đánh; những chuyện này khó lường trước.

Cách hóa giải: đặc biệt chú ý an toàn điện; tránh trú dưới gốc cây to khi
mưa dông; hạn chế tiếp xúc thiết bị điện khi giông sét; làm nhiều việc
thiện, cầu an — phúc dày thì họa khó chạm thân.`,
  },

  {
    id: 'thien-hinh-han-phu-kien-tung',
    title: 'Hạn: Hình + Phù - Kiện tụng',
    sao: ['Thiên Hình'],
    ketHop: ['Quan Phù'],
    doUuTien: 50,
    tomTat: `Thiên Hình cùng Quan Phù vào hạn: đương số phải phòng kiện tụng,
vướng vào kiện cáo, tòa án — có thể đứng ở vị trí nguyên đơn hoặc bị đơn.

Khi ngộ thêm Địa Không, Địa Kiếp, hạn càng trầm trọng: đương số bị người
thù ghét, hãm hại, bị kiện thưa vô lý.

Cách hóa giải: cẩn trọng trong giao dịch, ký kết hợp đồng; tránh va chạm
pháp lý.`,
  },

  {
    id: 'thien-hinh-han-ky-pha-danh-bai',
    title: 'Hạn: Hình + Kỵ + Phá - Đánh nhau bị bại',
    sao: ['Thiên Hình'],
    ketHop: ['Hóa Kỵ', 'Phá Quân'],
    doUuTien: 50,
    tomTat: `Thiên Hình cùng Hóa Kỵ và Phá Quân vào hạn: đánh nhau bị bại.

Đương số sinh va chạm, xung đột, dẫn đến kiện cáo, đánh nhau và khả năng
thua trận cao.

Cách hóa giải: kiềm chế nóng nảy, ghi nhớ "một điều nhịn, chín điều lành";
tránh châm ngòi tranh cãi; thiền định, tụng kinh — "tâm an thì sự an".`,
  },

  {
    id: 'thien-hinh-han-tue-khau-thiet',
    title: 'Hạn: Hình + Thái Tuế - Khẩu thiệt thị phi',
    sao: ['Thiên Hình'],
    ketHop: ['Thái Tuế'],
    doUuTien: 50,
    tomTat: `Thiên Hình cùng Thái Tuế vào hạn: khẩu thiệt, thị phi.

Đương số gặp thị phi do lời nói, vướng tai bay vạ gió, tranh cãi, hiểu lầm
trong giao tiếp.

Cách hóa giải: giữ miệng trong giai đoạn này, tránh phát ngôn bừa bãi,
không tham gia tranh luận vô bổ.`,
  },
];
