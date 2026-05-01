import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO LƯU HÀ - Thủy, Ác Tinh.
 *
 * An theo CAN năm sinh.
 *
 * Đặc trưng:
 *   - "Lưu Hà" = dòng nước trong mát nhẹ nhàng nhưng SÂU THẲM, LẶNG LẼ
 *   - Đẹp bên ngoài nhưng luôn có HUNG HIỂM rình rập bên trong
 *   - Nhẹ nhàng, khéo léo, mềm mỏng (lời ăn tiếng nói) → bên trong toan tính
 *   - Đặc tính: thâm trầm, sát phạt, thủy tai, sông nước, hung họa
 *
 * ⚡ QUY LUẬT NGHỊCH LÝ ÂM DƯƠNG (cụ Thiên Lương):
 *   - Lưu Hà + Kiếp Sát luôn ở vị trí nghịch lý âm dương trên lá số
 *   - Đánh phá ngăn cản những ai KHÔNG XỨNG ĐÁNG được động vào Lộc Tồn
 *   - Áp dụng cho tuổi Bính - Đinh - Mậu - Kỷ - Nhâm - Quý (Lộc Tồn vị trí
 *     âm dương nghịch lý)
 *
 * ⚡ Bộ Lưu Hà + Kiếp Sát = bộ đôi ác sát tinh sức phá hoại MẠNH.
 */
export const luanGiai_LuuHa: DoanLuanGiai[] = [
  {
    id: 'luu-ha-tinh-chat-chung',
    title: 'Lưu Hà - Đặc tính chung',
    sao: ['Lưu Hà'],
    doUuTien: 32,
    tomTat: `**Lưu Hà** — phụ tinh **ÁC TINH**, an theo **CAN năm sinh**.

**Ngũ hành:** **Thủy**.

⚡ **Tên gọi:** "Lưu Hà" = **DÒNG NƯỚC TRONG MÁT, NHẸ NHÀNG**, nhưng
**SÂU THẲM, LẶNG LẼ** — đẹp ngoài nhưng có **HUNG HIỂM RÌNH RẬP**.

⚡ **Đặc tính:**
- **Thâm trầm, sát phạt, thủy tai, sông nước, hung họa**
- Bên ngoài: **NHẸ NHÀNG, KHÉO LÉO, MỀM MỎNG** (lời ăn tiếng nói, cử chỉ)
- Bên trong: **TOAN TÍNH, MƯU MÔ, THỦ ĐOẠN**
- Chỉ đợi con mồi mất cảnh giác mà **NHẤN CHÌM**

⚡ **Hai mặt:**
- Hội nhiều **SÁT BẠI TINH** → tính hung hiểm rõ rệt
- Đặc biệt với **KIẾP SÁT** → bộ đôi **ÁC SÁT TINH** phá hoại mạnh
- Hội **PHÚC THIỆN TINH** → biến thành **NHÀ DIỄN THUYẾT, MC** tài năng,
  câu từ trau chuốt êm tai

⚡ **Quy luật nghịch lý:** Lưu Hà + Kiếp Sát luôn ở **NGHỊCH LÝ ÂM DƯƠNG**
trên lá số — đánh phá những ai không xứng đáng được Lộc Tồn (áp dụng tuổi
Bính/Đinh/Mậu/Kỷ/Nhâm/Quý).`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP NỔI TIẾNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'luu-ha-thanh-long-rong-xanh-vung-vay',
    title: 'Lưu Hà + Thanh Long - Rồng xanh vùng vẫy trên sông lớn',
    sao: ['Lưu Hà'],
    ketHop: ['Thanh Long'],
    doUuTien: 60,
    tomTat: `**Lưu Hà + Thanh Long đồng cung** — cách **"RỒNG XANH VÙNG VẪY TRÊN SÔNG
LỚN"** (đã có ở thanh-long.ts).

⚡ **Ý nghĩa:**
- Gặp **VẬN HỘI TỐT, ĐẮC THỜI**
- Lợi cho **THI CỬ, CẦU DANH, CẦU TÀI**
- Lợi cho **LÀM ĂN, THI THỐ TÀI NĂNG**
- Có tài **HÙNG BIỆN VÔ CÙNG LOGIC**`,
  },

  {
    id: 'luu-ha-cung-thuy-hop-vi',
    title: 'Lưu Hà tại Hợi/Tý - cung Thủy hợp vị',
    sao: ['Lưu Hà'],
    chi: ['Hợi', 'Tý'],
    doUuTien: 55,
    tomTat: `**Lưu Hà đóng tại Hợi/Tý** (cung Thủy hợp vị):
- Tài hùng biện được phát huy, lợi thi cử cầu danh
- Nhưng thiếu Thanh Long → dịp may ít hơn cách Lưu Hà + Thanh Long
- Dễ mắc **NẠN SÔNG NƯỚC**`,
  },

  {
    id: 'luu-ha-tau-thu-thai-tue-hung-bien',
    title: 'Lưu Hà + Tấu Thư + Thái Tuế - Tài hùng biện logic',
    sao: ['Lưu Hà'],
    ketHop: ['Tấu Thư'],
    doUuTien: 55,
    tomTat: `**Lưu Hà + Tấu Thư** (hoặc Thanh Long) — học giỏi, **TÀI HÙNG BIỆN VÔ CÙNG
LOGIC**.

⚡ **Đặc trưng:**
- Khả năng **ĂN NÓI LƯU LOÁT**
- Biện luận sắc bén
- Câu từ chặt chẽ logic

⚡ **Hội thêm Thái Tuế:**
- Năng khiếu hùng biện **NỔI BẬT** thêm
- Thành nhà chính trị, luật sư, diễn giả`,
  },

  {
    id: 'luu-ha-vu-co-tau-loc-dao-hong-nghe-sy',
    title: 'Lưu Hà + Vũ Khúc + Cơ + Tấu + Lộc + Đào Hồng - Nghệ sỹ nổi tiếng',
    sao: ['Lưu Hà'],
    ketHop: ['Vũ Khúc', 'Thiên Cơ'],
    doUuTien: 60,
    tomTat: `**Lưu Hà + Vũ Khúc + Thiên Cơ + Tấu Thư + Hóa Lộc + Đào Hồng** — **NGHỆ SỸ,
CA SỸ, NHÀ DIỄN THUYẾT** vô cùng tài năng nổi tiếng.

⚡ **Đặc trưng:**
- Câu từ trau chuốt êm tai
- Thu hút **RẤT ĐÔNG KHÁN GIẢ**
- Tài năng âm nhạc + ngôn ngữ kết hợp

⚡ **Phân tích bộ sao:**
- **Vũ Khúc**: tài năng âm nhạc
- **Thiên Cơ**: trí tuệ linh hoạt
- **Tấu Thư**: văn chương hùng biện
- **Hóa Lộc**: tài lộc danh vọng
- **Đào Hồng**: sức hút duyên dáng
- **Lưu Hà**: tài ăn nói trau chuốt`,
  },

  {
    id: 'luu-ha-kiep-sat-bo-doi-ac-sat',
    title: 'Lưu Hà + Kiếp Sát - Bộ đôi ác sát tinh phá hoại',
    sao: ['Lưu Hà'],
    ketHop: ['Kiếp Sát'],
    doUuTien: 55,
    tomTat: `⚠️ **Lưu Hà + Kiếp Sát** — **BỘ ĐÔI ÁC SÁT TINH** có sức phá hoại **VÔ CÙNG
MẠNH**.

⚡ **Đặc trưng:**
- Tính **HUNG HIỂM, NGUY HẠI** thể hiện rõ rệt nhất
- Thâm trầm + sát phạt cộng hưởng
- Là cặp đôi đáng cảnh giác nhất với Lưu Hà

⚡ **Quy luật:** Lưu Hà và Kiếp Sát luôn ở **NGHỊCH LÝ ÂM DƯƠNG** trên lá
số — đánh phá những ai không xứng đáng động vào Lộc Tồn (tuổi Bính/Đinh/
Mậu/Kỷ/Nhâm/Quý).

⚡ **Hóa giải:** Cần phúc thiện tinh (Quan Phúc, Quang Quý, Tứ Đức) đi cùng
mới giảm bớt được tác họa.`,
  },

  {
    id: 'luu-ha-kinh-pha-hao-tuyet-quy-ke',
    title: 'Lưu Hà + Kình + Phá + Hao + Tuyệt - Quỷ kế đa mưu',
    sao: ['Lưu Hà'],
    ketHop: ['Kình Dương', 'Phá Quân'],
    doUuTien: 50,
    tomTat: `⚠️ **Lưu Hà + Kình + Phá + Hao + Tuyệt** — người có nhiều **QUỶ KẾ, ĐA MƯU,
ĐỘC HIỂM**.

⚡ **Đặc trưng:**
- Ra tay **DIỆT THÙ** mà không lộ tông tích
- Không bị **LƯƠNG TÂM CẮN RỨT**
- Bộ sao của kẻ lập mưu thâm độc

⚡ **Cảnh báo:** Đây là cách cục **CỰC XẤU** với người không có sao Phúc.
Cần tu thân tích đức để hóa giải.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // LƯU HÀ TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'luu-ha-tai-menh',
    title: 'Lưu Hà tại Mệnh',
    sao: ['Lưu Hà'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `**Lưu Hà thủ Mệnh** — người **ĂN NÓI LƯU LOÁT**, có tài **HÙNG BIỆN CAO**.

⚡ **Tính cách:**
- Thích **NÓI, GIẢNG THUYẾT, DIỄN GIẢNG** hay và phong phú
- **THÂM TRẦM, NHIỀU TOAN TÍNH**, sự khôn ngoan bên trong
- Nếu đi với sao xấu → **ĐỘC ÁC, THÂM TRẦM**, có **THỦ ĐOẠN**, gây chết chóc

⚡ **Hợp nghề:**
- **NGOẠI GIAO, GIAO TIẾP, BÁN HÀNG**, "dân sale, bán nước bọt"
- Liên quan **SÔNG NƯỚC** (ngư dân, thủy thủ)
- **HÓA HỌC, HẢI SẢN, DẦU HỎA**
- Diễn thuyết, MC, ca sỹ, nghệ sỹ (đắc cách)

⚠️ **Phúc thọ - tai họa:**
- Dễ có **TAI NẠN SÔNG NƯỚC**, trong đời dễ có lần **CHẾT ĐUỐI**
- **MÁU HUYẾT**, bệnh **MÁU LOÃNG**
- Tai nạn đường sá

⚡ **Cát tinh hội (Tấu Thư + Thanh Long + Thái Tuế):**
- Tài hùng biện **VÔ CÙNG LOGIC**
- Nổi bật trong học tập, công việc`,
  },

  {
    id: 'luu-ha-tai-menh-nu-bang-huyet',
    title: 'Lưu Hà tại Mệnh - Nữ băng huyết',
    sao: ['Lưu Hà'],
    cung: ['Mệnh'],
    gioiTinh: 'Nữ',
    doUuTien: 73,
    tomTat: `⚠️ **Lưu Hà thủ Mệnh — nữ mệnh:**
- Dễ bị **BĂNG HUYẾT** lúc sinh đẻ
- Bệnh **MÁU HUYẾT, MÁU LOÃNG** càng nghiêm trọng`,
  },

  {
    id: 'luu-ha-tai-menh-cung-thuy',
    title: 'Lưu Hà tại Mệnh - Hợi/Tý cung Thủy hợp vị',
    sao: ['Lưu Hà'],
    cung: ['Mệnh'],
    chi: ['Hợi', 'Tý'],
    doUuTien: 73,
    tomTat: `⚡ **Lưu Hà thủ Mệnh đóng cung Thủy (Hợi/Tý):**
- Hợp vị, tài năng phát huy đúng mức
- Nhưng **CẨN THẬN HUNG HỌA SÔNG NƯỚC** càng phải đề phòng`,
  },

  {
    id: 'luu-ha-tai-phu-mau',
    title: 'Lưu Hà tại Phụ Mẫu',
    sao: ['Lưu Hà'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Lưu Hà tại Phụ Mẫu** — cha mẹ có **TÀI ĂN NÓI, HÙNG BIỆN TỐT**.

⚡ **Cát tinh hội:**
- Cha mẹ làm nghề liên quan **ĂN NÓI, NGOẠI GIAO, MC DẪN CHƯƠNG TRÌNH**
- Thường dùng khả năng đó cho **CON CÁI LỜI KHUYÊN BỔ ÍCH**

⚡ **Hợp nghề khác:**
- Cha mẹ làm liên quan **SÔNG NƯỚC, CÀ PHÊ, GIẢI KHÁT**

⚡ **Đặc trưng:**
- Cha mẹ **THÔNG MINH, NHIỀU MƯU TÍNH, MƯU MẸO**
- Con cái **KHÓ QUA MẮT** cha mẹ
- Cha mẹ luôn **TOAN TÍNH, LO TOAN** cho tương lai con cái

⚡ **Lưu Hà + Hóa Khoa:** Cha mẹ để lại "**DANH THƠM TIẾNG TỐT**" cho con.

⚡ **Lưu Hà + Không Kiếp:** Cha mẹ vướng **SAI LẦM, TỘI LỖI** → con cái
mang tiếng vạ lây.`,
  },

  {
    id: 'luu-ha-tai-phuc-duc',
    title: 'Lưu Hà tại Phúc Đức',
    sao: ['Lưu Hà'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `**Lưu Hà tại Phúc Đức** — càng **XA QUÊ HƯƠNG** càng **KHÁ GIẢ**, làm ăn càng
**PHẤT LÊN**.

⚡ **Đặc trưng:**
- Mồ mả tổ tiên thường đặt tại nơi gần **AO HỒ, SÔNG SUỐI**, ẩm thấp
- Trong dòng họ nhiều người có **TÀI ĂN NÓI** lưu loát

⚡ **Mối quan hệ họ hàng:**
- Đôi khi **BẰNG MẶT KHÔNG BẰNG LÒNG**
- Miệng nói cười nhưng trong lòng **TOAN TÍNH**

⚠️ **Cảnh báo:**
- Trong họ hàng dễ có người **CHẾT ĐUỐI, GẶP THỦY TAI**

⚡ **Hội Hóa Khoa, Hóa Quyền, Khôi Việt:** dòng họ nhiều người **THÀNH DANH**,
truyền phúc khí cho con cháu.`,
  },

  {
    id: 'luu-ha-tai-dien-trach',
    title: 'Lưu Hà tại Điền Trạch',
    sao: ['Lưu Hà'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Lưu Hà tại Điền Trạch** — nhà thường gần **SÔNG SUỐI, AO HỒ**.

⚡ **Đặc trưng:**
- Đất hay bị **ÚNG THỦY, NHIỀU NƯỚC, NGẬP LỤT**
- Nặng nhất có thể đến mức **KHÔNG Ở ĐƯỢC**
- Quanh nhà gần sông suối → cẩn thận **CHẾT ĐUỐI**

⚠️ **Đặc biệt cảnh báo + Kiếp Sát + Hóa Kỵ:**
- Dễ có **NGƯỜI CHẾT ĐUỐI**
- Gặp **LŨ LỤT**, đất ngập úng
- Nhà cửa không yên

⚡ **Hàng xóm:**
- Hay nói chuyện, vui vẻ
- Nhưng dễ **ĐÀM TIẾU, HÃM HẠI SAU LƯNG** nếu phật lòng

⚡ Cần đề phòng **THỦY TAI, LŨ CUỐN** ở vùng nguy cơ cao.`,
  },

  {
    id: 'luu-ha-tai-quan-loc',
    title: 'Lưu Hà tại Quan Lộc',
    sao: ['Lưu Hà'],
    cung: ['Quan Lộc'],
    doUuTien: 76,
    tomTat: `**Lưu Hà tại Quan Lộc** — hợp các nghề **GIAO TIẾP, DIỄN THUYẾT**.

⚡ **Cát tinh hội (Thanh Long + Văn Xương + Văn Khúc):**
- Có **DANH PHẬN**
- Làm các ngành liên quan **SÔNG NƯỚC, HÓA HỌC, HẢI SẢN, DẦU HỎA**

⚡ **Phục Binh + Thiên Đồng + Cự Môn + Thiên Trù:**
- Mở **CỬA HÀNG GIẢI KHÁT, TRUNG TÂM TIỆC CƯỚI, ĂN UỐNG**
- **GIẢNG ĐƯỜNG THUYẾT TRÌNH**

⚠️ **Sát tinh hội (Kiếp Sát + Không Kiếp + Kình Đà + Thái Tuế):**
- Công danh **THĂNG GIÁNG THẤT THƯỜNG**
- Đôi khi bị **TAI ƯƠNG HỌA HẠI**`,
  },

  {
    id: 'luu-ha-tai-no-boc',
    title: 'Lưu Hà tại Nô Bộc',
    sao: ['Lưu Hà'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Lưu Hà tại Nô Bộc** — bạn bè **HAY NÓI** và có **BIỆT TÀI HÙNG BIỆN**.

⚡ **Đặc trưng:**
- Khả năng nói có thể làm đối phương **KINH NGẠC**

⚠️ **Không có cát tinh:**
- Dễ bị bạn bè **LỪA, HÃM HẠI**
- Bạn bè khéo léo bên ngoài nhưng nhiều **TOAN TÍNH, MƯU MÔ, THÂM HIỂM**
- Hội Hóa Kỵ + Đà La + Địa Kiếp → phản bội đâm sau lưng

⚡ **Lưu ý:** Trong môi trường ngoại giao, thương mại, chính trị → cần
**NGƯỜI BẢO VỆ** nếu đảm nhiệm vị trí quan trọng.`,
  },

  {
    id: 'luu-ha-tai-thien-di',
    title: 'Lưu Hà tại Thiên Di',
    sao: ['Lưu Hà'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Lưu Hà tại Thiên Di** — ra ngoài **ĂN NÓI LƯU LOÁT**, được người khác giới
**ĐỂ Ý**.

⚡ **Đặc trưng:**
- Đôi khi ra ngoài được **YÊU QUÝ** vì tài ăn nói

⚠️ **Cảnh báo:**
- Phải **CẨN THẬN VÙNG SÔNG NƯỚC, NẠN THỦY TAI**
- Đôi khi hay phải **ĐI TỚI VÙNG SÔNG NƯỚC**
- Ra ngoài gặp nhiều **KẺ HAI MẶT**, ngoài ngọt nhẹ trong toan tính
- Dễ **LỪA GẠT** nếu không cẩn thận

⚡ **Kết hợp Cự Môn + Hóa Kỵ + Sát Hình:** Cần đề phòng **NẠN THỦY TAI** rõ rệt.`,
  },

  {
    id: 'luu-ha-tai-tat-ach',
    title: 'Lưu Hà tại Tật Ách',
    sao: ['Lưu Hà'],
    cung: ['Tật Ách'],
    doUuTien: 76,
    tomTat: `**Lưu Hà tại Tật Ách** — bệnh tật về **MÁU HUYẾT**.

⚡ **Đặc trưng:**
- Dễ bị **MÁU LOÃNG, BĂNG HUYẾT**
- Hoặc bị **CHẾT ĐUỐI, MỔ XẺ**
- **NUÔI SÚC VẬT KHÔNG CÓ LỢI**

⚡ **Đặc biệt nữ giới:**
- Thường gặp **BẤT LỢI KHI SINH ĐẺ**
- Có bệnh về **MÁU HUYẾT KHI LÂM BỒN**

⚠️ **Phòng tránh:**
- Đặc biệt chú ý **SÔNG NƯỚC, ĐI LẠI TÀU THUYỀN**
- Tránh **TAI NẠN, THƯƠNG TẬT**

⚡ **Cự Môn:** Đề phòng **HỌA TỪ MIỆNG** mà ra.

⚡ **Linh Tinh + Đà La:** Tránh **RƯỢU BIA, CHẤT KÍCH THÍCH** vì dễ rơi
vào trạng thái không tỉnh táo gây tai họa.`,
  },

  {
    id: 'luu-ha-tai-tai-bach',
    title: 'Lưu Hà tại Tài Bạch',
    sao: ['Lưu Hà'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Lưu Hà tại Tài Bạch** — **DỄ KIẾM TIỀN** nhưng **THẤT THƯỜNG**, ra vào nhanh.

⚡ **Cách kiếm tiền:**
- Dùng khả năng **THUYẾT PHÁP, TRÌNH BÀY, DIỄN THUYẾT**
- Nhiều **MƯU TOAN, TÍNH TOÁN**

⚠️ **Mặt tối:**
- Đôi khi sẵn sàng **PHẢN BỘI, LỪA ĐẢO** để kiếm tiền
- Hoặc bị người khác **LỪA BẰNG MIẾNG MỒI NGON**

⚡ **Cát tinh hội (Tả Hữu, Khôi Việt):**
- Tiền ra vào có **KIỂM SOÁT**
- Không rơi vào thiếu thốn

⚡ **Sát tinh hội (Địa Kiếp, Phục Binh, Song Hao, Hóa Kỵ):**
- Kiếm tiền **BẤT CHẤP**
- Sẵn sàng phản bội, lừa đảo`,
  },

  {
    id: 'luu-ha-tai-tu-tuc',
    title: 'Lưu Hà tại Tử Tức',
    sao: ['Lưu Hà'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Lưu Hà tại Tử Tức** — con cái có **TÀI ĂN NÓI**.

⚠️ **Cảnh báo:**
- Con cái dễ mắc **BỆNH MÁU HUYẾT**
- Cẩn thận khi con vui chơi **SÔNG NƯỚC** → dễ **ĐUỐI NƯỚC**

⚡ **Tính cách con cái:**
- **THÂM TRẦM, NHIỀU MƯU MẸO**
- Tính cách **KHÓ ĐOÁN**`,
  },

  {
    id: 'luu-ha-tu-tuc-nu-bang-huyet',
    title: 'Lưu Hà tại Tử Tức - Nữ băng huyết khi sinh đẻ',
    sao: ['Lưu Hà'],
    cung: ['Tử Tức'],
    gioiTinh: 'Nữ',
    doUuTien: 70,
    tomTat: `⚠️ **Lưu Hà tại Tử Tức — nữ mệnh:**
- Dễ bị **BĂNG HUYẾT** lúc sinh đẻ
- Đường sinh nở gian nan, gặp **biến chứng máu huyết**`,
  },

  {
    id: 'luu-ha-tai-phu-the',
    title: 'Lưu Hà tại Phu Thê',
    sao: ['Lưu Hà'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `**Lưu Hà tại Phu Thê** — vợ chồng có **TÀI ĂN NÓI**.

⚡ **Khuyến cáo:**
- Nên lấy người **KHÁC LÀNG KHÁC XÓM**
- Tránh xung đột bất hòa giữa hai bên gia đình

⚡ **Tình cảm vợ chồng:**
- Không thật lòng hoàn toàn với nhau
- Hay có **ẨN Ý CHE GIẤU**
- Bên ngoài hay nói để **VUI LÒNG ĐỐI PHƯƠNG**

⚠️ **Cảnh báo:**
- Người hôn phối dễ mắc **BỆNH MÁU HUYẾT**
- Gặp **TAI HỌA SÔNG NƯỚC**

⚡ **Hợp nghề hôn phối:** Người hôn phối có **TÀI THUYẾT TRÌNH** → làm
**GIAO TIẾP, DẠY HỌC** phát huy khả năng nói.

⚡ **Hóa Khoa + Văn Xương:** Đương số được nhờ **DANH TIẾNG** của bạn đời.`,
  },

  {
    id: 'luu-ha-tai-huynh-de',
    title: 'Lưu Hà tại Huynh Đệ',
    sao: ['Lưu Hà'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Lưu Hà tại Huynh Đệ** — anh chị em **TÀI ĂN NÓI**, gắn bó với nghề **DẠY
HỌC, BUÔN BÁN**.

⚡ **Đặc trưng:**
- Anh chị em **BẰNG MẶT KHÔNG BẰNG LÒNG**
- Dễ có **MƯU TOAN BÊN TRONG**

⚡ **Cát tinh hội:** Có thể giải bớt và trở thành **NGƯỜI TÀI NĂNG, GIỎI GIANG**.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // LƯU HÀ VÀO HẠN
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'luu-ha-han-cu-ky-chet-duoi',
    title: 'Hạn: Lưu Hà + Cự Môn + Hóa Kỵ - Chết đuối máu huyết',
    sao: ['Lưu Hà'],
    ketHop: ['Cự Môn', 'Hóa Kỵ'],
    doUuTien: 55,
    tomTat: `⚠️ **Lưu Hà + Cự Môn + Hóa Kỵ vào hạn** — cẩn thận **CHẾT ĐUỐI, MÁU HUYẾT**.

⚡ **Cảnh báo:**
- Tai nạn không hẳn ngẫu nhiên — có thể **CÓ KẺ CHỦ MƯU, TIỂU NHÂN HÃM HẠI**
- Cự Môn + Hóa Kỵ vốn chủ thị phi → khi đi với Lưu Hà sông nước → tai họa thủy

⚡ **Phòng tránh:**
- Đề phòng **BÃO LŨ NGUY HIỂM** (đặc biệt khi có thêm Địa Kiếp)
- Tránh xa **VÙNG SÔNG NƯỚC** trong giai đoạn hạn
- Cẩn thận **PHÁT NGÔN** (Cự Môn) → tránh khẩu thiệt sinh họa`,
  },

  {
    id: 'luu-ha-han-kiep-kinh-dao-thuong',
    title: 'Hạn: Lưu Hà + Kiếp Sát + Kình Dương - Đao thương đạo tặc',
    sao: ['Lưu Hà'],
    ketHop: ['Kiếp Sát', 'Kình Dương'],
    doUuTien: 55,
    tomTat: `⚠️ **Lưu Hà + Kiếp Sát + Kình Dương vào hạn** — chết bởi **ĐAO THƯƠNG, ĐẠO
TẶC, CHẾT ĐUỐI**.

⚡ **Cảnh báo:**
- Lưu Hà + Kiếp Sát = bộ ác sát + Kình Dương dao kéo
- Tai họa **KHỦNG KHIẾP**
- Có thể bị **GIẾT, CƯỚP, CHẾT ĐUỐI**

⚡ **Phòng tránh:**
- Tránh đi đêm, vùng vắng vẻ
- Không tham gia **TRANH CHẤP, ĐÁNH NHAU**
- Tránh **VÙNG SÔNG NƯỚC** trong hạn
- Tu thân tích đức để hóa giải`,
  },

  {
    id: 'luu-ha-han-ma-tang-mon-suc-vat-chet',
    title: 'Hạn: Lưu Hà + Mã / Tang Môn - Súc vật chết dịch',
    sao: ['Lưu Hà'],
    ketHop: ['Thiên Mã', 'Tang Môn'],
    doUuTien: 50,
    tomTat: `**Lưu Hà + Thiên Mã** hoặc **Lưu Hà + Tang Môn vào hạn** — **SÚC VẬT NUÔI
DỄ BỊ CHẾT DỊCH**.

⚡ **Đặc trưng:**
- Vật nuôi (gà, lợn, trâu, bò, chó mèo) **DỄ MẮC BỆNH**
- **CHẾT HÀNG LOẠT**, hao tổn

⚡ **Phòng tránh:**
- Hạn này **KHÔNG NÊN NUÔI THÚ CƯNG** mới
- Đang nuôi thì cần **ĐỀ PHÒNG** khi cho thú cưng ra ngoài
- Tăng cường tiêm phòng, vệ sinh chuồng trại
- Không đầu tư mạo hiểm vào chăn nuôi quy mô lớn`,
  },
];
