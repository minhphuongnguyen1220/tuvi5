import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO ĐẾ VƯỢNG - Kim, Phúc Tinh + Quý Tinh.
 *
 * Vị trí THỨ 5 trong Vòng Trường Sinh 12 sao:
 *   Trường Sinh → Mộc Dục → Quan Đới → Lâm Quan → ĐẾ VƯỢNG → Suy →
 *   Bệnh → Tử → Mộ → Tuyệt → Thai → Dưỡng
 *
 * An theo CỤC, là sao ĐỈNH CAO của vòng Trường Sinh.
 *
 * Đặc trưng:
 *   - Tượng trưng cho GIAI ĐOẠN ĐỈNH CAO của đời người
 *   - Sức khỏe TRÁNG KIỆN nhất, công danh CAO nhất, tiền của DỒI DÀO nhất
 *   - GIA TĂNG SỐ LƯỢNG mọi thứ ở cung sao đứng (giống Trường Sinh)
 *   - KÍCH PHÁT, KHUẾCH ĐẠI các sao đi cùng (giống vai trò Trường Sinh)
 *   - Cách Sinh-Vượng-Mộ tam hợp với Trường Sinh và Mộ
 *   - GIẢI TRỪ bệnh tật, tai họa
 *   - LỢI ÍCH SINH NỞ, vượng nhân đinh, nhiều con sinh mau
 *   - HẠI ĐẠT khi đi cùng sát bại tinh — vì khuếch đại cả cái xấu
 */
export const luanGiai_DeVuong: DoanLuanGiai[] = [
  {
    id: 'de-vuong-tinh-chat-chung',
    title: 'Đế Vượng - Đặc tính chung',
    sao: ['Đế Vượng'],
    doUuTien: 33,
    tomTat: `**Đế Vượng** — phụ tinh **PHÚC TINH + QUÝ TINH**, vị trí **THỨ 5** vòng Trường
Sinh — **ĐỈNH CAO** của vòng.

**Ngũ hành:** **Kim**.

⚡ **Đặc tính:**
- Tượng trưng **GIAI ĐOẠN ĐỈNH CAO** của đời người
- Là giai đoạn:
  - **SỨC KHỎE TRÁNG KIỆN NHẤT**
  - **CÔNG DANH ĐƯỢC LÊN CAO NHẤT**
  - **TIỀN CỦA DỒI DÀO NHẤT**
- Chủ sự **THỊNH VƯỢNG**, gia tăng tài lộc, tiền của, con cái
- **GIẢI TRỪ** bệnh tật, tai họa

⚡ **Vai trò:**
- Đế Vượng đứng ở đâu đều **GIA TĂNG SỐ LƯỢNG** mọi thứ
- **KÍCH PHÁT** các sao đi cùng — làm chúng rực rỡ thêm
- Đi cùng sao tốt → tăng vẻ tốt; đi cùng sát bại tinh → THÀNH PHÁ CÁCH

⚡ **Tam hợp Sinh-Vượng-Mộ:** Trường Sinh + Đế Vượng + Mộ luôn tam hợp —
chu trình sinh-phát-kết của một đời người.

⚠️ **Cảnh báo:** Đế Vượng KHÔNG ƯA đóng cung **TẬT ÁCH** — vì sẽ khuếch
đại bệnh tật chứ không giảm.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP TỐT
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'de-vuong-tu-vi-dong-cung',
    title: 'Tử Vi + Đế Vượng đồng cung - Tài lãnh đạo, óc lãnh tụ',
    sao: ['Đế Vượng'],
    ketHop: ['Tử Vi'],
    doUuTien: 75,
    tomTat: `**Tử Vi + Đế Vượng đồng cung** — có **TÀI LÃNH ĐẠO, QUẢN LÝ, ÓC LÃNH TỤ**.

⚡ **Đặc trưng:**
- Có khả năng **ĐỨNG ĐẦU, THỦ LĨNH**
- **NGƯỜI ĐỨNG ĐẦU TẬP THỂ**
- Tính tình hết sức **QUẢNG ĐẠI, QUANG MINH, QUÂN TỬ**
- Thuộc **CHÍNH PHÁI**
- Cách rạng rỡ — Tử Vi đế tinh + Đế Vượng cộng hưởng đỉnh cao quyền lực`,
  },

  {
    id: 'de-vuong-hoa-quyen-quyen-chuc-lon',
    title: 'Đế Vượng + Hóa Quyền - Quyền chức lớn',
    sao: ['Đế Vượng'],
    ketHop: ['Hóa Quyền'],
    doUuTien: 65,
    tomTat: `**Đế Vượng + Hóa Quyền** — là số có **QUYỀN CHỨC LỚN**.

⚡ **Đặc trưng:**
- Quyền uy đỉnh cao
- Đứng vị trí **CẦM CƯƠNG** trong tổ chức, doanh nghiệp, cơ quan
- Có **TIẾNG NÓI** trong các quyết định lớn`,
  },

  {
    id: 'de-vuong-hoa-khoa-van-chuong',
    title: 'Đế Vượng + Hóa Khoa - Sự nghiệp văn chương lớn',
    sao: ['Đế Vượng'],
    ketHop: ['Hóa Khoa'],
    doUuTien: 65,
    tomTat: `**Đế Vượng + Hóa Khoa** — là số lập nên **SỰ NGHIỆP VĂN CHƯƠNG LỚN**.

⚡ **Đặc trưng:**
- Sản xuất nhiều **TÁC PHẨM VĂN HỌC CÓ GIÁ TRỊ**
- Là người **HỌC RẤT GIỎI**
- Có **KHỐI LƯỢNG KIẾN THỨC KHỔNG LỒ**
- Hợp các nghề: nhà văn, nhà nghiên cứu, giáo sư, học giả`,
  },

  {
    id: 'de-vuong-thien-tai',
    title: 'Đế Vượng + Khôi Việt + Xương Khúc + Quốc Ấn + Âm Dương sáng - Thiên tài',
    sao: ['Đế Vượng'],
    ketHop: ['Thiên Khôi', 'Thiên Việt', 'Văn Xương', 'Văn Khúc', 'Quốc Ấn'],
    doUuTien: 75,
    tomTat: `**Đế Vượng + Thiên Khôi + Thiên Việt + Văn Xương + Văn Khúc + Quốc Ấn +
Thái Âm + Thái Dương sáng đẹp** — nhất định là **BẬC THIÊN TÀI**.

⚡ **Đặc trưng:**
- Cung **QUAN LỘ RỘNG MỞ**
- Bậc **ĐẠI TÀI ĐỊA VỊ**
- Tài năng vượt trội xuất chúng
- Sự nghiệp **HIỂN ĐẠT, LỪNG LẪY**

⚡ **Phân tích:**
- Khôi Việt = quý nhân tột đỉnh
- Xương Khúc = trí tuệ văn chương
- Quốc Ấn = quyền uy ấn tín
- Nhật-Nguyệt sáng = uy danh tỏa rộng
- Đế Vượng = đỉnh cao kích phát`,
  },

  {
    id: 'de-vuong-hoa-loc-phat-tai',
    title: 'Đế Vượng + Hóa Lộc - Phát tài, điền sản dồi dào',
    sao: ['Đế Vượng'],
    ketHop: ['Hóa Lộc'],
    doUuTien: 65,
    tomTat: `**Đế Vượng + Hóa Lộc** — người **CHỊU KHÓ KIẾM TIỀN**, **PHÁT TÀI**, có của,
**ĐIỀN SẢN DỒI DÀO**.

⚡ **Đặc trưng:**
- Năng lực kiếm tiền vượt trội
- Của cải tiền bạc dồi dào, không thiếu thốn
- Sở hữu **NHIỀU ĐẤT ĐAI, NHÀ CỬA, TÀI SẢN**
- Là số **ĐẠI PHÚ**`,
  },

  {
    id: 'de-vuong-trieu-phu-the-gioi',
    title: 'Đế Vượng + Tả Hữu + Âm Dương + Thìn Tuất - Triệu phú thế giới',
    sao: ['Đế Vượng'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Thái Âm', 'Thái Dương'],
    chi: ['Thìn', 'Tuất'],
    doUuTien: 80,
    tomTat: `**Đế Vượng + Tả Phù + Hữu Bật + Thái Âm + Thái Dương đồng cung tại Thìn /
Tuất** — **TRIỆU PHÚ THẾ GIỚI**.

⚡ **Đặc trưng:**
- Bộ sao **CỰC HỢP CÁCH**
- Khả năng **ĐẠI PHÚ ĐẠI QUÝ**
- Tài sản **VƯỢT TẦM QUỐC GIA**
- Trí tuệ + quý nhân + tiền tài đỉnh cao

⚡ **Phân tích:**
- Đế Vượng tại Tứ Mộ Thìn Tuất → đất gốc
- Nhật Nguyệt đồng cung Thìn/Tuất → bộ Nhật Nguyệt cách đẹp
- Tả Hữu = quý nhân giúp đỡ
- Đế Vượng = khuếch đại tất cả`,
  },

  {
    id: 'de-vuong-truong-sinh-anh-em-sung-tuc',
    title: 'Đế Vượng + Trường Sinh + cát tinh - Anh em đông sung túc',
    sao: ['Đế Vượng'],
    cung: ['Huynh Đệ'],
    ketHop: ['Trường Sinh'],
    doUuTien: 60,
    tomTat: `**Đế Vượng + Trường Sinh + nhiều cát tinh tại Huynh Đệ** — anh chị em
**ĐÔNG MÀ SUNG TÚC**.

⚡ **Đặc trưng:**
- Sinh-Vượng tam hợp tại Huynh Đệ → **CHU KỲ SINH PHÁT** trong dòng huyết
  thống
- Anh chị em **ĐÔNG**
- **SUNG TÚC**, kinh tế khá giả
- **THƯƠNG YÊU GIÚP ĐỠ LẪN NHAU**`,
  },

  {
    id: 'de-vuong-thai-tuong-phuc-binh-anh-em-di-bao',
    title: 'Đế Vượng + Thai + Thiên Tướng + Phục Binh - Anh em dị bào',
    sao: ['Đế Vượng'],
    cung: ['Huynh Đệ'],
    ketHop: ['Thai', 'Thiên Tướng', 'Phục Binh'],
    doUuTien: 55,
    tomTat: `**Đế Vượng + Thai + Thiên Tướng + Phục Binh tại Huynh Đệ** — số dễ có **ANH
CHỊ EM DỊ BÀO**, hoặc anh chị em nuôi.

⚡ **Đặc trưng:**
- Có **ANH CHỊ EM CÙNG CHA KHÁC MẸ** hoặc cùng mẹ khác cha
- Hoặc **ANH CHỊ EM NUÔI, ĐỠ ĐẦU**
- Có người đạt **CÔNG DANH, QUAN CHỨC, DANH VỌNG**
- **KHÁ GIẢ**`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP XẤU
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'de-vuong-sat-tinh-tat-ach',
    title: 'Đế Vượng + Kình Đà + Không Kiếp + Hỏa Linh tại Tật - Bệnh nặng',
    sao: ['Đế Vượng'],
    cung: ['Tật Ách'],
    ketHop: ['Kình Dương', 'Đà La', 'Địa Không', 'Địa Kiếp', 'Linh Tinh', 'Hỏa Tinh'],
    doUuTien: 65,
    tomTat: `⚠️ **Đế Vượng + Kình Dương + Đà La + Địa Không + Địa Kiếp + Linh Tinh + Hỏa
Tinh tại Tật Ách** — **BỆNH NẶNG, TAI HỌA NHIỀU**.

⚠️ **Đặc trưng:**
- Đế Vượng vốn **KHÔNG ƯA đóng cung Tật Ách**
- Sát tinh **KÍCH THÍCH BỆNH NẶNG HƠN**
- **NHIỀU TAI HỌA** ập đến hơn
- Đế Vượng khuếch đại cả cái xấu

⚡ **Hệ quả:**
- Bệnh nặng kéo dài
- Tai họa liên tiếp
- Đặc biệt nguy hiểm khi vào hạn

⚡ **Hóa giải:** Quan Phúc, Tứ Đức, Khôi Việt, Quang Quý, Tuần Triệt mới mong
giảm bớt.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // ĐẾ VƯỢNG TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'de-vuong-tai-menh',
    title: 'Đế Vượng tại Mệnh',
    sao: ['Đế Vượng'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `**Đế Vượng thủ Mệnh** — **TÀI LÃNH ĐẠO, ƯU LÀM VIỆC THIỆN**, biểu tượng của
**THỊNH ĐẠT, PHONG TÚC**.

⚡ **Hình tướng:**
- Người có dáng hình **TO LỚN, BỀ THẾ, PHƯƠNG TRƯỞNG**
- **DÁNG ĐI UY NGHI, VỮNG TRÃI**
- Nam giới có **KHÍ CHẤT TRƯỢNG PHU MẠNH MẼ**
- Nữ giới có **VẺ DUYÊN DÁNG, QUYỀN LỰC**

⚡ **Tính tình:**
- **UY NGHI, BỆ VỆ**
- Tính tình **QUẢNG ĐẠI, RỘNG RÃI**
- **ƯA VIỆC THIỆN, BÁC ÁI**
- Có **TÀI LÃNH ĐẠO, ÓC LÃNH TỤ**

⚡ **Công danh tài lộc phúc thọ:**
- **GIA TĂNG PHÚC THỌ, THỌ TRƯỜNG**
- Chủ sự **THỊNH ĐẠT, PHONG TÚC**
- **GIẢI TRỪ** bệnh tật, tai họa
- **THĂNG TIẾN** công danh, sự nghiệp, quyền thế, tiền bạc
- Lợi ích cho **SINH NỞ**, vượng nhân đinh, nhiều con, sinh mau

⚡ **Đặc tính:**
- Đế Vượng = **CÁT TINH**, làm tăng tiến công danh, của tiền, nhà cửa,
  quyền lực, sống lâu, tăng tuổi thọ
- Đi cùng sao tốt → **RỰC RỠ** thêm đặc tính sao đó
- Tầm nhìn dài hạn, tinh thần trách nhiệm cao
- Sự nghiệp **VỮNG CHÃI**, dễ thăng tiến
- Sống lâu, ít gặp bệnh nghiêm trọng — gặp tai ách cũng nhanh vượt qua`,
  },

  {
    id: 'de-vuong-tai-phu-mau',
    title: 'Đế Vượng tại Phụ Mẫu',
    sao: ['Đế Vượng'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Đế Vượng tại Phụ Mẫu** — cha mẹ **TO BÉO, RỘNG LƯỢNG, GIÀU CÓ**.

⚡ **Đặc trưng:**
- Cha mẹ dễ **TO BÉO, NẶNG CÂN**
- Tính tình **RỘNG LƯỢNG, QUẢNG ĐẠI**
- Kinh tế **KHÁ GIẢ, GIÀU CÓ**
- Có cuộc sống **AN NHÀN**, có điều kiện hỗ trợ con cái về cả vật chất lẫn
  tinh thần
- Con cái **KÍNH TRỌNG, HIẾU THẢO** với cha mẹ
- Gia đình **ĐẦM ẤM, HẠNH PHÚC**`,
  },

  {
    id: 'de-vuong-tai-phuc-duc',
    title: 'Đế Vượng tại Phúc Đức',
    sao: ['Đế Vượng'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `**Đế Vượng tại Phúc Đức** — **PHÚC LỚN**, dòng họ **THỊNH VƯỢNG**.

⚡ **Đặc trưng:**
- Đương số có **PHÚC LỚN**
- Hưởng **NHIỀU MAY MẮN**
- **DÒNG HỌ THỊNH VƯỢNG**
- **ĐÔNG CON CHÁU**
- Nhiều người **THÀNH ĐẠT, THÀNH DANH, GIÀU CÓ**
- Gia đình **NHÀ NGƯỜI HÔN PHỐI** có điều kiện
- Hưởng **PHÚC LỚN TỪ TỔ TIÊN**, sống trong sung túc

⚡ Tạo điều kiện cho **SỰ NGHIỆP** phát triển mạnh mẽ và **TÀI CHÍNH** đạt
đỉnh cao.`,
  },

  {
    id: 'de-vuong-tai-dien-trach',
    title: 'Đế Vượng tại Điền Trạch',
    sao: ['Đế Vượng'],
    cung: ['Điền Trạch'],
    doUuTien: 78,
    tomTat: `**Đế Vượng tại Điền Trạch** — **GIA TĂNG SỐ LƯỢNG NHÀ CỬA, TIỀN CỦA**.

⚡ **Đặc trưng:**
- Gia tăng **SỐ LƯỢNG NHÀ CỬA, CỦA TIỀN**
- **ĐẤT ĐAI RỘNG LỚN**, bè ngang, số lượng nhiều
- Có thể **THỪA KẾ** từ gia đình hoặc **TỰ GÂY DỰNG**
- **GIA TĂNG TÀI SẢN** đất đai

⚠️ **Sát tinh hội:**
- Tài sản dễ bị **HAO HỤT**
- Bị **ÉP BÁN** hoặc **ĐỔ SẬP** do tranh chấp
- **ĐẦU TƯ THIẾU MINH BẠCH**

⚡ **Lưu ý:** cần phương pháp quản lý tài sản **KHÔN NGOAN**, đầu tư bất động
sản phải có **NGHIÊN CỨU KỸ**, không mua theo cảm tính hay nghe lời đồn.`,
  },

  {
    id: 'de-vuong-tai-quan-loc',
    title: 'Đế Vượng tại Quan Lộc',
    sao: ['Đế Vượng'],
    cung: ['Quan Lộc'],
    doUuTien: 80,
    tomTat: `**Đế Vượng tại Quan Lộc** — lợi ích cho **TĂNG TIẾN CÔNG DANH, QUYỀN THẾ**.

⚡ **Đặc trưng:**
- Đạt được **NHIỀU THÀNH TỰU LỚN** trong cuộc đời
- Khả năng **LÃNH ĐẠO**
- Tinh thần **TRÁCH NHIỆM**
- Nhận được **SỰ KÍNH TRỌNG**
- Tư duy **MẠNH MẼ, RÕ RÀNG, KIÊN ĐỊNH**
- Dễ **TỎA SÁNG** trong lĩnh vực của mình

⚡ **Đi cùng nhiều cát tinh:**
- Đạt được **NHIỀU TIẾNG TĂM**
- **CAI QUẢN NHỮNG VỊ TRÍ LỚN** trong xã hội

⚠️ **Cảnh báo:** cần giữ **TỈNH TÁO VÀ ĐẠO ĐỨC NGHỀ NGHIỆP** để tránh rủi
ro không đáng có.`,
  },

  {
    id: 'de-vuong-tai-no-boc',
    title: 'Đế Vượng tại Nô Bộc',
    sao: ['Đế Vượng'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Đế Vượng tại Nô Bộc** — **ĐÔNG BẠN, LẮM BÈ**, có cấp dưới đông đảo.

⚡ **Đặc trưng:**
- **ĐÔNG BẠN, LẮM BÈ**
- Mạng lưới quan hệ rộng dựa trên **TÔN TRỌNG VÀ TIN TƯỞNG** thật sự

⚡ **Cát tinh hội:**
- Nhiều **BẠN BÈ THÀNH ĐẠT, GIÀU CÓ**
- **TƯƠNG HỖ GIÚP ĐỠ MÌNH NHIỀU**
- Bản thân có thể làm **THƯ KÝ** cho các vị **LÃNH ĐẠO LỚN**
- Bạn bè, đồng nghiệp, đối tác đều sẵn lòng **HỖ TRỢ** trong mọi mặt`,
  },

  {
    id: 'de-vuong-tai-thien-di',
    title: 'Đế Vượng tại Thiên Di',
    sao: ['Đế Vượng'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Đế Vượng tại Thiên Di** — **RA NGOÀI CÓ OAI PHONG**, gặp quý nhân giúp đỡ.

⚡ **Đặc trưng:**
- Ra ngoài có **OAI PHONG**
- **GẶP QUÝ NHÂN**, nhiều người giúp đỡ
- Hay gặp **MAY MẮN, ÍT TAI NẠN**
- Là tuýp người thích **RA NGOÀI NHIỀU**
- Càng ra ngoài, **XA BỐ MẸ CÀNG DỄ PHÁT TRIỂN**
- Người có **PHÚC TỐT**
- Người hôn phối có **KINH TẾ TỐT**

⚡ Thích **KHÁM PHÁ, HỌC HỎI CÁI MỚI** — dễ thích nghi với môi trường, văn
hóa mới — sự nghiệp **PHÁT TRIỂN VƯỢT BẬC** nhờ quý nhân phù trợ đúng thời
điểm.`,
  },

  {
    id: 'de-vuong-tai-tat-ach',
    title: 'Đế Vượng tại Tật Ách - KHÔNG ƯA',
    sao: ['Đế Vượng'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `⚠️ **Đế Vượng tại Tật Ách** — vị trí **KHÔNG ƯA** của Đế Vượng.

⚠️ **Đặc trưng:**
- **NHIỀU BỆNH TẬT** trong người
- Đế Vượng khuếch đại số lượng → bệnh dồn dập

⚠️ **Sát tinh hội** (Kình Đà, Không Kiếp, Linh Hỏa):
- Càng **KÍCH THÍCH BỆNH NẶNG** hơn
- **NHIỀU TAI HỌA** ập đến hơn

⚡ **Đặc biệt:** Dù là sao cát, Đế Vượng tại Tật Ách chỉ có thể **GIẢM NHẸ
RỦI RO**, không mang lại sự thịnh vượng trọn vẹn.

⚡ **Cần:**
- Giữ gìn **SỨC KHỎE**
- Tránh **LAO LỰC**
- Không nên để "**NƯỚC ĐẾN CHÂN MỚI NHẢY**"`,
  },

  {
    id: 'de-vuong-tai-tai-bach',
    title: 'Đế Vượng tại Tài Bạch',
    sao: ['Đế Vượng'],
    cung: ['Tài Bạch'],
    doUuTien: 80,
    tomTat: `**Đế Vượng tại Tài Bạch** — **CỦA TIỀN DỒI DÀO, NHIỀU NGUỒN THU**.

⚡ **Đặc trưng:**
- **CỦA TIỀN DỒI DÀO**
- **NHIỀU NGUỒN THU NHẬP**
- Đồng tiền tiêu pha, đầu tư, thu vào thường **LỚN**
- **CHĂM CHỈ LÀM VIỆC**
- Không phụ thuộc một nguồn thu nhập
- Đa dạng cách kiếm tiền: bất động sản, kinh doanh, dòng tiền thụ động

⚡ **Khả năng quản lý tiền tốt:**
- Không chỉ biết **KIẾM TIỀN** mà còn biết **QUẢN LÝ TIỀN**
- Dễ **GIÀU CÓ VÀ THỊNH VƯỢNG**
- Có thể trở thành **TRIỆU PHÚ**, sở hữu điền sản rộng lớn`,
  },

  {
    id: 'de-vuong-tai-tu-tuc',
    title: 'Đế Vượng tại Tử Tức',
    sao: ['Đế Vượng'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Đế Vượng tại Tử Tức** — **ĐÔNG CON CÁI** (giống Trường Sinh khi đóng cung
Tử Tức).

⚡ **Đặc trưng:**
- **ĐÔNG CON, MAU SINH**
- Cát tinh hội → đông con, **NHIỀU ĐỨA HIỂN ĐẠT, THÔNG MINH**
- Đa số **KHỎE MẠNH, NGOAN NGOÃN, THÔNG MINH**
- Mối quan hệ với con cháu **GẮN KẾT BỀN CHẶT**
- Gia đình **THUẬN HÒA, SUNG TÚC**`,
  },

  {
    id: 'de-vuong-tai-phu-the',
    title: 'Đế Vượng tại Phu Thê',
    sao: ['Đế Vượng'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `**Đế Vượng tại Phu Thê** — người hôn phối **TO BÉO, GIÀU CÓ, VƯỢNG TÀI**.

⚡ **Đặc trưng:**
- Người hôn phối dễ **TO BÉO, GIÀU CÓ**
- **VƯỢNG TÀI CỦA**
- Hậu vận **GIÀU SANG**

⚡ **Cát tinh hội:**
- Vợ chồng sống với nhau **HẠNH PHÚC, GIÀU CÓ**
- **PHÚC LỚN**, hay được nhiều **MAY MẮN**
- Đế Vượng = sao tượng trưng tình yêu **BỀN BỈ** và **HÒA HỢP LÂU DÀI**

⚡ **Lưu ý:** để gìn giữ những điều tốt đẹp, cần **ĐỒNG HÀNH VỮNG VÀNG**, mỗi
người **LẮNG NGHE VÀ TÔN TRỌNG** nhau.`,
  },

  {
    id: 'de-vuong-tai-huynh-de',
    title: 'Đế Vượng tại Huynh Đệ',
    sao: ['Đế Vượng'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Đế Vượng tại Huynh Đệ** — **ĐÔNG ANH CHỊ EM**, thương yêu giúp đỡ.

⚡ **Đặc trưng:**
- **ĐÔNG ANH CHỊ EM**
- **THƯƠNG YÊU VÀ GIÚP ĐỠ LẪN NHAU**
- Sống gần gũi, **YÊU THƯƠNG**

⚡ **Đế Vượng + Trường Sinh + cát tinh:**
- Anh chị em **ĐÔNG MÀ SUNG TÚC**

⚡ **Đế Vượng + Thai + Thiên Tướng + Phục Binh:**
- Số dễ có **ANH CHỊ EM DỊ BÀO**, hoặc anh chị em **NUÔI, ĐỠ ĐẦU**
- Có người đạt **CÔNG DANH, QUAN CHỨC, DANH VỌNG, KHÁ GIẢ**

⚡ **Cát tinh hội:** gia đình **ÊM ẤM**, có người **THÀNH ĐẠT, CÓ DANH TIẾNG**,
đưa cả **DÒNG HỌ VƯƠN XA**.`,
  },
];
