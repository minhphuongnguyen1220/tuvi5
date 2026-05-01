import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO ÂN QUANG - Mộc, Phúc Tinh + Quý Tinh.
 *
 * An theo VỊ TRÍ VĂN XƯƠNG (cùng cặp với Thiên Quý an theo Văn Khúc).
 *
 * Đặc trưng cặp Quang Quý:
 *   - Sửu/Mùi: ĐỒNG CUNG (đắc cách nhất - đại khoa)
 *   - Thìn/Tuất: XUNG CHIẾU
 *   - Mão/Dậu/Tỵ/Hợi: TAM HỢP CHIẾU
 *   - Tý/Ngọ/Dần/Thân: ĐỨNG RIÊNG (không thành bộ)
 *   - Sửu/Mùi còn có cách GIÁP QUANG GIÁP QUÝ
 *
 * ⚡ Phân biệt:
 *   - ÂN QUANG = sự giúp đỡ của ĐẤNG LINH THIÊNG (khác Tả Hữu là người đời)
 *   - Thiên hướng VẬT CHẤT, dễ làm THẦY GIÁO, THẦY LANG
 *
 * ⚡ Phần CHUNG cặp Quang Quý đã viết tại file này với
 *    sao: ['Ân Quang', 'Thiên Quý'].
 */
export const luanGiai_AnQuang: DoanLuanGiai[] = [
  {
    id: 'an-quang-tinh-chat-chung',
    title: 'Ân Quang - Đặc tính chung',
    sao: ['Ân Quang'],
    doUuTien: 32,
    tomTat: `**Ân Quang** — phụ tinh **PHÚC TINH** + **QUÝ TINH**, an theo vị trí
**Văn Xương**.

**Ngũ hành:** **Mộc**.

⚡ **Đặc tính:**
- **Nhân hậu, từ thiện, may mắn, gặp thời, đem lại sự tốt lành**
- **CỨU KHỔN PHÒ NGUY**, giải trừ bệnh tật tai họa
- Đem lại **PHÚC THỌ**
- **CHẾ HÓA tính dâm đãng** của Đào Hồng

⚡ **Vai trò đặc biệt:**
- Là **SỰ GIÚP ĐỠ CỦA ĐẤNG LINH THIÊNG** (khác Tả Hữu là sự giúp đỡ của
  người đời)
- Gặp sao hung cũng **KHÔNG CÓ HẠI**
- Tọa thủ tại bất kỳ cung nào đều mang lại **TỐT LÀNH, PHÚC THỌ**

⚡ **Hướng nghiệp:** Ân Quang thiên về **VẬT CHẤT** — dễ làm **THẦY GIÁO,
THẦY LANG**, các nghề có thiện tính cao.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // PHẦN CHUNG CẶP QUANG QUÝ
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'quang-quy-bo-doi-tinh-chat',
    title: 'Bộ Quang Quý - Đặc tính chung của cặp đôi',
    sao: ['Ân Quang', 'Thiên Quý'],
    doUuTien: 55,
    tomTat: `**Bộ Quang Quý** (Ân Quang + Thiên Quý) — **CẶP ĐÔI PHÚC THIỆN TINH** quan
trọng nhất của tử vi:

⚡ **Đặc tính chung:**
- **Phúc tinh, Quý tinh** — chủ về nhân hậu, từ thiện, may mắn, gặp thời
- **CỨU KHỔN PHÒ NGUY** — giải trừ bệnh tật, tai họa
- Đem lại **PHÚC THỌ**
- **CHẾ HÓA Đào Hồng** — giảm tính dâm đãng hoa nguyệt
- Gặp sao hung cũng **KHÔNG CÓ HẠI**

⚡ **Là SỰ GIÚP ĐỠ CỦA ĐẤNG LINH THIÊNG** (Tả Hữu = sự giúp đỡ của người đời).

⚡ **Quy luật an sao:**
- Ân Quang an theo **VĂN XƯƠNG**, Thiên Quý an theo **VĂN KHÚC**
- Đồng cung tại **Sửu/Mùi** (đắc cách nhất)
- Xung chiếu tại **Thìn/Tuất**
- Tam hợp chiếu tại **Mão/Dậu/Tỵ/Hợi**
- Đứng riêng lẻ tại **Tý/Ngọ/Dần/Thân**

⚡ **Phù trì Nhật Nguyệt** — như Xương Khúc, Quang Quý phù trì cho Thái
Dương Thái Âm, đặc biệt hợp với Nhật Nguyệt sáng.`,
  },

  {
    id: 'quang-quy-phan-biet-vat-chat-tinh-than',
    title: 'Phân biệt Ân Quang (vật chất) vs Thiên Quý (tinh thần)',
    sao: ['Ân Quang', 'Thiên Quý'],
    doUuTien: 50,
    tomTat: `**Phân biệt vai trò Ân Quang vs Thiên Quý** trong cặp Quang Quý:

⚡ **ÂN QUANG** — Mộc — thiên về **VẬT CHẤT**:
- Tại Mệnh dễ làm **THẦY GIÁO, THẦY LANG**
- Hưởng phúc thiên về tài lộc, công danh hữu hình
- Giúp đỡ cụ thể, thực tế

⚡ **THIÊN QUÝ** — Thổ — thiên về **TINH THẦN**:
- Tại Mệnh dễ làm **CÔNG CHỨC**
- Hưởng phúc thiên về tâm linh, bình an, danh tiếng
- Giúp đỡ về đạo nghĩa, tu dưỡng

⚡ **Khi đồng cung tại Sửu/Mùi** → cả hai mặt vật chất + tinh thần đều viên
mãn — đây là điều khiến cặp Sửu/Mùi đắc cách nhất.`,
  },

  {
    id: 'quang-quy-suu-mui-dac-cach',
    title: 'Quang Quý đồng cung Sửu/Mùi - đắc cách đại khoa',
    sao: ['Ân Quang', 'Thiên Quý'],
    chi: ['Sửu', 'Mùi'],
    doUuTien: 88,
    tomTat: `**Quang Quý đồng cung Sửu/Mùi** — vị trí **ĐẮC CÁCH NHẤT** của bộ này.

⚡ **Đặc trưng:**
- Sách vở ghi: **"Quang Quý miếu địa tại Sửu Mùi"**
- Là cung **THỔ** — đất trung dung kết phát phúc khí
- Chủ về **ĐẠI KHOA** — gặp cát tinh thì học giỏi, công danh hiển đạt
- **Hưởng ÂN HUỆ TRỜI BAN**, hay gặp may mắn
- Gặp khó khăn có người giúp đỡ
- Thường có **TÍN NGƯỠNG**, tin vào đấng thiêng liêng

⚡ **Câu phú:** **"Quý Ân Sửu Mùi hạn cầu - Đường mây gặp bước cao sâu cửu
trùng"** — vào hạn tại bản cung cầu công danh đỗ đạt cao.

⚡ **Đặc biệt:** Chỉ riêng vị trí này mới có cách **GIÁP QUANG GIÁP QUÝ** —
cách đẹp nhưng yếu hơn đồng cung trực tiếp.

⚡ **Khả năng giải họa:** Tại Sửu/Mùi giải được hung tinh tọa thủ tại các
cung nhị hợp tương ứng.`,
  },

  {
    id: 'quang-quy-thin-tuat-xung-chieu',
    title: 'Quang Quý xung chiếu Thìn/Tuất - giải Không Kiếp',
    sao: ['Ân Quang', 'Thiên Quý'],
    chi: ['Thìn', 'Tuất'],
    doUuTien: 82,
    tomTat: `**Quang Quý xung chiếu Thìn/Tuất** — vị trí **TỨ MỘ**, khả năng giải họa
cực mạnh.

⚡ **Đặc trưng:**
- Tại Tứ Mộ (Thìn/Tuất) hai sao này **RẤT MẠNH MẼ**
- Có tác dụng **CỨU GIẢI** ngay cả các hung tinh hạng nặng như **Địa Không,
  Địa Kiếp** đóng đồng cung

⚡ **Cách giải hung tinh:**
- Tại Thìn/Tuất gặp **Không hoặc Kiếp** đồng cung hoặc hợp chiếu →
  **GIẢI HẦU HẾT TAI HỌA**
- Có thêm **Kình Đà hãm địa** chiếu về cũng không sao
- Có thêm **Hình Riêu cả bộ** với Không/Kiếp → giảm rất nhiều tai họa
  nhưng không hết

(Xem entry chuyên biệt cho Quang Quý đắc tại Mão / Dậu.)`,
  },

  {
    id: 'quang-quy-mao-dau-tam-hop',
    title: 'Quang Quý tại Mão / Dậu - Đắc tam hợp giữ phúc tinh',
    sao: ['Ân Quang', 'Thiên Quý'],
    chi: ['Mão', 'Dậu'],
    doUuTien: 75,
    tomTat: `🌟 **Quang Quý tại Mão / Dậu** (tam hợp với Sửu/Mùi):

Có người cho rằng đắc tại Mão / Dậu — vẫn giữ được phẩm chất phúc tinh tốt.`,
  },

  {
    id: 'quang-quy-giai-hoa-tong-quat',
    title: 'Quang Quý - Khả năng giải họa chi tiết',
    sao: ['Ân Quang', 'Thiên Quý'],
    doUuTien: 60,
    tomTat: `**Quang Quý GIẢI HỌA RẤT MẠNH** — đặc biệt khi thủ tại cung và đi đủ bộ.

⚡ **Mức độ giải họa theo thế đứng:**
- 🥇 **Đủ bộ thủ tại Thìn/Tuất/Sửu/Mùi** → mạnh mẽ nhất, giải hầu hết
- 🥈 **Đồng cung tại Sửu/Mùi** → giải được Hình Riêu Không Kiếp đủ bộ
  thủ chiếu
- 🥉 **Tam hợp chiếu** → giải hung tinh hãm địa cả bộ chiếu, kể cả Kình Đà
- ⚠️ **Đơn thủ** (chỉ 1 sao) → hiệu lực **YẾU ĐI NHIỀU**
- ❌ **Cách giáp Quang giáp Quý** → hầu như **KHÔNG có tác động** giải họa
  khi trong cung có hung tinh hãm địa thủ

⚡ **Giải được:**
- Giải **Kình Dương hãm** tại Tý/Ngọ/Mão/Dậu
- Giải **Không Kiếp Kình Đà Hỏa Linh Hình Riêu** (sát tinh hạng nặng)
- Đồng cung giải được **Hình Riêu Không Kiếp ĐỦ BỘ thủ chiếu**

⚡ **KHÔNG giải được:**
- Cách **2 đời chồng/vợ** do **Tả Hữu tại Phu Thê** (không phải hung tinh
  tác họa)
- **THỊ PHI do Tuế Đà Kỵ** gây ra (không giải mạnh được)
- Đơn thủ không giải được **Kình cư Ngọ + Hình Riêu tam hợp**`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP NỔI TIẾNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'quang-quy-thai-cao-tu-vinh',
    title: 'Quang Quý + Thai Cáo (Thai Phụ + Phong Cáo) - Tứ Vinh',
    sao: ['Ân Quang', 'Thiên Quý'],
    ketHop: ['Thai Phụ'],
    doUuTien: 55,
    tomTat: `**Quang Quý + Thai Cáo** (Thai Phụ + Phong Cáo) — gọi là **"TỨ VINH"**
(vinh hiển): **DỄ HIỂN ĐẠT**.

⚡ **Câu phú:** **"Thai Phụ Quang Quý sớm có công danh"** — trai thì hiển
đạt, gái thì lấy chồng làm lớn.

⚡ Bộ này phát rất sớm về **CÔNG DANH**, có cả **PHẨM TƯỚC** (Thai Cáo) và
**PHÚC ĐỨC** (Quang Quý) → vinh hiển toàn diện.`,
  },

  {
    id: 'quang-quy-tu-linh-hong-thuong-cach',
    title: 'Quý Ân Thanh Việt Cái Hồng - Trai cận cửu trùng nữ tác cung phi',
    sao: ['Ân Quang', 'Thiên Quý'],
    ketHop: ['Thanh Long'],
    doUuTien: 55,
    tomTat: `**Quang Quý + Tả Hữu + Thanh Long + Khôi Việt + Hoa Cái + Hồng Loan** —
**THƯỢNG CÁCH**, chức vị lớn.

⚡ **Câu phú nổi tiếng:** **"Quý Ân Thanh Việt Cái Hồng - TRAI CẬN CỬU
TRÙNG, NỮ TÁC CUNG PHI"**.

⚡ **Ý nghĩa:**
- **Trai** → cận cửu trùng (gần vua) — bậc đại thần, cận thần
- **Nữ** → tác cung phi — cao quý trong cung đình hoặc lấy chồng địa vị tột đỉnh

⚡ **Phân tích bộ sao:**
- **Quang Quý**: phúc đức, sự che chở của trời
- **Tả Hữu**: sự nâng đỡ của người đời
- **Thanh Long**: long khí cao quý
- **Khôi Việt**: Thiên Ất Quý Nhân
- **Hoa Cái**: tâm linh phẩm cách
- **Hồng Loan**: dung mạo phúc khí
→ Hội tụ cả **PHÚC + QUÝ + LỘC + DUYÊN** ở mức tột đỉnh.`,
  },

  {
    id: 'quang-quy-co-luong-thin-tuat',
    title: 'Quang Quý + Cơ Lương Thìn/Tuất - Đại quý',
    sao: ['Ân Quang', 'Thiên Quý'],
    chi: ['Thìn', 'Tuất'],
    ketHop: ['Thiên Cơ', 'Thiên Lương'],
    doUuTien: 55,
    tomTat: `**Quang Quý + Thiên Cơ + Thiên Lương đồng cung Thìn/Tuất** — **ĐẠI QUÝ,
LÀM NÊN**.

⚡ **Phân tích:**
- Cách **Cơ Lương Thìn/Tuất** đã đẹp (chính tinh hợp cách Tứ Mộ)
- Thêm Quang Quý đắc địa Tứ Mộ → tăng cả **TRÍ TUỆ + PHÚC THỌ + QUÝ NHÂN**
- Đường công danh thuận buồm xuôi gió, làm nên việc lớn`,
  },

  {
    id: 'quang-quy-khoi-viet-suu-mui',
    title: 'Quang Quý + Khôi Việt Sửu/Mùi - Đại quý',
    sao: ['Ân Quang', 'Thiên Quý'],
    chi: ['Sửu', 'Mùi'],
    ketHop: ['Thiên Khôi'],
    doUuTien: 60,
    tomTat: `**Quang Quý + Khôi Việt đồng cung Sửu/Mùi** — **ĐẠI QUÝ, LÀM NÊN**.

⚡ **Phân tích:**
- Quang Quý đắc cách Sửu/Mùi
- Khôi Việt = **Thiên Ất Quý Nhân** = Quý Nhân tột đỉnh
- Hai cặp Quý Nhân (linh thiêng + người đời) hội tụ tại đất Thổ → **PHÚC
  ĐẠI THẶNG**
- Đỗ đại khoa, làm quan đến chức cao`,
  },

  {
    id: 'quang-quy-thien-tuong-dai-quy',
    title: 'Quang Quý + Thiên Tướng - Đại quý làm nên to',
    sao: ['Ân Quang', 'Thiên Quý'],
    ketHop: ['Thiên Tướng'],
    doUuTien: 55,
    tomTat: `**Quang Quý + Thiên Tướng đồng cung** — **ĐẠI QUÝ, LÀM NÊN TO**.

⚡ **Phân tích:**
- Thiên Tướng = sao **ẤN** (con dấu, quyền lực)
- Quang Quý = quý nhân phù trợ
- Cách **"PHÚC ẤM ĐỚI ẤN"** — vừa có quyền lực vừa có phúc trạch dày
- Sự nghiệp lớn lao, phúc lộc dồi dào`,
  },

  {
    id: 'quang-quy-luong-ngo-van-vo-toan-tai',
    title: 'Quang Quý + Tả Hữu + Lương cư Ngọ - Văn võ toàn tài',
    sao: ['Ân Quang', 'Thiên Quý'],
    cung: ['Mệnh'],
    chi: ['Ngọ'],
    ketHop: ['Tả Phù', 'Thiên Lương'],
    doUuTien: 60,
    tomTat: `**Quang Quý + Tả Hữu + Thiên Lương cư Ngọ** — **VĂN VÕ TOÀN TÀI**.

⚡ **Phân tích:**
- **Thiên Lương cư Ngọ** vốn là cách đẹp (Lương đắc địa)
- Thêm Tả Hữu phò trợ
- Thêm Quang Quý làm phúc tinh
→ **VĂN VÕ TOÀN TÀI**, vừa giỏi học hành vừa giỏi binh nghiệp.

⚡ **Lưu ý:** Thiên Lương ở chỗ khác (không phải Ngọ) cũng tốt nhưng không
đạt mức "văn võ toàn tài" như tại Ngọ.`,
  },

  {
    id: 'quang-quy-thien-phuc-quyen-loc-lam-lon',
    title: 'Quang Quý + Thiên Phúc + Quyền Lộc - Làm lớn',
    sao: ['Ân Quang', 'Thiên Quý'],
    ketHop: ['Thiên Phúc', 'Hóa Quyền'],
    doUuTien: 55,
    tomTat: `**Quang Quý + Thiên Phúc + Hóa Quyền + Hóa Lộc** — **LÀM LỚN**.

⚡ **Phân tích bộ sao:**
- **Quang Quý**: phúc tinh quý nhân
- **Thiên Phúc**: phúc tinh + quý tinh
- **Hóa Quyền**: quyền lực thực tế
- **Hóa Lộc**: tài lộc thực tế
→ Hội tụ đủ **PHÚC + QUÝ + QUYỀN + LỘC** → đường công danh tột đỉnh, có
địa vị cao trong xã hội.`,
  },

  {
    id: 'quang-quy-hy-suu-mui-cong-thanh',
    title: 'Quang Quý + Hỷ tại Sửu/Mùi - Công thành danh toại',
    sao: ['Ân Quang', 'Thiên Quý'],
    chi: ['Sửu', 'Mùi'],
    ketHop: ['Thiên Hỷ'],
    doUuTien: 55,
    tomTat: `**Quang Quý + Thiên Hỷ tại Sửu/Mùi** — **CÔNG THÀNH DANH TOẠI**, được người
giúp đỡ.

⚡ **Phân tích:**
- Quang Quý đắc Sửu/Mùi (đại khoa)
- Thiên Hỷ tại Tứ Mộ → hỷ sự, may mắn
→ Đường công danh thuận lợi, gặp niềm vui song hành với danh vọng.`,
  },

  {
    id: 'quang-quy-tu-sat-phuc-loc-kem',
    title: 'Quang Quý + Tứ Sát - Phúc lộc kém đi',
    sao: ['Ân Quang', 'Thiên Quý'],
    ketHop: ['Kình Dương'],
    doUuTien: 45,
    tomTat: `**Quang Quý gặp Tứ Sát** (Kình Dương + Đà La + Hỏa Tinh + Linh Tinh) —
**PHÚC LỘC KÉM ĐI**.

⚡ **Phân tích:**
- Tứ Sát đông đảo cản trở phúc tinh
- Quang Quý vẫn giải họa nhưng không phát triển được tốt nhất
- Phúc khí bị triết giảm
- Cuộc đời vẫn an ổn nhưng khó hiển đạt lớn

⚡ **Hóa giải:** Vị trí đắc cách của Quang Quý phần nào bù đắp.`,
  },

  {
    id: 'quang-quy-phu-tri-nhat-nguyet',
    title: 'Quang Quý phù trì Nhật Nguyệt',
    sao: ['Ân Quang', 'Thiên Quý'],
    ketHop: ['Thái Dương'],
    doUuTien: 50,
    tomTat: `**Quang Quý phù trì Thái Dương / Thái Âm** — bộ phù trợ rất hợp.

⚡ **Phân tích:**
- Xương Khúc là bộ phù trì mạnh mẽ cho Nhật Nguyệt
- Quang Quý cũng phù trì cho Nhật Nguyệt **HỢP HƠN CÁC SAO KHÁC**
- Nhật Nguyệt sáng + Quang Quý → tăng phúc khí, danh vọng vang xa
- Đặc biệt khi Nhật Nguyệt đắc địa`,
  },

  {
    id: 'quang-quy-vao-han',
    title: 'Quang Quý vào hạn',
    sao: ['Ân Quang', 'Thiên Quý'],
    doUuTien: 50,
    tomTat: `**Quang Quý vào hạn** — **GIẢI RẤT LỚN TAI HỌA** xảy ra. Mưu cầu công
danh có lợi, **THI ĐỖ** (nhất là tại Sửu/Mùi).

⚡ **Câu phú:** **"Quý Ân Sửu Mùi hạn cầu - Đường mây gặp bước cao sâu
cửu trùng"**.

⚡ **Hạn đại vận có Quang Quý 50-60 tuổi:**
- Cuộc sống **ÊM ĐỀM, MAY MẮN, AN NHÀN**
- Hướng tới **BÌNH YÊN, HƯỚNG THIỆN, TU TÂM HỌC ĐẠO**
- Tránh xa cạnh tranh, không mưu cầu vật chất hay địa vị

⚡ **Hạn ở mọi tuổi:**
- **Sự nghiệp:** dễ gặp người nâng đỡ, được tin tưởng, giao dự án quan trọng
- **Tài chính:** nguồn thu ngoài dự kiến (thưởng, hợp đồng lớn, đầu tư
  sinh lời)
- **Học hành:** gặp thầy giỏi, môi trường thuận, cơ hội học bổng
- **Gia đạo:** quan hệ hòa thuận, mở rộng giao thiệp tốt`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // ÂN QUANG TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'an-quang-tai-menh',
    title: 'Ân Quang tại Mệnh',
    sao: ['Ân Quang'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `**Ân Quang thủ Mệnh** — lá số của người **"GẶP HUNG HÓA CÁT"**, cuộc sống
hiếm khi rơi vào bế tắc lâu dài.

⚡ **Tướng hình:**
- Gương mặt **PHÚC HẬU, SÁNG SỦA**, dễ tạo thiện cảm ngay từ lần gặp đầu
- Dáng vẻ điềm đạm, cử chỉ từ tốn, chừng mực
- Dễ được tin tưởng và kính trọng

⚡ **Tính cách:**
- **Tâm hồn phúc thiện, ăn hiền ở lành, có thiện tâm, nhân hậu**, hay giúp người
- **Thông minh, ôn hòa, vui vẻ, trọng ân nghĩa**
- Đối xử có tình nghĩa, có trước có sau, không lọc lừa bội phản
- Cư xử tình nghĩa với bạn bè, hiếu đễ với cha mẹ, chung thủy với vợ chồng

⚡ **Cát tinh hội (Tả Hữu, Thiên Quan, Thiên Phúc):**
- Hợp thành **"ĐOÀN PHÚC TINH"**
- Hậu thuẫn mạnh mẽ từ các mối quan hệ bạn bè, xã hội

⚡ **Phúc thọ:**
- Giảm nhẹ bệnh tật, vận xui, **TUỔI THỌ DÀI**
- Khi gặp hoạn nạn dễ được trả ơn, có người cứu giúp
- Lâm bệnh thường gặp **BÁC SĨ GIỎI, PHƯƠNG THUỐC HỢP** → nhanh hồi phục

⚡ **Cảnh báo:** Cần học cách **ĐẶT RANH GIỚI**, giữ tỉnh táo — không bị
lợi dụng lòng tốt khi quá tin người hoặc ngại va chạm.

⚡ **Thường được người ưa quý chuộng** dù không làm lớn.`,
  },

  {
    id: 'an-quang-tai-phu-mau',
    title: 'Ân Quang tại Phụ Mẫu',
    sao: ['Ân Quang'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Ân Quang tại Phụ Mẫu** — gia đình **YÊN ẤM**, cha mẹ **HIỀN LƯƠNG, PHÚC
ĐỨC**, là chỗ dựa vững chắc về cả tinh thần lẫn vật chất.

⚡ **Đặc trưng:**
- Mối quan hệ với cha mẹ **HÀI HÒA**, hiếm khi có mâu thuẫn lớn
- Có thể có **BỐ MẸ NUÔI** hoặc người **ĐỠ ĐẦU**
- Đối xử tốt với cha mẹ, được cha mẹ thương yêu

⚡ **Khi cung Phụ Mẫu gặp sao xấu:** Ân Quang vẫn giúp **GIẢM THIỂU XUNG ĐỘT**
và giữ gìn sự gắn kết trong gia đình.`,
  },

  {
    id: 'an-quang-tai-phuc-duc',
    title: 'Ân Quang tại Phúc Đức',
    sao: ['Ân Quang'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `**Ân Quang tại Phúc Đức** — được **THẦN LINH CHE CHỞ**, hưởng nhiều phúc
đức từ gia tiên.

⚡ **Đặc trưng:**
- Cuộc sống **NHẸ GÁNH** hơn người, **TUỔI THỌ CAO**, tâm an mệnh vững
- Dòng họ **THỊNH VƯỢNG**, nhiều người **HIỀN LƯƠNG, HƯỚNG THIỆN**
- Có người làm các nghề **Y HỌC** (thầy thuốc, giáo viên)

⚡ **Tâm linh:**
- Người gìn giữ truyền thống, sống **HIẾU LỄ** với gia tộc tổ tiên
- **MỒ MẢ DÒNG HỌ** được chăm lo chu toàn → trở thành điểm tựa tâm linh
  bền vững
- Khi chết được người **HIẾN ĐẤT**

⚡ Phúc phần gia tiên tích nhờ tôn chỉ sống có **ĐẠO NGHĨA** suốt cuộc đời.`,
  },

  {
    id: 'an-quang-tai-dien-trach',
    title: 'Ân Quang tại Điền Trạch',
    sao: ['Ân Quang'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Ân Quang tại Điền Trạch** — có **LỘC VỚI NHÀ CỬA, ĐẤT ĐAI**.

⚡ **Đặc trưng:**
- Đất đai **THỪA HƯỞNG TỪ TỔ TIÊN**
- Có **NGƯỜI HIẾN ĐẤT, GIÚP XÂY NHÀ** trong quá trình sinh sống
- Hưởng thừa tự của người trong họ

⚡ **Cát tinh hội (sao tài lộc):**
- Khả năng **KINH DOANH, ĐẦU TƯ BẤT ĐỘNG SẢN** thành công cao
- Tăng thêm nguồn thu đáng kể

⚡ **Tâm tính:**
- Sẵn sàng **QUYÊN GÓP** tài sản, đất đai để giúp đỡ cộng đồng
- Phúc phần luôn **DỒI DÀO**, hiếm khi rơi vào sa cơ thất thế`,
  },

  {
    id: 'an-quang-tai-tat-ach',
    title: 'Ân Quang tại Tật Ách',
    sao: ['Ân Quang'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `**Ân Quang tại Tật Ách** — như **TẤM LÁ CHẮN BẢO VỆ**, giúp giảm bớt rủi
ro về bệnh tật và tai ương.

⚡ **Đặc trưng:**
- **ÍT BỆNH TẬT, TAI HỌA**
- Đau ốm gặp **THẦY GIỎI, THUỐC HAY**

⚡ **Khi có sao xấu (Bệnh Phù, Địa Kiếp):**
- Ân Quang giúp **GIẢM MỨC ĐỘ NẶNG**
- Gặp đúng thầy thuốc, phương pháp điều trị hiệu quả
- Nhờ đó vượt qua biến cố

⚡ **Cuộc sống nhìn chung ÍT BỊ BIẾN CỐ NGHIÊM TRỌNG đeo bám** — nếu có,
phần đa **GẶP DỮ HÓA LÀNH**.`,
  },

  {
    id: 'an-quang-tai-no-boc',
    title: 'Ân Quang tại Nô Bộc',
    sao: ['Ân Quang'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Ân Quang tại Nô Bộc** — **MỐI QUAN HỆ XÃ HỘI THUẬN LỢI**.

⚡ **Đặc trưng:**
- Bạn bè, cộng sự **GIÚP ĐỠ TẬN TÌNH**
- Có **CẤP DƯỚI TRUNG THÀNH**, đối tác lâu dài
- Đối xử có nghĩa với bạn bè, lấy chí thành mà đãi người
- Có **TÔI TỚ ĐẮC LỰC**

⚡ **Trong kinh doanh:**
- Dễ xây dựng **MẠNG LƯỚI QUAN HỆ VỮNG MẠNH**
- Có nhiều khách hàng tiềm năng

⚡ **Đi cùng Thiên Quý → bộ Quang Quý:**
- Bạn bè, cộng sự không chỉ giúp đỡ
- Còn **MỞ RA NHỮNG CƠ HỘI LỚN** trong sự nghiệp`,
  },

  {
    id: 'an-quang-tai-thien-di',
    title: 'Ân Quang tại Thiên Di',
    sao: ['Ân Quang'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Ân Quang tại Thiên Di** — **MAY MẮN, THUẬN LỢI** khi đi xa, đi công tác,
mở rộng mối quan hệ xã hội.

⚡ **Đặc trưng:**
- Ra xã hội hay gặp **HÊN MAY**, được người giúp đỡ
- **GIẢI RẤT NHIỀU TAI HỌA**
- Có **BẠN HỮU TỐT**

⚡ **Trên đường công tác / du học / lập nghiệp xa:**
- Thường gặp **QUÝ NHÂN**
- Mở ra cơ hội ở môi trường mới

⚡ **Đi cùng Thiên Quý → bộ Quang Quý:**
- Cơ hội từ bên ngoài **CÀNG LỚN**
- Có thể mở ra **BƯỚC NGOẶT LỚN** trong sự nghiệp hoặc cuộc sống`,
  },

  {
    id: 'an-quang-tai-quan-loc',
    title: 'Ân Quang tại Quan Lộc - HỢP CÁCH',
    sao: ['Ân Quang'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `**Ân Quang tại Quan Lộc** — một trong những **VỊ TRÍ TỐT NHẤT** cho sự
nghiệp.

⚡ **Đặc trưng:**
- Dễ được **LÃNH ĐẠO TÍN NHIỆM**
- Cơ hội **PHÁT TRIỂN LỚN**
- Được người trên **GIÚP ĐỠ, CHE CHỞ**
- Hay giúp đỡ đồng nghiệp, lấy chí thành mà đãi người

⚡ **Tính cách trong công việc:**
- **KHÔNG ƯA CẠNH TRANH, KÈN CỰA**
- Không bao giờ làm điều ác hay bất nhân để đạt mục đích
- Luôn được mọi người **TIN TƯỞNG, NGƯỠNG MỘ**

⚡ **Hợp cách - Nghề nghiệp đẹp:**
- **THẦY THUỐC, BÁC SĨ, THẦY GIÁO**
- **CÔNG TÁC XÃ HỘI, TỪ THIỆN**
- → Dễ đạt **THÀNH CÔNG BỀN VỮNG**, được người đời kính trọng`,
  },

  {
    id: 'an-quang-tai-tai-bach',
    title: 'Ân Quang tại Tài Bạch',
    sao: ['Ân Quang'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Ân Quang tại Tài Bạch** — gặp nhiều **VẬN MAY VỀ TIỀN BẠC, TÀI CHÍNH**.

⚡ **Đặc trưng:**
- Khả năng **CÂN ĐỐI THU CHI** ổn định
- Hiếm khi rơi vào cảnh thiếu thốn kéo dài
- Nghèo túng có người giúp đỡ
- Có thể được hưởng **DI SẢN**
- Hay giúp đỡ người nghèo

⚡ **Cát tinh hội (Hóa Lộc, Lộc Tồn):**
- Vận may càng **THỊNH VƯỢNG**
- Dễ thăng tiến, đầu tư thành công
- Được người quen giới thiệu cơ hội tốt

⚡ **Sát tinh hội (Hóa Kỵ, Kình Dương):**
- May mắn bị cản trở
- Ân Quang **GIẢM THIỂU THIỆT HẠI** nhưng không loại bỏ rủi ro hoàn toàn
- Cần thận trọng với dự án tài chính mạo hiểm`,
  },

  {
    id: 'an-quang-tai-tu-tuc',
    title: 'Ân Quang tại Tử Tức',
    sao: ['Ân Quang'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Ân Quang tại Tử Tức** — **CON CÁI HIẾU THẢO, DỄ NUÔI DẠY**.

⚡ **Đặc trưng:**
- **THƯƠNG CON**, có **CON SANG QUÝ**
- Con cái **HIẾU ĐỄ** với cha mẹ và được cha mẹ thương yêu
- Có thể **LẬP CON NUÔI** để làm phúc
- Ít khi gặp xung đột lớn hay mâu thuẫn nghiêm trọng giữa các thế hệ

⚡ **Đi cùng Thiên Quý + sao phúc tinh:**
- Con cái không chỉ hiếu thuận
- Còn **MANG LẠI VẬN MAY** cho cha mẹ
- Có thể **THÀNH ĐẠT** và hỗ trợ gia đình`,
  },

  {
    id: 'an-quang-tai-phu-the',
    title: 'Ân Quang tại Phu Thê - Hóa giải nghiệp vợ chồng',
    sao: ['Ân Quang'],
    cung: ['Phu Thê'],
    doUuTien: 76,
    tomTat: `**Ân Quang tại Phu Thê** — **HÔN NHÂN HÒA THUẬN, HẠNH PHÚC**.

⚡ **Đặc trưng:**
- Lấy **VỢ CHỒNG QUÝ**, vợ chồng **ÂN ÁI HÒA THUẬN**
- Vợ chồng **XỨNG LỨA VỪA ĐÔI**
- Dù trải qua sóng gió vẫn **MỘT LÒNG SẮT SON**

⚡ **Hóa giải nghiệp vợ chồng:**
- Là **BỘ SAO HÓA GIẢI NGHIỆP** vợ chồng
- Dù có xung khắc thế nào, cuối cùng cả hai vẫn **Ở CẠNH NHAU ĐẾN GIÀ**

⚡ **Cát tinh hội (sao tài lộc, quyền quý):**
- Hôn nhân mang lại **LỢI ÍCH KINH TẾ**
- Tạo điều kiện tốt cho công việc, địa vị của đôi bên

⚡ **Sát tinh hội:** Ân Quang giúp **GIẢM NHẸ XUNG ĐỘT**.

⚠️ **LƯU Ý đặc biệt:** Quang Quý KHÔNG giải được cách **2 ĐỜI CHỒNG/VỢ**
do **Tả Hữu tại Phu Thê** gây ra (vì không phải hung tinh tác họa).`,
  },

  {
    id: 'an-quang-tai-huynh-de',
    title: 'Ân Quang tại Huynh Đệ',
    sao: ['Ân Quang'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Ân Quang tại Huynh Đệ** — **SỰ GẮN KẾT, YÊU THƯƠNG** giữa anh chị em.

⚡ **Đặc trưng:**
- Đối xử với anh chị em **CÓ TÌNH NGHĨA**
- Anh chị em **HÒA THUẬN, GIÚP ĐỠ LẪN NHAU** (đặc biệt khi đồng cung và
  không gặp hung tinh hoặc Tuế Đà Kỵ)
- Có khả năng có **ANH CHỊ EM KẾT NGHĨA, CHỊ EM NUÔI**
- Hỗ trợ về **TINH THẦN VÀ TÀI CHÍNH** khi cần thiết

⚡ **Trường hợp anh chị em thành đạt:**
- Chính là **QUÝ NHÂN QUAN TRỌNG**
- Mở ra cơ hội lớn cho đương số`,
  },
];
