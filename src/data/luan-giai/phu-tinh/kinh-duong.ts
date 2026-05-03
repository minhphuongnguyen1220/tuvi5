import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO KÌNH DƯƠNG - Lục Sát Tinh
 */
export const luanGiai_KinhDuong: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung của sao Kình Dương
  // ============================================================
  {
    id: 'kinh-duong-tinh-chat-chung',
    title: 'Kình Dương - Đặc tính chung',
    sao: ['Kình Dương'],
    doUuTien: 30,
    tomTat: `**Kình Dương** (tên khác: **Dương Nhận**) thuộc bộ **Lục Sát Tinh**,
ngũ hành **Kim** (Dương Kim đới Hỏa).

**Hóa khí:** **Hình Tinh, Hung Tinh**.

**Đặc tính:** **sát phạt, cô đơn, bần hàn, bệnh tật, tai nạn**.

**Vị trí miếu hãm:**
- **Đắc địa:** Thìn, Tuất, Sửu, Mùi
- **Hãm địa:** Tý, Ngọ, Mão, Dậu, Dần, Thân, Tỵ, Hợi

Người xưa ví Kình Dương như **"thanh gươm bén để giữa trời"** — biết dùng thì
mở đường công danh, dùng không khéo thì gây tai họa.`,

    chiTiet: `## Bộ sao đôi Kình Đà

Kình Dương + **Đà La** = bộ **"Kình Đà"** — luôn đứng kèm hai bên sao **Lộc Tồn**
để **canh giữ Lộc Tồn**.

## Lục Sát Tinh

Kình Dương là một trong **6 sao của bộ Lục Sát Tinh**:
- Kình Dương, Đà La (bộ Kình Đà)
- Địa Không, Địa Kiếp (bộ Không Kiếp)
- Linh Tinh, Hỏa Tinh (bộ Linh Hỏa)

- Gọi tắt là **"Kình Đà Không Kiếp Linh Hỏa"**.

## Cách "Hung Tinh độc thủ"

Nếu Kình Dương tọa thủ tại cung **Vô Chính Diệu** (không có chính tinh): gọi
là cách **"Hung Tinh độc thủ"** — tính chất hung tinh phát huy mạnh mẽ.`,
  },

  // ============================================================
  // 2. Kình Dương tại Mệnh - tướng mạo
  // ============================================================
  {
    id: 'kinh-duong-tai-menh-tuong-mao',
    title: 'Kình Dương tại Mệnh - Tướng mạo',
    sao: ['Kình Dương'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `**Kình Dương cư Mệnh:** thân hình **cao to, thô kệch**, da xám, **lộ hầu, lộ nhãn**. Dáng đi **lệch vai, hơi gù**.`,
  },

  {
    id: 'kinh-duong-tai-menh-tuong-mao-dac-dia',
    title: 'Kình Dương Mệnh - Đắc địa thần thái',
    sao: ['Kình Dương'],
    cung: ['Mệnh'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 78,
    tomTat: `**Kình Dương ĐẮC địa cư Mệnh:** thần thái **uy nghi, vạm vỡ như tướng quân**.`,
  },

  // ============================================================
  // 3. Kình Dương tại Mệnh - tính cách
  // ============================================================
  {
    id: 'kinh-duong-tai-menh-tinh-cach',
    title: 'Kình Dương tại Mệnh - Tính cách',
    sao: ['Kình Dương'],
    cung: ['Mệnh'],
    doUuTien: 85,
    tomTat: `**Kình Dương cư Mệnh:** tính cách chịu ảnh hưởng từ trạng thái sao.`,
  },

  {
    id: 'kinh-duong-tai-menh-tinh-cach-dac-dia',
    title: 'Kình Dương Mệnh - Đắc địa tính cách',
    sao: ['Kình Dương'],
    cung: ['Mệnh'],
    chi: ['Thìn', 'Tuất', 'Sửu', 'Mùi'],
    doUuTien: 85,
    tomTat: `**Kình Dương ĐẮC địa Mệnh (Thìn/Tuất/Sửu/Mùi):** **dũng cảm, cương nghị, hành động, nói ít làm nhiều**. Hơi nóng nảy nhưng **rất thẳng thắn** — "cây ngay không sợ chết đứng".`,
  },

  {
    id: 'kinh-duong-tai-menh-tinh-cach-ham',
    title: 'Kình Dương Mệnh - Hãm địa tính cách',
    sao: ['Kình Dương'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    doUuTien: 85,
    tomTat: `**Kình Dương HÃM Mệnh:** **nóng nảy, bướng bỉnh, trí tuệ kém**, "việc bé xé ra to": dễ **vướng tranh cãi, tự chuốc họa**.`,
  },

  // ============================================================
  // 4. Kình Dương tại Mệnh - sự nghiệp & tài lộc
  // ============================================================
  {
    id: 'kinh-duong-tai-menh-su-nghiep',
    title: 'Kình Dương tại Mệnh - Sự nghiệp & tài lộc',
    sao: ['Kình Dương'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `**Kình Dương cư Mệnh - tài lộc:** phải **tự thân lao lực** mới có tiền, ít hưởng phúc lộc sẵn có.`,
  },

  {
    id: 'kinh-duong-tai-menh-dac-cat',
    title: 'Kình Dương Mệnh - Đắc địa + cát tinh',
    sao: ['Kình Dương'],
    cung: ['Mệnh'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 78,
    tomTat: `**Kình Dương ĐẮC Mệnh + cát tinh:** phù hợp **võ nghiệp, quân sự, công an, cứu hộ**, hoặc nghề liên quan **dao kéo, mổ xẻ** (bác sĩ phẫu thuật).`,
  },

  {
    id: 'kinh-duong-tai-menh-ham',
    title: 'Kình Dương Mệnh - Hãm địa sự nghiệp',
    sao: ['Kình Dương'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `**Kình Dương HÃM Mệnh:** dễ dính **hung nghiệp**, làm nghề nặng nhọc lao lực chân tay. Công việc **không bền**, phải thay đổi thường xuyên.`,
  },

  {
    id: 'kinh-duong-tai-menh-linh-hoa-kiep',
    title: 'Kình Dương Mệnh + Linh / Hỏa / Kiếp Sát',
    sao: ['Kình Dương'],
    cung: ['Mệnh'],
    ketHop: ['Linh Tinh', 'Hỏa Tinh', 'Kiếp Sát'],
    doUuTien: 75,
    tomTat: `**Kình Dương Mệnh + Linh / Hỏa / Kiếp Sát:** tiền hao tán, dễ gặp **họa nguy hiểm tính mạng**.`,
  },

  {
    id: 'kinh-duong-tai-menh-tuan-triet-cat',
    title: 'Kình Dương Mệnh + Tuần / Triệt / cát tinh',
    sao: ['Kình Dương'],
    cung: ['Mệnh'],
    ketHop: ['Tuần', 'Triệt', 'Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 72,
    tomTat: `**Kình Dương Mệnh + Tuần / Triệt / cát tinh:** giảm bớt phần hung.`,
  },

  // ============================================================
  // 5. Kình Dương tại Mệnh - phúc thọ tai họa
  // ============================================================
  {
    id: 'kinh-duong-tai-menh-phuc-tho',
    title: 'Kình Dương tại Mệnh - Phúc thọ & tai họa',
    sao: ['Kình Dương'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `**Kình Dương cư Mệnh:** tính **liều lĩnh, hấp tấp** thường gây tai họa.`,
  },

  {
    id: 'kinh-duong-tai-menh-ngo',
    title: 'Kình Dương tại Mệnh - Ngọ',
    sao: ['Kình Dương'],
    cung: ['Mệnh'],
    chi: ['Ngọ'],
    doUuTien: 82,
    tomTat: `**Kình Dương Mệnh tại Ngọ:** đặc biệt nguy hiểm — dễ **chết yểu, tai nạn bất ngờ, tàn tật**.`,
  },

  {
    id: 'kinh-duong-tai-menh-mao-dau',
    title: 'Kình Dương tại Mệnh - Mão / Dậu',
    sao: ['Kình Dương'],
    cung: ['Mệnh'],
    chi: ['Mão', 'Dậu'],
    doUuTien: 82,
    tomTat: `**Kình Dương Mệnh tại Mão / Dậu:** có khả năng **phá sản, lao khổ**.`,
  },

  // ============================================================
  // 6. Cách Kình Dương + Linh/Hỏa - thân thể dị tật
  // ============================================================
  {
    id: 'kinh-duong-linh-hoa',
    title: 'Kình Dương + Linh/Hỏa Tinh - Thân thể dị tật',
    sao: ['Kình Dương', 'Linh Tinh', 'Hỏa Tinh'],
    doUuTien: 60,
    tomTat: `**Kình Dương + Linh Tinh + Hỏa Tinh:** đương số phải chịu cảnh
**thương tật, hình khắc thân thể**.

Chấn thương thường đến từ **dao kéo, điện lửa, súng đạn, tai nạn bất ngờ**.

Cuộc đời **nghèo khó, vất vả**, ít nhận được sự giúp đỡ.`,
  },

  // ============================================================
  // 7. Cách Kình Dương + Không Kiếp - côn đồ đạo tặc
  // ============================================================
  {
    id: 'kinh-duong-khong-kiep',
    title: 'Kình Dương + Không Kiếp/Phục Binh - Côn đồ đạo tặc',
    sao: ['Kình Dương', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 60,
    tomTat: `**Kình Dương + Địa Không + Địa Kiếp + Phục Binh:** dễ bị lôi kéo
vào **thị phi, va chạm**, hoặc sa chân vào con đường **côn đồ, đạo tặc**.

Thường hành **nghề sát sinh**, có trường hợp vì nông nổi mà **vướng vào vòng
lao lý**.`,
  },

  // ============================================================
  // 8. Cách Kình Dương + Hình Riêu Kiếp Sát - sát chồng/vợ
  // ============================================================
  {
    id: 'kinh-duong-hinh-rieu',
    title: 'Kình Dương + Thiên Hình/Riêu/Kiếp Sát - Sát chồng/vợ',
    sao: ['Kình Dương', 'Thiên Hình', 'Thiên Riêu'],
    doUuTien: 60,
    tomTat: `**Kình Dương + Thiên Hình + Thiên Riêu + Kiếp Sát:** đời sống hôn nhân **trắc trở**.

Đương số và bạn đời khó tìm tiếng nói chung, thường xuyên **cãi vã, xung đột**: dễ dẫn đến **ly hôn**.`,
  },

  {
    id: 'kinh-duong-hinh-rieu-nu',
    title: 'Kình Dương + Hình Riêu - Nữ mệnh sát chồng',
    sao: ['Kình Dương', 'Thiên Hình', 'Thiên Riêu'],
    gioiTinh: 'Nữ',
    doUuTien: 62,
    tomTat: `**Kình Dương + Hình Riêu + Kiếp Sát (Nữ mệnh):** **SÁT CHỒNG**.`,
  },

  {
    id: 'kinh-duong-hinh-rieu-nam',
    title: 'Kình Dương + Hình Riêu - Nam mệnh sát vợ',
    sao: ['Kình Dương', 'Thiên Hình', 'Thiên Riêu'],
    gioiTinh: 'Nam',
    doUuTien: 62,
    tomTat: `**Kình Dương + Hình Riêu + Kiếp Sát (Nam mệnh):** **SÁT VỢ**.`,
  },

  // ============================================================
  // 9. Cách Kình Dương + Thái Tuế/Điếu Khách - xa cách cha mẹ
  // ============================================================
  {
    id: 'kinh-duong-thai-tue',
    title: 'Kình Dương + Thái Tuế/Điếu Khách - Xa cách cha mẹ',
    sao: ['Kình Dương', 'Thái Tuế', 'Điếu Khách'],
    doUuTien: 55,
    tomTat: `**Kình Dương + Thái Tuế + Điếu Khách:** thường **xa cách song thân**.

- Có người vì **cha mẹ mất sớm**
- Có người phải **tha hương cầu thực**, bôn ba khắp chốn

Tình cảm gia đình dễ **sứt mẻ, lạnh nhạt**.`,
  },

  // ============================================================
  // 10. Hạn Kình Dương + Thiên Hình tại Ngọ
  // ============================================================
  {
    id: 'kinh-duong-thien-hinh-ngo',
    title: 'Kình Dương + Thiên Hình tại Ngọ - Cực HUNG',
    sao: ['Kình Dương', 'Thiên Hình'],
    chi: ['Ngọ'],
    doUuTien: 65,
    tomTat: `**Kình Dương + Thiên Hình tại Ngọ:** cách **CỰC HUNG** — **bị tù**.`,
  },

  {
    id: 'kinh-duong-hinh-ngo-luc-sat',
    title: 'Kình Dương + Hình tại Ngọ + Lục Sát',
    sao: ['Kình Dương', 'Thiên Hình'],
    chi: ['Ngọ'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 60,
    tomTat: `**Kình Dương + Thiên Hình tại Ngọ + Lục Sát:** có thể **CHẾT** trong thời gian này.`,
  },

  // ============================================================
  // 11. Hạn Kình Dương + Vũ Khúc + Phá Quân
  // ============================================================
  {
    id: 'kinh-duong-vu-pha',
    title: 'Kình Dương + Vũ Khúc + Phá Quân - Bị hại vì tiền',
    sao: ['Kình Dương', 'Vũ Khúc', 'Phá Quân'],
    doUuTien: 55,
    tomTat: `**Kình Dương + Vũ Khúc + Phá Quân:** **bị khốn hại vì tiền**.

Tài lộc tan tác, vướng vào tranh chấp tiền bạc, có thể bị lừa lọc hoặc liên
lụy về tài chính.`,
  },

  // ============================================================
  // 12. Lời khuyên hóa giải Kình Dương
  // ============================================================
  {
    id: 'kinh-duong-loi-khuyen',
    title: 'Kình Dương - Lời khuyên hóa giải',
    sao: ['Kình Dương'],
    doUuTien: 40,
    tomTat: `**Chìa khóa hóa giải Kình Dương: KIÊN NHẪN và NHÚN NHƯỜNG.**

- Rèn **tính kiên nhẫn**, tránh **cố chấp / hiếu thắng quá mức**
- Khi gặp rắc rối, giữ **thái độ ôn hòa**, xử lý bằng **lý trí**
- Chọn **nghề phù hợp:** võ nghiệp, quân đội, công an, kỹ thuật, **phẫu thuật**
  - biến "dao" thành công cụ tạo thành tựu
- Chú ý **an toàn đi lại**, tránh **va chạm dao kéo, xe cộ, điện lửa**
- Tham gia **thể thao, rèn luyện thân thể**: giải tỏa nóng nảy, giảm thương tật`,
  },

  // ============================================================
  // 13. Kình Dương tại Phụ Mẫu
  // ============================================================
  {
    id: 'kinh-duong-tai-phu-mau',
    title: 'Kình Dương tại Phụ Mẫu',
    sao: ['Kình Dương'],
    cung: ['Phụ Mẫu'],
    doUuTien: 78,
    tomTat: `**Kình Dương tại Phụ Mẫu:** ảnh hưởng đến quan hệ với cha mẹ.`,
  },

  {
    id: 'kinh-duong-tai-phu-mau-ham',
    title: 'Kình Dương Phụ Mẫu - Hãm địa',
    sao: ['Kình Dương'],
    cung: ['Phụ Mẫu'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `**Kình Dương HÃM Phụ Mẫu:** cha mẹ **nóng nảy, dễ xung đột**, có thể **ly tán** hoặc **một người đoản mệnh**. Vướng nghề **sát sinh, lao động nặng nhọc**. Con cái thiệt thòi tình cảm, **phải sớm tự lập**.`,
  },

  {
    id: 'kinh-duong-tai-phu-mau-dac-dia',
    title: 'Kình Dương Phụ Mẫu - Đắc địa',
    sao: ['Kình Dương'],
    cung: ['Phụ Mẫu'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 80,
    tomTat: `**Kình Dương ĐẮC Phụ Mẫu:** cha mẹ **chính trực, có uy quyền** — theo nghề **quân đội, công an, võ nghiệp**, hoặc **dao kéo cứu người**. Nhà có **nề nếp, gia phong rõ ràng**, nhờ vậy con cái trưởng thành sớm.`,
  },

  // ============================================================
  // 14. Kình Dương tại Phúc Đức
  // ============================================================
  {
    id: 'kinh-duong-tai-phuc-duc',
    title: 'Kình Dương tại Phúc Đức',
    sao: ['Kình Dương'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `**Kình Dương tại Phúc Đức:** ảnh hưởng đến phúc đức dòng họ.`,
  },

  {
    id: 'kinh-duong-tai-phuc-duc-ham',
    title: 'Kình Dương Phúc Đức - Hãm địa',
    sao: ['Kình Dương'],
    cung: ['Phúc Đức'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `**Kình Dương HÃM Phúc Đức:** họ hàng **ly tán**, thiếu gắn kết. Trong gia tộc có người **yểu mệnh, tàn tật, tai nạn**. Mồ mả tổ tiên **xuống cấp, nứt vỡ**: cần sửa sang.`,
  },

  {
    id: 'kinh-duong-tai-phuc-duc-dac-dia',
    title: 'Kình Dương Phúc Đức - Đắc địa',
    sao: ['Kình Dương'],
    cung: ['Phúc Đức'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 78,
    tomTat: `**Kình Dương ĐẮC Phúc Đức:** gia tộc **uy nghi**, mồ mả tổ tiên khang trang, đặt nơi **long mạch, gần miếu đình, tượng đá**. Người trong họ **cứng cỏi, hiên ngang, có uy tín** — danh giá gia tộc được giữ vững.`,
  },

  // ============================================================
  // 15. Kình Dương tại Điền Trạch
  // ============================================================
  {
    id: 'kinh-duong-tai-dien-trach',
    title: 'Kình Dương tại Điền Trạch',
    sao: ['Kình Dương'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Kình Dương tại Điền Trạch:** ảnh hưởng đến nhà cửa, đất đai.`,
  },

  {
    id: 'kinh-duong-tai-dien-trach-ham',
    title: 'Kình Dương Điền Trạch - Hãm địa',
    sao: ['Kình Dương'],
    cung: ['Điền Trạch'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `**Kình Dương HÃM Điền Trạch:** phải **sửa sang tu bổ nhà cửa** thường xuyên. Đất **méo mó không cân đối**, dễ mua nhầm chỗ có **cốt, mồ mả** hoặc **phạm phong thủy**. Thành viên nóng tính, hay cãi vã.`,
  },

  {
    id: 'kinh-duong-tai-dien-trach-dac-dia',
    title: 'Kình Dương Điền Trạch - Đắc địa',
    sao: ['Kình Dương'],
    cung: ['Điền Trạch'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 78,
    tomTat: `**Kình Dương ĐẮC Điền Trạch:** nhà cửa **khang trang, bền vững** dù đôi lần thay đổi mới ổn định. Gia trạch gần **đền chùa, nghĩa trang, tượng voi quỳ** nhưng nhờ phúc phần nên ít bị ảnh hưởng xấu. Gia đình **kỷ luật, nề nếp**.`,
  },

  // ============================================================
  // 16. Kình Dương tại Quan Lộc
  // ============================================================
  {
    id: 'kinh-duong-tai-quan-loc',
    title: 'Kình Dương tại Quan Lộc',
    sao: ['Kình Dương'],
    cung: ['Quan Lộc'],
    doUuTien: 80,
    tomTat: `**Kình Dương tại Quan Lộc:** ảnh hưởng đến công danh sự nghiệp.`,
  },

  {
    id: 'kinh-duong-tai-quan-loc-ham',
    title: 'Kình Dương Quan Lộc - Hãm địa',
    sao: ['Kình Dương'],
    cung: ['Quan Lộc'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `**Kình Dương HÃM Quan Lộc:** công danh bị cản trở — như **"voi quỳ chặn cửa công môn"**, nỗ lực nhiều mà thành quả không tương xứng. Phải **thay đổi nghề liên tục**, ít khi đạt vị trí cao.`,
  },

  {
    id: 'kinh-duong-tai-quan-loc-dac-dia',
    title: 'Kình Dương Quan Lộc - Đắc địa',
    sao: ['Kình Dương'],
    cung: ['Quan Lộc'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 80,
    tomTat: `**Kình Dương ĐẮC Quan Lộc:** theo **võ nghiệp, quân đội, công an** hoặc nghề cần **sức mạnh, kỷ luật**.`,
  },

  {
    id: 'kinh-duong-tai-quan-loc-thien-ma',
    title: 'Kình Dương Quan Lộc + Thiên Mã',
    sao: ['Kình Dương'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Mã'],
    doUuTien: 75,
    tomTat: `**Kình Dương Quan Lộc + Thiên Mã:** **võ tướng giữ trọng trách lớn nơi biên cương**.`,
  },

  {
    id: 'kinh-duong-tai-quan-loc-tu-phu',
    title: 'Kình Dương Quan Lộc + Tử Vi / Thiên Phủ',
    sao: ['Kình Dương'],
    cung: ['Quan Lộc'],
    ketHop: ['Tử Vi', 'Thiên Phủ'],
    doUuTien: 75,
    tomTat: `**Kình Dương Quan Lộc + Tử Vi / Thiên Phủ:** chuyển hướng **kinh doanh, buôn bán phát đạt**.`,
  },

  // ============================================================
  // 17. Kình Dương tại Nô Bộc
  // ============================================================
  {
    id: 'kinh-duong-tai-no-boc',
    title: 'Kình Dương tại Nô Bộc',
    sao: ['Kình Dương'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Kình Dương tại Nô Bộc:** ảnh hưởng đến quan hệ bạn bè, đồng nghiệp.`,
  },

  {
    id: 'kinh-duong-tai-no-boc-ham',
    title: 'Kình Dương Nô Bộc - Hãm địa',
    sao: ['Kình Dương'],
    cung: ['Nô Bộc'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `**Kình Dương HÃM Nô Bộc:** bạn bè đồng nghiệp **bướng bỉnh**, thường **xung đột, ẩu đả**.`,
  },

  {
    id: 'kinh-duong-tai-no-boc-khong-kiep-rieu',
    title: 'Kình Dương Nô Bộc + Không Kiếp / Thiên Riêu',
    sao: ['Kình Dương'],
    cung: ['Nô Bộc'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Thiên Riêu'],
    doUuTien: 73,
    tomTat: `**Kình Dương Nô Bộc + Không Kiếp / Thiên Riêu:** dễ **bị phản bội, hãm hại** — "nuôi ong tay áo, nuôi cáo trong nhà".`,
  },

  {
    id: 'kinh-duong-tai-no-boc-dac-dia',
    title: 'Kình Dương Nô Bộc - Đắc địa',
    sao: ['Kình Dương'],
    cung: ['Nô Bộc'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 78,
    tomTat: `**Kình Dương ĐẮC Nô Bộc:** bạn bè đồng nghiệp xuất thân **quân đội, công an**, nghề liên quan **sức mạnh, kỷ luật, võ nghiệp** — **thẳng thắn, nghĩa khí**, sẵn sàng giúp đỡ.`,
  },

  // ============================================================
  // 18. Kình Dương tại Thiên Di
  // ============================================================
  {
    id: 'kinh-duong-tai-thien-di',
    title: 'Kình Dương tại Thiên Di',
    sao: ['Kình Dương'],
    cung: ['Thiên Di'],
    doUuTien: 78,
    tomTat: `**Kình Dương tại Thiên Di:** ảnh hưởng đến đi xa, ra ngoài.`,
  },

  {
    id: 'kinh-duong-tai-thien-di-ham',
    title: 'Kình Dương Thiên Di - Hãm địa',
    sao: ['Kình Dương'],
    cung: ['Thiên Di'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `**Kình Dương HÃM Thiên Di:** ra ngoài dễ vướng **cãi vã, thị phi, kiện tụng**. Nguy cơ **tai nạn xe cộ, súng đạn, điện lửa, ẩu đả**. Công việc nặng nhọc nhưng thành quả không như mong muốn.`,
  },

  {
    id: 'kinh-duong-tai-thien-di-ham-sat',
    title: 'Kình Dương Thiên Di - Hãm + nhiều hung tinh',
    sao: ['Kình Dương'],
    cung: ['Thiên Di'],
    trangThai: ['Hãm'],
    ketHop: ['Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp', 'Hóa Kỵ'],
    doUuTien: 75,
    tomTat: `**Kình Dương HÃM Thiên Di + nhiều hung tinh:** dễ bị **lừa, phản bội**.`,
  },

  {
    id: 'kinh-duong-tai-thien-di-dac-dia',
    title: 'Kình Dương Thiên Di - Đắc địa',
    sao: ['Kình Dương'],
    cung: ['Thiên Di'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 80,
    tomTat: `**Kình Dương ĐẮC Thiên Di:** thể hiện **bản lĩnh khi ra ngoài** — có **uy tín, được trọng vọng**, **quý nhân phù trợ**. Buôn bán dễ phát tài khi hợp tác cùng chí hướng.`,
  },

  // ============================================================
  // 19. Kình Dương tại Tật Ách
  // ============================================================
  {
    id: 'kinh-duong-tai-tat-ach',
    title: 'Kình Dương tại Tật Ách',
    sao: ['Kình Dương'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `**Kình Dương tại Tật Ách:** ảnh hưởng đến sức khỏe.`,
  },

  {
    id: 'kinh-duong-tai-tat-ach-ham',
    title: 'Kình Dương Tật Ách - Hãm địa',
    sao: ['Kình Dương'],
    cung: ['Tật Ách'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `**Kình Dương HÃM Tật Ách:** sức khỏe **suy yếu**, dễ mắc **bệnh nặng khó chữa** hoặc tai nạn **dao kéo, máy móc, súng đạn, điện lửa**.`,
  },

  {
    id: 'kinh-duong-tai-tat-ach-ham-sat',
    title: 'Kình Dương Tật Ách - Hãm + sát bại tinh',
    sao: ['Kình Dương'],
    cung: ['Tật Ách'],
    trangThai: ['Hãm'],
    ketHop: ['Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp', 'Hóa Kỵ'],
    doUuTien: 75,
    tomTat: `**Kình Dương HÃM Tật Ách + sát bại tinh:** **bệnh hiểm nghèo, phẫu thuật nhiều lần**, dễ vướng **kiện tụng, hình tù** vì tai họa thân thể.`,
  },

  {
    id: 'kinh-duong-tai-tat-ach-y-luong-quy',
    title: 'Kình Dương Tật Ách + Thiên Lương / Y / Quang Quý / Bác Sĩ',
    sao: ['Kình Dương'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Lương', 'Thiên Y', 'Ân Quang', 'Thiên Quý', 'Bác Sĩ'],
    doUuTien: 75,
    tomTat: `**Kình Dương Tật Ách + Thiên Lương / Thiên Y / Quang Quý / Bác Sĩ:** **chuyển nguy thành an** — sức khỏe **dẻo dai, hồi phục nhanh**. Có thể làm **bác sĩ ngoại khoa, châm cứu**, nghề y học cứu người.`,
  },

  // ============================================================
  // 20. Kình Dương tại Tài Bạch
  // ============================================================
  {
    id: 'kinh-duong-tai-tai-bach',
    title: 'Kình Dương tại Tài Bạch',
    sao: ['Kình Dương'],
    cung: ['Tài Bạch'],
    doUuTien: 78,
    tomTat: `**Kình Dương tại Tài Bạch:** ảnh hưởng đến tài lộc.`,
  },

  {
    id: 'kinh-duong-tai-tai-bach-ham-sat',
    title: 'Kình Dương Tài Bạch - Hãm + Không Kiếp / Kiếp Sát',
    sao: ['Kình Dương'],
    cung: ['Tài Bạch'],
    trangThai: ['Hãm'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Kiếp Sát'],
    doUuTien: 78,
    tomTat: `**Kình Dương HÃM Tài Bạch + Không Kiếp / Kiếp Sát:** tài vận bất ổn, dễ **mất mát, phá tán** do **đầu tư sai lầm hoặc bị lừa gạt**. Lao động chân tay nặng nhọc, vất vả mà **tiền bạc khó giữ**.`,
  },

  {
    id: 'kinh-duong-tai-tai-bach-tu-phu-loc',
    title: 'Kình Dương Tài Bạch + Tử Phủ Lộc Tồn Hóa Lộc',
    sao: ['Kình Dương'],
    cung: ['Tài Bạch'],
    ketHop: ['Tử Vi', 'Thiên Phủ', 'Lộc Tồn', 'Hóa Lộc'],
    doUuTien: 75,
    tomTat: `**Kình Dương Tài Bạch + Tử Vi / Thiên Phủ / Lộc Tồn / Hóa Lộc:** trở thành **người buôn bán lớn, kinh doanh mạnh tay**. Kiếm tiền từ ngành **kim loại, cơ khí, giải phẫu, dao kéo** — duyên phát tài đến trong biến động.`,
  },

  // ============================================================
  // 21. Kình Dương tại Tử Tức
  // ============================================================
  {
    id: 'kinh-duong-tai-tu-tuc',
    title: 'Kình Dương tại Tử Tức',
    sao: ['Kình Dương'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Kình Dương tại Tử Tức:** ảnh hưởng đến con cái.`,
  },

  {
    id: 'kinh-duong-tai-tu-tuc-ham',
    title: 'Kình Dương Tử Tức - Hãm địa',
    sao: ['Kình Dương'],
    cung: ['Tử Tức'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `**Kình Dương HÃM Tử Tức:** con cái **bướng bỉnh quá mức**, hay cãi cha mẹ, **sức khỏe kém**, **duyên phận mỏng** — sinh nhiều nuôi ít. Con lớn **xa cách**, không phụng dưỡng.`,
  },

  {
    id: 'kinh-duong-tai-tu-tuc-dac-dia',
    title: 'Kình Dương Tử Tức - Đắc địa',
    sao: ['Kình Dương'],
    cung: ['Tử Tức'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 78,
    tomTat: `**Kình Dương ĐẮC Tử Tức:** con cái **chí tiến thủ, sớm tự lập, thông minh, bản lĩnh**: cha mẹ tự hào. Tuy đôi khi bướng bỉnh "cứng đầu khó dạy", nhưng **càng lớn càng hiếu nghĩa**.`,
  },

  // ============================================================
  // 22. Kình Dương tại Phu Thê
  // ============================================================
  {
    id: 'kinh-duong-tai-phu-the',
    title: 'Kình Dương tại Phu Thê',
    sao: ['Kình Dương'],
    cung: ['Phu Thê'],
    doUuTien: 80,
    tomTat: `**Kình Dương tại Phu Thê:** ảnh hưởng đến hôn nhân.`,
  },

  {
    id: 'kinh-duong-tai-phu-the-ham',
    title: 'Kình Dương Phu Thê - Hãm địa',
    sao: ['Kình Dương'],
    cung: ['Phu Thê'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `**Kình Dương HÃM Phu Thê:** hôn nhân **trắc trở**, vợ chồng xung đột: **ly thân, ly hôn, tái giá**. Bạn đời mắc **bệnh, thương tích, kiện tụng**. Tình cảm dễ "đồng sàng dị mộng".`,
  },

  {
    id: 'kinh-duong-tai-phu-the-dac-cat',
    title: 'Kình Dương Phu Thê - Đắc + Tử Phủ Lộc Tồn',
    sao: ['Kình Dương'],
    cung: ['Phu Thê'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    ketHop: ['Tử Vi', 'Thiên Phủ', 'Lộc Tồn'],
    doUuTien: 78,
    tomTat: `**Kình Dương ĐẮC Phu Thê + Tử Vi / Thiên Phủ / Lộc Tồn:** bạn đời **mạnh mẽ, quả cảm, sự nghiệp thành công**. Vợ chồng ban đầu khắc khẩu nhưng **càng về sau càng nhường nhịn, hỗ trợ nhau**: hôn nhân bền lâu, con cái hưởng phúc.`,
  },

  // ============================================================
  // 23. Kình Dương tại Huynh Đệ
  // ============================================================
  {
    id: 'kinh-duong-tai-huynh-de',
    title: 'Kình Dương tại Huynh Đệ',
    sao: ['Kình Dương'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Kình Dương tại Huynh Đệ:** ảnh hưởng đến anh chị em.`,
  },

  {
    id: 'kinh-duong-tai-huynh-de-ham',
    title: 'Kình Dương Huynh Đệ - Hãm địa',
    sao: ['Kình Dương'],
    cung: ['Huynh Đệ'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `**Kình Dương HÃM Huynh Đệ:** anh chị em **lận đận**, có người **bệnh tật, tai nạn, yểu mệnh**. Quan hệ **xung đột, bất hòa**, "mạnh ai nấy sống". Thậm chí có người trở thành **gánh nặng**, làm khổ lụy nhau.`,
  },

  {
    id: 'kinh-duong-tai-huynh-de-dac-dia',
    title: 'Kình Dương Huynh Đệ - Đắc địa',
    sao: ['Kình Dương'],
    cung: ['Huynh Đệ'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 78,
    tomTat: `**Kình Dương ĐẮC Huynh Đệ:** anh chị em **mạnh mẽ, cương nghị**. Tuy khắc khẩu nhưng **trong lòng thương nhau**, sẵn sàng hỗ trợ khi khó khăn. Mỗi người có sự nghiệp riêng.`,
  },
];
