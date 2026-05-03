import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO PHONG CÁO - Thổ.
 *
 * PHẦN CHUNG CỦA CẶP THAI PHỤ - PHONG CÁO viết tại file `thai-phu.ts`
 * với tag sao: ['Thai Phụ', 'Phong Cáo'].
 *
 * 11 CUNG cũng được viết CHUNG tại `thai-phu.ts` (luận giải Thai Phụ -
 * Phong Cáo cùng nhau).
 *
 * File này CHỈ chứa:
 * - Đặc tính RIÊNG của Phong Cáo (khác Thai Phụ)
 * - Phần Phong Cáo riêng tại Mệnh + Quan Lộc + Tài
 *
 * Đặc trưng RIÊNG của Phong Cáo:
 * - "PHONG" = phong danh, khen thưởng, thăng chức
 * - "CÁO" = cáo bố, tuyên bố toàn thiên hạ
 * - Giống HÓA QUYỀN nhẹ — uy lực bề ngoài
 * - Mặt trái: TỰ ĐẮC, KIÊU HÃNH, TỰ PHỤ, PHÔ TRƯƠNG
 * - Khác Thai Phụ (TINH THẦN điềm đạm khoan dung)
 */
export const luanGiai_PhongCao: DoanLuanGiai[] = [
  {
    id: 'phong-cao-tinh-chat-rieng',
    title: 'Phong Cáo - Đặc tính riêng (Thổ, thăng chức ra oai)',
    sao: ['Phong Cáo'],
    doUuTien: 33,
    tomTat: `**Phong Cáo** — phụ tinh **QUÝ TINH + VĂN TINH**, đặc tính RIÊNG khác Thai
Phụ.

**Ngũ hành:** **Thổ**.

**Phân tích chữ:**
- "**PHONG**" = phong danh, khen thưởng, **THĂNG CHỨC**
- "**CÁO**" = cáo bố, **TUYÊN BỐ** với mọi người xung quanh, toàn thiên hạ

**Đặc tính riêng:**
- **KHEN THƯỞNG, THĂNG CẤP, THĂNG CHỨC**
- **GIA TĂNG QUYỀN LỰC, QUYỀN HÀNH**
- **TUYÊN BỐ** với mọi người xung quanh

**Mặt trái:**
- **TỰ ĐẮC, KIÊU HÃNH, TỰ PHỤ**
- Thích **RA OAI, PHÔ TRƯƠNG** bên ngoài

**So với Hóa Quyền:**
- Giống Hóa Quyền về tính **QUYỀN LỰC**
- NHƯNG **KHÔNG MẠNH BẰNG** Hóa Quyền
- Vì Quyền đắc địa = uy lực **THỰC SỰ**
- Phong Cáo nghiêng về **DANH TIẾNG BỀ NGOÀI** hơn

**So với Thai Phụ:**
- **THAI PHỤ:** giấy khen tinh thần, **ĐIỀM ĐẠM, KHIÊM TỐN, KHOAN DUNG**
- **PHONG CÁO:** quyền lực vật chất, **KIÊU HÃNH, PHÔ TRƯƠNG, RA OAI**`,
  },

  {
    id: 'phong-cao-tai-menh-rieng',
    title: 'Phong Cáo tại Mệnh - Kiêu hãnh phô trương',
    sao: ['Phong Cáo'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `**Phong Cáo thủ Mệnh** — đặc tính **RIÊNG** của Phong Cáo (khác Thai Phụ).

**Đặc trưng:**
- Người **NHIỀU BẰNG CẤP, KHEN THƯỞNG**
- Hay được **THĂNG QUAN, TIẾN CHỨC**
- Có **CHỨC QUYỀN**

**Mặt trái:**
- Người dễ có tính **TỰ ĐẮC, KIÊU HÃNH, TỰ PHỤ**
- **PHÔ TRƯƠNG BÊN NGOÀI**
- Thích **RA OAI** với người khác
- Người hay thích **TỎ RA QUYỀN HÀNH** để ĐE, **SAI KHIẾN** người khác

**Cảnh báo:**
- Cần học **KHIÊM TỐN, BIẾT NHƯỜNG NHỊN**
- Tính phô trương dễ **GÂY THỊ PHI**, đố kỵ`,
  },

  {
    id: 'phong-cao-tai-quan-loc-rieng',
    title: 'Phong Cáo tại Quan Lộc - Thăng cấp ra oai',
    sao: ['Phong Cáo'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `**Phong Cáo tại Quan Lộc** — đặc tính RIÊNG, chủ về **THĂNG CẤP, KHEN
THƯỞNG**.

**Đặc trưng:**
- Chủ về **THĂNG CẤP, KHEN THƯỞNG**
- **THĂNG QUAN TIẾN CHỨC**
- Tạo **NHIỀU CƠ HỘI** cho công danh sự nghiệp

**Mặt trái trong công việc:**
- Là người **THÍCH QUYỀN UY, RA OAI**
- Sử dụng **CHỨC VỤ** của mình để **THỂ HIỆN, ĐÈ NÉN** người khác
- Dễ gây **MÂU THUẪN** với đồng nghiệp, cấp dưới
- Nhân viên dễ **BẤT MÃN**

**Lời khuyên:** Quyền lực phải đi đôi với **TRÁCH NHIỆM** và **KHIÊM TỐN**
mới bền vững.`,
  },

  {
    id: 'phong-cao-tai-tai-bach-rieng',
    title: 'Phong Cáo tại Tài Bạch (cặp Thai Phụ - Phong Cáo)',
    sao: ['Phong Cáo'],
    cung: ['Tài Bạch'],
    ketHop: ['Thai Phụ'],
    doUuTien: 70,
    tomTat: `**Phong Cáo tại Tài Bạch** — đi cặp với Thai Phụ theo quy luật an sao.

**Quy luật:**
- Phong Cáo và Thai Phụ luôn cách nhau cố định
- Người hay được **KHEN THƯỞNG, TRAO TẶNG TIỀN**
- Có thể **DÙNG BẰNG CẤP, HỌC VỊ ĐỂ KIẾM TIỀN**

**Đặc trưng:**
- Tiền tài có yếu tố **DANH DỰ, VINH QUANG**
- Dễ được **TÀI TRỢ, GIẢI THƯỞNG**
- Có thể **PHÔ TRƯƠNG GIÀU SANG**, thích để mọi người biết về tài chính
  của mình`,
  },
];
