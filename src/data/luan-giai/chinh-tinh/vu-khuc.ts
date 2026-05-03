import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO VŨ KHÚC - Tài Tinh, Quyền Tinh
 */
export const luanGiai_VuKhuc: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung của sao Vũ Khúc
  // ============================================================
  {
    id: 'vu-khuc-tinh-chat-chung',
    title: 'Vũ Khúc - Đặc tính chung',
    sao: ['Vũ Khúc'],
    doUuTien: 30,
    tomTat: `**Vũ Khúc** thuộc chòm **Bắc Đẩu**, ngũ hành **Kim** (Âm). Là **Tài
Tinh, Quyền Tinh** — chủ về **tiền bạc, của cải, quyền lực**. Tên thường gọi: **Vũ**.

Là sao thứ 4 trong chòm Tử Vi (Tử Vi: Thiên Cơ: Thái Dương: **Vũ Khúc**
Thiên Đồng: Liêm Trinh).

**Vị trí miếu hãm:**
- **Miếu địa:** Thìn, Tuất, Sửu, Mùi
- **Vượng địa:** Dần, Thân, Tý, Ngọ
- **Đắc địa:** Mão, Dậu
- **Hãm địa:** Tỵ, Hợi`,

    chiTiet: `## Bản chất Tài Tinh

Vũ Khúc là **chính tinh tài lộc hàng đầu** trong khoa Tử Vi — đại diện cho:
- **Tài chính, kinh doanh**
- **Khả năng kiếm tiền và quản lý tài chính**
- **Khao khát tiền tài và sự giàu có**

Khát vọng của Vũ Khúc đều **rất thực tế**, có sự **tính toán cẩn trọng rõ ràng**
chứ không mơ mộng hão huyền. Đôi khi tham vọng quá mức: **cố chấp**, sẵn sàng
làm mọi thứ để theo đuổi mong muốn.

## Tính cứng rắn lãnh đạo

Vũ Khúc thường thể hiện tính **cứng rắn, quyết đoán**, có **uy nghiêm của người
lãnh đạo**. Có khả năng **lập nghiệp từ tay trắng**, dựa vào năng lực bản thân.`,
  },

  // ============================================================
  // 2. Vũ Khúc - tính "Cô Thần / Quả Tú"
  // ============================================================
  {
    id: 'vu-khuc-co-than',
    title: 'Vũ Khúc - Đặc tính "Cô Thần / Quả Tú / Đế Tinh Cô Đơn"',
    sao: ['Vũ Khúc'],
    doUuTien: 35,
    tomTat: `**ĐẶC TRƯNG QUAN TRỌNG:** Vũ Khúc là **sao Cô Thần / Quả Tú** —
được mệnh danh **"Đế Tinh Cô Đơn"**.

Dù **đắc địa hay hãm địa**, Vũ Khúc đều mang tính:
- **Cách biệt với người thân, ít bè bạn**
- **Cô độc, ít hạnh phúc gia đình và xã hội**
- **Khó kết nối quan hệ** với người khác

- Đặc biệt bất lợi cho nữ mệnh — gây **trắc trở duyên nợ**.`,
  },
  {
    id: 'vu-khuc-co-than-co-qua-dau-quan-thai-tue',
    title: 'Vũ Khúc + Cô Thần/Quả Tú/Đẩu Quân/Thái Tuế - Tăng lẻ loi',
    sao: ['Vũ Khúc'],
    ketHop: ['Cô Thần', 'Quả Tú', 'Đẩu Quân', 'Thái Tuế'],
    doUuTien: 30,
    tomTat: `**Vũ Khúc + Cô Thần / Quả Tú / Đẩu Quân / Thái Tuế** (sao hiu
quạnh): **TĂNG ý nghĩa lẻ loi** lên rất nhiều, đặc biệt bất lợi cho nữ mệnh.`,
  },

  // ============================================================
  // 3. Vũ Khúc tại Mệnh - tướng mạo
  // ============================================================
  {
    id: 'vu-khuc-tai-menh-tuong-mao',
    title: 'Vũ Khúc tại Mệnh - Tướng mạo (chung)',
    sao: ['Vũ Khúc'],
    cung: ['Mệnh'],
    doUuTien: 75,
    tomTat: `**Vũ Khúc cư Mệnh - đặc trưng chung:** vóc dáng **nhỏ nhắn dong dỏng,
đầu to thân nhỏ**, giọng vang thanh thoát, tác phong **nhanh nhẹn hoạt bát**
nhưng vẫn có **nét lãnh đạm, kín kẽ**.`,
  },

  {
    id: 'vu-khuc-tai-menh-dac-tuong-mao',
    title: 'Vũ Khúc Đắc tại Mệnh - Tướng mạo',
    sao: ['Vũ Khúc'],
    cung: ['Mệnh'],
    trangThai: ['Đắc', 'Miếu', 'Vượng'],
    doUuTien: 80,
    tomTat: `**Vũ Khúc Đắc/Miếu/Vượng tại Mệnh:** thân hình **nở nang cao vừa
tầm, nặng cân**, đầu và mặt dài, vẻ mặt **uy nghi**, tiếng nói to, có **nốt
ruồi ở chỗ kín**.`,
  },

  {
    id: 'vu-khuc-tai-menh-ham-tuong-mao',
    title: 'Vũ Khúc Hãm tại Mệnh - Tướng mạo',
    sao: ['Vũ Khúc'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `**Vũ Khúc Hãm địa tại Mệnh:** **bé nhỏ, thấp, hơi đen**, có nhiều
ngấn vết, **tóc rậm và xấu**.`,
  },

  // ============================================================
  // 4. Vũ Khúc tại Mệnh - tính cách
  // ============================================================
  {
    id: 'vu-khuc-tai-menh-tinh-cach',
    title: 'Vũ Khúc tại Mệnh - Tính cách (chung)',
    sao: ['Vũ Khúc'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `Người **Vũ Khúc cư Mệnh** đặc trưng: **ngay thẳng, kiên định**, giải
quyết nhanh, **chăm chỉ, ý chí bền bỉ**, cô độc ít nói, **không thích giao du
nơi đông người**.`,

    chiTiet: `## Tính cách "Đế Tinh Cô Đơn"

Người Vũ Khúc cư Mệnh có tính cách **cương khắc** đặc trưng:
- **Nghiêm nghị, cứng rắn, tài giỏi**, tỏa nét đẹp **tự tin**
- Đôi khi rất **cố chấp và hiếu thắng**
- **Cô độc, ít nói**, không thích giao du nơi đông người
- Bản chất **hành Kim** khiến trở nên **xa cách** với người khác

## Đặc điểm xử lý công việc

- Giải quyết công việc **nhanh, quyết đoán**
- **Chăm chỉ, chịu khó**, có ý chí bền bỉ
- **Quyết tâm lớn** để theo đuổi mục tiêu`,
  },

  {
    id: 'vu-khuc-tai-menh-dac-tinh-cach',
    title: 'Vũ Khúc Đắc tại Mệnh - Tính cách',
    sao: ['Vũ Khúc'],
    cung: ['Mệnh'],
    trangThai: ['Đắc', 'Miếu', 'Vượng'],
    doUuTien: 85,
    tomTat: `**Vũ Khúc Đắc/Miếu/Vượng tại Mệnh:** **thông minh, có chí lớn**, có
**óc kinh doanh, tài buôn bán**. Tính tình **mạnh bạo, quả quyết, cương nghị,
thẳng thắn, hiếu thắng**.`,
  },

  {
    id: 'vu-khuc-tai-menh-ham-tinh-cach',
    title: 'Vũ Khúc Hãm tại Mệnh - Tính cách',
    sao: ['Vũ Khúc'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    doUuTien: 85,
    tomTat: `**Vũ Khúc Hãm địa tại Mệnh:** **kém thông minh**, tham lận, **thiếu
lương thiện, hà tiện, bủn xỉn, ương ngạnh**.`,
  },

  // ============================================================
  // 5. Vũ Khúc tại Mệnh - sự nghiệp tài lộc
  // ============================================================
  {
    id: 'vu-khuc-tai-menh-su-nghiep',
    title: 'Vũ Khúc tại Mệnh - Sự nghiệp & tài lộc (chung)',
    sao: ['Vũ Khúc'],
    cung: ['Mệnh'],
    doUuTien: 75,
    tomTat: `**Điểm sáng nhất của Vũ Khúc:** **năng lực kinh doanh và quản lý
tài chính**. Được gọi là người **"nhìn đâu cũng thấy tiền"** — con mắt tinh tường
nhìn ra cơ hội buôn bán sinh lời.`,

    chiTiet: `## Lĩnh vực phù hợp

- **Kinh doanh, tài chính, buôn bán** (chủ đạo)
- **Chính trị, quân sự, luật pháp** — ngành cần **quyết đoán và kỷ luật**
- Tính thẳng thắn, có chữ tín, làm việc thận trọng: **đạt được tiền tài và
  danh vọng**

## Thành công đến muộn

**Thành công thường đến sau tuổi 30** — "lửa thử vàng, gian nan thử sức",
phải trải qua thử thách, tích lũy kinh nghiệm mới tỏa sáng rực rỡ.

## Hợp mệnh

Người mệnh **Kim, Thủy, Thổ** (tương sinh hoặc tương đồng với Vũ Khúc): công
danh tài lộc tốt nhất.`,
  },

  {
    id: 'vu-khuc-tai-menh-dac-su-nghiep',
    title: 'Vũ Khúc Đắc tại Mệnh - Sự nghiệp',
    sao: ['Vũ Khúc'],
    cung: ['Mệnh'],
    trangThai: ['Đắc', 'Miếu', 'Vượng'],
    doUuTien: 85,
    tomTat: `**Vũ Khúc Đắc/Miếu/Vượng tại Mệnh:** **suốt đời giàu sang**, tiền
bạc dư dả, được nắm giữ tiền bạc, có **uy danh lừng lẫy, sự nghiệp lớn lao**.`,
  },

  {
    id: 'vu-khuc-tai-menh-ham-su-nghiep',
    title: 'Vũ Khúc Hãm tại Mệnh - Sự nghiệp',
    sao: ['Vũ Khúc'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    doUuTien: 85,
    tomTat: `**Vũ Khúc Hãm địa tại Mệnh:** **bất đắc chí**, công danh trắc trở,
tiền bạc khó kiếm, **phá tán tổ nghiệp**, phải **ly hương tự lập**, không nhờ
được người thân.`,
  },

  {
    id: 'vu-khuc-tai-menh-suu-mui-su-nghiep',
    title: 'Vũ Khúc tại Mệnh ở Sửu / Mùi - Sự nghiệp',
    sao: ['Vũ Khúc'],
    cung: ['Mệnh'],
    chi: ['Sửu', 'Mùi'],
    doUuTien: 85,
    tomTat: `**Vũ Khúc tại Mệnh ở Sửu / Mùi:** lúc thiếu thời thì **no ấm**, nhưng
**chẳng mấy khi xứng ý toại lòng** về công danh tiền bạc. **Sau 30 tuổi mới
tốt**, càng về già càng tốt.`,
  },

  // ============================================================
  // 6. Nữ mệnh Vũ Khúc
  // ============================================================
  {
    id: 'vu-khuc-nu-menh',
    title: 'Vũ Khúc - Nữ mệnh',
    sao: ['Vũ Khúc'],
    cung: ['Mệnh'],
    gioiTinh: 'Nữ',
    doUuTien: 82,
    tomTat: `**Phụ nữ Vũ Khúc cư Mệnh** — **"Giỏi việc nước, đảm việc nhà"**:
**tài giỏi, đảm đang, gan dạ, can trường**, vừa tháo vát vừa biết quán xuyến.

**TÍNH CÔ ĐỘC** đặc biệt bất lợi cho nữ mệnh:
- Thường **trắc trở, lận đận tình duyên**
- **Đặt công việc lên trước tình cảm** — coi trọng vật chất và độc lập tài chính
- Trong gia đình dễ **"đoạt quyền chồng"**: bất hòa
- Tính bảo thủ, **không thích giao tiếp / ngại thể hiện tình cảm**: khoảng cách
  hôn nhân

**Lời khuyên:** cần **cân bằng công việc và tình cảm**, chịu khó **sẻ chia, mềm
mỏng** thì hôn nhân vẫn ấm êm.

- Cần **NHIỀU sao tốt đẹp** trong lá số thì duyên nợ mới tốt, giàu sang.`,
  },

  // ============================================================
  // 7. Vũ Khúc tại Mệnh - phúc thọ tai họa
  // ============================================================
  {
    id: 'vu-khuc-tai-menh-phuc-tho',
    title: 'Vũ Khúc tại Mệnh - Phúc thọ & tai họa (đặc tính chung)',
    sao: ['Vũ Khúc'],
    cung: ['Mệnh'],
    doUuTien: 75,
    tomTat: `**Vũ Khúc cư Mệnh** chủ yếu mang **tính cô độc** — dù nam hay nữ đều
**trắc trở, lận đận tình duyên**, ít hạnh phúc gia đình.`,
  },

  {
    id: 'vu-khuc-tai-menh-phuc-tho-cat-tinh',
    title: 'Vũ Khúc + Hóa Lộc / Lộc Tồn / Khôi Việt / Ân Quang tại Mệnh',
    sao: ['Vũ Khúc'],
    cung: ['Mệnh'],
    ketHop: ['Hóa Lộc', 'Lộc Tồn', 'Thiên Khôi', 'Thiên Việt', 'Ân Quang'],
    doUuTien: 70,
    tomTat: `**Vũ Khúc + Hóa Lộc / Lộc Tồn / Khôi Việt / Ân Quang tại Mệnh:**
đem nhiều **may mắn**.`,
  },

  {
    id: 'vu-khuc-tai-menh-phuc-tho-sat-tinh',
    title: 'Vũ Khúc + Sát tinh đồng cung tại Mệnh',
    sao: ['Vũ Khúc'],
    cung: ['Mệnh'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `**Vũ Khúc + Sát tinh đồng cung** (Kình Đà, Hỏa Linh, Không Kiếp)
**tại Mệnh:** cẩn trọng **vận hạn về tiền**, dễ vướng rắc rối / khó khăn công việc.`,
  },

  // ============================================================
  // 8. Bộ sao TỐT của Vũ Khúc
  // ============================================================
  {
    id: 'vu-khuc-bo-sao-tot',
    title: 'Vũ Khúc - Bộ sao TỐT (đặc tính chung)',
    sao: ['Vũ Khúc'],
    doUuTien: 50,
    tomTat: `**Bộ sao tốt của Vũ Khúc:** kết hợp với Văn Khúc, Lộc Tồn, Thiên Mã,
Hóa Quyền, Thiên Phủ + Tử Tướng, hoặc Tấu Thư + Đào Hồng đều tạo cách cục đẹp.

Xem từng tổ hợp cụ thể trong các luận giải riêng.`,
  },

  {
    id: 'vu-khuc-bo-sao-tot-van-khuc',
    title: 'Vũ Khúc + Văn Khúc đắc địa',
    sao: ['Vũ Khúc'],
    ketHop: ['Văn Khúc'],
    doUuTien: 45,
    tomTat: `**Vũ Khúc + Văn Khúc đắc địa:** thông minh học rộng, **bán văn bán
võ** — võ nghiệp ở văn phòng, tham mưu, thiết kế.`,
  },

  {
    id: 'vu-khuc-bo-sao-tot-loc-ton-thien-ma',
    title: 'Vũ Khúc + Lộc Tồn + Thiên Mã',
    sao: ['Vũ Khúc'],
    ketHop: ['Lộc Tồn', 'Thiên Mã'],
    doUuTien: 45,
    tomTat: `**Vũ Khúc + Lộc Tồn + Thiên Mã:** **lập nghiệp xa quê**, rất thịnh
vượng.`,
  },

  {
    id: 'vu-khuc-bo-sao-tot-loc-ton-thien-ma-dan',
    title: 'Vũ Khúc + Lộc Tồn + Thiên Mã ở Dần',
    sao: ['Vũ Khúc'],
    chi: ['Dần'],
    ketHop: ['Lộc Tồn', 'Thiên Mã'],
    doUuTien: 50,
    tomTat: `**Vũ Khúc + Lộc Tồn + Thiên Mã ở cung Dần:** sự nghiệp **rất lớn
ở tha hương**.`,
  },

  {
    id: 'vu-khuc-bo-sao-tot-loc-ton-hoa-quyen-dan-than',
    title: 'Vũ Khúc + Lộc Tồn + Hóa Quyền ở Dần / Thân',
    sao: ['Vũ Khúc'],
    chi: ['Dần', 'Thân'],
    ketHop: ['Lộc Tồn', 'Hóa Quyền'],
    doUuTien: 45,
    tomTat: `**Vũ Khúc + Lộc Tồn + Hóa Quyền ở Dần / Thân:** **HẾT SỨC GIÀU CÓ**.`,
  },

  {
    id: 'vu-khuc-bo-sao-tot-hoa-quyen-nu-menh',
    title: 'Vũ Khúc + Hóa Quyền (nữ mệnh)',
    sao: ['Vũ Khúc'],
    ketHop: ['Hóa Quyền'],
    gioiTinh: 'Nữ',
    doUuTien: 50,
    tomTat: `**Nữ mệnh — Vũ Khúc + Hóa Quyền:** **khôn ngoan tần tảo**, **gây
dựng sự nghiệp cho chồng**, chồng phải nể sợ.`,
  },

  {
    id: 'vu-khuc-bo-sao-tot-thien-phu-tu-tuong',
    title: 'Vũ Khúc + Thiên Phủ + Tử Tướng',
    sao: ['Vũ Khúc'],
    ketHop: ['Thiên Phủ', 'Tử Vi', 'Thiên Tướng'],
    doUuTien: 45,
    tomTat: `**Vũ Khúc + Thiên Phủ + Tử Vi / Thiên Tướng:** **phú quý và thọ**.`,
  },

  {
    id: 'vu-khuc-bo-sao-tot-tau-thu-dao-hong-thien-hy',
    title: 'Vũ Khúc + Tấu Thư + Đào Hồng + Thiên Hỷ',
    sao: ['Vũ Khúc'],
    ketHop: ['Tấu Thư', 'Đào Hoa', 'Hồng Loan', 'Thiên Hỷ'],
    doUuTien: 45,
    tomTat: `**Vũ Khúc + Tấu Thư + Đào Hoa + Hồng Loan + Thiên Hỷ:** **ca sĩ,
kịch sĩ giỏi; thợ may khéo**.`,
  },

  {
    id: 'vu-khuc-bo-sao-tot-thien-hinh-thien-rieu-tau-thu',
    title: 'Vũ Khúc + Thiên Hình + Thiên Riêu + Tấu Thư',
    sao: ['Vũ Khúc'],
    ketHop: ['Thiên Hình', 'Thiên Riêu', 'Tấu Thư'],
    doUuTien: 45,
    tomTat: `**Vũ Khúc + Thiên Hình + Thiên Riêu + Tấu Thư:** **thợ mộc giỏi**.`,
  },

  // ============================================================
  // 9. Bộ sao XẤU của Vũ Khúc
  // ============================================================
  {
    id: 'vu-khuc-bo-sao-xau',
    title: 'Vũ Khúc - Bộ sao XẤU (đặc tính chung)',
    sao: ['Vũ Khúc'],
    doUuTien: 50,
    tomTat: `**Bộ sao xấu của Vũ Khúc:** đặc biệt cẩn trọng các tổ hợp với Phá
Quân, Thất Sát + Liêm Trinh, Kình Đà, Kiếp Sát, hoặc Hóa Kỵ.

**Vũ Khúc HÃM + Kiếp Sát đồng cung + Kình Dương chiếu:** **rất gian ác bất lương,
giết người không gớm tay, khát máu**.

Xem các tổ hợp cụ thể trong các luận giải riêng.`,
  },

  {
    id: 'vu-khuc-bo-sao-xau-pha-quan-ty-hoi',
    title: 'Vũ Khúc + Phá Quân ở Tỵ / Hợi',
    sao: ['Vũ Khúc'],
    chi: ['Tỵ', 'Hợi'],
    ketHop: ['Phá Quân'],
    doUuTien: 45,
    tomTat: `**Vũ Khúc + Phá Quân ở Tỵ / Hợi:** tham lận, **bất lương**, lập
nghiệp xa, suốt đời vất vả lao khổ — **không giữ được nghiệp tổ**, phá tán đến hết.`,
  },

  {
    id: 'vu-khuc-bo-sao-xau-sat-pha-liem-mao',
    title: 'Vũ Khúc + Thất Sát + Phá Quân + Liêm Trinh ở Mão',
    sao: ['Vũ Khúc'],
    chi: ['Mão'],
    ketHop: ['Thất Sát', 'Phá Quân', 'Liêm Trinh'],
    doUuTien: 45,
    tomTat: `**Vũ Khúc + Thất Sát + Phá Quân + Liêm Trinh ở Mão:** **tai nạn
điện lửa, sấm sét, bệnh thần kinh, cô đơn, bần hàn**.`,
  },

  {
    id: 'vu-khuc-bo-sao-xau-kinh-da-pha-quan',
    title: 'Vũ Khúc + Kình Dương + Đà La + Phá Quân',
    sao: ['Vũ Khúc'],
    ketHop: ['Kình Dương', 'Đà La', 'Phá Quân'],
    doUuTien: 45,
    tomTat: `**Vũ Khúc + Kình Dương + Đà La + Phá Quân:** **bị khốn hại vì tiền**.`,
  },

  {
    id: 'vu-khuc-bo-sao-xau-hoa-ky',
    title: 'Vũ Khúc + Hóa Kỵ',
    sao: ['Vũ Khúc'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 45,
    tomTat: `**Vũ Khúc + Hóa Kỵ:** sự nghiệp đầu tư kinh thương lận đận: **không
hợp kinh doanh**, chỉ nên theo công nghiệp / kỹ thuật / võ nghiệp.`,
  },

  // ============================================================
  // 10. Vũ Phủ Tý / Ngọ tại Mệnh
  // ============================================================
  {
    id: 'vu-khuc-menh-ty-ngo-vu-phu',
    title: 'Vũ Phủ cư Mệnh tại Tý / Ngọ',
    sao: ['Vũ Khúc', 'Thiên Phủ'],
    cung: ['Mệnh'],
    chi: ['Tý', 'Ngọ'],
    ketHop: ['Vũ Phủ', 'Vũ Khúc Thiên Phủ đồng cung'],
    doUuTien: 92,
    tomTat: `**Vũ Khúc + Thiên Phủ đồng cung tại Tý / Ngọ** = cách **"Vũ Phủ"**.

Tài Tinh + Lộc Khố cùng cung: **cực giàu, có khả năng quản lý tài chính tuyệt
vời**, **giữ được tổ nghiệp**, sự nghiệp **đường công danh dễ toại nguyện**.

Phù hợp: **buôn bán, kinh doanh, công kỹ nghệ, pha chế chế biến**.`,
  },

  {
    id: 'vu-khuc-menh-ty-ngo-vu-phu-nu-hoa-ky',
    title: 'Nữ - Vũ Phủ cư Mệnh tại Tý/Ngọ + Hóa Kỵ',
    sao: ['Vũ Khúc', 'Thiên Phủ'],
    cung: ['Mệnh'],
    chi: ['Tý', 'Ngọ'],
    gioiTinh: 'Nữ',
    ketHop: ['Vũ Phủ', 'Hóa Kỵ'],
    doUuTien: 88,
    tomTat: `**Nữ mệnh — Vũ Phủ Tý/Ngọ + Hóa Kỵ:** **hôn nhân đứt đoạn / sinh
ly**, không hạnh phúc đến già.`,
  },

  // ============================================================
  // 11. Vũ Tướng Dần / Thân tại Mệnh
  // ============================================================
  {
    id: 'vu-khuc-menh-dan-than-vu-tuong',
    title: 'Vũ Tướng cư Mệnh tại Dần / Thân',
    sao: ['Vũ Khúc', 'Thiên Tướng'],
    cung: ['Mệnh'],
    chi: ['Dần', 'Thân'],
    ketHop: ['Vũ Tướng', 'Vũ Khúc Thiên Tướng đồng cung'],
    doUuTien: 92,
    tomTat: `**Vũ Khúc + Thiên Tướng đồng cung tại Dần / Thân** = cách **"Vũ Tướng"**
(Thiên Tướng tại Dần Thân là MIẾU ĐỊA).

Tài Tinh + Ấn Tinh: có **sức mạnh thực thi kèm tài lộc**, **quan trường hay
thương nghiệp đều đắc lợi**.

**Vũ Khúc Hóa Kỵ** đồng độ: tính chất Thiên Tướng biến **xấu**, chỉ hợp
với nghề chuyên môn để mưu sinh.`,
  },

  // ============================================================
  // 12. Vũ Tham Sửu / Mùi tại Mệnh
  // ============================================================
  {
    id: 'vu-khuc-menh-suu-mui-vu-tham',
    title: 'Vũ Tham cư Mệnh tại Sửu / Mùi',
    sao: ['Vũ Khúc', 'Tham Lang'],
    cung: ['Mệnh'],
    chi: ['Sửu', 'Mùi'],
    ketHop: ['Vũ Tham', 'Vũ Khúc Tham Lang đồng cung'],
    doUuTien: 92,
    tomTat: `**Vũ Khúc + Tham Lang đồng cung tại Sửu / Mùi** = cách **"Vũ Tham"**.

**Rất hợp nghề kinh doanh, làm thợ khéo, công kỹ nghệ**, có **tinh thần nghệ sĩ**.

**Đặc trưng:** thành công **CHẬM** — phải sau **30 tuổi** mới phát triển. Có
nhà đất tổ tiên nhưng phải **tự tay tạo dựng** mới lớn lao. Càng lớn tuổi càng
**nhiều nhà cửa**.`,
  },

  {
    id: 'vu-khuc-menh-suu-mui-vu-tham-loc',
    title: 'Vũ Tham cư Mệnh tại Sửu / Mùi + Lộc Tồn + Hóa Lộc',
    sao: ['Vũ Khúc', 'Tham Lang'],
    cung: ['Mệnh'],
    chi: ['Sửu', 'Mùi'],
    ketHop: ['Lộc Tồn', 'Hóa Lộc'],
    doUuTien: 87,
    tomTat: `**Vũ Tham Sửu/Mùi + Lộc Tồn + Hóa Lộc:** sự nghiệp tiền bạc
**phát triển nhanh chóng**, hậu vận **có của ăn của để**.`,
  },

  {
    id: 'vu-khuc-menh-suu-mui-vu-tham-nu-hoa-ky',
    title: 'Nữ - Vũ Tham cư Mệnh tại Sửu/Mùi + Hóa Kỵ',
    sao: ['Vũ Khúc', 'Tham Lang'],
    cung: ['Mệnh'],
    chi: ['Sửu', 'Mùi'],
    gioiTinh: 'Nữ',
    ketHop: ['Vũ Tham', 'Hóa Kỵ'],
    doUuTien: 88,
    tomTat: `**Nữ mệnh — Vũ Tham Sửu/Mùi + Hóa Kỵ:** cảnh báo **bạn đời phá
gia, hao tài**.`,
  },

  // ============================================================
  // 13. Vũ Sát Mão / Dậu tại Mệnh
  // ============================================================
  {
    id: 'vu-khuc-menh-mao-dau-vu-sat',
    title: 'Vũ Sát cư Mệnh tại Mão / Dậu',
    sao: ['Vũ Khúc', 'Thất Sát'],
    cung: ['Mệnh'],
    chi: ['Mão', 'Dậu'],
    ketHop: ['Vũ Sát', 'Vũ Khúc Thất Sát đồng cung'],
    doUuTien: 90,
    tomTat: `**Vũ Khúc + Thất Sát đồng cung tại Mão / Dậu** = cách **"Vũ Sát"**.

**Thành công trong công danh sự nghiệp**, nhưng **PHẢI ĐI XA mới tốt**. Đường
công danh **tuổi trẻ lên xuống thất thường**, **càng lớn tuổi sự nghiệp càng tốt**.

Hợp ngành nghề: **quân sự, kỹ thuật, công kỹ nghệ, thầu khoán, xây dựng, địa ốc**.`,
  },

  // ============================================================
  // 14. Vũ Phá Tỵ / Hợi tại Mệnh - cách XẤU
  // ============================================================
  {
    id: 'vu-khuc-menh-ty-hoi-vu-pha',
    title: 'Vũ Phá cư Mệnh tại Tỵ / Hợi - Cách XẤU',
    sao: ['Vũ Khúc', 'Phá Quân'],
    cung: ['Mệnh'],
    chi: ['Tỵ', 'Hợi'],
    ketHop: ['Vũ Phá', 'Vũ Khúc Phá Quân đồng cung'],
    doUuTien: 90,
    tomTat: `**Vũ Khúc + Phá Quân đồng cung tại Tỵ / Hợi** = cách **"Vũ Phá"**
— **CÁCH XẤU NHẤT** của Vũ Khúc (Vũ Khúc tại Tỵ/Hợi đã là HÃM ĐỊA).

- **Tham lận, bất lương**
- **Lập nghiệp ở xa**, suốt đời **vất vả, lao khổ**
- **KHÔNG giữ được nghiệp tổ** — phá tán cho đến hết

- **Đi vào quan chức không tốt** — chỉ hợp với **làm ăn mua bán** (nhưng vẫn
nhiều rủi ro).`,
  },

  // ============================================================
  // 15. Vũ Khúc đơn thủ tại Thìn / Tuất
  // ============================================================
  {
    id: 'vu-khuc-menh-thin-tuat',
    title: 'Vũ Khúc đơn thủ cư Mệnh tại Thìn / Tuất',
    sao: ['Vũ Khúc'],
    cung: ['Mệnh'],
    chi: ['Thìn', 'Tuất'],
    doUuTien: 90,
    tomTat: `**Vũ Khúc đơn thủ tại Thìn / Tuất** — **MIẾU ĐỊA**, vị trí đẹp.

Cơ nghiệp tiền nhân để lại **rất lớn lao**, càng về sau càng **thịnh vượng**.`,
  },

  {
    id: 'vu-khuc-tai-phu-the-thin-tuat',
    title: 'Vũ Khúc tại Phu Thê ở Thìn / Tuất',
    sao: ['Vũ Khúc'],
    cung: ['Phu Thê'],
    chi: ['Thìn', 'Tuất'],
    doUuTien: 82,
    tomTat: `**Vũ Khúc tại Phu Thê ở Thìn / Tuất:** nên **lập gia đình muộn** hoặc
lấy người **bằng tuổi** để được hưởng **giàu sang nhờ đối tượng**.`,
  },

  {
    id: 'vu-khuc-tai-huynh-de-thin-tuat-cat',
    title: 'Vũ Khúc + cát tinh tại Huynh Đệ ở Thìn / Tuất',
    sao: ['Vũ Khúc'],
    cung: ['Huynh Đệ'],
    chi: ['Thìn', 'Tuất'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 75,
    tomTat: `**Vũ Khúc + cát tinh tại Huynh Đệ ở Thìn / Tuất:** anh em **hòa
hợp**, dù ít trợ giúp nhưng **tình cảm gắn bó**.`,
  },

  // ============================================================
  // 16. Vũ Khúc ở Phụ Mẫu
  // ============================================================
  {
    id: 'vu-khuc-tai-phu-mau',
    title: 'Vũ Khúc tại Phụ Mẫu (đặc tính chung)',
    sao: ['Vũ Khúc'],
    cung: ['Phụ Mẫu'],
    doUuTien: 78,
    tomTat: `**Vũ Khúc tại Phụ Mẫu:** cha mẹ **giỏi kinh doanh, buôn bán**, có
**điều kiện kinh tế khá giả**.

Vì là **sao hình khắc** — tình cảm cha mẹ - con cái **không nồng ấm**, ít
gần gũi.`,
  },

  {
    id: 'vu-khuc-tai-phu-mau-pha-quan',
    title: 'Vũ Khúc + Phá Quân tại Phụ Mẫu',
    sao: ['Vũ Khúc'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Phá Quân'],
    doUuTien: 73,
    tomTat: `**Vũ Khúc + Phá Quân tại Phụ Mẫu:** cha mẹ **bất hòa**, thọ duyên
không bền, thọ mệnh không cao.`,
  },

  {
    id: 'vu-khuc-tai-phu-mau-co-qua-dau-quan-thien-hinh',
    title: 'Vũ Khúc + Cô Quả / Đẩu Quân / Thiên Hình tại Phụ Mẫu',
    sao: ['Vũ Khúc'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Cô Thần', 'Quả Tú', 'Đẩu Quân', 'Thiên Hình'],
    doUuTien: 73,
    tomTat: `**Vũ Khúc + Cô Thần / Quả Tú / Đẩu Quân / Thiên Hình tại Phụ Mẫu:**
cha mẹ **khó sống với nhau đến già**.`,
  },

  // ============================================================
  // 17. Vũ Khúc ở Phúc Đức
  // ============================================================
  {
    id: 'vu-khuc-tai-phuc-duc',
    title: 'Vũ Khúc tại Phúc Đức (chung)',
    sao: ['Vũ Khúc'],
    cung: ['Phúc Đức'],
    doUuTien: 73,
    tomTat: `**Vũ Khúc tại Phúc Đức:**

Dòng họ có người **góa chồng, cô đơn**.

Mồ mả tổ tiên thường ở **xa, riêng lẻ**, ít được con cháu quan tâm chăm sóc.`,
  },
  {
    id: 'vu-khuc-tai-phuc-duc-co-qua-tang-mon',
    title: 'Vũ Khúc tại Phúc Đức + Cô Quả/Tang Môn - Góa chồng cô đơn',
    sao: ['Vũ Khúc'],
    cung: ['Phúc Đức'],
    ketHop: ['Cô Thần', 'Quả Tú', 'Tang Môn'],
    doUuTien: 68,
    tomTat: `**Vũ Khúc + Cô Thần / Quả Tú / Tang Môn tại Phúc Đức:** dòng họ
có người **góa chồng, cô đơn** rất rõ rệt.`,
  },

  {
    id: 'vu-khuc-tai-phuc-duc-hoa-ky',
    title: 'Vũ Khúc + Hóa Kỵ tại Phúc Đức',
    sao: ['Vũ Khúc'],
    cung: ['Phúc Đức'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 68,
    tomTat: `**Vũ Khúc + Hóa Kỵ tại Phúc Đức:** **hao tốn tiền bạc**.`,
  },

  {
    id: 'vu-khuc-tai-phuc-duc-mieu-vuong',
    title: 'Vũ Khúc Miếu/Vượng tại Phúc Đức',
    sao: ['Vũ Khúc'],
    cung: ['Phúc Đức'],
    trangThai: ['Miếu', 'Vượng'],
    doUuTien: 76,
    tomTat: `**Vũ Khúc Miếu / Vượng tại Phúc Đức:** dòng họ có nhiều người **kinh
doanh giàu có**, cuộc sống thuận lợi.`,
  },

  {
    id: 'vu-khuc-tai-phuc-duc-ham',
    title: 'Vũ Khúc Hãm tại Phúc Đức',
    sao: ['Vũ Khúc'],
    cung: ['Phúc Đức'],
    trangThai: ['Hãm'],
    doUuTien: 76,
    tomTat: `**Vũ Khúc Hãm địa tại Phúc Đức:** **hao tổn tinh thần**, dễ phải
suy nghĩ lo lắng.`,
  },

  // ============================================================
  // 18. Vũ Khúc ở Điền Trạch - VỊ TRÍ ĐẮC ĐỊA NHẤT
  // ============================================================
  {
    id: 'vu-khuc-tai-dien-trach',
    title: 'Vũ Khúc tại Điền Trạch - Vị trí ĐẮC ĐỊA NHẤT (đặc tính chung)',
    sao: ['Vũ Khúc'],
    cung: ['Điền Trạch'],
    doUuTien: 85,
    tomTat: `**Cung Điền Trạch là vị trí ĐẮC ĐỊA NHẤT của Vũ Khúc:**

> Vũ Khúc mà đóng cung Điền,
> Phú gia địch quốc vượng quyền hào môn

Chủ mệnh **lắm đất nhiều nhà**, có khả năng **tích tụ điền sản lớn**.

- **Miếu địa:** thừa kế **sản nghiệp lớn của cha ông**, gặp Lộc tinh / tá cát có
  thể mua thêm phát triển
- Thuận lợi **xây dựng, mua bán đất đai**

Dễ bị ảnh hưởng **phong thủy**.
Vì tính cô độc: nhà cửa **ít người, không khí lạnh lẽo**.`,
  },
  {
    id: 'vu-khuc-tai-dien-trach-hoa-ky',
    title: 'Vũ Khúc tại Điền Trạch + Hóa Kỵ - Phong thủy bất lợi',
    sao: ['Vũ Khúc'],
    cung: ['Điền Trạch'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 80,
    tomTat: `**Vũ Khúc + Hóa Kỵ tại Điền Trạch:** rất dễ bị ảnh hưởng **phong
thủy** xấu — nhà cửa, đất đai, mộ phần.`,
  },

  {
    id: 'vu-khuc-tai-dien-trach-thin-tuat',
    title: 'Vũ Khúc đơn thủ tại Điền Trạch ở Thìn / Tuất',
    sao: ['Vũ Khúc'],
    cung: ['Điền Trạch'],
    chi: ['Thìn', 'Tuất'],
    doUuTien: 85,
    tomTat: `**Vũ Khúc đơn thủ tại Điền Trạch ở Thìn / Tuất:** cơ nghiệp tổ tiên
**rất lớn lao**, càng về sau càng thịnh vượng.`,
  },

  {
    id: 'vu-khuc-tai-dien-trach-thien-phu',
    title: 'Vũ Khúc + Thiên Phủ tại Điền Trạch',
    sao: ['Vũ Khúc'],
    cung: ['Điền Trạch'],
    ketHop: ['Thiên Phủ'],
    doUuTien: 83,
    tomTat: `**Vũ Khúc + Thiên Phủ tại Điền Trạch:** giữ gìn được tổ nghiệp, nếu
không hưởng điền sản thì cũng thừa hưởng **nghề nghiệp của cha mẹ, dòng họ**. Về
sau làm nên sự nghiệp nhà đất.`,
  },

  {
    id: 'vu-khuc-tai-dien-trach-tham-lang',
    title: 'Vũ Khúc + Tham Lang tại Điền Trạch',
    sao: ['Vũ Khúc'],
    cung: ['Điền Trạch'],
    ketHop: ['Tham Lang'],
    doUuTien: 83,
    tomTat: `**Vũ Khúc + Tham Lang tại Điền Trạch:** có nhà đất tổ tiên, nhưng
phải **tự tay tạo dựng** mới lớn lao. **Càng lớn tuổi càng nhiều nhà cửa**.`,
  },

  {
    id: 'vu-khuc-tai-dien-trach-thien-tuong',
    title: 'Vũ Khúc + Thiên Tướng tại Điền Trạch',
    sao: ['Vũ Khúc'],
    cung: ['Điền Trạch'],
    ketHop: ['Thiên Tướng'],
    doUuTien: 83,
    tomTat: `**Vũ Khúc + Thiên Tướng tại Điền Trạch:** nhà đất ban đầu **mua vào
bán ra thất thường**, càng lớn tuổi càng nhiều.`,
  },

  {
    id: 'vu-khuc-tai-dien-trach-that-sat',
    title: 'Vũ Khúc + Thất Sát tại Điền Trạch',
    sao: ['Vũ Khúc'],
    cung: ['Điền Trạch'],
    ketHop: ['Thất Sát'],
    doUuTien: 83,
    tomTat: `**Vũ Khúc + Thất Sát tại Điền Trạch:** **không / có rất ít điền
sản**, hoặc nhà tổ tiên do hoàn cảnh phải bỏ. **Về già mới có nơi ăn chốn ở chắc
chắn**.`,
  },

  // ============================================================
  // 19. Vũ Khúc ở Quan Lộc
  // ============================================================
  {
    id: 'vu-khuc-tai-quan-loc',
    title: 'Vũ Khúc tại Quan Lộc (đặc tính chung)',
    sao: ['Vũ Khúc'],
    cung: ['Quan Lộc'],
    doUuTien: 85,
    tomTat: `**Vũ Khúc tại Quan Lộc:** rất tốt cho sự nghiệp.

**Bản Mệnh hành Thổ / Thủy / Kim** + Vũ Khúc đắc địa + cát tinh: **sự nghiệp
công danh vô cùng hiển đạt**.

**2 lĩnh vực chính:**
1. **Kinh doanh, tài chính, vận tải, vàng bạc, khoa học kỹ thuật** (Kim)
2. **Quân đội, công an, cảnh sát, pháp luật** (cần quyền uy + kỷ luật)`,
  },

  {
    id: 'vu-khuc-tai-quan-loc-loc-quyen',
    title: 'Vũ Khúc + Lộc Tồn / Hóa Lộc / Hóa Quyền tại Quan Lộc',
    sao: ['Vũ Khúc'],
    cung: ['Quan Lộc'],
    ketHop: ['Lộc Tồn', 'Hóa Lộc', 'Hóa Quyền'],
    doUuTien: 80,
    tomTat: `**Vũ Khúc + Lộc Tồn / Hóa Lộc / Hóa Quyền tại Quan Lộc:** sự nghiệp
**hiển đạt, địa vị cao**.`,
  },

  {
    id: 'vu-khuc-tai-quan-loc-hoa-linh',
    title: 'Vũ Khúc + Hỏa / Linh tại Quan Lộc',
    sao: ['Vũ Khúc'],
    cung: ['Quan Lộc'],
    ketHop: ['Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 80,
    tomTat: `**Vũ Khúc + Hỏa Tinh / Linh Tinh tại Quan Lộc:** **mất chức / thất
nghiệp ít nhất 1 lần**.`,
  },

  {
    id: 'vu-khuc-tai-quan-loc-hoa-ky',
    title: 'Vũ Khúc + Hóa Kỵ tại Quan Lộc',
    sao: ['Vũ Khúc'],
    cung: ['Quan Lộc'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 80,
    tomTat: `**Vũ Khúc + Hóa Kỵ tại Quan Lộc:** không hợp kinh doanh / đầu tư
tài chính: chỉ nên **công nghiệp / kỹ thuật / võ nghiệp**.`,
  },

  {
    id: 'vu-khuc-tai-quan-loc-thien-phu',
    title: 'Vũ Khúc + Thiên Phủ tại Quan Lộc',
    sao: ['Vũ Khúc'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Phủ'],
    doUuTien: 80,
    tomTat: `**Vũ Khúc + Thiên Phủ tại Quan Lộc:** đường công danh **dễ toại
nguyện**, tài hoa, hoặc **buôn bán / kinh doanh / công kỹ nghệ / pha chế chế biến**
đều phát tài.`,
  },

  {
    id: 'vu-khuc-tai-quan-loc-thien-tuong',
    title: 'Vũ Khúc + Thiên Tướng tại Quan Lộc',
    sao: ['Vũ Khúc'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Tướng'],
    doUuTien: 80,
    tomTat: `**Vũ Khúc + Thiên Tướng tại Quan Lộc:** **quan trường hay thương
nghiệp đều đắc lợi**.`,
  },

  {
    id: 'vu-khuc-tai-quan-loc-that-sat',
    title: 'Vũ Khúc + Thất Sát tại Quan Lộc',
    sao: ['Vũ Khúc'],
    cung: ['Quan Lộc'],
    ketHop: ['Thất Sát'],
    doUuTien: 80,
    tomTat: `**Vũ Khúc + Thất Sát tại Quan Lộc:** **thành công trong công danh sự
nghiệp** nhưng **phải đi xa** mới tốt. Tuổi trẻ lên xuống thất thường. Hợp **quân
sự, kỹ thuật, công kỹ nghệ, thầu khoán, xây dựng, địa ốc**.`,
  },

  {
    id: 'vu-khuc-tai-quan-loc-pha-quan',
    title: 'Vũ Khúc + Phá Quân tại Quan Lộc',
    sao: ['Vũ Khúc'],
    cung: ['Quan Lộc'],
    ketHop: ['Phá Quân'],
    doUuTien: 80,
    tomTat: `**Vũ Khúc + Phá Quân tại Quan Lộc:** **đi vào quan chức không tốt**
bằng làm ăn mua bán.`,
  },

  {
    id: 'vu-khuc-tai-quan-loc-tham-lang',
    title: 'Vũ Khúc + Tham Lang tại Quan Lộc',
    sao: ['Vũ Khúc'],
    cung: ['Quan Lộc'],
    ketHop: ['Tham Lang'],
    doUuTien: 80,
    tomTat: `**Vũ Khúc + Tham Lang tại Quan Lộc:** rất hợp **nghề kinh doanh,
thợ khéo, công kỹ nghệ**, có **tinh thần nghệ sĩ** — nhưng phải **sau 30 tuổi**.`,
  },

  // ============================================================
  // 20. Vũ Khúc ở Nô Bộc
  // ============================================================
  {
    id: 'vu-khuc-tai-no-boc',
    title: 'Vũ Khúc tại Nô Bộc (đặc tính chung)',
    sao: ['Vũ Khúc'],
    cung: ['Nô Bộc'],
    doUuTien: 70,
    tomTat: `**Vũ Khúc tại Nô Bộc** — vị trí **chưa đẹp** vì Vũ Khúc là **Cô Thần**.`,
  },

  {
    id: 'vu-khuc-tai-no-boc-ty-ngo',
    title: 'Vũ Khúc tại Nô Bộc ở Tý / Ngọ',
    sao: ['Vũ Khúc'],
    cung: ['Nô Bộc'],
    chi: ['Tý', 'Ngọ'],
    doUuTien: 75,
    tomTat: `**Vũ Khúc tại Nô Bộc ở Tý / Ngọ:** nhiều **bạn bè tài giỏi**, được
hỗ trợ.`,
  },

  {
    id: 'vu-khuc-tai-no-boc-tham-lang',
    title: 'Vũ Khúc + Tham Lang tại Nô Bộc',
    sao: ['Vũ Khúc'],
    cung: ['Nô Bộc'],
    ketHop: ['Tham Lang'],
    doUuTien: 70,
    tomTat: `**Vũ Khúc + Tham Lang tại Nô Bộc:** phần nhiều là **bạn xã giao**,
không giúp đỡ được nhau.`,
  },

  {
    id: 'vu-khuc-tai-no-boc-hoa-loc-ta-huu',
    title: 'Vũ Khúc + Hóa Lộc + Tả Hữu tại Nô Bộc',
    sao: ['Vũ Khúc'],
    cung: ['Nô Bộc'],
    ketHop: ['Hóa Lộc', 'Tả Phù', 'Hữu Bật'],
    doUuTien: 70,
    tomTat: `**Vũ Khúc + Hóa Lộc + Tả Phù / Hữu Bật tại Nô Bộc:** có **thực
quyền**, được kính trọng — nếu thiếu Tả Hữu thì phải **bôn ba tự lực**.`,
  },

  {
    id: 'vu-khuc-tai-no-boc-sat-pha-sat-tinh',
    title: 'Vũ Khúc + Thất Sát / Phá Quân / Sát tinh tại Nô Bộc',
    sao: ['Vũ Khúc'],
    cung: ['Nô Bộc'],
    ketHop: ['Thất Sát', 'Phá Quân', 'Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 70,
    tomTat: `**Vũ Khúc + Thất Sát / Phá Quân / Sát tinh tại Nô Bộc:** dễ **bị
bạn bè phản bội, lợi dụng tiền bạc**, "làm ơn mắc oán".`,
  },

  {
    id: 'vu-khuc-tai-no-boc-thien-phu',
    title: 'Vũ Khúc + Thiên Phủ tại Nô Bộc',
    sao: ['Vũ Khúc'],
    cung: ['Nô Bộc'],
    ketHop: ['Thiên Phủ'],
    doUuTien: 70,
    tomTat: `**Vũ Khúc + Thiên Phủ tại Nô Bộc:** nhiều **bạn bè tốt, có quyền
thế**, nhận nhiều giúp đỡ.`,
  },

  // ============================================================
  // 21. Vũ Khúc ở Thiên Di
  // ============================================================
  {
    id: 'vu-khuc-tai-thien-di',
    title: 'Vũ Khúc tại Thiên Di (đặc tính chung)',
    sao: ['Vũ Khúc'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Vũ Khúc tại Thiên Di:** **PHẢI ĐI XA làm ăn**.`,
  },

  {
    id: 'vu-khuc-tai-thien-di-dac-cat',
    title: 'Vũ Khúc Đắc + cát tinh tại Thiên Di',
    sao: ['Vũ Khúc'],
    cung: ['Thiên Di'],
    trangThai: ['Đắc', 'Miếu', 'Vượng'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 80,
    tomTat: `**Vũ Khúc Đắc địa + cát tinh tại Thiên Di** (mệnh Thủy / Thổ /
Kim): ra ngoài **buôn bán làm giàu rất dễ dàng**.`,
  },

  {
    id: 'vu-khuc-tai-thien-di-ham',
    title: 'Vũ Khúc Hãm tại Thiên Di',
    sao: ['Vũ Khúc'],
    cung: ['Thiên Di'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `**Vũ Khúc Hãm địa tại Thiên Di** (mệnh khắc): **tiểu thương**, khó
kiếm tiền.`,
  },

  {
    id: 'vu-khuc-tai-thien-di-loc-ma',
    title: 'Vũ Khúc + Lộc Tồn / Hóa Lộc / Thiên Mã tại Thiên Di',
    sao: ['Vũ Khúc'],
    cung: ['Thiên Di'],
    ketHop: ['Lộc Tồn', 'Hóa Lộc', 'Thiên Mã'],
    doUuTien: 75,
    tomTat: `**Vũ Khúc + Lộc Tồn / Hóa Lộc / Thiên Mã tại Thiên Di:** việc ra
ngoài rất **dễ dàng**, hưởng nhiều phúc lộc.`,
  },

  {
    id: 'vu-khuc-tai-thien-di-thien-tuong-cat',
    title: 'Vũ Khúc + Thiên Tướng + cát tại Thiên Di',
    sao: ['Vũ Khúc'],
    cung: ['Thiên Di'],
    ketHop: ['Thiên Tướng'],
    doUuTien: 75,
    tomTat: `**Vũ Khúc + Thiên Tướng + cát tinh tại Thiên Di:** được **đề bạt,
có quý nhân phù trợ**.`,
  },

  {
    id: 'vu-khuc-tai-thien-di-ky-khong-kiep-kinh-da',
    title: 'Vũ Khúc + Hóa Kỵ / Không Kiếp / Kình Đà tại Thiên Di',
    sao: ['Vũ Khúc'],
    cung: ['Thiên Di'],
    ketHop: ['Hóa Kỵ', 'Địa Không', 'Địa Kiếp', 'Kình Dương', 'Đà La'],
    doUuTien: 75,
    tomTat: `**Vũ Khúc + Hóa Kỵ / Địa Không / Địa Kiếp / Kình Dương / Đà La tại
Thiên Di:** dễ **mất tiền**, gặp thị phi tranh chấp.`,
  },

  {
    id: 'vu-khuc-tai-thien-di-sat-pha',
    title: 'Vũ Khúc + Thất Sát / Phá Quân tại Thiên Di',
    sao: ['Vũ Khúc'],
    cung: ['Thiên Di'],
    ketHop: ['Thất Sát', 'Phá Quân'],
    doUuTien: 75,
    tomTat: `**Vũ Khúc + Thất Sát / Phá Quân tại Thiên Di:** ra ngoài **cô độc,
tinh thần bất an**.`,
  },

  // ============================================================
  // 22. Vũ Khúc ở Tật Ách
  // ============================================================
  {
    id: 'vu-khuc-tai-tat-ach',
    title: 'Vũ Khúc tại Tật Ách (đặc tính chung)',
    sao: ['Vũ Khúc'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `**Vũ Khúc tại Tật Ách:** chủ về **bệnh đường hô hấp, khí huyết**. Yếu
tố **Kim** có khí "tiêu sát": dễ tổn thương.

- **Bản mệnh hành Mộc / Hỏa:** bệnh nhiều hơn
- **Hợp bản mệnh + đắc địa:** khí huyết tốt, mạnh khỏe luôn
- **Hãm + khắc bản mệnh:** hay có bệnh **phong hay trĩ**`,
  },

  {
    id: 'vu-khuc-tai-tat-ach-mao',
    title: 'Vũ Khúc Đắc tại Tật Ách ở Mão',
    sao: ['Vũ Khúc'],
    cung: ['Tật Ách'],
    chi: ['Mão'],
    trangThai: ['Đắc'],
    doUuTien: 80,
    tomTat: `**Vũ Khúc Đắc địa tại Tật Ách ở Mão:** bệnh **thần kinh hoặc khí
huyết**.`,
  },

  {
    id: 'vu-khuc-tai-tat-ach-dau',
    title: 'Vũ Khúc tại Tật Ách ở Dậu',
    sao: ['Vũ Khúc'],
    cung: ['Tật Ách'],
    chi: ['Dậu'],
    doUuTien: 80,
    tomTat: `**Vũ Khúc tại Tật Ách ở Dậu:** **nội thương khó chữa**.`,
  },

  {
    id: 'vu-khuc-tai-tat-ach-thien-tuong',
    title: 'Vũ Khúc + Thiên Tướng tại Tật Ách',
    sao: ['Vũ Khúc'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Tướng'],
    doUuTien: 75,
    tomTat: `**Vũ Khúc + Thiên Tướng tại Tật Ách:** có **ám tật**.`,
  },

  {
    id: 'vu-khuc-tai-tat-ach-tham-xuong-khuc',
    title: 'Vũ Khúc + Tham Lang + Xương Khúc tại Tật Ách',
    sao: ['Vũ Khúc'],
    cung: ['Tật Ách'],
    ketHop: ['Tham Lang', 'Văn Xương', 'Văn Khúc'],
    doUuTien: 75,
    tomTat: `**Vũ Khúc + Tham Lang + Văn Xương / Văn Khúc tại Tật Ách:** nhiều
**nốt ruồi**, bệnh **lông tóc**.`,
  },

  {
    id: 'vu-khuc-tai-tat-ach-that-sat',
    title: 'Vũ Khúc + Thất Sát tại Tật Ách',
    sao: ['Vũ Khúc'],
    cung: ['Tật Ách'],
    ketHop: ['Thất Sát'],
    doUuTien: 75,
    tomTat: `**Vũ Khúc + Thất Sát tại Tật Ách:** bệnh **bộ máy tiêu hóa**.`,
  },

  {
    id: 'vu-khuc-tai-tat-ach-long-tri',
    title: 'Vũ Khúc + Long Trì tại Tật Ách',
    sao: ['Vũ Khúc'],
    cung: ['Tật Ách'],
    ketHop: ['Long Trì'],
    doUuTien: 75,
    tomTat: `**Vũ Khúc + Long Trì tại Tật Ách:** có **nốt ruồi đỏ**.`,
  },

  {
    id: 'vu-khuc-tai-tat-ach-thien-rieu',
    title: 'Vũ Khúc + Thiên Riêu tại Tật Ách',
    sao: ['Vũ Khúc'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Riêu'],
    doUuTien: 75,
    tomTat: `**Vũ Khúc + Thiên Riêu tại Tật Ách:** bệnh **tê thấp / phù chân tay**.`,
  },

  {
    id: 'vu-khuc-tai-tat-ach-rieu-viet-pha-toai',
    title: 'Vũ Khúc + Thiên Riêu + Thiên Việt + Phá Toái tại Tật Ách',
    sao: ['Vũ Khúc'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Riêu', 'Thiên Việt', 'Phá Toái'],
    doUuTien: 75,
    tomTat: `**Vũ Khúc + Thiên Riêu + Thiên Việt + Phá Toái tại Tật Ách:** **bị câm**.`,
  },

  {
    id: 'vu-khuc-tai-tat-ach-kinh-da-thien-hinh',
    title: 'Vũ Khúc + Kình Đà / Thiên Hình tại Tật Ách',
    sao: ['Vũ Khúc'],
    cung: ['Tật Ách'],
    ketHop: ['Kình Dương', 'Đà La', 'Thiên Hình'],
    doUuTien: 75,
    tomTat: `**Vũ Khúc + Kình Dương / Đà La / Thiên Hình tại Tật Ách:** dễ
**phẫu thuật / tổn thương nặng**.`,
  },

  {
    id: 'vu-khuc-tai-tat-ach-hoa-ma-khoc-hu',
    title: 'Vũ Khúc + Hỏa Tinh / Thiên Mã / Thiên Khốc / Thiên Hư tại Tật Ách',
    sao: ['Vũ Khúc'],
    cung: ['Tật Ách'],
    ketHop: ['Hỏa Tinh', 'Thiên Mã', 'Thiên Khốc', 'Thiên Hư'],
    doUuTien: 75,
    tomTat: `**Vũ Khúc + Hỏa Tinh / Thiên Mã / Thiên Khốc / Thiên Hư tại Tật
Ách:** thường **chảy máu mũi**.`,
  },

  {
    id: 'vu-khuc-tai-tat-ach-khong-kiep',
    title: 'Vũ Khúc + Địa Không / Địa Kiếp tại Tật Ách',
    sao: ['Vũ Khúc'],
    cung: ['Tật Ách'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 75,
    tomTat: `**Vũ Khúc + Địa Không / Địa Kiếp tại Tật Ách:** bệnh **khí quản**
(lao, viêm phổi); sát tinh nhẹ chỉ bị **ho**.`,
  },

  // ============================================================
  // 23. Vũ Khúc ở Tài Bạch - VỊ TRÍ HỢP VỊ
  // ============================================================
  {
    id: 'vu-khuc-tai-tai-bach',
    title: 'Vũ Khúc tại Tài Bạch - Vị trí HỢP VỊ (đặc tính chung)',
    sao: ['Vũ Khúc'],
    cung: ['Tài Bạch'],
    doUuTien: 80,
    tomTat: `**Vũ Khúc là sao chủ cung Tài Bạch**: đóng tại đây **rất hợp vị**.

**Sao khắc:** Phá Quân đồng cung; Đại Tiểu Hao, Tuần Triệt, Không Kiếp, Kình
Đà, Phục Binh, Hóa Kỵ.`,
  },

  {
    id: 'vu-khuc-tai-tai-bach-mieu-vuong',
    title: 'Vũ Khúc Miếu/Vượng tại Tài Bạch',
    sao: ['Vũ Khúc'],
    cung: ['Tài Bạch'],
    trangThai: ['Miếu', 'Vượng'],
    doUuTien: 86,
    tomTat: `**Vũ Khúc Miếu / Vượng tại Tài Bạch:** **tiền tài dồi dào**, thuận
lợi kiếm tiền, **năng lực quản lý tài chính tốt**.`,
  },

  {
    id: 'vu-khuc-tai-tai-bach-loc-ta-huu',
    title: 'Vũ Khúc + Hóa Lộc / Lộc Tồn / Tả Hữu tại Tài Bạch',
    sao: ['Vũ Khúc'],
    cung: ['Tài Bạch'],
    ketHop: ['Hóa Lộc', 'Lộc Tồn', 'Tả Phù', 'Hữu Bật'],
    doUuTien: 83,
    tomTat: `**Vũ Khúc + Hóa Lộc / Lộc Tồn / Tả Hữu tại Tài Bạch:** **đại phú
đại quý**.`,
  },

  {
    id: 'vu-khuc-tai-tai-bach-loc-ma-hoa-loc',
    title: 'Vũ Khúc + Lộc Tồn + Thiên Mã + Hóa Lộc tại Tài Bạch',
    sao: ['Vũ Khúc'],
    cung: ['Tài Bạch'],
    ketHop: ['Lộc Tồn', 'Thiên Mã', 'Hóa Lộc'],
    doUuTien: 83,
    tomTat: `**Vũ Khúc + Lộc Tồn + Thiên Mã + Hóa Lộc tại Tài Bạch:** cách cục
**CỰ PHÚ**, rất giàu có.`,
  },

  {
    id: 'vu-khuc-tai-tai-bach-tu-vi-thien-tuong',
    title: 'Vũ Khúc + Tử Vi / Thiên Tướng hội chiếu tại Tài Bạch',
    sao: ['Vũ Khúc'],
    cung: ['Tài Bạch'],
    ketHop: ['Tử Vi', 'Thiên Tướng'],
    doUuTien: 83,
    tomTat: `**Vũ Khúc + Tử Vi / Thiên Tướng hội chiếu tại Tài Bạch:** thịnh
vượng vật chất.`,
  },

  {
    id: 'vu-khuc-tai-tai-bach-tham-lang-loc',
    title: 'Vũ Khúc + Tham Lang + Lộc Tồn / Hóa Lộc tại Tài Bạch',
    sao: ['Vũ Khúc'],
    cung: ['Tài Bạch'],
    ketHop: ['Tham Lang', 'Lộc Tồn', 'Hóa Lộc'],
    doUuTien: 83,
    tomTat: `**Vũ Khúc + Tham Lang + Lộc Tồn / Hóa Lộc tại Tài Bạch:** sự nghiệp
tiền bạc **phát triển nhanh**.`,
  },

  {
    id: 'vu-khuc-tai-tai-bach-kinh-da',
    title: 'Vũ Khúc + Kình Đà tại Tài Bạch',
    sao: ['Vũ Khúc'],
    cung: ['Tài Bạch'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 83,
    tomTat: `**Vũ Khúc + Kình Dương / Đà La tại Tài Bạch:** **vì tiền mà gặp
tai họa, tranh chấp**.`,
  },

  {
    id: 'vu-khuc-tai-tai-bach-khong-kiep',
    title: 'Vũ Khúc + Không Kiếp tại Tài Bạch',
    sao: ['Vũ Khúc'],
    cung: ['Tài Bạch'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 83,
    tomTat: `**Vũ Khúc + Địa Không / Địa Kiếp tại Tài Bạch:** **kiếm tiền bận
rộn nhưng khó tích lũy, phá hao nhiều, dễ phá sản vì cờ bạc**.`,
  },

  // ============================================================
  // 24. Vũ Khúc ở Tử Tức
  // ============================================================
  {
    id: 'vu-khuc-tai-tu-tuc',
    title: 'Vũ Khúc tại Tử Tức (đặc tính chung)',
    sao: ['Vũ Khúc'],
    cung: ['Tử Tức'],
    doUuTien: 78,
    tomTat: `**Vũ Khúc KHÔNG thích cung Tử Tức** — chủ về **hiếm muộn, ít con**.

- **Đẻ con gái tốt hơn con trai**: nên đẻ con gái trước
- Con cái **mạnh mẽ, cương cường, không hợp tính cha mẹ**`,
  },

  {
    id: 'vu-khuc-tai-tu-tuc-cat-tinh',
    title: 'Vũ Khúc + Cát tinh tại Tử Tức',
    sao: ['Vũ Khúc'],
    cung: ['Tử Tức'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 73,
    tomTat: `**Vũ Khúc + Cát tinh tại Tử Tức:** chỉ giúp **đông con hơn**, không
cải thiện địa vị / may mắn.`,
  },

  {
    id: 'vu-khuc-tai-tu-tuc-tham-sat',
    title: 'Vũ Khúc + Tham Lang / Thất Sát tại Tử Tức',
    sao: ['Vũ Khúc'],
    cung: ['Tử Tức'],
    ketHop: ['Tham Lang', 'Thất Sát'],
    doUuTien: 73,
    tomTat: `**Vũ Khúc + Tham Lang / Thất Sát tại Tử Tức:** **khó có con / sinh
con muộn**; **Thất Sát** thì con **chơi bời phá tán** hoặc **khắc khẩu cha mẹ**.`,
  },

  {
    id: 'vu-khuc-tai-tu-tuc-thien-phu',
    title: 'Vũ Khúc + Thiên Phủ tại Tử Tức',
    sao: ['Vũ Khúc'],
    cung: ['Tử Tức'],
    ketHop: ['Thiên Phủ'],
    doUuTien: 73,
    tomTat: `**Vũ Khúc + Thiên Phủ tại Tử Tức:** con cái **thông minh ngoan
ngoãn**, chủ **2 con**.`,
  },

  // ============================================================
  // 25. Vũ Khúc ở Phu Thê - VỊ TRÍ BẤT LỢI NHẤT
  // ============================================================
  {
    id: 'vu-khuc-tai-phu-the',
    title: 'Vũ Khúc tại Phu Thê - Vị trí BẤT LỢI NHẤT (đặc tính chung)',
    sao: ['Vũ Khúc'],
    cung: ['Phu Thê'],
    doUuTien: 85,
    tomTat: `**Cung Phu Thê là vị trí BẤT LỢI NHẤT của Vũ Khúc** — cho thấy
**hình khắc, cô đơn**, dễ chia ly hoặc hôn nhân thiếu bền vững.

- Cần **NHIỀU cát tinh** thì hôn nhân mới tốt đẹp
-: **Lời khuyên: KẾT HÔN MUỘN** để có sự chín chắn, giảm hình khắc.

Xem entry chuyên biệt cho từng tổ hợp chi và bộ kết hợp cụ thể.`,
  },

  {
    id: 'vu-khuc-tai-phu-the-vu-phu-ty-ngo-hoa-ky',
    title: 'Vũ Phủ Tý/Ngọ + Hóa Kỵ tại Phu Thê',
    sao: ['Vũ Khúc', 'Thiên Phủ'],
    cung: ['Phu Thê'],
    chi: ['Tý', 'Ngọ'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 80,
    tomTat: `**Vũ Phủ Tý/Ngọ + Hóa Kỵ tại Phu Thê:** nữ **hôn nhân đứt
đoạn**, nam **vợ chồng sinh ly**. Xem entry chuyên biệt cho từng giới tính.`,
  },

  {
    id: 'vu-khuc-tai-phu-the-vu-phu-ty-ngo-hoa-ky-nu',
    title: 'Vũ Phủ Tý/Ngọ + Hóa Kỵ tại Phu Thê - Nữ mệnh',
    sao: ['Vũ Khúc', 'Thiên Phủ'],
    cung: ['Phu Thê'],
    chi: ['Tý', 'Ngọ'],
    gioiTinh: 'Nữ',
    ketHop: ['Hóa Kỵ'],
    doUuTien: 78,
    tomTat: `**Nữ mệnh — Vũ Phủ Tý/Ngọ + Hóa Kỵ tại Phu Thê:** **hôn nhân
đứt đoạn**.`,
  },

  {
    id: 'vu-khuc-tai-phu-the-vu-phu-ty-ngo-hoa-ky-nam',
    title: 'Vũ Phủ Tý/Ngọ + Hóa Kỵ tại Phu Thê - Nam mệnh',
    sao: ['Vũ Khúc', 'Thiên Phủ'],
    cung: ['Phu Thê'],
    chi: ['Tý', 'Ngọ'],
    gioiTinh: 'Nam',
    ketHop: ['Hóa Kỵ'],
    doUuTien: 78,
    tomTat: `**Nam mệnh — Vũ Phủ Tý/Ngọ + Hóa Kỵ tại Phu Thê:** **vợ chồng
sinh ly**.`,
  },

  {
    id: 'vu-khuc-tai-phu-the-vu-tham-suu-mui-hoa-ky',
    title: 'Vũ Tham Sửu/Mùi + Hóa Kỵ tại Phu Thê',
    sao: ['Vũ Khúc', 'Tham Lang'],
    cung: ['Phu Thê'],
    chi: ['Sửu', 'Mùi'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 80,
    tomTat: `**Vũ Tham Sửu/Mùi + Hóa Kỵ tại Phu Thê:** **bạn đời phá gia,
hao tài**; thêm văn / đào hoa: **bạn đời thay lòng đổi dạ**, có người thứ 3.`,
  },

  {
    id: 'vu-khuc-tai-phu-the-thin-tuat',
    title: 'Vũ Khúc tại Phu Thê ở Thìn/Tuất',
    sao: ['Vũ Khúc'],
    cung: ['Phu Thê'],
    chi: ['Thìn', 'Tuất'],
    doUuTien: 80,
    tomTat: `**Vũ Khúc tại Phu Thê ở Thìn/Tuất:** nên **lập gia đình muộn / lấy
người bằng tuổi**: hưởng **giàu sang nhờ đối tượng**.`,
  },

  {
    id: 'vu-khuc-tai-phu-the-hoa-loc',
    title: 'Vũ Khúc + Hóa Lộc tại Phu Thê',
    sao: ['Vũ Khúc'],
    cung: ['Phu Thê'],
    ketHop: ['Hóa Lộc'],
    doUuTien: 80,
    tomTat: `**Vũ Khúc + Hóa Lộc tại Phu Thê:** **vợ tài giỏi hơn chồng**.`,
  },

  {
    id: 'vu-khuc-tai-phu-the-pha-quan',
    title: 'Vũ Khúc + Phá Quân tại Phu Thê',
    sao: ['Vũ Khúc'],
    cung: ['Phu Thê'],
    ketHop: ['Phá Quân'],
    doUuTien: 80,
    tomTat: `**Vũ Khúc + Phá Quân tại Phu Thê:** vợ chồng đều tài giỏi nhưng
**xung khắc lớn**, dễ xa cách / **nhiều lần đò**.`,
  },

  // ============================================================
  // 26. Vũ Khúc ở Huynh Đệ
  // ============================================================
  {
    id: 'vu-khuc-tai-huynh-de',
    title: 'Vũ Khúc tại Huynh Đệ (đặc tính chung)',
    sao: ['Vũ Khúc'],
    cung: ['Huynh Đệ'],
    doUuTien: 73,
    tomTat: `**Vũ Khúc tại Huynh Đệ:** **anh chị em ít, không hợp tính nhau**.

- **Anh em theo võ nghiệp / lực lượng vũ trang / kỹ thuật:** giảm hình khắc`,
  },

  {
    id: 'vu-khuc-tai-huynh-de-sat-tinh',
    title: 'Vũ Khúc + Sát tinh tại Huynh Đệ',
    sao: ['Vũ Khúc'],
    cung: ['Huynh Đệ'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `**Vũ Khúc + Sát tinh tại Huynh Đệ:** **xích mích do tranh chấp,
đoạt quyền**.`,
  },

  {
    id: 'vu-khuc-tai-huynh-de-phu-tuong',
    title: 'Vũ Khúc + Thiên Phủ / Thiên Tướng tại Huynh Đệ',
    sao: ['Vũ Khúc'],
    cung: ['Huynh Đệ'],
    ketHop: ['Thiên Phủ', 'Thiên Tướng'],
    doUuTien: 70,
    tomTat: `**Vũ Khúc + Thiên Phủ / Thiên Tướng tại Huynh Đệ:** anh chị em đều
**khá giả, có quyền có tài**.`,
  },

  {
    id: 'vu-khuc-tai-huynh-de-pha-quan',
    title: 'Vũ Khúc + Phá Quân tại Huynh Đệ',
    sao: ['Vũ Khúc'],
    cung: ['Huynh Đệ'],
    ketHop: ['Phá Quân'],
    doUuTien: 70,
    tomTat: `**Vũ Khúc + Phá Quân tại Huynh Đệ:** hay **xô xát**.`,
  },

  {
    id: 'vu-khuc-tai-huynh-de-that-sat',
    title: 'Vũ Khúc + Thất Sát tại Huynh Đệ',
    sao: ['Vũ Khúc'],
    cung: ['Huynh Đệ'],
    ketHop: ['Thất Sát'],
    doUuTien: 70,
    tomTat: `**Vũ Khúc + Thất Sát tại Huynh Đệ:** cần **xa cách nhau** để không
khắc khẩu xung đột.`,
  },

  // ============================================================
  // 27. Đại vận / Hạn gặp Vũ Khúc
  // ============================================================
  {
    id: 'vu-khuc-dai-van-han',
    title: 'Đại vận & hạn gặp Vũ Khúc',
    sao: ['Vũ Khúc'],
    doUuTien: 50,
    tomTat: `**Hạn đến Vũ Khúc:**

- **Đắc địa + cát tinh:** thuận lợi tiền bạc, công danh

**Hãm địa hoặc + sát tinh:** vận hạn về tiền, dễ phá tán, vướng tranh chấp.`,
  },
  {
    id: 'vu-khuc-han-loc-ma-co-hy-hong',
    title: 'Hạn Vũ Khúc + Lộc Tồn/Mã/Cơ/Hỷ/Hồng - Thành gia thất',
    sao: ['Vũ Khúc'],
    ketHop: ['Lộc Tồn', 'Thiên Mã', 'Thiên Cơ', 'Thiên Hỷ', 'Hồng Loan'],
    doUuTien: 45,
    tomTat: `**Hạn Vũ Khúc + Lộc Tồn + Thiên Mã + Thiên Cơ + Thiên Hỷ + Hồng
Loan:** **THÀNH GIA THẤT** (lập gia đình).`,
  },
];
