import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO HÓA KỴ - Tứ Hóa, Ám Tinh
 */
export const luanGiai_HoaKy: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung của sao Hóa Kỵ
  // ============================================================
  {
    id: 'hoa-ky-tinh-chat-chung',
    title: 'Hóa Kỵ - Đặc tính chung',
    sao: ['Hóa Kỵ'],
    doUuTien: 30,
    tomTat: `**Hóa Kỵ** thuộc bộ Tứ Hóa cùng với Hóa Lộc, Hóa Quyền và Hóa
Khoa, ngũ hành Thủy. Hóa khí của sao này là Ác Tinh kiêm Ám Tinh, đặc tính
thâm trầm, xảo trá, đố kỵ, thị phi, ganh ghét, sợ sệt và kiêng dè.

Vị trí miếu hãm:

- **Đắc địa**: Thìn, Tuất, Sửu, Mùi
- **Hãm địa**: Tý, Dần, Mão, Tỵ, Ngọ, Thân, Dậu, Hợi

Hóa Kỵ được an theo Thiên Can năm sinh — mỗi đương số chỉ có duy nhất một
Hóa Kỵ trong lá số. Cần lưu ý: phải có Hóa Kỵ thì mới có Hóa Khoa, Hóa
Quyền và Hóa Lộc — đây là phần không thể thiếu của Tứ Hóa.`,

    chiTiet: `## Bản chất "Kỵ"

Chữ "Kỵ" trong Hán tự có bộ "Tâm", ý chỉ ghen ghét, sợ sệt và kiêng dè. Hóa
Kỵ giống như một lớp màng lọc biến mọi thứ qua nó trở nên xảo quyệt hơn,
thâm trầm hơn, dễ bị ganh ghét và gây trở ngại cho cung mà nó đóng.

## Đặc tính "thu hút"

Hành Thủy có xu hướng hướng nội cao, thích thu hút mọi thứ về mình mà không
quan tâm thế giới xung quanh. Đặc tính này tạo ra hai hiệu ứng trái ngược
tùy theo loại sao đi cùng:

- Khi gặp cát tinh: Hóa Kỵ như thỏi nam châm hút hết, cản trở các sao tốt
  không cho đặc tính tốt phát huy ra ngoài.
- Khi gặp sát bại tinh: Hóa Kỵ đồng nhất với chúng, tạo sức công phá mãnh
  liệt — sinh thị phi, điều tiếng, bệnh tật và khó khăn cho đương số.`,
  },

  // ============================================================
  // 2. Hóa Kỵ - hiệu ứng với từng loại sao
  // ============================================================
  {
    id: 'hoa-ky-hieu-ung-sao',
    title: 'Hóa Kỵ - Hiệu ứng với từng loại sao',
    sao: ['Hóa Kỵ'],
    doUuTien: 35,
    tomTat: `Hóa Kỵ có khả năng làm biến đổi mọi sao đi cùng theo hướng tiêu
cực hoặc thu hẹp lại. Các tổ hợp cụ thể được trình bày tại các luận giải
liền kề.`,
  },
  {
    id: 'hoa-ky-sao-hoc-tap',
    title: 'Hóa Kỵ + Sao học tập (Xương Khúc/Khôi Việt) - Khó khăn học hành',
    sao: ['Hóa Kỵ'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt', 'Lưu Niên Văn Tinh'],
    doUuTien: 30,
    tomTat: `Khi Hóa Kỵ đi cùng các sao học tập như Văn Xương, Văn Khúc,
Thiên Khôi, Thiên Việt hoặc Lưu Niên Văn Tinh, đương số gặp khó khăn trong
học hành và công danh — ít bằng cấp, hoặc có bằng cấp nhưng không dùng tới.`,
  },
  {
    id: 'hoa-ky-phuc-thien-tinh',
    title: 'Hóa Kỵ + Phúc thiện tinh - Làm phúc phải tội',
    sao: ['Hóa Kỵ'],
    ketHop: ['Ân Quang', 'Thiên Quý', 'Thiên Quan', 'Thiên Phúc', 'Thiên Đồng'],
    doUuTien: 30,
    tomTat: `Khi Hóa Kỵ đi cùng các phúc thiện tinh như Ân Quang, Thiên Quý,
Thiên Quan, Thiên Phúc hoặc Thiên Đồng, ý nghĩa tốt đẹp bị biến thành xui
xẻo — đương số rơi vào cảnh "làm phúc phải tội", hay gặp trái ngang.`,
  },
  {
    id: 'hoa-ky-cu-mon',
    title: 'Hóa Kỵ + Cự Môn - Vạ miệng thị phi',
    sao: ['Hóa Kỵ'],
    ketHop: ['Cự Môn'],
    doUuTien: 30,
    tomTat: `Khi Hóa Kỵ đi cùng Cự Môn, đặc tính vạ miệng và thị phi qua lời
nói thể hiện rất rõ rệt ở đương số.`,
  },
  {
    id: 'hoa-ky-sat-bai-tinh',
    title: 'Hóa Kỵ + Sát bại tinh - Công phá mãnh liệt',
    sao: ['Hóa Kỵ'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp', 'Đại Hao', 'Tiểu Hao'],
    doUuTien: 30,
    tomTat: `Khi Hóa Kỵ đi cùng sát bại tinh (Kình Dương, Đà La, Hỏa Tinh,
Linh Tinh, Địa Không, Địa Kiếp, Đại Hao, Tiểu Hao), Hóa Kỵ đồng nhất với
chúng tạo sức công phá mãnh liệt — đương số gặp thị phi, điều tiếng, bệnh
tật và khó khăn dồn dập.`,
  },
  {
    id: 'hoa-ky-thai-am-thai-duong',
    title: 'Hóa Kỵ + Thái Âm/Thái Dương - Mắt kém',
    sao: ['Hóa Kỵ'],
    ketHop: ['Thái Âm', 'Thái Dương'],
    doUuTien: 30,
    tomTat: `Khi Hóa Kỵ đi cùng Thái Âm hoặc Thái Dương, bất luận ở cung nào
cũng chủ về mắt kém, các tật khúc xạ và đau mắt.`,
  },
  {
    id: 'hoa-ky-rieu-da-linh-hoa-am-duong-dong-tat-ach',
    title: 'Hóa Kỵ + Riêu/Đà/Linh Hỏa/Âm Dương/Đồng tại Tật Ách - Bệnh tâm linh',
    sao: ['Hóa Kỵ'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Riêu', 'Đà La', 'Linh Tinh', 'Hỏa Tinh', 'Thái Âm', 'Thái Dương', 'Thiên Đồng'],
    doUuTien: 30,
    tomTat: `Khi Hóa Kỵ tại Tật Ách hội Thiên Riêu, Đà La, Linh Tinh, Hỏa
Tinh, Thái Âm, Thái Dương hoặc Thiên Đồng, đương số dễ vướng bệnh tâm linh
— bị cơ hành, dở điên dở dại.`,
  },

  // ============================================================
  // 3. Hóa Kỵ tại Mệnh - tính cách
  // ============================================================
  {
    id: 'hoa-ky-tai-menh-tinh-cach',
    title: 'Hóa Kỵ tại Mệnh - Tính cách',
    sao: ['Hóa Kỵ'],
    cung: ['Mệnh'],
    doUuTien: 85,
    tomTat: `Đương số có **Hóa Kỵ** cư Mệnh là người thâm trầm, đa nghi, hay
đố kỵ và ganh ghét người khác. Tính tình hướng nội, thu mình lại và ít giao
tiếp.`,
  },

  {
    id: 'hoa-ky-tai-menh-dac-cat-tinh',
    sao: ['Hóa Kỵ'],
    cung: ['Mệnh'],
    trangThai: ['Đắc'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 78,
    tomTat: `Khi Hóa Kỵ **Đắc** địa tại Mệnh hội đủ Lục Cát tinh (Tả Phù, Hữu
Bật, Văn Xương, Văn Khúc, Thiên Khôi, Thiên Việt), đương số khôn ngoan, sắc
sảo, cẩn trọng và được nhiều người kính nể. Là người kín đáo, biết tiến
lùi, khiêm tốn nhưng bản lĩnh; "đi guốc trong bụng" người khác nên thấu
hiểu và dễ cảm thông.`,
  },

  {
    id: 'hoa-ky-tai-menh-ham',
    sao: ['Hóa Kỵ'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi Hóa Kỵ **Hãm** địa tại Mệnh, đương số mặc cảm, tự ti, hay
tự trách bản thân và bỏ lỡ nhiều cơ hội. Tính đa nghi, lo xa, thiếu quyết
đoán khiến đương số dễ giằng xé giữa lý trí và cảm xúc.`,
  },

  {
    id: 'hoa-ky-tai-menh-sat-tinh',
    sao: ['Hóa Kỵ'],
    cung: ['Mệnh'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 75,
    tomTat: `Khi Hóa Kỵ tại Mệnh đi cùng sát tinh (Kình Dương, Đà La, Hỏa
Tinh, Linh Tinh), đương số càng khép kín, sống nội tâm quá mức và khó mở
lòng với ai.`,
  },

  {
    id: 'hoa-ky-tai-menh-hoa-khoa',
    sao: ['Hóa Kỵ'],
    cung: ['Mệnh'],
    ketHop: ['Hóa Khoa'],
    doUuTien: 75,
    tomTat: `Khi Hóa Kỵ tại Mệnh gặp Hóa Khoa, tư duy của đương số được tăng
thêm độ sâu sắc — song cần tránh thiên quá về lý trí mà thiếu hành động
thực tế.`,
  },

  {
    id: 'hoa-ky-tai-menh-khong-kiep-linh-hoa',
    sao: ['Hóa Kỵ'],
    cung: ['Mệnh'],
    ketHop: ['Thiên Không', 'Địa Kiếp', 'Linh Tinh', 'Hỏa Tinh'],
    doUuTien: 75,
    tomTat: `Khi Hóa Kỵ tại Mệnh đi cùng Thiên Không, Địa Kiếp, Linh Tinh
hoặc Hỏa Tinh, đương số dễ rơi vào trạng thái dằn vặt, trầm cảm, bi quan
hoặc hành xử cực đoan.`,
  },

  {
    id: 'hoa-ky-tai-menh-ta-huu-khoi-viet',
    sao: ['Hóa Kỵ'],
    cung: ['Mệnh'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 75,
    tomTat: `Khi Hóa Kỵ tại Mệnh hội Tả Phù, Hữu Bật, Thiên Khôi hoặc Thiên
Việt, tính chất xấu của Hóa Kỵ chuyển hóa theo hướng tích cực — đương số
biết mình biết người, xử sự khéo léo và có chiều sâu chiến lược.`,
  },

  // ============================================================
  // 4. Hóa Kỵ - cái LƯỠI và vạ miệng
  // ============================================================
  {
    id: 'hoa-ky-cai-luoi',
    title: 'Hóa Kỵ - Chủ về CÁI LƯỠI và vạ miệng',
    sao: ['Hóa Kỵ'],
    doUuTien: 50,
    tomTat: `Hóa Kỵ chủ về cái lưỡi: đương số có Hóa Kỵ tại Mệnh thường
không cẩn trọng lời nói nên dễ lỡ lời, gặp chuyện thị phi qua chính lời ăn
tiếng nói của mình.

Đương số có Hóa Kỵ thích đi vào chi tiết, đào sâu vấn đề đến gốc rễ — nếu
không hội cát tinh thì xu hướng này dễ trở nên vụn vặt, không nhìn xa
trông rộng.`,
  },
  {
    id: 'hoa-ky-cai-luoi-cu-mon',
    title: 'Hóa Kỵ + Cự Môn - Vạ miệng nặng',
    sao: ['Hóa Kỵ'],
    ketHop: ['Cự Môn'],
    doUuTien: 45,
    tomTat: `Khi Hóa Kỵ đi cùng Cự Môn, đặc điểm vạ miệng càng thể hiện rõ
ràng — đương số vạ miệng nặng, thị phi liên miên không dứt.`,
  },

  // ============================================================
  // 5. Hóa Kỵ tại Mệnh - bệnh tật & tai họa
  // ============================================================
  {
    id: 'hoa-ky-tai-menh-benh-tat',
    title: 'Hóa Kỵ tại Mệnh - Bệnh tật & tai họa',
    sao: ['Hóa Kỵ'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `Đương số có Hóa Kỵ tại Mệnh phải lưu ý nhiều mặt về bệnh tật và
tai họa:

- Dễ vướng thị phi, cãi vã, hiểu lầm và kiện tụng
- Hành Thủy nên cẩn trọng chuyện sông nước
- Hay mắc bệnh thần kinh, tinh thần — trầm cảm, căng thẳng

Về sự nghiệp, đương số có khuynh hướng ích kỷ và khó hòa nhập nên đường
công danh khó khăn.`,
  },

  {
    id: 'hoa-ky-tai-menh-thai-duong-linh-hoa',
    sao: ['Hóa Kỵ'],
    cung: ['Mệnh'],
    ketHop: ['Thái Dương', 'Linh Tinh', 'Hỏa Tinh'],
    doUuTien: 73,
    tomTat: `Khi Hóa Kỵ tại Mệnh đi cùng Thái Dương kèm Linh Tinh hoặc Hỏa
Tinh, bệnh thần kinh và tinh thần càng rõ rệt — đương số dễ trầm cảm và
căng thẳng nặng.`,
  },

  {
    id: 'hoa-ky-tai-menh-dac-tam-hoa',
    sao: ['Hóa Kỵ'],
    cung: ['Mệnh'],
    trangThai: ['Đắc'],
    ketHop: ['Hóa Khoa', 'Hóa Lộc', 'Hóa Quyền'],
    doUuTien: 75,
    tomTat: `Khi Hóa Kỵ **Đắc** địa tại Mệnh hội Hóa Khoa, Hóa Lộc hoặc Hóa
Quyền, đường công danh tài lộc của đương số dễ dàng và thuận lợi.`,
  },

  // ============================================================
  // 6. Hóa Kỵ tại Phụ Mẫu
  // ============================================================
  {
    id: 'hoa-ky-tai-phu-mau',
    title: 'Hóa Kỵ tại Phụ Mẫu',
    sao: ['Hóa Kỵ'],
    cung: ['Phụ Mẫu'],
    doUuTien: 72,
    tomTat: `Hóa Kỵ tại Phụ Mẫu cho thấy cha mẹ bất hòa xung khắc với nhau,
hoặc cha mẹ và con cái không hợp tính nên hay bất hòa cãi nhau. Con cái ít
quan tâm chăm sóc cha mẹ; cha mẹ cũng dễ gặp các vấn đề tâm lý, thần kinh.`,
  },

  {
    id: 'hoa-ky-tai-phu-mau-dac',
    sao: ['Hóa Kỵ'],
    cung: ['Phụ Mẫu'],
    trangThai: ['Đắc'],
    doUuTien: 70,
    tomTat: `Khi Hóa Kỵ **Đắc** địa tại Phụ Mẫu, cha mẹ đương số khôn ngoan
sắc sảo, nhiều mưu kế. Quan hệ tuy kín đáo nhưng sâu sắc, có sự tôn trọng
và thấu hiểu lẫn nhau; sức khỏe ổn định và cuộc sống yên bình.`,
  },

  {
    id: 'hoa-ky-tai-phu-mau-ham',
    sao: ['Hóa Kỵ'],
    cung: ['Phụ Mẫu'],
    trangThai: ['Hãm'],
    doUuTien: 70,
    tomTat: `Khi Hóa Kỵ **Hãm** địa tại Phụ Mẫu, tình cảm gia đình rạn nứt
do nhân sinh quan khác nhau; sức khỏe cha mẹ yếu.`,
  },

  {
    id: 'hoa-ky-tai-phu-mau-ham-dia-kiep-kinh',
    sao: ['Hóa Kỵ'],
    cung: ['Phụ Mẫu'],
    trangThai: ['Hãm'],
    ketHop: ['Địa Kiếp', 'Kình Dương'],
    doUuTien: 67,
    tomTat: `Khi Hóa Kỵ **Hãm** địa tại Phụ Mẫu đi cùng Địa Kiếp hoặc Kình
Dương, gia đình đương số chịu biến cố lớn để lại tổn thương sâu sắc.`,
  },

  // ============================================================
  // 7. Hóa Kỵ tại Phúc Đức
  // ============================================================
  {
    id: 'hoa-ky-tai-phuc-duc',
    title: 'Hóa Kỵ tại Phúc Đức',
    sao: ['Hóa Kỵ'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `Hóa Kỵ tại Phúc Đức khiến đương số kém may mắn, tổn thọ, hay
rơi vào cảnh "làm phúc phải tội" và vướng tai vạ thị phi với họ hàng.

Đương số ít quan tâm thờ cúng tổ tiên; mồ mả tổ tiên có nơi bị ngập nước.
Một điểm đáng lưu ý nữa là đương số có Hóa Kỵ tại Phúc dễ giảm nhân duyên
với hôn phối và bất hòa với gia đình bên hôn phối.`,
  },

  {
    id: 'hoa-ky-tai-phuc-duc-sat-tinh',
    sao: ['Hóa Kỵ'],
    cung: ['Phúc Đức'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 73,
    tomTat: `Khi Hóa Kỵ tại Phúc Đức đi cùng sát tinh (Kình Dương, Đà La,
Hỏa Tinh, Linh Tinh), trong dòng họ đương số có người bị điên, bệnh thần
kinh hoặc phù thủng.`,
  },

  {
    id: 'hoa-ky-tai-phuc-duc-khong-kiep',
    sao: ['Hóa Kỵ'],
    cung: ['Phúc Đức'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 73,
    tomTat: `Khi Hóa Kỵ tại Phúc Đức đi cùng Địa Không hoặc Địa Kiếp, thời
vận dòng họ đương số suy bại, nghèo nàn.`,
  },

  {
    id: 'hoa-ky-tai-phuc-duc-dac',
    sao: ['Hóa Kỵ'],
    cung: ['Phúc Đức'],
    trangThai: ['Đắc'],
    doUuTien: 73,
    tomTat: `Khi Hóa Kỵ **Đắc** địa tại Phúc Đức, đương số có ý thức làm
việc thiện và giữ đạo đức; phúc phần bền vững, tâm tính lương thiện.`,
  },

  // ============================================================
  // 8. Hóa Kỵ tại Điền Trạch
  // ============================================================
  {
    id: 'hoa-ky-tai-dien-trach',
    title: 'Hóa Kỵ tại Điền Trạch',
    sao: ['Hóa Kỵ'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Hóa Kỵ tại Điền Trạch khiến đương số trong đời ít nhất có một
lần phải bán nhà bán đất hoặc phá sản.

Phong thủy bếp không tốt; gia đình hay xung đột cãi vã, hàng xóm bất hòa.
Nhà của đương số thường gần nơi ồn ào náo nhiệt, gần cống rãnh hoặc sông
ngòi bốc mùi.`,
  },

  {
    id: 'hoa-ky-tai-dien-trach-dac',
    sao: ['Hóa Kỵ'],
    cung: ['Điền Trạch'],
    trangThai: ['Đắc'],
    doUuTien: 72,
    tomTat: `Khi Hóa Kỵ **Đắc** địa tại Điền Trạch, đương số sống kín đáo
không phô trương, phát đạt nhờ đất theo hướng âm thầm. Đương số gắn bó với
quê cha đất tổ và biết cách gìn giữ di sản.`,
  },

  {
    id: 'hoa-ky-tai-dien-trach-dac-phu-ta-huu-loc',
    sao: ['Hóa Kỵ'],
    cung: ['Điền Trạch'],
    trangThai: ['Đắc'],
    ketHop: ['Thiên Phủ', 'Tả Phù', 'Hữu Bật', 'Lộc Tồn'],
    doUuTien: 70,
    tomTat: `Khi Hóa Kỵ **Đắc** địa tại Điền Trạch đi cùng Thiên Phủ, Tả Phù,
Hữu Bật hoặc Lộc Tồn, đương số được hưởng gia sản.`,
  },

  {
    id: 'hoa-ky-tai-dien-trach-ham',
    sao: ['Hóa Kỵ'],
    cung: ['Điền Trạch'],
    trangThai: ['Hãm'],
    doUuTien: 72,
    tomTat: `Khi Hóa Kỵ **Hãm** địa tại Điền Trạch, đương số tha hương,
chuyển dời nhiều nơi, hay vướng tranh chấp đất đai và rắc rối giấy tờ; dễ
mua nhầm nhà có phong thủy xấu.`,
  },

  {
    id: 'hoa-ky-tai-dien-trach-ham-kiep-sat',
    sao: ['Hóa Kỵ'],
    cung: ['Điền Trạch'],
    trangThai: ['Hãm'],
    ketHop: ['Địa Kiếp', 'Kiếp Sát'],
    doUuTien: 70,
    tomTat: `Khi Hóa Kỵ **Hãm** địa tại Điền Trạch đi cùng Địa Kiếp hoặc
Kiếp Sát, đương số bị lừa đảo và tổn thất nặng khi đầu tư bất động sản.`,
  },

  // ============================================================
  // 9. Hóa Kỵ tại Quan Lộc
  // ============================================================
  {
    id: 'hoa-ky-tai-quan-loc',
    title: 'Hóa Kỵ tại Quan Lộc',
    sao: ['Hóa Kỵ'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `Hóa Kỵ tại Quan Lộc khiến đường công danh của đương số trắc
trở, thăng tiến chậm. Đương số bị tiểu nhân dèm pha chèn ép, không được
cấp trên tín nhiệm; lại có thói ghen ghét đố kỵ, dùng tiểu xảo chơi xấu
hãm hại đồng nghiệp.

Vì vậy đương số hay vướng tai tiếng, thị phi và dính pháp luật. Đương số
đặt lợi ích cá nhân lên trên, sẵn sàng giành giật, dễ căng thẳng đầu óc và
mắc bệnh thần kinh.`,
  },

  {
    id: 'hoa-ky-tai-quan-loc-dac',
    sao: ['Hóa Kỵ'],
    cung: ['Quan Lộc'],
    trangThai: ['Đắc'],
    doUuTien: 75,
    tomTat: `Khi Hóa Kỵ **Đắc** địa tại Quan Lộc, đương số có chuyên môn
cao, theo hướng học thuật, nghiên cứu, tư vấn. Thành công đến chậm nhưng
bền vững, phù hợp với các nghề luật sư, y học, giáo dục, tôn giáo và nghệ
thuật — đúng kiểu "nước chảy đá mòn".`,
  },

  {
    id: 'hoa-ky-tai-quan-loc-ham',
    sao: ['Hóa Kỵ'],
    cung: ['Quan Lộc'],
    trangThai: ['Hãm'],
    doUuTien: 75,
    tomTat: `Khi Hóa Kỵ **Hãm** địa tại Quan Lộc, đường công danh đương số
lên xuống thất thường, làm việc đơn độc và không được hỗ trợ tích cực.`,
  },

  // ============================================================
  // 10. Hóa Kỵ tại Nô Bộc
  // ============================================================
  {
    id: 'hoa-ky-tai-no-boc',
    title: 'Hóa Kỵ tại Nô Bộc',
    sao: ['Hóa Kỵ'],
    cung: ['Nô Bộc'],
    doUuTien: 72,
    tomTat: `Hóa Kỵ tại Nô Bộc khiến bạn bè đồng nghiệp với đương số rơi
vào cảnh "bằng mặt không bằng lòng", đương số bị nói xấu và oán hại.

Đương số hay vướng thị phi, kiện tụng, tranh chấp với bạn bè đồng nghiệp,
mang nhiều tai tiếng xấu. Cũng vì cái tôi quá lớn nên đương số khó liên
kết với người khác.`,
  },

  {
    id: 'hoa-ky-tai-no-boc-pha-quan-tang-mon',
    sao: ['Hóa Kỵ'],
    cung: ['Nô Bộc'],
    ketHop: ['Phá Quân', 'Tang Môn'],
    doUuTien: 70,
    tomTat: `Khi Hóa Kỵ tại Nô Bộc đi cùng Phá Quân hoặc Tang Môn, đương số
rơi vào cảnh "làm ơn mắc oán".`,
  },

  {
    id: 'hoa-ky-tai-no-boc-dao-hong-moc-duc',
    sao: ['Hóa Kỵ'],
    cung: ['Nô Bộc'],
    ketHop: ['Đào Hoa', 'Hồng Loan', 'Mộc Dục'],
    doUuTien: 70,
    tomTat: `Khi Hóa Kỵ tại Nô Bộc gặp Đào Hoa, Hồng Loan hoặc Mộc Dục,
đương số có nghiệp duyên với bạn khác giới — dễ bồ bịch, lăng nhăng, nhất
là khi đã có vợ chồng.`,
  },

  {
    id: 'hoa-ky-tai-no-boc-dac',
    sao: ['Hóa Kỵ'],
    cung: ['Nô Bộc'],
    trangThai: ['Đắc'],
    doUuTien: 70,
    tomTat: `Khi Hóa Kỵ **Đắc** địa tại Nô Bộc, đương số cẩn trọng chọn bạn,
tự chủ cao. Mối quan hệ bạn bè bền vững, đương số nhận được sự hỗ trợ âm
thầm.`,
  },

  {
    id: 'hoa-ky-tai-no-boc-ham-dia-kiep',
    sao: ['Hóa Kỵ'],
    cung: ['Nô Bộc'],
    trangThai: ['Hãm'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Khi Hóa Kỵ **Hãm** địa tại Nô Bộc đi cùng Địa Kiếp, đương số
gặp người xấu, tiểu nhân gây rối và tổn thương tình cảm.`,
  },

  // ============================================================
  // 11. Hóa Kỵ tại Thiên Di
  // ============================================================
  {
    id: 'hoa-ky-tai-thien-di',
    title: 'Hóa Kỵ tại Thiên Di',
    sao: ['Hóa Kỵ'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `Hóa Kỵ tại Thiên Di khiến đương số ra ngoài nhiều tai tiếng và
thị phi. Vì ích kỷ, chỉ nghĩ đến lợi ích bản thân nên đương số bị ghen ghét
và đàm tiếu.

Đương số hay rơi vào cảnh "làm phúc phải tội", dễ bị hiểu lầm qua lời nói,
làm gì cũng bị chỉ trích soi mói. Nơi đương số tới lui thường là chốn ồn
ào, lắm thị phi.`,
  },

  {
    id: 'hoa-ky-tai-thien-di-tue-hinh-ho-quan-phu',
    sao: ['Hóa Kỵ'],
    cung: ['Thiên Di'],
    ketHop: ['Thái Tuế', 'Thiên Hình', 'Bạch Hổ', 'Quan Phù'],
    doUuTien: 72,
    tomTat: `Khi Hóa Kỵ tại Thiên Di đi cùng Thái Tuế, Thiên Hình, Bạch Hổ
hoặc Quan Phù, đương số dính pháp luật và kiện tụng.`,
  },

  {
    id: 'hoa-ky-tai-thien-di-dac',
    sao: ['Hóa Kỵ'],
    cung: ['Thiên Di'],
    trangThai: ['Đắc'],
    doUuTien: 72,
    tomTat: `Khi Hóa Kỵ **Đắc** địa tại Thiên Di, đương số như "cá gặp nước"
khi ra ngoài — hòa nhập nhanh, biết tìm cơ hội tốt, thích hợp với công việc
và cuộc sống có tính di chuyển. Đương số xây được mạng lưới quan hệ bền
vững, nhận được sự giúp đỡ từ cả người xa lạ.`,
  },

  // ============================================================
  // 12. Hóa Kỵ tại Tật Ách
  // ============================================================
  {
    id: 'hoa-ky-tai-tat-ach',
    title: 'Hóa Kỵ tại Tật Ách',
    sao: ['Hóa Kỵ'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `Hóa Kỵ tại Tật Ách khiến đương số thường xuyên bệnh tật, gặp
tai nạn và khó khăn sinh nở; hay đau mắt, đau bụng, viêm đại tràng, khí
huyết kém và ngộ độc thức ăn.

Hóa Kỵ là âm tinh nên đi với sao biểu trưng cho bộ phận nào sẽ gây trục
trặc cho bộ phận đó. Vì hành Thủy, đương số cần cẩn thận chuyện sông nước,
máu huyết và bệnh tinh thần thần kinh.`,
  },

  {
    id: 'hoa-ky-tai-tat-ach-rieu-da-linh-hoa-am-duong-dong',
    sao: ['Hóa Kỵ'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Riêu', 'Đà La', 'Linh Tinh', 'Hỏa Tinh', 'Thái Âm', 'Thái Dương', 'Thiên Đồng'],
    doUuTien: 75,
    tomTat: `Khi Hóa Kỵ tại Tật Ách hội Thiên Riêu, Đà La, Linh Tinh, Hỏa
Tinh, Thái Âm, Thái Dương hoặc Thiên Đồng, đương số mắc bệnh tâm linh —
bị cơ hành, dở điên dở dại.`,
  },

  {
    id: 'hoa-ky-tai-tat-ach-am-duong',
    sao: ['Hóa Kỵ'],
    cung: ['Tật Ách'],
    ketHop: ['Thái Âm', 'Thái Dương'],
    doUuTien: 73,
    tomTat: `Khi Hóa Kỵ tại Tật Ách đi cùng Thái Âm hoặc Thái Dương, đương
số mắt kém, bị các tật khúc xạ và đau mắt.`,
  },

  {
    id: 'hoa-ky-tai-tat-ach-dac',
    sao: ['Hóa Kỵ'],
    cung: ['Tật Ách'],
    trangThai: ['Đắc'],
    doUuTien: 73,
    tomTat: `Khi Hóa Kỵ **Đắc** địa tại Tật Ách, đương số có sức đề kháng
tốt, khả năng tự chữa lành cao dù vẫn có những vấn đề sức khỏe tiềm ẩn.
Sinh hoạt nhìn chung điều độ.`,
  },

  // ============================================================
  // 13. Hóa Kỵ tại Tài Bạch
  // ============================================================
  {
    id: 'hoa-ky-tai-tai-bach',
    title: 'Hóa Kỵ tại Tài Bạch',
    sao: ['Hóa Kỵ'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `Hóa Kỵ tại Tài Bạch khiến đương số dễ hao tán tiền bạc. Đương
số đặt nặng vấn đề tiền bạc và lợi ích bản thân, dẫn tới tai tiếng, thị
phi và kiện tụng liên quan đến tiền bạc.

Mặt khác, đương số có thể kiếm tiền chính từ các tranh chấp, kiện tụng —
phù hợp với nghề thẩm phán, luật sư. Là ám tinh, Hóa Kỵ chỉ thấy lợi ích
ngắn hạn mà bỏ qua lợi ích lâu dài.`,
  },

  {
    id: 'hoa-ky-tai-tai-bach-phuc-binh',
    sao: ['Hóa Kỵ'],
    cung: ['Tài Bạch'],
    ketHop: ['Phục Binh'],
    doUuTien: 72,
    tomTat: `Khi Hóa Kỵ tại Tài Bạch đi cùng Phục Binh, đương số dễ bị trộm
cắp, cướp công cướp của.`,
  },

  {
    id: 'hoa-ky-tai-tai-bach-dac',
    sao: ['Hóa Kỵ'],
    cung: ['Tài Bạch'],
    trangThai: ['Đắc'],
    doUuTien: 72,
    tomTat: `Khi Hóa Kỵ **Đắc** địa tại Tài Bạch, đương số kiểm soát tài
chính tốt, thận trọng trong chi tiêu và tích lũy âm thầm không phô trương.`,
  },

  {
    id: 'hoa-ky-tai-tai-bach-ham-khong-kiep-kinh',
    sao: ['Hóa Kỵ'],
    cung: ['Tài Bạch'],
    trangThai: ['Hãm'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Kình Dương'],
    doUuTien: 70,
    tomTat: `Khi Hóa Kỵ **Hãm** địa tại Tài Bạch đi cùng Địa Không, Địa Kiếp
hoặc Kình Dương, đương số đối diện rủi ro pháp lý tài chính, lừa đảo và
thua lỗ lớn do thiếu minh bạch.`,
  },

  // ============================================================
  // 14. Hóa Kỵ tại Tử Tức
  // ============================================================
  {
    id: 'hoa-ky-tai-tu-tuc',
    title: 'Hóa Kỵ tại Tử Tức',
    sao: ['Hóa Kỵ'],
    cung: ['Tử Tức'],
    doUuTien: 72,
    tomTat: `Hóa Kỵ tại Tử Tức khiến cha mẹ và con cái xung khắc, không hòa
thuận, hay tranh giành thiệt hơn với nhau.`,
  },

  {
    id: 'hoa-ky-tai-tu-tuc-sat-bai-tinh',
    sao: ['Hóa Kỵ'],
    cung: ['Tử Tức'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Khi Hóa Kỵ tại Tử Tức đi cùng sát bại tinh (Kình Dương, Đà La,
Hỏa Tinh, Linh Tinh, Địa Không, Địa Kiếp), đương số ít con; con khó nuôi,
khó dạy; về già khó được con phụng dưỡng. Con cái dễ vướng thị phi, kiện
tụng, điều tiếng hoặc mắc bệnh thần kinh.`,
  },

  {
    id: 'hoa-ky-tai-tu-tuc-dac',
    sao: ['Hóa Kỵ'],
    cung: ['Tử Tức'],
    trangThai: ['Đắc'],
    doUuTien: 70,
    tomTat: `Khi Hóa Kỵ **Đắc** địa tại Tử Tức, đương số có trách nhiệm và
thận trọng trong việc chăm con, coi trọng phát triển hậu duệ — vun đắp âm
thầm cho con cái.`,
  },

  {
    id: 'hoa-ky-tai-tu-tuc-dac-phu-ta-huu-xuong',
    sao: ['Hóa Kỵ'],
    cung: ['Tử Tức'],
    trangThai: ['Đắc'],
    ketHop: ['Thiên Phủ', 'Tả Phù', 'Hữu Bật', 'Văn Xương'],
    doUuTien: 68,
    tomTat: `Khi Hóa Kỵ **Đắc** địa tại Tử Tức hội Thiên Phủ, Tả Phù, Hữu
Bật hoặc Văn Xương, con cái đương số giỏi giang, hiếu thảo và là niềm tự
hào của cha mẹ.`,
  },

  {
    id: 'hoa-ky-tai-tu-tuc-ham',
    sao: ['Hóa Kỵ'],
    cung: ['Tử Tức'],
    trangThai: ['Hãm'],
    doUuTien: 70,
    tomTat: `Khi Hóa Kỵ **Hãm** địa tại Tử Tức, đương số khó sinh hoặc khó
nuôi, con cái có vấn đề về sức khỏe hoặc tinh thần; quan hệ cha mẹ - con
cái xa cách, hiểu lầm kéo dài.`,
  },

  // ============================================================
  // 15. Hóa Kỵ tại Phu Thê
  // ============================================================
  {
    id: 'hoa-ky-tai-phu-the',
    title: 'Hóa Kỵ tại Phu Thê',
    sao: ['Hóa Kỵ'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `Hóa Kỵ tại Phu Thê khiến vợ chồng đương số cãi vã bất hòa
thường xuyên, hay ghen, nghi kỵ và soi xét nhau từng tí. Nhân duyên của
đương số bị giảm sút.`,
  },

  {
    id: 'hoa-ky-tai-phu-the-phuc-binh',
    sao: ['Hóa Kỵ'],
    cung: ['Phu Thê'],
    ketHop: ['Phục Binh'],
    doUuTien: 75,
    tomTat: `Khi Hóa Kỵ tại Phu Thê đi cùng Phục Binh, vợ chồng bất hòa, lúc
lấy nhau gặp cản trở, mưu hại lẫn nhau hoặc bị người ngoài chia rẽ.`,
  },

  {
    id: 'hoa-ky-tai-phu-the-dao-hong',
    sao: ['Hóa Kỵ'],
    cung: ['Phu Thê'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 75,
    tomTat: `Khi Hóa Kỵ tại Phu Thê gặp Đào Hoa hoặc Hồng Loan, hai vợ chồng
ngoại tình, lừa dối lẫn nhau.`,
  },

  {
    id: 'hoa-ky-tai-phu-the-thien-rieu',
    sao: ['Hóa Kỵ'],
    cung: ['Phu Thê'],
    ketHop: ['Thiên Riêu'],
    doUuTien: 75,
    tomTat: `Khi Hóa Kỵ tại Phu Thê gặp Thiên Riêu, vợ hoặc chồng đương số
ham chơi phóng đãng, dễ có người khác bên ngoài.`,
  },

  {
    id: 'hoa-ky-tai-phu-the-kiep-hinh-rieu',
    sao: ['Hóa Kỵ'],
    cung: ['Phu Thê'],
    ketHop: ['Địa Kiếp', 'Thiên Hình', 'Thiên Riêu'],
    doUuTien: 75,
    tomTat: `Khi Hóa Kỵ tại Phu Thê hội Địa Kiếp, Thiên Hình hoặc Thiên Riêu,
một trong hai vợ chồng có âm mưu hại người kia, thậm chí có ý định giết
người phối ngẫu.`,
  },

  {
    id: 'hoa-ky-tai-phu-the-dac',
    sao: ['Hóa Kỵ'],
    cung: ['Phu Thê'],
    trangThai: ['Đắc'],
    doUuTien: 75,
    tomTat: `Khi Hóa Kỵ **Đắc** địa tại Phu Thê, vợ chồng đương số kín đáo,
giữ khoảng cách tế nhị nhưng dung hòa nhường nhịn nhau. Mối quan hệ "nghĩa
nặng tình sâu", âm thầm bền vững theo năm tháng.`,
  },

  // ============================================================
  // 16. Hóa Kỵ tại Huynh Đệ
  // ============================================================
  {
    id: 'hoa-ky-tai-huynh-de',
    title: 'Hóa Kỵ tại Huynh Đệ',
    sao: ['Hóa Kỵ'],
    cung: ['Huynh Đệ'],
    doUuTien: 72,
    tomTat: `Hóa Kỵ tại Huynh Đệ khiến anh chị em đương số xung khắc, bất
hòa, tranh giành tài sản, khó ở chung và thậm chí kiện tụng lẫn nhau.

Theo lý âm dương nghịch lý, mệnh tạo của đương số tuổi nhỏ gặp nhiều tai
họa và tai tiếng.`,
  },

  {
    id: 'hoa-ky-tai-huynh-de-dac',
    sao: ['Hóa Kỵ'],
    cung: ['Huynh Đệ'],
    trangThai: ['Đắc'],
    doUuTien: 70,
    tomTat: `Khi Hóa Kỵ **Đắc** địa tại Huynh Đệ, anh chị em đương số hòa
thuận, sẵn sàng giúp đỡ nhau. Đương số bình tĩnh thận trọng, thường đứng
ra hòa giải tranh chấp trong nhà.`,
  },

  {
    id: 'hoa-ky-tai-huynh-de-ham',
    sao: ['Hóa Kỵ'],
    cung: ['Huynh Đệ'],
    trangThai: ['Hãm'],
    doUuTien: 70,
    tomTat: `Khi Hóa Kỵ **Hãm** địa tại Huynh Đệ, quan hệ anh em căng thẳng,
có thể gặp rắc rối pháp lý hoặc tài sản liên quan đến huyết thống. Đương số
mang cảm giác cô lập, thiếu hỗ trợ khi khó khăn hoạn nạn.`,
  },

  // ============================================================
  // 17. Hóa Kỵ vào hạn - 4 hung họa
  // ============================================================
  {
    id: 'hoa-ky-han',
    title: 'Hóa Kỵ vào hạn - 4 hung họa',
    sao: ['Hóa Kỵ'],
    doUuTien: 55,
    tomTat: `Khi hạn đến Hóa Kỵ, đương số phải đề phòng bốn hung họa lớn:

1. Oán thù mưu hại: rơi vào vòng thị phi, bị ghen tỵ ngấm ngầm mưu hại —
   cần giữ miệng, "uốn lưỡi 7 lần trước khi nói".
2. Ốm đau tai nạn: đặc biệt liên quan tới sông hồ, ao suối vì Hóa Kỵ thuộc
   Thủy. Đương số cần nghỉ ngơi, bồi bổ và thăm khám sớm.
3. Tình duyên trắc trở: đôi lứa nảy sinh hiểu lầm, xa cách — cần cảm thông,
   nhường nhịn và chia sẻ với nhau.
4. Cha mẹ mất sớm: một trong những nỗi đau lớn nhất, tựa như "cây mất gốc,
   sông mất nguồn".`,
  },

  // ============================================================
  // 18. Hóa giải Hóa Kỵ
  // ============================================================
  {
    id: 'hoa-ky-hoa-giai',
    title: 'Hóa Kỵ - Cách hóa giải',
    sao: ['Hóa Kỵ'],
    doUuTien: 40,
    tomTat: `Để hóa giải Hóa Kỵ, đương số cần lưu ý mấy điểm về giao tiếp:

- Tiết chế lời ăn tiếng nói, tránh các chủ đề nhạy cảm dễ gây tranh cãi
- Quan sát và tìm hiểu kỹ bản chất sự việc trước khi phản ứng
- Khiêm nhường, tránh "ăn miếng trả miếng" khi bị hiểu nhầm
- Có nguyên tắc giao tiếp rõ ràng để không rơi vào tình huống bất lợi

Quan trọng hơn cả, đương số nên hướng năng lượng vào học tập, nghiên cứu
và đào sâu chuyên môn. Hóa Kỵ trong môi trường học thuật, nghiên cứu giúp
đương số đào sâu vấn đề, tìm tới bản chất — biến những "khúc mắc" thành
"phát hiện".

Khi đó, Hóa Kỵ trở thành động lực rèn cho đương số:

- Sự kiên nhẫn
- Sự thận trọng
- Khả năng phân tích sâu sắc`,
  },
];
