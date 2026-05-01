import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO TIỂU HAO - Hỏa, Hao Tinh / Bại Tinh, vòng Lộc Tồn (vị trí 4)
 * (Tiểu Hao LUÔN đối cung với Đại Hao = Song Hao - phần chung Song Hao viết tại file này)
 */
export const luanGiai_TieuHao: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung sao Tiểu Hao
  // ============================================================
  {
    id: 'tieu-hao-tinh-chat-chung',
    title: 'Tiểu Hao - Đặc tính chung',
    sao: ['Tiểu Hao'],
    doUuTien: 30,
    tomTat: `**Tiểu Hao** — **BẠI TINH** trong **vòng Lộc Tồn** (vị trí thứ **4**).

**Ngũ hành:** **Hỏa** (một số trường phái cho là Thủy).

**Hóa khí:** **Hao Tinh, Bại Tinh**.

**Đặc tính:** **phá tán, hao tán, tích tụ, thất thường**.

⚡ **LUÔN đối cung với Đại Hao** → tạo thành cặp **"SONG HAO"**.

⚡ **Vị trí miếu hãm:**
- 🌟 **ĐẮC ĐỊA tại:** **Dần - Thân - Mão - Dậu** (Tứ Chính + Dần Thân)
- ⚠️ **HÃM ĐỊA tại:** **Tý / Sửu / Thìn / Tỵ / Ngọ / Mùi / Tuất / Hợi**

⚡ **Quy tắc luận đoán:**
- Đắc địa: vẫn là Hao tinh nhưng tạo dòng tiền lưu thông → có thể RẤT GIÀU
- Hãm địa: thực sự hao tán, tốn của, mất sức`,
  },

  // ============================================================
  // 2. Song Hao - cặp đôi đối cung
  // ============================================================
  {
    id: 'song-hao-cap-doi',
    title: 'Song Hao = Tiểu Hao + Đại Hao - Cặp đôi đối cung',
    sao: ['Tiểu Hao', 'Đại Hao'],
    doUuTien: 50,
    tomTat: `⚡ **Tiểu Hao + Đại Hao** = bộ **"SONG HAO"** — **LUÔN đối cung** (cách
6 cung) do quy luật an sao.

**Bản chất:** cả 2 đều là **bại tinh, hao tinh**. Tuy nhiên khi luận đoán **rất
cần chú ý đến CHÍNH TINH đi cùng**:
- 🌟 **Song Hao ĐẮC ĐỊA** (Dần / Thân / Mão / Dậu): RẤT TỐT — tạo cách "tiền
  ra vào liên tục, lãi mẹ đẻ lãi con"
- ⚠️ **Song Hao HÃM ĐỊA**: phá tán, hao tổn

⚡ Song Hao **HỖ TRỢ MẠNH** cho các cách:
- **Cự Cơ Mão Dậu** (cách "Cự Cơ đồng cung")
- **Cự Đồng** ở Sửu Mùi (Song Hao đắc tại tam phương)
- Mệnh / Tài / Quan có Song Hao đắc địa → **đại phú**`,
  },

  // ============================================================
  // 3. Cách Chúng Thủy Triều Đông
  // ============================================================
  {
    id: 'song-hao-mao-dau-chung-thuy-trieu-dong',
    title: 'Song Hao tại Mão Dậu - Cách "Chúng Thủy Triều Đông"',
    sao: ['Tiểu Hao', 'Đại Hao'],
    chi: ['Mão', 'Dậu'],
    doUuTien: 88,
    tomTat: `🌟 **Song Hao tại Mão Dậu** = cách **"CHÚNG THỦY TRIỀU ĐÔNG"** (mọi
dòng nước đổ về Đông) — **CỰC TỐT**.

→ **Phát tài phát lộc VÔ BỜ BẾN**, "lên tựa nước biển chiều dâng", **tiền tài
lên như diều gặp gió**.

⚡ **Đặc biệt phù hợp khi:**
- **Cự Cơ Mão Dậu** + Song Hao đắc → cách rất quý
- **Mệnh - Tài - Quan** đều có Song Hao đắc địa (Mão / Dậu) + thời vận tốt →
  cuộc đời lên như diều
- **+ Cự Môn + Thiên Cơ** = "rất thông minh, GIÀU CÓ, tiền bạc thừa thãi vô
  cùng"

⚠️ **Lưu ý:** Song Hao tuy là bại tinh nhưng khi đắc địa **CẦN có chính tinh
tốt đi cùng** — đây là ngoại lệ quan trọng phải nhớ khi luận lá số.`,
  },

  // ============================================================
  // 4. Tiểu Hao tại Mệnh
  // ============================================================
  {
    id: 'tieu-hao-tai-menh',
    title: 'Tiểu Hao tại Mệnh',
    sao: ['Tiểu Hao'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `**Tiểu Hao thủ Mệnh:** dáng **THẤP BÉ**, hay **ốm đau**, **má hóp đít
tóp**, thể chất không khỏe.

**Tính cách "sáng nắng chiều mưa":**
- Hay **thay đổi chí hướng, nghề nghiệp**
- **Không bền chí, chóng chán**
- Đặc điểm này càng mạnh khi đi cùng **sao có tính ĐỘNG** (Mã, Đồng...)

⚡ **Đặc trưng tiêu xài:** **Hào phóng**, **thích tiêu pha**.

⚡ Người **HAY LY HƯƠNG LẬP NGHIỆP**, thích đi đây đi đó, nghề **lưu động** —
xuất nhập khẩu, vận tải.`,
  },

  {
    id: 'tieu-hao-tai-menh-dac',
    sao: ['Tiểu Hao'],
    cung: ['Mệnh'],
    trangThai: ['Đắc'],
    doUuTien: 73,
    tomTat: `🌟 **Tiểu Hao Đắc địa tại Mệnh:** tiêu xài rộng rãi nhưng **hết tiền lại
có** — thông minh, ham học, **muốn trông xa biết rộng**.`,
  },

  {
    id: 'tieu-hao-tai-menh-ham-ky-pha-sat',
    sao: ['Tiểu Hao'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    ketHop: ['Hóa Kỵ', 'Phá Quân', 'Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 70,
    tomTat: `⚠️ **Tiểu Hao Hãm địa + Hóa Kỵ / Phá Quân / sát tinh tại Mệnh:** tiền tài
hao tán → túng thiếu, **thất thường**.`,
  },

  {
    id: 'tieu-hao-tai-menh-ham-sat-bai-tinh',
    sao: ['Tiểu Hao'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `⚠️ **Tiểu Hao Hãm + sát bại tinh tại Mệnh:** dễ có **đam mê** (cờ bạc,
rượu chè, thú vui) hoặc **bị ghiền** (rượu, thuốc...) — đam mê chỉ trong 1 giai
đoạn rồi chuyển sang đam mê khác.`,
  },

  // ============================================================
  // 5. Tiểu Hao tại Phụ Mẫu
  // ============================================================
  {
    id: 'tieu-hao-tai-phu-mau',
    title: 'Tiểu Hao tại Phụ Mẫu',
    sao: ['Tiểu Hao'],
    cung: ['Phụ Mẫu'],
    doUuTien: 68,
    tomTat: `**Tiểu Hao cư Phụ Mẫu:** cha mẹ **không sống gần quê cha đất tổ**,
phải **thay đổi nơi ăn chốn ở, nghề nghiệp**.`,
  },

  {
    id: 'tieu-hao-tai-phu-mau-ham',
    sao: ['Tiểu Hao'],
    cung: ['Phụ Mẫu'],
    trangThai: ['Hãm'],
    doUuTien: 65,
    tomTat: `⚠️ **Tiểu Hao Hãm địa tại Phụ Mẫu:** cha mẹ **gầy gò, vất vả**, đồng tiền
**tán tụ thất thường**.`,
  },

  {
    id: 'tieu-hao-tai-phu-mau-dac',
    sao: ['Tiểu Hao'],
    cung: ['Phụ Mẫu'],
    trangThai: ['Đắc'],
    doUuTien: 65,
    tomTat: `🌟 **Tiểu Hao Đắc địa tại Phụ Mẫu:** giảm bớt tính xấu — cha mẹ thường làm
**đầu tư, kinh doanh buôn bán**. Dòng tiền giữa đương số và cha mẹ nhiều — có
thể được cha mẹ tạo điều kiện đầu tư hoặc giúp đỡ ngược lại.`,
  },

  {
    id: 'tieu-hao-tai-phu-mau-hinh-viet',
    sao: ['Tiểu Hao'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Thiên Hình', 'Thiên Việt'],
    doUuTien: 65,
    tomTat: `⚠️ **Tiểu Hao tại Phụ Mẫu + Thiên Hình / Thiên Việt:** cha mẹ **khó tính,
nghiêm khắc**, hay **ép buộc con cái** phải nghe theo.`,
  },

  // ============================================================
  // 6. Tiểu Hao tại Phúc Đức
  // ============================================================
  {
    id: 'tieu-hao-tai-phuc-duc',
    title: 'Tiểu Hao tại Phúc Đức',
    sao: ['Tiểu Hao'],
    cung: ['Phúc Đức'],
    doUuTien: 68,
    tomTat: `**Tiểu Hao cư Phúc Đức:** ảnh hưởng phúc phần dòng họ — biểu hiện rõ theo
trạng thái đắc / hãm.

⚡ **Đặc trưng mộ phần:** xung quanh mồ mả tổ tiên có **mạch nước**, **dòng
suối, dòng sông** chạy qua. Tùy đắc/hãm để xác định tốt xấu.`,
  },

  {
    id: 'tieu-hao-tai-phuc-duc-ham',
    sao: ['Tiểu Hao'],
    cung: ['Phúc Đức'],
    trangThai: ['Hãm'],
    doUuTien: 70,
    tomTat: `⚠️ **Tiểu Hao Hãm địa cư Phúc Đức:** **ĐIỂM KỴ** — làm **giảm phúc phần,
may mắn** tổ tiên để lại.

⚠️ Trong dòng họ **nhiều người nghèo túng, bần hàn**, phải **tha hương lập
nghiệp** — "tha hương cầu thực", mỗi người một nơi.`,
  },

  {
    id: 'tieu-hao-tai-phuc-duc-dia-kiep',
    sao: ['Tiểu Hao'],
    cung: ['Phúc Đức'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 67,
    tomTat: `⚠️ **Tiểu Hao tại Phúc Đức + Địa Kiếp:** đương số **cô độc, vất vả** hoặc
nhiều **trách nhiệm nặng nề** với họ hàng. Dễ vào con đường **kiếm tiền không
chính nghĩa**, gây **hao tổn phước đức**.`,
  },

  {
    id: 'tieu-hao-tai-phuc-duc-dac',
    sao: ['Tiểu Hao'],
    cung: ['Phúc Đức'],
    trangThai: ['Đắc'],
    doUuTien: 70,
    tomTat: `🌟 **Tiểu Hao Đắc địa cư Phúc Đức:** người có **PHƯỚC ĐỨC TỐT**, được may
mắn về tiền của — biết **dùng tiền làm phúc**, tôn bồi phúc đức cho mình và
dòng tộc.`,
  },

  // ============================================================
  // 7. Tiểu Hao tại Điền Trạch
  // ============================================================
  {
    id: 'tieu-hao-tai-dien-trach',
    title: 'Tiểu Hao tại Điền Trạch',
    sao: ['Tiểu Hao'],
    cung: ['Điền Trạch'],
    doUuTien: 70,
    tomTat: `**Tiểu Hao cư Điền Trạch:** ảnh hưởng đất đai gia sản — biểu hiện rõ theo
trạng thái đắc / hãm.

⚡ Hay **hao tốn vì dọn nhà cửa, thay đổi chỗ ở**, đổi nơi làm việc.

⚡ **Đặc trưng nhà:** gần **dòng sông, dòng suối, mạch nước ngầm** chạy qua,
**nhà 2 mặt tiền**.`,
  },

  {
    id: 'tieu-hao-tai-dien-trach-ham',
    sao: ['Tiểu Hao'],
    cung: ['Điền Trạch'],
    trangThai: ['Hãm'],
    doUuTien: 73,
    tomTat: `⚠️ **Tiểu Hao Hãm địa cư Điền Trạch:** **TÁN nhiều TỤ ít**, khó giàu có. Dù
có cũng phải **bán** hoặc **hao tốn tài sản**.`,
  },

  {
    id: 'tieu-hao-tai-dien-trach-ham-khong-kiep',
    sao: ['Tiểu Hao'],
    cung: ['Điền Trạch'],
    trangThai: ['Hãm'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `⚠️ **Tiểu Hao Hãm địa + Không Kiếp tại Điền Trạch:** **TÁN nhiều TỤ ít**,
khó giàu có nặng nề. Dù có cũng phải **bán** hoặc **hao tốn tài sản**.`,
  },

  {
    id: 'tieu-hao-tai-dien-trach-dac',
    sao: ['Tiểu Hao'],
    cung: ['Điền Trạch'],
    trangThai: ['Đắc'],
    doUuTien: 73,
    tomTat: `🌟 **Tiểu Hao Đắc địa cư Điền Trạch:** vẫn hay thay đổi nhà cửa nhưng trên
vị thế **buôn bán, kinh doanh BẤT ĐỘNG SẢN có lãi**, nhà ngày càng **TO HƠN**.

🌟 Người dễ **mở xưởng sản xuất, chế tạo** các nguồn hàng số lượng lớn, ra
vào liên tục.`,
  },

  {
    id: 'tieu-hao-tai-dien-trach-dia-kiep',
    sao: ['Tiểu Hao'],
    cung: ['Điền Trạch'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 70,
    tomTat: `⚠️ **Tiểu Hao tại Điền Trạch + Địa Kiếp:** "thêm dầu vào lửa" → dễ mắc
**sai lầm trong mua bán BĐS**, **đầu tư sai giá trị thực tế**, gây thiệt hại
kinh tế.`,
  },

  // ============================================================
  // 8. Tiểu Hao tại Quan Lộc
  // ============================================================
  {
    id: 'tieu-hao-tai-quan-loc',
    title: 'Tiểu Hao tại Quan Lộc',
    sao: ['Tiểu Hao'],
    cung: ['Quan Lộc'],
    doUuTien: 73,
    tomTat: `⚡ **Tiểu Hao cư Quan Lộc:** công việc có **tính LƯU ĐỘNG**, hay **thay
đổi chỗ làm**, đổi nghề nghiệp.

🌟 **Phù hợp:** **xuất nhập khẩu, giao thông, đầu tư, vận tải, thương mại**
quy mô lớn.`,
  },

  {
    id: 'tieu-hao-tai-quan-loc-ham',
    sao: ['Tiểu Hao'],
    cung: ['Quan Lộc'],
    trangThai: ['Hãm'],
    doUuTien: 70,
    tomTat: `⚠️ **Tiểu Hao Hãm địa cư Quan Lộc:** cản trở **công danh, sự nghiệp** —
chí hướng **không bền**, hoặc gặp hoàn cảnh phải thay đổi, **khó nhất tâm với
một công việc**.`,
  },

  {
    id: 'tieu-hao-tai-quan-loc-cu-mon-vu-khuc-quyen',
    sao: ['Tiểu Hao', 'Đại Hao'],
    cung: ['Quan Lộc'],
    ketHop: ['Cự Môn', 'Vũ Khúc', 'Hóa Quyền'],
    doUuTien: 78,
    tomTat: `🌟 **Lưỡng Hao + Cự Môn + Vũ Khúc + Hóa Quyền tại Quan Lộc:** **TƯỚNG TRẤN
THỦ một phương bên ngoài** (quyền lực ở phương xa).`,
  },

  // ============================================================
  // 9. Tiểu Hao tại Nô Bộc
  // ============================================================
  {
    id: 'tieu-hao-tai-no-boc',
    title: 'Tiểu Hao tại Nô Bộc',
    sao: ['Tiểu Hao'],
    cung: ['Nô Bộc'],
    doUuTien: 68,
    tomTat: `⚠️ **Tiểu Hao cư Nô Bộc:** **khó thuê mướn người làm**, bị **tôi tớ trộm
cắp**, làm **hao tốn của cải** hoặc bị **người dưới, bạn bè ăn chặn**.

⚡ Hay **thay đổi bạn bè, đồng nghiệp**, ít chơi lâu bền — khi nhiều bạn khi
không có ai.`,
  },

  {
    id: 'tieu-hao-tai-no-boc-dac',
    sao: ['Tiểu Hao'],
    cung: ['Nô Bộc'],
    trangThai: ['Đắc'],
    doUuTien: 65,
    tomTat: `🌟 **Tiểu Hao Đắc địa tại Nô Bộc:** đầu tư cho bạn bè, các mối quan hệ có
**lợi trở lại**.`,
  },

  {
    id: 'tieu-hao-tai-no-boc-ham',
    sao: ['Tiểu Hao'],
    cung: ['Nô Bộc'],
    trangThai: ['Hãm'],
    doUuTien: 65,
    tomTat: `⚠️ **Tiểu Hao Hãm địa tại Nô Bộc:** đầu tư cho bạn bè, các mối quan hệ
**thất thoát, hao tán** không hợp lý.`,
  },

  {
    id: 'tieu-hao-tai-no-boc-quan-phu-phu',
    sao: ['Tiểu Hao'],
    cung: ['Nô Bộc'],
    ketHop: ['Quan Phù', 'Quan Phủ'],
    doUuTien: 65,
    tomTat: `⚠️ **Tiểu Hao tại Nô Bộc + Quan Phù / Quan Phủ:** bị **kiện cáo, tranh
tụng** làm hao tán.`,
  },

  {
    id: 'tieu-hao-tai-no-boc-sat-pha-tham-hinh',
    sao: ['Tiểu Hao'],
    cung: ['Nô Bộc'],
    ketHop: ['Thất Sát', 'Phá Quân', 'Tham Lang', 'Thiên Hình'],
    doUuTien: 65,
    tomTat: `⚠️ **Tiểu Hao tại Nô Bộc + Sát Phá Tham + Thiên Hình:** **bị cướp**.`,
  },

  // ============================================================
  // 10. Tiểu Hao tại Thiên Di
  // ============================================================
  {
    id: 'tieu-hao-tai-thien-di',
    title: 'Tiểu Hao tại Thiên Di',
    sao: ['Tiểu Hao'],
    cung: ['Thiên Di'],
    doUuTien: 68,
    tomTat: `⚠️ **Tiểu Hao cư Thiên Di:** ra ngoài hay gặp **chuyện phải tốn tiền,
tổn hao** — **tai nạn, mất mát**, các khoản chi **ngoài dự tính**.

⚡ Người thường phải **THA HƯƠNG LẬP NGHIỆP**, **thay đổi chỗ ở** nhiều lần,
khó lâu bền ở một nơi.`,
  },

  {
    id: 'tieu-hao-tai-thien-di-dac',
    sao: ['Tiểu Hao'],
    cung: ['Thiên Di'],
    trangThai: ['Đắc'],
    doUuTien: 65,
    tomTat: `🌟 **Tiểu Hao Đắc địa tại Thiên Di:** kinh doanh **PHÁT ĐẠT**, **"một vốn
bốn lời"**, thực hiện giao dịch tài chính lớn — sử dụng tiền bạc làm **công cụ
tạo mối quan hệ làm ăn**.`,
  },

  // ============================================================
  // 11. Tiểu Hao tại Tật Ách
  // ============================================================
  {
    id: 'tieu-hao-tai-tat-ach',
    title: 'Tiểu Hao tại Tật Ách',
    sao: ['Tiểu Hao'],
    cung: ['Tật Ách'],
    doUuTien: 73,
    tomTat: `🌟 **Tiểu Hao cư Tật Ách:** làm **HAO TRỪ tật bệnh** — đẩy lùi bệnh tật,
nhất là **bệnh mãn tính**. Có thể **dùng tiền chữa chạy**.

⚡ **Bệnh thường gặp:** liên quan **bộ phận tiêu hóa, đường ruột, gan, dạ dày**.`,
  },

  {
    id: 'tieu-hao-tai-tat-ach-dac',
    sao: ['Tiểu Hao'],
    cung: ['Tật Ách'],
    trangThai: ['Đắc'],
    doUuTien: 70,
    tomTat: `⚠️ **NGOẠI LỆ — Tiểu Hao Đắc địa tại Tật Ách:** không tốt — gây **TÍCH TỤ,
ứ đọng** tai họa, bệnh tật → bệnh **bùng phát DỮ DỘI, dồn dập**.`,
  },

  {
    id: 'tieu-hao-tai-tat-ach-pha-quan-song-hao-sat-moc-ky',
    sao: ['Tiểu Hao'],
    cung: ['Tật Ách'],
    ketHop: ['Phá Quân', 'Đại Hao', 'Thất Sát', 'Mộc Dục', 'Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `⚠️ **Tiểu Hao tại Tật Ách + Phá Quân / Song Hao / Thất Sát / Mộc Dục / Hóa
Kỵ:** thường bị **UNG NHỌT, UNG THƯ phải mổ xẻ**.`,
  },

  {
    id: 'tieu-hao-tai-tat-ach-kinh-da-khong-kiep-ky',
    sao: ['Tiểu Hao'],
    cung: ['Tật Ách'],
    ketHop: ['Kình Dương', 'Đà La', 'Địa Không', 'Địa Kiếp', 'Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `⚠️ **Tiểu Hao tại Tật Ách + Kình Đà / Không Kiếp / Hóa Kỵ:** vì đam mê thứ
gì đó (cờ bạc, rượu chè) mà sinh ra bệnh.`,
  },

  // ============================================================
  // 12. Tiểu Hao tại Tài Bạch
  // ============================================================
  {
    id: 'tieu-hao-tai-tai-bach',
    title: 'Tiểu Hao tại Tài Bạch',
    sao: ['Tiểu Hao'],
    cung: ['Tài Bạch'],
    doUuTien: 73,
    tomTat: `**Tiểu Hao cư Tài Bạch:** ảnh hưởng tài chính rất rõ — biểu hiện theo
trạng thái đắc / hãm.`,
  },

  {
    id: 'tieu-hao-ham-tai-bach-dien-trach-phuc-duc',
    title: 'Tiểu Hao Hãm tại Tài / Điền / Phúc - rất xấu',
    sao: ['Tiểu Hao'],
    cung: ['Tài Bạch', 'Điền Trạch', 'Phúc Đức'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `⚠️ **Tiểu Hao Hãm địa rất kỵ tại Tài Bạch / Điền Trạch / Phúc Đức** — 3
cung Tài/Điền/Phúc nếu có Tiểu Hao Hãm là **rất xấu**.`,
  },

  {
    id: 'tieu-hao-tai-tai-bach-ham',
    sao: ['Tiểu Hao'],
    cung: ['Tài Bạch'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `⚠️ **Tiểu Hao Hãm địa cư Tài Bạch:** **TÁN TÀI, HAO TÀI**, **nghèo túng**,
có tiền phải **tiêu luôn**, **khó tích trữ**.`,
  },

  {
    id: 'tieu-hao-tai-tai-bach-dao-hong',
    sao: ['Tiểu Hao'],
    cung: ['Tài Bạch'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 73,
    tomTat: `⚠️ **Tiểu Hao tại Tài Bạch + Đào / Hồng:** tốn tiền vì **nhân tình, làm
đẹp**.`,
  },

  {
    id: 'tieu-hao-tai-tai-bach-pha-quan-tuyet',
    sao: ['Tiểu Hao'],
    cung: ['Tài Bạch'],
    ketHop: ['Phá Quân', 'Tuyệt'],
    doUuTien: 73,
    tomTat: `⚠️ **Tiểu Hao tại Tài Bạch + Phá Quân / Tuyệt:** dễ **PHÁ SẢN**.`,
  },

  {
    id: 'tieu-hao-tai-tai-bach-kinh-da-khong-kiep',
    sao: ['Tiểu Hao'],
    cung: ['Tài Bạch'],
    ketHop: ['Kình Dương', 'Đà La', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 73,
    tomTat: `⚠️ **Tiểu Hao tại Tài Bạch + Kình / Đà / Không / Kiếp:** cũng **bị PHÁ
SẢN**.`,
  },

  {
    id: 'tieu-hao-tai-tai-bach-dac',
    sao: ['Tiểu Hao'],
    cung: ['Tài Bạch'],
    trangThai: ['Đắc'],
    doUuTien: 78,
    tomTat: `🌟 **Tiểu Hao Đắc địa cư Tài Bạch:** **CỰC TỐT** — đồng tiền vẫn ra vào
liên tục nhưng **tạo ra nhiều của tiền hơn** — **kiếm ra đồng nào lại đem đi
đầu tư**, **lãi mẹ đẻ lãi con** → cách **VÔ CÙNG GIÀU CÓ**.

→ "Buôn may bán đắt", đầu tư không ngừng nghỉ, kiếm lời từ vốn quay vòng.`,
  },

  // ============================================================
  // 13. Tiểu Hao tại Tử Tức
  // ============================================================
  {
    id: 'tieu-hao-tai-tu-tuc',
    title: 'Tiểu Hao tại Tử Tức',
    sao: ['Tiểu Hao'],
    cung: ['Tử Tức'],
    doUuTien: 65,
    tomTat: `**Tiểu Hao cư Tử Tức:** Con cái **không ở gần cha mẹ**, sống **tự lập từ
sớm** — "chim non rời tổ". Con cái **làm hao tán tiền của cha mẹ**.`,
  },

  {
    id: 'tieu-hao-tai-tu-tuc-ham',
    sao: ['Tiểu Hao'],
    cung: ['Tử Tức'],
    trangThai: ['Hãm'],
    doUuTien: 68,
    tomTat: `⚠️ **Tiểu Hao Hãm địa cư Tử Tức:** **giảm số lượng con cái** — **sinh
nhiều nhưng nuôi ít**, mất mát hoặc sa sảy.`,
  },

  {
    id: 'tieu-hao-tai-tu-tuc-dac',
    sao: ['Tiểu Hao'],
    cung: ['Tử Tức'],
    trangThai: ['Đắc'],
    doUuTien: 68,
    tomTat: `🌟 **Tiểu Hao Đắc địa tại Tử Tức:** việc đầu tư cho con có **HIỆU QUẢ** —
con cái **thông minh, ham học**.`,
  },

  // ============================================================
  // 14. Tiểu Hao tại Phu Thê
  // ============================================================
  {
    id: 'tieu-hao-tai-phu-the',
    title: 'Tiểu Hao tại Phu Thê',
    sao: ['Tiểu Hao'],
    cung: ['Phu Thê'],
    doUuTien: 70,
    tomTat: `⚠️ **Tiểu Hao cư Phu Thê:** **không ưa** — hội thêm **sát bại tinh** làm
**giảm nhân duyên** vợ chồng.

⚡ Vợ chồng dễ **xa quê cách quán**.`,
  },

  {
    id: 'tieu-hao-tai-phu-the-ham',
    sao: ['Tiểu Hao'],
    cung: ['Phu Thê'],
    trangThai: ['Hãm'],
    doUuTien: 73,
    tomTat: `⚠️ **Tiểu Hao Hãm địa tại Phu Thê:** người hôn phối **HOANG TÀN, phá của**,
gây **chia ly**.`,
  },

  {
    id: 'tieu-hao-tai-phu-the-dac-dao-hong',
    sao: ['Tiểu Hao'],
    cung: ['Phu Thê'],
    trangThai: ['Đắc'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 70,
    tomTat: `⚠️ **Tiểu Hao Đắc địa + Đào Hồng thủ Mệnh tại Phu Thê:** dễ **NHIỀU VỢ,
thê thiếp**, "**mỗi ngày ở với một bà**".`,
  },

  {
    id: 'tieu-hao-tai-phu-the-da-hinh-rieu',
    sao: ['Tiểu Hao'],
    cung: ['Phu Thê'],
    ketHop: ['Đà La', 'Thiên Hình', 'Thiên Riêu'],
    doUuTien: 70,
    tomTat: `⚠️ **Tiểu Hao tại Phu Thê + Đà La / Thiên Hình / Thiên Riêu:** người hôn
phối **phong lưu, phá tán**, **"ông ăn chả bà ăn nem"**.`,
  },

  {
    id: 'tieu-hao-tai-phu-the-dac-cat-tinh',
    sao: ['Tiểu Hao'],
    cung: ['Phu Thê'],
    trangThai: ['Đắc'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 70,
    tomTat: `🌟 **Tiểu Hao Đắc địa + cát tinh tại Phu Thê:** chủ mệnh **quan tâm, chiều
chuộng** bạn đời. Người hôn phối **giỏi giang, biết xoay sở tài chính**, có
duyên kinh doanh.`,
  },

  // ============================================================
  // 15. Tiểu Hao tại Huynh Đệ
  // ============================================================
  {
    id: 'tieu-hao-tai-huynh-de',
    title: 'Tiểu Hao tại Huynh Đệ',
    sao: ['Tiểu Hao'],
    cung: ['Huynh Đệ'],
    doUuTien: 68,
    tomTat: `⚠️ **Tiểu Hao cư Huynh Đệ:** **GIẢM số lượng anh chị em**.

⚡ Anh chị em **ly tán**, mỗi người một chí hướng, dễ có người **chơi bời phá
tán**, gây **tổn thất tài sản chung**.`,
  },

  {
    id: 'tieu-hao-tai-huynh-de-sat-bai-tinh',
    sao: ['Tiểu Hao'],
    cung: ['Huynh Đệ'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 65,
    tomTat: `⚠️ **Tiểu Hao tại Huynh Đệ + Sát bại tinh:** dễ có người **chết trẻ**,
**khó thọ**, mất mát/sa sảy trong bụng mẹ.`,
  },

  {
    id: 'tieu-hao-tai-huynh-de-dac',
    sao: ['Tiểu Hao'],
    cung: ['Huynh Đệ'],
    trangThai: ['Đắc'],
    doUuTien: 65,
    tomTat: `🌟 **Tiểu Hao Đắc địa tại Huynh Đệ:** anh em có người **giỏi làm ăn kinh
tế, GIÀU CÓ KHÁ GIẢ** → "**một người làm quan, cả họ được nhờ**".`,
  },

  // ============================================================
  // 16. Song Hao + Cự Cơ Mão Dậu
  // ============================================================
  {
    id: 'song-hao-cu-co-mao-dau',
    title: 'Song Hao + Cự Cơ Mão Dậu - Đại phú',
    sao: ['Tiểu Hao', 'Đại Hao'],
    chi: ['Mão', 'Dậu'],
    ketHop: ['Cự Môn', 'Thiên Cơ'],
    doUuTien: 90,
    tomTat: `🌟 **Song Hao + Cự Môn + Thiên Cơ tại Mão Dậu** = **CỰC TỐT**:
- **RẤT THÔNG MINH**
- **GIÀU CÓ**, **tiền bạc thừa thãi vô cùng**

→ Cách "Cự Cơ Mão Dậu" + Song Hao đắc địa là một trong những cách cục tài lộc
**đẹp nhất** trong tử vi. Tiền tài lưu thông như "Chúng Thủy Triều Đông", càng
chi càng có lại.`,
  },

  // ============================================================
  // 17. Tiểu Hao + Tuyệt - xảo quyệt keo kiệt
  // ============================================================
  {
    id: 'tieu-hao-tuyet',
    title: 'Tiểu Hao + Tuyệt - Xảo quyệt, keo kiệt',
    sao: ['Tiểu Hao'],
    ketHop: ['Tuyệt'],
    doUuTien: 60,
    tomTat: `⚠️ **Tiểu Hao + Tuyệt đồng cung:** người **XẢO QUYỆT**.

→ Người **mưu mô, sẵn sàng dùng mánh khóe** chiếm lợi từ người khác → mất dần
**sự tin tưởng** của người xung quanh, **"một lần bất tín, vạn lần bất tin"**.`,
  },

  {
    id: 'tieu-hao-tuyet-menh-vcd',
    title: 'Tiểu Hao + Tuyệt tại Mệnh VCD',
    sao: ['Tiểu Hao'],
    cung: ['Mệnh'],
    ketHop: ['Tuyệt'],
    doUuTien: 65,
    tomTat: `⚠️ **Tiểu Hao + Tuyệt tại Mệnh VCD** (Vô Chính Diệu): càng **xảo trá**,
**rất KEO KIỆT, tham lận**.`,
  },

  // ============================================================
  // 18. Tiểu Hao + Đào Hồng - tốn tiền cho nhân tình
  // ============================================================
  {
    id: 'tieu-hao-dao-hong',
    title: 'Tiểu Hao + Đào Hoa / Hồng Loan - Tốn tiền cho nhân tình',
    sao: ['Tiểu Hao', 'Đại Hao'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 60,
    tomTat: `⚠️ **Tiểu Hao / Đại Hao + Đào Hoa / Hồng Loan:** **TỐN TIỀN CHO NHÂN
TÌNH**, đầu tư tiền bạc để **chiều lòng nhân tình**, **làm đẹp**.

→ "Vung tay quá trán" cho các **mối quan hệ ngoài luồng**:
- Tài chính **thâm hụt**
- Tiềm ẩn nguy cơ **đổ vỡ hôn nhân**, **mất hòa khí gia đình**`,
  },

  // ============================================================
  // 19. Tiểu Hao + Hình + Không Kiếp + Hỏa Linh - nghiện ngập
  // ============================================================
  {
    id: 'tieu-hao-hinh-khong-kiep-hoa-linh',
    title: 'Tiểu Hao + Thiên Hình + Không Kiếp + Hỏa Linh - Nghiện ngập',
    sao: ['Tiểu Hao'],
    ketHop: ['Thiên Hình', 'Địa Không', 'Địa Kiếp', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 62,
    tomTat: `⚠️ **Tiểu Hao + Thiên Hình + Không Kiếp + Hỏa Linh:** rơi vào **NGHIỆN
NGẬP** (rượu chè, cờ bạc, ma túy).

→ Ban đầu chỉ "thử một lần cho biết", rồi **"ngựa quen đường cũ"**, càng ngày
càng **lún sâu**:
- **Tán gia bại sản**
- **Hủy hoại sức khỏe**
- Như **"con thiêu thân lao vào lửa"** — biết hại nhưng không dừng được

→ Tốn tiền của + tổn hại **danh dự, uy tín, mối quan hệ**.`,
  },

  // ============================================================
  // 20. Tiểu Hao + Phá / Tuyệt / Kình Đà / Không Kiếp - phá sản
  // ============================================================
  {
    id: 'tieu-hao-pha-san',
    title: 'Tiểu Hao + Phá Quân / Tuyệt / Kình Đà / Không Kiếp - Phá sản',
    sao: ['Tiểu Hao'],
    ketHop: ['Phá Quân', 'Tuyệt', 'Kình Dương', 'Đà La', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 60,
    tomTat: `⚠️ **Tiểu Hao + Phá Quân / Tuyệt:** dễ **PHÁ SẢN**.

⚠️ **Tiểu Hao + Kình / Đà / Không / Kiếp:** cũng **PHÁ SẢN**.

→ Tâm lý "**được ăn cả, ngã về không**" → đầu tư quá mức, chơi lớn → mất hết.`,
  },

  {
    id: 'tieu-hao-pha-san-menh-tai-bach',
    title: 'Tiểu Hao phá sản tại Mệnh / Tài Bạch',
    sao: ['Tiểu Hao'],
    cung: ['Mệnh', 'Tài Bạch'],
    ketHop: ['Phá Quân', 'Tuyệt', 'Kình Dương', 'Đà La', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 65,
    tomTat: `⚠️ **Tiểu Hao + sát phá tinh tại Mệnh / Tài Bạch:** đặc biệt nguy hiểm —
nguy cơ **PHÁ SẢN** rất cao.`,
  },

  // ============================================================
  // 21. Song Hao + Quan Phù / Quan Phủ - kiện cáo
  // ============================================================
  {
    id: 'song-hao-quan-phu-phu',
    title: 'Song Hao + Quan Phù / Quan Phủ - Kiện cáo, tranh tụng',
    sao: ['Tiểu Hao', 'Đại Hao'],
    ketHop: ['Quan Phù', 'Quan Phủ'],
    doUuTien: 60,
    tomTat: `⚠️ **Song Hao + Quan Phù hoặc Quan Phủ:** bị **KIỆN CÁO, TRANH TỤNG**
làm **hao tán**.

⚠️ **+ Sát Phá Tham + Thiên Hình:** **bị CƯỚP**.

→ Vướng vào kiện tụng tài chính, mất tiền vì pháp lý, hoặc thậm chí bị cướp
tài sản.`,
  },

  // ============================================================
  // 22. Tiểu Hao vào hạn
  // ============================================================
  {
    id: 'tieu-hao-vao-han',
    title: 'Tiểu Hao vào hạn',
    sao: ['Tiểu Hao'],
    doUuTien: 50,
    tomTat: `⚠️ **Hạn có Tiểu Hao:** dịp **HAO TÀI TỐN CỦA**:
- Không vì tang khó, bệnh tật → thì bị **mất trộm**
- 🌟 **Đắc địa:** **HOẠCH TÀI** (được tiền bất ngờ), dễ hao tốn vì **đầu tư
  vào chỗ khác**

⚡ Có sự **THAY ĐỔI** về:
- **Nghề nghiệp, chỗ làm**
- **Nơi ở**
- Hoặc **đi nước ngoài**

🌟 Nếu đang **ốm đau** → dễ **mau hết bệnh**.`,
  },
];
