import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO ĐỊA KIẾP - Lục Sát Tinh
 *
 * Phần chung của bộ Không Kiếp (sát tinh nặng nhất, Tuần Triệt đảo ngược,
 * tính tình đắc/hãm, sao chế giải/tăng ác, các cách kết hợp đặc biệt,
 * đặc biệt nữ mệnh, 3 cách tai ương) đã viết tại file dia-khong.ts với
 * tag cả 2 sao. File này chỉ viết phần RIÊNG của Địa Kiếp + 11 cung.
 */
export const luanGiai_DiaKiep: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung của sao Địa Kiếp
  // ============================================================
  {
    id: 'dia-kiep-tinh-chat-chung',
    title: 'Địa Kiếp - Đặc tính chung',
    sao: ['Địa Kiếp'],
    doUuTien: 30,
    tomTat: `**Địa Kiếp** thuộc bộ **Lục Sát Tinh** và **Tứ Sát**, ngũ hành **Hỏa**
(**Dương Hỏa**) — khác Địa Không (Âm Hỏa).

**Hóa khí:** **Sát Tinh, Hung Tinh, Dâm Tinh**.

**Vị trí miếu hãm:**
- **Đắc địa:** Tý, Dần, Mão, Tỵ, Thân
- **Hãm địa:** Sửu, Thìn, Ngọ, Mùi, Dậu, Tuất, Hợi

Cùng **Địa Không** = bộ **"Không Kiếp"** — biến cố **bộc phát**, tai nạn **trực
diện**, **tổn thất khốc liệt** — sao của **đổ vỡ KHÔNG báo trước**.

📌 Phần chung Không Kiếp (sát tinh nặng nhất, Tuần Triệt đảo ngược, đắc địa
hoạnh phát hoạnh phá, sao chế giải / tăng ác, đặc biệt bất lợi nữ mệnh, các
cách kết hợp) đã viết tại sao Địa Không.`,

    chiTiet: `## So sánh Địa Không vs Địa Kiếp

| | Địa Không | Địa Kiếp |
|---|---|---|
| **Tính** | Âm Hỏa | **Dương Hỏa** |
| **Bộc phát** | Trống rỗng, mất mát ngầm | **Trực diện, tổn thất khốc liệt** |
| **Đắc địa** | Dần, Thân, Tỵ, Hợi | **Tý, Dần, Mão, Tỵ, Thân** |
| **Tên gọi** | Đoạn Trường Sát | — |

**Lưu ý:** Tại **Tỵ và Hợi** Kiếp Không **không bao giờ đồng cung** — luôn xung
chiếu nhau qua trục Tỵ-Hợi.`,
  },

  // ============================================================
  // 2. Địa Kiếp tại Mệnh
  // ============================================================
  {
    id: 'dia-kiep-tai-menh',
    title: 'Địa Kiếp tại Mệnh',
    sao: ['Địa Kiếp'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `**Địa Kiếp cư Mệnh:** ảnh hưởng mạnh tới nội tâm và đường đời — biểu
hiện rõ rệt theo trạng thái đắc / hãm.`,
  },

  {
    id: 'dia-kiep-tai-menh-dac',
    sao: ['Địa Kiếp'],
    cung: ['Mệnh'],
    trangThai: ['Đắc'],
    doUuTien: 75,
    tomTat: `🌟 **Địa Kiếp Đắc địa tại Mệnh:** **nội tâm mạnh mẽ, kiên cường, quyết đoán**.
"Đâm lao phải theo lao" — không dễ khuất phục, luôn tìm cách **xoay chuyển tình
thế, vượt nghịch cảnh**.`,
  },

  {
    id: 'dia-kiep-tai-menh-dac-tu-vi-thien-tuong-pha-quan',
    sao: ['Địa Kiếp'],
    cung: ['Mệnh'],
    trangThai: ['Đắc'],
    ketHop: ['Thiên Tướng', 'Phá Quân', 'Tử Vi'],
    doUuTien: 72,
    tomTat: `🌟 **Địa Kiếp Đắc địa tại Mệnh + Thiên Tướng / Phá Quân / Tử Vi:** vận
khí **thăng tiến**, đạt thành tựu lớn.`,
  },

  {
    id: 'dia-kiep-tai-menh-ham',
    sao: ['Địa Kiếp'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    doUuTien: 75,
    tomTat: `⚠️ **Địa Kiếp Hãm địa tại Mệnh:** **căng thẳng nội tâm, nóng nảy, bức bối** →
hành động **thiếu suy nghĩ**. Trắc trở liên tục → **bế tắc, cô lập**. Cuộc đời
nhiều biến động — "như diều gặp gió" rồi "xuống dốc không phanh".`,
  },

  {
    id: 'dia-kiep-tai-menh-kinh-dia-khong',
    sao: ['Địa Kiếp'],
    cung: ['Mệnh'],
    ketHop: ['Kình Dương', 'Địa Không'],
    doUuTien: 72,
    tomTat: `⚠️ **Địa Kiếp tại Mệnh + Kình Dương / Địa Không:** sức khỏe / tài chính
**hao tổn nặng nề**.`,
  },

  // ============================================================
  // 3. Địa Kiếp tại Phụ Mẫu
  // ============================================================
  {
    id: 'dia-kiep-tai-phu-mau',
    title: 'Địa Kiếp tại Phụ Mẫu',
    sao: ['Địa Kiếp'],
    cung: ['Phụ Mẫu'],
    doUuTien: 70,
    tomTat: `**Địa Kiếp tại Phụ Mẫu:** quan hệ với cha mẹ chịu ảnh hưởng nặng — biểu
hiện theo trạng thái đắc / hãm.`,
  },

  {
    id: 'dia-kiep-tai-phu-mau-ham',
    sao: ['Địa Kiếp'],
    cung: ['Phụ Mẫu'],
    trangThai: ['Hãm'],
    doUuTien: 75,
    tomTat: `⚠️ **Địa Kiếp Hãm địa tại Phụ Mẫu:** **hình khắc nặng nề** — cha mẹ dễ
**tai họa, bệnh tật triền miên, hình tù, ly tán**. Quan hệ căng thẳng, cãi vã,
**bạo hành**. Con cái không chỉ không nhờ được mà còn **gánh chịu hậu quả** từ
cha mẹ. Cha mẹ vất vả, có thể có **thói xấu nghiện ngập, cờ bạc**.`,
  },

  {
    id: 'dia-kiep-tai-phu-mau-dac',
    sao: ['Địa Kiếp'],
    cung: ['Phụ Mẫu'],
    trangThai: ['Đắc'],
    doUuTien: 75,
    tomTat: `🌟 **Địa Kiếp Đắc địa tại Phụ Mẫu:** vẫn có hình khắc nhưng **giảm bớt**.
Cha mẹ **mạnh mẽ, quyết đoán**, làm ngành **mạo hiểm hoặc bí mật**. Vẫn có
thăng trầm, **con cái khó nhờ cha mẹ**, nguy cơ ly cách / sức khỏe vẫn tiềm
tàng nhưng không quá nặng.`,
  },

  // ============================================================
  // 4. Địa Kiếp tại Phúc Đức
  // ============================================================
  {
    id: 'dia-kiep-tai-phuc-duc',
    title: 'Địa Kiếp tại Phúc Đức',
    sao: ['Địa Kiếp'],
    cung: ['Phúc Đức'],
    doUuTien: 70,
    tomTat: `**Địa Kiếp tại Phúc Đức:** ảnh hưởng nghiệp duyên và phúc phần dòng họ —
biểu hiện rõ theo trạng thái đắc / hãm.`,
  },

  {
    id: 'dia-kiep-tai-phuc-duc-ham',
    sao: ['Địa Kiếp'],
    cung: ['Phúc Đức'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `⚠️ **Địa Kiếp Hãm địa tại Phúc Đức:** dòng họ **sa sút, lụn bại**, có
**người xấu, bất hảo**. Sự nghiệp nhiều biến động, tuổi thọ chiết giảm, **bệnh
nan y**. Đây là **NGHIỆP DUYÊN NẶNG NỀ** — phá hỏng nhân duyên cá nhân, **hôn
nhân không trọn vẹn**, vợ chồng chia ly. Phải gánh nặng cả 2 gia đình.`,
  },

  {
    id: 'dia-kiep-tai-phuc-duc-dac',
    sao: ['Địa Kiếp'],
    cung: ['Phúc Đức'],
    trangThai: ['Đắc'],
    doUuTien: 75,
    tomTat: `🌟 **Địa Kiếp Đắc địa tại Phúc Đức:** dòng họ thịnh vượng, phát đạt
**nhanh chóng nhưng không bền**. Mộ phần ban đầu được chăm sóc nhưng dễ
**động chạm, thất lạc** sau.`,
  },

  {
    id: 'dia-kiep-tai-phuc-duc-luc-cat-tu-duc',
    sao: ['Địa Kiếp'],
    cung: ['Phúc Đức'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt', 'Thiên Đức', 'Nguyệt Đức', 'Phúc Đức', 'Long Đức'],
    doUuTien: 72,
    tomTat: `🌟 **Địa Kiếp tại Phúc Đức + Lục Cát Tinh hoặc Tứ Đức (Thiên Đức / Nguyệt
Đức / Phúc Đức / Long Đức):** hưởng **phúc lộc trời ban**, gặp **quý nhân giúp
đỡ**.`,
  },

  // ============================================================
  // 5. Địa Kiếp tại Tật Ách
  // ============================================================
  {
    id: 'dia-kiep-tai-tat-ach',
    title: 'Địa Kiếp tại Tật Ách',
    sao: ['Địa Kiếp'],
    cung: ['Tật Ách'],
    doUuTien: 80,
    tomTat: `**Địa Kiếp tại Tật Ách:** tai họa và bệnh tật **bất ngờ, khó lường**.

⚠️ Người bệnh dễ **tuyệt vọng, sa sút tinh thần** → đưa ra **quyết định sai lầm**.
→ Cần lối sống khoa học, tìm hỗ trợ y tế kịp thời.`,
  },

  {
    id: 'dia-kiep-tai-tat-ach-dac',
    sao: ['Địa Kiếp'],
    cung: ['Tật Ách'],
    trangThai: ['Đắc'],
    doUuTien: 75,
    tomTat: `🌟 **Địa Kiếp Đắc địa tại Tật Ách:** mắc bệnh nguy hiểm nhưng **chữa trị
kịp thời**, hoặc gặp tai nạn nhưng **vượt qua được**. ⚠️ Vẫn cần cẩn trọng —
nguy cơ **tái phát hoặc biến chứng** luôn có thể xảy đến.`,
  },

  {
    id: 'dia-kiep-tai-tat-ach-ham',
    sao: ['Địa Kiếp'],
    cung: ['Tật Ách'],
    trangThai: ['Hãm'],
    doUuTien: 75,
    tomTat: `⚠️ **Địa Kiếp Hãm địa tại Tật Ách:** sức ảnh hưởng **gấp bội**. Bệnh
thường thành **NAN Y**, **khó tìm nguyên nhân**, điều trị nhiều trở ngại. Dễ
**bệnh lạ, dị tật bẩm sinh**, tai nạn bất ngờ ảnh hưởng **tuổi thọ**.`,
  },

  // ============================================================
  // 6. Địa Kiếp tại Quan Lộc
  // ============================================================
  {
    id: 'dia-kiep-tai-quan-loc',
    title: 'Địa Kiếp tại Quan Lộc',
    sao: ['Địa Kiếp'],
    cung: ['Quan Lộc'],
    doUuTien: 70,
    tomTat: `**Địa Kiếp tại Quan Lộc:** ảnh hưởng đường công danh sự nghiệp — biểu
hiện theo trạng thái đắc / hãm.`,
  },

  {
    id: 'dia-kiep-tai-quan-loc-ham',
    sao: ['Địa Kiếp'],
    cung: ['Quan Lộc'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `⚠️ **Địa Kiếp Hãm địa tại Quan Lộc:** công danh **bấp bênh**, khó được
**trọng dụng** dù có tài. **Mất chức ít nhất 1 lần** trong đời. Dễ **bỏ dở học
/ công việc giữa chừng**. Có xu hướng **làm tắt, làm ẩu, mánh khóe không chính
đáng**.`,
  },

  {
    id: 'dia-kiep-tai-quan-loc-ham-sat-tinh',
    sao: ['Địa Kiếp'],
    cung: ['Quan Lộc'],
    trangThai: ['Hãm'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 73,
    tomTat: `⚠️ **Địa Kiếp Hãm địa tại Quan Lộc + nhiều sát tinh (Tứ Sát):** sa ngã
vào **ngành bất hợp pháp / thế giới ngầm**.`,
  },

  {
    id: 'dia-kiep-tai-quan-loc-dac',
    sao: ['Địa Kiếp'],
    cung: ['Quan Lộc'],
    trangThai: ['Đắc'],
    doUuTien: 75,
    tomTat: `🌟 **Địa Kiếp Đắc địa tại Quan Lộc:** sự nghiệp **bùng nổ, thành công
nhanh chóng** nhưng **không bền** — "lên rồi xuống, xuống rồi lại lên", đỉnh
cao rồi mất tất cả. Làm công việc **mạo hiểm, liều lĩnh, đôi khi phi nhân tính**
để **làm giàu chớp nhoáng**.`,
  },

  // ============================================================
  // 7. Địa Kiếp tại Nô Bộc
  // ============================================================
  {
    id: 'dia-kiep-tai-no-boc',
    title: 'Địa Kiếp tại Nô Bộc',
    sao: ['Địa Kiếp'],
    cung: ['Nô Bộc'],
    doUuTien: 70,
    tomTat: `**Địa Kiếp tại Nô Bộc:** ảnh hưởng quan hệ bạn bè / đồng nghiệp — biểu
hiện theo trạng thái đắc / hãm.`,
  },

  {
    id: 'dia-kiep-tai-no-boc-ham',
    sao: ['Địa Kiếp'],
    cung: ['Nô Bộc'],
    trangThai: ['Hãm'],
    doUuTien: 75,
    tomTat: `⚠️ **Địa Kiếp Hãm địa tại Nô Bộc:** **mâu thuẫn, hiểu lầm, bị phản bội**
trong quan hệ bạn bè / đồng nghiệp. Cảm giác **cô lập, thiếu hỗ trợ**.`,
  },

  {
    id: 'dia-kiep-tai-no-boc-ham-khong-kinh-sat',
    sao: ['Địa Kiếp'],
    cung: ['Nô Bộc'],
    trangThai: ['Hãm'],
    ketHop: ['Địa Không', 'Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 72,
    tomTat: `⚠️ **Địa Kiếp Hãm địa tại Nô Bộc + Địa Không / Kình / sát tinh:** rắc rối
lớn, bị **tiểu nhân vu oan** → cần "chọn mặt gửi vàng", tránh giao toàn quyền
lực / tài chính cho người khác.`,
  },

  {
    id: 'dia-kiep-tai-no-boc-dac',
    sao: ['Địa Kiếp'],
    cung: ['Nô Bộc'],
    trangThai: ['Đắc'],
    doUuTien: 75,
    tomTat: `🌟 **Địa Kiếp Đắc địa tại Nô Bộc:** kết giao với **người tài năng địa vị**,
kể cả **lực lượng vũ trang**. ⚠️ Vẫn tiềm ẩn biến động — đề phòng **bạn bè giỏi
nhưng có thể mang tai họa**. Phản bội/lừa gạt có nhưng **kiểm soát được**.`,
  },

  // ============================================================
  // 8. Địa Kiếp tại Thiên Di
  // ============================================================
  {
    id: 'dia-kiep-tai-thien-di',
    title: 'Địa Kiếp tại Thiên Di',
    sao: ['Địa Kiếp'],
    cung: ['Thiên Di'],
    doUuTien: 70,
    tomTat: `**Địa Kiếp tại Thiên Di:** ảnh hưởng đường ra ngoài, đi xa — biểu hiện
rõ theo trạng thái đắc / hãm.`,
  },

  {
    id: 'dia-kiep-tai-thien-di-dac',
    sao: ['Địa Kiếp'],
    cung: ['Thiên Di'],
    trangThai: ['Đắc'],
    doUuTien: 78,
    tomTat: `🌟 **Địa Kiếp Đắc địa tại Thiên Di:** **"phát dã như lôi"** — làm giàu
nhanh chóng, **trúng mánh** / gặp **vận may từ bên ngoài**. ⚠️ Thành công
**không bền**, tiền đến nhanh đi nhanh, đôi khi **mất nhiều hơn kiếm được**.
Bên ngoài huy hoàng nhưng **rủi ro tiềm ẩn**.`,
  },

  {
    id: 'dia-kiep-tai-thien-di-ham',
    sao: ['Địa Kiếp'],
    cung: ['Thiên Di'],
    trangThai: ['Hãm'],
    doUuTien: 75,
    tomTat: `⚠️ **Địa Kiếp Hãm địa tại Thiên Di:** xa quê **lạc lõng, cô đơn**. Giao
tiếp kém linh hoạt, khó tạo quan hệ sâu sắc, dễ **hiểu lầm, xa cách**. Đi xa
/ công tác → dễ **tai tiếng, thị phi**.`,
  },

  // ============================================================
  // 9. Địa Kiếp tại Điền Trạch
  // ============================================================
  {
    id: 'dia-kiep-tai-dien-trach',
    title: 'Địa Kiếp tại Điền Trạch',
    sao: ['Địa Kiếp'],
    cung: ['Điền Trạch'],
    doUuTien: 70,
    tomTat: `**Địa Kiếp tại Điền Trạch:** ảnh hưởng đất đai gia sản — biểu hiện rõ
theo trạng thái đắc / hãm.`,
  },

  {
    id: 'dia-kiep-tai-dien-trach-ham',
    sao: ['Địa Kiếp'],
    cung: ['Điền Trạch'],
    trangThai: ['Hãm'],
    doUuTien: 75,
    tomTat: `⚠️ **Địa Kiếp Hãm địa tại Điền Trạch:** dễ gặp **tranh chấp đất đai, rắc
rối pháp lý**, hoặc mua phải tài sản **phong thủy xấu**. Phải **di chuyển
nhiều lần**. Quan hệ gia đình về đất đai **không hòa thuận**, thiếu yên ổn.`,
  },

  {
    id: 'dia-kiep-tai-dien-trach-dac',
    sao: ['Địa Kiếp'],
    cung: ['Điền Trạch'],
    trangThai: ['Đắc'],
    doUuTien: 75,
    tomTat: `🌟 **Địa Kiếp Đắc địa tại Điền Trạch:** quản lý, duy trì bất động sản
**ổn định, bền vững theo thời gian**. **Gắn bó sâu sắc** với đất tổ tiên, biết
**giữ gìn và phát huy gia sản**.`,
  },

  {
    id: 'dia-kiep-tai-dien-trach-phu-ta-huu-loc',
    sao: ['Địa Kiếp'],
    cung: ['Điền Trạch'],
    ketHop: ['Thiên Phủ', 'Tả Phù', 'Hữu Bật', 'Lộc Tồn'],
    doUuTien: 72,
    tomTat: `🌟 **Địa Kiếp tại Điền Trạch + Thiên Phủ / Tả Hữu / Lộc Tồn:** **thừa kế**
hoặc **mở rộng tài sản âm thầm, ít người biết**. ⚠️ Cần thận trọng — "tham thì
thâm".`,
  },

  // ============================================================
  // 10. Địa Kiếp tại Tài Bạch
  // ============================================================
  {
    id: 'dia-kiep-tai-tai-bach',
    title: 'Địa Kiếp tại Tài Bạch',
    sao: ['Địa Kiếp'],
    cung: ['Tài Bạch'],
    doUuTien: 80,
    tomTat: `**Địa Kiếp tại Tài Bạch:** "**phất lên CỰC NHANH**" — thời gian ngắn
kiếm được khối tài sản lớn.

⚠️ **Phá sản đến nhanh chóng và bất ngờ** như lúc làm giàu. Xu hướng kiếm tiền
bằng đường **táo bạo, mạo hiểm** (đầu cơ, tích trữ), thậm chí **bất chính** —
**buôn lậu, mua bán đồ quốc cấm**.

⚠️ Dễ **hao tài tốn của** do quản lý kém hoặc **bị lừa gạt**. Thu nhập không
ổn định, dễ mất tiền do **tranh chấp / đầu tư sai lầm** → áp lực và **bất an**.`,
  },

  // ============================================================
  // 11. Địa Kiếp tại Tử Tức
  // ============================================================
  {
    id: 'dia-kiep-tai-tu-tuc',
    title: 'Địa Kiếp tại Tử Tức',
    sao: ['Địa Kiếp'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Địa Kiếp tại Tử Tức:** tình cảm cha mẹ - con cái có **vấn đề** hoặc
**xung khắc giữa con cái với nhau**.`,
  },

  {
    id: 'dia-kiep-tai-tu-tuc-ham',
    sao: ['Địa Kiếp'],
    cung: ['Tử Tức'],
    trangThai: ['Hãm'],
    doUuTien: 70,
    tomTat: `⚠️ **Địa Kiếp Hãm địa tại Tử Tức:** **mâu thuẫn / hiểu lầm nghiêm trọng**
với con cái. Con dễ mắc **vấn đề sức khỏe, học hành, tinh thần không ổn định**.
**Tranh chấp / rạn nứt** có thể xảy ra → cần **kiên nhẫn, mềm mỏng** ("mưa dầm
thấm lâu") để hóa giải nóng nảy.`,
  },

  {
    id: 'dia-kiep-tai-tu-tuc-dac',
    sao: ['Địa Kiếp'],
    cung: ['Tử Tức'],
    trangThai: ['Đắc'],
    doUuTien: 70,
    tomTat: `🌟 **Địa Kiếp Đắc địa tại Tử Tức:** con cái **năng lực, phát triển mạnh**
trong ngành **đặc thù, táo bạo, mạo hiểm**. Hiếm muộn / bất hòa vẫn có nhưng
**không nghiêm trọng** — con **tự lập sớm, ít phụ thuộc** cha mẹ.`,
  },

  // ============================================================
  // 12. Địa Kiếp tại Phu Thê
  // ============================================================
  {
    id: 'dia-kiep-tai-phu-the',
    title: 'Địa Kiếp tại Phu Thê',
    sao: ['Địa Kiếp'],
    cung: ['Phu Thê'],
    doUuTien: 80,
    tomTat: `**Địa Kiếp tại Phu Thê:** tình cảm thường đến **NHANH** — yêu nhanh,
cưới nhanh. Hôn nhân **nhiều biến động**.

Vợ chồng đến với nhau **liều lĩnh, bất chấp phản đối**. Ban đầu khó khăn.

⚠️ Sự thịnh vượng **không kéo dài** — khi có của cải lại **xung đột, nguy cơ
tan vỡ**. Quan hệ **lạnh nhạt, thiếu sẻ chia**.`,
  },

  {
    id: 'dia-kiep-tai-phu-the-dac',
    sao: ['Địa Kiếp'],
    cung: ['Phu Thê'],
    trangThai: ['Đắc'],
    doUuTien: 75,
    tomTat: `🌟 **Địa Kiếp Đắc địa tại Phu Thê:** vợ chồng đến với nhau liều lĩnh, ban
đầu khó khăn, sau **phát đạt nhanh chóng**.`,
  },

  {
    id: 'dia-kiep-tai-phu-the-khong-kinh-sat',
    sao: ['Địa Kiếp'],
    cung: ['Phu Thê'],
    ketHop: ['Địa Không', 'Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 73,
    tomTat: `⚠️ **Địa Kiếp tại Phu Thê + Địa Không / Kình / sát tinh:** **biến cố hôn
nhân, rạn nứt lớn** → **chia ly**.`,
  },

  // ============================================================
  // 13. Địa Kiếp tại Huynh Đệ
  // ============================================================
  {
    id: 'dia-kiep-tai-huynh-de',
    title: 'Địa Kiếp tại Huynh Đệ',
    sao: ['Địa Kiếp'],
    cung: ['Huynh Đệ'],
    doUuTien: 70,
    tomTat: `**Địa Kiếp tại Huynh Đệ:** ảnh hưởng quan hệ anh chị em — biểu hiện rõ
theo trạng thái đắc / hãm.`,
  },

  {
    id: 'dia-kiep-tai-huynh-de-ham',
    sao: ['Địa Kiếp'],
    cung: ['Huynh Đệ'],
    trangThai: ['Hãm'],
    doUuTien: 75,
    tomTat: `⚠️ **Địa Kiếp Hãm địa tại Huynh Đệ:** quan hệ huynh đệ **đứt gãy, xa cách
lạnh nhạt** hoặc **ganh đua khốc liệt**. Người trong gia tộc **mang tâm cơ**,
dễ **xung đột lợi ích, tranh chấp tài sản, quyền lực**. Có thể **khuyết thiếu
huynh đệ**, sinh ra trong hoàn cảnh **đơn chiếc**.`,
  },

  {
    id: 'dia-kiep-tai-huynh-de-dac',
    sao: ['Địa Kiếp'],
    cung: ['Huynh Đệ'],
    trangThai: ['Đắc'],
    doUuTien: 75,
    tomTat: `🌟 **Địa Kiếp Đắc địa tại Huynh Đệ:** anh chị em **chí khí**, cùng nhau
vượt khó, sát cánh trong sự nghiệp. Quan hệ **gắn bó**, có va chạm nhỏ nhưng
giữ được **kính trọng nâng đỡ**. Anh chị em **cá tính mạnh, dám nghĩ dám làm**,
có vai trò **dẫn dắt**.`,
  },

  // ============================================================
  // 14. Hung họa khi sao Địa Kiếp vào hạn
  // ============================================================
  {
    id: 'dia-kiep-han',
    title: '⚠️ Địa Kiếp vào hạn - 3 hung họa',
    sao: ['Địa Kiếp'],
    doUuTien: 55,
    tomTat: `⚠️ **Hạn đến Địa Kiếp - 3 hung họa:**

1. **Tiền bạc HAO TÁN:** mất mát do **đầu tư sai, bị lừa gạt**, hoặc chi tiêu
   đột xuất ngoài dự liệu → **"liệu cơm gắp mắm"**, tránh phung phí và may rủi
2. **MẤT CHỨC, MẤT QUYỀN:** với người làm quan / lãnh đạo dễ xảy ra **biến động
   bất lợi** do quyết định **nóng vội thiếu khôn ngoan** → cần thận trọng từng
   quyết định, **khéo léo bảo toàn uy tín**
3. **VẬN HẠN BỆNH TẬT:** đặc biệt **Phá Quân + Địa Không + Địa Kiếp + Đại Hao
   + Tiểu Hao** → cảnh báo **bệnh nặng đường hô hấp**. Cần dưỡng sinh, ăn uống
   điều độ, khám sức khỏe định kỳ`,
  },

  {
    id: 'dia-kiep-han-mo-xe',
    title: '⚠️ Địa Kiếp + Phá Quân + Đại Hao + Tiểu Hao + Kình Dương + Thiên Hình vào hạn - mổ xẻ',
    sao: ['Địa Kiếp'],
    ketHop: ['Phá Quân', 'Đại Hao', 'Tiểu Hao', 'Kình Dương', 'Thiên Hình'],
    doUuTien: 50,
    tomTat: `⚠️ **Địa Kiếp + Phá Quân + Đại Hao + Tiểu Hao + Kình Dương + Thiên
Hình vào hạn:** phải **mổ xẻ** — bệnh nặng đường hô hấp cần phẫu thuật.`,
  },

  // ============================================================
  // 15. Hóa giải Địa Kiếp
  // ============================================================
  {
    id: 'dia-kiep-hoa-giai',
    title: 'Địa Kiếp - Cách hóa giải',
    sao: ['Địa Kiếp'],
    doUuTien: 40,
    tomTat: `**Hóa giải Địa Kiếp = TRÁNH HÀNH ĐỘNG CỰC ĐOAN, LIỀU LĨNH:**

1. **Thu lại "cái tôi"** — nhìn thẳng vào bản chất vấn đề thay vì phản ứng
   theo cảm xúc. Chấp nhận cả ưu lẫn nhược điểm → chuyển hóa **tổn thương thành
   thấu hiểu**
2. **Điều chỉnh tam quan** (thế giới - nhân sinh - giá trị) phù hợp **chuẩn
   mực đạo đức** và xã hội. Tránh **hành động cực đoan / liều lĩnh không cần
   thiết**
3. **Tại các cung quan hệ:** tìm hiểu bản chất từng mối liên kết, rèn **kỹ năng
   hòa giải**. **Thiết lập nguyên tắc ngay từ đầu** để hạn chế rủi ro
4. **Hướng thiện, tu tâm dưỡng tính** + để **cát tinh hội chiếu** → khi tâm an
   định, trí sáng suốt → Địa Kiếp **không còn là họa**, ngược lại trở thành
   **động lực trưởng thành** qua mỗi thử thách`,
  },
];
