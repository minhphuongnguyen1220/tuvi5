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
    tomTat: `**Tấu Thư** là phụ tinh trong vòng Lộc Tồn, đứng ở vị trí thứ sáu,
ngũ hành Kim. Đặc tính của sao là bằng sắc, ấn tín, đơn từ — chủ về văn
chương, viết lách và giấy tờ pháp lý.

Ý nghĩa cốt lõi của Tấu Thư nằm ở tài ăn nói và khả năng viết lách. Đương số
giỏi lý luận, hùng biện, có duyên với văn chương và biết kiếm tiền từ ngôn
ngữ. Lời nói của đương số thường ngọt ngào, khả năng thuyết phục cao; khi
văn hay chữ tốt kết hợp với tài hùng biện sẽ tạo ra sức hút lớn với người
nghe.

Về nghề nghiệp, đây là sao của những nhà diễn thuyết và thuyết khách (như
Trương Lương xưa kia), cũng như ca sĩ, kịch sĩ, giáo sư, ký giả, họa sĩ và
thi sĩ. Tấu Thư còn mang đặc tính tâm linh: khi gặp Tam Thai, Bát Tọa, Hỏa
Linh và Kình Dương, đương số chủ về tâm linh nhẹ — có duyên với tâm linh và
đồng cốt nhẹ.`,
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
    tomTat: `Đương số có Tấu Thư thủ Mệnh là người hùng biện, am hiểu sâu rộng,
giao tiếp tốt, thông minh và văn hay chữ tốt.

Năng khiếu thiên bẩm của đương số nằm ở việc nói chuyện, giảng dạy và diễn
thuyết trước đám đông; viết được những đoạn văn xúc tích cảm động lòng
người. Đương số có tư chất kịch sĩ dù không nhất thiết theo nghề ca kịch,
đồng thời có tài về viết lách và sân khấu.

Cách cục này phù hợp với giảng dạy, truyền thông, luật, hay những vị trí
đòi hỏi khả năng biểu đạt xuất chúng. Khi Tấu Thư đi cùng các sao văn học
khác, đương số vừa có học vừa có tài vận dụng sáng tạo và chuyên nghiệp.`,
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
    tomTat: `Có một nguyên tắc đặc biệt cần lưu ý về Tấu Thư: do quy luật an sao
trong vòng Lộc Tồn, Tấu Thư thủ Mệnh luôn có Quan Phủ xung chiếu về Mệnh.

Hệ quả là khi ra ngoài, đương số dễ vướng vào kiện tụng và cần đặc biệt cẩn
thận trong giấy tờ thủ tục, nhất là khi đi xa. Đây là quy luật bắt buộc
không thể tránh, chỉ có thể giảm bớt bằng cách hành xử cẩn trọng, làm việc
rõ ràng và có hợp đồng minh bạch.`,
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
    tomTat: `Khi Tấu Thư hội cùng Văn Xương hoặc Văn Khúc, lời nói của đương số
dễ nghe và thu hút, có tính thuyết phục cao và tinh tế. Dù nói hay viết đều
có sức thuyết phục mạnh, dễ tạo thiện cảm với người đối diện. Sự kết hợp
giữa văn chương và ngôn ngữ này đưa đương số trở thành bậc thầy biểu đạt.`,
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
    tomTat: `Khi Tấu Thư gặp Thái Tuế, đương số nói rất hay và có khả năng hùng
biện giỏi. Cách cục này phù hợp với các nghề như trạng sư, thẩm phán, luật
gia, chính trị gia, giáo sư hay nhà nghiên cứu, thậm chí có thể tham gia
viết luật và quốc sách của đất nước.

Năng lực lập luận và phản biện của đương số càng thêm sắc bén — như người
mang bút son đi đến đâu để lại dấu son ở đó.`,
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
    tomTat: `Khi Tấu Thư gặp Lưu Hà, đương số ăn nói dễ nghe, khôn ngoan, nho
nhã và thanh cao. Lời nói trôi chảy như dòng nước (Lưu Hà), không phô trương
nhưng sâu sắc và thuyết phục.`,
  },

  // ============================================================
  // 7. Tấu Thư + Phượng Các / Long Trì / Nhật Nguyệt - giác quan nhạy bén
  // ============================================================
  {
    id: 'tau-thu-giac-quan',
    title: 'Tấu Thư + các sao chủ giác quan',
    sao: ['Tấu Thư'],
    doUuTien: 55,
    tomTat: `Khi Tấu Thư hội cùng các sao chủ giác quan, đương số có giác quan
nhạy bén. Sự kết hợp này tạo nên người vừa giỏi ngôn ngữ vừa có giác quan
tinh tường, phù hợp với những nghề cần kết hợp quan sát và biểu đạt như báo
chí, văn học hay nghệ thuật biểu diễn.`,
  },

  {
    id: 'tau-thu-giac-quan-phuong-cac',
    title: 'Tấu Thư + Phượng Các - thính tai',
    sao: ['Tấu Thư'],
    ketHop: ['Phượng Các'],
    doUuTien: 50,
    tomTat: `Khi Tấu Thư gặp Phượng Các, đương số có thính giác tốt, tai rất
thính.`,
  },

  {
    id: 'tau-thu-giac-quan-long-tri',
    title: 'Tấu Thư + Long Trì - thính mũi',
    sao: ['Tấu Thư'],
    ketHop: ['Long Trì'],
    doUuTien: 50,
    tomTat: `Khi Tấu Thư gặp Long Trì, đương số có khứu giác sắc bén, mũi rất
thính.`,
  },

  {
    id: 'tau-thu-giac-quan-am-duong',
    title: 'Tấu Thư + Thái Âm + Thái Dương - mắt sáng',
    sao: ['Tấu Thư'],
    ketHop: ['Thái Âm', 'Thái Dương'],
    doUuTien: 50,
    tomTat: `Khi Tấu Thư hội cùng Thái Âm và Thái Dương, đương số có thị giác
tốt, mắt sáng và tinh anh.`,
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
    tomTat: `Khi Tấu Thư tọa thủ Phụ Mẫu, cha mẹ của đương số là người có học
thức, tài ăn nói và viết lách tốt — thường làm những nghề như giảng dạy,
nhà văn hay nhà thơ. Gia đình giàu có, cha mẹ vui tính, mang khí chất thanh
cao và lương thiện.`,
  },

  {
    id: 'tau-thu-phu-mau-quang-quy-khoi-viet',
    title: 'Tấu Thư Phụ Mẫu + Ân Quang / Thiên Quý / Khôi Việt - cha mẹ địa vị xã hội',
    sao: ['Tấu Thư'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Ân Quang', 'Thiên Quý', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 67,
    tomTat: `Khi Tấu Thư tại Phụ Mẫu hội cùng Ân Quang, Thiên Quý, Thiên Khôi
hoặc Thiên Việt, cha mẹ của đương số có địa vị xã hội, giao lưu tốt với
những người quyền quý.`,
  },

  {
    id: 'tau-thu-phu-mau-sat-bai-tinh',
    title: 'Tấu Thư Phụ Mẫu + Sát bại tinh - kiện cáo chia ly',
    sao: ['Tấu Thư'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 67,
    tomTat: `Khi Tấu Thư tại Phụ Mẫu hội cùng các sát bại tinh như Kình Dương,
Đà La, Hỏa Tinh, Linh Tinh, Địa Không hoặc Địa Kiếp, ảnh hưởng xấu đến nhân
duyên của cha mẹ — dễ kiện cáo và chia ly. Tấu Thư lúc này chính là tờ giấy
ly hôn hay đơn thưa kiện.`,
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
    tomTat: `Khi Tấu Thư tọa thủ Phúc Đức, mồ mả và nhà thờ họ tộc của đương số
mang hình bút — chủ phát về văn.

Dòng họ thường có nhiều người học thức cao, xuất phát từ dòng dõi nho gia,
có truyền thống hiếu học, tư chất thông minh và đỗ đạt. Nhà thờ họ và phần
mộ tổ tiên mang hình ảnh bút nghiên, văn bia, câu đối — gìn giữ và tôn vinh
tinh thần học đạo.`,
  },

  {
    id: 'tau-thu-phuc-duc-xuong-khuc-long-phuong',
    title: 'Tấu Thư Phúc Đức + Xương Khúc / Long Phượng - dòng họ đề cao chữ nghĩa',
    sao: ['Tấu Thư'],
    cung: ['Phúc Đức'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Long Trì', 'Phượng Các'],
    doUuTien: 70,
    tomTat: `Khi Tấu Thư tại Phúc Đức hội cùng Văn Xương, Văn Khúc, Long Trì
hoặc Phượng Các, đây là dấu hiệu dòng họ đề cao chữ nghĩa: sự truyền thừa
văn hóa sâu đậm, gia phong nghiêm cẩn, đề cao nề nếp và lễ nghi.`,
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
    tomTat: `Khi Tấu Thư tọa thủ Điền Trạch, nhà của đương số có nhiều sách vở,
bút giấy, treo nhiều tranh chữ — không gian sống như một thư phòng thu nhỏ.

Tấu Thư hành Kim, chủ về giấy tờ pháp lý nên cũng ám chỉ rằng giấy tờ sổ đỏ
của nhà đất dễ bị dính vào tranh chấp và kiện tụng.`,
  },

  {
    id: 'tau-thu-dien-trach-van-tinh',
    title: 'Tấu Thư Điền Trạch + Văn tinh - gia chủ yêu chữ nghĩa',
    sao: ['Tấu Thư'],
    cung: ['Điền Trạch'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Lưu Niên Văn Tinh', 'Hóa Khoa'],
    doUuTien: 67,
    tomTat: `Khi Tấu Thư tại Điền Trạch hội cùng Văn Xương, Văn Khúc hoặc Lưu
Niên Văn Tinh, gia chủ là người yêu chữ nghĩa, thường treo nhiều câu đối và
tranh chữ trong nhà.`,
  },

  {
    id: 'tau-thu-dien-trach-sat-tinh',
    title: 'Tấu Thư Điền Trạch + Sát tinh - tranh chấp giấy tờ',
    sao: ['Tấu Thư'],
    cung: ['Điền Trạch'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 67,
    tomTat: `Khi Tấu Thư tại Điền Trạch hội cùng các sát tinh như Kình Dương,
Đà La, Hỏa Tinh, Linh Tinh, Địa Không hoặc Địa Kiếp, hàm ý bất lợi về nhà
đất — đương số cần cẩn trọng tranh chấp sổ đỏ, giấy tờ sở hữu và quyền thừa
kế.`,
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
    tomTat: `Khi Tấu Thư tọa thủ Quan Lộc, công việc của đương số liên quan đến
ăn nói và viết lách — chuyên viết và ban hành văn bản.`,
  },

  {
    id: 'tau-thu-quan-loc-thai-tue-hinh-tuong-an',
    title: 'Tấu Thư Quan + Thái Tuế + Thiên Hình + Thiên Tướng + Quốc Ấn - soạn thảo luật',
    sao: ['Tấu Thư'],
    cung: ['Quan Lộc'],
    ketHop: ['Thái Tuế', 'Thiên Hình', 'Thiên Tướng', 'Quốc Ấn'],
    doUuTien: 73,
    tomTat: `Khi Tấu Thư tại Quan Lộc hội cùng Thái Tuế, Thiên Hình, Thiên Tướng
và Quốc Ấn, đương số làm công việc soạn thảo luật, văn bản và công văn —
thuộc lĩnh vực chính sự và công quyền.`,
  },

  {
    id: 'tau-thu-quan-loc-dieu-vu-co-dao-hong',
    title: 'Tấu Thư Quan + Diêu + Vũ + Cơ + Đào + Hồng - khiếu ca hát',
    sao: ['Tấu Thư'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Riêu', 'Vũ Khúc', 'Thiên Cơ', 'Đào Hoa', 'Hồng Loan'],
    doUuTien: 73,
    tomTat: `Khi Tấu Thư tại Quan Lộc hội cùng Thiên Riêu, Vũ Khúc, Thiên Cơ,
Đào Hoa và Hồng Loan, đương số có khiếu hài hước cùng năng khiếu ca hát
tốt.`,
  },

  {
    id: 'tau-thu-quan-loc-viet-quang-quy-co-hong',
    title: 'Tấu Thư Quan + Việt + Quang + Quý + Cơ + Hồng - trai cận thần gái cung phi',
    sao: ['Tấu Thư'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Việt', 'Ân Quang', 'Thiên Quý', 'Thiên Cơ', 'Hồng Loan'],
    doUuTien: 73,
    tomTat: `Khi Tấu Thư tại Quan Lộc hội cùng Thiên Việt, Ân Quang, Thiên Quý,
Thiên Cơ và Hồng Loan, ứng vào cách "trai cận thần, gái cung phi" — cách
quý phái, đương số làm việc cận kề những người quyền cao.`,
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
    tomTat: `Khi Tấu Thư tọa thủ Nô Bộc, bạn bè của đương số là người tốt và
có tài ăn nói, trong số đó có nhiều người làm ca sĩ, giáo sư hay nhà thuyết
pháp.

Lời khuyên cho đương số là nên giữ thế chủ động, có giấy tờ ràng buộc rõ
ràng để tránh rắc rối khi hợp tác.`,
  },

  {
    id: 'tau-thu-no-boc-kinh-da-ky-sat',
    title: 'Tấu Thư Nô + Kình Đà / Hóa Kỵ / Sát bại tinh - bạn bè vu khống',
    sao: ['Tấu Thư'],
    cung: ['Nô Bộc'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp', 'Hóa Kỵ'],
    doUuTien: 65,
    tomTat: `Khi Tấu Thư tại Nô Bộc hội cùng Kình Dương, Đà La, Hỏa Tinh, Linh
Tinh, Địa Không, Địa Kiếp hay Hóa Kỵ, đương số dễ bị bạn bè, đồng nghiệp
hoặc cấp dưới kiện cáo, vu khống, phản bội và bịa đặt.`,
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
    tomTat: `Khi Tấu Thư tọa thủ Thiên Di, ra ngoài đương số hay phải lo toan,
làm những công việc liên quan đến giấy tờ, văn bản, hay đi diễn thuyết và
thuyết trình.`,
  },

  {
    id: 'tau-thu-thien-di-co-vu-dao-hong',
    title: 'Tấu Thư Di + Cơ / Vũ / Đào / Hồng - ca sĩ diễn thuyết',
    sao: ['Tấu Thư'],
    cung: ['Thiên Di'],
    ketHop: ['Thiên Cơ', 'Vũ Khúc', 'Đào Hoa', 'Hồng Loan'],
    doUuTien: 67,
    tomTat: `Khi Tấu Thư tại Thiên Di hội cùng Thiên Cơ, Vũ Khúc, Đào Hoa hay
Hồng Loan, ra ngoài đương số làm ca sĩ hoặc nhà diễn thuyết nổi tiếng.`,
  },

  {
    id: 'tau-thu-thien-di-sat-ky-da',
    title: 'Tấu Thư Di + Sát bại tinh / Kình Đà / Kỵ - thị phi vu khống',
    sao: ['Tấu Thư'],
    cung: ['Thiên Di'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp', 'Hóa Kỵ'],
    doUuTien: 67,
    tomTat: `Khi Tấu Thư tại Thiên Di hội cùng các sát bại tinh, Hóa Kỵ hay
Kình Đà, đương số vướng thị phi, kiện cáo và vu khống khi hoạt động xã
hội.`,
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
    tomTat: `Khi Tấu Thư tọa thủ Tật Ách, đây không phải là bệnh thể chất mà
thiên về "cơn đau đầu" về luật pháp. Đương số chủ về tai họa đến từ kiện
cáo, văn bản giấy tờ pháp lý, tranh chấp tài sản và hợp đồng, hoặc bị hiểu
lầm dẫn đến kiện cáo.

Nét đẹp duy nhất của Tấu Thư tại cung này: khi đương số qua đời, có người
đọc điếu văn rất hay, được tưởng niệm trang trọng.`,
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
    tomTat: `Khi Tấu Thư tọa thủ Tài Bạch, đương số giỏi kiếm tiền từ khả năng
ăn nói và viết lách — "dùng lời làm vốn" để nâng cao thu nhập.`,
  },

  {
    id: 'tau-thu-tai-bach-sat-da-ky',
    title: 'Tấu Thư Tài + Sát bại tinh / Kình Đà / Kỵ - kiện cáo vì tiền',
    sao: ['Tấu Thư'],
    cung: ['Tài Bạch'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp', 'Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `Khi Tấu Thư tại Tài Bạch hội cùng các sát bại tinh, Kình Đà hay
Hóa Kỵ, lời nói trở thành con dao hai lưỡi:

- Đương số dễ bị kiện cáo vì tiền bạc
- Hao tài tốn của vào các vụ kiện tụng
- Sai lệch về chữ ký và giấy tờ pháp lý`,
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
    tomTat: `Khi Tấu Thư tọa thủ Tử Tức, con cái của đương số có tài văn hay
chữ tốt, giao tiếp khéo léo, ứng biến tốt và dễ nổi bật trong học tập hoặc
trên sân khấu.`,
  },

  {
    id: 'tau-thu-tu-tuc-quang-quy',
    title: 'Tấu Thư Tử Tức + Ân Quang + Thiên Quý - quý tử thần giáng sinh',
    sao: ['Tấu Thư'],
    cung: ['Tử Tức'],
    ketHop: ['Ân Quang', 'Thiên Quý'],
    doUuTien: 70,
    tomTat: `Khi Tấu Thư tại Tử Tức hội cùng Ân Quang và Thiên Quý (bộ sao quý
nhân), đương số nhiều con và có quý tử — thuộc cách "thần giáng sinh", con
sinh ra có trực giác tốt hoặc có căn tu tâm linh.`,
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
    tomTat: `Khi Tấu Thư tọa thủ Phu Thê, người hôn phối của đương số có tài
ăn nói, khéo léo tinh tế, có học thức và biết đối nhân xử thế — tạo được
thiện cảm với những người xung quanh.

Tuy nhiên, do tính chất Tấu Thư gắn với giấy tờ và văn bản pháp lý, người
hôn phối dễ dính tới kiện tụng.`,
  },

  {
    id: 'tau-thu-phu-the-dao-hong-menh-ly-hon',
    title: 'Tấu Thư Phu + Đào Hồng/Hoa Cái Mệnh - Đơn ly hôn',
    sao: ['Tấu Thư'],
    cung: ['Phu Thê', 'Mệnh'],
    ketHop: ['Đào Hoa', 'Hồng Loan', 'Hoa Cái'],
    doUuTien: 70,
    tomTat: `Khi Tấu Thư tại Phu Thê đi cùng sát bại tinh, đồng thời cung Mệnh
có Đào Hoa, Hồng Loan hay Hoa Cái, vợ chồng đương số dễ bỏ nhau. Tấu Thư
lúc này chính là đơn xin ly hôn — tình duyên đứt đoạn vì xáo trộn nội tâm
và đào hoa quá vượng.`,
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
    tomTat: `Khi Tấu Thư tọa thủ Huynh Đệ, anh chị em của đương số giỏi giang,
hay hỏi chuyện, có năng khiếu viết lách, tính cách hoạt ngôn và khéo léo.`,
  },

  {
    id: 'tau-thu-huynh-de-ta-huu-xuong-khuc',
    title: 'Tấu Thư Huynh Đệ + Tả Hữu / Xương Khúc - anh em đồng lòng',
    sao: ['Tấu Thư'],
    cung: ['Huynh Đệ'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc'],
    doUuTien: 65,
    tomTat: `Khi Tấu Thư tại Huynh Đệ hội cùng Tả Phù, Hữu Bật, Văn Xương hoặc
Văn Khúc, anh em đương số đồng lòng và gia đình êm ấm.`,
  },

  {
    id: 'tau-thu-huynh-de-sat-bai-tinh',
    title: 'Tấu Thư Huynh Đệ + Sát bại tinh - anh em thưa kiện',
    sao: ['Tấu Thư'],
    cung: ['Huynh Đệ'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 65,
    tomTat: `Khi Tấu Thư tại Huynh Đệ hội cùng các sát bại tinh như Kình Dương,
Đà La, Hỏa Tinh, Linh Tinh, Địa Không hoặc Địa Kiếp, anh chị em dễ tranh
chấp và thưa kiện nhau — lời nói trở thành mồi lửa gây kiện tụng.`,
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
    tomTat: `Khi Tấu Thư hội cùng Tam Thai, Bát Tọa, Hỏa Tinh hoặc Linh Tinh và
Kình Dương, đương số chủ về tâm linh nhẹ. Đây là người có căn duyên nhẹ
với tâm linh, đồng cốt — không nặng như "căn đồng số lính" nhưng cũng có
trực giác tốt và dễ tiếp nhận năng lượng siêu nhiên.

Nếu phát triển đúng cách, đương số có thể trở thành người thấu cảm, thấu
hiểu nhân tâm. Ngược lại, nếu không kiểm soát được, dễ bị căng thẳng tinh
thần.`,
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
    tomTat: `Khi Tấu Thư hội cùng đủ Lục Cát Tinh — Văn Xương, Văn Khúc, Long
Trì, Phượng Các, Hỷ Thần — đương số được ví như cá gặp nước trong lĩnh vực
ngôn ngữ và nghệ thuật. Đương số như người mang bút son, đi đến đâu để lại
dấu son thành tựu, sự nghiệp đạt nhiều thành quả khiến người đời nể phục.

Khi hội tụ đủ Lục Cát Tinh, cách cục mang ý nghĩa may mắn lớn:

- Thi cử đỗ đạt
- Học hành thành công
- Cưới hỏi thuận lợi`,
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
    tomTat: `Khi Tấu Thư hội cùng Kình Đà, Không Kiếp, Hỏa Linh và Quan Phủ,
năng lực ngôn ngữ trở thành con dao hai lưỡi đối với đương số. Vì lời nói
mà sinh thị phi, dễ rơi vào tranh chấp pháp lý hoặc kiện tụng.

Đặc biệt nguy hiểm: cách cục này còn báo hiệu nguy cơ đổ vỡ hôn nhân vì
mâu thuẫn không thể hòa giải.`,
  },

  // ============================================================
  // 22. Lời khuyên hóa giải Tấu Thư
  // ============================================================
  {
    id: 'tau-thu-hoa-giai',
    title: 'Lời khuyên hóa giải hung họa Tấu Thư',
    sao: ['Tấu Thư'],
    doUuTien: 70,
    tomTat: `Khi Tấu Thư gặp sát tinh, đương số có thể hóa giải bằng những hướng
sau.

Trước hết, đương số cần cẩn trọng lời ăn tiếng nói — họa từ miệng mà ra —
tránh sơ suất dẫn đến tranh chấp không đáng có. Bên cạnh đó, nên hướng năng
lượng tích cực vào giảng dạy, viết lách, nghệ thuật và truyền thông để biến
tài "trời phú" thành công cụ tạo giá trị.

Khi gặp Văn Xương, Văn Khúc, Long Trì, Phượng Các hay Hỷ Thần, Tấu Thư được
dẫn dắt theo chiều hướng nhân văn: đương số có thể dùng tài ăn nói để cảm
hóa thay vì đối đầu, chuyển nghịch cảnh thành cơ hội.

Cuối cùng, vì Tấu Thư chủ về bằng sắc, ấn tín, đơn từ nên mọi giao dịch của
đương số đều cần có văn bản rõ ràng và hợp đồng minh bạch để tránh rắc
rối.`,
  },
];
