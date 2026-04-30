import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THAI PHỤ - Kim, Quý Tinh + Văn Tinh.
 *
 * CHỨA PHẦN CHUNG CỦA CẶP THAI PHỤ - PHONG CÁO (tag ['Thai Phụ', 'Phong Cáo']).
 *
 * QUY LUẬT VỊ TRÍ:
 *   - Thai Phụ + Phong Cáo LUÔN nằm trong TAM HỢP của nhau
 *   - Kẹp Văn Khúc ở giữa, mỗi sao cách 1 cung
 *   - Cùng vị trí ĐỒNG ÂM, ĐỒNG DƯƠNG
 *   - Văn Khúc KHÔNG bao giờ có Thai Phụ - Phong Cáo hội chiếu hoặc đồng cung
 *   - Chỉ Văn Xương được hưởng vinh dự này (khi không có Văn Khúc trong tam hợp)
 *   - Lý do (cụ Thiên Lương): Văn Xương được người sáng lập tử vi ƯU TIÊN hơn,
 *     ở vị thế cao hơn Văn Khúc → khi không có Khúc phò tá thì Thai Phụ - Phong
 *     Cáo phò trợ Xương thay
 *
 * BẢN CHẤT CẶP:
 *   - Phụ tinh BỔ TRỢ về CÔNG DANH, HỌC HÀNH
 *   - Chủ về BẰNG CẤP, KHEN THƯỞNG, HUÂN HUY CHƯƠNG
 *   - Mang ý nghĩa THÀNH QUẢ, KẾT QUẢ của quá trình rèn luyện phấn đấu
 *
 * KHÁC NHAU GIỮA HAI SAO:
 *   - Thai Phụ (Kim): GIẤY KHEN, BẰNG SẮC ĐƠN THUẦN
 *     • Không cao về quyền lực hay tài chính
 *     • Mang giá trị TINH THẦN — điềm đạm, nhẹ nhàng, cao thượng, khiêm tốn
 *   - Phong Cáo (Thổ): KHEN THƯỞNG + THĂNG CHỨC + QUYỀN LỰC
 *     • "PHONG" = phong danh, khen thưởng, thăng chức
 *     • "CÁO" = cáo bố, tuyên bố toàn thiên hạ
 *     • Giống Hóa Quyền nhẹ — uy lực bề ngoài, không mạnh bằng Quyền đắc địa
 *
 * Đặc tính/khác biệt CHỈ thể hiện rõ khi đóng tại MỆNH hoặc khi VÀO VẬN HẠN.
 * Còn lại chỉ mang ý nghĩa CHUNG: bằng sắc, khen thưởng, huy chương.
 */
export const luanGiai_ThaiPhu: DoanLuanGiai[] = [
  // ═══════════════════════════════════════════════════════════════════════
  // PHẦN CHUNG CỦA CẶP THAI PHỤ - PHONG CÁO
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thai-phu-phong-cao-tinh-chat-chung',
    title: 'Thai Phụ - Phong Cáo - Cặp Bằng Sắc Quý Hiển',
    sao: ['Thai Phụ', 'Phong Cáo'],
    doUuTien: 35,
    tomTat: `**Thai Phụ - Phong Cáo** — cặp **QUÝ TINH + VĂN TINH** chuyên về **BẰNG SẮC,
ẤN TÍN, QUÝ HIỂN**.

**Thai Phụ:** Kim. **Phong Cáo:** Thổ.

⚡ **Đặc tính chung:**
- **BẰNG SẮC, ẤN TÍN, QUÝ HIỂN**
- Bổ trợ về **CÔNG DANH, HỌC HÀNH**
- Chủ về **BẰNG CẤP, KHEN THƯỞNG, HUÂN HUY CHƯƠNG**
- Mang ý nghĩa **THÀNH QUẢ** của quá trình **RÈN LUYỆN, PHẤN ĐẤU**

⚡ **Quan hệ với Văn Tinh:**
- Hai sao là **PHỤ TINH BỔ TRỢ** Văn Xương
- Khi không có Văn Khúc trong tam hợp → Thai Phụ - Phong Cáo **PHÒ TRỢ THAY**
- Văn Khúc **KHÔNG BAO GIỜ** có Thai Phụ - Phong Cáo hội chiếu / đồng cung

⚡ **Phân biệt:**
- **THAI PHỤ** = giấy khen, bằng cấp **TINH THẦN** (điềm đạm, khiêm tốn)
- **PHONG CÁO** = thăng chức, **QUYỀN LỰC** (kiêu hãnh, phô trương) — giống
  Hóa Quyền nhẹ`,
  },

  {
    id: 'thai-phu-phong-cao-quy-luat-vi-tri',
    title: 'Quy luật vị trí Thai Phụ - Phong Cáo (luôn tam hợp)',
    sao: ['Thai Phụ', 'Phong Cáo'],
    doUuTien: 32,
    tomTat: `**Quy luật an sao Thai Phụ - Phong Cáo:**

⚡ **Thai Phụ + Phong Cáo LUÔN nằm TRONG TAM HỢP** của nhau:
- Kẹp **VĂN KHÚC** ở giữa, mỗi sao **CÁCH 1 CUNG**
- Cùng vị trí **ĐỒNG ÂM, ĐỒNG DƯƠNG**

⚡ **Lý do (cụ Thiên Lương):**
- **VĂN XƯƠNG** được người sáng lập tử vi **ƯU TIÊN HƠN**
- Ở **VỊ THẾ CAO HƠN** Văn Khúc
- Khi không có **VĂN KHÚC PHÒ TÁ** trong tam hợp → Thai Phụ - Phong Cáo
  **PHÒ TRỢ THAY** (luôn nằm trong tam hợp với Văn Xương)

⚡ **Hệ quả:**
- Văn Khúc **KHÔNG BAO GIỜ** có Thai Phụ - Phong Cáo hội chiếu hoặc đồng
  cung
- Chỉ **VĂN XƯƠNG** được hưởng vinh dự này`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP CHUNG (CẶP THAI PHỤ - PHONG CÁO)
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thai-phu-phong-cao-quoc-an-tuong-quy-hien',
    title: 'Thai Phụ + Phong Cáo + Quốc Ấn - Quý hiển trọng dụng',
    sao: ['Thai Phụ', 'Phong Cáo'],
    ketHop: ['Quốc Ấn'],
    doUuTien: 70,
    tomTat: `**Thai Phụ + Phong Cáo + Quốc Ấn** — kết quả **RẤT ĐẸP**.

⚡ **Tại Mệnh / Quan Lộc:**
- **NHIỀU QUÝ HIỂN, ĐƯỢC TRỌNG DỤNG**
- Là người **MANG ẤN**
- Có **QUYỀN CAO CHỨC TRỌNG VÀ PHÚ QUÝ**

⚡ **Tại cung Điền:**
- Có **NHIỀU ĐIỀN SẢN**
- Được ban cấp ruộng đất, nhà cao cửa rộng

⚡ **Bộ Tứ Vinh** (Thai Phụ + Phong Cáo + Quang Quý + Quốc Ấn):
- Sớm có **CÔNG DANH**
- Trai **HIỂN ĐẠT**
- Nữ **LẤY CHỒNG LÀM LỚN**`,
  },

  {
    id: 'thai-phu-phong-cao-an-khoi-xuong-thi-dau-bang',
    title: 'Thai Phụ + Phong Cáo + Quốc Ấn + Khôi Xương - Thi đỗ đầu bảng',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Mệnh'],
    ketHop: ['Quốc Ấn', 'Thiên Khôi', 'Văn Xương'],
    doUuTien: 75,
    tomTat: `**Thai Phụ - Phong Cáo ở Mệnh + Quốc Ấn + Thiên Khôi + Văn Xương hội họp**
— **THI CỬ DỄ ĐẦU BẢNG**.

⚡ **Đặc trưng:**
- Thi cử dễ **ĐỖ ĐẦU BẢNG**
- **KHOA BẢNG HIỂN ĐẠT**
- Văn võ song toàn
- Là cách quý nhất cho người đi thi cử, cầu danh`,
  },

  {
    id: 'thai-phu-phong-cao-xuong-khoa-quyen-vinh-hien',
    title: 'Thai Phụ + Phong Cáo + Văn Xương + Hóa Khoa + Hóa Quyền - Vinh hiển tột đỉnh',
    sao: ['Thai Phụ', 'Phong Cáo'],
    ketHop: ['Văn Xương', 'Hóa Khoa', 'Hóa Quyền'],
    doUuTien: 70,
    tomTat: `**Thai Phụ + Phong Cáo + Văn Xương + Hóa Khoa + Hóa Quyền** — **VINH HIỂN
TỘT ĐỈNH**.

⚡ **Đặc trưng:**
- Đỗ đạt cao nhất
- Sự nghiệp **VINH HIỂN TỘT ĐỈNH**
- Quyền cao chức trọng
- Học vấn thâm sâu
- Cộng hưởng cát tinh khoa bảng + quyền uy + bằng sắc`,
  },

  {
    id: 'thai-phu-phong-cao-nhat-nguyet-quy-cach',
    title: 'Thai Phụ + Phong Cáo + Nhật Nguyệt - Quý cách',
    sao: ['Thai Phụ', 'Phong Cáo'],
    ketHop: ['Thái Dương', 'Thái Âm'],
    doUuTien: 65,
    tomTat: `**Thai Phụ + Phong Cáo + Thái Dương + Thái Âm** — **QUÝ CÁCH**.

⚡ **Đặc trưng:**
- Nhật Nguyệt sáng + Thai Phụ Phong Cáo = **QUÝ CÁCH**
- Danh tiếng vang xa
- Bằng cấp + ánh sáng tỏa rộng
- Hợp người làm văn hóa, giáo dục, truyền thông cao cấp`,
  },

  {
    id: 'thai-phu-phong-cao-loc-ton-an-quang-quy',
    title: 'Thai Phụ + Phong Cáo + Lộc Tồn + Quốc Ấn + Quang Quý - Tốt đẹp',
    sao: ['Thai Phụ', 'Phong Cáo'],
    ketHop: ['Lộc Tồn', 'Quốc Ấn', 'Ân Quang'],
    doUuTien: 60,
    tomTat: `**Thai Phụ + Phong Cáo + Lộc Tồn + Quốc Ấn + Quang Quý** — càng **TỐT ĐẸP**.

⚡ **Đặc trưng:**
- Tài lộc + quyền uy + bằng sắc + phúc tinh hội tụ
- Đi với **Âm Dương** hay **Quan Phúc** cũng tốt
- Cách cục **CỰC ĐẸP** cho mệnh quý`,
  },

  {
    id: 'thai-phu-phong-cao-mo-thai-toa-tu-mo-mo-ma',
    title: 'Thai Phụ + Phong Cáo + Mộ + Thai + Bát Tọa tại Tứ Mộ - Mồ mả tốt đẹp',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Phúc Đức'],
    chi: ['Thìn', 'Tuất', 'Sửu', 'Mùi'],
    ketHop: ['Mộ', 'Thai', 'Bát Tọa'],
    doUuTien: 65,
    tomTat: `**Thai Phụ + Phong Cáo + Mộ + Thai + Bát Tọa tại Tứ Mộ Phúc Đức** — chủ
**MỒ MẢ TỐT ĐẸP**, đắc lợi cho con cháu về sau.

⚡ **Đặc trưng:**
- Mồ mả tổ tiên **TỐT ĐẸP**
- Phần âm yên ổn, phần dương đắc lợi
- Con cháu **HƯỞNG PHÚC TRẠCH LÂU DÀI**
- Dòng tộc nhiều người **CÔNG THÀNH DANH TOẠI**
- Duy trì nếp sống **HIẾU HỌC**`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP XẤU
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thai-phu-phong-cao-hung-tinh-cong-danh-tran-tro',
    title: 'Thai Phụ + Phong Cáo + Hỏa Linh + Hóa Kỵ - Trắc trở công danh',
    sao: ['Thai Phụ', 'Phong Cáo'],
    ketHop: ['Hỏa Tinh', 'Linh Tinh', 'Hóa Kỵ'],
    doUuTien: 55,
    tomTat: `⚠️ **Thai Phụ + Phong Cáo + Hỏa Tinh / Linh Tinh / Hóa Kỵ** — **TRẮC TRỞ
CÔNG DANH SỰ NGHIỆP**.

⚠️ **Đặc trưng:**
- Học hành thi cử **LẬN ĐẬN**
- Công danh "**LÊN THÁC XUỐNG GHỀNH**"
- Dẫu **TÀI GIỎI** vẫn khó tránh **BƯỚC TRẮC TRỞ**
- Gặp sát tinh dễ bị **MANG TIẾNG OAN, GÁNH TAI TIẾNG**
- Danh thơm chưa kịp hưởng đã gặp **ĐIỀU TIẾNG BỦA VÂY**
- **RỦI RO RÌNH RẬP** trong cuộc sống

⚡ **Hóa giải:**
- "**CÂY NGAY KHÔNG SỢ CHẾT ĐỨNG**" — bản chất Thai Phụ vốn THIỆN LÀNH
- Không cần hóa giải cầu kỳ
- Ăn ở **ĐỨC ĐỘ, BAO DUNG, KHIÊM TỐN**
- Tích lũy phúc đức → biến **HUNG THÀNH CÁT**`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // THAI PHỤ - PHONG CÁO TẠI 11 CUNG (CHUNG CẶP)
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thai-phu-phong-cao-tai-menh',
    title: 'Thai Phụ - Phong Cáo tại Mệnh',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `**Thai Phụ - Phong Cáo thủ Mệnh** — **DANH CHỨC, HỌC HÀNH TỐT**.

⚡ **Đặc trưng:**
- Là người có **DANH CHỨC**
- Học hành **TỐT**, có sự **ĐỖ ĐẠT CAO**
- **THĂNG TIẾN** về công danh
- Có **BẰNG CẤP, HUY CHƯƠNG, BẰNG KHEN**
- Lợi ích cho việc **THI CỬ, CẦU DANH**

⚡ **Tính nết** (Thai Phụ thủ Mệnh):
- **BIẾT ĐIỀU PHẢI PHÉP**
- Nói năng **MỀM MỎNG**
- Dễ được lòng **NGƯỜI TRÊN, KẺ DƯỚI**

⚡ **Phúc thọ:**
- Thích **GIÚP ĐỜI GIÚP NGƯỜI**
- Bản tính **NHÂN HẬU**
- Đi đâu cũng được **QUÝ MẾN, KÍNH TRỌNG**
- Hưởng **TUỔI THỌ DÀI LÂU**
- Sống **AN YÊN** trong sự nể trọng của người đời`,
  },

  {
    id: 'thai-phu-tai-menh-rieng',
    title: 'Thai Phụ tại Mệnh - Khoan dung hòa nhã (đặc tính RIÊNG)',
    sao: ['Thai Phụ'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `**Thai Phụ thủ Mệnh** — đặc tính **RIÊNG** của Thai Phụ (khác Phong Cáo).

⚡ **Tính nết:**
- Là người **KHOAN DUNG, HÒA NHÃ** với mọi người
- Người **NHIỀU BẰNG CẤP, BẰNG KHEN**
- Người hay có những **HÀNH ĐỘNG Ý NGHĨA** nên được khen thưởng, trao bằng

⚡ **Quy luật cặp đôi:**
- **THAI PHỤ ở Mệnh → PHONG CÁO ở Tài**
- Người hay được **KHEN THƯỞNG, TRAO TẶNG TIỀN**
- Có thể **DÙNG BẰNG CẤP, HỌC VỊ ĐỂ KIẾM TIỀN**

⚡ **So với Phong Cáo:**
- Thai Phụ chỉ về **GIẤY KHEN, BẰNG SẮC ĐƠN THUẦN**
- Mang giá trị **TINH THẦN** hơn vật chất
- Toát lên **ĐIỀM ĐẠM, NHẸ NHÀNG, CAO THƯỢNG, KHIÊM TỐN**`,
  },

  {
    id: 'thai-phu-phong-cao-tai-phu-mau',
    title: 'Thai Phụ - Phong Cáo tại Phụ Mẫu',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Thai Phụ - Phong Cáo tại Phụ Mẫu** — cha mẹ **CÓ CHỨC VỊ, HỌC THỨC, BẰNG
CẤP CAO**.

⚡ **Đặc trưng:**
- Cha mẹ có **HỌC THỨC UYÊN THÂM**
- Nhiều **BẰNG CẤP, GIỮ CHỨC VỊ** trong xã hội
- Cha mẹ hay được **KHEN THƯỞNG, VINH DANH, THĂNG CẤP**
- Người có **NHIỀU BẰNG SẮC, GIẤY CÔNG NHẬN**

⚡ **Truyền thống dòng họ:**
- Con cháu sinh ra **THỪA HƯỞNG TRUYỀN THỐNG HIẾU HỌC**
- **NGHIÊM CẨN**, lấy **CON CHỮ LÀM ĐẦU**
- Con cháu sau này **NHIỀU BẰNG CẤP, HỌC VỊ CAO**
- Học hành chăm chỉ, thi cử đỗ đạt
- Nối nghiệp làm **RẠNG DANH DÒNG HỌ**`,
  },

  {
    id: 'thai-phu-phong-cao-tai-phuc-duc',
    title: 'Thai Phụ - Phong Cáo tại Phúc Đức',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `**Thai Phụ - Phong Cáo tại Phúc Đức** — ông bà tổ tiên **DANH CHỨC ĐỊA VỊ,
ĐẠI THỌ, VINH HIỂN**.

⚡ **Đặc trưng:**
- Ông bà tổ tiên có **DANH CHỨC ĐỊA VỊ, ĐẠI THỌ, VINH HIỂN**
- Sinh ra trong dòng họ nhiều người **THÀNH ĐẠT, THÀNH DANH**
- Có **TRUYỀN THỐNG HỌC TỐT**
- Dòng tộc nhiều người **DANH GIÁ**
- Ông bà tổ tiên khi xưa mất dễ được **PHONG DANH**
- Để lại **TƯỚC VỊ TRUYỀN LẠI** tới con cháu đời sau

⚡ **Cát cách đặc biệt:** + Mộ + Thai + Bát Tọa tại Tứ Mộ → mồ mả tốt đẹp,
con cháu hưởng phúc trạch lâu dài.`,
  },

  {
    id: 'thai-phu-phong-cao-tai-dien-trach',
    title: 'Thai Phụ - Phong Cáo tại Điền Trạch',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Thai Phụ - Phong Cáo tại Điền Trạch** — có **ĐIỀN SẢN, BAN CẤP, TIỀN NHÂN
ĐỂ LẠI**.

⚡ **Đặc trưng:**
- Có **ĐIỀN SẢN**
- Người hay được **BAN CẤP, TẶNG ĐIỀN SẢN**
- Hay có **CỦA CẢI CỦA TIỀN NHÂN ĐỂ LẠI**
- Nhà treo nhiều **GIẤY KHEN, BẰNG KHEN, GIẢI THƯỞNG**
- "**NGỒI MÁT ĂN BÁT VÀNG**"

⚡ **Bộ kết hợp đặc biệt:**
- **+ Quốc Ấn:** ban cấp điền sản ăn lộc, khẩn hoang. Nhà cửa, đất đai
  **ĐẤU THẦU ĐƯỢC**
- **+ Quốc Ấn + Tử Vi + Thiên Phủ:** giàu có về điền sản, **NHÀ CAO CỬA
  RỘNG**. Người hay **BUÔN ĐẤT BUÔN CÁT** được
- **+ Phượng Các:** nhà cao cửa rộng, **ĐẸP ĐẼ KHANG TRANG**, nhiều bằng cấp

⚡ **+ Long Trì + Phượng Các:**
- Cuộc sống **AN CƯ LẠC NGHIỆP** từ sớm
- Khu xóm xung quanh hầu hết là **NGƯỜI TRÍ THỨC, GIÀU CÓ**, an ninh yên ổn`,
  },

  {
    id: 'thai-phu-phong-cao-tai-quan-loc',
    title: 'Thai Phụ - Phong Cáo tại Quan Lộc',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Quan Lộc'],
    doUuTien: 80,
    tomTat: `**Thai Phụ - Phong Cáo tại Quan Lộc** — **QUÝ HIỂN, ĐƯỢC TRỌNG DỤNG**.

⚡ **Đặc trưng:**
- Người **RẤT QUÝ HIỂN, ĐƯỢC TRỌNG DỤNG**
- Có **HUY CHƯƠNG, TƯỞNG LỤC**
- Công danh **HIỂN ĐẠT**, gặp nhiều may mắn
- Người **HỌC LÊN CAO, NHIỀU BẰNG CẤP** sử dụng được
- Hỗ trợ **HIỆU QUẢ** công việc
- Như "**CÁ GẶP NƯỚC**"
- Ra đời được **CẤP TRÊN TRỌNG DỤNG**, gặt hái nhiều **THÀNH TÍCH**

⚡ **Phân biệt 2 sao tại Quan:**
- **Thai Phụ:** chủ về **HUÂN HUY CHƯƠNG, KHEN THƯỞNG, BẰNG KHEN**
- **Phong Cáo:** chủ về **THĂNG CẤP, THĂNG QUAN TIẾN CHỨC** + thích quyền
  uy ra oai sử dụng chức vụ

⚡ **+ Tướng + Quốc Ấn:**
- **RẤT QUÝ HIỂN, ĐƯỢC TRỌNG DỤNG**
- Có **HUY CHƯƠNG, TƯỞNG LỤC**

⚠️ **+ Hóa Kỵ:**
- Đường công danh **TRẮC TRỞ**
- Phải qua **NHIỀU LẦN THI TRƯỢT** mới đỗ đạt
- Hoặc danh hiệu **NHIỀU LẦN CỐ GẮNG** mới có`,
  },

  {
    id: 'thai-phu-phong-cao-tai-no-boc',
    title: 'Thai Phụ - Phong Cáo tại Nô Bộc',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Thai Phụ - Phong Cáo tại Nô Bộc** — bạn bè **HỌC THỨC, QUÝ HIỂN**.

⚡ **Đặc trưng:**
- Có **NHIỀU BẠN BÈ GIÚP ĐỠ**
- Bạn bè là người **HỌC THỨC, NHIỀU BẰNG CẤP, QUÝ HIỂN**
- Nhiều người **CÓ CHỨC TƯỚC** trong xã hội
- Vây quanh bởi bạn bè **HIỀN LƯƠNG, HỌC CAO HIỂU RỘNG**, sống có nghĩa tình

⚡ **Cung Mệnh có Thiên Lương / Thiên Tướng:**
- Dễ làm **THẦY GIÁO MÁT TAY**
- Có nhiều **HỌC TRÒ HIỂN ĐẠT, XUẤT SẮC**

⚡ **Phong Cáo + Thiên Quan / Thiên Phúc:**
- Có **QUÝ NHÂN GIÚP ĐỠ LÀM NÊN**

⚠️ **Gặp Sát Hình Kỵ + Linh Tinh + Kình Dương + Địa Kiếp:**
- Bạn bè **CHỐI BỎ TRÁCH NHIỆM**
- Hoặc **TỪ MẶT NHAU** khi có mâu thuẫn`,
  },

  {
    id: 'thai-phu-phong-cao-tai-thien-di',
    title: 'Thai Phụ - Phong Cáo tại Thiên Di',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Thai Phụ - Phong Cáo tại Thiên Di** — ra ngoài gặp **QUÝ NHÂN**.

⚡ **Đặc trưng:**
- Ra ngoài gặp **QUÝ NHÂN GIÚP ĐỠ**
- Ra ngoài **LỢI ÍCH HƠN Ở NHÀ**
- Đi xa thường gặp **MAY MẮN, THUẬN LỢI** trong **CÔNG DANH, THI CỬ**
- Được trao tặng nhiều **BẰNG CẤP, KHEN THƯỞNG**
- Thuận lợi trong **ĐI XA, ĐI HỌC XA, DU HỌC**

⚡ **+ Khôi Việt + Hoa Cái:**
- Được **NGƯỜI ĐỜI NÂNG ĐỠ, DẪN DẮT**
- "**THA HƯƠNG NƠI ĐẤT KHÁCH**" càng dễ phát triển

⚡ **Du học, lập nghiệp xứ người:**
- Cách cục "**THIÊN THỜI - ĐỊA LỢI - NHÂN HÒA**"
- Việc lớn **DỄ THÀNH**
- Việc nhỏ **HANH THÔNG**
- Mệnh có **QUÝ TINH SOI LỐI**`,
  },

  {
    id: 'thai-phu-phong-cao-tai-tat-ach',
    title: 'Thai Phụ - Phong Cáo tại Tật Ách',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `**Thai Phụ - Phong Cáo tại Tật Ách** — bệnh **TÌ VỊ, TIÊU HÓA**.

⚠️ **Đặc trưng:**
- Dễ có bệnh về **TÌ VỊ** hay **BỘ PHẬN TIÊU HÓA**
- Cơ địa **MẪN CẢM**

⚡ **Ngày chết:**
- Dễ có **HUÂN HUY CHƯƠNG, KHEN THƯỞNG, TRUY TẶNG**

⚡ **Hợp Tả Hữu / Thiên Di / Quan Lộc / Tử Tức + Hóa Khoa:**
- Lúc mất dễ nhận **HUÂN HUY CHƯƠNG, KHEN THƯỞNG, TRUY TẶNG**
- Ra đi vinh quang được người đời tôn vinh`,
  },

  {
    id: 'thai-phu-phong-cao-tai-tai-bach',
    title: 'Thai Phụ - Phong Cáo tại Tài Bạch',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Thai Phụ - Phong Cáo tại Tài Bạch** — kiếm tiền bằng **HỌC VẤN**.

⚡ **Đặc trưng:**
- Bản thân dễ có **BẰNG CẤP, HỌC VỊ** ngành nghề liên quan **TÀI CHÍNH**
- Có thể sử dụng **BẰNG CẤP, NGÀNH NGHỀ** mình học để kiếm tiền
- Người hay được **KHEN THƯỞNG, ĐOẠT GIẢI, TRAO TẶNG TIỀN**
- Tiền tài đến từ **LAO ĐỘNG TRÍ ÓC** nhiều hơn sức vóc chân tay

⚡ **Bộ tam hợp Mệnh - Tài Bạch - Quan Lộc:**
- Khả năng **LÃNH ĐẠO**
- Vươn tới nhiều **THÀNH CÔNG RỰC RỠ**
- Nhờ **HỌC THỨC UYÊN THÂM** và **BẰNG CẤP CHUYÊN NGHIỆP**
- Trí tuệ **SẮC SẢO**
- Được giao **TRỌNG TRÁCH LỚN**
- Năng lực **QUẢN LÝ TÀI CHÍNH** hiệu quả`,
  },

  {
    id: 'thai-phu-phong-cao-tai-tu-tuc',
    title: 'Thai Phụ - Phong Cáo tại Tử Tức',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Tử Tức'],
    doUuTien: 78,
    tomTat: `**Thai Phụ - Phong Cáo tại Tử Tức** — con cái **HIỂN ĐẠT, QUÝ TỬ**.

⚡ **Đặc trưng:**
- Con cái **HIỂN ĐẠT**, có **CON QUÝ TỬ**
- Con cái nhiều **BẰNG CẤP, HỌC VỊ**, có thể **HỌC LÊN CAO**
- Đạt **NHIỀU THÀNH TÍCH, CHỨC DANH** trong cuộc đời
- "**CON NHÀ NÒI**", có **TƯ CHẤT THÔNG MINH, SÁNG DẠ** từ bé
- **BẰNG KHEN, TRAO THƯỞNG TREO KÍN NHÀ**
- Càng siêng học, càng dễ có thành tích

⚡ **+ Quang Quý / Quốc Ấn / Thiên Tướng:**
- Con cái **HIỂN ĐẠT** đỉnh cao

⚠️ **+ Hung tinh** (Hỏa Tinh, Linh Tinh):
- Con thường **ÍT GẮN BÓ**
- **XA CÁCH** với cha mẹ
- Cha mẹ **ÍT ĐƯỢC CON CHĂM SÓC**
- Quan niệm xưa gọi là cách "**BẤT HIẾU**"
- Hiện đại: mối quan hệ **THIẾU HÒA THUẬN**`,
  },

  {
    id: 'thai-phu-phong-cao-tai-phu-the',
    title: 'Thai Phụ - Phong Cáo tại Phu Thê',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `**Thai Phụ - Phong Cáo tại Phu Thê** — vợ chồng **HỌC THỨC, NHIỀU BẰNG CẤP**.

⚡ **Đặc trưng:**
- Vợ chồng là người có **HỌC THỨC**, dễ **HỌC CAO**
- Người có nhiều **BẰNG CẤP, CHỨC TƯỚC**
- Người hôn phối **THUẬN LỢI** trong con đường **CÔNG DANH, KHOA BẢNG**
- **NHIỀU THÀNH TỰU** trong cuộc đời
- Hôn nhân **XỨNG LỨA VỪA ĐÔI**
- Vợ chồng **THUẬN HÒA, GIỮ TRỌN ĐẠO NGHĨA**

⚡ **+ Khôi Việt / Tả Hữu:**
- Người hôn phối có **HỌC VỊ CAO, TRÍ THỨC UYÊN BÁC**
- Hỗ trợ đắc lực cho **ĐƯỜNG CÔNG DANH** của đương số

⚠️ **+ Đào Hoa + nhiều sát tinh:**
- Một trong hai dễ có suy nghĩ **NGOÀI LUỒNG**
- "**MỘT LÒNG HAI DẠ**"
- Thiếu sự **THỦY CHUNG**`,
  },

  {
    id: 'thai-phu-phong-cao-tai-huynh-de',
    title: 'Thai Phụ - Phong Cáo tại Huynh Đệ',
    sao: ['Thai Phụ', 'Phong Cáo'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Thai Phụ - Phong Cáo tại Huynh Đệ** — anh chị em **HỌC VẤN, BẰNG CẤP**.

⚡ **Đặc trưng:**
- Anh chị em đều là người có **HỌC VẤN, HỌC CAO**
- Nhiều **BẰNG CẤP, NHIỀU THÀNH TỰU**
- "**ANH EM NHƯ THỂ TAY CHÂN**"
- Học vị **ĐÁNG NỂ**
- Đảm nhiệm các **VỊ TRÍ LÃNH ĐẠO, QUẢN LÝ CẤP CAO**

⚡ **+ Tả Phù / Hữu Bật / Khôi Việt:**
- Sự **GIÚP ĐỠ TỪ HÌNH ẢNH, BẰNG CẤP, ĐỊA VỊ** của anh chị
- Trong lĩnh vực **CHUYÊN MÔN**

⚠️ **Không có các sao trên:**
- Dù có nhận được sự trợ giúp nhưng **KHÔNG ĐÁNG KỂ**
- Dễ vì **VỊ TRÍ KHÁC BIỆT** mà mối quan hệ có nhiều **KHOẢNG CÁCH**`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // VÀO HẠN
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thai-phu-phong-cao-vao-han',
    title: 'Thai Phụ - Phong Cáo vào hạn',
    sao: ['Thai Phụ', 'Phong Cáo'],
    doUuTien: 50,
    tomTat: `**Thai Phụ - Phong Cáo vào hạn** — **ĐẮC TÀI, ĐẮC DANH**.

⚡ **Đặc trưng:**
- **ĐẮC TÀI, ĐẮC DANH**
- Được **TIẾNG KHEN, CÓ HUY CHƯƠNG**
- **THUẬN LỢI** trong công danh, thi cử
- "**GẶP THỜI ĐỔI VẬN**", được **ĐỀ DANH BẢNG VÀNG**
- Thuận lợi trong **THI CỬ, ĐỖ ĐẠT**
- Hoặc **THĂNG TIẾN MẠNH MẼ** trong công danh sự nghiệp

⚡ **Đại vận / tiểu vận gặp:**
- Báo hiệu **GIAI ĐOẠN HOÀNG KIM**
- Cần **NẮM BẮT THỜI CƠ**
- Trau dồi **KIẾN THỨC**, rèn luyện **KỸ NĂNG**
- Mở rộng **MỐI QUAN HỆ XÃ HỘI**

⚡ **+ Long Trì:**
- Sẽ được **THĂNG QUAN, TIẾN CHỨC**`,
  },
];
