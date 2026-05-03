import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO BẠCH HỔ - Kim, Bại Tinh, vòng Thái Tuế (vị trí 9).
 * Tam hợp Tuế-Hổ-Phù. Đối xung Tang Môn (TRỤC TANG-HỔ - kiếp nghiệp).
 * Một trong Tứ Linh (Cái Long Hổ Phượng) - phần chung Tứ Linh viết tại thanh-long.ts.
 * Hổ + Phi Liêm "hổ mọc cánh" viết tại phi-liem.ts.
 */
export const luanGiai_BachHo: DoanLuanGiai[] = [
  {
    id: 'bach-ho-tinh-chat-chung',
    title: 'Bạch Hổ - Đặc tính chung',
    sao: ['Bạch Hổ'],
    doUuTien: 32,
    tomTat: `**Bạch Hổ** — phụ tinh **BẠI TINH** trong **vòng Thái Tuế**, vị trí thứ **9**.

**Ngũ hành:** **Kim**.

**Hóa khí:** **Bại Tinh**.

⚡ **Vị thế trong vòng Thái Tuế:**
- Tam hợp **Tuế - Hổ - Phù** (Thái Tuế + Bạch Hổ + Quan Phù) — vòng tam hợp
  của **CHÍNH NGHĨA, TRÁCH NHIỆM, XÂY DỰNG**
- **LUÔN ĐỐI XUNG Tang Môn** — cặp **TANG - HỔ**, trục **KIẾP NGHIỆP, DUYÊN NỢ**

⚡ **Vị trí:**
- **ĐẮC địa:** **Dần, Thân, Mão, Dậu**
- **HÃM địa:** Tý, Sửu, Thìn, Tỵ, Ngọ, Mùi, Tuất, Hợi

**Đặc tính:** **Hình thương, tai nạn, bệnh tật, MÁU HUYẾT, thị phi, sự HÙNG
DŨNG, UY QUYỀN, tài năng, KHẨU NGHIỆP**.

⚡ **Bản chất 2 mặt:** dù ở vị trí đắc hay hãm, Bạch Hổ luôn thể hiện tính chất
**CAN ĐẢM, HÙNG DŨNG, QUYỀN LỰC, GIÀU NGHỊ LỰC, TÀI GIỎI và QUYỀN BIẾN**.`,
  },

  {
    id: 'bach-ho-truc-tang-ho',
    title: 'Trục Tang - Hổ (Tang Môn xung Bạch Hổ) - kiếp nghiệp',
    sao: ['Bạch Hổ', 'Tang Môn'],
    doUuTien: 70,
    tomTat: `⚡ **Trục TANG - HỔ** (Tang Môn ↔ Bạch Hổ - đối xung 6 cung) là **CẶP BÀI
TRÙNG kiếp nghiệp, DUYÊN NỢ** mà đời này phải gặp:

- **Tang Môn:** chủ về **DUYÊN NỢ TIỀN KIẾP** — nghiệp từ kiếp trước sang kiếp
  này phải trả
- **Bạch Hổ:** chủ về **KIẾP NGHIỆP HIỆN TẠI** — biểu hiện qua **ốm đau, hình
  thương, mất mát**

→ **Khi Tang-Hổ đóng ở BẤT KÌ vị trí nào**, đương số sẽ luôn **NẶNG LÒNG SUỐT
ĐỜI** ở vị trí đó — đây là **DUYÊN NỢ KIẾP NÀY PHẢI TRẢ**, **KHÔNG THỂ THOÁT**.`,
    chiTiet: `**Phân tích sâu trục Tang-Hổ:**

⚡ **Tang Môn = nghiệp tiền kiếp:**
- Người có Tang Môn hãm địa ở Mệnh thường **có VẾT CHÀM, VẾT BỚT** trên người
- **Mới sinh khó nuôi**, thường khó khăn trong việc chăm sóc
- Nếu cung Phụ Mẫu có một chút sát tinh → **lớn lên dễ MẤT CHA hoặc MẤT MẸ**

⚡ **Bạch Hổ = họa kiếp này:**
- Chủ về **MÁU HUYẾT, KHỔ ẢI**
- Hãm địa ở Mệnh → đối diện **NHIỀU KHÓ KHĂN**, chịu **THIỆT THÒI**
- Đặc biệt nặng với **NỮ NHÂN**

⚡ **Tang-Hổ tại Mệnh hoặc Phu Thê:**
Người ôm bộ Tang-Hổ thường có **LƯƠNG DUYÊN KHÔNG THUẬN**:
- **Tìm chồng/vợ KHÔNG THUẬN LỢI**
- Số **một lần đò khó thành gia thất**
- Ở Phu Thê: **vợ chồng duyên kém bền**, lấy nhau **để TRẢ NỢ NGHIỆP**
- Bạch Hổ hãm địa ở Phu Thê → **người hôn phối DỄ MẤT SỚM**, vợ chồng rơi vào
  cảnh **SINH LY TỪ BIỆT**

**Câu phú liên quan:**
> *"Cự ngộ Hổ, chó đá chầu*
> *Ngộ Dương Đà, có thạch đầu tại gia*
> *Thiên Cơ, Bạch Hổ mà gia*
> *Tang Môn, Điếu Khách, là sa hoàng tuyền"*`,
  },

  {
    id: 'bach-ho-tu-linh-quan-ngu-ho-tam-linh',
    title: 'Bạch Hổ - Quan Ngũ Hổ - tâm linh căn đồng',
    sao: ['Bạch Hổ'],
    doUuTien: 55,
    tomTat: `⚡ **Trong văn hóa Á Đông:** Bạch Hổ là **HỔ TRẮNG**, một trong **NGŨ HỔ THẦN
TƯỚNG (Quan Ngũ Hổ)** — chư vị **SƠN THẦN** uy linh:
- **Gác cổng** đền phủ
- **Tiêu diệt tà ma**
- Đem lại **CÂN BẰNG** cho ngũ phương trời đất

⚡ **5 ông Hổ 5 màu** tượng trưng cho **5 hướng và 5 ngũ hành** — thờ để **TRẤN
GIỮ** không cho **VONG TÀ** xâm nhập nơi tôn nghiêm.

🌟 **Cách báo CĂN ĐỒNG SỐ LÍNH liên quan đến Bạch Hổ:**
**Bạch Hổ tại cung Điền + Tứ Linh hội chiếu (người tuổi LẺ) + cung Mệnh / Tật /
Phúc có sao chỉ căn số**:
→ Đương số dễ dính **DUYÊN NGHIỆP THỜ THÁNH**, có **CĂN ĐỒNG SỐ LÍNH**, có
duyên với **PHẬT THÁNH, ĐẠO MẪU**.`,
  },

  {
    id: 'bach-ho-tai-menh-dac-dia',
    title: 'Bạch Hổ tại Mệnh - đắc địa (Dần Thân Mão Dậu)',
    sao: ['Bạch Hổ'],
    cung: ['Mệnh'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    doUuTien: 82,
    tomTat: `🌟 **Bạch Hổ ĐẮC địa tại Mệnh (Dần / Thân / Mão / Dậu):**

🌟 **Tính cách nổi bật:**
- **CAN ĐẢM, QUẢ CẢM**, có **Ý CHÍ NGHỊ LỰC LỚN**
- **TÀI GIỎI**, có sự **QUYỀN BIẾN**, ứng phó **NHANH NHẠY** với mọi nghịch cảnh
- Khả năng **xét đoán tốt**, **lý luận giỏi**, có **TÀI HÙNG BIỆN**
- Sống **độc lập**, **bứt phá** trước nghịch cảnh
- Có **lý tưởng sống RÕ RÀNG**, ứng biến **LINH HOẠT**

🌟 **Riêng với NỮ NHÂN:** có **KHÍ PHÁCH**, **uy quyền hơn người**:
- **Thông minh**, có **tâm tính và ý chí MẠNH MẼ** như nam nhân
- Mẫu người **ngoài mềm trong rắn**
- Đôi khi còn **mạnh mẽ hơn cả nam giới**

→ Đây là **MẪU NGƯỜI LÃNH ĐẠO** — phù hợp với **chính trị, quân sự, hành pháp**.`,
  },

  {
    id: 'bach-ho-tai-menh-ham-dia',
    title: 'Bạch Hổ tại Mệnh - hãm địa',
    sao: ['Bạch Hổ'],
    cung: ['Mệnh'],
    chi: ['Tý', 'Sửu', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Tuất', 'Hợi'],
    doUuTien: 80,
    tomTat: `⚠️ **Bạch Hổ HÃM địa tại Mệnh (Tý / Sửu / Thìn / Tỵ / Ngọ / Mùi / Tuất / Hợi):**

⚠️ **Tính cách:**
- **CAN ĐẢM, QUẢ CẢM** nhưng tính tình **HƠI ƯƠNG NGẠNH, BƯỚNG BỈNH, NGOAN CỐ,
  CỨNG ĐẦU**
- Hay **SUY TƯ, LO LẮNG**, nhiều **PHIỀN MUỘN** và có sự **CÔ ĐỘC**
- Thích **ĂN NGON MẶC ĐẸP**, không quá đặt nặng vấn đề **gia giáo**
- **Thích kiểm soát**, hay nghĩ tiêu cực

⚠️ **Phúc thọ tai họa:**
- Bất lợi cho **CHA MẸ, GIA ĐẠO, CON CÁI**
- Bất lợi cho **chính mình** về tâm sinh lý, tính tình, vận số

⚠️ **Nữ nhân hãm địa:**
- **Trục trặc tình duyên, gia đạo, hôn nhân**
- Phải **LẤY CHỒNG MUỘN**, có khi phải **CƯỚI CHẠY TANG**
- Nếu không thì **GÓA BỤA**, đau khổ vì chồng con
- **Bất lợi sinh nở**, ảnh hưởng tử cung, kinh nguyệt
- Sao Bạch Hổ cần **đắc địa + sao GIẢI MẠNH** mới chế giảm được`,
  },

  {
    id: 'bach-ho-tai-menh-ham-sat-bai',
    title: '⚠️ Bạch Hổ Hãm + Sát Bại tinh tại Mệnh - khổ cực cô độc',
    sao: ['Bạch Hổ'],
    cung: ['Mệnh'],
    chi: ['Tý', 'Sửu', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Tuất', 'Hợi'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 75,
    tomTat: `⚠️ **Bạch Hổ Hãm + Sát Bại tinh (Lục Sát) tại Mệnh:** đem đến
**NHIỀU TAI HỌA**:
- Cuộc sống **KHỔ CỰC, CÔ ĐỘC**
- **Hôn nhân khắc vợ/chồng**, số **GÓA BỤA, CÔ ĐƠN**
- Có thể bị **BẮT BỚ, GIAM CẦM** liên quan pháp luật
- **Bệnh tật trầm kha**, tai nạn nguy hiểm, **YỂU TỬ**`,
  },

  {
    id: 'bach-ho-cong-danh-su-nghiep',
    title: 'Bạch Hổ - Công danh sự nghiệp',
    sao: ['Bạch Hổ'],
    cung: ['Mệnh'],
    doUuTien: 70,
    tomTat: `🌟 **Bạch Hổ + Cát Tinh:** đương số **THÔNG MINH, TÀI NĂNG**, **HIỂN ĐẠT**
về công danh sự nghiệp — có **uy quyền, sắc sảo, can đảm, nghị lực**.

🌟 **Bạch Hổ + Văn Tinh hội chiếu:** thành đạt trong **CHÍNH TRỊ** (đối với
nam nhân).

🌟 **Bạch Hổ + Võ Tinh đi kèm:** thành đạt về **QUÂN SỰ**.

⚠️ **Bạch Hổ + Thiên Hình + Không Kiếp + Hóa Kỵ:** dễ **DÍNH KIỆN TỤNG, RẮC RỐI
PHÁP LUẬT**, dễ **BỊ VU OAN**, hoặc trải qua **NHIỀU LẦN SỤP ĐỔ rồi đứng dậy**.

⚡ **Đặc trưng phúc lộc:**
- Bạch Hổ **KHÔNG** chủ về **GIÀU SANG PHÚ QUÝ**
- Là nền tảng để **TỰ THÂN LẬP NGHIỆP**, đạt thành tựu **BỀN VỮNG**

(Xem entry chuyên biệt theo trạng thái Đắc / Hãm cho khía cạnh tiền bạc.)`,
  },

  {
    id: 'bach-ho-cong-danh-dac-dia',
    title: '🌟 Bạch Hổ Đắc địa - Của cải bền vững tự lập',
    sao: ['Bạch Hổ'],
    cung: ['Mệnh'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 65,
    tomTat: `🌟 **Bạch Hổ Đắc địa - Tài lộc:**

- Của cải đến **CHẬM** nhưng giữ **LÂU**
- **Không thích nhờ cậy** — tự thân lập nghiệp`,
  },

  {
    id: 'bach-ho-cong-danh-ham',
    title: '⚠️ Bạch Hổ Hãm - Tiền bạc trăn trở',
    sao: ['Bạch Hổ'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    doUuTien: 65,
    tomTat: `⚠️ **Bạch Hổ Hãm địa - Tài lộc:**

- Tiền bạc là **NỖI TRĂN TRỞ**
- Làm bao nhiêu cũng không đủ`,
  },

  {
    id: 'bach-ho-tai-menh-han-tai-hoa',
    title: 'Bạch Hổ tại Mệnh - tai họa, hôn nhân',
    sao: ['Bạch Hổ'],
    cung: ['Mệnh'],
    doUuTien: 75,
    tomTat: `⚠️ **Bạch Hổ thủ Mệnh - cảnh báo TAI HỌA:**

Đây là một trong những sao chủ về **THƯƠNG TÍCH, TAI NẠN, BỆNH TẬT KÉO DÀI**:
- Không chỉ bản thân, **CHA MẸ, CON CÁI, NGƯỜI THÂN** trong gia đình cũng dễ
  vướng **vận xui sức khỏe**
- Bệnh **MÁU HUYẾT, GÂN CỐT** hoặc **TAI NẠN BẤT NGỜ**

⚠️ **Hôn nhân (đặc biệt cách "DUYÊN NỢ NGHIỆT DUYÊN"):**
- **Nữ:** dễ **GÓA BỤA**, phải **CƯỚI CHẠY TANG**, hoặc **ưu phiền vì chồng con**
- **Nam:** dễ **KHẮC VỢ**, lấy về dễ **xa cách, ly tán**, hoặc sống **lạnh nhạt,
  không thấu hiểu**

🌟 **Chỉ khi gặp NHIỀU CÁT TINH hóa giải**, đương số mới có hy vọng có một mái
ấm **YÊN BÌNH, ĐỦ ĐẦY**.`,
  },

  {
    id: 'bach-ho-tai-menh-kinh-duong',
    title: '⚠️ Bạch Hổ + Kình Dương tại Mệnh - khó thụ thai',
    sao: ['Bạch Hổ'],
    cung: ['Mệnh'],
    ketHop: ['Kình Dương'],
    doUuTien: 70,
    tomTat: `⚠️ **Bạch Hổ + Kình Dương tại Mệnh:** **Khó thụ thai, sinh khó, sảy
thai, hậu sản**.`,
  },

  {
    id: 'bach-ho-tai-menh-da-la',
    title: '⚠️ Bạch Hổ + Đà La tại Mệnh - khó thụ thai',
    sao: ['Bạch Hổ'],
    cung: ['Mệnh'],
    ketHop: ['Đà La'],
    doUuTien: 70,
    tomTat: `⚠️ **Bạch Hổ + Đà La tại Mệnh:** **Khó thụ thai, sinh khó, sảy thai,
hậu sản**.`,
  },

  {
    id: 'bach-ho-tai-menh-dia-kiep',
    title: '⚠️ Bạch Hổ + Địa Kiếp tại Mệnh - khó thụ thai',
    sao: ['Bạch Hổ'],
    cung: ['Mệnh'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 70,
    tomTat: `⚠️ **Bạch Hổ + Địa Kiếp tại Mệnh:** **Khó thụ thai, sinh khó, sảy
thai, hậu sản**.`,
  },

  {
    id: 'bach-ho-tai-menh-thien-hinh',
    title: '⚠️ Bạch Hổ + Thiên Hình tại Mệnh - khó thụ thai',
    sao: ['Bạch Hổ'],
    cung: ['Mệnh'],
    ketHop: ['Thiên Hình'],
    doUuTien: 70,
    tomTat: `⚠️ **Bạch Hổ + Thiên Hình tại Mệnh:** **Khó thụ thai, sinh khó, sảy
thai, hậu sản**.`,
  },

  {
    id: 'bach-ho-tai-phu-mau',
    title: 'Bạch Hổ tại Phụ Mẫu',
    sao: ['Bạch Hổ'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `⚠️ **Bạch Hổ HÃM địa tại Phụ Mẫu:**
- **GIẢM TUỔI THỌ** của cha mẹ
- Cha mẹ hay **ỐM ĐAU BỆNH TẬT**, thường mắc bệnh về **MÁU HUYẾT**
- Bản thân đương số **dễ có bệnh DI TRUYỀN**
- Cả đời phải **LO TOAN, PHIỀN NÃO** về cha mẹ và bệnh tật của mình

🌟 **Bạch Hổ ĐẮC địa tại Phụ Mẫu:**
- Cha mẹ **GIỎI GIANG**, có **công danh sự nghiệp tốt**, có **QUYỀN THẾ**, có
  tiếng nói trong xã hội
- Vẫn không tránh khỏi **ốm đau** trong cuộc sống, nhưng **MỨC ĐỘ NHẸ**, không
  phải lo lắng quá nhiều như khi hãm địa.`,
  },

  {
    id: 'bach-ho-tai-phu-mau-dac-cat-tinh',
    title: '🌟 Bạch Hổ Đắc + Cát Tinh tại Phụ Mẫu - cha mẹ làm quan to',
    sao: ['Bạch Hổ'],
    cung: ['Phụ Mẫu'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 70,
    tomTat: `🌟 **Bạch Hổ Đắc địa + Cát Tinh (Lục Cát) tại Phụ Mẫu:** cha mẹ có
thể làm **QUAN CHỨC TO**, làm **CHỦ DOANH NGHIỆP**.`,
  },

  {
    id: 'bach-ho-tai-phuc-duc',
    title: 'Bạch Hổ tại Phúc Đức',
    sao: ['Bạch Hổ'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `⚠️ **Bạch Hổ HÃM địa tại Phúc Đức:**
- Trong dòng họ nhiều người **BỊ BỆNH MÁU HUYẾT, UNG NHỌT**
- Bệnh có thể **DI TRUYỀN** tới đời mình → **GIẢM THỌ**
- Trong họ nhiều người **VẤT VẢ, NGHÈO KHỔ, CÔ ĐỘC**
- Có người **CHẾT NON** do giảm tuổi thọ
- Cần phải **CHĂM CHỈ THỜ PHỤNG TỔ TIÊN** để gia tăng phúc khí

⚡ **Đặc điểm tâm linh:**
- Phải **QUAN TÂM NHIỀU** tới chuyện **mồ mả, thờ cúng** tổ tiên ông bà cha mẹ
- **GẦN MỘ TỔ TIÊN** sẽ có một **VIÊN ĐÁ TRẮNG RẤT LINH THIÊNG** ngay cạnh

🌟 **Bạch Hổ ĐẮC địa tại Phúc Đức:**
- Ông bà tổ tiên xưa kia có người **LÀM QUAN LỚN** có uy quyền, **rất linh thiêng**
- Trong dòng họ có nhiều người **THÀNH ĐẠT**, làm **QUAN CHỨC TO**, có **NHIỀU
  QUYỀN HÀNH**`,
  },

  {
    id: 'bach-ho-tai-phuc-duc-dac-cat-tinh',
    title: '🌟 Bạch Hổ Đắc + Cát Tinh tại Phúc Đức - vinh danh dòng họ',
    sao: ['Bạch Hổ'],
    cung: ['Phúc Đức'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 70,
    tomTat: `🌟 **Bạch Hổ Đắc địa + Cát Tinh (Lục Cát) tại Phúc Đức:** vinh danh
nhờ dòng họ, gia tộc.`,
  },

  {
    id: 'bach-ho-tai-dien-trach',
    title: 'Bạch Hổ tại Điền Trạch - duyên đất, đá trắng linh',
    sao: ['Bạch Hổ'],
    cung: ['Điền Trạch'],
    doUuTien: 78,
    tomTat: `⚡ **Bạch Hổ tại Điền Trạch - duyên đất đai:**
- **DƯỚI NHÀ DỄ CÓ CỐT**, hoặc đất trước kia là **NGHĨA TRANG, MỘ ĐỊA**
- **GẦN NHÀ có VIÊN ĐÁ TRẮNG rất linh**
- Đương số có **NHIỀU DUYÊN NỢ** với nơi đang ở — nhiều khi ở đó là để **TRẢ
  NGHIỆP NỢ** trước đây gây ra
- Hay phải **LO TOAN, NẶNG ĐẦU** về nhà cửa, đất đai, con cái

🌟 **Nghề phù hợp:**
- **Buôn bất động sản**
- **Kiến trúc sư**
- **Kỹ sư thi công xây dựng**
- **Quản lý dự án bất động sản**

⚡ **Tính cách:**
Bạch Hổ cư Điền là người **THÍCH KHOE KHOANG, PHÔ TRƯƠNG**, thể hiện sự **giàu
có** bằng nhà to, sang trọng, hoành tráng. Cơ quan công tác cũng đòi hỏi **QUY
MÔ LỚN, UY TÍN, ĐẲNG CẤP**.`,
  },

  {
    id: 'bach-ho-tai-quan-loc',
    title: 'Bạch Hổ tại Quan Lộc',
    sao: ['Bạch Hổ'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `⚡ **Bạch Hổ tại Quan Lộc:** đương số là người **NẶNG LÒNG NHIỀU VỚI CÔNG VIỆC**
— sự nghiệp như **DUYÊN NỢ** của cuộc đời, lúc nào cũng **CÔNG VIỆC**, đặc biệt
khi **THÂN cư Quan**.

→ Coi sự nghiệp như **SỨ MỆNH ĐỜI MÌNH**. Không ngại khó, luôn **xông pha** —
nhưng cũng dễ tự đẩy mình vào **CĂNG THẲNG, VẤT VẢ**.

(Xem entry chuyên biệt cho cách "Hổ về rừng" tại Dần.)`,
  },

  {
    id: 'bach-ho-tai-quan-loc-cat-tinh',
    title: '🌟 Bạch Hổ + Cát Tinh tại Quan Lộc - thăng tiến nổi danh',
    sao: ['Bạch Hổ'],
    cung: ['Quan Lộc'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 73,
    tomTat: `🌟 **Bạch Hổ + Cát Tinh (Lục Cát) tại Quan Lộc:** rất thuận lợi:
- **Công danh thăng tiến**, **uy quyền tăng**
- **Đảm nhiệm vị trí cao**, gây dựng uy tín xã hội
- Phát đạt, nổi danh về **học thuật**`,
  },

  {
    id: 'bach-ho-tai-quan-loc-sat-tinh',
    title: '⚠️ Bạch Hổ + Sát tinh tại Quan Lộc - vu oan hình tù',
    sao: ['Bạch Hổ'],
    cung: ['Quan Lộc'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 73,
    tomTat: `⚠️ **Bạch Hổ + Sát tinh (Lục Sát) tại Quan Lộc:**
- **Rắc rối, tai họa nhiều**
- Bị **VU OAN, BẮT BỚ, HÌNH TÙ** vì công việc`,
  },

  {
    id: 'bach-ho-tai-quan-loc-dan-ho-ve-rung',
    title: '🌟 Bạch Hổ tại Quan Lộc tại Dần - "Hổ về rừng"',
    sao: ['Bạch Hổ'],
    cung: ['Quan Lộc'],
    chi: ['Dần'],
    doUuTien: 80,
    tomTat: `🌟 **Bạch Hổ tại Quan Lộc cư Dần** = cách **"HỔ VỀ RỪNG"**:

- Gặp thời vận tốt, phát huy tài năng → đạt **chức quyền cao**
- Đặc biệt tốt cho tuổi **GIÁP, KỶ**
- Dễ **NỔI DANH HẬU THẾ**`,
  },

  {
    id: 'bach-ho-tai-no-boc',
    title: 'Bạch Hổ tại Nô Bộc',
    sao: ['Bạch Hổ'],
    cung: ['Nô Bộc'],
    doUuTien: 72,
    tomTat: `**Bạch Hổ tại Nô Bộc:** bạn bè, đồng nghiệp, người giúp việc có tính cách
**ƯƠNG NGẠNH, BƯỚNG BỈNH, DŨNG MÃNH**, hay **LẤN ÁT, VƯỢT QUYỀN** mình.

⚠️ Bản thân đương số hay phải **LO ÂU, QUAN TÂM** cho bạn bè, đồng nghiệp, cấp
dưới **NHIỀU HƠN BÌNH THƯỜNG**.

🌟 **Bạch Hổ ĐẮC địa:** có **NHIỀU BẠN BÈ, ĐỒNG NGHIỆP LÀM QUAN**, có **chức
quyền** — có thể tạo **áp lực, cạnh tranh** lớn cho đương số.

⚠️ **Hãm địa:** cần cẩn trọng, dễ dính **rắc rối, thị phi** với những người này.`,
  },

  {
    id: 'bach-ho-tai-thien-di',
    title: 'Bạch Hổ tại Thiên Di',
    sao: ['Bạch Hổ'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `⚡ **Bạch Hổ tại Thiên Di:** đương số có **NHIỀU MỐI LO TOAN**, đi ra ngoài
gánh vác **TRÁCH NHIỆM với XÃ HỘI**, với mọi người xung quanh.

⚠️ **Bạch Hổ HÃM địa:**
- Ra ngoài **DỄ BỊ LẤN ÁT, BẮT NẠT**
- Đi xa dễ gặp **TAI NẠN, ỐM ĐAU**

🌟 **Bạch Hổ ĐẮC địa:**
- Có **QUYỀN LỰC** khi ra ngoài
- Hay ở gần **người có quyền chức**

💡 Để hóa giải Bạch Hổ tại Di: **TRÁNH XA RỦI RO**, không gây **TRANH CÃI, THỊ
PHI** với người khác.`,
  },

  {
    id: 'bach-ho-tai-thien-di-ta-phu-don-thu',
    title: '🌟 Bạch Hổ Đắc + Tả Phù tại Thiên Di - thư ký trợ lý quyền lớn',
    sao: ['Bạch Hổ'],
    cung: ['Thiên Di'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    ketHop: ['Tả Phù'],
    doUuTien: 70,
    tomTat: `🌟 **Bạch Hổ Đắc địa + Tả Phù (đơn thủ) tại Thiên Di:** dễ làm
**THƯ KÝ, TRỢ LÝ** cho người quyền lớn (xét theo cấu trúc Tả Phù đơn thủ tại
bản cung tương ứng).`,
  },

  {
    id: 'bach-ho-tai-thien-di-huu-bat-don-thu',
    title: '🌟 Bạch Hổ Đắc + Hữu Bật tại Thiên Di - thư ký trợ lý quyền lớn',
    sao: ['Bạch Hổ'],
    cung: ['Thiên Di'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    ketHop: ['Hữu Bật'],
    doUuTien: 70,
    tomTat: `🌟 **Bạch Hổ Đắc địa + Hữu Bật (đơn thủ) tại Thiên Di:** dễ làm
**THƯ KÝ, TRỢ LÝ** cho người quyền lớn (xét theo cấu trúc Hữu Bật đơn thủ tại
bản cung tương ứng).`,
  },

  {
    id: 'bach-ho-tai-tat-ach',
    title: 'Bạch Hổ tại Tật Ách - bệnh máu huyết',
    sao: ['Bạch Hổ'],
    cung: ['Tật Ách'],
    doUuTien: 80,
    tomTat: `⚠️ **Bạch Hổ tại Tật Ách:** vấn đề **SỨC KHỎE** lớn — đặc biệt về **MÁU HUYẾT,
GÂN CỐT**:
- **Hoại huyết**, **HUYẾT ÁP CAO**
- **Đau gân, đau tim, NHỨC XƯƠNG, TÊ THẤP**
- **Nhiễm trùng máu**, tim mạch

⚠️ **Đối với NỮ NHÂN:** ảnh hưởng MẠNH:
- **Kinh nguyệt KHÔNG ĐỀU**
- Vấn đề về **TỬ CUNG**
- Ảnh hưởng đến **SINH NỞ**

⚠️ **Tâm lý, tinh thần:**
- Hay rơi vào trạng thái **U SẦU, BUỒN BÃ, BI QUAN**`,
  },

  {
    id: 'bach-ho-tai-tat-ach-hinh-liem-ky',
    title: '⚠️ Bạch Hổ + Thiên Hình + Liêm Trinh + Hóa Kỵ tại Tật Ách - hình tù',
    sao: ['Bạch Hổ'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Hình', 'Liêm Trinh', 'Hóa Kỵ'],
    doUuTien: 75,
    tomTat: `⚠️ **Bạch Hổ + Thiên Hình + Liêm Trinh + Hóa Kỵ tại Tật Ách:** **TAI
HỌA HÌNH TÙ, HÌNH NGỤC**, dễ **PHẠM PHÁP LUẬT**, bị **BẮT BỚ**.`,
  },

  {
    id: 'bach-ho-tai-tai-bach',
    title: 'Bạch Hổ tại Tài Bạch',
    sao: ['Bạch Hổ'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `⚡ **Bạch Hổ tại Tài Bạch:** người có **NHIỀU LO TOAN**, **NẶNG NỀ về tiền bạc**,
lúc nào cũng **VẤT VẢ chăm chăm vào việc kiếm tiền**.

🌟 **Đặc trưng nghề:** Bạch Hổ cư Tài là người có **UY QUYỀN trong chuyện tiền
bạc**, dễ làm các nghề liên quan **TÀI CHÍNH**:
- **Kế toán, kiểm toán**
- **Thủ quỹ, thủ kho**
- **Quản lý tài sản**, kinh doanh quy mô lớn

⚠️ **+ Thiên Hình + Liêm Trinh + Hóa Kỵ:**
- **TAI HỌA liên quan TIỀN BẠC**
- Có thể **NGỒI TÙ** vì tiền
- Hoặc bị **lừa gạt, mất trắng**`,
  },

  {
    id: 'bach-ho-tai-tu-tuc',
    title: 'Bạch Hổ tại Tử Tức - duyên nợ con cái',
    sao: ['Bạch Hổ'],
    cung: ['Tử Tức'],
    doUuTien: 78,
    tomTat: `⚠️ **Bạch Hổ tại Tử Tức:** ám chỉ đương số có **NHIỀU DUYÊN NỢ** với con cái
từ **NHIỀU KIẾP TRƯỚC** sang đến kiếp này phải trả.

⚠️ **Đặc trưng:**
- **KHÓ SINH CON**
- Dễ **SẢY THAI hoặc SINH NON** ngày tháng
- **SINH RA THÌ KHÓ NUÔI** hoặc sinh con nhưng **không được nuôi**

⚡ Vì là **DUYÊN NỢ TIỀN KIẾP** nên **PHẢI GẶP và PHẢI TRẢ**, **KHÔNG THỂ THOÁT**.`,
  },

  {
    id: 'bach-ho-tai-tu-tuc-kinh-duong',
    title: '⚠️ Bạch Hổ + Kình Dương tại Tử Tức - khó có con',
    sao: ['Bạch Hổ'],
    cung: ['Tử Tức'],
    ketHop: ['Kình Dương'],
    doUuTien: 73,
    tomTat: `⚠️ **Bạch Hổ + Kình Dương tại Tử Tức:** **KHÓ CÓ CON**, nặng hơn
thì **KHÔNG CÓ CON CÁI**.`,
  },

  {
    id: 'bach-ho-tai-tu-tuc-that-sat',
    title: '⚠️ Bạch Hổ + Thất Sát tại Tử Tức - khó có con',
    sao: ['Bạch Hổ'],
    cung: ['Tử Tức'],
    ketHop: ['Thất Sát'],
    doUuTien: 73,
    tomTat: `⚠️ **Bạch Hổ + Thất Sát tại Tử Tức:** **KHÓ CÓ CON**, nặng hơn thì
**KHÔNG CÓ CON CÁI**.`,
  },

  {
    id: 'bach-ho-tai-tu-tuc-dia-khong',
    title: '⚠️ Bạch Hổ + Địa Không tại Tử Tức - sinh nhiều nuôi ít',
    sao: ['Bạch Hổ'],
    cung: ['Tử Tức'],
    ketHop: ['Địa Không'],
    doUuTien: 73,
    tomTat: `⚠️ **Bạch Hổ + Địa Không tại Tử Tức:** **SINH NHIỀU NUÔI ÍT**, hay
**SẢY THAI**, có thể phải **NẠO PHÁ THAI**.`,
  },

  {
    id: 'bach-ho-tai-tu-tuc-dia-kiep',
    title: '⚠️ Bạch Hổ + Địa Kiếp tại Tử Tức - sinh nhiều nuôi ít',
    sao: ['Bạch Hổ'],
    cung: ['Tử Tức'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 73,
    tomTat: `⚠️ **Bạch Hổ + Địa Kiếp tại Tử Tức:** **SINH NHIỀU NUÔI ÍT**, hay
**SẢY THAI**, có thể phải **NẠO PHÁ THAI**.`,
  },

  {
    id: 'bach-ho-tai-tu-tuc-khong-kiep-hinh',
    title: '⚠️ Bạch Hổ + Địa Không + Địa Kiếp + Thiên Hình tại Tử Tức - sinh mổ con chết bụng mẹ',
    sao: ['Bạch Hổ'],
    cung: ['Tử Tức'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Thiên Hình'],
    doUuTien: 70,
    tomTat: `⚠️ **Bạch Hổ + Địa Không + Địa Kiếp + Thiên Hình tại Tử Tức:**
**SINH MỔ, KHÓ SINH** hoặc **con chết trong bụng mẹ**.`,
  },

  {
    id: 'bach-ho-tai-tu-tuc-thai',
    title: '⚠️ Bạch Hổ + Thai tại Tử Tức - sảy thai chết non',
    sao: ['Bạch Hổ'],
    cung: ['Tử Tức'],
    ketHop: ['Thai'],
    doUuTien: 73,
    tomTat: `⚠️ **Bạch Hổ + Thai tại Tử Tức:** dễ **SẢY THAI**, **CON CHẾT NON**.`,
  },

  {
    id: 'bach-ho-tai-phu-the',
    title: 'Bạch Hổ tại Phu Thê - duyên nghiệp hôn nhân',
    sao: ['Bạch Hổ'],
    cung: ['Phu Thê'],
    doUuTien: 80,
    tomTat: `⚠️ **Bạch Hổ tại Phu Thê:** đương số có **NHIỀU DUYÊN NGHIỆP** với vợ/chồng.

⚠️ **Đặc trưng:**
- **NHIỀU LO TOAN, TRĂN TRỞ** cho người hôn phối
- Hôn nhân **KHÔNG BỀN LÂU**
- Dễ rơi vào cảnh **TANG CHỒNG / TANG VỢ**
- Hoặc gặp cảnh **LY THÂN, LY HÔN, Ở GÓA** (khi các cung phối thuộc xấu)
- Bạch Hổ tại Phu Thê còn có ý nghĩa **CƯỚI CHẠY TANG**
- Người hôn phối **HAY ỐM ĐAU BỆNH TẬT LIÊN MIÊN**

🌟 **Bạch Hổ ĐẮC địa:** người hôn phối là người **UY QUYỀN**.

🌟 **+ Cát Tinh (đặc biệt Hóa Quyền, Khôi Việt):** thường làm **QUAN TO**, giảm
thiểu các tác nhân xấu về bệnh tật. Trợ giúp tốt cho sự nghiệp đương số — tuy
nhiên cũng dẫn tới xu hướng **GIA TRƯỞNG** trong gia đình.`,
  },

  {
    id: 'bach-ho-tai-huynh-de',
    title: 'Bạch Hổ tại Huynh Đệ',
    sao: ['Bạch Hổ'],
    cung: ['Huynh Đệ'],
    doUuTien: 72,
    tomTat: `⚠️ **Bạch Hổ tại Huynh Đệ:** ảnh hưởng **KHÔNG TỐT** đến mối quan hệ anh chị em.

⚠️ **Đặc trưng:**
- Hay phải **LO LẮNG**, gặp **NHIỀU KHÓ KHĂN PHIỀN MUỘN** vì anh chị em
- Bản thân phải **ĐỨNG RA GÁNH VÁC GIÚP ĐỠ** anh chị em rất nhiều
- Anh chị em trong gia đình hay **ỐM ĐAU**, thậm chí **CHẾT NON**

🌟 **Bạch Hổ ĐẮC địa:** anh chị em **THÀNH ĐẠT, có UY QUYỀN** trong xã hội —
nhưng hay **LẤN ÁT, CHUYÊN QUYỀN** với mình → dễ gây **xung đột**, không hòa
thuận trong gia đình.

⚠️ Có thể là **HIỂU LẦM** hoặc **cách biệt tuổi tác và tính cách quá lớn** dẫn
tới rạn nứt — cần vun đắp khéo léo mới giữ được hòa khí lâu dài.`,
  },

  {
    id: 'bach-ho-tau-thu-hung-bien',
    title: 'Bạch Hổ + Tấu Thư - tài hùng biện',
    sao: ['Bạch Hổ'],
    ketHop: ['Tấu Thư'],
    doUuTien: 75,
    tomTat: `🌟 **Bạch Hổ + Tấu Thư:** chủ về **THÀNH CÔNG trong lĩnh vực NGÔN NGỮ HỌC**.

🌟 **Đặc tính:**
- Sở hữu **TÀI ĂN NÓI HÙNG BIỆN**
- Có khả năng **DIỄN THUYẾT HÙNG HỒN**
- Ngôn từ **LƯU LOÁT**, có **TÍNH THUYẾT PHỤC CAO**
- **Sức quyến rũ sâu sắc**, **khuấy động đám đông** bằng lời nói sắc sảo

🌟 **Nghề tiêu biểu:**
- **Chính khách, ứng viên tranh cử**
- **Giáo sư**
- **Quan tòa, luật sư**
- **Nhà diễn thuyết, MC**

🌟 **+ Lưu Hà / Lưu Thiên Khốc / Lưu Thiên Hư / Văn Xương / Văn Khúc:** tài
hùng biện diễn thuyết có thể **VƯƠN ĐẾN TẦM QUỐC TẾ** — thành danh sớm.`,
  },

  {
    id: 'bach-ho-kinh-duong-thien-hinh',
    title: 'Bạch Hổ + Kình Dương / Thiên Hình - võ tướng (Hổ Kình, Hổ Hình)',
    sao: ['Bạch Hổ'],
    ketHop: ['Kình Dương', 'Thiên Hình'],
    doUuTien: 75,
    tomTat: `🌟 **Bạch Hổ + Kình Dương** (gọi là **HỔ KÌNH**) hoặc **Bạch Hổ + Thiên Hình**
(gọi là **HỔ HÌNH**) đồng cung hay hợp chiếu = **VÕ TƯỚNG**:
- **TINH THẦN KIÊN ĐỊNH**, **chí khí HIÊN NGANG**
- **QUYẾT TÂM CAO**, có **MƯU CƠ QUYỀN BIẾN**
- **Khả năng CHIẾN ĐẤU MẠNH MẼ**, **HỮU DŨNG ĐA MƯU**
- **Tài THAO LƯỢC**

🌟 **Rất ĐẮC LỢI về VÕ NGHIỆP** — phù hợp với:
- **Quân sự, công an**
- **Hành pháp, tư pháp**
- Lãnh đạo doanh nghiệp cần sự **quyết đoán**`,
  },

  {
    id: 'bach-ho-tham-lang-thu-du-can',
    title: 'Bạch Hổ + Tham Lang - bị thú dữ cắn',
    sao: ['Bạch Hổ'],
    ketHop: ['Tham Lang'],
    doUuTien: 65,
    tomTat: `⚠️ **Bạch Hổ + Tham Lang:** ám chỉ **BỊ THÚ DỮ CẮN** — cần **CHÚ Ý** khi tiếp
xúc với động vật.

→ Khi đi cùng các sao **SÁT - HÌNH - KỴ**, bộ này có thể **KÍCH PHÁT HỌA LỚN**:
- Có dấu hiệu **bị THÚ DỮ CẮN CHẾT**
- **Mất mát đột ngột**, **tử vong không báo trước**

⚠️ Cần **xem và kiểm tra HẠN** để nhận định **năm có tai họa**.

💡 **Cách phòng tránh:** hạn chế làm việc với **động vật hoang dã**, **không nuôi
thú dữ**, **cẩn thận khi đi rừng/sở thú** trong các năm hạn xấu.`,
  },

  {
    id: 'bach-ho-tu-hung-tang-ho-dieu-binh',
    title: 'Tang - Hổ - Điếu - Binh (Tứ Hung) - tai nạn chết người',
    sao: ['Bạch Hổ'],
    ketHop: ['Tang Môn', 'Điếu Khách', 'Phục Binh'],
    doUuTien: 78,
    tomTat: `⚠️ **Bạch Hổ + Tang Môn + Điếu Khách + Phục Binh** = bộ **TỨ HUNG** — **rất ĐỘC**.

⚠️ **Báo hiệu:**
- **TAI NẠN CHẾT NGƯỜI**
- **HỌA LỚN**
- **TANG TÓC** trong nhà
- Sự **LY BIỆT** bất ngờ
- **Đại tang** trong gia đình

🌟 **Cách hóa giải:** nếu có **THIÊN ĐỒNG** chiếu → **HÓA GIẢI ĐƯỢC** phần lớn —
Thiên Đồng là phúc tinh, có khả năng **chế ngự sát khí**.

⚠️ Đây là một trong những **CÁCH CỤC NGUY HIỂM NHẤT** liên quan đến **tai họa
tang tóc** trong tử vi — cần kiểm tra cẩn thận khi luận giải.`,
  },

  {
    id: 'bach-ho-luu-tang-luu-ho-dai-tang',
    title: 'Bạch Hổ + Lưu Tang Môn + Lưu Bạch Hổ - đại tang liên tiếp',
    sao: ['Bạch Hổ'],
    ketHop: ['Lưu Tang Môn', 'Lưu Bạch Hổ'],
    doUuTien: 75,
    tomTat: `⚠️ **Bạch Hổ + Lưu Tang Môn + Lưu Bạch Hổ:** bộ **TỨ HUNG LƯU** — mang đến
**TANG TÓC LIÊN TIẾP**, **ƯU PHIỀN NHIỀU**, **ĐẠI TANG**.

→ Đây là **CÁCH CỤC KHỐN KHỔ** — báo hiệu **MẤT MÁT, ĐAU KHỔ** trong cuộc sống.

⚠️ **Khi bước vào ĐẠI HẠN hoặc TIỂU HẠN có những sao này (đặc biệt đồng cung):**
- **PHẢI ĐỀ PHÒNG KỸ LƯỠNG**
- Thời điểm rất dễ gặp **ĐẠI TANG** hoặc **tai họa khiến cả gia đình chao đảo**

⚠️ **Bạch Hổ + Tang Môn + Lưu Tang + Lưu Hổ + Lưu Khốc + Lưu Hư:** **NHIỀU TANG
LIÊN TIẾP**, có **ĐẠI TANG**.`,
  },

  {
    id: 'bach-ho-khoc-ma-suc-vat-chet',
    title: 'Bạch Hổ + Thiên Khốc + Thiên Mã - súc vật chết',
    sao: ['Bạch Hổ'],
    ketHop: ['Thiên Khốc', 'Thiên Mã'],
    doUuTien: 55,
    tomTat: `⚠️ **Bạch Hổ + Thiên Khốc + Thiên Mã:** **SÚC VẬT CHẾT vì BỆNH TẬT**.

→ Đặc trưng cho người chăn nuôi, làm nghề thú y, hoặc nuôi thú cưng — trong
năm hạn dễ **mất con vật yêu quý** vì bệnh.

→ Ý nghĩa rộng: **mất mát tài sản di chuyển** (Mã chủ ngựa xe, di chuyển).`,
  },

  {
    id: 'bach-ho-ho-rieu-ho-da-can',
    title: 'Bạch Hổ + Thiên Riêu / Đà La / Hình / Khốc - bị ác thú cắn',
    sao: ['Bạch Hổ'],
    doUuTien: 60,
    tomTat: `⚠️ **Các tổ hợp BÁO HIỆU bị ÁC THÚ CẮN:**

⚠️ **Bạch Hổ + Thiên Riêu** (Hổ Riêu)
⚠️ **Bạch Hổ + Đà La + Hóa Kỵ + Thái Dương** (Hổ Đà Kỵ Nhật)
⚠️ **Bạch Hổ + Đà La + Thiên Hình** (Hổ Đà Hình)
⚠️ **Bạch Hổ + Thiên Khốc + Thiên Riêu** (Hổ Khốc Riêu)
⚠️ **Bạch Hổ tại Dần + Địa Kiếp tại Tuất**

→ Tất cả các bộ này đều **CẢNH BÁO** đương số dễ bị **THÚ DỮ CẮN, ĐỘNG VẬT TẤN
CÔNG** — đặc biệt khi gặp năm hạn có sao tương tự.

💡 **Lời khuyên:** tránh các nghề liên quan thú dữ, **kiểm tra hạn** trước khi
đi rừng, săn bắn, nuôi động vật hoang.`,
  },

  {
    id: 'bach-ho-vao-han',
    title: 'Bạch Hổ vào hạn - cách giải',
    sao: ['Bạch Hổ'],
    doUuTien: 55,
    tomTat: `⚠️ **Bạch Hổ vào hạn cần xem xét THẬT KỸ**, đặc biệt chú ý **CÁC BỘ SAO LƯU**:

⚠️ Vì Bạch Hổ chủ về **MÁU HUYẾT, BỆNH TẬT, ỐM ĐAU, TÙ TỘI, TANG TÓC**, nên
**LƯU BẠCH HỔ** đi đến đâu sẽ mang theo **PHIỀN NÃO** ở đó.

⚠️ **Tính cách trong hạn Bạch Hổ:**
- Tính khí **CƯƠNG QUYẾT, MẠNH MẼ** — nếu không kiểm soát sẽ chuyển thành
  **CỨNG ĐẦU, NGANG NGƯỢC**
- Dễ rơi vào **BẪY TÂM LÝ**, lối tư duy **"trắng - đen"**
- **Hành xử THIẾU CÂN NHẮC**, tự rước họa vào thân

💡 **CÁCH GIẢI HẠN BẠCH HỔ ĐƠN GIẢN NHẤT - ĐIỀU CHỈNH TÂM TÍNH:**
- Giữ tinh thần **ỔN ĐỊNH**
- Biết **SUY XÉT TRƯỚC SAU**
- Tránh vì **NÓNG VỘI** mà hành động thiếu suy nghĩ
- **KIỂM SOÁT CẢM XÚC** = chìa khóa **mạnh nhất** giúp đương số vượt qua vận hạn`,
  },

  {
    id: 'bach-ho-theo-do-tuoi',
    title: 'Bạch Hổ - ảnh hưởng theo các giai đoạn đời',
    sao: ['Bạch Hổ'],
    doUuTien: 40,
    tomTat: `⚡ **Ảnh hưởng của Bạch Hổ biến chuyển THEO TỪNG CHẶNG ĐƯỜNG đời:**

⚠️ **Tuổi nhỏ (đến hết tuổi dậy thì):**
- Bạch Hổ dù **đắc hay hãm** đều tạo ảnh hưởng **LỚN** khi còn nhỏ
- Bắt đầu có nhận thức → kết thúc dậy thì là giai đoạn **mạnh về BẢN NĂNG**,
  khó kiểm soát rủi ro
- Trẻ có **Mệnh Bạch Hổ** hoặc **hạn Bạch Hổ** rất cần **CHA MẸ QUAN TÂM SÁT
  SAO** để tránh tai họa nghiêm trọng và khó lường

🌟 **Sau 30 tuổi:**
- Mệnh Bạch Hổ — ảnh hưởng **GIẢM NHẸ** vì **TÍNH KHÍ CHÍN CHẮN**, biết suy
  xét kỹ càng
- Tuy nhiên vẫn phải **đề phòng các hạn** có sao Bạch Hổ chiếu qua

🌟 **Hậu vận:**
- Bạch Hổ có thể mang **LỢI THẾ** khi về già
- Người có **Bạch Hổ ở cung Thân**, hoặc **sau 40-60 tuổi nhập vận Bạch Hổ** —
  vẫn tiếp tục **TÌM KIẾM LÝ TƯỞNG SỐNG**, **CỐNG HIẾN** cho xã hội thay vì
  nghỉ ngơi an nhàn
- Tuy nhiên, sao này khiến họ trở nên **KHÓ TÍNH HƠN** — dễ ảnh hưởng đến mối
  quan hệ với **CON CHÁU** trong nhà`,
  },

  {
    id: 'bach-ho-loi-khuyen-tu-duong',
    title: 'Lời khuyên tu dưỡng cho người Bạch Hổ',
    sao: ['Bạch Hổ'],
    doUuTien: 35,
    tomTat: `💡 **Bạch Hổ là tinh tú ĐẶC BIỆT** — vừa mang **khí chất THẦN THÚ UY DŨNG**,
vừa chứa đựng **THỬ THÁCH NGHIỆT NGÃ** của cuộc đời.

⚡ **Bạch Hổ chỉ XẤU khi:**
- Ở vị trí **không tốt** (hãm địa)
- Bị các **sát hình kỵ** tác động
- **KÍCH PHÁT** tai họa

🌟 **Khi BIẾT TRƯỚC SỐ MỆNH, đương số có thể TỪ HÀNH ĐỘNG MÀ THAY ĐỔI:**
- **LẤY ĐỨC HÓA SÁT** — dùng đức độ thay tranh đấu
- **LẤY TRÍ TUỆ SOI ĐƯỜNG** — không hành động vội vã
- **TÍCH CỰC LÀM VIỆC THIỆN** — chuyển hung thành cát
- **TU TÂM TÍNH** — kiểm soát cảm xúc, không nóng nảy
- **CHĂM PHỤNG TỔ TIÊN** — đặc biệt khi Hổ ở Phúc Đức / Điền Trạch
- **THỜ KÍNH PHẬT THÁNH** — nếu có căn đồng số lính

→ **Vẫn có cơ hội CHUYỂN HUNG THÀNH CÁT** — Tử Vi không phải định mệnh, là
**ĐỊNH HƯỚNG** để tu dưỡng.`,
  },
];
