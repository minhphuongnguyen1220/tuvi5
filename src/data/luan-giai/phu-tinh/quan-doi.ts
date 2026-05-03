import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO QUAN ĐỚI - Kim, Quý Tinh + Quyền Tinh.
 *
 * Vị trí THỨ 3 trong Vòng Trường Sinh 12 sao:
 * Trường Sinh: Mộc Dục: QUAN ĐỚI: Lâm Quan: Đế Vượng: Suy
 * Bệnh: Tử: Mộ: Tuyệt: Thai: Dưỡng
 *
 * An theo CỤC (cùng cách an Trường Sinh).
 *
 * Đặc trưng:
 * - Giai đoạn SAU DẬY THÌ, BẮT ĐẦU ĐI LÀM
 * - Chủ về CHỨC VỊ, CÔNG DANH, QUYỀN HÀNH, DANH TIẾNG, THI KHOA CỬ
 * - Hai mặt nổi bật:
 * • Cát: gặp sao tốt: đỗ đạt thành danh, có quyền uy
 * • Hung: gặp sát bại tinh: ví như "DÂY THẮT CỔ" tự trói buộc, càng làm càng loạn
 * - Hình tượng: cái đai lưng, sợi dây thừng, dây cuộn cổ
 */
export const luanGiai_QuanDoi: DoanLuanGiai[] = [
  {
    id: 'quan-doi-tinh-chat-chung',
    title: 'Quan Đới - Đặc tính chung',
    sao: ['Quan Đới'],
    doUuTien: 33,
    tomTat: `**Quan Đới** — phụ tinh **QUÝ TINH + QUYỀN TINH**, vị trí **THỨ 3** vòng
Trường Sinh.

**Ngũ hành:** **Kim**.

**Đặc tính:**
- Giai đoạn **SAU DẬY THÌ, BẮT ĐẦU ĐI LÀM**
- Chủ về **CHỨC VỊ, CÔNG DANH, QUYỀN HÀNH**
- **DANH TIẾNG, THI KHOA CỬ**
- Hình tượng: **CÁI ĐAI LƯNG, SỢI DÂY THỪNG**

**Vai trò:**
- Đứng sau Mộc Dục — giai đoạn trưởng thành đầu tiên ra đời làm việc
- Là sao **CÁT** khi đi cùng cát tinh
- Là sao **HUNG** khi đi cùng sát bại tinh — biến thành "**DÂY THẮT CỔ**"

**Hai mặt:**
- Gặp Hóa Khoa, Hóa Quyền, Văn Xương, Văn Khúc, Long Trì, Phượng Các, Hoa
  Cái, Giải Thần, Khôi Việt: **DỄ ĐỖ ĐẠT, LÀM NÊN SỰ NGHIỆP**
- Gặp Địa Không, Địa Kiếp, Tuần, Triệt: **CÔNG DANH KHÔNG BỀN**, không
  thọ, vất vả thời trẻ, mồ côi
- Gặp nhiều ám tinh: **RẮC RỐI, PHIỀN NHIỄU, NGĂN TRỞ**
- Gặp nhiều sát bại tinh: **TỰ TRÓI TỰ BUỘC**, "ôm rơm nặng bụng",
  càng chạy càng chết, càng làm càng loạn`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP TỐT
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'quan-doi-cat-tinh-do-dat',
    title: 'Quan Đới + Hóa Khoa/Quyền + Xương Khúc + Long Phượng + Khôi Việt - Đỗ đạt',
    sao: ['Quan Đới'],
    ketHop: ['Hóa Khoa', 'Văn Xương'],
    doUuTien: 70,
    tomTat: `**Quan Đới + Hóa Khoa / Hóa Quyền + Văn Xương / Văn Khúc + Long Trì /
Phượng Các + Hoa Cái + Giải Thần + Thiên Khôi / Thiên Việt** — bộ **ĐỖ ĐẠT
LÀM NÊN SỰ NGHIỆP**.

**Đặc trưng:**
- **Văn Xương + Văn Khúc** = trí tuệ, văn chương
- **Hóa Khoa** = thi cử đỗ đạt
- **Hóa Quyền** = quyền chức
- **Long Phượng** = kim bảng đề tên
- **Hoa Cái + Giải Thần** = quý tinh phù trợ
- **Khôi Việt** = quý nhân nâng đỡ

**Hệ quả:**
- Dễ **ĐỖ ĐẠT KHOA CỬ**
- Sự nghiệp **THĂNG TIẾN, RỰC RỠ**
- Được **TRỌNG DỤNG** trong giới chuyên môn`,
  },

  {
    id: 'quan-doi-tu-phu-thanh-long-van-tinh-van-chuong',
    title: 'Quan Đới + Tử Phủ + Thanh Long + Văn Tinh + Xương Khúc - Văn chương từ nhỏ',
    sao: ['Quan Đới'],
    ketHop: ['Tử Vi', 'Thanh Long', 'Văn Xương'],
    doUuTien: 65,
    tomTat: `**Quan Đới + Tử Vi / Thiên Phủ + Thanh Long + Văn Tinh + Văn Xương / Văn
Khúc** — hợp cách **VĂN CHƯƠNG THI PHÚ TỪ NHỎ TUỔI**.

**Câu phú:** *"Long cốt liên Quan, hiên ngang lăng miếu"* — Thanh Long
liên kết với Quan Đới làm cách rạng rỡ.

**Đặc trưng:**
- Thông minh thiên bẩm, văn chương rạng rỡ từ tuổi nhỏ
- Bài viết, thơ phú có tiếng từ thiếu thời
- **Tử Phủ** = đế tinh nâng đỡ
- **Thanh Long** = rồng xanh học vấn
- **Văn Tinh** = nét văn nhân`,
  },

  {
    id: 'quan-doi-thien-nguyet-duc-tu-bi',
    title: 'Quan Đới + Thiên Đức + Nguyệt Đức - Tâm tính từ bi',
    sao: ['Quan Đới'],
    ketHop: ['Thiên Đức', 'Nguyệt Đức'],
    doUuTien: 55,
    tomTat: `**Quan Đới + Thiên Đức + Nguyệt Đức** — chủ sự **TÂM TÍNH TỪ BI**.

**Đặc trưng:**
- Đối nhân xử thế **RẤT TỐT**
- Được sự **KÍNH NỂ** của mọi người
- Tứ Đức chế bớt tính ham danh ham quyền của Quan Đới: biến thành **HIỀN
  MINH ĐOAN CHÍNH**
- Hoá ra một bậc **CHÍNH NHÂN QUÂN TỬ**`,
  },

  {
    id: 'quan-doi-dao-hong-cong-danh-som',
    title: 'Quan Đới + Đào Hoa + Hồng Loan - Công danh từ sớm',
    sao: ['Quan Đới'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 55,
    tomTat: `**Quan Đới + Đào Hoa / Hồng Loan** — biểu tượng cho **CÔNG DANH TỪ SỚM**.

**Đặc trưng:**
- **NỔI TIẾNG SỚM**, dễ thành danh khi tuổi còn trẻ
- Có **NHIỀU NGƯỜI QUÝ MẾN, HÂM MỘ**
- Chuyển đặc tính dâm tà của Đào Hồng thành **DUYÊN VINH HIỂN**
- Đặc biệt hợp người làm trong giới giải trí, truyền thông`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP HUNG - "DÂY THẮT CỔ"
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'quan-doi-dao-guom-sung-dan',
    title: 'Quan Đới + Hỏa/Linh/Kiếp/Không/Kình/Đà/Hình - Nạn đao gươm',
    sao: ['Quan Đới'],
    ketHop: ['Hỏa Tinh', 'Linh Tinh', 'Địa Kiếp', 'Địa Không', 'Kình Dương', 'Đà La', 'Thiên Hình'],
    doUuTien: 65,
    tomTat: `**Quan Đới + Hỏa Tinh + Linh Tinh + Địa Kiếp + Địa Không + Kình Dương +
Đà La + Thiên Hình** — gia chủ dễ bị **NẠN ĐAO GƯƠM, SÚNG ĐẠN, ĐIỆN GIẬT**.

**Đặc trưng:**
- Quan Đới ám chỉ **CÁI CHẾT BẤT THÌNH LÌNH**, không lường trước
- Càng cố chạy càng mau tới
- Càng gỡ càng rối
- Thủ ở **CUNG NÀO CŨNG ĐỀU ÁM CHỈ SỰ CHẾT CHÓC, BẤT ĐẮC KỲ TỬ**

**Cảnh báo:** Đây là cách cục cực xấu — cần Tứ Đức, Quan Phúc, Tuần
Triệt giải bớt.`,
  },

  {
    id: 'quan-doi-sat-bai-tinh-day-that-co',
    title: 'Quan Đới + nhiều sát bại tinh - Dây thắt cổ',
    sao: ['Quan Đới'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 60,
    tomTat: `**Quan Đới + nhiều sát bại tinh + không có sao tốt cứu giải** — biến thành
**SỢI DÂY THẮT CỔ**, tự trói tự ải mình.

**Đặc trưng:**
- "**ÔM RƠM NẶNG BỤNG**" — càng chạy càng chết, càng làm càng loạn
- Hay làm việc **BẤT CHÍNH, ĐẦU CƠ TÍCH TRỮ**
- **KHINH ĐỜI** rồi bị **PHÁ GIA BẠI SẢN**
- Mang **TIẾNG XẤU** cho cả gia đình
- Như **SỢI DÂY CUỐN CỔ** — càng làm càng không thoát ra

**Hệ quả nặng:**
- **TỰ SÁT, TREO CỔ**
- Tai họa đau đớn cả sự nghiệp lẫn danh dự
- Tranh chấp **KIỆN TỤNG**, **PHÁ SẢN**, vướng **VÒNG LAO LÝ**

**Hóa giải:** Cần Quan Phúc, Tứ Đức, Tuần Triệt, Khôi Việt, Quang Quý
giải bớt.`,
  },

  {
    id: 'quan-doi-linh-hoa-cang-thang',
    title: 'Quan Đới + Linh Tinh + Hỏa Tinh - Tâm trí bất ổn',
    sao: ['Quan Đới'],
    ketHop: ['Linh Tinh', 'Hỏa Tinh'],
    doUuTien: 55,
    tomTat: `**Quan Đới + Linh Tinh + Hỏa Tinh** — đương số dễ rơi vào **CĂNG THẲNG
ĐẦU ÓC, LO ÂU TRIỀN MIÊN**.

**Đặc trưng:**
- Càng **SUY NGHĨ CÀNG RỐI REN, MÙ MỊT**
- Tâm trí **BẤT ĐỊNH**, mất phương hướng
- "**NGÀY VUI CHẲNG TRỌN, ĐÊM NGỦ CHẲNG YÊN**"
- Sa vào mớ **BÒNG BONG CẢM XÚC**, áp lực vô hình

**Hóa giải:** Tu tập tịnh tâm, thiền định, Tứ Đức Quan Phúc giảm bớt.`,
  },

  {
    id: 'quan-doi-khong-kiep-tuan-triet-cong-danh-khong-ben',
    title: 'Quan Đới + Không Kiếp + Tuần Triệt - Công danh không bền',
    sao: ['Quan Đới'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 55,
    tomTat: `**Quan Đới + Địa Không + Địa Kiếp + Tuần Triệt** — số mệnh **KHÔNG ĐƯỢC
THỌ**, công danh **KHÔNG BỀN**.

**Đặc trưng:**
- Thời trẻ tuổi thường **VẤT VẢ**
- **XA CÁCH NGƯỜI THÂN**, hoặc **MỒ CÔI**
- Làm gì cũng **HAY GẶP TRỞ NGẠI, ĐIỀU OAN TRÁI**
- Dễ có **ĐAU BỆNH, THƯƠNG TÍCH**
- Công danh **DỞ DANG**, mây gió phiêu bồng

**Hóa giải:** Quan Phúc, Tứ Đức, Khôi Việt giải nhẹ.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // QUAN ĐỚI TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'quan-doi-tai-menh',
    title: 'Quan Đới tại Mệnh',
    sao: ['Quan Đới'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `**Quan Đới thủ Mệnh** — biểu tượng của **QUYỀN UY DANH VỌNG**, dễ thành
đạt.

**Tính cách:**
- **HAM DANH, HAM CHỨC QUYỀN**
- Hay **ÔM ĐỒM** công việc — phụ giúp đương số có **QUYỀN UY VÀ CHỨC VỊ**
- Khao khát **ĐỊA VỊ** xã hội

**Mặt tích cực** (gặp cát tinh — Hóa Khoa, Hóa Quyền, Văn Xương, Văn
Khúc, Long Trì, Phượng Các):
- Càng dễ **THÀNH CÔNG**
- Được **TRỌNG DỤNG** trong giới chuyên môn

**Mặt tiêu cực** (gặp Địa Không, Địa Kiếp, Tuần, Triệt + sát bại tinh):
- Danh vọng trở thành **GÁNH NẶNG**
- Sự nghiệp **CHÔNG GAI** — càng cố gắng càng bế tắc
- Tự **CHUỐC LẤY TAI HỌA**

**Cảnh báo phúc thọ:**
- Quan Đới ám chỉ sự **CHẾT BẤT THÌNH LÌNH**, không lường trước
- Khi gặp Hỏa, Linh, Kiếp, Không, Kình, Đà, Thiên Hình: dễ bị nạn đao
  gươm, súng đạn, điện giật
- Thủ ở **CUNG NÀO** cũng đều ám chỉ chết chóc, **BẤT ĐẮC KỲ TỬ**`,
  },

  {
    id: 'quan-doi-tai-phu-mau',
    title: 'Quan Đới tại Phụ Mẫu',
    sao: ['Quan Đới'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Quan Đới tại Phụ Mẫu** — cha mẹ là người **TRỌNG CÔNG DANH SỰ NGHIỆP**.

**Đặc trưng:**
- Cha mẹ "**VAI MANG CHÍ LỚN**", thường đặt công việc làm ưu tiên hàng đầu
- **QUAN TÂM NHIỀU ĐẾN SỰ NGHIỆP**
- Hay **ÔM ĐỒM NHIỀU VIỆC** bên ngoài về nhà

**Mặt tích cực** (cát tinh + lục cát tinh):
- Cha mẹ có **SỰ NGHIỆP ỔN ĐỊNH**
- Lời nói có **TRỌNG LƯỢNG**, được người đời kính nể

**Mặt tiêu cực** (Thiên Hình, Không Kiếp, Kình Đà, sát bại tinh):
- Cha mẹ phải **LAO TÂM KHỔ TỨ** vì mưu sinh
- Vì lo toan mà **BÀO MÒN SỨC KHỎE**
- **GIẢM THỌ** của cha mẹ
- Dễ vướng vào **VÒNG LAO LÝ**`,
  },

  {
    id: 'quan-doi-tai-phuc-duc',
    title: 'Quan Đới tại Phúc Đức',
    sao: ['Quan Đới'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `**Quan Đới tại Phúc Đức** — bản thân sinh ra trong **DÒNG HỌ HIẾU HỌC, NHIỀU
NGƯỜI LÀM QUAN**.

**Đặc trưng:**
- Trong dòng tộc nhiều người **THÀNH ĐẠT, LÀM QUAN, GIỮ VAI TRÒ THEN CHỐT**
  trong xã hội
- Bản thân khi sinh ra có **NHIỀU THUẬN LỢI** về sức khỏe và giáo dục
- Có **TRÁCH NHIỆM CAO**

**Hợp cát tinh** (Văn Xương, Văn Khúc, Hóa Khoa, Thai Phụ, Phong Cáo):
- Dòng tộc có **TRUYỀN THỐNG HIẾU HỌC**
- Nhiều người **ĐỖ ĐẠT, LÀM QUAN**
- Con cháu đời sau hưởng phúc khí dồi dào nhờ được truyền dạy lấy
  **CHỮ NGHĨA LÀM GỐC, ĂN Ở CÓ HẬU**, sống đúng đạo nghĩa`,
  },

  {
    id: 'quan-doi-tai-dien-trach',
    title: 'Quan Đới tại Điền Trạch',
    sao: ['Quan Đới'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Quan Đới tại Điền Trạch** — **AN CƯ THUẬN LỢI**, nhà gần nơi làm việc, văn
phòng.

**Đặc trưng:**
- Nơi ở thường gần **CHỐN CÔNG SỞ, CƠ QUAN HÀNH CHÍNH**
- Hàng xóm là **CÔNG CHỨC, TRÍ THỨC VĂN MINH**

**Mặt tích cực** (Khôi Việt, Hóa Quyền hội chiếu):
- Chỗ ở **KHANG TRANG**
- Hàng xóm là người **QUYỀN QUÝ**, công chức cấp cao
- Gần **NƠI CÔNG QUYỀN** (toà án, viện kiểm sát, sở công an...)

**Mặt tiêu cực** (sát bại tinh):
- Nơi ở **PHONG THỦY XẤU**
- Gần nhà có **NGƯỜI TREO CỔ**, dễ xảy ra **TANG SỰ**`,
  },

  {
    id: 'quan-doi-tai-quan-loc',
    title: 'Quan Đới tại Quan Lộc',
    sao: ['Quan Đới'],
    cung: ['Quan Lộc'],
    doUuTien: 80,
    tomTat: `**Quan Đới tại Quan Lộc** — vị trí **HỢP CÁCH** của Quan Đới — ôm nặng trọng
trách, dễ thành danh.

**Đặc trưng:**
- Là người **ĐAM MÊ, NHIỀU TRÁCH NHIỆM**
- Hay **ÔM ĐỒM CÔNG VIỆC** về mình
- **NHẬN PHẦN KHÓ** về mình
- Tâm sự nghiệp **MẠNH**

**Mặt tích cực** (cát tinh):
- Sự nghiệp **HANH THÔNG**
- **SỚM NGÀY THÀNH DANH**
- Dễ **ĐỖ ĐẠT, THÀNH DANH**

**Mặt tiêu cực** (sát bại tinh, ám tinh):
- Con đường công danh học tập **VẤT VẢ**
- Gặp **NHIỀU TRỞ NGẠI**
- Càng học càng rối, càng làm càng loạn
- Trong công việc dễ vướng mắc **TAI HỌA**
- Nhiều khi quá trọng tình nghĩa, vì **GIÚP NGƯỜI MÀ RƯỚC HỌA VÀO THÂN**
- Hoặc để xử lý việc này lại **VƯỚNG MẮC VÀO VIỆC KHÁC**`,
  },

  {
    id: 'quan-doi-tai-no-boc',
    title: 'Quan Đới tại Nô Bộc',
    sao: ['Quan Đới'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Quan Đới tại Nô Bộc** — chủ về **TRÁCH NHIỆM**, hay giúp đỡ ôm đồm việc
của bạn.

**Đặc trưng:**
- Mang **TINH THẦN TRÁCH NHIỆM CAO**
- Sống có **NGHĨA CÓ TÌNH**
- Sẵn sàng **MANG VIỆC THIÊN HẠ VÀO THÂN**
- Hay **GIA THÊM VIỆC** của bạn bè vào người mình

**Sát bại tinh hội** (Kình Đà, Hóa Kỵ, Riêu, Hỏa Linh):
- Dễ rơi vào cảnh "**LÀM ƠN MẮC OÁN**"
- "**MUA DÂY BUỘC MÌNH**"
- Giúp người mà **CHẲNG ĐƯỢC BÁO ƠN**
- Mang **HỌA VÀO THÂN**`,
  },

  {
    id: 'quan-doi-tai-thien-di',
    title: 'Quan Đới tại Thiên Di',
    sao: ['Quan Đới'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Quan Đới tại Thiên Di** — bản mệnh hay **LO VIỆC THIÊN HẠ**, "ăn cơm nhà
vác tù và hàng tổng".

**Đặc trưng:**
- Hay **QUAN TÂM, ÔM ĐỒM VIỆC BÊN NGOÀI**
- Tham công tiếc việc với cả **TẬP THỂ VÀ XÃ HỘI**
- Đứng ra xử lý đủ chuyện lớn nhỏ trong cộng đồng
- Bản thân hơi **BẢO THỦ, CHẬM TIẾN**

**Sát tinh hội:**
- Ra ngoài **HAY MẮC HỌA**, chạy không nổi
- **KHÔNG HỢP ĐI XA**
- Bị **DẪN DỤ, DẮT MŨI** bởi người khác
- Bị kẻ khác **THAO TÚNG**
- Mang họa chỉ vì **NGHĨA KHÍ QUÁ ĐÀ**`,
  },

  {
    id: 'quan-doi-tai-tat-ach',
    title: 'Quan Đới tại Tật Ách',
    sao: ['Quan Đới'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `**Quan Đới tại Tật Ách** — **TAI HỌA BẤT NGỜ**, càng chống đỡ càng ràng buộc.

**Hình tượng:**
- Quan Đới tựa như **CÁI DÂY ĐAI LƯNG, CUỘN DÂY THỪNG**
- Khi bệnh tật, tai họa tới **CÀNG CHỐNG ĐỠ CÀNG CHẠY CÀNG BỊ THẮT LẠI**
- **KHÓ THOÁT**, ám chỉ những tai họa **BẤT NGỜ, ĐỘT NGỘT KHÓ TRÁNH**

**Đặc trưng:**
- **TAI BAY VẠ GIÓ** đến mà không kịp trở tay
- Càng **CHỐNG ĐỠ CÀNG THÊM RÀNG BUỘC**

**Hóa giải** (Thiên Giải, Thiên Quan, Thiên Phúc):
- Bệnh tật có đeo bám vẫn có thể **TÌM ĐƯỢC PHƯƠNG PHÁP ĐIỀU TRỊ PHÙ HỢP**
- Hoặc **TÌM ĐƯỢC THẦY GIỎI ĐÚNG LÚC**`,
  },

  {
    id: 'quan-doi-tai-tai-bach',
    title: 'Quan Đới tại Tài Bạch',
    sao: ['Quan Đới'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Quan Đới tại Tài Bạch** — bản mệnh **GIỎI TẠO DỰNG SỰ NGHIỆP**, kiếm tiền
từ nhiều nguồn.

**Đặc trưng:**
- **HAM MÊ KIẾM TIỀN**
- Làm **NHIỀU VIỆC MỘT LÚC**
- Có **NHIỀU NGUỒN TIỀN**
- Có **NĂNG LỰC TÀI CHÍNH** tốt
- Không ngại **LĂN XẢ** để tạo dòng tiền ổn định
- Công việc dễ liên quan tới **NGÀNH TÀI CHÍNH**

**Mặt tích cực** (Thái Âm, Thiên Phủ, Vũ Khúc, Hóa Lộc, Lộc Tồn):
- "**TRỜI CHO THỜI VẬN**"
- Kiếm tiền **THUẬN LỢI**
- Cuộc sống **DƯ DẢ**

**Mặt tiêu cực** (sát bại tinh):
- Là người **THAM LAM**
- Dễ vì tiền mà **GÂY RA TAI HỌA**
- Bước nhầm đường — phải trả giá bằng **DANH DỰ, SỨC KHỎE, PHÁP LÝ**`,
  },

  {
    id: 'quan-doi-tai-tu-tuc',
    title: 'Quan Đới tại Tử Tức',
    sao: ['Quan Đới'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Quan Đới tại Tử Tức** — con cái **SỚM TỰ LẬP VÀ TIẾN THỦ**.

**Đặc trưng:**
- Con cái **CHĂM CHỈ, GIỎI GIANG**
- **HAM MUỐN CHỨNG TỎ NĂNG LỰC** bản thân
- Chịu khó **PHẤN ĐẤU**
- Có **CHÍ TIẾN THỦ CAO**, sớm tự lập

**Sát tinh hội:**
- Về già vẫn phải **LO LẮNG, BUỒN PHIỀN VÌ CON CÁI**
- Như **MẮC QUAI Ở CỔ, KHÔNG THOÁT RA ĐƯỢC**
- Hiếm khi được **AN NHÀN**
- Đau đáu **LO ÂU, PHIỀN MUỘN VÌ CON**`,
  },

  {
    id: 'quan-doi-tai-phu-the',
    title: 'Quan Đới tại Phu Thê',
    sao: ['Quan Đới'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `**Quan Đới tại Phu Thê** — **HÔN NHÂN THUẬN LỢI BỀN VỮNG**, người hôn phối
thành đạt.

**Đặc trưng:**
- Người bạn đời **CÓ NĂNG LỰC, GIỎI GIANG, DANH TIẾNG**
- Bản thân **ÔM VÒNG SINH-VƯỢNG-MỘ** — tốt

**Hợp cát tinh** (Khôi Việt, Thanh Long, Ân Quang, Thiên Quý):
- Cách cục được nâng đỡ
- Hôn nhân **THUẬN BUỒM XUÔI GIÓ**
- Vợ chồng cùng **ĐỒNG LÒNG DỰNG XÂY TỔ ẤM**`,
  },

  {
    id: 'quan-doi-tai-huynh-de',
    title: 'Quan Đới tại Huynh Đệ',
    sao: ['Quan Đới'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Quan Đới tại Huynh Đệ** — anh chị em **CHÍ HƯỚNG TỰ LẬP**.

**Đặc trưng:**
- Anh chị em trong gia đình dễ có người **THÀNH ĐẠT, CÓ TIẾNG TĂM**
- Tự mình nỗ lực và nhanh chóng **GẶT HÁI THÀNH TỰU**
- Gia đạo **THƠM LÂY**
- Mối quan hệ giữa anh chị em **GẮN KẾT**

**Sát bại tinh hội:**
- Bản thân hay phải **LO TOAN**
- **NHIỀU VƯỚNG MẮC** với anh chị em
- Phiền muộn không dứt vì **VIỆC NHÀ** anh em`,
  },
];
