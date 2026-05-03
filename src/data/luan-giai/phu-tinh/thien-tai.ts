import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THIÊN TÀI - Thổ, Phù Tinh + Ám Tinh.
 *
 * An theo NĂM SINH (engine: từ cung Mệnh = năm Tý, thuận đến chi năm sinh).
 *
 * Đặc trưng: TRÍ TUỆ SẮC BÉN - THÔNG MINH XUẤT CHÚNG nhưng KIÊU NGẠO TỰ CAO.
 *
 * CẶP TÀI-THỌ - quan hệ NHÂN-QUẢ:
 * - Thiên Tài = HẠT MẦM (gieo NHÂN) — vị trí cần đầu tư, vun bồi
 * - Thiên Thọ = TRÁI QUẢ (gặt QUẢ) — vị trí được hưởng thành tựu
 * - Phần CHUNG cặp đôi đã viết tại file thien-tho.ts với tag
 * sao: ['Thiên Thọ','Thiên Tài']
 */
export const luanGiai_ThienTai: DoanLuanGiai[] = [
  {
    id: 'thien-tai-tinh-chat-chung',
    title: 'Thiên Tài - Đặc tính chung',
    sao: ['Thiên Tài'],
    doUuTien: 32,
    tomTat: `**Thiên Tài** — phụ tinh **PHÙ TINH** kiêm **ÁM TINH**, an theo
**năm sinh**.

**Ngũ hành:** **Thổ**.

**Đặc tính:**
- **Trí tuệ sắc bén, thông minh xuất chúng**, ứng biến linh hoạt
- **Nhìn xa trông rộng**, biết nắm bắt cơ hội vươn lên dẫn đầu
- Thích **KHÁM PHÁ** kiến thức mới, học hành ham hiểu biết
- Mặt tối: **KIÊU NGẠO, TỰ CAO**, dễ coi thường người khác: biến thành
  **ÁM TINH** khi đi sai đường

**Vai trò:**
- Là **HẠT MẦM** (gieo NHÂN) trong cặp Nhân-Quả với **Thiên Thọ** (trái quả)
- Vị trí Thiên Tài đóng = nơi cần **VUN BỒI, ĐẦU TƯ CÔNG SỨC, LÀM PHÚC**
- **Tài đi với Đức** — nếu tu dưỡng đạo đức thì thành nhân tài, ngược lại
  sa vào tự mãn gây mất thiện cảm

**Khái quát:**
- **Cát tinh hội (Tứ Đức, Quang Quý, Hóa Khoa):** tài đức vẹn toàn, được
  trọng vọng, sự nghiệp vững vàng
- **Sát tinh hội (Sát Hình Kỵ, Hỏa Linh):** kiêu ngạo gây thị phi, tài năng
  bị bài xích, dễ rơi vào "con dao hai lưỡi" tự hại bản thân`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // THIÊN TÀI TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-tai-tai-menh',
    title: 'Thiên Tài tại Mệnh',
    sao: ['Thiên Tài'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `**Thiên Tài thủ Mệnh** — đầu óc **LINH HOẠT, TRÍ TUỆ SẮC BÉN**, khả năng
**XOAY CHUYỂN TÌNH THẾ** nhanh nhạy hơn người.

**Hai mặt - "con dao hai lưỡi":**
- **Tích cực:** dễ gặt hái thành tựu nhờ năng lực hơn người, biết tự soi
  chiếu bản thân, dễ nhận ra khuyết điểm để **SỬA ĐỔI**
- **Tiêu cực:** tài năng đặt sai chỗ: biến thành **KIÊU NGẠO, TỰ CAO,
  XEM THƯỜNG NGƯỜI KHÁC**, hoặc dùng tài làm việc trái đạo lý

**Đặc trưng quý:** Mệnh Thiên Tài biết **TỰ SOI CHIẾU**, dễ nhận khuyết
điểm để sửa: giảm sai lầm trên đường đời.

**Tài song hành Đức:** Thiên Tài gặp **bộ Tứ Đức** (Long-Phúc-Thiên-Nguyệt
Đức): **TÀI ĐỨC VẸN TOÀN**, được lòng thiên hạ, hưởng phúc bền lâu.

**Đặc biệt:** Khi **Thiên Tài thủ Mệnh thì Thiên Thọ thủ cung an thân**
— gieo duyên nào gặt quả đó, làm điều thiện về cuối đời nhận lại may mắn.`,
  },

  {
    id: 'thien-tai-tai-phu-mau',
    title: 'Thiên Tài tại Phụ Mẫu',
    sao: ['Thiên Tài'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Thiên Tài thủ Phụ Mẫu** — cha mẹ **TRÍ TUỆ, NHANH NHẠY, GIỎI GIANG**.

**Cát tinh hội (Tả Hữu, Khôi Việt, Xương Khúc, đặc biệt Lộc-Quyền-Khoa):**
- Cha mẹ không chỉ có tài mà còn có **THẾ**, đủ sức nâng đỡ con cái
- Cách **Thiên Tài + Hóa Khoa**: cha mẹ là tấm gương cho con cái noi theo
  trên hành trình lập nghiệp

**Sát tinh hội (Kình Dương, Hỏa Tinh):**
- Cha mẹ có tài năng nổi bật nhưng **TỰ CAO TỰ ĐẠI, KHINH THƯỜNG** người khác
- **GIA ĐẠO KHÓ HÒA HỢP**, cha mẹ con cái phần xa cách

**Đạo hiếu:** Bản mệnh càng cần **CHĂM SÓC CHA MẸ** giữ trọn đạo hiếu —
cũng là gieo phúc để con cháu đời sau đối đãi lại với mình.`,
  },

  {
    id: 'thien-tai-tai-phu-the',
    title: 'Thiên Tài tại Phu Thê',
    sao: ['Thiên Tài'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `**Thiên Tài thủ Phu Thê** — bạn đời **THÔNG MINH, TÀI GIỎI** nhưng dễ
**NGẠO MẠN, COI THƯỜNG** người khác.

**Cảnh báo:**
- Đi cùng **Cự Môn**: lời nói nhiều lần mang ý **KHINH THƯỜNG**, khiến tình
  cảm có khoảng cách
- Quan hệ vợ chồng dễ phát sinh **MÂU THUẪN**, khó duy trì hòa hợp lâu dài

**Cách giữ hôn nhân yên ấm:**
- Cố gắng **NÂNG CAO NĂNG LỰC** bản thân để xứng đôi vừa lứa
- Tránh cảnh **"đũa lệch"** cả về tài năng lẫn vị thế với bạn đời
- Toàn tâm với người hôn phối: gia đình yên ấm, kết quả quý báu sẽ đến tại
  cung Thiên Thọ`,
  },

  {
    id: 'thien-tai-tai-phuc-duc',
    title: 'Thiên Tài tại Phúc Đức - phải chăm gia tiên',
    sao: ['Thiên Tài'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `**Thiên Tài thủ Phúc Đức** — dòng họ **NHIỀU NGƯỜI THÔNG MINH, TÀI HOA**,
dễ xuất hiện **NHÂN VẬT KIỆT XUẤT**.

**Trách nhiệm đặc biệt - GIN GIỮ MỒ MẢ:**
- Bản mệnh phải **CHĂM SÓC HỌ HÀNG, DÒNG TỘC**, đặc biệt là **MỒ MẢ, BÀN
  THỜ GIA TIÊN**
- Có vậy mới hưởng trọn **"LỘC ẤM"** lâu dài

**Tâm thái:**
- Người tài kèm cái tôi lớn: dễ coi nhẹ người khác
- Nếu khéo léo, **KHIÊM NHƯỜNG** thì học hỏi được nhiều, có khó khăn được
  họ hàng hỗ trợ

**Sát tinh hội (Thất Sát, Hóa Kỵ, Thiên Hình):**
- Người giỏi trong họ **KHÔNG NHIỆT TÌNH** nâng đỡ
- Có thái độ **LẠNH NHẠT** hoặc **COI THƯỜNG**`,
  },

  {
    id: 'thien-tai-tai-dien-trach',
    title: 'Thiên Tài tại Điền Trạch',
    sao: ['Thiên Tài'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Thiên Tài thủ Điền Trạch** — bản mệnh có duyên **CHĂM LO CHUYỆN NHÀ CỬA,
BẾP NÚC, HẠNH PHÚC GIA ĐÌNH**. Gia trạch sinh khí tốt, dễ **SẢN SINH NHÂN
TÀI**, con cháu học hành sáng dạ.

**Cát tinh hội:**
- Hội **bộ Tứ Đức**: nhà ở toát lên **NỀ NẾP, TÔN NGHIÊM**
- Hội **Khôi Việt, Tả Hữu, Xương Khúc, Lộc Tồn, Quang Quý, Thiên Giải**
  nơi ở **"ĐẤT LÀNH CHIM ĐẬU"**, hưng vượng lâu dài

**Phá cách (Hỏa Linh, Không Kiếp, Tang Hổ, Phá Hư tại Điền + Phúc):**
- Đời sống tinh thần **BẤT ỔN**
- Tâm dễ sinh **TỰ CAO, LẠNH NHẠT**, ít hòa đồng với xóm giềng

**Lưu ý:** Bản thân sinh sống ở nhà hơi tự cao nên **ÍT TIẾP XÚC** với
hàng xóm.`,
  },

  {
    id: 'thien-tai-tai-quan-loc',
    title: 'Thiên Tài tại Quan Lộc',
    sao: ['Thiên Tài'],
    cung: ['Quan Lộc'],
    doUuTien: 76,
    tomTat: `**Thiên Tài thủ Quan Lộc** — chí hướng sự nghiệp **RÕ RÀNG**, luôn muốn
**KHẲNG ĐỊNH BẢN THÂN**.

**Mặt sáng:**
- Trong chuyên môn **NỔI BẬT** nhờ nhanh nhạy, sáng tạo
- Hay đưa ra **PHÁT KIẾN RIÊNG**

**Mặt tối - cảnh báo:**
- Tính tự cao dễ **NHẦM LẪN** trong quyết định
- Bị **KẺ KHÁC ĐỐ KỴ**, ghen ghét

**Sát tinh hội (Cự Môn, Linh Tinh, Đà La, Phục Binh, Tang Môn, Hóa Kỵ):**
- Nguy cơ **BỊ CHÈN ÉP, CƯỚP CÔNG** nơi công sở khó tránh

**Cát tinh hội (Văn Xương, Văn Khúc, Thai Phụ, Phong Cáo):**
- Tài năng đặt đúng chỗ như **"CÁ GẶP NƯỚC"**
- Dễ trở thành **DANH SĨ** trong học thuật, khoa học, nghệ thuật`,
  },

  {
    id: 'thien-tai-tai-no-boc',
    title: 'Thiên Tài tại Nô Bộc',
    sao: ['Thiên Tài'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Thiên Tài thủ Nô Bộc** — đương số hay phải **QUAN TÂM, HỖ TRỢ** bạn bè,
đồng nghiệp, cấp dưới.

**Vòng quan hệ:** Quy tụ nhiều người **THÔNG MINH, CÓ TÀI** nhưng thường
**KIÊU NGẠO, KHÓ GẦN**.

**Cát tinh hội (Văn tinh, đặc biệt Hóa Khoa):**
- Dễ kết giao với người **TRI THỨC, DANH VỌNG** khiến bản thân nể phục
- Giữ tâm cầu thị: mở ra cơ hội phát triển nhờ các mối liên hệ

**Sát tinh hội (Sát, Hình, Kỵ):**
- Bạn bè giỏi giang nhưng **XEM NHẸ** mình
- Tỏ thái độ **"KHÔNG CÙNG ĐẲNG CẤP"**

**Quy luật Nhân-Quả:** Gieo phúc cho bạn bè, cấp dưới ở đây: vị trí
**Thiên Thọ** sẽ là nơi gặt quả ngọt.`,
  },

  {
    id: 'thien-tai-tai-thien-di',
    title: 'Thiên Tài tại Thiên Di',
    sao: ['Thiên Tài'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Thiên Tài thủ Thiên Di** — nhiều **DUYÊN NỢ** với môi trường bên ngoài,
ra xã hội dễ **GÂY CHÚ Ý** vì tài năng.

**Cảnh báo:** Vướng cái tôi cao: đôi khi bị người khác **GHEN GHÉT,
ĐỐ KỴ, CHÈN ÉP**.

**Cát tinh hội - đắc cách XUẤT NGOẠI:**
- Hội nhiều **văn tinh**, đặc biệt **Thiên Cơ + Hóa Lộc-Khoa-Quyền**
- Rất hợp **ĐI XA, DU HỌC**, nâng cao chuyên môn
- **XÂY DỰNG SỰ NGHIỆP NƠI ĐẤT KHÁCH** thuận lợi

**Trách nhiệm:** Hay phải **QUAN TÂM, GIÚP ĐỠ XÂY DỰNG XÃ HỘI** bên ngoài
tốt đẹp hơn — đây là cách gieo nhân.`,
  },

  {
    id: 'thien-tai-tai-tat-ach',
    title: 'Thiên Tài tại Tật Ách - đặc biệt nghề chữa bệnh',
    sao: ['Thiên Tài'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `**Thiên Tài thủ Tật Ách** — thân thể, tinh thần dễ **SUY NHƯỢC**, hay mắc
bệnh **THẦN KINH, SINH LÝ (DƯƠNG LIỆT ÂM HƯ), KHÍ HUYẾT**.

**Yêu cầu:** Buộc phải chú ý **DƯỠNG SINH, GIỮ GÌN SỨC KHỎE** để phòng
tránh tai họa bất ngờ.

**Hợp cách - NGHỀ CHỮA BỆNH:**
- Bén duyên với **BÁC SỸ, THẦY THUỐC, THẦY GIÁO**
- Dùng tài năng giúp đời, cứu người: sớm gặt hái **QUẢ NGỌT** tại cung
  Thiên Thọ
- Đây là cách **HÓA GIẢI ĐẸP NHẤT** của Thiên Tài tại Tật

**Sát tinh hội (Kình Dương, Đà La):**
- Tâm tính **NGẠO MẠN, NÓNG NẢY**
- Hành xử **THIẾU CHÍN CHẮN** trong giao tiếp`,
  },

  {
    id: 'thien-tai-tai-tai-bach',
    title: 'Thiên Tài tại Tài Bạch',
    sao: ['Thiên Tài'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Thiên Tài thủ Tài Bạch** — bản lĩnh, **TỰ TIN, GIỎI KIẾM TIỀN**, nghĩ ra
nhiều cách kiếm tiền.

**Mặt tối:**
- Dễ sinh **KIÊU NGẠO, PHÔ TRƯƠNG QUÁ MỨC**
- Khó giữ tiền nếu thiếu khiêm nhường

**Cát tinh hội:**
- Tự tin thúc đẩy suy nghĩ **DÁM NGHĨ DÁM LÀM**
- Thu được thành quả lớn

**Sát tinh hội (Kình Dương, Đà La, Hóa Quyền):**
- Thích thể hiện: **CẠNH TRANH KHỐC LIỆT**
- Bị **ĐỐI THỦ BÀI XÍCH**

**Quy luật Nhân-Quả:** Càng làm nhiều **VIỆC THIỆN**, chi tiêu cho giá
trị tích cực: càng gieo phúc đức, hưởng nhiều may mắn tại cung Thiên Thọ.`,
  },

  {
    id: 'thien-tai-tai-tu-tuc',
    title: 'Thiên Tài tại Tử Tức',
    sao: ['Thiên Tài'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Thiên Tài thủ Tử Tức** — con cái **THÔNG MINH, NHANH NHẠY, XUẤT CHÚNG**.

**Cát tinh hội:**
- Định hướng từ nhỏ: con cái đạt **CHUYÊN MÔN SÂU**
- Trở thành **NGƯỜI TÀI** trong lĩnh vực mình theo đuổi

**Sát tinh hội:**
- Năng lực **THIẾU CÂN BẰNG**
- Chỉ nổi trội ở **MỘT MÔN HỌC** hoặc một kỹ năng
- Mặt khác lại yếu: **HỌC LỆCH**, thiếu hụt kiến thức về lâu dài

**Lưu ý đặc biệt:**
- Phải **GIÁO DỤC LỄ NGHĨA, ĐẠO ĐỨC** cho con
- Chỉ khi **TÀI NĂNG + NHÂN CÁCH** song hành: thành công bền vững
- Nếu chỉ chăm tài mà bỏ đức: con cái **KIÊU CĂNG TỰ PHỤ**`,
  },

  {
    id: 'thien-tai-tai-huynh-de',
    title: 'Thiên Tài tại Huynh Đệ',
    sao: ['Thiên Tài'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Thiên Tài thủ Huynh Đệ** — bản mệnh là người **CÓ TRÁCH NHIỆM**, hay
đứng ra **LO TOAN, BAO BỌC** anh chị em.

**Quy luật Nhân-Quả:** Sự giúp đỡ không phải lúc nào cũng được đáp lại
trực tiếp, nhưng về lâu dài mang lại **PHÚC BÁO** và sự hậu thuẫn nhiều
phương diện (gặt quả tại cung có Thiên Thọ).

**Đặc trưng:** Anh chị em **GIỎI GIANG**, nhưng tài năng cần được **RÈN
LUYỆN, BỒI ĐẮP** mới phát triển vững vàng.

**Cát tinh hội (Thiên Khôi, Thiên Việt, Quang Quý, Tả Hữu):**
- Anh chị em không chỉ **TỰ KHẲNG ĐỊNH NĂNG LỰC**
- Còn trở thành **CHỖ DỰA TỐT** cho bản mệnh`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // KẾT HỢP ĐẶC BIỆT
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-tai-thien-co-da-hoc-da-nang',
    title: 'Thiên Tài + Thiên Cơ - Đa học đa năng',
    sao: ['Thiên Tài'],
    ketHop: ['Thiên Cơ'],
    doUuTien: 55,
    tomTat: `**Thiên Tài + Thiên Cơ đồng cung** — câu phú: **"Thiên Cơ Thiên Tài THÔNG
MINH TÀI TRÍ TĂNG GẤP BỘI, ĐA HỌC ĐA NĂNG"**.

**Đặc trưng:**
- Trí tuệ Thiên Cơ vốn cao + thêm Thiên Tài: **SẮC BÉN GẤP BỘI**
- Thiên Tài có khả năng **CẢI THIỆN** khuyết điểm của Thiên Cơ:
  - Bù đắp tính **LO XA QUÁ MỨC** của Cơ
  - Bù đắp khả năng **TÍNH TOÁN** mà Cơ thiếu cương quyết

**Cách dụng:** Đa năng đa tài, học gì cũng giỏi, đặc biệt hợp:
- Nghiên cứu khoa học
- Lập trình, tin học
- Phân tích chiến lược
- Cố vấn, tham mưu`,
  },

  {
    id: 'thien-tai-tu-duc-tai-duc-ven-toan',
    title: 'Thiên Tài + bộ Tứ Đức - Tài đức vẹn toàn',
    sao: ['Thiên Tài'],
    ketHop: ['Long Đức', 'Phúc Đức', 'Thiên Đức', 'Nguyệt Đức'],
    doUuTien: 55,
    tomTat: `**Thiên Tài hội bộ Tứ Đức** (Long Đức + Phúc Đức + Thiên Đức + Nguyệt Đức)
— cách **TÀI ĐỨC VẸN TOÀN**.

**Ý nghĩa cốt lõi:** Chữ **"TÀI"** song hành cùng chữ **"ĐỨC"**:
- Có tài lại có đức: ắt được **LÒNG THIÊN HẠ**
- Vừa được người đời **TRỌNG VỌNG**
- Vừa **HƯỞNG PHÚC BỀN LÂU**

**Hóa giải mặt tối Thiên Tài:**
- Tứ Đức **CHẾ NGỰ** tính kiêu ngạo, tự cao
- Tài năng được dẫn dắt theo hướng **CHÍNH ĐẠO**
- Không còn nguy cơ "con dao hai lưỡi" tự hại bản thân

Đây là một trong những cách **AN LÀNH NHẤT** cho người có Thiên Tài.`,
  },

  {
    id: 'thien-tai-quang-quy-quan-phuc-thong-minh',
    title: 'Thiên Tài + Quang Quý + Quan Phúc - Thông minh điềm đạm',
    sao: ['Thiên Tài'],
    ketHop: ['Ân Quang'],
    doUuTien: 50,
    tomTat: `**Thiên Tài + Quang Quý + Quan Phúc** (Ân Quang + Thiên Quý + Thiên Quan +
Thiên Phúc) — câu phú: **"THÔNG MINH, ĐIỀM ĐẠM, TÀI GIỎI"**.

**Đặc trưng:**
- **Quang Quý** = quý tinh, tăng phẩm chất cao quý
- **Quan Phúc** = sao Giải, tăng phúc đức cứu giải
- Kết hợp: tài năng Thiên Tài được dẫn dắt vào con đường **ĐIỀM ĐẠM,
  HIỀN HẬU**

**Cách dụng:**
- Hóa giải hoàn toàn tính **KIÊU NGẠO** của Thiên Tài
- Thành nhân vật **VỪA TÀI VỪA HIỀN**
- Hợp nghề tư vấn, giáo dục, từ thiện`,
  },
];
