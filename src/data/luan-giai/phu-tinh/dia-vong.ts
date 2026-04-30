import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO ĐỊA VÕNG - Thổ, Ám Tinh.
 *
 * Vị trí: LUÔN cố định tại cung TUẤT.
 * Cùng cặp với THIÊN LA (cố định Thìn) → bộ THIÊN LA - ĐỊA VÕNG = "LƯỚI TRỜI".
 *
 * Hóa khí: ÁM TINH ("lưới trời lồng lộng, tuy thưa mà khó lọt").
 * Đặc tính: NGHIỆP DUYÊN, NHÂN QUẢ, RÀNG BUỘC, MẮC KẸT.
 * Mang ý nghĩa GỐC ĐẠO ĐỨC + NHÂN QUẢ ĐẠO PHẬT.
 *
 * Phần CHUNG cặp Thiên La - Địa Võng (hạn cạm bẫy + đi với Lộc/Hình/Liêm)
 * viết tại file này.
 */
export const luanGiai_DiaVong: DoanLuanGiai[] = [
  {
    id: 'dia-vong-tinh-chat-chung',
    title: 'Địa Võng - Đặc tính chung',
    sao: ['Địa Võng'],
    doUuTien: 32,
    tomTat: `**Địa Võng** — phụ tinh **ÁM TINH**, chủ về **NGHIỆP DUYÊN, NHÂN QUẢ**.

**Ngũ hành:** **Thổ**.

**Hóa khí:** **Ám Tinh**.

⚡ **Vị trí:** **LUÔN cố định tại cung TUẤT**.

⚡ **Hình tượng:** "**LƯỚI TRỜI lồng lộng, tuy thưa mà khó lọt**".

⚡ **Đặc tính:**
- Mang ý nghĩa **NHÂN QUẢ và NGHIỆP CHƯỚNG** theo **ĐẠO PHẬT**
- Là **CÁI GỐC của ĐẠO ĐỨC**
- Kẻ làm điều **ÁC**, người **CHỊU NGHIỆP QUẢ** → càng cựa quậy càng **MẮC
  VÀO NHIỀU HƠN**

⚡ **Tác động chính:**
- Cảm giác bị **MẮC KẸT**
- Gặp nhiều **RÀO CẢN, KHÓ KHĂN** trong việc đạt mục tiêu
- Dễ bị ảnh hưởng bởi **TÌNH HUỐNG KHÔNG MONG MUỐN**

⚡ **Sự nghiệp:**
- Giảm nghiệp chướng nếu làm các công việc **BẢO VỆ CÁI ĐÚNG, LẼ PHẢI**
- Hợp **KIỂM SÁT, HẢI QUAN, TƯ PHÁP**

⚡ **Tình duyên:**
- Như cái lưới giúp mối quan hệ **DUY TRÌ BỀN LÂU**
- Nhưng lại là **CÁI KHÓ** của người **MUỐN THOÁT RA mà KHÔNG THỂ**

⚡ **Phúc thọ:**
- Khi có bệnh tật cần **NỖ LỰC HÓA GIẢI**
- KHÔNG nên **MÙ QUÁNG MÊ TÍN**
- **GIỮ TÂM LÝ TRÍ** vì càng mưu cầu thoát khỏi → càng **MẮC KẸT**`,
  },

  {
    id: 'dia-vong-co-dinh-tuat',
    title: 'Địa Võng - Cố định cung Tuất',
    sao: ['Địa Võng'],
    chi: ['Tuất'],
    doUuTien: 35,
    tomTat: `**Địa Võng** luôn **CỐ ĐỊNH tại cung Tuất**.

⚡ **Quy luật vị trí:**
- **Tuất = ĐỊA VÕNG** (Lưới Đất)
- **Thìn = THIÊN LA** (Lưới Trời)
- Hai cung **THÌN - TUẤT** xung chiếu nhau, tạo **TRỤC LƯỚI TRỜI**`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CUNG MỆNH
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'dia-vong-menh-thong-minh-muu-luoc',
    title: 'Địa Võng tại Mệnh - Thông minh mưu lược',
    sao: ['Địa Võng'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `**Địa Võng tại Mệnh** — chủ mệnh **THÔNG MINH, LANH LỢI, TÍNH TOÁN GIỎI**.

⚡ **Đặc trưng:**
- **THÔNG MINH, LANH LỢI**
- Có phần **MƯU LƯỢC, KHÉO XOAY CHUYỂN TÌNH THẾ**

⚡ **Trắc trở bất ngờ:**
- Đối mặt với những **TRẮC TRỞ BẤT NGỜ**
- Đang xuôi chèo mát mái → **VƯỚNG RẮC RỐI**
- Đi trái đạo lý, quy luật tự nhiên → bị **CẢN TRỞ**
- Không nhận ra → cho là **ĐEN ĐỦI**, do **ÔNG TRỜI KHÔNG ỦNG HỘ**

⚡ **Triết lý đúng (quan trọng):**
- Khó khăn, ngăn trở chỉ **ĐÁNG LO** khi làm điều **XẤU**, **TRÁI LUÂN
  THƯỜNG ĐẠO LÝ**
- Làm điều **ĐÚNG ĐẮN, THƯỢNG TÔN PHÁP LUẬT, TỐT ĐỜI ĐẸP ĐẠO**:
  - Hưởng **ĐIỀU TỐT**
  - Cuộc sống **CÓ TRẬT TỰ, BÌNH ỔN** để phát triển`,
  },

  {
    id: 'dia-vong-menh-sat-tinh-tham-san-si',
    title: 'Địa Võng + sát tinh tại Mệnh - Tham sân si kiện tụng',
    sao: ['Địa Võng'],
    cung: ['Mệnh'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Đà La', 'Hóa Kỵ', 'Thiên Hình', 'Bạch Hổ', 'Thiên Riêu', 'Phục Binh'],
    doUuTien: 60,
    tomTat: `**Địa Võng + Không Kiếp + Đà Kỵ + Hình Hổ Riêu Phục tại Mệnh** — vướng
**NGHIỆP CHƯỚNG**.

⚡ **Đặc trưng:**
- Có lúc **ĐỘNG TÂM XẤU XA**
- Va vào nghiệp **THAM - SÂN - SI - MẠN - NGHI - TÀ KIẾN**
- Gây **NGHIỆP CHƯỚNG**
- Dễ dính tới **PHÁP LUẬT, KIỆN TỤNG**`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC CUNG KHÁC
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'dia-vong-phu-mau-mac-ket-nghiep',
    title: 'Địa Võng tại Phụ Mẫu - Mắc kẹt nghiệp gia',
    sao: ['Địa Võng'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Địa Võng tại Phụ Mẫu** — mối quan hệ với **TRƯỞNG BỐI** có nhiều điểm
**MẮC KẸT**.

⚡ **Đặc trưng:**
- Rơi vào **VÒNG LẶP KHÓ THOÁT**
- "**ĐỜI CHA ĂN MẶN, ĐỜI CON KHÁT NƯỚC**"

⚡ **Đi cùng Không Kiếp, Hóa Kỵ, Thiên Hình:**
- Cha mẹ làm việc xấu → **CON CÁI CHỊU LIÊN LỤY**
- Cha mẹ vay nợ → **CON CÁI PHẢI TRẢ**
- Đời này không trả được → **ĐỜI CHÁU TIẾP GÁNH NGHIỆP**`,
  },

  {
    id: 'dia-vong-phu-mau-xuong-khuc-khoa-bang',
    title: 'Địa Võng + Văn Xương/Văn Khúc/Hóa Khoa/Phong Cáo/Thai Phụ/Lưu Hà - Tri thức truyền',
    sao: ['Địa Võng'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Hóa Khoa', 'Phong Cáo', 'Thai Phụ', 'Lưu Hà'],
    doUuTien: 68,
    tomTat: `**Địa Võng + bộ Khoa Bảng (Xương Khúc + Hóa Khoa + Phong Cáo + Thai Phụ +
Lưu Hà) tại Phụ Mẫu** — **TRI THỨC LƯU TRUYỀN**.

⚡ **Đặc trưng:**
- **TRI THỨC LƯU TRUYỀN** từ cha mẹ
- Nét đẹp **VĂN HÓA và ĐẠO ĐỨC** trong cách hành xử của bố mẹ ảnh hưởng đến
  con cái
- Đương số **KẾ THỪA NHỮNG ĐIỀU ĐẸP**
- Phát triển tốt hơn trong **THẾ HỆ MÌNH**`,
  },

  {
    id: 'dia-vong-phuc-duc-khong-tach-dong-toc',
    title: 'Địa Võng tại Phúc Đức - Không tách rời dòng họ',
    sao: ['Địa Võng'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `**Địa Võng tại Phúc Đức** — chủ mệnh **KHÔNG THỂ TÁCH RỜI DÒNG HỌ**.

⚡ **Đặc trưng:**
- "**CÂY CÓ GỐC, NƯỚC CÓ NGUỒN**"
- Dù muốn hay không, **PHẢI CHỊU ẢNH HƯỞNG TỔ TIÊN**

⚡ **Mệnh có thêm sao Không tọa thủ:**
- Hình thành suy nghĩ **MUỐN THOÁT LY THẾ TỤC**
- Như một cách **TRẢ NGHIỆP**`,
  },

  {
    id: 'dia-vong-dien-trach-nha-bi-phong-toa',
    title: 'Địa Võng tại Điền Trạch - Nhà bị lưới bủa vây',
    sao: ['Địa Võng'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Địa Võng tại Điền Trạch** — nhà bị **LƯỚI BỦA VÂY**.

⚡ **Đặc trưng:**
- Có thể là nhà cửa **BỊ PHONG TỎA**
- Hoặc nhà ở **VỊ TRÍ RANH GIỚI, BIÊN GIỚI**

⚡ **Cảnh báo tài sản:**
- Nếu cung Tài Bạch hội tụ nhiều **ĐÀ KỴ HÌNH HAO**:
  - Dễ rơi vào **KIẾM TIỀN PHI PHÁP**
  - Đến lúc **TRẢ NGHIỆP** → nhà cửa, đất đai, tài sản **BỊ PHONG TỎA, GIAM CẦM**`,
  },

  {
    id: 'dia-vong-quan-loc-tuan-thu-phap-luat',
    title: 'Địa Võng tại Quan Lộc - Tuân thủ pháp luật',
    sao: ['Địa Võng'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `**Địa Võng tại Quan Lộc** — buộc đương số phải **LÀM ĐÚNG, TUÂN THỦ PHÁP
LUẬT**.

⚡ **Đặc trưng:**
- Chỉ cần **LÀM SAI** là dễ bị **PHẠT**
- Giảm nghiệp chướng nếu làm:
  - **KIỂM SÁT, HẢI QUAN, TƯ PHÁP**
  - Công việc **BẢO VỆ CÁI ĐÚNG, LẼ PHẢI**`,
  },

  {
    id: 'dia-vong-quan-loc-quan-phu-thien-hinh',
    title: 'Địa Võng + Quan Phù/Quan Phủ/Thiên Hình tại Quan Lộc - Liên quan pháp luật',
    sao: ['Địa Võng'],
    cung: ['Quan Lộc'],
    ketHop: ['Quan Phù', 'Quan Phủ', 'Thiên Hình'],
    doUuTien: 70,
    tomTat: `**Địa Võng + Quan Phù + Quan Phủ + Thiên Hình tại Quan Lộc** — công việc
**LIÊN QUAN PHÁP LUẬT**.

⚡ **Đặc trưng:**
- Bộ **XÉT NÉT, KỶ LUẬT, PHÁP LÝ**
- Phải chú ý công việc liên quan **PHÁP LUẬT**
- Phù hợp **TƯ PHÁP, LUẬT SƯ, KIỂM SÁT, AN NINH**`,
  },

  {
    id: 'dia-vong-no-boc-nghiep-xa-hoi',
    title: 'Địa Võng tại Nô Bộc - Nghiệp quan hệ xã hội',
    sao: ['Địa Võng'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Địa Võng tại Nô Bộc** — **NGHIỆP trong QUAN HỆ XÃ HỘI**.

⚡ **Đặc trưng (làm chủ + có cấp dưới):**
- Gắn kết với **NHỮNG NGƯỜI LƯỚT QUA ĐỜI MÌNH**
- Phản ánh **CẤP DƯỚI làm cho mình LÂU DÀI**

⚡ **Hội nhiều SÁT KỴ HÌNH:**
- Vướng **TRẮC TRỞ, KHÓ KHĂN** trong quan hệ
- **LỢI ÍT HẠI NHIỀU**
- Cần **TỈNH TÁO** để không liên tiếp mắc sai lầm`,
  },

  {
    id: 'dia-vong-thien-di-troi-dat-soi-xet',
    title: 'Địa Võng tại Thiên Di - Trời đất soi xét',
    sao: ['Địa Võng'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Địa Võng tại Thiên Di** — đi đâu, làm gì cũng có **TRỜI ĐẤT SOI XÉT**.

⚡ **Đặc trưng:**
- Làm điều sai → có **HÌNH PHẠT**
- Cũng giống **SỰ CHỨNG GIÁM**
- Càng làm điều **ĐÚNG ĐẮN** → càng **CÓ LỢI**
- Dễ có **DUYÊN với NGƯỜI NGAY THẲNG**, biết tuân thủ đạo đức pháp luật
- Có thể **HỌC TẬP TÍNH TỐT** từ họ`,
  },

  {
    id: 'dia-vong-tat-ach-nghiep-phap-luat-benh-tat',
    title: 'Địa Võng tại Tật Ách - Nghiệp pháp luật và bệnh tật',
    sao: ['Địa Võng'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `**Địa Võng tại Tật Ách** — Tật Ách là **NGHIỆP QUẢ**.

⚡ **Đặc trưng:**
- Dễ dính tới **PHÁP LUẬT, HÌNH PHÁP**
- Bệnh tật phải **NỖ LỰC HÓA GIẢI**

⚡ **Cảnh báo (rất quan trọng):**
- Không nên **MÙ QUÁNG MÊ TÍN DỊ ĐOAN**
- **GIỮ TÂM LÝ TRÍ** là cần thiết
- Vì càng mưu cầu thoát khỏi → càng **MẮC KẸT**`,
  },

  {
    id: 'dia-vong-tai-bach-kiem-tien-bat-chinh',
    title: 'Địa Võng tại Tài Bạch - Kiếm tiền bất chính sinh chuyện',
    sao: ['Địa Võng'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Địa Võng tại Tài Bạch** — kiếm tiền **BẤT CHÍNH ẮT SINH CHUYỆN**.

⚡ **Đặc trưng:**
- "**MỘT LẦN NHÚNG CHÀM, KHÓ RỬA SẠCH TAY**"
- Vướng vào sai lầm → tiếp tục **MỜI GỌI, CÂU DẪN** lún sâu hơn
- Càng đúng nếu đi cùng **ĐÀ LA, ĐỊA KIẾP, BỆNH PHÙ** (sao chủ **DÂY DƯA**)

⚡ **Đồng tiền thiện lành:**
- **KHÔNG có gì đáng lo**`,
  },

  {
    id: 'dia-vong-tu-tuc-duyen-no-con-cai',
    title: 'Địa Võng tại Tử Tức - Duyên nợ con cái',
    sao: ['Địa Võng'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Địa Võng tại Tử Tức** — không có **DUYÊN** thì cũng có **PHẬN** với con cái.

⚡ **Đặc trưng:**
- Phải xa rời con vẫn **DUY TRÌ CẢM GIÁC BỔN PHẬN** của cha mẹ

⚡ **Hội Khôi Việt, Quang Quý:**
- **DUYÊN THIỆN LÀNH**
- Có lợi cho **CHUYỆN SINH NỞ**

⚡ **Kết hợp nhiều sao xấu:**
- Phải **TRẢ NGHIỆP**
- Cần **TÍCH PHÚC ĐỨC** cho con cái, hậu thế`,
  },

  {
    id: 'dia-vong-phu-the-tinh-cam-vuong-mac',
    title: 'Địa Võng tại Phu Thê - Hôn nhân vướng mắc',
    sao: ['Địa Võng'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `**Địa Võng tại Phu Thê** — chủ mệnh phải **NHÌN VÀO THỰC TẾ** để giải quyết.

⚡ **Đặc trưng:**
- Nếu không, vướng mắc này → vướng mắc khác
- **CHỒNG CHÉO KHÓ GIẢI QUYẾT**
- Tựa cái lưới giúp mối quan hệ **DUY TRÌ BỀN LÂU**
- Nhưng là **CÁI KHÓ** của người **MUỐN THOÁT RA mà KHÔNG THỂ**`,
  },

  {
    id: 'dia-vong-huynh-de-ruot-thit-vuong-mac',
    title: 'Địa Võng tại Huynh Đệ - Ruột thịt vướng mắc',
    sao: ['Địa Võng'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Địa Võng tại Huynh Đệ** — quan hệ **RUỘT THỊT** có nhiều **VƯỚNG MẮC**.

⚡ **Cảnh báo - đi cùng Không Kiếp, Hình Kỵ, Bạch Hổ, Hao, Thiên Riêu:**
- Mối quan hệ **ĐI THEO CHIỀU XẤU**
- Vướng vào **RẮC RỐI KHÓ DỨT**

⚡ **Lời khuyên:**
- **KHÔNG NÊN HỢP TÁC LÀM ĂN** hay dính líu
- Nhẹ thì **XA CÁCH**
- Nặng thì **TRANH CHẤP KHÓ DỨT**`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // PHẦN CHUNG CẶP THIÊN LA - ĐỊA VÕNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-la-dia-vong-cam-bay-bua-vay',
    title: 'Hạn Thiên La - Địa Võng - Cạm bẫy bủa vây',
    sao: ['Thiên La', 'Địa Võng'],
    doUuTien: 70,
    tomTat: `**Hạn gặp Thiên La - Địa Võng** — **CẠM BẪY BỦA VÂY**.

⚡ **Đặc trưng:**
- Dễ **SA VÀO BẪY**
- Càng **VÙNG VẪY** càng **MẮC SÂU**

⚡ **Hội cát tinh:**
- Đó là **TRÁCH NHIỆM, NGHĨA VỤ LỚN**
- Tuy **VẤT VẢ** nhưng sẽ được **ĐỀN ĐÁP**

⚡ **Gặp Hóa Kỵ, Địa Kiếp:**
- Càng làm càng **SAI**
- "**LÀM MỘT MẤT MƯỜI**"

⚡ **Lời khuyên:**
- **BIẾT DỪNG ĐÚNG LÚC** là **KHÔN NGOAN**
- **THẬN TRỌNG TỪNG BƯỚC**
- **SOI XÉT HẬU QUẢ** trước khi hành động
- Giữ **CÁI TÂM TỈNH TÁO** → **LƯỚI TRỜI** hóa thành **LỜI CẢNH TỈNH**`,
  },

  {
    id: 'thien-la-dia-vong-loc-phat-dat',
    title: 'Thiên La - Địa Võng + Lộc - Sự nghiệp phát đạt',
    sao: ['Thiên La', 'Địa Võng'],
    ketHop: ['Lộc Tồn', 'Hóa Lộc', 'Thiên Lương', 'Thiên Đồng', 'Hóa Khoa', 'Thái Dương', 'Văn Xương', 'Văn Khúc'],
    doUuTien: 65,
    tomTat: `**Thiên La / Địa Võng + Lộc + cát tinh** — sự nghiệp **PHÁT ĐẠT GIÀU SANG**.

⚡ **Đặc trưng:**
- Hội họp cát tinh tăng tính **BỀN VỮNG** Mệnh - Tài - Quan
- Là **CHẤT XÚC TÁC** giúp đương số **KÉO DÀI CÁI DUYÊN với TIỀN BẠC, CÔNG
  DANH**
- Tưởng muốn **BUÔNG BỎ kiếm tiền** thì tiền lại đến
- Tưởng muốn **SỐNG ẨN** nhưng lại **VANG DANH**

⚡ **Đặc thù phát đạt giàu sang ĐÚNG NHẤT khi:**
- Đi cùng **Thiên Lương, Thiên Đồng** (sao chủ về QUÝ)

⚡ **Đặc thù danh tiếng lâu bền ĐÚNG NHẤT khi:**
- Đi cùng **Hóa Khoa, Thái Dương, Văn Xương, Văn Khúc** (sao chủ về DANH)`,
  },

  {
    id: 'thien-la-dia-vong-thien-hinh-liem-trinh-tu-tung',
    title: 'Thiên La - Địa Võng + Thiên Hình + Liêm Trinh - Dính líu pháp luật tù túng',
    sao: ['Thiên La', 'Địa Võng'],
    ketHop: ['Thiên Hình', 'Liêm Trinh', 'Thiên Lương', 'Địa Kiếp', 'Đà La', 'Quan Phù', 'Quan Phủ'],
    doUuTien: 60,
    tomTat: `**Thiên La / Địa Võng + Thiên Hình + Liêm Trinh + Thiên Lương + Địa Kiếp +
Đà La + Quan Phù - Quan Phủ** — **DÍNH LÍU PHÁP LUẬT, TÙ TÚNG**.

⚡ **Đặc trưng:**
- Rất kỵ đi cùng các sao chủ **KIỆN TỤNG, TÙ TÚNG**
- Dễ dính vào **PHÁP LUẬT**

⚡ **Cảnh báo hạn:**
- Hạn có Địa Võng cần **ĐỀ PHÒNG VẤN ĐỀ PHÁP LUẬT**
- Vướng vào pháp luật → gặp **NHIỀU PHIỀN PHỨC**
- Cần **TẬP TRUNG GIẢI QUYẾT** dứt điểm`,
  },
];
