import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO ĐÀO HOA - Dâm Tinh, Mộc đới Thủy
 * (File đầu tiên của bộ Tam Minh - chứa phần chung Đào Hồng + Tam Minh Đào Hồng Hỷ)
 */
export const luanGiai_DaoHoa: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung sao Đào Hoa
  // ============================================================
  {
    id: 'dao-hoa-tinh-chat-chung',
    title: 'Đào Hoa - Đặc tính chung',
    sao: ['Đào Hoa'],
    doUuTien: 30,
    tomTat: `**Đào Hoa** — **Dâm Tinh** chủ về **tình** và **yểu**.

**Ngũ hành:** **Mộc** (đới Thủy).

**Đặc tính:** **sắc đẹp, duyên dáng, sức hấp dẫn**, ái tình, **tài năng nghệ
thuật**, đào hoa quyến rũ.

**Vị trí an sao:** chỉ ở 4 cung **Tý - Ngọ - Mão - Dậu** (Tứ Chính / Đào Hoa địa).

⚡ **Vai trò trong tử vi:**
- Tăng **sức hấp dẫn cá nhân**, khả năng giao tiếp, **thẩm mỹ với người khác giới**
- Có thể mang **may mắn** lẫn **thị phi**
- Ảnh hưởng đến **cưới xin, đời sống chăn gối, thi cử, công danh**`,

    chiTiet: `## Tính chất "vừa cát vừa hung"

Đào Hoa bản thân đã mang tính **vừa cát vừa hung** — tốt xấu thực sự phụ thuộc
**hội họp với sao nào** trong lá số.

## Cách cục đặc biệt

Đào Hoa nằm trong **tam hợp hoặc đồng cung với Thiên Không và Kiếp Sát**, hợp
thành bộ **Đào - Không - Sát** nổi bật trong lá số.

## Khía cạnh sự nghiệp

- Dễ nổi bật trong **môi trường có nhiều người khác giới**
- Phát triển tốt ở các lĩnh vực **nghệ thuật, sáng tạo, PR, truyền thông**

## Khía cạnh tài lộc

- Khả năng **kiếm tiền từ tài năng, ngoại hình, sự duyên dáng**
- Nếu đi cùng sao xấu → **sa đà vào lối sống hưởng thụ hoặc tệ nạn**`,
  },

  // ============================================================
  // 2. Vị trí Đào Hoa - đắc địa nhất ở Mão
  // ============================================================
  {
    id: 'dao-hoa-vi-tri-mieu-ham',
    title: 'Đào Hoa - Vị trí miếu hãm theo cung Tý/Ngọ/Mão/Dậu',
    sao: ['Đào Hoa'],
    chi: ['Tý', 'Ngọ', 'Mão', 'Dậu'],
    doUuTien: 40,
    tomTat: `⚡ **Đào Hoa chỉ an tại 4 cung Tý / Ngọ / Mão / Dậu** (Đào Hoa địa):

🌟 **ĐẮC ĐỊA NHẤT tại cung Mão:**
- Người **đắc thời về ái tình**
- Có **hấp lực quyến rũ** mạnh
- Được nhiều người biết đến và **tôn thờ**

**Đào Hoa tại Tý:**
- **Duyên ngầm**, ít được bá chúng biết
- Có những **mối tình kín đáo** (yêu trộm, được yêu trộm, biết bảo mật trong
  tình yêu)

⚠️ **Đào Hoa tại Ngọ và Dậu:**
- **Kém thi vị**, **bớt nhiều sức hấp dẫn**
- Nếu **Tuần / Triệt đồng cung** thì mới sáng lên và có triển vọng`,
  },

  // ============================================================
  // 3. Cặp Đào Hồng - đặc tính chung
  // ============================================================
  {
    id: 'dao-hong-cap-doi-chung',
    title: 'Đào Hồng - Cặp song tinh đào hoa',
    sao: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 50,
    tomTat: `🌟 **Đào Hoa + Hồng Loan** = cặp **"Đào Hồng"** — bộ song tinh chủ về:
- **Cưới xin** và **đời sống chăn gối**
- **Thi cử, công danh** — đem đến nhiều **sự vui mừng**

**So sánh Đào vs Hồng:**

| | Đào Hoa | Hồng Loan |
|---|---|---|
| **Sức mạnh** | **MẠNH HƠN** Hồng | Yếu hơn Đào |
| **Sức hút** | **Nhan sắc bề ngoài** | **Đức tính bên trong** |
| **Tính chất** | Lả lơi hơn | Khéo léo, **công - dung - ngôn** |
| **Hoa tay** | - | **Có hoa tay**, nói ngọt, đi đứng khả ái |
| **Mức sa đọa** | Dễ sa đọa hơn | **Ít sa đọa hơn** Đào |

→ Người có **Hồng tại Mệnh:** có hoa tay, **nói ngọt, có duyên**, đi đứng khả ái.`,
  },

  // ============================================================
  // 4. Tam Minh - Đào Hồng Hỷ
  // ============================================================
  {
    id: 'dao-hong-hy-tam-minh',
    title: 'Tam Minh = Đào Hoa + Hồng Loan + Thiên Hỷ',
    sao: ['Đào Hoa', 'Hồng Loan', 'Thiên Hỷ'],
    doUuTien: 55,
    tomTat: `🌟 **Đào Hoa + Hồng Loan + Thiên Hỷ** = bộ **"Tam Minh"**.

🌟 **Vai trò Tam Minh:** **GIẢM được tính dâm tà** của Đào Hồng đơn lẻ.

→ Tam Minh hiện diện tại Mệnh / Thân biểu thị:
- Sự **may mắn về tình duyên + cưới xin**
- **Vui mừng, hỉ sự**
- **Đỡ tính lả lơi** so với Đào Hồng đứng riêng

⚡ **Lưu ý:** dù có Tam Minh, nếu thêm **Nhật Nguyệt** thì **vẫn là khách đa
tình** — Tam Minh chỉ giảm dâm tà chứ không triệt tiêu hoàn toàn.`,
  },

  // ============================================================
  // 5. Đào Hồng tại Mệnh / Thân
  // ============================================================
  {
    id: 'dao-hong-tai-menh-than',
    title: 'Đào Hồng tại Mệnh / Thân - May mắn chóng qua',
    sao: ['Đào Hoa', 'Hồng Loan'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `⚠️ **Đào Hồng đóng tại Mệnh KHÔNG ĐẸP** — vì:
- May mắn nào cũng **chóng gặp lại chóng qua**
- Thường là **hai đời chồng/vợ** — nếu không cũng **dở dang lắm bận ái ân**

🌟 **Tốt nhất: Đào Hồng XUNG CHIẾU về Mệnh, Thân** (không đồng cung) — mới đẹp.`,

    chiTiet: `## Tính chất "vừa duyên vừa nghiệp"

Người có Đào Hồng tại Mệnh thường được ví như **bông hoa giữa đời** — vừa có
sắc lẫn hương:
- Ngoại hình **cuốn hút**, tài năng, khí chất khiến người khác khó làm ngơ
- Cuộc đời luôn song hành giữa **"duyên"** và **"nghiệp"** — giữa ánh hào
  quang và những rối ren tình cảm

## Đào Hồng + Sát Phá Liêm Tham (đặc biệt nữ mệnh)

⚠️ **Cực xấu:** đường tình duyên **vô cùng gian nan**, dễ:
- **Khắc chồng con**
- Gặp cảnh **chia ly hoặc góa bụa**

→ Cần **Tuần / Triệt** hoặc **Tử Phủ / Nguyệt Đức** để hóa giải mới mong giảm
bớt tai họa.`,
  },

  // ============================================================
  // 5b. Đào Hồng tại Mệnh + các bộ kết hợp (mỗi bộ 1 entry riêng)
  // ============================================================
  {
    id: 'dao-hong-menh-tu-phu-nhat-nguyet',
    title: 'Đào Hồng + Tử/Phủ/Nhật/Nguyệt tại Mệnh - Tăng rực rỡ',
    sao: ['Đào Hoa', 'Hồng Loan'],
    cung: ['Mệnh'],
    ketHop: ['Tử Vi', 'Thiên Phủ', 'Thái Dương', 'Thái Âm'],
    doUuTien: 70,
    tomTat: `🌟 **Đào Hồng + Tử Vi / Thiên Phủ / Thái Dương / Thái Âm tại Mệnh:** làm
**TĂNG cái rực rỡ** của bản mệnh.`,
  },
  {
    id: 'dao-hong-menh-van-tinh',
    title: 'Đào Hồng + Văn tinh tại Mệnh - Đỗ sớm',
    sao: ['Đào Hoa', 'Hồng Loan'],
    cung: ['Mệnh'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Lưu Niên Văn Tinh', 'Hóa Khoa'],
    doUuTien: 70,
    tomTat: `🌟 **Đào Hồng + văn tinh** (Văn Xương / Văn Khúc / Lưu Niên Văn Tinh / Hóa
Khoa) **tại Mệnh:** **đỗ sớm** — khoa cử suôn sẻ, học hành thành đạt.`,
  },
  {
    id: 'dao-hong-menh-sat-tinh-hoi',
    title: 'Đào Hồng + sát tinh hội (Không/Kiếp/Đà/Kình) tại Mệnh - Không thọ',
    sao: ['Đào Hoa', 'Hồng Loan'],
    cung: ['Mệnh'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Đà La', 'Kình Dương'],
    doUuTien: 65,
    tomTat: `⚠️ **Đào Hồng + sát tinh hội** (Địa Không / Địa Kiếp / Đà La / Kình Dương)
**tại Mệnh:** **không thọ** — mệnh **dở dang** lại còn **yểu**.`,
  },
  {
    id: 'dao-hong-menh-dia-kiep-dam-thuyen',
    title: 'Đào Hồng + Địa Kiếp tại Mệnh - Đắm thuyền',
    sao: ['Đào Hoa', 'Hồng Loan'],
    cung: ['Mệnh'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 65,
    tomTat: `⚠️ **Đào Hồng + Địa Kiếp tại Mệnh:** dễ bị **đắm thuyền** — tai nạn liên
quan **sông nước**.`,
  },
  {
    id: 'dao-hong-menh-co-cu-ta-huu-thai-tue',
    title: 'Đào Hồng + Cơ/Cự/Tả/Hữu/Thái Tuế tại Mệnh - Sức khỏe kém',
    sao: ['Đào Hoa', 'Hồng Loan'],
    cung: ['Mệnh'],
    ketHop: ['Thiên Cơ', 'Cự Môn', 'Tả Phù', 'Hữu Bật', 'Thái Tuế'],
    doUuTien: 65,
    tomTat: `⚠️ **Đào Hồng + Thiên Cơ / Cự Môn / Tả Phù / Hữu Bật / Thái Tuế tại Mệnh:**
sức khỏe **kém**, mệnh như **ngọn đèn trước gió**.`,
  },
  {
    id: 'dao-hong-menh-khong-kiep-benh-phu',
    title: 'Đào Hồng + Không/Kiếp/Bệnh Phù tại Mệnh - Bệnh phong tình',
    sao: ['Đào Hoa', 'Hồng Loan'],
    cung: ['Mệnh'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Bệnh Phù'],
    doUuTien: 65,
    tomTat: `⚠️ **Đào Hồng + Địa Không / Địa Kiếp / Bệnh Phù tại Mệnh:** mắc **bệnh
phong tình**.`,
  },

  // ============================================================
  // 6. Đào Hồng cư Quan Lộc - giàu sang
  // ============================================================
  {
    id: 'dao-hong-tai-quan-loc',
    title: 'Đào Hồng cư Quan Lộc - Số giàu sang',
    sao: ['Đào Hoa', 'Hồng Loan'],
    cung: ['Quan Lộc'],
    doUuTien: 85,
    tomTat: `🌟 **Đào Hồng cư Quan Lộc** = **số giàu sang** — một trong những vị
trí ĐẸP NHẤT của Đào Hồng.

→ Sự nghiệp đẹp, công danh hiển đạt, môi trường làm việc nhiều người khác giới
giúp đương số phát huy được sức hút và sự khéo léo.

🌟 **+ Tử / Phủ / Nhật / Nguyệt:** làm **TĂNG rực rỡ**.

🌟 **+ Khôi Việt / Tả Hữu:** **thượng cách** — mở ra con đường công danh sáng lạn.

🌟 **+ văn tinh** (Xương Khúc): công danh càng phát đạt từ tài lẻ.`,
  },

  // ============================================================
  // 7. Đào Hồng cư 4 cung Di Quan Tài Nô
  // ============================================================
  {
    id: 'dao-hong-tu-cung-di-quan-tai-no',
    title: 'Đào Hồng tại 4 cung Di / Quan / Tài / Nô',
    sao: ['Đào Hoa', 'Hồng Loan'],
    cung: ['Thiên Di', 'Quan Lộc', 'Tài Bạch', 'Nô Bộc'],
    doUuTien: 70,
    tomTat: `⚡ **Đào Hồng tại 4 cung Di / Quan / Tài / Nô** — vị trí đặc biệt
liên quan đến công danh tài lộc.

🌟 **+ Cát tinh:** có **may mắn về công danh, tài lộc** do **người khác phái
mang đến**.

⚠️ **+ Hung / sát tinh:** **bất lợi về công danh tài lộc** vì đặc tính đào
hoa của mình → bị tình ái làm hỏng việc, vướng thị phi nam nữ.`,
  },

  // ============================================================
  // 8. Sao chế giảm Đào Hồng
  // ============================================================
  {
    id: 'dao-hong-sao-che-giam',
    title: 'Sao chế giảm tính lả lơi của Đào Hồng',
    sao: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 45,
    tomTat: `🌟 **Sao CHẾ GIẢM tính lả lơi** của Đào Hồng:

**Chính tinh** (chỉ sự đoan chính, ngay thẳng, nết hạnh):
- **Tử Vi**
- **Thiên Phủ**
- **Thái Dương** sáng sủa

**Phụ tinh chế khắc MẠNH:**
- **Ân Quang, Thiên Quý**
- **Thiên Hình**
- **Lộc Tồn**
- **Tuần, Triệt**

**Phụ tinh chế khắc VỪA (Tứ Đức):**
- **Thiên Đức, Phúc Đức, Long Đức, Nguyệt Đức**

⚠️ **Thái Tuế:** làm Đào Hồng **MẤT NHIỀU SỨC THU HÚT** — Đào Hồng + Thái Tuế
trở thành **vô duyên, mất duyên, thất tình, bị phụ rẫy**.`,
  },

  // ============================================================
  // 9. Sao tăng tính dâm của Đào Hồng
  // ============================================================
  {
    id: 'dao-hong-sao-tang-y-nghia',
    title: 'Sao TĂNG tính đào hoa - dâm tà của Đào Hồng',
    sao: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 45,
    tomTat: `⚠️ **Sao TĂNG tính dâm** của Đào Hồng:

**Chính tinh:**
- **Liêm Trinh** (đa tình)
- **Tham Lang** (dâm dục)
- **Thái Âm** — nhất là **hãm địa** (sao đa tình)
- **Thiên Đồng / Thiên Lương** ở **Tỵ / Hợi**
- **Cự Môn / Thiên Cơ** ở **Mão / Dậu**
- **Phá Quân**

**Phụ tinh:**
- **Thiên Riêu** — chơi bời, sắc dục
- **Thai** — giao hợp trai gái
- **Hoa Cái** — khát tình, làm dáng
- **Mộc Dục** — dâm dục, chưng diện
- **Văn Xương / Văn Khúc** — lãng mạn, đa tình
- **Mộ** — một phần đa dâm
- **Thiên Không** — ong bướm, gió trăng đê tiện
- **Thiên Mã** — thay cũ đổi mới
- **Đế Vượng / Tràng Sinh** — phong phú, đắc thời
- **Sát tinh hãm địa** (Không / Kiếp / Kình / Đà / Hỏa / Linh / Kỵ) — bất hạnh,
  oan nghiệp`,
  },

  // ============================================================
  // 10. Đào + Thai - lả lơi tiền dâm hậu thú
  // ============================================================
  {
    id: 'dao-thai',
    title: 'Đào + Thai - "Tiền dâm hậu thú"',
    sao: ['Đào Hoa'],
    ketHop: ['Thai'],
    doUuTien: 60,
    tomTat: `⚠️ **Đào (Hoa hoặc Hồng) + Thai:**
- **Lả lơi, dâm đãng, sắc dục**
- **"Tiền dâm hậu thú"** — quan hệ trước, cưới sau
- Có thai trước khi cưới

(Hồng Loan + Thai cũng có ý nghĩa tương tự)`,
  },

  // ============================================================
  // 11. Đào + Riêu - dâm dục
  // ============================================================
  {
    id: 'dao-rieu',
    title: 'Đào + Riêu - Dâm dục, ngoại tình',
    sao: ['Đào Hoa'],
    ketHop: ['Thiên Riêu'],
    doUuTien: 60,
    tomTat: `⚠️ **Đào + Thiên Riêu:**
- **Dâm dục**, có **nhiều nhân tình**
- **Ngoại tình, sa đọa**
- Đời sống tình cảm nhiều thị phi

(Hồng Loan + Riêu cũng có ý nghĩa tương tự)`,
  },

  // ============================================================
  // 12. Đào + Xương Khúc + Riêu
  // ============================================================
  {
    id: 'dao-xuong-khuc-rieu',
    title: 'Đào + Xương / Khúc + Riêu - Đĩ tính, sáng tác dâm thơ',
    sao: ['Đào Hoa'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Thiên Riêu'],
    doUuTien: 62,
    tomTat: `⚠️ **Đào + Văn Xương / Văn Khúc + Thiên Riêu:**
- Có **đĩ tính**
- Bị **dày vò bởi nhu cầu sinh lý**
- **Sáng tác dâm thơ lãng mạn**

→ Tài hoa nhưng phẩm hạnh suy giảm, đời sống tình cảm phức tạp.`,
  },

  // ============================================================
  // 13. Đào + Liêm + Tham - gái giang hồ
  // ============================================================
  {
    id: 'dao-liem-tham',
    title: 'Đào + Liêm + Tham - Hết sức dâm đãng',
    sao: ['Đào Hoa'],
    ketHop: ['Liêm Trinh', 'Tham Lang'],
    doUuTien: 65,
    tomTat: `⚠️ **Đào + Liêm Trinh + Tham Lang:**
- **HẾT SỨC dâm đãng**
- Có thể là **gái giang hồ**

→ Cách cục cực xấu cho nữ mệnh — tình ái phức tạp, có thể sa vào ngành nhạy cảm.`,
  },

  // ============================================================
  // 14. Đào + Không Kiếp - bị hiếp dâm, làm điếm
  // ============================================================
  {
    id: 'dao-khong-kiep',
    title: 'Đào + Không Kiếp - Bị hiếp dâm, làm điếm, yểu tử',
    sao: ['Đào Hoa'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Kiếp Sát'],
    doUuTien: 65,
    tomTat: `⚠️ **Đào + Địa Không / Địa Kiếp / Kiếp Sát:** **CỰC XẤU**:
- Bị **HIẾP DÂM**
- **Làm điếm** hoặc ít ra **bị dang dở**
- Bị **lừa gạt dụ dỗ, mất trinh**
- **YỂU TỬ**

⚠️ Thiên Không tạo cách **"tài hoa bạc mệnh"** — sắc đẹp và tình yêu đều mang
tính **hư ảo**, dễ chuốc khổ đau.

⚠️ Địa Không + Địa Kiếp chủ về **tai họa do tình ái gây ra**.`,
  },

  // ============================================================
  // 15. Đào + Mã - ong bướm thay đổi
  // ============================================================
  {
    id: 'dao-thien-ma',
    title: 'Đào + Thiên Mã - Ong bướm lả lơi',
    sao: ['Đào Hoa'],
    ketHop: ['Thiên Mã'],
    doUuTien: 58,
    tomTat: `⚠️ **Đào + Thiên Mã:**
- **Ong bướm lả lơi**
- **Thay đổi nhân tình** hay **vợ/chồng luôn**

→ Người không chung thủy, dễ thay đổi đối tượng tình cảm liên tục.`,
  },

  // ============================================================
  // 16. Nữ mệnh có Đào Hồng - đa oan trái
  // ============================================================
  {
    id: 'dao-hong-nu-menh-da-oan-trai',
    title: 'Nữ mệnh có Đào Hồng - Đa oan trái, dở dang ái tình',
    sao: ['Đào Hoa', 'Hồng Loan'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `⚠️ **NỮ MỆNH có Đào Hồng tọa Mệnh:**
- **Đa oan trái**
- **Nhiều người mê**
- **Tình ái dở dang**

⚠️ **+ Đà La + Hóa Kỵ:** **gái dâm loàn**, **không sao toàn danh tiết**.

⚠️ **+ Phục Binh + Tướng Quân + Thiên Riêu + Quân + Thai hội:** tất bị **HÃM
HIẾP và CHỬA HOANG**. Trường hợp này nếu **Quang + Quý** thì có thể **chế ngự
được phần lớn**.

🌟 **+ Tử Vi / Thiên Phủ / Thiên Hình:** trở nên **đoan thục** — nét đẹp đoan
chính, giữ mình.

🌟 **Hồng Loan tại cung Phúc Đức** = cách **"Nga Mi Tác Án"** — đem lại sự
**rực rỡ** cho dòng họ.

🌟 **Đào Hồng + Tấu Vũ:** làm **thợ may KHÉO**.

⚠️ **Đào Hồng tại Nữ mệnh + Phụ Mẫu có Tang Môn**: hạn khi đến cung Mệnh chắc
phải **góa chồng hoặc bỏ chồng**.`,
  },

  // ============================================================
  // 17. Đào Hoa tại Mệnh
  // ============================================================
  {
    id: 'dao-hoa-tai-menh',
    title: 'Đào Hoa tại Mệnh - Sức hút duyên dáng kín đáo',
    sao: ['Đào Hoa'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `🌟 **Đào Hoa thủ Mệnh:** người **tinh tế, khéo léo**, có **gu thẩm
mỹ cao**, biết cách ăn mặc, phối màu, trang trí.

**Tính cách:** nhẹ nhàng, **kín đáo** nhưng có **sức hút đặc biệt** — càng tiếp
xúc càng thấy thu hút.

**Tâm hồn:** **lãng mạn, đa cảm**, bay bổng, yêu cái đẹp, **yêu nghệ thuật**
và thiên nhiên, **rất sợ cô đơn** hay bị bỏ rơi.

**Tài năng:** **thông minh, tiếp thu nhanh**, đặc biệt nổi trội ở **nghệ thuật,
sáng tạo, tư duy hình khối**.

⚡ **Khác biệt nam/nữ:**
- **Đàn ông:** **phong lưu, lãng mạn**, sức hút với khác giới → dễ thành
  **đào hoa sát gái**, đa tình
- **Phụ nữ:** dễ vướng **thị phi tình cảm**, **yêu sớm, yêu sâu**, dễ chịu tổn
  thương`,

    chiTiet: `## Tướng mạo

- **Da trắng, tóc dày**
- **Đàn ông:** cân đối, phương phi
- **Phụ nữ:** da dẻ mịn màng, trẻ trung, **đôi mắt đẹp, môi mỏng, răng đều**

## Sự nghiệp - thiên hướng nghệ thuật

Mẫu người **thiên hướng nghệ thuật rất rõ rệt** — năng khiếu bẩm sinh về **cầm,
kỳ, thi, họa**.

🌟 **Phù hợp:** kiến trúc, hội họa, âm nhạc, biểu diễn, thời trang, làm đẹp,
sáng tạo nội dung, PR / truyền thông, ngoại giao.

→ Công danh thường **đến sớm**, **dễ nổi tiếng**, dễ được chú ý và **người
khác giúp đỡ, nâng đỡ**.

## Hôn nhân - phức tạp nhất

⚠️ Vì có **quá nhiều người theo đuổi** → **kén chọn, đặt tiêu chuẩn cao** cho
bạn đời → tình duyên trắc trở, dễ rơi vào cảnh **"lắm mối tối nằm không"**.

⚠️ **Phụ nữ Đào Hoa** thường vất vả về tình, dễ mang số **"hồng nhan bạc
phận"** — khó yên ổn với một người chồng nếu không có sao giải.

## Sức khỏe - tim mạch

⚠️ Dễ gặp:
- **Tim mạch**: huyết áp thất thường, hở van tim, co thắt động mạch vành
- **Tóc**: rụng tóc, suy nhược
- **Khí huyết**: kém
- **Tửu lượng kém**
- ⚠️ **+ Thai / Mộc Dục / Hóa Kỵ:** dễ mắc **bệnh lây qua đường tình dục**

## Tài lộc - từ khiếu nghệ thuật

🌟 Kiếm tiền chủ yếu bằng **tài năng và sự khéo léo** — tận dụng năng khiếu,
ngoại hình, tài lẻ. Tự kiếm tiền từ sớm, dễ **khởi nghiệp sớm**, độc lập tài
chính. Trong giao dịch tài chính thường **gặp may mắn**.

## Lời khuyên

1. **Tu tâm dưỡng tính** — ranh giới giữa duyên lành và nghiệp chướng rất mong
manh
2. Sống **đoan chính, giữ đạo đức** để tránh rối ren tình cảm
3. **Dồn năng lượng vào nghệ thuật, công việc, sáng tạo** thay vì sa đà vào
   các mối quan hệ
4. **Chọn bạn đời tỉnh táo** — nên kết hôn muộn khi tâm tính chín chắn
5. **Giữ gìn sức khỏe tim mạch** — hạn chế rượu bia, tránh xúc động mạnh`,
  },

  // ============================================================
  // 18. Đào Hoa tại Phụ Mẫu
  // ============================================================
  {
    id: 'dao-hoa-tai-phu-mau',
    title: 'Đào Hoa tại Phụ Mẫu',
    sao: ['Đào Hoa'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Đào Hoa cư Phụ Mẫu:** cha mẹ **phong thái tao nhã**, có **tài
hoặc năng khiếu thẩm mỹ, nghệ thuật**.

- **Cha:** dáng dấp **phong lưu, lãng tử**
- **Mẹ:** **duyên dáng, khéo ăn nói**, được nhiều người mến mộ và theo đuổi

🌟 Phụ huynh có **lối sống tinh tế**, yêu cái đẹp, cách giáo dục con cái theo
khuynh hướng **mềm dẻo, cảm xúc**.`,
  },

  // ============================================================
  // 19. Đào Hoa tại Phúc Đức
  // ============================================================
  {
    id: 'dao-hoa-tai-phuc-duc',
    title: 'Đào Hoa tại Phúc Đức',
    sao: ['Đào Hoa'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `🌟 **Đào Hoa nhập cung Phúc Đức:** vị trí **đẹp** — Đào Hoa thuộc
Mộc đới Thủy nên rất hợp với:
- **Môi trường nhiều cây cối**
- **Mộ phần tổ tiên cỏ cây xanh tốt**

→ Con cháu được **hưởng phúc khí dồi dào**.

⚡ **Đào Hồng + Cô Thần / Quả Tú** (đồng cung hoặc giáp): trong dòng họ có
người mang **duyên tu hành**, thích **dâng hoa cúng Phật** hay **hành thiện
tích đức**.

**Lời khuyên:** cần **chăm chút đời sống tâm linh** và **tu dưỡng đạo đức** để
duy trì vận phúc lâu dài.`,
  },

  // ============================================================
  // 20. Đào Hoa tại Quan Lộc
  // ============================================================
  {
    id: 'dao-hoa-tai-quan-loc',
    title: 'Đào Hoa tại Quan Lộc',
    sao: ['Đào Hoa'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `🌟 **Đào Hoa cư Quan Lộc:** tuổi trẻ **đầy sức sống, giàu nhiệt
huyết, sáng tạo và ham học hỏi**.

🌟 **+ Đào Hồng hội chiếu:** đam mê cống hiến, **lăn xả** đạt thành tích cao.

🌟 **+ Khôi Việt / Tả Phù / Hữu Bật:** **thượng cách** — công danh **sáng lạn**.

⚡ **Đặc trưng:** dễ được cấp trên **tín nhiệm, giao trọng trách**, được tạo
điều kiện **học tập nâng cao**.

⚡ **Môi trường làm việc** có nhiều **người khác giới** → tạo sức hút và **nhiều
duyên gặp gỡ**.

🌟 **Năng khiếu nghệ thuật bẩm sinh:** viết lách, hội họa, âm nhạc, thi ca.
Nếu theo đuổi sở trường có thể **"tay ngang thành danh"**.`,
  },

  // ============================================================
  // 21. Đào Hoa tại Điền Trạch
  // ============================================================
  {
    id: 'dao-hoa-tai-dien-trach',
    title: 'Đào Hoa tại Điền Trạch',
    sao: ['Đào Hoa'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Đào Hoa thủ Điền Trạch:** đương số **gu thẩm mỹ cao**, thích **tự
tay bài trí nhà cửa**.

🌟 Chuộng lối sống **tao nhã** — chọn kiểu **nhà cổ có thư phòng, bể cá, cây
cảnh, nơi thưởng trà**.

⚡ Môi trường sống dễ gần **khu sầm uất** — quán xá, **tiệm hoa, salon làm đẹp**.

⚠️ **+ Sát tinh:** chuyển hóa thành mặt tiêu cực.

⚠️ **+ Địa Kiếp / Điếu Khách:** nhà ở gần **khu ăn chơi sắc dục** hoặc **ổ cờ
bạc, tệ nạn nhiều cám dỗ**.`,
  },

  // ============================================================
  // 22. Đào Hoa tại Thiên Di - Tiền Cái Hậu Mã
  // ============================================================
  {
    id: 'dao-hoa-tai-thien-di',
    title: 'Đào Hoa tại Thiên Di - Cách "Tiền Cái Hậu Mã"',
    sao: ['Đào Hoa'],
    cung: ['Thiên Di'],
    doUuTien: 80,
    tomTat: `🌟 **Đào Hoa cung Thiên Di** = cách **"Tiền Cái Hậu Mã"** — vị trí
ĐẮC CÁCH:
- Ra ngoài lúc nào cũng được **che chở, nâng đỡ**
- **Ngoại hình sáng sủa, thần thái dễ mến**
- Đi đâu cũng **gây thiện cảm**
- Đi xa hoặc ra ngoài đều **gặp may**, hay được **người thương kẻ giúp**, hỗ
  trợ đủ đường

🌟 **Số xuất ngoại** — phải **lập nghiệp xa quê, kết duyên hoặc định cư nơi
đất khách**.

🌟 **+ Cát tinh:** **tiếng tăm nổi như cồn**, chân bước đến đâu thành danh đến
đó.`,
  },

  // ============================================================
  // 23. Đào Hoa tại Nô Bộc - Hoa Cái nhập Mệnh
  // ============================================================
  {
    id: 'dao-hoa-tai-no-boc',
    title: 'Đào Hoa tại Nô Bộc - Hoa Cái nhập Mệnh',
    sao: ['Đào Hoa'],
    cung: ['Nô Bộc'],
    doUuTien: 78,
    tomTat: `⚡ **Đào Hoa cư Nô Bộc** → **Hoa Cái nhập Mệnh** → đương số được
nhiều người **thầm thương trộm nhớ**.

⚠️ **Mặt trái:** khó tránh những **mối tình nhanh nở chóng tàn**:
- Yêu đương nồng nhiệt rồi **chia xa**
- Đương số **không dễ nhún nhường, nể phục ai**, kể cả người mình thương

⚠️ Thường gây **rắc rối nhiều hơn thuận lợi**:
- Cuộc đời gặp những người **"trồng cây si"** yêu sâu đậm
- Có **duyên tình từ tiền kiếp** — đối phương vẫn dành tình cảm đặc biệt cho
  đương số dù cả hai đã có gia đình riêng

⚠️ Dễ dính **điều tiếng thị phi**, nhất là **nữ mệnh**:

> *"Đào hồng mà đóng Nô cung*
> *Gái ngoan mang tiếng bất trung cùng chồng"*`,
  },

  // ============================================================
  // 24. Đào Hoa tại Tài Bạch
  // ============================================================
  {
    id: 'dao-hoa-tai-tai-bach',
    title: 'Đào Hoa tại Tài Bạch',
    sao: ['Đào Hoa'],
    cung: ['Tài Bạch'],
    doUuTien: 78,
    tomTat: `🌟 **Đào Hoa cư Tài Bạch:** vị trí **đắc lợi** — tận dụng **năng
khiếu, bộ não nhạy bén, tài ăn nói khéo léo** để làm giàu.

🌟 Tuổi còn trẻ đã **tự biết kiếm tiền**, **khởi nghiệp sớm**, độc lập tài chính.

🌟 **+ Khôi / Việt / Tả Phù / Hữu Bật / Lộc Tồn:** khả năng **làm chủ kinh tế
rất mạnh**, "lấy ngón nghề nuôi thân".

⚠️ **+ Sát tinh / Hóa Kỵ:** vận đời dễ phải **dùng nhan sắc để kiếm tiền**,
nhất là **nữ mệnh**.`,
  },

  // ============================================================
  // 25. Đào Hoa tại Tật Ách
  // ============================================================
  {
    id: 'dao-hoa-tai-tat-ach',
    title: 'Đào Hoa tại Tật Ách',
    sao: ['Đào Hoa'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `🌟 **Đào Hoa cư Tật Ách:** đương số có **khả năng hồi phục nhanh**,
**bệnh nhẹ chóng khỏi** — như cây cỏ gặp mưa lại tươi tốt.

⚠️ **+ Hung sát bại tinh:** cần đặc biệt chú ý:
- **Tim mạch**, **tóc tai**
- **Máu huyết**
- **Thận** (khi bước vào tuổi trung niên)

⚠️ **+ Thai / Mộc Dục / Hóa Kỵ / Thái Âm:** nguy cơ mắc **bệnh đường sinh dục
và nội tiết**.`,
  },

  // ============================================================
  // 26. Đào Hoa tại Tử Tức
  // ============================================================
  {
    id: 'dao-hoa-tai-tu-tuc',
    title: 'Đào Hoa tại Tử Tức',
    sao: ['Đào Hoa'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `🌟 **Đào Hoa cư Tử Tức:** dấu hiệu **tốt lành** trong đường con cái.

- Dễ **sinh con trai**, đôi khi là **con một bề** (cần xét thêm yếu tố khác)
- Con cái **ngoại hình xinh đẹp, đầy đặn**
- Sớm bộc lộ **tài năng văn học, nghệ thuật, thẩm mỹ**
- Từ nhỏ **khéo léo, nhanh nhạy**, **dễ dạy dễ nuôi**

🌟 Đương số **thuận đường sinh nở**, về già **hậu vận yên vui** nhờ con cháu
hiếu thảo, đỡ đần.`,
  },

  // ============================================================
  // 27. Đào Hoa tại Phu Thê
  // ============================================================
  {
    id: 'dao-hoa-tai-phu-the',
    title: 'Đào Hoa tại Phu Thê',
    sao: ['Đào Hoa'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `🌟 **Đào Hoa cư Phu Thê:** tín hiệu tốt cho đời sống vợ chồng.

Người hôn phối **có điều kiện, đảm đang, tháo vát**, tính cách **khéo léo, dễ
mến dễ gần**.

🌟 **+ Cát tinh:** vợ chồng **xứng lứa vừa đôi**, chung sống hòa thuận như
**chim liền cánh**.

⚠️ **+ Triệt / Lục Sát / Cô Thần / Quả Tú:** hôn nhân **"sớm nở tối tàn"**, dễ
cưới mà khó giữ.

⚠️ **Bộ Hồng - Không - Cô - Quả tụ hội:** hôn nhân dễ vì **ghen tuông** mà nảy
sinh mâu thuẫn, tổn thương lẫn nhau.

⚠️ **+ Kình Dương / Đà La / Thiên Hình:** xung đột **nghiêm trọng** về cả **thể
chất lẫn tinh thần**.`,
  },

  // ============================================================
  // 28. Đào Hoa tại Huynh Đệ
  // ============================================================
  {
    id: 'dao-hoa-tai-huynh-de',
    title: 'Đào Hoa tại Huynh Đệ',
    sao: ['Đào Hoa'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Đào Hoa cư Huynh Đệ:** anh chị em trong nhà **đông đúc**, có anh
em **cùng giới tính** với mình.

🌟 Đa phần là người **có tài, có duyên ăn nói**, dễ gặt hái thành tựu, có cuộc
sống **khá giả**.

⚠️ **+ Sao xấu:** anh em **"lắm tài nhiều tật"**:
- Người thì **tính cách ngông nghênh**
- Kẻ thì **đa sầu đa cảm**`,
  },

  // ============================================================
  // 29. Đào Hoa + Vũ Khúc / Thiên Hình - chuyển hóa thành sang trọng
  // ============================================================
  {
    id: 'dao-hoa-vu-khuc-thien-hinh',
    title: 'Đào Hoa + Vũ Khúc / Thiên Hình - Chuyển hóa thành sang trọng đoan chính',
    sao: ['Đào Hoa'],
    ketHop: ['Vũ Khúc', 'Thiên Hình'],
    doUuTien: 60,
    tomTat: `🌟 **Đào Hoa + Vũ Khúc:** **giảm sự mơ mộng**, tăng **thực tế** và
khả năng **quản lý tài chính**.

🌟 **Đào Hoa + Thiên Hình:** mang lại sự **nghiêm túc, giữ mình** → tạo nên
nét đẹp **đoan chính**.

🌟 **Đào Hoa + Giải Thần / Phượng Các / Ân Quang / Thiên Quý / Nguyệt Đức:**
Đào Hoa trở thành **nét duyên CAO QUÝ**, được người khác **kính trọng**, gặp
nhiều **may mắn** trong tình duyên và cuộc sống.

→ Đây là cách **chuyển hóa Đào Hoa từ dâm sang quý**.`,
  },

  // ============================================================
  // 30. Đào Hoa + Hóa Kỵ - nghịch duyên
  // ============================================================
  {
    id: 'dao-hoa-hoa-ky',
    title: 'Đào Hoa + Hóa Kỵ - Nghịch duyên',
    sao: ['Đào Hoa'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 58,
    tomTat: `⚠️ **Đào Hoa + Hóa Kỵ:** tạo **nghịch duyên**:
- Yêu nhau nhiều nhưng **oán hận cũng nhiều**
- Dễ **chia tay đột ngột**

⚠️ **+ Không Kiếp / Linh Tinh / Đà La:** dễ có **suy nghĩ ngoại tình** hoặc
**rung động với người khác**, kể cả khi đã có vợ/chồng/người yêu.

⚡ Bản chất Đào Hoa **khao khát yêu thương, cưng chiều** → đôi khi **thiếu
tỉnh táo** trong các mối quan hệ → dễ vào **mối duyên ngang trái**.`,
  },

  // ============================================================
  // 31. Hạn gặp Đào Hồng Hỷ Riêu
  // ============================================================
  {
    id: 'dao-hong-hy-rieu-vao-han',
    title: 'Hạn gặp Đào - Hồng - Hỷ - Riêu',
    sao: ['Đào Hoa'],
    doUuTien: 50,
    tomTat: `⚡ **Hạn gặp Đào / Hồng / Hỷ / Riêu:** có **vương vấn tình** — mối
duyên xuất hiện hoặc bùng phát trong năm/đại vận đó.

⚠️ **Đến hạn gặp Đào / Hồng / Hỷ:** **dễ mê trai** (nữ mệnh) hoặc **mê gái**
(nam mệnh) → cần thận trọng giữ mình, đặc biệt nếu đã có gia đình.`,
  },
];
