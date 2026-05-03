import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THIẾU DƯƠNG - Hỏa, Thiện Tinh, vòng Thái Tuế (vị trí 2).
 * Tam hợp Thiếu Dương + Thiên Không + Đào Hoa + Kiếp Sát - bùng lên nhanh, nhiều tài nhưng nhiều tật.
 * (TRÁI NGƯỢC với tam hợp Âm Long Trực ôn hòa - đã đề cập tại thieu-am.ts).
 *
 * Đắc địa Dần đến Ngọ (giống Thái Dương). Bên cạnh LUÔN có Thiên Không + Tứ Đức chiếu.
 * Cặp với Thiếu Âm: "mặt trời mặt trăng có đôi" - đã viết tại thieu-am.ts.
 */
export const luanGiai_ThieuDuong: DoanLuanGiai[] = [
  {
    id: 'thieu-duong-tinh-chat-chung',
    title: 'Thiếu Dương - Đặc tính chung',
    sao: ['Thiếu Dương'],
    doUuTien: 32,
    tomTat: `**Thiếu Dương** — phụ tinh **THIỆN TINH** trong **vòng Thái Tuế**, vị trí thứ **2**
(ngay sau Thái Tuế).

**Ngũ hành:** **Hỏa**.

**Hóa khí:** **Thiện Tinh**.

⚡ **Hình tượng:** được ví như **MỘT MẶT TRỜI NHỎ** soi sáng mọi thứ:
- Tố chất **THÔNG MINH**, **NỔI TRỘI**, bộc lộ ra ngoài
- Ai thấy được ánh sáng của Thiếu Dương đều **YÊU THÍCH, HÂM MỘ**
- Mang **đặc tính DƯƠNG** — luôn nổi bật, chủ động

⚡ **Vị thế trong vòng Thái Tuế:**
- **Bên cạnh LUÔN có Thiên Không** (Thái Bạch Kim Tinh) — vị thần **CAN GIÁN, DẠY
  BẢO** Thiếu Dương khi sai đường hoặc **vượt quyền vua** (Thái Tuế)
- Tam hợp với **Đào Hoa** và **Kiếp Sát**

⚡ **Bộ TỨ ĐỨC LUÔN CHIẾU:** Long Đức, Phúc Đức, Thiên Đức, Nguyệt Đức **luôn
chiếu** về cung Thiếu Dương — do quy luật an sao cố định.

**Đặc tính:** **GIA TĂNG PHÚC THỌ, CỨU KHỐN PHÒ NGUY, TIÊU TRỪ NHIỀU BỆNH TẬT,
TAI HỌA**.`,
    chiTiet: `**Bản chất 2 mặt:**

🌟 **Mặt tốt:**
- **NHIỀU TÀI NĂNG**
- Khả năng **CỨU GIẢI** mạnh
- **NHÂN HẬU, từ thiện**
- Có **CƠ DUYÊN GIÁC NGỘ** tâm linh

⚠️ **Mặt xấu:**
- **LẮM TÀI MÀ NHIỀU TẬT**
- Nếu không cẩn thận sẽ **MẮC SAI LẦM LỚN** và phải **HỐI TIẾC** (do Thiên Không
  đi cùng)
- Tính lạc quan quá → tự đẩy bản thân vào **NGHỊCH CẢNH**

⚡ **Đặc trưng tam hợp Thiếu Dương + Thiên Không + Đào Hoa + Kiếp Sát:**
- **BÙNG LÊN NHANH CHÓNG**
- Nổi trội, **ĐA TÀI**
- Nhưng **lắm tật**, nhiều **tai họa** đi kèm

→ TRÁI NGƯỢC hoàn toàn với tam hợp **Âm Long Trực** ôn hòa nhường nhịn.`,
  },

  {
    id: 'thieu-duong-tu-duc-thien-khong-giac-ngo',
    title: 'Thiếu Dương + Tứ Đức + Thiên Không - cơ duyên giác ngộ',
    sao: ['Thiếu Dương'],
    ketHop: ['Thiên Không', 'Long Đức', 'Phúc Đức', 'Thiên Đức', 'Nguyệt Đức'],
    doUuTien: 70,
    tomTat: `🌟 **Thiếu Dương + Thiên Không (LUÔN đi cùng) cùng TỨ ĐỨC chiếu** (Long Đức + Phúc Đức + Thiên Đức + Nguyệt Đức):

🌟 **Cơ duyên TÂM LINH:**
- Người có **NHIỀU CƠ DUYÊN GIÁC NGỘ**
- **Thích tìm hiểu** về **TÂM LINH, PHẬT PHÁP**
- Có thiên hướng **HÀNH THIỆN, TÍCH ĐỨC**, gieo phúc giúp người

→ Đây là cách cục **TÂM LINH ĐẸP** — người Thiếu Dương dù không xuất gia thì
cũng dễ trở thành **CƯ SỸ**, ưa nghiên cứu **đạo lý**.`,
  },

  {
    id: 'thieu-duong-tu-duc-thien-khong-quang-quy',
    title: 'Thiếu Dương + Thiên Không + Tứ Đức + Ân Quang - Dẫn dắt tinh thần',
    sao: ['Thiếu Dương'],
    ketHop: ['Thiên Không', 'Long Đức', 'Phúc Đức', 'Thiên Đức', 'Nguyệt Đức', 'Ân Quang'],
    doUuTien: 65,
    tomTat: `🌟 **Thiếu Dương + Ân Quang:** thiện tâm càng rõ, dễ trở thành **người DẪN DẮT TINH THẦN** cho cộng đồng nhỏ.`,
  },

  {
    id: 'thieu-duong-tu-duc-thien-khong-thien-quy',
    title: 'Thiếu Dương + Thiên Không + Tứ Đức + Thiên Quý - Dẫn dắt tinh thần',
    sao: ['Thiếu Dương'],
    ketHop: ['Thiên Không', 'Long Đức', 'Phúc Đức', 'Thiên Đức', 'Nguyệt Đức', 'Thiên Quý'],
    doUuTien: 65,
    tomTat: `🌟 **Thiếu Dương + Thiên Quý:** thiện tâm càng rõ, dễ trở thành **người DẪN DẮT TINH THẦN** cho cộng đồng nhỏ.`,
  },

  {
    id: 'thieu-duong-tu-duc-thien-khong-thien-quan',
    title: 'Thiếu Dương + Thiên Không + Tứ Đức + Thiên Quan - Dẫn dắt tinh thần',
    sao: ['Thiếu Dương'],
    ketHop: ['Thiên Không', 'Long Đức', 'Phúc Đức', 'Thiên Đức', 'Nguyệt Đức', 'Thiên Quan'],
    doUuTien: 65,
    tomTat: `🌟 **Thiếu Dương + Thiên Quan:** thiện tâm càng rõ, dễ trở thành **người DẪN DẮT TINH THẦN** cho cộng đồng nhỏ.`,
  },

  {
    id: 'thieu-duong-tu-duc-thien-khong-thien-phuc',
    title: 'Thiếu Dương + Thiên Không + Tứ Đức + Thiên Phúc - Dẫn dắt tinh thần',
    sao: ['Thiếu Dương'],
    ketHop: ['Thiên Không', 'Long Đức', 'Phúc Đức', 'Thiên Đức', 'Nguyệt Đức', 'Thiên Phúc'],
    doUuTien: 65,
    tomTat: `🌟 **Thiếu Dương + Thiên Phúc:** thiện tâm càng rõ, dễ trở thành **người DẪN DẮT TINH THẦN** cho cộng đồng nhỏ.`,
  },

  {
    id: 'thieu-duong-sao-giai',
    title: 'Thiếu Dương là sao Giải - tương đương Tứ Đức',
    sao: ['Thiếu Dương'],
    cung: ['Mệnh', 'Tật Ách'],
    doUuTien: 50,
    tomTat: `⚡ **Thiếu Dương là một SAO GIẢI MẠNH:**

🌟 **Khả năng:**
- **GIẢI TRỪ tai nạn, bệnh tật NHỎ**
- Hiệu quả **CỨU GIẢI tương đương Tứ Đức** (Long Đức + Phúc Đức + Thiên Đức +
  Nguyệt Đức)
- Cùng nhóm **GIẢI TINH** với Thiếu Âm, Thiên Giải, Địa Giải, Giải Thần, Thiên
  Quan, Thiên Phúc, Quang Quý, Tả Hữu, Sinh Vượng

⚡ **Tuy nhiên - TỰ NỖ LỰC:**
Bản chất Thiếu Dương là sự **NỖ LỰC**:
- Bản mệnh phải **TỰ MÌNH CHÚ TÂM** vào sức khỏe
- **CHỦ ĐỘNG THAY ĐỔI** thói quen sinh hoạt
- → Mới cải thiện được bệnh trạng`,
  },

  {
    id: 'thieu-duong-sao-giai-dia-khong',
    title: '⚠️ Thiếu Dương + Địa Không - Công dã tràng',
    sao: ['Thiếu Dương'],
    ketHop: ['Địa Không'],
    doUuTien: 45,
    tomTat: `⚠️ **Thiếu Dương + Địa Không:** sự cố gắng như **CÔNG DÃ TRÀNG** — nỗ lực nhiều mà hiệu quả chẳng bao nhiêu.`,
  },

  {
    id: 'thieu-duong-sao-giai-dia-kiep',
    title: '⚠️ Thiếu Dương + Địa Kiếp - Công dã tràng',
    sao: ['Thiếu Dương'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 45,
    tomTat: `⚠️ **Thiếu Dương + Địa Kiếp:** sự cố gắng như **CÔNG DÃ TRÀNG** — nỗ lực nhiều mà hiệu quả chẳng bao nhiêu.`,
  },

  {
    id: 'thieu-duong-dac-dia',
    title: 'Thiếu Dương đắc địa - Dần đến Ngọ',
    sao: ['Thiếu Dương'],
    chi: ['Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ'],
    doUuTien: 70,
    tomTat: `🌟 **Thiếu Dương ĐẮC ĐỊA tại Dần, Mão, Thìn, Tỵ, Ngọ** — theo các vị trí đắc
địa của **Thái Dương**.

⚠️ **CHỈ KHI ĐẮC ĐỊA, sao này MỚI có ý nghĩa**, phát huy hết tác dụng.

⚠️ **Hãm địa:** trở nên **VÔ DỤNG**, cần **đi cùng Thái Dương** để được **bổ
trợ thêm**.

🌟 **Vị trí ĐẸP NHẤT:**
**Thiếu Dương đắc địa + đồng cung Thái Dương** kết hợp với
**Thiếu Âm đắc địa + đồng cung Thái Âm**:
→ Ý nghĩa **CỰC RỰC RỠ** — như **MẶT TRỜI và MẶT TRĂNG** đều **CÓ ĐÔI**, cùng
**TỎA SÁNG SONG SONG**.

🌟 **Nếu chỉ HỘI CHIẾU (không đồng cung):** vẫn **SÁNG LẠN**, nhưng không bằng
vị trí đồng cung đắc địa.`,
  },

  {
    id: 'thieu-duong-thai-duong',
    title: 'Thiếu Dương + Thái Dương - thông minh tột bậc',
    sao: ['Thiếu Dương'],
    ketHop: ['Thái Dương'],
    doUuTien: 78,
    tomTat: `🌟 **Thiếu Dương + Thái Dương** (đồng cung hoặc hội chiếu):

🌟 **Đặc trưng:**
- **THÔNG MINH TỘT BẬC**
- **NỔI DANH**, nhiều người biết đến
- **Danh tiếng vươn xa**

🌟 **Đắc cách đẹp nhất:** Thiếu Dương + **Thái Dương MIẾU VƯỢNG**:
- Thêm **Hóa Quyền / Hóa Khoa / Hóa Lộc + Cát Tinh**: sự nghiệp **VỮNG VÀNG**
- Học vấn cao, danh tiếng **NỔI TRỘI** trong lĩnh vực chuyên môn
- Đặc biệt tốt cho **xuất ngoại, học hành**, mở rộng quan hệ xã hội

→ Đây là cách **TĂNG CƯỜNG** sức mạnh của Thái Dương — Thiếu Dương như "**mặt
trời con**" làm sáng tỏ "**mặt trời mẹ**" Thái Dương.`,
  },

  {
    id: 'thieu-duong-tai-menh',
    title: 'Thiếu Dương tại Mệnh - thông minh nhân hậu',
    sao: ['Thiếu Dương'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `🌟 **Thiếu Dương thủ Mệnh:**

🌟 **Tính cách nổi bật:**
- **TRÍ ÓC THÔNG TUỆ**
- **VUI VẺ, HÒA NHÃ, NHÂN HẬU, TỪ THIỆN**
- Giống như **ÁNH MẶT TRỜI SƯỞI ẤM VẠN VẬT**
- Khí chất **ẤM ÁP**, hay **GIÚP ĐỠ NGƯỜI KHÁC**

🌟 **Đặc trưng:**
- Đi đâu cũng được **NGƯỜI THƯƠNG KẺ MẾN**
- **Dễ tạo thiện cảm** dù chỉ mới gặp gỡ
- **CHĂM CHỈ, KỶ LUẬT CAO**, suy nghĩ **TÍCH CỰC**
- Tựa như **mặt trời nhỏ** tỏa sáng đến cho mọi người
- Được **NHIỀU NGƯỜI MẾN MỘ, QUÝ MẾN**

⚠️ **Điểm yếu:**
- Đôi khi vì **LẠC QUAN QUÁ MỨC** mà tự **đẩy bản thân vào NGHỊCH CẢNH**
- Nhờ sự **SÁNG SUỐT và NGHỊ LỰC**, thường tìm ra **xoay chuyển cục diện vào
  PHÚT CHÓT**

🌟 **Ý nghĩa nhân hậu** tương tự ý nghĩa của **Tứ Đức** (do Thiếu Dương luôn
có Tứ Đức chiếu về).`,
  },

  {
    id: 'thieu-duong-dao-hoa',
    title: 'Thiếu Dương + Đào Hoa - đa đoan duyên tình',
    sao: ['Thiếu Dương'],
    ketHop: ['Đào Hoa'],
    doUuTien: 65,
    tomTat: `⚠️ **Thiếu Dương + Đào Hoa đồng cung:**

⚠️ **Đặc trưng:**
- **NHIỀU NGƯỜI KHÁC GIỚI MẾN MỘ**
- **NHIỀU DUYÊN TÌNH DỞ DANG**
- **Đa đoan duyên tình** — yêu nhiều, dở dang nhiều

→ Vì Thiếu Dương vốn đã thu hút (mặt trời nhỏ) → khi cộng thêm Đào Hoa → **đào
hoa CỘNG HƯỞNG**, mất kiểm soát.

⚠️ Nếu thuộc tam hợp Thiếu Dương + Thiên Không + Đào Hoa + Kiếp Sát: tài hoa
nhưng **LẮM TẬT** — duyên tình thường có **kết cục KHÔNG MAY**.`,
  },

  {
    id: 'thieu-duong-tai-phu-mau',
    title: 'Thiếu Dương tại Phụ Mẫu',
    sao: ['Thiếu Dương'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `🌟 **Thiếu Dương tại Phụ Mẫu:**
- Cha mẹ **KHÔN NGOAN, NHÂN HẬU, TỪ THIỆN**
- **CÓ TAY NGHỀ KHÉO**
- Sống thiện, biết **đối nhân xử thế** → được mọi người **QUÝ MẾN**`,
  },

  {
    id: 'thieu-duong-tai-phu-mau-dao-hoa',
    title: 'Thiếu Dương + Đào Hoa tại Phụ Mẫu - Cha mẹ nghệ thuật',
    sao: ['Thiếu Dương'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Đào Hoa'],
    doUuTien: 70,
    tomTat: `🌟 **Thiếu Dương + Đào Hoa tại Phụ Mẫu:** một trong hai người làm về **NGHỆ THUẬT, THẨM MỸ, KIẾN TRÚC**, **DANH TIẾNG LẪY LỪNG**, được nhiều người yêu mến, hâm mộ. Cha mẹ có người **ĐÀO HOA**, **NỔI TIẾNG bên ngoài**.`,
  },

  {
    id: 'thieu-duong-tai-phu-mau-hong-loan',
    title: 'Thiếu Dương + Hồng Loan tại Phụ Mẫu - Cha mẹ nghệ thuật',
    sao: ['Thiếu Dương'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Hồng Loan'],
    doUuTien: 70,
    tomTat: `🌟 **Thiếu Dương + Hồng Loan tại Phụ Mẫu:** một trong hai người làm về **NGHỆ THUẬT, THẨM MỸ, KIẾN TRÚC**, **DANH TIẾNG LẪY LỪNG**, được nhiều người yêu mến, hâm mộ. Cha mẹ có người **ĐÀO HOA**, **NỔI TIẾNG bên ngoài**.`,
  },

  {
    id: 'thieu-duong-tai-phu-mau-thien-khong',
    title: 'Thiếu Dương + Thiên Không tại Phụ Mẫu - Cha mẹ duyên giác ngộ',
    sao: ['Thiếu Dương'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Thiên Không'],
    doUuTien: 70,
    tomTat: `🌟 **Thiếu Dương + Thiên Không tại Phụ Mẫu:** cha mẹ có **DUYÊN GIÁC NGỘ** về **TÂM LINH, PHẬT PHÁP**. Thích **HÀNH THIỆN TÍCH ĐỨC**, gieo phúc giúp người.`,
  },

  {
    id: 'thieu-duong-tai-phu-mau-an-quang',
    title: 'Thiếu Dương + Ân Quang tại Phụ Mẫu - Cha mẹ duyên giác ngộ',
    sao: ['Thiếu Dương'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Ân Quang'],
    doUuTien: 70,
    tomTat: `🌟 **Thiếu Dương + Ân Quang tại Phụ Mẫu:** cha mẹ có **DUYÊN GIÁC NGỘ** về **TÂM LINH, PHẬT PHÁP**. Thích **HÀNH THIỆN TÍCH ĐỨC**, gieo phúc giúp người.`,
  },

  {
    id: 'thieu-duong-tai-phu-mau-thien-quy',
    title: 'Thiếu Dương + Thiên Quý tại Phụ Mẫu - Cha mẹ duyên giác ngộ',
    sao: ['Thiếu Dương'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Thiên Quý'],
    doUuTien: 70,
    tomTat: `🌟 **Thiếu Dương + Thiên Quý tại Phụ Mẫu:** cha mẹ có **DUYÊN GIÁC NGỘ** về **TÂM LINH, PHẬT PHÁP**. Thích **HÀNH THIỆN TÍCH ĐỨC**, gieo phúc giúp người.`,
  },

  {
    id: 'thieu-duong-tai-phu-mau-hoa-tinh',
    title: '⚠️ Thiếu Dương + Hỏa Tinh tại Phụ Mẫu - Quan hệ xa cách',
    sao: ['Thiếu Dương'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Hỏa Tinh'],
    doUuTien: 70,
    tomTat: `⚠️ **Thiếu Dương + Hỏa Tinh tại Phụ Mẫu:** mối quan hệ trở nên **XA CÁCH**, cha mẹ có phần **VÔ TÂM** với mình.`,
  },

  {
    id: 'thieu-duong-tai-phu-mau-linh-tinh',
    title: '⚠️ Thiếu Dương + Linh Tinh tại Phụ Mẫu - Quan hệ xa cách',
    sao: ['Thiếu Dương'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Linh Tinh'],
    doUuTien: 70,
    tomTat: `⚠️ **Thiếu Dương + Linh Tinh tại Phụ Mẫu:** mối quan hệ trở nên **XA CÁCH**, cha mẹ có phần **VÔ TÂM** với mình.`,
  },

  {
    id: 'thieu-duong-tai-phuc-duc',
    title: 'Thiếu Dương tại Phúc Đức',
    sao: ['Thiếu Dương'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `🌟 **Thiếu Dương tại Phúc Đức:** phúc phần **VỮNG CHÃI**:
- Trong dòng họ **PHÁT MỒ PHÁT MẢ NAM NHÂN**
- Có **người làm to, có chức quyền**

⚠️ **Đặc điểm THIÊN KHÔNG đi cùng:**
- Dù phúc đẹp nhưng đương số **KHÔNG ĐƯỢC HƯỞNG NHIỀU may mắn tổ tiên** để lại
- Phải **TỰ TÔN BỒI, XÂY ĐẮP THÊM**
- Người thường **LY HƯƠNG TỔ NGHIỆP**, **CƯỚI VỢ CƯỚI CHỒNG NƠI PHƯƠNG XA**`,
  },

  {
    id: 'thieu-duong-tai-phuc-duc-thien-dong-hoa-ky',
    title: '⚠️ Thiếu Dương + Thiên Đồng + Hóa Kỵ tại Phúc Đức - Sướng trước khổ sau',
    sao: ['Thiếu Dương'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Đồng', 'Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `⚠️ **Thiếu Dương + Thiên Đồng + Hóa Kỵ tại Phúc Đức:** dễ rơi vào cảnh "**SƯỚNG TRƯỚC KHỔ SAU**" — một lần phát phúc lớn nhưng về sau lại gặp **NHIỀU XUI RỦI**.`,
  },

  {
    id: 'thieu-duong-tai-phuc-duc-thien-dong-thien-hinh',
    title: '⚠️ Thiếu Dương + Thiên Đồng + Thiên Hình tại Phúc Đức - Sướng trước khổ sau',
    sao: ['Thiếu Dương'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Đồng', 'Thiên Hình'],
    doUuTien: 70,
    tomTat: `⚠️ **Thiếu Dương + Thiên Đồng + Thiên Hình tại Phúc Đức:** dễ rơi vào cảnh "**SƯỚNG TRƯỚC KHỔ SAU**" — một lần phát phúc lớn nhưng về sau lại gặp **NHIỀU XUI RỦI**.`,
  },

  {
    id: 'thieu-duong-tai-phuc-duc-thien-luong-hoa-ky',
    title: '⚠️ Thiếu Dương + Thiên Lương + Hóa Kỵ tại Phúc Đức - Sướng trước khổ sau',
    sao: ['Thiếu Dương'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Lương', 'Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `⚠️ **Thiếu Dương + Thiên Lương + Hóa Kỵ tại Phúc Đức:** dễ rơi vào cảnh "**SƯỚNG TRƯỚC KHỔ SAU**" — một lần phát phúc lớn nhưng về sau lại gặp **NHIỀU XUI RỦI**.`,
  },

  {
    id: 'thieu-duong-tai-phuc-duc-thien-luong-thien-hinh',
    title: '⚠️ Thiếu Dương + Thiên Lương + Thiên Hình tại Phúc Đức - Sướng trước khổ sau',
    sao: ['Thiếu Dương'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Lương', 'Thiên Hình'],
    doUuTien: 70,
    tomTat: `⚠️ **Thiếu Dương + Thiên Lương + Thiên Hình tại Phúc Đức:** dễ rơi vào cảnh "**SƯỚNG TRƯỚC KHỔ SAU**" — một lần phát phúc lớn nhưng về sau lại gặp **NHIỀU XUI RỦI**.`,
  },

  {
    id: 'thieu-duong-tai-phuc-duc-thien-viet-hoa-ky',
    title: '⚠️ Thiếu Dương + Thiên Việt + Hóa Kỵ tại Phúc Đức - Sướng trước khổ sau',
    sao: ['Thiếu Dương'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Việt', 'Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `⚠️ **Thiếu Dương + Thiên Việt + Hóa Kỵ tại Phúc Đức:** dễ rơi vào cảnh "**SƯỚNG TRƯỚC KHỔ SAU**" — một lần phát phúc lớn nhưng về sau lại gặp **NHIỀU XUI RỦI**.`,
  },

  {
    id: 'thieu-duong-tai-phuc-duc-thien-viet-thien-hinh',
    title: '⚠️ Thiếu Dương + Thiên Việt + Thiên Hình tại Phúc Đức - Sướng trước khổ sau',
    sao: ['Thiếu Dương'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Việt', 'Thiên Hình'],
    doUuTien: 70,
    tomTat: `⚠️ **Thiếu Dương + Thiên Việt + Thiên Hình tại Phúc Đức:** dễ rơi vào cảnh "**SƯỚNG TRƯỚC KHỔ SAU**" — một lần phát phúc lớn nhưng về sau lại gặp **NHIỀU XUI RỦI**.`,
  },

  {
    id: 'thieu-duong-tai-phuc-duc-an-quang',
    title: 'Thiếu Dương + Ân Quang tại Phúc Đức - Dòng họ hiền lương',
    sao: ['Thiếu Dương'],
    cung: ['Phúc Đức'],
    ketHop: ['Ân Quang'],
    doUuTien: 70,
    tomTat: `🌟 **Thiếu Dương + Ân Quang tại Phúc Đức:** dòng họ nhiều người **HIỀN LƯƠNG**, có **DUYÊN GIÁC NGỘ** và **THỜ PHẬT**.`,
  },

  {
    id: 'thieu-duong-tai-phuc-duc-thien-quy-phat',
    title: 'Thiếu Dương + Thiên Quý tại Phúc Đức - Dòng họ hiền lương',
    sao: ['Thiếu Dương'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Quý'],
    doUuTien: 70,
    tomTat: `🌟 **Thiếu Dương + Thiên Quý tại Phúc Đức:** dòng họ nhiều người **HIỀN LƯƠNG**, có **DUYÊN GIÁC NGỘ** và **THỜ PHẬT**.`,
  },

  {
    id: 'thieu-duong-tai-phuc-duc-ta-phu-thai-duong-sang',
    title: 'Thiếu Dương + Tả Phù + Thái Dương sáng tại Phúc Đức - Họ hàng vượng phát',
    sao: ['Thiếu Dương'],
    cung: ['Phúc Đức'],
    ketHop: ['Tả Phù', 'Thái Dương'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 70,
    tomTat: `🌟 **Thiếu Dương + Tả Phù + Thái Dương sáng tại Phúc Đức:** thời điểm đương số ra đời cũng là lúc **HỌ HÀNG VƯỢNG PHÁT** — phúc phần gia đình **HƯNG THỊNH**, con cháu dựng vợ gả chồng ổn định.`,
  },

  {
    id: 'thieu-duong-tai-phuc-duc-huu-bat-thai-duong-sang',
    title: 'Thiếu Dương + Hữu Bật + Thái Dương sáng tại Phúc Đức - Họ hàng vượng phát',
    sao: ['Thiếu Dương'],
    cung: ['Phúc Đức'],
    ketHop: ['Hữu Bật', 'Thái Dương'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 70,
    tomTat: `🌟 **Thiếu Dương + Hữu Bật + Thái Dương sáng tại Phúc Đức:** thời điểm đương số ra đời cũng là lúc **HỌ HÀNG VƯỢNG PHÁT** — phúc phần gia đình **HƯNG THỊNH**, con cháu dựng vợ gả chồng ổn định.`,
  },

  {
    id: 'thieu-duong-tai-phuc-duc-thien-khoi-thai-duong-sang',
    title: 'Thiếu Dương + Thiên Khôi + Thái Dương sáng tại Phúc Đức - Họ hàng vượng phát',
    sao: ['Thiếu Dương'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Khôi', 'Thái Dương'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 70,
    tomTat: `🌟 **Thiếu Dương + Thiên Khôi + Thái Dương sáng tại Phúc Đức:** thời điểm đương số ra đời cũng là lúc **HỌ HÀNG VƯỢNG PHÁT** — phúc phần gia đình **HƯNG THỊNH**, con cháu dựng vợ gả chồng ổn định.`,
  },

  {
    id: 'thieu-duong-tai-phuc-duc-thien-viet-thai-duong-sang',
    title: 'Thiếu Dương + Thiên Việt + Thái Dương sáng tại Phúc Đức - Họ hàng vượng phát',
    sao: ['Thiếu Dương'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Việt', 'Thái Dương'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 70,
    tomTat: `🌟 **Thiếu Dương + Thiên Việt + Thái Dương sáng tại Phúc Đức:** thời điểm đương số ra đời cũng là lúc **HỌ HÀNG VƯỢNG PHÁT** — phúc phần gia đình **HƯNG THỊNH**, con cháu dựng vợ gả chồng ổn định.`,
  },

  {
    id: 'thieu-duong-tai-dien-trach',
    title: 'Thiếu Dương tại Điền Trạch',
    sao: ['Thiếu Dương'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `🌟 **Thiếu Dương tại Điền Trạch:**
- Nhà cửa **THUẬN LỢI**
- Đi đâu cũng được **GIÚP ĐỠ về NHÀ CỬA**, nơi ăn chốn ở
- **KHÔNG PHẢI LO LẮNG** về nơi ăn chốn ở

⚠️ **Mặt vất vả:**
Thiếu Dương cũng đem lại không ít **VẤT VẢ**, thường phải "**TAY TRẮNG DỰNG CƠ
ĐỒ**".`,
  },

  {
    id: 'thieu-duong-tai-dien-trach-dao-hoa',
    title: 'Thiếu Dương + Đào Hoa tại Điền Trạch - Sớm có nhà cửa',
    sao: ['Thiếu Dương'],
    cung: ['Điền Trạch'],
    ketHop: ['Đào Hoa'],
    doUuTien: 70,
    tomTat: `🌟 **Thiếu Dương + Đào Hoa tại Điền Trạch:** **SỚM CÓ NHÀ CÓ CỬA** từ khi còn trẻ.`,
  },

  {
    id: 'thieu-duong-tai-dien-trach-tu-vi',
    title: 'Thiếu Dương + Tử Vi tại Điền Trạch - Rước Phật về thờ',
    sao: ['Thiếu Dương'],
    cung: ['Điền Trạch'],
    ketHop: ['Tử Vi'],
    doUuTien: 70,
    tomTat: `🌟 **Thiếu Dương + Tử Vi tại Điền Trạch:** nhà dễ **RƯỚC PHẬT VỀ THỜ**.`,
  },

  {
    id: 'thieu-duong-tai-dien-trach-thien-phu',
    title: 'Thiếu Dương + Thiên Phủ tại Điền Trạch - Rước Phật về thờ',
    sao: ['Thiếu Dương'],
    cung: ['Điền Trạch'],
    ketHop: ['Thiên Phủ'],
    doUuTien: 70,
    tomTat: `🌟 **Thiếu Dương + Thiên Phủ tại Điền Trạch:** nhà dễ **RƯỚC PHẬT VỀ THỜ**.`,
  },

  {
    id: 'thieu-duong-tai-dien-trach-an-quang',
    title: 'Thiếu Dương + Ân Quang tại Điền Trạch - Rước Phật về thờ',
    sao: ['Thiếu Dương'],
    cung: ['Điền Trạch'],
    ketHop: ['Ân Quang'],
    doUuTien: 70,
    tomTat: `🌟 **Thiếu Dương + Ân Quang tại Điền Trạch:** nhà dễ **RƯỚC PHẬT VỀ THỜ**.`,
  },

  {
    id: 'thieu-duong-tai-dien-trach-thien-quy',
    title: 'Thiếu Dương + Thiên Quý tại Điền Trạch - Rước Phật về thờ',
    sao: ['Thiếu Dương'],
    cung: ['Điền Trạch'],
    ketHop: ['Thiên Quý'],
    doUuTien: 70,
    tomTat: `🌟 **Thiếu Dương + Thiên Quý tại Điền Trạch:** nhà dễ **RƯỚC PHẬT VỀ THỜ**.`,
  },

  {
    id: 'thieu-duong-tai-dien-trach-thien-khoi',
    title: 'Thiếu Dương + Thiên Khôi tại Điền Trạch - Điền trạch dồi dào',
    sao: ['Thiếu Dương'],
    cung: ['Điền Trạch'],
    ketHop: ['Thiên Khôi'],
    doUuTien: 70,
    tomTat: `🌟 **Thiếu Dương + Thiên Khôi tại Điền Trạch:** càng **ỨNG NGHIỆM** — điền trạch dồi dào.`,
  },

  {
    id: 'thieu-duong-tai-dien-trach-thien-viet',
    title: 'Thiếu Dương + Thiên Việt tại Điền Trạch - Điền trạch dồi dào',
    sao: ['Thiếu Dương'],
    cung: ['Điền Trạch'],
    ketHop: ['Thiên Việt'],
    doUuTien: 70,
    tomTat: `🌟 **Thiếu Dương + Thiên Việt tại Điền Trạch:** càng **ỨNG NGHIỆM** — điền trạch dồi dào.`,
  },

  {
    id: 'thieu-duong-tai-dien-trach-thai-duong-sang',
    title: 'Thiếu Dương + Thái Dương sáng tại Điền Trạch - Điền trạch dồi dào',
    sao: ['Thiếu Dương'],
    cung: ['Điền Trạch'],
    ketHop: ['Thái Dương'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 70,
    tomTat: `🌟 **Thiếu Dương + Thái Dương miếu vượng tại Điền Trạch:** càng **ỨNG NGHIỆM** — điền trạch dồi dào.`,
  },

  {
    id: 'thieu-duong-tai-dien-trach-hoa-loc',
    title: 'Thiếu Dương + Hóa Lộc tại Điền Trạch - Trung vận an nhàn',
    sao: ['Thiếu Dương'],
    cung: ['Điền Trạch'],
    ketHop: ['Hóa Lộc'],
    doUuTien: 70,
    tomTat: `🌟 **Thiếu Dương + Hóa Lộc hội chiếu tại Điền Trạch:** từ **TRUNG VẬN trở đi** mới gây dựng được cơ ngơi **VỮNG VÀNG**, hậu vận **AN NHÀN**.`,
  },

  {
    id: 'thieu-duong-tai-dien-trach-loc-ton',
    title: 'Thiếu Dương + Lộc Tồn tại Điền Trạch - Trung vận an nhàn',
    sao: ['Thiếu Dương'],
    cung: ['Điền Trạch'],
    ketHop: ['Lộc Tồn'],
    doUuTien: 70,
    tomTat: `🌟 **Thiếu Dương + Lộc Tồn hội chiếu tại Điền Trạch:** từ **TRUNG VẬN trở đi** mới gây dựng được cơ ngơi **VỮNG VÀNG**, hậu vận **AN NHÀN**.`,
  },

  {
    id: 'thieu-duong-tai-quan-loc',
    title: 'Thiếu Dương tại Quan Lộc - công danh sáng lạn',
    sao: ['Thiếu Dương'],
    cung: ['Quan Lộc'],
    doUuTien: 80,
    tomTat: `🌟 **Thiếu Dương tại Quan Lộc:**
- **SỰ NGHIỆP, CÔNG DANH SÁNG LẠN**
- **HAY GẶP MAY**
- Có **LƯƠNG TÂM nghề nghiệp**
- Sự nghiệp dễ **PHẤT** nhờ **danh tiếng**
- Đi làm được **NHIỀU NGƯỜI MẾN MỘ**
- Lời nói có **SỨC LAN TỎA** → công việc hanh thông

🌟 **Yếu tố LAN TỎA:** công việc có yếu tố **PHỔ CẬP RỘNG, LAN TỎA LỚN** — nhiều
người **QUÝ MẾN, HÂM MỘ**.`,
  },

  {
    id: 'thieu-duong-tai-quan-loc-dao-hoa',
    title: 'Thiếu Dương + Đào Hoa tại Quan Lộc - Nghề thẩm mỹ',
    sao: ['Thiếu Dương'],
    cung: ['Quan Lộc'],
    ketHop: ['Đào Hoa'],
    doUuTien: 75,
    tomTat: `🌟 **Thiếu Dương + Đào Hoa tại Quan Lộc:** dễ làm nghề về **LÀM ĐẸP, KIẾN TRÚC, THẨM MỸ**, thiết kế thời trang, MC, người nổi tiếng.`,
  },

  {
    id: 'thieu-duong-tai-quan-loc-hong-loan',
    title: 'Thiếu Dương + Hồng Loan tại Quan Lộc - Nghề thẩm mỹ',
    sao: ['Thiếu Dương'],
    cung: ['Quan Lộc'],
    ketHop: ['Hồng Loan'],
    doUuTien: 75,
    tomTat: `🌟 **Thiếu Dương + Hồng Loan tại Quan Lộc:** dễ làm nghề về **LÀM ĐẸP, KIẾN TRÚC, THẨM MỸ**, thiết kế thời trang, MC, người nổi tiếng.`,
  },

  {
    id: 'thieu-duong-tai-quan-loc-thien-dong',
    title: 'Thiếu Dương + Thiên Đồng tại Quan Lộc - Nghề thẩm mỹ',
    sao: ['Thiếu Dương'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Đồng'],
    doUuTien: 75,
    tomTat: `🌟 **Thiếu Dương + Thiên Đồng tại Quan Lộc:** dễ làm nghề về **LÀM ĐẸP, KIẾN TRÚC, THẨM MỸ**, thiết kế thời trang, MC, người nổi tiếng.`,
  },

  {
    id: 'thieu-duong-tai-quan-loc-thai-duong-sang-quyen',
    title: 'Thiếu Dương + Thái Dương sáng + Hóa Quyền tại Quan Lộc - Đắc cách',
    sao: ['Thiếu Dương'],
    cung: ['Quan Lộc'],
    ketHop: ['Thái Dương', 'Hóa Quyền'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 75,
    tomTat: `🌟 **Thiếu Dương + Thái Dương miếu vượng + Hóa Quyền tại Quan Lộc:** ĐẮC CÁCH — sự nghiệp **VỮNG VÀNG**.`,
  },

  {
    id: 'thieu-duong-tai-quan-loc-thai-duong-sang-khoa',
    title: 'Thiếu Dương + Thái Dương sáng + Hóa Khoa tại Quan Lộc - Đắc cách',
    sao: ['Thiếu Dương'],
    cung: ['Quan Lộc'],
    ketHop: ['Thái Dương', 'Hóa Khoa'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 75,
    tomTat: `🌟 **Thiếu Dương + Thái Dương miếu vượng + Hóa Khoa tại Quan Lộc:** ĐẮC CÁCH — sự nghiệp **VỮNG VÀNG**.`,
  },

  {
    id: 'thieu-duong-tai-quan-loc-thai-duong-sang-loc',
    title: 'Thiếu Dương + Thái Dương sáng + Hóa Lộc tại Quan Lộc - Đắc cách',
    sao: ['Thiếu Dương'],
    cung: ['Quan Lộc'],
    ketHop: ['Thái Dương', 'Hóa Lộc'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 75,
    tomTat: `🌟 **Thiếu Dương + Thái Dương miếu vượng + Hóa Lộc tại Quan Lộc:** ĐẮC CÁCH — sự nghiệp **VỮNG VÀNG**.`,
  },

  {
    id: 'thieu-duong-tai-quan-loc-kiep-sat',
    title: '⚠️ Thiếu Dương + Kiếp Sát tại Quan Lộc - Công danh trắc trở',
    sao: ['Thiếu Dương'],
    cung: ['Quan Lộc'],
    ketHop: ['Kiếp Sát'],
    doUuTien: 75,
    tomTat: `⚠️ **Thiếu Dương + Kiếp Sát tại Quan Lộc:** Công danh **TRẮC TRỞ** — dễ lâm vào cảnh "**VẠN KIẾP BẤT PHỤC**". Sự nghiệp nhiều phen **THĂNG TRẦM**, "**nay thịnh mai suy**".`,
  },

  {
    id: 'thieu-duong-tai-quan-loc-hoa-ky',
    title: '⚠️ Thiếu Dương + Hóa Kỵ tại Quan Lộc - Công danh trắc trở',
    sao: ['Thiếu Dương'],
    cung: ['Quan Lộc'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 75,
    tomTat: `⚠️ **Thiếu Dương + Hóa Kỵ tại Quan Lộc:** Công danh **TRẮC TRỞ** — dễ lâm vào cảnh "**VẠN KIẾP BẤT PHỤC**". Sự nghiệp nhiều phen **THĂNG TRẦM**, "**nay thịnh mai suy**".`,
  },

  {
    id: 'thieu-duong-tai-quan-loc-thien-hinh',
    title: '⚠️ Thiếu Dương + Thiên Hình tại Quan Lộc - Công danh trắc trở',
    sao: ['Thiếu Dương'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Hình'],
    doUuTien: 75,
    tomTat: `⚠️ **Thiếu Dương + Thiên Hình tại Quan Lộc:** Công danh **TRẮC TRỞ** — dễ lâm vào cảnh "**VẠN KIẾP BẤT PHỤC**". Sự nghiệp nhiều phen **THĂNG TRẦM**, "**nay thịnh mai suy**".`,
  },

  {
    id: 'thieu-duong-tai-no-boc',
    title: 'Thiếu Dương tại Nô Bộc',
    sao: ['Thiếu Dương'],
    cung: ['Nô Bộc'],
    doUuTien: 72,
    tomTat: `🌟 **Thiếu Dương tại Nô Bộc:**
- Bè bạn, người làm, người giúp việc **GIỎI GIANG, NHÂN HẬU**
- Nhiều người là **NAM NHÂN**, **NỔI TIẾNG**
- Bạn bè **CHĂM CHỈ, BIẾT LO TOAN**`,
  },

  {
    id: 'thieu-duong-tai-no-boc-dao-hoa',
    title: '⚠️ Thiếu Dương + Đào Hoa tại Nô Bộc - Tình nhân bên ngoài',
    sao: ['Thiếu Dương'],
    cung: ['Nô Bộc'],
    ketHop: ['Đào Hoa'],
    doUuTien: 67,
    tomTat: `⚠️ **Thiếu Dương + Đào Hoa tại Nô Bộc:** người dễ có **TÌNH NHÂN BÊN NGOÀI**, **HÔN NHÂN dễ DANG DỞ NHIỀU LẦN**.`,
  },

  {
    id: 'thieu-duong-tai-no-boc-kiep-sat',
    title: '⚠️ Thiếu Dương + Kiếp Sát tại Nô Bộc - Bạn bè phá hoại',
    sao: ['Thiếu Dương'],
    cung: ['Nô Bộc'],
    ketHop: ['Kiếp Sát'],
    doUuTien: 67,
    tomTat: `⚠️ **Thiếu Dương + Kiếp Sát tại Nô Bộc:** Bạn bè dễ rơi vào cảnh "**NHIỆT TÌNH CỘNG NGU DỐT THÀNH PHÁ HOẠI**". Sự **GIÚP ĐỠ** từ người khác chẳng khác nào "**GẬY ÔNG ĐẬP LƯNG ÔNG**". Lợi chưa thấy mà **HẠI ĐÃ CHẤT CHỒNG**.`,
  },

  {
    id: 'thieu-duong-tai-no-boc-hoa-ky',
    title: '⚠️ Thiếu Dương + Hóa Kỵ tại Nô Bộc - Bạn bè phá hoại',
    sao: ['Thiếu Dương'],
    cung: ['Nô Bộc'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 67,
    tomTat: `⚠️ **Thiếu Dương + Hóa Kỵ tại Nô Bộc:** Bạn bè dễ rơi vào cảnh "**NHIỆT TÌNH CỘNG NGU DỐT THÀNH PHÁ HOẠI**". Sự **GIÚP ĐỠ** từ người khác chẳng khác nào "**GẬY ÔNG ĐẬP LƯNG ÔNG**". Lợi chưa thấy mà **HẠI ĐÃ CHẤT CHỒNG**.`,
  },

  {
    id: 'thieu-duong-tai-no-boc-thien-hinh',
    title: '⚠️ Thiếu Dương + Thiên Hình tại Nô Bộc - Bạn bè phá hoại',
    sao: ['Thiếu Dương'],
    cung: ['Nô Bộc'],
    ketHop: ['Thiên Hình'],
    doUuTien: 67,
    tomTat: `⚠️ **Thiếu Dương + Thiên Hình tại Nô Bộc:** Bạn bè dễ rơi vào cảnh "**NHIỆT TÌNH CỘNG NGU DỐT THÀNH PHÁ HOẠI**". Sự **GIÚP ĐỠ** từ người khác chẳng khác nào "**GẬY ÔNG ĐẬP LƯNG ÔNG**". Lợi chưa thấy mà **HẠI ĐÃ CHẤT CHỒNG**.`,
  },

  {
    id: 'thieu-duong-tai-thien-di',
    title: 'Thiếu Dương tại Thiên Di',
    sao: ['Thiếu Dương'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `🌟 **Thiếu Dương tại Thiên Di:**
- Thiếu Dương mang **TÍNH ĐỘNG** (giống Thái Dương) → **THÚC ĐẨY ĐI XA**, hoạt
  động bên ngoài nhiều
- Ra ngoài **KHIÊM TỐN**, hay **GẶP QUÝ NHÂN GIÚP ĐỠ**
- Cách cư xử **CỞI MỞ, LẠC QUAN** → dễ **TẠO CẢM TÌNH**
- Người ra ngoài **HAY ĐI XA**`,
  },

  {
    id: 'thieu-duong-tai-thien-di-dao-hoa',
    title: 'Thiếu Dương + Đào Hoa tại Thiên Di - Ra ngoài nổi tiếng',
    sao: ['Thiếu Dương'],
    cung: ['Thiên Di'],
    ketHop: ['Đào Hoa'],
    doUuTien: 70,
    tomTat: `🌟 **Thiếu Dương + Đào Hoa tại Thiên Di:** ra ngoài **NỔI TIẾNG**, nhiều người khác giới **HÂM MỘ**.`,
  },

  {
    id: 'thieu-duong-tai-thien-di-hong-loan',
    title: 'Thiếu Dương + Hồng Loan tại Thiên Di - Ra ngoài nổi tiếng',
    sao: ['Thiếu Dương'],
    cung: ['Thiên Di'],
    ketHop: ['Hồng Loan'],
    doUuTien: 70,
    tomTat: `🌟 **Thiếu Dương + Hồng Loan tại Thiên Di:** ra ngoài **NỔI TIẾNG**, nhiều người khác giới **HÂM MỘ**.`,
  },

  {
    id: 'thieu-duong-tai-thien-di-thai-duong-sang-loc',
    title: 'Thiếu Dương + Thái Dương sáng + Hóa Lộc tại Thiên Di - Hổ mọc thêm cánh',
    sao: ['Thiếu Dương'],
    cung: ['Thiên Di'],
    ketHop: ['Thái Dương', 'Hóa Lộc'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 70,
    tomTat: `🌟 **Thiếu Dương + Thái Dương miếu vượng + Hóa Lộc tại Thiên Di:** như "**HỔ MỌC THÊM CÁNH**" — **HỌC VẤN CAO**, **DANH TIẾNG NỔI TRỘI** trong lĩnh vực chuyên môn. Tốt cho **XUẤT NGOẠI, HỌC HÀNH**, mở rộng quan hệ xã hội.`,
  },

  {
    id: 'thieu-duong-tai-thien-di-thai-duong-sang-khoa',
    title: 'Thiếu Dương + Thái Dương sáng + Hóa Khoa tại Thiên Di - Hổ mọc thêm cánh',
    sao: ['Thiếu Dương'],
    cung: ['Thiên Di'],
    ketHop: ['Thái Dương', 'Hóa Khoa'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 70,
    tomTat: `🌟 **Thiếu Dương + Thái Dương miếu vượng + Hóa Khoa tại Thiên Di:** như "**HỔ MỌC THÊM CÁNH**" — **HỌC VẤN CAO**, **DANH TIẾNG NỔI TRỘI** trong lĩnh vực chuyên môn. Tốt cho **XUẤT NGOẠI, HỌC HÀNH**, mở rộng quan hệ xã hội.`,
  },

  {
    id: 'thieu-duong-tai-thien-di-thai-duong-sang-quyen',
    title: 'Thiếu Dương + Thái Dương sáng + Hóa Quyền tại Thiên Di - Hổ mọc thêm cánh',
    sao: ['Thiếu Dương'],
    cung: ['Thiên Di'],
    ketHop: ['Thái Dương', 'Hóa Quyền'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 70,
    tomTat: `🌟 **Thiếu Dương + Thái Dương miếu vượng + Hóa Quyền tại Thiên Di:** như "**HỔ MỌC THÊM CÁNH**" — **HỌC VẤN CAO**, **DANH TIẾNG NỔI TRỘI** trong lĩnh vực chuyên môn. Tốt cho **XUẤT NGOẠI, HỌC HÀNH**, mở rộng quan hệ xã hội.`,
  },

  {
    id: 'thieu-duong-tai-tat-ach',
    title: 'Thiếu Dương tại Tật Ách - mắt trái, thần kinh',
    sao: ['Thiếu Dương'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `🌟 **Thiếu Dương tại Tật Ách:**
- Có khả năng **HÓA GIẢI** tai nạn và bệnh tật **NHỎ**
- Hiệu quả **CỨU GIẢI tương đương Tứ Đức**

⚠️ **Bệnh có thể gặp:**
- **BỆNH MẮT** — đặc biệt **MẮT TRÁI**
- **BỆNH THẦN KINH** (giống Thái Dương)

⚠️ **Bản chất tự nỗ lực:**
- Bản mệnh phải **TỰ MÌNH CHÚ TÂM** vào sức khỏe
- **CHỦ ĐỘNG THAY ĐỔI** thói quen sinh hoạt`,
  },

  {
    id: 'thieu-duong-tai-tat-ach-khong-kiep',
    title: '⚠️ Thiếu Dương + Địa Không + Địa Kiếp tại Tật Ách - công dã tràng',
    sao: ['Thiếu Dương'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    cung: ['Tật Ách'],
    doUuTien: 73,
    tomTat: `⚠️ **Thiếu Dương + Địa Không + Địa Kiếp tại Tật Ách:** sự cố gắng
như **CÔNG DÃ TRÀNG** — nỗ lực nhiều mà hiệu quả **chẳng bao nhiêu**.`,
  },

  {
    id: 'thieu-duong-thieu-am-hoa-khoa',
    title: 'Thiếu Dương + Thiếu Âm + Hóa Khoa - cứu khốn phò nguy',
    sao: ['Thiếu Dương', 'Thiếu Âm'],
    ketHop: ['Hóa Khoa'],
    doUuTien: 78,
    tomTat: `🌟 **Thiếu Dương + Thiếu Âm + Hóa Khoa** (đồng cung hoặc xung chiếu):

→ Bộ sao **GIA TĂNG PHÚC THỌ**, **CỨU KHỐN PHÒ NGUY**, **GIẢI TRỪ NHIỀU BỆNH
TẬT, TAI HỌA**.

🌟 **Đặc trưng:**
- Đương số gặp **đại nạn cũng có thể QUA KHỎI**
- Bệnh nặng **DỄ HÓA NHẸ**
- Có **DUYÊN gặp THẦY GIỎI THUỐC HAY**
- Khả năng **TỰ HỒI PHỤC** cao

→ Một trong những bộ **GIẢI MẠNH NHẤT** trong tử vi — kết hợp:
- **Âm tính** (Thiếu Âm — ẩn chứa, ôn hòa)
- **Dương tính** (Thiếu Dương — chủ động, nhân hậu)
- **Khoa tinh** (Hóa Khoa — Đệ Nhất Giải Thần)

→ Đặc biệt tốt khi vào **HẠN BỆNH** hoặc **HẠN ĐAU OM** — gia tăng khả năng
**SỐNG SÓT**.`,
  },

  {
    id: 'thieu-duong-tai-tai-bach',
    title: 'Thiếu Dương tại Tài Bạch',
    sao: ['Thiếu Dương'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `🌟 **Thiếu Dương tại Tài Bạch:**
- Mang tính **VƯỢNG**
- Tuy phải **VẤT VẢ** trong việc kiếm tiền nhưng **KHÔNG đến mức TÚNG THIẾU**
- Hay đem tiền **ĐI LÀM TỪ THIỆN, CÔNG ĐỨC**
- Người **KHÔNG CÓ vấn đề khó khăn** với tiền bạc

⚠️ **Mặt khó:**
- Khi gặp khó khăn dễ rơi vào **"CHÁY TÚI"**
- Thậm chí bị **DỒN ĐẾN CẢNH KHỐN CÙNG**

🌟 **Đặc trưng "trong nguy có cơ":**
- Báo hiệu con đường tài lộc "**CÀNG TRONG NGUY KHÓ CÀNG LÓ CƠ MAY**"
- Khi nhiều người **CHẬT VẬT MƯU SINH**, bản thân lại có thể **XOAY SỞ** và
  tìm được **NGUỒN LỢI**, biến **NGHỊCH CẢNH thành CƠ HỘI**

🌟 Khi có thêm nhiều **Tài Tinh**:
- Người có **CHUYÊN MÔN TÀI CHÍNH**
- Kiếm tiền có yếu tố **NƯỚC NGOÀI**
- **ĐẦU TƯ vào THỊ TRƯỜNG TÀI CHÍNH QUỐC TẾ**`,
  },

  {
    id: 'thieu-duong-tai-tai-bach-hoa-loc',
    title: 'Thiếu Dương + Hóa Lộc tại Tài Bạch - Lộc Mã giao trì',
    sao: ['Thiếu Dương'],
    ketHop: ['Hóa Lộc'],
    cung: ['Tài Bạch'],
    doUuTien: 70,
    tomTat: `🌟 **Thiếu Dương + Hóa Lộc tại Tài Bạch:** **CÀNG TỐT**.`,
  },

  {
    id: 'thieu-duong-tai-tai-bach-thien-ma',
    title: 'Thiếu Dương + Thiên Mã tại Tài Bạch - Lộc Mã giao trì',
    sao: ['Thiếu Dương'],
    ketHop: ['Thiên Mã'],
    cung: ['Tài Bạch'],
    doUuTien: 70,
    tomTat: `🌟 **Thiếu Dương + Thiên Mã tại Tài Bạch** (Lộc Mã giao trì):
**CÀNG TỐT**.`,
  },

  {
    id: 'thieu-duong-tai-tu-tuc',
    title: 'Thiếu Dương tại Tử Tức - dễ sinh con trai',
    sao: ['Thiếu Dương'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `🌟 **Thiếu Dương tại Tử Tức:**
- Chủ sự **HƯỞNG PHÚC TỪ CON CÁI**
- Con cái **HÒA THUẬN, HIẾU THẢO**
- **DỄ SINH CON TRAI**
- Con cái **THÔNG MINH, NHANH NHẸN, HOẠT NÁO**, **DỄ NỔI TIẾNG**
- Tự giác, **KỶ LUẬT CAO**, ít để cha mẹ phải nhắc nhở nhiều`,
  },

  {
    id: 'thieu-duong-tai-tu-tuc-da-la',
    title: '⚠️ Thiếu Dương + Đà La tại Tử Tức - con ương bướng',
    sao: ['Thiếu Dương'],
    ketHop: ['Đà La'],
    cung: ['Tử Tức'],
    doUuTien: 70,
    tomTat: `⚠️ **Thiếu Dương + Đà La tại Tử Tức** (sao cứng đầu): tính khí con
trở nên **ƯƠNG BƯỚNG**.`,
  },

  {
    id: 'thieu-duong-tai-tu-tuc-linh-tinh',
    title: '⚠️ Thiếu Dương + Linh Tinh tại Tử Tức - bằng mặt không bằng lòng',
    sao: ['Thiếu Dương'],
    ketHop: ['Linh Tinh'],
    cung: ['Tử Tức'],
    doUuTien: 70,
    tomTat: `⚠️ **Thiếu Dương + Linh Tinh tại Tử Tức:**
- Mối quan hệ dễ rơi vào "**BẰNG MẶT KHÔNG BẰNG LÒNG**"
- Mâu thuẫn **TÍCH TỤ** → khi bùng phát, con cái có thể **BỎ NHÀ ĐI**
- Để lại nhiều **PHIỀN MUỘN** cho cha mẹ`,
  },

  {
    id: 'thieu-duong-tai-tu-tuc-ta-phu',
    title: 'Thiếu Dương + Tả Phù tại Tử Tức - con quân tử',
    sao: ['Thiếu Dương'],
    ketHop: ['Tả Phù'],
    cung: ['Tử Tức'],
    doUuTien: 70,
    tomTat: `🌟 **Thiếu Dương + Tả Phù tại Tử Tức:**
- Con cái giữ được **KHÍ CHẤT CHÍNH TRỰC** của bậc **QUÂN TỬ**
- **SÁNG TRÍ HIỀN TÂM**
- Biết **CƯ XỬ PHẢI PHÉP**
- Trở thành **ĐIỂM TỰA cho gia đình**`,
  },

  {
    id: 'thieu-duong-tai-tu-tuc-huu-bat',
    title: 'Thiếu Dương + Hữu Bật tại Tử Tức - con quân tử',
    sao: ['Thiếu Dương'],
    ketHop: ['Hữu Bật'],
    cung: ['Tử Tức'],
    doUuTien: 70,
    tomTat: `🌟 **Thiếu Dương + Hữu Bật tại Tử Tức:**
- Con cái giữ được **KHÍ CHẤT CHÍNH TRỰC** của bậc **QUÂN TỬ**
- **SÁNG TRÍ HIỀN TÂM**
- Biết **CƯ XỬ PHẢI PHÉP**
- Trở thành **ĐIỂM TỰA cho gia đình**`,
  },

  {
    id: 'thieu-duong-tai-tu-tuc-thien-khoi',
    title: 'Thiếu Dương + Thiên Khôi tại Tử Tức - con quân tử',
    sao: ['Thiếu Dương'],
    ketHop: ['Thiên Khôi'],
    cung: ['Tử Tức'],
    doUuTien: 70,
    tomTat: `🌟 **Thiếu Dương + Thiên Khôi tại Tử Tức:**
- Con cái giữ được **KHÍ CHẤT CHÍNH TRỰC** của bậc **QUÂN TỬ**
- **SÁNG TRÍ HIỀN TÂM**
- Biết **CƯ XỬ PHẢI PHÉP**
- Trở thành **ĐIỂM TỰA cho gia đình**`,
  },

  {
    id: 'thieu-duong-tai-tu-tuc-thien-viet',
    title: 'Thiếu Dương + Thiên Việt tại Tử Tức - con quân tử',
    sao: ['Thiếu Dương'],
    ketHop: ['Thiên Việt'],
    cung: ['Tử Tức'],
    doUuTien: 70,
    tomTat: `🌟 **Thiếu Dương + Thiên Việt tại Tử Tức:**
- Con cái giữ được **KHÍ CHẤT CHÍNH TRỰC** của bậc **QUÂN TỬ**
- **SÁNG TRÍ HIỀN TÂM**
- Biết **CƯ XỬ PHẢI PHÉP**
- Trở thành **ĐIỂM TỰA cho gia đình**`,
  },

  {
    id: 'thieu-duong-tai-phu-the',
    title: 'Thiếu Dương tại Phu Thê - dễ lấy chồng xa',
    sao: ['Thiếu Dương'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `⚠️ **Thiếu Dương tại Phu Thê:** đời sống vợ chồng **THIẾU YÊN BÌNH**.

🌟 **Đặc trưng người hôn phối:**
- Có **NHAN SẮC**, **ĐỨNG ĐẮN**
- Dễ có giai đoạn **MỘ ĐẠO**, thích tìm hiểu **TÂM LINH PHẬT PHÁP**

⚡ **Quy luật XA QUÊ:**
- Vợ chồng dễ **XA QUÊ, CÁCH QUÁN**
- **Lấy nhau xong CÔNG DANH** của đương số **PHÁT TRIỂN HƠN**

🌟 **Thuận lợi với NỮ MỆNH:** người bạn đời thường **CHÍNH TRỰC**, sống có
**NGHĨA CÓ TÌNH**:
- Sự **CỨNG RẮN** của đối phương đôi khi tạo **CẢM GIÁC GÒ BÓ**
- Nếu biết **KHÉO LÉO DỰA VÀO CHỒNG**, **NƯƠNG NHỜ ĐÚNG LÚC** → cuộc sống gia
  đình **trong ấm ngoài êm**`,
  },

  {
    id: 'thieu-duong-tai-phu-the-hoa-tinh',
    title: '⚠️ Thiếu Dương + Hỏa Tinh tại Phu Thê - lấy chồng xa',
    sao: ['Thiếu Dương'],
    ketHop: ['Hỏa Tinh'],
    cung: ['Phu Thê'],
    doUuTien: 73,
    tomTat: `⚠️ **Thiếu Dương + Hỏa Tinh tại Phu Thê:**
- Dễ **LẤY CHỒNG XA**
- Thậm chí **LẤY NGƯỜI NƯỚC NGOÀI**
- Kết hôn phải cố gắng "**NHẬP GIA TÙY TỤC**" nơi quê chồng với nhiều **TẬP
  QUÁN LẠ LẪM**`,
  },

  {
    id: 'thieu-duong-tai-phu-the-linh-tinh',
    title: '⚠️ Thiếu Dương + Linh Tinh tại Phu Thê - lấy chồng xa',
    sao: ['Thiếu Dương'],
    ketHop: ['Linh Tinh'],
    cung: ['Phu Thê'],
    doUuTien: 73,
    tomTat: `⚠️ **Thiếu Dương + Linh Tinh tại Phu Thê:**
- Dễ **LẤY CHỒNG XA**
- Thậm chí **LẤY NGƯỜI NƯỚC NGOÀI**
- Kết hôn phải cố gắng "**NHẬP GIA TÙY TỤC**" nơi quê chồng với nhiều **TẬP
  QUÁN LẠ LẪM**`,
  },

  {
    id: 'thieu-duong-tai-phu-the-thai-duong',
    title: '⚠️ Thiếu Dương + Thái Dương tại Phu Thê - lấy chồng xa',
    sao: ['Thiếu Dương'],
    ketHop: ['Thái Dương'],
    cung: ['Phu Thê'],
    doUuTien: 73,
    tomTat: `⚠️ **Thiếu Dương + Thái Dương tại Phu Thê:**
- Dễ **LẤY CHỒNG XA**
- Thậm chí **LẤY NGƯỜI NƯỚC NGOÀI**
- Kết hôn phải cố gắng "**NHẬP GIA TÙY TỤC**" nơi quê chồng với nhiều **TẬP
  QUÁN LẠ LẪM**`,
  },

  {
    id: 'thieu-duong-tai-phu-the-cu-mon',
    title: '⚠️ Thiếu Dương + Cự Môn tại Phu Thê - lấy chồng xa',
    sao: ['Thiếu Dương'],
    ketHop: ['Cự Môn'],
    cung: ['Phu Thê'],
    doUuTien: 73,
    tomTat: `⚠️ **Thiếu Dương + Cự Môn tại Phu Thê:**
- Dễ **LẤY CHỒNG XA**
- Thậm chí **LẤY NGƯỜI NƯỚC NGOÀI**
- Kết hôn phải cố gắng "**NHẬP GIA TÙY TỤC**" nơi quê chồng với nhiều **TẬP
  QUÁN LẠ LẪM**`,
  },

  {
    id: 'thieu-duong-tai-phu-the-van-xuong',
    title: 'Thiếu Dương + Văn Xương tại Phu Thê - cách đẹp',
    sao: ['Thiếu Dương'],
    ketHop: ['Văn Xương'],
    cung: ['Phu Thê'],
    doUuTien: 70,
    tomTat: `🌟 **Thiếu Dương + Văn Xương tại Phu Thê:** vẫn thành **CÁCH ĐẸP**.`,
  },

  {
    id: 'thieu-duong-tai-phu-the-van-khuc',
    title: 'Thiếu Dương + Văn Khúc tại Phu Thê - cách đẹp',
    sao: ['Thiếu Dương'],
    ketHop: ['Văn Khúc'],
    cung: ['Phu Thê'],
    doUuTien: 70,
    tomTat: `🌟 **Thiếu Dương + Văn Khúc tại Phu Thê:** vẫn thành **CÁCH ĐẸP**.`,
  },

  {
    id: 'thieu-duong-tai-phu-the-thien-khoi',
    title: 'Thiếu Dương + Thiên Khôi tại Phu Thê - cách đẹp',
    sao: ['Thiếu Dương'],
    ketHop: ['Thiên Khôi'],
    cung: ['Phu Thê'],
    doUuTien: 70,
    tomTat: `🌟 **Thiếu Dương + Thiên Khôi tại Phu Thê:** vẫn thành **CÁCH ĐẸP**.`,
  },

  {
    id: 'thieu-duong-tai-phu-the-thien-viet',
    title: 'Thiếu Dương + Thiên Việt tại Phu Thê - cách đẹp',
    sao: ['Thiếu Dương'],
    ketHop: ['Thiên Việt'],
    cung: ['Phu Thê'],
    doUuTien: 70,
    tomTat: `🌟 **Thiếu Dương + Thiên Việt tại Phu Thê:** vẫn thành **CÁCH ĐẸP**.`,
  },

  {
    id: 'thieu-duong-tai-huynh-de',
    title: 'Thiếu Dương tại Huynh Đệ - nhiều anh em trai',
    sao: ['Thiếu Dương'],
    cung: ['Huynh Đệ'],
    doUuTien: 70,
    tomTat: `🌟 **Thiếu Dương tại Huynh Đệ:**
- Anh chị em **HÒA THUẬN**, **HAY GIÚP ĐỠ LẪN NHAU**
- **DỄ CÓ ANH EM TRAI** hơn chị em gái (đặc tính tương đồng Thái Dương —
  tượng trưng nam giới)

⚡ **Đặc trưng quan hệ anh em:**
- **SÒNG PHẲNG**, "**có vay có trả, có ơn tất báo**"
- Nếu biết **HẾT LÒNG GIÚP ĐỠ** thì sau này cũng dễ **NHẬN LẠI** sự tương trợ
- Trong hành xử làm việc gì cũng **MINH BẠCH**, "**QUANG MINH CHÍNH ĐẠI**"
- **KHÔNG ƯA VÒNG VO** hay **giấu giếm sau lưng**`,
  },

  {
    id: 'thieu-duong-tai-huynh-de-kinh-duong',
    title: '⚠️ Thiếu Dương + Kình Dương tại Huynh Đệ - anh em kiêu căng',
    sao: ['Thiếu Dương'],
    ketHop: ['Kình Dương'],
    cung: ['Huynh Đệ'],
    doUuTien: 65,
    tomTat: `⚠️ **Thiếu Dương + Kình Dương tại Huynh Đệ:** anh chị em hay **Ỷ
vào MÌNH TÀI GIỎI** hơn người mà trở nên **KIÊU CĂNG, NGẠO MẠN**.`,
  },

  {
    id: 'thieu-duong-tai-huynh-de-hoa-tinh',
    title: '⚠️ Thiếu Dương + Hỏa Tinh tại Huynh Đệ - anh em kiêu căng',
    sao: ['Thiếu Dương'],
    ketHop: ['Hỏa Tinh'],
    cung: ['Huynh Đệ'],
    doUuTien: 65,
    tomTat: `⚠️ **Thiếu Dương + Hỏa Tinh tại Huynh Đệ:** anh chị em hay **Ỷ vào
MÌNH TÀI GIỎI** hơn người mà trở nên **KIÊU CĂNG, NGẠO MẠN**.`,
  },

  {
    id: 'thieu-duong-loi-khuyen',
    title: 'Lời khuyên cho người Thiếu Dương',
    sao: ['Thiếu Dương'],
    doUuTien: 35,
    tomTat: `💡 **Thiếu Dương là Thiện tinh** — vừa là **"ÁNH SÁNG PHỤ" BỔ TRỢ**, vừa là
**PHÉP THỬ** để học cách **dung hòa, giữ sự công bằng và thẳng thắn**.

🌟 **Điểm mạnh:**
- **THÔNG MINH, NHÂN HẬU**
- **NỔI TRỘI**, được nhiều người yêu mến
- Khả năng **CỨU GIẢI** mạnh
- **LẠC QUAN, TÍCH CỰC**

⚠️ **Điểm yếu:**
- **LẮM TÀI MÀ NHIỀU TẬT** (do tam hợp với Thiên Không + Đào Hoa + Kiếp Sát)
- **LẠC QUAN QUÁ** dễ tự **rước họa**
- **Đào hoa** dễ làm **dở dang** duyên tình

💡 **Bí quyết phát huy Thiếu Dương:**
- **GIỮ KHÍ CHẤT chính trực** của Tứ Đức luôn chiếu
- **TÌM HIỂU TÂM LINH, PHẬT PHÁP** — sẽ giúp **trí tuệ thêm sâu sắc**
- **CẨN THẬN** với **đào hoa** — không để **ánh sáng của mình thu hút sai người**
- **KHÔNG vượt quyền** — luôn **kính trên nhường dưới**
- **KIỀM CHẾ tính nổi trội** quá mức — nhường cho người khác có **không gian tỏa
  sáng**

→ Khi biết **DUNG HÒA** giữa **DƯƠNG TÍNH NỔI TRỘI** và **TÂM LINH HƯỚNG NỘI**,
Thiếu Dương trở thành **NGỌN ĐUỐC dẫn lối** cho cả mình và những người xung
quanh.`,
  },
];
