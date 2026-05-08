import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THIẾU DƯƠNG - Hỏa, Thiện Tinh, vòng Thái Tuế (vị trí 2).
 * Tam hợp Thiếu Dương + Thiên Không + Đào Hoa + Kiếp Sát - bùng lên nhanh, nhiều tài nhưng nhiều tật.
 * (TRÁI NGƯỢC với tam hợp Âm Long Trực ôn hòa - đã đề cập tại thieu-am.ts).
 *
 * Đắc địa Dần đến Ngọ (giống Thái Dương). Bên cạnh LUÔN có Thiên Không + Tứ Đức chiếu.
 * Cặp với Thiếu Âm: "mặt trời mặt trăng có đôi" - đã viết tại thieu-am.ts.
 */
export const luanGiai_ThieuDuong: DoanLuanGiai[] = [
  {
    id: 'thieu-duong-tinh-chat-chung',
    title: 'Thiếu Dương - Đặc tính chung',
    sao: ['Thiếu Dương'],
    doUuTien: 32,
    tomTat: `**Thiếu Dương** là phụ tinh thuộc nhóm Thiện Tinh trong vòng Thái
Tuế, đứng ngay sau Thái Tuế ở vị trí thứ hai. Sao này hành Hỏa, hóa khí là
Thiện Tinh, được hình tượng hóa như một mặt trời nhỏ soi sáng vạn vật.

Tố chất nổi bật:

- Thông minh, nổi trội, tài năng bộc lộ ra ngoài
- Ai trông thấy ánh sáng của sao này đều dễ sinh lòng yêu thích, hâm mộ
- Mang đặc tính dương — luôn nổi bật và chủ động

Vị thế trong vòng Thái Tuế khá đặc biệt: bên cạnh Thiếu Dương luôn có Thiên
Không (Thái Bạch Kim Tinh) — vị thần can gián, dạy bảo khi sao này đi sai
đường hoặc vượt quyền vua Thái Tuế. Tam hợp lại đi cùng Đào Hoa và Kiếp Sát.
Bộ tứ đức Long Đức, Phúc Đức, Thiên Đức, Nguyệt Đức cũng luôn chiếu về cung
Thiếu Dương theo quy luật an sao cố định.

Nhờ vị thế đó, sao này có khả năng gia tăng phúc thọ, cứu khốn phò nguy,
tiêu trừ nhiều bệnh tật và tai họa cho đương số.`,
    chiTiet: `Thiếu Dương vốn là sao mang hai mặt rõ rệt.

Mặt tốt:

- Đương số có nhiều tài năng và khả năng cứu giải mạnh
- Nhân hậu, ưa làm việc thiện
- Có cơ duyên giác ngộ về tâm linh

Mặt xấu:

- Lắm tài mà nhiều tật
- Nếu không cẩn thận sẽ mắc sai lầm lớn rồi phải hối tiếc — do Thiên Không
  luôn đi cùng để cảnh tỉnh
- Tính lạc quan quá mức đôi khi tự đẩy đương số vào nghịch cảnh

Tam hợp Thiếu Dương + Thiên Không + Đào Hoa + Kiếp Sát là một bộ rất đặc
trưng: bùng lên nhanh chóng, nổi trội, đa tài, song lắm tật và kéo theo
nhiều tai họa. Bộ này trái ngược hoàn toàn với tam hợp Âm Long Trực ôn hòa
nhường nhịn của Thiếu Âm.`,
  },

  {
    id: 'thieu-duong-tu-duc-thien-khong-giac-ngo',
    title: 'Thiếu Dương + Tứ Đức + Thiên Không - cơ duyên giác ngộ',
    sao: ['Thiếu Dương'],
    ketHop: ['Thiên Không', 'Long Đức', 'Phúc Đức', 'Thiên Đức', 'Nguyệt Đức'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương đi cùng Thiên Không (vốn luôn cận kề) và bộ Tứ Đức
chiếu — Long Đức, Phúc Đức, Thiên Đức, Nguyệt Đức — đương số có nhiều cơ
duyên giác ngộ về tâm linh, ưa tìm hiểu Phật pháp và mang thiên hướng hành
thiện tích đức, gieo phúc giúp người.

Đây là cách cục tâm linh đẹp: dù không xuất gia, đương số cũng dễ trở thành
cư sỹ, ưa nghiên cứu đạo lý.`,
  },

  {
    id: 'thieu-duong-tu-duc-thien-khong-quang-quy',
    title: 'Thiếu Dương + Thiên Không + Tứ Đức + Ân Quang - Dẫn dắt tinh thần',
    sao: ['Thiếu Dương'],
    ketHop: ['Thiên Không', 'Long Đức', 'Phúc Đức', 'Thiên Đức', 'Nguyệt Đức', 'Ân Quang'],
    doUuTien: 65,
    tomTat: `Khi Ân Quang góp mặt cùng bộ Thiếu Dương + Thiên Không + Tứ Đức,
thiện tâm của đương số càng rõ nét, dễ trở thành người dẫn dắt tinh thần
cho một cộng đồng nhỏ.`,
  },

  {
    id: 'thieu-duong-tu-duc-thien-khong-thien-quy',
    title: 'Thiếu Dương + Thiên Không + Tứ Đức + Thiên Quý - Dẫn dắt tinh thần',
    sao: ['Thiếu Dương'],
    ketHop: ['Thiên Không', 'Long Đức', 'Phúc Đức', 'Thiên Đức', 'Nguyệt Đức', 'Thiên Quý'],
    doUuTien: 65,
    tomTat: `Khi Thiên Quý góp mặt cùng bộ Thiếu Dương + Thiên Không + Tứ Đức,
thiện tâm của đương số càng rõ nét, dễ trở thành người dẫn dắt tinh thần
cho một cộng đồng nhỏ.`,
  },

  {
    id: 'thieu-duong-tu-duc-thien-khong-thien-quan',
    title: 'Thiếu Dương + Thiên Không + Tứ Đức + Thiên Quan - Dẫn dắt tinh thần',
    sao: ['Thiếu Dương'],
    ketHop: ['Thiên Không', 'Long Đức', 'Phúc Đức', 'Thiên Đức', 'Nguyệt Đức', 'Thiên Quan'],
    doUuTien: 65,
    tomTat: `Khi Thiên Quan góp mặt cùng bộ Thiếu Dương + Thiên Không + Tứ Đức,
thiện tâm của đương số càng rõ nét, dễ trở thành người dẫn dắt tinh thần
cho một cộng đồng nhỏ.`,
  },

  {
    id: 'thieu-duong-tu-duc-thien-khong-thien-phuc',
    title: 'Thiếu Dương + Thiên Không + Tứ Đức + Thiên Phúc - Dẫn dắt tinh thần',
    sao: ['Thiếu Dương'],
    ketHop: ['Thiên Không', 'Long Đức', 'Phúc Đức', 'Thiên Đức', 'Nguyệt Đức', 'Thiên Phúc'],
    doUuTien: 65,
    tomTat: `Khi Thiên Phúc góp mặt cùng bộ Thiếu Dương + Thiên Không + Tứ Đức,
thiện tâm của đương số càng rõ nét, dễ trở thành người dẫn dắt tinh thần
cho một cộng đồng nhỏ.`,
  },

  {
    id: 'thieu-duong-sao-giai',
    title: 'Thiếu Dương là sao Giải - tương đương Tứ Đức',
    sao: ['Thiếu Dương'],
    cung: ['Mệnh', 'Tật Ách'],
    doUuTien: 50,
    tomTat: `Thiếu Dương được xếp vào nhóm sao Giải mạnh: có khả năng giải trừ
tai nạn và bệnh tật ở mức nhỏ, hiệu quả cứu giải tương đương bộ Tứ Đức gồm
Long Đức, Phúc Đức, Thiên Đức và Nguyệt Đức. Cùng nhóm Giải Tinh với Thiếu
Dương còn có Thiếu Âm, Thiên Giải, Địa Giải, Giải Thần, Thiên Quan, Thiên
Phúc, Quang Quý, Tả Hữu, Sinh Vượng.

Tuy vậy, bản chất Thiếu Dương là sự nỗ lực — đương số phải tự mình chú tâm
vào sức khỏe và chủ động thay đổi thói quen sinh hoạt thì bệnh trạng mới
được cải thiện. Sao này không "cứu hộ" thụ động mà đòi hỏi người trong cuộc
phải tự vận động.`,
  },

  {
    id: 'thieu-duong-sao-giai-dia-khong',
    title: 'Thiếu Dương + Địa Không - Công dã tràng',
    sao: ['Thiếu Dương'],
    ketHop: ['Địa Không'],
    doUuTien: 45,
    tomTat: `Khi Thiếu Dương gặp Địa Không, sự cố gắng của đương số chẳng khác
nào "công dã tràng" — nỗ lực nhiều mà hiệu quả thu về chẳng được bao nhiêu.`,
  },

  {
    id: 'thieu-duong-sao-giai-dia-kiep',
    title: 'Thiếu Dương + Địa Kiếp - Công dã tràng',
    sao: ['Thiếu Dương'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 45,
    tomTat: `Khi Thiếu Dương gặp Địa Kiếp, sự cố gắng của đương số chẳng khác
nào "công dã tràng" — nỗ lực nhiều mà hiệu quả thu về chẳng được bao nhiêu.`,
  },

  {
    id: 'thieu-duong-dac-dia',
    title: 'Thiếu Dương đắc địa - Dần đến Ngọ',
    sao: ['Thiếu Dương'],
    chi: ['Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ'],
    doUuTien: 70,
    tomTat: `Thiếu Dương **đắc địa** tại Dần, Mão, Thìn, Tỵ, Ngọ — theo cùng các
vị trí đắc địa của Thái Dương. Chỉ khi đắc địa, sao này mới thực sự có ý
nghĩa và phát huy hết tác dụng. Khi rơi vào **hãm địa**, Thiếu Dương trở nên
gần như vô dụng, cần được Thái Dương đi cùng để bổ trợ thêm.

Vị trí đẹp nhất là khi Thiếu Dương đắc địa đồng cung Thái Dương, kết hợp với
Thiếu Âm đắc địa đồng cung Thái Âm — ý nghĩa cực kỳ rực rỡ, như mặt trời và
mặt trăng đều có đôi cùng tỏa sáng song song. Nếu chỉ hội chiếu (không đồng
cung) thì cách vẫn sáng lạn, song không thể bằng vị trí đồng cung đắc địa.`,
  },

  {
    id: 'thieu-duong-thai-duong',
    title: 'Thiếu Dương + Thái Dương - thông minh tột bậc',
    sao: ['Thiếu Dương'],
    ketHop: ['Thái Dương'],
    doUuTien: 78,
    tomTat: `Khi Thiếu Dương đi cùng Thái Dương (đồng cung hoặc hội chiếu),
đương số thông minh tột bậc, nổi danh trong lĩnh vực của mình và tiếng tăm
vươn xa.

Đắc cách đẹp nhất là khi Thái Dương ở **Miếu** hoặc **Vượng** lại có thêm
Hóa Quyền, Hóa Khoa, Hóa Lộc cùng cát tinh hội tụ: sự nghiệp vững vàng, học
vấn cao, danh tiếng nổi trội trong chuyên môn, đặc biệt thuận lợi cho việc
xuất ngoại, học hành và mở rộng quan hệ xã hội.

Đây là cách tăng cường sức mạnh của Thái Dương — Thiếu Dương đóng vai "mặt
trời con" làm sáng tỏ thêm cho "mặt trời mẹ".`,
  },

  {
    id: 'thieu-duong-tai-menh',
    title: 'Thiếu Dương tại Mệnh - thông minh nhân hậu',
    sao: ['Thiếu Dương'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Khi Thiếu Dương thủ Mệnh, đương số trí óc thông tuệ, tính tình
vui vẻ, hòa nhã, nhân hậu và hay làm việc thiện — chẳng khác nào ánh mặt
trời sưởi ấm vạn vật. Khí chất ấm áp, sẵn lòng giúp đỡ người khác là nét
nổi bật.

Đi đâu đương số cũng được người thương kẻ mến, dễ tạo thiện cảm dù chỉ mới
gặp gỡ. Bản tính chăm chỉ, kỷ luật cao, suy nghĩ tích cực; tựa như một mặt
trời nhỏ tỏa sáng đến mọi người và được nhiều người mến mộ, quý mến.

Điểm yếu của đương số là đôi khi vì lạc quan quá mức mà tự đẩy bản thân vào
nghịch cảnh; tuy vậy nhờ sự sáng suốt và nghị lực, đương số thường tìm ra
cách xoay chuyển cục diện vào phút chót. Ý nghĩa nhân hậu của Mệnh này
tương tự ý nghĩa của bộ Tứ Đức — vốn luôn chiếu về Thiếu Dương theo quy
luật an sao.`,
  },

  {
    id: 'thieu-duong-dao-hoa',
    title: 'Thiếu Dương + Đào Hoa - đa đoan duyên tình',
    sao: ['Thiếu Dương'],
    ketHop: ['Đào Hoa'],
    doUuTien: 65,
    tomTat: `Khi Thiếu Dương đồng cung Đào Hoa, đương số được nhiều người khác
giới mến mộ, song duyên tình lại đa đoan và lắm khi dở dang — yêu nhiều, dở
dang nhiều.

Sở dĩ như vậy vì Thiếu Dương vốn đã thu hút như một mặt trời nhỏ; khi cộng
thêm Đào Hoa thì sức hút cộng hưởng, vượt khỏi tầm kiểm soát. Nếu thuộc tam
hợp Thiếu Dương + Thiên Không + Đào Hoa + Kiếp Sát thì tài hoa nhưng lắm
tật, duyên tình thường có kết cục không may.`,
  },

  {
    id: 'thieu-duong-tai-phu-mau',
    title: 'Thiếu Dương tại Phụ Mẫu',
    sao: ['Thiếu Dương'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Khi Thiếu Dương cư Phụ Mẫu, cha mẹ của đương số là người khôn
ngoan, nhân hậu, ưa làm việc thiện và có tay nghề khéo. Sống thiện và biết
đối nhân xử thế nên cha mẹ được mọi người quý mến.`,
  },

  {
    id: 'thieu-duong-tai-phu-mau-dao-hoa',
    title: 'Thiếu Dương + Đào Hoa tại Phụ Mẫu - Cha mẹ nghệ thuật',
    sao: ['Thiếu Dương'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Đào Hoa'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương đi cùng Đào Hoa tại Phụ Mẫu, một trong hai đấng
sinh thành của đương số làm về nghệ thuật, thẩm mỹ hoặc kiến trúc, danh
tiếng lẫy lừng và được nhiều người yêu mến, hâm mộ — cha mẹ có người đào
hoa, nổi tiếng bên ngoài.`,
  },

  {
    id: 'thieu-duong-tai-phu-mau-hong-loan',
    title: 'Thiếu Dương + Hồng Loan tại Phụ Mẫu - Cha mẹ nghệ thuật',
    sao: ['Thiếu Dương'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Hồng Loan'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương đi cùng Hồng Loan tại Phụ Mẫu, một trong hai đấng
sinh thành của đương số làm về nghệ thuật, thẩm mỹ hoặc kiến trúc, danh
tiếng lẫy lừng và được nhiều người yêu mến, hâm mộ — cha mẹ có người đào
hoa, nổi tiếng bên ngoài.`,
  },

  {
    id: 'thieu-duong-tai-phu-mau-thien-khong',
    title: 'Thiếu Dương + Thiên Không tại Phụ Mẫu - Cha mẹ duyên giác ngộ',
    sao: ['Thiếu Dương'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Thiên Không'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương đi cùng Thiên Không tại Phụ Mẫu, cha mẹ của đương
số có duyên giác ngộ về tâm linh, Phật pháp; thích hành thiện tích đức và
gieo phúc giúp người.`,
  },

  {
    id: 'thieu-duong-tai-phu-mau-an-quang',
    title: 'Thiếu Dương + Ân Quang tại Phụ Mẫu - Cha mẹ duyên giác ngộ',
    sao: ['Thiếu Dương'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Ân Quang'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương đi cùng Ân Quang tại Phụ Mẫu, cha mẹ của đương số
có duyên giác ngộ về tâm linh, Phật pháp; thích hành thiện tích đức và gieo
phúc giúp người.`,
  },

  {
    id: 'thieu-duong-tai-phu-mau-thien-quy',
    title: 'Thiếu Dương + Thiên Quý tại Phụ Mẫu - Cha mẹ duyên giác ngộ',
    sao: ['Thiếu Dương'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Thiên Quý'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương đi cùng Thiên Quý tại Phụ Mẫu, cha mẹ của đương số
có duyên giác ngộ về tâm linh, Phật pháp; thích hành thiện tích đức và gieo
phúc giúp người.`,
  },

  {
    id: 'thieu-duong-tai-phu-mau-hoa-tinh',
    title: 'Thiếu Dương + Hỏa Tinh tại Phụ Mẫu - Quan hệ xa cách',
    sao: ['Thiếu Dương'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Hỏa Tinh'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương đi cùng Hỏa Tinh tại Phụ Mẫu, mối quan hệ giữa
đương số và cha mẹ trở nên xa cách; cha mẹ có phần vô tâm với đương số.`,
  },

  {
    id: 'thieu-duong-tai-phu-mau-linh-tinh',
    title: 'Thiếu Dương + Linh Tinh tại Phụ Mẫu - Quan hệ xa cách',
    sao: ['Thiếu Dương'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Linh Tinh'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương đi cùng Linh Tinh tại Phụ Mẫu, mối quan hệ giữa
đương số và cha mẹ trở nên xa cách; cha mẹ có phần vô tâm với đương số.`,
  },

  {
    id: 'thieu-duong-tai-phuc-duc',
    title: 'Thiếu Dương tại Phúc Đức',
    sao: ['Thiếu Dương'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `Khi Thiếu Dương đóng tại Phúc Đức, phúc phần của đương số vững
chãi: dòng họ phát mồ phát mả nam nhân, có người làm to và có chức quyền.

Tuy vậy do Thiên Không luôn đi cùng nên dù phúc đẹp, đương số không được
hưởng nhiều may mắn từ tổ tiên để lại — phải tự tôn bồi, xây đắp thêm.
Đương số thường ly hương tổ nghiệp, dựng vợ gả chồng nơi phương xa.`,
  },

  {
    id: 'thieu-duong-tai-phuc-duc-thien-dong-hoa-ky',
    title: 'Thiếu Dương + Thiên Đồng + Hóa Kỵ tại Phúc Đức - Sướng trước khổ sau',
    sao: ['Thiếu Dương'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Đồng', 'Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương cư Phúc Đức gặp Thiên Đồng cùng Hóa Kỵ, đương số
dễ rơi vào cảnh "sướng trước khổ sau" — một lần phát phúc lớn nhưng về sau
lại gặp nhiều xui rủi.`,
  },

  {
    id: 'thieu-duong-tai-phuc-duc-thien-dong-thien-hinh',
    title: 'Thiếu Dương + Thiên Đồng + Thiên Hình tại Phúc Đức - Sướng trước khổ sau',
    sao: ['Thiếu Dương'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Đồng', 'Thiên Hình'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương cư Phúc Đức gặp Thiên Đồng cùng Thiên Hình, đương
số dễ rơi vào cảnh "sướng trước khổ sau" — một lần phát phúc lớn nhưng về
sau lại gặp nhiều xui rủi.`,
  },

  {
    id: 'thieu-duong-tai-phuc-duc-thien-luong-hoa-ky',
    title: 'Thiếu Dương + Thiên Lương + Hóa Kỵ tại Phúc Đức - Sướng trước khổ sau',
    sao: ['Thiếu Dương'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Lương', 'Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương cư Phúc Đức gặp Thiên Lương cùng Hóa Kỵ, đương số
dễ rơi vào cảnh "sướng trước khổ sau" — một lần phát phúc lớn nhưng về sau
lại gặp nhiều xui rủi.`,
  },

  {
    id: 'thieu-duong-tai-phuc-duc-thien-luong-thien-hinh',
    title: 'Thiếu Dương + Thiên Lương + Thiên Hình tại Phúc Đức - Sướng trước khổ sau',
    sao: ['Thiếu Dương'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Lương', 'Thiên Hình'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương cư Phúc Đức gặp Thiên Lương cùng Thiên Hình, đương
số dễ rơi vào cảnh "sướng trước khổ sau" — một lần phát phúc lớn nhưng về
sau lại gặp nhiều xui rủi.`,
  },

  {
    id: 'thieu-duong-tai-phuc-duc-thien-viet-hoa-ky',
    title: 'Thiếu Dương + Thiên Việt + Hóa Kỵ tại Phúc Đức - Sướng trước khổ sau',
    sao: ['Thiếu Dương'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Việt', 'Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương cư Phúc Đức gặp Thiên Việt cùng Hóa Kỵ, đương số
dễ rơi vào cảnh "sướng trước khổ sau" — một lần phát phúc lớn nhưng về sau
lại gặp nhiều xui rủi.`,
  },

  {
    id: 'thieu-duong-tai-phuc-duc-thien-viet-thien-hinh',
    title: 'Thiếu Dương + Thiên Việt + Thiên Hình tại Phúc Đức - Sướng trước khổ sau',
    sao: ['Thiếu Dương'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Việt', 'Thiên Hình'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương cư Phúc Đức gặp Thiên Việt cùng Thiên Hình, đương
số dễ rơi vào cảnh "sướng trước khổ sau" — một lần phát phúc lớn nhưng về
sau lại gặp nhiều xui rủi.`,
  },

  {
    id: 'thieu-duong-tai-phuc-duc-an-quang',
    title: 'Thiếu Dương + Ân Quang tại Phúc Đức - Dòng họ hiền lương',
    sao: ['Thiếu Dương'],
    cung: ['Phúc Đức'],
    ketHop: ['Ân Quang'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương cư Phúc Đức đi cùng Ân Quang, dòng họ của đương số
có nhiều người hiền lương, nhiều duyên giác ngộ và thờ Phật.`,
  },

  {
    id: 'thieu-duong-tai-phuc-duc-thien-quy-phat',
    title: 'Thiếu Dương + Thiên Quý tại Phúc Đức - Dòng họ hiền lương',
    sao: ['Thiếu Dương'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Quý'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương cư Phúc Đức đi cùng Thiên Quý, dòng họ của đương
số có nhiều người hiền lương, nhiều duyên giác ngộ và thờ Phật.`,
  },

  {
    id: 'thieu-duong-tai-phuc-duc-ta-phu-thai-duong-sang',
    title: 'Thiếu Dương + Tả Phù + Thái Dương sáng tại Phúc Đức - Họ hàng vượng phát',
    sao: ['Thiếu Dương'],
    cung: ['Phúc Đức'],
    ketHop: ['Tả Phù', 'Thái Dương'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương cư Phúc Đức đi cùng Tả Phù và Thái Dương sáng,
thời điểm đương số ra đời cũng là lúc họ hàng vượng phát — phúc phần gia
đình hưng thịnh, con cháu dựng vợ gả chồng ổn định.`,
  },

  {
    id: 'thieu-duong-tai-phuc-duc-huu-bat-thai-duong-sang',
    title: 'Thiếu Dương + Hữu Bật + Thái Dương sáng tại Phúc Đức - Họ hàng vượng phát',
    sao: ['Thiếu Dương'],
    cung: ['Phúc Đức'],
    ketHop: ['Hữu Bật', 'Thái Dương'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương cư Phúc Đức đi cùng Hữu Bật và Thái Dương sáng,
thời điểm đương số ra đời cũng là lúc họ hàng vượng phát — phúc phần gia
đình hưng thịnh, con cháu dựng vợ gả chồng ổn định.`,
  },

  {
    id: 'thieu-duong-tai-phuc-duc-thien-khoi-thai-duong-sang',
    title: 'Thiếu Dương + Thiên Khôi + Thái Dương sáng tại Phúc Đức - Họ hàng vượng phát',
    sao: ['Thiếu Dương'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Khôi', 'Thái Dương'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương cư Phúc Đức đi cùng Thiên Khôi và Thái Dương sáng,
thời điểm đương số ra đời cũng là lúc họ hàng vượng phát — phúc phần gia
đình hưng thịnh, con cháu dựng vợ gả chồng ổn định.`,
  },

  {
    id: 'thieu-duong-tai-phuc-duc-thien-viet-thai-duong-sang',
    title: 'Thiếu Dương + Thiên Việt + Thái Dương sáng tại Phúc Đức - Họ hàng vượng phát',
    sao: ['Thiếu Dương'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Việt', 'Thái Dương'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương cư Phúc Đức đi cùng Thiên Việt và Thái Dương sáng,
thời điểm đương số ra đời cũng là lúc họ hàng vượng phát — phúc phần gia
đình hưng thịnh, con cháu dựng vợ gả chồng ổn định.`,
  },

  {
    id: 'thieu-duong-tai-dien-trach',
    title: 'Thiếu Dương tại Điền Trạch',
    sao: ['Thiếu Dương'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Khi Thiếu Dương cư Điền Trạch, đương số có nhà cửa thuận lợi: đi
đâu cũng được giúp đỡ về nhà cửa, không phải lo lắng về nơi ăn chốn ở.

Mặt vất vả là Thiếu Dương cũng đem lại không ít gian truân, đương số thường
phải "tay trắng dựng cơ đồ" mới có được sản nghiệp ổn định.`,
  },

  {
    id: 'thieu-duong-tai-dien-trach-dao-hoa',
    title: 'Thiếu Dương + Đào Hoa tại Điền Trạch - Sớm có nhà cửa',
    sao: ['Thiếu Dương'],
    cung: ['Điền Trạch'],
    ketHop: ['Đào Hoa'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương cư Điền Trạch đi cùng Đào Hoa, đương số sớm có
nhà có cửa từ khi còn trẻ.`,
  },

  {
    id: 'thieu-duong-tai-dien-trach-tu-vi',
    title: 'Thiếu Dương + Tử Vi tại Điền Trạch - Rước Phật về thờ',
    sao: ['Thiếu Dương'],
    cung: ['Điền Trạch'],
    ketHop: ['Tử Vi'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương cư Điền Trạch đi cùng Tử Vi, nhà của đương số dễ
rước Phật về thờ.`,
  },

  {
    id: 'thieu-duong-tai-dien-trach-thien-phu',
    title: 'Thiếu Dương + Thiên Phủ tại Điền Trạch - Rước Phật về thờ',
    sao: ['Thiếu Dương'],
    cung: ['Điền Trạch'],
    ketHop: ['Thiên Phủ'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương cư Điền Trạch đi cùng Thiên Phủ, nhà của đương số
dễ rước Phật về thờ.`,
  },

  {
    id: 'thieu-duong-tai-dien-trach-an-quang',
    title: 'Thiếu Dương + Ân Quang tại Điền Trạch - Rước Phật về thờ',
    sao: ['Thiếu Dương'],
    cung: ['Điền Trạch'],
    ketHop: ['Ân Quang'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương cư Điền Trạch đi cùng Ân Quang, nhà của đương số
dễ rước Phật về thờ.`,
  },

  {
    id: 'thieu-duong-tai-dien-trach-thien-quy',
    title: 'Thiếu Dương + Thiên Quý tại Điền Trạch - Rước Phật về thờ',
    sao: ['Thiếu Dương'],
    cung: ['Điền Trạch'],
    ketHop: ['Thiên Quý'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương cư Điền Trạch đi cùng Thiên Quý, nhà của đương số
dễ rước Phật về thờ.`,
  },

  {
    id: 'thieu-duong-tai-dien-trach-thien-khoi',
    title: 'Thiếu Dương + Thiên Khôi tại Điền Trạch - Điền trạch dồi dào',
    sao: ['Thiếu Dương'],
    cung: ['Điền Trạch'],
    ketHop: ['Thiên Khôi'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương cư Điền Trạch đi cùng Thiên Khôi, ý nghĩa điền
trạch dồi dào càng thêm ứng nghiệm cho đương số.`,
  },

  {
    id: 'thieu-duong-tai-dien-trach-thien-viet',
    title: 'Thiếu Dương + Thiên Việt tại Điền Trạch - Điền trạch dồi dào',
    sao: ['Thiếu Dương'],
    cung: ['Điền Trạch'],
    ketHop: ['Thiên Việt'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương cư Điền Trạch đi cùng Thiên Việt, ý nghĩa điền
trạch dồi dào càng thêm ứng nghiệm cho đương số.`,
  },

  {
    id: 'thieu-duong-tai-dien-trach-thai-duong-sang',
    title: 'Thiếu Dương + Thái Dương sáng tại Điền Trạch - Điền trạch dồi dào',
    sao: ['Thiếu Dương'],
    cung: ['Điền Trạch'],
    ketHop: ['Thái Dương'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương cư Điền Trạch đi cùng Thái Dương ở **Miếu** hoặc
**Vượng**, ý nghĩa điền trạch dồi dào càng thêm ứng nghiệm cho đương số.`,
  },

  {
    id: 'thieu-duong-tai-dien-trach-hoa-loc',
    title: 'Thiếu Dương + Hóa Lộc tại Điền Trạch - Trung vận an nhàn',
    sao: ['Thiếu Dương'],
    cung: ['Điền Trạch'],
    ketHop: ['Hóa Lộc'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương cư Điền Trạch có Hóa Lộc hội chiếu, từ trung vận
trở đi đương số mới gây dựng được cơ ngơi vững vàng, hậu vận an nhàn.`,
  },

  {
    id: 'thieu-duong-tai-dien-trach-loc-ton',
    title: 'Thiếu Dương + Lộc Tồn tại Điền Trạch - Trung vận an nhàn',
    sao: ['Thiếu Dương'],
    cung: ['Điền Trạch'],
    ketHop: ['Lộc Tồn'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương cư Điền Trạch có Lộc Tồn hội chiếu, từ trung vận
trở đi đương số mới gây dựng được cơ ngơi vững vàng, hậu vận an nhàn.`,
  },

  {
    id: 'thieu-duong-tai-quan-loc',
    title: 'Thiếu Dương tại Quan Lộc - công danh sáng lạn',
    sao: ['Thiếu Dương'],
    cung: ['Quan Lộc'],
    doUuTien: 80,
    tomTat: `Khi Thiếu Dương đóng tại Quan Lộc, sự nghiệp và công danh của
đương số sáng lạn, hay gặp may mắn. Đương số có lương tâm nghề nghiệp, sự
nghiệp dễ phất lên nhờ danh tiếng; đi làm được nhiều người mến mộ và lời
nói có sức lan tỏa nên công việc hanh thông.

Yếu tố lan tỏa là điểm đặc trưng: công việc của đương số thường mang tính
phổ cập rộng, tầm ảnh hưởng lớn — nhiều người quý mến, hâm mộ.`,
  },

  {
    id: 'thieu-duong-tai-quan-loc-dao-hoa',
    title: 'Thiếu Dương + Đào Hoa tại Quan Lộc - Nghề thẩm mỹ',
    sao: ['Thiếu Dương'],
    cung: ['Quan Lộc'],
    ketHop: ['Đào Hoa'],
    doUuTien: 75,
    tomTat: `Khi Thiếu Dương cư Quan Lộc đi cùng Đào Hoa, đương số dễ làm các
nghề thuộc lĩnh vực làm đẹp, kiến trúc, thẩm mỹ, thiết kế thời trang, dẫn
chương trình hoặc nghề của người nổi tiếng.`,
  },

  {
    id: 'thieu-duong-tai-quan-loc-hong-loan',
    title: 'Thiếu Dương + Hồng Loan tại Quan Lộc - Nghề thẩm mỹ',
    sao: ['Thiếu Dương'],
    cung: ['Quan Lộc'],
    ketHop: ['Hồng Loan'],
    doUuTien: 75,
    tomTat: `Khi Thiếu Dương cư Quan Lộc đi cùng Hồng Loan, đương số dễ làm
các nghề thuộc lĩnh vực làm đẹp, kiến trúc, thẩm mỹ, thiết kế thời trang,
dẫn chương trình hoặc nghề của người nổi tiếng.`,
  },

  {
    id: 'thieu-duong-tai-quan-loc-thien-dong',
    title: 'Thiếu Dương + Thiên Đồng tại Quan Lộc - Nghề thẩm mỹ',
    sao: ['Thiếu Dương'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Đồng'],
    doUuTien: 75,
    tomTat: `Khi Thiếu Dương cư Quan Lộc đi cùng Thiên Đồng, đương số dễ làm
các nghề thuộc lĩnh vực làm đẹp, kiến trúc, thẩm mỹ, thiết kế thời trang,
dẫn chương trình hoặc nghề của người nổi tiếng.`,
  },

  {
    id: 'thieu-duong-tai-quan-loc-thai-duong-sang-quyen',
    title: 'Thiếu Dương + Thái Dương sáng + Hóa Quyền tại Quan Lộc - Đắc cách',
    sao: ['Thiếu Dương'],
    cung: ['Quan Lộc'],
    ketHop: ['Thái Dương', 'Hóa Quyền'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 75,
    tomTat: `Khi Thiếu Dương cư Quan Lộc đi cùng Thái Dương ở **Miếu** hoặc
**Vượng** và Hóa Quyền, đương số đắc cách — sự nghiệp vững vàng.`,
  },

  {
    id: 'thieu-duong-tai-quan-loc-thai-duong-sang-khoa',
    title: 'Thiếu Dương + Thái Dương sáng + Hóa Khoa tại Quan Lộc - Đắc cách',
    sao: ['Thiếu Dương'],
    cung: ['Quan Lộc'],
    ketHop: ['Thái Dương', 'Hóa Khoa'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 75,
    tomTat: `Khi Thiếu Dương cư Quan Lộc đi cùng Thái Dương ở **Miếu** hoặc
**Vượng** và Hóa Khoa, đương số đắc cách — sự nghiệp vững vàng.`,
  },

  {
    id: 'thieu-duong-tai-quan-loc-thai-duong-sang-loc',
    title: 'Thiếu Dương + Thái Dương sáng + Hóa Lộc tại Quan Lộc - Đắc cách',
    sao: ['Thiếu Dương'],
    cung: ['Quan Lộc'],
    ketHop: ['Thái Dương', 'Hóa Lộc'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 75,
    tomTat: `Khi Thiếu Dương cư Quan Lộc đi cùng Thái Dương ở **Miếu** hoặc
**Vượng** và Hóa Lộc, đương số đắc cách — sự nghiệp vững vàng.`,
  },

  {
    id: 'thieu-duong-tai-quan-loc-kiep-sat',
    title: 'Thiếu Dương + Kiếp Sát tại Quan Lộc - Công danh trắc trở',
    sao: ['Thiếu Dương'],
    cung: ['Quan Lộc'],
    ketHop: ['Kiếp Sát'],
    doUuTien: 75,
    tomTat: `Khi Thiếu Dương cư Quan Lộc đi cùng Kiếp Sát, công danh của đương
số trắc trở, dễ lâm vào cảnh "vạn kiếp bất phục"; sự nghiệp nhiều phen thăng
trầm, "nay thịnh mai suy".`,
  },

  {
    id: 'thieu-duong-tai-quan-loc-hoa-ky',
    title: 'Thiếu Dương + Hóa Kỵ tại Quan Lộc - Công danh trắc trở',
    sao: ['Thiếu Dương'],
    cung: ['Quan Lộc'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 75,
    tomTat: `Khi Thiếu Dương cư Quan Lộc đi cùng Hóa Kỵ, công danh của đương
số trắc trở, dễ lâm vào cảnh "vạn kiếp bất phục"; sự nghiệp nhiều phen
thăng trầm, "nay thịnh mai suy".`,
  },

  {
    id: 'thieu-duong-tai-quan-loc-thien-hinh',
    title: 'Thiếu Dương + Thiên Hình tại Quan Lộc - Công danh trắc trở',
    sao: ['Thiếu Dương'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Hình'],
    doUuTien: 75,
    tomTat: `Khi Thiếu Dương cư Quan Lộc đi cùng Thiên Hình, công danh của
đương số trắc trở, dễ lâm vào cảnh "vạn kiếp bất phục"; sự nghiệp nhiều
phen thăng trầm, "nay thịnh mai suy".`,
  },

  {
    id: 'thieu-duong-tai-no-boc',
    title: 'Thiếu Dương tại Nô Bộc',
    sao: ['Thiếu Dương'],
    cung: ['Nô Bộc'],
    doUuTien: 72,
    tomTat: `Khi Thiếu Dương đóng tại Nô Bộc, bè bạn cùng người làm, người giúp
việc của đương số đều giỏi giang và nhân hậu. Trong đó nhiều người là nam
nhân, có tiếng tăm; bạn bè chăm chỉ và biết lo toan.`,
  },

  {
    id: 'thieu-duong-tai-no-boc-dao-hoa',
    title: 'Thiếu Dương + Đào Hoa tại Nô Bộc - Tình nhân bên ngoài',
    sao: ['Thiếu Dương'],
    cung: ['Nô Bộc'],
    ketHop: ['Đào Hoa'],
    doUuTien: 67,
    tomTat: `Khi Thiếu Dương cư Nô Bộc đi cùng Đào Hoa, đương số dễ có tình
nhân bên ngoài; hôn nhân cũng dễ dang dở nhiều lần.`,
  },

  {
    id: 'thieu-duong-tai-no-boc-kiep-sat',
    title: 'Thiếu Dương + Kiếp Sát tại Nô Bộc - Bạn bè phá hoại',
    sao: ['Thiếu Dương'],
    cung: ['Nô Bộc'],
    ketHop: ['Kiếp Sát'],
    doUuTien: 67,
    tomTat: `Khi Thiếu Dương cư Nô Bộc đi cùng Kiếp Sát, bạn bè của đương số
dễ rơi vào cảnh "nhiệt tình cộng ngu dốt thành phá hoại"; sự giúp đỡ nhận
được chẳng khác nào "gậy ông đập lưng ông" — lợi chưa thấy mà hại đã chất
chồng.`,
  },

  {
    id: 'thieu-duong-tai-no-boc-hoa-ky',
    title: 'Thiếu Dương + Hóa Kỵ tại Nô Bộc - Bạn bè phá hoại',
    sao: ['Thiếu Dương'],
    cung: ['Nô Bộc'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 67,
    tomTat: `Khi Thiếu Dương cư Nô Bộc đi cùng Hóa Kỵ, bạn bè của đương số dễ
rơi vào cảnh "nhiệt tình cộng ngu dốt thành phá hoại"; sự giúp đỡ nhận được
chẳng khác nào "gậy ông đập lưng ông" — lợi chưa thấy mà hại đã chất chồng.`,
  },

  {
    id: 'thieu-duong-tai-no-boc-thien-hinh',
    title: 'Thiếu Dương + Thiên Hình tại Nô Bộc - Bạn bè phá hoại',
    sao: ['Thiếu Dương'],
    cung: ['Nô Bộc'],
    ketHop: ['Thiên Hình'],
    doUuTien: 67,
    tomTat: `Khi Thiếu Dương cư Nô Bộc đi cùng Thiên Hình, bạn bè của đương số
dễ rơi vào cảnh "nhiệt tình cộng ngu dốt thành phá hoại"; sự giúp đỡ nhận
được chẳng khác nào "gậy ông đập lưng ông" — lợi chưa thấy mà hại đã chất
chồng.`,
  },

  {
    id: 'thieu-duong-tai-thien-di',
    title: 'Thiếu Dương tại Thiên Di',
    sao: ['Thiếu Dương'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `Khi Thiếu Dương đóng tại Thiên Di, sao này phát huy tính động
giống Thái Dương — thúc đẩy đương số đi xa, hoạt động bên ngoài nhiều. Ra
ngoài đương số khiêm tốn, hay gặp quý nhân giúp đỡ; cách cư xử cởi mở, lạc
quan nên dễ tạo cảm tình. Đương số thường có nhiều dịp đi xa.`,
  },

  {
    id: 'thieu-duong-tai-thien-di-dao-hoa',
    title: 'Thiếu Dương + Đào Hoa tại Thiên Di - Ra ngoài nổi tiếng',
    sao: ['Thiếu Dương'],
    cung: ['Thiên Di'],
    ketHop: ['Đào Hoa'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương cư Thiên Di đi cùng Đào Hoa, đương số ra ngoài
nổi tiếng và được nhiều người khác giới hâm mộ.`,
  },

  {
    id: 'thieu-duong-tai-thien-di-hong-loan',
    title: 'Thiếu Dương + Hồng Loan tại Thiên Di - Ra ngoài nổi tiếng',
    sao: ['Thiếu Dương'],
    cung: ['Thiên Di'],
    ketHop: ['Hồng Loan'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương cư Thiên Di đi cùng Hồng Loan, đương số ra ngoài
nổi tiếng và được nhiều người khác giới hâm mộ.`,
  },

  {
    id: 'thieu-duong-tai-thien-di-thai-duong-sang-loc',
    title: 'Thiếu Dương + Thái Dương sáng + Hóa Lộc tại Thiên Di - Hổ mọc thêm cánh',
    sao: ['Thiếu Dương'],
    cung: ['Thiên Di'],
    ketHop: ['Thái Dương', 'Hóa Lộc'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương cư Thiên Di đi cùng Thái Dương ở **Miếu** hoặc
**Vượng** và Hóa Lộc, cách như "hổ mọc thêm cánh" — đương số học vấn cao,
danh tiếng nổi trội trong chuyên môn, đặc biệt thuận lợi cho việc xuất
ngoại, học hành và mở rộng quan hệ xã hội.`,
  },

  {
    id: 'thieu-duong-tai-thien-di-thai-duong-sang-khoa',
    title: 'Thiếu Dương + Thái Dương sáng + Hóa Khoa tại Thiên Di - Hổ mọc thêm cánh',
    sao: ['Thiếu Dương'],
    cung: ['Thiên Di'],
    ketHop: ['Thái Dương', 'Hóa Khoa'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương cư Thiên Di đi cùng Thái Dương ở **Miếu** hoặc
**Vượng** và Hóa Khoa, cách như "hổ mọc thêm cánh" — đương số học vấn cao,
danh tiếng nổi trội trong chuyên môn, đặc biệt thuận lợi cho việc xuất
ngoại, học hành và mở rộng quan hệ xã hội.`,
  },

  {
    id: 'thieu-duong-tai-thien-di-thai-duong-sang-quyen',
    title: 'Thiếu Dương + Thái Dương sáng + Hóa Quyền tại Thiên Di - Hổ mọc thêm cánh',
    sao: ['Thiếu Dương'],
    cung: ['Thiên Di'],
    ketHop: ['Thái Dương', 'Hóa Quyền'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương cư Thiên Di đi cùng Thái Dương ở **Miếu** hoặc
**Vượng** và Hóa Quyền, cách như "hổ mọc thêm cánh" — đương số học vấn cao,
danh tiếng nổi trội trong chuyên môn, đặc biệt thuận lợi cho việc xuất
ngoại, học hành và mở rộng quan hệ xã hội.`,
  },

  {
    id: 'thieu-duong-tai-tat-ach',
    title: 'Thiếu Dương tại Tật Ách - mắt trái, thần kinh',
    sao: ['Thiếu Dương'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `Khi Thiếu Dương đóng tại Tật Ách, đương số có khả năng hóa giải
tai nạn và bệnh tật ở mức nhỏ, hiệu quả cứu giải tương đương Tứ Đức.

Những bệnh có thể gặp phải gồm bệnh về mắt — đặc biệt là mắt trái — và bệnh
thần kinh, tương tự bệnh chứng do Thái Dương gây ra. Bản chất của Thiếu
Dương là sự nỗ lực, vì thế đương số phải tự mình chú tâm vào sức khỏe và
chủ động thay đổi thói quen sinh hoạt thì sao này mới phát huy được khả
năng cứu giải.`,
  },

  {
    id: 'thieu-duong-tai-tat-ach-khong-kiep',
    title: 'Thiếu Dương + Địa Không + Địa Kiếp tại Tật Ách - công dã tràng',
    sao: ['Thiếu Dương'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    cung: ['Tật Ách'],
    doUuTien: 73,
    tomTat: `Khi Thiếu Dương cư Tật Ách đi cùng Địa Không và Địa Kiếp, sự cố
gắng của đương số chẳng khác nào "công dã tràng" — nỗ lực nhiều mà hiệu quả
thu về chẳng được bao nhiêu.`,
  },

  {
    id: 'thieu-duong-thieu-am-hoa-khoa',
    title: 'Thiếu Dương + Thiếu Âm + Hóa Khoa - cứu khốn phò nguy',
    sao: ['Thiếu Dương', 'Thiếu Âm'],
    ketHop: ['Hóa Khoa'],
    doUuTien: 78,
    tomTat: `Khi Thiếu Dương cùng Thiếu Âm và Hóa Khoa hội tụ (đồng cung hoặc
xung chiếu), đương số có một bộ sao gia tăng phúc thọ, cứu khốn phò nguy và
giải trừ nhiều bệnh tật, tai họa.

Đặc trưng của bộ này:

- Gặp đại nạn cũng có thể qua khỏi
- Bệnh nặng dễ hóa nhẹ
- Có duyên gặp thầy giỏi thuốc hay
- Khả năng tự hồi phục cao

Đây là một trong những bộ giải mạnh nhất trong tử vi nhờ kết hợp được ba
yếu tố: âm tính ẩn chứa và ôn hòa của Thiếu Âm, dương tính chủ động và
nhân hậu của Thiếu Dương, cùng Hóa Khoa — vốn được coi là Đệ Nhất Giải
Thần. Bộ này đặc biệt tốt khi đương số bước vào hạn bệnh hoặc hạn đau ốm,
giúp gia tăng khả năng sống sót.`,
  },

  {
    id: 'thieu-duong-tai-tai-bach',
    title: 'Thiếu Dương tại Tài Bạch',
    sao: ['Thiếu Dương'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `Khi Thiếu Dương đóng tại Tài Bạch, sao này mang tính vượng. Đương
số tuy phải vất vả trong việc kiếm tiền nhưng không đến mức túng thiếu, hay
đem tiền đi làm từ thiện và công đức; nhìn chung không gặp vấn đề khó khăn
với tiền bạc.

Mặt khó là khi gặp khó khăn, đương số dễ rơi vào cảnh "cháy túi", thậm chí
bị dồn đến cảnh khốn cùng. Tuy vậy con đường tài lộc của đương số có đặc
trưng "trong nguy có cơ" — càng trong nguy khó càng ló cơ may. Khi nhiều
người chật vật mưu sinh thì đương số lại có thể xoay sở, tìm được nguồn lợi
và biến nghịch cảnh thành cơ hội.

Khi có thêm nhiều Tài Tinh, đương số thường có chuyên môn về tài chính,
kiếm tiền có yếu tố nước ngoài và đầu tư vào thị trường tài chính quốc tế.`,
  },

  {
    id: 'thieu-duong-tai-tai-bach-hoa-loc',
    title: 'Thiếu Dương + Hóa Lộc tại Tài Bạch - Lộc Mã giao trì',
    sao: ['Thiếu Dương'],
    ketHop: ['Hóa Lộc'],
    cung: ['Tài Bạch'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương cư Tài Bạch đi cùng Hóa Lộc, tài lộc của đương số
càng tốt thêm.`,
  },

  {
    id: 'thieu-duong-tai-tai-bach-thien-ma',
    title: 'Thiếu Dương + Thiên Mã tại Tài Bạch - Lộc Mã giao trì',
    sao: ['Thiếu Dương'],
    ketHop: ['Thiên Mã'],
    cung: ['Tài Bạch'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương cư Tài Bạch đi cùng Thiên Mã (cách Lộc Mã giao
trì), tài lộc của đương số càng tốt thêm.`,
  },

  {
    id: 'thieu-duong-tai-tu-tuc',
    title: 'Thiếu Dương tại Tử Tức - dễ sinh con trai',
    sao: ['Thiếu Dương'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Khi Thiếu Dương đóng tại Tử Tức, đương số được hưởng phúc từ con
cái. Con cái hòa thuận, hiếu thảo và đương số dễ sinh con trai. Các con
thông minh, nhanh nhẹn, hoạt náo, dễ nổi tiếng; bản tính tự giác, kỷ luật
cao nên ít để cha mẹ phải nhắc nhở nhiều.`,
  },

  {
    id: 'thieu-duong-tai-tu-tuc-da-la',
    title: 'Thiếu Dương + Đà La tại Tử Tức - con ương bướng',
    sao: ['Thiếu Dương'],
    ketHop: ['Đà La'],
    cung: ['Tử Tức'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương cư Tử Tức đi cùng Đà La (vốn là sao cứng đầu),
tính khí con cái của đương số trở nên ương bướng.`,
  },

  {
    id: 'thieu-duong-tai-tu-tuc-linh-tinh',
    title: 'Thiếu Dương + Linh Tinh tại Tử Tức - bằng mặt không bằng lòng',
    sao: ['Thiếu Dương'],
    ketHop: ['Linh Tinh'],
    cung: ['Tử Tức'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương cư Tử Tức đi cùng Linh Tinh, mối quan hệ với con
cái dễ rơi vào cảnh "bằng mặt không bằng lòng": mâu thuẫn tích tụ ngấm ngầm,
khi bùng phát thì con cái có thể bỏ nhà đi, để lại nhiều phiền muộn cho cha
mẹ.`,
  },

  {
    id: 'thieu-duong-tai-tu-tuc-ta-phu',
    title: 'Thiếu Dương + Tả Phù tại Tử Tức - con quân tử',
    sao: ['Thiếu Dương'],
    ketHop: ['Tả Phù'],
    cung: ['Tử Tức'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương cư Tử Tức đi cùng Tả Phù, con cái của đương số
giữ được khí chất chính trực của bậc quân tử: sáng trí hiền tâm, biết cư xử
phải phép và sau này trở thành điểm tựa cho gia đình.`,
  },

  {
    id: 'thieu-duong-tai-tu-tuc-huu-bat',
    title: 'Thiếu Dương + Hữu Bật tại Tử Tức - con quân tử',
    sao: ['Thiếu Dương'],
    ketHop: ['Hữu Bật'],
    cung: ['Tử Tức'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương cư Tử Tức đi cùng Hữu Bật, con cái của đương số
giữ được khí chất chính trực của bậc quân tử: sáng trí hiền tâm, biết cư xử
phải phép và sau này trở thành điểm tựa cho gia đình.`,
  },

  {
    id: 'thieu-duong-tai-tu-tuc-thien-khoi',
    title: 'Thiếu Dương + Thiên Khôi tại Tử Tức - con quân tử',
    sao: ['Thiếu Dương'],
    ketHop: ['Thiên Khôi'],
    cung: ['Tử Tức'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương cư Tử Tức đi cùng Thiên Khôi, con cái của đương
số giữ được khí chất chính trực của bậc quân tử: sáng trí hiền tâm, biết cư
xử phải phép và sau này trở thành điểm tựa cho gia đình.`,
  },

  {
    id: 'thieu-duong-tai-tu-tuc-thien-viet',
    title: 'Thiếu Dương + Thiên Việt tại Tử Tức - con quân tử',
    sao: ['Thiếu Dương'],
    ketHop: ['Thiên Việt'],
    cung: ['Tử Tức'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương cư Tử Tức đi cùng Thiên Việt, con cái của đương
số giữ được khí chất chính trực của bậc quân tử: sáng trí hiền tâm, biết cư
xử phải phép và sau này trở thành điểm tựa cho gia đình.`,
  },

  {
    id: 'thieu-duong-tai-phu-the',
    title: 'Thiếu Dương tại Phu Thê - dễ lấy chồng xa',
    sao: ['Thiếu Dương'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `Khi Thiếu Dương đóng tại Phu Thê, đời sống vợ chồng của đương số
thiếu yên bình.

Người hôn phối có nhan sắc, đứng đắn, dễ có giai đoạn mộ đạo và thích tìm
hiểu tâm linh, Phật pháp. Theo quy luật xa quê, vợ chồng của đương số dễ
phải xa quê, cách quán; đáng chú ý là sau khi kết hôn, công danh của đương
số phát triển hơn trước.

Cách này thuận lợi với nữ mệnh — người bạn đời thường chính trực, sống có
nghĩa có tình. Sự cứng rắn của đối phương đôi khi tạo cảm giác gò bó, song
nếu nữ mệnh biết khéo léo dựa vào chồng và nương nhờ đúng lúc thì cuộc sống
gia đình trong ấm ngoài êm.`,
  },

  {
    id: 'thieu-duong-tai-phu-the-hoa-tinh',
    title: 'Thiếu Dương + Hỏa Tinh tại Phu Thê - lấy chồng xa',
    sao: ['Thiếu Dương'],
    ketHop: ['Hỏa Tinh'],
    cung: ['Phu Thê'],
    doUuTien: 73,
    tomTat: `Khi Thiếu Dương cư Phu Thê đi cùng Hỏa Tinh, đương số dễ lấy
chồng xa, thậm chí lấy người nước ngoài. Sau khi kết hôn, đương số phải cố
gắng nhập gia tùy tục nơi quê chồng với nhiều tập quán lạ lẫm.`,
  },

  {
    id: 'thieu-duong-tai-phu-the-linh-tinh',
    title: 'Thiếu Dương + Linh Tinh tại Phu Thê - lấy chồng xa',
    sao: ['Thiếu Dương'],
    ketHop: ['Linh Tinh'],
    cung: ['Phu Thê'],
    doUuTien: 73,
    tomTat: `Khi Thiếu Dương cư Phu Thê đi cùng Linh Tinh, đương số dễ lấy
chồng xa, thậm chí lấy người nước ngoài. Sau khi kết hôn, đương số phải cố
gắng nhập gia tùy tục nơi quê chồng với nhiều tập quán lạ lẫm.`,
  },

  {
    id: 'thieu-duong-tai-phu-the-thai-duong',
    title: 'Thiếu Dương + Thái Dương tại Phu Thê - lấy chồng xa',
    sao: ['Thiếu Dương'],
    ketHop: ['Thái Dương'],
    cung: ['Phu Thê'],
    doUuTien: 73,
    tomTat: `Khi Thiếu Dương cư Phu Thê đi cùng Thái Dương, đương số dễ lấy
chồng xa, thậm chí lấy người nước ngoài. Sau khi kết hôn, đương số phải cố
gắng nhập gia tùy tục nơi quê chồng với nhiều tập quán lạ lẫm.`,
  },

  {
    id: 'thieu-duong-tai-phu-the-cu-mon',
    title: 'Thiếu Dương + Cự Môn tại Phu Thê - lấy chồng xa',
    sao: ['Thiếu Dương'],
    ketHop: ['Cự Môn'],
    cung: ['Phu Thê'],
    doUuTien: 73,
    tomTat: `Khi Thiếu Dương cư Phu Thê đi cùng Cự Môn, đương số dễ lấy chồng
xa, thậm chí lấy người nước ngoài. Sau khi kết hôn, đương số phải cố gắng
nhập gia tùy tục nơi quê chồng với nhiều tập quán lạ lẫm.`,
  },

  {
    id: 'thieu-duong-tai-phu-the-van-xuong',
    title: 'Thiếu Dương + Văn Xương tại Phu Thê - cách đẹp',
    sao: ['Thiếu Dương'],
    ketHop: ['Văn Xương'],
    cung: ['Phu Thê'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương cư Phu Thê đi cùng Văn Xương, cách cục vẫn thành
cách đẹp cho đương số.`,
  },

  {
    id: 'thieu-duong-tai-phu-the-van-khuc',
    title: 'Thiếu Dương + Văn Khúc tại Phu Thê - cách đẹp',
    sao: ['Thiếu Dương'],
    ketHop: ['Văn Khúc'],
    cung: ['Phu Thê'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương cư Phu Thê đi cùng Văn Khúc, cách cục vẫn thành
cách đẹp cho đương số.`,
  },

  {
    id: 'thieu-duong-tai-phu-the-thien-khoi',
    title: 'Thiếu Dương + Thiên Khôi tại Phu Thê - cách đẹp',
    sao: ['Thiếu Dương'],
    ketHop: ['Thiên Khôi'],
    cung: ['Phu Thê'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương cư Phu Thê đi cùng Thiên Khôi, cách cục vẫn thành
cách đẹp cho đương số.`,
  },

  {
    id: 'thieu-duong-tai-phu-the-thien-viet',
    title: 'Thiếu Dương + Thiên Việt tại Phu Thê - cách đẹp',
    sao: ['Thiếu Dương'],
    ketHop: ['Thiên Việt'],
    cung: ['Phu Thê'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương cư Phu Thê đi cùng Thiên Việt, cách cục vẫn thành
cách đẹp cho đương số.`,
  },

  {
    id: 'thieu-duong-tai-huynh-de',
    title: 'Thiếu Dương tại Huynh Đệ - nhiều anh em trai',
    sao: ['Thiếu Dương'],
    cung: ['Huynh Đệ'],
    doUuTien: 70,
    tomTat: `Khi Thiếu Dương đóng tại Huynh Đệ, anh chị em của đương số hòa
thuận, hay giúp đỡ lẫn nhau và đương số thường có anh em trai nhiều hơn
chị em gái — do Thiếu Dương mang đặc tính tương đồng với Thái Dương, tượng
trưng cho nam giới.

Quan hệ anh em trong cách này khá sòng phẳng, "có vay có trả, có ơn tất
báo": nếu đương số biết hết lòng giúp đỡ thì sau này cũng dễ nhận lại sự
tương trợ. Trong hành xử, anh em đương số làm việc gì cũng minh bạch, quang
minh chính đại, không ưa vòng vo hay giấu giếm sau lưng.`,
  },

  {
    id: 'thieu-duong-tai-huynh-de-kinh-duong',
    title: 'Thiếu Dương + Kình Dương tại Huynh Đệ - anh em kiêu căng',
    sao: ['Thiếu Dương'],
    ketHop: ['Kình Dương'],
    cung: ['Huynh Đệ'],
    doUuTien: 65,
    tomTat: `Khi Thiếu Dương cư Huynh Đệ đi cùng Kình Dương, anh chị em của
đương số hay ỷ vào việc mình tài giỏi hơn người mà trở nên kiêu căng, ngạo
mạn.`,
  },

  {
    id: 'thieu-duong-tai-huynh-de-hoa-tinh',
    title: 'Thiếu Dương + Hỏa Tinh tại Huynh Đệ - anh em kiêu căng',
    sao: ['Thiếu Dương'],
    ketHop: ['Hỏa Tinh'],
    cung: ['Huynh Đệ'],
    doUuTien: 65,
    tomTat: `Khi Thiếu Dương cư Huynh Đệ đi cùng Hỏa Tinh, anh chị em của đương
số hay ỷ vào việc mình tài giỏi hơn người mà trở nên kiêu căng, ngạo mạn.`,
  },

  {
    id: 'thieu-duong-loi-khuyen',
    title: 'Lời khuyên cho người Thiếu Dương',
    sao: ['Thiếu Dương'],
    doUuTien: 35,
    tomTat: `Thiếu Dương là sao Thiện tinh — vừa là một thứ "ánh sáng phụ" bổ
trợ, vừa là phép thử để đương số học cách dung hòa, giữ sự công bằng và
thẳng thắn trong cách sống.

Điểm mạnh của đương số:

- Thông minh, nhân hậu
- Nổi trội, được nhiều người yêu mến
- Khả năng cứu giải mạnh
- Lạc quan, tích cực

Điểm yếu cần lưu ý:

- Lắm tài mà nhiều tật, do tam hợp với Thiên Không, Đào Hoa và Kiếp Sát
- Lạc quan quá độ dễ tự rước họa
- Đào hoa dễ làm dở dang duyên tình

Bí quyết để phát huy tối đa Thiếu Dương:

- Giữ khí chất chính trực của bộ Tứ Đức luôn chiếu
- Tìm hiểu tâm linh, Phật pháp để trí tuệ thêm sâu sắc
- Cẩn thận với đào hoa, không để ánh sáng của mình thu hút sai người
- Không vượt quyền, luôn kính trên nhường dưới
- Kiềm chế tính nổi trội quá mức, nhường cho người khác có không gian tỏa
  sáng

Khi biết dung hòa giữa dương tính nổi trội bên ngoài và tâm linh hướng nội
bên trong, Thiếu Dương sẽ trở thành ngọn đuốc dẫn lối cho cả đương số và
những người xung quanh.`,
  },
];
