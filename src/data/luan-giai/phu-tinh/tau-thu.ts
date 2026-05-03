import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO TẤU THƯ - Kim, vòng Lộc Tồn (vị trí 6)
 * Sao chủ về tài ăn nói, viết lách, văn chương, hùng biện
 */
export const luanGiai_TauThu: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung sao Tấu Thư
  // ============================================================
  {
    id: 'tau-thu-tinh-chat-chung',
    title: 'Tấu Thư - Đặc tính chung',
    sao: ['Tấu Thư'],
    doUuTien: 30,
    tomTat: `**Tấu Thư** — phụ tinh trong **vòng Lộc Tồn** (vị trí thứ **6**).

**Ngũ hành:** **Kim**.

**Đặc tính:** **bằng sắc, ấn tín, đơn từ** — chủ về **văn chương, viết lách,
giấy tờ pháp lý**.

**Ý nghĩa cốt lõi:**
- **Tài năng ăn nói**, khả năng **viết lách**
- Giỏi **lý luận, hùng biện**
- **Văn chương, kiếm tiền** từ ngôn ngữ
- Lời nói **NGỌT NGÀO**, khả năng **thuyết phục, hùng biện** giỏi: văn hay
  chữ tốt: dễ tạo **sức hút lớn**

**Đặc trưng nghề nghiệp:** sao của **nhà diễn thuyết, thuyết khách** (như
Trương Lương), **ca sĩ, kịch sĩ, giáo sư, ký giả, họa sĩ, thi sĩ**.

**Đặc tính TÂM LINH:** Tấu Thư + **Tam Thai + Bát Tọa + Hỏa Linh + Kình
Dương**: chủ về **TÂM LINH NHẸ** (có duyên với tâm linh, đồng cốt nhẹ).`,
  },

  // ============================================================
  // 2. Tấu Thư tại Mệnh
  // ============================================================
  {
    id: 'tau-thu-tai-menh',
    title: 'Tấu Thư tại Mệnh - Tài ăn nói, văn chương thuyết phục',
    sao: ['Tấu Thư'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `**Tấu Thư thủ Mệnh:** người **HÙNG BIỆN, am hiểu sâu rộng, giao
tiếp tốt**, **THÔNG MINH, văn hay chữ tốt**.

**Năng khiếu thiên bẩm:**
- **Nói chuyện, giảng dạy, diễn thuyết** trước đám đông
- Viết những đoạn văn **xúc tích, cảm động** mọi người
- **Có tư chất KỊCH SĨ** dù không hẳn là ca kịch sĩ
- Tài về **viết lách và kịch**

**Phù hợp:** **giảng dạy, truyền thông, luật**, các vị trí đòi hỏi **biểu
đạt xuất chúng**.

Khi đi với **các sao văn học khác**: vừa **có học** vừa có **tài vận dụng
sáng tạo, chuyên nghiệp**.`,
  },

  // ============================================================
  // 3. NGUYÊN TẮC ĐẶC BIỆT: Tấu Thư thủ Mệnh + Quan Phủ Di đối chiếu
  // ============================================================
  {
    id: 'tau-thu-quan-phu-di-doi-chieu',
    title: 'Tấu Thư thủ Mệnh - Quan Phủ đối chiếu (kiện tụng)',
    sao: ['Tấu Thư'],
    cung: ['Mệnh'],
    ketHop: ['Quan Phủ'],
    doUuTien: 60,
    tomTat: `**NGUYÊN TẮC ĐẶC BIỆT về Tấu Thư:**

Vì quy luật an sao trong vòng Lộc Tồn: **Tấu Thư thủ Mệnh LUÔN có Quan Phủ
xung chiếu** về Mệnh.

**Hệ quả:**
- Khi **ra ngoài** dễ **VƯỚNG VÀO KIỆN TỤNG**
- Cần đặc biệt **cẩn thận trong giấy tờ, thủ tục**, đặc biệt khi **đi xa**

- Đây là quy luật bắt buộc, không thể tránh — chỉ có thể giảm bằng cách **hành
xử cẩn trọng**, làm việc rõ ràng, có hợp đồng minh bạch.`,
  },

  // ============================================================
  // 4. Tấu Thư + Văn Xương / Văn Khúc - lời thuyết phục cao
  // ============================================================
  {
    id: 'tau-thu-xuong-khuc',
    title: 'Tấu Thư + Văn Xương / Văn Khúc - Lời thuyết phục cao',
    sao: ['Tấu Thư'],
    ketHop: ['Văn Xương', 'Văn Khúc'],
    doUuTien: 65,
    tomTat: `**Tấu Thư + Văn Xương / Văn Khúc:** lời nói **dễ nghe, thu hút**,
có **tính thuyết phục CAO, tinh tế**.

- Khi nói/viết đều có sức thuyết phục mạnh, dễ tạo thiện cảm với người đối
diện. Văn chương + ngôn ngữ kết hợp: bậc thầy biểu đạt.`,
  },

  // ============================================================
  // 5. Tấu Thư + Thái Tuế - hùng biện trạng sư thẩm phán
  // ============================================================
  {
    id: 'tau-thu-thai-tue',
    title: 'Tấu Thư + Thái Tuế - Trạng sư, thẩm phán, chính trị gia',
    sao: ['Tấu Thư'],
    ketHop: ['Thái Tuế'],
    doUuTien: 70,
    tomTat: `**Tấu Thư + Thái Tuế:** **NÓI RẤT HAY**, khả năng **HÙNG BIỆN
GIỎI**.

**Phù hợp các nghề:**
- **Trạng sư, thẩm phán**
- **Luật gia, chính trị gia**
- **Giáo sư, nhà nghiên cứu**

Có thể tham gia **VIẾT LUẬT, QUỐC SÁCH** của đất nước.

- Năng lực **lập luận và phản biện** càng thêm **sắc bén** — như người mang
**bút son** đi đến đâu để lại dấu son.`,
  },

  // ============================================================
  // 6. Tấu Thư + Lưu Hà - ăn nói nho nhã thanh cao
  // ============================================================
  {
    id: 'tau-thu-luu-ha',
    title: 'Tấu Thư + Lưu Hà - Ăn nói nho nhã thanh cao',
    sao: ['Tấu Thư'],
    ketHop: ['Lưu Hà'],
    doUuTien: 60,
    tomTat: `**Tấu Thư + Lưu Hà:** người **ăn nói dễ nghe**, **khôn ngoan, nho
nhã, thanh cao**.

- Lời nói trôi chảy như dòng nước (Lưu Hà), không phô trương nhưng sâu sắc và
thuyết phục.`,
  },

  // ============================================================
  // 7. Tấu Thư + Phượng Các / Long Trì / Nhật Nguyệt - giác quan nhạy bén
  // ============================================================
  {
    id: 'tau-thu-giac-quan',
    title: 'Tấu Thư + các sao chủ giác quan',
    sao: ['Tấu Thư'],
    doUuTien: 55,
    tomTat: `**Tấu Thư + sao chủ giác quan**: giác quan **NHẠY BÉN**.

- Tấu Thư + các sao này tạo người vừa **giỏi ngôn ngữ** vừa có **giác quan
nhạy bén** — phù hợp các nghề cần **quan sát + biểu đạt** (báo chí, văn học,
nghệ thuật biểu diễn).`,
  },

  {
    id: 'tau-thu-giac-quan-phuong-cac',
    title: 'Tấu Thư + Phượng Các - thính tai',
    sao: ['Tấu Thư'],
    ketHop: ['Phượng Các'],
    doUuTien: 50,
    tomTat: `**Tấu Thư + Phượng Các:** **THÍNH TAI** (thính giác tốt).`,
  },

  {
    id: 'tau-thu-giac-quan-long-tri',
    title: 'Tấu Thư + Long Trì - thính mũi',
    sao: ['Tấu Thư'],
    ketHop: ['Long Trì'],
    doUuTien: 50,
    tomTat: `**Tấu Thư + Long Trì:** **THÍNH MŨI**, khứu giác sắc bén.`,
  },

  {
    id: 'tau-thu-giac-quan-am-duong',
    title: 'Tấu Thư + Thái Âm + Thái Dương - mắt sáng',
    sao: ['Tấu Thư'],
    ketHop: ['Thái Âm', 'Thái Dương'],
    doUuTien: 50,
    tomTat: `**Tấu Thư + Thái Âm + Thái Dương:** **MẮT SÁNG, tinh anh** (thị giác tốt).`,
  },

  // ============================================================
  // 8. Tấu Thư tại Phụ Mẫu
  // ============================================================
  {
    id: 'tau-thu-tai-phu-mau',
    title: 'Tấu Thư tại Phụ Mẫu',
    sao: ['Tấu Thư'],
    cung: ['Phụ Mẫu'],
    doUuTien: 72,
    tomTat: `**Tấu Thư cư Phụ Mẫu:** cha mẹ **CÓ HỌC THỨC**, tài **ăn nói** và
**viết lách** tốt — làm nghề **giảng dạy, nhà văn, nhà thơ**.

Gia đình **GIÀU CÓ**, cha mẹ **vui tính**, có **khí chất thanh cao, lương
thiện**.`,
  },

  {
    id: 'tau-thu-phu-mau-quang-quy-khoi-viet',
    title: 'Tấu Thư Phụ Mẫu + Ân Quang / Thiên Quý / Khôi Việt - cha mẹ địa vị xã hội',
    sao: ['Tấu Thư'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Ân Quang', 'Thiên Quý', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 67,
    tomTat: `**Tấu Thư Phụ Mẫu + Ân Quang / Thiên Quý / Khôi Việt:** cha mẹ có **địa vị xã hội**, giao lưu tốt với người **quyền quý**.`,
  },

  {
    id: 'tau-thu-phu-mau-sat-bai-tinh',
    title: 'Tấu Thư Phụ Mẫu + Sát bại tinh - kiện cáo chia ly',
    sao: ['Tấu Thư'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 67,
    tomTat: `**Tấu Thư Phụ Mẫu + Sát bại tinh:** ảnh hưởng **nhân duyên cha mẹ** — **kiện cáo, chia ly**: Tấu Thư lúc này chính là **TỜ GIẤY LY HÔN, đơn thưa kiện**.`,
  },

  // ============================================================
  // 9. Tấu Thư tại Phúc Đức
  // ============================================================
  {
    id: 'tau-thu-tai-phuc-duc',
    title: 'Tấu Thư tại Phúc Đức',
    sao: ['Tấu Thư'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `**Tấu Thư cư Phúc Đức:** **mồ mả, nhà thờ họ tộc HÌNH BÚT**: phát
**VĂN**.

Dòng họ nhiều người **HỌC THỨC CAO**, xuất phát từ **dòng dõi NHO GIA**, có
**truyền thống hiếu học**, **tư chất thông minh, đỗ đạt**.

**Nhà thờ họ, phần mộ tổ tiên** mang hình ảnh **bút nghiên, văn bia, câu
đối** — gìn giữ và tôn vinh **tinh thần học đạo**.`,
  },

  {
    id: 'tau-thu-phuc-duc-xuong-khuc-long-phuong',
    title: 'Tấu Thư Phúc Đức + Xương Khúc / Long Phượng - dòng họ đề cao chữ nghĩa',
    sao: ['Tấu Thư'],
    cung: ['Phúc Đức'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Long Trì', 'Phượng Các'],
    doUuTien: 70,
    tomTat: `**Tấu Thư Phúc Đức + Văn Xương / Văn Khúc / Long Trì / Phượng Các:** dấu hiệu dòng họ đề cao **CHỮ NGHĨA** — sự **truyền thừa văn hóa sâu đậm**, **gia phong nghiêm cẩn**, đề cao **nề nếp, lễ nghi**.`,
  },

  // ============================================================
  // 10. Tấu Thư tại Điền Trạch
  // ============================================================
  {
    id: 'tau-thu-tai-dien-trach',
    title: 'Tấu Thư tại Điền Trạch',
    sao: ['Tấu Thư'],
    cung: ['Điền Trạch'],
    doUuTien: 72,
    tomTat: `**Tấu Thư cư Điền:** nhà có **NHIỀU SÁCH VỞ, BÚT GIẤY**, treo
nhiều **TRANH, CHỮ** — không gian sống như **"thư phòng thu nhỏ"**.

Tấu Thư hành **Kim**, chủ về **giấy tờ pháp lý**: ám chỉ nhà có **giấy tờ
sổ đỏ** dễ bị dính vào **tranh chấp, kiện tụng**.`,
  },

  {
    id: 'tau-thu-dien-trach-van-tinh',
    title: 'Tấu Thư Điền Trạch + Văn tinh - gia chủ yêu chữ nghĩa',
    sao: ['Tấu Thư'],
    cung: ['Điền Trạch'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Lưu Niên Văn Tinh', 'Hóa Khoa'],
    doUuTien: 67,
    tomTat: `**Tấu Thư Điền Trạch + Văn Xương / Văn Khúc / Lưu Niên Văn Tinh:** gia chủ **YÊU CHỮ NGHĨA**, treo nhiều câu đối, tranh chữ.`,
  },

  {
    id: 'tau-thu-dien-trach-sat-tinh',
    title: 'Tấu Thư Điền Trạch + Sát tinh - tranh chấp giấy tờ',
    sao: ['Tấu Thư'],
    cung: ['Điền Trạch'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 67,
    tomTat: `**Tấu Thư Điền Trạch + Sát tinh:** hàm ý **bất lợi về nhà đất** — cần cẩn trọng **tranh chấp sổ đỏ, giấy tờ sở hữu, quyền thừa kế**.`,
  },

  // ============================================================
  // 11. Tấu Thư tại Quan Lộc
  // ============================================================
  {
    id: 'tau-thu-tai-quan-loc',
    title: 'Tấu Thư tại Quan Lộc',
    sao: ['Tấu Thư'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `**Tấu Thư cư Quan:** công việc liên quan **ăn nói và viết lách** —
**chuyên viết, ban hành văn bản**.`,
  },

  {
    id: 'tau-thu-quan-loc-thai-tue-hinh-tuong-an',
    title: 'Tấu Thư Quan + Thái Tuế + Thiên Hình + Thiên Tướng + Quốc Ấn - soạn thảo luật',
    sao: ['Tấu Thư'],
    cung: ['Quan Lộc'],
    ketHop: ['Thái Tuế', 'Thiên Hình', 'Thiên Tướng', 'Quốc Ấn'],
    doUuTien: 73,
    tomTat: `**Tấu Thư Quan Lộc + Thái Tuế + Thiên Hình + Thiên Tướng + Quốc Ấn:** **SOẠN THẢO LUẬT**, các **văn bản, công văn** — chính sự, công quyền.`,
  },

  {
    id: 'tau-thu-quan-loc-dieu-vu-co-dao-hong',
    title: 'Tấu Thư Quan + Diêu + Vũ + Cơ + Đào + Hồng - khiếu ca hát',
    sao: ['Tấu Thư'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Riêu', 'Vũ Khúc', 'Thiên Cơ', 'Đào Hoa', 'Hồng Loan'],
    doUuTien: 73,
    tomTat: `**Tấu Thư Quan Lộc + Thiên Riêu + Vũ Khúc + Thiên Cơ + Đào Hoa + Hồng Loan:** có **khiếu hài hước** và **CA HÁT** tốt.`,
  },

  {
    id: 'tau-thu-quan-loc-viet-quang-quy-co-hong',
    title: 'Tấu Thư Quan + Việt + Quang + Quý + Cơ + Hồng - trai cận thần gái cung phi',
    sao: ['Tấu Thư'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Việt', 'Ân Quang', 'Thiên Quý', 'Thiên Cơ', 'Hồng Loan'],
    doUuTien: 73,
    tomTat: `**Tấu Thư Quan Lộc + Thiên Việt + Ân Quang + Thiên Quý + Thiên Cơ + Hồng Loan:** **TRAI CẬN THẦN, GÁI CUNG PHI** — cách quý phái, làm việc cận kề người quyền cao.`,
  },

  // ============================================================
  // 12. Tấu Thư tại Nô Bộc
  // ============================================================
  {
    id: 'tau-thu-tai-no-boc',
    title: 'Tấu Thư tại Nô Bộc',
    sao: ['Tấu Thư'],
    cung: ['Nô Bộc'],
    doUuTien: 70,
    tomTat: `**Tấu Thư cư Nô:** bạn bè **TỐT**, có **tài ăn nói** — bạn bè
nhiều người là **CA SĨ, GIÁO SƯ, NHÀ THUYẾT PHÁP**.

**Lời khuyên:** giữ thế **chủ động**, có **giấy tờ ràng buộc rõ ràng** để
tránh rắc rối hợp tác.`,
  },

  {
    id: 'tau-thu-no-boc-kinh-da-ky-sat',
    title: 'Tấu Thư Nô + Kình Đà / Hóa Kỵ / Sát bại tinh - bạn bè vu khống',
    sao: ['Tấu Thư'],
    cung: ['Nô Bộc'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp', 'Hóa Kỵ'],
    doUuTien: 65,
    tomTat: `**Tấu Thư Nô Bộc + Kình Đà / Hóa Kỵ / Sát bại tinh:** dễ bị bạn bè/đồng nghiệp/cấp dưới **KIỆN CÁO, VU KHỐNG**, **phản bội, bịa đặt**.`,
  },

  // ============================================================
  // 13. Tấu Thư tại Thiên Di
  // ============================================================
  {
    id: 'tau-thu-tai-thien-di',
    title: 'Tấu Thư tại Thiên Di',
    sao: ['Tấu Thư'],
    cung: ['Thiên Di'],
    doUuTien: 72,
    tomTat: `**Tấu Thư cư Di:** ra ngoài hay **lo toan**, làm công việc liên
quan **giấy tờ, văn bản**, hay **diễn thuyết, thuyết trình**.`,
  },

  {
    id: 'tau-thu-thien-di-co-vu-dao-hong',
    title: 'Tấu Thư Di + Cơ / Vũ / Đào / Hồng - ca sĩ diễn thuyết',
    sao: ['Tấu Thư'],
    cung: ['Thiên Di'],
    ketHop: ['Thiên Cơ', 'Vũ Khúc', 'Đào Hoa', 'Hồng Loan'],
    doUuTien: 67,
    tomTat: `**Tấu Thư Thiên Di + Thiên Cơ / Vũ Khúc / Đào Hoa / Hồng Loan:** ra ngoài làm **CA SĨ, NHÀ DIỄN THUYẾT NỔI TIẾNG**.`,
  },

  {
    id: 'tau-thu-thien-di-sat-ky-da',
    title: 'Tấu Thư Di + Sát bại tinh / Kình Đà / Kỵ - thị phi vu khống',
    sao: ['Tấu Thư'],
    cung: ['Thiên Di'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp', 'Hóa Kỵ'],
    doUuTien: 67,
    tomTat: `**Tấu Thư Thiên Di + Sát bại tinh / Hóa Kỵ / Kình Đà:** vướng **THỊ PHI, KIỆN CÁO, VU KHỐNG** khi hoạt động xã hội.`,
  },

  // ============================================================
  // 14. Tấu Thư tại Tật Ách - tai họa từ kiện cáo
  // ============================================================
  {
    id: 'tau-thu-tai-tat-ach',
    title: 'Tấu Thư tại Tật Ách - Tai họa từ kiện cáo (không phải bệnh thể chất)',
    sao: ['Tấu Thư'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `**Tấu Thư cư Tật:** **KHÔNG PHẢI bệnh thể chất** mà thiên về
"**cơn đau đầu**" về **LUẬT PHÁP**.

- Chủ về **tai họa** từ:
- **KIỆN CÁO**
- **Văn bản, giấy tờ pháp lý**
- **Tranh chấp tài sản, hợp đồng**
- Bị **hiểu lầm** dẫn đến kiện cáo

**Nét đẹp duy nhất:** khi đương số **qua đời**: có người **đọc ĐIẾU VĂN
rất hay**, được tưởng niệm trang trọng.`,
  },

  // ============================================================
  // 15. Tấu Thư tại Tài Bạch
  // ============================================================
  {
    id: 'tau-thu-tai-tai-bach',
    title: 'Tấu Thư tại Tài Bạch',
    sao: ['Tấu Thư'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Tấu Thư cư Tài:** **GIỎI KIẾM TIỀN từ khả năng ăn nói, viết
lách** — **"dùng lời làm vốn"** để nâng cao thu nhập.`,
  },

  {
    id: 'tau-thu-tai-bach-sat-da-ky',
    title: 'Tấu Thư Tài + Sát bại tinh / Kình Đà / Kỵ - kiện cáo vì tiền',
    sao: ['Tấu Thư'],
    cung: ['Tài Bạch'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp', 'Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `**Tấu Thư Tài Bạch + Sát bại tinh / Kình Đà / Hóa Kỵ:** lời nói trở thành **CON DAO HAI LƯỠI**:
- Dễ bị **kiện cáo VÌ TIỀN BẠC**
- **Hao tài tốn của** vào các vụ kiện tụng
- Sai lệch về **chữ ký, giấy tờ pháp lý**`,
  },

  // ============================================================
  // 16. Tấu Thư tại Tử Tức - thần giáng sinh
  // ============================================================
  {
    id: 'tau-thu-tai-tu-tuc',
    title: 'Tấu Thư tại Tử Tức',
    sao: ['Tấu Thư'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Tấu Thư cư Tử Tức:** con cái có tài **VĂN HAY CHỮ TỐT**, **giao
tiếp khéo léo**, **ứng biến tốt**, dễ nổi bật trong học tập hoặc sân khấu.`,
  },

  {
    id: 'tau-thu-tu-tuc-quang-quy',
    title: 'Tấu Thư Tử Tức + Ân Quang + Thiên Quý - quý tử thần giáng sinh',
    sao: ['Tấu Thư'],
    cung: ['Tử Tức'],
    ketHop: ['Ân Quang', 'Thiên Quý'],
    doUuTien: 70,
    tomTat: `**Tấu Thư Tử Tức + Ân Quang + Thiên Quý** ("quý nhân"): **NHIỀU CON, có QUÝ TỬ** — là **"THẦN GIÁNG SINH"** (con sinh ra có **trực giác tốt** hoặc **căn tu tâm linh**).`,
  },

  // ============================================================
  // 17. Tấu Thư tại Phu Thê
  // ============================================================
  {
    id: 'tau-thu-tai-phu-the',
    title: 'Tấu Thư tại Phu Thê',
    sao: ['Tấu Thư'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `**Tấu Thư cư Phu Thê:** người hôn phối **có tài ăn nói**, **khéo
léo, tinh tế**, có **học thức**, biết đối nhân xử thế: tạo **thiện cảm** với
người xung quanh.

Tính chất Tấu Thư gắn với **giấy tờ, văn bản pháp lý**: người hôn phối
**dễ dính tới KIỆN TỤNG**.`,
  },

  {
    id: 'tau-thu-phu-the-dao-hong-menh-ly-hon',
    title: 'Tấu Thư Phu + Đào Hồng/Hoa Cái Mệnh - Đơn ly hôn',
    sao: ['Tấu Thư'],
    cung: ['Phu Thê', 'Mệnh'],
    ketHop: ['Đào Hoa', 'Hồng Loan', 'Hoa Cái'],
    doUuTien: 70,
    tomTat: `**Tấu Thư tại Phu Thê + sát bại tinh + Đào Hồng / Hoa Cái thủ Mệnh:**
- Vợ chồng **DỄ BỎ NHAU**
- Tấu Thư chính là **ĐƠN XIN LY HÔN**
- Tình duyên đứt đoạn vì xáo trộn nội tâm và đào hoa`,
  },

  // ============================================================
  // 18. Tấu Thư tại Huynh Đệ
  // ============================================================
  {
    id: 'tau-thu-tai-huynh-de',
    title: 'Tấu Thư tại Huynh Đệ',
    sao: ['Tấu Thư'],
    cung: ['Huynh Đệ'],
    doUuTien: 70,
    tomTat: `**Tấu Thư cư Huynh Đệ:** anh chị em **GIỎI GIANG**, hay hỏi
chuyện, có năng khiếu **viết lách**, tính cách **hoạt ngôn, khéo léo**.`,
  },

  {
    id: 'tau-thu-huynh-de-ta-huu-xuong-khuc',
    title: 'Tấu Thư Huynh Đệ + Tả Hữu / Xương Khúc - anh em đồng lòng',
    sao: ['Tấu Thư'],
    cung: ['Huynh Đệ'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc'],
    doUuTien: 65,
    tomTat: `**Tấu Thư Huynh Đệ + Tả Phù / Hữu Bật / Văn Xương / Văn Khúc:** anh em **đồng lòng**, gia đình **êm ấm**.`,
  },

  {
    id: 'tau-thu-huynh-de-sat-bai-tinh',
    title: 'Tấu Thư Huynh Đệ + Sát bại tinh - anh em thưa kiện',
    sao: ['Tấu Thư'],
    cung: ['Huynh Đệ'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 65,
    tomTat: `**Tấu Thư Huynh Đệ + Sát bại tinh:** anh chị em dễ **TRANH CHẤP, THƯA KIỆN NHAU** — lời nói trở thành **mồi lửa** gây kiện tụng.`,
  },

  // ============================================================
  // 19. Tấu Thư + Tam Thai + Bát Tọa + Hỏa Linh + Kình Dương - tâm linh nhẹ
  // ============================================================
  {
    id: 'tau-thu-tam-thai-bat-toa-hoa-linh-kinh',
    title: 'Tấu Thư + Tam Thai + Bát Tọa + Hỏa Linh + Kình Dương - Tâm linh nhẹ',
    sao: ['Tấu Thư'],
    ketHop: ['Tam Thai', 'Bát Tọa', 'Hỏa Tinh', 'Linh Tinh', 'Kình Dương'],
    doUuTien: 60,
    tomTat: `**Tấu Thư + Tam Thai + Bát Tọa + Hỏa Tinh / Linh Tinh + Kình
Dương:** chủ về **TÂM LINH NHẸ**.

- Người có **căn duyên nhẹ với tâm linh, đồng cốt** — không nặng như "căn
đồng số lính" nhưng cũng có **trực giác tốt**, dễ tiếp nhận năng lượng siêu
nhiên.

Nếu phát triển đúng cách: có thể trở thành người **thấu cảm, thầu hiểu**
nhân tâm. Nếu không kiểm soát: dễ bị **căng thẳng tinh thần**.`,
  },

  // ============================================================
  // 20. Tấu Thư + Cát tinh - phát triển học thuật
  // ============================================================
  {
    id: 'tau-thu-cat-tinh',
    title: 'Tấu Thư + Cát tinh - Thành tựu lớn về học thuật',
    sao: ['Tấu Thư'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Long Trì', 'Phượng Các', 'Hỷ Thần'],
    doUuTien: 60,
    tomTat: `**Tấu Thư + Văn Xương + Văn Khúc + Long Trì + Phượng Các + Hỷ
Thần** (Lục Cát Tinh): **CÁ GẶP NƯỚC** trong lĩnh vực **ngôn ngữ, nghệ thuật**.

- Đương số như người mang **bút son** — đi đến đâu để lại **dấu son thành
tựu**, sự nghiệp đạt nhiều **thành quả khiến người đời nể phục**.

**Hội tụ Lục Cát Tinh** mang ý nghĩa **may mắn**:
- **Thi cử** đỗ đạt
- **Học hành** thành công
- **Cưới hỏi** thuận lợi`,
  },

  // ============================================================
  // 21. Tấu Thư + ác tinh - tranh cãi kiện tụng
  // ============================================================
  {
    id: 'tau-thu-ac-tinh',
    title: 'Tấu Thư + Ác tinh - Tranh cãi, kiện tụng, thị phi',
    sao: ['Tấu Thư'],
    ketHop: ['Kình Dương', 'Đà La', 'Địa Không', 'Địa Kiếp', 'Hỏa Tinh', 'Linh Tinh', 'Quan Phủ'],
    doUuTien: 60,
    tomTat: `**Tấu Thư + Kình Đà + Không Kiếp + Hỏa Linh + Quan Phủ:** năng
lực ngôn ngữ trở thành **CON DAO HAI LƯỠI**.

- Đương số dễ:
- Vì **lời nói** mà sinh **THỊ PHI**
- Rơi vào **tranh chấp pháp lý** hoặc **kiện tụng**

**Đặc biệt nguy hiểm:** báo hiệu **đổ vỡ HÔN NHÂN** vì mâu thuẫn **không
thể hòa giải**.`,
  },

  // ============================================================
  // 22. Lời khuyên hóa giải Tấu Thư
  // ============================================================
  {
    id: 'tau-thu-hoa-giai',
    title: 'Lời khuyên hóa giải hung họa Tấu Thư',
    sao: ['Tấu Thư'],
    doUuTien: 70,
    tomTat: `**Lời khuyên hóa giải Tấu Thư khi gặp sát tinh:**

**1. Cẩn trọng lời ăn tiếng nói:**
- "**HỌA TỪ MIỆNG MÀ RA**"
- Tránh sơ suất dẫn đến **tranh chấp không đáng có**

**2. Hướng năng lượng tích cực:**
- **Giảng dạy, viết lách**
- **Nghệ thuật, truyền thông**
-: Biến tài "trời phú" thành công cụ tạo giá trị

**3. Tận dụng cát tinh:**
- Khi gặp **Văn Xương / Văn Khúc / Long Trì / Phượng Các / Hỷ Thần**: Tấu Thư
  được dẫn dắt theo chiều hướng **NHÂN VĂN**
- Dùng tài ăn nói để **CẢM HÓA** thay vì **ĐỐI ĐẦU**
- Chuyển **nghịch cảnh thành cơ hội**

**4. Cẩn trọng giấy tờ:**
- Vì Tấu Thư chủ về **bằng sắc, ấn tín, đơn từ**: mọi giao dịch cần có **văn
  bản rõ ràng, hợp đồng minh bạch**`,
  },
];
