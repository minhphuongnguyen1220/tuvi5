import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO TƯỚNG QUÂN - Mộc, Võ Tinh + Quyền Tinh, vòng Lộc Tồn (vị trí 5)
 * Là một trong 4 sao của bộ Binh Hình Tướng Ấn
 */
export const luanGiai_TuongQuan: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung sao Tướng Quân
  // ============================================================
  {
    id: 'tuong-quan-tinh-chat-chung',
    title: 'Tướng Quân - Đặc tính chung',
    sao: ['Tướng Quân'],
    doUuTien: 30,
    tomTat: `**Tướng Quân** — phụ tinh **Cát Tinh** trong **vòng Lộc Tồn / Bác Sĩ**
(vị trí thứ **5**).

**Ngũ hành:** **Mộc**.

**Loại:** **Võ Tinh, Quyền Tinh**.

**Đặc tính:** **uy quyền, mệnh lệnh** — vị tướng cầm quân.

⚡ **Là 1 trong 4 sao của bộ "BINH HÌNH TƯỚNG ẤN"** (Phục Binh + Thiên Hình +
Tướng Quân + Quốc Ấn) — bộ sao uy dũng chỉ **quyền tước, võ nghiệp**.

**Ý nghĩa cốt lõi:**
- **Cương trực, thẳng tính, NÓNG TÍNH, ngang tàng, bất khuất**
- **Can đảm, dũng mãnh, hiên ngang**, làm càn, **táo bạo**
- **Kiêu căng**, có **óc lãnh tụ**, tinh thần sứ quân, **HAM CẦM QUYỀN**

⚡ **Khác biệt Tướng Quân vs Hóa Quyền:**
- **Hóa Quyền:** chủ sự **NẮM quyền bính** thật sự
- **Tướng Quân:** chỉ sự **KHAO KHÁT quyền bính**, **háo danh, hiếu thắng** —
  có chí muốn nắm quyền chứ chưa chắc nắm được`,
  },

  // ============================================================
  // 2. Bộ Binh Hình Tướng Ấn
  // ============================================================
  {
    id: 'tuong-quan-binh-hinh-an',
    title: 'Tướng Quân + Phục Binh + Thiên Hình + Quốc Ấn = "Binh Hình Tướng Ấn"',
    sao: ['Tướng Quân', 'Phục Binh', 'Thiên Hình', 'Quốc Ấn'],
    ketHop: ['Phục Binh', 'Thiên Hình', 'Quốc Ấn'],
    doUuTien: 75,
    tomTat: `🌟 **Tướng Quân + Phục Binh + Thiên Hình + Quốc Ấn** = bộ **"BINH HÌNH
TƯỚNG ẤN"** — **bộ sao UY DŨNG**.

→ Chỉ về:
- **Quyền tước, võ nghiệp**
- **Cầm quân, cầm quyền**
- **Tướng lĩnh thực thụ** — có đầy đủ binh (Phục Binh) + uy (Thiên Hình) +
  tướng (Tướng Quân) + ấn (Quốc Ấn)

→ Cách cục **rất quý cho người làm võ nghiệp**, lãnh đạo, quân đội, công an.`,
  },

  // ============================================================
  // 3. Tướng Quân + Phục Binh + Thiên Mã - tướng có quân
  // ============================================================
  {
    id: 'tuong-quan-phuc-binh-thien-ma',
    title: 'Tướng Quân + Phục Binh + Thiên Mã - "Tướng có quân, có uy"',
    sao: ['Tướng Quân'],
    ketHop: ['Phục Binh', 'Thiên Mã'],
    doUuTien: 65,
    tomTat: `🌟 **Tướng Quân + Phục Binh + Thiên Mã:** **HỢP CÁCH, đủ bộ** — ví
như **"TƯỚNG CÓ QUÂN, CÓ UY"**.

⚡ Quan điểm: **Thiên Tướng và Tướng Quân** đều **CẦN đi với Phục Binh + Thiên
Mã** mới thực sự là tướng quân thực thụ.

→ Có quyền điều quân (Phục Binh = quân lính) + có ngựa để xuất chinh (Thiên Mã)
→ tướng lĩnh thực thụ.`,
  },

  // ============================================================
  // 4. Tướng Quân + Thiên Tướng - Lưỡng Tướng trùng phùng
  // ============================================================
  {
    id: 'tuong-quan-thien-tuong',
    title: 'Tướng Quân + Thiên Tướng - "Lưỡng Tướng trùng phùng"',
    sao: ['Tướng Quân'],
    ketHop: ['Thiên Tướng'],
    doUuTien: 70,
    tomTat: `🌟 **Tướng Quân + Thiên Tướng** = cách **"LƯỠNG TƯỚNG TRÙNG PHÙNG"**:
- **Uy quyền hiển hách**
- **Đồng cung** càng **MẠNH HƠN**, nặng ý nghĩa **QUÂN SỰ**

(Xem entry chuyên biệt cho nữ mệnh.)`,
  },

  {
    id: 'tuong-quan-thien-tuong-nu-menh',
    title: '🌟 Tướng Quân + Thiên Tướng - Nữ mệnh đảm lược',
    sao: ['Tướng Quân'],
    ketHop: ['Thiên Tướng'],
    gioiTinh: 'Nữ',
    doUuTien: 65,
    tomTat: `🌟 **Tướng Quân + Thiên Tướng - Nữ mệnh:**

- Đàn bà **đảm lược, tài ba, hoạt động như nam giới**
- Trong gia đình rất **có uy quyền**, thường **lấn át uy quyền của chồng**`,
  },

  // ============================================================
  // 5. Tướng Quân tại Mệnh
  // ============================================================
  {
    id: 'tuong-quan-tai-menh',
    title: 'Tướng Quân tại Mệnh - Khí phách mạnh mẽ',
    sao: ['Tướng Quân'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `🌟 **Tướng Quân thủ Mệnh:** vị **TƯỚNG NẮM QUYỀN ĐIỀU ĐỘNG BINH SĨ**
trong tay (so với Tử Vi = Vua, Thiên Phủ = Hoàng Hậu, Thiên Tướng = quyền thần).

**Tướng mạo:** **OAI PHONG**, **tạng người cao lớn, khỏe khoắn**, bước đi
**vững vàng**, khí chất **khó lẫn**.

**Tính cách:**
- **Thẳng thắn, cương trực**, giàu tinh thần dấn thân
- **Sẵn sàng đối diện thử thách**
- **Thích chỉ huy**, tố chất **THỦ LĨNH**
- ⚠️ Dễ sa vào **NÓNG NẢY, hiếu thắng**, thậm chí **liều lĩnh thiếu cân nhắc**

**Bản chất:** ham cầm quyền, **háo danh, hiếu thắng** — khao khát quyền lực
nhưng không nhất thiết nắm được như Hóa Quyền.`,
  },

  // ============================================================
  // 6. Nữ mệnh có Tướng Quân - đảm lược + ghen tuông
  // ============================================================
  {
    id: 'tuong-quan-nu-menh',
    title: 'Nữ mệnh có Tướng Quân - Đảm lược + ghen tuông',
    sao: ['Tướng Quân'],
    cung: ['Mệnh'],
    doUuTien: 75,
    tomTat: `⚠️ **NỮ MỆNH có Tướng Quân thủ Mệnh:**
- **GHEN TUÔNG** mạnh — bộc lộ cảm xúc một cách **mãnh liệt**
- **LẤN ÁT chồng**
- Tính cách **MẠNH BẠO NHƯ NAM NHI** — đảm lược, tài ba

🌟 **Mặt tốt:** đàn bà **đảm lược, tài ba**, hoạt động như nam giới — phù hợp
làm sự nghiệp lớn.

⚠️ **Mặt xấu:** trong gia đình **lấn át uy quyền của chồng**, hôn nhân dễ
xung đột nếu chồng không đủ bản lĩnh hoặc cũng cương cường.`,
  },

  // ============================================================
  // 7. Tướng Quân tại Phụ Mẫu
  // ============================================================
  {
    id: 'tuong-quan-tai-phu-mau',
    title: 'Tướng Quân tại Phụ Mẫu',
    sao: ['Tướng Quân'],
    cung: ['Phụ Mẫu'],
    doUuTien: 72,
    tomTat: `🌟 **Tướng Quân cư Phụ Mẫu:** cha mẹ **CÓ TIẾNG TĂM**, có **uy quyền,
địa vị, tiếng nói quan trọng** trong xã hội/công việc.

🌟 Có khả năng **dẫn dắt và định hướng tương lai** cho con cái.

🌟 **Điều kiện kinh tế khá giả** → **nền tảng vững chắc** giúp con cái phát
triển trong tương lai.`,
  },

  // ============================================================
  // 8. Tướng Quân tại Phúc Đức
  // ============================================================
  {
    id: 'tuong-quan-tai-phuc-duc',
    title: 'Tướng Quân tại Phúc Đức',
    sao: ['Tướng Quân'],
    cung: ['Phúc Đức'],
    doUuTien: 72,
    tomTat: `🌟 **Tướng Quân cư Phúc Đức:** **TĂNG TUỔI THỌ**.

🌟 Trong dòng họ có người **làm nên sự nghiệp** — thường theo:
- **Công an, quân đội**, lực lượng vũ trang
- Hoặc từng có **liệt sĩ hy sinh** nơi chiến trường — tinh thần dũng cảm,
  truyền thống võ nghiệp

→ Là "**bệ phóng vàng**" giúp con cháu tự tin bước vào đời với khí phách.

⚠️ Trong họ có người làm nên nhưng **bất hòa** — ai cũng có cá tính mạnh, dễ
xung đột.`,
  },

  // ============================================================
  // 9. Tướng Quân tại Điền Trạch
  // ============================================================
  {
    id: 'tuong-quan-tai-dien-trach',
    title: 'Tướng Quân tại Điền Trạch',
    sao: ['Tướng Quân'],
    cung: ['Điền Trạch'],
    doUuTien: 70,
    tomTat: `🌟 **Tướng Quân cư Điền:** **gia tăng lợi ích** về việc **tạo dựng
nhà cửa**, lựa được **đất tốt**.

⚡ **Đặc trưng vị trí:**
- Nơi an ninh, có **thành quách**
- Có **cơ sở hành chánh, quân sự** đầy đủ
- Hoặc vùng đất xưa kia có **bờ rào, thành cổ**

⚠️ **+ Nhiều ám tinh:** dấu hiệu liên quan **vong linh nam giới gắn với đất
đai** → mọi quyết định mua bán, xây dựng cần **cân nhắc kỹ càng** để tránh
thiệt hại tài sản, sức khỏe, rủi ro.`,
  },

  // ============================================================
  // 10. Tướng Quân tại Quan Lộc
  // ============================================================
  {
    id: 'tuong-quan-tai-quan-loc',
    title: 'Tướng Quân tại Quan Lộc',
    sao: ['Tướng Quân'],
    cung: ['Quan Lộc'],
    doUuTien: 80,
    tomTat: `🌟 **Tướng Quân cư Quan:** **lợi ích cho công danh, chức vụ** — có
**UY QUYỀN**, có **óc lãnh tụ**, sức ảnh hưởng **đáng kể**.

🌟 **+ Thiên Tướng** = "Lưỡng Tướng trùng phùng" — uy quyền **càng nổi bật**,
được đồng nghiệp cấp dưới **kính nể** như "tướng lĩnh cầm quân".

🌟 **+ Thiên Hình đắc địa:** càng uy quyền, tiếng nói được coi trọng.

⚠️ **+ Thiên Hình LẠC HÃM:** công danh dễ gặp **biến cố** — từ vị trí cao có
thể **bị giáng chức, nghỉ hưu sớm**, gặp **tai họa nghề nghiệp**.`,
  },

  // ============================================================
  // 11. Tướng Quân tại Nô Bộc
  // ============================================================
  {
    id: 'tuong-quan-tai-no-boc',
    title: 'Tướng Quân tại Nô Bộc',
    sao: ['Tướng Quân'],
    cung: ['Nô Bộc'],
    doUuTien: 70,
    tomTat: `🌟 **Tướng Quân cư Nô:** **bè bạn, người giúp việc ĐẮC LỰC**.

⚠️ Cảnh báo: thận trọng các mối quan hệ bạn bè, đồng nghiệp — tránh **bị lấn
át** hoặc **lạm quyền**.

🌟 **+ Hội nhiều cát tinh:** có **duyên gặp bạn bè TÀI GIỎI**, sẵn sàng **giúp
đỡ** trong công việc lẫn cuộc sống.`,
  },

  // ============================================================
  // 12. Tướng Quân tại Thiên Di
  // ============================================================
  {
    id: 'tuong-quan-tai-thien-di',
    title: 'Tướng Quân tại Thiên Di',
    sao: ['Tướng Quân'],
    cung: ['Thiên Di'],
    doUuTien: 72,
    tomTat: `🌟 **Tướng Quân cư Thiên Di:** ra ngoài **OAI PHONG**, **nhiếp phục
được người khác**, thể hiện sự **giỏi giang, uy tín, năng lực** được kính nể.

⚠️ **Mặt trái:** tự tin quá mức dễ sinh **kiêu căng, ngạo mạn** — tự **"gieo
họa vào thân"** lúc nào không hay.

⚠️ **Khi xung chiếu thêm Phục Binh / Thất Sát / Liêm Trinh Thất Sát / Tử Phá /
Tử Tham:** đề phòng **rắc rối pháp lý, kiện tụng**, mâu thuẫn ngoài xã hội.`,
  },

  // ============================================================
  // 13. Tướng Quân tại Tật Ách
  // ============================================================
  {
    id: 'tuong-quan-tai-tat-ach',
    title: 'Tướng Quân tại Tật Ách',
    sao: ['Tướng Quân'],
    cung: ['Tật Ách'],
    doUuTien: 72,
    tomTat: `🌟 **Tướng Quân cư Tật:** **GIẢI TRỪ tai nạn**.

⚠️ **Mặt trái:** **NÓNG TÍNH, làm càn** thì hay **gặp rủi ro**, dễ bị **CẦM
GIỮ** (giam cầm).

⚠️ Tướng Quân thường kéo theo **tai nạn bất ngờ, khó lường**:
- Vấn đề sức khỏe
- Rủi ro **đi lại** hoặc tham gia hoạt động xã hội
- Mâu thuẫn nhỏ → dễ thành **xung đột, va chạm**, bị **kẻ tiểu nhân hãm hại**`,
  },

  // ============================================================
  // 14. Tướng Quân tại Tài Bạch
  // ============================================================
  {
    id: 'tuong-quan-tai-tai-bach',
    title: 'Tướng Quân tại Tài Bạch',
    sao: ['Tướng Quân'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `🌟 **Tướng Quân cư Tài:** **lợi ích cho cầu tài, làm giàu**.

🌟 **Phù hợp các nghề:** **cổ phiếu, địa ốc** — nghề cần quyết đoán, dám đầu
tư lớn.

🌟 Tiền tài kiếm được dựa trên **quyền lực, vị thế** hoặc **sức ảnh hưởng**
tới người khác. Thu nhập **ổn định, lâu dài**.

⚠️ **Mặt trái:** nếu không biết chi tiêu khéo léo, của cải dễ **"tiền vào như
nước, tiền ra như sông"** — khó tích lũy bền vững.`,
  },

  // ============================================================
  // 15. Tướng Quân tại Tử Tức
  // ============================================================
  {
    id: 'tuong-quan-tai-tu-tuc',
    title: 'Tướng Quân tại Tử Tức',
    sao: ['Tướng Quân'],
    cung: ['Tử Tức'],
    doUuTien: 72,
    tomTat: `🌟 **Tướng Quân cư Tử Tức:** con cái **CÓ SỨC KHỎE, thành danh**,
có **tố chất LÃNH ĐẠO thiên bẩm**, dễ thành tựu nổi bật.

⚡ Tướng mạo con cái: **cao lớn, khỏe mạnh**, tràn đầy sức sống.

⚠️ Tính tình **cương trực, nóng nảy**, đôi khi **nghịch ngợm** như "**ngựa
non háu đá**" → cha mẹ cần **uốn nắn khéo léo** để phát huy điểm mạnh.

⚠️ Đặc trưng: **ÍT CON**.`,
  },

  // ============================================================
  // 16. Tướng Quân tại Phu Thê
  // ============================================================
  {
    id: 'tuong-quan-tai-phu-the',
    title: 'Tướng Quân tại Phu Thê',
    sao: ['Tướng Quân'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `🌟 **Tướng Quân cư Phu Thê:** người hôn phối **CÓ TÀI, CÓ DANH, CÓ
UY QUYỀN**, có **tiếng nói** và khả năng **định đoạt** trong gia đình.

🌟 Tính cách **mạnh mẽ, tự tin**, biết **lo toan và gánh vác** trách nhiệm
chung → tổ ấm được vun vén tròn vẹn.

🌟 **+ Cát tinh:** vợ/chồng có **địa vị xã hội**, được kính trọng, hỗ trợ
chủ mệnh trong công việc và quyết định quan trọng.

⚠️ **+ Cát tinh nhưng vẫn:** người hôn phối **HAY GHEN TUÔNG**.`,
  },

  // ============================================================
  // 17. Tướng Quân tại Huynh Đệ
  // ============================================================
  {
    id: 'tuong-quan-tai-huynh-de',
    title: 'Tướng Quân tại Huynh Đệ',
    sao: ['Tướng Quân'],
    cung: ['Huynh Đệ'],
    doUuTien: 72,
    tomTat: `**Tướng Quân cư Huynh Đệ:** anh chị em dễ tham gia **kinh doanh,
buôn bán** → môi trường gia đình **năng động** + **cạnh tranh**.

⚠️ Bản mệnh đôi lúc bị anh em **lấn át**, chịu sức ép từ những người **có
tiếng nói hơn** mình.

⚡ Quan hệ anh em **thiếu đồng đều** — có người nắm vị thế quyết định, người
khác cần học cách **nhường nhịn và thích ứng**.

🌟 **+ Thiên Mã + Lộc Tồn** = anh em **QUYỀN QUÝ**.

⚠️ **+ Phục Binh + Thai + Đế Vượng** (Thai Phục Vượng Tướng): anh chị em **DỊ
BÀO** (khác mẹ/khác cha) hoặc có người **DÂM ĐÃNG**.`,
  },

  // ============================================================
  // 18. Tướng Quân + Tuần Triệt - ông tướng cụt đầu
  // ============================================================
  {
    id: 'tuong-quan-tuan-triet',
    title: 'Tướng Quân + Tuần Triệt - "Ông tướng cụt đầu"',
    sao: ['Tướng Quân'],
    ketHop: ['Tuần', 'Triệt'],
    doUuTien: 65,
    tomTat: `⚠️ **Tướng Quân + Tuần / Triệt án ngữ** = **"ÔNG TƯỚNG CỤT ĐẦU"** —
**CỰC XẤU**:
- **Tổn hại tánh mạng, công danh, quyền thế**
- **Truất giáng, bãi cách**
- **Tai nạn xe cộ, phi cơ, gươm đao, súng đạn KHỦNG KHIẾP**

→ Quyền uy và dũng mãnh gần như **bị triệt tiêu hoàn toàn**.

⚠️ **+ Thiên Hình / Hóa Kỵ / Kiếp Sát:** mức nguy hại **tăng cao**, kéo theo
nhiều **rắc rối, tai ương bất ngờ**, đặc biệt khi xuất hiện trong **VẬN HẠN**.`,
  },

  // ============================================================
  // 19. Tướng Quân + Phục Binh + Không Kiếp - mưu sát
  // ============================================================
  {
    id: 'tuong-quan-phuc-binh-khong-kiep',
    title: 'Tướng Quân + Phục Binh + Không Kiếp - Nguy hiểm tính mạng',
    sao: ['Tướng Quân'],
    ketHop: ['Phục Binh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 65,
    tomTat: `⚠️ **Tướng Quân + Phục Binh + Địa Không / Địa Kiếp:** **NGUY HIỂM
ĐẾN TÍNH MẠNG** — vì có **NGƯỜI MƯU SÁT**.

→ Cách cục cực hung — Tướng quân bị quân phản (Phục Binh) lại còn gặp Không
Kiếp → có người ám hại sau lưng.

⚠️ Cẩn trọng đặc biệt khi vận hạn đi vào cung này.`,
  },

  // ============================================================
  // 20. Tướng Quân + Đào Hồng - thất tiết, hoang dâm
  // ============================================================
  {
    id: 'tuong-quan-dao-hong',
    title: 'Tướng Quân + Đào Hoa / Hồng Loan - Thất tiết, hoang dâm',
    sao: ['Tướng Quân'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 60,
    tomTat: `⚠️ **Tướng Quân + Đào Hoa / Hồng Loan** — cách xấu cho phẩm hạnh.

⚠️ **+ Phá Quân + Phục Binh:** **DÂM DỤC quá đáng**, **tư thông, ngoại dâm,
LOẠN LUÂN**.

(Xem entries chuyên biệt theo giới tính.)`,
  },

  {
    id: 'tuong-quan-dao-hong-nam',
    title: '⚠️ Tướng Quân + Đào / Hồng - Nam mệnh hoang dâm',
    sao: ['Tướng Quân'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    gioiTinh: 'Nam',
    doUuTien: 55,
    tomTat: `⚠️ **Tướng Quân + Đào Hoa / Hồng Loan - Nam mệnh:**

**HOANG DÂM** — đam mê sắc dục quá độ.`,
  },

  {
    id: 'tuong-quan-dao-hong-nu',
    title: '⚠️ Tướng Quân + Đào / Hồng - Nữ mệnh thất tiết',
    sao: ['Tướng Quân'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    gioiTinh: 'Nữ',
    doUuTien: 55,
    tomTat: `⚠️ **Tướng Quân + Đào Hoa / Hồng Loan - Nữ mệnh:**

- Tơ duyên **rắc rối**
- **Bị thất tiết**
- **Ngoại dâm**

→ Cách rất xấu cho phẩm hạnh, đặc biệt nguy hiểm với nữ mệnh.`,
  },

  // ============================================================
  // 21. Bộ Thai Phục Vượng Tướng (đặc biệt nữ mệnh)
  // ============================================================
  {
    id: 'tuong-quan-thai-phuc-vuong',
    title: 'Tướng Quân + Thai + Phục Binh + Đế Vượng - Bộ "Thai Phục Vượng Tướng"',
    sao: ['Tướng Quân'],
    ketHop: ['Thai', 'Phục Binh', 'Đế Vượng'],
    doUuTien: 65,
    tomTat: `⚠️ **Tướng Quân + Thai + Phục Binh + Đế Vượng** = bộ **"THAI PHỤC
VƯỢNG TƯỚNG"** — chủ về **THĂNG TRẦM và THỬ THÁCH** trong tình duyên, đặc biệt
liên quan đến **lừa dối** hoặc **trắc trở hôn nhân**.

⚠️ **NỮ giới:** cần đề phòng **rủi ro tổn hại THỂ XÁC** — tránh **sập bẫy
tình ái** rồi bị **lợi dụng**.

⚠️ Đương số dễ vướng:
- **Quan hệ ngoài luồng**
- **Thị phi tình ái** mang tính **lừa gạt, chiếm đoạt**

🌟 **+ Phúc thiện tinh hóa giải:** vợ chồng thường được **thử thách bằng thời
gian sống chung** trước khi về một nhà → vẫn ổn nếu vượt qua.`,
  },

  // ============================================================
  // 22. Lời khuyên hóa giải Tướng Quân
  // ============================================================
  {
    id: 'tuong-quan-hoa-giai',
    title: 'Lời khuyên hóa giải hung họa Tướng Quân',
    sao: ['Tướng Quân'],
    doUuTien: 70,
    tomTat: `💡 **Lời khuyên hóa giải Tướng Quân** — sự mạnh mẽ là **"con dao hai
lưỡi"**:

**1. Chọn nghề phù hợp:**
- Môi trường cần **kỷ luật cao**: **quân đội, công an, lực lượng vũ trang**
- Lĩnh vực đòi hỏi **tổ chức, lãnh đạo**
- → Nóng nảy/cương cường được tôi luyện thành **bản lĩnh, quyết đoán**

**2. Tu dưỡng tâm tính:**
- Dùng **quyền lực để giúp người**, **tích phúc đức**
- "**Gieo nhân lành, gặt quả ngọt**" → tránh "sinh nghề tử nghiệp"

**3. Khi gặp Tuần Triệt:**
- **Giữ bình tĩnh**, không tham lam, không sinh hận
- **Lùi một bước**, chọn công việc **ổn định, an toàn**
- Khi thời vận trở lại có thể **bứt phá**

**4. Cẩn trọng vận hạn xấu:**
- Đại/tiểu vận có Tướng Quân + Hình / Kỵ / Không / Kiếp / Tuần / Triệt → phải
  **hết sức thận trọng**
- **Tránh va chạm**, biết "**dĩ hòa vi quý**" để vượt sóng gió`,
  },
];
