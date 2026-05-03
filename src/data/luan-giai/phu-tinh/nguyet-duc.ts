import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO NGUYỆT ĐỨC - Hỏa, Thiện Tinh.
 *
 * Vị trí: LUÔN đồng cung sao TỬ PHÙ (vòng Thái Tuế vị trí 5).
 * Engine HARDCODE quy luật này trong SAO_DONG_CUNG_THAI_TUE.
 *
 * Thuộc BỘ TỨ ĐỨC (4 sao Đức): Thiên Đức + Nguyệt Đức + Phúc Đức + Long Đức.
 *
 * Đặc trưng RIÊNG:
 * - "ĐỨC HẠNH CỦA NGƯỜI ĐÀN BÀ"
 * - Đặc biệt HỢP với NỮ MỆNH — chỉ sự NHU MỲ, HIỀN HẬU, DỊU DÀNG, ĐOAN
 * CHÍNH, NGAY THẲNG
 * - Khéo léo NỮ CÔNG GIA CHÁNH, NỘI TRỢ, THÊU THÙA
 * - Năng khiếu HỘI HỌA, ÂM NHẠC
 * - Hỏa nhanh: khả năng CHẾ GIẢI NHANH CHÓNG
 * - CHẾ Đào Hồng: đào hoa thành đoan chính
 * - Câu phú "Thiên Lương, Nguyệt Đức chiếu kề - Một là đạo sĩ, hai là tăng nhân"
 *
 * Phần CHUNG bộ Tứ Đức + câu phú "Thiên-Nguyệt Đức ngộ Đào Hồng" + bộ "Thiên-
 * Nguyệt Đức + Giải Thần + Quan Phúc một làng trừ hung" đã viết tại file
 * `thien-duc.ts`.
 */
export const luanGiai_NguyetDuc: DoanLuanGiai[] = [
  {
    id: 'nguyet-duc-tinh-chat-chung',
    title: 'Nguyệt Đức - Đức hạnh người đàn bà',
    sao: ['Nguyệt Đức'],
    doUuTien: 33,
    tomTat: `**Nguyệt Đức** — phụ tinh **THIỆN TINH**, thuộc bộ **TỨ ĐỨC**.

**Ngũ hành:** **Hỏa**.

**Đặc tính:**
- Là **ĐỨC HẠNH CỦA NGƯỜI ĐÀN BÀ**
- Chủ về **TRONG SÁNG, RÕ RÀNG, ĐOAN TRANG, ĐỨC ĐỘ, NHU THUẬN**
- Đi cùng để **KHUYÊN NHỦ, HÓA GIẢI**, đưa người ta tới **TU TẬP, ĐẠO HẠNH**
  thoát khỏi ưu phiền

**Quy luật vị trí:**
- Nguyệt Đức **LUÔN ĐỒNG CUNG** sao **TỬ PHÙ** (vòng Thái Tuế vị trí 5)
- Engine hardcode quy luật này
- Đứng trong tam hợp **ĐÀO KHÔNG SÁT** của vòng Thái Tuế
-: Người **THÔNG MINH, TÀI NĂNG, KHÔN LANH, NHANH NHẸN**
- Nhưng **LẮM TÀI NHIỀU TẬT**, gặp không ít **TAI VẠ VÀ TẬT BỆNH**
- Nguyệt Đức đi cùng: **CHẾ HÓA, KHUYÊN NHỦ** sự bộc phát của Tử Phù

**Tác dụng giải họa:**
- Giải trừ **TAI ÁCH, MAY MẮN, HỶ SỰ**
- Hỏa nhanh: **CHẾ GIẢI NHANH CHÓNG**
- Vận hạn có Nguyệt Đức:
  - Người mắc bệnh **PHỤC HỒI NHANH**
  - Sức khỏe cải thiện **TỪNG BƯỚC RÕ RỆT**
- Càng kết hợp Tứ Đức đầy đủ: **CỨU GIẢI MẠNH NHẤT**

**Khả năng CHẾ Đào Hồng:**
- Chế được **MỘT PHẦN** tính hoa nguyệt, dâm đãng của Đào Hồng
- Hướng con người tới **GIÁ TRỊ PHẨM HẠNH**
- Thu hút bằng **ĐOAN TRANG**, không lả lơi trêu cợt`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // BỘ KẾT HỢP ĐẶC BIỆT
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'nguyet-duc-thien-luong-dao-si-tang-nhan',
    title: 'Nguyệt Đức + Thiên Lương - Đạo sĩ tăng nhân',
    sao: ['Nguyệt Đức'],
    ketHop: ['Thiên Lương'],
    doUuTien: 65,
    tomTat: `**Câu phú: "Thiên Lương, Nguyệt Đức chiếu kề / Một là đạo sĩ, hai là tăng
nhân"**.

**Đặc trưng:**
- Người có **DUYÊN TU TẬP**
- Thích **TÌM HIỂU TÂM LINH, PHẬT PHÁP**
- Có thể trở thành **ĐẠO SĨ** hoặc **TĂNG NHÂN** (nhà sư)
- Bản tính **TỪ BI, CỨU NHÂN ĐỘ THẾ**
- Hợp các nghề liên quan **TÔN GIÁO, THIỀN, YOGA**`,
  },

  {
    id: 'nguyet-duc-han-dao-hong-mai-moi',
    title: 'Hạn Nguyệt Đức + Đào Hồng - Mai mối thành vợ chồng',
    sao: ['Nguyệt Đức'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 55,
    tomTat: `**Hạn gặp Nguyệt Đức + Đào Hoa + Hồng Loan** — gặp **GIAI NHÂN GIÚP ĐỠ** nên
tình duyên.

**Đặc trưng:**
- Có **NGƯỜI LÀM MAI MỐI** thành vợ chồng
- Hạn này có duyên **THÀNH HÔN**
- Đào Hồng được Nguyệt Đức **CHẾ**: kết duyên đoan chính
- Vợ chồng đẹp đôi`,
  },

  {
    id: 'nguyet-duc-thien-dong-vo-chong-co-con-som',
    title: 'Nguyệt Đức + Thiên Đồng tại Tử Tức - Vợ chồng có con sớm',
    sao: ['Nguyệt Đức'],
    cung: ['Tử Tức'],
    ketHop: ['Thiên Đồng'],
    doUuTien: 60,
    tomTat: `**Nguyệt Đức + Thiên Đồng tại Tử Tức** — vợ chồng có **CON SỚM**.

**Đặc trưng:**
- Vợ chồng **CÓ CON SỚM**
- Sinh nở **THUẬN LỢI**
- Con cái **HÒA THUẬN, HIẾU THẢO**
- Tổ ấm **RỘN RÀNG TIẾNG CƯỜI**`,
  },

  {
    id: 'nguyet-duc-thien-duc-dao-hoa-vo-chong-dep-doi',
    title: 'Thiên Đức + Nguyệt Đức + Đào Hoa - Vợ chồng đẹp đôi',
    sao: ['Nguyệt Đức'],
    cung: ['Phu Thê'],
    ketHop: ['Thiên Đức', 'Đào Hoa'],
    doUuTien: 65,
    tomTat: `**Thiên Đức + Nguyệt Đức + Đào Hoa tại Phu Thê** — vợ chồng **ĐẸP ĐÔI, TƯƠNG
ĐẮC**.

**Đặc trưng:**
- Vợ chồng **ĐẸP ĐÔI**
- **TƯƠNG ĐẮC, HÒA HỢP**
- Tứ Đức + Đào Hoa = **BỘ ĐOAN CHÍNH ĐẸP**
- Tình cảm **BỀN CHẶT**
- Nhân duyên **TRỜI BAN**`,
  },

  {
    id: 'nguyet-duc-tu-phu-dong-luong-quang-quy-quan-phuc-dien',
    title: 'Nguyệt Đức + Tử Phủ Đồng Lương + Quang Quý + Quan Phúc Điền - Nhà thờ Phật Quan Âm',
    sao: ['Nguyệt Đức'],
    cung: ['Điền Trạch'],
    ketHop: ['Tử Vi', 'Thiên Phủ', 'Thiên Đồng', 'Thiên Lương', 'Ân Quang', 'Thiên Quan'],
    doUuTien: 60,
    tomTat: `**Nguyệt Đức + Tử Vi / Thiên Phủ / Thiên Đồng / Thiên Lương + Quang Quý +
Quan Phúc tại Điền Trạch** — nhà thờ **PHẬT BÀ QUAN ÂM**.

**Đặc trưng:**
- Nhà thờ **PHẬT BÀ QUAN ÂM**
- Gia đình có **TRUYỀN THỐNG TÂM LINH**
- Mộ phần tổ tiên đặt gần **NƠI THỜ PHẬT BÀ QUAN ÂM**
- Con cháu hưởng **PHÚC ẤM**`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // NGUYỆT ĐỨC TẠI 11 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'nguyet-duc-tai-menh',
    title: 'Nguyệt Đức tại Mệnh - Tâm lành quý nhân phù trợ',
    sao: ['Nguyệt Đức'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `**Nguyệt Đức thủ Mệnh** — tâm lành, **QUÝ NHÂN PHÙ TRỢ**.

**Tính tình chung:**
- **ÔN HÒA, NHÂN HẬU, ĐỨC HẠNH, ĐẸP NẾT**
- **TỪ BI, TỪ THIỆN**, hay giúp đỡ làm phúc

**Đặc biệt với NỮ MỆNH:**
- **RẤT HỢP** — Nguyệt Đức là **ĐỨC HẠNH NGƯỜI ĐÀN BÀ**
- Đoan chính, **DỊU DÀNG, NẾT NA**
- **NHU MỲ, HIỀN HẬU, NGAY THẲNG**
- Khéo léo trong **NỮ CÔNG GIA CHÁNH, NỘI TRỢ, THÊU THÙA**
- Có **NĂNG KHIẾU HỘI HỌA, ÂM NHẠC**
- Là **VỢ HIỀN, DÂU THẢO**

**Đặc biệt với NAM MỆNH:**
- Có **DUYÊN VỚI NỮ GIỚI**
- Có **QUÝ NHÂN LÀ NGƯỜI KHÁC PHÁI** giúp đỡ
- Bản thân **THÔNG MINH, KHÉO TAY**
- Giỏi về **NGHỆ THUẬT, HỘI HỌA, ÂM NHẠC**

**Khả năng giải hung:**
- **GIẢI TRỪ TẬT ÁCH, TAI HỌA NHỎ**
- Mang lại **MAY MẮN, HỶ SỰ**
- Hội đủ **TỨ ĐỨC**: cứu giải càng mạnh, là **LÁ BÙA HỘ MỆNH**`,
  },

  {
    id: 'nguyet-duc-tai-phu-mau',
    title: 'Nguyệt Đức tại Phụ Mẫu',
    sao: ['Nguyệt Đức'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Nguyệt Đức tại Phụ Mẫu** — cha mẹ **NHÂN HẬU, HIỀN LÀNH**.

**Đặc trưng:**
- Cha mẹ **NHÂN HẬU, HIỀN LÀNH**
- Sống **CÓ ĐẠO ĐỨC**
- Hay **LÀM TỪ THIỆN, THÍCH TU TẬP**
- Con cháu được hưởng **PHÚC LỚN**`,
  },

  {
    id: 'nguyet-duc-tai-phu-mau-khong',
    title: 'Nguyệt Đức + Địa Không tại Phụ Mẫu - Duyên tu tập',
    sao: ['Nguyệt Đức'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Địa Không'],
    doUuTien: 70,
    tomTat: `**Nguyệt Đức + Địa Không tại Phụ Mẫu:** cha mẹ thường có **DUYÊN
TU TẬP**.`,
  },

  {
    id: 'nguyet-duc-tai-phu-mau-kiep',
    title: 'Nguyệt Đức + Địa Kiếp tại Phụ Mẫu - Duyên tu tập',
    sao: ['Nguyệt Đức'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 70,
    tomTat: `**Nguyệt Đức + Địa Kiếp tại Phụ Mẫu:** cha mẹ thường có **DUYÊN
TU TẬP**.`,
  },

  {
    id: 'nguyet-duc-tai-phu-mau-xuong',
    title: 'Nguyệt Đức + Văn Xương tại Phụ Mẫu - Duyên tu tập',
    sao: ['Nguyệt Đức'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Văn Xương'],
    doUuTien: 70,
    tomTat: `**Nguyệt Đức + Văn Xương tại Phụ Mẫu:** cha mẹ thường có **DUYÊN
TU TẬP**.`,
  },

  {
    id: 'nguyet-duc-tai-phu-mau-khuc',
    title: 'Nguyệt Đức + Văn Khúc tại Phụ Mẫu - Duyên tu tập',
    sao: ['Nguyệt Đức'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Văn Khúc'],
    doUuTien: 70,
    tomTat: `**Nguyệt Đức + Văn Khúc tại Phụ Mẫu:** cha mẹ thường có **DUYÊN
TU TẬP**.`,
  },

  {
    id: 'nguyet-duc-tai-phu-mau-hoa-ky',
    title: 'Nguyệt Đức + Hóa Kỵ tại Phụ Mẫu - Mâu thuẫn',
    sao: ['Nguyệt Đức'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `**Nguyệt Đức + Hóa Kỵ tại Phụ Mẫu:**
- Tình cảm cha mẹ - con cái có **NHIỀU VẤN ĐỀ KHÓ GIẢI QUYẾT**
- Trong lòng còn thương nhưng **NGOÀI MẶT MÂU THUẪN**
- Dứt áo ra đi vẫn **NẶNG LÒNG**`,
  },

  {
    id: 'nguyet-duc-tai-phu-mau-thien-hinh',
    title: 'Nguyệt Đức + Thiên Hình tại Phụ Mẫu - Mâu thuẫn',
    sao: ['Nguyệt Đức'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Thiên Hình'],
    doUuTien: 70,
    tomTat: `**Nguyệt Đức + Thiên Hình tại Phụ Mẫu:**
- Tình cảm cha mẹ - con cái có **NHIỀU VẤN ĐỀ KHÓ GIẢI QUYẾT**
- Trong lòng còn thương nhưng **NGOÀI MẶT MÂU THUẪN**
- Dứt áo ra đi vẫn **NẶNG LÒNG**`,
  },

  {
    id: 'nguyet-duc-tai-phuc-duc',
    title: 'Nguyệt Đức tại Phúc Đức',
    sao: ['Nguyệt Đức'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `**Nguyệt Đức tại Phúc Đức** — điềm lành, **TỪ BI LƯƠNG THIỆN**.

**Đặc trưng:**
- Tâm tính trở nên **TỪ BI, LƯƠNG THIỆN**
- Đương số sống **NHÂN NGHĨA, BIẾT TRƯỚC BIẾT SAU**
- Dòng họ tổ tiên nhiều người **HIỀN LÀNH, NHÂN HẬU**, nhường nhịn nhau
- Hay **LÀM PHÚC**`,
  },

  {
    id: 'nguyet-duc-tai-phuc-duc-thien-duc',
    title: 'Nguyệt Đức + Thiên Đức tại Phúc Đức - Họ hàng phúc hậu',
    sao: ['Nguyệt Đức'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Đức'],
    doUuTien: 73,
    tomTat: `**Nguyệt Đức + Thiên Đức đồng cung tại Phúc Đức:**
- Họ hàng **PHÚC HẬU**
- Mồ mả **THUẬN VỊ**
- Mồ mả tổ tiên đặt gần nơi **THỜ PHẬT BÀ QUAN ÂM**`,
  },

  {
    id: 'nguyet-duc-tai-phuc-duc-tu-duc',
    title: 'Nguyệt Đức + Tứ Đức tại Phúc Đức - Phúc ấm bền',
    sao: ['Nguyệt Đức'],
    cung: ['Phúc Đức'],
    ketHop: ['Long Đức', 'Phúc Đức', 'Thiên Đức', 'Nguyệt Đức'],
    doUuTien: 73,
    tomTat: `**Nguyệt Đức + Tứ Đức (Long Đức / Phúc Đức / Thiên Đức / Nguyệt
Đức) đầy đủ tại Phúc Đức:**
- Phúc ấm càng **BỀN**
- Đời sống tinh thần con cháu có **ĐIỂM TỰA VỮNG CHẮC**`,
  },

  {
    id: 'nguyet-duc-tai-phuc-duc-kiep',
    title: 'Nguyệt Đức + Địa Kiếp tại Phúc Đức - Sai lầm tội lỗi',
    sao: ['Nguyệt Đức'],
    cung: ['Phúc Đức'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 70,
    tomTat: `**Nguyệt Đức + Địa Kiếp tại Phúc Đức:**
- Dễ xảy ra **SAI LẦM, TỘI LỖI**
- Hiện tượng **BIẾT SAI MỚI SỬA**
- Việc nhận ra lỗi để **"QUAY ĐẦU LÀ BỜ"** vẫn tốt hơn mải mê đi sai`,
  },

  {
    id: 'nguyet-duc-tai-phuc-duc-hoa-ky',
    title: 'Nguyệt Đức + Hóa Kỵ tại Phúc Đức - Sai lầm tội lỗi',
    sao: ['Nguyệt Đức'],
    cung: ['Phúc Đức'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `**Nguyệt Đức + Hóa Kỵ tại Phúc Đức:**
- Dễ xảy ra **SAI LẦM, TỘI LỖI**
- Hiện tượng **BIẾT SAI MỚI SỬA**
- Việc nhận ra lỗi để **"QUAY ĐẦU LÀ BỜ"** vẫn tốt hơn mải mê đi sai`,
  },

  {
    id: 'nguyet-duc-tai-phuc-duc-linh',
    title: 'Nguyệt Đức + Linh Tinh tại Phúc Đức - Sai lầm tội lỗi',
    sao: ['Nguyệt Đức'],
    cung: ['Phúc Đức'],
    ketHop: ['Linh Tinh'],
    doUuTien: 70,
    tomTat: `**Nguyệt Đức + Linh Tinh tại Phúc Đức:**
- Dễ xảy ra **SAI LẦM, TỘI LỖI**
- Hiện tượng **BIẾT SAI MỚI SỬA**
- Việc nhận ra lỗi để **"QUAY ĐẦU LÀ BỜ"** vẫn tốt hơn mải mê đi sai`,
  },

  {
    id: 'nguyet-duc-tai-dien-trach',
    title: 'Nguyệt Đức tại Điền Trạch',
    sao: ['Nguyệt Đức'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Nguyệt Đức tại Điền Trạch** — đi đâu cũng có **NGƯỜI GIÚP ĐỠ** về nhà cửa.

**Đặc trưng:**
- Đi đâu cũng có **NGƯỜI GIÚP ĐỠ** về nhà cửa, nơi ăn chốn ở
- Quan hệ **LÀNG XÓM LÁNG GIỀNG TỐT**, nhường nhịn nhau, ít tai tiếng
- Người ăn gì, ở đâu cũng **CHẤP NHẬN ĐƯỢC**
- **KHÔNG ĐÒI HỎI**, yêu cầu cao`,
  },

  {
    id: 'nguyet-duc-tai-dien-trach-tu-duc',
    title: 'Nguyệt Đức + Tứ Đức tại Điền Trạch - Nhà thanh tịnh',
    sao: ['Nguyệt Đức'],
    cung: ['Điền Trạch'],
    ketHop: ['Long Đức', 'Phúc Đức', 'Thiên Đức', 'Nguyệt Đức'],
    doUuTien: 70,
    tomTat: `**Nguyệt Đức + Tứ Đức (Long Đức / Phúc Đức / Thiên Đức / Nguyệt
Đức) đầy đủ tại Điền Trạch:**
- Nhà cửa **THANH TỊNH**
- Mang tính **TÂM LINH**`,
  },

  {
    id: 'nguyet-duc-tai-dien-trach-kinh',
    title: 'Nguyệt Đức + Kình Dương tại Điền Trạch - Thị phi hàng xóm',
    sao: ['Nguyệt Đức'],
    cung: ['Điền Trạch'],
    ketHop: ['Kình Dương'],
    doUuTien: 68,
    tomTat: `**Nguyệt Đức + Kình Dương tại Điền Trạch:**
- Phải trải qua **RẮC RỐI HOẶC THỊ PHI** với hàng xóm
- Nhưng nhờ đó **HIỂU NHAU VÀ SỐNG BIẾT ĐIỀU HƠN**`,
  },

  {
    id: 'nguyet-duc-tai-dien-trach-da',
    title: 'Nguyệt Đức + Đà La tại Điền Trạch - Thị phi hàng xóm',
    sao: ['Nguyệt Đức'],
    cung: ['Điền Trạch'],
    ketHop: ['Đà La'],
    doUuTien: 68,
    tomTat: `**Nguyệt Đức + Đà La tại Điền Trạch:**
- Phải trải qua **RẮC RỐI HOẶC THỊ PHI** với hàng xóm
- Nhưng nhờ đó **HIỂU NHAU VÀ SỐNG BIẾT ĐIỀU HƠN**`,
  },

  {
    id: 'nguyet-duc-tai-dien-trach-hoa',
    title: 'Nguyệt Đức + Hỏa Tinh tại Điền Trạch - Thị phi hàng xóm',
    sao: ['Nguyệt Đức'],
    cung: ['Điền Trạch'],
    ketHop: ['Hỏa Tinh'],
    doUuTien: 68,
    tomTat: `**Nguyệt Đức + Hỏa Tinh tại Điền Trạch:**
- Phải trải qua **RẮC RỐI HOẶC THỊ PHI** với hàng xóm
- Nhưng nhờ đó **HIỂU NHAU VÀ SỐNG BIẾT ĐIỀU HƠN**`,
  },

  {
    id: 'nguyet-duc-tai-dien-trach-linh',
    title: 'Nguyệt Đức + Linh Tinh tại Điền Trạch - Thị phi hàng xóm',
    sao: ['Nguyệt Đức'],
    cung: ['Điền Trạch'],
    ketHop: ['Linh Tinh'],
    doUuTien: 68,
    tomTat: `**Nguyệt Đức + Linh Tinh tại Điền Trạch:**
- Phải trải qua **RẮC RỐI HOẶC THỊ PHI** với hàng xóm
- Nhưng nhờ đó **HIỂU NHAU VÀ SỐNG BIẾT ĐIỀU HƠN**`,
  },

  {
    id: 'nguyet-duc-tai-dien-trach-khong',
    title: 'Nguyệt Đức + Địa Không tại Điền Trạch - Thị phi hàng xóm',
    sao: ['Nguyệt Đức'],
    cung: ['Điền Trạch'],
    ketHop: ['Địa Không'],
    doUuTien: 68,
    tomTat: `**Nguyệt Đức + Địa Không tại Điền Trạch:**
- Phải trải qua **RẮC RỐI HOẶC THỊ PHI** với hàng xóm
- Nhưng nhờ đó **HIỂU NHAU VÀ SỐNG BIẾT ĐIỀU HƠN**`,
  },

  {
    id: 'nguyet-duc-tai-dien-trach-kiep',
    title: 'Nguyệt Đức + Địa Kiếp tại Điền Trạch - Thị phi hàng xóm',
    sao: ['Nguyệt Đức'],
    cung: ['Điền Trạch'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 68,
    tomTat: `**Nguyệt Đức + Địa Kiếp tại Điền Trạch:**
- Phải trải qua **RẮC RỐI HOẶC THỊ PHI** với hàng xóm
- Nhưng nhờ đó **HIỂU NHAU VÀ SỐNG BIẾT ĐIỀU HƠN**`,
  },

  {
    id: 'nguyet-duc-tai-quan-loc',
    title: 'Nguyệt Đức tại Quan Lộc',
    sao: ['Nguyệt Đức'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `**Nguyệt Đức tại Quan Lộc** — **MAY MẮN** trong công danh, có **LƯƠNG TÂM
NGHỀ NGHIỆP**.

**Đặc trưng:**
- Thường gặp **MAY MẮN** trong công danh
- Người có **LƯƠNG TÂM NGHỀ NGHIỆP**
- Đạo đức cao
- Làm việc với **CÁI TÂM**
- Không **BON CHEN, THỦ ĐOẠN**`,
  },

  {
    id: 'nguyet-duc-tai-quan-loc-tu-duc',
    title: 'Nguyệt Đức + Tứ Đức tại Quan Lộc - Tôn giáo cứu người',
    sao: ['Nguyệt Đức'],
    cung: ['Quan Lộc'],
    ketHop: ['Long Đức', 'Phúc Đức', 'Thiên Đức', 'Nguyệt Đức'],
    doUuTien: 73,
    tomTat: `**Nguyệt Đức + Tứ Đức (Long Đức / Phúc Đức / Thiên Đức / Nguyệt
Đức) đầy đủ tại Quan Lộc:**
- Theo đuổi công việc liên quan **TÔN GIÁO, TÂM LINH**
- Hoặc các ngành nghề **CỨU NGƯỜI, GIÚP ĐỜI**`,
  },

  {
    id: 'nguyet-duc-tai-quan-loc-thien-hinh',
    title: 'Nguyệt Đức + Thiên Hình tại Quan Lộc - Nghề tích phúc đức',
    sao: ['Nguyệt Đức'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Hình'],
    doUuTien: 70,
    tomTat: `**Nguyệt Đức + Thiên Hình tại Quan Lộc:**
- Nên chọn **NGHỀ TÍCH PHÚC ĐỨC** để giảm tai họa
- Bác sĩ, điều dưỡng, công an cứu hộ`,
  },

  {
    id: 'nguyet-duc-tai-quan-loc-kinh',
    title: 'Nguyệt Đức + Kình Dương tại Quan Lộc - Nghề tích phúc đức',
    sao: ['Nguyệt Đức'],
    cung: ['Quan Lộc'],
    ketHop: ['Kình Dương'],
    doUuTien: 70,
    tomTat: `**Nguyệt Đức + Kình Dương tại Quan Lộc:**
- Nên chọn **NGHỀ TÍCH PHÚC ĐỨC** để giảm tai họa
- Bác sĩ, điều dưỡng, công an cứu hộ`,
  },

  {
    id: 'nguyet-duc-tai-quan-loc-hoa-tinh',
    title: 'Nguyệt Đức + Hỏa Tinh tại Quan Lộc - Nghề tích phúc đức',
    sao: ['Nguyệt Đức'],
    cung: ['Quan Lộc'],
    ketHop: ['Hỏa Tinh'],
    doUuTien: 70,
    tomTat: `**Nguyệt Đức + Hỏa Tinh tại Quan Lộc:**
- Nên chọn **NGHỀ TÍCH PHÚC ĐỨC** để giảm tai họa
- Ví dụ: tài xế lái xe cấp cứu (Hỏa Tinh + nhanh + cứu người)`,
  },

  {
    id: 'nguyet-duc-tai-quan-loc-hoa-ky',
    title: 'Nguyệt Đức + Hóa Kỵ tại Quan Lộc - Nghề tích phúc đức',
    sao: ['Nguyệt Đức'],
    cung: ['Quan Lộc'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `**Nguyệt Đức + Hóa Kỵ tại Quan Lộc:**
- Nên chọn **NGHỀ TÍCH PHÚC ĐỨC** để giảm tai họa
- Bác sĩ, điều dưỡng, công an cứu hộ`,
  },

  {
    id: 'nguyet-duc-tai-no-boc',
    title: 'Nguyệt Đức tại Nô Bộc',
    sao: ['Nguyệt Đức'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Nguyệt Đức tại Nô Bộc** — bạn bè **HIỀN LÀNH, NHÂN HẬU**.

**Đặc trưng:**
- Bè bạn, người làm, người giúp việc thường **HIỀN LÀNH, NHÂN HẬU**
- Nhường nhịn **GIÚP ĐỠ NHAU**
- Hay có **NHÂN DUYÊN ĐƯỢC NGƯỜI NỮ GIỚI GIÚP ĐỠ**
- Bạn tốt thường ít nhưng đã quen rồi thì **GẮN BÓ LÂU DÀI**

**Khi đi cùng hung tinh:**
- Bạn xấu **NHIỀU HƠN BẠN TỐT**
- Nhưng nếu kết được bạn tốt thì **MỐI GIAO TÌNH RẤT BỀN LÂU**, có khả
  năng đồng hành cùng nhau **ĐẾN GIÀ**`,
  },

  {
    id: 'nguyet-duc-tai-thien-di',
    title: 'Nguyệt Đức tại Thiên Di',
    sao: ['Nguyệt Đức'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Nguyệt Đức tại Thiên Di** — ra ngoài **KHIÊM TỐN GIÚP ĐỠ NGƯỜI**.

**Đặc trưng:**
- Người ra ngoài thường **NHẸ NHÀNG, KHIÊM TỐN**
- Giúp đỡ mọi người và cũng **ĐƯỢC MỌI NGƯỜI GIÚP ĐỠ**
- Ra ngoài hay có **NHÂN DUYÊN VỚI NGƯỜI NỮ GIỚI** giúp đỡ
- Có người **NHẬN LÀM MẸ NUÔI, ĐỠ ĐẦU**`,
  },

  {
    id: 'nguyet-duc-tai-thien-di-tu-duc',
    title: 'Nguyệt Đức + Tứ Đức tại Thiên Di - Lui tới nơi tâm linh',
    sao: ['Nguyệt Đức'],
    cung: ['Thiên Di'],
    ketHop: ['Long Đức', 'Phúc Đức', 'Thiên Đức', 'Nguyệt Đức'],
    doUuTien: 70,
    tomTat: `**Nguyệt Đức + Tứ Đức (Long Đức / Phúc Đức / Thiên Đức / Nguyệt
Đức) đầy đủ tại Thiên Di:**
- Hay lui tới **NƠI TÂM LINH, TÍN NGƯỠNG**
- Hoặc làm công việc thường xuyên đến **MÔI TRƯỜNG TÂM LINH**:
  - Phóng viên thu thập thông tin văn hóa
  - Nhà nghiên cứu tôn giáo`,
  },

  {
    id: 'nguyet-duc-tai-thien-di-kinh',
    title: 'Nguyệt Đức + Kình Dương tại Thiên Di - Tai nạn bất ngờ',
    sao: ['Nguyệt Đức'],
    cung: ['Thiên Di'],
    ketHop: ['Kình Dương'],
    doUuTien: 70,
    tomTat: `**Nguyệt Đức + Kình Dương tại Thiên Di:**
- Dễ xảy ra **TAI NẠN BẤT NGỜ**
- Vận số phải **NHỜ NGƯỜI CỨU GIÚP**
- Cách "**NGHIỆP DUYÊN**" đưa đến sự kết nối nhưng không cát lợi`,
  },

  {
    id: 'nguyet-duc-tai-thien-di-thien-hinh',
    title: 'Nguyệt Đức + Thiên Hình tại Thiên Di - Tai nạn bất ngờ',
    sao: ['Nguyệt Đức'],
    cung: ['Thiên Di'],
    ketHop: ['Thiên Hình'],
    doUuTien: 70,
    tomTat: `**Nguyệt Đức + Thiên Hình tại Thiên Di:**
- Dễ xảy ra **TAI NẠN BẤT NGỜ**
- Vận số phải **NHỜ NGƯỜI CỨU GIÚP**
- Cách "**NGHIỆP DUYÊN**" đưa đến sự kết nối nhưng không cát lợi`,
  },

  {
    id: 'nguyet-duc-tai-tat-ach',
    title: 'Nguyệt Đức tại Tật Ách',
    sao: ['Nguyệt Đức'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `**Nguyệt Đức tại Tật Ách** — giải trừ **TAI NẠN, BỆNH TẬT NHỎ**.

**Đặc trưng:**
- Có khả năng **GIẢI TRỪ** tai nạn, bệnh tật nhỏ
- Sử dụng **PHƯỚC ĐỨC, MAY MẮN** để cứu chữa
- Càng **TÍCH PHÚC NHIỀU**: càng nhiều may mắn thoát tai họa
- Bệnh tật thì **GẶP BÁC SĨ GIỎI** cứu chữa

**Đặc trưng tâm linh:**
- Gặp tai họa hay được **NGƯỜI PHỤ NỮ CỨU GIÚP**
- Đi chùa xin **ĐỨC BÀ QUAN ÂM** phù trì cứu giúp
- Niềm tin "**ẨN GIẤU**" với tâm linh
- Có thể ngoài mặt không công nhận, sâu bên trong là niềm tin sâu sắc`,
  },

  {
    id: 'nguyet-duc-tai-tat-ach-khong',
    title: 'Nguyệt Đức + Địa Không tại Tật Ách - Niềm tin mù quáng',
    sao: ['Nguyệt Đức'],
    cung: ['Tật Ách'],
    ketHop: ['Địa Không'],
    doUuTien: 70,
    tomTat: `**Nguyệt Đức + Địa Không tại Tật Ách:**
- Hình thành **NIỀM TIN MÙ QUÁNG**
- Tin vào **TÂM LINH CHỮA BỆNH** tốt hơn khoa học
- Cần thận trọng`,
  },

  {
    id: 'nguyet-duc-tai-tat-ach-kiep',
    title: 'Nguyệt Đức + Địa Kiếp tại Tật Ách - Niềm tin mù quáng',
    sao: ['Nguyệt Đức'],
    cung: ['Tật Ách'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 70,
    tomTat: `**Nguyệt Đức + Địa Kiếp tại Tật Ách:**
- Hình thành **NIỀM TIN MÙ QUÁNG**
- Tin vào **TÂM LINH CHỮA BỆNH** tốt hơn khoa học
- Cần thận trọng`,
  },

  {
    id: 'nguyet-duc-tai-tat-ach-hoa-ky',
    title: 'Nguyệt Đức + Hóa Kỵ tại Tật Ách - Niềm tin mù quáng',
    sao: ['Nguyệt Đức'],
    cung: ['Tật Ách'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `**Nguyệt Đức + Hóa Kỵ tại Tật Ách:**
- Hình thành **NIỀM TIN MÙ QUÁNG**
- Tin vào **TÂM LINH CHỮA BỆNH** tốt hơn khoa học
- Cần thận trọng`,
  },

  {
    id: 'nguyet-duc-tai-tai-bach',
    title: 'Nguyệt Đức tại Tài Bạch',
    sao: ['Nguyệt Đức'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Nguyệt Đức tại Tài Bạch** — kiếm tiền **LƯƠNG THIỆN, KHÔNG TRANH ĐOẠT**.

**Đặc trưng:**
- Kiếm tiền **LƯƠNG THIỆN**
- **KHÔNG THÍCH CẠNH TRANH, TRANH ĐẤU** vì tiền
- Đôi khi sẵn sàng **CHẤP NHẬN THIỆT BƯỚC** nếu có tranh chấp
- Hay dùng tiền đem đi **LÀM TỪ THIỆN, CÔNG ĐỨC**
- Hay được **GIÚP ĐỠ HOẶC GẶP MAY** về tiền bạc
- **KHÔNG CÓ VẤN ĐỀ KHÓ KHĂN** với tiền bạc`,
  },

  {
    id: 'nguyet-duc-tai-tai-bach-tu-duc',
    title: 'Nguyệt Đức + Tứ Đức tại Tài Bạch - Kiếm tiền tâm linh',
    sao: ['Nguyệt Đức'],
    cung: ['Tài Bạch'],
    ketHop: ['Long Đức', 'Phúc Đức', 'Thiên Đức', 'Nguyệt Đức'],
    doUuTien: 70,
    tomTat: `**Nguyệt Đức + Tứ Đức (Long Đức / Phúc Đức / Thiên Đức / Nguyệt
Đức) đầy đủ tại Tài Bạch:**
- Kiếm tiền có **YẾU TỐ TÂM LINH**
- Người làm việc tâm linh cần **CÓ TÂM, CHỈN CHU, BIẾT NGHĨ CHO NGƯỜI KHÁC**
- Dễ được **KÍNH TRỌNG, GIỚI THIỆU** nhiều mối làm ăn
- Ví dụ: chuyên đi quay phim chụp ảnh đám ma, hướng dẫn viên du lịch tâm linh`,
  },

  {
    id: 'nguyet-duc-tai-tu-tuc',
    title: 'Nguyệt Đức tại Tử Tức',
    sao: ['Nguyệt Đức'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Nguyệt Đức tại Tử Tức** — con cái **HÒA THUẬN, HIẾU THẢO**.

**Đặc trưng:**
- Con cái **HÒA THUẬN, HIẾU THẢO**
- Biết lo cho cha mẹ, nhất là về **HẬU VẬN**`,
  },

  {
    id: 'nguyet-duc-tai-tu-tuc-hoa-tinh',
    title: 'Nguyệt Đức + Hỏa Tinh tại Tử Tức - Xa cách',
    sao: ['Nguyệt Đức'],
    cung: ['Tử Tức'],
    ketHop: ['Hỏa Tinh'],
    doUuTien: 70,
    tomTat: `**Nguyệt Đức + Hỏa Tinh tại Tử Tức:**
- Thúc đẩy hiện tượng **XA CÁCH** trong mối quan hệ
- Con cái từ nhỏ **KHÓ NUÔI**
- Hoặc càng lớn càng **DẦN XA CÁCH** (đi học xa, làm ăn xa nhà)
- Mặc dù con vẫn **BÁO ĐÁP CÔNG ƠN DƯỠNG DỤC**
- Nhưng sự xa cách khiến cha mẹ **MANG NHIỀU TÂM TƯ NẶNG LÒNG**`,
  },

  {
    id: 'nguyet-duc-tai-phu-the',
    title: 'Nguyệt Đức tại Phu Thê - Hợp nhất ở cung này',
    sao: ['Nguyệt Đức'],
    cung: ['Phu Thê'],
    doUuTien: 80,
    tomTat: `**Nguyệt Đức tại Phu Thê** — **HỢP NHẤT** ở cung này, đức hạnh người vợ.

**Đặc trưng:**
- Nguyệt Đức **HỢP NHẤT** ở Phu Thê vì là sao **DUYÊN NỢ**
- Báo hiệu vợ chồng có sự **RÀNG BUỘC KHÓ RỜI**
- Người hôn phối có **NHAN SẮC, ĐỨNG ĐẮN, NHẸ NHÀNG, ĐIỀM ĐẠM**
- Người hôn phối **HIỀN LÀNH**, hay giúp đỡ người khác
- Được **NHIỀU NGƯỜI QUÝ MẾN**

**Trong cuộc sống hôn nhân:**
- Thường là người **CHẤP NHẬN NHÚN NHƯỜNG** để tránh mâu thuẫn, cãi vã

**Đặc biệt cho NỮ MỆNH (cung Thê):**
- Người vợ **NHU MỲ, HIỀN HẬU, DỊU DÀNG, ĐOAN CHÍNH, NGAY THẲNG**
- Khéo léo **NỮ CÔNG GIA CHÁNH, NỘI TRỢ, THÊU THÙA**
- Năng khiếu **HỘI HỌA, ÂM NHẠC**`,
  },

  {
    id: 'nguyet-duc-tai-phu-the-khoi-viet-xuong-khuc-hoa-loc',
    title: 'Nguyệt Đức + Khôi Việt + Xương Khúc + Hóa Lộc tại Phu Thê - Sắt son',
    sao: ['Nguyệt Đức'],
    cung: ['Phu Thê'],
    ketHop: ['Thiên Khôi', 'Thiên Việt', 'Văn Xương', 'Văn Khúc', 'Hóa Lộc'],
    doUuTien: 73,
    tomTat: `**Nguyệt Đức + Thiên Khôi + Thiên Việt + Văn Xương + Văn Khúc +
Hóa Lộc tại Phu Thê:**
- Hôn nhân **BỀN VỮNG**
- Tình nghĩa vợ chồng **SẮT SON**`,
  },

  {
    id: 'nguyet-duc-tai-phu-the-kinh',
    title: 'Nguyệt Đức + Kình Dương tại Phu Thê - Oan gia ngõ hẹp',
    sao: ['Nguyệt Đức'],
    cung: ['Phu Thê'],
    ketHop: ['Kình Dương'],
    doUuTien: 70,
    tomTat: `**Nguyệt Đức + Kình Dương tại Phu Thê:**
- "**OAN GIA NGÕ HẸP**"
- Đến với nhau nhiều khổ đau nhưng khó dứt
- Như để **TRẢ MỘT MÓN NỢ TIỀN DUYÊN**`,
  },

  {
    id: 'nguyet-duc-tai-phu-the-da',
    title: 'Nguyệt Đức + Đà La tại Phu Thê - Oan gia ngõ hẹp',
    sao: ['Nguyệt Đức'],
    cung: ['Phu Thê'],
    ketHop: ['Đà La'],
    doUuTien: 70,
    tomTat: `**Nguyệt Đức + Đà La tại Phu Thê:**
- "**OAN GIA NGÕ HẸP**"
- Đến với nhau nhiều khổ đau nhưng khó dứt
- Như để **TRẢ MỘT MÓN NỢ TIỀN DUYÊN**`,
  },

  {
    id: 'nguyet-duc-tai-phu-the-hoa-tinh',
    title: 'Nguyệt Đức + Hỏa Tinh tại Phu Thê - Oan gia ngõ hẹp',
    sao: ['Nguyệt Đức'],
    cung: ['Phu Thê'],
    ketHop: ['Hỏa Tinh'],
    doUuTien: 70,
    tomTat: `**Nguyệt Đức + Hỏa Tinh tại Phu Thê:**
- "**OAN GIA NGÕ HẸP**"
- Đến với nhau nhiều khổ đau nhưng khó dứt
- Như để **TRẢ MỘT MÓN NỢ TIỀN DUYÊN**`,
  },

  {
    id: 'nguyet-duc-tai-phu-the-kiep',
    title: 'Nguyệt Đức + Địa Kiếp tại Phu Thê - Oan gia ngõ hẹp',
    sao: ['Nguyệt Đức'],
    cung: ['Phu Thê'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 70,
    tomTat: `**Nguyệt Đức + Địa Kiếp tại Phu Thê:**
- "**OAN GIA NGÕ HẸP**"
- Đến với nhau nhiều khổ đau nhưng khó dứt
- Như để **TRẢ MỘT MÓN NỢ TIỀN DUYÊN**`,
  },

  {
    id: 'nguyet-duc-tai-phu-the-khong',
    title: 'Nguyệt Đức + Địa Không tại Phu Thê - Oan gia ngõ hẹp',
    sao: ['Nguyệt Đức'],
    cung: ['Phu Thê'],
    ketHop: ['Địa Không'],
    doUuTien: 70,
    tomTat: `**Nguyệt Đức + Địa Không tại Phu Thê:**
- "**OAN GIA NGÕ HẸP**"
- Đến với nhau nhiều khổ đau nhưng khó dứt
- Như để **TRẢ MỘT MÓN NỢ TIỀN DUYÊN**`,
  },

  {
    id: 'nguyet-duc-tai-huynh-de',
    title: 'Nguyệt Đức tại Huynh Đệ',
    sao: ['Nguyệt Đức'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Nguyệt Đức tại Huynh Đệ** — anh chị em **THUẬN HÒA, GIÚP ĐỠ NHAU**.

**Đặc trưng:**
- Anh chị em **THUẬN HÒA**
- Hay **GIÚP ĐỠ LẪN NHAU**
- Biết **YÊU THƯƠNG, ĐÙM BỌC NHAU**`,
  },

  {
    id: 'nguyet-duc-tai-huynh-de-tu-duc',
    title: 'Nguyệt Đức + Tứ Đức tại Huynh Đệ - Hướng đạo tu hành',
    sao: ['Nguyệt Đức'],
    cung: ['Huynh Đệ'],
    ketHop: ['Long Đức', 'Phúc Đức', 'Thiên Đức', 'Nguyệt Đức'],
    doUuTien: 70,
    tomTat: `**Nguyệt Đức + Tứ Đức (Long Đức / Phúc Đức / Thiên Đức / Nguyệt
Đức) đầy đủ tại Huynh Đệ:**
- Anh em có người **HƯỚNG ĐẠO**
- Thích **TU HÀNH, LÀM VIỆC THIỆN** để tích phúc đức`,
  },

  {
    id: 'nguyet-duc-tai-huynh-de-sat-tinh',
    title: 'Nguyệt Đức + Tứ Sát tại Huynh Đệ - Anh em thành gánh nặng',
    sao: ['Nguyệt Đức'],
    cung: ['Huynh Đệ'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 68,
    tomTat: `**Nguyệt Đức + sát tinh (Tứ Sát) tại Huynh Đệ:**
- Anh em lại trở thành **GÁNH NẶNG**
- Muốn giúp nhưng lại thành **LÀM PHIỀN, GÂY LIÊN LỤY**`,
  },
];
