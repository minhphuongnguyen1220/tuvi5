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
    tomTat: `**Hỷ Thần** — phụ tinh trong **vòng Lộc Tồn** (vị trí thứ **8**).

**Ngũ hành:** **Hỏa**.

**Hóa khí:** **THIỆN TINH**.

⚡ **Tên gọi:** **"THẦN VUI VẺ"** — đóng cung nào thường **làm TỐT cho cung
đó**, **vui vẻ ở cung đó**.

**Đặc tính:** **may mắn, vui vẻ, tăng tài lộc, cưới gả, sinh con, thi cử đỗ
đạt**.

⚡ **Nguyên tắc luận đoán:** Hỷ Thần đóng ở đâu là **BAN SỰ LÀNH** và **lợi**
cho cung đó.`,
  },

  {
    id: 'hy-than-tai-menh',
    title: 'Hỷ Thần tại Mệnh',
    sao: ['Hỷ Thần'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `🌟 **Hỷ Thần thủ Mệnh:** người **VUI TÍNH**, có lòng **độ lượng,
bao dung**.

🌟 Hay gặp **MAY MẮN** — thể hiện trong:
- **Cưới hỏi**
- **Đỗ đạt**
- **Tài lộc**

⚠️ **+ Không Kiếp + Hóa Kỵ:** dễ bị **MỤN NHỌT, BÚI TRĨ**.

→ Ảnh hưởng đối cung (Lực Sĩ chiếu) được tách thành luận giải riêng.`,
  },

  {
    id: 'hy-than-tai-menh-luc-si-thien-di',
    title: 'Hỷ Thần thủ Mệnh + Lực Sĩ ở Thiên Di - giúp người',
    sao: ['Hỷ Thần'],
    cung: ['Mệnh'],
    ketHop: ['Lực Sĩ'],
    doUuTien: 65,
    tomTat: `⚡ **Đặc trưng vị thế** — Hỷ Thần thủ Mệnh thì đối cung luôn
có Lực Sĩ chiếu về:
- Ra ngoài **TỐT BỤNG**
- Hay **giúp đỡ người khác**
- **Ít tính toán** với người ngoài
- Được nhiều người yêu mến nhờ tinh thần hào hiệp`,
  },

  {
    id: 'hy-than-tai-menh-nam',
    title: 'Hỷ Thần tại Mệnh - tướng nam',
    sao: ['Hỷ Thần'],
    cung: ['Mệnh'],
    gioiTinh: 'Nam',
    doUuTien: 70,
    tomTat: `🌟 **Hỷ Thần thủ Mệnh - Nam mệnh - tướng mạo (theo phú):**
- **Mắt sâu, lông mày rậm** — tướng quý
- Phong thái **vui tươi, độ lượng**
- May mắn trong cưới hỏi, đỗ đạt, tài lộc`,
  },

  {
    id: 'hy-than-tai-menh-nu',
    title: 'Hỷ Thần tại Mệnh - tướng nữ',
    sao: ['Hỷ Thần'],
    cung: ['Mệnh'],
    gioiTinh: 'Nữ',
    doUuTien: 70,
    tomTat: `🌟 **Hỷ Thần thủ Mệnh - Nữ mệnh - tướng mạo (theo phú):**
- **Tươi tắn, thần thái sáng ngời**
- Phong thái **vui tươi, độ lượng**
- May mắn trong cưới hỏi, đỗ đạt, tài lộc`,
  },

  {
    id: 'hy-than-tai-phu-mau',
    title: 'Hỷ Thần tại Phụ Mẫu',
    sao: ['Hỷ Thần'],
    cung: ['Phụ Mẫu'],
    doUuTien: 72,
    tomTat: `🌟 **Hỷ Thần cư Phụ Mẫu:** cha mẹ **vui vẻ, hòa đồng**, được nhiều
người **quý mến**.

🌟 Cha mẹ **hay chia sẻ, tâm sự** mọi điều với con cái — bầu không khí gia
đình **ấm áp, nhiều tiếng cười**.

🌟 **+ Văn Xương / Văn Khúc / Quang Quý / Khôi Việt:** tuổi thơ đương số đủ
đầy hạnh phúc, được dạy dỗ nâng đỡ từ cha mẹ.`,
  },

  {
    id: 'hy-than-tai-phuc-duc',
    title: 'Hỷ Thần tại Phúc Đức',
    sao: ['Hỷ Thần'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `🌟 **Hỷ Thần cư Phúc Đức:** mọi người trong dòng họ **vui vẻ, thân
thiện**, **quan tâm, quý mến nhau**.

⚡ **Đặc trưng mộ phần:** mồ mả ở **bãi đất cát, đất nóng**.

🌟 **+ Thiên Hỷ** (Song Hỷ): nhà dễ có **MỒ KẾT MẢ PHÁT**.

🌟 Chủ mệnh được tiếp thêm **động lực từ suy nghĩ tích cực**, **lạc quan** giúp
vượt qua thử thách.`,
  },

  {
    id: 'hy-than-tai-dien-trach',
    title: 'Hỷ Thần tại Điền Trạch',
    sao: ['Hỷ Thần'],
    cung: ['Điền Trạch'],
    doUuTien: 72,
    tomTat: `🌟 **Hỷ Thần cư Điền:** xung quanh nhà nhiều nơi **vui chơi, giải
trí**.

🌟 **+ Tài tinh:** đương số có thể mở **kinh doanh tổ chức sự kiện, nhà hàng,
quán hát**.

🌟 Hay được **may mắn về đất cát**, dễ được **CHO, TẶNG của tiền**.

⚡ Đất ở thường là nơi **đất NÓNG hay lẫn nhiều CÁT**.

⚠️ **+ Kỵ / Đà / Linh / Phục / Kiếp:** bề ngoài xôm tụ nhưng bên trong **bất
an, mâu thuẫn ngầm**, "**bằng mặt không bằng lòng**".`,
  },

  {
    id: 'hy-than-tai-quan-loc',
    title: 'Hỷ Thần tại Quan Lộc',
    sao: ['Hỷ Thần'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `🌟 **Hỷ Thần cư Quan:** hay được **MAY MẮN** trong công việc, công
danh — dễ có **TIẾNG TĂM, NỔI TIẾNG**, nhiều người hâm mộ.

🌟 **Phù hợp các nghề** liên quan **giải trí, tổ chức sự kiện, vui chơi, nghệ
thuật**.

⚡ **Đặc biệt nếu làm BÁC SĨ:** chuyên về **HẬU MÔN TRỰC TRÀNG**.

🌟 **+ Hóa Khoa / Thiên Việt / Thái Dương miếu vượng:** sự nghiệp "**thuận
buồm xuôi gió**".`,
  },

  {
    id: 'hy-than-tai-no-boc',
    title: 'Hỷ Thần tại Nô Bộc',
    sao: ['Hỷ Thần'],
    cung: ['Nô Bộc'],
    doUuTien: 70,
    tomTat: `🌟 **Hỷ Thần cư Nô:** môi trường có **nhiều bạn bè**, nhiều người
**vui tính, tốt bụng**, hay **giúp đỡ nhau**.

🌟 Bạn bè **PHÓNG KHOÁNG**, không toan tính, hay làm vui lòng nhau, **rủ đi
chơi, hội tiệc**.

⚠️ **+ Đẩu Quân / Hóa Kỵ / Đà La / Phục Binh:** dễ gặp bạn bè **GIẢ TẠO** —
bên ngoài cười nói nhưng **đâm sau lưng**.`,
  },

  {
    id: 'hy-than-tai-thien-di',
    title: 'Hỷ Thần tại Thiên Di',
    sao: ['Hỷ Thần'],
    cung: ['Thiên Di'],
    doUuTien: 72,
    tomTat: `🌟 **Hỷ Thần cư Di:** ra ngoài **VUI VẺ, hiền lành**, được nhiều
người **tin tưởng** và gặp **may mắn**, **nhiều người HÂM MỘ, quý mến**.

🌟 **+ Hồng + Đào:** ra ngoài **NỔI TIẾNG**, đi xa **làm nên việc lớn**.

⚠️ **+ Linh Tinh / Phục Binh / Hóa Kỵ:** dễ bị hiểu lầm là **sống GIẢ TẠO**.

⚠️ **+ Tham Lang / Đào Hoa:** bị cuốn vào **chốn phong lưu**, sa đà mối quan
hệ phức tạp.`,
  },

  {
    id: 'hy-than-tai-tat-ach',
    title: 'Hỷ Thần tại Tật Ách',
    sao: ['Hỷ Thần'],
    cung: ['Tật Ách'],
    doUuTien: 72,
    tomTat: `⚠️ **Hỷ Thần cư Tật:** vì **vui chơi, giải trí quá đà** mà dễ mắc
**tai họa**.

🌟 Khi mắc bệnh / gặp tai họa thường được **may mắn có người cứu giúp**.

⚠️ **+ Địa Kiếp / Điếu Khách:** dễ có **BỆNH TRĨ, ung nhọt**.

⚠️ **+ Đào / Riêu:** người bệnh **MỘNG TINH**.

⚠️ **+ Tham Lang / Đào Hoa:** vì **chăn gối** mà sinh bệnh.`,
  },

  {
    id: 'hy-than-tai-tai-bach',
    title: 'Hỷ Thần tại Tài Bạch',
    sao: ['Hỷ Thần'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `🌟 **Hỷ Thần cư Tài:** hay được **MAY MẮN VỀ TIỀN BẠC** — hay được
**KHEN THƯỞNG, TRÚNG GIẢI**, được **trao tặng tiền bạc**.

🌟 **+ Khôi Việt / Hóa Lộc:** dễ **TRÚNG SỐ**, được lộc bất ngờ.

⚠️ Hay **chi tiêu tiền cho hoạt động giải trí, vui chơi**.

⚠️ Bản chất "thần vui vẻ" là **NGẪU HỨNG, không đoán trước được** → may mắn
**KHÓ GIỮ LÂU** nếu không biết "liệu cơm gắp mắm".`,
  },

  {
    id: 'hy-than-tai-tu-tuc',
    title: 'Hỷ Thần tại Tử Tức',
    sao: ['Hỷ Thần'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `🌟 **Hỷ Thần cư Tử Tức:** **MAY MẮN về đường con cái**.

Con cái **thông minh, hòa đồng, vui vẻ, hiếu thảo** với cha mẹ — là **niềm tự
hào** của cha mẹ.

⚠️ **+ Sát Hình Kỵ:** chuyện sinh nở dễ trải qua "**thập tử nhất sinh**".`,
  },

  {
    id: 'hy-than-tai-phu-the',
    title: 'Hỷ Thần tại Phu Thê',
    sao: ['Hỷ Thần'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `🌟 **Hỷ Thần cư Phu Thê:** đóng cung nào ban sự lành cho cung đó →
ở Phu Thê là **MAY MẮN trong hôn nhân**, dễ gặp người **TƯƠNG ĐẦU Ý HỢP**,
thuận lợi kết hôn và sinh sống.

🌟 Bản thân khi kết hôn xong thường gặp **MAY MẮN** từ người hôn phối đem lại.

🌟 **+ Đào Hoa / Hồng Loan:** vợ chồng **xứng đôi vừa lứa, vui vẻ hòa thuận**.

🌟 **+ Văn Xương / Văn Khúc:** truyền **năng lượng tích cực** cho nhau.

⚠️ **+ Vũ Khúc / Thất Sát / Đồng Lương + Sát Hình Kỵ vây chiếu:** vợ chồng
**ít chia sẻ niềm vui** với nhau, biến thành **niềm vui MỘT MÌNH**.`,
  },

  {
    id: 'hy-than-tai-huynh-de',
    title: 'Hỷ Thần tại Huynh Đệ',
    sao: ['Hỷ Thần'],
    cung: ['Huynh Đệ'],
    doUuTien: 70,
    tomTat: `🌟 **Hỷ Thần cư Huynh Đệ:** anh chị em **VUI TÍNH, tốt bụng**, hay
thích **vui chơi, lạc thú**.

🌟 **+ Sao chủ khoa bảng, danh tiếng:** anh em khăng khít, có khả năng **giúp
nhau thăng tiến**, đương số được **"thơm lây"**.

⚠️ **+ Thiên Riêu:** anh chị em có thói **CHƠI BỜI, phóng túng, hoang phí**.

⚠️ **+ Đào + Thai + Phục Binh:** anh chị em có thói **DÂM Ô** — trai hoang
đãng, gái dẫn đến việc **theo trai bỏ nhà, chửa hoang**.`,
  },

  {
    id: 'hy-than-long-tri-phuong-cac',
    title: 'Hỷ Thần + Long Trì + Phượng Các',
    sao: ['Hỷ Thần'],
    ketHop: ['Long Trì', 'Phượng Các'],
    doUuTien: 65,
    tomTat: `🌟 **Hỷ Thần + Long Trì + Phượng Các:** chủ sự **vui mừng**, báo
hiệu **MAY MẮN** về:
- **Thi cử**
- **Công danh**
- **Hôn nhân**
- **Sinh nở**

→ **Điềm lành về NHIỀU MẶT**.

🌟 **+ Văn Xương + Văn Khúc + Hóa Khoa + Khôi Việt:** **"hổ mọc thêm cánh"**,
đầu đội **SỔ VÀNG**, đạt thành tích cao trong học tập/thi tuyển hoặc **đứng
đầu** trong lĩnh vực theo đuổi.`,
  },

  {
    id: 'hy-than-dao-hong',
    title: 'Hỷ Thần + Đào Hoa / Hồng Loan',
    sao: ['Hỷ Thần'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 65,
    tomTat: `🌟 **Hỷ Thần + Đào Hoa hoặc Hồng Loan:** có sự **MAY MẮN VỀ TÌNH
DUYÊN, TÌNH ÁI**, dễ **CƯỚI VỢ GẢ CHỒNG**.

→ Đặc biệt khi **đại hạn / tiểu hạn** xuất hiện cách này → cưới hỏi là chuyện
**chắc chắn**.

🌟 **+ Khoa / Lộc / Quyền** nâng đỡ: việc cưới xin "**thiên thời, địa lợi,
nhân hòa**", gia đình hai bên vui vẻ, "**môn đăng hộ đối**", mái ấm trọn vẹn.`,
  },

  {
    id: 'hy-than-thien-ma-loc-phong-quoc',
    title: 'Hỷ Thần + Thiên Mã / Hóa Lộc / Phong Cáo / Quốc Ấn',
    sao: ['Hỷ Thần'],
    ketHop: ['Thiên Mã', 'Hóa Lộc', 'Phong Cáo', 'Quốc Ấn'],
    doUuTien: 60,
    tomTat: `🌟 **Hỷ Thần** khi ghép với các sao tốt sẽ **làm LỢI THÊM cát tinh**:

- **+ Thiên Mã:** **đắc lợi về vận hội**
- **+ Hóa Lộc:** đắc lợi về **TIỀN BẠC**
- **+ Phong Cáo / Quốc Ấn:** đắc lợi về **DANH GIÁ**

→ Hỷ Thần là sao "**xúc tác**" cho cát tinh phát huy mạnh hơn.`,
  },

  {
    id: 'hy-than-vao-han',
    title: 'Hỷ Thần vào hạn',
    sao: ['Hỷ Thần'],
    doUuTien: 50,
    tomTat: `🌟 **Hạn có Hỷ Thần:** báo hiệu **HỶ SỰ, MAY MẮN**.

→ Tùy các sao đi kèm để giải đoán phương diện nào được may mắn.

⚠️ **+ Điếu Khách:** sự may mắn **SUY GIẢM** hoặc **TIÊU TÁN** vì niềm vui dễ
từ **bê trễ, ăn chơi, cờ bạc**.

⚠️ **+ Hung tinh:** niềm vui dễ **biến tướng** — từ tích cực thành **tích cực
độc hại**:
- Suy nghĩ **tiêu cực**, ân hận vì quyết định hấp tấp
- Thất vọng khi sự việc đi **lệch khỏi mong muốn**
- "**Dục tốc bất đạt**" — vui mừng cũng cần giữ **tâm tĩnh tại**`,
  },
];
