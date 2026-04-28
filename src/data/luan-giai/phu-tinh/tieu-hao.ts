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

⚡ **Đặc trưng tiêu xài:**
- **Hào phóng**, **thích tiêu pha**
- 🌟 **Hao ĐẮC ĐỊA:** tiêu xài rộng rãi nhưng **hết tiền lại có** — thông minh,
  ham học, **muốn trông xa biết rộng**
- ⚠️ **Hao HÃM ĐỊA + Hóa Kỵ / Phá Quân / sát tinh:** tiền tài hao tán → túng
  thiếu, **thất thường**

⚡ Người **HAY LY HƯƠNG LẬP NGHIỆP**, thích đi đây đi đó, nghề **lưu động** —
xuất nhập khẩu, vận tải.

⚠️ **Hao HÃM + sát bại tinh:** dễ có **đam mê** (cờ bạc, rượu chè, thú vui)
hoặc **bị ghiền** (rượu, thuốc...) — đam mê chỉ trong 1 giai đoạn rồi chuyển
sang đam mê khác.`,
  },

  // ============================================================
  // 5. Tiểu Hao tại Phụ Mẫu
  // ============================================================
  {
    id: 'tieu-hao-tai-phu-mau',
    title: 'Tiểu Hao tại Phụ Mẫu',
    sao: ['Tiểu Hao'],
    cung: ['Phụ Mẫu'],
    doUuTien: 70,
    tomTat: `**Tiểu Hao cư Phụ Mẫu:** cha mẹ **không sống gần quê cha đất tổ**,
phải **thay đổi nơi ăn chốn ở, nghề nghiệp**.

⚠️ **Hãm địa:** cha mẹ **gầy gò, vất vả**, đồng tiền **tán tụ thất thường**.

🌟 **Đắc địa:** giảm bớt tính xấu — cha mẹ thường làm **đầu tư, kinh doanh
buôn bán**. Dòng tiền giữa đương số và cha mẹ nhiều — có thể được cha mẹ tạo
điều kiện đầu tư hoặc giúp đỡ ngược lại.

⚠️ **+ Thiên Hình / Thiên Việt:** cha mẹ **khó tính, nghiêm khắc**, hay **ép
buộc con cái** phải nghe theo.`,
  },

  // ============================================================
  // 6. Tiểu Hao tại Phúc Đức
  // ============================================================
  {
    id: 'tieu-hao-tai-phuc-duc',
    title: 'Tiểu Hao tại Phúc Đức',
    sao: ['Tiểu Hao'],
    cung: ['Phúc Đức'],
    doUuTien: 72,
    tomTat: `⚠️ **Tiểu Hao HÃM cư Phúc Đức:** **ĐIỂM KỴ** — làm **giảm phúc phần,
may mắn** tổ tiên để lại.

⚠️ Trong dòng họ **nhiều người nghèo túng, bần hàn**, phải **tha hương lập
nghiệp** — "tha hương cầu thực", mỗi người một nơi.

⚠️ **+ Địa Kiếp:** đương số **cô độc, vất vả** hoặc nhiều **trách nhiệm nặng
nề** với họ hàng. Dễ vào con đường **kiếm tiền không chính nghĩa**, gây **hao
tổn phước đức**.

🌟 **Tiểu Hao ĐẮC ĐỊA cư Phúc:** người có **PHƯỚC ĐỨC TỐT**, được may mắn về
tiền của — biết **dùng tiền làm phúc**, tôn bồi phúc đức cho mình và dòng tộc.

⚡ **Đặc trưng mộ phần:** xung quanh mồ mả tổ tiên có **mạch nước**, **dòng
suối, dòng sông** chạy qua. Tùy đắc/hãm để xác định tốt xấu.`,
  },

  // ============================================================
  // 7. Tiểu Hao tại Điền Trạch
  // ============================================================
  {
    id: 'tieu-hao-tai-dien-trach',
    title: 'Tiểu Hao tại Điền Trạch',
    sao: ['Tiểu Hao'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `⚠️ **Tiểu Hao HÃM cư Điền:** **TÁN nhiều TỤ ít**, khó giàu có (đặc
biệt + **Không Kiếp**). Dù có cũng phải **bán** hoặc **hao tốn tài sản**.

⚡ Hay **hao tốn vì dọn nhà cửa, thay đổi chỗ ở**, đổi nơi làm việc.

🌟 **Tiểu Hao ĐẮC ĐỊA cư Điền:** vẫn hay thay đổi nhà cửa nhưng trên vị thế
**buôn bán, kinh doanh BẤT ĐỘNG SẢN có lãi**, nhà ngày càng **TO HƠN**.

🌟 Người dễ **mở xưởng sản xuất, chế tạo** các nguồn hàng số lượng lớn, ra
vào liên tục.

⚡ **Đặc trưng nhà:** gần **dòng sông, dòng suối, mạch nước ngầm** chạy qua,
**nhà 2 mặt tiền**.

⚠️ **+ Địa Kiếp:** "thêm dầu vào lửa" → dễ mắc **sai lầm trong mua bán BĐS**,
**đầu tư sai giá trị thực tế**, gây thiệt hại kinh tế.`,
  },

  // ============================================================
  // 8. Tiểu Hao tại Quan Lộc
  // ============================================================
  {
    id: 'tieu-hao-tai-quan-loc',
    title: 'Tiểu Hao tại Quan Lộc',
    sao: ['Tiểu Hao'],
    cung: ['Quan Lộc'],
    doUuTien: 75,
    tomTat: `⚡ **Tiểu Hao cư Quan:** công việc có **tính LƯU ĐỘNG**, hay **thay
đổi chỗ làm**, đổi nghề nghiệp.

🌟 **Phù hợp:** **xuất nhập khẩu, giao thông, đầu tư, vận tải, thương mại**
quy mô lớn.

⚠️ **Tiểu Hao HÃM:** cản trở **công danh, sự nghiệp** — chí hướng **không bền**,
hoặc gặp hoàn cảnh phải thay đổi, **khó nhất tâm với một công việc**.

🌟 **Cách đặc biệt:** Lưỡng Hao + Cự Môn + Vũ Khúc + Hóa Quyền → **TƯỚNG TRẤN
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
    doUuTien: 70,
    tomTat: `⚠️ **Tiểu Hao cư Nô:** **khó thuê mướn người làm**, bị **tôi tớ trộm
cắp**, làm **hao tốn của cải** hoặc bị **người dưới, bạn bè ăn chặn**.

⚡ Hay **thay đổi bạn bè, đồng nghiệp**, ít chơi lâu bền — khi nhiều bạn khi
không có ai.

⚡ Đầu tư nhiều cho bạn bè, các mối quan hệ:
- 🌟 **Đắc:** đầu tư có **lợi trở lại**
- ⚠️ **Hãm:** **thất thoát, hao tán** không hợp lý

⚠️ **+ Quan Phù / Quan Phủ:** bị **kiện cáo, tranh tụng** làm hao tán.

⚠️ **+ Sát Phá Tham + Thiên Hình:** **bị cướp**.`,
  },

  // ============================================================
  // 10. Tiểu Hao tại Thiên Di
  // ============================================================
  {
    id: 'tieu-hao-tai-thien-di',
    title: 'Tiểu Hao tại Thiên Di',
    sao: ['Tiểu Hao'],
    cung: ['Thiên Di'],
    doUuTien: 70,
    tomTat: `⚠️ **Tiểu Hao cư Thiên Di:** ra ngoài hay gặp **chuyện phải tốn tiền,
tổn hao** — **tai nạn, mất mát**, các khoản chi **ngoài dự tính**.

⚡ Người thường phải **THA HƯƠNG LẬP NGHIỆP**, **thay đổi chỗ ở** nhiều lần,
khó lâu bền ở một nơi.

🌟 **Tiểu Hao ĐẮC ĐỊA:** kinh doanh **PHÁT ĐẠT**, **"một vốn bốn lời"**, thực
hiện giao dịch tài chính lớn — sử dụng tiền bạc làm **công cụ tạo mối quan
hệ làm ăn**.`,
  },

  // ============================================================
  // 11. Tiểu Hao tại Tật Ách
  // ============================================================
  {
    id: 'tieu-hao-tai-tat-ach',
    title: 'Tiểu Hao tại Tật Ách',
    sao: ['Tiểu Hao'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `🌟 **Tiểu Hao cư Tật:** làm **HAO TRỪ tật bệnh** — đẩy lùi bệnh tật,
nhất là **bệnh mãn tính**. Có thể **dùng tiền chữa chạy**.

⚠️ **NGOẠI LỆ — Hao ĐẮC ĐỊA tại Tật:** không tốt — gây **TÍCH TỤ, ứ đọng** tai
họa, bệnh tật → bệnh **bùng phát DỮ DỘI, dồn dập**.

⚡ **Bệnh thường gặp:** liên quan **bộ phận tiêu hóa, đường ruột, gan, dạ dày**.

⚠️ **+ Phá Quân / Song Hao / Thất Sát / Mộc Dục / Hóa Kỵ:** thường bị **UNG
NHỌT, UNG THƯ phải mổ xẻ**.

⚠️ **+ Kình Đà / Không Kiếp / Hóa Kỵ:** vì đam mê thứ gì đó (cờ bạc, rượu chè)
mà sinh ra bệnh.`,
  },

  // ============================================================
  // 12. Tiểu Hao tại Tài Bạch
  // ============================================================
  {
    id: 'tieu-hao-tai-tai-bach',
    title: 'Tiểu Hao tại Tài Bạch',
    sao: ['Tiểu Hao'],
    cung: ['Tài Bạch'],
    doUuTien: 80,
    tomTat: `⚠️ **Tiểu Hao cư Tài (HÃM):** **TÁN TÀI, HAO TÀI**, **nghèo túng**,
có tiền phải **tiêu luôn**, **khó tích trữ**.

⚠️ **+ Đào / Hồng:** tốn tiền vì **nhân tình, làm đẹp**.

⚠️ **+ Phá Quân / Tuyệt:** dễ **PHÁ SẢN**.

⚠️ **+ Kình / Đà / Không / Kiếp:** cũng **bị PHÁ SẢN**.

🌟 **Tiểu Hao ĐẮC ĐỊA cư Tài:** **CỰC TỐT** — đồng tiền vẫn ra vào liên tục
nhưng **tạo ra nhiều của tiền hơn** — **kiếm ra đồng nào lại đem đi đầu tư**,
**lãi mẹ đẻ lãi con** → cách **VÔ CÙNG GIÀU CÓ**.

→ "Buôn may bán đắt", đầu tư không ngừng nghỉ, kiếm lời từ vốn quay vòng.

⚡ **Lưu ý:** Tiểu Hao HÃM rất **kỵ** ở Tài Bạch, Điền Trạch, Phúc Đức → 3 cung
Tài/Điền/Phúc nếu có Tiểu Hao Hãm là **rất xấu**.`,
  },

  // ============================================================
  // 13. Tiểu Hao tại Tử Tức
  // ============================================================
  {
    id: 'tieu-hao-tai-tu-tuc',
    title: 'Tiểu Hao tại Tử Tức',
    sao: ['Tiểu Hao'],
    cung: ['Tử Tức'],
    doUuTien: 70,
    tomTat: `⚠️ **Tiểu Hao HÃM cư Tử Tức:** **giảm số lượng con cái** — **sinh
nhiều nhưng nuôi ít**, mất mát hoặc sa sảy.

⚡ Con cái **không ở gần cha mẹ**, sống **tự lập từ sớm** — "chim non rời tổ".
Con cái **làm hao tán tiền của cha mẹ**.

🌟 **Tiểu Hao ĐẮC ĐỊA:** việc đầu tư cho con có **HIỆU QUẢ** — con cái **thông
minh, ham học**.`,
  },

  // ============================================================
  // 14. Tiểu Hao tại Phu Thê
  // ============================================================
  {
    id: 'tieu-hao-tai-phu-the',
    title: 'Tiểu Hao tại Phu Thê',
    sao: ['Tiểu Hao'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `⚠️ **Tiểu Hao cư Phu Thê:** **không ưa** — hội thêm **sát bại tinh**
làm **giảm nhân duyên** vợ chồng.

⚡ Vợ chồng dễ **xa quê cách quán**.

⚠️ **Hao HÃM ĐỊA:** người hôn phối **HOANG TÀN, phá của**, gây **chia ly**.

⚠️ **Hao ĐẮC ĐỊA + Đào Hồng thủ Mệnh:** dễ **NHIỀU VỢ, thê thiếp**, "**mỗi
ngày ở với một bà**".

⚠️ **+ Đà La / Thiên Hình / Thiên Riêu:** người hôn phối **phong lưu, phá tán**,
**"ông ăn chả bà ăn nem"**.

🌟 **Đắc + cát tinh:** chủ mệnh **quan tâm, chiều chuộng** bạn đời. Người hôn
phối **giỏi giang, biết xoay sở tài chính**, có duyên kinh doanh.`,
  },

  // ============================================================
  // 15. Tiểu Hao tại Huynh Đệ
  // ============================================================
  {
    id: 'tieu-hao-tai-huynh-de',
    title: 'Tiểu Hao tại Huynh Đệ',
    sao: ['Tiểu Hao'],
    cung: ['Huynh Đệ'],
    doUuTien: 70,
    tomTat: `⚠️ **Tiểu Hao cư Huynh Đệ:** **GIẢM số lượng anh chị em**.

⚠️ **+ Sát bại tinh:** dễ có người **chết trẻ**, **khó thọ**, mất mát/sa sảy
trong bụng mẹ.

⚡ Anh chị em **ly tán**, mỗi người một chí hướng, dễ có người **chơi bời phá
tán**, gây **tổn thất tài sản chung**.

🌟 **Tiểu Hao ĐẮC ĐỊA:** anh em có người **giỏi làm ăn kinh tế, GIÀU CÓ KHÁ
GIẢ** → "**một người làm quan, cả họ được nhờ**".`,
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

⚠️ **+ Mệnh VCD** (Vô Chính Diệu): càng **xảo trá**, **rất KEO KIỆT, tham
lận**.

→ Người **mưu mô, sẵn sàng dùng mánh khóe** chiếm lợi từ người khác → mất dần
**sự tin tưởng** của người xung quanh, **"một lần bất tín, vạn lần bất tin"**.`,
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

→ Tâm lý "**được ăn cả, ngã về không**" → đầu tư quá mức, chơi lớn → mất hết.

⚠️ Đặc biệt nguy hiểm khi tại **cung Tài Bạch** hoặc **cung Mệnh**.`,
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
