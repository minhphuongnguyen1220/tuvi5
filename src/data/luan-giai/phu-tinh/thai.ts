import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THAI - Thổ.
 *
 * Vị trí THỨ 11 trong Vòng Trường Sinh 12 sao:
 *   Trường Sinh → Mộc Dục → Quan Đới → Lâm Quan → Đế Vượng → Suy →
 *   Bệnh → Tử → Mộ → Tuyệt → THAI → Dưỡng
 *
 * An theo CỤC.
 *
 * Đặc trưng:
 *   - Sau "Tuyệt" tan biến hết → "Thai" là MẦM SỐNG MỚI BẮT ĐẦU XUẤT HIỆN
 *   - Chuẩn bị cho 1 chu kỳ mới, một cuộc sống mới
 *   - Giai đoạn SƠ SINH - bào thai trong bụng mẹ - YẾU ỚT cần được bảo vệ
 *   - Đại diện cho MẢNH ĐẤT YẾU ỚT chưa định hình
 *   - Nhiều lựa chọn nhưng CHƯA HOÀN TOÀN CỐ ĐỊNH
 *   - Phụ thuộc HOÀN TOÀN vào yếu tố bên ngoài
 *
 * 4 bộ phận cơ thể liên kết: RỐN, ÂM HỘ, CỔ TỬ CUNG, BÀO THAI.
 * Đặc biệt ảnh hưởng phụ nữ - sinh lý + sinh sản.
 *
 * Câu phú: "Thai lâm Mệnh vi đa học thiểu thành" - học nhiều mà ít thành.
 *
 * KHÁC Thiên Riêu:
 *   - Thiên Riêu = tình yêu mê muội về CẢM XÚC
 *   - Thai = ham muốn THỂ XÁC, sa đọa nặng hơn
 */
export const luanGiai_Thai: DoanLuanGiai[] = [
  {
    id: 'thai-tinh-chat-chung',
    title: 'Thai - Đặc tính chung',
    sao: ['Thai'],
    doUuTien: 33,
    tomTat: `**Thai** — phụ tinh **DÂM TINH + TÁI SINH**, vị trí **THỨ 11** vòng Trường
Sinh.

**Ngũ hành:** **Thổ**.

⚡ **Đặc tính:**
- **PHONG LƯU, KHOÁI LẠC**
- **SẮC DỤC, U MÊ**
- **SINH NỞ, TÁI SINH** thêm mới
- **THIẾU TỰ TIN, DỄ BỊ LỪA GẠT**
- Chủ sự **THỤ THAI, SINH NỞ**

⚡ **Vai trò:**
- Sau "**TUYỆT**" tan biến hết → "**THAI**" là MẦM SỐNG MỚI bắt đầu xuất hiện
- Chuẩn bị cho **1 CHU KỲ MỚI**
- Giai đoạn **SƠ SINH** - bào thai trong bụng mẹ - **YẾU ỚT** cần bảo vệ
- Đại diện **MẢNH ĐẤT YẾU ỚT** chưa định hình
- **PHỤ THUỘC HOÀN TOÀN** vào yếu tố bên ngoài

⚡ **4 bộ phận cơ thể liên kết:**
- **RỐN, ÂM HỘ, CỔ TỬ CUNG, BÀO THAI**
- Bộ phận **SINH SẢN** ở phụ nữ gắn kết nhiều nhất
- Cũng có ý nghĩa với **SINH LÝ CỦA CẢ 2 GIỚI**

⚡ **KHÁC Thiên Riêu:**
- **Thiên Riêu** = tình yêu **MÊ MUỘI VỀ CẢM XÚC**
- **Thai** = ham muốn **THỂ XÁC, SA ĐỌA NẶNG HƠN**

⚠️ **Cảnh báo:** Khi sao Thai gặp **TUẦN TRIỆT** án ngữ hay nhiều sát bại tinh
→ con sinh ra dễ **THIẾU THÁNG, SINH KHÓ, ỐM YẾU QUẶT QUẸO**.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP TÍNH ÁI
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thai-dao-hong-dam-vat-chat-tinh-than',
    title: 'Thai + Đào Hoa / Hồng Loan - Ham ái tình vật chất + tinh thần',
    sao: ['Thai'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 60,
    tomTat: `**Thai + Đào Hoa / Hồng Loan** — sự ham thích **ÁI TÌNH** cả về **VẬT CHẤT
VÀ TINH THẦN**.

⚡ **Đặc trưng:**
- Sự ham thích ái tình về **VẬT CHẤT** và **TINH THẦN**
- **COI THƯỜNG ĐẠO LÝ**
- Lấy việc **YÊU, CHO VÀ HƯỞNG** làm lạc thú ở đời

⚠️ **Hệ quả:**
- Đời sống tình cảm **PHÓNG TÚNG**
- Ham mê **THÚ VUI XÁC THỊT**
- Dễ rơi vào **MỐI QUAN HỆ NGOÀI LUỒNG**`,
  },

  {
    id: 'thai-xuong-khuc-lang-man-dam-dat',
    title: 'Thai + Xương Khúc - Lãng mạn dâm dật',
    sao: ['Thai'],
    ketHop: ['Văn Xương', 'Văn Khúc'],
    doUuTien: 55,
    tomTat: `**Thai + Văn Xương + Văn Khúc** — người thích sự **LÃNG MẠN**, có tính **DÂM
DẬT, DỤC TÍNH CAO**.

⚡ **Đặc trưng:**
- Thích **LÃNG MẠN, BAY BỔNG**
- Tính **DÂM DẬT** rõ
- **DỤC TÍNH CAO**
- Văn chương ướt át, thường viết về **TÌNH ÁI DỤC**`,
  },

  {
    id: 'thai-rieu-dam-dat-benh-hoan',
    title: 'Thai + Thiên Riêu - Dâm dật bệnh hoạn',
    sao: ['Thai'],
    ketHop: ['Thiên Riêu'],
    doUuTien: 60,
    tomTat: `⚠️ **Thai + Thiên Riêu** — tính **DÂM DẬT MẠNH**, sinh lý cao dễ dẫn đến **BỆNH
HOẠN**.

⚡ **Đặc trưng:**
- Tính **DÂM DẬT MẠNH**
- **SINH LÝ CAO**
- Dễ dẫn đến **BỆNH HOẠN**
- Bộ Thai-Riêu là 2 dâm tinh + bộ phận sinh dục cộng hưởng

⚠️ **Hệ quả:**
- Phong tình bệnh hoa liễu
- Quan hệ phóng túng → bệnh tình dục`,
  },

  {
    id: 'thai-khong-kiep-bi-cuong-buc',
    title: 'Thai + Không Kiếp - Bị cưỡng bức, hoang thai',
    sao: ['Thai'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 60,
    tomTat: `⚠️ **Thai + Địa Không + Địa Kiếp** — bị **HIẾP DÂM** dẫn đến **HOANG THAI**, dễ
**PHÁ THAI, SẨY THAI, HƯ THAI**.

⚠️ **Đặc trưng:**
- Bị **HIẾP DÂM** dẫn đến **CÓ HOANG THAI**
- Dễ **PHÁ THAI, SẨY THAI, HƯ THAI**
- Cũng là trường hợp **BẠO DÂM**

(Xem entries chuyên biệt cho cung Tử Tức + nữ mệnh.)`,
  },

  {
    id: 'thai-khong-kiep-bi-cuong-buc-nu',
    title: '⚠️ Thai + Không Kiếp - Nữ mệnh đặc biệt nguy hiểm',
    sao: ['Thai'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    gioiTinh: 'Nữ',
    doUuTien: 55,
    tomTat: `⚠️ **Thai + Địa Không + Địa Kiếp - Nữ mệnh:** đặc biệt nguy hiểm với
phụ nữ — nguy cơ bị hiếp dâm dẫn đến hoang thai, hoặc tự nguyện trong quan
hệ rồi bị bỏ rơi.`,
  },

  {
    id: 'thai-khong-kiep-tai-tu-tuc',
    title: 'Thai + Không Kiếp tại Tử Tức - Trụy thai, sát con',
    sao: ['Thai'],
    cung: ['Tử Tức'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `⚠️ **Thai + Địa Không + Địa Kiếp tại Tử Tức** — bất lợi mang thai, dễ trụy
thai, sát con.

⚡ **Đặc trưng:**
- **BẤT LỢI** trong quá trình mang thai
- **TRỤY THAI, SẨY THAI, SINH NỞ KHÓ KHĂN**
- Con thường **CHẾT TRONG QUÁ TRÌNH SINH NỞ**, hoặc **SÁT CON**`,
  },

  {
    id: 'thai-phuc-vuong-tuong-luoi-tinh',
    title: 'Thai + Phục + Vượng + Tướng - Lưới tình đau khổ',
    sao: ['Thai'],
    ketHop: ['Phục Binh', 'Đế Vượng', 'Thiên Tướng'],
    doUuTien: 60,
    tomTat: `⚠️ **Thai + Phục Binh + Đế Vượng + Thiên Tướng** — vướng vào **LƯỚI TÌNH ĐAU
KHỔ**.

⚠️ **Đặc trưng:**
- Vướng vào **LƯỚI TÌNH ĐAU KHỔ**
- Là người **THẤT TIẾT**
- Bị **CƯỠNG BỨC**
- Có **TƯ THÔNG** (quan hệ vụng trộm)

(Xem entries chuyên biệt cho từng cung Phu Thê / Huynh Đệ.)`,
  },

  {
    id: 'thai-phuc-vuong-tuong-tai-phu-the',
    title: 'Thai + Phục + Vượng + Tướng tại Phu Thê - Có con trước hôn nhân',
    sao: ['Thai'],
    cung: ['Phu Thê'],
    ketHop: ['Phục Binh', 'Đế Vượng', 'Thiên Tướng'],
    doUuTien: 70,
    tomTat: `⚠️ **Thai + Phục Binh + Đế Vượng + Thiên Tướng tại Phu Thê:**
- Đương số dễ có con **TRƯỚC HÔN NHÂN**
- Hoặc có **CON RIÊNG** rồi mới lấy nhau
- Con cái có **TẬT BẨM SINH**`,
  },

  {
    id: 'thai-phuc-vuong-tuong-tai-huynh-de',
    title: 'Thai + Phục + Vượng + Tướng tại Huynh Đệ - Anh chị em dị bào',
    sao: ['Thai'],
    cung: ['Huynh Đệ'],
    ketHop: ['Phục Binh', 'Đế Vượng', 'Thiên Tướng'],
    doUuTien: 70,
    tomTat: `⚠️ **Thai + Phục Binh + Đế Vượng + Thiên Tướng tại Huynh Đệ:**
- Có anh chị em **DỊ BÀO, HƯ HỎNG**
- Gặp các vấn đề **TAI NẠN TRINH TIẾT**`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP TỐT
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thai-moc-duc-long-phuong-tin-vui',
    title: 'Thai + Mộc Dục + Long Phượng - Tin vui sinh nở',
    sao: ['Thai'],
    ketHop: ['Mộc Dục', 'Long Trì', 'Phượng Các'],
    doUuTien: 55,
    tomTat: `**Thai + Mộc Dục + Long Trì + Phượng Các** — là hạn **SINH ĐẺ, CÓ TIN VUI**.

⚡ **Đặc trưng:**
- Hạn **SINH ĐẺ, CÓ TIN VUI**
- Thêm **THÀNH VIÊN MỚI** trong gia đình
- Phúc khí **HƯNG VƯỢNG**

⚠️ **Cảnh báo:** Sao Thai gặp **ĐỊA KIẾP** thì sinh con khó hoặc thai có **DỊ
TẬT BẨM SINH**.`,
  },

  {
    id: 'thai-thanh-long-thien-hy-con-quy-tu',
    title: 'Thai + Thanh Long + Thiên Hỷ - Con quý tử',
    sao: ['Thai'],
    ketHop: ['Thanh Long', 'Thiên Hỷ'],
    doUuTien: 60,
    tomTat: `**Thai + Thanh Long + Thiên Hỷ** — có thai **SINH RA CON ĐẸP, TỐT LÀNH**.

⚡ **Đặc trưng:**
- Sinh ra **CON ĐẸP, TỐT LÀNH**
- Quá trình sinh nở **THUẬN LỢI**
- Mẹ tròn con vuông
- Gia đình **YÊN ẤM**, hỷ sự nối tiếp hỷ sự
- Là điềm **ĐẠI CÁT** cho việc con cái`,
  },

  {
    id: 'thai-nguyet-duc-cau-tu',
    title: 'Thai + Nguyệt Đức tại Tử Tức - Con cầu tự',
    sao: ['Thai'],
    cung: ['Tử Tức'],
    ketHop: ['Nguyệt Đức'],
    doUuTien: 55,
    tomTat: `**Thai + Nguyệt Đức tại Tử Tức** — **CON CẦU TỰ MỚI CÓ**.

⚡ **Đặc trưng:**
- Bản mệnh phải **THÀNH TÂM CẦU TỰ** mới mong sinh được quý tử
- Khó có con tự nhiên
- Cần đến chùa khấn nguyện, làm phúc tích đức`,
  },

  {
    id: 'thai-nhat-nguyet-sinh-doi',
    title: 'Thai + Nhật Nguyệt - Sinh đôi, con dị bào',
    sao: ['Thai'],
    ketHop: ['Thái Dương', 'Thái Âm'],
    doUuTien: 55,
    tomTat: `**Thai + Thái Dương + Thái Âm** — có **CON SINH ĐÔI**, hoặc **CON DỊ BÀO**.

⚡ **Đặc trưng:**
- Có **CON SINH ĐÔI**
- Hoặc **CON DỊ BÀO** (cùng cha khác mẹ / cùng mẹ khác cha)
- Bộ Nhật Nguyệt + Thai = mang thai đôi`,
  },

  {
    id: 'thai-co-qua-giam-con',
    title: 'Thai + Cô Thần + Quả Tú - Giảm số lượng con',
    sao: ['Thai'],
    ketHop: ['Cô Thần', 'Quả Tú'],
    doUuTien: 55,
    tomTat: `**Thai + Cô Thần + Quả Tú** — **GIẢM SỐ LƯỢNG CON CÁI**.

⚡ **Đặc trưng:**
- **GIẢM SỐ LƯỢNG** con cái
- Cô-Quả là cặp ám tinh chế giảm sinh nở
- Thai + Cô-Quả = ít con muộn con
- Đặc biệt nặng với đương số đã có sẵn Cô-Quả ở vị trí khác`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // THAI TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thai-tai-menh',
    title: 'Thai tại Mệnh',
    sao: ['Thai'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `**Thai thủ Mệnh** — **NHU CẦU SINH LÝ + TÌNH DỤC CAO**, ham mê sắc dục.

⚡ **Cơ thể:**
- Thai liên kết với **RỐN, ÂM HỘ, CỔ TỬ CUNG, BÀO THAI**
- Có ý nghĩa về **VẤN ĐỀ SINH LÝ** của cả 2 giới (không chỉ nữ)

⚡ **Tính tình:**
- **HAM MÊ CÁC THÚ VUI**
- **NHẸ DẠ DỄ TIN NGƯỜI**
- **DỄ BỊ LÔI KÉO**
- Tính cách **KHÔNG QUYẾT ĐOÁN**
- **ĐAM MÊ SẮC DỤC**
- **KHÓ LÀM NÊN CÔNG DANH**, thi cử khó đỗ đạt
- Đại diện cho **NHU CẦU SINH LÝ CAO**
- Chủ về **GIAO HỢP XÁC THỊT** giữa nam và nữ
- **HAM MÊ SẮC DỤC, MÊ GÁI MÊ TRAI**

⚠️ **Tình yêu:**
- KHÔNG tìm kiếm **TÌNH YÊU ĐÍCH THỰC** đúng nghĩa hòa hợp tâm hồn
- Chỉ chú trọng **THỎA MÃN NHU CẦU SINH LÝ, DÂM DẬT, THẤP HÈN**
- Phải thỏa mãn cả khía cạnh **VẬT CHẤT**
- Khi nhu cầu sinh lý quá cao → ảnh hưởng **THỂ CHẤT VÀ TÂM HỒN**

⚠️ **So sánh với Thiên Riêu:** Thai NẶNG về sự **SA ĐỌA** nhiều hơn Riêu.

⚡ **Câu phú "Thai lâm Mệnh vi đa học thiểu thành":**
- Hay **LƯỠNG LỰ, CẢ THÈM CHÓNG CHÁN**
- Cái gì cũng muốn học nhưng **KHÔNG KIÊN TRÌ**
- **DỄ THAY ĐỔI** khi có cái mới hay hơn xuất hiện
- Hay **BỎ NGANG GIỮA CHỪNG**
- Việc học nhiều nhưng **KẾT QUẢ KHÔNG TRỌN VẸN**
- Sự nghiệp "**CÔNG DÃ TRÀNG**", làm nhiều mà ít nên chuyện`,
  },

  {
    id: 'thai-tai-phu-mau',
    title: 'Thai tại Phụ Mẫu',
    sao: ['Thai'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Thai tại Phụ Mẫu** — bố mẹ **KHÔNG KIÊN ĐỊNH**, có con trước hôn nhân.

⚡ **Đặc trưng:**
- Bố mẹ là người **TÍNH CÁCH KHÔNG KIÊN ĐỊNH**
- **DỄ TIN NGƯỜI**, dễ bị người khác **LỪA**
- Số có **CON TRƯỚC HÔN NHÂN**
- Sống thiên về **CẢM XÚC**, hay **MỀM LÒNG, CẢ TIN**
- Quyết định theo **CẢM TÍNH**

⚠️ **Hội thêm Đào Hoa, Hồng Loan, Hình Riêu, Không Kiếp, Hóa Kỵ:**
- Bố mẹ có tính **ĐÀO HOA, LĂNG NHĂNG**
- Dễ có **MỐI QUAN HỆ NGOÀI LUỒNG**
- Bố mẹ dễ **LY TÁN**
- Có người **THỨ BA CHEN NGANG**`,
  },

  {
    id: 'thai-tai-phuc-duc',
    title: 'Thai tại Phúc Đức',
    sao: ['Thai'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `**Thai tại Phúc Đức** — phúc phần **CHƯA PHÁT**, gốc rễ tổ tiên chưa vững.

⚡ **Đặc trưng:**
- **PHÚC PHẦN, MỒ MẢ TỔ TIÊN CHƯA ĐƯỢC PHÁT**
- Cần **CHÚ TRỌNG CHĂM SÓC, QUAN TÂM** đến mồ mả
- **LÀM VIỆC THIỆN NHIỀU** để tích nhiều phước đức
- Trong gia tộc có người **CHỬA HOANG**, có **CON RƠI BÊN NGOÀI**

⚡ **Lời khuyên:**
- Con cháu trong tộc cần **CHUYÊN TÂM TÍCH ĐỨC**
- **CHĂM LO HƯƠNG KHÓI, MỒ MẢ TỔ TIÊN** cẩn thận
- Để giữ **VẬN KHÍ**, bồi đắp **PHÚC PHẦN**

⚠️ **Hội Không Kiếp, Hóa Kỵ, Thiên Riêu:**
- Dòng họ dễ vướng **THỊ PHI**
- Gia đạo **LỤC ĐỤC**
- **THIẾU SỰ HÒA THUẬN**`,
  },

  {
    id: 'thai-tai-dien-trach',
    title: 'Thai tại Điền Trạch',
    sao: ['Thai'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Thai tại Điền Trạch** — nơi ở **TÁI ĐỊNH CƯ, HAY THAY ĐỔI**.

⚡ **Đặc trưng:**
- Nơi ở thường là các khu **TÁI ĐỊNH CƯ**
- Đất ở là **ĐẤT NGHĨA TRANG, NGHĨA ĐỊA** xây dựng lên
- Gần nhà thường có **TỤ ĐIỂM ĂN CHƠI**, gần **BỆNH VIỆN PHỤ SẢN**
- Tính cách **DỄ THAY ĐỔI, LƯỠNG LỰ**
- Thường xuyên phải **THAY ĐỔI NHÀ Ở, CƠ QUAN LÀM VIỆC**
- **BẤT ỔN** trong chuyện nhà cửa, đất đai

⚡ **Cát tinh nâng đỡ:**
- Vẫn có cơ hội tích lũy **ĐẤT ĐAI CÓ GIÁ TRỊ**

⚠️ **Sát tinh hội:**
- Đề phòng **TRANH CHẤP**
- Gặp **PHONG THỦY BẤT LỢI**
- **KHÔNG THỂ YÊN ỔN** dài lâu`,
  },

  {
    id: 'thai-tai-quan-loc',
    title: 'Thai tại Quan Lộc',
    sao: ['Thai'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `**Thai tại Quan Lộc** — công danh **GIẢM ĐÀ TIẾN THÂN**, hay lưỡng lự.

⚡ **Đặc trưng:**
- Con đường công danh **GIẢM ĐÀ TIẾN THÂN**
- Hay có tính **LƯỠNG LỰ**
- **KHÓ KHĂN** trong việc đưa ra **QUYẾT ĐỊNH** khi có nhiều cơ hội đến
- Cách sống "**ĐỨNG NÚI NÀY TRÔNG NÚI NỌ**"
- Thấy gì cũng muốn thử nhưng **NHANH NẢN**
- Làm nhiều cũng **KHÓ BỀN**, **DẬM CHÂN TẠI CHỖ**

⚡ **Hội thêm sao phúc thiện** (Quang Quý, Thiên Phúc, Thiên Đức):
- Số làm việc liên quan đến **SINH NỞ**
- **BÁC SĨ PHỤ SẢN, HỘ SINH, BÀ ĐỠ**

⚠️ **Hội nhiều sát bại tinh:**
- Dễ liên quan đến **MẶT TRÁI XÃ HỘI**
- Có **MỐI TÌNH CẢM NGOÀI LUỒNG**
- Sự nghiệp dễ vướng **TAI TIẾNG**`,
  },

  {
    id: 'thai-tai-no-boc',
    title: 'Thai tại Nô Bộc',
    sao: ['Thai'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Thai tại Nô Bộc** — bạn bè **HAY THAY ĐỔI**, không bền lâu.

⚡ **Đặc trưng:**
- Đương số hay **THAY ĐỔI BẠN BÈ**
- Tình bạn **KHÔNG THÂN THIẾT BỀN LÂU**
- Đông anh chị em - những người **KHÁ GIẢ, CÓ ĐỊA VỊ TÀI CHÍNH TỐT**, là
  người **TỐT TÍNH**
- Tính tình dễ kết giao nhưng khó **GẮN BÓ SÂU SẮC**
- Dễ nảy sinh **HIỂU LẦM HOẶC RẠN NỨT**

⚠️ **Hội Đào Hoa, Riêu, Kỵ, Không Kiếp:**
- Dễ rơi vào tình trạng **NGOẠI TÌNH SAU KHI KẾT HÔN**
- Mối quan hệ chuyển biến **TIÊU CỰC**`,
  },

  {
    id: 'thai-tai-thien-di',
    title: 'Thai tại Thiên Di',
    sao: ['Thai'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Thai tại Thiên Di** — dễ vướng **TÌNH MỘT ĐÊM**, quan hệ ngắn hạn.

⚡ **Đặc trưng:**
- Dễ rơi vào, cuốn vào các **MỐI QUAN HỆ TÌNH DỤC NGẮN HẠN**
- **TÌNH MỘT ĐÊM**

⚡ **Bản thân có Đế Vượng tọa thủ:**
- Đương số có **NGOẠI HÌNH XINH ĐẸP HẤP DẪN**
- **THÂN HÌNH ĐẪY ĐÀ**
- Ra ngoài có **NHIỀU NGƯỜI THÍCH**
- Có **SỨC HÚT MẠNH**
- Dễ **DÍNH VÀO TÌNH ÁI, SẮC DỤC**

⚠️ **Cảnh báo:** Những chuyện ái tình thể xác hoặc các mối quan hệ không
trong sạch có thể nảy sinh bất cứ lúc nào.`,
  },

  {
    id: 'thai-tai-tat-ach',
    title: 'Thai tại Tật Ách',
    sao: ['Thai'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `**Thai tại Tật Ách** — bệnh **ĐƯỜNG SINH DỤC**, sinh đẻ khó khăn.

⚡ **Đặc trưng:**
- Dễ mắc các bệnh liên quan đến **ĐƯỜNG SINH DỤC**
- **SINH ĐẺ KHÓ KHĂN**
- Sinh con ra có **DỊ TẬT**
- Vấn đề **SỨC KHỎE SINH SẢN**, đặc biệt phái nữ
- **KHÓ THỤ THAI**, dễ **SẢY THAI** hoặc thai yếu

⚠️ **Đồng cung Không Kiếp, Hóa Kỵ:**
- Dễ bị bệnh **BUỒNG TRỨNG, TỬ CUNG**
- **RỐI LOẠN NỘI TIẾT**
- Ảnh hưởng **KHẢ NĂNG SINH SẢN** lâu dài

⚡ **Mặt nhẹ:**
- Hay bị **ỐM VẶT**
- Nhưng **MAU KHỎI**`,
  },

  {
    id: 'thai-tai-tai-bach',
    title: 'Thai tại Tài Bạch',
    sao: ['Thai'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Thai tại Tài Bạch** — tài chính **KHÔNG ỔN ĐỊNH**, công việc thay đổi.

⚡ **Đặc trưng:**
- **KHÔNG ỔN ĐỊNH** về mặt tài chính
- Công việc **THƯỜNG THAY ĐỔI**
- Tiền **ĐẾN RỒI LẠI ĐI**
- **KHÓ TÍCH LŨY** lâu dài

⚠️ **Hội Đào Hoa, Riêu, Kỵ, Không Kiếp:**
- Dễ mang tiền **TIÊU XÀI** cho:
  - **NHU CẦU GIẢI TRÍ**
  - **THỎA MÃN SẮC DỤC**
- **DÙNG THÂN XÁC ĐỂ KIẾM TIỀN**

⚡ **Lời khuyên:** Cần biết **GIỮ MÌNH** trước cám dỗ, tránh vì phút nông nổi
mà đánh đổi sự ổn định lâu dài.`,
  },

  {
    id: 'thai-tai-tu-tuc',
    title: 'Thai tại Tử Tức',
    sao: ['Thai'],
    cung: ['Tử Tức'],
    doUuTien: 78,
    tomTat: `**Thai tại Tử Tức** — thử thách về **SINH SẢN VÀ NUÔI DƯỠNG CON CÁI**.

⚡ **Bộ kết hợp tại Tử Tức:**
- **Thai + Không Kiếp** = bất lợi mang thai, **TRỤY THAI, SẨY THAI, SINH NỞ
  KHÓ KHĂN**, con thường chết trong sinh nở hoặc **SÁT CON**
- **Thai + Nguyệt Đức** = **CON CẦU TỰ MỚI CÓ**
- **Thai + Nhật Nguyệt** = có **CON SINH ĐÔI**, **CON DỊ BÀO**
- **Thai + Cô Thần + Quả Tú** = **GIẢM SỐ LƯỢNG** con cái
- **Thai + Phục Binh + Đế Vượng + Thiên Tướng** = có con riêng rồi mới lập
  gia đình, có con dị bào`,
  },

  {
    id: 'thai-tai-phu-the',
    title: 'Thai tại Phu Thê',
    sao: ['Thai'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `**Thai tại Phu Thê** — người hôn phối **PHONG LƯU TÀI TỬ**, thích vui chơi.

⚡ **Đặc trưng:**
- Người hôn phối **THÍCH VUI CHƠI, VĂN NGHỆ**
- **THÍCH TỤ TẬP**
- Người **PHONG LƯU TÀI TỬ**
- Dễ bị cuốn theo **THÚ VUI TIỆC TÙNG**
- Hoặc **MỐI QUAN HỆ NGOÀI XÃ HỘI**

⚡ **Bộ kết hợp tại Phu Thê:**
- **Thai + Đào Hoa + Thiên Riêu** = **TIỀN DÂM HẬU THÚ**, xu hướng **HƯỞNG
  THỤ TÌNH DỤC**, ăn nằm với nhau rồi mới cưới, vợ chồng lẳng lơ, **NGOẠI
  TÌNH**
- **Thai + Phục Binh + Đế Vượng + Thiên Tướng** = mệnh dễ có **CON TRƯỚC
  HÔN NHÂN**, có **CON RIÊNG** rồi mới lấy nhau, con cái có **TẬT BẨM SINH**

⚠️ **Mặt trái:**
- Nguy cơ **NGOẠI TÌNH**
- Hôn nhân **ĐỔ VỠ** nếu thiếu bao dung và cam kết`,
  },

  {
    id: 'thai-tai-huynh-de',
    title: 'Thai tại Huynh Đệ',
    sao: ['Thai'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Thai tại Huynh Đệ** — có **ANH CHỊ EM DỊ BÀO, NUÔI, SINH ĐÔI**.

⚡ **Đặc trưng:**
- Có **ANH CHỊ EM SINH ĐÔI**
- **ANH CHỊ EM NUÔI**
- **ANH CHỊ EM DỊ BÀO**
- Mối quan hệ gia đình có phần **PHỨC TẠP**
- Dễ gặp tình huống có **CON RIÊNG** từ mối quan hệ trước
- Hoặc **ANH EM NUÔI** không cùng huyết thống

⚡ **Bộ kết hợp:**
- **Thai + Phục Binh + Đế Vượng + Thiên Tướng** = anh chị em **DỊ BÀO, HƯ
  HỎNG**, vấn đề **TAI NẠN TRINH TIẾT**
- **Thai + Đào Hoa** = anh chị em xu hướng **DÂM DẬT, LĂNG LOÀN, CHỬA HOANG**`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // HÓA GIẢI THAI
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thai-hoa-giai',
    title: 'Hóa giải sao Thai - Giai đoạn ươm mầm',
    sao: ['Thai'],
    doUuTien: 40,
    tomTat: `**Hóa giải sao Thai** — Thai nằm giữa **TUYỆT** và **DƯỠNG** — là giai đoạn
**ƯƠM MẦM** chuẩn bị cho bứt phá.

⚡ **Bản chất:**
- Thai **KHÔNG MANG TÍNH XẤU TUYỆT ĐỐI**
- Là giai đoạn **ƯƠM MẦM** chuẩn bị cho **BỨT PHÁ VỀ SAU**

⚡ **Cần lưu ý:**
- **KHÔNG VỘI VÀNG HÀNH ĐỘNG** khi tâm chưa ổn, dự định còn mơ hồ
- **TẠM GÁC LẠI** những chuyện như đầu tư, cưới hỏi, ra quyết định trọng
  đại nếu chưa có cát tinh hỗ trợ
- **TẬP TRUNG RÈN LUYỆN BẢN THÂN**, chăm sóc sức khỏe
- Thai = thời điểm thích hợp để **PHỤC HỒI**, chuẩn bị cho chu kỳ phát
  triển kế tiếp

⚡ **Ví dụ:** Người vừa nghỉ việc 5 năm văn phòng (hạn Tuyệt) → trong hạn
Thai nảy sinh ý định chuyển hướng viết lách, học nghề tay trái — âm thầm
theo đuổi sẽ gặt hái thành quả tương lai.`,
  },
];
