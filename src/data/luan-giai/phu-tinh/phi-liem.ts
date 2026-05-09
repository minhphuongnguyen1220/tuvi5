import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO PHI LIÊM - Hỏa, vòng Lộc Tồn (vị trí 7)
 * Hình tượng đôi cánh / mũi tên / viên đạn - chuyển động, linh hoạt
 */
export const luanGiai_PhiLiem: DoanLuanGiai[] = [
  {
    id: 'phi-liem-tinh-chat-chung',
    title: 'Phi Liêm - Đặc tính chung',
    sao: ['Phi Liêm'],
    doUuTien: 30,
    tomTat: `**Phi Liêm** là phụ tinh thuộc vòng Lộc Tồn, đứng ở vị trí thứ 7,
mang ngũ hành Hỏa. Hình tượng của sao là đôi cánh, mũi tên hay viên đạn —
gợi tính chuyển động, linh hoạt và nhanh nhẹ.

Phi Liêm đối xung với cặp Bác Sĩ và Lộc Tồn, vốn thuộc nhóm ổn định, cẩn thận
và kĩ càng — sự đối xung này tạo ra cân bằng giữa động và tĩnh trong vòng
sao. Đặc tính cốt lõi của sao là mau lẹ, linh hoạt, thịnh tiến nhưng không
cẩn thận. Đây là sao đặc trưng cho hành vi nhanh chóng, biết nắm thời cơ,
song cũng dễ mắc sai lầm và làm việc sai trái.

Một biểu hiện hữu hình của Phi Liêm là chủ về tóc và lông — khi sao thủ Mệnh,
đương số là người có tóc tốt và dày.`,
  },

  {
    id: 'phi-liem-tai-menh',
    title: 'Phi Liêm tại Mệnh',
    sao: ['Phi Liêm'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `Khi Phi Liêm thủ Mệnh, đương số là người vui vẻ, hoạt bát và
lanh lợi; tác phong nhanh nhẹn, nhạy bén với phản ứng mau lẹ. Về tướng mạo,
chủ mệnh có lông tóc tốt và dày.

Khuyết điểm rõ rệt là tính nóng vội, hấp tấp — đương số làm nhanh, không ưa
suy nghĩ sâu nên dễ ra quyết định vội mà thiếu cân nhắc.

Một đặc trưng vị thế đáng chú ý: Phi Liêm thủ Mệnh luôn xung chiếu với Lộc
Tồn ở Di. Nhờ vậy, đương số có cách hưởng thiên lộc chính đáng, dễ có tài sản
thừa kế hoặc được người khác giúp đỡ về kinh tế.`,
  },

  {
    id: 'phi-liem-tai-menh-hong-loan',
    title: 'Phi Liêm + Hồng Loan tại Mệnh - tóc rậm xanh tốt',
    sao: ['Phi Liêm'],
    cung: ['Mệnh'],
    ketHop: ['Hồng Loan'],
    doUuTien: 73,
    tomTat: `Khi Phi Liêm gặp Hồng Loan tại Mệnh, đương số có tóc mọc rậm,
xanh tốt.`,
  },

  {
    id: 'phi-liem-tai-menh-dao-hoa',
    title: 'Phi Liêm + Đào Hoa tại Mệnh - tóc rậm xanh tốt',
    sao: ['Phi Liêm'],
    cung: ['Mệnh'],
    ketHop: ['Đào Hoa'],
    doUuTien: 73,
    tomTat: `Khi Phi Liêm gặp Đào Hoa tại Mệnh, đương số có tóc mọc rậm, xanh
tốt.`,
  },

  {
    id: 'phi-liem-tai-menh-tham-lang-hoa-loc',
    title: 'Phi Liêm + Tham Lang + Hóa Lộc tại Mệnh - tu my nam tử',
    sao: ['Phi Liêm'],
    cung: ['Mệnh'],
    ketHop: ['Tham Lang', 'Hóa Lộc'],
    doUuTien: 73,
    tomTat: `Khi Phi Liêm hội cùng Tham Lang và Hóa Lộc tại Mệnh, đương số có
râu tóc đều tốt — đúng chất "diện mạo tu my nam tử".`,
  },

  {
    id: 'phi-liem-tai-phu-mau',
    title: 'Phi Liêm tại Phụ Mẫu',
    sao: ['Phi Liêm'],
    cung: ['Phụ Mẫu'],
    doUuTien: 70,
    tomTat: `Khi Phi Liêm cư Phụ Mẫu, cha mẹ đương số là những người từng trải,
hiền lương và nhanh nhẹn. Vì Phi Liêm chủ về sự nhanh chóng nên cha mẹ thường
có cách lấy nhau và sinh con từ sớm.`,
  },

  {
    id: 'phi-liem-tai-phu-mau-sat-bai-tinh',
    title: 'Phi Liêm tại Phụ Mẫu + Sát bại tinh - cha mẹ vất vả',
    sao: ['Phi Liêm'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 65,
    tomTat: `Khi Phi Liêm cư Phụ Mẫu gặp các sát bại tinh thuộc Lục Sát (Kình
Dương, Đà La, Hỏa Tinh, Linh Tinh, Địa Không, Địa Kiếp), cha mẹ đương số vất
vả, trải qua nhiều thăng trầm; công việc luôn trong cảnh "chạy ngược chạy
xuôi", hối hả không ngơi nghỉ.`,
  },

  {
    id: 'phi-liem-tai-phuc-duc',
    title: 'Phi Liêm tại Phúc Đức',
    sao: ['Phi Liêm'],
    cung: ['Phúc Đức'],
    doUuTien: 70,
    tomTat: `Khi Phi Liêm cư Phúc Đức, cách cục để lại dấu ấn rõ trên mộ phần
tổ tiên: mộ thường đặt gần núi đồi trơ trọi, đất xung quanh khô nóng và tan
lở; mồ mả tổ tiên còn dễ bị mối mọt.

Trong dòng họ cũng có nhiều người đi xa làm ăn.`,
  },

  {
    id: 'phi-liem-tai-phuc-duc-hinh-viet-hoa-linh-khong-kiep',
    title: 'Phi Liêm + Hình + Việt + Hỏa Linh + Không Kiếp tại Phúc Đức - chết đường chết chợ',
    sao: ['Phi Liêm'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Hình', 'Thiên Việt', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 60,
    tomTat: `Khi Phi Liêm cư Phúc Đức hội đủ Thiên Hình, Thiên Việt, Hỏa Tinh,
Linh Tinh, Địa Không và Địa Kiếp, trong dòng họ đương số dễ có người chết
đường chết chợ, hoặc nhà có thờ thương binh liệt sĩ.`,
  },

  {
    id: 'phi-liem-tai-dien-trach',
    title: 'Phi Liêm tại Điền Trạch',
    sao: ['Phi Liêm'],
    cung: ['Điền Trạch'],
    doUuTien: 70,
    tomTat: `Khi Phi Liêm cư Điền, trong nhà đương số rất nhiều côn trùng —
mối, gián, kiến, ruồi, muỗi — ảnh hưởng sức khỏe và gây bất tiện trong sinh
hoạt.

Đáng lo hơn, chúng có thể truyền những mầm bệnh nguy hiểm như sốt xuất huyết,
sốt rét, đau mắt và các bệnh đường tiêu hóa.`,
  },

  {
    id: 'phi-liem-tai-dien-trach-dia-khong',
    title: 'Phi Liêm + Địa Không tại Điền Trạch - bom đạn pháo kích',
    sao: ['Phi Liêm'],
    cung: ['Điền Trạch'],
    ketHop: ['Địa Không'],
    doUuTien: 65,
    tomTat: `Khi Phi Liêm gặp Địa Không tại Điền Trạch, nơi ở của đương số
trong thời chiến là khu vực nhạy cảm, dễ trúng bom đạn, pháo kích và súng
ống.`,
  },

  {
    id: 'phi-liem-tai-dien-trach-dia-kiep',
    title: 'Phi Liêm + Địa Kiếp tại Điền Trạch - bom đạn pháo kích',
    sao: ['Phi Liêm'],
    cung: ['Điền Trạch'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 65,
    tomTat: `Khi Phi Liêm gặp Địa Kiếp tại Điền Trạch, nơi ở của đương số
trong thời chiến là khu vực nhạy cảm, dễ trúng bom đạn, pháo kích và súng
ống.`,
  },

  {
    id: 'phi-liem-tai-dien-trach-linh-tinh',
    title: 'Phi Liêm + Linh Tinh tại Điền Trạch - bom đạn pháo kích',
    sao: ['Phi Liêm'],
    cung: ['Điền Trạch'],
    ketHop: ['Linh Tinh'],
    doUuTien: 65,
    tomTat: `Khi Phi Liêm gặp Linh Tinh tại Điền Trạch, nơi ở của đương số
trong thời chiến là khu vực nhạy cảm, dễ trúng bom đạn, pháo kích và súng
ống.`,
  },

  {
    id: 'phi-liem-tai-dien-trach-hoa-tinh',
    title: 'Phi Liêm + Hỏa Tinh tại Điền Trạch - bom đạn pháo kích',
    sao: ['Phi Liêm'],
    cung: ['Điền Trạch'],
    ketHop: ['Hỏa Tinh'],
    doUuTien: 65,
    tomTat: `Khi Phi Liêm gặp Hỏa Tinh tại Điền Trạch, nơi ở của đương số
trong thời chiến là khu vực nhạy cảm, dễ trúng bom đạn, pháo kích và súng
ống.`,
  },

  {
    id: 'phi-liem-tai-quan-loc',
    title: 'Phi Liêm tại Quan Lộc',
    sao: ['Phi Liêm'],
    cung: ['Quan Lộc'],
    doUuTien: 75,
    tomTat: `Khi Phi Liêm cư Quan có cát tinh hỗ trợ — đặc biệt là Lục Cát (Tả
Phù, Hữu Bật, Văn Xương, Văn Khúc, Thiên Khôi, Thiên Việt) — công danh đương
số sớm đạt, "lên như diều gặp gió".

Cách cục phù hợp với những ngành nghề có tính chuyển động, tốc độ cao:

- Hàng không, giao hàng, bưu chính, vận chuyển, viễn thông
- Thương mại điện tử
- Công nghệ kỹ thuật lửa điện, vi tính

Dù làm lĩnh vực nào, đương số cũng cần đề cao nguyên tắc, an toàn và sự cẩn
thận — tuyệt đối tránh kiểu "nghĩ ẩu làm liều".`,
  },

  {
    id: 'phi-liem-tai-quan-loc-sat-tinh',
    title: 'Phi Liêm + Sát tinh tại Quan Lộc - quyết định vội vàng',
    sao: ['Phi Liêm'],
    cung: ['Quan Lộc'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Khi Phi Liêm cư Quan Lộc gặp các sát tinh thuộc Lục Sát, công danh
đương số trắc trở; dễ ra những quyết định vội vàng làm hỏng việc.`,
  },

  {
    id: 'phi-liem-tai-no-boc',
    title: 'Phi Liêm tại Nô Bộc',
    sao: ['Phi Liêm'],
    cung: ['Nô Bộc'],
    doUuTien: 68,
    tomTat: `Khi Phi Liêm cư Nô, bạn bè của đương số là những người khôn
ngoan, lanh lẹ và nhanh trí. Chủ mệnh dễ kết bạn, hòa đồng — ai cũng chơi và
không tính toán nhiều trong các mối quan hệ.`,
  },

  {
    id: 'phi-liem-tai-thien-di',
    title: 'Phi Liêm tại Thiên Di',
    sao: ['Phi Liêm'],
    cung: ['Thiên Di'],
    doUuTien: 72,
    tomTat: `Khi Phi Liêm cư Di, đương số là người hay phải đi lại nhiều, nhanh
nhẹn, hoạt bát, giỏi xoay sở và ứng biến.

Khi vận hạn gặp Phi Liêm, đương số dễ có cơ hội xuất ngoại.`,
  },

  {
    id: 'phi-liem-tai-thien-di-am-duong-dong-ma',
    title: 'Phi Liêm + Thái Âm + Thái Dương + Thiên Đồng + Thiên Mã tại Thiên Di - đi đường hàng không',
    sao: ['Phi Liêm'],
    cung: ['Thiên Di'],
    ketHop: ['Thái Âm', 'Thái Dương', 'Thiên Đồng', 'Thiên Mã'],
    doUuTien: 67,
    tomTat: `Khi Phi Liêm hội cùng Thái Âm, Thái Dương, Thiên Đồng và Thiên Mã
tại Thiên Di, đương số hay đi xa và thường được đi bằng đường hàng không.`,
  },

  {
    id: 'phi-liem-tai-tat-ach',
    title: 'Phi Liêm tại Tật Ách - Tai họa từ vật bay nhanh',
    sao: ['Phi Liêm'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `Khi Phi Liêm cư Tật, bệnh tật của đương số phát tác nhanh chóng.
Sao ám chỉ những vật thể bay gây nguy hiểm: tên, đạn, lửa điện, sấm sét, vi
khuẩn và các dị vật bay hỗn loạn.

Cách cục cực nguy hiểm khi tại Tật Ách hội đủ Thiên Hình, Thiên Việt, Phi
Liêm, Linh Tinh và Hỏa Tinh — tạo thành bộ "lửa điện" rất mạnh:

- Súng đạn, lửa điện
- Sét đánh, té xe

Ngay cả khi đương số làm trong ngành công nghệ, kỹ thuật hay lửa điện, vẫn
phải hết sức đề phòng nạn ách bất ngờ.`,
  },

  {
    id: 'phi-liem-tai-tat-ach-sat-tinh',
    title: 'Phi Liêm + Sát tinh tại Tật Ách - tai nạn đột ngột',
    sao: ['Phi Liêm'],
    cung: ['Tật Ách'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 73,
    tomTat: `Khi Phi Liêm cư Tật Ách gặp các sát tinh thuộc Lục Sát, đương số
cần đề phòng:

- Dị vật văng trúng gây thương tích
- Tai nạn đột ngột như té xe, lửa điện hay nhiễm virus`,
  },

  {
    id: 'phi-liem-tai-tai-bach',
    title: 'Phi Liêm tại Tài Bạch',
    sao: ['Phi Liêm'],
    cung: ['Tài Bạch'],
    doUuTien: 72,
    tomTat: `Khi Phi Liêm cư Tài, đương số kiếm tiền nhanh và chớp nhoáng;
ngược lại, chi tiêu cũng nhanh và ít suy nghĩ.`,
  },

  {
    id: 'phi-liem-tai-tai-bach-cat-tinh',
    title: 'Phi Liêm + Cát tinh tại Tài Bạch - kiếm tiền nhanh',
    sao: ['Phi Liêm'],
    cung: ['Tài Bạch'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 67,
    tomTat: `Khi Phi Liêm cư Tài Bạch có Lục Cát (Tả Phù, Hữu Bật, Văn Xương,
Văn Khúc, Thiên Khôi, Thiên Việt) hội về, đương số dễ kiếm tiền nhanh.`,
  },

  {
    id: 'phi-liem-tai-tai-bach-sat-tinh',
    title: 'Phi Liêm + Sát tinh tại Tài Bạch - dễ bị lừa lỗ vốn',
    sao: ['Phi Liêm'],
    cung: ['Tài Bạch'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 67,
    tomTat: `Khi Phi Liêm cư Tài Bạch gặp các sát tinh thuộc Lục Sát, đương số
khó kiếm tiền, dễ bị lừa, đầu tư nóng vội rồi bị lỗ.`,
  },

  {
    id: 'phi-liem-tai-tu-tuc',
    title: 'Phi Liêm tại Tử Tức - Hiếm muộn',
    sao: ['Phi Liêm'],
    cung: ['Tử Tức'],
    doUuTien: 72,
    tomTat: `Khi Phi Liêm cư Tử Tức, số lượng con cái của đương số bị giảm; sao
không có lợi cho thai sản — dễ sinh non hoặc hiếm muộn.

Khả năng hiếm muộn tăng cao khi Phi Liêm hội thêm các sao tiêu cực như Vũ
Khúc, Thái Âm hãm, Phá Quân, Thất Sát, Thiên Hình, Hóa Kỵ, Tang Hổ, Cô Quả,
Đẩu Quân, Nhị Hao, Thái Tuế, Đà La, Lộc Tồn, Không Kiếp, Hỏa Linh, Suy, Bệnh
hay Kiếp Sát. Càng hội nhiều sao trong nhóm này, mức độ càng nặng — có thể đi
đến tuyệt tự.`,
  },

  {
    id: 'phi-liem-tai-tu-tuc-cat-tinh',
    title: 'Phi Liêm + Cát tinh tại Tử Tức - con vui vẻ lanh lợi',
    sao: ['Phi Liêm'],
    cung: ['Tử Tức'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 67,
    tomTat: `Khi Phi Liêm cư Tử Tức có Lục Cát (Tả Phù, Hữu Bật, Văn Xương, Văn
Khúc, Thiên Khôi, Thiên Việt) hội về, con cái đương số vui vẻ, lanh lợi và
hoạt bát.`,
  },

  {
    id: 'phi-liem-tai-phu-the',
    title: 'Phi Liêm tại Phu Thê',
    sao: ['Phi Liêm'],
    cung: ['Phu Thê'],
    doUuTien: 70,
    tomTat: `Khi Phi Liêm cư Phu Thê, tình duyên đến với đương số rất nhanh
chóng — kiểu "yêu nhanh cưới nhanh". Người hôn phối có nét nhanh nhẹn, hoạt
bát, lông tóc tốt và dày.

Vì công việc của bạn đời thường phải di chuyển và đi lại nhiều, vợ chồng hay
phải xa cách.`,
  },

  {
    id: 'phi-liem-tai-phu-the-hong-loan',
    title: 'Phi Liêm + Hồng Loan tại Phu Thê - tóc óng mượt',
    sao: ['Phi Liêm'],
    cung: ['Phu Thê'],
    ketHop: ['Hồng Loan'],
    doUuTien: 65,
    tomTat: `Khi Phi Liêm gặp Hồng Loan tại Phu Thê, người hôn phối của đương
số có tóc tai óng mượt, đẹp đẽ.`,
  },

  {
    id: 'phi-liem-tai-huynh-de',
    title: 'Phi Liêm tại Huynh Đệ',
    sao: ['Phi Liêm'],
    cung: ['Huynh Đệ'],
    doUuTien: 68,
    tomTat: `Khi Phi Liêm cư Huynh Đệ, số lượng anh chị em của đương số bị
giảm — ít người. Anh chị em cũng hay đi xa và ít ở gần.`,
  },

  {
    id: 'phi-liem-tai-huynh-de-dong-ma-am-duong',
    title: 'Phi Liêm + Thiên Đồng + Thiên Mã + Âm Dương tại Huynh Đệ - anh em đi xa rõ rệt',
    sao: ['Phi Liêm'],
    cung: ['Huynh Đệ'],
    ketHop: ['Thiên Đồng', 'Thiên Mã', 'Thái Âm', 'Thái Dương'],
    doUuTien: 63,
    tomTat: `Khi Phi Liêm hội cùng Thiên Đồng, Thiên Mã, Thái Âm và Thái Dương
tại Huynh Đệ, hiện tượng anh chị em đi xa và ít ở gần càng rõ rệt hơn.`,
  },

  {
    id: 'phi-liem-bach-ho-ho-moc-canh',
    title: 'Phi Liêm + Bạch Hổ - "Hổ mọc cánh"',
    sao: ['Phi Liêm'],
    ketHop: ['Bạch Hổ'],
    doUuTien: 65,
    tomTat: `Khi Phi Liêm gặp Bạch Hổ, cách cục mang tên **"hổ mọc cánh"** —
chủ về:

- May mắn, gặp thời vận tốt
- Phát đạt rõ rệt:
  - Thi đậu
  - Thăng quan
  - Thương gia đắc lợi

Hổ vốn dũng mãnh, lại có thêm cánh để bay nên uy lực và tốc độ đều đạt mức
tột bậc.`,
  },

  {
    id: 'phi-liem-viet-hoa-hinh',
    title: 'Phi Liêm + Thiên Việt + Hỏa Tinh + Thiên Hình - Tai họa lửa điện',
    sao: ['Phi Liêm'],
    ketHop: ['Thiên Việt', 'Hỏa Tinh', 'Thiên Hình'],
    doUuTien: 65,
    tomTat: `Khi Phi Liêm hội đủ Thiên Việt, Hỏa Tinh và Thiên Hình, bộ sao trở
nên cực kỳ nguy hiểm, chủ về:

- Nạn binh đao
- Bị súng bắn
- Sét đánh, giật điện
- Tai nạn xe cộ

Những tai họa này thường xảy ra rất bất ngờ — đương số cần hết sức cẩn
trọng.`,
  },

  {
    id: 'phi-liem-khong-kiep',
    title: 'Phi Liêm + Không Kiếp - Mất mát tài sản bất ngờ',
    sao: ['Phi Liêm'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 60,
    tomTat: `Khi Phi Liêm hội cùng Địa Không và Địa Kiếp, cách cục chủ về mất
mát và phá tán điển hình. Bản chất Không Kiếp vốn liều lĩnh, táo bạo, gây mất
mát phá hoại hoàn toàn; cộng thêm Phi Liêm khiến nhịp bạo phát bạo tàn diễn
ra rất nhanh:

- Đầu tư lớn bộc phát rồi tiêu tan
- Bị lừa đảo bất ngờ
- Gặp biến cố khiến tài sản tiêu tan trong chốc lát`,
  },
];
