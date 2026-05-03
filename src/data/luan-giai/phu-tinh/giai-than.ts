import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO GIẢI THẦN - Mộc, Thiện Tinh.
 *
 * An theo NĂM SINH (engine: khởi từ Tuất).
 *
 * QUY LUẬT BẮT BUỘC: Giải Thần LUÔN đồng cung Phượng Các (cùng khởi từ
 * Tuất theo năm sinh) — đã hardcode trong engine `src/core/tuvi/phu-tinh.ts`.
 *
 * Vai trò:
 * - Sao GIẢI mạnh nhất trong bộ Tam Giải (Thiên Giải, Địa Giải, Giải Thần)
 * - Bổ trợ cho Phượng Các tạo bộ "PHƯỢNG GIẢI" - bùa hộ mệnh
 * - Vì luôn đi với Phượng Các (Tứ Linh): cũng chủ về GIÀU SANG, THỊNH VƯỢNG
 *
 * Phần CHUNG bộ Phượng Giải đã viết tại file phuong-cac.ts.
 */
export const luanGiai_GiaiThan: DoanLuanGiai[] = [
  {
    id: 'giai-than-tinh-chat-chung',
    title: 'Giải Thần - Đặc tính chung',
    sao: ['Giải Thần'],
    doUuTien: 32,
    tomTat: `**Giải Thần** — phụ tinh **THIỆN TINH**, sao **GIẢI** mạnh nhất, an theo
**năm sinh**.

**Ngũ hành:** **Mộc**.

**Quy luật bắt buộc:**
- **LUÔN ĐỒNG CUNG** với **Phượng Các** (engine hardcode)
- Tạo bộ **PHƯỢNG GIẢI** — như **bùa hộ mệnh**

**Vai trò:**
- **Giải ách, may mắn, trừ họa, phúc thọ, độ lượng**
- Sao Giải **MẠNH NHẤT** trong bộ Tam Giải (vượt Thiên Giải + Địa Giải)
- Vì luôn đi với Phượng Các (Tứ Linh): cũng chủ về **GIÀU SANG, THỊNH VƯỢNG**
- Đương số dễ **LÀM GIÀU**

**Cảnh báo CỰC QUAN TRỌNG:**
- Sao này chỉ hóa giải được **NẠN NHỎ**
- Nếu cả đại tiểu hạn cùng gặp Giải Thần + sao xấu mạnh: Giải Thần có thể
  **ĐÓNG VAI TỬ THẦN**, giết chết mệnh chủ một cách **NHANH CHÓNG**
- Đây là điểm khác biệt quan trọng với các sao Giải khác`,
  },

  {
    id: 'giai-than-canh-bao-tu-than',
    title: 'CẢNH BÁO - Giải Thần đại tiểu hạn cùng sao xấu = TỬ THẦN',
    sao: ['Giải Thần'],
    doUuTien: 60,
    tomTat: `**CẢNH BÁO ĐẶC BIỆT** — Giải Thần có MẶT TỐI ít người biết.

**Bình thường:** Giải Thần là sao **GIẢI ÁCH** mạnh, hóa giải tai ương,
trừ hung, may mắn.

**Khi cả ĐẠI HẠN + TIỂU HẠN cùng gặp Giải Thần + sao xấu mạnh:**
- Giải Thần **KHÔNG còn là sao Giải nữa**
- Đóng vai **TỬ THẦN**
- Có thể **GIẾT CHẾT MỆNH CHỦ** một cách **NHANH CHÓNG**

**Cơ chế:** Giải Thần chỉ có thể hóa giải **NẠN NHỎ** — nếu gặp
**ĐẠI NẠN, ĐẠI BỆNH** mà cả 2 hạn cùng có thì sao này quay sang phía
"giải" mệnh người luôn (giải nghĩa = "tháo gỡ ra khỏi cõi sống").

**Lưu ý khi luận hạn:**
- Cần xem kỹ **MỨC ĐỘ HUNG TINH** trong cùng cung
- Hạn có sao xấu nặng + Giải Thần ở cả 2 vận: cần **CỰC THẬN TRỌNG**
- Khác hẳn với Tứ Đức, Quang Quý, Quan Phúc (luôn giải tốt)`,
  },

  {
    id: 'giai-than-bo-phuong-giai-bua-ho-menh',
    title: 'Bộ Phượng Giải - Bùa hộ mệnh, giàu sang thịnh vượng',
    sao: ['Giải Thần'],
    ketHop: ['Phượng Các'],
    doUuTien: 55,
    tomTat: `**Bộ PHƯỢNG GIẢI** (Phượng Các + Giải Thần) — luôn đồng cung do quy luật
an sao.

**Như BÙA HỘ MỆNH** đem may mắn, phúc thọ tới bất kỳ cung nào đóng.

**Vai trò kép:**
- **Phượng Các** = sao Cát của Tứ Linh, biểu tượng phẩm cách cao quý, cái tai
- **Giải Thần** = sao Giải, hóa giải tai ách
- Cùng đứng: vừa **CỨU GIẢI** vừa **GIA TĂNG MAY MẮN**

**Đặc điểm bổ trợ:**
- Vì Giải Thần đi đến đâu cũng có Hoa Cái, Long Trì, Phượng Các (Tứ Linh)
-: Giải Thần cũng chủ về **GIÀU SANG**, đương số **DỄ LÀM GIÀU**
- Đây là điểm khác biệt với Thiên Giải, Địa Giải (chỉ giải họa)`,
  },

  {
    id: 'giai-than-tam-tang-bat-toa-nha-lau',
    title: 'Phượng Giải + Tam Thai Bát Tọa - Nhà lầu cao sang có ao hồ',
    sao: ['Giải Thần'],
    cung: ['Điền Trạch'],
    ketHop: ['Tam Thai', 'Bát Tọa'],
    doUuTien: 60,
    tomTat: `**Phượng Các + Giải Thần + Tam Thai + Bát Tọa tại Điền Trạch** — câu phú:
**"Có nhà LẦU CAO SANG, nhà có AO HỒ"**.

**Phân tích:**
- **Phượng Giải** = bùa hộ mệnh, gia đình bảo vệ
- **Tam Thai** + **Bát Tọa** = bộ sao thanh cao, gia đạo cao quý
- Hợp lại: cơ ngơi đẹp đẽ, có **NHÀ LẦU, BIỆT THỰ, SÂN VƯỜN, AO HỒ**

**Đặc trưng môi trường:**
- Hàng xóm xung quanh nhiều người **CÓ ĐỊA VỊ, CHỨC SẮC**
- Nhà có **HOÀNH PHI CÂU ĐỐI**
- Phong thủy tốt`,
  },

  {
    id: 'giai-than-da-la-kinh-duong-giam-thi-phi',
    title: 'Giải Thần + Đà La / Kình Dương - Giảm thị phi tai bay vạ gió',
    sao: ['Giải Thần'],
    ketHop: ['Đà La'],
    doUuTien: 50,
    tomTat: `**Giải Thần + Đà La / Kình Dương vào hạn** — **GIẢM THỊ PHI, TAI BAY VẠ GIÓ**.

**Đặc trưng:**
- Đà La, Kình Dương = sao chủ **THỊ PHI, KIỆN TỤNG**
- Giải Thần làm **GIẢM ĐÁNG KỂ** tai bay vạ gió
- Tránh được lời đồn thổi xuyên tạc, mâu thuẫn sứt mẻ uy tín

**Cơ chế hóa giải:**
- Vận xấu nhanh chóng được hóa giải
- Dễ tìm được người đứng ra **PHÂN XỬ CÔNG BẰNG**
- Hoặc có **BẰNG CHỨNG MINH OAN**`,
  },

  {
    id: 'giai-than-tieu-nhan-lua-gat',
    title: 'Giải Thần - Quý nhân tháo gỡ tiểu nhân lừa gạt',
    sao: ['Giải Thần'],
    doUuTien: 50,
    tomTat: `**Giải Thần khi gặp hạn có TIỂU NHÂN QUẤY PHÁ** — như **QUÝ NHÂN KỊP THỜI
XUẤT HIỆN**, tháo gỡ âm mưu, đưa mệnh chủ thoát khỏi hiểm cảnh.

**Tác dụng:**
- **THANH DANH ĐƯỢC BẢO TOÀN**
- **TÀI SẢN ĐƯỢC GÌN GIỮ**
- Tránh cảnh "tiền mất tật mang" chỉ vì một phút sơ suất

**Lưu ý:**
- Giải Thần KHÔNG tiêu trừ hoàn toàn rủi ro
- Nhưng GIẢM THIỂU TỔN THẤT
- Thức tỉnh đương số tránh được sai lầm nghiêm trọng

**Đặc biệt hữu ích với:**
- Người **LÀM ĂN, BUÔN BÁN**
- Đang trong quá trình **HỢP TÁC, GIAO DỊCH LỚN**`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // GIẢI THẦN TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'giai-than-tai-menh',
    title: 'Giải Thần tại Mệnh - HỢP CÁCH (đi với Phượng Các)',
    sao: ['Giải Thần'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `**Giải Thần thủ Mệnh** — vì luôn đi với **Phượng Các**, là một trong những
vị trí đẹp nhất.

**Tướng mạo:**
- **NHAN SẮC ĐẸP**, da mặt **HỒNG HÀO, THANH TÚ**
- Mặt mũi **THANH THOÁT, NHẸ NHÀNG**
- Dễ làm mọi người **THOẢI MÁI** khi tiếp xúc

- Tướng mạo theo giới được tách thành luận giải riêng.

**Tính cách:**
- **ĐỨC ĐỘ, KHOAN HÒA, THUẦN HẬU**
- **TỪ THIỆN, LÒNG NHÂN, HAY GIÚP ĐỠ** người khác
- **THẲNG THẮN VÀ CHÍNH TRỰC**
- Tâm tính **LƯƠNG THIỆN, HƯỚNG THIỆN**, vị tha

**Như "TẤM BÙA HỘ MỆNH" trời ban:**
- Âm thầm bảo vệ khỏi biến cố bất ngờ
- Thoát hiểm trong gang tấc
- Gặp **NHIỀU GIẢI MAY LẠ LÙNG VÀ BẤT NGỜ**

**Cát tinh hội (Văn Xương, Văn Khúc, Thiên Quan, Thiên Phúc):**
- Bảo hộ và ban phúc càng mạnh
- Thử thách trở thành **BƯỚC ĐỆM** vươn lên tầm cao mới

**Hợp nghề:** công tác xã hội, hoạt động thiện nguyện, ngành cần **TIN
CẬY TUYỆT ĐỐI**.`,
  },

  {
    id: 'giai-than-tai-menh-nu',
    title: 'Giải Thần tại Mệnh - Tướng nữ nhu thuận',
    sao: ['Giải Thần'],
    cung: ['Mệnh'],
    gioiTinh: 'Nữ',
    doUuTien: 70,
    tomTat: `**Giải Thần thủ Mệnh - Nữ mệnh:**
- Sắc diện đẹp **NHẸ NHÀNG, NHU THUẬN**
- Đầy **SỨC HÚT**
- Da mặt hồng hào, thanh tú
- Phẩm hạnh đoan trang, từ thiện`,
  },

  {
    id: 'giai-than-tai-menh-nam',
    title: 'Giải Thần tại Mệnh - Tướng nam đĩnh đạc',
    sao: ['Giải Thần'],
    cung: ['Mệnh'],
    gioiTinh: 'Nam',
    doUuTien: 70,
    tomTat: `**Giải Thần thủ Mệnh - Nam mệnh:**
- **ĐĨNH ĐẠC, VỮNG VÀNG**
- Dễ đặt niềm tin
- Da mặt hồng hào, thanh tú
- Phẩm hạnh đức độ, chính trực`,
  },

  {
    id: 'giai-than-tai-phu-mau',
    title: 'Giải Thần tại Phụ Mẫu',
    sao: ['Giải Thần'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Giải Thần tại Phụ Mẫu** — giúp cha mẹ **TĂNG THỌ TRƯỜNG**, đem lại
**NHIỀU MAY MẮN**.

**Đặc trưng:**
- Cha mẹ **ĐẸP ĐẼ, THANH CAO, ÔN HÒA**
- Có **TÀI CHÍNH, ĐIỀN SẢN**
- Hay **LÀM PHƯỚC THIỆN**
- Sống **ĂN Ở CÓ HẬU**, giàu lòng thương người

**Cát tinh hội (Văn Xương, Văn Khúc, Phượng Các):**
- Cha mẹ là người **THÀNH ĐẠT, CÓ HỌC THỨC, CÓ VỊ TRÍ XÃ HỘI**
- Được nhiều người kính trọng

**Phúc thọ:** Cha mẹ tuổi thọ lâu dài. Nếu có bệnh tật cũng gặp được
**THẦY HAY, THUỐC QUÝ** để hóa giải.`,
  },

  {
    id: 'giai-than-tai-phuc-duc',
    title: 'Giải Thần tại Phúc Đức',
    sao: ['Giải Thần'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `**Giải Thần tại Phúc Đức** — dòng họ nhiều người **KHÁ GIẢ**, nhiều người
**ĐỖ KHOA BẢNG CAO**, có truyền thống **PHẨM HẠNH ĐẠO ĐỨC TỐT**.

**Đặc trưng:**
- Nề nhà đề cao **SỰ HỌC**, rèn rũa trí tuệ song song với đạo đức
- Thường có người **ĐỖ ĐẠT, THÀNH DANH**
- Mồ mả tổ tiên yên ổn, **PHÁT PHƯỚC** ở nơi "đất lành chim đậu"
- Hậu duệ hưởng phúc khí lâu dài

**Lưu ý:** Giải Thần cư Phúc Đức cũng **GIẢI BỚT PHÚC ĐỨC** (đặc tính
"giải" tán) — tuy nhiên dòng họ vẫn duy trì **THỊNH VƯỢNG VÀ MAY MẮN**.`,
  },

  {
    id: 'giai-than-tai-dien-trach',
    title: 'Giải Thần tại Điền Trạch - Nhà cao sang',
    sao: ['Giải Thần'],
    cung: ['Điền Trạch'],
    doUuTien: 78,
    tomTat: `**Giải Thần tại Điền Trạch** — không "ưa" cung Điền (đặc tính giải tán)
nhưng nhờ luôn đi với **Phượng Các**: vẫn có **NHÀ CỬA ĐẸP VÀ SANG TRỌNG**.

**Đặc trưng:**
- **NHÀ CỬA RỘNG RÃI, SANG TRỌNG**
- Thường ở **TRÊN CAO**
- Nhà có nhiều **HOÀNH PHI CÂU ĐỐI**
- Tọa nơi **PHONG THỦY TỐT**

**Hàng xóm:**
- Hàng xóm xung quanh nhiều người **CÓ ĐỊA VỊ, CHỨC SẮC** trong xã hội
- Sống có tình có nghĩa
- Môi trường an cư lý tưởng

**Hội Tam Thai + Bát Tọa:** câu phú **"Có NHÀ LẦU CAO SANG, NHÀ CÓ
AO HỒ"** — biệt thự, sân vườn, cây cảnh.

Như **"NGƯỜI GÁC CỔNG"** âm thầm bảo hộ cho mái nhà và cơ nghiệp gia chủ.`,
  },

  {
    id: 'giai-than-tai-quan-loc',
    title: 'Giải Thần tại Quan Lộc',
    sao: ['Giải Thần'],
    cung: ['Quan Lộc'],
    doUuTien: 76,
    tomTat: `**Giải Thần tại Quan Lộc** — gia tăng **THUẬN LỢI** về cầu công danh, chức
vụ, thi cử, bằng khen.

**Đặc trưng:**
- Gặp **NHIỀU MAY MẮN** trong công việc
- "ĐI ĐÊN ĐÂU CŨNG CÓ XE ĐÓN NGỰA ĐƯA"
- Trong công việc **KHÔNG AI HẠI ĐƯỢC**
- **CHỮ TÍN ĐẶT LÊN ĐẦU**: đồng nghiệp tin tưởng, cấp trên trọng dụng

**Tính cách:**
- **CÔNG TÂM, TÍNH XÂY DỰNG**
- Được nhiều người **KÍNH NỂ, QUÝ MẾN**
- Gặp tai họa có **NGƯỜI CỨU GIÚP**

**Cát tinh hội (Văn Xương - Văn Khúc, Thai Phụ - Phong Cáo):**
- Cơ hội **THI CỬ ĐỖ ĐẠT** hoặc **ĐỀ BẠT** càng cao

**Sát tinh hội (Không Kiếp, Kình Đà, Hóa Kỵ):**
- Đề phòng **XUNG ĐỘT QUYỀN LỢI**, cạnh tranh ngầm
- Nhưng đặc tính giải của Giải Thần làm khó khăn **CHỈ DỪNG Ở MỨC THỬ THÁCH**
- Đủ rèn bản lĩnh, không làm chệch hướng sự nghiệp`,
  },

  {
    id: 'giai-than-tai-no-boc',
    title: 'Giải Thần tại Nô Bộc',
    sao: ['Giải Thần'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Giải Thần tại Nô Bộc** — bạn bè đồng nghiệp nhiều người **QUYỀN QUÝ,
GIÀU CÓ, ĐẮC LỰC**.

**Đặc trưng:**
- Hay được bạn bè **GIÚP ĐỠ**
- Đem đến **MAY MẮN VÀ TIỀN BẠC**
- Báo hiệu duyên số dễ gặp **QUÝ NHÂN PHÙ TRỢ**

**Cát tinh hội (Thiên Phủ, Tử Vi, Thái Âm, Hóa Lộc, Lộc Tồn, Hóa Quyền):**
- Bạn bè **GIÀU SANG QUYỀN THẾ**
- Luôn sẵn sàng **DANG TAY GIÚP ĐỠ** khi cần

**Vai trò bệ phóng:**
- Mạng lưới quan hệ là **BỆ PHÓNG VỮNG CHẮC** cho sự nghiệp
- Trong giai đoạn then chốt, **MỘT LỜI GIỚI THIỆU** có thể thay đổi thế cờ`,
  },

  {
    id: 'giai-than-tai-thien-di',
    title: 'Giải Thần tại Thiên Di - HỢP CÁCH',
    sao: ['Giải Thần'],
    cung: ['Thiên Di'],
    doUuTien: 78,
    tomTat: `**Giải Thần thủ Thiên Di** — **VỊ TRÍ TỐT**, ra ngoài hay gặp **QUÝ NHÂN**,
được người **MẾN CHUỘNG**.

**Đặc trưng:**
- Hay ở trong môi trường nhiều người **QUYỀN QUÝ, CHỨC TƯỚC**
- Vận số thường gặp **MAY**
- Tránh được va chạm nhỏ
- Tình cờ gặp **NGƯỜI DƯNG GIÚP ĐỠ**

**Khả năng bảo hộ:**
- Ngay cả khi xa nhà, Giải Thần vẫn phát huy bảo hộ
- Tránh được **TAI NẠN, BỆNH TẬT, THỊ PHI** ngoài xã hội

**Hợp nghề:**
- **NGOẠI GIAO, THƯƠNG MẠI**
- Bất cứ công việc nào đòi hỏi sự **DI CHUYỂN LIÊN TỤC**
- Xây dựng **UY TÍN, THIỆN CẢM** với người mới quen`,
  },

  {
    id: 'giai-than-tai-tat-ach',
    title: 'Giải Thần tại Tật Ách',
    sao: ['Giải Thần'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `**Giải Thần thủ Tật Ách** — như **LÁ BÙA HỘ THỂ**, có khả năng giải trừ
**BỆNH TẬT, TAI HỌA**.

**Đặc trưng:**
- Bị ốm gặp **THẦY THUỐC GIỎI** cứu chữa
- Dù bệnh nặng hay nhẹ vẫn có **CƠ DUYÊN GẶP THẦY HAY, THUỐC GIỎI**
- Hoặc phương pháp chữa trị **HIỆU QUẢ**

**Lưu ý:** Cần xem trong cung có đi kèm **HUNG TINH** không để biết
mức độ bảo hộ. Đặc biệt phải nhớ cảnh báo **TỬ THẦN** khi cả 2 hạn cùng có
Giải Thần với sao xấu nặng.`,
  },

  {
    id: 'giai-than-tai-tai-bach',
    title: 'Giải Thần tại Tài Bạch',
    sao: ['Giải Thần'],
    cung: ['Tài Bạch'],
    doUuTien: 73,
    tomTat: `**Giải Thần tại Tài Bạch** — không "ưa" cung này (làm tán mất, hao hụt
của cải), nhưng vì luôn đi với **Phượng Các**: **KHÔNG LO NGHÈO KHỔ**.

**Tính cách về tiền bạc:**
- **CÔNG TÂM**, tiền bạc **PHÂN MINH**
- Chỉ kiếm những đồng tiền **SẠCH SẼ, THANH CAO**
- Trong làm ăn **MINH BẠCH, BUÔN NGAY BÁN THẬT**
- Dễ tạo dựng **UY TÍN** với đối tác và khách hàng

**Cảnh báo (Đại Hao, Hóa Kỵ):**
- Cần "**LIỆU CƠM GẮP MẮM**"
- Tránh khoản đầu tư **MẠO HIỂM**
- Không lâm vào cảnh tiền mất tật mang`,
  },

  {
    id: 'giai-than-tai-tu-tuc',
    title: 'Giải Thần tại Tử Tức',
    sao: ['Giải Thần'],
    cung: ['Tử Tức'],
    doUuTien: 76,
    tomTat: `**Giải Thần tại Tử Tức** — **DỄ SINH CON**, sinh con **ĐẸP, DỄ NUÔI**.

**Đặc trưng:**
- Dễ **SINH QUÝ TỬ**
- Con cái **THÔNG MINH, TUẤN KIỆT**
- Hay được gặp **MAY MẮN**
- Con cái sau này **THÀNH DANH, THÀNH ĐẠT**

**Hội Phượng Các:**
- Con cái ắt vươn tới **HỌC VỊ CAO**
- Hoặc xây dựng **SỰ NGHIỆP VỮNG VÀNG**
- Trở thành **NIỀM TỰ HÀO** cho cha mẹ

**Sát tinh hội (Địa Kiếp, Không Kiếp):**
- Cha mẹ cần **THEO SÁT** quá trình trưởng thành của con
- Kịp thời định hướng tránh môi trường xấu`,
  },

  {
    id: 'giai-than-tai-phu-the',
    title: 'Giải Thần tại Phu Thê - Trăm năm bạc đầu',
    sao: ['Giải Thần'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `**Giải Thần (+ Phượng Các) tại Phu Thê** — bộ sao **SE DUYÊN** cho hôn nhân
**"TRĂM NĂM BẠC ĐẦU"**.

**Đặc trưng:**
- Vợ chồng **ĐẸP ĐÔI, TƯƠNG ĐẮC**
- **CƯỚI XIN DỄ DÀNG**
- Người hôn phối **QUYỀN QUÝ, THANH CAO**, có **ĐIỀU KIỆN KINH TẾ TỐT**
- Xuất thân từ gia đình **NỀ NẾP, HỌC THỨC VỮNG VÀNG**
- Cư xử **HÒA NHÃ**, biết trân trọng nghĩa vợ chồng

**Cát tinh hội (Ân Quang, Thiên Quý):**
- Hôn nhân **ÊM ẤM**
- **THUẬN BUỒM XUÔI GIÓ** về tài chính, vị thế và mối quan hệ xã hội

**Khả năng hóa giải:**
- Nếu gặp sao xấu, mâu thuẫn vẫn **CHÓNG NGUÔI**
- Đôi bên kịp **HÀN GẮN** trước khi rạn nứt`,
  },

  {
    id: 'giai-than-tai-huynh-de',
    title: 'Giải Thần tại Huynh Đệ',
    sao: ['Giải Thần'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Giải Thần tại Huynh Đệ** — anh chị em nhiều người **QUYỀN QUÝ, TÀI NĂNG,
GIỎI GIANG, THÀNH ĐẠT**.

**Đặc trưng:**
- Mối quan hệ "**TRÊN THUẬN DƯỚI HÒA**"
- Anh chị em sự nghiệp **SỚM THÀNH ĐẠT**, làm điểm tựa cho cả nhà

**Cát tinh hội (Tả Hữu, Long Trì, Phượng Các):**
- Tình cảm càng **KHĂNG KHÍT**
- Không chỉ gắn bó **HUYẾT THỐNG**
- Còn đồng hành trong **GÂY DỰNG CƠ NGHIỆP**

"**MỘT CÂY LÀM CHẲNG NÊN NON, BA CÂY CHỤM LẠI NÊN HÒN NÚI CAO**" — sức
mạnh tình thân giúp gia đình **VỮNG VÀNG TRƯỚC SÓNG GIÓ**.`,
  },
];
