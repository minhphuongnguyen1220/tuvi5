import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THAI PHỤ - Kim, Quý Tinh + Văn Tinh.
 *
 * CHỨA PHẦN CHUNG CỦA CẶP THAI PHỤ - PHONG CÁO (tag ['Thai Phụ', 'Phong Cáo']).
 *
 * QUY LUẬT VỊ TRÍ:
 * - Thai Phụ + Phong Cáo LUÔN nằm trong TAM HỢP của nhau
 * - Kẹp Văn Khúc ở giữa, mỗi sao cách 1 cung
 * - Cùng vị trí ĐỒNG ÂM, ĐỒNG DƯƠNG
 * - Văn Khúc KHÔNG bao giờ có Thai Phụ - Phong Cáo hội chiếu hoặc đồng cung
 * - Chỉ Văn Xương được hưởng vinh dự này (khi không có Văn Khúc trong tam hợp)
 * - Lý do (cụ Thiên Lương): Văn Xương được người sáng lập tử vi ƯU TIÊN hơn,
 * ở vị thế cao hơn Văn Khúc: khi không có Khúc phò tá thì Thai Phụ - Phong
 * Cáo phò trợ Xương thay
 *
 * BẢN CHẤT CẶP:
 * - Phụ tinh BỔ TRỢ về CÔNG DANH, HỌC HÀNH
 * - Chủ về BẰNG CẤP, KHEN THƯỞNG, HUÂN HUY CHƯƠNG
 * - Mang ý nghĩa THÀNH QUẢ, KẾT QUẢ của quá trình rèn luyện phấn đấu
 *
 * KHÁC NHAU GIỮA HAI SAO:
 * - Thai Phụ (Kim): GIẤY KHEN, BẰNG SẮC ĐƠN THUẦN
 * • Không cao về quyền lực hay tài chính
 * • Mang giá trị TINH THẦN — điềm đạm, nhẹ nhàng, cao thượng, khiêm tốn
 * - Phong Cáo (Thổ): KHEN THƯỞNG + THĂNG CHỨC + QUYỀN LỰC
 * • "PHONG" = phong danh, khen thưởng, thăng chức
 * • "CÁO" = cáo bố, tuyên bố toàn thiên hạ
 * • Giống Hóa Quyền nhẹ — uy lực bề ngoài, không mạnh bằng Quyền đắc địa
 *
 * Đặc tính/khác biệt CHỈ thể hiện rõ khi đóng tại MỆNH hoặc khi VÀO VẬN HẠN.
 * Còn lại chỉ mang ý nghĩa CHUNG: bằng sắc, khen thưởng, huy chương.
 */
export const luanGiai_ThaiPhu: DoanLuanGiai[] = [
  // ═══════════════════════════════════════════════════════════════════════
  // PHẦN CHUNG CỦA CẶP THAI PHỤ - PHONG CÁO
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thai-phu-phong-cao-tinh-chat-chung',
    title: 'Thai Phụ - Phong Cáo - Cặp Bằng Sắc Quý Hiển',
    sao: ['Thai Phụ', 'Phong Cáo'],
    doUuTien: 35,
    tomTat: `**Thai Phụ** (Kim) cùng **Phong Cáo** (Thổ) là cặp Quý Tinh kết
hợp Văn Tinh, chuyên về bằng sắc, ấn tín và quý hiển. Hai sao là phụ tinh bổ
trợ về công danh, học hành — chủ về bằng cấp, khen thưởng, huân huy chương,
mang ý nghĩa thành quả của một quá trình rèn luyện và phấn đấu.

Về quan hệ với Văn Tinh, hai sao là phụ tinh bổ trợ Văn Xương. Khi không có
**Văn Khúc** trong tam hợp, Thai Phụ - Phong Cáo phò trợ thay; bản thân Văn
Khúc không bao giờ có Thai Phụ - Phong Cáo hội chiếu hoặc đồng cung.

Phân biệt giữa hai sao:

- Thai Phụ là giấy khen, bằng cấp tinh thần — điềm đạm, khiêm tốn.
- Phong Cáo là thăng chức, quyền lực — kiêu hãnh, phô trương; tựa như Hóa
  Quyền nhẹ.`,
  },

  {
    id: 'thai-phu-phong-cao-quy-luat-vi-tri',
    title: 'Quy luật vị trí Thai Phụ - Phong Cáo (luôn tam hợp)',
    sao: ['Thai Phụ', 'Phong Cáo'],
    doUuTien: 32,
    tomTat: `Quy luật an sao của cặp Thai Phụ - Phong Cáo: hai sao luôn nằm
trong tam hợp của nhau, kẹp **Văn Khúc** ở giữa, mỗi sao cách một cung và
cùng vị trí đồng âm, đồng dương.

Theo cụ Thiên Lương, **Văn Xương** được người sáng lập tử vi ưu tiên hơn, ở
vị thế cao hơn Văn Khúc. Khi không có Văn Khúc phò tá trong tam hợp thì Thai
Phụ - Phong Cáo phò trợ thay (luôn nằm trong tam hợp với Văn Xương). Hệ quả
là Văn Khúc không bao giờ có Thai Phụ - Phong Cáo hội chiếu hoặc đồng cung;
chỉ Văn Xương mới được hưởng vinh dự này.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP CHUNG (CẶP THAI PHỤ - PHONG CÁO)
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thai-phu-phong-cao-quoc-an-tuong-quy-hien',
    title: 'Thai Phụ + Phong Cáo + Quốc Ấn - Quý hiển trọng dụng',
    sao: ['Thai Phụ', 'Phong Cáo'],
    ketHop: ['Quốc Ấn'],
    doUuTien: 70,
    tomTat: `Khi Thai Phụ, Phong Cáo gặp Quốc Ấn, kết quả rất đẹp. Khi đủ bộ
Tứ Vinh (Thai Phụ, Phong Cáo, Ân Quang, Quốc Ấn), đương số sớm có công danh —
trai hiển đạt, nữ lấy chồng làm lớn.

Xem các luận giải chuyên biệt cho từng cung Mệnh, Quan Lộc, Điền Trạch.`,
  },

  {
    id: 'thai-phu-phong-cao-quoc-an-tai-menh-quan-loc',
    title: 'Thai Phụ + Phong Cáo + Quốc Ấn tại Mệnh / Quan Lộc - Mang ấn quý hiển',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Mệnh', 'Quan Lộc'],
    ketHop: ['Quốc Ấn'],
    doUuTien: 75,
    tomTat: `Khi Thai Phụ, Phong Cáo gặp Quốc Ấn tại Mệnh hoặc Quan Lộc, đương
số nhiều quý hiển và được trọng dụng. Đây là cách "mang ấn", có quyền cao
chức trọng và phú quý.`,
  },

  {
    id: 'thai-phu-phong-cao-quoc-an-tai-dien-trach',
    title: 'Thai Phụ + Phong Cáo + Quốc Ấn tại Điền Trạch - Nhiều điền sản',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Điền Trạch'],
    ketHop: ['Quốc Ấn'],
    doUuTien: 70,
    tomTat: `Khi Thai Phụ, Phong Cáo gặp Quốc Ấn tại Điền Trạch, đương số có
nhiều điền sản, được ban cấp ruộng đất, nhà cao cửa rộng.`,
  },

  {
    id: 'thai-phu-phong-cao-an-khoi-xuong-thi-dau-bang',
    title: 'Thai Phụ + Phong Cáo + Quốc Ấn + Khôi Xương - Thi đỗ đầu bảng',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Mệnh'],
    ketHop: ['Quốc Ấn', 'Thiên Khôi', 'Văn Xương'],
    doUuTien: 75,
    tomTat: `Khi Thai Phụ - Phong Cáo ở Mệnh hội cùng Quốc Ấn, Thiên Khôi và
**Văn Xương**, đương số thi cử dễ đỗ đầu bảng. Khoa bảng hiển đạt, văn võ
song toàn — đây là cách quý nhất cho người đi thi cử, cầu danh.`,
  },

  {
    id: 'thai-phu-phong-cao-xuong-khoa-quyen-vinh-hien',
    title: 'Thai Phụ + Phong Cáo + Văn Xương + Hóa Khoa + Hóa Quyền - Vinh hiển tột đỉnh',
    sao: ['Thai Phụ', 'Phong Cáo'],
    ketHop: ['Văn Xương', 'Hóa Khoa', 'Hóa Quyền'],
    doUuTien: 70,
    tomTat: `Khi Thai Phụ, Phong Cáo gặp **Văn Xương**, **Hóa Khoa** cùng
**Hóa Quyền**, sự nghiệp đương số vinh hiển tột đỉnh — đỗ đạt cao nhất, quyền
cao chức trọng, học vấn thâm sâu. Đây là cách cộng hưởng cát tinh khoa bảng
với quyền uy và bằng sắc.`,
  },

  {
    id: 'thai-phu-phong-cao-nhat-nguyet-quy-cach',
    title: 'Thai Phụ + Phong Cáo + Nhật Nguyệt - Quý cách',
    sao: ['Thai Phụ', 'Phong Cáo'],
    ketHop: ['Thái Dương', 'Thái Âm'],
    doUuTien: 65,
    tomTat: `Khi Thai Phụ, Phong Cáo hội cùng Thái Dương và Thái Âm sáng,
hình thành quý cách: danh tiếng vang xa, bằng cấp đi cùng ánh sáng tỏa rộng.
Đây là cách hợp với người làm văn hóa, giáo dục, truyền thông cao cấp.`,
  },

  {
    id: 'thai-phu-phong-cao-loc-ton-an-quang-quy',
    title: 'Thai Phụ + Phong Cáo + Lộc Tồn + Quốc Ấn + Quang Quý - Tốt đẹp',
    sao: ['Thai Phụ', 'Phong Cáo'],
    ketHop: ['Lộc Tồn', 'Quốc Ấn', 'Ân Quang'],
    doUuTien: 60,
    tomTat: `Khi Thai Phụ, Phong Cáo gặp Lộc Tồn, Quốc Ấn cùng Ân Quang, càng
tốt đẹp — tài lộc, quyền uy, bằng sắc và phúc tinh hội tụ. Đi với Âm Dương
hay Quan Phúc cũng tốt; là cách cục cực đẹp cho mệnh quý.`,
  },

  {
    id: 'thai-phu-phong-cao-mo-thai-toa-tu-mo-mo-ma',
    title: 'Thai Phụ + Phong Cáo + Mộ + Thai + Bát Tọa tại Tứ Mộ - Mồ mả tốt đẹp',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Phúc Đức'],
    chi: ['Thìn', 'Tuất', 'Sửu', 'Mùi'],
    ketHop: ['Mộ', 'Thai', 'Bát Tọa'],
    doUuTien: 65,
    tomTat: `Khi Thai Phụ, Phong Cáo gặp Mộ, Thai cùng Bát Tọa tại Phúc Đức ở
Tứ Mộ, mồ mả tổ tiên đương số tốt đẹp, đắc lợi cho con cháu về sau. Phần âm
yên ổn, phần dương đắc lợi; con cháu hưởng phúc trạch lâu dài. Dòng tộc nhiều
người công thành danh toại, duy trì nếp sống hiếu học.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP XẤU
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thai-phu-phong-cao-hung-tinh-cong-danh-tran-tro',
    title: 'Thai Phụ + Phong Cáo + Hỏa Linh + Hóa Kỵ - Trắc trở công danh',
    sao: ['Thai Phụ', 'Phong Cáo'],
    ketHop: ['Hỏa Tinh', 'Linh Tinh', 'Hóa Kỵ'],
    doUuTien: 55,
    tomTat: `Khi Thai Phụ, Phong Cáo gặp Hỏa Tinh, Linh Tinh hoặc **Hóa Kỵ**,
công danh sự nghiệp đương số trắc trở. Học hành thi cử lận đận, công danh
"lên thác xuống ghềnh"; dẫu tài giỏi vẫn khó tránh bước trắc trở. Khi gặp sát
tinh, đương số dễ bị mang tiếng oan, gánh tai tiếng — danh thơm chưa kịp
hưởng đã gặp điều tiếng bủa vây, rủi ro rình rập trong cuộc sống.

Về cách hóa giải, vốn bản chất Thai Phụ thiện lành — "cây ngay không sợ chết
đứng" — nên không cần hóa giải cầu kỳ. Đương số cứ ăn ở đức độ, bao dung,
khiêm tốn, tích lũy phúc đức là sẽ biến hung thành cát.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // THAI PHỤ - PHONG CÁO TẠI 11 CUNG (CHUNG CẶP)
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thai-phu-phong-cao-tai-menh',
    title: 'Thai Phụ - Phong Cáo tại Mệnh',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Khi Thai Phụ - Phong Cáo thủ Mệnh, đương số là người có danh
chức, học hành tốt và đỗ đạt cao. Đường công danh thăng tiến; có bằng cấp,
huy chương, bằng khen — đặc biệt lợi cho việc thi cử và cầu danh.

Về tính nết khi Thai Phụ thủ Mệnh, đương số biết điều phải phép, nói năng mềm
mỏng, dễ được lòng người trên kẻ dưới.

Về phúc thọ, đương số thích giúp đời giúp người, bản tính nhân hậu, đi đâu
cũng được quý mến và kính trọng. Đương số hưởng tuổi thọ dài lâu, sống an yên
trong sự nể trọng của người đời.`,
  },

  {
    id: 'thai-phu-tai-menh-rieng',
    title: 'Thai Phụ tại Mệnh - Khoan dung hòa nhã (đặc tính RIÊNG)',
    sao: ['Thai Phụ'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `Đây là đặc tính riêng của Thai Phụ thủ Mệnh, khác với Phong Cáo.

Về tính nết, đương số là người khoan dung, hòa nhã với mọi người. Đương số
nhiều bằng cấp, bằng khen, hay có những hành động ý nghĩa nên được khen
thưởng và trao bằng.

Về quy luật cặp đôi: khi Thai Phụ ở Mệnh thì Phong Cáo sẽ ở Tài. Đương số hay
được khen thưởng, trao tặng tiền; có thể dùng bằng cấp, học vị để kiếm tiền.

So với Phong Cáo, Thai Phụ chỉ về giấy khen, bằng sắc đơn thuần — mang giá
trị tinh thần hơn vật chất, toát lên vẻ điềm đạm, nhẹ nhàng, cao thượng và
khiêm tốn.`,
  },

  {
    id: 'thai-phu-phong-cao-tai-phu-mau',
    title: 'Thai Phụ - Phong Cáo tại Phụ Mẫu',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Khi Thai Phụ - Phong Cáo tọa Phụ Mẫu, cha mẹ đương số có chức vị,
học thức, bằng cấp cao. Cha mẹ học thức uyên thâm, nhiều bằng cấp và giữ chức
vị trong xã hội; hay được khen thưởng, vinh danh, thăng cấp, có nhiều bằng
sắc và giấy công nhận.

Về truyền thống dòng họ, con cháu sinh ra thừa hưởng truyền thống hiếu học,
nghiêm cẩn, lấy con chữ làm đầu. Con cháu sau này nhiều bằng cấp, học vị cao;
học hành chăm chỉ, thi cử đỗ đạt và nối nghiệp làm rạng danh dòng họ.`,
  },

  {
    id: 'thai-phu-phong-cao-tai-phuc-duc',
    title: 'Thai Phụ - Phong Cáo tại Phúc Đức',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `Khi Thai Phụ - Phong Cáo tọa Phúc Đức, ông bà tổ tiên đương số có
danh chức, địa vị, đại thọ và vinh hiển. Đương số sinh ra trong dòng họ nhiều
người thành đạt, có truyền thống học tốt và nhiều người danh giá. Ông bà tổ
tiên khi xưa mất dễ được phong danh, để lại tước vị truyền tới con cháu đời
sau.

Cát cách đặc biệt: khi gặp thêm Mộ, Thai và Bát Tọa tại Tứ Mộ, mồ mả tốt
đẹp, con cháu hưởng phúc trạch lâu dài.`,
  },

  {
    id: 'thai-phu-phong-cao-tai-dien-trach',
    title: 'Thai Phụ - Phong Cáo tại Điền Trạch',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Khi Thai Phụ - Phong Cáo tọa Điền Trạch, đương số có điền sản,
hay được ban cấp, tặng điền sản; hay có của cải của tiền nhân để lại. Nhà
treo nhiều giấy khen, bằng khen, giải thưởng — như cách "ngồi mát ăn bát
vàng".`,
  },

  {
    id: 'thai-phu-phong-cao-tai-dien-trach-quoc-an',
    title: 'Thai Phụ - Phong Cáo + Quốc Ấn tại Điền Trạch - đấu thầu được đất',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Điền Trạch'],
    ketHop: ['Quốc Ấn'],
    doUuTien: 70,
    tomTat: `Khi Thai Phụ - Phong Cáo gặp Quốc Ấn tại Điền Trạch, đương số
được ban cấp điền sản ăn lộc, khẩn hoang. Nhà cửa, đất đai đấu thầu được.`,
  },

  {
    id: 'thai-phu-phong-cao-tai-dien-trach-tu-phu',
    title: 'Thai Phụ - Phong Cáo + Quốc Ấn + Tử Vi + Thiên Phủ tại Điền Trạch - giàu điền sản',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Điền Trạch'],
    ketHop: ['Quốc Ấn', 'Tử Vi', 'Thiên Phủ'],
    doUuTien: 72,
    tomTat: `Khi Thai Phụ - Phong Cáo gặp Quốc Ấn, Tử Vi, Thiên Phủ tại Điền
Trạch, đương số giàu có về điền sản, nhà cao cửa rộng và hay buôn đất buôn
cát được.`,
  },

  {
    id: 'thai-phu-phong-cao-tai-dien-trach-phuong-cac',
    title: 'Thai Phụ - Phong Cáo + Phượng Các tại Điền Trạch - nhà cao cửa rộng',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Điền Trạch'],
    ketHop: ['Phượng Các'],
    doUuTien: 70,
    tomTat: `Khi Thai Phụ - Phong Cáo gặp Phượng Các tại Điền Trạch, nhà cửa
đương số cao rộng, đẹp đẽ khang trang, treo nhiều bằng cấp.`,
  },

  {
    id: 'thai-phu-phong-cao-tai-dien-trach-long-phuong',
    title: 'Thai Phụ - Phong Cáo + Long Trì + Phượng Các tại Điền Trạch - an cư lạc nghiệp',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Điền Trạch'],
    ketHop: ['Long Trì', 'Phượng Các'],
    doUuTien: 70,
    tomTat: `Khi Thai Phụ - Phong Cáo gặp Long Trì cùng Phượng Các tại Điền
Trạch, đương số an cư lạc nghiệp từ sớm. Khu xóm xung quanh hầu hết là người
trí thức, giàu có, an ninh yên ổn.`,
  },

  {
    id: 'thai-phu-phong-cao-tai-quan-loc',
    title: 'Thai Phụ - Phong Cáo tại Quan Lộc',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Quan Lộc'],
    doUuTien: 80,
    tomTat: `Khi Thai Phụ - Phong Cáo tọa Quan Lộc, đương số rất quý hiển và
được trọng dụng, có huy chương, tưởng lục. Công danh hiển đạt, gặp nhiều may
mắn; đương số học lên cao, nhiều bằng cấp và sử dụng được vào công việc một
cách hiệu quả — như cách "cá gặp nước". Khi ra đời, đương số được cấp trên
trọng dụng và gặt hái nhiều thành tích.

Phân biệt vai trò hai sao tại Quan:

- Thai Phụ chủ về huân huy chương, khen thưởng, bằng khen.
- Phong Cáo chủ về thăng cấp, thăng quan tiến chức — kèm tính thích quyền uy
  ra oai, sử dụng chức vụ.`,
  },

  {
    id: 'thai-phu-phong-cao-tai-quan-loc-tuong-quoc-an',
    title: 'Thai Phụ - Phong Cáo + Thiên Tướng + Quốc Ấn tại Quan Lộc - quý hiển',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Tướng', 'Quốc Ấn'],
    doUuTien: 75,
    tomTat: `Khi Thai Phụ - Phong Cáo gặp Thiên Tướng cùng Quốc Ấn tại Quan
Lộc, đương số rất quý hiển, được trọng dụng và có huy chương, tưởng lục.`,
  },

  {
    id: 'thai-phu-phong-cao-tai-quan-loc-hoa-ky',
    title: 'Thai Phụ - Phong Cáo + Hóa Kỵ tại Quan Lộc - thi trượt',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Quan Lộc'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 75,
    tomTat: `Khi Thai Phụ - Phong Cáo gặp **Hóa Kỵ** tại Quan Lộc, đường công
danh trắc trở: đương số phải qua nhiều lần thi trượt mới đỗ đạt, hoặc danh
hiệu nhiều lần cố gắng mới có.`,
  },

  {
    id: 'thai-phu-phong-cao-tai-no-boc',
    title: 'Thai Phụ - Phong Cáo tại Nô Bộc',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Khi Thai Phụ - Phong Cáo tọa Nô Bộc, đương số có nhiều bạn bè
giúp đỡ — bạn bè là người học thức, nhiều bằng cấp, quý hiển; nhiều người có
chức tước trong xã hội. Đương số được vây quanh bởi bạn bè hiền lương, học
cao hiểu rộng, sống có nghĩa tình.

Khi Phong Cáo gặp Thiên Quan hoặc Thiên Phúc, đương số có quý nhân giúp đỡ
làm nên.

Khi gặp nhóm Sát Hình Kỵ cùng Linh Tinh, Kình Dương, Địa Kiếp, bạn bè dễ chối
bỏ trách nhiệm hoặc từ mặt nhau khi có mâu thuẫn.`,
  },

  {
    id: 'thai-phu-phong-cao-luong-tuong-tai-menh-thay-giao',
    title: 'Thai Phụ - Phong Cáo + Thiên Lương / Thiên Tướng tại Mệnh - Thầy giáo mát tay',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Mệnh'],
    ketHop: ['Thiên Lương', 'Thiên Tướng'],
    doUuTien: 70,
    tomTat: `Khi Thai Phụ - Phong Cáo hội chiếu cùng Thiên Lương hoặc Thiên
Tướng tại Mệnh, đương số dễ làm thầy giáo mát tay, có nhiều học trò hiển đạt
và xuất sắc.`,
  },

  {
    id: 'thai-phu-phong-cao-tai-thien-di',
    title: 'Thai Phụ - Phong Cáo tại Thiên Di',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `Khi Thai Phụ - Phong Cáo tọa Thiên Di, đương số ra ngoài gặp quý
nhân giúp đỡ, ra ngoài lợi ích hơn ở nhà. Đi xa thường gặp may mắn, thuận lợi
trong công danh và thi cử; được trao tặng nhiều bằng cấp, khen thưởng. Đương
số thuận lợi trong việc đi xa, đi học xa, du học.

Về du học và lập nghiệp xứ người, đây là cách cục "thiên thời - địa lợi -
nhân hòa": việc lớn dễ thành, việc nhỏ hanh thông; đương số có quý tinh soi
lối.`,
  },

  {
    id: 'thai-phu-phong-cao-tai-thien-di-khoi-viet-hoa-cai',
    title: 'Thai Phụ - Phong Cáo + Khôi Việt + Hoa Cái tại Thiên Di - người đời nâng đỡ',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Thiên Di'],
    ketHop: ['Thiên Khôi', 'Thiên Việt', 'Hoa Cái'],
    doUuTien: 70,
    tomTat: `Khi Thai Phụ - Phong Cáo gặp Thiên Khôi, Thiên Việt cùng Hoa Cái
tại Thiên Di, đương số được người đời nâng đỡ, dẫn dắt — càng tha hương nơi
đất khách càng dễ phát triển.`,
  },

  {
    id: 'thai-phu-phong-cao-tai-tat-ach',
    title: 'Thai Phụ - Phong Cáo tại Tật Ách',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `Khi Thai Phụ - Phong Cáo tọa Tật Ách, đương số dễ có bệnh về tì
vị hoặc bộ phận tiêu hóa, cơ địa mẫn cảm.

Về ngày chết, đương số dễ được nhận huân huy chương, khen thưởng, truy tặng.`,
  },

  {
    id: 'thai-phu-phong-cao-ta-huu-khoa-vinh-quang',
    title: 'Thai Phụ - Phong Cáo + Tả Hữu + Hóa Khoa - Lúc mất nhận huân chương',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Tật Ách'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Hóa Khoa'],
    doUuTien: 68,
    tomTat: `Khi Thai Phụ - Phong Cáo tại Tật Ách được **Tả Phù**, Hữu Bật
hoặc **Hóa Khoa** hội chiếu (từ các cung tam hợp xung chiếu), lúc mất đương
số dễ nhận huân huy chương, khen thưởng, truy tặng. Ra đi vinh quang, được
người đời tôn vinh.`,
  },

  {
    id: 'thai-phu-phong-cao-tai-tai-bach',
    title: 'Thai Phụ - Phong Cáo tại Tài Bạch',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `Khi Thai Phụ - Phong Cáo tọa Tài Bạch, đương số kiếm tiền bằng
học vấn. Bản thân dễ có bằng cấp, học vị về ngành nghề liên quan tài chính và
có thể sử dụng chính bằng cấp ấy để kiếm tiền. Đương số hay được khen thưởng,
đoạt giải, trao tặng tiền; tiền tài đến từ lao động trí óc nhiều hơn sức vóc
chân tay.

Về cộng hưởng tam hợp tài quan, đương số có khả năng lãnh đạo, vươn tới nhiều
thành công rực rỡ nhờ học thức uyên thâm và bằng cấp chuyên nghiệp. Trí tuệ
sắc sảo, được giao trọng trách lớn, năng lực quản lý tài chính hiệu quả.`,
  },

  {
    id: 'thai-phu-phong-cao-tai-tu-tuc',
    title: 'Thai Phụ - Phong Cáo tại Tử Tức',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Tử Tức'],
    doUuTien: 78,
    tomTat: `Khi Thai Phụ - Phong Cáo tọa Tử Tức, con cái đương số hiển đạt,
có con quý tử. Con cái nhiều bằng cấp, học vị, có thể học lên cao và đạt
nhiều thành tích, chức danh trong cuộc đời. Đây là kiểu "con nhà nòi", có tư
chất thông minh, sáng dạ từ bé. Bằng khen, trao thưởng treo kín nhà; càng
siêng học, càng dễ có thành tích.`,
  },

  {
    id: 'thai-phu-phong-cao-tai-tu-tuc-thien-quang',
    title: 'Thai Phụ - Phong Cáo + Thiên Quang tại Tử Tức - con hiển đạt đỉnh cao',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Tử Tức'],
    ketHop: ['Thiên Quang'],
    doUuTien: 73,
    tomTat: `Khi Thai Phụ - Phong Cáo gặp Thiên Quang tại Tử Tức, con cái
đương số hiển đạt đỉnh cao.`,
  },

  {
    id: 'thai-phu-phong-cao-tai-tu-tuc-thien-quy',
    title: 'Thai Phụ - Phong Cáo + Thiên Quý tại Tử Tức - con hiển đạt đỉnh cao',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Tử Tức'],
    ketHop: ['Thiên Quý'],
    doUuTien: 73,
    tomTat: `Khi Thai Phụ - Phong Cáo gặp Thiên Quý tại Tử Tức, con cái đương
số hiển đạt đỉnh cao.`,
  },

  {
    id: 'thai-phu-phong-cao-tai-tu-tuc-quoc-an',
    title: 'Thai Phụ - Phong Cáo + Quốc Ấn tại Tử Tức - con hiển đạt đỉnh cao',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Tử Tức'],
    ketHop: ['Quốc Ấn'],
    doUuTien: 73,
    tomTat: `Khi Thai Phụ - Phong Cáo gặp Quốc Ấn tại Tử Tức, con cái đương
số hiển đạt đỉnh cao.`,
  },

  {
    id: 'thai-phu-phong-cao-tai-tu-tuc-thien-tuong',
    title: 'Thai Phụ - Phong Cáo + Thiên Tướng tại Tử Tức - con hiển đạt đỉnh cao',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Tử Tức'],
    ketHop: ['Thiên Tướng'],
    doUuTien: 73,
    tomTat: `Khi Thai Phụ - Phong Cáo gặp Thiên Tướng tại Tử Tức, con cái
đương số hiển đạt đỉnh cao.`,
  },

  {
    id: 'thai-phu-phong-cao-tai-tu-tuc-hoa-tinh',
    title: 'Thai Phụ - Phong Cáo + Hỏa Tinh tại Tử Tức - con xa cách',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Tử Tức'],
    ketHop: ['Hỏa Tinh'],
    doUuTien: 73,
    tomTat: `Khi Thai Phụ - Phong Cáo gặp Hỏa Tinh tại Tử Tức, con thường ít
gắn bó, xa cách với cha mẹ. Cha mẹ ít được con chăm sóc — quan niệm xưa gọi
là cách "bất hiếu", nói theo cách hiện đại là mối quan hệ thiếu hòa thuận.`,
  },

  {
    id: 'thai-phu-phong-cao-tai-tu-tuc-linh-tinh',
    title: 'Thai Phụ - Phong Cáo + Linh Tinh tại Tử Tức - con xa cách',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Tử Tức'],
    ketHop: ['Linh Tinh'],
    doUuTien: 73,
    tomTat: `Khi Thai Phụ - Phong Cáo gặp Linh Tinh tại Tử Tức, con thường ít
gắn bó, xa cách với cha mẹ. Cha mẹ ít được con chăm sóc — quan niệm xưa gọi
là cách "bất hiếu", nói theo cách hiện đại là mối quan hệ thiếu hòa thuận.`,
  },

  {
    id: 'thai-phu-phong-cao-tai-phu-the',
    title: 'Thai Phụ - Phong Cáo tại Phu Thê',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `Khi Thai Phụ - Phong Cáo tọa Phu Thê, vợ chồng đương số là người
có học thức, dễ học cao, nhiều bằng cấp và chức tước. Người hôn phối thuận
lợi trên đường công danh, khoa bảng, có nhiều thành tựu trong cuộc đời. Hôn
nhân xứng lứa vừa đôi; vợ chồng thuận hòa, giữ trọn đạo nghĩa.`,
  },

  {
    id: 'thai-phu-phong-cao-tai-phu-the-thien-khoi',
    title: 'Thai Phụ - Phong Cáo + Thiên Khôi tại Phu Thê - hôn phối học vị cao',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Phu Thê'],
    ketHop: ['Thiên Khôi'],
    doUuTien: 73,
    tomTat: `Khi Thai Phụ - Phong Cáo gặp Thiên Khôi tại Phu Thê, người hôn
phối có học vị cao, trí thức uyên bác, hỗ trợ đắc lực cho đường công danh
của đương số.`,
  },

  {
    id: 'thai-phu-phong-cao-tai-phu-the-thien-viet',
    title: 'Thai Phụ - Phong Cáo + Thiên Việt tại Phu Thê - hôn phối học vị cao',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Phu Thê'],
    ketHop: ['Thiên Việt'],
    doUuTien: 73,
    tomTat: `Khi Thai Phụ - Phong Cáo gặp Thiên Việt tại Phu Thê, người hôn
phối có học vị cao, trí thức uyên bác, hỗ trợ đắc lực cho đường công danh
của đương số.`,
  },

  {
    id: 'thai-phu-phong-cao-tai-phu-the-ta-phu',
    title: 'Thai Phụ - Phong Cáo + Tả Phù tại Phu Thê - hôn phối học vị cao',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Phu Thê'],
    ketHop: ['Tả Phù'],
    doUuTien: 73,
    tomTat: `Khi Thai Phụ - Phong Cáo gặp **Tả Phù** tại Phu Thê, người hôn
phối có học vị cao, trí thức uyên bác, hỗ trợ đắc lực cho đường công danh
của đương số.`,
  },

  {
    id: 'thai-phu-phong-cao-tai-phu-the-huu-bat',
    title: 'Thai Phụ - Phong Cáo + Hữu Bật tại Phu Thê - hôn phối học vị cao',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Phu Thê'],
    ketHop: ['Hữu Bật'],
    doUuTien: 73,
    tomTat: `Khi Thai Phụ - Phong Cáo gặp Hữu Bật tại Phu Thê, người hôn phối
có học vị cao, trí thức uyên bác, hỗ trợ đắc lực cho đường công danh của
đương số.`,
  },

  {
    id: 'thai-phu-phong-cao-tai-phu-the-dao-hoa-sat',
    title: 'Thai Phụ - Phong Cáo + Đào Hoa + Sát tinh tại Phu Thê - một lòng hai dạ',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Phu Thê'],
    ketHop: ['Đào Hoa', 'Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Khi Thai Phụ - Phong Cáo gặp Đào Hoa cùng Lục Sát tại Phu Thê,
một trong hai vợ chồng dễ có suy nghĩ ngoài luồng — cách "một lòng hai dạ",
thiếu sự thủy chung.`,
  },

  {
    id: 'thai-phu-phong-cao-tai-huynh-de',
    title: 'Thai Phụ - Phong Cáo tại Huynh Đệ',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Khi Thai Phụ - Phong Cáo tọa Huynh Đệ, anh chị em đương số đều
là người có học vấn, học cao, nhiều bằng cấp, nhiều thành tựu — như câu "anh
em như thể tay chân". Học vị đáng nể, anh chị em đảm nhiệm các vị trí lãnh
đạo, quản lý cấp cao.

Trường hợp không có cát tinh phù trợ, dù có nhận được sự trợ giúp nhưng không
đáng kể; dễ vì vị trí khác biệt mà mối quan hệ có nhiều khoảng cách.`,
  },

  {
    id: 'thai-phu-phong-cao-tai-huynh-de-ta-phu',
    title: 'Thai Phụ - Phong Cáo + Tả Phù tại Huynh Đệ - anh chị giúp đỡ chuyên môn',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Huynh Đệ'],
    ketHop: ['Tả Phù'],
    doUuTien: 70,
    tomTat: `Khi Thai Phụ - Phong Cáo gặp **Tả Phù** tại Huynh Đệ, đương số
nhận được sự giúp đỡ từ hình ảnh, bằng cấp, địa vị của anh chị trong lĩnh vực
chuyên môn.`,
  },

  {
    id: 'thai-phu-phong-cao-tai-huynh-de-huu-bat',
    title: 'Thai Phụ - Phong Cáo + Hữu Bật tại Huynh Đệ - anh chị giúp đỡ chuyên môn',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Huynh Đệ'],
    ketHop: ['Hữu Bật'],
    doUuTien: 70,
    tomTat: `Khi Thai Phụ - Phong Cáo gặp Hữu Bật tại Huynh Đệ, đương số nhận
được sự giúp đỡ từ hình ảnh, bằng cấp, địa vị của anh chị trong lĩnh vực
chuyên môn.`,
  },

  {
    id: 'thai-phu-phong-cao-tai-huynh-de-thien-khoi',
    title: 'Thai Phụ - Phong Cáo + Thiên Khôi tại Huynh Đệ - anh chị giúp đỡ chuyên môn',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Huynh Đệ'],
    ketHop: ['Thiên Khôi'],
    doUuTien: 70,
    tomTat: `Khi Thai Phụ - Phong Cáo gặp Thiên Khôi tại Huynh Đệ, đương số
nhận được sự giúp đỡ từ hình ảnh, bằng cấp, địa vị của anh chị trong lĩnh vực
chuyên môn.`,
  },

  {
    id: 'thai-phu-phong-cao-tai-huynh-de-thien-viet',
    title: 'Thai Phụ - Phong Cáo + Thiên Việt tại Huynh Đệ - anh chị giúp đỡ chuyên môn',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Huynh Đệ'],
    ketHop: ['Thiên Việt'],
    doUuTien: 70,
    tomTat: `Khi Thai Phụ - Phong Cáo gặp Thiên Việt tại Huynh Đệ, đương số
nhận được sự giúp đỡ từ hình ảnh, bằng cấp, địa vị của anh chị trong lĩnh vực
chuyên môn.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // VÀO HẠN
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thai-phu-phong-cao-vao-han',
    title: 'Thai Phụ - Phong Cáo vào hạn',
    sao: ['Thai Phụ', 'Phong Cáo'],
    doUuTien: 50,
    tomTat: `Khi Thai Phụ - Phong Cáo vào hạn, đương số đắc tài và đắc danh —
được tiếng khen, có huy chương; thuận lợi trong công danh, thi cử. Như cách
"gặp thời đổi vận", đương số được đề danh bảng vàng, thuận lợi trong thi cử
và đỗ đạt, hoặc thăng tiến mạnh mẽ trong công danh sự nghiệp.

Khi đại vận hoặc tiểu vận gặp sao này, đó là báo hiệu giai đoạn hoàng kim.
Đương số cần nắm bắt thời cơ, trau dồi kiến thức, rèn luyện kỹ năng và mở
rộng mối quan hệ xã hội.`,
  },

  {
    id: 'thai-phu-phong-cao-vao-han-long-tri',
    title: 'Thai Phụ - Phong Cáo + Long Trì vào hạn - thăng quan tiến chức',
    sao: ['Thai Phụ', 'Phong Cáo'],
    ketHop: ['Long Trì'],
    doUuTien: 45,
    tomTat: `Khi Thai Phụ - Phong Cáo gặp Long Trì vào hạn, đương số sẽ được
thăng quan, tiến chức.`,
  },
];
