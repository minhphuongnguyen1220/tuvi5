import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THIÊN TƯỚNG
 */
export const luanGiai_ThienTuong: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung của sao Thiên Tướng
  // ============================================================
  {
    id: 'thien-tuong-tinh-chat-chung',
    title: 'Thiên Tướng - Đặc tính chung',
    sao: ['Thiên Tướng'],
    doUuTien: 30,
    tomTat: `**Thiên Tướng** thuộc Nhâm Thủy, Nam Đẩu Tinh, hóa khí là Ấn (quan
ấn). Ý nghĩa cốt lõi của sao là "tương trợ" — mang địa vị tể tướng hoặc quân
sư. Khi cát, Thiên Tướng chủ về việc giúp người; khi hung, lại nghiêng về sự
trống rỗng.

Vị trí miếu hãm:

- Miếu địa
  - Dần, Thân — đương số có quyền uy, trí tuệ và sự tín nhiệm
- Vượng địa
  - Thìn, Tuất, Tý, Ngọ — thông minh, gan dạ, tầm nhìn xa
- Đắc địa
  - Sửu, Mùi, Tỵ, Hợi — thẳng thắn, trung thực, dũng cảm
- Hãm địa
  - Mão, Dậu — bướng bỉnh, liều lĩnh, thiếu kiềm chế`,

    chiTiet: `Bản chất "tương trợ" của Thiên Tướng tương đương địa vị tể tướng
hoặc quân sư. Nghĩa vụ duy nhất của Ấn là trung thành với chủ nhân, vì chủ
nhân tham mưu mưu sự — chủ thiện thì giúp chủ làm thiện, chủ ác thì giúp chủ
làm ác.

Đối cung và giáp cung của Thiên Tướng cố định: đối cung luôn là Phá Quân; hai
sao giáp cung luôn là Cự Môn và Thiên Lương.

Khi Phá Quân Hóa Lộc hoặc Hóa Quyền, ảnh hưởng tới Thiên Tướng rất lớn. Khi
sao Hình hoặc Kỵ giáp cung, gia nghiệp của đương số dễ trôi dạt; nên rời quê
hương tìm đường phát triển.

Quan hệ với ba chính tinh:

- Tử Vi — đồng cung tại Thìn / Tuất
- Liêm Trinh — đồng cung tại Tý / Ngọ
- Vũ Khúc — đồng cung tại Dần / Thân

Thiên Tướng có quan hệ rất lớn với ba sao trên. Ngoài các vị trí đồng cung,
Thiên Tướng đơn thủ tại Sửu, Mùi, Tỵ, Hợi, Mão, Dậu.`,
  },

  // ============================================================
  // 2. Quy tắc đoán Thiên Tướng - xem GIÁP CUNG trước
  // ============================================================
  {
    id: 'thien-tuong-nguyen-tac-giap-cung',
    title: 'Thiên Tướng - Nguyên tắc đoán: xem GIÁP CUNG trước',
    sao: ['Thiên Tướng'],
    doUuTien: 35,
    tomTat: `Khi luận Tử Vi, thông thường xem tam phương tứ chính trước rồi mới
đến giáp cung. Riêng với **Thiên Tướng** thì ngược lại — phải xem giáp cung
trước, sau đó mới xét tới tam phương.

Lý do: Thiên Tướng dễ bị hoàn cảnh chi phối, gặp cát thành cát, gặp thiện thì
thiện. Tác động của giáp cung lên Thiên Tướng rất lớn.`,

    chiTiet: `Bản chất Thiên Tướng là Ấn (quan ấn) — phò tá chứ không độc lập.
Khi luận giải, hai sao kề bên định hình môi trường gần nhất, nên giáp cung tác
động trực tiếp lên Ấn.

Hai cách giáp cung quan trọng:

**Tài Ấm giáp Ấn** — cát cách. Khi Hóa Lộc và Thiên Lương giáp cung Mệnh có
Thiên Tướng tọa thủ, Tài (Hóa Lộc) cùng Ấm (Thiên Lương) đồng thời phù trì,
chủ về phú quý vinh hoa, hưởng thụ vui vẻ.

**Hình Kỵ giáp Ấn** — hung cách. Khi Hóa Kỵ và Kình Dương giáp cung Mệnh có
Thiên Tướng Hãm địa, Hình (Kình Dương) cùng Kỵ (Hóa Kỵ) bóp nghẹt Ấn, chủ về
gặp tai họa lao ngục, kèm theo hình khắc thương tổn.

Một số cát hung khác từ giáp cung:

- Khi Liêm Trinh hoặc Vũ Khúc Hóa Kỵ đồng độ hoặc vây chiếu Thiên Tướng, tính
  chất Thiên Tướng biến xấu, đương số chỉ hợp với nghề chuyên môn để mưu sinh.
- Khi Tử Vi Hóa Khoa đồng độ, Thiên Lương Hóa Quyền giáp một bên và Cự Môn
  Hóa Lộc giáp bên còn lại, dù có Kình Dương đồng độ, cách cục vẫn thanh danh
  hiển hách.`,
  },

  // ============================================================
  // 3. Cách Tài Ấm giáp Ấn (Mệnh)
  // ============================================================
  {
    id: 'thien-tuong-tai-am-giap-an',
    title: 'Cách "Tài Ấm giáp Ấn" - Thiên Tướng cư Mệnh',
    sao: ['Thiên Tướng'],
    cung: ['Mệnh'],
    ketHop: ['Tài Ấm giáp Ấn'],
    doUuTien: 92,
    tomTat: `**Tài Ấm giáp Ấn** là cát cách lớn của Thiên Tướng. Khi Thiên Tướng
cư cung Mệnh (hoặc cung an thân-phận) và có Hóa Lộc cùng Thiên Lương giáp hai
bên, đương số được hưởng phú quý vinh hoa, đời sống vui vẻ sung túc.

Tên gọi cách phản ánh thành phần: Tài là Hóa Lộc, Ấm là Thiên Lương — cả hai
đồng thời phù trì cho Ấn (chính là Thiên Tướng).`,
  },

  // ============================================================
  // 4. Cách Hình Kỵ giáp Ấn (Mệnh)
  // ============================================================
  {
    id: 'thien-tuong-hinh-ky-giap-an',
    title: 'Cách "Hình Kỵ giáp Ấn" - Thiên Tướng cư Mệnh',
    sao: ['Thiên Tướng'],
    cung: ['Mệnh'],
    ketHop: ['Hình Kỵ giáp Ấn'],
    doUuTien: 92,
    tomTat: `**Hình Kỵ giáp Ấn** là hung cách lớn của Thiên Tướng. Khi Thiên
Tướng Hãm tại cung Mệnh (hoặc cung an thân-phận) và có Hóa Kỵ cùng Kình Dương
giáp hai bên, đương số dễ gặp tai họa lao ngục, kèm theo hình khắc thương tổn.

Tên gọi cách phản ánh thành phần: Hình là Kình Dương, Kỵ là Hóa Kỵ — cả hai
đồng thời bóp nghẹt Ấn (Thiên Tướng).`,
  },

  // ============================================================
  // 5. Thiên Tướng tại Mệnh - tính cách chung
  // ============================================================
  {
    id: 'thien-tuong-tai-menh-tinh-cach',
    title: 'Thiên Tướng tại Mệnh - Tính cách (chung)',
    sao: ['Thiên Tướng'],
    cung: ['Mệnh'],
    doUuTien: 75,
    tomTat: `Đương số có Thiên Tướng cư Mệnh thường thông minh, nhân hậu, sống
có trách nhiệm; giỏi giao tiếp và có khả năng lãnh đạo.`,
  },

  {
    id: 'thien-tuong-tai-menh-mieu-vuong-dac-tinh-cach',
    title: 'Thiên Tướng Miếu/Vượng/Đắc tại Mệnh - tính cách',
    sao: ['Thiên Tướng'],
    cung: ['Mệnh'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 85,
    tomTat: `Khi Thiên Tướng ở Miếu, Vượng hoặc Đắc địa tại Mệnh, đương số tính
chính trực, có năng lực lãnh đạo, đối nhân xử thế khéo léo nên được tin tưởng
và quý trọng. Tính tình hòa đồng dễ gần, nhân hậu và hay giúp đỡ người khác.`,
  },

  {
    id: 'thien-tuong-tai-menh-ham-tinh-cach',
    title: 'Thiên Tướng Hãm tại Mệnh - tính cách',
    sao: ['Thiên Tướng'],
    cung: ['Mệnh'],
    chi: ['Mão', 'Dậu'],
    trangThai: ['Hãm'],
    doUuTien: 88,
    tomTat: `Khi Thiên Tướng Hãm địa tại Mệnh (Mão, Dậu), đương số bảo thủ,
thiếu linh hoạt, khó thích nghi với môi trường mới. Tính dễ dao động, thiếu
quyết đoán; thích chỉ huy nhưng nông nổi và khó kiềm chế cảm xúc.`,
  },

  // ============================================================
  // 6. Thiên Tướng tại Mệnh - công danh sự nghiệp
  // ============================================================
  {
    id: 'thien-tuong-tai-menh-su-nghiep-mieu-vuong-dac',
    title: 'Thiên Tướng Miếu/Vượng/Đắc tại Mệnh - sự nghiệp',
    sao: ['Thiên Tướng'],
    cung: ['Mệnh'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 80,
    tomTat: `Khi Thiên Tướng ở Miếu, Vượng hoặc Đắc địa tại Mệnh, công danh của
đương số vững chắc, dễ thăng tiến và có khả năng đạt vị trí cao trong xã hội.
Khả năng lãnh đạo tốt nên đương số phù hợp với các lĩnh vực quản lý, điều
hành, quân đội, chính trị hay kinh doanh.`,
  },

  {
    id: 'thien-tuong-tai-menh-su-nghiep-ham',
    title: 'Thiên Tướng Hãm tại Mệnh - sự nghiệp',
    sao: ['Thiên Tướng'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `Khi Thiên Tướng Hãm địa tại Mệnh, sự nghiệp của đương số thăng
trầm, khó ổn định và dễ bị tiểu nhân hãm hại. Chức vị thường thấp, công danh
lận đận, suốt đời chẳng mấy khi xứng ý toại lòng.`,
  },

  // ============================================================
  // 7. Thiên Tướng tại Mệnh - phúc thọ tai họa
  // ============================================================
  {
    id: 'thien-tuong-tai-menh-phuc-tho-mieu-vuong-dac',
    title: 'Thiên Tướng Miếu/Vượng/Đắc tại Mệnh - phúc thọ',
    sao: ['Thiên Tướng'],
    cung: ['Mệnh'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 80,
    tomTat: `Khi Thiên Tướng ở Miếu, Vượng hoặc Đắc địa tại Mệnh, đương số phúc
thọ dồi dào, sức khỏe tốt và ít bệnh, có số trường thọ. Cuộc đời thường gặp
quý nhân giúp đỡ, lúc nguy nan đều hóa lành.`,
  },

  {
    id: 'thien-tuong-tai-menh-phuc-tho-ham',
    title: 'Thiên Tướng Hãm tại Mệnh - phúc thọ',
    sao: ['Thiên Tướng'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `Khi Thiên Tướng Hãm địa tại Mệnh, đương số dễ gặp tai họa bất ngờ,
có thể vướng thị phi, kiện tụng và bị tiểu nhân hãm hại. Sức khỏe kém, dễ mắc
bệnh mãn tính; cần đặc biệt chú ý hệ tiêu hóa và huyết áp.`,
  },

  // ============================================================
  // 8. Bộ sao TỐT của Thiên Tướng
  // ============================================================
  {
    id: 'thien-tuong-bo-sao-tot',
    title: 'Thiên Tướng - Bộ sao TỐT (đặc tính chung)',
    sao: ['Thiên Tướng'],
    doUuTien: 50,
    tomTat: `Khi Thiên Tướng kết hợp với các bộ sao tốt, đương số được uy quyền,
dũng cảm, công danh hiển đạt — đặc biệt rõ rệt khi hội tụ với Tử Phủ Vũ, Quốc
Ấn cùng Phong Cáo, Thiên Mã, Thiên Y, Hồng Loan, Liêm Trinh đi cùng Tả Hữu,
hoặc Khoa Quyền tại Ngọ. Mỗi tổ hợp cụ thể được xét trong các luận giải riêng.`,
  },

  {
    id: 'thien-tuong-bo-sao-tot-tu-phu-vu',
    title: 'Thiên Tướng + Tử Vi / Thiên Phủ / Vũ Khúc',
    sao: ['Thiên Tướng'],
    ketHop: ['Tử Vi', 'Thiên Phủ', 'Vũ Khúc'],
    doUuTien: 45,
    tomTat: `Khi Thiên Tướng đi cùng Tử Vi, Thiên Phủ hoặc Vũ Khúc, đương số
mang uy quyền, dũng cảm, công danh hiển đạt.`,
  },

  {
    id: 'thien-tuong-bo-sao-tot-quoc-an-phong-cao',
    title: 'Thiên Tướng + Quốc Ấn / Phong Cáo',
    sao: ['Thiên Tướng'],
    ketHop: ['Quốc Ấn', 'Phong Cáo'],
    doUuTien: 45,
    tomTat: `Khi Thiên Tướng gặp Quốc Ấn hoặc Phong Cáo, đương số có công danh
địa vị cao; nếu theo nghiệp quân đội thì dễ lập công lớn.`,
  },

  {
    id: 'thien-tuong-bo-sao-tot-thien-ma',
    title: 'Thiên Tướng + Thiên Mã',
    sao: ['Thiên Tướng'],
    ketHop: ['Thiên Mã'],
    doUuTien: 45,
    tomTat: `Khi Thiên Tướng đi cùng Thiên Mã, đương số là người tài giỏi và
can đảm.`,
  },

  {
    id: 'thien-tuong-bo-sao-tot-thien-y',
    title: 'Thiên Tướng + Thiên Y',
    sao: ['Thiên Tướng'],
    ketHop: ['Thiên Y'],
    doUuTien: 45,
    tomTat: `Khi Thiên Tướng đi cùng Thiên Y, đương số có thể trở thành bác sĩ.
Có thêm Tả Phù, Hữu Bật, Thiên Quan hoặc Thiên Phúc thì đương số là thầy thuốc
giỏi, mát tay.`,
  },

  {
    id: 'thien-tuong-bo-sao-tot-hong-loan-nam',
    title: 'Nam - Thiên Tướng + Hồng Loan',
    sao: ['Thiên Tướng'],
    ketHop: ['Hồng Loan'],
    gioiTinh: 'Nam',
    doUuTien: 50,
    tomTat: `Nam mệnh có Thiên Tướng đi cùng Hồng Loan thì lấy được vợ giàu
sang đảm đang.`,
  },

  {
    id: 'thien-tuong-bo-sao-tot-hong-loan-nu',
    title: 'Nữ - Thiên Tướng + Hồng Loan',
    sao: ['Thiên Tướng'],
    ketHop: ['Hồng Loan'],
    gioiTinh: 'Nữ',
    doUuTien: 50,
    tomTat: `Nữ mệnh có Thiên Tướng đi cùng Hồng Loan thì lấy được chồng tài
năng phú quý; bản thân đương số đẹp mà đoan chính, lấy chồng sang.`,
  },

  {
    id: 'thien-tuong-bo-sao-tot-liem-tru-phu-bat',
    title: 'Thiên Tướng + Liêm Trinh + Tả Phù / Hữu Bật',
    sao: ['Thiên Tướng'],
    ketHop: ['Liêm Trinh', 'Tả Phù', 'Hữu Bật'],
    doUuTien: 45,
    tomTat: `Khi Thiên Tướng đi cùng Liêm Trinh và có thêm Tả Phù hoặc Hữu Bật,
đương số là thầy thuốc giỏi.`,
  },

  {
    id: 'thien-tuong-bo-sao-tot-khoa-hinh-quyen-ngo',
    title: 'Thiên Tướng + Khoa + Hình + Quyền tại Ngọ',
    sao: ['Thiên Tướng'],
    chi: ['Ngọ'],
    ketHop: ['Hóa Khoa', 'Thiên Hình', 'Hóa Quyền'],
    doUuTien: 45,
    tomTat: `Khi Thiên Tướng tại Ngọ hội tụ với Hóa Khoa, Thiên Hình và Hóa
Quyền, đương số lẫy lừng về nghiệp võ.`,
  },

  // ============================================================
  // 9. Bộ sao XẤU của Thiên Tướng
  // ============================================================
  {
    id: 'thien-tuong-bo-sao-xau',
    title: 'Thiên Tướng - Bộ sao XẤU (đặc tính chung)',
    sao: ['Thiên Tướng'],
    doUuTien: 50,
    tomTat: `Thiên Tướng kỵ Hỏa Tinh và Linh Tinh xung phá — chủ về tàn tật.
Nếu bị Hỏa Tham xung phá, tính hoạnh phát hoạnh phá càng mạnh thêm.`,
  },

  {
    id: 'thien-tuong-bo-sao-xau-kinh-duong',
    title: 'Thiên Tướng + Kình Dương',
    sao: ['Thiên Tướng'],
    ketHop: ['Kình Dương'],
    doUuTien: 45,
    tomTat: `Khi Thiên Tướng gặp Kình Dương, đương số dễ gặp tai họa hoặc nguy
hiểm bất ngờ.`,
  },

  {
    id: 'thien-tuong-bo-sao-xau-liem-trinh-thien-hinh',
    title: 'Thiên Tướng + Liêm Trinh + Thiên Hình',
    sao: ['Thiên Tướng'],
    ketHop: ['Liêm Trinh', 'Thiên Hình'],
    doUuTien: 45,
    tomTat: `Khi Thiên Tướng đi cùng Liêm Trinh và Thiên Hình, đương số dễ dính
líu pháp luật, vướng tù tội.`,
  },

  {
    id: 'thien-tuong-bo-sao-xau-moc-duc-hoa-cai-dao-hoa',
    title: 'Thiên Tướng + Mộc Dục / Hoa Cái / Đào Hoa',
    sao: ['Thiên Tướng'],
    ketHop: ['Mộc Dục', 'Hoa Cái', 'Đào Hoa'],
    doUuTien: 45,
    tomTat: `Khi Thiên Tướng đi cùng Mộc Dục, Hoa Cái hoặc Đào Hoa, đương số có
nhan sắc nhưng chăng hoa, ham mê sắc dục, cử chỉ không đứng đắn.`,
  },

  {
    id: 'thien-tuong-bo-sao-xau-hoa-cai-dao-hoa',
    title: 'Thiên Tướng + Hoa Cái + Đào Hoa',
    sao: ['Thiên Tướng'],
    ketHop: ['Hoa Cái', 'Đào Hoa'],
    doUuTien: 45,
    tomTat: `Khi Thiên Tướng đi cùng Hoa Cái và Đào Hoa, nữ mệnh đẹp nhưng lẳng.`,
  },

  // ============================================================
  // 10. Tử Tướng tại Thìn / Tuất
  // ============================================================
  {
    id: 'thien-tuong-menh-thin-tuat-tu-tuong',
    title: 'Tử Tướng cư Mệnh tại Thìn / Tuất',
    sao: ['Thiên Tướng', 'Tử Vi'],
    cung: ['Mệnh'],
    chi: ['Thìn', 'Tuất'],
    ketHop: ['Tử Tướng', 'Tử Vi Thiên Tướng đồng cung'],
    doUuTien: 92,
    tomTat: `Khi Tử Vi và Thiên Tướng đồng cung tại Thìn hoặc Tuất, ta có cách
**Tử Tướng** — Vua và Ấn cùng cung, kết hợp uy quyền với phò tá. Đương số có
địa vị cao và năng lực lãnh đạo mạnh mẽ.

Nếu Tử Vi Hóa Khoa đồng độ, có thêm Thiên Lương Hóa Quyền giáp một bên và Cự
Môn Hóa Lộc giáp bên còn lại, dù Kình Dương cùng cung, cách cục vẫn thanh
danh hiển hách.`,
  },

  // ============================================================
  // 11. Liêm Tướng tại Tý / Ngọ
  // ============================================================
  {
    id: 'thien-tuong-menh-ty-ngo-liem-tuong',
    title: 'Liêm Tướng cư Mệnh tại Tý / Ngọ',
    sao: ['Thiên Tướng', 'Liêm Trinh'],
    cung: ['Mệnh'],
    chi: ['Tý', 'Ngọ'],
    ketHop: ['Liêm Tướng', 'Liêm Trinh Thiên Tướng đồng cung'],
    doUuTien: 90,
    tomTat: `Khi Liêm Trinh và Thiên Tướng đồng cung tại Tý hoặc Ngọ, ta có cách
**Liêm Tướng**. Đương số có nét chính trực của Thiên Tướng kết hợp với nét mạnh
mẽ, sắc bén của Liêm Trinh nên phù hợp với những công việc cần kỷ luật và
quyết đoán.

Khi Liêm Trinh Hóa Kỵ đồng độ, tính chất Thiên Tướng biến xấu, đương số chỉ
hợp với nghề chuyên môn để mưu sinh.`,
  },

  // ============================================================
  // 12. Vũ Tướng tại Dần / Thân
  // ============================================================
  {
    id: 'thien-tuong-menh-dan-than-vu-tuong',
    title: 'Vũ Tướng cư Mệnh tại Dần / Thân',
    sao: ['Thiên Tướng', 'Vũ Khúc'],
    cung: ['Mệnh'],
    chi: ['Dần', 'Thân'],
    ketHop: ['Vũ Tướng', 'Vũ Khúc Thiên Tướng đồng cung'],
    doUuTien: 90,
    tomTat: `Khi Vũ Khúc và Thiên Tướng đồng cung tại Dần hoặc Thân, ta có cách
**Vũ Tướng**. Thiên Tướng tại Dần / Thân là **Miếu địa**, mang đến cho đương
số quyền uy, trí tuệ và sự tín nhiệm; kết hợp với Vũ Khúc (sao tài và võ),
đương số có sức mạnh thực thi đi kèm tài lộc.

Khi Vũ Khúc Hóa Kỵ đồng độ, tính chất Thiên Tướng biến xấu, đương số chỉ hợp
với nghề chuyên môn để mưu sinh.`,
  },

  // ============================================================
  // 13. Cách Tử Phủ Vũ Tướng Liêm
  // ============================================================
  {
    id: 'thien-tuong-tu-phu-vu-tuong-liem',
    title: 'Cách Tử Phủ Vũ Tướng Liêm',
    sao: ['Thiên Tướng', 'Tử Vi', 'Thiên Phủ', 'Vũ Khúc', 'Liêm Trinh'],
    cung: ['Mệnh'],
    ketHop: ['Tử Phủ Vũ Tướng Liêm'],
    doUuTien: 90,
    tomTat: `Cách **Tử Phủ Vũ Tướng Liêm** là sự hội chiếu của năm chính tinh:
Tử Vi, Thiên Phủ, Vũ Khúc, Thiên Tướng và Liêm Trinh.

Đương số sở hữu cách này có khả năng lãnh đạo tốt, tầm nhìn xa trông rộng, tài
năng cao và phẩm chất chính trực. Cuộc đời dễ gây dựng được sự nghiệp lớn hoặc
giữ địa vị cao trong xã hội.`,
  },

  // ============================================================
  // 14. Cách Phủ Tướng triều viên
  // ============================================================
  {
    id: 'thien-tuong-phu-tuong-trieu-vien',
    title: 'Cách Phủ Tướng triều viên',
    sao: ['Thiên Tướng', 'Thiên Phủ'],
    cung: ['Mệnh'],
    ketHop: ['Phủ Tướng triều viên'],
    doUuTien: 88,
    tomTat: `Cách **Phủ Tướng triều viên** thành hình khi Thiên Phủ (hoặc Thiên
Tướng) tọa Mệnh, còn Thiên Tướng (hoặc Thiên Phủ) hội chiếu từ tam phương tứ
chính, đồng thời không bị sát tinh xung phá.

Đương số sở hữu cách này được phú quý, hưởng lộc dồi dào, được nhiều người nể
trọng; mối quan hệ xã hội tốt và thường có quý nhân phù trợ. Tuy vậy, đương số
cần thận trọng trong tình cảm và hôn nhân vì đường này dễ gặp nhiều chuyện
không tốt.`,
  },

  // ============================================================
  // 15. Thiên Tướng ở Phụ Mẫu
  // ============================================================
  {
    id: 'thien-tuong-tai-phu-mau',
    title: 'Thiên Tướng tại Phụ Mẫu (đặc tính chung)',
    sao: ['Thiên Tướng'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng cư Phụ Mẫu, cha mẹ của đương số thường là người
đôn hậu, làm việc có quy củ; có thể là công chức hoặc người có danh vị. Đương
số được cha mẹ che chở, tuổi nhỏ an lành.`,

    chiTiet: `Thiên Tướng tại Phụ Mẫu chủ về cha mẹ là người đôn hậu, làm việc
có quy củ; có thể là công chức hoặc người có danh vị. Đương số dễ được cha mẹ
che chở, phò tá; tuổi nhỏ an lành.`,
  },

  {
    id: 'thien-tuong-tai-phu-mau-mieu-vuong-dac',
    title: 'Thiên Tướng Miếu/Vượng/Đắc tại Phụ Mẫu',
    sao: ['Thiên Tướng'],
    cung: ['Phụ Mẫu'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng ở Miếu, Vượng hoặc Đắc địa tại Phụ Mẫu, cha mẹ của
đương số có chức quyền và địa vị, được nhiều người kính trọng. Gia đình có
truyền thống tốt, có thể thuộc dòng dõi danh giá vọng tộc.`,
  },

  {
    id: 'thien-tuong-tai-phu-mau-ham',
    title: 'Thiên Tướng Hãm tại Phụ Mẫu',
    sao: ['Thiên Tướng'],
    cung: ['Phụ Mẫu'],
    trangThai: ['Hãm'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng Hãm địa tại Phụ Mẫu, quan hệ cha mẹ - con cái không
tốt, có thể xảy ra mâu thuẫn hoặc cách biệt tư tưởng. Cha mẹ cũng hay gặp khó
khăn trong cuộc sống.`,
  },

  {
    id: 'thien-tuong-tai-phu-mau-luc-sat',
    title: 'Thiên Tướng + Địa Không / Địa Kiếp / Kình Đà / Hỏa Linh tại Phụ Mẫu',
    sao: ['Thiên Tướng'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng tại Phụ Mẫu gặp Địa Không, Địa Kiếp, Kình Dương,
Đà La, Hỏa Tinh hay Linh Tinh, cha mẹ của đương số có thể gặp tai nạn hoặc
bệnh tật.`,
  },

  {
    id: 'thien-tuong-tai-phu-mau-vu-ky-hinh',
    title: 'Thiên Tướng + Vũ Khúc + Hóa Kỵ + Thiên Hình tại Phụ Mẫu',
    sao: ['Thiên Tướng'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Vũ Khúc', 'Hóa Kỵ', 'Thiên Hình'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng tại Phụ Mẫu hội tụ với Vũ Khúc, Hóa Kỵ và Thiên
Hình, đương số khắc cha mẹ; cha mẹ dễ mắc bệnh kéo dài.`,
  },

  {
    id: 'thien-tuong-tai-phu-mau-liem-trinh',
    title: 'Thiên Tướng + Liêm Trinh tại Phụ Mẫu',
    sao: ['Thiên Tướng'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Liêm Trinh'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng đi cùng Liêm Trinh tại Phụ Mẫu, tình cảm cha mẹ
không tốt, có thể dẫn tới ly hôn.`,
  },

  {
    id: 'thien-tuong-tai-phu-mau-liem-trinh-hinh-ky',
    title: 'Thiên Tướng + Liêm Trinh + Thiên Hình hoặc Hóa Kỵ tại Phụ Mẫu',
    sao: ['Thiên Tướng'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Liêm Trinh', 'Thiên Hình', 'Hóa Kỵ'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng tại Phụ Mẫu đi cùng Liêm Trinh và có thêm Thiên
Hình hoặc Hóa Kỵ, đương số ít nhận được sự quan tâm từ cha mẹ; có thể đi làm
con nuôi hoặc sống xa cha mẹ.`,
  },

  {
    id: 'thien-tuong-tai-phu-mau-cat-tinh',
    title: 'Thiên Tướng + Tả Hữu / Xương Khúc / Khôi Việt / Giải Thần / Thiên Đức tại Phụ Mẫu',
    sao: ['Thiên Tướng'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt', 'Giải Thần', 'Thiên Đức'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng tại Phụ Mẫu hội với Tả Phù, Hữu Bật, Văn Xương, Văn
Khúc, Thiên Khôi, Thiên Việt, Giải Thần hay Thiên Đức, dù có khó khăn đương
số vẫn được cha mẹ trợ giúp vượt qua.`,
  },

  {
    id: 'thien-tuong-tai-phu-mau-vu-khuc',
    title: 'Thiên Tướng + Vũ Khúc tại Phụ Mẫu',
    sao: ['Thiên Tướng'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Vũ Khúc'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng đi cùng Vũ Khúc tại Phụ Mẫu, cha mẹ của đương số
có uy quyền và nhiều của cải.`,
  },

  // ============================================================
  // 16. Thiên Tướng ở Phúc Đức
  // ============================================================
  {
    id: 'thien-tuong-tai-phuc-duc',
    title: 'Thiên Tướng tại Phúc Đức (đặc tính chung)',
    sao: ['Thiên Tướng'],
    cung: ['Phúc Đức'],
    doUuTien: 72,
    tomTat: `Khi Thiên Tướng cư Phúc Đức, dòng họ của đương số có căn nền đạo
đức, có người làm trong chính quyền hoặc giữ chức vụ hành chính. Phúc đức khá
tốt, đương số hay gặp quý nhân và ít khi sa cơ.`,
  },

  {
    id: 'thien-tuong-tai-phuc-duc-mieu-vuong-dac',
    title: 'Thiên Tướng Miếu/Vượng/Đắc tại Phúc Đức',
    sao: ['Thiên Tướng'],
    cung: ['Phúc Đức'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng ở Miếu, Vượng hoặc Đắc địa tại Phúc Đức, đương số
có phúc lớn, đời sống tinh thần phong phú và ít muộn phiền; có thể thừa hưởng
tài sản từ ông cha.`,
  },

  {
    id: 'thien-tuong-tai-phuc-duc-ham',
    title: 'Thiên Tướng Hãm tại Phúc Đức',
    sao: ['Thiên Tướng'],
    cung: ['Phúc Đức'],
    trangThai: ['Hãm'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng Hãm địa tại Phúc Đức, đương số phúc đức kém, đời
sống tinh thần phiền muộn; gia đình hôn nhân không yên và có nhiều cản trở từ
gia tộc.`,
  },

  {
    id: 'thien-tuong-tai-phuc-duc-liem-trinh',
    title: 'Thiên Tướng + Liêm Trinh tại Phúc Đức',
    sao: ['Thiên Tướng'],
    cung: ['Phúc Đức'],
    ketHop: ['Liêm Trinh'],
    doUuTien: 73,
    tomTat: `Khi Thiên Tướng đi cùng Liêm Trinh tại Phúc Đức, đương số được phúc
thọ, họ hàng khá giả.`,
  },

  {
    id: 'thien-tuong-tai-phuc-duc-tu-vi',
    title: 'Thiên Tướng + Tử Vi tại Phúc Đức',
    sao: ['Thiên Tướng'],
    cung: ['Phúc Đức'],
    ketHop: ['Tử Vi'],
    doUuTien: 73,
    tomTat: `Khi Thiên Tướng đi cùng Tử Vi tại Phúc Đức, cuộc đời đương số thuận
lợi, sống thọ và hưởng phúc; họ hàng có nhiều người quý hiển.`,
  },

  {
    id: 'thien-tuong-tai-phuc-duc-vu-khuc',
    title: 'Thiên Tướng + Vũ Khúc tại Phúc Đức',
    sao: ['Thiên Tướng'],
    cung: ['Phúc Đức'],
    ketHop: ['Vũ Khúc'],
    doUuTien: 73,
    tomTat: `Khi Thiên Tướng đi cùng Vũ Khúc tại Phúc Đức, đương số được phúc
thọ, cuộc đời sung túc.`,
  },

  // ============================================================
  // 17. Thiên Tướng ở Điền Trạch
  // ============================================================
  {
    id: 'thien-tuong-tai-dien-trach',
    title: 'Thiên Tướng tại Điền Trạch (đặc tính chung)',
    sao: ['Thiên Tướng'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng cư Điền Trạch, đất đai của đương số bền vững, biết
giữ tài sản tổ tiên. Đương số được hưởng gia sản, biết chăm lo nhà cửa gọn
gàng và phong thủy tốt.`,
  },

  {
    id: 'thien-tuong-tai-dien-trach-mieu-vuong-dac',
    title: 'Thiên Tướng Miếu/Vượng/Đắc tại Điền Trạch',
    sao: ['Thiên Tướng'],
    cung: ['Điền Trạch'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 78,
    tomTat: `Khi Thiên Tướng ở Miếu, Vượng hoặc Đắc địa tại Điền Trạch, đương
số có nhà cửa khang trang, đất đai rộng rãi; dễ mở rộng hoặc đầu tư bất động
sản.`,
  },

  {
    id: 'thien-tuong-tai-dien-trach-ham',
    title: 'Thiên Tướng Hãm tại Điền Trạch',
    sao: ['Thiên Tướng'],
    cung: ['Điền Trạch'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi Thiên Tướng Hãm địa tại Điền Trạch, nhà cửa của đương số thay
đổi nhiều, dễ chuyển nhà thường xuyên; cũng dễ thất thoát tài sản hoặc tranh
chấp đất đai.`,
  },

  {
    id: 'thien-tuong-tai-dien-trach-tu-hoa-loc',
    title: 'Thiên Tướng + Hóa Lộc / Quyền / Khoa / Lộc Tồn tại Điền Trạch',
    sao: ['Thiên Tướng'],
    cung: ['Điền Trạch'],
    ketHop: ['Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa', 'Lộc Tồn'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng tại Điền Trạch hội với Hóa Lộc, Hóa Quyền, Hóa Khoa
hay Lộc Tồn, đương số có nhiều nhà cửa và đất đai — có thể tự mua hoặc thừa kế
từ ông bà bố mẹ.`,
  },

  {
    id: 'thien-tuong-tai-dien-trach-khong-kiep-dai-hao',
    title: 'Thiên Tướng + Địa Không / Địa Kiếp / Đại Hao tại Điền Trạch',
    sao: ['Thiên Tướng'],
    cung: ['Điền Trạch'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Đại Hao'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng tại Điền Trạch gặp Địa Không, Địa Kiếp hay Đại Hao,
điền sản của đương số bị phá tán.`,
  },

  {
    id: 'thien-tuong-tai-dien-trach-hoa-ky',
    title: 'Thiên Tướng + Hóa Kỵ tại Điền Trạch',
    sao: ['Thiên Tướng'],
    cung: ['Điền Trạch'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng tại Điền Trạch gặp Hóa Kỵ, gia trạch không yên; dễ
xảy ra xung đột tranh chấp và điều tiếng.`,
  },

  {
    id: 'thien-tuong-tai-dien-trach-da-la-thien-ma',
    title: 'Thiên Tướng + Đà La + Thiên Mã tại Điền Trạch',
    sao: ['Thiên Tướng'],
    cung: ['Điền Trạch'],
    ketHop: ['Đà La', 'Thiên Mã'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng tại Điền Trạch gặp Đà La và Thiên Mã, đương số
thường xuyên chuyển rời nhà cửa và khó tìm được nhà vừa ý.`,
  },

  // ============================================================
  // 18. Thiên Tướng ở Quan Lộc
  // ============================================================
  {
    id: 'thien-tuong-tai-quan-loc',
    title: 'Thiên Tướng tại Quan Lộc (đặc tính chung)',
    sao: ['Thiên Tướng'],
    cung: ['Quan Lộc'],
    doUuTien: 80,
    tomTat: `Quan Lộc là cách đẹp nhất của Thiên Tướng — biểu hiện năng lực phò
tá và lãnh đạo trung cấp, đương số có uy tín trong tập thể.

Sao này phù hợp với các môi trường hành chính, công quyền, giáo dục, y học và
các ngành phục vụ công chúng.`,
  },

  {
    id: 'thien-tuong-tai-quan-loc-mieu-vuong-dac',
    title: 'Thiên Tướng Miếu/Vượng/Đắc tại Quan Lộc',
    sao: ['Thiên Tướng'],
    cung: ['Quan Lộc'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 85,
    tomTat: `Khi Thiên Tướng ở Miếu, Vượng hoặc Đắc địa tại Quan Lộc, công danh
của đương số thuận lợi, chức vụ cao và có uy quyền.`,
  },

  {
    id: 'thien-tuong-tai-quan-loc-ham',
    title: 'Thiên Tướng Hãm tại Quan Lộc',
    sao: ['Thiên Tướng'],
    cung: ['Quan Lộc'],
    trangThai: ['Hãm'],
    doUuTien: 85,
    tomTat: `Khi Thiên Tướng Hãm địa tại Quan Lộc, đường công danh trắc trở và
không ổn định; đương số hay gặp thị phi tranh chấp, vất vả không như ý.`,
  },

  {
    id: 'thien-tuong-tai-quan-loc-vu-liem',
    title: 'Thiên Tướng + Vũ Khúc / Liêm Trinh tại Quan Lộc',
    sao: ['Thiên Tướng'],
    cung: ['Quan Lộc'],
    ketHop: ['Vũ Khúc', 'Liêm Trinh'],
    doUuTien: 83,
    tomTat: `Khi Thiên Tướng tại Quan Lộc đi cùng Vũ Khúc hoặc Liêm Trinh, đương
số thích hợp với nghiệp quân đội, cảnh sát hay hải quan; cuộc đời giàu sang và
được kính trọng.`,
  },

  {
    id: 'thien-tuong-tai-quan-loc-pha-quan',
    title: 'Thiên Tướng + Phá Quân tại Quan Lộc',
    sao: ['Thiên Tướng'],
    cung: ['Quan Lộc'],
    ketHop: ['Phá Quân'],
    doUuTien: 83,
    tomTat: `Khi Thiên Tướng tại Quan Lộc đi cùng Phá Quân, sự nghiệp đương số
không ổn định, không thích hợp với chính trị nhà nước; cần dựa vào chuyên môn
riêng để phát triển.`,
  },

  {
    id: 'thien-tuong-tai-quan-loc-hoa-linh-kinh-da',
    title: 'Thiên Tướng + Hỏa Linh / Kình Đà tại Quan Lộc',
    sao: ['Thiên Tướng'],
    cung: ['Quan Lộc'],
    ketHop: ['Hỏa Tinh', 'Linh Tinh', 'Kình Dương', 'Đà La'],
    doUuTien: 83,
    tomTat: `Khi Thiên Tướng tại Quan Lộc gặp Hỏa Tinh, Linh Tinh, Kình Dương
hay Đà La, sự nghiệp đương số gặp nhiều rắc rối; kể cả thuận cảnh cũng dễ vấp
phải trở ngại.`,
  },

  // ============================================================
  // 19. Thiên Tướng ở Nô Bộc
  // ============================================================
  {
    id: 'thien-tuong-tai-no-boc',
    title: 'Thiên Tướng tại Nô Bộc (đặc tính chung)',
    sao: ['Thiên Tướng'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng cư Nô Bộc, đương số được cấp dưới, bạn bè và thuộc
hạ tin cậy, yêu quý. Sao này tạo cho đương số duyên thu hút người xung quanh.`,
  },

  {
    id: 'thien-tuong-tai-no-boc-mieu-vuong-dac',
    title: 'Thiên Tướng Miếu/Vượng/Đắc tại Nô Bộc',
    sao: ['Thiên Tướng'],
    cung: ['Nô Bộc'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 78,
    tomTat: `Khi Thiên Tướng ở Miếu, Vượng hoặc Đắc địa tại Nô Bộc, bạn bè và
đồng nghiệp của đương số trung thành, tận tâm và là chỗ trợ lực vững chắc.`,
  },

  {
    id: 'thien-tuong-tai-no-boc-ham',
    title: 'Thiên Tướng Hãm tại Nô Bộc',
    sao: ['Thiên Tướng'],
    cung: ['Nô Bộc'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi Thiên Tướng Hãm địa tại Nô Bộc, bạn bè của đương số không đáng
tin, dễ phản bội; đương số dễ gặp tiểu nhân và bị lừa gạt.`,
  },

  {
    id: 'thien-tuong-tai-no-boc-ta-huu',
    title: 'Thiên Tướng + Tả Phù / Hữu Bật tại Nô Bộc',
    sao: ['Thiên Tướng'],
    cung: ['Nô Bộc'],
    ketHop: ['Tả Phù', 'Hữu Bật'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng tại Nô Bộc đi cùng Tả Phù hoặc Hữu Bật, đương số
giao du rộng, có nhiều người dưới quyền.`,
  },

  {
    id: 'thien-tuong-tai-no-boc-tam-hoa-loc-ton',
    title: 'Thiên Tướng + Hóa Lộc / Khoa / Quyền + Lộc Tồn tại Nô Bộc',
    sao: ['Thiên Tướng'],
    cung: ['Nô Bộc'],
    ketHop: ['Hóa Lộc', 'Hóa Khoa', 'Hóa Quyền', 'Lộc Tồn'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng tại Nô Bộc hội với Hóa Lộc, Hóa Khoa, Hóa Quyền và
Lộc Tồn, bạn bè cùng người dưới quyền đều trợ giúp đương số tốt.`,
  },

  {
    id: 'thien-tuong-tai-no-boc-tu-vi',
    title: 'Thiên Tướng + Tử Vi tại Nô Bộc',
    sao: ['Thiên Tướng'],
    cung: ['Nô Bộc'],
    ketHop: ['Tử Vi'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng đi cùng Tử Vi tại Nô Bộc, đương số có nhiều bạn bè
tốt; người dưới quyền trung thành, giỏi giang và ngay thẳng.`,
  },

  {
    id: 'thien-tuong-tai-no-boc-thien-phu-luc-cat',
    title: 'Thiên Tướng + Thiên Phủ + Lục cát tinh tại Nô Bộc',
    sao: ['Thiên Tướng'],
    cung: ['Nô Bộc'],
    ketHop: ['Thiên Phủ', 'Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng tại Nô Bộc đi cùng Thiên Phủ và Lục cát tinh (Tả
Phù, Hữu Bật, Văn Xương, Văn Khúc, Thiên Khôi, Thiên Việt), bạn bè và người
dưới quyền chất phác, sẵn sàng trợ lực cho đương số lúc khó khăn.`,
  },

  {
    id: 'thien-tuong-tai-no-boc-vu-khuc',
    title: 'Thiên Tướng + Vũ Khúc tại Nô Bộc',
    sao: ['Thiên Tướng'],
    cung: ['Nô Bộc'],
    ketHop: ['Vũ Khúc'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng đi cùng Vũ Khúc tại Nô Bộc, bạn bè đương số bất tín
bất nghĩa; người dưới quyền dễ phản bội.`,
  },

  {
    id: 'thien-tuong-tai-no-boc-liem-ky-sat-bai',
    title: 'Thiên Tướng + Liêm Trinh + Hóa Kỵ + sát bại tinh tại Nô Bộc',
    sao: ['Thiên Tướng'],
    cung: ['Nô Bộc'],
    ketHop: ['Liêm Trinh', 'Hóa Kỵ', 'Địa Không', 'Địa Kiếp', 'Kình Dương', 'Đà La', 'Tang Môn', 'Bạch Hổ'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng tại Nô Bộc đi cùng Liêm Trinh, Hóa Kỵ và sát bại
tinh (Địa Không, Địa Kiếp, Kình Dương, Đà La, Tang Môn, Bạch Hổ), đương số
giao du với bạn bè xấu, bị người dưới quyền làm liên lụy gây hao tài và uy
tín.`,
  },

  {
    id: 'thien-tuong-tai-no-boc-dai-hao-khong-kiep',
    title: 'Thiên Tướng + Đại Hao + Không Kiếp tại Nô Bộc',
    sao: ['Thiên Tướng'],
    cung: ['Nô Bộc'],
    ketHop: ['Đại Hao', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng tại Nô Bộc gặp Đại Hao đi cùng Địa Không hoặc Địa
Kiếp, đương số có nhiều mối quan hệ nhưng không tìm được tri kỷ; người dưới
quyền nhiều mà không đắc lực.`,
  },

  // ============================================================
  // 20. Thiên Tướng ở Thiên Di
  // ============================================================
  {
    id: 'thien-tuong-tai-thien-di',
    title: 'Thiên Tướng tại Thiên Di (đặc tính chung)',
    sao: ['Thiên Tướng'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng cư Thiên Di, đương số ra ngoài được người quý mến
và có người giúp đỡ. Ăn nói đĩnh đạc, đáng tin cậy nên đương số dễ được mời
giữ vai trò tổ chức hoặc phụ trách công việc chung.`,
  },

  {
    id: 'thien-tuong-tai-thien-di-mieu-vuong-dac',
    title: 'Thiên Tướng Miếu/Vượng/Đắc tại Thiên Di',
    sao: ['Thiên Tướng'],
    cung: ['Thiên Di'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 78,
    tomTat: `Khi Thiên Tướng ở Miếu, Vượng hoặc Đắc địa tại Thiên Di, đương số
ra ngoài gặp nhiều quý nhân, mở ra nhiều cơ hội phát triển.`,
  },

  {
    id: 'thien-tuong-tai-thien-di-ham',
    title: 'Thiên Tướng Hãm tại Thiên Di',
    sao: ['Thiên Tướng'],
    cung: ['Thiên Di'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi Thiên Tướng Hãm địa tại Thiên Di, đương số ra ngoài hay gặp
thị phi, bị tiểu nhân cản trở; dễ vấp tai nạn, trục trặc hoặc mất mát khi đi
xa.`,
  },

  {
    id: 'thien-tuong-tai-thien-di-tam-hoa-ta-huu-khoi-viet',
    title: 'Thiên Tướng + Tam Hóa cát + Tả Hữu / Khôi Việt tại Thiên Di',
    sao: ['Thiên Tướng'],
    cung: ['Thiên Di'],
    ketHop: ['Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa', 'Tả Phù', 'Hữu Bật', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng tại Thiên Di hội với Tam Hóa cát (Hóa Lộc, Hóa
Quyền, Hóa Khoa) cùng Tả Phù, Hữu Bật, Thiên Khôi hay Thiên Việt, đương số đi
xa có cơ hội bất ngờ phát triển sự nghiệp; có quý nhân phù trợ và có thể trở
nên giàu có, phát phúc.`,
  },

  {
    id: 'thien-tuong-tai-thien-di-tu-vi',
    title: 'Thiên Tướng + Tử Vi tại Thiên Di',
    sao: ['Thiên Tướng'],
    cung: ['Thiên Di'],
    ketHop: ['Tử Vi'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng đi cùng Tử Vi tại Thiên Di, đương số ra ngoài có
địa vị cao, được mọi người ngưỡng mộ.`,
  },

  {
    id: 'thien-tuong-tai-thien-di-vu-khuc',
    title: 'Thiên Tướng + Vũ Khúc tại Thiên Di',
    sao: ['Thiên Tướng'],
    cung: ['Thiên Di'],
    ketHop: ['Vũ Khúc'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng đi cùng Vũ Khúc tại Thiên Di, đương số gặp quý
nhân phù trợ, được nể trọng và có tài lộc hưng thịnh.`,
  },

  // ============================================================
  // 21. Thiên Tướng ở Tật Ách
  // ============================================================
  {
    id: 'thien-tuong-tai-tat-ach',
    title: 'Thiên Tướng tại Tật Ách (đặc tính chung)',
    sao: ['Thiên Tướng'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng cư Tật Ách, đương số có thân thể vững và sức đề
kháng tốt. Bệnh chủ về đường niệu, bàng quang, tụy tạng và làn da. Khi mắc
bệnh, đương số dễ có quý nhân hoặc bác sĩ giỏi giúp.`,
  },

  {
    id: 'thien-tuong-tai-tat-ach-mieu-vuong-dac',
    title: 'Thiên Tướng Miếu/Vượng/Đắc tại Tật Ách',
    sao: ['Thiên Tướng'],
    cung: ['Tật Ách'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 78,
    tomTat: `Khi Thiên Tướng ở Miếu, Vượng hoặc Đắc địa tại Tật Ách, đương số
sức khỏe tốt, thể trạng cường tráng và ít bệnh.`,
  },

  {
    id: 'thien-tuong-tai-tat-ach-ham',
    title: 'Thiên Tướng Hãm tại Tật Ách',
    sao: ['Thiên Tướng'],
    cung: ['Tật Ách'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi Thiên Tướng Hãm địa tại Tật Ách, đương số dễ mắc bệnh kéo dài —
đặc biệt là tiêu hóa, gan, thận và huyết áp.`,
  },

  {
    id: 'thien-tuong-tai-tat-ach-hong-hy-rieu',
    title: 'Thiên Tướng + Hồng Loan / Thiên Hỷ / Thiên Riêu tại Tật Ách',
    sao: ['Thiên Tướng'],
    cung: ['Tật Ách'],
    ketHop: ['Hồng Loan', 'Thiên Hỷ', 'Thiên Riêu'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng tại Tật Ách gặp Hồng Loan, Thiên Hỷ hay Thiên Riêu,
đương số dễ mắc bệnh lây qua đường tình dục, khó chữa.`,
  },

  {
    id: 'thien-tuong-tai-tat-ach-hinh-kinh-da',
    title: 'Thiên Tướng + Thiên Hình / Kình Đà tại Tật Ách',
    sao: ['Thiên Tướng'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Hình', 'Kình Dương', 'Đà La'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng tại Tật Ách gặp Thiên Hình, Kình Dương hay Đà La,
đương số dễ mắc bệnh khớp, đau xương và tim mạch.`,
  },

  {
    id: 'thien-tuong-tai-tat-ach-hoa-linh',
    title: 'Thiên Tướng + Hỏa Linh tại Tật Ách',
    sao: ['Thiên Tướng'],
    cung: ['Tật Ách'],
    ketHop: ['Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng tại Tật Ách gặp Hỏa Tinh hoặc Linh Tinh, đương số
dễ mắc bệnh ngoài da, cảm cúm hay sốt rét.`,
  },

  {
    id: 'thien-tuong-tai-tat-ach-doi-tu-pha',
    title: 'Thiên Tướng + đối cung Tử Vi + Phá Quân tại Tật Ách',
    sao: ['Thiên Tướng'],
    cung: ['Tật Ách'],
    ketHop: ['Tử Vi', 'Phá Quân'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng tại Tật Ách có đối cung là Tử Vi và Phá Quân, sức
khỏe đương số kém từ bé.`,
  },

  {
    id: 'thien-tuong-tai-tat-ach-tuan-triet',
    title: 'Thiên Tướng + Tuần / Triệt tại Tật Ách',
    sao: ['Thiên Tướng'],
    cung: ['Tật Ách'],
    ketHop: ['Tuần', 'Triệt'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng tại Tật Ách gặp Tuần hoặc Triệt, đương số dễ tai
nạn; đầu hoặc mặt có thể bị thương khá nặng.`,
  },

  {
    id: 'thien-tuong-tai-tat-ach-vu-khuc',
    title: 'Thiên Tướng + Vũ Khúc tại Tật Ách',
    sao: ['Thiên Tướng'],
    cung: ['Tật Ách'],
    ketHop: ['Vũ Khúc'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng đi cùng Vũ Khúc tại Tật Ách, đương số dễ mang tật
ở đầu.`,
  },

  // ============================================================
  // 22. Thiên Tướng ở Tài Bạch
  // ============================================================
  {
    id: 'thien-tuong-tai-tai-bach',
    title: 'Thiên Tướng tại Tài Bạch (đặc tính chung)',
    sao: ['Thiên Tướng'],
    cung: ['Tài Bạch'],
    doUuTien: 76,
    tomTat: `Khi Thiên Tướng cư Tài Bạch, tiền tài của đương số ổn định nhờ
công danh, nghề hành chính, giáo dục hay công vụ. Đặc trưng tài lộc của sao
này không phát nhanh, mà là tích tiểu thành đại, bền lâu.`,

    chiTiet: `Đương số có Thiên Tướng đắc địa tại Tài Bạch thường kiếm tiền từ
kinh doanh, quản lý, hành chính hoặc các ngành dịch vụ.`,
  },

  {
    id: 'thien-tuong-tai-tai-bach-mieu-vuong-dac',
    title: 'Thiên Tướng Miếu/Vượng/Đắc tại Tài Bạch',
    sao: ['Thiên Tướng'],
    cung: ['Tài Bạch'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 80,
    tomTat: `Khi Thiên Tướng ở Miếu, Vượng hoặc Đắc địa tại Tài Bạch, tài vận
đương số tốt, kiếm tiền thuận lợi và tích lũy được tài sản; cũng dễ gặp quý
nhân phù trợ về mặt tài chính.`,
  },

  {
    id: 'thien-tuong-tai-tai-bach-ham',
    title: 'Thiên Tướng Hãm tại Tài Bạch',
    sao: ['Thiên Tướng'],
    cung: ['Tài Bạch'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `Khi Thiên Tướng Hãm địa tại Tài Bạch, tài vận của đương số kém, dễ
hao tài thất thoát và dễ bị lừa gạt.`,
  },

  {
    id: 'thien-tuong-tai-tai-bach-liem-trinh',
    title: 'Thiên Tướng + Liêm Trinh tại Tài Bạch',
    sao: ['Thiên Tướng'],
    cung: ['Tài Bạch'],
    ketHop: ['Liêm Trinh'],
    doUuTien: 77,
    tomTat: `Khi Thiên Tướng đi cùng Liêm Trinh tại Tài Bạch, đương số giỏi kinh
doanh và buôn bán, dễ gặp thời cơ vượng phát.`,
  },

  {
    id: 'thien-tuong-tai-tai-bach-vu-khuc',
    title: 'Thiên Tướng + Vũ Khúc tại Tài Bạch',
    sao: ['Thiên Tướng'],
    cung: ['Tài Bạch'],
    ketHop: ['Vũ Khúc'],
    doUuTien: 77,
    tomTat: `Khi Thiên Tướng đi cùng Vũ Khúc tại Tài Bạch, đương số phát triển
hưng thịnh nhờ chuyên môn.`,
  },

  {
    id: 'thien-tuong-tai-tai-bach-tu-vi',
    title: 'Thiên Tướng + Tử Vi hội chiếu tại Tài Bạch',
    sao: ['Thiên Tướng'],
    cung: ['Tài Bạch'],
    ketHop: ['Tử Vi'],
    doUuTien: 77,
    tomTat: `Khi Thiên Tướng có Tử Vi hội chiếu tại Tài Bạch, cuộc đời đương số
gặp cơ hội phát đạt bất ngờ.`,
  },

  {
    id: 'thien-tuong-tai-tai-bach-vu-pha-vay',
    title: 'Thiên Tướng + Vũ Khúc + Phá Quân vây chiếu tại Tài Bạch',
    sao: ['Thiên Tướng'],
    cung: ['Tài Bạch'],
    ketHop: ['Vũ Khúc', 'Phá Quân'],
    doUuTien: 77,
    tomTat: `Khi Thiên Tướng tại Tài Bạch bị Vũ Khúc và Phá Quân vây chiếu, tiền
tài đương số không ổn định; phải phá hết tổ nghiệp rồi mới tự kiếm tiền được.`,
  },

  // ============================================================
  // 23. Thiên Tướng ở Tử Tức
  // ============================================================
  {
    id: 'thien-tuong-tai-tu-tuc',
    title: 'Thiên Tướng tại Tử Tức (đặc tính chung)',
    sao: ['Thiên Tướng'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng cư Tử Tức, con cái của đương số hiếu thuận, có địa
vị và tính ôn hòa. Con thường theo các nghề hành chính, giáo dục, y học hay
luật pháp.`,
  },

  {
    id: 'thien-tuong-tai-tu-tuc-mieu-vuong-dac',
    title: 'Thiên Tướng Miếu/Vượng/Đắc tại Tử Tức',
    sao: ['Thiên Tướng'],
    cung: ['Tử Tức'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 78,
    tomTat: `Khi Thiên Tướng ở Miếu, Vượng hoặc Đắc địa tại Tử Tức, con cái
đương số thông minh, hiếu thảo, dễ nuôi và có tương lai sáng lạn.`,
  },

  {
    id: 'thien-tuong-tai-tu-tuc-ham',
    title: 'Thiên Tướng Hãm tại Tử Tức',
    sao: ['Thiên Tướng'],
    cung: ['Tử Tức'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi Thiên Tướng Hãm địa tại Tử Tức, đương số có con khó nuôi hoặc
ít con; quan hệ cha mẹ - con cái không hòa hợp, có sự xa cách.`,
  },

  {
    id: 'thien-tuong-tai-tu-tuc-vu-pha-vay',
    title: 'Thiên Tướng + Vũ Khúc + Phá Quân vây chiếu tại Tử Tức',
    sao: ['Thiên Tướng'],
    cung: ['Tử Tức'],
    ketHop: ['Vũ Khúc', 'Phá Quân'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng tại Tử Tức bị Vũ Khúc và Phá Quân vây chiếu, quan
hệ cha mẹ - con cái dễ xung khắc; đương số nên chậm có con.`,
  },

  {
    id: 'thien-tuong-tai-tu-tuc-hoa-linh-kinh-da-ta-huu',
    title: 'Thiên Tướng + Hỏa Linh / Kình Đà / Tả Hữu tại Tử Tức',
    sao: ['Thiên Tướng'],
    cung: ['Tử Tức'],
    ketHop: ['Hỏa Tinh', 'Linh Tinh', 'Kình Dương', 'Đà La', 'Tả Phù', 'Hữu Bật'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng tại Tử Tức gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà
La, Tả Phù hay Hữu Bật, con đầu lòng của đương số dễ đau ốm.`,
  },

  {
    id: 'thien-tuong-tai-tu-tuc-sat-tinh',
    title: 'Thiên Tướng + Sát tinh tại Tử Tức',
    sao: ['Thiên Tướng'],
    cung: ['Tử Tức'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng tại Tử Tức gặp các sát tinh (Địa Không, Địa Kiếp,
Kình Dương, Đà La, Hỏa Tinh, Linh Tinh), đương số dễ phải xin con nuôi hoặc
có con riêng.`,
  },

  {
    id: 'thien-tuong-tai-tu-tuc-tam-hoa-khoi-viet-ta-huu-thien-phu',
    title: 'Thiên Tướng + Tam Hóa + Khôi Việt + Tả Hữu + Thiên Phủ tại Tử Tức',
    sao: ['Thiên Tướng'],
    cung: ['Tử Tức'],
    ketHop: ['Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa', 'Thiên Khôi', 'Thiên Việt', 'Tả Phù', 'Hữu Bật', 'Thiên Phủ'],
    doUuTien: 75,
    tomTat: `Khi Thiên Tướng tại Tử Tức hội chiếu cùng Tam Hóa, Thiên Khôi,
Thiên Việt, Tả Phù, Hữu Bật và Thiên Phủ, đương số có nhiều con; con cái hiếu
thảo, ngoan ngoãn và giỏi giang.`,
  },

  // ============================================================
  // 24. Thiên Tướng ở Phu Thê
  // ============================================================
  {
    id: 'thien-tuong-tai-phu-the',
    title: 'Thiên Tướng tại Phu Thê (đặc tính chung)',
    sao: ['Thiên Tướng'],
    cung: ['Phu Thê'],
    doUuTien: 76,
    tomTat: `Khi Thiên Tướng cư Phu Thê, bạn đời của đương số hiền lành, có
trách nhiệm và biết chăm lo gia đình. Hôn nhân thường ổn định; tình cảm vợ
chồng mang sắc thái phò tá và bảo vệ lẫn nhau.`,
  },

  {
    id: 'thien-tuong-tai-phu-the-mieu-vuong-dac',
    title: 'Thiên Tướng Miếu/Vượng/Đắc tại Phu Thê',
    sao: ['Thiên Tướng'],
    cung: ['Phu Thê'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 80,
    tomTat: `Khi Thiên Tướng ở Miếu, Vượng hoặc Đắc địa tại Phu Thê, người hôn
phối có danh vọng, địa vị; thường làm hành chính, quản lý hay dịch vụ và là
chỗ trợ lực sự nghiệp cho đương số.`,
  },

  {
    id: 'thien-tuong-tai-phu-the-ham',
    title: 'Thiên Tướng Hãm tại Phu Thê',
    sao: ['Thiên Tướng'],
    cung: ['Phu Thê'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `Khi Thiên Tướng Hãm địa tại Phu Thê, đương số bảo thủ, gia trưởng
và áp đặt; vợ chồng dễ xung đột, bất đồng quan điểm sống.`,
  },

  {
    id: 'thien-tuong-tai-phu-the-tu-vi',
    title: 'Thiên Tướng + Tử Vi tại Phu Thê',
    sao: ['Thiên Tướng'],
    cung: ['Phu Thê'],
    ketHop: ['Tử Vi'],
    doUuTien: 77,
    tomTat: `Khi Thiên Tướng đi cùng Tử Vi tại Phu Thê, vợ chồng đương số tính
ương ngạnh — lúc đầu hòa hợp, sau hay xích mích. Cả hai đều khá giả; chồng
thường lớn tuổi hơn vợ.`,
  },

  {
    id: 'thien-tuong-tai-phu-the-liem-trinh',
    title: 'Thiên Tướng + Liêm Trinh tại Phu Thê',
    sao: ['Thiên Tướng'],
    cung: ['Phu Thê'],
    ketHop: ['Liêm Trinh'],
    doUuTien: 77,
    tomTat: `Khi Thiên Tướng đi cùng Liêm Trinh tại Phu Thê, đương số cần thận
trọng trong hôn nhân, tránh để bất hòa dẫn đến chia ly.`,
  },

  {
    id: 'thien-tuong-tai-phu-the-vu-khuc',
    title: 'Thiên Tướng + Vũ Khúc tại Phu Thê',
    sao: ['Thiên Tướng'],
    cung: ['Phu Thê'],
    ketHop: ['Vũ Khúc'],
    doUuTien: 77,
    tomTat: `Khi Thiên Tướng đi cùng Vũ Khúc tại Phu Thê, vợ chồng đương số
cứng cỏi, thẳng thắn; lúc trẻ hòa thuận, sau hay xích mích, nhưng cả hai đều
hưởng phú quý.`,
  },

  {
    id: 'thien-tuong-tai-phu-the-dao-hong-nam',
    title: 'Nam - Thiên Tướng + Đào Hoa / Hồng Loan tại Phu Thê',
    sao: ['Thiên Tướng'],
    cung: ['Phu Thê'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    gioiTinh: 'Nam',
    doUuTien: 80,
    tomTat: `Nam mệnh có Thiên Tướng cư Phu Thê và gặp Đào Hoa hoặc Hồng Loan
thì lấy được vợ đẹp, khá giả.`,
  },

  {
    id: 'thien-tuong-tai-phu-the-dao-hong-nu',
    title: 'Nữ - Thiên Tướng + Đào Hoa / Hồng Loan tại Phu Thê',
    sao: ['Thiên Tướng'],
    cung: ['Phu Thê'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    gioiTinh: 'Nữ',
    doUuTien: 80,
    tomTat: `Nữ mệnh có Thiên Tướng cư Phu Thê và gặp Đào Hoa hoặc Hồng Loan
thì lấy được chồng quý hiển.`,
  },

  // ============================================================
  // 25. Thiên Tướng ở Huynh Đệ
  // ============================================================
  {
    id: 'thien-tuong-tai-huynh-de',
    title: 'Thiên Tướng tại Huynh Đệ (đặc tính chung)',
    sao: ['Thiên Tướng'],
    cung: ['Huynh Đệ'],
    doUuTien: 73,
    tomTat: `Khi Thiên Tướng cư Huynh Đệ, anh chị em của đương số thuận hòa,
biết giúp đỡ nhau; trong số đó có người làm công quyền hoặc giữ chức vụ.`,
  },

  {
    id: 'thien-tuong-tai-huynh-de-mieu-vuong-dac',
    title: 'Thiên Tướng Miếu/Vượng/Đắc tại Huynh Đệ',
    sao: ['Thiên Tướng'],
    cung: ['Huynh Đệ'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 76,
    tomTat: `Khi Thiên Tướng ở Miếu, Vượng hoặc Đắc địa tại Huynh Đệ, quan hệ
giữa anh chị em tốt đẹp; trong số đó có người đạt được địa vị xã hội.`,
  },

  {
    id: 'thien-tuong-tai-huynh-de-ham',
    title: 'Thiên Tướng Hãm tại Huynh Đệ',
    sao: ['Thiên Tướng'],
    cung: ['Huynh Đệ'],
    trangThai: ['Hãm'],
    doUuTien: 76,
    tomTat: `Khi Thiên Tướng Hãm địa tại Huynh Đệ, anh chị em xung đột, tranh
chấp và không hòa hợp; thường xa cách hoặc ít hỗ trợ nhau.`,
  },

  {
    id: 'thien-tuong-tai-huynh-de-tu-vi',
    title: 'Thiên Tướng + Tử Vi tại Huynh Đệ',
    sao: ['Thiên Tướng'],
    cung: ['Huynh Đệ'],
    ketHop: ['Tử Vi'],
    doUuTien: 73,
    tomTat: `Khi Thiên Tướng đi cùng Tử Vi tại Huynh Đệ, đương số có nhiều anh
chị em nhưng trong nhà hay bất hòa; tuy nhiên ai cũng khá giả.`,
  },

  {
    id: 'thien-tuong-tai-huynh-de-liem-trinh',
    title: 'Thiên Tướng + Liêm Trinh tại Huynh Đệ',
    sao: ['Thiên Tướng'],
    cung: ['Huynh Đệ'],
    ketHop: ['Liêm Trinh'],
    doUuTien: 73,
    tomTat: `Khi Thiên Tướng đi cùng Liêm Trinh tại Huynh Đệ, đương số có hai
người con (anh em); cả hai đều quý hiển.`,
  },

  {
    id: 'thien-tuong-tai-huynh-de-ta-huu',
    title: 'Thiên Tướng + Tả Phù / Hữu Bật tại Huynh Đệ',
    sao: ['Thiên Tướng'],
    cung: ['Huynh Đệ'],
    ketHop: ['Tả Phù', 'Hữu Bật'],
    doUuTien: 73,
    tomTat: `Khi Thiên Tướng đi cùng Tả Phù hoặc Hữu Bật tại Huynh Đệ, đương số
có nhiều anh chị em và chung sống hòa thuận.`,
  },

  {
    id: 'thien-tuong-tai-huynh-de-tam-hoa-loc-ton',
    title: 'Thiên Tướng + Tam Hóa cát + Lộc Tồn tại Huynh Đệ',
    sao: ['Thiên Tướng'],
    cung: ['Huynh Đệ'],
    ketHop: ['Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa', 'Lộc Tồn'],
    doUuTien: 73,
    tomTat: `Khi Thiên Tướng tại Huynh Đệ hội với Tam Hóa cát và Lộc Tồn, anh
chị em của đương số có tiền, có quyền thế và biết trợ lực dìu dắt nhau.`,
  },

  {
    id: 'thien-tuong-tai-huynh-de-vu-pha-vay-ta-huu',
    title: 'Thiên Tướng + Vũ Khúc + Phá Quân vây chiếu + Tả Hữu tại Huynh Đệ',
    sao: ['Thiên Tướng'],
    cung: ['Huynh Đệ'],
    ketHop: ['Vũ Khúc', 'Phá Quân', 'Tả Phù', 'Hữu Bật'],
    doUuTien: 73,
    tomTat: `Khi Thiên Tướng tại Huynh Đệ bị Vũ Khúc và Phá Quân vây chiếu, có
thêm Tả Phù hoặc Hữu Bật, đương số có nhiều anh chị em nhưng khắc nhau, hoặc
là anh chị em khác mẹ.`,
  },
];
