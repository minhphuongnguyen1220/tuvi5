import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THIÊN QUÝ - Thổ, Phúc Tinh.
 *
 * An theo VỊ TRÍ VĂN KHÚC (cùng cặp với Ân Quang an theo Văn Xương).
 *
 * Đặc trưng riêng:
 *   - Thiên về TINH THẦN, đạo nghĩa, tu tập, nhân quả
 *   - Tại Mệnh dễ làm CÔNG CHỨC (khác Ân Quang dễ làm thầy giáo, thầy lang)
 *   - Là điểm tựa vượt qua gian nan, hóa giải tai ách
 *
 * Phần CHUNG cặp Quang Quý đã viết tại file an-quang.ts với
 * sao: ['Ân Quang', 'Thiên Quý'].
 */
export const luanGiai_ThienQuy: DoanLuanGiai[] = [
  {
    id: 'thien-quy-tinh-chat-chung',
    title: 'Thiên Quý - Đặc tính chung',
    sao: ['Thiên Quý'],
    doUuTien: 32,
    tomTat: `**Thiên Quý** — phụ tinh **PHÚC TINH**, an theo vị trí **Văn Khúc**.

**Ngũ hành:** **Thổ**.

⚡ **Đặc tính:**
- Chủ về **PHÚC ĐỨC, NHÂN NGHĨA, HÒA NHÃ** và sự che chở từ **TRỜI PHẬT**
- Không mang quyền uy hay tài lộc hiển hách
- Là điểm tựa để **VƯỢT QUA GIAN NAN, HÓA GIẢI TAI ÁCH**
- Khó khăn gặp người **NÂNG ĐỠ**

⚡ **Vai trò trong cặp Quang Quý:**
- Khoan hòa, **TRỌNG HẬU**, đề cao chữ TÍN
- Hướng đến **TU TẬP**, coi NHÂN QUẢ là nền tảng để xây dựng cuộc sống an yên

⚡ **Hướng nghiệp:** Thiên Quý thiên về **TINH THẦN** — dễ làm **CÔNG CHỨC**
(khác Ân Quang dễ làm thầy giáo, thầy lang).`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // THIÊN QUÝ TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-quy-tai-menh',
    title: 'Thiên Quý tại Mệnh',
    sao: ['Thiên Quý'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `**Thiên Quý thủ Mệnh** — biểu tượng của **LÒNG NHÂN HẬU, TRỌNG TÍN NGHĨA**
và lối sống hướng thiện.

⚡ **Tướng hình:**
- Vẻ ngoài **HIỀN TỪ, PHÚC HẬU**
- **ÁNH MẮT SÁNG**, phong thái dễ gần
- **THẦN SẮC ĐIỀM TĨNH** mang lại cảm giác yên bình
- Toát lên vẻ **NGƯỜI QUÂN TỬ, KHOAN DUNG, BÌNH THẢN**

⚡ **Tính cách:**
- Ít **BON CHEN**, không chạy theo danh lợi
- Đặt niềm tin vào **PHÚC ĐỨC VÀ NHÂN QUẢ**
- Tính tình **MỀM MỎNG, DĨ HÒA VI QUÝ**
- **HIẾU KÍNH** với cha mẹ, **CHUNG THỦY** trong hôn nhân
- Đi tới đâu cũng được người đời **QUÝ MẾN, KÍNH TRỌNG**

⚡ **Phúc thọ:**
- Cát tinh mang lại sự **CHE CHỞ**, giảm nhẹ bệnh tật và tai ương
- **HƯỞNG PHÚC LÀNH, SỨC KHỎE DẺO DAI, TUỔI THỌ KÉO DÀI**
- Là **NGÔI SAO CỦA BẬC QUÂN TỬ** — khuyên người hướng thiện, gieo nhân
  lành để phúc đức lưu truyền`,
  },

  {
    id: 'thien-quy-tai-phu-mau',
    title: 'Thiên Quý tại Phụ Mẫu - Cha mẹ thầy giáo bác sỹ',
    sao: ['Thiên Quý'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Thiên Quý tại Phụ Mẫu** — cha mẹ **HIỀN LƯƠNG, ĐỨC HẠNH**, mang tâm
hướng thiện và tấm lòng từ bi.

⚡ **Đặc trưng:**
- Đương số được nuôi dưỡng trong môi trường **NỀ NẾP, COI TRỌNG ĐẠO LÝ**
- Dễ trở thành người **HỌC RỘNG HIỂU NHIỀU**, lấy nhân nghĩa làm gốc

⚡ **Cát tinh hội (Thiên Tướng, Thiên Lương, Tả Phù - Hữu Bật, Ân Quang):**
- Cha mẹ có **HỌC THỨC CAO**
- Dễ theo những nghề **"CỨU NHÂN ĐỘ THẾ"**:
  - **Giáo viên**
  - **Thầy thuốc, bác sĩ**`,
  },

  {
    id: 'thien-quy-tai-phuc-duc',
    title: 'Thiên Quý tại Phúc Đức - Mộ phần kết phát',
    sao: ['Thiên Quý'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `**Thiên Quý tại Phúc Đức** — vốn là **PHÚC TINH** đề cao chữ "thiện", càng
làm sáng thêm **NỀN PHÚC DÀY** của dòng họ.

⚡ **Cát tinh hội (Thiên Lương, Khôi Việt, Ân Quang):**
- Trong họ nhiều **BẬC CHÂN TU** hoặc làm các nghề **GIEO PHÚC, CỨU NGƯỜI**
- **MỘ PHẦN DỄ TỤ, ĐẤT CÁT KẾT PHÁT**
- Gia tộc gắn bó, anh em hòa thuận trên dưới một lòng

⚡ **Đặc trưng người sở hữu:**
- Tự khắc ý thức về **ĐẠO HIẾU**
- Biết **THỜ CÚNG TỔ TIÊN** chu đáo
- Tích cực **LÀM VIỆC THIỆN**, gây dựng công đức

⚡ **THỌ** — giòng họ đoàn kết, giúp đỡ nhau. Có người để mả cho, khi chết
được người hiến đất.`,
  },

  {
    id: 'thien-quy-tai-dien-trach',
    title: 'Thiên Quý tại Điền Trạch - Có nơi thờ Phật thờ Thánh',
    sao: ['Thiên Quý'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Thiên Quý tại Điền Trạch** — **YÊN ỔN TRONG GIA SẢN** và thuận lợi trong
việc an cư.

⚡ **Đặc trưng:**
- Hưởng **DI SẢN NHÀ CỬA, ĐẤT ĐAI** từ cha mẹ, tổ tiên

⚡ **Cát tinh hội (Thiên Quan, Thiên Phúc, Ân Quang, Long Trì, Phượng Các):**
- Điền sản càng **VỮNG**
- Nhà cửa **GỌN GÀNG, GIA GIÁO**
- Có **NƠI THỜ PHẬT, THỜ THÁNH** trong nhà
- Hưởng thừa tự của người trong họ
- Có người **HIẾN NHÀ HIẾN ĐẤT** cho ở, giúp đỡ về chỗ ở

⚡ **Tâm tính:**
- Tấm lòng **BAO DUNG, RỘNG LƯỢNG**
- Sẵn sàng dùng tài sản **LÀM VIỆC THIỆN**, giúp đỡ người lúc khó khăn`,
  },

  {
    id: 'thien-quy-tai-quan-loc',
    title: 'Thiên Quý tại Quan Lộc - Y dược giáo dục',
    sao: ['Thiên Quý'],
    cung: ['Quan Lộc'],
    doUuTien: 76,
    tomTat: `**Thiên Quý tại Quan Lộc** — công việc **THUẬN BUỒM XUÔI GIÓ**, đi đâu
cũng có người nâng đỡ.

⚡ **Đặc trưng:**
- Ít phải **ĐƠN THƯƠNG ĐỘC MÃ**
- Được **NGƯỜI TRÊN GIÚP ĐỠ CHE CHỞ**
- Hay giúp đỡ đồng nghiệp, lấy chí thành đãi người
- Gặp **MAY MẮN** trong quan trường nghề nghiệp

⚡ **Cát tinh hội (Tả Phù - Hữu Bật):**
- Sự nghiệp càng **HANH THÔNG**
- Cấp trên **TÍN NHIỆM**, đồng nghiệp **QUÝ MẾN**

⚡ **Hướng nghiệp:** Thiên Quý định hướng tới những công việc gắn với:
- **Y DƯỢC** (bác sĩ, thầy thuốc)
- **GIÁO DỤC** (giáo viên)
- Những nghề **CỨU NGƯỜI, DẠY NGƯỜI** làm trọng

⚡ **Sát tinh cản trở:**
- Sự nghiệp dễ trải qua chông gai
- Nhờ Thiên Quý hộ mệnh nên thường có **QUÝ NHÂN TRỢ GIÚP**
- **Trong cái rủi có cái may**, công danh có cơ hội xoay chuyển`,
  },

  {
    id: 'thien-quy-tai-no-boc',
    title: 'Thiên Quý tại Nô Bộc - Bạn hiền đồng môn đồng tu',
    sao: ['Thiên Quý'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Thiên Quý tại Nô Bộc** — bạn bè, đồng nghiệp phần đa là người **CHÂN
THÀNH, TRỌNG TÍN NGHĨA**.

⚡ **Cát tinh hội (Thiên Quan - Thiên Phúc, Thiên Đức - Nguyệt Đức):**
- Dễ gặp **BẠN HIỀN TRI KỶ**
- Có **ĐỒNG MÔN, ĐỒNG TU**
- Có người chung chí hướng trong nghề mang tính phúc thiện

⚡ **Đặc trưng:**
- Quan hệ xã giao **VỮNG BỀN** nhờ phúc khí Thiên Quý
- Bạn bè không chỉ là **CHỖ DỰA TINH THẦN**
- Còn sẵn lòng **NÂNG ĐỠ KHI GẶP KHÓ KHĂN**
- Đúng nghĩa **"GIAN NAN MỚI BIẾT BẠN HIỀN"**`,
  },

  {
    id: 'thien-quy-tai-thien-di',
    title: 'Thiên Quý tại Thiên Di - Gặp cao nhân thầy giỏi',
    sao: ['Thiên Quý'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Thiên Quý tại Thiên Di** — **MAY MẮN VÂY QUANH**, dễ gặp **QUÝ NHÂN
NÂNG ĐỠ**.

⚡ **Cát tinh hội (Ân Quang, Thiên Khôi - Thiên Việt):**
- Khi giao du xã hội dễ gặp **CAO NHÂN, BẬC TRÍ GIẢ**
- Gặp **THẦY GIỎI, NGƯỜI CÓ TẦM NHÌN SÂU RỘNG**

⚡ **Đặc trưng:**
- Cơ duyên giúp **MỞ MANG KIẾN THỨC**
- Thuận lợi cho con đường **LẬP THÂN LẬP NGHIỆP**

⚡ **Sát tinh hội:**
- Việc đi xa, xuất ngoại dễ gặp **TRỞ NGẠI**
- Nhờ **THIỆN TÂM** mà hay được người khác sẵn lòng cưu mang
- **HÓA GIẢI SÓNG GIÓ**`,
  },

  {
    id: 'thien-quy-tai-tat-ach',
    title: 'Thiên Quý tại Tật Ách - Tai qua nạn khỏi',
    sao: ['Thiên Quý'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `**Thiên Quý tại Tật Ách** — mang tính chất **CỨU GIẢI**.

⚡ **Đặc trưng:**
- Bản mệnh **GIẢM NHẸ TAI ƯƠNG**
- Mắc bệnh **CHÓNG KHỎI**
- Dễ gặp **THẦY GIỎI** chữa trị
- Dễ tìm được **PHƯƠNG THUỐC QUÝ**

⚡ **Khả năng vượt vận hạn:**
- Người có Thiên Quý che chở thường **"TAI QUA NẠN KHỎI"**
- **PHÚC ĐỨC** giúp vượt qua những cơn bạo bệnh

⚡ **Cải thiện:** Biết **TÍCH THIỆN TU NHÂN** → phước lực càng sâu dày,
họa càng nhanh được hóa giải, **BỆNH NẶNG HÓA NHẸ, GẶP DỮ HÓA LÀNH**.`,
  },

  {
    id: 'thien-quy-tai-tai-bach',
    title: 'Thiên Quý tại Tài Bạch - Của cải minh bạch',
    sao: ['Thiên Quý'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Thiên Quý tại Tài Bạch** — của cải đến một cách **MINH BẠCH**.

⚡ **Đặc trưng:**
- **"CỦA MỘT ĐỒNG, CÔNG MỘT NÉN"** — không dựa vào gian trá hay tranh đoạt
- Dễ gặp **QUÝ NHÂN NÂNG ĐỠ** về tài chính
- Được **THỪA HƯỞNG ĐIỀN SẢN, GIA TÀI** từ cha mẹ, tổ tiên

⚡ **Cát tinh hội (Thiên Quan - Thiên Phúc, Thiên Đức - Nguyệt Đức):**
- Đồng cung tăng phẩm chất **THIỆN TÀI** rõ rệt

⚡ **Tâm tính:**
- Xu hướng dùng tiền vào **VIỆC NGHĨA, TỪ THIỆN**
- Coi **PHÚC ĐỨC QUAN TRỌNG HƠN LỢI LỘC** trước mắt

⚡ **Sát tinh hội:**
- Tài vận đến nhưng **KHÔNG BỀN**
- Dễ nảy sinh **ẢO TƯỞNG** hoặc may rủi bất ngờ`,
  },

  {
    id: 'thien-quy-tai-tu-tuc',
    title: 'Thiên Quý tại Tử Tức - Sinh quý tử',
    sao: ['Thiên Quý'],
    cung: ['Tử Tức'],
    doUuTien: 76,
    tomTat: `**Thiên Quý tại Tử Tức** — con cái **HIỀN LÀNH, SÁNG DẠ**, giàu lòng nhân
ái và hiếu thảo.

⚡ **Cát tinh hội (Hóa Lộc, Lộc Tồn):**
- Con cái sinh ra **HIỀN LÀNH, SÁNG DẠ**
- Giàu **LÒNG NHÂN ÁI VÀ HIẾU THẢO** với cha mẹ
- Dễ **THÀNH ĐẠT, HỌC HÀNH GIỎI GIANG**, sống có đạo nghĩa

⚡ **Đặc trưng:**
- Bản mệnh hết mực cưng chiều con
- Xem con như **"BÁU VẬT TRỜI BAN"**

⚡ **Cát tinh hội thêm Tấu Thư:**
- **CƠ DUYÊN SINH QUÝ TỬ**
- Hoặc chí ít cũng có **CON NUÔI** để "nối dõi tông đường"`,
  },

  {
    id: 'thien-quy-tai-phu-the',
    title: 'Thiên Quý tại Phu Thê - Bạn đời thiện tâm thủy chung',
    sao: ['Thiên Quý'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `**Thiên Quý tại Phu Thê** — hôn nhân mang màu sắc **YÊN ẤM**, vợ chồng
**THUẬN HÒA, THẤU HIỂU, NHƯỜNG NHỊN VÀ SẺ CHIA**.

⚡ **Cát tinh hội (Tử Vi, Thiên Phủ, Thiên Hình, Ân Quang):**
- Người bạn đời **HIỀN LÀNH, PHÚC HẬU**
- Giàu **THIỆN TÂM**, giữ trọn chữ **THỦY CHUNG**

⚡ **Khả năng hóa giải:**
- Là bộ sao **HÓA GIẢI MÂU THUẪN VỢ CHỒNG**
- Dẫu đôi lúc khó tránh cảnh **"CƠM KHÔNG LÀNH, CANH KHÔNG NGỌT"**
- **TÌNH NGHĨA VẪN VẸN TOÀN**, ít khi chia lìa`,
  },

  {
    id: 'thien-quy-tai-huynh-de',
    title: 'Thiên Quý tại Huynh Đệ - Anh chị em nuôi keo sơn',
    sao: ['Thiên Quý'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Thiên Quý tại Huynh Đệ** — anh chị em **GẮN BÓ, TÌNH NGHĨA KEO SƠN**, sẵn
lòng nâng đỡ nhau trong lúc khó khăn.

⚡ **Đặc trưng:**
- Có trường hợp xuất hiện **ANH CHỊ EM NUÔI** hoặc **BẰNG HỮU CHÍ TÌNH**
- Gắn kết chẳng khác gì **MÁU MỦ**

⚡ **Cát tinh hội (Thiên Quan, Thiên Phúc):**
- Nhiều người trong số đó có **TẤM LÒNG THIỆN LƯƠNG**
- Hướng về **TU TẬP**, thích giúp đời
- Được người xung quanh **YÊU QUÝ, KÍNH TRỌNG**`,
  },
];
