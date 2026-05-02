import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THIÊN ĐỨC - Hỏa, Phúc Tinh.
 *
 * Vị trí: LUÔN đồng cung sao PHÚC ĐỨC (vòng Thái Tuế vị trí 9).
 * Engine HARDCODE quy luật này trong SAO_DONG_CUNG_THAI_TUE.
 *
 * Thuộc BỘ TỨ ĐỨC (4 sao Đức): Thiên Đức + Nguyệt Đức + Phúc Đức + Long Đức.
 *   - Thiên Đức + Phúc Đức ĐỒNG CUNG (vị trí 9 vòng Thái Tuế)
 *   - Long Đức ở vị trí 7 vòng Thái Tuế
 *   - Nguyệt Đức ĐỒNG CUNG Tử Phù (vị trí 5 vòng Thái Tuế)
 *
 * Đặc trưng:
 *   - Phúc Tinh CHỦ về LÒNG NHÂN ÁI, PHÚC ĐỨC, NHÂN HẬU
 *   - HÓA GIẢI tai ương, hung họa, bệnh tật nhỏ
 *   - Khi đi với Đào Hồng → CHẾ tính dâm tà, biến đoan chính
 *   - Câu phú: "Thiên-Nguyệt Đức ngộ Đào Hồng / Trai lấy vợ đẹp gái chồng
 *     giàu sang"
 *   - "Thiên-Nguyệt Đức + Giải Thần + Quan Phúc một làng trừ hung"
 */
export const luanGiai_ThienDuc: DoanLuanGiai[] = [
  {
    id: 'thien-duc-tinh-chat-chung',
    title: 'Thiên Đức - Phúc tinh hóa giải tai ương',
    sao: ['Thiên Đức'],
    doUuTien: 33,
    tomTat: `**Thiên Đức** — phụ tinh **PHÚC TINH**, thuộc bộ **TỨ ĐỨC**.

**Ngũ hành:** **Hỏa**.

⚡ **Đặc tính:**
- Chủ về **LÒNG NHÂN ÁI, PHÚC ĐỨC, NHÂN HẬU**
- **HÓA GIẢI** tai ương, hung họa, bệnh tật nhỏ
- "Gặp dữ hóa lành" — thoát nạn trong tình huống bế tắc

⚡ **Quy luật vị trí:**
- Thiên Đức **LUÔN ĐỒNG CUNG** sao **PHÚC ĐỨC** (vòng Thái Tuế vị trí 9)

⚡ **Bộ Tứ Đức** (Thiên Đức + Nguyệt Đức + Phúc Đức + Long Đức):
- **CHẾ Đào Hồng** → đào hoa thành đoan chính
- **HÓA GIẢI** sát tinh, tăng phúc thọ
- 4 sao đầy đủ → cách cục cứu giải mạnh nhất

⚡ **So với Long Đức:**
- Cả 2 đều là sao Giải - sao Đức
- Long Đức ở vị trí 7 vòng Thái Tuế (đồng cung Long Đức nguyên thủy)
- Thiên Đức đồng cung Phúc Đức ở vị trí 9`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÂU PHÚ + BỘ KẾT HỢP CHUNG (TỨ ĐỨC)
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'tu-duc-bon-sao-cuu-giai',
    title: 'Bộ Tứ Đức (Long-Phúc-Thiên-Nguyệt) - Cứu giải mạnh nhất',
    sao: ['Thiên Đức', 'Nguyệt Đức', 'Phúc Đức', 'Long Đức'],
    doUuTien: 70,
    tomTat: `**Bộ TỨ ĐỨC** đầy đủ (Thiên Đức + Nguyệt Đức + Phúc Đức + Long Đức) — cách
**CỨU GIẢI MẠNH NHẤT**.

⚡ **Đặc trưng:**
- 4 sao Đức hội tụ → khả năng **CỨU GIẢI** đỉnh cao
- **HÓA GIẢI** sát tinh, tai họa, bệnh tật
- **TĂNG PHÚC THỌ**
- **CHẾ ĐÀO HỒNG** → đào hoa thành **ĐOAN CHÍNH**

⚡ **Đặc biệt:**
- Vị trí **THIẾU DƯƠNG, THIÊN KHÔNG** vòng Thái Tuế **LUÔN HỘI TỤ ĐỦ Tứ Đức**
- Bộ này hợp người **TU TẬP, ĐẠO HẠNH, TÂM LINH**
- Hợp nghề **CỨU GIÚP NGƯỜI**

⚡ **Câu phú liên quan:**
- "Thiên - Nguyệt Đức, Giải Thần tàng / Cùng là Quan Phúc một làng trừ
  hung"
- "Thiên - Nguyệt Đức ngộ Đào Hồng / Trai lấy vợ đẹp, gái chồng giàu sang"`,
  },

  {
    id: 'thien-nguyet-duc-giai-than-quan-phuc',
    title: 'Thiên-Nguyệt Đức + Giải Thần + Quan Phúc - Một làng trừ hung',
    sao: ['Thiên Đức', 'Nguyệt Đức'],
    ketHop: ['Giải Thần', 'Thiên Quan', 'Thiên Phúc'],
    doUuTien: 70,
    tomTat: `**Câu phú: "Thiên - Nguyệt Đức, Giải Thần tàng / Cùng là Quan Phúc một làng
trừ hung"** — bộ giải hung.

⚡ **Đặc trưng:**
- Thiên Đức + Nguyệt Đức + Giải Thần + Quan Phúc hội tụ
- "**MỘT LÀNG TRỪ HUNG**" - cả làng đều được giải họa
- Cứu nạn cứu khổ tột bậc
- Đặc biệt mạnh khi vào hạn xấu

⚡ **Phân tích:**
- 2 sao Đức = phúc thiện
- Giải Thần = sao giải mạnh nhất
- Quan Phúc = quý nhân từ thiên
- Cộng hưởng → khả năng **HÓA GIẢI ĐỈNH CAO**`,
  },

  {
    id: 'thien-nguyet-duc-dao-hong-trai-lay-vo-dep',
    title: 'Thiên-Nguyệt Đức + Đào Hồng - Trai lấy vợ đẹp, gái chồng giàu',
    sao: ['Thiên Đức', 'Nguyệt Đức'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 65,
    tomTat: `**Câu phú: "Thiên - Nguyệt Đức ngộ Đào Hồng / Trai lấy vợ đẹp, gái chồng
giàu sang"** — quý cách hôn nhân.

⚡ **Đặc trưng:**
- Trai → **LẤY VỢ ĐẸP**
- Gái → **CHỒNG GIÀU SANG**
- Tứ Đức **CHẾ** tính dâm tà của Đào Hồng → biến **ĐOAN CHÍNH**
- Thu hút bằng **PHẨM HẠNH**, không lả lơi
- Hôn nhân **ĐỒNG ĐIỆU**, đẹp đôi`,
  },

  {
    id: 'thien-nguyet-duc-dao-hong-phu-the',
    title: 'Thiên-Nguyệt Đức + Đào Hồng tại Phu Thê',
    sao: ['Thiên Đức', 'Nguyệt Đức'],
    cung: ['Phu Thê'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 70,
    tomTat: `🌟 **Thiên Đức + Nguyệt Đức + Đào Hồng tại Phu Thê:**
- Vợ chồng **TRAI TÀI GÁI SẮC**
- Tình cảm **HÒA HỢP**
- Gia đình được **NHIỀU NGƯỜI NGƯỠNG MỘ**`,
  },

  {
    id: 'thien-duc-thien-luong-dao-si-tang-nhan',
    title: 'Thiên Đức + Thiên Lương - Đạo sĩ tăng nhân',
    sao: ['Thiên Đức'],
    ketHop: ['Thiên Lương'],
    doUuTien: 60,
    tomTat: `**Thiên Đức + Thiên Lương** (cùng cung hoặc hội chiếu) — duyên **TU TẬP, ĐẠO
SĨ TĂNG NHÂN**.

⚡ **Câu phú:** *"Thiên Lương, Nguyệt Đức chiếu kề - Một là đạo sĩ, hai là
tăng nhân"* — Thiên Đức cũng cùng tính chất.

⚡ **Đặc trưng:**
- Người có **DUYÊN TU TẬP**
- Thích **TÌM HIỂU TÂM LINH, PHẬT PHÁP**
- Bản tính **TỪ BI, NHÂN HẬU**
- Có thể trở thành **ĐẠO SĨ, TĂNG NHÂN**
- Hoặc làm các nghề **CỨU NHÂN ĐỘ THẾ**`,
  },

  {
    id: 'thien-duc-tu-phu-dong-luong-quang-quy-quan-phuc-dien',
    title: 'Thiên Đức + Tử Phủ Đồng Lương + Quang Quý + Quan Phúc Điền - Nhà thờ Phật',
    sao: ['Thiên Đức'],
    cung: ['Điền Trạch'],
    ketHop: ['Tử Vi', 'Thiên Phủ', 'Thiên Đồng', 'Thiên Lương', 'Ân Quang', 'Thiên Quan'],
    doUuTien: 60,
    tomTat: `**Thiên Đức + Tử Vi / Thiên Phủ / Thiên Đồng / Thiên Lương + Quang Quý + Quan
Phúc tại Điền Trạch** — nhà thờ **PHẬT BÀ QUAN ÂM**.

⚡ **Đặc trưng:**
- Nhà có **THỜ PHẬT BÀ QUAN ÂM**
- Nhà thờ **PHẬT, THÁNH** trong nhà
- Gia giáo **NỀ NẾP**
- Mộ phần tổ tiên đặt gần nơi thờ Phật

⚡ **Đặc biệt:** đây là cách của những gia đình có **TRUYỀN THỐNG TÂM LINH**,
con cháu đời sau cũng dễ có duyên tu tập.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // THIÊN ĐỨC TẠI 11 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-duc-tai-menh',
    title: 'Thiên Đức tại Mệnh - Tâm hồn đẹp phúc hậu',
    sao: ['Thiên Đức'],
    cung: ['Mệnh'],
    ketHop: ['Phúc Đức'],
    doUuTien: 80,
    tomTat: `**Thiên Đức thủ Mệnh** — tâm hồn **ĐẸP, PHÚC HẬU**.

⚡ **Bản chất:**
- **NHÂN HẬU, KHOAN DUNG, ĐOAN CHÍNH**
- Tâm hồn **TRONG SÁNG, GIÀU LÒNG NHÂN ÁI**
- Thích **GIÚP NGƯỜI VÀ LÀM VIỆC THIỆN**
- "**GIEO NHÂN LÀNH ĐỂ GẶT PHÚC**"
- Càng tích đức → **PHÚC BÁO CÀNG DÀY**

⚡ **Khả năng giải hung:**
- **HÓA GIẢI** tai ương, bệnh tật nhỏ
- Đem lại **MAY MẮN, HỶ SỰ**

⚠️ **Đặc biệt - Thiên Đức tại Mệnh CŨNG đồng cung Phúc Đức:**
- → Tam hợp Thái Tuế: **Thiếu Dương + Thiên Không + Đào Hoa + Kiếp Sát + Tử
  Phù** (do Phúc Đức là sao vòng Thái Tuế vị trí 9)
- Bộ sao **BỘC PHÁT VÀ BIẾN ĐỘNG**
- Vận trình **KHÔNG PHẢI LÚC NÀO CŨNG SUÔN SẺ**

⚡ **Lời khuyên:**
- Tựa "**KHUÔN VÀNG THƯỚC NGỌC**" nhắc nhở **TU DƯỠNG TÂM TÍNH**
- Dùng trí tuệ vào **VIỆC CHÍNH ĐÁNG**
- Nếu mưu trí dùng vào **VIỆC SAI TRÁI** → thành công cũng **CHÓNG TÀN**`,
  },

  {
    id: 'thien-duc-tai-menh-sao-giai',
    title: 'Thiên Đức tại Mệnh + Sao giải hỗ trợ',
    sao: ['Thiên Đức'],
    cung: ['Mệnh'],
    ketHop: ['Thiên Giải', 'Địa Giải', 'Giải Thần', 'Thiên Quan', 'Thiên Phúc', 'Ân Quang', 'Thiên Quý', 'Tả Phù', 'Hữu Bật'],
    doUuTien: 75,
    tomTat: `**Thiên Đức tại Mệnh + Sao giải hỗ trợ** (Thiên Giải, Địa Giải, Giải Thần,
Thiên Quan, Thiên Phúc, Quang Quý, Tả Hữu):
- Hiệu lực cứu giải **CÀNG MẠNH**
- Đương số **GẶP DỮ HÓA LÀNH**
- **TAI QUA NẠN KHỎI**`,
  },

  {
    id: 'thien-duc-tai-phu-mau',
    title: 'Thiên Đức tại Phụ Mẫu',
    sao: ['Thiên Đức'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Thiên Đức tại Phụ Mẫu** — cha mẹ **HIỀN HÒA, NHÂN TỪ**.

⚡ **Đặc trưng:**
- Cha mẹ thường là người **HIỀN HÒA, NHÂN TỪ**
- Giàu **LÒNG VỊ THA**
- Sống **CÓ TÌNH CÓ NGHĨA**
- Biết **QUAN TÂM VÀ GIÚP ĐỠ** mọi người`,
  },

  {
    id: 'thien-duc-tai-phu-mau-nguyet-duc',
    title: 'Thiên Đức + Nguyệt Đức tại Phụ Mẫu',
    sao: ['Thiên Đức'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Nguyệt Đức'],
    doUuTien: 70,
    tomTat: `**Thiên Đức + Nguyệt Đức tại Phụ Mẫu:**
- Cha mẹ càng **NHÂN HẬU, ĐỨC ĐỘ**`,
  },

  {
    id: 'thien-duc-tai-phu-mau-cat-tinh',
    title: 'Thiên Đức + Cát tinh tại Phụ Mẫu',
    sao: ['Thiên Đức'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 70,
    tomTat: `**Thiên Đức + Cát tinh khác tại Phụ Mẫu:**
- Gia đình **NỀ NẾP TỐT ĐẸP**
- Cha mẹ giữ **TIẾNG THƠM** về nhân cách
- Để lại **PHÚC PHẦN DỒI DÀO** cho con cái
- Đương số lớn lên trong **MÔI TRƯỜNG TÌNH THƯƠNG**
- Dễ hình thành **NHÂN CÁCH THIỆN LƯƠNG**
- Hưởng nhiều **MAY MẮN**`,
  },

  {
    id: 'thien-duc-tai-phuc-duc',
    title: 'Thiên Đức tại Phúc Đức - Phúc khí gia tộc bền lâu',
    sao: ['Thiên Đức'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `**Thiên Đức tại Phúc Đức** — phúc khí gia tộc **BỀN LÂU**.

⚡ **Đặc trưng:**
- Dòng họ có nhiều người **SỐNG THIỆN LƯƠNG**
- Biết "**DĨ HÒA VI QUÝ**", cư xử **NHÚN NHƯỜNG**
- Trong nhà ngoài ngõ đều **YÊN ẤM**
- Là nền tảng để **PHÚC KHÍ GIA TỘC BỀN LÂU**
- Mồ mả tổ tiên **THUẬN VỊ**`,
  },

  {
    id: 'thien-duc-tai-phuc-duc-nguyet-duc',
    title: 'Thiên Đức + Nguyệt Đức tại Phúc Đức (Tứ Đức đầy đủ)',
    sao: ['Thiên Đức'],
    cung: ['Phúc Đức'],
    ketHop: ['Nguyệt Đức'],
    doUuTien: 73,
    tomTat: `**Thiên Đức + Nguyệt Đức tại Phúc Đức (Tứ Đức đầy đủ):**
- Họ hàng **PHÚC HẬU**
- Mồ mả tổ tiên gần nơi **THỜ PHẬT BÀ QUAN ÂM**
- Phúc ấm tổ tiên cực đẹp`,
  },

  {
    id: 'thien-duc-tai-phuc-duc-tam-thai-bat-toa-quan-phuc',
    title: 'Thiên Đức + Tam Thai Bát Tọa hoặc Quan Phúc tại Phúc Đức',
    sao: ['Thiên Đức'],
    cung: ['Phúc Đức'],
    ketHop: ['Tam Thai', 'Bát Tọa', 'Thiên Quan', 'Thiên Phúc'],
    doUuTien: 73,
    tomTat: `**Thiên Đức + Tam Thai - Bát Tọa hoặc Quan Phúc tại Phúc Đức:**
- Mồ mả tổ tiên **YÊN ỔN, LONG MẠCH VƯỢNG PHÁT**
- Gia tộc có **TRUYỀN THỐNG HÀNH THIỆN TÍCH ĐỨC**
- Con cháu hưởng **PHÚC ẤM**
- Công danh sự nghiệp **THUẬN BUỒM XUÔI GIÓ**`,
  },

  {
    id: 'thien-duc-tai-dien-trach',
    title: 'Thiên Đức tại Điền Trạch',
    sao: ['Thiên Đức'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Thiên Đức tại Điền Trạch** — gặp **QUÝ NHÂN** hỗ trợ dựng cơ nghiệp.

⚡ **Đặc trưng:**
- Dễ gặp **QUÝ NHÂN HỖ TRỢ** trong việc dựng xây cơ nghiệp, tạo dựng nhà
  cửa
- Mối quan hệ với **HÀNG XÓM LÁNG GIỀNG ÊM Ả**
- **ÍT THỊ PHI**
- Hiếm khi rơi vào cảnh "**BẰNG MẶT KHÔNG BẰNG LÒNG**"
- Bản mệnh sống **BIẾT ĐỦ**
- Không quá đặt nặng chuyện **SANG GIÀU**
- **THÍCH NGHI TỐT** với nơi ăn chốn ở`,
  },

  {
    id: 'thien-duc-tai-quan-loc',
    title: 'Thiên Đức tại Quan Lộc',
    sao: ['Thiên Đức'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `**Thiên Đức tại Quan Lộc** — sự nghiệp **HANH THÔNG**, ít trở ngại.

⚡ **Đặc trưng:**
- Sự nghiệp thường **HANH THÔNG**
- **ÍT GẶP TRỞ NGẠI LỚN**
- Người luôn đặt **CÁI TÂM NGANG VỚI TÀI**
- Làm việc với **LƯƠNG TRI VÀ TINH THẦN TRÁCH NHIỆM CAO**
- Dễ nhận được **SỰ TIN TƯỞNG, KÍNH NỂ** từ đồng nghiệp và cấp trên`,
  },

  {
    id: 'thien-duc-tai-quan-loc-nguyet-duc-quan-phuc-ta-huu',
    title: 'Thiên Đức + Nguyệt Đức + Quan Phúc + Tả Hữu tại Quan Lộc',
    sao: ['Thiên Đức'],
    cung: ['Quan Lộc'],
    ketHop: ['Nguyệt Đức', 'Thiên Quan', 'Thiên Phúc', 'Tả Phù', 'Hữu Bật'],
    doUuTien: 73,
    tomTat: `**Thiên Đức + Nguyệt Đức + Thiên Quan + Thiên Phúc + Tả Hữu tại Quan Lộc:**
- Vận trình công danh như "**CÁ GẶP NƯỚC**"
- **CÀNG LÀM CÀNG THUẬN**`,
  },

  {
    id: 'thien-duc-tai-no-boc',
    title: 'Thiên Đức tại Nô Bộc',
    sao: ['Thiên Đức'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Thiên Đức tại Nô Bộc** — bạn bè **NHÂN ÁI, THẤU HIỂU**.

⚡ **Đặc trưng:**
- Bạn bè, cộng sự xung quanh có **TẤM LÒNG NHÂN ÁI**
- Có **SỰ THẤU HIỂU VÀ NÂNG ĐỠ** lẫn nhau
- Mối liên hệ xã giao **KHÁ YÊN ẤM**, ít sóng gió
- Dễ gặp **NGƯỜI TỐT KỀ VAI SÁT CÁNH**`,
  },

  {
    id: 'thien-duc-tai-no-boc-co-nguyet-dong-luong',
    title: 'Thiên Đức + Cơ Nguyệt Đồng Lương + Thiên Phủ tại Nô Bộc',
    sao: ['Thiên Đức'],
    cung: ['Nô Bộc'],
    ketHop: ['Thái Âm', 'Thiên Phủ', 'Thiên Cơ', 'Thiên Đồng', 'Thiên Lương'],
    doUuTien: 70,
    tomTat: `**Thiên Đức + Thái Âm + Thiên Phủ + Thiên Cơ + Thiên Đồng + Thiên Lương tại
Nô Bộc:**
- Bạn bè đều là **NGƯỜI HIỀN LƯƠNG, ĐỨC ĐỘ**
- Cùng đồng hành công việc lẫn cuộc sống`,
  },

  {
    id: 'thien-duc-tai-thien-di',
    title: 'Thiên Đức tại Thiên Di',
    sao: ['Thiên Đức'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Thiên Đức tại Thiên Di** — ra ngoài **NHÃ NHẶN, KHIÊM TỐN**.

⚡ **Đặc trưng:**
- Khi bước chân ra ngoài luôn biết giữ thái độ **NHÃ NHẶN, KHIÊM TỐN**
- Biết **GIÚP NGƯỜI LÚC KHÓ KHĂN**
- Dễ được người khác **ĐÁP LẠI ÂN TÌNH**`,
  },

  {
    id: 'thien-duc-tai-thien-di-khoi-viet-quan-phuc',
    title: 'Thiên Đức + Khôi Việt + Quan Phúc tại Thiên Di',
    sao: ['Thiên Đức'],
    cung: ['Thiên Di'],
    ketHop: ['Thiên Khôi', 'Thiên Việt', 'Thiên Quan', 'Thiên Phúc'],
    doUuTien: 70,
    tomTat: `**Thiên Đức + Khôi Việt + Thiên Quan + Thiên Phúc tại Thiên Di:**
- Cuộc sống nơi **ĐẤT KHÁCH**:
  - Được **QUÝ NHÂN GIÚP ĐỠ**
  - Gặp nhiều **CƠ HỘI TỐT**
  - Đạt **BƯỚC TIẾN MỚI** trong sự nghiệp`,
  },

  {
    id: 'thien-duc-tai-tat-ach',
    title: 'Thiên Đức tại Tật Ách - Lá chắn bảo vệ',
    sao: ['Thiên Đức'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `**Thiên Đức tại Tật Ách** — Phúc tinh thuộc bộ Tứ Đức tạo "**LÁ CHẮN BẢO
VỆ**".

⚡ **Đặc trưng:**
- Phúc tinh **SOI CHIẾU** → tạo **LÁ CHẮN**
- Giúp **GIẢM NHẸ BỆNH TẬT, TAI NẠN NHỎ**
- Gieo nhân lành → khi đau ốm **DỄ GẶP ĐƯỢC THẦY HAY THUỐC TỐT**
- **BỆNH NẶNG HÓA NHẸ**
- Nhiều lần **THOÁT NẠN TRONG GANG TẤC**

⚡ **Lời khuyên:**
- Chăm chỉ làm việc **THIỆN, TÍCH ĐỨC**
- Tu tập tâm linh
- Tăng phúc → tăng khả năng cứu giải`,
  },

  {
    id: 'thien-duc-tai-tai-bach',
    title: 'Thiên Đức tại Tài Bạch',
    sao: ['Thiên Đức'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Thiên Đức tại Tài Bạch** — kiếm tiền **MINH BẠCH, LẤY CHỮ TÍN LÀM ĐẦU**.

⚡ **Đặc trưng:**
- Sống với lý tưởng "**ĐÓI CHO SẠCH, RÁCH CHO THƠM**"
- Kiếm tiền bằng sự **MINH BẠCH**
- Lấy **CHỮ TÍN LÀM ĐẦU**
- Không **BON CHEN TRANH ĐOẠT**

⚡ **Đặc tính:**
- Nhiều người có xu hướng đem tiền **LÀM TỪ THIỆN**
- Tạo phúc đức cho đời
- Nhờ **TÂM SÁNG** mà tài vận **ỔN ĐỊNH**
- Ít khi lâm vào cảnh **TÚNG THIẾU**`,
  },

  {
    id: 'thien-duc-tai-tai-bach-nguyet-duc-quan-phuc',
    title: 'Thiên Đức + Nguyệt Đức + Quan Phúc tại Tài Bạch',
    sao: ['Thiên Đức'],
    cung: ['Tài Bạch'],
    ketHop: ['Nguyệt Đức', 'Thiên Quan', 'Thiên Phúc'],
    doUuTien: 70,
    tomTat: `**Thiên Đức + Nguyệt Đức + Thiên Quan + Thiên Phúc tại Tài Bạch:**
- Có **LỘC TIỀN TÀI**
- Tài vận **ỔN ĐỊNH**`,
  },

  {
    id: 'thien-duc-tai-tu-tuc',
    title: 'Thiên Đức tại Tử Tức',
    sao: ['Thiên Đức'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Thiên Đức tại Tử Tức** — con cái **NGOAN HIỀN, HIẾU THUẬN**.

⚡ **Đặc trưng:**
- Con cái **NGOAN HIỀN, HIẾU THUẬN**
- Biết **KÍNH TRÊN NHƯỜNG DƯỚI**
- Gia đình **ÍT XUNG ĐỘT**

⚡ **Đặc trưng:**
- "**CON CÁI LÀ LỘC TRỜI CHO**"
- Sự xuất hiện của con cái:
  - Đem lại **NIỀM VUI**
  - Tình cảm vợ chồng thêm **BỀN CHẶT**
  - Cuộc sống gia đình **ẤM ÊM, HẠNH PHÚC LÂU DÀI**`,
  },

  {
    id: 'thien-duc-tai-tu-tuc-thien-dong',
    title: 'Thiên Đức + Thiên Đồng tại Tử Tức',
    sao: ['Thiên Đức'],
    cung: ['Tử Tức'],
    ketHop: ['Thiên Đồng'],
    doUuTien: 70,
    tomTat: `**Thiên Đức + Thiên Đồng tại Tử Tức:**
- Vợ chồng dễ **SỚM CÓ TIN VUI** về con cái
- Tổ ấm thêm **RỘN RÀNG TIẾNG CƯỜI**`,
  },

  {
    id: 'thien-duc-tai-tu-tuc-nguyet-duc',
    title: 'Thiên Đức + Nguyệt Đức tại Tử Tức',
    sao: ['Thiên Đức'],
    cung: ['Tử Tức'],
    ketHop: ['Nguyệt Đức'],
    doUuTien: 70,
    tomTat: `**Thiên Đức + Nguyệt Đức tại Tử Tức:**
- Vợ chồng dễ **SỚM CÓ TIN VUI** về con cái
- Tổ ấm thêm **RỘN RÀNG TIẾNG CƯỜI**`,
  },

  {
    id: 'thien-duc-tai-phu-the',
    title: 'Thiên Đức tại Phu Thê',
    sao: ['Thiên Đức'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `**Thiên Đức tại Phu Thê** — bạn đời **DUNG MẠO ƯA NHÌN, ĐOAN TRANG**.

⚡ **Đặc trưng:**
- Người bạn đời sở hữu **DUNG MẠO ƯA NHÌN**
- Tính tình **ĐOAN TRANG**
- Biết **GIỮ HÒA KHÍ** trong gia đình
- Đôi bên **NHƯỜNG NHỊN NHAU**
- Mâu thuẫn cũng "**CHÍN BỎ LÀM MƯỜI**"
- **TRÁNH XUNG ĐỘT** không đáng`,
  },

  {
    id: 'thien-duc-tai-phu-the-bo-quy-cach',
    title: 'Thiên Đức + Phủ Âm Dương Đồng + Nguyệt Đức + Đào + Quang Quý tại Phu Thê',
    sao: ['Thiên Đức'],
    cung: ['Phu Thê'],
    ketHop: ['Thiên Phủ', 'Thái Âm', 'Thái Dương', 'Thiên Đồng', 'Nguyệt Đức', 'Đào Hoa', 'Ân Quang', 'Thiên Quý'],
    doUuTien: 73,
    tomTat: `**Thiên Đức + Thiên Phủ + Thái Âm + Thái Dương + Thiên Đồng + Nguyệt Đức +
Đào Hoa + Ân Quang + Thiên Quý tại Phu Thê:**
- Vợ chồng **TRAI TÀI GÁI SẮC**
- Tình cảm **HÒA HỢP**
- Gia đình được **NHIỀU NGƯỜI NGƯỠNG MỘ VÀ QUÝ MẾN**`,
  },

  {
    id: 'thien-duc-tai-huynh-de',
    title: 'Thiên Đức tại Huynh Đệ',
    sao: ['Thiên Đức'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Thiên Đức tại Huynh Đệ** — anh chị em **THUẬN HÒA**, "chị ngã em nâng".`,
  },

  {
    id: 'thien-duc-tai-huynh-de-ta-huu',
    title: 'Thiên Đức + Tả Phù + Hữu Bật tại Huynh Đệ',
    sao: ['Thiên Đức'],
    cung: ['Huynh Đệ'],
    ketHop: ['Tả Phù', 'Hữu Bật'],
    doUuTien: 70,
    tomTat: `**Thiên Đức + Tả Phù + Hữu Bật tại Huynh Đệ:**
- Anh chị em trong nhà **THUẬN HÒA**
- Biết **NƯƠNG TỰA VÀ GIÚP ĐỠ** lẫn nhau
- Quan hệ tình cảm **BỀN CHẶT**
- Ít xảy ra **TRANH CHẤP**
- "**CHỊ NGÃ EM NÂNG**"
- Giữ được sự **GẮN BÓ DÀI LÂU**`,
  },
];
