import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO TAM THAI - Thủy, Cát Tinh.
 *
 * CHỨA PHẦN CHUNG CỦA CẶP TAM THAI - BÁT TỌA (tag ['Tam Thai', 'Bát Tọa']).
 *
 * QUY LUẬT VỊ TRÍ:
 *   - Tam Thai an theo NGÀY SINH từ Tả Phù THUẬN
 *   - Bát Tọa an theo NGÀY SINH từ Hữu Bật NGHỊCH
 *   - Là KẾT QUẢ phò tá của Tả Phù - Hữu Bật
 *
 * BẢN CHẤT CẶP:
 *   - Cặp CÁT TINH QUYỀN QUÝ
 *   - Chủ về ĐỊA VỊ, SỰ BỆ VỆ, KHOA BẢNG HANH THÔNG
 *   - Tượng trưng cho THÀNH QUẢ TỐT ĐẸP, MAY MẮN ĐƯỢC BAN SẴN
 *   - KHÔNG cần phải tranh đấu vất vả
 *   - Tọa cung nào cũng MANG LẠI TỐT LÀNH cho cung đó
 *
 * Đặc trưng riêng Tam Thai (Thủy):
 *   - Hình tượng VẦNG TRÁN
 *   - Bệ vệ, khoa giáp, quý hiển, tốt lành, may mắn, khoan hồng
 *   - Có khả năng GIẢI TRỪ tai nạn và bệnh tật nhỏ
 */
export const luanGiai_TamThai: DoanLuanGiai[] = [
  // ═══════════════════════════════════════════════════════════════════════
  // PHẦN CHUNG CỦA CẶP TAM THAI - BÁT TỌA
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'tam-thai-bat-toa-tinh-chat-chung',
    title: 'Tam Thai - Bát Tọa - Cặp Cát Tinh Quyền Quý',
    sao: ['Tam Thai', 'Bát Tọa'],
    doUuTien: 35,
    tomTat: `**Tam Thai - Bát Tọa** — cặp **CÁT TINH QUYỀN QUÝ**, chủ về **ĐỊA VỊ, SỰ BỆ
VỆ, KHOA BẢNG HANH THÔNG**.

⚡ **Đặc tính cặp:**
- Là **KẾT QUẢ** của quá trình **PHÒ TÁ** của Tả Phù - Hữu Bật
- Tam Thai an theo ngày sinh từ **TẢ PHÙ THUẬN**
- Bát Tọa an theo ngày sinh từ **HỮU BẬT NGHỊCH**

⚡ **Vai trò:**
- Tượng trưng cho **THÀNH QUẢ TỐT ĐẸP**
- **MAY MẮN ĐƯỢC BAN SẴN** mà không cần tranh đấu vất vả
- Tọa cung nào cũng **MANG LẠI TỐT LÀNH** cho cung đó
- **LÀM ĐẸP** mọi cung sao đứng

⚡ **Hai mặt:**
- ✅ Đi cùng cát tinh → quý hiển hiển đạt thuận lợi
- ⚠️ Đi cùng sát bại tinh → tính tốt bị lấn át, dễ thành **LƯỜI BIẾNG, Ỷ
  LẠI**, "ngồi mát ăn bát vàng"`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP CHUNG CẶP
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'tam-thai-bat-toa-ta-huu-da-phu-the-che-hoa',
    title: 'Tam Thai - Bát Tọa + Tả Hữu Phu Thê - Chế hóa đa phu thê',
    sao: ['Tam Thai', 'Bát Tọa'],
    cung: ['Phu Thê'],
    ketHop: ['Tả Phù', 'Hữu Bật'],
    doUuTien: 60,
    tomTat: `**Tam Thai - Bát Tọa + Tả Phù + Hữu Bật đồng cung tại Phu Thê** — **CHẾ HÓA**
phần nào cách **ĐA PHU THÊ**.

⚡ **Đặc trưng:**
- Tả Hữu đồng cung Phu Thê = cách **ĐA PHU THÊ** (2 đời chồng/vợ)
- Tam Thai - Bát Tọa hội tụ → **CHẾ HÓA** phần nào ảnh hưởng xấu
- Giảm bớt khả năng phải qua nhiều hôn nhân
- Là cách **HÓA GIẢI ĐẶC BIỆT** cho cặp Tả Hữu Phu Thê`,
  },

  {
    id: 'tam-thai-bat-toa-khoi-viet-xuong-khuc-tu-tuc',
    title: 'Tam Thai - Bát Tọa + Khôi Việt + Xương Khúc tại Tử Tức - Con thành đạt',
    sao: ['Tam Thai', 'Bát Tọa'],
    cung: ['Tử Tức'],
    ketHop: ['Thiên Khôi', 'Thiên Việt', 'Văn Xương', 'Văn Khúc'],
    doUuTien: 65,
    tomTat: `**Tam Thai - Bát Tọa + Thiên Khôi + Thiên Việt + Văn Xương + Văn Khúc tại Tử
Tức** — con cái **THÀNH ĐẠT, TÀI GIỎI**.

⚡ **Đặc trưng:**
- Con cái càng **THÀNH ĐẠT, TÀI GIỎI**
- **NHIỀU CON CÁI**, ngoan ngoãn hiền lương
- Việc nuôi dạy con **NHÀN NHÃ, DỄ DÀNG**
- Không phải **GÁNH NẶNG** cho cha mẹ
- Bộ tổ hợp **CỰC ĐẸP** cho cung Tử Tức`,
  },

  {
    id: 'tam-thai-bat-toa-tu-vi-thai-duong-khoa-quan',
    title: 'Tam Thai - Bát Tọa + Tử Vi + Thái Dương + Hóa Khoa Quan - Sự nghiệp rực rỡ',
    sao: ['Tam Thai', 'Bát Tọa'],
    cung: ['Quan Lộc'],
    ketHop: ['Tử Vi', 'Thái Dương', 'Hóa Khoa'],
    doUuTien: 65,
    tomTat: `**Tam Thai - Bát Tọa + Tử Vi + Thái Dương + Hóa Khoa tại Quan Lộc** — sự
nghiệp **RỰC RỠ, THĂNG TIẾN DỄ DÀNG**.

⚡ **Đặc trưng:**
- Con đường sự nghiệp **CÀNG RỰC RỠ**
- Dễ dàng **THĂNG TIẾN**
- **KHÔNG CẦN BON CHEN** nhiều
- Vẫn có **VỊ THẾ, UY TÍN, DANH TIẾNG**
- Quý cách cho người làm chính trị, công chức, giáo dục cao cấp`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP XẤU
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'tam-thai-bat-toa-tuan-triet-ngan-tro',
    title: 'Tam Thai - Bát Tọa + Tuần Triệt - Ngăn trở công danh',
    sao: ['Tam Thai', 'Bát Tọa'],
    ketHop: ['Tuần', 'Triệt'],
    doUuTien: 55,
    tomTat: `⚠️ **Tam Thai - Bát Tọa + Tuần / Triệt án ngữ** — phá vỡ **AN NHÀN VÀ MAY
MẮN** vốn có.

⚠️ **Tại Mệnh / Tài Bạch / Quan Lộc:**
- Phá vỡ **AN NHÀN VÀ MAY MẮN** vốn có
- Con đường công danh thay vì bằng phẳng → **GẬP GHỀNH, KHÓ KHĂN**
- Sự **QUÝ HIỂN BỊ GIẢM SÚT**
- Đương số phải **NỖ LỰC NHIỀU** mới có thể đạt thành tựu

⚡ Tam Thai - Bát Tọa vốn là cát tinh "may mắn ban sẵn" — Tuần Triệt làm
**MẤT TÍNH ĐÓ**.`,
  },

  {
    id: 'tam-thai-bat-toa-hong-dao-thi-phi-ai-tinh',
    title: 'Tam Thai - Bát Tọa + Hồng Đào Mệnh/Nô/Phu - Thị phi ái tình',
    sao: ['Tam Thai', 'Bát Tọa'],
    cung: ['Mệnh', 'Nô Bộc', 'Phu Thê'],
    ketHop: ['Hồng Loan', 'Đào Hoa'],
    doUuTien: 55,
    tomTat: `⚠️ **Tam Thai - Bát Tọa + Hồng Loan + Đào Hoa tại Mệnh / Nô Bộc / Phu Thê** —
**VƯỚNG THỊ PHI ÁI TÌNH**.

⚡ **Mặt tốt:**
- Mối tình / cuộc hôn nhân với **NGƯỜI CÓ ĐỊA VỊ**
- Được **NHIỀU NGƯỜI NGƯỠNG MỘ**

⚠️ **Mặt xấu:**
- Tam Thai - Bát Tọa = bệ vệ danh giá → dễ **NỔI BẬT**
- Chuyện tình cảm dễ bị **CÔNG CHÚNG CHÚ Ý, SOI MÓI**
- Vướng **THỊ PHI, ĐÀM TIẾU** liên quan ái tình

⚠️ **Đặc biệt nguy hiểm + Kình Đà / Không Kiếp / Hóa Kỵ / Thiên Riêu:**
- Càng **ỨNG NGHIỆM** mạnh
- Hôn nhân dễ đổ vỡ vì **THỊ PHI**
- Mất danh dự`,
  },

  {
    id: 'tam-thai-bat-toa-sat-bai-luoi-bieng',
    title: 'Tam Thai - Bát Tọa + sát bại tinh - Lười biếng ỷ lại',
    sao: ['Tam Thai', 'Bát Tọa'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 55,
    tomTat: `⚠️ **Tam Thai - Bát Tọa + nhiều sát bại tinh** — tính tốt **BỊ LẤN ÁT**, lười
biếng ỷ lại.

⚠️ **Đặc trưng:**
- Tính tốt của Tam Thai - Bát Tọa bị **LẤN ÁT**
- Đương số trở nên **LƯỜI BIẾNG**
- "**NGỒI MÁT ĂN BÁT VÀNG**"
- **KHÔNG CÓ CHÍ TIẾN THỦ**
- Chỉ thích **HƯỞNG THỤ, Ỷ LẠI**
- **KHÓ LÀM NÊN NGHIỆP LỚN**

⚠️ **Riêng tại Tài Bạch + Không Kiếp:**
- Dễ trở nên **LƯỜI BIẾNG**
- Không quan tâm **KIẾM TIỀN**
- **HAO HỤT** tài sản sẵn có`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // TAM THAI - BÁT TỌA TẠI 12 CUNG (TAG CHUNG CẶP)
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'tam-thai-tai-menh',
    title: 'Tam Thai tại Mệnh - Khôn ngoan phúc hậu an nhàn',
    sao: ['Tam Thai'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `**Tam Thai thủ Mệnh** — chủ sự **KHÔN NGOAN, PHÚC HẬU, AN NHÀN**.

⚡ **Hình thể:**
- Tam Thai tượng trưng cho **VẦNG TRÁN**
- **TRÁN VUÔNG, CAO**
- Cảm giác **UY NGHI, VỮNG CHÃI**
- Dáng điệu **BỆ VỆ, KHOAN THAI**
- Đi đứng **TỪ TỐN, BÌNH TĨNH**

⚡ **Tính cách:**
- **KHÔN NGOAN, PHÚC HẬU**
- Tính tình **ÔN HÒA**
- Đặc biệt yêu thích **SỰ THANH NHÀN**
- **KHÔNG MUỐN BON CHEN**, cạnh tranh với đời

⚡ **Công danh:**
- Hội cùng **NHIỀU CÁT TINH** → quý hiển, dễ đạt **THÀNH CÔNG LỚN**
- Đơn thủ → cuộc sống **AN PHẬN, BÌNH BÌNH**
- Không có địa vị quá cao nhưng cũng **KHÔNG KHỔ CỰC**

⚠️ **Gặp nhiều sát bại tinh:**
- Tính tốt **BỊ LẤN ÁT**
- Trở nên **LƯỜI BIẾNG**
- "**NGỒI MÁT ĂN BÁT VÀNG**"
- Không có chí tiến thủ
- Chỉ thích **HƯỞNG THỤ, Ỷ LẠI**
- **KHÓ LÀM NÊN NGHIỆP LỚN**`,
  },

  {
    id: 'tam-thai-tai-phu-mau',
    title: 'Tam Thai tại Phụ Mẫu - Cách "giáp Thai giáp Tọa"',
    sao: ['Tam Thai', 'Bát Tọa'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Tam Thai - Bát Tọa tại Phụ Mẫu** — vị trí **RẤT ĐẸP**, gọi là cách "**GIÁP
THAI GIÁP TỌA**".

⚡ **Đặc trưng:**
- Cha mẹ là người **DANH GIÁ, CÓ TIẾNG TĂM**
- Tính tình **HIỀN LƯƠNG, KHOAN THAI**
- Đương số sinh ra trong gia đình có **NỀN TẢNG TỐT**
- Tạo điều kiện thuận lợi để **PHÁT TRIỂN VÀ THÀNH CÔNG SỚM**
- Cha mẹ **KHÔNG PHẢI GÁNH NẶNG**
- Mối quan hệ gia đình **GIẢM BỚT XUNG KHẮC**

⚡ Cách "Giáp Thai Giáp Tọa" — Mệnh được Tam Thai và Bát Tọa **GIÁP HAI BÊN**
→ rất quý cách, được nâng đỡ từ phía cha mẹ.`,
  },

  {
    id: 'tam-thai-tai-phuc-duc',
    title: 'Tam Thai tại Phúc Đức',
    sao: ['Tam Thai'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `**Tam Thai tại Phúc Đức** — hưởng **PHÚC LỚN** từ tổ tiên.

⚡ **Đặc trưng:**
- Hưởng **PHÚC LỚN** từ tổ tiên
- Dòng họ có nhiều người **DANH GIÁ, THÀNH ĐẠT**
- Mồ mả ông bà thường được **QUY TỤ MỘT NƠI**
- **YÊN ỔN VÀ ĐẸP ĐẼ**
- Bản thân chủ mệnh được **GIA TĂNG PHÚC THỌ**
- **GIẢM THIỂU TAI HỌA**
- Gặp nhiều **MAY MẮN**, có **QUÝ NHÂN PHÙ TRỢ**`,
  },

  {
    id: 'tam-thai-tai-dien-trach',
    title: 'Tam Thai tại Điền Trạch',
    sao: ['Tam Thai'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Tam Thai tại Điền Trạch** — **NHÀ CAO CỬA RỘNG, KHANG TRANG BỆ THẾ**.

⚡ **Đặc trưng:**
- Tam Thai tượng trưng cho **NHÀ CỬA KHANG TRANG BỀ THẾ**
- Mang lại **MAY MẮN VÀ THUẬN LỢI** trong việc tạo dựng nhà cửa, đất đai
- Chủ nhân lá số dễ có **NHÀ CAO CỬA RỘNG**
- Hoặc được **THỪA HƯỞNG TÀI SẢN** mà không cần làm việc vất vả`,
  },

  {
    id: 'tam-thai-tai-quan-loc',
    title: 'Tam Thai tại Quan Lộc',
    sao: ['Tam Thai'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `**Tam Thai tại Quan Lộc** — công danh **THUẬN LỢI**, không cần bon chen.

⚡ **Đặc trưng:**
- Con đường công danh, học hành, thi cử **THUẬN LỢI**
- Đương số gặp **MAY MẮN** trong công việc
- **KHÔNG PHẢI CẠNH TRANH GAY GẮT** vẫn có **VỊ THẾ, UY TÍN**

⚡ **Hội thêm cát tinh** (Tử Vi, Thái Dương, Hóa Khoa):
- Sự nghiệp **CÀNG RỰC RỠ**
- Dễ dàng **THĂNG TIẾN**
- Không cần **BON CHEN** nhiều`,
  },

  {
    id: 'tam-thai-tai-no-boc',
    title: 'Tam Thai tại Nô Bộc',
    sao: ['Tam Thai'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Tam Thai tại Nô Bộc** — bạn bè **DANH GIÁ, CHỨC PHẬN CAO**.

⚡ **Đặc trưng:**
- Có **NHIỀU BẠN BÈ, ĐỒNG NGHIỆP TỐT**
- Trong đó có người **DANH GIÁ, CHỨC PHẬN CAO**
- Mối quan hệ với bạn bè, cấp dưới **CHÂN THÀNH, HÒA THUẬN**
- Ít khi phải lo **BỊ PHẢN BỘI HAY HÃM HẠI**

⚡ **Nếu làm thầy:**
- Dễ có **HỌC TRÒ GIỎI GIANG, THÀNH ĐẠT**
- Hợp nghề **GIÁO VIÊN, ĐÀO TẠO**`,
  },

  {
    id: 'tam-thai-tai-thien-di',
    title: 'Tam Thai tại Thiên Di',
    sao: ['Tam Thai'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Tam Thai tại Thiên Di** — ra ngoài **OAI VỆ, ĐƯỢC YÊU MẾN KÍNH TRỌNG**.

⚡ **Đặc trưng:**
- Khi ra ngoài có **PHONG THÁI OAI VỆ**
- Được **NHIỀU NGƯỜI YÊU MẾN VÀ KÍNH TRỌNG**
- Mọi việc đều **HANH THÔNG, THUẬN LỢI**
- Dễ có **QUÝ NHÂN GIÚP ĐỠ**
- Thường lui tới những nơi **SANG TRỌNG, TAO NHÃ**
- Dễ dàng tạo dựng được **THÀNH TỰU, DANH TIẾNG** ở phương xa`,
  },

  {
    id: 'tam-thai-tai-tat-ach',
    title: 'Tam Thai tại Tật Ách - Giải tai bệnh nhỏ',
    sao: ['Tam Thai'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `**Tam Thai tại Tật Ách** — là **PHÚC TINH**, có khả năng **GIẢI TRỪ TAI NẠN
VÀ BỆNH TẬT NHỎ**.

⚡ **Đặc trưng:**
- Tam Thai = **PHÚC TINH**
- Có khả năng **GIẢI TRỪ TAI NẠN, BỆNH TẬT NHỎ**
- Giúp **GIẢM THIỂU** ưu phiền về sức khỏe
- Biến **BỆNH NẶNG THÀNH NHẸ**
- **HỌA LỚN THÀNH NHỎ**

⚡ **Khi qua đời:**
- Cũng **NHẸ NHÀNG, THANH THẢN**
- Được nhiều người **CÓ CHỨC QUYỀN ĐẾN THĂM VIẾNG**`,
  },

  {
    id: 'tam-thai-tai-tai-bach',
    title: 'Tam Thai tại Tài Bạch',
    sao: ['Tam Thai'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Tam Thai tại Tài Bạch** — tiền bạc **ĐẾN THUẬN LỢI** không cần vất vả.

⚡ **Đặc trưng:**
- Mang lại **MAY MẮN VÀ DỄ DÀNG** trong việc cầu tài
- Đương số **KHÔNG PHẢI VẤT VẢ CẠNH TRANH**
- Tiền bạc vẫn **ĐẾN MỘT CÁCH THUẬN LỢI**
- Thường được **NGƯỜI KHÁC HỖ TRỢ**

⚠️ **Trường hợp gặp Địa Không + Địa Kiếp:**
- Chủ mệnh dễ trở nên **LƯỜI BIẾNG**
- **KHÔNG QUAN TÂM** đến việc kiếm tiền
- Có nguy cơ **HAO HỤT TÀI SẢN** sẵn có`,
  },

  {
    id: 'tam-thai-tai-tu-tuc',
    title: 'Tam Thai tại Tử Tức',
    sao: ['Tam Thai'],
    cung: ['Tử Tức'],
    doUuTien: 78,
    tomTat: `**Tam Thai tại Tử Tức** — **GIA TĂNG SỐ LƯỢNG CON CÁI**, ngoan ngoãn hiền
lương.

⚡ **Đặc trưng:**
- **GIA TĂNG SỐ LƯỢNG CON CÁI**
- Việc nuôi dạy con **NHÀN NHÃ, DỄ DÀNG**
- Con cái **NGOAN NGOÃN, HIỀN LƯƠNG**
- **KHÔNG PHẢI GÁNH NẶNG** cho cha mẹ

⚡ **+ Khôi Việt + Xương Khúc:**
- Con cái càng **THÀNH ĐẠT, TÀI GIỎI**
- Bộ tổ hợp cực đẹp cho cung Tử Tức`,
  },

  {
    id: 'tam-thai-tai-phu-the',
    title: 'Tam Thai tại Phu Thê',
    sao: ['Tam Thai'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `**Tam Thai tại Phu Thê** — người hôn phối **DANH GIÁ, TÀI NĂNG, HIỀN LƯƠNG**.

⚡ **Đặc trưng:**
- Người hôn phối **DANH GIÁ, TÀI NĂNG VÀ HIỀN LƯƠNG**
- Cuộc sống vợ chồng **HÒA THUẬN, ÍT XUNG KHẮC**
- **GIẢM BỚT** những đau buồn
- Việc **LẬP GIA ĐÌNH** diễn ra một cách **THUẬN LỢI, DỄ DÀNG**

⚡ **Đặc biệt với Tả Phù + Hữu Bật đồng cung:**
- Cách **ĐA PHU THÊ** được Tam Thai **CHẾ HÓA** phần nào
- Là cách hóa giải đẹp`,
  },

  {
    id: 'tam-thai-tai-huynh-de',
    title: 'Tam Thai tại Huynh Đệ - Cách "Giáp Thai Tọa"',
    sao: ['Tam Thai', 'Bát Tọa'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Tam Thai - Bát Tọa tại Huynh Đệ** — đông anh chị em, cách "**GIÁP THAI
TỌA**".

⚡ **Đặc trưng:**
- Gia đình **ĐÔNG ANH CHỊ EM**
- Trong đó có người **THÀNH ĐẠT, DANH GIÁ**
- Mối quan hệ giữa anh chị em **HÒA THUẬN, HIỀN LƯƠNG**
- Không phải lo lắng hay trở thành **GÁNH NẶNG** cho nhau
- **GIẢM THIỂU SỰ HÌNH KHẮC**

⚡ **Cách "Giáp Thai Tọa":**
- Thể hiện chủ mệnh ngày nhỏ được **KẾ THỪA**
- Được **ANH EM TRONG NHÀ GIỎI GIANG CHỈ BẢO, DẪN DẮT**
- Dễ có **THÀNH TỰU SỚM**`,
  },
];
