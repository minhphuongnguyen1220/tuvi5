import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO NGUYỆT ĐỨC - Hỏa, Thiện Tinh.
 *
 * Vị trí: LUÔN đồng cung sao TỬ PHÙ (vòng Thái Tuế vị trí 5).
 * Engine HARDCODE quy luật này trong SAO_DONG_CUNG_THAI_TUE.
 *
 * Thuộc BỘ TỨ ĐỨC (4 sao Đức): Thiên Đức + Nguyệt Đức + Phúc Đức + Long Đức.
 *
 * Đặc trưng RIÊNG:
 * - "ĐỨC HẠNH CỦA NGƯỜI ĐÀN BÀ"
 * - Đặc biệt HỢP với NỮ MỆNH — chỉ sự NHU MỲ, HIỀN HẬU, DỊU DÀNG, ĐOAN
 * CHÍNH, NGAY THẲNG
 * - Khéo léo NỮ CÔNG GIA CHÁNH, NỘI TRỢ, THÊU THÙA
 * - Năng khiếu HỘI HỌA, ÂM NHẠC
 * - Hỏa nhanh: khả năng CHẾ GIẢI NHANH CHÓNG
 * - CHẾ Đào Hồng: đào hoa thành đoan chính
 * - Câu phú "Thiên Lương, Nguyệt Đức chiếu kề - Một là đạo sĩ, hai là tăng nhân"
 *
 * Phần CHUNG bộ Tứ Đức + câu phú "Thiên-Nguyệt Đức ngộ Đào Hồng" + bộ "Thiên-
 * Nguyệt Đức + Giải Thần + Quan Phúc một làng trừ hung" đã viết tại file
 * `thien-duc.ts`.
 */
export const luanGiai_NguyetDuc: DoanLuanGiai[] = [
  {
    id: 'nguyet-duc-tinh-chat-chung',
    title: 'Nguyệt Đức - Đức hạnh người đàn bà',
    sao: ['Nguyệt Đức'],
    doUuTien: 33,
    tomTat: `**Nguyệt Đức** là phụ tinh thuộc nhóm Thiện Tinh, ngũ hành Hỏa, là một
trong bốn sao của bộ Tứ Đức. Sao này được xem như đức hạnh của người đàn bà —
chủ về sự trong sáng, đoan trang, đức độ và nhu thuận. Nguyệt Đức đi cùng các
sao khác để khuyên nhủ, hóa giải, đưa đương số tới con đường tu tập, đạo hạnh
và thoát khỏi ưu phiền.

Về quy luật vị trí, Nguyệt Đức luôn đồng cung với sao Tử Phù — vị trí thứ 5
của vòng Thái Tuế, và đứng trong tam hợp Đào Không Sát. Tử Phù chủ về thông
minh, tài năng, khôn lanh, nhanh nhẹn nhưng cũng lắm tài nhiều tật, gặp không
ít tai vạ và tật bệnh. Nguyệt Đức đi cùng có tác dụng chế hóa và khuyên nhủ
sự bộc phát của Tử Phù.

Về tác dụng giải họa, Nguyệt Đức giải trừ tai ách, đem đến may mắn và hỷ sự.
Nhờ tính Hỏa nhanh nên khả năng chế giải tới rất nhanh chóng. Vận hạn có
Nguyệt Đức, đương số đang mắc bệnh sẽ phục hồi nhanh, sức khỏe cải thiện từng
bước rõ rệt. Khi Tứ Đức hội đủ thì khả năng cứu giải mạnh nhất.

Nguyệt Đức còn có khả năng chế Đào Hoa, Hồng Loan: chế được một phần tính hoa
nguyệt, dâm đãng của Đào Hồng để hướng đương số tới giá trị phẩm hạnh — thu
hút bằng vẻ đoan trang chứ không lả lơi trêu cợt.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // BỘ KẾT HỢP ĐẶC BIỆT
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'nguyet-duc-thien-luong-dao-si-tang-nhan',
    title: 'Nguyệt Đức + Thiên Lương - Đạo sĩ tăng nhân',
    sao: ['Nguyệt Đức'],
    ketHop: ['Thiên Lương'],
    doUuTien: 65,
    tomTat: `Câu phú nói: "Thiên Lương, Nguyệt Đức chiếu kề / Một là đạo sĩ,
hai là tăng nhân". Đương số có duyên tu tập, thích tìm hiểu tâm linh và Phật
pháp, có thể trở thành đạo sĩ hoặc tăng nhân. Bản tính từ bi, hướng tới cứu
nhân độ thế; hợp các nghề liên quan tới tôn giáo, thiền định, yoga.`,
  },

  {
    id: 'nguyet-duc-han-dao-hong-mai-moi',
    title: 'Hạn Nguyệt Đức + Đào Hồng - Mai mối thành vợ chồng',
    sao: ['Nguyệt Đức'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 55,
    tomTat: `Hạn gặp Nguyệt Đức cùng Đào Hoa và Hồng Loan, đương số có giai
nhân giúp đỡ nên tình duyên, có người làm mai mối thành vợ chồng. Đây là hạn
có duyên thành hôn; Đào Hồng được Nguyệt Đức chế hóa nên kết duyên đoan chính,
vợ chồng đẹp đôi.`,
  },

  {
    id: 'nguyet-duc-thien-dong-vo-chong-co-con-som',
    title: 'Nguyệt Đức + Thiên Đồng tại Tử Tức - Vợ chồng có con sớm',
    sao: ['Nguyệt Đức'],
    cung: ['Tử Tức'],
    ketHop: ['Thiên Đồng'],
    doUuTien: 60,
    tomTat: `Khi Nguyệt Đức cùng Thiên Đồng tọa Tử Tức, vợ chồng đương số có
con sớm, sinh nở thuận lợi. Con cái hòa thuận, hiếu thảo; tổ ấm rộn ràng tiếng
cười.`,
  },

  {
    id: 'nguyet-duc-thien-duc-dao-hoa-vo-chong-dep-doi',
    title: 'Thiên Đức + Nguyệt Đức + Đào Hoa - Vợ chồng đẹp đôi',
    sao: ['Nguyệt Đức'],
    cung: ['Phu Thê'],
    ketHop: ['Thiên Đức', 'Đào Hoa'],
    doUuTien: 65,
    tomTat: `Khi **Thiên Đức**, Nguyệt Đức cùng Đào Hoa hội tụ tại Phu Thê, vợ
chồng đẹp đôi và tương đắc, hòa hợp với nhau. Bộ Tứ Đức gặp Đào Hoa được xem
là bộ đoan chính đẹp — tình cảm bền chặt, nhân duyên như trời ban.`,
  },

  {
    id: 'nguyet-duc-tu-phu-dong-luong-quang-quy-quan-phuc-dien',
    title: 'Nguyệt Đức + Tử Phủ Đồng Lương + Quang Quý + Quan Phúc Điền - Nhà thờ Phật Quan Âm',
    sao: ['Nguyệt Đức'],
    cung: ['Điền Trạch'],
    ketHop: ['Tử Vi', 'Thiên Phủ', 'Thiên Đồng', 'Thiên Lương', 'Ân Quang', 'Thiên Quan'],
    doUuTien: 60,
    tomTat: `Khi Nguyệt Đức gặp Tử Vi, Thiên Phủ, Thiên Đồng hoặc Thiên Lương
cùng Quang Quý, Quan Phúc tại Điền Trạch, đương số có nhà thờ Phật Bà Quan Âm.
Gia đình mang truyền thống tâm linh; mộ phần tổ tiên đặt gần nơi thờ Phật Bà
Quan Âm, con cháu nhờ vậy mà hưởng phúc ấm.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // NGUYỆT ĐỨC TẠI 11 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'nguyet-duc-tai-menh',
    title: 'Nguyệt Đức tại Mệnh - Tâm lành quý nhân phù trợ',
    sao: ['Nguyệt Đức'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Khi Nguyệt Đức thủ Mệnh, đương số có tâm lành và được quý nhân
phù trợ. Tính tình ôn hòa, nhân hậu, đức hạnh và đẹp nết; bản chất từ bi, hay
giúp đỡ và làm phúc.

Sao này đặc biệt hợp với nữ mệnh vì Nguyệt Đức vốn là đức hạnh của người đàn
bà. Nữ mệnh có sao này thường đoan chính, dịu dàng, nết na — nhu mỳ, hiền hậu
và ngay thẳng. Đương số khéo léo trong nữ công gia chánh, nội trợ, thêu thùa,
có năng khiếu hội họa và âm nhạc, là vợ hiền dâu thảo.

Với nam mệnh, đương số có duyên với nữ giới và có quý nhân là người khác phái
giúp đỡ. Bản thân thông minh, khéo tay, giỏi về nghệ thuật, hội họa và âm nhạc.

Về khả năng giải hung, Nguyệt Đức giải trừ tật ách, tai họa nhỏ, đem lại may
mắn và hỷ sự. Khi hội đủ Tứ Đức thì sức cứu giải càng mạnh, được xem như lá
bùa hộ mệnh cho đương số.`,
  },

  {
    id: 'nguyet-duc-tai-phu-mau',
    title: 'Nguyệt Đức tại Phụ Mẫu',
    sao: ['Nguyệt Đức'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Khi Nguyệt Đức tọa Phụ Mẫu, cha mẹ đương số nhân hậu, hiền lành,
sống có đạo đức, hay làm từ thiện và thích tu tập. Con cháu nhờ thế được hưởng
phúc lớn.`,
  },

  {
    id: 'nguyet-duc-tai-phu-mau-khong',
    title: 'Nguyệt Đức + Địa Không tại Phụ Mẫu - Duyên tu tập',
    sao: ['Nguyệt Đức'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Địa Không'],
    doUuTien: 70,
    tomTat: `Khi Nguyệt Đức gặp Địa Không tại Phụ Mẫu, cha mẹ đương số thường
có duyên tu tập.`,
  },

  {
    id: 'nguyet-duc-tai-phu-mau-kiep',
    title: 'Nguyệt Đức + Địa Kiếp tại Phụ Mẫu - Duyên tu tập',
    sao: ['Nguyệt Đức'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Khi Nguyệt Đức gặp Địa Kiếp tại Phụ Mẫu, cha mẹ đương số thường
có duyên tu tập.`,
  },

  {
    id: 'nguyet-duc-tai-phu-mau-xuong',
    title: 'Nguyệt Đức + Văn Xương tại Phụ Mẫu - Duyên tu tập',
    sao: ['Nguyệt Đức'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Văn Xương'],
    doUuTien: 70,
    tomTat: `Khi Nguyệt Đức gặp **Văn Xương** tại Phụ Mẫu, cha mẹ đương số
thường có duyên tu tập.`,
  },

  {
    id: 'nguyet-duc-tai-phu-mau-khuc',
    title: 'Nguyệt Đức + Văn Khúc tại Phụ Mẫu - Duyên tu tập',
    sao: ['Nguyệt Đức'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Văn Khúc'],
    doUuTien: 70,
    tomTat: `Khi Nguyệt Đức gặp **Văn Khúc** tại Phụ Mẫu, cha mẹ đương số
thường có duyên tu tập.`,
  },

  {
    id: 'nguyet-duc-tai-phu-mau-hoa-ky',
    title: 'Nguyệt Đức + Hóa Kỵ tại Phụ Mẫu - Mâu thuẫn',
    sao: ['Nguyệt Đức'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `Khi Nguyệt Đức gặp **Hóa Kỵ** tại Phụ Mẫu, tình cảm cha mẹ - con
cái có nhiều vấn đề khó giải quyết. Trong lòng đương số còn thương nhưng ngoài
mặt vẫn mâu thuẫn; khi dứt áo ra đi thì lòng vẫn nặng trĩu.`,
  },

  {
    id: 'nguyet-duc-tai-phu-mau-thien-hinh',
    title: 'Nguyệt Đức + Thiên Hình tại Phụ Mẫu - Mâu thuẫn',
    sao: ['Nguyệt Đức'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Thiên Hình'],
    doUuTien: 70,
    tomTat: `Khi Nguyệt Đức gặp Thiên Hình tại Phụ Mẫu, tình cảm cha mẹ - con
cái có nhiều vấn đề khó giải quyết. Trong lòng đương số còn thương nhưng ngoài
mặt vẫn mâu thuẫn; khi dứt áo ra đi thì lòng vẫn nặng trĩu.`,
  },

  {
    id: 'nguyet-duc-tai-phuc-duc',
    title: 'Nguyệt Đức tại Phúc Đức',
    sao: ['Nguyệt Đức'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `Khi Nguyệt Đức tọa Phúc Đức, đây là điềm lành báo về một tâm tính
từ bi, lương thiện. Đương số sống nhân nghĩa, biết trước biết sau; dòng họ tổ
tiên có nhiều người hiền lành, nhân hậu, biết nhường nhịn nhau và hay làm
phúc.`,
  },

  {
    id: 'nguyet-duc-tai-phuc-duc-thien-duc',
    title: 'Nguyệt Đức + Thiên Đức tại Phúc Đức - Họ hàng phúc hậu',
    sao: ['Nguyệt Đức'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Đức'],
    doUuTien: 73,
    tomTat: `Khi Nguyệt Đức cùng **Thiên Đức** đồng cung tại Phúc Đức, họ hàng
đương số phúc hậu, mồ mả thuận vị. Mồ mả tổ tiên thường đặt gần nơi thờ Phật
Bà Quan Âm.`,
  },

  {
    id: 'nguyet-duc-tai-phuc-duc-tu-duc',
    title: 'Nguyệt Đức + Tứ Đức tại Phúc Đức - Phúc ấm bền',
    sao: ['Nguyệt Đức'],
    cung: ['Phúc Đức'],
    ketHop: ['Long Đức', 'Phúc Đức', 'Thiên Đức', 'Nguyệt Đức'],
    doUuTien: 73,
    tomTat: `Khi Nguyệt Đức hội đủ bộ Tứ Đức (Long Đức, Phúc Đức, Thiên Đức,
Nguyệt Đức) tại Phúc Đức, phúc ấm tổ tiên càng bền. Đời sống tinh thần con
cháu có điểm tựa vững chắc.`,
  },

  {
    id: 'nguyet-duc-tai-phuc-duc-kiep',
    title: 'Nguyệt Đức + Địa Kiếp tại Phúc Đức - Sai lầm tội lỗi',
    sao: ['Nguyệt Đức'],
    cung: ['Phúc Đức'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Khi Nguyệt Đức gặp Địa Kiếp tại Phúc Đức, đương số dễ xảy ra sai
lầm, tội lỗi rồi mới biết sai mà sửa. Việc nhận ra lỗi để "quay đầu là bờ" vẫn
tốt hơn mải mê đi trên đường sai.`,
  },

  {
    id: 'nguyet-duc-tai-phuc-duc-hoa-ky',
    title: 'Nguyệt Đức + Hóa Kỵ tại Phúc Đức - Sai lầm tội lỗi',
    sao: ['Nguyệt Đức'],
    cung: ['Phúc Đức'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `Khi Nguyệt Đức gặp **Hóa Kỵ** tại Phúc Đức, đương số dễ xảy ra
sai lầm, tội lỗi rồi mới biết sai mà sửa. Việc nhận ra lỗi để "quay đầu là bờ"
vẫn tốt hơn mải mê đi trên đường sai.`,
  },

  {
    id: 'nguyet-duc-tai-phuc-duc-linh',
    title: 'Nguyệt Đức + Linh Tinh tại Phúc Đức - Sai lầm tội lỗi',
    sao: ['Nguyệt Đức'],
    cung: ['Phúc Đức'],
    ketHop: ['Linh Tinh'],
    doUuTien: 70,
    tomTat: `Khi Nguyệt Đức gặp Linh Tinh tại Phúc Đức, đương số dễ xảy ra sai
lầm, tội lỗi rồi mới biết sai mà sửa. Việc nhận ra lỗi để "quay đầu là bờ" vẫn
tốt hơn mải mê đi trên đường sai.`,
  },

  {
    id: 'nguyet-duc-tai-dien-trach',
    title: 'Nguyệt Đức tại Điền Trạch',
    sao: ['Nguyệt Đức'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Khi Nguyệt Đức tọa Điền Trạch, đương số đi đâu cũng có người giúp
đỡ về nhà cửa, nơi ăn chốn ở. Quan hệ với làng xóm láng giềng tốt đẹp, biết
nhường nhịn lẫn nhau và ít tai tiếng. Đương số ăn gì hay ở đâu đều chấp nhận
được, không đòi hỏi hay yêu cầu cao.`,
  },

  {
    id: 'nguyet-duc-tai-dien-trach-tu-duc',
    title: 'Nguyệt Đức + Tứ Đức tại Điền Trạch - Nhà thanh tịnh',
    sao: ['Nguyệt Đức'],
    cung: ['Điền Trạch'],
    ketHop: ['Long Đức', 'Phúc Đức', 'Thiên Đức', 'Nguyệt Đức'],
    doUuTien: 70,
    tomTat: `Khi Nguyệt Đức hội đủ bộ Tứ Đức (Long Đức, Phúc Đức, Thiên Đức,
Nguyệt Đức) tại Điền Trạch, nhà cửa thanh tịnh và mang đậm tính tâm linh.`,
  },

  {
    id: 'nguyet-duc-tai-dien-trach-kinh',
    title: 'Nguyệt Đức + Kình Dương tại Điền Trạch - Thị phi hàng xóm',
    sao: ['Nguyệt Đức'],
    cung: ['Điền Trạch'],
    ketHop: ['Kình Dương'],
    doUuTien: 68,
    tomTat: `Khi Nguyệt Đức gặp Kình Dương tại Điền Trạch, đương số phải trải
qua rắc rối hoặc thị phi với hàng xóm; tuy vậy nhờ thế mà hai bên hiểu nhau và
sống biết điều hơn.`,
  },

  {
    id: 'nguyet-duc-tai-dien-trach-da',
    title: 'Nguyệt Đức + Đà La tại Điền Trạch - Thị phi hàng xóm',
    sao: ['Nguyệt Đức'],
    cung: ['Điền Trạch'],
    ketHop: ['Đà La'],
    doUuTien: 68,
    tomTat: `Khi Nguyệt Đức gặp Đà La tại Điền Trạch, đương số phải trải qua
rắc rối hoặc thị phi với hàng xóm; tuy vậy nhờ thế mà hai bên hiểu nhau và
sống biết điều hơn.`,
  },

  {
    id: 'nguyet-duc-tai-dien-trach-hoa',
    title: 'Nguyệt Đức + Hỏa Tinh tại Điền Trạch - Thị phi hàng xóm',
    sao: ['Nguyệt Đức'],
    cung: ['Điền Trạch'],
    ketHop: ['Hỏa Tinh'],
    doUuTien: 68,
    tomTat: `Khi Nguyệt Đức gặp Hỏa Tinh tại Điền Trạch, đương số phải trải
qua rắc rối hoặc thị phi với hàng xóm; tuy vậy nhờ thế mà hai bên hiểu nhau
và sống biết điều hơn.`,
  },

  {
    id: 'nguyet-duc-tai-dien-trach-linh',
    title: 'Nguyệt Đức + Linh Tinh tại Điền Trạch - Thị phi hàng xóm',
    sao: ['Nguyệt Đức'],
    cung: ['Điền Trạch'],
    ketHop: ['Linh Tinh'],
    doUuTien: 68,
    tomTat: `Khi Nguyệt Đức gặp Linh Tinh tại Điền Trạch, đương số phải trải
qua rắc rối hoặc thị phi với hàng xóm; tuy vậy nhờ thế mà hai bên hiểu nhau
và sống biết điều hơn.`,
  },

  {
    id: 'nguyet-duc-tai-dien-trach-khong',
    title: 'Nguyệt Đức + Địa Không tại Điền Trạch - Thị phi hàng xóm',
    sao: ['Nguyệt Đức'],
    cung: ['Điền Trạch'],
    ketHop: ['Địa Không'],
    doUuTien: 68,
    tomTat: `Khi Nguyệt Đức gặp Địa Không tại Điền Trạch, đương số phải trải
qua rắc rối hoặc thị phi với hàng xóm; tuy vậy nhờ thế mà hai bên hiểu nhau
và sống biết điều hơn.`,
  },

  {
    id: 'nguyet-duc-tai-dien-trach-kiep',
    title: 'Nguyệt Đức + Địa Kiếp tại Điền Trạch - Thị phi hàng xóm',
    sao: ['Nguyệt Đức'],
    cung: ['Điền Trạch'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 68,
    tomTat: `Khi Nguyệt Đức gặp Địa Kiếp tại Điền Trạch, đương số phải trải
qua rắc rối hoặc thị phi với hàng xóm; tuy vậy nhờ thế mà hai bên hiểu nhau
và sống biết điều hơn.`,
  },

  {
    id: 'nguyet-duc-tai-quan-loc',
    title: 'Nguyệt Đức tại Quan Lộc',
    sao: ['Nguyệt Đức'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `Khi Nguyệt Đức tọa Quan Lộc, đương số thường gặp may mắn trong
công danh và là người có lương tâm nghề nghiệp. Đạo đức cao, làm việc với cái
tâm chứ không bon chen hay dùng thủ đoạn.`,
  },

  {
    id: 'nguyet-duc-tai-quan-loc-tu-duc',
    title: 'Nguyệt Đức + Tứ Đức tại Quan Lộc - Tôn giáo cứu người',
    sao: ['Nguyệt Đức'],
    cung: ['Quan Lộc'],
    ketHop: ['Long Đức', 'Phúc Đức', 'Thiên Đức', 'Nguyệt Đức'],
    doUuTien: 73,
    tomTat: `Khi Nguyệt Đức hội đủ bộ Tứ Đức (Long Đức, Phúc Đức, Thiên Đức,
Nguyệt Đức) tại Quan Lộc, đương số theo đuổi công việc liên quan tới tôn giáo,
tâm linh hoặc các ngành nghề cứu người, giúp đời.`,
  },

  {
    id: 'nguyet-duc-tai-quan-loc-thien-hinh',
    title: 'Nguyệt Đức + Thiên Hình tại Quan Lộc - Nghề tích phúc đức',
    sao: ['Nguyệt Đức'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Hình'],
    doUuTien: 70,
    tomTat: `Khi Nguyệt Đức gặp Thiên Hình tại Quan Lộc, đương số nên chọn
nghề tích phúc đức để giảm tai họa — như bác sĩ, điều dưỡng, công an cứu hộ.`,
  },

  {
    id: 'nguyet-duc-tai-quan-loc-kinh',
    title: 'Nguyệt Đức + Kình Dương tại Quan Lộc - Nghề tích phúc đức',
    sao: ['Nguyệt Đức'],
    cung: ['Quan Lộc'],
    ketHop: ['Kình Dương'],
    doUuTien: 70,
    tomTat: `Khi Nguyệt Đức gặp Kình Dương tại Quan Lộc, đương số nên chọn
nghề tích phúc đức để giảm tai họa — như bác sĩ, điều dưỡng, công an cứu hộ.`,
  },

  {
    id: 'nguyet-duc-tai-quan-loc-hoa-tinh',
    title: 'Nguyệt Đức + Hỏa Tinh tại Quan Lộc - Nghề tích phúc đức',
    sao: ['Nguyệt Đức'],
    cung: ['Quan Lộc'],
    ketHop: ['Hỏa Tinh'],
    doUuTien: 70,
    tomTat: `Khi Nguyệt Đức gặp Hỏa Tinh tại Quan Lộc, đương số nên chọn nghề
tích phúc đức để giảm tai họa. Một ví dụ điển hình là tài xế lái xe cấp cứu —
kết hợp tính nhanh của Hỏa Tinh với việc cứu người.`,
  },

  {
    id: 'nguyet-duc-tai-quan-loc-hoa-ky',
    title: 'Nguyệt Đức + Hóa Kỵ tại Quan Lộc - Nghề tích phúc đức',
    sao: ['Nguyệt Đức'],
    cung: ['Quan Lộc'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `Khi Nguyệt Đức gặp **Hóa Kỵ** tại Quan Lộc, đương số nên chọn
nghề tích phúc đức để giảm tai họa — như bác sĩ, điều dưỡng, công an cứu hộ.`,
  },

  {
    id: 'nguyet-duc-tai-no-boc',
    title: 'Nguyệt Đức tại Nô Bộc',
    sao: ['Nguyệt Đức'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Khi Nguyệt Đức tọa Nô Bộc, bè bạn cùng người làm, người giúp việc
của đương số thường hiền lành, nhân hậu, biết nhường nhịn và giúp đỡ nhau.
Đương số hay có nhân duyên được người nữ giới giúp đỡ; bạn tốt thường ít,
nhưng đã quen rồi thì gắn bó lâu dài.

Khi Nguyệt Đức đi cùng hung tinh, bạn xấu sẽ nhiều hơn bạn tốt. Tuy vậy nếu
đương số kết được bạn tốt thì mối giao tình rất bền lâu, có khả năng đồng hành
cùng nhau đến già.`,
  },

  {
    id: 'nguyet-duc-tai-thien-di',
    title: 'Nguyệt Đức tại Thiên Di',
    sao: ['Nguyệt Đức'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `Khi Nguyệt Đức tọa Thiên Di, đương số ra ngoài thường nhẹ nhàng,
khiêm tốn — vừa giúp đỡ mọi người, vừa được mọi người giúp đỡ. Ra ngoài hay có
nhân duyên với nữ giới giúp đỡ; có người nhận làm mẹ nuôi, đỡ đầu.`,
  },

  {
    id: 'nguyet-duc-tai-thien-di-tu-duc',
    title: 'Nguyệt Đức + Tứ Đức tại Thiên Di - Lui tới nơi tâm linh',
    sao: ['Nguyệt Đức'],
    cung: ['Thiên Di'],
    ketHop: ['Long Đức', 'Phúc Đức', 'Thiên Đức', 'Nguyệt Đức'],
    doUuTien: 70,
    tomTat: `Khi Nguyệt Đức hội đủ bộ Tứ Đức (Long Đức, Phúc Đức, Thiên Đức,
Nguyệt Đức) tại Thiên Di, đương số hay lui tới nơi tâm linh, tín ngưỡng. Có
khi đương số làm công việc thường xuyên đến môi trường tâm linh — như phóng
viên thu thập thông tin văn hóa, nhà nghiên cứu tôn giáo.`,
  },

  {
    id: 'nguyet-duc-tai-thien-di-kinh',
    title: 'Nguyệt Đức + Kình Dương tại Thiên Di - Tai nạn bất ngờ',
    sao: ['Nguyệt Đức'],
    cung: ['Thiên Di'],
    ketHop: ['Kình Dương'],
    doUuTien: 70,
    tomTat: `Khi Nguyệt Đức gặp Kình Dương tại Thiên Di, đương số dễ xảy ra
tai nạn bất ngờ; vận số phải nhờ người cứu giúp. Đây là cách "nghiệp duyên"
đưa đến sự kết nối nhưng không cát lợi.`,
  },

  {
    id: 'nguyet-duc-tai-thien-di-thien-hinh',
    title: 'Nguyệt Đức + Thiên Hình tại Thiên Di - Tai nạn bất ngờ',
    sao: ['Nguyệt Đức'],
    cung: ['Thiên Di'],
    ketHop: ['Thiên Hình'],
    doUuTien: 70,
    tomTat: `Khi Nguyệt Đức gặp Thiên Hình tại Thiên Di, đương số dễ xảy ra
tai nạn bất ngờ; vận số phải nhờ người cứu giúp. Đây là cách "nghiệp duyên"
đưa đến sự kết nối nhưng không cát lợi.`,
  },

  {
    id: 'nguyet-duc-tai-tat-ach',
    title: 'Nguyệt Đức tại Tật Ách',
    sao: ['Nguyệt Đức'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `Khi Nguyệt Đức tọa Tật Ách, đương số có khả năng giải trừ tai
nạn, bệnh tật nhỏ — sử dụng phước đức và may mắn để cứu chữa. Càng tích phúc
nhiều, càng nhiều may mắn thoát tai họa; bệnh tật thì gặp được bác sĩ giỏi
cứu chữa.

Đặc trưng tâm linh tại cung này: khi gặp tai họa, đương số hay được người phụ
nữ cứu giúp; thường đi chùa xin Đức Bà Quan Âm phù trì. Niềm tin tâm linh ở
đây mang tính "ẩn giấu" — có thể ngoài mặt không công nhận nhưng sâu bên trong
là niềm tin sâu sắc.`,
  },

  {
    id: 'nguyet-duc-tai-tat-ach-khong',
    title: 'Nguyệt Đức + Địa Không tại Tật Ách - Niềm tin mù quáng',
    sao: ['Nguyệt Đức'],
    cung: ['Tật Ách'],
    ketHop: ['Địa Không'],
    doUuTien: 70,
    tomTat: `Khi Nguyệt Đức gặp Địa Không tại Tật Ách, đương số dễ hình thành
niềm tin mù quáng — tin vào tâm linh chữa bệnh tốt hơn khoa học. Cần thận
trọng.`,
  },

  {
    id: 'nguyet-duc-tai-tat-ach-kiep',
    title: 'Nguyệt Đức + Địa Kiếp tại Tật Ách - Niềm tin mù quáng',
    sao: ['Nguyệt Đức'],
    cung: ['Tật Ách'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Khi Nguyệt Đức gặp Địa Kiếp tại Tật Ách, đương số dễ hình thành
niềm tin mù quáng — tin vào tâm linh chữa bệnh tốt hơn khoa học. Cần thận
trọng.`,
  },

  {
    id: 'nguyet-duc-tai-tat-ach-hoa-ky',
    title: 'Nguyệt Đức + Hóa Kỵ tại Tật Ách - Niềm tin mù quáng',
    sao: ['Nguyệt Đức'],
    cung: ['Tật Ách'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `Khi Nguyệt Đức gặp **Hóa Kỵ** tại Tật Ách, đương số dễ hình thành
niềm tin mù quáng — tin vào tâm linh chữa bệnh tốt hơn khoa học. Cần thận
trọng.`,
  },

  {
    id: 'nguyet-duc-tai-tai-bach',
    title: 'Nguyệt Đức tại Tài Bạch',
    sao: ['Nguyệt Đức'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `Khi Nguyệt Đức tọa Tài Bạch, đương số kiếm tiền lương thiện,
không thích cạnh tranh hay tranh đấu vì tiền. Đôi khi đương số sẵn sàng chấp
nhận thiệt bước nếu có tranh chấp; hay dùng tiền đem đi làm từ thiện, công
đức. Đường tiền bạc thường hay được giúp đỡ hoặc gặp may, không có vấn đề
khó khăn.`,
  },

  {
    id: 'nguyet-duc-tai-tai-bach-tu-duc',
    title: 'Nguyệt Đức + Tứ Đức tại Tài Bạch - Kiếm tiền tâm linh',
    sao: ['Nguyệt Đức'],
    cung: ['Tài Bạch'],
    ketHop: ['Long Đức', 'Phúc Đức', 'Thiên Đức', 'Nguyệt Đức'],
    doUuTien: 70,
    tomTat: `Khi Nguyệt Đức hội đủ bộ Tứ Đức (Long Đức, Phúc Đức, Thiên Đức,
Nguyệt Đức) tại Tài Bạch, đường tiền bạc của đương số có yếu tố tâm linh.
Người làm việc tâm linh cần có tâm, chỉn chu và biết nghĩ cho người khác —
nhờ vậy dễ được kính trọng và được giới thiệu nhiều mối làm ăn. Ví dụ: chuyên
đi quay phim chụp ảnh đám ma, hướng dẫn viên du lịch tâm linh.`,
  },

  {
    id: 'nguyet-duc-tai-tu-tuc',
    title: 'Nguyệt Đức tại Tử Tức',
    sao: ['Nguyệt Đức'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Khi Nguyệt Đức tọa Tử Tức, con cái đương số hòa thuận và hiếu
thảo, biết lo cho cha mẹ — nhất là về hậu vận.`,
  },

  {
    id: 'nguyet-duc-tai-tu-tuc-hoa-tinh',
    title: 'Nguyệt Đức + Hỏa Tinh tại Tử Tức - Xa cách',
    sao: ['Nguyệt Đức'],
    cung: ['Tử Tức'],
    ketHop: ['Hỏa Tinh'],
    doUuTien: 70,
    tomTat: `Khi Nguyệt Đức gặp Hỏa Tinh tại Tử Tức, hiện tượng xa cách trong
mối quan hệ cha mẹ - con cái bị thúc đẩy: con cái từ nhỏ khó nuôi, hoặc càng
lớn càng dần xa cách (đi học xa, làm ăn xa nhà). Mặc dù con vẫn báo đáp công
ơn dưỡng dục, nhưng sự xa cách khiến cha mẹ mang nhiều tâm tư nặng lòng.`,
  },

  {
    id: 'nguyet-duc-tai-phu-the',
    title: 'Nguyệt Đức tại Phu Thê - Hợp nhất ở cung này',
    sao: ['Nguyệt Đức'],
    cung: ['Phu Thê'],
    doUuTien: 80,
    tomTat: `Nguyệt Đức hợp nhất ở cung Phu Thê vì là sao duyên nợ — báo hiệu
vợ chồng có sự ràng buộc khó rời. Người hôn phối có nhan sắc, đứng đắn, nhẹ
nhàng và điềm đạm; bản tính hiền lành, hay giúp đỡ người khác và được nhiều
người quý mến.

Trong cuộc sống hôn nhân, người hôn phối thường là người chấp nhận nhún nhường
để tránh mâu thuẫn, cãi vã.

Đặc biệt với nữ mệnh (cung Thê), người vợ nhu mỳ, hiền hậu, dịu dàng, đoan
chính và ngay thẳng. Đương số khéo léo trong nữ công gia chánh, nội trợ, thêu
thùa, có năng khiếu hội họa và âm nhạc.`,
  },

  {
    id: 'nguyet-duc-tai-phu-the-khoi-viet-xuong-khuc-hoa-loc',
    title: 'Nguyệt Đức + Khôi Việt + Xương Khúc + Hóa Lộc tại Phu Thê - Sắt son',
    sao: ['Nguyệt Đức'],
    cung: ['Phu Thê'],
    ketHop: ['Thiên Khôi', 'Thiên Việt', 'Văn Xương', 'Văn Khúc', 'Hóa Lộc'],
    doUuTien: 73,
    tomTat: `Khi Nguyệt Đức gặp Thiên Khôi, Thiên Việt, **Văn Xương**, **Văn
Khúc** cùng **Hóa Lộc** tại Phu Thê, hôn nhân bền vững, tình nghĩa vợ chồng
sắt son.`,
  },

  {
    id: 'nguyet-duc-tai-phu-the-kinh',
    title: 'Nguyệt Đức + Kình Dương tại Phu Thê - Oan gia ngõ hẹp',
    sao: ['Nguyệt Đức'],
    cung: ['Phu Thê'],
    ketHop: ['Kình Dương'],
    doUuTien: 70,
    tomTat: `Khi Nguyệt Đức gặp Kình Dương tại Phu Thê, vợ chồng đương số
mang cách "oan gia ngõ hẹp" — đến với nhau nhiều khổ đau nhưng khó dứt, như
để trả một món nợ tiền duyên.`,
  },

  {
    id: 'nguyet-duc-tai-phu-the-da',
    title: 'Nguyệt Đức + Đà La tại Phu Thê - Oan gia ngõ hẹp',
    sao: ['Nguyệt Đức'],
    cung: ['Phu Thê'],
    ketHop: ['Đà La'],
    doUuTien: 70,
    tomTat: `Khi Nguyệt Đức gặp Đà La tại Phu Thê, vợ chồng đương số mang
cách "oan gia ngõ hẹp" — đến với nhau nhiều khổ đau nhưng khó dứt, như để
trả một món nợ tiền duyên.`,
  },

  {
    id: 'nguyet-duc-tai-phu-the-hoa-tinh',
    title: 'Nguyệt Đức + Hỏa Tinh tại Phu Thê - Oan gia ngõ hẹp',
    sao: ['Nguyệt Đức'],
    cung: ['Phu Thê'],
    ketHop: ['Hỏa Tinh'],
    doUuTien: 70,
    tomTat: `Khi Nguyệt Đức gặp Hỏa Tinh tại Phu Thê, vợ chồng đương số mang
cách "oan gia ngõ hẹp" — đến với nhau nhiều khổ đau nhưng khó dứt, như để
trả một món nợ tiền duyên.`,
  },

  {
    id: 'nguyet-duc-tai-phu-the-kiep',
    title: 'Nguyệt Đức + Địa Kiếp tại Phu Thê - Oan gia ngõ hẹp',
    sao: ['Nguyệt Đức'],
    cung: ['Phu Thê'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Khi Nguyệt Đức gặp Địa Kiếp tại Phu Thê, vợ chồng đương số mang
cách "oan gia ngõ hẹp" — đến với nhau nhiều khổ đau nhưng khó dứt, như để
trả một món nợ tiền duyên.`,
  },

  {
    id: 'nguyet-duc-tai-phu-the-khong',
    title: 'Nguyệt Đức + Địa Không tại Phu Thê - Oan gia ngõ hẹp',
    sao: ['Nguyệt Đức'],
    cung: ['Phu Thê'],
    ketHop: ['Địa Không'],
    doUuTien: 70,
    tomTat: `Khi Nguyệt Đức gặp Địa Không tại Phu Thê, vợ chồng đương số mang
cách "oan gia ngõ hẹp" — đến với nhau nhiều khổ đau nhưng khó dứt, như để
trả một món nợ tiền duyên.`,
  },

  {
    id: 'nguyet-duc-tai-huynh-de',
    title: 'Nguyệt Đức tại Huynh Đệ',
    sao: ['Nguyệt Đức'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Khi Nguyệt Đức tọa Huynh Đệ, anh chị em đương số thuận hòa, hay
giúp đỡ lẫn nhau, biết yêu thương và đùm bọc nhau.`,
  },

  {
    id: 'nguyet-duc-tai-huynh-de-tu-duc',
    title: 'Nguyệt Đức + Tứ Đức tại Huynh Đệ - Hướng đạo tu hành',
    sao: ['Nguyệt Đức'],
    cung: ['Huynh Đệ'],
    ketHop: ['Long Đức', 'Phúc Đức', 'Thiên Đức', 'Nguyệt Đức'],
    doUuTien: 70,
    tomTat: `Khi Nguyệt Đức hội đủ bộ Tứ Đức (Long Đức, Phúc Đức, Thiên Đức,
Nguyệt Đức) tại Huynh Đệ, anh em đương số có người hướng đạo, thích tu hành
và làm việc thiện để tích phúc đức.`,
  },

  {
    id: 'nguyet-duc-tai-huynh-de-sat-tinh',
    title: 'Nguyệt Đức + Tứ Sát tại Huynh Đệ - Anh em thành gánh nặng',
    sao: ['Nguyệt Đức'],
    cung: ['Huynh Đệ'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 68,
    tomTat: `Khi Nguyệt Đức gặp bộ Tứ Sát (Kình Dương, Đà La, Hỏa Tinh, Linh
Tinh) tại Huynh Đệ, anh em đương số lại trở thành gánh nặng — muốn giúp đỡ
nhưng kết cục lại làm phiền và gây liên lụy.`,
  },
];
