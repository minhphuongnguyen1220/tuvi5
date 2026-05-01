import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO BỆNH - Hỏa, Bại Tinh nhỏ.
 *
 * Vị trí THỨ 7 trong Vòng Trường Sinh 12 sao:
 *   Trường Sinh → Mộc Dục → Quan Đới → Lâm Quan → Đế Vượng → Suy →
 *   BỆNH → Tử → Mộ → Tuyệt → Thai → Dưỡng
 *
 * An theo CỤC.
 *
 * Đặc trưng:
 *   - Sau giai đoạn "Suy" già đi, xuống sức → tới giai đoạn ĐỔ BỆNH
 *   - Trên cơ thể xuất hiện nhiều bệnh tật do cơ quan chức năng suy giảm
 *   - Tính chất "MƯA DẦM THẤM LÂU" — bệnh âm ỉ, không phát tác dữ dội
 *   - Sao nhỏ — không phải đại hung tinh, nhưng kéo dài
 *   - Tướng mạo: gầy gò, xanh xao, vàng vọt, dáng chậm rãi
 *   - Tinh thần: không phấn chấn, lười, "việc nhà thì nhác việc chú bác thì siêng"
 *   - LƯU Ý: Luận sao Bệnh ở Mệnh phải phối hợp với cung Tật Ách + Phúc Đức
 */
export const luanGiai_Benh: DoanLuanGiai[] = [
  {
    id: 'benh-tinh-chat-chung',
    title: 'Bệnh - Đặc tính chung',
    sao: ['Bệnh'],
    doUuTien: 33,
    tomTat: `**Bệnh** — phụ tinh **BẠI TINH NHỎ**, vị trí **THỨ 7** vòng Trường Sinh.

**Ngũ hành:** **Hỏa**.

⚡ **Đặc tính:**
- Sau giai đoạn **SUY** già đi → tới giai đoạn **ĐỔ BỆNH**
- Trên cơ thể xuất hiện **NHIỀU BỆNH TẬT**
- Cơ quan chức năng **KHÔNG CÒN TỐT** để chống lại tác nhân gây bệnh

⚡ **Vai trò:**
- KHÔNG phải đại hung tinh
- Tính chất "**MƯA DẦM THẤM LÂU**" — căn bệnh **ÂM Ỉ** chứ ít phát tác dữ dội
- Bệnh hoạn không nặng lắm, nhưng **KÉO DÀI**

⚡ **Đặc trưng:**
- Bệnh suy nhược toàn diện: **KÉM ĂN, KÉM NGỦ, KÉM NGHỈ NGƠI**
- Thiếu bồi dưỡng
- Dễ **NHIỄM LẠNH, SỔ MŨI, NHỨC ĐẦU**
- "**NẮNG KHÔNG ƯA, MƯA KHÔNG CHỊU**"

⚡ **Lưu ý luận đoán:** Sao Bệnh ở Mệnh phải **PHỐI HỢP** với cung **TẬT
ÁCH** (chủ bệnh tật) và **PHÚC ĐỨC** (chủ tinh thần phúc phần) mới xác định
được mức độ ảnh hưởng.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'benh-tang-ho-khoc-hu-benh-phu-tat-ach-nan-y',
    title: 'Bệnh + Tang Hổ + Khốc Hư + Bệnh Phù tại Tật - Bệnh nan y',
    sao: ['Bệnh'],
    cung: ['Tật Ách'],
    ketHop: ['Tang Môn', 'Bạch Hổ', 'Thiên Khốc', 'Thiên Hư', 'Bệnh Phù'],
    doUuTien: 65,
    tomTat: `⚠️ **Bệnh + Tang Môn + Bạch Hổ + Thiên Khốc + Thiên Hư + Bệnh Phù tại Tật
Ách (KHÔNG có Tuần Triệt án ngữ)** — dễ mắc **BỆNH NAN Y**, cả đời lo toan
bệnh tật.

⚠️ **Đặc trưng:**
- **TANG HỔ** = trục Tang-Hổ kiếp nghiệp
- **KHỐC HƯ** = bệnh trầm kha
- **BỆNH PHÙ** = bệnh mãn tính lười biếng
- Cộng dồn → **BỆNH KHÓ CHỮA, KÉO DÀI CẢ ĐỜI**

⚡ **Hóa giải duy nhất:**
- **TUẦN TRIỆT** án ngữ → giảm bớt
- Quan Phúc, Tứ Đức, Quang Quý hỗ trợ`,
  },

  {
    id: 'benh-luong-tuong-quang-quy-quan-phuc-nghe-thuoc',
    title: 'Bệnh + Thiên Lương + Thiên Tướng + Quang Quý + Quan Phúc tại Quan - Nghề thuốc',
    sao: ['Bệnh'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Lương', 'Thiên Tướng', 'Ân Quang', 'Thiên Quan'],
    doUuTien: 60,
    tomTat: `**Bệnh + Thiên Lương + Thiên Tướng + Quang Quý + Quan Phúc tại Quan Lộc** —
hợp cách **NGHỀ THUỐC**.

⚡ **Đặc trưng:**
- Theo đuổi **NGHỀ THUỐC** là hợp cách
- Hợp các nghề: **THẦY LANG, Y TÁ, ĐIỀU DƯỠNG**
- Hoặc các lĩnh vực **Y DƯỢC, TRỊ LIỆU**
- Bộ này hóa giải Bệnh xấu thành nghề **CỨU NGƯỜI**

⚡ **Phân tích:**
- Lương + Tướng = phúc thiện cứu khổ
- Quang Quý = quý nhân giúp đỡ
- Quan Phúc = phúc thiện thiên ban
- Bệnh + bộ này → biến nguy thành cơ`,
  },

  {
    id: 'benh-hoa-ky-dai-hao-thien-khong-hao-tai-vi-benh',
    title: 'Bệnh + Hóa Kỵ + Đại Hao + Thiên Không tại Tài - Hao tài vì bệnh',
    sao: ['Bệnh'],
    cung: ['Tài Bạch'],
    ketHop: ['Hóa Kỵ', 'Đại Hao', 'Thiên Không'],
    doUuTien: 55,
    tomTat: `⚠️ **Bệnh + Hóa Kỵ + Đại Hao + Thiên Không tại Tài Bạch** — **HAO TÀI VÌ
BỆNH TẬT**.

⚠️ **Đặc trưng:**
- Do **BỆNH TẬT MÀ HAO TỐN TIỀN TÀI**
- Có những khoản **CHI BẤT NGỜ** liên quan đến **SỨC KHỎE** hoặc chăm sóc
  người thân
- Rơi vào thế "**TIỀN MẤT TẬT MANG**"

⚡ **Lưu ý:** Cần chuẩn bị **TÀI CHÍNH DỰ PHÒNG** cho rủi ro sức khỏe.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // BỆNH TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'benh-tai-menh',
    title: 'Bệnh tại Mệnh',
    sao: ['Bệnh'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `**Bệnh thủ Mệnh** — tướng mạo **GẦY GÒ ỐM YẾU**, lực sinh mệnh không vững.

⚡ **Tướng mạo:**
- **GẦY GÒ**, sắc diện **NHỢT NHẠT**
- Da dẻ thường **KHÔNG HỒNG HÀO** mà **XANH XAO, VÀNG VỌT**
- Dễ bị nhận xét **THIẾU SỨC SỐNG**
- Dáng điệu **CHẬM RÃI, THIẾU LANH LỢI**

⚡ **Sức khỏe:**
- Cơ thể dễ **ĐAU ỐM, BỆNH TẬT**
- **ĂN KÉM NGỦ ÍT**, tinh thần không dồi dào
- Dễ **NHIỄM LẠNH, SỔ MŨI, NHỨC ĐẦU**
- "**NẮNG KHÔNG ƯA, MƯA KHÔNG CHỊU**"
- **ĐẠI VẬN ĐẦU TIÊN** sao Bệnh gây ảnh hưởng lớn nhất

⚡ **Tinh thần - tính cách:**
- Tinh thần **KHÔNG PHẤN CHẤN, KHÔNG TRÁNG KIỆN**
- Không thích **HOẠT ĐỘNG**, đôi khi hơi **LƯỜI**
- Thích **NẰM** hơn làm
- "**VIỆC NHÀ THÌ NHÁC, VIỆC CHÚ BÁC THÌ SIÊNG**"
- Ở nhà thì lười, **RA NGOÀI** thường cuồng nhiệt năng nổ
- Càng **Ở NHÀ NHIỀU** → càng dễ chán nản, tinh thần sa sút

⚡ **Đặc điểm có lợi:**
- **LỢI KHI ĐI XA**
- **LẤY VỢ NHÀ CÓ ĐIỀU KIỆN**
- Cung **PHÚC TỐT**

⚠️ **Lưu ý quan trọng:**
- Bệnh ở Mệnh **KHÔNG** có nghĩa người ấy mắc bệnh, sẵn sàng mang bệnh
- Chỉ nói lên **LỰC SINH MỆNH KHÔNG VỮNG VÀNG**, dễ bệnh, dễ ốm, dễ suy
  nhược`,
  },

  {
    id: 'benh-tai-phu-mau',
    title: 'Bệnh tại Phụ Mẫu',
    sao: ['Bệnh'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Bệnh tại Phụ Mẫu** — sức khỏe **CHA MẸ DỄ ỐM**, ít quan tâm chăm sóc đương
số.

⚡ **Đặc trưng:**
- Sức khỏe cha mẹ **DỄ ỐM**
- Bản thân bố mẹ hơi **LƯỜI**
- **ÍT QUAN TÂM, CHĂM SÓC** đương số

⚡ **Đặc điểm thời thơ ấu:**
- Đương số **THIẾU SỰ QUAN TÂM, CHĂM SÓC** đầy đủ từ phụ mẫu
- Có thể vì **HOÀN CẢNH MƯU SINH** hoặc thiếu sự **GẮN KẾT**
- Thiếu gần gũi → đương số cảm thấy **THIỆT THÒI VỀ TÌNH CẢM**
- Khó **TÂM SỰ, SẺ CHIA** với cha mẹ`,
  },

  {
    id: 'benh-tai-phuc-duc',
    title: 'Bệnh tại Phúc Đức',
    sao: ['Bệnh'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `**Bệnh tại Phúc Đức** — mồ mả tổ tiên **ÍT ĐƯỢC QUAN TÂM**, dòng họ bị mất
kết nối tâm linh.

⚡ **Đặc trưng:**
- Mồ mả, bàn thờ tổ tiên **ÍT ĐƯỢC QUAN TÂM, CHĂM SÓC**
- Phần mồ mả ông bà tổ tiên **NẢY SINH VẤN ĐỀ** đến giai đoạn của mình
- Cần **QUAN TÂM CHĂM SÓC TU DƯỠNG**
- Trong họ hàng **NHIỀU NGƯỜI BỊ BỆNH**, hay ốm hay đau
- Dòng họ đang bị **MẤT KẾT NỐI TÂM LINH**, thiếu phúc âm truyền đời

⚡ **Tâm tính:**
- Đương số **ÍT TIN VÀO TÂM LINH** hay nhân quả
- Không mặn mà **THỜ PHỤNG GIA TIÊN** hay tu dưỡng nội tâm
- Chỉ khi **VẤP NGÃ** giữa đường đời mới bắt đầu **TỈNH NGỘ**

⚡ **Lời khuyên:** sao Bệnh ở Phúc Đức ám chỉ sự **BỘC PHÁT** của những vấn
đề liên quan đến **ĐỜI SỐNG TÂM LINH** — buộc đương số phải chú ý.`,
  },

  {
    id: 'benh-tai-dien-trach',
    title: 'Bệnh tại Điền Trạch',
    sao: ['Bệnh'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Bệnh tại Điền Trạch** — nhà cửa **BỪA BỘN, BỤI BẶM**, phong thủy không
tốt.

⚡ **Đặc trưng:**
- Nhà cửa **ÍT ĐƯỢC QUAN TÂM**
- **LƯỜI DỌN DẸP**, nhà cửa **HƠI BẨN**
- Sống trong không gian **BỪA BỘN, BỤI BẶM**
- Tổ ấm thành **CHỐN HAO TỔN NĂNG LƯỢNG**

⚡ **Phong thủy:**
- Nơi ở thường **PHONG THỦY KHÔNG TỐT**
- **KHÍ TRƯỜNG TRONG NHÀ TRÌ TRỆ**
- Ở nhà thường hay **BỊ ỐM ĐAU, SUY NHƯỢC**
- Ảnh hưởng đến **TÂM TRẠNG, SỨC KHỎE, VẬN KHÍ**

⚡ **Đặc điểm:** Nhà dễ **ĐÔNG CON**.

⚡ **Lời khuyên:** "**NHÀ SẠCH THÌ MÁT, BÁT SẠCH NGON CƠM**" — chăm sóc không
gian sống chính là chăm sóc sức khỏe và tinh thần.`,
  },

  {
    id: 'benh-tai-quan-loc',
    title: 'Bệnh tại Quan Lộc',
    sao: ['Bệnh'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `**Bệnh tại Quan Lộc** — môi trường **ĐỘC HẠI**, sự nghiệp **MẤT ĐỘNG LỰC**.

⚡ **Đặc trưng:**
- Môi trường làm việc dễ **ĐỘC HẠI**
- Liên quan tới **HÓA CHẤT, VỆ SINH, BỆNH TẬT**
- **GIẢM SỰ QUAN TÂM** của bản thân tới sự nghiệp, công việc

⚠️ **Sự nghiệp:**
- Sự nghiệp dễ rơi vào giai đoạn **SUY TRẦM**
- Thiếu **ĐỘNG LỰC**, không còn hứng thú công việc
- Cảm thấy **MỆT MỎI, MẤT PHƯƠNG HƯỚNG**
- Đôi khi làm việc chỉ vì **TRÁCH NHIỆM** chứ không lý tưởng

⚡ **Hợp cát tinh** (Thiên Lương, Thiên Tướng, Quang Quý, Thiên Quan, Thiên
Phúc):
- Theo đuổi **NGHỀ THUỐC** (thầy lang, y tá) là hợp cách
- Y dược, điều dưỡng, trị liệu — biến nguy thành cơ

⚡ **Hôn nhân:** Người hôn phối là người **NĂNG ĐỘNG, NHIỆT HUYẾT**, giúp ích
được mình nhiều.`,
  },

  {
    id: 'benh-tai-no-boc',
    title: 'Bệnh tại Nô Bộc',
    sao: ['Bệnh'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Bệnh tại Nô Bộc** — bạn bè **HƠI KÉM, LƯỜI, NHIỀU BỆNH**.

⚡ **Đặc trưng:**
- Bạn bè hơi **KÉM, LƯỜI**
- **NHIỀU BỆNH NHIỀU TẬT**
- Bản thân **ÍT QUAN TÂM** tới bạn bè
- Bạn bè, đồng nghiệp **THIẾU NĂNG LỰC** hoặc không thật lòng
- Dễ rơi vào cảnh "**LÀM ƠN MẮC OÁN**"
- Phải "**ĐỨNG MŨI CHỊU SÀO**", việc gì cũng ôm
- Mệt đầu mà chẳng được ghi công

⚠️ **Sát bại tinh hội:**
- Bạn bè **XẤU**
- **NHIỀU BỆNH HOẠN**
- Đề phòng **KẺ TIỂU NHÂN**
- Tránh ảnh hưởng tới sự phát triển công việc`,
  },

  {
    id: 'benh-tai-thien-di',
    title: 'Bệnh tại Thiên Di',
    sao: ['Bệnh'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Bệnh tại Thiên Di** — **NĂNG NỔ NHIỆT HUYẾT** nhưng đi xa **DỄ ỐM**.

⚡ **Đặc trưng:**
- Là người **NĂNG NỔ NHIỆT HUYẾT**
- Nhưng **ÍT QUAN TÂM, THAM GIA** các hoạt động bên ngoài
- **ÍT ĐỂ Ý** đến mọi người xung quanh
- "**CHIM LỒNG QUEN HƠI TỔ**" — chỉ thoải mái khi ở nhà
- Năng động bị **GIẢM SÚT RÕ RỆT**
- Dù mong muốn **DẤN THÂN RA NGOÀI** nhưng hay gặp cản trở

⚠️ **Đi xa:**
- Đi xa **DỄ ỐM ĐAU**
- **GẶP CẢN TRỞ**
- Mệt mỏi tâm lý
- Cần **CẨN TRỌNG** môi trường xung quanh tránh đau ốm`,
  },

  {
    id: 'benh-tai-tat-ach',
    title: 'Bệnh tại Tật Ách',
    sao: ['Bệnh'],
    cung: ['Tật Ách'],
    doUuTien: 80,
    tomTat: `**Bệnh tại Tật Ách** — **SỨC KHỎE KÉM**, chủ về bệnh tật đau yếu suy nhược.

⚡ **Đặc trưng:**
- **SỨC KHỎE KÉM**
- Chủ về **BỆNH TẬT, ĐAU YẾU, SUY NHƯỢC**
- **BUỒN RẦU, KHỜ KHẠO, HAY NHẦM LẪN**
- **HƯ NHƯỢC, TẬT BỆNH, LAO KHỔ**
- Cơ thể **SUY NHƯỢC**, dễ nhiễm bệnh kéo dài
- **KHÓ DỨT ĐIỂM**

⚠️ **Bộ Bệnh + Tang Hổ + Khốc Hư + Bệnh Phù (KHÔNG Tuần Triệt):**
- Dễ mắc **BỆNH NAN Y**
- **CẢ ĐỜI LO TOAN BỆNH TẬT**

⚡ **Hóa giải:**
- **TUẦN TRIỆT** án ngữ
- Quan Phúc, Tứ Đức, Quang Quý
- Hiện y khoa phát triển → giảm bớt cảnh "vô phương cứu chữa"`,
  },

  {
    id: 'benh-tai-tai-bach',
    title: 'Bệnh tại Tài Bạch',
    sao: ['Bệnh'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Bệnh tại Tài Bạch** — ý chí kiếm tiền **KHÔNG CAO**, bạc nhược.

⚡ **Đặc trưng:**
- Ý chí kiếm tiền **KHÔNG CAO**
- **BẠC NHƯỢC**
- **THIẾU ĐẦU ÓC THỰC TẾ**
- Tư duy kiếm tiền **THỤ ĐỘNG**
- **THIẾU THAM VỌNG**
- Dễ **CHÁN NẢN** trong việc mưu sinh
- Dù có nhạy về tiền bạc cũng dễ **TÂM LÝ MỆT MỎI**

⚠️ **Bệnh + Hóa Kỵ + sát bại tinh:**
- Do **BỆNH TẬT** mà **HAO TỐN TIỀN TÀI**
- Khoản chi **BẤT NGỜ** liên quan **SỨC KHỎE**
- "**TIỀN MẤT TẬT MANG**"`,
  },

  {
    id: 'benh-tai-tu-tuc',
    title: 'Bệnh tại Tử Tức',
    sao: ['Bệnh'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Bệnh tại Tử Tức** — con **ÍT, HAY ĐAU ỐM**.

⚡ **Đặc trưng:**
- Con **ÍT**
- Con **HAY ĐAU ỐM, BỆNH TẬT**
- Sinh ra dễ **ỐM ĐAU** hoặc **KHÓ NUÔI**

⚠️ **Hội nhiều sát bại tinh** (hung sát bại hình kỵ):
- Con cái dễ **MẮC DỊ TẬT**
- Tình cảm với con cái có sự **XA CÁCH**

⚡ **Lời khuyên:** Chú trọng **SỨC KHỎE SINH SẢN**, chế độ **DƯỠNG THAI**, học
cách **LẮNG NGHE VÀ THẤU HIỂU CON** từ sớm.`,
  },

  {
    id: 'benh-tai-tu-tuc-nu-kho-de',
    title: 'Bệnh tại Tử Tức - nữ khó đẻ sinh nở khó',
    sao: ['Bệnh'],
    cung: ['Tử Tức'],
    gioiTinh: 'Nữ',
    doUuTien: 68,
    tomTat: `⚠️ **Bệnh thủ Tử Tức - Nữ mệnh:**
- Phụ nữ dễ mắc bệnh **KHÓ ĐẺ**
- Khó khăn trong **SINH NỞ**
- Sức khỏe sinh sản **YẾU**
- Cần khám tiền sản kỹ, chế độ dưỡng thai chu đáo`,
  },

  {
    id: 'benh-tai-phu-the',
    title: 'Bệnh tại Phu Thê',
    sao: ['Bệnh'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `**Bệnh tại Phu Thê** — vợ chồng **ÍT QUAN TÂM NHAU**, hôn phối lười và hay
ốm.

⚡ **Đặc trưng:**
- Hai vợ chồng **ÍT QUAN TÂM NHAU**
- Người hôn phối hơi **LƯỜI**
- Ý chí **KHÔNG CAO**
- Sức khỏe dễ **ỐM ĐAU, TẬT BỆNH**
- Sức đề kháng kém, cần **TẨM BỔ, TĂNG CƯỜNG**

⚡ **Đối ứng cách Bệnh - Trường Sinh xung:**
- Đương số có sự nghiệp công danh **DỄ PHÁT TRIỂN HƠN** người hôn phối

⚠️ **Cảnh báo:**
- Cách của những người **HI SINH QUÁ NHIỀU** trong tình yêu
- Đối phương cảm thấy **NGỘT NGẠT** và không còn muốn quan tâm
- Cần **THẤU HIỂU TỪ NHỮNG ĐIỀU NHỎ NHẤT**`,
  },

  {
    id: 'benh-tai-huynh-de',
    title: 'Bệnh tại Huynh Đệ',
    sao: ['Bệnh'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Bệnh tại Huynh Đệ** — anh chị em **HƠI LƯỜI, HAY BỆNH TẬT**.

⚡ **Đặc trưng:**
- Anh chị em ruột hơi **LƯỜI**
- Hay **BỆNH TẬT, ỐM ĐAU**
- **THỂ TRẠNG KÉM**

⚠️ **Quan hệ:**
- Có thể **SỐNG XA NHAU** nên tình cảm dần **PHAI NHẠT**
- Mối quan hệ trong gia đình **THIẾU SỰ CHIA SẺ**
- **ÍT GẶP GỠ**, dễ bề **LẠNH NHẠT** theo thời gian
- Dù máu mủ ruột rà, không vun đắp thì tình cảm cũng **PHAI MỜ**`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // BỆNH VÀO ĐẠI VẬN
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'benh-vao-dai-van-tuoi-day-thi',
    title: 'Bệnh vào đại vận - Tuổi dậy thì',
    sao: ['Bệnh'],
    doUuTien: 50,
    tomTat: `**Bệnh nhập đại vận tuổi dậy thì + thêm hung tinh xung chiếu** — dễ gây
**CHẬM LỚN, THIẾU DINH DƯỠNG**.

⚡ **Đặc trưng:**
- Hiện tượng **CHẬM LỚN**
- **THIẾU DINH DƯỠNG**
- **RỐI LOẠN NỘI TIẾT**
- **THẤP BÉ, GẦY YẾU**
- **SỨC ĐỀ KHÁNG KÉM**

⚡ **Lưu ý:** Vẫn cần lấy cung **TẬT ÁCH** làm trọng điểm phối hợp vận hạn.`,
  },

  {
    id: 'benh-vao-dai-van-trung-nien',
    title: 'Bệnh vào đại vận - Trung niên 25-45 tuổi',
    sao: ['Bệnh'],
    doUuTien: 50,
    tomTat: `**Bệnh nhập đại vận trung niên (25-45 tuổi)** — không thể hiện rõ mức độ
nghiêm trọng.

⚡ **Đặc trưng:**
- Nhất là khi đại vận có các **SAO CÁT LỢI**
- Sao Bệnh chỉ ra quá trình **HY SINH SỨC KHỎE** để **ĐÁNH ĐỔI SỰ NGHIỆP**
- Lao động cường độ cao đổi lấy thành công

⚡ **Lời khuyên:** Cần biết **DỪNG ĐÚNG LÚC**, không "đốt cháy" cơ thể vô tội
vạ.`,
  },

  {
    id: 'benh-vao-dai-van-hau-van',
    title: 'Bệnh vào đại vận - Hậu vận tuổi già',
    sao: ['Bệnh'],
    doUuTien: 50,
    tomTat: `**Bệnh nhập đại vận tuổi già** — sức khỏe **SUY YẾU THÊM MỘT BẬC** so với
thông thường.

⚡ **Đặc trưng:**
- Sức khỏe đi xuống do tuổi già hoặc bệnh nền
- Đại vận có Bệnh = **TÍN HIỆU SUY YẾU THÊM**

⚠️ **Cảnh báo "GIÓ LAY CÂY YẾU":**
- Chỉ cần **MỘT TÁC ĐỘNG NHỎ** cũng dẫn đến **BIẾN CHỨNG LỚN**

⚡ **Cần:**
- Điều chỉnh chế độ **ĂN UỐNG, NGỦ NGHỈ**
- **THĂM KHÁM KỊP THỜI**
- Thận trọng với mọi triệu chứng nhỏ`,
  },
];
