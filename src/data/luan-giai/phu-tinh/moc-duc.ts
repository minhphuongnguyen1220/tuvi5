import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO MỘC DỤC - Thủy, Dâm Tinh nhỏ.
 *
 * Vị trí THỨ 2 trong Vòng Trường Sinh 12 sao:
 * Trường Sinh: MỘC DỤC: Quan Đới: Lâm Quan: Đế Vượng: Suy
 * Bệnh: Tử: Mộ: Tuyệt: Thai: Dưỡng
 *
 * An theo CỤC, đứng sau Trường Sinh 1 cung.
 *
 * Đặc trưng:
 * - Là phụ tinh nhưng không có nhiều ý nghĩa (DÂM TINH NHỎ)
 * - Tượng "tuổi dậy thì, mới lớn"
 * - Hay thay đổi, chí không bền, cả thèm chóng chán
 * - Chú trọng vẻ bề ngoài (tắm rửa, chưng diện, làm dáng)
 */
export const luanGiai_MocDuc: DoanLuanGiai[] = [
  {
    id: 'moc-duc-tinh-chat-chung',
    title: 'Mộc Dục - Đặc tính chung',
    sao: ['Mộc Dục'],
    doUuTien: 32,
    tomTat: `**Mộc Dục** là phụ tinh thuộc nhóm Dâm Tinh nhỏ, đứng ở vị trí thứ
2 trong vòng Trường Sinh, ngay sau Trường Sinh một cung và an theo Cục
của lá số. Ngũ hành sao này thuộc Thủy.

Hình tượng của Mộc Dục là tuổi dậy thì, mới lớn — nông nổi, ưa tắm rửa,
chưng diện, phô trương, làm dáng, rất quan trọng vẻ bề ngoài. Sao cũng
gắn với xác thịt, lông tóc và nét phong lưu, nhàn hạ.

Trong vòng Trường Sinh, Mộc Dục tượng trưng cho giai đoạn mới lớn sau
khi sinh ra. Đây là một dâm tinh nhỏ, không mạnh bằng Đào Hoa, Tham Lang
hay Thiên Riêu.

Bản thân Mộc Dục là phụ tinh không có nhiều ý nghĩa độc lập, nhưng vẫn
ảnh hưởng không nhỏ đến tính cách và một số khía cạnh đời sống của
đương số — đặc biệt rõ rệt ở những lá số Mệnh Vô Chính Diệu.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'moc-duc-vcd-quan-diem-khong-vung',
    title: 'Mệnh VCD + Mộc Dục - Quan điểm không vững',
    sao: ['Mộc Dục'],
    cung: ['Mệnh'],
    doUuTien: 65,
    tomTat: `Khi Mệnh Vô Chính Diệu nằm tại đất Mộc Dục, đặc tính hay thay
đổi của sao càng nổi bật trên đương số.

Chủ mệnh trở thành người quan điểm không rõ ràng, hay thay đổi, dễ bị
môi trường bên ngoài tác động làm lung lay và hay bỏ dở công việc.

Việc học hành thường gián đoạn, dù có học cũng khó đỗ; đương số hay
thay đổi ngành học hoặc đổi nghề mà việc nào cũng dở dở dang dang.

Cảnh báo: đây là cách cục đặc biệt xấu với người Mệnh VCD — cần có
sao Phúc Thiện đi cùng (Quan Phúc, Quang Quý, **Tứ Đức**) để giảm bớt.`,
  },

  {
    id: 'moc-duc-van-tinh-quang-quy-dong-y',
    title: 'Mộc Dục + Văn Xương + Khôi Việt + Quang Quý - Đông y',
    sao: ['Mộc Dục'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Ân Quang'],
    doUuTien: 55,
    tomTat: `Khi Mộc Dục đi cùng Văn Xương, Văn Khúc, Khôi Việt, Tả Hữu, Ân
Quang và Thiên Quý, đương số có thể thành công trong y khoa, đặc biệt
là Đông y.

Phân tích bộ sao: Văn Xương + Văn Khúc đem trí tuệ chuyên môn; Khôi
Việt là quý nhân nâng đỡ; Quang Quý là phúc tinh quý nhân; Mộc Dục
thuộc Thủy mang đặc tính dưỡng sinh, thảo dược; Tả Hữu giúp đương số
được người tin cậy trợ lực.

Bộ sao này phù hợp với Đông y, y học cổ truyền và dưỡng sinh — tính
dâm của Mộc Dục được chuyển hóa thành dưỡng sinh học.`,
  },

  {
    id: 'moc-duc-dao-hong-rieu-sat-trang-hoa',
    title: 'Mộc Dục + Đào Hồng + Riêu + sát tinh - Trăng hoa ham muốn',
    sao: ['Mộc Dục'],
    ketHop: ['Đào Hoa', 'Hồng Loan', 'Thiên Riêu'],
    doUuTien: 55,
    tomTat: `Khi Mộc Dục hội cùng Đào Hoa, Hồng Loan, Thiên Riêu và sát
tinh, tính chất trăng hoa, ham muốn thể xác của đương số bộc lộ mạnh
mẽ. Bộ Đào Hồng + Mộc Dục + Riêu là các dâm tinh cộng hưởng, khuếch
đại tính dâm dục, khiến chủ mệnh dễ rơi vào tình ái xác thịt và các
mối quan hệ ngoài luồng.

Hệ quả thường thấy là đường tình cảm đổ vỡ vì tiểu tam, hôn nhân trắc
trở, chia ly — đặc biệt nguy hiểm với phụ nữ.

Hóa giải: cần Tứ Đức (Long Đức, Phúc Đức, Thiên Đức, Nguyệt Đức) để
chế dâm tính, Quan Phúc và Quang Quý giảm tác họa, hoặc Vũ Khúc để
chuyển dâm thành quý.`,
  },

  {
    id: 'moc-duc-kinh-da-ky-tat-ach-benh-sinh-san',
    title: 'Mộc Dục + Kình Đà + Hóa Kỵ + Không Kiếp tại Tật - Bệnh sinh sản',
    sao: ['Mộc Dục'],
    cung: ['Tật Ách'],
    ketHop: ['Kình Dương', 'Đà La', 'Hóa Kỵ'],
    doUuTien: 60,
    tomTat: `Mộc Dục cùng Kình Dương, Đà La, Hóa Kỵ và Không Kiếp tại Tật
Ách báo nguy cơ bệnh sinh sản, sinh lý cho đương số.

Mộc Dục chủ về bộ phận sinh dục và đường tiết niệu; cộng thêm sát
tinh, bệnh đường tình dục, tiết niệu của chủ mệnh tăng cao. Sao
thuộc Thủy nên cũng dễ kéo theo bệnh tim mạch.

Hóa giải cần Tử Vi, Thiên Phủ, Thiên Lương, Thiên Đồng cùng Hóa
Khoa hội chiếu để giảm bớt.`,
  },

  {
    id: 'moc-duc-tat-ach-nu-sinh-san',
    title: 'Mộc Dục + sát tinh tại Tật - Nữ mệnh sinh sản',
    sao: ['Mộc Dục'],
    cung: ['Tật Ách'],
    gioiTinh: 'Nữ',
    ketHop: ['Kình Dương', 'Đà La', 'Hóa Kỵ'],
    doUuTien: 55,
    tomTat: `Với nữ mệnh, khi Mộc Dục hội Kình Dương, Đà La, Hóa Kỵ và Không
Kiếp tại Tật Ách, vấn đề sinh sản trở nên nghiêm trọng: dễ hư thai,
khó sinh, sảy thai ngoài ý muốn.`,
  },

  {
    id: 'moc-duc-sat-tinh-menh-quan-phu-nong-noi',
    title: 'Mộc Dục + sát tinh tại Mệnh/Quan/Phu - Nông nổi thiếu kiên định',
    sao: ['Mộc Dục'],
    cung: ['Mệnh', 'Quan Lộc', 'Phu Thê'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh'],
    doUuTien: 60,
    tomTat: `Mộc Dục cùng sát tinh đóng tại Mệnh, Quan Lộc hoặc Phu Thê làm
tăng tính nông nổi và thiếu kiên định của đương số.

Chủ mệnh dễ bỏ dở công việc, sự nghiệp khó ổn định, hay rơi vào cảnh
"đứng núi này trông núi nọ".

Trong hôn nhân, đương số quyết định vội vàng, thiếu suy nghĩ chín
chắn — chính là nguyên nhân dẫn đến trắc trở và chia ly.

Hóa giải: cần sao Phúc Thiện ổn định như Quan Phúc, Tứ Đức cùng
Tuần Triệt giảm bớt tính bốc đồng.`,
  },

  {
    id: 'moc-duc-linh-hoa-kinh-thu-cong',
    title: 'Mộc Dục + Linh Tinh + Hỏa Tinh + Kình Dương - Nghề thủ công',
    sao: ['Mộc Dục'],
    cung: ['Quan Lộc'],
    ketHop: ['Linh Tinh', 'Hỏa Tinh'],
    doUuTien: 50,
    tomTat: `Mộc Dục cùng Linh Tinh, Hỏa Tinh và Kình Dương tại Quan Lộc
khiến đương số hợp với các nghề thủ công.

Mộc Dục chú trọng vẻ ngoài; Hỏa Linh + Kình mang nghệ thuật cắt may,
đốt nung; hợp lại thành ngành nghề thủ công liên quan đến làm đẹp:
trang điểm, đồ mỹ ký, trang sức, các ngành thủ công, mỹ nghệ.

Đặc trưng cách cục: chủ mệnh kiếm tiền bằng đôi tay khéo léo, không
cần học vấn cao.`,
  },

  {
    id: 'moc-duc-hoa-ky-sat-tu-tuc-con-hu-pha-tan',
    title: 'Mộc Dục + Hóa Kỵ + sát tinh tại Tử Tức - Con hư phá tán',
    sao: ['Mộc Dục'],
    cung: ['Tử Tức'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 50,
    tomTat: `Mộc Dục cùng Hóa Kỵ và nhiều hung sát bại tinh tại Tử Tức báo
con cái của đương số dễ hư hỏng, phá tán.

Con cái ăn chơi, sành điệu, càng lớn càng dễ hư hỏng, có xu hướng
phá tán tài sản của cha mẹ, đam mê hưởng thụ và không lo học hành.

Hóa giải: việc giáo dục từ nhỏ rất quan trọng; cần thêm Quan Phúc
và Tứ Đức bù đắp nhân cách cho con.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // MỘC DỤC TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'moc-duc-tai-menh',
    title: 'Mộc Dục tại Mệnh',
    sao: ['Mộc Dục'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `**Mộc Dục** thủ Mệnh đem lại cho đương số tính cách của tuổi
trẻ mới lớn — nông nổi, sĩ diện và rất chú trọng vẻ bề ngoài.

Về tướng mạo, chủ mệnh đam mê chưng diện, trang điểm, có gu thẩm
mỹ và bộc lộ cá tính qua cách ăn mặc.

Tính cách thể hiện rõ nét cô gái hay chàng trai mới lớn, dậy thì:
hay thay đổi, chí không bền, thích nhanh mà chán cũng nhanh, hay bỏ
dở việc nửa chừng, nông nổi, sĩ diện và dễ bất đồng. Chỉ cần một mồi
lửa, đương số có thể vì sĩ diện mà gây tai họa. Sự quan tâm tới
hình thức bên ngoài và đặc tính thích làm đẹp luôn hiện diện rõ
ràng.

Về nghề nghiệp, chủ mệnh hợp với các ngành làm đẹp, thẩm mỹ, thời
trang, giải trí, vệ sinh, môi trường. Khi hội thêm cát tinh và phúc
thiện, đương số có thể thành bác sỹ hoặc thầy thuốc Đông y.

Cảnh báo riêng cho Mệnh VCD: đặc tính hay thay đổi càng nổi bật,
học hành khó đỗ.`,
  },

  {
    id: 'moc-duc-tai-phu-mau',
    title: 'Mộc Dục tại Phụ Mẫu',
    sao: ['Mộc Dục'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Mộc Dục** tại Phụ Mẫu cho thấy cha mẹ của đương số có nếp
sống gọn gàng, sạch sẽ, ưa tắm rửa và trưng diện, lối sống chỉn chu.

Khi sát tinh hội (Không Kiếp, Kình Đà, Linh Hỏa, Hình Riêu, Hóa
Kỵ): tình trạng hôn nhân của cha mẹ dễ bị xen ngang bởi người thứ
ba, có tính trăng hoa bên ngoài và cha mẹ có thể ngoại tình.`,
  },

  {
    id: 'moc-duc-tai-phuc-duc',
    title: 'Mộc Dục tại Phúc Đức',
    sao: ['Mộc Dục'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `**Mộc Dục** tại cung Phúc Đức cho thấy mồ mả tổ tiên của đương
số được xây đẹp, ở nơi nhiều cỏ cây xung quanh, được chăm sóc, sửa
sang, cải tạo thường xuyên, sạch sẽ và gọn gàng.

Dòng họ chủ mệnh có nhiều người kết hôn sớm hoặc có xu hướng lo
lắng chăm chút mồ mả.`,
  },

  {
    id: 'moc-duc-tai-dien-trach',
    title: 'Mộc Dục tại Điền Trạch',
    sao: ['Mộc Dục'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Mộc Dục** tại Điền Trạch cho thấy nhà cửa và nơi làm việc
của đương số sạch sẽ, gọn gàng, hay được sửa sang, cải tạo, trang
hoàng lại; xung quanh có nhiều cây cối, um tùm.

Vị trí nhà thường có hai khả năng: gần bệnh viện hoặc nơi ô nhiễm
nên hay phải khử khuẩn, vệ sinh; hoặc gần sông nước (do Mộc Dục
thuộc Thủy).`,
  },

  {
    id: 'moc-duc-tai-quan-loc',
    title: 'Mộc Dục tại Quan Lộc',
    sao: ['Mộc Dục'],
    cung: ['Quan Lộc'],
    doUuTien: 76,
    tomTat: `**Mộc Dục** tại Quan Lộc cho thấy công việc của đương số mang
tính đa dạng và hay thay đổi, hay phải quan tâm tới hình thức bên
ngoài, tham gia các hoạt động giải trí.

Hợp nghề liên quan ngoại hình và giao tiếp: truyền thông, thời
trang, thiết kế, vệ sinh, môi trường, hoặc nghề người mẫu, MC, diễn
viên.

Khi sát tinh hội (Linh Tinh, Hỏa Tinh, Kình Dương): chủ mệnh hợp
với các nghề thủ công như trang điểm, làm đồ mỹ ký, mỹ nghệ.`,
  },

  {
    id: 'moc-duc-tai-no-boc',
    title: 'Mộc Dục tại Nô Bộc',
    sao: ['Mộc Dục'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Mộc Dục** tại Nô Bộc cho thấy bạn bè của đương số dễ ăn chơi,
sành điệu.

Khi sát tinh hội (Không Kiếp, Đà La, Đào Hồng): chủ mệnh dễ có
quan hệ ngoài luồng phục vụ ham muốn xác thịt; bạn bè đa phần là
người hưởng thụ.

Bạn bè đương số không phải tri kỷ sâu sắc — chủ yếu giao du nhằm
chơi bời vui vẻ.`,
  },

  {
    id: 'moc-duc-tai-thien-di',
    title: 'Mộc Dục tại Thiên Di',
    sao: ['Mộc Dục'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Mộc Dục** tại Thiên Di cho thấy đương số ra ngoài ăn mặc gọn
gàng, sạch sẽ, tươm tất.

Nét nghịch lý đáng lưu ý là chủ mệnh ở nhà thì thầm kín nhưng ra
ngoài lại thích thể hiện, phô trương — hai mặt đối lập trong cùng
con người, có hai phong cách sống khác hẳn ở nhà và ngoài xã hội.`,
  },

  {
    id: 'moc-duc-tai-tat-ach-bo-phan-sinh-duc',
    title: 'Mộc Dục tại Tật Ách - Bộ phận sinh dục, đường tiết niệu',
    sao: ['Mộc Dục'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `**Mộc Dục** tại Tật Ách cho thấy bộ phận sinh dục và đường tiết
niệu của đương số dễ có vấn đề. Nhu cầu sinh lý của chủ mệnh cao,
dễ kéo theo bệnh đường sinh dục và bệnh tim mạch (do Mộc Dục thuộc
Thủy).

Hóa giải: cần dưỡng sinh, tu thân, tránh quan hệ phóng túng.`,
  },

  {
    id: 'moc-duc-tat-ach-nu-de-kho',
    title: 'Mộc Dục tại Tật Ách - Nữ khó đẻ, sảy thai',
    sao: ['Mộc Dục'],
    cung: ['Tật Ách'],
    gioiTinh: 'Nữ',
    doUuTien: 73,
    tomTat: `Với nữ mệnh, Mộc Dục tại Tật Ách dễ gây khó đẻ và sẩy thai
ngoài ý muốn — tình hình càng xấu hơn khi có thêm ám tinh, sát
tinh như Hóa Kỵ, Đà La, Riêu, Không Kiếp.`,
  },

  {
    id: 'moc-duc-tai-tai-bach',
    title: 'Mộc Dục tại Tài Bạch',
    sao: ['Mộc Dục'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Mộc Dục** tại Tài Bạch cho thấy đương số kiếm tiền từ những
ngành liên quan đến làm đẹp, giải trí, cây xanh.

Mặt tích cực, chủ mệnh có khả năng kiếm tiền từ làm đẹp, thẩm mỹ,
giải trí, nghệ thuật, cây xanh, cảnh quan.

Mặt tiêu cực, đây cũng là sao gây tốn tiền cho việc làm đẹp, đầu
tư thời trang, phô trương tiền của, trang hoàng cho cái bên ngoài
và giải quyết nhu cầu sinh lý.`,
  },

  {
    id: 'moc-duc-tai-tu-tuc',
    title: 'Mộc Dục tại Tử Tức',
    sao: ['Mộc Dục'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Mộc Dục** tại Tử Tức là sao gây ra tình trạng ít con, muộn
con và hao con cho đương số. Con cái thường ăn chơi, sành điệu, đam
mê hưởng thụ.

Khi sát tinh hội (Hóa Kỵ, Kình Đà, Không Kiếp): con cái dễ hư
hỏng, phá tán tài sản của cha mẹ.`,
  },

  {
    id: 'moc-duc-tai-phu-the',
    title: 'Mộc Dục tại Phu Thê',
    sao: ['Mộc Dục'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `**Mộc Dục** tại Phu Thê cho thấy người hôn phối của đương số
sành điệu, thích ăn mặc, chải truốt, nhiều lông tóc, hơi bốc đồng
và hay thay đổi.

Đặc trưng đặc biệt của cách cục này: vợ chồng ăn nằm với nhau rồi
mới cưới — "ăn cơm trước kẻng".`,
  },

  {
    id: 'moc-duc-tai-huynh-de',
    title: 'Mộc Dục tại Huynh Đệ',
    sao: ['Mộc Dục'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Mộc Dục** tại Huynh Đệ cho thấy anh chị em của đương số gọn
gàng, bóng bẩy, vẻ ngoài chỉn chu sành điệu, quan tâm hình thức.

Khi sát bại tinh hội: anh em ăn chơi, đua đòi, thậm chí nghiện
ngập.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // MỘC DỤC VÀO HẠN
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'moc-duc-vao-han',
    title: 'Mộc Dục vào hạn',
    sao: ['Mộc Dục'],
    doUuTien: 50,
    tomTat: `Mộc Dục vào hạn đem đến vận có tính chất ăn chơi, hưởng thụ
cho đương số. Chủ mệnh quan tâm chăm sóc bề ngoài bản thân hơn,
đầu tư thời trang, mỹ phẩm và dễ rơi vào tình ái xác thịt.

Hai mặt của hạn này:

- Tích cực: cải thiện ngoại hình, gặp duyên mới.
- Tiêu cực: sa đà tửu sắc, ngoại tình, hao tài.

Lời khuyên: hạn này chủ mệnh cần tiết chế ham muốn, hướng vào sáng
tạo và làm đẹp tích cực thay vì phù hoa dục vọng.`,
  },
];
