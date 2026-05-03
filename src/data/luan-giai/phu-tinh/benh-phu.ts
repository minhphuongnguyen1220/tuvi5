import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO BỆNH PHÙ - Thổ, Bại Tinh, vòng Lộc Tồn (vị trí 9)
 * Sao chủ về đau ốm, suy nhược, bệnh tật mãn tính
 */
export const luanGiai_BenhPhu: DoanLuanGiai[] = [
  {
    id: 'benh-phu-tinh-chat-chung',
    title: 'Bệnh Phù - Đặc tính chung',
    sao: ['Bệnh Phù'],
    doUuTien: 30,
    tomTat: `**Bệnh Phù** — phụ tinh **BẠI TINH** trong **vòng Lộc Tồn** (vị trí
thứ **9**).

**Ngũ hành:** **Thổ**.

**Đặc tính:** **đau yếu, bệnh tật, sức khỏe MỎNG MANH, sức đề kháng YẾU**.

⚡ **Bản chất:** sao đại diện cho **suy nhược, dễ buồn rầu vì bệnh tật** — gắn
liền với:
- **Bệnh tật mãn tính** kéo dài
- **Tinh thần chán nản, uể oải**
- **Stress, tâm trạng không ổn định**

⚡ **Đặc trưng hành Thổ:** chủ sự **bế tắc, cố định** → bệnh thường **khó chữa,
đeo bám LÂU NGÀY** (viêm xoang, đau dạ dày, cảm cúm kéo dài).`,
  },

  {
    id: 'benh-phu-tai-menh',
    title: 'Bệnh Phù tại Mệnh - Bệnh tật ốm đau',
    sao: ['Bệnh Phù'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `⚠️ **Bệnh Phù thủ Mệnh:** thể chất **SUY YẾU**, tinh thần **TRÌ
TRỆ** — bệnh tật **kéo dài không rõ nguyên nhân**.

**Tướng mạo:**
- **Sắc diện kém tươi**, da dẻ **không hồng hào**
- **Ánh mắt thiếu thần sắc**
- Thể trạng mệt mỏi → "trái gió trở trời" dễ sinh ốm đau

⚠️ **Tâm lý LƯỜI BIẾNG:** uể oải, buồn chán, **né tránh vận động** → thể
chất càng suy nhược. **Lười từ trong tư tưởng**, không muốn dấn thân.

⚠️ **Bệnh MÃN TÍNH** đeo bám: viêm xoang, đau dạ dày, cảm cúm kéo dài. Tuy
không "thập tử nhất sinh" nhưng phải chịu **vòng lặp ốm đau dai dẳng**.

⚠️ **VÒNG LẶP NGUY HIỂM:** càng mệt → càng lười → càng yếu → càng mệt → "**sống
chung với bệnh tật suốt đời**" nếu không có ý chí cải thiện.`,
  },

  {
    id: 'benh-phu-tai-phu-mau',
    title: 'Bệnh Phù tại Phụ Mẫu',
    sao: ['Bệnh Phù'],
    cung: ['Phụ Mẫu'],
    doUuTien: 70,
    tomTat: `⚠️ **Bệnh Phù cư Phụ Mẫu:** dấu hiệu **không tích cực** về sức khỏe
cha mẹ — cơ thể **dễ đau ốm**, tinh thần **mỏi mệt kéo dài**.

⚡ Cha mẹ thường **không quan tâm nhiều** tới nhà cửa, con cái → không khí
gia đình **lạnh nhạt, thiếu đầm ấm**.

⚠️ **Liên kết cha mẹ - con** có khoảng trống khó lấp đầy. Cha mẹ **ít tâm sự**,
con cái cũng khó sẻ chia → tình cảm gia đình **xa cách**.`,
  },

  {
    id: 'benh-phu-tai-phuc-duc',
    title: 'Bệnh Phù tại Phúc Đức',
    sao: ['Bệnh Phù'],
    cung: ['Phúc Đức'],
    doUuTien: 72,
    tomTat: `⚠️ **Bệnh Phù cư Phúc Đức:** **PHÚC PHẦN dòng họ SUY GIẢM**.

⚠️ Trong gia tộc nhiều người **ốm đau triền miên**, sức khỏe yếu hoặc mắc
**bệnh mãn tính dai dẳng**.

⚠️ Tinh thần chủ mệnh có nhiều **NỖI LO SỢ KHÓ DỨT**, luôn thường trực **cảm
giác BẤT AN không rõ nguyên do**.

⚠️ Con cháu đời sau **không lưu tâm** việc thờ cúng, **tu sửa mồ mả** → vận
khí dòng họ khó hanh thông.`,
  },

  {
    id: 'benh-phu-tai-dien-trach',
    title: 'Bệnh Phù tại Điền Trạch',
    sao: ['Bệnh Phù'],
    cung: ['Điền Trạch'],
    doUuTien: 72,
    tomTat: `⚠️ **Bệnh Phù cư Điền:** nơi ở mang **PHONG THỦY KHÔNG TỐT**.

**Đặc trưng nhà:**
- **Ẩm thấp, thiếu ánh nắng mặt trời**
- → Người ở **dễ sinh ốm đau**, mỏi mệt không rõ lý do

⚠️ Đương số có **tâm thế Ỷ LẠI**, lười biếng → nhà cửa **ít được chăm sóc**,
**bẩn thỉu, ẩm thấp**.

⚠️ Ở lâu càng sinh bệnh → **thể chất + tinh thần** đều hao tổn. Tâm lý **u
uất, chán nản**, không có cảm giác được "**tiếp lửa**" khi về tổ ấm.`,
  },

  {
    id: 'benh-phu-tai-quan-loc',
    title: 'Bệnh Phù tại Quan Lộc',
    sao: ['Bệnh Phù'],
    cung: ['Quan Lộc'],
    doUuTien: 75,
    tomTat: `⚠️ **Bệnh Phù cư Quan:** sự nghiệp **KHÔNG SÁNG LẠN**, dễ rơi vào
**"lực bất tòng tâm"**.

⚡ Đương số dễ có hứng thú và làm việc trong các ngành **liên quan đến Y HỌC,
chăm sóc sức khỏe, cứu chữa bệnh**:
- **Thầy thuốc, bác sĩ, y tá**

⚠️ Tính chất công việc đẩy vào tình cảnh "**đầu tắt mặt tối**" → **kiệt sức**
cả tâm lý lẫn sức khỏe.

⚠️ Dù có năng lực, **sức khỏe không theo kịp** → sự nghiệp khó hanh thông,
**lộ trình thăng tiến gián đoạn**.`,
  },

  {
    id: 'benh-phu-tai-no-boc',
    title: 'Bệnh Phù tại Nô Bộc',
    sao: ['Bệnh Phù'],
    cung: ['Nô Bộc'],
    doUuTien: 68,
    tomTat: `⚠️ **Bệnh Phù cư Nô:** mối quan hệ đồng nghiệp, bạn bè dễ **nảy
sinh phiền lụy**.

⚠️ Đương số **ít trải lòng**, sống **KHÉP KÍN**, **lười giao tiếp xã hội** →
không có nhiều bạn bè.

⚠️ **Xung đột** nếu phát sinh thường **không dứt khoát**, **kéo dài lê thê**
gây mệt mỏi.

⚠️ Đương số dễ phải **lo lắng, gồng mình cáng đáng** trách nhiệm thay người
khác → trong khi chính mình **không được ai thấu hiểu** thật lòng.`,
  },

  {
    id: 'benh-phu-tai-thien-di',
    title: 'Bệnh Phù tại Thiên Di',
    sao: ['Bệnh Phù'],
    cung: ['Thiên Di'],
    doUuTien: 70,
    tomTat: `⚠️ **Bệnh Phù cư Di:** dễ gặp **bất lợi mỗi khi ra ngoài xã hội**.

⚡ Trạng thái **thường xuyên MỆT MỎI**, dễ ốm đau, **không đủ năng lượng**
thích nghi với môi trường bên ngoài.

⚠️ Hình ảnh trong mắt mọi người **thiếu chỉn chu, kém rạng rỡ** → bị đánh giá
là người **CHẬM CHẠP, kém năng động**.

→ Biểu hiện rõ nét của việc **thiếu chăm sóc bản thân** hoặc xuống cấp sức
khỏe do **không hợp thời tiết, nhịp sống đô thị**.`,
  },

  {
    id: 'benh-phu-tai-tat-ach',
    title: 'Bệnh Phù tại Tật Ách - Sức khỏe điểm yếu nghiêm trọng',
    sao: ['Bệnh Phù'],
    cung: ['Tật Ách'],
    doUuTien: 80,
    tomTat: `⚠️ **Bệnh Phù cư Tật Ách:** **SỨC KHỎE LÀ ĐIỂM YẾU** đương số cần
đặc biệt chú ý.

⚠️ Cơ thể **YẾU ỚT**, sức đề kháng **THẤP** → dễ:
- **Cảm lạnh, nhức đầu, sổ mũi**
- Triệu chứng **lặt vặt KÉO DÀI**

⚠️ Mỗi sự **biến động thời tiết** trở thành **đợt thử thách thể lực**.

→ Cần **chăm sóc bản thân thật kỹ lưỡng**, tránh rơi vào **vòng xoáy bệnh tật
triền miên**.`,
  },

  {
    id: 'benh-phu-tai-tat-ach-thien-hinh',
    title: '⚠️ Bệnh Phù + Thiên Hình tại Tật Ách - bệnh trở nặng phải mổ',
    sao: ['Bệnh Phù'],
    ketHop: ['Thiên Hình'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `⚠️ **Bệnh Phù + Thiên Hình tại Tật Ách:** bệnh tình có thể **TRỞ
NẶNG**, có nguy cơ phải **MỔ XẺ, phẫu thuật** hoặc **điều trị chuyên sâu**.`,
  },

  {
    id: 'benh-phu-tai-tat-ach-hoa-ky',
    title: '⚠️ Bệnh Phù + Hóa Kỵ tại Tật Ách - bệnh trở nặng phải mổ',
    sao: ['Bệnh Phù'],
    ketHop: ['Hóa Kỵ'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `⚠️ **Bệnh Phù + Hóa Kỵ tại Tật Ách:** bệnh tình có thể **TRỞ NẶNG**,
có nguy cơ phải **MỔ XẺ, phẫu thuật** hoặc **điều trị chuyên sâu**.`,
  },

  {
    id: 'benh-phu-tai-tai-bach',
    title: 'Bệnh Phù tại Tài Bạch',
    sao: ['Bệnh Phù'],
    cung: ['Tài Bạch'],
    doUuTien: 72,
    tomTat: `⚠️ **Bệnh Phù cư Tài Bạch:** tiền bạc **vào CỬA TRƯỚC, ra CỬA SAU**.

⚠️ Cuộc sống kiếm tiền **không thuận lợi** — tiền làm ra chưa kịp tích lũy đã
**vội tiêu tan**, đôi khi phải chi trả **NHIỀU cho thuốc men, viện phí**.

⚠️ Một số người **thiếu động lực làm việc**, không chịu khó kiếm tiền hoặc bị
**bệnh tật làm gián đoạn** sự nghiệp → tài chính luôn **"thiếu trước hụt
sau"**.`,
  },

  {
    id: 'benh-phu-tai-tu-tuc',
    title: 'Bệnh Phù tại Tử Tức',
    sao: ['Bệnh Phù'],
    cung: ['Tử Tức'],
    doUuTien: 70,
    tomTat: `⚠️ **Bệnh Phù cư Tử Tức:** mối quan hệ giữa đương số và con cái
**không khăng khít** hoặc **thiếu quan tâm bồi dưỡng**.

⚠️ Tình cảm cha mẹ - con đôi khi tồn tại **khoảng trống IM LẶNG khó lấp đầy**.

⚠️ Việc dạy dỗ con cái **không được chú trọng từ sớm** → đến khi muốn bù đắp
thì đã **muộn**.

⚠️ Con cái dễ **bị bệnh vặt** → cha mẹ rơi vào trạng thái **mệt mỏi, nặng
lòng** trong việc chăm sóc.`,
  },

  {
    id: 'benh-phu-tai-phu-the',
    title: 'Bệnh Phù tại Phu Thê',
    sao: ['Bệnh Phù'],
    cung: ['Phu Thê'],
    doUuTien: 72,
    tomTat: `⚠️ **Bệnh Phù cư Phu Thê:** mối quan hệ vợ chồng **PHỤ THUỘC LẪN
NHAU**.

⚠️ Người hôn phối thường:
- **Sức khỏe KÉM**
- **Suy nghĩ tiêu cực**
- Dễ rơi vào **uể oải, thiếu lửa** trong tình cảm

⚠️ Mối quan hệ vợ chồng mang nét **LỆ THUỘC hơn là SẺ CHIA** — cả hai trong
thế **chờ đợi người kia thay đổi**, **không ai chủ động** trước.

⚠️ Hôn nhân **NGUỘI LẠNH**, không còn được như kỳ vọng ban đầu.`,
  },

  {
    id: 'benh-phu-tai-huynh-de',
    title: 'Bệnh Phù tại Huynh Đệ',
    sao: ['Bệnh Phù'],
    cung: ['Huynh Đệ'],
    doUuTien: 68,
    tomTat: `⚠️ **Bệnh Phù cư Huynh Đệ:** mối quan hệ anh chị em bị **ảnh hưởng
bởi vấn đề SỨC KHỎE**.

⚠️ Anh chị em thường xuyên **ốm đau** hoặc mắc **bệnh mãn tính dai dẳng**,
không có cách **chữa dứt điểm**.

⚠️ Lúc nhỏ có thể **thân thiết**, càng trưởng thành càng **lạnh nhạt** vì ít
quan tâm qua lại.

⚠️ Một số trường hợp anh em có **tật xấu khó bỏ** hoặc nảy sinh tính **ỶLẠI**
khiến đương số **bận tâm**.`,
  },

  {
    id: 'benh-phu-tuoi-nho-day-thi',
    title: 'Bệnh Phù ở tuổi nhỏ và dậy thì',
    sao: ['Bệnh Phù'],
    doUuTien: 55,
    tomTat: `⚠️ **Đại vận có Bệnh Phù ở TUỔI NHỎ và DẬY THÌ:**

→ Như "**kẻ gây rối trật tự**" — đương số dễ gặp:
- **Phiền lụy về tinh thần, sức khỏe**
- **Khó thích nghi** với môi trường học tập
- **Khó kết bạn** hoặc rèn luyện thể chất

⚠️ **Đặc biệt PHÁI NỮ:** đại vận 10 năm có Bệnh Phù trong giai đoạn dậy thì
→ tác động làm **thay đổi suy nghĩ, hành vi** theo chiều hướng **không tốt**
→ cần lưu ý đặc biệt.`,
  },

  {
    id: 'benh-phu-truong-thanh-hau-van',
    title: 'Bệnh Phù giai đoạn trưởng thành và hậu vận',
    sao: ['Bệnh Phù'],
    doUuTien: 55,
    tomTat: `⚠️ **Bệnh Phù giai đoạn TRƯỞNG THÀNH (20-40 tuổi):**
- Ảnh hưởng **NHIỀU NHẤT đến CÔNG VIỆC**
- Làm **gián đoạn tinh thần** và **ý chí phấn đấu**

⚠️ **Bệnh Phù HẬU VẬN (sau 40 tuổi):**
- Tác động **rõ rệt về THỂ CHẤT**
- **Sức đề kháng với bệnh nền SUY GIẢM**
- Càng có tuổi sức khỏe càng **không như trước**
- Đẩy nhanh các **TIẾN TRÌNH BỆNH TẬT** nếu xuất hiện trong hành vận`,
  },

  {
    id: 'benh-phu-hoa-giai',
    title: 'Lời khuyên hóa giải Bệnh Phù',
    sao: ['Bệnh Phù'],
    doUuTien: 70,
    tomTat: `💡 **Lời khuyên hóa giải Bệnh Phù** — **KHÔNG KHÓ nhưng cần KỶ
LUẬT BỀN BỈ**:

**1. Lập nếp sống lành mạnh:**
- "**Lấy KỶ LUẬT làm thầy, lấy THÓI QUEN làm bạn**"
- Vận động đều đặn, không lười biếng
- Ăn ngủ **đúng giờ giấc** (đặc biệt với người đau dạ dày)

**2. Cảnh giác:**
- Bệnh Phù ở đâu thì ở đó **xảy ra TÁC ĐỘNG LẶP ĐI LẶP LẠI suốt đời**
- Chỉ cần **buông lỏng một chút** → rơi vào **vòng lặp lười biếng, trì trệ**

**3. Đặc biệt với bệnh mãn tính:**
- **TUYỆT ĐỐI không chủ quan**
- Khám sức khỏe định kỳ
- Theo phác đồ điều trị nghiêm túc

→ Bản chất Bệnh Phù là **thiếu sinh khí** — chỉ cần **chủ động bồi đắp** bằng
luyện tập và sinh hoạt khoa học là vượt qua được.`,
  },
];
