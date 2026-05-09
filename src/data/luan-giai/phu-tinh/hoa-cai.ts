import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO HOA CÁI - Kim, Cát Tinh (Đài Các Tinh).
 *
 * Một trong TỨ LINH (Long Trì - Phượng Các - Bạch Hổ - Hoa Cái).
 * Hình tượng: CHIẾC LỌNG CHE uy nghi trong lễ rước trạng nguyên.
 *
 * Đặc tính: TRÍ TUỆ, KHÍ CHẤT, PHÚ QUÝ, DANH VỌNG, ĐỖ ĐẠT, PHỤNG SỰ,
 * NGHI THỨC KHUÔN PHÉP, TÂM LINH NGHỆ THUẬT.
 *
 * Cát tinh giống Hoa Cái: Long Trì, Phượng Các, Văn Xương, Văn Khúc,
 * Thiên Khôi, Thiên Việt.
 */
export const luanGiai_HoaCai: DoanLuanGiai[] = [
  {
    id: 'hoa-cai-tinh-chat-chung',
    title: 'Hoa Cái - Đặc tính chung',
    sao: ['Hoa Cái'],
    doUuTien: 32,
    tomTat: `**Hoa Cái** là phụ tinh thuộc nhóm cát tinh (còn gọi Đài Các Tinh), một
trong **Tứ Linh** gồm Long Trì, Phượng Các, Bạch Hổ và Hoa Cái. Sao này
ngũ hành Kim, hình tượng là chiếc lọng che uy nghi trong lễ rước trạng
nguyên.

Đặc tính nổi bật của Hoa Cái:

- Trí tuệ, khí chất thanh cao, phú quý
- Danh vọng, đỗ đạt, phụng sự
- Yêu cái đẹp, tôn trọng nghi thức và khuôn phép
- Nhiều trường hợp gắn với tâm linh hoặc nghệ thuật
- Tính cách thông tuệ, chăm chỉ, chịu khó nhưng có phần bảo thủ và sĩ
  diện

Sao này có vài ảnh hưởng chính đến đương số: làm nổi bật tài năng, nâng
cao địa vị và uy tín cá nhân; tạo nền tảng phúc đức, hỗ trợ học hành,
thi cử và công danh. Tuy vậy khi gặp sao xấu, đương số dễ thành bảo thủ
và sĩ diện.

Bộ cát tinh có nét tương đồng với Hoa Cái gồm Long Trì, Phượng Các, Văn
Xương, Văn Khúc, Thiên Khôi và Thiên Việt.

Về duyên vận, đương số có nhân duyên tốt, dễ thu hút thiện cảm từ người
khác giới; bạn đời có địa vị hoặc xuất thân tốt.

Về sự nghiệp, đương số thường được quý nhân nâng đỡ và dễ đạt thành tựu
lâu dài nếu biết nắm bắt cơ hội.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CUNG MỆNH
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'hoa-cai-menh-khi-chat-thanh-cao',
    title: 'Hoa Cái tại Mệnh - Khí chất thanh cao',
    sao: ['Hoa Cái'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Đương số có **Hoa Cái** tại Mệnh vừa được dấu hiệu may mắn, vừa khơi
dậy khí chất thanh cao. Đương số dễ được trọng vọng, có quý nhân nâng
đỡ; trên đường công danh và tài lộc đều có thuận lợi.

Về dung mạo (cả nam và nữ):

- Phong thái sang trọng, khí chất nổi bật
- Dễ tạo thiện cảm ngay từ ánh nhìn đầu tiên
- Thân hình đầy đặn, gương mặt sáng
- Đôi khi có nốt ruồi son hoặc nám nhẹ trên mặt
- Khác Đào Hoa (hấp dẫn nhờ bề ngoài), Hoa Cái cuốn hút bằng phong cách
  chỉn chu, tinh tế và vẻ đẹp trí tuệ

Về tính cách, đương số thông tuệ, chăm chỉ, chịu khó nhưng có phần bảo
thủ; yêu cái đẹp, ưa trưng diện và thích thu hút sự chú ý. Cuộc đời dễ
trải qua đủ hỉ - nộ - ái - ố.

Về tâm linh, đương số thường mang căn số tâm linh, giác quan thứ sáu
nhạy bén, cảm nhận được những điều người khác không thể thấy; có giấc
mơ linh ứng chuẩn xác đến bất ngờ.`,
  },

  {
    id: 'hoa-cai-menh-xuong-khuc-khoi-quyen',
    title: 'Hoa Cái + Văn Xương/Văn Khúc/Thiên Khôi/Hóa Quyền tại Mệnh - Vừa tài vừa thế',
    sao: ['Hoa Cái'],
    cung: ['Mệnh'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Hóa Quyền'],
    doUuTien: 70,
    tomTat: `Khi Hoa Cái hội Văn Xương, Văn Khúc, Thiên Khôi hoặc Hóa Quyền tại
Mệnh, đương số là người vừa có tài vừa có thế.

Đặc trưng cách cục:

- Dễ bước vào hàng ngũ được trọng vọng
- Có văn tài kết hợp với quyền uy
- Học hành thi cử đỗ đạt
- Danh vọng đi đôi với thực lực`,
  },

  {
    id: 'hoa-cai-menh-tien-cai-hau-ma-cai-moc-rieu',
    title: 'Hoa Cái + Tiền Cái Hậu Mã / Cái Mộc Riêu - Kinh doanh giàu sang',
    sao: ['Hoa Cái'],
    cung: ['Mệnh'],
    ketHop: ['Thiên Mã', 'Mộc Dục', 'Thiên Riêu'],
    doUuTien: 68,
    tomTat: `Bộ Tiền Cái - Hậu Mã (Hoa Cái đi với Thiên Mã) hoặc bộ Cái - Mộc -
Riêu (Hoa Cái đi với Mộc Dục và Thiên Riêu) thúc đẩy mạnh khả năng
kinh doanh của đương số.

Đặc trưng các bộ này:

- Đem đến giàu sang
- Vị thế cao trong xã hội
- Khả năng giao dịch và thương mại xuất sắc
- Hoa Cái đi với Thiên Mã ứng vào nghĩa "công danh kiêm tài"`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC CUNG KHÁC
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'hoa-cai-phu-mau-cha-me-quan-xuyen',
    title: 'Hoa Cái tại Phụ Mẫu - Cha mẹ giỏi quán xuyến',
    sao: ['Hoa Cái'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Hoa Cái đóng Phụ Mẫu khiến cung này hội đủ bộ **Tứ Linh** (Long Trì,
Phượng Các, Bạch Hổ, Hoa Cái).

Đặc trưng cha mẹ:

- Biết quán xuyến gia đình, giỏi giang, chu toàn
- Sự đảm đang đi liền với tính cách ghê gớm, nghiêm khắc
- Có phần áp đặt con cái phải theo ý mình

Về kinh tế, nhờ nhân duyên tốt và tính chăm chỉ, cha mẹ tự gây dựng
được nền tảng vững vàng. Khi gặp thêm cát tinh, gia đình đạt địa vị xã
hội cao, sự nghiệp thăng hoa, danh tiếng được nhiều người kính nể.`,
  },

  {
    id: 'hoa-cai-phu-the-hao-hoa',
    title: 'Hoa Cái tại Phu Thê - Hôn nhân hào hoa',
    sao: ['Hoa Cái'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `Hoa Cái đóng Phu Thê khiến hôn nhân của đương số mang đậm nét hào hoa.

Đặc trưng cuộc sống vợ chồng:

- Cả hai đều thích trưng diện, điệu đà
- Có đôi phần bảo thủ

Người bạn đời thường xuất thân từ gia đình danh giá, điều kiện kinh tế
tốt, có thể hỗ trợ mạnh mẽ về cả tài chính lẫn vị thế xã hội.

Cảnh báo: sự sung túc kèm tâm lý ỷ lại dễ khiến mối quan hệ tựa như
bình phong — đẹp nhưng rỗng ruột, thiếu sự gắn kết và động lực cùng
tiến.`,
  },

  {
    id: 'hoa-cai-phu-the-tam-thai-bat-toa-quang-quy',
    title: 'Hoa Cái + Tam Thai/Bát Tọa/Ân Quang/Thiên Quý tại Phu Thê - Chiều chuộng quá đà',
    sao: ['Hoa Cái'],
    cung: ['Phu Thê'],
    ketHop: ['Tam Thai', 'Bát Tọa', 'Ân Quang', 'Thiên Quý'],
    doUuTien: 65,
    tomTat: `Khi Hoa Cái hội **Tam Thai Bát Tọa** hoặc Ân Quang Thiên Quý tại Phu
Thê, vợ chồng đương số dễ chiều chuộng nhau quá đà.

Hệ quả: chiều chuộng quá mức dẫn đến lười biếng, cả hai dễ ỷ lại vào
nhau và mất đi động lực cầu tiến.`,
  },

  {
    id: 'hoa-cai-dien-trach-thanh-tri-vung',
    title: 'Hoa Cái tại Điền Trạch - Thành trì che chở',
    sao: ['Hoa Cái'],
    cung: ['Điền Trạch'],
    doUuTien: 78,
    tomTat: `Hoa Cái đóng Điền Trạch như một thành trì vững vàng che chở cho gia
đạo của đương số.

Đặc trưng:

- Nhà cao cửa rộng
- Bất động sản có giá trị
- Khả năng tích lũy lâu dài
- Khi gặp cách cục đẹp, đương số giữ được cơ nghiệp đồng thời khéo
  sinh lợi từ bất động sản — "lãi mẹ đẻ lãi con", giàu sang càng thêm
  sung túc

Cảnh báo: vào vận xấu hoặc gặp sát tinh, thành lũy rạn nứt, có thể
xảy ra tranh chấp đất đai, hao hụt tài sản hoặc nhà cửa xuống cấp;
đương số cần cẩn trọng khi đầu tư lớn.`,
  },

  {
    id: 'hoa-cai-quan-loc-thang-tien',
    title: 'Hoa Cái tại Quan Lộc - Sự nghiệp thăng tiến',
    sao: ['Hoa Cái'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `Hoa Cái đóng Quan Lộc báo hiệu điềm lành trong đường công danh của
đương số.

Đặc trưng:

- Dễ gây dựng uy tín
- Làm việc hiệu quả
- Được người trên kẻ dưới kính trọng
- Củng cố cả đời sống vật chất lẫn tâm linh`,
  },

  {
    id: 'hoa-cai-quan-loc-an-quang-thien-quy-xuong-khuc-long-phuong',
    title: 'Hoa Cái + Ân Quang/Thiên Quý/Văn Xương/Văn Khúc/Long Trì/Phượng Các tại Quan Lộc - Thi cử đỗ đạt',
    sao: ['Hoa Cái'],
    cung: ['Quan Lộc'],
    ketHop: ['Ân Quang', 'Thiên Quý', 'Văn Xương', 'Văn Khúc', 'Long Trì', 'Phượng Các'],
    doUuTien: 72,
    tomTat: `Khi Hoa Cái hội Ân Quang, Thiên Quý, Văn Xương, Văn Khúc, Long Trì
và Phượng Các tại Quan Lộc, đương số có cơ hội thăng tiến rộng mở và
thi cử đỗ đạt mỹ mãn.

Bộ sao văn hiển kết hợp khoa bảng đầy đủ này khiến đường công danh
sáng láng, danh tiếng vang xa.`,
  },

  {
    id: 'hoa-cai-thien-di-suc-hut',
    title: 'Hoa Cái tại Thiên Di - Sức hút đặc biệt',
    sao: ['Hoa Cái'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `Hoa Cái đóng Thiên Di phần nào tương đồng với cách thủ ở vị trí gốc.

Đặc trưng:

- Tỏa ra sức hút đặc biệt
- Dễ khiến người trên kẻ dưới thương mến
- Tính tình vui vẻ, cởi mở
- Lời ăn tiếng nói khéo léo
- Có nét duyên ngầm khó lẫn

Đương số phù hợp với những công việc cần giao tiếp, thương lượng như
tiếp tân, ngoại giao hay đại diện thương mại.

Cảnh báo: khi đi cùng sát tinh, sự nổi bật quá mức trở thành con dao
hai lưỡi, mang đến thị phi và rắc rối không đáng có.`,
  },

  {
    id: 'hoa-cai-no-boc-ban-be-quyen-the',
    title: 'Hoa Cái tại Nô Bộc - Bạn bè quyền thế',
    sao: ['Hoa Cái'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Hoa Cái đóng Nô Bộc cho thấy bạn bè đương số đa số là người quyền
thế, giàu có và giỏi giang.

Đặc trưng quan hệ:

- Đi đâu cũng có người lăn xả giúp đỡ
- Bạn bè hết lòng hậu thuẫn như cánh tay phải đắc lực
- Trong môi trường nghệ thuật, giải trí, đương số hay có cơ duyên gặp
  người nổi tiếng

Khi gặp thêm cát tinh, vận quý nhân càng mạnh; mối quan hệ trở thành
bệ phóng giúp sự nghiệp và tài chính thăng hoa.`,
  },

  {
    id: 'hoa-cai-tat-ach-truc-giac-nhay-ben',
    title: 'Hoa Cái tại Tật Ách - Trực giác nhạy bén',
    sao: ['Hoa Cái'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `Hoa Cái đóng Tật Ách tựa như đương số được trời trao "con mắt thứ ba".

Đặc trưng:

- Trực giác nhạy bén
- Dễ cảm nhận điều huyền bí
- Có giấc mơ linh ứng
- Là dấu hiệu căn số tâm linh, nhất là khi có thêm các sao huyền diệu

Cảnh báo về bệnh tình: thường liên quan tới bệnh tình dục và sức khỏe
sinh lý, đặc biệt khi hội cùng Đào Hoa, Thiên Riêu hoặc Mộc Dục. Khi
gặp sát tinh, bệnh có xu hướng âm ỉ, khó kiểm soát và mãn tính —
đương số nên chú trọng phòng bệnh từ sớm.`,
  },

  {
    id: 'hoa-cai-tat-ach-dao-rieu-moc-duc',
    title: 'Hoa Cái + Đào Hoa/Thiên Riêu/Mộc Dục tại Tật Ách - Bệnh sinh lý',
    sao: ['Hoa Cái'],
    cung: ['Tật Ách'],
    ketHop: ['Đào Hoa', 'Thiên Riêu', 'Mộc Dục'],
    doUuTien: 65,
    tomTat: `Khi Hoa Cái hội Đào Hoa, Thiên Riêu và Mộc Dục tại Tật Ách, là cảnh
báo về bệnh tình dục và sức khỏe sinh lý của đương số.

Đặc trưng: bệnh thuộc nhóm sinh lý, tình dục; nếu gặp thêm sát tinh
thì bệnh dễ trở nên âm ỉ, khó kiểm soát và mãn tính. Đương số cần
phòng bệnh sớm.`,
  },

  {
    id: 'hoa-cai-tai-bach-ham-kiem-tien',
    title: 'Hoa Cái tại Tài Bạch - Ham kiếm tiền',
    sao: ['Hoa Cái'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `Hoa Cái đóng Tài Bạch khiến đương số say mê kiếm tiền.

Đặc trưng dòng tiền:

- Sống theo phương châm "đã bước là phải tiến"
- Không bao giờ bằng lòng với hiện tại
- Có của để dành kín đáo trong nhà
- Dưới quyền có người phụ giúp tạo nguồn thu ổn định

Cảnh báo: việc quá tập trung vào sự nghiệp dễ khiến đương số bỏ quên
gia đình, đặc biệt là ít chăm sóc con cái.`,
  },

  {
    id: 'hoa-cai-tai-bach-thien-ma-loc-ton-hoa-loc',
    title: 'Hoa Cái + Thiên Mã/Lộc Tồn/Hóa Lộc tại Tài Bạch - Sinh lời mạnh',
    sao: ['Hoa Cái'],
    cung: ['Tài Bạch'],
    ketHop: ['Thiên Mã', 'Lộc Tồn', 'Hóa Lộc'],
    doUuTien: 70,
    tomTat: `Khi Hoa Cái hội Thiên Mã, Lộc Tồn và Hóa Lộc tại Tài Bạch, đây là
bộ sao tài lộc đầy đủ.

Đặc trưng:

- Đương số dễ nắm bắt cơ hội tốt để sinh lời
- Tiền bạc rủng rỉnh
- Có nguồn thu ổn định
- Tài chính vững vàng`,
  },

  {
    id: 'hoa-cai-tu-tuc-con-thong-minh',
    title: 'Hoa Cái tại Tử Tức - Con cái thông minh',
    sao: ['Hoa Cái'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Hoa Cái đóng Tử Tức cho thấy con cái đương số bộc lộ tư chất thông
minh ngay từ nhỏ.

Đặc trưng:

- Con cái thông minh, giỏi giang, có chí tiến thủ từ nhỏ
- Kinh tế gia đình vững vàng giúp con hưởng điều kiện tốt
- Phát triển thuận lợi trong học hành và sự nghiệp

Cảnh báo về con dao hai lưỡi: nếu cha mẹ nuông chiều quá mức — "yêu
quá hóa hư con" — con thêm phần bướng bỉnh, khó bảo. Khi trưởng thành,
con có xu hướng sống độc lập, ít dựa vào gia đình; cha mẹ về sau khó
được nương nhờ.`,
  },

  {
    id: 'hoa-cai-phuc-duc-goc-phuc-vung',
    title: 'Hoa Cái tại Phúc Đức - Gốc phúc vững chắc',
    sao: ['Hoa Cái'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `Hoa Cái đóng Phúc Đức tựa ngọn đèn tổ soi sáng cả gia tộc.

Đặc trưng:

- Mồ mả dòng họ yên ấm ở thế đất đẹp, phong thủy thuận
- Tạo gốc phúc vững chãi cho con cháu đời sau
- Trong gia phả xuất hiện những bậc hiển đạt, vinh quy bái tổ
- Để lại danh thơm bảng vàng

Phúc phần truyền lại: con cháu đời sau thêm sáng dạ, thông tuệ; sớm
định hướng tương lai và dễ đạt thành tựu.

Cảnh báo: khi gặp sao xấu, dòng họ phát sinh mâu thuẫn, phúc khí dần
mai một.`,
  },

  {
    id: 'hoa-cai-phuc-duc-ta-huu-xuong-khuc',
    title: 'Hoa Cái + Tả Phù/Hữu Bật/Văn Xương/Văn Khúc tại Phúc Đức - Đèn tổ soi sáng',
    sao: ['Hoa Cái'],
    cung: ['Phúc Đức'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc'],
    doUuTien: 68,
    tomTat: `Khi Hoa Cái hội Tả Phù, Hữu Bật, Văn Xương và Văn Khúc tại Phúc Đức,
đúng nghĩa "ngọn đèn tổ" soi sáng dòng họ.

Đặc trưng: dòng tộc có thêm nhiều người tài giỏi, có người đạt địa vị
cao, làm rạng danh gia đình; phúc đức được truyền nhiều đời.`,
  },

  {
    id: 'hoa-cai-huynh-de-anh-em-cham-chi',
    title: 'Hoa Cái tại Huynh Đệ - Anh em chăm chỉ chịu khó',
    sao: ['Hoa Cái'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Hoa Cái đóng Huynh Đệ cho thấy anh em đương số chăm chỉ, chịu khó và
có khí chất hơn người.

Đặc trưng:

- Mối quan hệ trên dưới thuận hòa
- Nhiều người thành đạt
- Sẵn lòng giúp đỡ nhau khi gặp khó khăn`,
  },

  {
    id: 'hoa-cai-huynh-de-ta-huu-khang-khit',
    title: 'Hoa Cái + Tả Phù/Hữu Bật tại Huynh Đệ - Anh em khăng khít',
    sao: ['Hoa Cái'],
    cung: ['Huynh Đệ'],
    ketHop: ['Tả Phù', 'Hữu Bật'],
    doUuTien: 68,
    tomTat: `Khi Hoa Cái hội **Tả Phù** và Hữu Bật tại Huynh Đệ, sự khăng khít
ruột thịt được tăng cường rõ rệt.

Đặc trưng: đúng nghĩa "anh em như thể tay chân, rách lành đùm bọc, dở
hay đỡ đần" — mối quan hệ gắn bó keo sơn, đùm bọc lẫn nhau khi khó
khăn.`,
  },
];
