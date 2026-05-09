import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO PHƯỢNG CÁC - Thổ, Cát Tinh.
 * LUÔN đồng cung với GIẢI THẦN (cùng khởi từ Tuất - hardcode trong engine).
 *
 * Cùng LONG TRÌ tạo bộ LONG PHƯỢNG - phần CHUNG (bộ Long Phượng + bộ Hiền Thần
 * + Long Phượng + Tứ Linh) đã viết tại long-tri.ts.
 *
 * Một trong TỨ LINH (Cái-Long-Hổ-Phượng) - phần chung đã viết tại thanh-long.ts.
 * Hình tượng: CÁI TAI.
 */
export const luanGiai_PhuongCac: DoanLuanGiai[] = [
  {
    id: 'phuong-cac-tinh-chat-chung',
    title: 'Phượng Các - Đặc tính chung',
    sao: ['Phượng Các'],
    doUuTien: 32,
    tomTat: `**Phượng Các** thuộc nhóm phụ tinh cát, được xếp vào hàng quý tinh
và đài các tinh, ngũ hành Thổ, hóa khí là cát tinh. Sao này được an theo quy
tắc lấy cung Tuất khởi làm năm Tý rồi chạy ngược chiều kim đồng hồ tới địa
chi của năm sinh.

Trong hệ thống tử vi, Phượng Các giữ một vị thế khá đặc biệt: là một trong
**Tứ Linh** (Cái - Long - Hổ - Phượng), cùng Long Trì tạo bộ **Long Phượng**,
và luôn đồng cung với Giải Thần — quy luật hardcode trong engine an sao.

Bản chất của Phượng Các toát ra vẻ ôn hòa, vui vẻ, thông minh, mang nhân
cách cao thượng và khí chất hơn người. Đương số có sao này thường có dung
mạo khôi vĩ, tú lệ, tính tình chính trực thẳng thắn và là người luôn đứng
ra bảo vệ lẽ phải.

Hình tượng cơ thể của Phượng Các là cái tai. Đặc tính bao trùm gồm công
danh, thanh cao, quý hiển, may mắn, quyền quý và khoa bảng.`,
  },

  {
    id: 'phuong-cac-giai-than-bua-ho-menh',
    title: 'Phượng Các + Giải Thần - bộ "Phượng Giải" bùa hộ mệnh',
    sao: ['Phượng Các', 'Giải Thần'],
    doUuTien: 75,
    tomTat: `Phượng Các luôn đi cùng Giải Thần tạo thành bộ **Phượng Giải** —
đây là quy luật an sao bắt buộc, không thể tách rời.

Giải Thần vốn là thiện tinh, chủ về giải ách trừ hung, may mắn phúc thọ và
độ lượng. Khi đứng cùng Phượng Các tại Mệnh, bộ này khiến đương số có dung
mạo đẹp, khí chất thanh cao, tâm tính khoan hòa, đức độ, nhân từ và vị tha.
Tựa như một lá bùa hộ mệnh, bộ Phượng Giải thường giúp đương số được giải
tai ách bất ngờ và hay gặp may.

Phạm vi tác dụng của bộ này khá rộng:

- Tăng phúc thọ cho cha mẹ, dòng họ
- Mang lại thuận lợi trong thi cử và công danh
- Tại Tật Ách giảm họa, giải bệnh
- Tại Tài Bạch giảm hao hụt, tăng may mắn nếu đương số biết làm việc thiện

Tuy vậy, sức giải của bộ này có giới hạn — Giải Thần chỉ hóa giải được tai
ương nhỏ. Nếu gặp đại hạn hung hiểm hay bệnh nặng, Giải Thần lại trở thành
"tử thần", báo hiệu sự ra đi đột ngột. Vì lẽ ấy, Phượng Giải vừa tượng
trưng cho phúc lộc may mắn, vừa nhắc nhở đương số phải sống thiện lành,
tích đức hành thiện để giữ phúc.`,
  },

  {
    id: 'phuong-cac-giai-than-quan-phuc',
    title: 'Phượng Giải + Thiên Quan + Thiên Phúc - càng ứng nghiệm',
    sao: ['Phượng Các', 'Giải Thần'],
    ketHop: ['Thiên Quan', 'Thiên Phúc'],
    doUuTien: 70,
    tomTat: `Khi bộ Phượng Giải gặp thêm Thiên Quan và Thiên Phúc, hiệu lực
giải tai ách càng ứng nghiệm rõ rệt — may mắn và phúc thọ của đương số
được tăng cường thấy rõ.`,
  },

  {
    id: 'phuong-cac-tuong-mao',
    title: 'Phượng Các - Tướng mạo (cái tai)',
    sao: ['Phượng Các'],
    cung: ['Mệnh'],
    doUuTien: 50,
    tomTat: `Đương số có Phượng Các thủ Mệnh thường mang nhan sắc đẹp, da
mặt hồng hào và thanh tú.

Theo hình tượng cơ thể, Phượng Các tượng trưng cho cái tai, vì vậy đương
số có đôi tai đẹp, dày và khả năng thính giác tốt hơn người thường.`,
  },

  {
    id: 'phuong-cac-tuong-mao-nu',
    title: 'Phượng Các - Tướng mạo (nữ mệnh)',
    sao: ['Phượng Các'],
    cung: ['Mệnh'],
    gioiTinh: 'Nữ',
    doUuTien: 45,
    tomTat: `Nữ mệnh có Phượng Các thủ Mệnh toát lên vẻ đoan trang, quý
phái. Da mặt đương số hồng hào thanh tú, đôi tai dày đẹp và thính giác
nhạy bén.`,
  },

  {
    id: 'phuong-cac-tuong-mao-nam',
    title: 'Phượng Các - Tướng mạo (nam mệnh)',
    sao: ['Phượng Các'],
    cung: ['Mệnh'],
    gioiTinh: 'Nam',
    doUuTien: 45,
    tomTat: `Nam mệnh có Phượng Các thủ Mệnh mang dáng vẻ khôi vĩ, phong độ.
Đôi tai của đương số dày đẹp và thính giác tốt hơn người thường.`,
  },

  {
    id: 'phuong-cac-co-vu-tau-luu-nhac-sy',
    title: 'Phượng Các + Cơ/Vũ/Tấu/Lưu - nhạc sỹ nghệ sỹ',
    sao: ['Phượng Các'],
    ketHop: ['Thiên Cơ', 'Vũ Khúc', 'Tấu Thư', 'Lưu Hà'],
    doUuTien: 75,
    tomTat: `Khi Phượng Các gặp đầy đủ Thiên Cơ, Vũ Khúc, Tấu Thư và Lưu
Hà, đương số như được trời phú cho năng khiếu nghệ thuật, có thể trở thành
nhạc sỹ hoặc nghệ sỹ âm nhạc nổi tiếng.

Lý giải cách cục: Phượng Các là cái tai với thính giác tốt; khi kết hợp
cùng Thiên Cơ (mưu trí, tạo tác), Vũ Khúc (hành động), Tấu Thư (giọng
hát, văn chương) và Lưu Hà (hùng biện, lưu loát), đương số hội đủ điều
kiện cho con đường nghệ thuật. Đây là một trong những cách nghệ thuật
đẹp nhất gắn với Phượng Các.`,
  },

  {
    id: 'phuong-cac-tai-menh',
    title: 'Phượng Các tại Mệnh - thông minh ôn hòa',
    sao: ['Phượng Các'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Đương số có Phượng Các thủ Mệnh thường thông minh, tuấn kiệt và
giàu văn chất. Tính tình ôn hòa nhân hậu, thanh tao điềm đạm cởi mở; chính
trực và luôn đứng về phía lẽ phải. Nhân cách cao thượng cùng khí chất cao
quý là dấu ấn dễ nhận thấy.

Về công danh tài lộc, đương số gặp may mắn trong khoa bảng văn chương,
thường thi đỗ cao và có khoa giáp lớn. Tài lộc và điền sản đều được tăng
cường, hôn nhân thuận lợi (dễ yêu, dễ cưới, vợ chồng tương đắc), đường
sinh nở cũng dễ dàng — sinh con dễ nuôi.

Một điểm nổi bật là sự vẹn toàn nhiều mặt: nhan sắc, tính hạnh, tài lộc và
gia đạo đều cân đối.

Phượng Các vốn chủ về hỷ sự, vì vậy đương số thường gặp:

- Chuyện vui trong gia đình
- Cưới xin thuận lợi
- Sinh nở dễ dàng
- Con cái thông minh, dễ nuôi`,
  },

  {
    id: 'phuong-cac-tai-menh-nu',
    title: 'Phượng Các tại Mệnh - nữ mệnh đoan trang',
    sao: ['Phượng Các'],
    cung: ['Mệnh'],
    gioiTinh: 'Nữ',
    doUuTien: 72,
    tomTat: `Nữ mệnh có Phượng Các thủ Mệnh đoan trang trong nết hạnh, phẩm
hạnh thanh cao quý phái. Đương số vẹn toàn cả về nhan sắc, tính hạnh, tài
lộc lẫn gia đạo, đặc biệt may mắn trong hôn nhân và sinh nở.`,
  },

  {
    id: 'phuong-cac-quang-quy-co-nguyet-bac-sy',
    title: 'Phượng Các + Quang Quý + Cơ Nguyệt Đồng Lương - bác sỹ tai mũi họng',
    sao: ['Phượng Các'],
    ketHop: ['Ân Quang', 'Thiên Quý', 'Thiên Cơ', 'Thái Âm', 'Thiên Đồng', 'Thiên Lương'],
    cung: ['Quan Lộc'],
    doUuTien: 75,
    tomTat: `Khi Phượng Các tại Quan Lộc gặp đủ Ân Quang, Thiên Quý cùng cách
cục Cơ Nguyệt Đồng Lương, đương số thường đi vào nghề bác sỹ tai mũi họng.

Lý giải: Phượng Các là cái tai, kết hợp cùng các sao y học (Cơ Nguyệt Đồng
Lương) và quý nhân (Quang Quý) thì đặc tính cơ thể của sao biến thành
chuyên môn nghề nghiệp. Tương tự cách Long Trì (cái mũi) hay Phá Toái
(cuống họng), Phượng Các (cái tai) hợp với nghề chữa tai. Đây là cách hóa
giải đẹp — biến đặc tính cơ thể thành chuyên môn nghề nghiệp hữu ích.`,
  },

  {
    id: 'phuong-cac-ky-da-khong-kiep-tai-diec',
    title: 'Phượng Các + Hóa Kỵ + Đà La + Không Kiếp - tai điếc',
    sao: ['Phượng Các'],
    ketHop: ['Hóa Kỵ', 'Đà La', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 65,
    tomTat: `Phượng Các đi cùng Hóa Kỵ, Đà La, Địa Không và Địa Kiếp khiến
đương số dễ gặp vấn đề về tai như tai điếc hoặc nghễnh ngãng.

Vì Phượng Các vốn là cái tai, khi gặp các sao xấu (Kỵ, Đà, Không, Kiếp)
thì bệnh tai có xu hướng trở nặng. Lời khuyên cho đương số là chăm sóc
thính giác từ trẻ và tránh môi trường ồn ào.`,
  },

  {
    id: 'phuong-cac-tai-phu-mau',
    title: 'Phượng Các tại Phụ Mẫu',
    sao: ['Phượng Các'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Phượng Các đóng tại Phụ Mẫu giúp tăng thọ cho cha mẹ và đem lại
nhiều may mắn cho đương số trên phương diện gia đình.

Cha mẹ của đương số thường có dung mạo đoan chính, tính tình ôn hòa phúc
hậu, thanh cao và có tài chính cùng điền sản đáng kể.`,
  },

  {
    id: 'phuong-cac-phu-mau-tam-thai-bat-toa-hoa-loc',
    title: 'Phượng Các Phụ Mẫu + Tam Thai + Bát Tọa + Hóa Lộc - cha mẹ học thức giàu sang',
    sao: ['Phượng Các'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Tam Thai', 'Bát Tọa', 'Hóa Lộc'],
    doUuTien: 70,
    tomTat: `Khi Phượng Các tại Phụ Mẫu gặp thêm Tam Thai, Bát Tọa và Hóa
Lộc, cha mẹ của đương số là người có học thức và địa vị xã hội. Gia đình
giàu sang, có tài chính và điền sản vững chắc.`,
  },

  {
    id: 'phuong-cac-phu-mau-cat-van-tinh',
    title: 'Phượng Các Phụ Mẫu + Văn tinh - cha mẹ thành đạt học thức',
    sao: ['Phượng Các'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Lưu Niên Văn Tinh', 'Hóa Khoa'],
    doUuTien: 70,
    tomTat: `Phượng Các tại Phụ Mẫu hội cùng Văn Xương, Văn Khúc hoặc Lưu
Niên Văn Tinh khiến cha mẹ của đương số là người thành đạt, có học thức
và vị trí trong xã hội. Con cháu cũng nhờ đó mà được hưởng nhiều phúc
phần.`,
  },

  {
    id: 'phuong-cac-tai-phuc-duc',
    title: 'Phượng Các tại Phúc Đức - bộ Tứ Linh',
    sao: ['Phượng Các'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `Phượng Các đóng tại Phúc Đức mang lại phúc khí tốt cho cả dòng
họ. Trong họ thường có nhiều người khá giả, nhiều người đỗ khoa bảng cao
và truyền thống phẩm hạnh đạo đức được giữ gìn tốt. Mồ mả ông bà tổ tiên
yên đẹp, phát phước cho con cháu đời sau.`,
  },

  {
    id: 'phuong-cac-phuc-duc-tu-linh',
    title: 'Phượng Các Phúc Đức + Long Trì + Hoa Cái + Bạch Hổ - bộ Tứ Linh',
    sao: ['Phượng Các'],
    cung: ['Phúc Đức'],
    ketHop: ['Long Trì', 'Hoa Cái', 'Bạch Hổ'],
    doUuTien: 73,
    tomTat: `Khi Phượng Các tại Phúc Đức hội đủ Long Trì, Hoa Cái và Bạch Hổ
sẽ tạo thành bộ **Tứ Linh** tại Phúc Đức. Trong dòng họ đương số nhiều
người đỗ khoa bảng và có phẩm hạnh cao; mồ mả tổ tiên đẹp, yên vị và
phát phúc cho hậu thế.`,
  },

  {
    id: 'phuong-cac-phuc-duc-khoa-xuong-khoi',
    title: 'Phượng Các Phúc Đức + Hóa Khoa + Văn Xương + Thiên Khôi - dòng họ thành danh',
    sao: ['Phượng Các'],
    cung: ['Phúc Đức'],
    ketHop: ['Hóa Khoa', 'Văn Xương', 'Thiên Khôi'],
    doUuTien: 73,
    tomTat: `Phượng Các tại Phúc Đức hội cùng Hóa Khoa, Văn Xương và Thiên
Khôi khiến họ hàng đương số không chỉ khá giả mà còn có nhiều người
thành danh, mang lại tiếng thơm cho gia tộc.`,
  },

  {
    id: 'phuong-cac-tai-dien-trach',
    title: 'Phượng Các tại Điền Trạch - lầu son gác tía',
    sao: ['Phượng Các'],
    cung: ['Điền Trạch'],
    doUuTien: 78,
    tomTat: `Phượng Các đóng tại Điền Trạch được ví như lộc trời ban cho
đương số về phương diện nhà cửa đất đai.

Nhà cửa của đương số rộng rãi, sang trọng, thường ở nơi cao như nhà lầu
hay chung cư. Trong nhà có nhiều hoành phi câu đối — biểu tượng cho nề
nếp gia phong và sự học. Hàng xóm xung quanh phần lớn là người có địa vị
và chức sắc trong xã hội.`,
  },

  {
    id: 'phuong-cac-dien-trach-mo',
    title: 'Phượng Các Điền Trạch + Mộ - nhà đất rộng rãi di sản',
    sao: ['Phượng Các'],
    cung: ['Điền Trạch'],
    ketHop: ['Mộ'],
    doUuTien: 73,
    tomTat: `Phượng Các tại Điền Trạch gặp Mộ giúp đương số có nhà đất
rộng rãi và được thừa hưởng di sản từ gia đình.`,
  },

  {
    id: 'phuong-cac-dien-trach-thai-bat-toa',
    title: 'Phượng Các Điền Trạch + Thai + Bát Tọa - nhà lầu cao sang',
    sao: ['Phượng Các'],
    cung: ['Điền Trạch'],
    ketHop: ['Thai', 'Bát Tọa'],
    doUuTien: 73,
    tomTat: `Phượng Các tại Điền Trạch đi cùng Thai và Bát Tọa cho thấy
đương số ở nhà lầu cao sang, có ao hồ trong khuôn viên.`,
  },

  {
    id: 'phuong-cac-dien-trach-tam-thai-bat-toa',
    title: 'Phượng Các Điền Trạch + Tam Thai + Bát Tọa - hàng xóm quyền quý',
    sao: ['Phượng Các'],
    cung: ['Điền Trạch'],
    ketHop: ['Tam Thai', 'Bát Tọa'],
    doUuTien: 73,
    tomTat: `Phượng Các tại Điền Trạch gặp Tam Thai và Bát Tọa cho thấy
đương số không chỉ ở "nhà cao cửa rộng" mà còn có ao hồ và điền sản
phong phú; hàng xóm xung quanh toàn người quyền quý, chức sắc.`,
  },

  {
    id: 'phuong-cac-tai-quan-loc',
    title: 'Phượng Các tại Quan Lộc',
    sao: ['Phượng Các'],
    cung: ['Quan Lộc'],
    doUuTien: 80,
    tomTat: `Phượng Các đóng tại Quan Lộc đem lại sự thuận buồm xuôi gió
trong công danh sự nghiệp cho đương số.

Sao này gia tăng thuận lợi trong cầu công danh, chức vụ, thi cử và bằng
khen. Đương số trong công việc tỏ ra công tâm, có tinh thần xây dựng,
được nhiều người kính nể quý mến. Tính ngay thẳng giúp đương số dễ được
lòng cả cấp trên lẫn đồng nghiệp.`,
  },

  {
    id: 'phuong-cac-quan-loc-co-vu-tau-luu',
    title: 'Phượng Các Quan + Cơ + Vũ + Tấu + Lưu Hà - nhạc sỹ nổi tiếng',
    sao: ['Phượng Các'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Cơ', 'Vũ Khúc', 'Tấu Thư', 'Lưu Hà'],
    doUuTien: 75,
    tomTat: `Phượng Các tại Quan Lộc gặp đủ Thiên Cơ, Vũ Khúc, Tấu Thư và
Lưu Hà cho thấy đương số có thể trở thành nhạc sỹ hoặc nghệ sỹ âm nhạc
nổi tiếng.`,
  },

  {
    id: 'phuong-cac-quan-loc-quang-quy-co-nguyet',
    title: 'Phượng Các Quan + Quang Quý + Cơ Nguyệt Đồng Lương - bác sỹ tai mũi họng',
    sao: ['Phượng Các'],
    cung: ['Quan Lộc'],
    ketHop: ['Ân Quang', 'Thiên Quý', 'Thiên Cơ', 'Thái Âm', 'Thiên Đồng', 'Thiên Lương'],
    doUuTien: 75,
    tomTat: `Phượng Các tại Quan Lộc hội đủ Ân Quang, Thiên Quý cùng cách
cục Cơ Nguyệt Đồng Lương cho thấy đương số là bác sỹ tai mũi họng.`,
  },

  {
    id: 'phuong-cac-quan-loc-vu-tau-luu-hong-dao-cai',
    title: 'Phượng Các Quan + Vũ + Tấu + Lưu + Hồng + Đào + Cái - nổi danh nghệ thuật',
    sao: ['Phượng Các'],
    cung: ['Quan Lộc'],
    ketHop: ['Vũ Khúc', 'Tấu Thư', 'Lưu Hà', 'Hồng Loan', 'Đào Hoa', 'Hoa Cái'],
    doUuTien: 75,
    tomTat: `Phượng Các tại Quan Lộc gặp Vũ Khúc, Tấu Thư, Lưu Hà cùng Hồng
Loan, Đào Hoa và Hoa Cái cho thấy đương số nổi danh trong lĩnh vực âm
nhạc, nghệ thuật.`,
  },

  {
    id: 'phuong-cac-tai-no-boc',
    title: 'Phượng Các tại Nô Bộc',
    sao: ['Phượng Các'],
    cung: ['Nô Bộc'],
    doUuTien: 72,
    tomTat: `Phượng Các đóng tại Nô Bộc khiến bạn bè và đồng nghiệp của
đương số phần nhiều là người quyền quý, giàu có và đắc lực. Đương số hay
được bạn bè giúp đỡ, từ đó đem lại may mắn và tiền bạc.`,
  },

  {
    id: 'phuong-cac-no-boc-ta-huu-quang-quy',
    title: 'Phượng Các Nô + Tả Phù + Hữu Bật + Ân Quang + Thiên Quý - bạn bè giúp đỡ',
    sao: ['Phượng Các'],
    cung: ['Nô Bộc'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Ân Quang', 'Thiên Quý'],
    doUuTien: 67,
    tomTat: `Phượng Các tại Nô Bộc gặp Tả Phù, Hữu Bật, Ân Quang, Thiên Quý
khiến đương số càng dễ được bạn bè giúp đỡ; may mắn và tài lộc nhờ đó
cũng tăng theo.`,
  },

  {
    id: 'phuong-cac-tai-thien-di',
    title: 'Phượng Các tại Thiên Di',
    sao: ['Phượng Các'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `Phượng Các đóng tại Thiên Di là vị trí thuận lợi để đương số
phát triển các mối quan hệ xã hội. Khi ra ngoài, đương số thường gặp quý
nhân, được nhiều người yêu quý mến mộ và hay xuất hiện trong môi trường
có nhiều người quyền quý, chức tước.`,
  },

  {
    id: 'phuong-cac-thien-di-khoi-viet-long-tri',
    title: 'Phượng Các Di + Thiên Khôi + Thiên Việt + Long Trì - quý nhân nâng đỡ',
    sao: ['Phượng Các'],
    cung: ['Thiên Di'],
    ketHop: ['Thiên Khôi', 'Thiên Việt', 'Long Trì'],
    doUuTien: 70,
    tomTat: `Phượng Các tại Thiên Di gặp thêm Thiên Khôi, Thiên Việt và Long
Trì làm cho đặc tính của sao càng thể hiện rõ nét — quý nhân nâng đỡ
đương số trở nên rõ ràng và liên tục.`,
  },

  {
    id: 'phuong-cac-tai-tat-ach',
    title: 'Phượng Các tại Tật Ách - Phượng Giải giải bệnh',
    sao: ['Phượng Các'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `Phượng Các đóng tại Tật Ách luôn có Giải Thần đi cùng nên có
khả năng giải trừ bệnh tật và tai họa cho đương số. Khi ốm đau, đương số
dễ gặp được thầy thuốc giỏi.

Bệnh đặc trưng cần lưu ý liên quan tới bộ phận tai (do hình tượng của
Phượng Các) và thận.

Một cảnh báo quan trọng về bộ Phượng Giải: Giải Thần chỉ giải được tai
ương nhỏ. Khi gặp đại hạn hung hiểm hoặc bệnh nặng, Giải Thần có thể trở
thành "tử thần" báo hiệu sự ra đi đột ngột.`,
  },

  {
    id: 'phuong-cac-tat-ach-ky-da-khong-kiep',
    title: 'Phượng Các Tật + Hóa Kỵ + Đà La + Không Kiếp - tai điếc',
    sao: ['Phượng Các'],
    cung: ['Tật Ách'],
    ketHop: ['Hóa Kỵ', 'Đà La', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 73,
    tomTat: `Phượng Các tại Tật Ách gặp Hóa Kỵ, Đà La, Địa Không và Địa
Kiếp khiến đương số dễ bị tai điếc hoặc nghễnh ngãng.`,
  },

  {
    id: 'phuong-cac-tai-tai-bach',
    title: 'Phượng Các tại Tài Bạch',
    sao: ['Phượng Các'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `Phượng Các đóng tại Tài Bạch gia tăng tốt đẹp về phương diện
mưu cầu tài lộc và tiền bạc. Đương số có thể được thừa hưởng di sản, địa
ốc, tiền trợ cấp hay tiền hưu bổng; đồng thời chính đương số cũng hay
chu cấp cho người khác và làm việc từ thiện.

Về đặc tính, đương số là người công tâm về tiền, tiền bạc phân minh và
luôn kiếm đồng tiền sạch sẽ thanh cao.

Vì có Giải Thần đi cùng, nếu đương số biết dùng tiền làm việc thiện và
giúp đỡ cộng đồng thì càng dễ phát tài, giàu có.`,
  },

  {
    id: 'phuong-cac-tai-tu-tuc',
    title: 'Phượng Các tại Tử Tức',
    sao: ['Phượng Các'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Phượng Các đóng tại Tử Tức cho thấy đương số dễ sinh con, sinh
con đẹp và dễ nuôi.

Đương số dễ sinh quý tử; con cái thông minh, tuấn kiệt và có khả năng cảm
nhận âm thanh tốt — đây là dấu ấn của Phượng Các (cái tai) lưu lại trên
đường con cái.`,
  },

  {
    id: 'phuong-cac-tu-tuc-ta-huu-xuong-khuc-khoa',
    title: 'Phượng Các Tử Tức + Tả Hữu + Xương Khúc + Hóa Khoa - con cái thành danh',
    sao: ['Phượng Các'],
    cung: ['Tử Tức'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Hóa Khoa'],
    doUuTien: 70,
    tomTat: `Phượng Các tại Tử Tức gặp đủ Tả Phù, Hữu Bật, Văn Xương, Văn
Khúc và Hóa Khoa khiến con cái của đương số càng tuấn kiệt, dễ thành danh,
dễ nuôi và hiếu thảo.`,
  },

  {
    id: 'phuong-cac-tai-phu-the',
    title: 'Phượng Các tại Phu Thê - lầu son gác tía',
    sao: ['Phượng Các'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `Phượng Các đóng tại Phu Thê được xem là sao của lầu son gác
tía trên phương diện hôn nhân.

Người hôn phối của đương số là người giỏi giang, xứng lứa vừa đôi; gia
đình nhà hôn phối có điều kiện và địa vị. Vợ chồng đẹp đôi, tương đắc;
chuyện cưới xin cũng dễ dàng. Hôn phối của đương số quyền quý, thanh
cao và có điều kiện kinh tế tốt.

Riêng đương số tuổi Mão hoặc Dậu, nếu có thêm Tả Phù hoặc Hữu Bật, hôn
phối thường là người phương xa, khéo léo và giỏi giang.`,
  },

  {
    id: 'phuong-cac-phu-the-long-quang-quy',
    title: 'Phượng Các Phu Thê + Long Trì + Ân Quang + Thiên Quý - tình duyên đẹp lâu bền',
    sao: ['Phượng Các'],
    cung: ['Phu Thê'],
    ketHop: ['Long Trì', 'Ân Quang', 'Thiên Quý'],
    doUuTien: 73,
    tomTat: `Phượng Các tại Phu Thê hội cùng Long Trì, Ân Quang và Thiên
Quý khiến tình duyên của đương số càng đẹp và càng lâu bền.`,
  },

  {
    id: 'phuong-cac-phu-the-sat-tinh',
    title: 'Phượng Các Phu Thê + Nhiều Sát Tinh - hôn nhân lận đận',
    sao: ['Phượng Các'],
    cung: ['Phu Thê'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 73,
    tomTat: `Phượng Các tại Phu Thê gặp nhiều sát tinh khiến hôn nhân của
đương số lận đận, có thể phải trải qua hai lần đò.`,
  },

  {
    id: 'phuong-cac-tai-huynh-de',
    title: 'Phượng Các tại Huynh Đệ',
    sao: ['Phượng Các'],
    cung: ['Huynh Đệ'],
    doUuTien: 70,
    tomTat: `Phượng Các đóng tại Huynh Đệ cho thấy đương số có anh chị em
đông đủ; trong đó nhiều người thành đạt, tài giỏi, quyền quý và có học
thức.`,
  },

  {
    id: 'phuong-cac-huynh-de-quang-quy-tu-phu-tuong',
    title: 'Phượng Các Huynh Đệ + Quang Quý + Tử Phủ Vũ Tướng - máu chảy ruột mềm',
    sao: ['Phượng Các'],
    cung: ['Huynh Đệ'],
    ketHop: ['Ân Quang', 'Thiên Quý', 'Thiên Phủ', 'Tử Vi', 'Thiên Tướng'],
    doUuTien: 65,
    tomTat: `Phượng Các tại Huynh Đệ hội cùng Ân Quang, Thiên Quý cùng bộ
Tử Phủ Vũ Tướng khiến anh chị em của đương số càng yêu thương, tương
trợ lẫn nhau theo đúng nghĩa "máu chảy ruột mềm". Gia đình hưng thịnh
nhờ tình thân bền chặt.`,
  },

  {
    id: 'phuong-cac-han-thi-do',
    title: 'Phượng Các + Thai Phụ + Phong Cáo vào hạn - thăng quan thi đỗ',
    sao: ['Phượng Các'],
    ketHop: ['Thai Phụ', 'Phong Cáo'],
    doUuTien: 60,
    tomTat: `Phượng Các đi cùng Thai Phụ và Phong Cáo vào năm hạn báo hiệu
đương số được thăng quan, thi đỗ.

Cách cục lý giải khá rõ: bộ Thai Phụ và Phong Cáo chủ chức tước, bằng
cấp; Phượng Các chủ khoa bảng. Khi cả ba cùng vào hạn, đó là cách hiển
đạt công danh trong năm hạn ấy.`,
  },

  {
    id: 'long-phuong-am-duong-hy-sinh-con',
    title: 'Long Trì + Phượng Các + Âm Dương + Hỷ - dễ sinh con',
    sao: ['Long Trì', 'Phượng Các'],
    ketHop: ['Thái Âm', 'Thái Dương', 'Thiên Hỷ'],
    doUuTien: 65,
    tomTat: `Bộ **Long Phượng** đi cùng Thái Âm, Thái Dương và Thiên Hỷ vào
năm hạn cho thấy đương số dễ sinh con và sinh con thuận lợi.

Lý giải: Long Phượng là cách khoa bảng và may mắn, Nhật Nguyệt tượng cho
cha mẹ, Thiên Hỷ chủ về hỷ sự — cả ba chập lại tạo cách cực đẹp cho việc
sinh nở. Đặc biệt tốt cho cặp vợ chồng đang mong con vào năm gặp hạn này.`,
  },

  {
    id: 'phuong-cac-loi-khuyen',
    title: 'Lời khuyên cho người Phượng Các',
    sao: ['Phượng Các'],
    doUuTien: 35,
    tomTat: `Đương số sở hữu **Phượng Các** thường mang vẻ thanh cao, phẩm
chất đài các và phúc khí dồi dào. Sức mạnh nổi bật của sao này gồm nhan
sắc đẹp (đặc biệt đôi tai dày, đẹp), thông minh tuấn kiệt, may mắn về
khoa bảng và hỷ sự, lại có Giải Thần đi cùng như một lá bùa hộ mệnh.

Tuy nhiên cần ghi nhớ câu "phúc bất trùng lai, họa vô đơn chí" — để giữ
được phúc tinh bền lâu, đương số nên:

- Sống thiện lành, giữ lòng ngay thẳng
- Tích đức hành thiện
- Chăm sóc sức khỏe đôi tai từ trẻ
- Phát huy năng khiếu nghệ thuật, âm nhạc nếu có
- Đi cùng Long Trì để tạo cách **Long Phượng** rực rỡ
- Đi cùng Xương Khúc, Khôi Việt, Tả Hữu để tạo cách **Hiền Thần Phò Tử Phủ**

Khi giữ vững được những bí quyết trên, cuộc đời đương số sẽ ngày một hanh
thông, vinh hiển và phúc thọ vẹn toàn.`,
  },
];
