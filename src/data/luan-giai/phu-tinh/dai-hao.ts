import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO ĐẠI HAO - Hỏa, Bại Tinh, vòng Lộc Tồn (vị trí 10)
 * (Phần CHUNG Song Hao - Chúng Thủy Triều Đông - Cự Cơ Mão Dậu - các tổ hợp Tuyệt/
 * Đào Hồng/Phá Tuyệt/Kình Đà/Quan Phù... đã viết tại tieu-hao.ts)
 * (File này chỉ chứa phần RIÊNG của Đại Hao + 11 cung + tổ hợp riêng)
 */
export const luanGiai_DaiHao: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính riêng sao Đại Hao
  // ============================================================
  {
    id: 'dai-hao-tinh-chat-chung',
    title: 'Đại Hao - Đặc tính chung (Hao tán KHỐI LƯỢNG LỚN)',
    sao: ['Đại Hao'],
    doUuTien: 30,
    tomTat: `**Đại Hao** — **BẠI TINH** trong **vòng Lộc Tồn** (vị trí thứ **10**).

**Ngũ hành:** **Hỏa**.

**Hóa khí:** **Hao Tinh, Bại Tinh**.

**Đặc tính:** **hao tán, tích tụ, thất thường, KHỐI LƯỢNG LỚN**.

**LUÔN đối cung với Tiểu Hao**: tạo **Song Hao**.

**Khác biệt với Tiểu Hao:**

| | Đại Hao | Tiểu Hao |
|---|---|---|
| **Quy mô** | **LỚN** | NHỎ |
| **Đầu tư** | Đầu tư **TO**, nghĩ lớn làm to | Tiêu vặt, tản mạn |
| **Bùng phát** | **DỮ DỘI, dồn dập** | Lai rai, kéo dài |

**Vị trí miếu hãm:**
- **ĐẮC ĐỊA tại:** **Dần - Thân - Mão - Dậu**
- **HÃM ĐỊA tại:** Tý / Sửu / Thìn / Tỵ / Ngọ / Mùi / Tuất / Hợi

**Đặc tính khi đắc:** lên **NHƯ DIỀU GẶP GIÓ**, bùng phát dữ dội theo hướng tốt.`,
  },

  // ============================================================
  // 2. Đại Hao tại Mệnh
  // ============================================================
  {
    id: 'dai-hao-tai-menh',
    title: 'Đại Hao tại Mệnh',
    sao: ['Đại Hao'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `**Đại Hao thủ Mệnh:** dáng **THẤP BÉ, gầy yếu**, hay **ốm đau**, **má
hóp đít tóp**.

**Tính cách:** **sáng nắng chiều mưa**, hay **thay đổi chí hướng, nghề nghiệp**,
**không bền chí, chóng chán**.

**KHÁC TIỂU HAO — đặc trưng "QUY MÔ LỚN":**
- **Tiêu xài phung phí, tiêu pha TIỀN TO**
- **ĐẦU TƯ LỚN** (không phải tiêu vặt như Tiểu Hao)
- Hào phóng, nghĩ lớn làm to

**Đại Hao ĐẮC ĐỊA:** tiêu xài rộng rãi nhưng **tiền ra rồi lại vào**, **đồng
tiền thâu xuất nhưng vẫn có lợi**:
- **Thông minh, lanh lợi**
- Tuy ham chơi nhưng có lúc **rất ham học**, **muốn trông xa biết rộng**
- Một khi muốn làm gì là **NGHĨ LỚN, LÀM TO** ("ra ngô ra khoai")

**Đại Hao HÃM + Hóa Kỵ / Phá Quân / sát tinh:** đam mê **cờ bạc, rượu chè**,
dễ "**cháy túi**": túng thiếu, thất thường.

**Phù hợp:** **xuất nhập khẩu, vận tải, kinh doanh LỚN, đầu tư TO** — nghề
**lưu động, ly hương lập nghiệp**.`,
  },

  // ============================================================
  // 3. Đại Hao tại Phụ Mẫu
  // ============================================================
  {
    id: 'dai-hao-tai-phu-mau',
    title: 'Đại Hao tại Phụ Mẫu',
    sao: ['Đại Hao'],
    cung: ['Phụ Mẫu'],
    doUuTien: 70,
    tomTat: `**Đại Hao cư Phụ Mẫu:** cha mẹ phải **"tha hương cầu thực"**, sống xa
quê cha đất tổ, thay đổi nơi ở/nghề nghiệp.

- Khác biệt khi Đắc và Hãm được tách thành luận giải riêng.`,
  },
  {
    id: 'dai-hao-tai-phu-mau-hinh-viet',
    title: 'Đại Hao tại Phụ Mẫu + Thiên Hình/Thiên Việt - Cha mẹ nghiêm khắc',
    sao: ['Đại Hao'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Thiên Hình', 'Thiên Việt'],
    doUuTien: 65,
    tomTat: `**Đại Hao + Thiên Hình / Thiên Việt tại Phụ Mẫu:** cha mẹ **nghiêm
khắc, giáo điều**, "nói một là một", con cái khó lòng trái ý.`,
  },

  {
    id: 'dai-hao-tai-phu-mau-dac',
    title: 'Đại Hao tại Phụ Mẫu - Đắc địa kinh doanh lớn',
    sao: ['Đại Hao'],
    cung: ['Phụ Mẫu'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    trangThai: ['Đắc'],
    doUuTien: 65,
    tomTat: `**Đại Hao đắc tại Phụ Mẫu** (Dần / Thân / Mão / Dậu):
- Cha mẹ **kinh doanh LỚN, đầu tư MẠNH**
- Dòng tiền giữa con cái và cha mẹ **lưu thông liên tục**
- Có thể cha mẹ **hỗ trợ tài chính cho con**, hoặc ngược lại
- Quy mô tài chính lớn`,
  },

  {
    id: 'dai-hao-tai-phu-mau-ham',
    title: 'Đại Hao tại Phụ Mẫu - Hãm địa cha mẹ vất vả',
    sao: ['Đại Hao'],
    cung: ['Phụ Mẫu'],
    trangThai: ['Hãm'],
    doUuTien: 65,
    tomTat: `**Đại Hao hãm tại Phụ Mẫu:**
- Cha mẹ **gầy gò, vất vả**
- Đồng tiền thất thường
- **Kiếm được ít mà lúc mất thì mất CẢ CỤC TO** (đặc trưng Đại Hao = quy mô lớn)`,
  },

  // ============================================================
  // 4. Đại Hao tại Phúc Đức
  // ============================================================
  {
    id: 'dai-hao-tai-phuc-duc',
    title: 'Đại Hao tại Phúc Đức',
    sao: ['Đại Hao'],
    cung: ['Phúc Đức'],
    doUuTien: 72,
    tomTat: `**Đại Hao HÃM cư Phúc Đức:** **TIÊU HAO phúc lộc tổ tiên**, may
mắn thế hệ trước để lại **không còn nhiều**.

Họ hàng **chia ly, mỗi người một phương**, hiếm khi đoàn tụ. **Hao hớt mỗi
người một nơi**, tìm về thì **chẳng còn ai**.

**Đại Hao ĐẮC ĐỊA cư Phúc:** thừa hưởng **phước đức tổ tiên**, may mắn về
tiền của — biết **dùng tiền làm phúc**, "**gieo nhân lành gặt quả tốt**", chăm
lo mồ mả, tu tạo phúc phần cho bản thân và hậu thế.

**Đặc trưng mộ phần:** xung quanh có **DÒNG NƯỚC LỚN** (suối, sông) hoặc
**mạch ngầm** chảy qua — biểu tượng phúc khí lưu chuyển. Tùy đắc/hãm để xác
định tốt xấu.`,
  },
  {
    id: 'dai-hao-tai-phuc-duc-dia-kiep',
    title: 'Đại Hao tại Phúc Đức + Địa Kiếp - Kiếm tiền bất chính',
    sao: ['Đại Hao'],
    cung: ['Phúc Đức'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 67,
    tomTat: `**Đại Hao + Địa Kiếp tại Phúc Đức:** càng **cô độc, vất vả** —
kiếm tiền bằng **con đường không chính nghĩa**: tổn hao phước đức.`,
  },

  // ============================================================
  // 5. Đại Hao tại Điền Trạch
  // ============================================================
  {
    id: 'dai-hao-tai-dien-trach',
    title: 'Đại Hao tại Điền Trạch',
    sao: ['Đại Hao'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Đại Hao HÃM cư Điền:** thất thoát, **của thiên trả địa** —
**tán nhiều tụ ít**, khó giàu có (đặc biệt + **Không Kiếp**).

Hay **tính toán SAI**, gây thất hao tổn — nhà cửa **so với giá trị thực tế**
chênh lệch lớn.

**Đại Hao ĐẮC ĐỊA cư Điền:** **kinh doanh BĐS QUY MÔ LỚN**:
- Có nhà gần **sông, mạch ngầm**
- Tuy lên xuống nhưng cuối cùng **vẫn có lãi**, nhà ngày càng **TO HƠN**
- Mở **xưởng sản xuất, chế tạo** số lượng lớn

**Song Hao + Không Kiếp đắc địa:** điền sản **mua đi bán lại RẤT MAU**
nhưng **không bền**, chỉ được một thời gian: môi giới nhà đất kiểu "ăn xổi".`,
  },

  // ============================================================
  // 6. Đại Hao tại Quan Lộc
  // ============================================================
  {
    id: 'dai-hao-tai-quan-loc',
    title: 'Đại Hao tại Quan Lộc',
    sao: ['Đại Hao'],
    cung: ['Quan Lộc'],
    doUuTien: 75,
    tomTat: `**Đại Hao cư Quan:** công việc **lưu động**, hay thay đổi chỗ làm/
nghề.

**KHÁC TIỂU HAO:** vì là Đại Hao nên công việc bao giờ cũng có **QUY MÔ
LỚN, KHỐI LƯỢNG LỚN**:
- **Đầu tư TẦM CỠ**
- **Xuất nhập khẩu cho cả NƯỚC, THẾ GIỚI**
- Giao thương quy mô vĩ mô

**Hãm địa:** cản trở công danh, sự nghiệp — chí hướng không bền, sự nghiệp
**trồi sụt**, khó ổn định lâu dài.`,
  },

  // ============================================================
  // 7. Đại Hao tại Nô Bộc
  // ============================================================
  {
    id: 'dai-hao-tai-no-boc',
    title: 'Đại Hao tại Nô Bộc',
    sao: ['Đại Hao'],
    cung: ['Nô Bộc'],
    doUuTien: 70,
    tomTat: `**Đại Hao cư Nô:** **khó thuê mướn người làm**, bị **tôi tớ trộm
cắp** (số lượng LỚN — khác Tiểu Hao là vặt vãnh).

Đặt **niềm tin và đầu tư NHIỀU** vào bạn bè, mối quan hệ:
- **Đắc:** được **đáp lại**
- **Hãm:** **thất thoát, hao tán** không hợp lý

Cộng sự **không ổn định**, dễ **bị đâm sau lưng**. Hao hụt bạn bè, ít chơi
lâu bền.`,
  },

  // ============================================================
  // 8. Đại Hao tại Thiên Di
  // ============================================================
  {
    id: 'dai-hao-tai-thien-di',
    title: 'Đại Hao tại Thiên Di',
    sao: ['Đại Hao'],
    cung: ['Thiên Di'],
    doUuTien: 70,
    tomTat: `**Đại Hao cư Thiên Di:** ra ngoài hay **tốn tiền, tổn hao NHIỀU**
(quy mô lớn).

Người **THA HƯƠNG LẬP NGHIỆP**, sống xa nhà, làm ăn **đất khách quê người**
— thay đổi chỗ ở nhiều lần.

**Đắc địa:** làm ăn xa **gặp nhiều thuận lợi**, biết cách **dùng tiền mở
đường quan hệ**: giao dịch tài chính lớn.`,
  },

  // ============================================================
  // 9. Đại Hao tại Tật Ách
  // ============================================================
  {
    id: 'dai-hao-tai-tat-ach',
    title: 'Đại Hao tại Tật Ách',
    sao: ['Đại Hao'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `**Đại Hao cư Tật:** đẩy lùi **bệnh mãn tính**.

**NGOẠI LỆ — Đại Hao ĐẮC ĐỊA tại Tật:** không tốt — **tích tụ năng lượng
LỚN**: khi yên thì rất yên ả, nhưng khi phát thì **dồn dập DỮ DỘI**, **không
kịp chống đỡ**.

**Bệnh thường gặp:** **đường ruột, tiêu hóa, dạ dày, gan**.`,
  },
  {
    id: 'dai-hao-tai-tat-ach-pha-sat-moc-duc-ky',
    title: 'Đại Hao tại Tật Ách + Phá/Sát/Mộc Dục/Hóa Kỵ - Ung nhọt mổ xẻ',
    sao: ['Đại Hao'],
    cung: ['Tật Ách'],
    ketHop: ['Phá Quân', 'Thất Sát', 'Mộc Dục', 'Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `**Đại Hao + Phá Quân / Thất Sát / Mộc Dục / Hóa Kỵ tại Tật Ách:**
**UNG NHỌT, UNG THƯ phải mổ xẻ**.`,
  },
  {
    id: 'dai-hao-tai-tat-ach-kinh-da-khong-kiep-ky',
    title: 'Đại Hao tại Tật Ách + Kình/Đà/Không Kiếp/Hóa Kỵ - Đam mê sinh bệnh',
    sao: ['Đại Hao'],
    cung: ['Tật Ách'],
    ketHop: ['Kình Dương', 'Đà La', 'Địa Không', 'Địa Kiếp', 'Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `**Đại Hao + Kình Dương / Đà La / Địa Không / Địa Kiếp / Hóa Kỵ
tại Tật Ách:** đam mê (cờ bạc, rượu chè) sinh bệnh.`,
  },

  // ============================================================
  // 10. Đại Hao tại Tài Bạch
  // ============================================================
  {
    id: 'dai-hao-tai-tai-bach',
    title: 'Đại Hao tại Tài Bạch',
    sao: ['Đại Hao'],
    cung: ['Tài Bạch'],
    doUuTien: 80,
    tomTat: `**Đại Hao cư Tài (HÃM):** đồng tiền **tán tụ thất thường** — **vào
nhỏ giọt**, **ra thành dòng**, có tiền phải **tiêu luôn**, khó tích trữ.

**Đại Hao ĐẮC ĐỊA cư Tài:** đồng tiền **ra vào liên tục, SỐ LƯỢNG LỚN**
tạo ra **NHIỀU CỦA TIỀN HƠN**:
- Kiếm ra đồng nào lại đem **đầu tư**
- **Lãi mẹ đẻ lãi con**
- **Tầng lớp kinh doanh, buôn bán LỚN**
- Cách **VÔ CÙNG GIÀU CÓ**

**Lưu ý:** Đại Hao HÃM rất **kỵ** ở Tài / Điền / Phúc — 3 cung này có Đại
Hao Hãm là **xấu nhất**.`,
  },
  {
    id: 'dai-hao-tai-tai-bach-dao-hong',
    title: 'Đại Hao tại Tài Bạch + Đào Hồng - Tốn tiền tình nhân',
    sao: ['Đại Hao'],
    cung: ['Tài Bạch'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 75,
    tomTat: `**Đại Hao + Đào Hoa / Hồng Loan tại Tài Bạch:** tốn **NHIỀU TIỀN**
cho tình nhân, làm đẹp.`,
  },
  {
    id: 'dai-hao-tai-tai-bach-pha-tuyet',
    title: 'Đại Hao tại Tài Bạch + Phá/Tuyệt - Đầu tư phá sản',
    sao: ['Đại Hao'],
    cung: ['Tài Bạch'],
    ketHop: ['Phá Quân', 'Tuyệt'],
    doUuTien: 75,
    tomTat: `**Đại Hao + Phá Quân / Tuyệt tại Tài Bạch:** dễ **đầu tư LỚN, chơi
LỚN mà PHÁ SẢN**.`,
  },
  {
    id: 'dai-hao-tai-tai-bach-kinh-da-khong-kiep',
    title: 'Đại Hao tại Tài Bạch + Kình/Đà/Không/Kiếp - Phá sản',
    sao: ['Đại Hao'],
    cung: ['Tài Bạch'],
    ketHop: ['Kình Dương', 'Đà La', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 75,
    tomTat: `**Đại Hao + Kình Dương / Đà La / Địa Không / Địa Kiếp tại Tài
Bạch:** **PHÁ SẢN**.`,
  },

  // ============================================================
  // 11. Đại Hao tại Tử Tức
  // ============================================================
  {
    id: 'dai-hao-tai-tu-tuc',
    title: 'Đại Hao tại Tử Tức',
    sao: ['Đại Hao'],
    cung: ['Tử Tức'],
    doUuTien: 70,
    tomTat: `**Đại Hao HÃM cư Tử Tức:** **giảm số lượng con cái** — sinh nhiều
nhưng nuôi ít.

Con cái **không ở gần cha mẹ**, sống tự lập từ sớm.

**TÍNH CHẤT MẠNH MẼ HƠN Tiểu Hao:** Đại Hao = quy mô lớn: con cái làm
**HAO TÁN của tiền** cha mẹ ở mức độ NẶNG hơn.

**Đắc địa:** đầu tư cho con có **HIỆU QUẢ**: con cái thông minh, ham học.`,
  },

  // ============================================================
  // 12. Đại Hao tại Phu Thê
  // ============================================================
  {
    id: 'dai-hao-tai-phu-the',
    title: 'Đại Hao tại Phu Thê',
    sao: ['Đại Hao'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `**Đại Hao cư Phu Thê:** không ưa — **giảm nhân duyên** vợ chồng.

Vợ chồng dễ **xa quê cách quán**.

**Hao HÃM:** người hôn phối **HOANG TÀN, phá của**, gây **chia ly**. Người
phối ngẫu **tiêu xài phung phí**, tổn thất tài chính LỚN.

**Đắc + cát tinh:** chủ mệnh **tháo vát**, biết quan tâm chiều chuộng bạn đời.`,
  },
  {
    id: 'dai-hao-tai-phu-the-da-hinh-rieu',
    title: 'Đại Hao tại Phu Thê + Đà La/Thiên Hình/Thiên Riêu - Phong lưu',
    sao: ['Đại Hao'],
    cung: ['Phu Thê'],
    ketHop: ['Đà La', 'Thiên Hình', 'Thiên Riêu'],
    doUuTien: 70,
    tomTat: `**Đại Hao + Đà La / Thiên Hình / Thiên Riêu tại Phu Thê:** người
hôn phối **phong lưu thái trượng**, tài tử, phá tán: **"ông ăn chả bà ăn
nem"**.`,
  },

  {
    id: 'dai-hao-phu-the-dac-dao-hong-menh',
    title: 'Đại Hao đắc tại Phu Thê + Đào Hồng hội chiếu - nhiều vợ thê thiếp',
    sao: ['Đại Hao'],
    cung: ['Phu Thê'],
    trangThai: ['Đắc'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 65,
    tomTat: `**Đại Hao đắc địa tại Phu Thê + Đào Hồng hội chiếu cung gốc:**
- Dễ **NHIỀU VỢ, thê thiếp**
- Có nhiều mối quan hệ tình cảm cùng lúc
- Khác Tiểu Hao "**mỗi ngày một bà**" — Đại Hao mạnh hơn, **quy mô lớn**

- Đại Hao đắc + Đào Hồng = duyên đa, nhân tình nhân ngãi nhiều.`,
  },

  // ============================================================
  // 13. Đại Hao tại Huynh Đệ
  // ============================================================
  {
    id: 'dai-hao-tai-huynh-de',
    title: 'Đại Hao tại Huynh Đệ',
    sao: ['Đại Hao'],
    cung: ['Huynh Đệ'],
    doUuTien: 70,
    tomTat: `**Đại Hao cư Huynh Đệ:** **GIẢM số lượng** anh chị em.

Anh chị em **ly tán**, mỗi người một chí hướng, dễ **mâu thuẫn vì TIỀN**.

**Đại Hao ĐẮC ĐỊA:** anh em có người **giỏi làm ăn kinh tế**, **giàu có
khá giả**, giúp đỡ nhau về sau.`,
  },
  {
    id: 'dai-hao-tai-huynh-de-sat-bai',
    title: 'Đại Hao tại Huynh Đệ + Sát bại tinh - Anh em chết trẻ',
    sao: ['Đại Hao'],
    cung: ['Huynh Đệ'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp', 'Hóa Kỵ', 'Tiểu Hao'],
    doUuTien: 65,
    tomTat: `**Đại Hao + Sát bại tinh (Kình / Đà / Hỏa / Linh / Không / Kiếp /
Hóa Kỵ / Tiểu Hao) tại Huynh Đệ:** dễ có người **chết trẻ, khó thọ**, mất
mát/sa sảy bụng mẹ.`,
  },

  // ============================================================
  // 14. Đại Hao + Tham Lang - hiếu sắc kín đáo (RIÊNG ĐẠI HAO)
  // ============================================================
  {
    id: 'dai-hao-tham-lang',
    title: 'Đại Hao + Tham Lang - Hiếu sắc, dâm dật KÍN ĐÁO',
    sao: ['Đại Hao'],
    ketHop: ['Tham Lang'],
    doUuTien: 60,
    tomTat: `**Đại Hao + Tham Lang đồng cung hoặc xung chiếu** (riêng Đại Hao):
**hiếu sắc, dâm dật** nhưng **RẤT KÍN ĐÁO**.

- Người ham mê tình ái nhưng không bộc lộ ra ngoài — đam mê ẩm thầm, **giữ kín
sự việc** một cách kỹ càng. Đây là sự khác biệt: Tiểu Hao có thể lộ liễu hơn,
còn Đại Hao quy mô lớn thì lại biết cách che đậy.

Cách cục này thường tiềm ẩn **rắc rối tình ái** sâu xa, khó phát hiện sớm
- khi vỡ lở thì hậu quả lớn.`,
  },

  // ============================================================
  // 15. Đại Hao + Hóa Kỵ - vất vả túng thiếu (RIÊNG ĐẠI HAO)
  // ============================================================
  {
    id: 'dai-hao-hoa-ky',
    title: 'Đại Hao + Hóa Kỵ - Vất vả, túng thiếu',
    sao: ['Đại Hao'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 60,
    tomTat: `**Đại Hao + Hóa Kỵ:** **VẤT VẢ, TÚNG THIẾU**.

- Hai sao đều mang tính **trở ngại, hao tổn** — kết hợp thành cách:
- Lao động cực nhọc nhưng **kiếm được không tương xứng**
- Tiền ra nhiều mà vào ít
- Cuộc sống **nghèo khó kéo dài**`,
  },

  // ============================================================
  // 16. Đại Hao + Hỏa Linh - nghiện + ngang bướng bảo thủ (riêng Đại)
  // ============================================================
  {
    id: 'dai-hao-hoa-linh',
    title: 'Đại Hao + Hỏa Linh - Nghiện + Ngang bướng bảo thủ',
    sao: ['Đại Hao'],
    ketHop: ['Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 60,
    tomTat: `**Đại Hao + Hỏa Tinh / Linh Tinh** (riêng Đại Hao có thêm tính
**ngang bướng bảo thủ**):
- **Bị NGHIỆN** (rượu chè, cờ bạc, ăn chơi trác táng)
- **Tính tình NGANG BƯỚNG, BẢO THỦ** (đặc trưng riêng so với Tiểu Hao)

- Hai sao chủ về **bốc đồng, nóng nảy** kết hợp với Đại Hao làm chủ mệnh dễ
**lao vào cám dỗ trần tục**: biến thành **nghiện ngập**:
- Ảnh hưởng sức khỏe
- Tiêu tan **sự nghiệp, gia đình**`,
  },

  // ============================================================
  // 17. Song Hao + Linh Hỏa + Cơ + Riêu - căn đồng số lính
  // ============================================================
  {
    id: 'song-hao-linh-hoa-co-rieu-can-dong',
    title: 'Song Hao + Linh Hỏa + Thiên Cơ + Thiên Riêu - Căn đồng số lính',
    sao: ['Đại Hao', 'Tiểu Hao'],
    ketHop: ['Linh Tinh', 'Hỏa Tinh', 'Thiên Cơ', 'Thiên Riêu'],
    doUuTien: 65,
    tomTat: `**Song Hao + Linh Tinh / Hỏa Tinh + Thiên Cơ + Thiên Riêu:**
**CĂN ĐỒNG SỐ LÍNH**, dễ bị **CƠ ĐẦY**.

- Người có duyên với **tâm linh, đồng cốt** — bị các vong/căn quả "đeo bám",
hoặc có khả năng làm **đồng cốt thầy bà**.

Nếu không tu tập đúng cách, dễ **lạc vào tà đạo** hoặc **bệnh tâm thần**.`,
  },

  // ============================================================
  // 18. Đại Hao vào hạn
  // ============================================================
  {
    id: 'dai-hao-vao-han',
    title: 'Đại Hao vào hạn',
    sao: ['Đại Hao'],
    doUuTien: 50,
    tomTat: `**Hạn có Đại Hao:** **HAO TÀI TỐN CỦA quy mô LỚN**:
- Không vì tang khó/bệnh tật: bị **mất trộm SỐ LƯỢNG LỚN**
- Hoặc **chi tiêu lớn** vì ốm đau, tai nạn, sửa sang nhà cửa, mua sắm

**Đắc địa:** **HOẠCH TÀI** — cơ hội mở rộng làm ăn, **chớp lấy vận may**:
- Trúng thưởng, được cho, **được THỪA KẾ**
- Đầu tư vào chỗ khác sinh lợi

**Thay đổi LỚN:**
- Chuyển nhà, đi công tác xa
- **Xuất ngoại, ĐỊNH CƯ** ở nước ngoài
- Thay đổi môi trường sống

Nếu đang **ốm đau**: bệnh tình **THUYÊN GIẢM nhanh chóng**, sức khỏe hồi phục.`,
  },

  // ============================================================
  // 19. Lời khuyên giải trừ tác hại Đại Hao
  // ============================================================
  {
    id: 'dai-hao-giai-tru',
    title: 'Lời khuyên giải trừ tác hại Đại Hao',
    sao: ['Đại Hao'],
    doUuTien: 70,
    tomTat: `**Lời khuyên giải trừ Đại Hao** — chuyển "**hao tán**" thành "**hao
mà sinh lợi**" hoặc "**hao nhỏ để tránh hao nặng hơn**":

**1. Hao chủ động: tránh hao bị động:**
- **Mua tài sản** (BĐS, vàng, đầu tư có kế hoạch)
- **Hao để TỪ THIỆN, giúp người**: tích phúc đức
- **Hao để đầu tư vào BẢN THÂN** (học hành, kỹ năng)
- Mua **bảo hiểm**
- Chủ động **đi khám, chữa bệnh**: tránh rủi ro bất ngờ

**2. Tận dụng tính LƯU ĐỘNG:**
- **Đi du lịch** với người thân để làm mới mình
- **Học hỏi** lĩnh vực mới — hao sức nhưng phát triển bản thân

**3. Quản lý tài chính:**
- **Tránh vay mượn**, **đầu tư mạo hiểm**
- **TUYỆT ĐỐI tránh** cờ bạc, cá độ, thú vui không lành mạnh
- Lập kế hoạch chi tiêu rõ ràng, có quỹ dự phòng`,
  },
];
