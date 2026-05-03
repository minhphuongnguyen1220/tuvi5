import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO LỘC TỒN - Bắc Đẩu Tinh, Tài Tinh / Quý Tinh
 * (Đầu vòng Lộc Tồn, đồng cung với Bác Sĩ, luôn bị Kình Đà giáp 2 bên)
 */
export const luanGiai_LocTon: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung sao Lộc Tồn
  // ============================================================
  {
    id: 'loc-ton-tinh-chat-chung',
    title: 'Lộc Tồn - Đặc tính chung',
    sao: ['Lộc Tồn'],
    doUuTien: 30,
    tomTat: `**Lộc Tồn** (tên gọi khác: **Thiên Lộc**) — chủ về **tước lộc trời cho,
tước lộc vua ban**, may mắn, tài lộc, phúc thọ.

**Ngũ hành:** Âm **Thổ**. **Hóa khí:** **Quý Tinh**.

**Đặc tính:** **quyền tước, tài lộc, phúc thọ, cô đơn**.

Khác với **Hóa Lộc** (chủ động, nhanh nhạy do mưu cầu) — **Lộc Tồn = lộc trời
ban** nên **bị động**, khó nắm giữ, đa phần lộc tài đến từ **may mắn, bất ngờ**
và thường **muộn màng**.`,

    chiTiet: `## Vai trò trong vòng Lộc Tồn

- Đứng **đầu** vòng Lộc Tồn
- **Luôn đồng cung** với sao **Bác Sĩ**
- Nằm trong **tam hợp Bác Sĩ - Lộc Tồn - Tướng Quân - Quốc Ấn**: chủ về
  **quyền tước, tài lộc, phúc thọ, văn chương, học hành** — tam hợp ai cũng
  muốn có ở Mệnh - Tài - Quan

## Đặc trưng "lộc trời ban"

Vì là lộc trời cho, lộc vua ban: để bảo vệ khỏi kẻ không xứng đáng, **Lộc Tồn
luôn có 2 sát tinh bao bọc bên cạnh**:
- **Kình Dương** (con voi chầu) — bên trên
- **Đà La** (con hổ quỳ) — bên dưới

- Lộc Tồn có tính **cô độc** vì luôn bị Kình Đà đánh phá hai bên, không cho ai
xâm phạm.

- **Kình Đà** cũng là **thử thách** để chỉ những người xứng đáng mới vượt qua
và được mời tiến tới Lộc Tồn.

## Nguồn tài lộc

Tài lộc của Lộc Tồn thường đến từ **2 nguồn chính**:
1. **Di sản tổ phụ** để lại (nhiều khi truyền 2-3 đời)
2. **Người khác biếu xén, quà tặng** (lộc ăn được người khác ban tặng)`,
  },

  // ============================================================
  // 2. Tam hợp Lộc Tồn cần kết hợp tam hợp Thái Tuế (cụ Thiên Lương)
  // ============================================================
  {
    id: 'loc-ton-tam-hop-thai-tue',
    title: 'Lộc Tồn cần kết hợp tam hợp Thái Tuế (cụ Thiên Lương)',
    sao: ['Lộc Tồn'],
    ketHop: ['Thái Tuế', 'Quan Phù', 'Bạch Hổ'],
    doUuTien: 60,
    tomTat: `**Theo cụ Thiên Lương:** Lộc Tồn nằm trong tam hợp **Mệnh - Tài -
Quan** chưa hẳn đã đủ.

Cần đắc thêm tam hợp **Thái Tuế - Quan Phù - Bạch Hổ** — tam hợp của **bậc
chính nhân quân tử** thì mới có thể **hưởng thụ trọn vẹn lộc trời cho**.

- Thành quả chỉ đến với người **xứng đáng**.

**Tuổi hợp nhất:** thiên can **Giáp - Ất - Canh - Tân**, và địa chi đứng
trong tam hợp Lộc Tồn: mới được hưởng trọn vẹn niềm vui và may mắn.`,
  },

  // ============================================================
  // 3. Kình Đà giáp Lộc Tồn - tính cô độc
  // ============================================================
  {
    id: 'loc-ton-kinh-da-giap',
    title: 'Kình Đà giáp Lộc Tồn - Tính cô độc bẩm sinh',
    sao: ['Lộc Tồn'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 55,
    tomTat: `**Lộc Tồn LUÔN bị Kình Dương + Đà La giáp 2 bên** — đây là quy luật
an sao, không thể tránh.

**Hệ quả tổng quát:** dù Lộc Tồn ở vị trí nào, hai cung kế bên (giáp) đều
luôn bị Kình Đà đánh phá: cô độc, cản trở.

- Lộc Tồn dù tốt đến đâu cũng kèm theo **thử thách** và **cô độc**.

`,
  },

  // ============================================================
  // 4. Lộc Tồn tại Mệnh
  // ============================================================
  {
    id: 'loc-ton-tai-menh',
    title: 'Lộc Tồn tại Mệnh',
    sao: ['Lộc Tồn'],
    cung: ['Mệnh'],
    doUuTien: 82,
    tomTat: `**Lộc Tồn thủ Mệnh** — người **trầm tĩnh, thận trọng, duyên muộn**
nhưng có **của để dành**, càng về hậu vận càng vững vàng.

**Tướng mạo:** thân hình **đầy đặn, vuông vắn**, phong thái **đĩnh đạc, từ tốn**.

**Tính cách:** **thông minh, học rộng**, có **tài tổ chức, sáng kiến, đứng đắn**,
**nhân hậu**, từ thiện cao. Do hành **Thổ**: **ôn hòa, điềm đạm, ít nói**, không
hấp tấp, đôi khi hơi **bị động**.

**Chi tiêu:** **cẩn thận, biết tính toán dành dụm**: biết dành dụm mà nên giàu.

**Đặc trưng cô độc:** vì Kình Đà giáp Mệnh: tuổi thơ **cô đơn, xa cách cha
mẹ/anh em**, phải **tự lập từ sớm**.`,

    chiTiet: `## Công danh tài lộc

Lộc Tồn là **phú tinh** — chủ sự **dư dả về tiền bạc**, công danh chỉ là thứ yếu.

Sự giàu có thường biểu hiện do **2 nguyên nhân chính**:
1. **Di sản tổ phụ để lại** — Lộc Tồn ở Mệnh hoặc Phúc bao giờ cũng được hưởng
   tài sản tổ phụ, nhiều khi truyền 2-3 đời
2. **Người khác biếu xén, quà tặng** — lộc ăn được người khác ban tặng, hỗ trợ

**Lộc Tồn + sao tài tinh**: hết sức phát đạt:
- **Chính tinh:** Tử Vi, Vũ Khúc, Thiên Phủ, Thái Âm đắc địa
- **Phụ tinh:** Thiên Mã, Tràng Sinh, Lâm Quan, Đế Vượng, Hóa Lộc, Long Trì,
  Phượng Các, Tả Phù, Hữu Bật, Ân Quang, Thiên Quý, Thiên Quan, Thiên Phúc

## Sự nghiệp

Con đường **chậm rãi, chắc chắn, bền vững** — không đột phá bộc phát.

**Phù hợp:** **tài chính, ngân hàng, kế toán, luật pháp, nghiên cứu**, **thủ quỹ,
quản lý kho tàng**.

Vì Kình Đà giáp Mệnh: con đường công danh **luôn có cạnh tranh, đố kỵ, thị
phi ngấm ngầm**: phải nỗ lực, kiên trì rất nhiều mới chạm đến thành công.

## Hôn nhân

Đường tình duyên **đến muộn** do tính cách khép kín, cẩn trọng.

Hôn nhân **ổn định**, vợ chồng biết chia sẻ, giúp đỡ nhau.

**Lộc Tồn chế ngự được sao đào hoa, dâm tinh**: giảm sóng gió, phiền nhiễu
trong tình cảm.

## Phúc thọ - sức khỏe

- **Ít bệnh tật nghiêm trọng**, ốm đau cũng mau qua khỏi
- Sao Lộc Tồn **chế ngự được tất cả sao chủ dâm đãng, đào hoa, lả lơi**
- Được hưởng của **tiền nhân** hoặc hay **gặp quý nhân** giúp đỡ
- Nếu **không có sát bại tinh** đánh phá: **vinh hiển, sống lâu**`,
  },

  // ----- Sub-rules tách từ Lộc Tồn tại Mệnh -----
  {
    id: 'loc-ton-tai-menh-co-qua',
    sao: ['Lộc Tồn'],
    cung: ['Mệnh'],
    ketHop: ['Cô Thần', 'Quả Tú'],
    doUuTien: 77,
    tomTat: `**Lộc Tồn + Cô Thần / Quả Tú tại Mệnh:** tính tiết kiệm biến thành **ki bo, keo kiệt, bủn xỉn**.`,
  },
  {
    id: 'loc-ton-tai-menh-dau-quan',
    sao: ['Lộc Tồn'],
    cung: ['Mệnh'],
    ketHop: ['Đẩu Quân'],
    doUuTien: 77,
    tomTat: `**Lộc Tồn + Đẩu Quân tại Mệnh:** tính tiết kiệm biến thành **ki bo, keo kiệt, bủn xỉn**.`,
  },
  {
    id: 'loc-ton-tai-menh-vu-khuc',
    sao: ['Lộc Tồn'],
    cung: ['Mệnh'],
    ketHop: ['Vũ Khúc'],
    doUuTien: 77,
    tomTat: `**Lộc Tồn + Vũ Khúc tại Mệnh:** tính tiết kiệm biến thành **ki bo, keo kiệt, bủn xỉn**.`,
  },

  // ============================================================
  // 5. Lộc Tồn + Bác Sĩ tại Mệnh - cách cục đặc biệt
  // ============================================================
  {
    id: 'loc-ton-bac-si-tai-menh',
    title: 'Lộc Tồn + Bác Sĩ thủ Mệnh - Tài chính kết hợp trí tuệ',
    sao: ['Lộc Tồn', 'Bác Sĩ'],
    cung: ['Mệnh'],
    ketHop: ['Bác Sĩ'],
    doUuTien: 85,
    tomTat: `**Lộc Tồn + Bác Sĩ thủ Mệnh** (Lộc Tồn luôn đồng cung Bác Sĩ) =
**"của cải" + "trí tuệ"**.

- Mẫu người **vừa có tài chính, vừa có học thức**, biết dùng **trí tuệ để quản
lý và phát triển tài sản**.

Đây là **bộ sao của người có cuộc sống no ấm, đủ đầy, bền vững và gặp nhiều
may mắn**.

Sự đồng cung của Bác Sĩ làm tăng:
- **Khả năng suy xét vấn đề thấu đáo**
- **Khả năng hóa giải bệnh tật, tai ách**
- Sự **thông minh, học rộng**`,
  },

  // ============================================================
  // 6. Lộc Tồn tại Phụ Mẫu
  // ============================================================
  {
    id: 'loc-ton-tai-phu-mau',
    title: 'Lộc Tồn tại Phụ Mẫu',
    sao: ['Lộc Tồn'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Lộc Tồn tại Phụ Mẫu:** cha mẹ **có của, có tài sản** hoặc có **nghề
nghiệp truyền lại** cho con cái.

Cha mẹ **điềm đạm, cẩn thận, từ thiện**, hay được nhiều **may mắn**, dễ gây
dựng của tiền.

**Quan trọng:** vì cấu trúc giáp Kình Đà: đương số mặc định bị **Đà La
tọa thủ** đối ứng: ngăn chặn tiến tới Lộc Tồn: bản thân **dễ phải tự gây
dựng**, **khó hưởng gia sản** mẹ cha để lại.

**Đà La hãm địa:** bản thân đương số sinh ra **dễ ốm đau, có dị tật**.

**Hội nhiều cát tinh:** cha mẹ là người có **chức quyền, làm chủ, làm sếp**,
có ấn có dấu, được hưởng nhiều **bổng lộc**.`,
  },
  {
    id: 'loc-ton-tai-phu-mau-sat-tinh',
    sao: ['Lộc Tồn'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `**Lộc Tồn + Sát tinh tại Phụ Mẫu:** cha mẹ tính tình **nóng nảy, hay khắc khẩu**, dễ gặp nạn liên quan **mổ xẻ, bệnh tật**. Đương số phải tự lập từ sớm, đôi khi liên lụy bởi nghiệp duyên cha mẹ.`,
  },

  // ============================================================
  // 7. Lộc Tồn tại Phúc Đức
  // ============================================================
  {
    id: 'loc-ton-tai-phuc-duc',
    title: 'Lộc Tồn tại Phúc Đức',
    sao: ['Lộc Tồn'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `**Lộc Tồn cư Phúc Đức:** **tăng tuổi thọ, hưởng phúc, may mắn**
cho đương số.

Gia đình **bên nhà chồng/nhà vợ giàu có**, có công danh sự nghiệp cao.

**Đặc trưng dòng họ:**
- Trong dòng họ dễ có **độc đinh**, có người **mồ côi**, có người **mãi không
  chịu lấy vợ/chồng**
- Nhiều người có **điều kiện, kinh tế tốt nhưng ít giúp đỡ nhau**, mỗi người
  một phương
- Bản thân và cha mẹ **ít được hưởng của cải tổ tiên** do cấu trúc Kình Đà
  giáp các cung gia sản kế bên`,
  },
  {
    id: 'loc-ton-tai-phuc-duc-cat-tinh',
    sao: ['Lộc Tồn'],
    cung: ['Phúc Đức'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 73,
    tomTat: `**Lộc Tồn + Cát tinh (Lục Cát) tại Phúc Đức:** dòng họ biết gìn giữ truyền thống, mồ mả tổ tiên được chăm lo, con cháu thuận lợi trưởng thành.`,
  },
  {
    id: 'loc-ton-tai-phuc-duc-khong-kiep-ky-tuan-triet',
    sao: ['Lộc Tồn'],
    cung: ['Phúc Đức'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Hóa Kỵ', 'Tuần', 'Triệt'],
    doUuTien: 73,
    tomTat: `**Lộc Tồn + Địa Không / Địa Kiếp / Hóa Kỵ / Tuần / Triệt tại Phúc Đức:** gia tộc **ly tán**, đời sau phải tự bươn chải, ít được nhờ cậy. Trong họ hàng có người **yểu mệnh, tàn tật** hoặc chật vật mưu sinh.`,
  },

  // ============================================================
  // 8. Lộc Tồn tại Điền Trạch
  // ============================================================
  {
    id: 'loc-ton-tai-dien-trach',
    title: 'Lộc Tồn tại Điền Trạch',
    sao: ['Lộc Tồn'],
    cung: ['Điền Trạch'],
    doUuTien: 78,
    tomTat: `**Lộc Tồn cư Điền:** người **giữ của bền vững**, được hưởng tài sản
hoặc nghề nghiệp của cha mẹ, ông bà để lại — và phải **gây dựng thêm** mới giàu.

Hay **may mắn** trong chuyện **đất cát, nhà cửa, buôn bất động sản**.

Nơi ở thường là **nơi ông cha để lại** hoặc được **cấp, trao tặng**.

**Đặc trưng kèm theo:**
- Cấu trúc Kình Dương đối ứng cung sự nghiệp: công danh **không suôn sẻ, dễ
  trắc trở**
- Hàng xóm xung quanh có **người độc thân, mãi không lấy vợ/chồng**`,
  },
  {
    id: 'loc-ton-tai-dien-trach-khong-kiep-ky-tuan-triet',
    sao: ['Lộc Tồn'],
    cung: ['Điền Trạch'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Hóa Kỵ', 'Tuần', 'Triệt'],
    doUuTien: 73,
    tomTat: `**Lộc Tồn + Địa Không / Địa Kiếp / Hóa Kỵ / Tuần / Triệt tại Điền Trạch:** đất có nhưng **khó giữ**, nhà cửa phải **sửa sang liên tục**, dễ vướng **tranh chấp, kiện tụng**. Phải vất vả bảo toàn tài sản.`,
  },

  // ============================================================
  // 9. Lộc Tồn tại Quan Lộc
  // ============================================================
  {
    id: 'loc-ton-tai-quan-loc',
    title: 'Lộc Tồn tại Quan Lộc',
    sao: ['Lộc Tồn'],
    cung: ['Quan Lộc'],
    doUuTien: 80,
    tomTat: `**Lộc Tồn cư Quan:** người có **danh vọng, chức vụ và tiền bạc**,
hay được **may mắn, bổng lộc** trong công việc.

Trong công việc thường **tỉ mỉ, cẩn thận, kĩ càng**.

**Nghề nghiệp phù hợp:** tài chính, kế toán, ngân hàng, **thủ quỹ, kho bạc,
hậu cần** — "tay hòm chìa khóa" khó ai thay thế.

**Đặc trưng:** công danh **không có ngay**, phải **bền bỉ từ từ** mới lên
cao, đạt được nhiều thành tựu lớn.`,
  },
  {
    id: 'loc-ton-tai-quan-loc-tu-vi',
    sao: ['Lộc Tồn'],
    cung: ['Quan Lộc'],
    ketHop: ['Tử Vi'],
    doUuTien: 75,
    tomTat: `**Lộc Tồn + Tử Vi tại Quan Lộc:** công danh **hiển đạt**, tuy chậm mà chắc.`,
  },
  {
    id: 'loc-ton-tai-quan-loc-thien-phu',
    sao: ['Lộc Tồn'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Phủ'],
    doUuTien: 75,
    tomTat: `**Lộc Tồn + Thiên Phủ tại Quan Lộc:** công danh **hiển đạt**, tuy chậm mà chắc.`,
  },
  {
    id: 'loc-ton-tai-quan-loc-thai-am',
    sao: ['Lộc Tồn'],
    cung: ['Quan Lộc'],
    ketHop: ['Thái Âm'],
    doUuTien: 75,
    tomTat: `**Lộc Tồn + Thái Âm miếu vượng tại Quan Lộc:** công danh **hiển đạt**, tuy chậm mà chắc.`,
  },
  {
    id: 'loc-ton-tai-quan-loc-hoa-loc',
    sao: ['Lộc Tồn'],
    cung: ['Quan Lộc'],
    ketHop: ['Hóa Lộc'],
    doUuTien: 75,
    tomTat: `**Lộc Tồn + Hóa Lộc tại Quan Lộc:** công danh **hiển đạt**, tuy chậm mà chắc.`,
  },
  {
    id: 'loc-ton-tai-quan-loc-thien-ma',
    sao: ['Lộc Tồn'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Mã'],
    doUuTien: 75,
    tomTat: `**Lộc Tồn + Thiên Mã tại Quan Lộc:** công danh **hiển đạt**, tuy chậm mà chắc.`,
  },
  {
    id: 'loc-ton-tai-quan-loc-ta-huu',
    sao: ['Lộc Tồn'],
    cung: ['Quan Lộc'],
    ketHop: ['Tả Phù', 'Hữu Bật'],
    doUuTien: 75,
    tomTat: `**Lộc Tồn + Tả Phù / Hữu Bật tại Quan Lộc:** công danh **hiển đạt**, tuy chậm mà chắc.`,
  },
  {
    id: 'loc-ton-tai-quan-loc-khoi-viet',
    sao: ['Lộc Tồn'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Khôi', 'Thiên Việt'],
    doUuTien: 75,
    tomTat: `**Lộc Tồn + Thiên Khôi / Thiên Việt tại Quan Lộc:** công danh **hiển đạt**, tuy chậm mà chắc.`,
  },
  {
    id: 'loc-ton-tai-quan-loc-long-phuong',
    sao: ['Lộc Tồn'],
    cung: ['Quan Lộc'],
    ketHop: ['Long Trì', 'Phượng Các'],
    doUuTien: 75,
    tomTat: `**Lộc Tồn + Long Trì / Phượng Các tại Quan Lộc:** công danh **hiển đạt**, tuy chậm mà chắc.`,
  },
  {
    id: 'loc-ton-tai-quan-loc-quang-quy',
    sao: ['Lộc Tồn'],
    cung: ['Quan Lộc'],
    ketHop: ['Ân Quang', 'Thiên Quý'],
    doUuTien: 75,
    tomTat: `**Lộc Tồn + Ân Quang / Thiên Quý tại Quan Lộc:** công danh **hiển đạt**, tuy chậm mà chắc.`,
  },
  {
    id: 'loc-ton-tai-quan-loc-khong-kiep-ky-tuan-triet',
    sao: ['Lộc Tồn'],
    cung: ['Quan Lộc'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Hóa Kỵ', 'Tuần', 'Triệt'],
    doUuTien: 75,
    tomTat: `**Lộc Tồn + Địa Không / Địa Kiếp / Hóa Kỵ / Tuần / Triệt tại Quan Lộc:** công danh sự nghiệp **không bền**, hay có **tai họa**, **thu nhập bấp bênh**, chức vụ khó bền, dễ **gặp họa liên quan đến tiền bạc**.`,
  },

  // ============================================================
  // 10. Lộc Tồn tại Nô Bộc
  // ============================================================
  {
    id: 'loc-ton-tai-no-boc',
    title: 'Lộc Tồn tại Nô Bộc',
    sao: ['Lộc Tồn'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Lộc Tồn cư Nô:** bạn bè **giỏi giang nhưng hơi ít bạn**.

Hay được bạn bè, đồng nghiệp, cấp dưới **mời đi ăn, đi chơi**, có duyên
**hợp tác, giúp đỡ**, dễ được **biếu xén, tặng quà**.

**Càng về già càng hay quen được bạn tốt, bạn giỏi**.`,
  },
  {
    id: 'loc-ton-tai-no-boc-khong-kiep-ky-tuan-triet',
    sao: ['Lộc Tồn'],
    cung: ['Nô Bộc'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Hóa Kỵ', 'Tuần', 'Triệt'],
    doUuTien: 70,
    tomTat: `**Lộc Tồn + Địa Không / Địa Kiếp / Hóa Kỵ / Tuần / Triệt tại Nô Bộc:** mối quan hệ **"bằng mặt mà không bằng lòng"**. Bạn bè **phản trắc**, cộng sự **lừa lọc**, thậm chí rước họa vào thân, kéo theo **kiện tụng** hoặc tranh chấp.`,
  },

  // ============================================================
  // 11. Lộc Tồn tại Thiên Di
  // ============================================================
  {
    id: 'loc-ton-tai-thien-di',
    title: 'Lộc Tồn tại Thiên Di',
    sao: ['Lộc Tồn'],
    cung: ['Thiên Di'],
    doUuTien: 78,
    tomTat: `**Lộc Tồn cư Di:** ra ngoài **dễ kiếm tiền, gặp may mắn**.

Ra ngoài thường **đi một mình**, luôn cẩn thận, từ tốn, nhẹ nhàng.

Hay được **mời đi ăn, đi uống, được tặng quà** — nói chung là **may mắn**.`,
  },
  {
    id: 'loc-ton-tai-thien-di-tu-vi',
    sao: ['Lộc Tồn'],
    cung: ['Thiên Di'],
    ketHop: ['Tử Vi'],
    doUuTien: 73,
    tomTat: `**Lộc Tồn + Tử Vi tại Thiên Di:** ra ngõ dễ **gặp quý nhân**, càng đi xa càng có cơ hội **đổi đời**.`,
  },
  {
    id: 'loc-ton-tai-thien-di-thai-am',
    sao: ['Lộc Tồn'],
    cung: ['Thiên Di'],
    ketHop: ['Thái Âm'],
    doUuTien: 73,
    tomTat: `**Lộc Tồn + Thái Âm đắc địa tại Thiên Di:** ra ngõ dễ **gặp quý nhân**, càng đi xa càng có cơ hội **đổi đời**.`,
  },
  {
    id: 'loc-ton-tai-thien-di-hoa-loc',
    sao: ['Lộc Tồn'],
    cung: ['Thiên Di'],
    ketHop: ['Hóa Lộc'],
    doUuTien: 73,
    tomTat: `**Lộc Tồn + Hóa Lộc tại Thiên Di:** ra ngõ dễ **gặp quý nhân**, càng đi xa càng có cơ hội **đổi đời**.`,
  },
  {
    id: 'loc-ton-tai-thien-di-ta-huu',
    sao: ['Lộc Tồn'],
    cung: ['Thiên Di'],
    ketHop: ['Tả Phù', 'Hữu Bật'],
    doUuTien: 73,
    tomTat: `**Lộc Tồn + Tả Phù / Hữu Bật tại Thiên Di:** ra ngõ dễ **gặp quý nhân**, càng đi xa càng có cơ hội **đổi đời**.`,
  },
  {
    id: 'loc-ton-tai-thien-di-khoi-viet',
    sao: ['Lộc Tồn'],
    cung: ['Thiên Di'],
    ketHop: ['Thiên Khôi', 'Thiên Việt'],
    doUuTien: 73,
    tomTat: `**Lộc Tồn + Thiên Khôi / Thiên Việt tại Thiên Di:** ra ngõ dễ **gặp quý nhân**, càng đi xa càng có cơ hội **đổi đời**.`,
  },
  {
    id: 'loc-ton-tai-thien-di-khong-kiep-ky-tuan-triet',
    sao: ['Lộc Tồn'],
    cung: ['Thiên Di'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Hóa Kỵ', 'Tuần', 'Triệt'],
    doUuTien: 73,
    tomTat: `**Lộc Tồn + Địa Không / Địa Kiếp / Hóa Kỵ / Tuần / Triệt tại Thiên Di:** **"lộc chưa tới đã tan"**, tiền bạc khó giữ, gặp người xấu làm hỏng chuyện. Có lúc tưởng được lộc nhưng **"lợi bất cập hại"** — vướng vào **rắc rối pháp lý, thị phi**, hoặc bị người quen lợi dụng.`,
  },

  // ============================================================
  // 12. Lộc Tồn tại Tật Ách
  // ============================================================
  {
    id: 'loc-ton-tai-tat-ach',
    title: 'Lộc Tồn tại Tật Ách',
    sao: ['Lộc Tồn'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `**Lộc Tồn cư Tật:** **ít bệnh tật, giải trừ tai ách**.

Lộc Tồn thuộc **Thổ**: bệnh có liên quan tới **lục phủ ngũ tạng, gan mật, hệ
tiêu hóa, nội tạng**.

**Đặc trưng giải hạn:**
- Khi tai họa, bệnh tật đến: **giải trừ bằng tiền** (mất tiền chữa bệnh, bỏ
  tiền ra bồi thường, giải quyết sự việc...)
- **Ngày chết được nhiều tiền phúng viếng**
- Hay **được tiền khi xảy ra tai nạn, thảm họa xung quanh** (ví dụ: bán khẩu
  trang đúng mùa covid: tự dưng giàu to)

Nếu **kiếm tiền thất đức**: "gieo gió gặt bão", tiền chưa tới tay đã hóa
thành họa, dễ mắc **bệnh khó chữa**.`,
  },
  {
    id: 'loc-ton-tai-tat-ach-sat-tinh',
    sao: ['Lộc Tồn'],
    cung: ['Tật Ách'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Thiên Hình', 'Thiên Riêu', 'Hóa Kỵ', 'Linh Tinh', 'Hỏa Tinh'],
    doUuTien: 73,
    tomTat: `**Lộc Tồn + Địa Không / Địa Kiếp / Thiên Hình / Thiên Riêu / Hóa Kỵ / Linh Tinh / Hỏa Tinh tại Tật Ách:** nhiều **tai nạn** hoặc có **ám tật**.`,
  },

  // ============================================================
  // 13. Lộc Tồn tại Tài Bạch
  // ============================================================
  {
    id: 'loc-ton-tai-tai-bach',
    title: 'Lộc Tồn tại Tài Bạch',
    sao: ['Lộc Tồn'],
    cung: ['Tài Bạch'],
    doUuTien: 82,
    tomTat: `**Lộc Tồn cư Tài:** **dễ kiếm tiền** hoặc hay **gặp quý nhân giúp
đỡ, phù hộ**. Đương số rất **có duyên với tiền bạc**.

Có khả năng **kiểm soát chi tiêu tốt, chặt chẽ**, làm các ngành nghề liên quan
**tài chính** rất tốt.

Về sau dễ được **ông bà, cha mẹ để lại tiền của**, giữ lại và tiếp tục phát
huy được.`,
  },
  {
    id: 'loc-ton-tai-tai-bach-tu-vi',
    sao: ['Lộc Tồn'],
    cung: ['Tài Bạch'],
    ketHop: ['Tử Vi'],
    doUuTien: 77,
    tomTat: `**Lộc Tồn + Tử Vi tại Tài Bạch:** **lộc bất tận hưởng**, càng về sau càng hưng vượng, ít khi sa sút.`,
  },
  {
    id: 'loc-ton-tai-tai-bach-thien-phu',
    sao: ['Lộc Tồn'],
    cung: ['Tài Bạch'],
    ketHop: ['Thiên Phủ'],
    doUuTien: 77,
    tomTat: `**Lộc Tồn + Thiên Phủ tại Tài Bạch:** **lộc bất tận hưởng**, càng về sau càng hưng vượng, ít khi sa sút.`,
  },
  {
    id: 'loc-ton-tai-tai-bach-vu-khuc',
    sao: ['Lộc Tồn'],
    cung: ['Tài Bạch'],
    ketHop: ['Vũ Khúc'],
    doUuTien: 77,
    tomTat: `**Lộc Tồn + Vũ Khúc tại Tài Bạch:** **lộc bất tận hưởng**, càng về sau càng hưng vượng, ít khi sa sút.`,
  },
  {
    id: 'loc-ton-tai-tai-bach-long-phuong',
    sao: ['Lộc Tồn'],
    cung: ['Tài Bạch'],
    ketHop: ['Long Trì', 'Phượng Các'],
    doUuTien: 77,
    tomTat: `**Lộc Tồn + Long Trì / Phượng Các tại Tài Bạch:** **lộc bất tận hưởng**, càng về sau càng hưng vượng, ít khi sa sút.`,
  },
  {
    id: 'loc-ton-tai-tai-bach-khong-kiep-ky-thien-khong',
    sao: ['Lộc Tồn'],
    cung: ['Tài Bạch'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Hóa Kỵ', 'Thiên Không'],
    doUuTien: 77,
    tomTat: `**Lộc Tồn + Địa Không / Địa Kiếp / Hóa Kỵ / Thiên Không tại Tài Bạch:** tiền tài dễ đến nhưng **dễ đi**. Nhiều trường hợp dính phải **lừa đảo, kiện tụng** hoặc hao tán do **tham quá hóa liều, đầu cơ sai chỗ**.`,
  },

  // ============================================================
  // 14. Lộc Tồn tại Tử Tức
  // ============================================================
  {
    id: 'loc-ton-tai-tu-tuc',
    title: 'Lộc Tồn tại Tử Tức',
    sao: ['Lộc Tồn'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Lộc Tồn cư Tử Tức:** dễ **chậm con, ít con**, con cái thường ở **xa
cha mẹ**.

Con cái tuy **số lượng ít nhưng chất lượng cao** — **ngoan, giỏi giang, hiếu
thảo**. "Lộc trời ban" nên thường tới **muộn**.

Cách cục được hóa giải phần nào nếu có **Tử Vi, Thiên Phủ, Thái Âm vượng
địa**: con tuy ít nhưng hiếu thuận, có tài có đức. Cha mẹ về sau hưởng phúc
nhờ con.`,
  },
  {
    id: 'loc-ton-tai-tu-tuc-sat-tinh',
    sao: ['Lộc Tồn'],
    cung: ['Tử Tức'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `**Lộc Tồn + Sát tinh tại Tử Tức:** dễ phải **nhận con nuôi** bên ngoài. Có được con cũng **ít gần gũi**, sống xa nhà hoặc khó dạy bảo.`,
  },

  // ============================================================
  // 15. Lộc Tồn tại Phu Thê
  // ============================================================
  {
    id: 'loc-ton-tai-phu-the',
    title: 'Lộc Tồn tại Phu Thê',
    sao: ['Lộc Tồn'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `**Lộc Tồn cư Phu Thê:** dễ **muộn duyên** vợ chồng.

Vợ/chồng là người **hiền lành, giỏi giang**, có **điều kiện kinh tế tốt** —
cưới xong thường **được một khoản tiền**.

Thường cưới **muộn**, cưới người **hơn tuổi mình**.

Tình cảm có thể hơi **thiếu lửa, thiếu chủ động**.`,
  },
  {
    id: 'loc-ton-tai-phu-the-tu-vi',
    sao: ['Lộc Tồn'],
    cung: ['Phu Thê'],
    ketHop: ['Tử Vi'],
    doUuTien: 73,
    tomTat: `**Lộc Tồn + Tử Vi tại Phu Thê:** đường hôn nhân thuận lợi, duyên đến muộn nhưng tình nghĩa **sắt son, bền chặt**.`,
  },
  {
    id: 'loc-ton-tai-phu-the-thien-phu',
    sao: ['Lộc Tồn'],
    cung: ['Phu Thê'],
    ketHop: ['Thiên Phủ'],
    doUuTien: 73,
    tomTat: `**Lộc Tồn + Thiên Phủ tại Phu Thê:** đường hôn nhân thuận lợi, duyên đến muộn nhưng tình nghĩa **sắt son, bền chặt**.`,
  },
  {
    id: 'loc-ton-tai-phu-the-thai-am',
    sao: ['Lộc Tồn'],
    cung: ['Phu Thê'],
    ketHop: ['Thái Âm'],
    doUuTien: 73,
    tomTat: `**Lộc Tồn + Thái Âm vượng địa tại Phu Thê:** đường hôn nhân thuận lợi, duyên đến muộn nhưng tình nghĩa **sắt son, bền chặt**.`,
  },
  {
    id: 'loc-ton-tai-phu-the-hoa-loc',
    sao: ['Lộc Tồn'],
    cung: ['Phu Thê'],
    ketHop: ['Hóa Lộc'],
    doUuTien: 73,
    tomTat: `**Lộc Tồn + Hóa Lộc tại Phu Thê:** đường hôn nhân thuận lợi, duyên đến muộn nhưng tình nghĩa **sắt son, bền chặt**.`,
  },
  {
    id: 'loc-ton-tai-phu-the-ta-huu',
    sao: ['Lộc Tồn'],
    cung: ['Phu Thê'],
    ketHop: ['Tả Phù', 'Hữu Bật'],
    doUuTien: 73,
    tomTat: `**Lộc Tồn + Tả Phù / Hữu Bật tại Phu Thê:** đường hôn nhân thuận lợi, duyên đến muộn nhưng tình nghĩa **sắt son, bền chặt**.`,
  },
  {
    id: 'loc-ton-tai-phu-the-sat-tinh',
    sao: ['Lộc Tồn'],
    cung: ['Phu Thê'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 73,
    tomTat: `**Lộc Tồn + Sát tinh hội chiếu tại Phu Thê:** duyên phận **không suôn sẻ**, hôn nhân **muộn màng** hoặc **dang dở**. Vợ chồng khó tránh "**cơm không lành, canh chẳng ngọt**".`,
  },

  // ============================================================
  // 16. Lộc Tồn tại Huynh Đệ
  // ============================================================
  {
    id: 'loc-ton-tai-huynh-de',
    title: 'Lộc Tồn tại Huynh Đệ',
    sao: ['Lộc Tồn'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Lộc Tồn cư Huynh Đệ:** **ít anh chị em**, thường **chênh tuổi nhau
nhiều**.

Anh chị em là người **có điều kiện, hiền lành, thích từ thiện**.`,
  },
  {
    id: 'loc-ton-tai-huynh-de-cat-tinh',
    sao: ['Lộc Tồn'],
    cung: ['Huynh Đệ'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 70,
    tomTat: `**Lộc Tồn + Cát tinh (Lục Cát) tại Huynh Đệ:** quan hệ anh chị em **khăng khít, đầy phúc khí**. Anh em giỏi giang, thương yêu và **sẵn sàng tương trợ** lúc khó khăn.`,
  },
  {
    id: 'loc-ton-tai-huynh-de-khong-kiep-ky',
    sao: ['Lộc Tồn'],
    cung: ['Huynh Đệ'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `**Lộc Tồn + Địa Không / Địa Kiếp / Hóa Kỵ tại Huynh Đệ:** anh em **"xa mặt cách lòng"**, mỗi người mỗi ngả. Cùng máu mủ mà chẳng khác người dưng, thậm chí vì **chút lợi nhỏ mà trở mặt**.`,
  },

  // ============================================================
  // 17. Lộc Tồn + Hóa Lộc - Song Lộc đại phú
  // ============================================================
  {
    id: 'loc-ton-hoa-loc-song-loc',
    title: 'Lộc Tồn + Hóa Lộc - "Song Lộc" đại phú',
    sao: ['Lộc Tồn', 'Hóa Lộc'],
    ketHop: ['Hóa Lộc'],
    doUuTien: 60,
    tomTat: `**Lộc Tồn + Hóa Lộc** = **lộc trời + lộc do người tạo ra**: tài
lộc đến từ **cả hai nguồn**: cách cục **đại phú**, tiền bạc vô cùng dồi dào.

**Tinh tế ngũ hành:**
- **Lộc Tồn = Thổ**, **Hóa Lộc = Mộc**: nếu **đồng cung** thì hai sao **khó
  tương hòa** (Mộc khắc Thổ): chủ về **chuyên quyền, độc đoán, chế hóa về tiền**
- Tốt nhất là **Hóa Lộc CHIẾU** chứ không đồng cung — khi đó mới đẹp trọn vẹn

**Khi vào hạn:** nếu Lộc Tồn và Hóa Lộc cùng nhập hạn đồng cung thì **sự
tốt đẹp bị chiết giảm**.`,
  },

  // ============================================================
  // 18. Lộc Tồn + Thiên Mã - Lộc Mã giao trì
  // ============================================================
  {
    id: 'loc-ton-thien-ma-loc-ma-giao-tri',
    title: 'Lộc Tồn + Thiên Mã - "Lộc Mã giao trì"',
    sao: ['Lộc Tồn', 'Thiên Mã'],
    ketHop: ['Thiên Mã'],
    doUuTien: 65,
    tomTat: `**Lộc Tồn + Thiên Mã** = cách **"Lộc Mã giao trì"** — một trong
những cách cục đẹp nhất về tiền tài.

**Lộc** = tiền tài, **Mã** = sự **dịch chuyển, cơ hội**.

- Cách cục của **doanh nhân thành đạt**, tiền bạc **lưu thông**, **càng đi xa
càng phát tài**, mưu sự gì cũng **dễ thành công**.

**Khi vào hạn:** mưu sự **toại lòng**, **danh tài hưng vượng** đồng thời.`,
  },

  // ============================================================
  // 19. Lộc Tồn + Tuần / Triệt / Phá - kho rỗng
  // ============================================================
  {
    id: 'loc-ton-tuan-triet-pha',
    title: 'Lộc Tồn + Tuần / Triệt / Phá Toái - Kho rỗng',
    sao: ['Lộc Tồn'],
    ketHop: ['Tuần', 'Triệt', 'Phá Toái'],
    doUuTien: 60,
    tomTat: `**Lộc Tồn + Tuần / Triệt / Phá Toái:** một trong 3 sao này gần
như **hóa giải hầu hết hiệu lực** của Lộc Tồn về mặt tài chính.

- Như **kho lộc bị rỗng không**, không được bảo vệ bao bọc.

**Hệ quả:**
- Tiền bạc **khó tụ**, chi tiêu không hợp lý
- May mắn **suy giảm**, cuộc sống vất vả hơn
- Tài vận **trắc trở**, dễ thất thoát`,
  },

  // ============================================================
  // 20. Lộc Tồn + Không Kiếp - Lộc phùng Không Kiếp
  // ============================================================
  {
    id: 'loc-ton-khong-kiep',
    title: 'Lộc Tồn + Không Kiếp - "Lộc phùng Không Kiếp"',
    sao: ['Lộc Tồn'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 62,
    tomTat: `**Lộc Tồn + Địa Không / Địa Kiếp** = cách **"Lộc phùng Không Kiếp"**
— **kho tàng (Lộc Tồn) hóa thành kho rỗng (Không Kiếp)**.

**Hệ quả:**
- Kiếm tiền được **một thời gian ngắn rồi PHÁ SẢN mau lẹ và khủng khiếp**
- Bị **tai họa tiền bạc**
- Thành công đến nhanh nhưng **sụp đổ trong chớp mắt**
- Đau yếu, mắc lừa, của tiền khó bền lâu

**Khi vào hạn:** Lộc Tồn + Không Kiếp: **đau yếu, mắc lừa, của tiền khó
bền**.

**Lời khuyên:** tuyệt đối tránh xa các hình thức **đầu tư rủi ro cao**. Con
đường làm giàu bền vững nhất là **tích lũy và phát triển dựa trên nền tảng
sẵn có**.`,
  },

  // ============================================================
  // 21. Lộc Tồn + Hóa Kỵ + Thái Tuế - hao tán
  // ============================================================
  {
    id: 'loc-ton-hoa-ky-thai-tue',
    title: 'Lộc Tồn + Hóa Kỵ + Thái Tuế - Có tiền nhưng hao tán',
    sao: ['Lộc Tồn'],
    ketHop: ['Hóa Kỵ', 'Thái Tuế'],
    doUuTien: 60,
    tomTat: `**Lộc Tồn + Hóa Kỵ + Thái Tuế:** chủ về **có tiền nhưng bị hao
tán**, bị **ăn chặn, bị dị nghị**.

Trường hợp điển hình: **tham nhũng, hối lộ bị tai tiếng**.

- Có tiền nhưng dễ **dính vào thị phi, tranh chấp**, hoặc kiếm tiền bằng những
**con đường không minh bạch** gây tai tiếng.`,
  },

  // ============================================================
  // 22. Lộc Tồn + Thiên Không - tham nhũng hà tiện
  // ============================================================
  {
    id: 'loc-ton-thien-khong',
    title: 'Lộc Tồn + Thiên Không - Tham nhũng, hà tiện',
    sao: ['Lộc Tồn'],
    ketHop: ['Thiên Không'],
    doUuTien: 58,
    tomTat: `**Lộc Tồn + Thiên Không:** ăn **tham nhũng hối lộ**, bị **thị
phi, chúng ghét**, **ích kỷ, hà tiện**.

Tài sản kiếm được **bao nhiêu cũng khó giữ**. Vận số phát tài Lộc Tồn mang đến
chỉ là **tạm thời**, sau đó sẽ bị **Thiên Không phá tan vào thời điểm bất ngờ**.`,
  },

  // ============================================================
  // 23. Lộc Tồn + Cự Môn - ngọc che ám
  // ============================================================
  {
    id: 'loc-ton-cu-mon',
    title: 'Lộc Tồn + Cự Môn - Ánh sáng bị che khuất',
    sao: ['Lộc Tồn'],
    ketHop: ['Cự Môn'],
    doUuTien: 58,
    tomTat: `**Lộc Tồn + Cự Môn:** **phá sức sáng** của Lộc Tồn rất nhiều.

Lộc Tồn vốn **chậm trễ, muộn màng**: khi đi với Cự Môn: khiến **Cự Môn luôn
đóng vai trò ám tinh**, **khó có bao giờ lộ ánh sáng của viên ngọc ra**.

- Ánh sáng của tài lộc **bị che khuất**, mọi nỗ lực dễ rơi vào **muộn màng,
trễ nải**, tài năng **khó được nhìn nhận đúng lúc**.`,
  },

  // ============================================================
  // 24. Lộc Tồn vào hạn
  // ============================================================
  {
    id: 'loc-ton-vao-han',
    title: 'Lộc Tồn vào hạn',
    sao: ['Lộc Tồn'],
    doUuTien: 50,
    tomTat: `**Hạn có sao Lộc Tồn:** mọi sự **hanh thông**, **danh tài hưng
vượng**, được nhiều **may mắn**, đặc biệt là **của tiền**.

**Tổ hợp đẹp khi vào hạn:**
- **Lộc Tồn + Hóa Lộc:** **đại phát đại tài** (Hóa Lộc CHIẾU mới thật tốt
  đẹp; nếu đồng cung thì sự tốt đẹp bị **chiết giảm**)
- **Lộc Tồn + Thiên Mã** (**Lộc Mã giao trì**): mưu sự **toại lòng**, danh
  tài hưng vượng

**Tổ hợp xấu khi vào hạn:**
- **Lộc Tồn + Không Kiếp:** **đau yếu, mắc lừa**, của tiền **khó bền lâu**`,
  },

  // ============================================================
  // 25. Lời khuyên cho người Lộc Tồn thủ Mệnh
  // ============================================================
  {
    id: 'loc-ton-loi-khuyen',
    title: 'Lời khuyên cho người Lộc Tồn thủ Mệnh',
    sao: ['Lộc Tồn'],
    cung: ['Mệnh'],
    doUuTien: 70,
    tomTat: `**Lời khuyên cho người Lộc Tồn thủ Mệnh:**

1. **Cởi mở hơn trong giao tiếp** — chủ động xây dựng quan hệ xã hội để hóa
giải sự cô độc bẩm sinh do Kình Đà giáp Mệnh.

2. **Chấp nhận đố kỵ, cạnh tranh** là một phần không tránh khỏi. Giữ vững tâm
thế, hành xử **chính trực** sẽ giúp vượt qua sóng gió.

3. **Khi gặp Không Kiếp**: tuyệt đối **tránh xa các hình thức đầu tư rủi ro
cao**. Làm giàu bền vững nhất là **tích lũy và phát triển trên nền tảng sẵn có**.

4. **Bản chất Lộc Tồn là thiện lương**: dùng tài lộc làm **việc thiện, giúp
đỡ người khác** — vừa tích phúc đức vừa hóa giải bất lợi.

5. **Vận trình chậm nhưng chắc** — ít rơi vào trắng tay/phá sản. Nếu kết hợp
sự thận trọng bẩm sinh với **tư duy mở, dám đầu tư đúng lúc**, không quá dè
dặt: xây dựng được **nền móng phúc lộc cho cả gia đình và con cháu**.`,
  },
];
