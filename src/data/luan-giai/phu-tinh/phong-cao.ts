import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO PHONG CÁO - Thổ.
 *
 * PHẦN CHUNG CỦA CẶP THAI PHỤ - PHONG CÁO viết tại file `thai-phu.ts`
 * với tag sao: ['Thai Phụ', 'Phong Cáo'].
 *
 * 11 CUNG cũng được viết CHUNG tại `thai-phu.ts` (luận giải Thai Phụ -
 * Phong Cáo cùng nhau).
 *
 * File này CHỈ chứa:
 * - Đặc tính RIÊNG của Phong Cáo (khác Thai Phụ)
 * - Phần Phong Cáo riêng tại Mệnh + Quan Lộc + Tài
 *
 * Đặc trưng RIÊNG của Phong Cáo:
 * - "PHONG" = phong danh, khen thưởng, thăng chức
 * - "CÁO" = cáo bố, tuyên bố toàn thiên hạ
 * - Giống HÓA QUYỀN nhẹ — uy lực bề ngoài
 * - Mặt trái: TỰ ĐẮC, KIÊU HÃNH, TỰ PHỤ, PHÔ TRƯƠNG
 * - Khác Thai Phụ (TINH THẦN điềm đạm khoan dung)
 */
export const luanGiai_PhongCao: DoanLuanGiai[] = [
  {
    id: 'phong-cao-tinh-chat-rieng',
    title: 'Phong Cáo - Đặc tính riêng (Thổ, thăng chức ra oai)',
    sao: ['Phong Cáo'],
    doUuTien: 33,
    tomTat: `**Phong Cáo** là phụ tinh thuộc nhóm Quý Tinh kiêm Văn Tinh, có
những đặc tính riêng khác với Thai Phụ. Ngũ hành Thổ.

Phân tích chữ trong tên sao: "Phong" mang nghĩa phong danh, khen thưởng,
thăng chức; "Cáo" mang nghĩa cáo bố, tuyên bố với mọi người xung quanh và
toàn thiên hạ.

Vì vậy Phong Cáo chủ về việc khen thưởng, thăng cấp, thăng chức, gia tăng
quyền lực và quyền hành, đồng thời tuyên bố sự công nhận đó cho mọi người
biết. Mặt trái là tính tự đắc, kiêu hãnh, tự phụ, thích ra oai và phô
trương bên ngoài.

So với Hóa Quyền: Phong Cáo giống Hóa Quyền ở tính quyền lực nhưng không
mạnh bằng. Hóa Quyền đắc địa mang uy lực thực sự, còn Phong Cáo nghiêng về
danh tiếng bề ngoài hơn.

So với Thai Phụ:

- Thai Phụ là tấm giấy khen tinh thần, biểu hiện sự điềm đạm, khiêm tốn,
  khoan dung
- **Phong Cáo** là quyền lực vật chất, biểu hiện sự kiêu hãnh, phô trương,
  ra oai`,
  },

  {
    id: 'phong-cao-tai-menh-rieng',
    title: 'Phong Cáo tại Mệnh - Kiêu hãnh phô trương',
    sao: ['Phong Cáo'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `Khi Phong Cáo thủ Mệnh, đương số mang những đặc tính riêng (khác
với Thai Phụ).

Đương số thường là người nhiều bằng cấp, hay được khen thưởng, thăng quan
tiến chức và nắm trong tay chức quyền.

Mặt trái là đương số dễ có tính tự đắc, kiêu hãnh, tự phụ; thích phô trương
bên ngoài và ra oai với người khác. Đương số hay thích tỏ ra quyền hành để
đe và sai khiến những người xung quanh.

Đương số cần học cách khiêm tốn và biết nhường nhịn, bởi tính phô trương dễ
gây ra thị phi cùng sự đố kỵ.`,
  },

  {
    id: 'phong-cao-tai-quan-loc-rieng',
    title: 'Phong Cáo tại Quan Lộc - Thăng cấp ra oai',
    sao: ['Phong Cáo'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `Khi Phong Cáo tại Quan Lộc, đặc tính riêng của sao này chủ về
thăng cấp và khen thưởng cho đương số.

Sao này chủ về thăng cấp, khen thưởng, thăng quan tiến chức, tạo nhiều cơ
hội cho công danh sự nghiệp.

Mặt trái trong công việc là đương số thích quyền uy, thích ra oai. Đương số
hay sử dụng chức vụ của mình để thể hiện và đè nén người khác, vì vậy dễ gây
mâu thuẫn với đồng nghiệp và cấp dưới — nhân viên dễ sinh bất mãn.

Quyền lực phải đi đôi với trách nhiệm và sự khiêm tốn thì mới bền vững.`,
  },

  {
    id: 'phong-cao-tai-tai-bach-rieng',
    title: 'Phong Cáo tại Tài Bạch (cặp Thai Phụ - Phong Cáo)',
    sao: ['Phong Cáo'],
    cung: ['Tài Bạch'],
    ketHop: ['Thai Phụ'],
    doUuTien: 70,
    tomTat: `Khi Phong Cáo tại Tài Bạch, sao này luôn đi cặp với Thai Phụ theo
quy luật an sao — Phong Cáo và Thai Phụ luôn cách nhau cố định.

Đương số hay được khen thưởng và trao tặng tiền, có thể dùng bằng cấp, học
vị để kiếm tiền.

Tiền tài của đương số mang yếu tố danh dự và vinh quang, dễ nhận được tài
trợ hay giải thưởng. Đương số cũng có xu hướng phô trương sự giàu sang,
thích để mọi người biết về tình hình tài chính của mình.`,
  },
];
