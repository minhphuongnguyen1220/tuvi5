import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO LINH TINH - Lục Sát Tinh
 * (Phần chung của cặp Hỏa Linh được viết tại đây vì user gửi đoạn này
 * cùng content Linh Tinh)
 */
export const luanGiai_LinhTinh: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung của sao Linh Tinh
  // ============================================================
  {
    id: 'linh-tinh-tinh-chat-chung',
    title: 'Linh Tinh - Đặc tính chung',
    sao: ['Linh Tinh'],
    doUuTien: 30,
    tomTat: `**Linh Tinh** thuộc bộ **Lục Sát Tinh**, ngũ hành **Hỏa** (Âm Hỏa) —
khác Hỏa Tinh (Dương Hỏa).

**Hóa khí:** **Sát Tinh, Hung Tinh**.

**Đặc tính:** **hung bạo, sát phạt, tai nạn, cô độc, nghèo khó**.

**Vị trí miếu hãm:**
- **Đắc địa:** Dần, Mão, Thìn, Tỵ, Ngọ (cùng Hỏa Tinh)
- **Hãm địa:** Mùi, Thân, Dậu, Tuất, Hợi, Tý, Sửu

→ Cặp với **Hỏa Tinh** thành bộ **"Hỏa Linh"**.`,

    chiTiet: `## So sánh Hỏa Tinh vs Linh Tinh

| | Hỏa Tinh | Linh Tinh |
|---|---|---|
| **Tính** | Dương Hỏa | **Âm Hỏa** |
| **Bộc phát** | Bộc phát rõ ràng | **Ngầm ẩn, thâm trầm** |
| **Tác họa** | Cháy nổ rõ ràng | Tai họa **bất ngờ, sắc bén** |
| **Vị trí miếu hãm** | Đắc Dần→Ngọ, Hãm Mùi→Sửu | Cùng |

→ Cả hai cùng đắc/hãm tại các cung giống nhau, đều ưa **cung ban ngày**.`,
  },

  // ============================================================
  // 2. Cặp Hỏa Linh - hình tượng và bản chất
  // ============================================================
  {
    id: 'linh-tinh-cap-hoa-linh',
    title: 'Cặp Hỏa Linh - Hình tượng & bản chất',
    sao: ['Linh Tinh', 'Hỏa Tinh'],
    doUuTien: 35,
    tomTat: `⚡ **Cặp Hỏa Linh - bản chất:**

Hai sao đều có hình tượng như **cây hương, ngọn nến, ngọn đèn dầu** — tượng trưng
cho **ánh sáng**.

→ Ưa **cung ban ngày** (Dần → Ngọ): có ánh sáng phù trợ → **đắc địa**, ít tác
họa, đi với **Tham Lang** thì thành **thượng cách**.

→ **Cung ban đêm** (Mùi → Sửu): **hãm địa, kém sáng** → tai họa, bệnh tật,
**căng thẳng thần kinh**. Cần **Tuần Triệt, Tử, Tuyệt** đi cùng để giảm chế.

⚡ Khác 4 sát tinh kia ở chỗ: **Hỏa Linh chủ tai họa TINH THẦN** nhiều hơn vật chất.`,

    chiTiet: `## Đặc trưng tâm lý

Khi đóng bất cứ đâu, Hỏa Linh đều mang theo:
- **U sầu, ủ buồn**
- Hay **lo toan, lo lắng**
- Về lâu dài → **căng thẳng thần kinh, trầm cảm, phẫn uất**

⚠️ **+ Thiên Cơ / Thiên Lương** (sao Mộc): có thể dẫn tới **điên dại, bệnh thần kinh**.

## Tác họa vật chất

Hỏa Linh đóng vai như **tia lửa điện, vật nóng** → gây **cháy nổ, điện giật,
súng đạn**.

⚠️ **+ Hình / Việt / Kỵ:** càng rõ rệt — tai họa đến **NHANH**.

## Đặc điểm "nội tâm"

Tính nóng của Hỏa Linh **bộc lộ ra ngoài thì ít, nội tâm bên trong thì nhiều**:
- Suy nghĩ, lo toan **chạy đi chạy lại trong đầu**, không kiểm soát được
- **Càng cố giữ càng rối ren**`,
  },

  // ============================================================
  // 3. Hiệu ứng tâm linh của Hỏa Linh
  // ============================================================
  {
    id: 'linh-tinh-hieu-ung-tam-linh',
    title: '🔮 Hỏa Linh - Hiệu ứng tâm linh "ma làm, cơ hành"',
    sao: ['Linh Tinh', 'Hỏa Tinh'],
    doUuTien: 50,
    tomTat: `🔮 **Hỏa Linh có HIỆU ỨNG TÂM LINH cao:**

Hình tượng **ngọn nến, ngọn đèn dầu trong đền phủ** → dễ **thu hút ma tà** vây
quanh, nhiễu loạn → tâm trí **không yên, luôn bị xáo động**, **khám chữa không
ra bệnh**.

Người tìm hiểu tâm linh thường cho rằng đó là **"bị ma làm, bị cơ hành"**.

⚠️ **+ Thiên Cơ / Cự Môn / Thiên Riêu / Đà La / Hóa Kỵ:** hiệu ứng này càng **rõ
rệt**.

→ Cách hóa giải: cần **Tuần Triệt / Tuyệt / Tử** + **phúc thiện tinh** đi cùng
để **hướng thiện, giác ngộ, thoát tham sân si** → "không còn âu lo sầu tư".`,
  },

  // ============================================================
  // 4. Linh Tinh tại Mệnh - tướng mạo
  // ============================================================
  {
    id: 'linh-tinh-tai-menh-tuong-mao',
    title: 'Linh Tinh tại Mệnh - Tướng mạo',
    sao: ['Linh Tinh'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `**Linh Tinh cư Mệnh:** dáng **gầy thô, da sạm**, gương mặt **khó gần**,
tay chân dễ có **sẹo**.

🌟 **Nam mệnh + Thái Dương đắc địa cùng chiếu:** gương mặt trở nên **sáng sủa,
uy nghiêm**.`,
  },

  // ============================================================
  // 5. Linh Tinh tại Mệnh - tính cách & sự nghiệp
  // ============================================================
  {
    id: 'linh-tinh-tai-menh-tinh-cach',
    title: 'Linh Tinh tại Mệnh - Tính cách & sự nghiệp',
    sao: ['Linh Tinh'],
    cung: ['Mệnh'],
    doUuTien: 85,
    tomTat: `**Linh Tinh cư Mệnh:**

🌟 **Đắc địa:** **dũng cảm, can trường, cứng rắn**, không ngại nguy hiểm. Hợp
**võ nghiệp, quân sự, công an, lính cứu hỏa**.

⚠️ **Hãm địa:** **bốc đồng, "nóng giận mất khôn"**, dễ gây chuyện bất lợi, khó
giữ hòa khí.

⚠️ **Hãm + sát tinh:** công danh **thăng giáng thất thường**, lao động chân tay
vất vả mà thành quả không xứng đáng.`,

    chiTiet: `## Tài lộc

Linh Tinh khiến tiền bạc **khó giữ, dễ phá tán**.

⚠️ **+ Không Kiếp:** cuộc đời **nghèo khổ, túng thiếu**, "giật gấu vá vai".

🌟 **Đắc địa + Tham Lang / cát tinh:** tài lộc đến **bất ngờ** — nhưng dễ tiêu
tan nếu không biết giữ.

## Phúc thọ

⚠️ Có **thương tích ở tay chân**, cuộc đời khó tránh "thập tử nhất sinh".

⚠️ **Mệnh ở Dậu hoặc Tý + Linh Tinh hãm:** tai họa đến **NHANH và NẶNG** →
trở tay không kịp.`,
  },

  // ============================================================
  // 6. Linh Tham - Thượng cách (cùng Hỏa Tham)
  // ============================================================
  {
    id: 'linh-tinh-linh-tham',
    title: '🌟 Linh Tham - Thượng cách của Linh Tinh',
    sao: ['Linh Tinh', 'Tham Lang'],
    ketHop: ['Linh Tham'],
    doUuTien: 65,
    tomTat: `🌟 **Linh Tinh + Tham Lang** = cách **"LINH THAM"** — thượng cách,
tương tự **Hỏa Tham**.

Lục Sát Tinh KHÔNG phải lúc nào cũng xấu — Hỏa Linh **đứng với Tham Lang thì
trở nên TỐT ĐẸP**, phò tá Tham Lang rất nhiều.

- Trở thành **người uy quyền**
- Phát danh **ngành võ nghiệp**
- **Danh chấn uy bang, giàu có bền lâu**

→ Cùng với **Hỏa Tham** là 2 cách thượng đẳng của bộ Hỏa Linh.`,
  },

  // ============================================================
  // 7. Linh Tinh gặp hạn
  // ============================================================
  {
    id: 'linh-tinh-han',
    title: 'Hạn gặp Linh Tinh',
    sao: ['Linh Tinh'],
    doUuTien: 50,
    tomTat: `⚠️ **Hạn đến Linh Tinh:** dễ bị **tai nạn, bỏng, bệnh tật, trục trặc
công việc**.

⚠️ **+ Tang Môn:** **tang sự trong gia đình** hoặc tinh thần bất ổn.

**Cách hóa giải:**
- **Điều hòa tâm tính**, rèn bình tĩnh, tránh hấp tấp
- **Cẩn trọng** với dụng cụ sắc bén, điện lửa
- **Thể thao** giảm căng thẳng
- **Nuôi lòng nhân hậu, từ bi** → hóa sát khí, gia tăng phúc đức

**Nghề phù hợp:** **võ nghiệp, quân đội, cứu hộ, y dược, kỹ thuật, thủ công
tinh xảo**.`,
  },

  // ============================================================
  // 8. Linh Tinh tại Phụ Mẫu
  // ============================================================
  {
    id: 'linh-tinh-tai-phu-mau',
    title: 'Linh Tinh tại Phụ Mẫu',
    sao: ['Linh Tinh'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Linh Tinh tại Phụ Mẫu:**

⚠️ **Hãm địa:** cha mẹ dễ gặp **tai ương bất ngờ** liên quan **lửa, điện, dao
kéo, xe cộ**. Tính nóng nảy, vợ chồng xung khắc, **chia ly**. Theo nghề **chân
tay vất vả, nguy hiểm**.

⚠️ **+ Kình Đà / Không Kiếp:** con cái **tự lập từ nhỏ**, dễ bị **nghiệp duyên
và tai họa từ cha mẹ** để lại.

🌟 **Đắc địa:** cha mẹ **cứng cỏi, kiên cường**, hợp **võ, quân đội, công an**.
**+ cát tinh:** có **danh vọng, uy tín**. "Thương cho roi cho vọt" → con sớm
trưởng thành.`,
  },

  // ============================================================
  // 9. Linh Tinh tại Phúc Đức
  // ============================================================
  {
    id: 'linh-tinh-tai-phuc-duc',
    title: 'Linh Tinh tại Phúc Đức',
    sao: ['Linh Tinh'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `**Linh Tinh tại Phúc Đức:**

⚠️ **Hãm địa:** phúc đức tổ tiên **suy yếu**, họ hàng **tai ương, nghèo khó**,
mỗi người một ngả.

⚠️ **+ Kình / Đà / Không / Kiếp:** **"phúc mỏng nghiệp dày"** — con cháu phải
"tự thân vận động", dễ bị **liên lụy bởi nghiệp duyên** từ dòng họ.

🌟 **Đắc địa:** họ hàng có người **can trường, chí khí mạnh mẽ**. Gia tộc có
**truyền thống nghề võ, quân đội**, có **danh tiếng uy tín**. Gia đình kỷ luật
nề nếp → con cháu rèn giũa, **trưởng thành sớm, có chí tiến thủ**.`,
  },

  // ============================================================
  // 10. Linh Tinh tại Điền Trạch
  // ============================================================
  {
    id: 'linh-tinh-tai-dien-trach',
    title: 'Linh Tinh tại Điền Trạch',
    sao: ['Linh Tinh'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Linh Tinh tại Điền Trạch:**

⚠️ **Hãm địa:** điền sản **hao hụt, mất mát** do **hỏa hoạn, tai nạn, tranh
chấp**. Nhà cửa khó yên, hay **chuyển chỗ**, dễ ở gần **nơi nguy hiểm**.

⚠️ **+ Hỏa / Kình / Đà:** đất đai **tiêu tán**, vướng **kiện cáo nhà đất**. Gia
đình thiếu hòa khí.

🌟 **Đắc địa:** nhà cửa **kiên cố, bền vững**. Việc mua bán đất thuận lợi nhưng
chủ yếu **tự thân tạo dựng**, ít hưởng phúc tổ tiên. Nhà thường nằm gần nơi có
**tính Hỏa**.`,
  },

  // ============================================================
  // 11. Linh Tinh tại Quan Lộc
  // ============================================================
  {
    id: 'linh-tinh-tai-quan-loc',
    title: 'Linh Tinh tại Quan Lộc',
    sao: ['Linh Tinh'],
    cung: ['Quan Lộc'],
    doUuTien: 80,
    tomTat: `**Linh Tinh tại Quan Lộc:**

⚠️ **Hãm địa:** công việc **trắc trở**, thay đổi liên tục, khó giữ địa vị cao,
dễ gặp **tiểu nhân hoặc tranh chấp** nơi công sở. **+ Hỏa / Kình / Tang / Bệnh:**
càng ứng nghiệm.

🌟 **Đắc địa:** **chí tiến thủ**, dám nhận nhiệm vụ khó khăn liều lĩnh. **Trực
giác nhạy bén, gan dạ** — hợp **quân sự, công an, cứu hộ**. Công việc nhiều
thử thách nhưng mang **danh tiếng**, được cấp trên đồng nghiệp tôn trọng.`,
  },

  // ============================================================
  // 12. Linh Tinh tại Nô Bộc
  // ============================================================
  {
    id: 'linh-tinh-tai-no-boc',
    title: 'Linh Tinh tại Nô Bộc',
    sao: ['Linh Tinh'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Linh Tinh tại Nô Bộc:**

⚠️ **Hãm địa:** bạn bè cấp dưới **không trung thành**, dễ "nuôi ong tay áo, nuôi
cáo trong nhà".

⚠️ **+ Đại Hao / Không Kiếp:** tài sản hao hụt vì bạn bè / người dưới quyền gây
**tổn thất**. Cần thận trọng quản lý tài chính tập thể.

🌟 **Đắc địa:** bạn bè cấp dưới **trung thành**, "hoạn nạn có nhau". Đương số
mở rộng quan hệ, có thể **dựa vào bạn bè / người dưới quyền** để tiến thân.`,
  },

  // ============================================================
  // 13. Linh Tinh tại Thiên Di
  // ============================================================
  {
    id: 'linh-tinh-tai-thien-di',
    title: 'Linh Tinh tại Thiên Di',
    sao: ['Linh Tinh'],
    cung: ['Thiên Di'],
    doUuTien: 78,
    tomTat: `**Linh Tinh tại Thiên Di:**

⚠️ **Hãm địa:** đi xa gặp **trở ngại, tai nạn, tổn thất sức khỏe / tiền bạc**.
**+ Hỏa / Cự Môn / Thiên Mã:** chuyển chỗ làm nhiều lần, kinh doanh trắc trở.

🌟 **Đắc địa:** dám đương đầu thử thách, **trực giác tốt**, xử lý nhanh. Có
**quý nhân giúp đỡ**, dễ phát triển sự nghiệp **nơi đất khách**.`,
  },

  // ============================================================
  // 14. Linh Tinh tại Tật Ách
  // ============================================================
  {
    id: 'linh-tinh-tai-tat-ach',
    title: 'Linh Tinh tại Tật Ách',
    sao: ['Linh Tinh'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `**Linh Tinh tại Tật Ách:**

⚠️ **Hãm địa:** **tai nạn đột ngột** hoặc bệnh tật khó lường — đặc biệt **dao
kéo, súng đạn, điện giật, lửa, nước**.

⚠️ **+ Hỏa / Kình / Thiên Hình / Bệnh Phù:** cơ thể tổn thương, tai nạn **nguy
hiểm tính mạng**.

🌟 **+ Thiên Phúc / Thiên Quý / Bác Sĩ:** hóa giải phần lớn tai họa, hồi phục
nhanh. Sức khỏe tốt, đề kháng ổn định.`,
  },

  // ============================================================
  // 15. Linh Tinh tại Tài Bạch
  // ============================================================
  {
    id: 'linh-tinh-tai-tai-bach',
    title: 'Linh Tinh tại Tài Bạch',
    sao: ['Linh Tinh'],
    cung: ['Tài Bạch'],
    doUuTien: 78,
    tomTat: `**Linh Tinh tại Tài Bạch:**

⚠️ **Hãm địa + Hỏa / Không Kiếp / Đại Hao:** **phá tài**, "tiền mất tật mang",
kinh doanh **thất bại** hoặc bị **lừa gạt**.

🌟 **Đắc địa:** **trực giác tốt** về tài chính, dám mạo hiểm nhưng biết kiểm
soát rủi ro.

🌟 **+ Thiên Phúc / Quang Quý / Hóa Lộc:** dễ **phát tài** nhờ đầu tư, buôn bán
hoặc nghề **sức mạnh, kỹ thuật**.`,
  },

  // ============================================================
  // 16. Linh Tinh tại Tử Tức
  // ============================================================
  {
    id: 'linh-tinh-tai-tu-tuc',
    title: 'Linh Tinh tại Tử Tức',
    sao: ['Linh Tinh'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Linh Tinh tại Tử Tức:**

⚠️ **Hãm địa:** con cái **yếu ớt, hay mắc bệnh**, dễ **tai nạn nhỏ**. Tính
**bướng bỉnh, nóng nảy**, hay "cãi chày cãi cối", xung đột với cha mẹ.

⚠️ **+ Không Kiếp / Hình / Riêu:** con cái **ly tán**, sống xa cha mẹ, hoặc
trắc trở học hành.

🌟 **Đắc địa:** con cái **nhanh nhẹn, có cá tính, tự lập sớm, biết bảo vệ bản
thân**. **+ Thiên Phúc / Quang Quý:** học giỏi, thông minh, **tài năng nghệ
thuật hoặc lãnh đạo**.`,
  },

  // ============================================================
  // 17. Linh Tinh tại Phu Thê
  // ============================================================
  {
    id: 'linh-tinh-tai-phu-the',
    title: 'Linh Tinh tại Phu Thê',
    sao: ['Linh Tinh'],
    cung: ['Phu Thê'],
    doUuTien: 80,
    tomTat: `**Linh Tinh tại Phu Thê:**

⚠️ **Hãm địa:** vợ chồng **mâu thuẫn kéo dài**, dẫn đến **hình khắc, ly tán, ly
hôn**. Người phối ngẫu dễ gặp **tai nạn, bệnh tật**, làm nghề **nguy hiểm**. Cần
**kiềm chế nóng nảy, giữ hòa khí**.

🌟 **Đắc địa:** xung đột chỉ do **cá tính khác biệt**, không nghiêm trọng — **dung
hòa được sau mâu thuẫn**. Người phối ngẫu **cao to, mạnh mẽ, dũng cảm, quyết đoán**.`,
  },

  // ============================================================
  // 18. Linh Tinh tại Huynh Đệ
  // ============================================================
  {
    id: 'linh-tinh-tai-huynh-de',
    title: 'Linh Tinh tại Huynh Đệ',
    sao: ['Linh Tinh'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Linh Tinh tại Huynh Đệ:**

⚠️ **Hãm địa:** anh chị em **bất đồng lớn**, xa cách địa lý / tình cảm. Gia đình
nghèo khó, quan hệ gia tộc không bền, ít giúp đỡ nhau, chịu **ảnh hưởng xấu từ
nghiệp duyên** của nhau.

🌟 **Đắc địa:** anh em **cá tính mạnh, đôi khi cứng đầu** nhưng vẫn **gắn bó,
hỗ trợ** khi cần. Có xu hướng làm nghề **sức mạnh, võ nghiệp** hoặc ngành mang
tính thử thách.`,
  },
];
