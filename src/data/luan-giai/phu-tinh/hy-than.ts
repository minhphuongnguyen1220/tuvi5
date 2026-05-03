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

**Tên gọi:** **"THẦN VUI VẺ"** — đóng cung nào thường **làm TỐT cho cung
đó**, **vui vẻ ở cung đó**.

**Đặc tính:** **may mắn, vui vẻ, tăng tài lộc, cưới gả, sinh con, thi cử đỗ
đạt**.

**Nguyên tắc luận đoán:** Hỷ Thần đóng ở đâu là **BAN SỰ LÀNH** và **lợi**
cho cung đó.`,
  },

  {
    id: 'hy-than-tai-menh',
    title: 'Hỷ Thần tại Mệnh',
    sao: ['Hỷ Thần'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `**Hỷ Thần thủ Mệnh:** người **VUI TÍNH**, có lòng **độ lượng,
bao dung**.

Hay gặp **MAY MẮN** — thể hiện trong:
- **Cưới hỏi**
- **Đỗ đạt**
- **Tài lộc**

- Ảnh hưởng đối cung (Lực Sĩ chiếu) được tách thành luận giải riêng.`,
  },

  {
    id: 'hy-than-tai-menh-khong-kiep-ky',
    title: 'Hỷ Thần tại Mệnh + Không Kiếp + Hóa Kỵ - mụn nhọt búi trĩ',
    sao: ['Hỷ Thần'],
    cung: ['Mệnh'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Hóa Kỵ'],
    doUuTien: 73,
    tomTat: `**Hỷ Thần tại Mệnh + Địa Không / Địa Kiếp + Hóa Kỵ:** dễ bị **MỤN NHỌT, BÚI TRĨ**.`,
  },

  {
    id: 'hy-than-tai-menh-luc-si-thien-di',
    title: 'Hỷ Thần thủ Mệnh + Lực Sĩ ở Thiên Di - giúp người',
    sao: ['Hỷ Thần'],
    cung: ['Mệnh'],
    ketHop: ['Lực Sĩ'],
    doUuTien: 65,
    tomTat: `**Đặc trưng vị thế** — Hỷ Thần thủ Mệnh thì đối cung luôn
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
    tomTat: `**Hỷ Thần thủ Mệnh - Nam mệnh - tướng mạo (theo phú):**
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
    tomTat: `**Hỷ Thần thủ Mệnh - Nữ mệnh - tướng mạo (theo phú):**
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
    tomTat: `**Hỷ Thần cư Phụ Mẫu:** cha mẹ **vui vẻ, hòa đồng**, được nhiều
người **quý mến**.

Cha mẹ **hay chia sẻ, tâm sự** mọi điều với con cái — bầu không khí gia
đình **ấm áp, nhiều tiếng cười**.`,
  },

  {
    id: 'hy-than-tai-phu-mau-xuong-khuc-quang-quy-khoi-viet',
    title: 'Hỷ Thần tại Phụ Mẫu + Xương Khúc / Quang Quý / Khôi Việt - tuổi thơ hạnh phúc',
    sao: ['Hỷ Thần'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Ân Quang', 'Thiên Quý', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 67,
    tomTat: `**Hỷ Thần tại Phụ Mẫu + Văn Xương / Văn Khúc / Ân Quang / Thiên Quý / Thiên Khôi / Thiên Việt:** tuổi thơ đương số đủ đầy hạnh phúc, được dạy dỗ nâng đỡ từ cha mẹ.`,
  },

  {
    id: 'hy-than-tai-phuc-duc',
    title: 'Hỷ Thần tại Phúc Đức',
    sao: ['Hỷ Thần'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `**Hỷ Thần cư Phúc Đức:** mọi người trong dòng họ **vui vẻ, thân
thiện**, **quan tâm, quý mến nhau**.

**Đặc trưng mộ phần:** mồ mả ở **bãi đất cát, đất nóng**.

Chủ mệnh được tiếp thêm **động lực từ suy nghĩ tích cực**, **lạc quan** giúp
vượt qua thử thách.`,
  },

  {
    id: 'hy-than-tai-phuc-duc-thien-hy',
    title: 'Hỷ Thần tại Phúc Đức + Thiên Hỷ - mồ kết mả phát',
    sao: ['Hỷ Thần'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Hỷ'],
    doUuTien: 70,
    tomTat: `**Hỷ Thần tại Phúc Đức + Thiên Hỷ** (Song Hỷ): nhà dễ có **MỒ KẾT MẢ PHÁT**.`,
  },

  {
    id: 'hy-than-tai-dien-trach',
    title: 'Hỷ Thần tại Điền Trạch',
    sao: ['Hỷ Thần'],
    cung: ['Điền Trạch'],
    doUuTien: 72,
    tomTat: `**Hỷ Thần cư Điền:** xung quanh nhà nhiều nơi **vui chơi, giải
trí**.

Hay được **may mắn về đất cát**, dễ được **CHO, TẶNG của tiền**.

Đất ở thường là nơi **đất NÓNG hay lẫn nhiều CÁT**.`,
  },

  {
    id: 'hy-than-tai-dien-trach-tai-tinh',
    title: 'Hỷ Thần tại Điền Trạch + Tài tinh - kinh doanh giải trí',
    sao: ['Hỷ Thần'],
    cung: ['Điền Trạch'],
    ketHop: ['Vũ Khúc', 'Thiên Phủ', 'Lộc Tồn', 'Hóa Lộc'],
    doUuTien: 67,
    tomTat: `**Hỷ Thần tại Điền Trạch + Tài tinh:** đương số có thể mở **kinh doanh tổ chức sự kiện, nhà hàng, quán hát**.`,
  },

  {
    id: 'hy-than-tai-dien-trach-ky-da-linh-phuc-kiep',
    title: 'Hỷ Thần tại Điền Trạch + Kỵ / Đà / Linh / Phục / Kiếp - mâu thuẫn ngầm',
    sao: ['Hỷ Thần'],
    cung: ['Điền Trạch'],
    ketHop: ['Hóa Kỵ', 'Đà La', 'Linh Tinh', 'Phục Binh', 'Địa Kiếp'],
    doUuTien: 67,
    tomTat: `**Hỷ Thần tại Điền Trạch + Hóa Kỵ / Đà La / Linh Tinh / Phục Binh / Địa Kiếp:** bề ngoài xôm tụ nhưng bên trong **bất an, mâu thuẫn ngầm**, "**bằng mặt không bằng lòng**".`,
  },

  {
    id: 'hy-than-tai-quan-loc',
    title: 'Hỷ Thần tại Quan Lộc',
    sao: ['Hỷ Thần'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `**Hỷ Thần cư Quan:** hay được **MAY MẮN** trong công việc, công
danh — dễ có **TIẾNG TĂM, NỔI TIẾNG**, nhiều người hâm mộ.

**Phù hợp các nghề** liên quan **giải trí, tổ chức sự kiện, vui chơi, nghệ
thuật**.

**Đặc biệt nếu làm BÁC SĨ:** chuyên về **HẬU MÔN TRỰC TRÀNG**.`,
  },

  {
    id: 'hy-than-tai-quan-loc-khoa-viet-thai-duong',
    title: 'Hỷ Thần tại Quan Lộc + Khoa / Việt / Thái Dương - thuận buồm xuôi gió',
    sao: ['Hỷ Thần'],
    cung: ['Quan Lộc'],
    ketHop: ['Hóa Khoa', 'Thiên Việt', 'Thái Dương'],
    doUuTien: 73,
    tomTat: `**Hỷ Thần tại Quan Lộc + Hóa Khoa / Thiên Việt / Thái Dương miếu vượng:** sự nghiệp "**thuận buồm xuôi gió**".`,
  },

  {
    id: 'hy-than-tai-no-boc',
    title: 'Hỷ Thần tại Nô Bộc',
    sao: ['Hỷ Thần'],
    cung: ['Nô Bộc'],
    doUuTien: 70,
    tomTat: `**Hỷ Thần cư Nô:** môi trường có **nhiều bạn bè**, nhiều người
**vui tính, tốt bụng**, hay **giúp đỡ nhau**.

Bạn bè **PHÓNG KHOÁNG**, không toan tính, hay làm vui lòng nhau, **rủ đi
chơi, hội tiệc**.`,
  },

  {
    id: 'hy-than-tai-no-boc-dau-quan-ky-da-phuc',
    title: 'Hỷ Thần tại Nô Bộc + Đẩu Quân / Kỵ / Đà / Phục - bạn bè giả tạo',
    sao: ['Hỷ Thần'],
    cung: ['Nô Bộc'],
    ketHop: ['Đẩu Quân', 'Hóa Kỵ', 'Đà La', 'Phục Binh'],
    doUuTien: 65,
    tomTat: `**Hỷ Thần tại Nô Bộc + Đẩu Quân / Hóa Kỵ / Đà La / Phục Binh:** dễ gặp bạn bè **GIẢ TẠO** — bên ngoài cười nói nhưng **đâm sau lưng**.`,
  },

  {
    id: 'hy-than-tai-thien-di',
    title: 'Hỷ Thần tại Thiên Di',
    sao: ['Hỷ Thần'],
    cung: ['Thiên Di'],
    doUuTien: 72,
    tomTat: `**Hỷ Thần cư Di:** ra ngoài **VUI VẺ, hiền lành**, được nhiều
người **tin tưởng** và gặp **may mắn**, **nhiều người HÂM MỘ, quý mến**.`,
  },

  {
    id: 'hy-than-tai-thien-di-hong-dao',
    title: 'Hỷ Thần tại Thiên Di + Hồng Đào - nổi tiếng',
    sao: ['Hỷ Thần'],
    cung: ['Thiên Di'],
    ketHop: ['Hồng Loan', 'Đào Hoa'],
    doUuTien: 67,
    tomTat: `**Hỷ Thần tại Thiên Di + Hồng Loan + Đào Hoa:** ra ngoài **NỔI TIẾNG**, đi xa **làm nên việc lớn**.`,
  },

  {
    id: 'hy-than-tai-thien-di-linh-phuc-ky',
    title: 'Hỷ Thần tại Thiên Di + Linh / Phục / Kỵ - bị hiểu lầm giả tạo',
    sao: ['Hỷ Thần'],
    cung: ['Thiên Di'],
    ketHop: ['Linh Tinh', 'Phục Binh', 'Hóa Kỵ'],
    doUuTien: 67,
    tomTat: `**Hỷ Thần tại Thiên Di + Linh Tinh / Phục Binh / Hóa Kỵ:** dễ bị hiểu lầm là **sống GIẢ TẠO**.`,
  },

  {
    id: 'hy-than-tai-thien-di-tham-dao',
    title: 'Hỷ Thần tại Thiên Di + Tham / Đào - chốn phong lưu',
    sao: ['Hỷ Thần'],
    cung: ['Thiên Di'],
    ketHop: ['Tham Lang', 'Đào Hoa'],
    doUuTien: 67,
    tomTat: `**Hỷ Thần tại Thiên Di + Tham Lang / Đào Hoa:** bị cuốn vào **chốn phong lưu**, sa đà mối quan hệ phức tạp.`,
  },

  {
    id: 'hy-than-tai-tat-ach',
    title: 'Hỷ Thần tại Tật Ách',
    sao: ['Hỷ Thần'],
    cung: ['Tật Ách'],
    doUuTien: 72,
    tomTat: `**Hỷ Thần cư Tật:** vì **vui chơi, giải trí quá đà** mà dễ mắc
**tai họa**.

Khi mắc bệnh / gặp tai họa thường được **may mắn có người cứu giúp**.`,
  },

  {
    id: 'hy-than-tai-tat-ach-kiep-dieu',
    title: 'Hỷ Thần tại Tật Ách + Địa Kiếp / Điếu Khách - bệnh trĩ',
    sao: ['Hỷ Thần'],
    cung: ['Tật Ách'],
    ketHop: ['Địa Kiếp', 'Điếu Khách'],
    doUuTien: 67,
    tomTat: `**Hỷ Thần tại Tật Ách + Địa Kiếp / Điếu Khách:** dễ có **BỆNH TRĨ, ung nhọt**.`,
  },

  {
    id: 'hy-than-tai-tat-ach-dao-rieu',
    title: 'Hỷ Thần tại Tật Ách + Đào / Riêu - mộng tinh',
    sao: ['Hỷ Thần'],
    cung: ['Tật Ách'],
    ketHop: ['Đào Hoa', 'Thiên Riêu'],
    doUuTien: 67,
    tomTat: `**Hỷ Thần tại Tật Ách + Đào Hoa / Thiên Riêu:** người bệnh **MỘNG TINH**.`,
  },

  {
    id: 'hy-than-tai-tat-ach-tham-dao',
    title: 'Hỷ Thần tại Tật Ách + Tham / Đào - bệnh chăn gối',
    sao: ['Hỷ Thần'],
    cung: ['Tật Ách'],
    ketHop: ['Tham Lang', 'Đào Hoa'],
    doUuTien: 67,
    tomTat: `**Hỷ Thần tại Tật Ách + Tham Lang / Đào Hoa:** vì **chăn gối** mà sinh bệnh.`,
  },

  {
    id: 'hy-than-tai-tai-bach',
    title: 'Hỷ Thần tại Tài Bạch',
    sao: ['Hỷ Thần'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Hỷ Thần cư Tài:** hay được **MAY MẮN VỀ TIỀN BẠC** — hay được
**KHEN THƯỞNG, TRÚNG GIẢI**, được **trao tặng tiền bạc**.

Hay **chi tiêu tiền cho hoạt động giải trí, vui chơi**.

Bản chất "thần vui vẻ" là **NGẪU HỨNG, không đoán trước được**: may mắn
**KHÓ GIỮ LÂU** nếu không biết "liệu cơm gắp mắm".`,
  },

  {
    id: 'hy-than-tai-tai-bach-khoi-viet-loc',
    title: 'Hỷ Thần tại Tài Bạch + Khôi Việt / Hóa Lộc - trúng số',
    sao: ['Hỷ Thần'],
    cung: ['Tài Bạch'],
    ketHop: ['Thiên Khôi', 'Thiên Việt', 'Hóa Lộc'],
    doUuTien: 70,
    tomTat: `**Hỷ Thần tại Tài Bạch + Thiên Khôi / Thiên Việt / Hóa Lộc:** dễ **TRÚNG SỐ**, được lộc bất ngờ.`,
  },

  {
    id: 'hy-than-tai-tu-tuc',
    title: 'Hỷ Thần tại Tử Tức',
    sao: ['Hỷ Thần'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Hỷ Thần cư Tử Tức:** **MAY MẮN về đường con cái**.

Con cái **thông minh, hòa đồng, vui vẻ, hiếu thảo** với cha mẹ — là **niềm tự
hào** của cha mẹ.`,
  },

  {
    id: 'hy-than-tai-tu-tuc-sat-hinh-ky',
    title: 'Hỷ Thần tại Tử Tức + Sát Hình Kỵ - sinh nở thập tử',
    sao: ['Hỷ Thần'],
    cung: ['Tử Tức'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Thiên Hình', 'Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `**Hỷ Thần tại Tử Tức + Sát tinh + Thiên Hình + Hóa Kỵ:** chuyện sinh nở dễ trải qua "**thập tử nhất sinh**".`,
  },

  {
    id: 'hy-than-tai-phu-the',
    title: 'Hỷ Thần tại Phu Thê',
    sao: ['Hỷ Thần'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `**Hỷ Thần cư Phu Thê:** đóng cung nào ban sự lành cho cung đó
ở Phu Thê là **MAY MẮN trong hôn nhân**, dễ gặp người **TƯƠNG ĐẦU Ý HỢP**,
thuận lợi kết hôn và sinh sống.

Bản thân khi kết hôn xong thường gặp **MAY MẮN** từ người hôn phối đem lại.`,
  },

  {
    id: 'hy-than-tai-phu-the-dao-hong',
    title: 'Hỷ Thần tại Phu Thê + Đào Hoa / Hồng Loan - xứng đôi vừa lứa',
    sao: ['Hỷ Thần'],
    cung: ['Phu Thê'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 73,
    tomTat: `**Hỷ Thần tại Phu Thê + Đào Hoa / Hồng Loan:** vợ chồng **xứng đôi vừa lứa, vui vẻ hòa thuận**.`,
  },

  {
    id: 'hy-than-tai-phu-the-xuong-khuc',
    title: 'Hỷ Thần tại Phu Thê + Xương Khúc - năng lượng tích cực',
    sao: ['Hỷ Thần'],
    cung: ['Phu Thê'],
    ketHop: ['Văn Xương', 'Văn Khúc'],
    doUuTien: 73,
    tomTat: `**Hỷ Thần tại Phu Thê + Văn Xương / Văn Khúc:** truyền **năng lượng tích cực** cho nhau.`,
  },

  {
    id: 'hy-than-tai-phu-the-vu-sat-dong-luong-sat-hinh-ky',
    title: 'Hỷ Thần tại Phu Thê + Vũ / Sát / Đồng Lương + Sát Hình Kỵ - niềm vui một mình',
    sao: ['Hỷ Thần'],
    cung: ['Phu Thê'],
    ketHop: ['Vũ Khúc', 'Thất Sát', 'Thiên Đồng', 'Thiên Lương', 'Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Thiên Hình', 'Hóa Kỵ'],
    doUuTien: 73,
    tomTat: `**Hỷ Thần tại Phu Thê + Vũ Khúc / Thất Sát / Thiên Đồng / Thiên Lương + Sát + Thiên Hình + Hóa Kỵ vây chiếu:** vợ chồng **ít chia sẻ niềm vui** với nhau, biến thành **niềm vui MỘT MÌNH**.`,
  },

  {
    id: 'hy-than-tai-huynh-de',
    title: 'Hỷ Thần tại Huynh Đệ',
    sao: ['Hỷ Thần'],
    cung: ['Huynh Đệ'],
    doUuTien: 70,
    tomTat: `**Hỷ Thần cư Huynh Đệ:** anh chị em **VUI TÍNH, tốt bụng**, hay
thích **vui chơi, lạc thú**.`,
  },

  {
    id: 'hy-than-tai-huynh-de-khoa-bang',
    title: 'Hỷ Thần tại Huynh Đệ + Sao khoa bảng - giúp nhau thăng tiến',
    sao: ['Hỷ Thần'],
    cung: ['Huynh Đệ'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Hóa Khoa', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 65,
    tomTat: `**Hỷ Thần tại Huynh Đệ + Sao chủ khoa bảng, danh tiếng (Văn Xương / Văn Khúc / Hóa Khoa / Khôi Việt):** anh em khăng khít, có khả năng **giúp nhau thăng tiến**, đương số được **"thơm lây"**.`,
  },

  {
    id: 'hy-than-tai-huynh-de-thien-rieu',
    title: 'Hỷ Thần tại Huynh Đệ + Thiên Riêu - chơi bời hoang phí',
    sao: ['Hỷ Thần'],
    cung: ['Huynh Đệ'],
    ketHop: ['Thiên Riêu'],
    doUuTien: 65,
    tomTat: `**Hỷ Thần tại Huynh Đệ + Thiên Riêu:** anh chị em có thói **CHƠI BỜI, phóng túng, hoang phí**.`,
  },

  {
    id: 'hy-than-tai-huynh-de-dao-thai-phuc',
    title: 'Hỷ Thần tại Huynh Đệ + Đào + Thai + Phục - dâm ô',
    sao: ['Hỷ Thần'],
    cung: ['Huynh Đệ'],
    ketHop: ['Đào Hoa', 'Thai', 'Phục Binh'],
    doUuTien: 65,
    tomTat: `**Hỷ Thần tại Huynh Đệ + Đào Hoa + Thai + Phục Binh:** anh chị em có thói **DÂM Ô** — trai hoang đãng, gái dẫn đến việc **theo trai bỏ nhà, chửa hoang**.`,
  },

  {
    id: 'hy-than-long-tri-phuong-cac',
    title: 'Hỷ Thần + Long Trì + Phượng Các',
    sao: ['Hỷ Thần'],
    ketHop: ['Long Trì', 'Phượng Các'],
    doUuTien: 65,
    tomTat: `**Hỷ Thần + Long Trì + Phượng Các:** chủ sự **vui mừng**, báo
hiệu **MAY MẮN** về:
- **Thi cử**
- **Công danh**
- **Hôn nhân**
- **Sinh nở**

- **Điềm lành về NHIỀU MẶT**.`,
  },

  {
    id: 'hy-than-long-tri-phuong-cac-xuong-khuc-khoa-khoi-viet',
    title: 'Hỷ Thần + Long Phượng + Xương Khúc + Khoa + Khôi Việt - sổ vàng',
    sao: ['Hỷ Thần'],
    ketHop: ['Long Trì', 'Phượng Các', 'Văn Xương', 'Văn Khúc', 'Hóa Khoa', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 60,
    tomTat: `**Hỷ Thần + Long Trì + Phượng Các + Văn Xương + Văn Khúc + Hóa Khoa + Thiên Khôi + Thiên Việt:** **"hổ mọc thêm cánh"**, đầu đội **SỔ VÀNG**, đạt thành tích cao trong học tập/thi tuyển hoặc **đứng đầu** trong lĩnh vực theo đuổi.`,
  },

  {
    id: 'hy-than-dao-hong',
    title: 'Hỷ Thần + Đào Hoa / Hồng Loan',
    sao: ['Hỷ Thần'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 65,
    tomTat: `**Hỷ Thần + Đào Hoa hoặc Hồng Loan:** có sự **MAY MẮN VỀ TÌNH
DUYÊN, TÌNH ÁI**, dễ **CƯỚI VỢ GẢ CHỒNG**.

- Đặc biệt khi **đại hạn / tiểu hạn** xuất hiện cách này: cưới hỏi là chuyện
**chắc chắn**.`,
  },

  {
    id: 'hy-than-dao-hong-tam-hoa',
    title: 'Hỷ Thần + Đào / Hồng + Tam Hóa - môn đăng hộ đối',
    sao: ['Hỷ Thần'],
    ketHop: ['Đào Hoa', 'Hồng Loan', 'Hóa Khoa', 'Hóa Lộc', 'Hóa Quyền'],
    doUuTien: 60,
    tomTat: `**Hỷ Thần + Đào Hoa / Hồng Loan + Hóa Khoa / Hóa Lộc / Hóa Quyền** nâng đỡ: việc cưới xin "**thiên thời, địa lợi, nhân hòa**", gia đình hai bên vui vẻ, "**môn đăng hộ đối**", mái ấm trọn vẹn.`,
  },

  {
    id: 'hy-than-cat-tinh-xuc-tac',
    title: 'Hỷ Thần + Cát tinh - xúc tác',
    sao: ['Hỷ Thần'],
    doUuTien: 60,
    tomTat: `**Hỷ Thần** khi ghép với các sao tốt sẽ **làm LỢI THÊM cát tinh** — Hỷ Thần là sao "**xúc tác**" cho cát tinh phát huy mạnh hơn.

`,
  },

  {
    id: 'hy-than-thien-ma',
    title: 'Hỷ Thần + Thiên Mã - đắc lợi vận hội',
    sao: ['Hỷ Thần'],
    ketHop: ['Thiên Mã'],
    doUuTien: 55,
    tomTat: `**Hỷ Thần + Thiên Mã:** **đắc lợi về vận hội**.`,
  },

  {
    id: 'hy-than-hoa-loc',
    title: 'Hỷ Thần + Hóa Lộc - đắc lợi tiền bạc',
    sao: ['Hỷ Thần'],
    ketHop: ['Hóa Lộc'],
    doUuTien: 55,
    tomTat: `**Hỷ Thần + Hóa Lộc:** đắc lợi về **TIỀN BẠC**.`,
  },

  {
    id: 'hy-than-phong-cao-quoc-an',
    title: 'Hỷ Thần + Phong Cáo / Quốc Ấn - đắc lợi danh giá',
    sao: ['Hỷ Thần'],
    ketHop: ['Phong Cáo', 'Quốc Ấn'],
    doUuTien: 55,
    tomTat: `**Hỷ Thần + Phong Cáo / Quốc Ấn:** đắc lợi về **DANH GIÁ**.`,
  },

  {
    id: 'hy-than-vao-han',
    title: 'Hỷ Thần vào hạn',
    sao: ['Hỷ Thần'],
    doUuTien: 50,
    tomTat: `**Hạn có Hỷ Thần:** báo hiệu **HỶ SỰ, MAY MẮN**.

- Tùy các sao đi kèm để giải đoán phương diện nào được may mắn.`,
  },

  {
    id: 'hy-than-vao-han-dieu-khach',
    title: 'Hỷ Thần vào hạn + Điếu Khách - may mắn suy giảm',
    sao: ['Hỷ Thần'],
    ketHop: ['Điếu Khách'],
    doUuTien: 45,
    tomTat: `**Hạn có Hỷ Thần + Điếu Khách:** sự may mắn **SUY GIẢM** hoặc **TIÊU TÁN** vì niềm vui dễ từ **bê trễ, ăn chơi, cờ bạc**.`,
  },

  {
    id: 'hy-than-vao-han-hung-tinh',
    title: 'Hỷ Thần vào hạn + Hung tinh - niềm vui biến tướng',
    sao: ['Hỷ Thần'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 45,
    tomTat: `**Hạn có Hỷ Thần + Hung tinh (Lục Sát):** niềm vui dễ **biến tướng** — từ tích cực thành **tích cực độc hại**:
- Suy nghĩ **tiêu cực**, ân hận vì quyết định hấp tấp
- Thất vọng khi sự việc đi **lệch khỏi mong muốn**
- "**Dục tốc bất đạt**" — vui mừng cũng cần giữ **tâm tĩnh tại**`,
  },
];
