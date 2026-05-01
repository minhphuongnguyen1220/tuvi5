import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO HỎA TINH - Lục Sát Tinh
 */
export const luanGiai_HoaTinh: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung của sao Hỏa Tinh
  // ============================================================
  {
    id: 'hoa-tinh-tinh-chat-chung',
    title: 'Hỏa Tinh - Đặc tính chung',
    sao: ['Hỏa Tinh'],
    doUuTien: 30,
    tomTat: `**Hỏa Tinh** thuộc bộ **Lục Sát Tinh**, ngũ hành **Hỏa**, là **Hung Tinh**.

Cùng **Linh Tinh** tạo thành bộ **"Hỏa Linh"** — kéo theo **tai họa, hung hiểm,
biến cố bất ngờ**.

**Đặc tính:** **gan dạ, quyết liệt, bộc trực**.
- **Thuận thế:** như ngọn đuốc soi đường — dũng khí, ý chí
- **Nghịch thế:** **liều lĩnh, nóng nảy, khó kiểm soát cảm xúc**

**Vị trí miếu hãm:**
- **Đắc địa:** Dần, Mão, Thìn, Tỵ, Ngọ
- **Hãm địa:** Tý, Sửu, Mùi, Thân, Dậu, Tuất, Hợi`,

    chiTiet: `## Ảnh hưởng chính

🌟 **Mặt tích cực:** khơi dậy **tinh thần chiến đấu, ý chí vững vàng** → phù hợp
lĩnh vực đòi hỏi **quyết đoán và mạo hiểm**.

⚠️ **Mặt tiêu cực:** tiềm ẩn nguy cơ **va chạm, cháy nổ, tai nạn bất ngờ** hoặc
**vấn đề thần kinh**.

## Vận trình

- **Sự nghiệp:** đắc địa → bước tiến nhanh, dễ nắm quyền; hãm địa → công danh
  "lên nhanh xuống nhanh"
- **Duyên vận:** chuyện tình cảm dễ **bất hòa** do tính khí nóng nảy. Cung xấu
  hoặc nhiều sát tinh → hôn nhân **đổ vỡ**, nặng hơn là **sát phu / sát thê**
- **Tài lộc:** có năng lực kiếm tiền nhưng **không giỏi giữ của**. Đi cùng
  **Tham Lang** sẽ có cơ may cải thiện
- **+ Linh Tinh / Địa Kiếp / Đại Hao:** tài chính thất thường, hao hụt do đầu
  tư sai hoặc biến cố bất ngờ`,
  },

  // ============================================================
  // 2. Hỏa Tinh tại Mệnh - tướng mạo
  // ============================================================
  {
    id: 'hoa-tinh-tai-menh-tuong-mao',
    title: 'Hỏa Tinh tại Mệnh - Tướng mạo',
    sao: ['Hỏa Tinh'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `**Hỏa Tinh cư Mệnh:** vẻ ngoài **thô kệch**, **tóc lông sắc vàng hoặc
đỏ**.

Trên người hay có **sẹo hoặc dấu vết thương tích**.

Dáng người dễ **gầy gò, ốm yếu**, gương mặt đôi khi đượm vẻ **u sầu**, ánh mắt
**mơ màng, thiếu tập trung**.`,
  },

  // ============================================================
  // 3. Hỏa Tinh tại Mệnh - tính cách & tâm lý
  // ============================================================
  {
    id: 'hoa-tinh-tai-menh-tinh-cach',
    title: 'Hỏa Tinh tại Mệnh - Tính cách & tâm lý',
    sao: ['Hỏa Tinh'],
    cung: ['Mệnh'],
    doUuTien: 85,
    tomTat: `**Hỏa Tinh cư Mệnh:** **dũng mãnh, gai góc** nhưng dễ trở nên **nóng
nảy, liều lĩnh**, khó giữ được "cái đầu lạnh" trong thời khắc căng thẳng.

**Tính cách:** **hay lo nghĩ, ôm rơm nặng bụng** → dễ mắc **mất ngủ, căng thẳng,
trầm cảm**. Biết tính toán nhưng đi quá đà → thành **chi ly, keo kiệt**.

**Tâm lý:** **nội tâm bất ổn**. Khi môi trường tiêu cực → tâm trạng dễ **mất cân
bằng**. Đi kèm nhiều ám tinh → nhạy cảm thành gánh nặng → có xu hướng theo đuổi
**con đường tâm linh** để tìm điểm tựa.

🌟 **+ Tham Lang:** Hỏa Tinh trở thành **THƯỢNG CÁCH** — số **nắm quyền uy**,
hợp **võ nghiệp** hoặc **buôn bán quy mô lớn** (xem entry riêng "Hỏa Tham
thượng cách").`,
  },

  {
    id: 'hoa-tinh-menh-dac-cat-tinh',
    title: 'Hỏa Tinh tại Mệnh - Đắc địa + cát tinh',
    sao: ['Hỏa Tinh'],
    cung: ['Mệnh'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 80,
    tomTat: `🌟 **Hỏa Tinh ĐẮC tại Mệnh + cát tinh:**
- Sự nghiệp **HANH THÔNG**
- Tài lộc **ỔN ĐỊNH**
- Phát huy mặt tích cực: dũng khí, ý chí, quyết đoán`,
  },

  {
    id: 'hoa-tinh-menh-ham-hung-tinh',
    title: 'Hỏa Tinh tại Mệnh - Hãm + hung tinh',
    sao: ['Hỏa Tinh'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `⚠️ **Hỏa Tinh HÃM tại Mệnh hoặc + hung tinh:**
- Đường công danh **BỊ CẢN TRỞ**
- Có thể gặp họa liên quan **LỬA hoặc ĐIỆN**
- Tâm tính nóng nảy, liều lĩnh khó kiểm soát`,
  },

  // ============================================================
  // 4. Hỏa Tham - Thượng cách
  // ============================================================
  {
    id: 'hoa-tinh-hoa-tham',
    title: '🌟 Hỏa Tham - Thượng cách của Hỏa Tinh',
    sao: ['Hỏa Tinh', 'Tham Lang'],
    ketHop: ['Hỏa Tham'],
    doUuTien: 65,
    tomTat: `🌟 **Hỏa Tinh + Tham Lang** = cách **"HỎA THAM"** — **THƯỢNG CÁCH**
của Hỏa Tinh.

- Số **nắm quyền uy**
- Hợp **võ nghiệp** hoặc **buôn bán quy mô lớn**
- Hội cùng **tài tinh và phụ tinh phù hợp** → thành công lớn

**Hạn đến Hỏa Tham + cát tinh:** "một bước lên mây" về công danh và tài lộc —
thăng tiến nhanh, đặc biệt trong **kỹ thuật, quân sự, thương mại**.`,
  },

  // ============================================================
  // 5. Hỏa Tinh + sát tinh - Tai ương dữ dội
  // ============================================================
  {
    id: 'hoa-tinh-sat-tinh',
    title: '⚠️ Hỏa Tinh + Sát tinh - Tai ương dữ dội',
    sao: ['Hỏa Tinh'],
    doUuTien: 60,
    tomTat: `⚠️ **Hỏa Tinh + Thiên Hình / Linh Tinh / Không Kiếp / Kình Dương:**
"thêm dầu vào lửa".

- Tai họa **đột ngột nguy hiểm tính mạng**: cháy nổ, điện giật, sét đánh, súng
  đạn, va chạm giao thông
- **+ Ám tinh:** sống trong trạng thái "ngồi trên đống lửa" → **trầm cảm, lo âu,
  bất ổn thần kinh**`,
  },

  // ============================================================
  // 6. Hỏa Tinh hãm + sát tinh - Hạn tang bệnh
  // ============================================================
  {
    id: 'hoa-tinh-han',
    title: '⚠️ Hạn Hỏa Tinh - Tang bệnh khi hãm địa',
    sao: ['Hỏa Tinh'],
    doUuTien: 50,
    tomTat: `**Hạn đến Hỏa Tinh:**

🌟 **Đắc địa + Tham Lang + tài tinh:** "một bước lên mây" — thăng tiến công
danh tài lộc, đặc biệt trong **kỹ thuật, quân sự, thương mại**.

⚠️ **Hãm địa hoặc bị sát tinh vây hãm:** kéo theo **tang sự, bệnh tật, tai nạn
bất ngờ**. Đề phòng:
- **Bệnh thần kinh**
- **Tai họa điện, lửa, cháy nổ**
- Trường hợp nặng → biến cố **nhanh và dữ dội**, hậu quả khó lường`,
  },

  // ============================================================
  // 7. Hỏa Tinh tại Phụ Mẫu
  // ============================================================
  {
    id: 'hoa-tinh-tai-phu-mau',
    title: 'Hỏa Tinh tại Phụ Mẫu',
    sao: ['Hỏa Tinh'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Hỏa Tinh tại Phụ Mẫu:** gia đình "cơm không lành, canh chẳng ngọt".
Cha mẹ hay **khắc khẩu**, sức khỏe yếu, dễ mắc **bệnh thần kinh, huyết áp,
stress kéo dài** — đặc biệt khi hội cùng sát tinh.

🌟 **+ Tham Lang:** cha mẹ có thể là người **"tay trắng dựng cơ đồ"**, giỏi
kinh doanh và **gặt hái thành công về tài chính**.`,
  },

  // ============================================================
  // 8. Hỏa Tinh tại Phúc Đức
  // ============================================================
  {
    id: 'hoa-tinh-tai-phuc-duc',
    title: 'Hỏa Tinh tại Phúc Đức',
    sao: ['Hỏa Tinh'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `**Hỏa Tinh tại Phúc Đức:** gắn với các **biến cố bất ngờ**, rủi ro
khó lường về vận khí dòng họ.

⚠️ **+ Kình / Đà / Linh Tinh:** gia tộc dễ có người **bần hàn, bệnh tật triền
miên**, **tinh thần bất ổn, điên loạn**.

**Mộ phần tổ tiên** thường ở nơi **đất khô cằn, nắng nóng gay gắt, ít cây cối**
→ phong thủy cảnh báo **sinh khí dòng tộc đời sau suy giảm** ("đời cha ăn mặn,
đời con khát nước").`,
  },

  // ============================================================
  // 9. Hỏa Tinh tại Điền Trạch
  // ============================================================
  {
    id: 'hoa-tinh-tai-dien-trach',
    title: 'Hỏa Tinh tại Điền Trạch',
    sao: ['Hỏa Tinh'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `⚠️ **Hỏa Tinh tại Điền Trạch:** giữ sản nghiệp tổ tiên như **"giữ cát
trong tay"** — càng nắm chặt càng dễ mất.

Tính nóng + sát khí của Hỏa → chỗ ở dễ **hỏa hoạn, chập điện, tranh chấp pháp lý**.

⚠️ **+ Linh Tinh / Địa Không / Đại Hao:** nhà cửa **tiêu tán**, vị trí ở **đất
dữ, có vong linh, tà khí**.

⚠️ Có trường hợp nhà gần **cột điện, trạm phát sóng** → ảnh hưởng sức khỏe.

⚠️ **+ Tang Môn:** đặc biệt đề phòng **cháy nổ**.`,
  },

  // ============================================================
  // 10. Hỏa Tinh tại Quan Lộc
  // ============================================================
  {
    id: 'hoa-tinh-tai-quan-loc',
    title: 'Hỏa Tinh tại Quan Lộc',
    sao: ['Hỏa Tinh'],
    cung: ['Quan Lộc'],
    doUuTien: 80,
    tomTat: `**Hỏa Tinh tại Quan Lộc:** ảnh hưởng đến công danh, sự nghiệp.

⚠️ **+ Nhiều sao xấu:** áp lực công việc lớn, dễ **căng thẳng, suy nhược** hoặc
**mâu thuẫn với cấp trên, đồng nghiệp**.`,
  },

  {
    id: 'hoa-tinh-quan-dac-linh-tinh',
    title: 'Hỏa Tinh tại Quan Lộc - Đắc + Linh Tinh đắc',
    sao: ['Hỏa Tinh'],
    cung: ['Quan Lộc'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    ketHop: ['Linh Tinh'],
    doUuTien: 75,
    tomTat: `🌟 **Hỏa Tinh ĐẮC tại Quan Lộc + Linh Tinh đắc:**
- "Tiếp lửa" về ý chí — **CHĂM CHỈ, QUYẾT ĐOÁN**
- Giỏi **PHÁN ĐOÁN THỜI CƠ**, tư duy phân tích tốt
- Phù hợp **cơ khí, điện tử, truyền thông, quân sự, an ninh**`,
  },

  {
    id: 'hoa-tinh-quan-ham',
    title: 'Hỏa Tinh tại Quan Lộc - Hãm địa',
    sao: ['Hỏa Tinh'],
    cung: ['Quan Lộc'],
    trangThai: ['Hãm'],
    doUuTien: 75,
    tomTat: `⚠️ **Hỏa Tinh HÃM tại Quan Lộc:**
- Công danh **TRẮC TRỞ**
- "Lên bổng xuống trầm", khó giữ chức vị **ỔN ĐỊNH**
- Sự nghiệp lên nhanh xuống nhanh`,
  },

  // ============================================================
  // 11. Hỏa Tinh tại Nô Bộc
  // ============================================================
  {
    id: 'hoa-tinh-tai-no-boc',
    title: 'Hỏa Tinh tại Nô Bộc',
    sao: ['Hỏa Tinh'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Hỏa Tinh tại Nô Bộc:**

🌟 **+ Sát Phá Tham (đặc biệt Tham Lang):** nhiều **bạn bè đồng nghiệp tốt**,
cùng nhau phát triển và thành đạt.

⚠️ **Hãm địa:** phải **lo toan, gánh trách nhiệm thay** cho bạn bè đồng nghiệp,
"mang nợ ân tình" mà chưa chắc được đền đáp.

⚠️ **+ Thiên Riêu / Đà La:** bạn bè hoặc bản thân có thể làm **lĩnh vực tâm
linh, huyền học**.`,
  },

  // ============================================================
  // 12. Hỏa Tinh tại Thiên Di
  // ============================================================
  {
    id: 'hoa-tinh-tai-thien-di',
    title: 'Hỏa Tinh tại Thiên Di',
    sao: ['Hỏa Tinh'],
    cung: ['Thiên Di'],
    doUuTien: 78,
    tomTat: `**Hỏa Tinh tại Thiên Di:** ra ngoài gặp nhiều **vất vả, gian nan**,
"chưa ấm chỗ đã gặp chuyện" — khó tìm sự ổn định khi đổi nơi ở / môi trường
làm việc.

⚠️ **+ Linh Tinh / Thiên Việt / Thiên Hình:** điềm báo **tai nạn nghiêm trọng**.

**+ Thiên Mã:** cuộc sống **bôn ba, di chuyển nhiều**, "một nắng hai sương".

Thường lui tới **nơi linh thiêng** hoặc dễ chịu ảnh hưởng **năng lượng tiêu cực**.`,
  },

  // ============================================================
  // 13. Hỏa Tinh tại Tật Ách
  // ============================================================
  {
    id: 'hoa-tinh-tai-tat-ach',
    title: 'Hỏa Tinh tại Tật Ách',
    sao: ['Hỏa Tinh'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `**Hỏa Tinh tại Tật Ách:** chủ về **bệnh thần kinh** — đau đầu, mất
ngủ, **suy nhược tinh thần**.

Nhiều người bị **tác động bởi khí âm hoặc vong linh** → sức khỏe và tinh thần
khó phục hồi.

⚠️ **+ Mộc Dục:** đề phòng **bỏng nước sôi**.

⚠️ **+ Thiên Hình / Linh Tinh / Thiên Việt:** thương tích **dao kéo, cháy nổ,
điện giật, tai nạn giao thông**.`,
  },

  {
    id: 'hoa-tinh-tat-ach-kinh-thin-chet-duoi',
    title: 'Hỏa Tinh tại Tật + Kình Dương hãm tại Thìn - Chết đuối',
    sao: ['Hỏa Tinh'],
    cung: ['Tật Ách'],
    chi: ['Thìn'],
    ketHop: ['Kình Dương'],
    doUuTien: 70,
    tomTat: `⚠️ **Hỏa Tinh tại Tật Ách + Kình Dương hãm tại Thìn:**
- Cẩn trọng **MÔI TRƯỜNG SÔNG NƯỚC**
- Đề phòng **CHẾT ĐUỐI**`,
  },

  // ============================================================
  // 14. Hỏa Tinh tại Tài Bạch
  // ============================================================
  {
    id: 'hoa-tinh-tai-tai-bach',
    title: 'Hỏa Tinh tại Tài Bạch',
    sao: ['Hỏa Tinh'],
    cung: ['Tài Bạch'],
    doUuTien: 78,
    tomTat: `**Hỏa Tinh tại Tài Bạch:** **"có tiền mà không có của"** — kiếm được
tiền nhưng **thất thoát nhanh** vì lý do bất ngờ.

🌟 **+ Tham Lang:** tài lộc và khả năng tích lũy **cải thiện tốt hơn**. Kinh
doanh lớn + tài tinh / cát tinh → **phát đạt**.

⚠️ **+ Linh Tinh / Địa Kiếp / Đại Hao:** "tiền vào nhà khó như gió vào nhà
trống", của để dành cũng dễ mất vì **đầu tư sai hoặc bị lừa gạt**.`,
  },

  // ============================================================
  // 15. Hỏa Tinh tại Tử Tức
  // ============================================================
  {
    id: 'hoa-tinh-tai-tu-tuc',
    title: 'Hỏa Tinh tại Tử Tức',
    sao: ['Hỏa Tinh'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Hỏa Tinh tại Tử Tức:** đường con cái **không tốt** — **ít con** hoặc
**hiếm muộn**.

Con sinh ra **khó nuôi**, tính cách **"như nước với lửa"** với cha mẹ — lớn lên
dễ **bất đồng** về suy nghĩ và cách sống.

🌟 **+ Sát Phá Tham (đặc biệt Tham Lang):** con cái về sau **khá giả, thành
đạt**, có thể **báo hiếu cha mẹ khi về già**.`,
  },

  // ============================================================
  // 16. Hỏa Tinh tại Phu Thê
  // ============================================================
  {
    id: 'hoa-tinh-tai-phu-the',
    title: 'Hỏa Tinh tại Phu Thê',
    sao: ['Hỏa Tinh'],
    cung: ['Phu Thê'],
    doUuTien: 80,
    tomTat: `⚠️ **Hỏa Tinh tại Phu Thê:** như **"ngòi nổ"** đặt giữa hôn nhân.
Tính **nóng, gấp, khó kiềm chế** → vợ chồng dễ **bất hòa** từ lối sống, quan
điểm đến tín ngưỡng.

Người phối ngẫu thường **sức khỏe kém**, dễ gặp **tai nạn cháy nổ, điện, thần
kinh**.

⚠️ **+ Không Kiếp / Thiên Riêu / Thiên Hình:** tình cảm **rạn nứt, ly tán** —
lá số xấu có thể ứng số **sát phu / sát thê**.`,
  },

  // ============================================================
  // 17. Hỏa Tinh tại Huynh Đệ
  // ============================================================
  {
    id: 'hoa-tinh-tai-huynh-de',
    title: 'Hỏa Tinh tại Huynh Đệ',
    sao: ['Hỏa Tinh'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Hỏa Tinh tại Huynh Đệ:** anh chị em **"kẻ đầu sông, người cuối
bãi"** — xa cách cả **địa lý lẫn tình cảm** (tương tự Cô Thần).

Người trong nhà có thể mang **bệnh tật lâu năm, tàn tật** hoặc **biến cố bất
ngờ → tử nạn**.

⚠️ **+ Linh Tinh / Không / Kiếp Sát:** huynh đệ **ly tán, nghèo khổ**.

⚠️ **+ Thiên Hình / Thiên Việt:** nguy cơ **sự cố nghiêm trọng** ảnh hưởng sức
khỏe gần như khó tránh.`,
  },
];
