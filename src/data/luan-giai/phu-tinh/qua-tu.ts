import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO QUẢ TÚ - Thổ, Ám Tinh.
 *
 * An theo NHÓM 3 CHI của năm sinh (engine).
 *
 * Quy luật bắt buộc: Quả Tú LUÔN tam hợp Cô Thần.
 *
 * Đặc trưng riêng:
 *   - "Nữ kỵ Quả" — Quả Tú đi với NỮ mệnh phát tác mạnh nhất
 *   - Quả Tú thiên về NỘI TÂM TRẦM MẶC (khác Cô Thần thiên về TÁCH BIỆT)
 *   - Quả Tú Phúc Đức = nhà có BÀ CÔ TỔ linh thiêng (nữ mất sớm)
 *
 * Phần CHUNG cặp Cô-Quả đã viết tại file co-than.ts với
 * sao: ['Cô Thần', 'Quả Tú'].
 */
export const luanGiai_QuaTu: DoanLuanGiai[] = [
  {
    id: 'qua-tu-tinh-chat-chung',
    title: 'Quả Tú - Đặc tính chung',
    sao: ['Quả Tú'],
    doUuTien: 32,
    tomTat: `**Quả Tú** — phụ tinh **ÁM TINH**, an theo **nhóm 3 chi** năm sinh.

**Ngũ hành:** **Thổ**.

⚡ **Tên gọi rút gọn:** "**Quả**".

⚡ **Đặc tính:**
- Chủ về sự **CÔ ĐỘC, KHÉP KÍN, U BUỒN** trong nội tâm
- **KÍN ĐÁO**, ít bộc lộ mặt tốt ra ngoài
- Dáng vẻ **TRẦM LẶNG, ÍT NÓI**, khó hòa nhập với tập thể

⚡ **Khác Cô Thần:**
- **CÔ THẦN** = thiên về **TÁCH BIỆT KHỎI TẬP THỂ**
- **QUẢ TÚ** = thiên về **NỘI TÂM TRẦM MẶC**

⚡ **Quy luật cơ bản:**
- LUÔN tam hợp hội chiếu **Cô Thần**
- "**NAM KỴ CÔ, NỮ KỴ QUẢ**" — Quả Tú phát tác mạnh nhất với **NỮ mệnh**
- Đặc biệt **kỵ CHỒNG và CHA**

⚡ **Tâm linh:** Quả Tú Phúc Đức = nhà có **BÀ CÔ TỔ linh thiêng** phù trì
(người nữ trong họ mất sớm khi còn trẻ).

⚡ **Mặt sáng:** Khi gặp cát tinh → **TƯ DUY ĐỘC LẬP, TỰ LO LIỆU, GIỮ KỶ
LUẬT**, đôi khi mở ra cơ duyên với **TÂM LINH, TU TẬP**.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // QUẢ TÚ TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'qua-tu-tai-menh',
    title: 'Quả Tú tại Mệnh',
    sao: ['Quả Tú'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `**Quả Tú thủ Mệnh** — toát ra thần thái **LẠNH LÙNG**, gương mặt **U BUỒN,
ÍT NÓI**, không mấy khi chủ động giao du.

⚡ **Đặc trưng:**
- Bạn bè **THƯA THỚT**, mối quan hệ khó gắn bó bền lâu
- Sự cô độc khiến chủ mệnh hay cảm thấy mình là **"NẠN NHÂN CỦA SỐ PHẬN"**
- **CHÁN NẢN VÀ NGẠI ĐỔI THAY**

⚡ **Khác Cô Thần:**
- Quả Tú thiên về **NỘI TÂM TRẦM MẶC** (sâu sắc, lặng lẽ)
- Cô Thần thiên về **TÁCH BIỆT KHỎI TẬP THỂ**

⚡ **Điểm sáng:**
- **KIÊN NHẪN VÀ Ý CHÍ CỨNG CỎI** khi đối diện khó khăn

⚡ **Cát tinh hội (Hóa Khoa, Xương Khúc, Khôi Việt, Thai Phụ, Phong Cáo):**
- Nét u buồn dần chuyển hóa thành **SÂU SẮC**
- Được trọng vọng bởi **ĐIỀM ĐẠM, CHÍN CHẮN, HỌC VẤN VỮNG VÀNG**

⚡ **Hội Thiên Tướng + Thất Sát + Hóa Quyền + Tướng Quân:**
- Trầm lặng hóa **KHÍ CHẤT UY NGHI**
- Lời nói có **SỨC NẶNG**
- Dễ thành người **CẦM QUYỀN** trong tập thể

⚠️ **"NỮ KỴ QUẢ":** Phát tác mạnh nhất với nữ mệnh — kỵ chồng kỵ cha.`,
  },

  {
    id: 'qua-tu-tai-phu-mau',
    title: 'Quả Tú tại Phụ Mẫu',
    sao: ['Quả Tú'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Quả Tú tại Phụ Mẫu** — cha mẹ thường sống **KHÉP KÍN, NGHIÊM KHẮC**, ít sẻ chia.

⚡ **Cát tinh hội (Xương Khúc, Khôi Việt, Hóa Khoa):**
- Cha mẹ **HỌC THỨC, ĐẠO ĐỨC**
- Con cái **TRƯỞNG THÀNH SỚM** và hưởng phúc ấm

⚡ **Sát tinh hội:**
- Cha mẹ tình cảm **LẠNH NHẠT**, dễ **BẤT HÒA, CHIA LY**
- Cha mẹ cô độc, hay buồn phiền
- Con cái sớm phải **TỰ LỰC CÁNH SINH**

⚠️ **+ Tuần Triệt:** một bên cha hoặc mẹ **YỂU MỆNH**.

⚠️ **+ Không Kiếp + Đại Hao:**
- Phúc ấm **SUY GIẢM**
- "Đời cha ăn mặn, con khát nước"
- Con cái phải chịu hệ lụy`,
  },

  {
    id: 'qua-tu-tai-phuc-duc-ba-co-to',
    title: 'Quả Tú tại Phúc Đức - Bà Cô Tổ linh thiêng',
    sao: ['Quả Tú'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `**Quả Tú tại Phúc Đức** — tạo **XA CÁCH** trong dòng họ.

⚡ **Cát tinh hội (Thiên Đức + Long Phượng + Thiên Việt):**
- Gia tộc được **HƯỞNG PHÚC** nhờ **BÀ CÔ TỔ** phù trì
- Con cháu duyên đến **MUỘN** nhưng hôn nhân **YÊN ẤM**

⚡ **Tâm linh đặc biệt:** Quả Tú Phúc = nhà có **BÀ CÔ TỔ LINH THIÊNG**
(người nữ mất sớm khi còn trẻ → trở thành Bà Cô Tổ phù trì).

⚠️ **Sát tinh hội:**
- Phụ nữ **ĐOẢN MỆNH**
- Gia tộc **PHÂN TÁN**, mồ mả không tụ
- Con cháu **THA HƯƠNG**

⚠️ **+ Không Kiếp + Tuần Triệt:**
- Phúc mỏng, thọ yếu
- Có nguy cơ **TUYỆT TỰ**`,
  },

  {
    id: 'qua-tu-tai-dien-trach',
    title: 'Quả Tú tại Điền Trạch',
    sao: ['Quả Tú'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Quả Tú tại Điền Trạch** — liên quan **ĐẤT ĐAI, MỒ MẢ, NHÀ CỬA**.

⚡ **Sát tinh hội:**
- Điền sản **KHÓ BỀN**
- Dễ xảy ra **TRANH CHẤP, HAO HỤT, PHÂN TÁN**
- Trong nhà thường có **PHỤ NỮ ĐOẢN DUYÊN**
- Sinh hoạt **KHÉP KÍN**, khó hòa thuận với làng xóm

⚡ **Cát tinh hội:**
- Đất nhà **VỮNG CHẮC**
- Đời sau có duyên gây dựng **BẤT ĐỘNG SẢN BỀN LÂU**
- Gia đạo **ỔN ĐỊNH**
- Giao tiếp ngoài xã hội không nhiều nhưng giữ **YÊN Ả, ÍT THỊ PHI**`,
  },

  {
    id: 'qua-tu-tai-quan-loc',
    title: 'Quả Tú tại Quan Lộc',
    sao: ['Quả Tú'],
    cung: ['Quan Lộc'],
    doUuTien: 75,
    tomTat: `**Quả Tú tại Quan Lộc** — phải **"ĐƠN THƯƠNG ĐỘC MÃ"** trên con đường sự
nghiệp.

⚡ **Đặc trưng:**
- Tự mình gánh vác công danh
- Ít được **DỰA DẪM** người khác
- Phù hợp với nghề **NGHIÊN CỨU, QUẢN LÝ TÀI SẢN, HÀNH CHÍNH**

⚡ **Cát tinh hội:**
- Sự nghiệp **BỀN VỮNG**
- Hợp những công việc đòi hỏi **TỰ CHỦ**

⚠️ **Sát tinh hội (Kình Đà + Không Kiếp + Hóa Kỵ):**
- Công danh **THĂNG TRẦM**
- Dễ bị **CÔ LẬP**, thất bại trong hợp tác
- Tệ hơn vướng **TRANH CHẤP, KIỆN TỤNG**

⚡ **Đặc trưng môi trường:**
- Quả Tú → ít nữ, **NHIỀU NAM**
- (Cô Thần → ít nam, nhiều nữ)`,
  },

  {
    id: 'qua-tu-tai-no-boc',
    title: 'Quả Tú tại Nô Bộc',
    sao: ['Quả Tú'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Quả Tú tại Nô Bộc** — quan hệ xung quanh **KHÔNG NHIỀU** nhưng phần đa
**ĐÁNG TIN CẬY**.

⚡ **Cát tinh hội:**
- Cộng sự **TRUNG THÀNH**
- Sẵn sàng "**KỀ VAI SÁT CÁNH**" lúc cần

⚠️ **Sát tinh hội (Hóa Kỵ + Không Kiếp):**
- Tình bạn "**SỚM NỞ TỐI TÀN**"
- Dễ bị **PHẢN BỘI**
- Gặp **TAI BAY VẠ GIÓ** vì bị bạn bè ảnh hưởng
- Cấp dưới thiếu gắn bó

⚡ Bạn ít nữ, nhiều nam (đặc trưng Quả Tú).`,
  },

  {
    id: 'qua-tu-tai-thien-di',
    title: 'Quả Tú tại Thiên Di',
    sao: ['Quả Tú'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Quả Tú tại Thiên Di** — ra ngoài thận trọng, ít kết bạn mới.

⚡ **Sát tinh hội:**
- Ra ngoài dễ gặp **THỊ PHI, TRANH CHẤP**
- Bị **HIỂU LẦM, CẢN TRỞ**
- Quan hệ xã giao **MONG MANH, NHANH TÀN**
- Có thể "**RƯỚC HỌA VÀO THÂN**"

⚡ **Cát tinh hội:**
- Tuy ít nói, giữ khoảng cách
- Gây ấn tượng bằng **TÀI NĂNG VÀ UY TÍN**
- Mạng lưới ngoại giao ít nhưng **CHẤT LƯỢNG**
- Được nhiều nam giới **NỂ TRỌNG, GIÚP ĐỠ**

⚡ **Đặc trưng giới tính:**
- Quả Tú → tiếp xúc nhiều với **ĐÀN ÔNG**
- Mạng lưới quan hệ thừa **NAM THIẾU NỮ**`,
  },

  {
    id: 'qua-tu-tai-tat-ach',
    title: 'Quả Tú tại Tật Ách',
    sao: ['Quả Tú'],
    cung: ['Tật Ách'],
    doUuTien: 76,
    tomTat: `**Quả Tú tại Tật Ách** — ốm đau **KHÔNG AI HAY**, hoạn nạn không ai biết.

⚡ **Đặc trưng bệnh:**
- Bệnh **ĐƯỜNG TIÊU HÓA, HẬU MÔN, TRĨ**
- Bệnh **MÃN TÍNH HAY TÁI LẠI**
- Tai họa thường đến **ÂM THẦM**, nhất là khi ở một mình

⚠️ **Cảnh báo:** Để lại hậu quả nghiêm trọng khi không được phát hiện và
xử lý kịp thời.

⚡ **Cát tinh hội:**
- Sức khỏe tuy không dồi dào
- Biết giữ thói quen sống **ĐIỀU ĐỘ**
- Bệnh tật **PHÒNG NGỪA** được
- Tai nạn cũng **GIẢM NHẸ**`,
  },

  {
    id: 'qua-tu-tai-tai-bach',
    title: 'Quả Tú tại Tài Bạch',
    sao: ['Quả Tú'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Quả Tú tại Tài Bạch** — tài chính kém ổn định, khó tích lũy.

⚠️ **Sát tinh vây hãm:**
- Việc **KINH DOANH BUÔN BÁN** trắc trở
- Hay hao hụt
- "**TIỀN VÀO CỬA TRƯỚC, RA CỬA SAU**"

⚡ **Cát tinh hội (Vũ Khúc, Lộc Tồn, Đẩu Quân):**
- Khả năng **QUẢN LÝ TÀI CHÍNH** tốt
- Tuy không phát tài bất ngờ
- Thu nhập **ỔN ĐỊNH**
- "**GÓP GIÓ THÀNH BÃO**" mà nên cơ nghiệp`,
  },

  {
    id: 'qua-tu-tai-tu-tuc',
    title: 'Quả Tú tại Tử Tức',
    sao: ['Quả Tú'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Quả Tú tại Tử Tức** — đường con cái **KHÔNG NHƯ Ý**, khó thấy cảnh
"con đàn cháu đống".

⚠️ **Sát tinh đồng cung:**
- Sinh nở dễ **HIẾM MUỘN**
- Con khó nuôi
- Cha mẹ con cái **XA MẶT CÁCH LÒNG**
- Ít có sự sẻ chia

⚡ **Cát tinh nâng đỡ:**
- Dù **ÍT CON** nhưng sinh được con **HIẾU THUẬN, THÔNG MINH**
- Có **CHÍ LẬP THÂN** và dễ thành đạt

⚡ **Chênh lệch giới tính:**
- Quả Tú → **ÍT CON GÁI**
- (Cô Thần → ít con trai)`,
  },

  {
    id: 'qua-tu-tai-phu-the',
    title: 'Quả Tú tại Phu Thê',
    sao: ['Quả Tú'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `**Quả Tú tại Phu Thê** — ảnh hưởng đến hôn nhân (đặc biệt nữ mệnh).

⚡ **Cát tinh hội (Tứ Đức + Lục Cát Tinh):**
- Hôn nhân **YÊN ỔN**
- Vợ chồng "**DĨ HÒA VI QUÝ**", tôn trọng khoảng trời riêng
- Không quá ngọt ngào nhưng đời sống gia đình **YÊN ẤM**
- Con cái được chăm sóc chu toàn

⚠️ **Đồng cung Tuần + Triệt + Không Kiếp + Hồng Loan:**
- Tình cảm "**CƠM CHẲNG LÀNH, CANH CHẲNG NGỌT**"
- Vợ chồng hay **BẤT ĐỒNG, XA CÁCH**
- Hôn nhân mang màu **CÔ ĐỘC**, không có sự thấu hiểu

⚡ **Đặc biệt nữ mệnh** ("Nữ kỵ Quả") — phát tác mạnh nhất, kỵ chồng kỵ cha.`,
  },

  {
    id: 'qua-tu-tai-huynh-de',
    title: 'Quả Tú tại Huynh Đệ',
    sao: ['Quả Tú'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Quả Tú tại Huynh Đệ** — giảm sự **GẮN KẾT TRONG TÌNH THÂN**.

⚠️ **Hội Cô Thần + Tuần Triệt + Không Kiếp:**
- Cách cục **LY TÁN** rõ rệt
- Anh chị em **"BẰNG MẶT KHÔNG BẰNG LÒNG"**
- **MẠNH AI NẤY SỐNG**

⚡ **Cát tinh hội:**
- Anh chị em ít nhưng **"NGHĨA NẶNG TÌNH THÂM"**
- Dù mỗi người một nơi vẫn biết **ĐÙM BỌC, GIÚP ĐỠ NHAU**
- Cả tinh thần lẫn vật chất

⚡ **Chênh lệch giới tính:**
- Quả Tú → **ÍT CHỊ EM GÁI**
- Mình là gái thì dễ có **ANH EM TRAI**`,
  },
];
