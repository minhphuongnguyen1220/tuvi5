import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THIÊN KHÔNG - Hỏa, Hung Tinh (Không Vong).
 *
 * Vị trí: LUÔN xung chiếu với Thiếu Dương trong vòng Thái Tuế.
 * Hóa khí: HƯ ẢO, GIÁC NGỘ.
 *
 * Đặc tính: NÂNG CAO TRÍ TUỆ + GIÁC NGỘ, đồng thời GÂY PHÁ HỦY, MẤT MÁT,
 * THÀNH BẠI CHÓNG VÁNH. "Thành công nhanh mà thất bại cũng nhanh".
 *
 * Tâm linh: gắn với TÔN GIÁO, TRIẾT HỌC, ẨN CƯ, THIỀN ĐỊNH.
 */
export const luanGiai_ThienKhong: DoanLuanGiai[] = [
  {
    id: 'thien-khong-tinh-chat-chung',
    title: 'Thiên Không - Đặc tính chung',
    sao: ['Thiên Không'],
    doUuTien: 32,
    tomTat: `**Thiên Không** là phụ tinh thuộc hàng hung tinh, mang bản chất "không
vong" và hư ảo. Ngũ hành Hỏa, hóa khí là Hư Ảo - Giác Ngộ. Trong vòng Thái Tuế,
sao này luôn xung chiếu với Thiếu Dương.

Thiên Không tác động đến đương số theo hai mặt rõ rệt. Mặt tốt giúp đương số
nhanh trí, sáng tạo, nâng cao trí tuệ; mặt xấu lại đẩy chủ mệnh vào ảo tưởng,
sai lầm, phá hủy và mất mát. Người ta thường nói về sao này bằng câu "thành
công nhanh mà thất bại cũng nhanh", cuộc đời nhiều biến động bất ngờ.

Bản chất của Thiên Không vừa là con số không, vừa là khoảng không vô tận. Khi
hạn tới, đương số được hay mất, thành hay bại hoàn toàn tùy thuộc vào tư tưởng
và hành động trong giai đoạn đó. Sao này vừa là ngôi sao thử thách vừa như
ngọn đèn dẫn lối — khi lòng tĩnh trí sáng, đương số sống an nhiên và tỏa sáng
rực rỡ.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CUNG MỆNH
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-khong-menh-dung-mao',
    title: 'Thiên Không tại Mệnh - Dung mạo sáng sủa',
    sao: ['Thiên Không'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `Khi Thiên Không tọa Mệnh, đương số có dung mạo sáng sủa thông minh,
ánh mắt tinh anh có thần, gây ấn tượng mạnh với người đối diện.

Tuy vậy, trên thân thể chủ mệnh khó tránh khỏi vết sẹo hoặc thương tích do tai
nạn để lại.`,
  },

  {
    id: 'thien-khong-menh-tinh-cach',
    title: 'Thiên Không tại Mệnh - Tính cách triết học tâm linh',
    sao: ['Thiên Không'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Đương số có Thiên Không tọa Mệnh thường thông minh nhanh trí, ứng biến
linh hoạt, mang tư tưởng thiên về triết học và tâm linh.

Về sự nghiệp, chủ mệnh có năng lực và nhiều sáng kiến nên dễ "một bước lên cao"
khi gặp thời, song cũng giống ngọn lửa rực rỡ rồi nhanh chóng tàn lụi. Sự nghiệp
luôn ẩn chứa biến động bất ngờ, lên voi xuống chó là điều thường gặp.

Về phúc thọ, đương số dễ có tiếng tăm tên tuổi lan xa nếu biết hành thiện. Nếu
không tu dưỡng tốt, tai họa bất ngờ ập đến khiến chủ mệnh trắng tay, mất mát
lớn. Đời người trải qua nhiều lần thành bại, về sau mới hiểu chân lý và tìm
được con đường đúng — đúng như câu "thất bại là mẹ thành công", nhờ vấp ngã
lớn mà giác ngộ và trưởng thành.`,
  },

  {
    id: 'thien-khong-menh-van-tinh-hoc-gioi',
    title: 'Thiên Không + Văn tinh tại Mệnh - Học giỏi sáng tạo',
    sao: ['Thiên Không'],
    cung: ['Mệnh'],
    ketHop: ['Văn Xương', 'Văn Khúc'],
    doUuTien: 68,
    tomTat: `Khi Thiên Không gặp Văn Xương hoặc Văn Khúc tại Mệnh, đương số học
giỏi, sáng tạo và giàu trí tuệ. Văn tài kết hợp với chiều sâu tâm linh giúp
chủ mệnh đặc biệt phù hợp với nghiên cứu và triết học.`,
  },

  {
    id: 'thien-khong-menh-hung-tinh-gian-xao',
    title: 'Thiên Không + Hung tinh tại Mệnh - Trí tuệ hóa gian xảo',
    sao: ['Thiên Không'],
    cung: ['Mệnh'],
    ketHop: ['Kình Dương', 'Đà La', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 60,
    tomTat: `Khi Thiên Không đi cùng các hung tinh như Kình Dương, Đà La, Địa Không,
Địa Kiếp tại Mệnh, trí tuệ vốn có chuyển hóa thành gian xảo láu cá. Đương số
dễ sa ngã, đem tài trí dùng vào những mưu tính xấu, "đa mưu túc trí" theo hướng
tiêu cực. Đây là cách cục cần tu dưỡng nhiều mới chuyển hóa được.`,
  },

  {
    id: 'thien-khong-menh-quang-quy-hong-loan-quan-phuc-an-cu',
    title: 'Thiên Không + Quang Quý/Hồng Loan/Quan Phúc - Tôn giáo ẩn cư',
    sao: ['Thiên Không'],
    cung: ['Mệnh'],
    ketHop: ['Ân Quang', 'Thiên Quý', 'Hồng Loan', 'Thiên Quan', 'Thiên Phúc'],
    doUuTien: 65,
    tomTat: `Khi Thiên Không gặp Ân Quang, Thiên Quý, Hồng Loan, Thiên Quan, Thiên
Phúc tại Mệnh, đương số mang xu hướng đi theo tôn giáo, triết học, chọn đời
sống ẩn cư an nhàn. Tâm hướng giải thoát, sống thanh đạm, không màng danh lợi.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC CUNG KHÁC
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-khong-phu-the-thong-minh-sac-sao',
    title: 'Thiên Không tại Phu Thê - Hôn phối thông minh',
    sao: ['Thiên Không'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `Khi Thiên Không cư Phu Thê, bạn đời của đương số là người thông minh
sắc sảo, mang khí chất riêng biệt khó lẫn vào ai khác.`,
  },

  {
    id: 'thien-khong-phu-the-quan-phuc-xuong-khuc-dong-dieu',
    title: 'Thiên Không + Thiên Quan/Thiên Phúc/Văn Xương/Văn Khúc tại Phu Thê - Đồng điệu tâm hồn',
    sao: ['Thiên Không'],
    cung: ['Phu Thê'],
    ketHop: ['Thiên Quan', 'Thiên Phúc', 'Văn Xương', 'Văn Khúc'],
    doUuTien: 68,
    tomTat: `Khi Thiên Không đi cùng Thiên Quan, Thiên Phúc, Văn Xương, Văn Khúc
tại Phu Thê, vợ chồng đương số đồng điệu tâm hồn, cùng thích tu tập và làm việc
thiện. Bạn đời tuy không hỗ trợ nhiều cho công danh nhưng là chỗ dựa tinh thần
vững chắc, mang đến cảm thông và chia sẻ trong đời sống chung.`,
  },

  {
    id: 'thien-khong-phu-the-hong-da-co-qua-trac-tro',
    title: 'Thiên Không + Hồng Loan/Đà La/Cô Thần/Quả Tú tại Phu Thê - Tình duyên trắc trở',
    sao: ['Thiên Không'],
    cung: ['Phu Thê'],
    ketHop: ['Hồng Loan', 'Đà La', 'Cô Thần', 'Quả Tú'],
    doUuTien: 60,
    tomTat: `Khi Thiên Không hội Hồng Loan, Đà La, Cô Thần, Quả Tú tại Phu Thê,
đường tình duyên của đương số trắc trở. Phối ngẫu kém phúc thọ, dễ bệnh tật;
quan hệ vợ chồng xa cách lạnh nhạt, khó bền lâu. Hôn nhân thường dở dang lận
đận, đương số phải tái hôn — đúng cảnh "có duyên mà không phận".`,
  },

  {
    id: 'thien-khong-tu-tuc-sat-tinh-cau-tu',
    title: 'Thiên Không + sát tinh tại Tử Tức - Sinh con muộn cầu tự',
    sao: ['Thiên Không'],
    cung: ['Tử Tức'],
    ketHop: ['Kình Dương', 'Đà La', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 60,
    tomTat: `Khi Thiên Không gặp sát tinh như Kình Dương, Đà La, Địa Không, Địa
Kiếp tại Tử Tức, đường con cái của đương số chậm trễ, nhiều khi phải cầu tự
mới có. Có con rồi cũng khó nhờ cậy: tình cảm phai nhạt, con cái sống xa cha
mẹ.`,
  },

  {
    id: 'thien-khong-tu-tuc-ta-huu-quan-phuc-con-quy',
    title: 'Thiên Không + Tả Phù/Hữu Bật/Thiên Quan/Thiên Phúc tại Tử Tức - Con quý hiếu thảo',
    sao: ['Thiên Không'],
    cung: ['Tử Tức'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Thiên Quan', 'Thiên Phúc'],
    doUuTien: 65,
    tomTat: `Khi Thiên Không hội Tả Phù, Hữu Bật, Thiên Quan, Thiên Phúc tại Tử
Tức, đương số có con cái dù muộn nhưng quý. Con thiên hướng tâm linh, thích tu
tập, dễ ngộ đạo hoặc sống hướng thiện; ngoan ngoãn hiếu thảo và có chí tiến thủ,
mang lại niềm an ủi tinh thần lớn cho cha mẹ.`,
  },

  {
    id: 'thien-khong-tai-bach-tu-tan-that-thuong',
    title: 'Thiên Không tại Tài Bạch - Tiền tụ tán thất thường',
    sao: ['Thiên Không'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `Khi Thiên Không cư Tài Bạch, tiền bạc của đương số tụ tán thất thường,
lúc có nhiều lúc lại hao hụt, khó tích lũy ổn định.

Nếu sao này gặp Địa Không, Địa Kiếp, Kình Dương, Đà La hoặc Hóa Kỵ, con đường
tài lộc của chủ mệnh nhiều rủi ro: kiếm tiền bằng phương pháp mạo hiểm, làm
ăn lớn nhưng hao tán, tiền chi ra cho những lý do ngoài ý muốn.

Bộ Tứ Đức chiếu vào mang ý nghĩa khuyên răn: nếu đương số kiếm tiền chính
đáng, siêng làm phúc và chăm chỉ quyên góp thì vẫn giữ được một phần tài sản.
Khi đi cùng Thiên Quan, Thiên Phúc, Ân Quang, Thiên Quý hoặc Thiên Đức, chủ
mệnh vẫn có cơ hội tích lũy, có quý nhân trợ giúp và làm ăn thuận lợi.`,
  },

  {
    id: 'thien-khong-phuc-duc-phuc-khong-tron',
    title: 'Thiên Không tại Phúc Đức - Phúc khí không trọn',
    sao: ['Thiên Không'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `Khi Thiên Không cư Phúc Đức, đương số báo hiệu phúc khí không trọn
vẹn. Tổ tiên có phúc nhưng con cháu khó hưởng trọn, chủ mệnh phải tự tu bồi
phước báu bằng việc thiện, tu tập và hành đạo.`,
  },

  {
    id: 'thien-khong-phuc-duc-khong-kiep-kinh-da',
    title: 'Thiên Không + Địa Không/Địa Kiếp/Kình Dương/Đà La tại Phúc Đức - Họ hàng kém may',
    sao: ['Thiên Không'],
    cung: ['Phúc Đức'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Kình Dương', 'Đà La'],
    doUuTien: 60,
    tomTat: `Khi Thiên Không hội Địa Không, Địa Kiếp, Kình Dương, Đà La tại Phúc
Đức, họ hàng đương số kém may mắn. Gia đạo dễ phân tán, tổ tiên thất lạc mộ
phần, con cháu không được hưởng phúc ấm.`,
  },

  {
    id: 'thien-khong-phuc-duc-tu-phu-vu-tuong-nha-tho-phat',
    title: 'Thiên Không + Tử Phủ Vũ Tướng + Quang Quý/Quan Phúc tại Phúc Đức - Nhà thờ Phật',
    sao: ['Thiên Không'],
    cung: ['Phúc Đức'],
    ketHop: ['Tử Vi', 'Thiên Phủ', 'Vũ Khúc', 'Thiên Tướng', 'Ân Quang', 'Thiên Quý', 'Thiên Quan', 'Thiên Phúc'],
    doUuTien: 65,
    tomTat: `Khi Thiên Không hội Tử Vi, Thiên Phủ, Vũ Khúc, Thiên Tướng cùng Ân
Quang, Thiên Quý, Thiên Quan, Thiên Phúc tại Phúc Đức, dòng họ đương số có
nhiều người hiền lương, trong nhà có thờ Phật. Nhờ vậy mà giảm trừ tai ương,
con cháu thừa hưởng tinh thần đạo lý và dễ hướng đến đời sống tâm linh.`,
  },

  {
    id: 'thien-khong-no-boc-ban-be-toan-tinh',
    title: 'Thiên Không tại Nô Bộc - Bạn bè toan tính',
    sao: ['Thiên Không'],
    cung: ['Nô Bộc'],
    doUuTien: 70,
    tomTat: `Khi Thiên Không cư Nô Bộc đi cùng sát tinh, đương số có bạn bè đông
nhưng phần nhiều toan tính, không thật lòng, thiếu chiều sâu nên khó tin cậy.

Ngược lại, nếu đi cùng Ân Quang, Thiên Quý, Thiên Quan, Thiên Phúc, bạn bè và
cấp dưới của chủ mệnh hiền lương thật lòng, có tu tập, biết giúp đỡ và mang
lại lợi ích lâu dài.`,
  },

  {
    id: 'thien-khong-dien-trach-kho-tich-luy',
    title: 'Thiên Không tại Điền Trạch - Khó tích lũy điền sản',
    sao: ['Thiên Không'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Khi Thiên Không cư Điền Trạch, việc tích lũy điền sản của đương số
khó trọn vẹn. Chủ mệnh phải lao động bền bỉ, tích đức lâu dài mới gây dựng
được cơ ngơi; trong nhà có nhiều của cải nhưng không đứng tên sở hữu, chỉ được
hưởng gián tiếp.

Khi đồng cung với Địa Không, Địa Kiếp, Kình Dương, Đà La, tài sản dễ tiêu hao,
khó duy trì cơ nghiệp tổ tiên. Nếu đi cùng Tử Vi - Thiên Phủ, Thiên Đồng -
Thiên Lương, Ân Quang, Thiên Quý, Thiên Quan, Thiên Phúc, gia đình có xu hướng
thờ Phật, trọng tâm linh và cuộc sống an ổn hơn.`,
  },

  {
    id: 'thien-khong-phu-mau-cha-me-thong-minh',
    title: 'Thiên Không tại Phụ Mẫu - Cha mẹ thông minh khéo léo',
    sao: ['Thiên Không'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Khi Thiên Không cư Phụ Mẫu, cha mẹ của đương số thông minh khéo léo,
có tay nghề giỏi. Một số người mang thiên hướng tâm linh, đi vào tu hành; nhờ
tu tập sớm mà giảm bớt tai ương, hưởng cuộc sống an yên.

Nếu hội Địa Không, Địa Kiếp, Kình Dương, Đà La, cha mẹ gặp nhiều vất vả, sự
nghiệp khó giữ, có thể phá sản. Khi gặp bộ Hồng Loan - Thiên Không - Cô Thần
- Quả Tú, tuổi thọ của cha hoặc mẹ bất lợi; quan hệ cha mẹ con cái xa cách,
chủ mệnh phải sớm tự lập hoặc gánh vác làm chỗ dựa cho cha mẹ.`,
  },

  {
    id: 'thien-khong-quan-loc-bo-do-giua-chung',
    title: 'Thiên Không tại Quan Lộc - Công danh bỏ dở giữa chừng',
    sao: ['Thiên Không'],
    cung: ['Quan Lộc'],
    doUuTien: 75,
    tomTat: `Khi Thiên Không cư Quan Lộc, công danh của đương số không bền lâu,
dễ bỏ dở giữa chừng. Chủ mệnh chịu nhiều bất công nơi làm việc, bị cấp trên
chèn ép, gặp chuyện thị phi oan sai; có năng lực nhưng khó được trọng dụng nên
sự nghiệp không phát triển đúng kỳ vọng.`,
  },

  {
    id: 'thien-khong-quan-loc-dao-kiep-xuong-khuc-nghe-thuat',
    title: 'Thiên Không + Đào Hoa Kiếp Sát + Hồng Xương Khúc Đồng Cơ Vũ - Năng khiếu nghệ thuật',
    sao: ['Thiên Không'],
    cung: ['Quan Lộc'],
    ketHop: ['Đào Hoa', 'Kiếp Sát', 'Hồng Loan', 'Văn Xương', 'Văn Khúc', 'Thiên Đồng', 'Thiên Cơ', 'Vũ Khúc'],
    doUuTien: 70,
    tomTat: `Khi bộ Đào Hoa - Thiên Không - Kiếp Sát hội cùng Hồng Loan, Văn Xương,
Văn Khúc và Thiên Đồng - Thiên Cơ - Vũ Khúc tại Quan Lộc, đương số có năng khiếu
nghệ thuật, thiết kế, kiến trúc và sáng tạo. Dù công việc chính trắc trở, chủ
mệnh vẫn nổi bật, có danh tiếng trong ngành nghề riêng và phù hợp với nghề tự
do mang tính sáng tạo.`,
  },

  {
    id: 'thien-khong-tat-ach-tieu-tru-benh-tat',
    title: 'Thiên Không tại Tật Ách - Tiêu trừ bệnh tật',
    sao: ['Thiên Không'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `Khi Thiên Không cư Tật Ách, sao này mang ý nghĩa tiêu trừ bệnh tật
và hóa giải tai ách cho đương số.

Nếu đi cùng cát tinh — đặc biệt Tả Phù, Hữu Bật, Thiên Quan, Thiên Phúc, Giải
Thần — bệnh tật của chủ mệnh không nguy hiểm, gặp được thầy giỏi thuốc hay,
có quý nhân giúp đỡ. Nhiều trường hợp tưởng nặng mà qua khỏi, tuổi thọ kéo
dài, sức khỏe ổn định nhờ biết tu dưỡng và sống lành mạnh.`,
  },

  {
    id: 'thien-khong-tat-ach-sat-tinh-benh-dai-dang',
    title: 'Thiên Không + sát tinh tại Tật Ách - Bệnh dai dẳng',
    sao: ['Thiên Không'],
    cung: ['Tật Ách'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Kình Dương', 'Đà La', 'Hóa Kỵ', 'Hỏa Tinh', 'Linh Tinh', 'Thiên Hình', 'Bạch Hổ'],
    doUuTien: 60,
    tomTat: `Khi Thiên Không hội Địa Không, Địa Kiếp, Kình Dương, Đà La, Hóa Kỵ,
Hỏa Tinh, Linh Tinh, Thiên Hình, Bạch Hổ tại Tật Ách, bệnh tật của đương số
dai dẳng khó chữa, dễ tái phát.

Nếu hội thêm Hỏa Tinh, Linh Tinh, Thiên Hình, Bạch Hổ, chủ mệnh đối mặt nguy
cơ tai nạn thương tích, phẫu thuật và những bệnh liên quan đến máu huyết.`,
  },

  {
    id: 'thien-khong-thien-di-khon-ngoan-noi-bat',
    title: 'Thiên Không tại Thiên Di - Khôn ngoan ứng biến',
    sao: ['Thiên Không'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `Khi Thiên Không cư Thiên Di, đương số khôn ngoan ứng biến linh hoạt,
dễ được quý mến nể phục. Khi hội cùng Đào Hoa, Hồng Loan, ra ngoài chủ mệnh
càng nổi bật, có danh tiếng và được nhiều người hâm mộ; có xu hướng đi xa, lập
gia đình hoặc kết duyên với người ở xa quê.

Cảnh báo khi gặp Địa Không, Địa Kiếp: xuất ngoại đi xa gặp nhiều trở ngại vất
vả, thậm chí tai họa bất ngờ. Cuộc sống tha hương khó yên, đương số phải lao
đao phiền muộn nên cần chú trọng tích đức, tu dưỡng.`,
  },

  {
    id: 'thien-khong-huynh-de-anh-em-hien-luong',
    title: 'Thiên Không tại Huynh Đệ - Anh em hiền lương',
    sao: ['Thiên Không'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Khi Thiên Không cư Huynh Đệ đi cùng Thiên Quan, Thiên Phúc, Ân Quang,
Thiên Quý, Tả Phù, Hữu Bật, anh chị em của đương số hiền lương khôn ngoan và
nhân hậu; tuy có khoảng cách địa lý nhưng vẫn quan tâm giúp đỡ lẫn nhau.

Ngược lại, khi gặp Kình Dương, Đà La, Cô Thần, Quả Tú, quan hệ anh chị em xa
cách khó nương tựa, mỗi người một nơi. Số lượng anh chị em giảm sút do yểu
mệnh hoặc sinh ra nhưng không nuôi được, chủ mệnh phải tự lập, ít được hỗ
trợ ruột thịt.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁCH CỤC ĐẶC BIỆT
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-khong-dao-hoa-xao-tra-muu-mo',
    title: 'Thiên Không + Đào Hoa - Đa mưu túc trí phong lưu',
    sao: ['Thiên Không'],
    ketHop: ['Đào Hoa'],
    doUuTien: 60,
    tomTat: `Khi Thiên Không gặp Đào Hoa, đương số đa mưu túc trí, có tài ăn nói
lôi cuốn người khác giới. Tính cách phong lưu đa tình nên dễ sa vào những chuyện
tình cảm rắc rối; có tài nhưng cũng nhiều tật xấu.

Chủ mệnh không biết tiết chế thì dễ rơi vào cảnh "chữ tình gieo hạt, chữ khổ
trổ bông".`,
  },

  {
    id: 'thien-khong-van-xuong-thien-tuong-pho-truong',
    title: 'Thiên Không + Văn Xương + Thiên Tướng - Thích phô trương',
    sao: ['Thiên Không'],
    ketHop: ['Văn Xương', 'Thiên Tướng'],
    doUuTien: 60,
    tomTat: `Khi Thiên Không hội Văn Xương và Thiên Tướng, đương số thông minh
nhưng thích phóng đại, khoa trương. Chủ mệnh có năng lực thật sự nhưng hay nói
quá, khoe mẽ, khiến người khác nghi ngờ về thực lực của mình.`,
  },

  {
    id: 'thien-khong-phuc-binh-kiep-sat-luu-manh',
    title: 'Thiên Không + Phục Binh + Kiếp Sát - Lưu manh trộm cướp',
    sao: ['Thiên Không'],
    ketHop: ['Phục Binh', 'Kiếp Sát'],
    doUuTien: 55,
    tomTat: `Khi Thiên Không hội Phục Binh và Kiếp Sát, cách cục trở nên nguy hiểm.
Đương số có tính lưu manh, gian xảo, trộm cướp; dễ kết đảng bè phái làm những
chuyện phá hoại bất lương, dính líu đến pháp luật hoặc xã hội đen.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // HÓA GIẢI
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-khong-hoa-giai-tu-tap-tich-phuc',
    title: 'Hóa giải Thiên Không - Tu tập tích phúc có lý tưởng',
    sao: ['Thiên Không'],
    doUuTien: 50,
    tomTat: `Để hóa giải Thiên Không, đương số nên sống tích phúc và có lý tưởng:
biết tu tập học đạo, phân biệt đúng sai, hành thiện và tích phúc.

Khi sống thiện, đến hạn ngôi sao này biến thành cơ hội học hành phát triển,
chủ mệnh đạt thành công rực rỡ và danh tiếng vang xa. Ngược lại, khi sống ác,
tham vọng bất chấp và làm điều sai, đương số dễ mất trắng — mọi công lao gầy
dựng hóa thành hư ảo.`,
  },
];
