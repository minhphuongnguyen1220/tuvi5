import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO HỶ THẦN - Hỏa, Thiện Tinh, vòng Lộc Tồn (vị trí 8)
 * "Thần Vui Vẻ" - đóng cung nào tốt cung đó
 * (Phần Song Hỷ - Hỷ Thần + Thiên Hỷ đã viết tại thien-hy.ts)
 */
export const luanGiai_HyThan: DoanLuanGiai[] = [
  {
    id: 'hy-than-tinh-chat-chung',
    title: 'Hỷ Thần - Đặc tính chung',
    sao: ['Hỷ Thần'],
    doUuTien: 30,
    tomTat: `**Hỷ Thần** là phụ tinh trong vòng Lộc Tồn (vị trí thứ 8), ngũ hành
Hỏa, hóa khí thành Thiện Tinh. Tên "Thần Vui Vẻ" nói lên đúng bản chất của
sao này: đóng ở cung nào, đương số được hưởng cát khí, vui vẻ và may mắn ở
cung đó.

Đặc tính chính của Hỷ Thần là đem may mắn, vui vẻ, tăng tài lộc, thuận lợi
trong cưới gả, sinh con, thi cử đỗ đạt. Nguyên tắc luận đoán cốt lõi: Hỷ
Thần đóng ở đâu thì ban sự lành và lợi cho cung đó.`,
  },

  {
    id: 'hy-than-tai-menh',
    title: 'Hỷ Thần tại Mệnh',
    sao: ['Hỷ Thần'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `Đương số có Hỷ Thần thủ Mệnh thường vui tính, lòng độ lượng và
bao dung. Cuộc đời hay gặp may mắn, thể hiện rõ qua ba phương diện: cưới
hỏi, đỗ đạt và tài lộc.

- Ảnh hưởng đối cung (Lực Sĩ chiếu) được tách thành luận giải riêng.`,
  },

  {
    id: 'hy-than-tai-menh-khong-kiep-ky',
    title: 'Hỷ Thần tại Mệnh + Không Kiếp + Hóa Kỵ - mụn nhọt búi trĩ',
    sao: ['Hỷ Thần'],
    cung: ['Mệnh'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Hóa Kỵ'],
    doUuTien: 73,
    tomTat: `Khi Hỷ Thần tại Mệnh gặp Địa Không, Địa Kiếp cùng Hóa Kỵ, đương
số dễ bị mụn nhọt và búi trĩ.`,
  },

  {
    id: 'hy-than-tai-menh-luc-si-thien-di',
    title: 'Hỷ Thần thủ Mệnh + Lực Sĩ ở Thiên Di - giúp người',
    sao: ['Hỷ Thần'],
    cung: ['Mệnh'],
    ketHop: ['Lực Sĩ'],
    doUuTien: 65,
    tomTat: `Hỷ Thần thủ Mệnh thì đối cung luôn có Lực Sĩ chiếu về — đây là
đặc trưng vị thế của sao này. Đương số ra ngoài tốt bụng, hay giúp đỡ người
khác, ít tính toán với người ngoài, nhờ tinh thần hào hiệp mà được nhiều
người yêu mến.`,
  },

  {
    id: 'hy-than-tai-menh-nam',
    title: 'Hỷ Thần tại Mệnh - tướng nam',
    sao: ['Hỷ Thần'],
    cung: ['Mệnh'],
    gioiTinh: 'Nam',
    doUuTien: 70,
    tomTat: `Nam mệnh có Hỷ Thần thủ Mệnh theo phú thường mang mắt sâu, lông
mày rậm — tướng quý. Phong thái vui tươi, độ lượng, đường đời nhiều may mắn
trong cưới hỏi, đỗ đạt và tài lộc.`,
  },

  {
    id: 'hy-than-tai-menh-nu',
    title: 'Hỷ Thần tại Mệnh - tướng nữ',
    sao: ['Hỷ Thần'],
    cung: ['Mệnh'],
    gioiTinh: 'Nữ',
    doUuTien: 70,
    tomTat: `Nữ mệnh có Hỷ Thần thủ Mệnh theo phú có dáng tươi tắn, thần thái
sáng ngời. Phong thái vui tươi, độ lượng, đường đời nhiều may mắn trong cưới
hỏi, đỗ đạt và tài lộc.`,
  },

  {
    id: 'hy-than-tai-phu-mau',
    title: 'Hỷ Thần tại Phụ Mẫu',
    sao: ['Hỷ Thần'],
    cung: ['Phụ Mẫu'],
    doUuTien: 72,
    tomTat: `Hỷ Thần cư Phụ Mẫu cho thấy cha mẹ đương số vui vẻ, hòa đồng và
được nhiều người quý mến. Cha mẹ hay chia sẻ, tâm sự mọi điều với con cái;
bầu không khí gia đình ấm áp, nhiều tiếng cười.`,
  },

  {
    id: 'hy-than-tai-phu-mau-xuong-khuc-quang-quy-khoi-viet',
    title: 'Hỷ Thần tại Phụ Mẫu + Xương Khúc / Quang Quý / Khôi Việt - tuổi thơ hạnh phúc',
    sao: ['Hỷ Thần'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Ân Quang', 'Thiên Quý', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 67,
    tomTat: `Khi Hỷ Thần tại Phụ Mẫu gặp Văn Xương, Văn Khúc, Ân Quang, Thiên
Quý, Thiên Khôi hoặc Thiên Việt, tuổi thơ đương số đủ đầy hạnh phúc, được
cha mẹ dạy dỗ và nâng đỡ chu đáo.`,
  },

  {
    id: 'hy-than-tai-phuc-duc',
    title: 'Hỷ Thần tại Phúc Đức',
    sao: ['Hỷ Thần'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `Hỷ Thần cư Phúc Đức cho thấy mọi người trong dòng họ vui vẻ,
thân thiện, quan tâm và quý mến nhau. Mồ mả tổ tiên đặc trưng ở bãi đất cát
hoặc đất nóng.

Đương số được tiếp thêm động lực từ suy nghĩ tích cực và tinh thần lạc quan,
nhờ đó dễ vượt qua thử thách trong cuộc sống.`,
  },

  {
    id: 'hy-than-tai-phuc-duc-thien-hy',
    title: 'Hỷ Thần tại Phúc Đức + Thiên Hỷ - mồ kết mả phát',
    sao: ['Hỷ Thần'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Hỷ'],
    doUuTien: 70,
    tomTat: `Khi Hỷ Thần tại Phúc Đức gặp Thiên Hỷ — bộ Song Hỷ — nhà đương
số dễ có mồ kết mả phát.`,
  },

  {
    id: 'hy-than-tai-dien-trach',
    title: 'Hỷ Thần tại Điền Trạch',
    sao: ['Hỷ Thần'],
    cung: ['Điền Trạch'],
    doUuTien: 72,
    tomTat: `Hỷ Thần cư Điền Trạch khiến xung quanh nhà đương số có nhiều nơi
vui chơi, giải trí. Đương số hay được may mắn về đất cát, dễ được người khác
cho và tặng tiền của. Đất ở đặc trưng là nơi đất nóng hoặc lẫn nhiều cát.`,
  },

  {
    id: 'hy-than-tai-dien-trach-tai-tinh',
    title: 'Hỷ Thần tại Điền Trạch + Tài tinh - kinh doanh giải trí',
    sao: ['Hỷ Thần'],
    cung: ['Điền Trạch'],
    ketHop: ['Vũ Khúc', 'Thiên Phủ', 'Lộc Tồn', 'Hóa Lộc'],
    doUuTien: 67,
    tomTat: `Khi Hỷ Thần tại Điền Trạch hội tụ Tài tinh (Vũ Khúc, Thiên Phủ,
Lộc Tồn, Hóa Lộc), đương số có thể mở kinh doanh tổ chức sự kiện, nhà hàng
hoặc quán hát.`,
  },

  {
    id: 'hy-than-tai-dien-trach-ky-da-linh-phuc-kiep',
    title: 'Hỷ Thần tại Điền Trạch + Kỵ / Đà / Linh / Phục / Kiếp - mâu thuẫn ngầm',
    sao: ['Hỷ Thần'],
    cung: ['Điền Trạch'],
    ketHop: ['Hóa Kỵ', 'Đà La', 'Linh Tinh', 'Phục Binh', 'Địa Kiếp'],
    doUuTien: 67,
    tomTat: `Khi Hỷ Thần tại Điền Trạch gặp Hóa Kỵ, Đà La, Linh Tinh, Phục
Binh hoặc Địa Kiếp, gia đình đương số bề ngoài xôm tụ nhưng bên trong bất
an, mâu thuẫn ngầm — đúng kiểu "bằng mặt không bằng lòng".`,
  },

  {
    id: 'hy-than-tai-quan-loc',
    title: 'Hỷ Thần tại Quan Lộc',
    sao: ['Hỷ Thần'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `Hỷ Thần cư Quan Lộc đem may mắn cho đương số trong công việc và
con đường công danh, dễ có tiếng tăm, nổi tiếng và được nhiều người hâm mộ.
Đương số phù hợp các nghề liên quan giải trí, tổ chức sự kiện, vui chơi và
nghệ thuật.

Nếu theo nghề bác sĩ, đương số đặc biệt hợp với chuyên khoa hậu môn trực
tràng.`,
  },

  {
    id: 'hy-than-tai-quan-loc-khoa-viet-thai-duong',
    title: 'Hỷ Thần tại Quan Lộc + Khoa / Việt / Thái Dương - thuận buồm xuôi gió',
    sao: ['Hỷ Thần'],
    cung: ['Quan Lộc'],
    ketHop: ['Hóa Khoa', 'Thiên Việt', 'Thái Dương'],
    doUuTien: 73,
    tomTat: `Khi Hỷ Thần tại Quan Lộc gặp Hóa Khoa, Thiên Việt hoặc Thái Dương
miếu vượng, sự nghiệp đương số "thuận buồm xuôi gió".`,
  },

  {
    id: 'hy-than-tai-no-boc',
    title: 'Hỷ Thần tại Nô Bộc',
    sao: ['Hỷ Thần'],
    cung: ['Nô Bộc'],
    doUuTien: 70,
    tomTat: `Hỷ Thần cư Nô Bộc đem lại cho đương số môi trường nhiều bạn bè,
nhiều người vui tính và tốt bụng, hay giúp đỡ lẫn nhau. Bạn bè phóng khoáng,
không toan tính, hay làm vui lòng nhau và rủ nhau đi chơi, hội tiệc.`,
  },

  {
    id: 'hy-than-tai-no-boc-dau-quan-ky-da-phuc',
    title: 'Hỷ Thần tại Nô Bộc + Đẩu Quân / Kỵ / Đà / Phục - bạn bè giả tạo',
    sao: ['Hỷ Thần'],
    cung: ['Nô Bộc'],
    ketHop: ['Đẩu Quân', 'Hóa Kỵ', 'Đà La', 'Phục Binh'],
    doUuTien: 65,
    tomTat: `Khi Hỷ Thần tại Nô Bộc gặp Đẩu Quân, Hóa Kỵ, Đà La hoặc Phục
Binh, đương số dễ gặp bạn bè giả tạo — bên ngoài cười nói nhưng đâm sau
lưng.`,
  },

  {
    id: 'hy-than-tai-thien-di',
    title: 'Hỷ Thần tại Thiên Di',
    sao: ['Hỷ Thần'],
    cung: ['Thiên Di'],
    doUuTien: 72,
    tomTat: `Hỷ Thần cư Thiên Di khiến đương số ra ngoài vui vẻ, hiền lành,
được nhiều người tin tưởng và gặp may mắn. Đi đâu cũng có người hâm mộ,
quý mến.`,
  },

  {
    id: 'hy-than-tai-thien-di-hong-dao',
    title: 'Hỷ Thần tại Thiên Di + Hồng Đào - nổi tiếng',
    sao: ['Hỷ Thần'],
    cung: ['Thiên Di'],
    ketHop: ['Hồng Loan', 'Đào Hoa'],
    doUuTien: 67,
    tomTat: `Khi Hỷ Thần tại Thiên Di gặp Hồng Loan cùng Đào Hoa, đương số ra
ngoài nổi tiếng, đi xa làm nên việc lớn.`,
  },

  {
    id: 'hy-than-tai-thien-di-linh-phuc-ky',
    title: 'Hỷ Thần tại Thiên Di + Linh / Phục / Kỵ - bị hiểu lầm giả tạo',
    sao: ['Hỷ Thần'],
    cung: ['Thiên Di'],
    ketHop: ['Linh Tinh', 'Phục Binh', 'Hóa Kỵ'],
    doUuTien: 67,
    tomTat: `Khi Hỷ Thần tại Thiên Di gặp Linh Tinh, Phục Binh hoặc Hóa Kỵ,
đương số dễ bị hiểu lầm là sống giả tạo.`,
  },

  {
    id: 'hy-than-tai-thien-di-tham-dao',
    title: 'Hỷ Thần tại Thiên Di + Tham / Đào - chốn phong lưu',
    sao: ['Hỷ Thần'],
    cung: ['Thiên Di'],
    ketHop: ['Tham Lang', 'Đào Hoa'],
    doUuTien: 67,
    tomTat: `Khi Hỷ Thần tại Thiên Di gặp Tham Lang hoặc Đào Hoa, đương số dễ
bị cuốn vào chốn phong lưu, sa đà vào những mối quan hệ phức tạp.`,
  },

  {
    id: 'hy-than-tai-tat-ach',
    title: 'Hỷ Thần tại Tật Ách',
    sao: ['Hỷ Thần'],
    cung: ['Tật Ách'],
    doUuTien: 72,
    tomTat: `Hỷ Thần cư Tật Ách khiến đương số dễ vì vui chơi, giải trí quá
đà mà mắc tai họa. Bù lại, khi mắc bệnh hay gặp tai họa, đương số thường
được may mắn có người cứu giúp kịp thời.`,
  },

  {
    id: 'hy-than-tai-tat-ach-kiep-dieu',
    title: 'Hỷ Thần tại Tật Ách + Địa Kiếp / Điếu Khách - bệnh trĩ',
    sao: ['Hỷ Thần'],
    cung: ['Tật Ách'],
    ketHop: ['Địa Kiếp', 'Điếu Khách'],
    doUuTien: 67,
    tomTat: `Khi Hỷ Thần tại Tật Ách gặp Địa Kiếp hoặc Điếu Khách, đương số dễ
có bệnh trĩ và ung nhọt.`,
  },

  {
    id: 'hy-than-tai-tat-ach-dao-rieu',
    title: 'Hỷ Thần tại Tật Ách + Đào / Riêu - mộng tinh',
    sao: ['Hỷ Thần'],
    cung: ['Tật Ách'],
    ketHop: ['Đào Hoa', 'Thiên Riêu'],
    doUuTien: 67,
    tomTat: `Khi Hỷ Thần tại Tật Ách gặp Đào Hoa hoặc Thiên Riêu, đương số dễ
mắc chứng mộng tinh.`,
  },

  {
    id: 'hy-than-tai-tat-ach-tham-dao',
    title: 'Hỷ Thần tại Tật Ách + Tham / Đào - bệnh chăn gối',
    sao: ['Hỷ Thần'],
    cung: ['Tật Ách'],
    ketHop: ['Tham Lang', 'Đào Hoa'],
    doUuTien: 67,
    tomTat: `Khi Hỷ Thần tại Tật Ách gặp Tham Lang hoặc Đào Hoa, đương số sinh
bệnh từ chuyện chăn gối.`,
  },

  {
    id: 'hy-than-tai-tai-bach',
    title: 'Hỷ Thần tại Tài Bạch',
    sao: ['Hỷ Thần'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `Hỷ Thần cư Tài Bạch đem may mắn về tiền bạc cho đương số: hay
được khen thưởng, trúng giải, được trao tặng tiền bạc bất ngờ. Tuy nhiên
đương số cũng hay chi tiêu nhiều cho hoạt động giải trí và vui chơi.

Bản chất "thần vui vẻ" là ngẫu hứng, khó đoán trước; vì vậy may mắn cũng
khó giữ lâu nếu đương số không biết "liệu cơm gắp mắm".`,
  },

  {
    id: 'hy-than-tai-tai-bach-khoi-viet-loc',
    title: 'Hỷ Thần tại Tài Bạch + Khôi Việt / Hóa Lộc - trúng số',
    sao: ['Hỷ Thần'],
    cung: ['Tài Bạch'],
    ketHop: ['Thiên Khôi', 'Thiên Việt', 'Hóa Lộc'],
    doUuTien: 70,
    tomTat: `Khi Hỷ Thần tại Tài Bạch gặp Thiên Khôi, Thiên Việt hoặc Hóa Lộc,
đương số dễ trúng số và được lộc bất ngờ.`,
  },

  {
    id: 'hy-than-tai-tu-tuc',
    title: 'Hỷ Thần tại Tử Tức',
    sao: ['Hỷ Thần'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Hỷ Thần cư Tử Tức cho thấy đường con cái của đương số nhiều may
mắn. Con cái thông minh, hòa đồng, vui vẻ và hiếu thảo với cha mẹ — là niềm
tự hào của cha mẹ.`,
  },

  {
    id: 'hy-than-tai-tu-tuc-sat-hinh-ky',
    title: 'Hỷ Thần tại Tử Tức + Sát Hình Kỵ - sinh nở thập tử',
    sao: ['Hỷ Thần'],
    cung: ['Tử Tức'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Thiên Hình', 'Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `Khi Hỷ Thần tại Tử Tức gặp các sát tinh (Kình Dương, Đà La, Hỏa
Tinh, Linh Tinh) cùng Thiên Hình và Hóa Kỵ, chuyện sinh nở của đương số dễ
trải qua "thập tử nhất sinh".`,
  },

  {
    id: 'hy-than-tai-phu-the',
    title: 'Hỷ Thần tại Phu Thê',
    sao: ['Hỷ Thần'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `Hỷ Thần cư Phu Thê đem lại may mắn trong hôn nhân cho đương số:
dễ gặp được người tương đầu ý hợp, thuận lợi kết hôn và sinh sống.

Sau khi kết hôn, đương số thường gặp may mắn từ chính người hôn phối đem
lại.`,
  },

  {
    id: 'hy-than-tai-phu-the-dao-hong',
    title: 'Hỷ Thần tại Phu Thê + Đào Hoa / Hồng Loan - xứng đôi vừa lứa',
    sao: ['Hỷ Thần'],
    cung: ['Phu Thê'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 73,
    tomTat: `Khi Hỷ Thần tại Phu Thê gặp Đào Hoa hoặc Hồng Loan, vợ chồng
đương số xứng đôi vừa lứa, vui vẻ hòa thuận.`,
  },

  {
    id: 'hy-than-tai-phu-the-xuong-khuc',
    title: 'Hỷ Thần tại Phu Thê + Xương Khúc - năng lượng tích cực',
    sao: ['Hỷ Thần'],
    cung: ['Phu Thê'],
    ketHop: ['Văn Xương', 'Văn Khúc'],
    doUuTien: 73,
    tomTat: `Khi Hỷ Thần tại Phu Thê gặp Văn Xương hoặc Văn Khúc, vợ chồng
đương số truyền cho nhau năng lượng tích cực.`,
  },

  {
    id: 'hy-than-tai-phu-the-vu-sat-dong-luong-sat-hinh-ky',
    title: 'Hỷ Thần tại Phu Thê + Vũ / Sát / Đồng Lương + Sát Hình Kỵ - niềm vui một mình',
    sao: ['Hỷ Thần'],
    cung: ['Phu Thê'],
    ketHop: ['Vũ Khúc', 'Thất Sát', 'Thiên Đồng', 'Thiên Lương', 'Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Thiên Hình', 'Hóa Kỵ'],
    doUuTien: 73,
    tomTat: `Khi Hỷ Thần tại Phu Thê đi cùng Vũ Khúc, Thất Sát, Thiên Đồng
hoặc Thiên Lương, lại bị sát tinh, Thiên Hình và Hóa Kỵ vây chiếu, vợ chồng
ít chia sẻ niềm vui với nhau — niềm vui biến thành "một mình" của riêng
mỗi người.`,
  },

  {
    id: 'hy-than-tai-huynh-de',
    title: 'Hỷ Thần tại Huynh Đệ',
    sao: ['Hỷ Thần'],
    cung: ['Huynh Đệ'],
    doUuTien: 70,
    tomTat: `Hỷ Thần cư Huynh Đệ cho thấy anh chị em của đương số vui tính,
tốt bụng, hay thích vui chơi và lạc thú.`,
  },

  {
    id: 'hy-than-tai-huynh-de-khoa-bang',
    title: 'Hỷ Thần tại Huynh Đệ + Sao khoa bảng - giúp nhau thăng tiến',
    sao: ['Hỷ Thần'],
    cung: ['Huynh Đệ'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Hóa Khoa', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 65,
    tomTat: `Khi Hỷ Thần tại Huynh Đệ gặp các sao chủ khoa bảng và danh tiếng
như Văn Xương, Văn Khúc, Hóa Khoa, Thiên Khôi, Thiên Việt, anh em đương số
khăng khít, có khả năng giúp nhau thăng tiến và đương số được "thơm lây".`,
  },

  {
    id: 'hy-than-tai-huynh-de-thien-rieu',
    title: 'Hỷ Thần tại Huynh Đệ + Thiên Riêu - chơi bời hoang phí',
    sao: ['Hỷ Thần'],
    cung: ['Huynh Đệ'],
    ketHop: ['Thiên Riêu'],
    doUuTien: 65,
    tomTat: `Khi Hỷ Thần tại Huynh Đệ gặp Thiên Riêu, anh chị em đương số có
thói chơi bời, phóng túng và hoang phí.`,
  },

  {
    id: 'hy-than-tai-huynh-de-dao-thai-phuc',
    title: 'Hỷ Thần tại Huynh Đệ + Đào + Thai + Phục - dâm ô',
    sao: ['Hỷ Thần'],
    cung: ['Huynh Đệ'],
    ketHop: ['Đào Hoa', 'Thai', 'Phục Binh'],
    doUuTien: 65,
    tomTat: `Khi Hỷ Thần tại Huynh Đệ gặp Đào Hoa, Thai cùng Phục Binh, anh
chị em đương số có thói dâm ô — trai hoang đãng, gái dễ theo trai bỏ nhà,
chửa hoang.`,
  },

  {
    id: 'hy-than-long-tri-phuong-cac',
    title: 'Hỷ Thần + Long Trì + Phượng Các',
    sao: ['Hỷ Thần'],
    ketHop: ['Long Trì', 'Phượng Các'],
    doUuTien: 65,
    tomTat: `Khi Hỷ Thần gặp Long Trì cùng Phượng Các, đương số có sự vui
mừng, báo hiệu may mắn về nhiều mặt: thi cử, công danh, hôn nhân và sinh
nở — đúng là điềm lành toàn diện.`,
  },

  {
    id: 'hy-than-long-tri-phuong-cac-xuong-khuc-khoa-khoi-viet',
    title: 'Hỷ Thần + Long Phượng + Xương Khúc + Khoa + Khôi Việt - sổ vàng',
    sao: ['Hỷ Thần'],
    ketHop: ['Long Trì', 'Phượng Các', 'Văn Xương', 'Văn Khúc', 'Hóa Khoa', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 60,
    tomTat: `Khi Hỷ Thần gặp đủ Long Trì, Phượng Các, Văn Xương, Văn Khúc, Hóa
Khoa, Thiên Khôi và Thiên Việt, cách "hổ mọc thêm cánh" — đương số đầu đội
sổ vàng, đạt thành tích cao trong học tập, thi tuyển hoặc đứng đầu trong
lĩnh vực theo đuổi.`,
  },

  {
    id: 'hy-than-dao-hong',
    title: 'Hỷ Thần + Đào Hoa / Hồng Loan',
    sao: ['Hỷ Thần'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 65,
    tomTat: `Khi Hỷ Thần gặp Đào Hoa hoặc Hồng Loan, đương số có sự may mắn
về tình duyên và tình ái, dễ cưới vợ gả chồng.

- Đặc biệt khi cách này xuất hiện ở đại hạn hoặc tiểu hạn, chuyện cưới hỏi
  gần như là chắc chắn.`,
  },

  {
    id: 'hy-than-dao-hong-tam-hoa',
    title: 'Hỷ Thần + Đào / Hồng + Tam Hóa - môn đăng hộ đối',
    sao: ['Hỷ Thần'],
    ketHop: ['Đào Hoa', 'Hồng Loan', 'Hóa Khoa', 'Hóa Lộc', 'Hóa Quyền'],
    doUuTien: 60,
    tomTat: `Khi Hỷ Thần đi cùng Đào Hoa, Hồng Loan và được Hóa Khoa, Hóa Lộc
hoặc Hóa Quyền nâng đỡ, việc cưới xin của đương số "thiên thời, địa lợi,
nhân hòa": gia đình hai bên vui vẻ, "môn đăng hộ đối", mái ấm trọn vẹn.`,
  },

  {
    id: 'hy-than-cat-tinh-xuc-tac',
    title: 'Hỷ Thần + Cát tinh - xúc tác',
    sao: ['Hỷ Thần'],
    doUuTien: 60,
    tomTat: `Khi Hỷ Thần đi cùng các sao tốt, sao này có vai trò làm lợi
thêm cho cát tinh — Hỷ Thần được xem như sao "xúc tác" giúp cát tinh phát
huy mạnh hơn.

`,
  },

  {
    id: 'hy-than-thien-ma',
    title: 'Hỷ Thần + Thiên Mã - đắc lợi vận hội',
    sao: ['Hỷ Thần'],
    ketHop: ['Thiên Mã'],
    doUuTien: 55,
    tomTat: `Khi Hỷ Thần gặp Thiên Mã, đương số đắc lợi về vận hội.`,
  },

  {
    id: 'hy-than-hoa-loc',
    title: 'Hỷ Thần + Hóa Lộc - đắc lợi tiền bạc',
    sao: ['Hỷ Thần'],
    ketHop: ['Hóa Lộc'],
    doUuTien: 55,
    tomTat: `Khi Hỷ Thần gặp Hóa Lộc, đương số đắc lợi về tiền bạc.`,
  },

  {
    id: 'hy-than-phong-cao-quoc-an',
    title: 'Hỷ Thần + Phong Cáo / Quốc Ấn - đắc lợi danh giá',
    sao: ['Hỷ Thần'],
    ketHop: ['Phong Cáo', 'Quốc Ấn'],
    doUuTien: 55,
    tomTat: `Khi Hỷ Thần gặp Phong Cáo hoặc Quốc Ấn, đương số đắc lợi về
danh giá.`,
  },

  {
    id: 'hy-than-vao-han',
    title: 'Hỷ Thần vào hạn',
    sao: ['Hỷ Thần'],
    doUuTien: 50,
    tomTat: `Khi hạn của đương số có Hỷ Thần, đó là dấu hiệu của hỷ sự và
may mắn.

- Cần xem các sao đi kèm để giải đoán may mắn rơi vào phương diện nào.`,
  },

  {
    id: 'hy-than-vao-han-dieu-khach',
    title: 'Hỷ Thần vào hạn + Điếu Khách - may mắn suy giảm',
    sao: ['Hỷ Thần'],
    ketHop: ['Điếu Khách'],
    doUuTien: 45,
    tomTat: `Khi hạn có Hỷ Thần đi cùng Điếu Khách, sự may mắn của đương số
suy giảm hoặc tiêu tán; niềm vui dễ đến từ những thú bê trễ, ăn chơi, cờ
bạc.`,
  },

  {
    id: 'hy-than-vao-han-hung-tinh',
    title: 'Hỷ Thần vào hạn + Hung tinh - niềm vui biến tướng',
    sao: ['Hỷ Thần'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 45,
    tomTat: `Khi hạn có Hỷ Thần đi cùng Lục Sát (Kình Dương, Đà La, Hỏa Tinh,
Linh Tinh, Địa Không, Địa Kiếp), niềm vui dễ biến tướng — từ tích cực thành
"tích cực độc hại":

- Đương số suy nghĩ tiêu cực, ân hận vì những quyết định hấp tấp
- Thất vọng khi sự việc đi lệch khỏi mong muốn
- "Dục tốc bất đạt" — vui mừng cũng cần giữ tâm tĩnh tại`,
  },
];
