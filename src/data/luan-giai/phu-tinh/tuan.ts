import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO TUẦN (Tuần Trung Không Vong) - Hỏa, Tùy Tinh.
 *
 * Vị trí:
 *   - Đóng GIỮA 2 CUNG (engine: LaSo.tuan = [Chi1, Chi2])
 *   - Tính theo Can+Chi năm sinh
 *
 * PHẦN CHUNG CỦA CẶP TUẦN-TRIỆT viết tại file `triet.ts` với tag
 * sao: ['Tuần', 'Triệt'].
 *
 * File này chỉ chứa:
 *   - Đặc tính RIÊNG của Tuần
 *   - 11 cung của Tuần (đã có cung Mệnh tại phần Tuần Triệt chung ở triet.ts)
 *   - Một số bộ kết hợp đặc biệt riêng cho Tuần
 *
 * Đặc trưng RIÊNG của Tuần (so với Triệt):
 *   - Tuần = HỎA (em trai dịu hơn Triệt - Kim mạnh bạo)
 *   - Tuần như CHIẾC PHANH XE làm chậm dần
 *   - Càng VỀ GIÀ càng MẠNH, đeo bám đến SUỐT ĐỜI
 *   - Đắc địa Tỵ-Ngọ (tuần Giáp Thân, Giáp Ngọ)
 *   - Khi cư cùng cung tài/điền với di sản tổ tiên thì giữ được nhưng
 *     khó bán
 */
export const luanGiai_Tuan: DoanLuanGiai[] = [
  {
    id: 'tuan-tinh-chat-rieng',
    title: 'Tuần - Đặc tính riêng (Hỏa, dịu hơn Triệt, mạnh về già)',
    sao: ['Tuần'],
    doUuTien: 33,
    tomTat: `**Tuần** (Tuần Trung Không Vong) — phụ tinh **TÙY TINH**, thuộc bộ **TỨ
KHÔNG**.

**Ngũ hành:** **Hỏa**.

⚡ **Đặc tính riêng:**
- Mang tính **CHẬM CHẠP, CẢN TRỞ, TRỐNG RỖNG, HAO HỤT**
- Sự **TRẮC TRỞ, DAI DẲNG**, xoay trở **CHẬM CHẠP**

⚡ **Vai trò 2 mặt:**
- Khi gặp **SÁT BẠI TINH** → **NGĂN CHẶN** ảnh hưởng xấu
- Nhưng cũng **SUY GIẢM SỨC MẠNH** của các **CÁT TINH** đi cùng

⚡ **So sánh với Triệt:**
- Triệt = Kim - **MẠNH BẠO, DỮ DỘI** - bức tường chắn ngang
- **TUẦN = Hỏa - DỊU HƠN** - chiếc phanh xe

⚡ **Hiệu lực theo thời gian:**
- Theo thời gian về lâu dài → ngày càng **MẠNH MẼ HƠN**
- **ĐEO BÁM ĐẾN SUỐT CUỘC ĐỜI**
- Càng VỀ GIÀ càng MẠNH (ngược với Triệt mạnh tuổi trẻ)`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // TUẦN TẠI 11 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'tuan-tai-menh',
    title: 'Tuần tại Mệnh - Tuổi thơ vất vả, lầm lì',
    sao: ['Tuần'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `**Tuần thủ Mệnh** — báo hiệu **TUỔI THƠ VẤT VẢ** và tính cách **LẦM LÌ**.

⚡ **Tuổi thơ:**
- Tuổi thơ **VẤT VẢ**, không được "ăn sung mặc sướng"
- Phải **BÔN BA, LO NGHĨ NHIỀU** ở giai đoạn đầu đời
- "**TUẦN TRIỆT NIÊN ĐẦU, THIẾU NIÊN TÂN KHỔ**"

⚡ **Tính tình:**
- **LẦM LÌ, ÍT NÓI**
- Mọi **BUỒN PHIỀN VÀ KẾ HOẠCH** đều được **CẤT GIỮ KÍN**, không bộc lộ
  ra ngoài

⚠️ **Sự nghiệp:**
- Con đường sự nghiệp, nhân duyên, tài lộc **GIAN NAN, TRẮC TRỞ**
- Đương số tuổi nhỏ gặp khó khăn trong **VIỆC HỌC HÀNH**
- Nếu không được hóa giải thì những cản trở vẫn **ĐEO BÁM** khi lớn lên

⚡ **Mặt "BẢO HỘ" của Tuần:**
- Khi tọa cung có nhiều **SÁT BẠI TINH** (Hỏa Linh, Kình Đà, Hóa Kỵ, Kiếp
  Sát)
- → Giữ vai trò **KÌM HÃM**, không cho tính chất xấu **BỘC PHÁT**

⚡ **Lời khuyên:**
- Chủ động làm việc thiện
- Rèn luyện giao tiếp
- Chú trọng **SỨC KHỎE TINH THẦN**
- Để **GIẢM BỚT TÍNH U SẦU, CÔ LẬP**`,
  },

  {
    id: 'tuan-tai-phu-mau',
    title: 'Tuần tại Phụ Mẫu',
    sao: ['Tuần'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Tuần tại Phụ Mẫu** — cha mẹ **VẤT VẢ**, sức khỏe yếu.

⚠️ **Đặc trưng:**
- Cha mẹ có cuộc sống **VẤT VẢ**
- **SỨC KHỎE YẾU**
- Mối quan hệ giữa cha mẹ và con cái **KHÔNG GẮN KẾT**
- **ÍT SỰ CHIA SẺ**

⚡ **Tuần cư Phụ Mẫu chỉ HẠN CHẾ ảnh hưởng xấu khi:**
- Cung là **VÔ CHÍNH DIỆU**
- Hoặc có **CHÍNH TINH HÃM ĐỊA**

⚡ **Đặc biệt - Nhật Nguyệt LẠC HÃM đồng thời:**
- Tuần có khả năng **NGĂN CẢN** tác động xấu
- Mang lại sự **YÊN ỔN**
- Tuần Triệt + Nhật Nguyệt hãm = **TĂNG SÁNG** cho Âm Dương

⚡ **Người âm dương thuận lý:**
- Tuổi trẻ thường gặp **KHÓ KHĂN, CẢN TRỞ** trên con đường học tập, công
  danh`,
  },

  {
    id: 'tuan-tai-phuc-duc',
    title: 'Tuần tại Phúc Đức',
    sao: ['Tuần'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `**Tuần tại Phúc Đức** — phúc phần tổ tiên **KHÔNG MẠNH**.

⚡ **Đặc trưng:**
- Phúc phần tổ tiên **KHÔNG MẠNH**
- Đương số **KHÓ ĐƯỢC HƯỞNG SẴN PHÚC** của dòng họ
- Tuần Không ở cung Phúc chỉ **HỮU DỤNG** nếu cung này là **VÔ CHÍNH DIỆU**
  hoặc có **CHÍNH TINH HÃM ĐỊA** đi cùng

⚡ **Lời khuyên:**
- Phải **TỰ BỒI ĐẮP PHÚC** bằng **CÁI ĐỨC, CÁI TÂM** của mình
- Tu dưỡng tâm linh, làm việc thiện

⚡ **Tuần cư Phúc:** càng lớn càng **KÉM MAY MẮN**, **ÍT ĐƯỢC TỔ TIÊN PHÙ
TRỢ** (ngược với Triệt - càng già càng được hưởng phúc tự bồi).

⚡ **Tuần cư Phúc - Điền:**
- Nhà cửa thường dễ **CỦA TỔ TIÊN ĐỂ LẠI**
- **KHÓ BÁN ĐƯỢC**
- Chỉ sử dụng được để **Ở VÀ THỜ CÚNG TỔ TIÊN**`,
  },

  {
    id: 'tuan-tai-dien-trach',
    title: 'Tuần tại Điền Trạch',
    sao: ['Tuần'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Tuần tại Điền Trạch** — nhà ở **CUỐI NGÕ, CUỐI HÀNH LANG**, khó hưởng điền
sản.

⚡ **Đặc trưng:**
- Nhà cửa thường ở **CUỐI NGÕ, CUỐI HÀNH LANG CHUNG CƯ**
- Nhà được **VÂY QUANH** bởi tường rào, hàng xóm xung quanh
- **KHÓ TIẾP CẬN**
- Người **LÀM RA CỦA NHƯNG PHẢI CHẬT VẬT**

⚠️ **Tuần cư Phúc - Điền:**
- **KHÔNG ĐƯỢC HƯỞNG DI SẢN** tổ phụ để lại
- Hoặc nhà của tổ tiên để lại nhưng **KHÓ BÁN**
- Chỉ để **Ở VÀ THỜ CÚNG**

⚡ **Tuần cư Điền - Quan:**
- Công việc có thể **TÍCH LŨY ĐƯỢC** của cải, tài sản
- Nhưng hay bị **HAO HỤT, HAO MẤT MỘT PHẦN**
- Càng về già càng **KHÓ TÍCH TỤ**

⚡ **Đặc điểm:** Đương số gặp khó khăn trong việc **THỪA HƯỞNG ĐIỀN SẢN** từ
tổ tiên, thường phải "**TỰ THÂN VẬN ĐỘNG**" mới mua được nhà.`,
  },

  {
    id: 'tuan-tai-quan-loc',
    title: 'Tuần tại Quan Lộc',
    sao: ['Tuần'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `**Tuần tại Quan Lộc** — công danh **LẬN ĐẬN**, thăng tiến chậm.

⚠️ **Đặc trưng:**
- Công danh **LẬN ĐẬN**, thăng tiến **CHẬM**
- Phải chịu **NHIỀU VẤT VẢ** mới có thành tựu
- Công việc **KHÔNG THUẬN LỢI**, "**ĐỂ THÌ BUỒN MÀ CẮT THÌ ĐAU**"

⚠️ **Tuần + Thiên Tướng / Triệt:**
- Dễ bị **SA THẢI, MẤT CHỨC**
- Hoặc gặp **RẮC RỐI CÔNG VỤ**

⚡ **Cung Quan VCD hoặc hội nhiều sát bại tinh** (Kình Đà, Hóa Kỵ):
- Tuần có khả năng **GIÚP GIẢM NHẸ TAI HỌA**
- Nhưng nguyên tắc chung vẫn gây **CẢN TRỞ, CHẬM TRỄ**

⚡ **Tuần cư Quan - Nô:**
- Công việc hay **LIÊN QUAN, DÍNH DÁNG** tới bạn bè đồng nghiệp
- Đôi khi **VÌ HỌ MÀ CÔNG DANH KHÓ LÊN CAO**
- Hay gặp **SỰ CỐ, CẢN TRỞ**`,
  },

  {
    id: 'tuan-tai-no-boc',
    title: 'Tuần tại Nô Bộc',
    sao: ['Tuần'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Tuần tại Nô Bộc** — bạn bè **ÍT THÂN THIẾT**, dễ đổi thay.

⚡ **Đặc trưng:**
- Bạn bè **ÍT THÂN THIẾT, DỄ ĐỔI THAY**
- Khi hoạn nạn, **KHÓ NHẬN ĐƯỢC SỰ GIÚP ĐỠ** của bạn bè, đồng nghiệp
- Về già **CÀNG ÍT KẾT GIAO**
- Chỉ giữ được **VÀI MỐI THÂN TÌNH HIẾM HOI**

⚡ **Tuần cư Nô:**
- Ra ngoài **ÍT BẠN**
- Chỉ chơi thân với **MỘT SỐ NGƯỜI** thôi
- Càng về già càng **ÍT BẠN**`,
  },

  {
    id: 'tuan-tai-thien-di',
    title: 'Tuần tại Thiên Di',
    sao: ['Tuần'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Tuần tại Thiên Di** — **ÍT RA NGOÀI**, khó hòa nhập.

⚡ **Đặc trưng:**
- **ÍT RA NGOÀI**
- Sống **KHÉP KÍN**
- **KHÓ HÒA NHẬP** trong môi trường mới
- Hành trình **ĐI LÀM ĂN XA HAY XUẤT NGOẠI** cũng gặp **TRẮC TRỞ**, phải
  **QUAY VỀ**

⚡ **Tuần cư Nô - Di:**
- Là người **ÍT RA NGOÀI**
- Ra ngoài **ÍT QUAN HỆ, GIAO TIẾP**

⚡ **Cách cục đặc biệt - Tuần đứng cùng Tật:**
- Tuần lại giúp **GIẢM BỚT RỦI RO**
- Đương số **ÍT GẶP TAI VẠ**

⚠️ **Mặt khác:**
- Người đi làm ăn xa thường **KHÔNG ĐƯỢC THUẬN LỢI**
- Hay gặp **CẢN TRỞ, TAI VẠ** ở bên ngoài`,
  },

  {
    id: 'tuan-tai-tat-ach',
    title: 'Tuần tại Tật Ách - Vị trí THUẬN, lá bùa hộ mệnh',
    sao: ['Tuần'],
    cung: ['Tật Ách'],
    doUuTien: 80,
    tomTat: `**Tuần tại Tật Ách** — vị trí **THUẬN** của Tuần, như **LÁ BÙA HỘ MỆNH**.

⚡ **Đặc trưng:**
- Cung **THUẬN** của Tuần
- Giúp **KÌM HÃM, NGĂN CHẶN** bệnh tật
- **GIẢM TAI HỌA**

⚡ **Khác Triệt tại Tật:**
- **Triệt cư Tật:** **ĐÁNH TAN** bệnh tật, tai họa đi
- **TUẦN cư Tật:** **NGĂN CẢN, GIỮ NGUYÊN** không cho bệnh tật hay tai họa
  **PHÁT TRIỂN, TÁI PHÁT**
- Do vậy mà cung Tật vẫn thường **ƯA TRIỆT HƠN** TUẦN

⚡ **Đặc tính:**
- Như "**LÁ BÙA HỘ MỆNH**"
- Giữ bệnh **KHÔNG PHÁT TRIỂN**
- Giúp đương số **TRÁNH ĐƯỢC BIẾN CHỨNG**

⚠️ **Lưu ý:** Chủ mệnh **KHÔNG ĐƯỢC CHỦ QUAN**, vẫn cần chăm lo sức khỏe và
**THĂM KHÁM ĐỊNH KỲ**.`,
  },

  {
    id: 'tuan-tai-tai-bach',
    title: 'Tuần tại Tài Bạch',
    sao: ['Tuần'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Tuần tại Tài Bạch** — tiền bạc **TRẮC TRỞ**, đến rồi lại đi.

⚠️ **Đặc trưng:**
- Tiền bạc **TRẮC TRỞ**
- **ĐẾN RỒI LẠI ĐI**
- **KHÓ GIỮ ĐƯỢC LÂU DÀI**

⚠️ **Hội với Tử Vi, Thiên Phủ, Vũ Khúc:**
- Khả năng **NẮM BẮT CƠ HỘI** tài chính càng **KHÓ KHĂN**
- Phủ phùng Không = kho rỗng

⚡ **Lời khuyên:**
- Tránh **ĐẦU TƯ MẠO HIỂM**
- "**THAM THÌ THÂM**"
- Đặc biệt **CẨN TRỌNG** trong việc **QUẢN LÝ CHI TIÊU**

⚡ **Tuần cư Tài - Tật:**
- Đồng tiền kiếm ra **CHẬM, ÍT**
- Nhưng **HẠN CHẾ** dính tới tai họa, bệnh tật đi cùng`,
  },

  {
    id: 'tuan-tai-tu-tuc',
    title: 'Tuần tại Tử Tức',
    sao: ['Tuần'],
    cung: ['Tử Tức'],
    doUuTien: 78,
    tomTat: `**Tuần tại Tử Tức** — chậm có con, sảy thai, con đầu khó nuôi.

⚠️ **Đặc trưng:**
- Đương số **CHẬM CÓ CON**
- Dễ **SẢY THAI**
- Con đầu **KHÓ NUÔI**
- Hoặc **Ở XA CHA MẸ**

⚡ **Tuần thủ cung Tử Tức:**
- Thường **CHẬM TRỄ CÓ CON**
- Gặp **NHIỀU VẤN ĐỀ NGĂN TRỞ**

⚡ **VCD / chính tinh hãm địa + sát bại tinh:**
- Ảnh hưởng tiêu cực của Tuần được **GIẢM NHẸ**

⚡ **Phá Quân, Thất Sát hãm địa + Không Kiếp + Hỏa Linh:**
- Tuần trở thành **PHƯƠNG TIỆN CỨU CÁNH TÍCH CỰC**
- Giúp chủ mệnh **TRÁNH ĐƯỢC TAI HỌA VÀ XUNG KHẮC**

⚡ **Tuần cư Tử - Phối:**
- **CHẬM VỢ CHẬM CHỒNG**
- Nhưng cưới thường dễ được **CẢ TRÂU LẪN NGHÉ**`,
  },

  {
    id: 'tuan-tai-phu-the',
    title: 'Tuần tại Phu Thê',
    sao: ['Tuần'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `**Tuần tại Phu Thê** — nhân duyên **TRẮC TRỞ**, mối tình đầu thất bại.

⚠️ **Đặc trưng:**
- Nhân duyên **TRẮC TRỞ**
- Mối tình đầu dễ **THẤT BẠI**
- Hôn nhân phải trải qua **GIAN NAN** mới tìm được người phù hợp

⚡ **Cách hóa giải:**
- Lấy người **Ở XA, KHÁC LÀNG, KHÁC TỈNH** mới giảm bớt ảnh hưởng xấu

⚡ **Đặc điểm hôn phối:**
- Bạn đời là người **TRẦM TÍNH, KÍN ĐÁO**

⚠️ **Tuần + Thiên Mã, Thiên Hình hay sát tinh mạnh khác:**
- Cẩn trọng vì dễ phải **LY TÁN, CHIA XA**`,
  },

  {
    id: 'tuan-tai-huynh-de',
    title: 'Tuần tại Huynh Đệ',
    sao: ['Tuần'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Tuần tại Huynh Đệ** — **ÍT ANH CHỊ EM**, gia cảnh vất vả.

⚡ **Đặc trưng:**
- Đương số có **ÍT ANH CHỊ EM**
- Gia cảnh của họ lại gặp **NHIỀU VẤT VẢ**
- Anh cả / chị cả sớm **ĐI XA**
- Hoặc mối quan hệ anh chị em **KHÔNG THÂN THIẾT**, dễ **XUNG KHẮC**

⚡ **VCD + Tuần:**
- Những ảnh hưởng tiêu cực có khả năng được **GIẢM BỚT**
- Cung VCD + Tuần biến thành **MỎ NEO** vững chắc`,
  },
];
