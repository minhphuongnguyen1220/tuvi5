import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO DƯỠNG - Mộc.
 *
 * Vị trí THỨ 12 (CUỐI) trong Vòng Trường Sinh 12 sao:
 * Trường Sinh: Mộc Dục: Quan Đới: Lâm Quan: Đế Vượng: Suy
 * Bệnh: Tử: Mộ: Tuyệt: Thai: DƯỠNG
 *
 * An theo CỤC. Sao KẾT THÚC vòng Trường Sinh.
 *
 * Đặc trưng:
 * - Sau khi đã kết "Thai" rồi thì phải NUÔI DƯỠNG, QUAN TÂM chờ thành người
 * - CHĂM SÓC, NUÔI DƯỠNG, CẨN THẬN, CẦN CÙ, DUY TRÌ
 * - Đặc điểm tên gọi: TÊN CÚNG CƠM, BIỆT DANH, BIỆT HIỆU, THAY ĐỔI TÊN HỌ
 * - Người được ĐỠ ĐẦU, được nhiều người chăm sóc
 * - Đương số cũng thích chăm sóc người khác (cây, súc vật, người)
 * - Hậu vận: ĐÔNG CON ĐÔNG CHÁU khi Thân có sao Dưỡng
 */
export const luanGiai_Duong: DoanLuanGiai[] = [
  {
    id: 'duong-tinh-chat-chung',
    title: 'Dưỡng - Đặc tính chung',
    sao: ['Dưỡng'],
    doUuTien: 33,
    tomTat: `**Dưỡng** — phụ tinh **CÁT THIỆN TINH**, vị trí **THỨ 12 (CUỐI)** vòng Trường
Sinh.

**Ngũ hành:** **Mộc**.

**Đặc tính:**
- **CHĂM SÓC, NUÔI DƯỠNG**
- **CẨN THẬN, CẦN CÙ, DUY TRÌ**
- Sau khi kết **THAI**: phải **NUÔI DƯỠNG, QUAN TÂM** chờ ngày thành người

**Vai trò:**
- Sao **KẾT THÚC VÒNG TRƯỜNG SINH**
- Là giai đoạn **ƯƠM TRỒNG** sau khi mầm sống đã hình thành
- Tích hợp tinh thần **BẢO BỌC, NHÂN HẬU**

**Đặc điểm tên gọi:**
- Người có **TÊN RIÊNG, TÊN ĐẶC BIỆT**
- **TÊN CÚNG CƠM**
- **BIỆT DANH, BIỆT HIỆU**
- Có sự **THAY ĐỔI TÊN HỌ**
- Phản ánh sự **TÁI SINH, ĐỔI VẬN** hoặc được nuôi nấng bảo bọc`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP TỐT
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'duong-quang-quy-quan-phuc-ta-huu-quy-trong',
    title: 'Dưỡng + Quang Quý + Quan Phúc + Tả Hữu - Khéo léo được quý trọng',
    sao: ['Dưỡng'],
    ketHop: ['Ân Quang', 'Thiên Quý', 'Thiên Quan', 'Thiên Phúc', 'Tả Phù', 'Hữu Bật'],
    doUuTien: 65,
    tomTat: `**Dưỡng + Quang Quý + Quan Phúc + Tả Hữu** — người **KHÉO LÉO**, hay quan tâm
chăm sóc, **ĐƯỢC MỌI NGƯỜI QUÝ TRỌNG**.

**Đặc trưng:**
- Người **KHÉO LÉO, ĐỨC ĐỘ**
- Hay quan tâm chăm sóc mọi người
- Đi đến đâu cũng **ĐƯỢC MỌI NGƯỜI QUÝ TRỌNG**
- Được **GIÚP ĐỠ HẾT LÒNG**

**Phân tích:**
- **Quang Quý** = phúc tinh, đấng linh thiêng giúp đỡ
- **Quan Phúc** = phúc thiện thiên ban
- **Tả Hữu** = quý nhân người đời nâng đỡ
- **Dưỡng** = chăm sóc nuôi dưỡng: cộng hưởng đẹp`,
  },

  {
    id: 'duong-hy-than-tu-tuc-quy-tu',
    title: 'Dưỡng + Hỷ Thần / Thiên Hỷ tại Tử Tức - Sinh con quý tử',
    sao: ['Dưỡng'],
    cung: ['Tử Tức'],
    ketHop: ['Hỷ Thần', 'Thiên Hỷ'],
    doUuTien: 65,
    tomTat: `**Dưỡng + Hỷ Thần / Thiên Hỷ tại Tử Tức** — câu phú "**Dưỡng Hỷ lâm ư Tử
Tức tất sanh con quý tử**".

**Đặc trưng:**
- **SINH CON QUÝ TỬ**
- Con cái **HIẾU THẢO**, **DỄ NUÔI**
- Là điềm **ĐẠI CÁT** cho cung Tử Tức
- Bộ Dưỡng + Hỷ = nuôi dưỡng + hỷ sự = quý tử`,
  },

  {
    id: 'duong-thanh-long-long-tri-quy-toc',
    title: 'Dưỡng + Thanh Long + Long Trì - Nuôi dưỡng quý tộc',
    sao: ['Dưỡng'],
    ketHop: ['Thanh Long', 'Long Trì'],
    doUuTien: 55,
    tomTat: `**Dưỡng + Thanh Long + Long Trì** — gia tăng **SỰ SANG TRỌNG**, nuôi dưỡng
mang tính chất **QUÝ TỘC, CAO SANG**.

**Đặc trưng:**
- Sự nuôi dưỡng mang tính **QUÝ TỘC, CAO SANG**
- Người được **ĐỠ ĐẦU BỞI NGƯỜI QUYỀN QUÝ**
- Hợp các nghề **PHỤC VỤ TẦNG LỚP THƯỢNG LƯU**
- Hoặc nhận **CON ĐỠ ĐẦU CỦA NHÀ QUYỀN QUÝ**`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP XẤU
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'duong-khoc-hu-sat-con',
    title: 'Dưỡng + Khốc Hư - Sát con dễ sẩy thai',
    sao: ['Dưỡng'],
    ketHop: ['Thiên Khốc', 'Thiên Hư'],
    doUuTien: 55,
    tomTat: `**Dưỡng + Khốc Hư** — **SÁT CON, DỄ SẨY THAI**.

**Đặc trưng:**
- **SÁT CON**
- Đặc biệt **DỄ SẨY THAI**
- Cần đề phòng chuyện **CON CÁI KHÓ NUÔI**
- **SỨC KHỎE KÉM**

**Hóa giải:** cần Tứ Đức, Quan Phúc, Hỷ Thần để cải vận.`,
  },

  {
    id: 'duong-tuong-suy-toi-to-giup-viec',
    title: 'Dưỡng + Thiên Tướng + Suy tại Thiên Di - Làm tôi tớ giúp việc',
    sao: ['Dưỡng'],
    ketHop: ['Thiên Tướng', 'Suy'],
    cung: ['Thiên Di'],
    doUuTien: 55,
    tomTat: `**Dưỡng + Thiên Tướng + Suy tại Thiên Di** — dễ làm **TÔI TỚ, GIÚP VIỆC**
nhà quyền môn.

**Đặc trưng:**
- Đương số dễ làm **TÔI TỚ, GIÚP VIỆC**
- Vào nhà **QUYỀN MÔN** (gia đình quyền quý)
- Phục vụ trong môi trường quyền quý
- Gần gũi với **TẦNG LỚP CAO SANG**

**Đặc tính:** Đối với người tốt thì là cơ hội học hỏi, đối với người kém
thì thành nghề **PHỤC DỊCH**.`,
  },

  {
    id: 'duong-bai-tinh-tuong-quan-benh-phu-vat-va-phuc-vu',
    title: 'Dưỡng + Tướng Quân + Bệnh Phù - Vất vả phục vụ',
    sao: ['Dưỡng'],
    ketHop: ['Tướng Quân', 'Bệnh Phù'],
    doUuTien: 55,
    tomTat: `**Dưỡng + Tướng Quân + Bệnh Phù** — đương số dễ rơi vào cảnh **VẤT VẢ
PHỤC VỤ** không được ghi nhận.

**Đặc trưng:**
- Phải làm **TÔI TỚ, NGƯỜI GIÚP VIỆC**
- Vất vả **PHỤC VỤ NHÀ QUYỀN QUÝ**
- Sát tinh hãm địa làm **TÍNH CHĂM SÓC** trở nên **MỆT MỎI**
- Biến thành **GÁNH NẶNG** lo toan cho người khác
- **KHÔNG ĐƯỢC GHI NHẬN**`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // DƯỠNG TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'duong-tai-menh',
    title: 'Dưỡng tại Mệnh',
    sao: ['Dưỡng'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `**Dưỡng thủ Mệnh** — người **CẦN CÙ, CHẮC CHẮN**, giàu lòng nhân ái.

**Tính cách:**
- Bản chất **CẦN CÙ, NHẪN NẠI, BỀN CHÍ**
- Không phải kiểu người **BỘC PHÁT** hay hấp tấp
- Làm gì cũng **CHẬM RÃI, CHẮC CHẮN**
- Dù gặp khó khăn vẫn **KIÊN TRÌ THEO ĐUỔI MỤC TIÊU**
- Như người **GIEO MẦM** rồi ngày ngày chăm bón chờ cây ra trái
- **GIÀU LÒNG TRẮC ẨN**, dễ rung động trước nỗi khổ của người khác
- Không chỉ thương người, còn **YÊU CÂY CỎ, ĐỘNG VẬT**
- Thích **CHĂM SÓC, CHE CHỞ VÀ NUÔI DƯỠNG**

**Sức khỏe:**
- Sức khỏe **KHÔNG ĐƯỢC TỐT**
- **YẾU ỚT**, hay dễ mắc **BỆNH TẬT, TAI HỌA**
- Lúc nhỏ hoặc khi bước vào chu kỳ mới của cuộc đời thường có **SỨC KHỎE
  YẾU**, dễ đau ốm vặt
- Như **CÂY NON**, phải được chăm sóc kỹ lưỡng

**Đặc trưng đặc biệt:**
- Có **TÊN CÚNG CƠM, BIỆT DANH RIÊNG**
- Hoặc từng **ĐỔI TÊN** trong đời
- Phản ánh sự **TÁI SINH, ĐỔI VẬN**
- Được **ĐỠ ĐẦU**: mỗi khi bệnh tật / hoạn nạn, có người **KỊP THỜI GIÚP
  ĐỠ**

**Đối nhân xử thế:**
- Là người **DỄ NUÔI CON VÀ NUÔI SÚC VẬT**
- Thích **QUAN TÂM CHĂM SÓC** mọi người xung quanh
- Là người **BIẾT QUAN TÂM, CHĂM SÓC BẢN THÂN, YÊU ĐỜI**

**Hậu vận:** về già **ĐÔNG CON, ĐÔNG CHÁU**, được **QUAN TÂM CHĂM LO** khi về già.`,
  },

  {
    id: 'duong-tai-menh-su-nghiep-y-te',
    title: 'Dưỡng tại Mệnh - Sự nghiệp gắn với chăm sóc y tế',
    sao: ['Dưỡng'],
    cung: ['Mệnh'],
    doUuTien: 60,
    tomTat: `**Dưỡng tại Mệnh** — sự nghiệp gắn liền với **CHĂM SÓC, Y TẾ**.

**Đặc trưng nghề nghiệp:**
- Hợp các lĩnh vực **PHỤC VỤ VÀ CHĂM SÓC**
- Làm việc bằng **CÁI TÂM** hơn là cái lợi
- Sẵn sàng **HY SINH THỜI GIAN VÀ CÔNG SỨC** cho người khác
- Được **CẤP TRÊN, KHÁCH HÀNG, ĐỒNG NGHIỆP TIN TƯỞNG** lâu dài

**Sao Dưỡng + Quang, Quý, Quan, Phúc:**
- Con đường sự nghiệp càng **SÁNG**
- Có duyên với:
  - **Y TẾ, GIÁO DỤC**
  - **CHĂM SÓC CỘNG ĐỒNG**
  - **MÔI TRƯỜNG, THÚ Y**
  - Công việc **NUÔI DƯỠNG, CHỮA LÀNH**

**Hướng phát triển:**
- Không bùng nổ nhanh nhưng **TIẾN LÊN VỮNG CHẮC**
- Càng về sau càng **CÓ VỊ TRÍ ỔN ĐỊNH**
- "**TÍCH TIỂU THÀNH ĐẠI**"`,
  },

  {
    id: 'duong-tai-menh-hon-nhan-am-ap',
    title: 'Dưỡng tại Mệnh - Hôn nhân ấm áp hy sinh',
    sao: ['Dưỡng'],
    cung: ['Mệnh'],
    doUuTien: 58,
    tomTat: `**Dưỡng tại Mệnh** — hôn nhân **ẤM ÁP, HY SINH VÌ NHAU**.

**Đặc trưng:**
- Mẫu **BẠN ĐỜI HẾT MỰC CHU ĐÁO**
- Quan tâm từ **BỮA ĂN, GIẤC NGỦ ĐẾN TÂM TRẠNG** của người mình yêu
- Luôn muốn **CHĂM LO VÀ BẢO VỆ** đối phương
- Gia đình mang màu sắc **ẤM ÁP**, nhiều **HY SINH THẦM LẶNG**

**Mối quan hệ đặc biệt:**
- Dễ rơi vào những mối quan hệ đặc biệt:
  - **NUÔI CON RIÊNG** của vợ / chồng
  - **NHẬN CON NUÔI**
  - Gắn bó với **ANH CHỊ EM KẾT NGHĨA**
- Những mối dây tình cảm **KHÔNG CHUNG MÁU MỦ** nhưng **SÂU ĐẬM, BỀN LÂU**`,
  },

  {
    id: 'duong-tai-menh-tai-loc-tich-luy',
    title: 'Dưỡng tại Mệnh - Tài lộc tích lũy bền bỉ',
    sao: ['Dưỡng'],
    cung: ['Mệnh'],
    doUuTien: 58,
    tomTat: `**Dưỡng tại Mệnh** — tài lộc đến từ **TÍCH LŨY TÀI SẢN**.

**Đặc trưng:**
- Tiền bạc **KHÔNG ĐẾN BẠO PHÁT**
- Theo con đường **TÍCH LŨY BỀN BỈ**
- Giỏi **VUN VÉN, BIẾT TIẾT KIỆM**
- Xoay xở từng chút một
- "**GÓP GIÓ THÀNH BÃO**"
- Tài sản ngày càng **ỔN ĐỊNH**

**Đặc điểm:**
- Có duyên nhận được **HỖ TRỢ TÀI CHÍNH** từ người khác
- Nhờ **UY TÍN, SỰ TỬ TẾ VÀ LÒNG TIN**
- Các nguồn thu **KHÔNG QUÁ LỚN** nhưng **ĐỀU ĐẶN VÀ AN TOÀN**`,
  },

  {
    id: 'duong-tai-phu-mau',
    title: 'Dưỡng tại Phụ Mẫu',
    sao: ['Dưỡng'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Dưỡng tại Phụ Mẫu** — chủ mệnh hết mực **THỜ CHA KÍNH MẸ**.

**Đặc trưng:**
- Người hay **QUAN TÂM, CHĂM LO** cho cha mẹ
- Cha mẹ dễ **ỐM ĐAU, GẶP PHIỀN HÀ** nên cần quan tâm chăm sóc và giúp đỡ
- Cha mẹ **QUAN TÂM, CHĂM SÓC** đương số và mọi người xung quanh
- Cha mẹ **GIÀU LÒNG NHÂN ÁI**, hay giúp đỡ người khác
-: Được **BÀ CON, LÁNG GIỀNG VÀ XÃ HỘI YÊU QUÝ**

**Hợp Ân Quang, Thiên Quý, Thiên Quan, Thiên Phúc, Hóa Lộc:**
- Chủ mệnh hết mực **QUAN TÂM**
- "**THỜ CHA KÍNH MẸ**" đúng đạo làm con
- Đôi khi vì cha mẹ hay đau yếu, gặp phiền muộn nên con cái phải đứng ra
  **PHỤNG DƯỠNG**`,
  },

  {
    id: 'duong-tai-phuc-duc',
    title: 'Dưỡng tại Phúc Đức',
    sao: ['Dưỡng'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `**Dưỡng tại Phúc Đức** — số dễ làm **CON NUÔI**, đỡ đầu cho người khác.

**Đặc trưng:**
- Số dễ làm **CON NUÔI HỌ KHÁC**
- Hoặc **NHẬN CON NUÔI, ĐỠ ĐẦU** cho người khác
- Người **QUAN TÂM, CHĂM LO** tới mồ mả tổ tiên
- **CHỊU KHÓ LÀM VIỆC THIỆN, GIÚP NGƯỜI, TÍCH PHƯỚC**

**Hợp Thiên Quan, Thiên Phúc, Ân Quang, Thiên Quý:**
- "**ĂN Ở CÓ HẬU**"
- Tin rằng "**GIEO NHÂN LÀNH SẼ GẶT QUẢ TỐT**"
- Thường **ÂM THẦM GIÚP ĐỠ** mọi người trong lúc khó khăn`,
  },

  {
    id: 'duong-tai-dien-trach',
    title: 'Dưỡng tại Điền Trạch',
    sao: ['Dưỡng'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Dưỡng tại Điền Trạch** — quan tâm **NHÀ CỬA**, nhà nuôi thú vật trồng cây.

**Đặc trưng:**
- Người **QUAN TÂM, ĐỂ Ý** tới nhà cửa
- Nhà cửa dễ **NUÔI THÚ VẬT, TRỒNG NHIỀU CÂY CỎ** xung quanh
- Người **CHỊU KHÓ VUN VÉN, TÍCH CÓP, XÂY SỬA NHÀ CỬA**
- Người **QUAN TÂM, GIÚP ĐỠ HÀNG XÓM** xung quanh
- Thích **CHĂM CHÚT, SỬA SANG, SẮP XẾP** nhà cửa
- Đam mê **TRỒNG CÂY, NUÔI CHIM CÁ**
- Luôn giữ gìn **MÔI TRƯỜNG SỐNG ẤM CÚNG, GỌN GÀNG**

**Quan hệ hàng xóm:**
- **HÒA NHÃ**
- "**TỐI LỬA TẮT ĐÈN CÓ NHAU**"`,
  },

  {
    id: 'duong-tai-quan-loc',
    title: 'Dưỡng tại Quan Lộc',
    sao: ['Dưỡng'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `**Dưỡng tại Quan Lộc** — người **QUAN TÂM CÔNG DANH**, hợp ngành dịch vụ y
tế.

**Đặc trưng:**
- Quan tâm, chú trọng nhiều vào **CÔNG DANH SỰ NGHIỆP**
- Đặt sự nghiệp lên **HÀNG ĐẦU**
- Không ngừng nỗ lực để con đường **CÔNG DANH PHÁT TRIỂN RỰC RỠ**

**Hợp ngành nghề:**
- **DỊCH VỤ, CHĂM SÓC KHÁCH HÀNG**
- Hội nhiều phúc thiện tinh:
  - **BÁC SỸ, ĐIỀU DƯỠNG, Y TÁ, HỘ SINH**
- Các ngành nghề về:
  - **CÂY XANH, MÔI TRƯỜNG, VẬT NUÔI**
  - **CHĂN NUÔI, CHĂM SÓC THÚ CƯNG**

**Tinh thần:** "**MỘT NGHỀ CHO CHÍN, CÒN HƠN CHÍN NGHỀ**".`,
  },

  {
    id: 'duong-tai-no-boc',
    title: 'Dưỡng tại Nô Bộc',
    sao: ['Dưỡng'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Dưỡng tại Nô Bộc** — người **QUAN TÂM BẠN BÈ**, hợp nghề từ thiện y tế.

**Đặc trưng:**
- Người **QUAN TÂM** tới bạn bè, đồng nghiệp, bệnh nhân, học trò, gia chủ
- Coi trọng **TÌNH NGHĨA**

**Hợp nghề** (hội nhiều sao tốt):
- **BÁC SĨ, GIÁO VIÊN**
- **NHÀ TỪ THIỆN, HIỆP HỘI CỨU TRỢ**

**Hội nhiều sát bại tinh:**
- Có thể làm **NGƯỜI Ở, GIÚP VIỆC NHÀ NGƯỜI**
- Dễ rơi vào cảnh **LÀM THUÊ, GIÚP VIỆC** cho gia đình người khác`,
  },

  {
    id: 'duong-tai-thien-di',
    title: 'Dưỡng tại Thiên Di',
    sao: ['Dưỡng'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Dưỡng tại Thiên Di** — ra ngoài **CỨU TRỢ GIÚP ĐỠ**, hay làm từ thiện.

**Đặc trưng:**
- Người ra ngoài hay **GIÚP ĐỠ, CHĂM SÓC** mọi người xung quanh
- Hay **ĐI CỨU TRỢ, GIÚP NGƯỜI**
- Có **SỐ MỆNH** đi giúp đỡ, **PHỤC VỤ THẾ GIỚI BÊN NGOÀI**
- Mang theo **TRÁI TIM BIẾT THƯƠNG NGƯỜI**
- Tham gia các **HOẠT ĐỘNG TỪ THIỆN, CỨU TRỢ**
- Công việc **PHỤC VỤ CỘNG ĐỒNG**

**Hội Tướng Quân, Suy:**
- Dễ làm **TÔI TỚ, GIÚP VIỆC NHÀ QUYỀN MÔN**
- Phục vụ trong môi trường **QUYỀN QUÝ**
- Gần gũi với **TẦNG LỚP CAO SANG**`,
  },

  {
    id: 'duong-tai-tat-ach',
    title: 'Dưỡng tại Tật Ách',
    sao: ['Dưỡng'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `**Dưỡng tại Tật Ách** — bệnh tật **TIỀM TÀNG, TÍCH TỤ DẦN**.

**Đặc trưng:**
- Bệnh tật, tai họa **ĐÃ XÂM NHẬP TIỀM TÀNG**
- **TÍCH TỤ DẦN**
- Dễ gặp các loại **BỆNH TIỀM ẨN**, tích tụ lâu ngày

**Lưu ý:**
- Cần **QUAN TÂM CHĂM SÓC SỨC KHỎE**
- Cần **CẨN THẬN, TRÁNH LÀM ĐIỀU ÁC** để hạn chế tác họa
- Phải sống **THIỆN LƯƠNG**`,
  },

  {
    id: 'duong-tai-tai-bach',
    title: 'Dưỡng tại Tài Bạch',
    sao: ['Dưỡng'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Dưỡng tại Tài Bạch** — người **TÍCH CÓP**, hay được giúp đỡ tài chính.

**Đặc trưng:**
- Người **CHỊU KHÓ TÍCH CÓP**
- **QUAN TÂM TẠO RA CỦA TIỀN**
- Hay được **NGƯỜI KHÁC GIÚP ĐỠ, CHO TIỀN**
- Biết **TÍCH GÓP, CHĂM CHỈ TẠO DỰNG CỦA CẢI**

**Hội Ân Quang, Thiên Quý, Thiên Khôi, Thiên Việt, Tả Hữu:**
- Rất dễ nhận được **SỰ GIÚP ĐỠ VỀ TÀI CHÍNH**
- Được **CHO TIỀN** hoặc hưởng lợi từ **SỰ QUAN TÂM** của người khác`,
  },

  {
    id: 'duong-tai-tu-tuc',
    title: 'Dưỡng tại Tử Tức',
    sao: ['Dưỡng'],
    cung: ['Tử Tức'],
    doUuTien: 78,
    tomTat: `**Dưỡng tại Tử Tức** — quan tâm con cái, **CON ĐỠ ĐẦU, CON NUÔI**.

**Đặc trưng:**
- **QUAN TÂM, CHĂM LO** đến con cái
- Con cái thường dễ hay **ĐAU ỐM**
- Phải **GỬI VÍA LÀM CON NUÔI** nhà người
- Có **CON NUÔI** hoặc cho con **NHỜ NGƯỜI KHÁC NUÔI HỘ**
- Có **CON ĐỠ ĐẦU**
- Có khi **NUÔI CON RIÊNG** của chồng / vợ

**Dưỡng + Khốc Hư:**
- **SÁT CON, DỄ SẨY**

**Dưỡng + Hỷ tại Tử Tức:**
- "**Dưỡng Hỷ lâm ư Tử Tức tất sanh con quý tử**"
- Sinh **CON QUÝ TỬ**

**Dưỡng + Khốc Hư + Không Kiếp + Kình Đà + Hỏa Linh:**
- Thường xảy ra **MẤT MÁT, SẨY THAI**

**Dưỡng + Hỷ + Xương Khúc + Khôi Việt:**
- Là **ĐIỀM LÀNH**
- Sinh **CON QUÝ TỬ**`,
  },

  {
    id: 'duong-tai-phu-the',
    title: 'Dưỡng tại Phu Thê',
    sao: ['Dưỡng'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `**Dưỡng tại Phu Thê** — người hôn phối **LÀM DỊCH VỤ, CHĂM SÓC**.

**Đặc trưng:**
- Người hôn phối dễ làm:
  - **DỊCH VỤ, CHĂM SÓC**
  - **NGHỀ Y, NGHỀ GIÁO**
- Người dễ hay mắc **ỐM ĐAU**
- Khiến đương số phải **QUAN TÂM, CHĂM SÓC** nhiều`,
  },

  {
    id: 'duong-tai-huynh-de',
    title: 'Dưỡng tại Huynh Đệ',
    sao: ['Dưỡng'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Dưỡng tại Huynh Đệ** — có **ANH EM KẾT NGHĨA, NUÔI, DỊ BÀO**.

**Đặc trưng:**
- Có **ANH EM KẾT NGHĨA**
- **ANH CHỊ EM NUÔI**
- Hoặc **DỊ BÀO**
- Mối dây tình cảm tuy không cùng huyết thống nhưng **SÂU ĐẬM**`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // DƯỠNG VÀO HẠN
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'duong-vao-han-benh-tat',
    title: 'Dưỡng vào hạn - Bệnh tật dai dẳng',
    sao: ['Dưỡng'],
    doUuTien: 50,
    tomTat: `**Dưỡng vào hạn** — bệnh tình **DAI DẲNG KHÓ CHỮA**.

**Đặc trưng:**
- Khi bước vào đại / tiểu hạn có Dưỡng + sao **BỆNH TẬT NẶNG**
- Dễ phải **ĐIỀU TRỊ DÀI NGÀY**
- Thậm chí **NẰM VIỆN**

**Đặc biệt nếu hạn rơi vào cung Tật Ách:**
- Bệnh tình thường **DAI DẲNG, KHÓ DỨT**
- Năm đó phải **QUAN TÂM CHÚ Ý CẨN THẬN** về sức khỏe nhiều`,
  },
];
