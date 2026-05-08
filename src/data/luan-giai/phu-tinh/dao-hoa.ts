import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO ĐÀO HOA - Dâm Tinh, Mộc đới Thủy
 * (File đầu tiên của bộ Tam Minh - chứa phần chung Đào Hồng + Tam Minh Đào Hồng Hỷ)
 */
export const luanGiai_DaoHoa: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung sao Đào Hoa
  // ============================================================
  {
    id: 'dao-hoa-tinh-chat-chung',
    title: 'Đào Hoa - Đặc tính chung',
    sao: ['Đào Hoa'],
    doUuTien: 30,
    tomTat: `**Đào Hoa** thuộc nhóm Dâm Tinh, ngũ hành Mộc đới Thủy, hóa khí về
tình và yểu. Đặc trưng nổi bật là sắc đẹp, duyên dáng, sức hấp dẫn cùng tài
năng nghệ thuật và sức quyến rũ tự nhiên.

Về vị trí an sao, Đào Hoa chỉ xuất hiện tại bốn cung Tý, Ngọ, Mão, Dậu — gọi
chung là Tứ Chính hay Đào Hoa địa.

Vai trò của sao này trong lá số:

- Tăng sức hấp dẫn cá nhân, khả năng giao tiếp và thẩm mỹ với người khác giới
- Có thể mang đến cả may mắn lẫn thị phi
- Ảnh hưởng trực tiếp đến cưới xin, đời sống chăn gối, thi cử và công danh`,

    chiTiet: `## Tính chất "vừa cát vừa hung"

Đào Hoa bản thân đã mang tính vừa cát vừa hung — tốt xấu thực sự phụ thuộc
vào việc hội họp với những sao nào trong lá số.

## Cách cục đặc biệt

Khi Đào Hoa nằm trong tam hợp hoặc đồng cung với Thiên Không và Kiếp Sát,
đương số có bộ Đào - Không - Sát nổi bật trong lá số.

## Khía cạnh sự nghiệp

Đương số dễ nổi bật trong môi trường có nhiều người khác giới, phát triển tốt
ở các lĩnh vực nghệ thuật, sáng tạo, PR và truyền thông.

## Khía cạnh tài lộc

Đương số có khả năng kiếm tiền từ tài năng, ngoại hình và sự duyên dáng. Nếu
Đào Hoa đi cùng sao xấu, đương số dễ sa đà vào lối sống hưởng thụ hoặc tệ nạn.`,
  },

  // ============================================================
  // 2. Vị trí Đào Hoa - đắc địa nhất ở Mão
  // ============================================================
  {
    id: 'dao-hoa-vi-tri-mieu-ham',
    title: 'Đào Hoa - Vị trí miếu hãm theo cung Tý/Ngọ/Mão/Dậu',
    sao: ['Đào Hoa'],
    chi: ['Tý', 'Ngọ', 'Mão', 'Dậu'],
    doUuTien: 40,
    tomTat: `Đào Hoa chỉ an tại bốn cung Tý, Ngọ, Mão, Dậu — gọi là Đào Hoa địa.
Sức mạnh của sao thay đổi rõ rệt theo từng vị trí.

Tại cung Mão, Đào Hoa **đắc địa** nhất. Đương số đắc thời về ái tình, có hấp
lực quyến rũ mạnh, được nhiều người biết đến và tôn thờ.

Tại cung Tý, đương số mang duyên ngầm, ít được bá chúng biết đến, thường có
những mối tình kín đáo — yêu trộm, được yêu trộm và biết bảo mật trong tình
yêu.

Tại Ngọ và Dậu, Đào Hoa kém thi vị, bớt nhiều sức hấp dẫn. Phải có Tuần hoặc
Triệt đồng cung thì mới sáng lên và có triển vọng.`,
  },

  // ============================================================
  // 3. Cặp Đào Hồng - đặc tính chung
  // ============================================================
  {
    id: 'dao-hong-cap-doi-chung',
    title: 'Đào Hồng - Cặp song tinh đào hoa',
    sao: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 50,
    tomTat: `Khi **Đào Hoa** và **Hồng Loan** đứng cùng nhau trong lá số, đương
số có bộ "Đào Hồng" — cặp song tinh chủ về cưới xin, đời sống chăn gối cũng
như thi cử và công danh, đem đến nhiều sự vui mừng.

So sánh giữa hai sao:

| | Đào Hoa | Hồng Loan |
|---|---|---|
| Sức mạnh | Mạnh hơn Hồng | Yếu hơn Đào |
| Sức hút | Nhan sắc bề ngoài | Đức tính bên trong |
| Tính chất | Lả lơi hơn | Khéo léo, công - dung - ngôn |
| Hoa tay | - | Có hoa tay, nói ngọt, đi đứng khả ái |
| Mức sa đọa | Dễ sa đọa hơn | Ít sa đọa hơn Đào |

Khi Hồng Loan tọa Mệnh, đương số có hoa tay, nói ngọt, có duyên và đi đứng
khả ái.`,
  },

  // ============================================================
  // 4. Tam Minh - Đào Hồng Hỷ
  // ============================================================
  {
    id: 'dao-hong-hy-tam-minh',
    title: 'Tam Minh = Đào Hoa + Hồng Loan + Thiên Hỷ',
    sao: ['Đào Hoa', 'Hồng Loan', 'Thiên Hỷ'],
    doUuTien: 55,
    tomTat: `Khi Đào Hoa, Hồng Loan và **Thiên Hỷ** cùng hội tụ, đương số có bộ
"Tam Minh". Vai trò chính của Tam Minh là giảm được tính dâm tà của Đào Hồng
khi đứng đơn lẻ.

Tam Minh hiện diện tại Mệnh hoặc Thân biểu thị:

- May mắn về tình duyên và cưới xin
- Vui mừng, hỉ sự liên tiếp
- Đỡ đi tính lả lơi so với khi Đào Hồng đứng riêng

Tuy vậy, dù có Tam Minh, nếu thêm Nhật Nguyệt thì đương số vẫn là khách đa
tình — Tam Minh chỉ giảm dâm tà chứ không triệt tiêu hoàn toàn.`,
  },

  // ============================================================
  // 5. Đào Hồng tại Mệnh / Thân
  // ============================================================
  {
    id: 'dao-hong-tai-menh-than',
    title: 'Đào Hồng tại Mệnh - May mắn chóng qua',
    sao: ['Đào Hoa', 'Hồng Loan'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Đào Hồng đóng tại Mệnh không phải vị trí đẹp, vì may mắn nào cũng
chóng gặp lại chóng qua. Đương số thường rơi vào cảnh hai đời chồng vợ — nếu
không cũng dở dang lắm bận ái ân.

Vị trí tốt nhất của bộ Đào Hồng là khi xung chiếu Mệnh chứ không đồng cung —
khi đó cách cục mới thực sự đẹp.`,

    chiTiet: `## Tính chất "vừa duyên vừa nghiệp"

Đương số có Đào Hồng tại Mệnh thường được ví như bông hoa giữa đời, vừa có
sắc lẫn hương:

- Ngoại hình cuốn hút, tài năng và khí chất khiến người khác khó làm ngơ
- Cuộc đời luôn song hành giữa "duyên" và "nghiệp" — giữa ánh hào quang và
  những rối ren tình cảm

## Đào Hồng + Sát Phá Liêm Tham

Khi Đào Hồng đi cùng bộ Sát Phá Liêm Tham, cách cục cực xấu — đường tình
duyên vô cùng gian nan, đương số dễ khắc chồng con và gặp cảnh chia ly hoặc
góa bụa.

Cần Tuần, Triệt hoặc Tử Phủ, Nguyệt Đức để hóa giải mới mong giảm bớt tai
họa.`,
  },

  // ============================================================
  // 5b. Đào Hồng tại Mệnh + các bộ kết hợp (mỗi bộ 1 entry riêng)
  // ============================================================
  {
    id: 'dao-hong-menh-tu-phu-nhat-nguyet',
    title: 'Đào Hồng + Tử/Phủ/Nhật/Nguyệt tại Mệnh - Tăng rực rỡ',
    sao: ['Đào Hoa', 'Hồng Loan'],
    cung: ['Mệnh'],
    ketHop: ['Tử Vi', 'Thiên Phủ', 'Thái Dương', 'Thái Âm'],
    doUuTien: 70,
    tomTat: `Khi Đào Hồng tại Mệnh hội cùng Tử Vi, Thiên Phủ, Thái Dương hoặc
Thái Âm, các sao này làm tăng cái rực rỡ của bản mệnh — đương số càng thêm
sáng giá, được nhiều người chú ý và nâng đỡ.`,
  },
  {
    id: 'dao-hong-menh-van-tinh',
    title: 'Đào Hồng + Văn tinh tại Mệnh - Đỗ sớm',
    sao: ['Đào Hoa', 'Hồng Loan'],
    cung: ['Mệnh'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Lưu Niên Văn Tinh', 'Hóa Khoa'],
    doUuTien: 70,
    tomTat: `Khi Đào Hồng tại Mệnh đi cùng văn tinh — Văn Xương, Văn Khúc, Lưu
Niên Văn Tinh hoặc Hóa Khoa — đương số đỗ sớm, khoa cử suôn sẻ và học hành
thành đạt từ tuổi trẻ.`,
  },
  {
    id: 'dao-hong-menh-sat-tinh-hoi',
    title: 'Đào Hồng + sát tinh hội (Không/Kiếp/Đà/Kình) tại Mệnh - Không thọ',
    sao: ['Đào Hoa', 'Hồng Loan'],
    cung: ['Mệnh'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Đà La', 'Kình Dương'],
    doUuTien: 65,
    tomTat: `Khi Đào Hồng tại Mệnh hội sát tinh — Địa Không, Địa Kiếp, Đà La
hoặc Kình Dương — đương số không thọ. Mệnh vốn đã dở dang lại còn yểu, cần
được sao giải mới mong giảm bớt.`,
  },
  {
    id: 'dao-hong-menh-dia-kiep-dam-thuyen',
    title: 'Đào Hồng + Địa Kiếp tại Mệnh - Đắm thuyền',
    sao: ['Đào Hoa', 'Hồng Loan'],
    cung: ['Mệnh'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 65,
    tomTat: `Khi Đào Hồng tại Mệnh đi cùng Địa Kiếp, đương số dễ bị đắm thuyền
— gặp tai nạn liên quan đến sông nước.`,
  },
  {
    id: 'dao-hong-menh-co-cu-ta-huu-thai-tue',
    title: 'Đào Hồng + Cơ/Cự/Tả/Hữu/Thái Tuế tại Mệnh - Sức khỏe kém',
    sao: ['Đào Hoa', 'Hồng Loan'],
    cung: ['Mệnh'],
    ketHop: ['Thiên Cơ', 'Cự Môn', 'Tả Phù', 'Hữu Bật', 'Thái Tuế'],
    doUuTien: 65,
    tomTat: `Khi Đào Hồng tại Mệnh hội Thiên Cơ, Cự Môn, Tả Phù, Hữu Bật hoặc
Thái Tuế, sức khỏe đương số kém, mệnh ví như ngọn đèn trước gió — bệnh tật
liên miên, sinh lực hao mòn.`,
  },
  {
    id: 'dao-hong-menh-khong-kiep-benh-phu',
    title: 'Đào Hồng + Không/Kiếp/Bệnh Phù tại Mệnh - Bệnh phong tình',
    sao: ['Đào Hoa', 'Hồng Loan'],
    cung: ['Mệnh'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Bệnh Phù'],
    doUuTien: 65,
    tomTat: `Khi Đào Hồng tại Mệnh đi cùng Địa Không, Địa Kiếp hoặc Bệnh Phù,
đương số dễ mắc bệnh phong tình — các chứng bệnh lây qua đường tình dục, di
hại lâu dài.`,
  },

  // ============================================================
  // 6. Đào Hồng cư Quan Lộc - giàu sang
  // ============================================================
  {
    id: 'dao-hong-tai-quan-loc',
    title: 'Đào Hồng cư Quan Lộc - Số giàu sang',
    sao: ['Đào Hoa', 'Hồng Loan'],
    cung: ['Quan Lộc'],
    doUuTien: 85,
    tomTat: `Đào Hồng cư Quan Lộc cho ra số giàu sang — một trong những vị trí
đẹp nhất của bộ song tinh này.

Đương số có sự nghiệp đẹp, công danh hiển đạt; môi trường làm việc nhiều
người khác giới giúp đương số phát huy được sức hút và sự khéo léo của mình.`,
  },
  {
    id: 'dao-hong-quan-loc-tu-phu-nhat-nguyet',
    title: 'Đào Hồng + Tử/Phủ/Nhật/Nguyệt tại Quan Lộc - Tăng rực rỡ',
    sao: ['Đào Hoa', 'Hồng Loan'],
    cung: ['Quan Lộc'],
    ketHop: ['Tử Vi', 'Thiên Phủ', 'Thái Dương', 'Thái Âm'],
    doUuTien: 80,
    tomTat: `Khi Đào Hồng tại Quan Lộc hội cùng Tử Vi, Thiên Phủ, Thái Dương
hoặc Thái Âm, công danh sự nghiệp của đương số được tô điểm thêm phần rực
rỡ, dễ vươn tới những vị trí cao trọng.`,
  },
  {
    id: 'dao-hong-quan-loc-khoi-viet-ta-huu',
    title: 'Đào Hồng + Khôi Việt / Tả Hữu tại Quan Lộc - Thượng cách',
    sao: ['Đào Hoa', 'Hồng Loan'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Khôi', 'Thiên Việt', 'Tả Phù', 'Hữu Bật'],
    doUuTien: 80,
    tomTat: `Khi Đào Hồng tại Quan Lộc đi cùng Thiên Khôi, Thiên Việt, Tả Phù
hoặc Hữu Bật, đương số đạt thượng cách — con đường công danh mở ra sáng lạn,
gặp nhiều quý nhân nâng đỡ.`,
  },
  {
    id: 'dao-hong-quan-loc-van-tinh',
    title: 'Đào Hồng + Văn tinh tại Quan Lộc - Phát đạt từ tài lẻ',
    sao: ['Đào Hoa', 'Hồng Loan'],
    cung: ['Quan Lộc'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Lưu Niên Văn Tinh', 'Hóa Khoa'],
    doUuTien: 80,
    tomTat: `Khi Đào Hồng tại Quan Lộc hội Văn Xương, Văn Khúc, Lưu Niên Văn
Tinh hoặc Hóa Khoa, công danh đương số càng phát đạt nhờ tài lẻ — tài năng
văn chương, nghệ thuật trở thành bệ phóng cho sự nghiệp.`,
  },

  // ============================================================
  // 7. Đào Hồng cư 4 cung Di Quan Tài Nô
  // ============================================================
  {
    id: 'dao-hong-tu-cung-di-quan-tai-no',
    title: 'Đào Hồng tại 4 cung Di / Quan / Tài / Nô',
    sao: ['Đào Hoa', 'Hồng Loan'],
    cung: ['Thiên Di', 'Quan Lộc', 'Tài Bạch', 'Nô Bộc'],
    doUuTien: 70,
    tomTat: `Khi Đào Hồng cư tại bốn cung Thiên Di, Quan Lộc, Tài Bạch hoặc
Nô Bộc, đương số rơi vào những vị trí đặc biệt liên quan trực tiếp đến công
danh và tài lộc — sao xấu sao tốt đi kèm sẽ định đoạt cát hung.`,
  },
  {
    id: 'dao-hong-di-quan-tai-no-luc-cat',
    title: 'Đào Hồng + Lục Cát tại Di/Quan/Tài/Nô - May mắn từ người khác phái',
    sao: ['Đào Hoa', 'Hồng Loan'],
    cung: ['Thiên Di', 'Quan Lộc', 'Tài Bạch', 'Nô Bộc'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 65,
    tomTat: `Khi Đào Hồng tại Thiên Di, Quan Lộc, Tài Bạch hoặc Nô Bộc đi cùng
**Lục Cát** — Tả Phù, Hữu Bật, Văn Xương, Văn Khúc, Thiên Khôi, Thiên Việt —
đương số có may mắn về công danh và tài lộc do người khác phái mang đến.`,
  },
  {
    id: 'dao-hong-di-quan-tai-no-tu-sat',
    title: 'Đào Hồng + Tứ Sát tại Di/Quan/Tài/Nô - Bất lợi vì tình ái',
    sao: ['Đào Hoa', 'Hồng Loan'],
    cung: ['Thiên Di', 'Quan Lộc', 'Tài Bạch', 'Nô Bộc'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 65,
    tomTat: `Khi Đào Hồng tại Thiên Di, Quan Lộc, Tài Bạch hoặc Nô Bộc đi cùng
**Tứ Sát** — Kình Dương, Đà La, Hỏa Tinh, Linh Tinh — đương số bất lợi về
công danh tài lộc do đặc tính đào hoa: bị tình ái làm hỏng việc, vướng thị
phi nam nữ.`,
  },

  // ============================================================
  // 8. Sao chế giảm Đào Hồng
  // ============================================================
  {
    id: 'dao-hong-sao-che-giam',
    title: 'Sao chế giảm tính lả lơi của Đào Hồng',
    sao: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 45,
    tomTat: `Một số sao có khả năng chế giảm tính lả lơi của Đào Hồng, hướng
đương số về sự đoan chính, ngay thẳng và nết hạnh.

Về chính tinh:

- Tử Vi
- Thiên Phủ
- Thái Dương sáng sủa

Về phụ tinh chế khắc mạnh:

- Ân Quang, Thiên Quý
- Thiên Hình
- Lộc Tồn
- Tuần, Triệt

Về phụ tinh chế khắc vừa, gồm bộ Tứ Đức:

- Thiên Đức, Phúc Đức, Long Đức, Nguyệt Đức

Riêng Thái Tuế làm Đào Hồng mất nhiều sức thu hút. Khi Đào Hồng gặp Thái Tuế,
đương số trở nên vô duyên, mất duyên, thất tình và bị phụ rẫy.`,
  },

  // ============================================================
  // 9. Sao tăng tính dâm của Đào Hồng
  // ============================================================
  {
    id: 'dao-hong-sao-tang-y-nghia',
    title: 'Sao TĂNG tính đào hoa - dâm tà của Đào Hồng',
    sao: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 45,
    tomTat: `Ngược lại, một số sao làm tăng tính dâm của Đào Hồng, đẩy đương
số về phía sa đọa và tình ái phức tạp.

Về chính tinh:

- Liêm Trinh — đa tình
- Tham Lang — dâm dục
- Thái Âm, nhất là khi hãm địa, là sao đa tình
- Thiên Đồng và Thiên Lương ở Tỵ hoặc Hợi
- Cự Môn và Thiên Cơ ở Mão hoặc Dậu
- Phá Quân

Về phụ tinh:

- Thiên Riêu — chơi bời, sắc dục
- Thai — giao hợp trai gái
- Hoa Cái — khát tình, làm dáng
- Mộc Dục — dâm dục, chưng diện
- Văn Xương, Văn Khúc — lãng mạn, đa tình
- Mộ — một phần đa dâm
- Thiên Không — ong bướm, gió trăng đê tiện
- Thiên Mã — thay cũ đổi mới
- Đế Vượng, Tràng Sinh — phong phú, đắc thời
- Sát tinh hãm địa như Địa Không, Địa Kiếp, Kình Dương, Đà La, Hỏa Tinh, Linh
  Tinh, Hóa Kỵ — bất hạnh, oan nghiệp`,
  },

  // ============================================================
  // 10. Đào + Thai - lả lơi tiền dâm hậu thú
  // ============================================================
  {
    id: 'dao-thai',
    title: 'Đào + Thai - "Tiền dâm hậu thú"',
    sao: ['Đào Hoa'],
    ketHop: ['Thai'],
    doUuTien: 60,
    tomTat: `Khi Đào Hoa đi cùng **Thai** (Hồng Loan + Thai cũng có ý nghĩa
tương tự), đương số mang đặc tính lả lơi, dâm đãng và sắc dục.

Cách cục này còn được gọi là "tiền dâm hậu thú" — quan hệ trước, cưới sau.
Nhiều trường hợp đương số có thai trước khi cưới, hôn sự xảy ra như một hệ
quả của duyên trần đã trót.`,
  },

  // ============================================================
  // 11. Đào + Riêu - dâm dục
  // ============================================================
  {
    id: 'dao-rieu',
    title: 'Đào + Riêu - Dâm dục, ngoại tình',
    sao: ['Đào Hoa'],
    ketHop: ['Thiên Riêu'],
    doUuTien: 60,
    tomTat: `Khi Đào Hoa đi cùng **Thiên Riêu** (Hồng Loan + Riêu cũng có ý
nghĩa tương tự), đương số mang tính dâm dục, có nhiều nhân tình, dễ ngoại
tình và sa đọa. Đời sống tình cảm vì thế nhiều thị phi, khó giữ được sự yên
ổn lâu dài.`,
  },

  // ============================================================
  // 12. Đào + Xương Khúc + Riêu
  // ============================================================
  {
    id: 'dao-xuong-khuc-rieu',
    title: 'Đào + Xương / Khúc + Riêu - Đĩ tính, sáng tác dâm thơ',
    sao: ['Đào Hoa'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Thiên Riêu'],
    doUuTien: 62,
    tomTat: `Khi Đào Hoa đi cùng Văn Xương hoặc Văn Khúc và thêm Thiên Riêu,
đương số có đĩ tính, bị dày vò bởi nhu cầu sinh lý và có khuynh hướng sáng
tác dâm thơ lãng mạn. Tài hoa nhưng phẩm hạnh suy giảm, đời sống tình cảm
phức tạp.`,
  },

  // ============================================================
  // 13. Đào + Liêm + Tham - gái giang hồ
  // ============================================================
  {
    id: 'dao-liem-tham',
    title: 'Đào + Liêm + Tham - Hết sức dâm đãng',
    sao: ['Đào Hoa'],
    ketHop: ['Liêm Trinh', 'Tham Lang'],
    gioiTinh: 'Nữ',
    doUuTien: 65,
    tomTat: `Khi nữ mệnh có Đào Hoa hội cùng Liêm Trinh và Tham Lang, đương số
hết sức dâm đãng, có thể trở thành gái giang hồ.

Đây là cách cục cực xấu cho nữ mệnh — tình ái phức tạp, dễ sa vào ngành nhạy
cảm, danh tiết khó giữ trọn.`,
  },

  // ============================================================
  // 14. Đào + Không Kiếp - bị hiếp dâm, làm điếm
  // ============================================================
  {
    id: 'dao-khong-kiep',
    title: 'Đào + Không Kiếp - Bị hiếp dâm, làm điếm, yểu tử',
    sao: ['Đào Hoa'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Kiếp Sát'],
    doUuTien: 65,
    tomTat: `Khi Đào Hoa đi cùng Địa Không, Địa Kiếp hoặc Kiếp Sát, cách cục
cực xấu. Đương số có thể bị hiếp dâm, làm điếm hoặc ít ra là bị dang dở; dễ
bị lừa gạt, dụ dỗ, mất trinh và yểu tử.

Thiên Không tạo cách "tài hoa bạc mệnh" — sắc đẹp và tình yêu đều mang tính
hư ảo, dễ chuốc khổ đau. Còn Địa Không cùng Địa Kiếp chủ về tai họa do tình
ái gây ra.`,
  },

  // ============================================================
  // 15. Đào + Mã - ong bướm thay đổi
  // ============================================================
  {
    id: 'dao-thien-ma',
    title: 'Đào + Thiên Mã - Ong bướm lả lơi',
    sao: ['Đào Hoa'],
    ketHop: ['Thiên Mã'],
    doUuTien: 58,
    tomTat: `Khi Đào Hoa đi cùng **Thiên Mã**, đương số mang tính ong bướm lả
lơi, hay thay đổi nhân tình hoặc thay vợ đổi chồng luôn. Đây là người không
chung thủy, dễ thay đổi đối tượng tình cảm liên tục theo cảm hứng nhất thời.`,
  },

  // ============================================================
  // 16. Nữ mệnh có Đào Hồng - đa oan trái
  // ============================================================
  {
    id: 'dao-hong-nu-menh-da-oan-trai',
    title: 'Nữ mệnh có Đào Hồng - Đa oan trái, dở dang ái tình',
    sao: ['Đào Hoa', 'Hồng Loan'],
    cung: ['Mệnh'],
    gioiTinh: 'Nữ',
    doUuTien: 78,
    tomTat: `Khi nữ mệnh có Đào Hồng tọa Mệnh, đương số đa oan trái, được
nhiều người mê nhưng tình ái dở dang, khó tìm được bến đỗ trọn vẹn.`,
  },
  {
    id: 'dao-hong-nu-menh-da-ky',
    title: 'Đào Hồng + Đà La + Hóa Kỵ - Nữ mệnh dâm loàn',
    sao: ['Đào Hoa', 'Hồng Loan'],
    cung: ['Mệnh'],
    ketHop: ['Đà La', 'Hóa Kỵ'],
    gioiTinh: 'Nữ',
    doUuTien: 73,
    tomTat: `Khi nữ mệnh có Đào Hồng đi cùng Đà La và Hóa Kỵ tại Mệnh, đương
số là gái dâm loàn, không sao toàn được danh tiết.`,
  },
  {
    id: 'dao-hong-nu-menh-phuc-binh-tuong-quan-rieu-thai',
    title: 'Đào Hồng + Phục Binh + Tướng Quân + Thiên Riêu + Thai - Hãm hiếp, chửa hoang',
    sao: ['Đào Hoa', 'Hồng Loan'],
    cung: ['Mệnh'],
    ketHop: ['Phục Binh', 'Tướng Quân', 'Thiên Riêu', 'Thai'],
    gioiTinh: 'Nữ',
    doUuTien: 73,
    tomTat: `Khi nữ mệnh có Đào Hồng hội cùng Phục Binh, Tướng Quân, Thiên
Riêu và Thai tại Mệnh, đương số tất bị hãm hiếp và chửa hoang.

Nếu thêm được Ân Quang và Thiên Quý thì có thể chế ngự được phần lớn tai
họa.`,
  },
  {
    id: 'dao-hong-nu-menh-tu-vi',
    title: 'Đào Hồng + Tử Vi - Nữ mệnh đoan thục',
    sao: ['Đào Hoa', 'Hồng Loan'],
    cung: ['Mệnh'],
    ketHop: ['Tử Vi'],
    gioiTinh: 'Nữ',
    doUuTien: 73,
    tomTat: `Khi nữ mệnh có Đào Hồng đi cùng Tử Vi tại Mệnh, đương số trở nên
đoan thục — nét đẹp đoan chính, biết giữ mình giữa cám dỗ.`,
  },
  {
    id: 'dao-hong-nu-menh-thien-phu',
    title: 'Đào Hồng + Thiên Phủ - Nữ mệnh đoan thục',
    sao: ['Đào Hoa', 'Hồng Loan'],
    cung: ['Mệnh'],
    ketHop: ['Thiên Phủ'],
    gioiTinh: 'Nữ',
    doUuTien: 73,
    tomTat: `Khi nữ mệnh có Đào Hồng đi cùng Thiên Phủ tại Mệnh, đương số trở
nên đoan thục — nét đẹp đoan chính, biết giữ mình giữa cám dỗ.`,
  },
  {
    id: 'dao-hong-nu-menh-thien-hinh',
    title: 'Đào Hồng + Thiên Hình - Nữ mệnh đoan thục',
    sao: ['Đào Hoa', 'Hồng Loan'],
    cung: ['Mệnh'],
    ketHop: ['Thiên Hình'],
    gioiTinh: 'Nữ',
    doUuTien: 73,
    tomTat: `Khi nữ mệnh có Đào Hồng đi cùng Thiên Hình tại Mệnh, đương số
trở nên đoan thục — nét đẹp đoan chính, biết giữ mình giữa cám dỗ.`,
  },
  {
    id: 'dao-hong-nu-menh-tau-vu',
    title: 'Đào Hồng + Tấu Vũ - Nữ mệnh thợ may khéo',
    sao: ['Đào Hoa', 'Hồng Loan'],
    cung: ['Mệnh'],
    ketHop: ['Tấu Vũ'],
    gioiTinh: 'Nữ',
    doUuTien: 73,
    tomTat: `Khi nữ mệnh có Đào Hồng đi cùng Tấu Vũ tại Mệnh, đương số làm
thợ may khéo, có hoa tay trong nghề kim chỉ và may vá.`,
  },

  {
    id: 'hong-loan-tai-phuc-duc-nga-mi-tac-an',
    title: 'Hồng Loan tại Phúc Đức - cách Nga Mi Tác Án',
    sao: ['Hồng Loan'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `Khi Hồng Loan tọa cung Phúc Đức, đương số có cách "Nga Mi Tác
Án" — đem lại sự rực rỡ cho dòng họ, phúc khí dồi dào lan tỏa cho cả gia
tộc.`,
  },

  {
    id: 'dao-hong-nu-menh-tang-mon-phu-mau',
    title: 'Nữ mệnh Đào Hồng kèm Tang Môn cạnh - Góa chồng',
    sao: ['Đào Hoa', 'Hồng Loan'],
    cung: ['Mệnh'],
    ketHop: ['Tang Môn'],
    gioiTinh: 'Nữ',
    doUuTien: 70,
    tomTat: `Khi nữ mệnh có Đào Hồng tại Mệnh cộng hưởng với Tang Môn ở cung
kề bên, hạn lúc đến đại vận có cách này, đương số chắc phải góa chồng hoặc
bỏ chồng.`,
  },

  // ============================================================
  // 17. Đào Hoa tại Mệnh
  // ============================================================
  {
    id: 'dao-hoa-tai-menh',
    title: 'Đào Hoa tại Mệnh - Sức hút duyên dáng kín đáo',
    sao: ['Đào Hoa'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Đào Hoa thủ Mệnh khiến đương số tinh tế, khéo léo, có gu thẩm mỹ
cao, biết cách ăn mặc, phối màu và trang trí.

Tính cách nhẹ nhàng, kín đáo nhưng có sức hút đặc biệt — càng tiếp xúc người
ta càng thấy thu hút.

Tâm hồn lãng mạn, đa cảm, bay bổng, yêu cái đẹp, yêu nghệ thuật và thiên
nhiên; rất sợ cô đơn hay bị bỏ rơi.

Về tài năng, đương số thông minh, tiếp thu nhanh, đặc biệt nổi trội ở nghệ
thuật, sáng tạo và tư duy hình khối.`,

    chiTiet: `## Tướng mạo

Đương số thường có da trắng, tóc dày — vẻ ngoài tươi tắn, dễ ưa nhìn.

## Sự nghiệp - thiên hướng nghệ thuật

Đây là mẫu người có thiên hướng nghệ thuật rất rõ rệt, năng khiếu bẩm sinh
về cầm, kỳ, thi, họa.

Các lĩnh vực phù hợp gồm kiến trúc, hội họa, âm nhạc, biểu diễn, thời trang,
làm đẹp, sáng tạo nội dung, PR, truyền thông và ngoại giao.

Công danh của đương số thường đến sớm, dễ nổi tiếng, dễ được chú ý và được
người khác giúp đỡ, nâng đỡ.

## Hôn nhân - phức tạp nhất

Vì có quá nhiều người theo đuổi, đương số kén chọn, đặt tiêu chuẩn cao cho
bạn đời. Tình duyên do đó trắc trở, dễ rơi vào cảnh "lắm mối tối nằm
không".

## Sức khỏe - tim mạch

Đương số dễ gặp các vấn đề:

- Tim mạch — huyết áp thất thường, hở van tim, co thắt động mạch vành
- Tóc — rụng tóc, suy nhược
- Khí huyết kém
- Tửu lượng kém
- Khi có Thai, Mộc Dục hoặc Hóa Kỵ đi kèm, đương số dễ mắc bệnh lây qua
  đường tình dục

## Tài lộc - từ khiếu nghệ thuật

Đương số kiếm tiền chủ yếu bằng tài năng và sự khéo léo, tận dụng năng
khiếu, ngoại hình và tài lẻ. Tự kiếm tiền từ sớm, dễ khởi nghiệp sớm và độc
lập tài chính. Trong giao dịch tài chính, đương số thường gặp may mắn.

## Lời khuyên

1. Tu tâm dưỡng tính — ranh giới giữa duyên lành và nghiệp chướng rất mong
   manh.
2. Sống đoan chính, giữ đạo đức để tránh rối ren tình cảm.
3. Dồn năng lượng vào nghệ thuật, công việc và sáng tạo thay vì sa đà vào
   các mối quan hệ.
4. Chọn bạn đời tỉnh táo — nên kết hôn muộn khi tâm tính đã chín chắn.
5. Giữ gìn sức khỏe tim mạch — hạn chế rượu bia, tránh xúc động mạnh.`,
  },

  {
    id: 'dao-hoa-tai-menh-nam',
    title: 'Đào Hoa tại Mệnh - Nam mệnh',
    sao: ['Đào Hoa'],
    cung: ['Mệnh'],
    gioiTinh: 'Nam',
    doUuTien: 73,
    tomTat: `Khi nam mệnh có Đào Hoa tại Mệnh, đương số có tướng mạo cân đối,
phương phi, mang phong thái phong lưu lãng mạn và có sức hút với khác giới.

Mặt trái là đương số dễ thành "đào hoa sát gái" — đa tình, khó giữ chừng mực
trong các mối quan hệ.`,
  },

  {
    id: 'dao-hoa-tai-menh-nu',
    title: 'Đào Hoa tại Mệnh - Nữ mệnh',
    sao: ['Đào Hoa'],
    cung: ['Mệnh'],
    gioiTinh: 'Nữ',
    doUuTien: 73,
    tomTat: `Khi nữ mệnh có Đào Hoa tại Mệnh, đương số có da dẻ mịn màng, trẻ
trung, đôi mắt đẹp, môi mỏng và răng đều.

Đương số dễ vướng thị phi tình cảm, yêu sớm, yêu sâu, dễ chịu tổn thương.
Vất vả về tình duyên, dễ mang số "hồng nhan bạc phận" — khó yên ổn với một
người chồng nếu không có sao giải.`,
  },

  // ============================================================
  // 18. Đào Hoa tại Phụ Mẫu
  // ============================================================
  {
    id: 'dao-hoa-tai-phu-mau',
    title: 'Đào Hoa tại Phụ Mẫu',
    sao: ['Đào Hoa'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Khi Đào Hoa cư Phụ Mẫu, cha mẹ của đương số có phong thái tao
nhã, có tài hoặc năng khiếu thẩm mỹ, nghệ thuật.

Cha của đương số có dáng dấp phong lưu, lãng tử. Mẹ thì duyên dáng, khéo ăn
nói, được nhiều người mến mộ và theo đuổi.

Phụ huynh có lối sống tinh tế, yêu cái đẹp, cách giáo dục con cái theo
khuynh hướng mềm dẻo và thiên về cảm xúc.`,
  },

  // ============================================================
  // 19. Đào Hoa tại Phúc Đức
  // ============================================================
  {
    id: 'dao-hoa-tai-phuc-duc',
    title: 'Đào Hoa tại Phúc Đức',
    sao: ['Đào Hoa'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `Khi Đào Hoa nhập cung Phúc Đức, đây là vị trí đẹp. Do thuộc Mộc
đới Thủy nên Đào Hoa rất hợp với môi trường nhiều cây cối, cũng như mộ phần
tổ tiên có cỏ cây xanh tốt. Con cháu nhờ vậy mà được hưởng phúc khí dồi
dào.

Khi Đào Hồng đi cùng Cô Thần hoặc Quả Tú, đồng cung hoặc giáp cung, trong
dòng họ có người mang duyên tu hành, thích dâng hoa cúng Phật hoặc hành
thiện tích đức.

Lời khuyên là đương số cần chăm chút đời sống tâm linh và tu dưỡng đạo đức
để duy trì vận phúc lâu dài.`,
  },

  // ============================================================
  // 20. Đào Hoa tại Quan Lộc
  // ============================================================
  {
    id: 'dao-hoa-tai-quan-loc',
    title: 'Đào Hoa tại Quan Lộc',
    sao: ['Đào Hoa'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `Khi Đào Hoa cư Quan Lộc, tuổi trẻ của đương số đầy sức sống, giàu
nhiệt huyết, sáng tạo và ham học hỏi.

Đương số dễ được cấp trên tín nhiệm, giao trọng trách và được tạo điều kiện
học tập nâng cao. Môi trường làm việc có nhiều người khác giới — vừa tạo
sức hút vừa mang nhiều duyên gặp gỡ.

Năng khiếu nghệ thuật của đương số là bẩm sinh: viết lách, hội họa, âm nhạc,
thi ca. Nếu theo đuổi đúng sở trường, đương số có thể "tay ngang thành
danh".`,
  },
  {
    id: 'dao-hoa-quan-loc-hong-loan',
    title: 'Đào Hoa + Hồng Loan tại Quan Lộc - Đam mê cống hiến',
    sao: ['Đào Hoa'],
    cung: ['Quan Lộc'],
    ketHop: ['Hồng Loan'],
    doUuTien: 73,
    tomTat: `Khi Đào Hoa và Hồng Loan hội chiếu tại Quan Lộc, đương số đam mê
cống hiến, lăn xả với công việc và đạt thành tích cao trong sự nghiệp.`,
  },
  {
    id: 'dao-hoa-quan-loc-luc-cat',
    title: 'Đào Hoa + Lục Cát tại Quan Lộc - Thượng cách',
    sao: ['Đào Hoa'],
    cung: ['Quan Lộc'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 73,
    tomTat: `Khi Đào Hoa tại Quan Lộc đi cùng Lục Cát — Tả Phù, Hữu Bật, Văn
Xương, Văn Khúc, Thiên Khôi, Thiên Việt — đương số đạt thượng cách, công
danh sáng lạn, gặp nhiều quý nhân hỗ trợ.`,
  },

  // ============================================================
  // 21. Đào Hoa tại Điền Trạch
  // ============================================================
  {
    id: 'dao-hoa-tai-dien-trach',
    title: 'Đào Hoa tại Điền Trạch',
    sao: ['Đào Hoa'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Khi Đào Hoa thủ Điền Trạch, đương số có gu thẩm mỹ cao, thích tự
tay bài trí nhà cửa.

Đương số chuộng lối sống tao nhã, thường chọn kiểu nhà cổ có thư phòng, bể
cá, cây cảnh, nơi thưởng trà.

Môi trường sống thường nằm gần khu sầm uất — quán xá, tiệm hoa, salon làm
đẹp.`,
  },
  {
    id: 'dao-hoa-dien-trach-tu-sat',
    title: 'Đào Hoa + Tứ Sát tại Điền Trạch - Chuyển hóa tiêu cực',
    sao: ['Đào Hoa'],
    cung: ['Điền Trạch'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 70,
    tomTat: `Khi Đào Hoa tại Điền Trạch đi cùng Tứ Sát — Kình Dương, Đà La,
Hỏa Tinh, Linh Tinh — ý nghĩa tốt đẹp ban đầu chuyển hóa thành mặt tiêu cực,
môi trường sống dễ vướng thị phi và xáo trộn.`,
  },
  {
    id: 'dao-hoa-dien-trach-dia-kiep',
    title: 'Đào Hoa + Địa Kiếp tại Điền Trạch - Nhà gần ăn chơi',
    sao: ['Đào Hoa'],
    cung: ['Điền Trạch'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Khi Đào Hoa tại Điền Trạch đi cùng Địa Kiếp, nhà ở của đương số
gần khu ăn chơi sắc dục, hoặc gần ổ cờ bạc, tệ nạn nhiều cám dỗ.`,
  },
  {
    id: 'dao-hoa-dien-trach-dieu-khach',
    title: 'Đào Hoa + Điếu Khách tại Điền Trạch - Nhà gần ăn chơi',
    sao: ['Đào Hoa'],
    cung: ['Điền Trạch'],
    ketHop: ['Điếu Khách'],
    doUuTien: 70,
    tomTat: `Khi Đào Hoa tại Điền Trạch đi cùng Điếu Khách, nhà ở của đương
số gần khu ăn chơi sắc dục, hoặc gần ổ cờ bạc, tệ nạn nhiều cám dỗ.`,
  },

  // ============================================================
  // 22. Đào Hoa tại Thiên Di - Tiền Cái Hậu Mã
  // ============================================================
  {
    id: 'dao-hoa-tai-thien-di',
    title: 'Đào Hoa tại Thiên Di - Cách "Tiền Cái Hậu Mã"',
    sao: ['Đào Hoa'],
    cung: ['Thiên Di'],
    doUuTien: 80,
    tomTat: `Khi Đào Hoa cư Thiên Di, đương số có cách **"Tiền Cái Hậu Mã"** —
một vị trí đắc cách. Ra ngoài lúc nào cũng được che chở, nâng đỡ; ngoại
hình sáng sủa, thần thái dễ mến; đi đâu cũng gây thiện cảm.

Khi đi xa hoặc ra ngoài, đương số đều gặp may, hay được người thương kẻ
giúp, hỗ trợ đủ đường.

Đây cũng là số xuất ngoại — đương số phải lập nghiệp xa quê, kết duyên hoặc
định cư nơi đất khách.`,
  },
  {
    id: 'dao-hoa-thien-di-luc-cat',
    title: 'Đào Hoa + Lục Cát tại Thiên Di - Tiếng tăm nổi như cồn',
    sao: ['Đào Hoa'],
    cung: ['Thiên Di'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 75,
    tomTat: `Khi Đào Hoa tại Thiên Di đi cùng Lục Cát — Tả Phù, Hữu Bật, Văn
Xương, Văn Khúc, Thiên Khôi, Thiên Việt — đương số tiếng tăm nổi như cồn,
chân bước đến đâu thành danh đến đó.`,
  },

  // ============================================================
  // 23. Đào Hoa tại Nô Bộc - Hoa Cái nhập Mệnh
  // ============================================================
  {
    id: 'dao-hoa-tai-no-boc',
    title: 'Đào Hoa tại Nô Bộc - Hoa Cái nhập Mệnh',
    sao: ['Đào Hoa'],
    cung: ['Nô Bộc'],
    doUuTien: 78,
    tomTat: `Khi Đào Hoa cư Nô Bộc — cấu trúc tạo phối với Hoa Cái — đương số
được nhiều người thầm thương trộm nhớ.

Mặt trái là khó tránh những mối tình nhanh nở chóng tàn. Đương số yêu đương
nồng nhiệt rồi chia xa; bản tính lại không dễ nhún nhường, nể phục ai, kể
cả người mình thương.

Vị trí này thường gây rắc rối nhiều hơn thuận lợi:

- Đương số gặp những người "trồng cây si" yêu sâu đậm
- Có duyên tình từ tiền kiếp — đối phương vẫn dành tình cảm đặc biệt cho
  đương số dù cả hai đã có gia đình riêng`,
  },

  {
    id: 'dao-hoa-tai-no-boc-nu-menh',
    title: 'Đào Hoa tại Nô Bộc - Nữ mệnh',
    sao: ['Đào Hoa'],
    cung: ['Nô Bộc'],
    gioiTinh: 'Nữ',
    doUuTien: 73,
    tomTat: `Khi nữ mệnh có Đào Hoa cư Nô Bộc, đương số dễ dính điều tiếng
thị phi, đúng như câu phú đã nhắc:

> *"Đào hồng mà đóng Nô cung*
> *Gái ngoan mang tiếng bất trung cùng chồng"*`,
  },

  // ============================================================
  // 24. Đào Hoa tại Tài Bạch
  // ============================================================
  {
    id: 'dao-hoa-tai-tai-bach',
    title: 'Đào Hoa tại Tài Bạch',
    sao: ['Đào Hoa'],
    cung: ['Tài Bạch'],
    doUuTien: 78,
    tomTat: `Khi Đào Hoa cư Tài Bạch, đây là vị trí đắc lợi — đương số tận
dụng năng khiếu, bộ não nhạy bén và tài ăn nói khéo léo để làm giàu.

Tuổi còn trẻ đã tự biết kiếm tiền, khởi nghiệp sớm và độc lập tài chính.`,
  },
  {
    id: 'dao-hoa-tai-bach-luc-cat',
    title: 'Đào Hoa + Lục Cát tại Tài Bạch - Làm chủ kinh tế',
    sao: ['Đào Hoa'],
    cung: ['Tài Bạch'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 73,
    tomTat: `Khi Đào Hoa tại Tài Bạch đi cùng Lục Cát — Tả Phù, Hữu Bật, Văn
Xương, Văn Khúc, Thiên Khôi, Thiên Việt — đương số có khả năng làm chủ kinh
tế rất mạnh, đúng nghĩa "lấy ngón nghề nuôi thân".`,
  },
  {
    id: 'dao-hoa-tai-bach-loc-ton',
    title: 'Đào Hoa + Lộc Tồn tại Tài Bạch - Làm chủ kinh tế',
    sao: ['Đào Hoa'],
    cung: ['Tài Bạch'],
    ketHop: ['Lộc Tồn'],
    doUuTien: 73,
    tomTat: `Khi Đào Hoa tại Tài Bạch đi cùng Lộc Tồn, đương số có khả năng
làm chủ kinh tế rất mạnh, đúng nghĩa "lấy ngón nghề nuôi thân".`,
  },
  {
    id: 'dao-hoa-tai-bach-tu-sat',
    title: 'Đào Hoa + Tứ Sát tại Tài Bạch - Dùng nhan sắc kiếm tiền',
    sao: ['Đào Hoa'],
    cung: ['Tài Bạch'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 73,
    tomTat: `Khi Đào Hoa tại Tài Bạch đi cùng Tứ Sát — Kình Dương, Đà La, Hỏa
Tinh, Linh Tinh — vận đời của đương số dễ phải dùng nhan sắc để kiếm tiền.`,
  },
  {
    id: 'dao-hoa-tai-bach-hoa-ky',
    title: 'Đào Hoa + Hóa Kỵ tại Tài Bạch - Dùng nhan sắc kiếm tiền',
    sao: ['Đào Hoa'],
    cung: ['Tài Bạch'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 73,
    tomTat: `Khi Đào Hoa tại Tài Bạch đi cùng Hóa Kỵ, vận đời của đương số dễ
phải dùng nhan sắc để kiếm tiền.`,
  },

  {
    id: 'dao-hoa-tai-tai-bach-nu-menh-sat-ky',
    title: 'Đào Hoa tại Tài Bạch + Sát/Kỵ - Nữ mệnh dùng nhan sắc kiếm tiền',
    sao: ['Đào Hoa'],
    cung: ['Tài Bạch'],
    ketHop: ['Hóa Kỵ'],
    gioiTinh: 'Nữ',
    doUuTien: 70,
    tomTat: `Khi nữ mệnh có Đào Hoa tại Tài Bạch hội cùng sát tinh hoặc Hóa
Kỵ, vận đời của đương số dễ phải dùng nhan sắc để kiếm tiền — nhất là khi
hội nhiều sát tinh hãm địa.`,
  },

  // ============================================================
  // 25. Đào Hoa tại Tật Ách
  // ============================================================
  {
    id: 'dao-hoa-tai-tat-ach',
    title: 'Đào Hoa tại Tật Ách',
    sao: ['Đào Hoa'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `Khi Đào Hoa cư Tật Ách, đương số có khả năng hồi phục nhanh, bệnh
nhẹ chóng khỏi — như cây cỏ gặp mưa lại tươi tốt trở lại.`,
  },
  {
    id: 'dao-hoa-tat-ach-luc-sat',
    title: 'Đào Hoa + Lục Sát tại Tật Ách - Chú ý tim mạch / máu huyết',
    sao: ['Đào Hoa'],
    cung: ['Tật Ách'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Khi Đào Hoa tại Tật Ách đi cùng Lục Sát — Kình Dương, Đà La, Hỏa
Tinh, Linh Tinh, Địa Không, Địa Kiếp — đương số cần đặc biệt chú ý:

- Tim mạch và tóc tai
- Máu huyết
- Thận khi bước vào tuổi trung niên`,
  },
  {
    id: 'dao-hoa-tat-ach-thai',
    title: 'Đào Hoa + Thai tại Tật Ách - Bệnh sinh dục, nội tiết',
    sao: ['Đào Hoa'],
    cung: ['Tật Ách'],
    ketHop: ['Thai'],
    doUuTien: 70,
    tomTat: `Khi Đào Hoa tại Tật Ách đi cùng Thai, đương số có nguy cơ mắc
bệnh đường sinh dục và nội tiết.`,
  },
  {
    id: 'dao-hoa-tat-ach-moc-duc',
    title: 'Đào Hoa + Mộc Dục tại Tật Ách - Bệnh sinh dục, nội tiết',
    sao: ['Đào Hoa'],
    cung: ['Tật Ách'],
    ketHop: ['Mộc Dục'],
    doUuTien: 70,
    tomTat: `Khi Đào Hoa tại Tật Ách đi cùng Mộc Dục, đương số có nguy cơ mắc
bệnh đường sinh dục và nội tiết.`,
  },
  {
    id: 'dao-hoa-tat-ach-hoa-ky',
    title: 'Đào Hoa + Hóa Kỵ tại Tật Ách - Bệnh sinh dục, nội tiết',
    sao: ['Đào Hoa'],
    cung: ['Tật Ách'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `Khi Đào Hoa tại Tật Ách đi cùng Hóa Kỵ, đương số có nguy cơ mắc
bệnh đường sinh dục và nội tiết.`,
  },
  {
    id: 'dao-hoa-tat-ach-thai-am',
    title: 'Đào Hoa + Thái Âm tại Tật Ách - Bệnh sinh dục, nội tiết',
    sao: ['Đào Hoa'],
    cung: ['Tật Ách'],
    ketHop: ['Thái Âm'],
    doUuTien: 70,
    tomTat: `Khi Đào Hoa tại Tật Ách đi cùng Thái Âm, đương số có nguy cơ mắc
bệnh đường sinh dục và nội tiết.`,
  },

  // ============================================================
  // 26. Đào Hoa tại Tử Tức
  // ============================================================
  {
    id: 'dao-hoa-tai-tu-tuc',
    title: 'Đào Hoa tại Tử Tức',
    sao: ['Đào Hoa'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Khi Đào Hoa cư Tử Tức, đây là dấu hiệu tốt lành cho đường con
cái của đương số.

Đương số dễ sinh con trai, đôi khi là con một bề (cần xét thêm yếu tố khác).
Con cái có ngoại hình xinh đẹp, đầy đặn; sớm bộc lộ tài năng văn học, nghệ
thuật và thẩm mỹ. Từ nhỏ đã khéo léo, nhanh nhạy, dễ dạy dễ nuôi.

Đương số thuận đường sinh nở; về già hậu vận yên vui nhờ con cháu hiếu thảo,
đỡ đần chu toàn.`,
  },

  // ============================================================
  // 27. Đào Hoa tại Phu Thê
  // ============================================================
  {
    id: 'dao-hoa-tai-phu-the',
    title: 'Đào Hoa tại Phu Thê',
    sao: ['Đào Hoa'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `Khi Đào Hoa cư Phu Thê, đây là tín hiệu tốt cho đời sống vợ
chồng. Người hôn phối của đương số có điều kiện, đảm đang, tháo vát, tính
cách khéo léo, dễ mến và dễ gần.

Tuy nhiên, khi bộ Hồng - Không - Cô - Quả tụ hội, hôn nhân của đương số dễ
vì ghen tuông mà nảy sinh mâu thuẫn, tổn thương lẫn nhau.`,
  },
  {
    id: 'dao-hoa-tai-phu-the-luc-cat',
    title: 'Đào Hoa tại Phu Thê + Lục Cát - Xứng lứa vừa đôi',
    sao: ['Đào Hoa'],
    cung: ['Phu Thê'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 73,
    tomTat: `Khi Đào Hoa tại Phu Thê đi cùng Lục Cát — Tả Phù, Hữu Bật, Văn
Xương, Văn Khúc, Thiên Khôi, Thiên Việt — vợ chồng của đương số xứng lứa
vừa đôi, chung sống hòa thuận như chim liền cánh.`,
  },
  {
    id: 'dao-hoa-tai-phu-the-triet-luc-sat-co-qua',
    title: 'Đào Hoa tại Phu Thê + Triệt/Lục Sát/Cô Thần/Quả Tú - Sớm nở tối tàn',
    sao: ['Đào Hoa'],
    cung: ['Phu Thê'],
    ketHop: ['Triệt', 'Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp', 'Cô Thần', 'Quả Tú'],
    doUuTien: 73,
    tomTat: `Khi Đào Hoa tại Phu Thê đi cùng Triệt, Lục Sát, Cô Thần hoặc Quả
Tú, hôn nhân của đương số "sớm nở tối tàn" — dễ cưới mà khó giữ, duyên đến
nhanh và đi cũng nhanh.`,
  },
  {
    id: 'dao-hoa-tai-phu-the-kinh-da-hinh',
    title: 'Đào Hoa tại Phu Thê + Kình/Đà/Hình - Xung đột nghiêm trọng',
    sao: ['Đào Hoa'],
    cung: ['Phu Thê'],
    ketHop: ['Kình Dương', 'Đà La', 'Thiên Hình'],
    doUuTien: 73,
    tomTat: `Khi Đào Hoa tại Phu Thê đi cùng Kình Dương, Đà La hoặc Thiên
Hình, vợ chồng của đương số xung đột nghiêm trọng cả về thể chất lẫn tinh
thần.`,
  },

  // ============================================================
  // 28. Đào Hoa tại Huynh Đệ
  // ============================================================
  {
    id: 'dao-hoa-tai-huynh-de',
    title: 'Đào Hoa tại Huynh Đệ',
    sao: ['Đào Hoa'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Khi Đào Hoa cư Huynh Đệ, anh chị em trong nhà của đương số đông
đúc, có anh em cùng giới tính với mình.

Đa phần là người có tài, có duyên ăn nói, dễ gặt hái thành tựu và có cuộc
sống khá giả.`,
  },
  {
    id: 'dao-hoa-tai-huynh-de-luc-sat',
    title: 'Đào Hoa tại Huynh Đệ + Lục Sát - Lắm tài nhiều tật',
    sao: ['Đào Hoa'],
    cung: ['Huynh Đệ'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Khi Đào Hoa tại Huynh Đệ đi cùng Lục Sát — Kình Dương, Đà La, Hỏa
Tinh, Linh Tinh, Địa Không, Địa Kiếp — anh em của đương số "lắm tài nhiều
tật": người thì tính cách ngông nghênh, kẻ thì đa sầu đa cảm.`,
  },

  // ============================================================
  // 29. Đào Hoa + Vũ Khúc / Thiên Hình - chuyển hóa thành sang trọng
  // ============================================================
  {
    id: 'dao-hoa-vu-khuc-thien-hinh',
    title: 'Đào Hoa + Vũ Khúc / Thiên Hình - Chuyển hóa thành sang trọng đoan chính',
    sao: ['Đào Hoa'],
    ketHop: ['Vũ Khúc', 'Thiên Hình'],
    doUuTien: 60,
    tomTat: `Khi Đào Hoa đi cùng Vũ Khúc, sự mơ mộng của đương số giảm bớt,
thay vào đó là tính thực tế và khả năng quản lý tài chính.

Khi Đào Hoa đi cùng Thiên Hình, sao này mang lại cho đương số sự nghiêm
túc, biết giữ mình — tạo nên nét đẹp đoan chính.

Còn khi Đào Hoa hội Giải Thần, Phượng Các, Ân Quang, Thiên Quý hoặc Nguyệt
Đức, Đào Hoa trở thành nét duyên cao quý — đương số được người khác kính
trọng, gặp nhiều may mắn trong tình duyên và cuộc sống. Đây là cách chuyển
hóa Đào Hoa từ dâm sang quý.`,
  },

  // ============================================================
  // 30. Đào Hoa + Hóa Kỵ - nghịch duyên
  // ============================================================
  {
    id: 'dao-hoa-hoa-ky',
    title: 'Đào Hoa + Hóa Kỵ - Nghịch duyên',
    sao: ['Đào Hoa'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 58,
    tomTat: `Khi Đào Hoa đi cùng Hóa Kỵ, đương số mang nghịch duyên — yêu nhau
nhiều nhưng oán hận cũng nhiều, dễ chia tay đột ngột.

Bản chất Đào Hoa khao khát yêu thương và cưng chiều, đôi khi khiến đương
số thiếu tỉnh táo trong các mối quan hệ, dễ vào mối duyên ngang trái.`,
  },
  {
    id: 'dao-hoa-hoa-ky-khong-kiep-linh-da',
    title: 'Đào Hoa + Hóa Kỵ + Không/Kiếp/Linh/Đà - Ngoại tình',
    sao: ['Đào Hoa'],
    ketHop: ['Hóa Kỵ', 'Địa Không', 'Địa Kiếp', 'Linh Tinh', 'Đà La'],
    doUuTien: 53,
    tomTat: `Khi Đào Hoa đi cùng Hóa Kỵ và thêm Địa Không, Địa Kiếp, Linh Tinh
hoặc Đà La, đương số dễ có suy nghĩ ngoại tình hoặc rung động với người
khác — kể cả khi đã có vợ, chồng hay người yêu.`,
  },

  // ============================================================
  // 31. Hạn gặp Đào Hồng Hỷ Riêu
  // ============================================================
  {
    id: 'dao-hong-hy-rieu-vao-han',
    title: 'Hạn gặp Đào - Hồng - Hỷ - Riêu',
    sao: ['Đào Hoa'],
    doUuTien: 50,
    tomTat: `Khi đại vận hoặc lưu niên gặp Đào Hoa, Hồng Loan, Thiên Hỷ hoặc
Thiên Riêu, đương số có vương vấn tình — mối duyên xuất hiện hoặc bùng phát
trong năm hay đại vận đó.

Riêng khi hạn gặp Đào, Hồng, Hỷ, đương số dễ mê trai (nữ mệnh) hoặc mê gái
(nam mệnh). Cần thận trọng giữ mình, đặc biệt nếu đã có gia đình.`,
  },
];
