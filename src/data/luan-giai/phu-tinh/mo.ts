import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO MỘ - Thổ.
 *
 * Vị trí THỨ 9 trong Vòng Trường Sinh 12 sao:
 * Trường Sinh: Mộc Dục: Quan Đới: Lâm Quan: Đế Vượng: Suy
 * Bệnh: Tử: MỘ: Tuyệt: Thai: Dưỡng
 *
 * An theo CỤC.
 *
 * Đặc trưng:
 * - Sau khi "TỬ" (chết): giai đoạn NHẬP ÁO QUAN, vào quan tài, nằm im
 * dưới đất
 * - Trạng thái ĐỨNG YÊN, NẰM IM, KHÔNG THAY ĐỔI HAY CHUYỂN BIẾN
 * - Đại diện: CHẬM THAY ĐỔI, CHẬM TIẾP THU, CÙ LẦN, BẢO THỦ
 * - Mộ là năm ở DƯỚI ĐẤT: TRÍ TUỆ KHÔNG SÁNG, CHẬM HIỂU (nếu không có
 * cát tinh, văn tinh hỗ trợ)
 * - Vì là chôn cất: CẤT GIẤU, ẨN KHUẤT, BẢO VỆ
 * - Bản thân cũng KHÔNG MUỐN TIÊU TỐN nó (giữ của)
 *
 * Cách Sinh-Vượng-Mộ TAM HỢP với Trường Sinh và Đế Vượng — chu trình
 * sinh-phát-kết của một đời.
 *
 * Đặc biệt Tứ Mộ (Thìn-Tuất-Sửu-Mùi):
 * - Mộ + Thai + Tọa tại Tứ Mộ = mồ mả tốt đẹp con cháu
 * - Mộ + Tam Thai + Bát Tọa tại Tứ Mộ = văn võ kiêm toàn
 */
export const luanGiai_Mo: DoanLuanGiai[] = [
  {
    id: 'mo-tinh-chat-chung',
    title: 'Mộ - Đặc tính chung',
    sao: ['Mộ'],
    doUuTien: 33,
    tomTat: `**Mộ** — phụ tinh **TÍCH TỤ + ẨN KHUẤT**, vị trí **THỨ 9** vòng Trường Sinh.

**Ngũ hành:** **Thổ**.

**Đặc tính:**
- Sau khi **TỬ** (chết): giai đoạn **NHẬP ÁO QUAN**, vào quan tài, nằm im
  dưới đất
- **CHÔN CẤT, CHẬM CHẠP, CHẬM TIẾN**
- **NHẦM LẪN, NGU ĐỘN, NGĂN TRỞ** công việc
- **CẤT GIẤU, ẨN KHUẤT, BẢO VỆ**

**Vai trò:**
- Trạng thái **ĐỨNG YÊN, NẰM IM, KHÔNG THAY ĐỔI**
- Đại diện cho **CHẬM THAY ĐỔI, CHẬM TIẾP THU, CÙ LẦN, BẢO THỦ**
- Mộ là năm ở **DƯỚI ĐẤT**: trí tuệ **KHÔNG SÁNG, CHẬM HIỂU** nếu không có
  cát tinh / văn tinh hỗ trợ

**Tam hợp Sinh-Vượng-Mộ:** Trường Sinh + Đế Vượng + Mộ luôn tam hợp — chu
trình sinh-phát-kết của đời người.

**Đặc tính tích trữ:**
- Vì là **CHÔN CẤT**: **CẤT GIẤU, ẨN KHUẤT, BẢO VỆ**
- Bản thân cũng **KHÔNG MUỐN TIÊU TỐN**: giữ của, tiết kiệm`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'mo-tam-thai-bat-toa-tu-mo-van-vo-kiem-toan',
    title: 'Mộ + Tam Thai + Bát Tọa tại Tứ Mộ - Văn võ kiêm toàn',
    sao: ['Mộ'],
    chi: ['Thìn', 'Tuất', 'Sửu', 'Mùi'],
    ketHop: ['Tam Thai', 'Bát Tọa'],
    doUuTien: 65,
    tomTat: `**Mộ + Tam Thai + Bát Tọa tại Tứ Mộ** (Thìn-Tuất-Sửu-Mùi) — **VĂN VÕ KIÊM
TOÀN**.

**Đặc trưng:**
- Tài năng **VĂN VÕ KIÊM TOÀN**
- Đặc biệt **NỔI TRỘI** ở Tứ Mộ
- Là cách cục **ĐẶC BIỆT TỐT**
- Mộ + Tam Thai + Bát Tọa cộng hưởng tại đất gốc của Mộ`,
  },

  {
    id: 'mo-thai-toa-tu-mo-mo-ma-dep',
    title: 'Mộ + Thai + Tọa tại Tứ Mộ - Mồ mả tốt đẹp',
    sao: ['Mộ'],
    cung: ['Phúc Đức'],
    chi: ['Thìn', 'Tuất', 'Sửu', 'Mùi'],
    ketHop: ['Thai', 'Bát Tọa'],
    doUuTien: 65,
    tomTat: `**Mộ + Thai + Bát Tọa tại Tứ Mộ** — chủ sự **MỒ MẢ TỐT ĐẸP**, đắc lợi cho
con cháu về sau.

**Đặc trưng:**
- Mồ mả **TỐT ĐẸP**
- **ĐẮC LỢI** cho con cháu về sau
- Phúc phần dòng họ **BỀN VỮNG, THỊNH VƯỢNG LÂU DÀI**
- Báo hiệu **NỀ NẾP GIA PHONG**, gia tộc duy trì truyền thống`,
  },

  {
    id: 'mo-hao-mat-u-toi',
    title: 'Mộ + Song Hao - Hao làm mất tính u tối',
    sao: ['Mộ'],
    ketHop: ['Tiểu Hao', 'Đại Hao'],
    doUuTien: 55,
    tomTat: `**Mộ + Song Hao (Tiểu Hao / Đại Hao)** — **HAO LÀM MẤT TÍNH U TỐI** của Mộ.

**Đặc trưng:**
- Song Hao **PHÁ VỠ** trạng thái cất giấu, ẩn khuất của Mộ
- Tính chất **U TỐI, BẢO THỦ** giảm bớt
- Không còn keo kiệt, biết tiêu pha
- Tinh thần **THÔNG THOÁNG HƠN**

Đây là cách **TƯƠNG SINH** giữa Hao và Mộ — Hao tan Mộ để mở thoáng.`,
  },

  {
    id: 'mo-long-tri-phuong-cac-di-san',
    title: 'Mộ + Long Trì + Phượng Các - Có di sản tổ phụ',
    sao: ['Mộ'],
    ketHop: ['Long Trì', 'Phượng Các'],
    doUuTien: 60,
    tomTat: `**Mộ + Long Trì + Phượng Các** — chủ về **CÓ DI SẢN TỔ PHỤ**.

**Đặc trưng:**
- Có **DI SẢN** từ tổ tiên để lại
- Long Phượng = quý tinh phúc tinh
- Mộ = tích trữ, cất giấu
-: Cách **THỪA HƯỞNG TÀI SẢN GIA TỘC**
- Đất đai, nhà cửa, vàng bạc tổ tiên giữ cho con cháu`,
  },

  {
    id: 'mo-hoa-loc-cua-tan-tay',
    title: 'Mộ + Hóa Lộc - Của đến tận tay',
    sao: ['Mộ'],
    ketHop: ['Hóa Lộc'],
    doUuTien: 60,
    tomTat: `**Mộ + Hóa Lộc** — chủ về **CỦA ĐẾN TẬN TAY**.

**Đặc trưng:**
- Của cải **ĐẾN ĐƯỢC TẬN TAY** không bị phân tán
- Tiền bạc **GIỮ LẠI ĐƯỢC**
- Hóa Lộc + Mộ = **TÍCH LŨY ĐƯỢC**, không phung phí
- Tài lộc **BỀN VỮNG**`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // MỘ TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'mo-tai-menh',
    title: 'Mộ tại Mệnh',
    sao: ['Mộ'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `**Mộ thủ Mệnh** — sự **CHẬM CHẠP, U MÊ**, người **BẢO THỦ**.

**Tướng mạo:**
- Dáng dấp **CHẬM CHẠP**, kém linh hoạt
- Dáng hình **THIẾU SỨC SỐNG, UỂ OẢI**
- Không ưa bon chen
- Ngại tranh luận, **CHỌN CÁCH SỐNG THU MÌNH**
- Dù không bệnh tật vẫn dễ thấy nét **UỂ OẢI, THIẾU SINH KHÍ**

**Tính cách:**
- Người **CHẬM CHẠP, CHẬM TIẾN, ÍT NHIỆT HUYẾT**
- **KHÔNG ƯA TRANH LUẬN**
- **BẢO THỦ, U MÊ, DÂM DỤC**
- **NGẠI VA CHẠM, ƯA ỔN ĐỊNH, SỢ THAY ĐỔI**
- **TỰ TIN QUÁ VÀO BẢN THÂN**: sinh ra ngu muội
- Không có **TÍNH CÔNG TÂM**

**Tài chính:**
- Thích **TIẾT KIỆM**, đôi khi hơi **KEO KIỆT**
- **KHÔNG PHÓNG KHOÁNG**
- Hay **GIẤU DIẾM, CẤT TIỀN GIẤU CỦA**
- "**MÈO GIỮ MỠ**"

**Cát tinh hội:**
- Đức tính giữ gìn: biến thành **KIÊN NHẪN, CẨN TRỌNG, BIẾT CHỜ THỜI**

**Sát tinh / hung tinh hội chiếu:**
- Rơi vào trạng thái **Ù LÌ, MÊ MUỘI**
- **BẢO THỦ ĐẾN MỨC CỐ CHẤP**
- **PHẢN ỨNG CHẬM** với thời cuộc
- Dễ **LỠ DUYÊN**, đánh mất cơ hội thăng tiến và phát triển`,
  },

  {
    id: 'mo-tai-phu-mau',
    title: 'Mộ tại Phụ Mẫu',
    sao: ['Mộ'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Mộ tại Phụ Mẫu** — cha mẹ **HIỀN LÀNH GIẢN DỊ, CHỊU KHÓ TIẾT KIỆM**.

**Đặc trưng:**
- Cha mẹ **HIỀN LÀNH**
- Nghề nghiệp **CƠ BẢN, ÍT THAY ĐỔI**
- Hơi **BẢO THỦ VÀ CHẬM TIẾN**
- Là người **GIẢN DỊ**
- **CHỊU KHÓ TIẾT KIỆM TÍCH LŨY** tiền bạc, của cải

**Lối sống:**
- Thiên về sự **KÍN ĐÁO, DÈ DẶT**
- Không giỏi **BỘC LỘ CẢM XÚC**
- "**TÍCH CỐC PHÒNG CƠ**"

**Cảnh báo:**
- Bản tính **CHẬM CHẠP, NGẠI THAY ĐỔI**
- Dễ **BỎ LỠ NHIỀU CƠ HỘI** cải thiện cuộc sống
- Con cái cũng khó có điều kiện để **PHÁT TRIỂN**`,
  },

  {
    id: 'mo-tai-phuc-duc',
    title: 'Mộ tại Phúc Đức',
    sao: ['Mộ'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `**Mộ tại Phúc Đức** — **MỒ YÊN MẢ ĐẸP**, hưởng phúc tổ tiên.

**Đặc trưng:**
- Mồ mả **YÊN ỔN, ĐẸP ĐẼ**
- **KHÔNG BỊ ĐỘNG HAY XÂM PHẠM**
- Bản thân **GIỮ ĐƯỢC** và **TIẾP TỤC TÔN BỒI** phúc đức của ông bà tổ tiên
  để lại
- Biết **GÌN GIỮ NỀ NẾP GIA PHONG**
- Biết **TIẾP NỐI CÔNG ĐỨC** tổ tiên

**Đặc điểm cá nhân:**
- Người **RA NGOÀI GẶP NHIỀU MAY MẮN**
- Kết hôn xong mọi việc **DỄ PHÁT TRIỂN HƠN**

- Cách Mộ + Thai + Tọa tại Tứ Mộ được tách thành luận giải riêng.`,
  },

  {
    id: 'mo-tai-dien-trach',
    title: 'Mộ tại Điền Trạch',
    sao: ['Mộ'],
    cung: ['Điền Trạch'],
    doUuTien: 78,
    tomTat: `**Mộ tại Điền Trạch** — **GIỮ NHÀ ÔNG BÀ TỔ TIÊN ĐỂ LẠI**.

**Đặc trưng:**
- **GIỮ ĐƯỢC** cửa nhà ông bà tổ tiên để lại
- Có duyên với **BẤT ĐỘNG SẢN TỔ TIÊN**
- Biết giữ gìn **NHÀ CỬA, RUỘNG VƯỜN, ĐẤT ĐAI**
- Người **CHỊU KHÓ TÍCH CÓP, CHI LI**
- "**TIỀN CHÔN CỦA GIẤU**", nhiều khi thành **KEO KIỆT**

**Đặc điểm:**
- Nhà cửa **ÍT THAY ĐỔI, SỬA SANG**
- Nhà cũ nhưng **KHÔNG ĐƯỢC TU SỬA** thường xuyên

**Hội nhiều ám sát tinh:**
- Nhà gần **NGHĨA TRANG, NGHĨA ĐỊA**
- Dưới nhà dễ có **HÀI CỐT**
- Nơi ở dễ từng là **ĐẤT CHÔN HÀI CỐT, GẦN MỘ PHẦN**
- Hoặc ẩn chứa yếu tố **TÂM LINH KHÓ LƯỜNG**

**Lưu ý:** cần nghiên cứu thật kỹ **PHONG THỦY** để tránh ảnh hưởng lâu
dài đến gia đạo.`,
  },

  {
    id: 'mo-tai-quan-loc',
    title: 'Mộ tại Quan Lộc',
    sao: ['Mộ'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `**Mộ tại Quan Lộc** — công việc **DẬM CHÂN TẠI CHỖ**, ít thay đổi.

**Đặc trưng:**
- Công việc **ÍT THAY ĐỔI**
- **ĐỨNG IM MỘT CHỖ**
- Làm **CHẬM** khả năng thăng tiến đi nhiều
- Thiếu sự **ĐỘT PHÁ**
- Thích sự **YÊN ỔN, NGẠI NHẢY VIỆC**
- Lặp đi lặp lại

**Hợp nghề - cất giữ kín đáo:**
- **BẢO QUẢN, CẤT GIỮ, THỦ KHO**
- **KẾ TOÁN, LƯU TRỮ**
- Công việc yêu cầu tính **BÍ MẬT, KÍN ĐÁO**
- Các ngành nghề về **MỒ MẢ, TANG LỄ**
- **QUẢN LÝ TÀI SẢN**`,
  },

  {
    id: 'mo-tai-no-boc',
    title: 'Mộ tại Nô Bộc',
    sao: ['Mộ'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Mộ tại Nô Bộc** — bạn bè **ÍT NHƯNG LÂU BỀN**, đơn giản thật thà.

**Đặc trưng:**
- **GIẢM SỐ LƯỢNG** bạn bè
- **ÍT GIAO** nhưng chơi với ai thì **RẤT LÂU BỀN**
- Mạng lưới quan hệ xã hội thường **KHÔNG RỘNG**
- "**BÈ ÍT BẠN THƯA**"
- Bạn bè **ĐƠN GIẢN, THẬT THÀ** nên chơi được lâu dài
- Cộng sự, bạn bè, cấp dưới có đức tính **HIỀN LÀNH, CHẤT PHÁC**
- Không thích **BON CHEN** nên dễ gắn bó

**Mặt trái:** Dù không phải ai cũng giúp được trong lúc khó khăn, nhưng ít
nhất **KHÔNG ĐEM ĐẾN ĐIỀU TIẾNG**.`,
  },

  {
    id: 'mo-tai-thien-di',
    title: 'Mộ tại Thiên Di',
    sao: ['Mộ'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Mộ tại Thiên Di** — ra ngoài **HÒA NHẬP CHẬM**, bảo thủ.

**Đặc trưng:**
- Ra ngoài **HÒA NHẬP CHẬM**
- **KHÔNG ƯA TÌM HIỂU, HỌC HỎI** cái mới
- Ra ngoài hơi **BẢO THỦ**
- Hay làm những **VIỆC CŨ**, đến những **NƠI CŨ**
- Theo **THÓI QUEN**, ít đổi mới
- Ngại va chạm, "**CHIM QUEN TỔ CŨ**"
- Cuộc sống chỉ xoay quanh nơi **THÂN QUEN**
- Hiếm khi bước vào **MÔI TRƯỜNG LẠ LẪM**

- Trường hợp cung Phúc Đức vượng giúp giảm tính bảo thủ được tách thành luận giải riêng.`,
  },

  {
    id: 'mo-thien-di-phuc-vuong',
    title: 'Mộ tại Thiên Di + cung phúc đức vượng - vẫn nhiều may mắn',
    sao: ['Mộ'],
    cung: ['Thiên Di'],
    doUuTien: 68,
    tomTat: `**Mộ thủ Thiên Di kết hợp cung phúc khí vượng (đẹp):**
- Vẫn **GẶP NHIỀU ĐIỀM LÀNH** khi ra ngoài
- Dễ gặp cơ hội tốt
- Được người **ĐỊA VỊ HỖ TRỢ**
- Người có cung số tốt được nhiều may mắn
- Gia đình người hôn phối dễ có **ĐIỀU KIỆN**
- Cưới vợ xong mọi thứ **DỄ HANH THÔNG**

- Cung phúc vượng "kéo" Mộ ở Thiên Di vượt qua được tính bảo thủ, hòa nhập chậm.`,
  },

  {
    id: 'mo-tai-tat-ach',
    title: 'Mộ tại Tật Ách',
    sao: ['Mộ'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `**Mộ tại Tật Ách** — bệnh tật **ẨN BÊN TRONG, KHÓ TÌM**.

**Đặc trưng:**
- Bệnh tật **ẨN BÊN TRONG, KHÓ TÌM RA**
- **KHÓ CHỮA**
- **TÍCH TỤ DẦN**
- Càng về già thì mới **LỘ RA DẦN**
- Sức khỏe tựa như **LỬA ÂM Ỉ TRONG TRO TÀN**
- Bệnh ngấm ngầm **TÍCH TỤ THEO THỜI GIAN**
- Triệu chứng **KHÔNG RÕ RÀNG**

**Bệnh thường gặp:**
- Bệnh **NỘI TIẾT**: gan mật, tiêu hóa
- **U BƯỚU**
- Vấn đề **MÃN TÍNH**
- Thể trạng ngày càng **SA SÚT**

**Cảnh báo:** Khi phát tác sẽ **RẤT KHÓ ĐIỀU TRỊ DỨT ĐIỂM**.`,
  },

  {
    id: 'mo-tai-tai-bach',
    title: 'Mộ tại Tài Bạch',
    sao: ['Mộ'],
    cung: ['Tài Bạch'],
    doUuTien: 78,
    tomTat: `**Mộ tại Tài Bạch** — **ĂN CHẮC MẶC BỀN, TIỀN CHÔN CỦA GIẤU**.

**Đặc trưng:**
- Người **ĂN CHẮC MẶC BỀN**
- **TIỀN CHÔN CỦA GIẤU**
- Người **CHỊU KHÓ TIẾT KIỆM, TÍCH CÓP, TÍCH TRỮ** của tiền
- Đôi khi thành hơi **KEO KIỆT**
- Làm bao nhiêu tiết kiệm bấy nhiêu
- Ít khi **TIÊU XÀI PHÓNG KHOÁNG** hay mạo hiểm đầu tư

**Nguồn tiền:**
- Có nguồn kiếm tiền **KÍN, ÍT AI BIẾT**
- Có **CỦA TIỀN DO ÔNG BÀ TỔ TIÊN** để lại
- Tài vận thường **KHÔNG "MỘT BƯỚC LÊN MÂY"**
- Nghiêng về việc **TÍCH CÓP LÂU DÀI** hoặc thừa hưởng

**Bộ kết hợp:**
- **Mộ + Long Trì + Phượng Các** = có di sản tổ phụ
- **Mộ + Hóa Lộc** = của đến tận tay
- Nếu đi cùng **Long Phượng**: dễ được hưởng gia sản, đất đai ổn định
- Gặp **Hóa Lộc / Lộc Tồn**: của cải đến dễ, ít vướng trở ngại, giữ được
  dài lâu`,
  },

  {
    id: 'mo-tai-tu-tuc',
    title: 'Mộ tại Tử Tức',
    sao: ['Mộ'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Mộ tại Tử Tức** — đường con cái **ĐẾN CHẬM**, khó sinh.

**Đặc trưng:**
- **KHÔNG LỢI ÍCH** cho sự sinh nở
- **KHÓ SINH, KHÓ ĐẺ, KHÓ CÓ CON**
- Sinh nở dễ **GẶP TRẮC TRỞ**
- Phải **CHỜ THỜI** mới có tin vui

**Tính cách con:**
- Con cái tính cách **HIỀN LÀNH** nhưng hơi **CHẬM CHẠP**
- Tư duy **KHÔNG NHANH**
- **HƯỚNG NỘI, THẬT THÀ**
- **KHÔNG HAM BON CHEN**
- Lối sống thiên về **AN PHẬN, ỔN ĐỊNH**

**Trường hợp xấu:**
- Con cái **XA CÁCH** hoặc không gắn bó lâu dài

**Cát tinh hội chiếu:**
- Con cái có **LÒNG HIẾU THẢO**
- Biết **QUÝ TRỌNG DI SẢN TỔ TIÊN** để lại`,
  },

  {
    id: 'mo-tai-phu-the',
    title: 'Mộ tại Phu Thê',
    sao: ['Mộ'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `**Mộ tại Phu Thê** — hôn nhân **BỀN CHẶT**, hôn phối thủy chung tiết kiệm.

**Đặc trưng:**
- Người hôn phối **HIỀN LÀNH, THỦY CHUNG**
- **ÍT THAY ĐỔI**, hơi **BẢO THỦ**
- **CHỊU KHÓ NHẶT NHẠNH, TIẾT KIỆM** cho gia đình
- **THÀNH THẬT, CÁCH SỐNG ĂN CHẮC MẶC BỀN**
- Biết **VUN VÉN GIA ĐÌNH**

**Ưu thế:**
- Gia đình người hôn phối **CÓ ĐIỀU KIỆN**
- Đương số là người **NHIỀU MAY MẮN**
- Được hưởng **PHÚC CỦA GIA ĐÌNH TỔ TIÊN**

**Hôn nhân sau cưới:**
- Vận trình hôn nhân có nhiều **CHUYỂN BIẾN TÍCH CỰC**
- **ÍT SÓNG GIÓ**
- Của cải cũng **NGÀY MỘT GIA TĂNG**`,
  },

  {
    id: 'mo-tai-huynh-de',
    title: 'Mộ tại Huynh Đệ',
    sao: ['Mộ'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Mộ tại Huynh Đệ** — anh chị em **XA CÁCH**, hiền lương chất phác.

**Đặc trưng:**
- **GIẢM SỐ LƯỢNG** anh chị em
- Anh chị em là người **HIỀN LƯƠNG, CHẤT PHÁT, ĐƠN GIẢN**
- **CHÂN THÀNH, GIẢN DỊ**
- Đề cao sự **CẦN KIỆM**
- **KHÔNG MƯU CẦU DANH LỢI**

**Hoàn cảnh:**
- Người trong nhà dễ rơi vào cảnh **MỖI NGƯỜI MỘT PHƯƠNG**
- **ÍT KHI SUM VẦY**
- Mối quan hệ **KHÔNG QUÁ KHĂNG KHÍT**

**Mặt tích cực:**
- Quan hệ thiên về sự **YÊN ỔN, NHƯỜNG NHỊN**
- Trở thành **CHỖ DỰA ÂM THẦM** cho nhau`,
  },
];
