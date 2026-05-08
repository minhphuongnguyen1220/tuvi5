import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO LONG TRÌ - Thủy, Cát Tinh.
 * LUÔN đồng cung với QUAN PHÙ (vòng Thái Tuế) - hardcode trong engine.
 * Tam hợp Tuế-Hổ-Phù (Thái Tuế + Bạch Hổ + Quan Phù).
 *
 * Cùng PHƯỢNG CÁC tạo bộ LONG PHƯỢNG - phần CHUNG bộ này viết tại đây.
 * Một trong TỨ LINH (Cái-Long-Hổ-Phượng) - phần chung Tứ Linh đã viết tại thanh-long.ts.
 *
 * Hình tượng: CÁI MŨI.
 */
export const luanGiai_LongTri: DoanLuanGiai[] = [
  {
    id: 'long-tri-tinh-chat-chung',
    title: 'Long Trì - Đặc tính chung',
    sao: ['Long Trì'],
    doUuTien: 32,
    tomTat: `**Long Trì** là phụ tinh thuộc hàng cát tinh, ngũ hành Thủy, hóa khí
Cát Tinh. Trong an sao, Long Trì luôn đi đôi cùng Quan Phù (đồng cung — quy
ước hardcode trong engine), đồng thời tam hợp với Thái Tuế và Bạch Hổ — vòng
Tuế-Hổ-Phù tượng trưng cho bậc trượng phu chính nghĩa, bền bỉ và biết xây
dựng. Long Trì cũng là một trong Tứ Linh (Cái — Long — Hổ — Phượng), càng đẹp
đẽ hơn khi có Phượng Các đi cùng tạo nên bộ Long Phượng.

Bên Quan Phù — vốn được xem như vị quan tòa xử án — Long Trì giữ vai trò làm
ngôi sao này thêm sáng suốt, thanh cao, tránh nhầm lẫn và không nghiêng sang
mặt xấu, bảo đảm Quan Phù luôn là người có cốt cách, ôn hòa.

Về hình tượng cơ thể, Long Trì ứng với cái mũi. Đặc tính chủ đạo của sao
này là công danh, thanh cao, quý hiển, may mắn, quyền quý và khoa bảng.`,
  },

  {
    id: 'long-phuong-tu-linh',
    title: 'Long Phượng (Long Trì + Phượng Các) - đôi cát tinh khoa bảng',
    sao: ['Long Trì', 'Phượng Các'],
    doUuTien: 75,
    tomTat: `**Long Trì** đi cùng **Phượng Các** tạo thành bộ **Long Phượng**
— hai sao thuộc Tứ Linh vốn rất ưa đi với nhau. Khi hội tụ, hai sao làm mạnh
thêm các ý nghĩa về công danh, quý hiển, may mắn, quyền quý và khoa bảng.

Cổ nhân có câu phú:

> "Phượng, Long Mão - Dậu đôi miền,
> Vượng thời kim bảng đề tên ở đầu."

Cách cục đẹp nhất ở đây dành cho đương số tuổi Mão hoặc Dậu, Mệnh đóng tại
Mùi hoặc Sửu, có Long Phượng đồng cung. Khi đó chủ mệnh thông minh uyên bác,
giỏi văn chương và có tài hùng biện; thi cử thường đỗ đạt cao, "bảng vàng
xướng danh", tên tuổi được trọng vọng. Đây là một trong những cách cục đẹp
nhất cho con đường khoa cử.`,
  },

  {
    id: 'long-tri-tuong-mao-mui',
    title: 'Long Trì - Tướng mạo (cái mũi)',
    sao: ['Long Trì'],
    cung: ['Mệnh'],
    doUuTien: 50,
    tomTat: `**Long Trì** thủ Mệnh cho đương số nhan sắc rất đẹp, da mặt hồng
hào và thanh tú — đặc biệt rõ nét ở phụ nữ. Vì Long Trì ứng với hình tượng
cái mũi, chủ mệnh thường có chiếc mũi đẹp, cao và thẳng — được xem là quý
tướng.`,
  },

  {
    id: 'long-tri-tuong-mao-kinh-duong',
    title: 'Long Trì + Kình Dương tại Mệnh - mũi sống trâu',
    sao: ['Long Trì'],
    cung: ['Mệnh'],
    ketHop: ['Kình Dương'],
    doUuTien: 45,
    tomTat: `**Long Trì** đi cùng Kình Dương tại Mệnh khiến mũi của đương số
mang dáng "sống trâu" — thô và cứng cáp.`,
  },

  {
    id: 'long-tri-tuong-mao-khoc-hu-hinh',
    title: 'Long Trì + Thiên Khốc + Thiên Hư + Thiên Hình tại Mệnh - đau mũi phải mổ',
    sao: ['Long Trì'],
    cung: ['Mệnh'],
    ketHop: ['Thiên Khốc', 'Thiên Hư', 'Thiên Hình'],
    doUuTien: 45,
    tomTat: `**Long Trì** hội cùng Thiên Khốc, Thiên Hư và Thiên Hình tại Mệnh
khiến đương số hay đau mũi và có thể phải mổ.`,
  },

  {
    id: 'long-tri-tuong-mao-dia-kiep',
    title: 'Long Trì + Địa Kiếp tại Mệnh - mũi xấu sẹo',
    sao: ['Long Trì'],
    cung: ['Mệnh'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 45,
    tomTat: `**Long Trì** gặp Địa Kiếp tại Mệnh khiến mũi đương số kém đẹp,
có thể mang sẹo.`,
  },

  {
    id: 'long-tri-tuong-mao-thien-hinh',
    title: 'Long Trì + Thiên Hình tại Mệnh - mũi xấu sẹo',
    sao: ['Long Trì'],
    cung: ['Mệnh'],
    ketHop: ['Thiên Hình'],
    doUuTien: 45,
    tomTat: `**Long Trì** gặp Thiên Hình tại Mệnh khiến mũi đương số kém đẹp,
có thể mang sẹo.`,
  },

  {
    id: 'long-tri-tai-menh',
    title: 'Long Trì tại Mệnh - thông minh tuấn kiệt',
    sao: ['Long Trì'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `**Long Trì** thủ Mệnh phú cho đương số tư chất thông minh, tuấn
kiệt, có văn chất; tính tình ôn hòa, nhân hậu, thanh tao, điềm đạm và cởi
mở.

Về công danh tài lộc, chủ mệnh nhiều may mắn trên đường khoa bảng văn
chương — thi cử dễ đỗ cao, có khoa giáp lớn. Long Trì còn làm dày thêm tài
lộc và điền sản (sao này chỉ về nhà cửa, ao hồ), đem may mắn cho đường hôn
nhân (dễ yêu, dễ cưới, vợ chồng tương đắc) lẫn chuyện sinh nở (dễ sanh,
sinh dễ nuôi).

Điểm đặc sắc nhất là Long Trì cho đương số sự vẹn toàn tương đối trên cả
bốn phương diện: nhan sắc, tính hạnh, tài lộc và gia đạo. Đây được xem là
một trong những cát tinh đẹp vẹn toàn của tử vi.`,
  },

  {
    id: 'long-tri-tai-menh-nu',
    title: 'Long Trì tại Mệnh - nữ mệnh đoan trang',
    sao: ['Long Trì'],
    cung: ['Mệnh'],
    gioiTinh: 'Nữ',
    doUuTien: 72,
    tomTat: `Với nữ mệnh, **Long Trì** thủ Mệnh khiến đương số đoan trang
trong nết hạnh, hội đủ "công dung ngôn hạnh"; phẩm hạnh thanh cao, thần thái
ôn hòa và nhân hậu.`,
  },

  {
    id: 'long-tri-thai-phu-phong-cao',
    title: 'Long Trì + Thai Phụ + Phong Cáo - thăng quan tiến chức',
    sao: ['Long Trì'],
    ketHop: ['Thai Phụ', 'Phong Cáo'],
    doUuTien: 75,
    tomTat: `**Long Trì** hội với Thai Phụ và Phong Cáo cho cách thăng quan
tiến chức, thi đỗ đạt cao, bằng cấp được công nhận. Bộ Thai Phụ — Phong Cáo
là cặp sao chỉ chức tước và bằng cấp; khi kết hợp với Long Trì (khoa bảng)
sẽ tạo nên cách hiển đạt công danh.`,
  },

  {
    id: 'long-tri-rieu-hy-phi',
    title: 'Long Trì + Thiên Riêu / Thiên Hỷ / Phi Liêm - hỷ sự nhanh',
    sao: ['Long Trì'],
    ketHop: ['Thiên Riêu', 'Thiên Hỷ', 'Phi Liêm'],
    doUuTien: 70,
    tomTat: `**Long Trì** đi cùng Thiên Riêu, Thiên Hỷ hoặc Phi Liêm cho cách
đắc thời với hỷ sự đến nhanh chóng — chủ về tình duyên, thi cử và quan lộ.
Đây là cách "tin vui đến gần", ứng nghiệm rõ nét nhất khi sao chiếu vào đại
hạn hoặc tiểu hạn.`,
  },

  {
    id: 'long-tri-thien-luong-hien-phu',
    title: 'Long Trì + Thiên Lương - nữ mệnh có chồng danh giá hiền phu',
    sao: ['Long Trì'],
    ketHop: ['Thiên Lương'],
    cung: ['Phu Thê', 'Mệnh'],
    gioiTinh: 'Nữ',
    doUuTien: 70,
    tomTat: `**Long Trì** đi cùng Thiên Lương ở nữ mệnh báo hiệu đương số có
được người chồng danh giá, hiền phu — chồng hiền lành, đức độ, có uy tín
trong xã hội. Đây là cách hôn nhân đẹp dành riêng cho phụ nữ.`,
  },

  {
    id: 'long-phuong-xuong-khuc-khoi-viet-hien-than',
    title: 'Long Phượng + Xương Khúc + Khôi Việt + Tả Hữu - bộ "Hiền Thần"',
    sao: ['Long Trì', 'Phượng Các'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt', 'Tả Phù', 'Hữu Bật'],
    doUuTien: 85,
    tomTat: `Bộ **Long Phượng** hội đủ Văn Xương, Văn Khúc, Thiên Khôi, Thiên
Việt cùng Tả Phù, Hữu Bật tạo nên bộ sao **"Hiền Thần"** chuyên phò tá cho
Tử Phủ. Cách cục này giúp đương số đắc quan mau lẹ, cao quý và vô cùng giỏi
giang.

Đây được coi là một trong những **cách cục vương giả** của tử vi vì hội đủ:

- Long Phượng cho khoa bảng và may mắn
- Xương Khúc cho văn chương
- Khôi Việt cho quý nhân
- Tả Hữu cho trợ thủ

Khi có thêm Tử Phủ thì cách thành **mệnh đế vương**, sự nghiệp hiển đạt tột
bậc.`,
  },

  {
    id: 'long-tri-tai-phu-mau',
    title: 'Long Trì tại Phụ Mẫu',
    sao: ['Long Trì'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Long Trì** ngụ tại Phụ Mẫu giúp tăng thọ cho cha mẹ và đem lại
may mắn cho song thân của đương số. Cha mẹ là người đẹp đẽ, thanh cao, ôn
hòa.`,
  },

  {
    id: 'long-tri-tai-phu-mau-ta-huu',
    title: 'Long Trì + Tả Phù / Hữu Bật tại Phụ Mẫu - cha mẹ thành đạt',
    sao: ['Long Trì'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Tả Phù', 'Hữu Bật'],
    doUuTien: 70,
    tomTat: `**Long Trì** hội Tả Phù hoặc Hữu Bật tại Phụ Mẫu cho biết cha mẹ
đương số là người thành đạt, có học thức và có vị trí trong xã hội. Song
thân dễ làm về hành pháp, pháp luật hoặc nơi công quyền, đường khoa bảng
hiển đạt.`,
  },

  {
    id: 'long-tri-tai-phu-mau-khoi-viet',
    title: 'Long Trì + Thiên Khôi / Thiên Việt tại Phụ Mẫu - cha mẹ thành đạt',
    sao: ['Long Trì'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Thiên Khôi', 'Thiên Việt'],
    doUuTien: 70,
    tomTat: `**Long Trì** hội Thiên Khôi hoặc Thiên Việt tại Phụ Mẫu cho biết
cha mẹ đương số là người thành đạt, có học thức và có vị trí trong xã hội.
Song thân dễ làm về hành pháp, pháp luật hoặc nơi công quyền, đường khoa
bảng hiển đạt.`,
  },

  {
    id: 'long-tri-tai-phu-mau-xuong-khuc',
    title: 'Long Trì + Văn Xương / Văn Khúc tại Phụ Mẫu - cha mẹ thành đạt',
    sao: ['Long Trì'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Văn Xương', 'Văn Khúc'],
    doUuTien: 70,
    tomTat: `**Long Trì** hội Văn Xương hoặc Văn Khúc tại Phụ Mẫu cho biết
cha mẹ đương số là người thành đạt, có học thức và có vị trí trong xã hội.
Song thân dễ làm về hành pháp, pháp luật hoặc nơi công quyền, đường khoa
bảng hiển đạt.`,
  },

  {
    id: 'long-tri-tai-phu-mau-phuong-cac',
    title: 'Long Trì + Phượng Các tại Phụ Mẫu - cha mẹ thành đạt',
    sao: ['Long Trì'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Phượng Các'],
    doUuTien: 70,
    tomTat: `**Long Trì** hội Phượng Các tại Phụ Mẫu cho biết cha mẹ đương số
là người thành đạt, có học thức và có vị trí trong xã hội. Song thân dễ làm
về hành pháp, pháp luật hoặc nơi công quyền, đường khoa bảng hiển đạt.`,
  },

  {
    id: 'long-tri-tai-phu-mau-quang-quy',
    title: 'Long Trì + Ân Quang / Thiên Quý tại Phụ Mẫu - cha mẹ thành đạt',
    sao: ['Long Trì'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Ân Quang', 'Thiên Quý'],
    doUuTien: 70,
    tomTat: `**Long Trì** hội Ân Quang hoặc Thiên Quý tại Phụ Mẫu cho biết
cha mẹ đương số là người thành đạt, có học thức và có vị trí trong xã hội.
Song thân dễ làm về hành pháp, pháp luật hoặc nơi công quyền, đường khoa
bảng hiển đạt.`,
  },

  {
    id: 'long-tri-tai-phu-mau-sat',
    title: 'Long Trì + Sát Tinh tại Phụ Mẫu - cha mẹ trắc trở',
    sao: ['Long Trì'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Kình Dương', 'Đà La', 'Hóa Kỵ', 'Linh Tinh', 'Hỏa Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `**Long Trì** hội sát tinh tại Phụ Mẫu — gồm Kình Dương, Đà La,
Hóa Kỵ, Linh Tinh, Hỏa Tinh hoặc Không Kiếp — khiến cha mẹ đương số trắc
trở về sức khỏe ở vùng mũi và hô hấp, dễ vướng kiện tụng, thị phi và cuộc
đời chịu nhiều phiền muộn.`,
  },

  {
    id: 'long-tri-tai-phuc-duc',
    title: 'Long Trì tại Phúc Đức',
    sao: ['Long Trì'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `**Long Trì** ngụ tại Phúc Đức cho biết trong dòng họ đương số có
nhiều người khá giả, nhiều người đỗ khoa bảng cao và có truyền thống phẩm
hạnh đạo đức tốt.

Về phương diện tâm linh, ông bà tổ tiên thường mồ yên mả đẹp, phát phước;
mộ phần hay nằm gần cái ao hoặc giếng nước.`,
  },

  {
    id: 'long-tri-tai-phuc-duc-tu-vi',
    title: 'Long Trì + Tử Vi tại Phúc Đức - tổ tiên làm quan',
    sao: ['Long Trì'],
    cung: ['Phúc Đức'],
    ketHop: ['Tử Vi'],
    doUuTien: 73,
    tomTat: `**Long Trì** hội Tử Vi tại Phúc Đức cho biết tổ tiên xưa kia có
người làm quan lớn, nổi danh, vừa khắt khe vừa quyền biến. Dòng họ hưởng
phúc lâu dài, con cháu đỗ đạt và thăng tiến.`,
  },

  {
    id: 'long-tri-tai-phuc-duc-thien-phu',
    title: 'Long Trì + Thiên Phủ tại Phúc Đức - tổ tiên làm quan',
    sao: ['Long Trì'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Phủ'],
    doUuTien: 73,
    tomTat: `**Long Trì** hội Thiên Phủ tại Phúc Đức cho biết tổ tiên xưa kia
có người làm quan lớn, nổi danh, vừa khắt khe vừa quyền biến. Dòng họ hưởng
phúc lâu dài, con cháu đỗ đạt và thăng tiến.`,
  },

  {
    id: 'long-tri-tai-phuc-duc-thai-tue',
    title: 'Long Trì + Thái Tuế tại Phúc Đức - tổ tiên làm quan',
    sao: ['Long Trì'],
    cung: ['Phúc Đức'],
    ketHop: ['Thái Tuế'],
    doUuTien: 73,
    tomTat: `**Long Trì** hội Thái Tuế tại Phúc Đức cho biết tổ tiên xưa kia
có người làm quan lớn, nổi danh, vừa khắt khe vừa quyền biến. Dòng họ hưởng
phúc lâu dài, con cháu đỗ đạt và thăng tiến.`,
  },

  {
    id: 'long-tri-tai-phuc-duc-quoc-an',
    title: 'Long Trì + Quốc Ấn tại Phúc Đức - tổ tiên làm quan',
    sao: ['Long Trì'],
    cung: ['Phúc Đức'],
    ketHop: ['Quốc Ấn'],
    doUuTien: 73,
    tomTat: `**Long Trì** hội Quốc Ấn tại Phúc Đức cho biết tổ tiên xưa kia
có người làm quan lớn, nổi danh, vừa khắt khe vừa quyền biến. Dòng họ hưởng
phúc lâu dài, con cháu đỗ đạt và thăng tiến.`,
  },

  {
    id: 'long-tri-tai-phuc-duc-khong-kiep',
    title: 'Long Trì + Địa Không / Địa Kiếp tại Phúc Đức - phúc phận suy giảm',
    sao: ['Long Trì'],
    cung: ['Phúc Đức'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 73,
    tomTat: `**Long Trì** gặp Địa Không hoặc Địa Kiếp tại Phúc Đức khiến phúc
phận suy giảm, dễ gặp cảnh mộ phần hư hỏng, phong thủy kém; hậu duệ tuy
thông minh song thường đoản thọ.`,
  },

  {
    id: 'long-tri-tai-phuc-duc-thien-hinh',
    title: 'Long Trì + Thiên Hình tại Phúc Đức - phúc phận suy giảm',
    sao: ['Long Trì'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Hình'],
    doUuTien: 73,
    tomTat: `**Long Trì** gặp Thiên Hình tại Phúc Đức khiến phúc phận suy
giảm, dễ gặp cảnh mộ phần hư hỏng, phong thủy kém; hậu duệ tuy thông minh
song thường đoản thọ.`,
  },

  {
    id: 'long-tri-tai-dien-trach',
    title: 'Long Trì tại Điền Trạch - nhà gần ao hồ',
    sao: ['Long Trì'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Long Trì** ngụ tại Điền Trạch cho biết đương số ở vào nhà lấp
ao lấp giếng để dựng, nhà cửa đẹp và thường gần nơi công môn, công quyền,
tòa án hay viện kiểm sát. Hàng xóm xung quanh phần lớn là những người có
địa vị, chức sắc.`,
  },

  {
    id: 'long-tri-tai-dien-trach-mo',
    title: 'Long Trì + Mộ tại Điền Trạch - nhà đất rộng rãi',
    sao: ['Long Trì'],
    cung: ['Điền Trạch'],
    ketHop: ['Mộ'],
    doUuTien: 70,
    tomTat: `**Long Trì** đi cùng Mộ tại Điền Trạch cho biết đương số có nhà
đất rộng rãi và hưởng di sản.`,
  },

  {
    id: 'long-tri-tai-dien-trach-thai-bat-toa',
    title: 'Long Trì + Thai + Bát Tọa tại Điền Trạch - nhà lầu cao sang',
    sao: ['Long Trì'],
    cung: ['Điền Trạch'],
    ketHop: ['Thai', 'Bát Tọa'],
    doUuTien: 70,
    tomTat: `**Long Trì** đi cùng Thai và Bát Tọa tại Điền Trạch báo hiệu nhà
lầu cao sang và có ao hồ.`,
  },

  {
    id: 'long-tri-tai-dien-trach-sat',
    title: 'Long Trì + Sát Tinh tại Điền Trạch - kiện tụng đất đai',
    sao: ['Long Trì'],
    cung: ['Điền Trạch'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `**Long Trì** hội cùng Lục Sát (Kình Dương, Đà La, Hỏa Tinh, Linh
Tinh, Địa Không, Địa Kiếp) tại Điền Trạch khiến đất ao hồ khó cải tạo, nhà
cửa phải sửa chữa nhiều lần và tốn kém, hoặc phải bán đổi qua nhiều lượt;
đương số dễ gặp kiện tụng đất đai.`,
  },

  {
    id: 'long-tri-tai-quan-loc',
    title: 'Long Trì tại Quan Lộc',
    sao: ['Long Trì'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `**Long Trì** đóng tại Quan Lộc đem lại may mắn và tài lộc trong
học tập cùng công việc cho đương số. Chủ mệnh trong công việc luôn giữ tính
công tâm, có tinh thần xây dựng, nhờ vậy được nhiều người kính nể và quý
mến.

Vì Long Trì luôn đi cùng Quan Phù, hướng nghề phù hợp nhất là:

- Học luật, hành nghề luật — thẩm phán, trạng sư
- Công việc đòi hỏi tính soi xét, phán đoán, suy luận và khắt khe cao
- Bác sỹ tai mũi họng (do Long Trì là cái mũi)`,
  },

  {
    id: 'long-tri-tai-quan-loc-khoi-viet',
    title: 'Long Trì + Thiên Khôi / Thiên Việt tại Quan Lộc - công danh hiển đạt',
    sao: ['Long Trì'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Khôi', 'Thiên Việt'],
    doUuTien: 73,
    tomTat: `**Long Trì** hội Thiên Khôi hoặc Thiên Việt tại Quan Lộc đem
đến công danh hiển đạt — đương số dễ thăng tiến và được quý nhân nâng đỡ.`,
  },

  {
    id: 'long-tri-tai-quan-loc-thai',
    title: 'Long Trì + Thai tại Quan Lộc - công danh hiển đạt',
    sao: ['Long Trì'],
    cung: ['Quan Lộc'],
    ketHop: ['Thai'],
    doUuTien: 73,
    tomTat: `**Long Trì** đi cùng Thai tại Quan Lộc đem đến công danh hiển
đạt — đương số dễ thăng tiến và được quý nhân nâng đỡ.`,
  },

  {
    id: 'long-tri-tai-quan-loc-bat-toa',
    title: 'Long Trì + Bát Tọa tại Quan Lộc - công danh hiển đạt',
    sao: ['Long Trì'],
    cung: ['Quan Lộc'],
    ketHop: ['Bát Tọa'],
    doUuTien: 73,
    tomTat: `**Long Trì** đi cùng Bát Tọa tại Quan Lộc đem đến công danh hiển
đạt — đương số dễ thăng tiến và được quý nhân nâng đỡ.`,
  },

  {
    id: 'long-tri-tai-quan-loc-phuong-cac',
    title: 'Long Trì + Phượng Các tại Quan Lộc - cách Long Phượng',
    sao: ['Long Trì'],
    cung: ['Quan Lộc'],
    ketHop: ['Phượng Các'],
    doUuTien: 73,
    tomTat: `**Long Trì** đi cùng Phượng Các tại Quan Lộc tạo cách **Long
Phượng** — công danh hiển đạt, đương số dễ thăng tiến và được quý nhân nâng
đỡ.`,
  },

  {
    id: 'long-tri-tai-quan-loc-kinh-da',
    title: 'Long Trì + Kình Dương / Đà La tại Quan Lộc - sự nghiệp thăng trầm',
    sao: ['Long Trì'],
    cung: ['Quan Lộc'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 73,
    tomTat: `**Long Trì** gặp Kình Dương hoặc Đà La tại Quan Lộc khiến đường
học hành dở dang, thi cử khó khăn; sự nghiệp thăng trầm và hay vướng tranh
cãi, thị phi.`,
  },

  {
    id: 'long-tri-tai-quan-loc-hoa-ky',
    title: 'Long Trì + Hóa Kỵ tại Quan Lộc - sự nghiệp thăng trầm',
    sao: ['Long Trì'],
    cung: ['Quan Lộc'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 73,
    tomTat: `**Long Trì** gặp Hóa Kỵ tại Quan Lộc khiến đường học hành dở
dang, thi cử khó khăn; sự nghiệp thăng trầm và hay vướng tranh cãi, thị
phi.`,
  },

  {
    id: 'long-tri-tai-no-boc',
    title: 'Long Trì tại Nô Bộc',
    sao: ['Long Trì'],
    cung: ['Nô Bộc'],
    doUuTien: 72,
    tomTat: `**Long Trì** ngụ tại Nô Bộc cho biết bạn bè đồng nghiệp của
đương số có nhiều người quyền quý, giàu có và đắc lực. Chủ mệnh hay được
bạn bè giúp đỡ, đem đến may mắn cùng tiền bạc.`,
  },

  {
    id: 'long-tri-tai-no-boc-luc-cat',
    title: 'Long Trì + Lục Cát tại Nô Bộc - bạn bè thành đạt',
    sao: ['Long Trì'],
    cung: ['Nô Bộc'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 67,
    tomTat: `**Long Trì** hội bộ Lục Cát (Tả Phù, Hữu Bật, Văn Xương, Văn
Khúc, Thiên Khôi, Thiên Việt) tại Nô Bộc cho biết đương số quen nhiều người
thành đạt, phần đông làm về hình pháp, pháp luật.`,
  },

  {
    id: 'long-tri-tai-no-boc-sat',
    title: 'Long Trì + Sát Tinh tại Nô Bộc - bạn bè lợi dụng',
    sao: ['Long Trì'],
    cung: ['Nô Bộc'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 67,
    tomTat: `**Long Trì** hội Lục Sát tại Nô Bộc khiến quan hệ bạn bè dễ sinh
điều tiếng, tranh chấp; đương số có người lợi dụng và vướng kiện tụng do
chính bạn bè gây ra.`,
  },

  {
    id: 'long-tri-tai-thien-di',
    title: 'Long Trì tại Thiên Di',
    sao: ['Long Trì'],
    cung: ['Thiên Di'],
    doUuTien: 72,
    tomTat: `**Long Trì** đóng tại Thiên Di cho biết đương số là người thiện
lương, ôn hòa. Khi ra ngoài hay đi xa, chủ mệnh được may mắn, có người khác
giúp đỡ, và thường ở trong môi trường nhiều người quyền quý, chức tước.`,
  },

  {
    id: 'long-tri-tai-thien-di-hoa-linh',
    title: 'Long Trì + Hỏa Tinh / Linh Tinh tại Thiên Di - rắc rối thị phi',
    sao: ['Long Trì'],
    cung: ['Thiên Di'],
    ketHop: ['Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 67,
    tomTat: `**Long Trì** gặp Hỏa Tinh hoặc Linh Tinh tại Thiên Di khiến
đương số ra ngoài hay gặp rắc rối, bị người khác lợi dụng, hao tài và dễ
vướng kiện cáo, thị phi.`,
  },

  {
    id: 'long-tri-tai-thien-di-khong-kiep',
    title: 'Long Trì + Địa Không / Địa Kiếp tại Thiên Di - rắc rối thị phi',
    sao: ['Long Trì'],
    cung: ['Thiên Di'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 67,
    tomTat: `**Long Trì** gặp Địa Không hoặc Địa Kiếp tại Thiên Di khiến
đương số ra ngoài hay gặp rắc rối, bị người khác lợi dụng, hao tài và dễ
vướng kiện cáo, thị phi.`,
  },

  {
    id: 'long-tri-tai-thien-di-hoa-ky',
    title: 'Long Trì + Hóa Kỵ tại Thiên Di - rắc rối thị phi',
    sao: ['Long Trì'],
    cung: ['Thiên Di'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 67,
    tomTat: `**Long Trì** gặp Hóa Kỵ tại Thiên Di khiến đương số ra ngoài hay
gặp rắc rối, bị người khác lợi dụng, hao tài và dễ vướng kiện cáo, thị
phi.`,
  },

  {
    id: 'long-tri-tai-tat-ach',
    title: 'Long Trì tại Tật Ách - bệnh mũi máu huyết',
    sao: ['Long Trì'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `**Long Trì** đóng tại Tật Ách có tác dụng giải trừ bệnh tật,
tai họa cho đương số; khi đau ốm chủ mệnh dễ gặp được thầy thuốc giỏi.

Bệnh đặc trưng của sao này liên quan tới bộ phận mũi (do hình tượng Long
Trì là cái mũi) và máu huyết.

Vì Quan Phù và Long Trì luôn đồng cung, tại cung Tật, đương số dễ gặp tai
họa về mặt thị phi, kiện cáo.`,
  },

  {
    id: 'long-tri-tai-tat-ach-khoc-hu-hinh',
    title: 'Long Trì + Thiên Khốc + Thiên Hư + Thiên Hình tại Tật Ách - đau mũi mổ',
    sao: ['Long Trì'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Khốc', 'Thiên Hư', 'Thiên Hình'],
    doUuTien: 70,
    tomTat: `**Long Trì** hội Thiên Khốc, Thiên Hư và Thiên Hình tại Tật Ách
khiến đương số hay đau mũi và phải mổ.`,
  },

  {
    id: 'long-tri-tai-tai-bach',
    title: 'Long Trì tại Tài Bạch',
    sao: ['Long Trì'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Long Trì** ngụ tại Tài Bạch đem may mắn về tiền của cho đương
số, chủ về phú quý và giàu sang.

Do Long Trì luôn đồng cung với Quan Phù, khi cặp này cư Tài, chủ mệnh là
người công tâm về tiền của — tiền bạc phân minh, luôn kiếm những đồng tiền
sạch sẽ và thanh cao.`,
  },

  {
    id: 'long-tri-tai-tai-bach-thai-tue',
    title: 'Long Trì + Thái Tuế tại Tài Bạch - tiền bạc dư dả',
    sao: ['Long Trì'],
    cung: ['Tài Bạch'],
    ketHop: ['Thái Tuế'],
    doUuTien: 70,
    tomTat: `**Long Trì** đi cùng Thái Tuế tại Tài Bạch cho biết tiền bạc của
đương số dư dả, gắn liền với uy tín và danh vị.`,
  },

  {
    id: 'long-tri-tai-tai-bach-quoc-an',
    title: 'Long Trì + Quốc Ấn tại Tài Bạch - tiền bạc dư dả',
    sao: ['Long Trì'],
    cung: ['Tài Bạch'],
    ketHop: ['Quốc Ấn'],
    doUuTien: 70,
    tomTat: `**Long Trì** đi cùng Quốc Ấn tại Tài Bạch cho biết tiền bạc của
đương số dư dả, gắn liền với uy tín và danh vị.`,
  },

  {
    id: 'long-tri-tai-tai-bach-phong-cao',
    title: 'Long Trì + Phong Cáo tại Tài Bạch - tiền bạc dư dả',
    sao: ['Long Trì'],
    cung: ['Tài Bạch'],
    ketHop: ['Phong Cáo'],
    doUuTien: 70,
    tomTat: `**Long Trì** đi cùng Phong Cáo tại Tài Bạch cho biết tiền bạc
của đương số dư dả, gắn liền với uy tín và danh vị.`,
  },

  {
    id: 'long-tri-tai-tai-bach-bat-toa',
    title: 'Long Trì + Bát Tọa tại Tài Bạch - tiền bạc dư dả',
    sao: ['Long Trì'],
    cung: ['Tài Bạch'],
    ketHop: ['Bát Tọa'],
    doUuTien: 70,
    tomTat: `**Long Trì** đi cùng Bát Tọa tại Tài Bạch cho biết tiền bạc của
đương số dư dả, gắn liền với uy tín và danh vị.`,
  },

  {
    id: 'long-tri-tai-tai-bach-hung',
    title: 'Long Trì + Hung Tinh tại Tài Bạch - hao tài kiện tụng',
    sao: ['Long Trì'],
    cung: ['Tài Bạch'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `**Long Trì** hội hung tinh thuộc Lục Sát tại Tài Bạch khiến tiền
bạc của đương số khó giữ, dễ vướng kiện tụng và hao tài tán của.`,
  },

  {
    id: 'long-tri-tai-tu-tuc',
    title: 'Long Trì tại Tử Tức',
    sao: ['Long Trì'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Long Trì** ngụ tại Tử Tức cho biết đương số dễ sinh con, sinh
con đẹp và dễ nuôi. Chủ mệnh dễ sinh quý tử, con cái thông minh và tuấn
kiệt.`,
  },

  {
    id: 'long-tri-tai-tu-tuc-luc-cat',
    title: 'Long Trì + Lục Cát tại Tử Tức - con cái thông minh',
    sao: ['Long Trì'],
    cung: ['Tử Tức'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 70,
    tomTat: `**Long Trì** hội bộ Lục Cát (Tả Phù, Hữu Bật, Văn Xương, Văn
Khúc, Thiên Khôi, Thiên Việt) tại Tử Tức cho biết con cái của đương số
thông minh, suy xét tốt và dễ làm nghề thẩm phán hay quan tòa.`,
  },

  {
    id: 'long-tri-tai-phu-the',
    title: 'Long Trì tại Phu Thê',
    sao: ['Long Trì'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `**Long Trì** đóng tại Phu Thê cho biết vợ chồng đương số đẹp
đôi, tương đắc, cưới xin dễ dàng. Người hôn phối là người quyền quý, thanh
cao và có điều kiện kinh tế tốt.

Riêng đương số tuổi Mão hoặc Dậu, có thêm Tả Phù hoặc Hữu Bật, sẽ lấy người
phương xa và khéo léo. Nếu hội thêm sát bại tinh thì là người hai vợ hoặc
hai chồng.`,
  },

  {
    id: 'long-tri-tai-phu-the-kinh-da',
    title: 'Long Trì + Kình Dương / Đà La tại Phu Thê - hôn nhân trắc trở',
    sao: ['Long Trì'],
    cung: ['Phu Thê'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 73,
    tomTat: `**Long Trì** gặp Kình Dương hoặc Đà La tại Phu Thê khiến hôn
nhân của đương số dễ trắc trở; vợ chồng hay bất hòa hoặc xa cách, có thể
phải hai lần đò.`,
  },

  {
    id: 'long-tri-tai-phu-the-hoa-ky',
    title: 'Long Trì + Hóa Kỵ tại Phu Thê - hôn nhân trắc trở',
    sao: ['Long Trì'],
    cung: ['Phu Thê'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 73,
    tomTat: `**Long Trì** gặp Hóa Kỵ tại Phu Thê khiến hôn nhân của đương số
dễ trắc trở; vợ chồng hay bất hòa hoặc xa cách, có thể phải hai lần đò.`,
  },

  {
    id: 'long-tri-tai-huynh-de',
    title: 'Long Trì tại Huynh Đệ',
    sao: ['Long Trì'],
    cung: ['Huynh Đệ'],
    doUuTien: 70,
    tomTat: `**Long Trì** ngụ tại Huynh Đệ cho biết anh chị em của đương số
nhiều người tài năng, giỏi giang và thành đạt, sống ngay thẳng và công tâm.

Mặt khó của bộ này là tính cách nghiêm nghị, khắt khe; đôi khi khó tính
trong cách ứng xử. Trong gia đình dễ có người theo ngành luật pháp, hành
chính, thẩm phán, luật sư hoặc những công việc mang tính công quyền và xét
đoán.`,
  },

  {
    id: 'long-tri-han-cuoi-hoi',
    title: 'Long Trì + Thiên Riêu + Thiên Hỷ vào hạn - cưới hỏi',
    sao: ['Long Trì'],
    ketHop: ['Thiên Riêu', 'Thiên Hỷ'],
    doUuTien: 60,
    tomTat: `**Long Trì** đi cùng Thiên Riêu và Thiên Hỷ vào hạn tạo nên hạn
cưới hỏi, đưa đến hôn nhân. Năm có hạn này, đương số độc thân dễ gặp người
yêu, cưới hỏi — như có duyên thiên định.`,
  },

  {
    id: 'long-tri-han-thi-do',
    title: 'Long Trì + Phong Cáo + Quốc Ấn vào hạn - thi đỗ thăng chức',
    sao: ['Long Trì'],
    ketHop: ['Phong Cáo', 'Quốc Ấn'],
    doUuTien: 60,
    tomTat: `**Long Trì** đi cùng Phong Cáo và Quốc Ấn vào hạn cho cách thi
đỗ và thăng chức. Bộ Phong Cáo (bằng cấp) — Quốc Ấn (chức tước) — Long Trì
(khoa bảng) tạo nên cách hiển đạt công danh ngay năm có hạn.`,
  },

  {
    id: 'long-tri-loi-khuyen',
    title: 'Lời khuyên cho người Long Trì',
    sao: ['Long Trì'],
    doUuTien: 35,
    tomTat: `**Long Trì** là ngôi sao của danh vọng và phúc phần — vừa là tấm
bùa hộ mệnh cho con đường công danh, vừa là ánh sáng soi đường cho sự hưng
thịnh của gia đạo của đương số.

Ưu điểm của sao này thể hiện vẹn toàn trên nhiều mặt: nhan sắc (mũi đẹp),
tính hạnh ôn hòa nhân hậu, tài lộc dồi dào và gia đạo thuận hòa.

Để phát huy tối đa Long Trì, chủ mệnh nên:

- Giữ tâm chính trực, hành sự đường hoàng
- Phát huy tài văn chương và khoa bảng
- Tìm cách đi cùng cát tinh — đặc biệt là Phượng Các để tạo cách Long Phượng
- Chăm sóc sức khỏe vùng mũi và hô hấp

Người hữu duyên được Long Trì chiếu chỉ cần giữ tâm chính trực, hành sự
đường hoàng, ắt sẽ hưởng phúc lộc lâu dài và lưu danh hậu thế.`,
  },
];
