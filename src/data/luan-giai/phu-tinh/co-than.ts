import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO CÔ THẦN - Thổ, Ám Tinh.
 *
 * An theo NHÓM 3 CHI của năm sinh (engine).
 *
 * ⚡ QUY LUẬT BẮT BUỘC:
 *   - Cô Thần và Quả Tú LUÔN tam hợp hội chiếu nhau (engine an theo nhóm)
 *   - Bộ đôi Cô-Quả không bao giờ tách lẻ
 *
 * Đặc trưng riêng:
 *   - "Nam kỵ Cô" — Cô Thần đi với NAM mệnh phát tác mạnh nhất
 *   - Cô Thần Phúc Đức = nhà có ÔNG MÃNH linh thiêng (nam mất sớm)
 *
 * Phần CHUNG cặp Cô-Quả đã viết tại file này với
 * sao: ['Cô Thần', 'Quả Tú'].
 */
export const luanGiai_CoThan: DoanLuanGiai[] = [
  {
    id: 'co-than-tinh-chat-chung',
    title: 'Cô Thần - Đặc tính chung',
    sao: ['Cô Thần'],
    doUuTien: 32,
    tomTat: `**Cô Thần** — phụ tinh **ÁM TINH**, an theo **nhóm 3 chi** năm sinh.

**Ngũ hành:** **Thổ**.

⚡ **Tên gọi rút gọn:** "**Cô**".

⚡ **Đặc tính:**
- **Cô độc, lạnh lùng, co lại, bảo vệ**
- **Ít giao thiệp**
- **Lãnh đạo, tư duy độc lập**

⚡ **Đại diện:** **THẦN CÔ ĐƠN, CÔ ĐỘC**.

⚡ **Quy luật cơ bản:**
- LUÔN tam hợp hội chiếu **Quả Tú**
- "**NAM KỴ CÔ, NỮ KỴ QUẢ**" — Cô Thần phát tác mạnh nhất với **NAM mệnh**
- Đặc biệt **kỵ MẸ và VỢ** (cô độc với phụ nữ trong gia đình)

⚡ **Tâm linh:** Cô Thần Phúc Đức = nhà có **ÔNG MÃNH linh thiêng** phù trì
(người nam trong họ mất sớm khi còn trẻ).`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // PHẦN CHUNG CẶP CÔ-QUẢ
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'co-qua-bo-doi-tinh-chat',
    title: 'Bộ Cô-Quả - Đặc tính chung của cặp đôi',
    sao: ['Cô Thần', 'Quả Tú'],
    doUuTien: 60,
    tomTat: `**Bộ Cô Thần - Quả Tú** — luôn **TAM HỢP HỘI CHIẾU** nhau, không bao giờ
tách lẻ.

⚡ **Đặc tính chung:**
- Chủ về thời gian **TRẦM LẮNG, CÔ ĐỘC, KHÉP KÍN**
- **ÍT GIAO DU, KHÓ TRI ÂM ĐỒNG CẢM**
- Đem đến sự **THIẾU THỐN TÌNH CẢM, ÍT QUAN TÂM** ở cung đóng

⚡ **Mặt sáng:**
- **TINH THẦN ĐỘC LẬP, SỚM TRƯỞNG THÀNH**
- Biết **TỰ LO, TỰ CHĂM SÓC** bản thân
- Có thể là đặc trưng của **VỊ LÃNH ĐẠO, KẺ ĐỨNG ĐẦU** (cái nhìn khác biệt)

⚡ **Mặt tối:**
- Luôn **THU MÌNH** để bảo vệ chính mình
- Càng ngày càng **TÁCH BIỆT, KHÓ CHIA SẺ**
- Đôi khi thành **KẺ LẬP DỊ, KHÁC NGƯỜI**, không ai muốn gần

⚡ **"NAM KỴ CÔ, NỮ KỴ QUẢ":**
- **NAM** mệnh + **CÔ THẦN** → cô độc mạnh nhất, kỵ mẹ kỵ vợ
- **NỮ** mệnh + **QUẢ TÚ** → cô độc mạnh nhất, kỵ chồng kỵ cha
- Là yếu tố của sự **GÓA BỤA**

⚡ **Hại cho:** hôn nhân, cầu hôn, đoàn tụ, chung sống vợ chồng.`,
  },

  {
    id: 'co-qua-che-dao-hong',
    title: 'Cô-Quả chế Đào Hồng - Phá hỏng nhân duyên',
    sao: ['Cô Thần', 'Quả Tú'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 60,
    tomTat: `**Cô Thần - Quả Tú gặp Đào Hoa - Hồng Loan** — Thổ chế Mộc, có khả năng
**GIẢM CHẾ tính ĐÀO HOA**.

⚡ **Hai mặt:**
- ✅ **Tích cực:** Hạn chế phát tác đào hoa lăng nhăng
- ⚠️ **Tiêu cực:** Đôi khi thành **PHÁ HỎNG DUYÊN LÀNH**, đưa tới **CÔ ĐƠN**
  ngay cả khi nhiều người xung quanh để ý
- "**LẮM MỐI TỐI NẰM KHÔNG**"

⚡ **Cách Hồng - Không - Cô - Quả** (cảnh báo nặng nhất):
- Tại **DẦN của tuổi SỬU**
- Tại **THÂN của tuổi MÙI**
- Cô-Quả ở đây **PHÁ HỎNG NHÂN DUYÊN MẠNH MẼ**
- **BIẾN DUYÊN THÀNH NGHIỆP**
- Đưa tới **CÔ ĐỘC**, dần hướng tới **TU HÀNH**, mong cầu tỉnh thức

⚡ **Cách hóa giải:** Sao chế giải Cô-Quả gồm:
- **Thái Âm, Thái Dương**
- **Bộ Tam Minh** (Đào Hoa + Hồng Loan + Hỷ Thần)
- **Liêm Trinh, Tham Lang**`,
  },

  {
    id: 'co-qua-tuan-triet-khong-kiep-cao-so',
    title: 'Cô-Quả + Tuần/Triệt + Không Kiếp - Người cao số',
    sao: ['Cô Thần', 'Quả Tú'],
    cung: ['Phu Thê'],
    ketHop: ['Tuần', 'Triệt'],
    doUuTien: 65,
    tomTat: `**Cô-Quả tại Phu Thê + Tuần Triệt + Không Kiếp** — **NGƯỜI CAO SỐ**, dễ
**HÌNH KHẮC CHIA LY** với vợ chồng.

⚡ **Bộ HỒNG KHÔNG CÔ QUẢ:**
- Hồng Loan + Thiên Không + Cô Thần + Quả Tú đầy đủ
- Cảnh báo "**LẮM MỐI TỐI NẰM KHÔNG**"
- **KẾT HÔN MUỘN** để tránh "đứt gánh giữa đường"
- Hoặc **CÔ KHẮC** đến sớm gây đau thương

⚡ **Cảnh báo:**
- Khó **CHUNG SỐNG LÂU DÀI**
- Vợ chồng dễ **XA NHAU MỘT THỜI GIAN RẤT LÂU**
- Một người làm một người phá

⚡ **Hóa giải:**
- **KẾT HÔN MUỘN** sau 30 tuổi
- Tu thân tích đức, làm việc thiện
- Có sao Phúc thiện đi cùng (Quan Phúc, Quang Quý)`,
  },

  {
    id: 'co-qua-cac-sao-che-giai',
    title: 'Các sao chế giải Cô-Quả tại Mệnh',
    sao: ['Cô Thần', 'Quả Tú'],
    cung: ['Mệnh'],
    ketHop: ['Thái Dương'],
    doUuTien: 50,
    tomTat: `**Các sao có khả năng CHẾ GIẢI sự cô độc** của Cô Thần - Quả Tú khi thủ Mệnh:

⚡ **Nhóm sao chế giải mạnh:**
1. **Thái Âm** + **Thái Dương** (Nhật Nguyệt) — ánh sáng xua đi cô độc
2. **Bộ Tam Minh** (Đào Hoa + Hồng Loan + Hỷ Thần) — duyên tình rộn ràng
3. **Liêm Trinh** — đào hoa thứ
4. **Tham Lang** — chính đào hoa

⚡ **Cách dụng:**
- Khi đương số có Cô-Quả thủ Mệnh + những sao trên hội chiếu → **GIẢM TÁC HỌA**
- Vẫn giữ được tinh thần độc lập của Cô-Quả
- Nhưng không rơi vào cô đơn cực độ
- Còn có duyên kết bạn, kết hôn

⚡ **Đặc biệt với nam:** có Cô Thần + Thái Âm (mẹ/vợ sáng) → giảm
"kỵ mẹ kỵ vợ" rõ rệt.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÔ THẦN TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'co-than-tai-menh',
    title: 'Cô Thần tại Mệnh',
    sao: ['Cô Thần'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `**Cô Thần thủ Mệnh** — đại diện **THẦN CÔ ĐƠN, CÔ ĐỘC**.

⚡ **Tính tình:**
- **CÔ ĐỘC, LẠNH LÙNG, KHÓ KHĂN, KHÓ GẦN**
- Không thích **GIAO DU, GIAO THIỆP** với mọi người
- Sống **NỘI TÂM**
- Lúc nào cũng giữ vẻ **CÔ ĐƠN LẠNH LÙNG** không bộc lộ ra ngoài
- Khá **NĂNG ĐỘNG** bên trong

⚡ **Đặc trưng tâm lý:**
- Cuộc sống dễ gặp **VƯỚNG MẮC, TAI HỌA**
- → Có xu hướng **THU MÌNH** để bảo vệ
- Tạo thành **THÓI QUEN**, khó **MỞ LÒNG**

⚠️ **"Nam kỵ Cô":**
- Đặc biệt phát tác mạnh với NAM mệnh
- **KỴ MẸ, KỴ VỢ**
- Yếu tố của **GÓA BỤA**, hại cho **HÔN NHÂN**
- Khó cởi mở, thiếu chủ động trong yêu đương
- Khó gắn bó lâu dài

⚡ **Cách dụng:** Cần học **CHIA SẺ, MỞ LÒNG** để tránh cô độc lạc lõng.`,
  },

  {
    id: 'co-than-tai-phu-mau',
    title: 'Cô Thần tại Phụ Mẫu',
    sao: ['Cô Thần'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Cô Thần tại Phụ Mẫu** — cha mẹ **KHẮT KHE, KHÓ CHỊU, KHÓ TÍNH, KHÓ GẦN**.

⚡ **Đặc trưng:**
- Cha mẹ **KHÓ HỢP TÍNH** nhau, mỗi người một ý
- **CÔ ĐỘC, CÔ ĐƠN**, hay lầm lũi
- Làm những công việc **ĐƠN LẺ MỘT MÌNH**

⚡ **Mối quan hệ với con cái:**
- Ít bạn bè
- Ít **QUAN TÂM CHIA SẺ** với con cái
- Khi có vấn đề thường **TỰ MÌNH GIẢI QUYẾT**
- Không nhờ tới ai

⚠️ **Hội sát bại tinh + Tuần Triệt:**
- **GIẢM NHÂN DUYÊN** cha mẹ
- Cha mẹ **LY HÔN** hoặc **KHÔNG THỌ**
- Một bên yểu mệnh

⚡ Đương số sớm phải **TỰ LỰC CÁNH SINH**, thiếu nương tựa cảm xúc.`,
  },

  {
    id: 'co-than-tai-phuc-duc-ong-manh',
    title: 'Cô Thần tại Phúc Đức - Ông Mãnh linh thiêng',
    sao: ['Cô Thần'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `**Cô Thần tại Phúc Đức** — dòng họ **THIẾU ĐOÀN KẾT**, **MỖI NGƯỜI MỘT
PHƯƠNG**, dù ở gần cũng ít qua lại.

⚡ **Đặc trưng:**
- Họ hàng ít người, **MỖI NGƯỜI LẺ TẺ MỘT NƠI**
- Dòng họ nhiều **NGƯỜI ĐÀN ÔNG CHẾT SỚM**
- Mồ mả **MỖI NGƯỜI MỘT NƠI**, không quy tụ → **MỒ HOANG, NẦM HOANG**
- Trong nhà có người **CÔ ĐỘC, GÓA BỤA**
- Có **BÀ CÔ, ÔNG CHÚ** không lấy vợ/chồng, ở góa

⚡ **Tâm linh đặc biệt:** Cô Thần Phúc = nhà có **"ÔNG MÃNH" LINH THIÊNG**
(người nam mất sớm khi còn trẻ → trở thành Mãnh phù trì).

⚡ **Cách hóa giải:**
- Chú ý **THỜ CÚNG** Ông Mãnh
- Tu phúc, làm việc thiện
- **KẾT HÔN MUỘN** (vì Cô Quả Phúc làm chậm đường lương duyên)`,
  },

  {
    id: 'co-than-tai-dien-trach',
    title: 'Cô Thần tại Điền Trạch',
    sao: ['Cô Thần'],
    cung: ['Điền Trạch'],
    doUuTien: 76,
    tomTat: `**Cô Thần tại Điền Trạch** — người **GIỮ ĐƯỢC NGHIỆP SẢN** cha ông để lại.

⚡ **Đặc trưng:**
- Giữ được **NHÀ CỬA, ĐẤT ĐAI, RUỘNG VƯỜN**
- **GIỎI CHI TIÊU, QUẢN LÝ TÀI SẢN**
- Số có **TAY CẦM GIỮ** về nhà đất
- Nhà đất **VỮNG BỀN**

⚡ **Mặt khác - cách biệt với cộng đồng:**
- **ÍT GIAO DU** với hàng xóm xung quanh
- "Cả năm không nói chuyện một lần"
- Lối sống **"ĐÈN NHÀ AI NẤY RẠNG"**
- Không mặn mà chuyện làng trên xóm dưới

⚡ Gần nhà có kẻ **MÃI KHÔNG CHỊU LẤY VỢ LẤY CHỒNG**.`,
  },

  {
    id: 'co-than-tai-quan-loc',
    title: 'Cô Thần tại Quan Lộc',
    sao: ['Cô Thần'],
    cung: ['Quan Lộc'],
    doUuTien: 75,
    tomTat: `**Cô Thần tại Quan Lộc** — sự nghiệp **ĐỘC LẬP, MỘT MÌNH**.

⚡ **Đặc trưng:**
- Trong công việc có tính **ĐỘC LẬP, MỘT MÌNH**
- **KHÔNG MUỐN DỰA VÀO AI**
- Khả năng **KẾT HỢP KHÔNG CAO**
- Không thích làm **TẬP THỂ**, tiếp xúc nhiều người
- Không muốn **HÙN VỐN CHUNG**

⚠️ **Khó khăn:**
- Khó phát triển **QUAN HỆ XÃ HỘI**
- Gặp khó khăn phải **TỰ MÌNH GIẢI QUYẾT**
- Không có ai giúp đỡ

⚡ **Đặc trưng môi trường:**
- Chênh lệch **GIỚI TÍNH** rõ rệt
- Cô Thần → ít nam, **TOÀN NỮ**
- (Quả Tú → ít nữ, toàn nam)`,
  },

  {
    id: 'co-than-tai-no-boc',
    title: 'Cô Thần tại Nô Bộc',
    sao: ['Cô Thần'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Cô Thần tại Nô Bộc** — chơi bạn **KHÔNG ĐƯỢC BỀN LÂU**.

⚡ **Đặc trưng:**
- Được một thời gian lại dễ **BỎ NHAU ĐI**
- Khó **THÍCH NGHI** với xã hội
- **ÍT BÈ BẠN**
- Giao thiệp **MIỄN CƯỠNG**, thiếu hạnh phúc và niềm tin

⚡ **Chênh lệch giới tính:**
- Cô Thần → **ÍT BẠN NAM**
- (Quả Tú → ít bạn nữ)

⚡ **Đặc trưng:**
- Không được bạn bè, cấp dưới **TIN TƯỞNG**
- Ít chia sẻ, giúp đỡ
- Khó tìm **TRI KỶ TRUNG THÀNH**

⚠️ **Hội Hóa Quyền + Hóa Kỵ + Thất Sát + Phá Quân:**
- Cấp dưới có xu hướng **ÂM MƯU, VƯỢT QUYỀN** trong âm thầm`,
  },

  {
    id: 'co-than-tai-thien-di',
    title: 'Cô Thần tại Thiên Di',
    sao: ['Cô Thần'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Cô Thần tại Thiên Di** — ra ngoài luôn **CẨN THẬN VÀ HẠN CHẾ TIẾP XÚC**.

⚡ **Đặc trưng:**
- Hạn chế tiếp xúc nếu không cần thiết
- Ra ngoài **ÍT ĐƯỢC AI GIÚP ĐỠ**
- Không chủ động giao tiếp
- Chỉ xã giao khi cần thiết

⚡ **Đặc trưng giới tính:**
- Cô Thần → ra ngoài tiếp xúc nhiều với **PHỤ NỮ**
- (Quả Tú → tiếp xúc nhiều với đàn ông)
- Mạng lưới quan hệ thừa **NỮ THIẾU NAM**

⚡ **Cát tinh hội (Văn Xương, Văn Khúc, Tam Thai, Bát Tọa, Phong Cáo,
Khôi Việt):**
- Ra ngoài được mọi người **MẾN CHUỘNG** về tài năng đặc biệt
- Khí chất nổi bật được trọng nể`,
  },

  {
    id: 'co-than-tai-tat-ach',
    title: 'Cô Thần tại Tật Ách',
    sao: ['Cô Thần'],
    cung: ['Tật Ách'],
    doUuTien: 76,
    tomTat: `**Cô Thần tại Tật Ách** — bệnh tật **ĐƠN LẺ**, dễ chết mà không ai biết.

⚡ **Đặc trưng bệnh:**
- Bệnh **ĐƯỜNG RUỘT, HẬU MÔN, BỆNH TRĨ, TIÊU HÓA**
- Bệnh hay **TÁI ĐI TÁI LẠI**

⚡ **Đặc biệt - chết đơn độc:**
- Cô Quả cư Tật → dễ **CHẾT KHÔNG AI BIẾT**
- Mãi lâu sau người thân mới phát hiện
- Hay mắc tai họa, bệnh tật **ĐƠN LẺ MỘT MÌNH**, khi không có ai bên cạnh

⚡ **Đặc trưng ngày chết:**
- Cô Thần cư Tật → ngày chết có **CON RỂ** bên cạnh
- (Quả Tú cư Tật → ngày chết có **CON DÂU** bên cạnh)`,
  },

  {
    id: 'co-than-tai-tai-bach',
    title: 'Cô Thần tại Tài Bạch',
    sao: ['Cô Thần'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Cô Thần tại Tài Bạch** — người **GÌN GIỮ ĐƯỢC TIỀN BẠC**, của cải vững chắc.

⚡ **Đặc trưng:**
- Chi tiêu đồng tiền **HỢP LÝ**
- Tích lũy **ÂM THẦM**, không thích bị hỏi han
- Có **NGUỒN KIẾM TIỀN BÍ MẬT**, không muốn cho ai biết
- Kiếm tiền từ công việc **ĐƠN LẺ MỘT MÌNH**

⚠️ **Đi cùng Vũ Khúc + Lộc Tồn + Đẩu Quân:**
- Dễ thành người **KEO KIỆT, BỦN XỈN**

⚡ **Phối Hỏa Tinh + Địa Kiếp + Song Hao:**
- Tài vận **TỤ RỒI TÁN**
- Không ổn định, khó tích lũy

⚡ **Cẩn thận:** Tính dè dặt, ít chia sẻ → bỏ lỡ cơ hội làm ăn tốt.`,
  },

  {
    id: 'co-than-tai-tu-tuc',
    title: 'Cô Thần tại Tử Tức',
    sao: ['Cô Thần'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Cô Thần tại Tử Tức** — **GIẢM SỐ LƯỢNG CON**, ít con, muộn con, hiếm con.

⚡ **Đặc trưng:**
- Con cái **ÍT CHIA SẺ**, không tin tưởng bố mẹ nhiều
- Sau lớn rồi **KHÔNG Ở GẦN**

⚡ **Chênh lệch giới tính:**
- Cô Thần → **ÍT CON TRAI**
- (Quả Tú → ít con gái)
- Cô Thần thiên năng lượng dương → đương số dễ **CÓ CON TRAI HƠN CON GÁI**

⚡ **Đặc trưng quan hệ:**
- Con dễ **SỐNG XA CHA MẸ**
- Lớn lên **ÍT CHIA SẺ**, thiếu sự tin tưởng gần gũi`,
  },

  {
    id: 'co-than-tai-phu-the',
    title: 'Cô Thần tại Phu Thê',
    sao: ['Cô Thần'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `**Cô Thần tại Phu Thê** — bất lợi cho **HÔN NHÂN**.

⚡ **Đặc trưng:**
- Dù đã "**KẾT TÓC SE DUYÊN**" vẫn cảm thấy **CÔ ĐƠN, LẺ LOI**
- **THIẾU TÌNH THƯƠNG**, thiếu sự thấu hiểu
- Vợ chồng **MỖI NGƯỜI MỘT TÍNH**, khó hòa hợp
- Hay **CÃI NHAU, BẤT ĐỒNG QUAN ĐIỂM**, không ai chịu hiểu ai
- Vợ chồng dễ có lúc **XA NHAU MỘT THỜI GIAN RẤT LÂU**

⚠️ **Bộ HỒNG KHÔNG CÔ QUẢ + Tuần Triệt:**
- "Lắm mối tối nằm không"
- **CAO SỐ, HÌNH KHẮC CHIA LY**
- Nên **KẾT HÔN MUỘN** để tránh đứt gánh giữa đường

⚡ Đặc biệt với **NAM mệnh** ("Nam kỵ Cô") — phát tác mạnh nhất.`,
  },

  {
    id: 'co-than-tai-huynh-de',
    title: 'Cô Thần tại Huynh Đệ',
    sao: ['Cô Thần'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Cô Thần tại Huynh Đệ** — **ÍT ANH CHỊ EM**, có thể là **CON MỘT**.

⚡ **Đặc trưng:**
- Anh chị em từ nhỏ **ÍT QUAN TÂM, CHIA SẺ**
- Lớn lên **MỖI NGƯỜI MỘT NƠI**
- Chả mấy khi **HỎI THĂM, GIÚP ĐỠ** nhau

⚡ **Chênh lệch giới tính:**
- Cô Thần → **ÍT ANH EM TRAI**
- Mình là trai rồi thì dễ có **CHỊ EM GÁI**
- (Quả Tú → ít chị em gái)`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÔ-QUẢ + CÁC SAO XẤU
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'co-qua-phuc-binh-benh-phu-noi-xau',
    title: 'Cô-Quả + Phục Binh + Bệnh Phù + Cự Môn - Bị nói xấu gièm pha',
    sao: ['Cô Thần', 'Quả Tú'],
    ketHop: ['Phục Binh', 'Bệnh Phù', 'Cự Môn'],
    doUuTien: 50,
    tomTat: `**Cô-Quả + Phục Binh + Bệnh Phù + Cự Môn + Điếu Khách + Địa Không** — dễ
**BỊ NÓI XẤU, GIÈM PHA**.

⚡ **Đặc trưng:**
- Tính cách **CÔ LẬP, TRẦM LẶNG, ÍT GIAO TIẾP**
- Dễ tạo **RÀO CẢN** trong đường nhân duyên
- Dễ gặp cảnh **BỊ NÓI XẤU, HIỂU LẦM**
- Bị **CÔNG KÍCH BẰNG LỜI NÓI** sau lưng

⚡ **Hoặc bản thân nói xấu, gièm pha người khác** (do Phục Binh).`,
  },

  {
    id: 'co-qua-hoa-ky-thai-tue-ghen-ghet',
    title: 'Cô-Quả tại Mệnh + Hóa Kỵ + Thái Tuế - Bị ghen ghét ruồng bỏ',
    sao: ['Cô Thần', 'Quả Tú'],
    cung: ['Mệnh'],
    ketHop: ['Hóa Kỵ', 'Thái Tuế'],
    doUuTien: 50,
    tomTat: `**Cô-Quả thủ Mệnh + Điếu Khách + Đà La + Hóa Kỵ + Thái Tuế + Khốc Hư + Bạch Hổ** —
dễ **BỊ GHEN GHÉT, ĐỐ KỴ, RUỒNG BỎ, THẤT SỦNG**.

⚡ **Đặc trưng:**
- Tạo cảm giác **KHÓ GẦN VÀ ĐỘC LẬP**
- Dễ gặp **GHEN GHÉT, ĐỐ KỴ, CẠNH TRANH**

⚡ **Hội thêm Thất Sát + Phá Quân + Đẩu Quân + Tuế Phá:**
- Càng **NỔI BẬT** nhưng **CÔ ĐỘC**
- Khó hòa nhập với môi trường chung

⚡ Trong tình huống thực tế: đương số có Cô-Quả thủ Mệnh + sao tài năng → năng lực vượt
trội nhưng bị đố kỵ bởi chính những người xung quanh.`,
  },
];
