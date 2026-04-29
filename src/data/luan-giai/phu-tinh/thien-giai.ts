import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THIÊN GIẢI - Hỏa, Phúc Thiện Tinh.
 *
 * An theo THÁNG SINH (engine: khởi từ Thân thuận theo tháng sinh).
 *
 * Thiên = TRỜI. Giải = tháo gỡ, phân tán, tiêu trừ.
 * → Thiên Giải = sự trợ giúp của ĐẤT TRỜI, các vị thần linh đến từ trên cao.
 *
 * ⚡ QUY LUẬT ĐẶC BIỆT của cặp Thiên-Địa Giải:
 *   - Địa Giải LUÔN đứng SAU Thiên Giải
 *   - 2 sao KHÔNG bao giờ đồng cung hoặc tam hợp với nhau
 *   - Chỉ có thể NHỊ HỢP tại Tý-Sửu hoặc Ngọ-Mùi
 *   - Như mảnh ghép Âm-Dương → khả năng cứu giải chỉ được MỘT NỬA, không
 *     trọn vẹn như Giải Thần (sao Năm)
 *
 * Phần CHUNG cặp Thiên-Địa Giải đã viết tại file này với
 * sao: ['Thiên Giải', 'Địa Giải'].
 */
export const luanGiai_ThienGiai: DoanLuanGiai[] = [
  {
    id: 'thien-giai-tinh-chat-chung',
    title: 'Thiên Giải - Đặc tính chung',
    sao: ['Thiên Giải'],
    doUuTien: 32,
    tomTat: `**Thiên Giải** — phụ tinh **PHÚC THIỆN TINH**, an theo **tháng sinh**.

**Ngũ hành:** **Hỏa**.

⚡ **Tên gọi:** Thiên = trời, Giải = tháo gỡ → **SỰ TRỢ GIÚP CỦA ĐẤT TRỜI**,
các vị thần linh trên cao đến giúp đỡ.

⚡ **Đặc tính:**
- **Giải ách, may mắn, trừ họa, phúc thọ**
- Là sao **CỨU NGUY, GIẢI TRỪ TAI ÁCH, BỆNH TẬT**
- Gia tăng **PHÚC THỌ**

⚡ **Vai trò trong bộ Tam Giải:**
- Cùng **Địa Giải + Giải Thần** tạo bộ **TAM GIẢI**
- Nhưng vì không bao giờ đồng cung với Địa Giải → khả năng giải chỉ
  được **MỘT NỬA**

⚡ **Khác Địa Giải:** Thiên Giải là sự trợ giúp **TỪ TRỜI**, đặc tính nhẹ
nhàng thanh thoát, người cao ráo trắng hồng — Địa Giải là từ ĐẤT, người
thấp hơi mập.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // PHẦN CHUNG CẶP THIÊN-ĐỊA GIẢI
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-dia-giai-bo-doi-tinh-chat',
    title: 'Bộ Thiên-Địa Giải - Đặc tính chung của cặp đôi',
    sao: ['Thiên Giải', 'Địa Giải'],
    doUuTien: 60,
    tomTat: `**Bộ Thiên Giải + Địa Giải** — **CẶP SAO CỨU GIẢI NHỎ** trong tử vi, an
theo **THÁNG SINH**.

⚡ **Tên gọi & ý nghĩa:**
- **Thiên** = trời / **Địa** = đất → Tam Tài **THIÊN-NHÂN-ĐỊA**
- Đại diện cho **MÔI TRƯỜNG XUNG QUANH, TÁC NHÂN BÊN NGOÀI** ảnh hưởng tới
  con người (Nhân)
- **GIẢI** = tháo gỡ, phân tán, tiêu trừ

⚡ **Bản chất:**
- Sự trợ giúp của **ĐẤT TRỜI, THẦN LINH, THỔ ĐỊA** đến với con người
- Chủ về **CỨU NGUY, GIẢI TRỪ TAI ÁCH, BỆNH TẬT**
- Gia tăng **PHÚC THỌ**

⚡ **Đặc tính:**
- Khoan hòa, đức độ, thuần hậu
- Lòng nhân ái, từ thiện, hay giúp đỡ người
- Tương tự như **Thiên Quan Quý Nhân + Thiên Phúc Quý Nhân** nhưng nhẹ hơn

⚡ **HAI MẶT - chú ý:**
- ✅ **Tích cực:** Cứu nguy, giải tai ách, bệnh tật
- ⚠️ **Tiêu cực:** Khi vào **Tài Bạch, Điền Trạch, Phúc Đức** → làm
  **PHÂN TÁN, HAO HỤT** của cải, nhưng KHÔNG đến mức bần cùng`,
  },

  {
    id: 'thien-dia-giai-quy-luat-khong-dong-cung',
    title: 'Quy luật KHÔNG đồng cung - chỉ nhị hợp Tý/Sửu Ngọ/Mùi',
    sao: ['Thiên Giải', 'Địa Giải'],
    doUuTien: 65,
    tomTat: `**Quy luật ĐẶC BIỆT** của cặp Thiên-Địa Giải:

⚡ **Địa Giải LUÔN đứng SAU Thiên Giải:**
- Hai sao **KHÔNG BAO GIỜ ĐỒNG CUNG**
- **KHÔNG BAO GIỜ TAM HỢP** với nhau
- Chỉ có thể **NHỊ HỢP** tại các cặp:
  - **Tý - Sửu** (Thiên Giải Tý, Địa Giải Sửu hoặc ngược lại)
  - **Ngọ - Mùi** (Thiên Giải Ngọ, Địa Giải Mùi hoặc ngược lại)

⚡ **Hệ quả - khả năng cứu giải CHỈ MỘT NỬA:**
- Như mảnh ghép **ÂM-DƯƠNG**, mỗi sao chỉ là **một nửa của bộ**
- KHÔNG thể hội tụ → khả năng cứu nạn, giải ách chỉ được **MỘT NỬA**
- Không trọn vẹn, không mạnh mẽ như **GIẢI THẦN** (sao Năm trong Tam Giải)

⚡ **Ví dụ thực tế:** Hạn xấu gặp Thiên Giải hay Địa Giải:
- Có thể **MAY MẮN GẶP THẦY THUỐC, NGƯỜI CỨU GIÚP** thoát tai vạ
- Nhưng vẫn phải **TỔN HAO SỨC LỰC VÀ TIỀN BẠC**
- Vẫn còn hơn không có sự cứu giúp nào`,
  },

  {
    id: 'thien-dia-giai-phan-biet',
    title: 'Phân biệt Thiên Giải (trời) vs Địa Giải (đất)',
    sao: ['Thiên Giải', 'Địa Giải'],
    doUuTien: 50,
    tomTat: `**Phân biệt vai trò Thiên Giải vs Địa Giải** trong cặp đôi:

⚡ **THIÊN GIẢI** — Hỏa — sự trợ giúp **TỪ TRỜI**:
- Tướng mạo **CAO RÁO, TRẮNG HỒNG**, thanh tú nhẹ nhàng
- Trợ giúp đến từ **ĐẤNG LINH THIÊNG TRÊN CAO**
- Phong cách giải nguy **NHẸ NHÀNG**, may mắn bất ngờ

⚡ **ĐỊA GIẢI** — Thổ — sự trợ giúp **TỪ ĐẤT**:
- Tướng mạo **THẤP NGƯỜI, HƠI MẬP**, hiền lành dễ gần
- Trợ giúp đến từ **THẦN LINH, THỔ CÔNG, THỔ ĐỊA** — môi trường gần gũi
- Hợp với **PHƯƠNG PHÁP CHỮA TRỊ TỰ NHIÊN**, năng lượng từ môi trường lành mạnh
- Tinh thần dễ **GIAO THOA VỚI ĐẤT**, cảm nhận năng lượng tích cực/tiêu cực

⚡ **Khi nhị hợp tại Tý/Sửu hoặc Ngọ/Mùi** → cả hai mặt được kết hợp tốt nhất
có thể (vì không thể đồng cung).`,
  },

  {
    id: 'thien-dia-giai-tam-giai',
    title: 'Bộ Tam Giải - Thiên Giải + Địa Giải + Giải Thần',
    sao: ['Thiên Giải', 'Địa Giải'],
    ketHop: ['Giải Thần'],
    doUuTien: 55,
    tomTat: `**Bộ TAM GIẢI** — 3 sao mang tên "Giải" trong tử vi:

⚡ **THIÊN GIẢI** — Hỏa — an theo **THÁNG SINH** — sự trợ giúp từ trời
⚡ **ĐỊA GIẢI** — Thổ — an theo **THÁNG SINH** — sự trợ giúp từ đất
⚡ **GIẢI THẦN** — an theo **NĂM SINH** — luôn đồng cung Phượng Các (engine
  hardcode) — sự trợ giúp **MẠNH NHẤT**

⚡ **So sánh:**
- Giải Thần (sao Năm) → giải hoàn chỉnh, mạnh mẽ
- Thiên Giải, Địa Giải (sao Tháng) → giải nhỏ, chỉ một nửa do không đồng cung

⚡ **Khi đủ TAM GIẢI hội tụ** → khả năng giải họa **MẠNH MẼ NHẤT**, đặc biệt
khi có thêm Tử Vi tinh, Quang Quý, Quan Phúc, Hóa Khoa.`,
  },

  {
    id: 'thien-dia-giai-tai-tat-khong-don-thu',
    title: 'Thiên-Địa Giải tại Tật cần sao phúc thiện hội chiếu',
    sao: ['Thiên Giải', 'Địa Giải'],
    cung: ['Tật Ách'],
    doUuTien: 70,
    tomTat: `**Thiên Giải hoặc Địa Giải đơn thủ tại Tật Ách** — khả năng cứu giải
**CHỈ Ở MỨC GIẢM NHẸ**, không trọn vẹn.

⚡ **Để phát huy mạnh, cần các sao phúc thiện hội chiếu:**
- **Tử Vi tinh** (Tử Vi đắc địa)
- **Quang Quý** (Ân Quang + Thiên Quý)
- **Quan Phúc** (Thiên Quan + Thiên Phúc)
- **Giải Thần** (sao Năm - hoàn thiện bộ Tam Giải)
- **Hóa Khoa** (Đệ Nhất Giải Thần)

⚡ **Khi có đủ:**
- **Bệnh tật được giải trừ TRIỆT ĐỂ**
- Đau ốm gặp **THẦY HAY, THUỐC GIỎI** kịp thời
- "GẶP DỮ HÓA LÀNH"

⚡ **Nếu thiếu sao phúc thiện đi cùng:** Thiên-Địa Giải đơn thủ chỉ làm
**GIẢM NHẸ** bệnh tật chứ không hết hoàn toàn.`,
  },

  {
    id: 'thien-dia-giai-tai-dien-khong-tho',
    title: 'Thiên-Địa Giải tại Điền - KHÔNG nên lập bàn thờ thần linh',
    sao: ['Thiên Giải', 'Địa Giải'],
    cung: ['Điền Trạch'],
    doUuTien: 65,
    tomTat: `**Thiên Giải / Địa Giải tại Điền Trạch** — **KHÔNG ƯA** cung này, làm
**HAO TÁN, GIẢM BỚT** của cải, nhà đất.

⚡ **Mức độ:** Phân tán nhẹ, KHÔNG đến mức gây khó khăn cản trở cuộc sống,
KHÔNG nợ nần chất chồng.

⚡ **LƯU Ý ĐẶC BIỆT - quan trọng:**
- **KHÔNG NÊN LẬP BÀN THỜ THẦN LINH, THỔ ĐỊA** tại nơi ở, cửa hàng
- Vì Thiên-Địa Giải đã có sẵn năng lượng "phân tán" → nếu lập thêm bàn thờ
  thần linh thổ địa sẽ làm **HAO TÁN MẤT THÊM** của cải

⚡ **Mặt tích cực:**
- Việc tích lũy bị ảnh hưởng nhưng ít vướng cảnh "nợ nần chất chồng"
- Không có gánh nặng về nhà cửa, chỗ ở
- Đôi khi tính tán này lại giúp **LỌC BỚT NĂNG LƯỢNG XẤU** trong nơi ở,
  "có tán mới có tụ"`,
  },

  {
    id: 'thien-dia-giai-cua-di-thay-nguoi',
    title: 'Thiên-Địa Giải - Của đi thay người',
    sao: ['Thiên Giải', 'Địa Giải'],
    doUuTien: 55,
    tomTat: `**Thiên-Địa Giải - Đặc tính "CỦA ĐI THAY NGƯỜI"** (đặc biệt khi vào hạn
hoặc cung Tài/Phúc).

⚡ **Cơ chế hoạt động:**
- Khi gặp tai họa, bệnh tật → có thể **MẤT TIỀN ĐỂ GIẢI TRỪ**
- Đặc tính "phân tán" của Giải tinh = phương tiện hóa giải
- Mất tiền **TRÁNH ĐƯỢC HỌA** → "của đi thay người"

⚡ **Ý nghĩa thực tế:**
- Phàm là những thứ tiêu tốn tiền bạc để hóa giải → cách **ĐƠN GIẢN NHẤT,
  THUẬN TIỆN NHẤT**
- Có những thứ có tiền cũng không mua được, không giải quyết được
- → Khi có Thiên-Địa Giải vào hạn, **KHÔNG NÊN TIẾC TIỀN** để giải quyết
  rắc rối

⚡ **Lời khuyên:** Người có Thiên-Địa Giải ở Tài Bạch nên **CHI TIỀN LÀM
PHÚC, TỪ THIỆN, CỨU NGƯỜI** — vừa phù hợp đặc tính sao, vừa gieo phước cho
sau này.`,
  },

  {
    id: 'thien-dia-giai-vao-han',
    title: 'Thiên-Địa Giải vào hạn - Hai mặt cần lưu ý',
    sao: ['Thiên Giải', 'Địa Giải'],
    doUuTien: 50,
    tomTat: `**Thiên-Địa Giải vào hạn** — hai mặt rõ rệt.

⚡ **Mặt tích cực - HÓA GIẢI TAI ƯƠNG:**
- Giải trừ bớt **TAI ÁCH, BỆNH TẬT**
- Đang gặp bệnh có cơ hội **CHỮA KHỎI**
- Gặp khó khăn sẽ có **NGƯỜI TƯƠNG TRỢ**
- "Họa lớn hóa nhỏ, họa nhỏ hóa không"

⚡ **Mặt cảnh báo - HAO TỔN TIỀN BẠC:**
- Đi cùng may mắn thường là sự **HAO TỔN TIỀN BẠC, CỦA CẢI**
- Của đi thay người
- Càng đúng khi cung Hạn rơi vào **TÀI BẠCH, PHÚC ĐỨC**

⚡ **Yếu tố MÔI TRƯỜNG quan trọng:**
- Nếu sống ở nơi **TÍCH CỰC**, có người giúp đỡ, có thuốc tốt → bệnh tình
  dễ hóa giải
- Nếu xung quanh **TIÊU CỰC**, thiếu lực hỗ trợ → Thiên-Địa Giải cũng không
  thể cứu giúp
- **CHỦ ĐỘNG NẮM BẮT THỜI CƠ**, tận dụng nguồn lực bên ngoài
- Không nên "há miệng chờ sung"`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // THIÊN GIẢI TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-giai-tai-menh',
    title: 'Thiên Giải tại Mệnh',
    sao: ['Thiên Giải'],
    cung: ['Mệnh'],
    doUuTien: 76,
    tomTat: `**Thiên Giải thủ Mệnh** — phẩm chất tốt đẹp của một **PHÚC TINH**.

⚡ **Tướng mạo:**
- Thanh tú, **NHẸ NHÀNG**
- Dáng người **CAO RÁO**
- Làn da **TRẮNG HỒNG**

⚡ **Tính tình:**
- **Đức độ, khoan hòa, thuần hậu**
- Giàu **LÒNG NHÂN ÁI, TỪ BI**
- Luôn sẵn sàng **GIÚP ĐỠ NGƯỜI KHÁC** khi gặp khó khăn
- Tương tự như **Thiên Quan Quý Nhân, Thiên Phúc Quý Nhân**

⚡ **Phúc thọ:**
- **GIẢI TRỪ BỆNH TẬT, TAI HỌA**
- Tránh được hoặc giảm nhẹ rủi ro
- Hưởng phúc thọ, hay gặp **MAY MẮN BẤT NGỜ**

⚠️ **Hạn chế:** Năng lực cứu giải **KHÔNG TRỌN VẸN** (do quy luật không
đồng cung Địa Giải) → khi gặp hoàn cảnh quá xấu, vẫn phải chịu một phần
ảnh hưởng tiêu cực.`,
  },

  {
    id: 'thien-giai-tai-phu-mau',
    title: 'Thiên Giải tại Phụ Mẫu',
    sao: ['Thiên Giải'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Thiên Giải tại Phụ Mẫu** — điềm lành cho cha mẹ, **TĂNG TUỔI THỌ** và gặp
nhiều **MAY MẮN**.

⚡ **Đặc trưng:**
- Cha mẹ **DUNG MẠO ĐẸP**
- Tính tình **ÔN HÒA, THANH CAO**
- Có **ĐIỀU KIỆN KINH TẾ, ĐIỀN SẢN**
- Hay **LÀM VIỆC THIỆN**

⚡ Hưởng phúc lộc cha mẹ để lại từ tài chính lẫn âm đức.`,
  },

  {
    id: 'thien-giai-tai-phuc-duc',
    title: 'Thiên Giải tại Phúc Đức',
    sao: ['Thiên Giải'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `**Thiên Giải tại Phúc Đức** — dòng họ nhiều người **HIỀN LÀNH, NHÂN HẬU**,
hay giúp đỡ lẫn nhau.

⚡ **Đặc trưng:**
- Mồ mả tổ tiên **YÊN ỔN**
- Nhiều người đã **SIÊU THOÁT**, không còn vấn vương, tái sinh cuộc sống khác

⚡ **Lưu ý đặc biệt - LY TÁN:**
- Con cháu trong dòng họ thường có xu hướng **LY TÁN**
- **MỖI NGƯỜI MỘT NƠI, MỖI NGƯỜI MỘT XỨ**, không ở gần nhau
- Đây là đặc tính "phân tán" của Giải tinh thể hiện trên dòng họ`,
  },

  {
    id: 'thien-giai-tai-dien-trach',
    title: 'Thiên Giải tại Điền Trạch',
    sao: ['Thiên Giải'],
    cung: ['Điền Trạch'],
    doUuTien: 70,
    tomTat: `**Thiên Giải tại Điền Trạch** — **KHÔNG ĐẮC ĐỊA**.

⚡ **Đặc tính phân tán:**
- Dễ làm **HAO HỤT, GIẢM BỚT** của cải, nhà đất
- Mức độ **KHÔNG NỖI** gây khó khăn

⚡ **Điểm sáng:**
- Việc tích lũy tài sản bị ảnh hưởng
- Nhưng ÍT KHI vướng cảnh **"NỢ NẦN CHẤT CHỒNG"**
- Không có gánh nặng về nhà cửa, chỗ ở

⚡ **LƯU Ý:** Không nên lập **BÀN THỜ THẦN LINH, THỔ ĐỊA** tại nơi ở, cửa
hàng — dễ làm hao tán thêm.`,
  },

  {
    id: 'thien-giai-tai-quan-loc',
    title: 'Thiên Giải tại Quan Lộc',
    sao: ['Thiên Giải'],
    cung: ['Quan Lộc'],
    doUuTien: 75,
    tomTat: `**Thiên Giải tại Quan Lộc** — **MAY MẮN, THUẬN LỢI** trên con đường công danh.

⚡ **Đặc trưng:**
- Được người khác **GIÚP ĐỠ** trong công việc
- Dễ dàng vượt qua khó khăn
- Việc **THI CỬ, CẦU CHỨC VỤ** hanh thông
- Gia tăng cơ hội **CẦU BẰNG KHEN, BỔ NHIỆM**

⚡ **Tính cách trong công việc:**
- **CÔNG TÂM**, có tinh thần **XÂY DỰNG**
- Được nhiều người **NỂ TRỌNG, QUÝ MẾN**

⚡ **Hợp nghề - tính từ thiện:**
- **THẦY THUỐC, BÁC SĨ**
- **GIÁO VIÊN**
- Các nghề **CỨU NGƯỜI, GIÚP NGƯỜI**`,
  },

  {
    id: 'thien-giai-tai-no-boc',
    title: 'Thiên Giải tại Nô Bộc',
    sao: ['Thiên Giải'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Thiên Giải tại Nô Bộc** — bạn bè **TỐT TÍNH, HIỀN LƯƠNG, THẬT THÀ**.

⚡ **Đặc trưng:**
- Hay được bạn bè **GIÚP ĐỠ**, đem đến **MAY MẮN VÀ TIỀN BẠC**
- Bạn bè **ĐẮC LỰC**
- Sẵn sàng tương trợ giúp đỡ trong lúc **HOẠN NẠN, KHÓ KHĂN**`,
  },

  {
    id: 'thien-giai-tai-thien-di',
    title: 'Thiên Giải tại Thiên Di - HỢP CÁCH',
    sao: ['Thiên Giải'],
    cung: ['Thiên Di'],
    doUuTien: 78,
    tomTat: `**Thiên Giải thủ Thiên Di** — **VỊ TRÍ RẤT TỐT**.

⚡ **Đặc trưng:**
- Ra ngoài, **ĐI XA** hay gặp **MAY MẮN**
- Được **QUÝ NHÂN PHÙ TRỢ**
- Giúp đỡ vượt qua **HIỂM NGUY, TAI HỌA**
- Thoát nạn dễ dàng`,
  },

  {
    id: 'thien-giai-tai-tat-ach',
    title: 'Thiên Giải tại Tật Ách - HỢP CÁCH NHẤT',
    sao: ['Thiên Giải'],
    cung: ['Tật Ách'],
    doUuTien: 80,
    tomTat: `**Thiên Giải thủ Tật Ách** — **VỊ TRÍ HỢP CÁCH NHẤT**, phát huy tác dụng
mạnh mẽ nhất.

⚡ **Đặc trưng:**
- Giúp **GIẢI TRỪ BỆNH TẬT VÀ TAI HỌA**
- Khi đau ốm dễ gặp được **THẦY HAY, THUỐC GIỎI** cứu chữa kịp thời

⚠️ **Lưu ý quan trọng:**
- Nếu chỉ có một mình Thiên Giải **ĐƠN THỦ** (không có sao phúc thiện khác
  hội chiếu) → khả năng cứu giải chỉ ở mức **GIẢM NHẸ** bệnh tật
- Cần thêm: Tử Vi tinh, **QUANG QUÝ, QUAN PHÚC, GIẢI THẦN, HÓA KHOA** hội
  chiếu → mới phát huy hết khả năng`,
  },

  {
    id: 'thien-giai-tai-tai-bach',
    title: 'Thiên Giải tại Tài Bạch',
    sao: ['Thiên Giải'],
    cung: ['Tài Bạch'],
    doUuTien: 70,
    tomTat: `**Thiên Giải tại Tài Bạch** — **KHÔNG ƯA**, làm **HAO TÁN TIỀN BẠC**.

⚡ **Đặc trưng:**
- Sự hao hụt **KHÔNG ĐẾN MỨC** lâm vào cảnh nghèo khổ
- Tiền vào nhiều nhưng cũng đi nhiều

⚡ **Tính cách về tiền bạc:**
- Rất **CÔNG TÂM, MINH BẠCH**
- "Tiền bạc phân minh"
- Chỉ kiếm những đồng tiền **TRONG SẠCH, THANH CAO**

⚡ **Cách dùng tiền:**
- Hay chi tiền cho **HOẠT ĐỘNG TỪ THIỆN**, giúp đỡ người khác
- Dùng tiền để **GIẢI TRỪ TAI HỌA, BỆNH TẬT**
- Có khả năng dùng tiền hóa giải vận xấu - "của đi thay người"

⚡ **Điểm sáng:** Ít khi phải trăn trở về vấn đề tài chính, tính phân tán
là yếu tố cứu giải khi gặp khó khăn.`,
  },

  {
    id: 'thien-giai-tai-tu-tuc',
    title: 'Thiên Giải tại Tử Tức',
    sao: ['Thiên Giải'],
    cung: ['Tử Tức'],
    doUuTien: 76,
    tomTat: `**Thiên Giải tại Tử Tức** — **THUẬN LỢI** đường con cái.

⚡ **Đặc trưng:**
- **DỄ SINH CON**
- Con cái sinh ra **XINH ĐẸP, KHỎE MẠNH, DỄ NUÔI**
- Đặc biệt **DỄ SINH QUÝ TỬ**

⚡ **Tính cách con cái:**
- **THÔNG MINH, HIỀN LÀNH, HIẾU THẢO**
- Hay được gặp **MAY MẮN** trong cuộc sống
- **NGHE LỜI** mẹ cha`,
  },

  {
    id: 'thien-giai-tai-phu-the',
    title: 'Thiên Giải tại Phu Thê',
    sao: ['Thiên Giải'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `**Thiên Giải tại Phu Thê** — dấu hiệu của một **HÔN NHÂN TỐT ĐẸP**.

⚡ **Đặc trưng:**
- Vợ chồng **HÒA HỢP, "XỨNG ĐÔI VỪA LỨA"**
- Quá trình **CƯỚI XIN DỄ DÀNG, SUÔN SẺ**

⚡ **Người hôn phối:**
- **THANH CAO, TỐT TÍNH**
- Thích **LÀM VIỆC THIỆN**
- Được hưởng nhiều **MAY MẮN**

⚠️ **Cảnh báo nhỏ:**
- Vợ chồng tính khí có thể **THẤT THƯỜNG**
- "Sớm nắng chiều mưa, giữa trưa phập phù"
- Cần biết nhường nhịn, chia sẻ`,
  },

  {
    id: 'thien-giai-tai-huynh-de',
    title: 'Thiên Giải tại Huynh Đệ',
    sao: ['Thiên Giải'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Thiên Giải tại Huynh Đệ** — anh chị em **HIỀN LÀNH, TỐT BỤNG**.

⚡ **Đặc trưng:**
- Sống **HÒA THUẬN**
- Hay **GIÚP ĐỠ LẪN NHAU**
- Thường gặp **MAY MẮN**
- Bệnh tật, tai họa trong cuộc sống được **GIẢM TRỪ**`,
  },
];
