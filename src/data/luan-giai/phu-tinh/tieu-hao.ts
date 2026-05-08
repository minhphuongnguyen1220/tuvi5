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
    tomTat: `**Tiểu Hao** là bại tinh trong vòng Lộc Tồn, nằm ở vị trí thứ tư.
Ngũ hành Hỏa (một số trường phái cho là Thủy), hóa khí Hao Tinh — Bại Tinh, mang
tính phá tán, hao tán, tích tụ và thất thường. Tiểu Hao luôn đối cung với Đại Hao,
tạo thành cặp Song Hao theo quy luật an sao.

Vị trí miếu hãm:

- **Đắc** địa: Dần, Thân, Mão, Dậu (Tứ Chính cùng Dần Thân)
- **Hãm** địa: Tý, Sửu, Thìn, Tỵ, Ngọ, Mùi, Tuất, Hợi

Quy tắc luận đoán: ở đắc địa, Tiểu Hao tuy vẫn là Hao tinh nhưng tạo dòng
tiền lưu thông, đương số có thể rất giàu; ở hãm địa, sao đúng nghĩa hao tán —
tốn của, mất sức.`,
  },

  // ============================================================
  // 2. Song Hao - cặp đôi đối cung
  // ============================================================
  {
    id: 'song-hao-cap-doi',
    title: 'Song Hao = Tiểu Hao + Đại Hao - Cặp đôi đối cung',
    sao: ['Tiểu Hao', 'Đại Hao'],
    doUuTien: 50,
    tomTat: `**Tiểu Hao** cùng **Đại Hao** hợp thành bộ Song Hao, luôn đối cung
nhau (cách sáu cung) do quy luật an sao. Bản chất cả hai đều là bại tinh, hao
tinh, song khi luận đoán đương số rất cần chú ý đến chính tinh đi cùng.

- Song Hao **Đắc** địa (Dần, Thân, Mão, Dậu): rất tốt — tạo cách "tiền ra vào
  liên tục, lãi mẹ đẻ lãi con"
- Song Hao **Hãm** địa: phá tán, hao tổn

Song Hao hỗ trợ mạnh cho các cách Cự Cơ Mão Dậu (cách "Cự Cơ đồng cung") và Cự
Đồng tại Sửu Mùi (Song Hao đắc tại tam phương). Khi Mệnh, Tài, Quan có Song Hao
đắc địa, đương số được hưởng cách đại phú.`,
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
    tomTat: `Song Hao tọa Mão hoặc Dậu lập thành cách **Chúng Thủy Triều Đông**
— mọi dòng nước đổ về Đông — thuộc hàng cực tốt. Đương số phát tài phát lộc vô
bờ bến, "lên tựa nước biển chiều dâng", tiền tài lên như diều gặp gió.

Cách này đặc biệt phù hợp khi:

- Cự Cơ Mão Dậu cùng Song Hao đắc địa, hợp thành cách rất quý
- Mệnh, Tài, Quan đều có Song Hao đắc địa tại Mão hoặc Dậu, gặp thời vận tốt
  thì cuộc đời chủ mệnh lên như diều
- Có thêm Cự Môn cùng Thiên Cơ thì đương số rất thông minh, giàu có, tiền bạc
  thừa thãi vô cùng

Lưu ý quan trọng khi luận lá số: Song Hao tuy là bại tinh nhưng khi đắc địa
lại cần có chính tinh tốt đi cùng — đây là một ngoại lệ phải nhớ.`,
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
    tomTat: `Đương số có **Tiểu Hao** thủ Mệnh thường dáng thấp bé, hay ốm đau,
má hóp đít tóp, thể chất không khỏe. Tính cách "sáng nắng chiều mưa", hay đổi
chí hướng và nghề nghiệp, không bền chí, chóng chán; đặc điểm này càng rõ khi
sao đi cùng các sao có tính động như Thiên Mã hay Thiên Đồng.

Trong tiêu xài, đương số hào phóng, thích tiêu pha. Phần lớn hay ly hương lập
nghiệp, thích đi đây đi đó, hợp với những nghề lưu động — xuất nhập khẩu, vận
tải.`,
  },

  {
    id: 'tieu-hao-tai-menh-dac',
    sao: ['Tiểu Hao'],
    cung: ['Mệnh'],
    trangThai: ['Đắc'],
    doUuTien: 73,
    tomTat: `Khi **Tiểu Hao** **Đắc** địa tại Mệnh, đương số tiêu xài rộng rãi
song hết tiền lại có; thông minh, ham học, muốn trông xa biết rộng.`,
  },

  {
    id: 'tieu-hao-tai-menh-ham-ky-pha-sat',
    sao: ['Tiểu Hao'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    ketHop: ['Hóa Kỵ', 'Phá Quân', 'Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 70,
    tomTat: `Khi **Tiểu Hao** **Hãm** địa tại Mệnh đi cùng Hóa Kỵ, Phá Quân hoặc
sát tinh, tiền tài đương số hao tán; thường xuyên túng thiếu và thất thường.`,
  },

  {
    id: 'tieu-hao-tai-menh-ham-sat-bai-tinh',
    sao: ['Tiểu Hao'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Khi **Tiểu Hao** **Hãm** địa tại Mệnh đi cùng các sát bại tinh,
đương số dễ rơi vào đam mê (cờ bạc, rượu chè, các thú vui) hoặc bị ghiền (rượu,
thuốc...). Mỗi đam mê chỉ kéo dài một giai đoạn rồi chuyển sang đam mê khác.`,
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
    tomTat: `Khi **Tiểu Hao** cư Phụ Mẫu, cha mẹ đương số không sống gần quê cha
đất tổ, phải nhiều phen thay đổi nơi ăn chốn ở và nghề nghiệp.`,
  },

  {
    id: 'tieu-hao-tai-phu-mau-ham',
    sao: ['Tiểu Hao'],
    cung: ['Phụ Mẫu'],
    trangThai: ['Hãm'],
    doUuTien: 65,
    tomTat: `Khi **Tiểu Hao** **Hãm** địa tại Phụ Mẫu, cha mẹ đương số gầy gò,
vất vả; đồng tiền tán tụ thất thường.`,
  },

  {
    id: 'tieu-hao-tai-phu-mau-dac',
    sao: ['Tiểu Hao'],
    cung: ['Phụ Mẫu'],
    trangThai: ['Đắc'],
    doUuTien: 65,
    tomTat: `Khi **Tiểu Hao** **Đắc** địa tại Phụ Mẫu, tính xấu của sao được
giảm bớt — cha mẹ thường làm đầu tư, kinh doanh buôn bán. Dòng tiền giữa đương
số và cha mẹ luân chuyển nhiều, có thể được cha mẹ tạo điều kiện đầu tư hoặc
ngược lại đương số giúp đỡ cha mẹ về tài chính.`,
  },

  {
    id: 'tieu-hao-tai-phu-mau-hinh-viet',
    sao: ['Tiểu Hao'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Thiên Hình', 'Thiên Việt'],
    doUuTien: 65,
    tomTat: `Khi **Tiểu Hao** tại Phụ Mẫu đi cùng Thiên Hình hoặc Thiên Việt,
cha mẹ đương số khó tính, nghiêm khắc, hay ép buộc con cái phải nghe theo.`,
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
    tomTat: `Khi **Tiểu Hao** cư Phúc Đức, sao ảnh hưởng đến phúc phần dòng họ —
biểu hiện rõ rệt theo trạng thái đắc hay hãm.

Về mộ phần, xung quanh khu mồ mả tổ tiên đương số có mạch nước, dòng suối hoặc
dòng sông chạy qua. Lành dữ tùy vào miếu hãm để xác định.`,
  },

  {
    id: 'tieu-hao-tai-phuc-duc-ham',
    sao: ['Tiểu Hao'],
    cung: ['Phúc Đức'],
    trangThai: ['Hãm'],
    doUuTien: 70,
    tomTat: `Khi **Tiểu Hao** **Hãm** địa cư Phúc Đức, đây là điểm kỵ — sao làm
giảm phúc phần và may mắn tổ tiên để lại. Trong dòng họ nhiều người nghèo túng,
bần hàn, phải tha hương lập nghiệp, "tha hương cầu thực", mỗi người một nơi.`,
  },

  {
    id: 'tieu-hao-tai-phuc-duc-dia-kiep',
    sao: ['Tiểu Hao'],
    cung: ['Phúc Đức'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 67,
    tomTat: `Khi **Tiểu Hao** tại Phúc Đức đi cùng Địa Kiếp, đương số cô độc, vất
vả hoặc gánh nhiều trách nhiệm nặng nề với họ hàng. Chủ mệnh dễ rơi vào con
đường kiếm tiền không chính nghĩa, gây hao tổn phước đức.`,
  },

  {
    id: 'tieu-hao-tai-phuc-duc-dac',
    sao: ['Tiểu Hao'],
    cung: ['Phúc Đức'],
    trangThai: ['Đắc'],
    doUuTien: 70,
    tomTat: `Khi **Tiểu Hao** **Đắc** địa cư Phúc Đức, đương số có phước đức tốt,
được may mắn về tiền của; biết dùng tiền làm phúc, tôn bồi phúc đức cho mình
và dòng tộc.`,
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
    tomTat: `Khi **Tiểu Hao** cư Điền Trạch, sao ảnh hưởng đến đất đai gia sản
của đương số — biểu hiện rõ theo trạng thái đắc hay hãm. Chủ mệnh hay hao tốn
vì chuyện dọn nhà cửa, thay đổi chỗ ở hoặc đổi nơi làm việc.

Về đặc trưng nhà ở: thường gần dòng sông, dòng suối hoặc mạch nước ngầm chạy
qua, đa phần là nhà hai mặt tiền.`,
  },

  {
    id: 'tieu-hao-tai-dien-trach-ham',
    sao: ['Tiểu Hao'],
    cung: ['Điền Trạch'],
    trangThai: ['Hãm'],
    doUuTien: 73,
    tomTat: `Khi **Tiểu Hao** **Hãm** địa cư Điền Trạch, tài sản đương số tán
nhiều tụ ít, khó giàu có. Có cũng phải bán hoặc hao tốn dần.`,
  },

  {
    id: 'tieu-hao-tai-dien-trach-ham-khong-kiep',
    sao: ['Tiểu Hao'],
    cung: ['Điền Trạch'],
    trangThai: ['Hãm'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Khi **Tiểu Hao** **Hãm** địa tại Điền Trạch đi cùng Địa Không, Địa
Kiếp, tài sản đương số tán nhiều tụ ít một cách nặng nề; có cũng phải bán hoặc
hao tốn không giữ được.`,
  },

  {
    id: 'tieu-hao-tai-dien-trach-dac',
    sao: ['Tiểu Hao'],
    cung: ['Điền Trạch'],
    trangThai: ['Đắc'],
    doUuTien: 73,
    tomTat: `Khi **Tiểu Hao** **Đắc** địa cư Điền Trạch, đương số vẫn hay thay
đổi nhà cửa nhưng trên vị thế buôn bán, kinh doanh bất động sản có lãi — nhà
ngày càng to hơn. Chủ mệnh dễ mở xưởng sản xuất, chế tạo các nguồn hàng số lượng
lớn, ra vào liên tục.`,
  },

  {
    id: 'tieu-hao-tai-dien-trach-dia-kiep',
    sao: ['Tiểu Hao'],
    cung: ['Điền Trạch'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Khi **Tiểu Hao** tại Điền Trạch đi cùng Địa Kiếp, "thêm dầu vào
lửa": đương số dễ mắc sai lầm trong mua bán bất động sản, đầu tư sai giá trị
thực tế, gây thiệt hại kinh tế.`,
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
    tomTat: `Khi **Tiểu Hao** cư Quan Lộc, công việc của đương số mang tính lưu
động, hay thay đổi chỗ làm và nghề nghiệp. Phù hợp với các ngành xuất nhập
khẩu, giao thông, đầu tư, vận tải, thương mại quy mô lớn.`,
  },

  {
    id: 'tieu-hao-tai-quan-loc-ham',
    sao: ['Tiểu Hao'],
    cung: ['Quan Lộc'],
    trangThai: ['Hãm'],
    doUuTien: 70,
    tomTat: `Khi **Tiểu Hao** **Hãm** địa cư Quan Lộc, công danh sự nghiệp đương
số bị cản trở; chí hướng không bền hoặc gặp hoàn cảnh phải thay đổi, khó nhất
tâm với một công việc.`,
  },

  {
    id: 'tieu-hao-tai-quan-loc-cu-mon-vu-khuc-quyen',
    sao: ['Tiểu Hao', 'Đại Hao'],
    cung: ['Quan Lộc'],
    ketHop: ['Cự Môn', 'Vũ Khúc', 'Hóa Quyền'],
    doUuTien: 78,
    tomTat: `Khi Lưỡng Hao tại Quan Lộc đi cùng Cự Môn, Vũ Khúc và Hóa Quyền,
đương số làm tướng trấn thủ một phương bên ngoài — nắm quyền lực ở phương xa.`,
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
    tomTat: `Khi **Tiểu Hao** cư Nô Bộc, đương số khó thuê mướn người làm, bị
tôi tớ trộm cắp gây hao tốn của cải, hoặc bị người dưới và bạn bè ăn chặn. Chủ
mệnh hay thay đổi bạn bè, đồng nghiệp, ít chơi lâu bền — khi nhiều bạn khi
không có ai.`,
  },

  {
    id: 'tieu-hao-tai-no-boc-dac',
    sao: ['Tiểu Hao'],
    cung: ['Nô Bộc'],
    trangThai: ['Đắc'],
    doUuTien: 65,
    tomTat: `Khi **Tiểu Hao** **Đắc** địa tại Nô Bộc, đương số đầu tư cho bạn bè
và các mối quan hệ đều có lợi trở lại.`,
  },

  {
    id: 'tieu-hao-tai-no-boc-ham',
    sao: ['Tiểu Hao'],
    cung: ['Nô Bộc'],
    trangThai: ['Hãm'],
    doUuTien: 65,
    tomTat: `Khi **Tiểu Hao** **Hãm** địa tại Nô Bộc, đầu tư cho bạn bè và các
mối quan hệ thường thất thoát, hao tán không hợp lý.`,
  },

  {
    id: 'tieu-hao-tai-no-boc-quan-phu-phu',
    sao: ['Tiểu Hao'],
    cung: ['Nô Bộc'],
    ketHop: ['Quan Phù', 'Quan Phủ'],
    doUuTien: 65,
    tomTat: `Khi **Tiểu Hao** tại Nô Bộc đi cùng Quan Phù hoặc Quan Phủ, đương số
bị kiện cáo, tranh tụng làm hao tán.`,
  },

  {
    id: 'tieu-hao-tai-no-boc-sat-pha-tham-hinh',
    sao: ['Tiểu Hao'],
    cung: ['Nô Bộc'],
    ketHop: ['Thất Sát', 'Phá Quân', 'Tham Lang', 'Thiên Hình'],
    doUuTien: 65,
    tomTat: `Khi **Tiểu Hao** tại Nô Bộc gặp bộ Sát Phá Tham đi cùng Thiên Hình,
đương số dễ bị cướp.`,
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
    tomTat: `Khi **Tiểu Hao** cư Thiên Di, đương số ra ngoài hay gặp chuyện phải
tốn tiền, tổn hao — tai nạn, mất mát, các khoản chi ngoài dự tính. Chủ mệnh
thường phải tha hương lập nghiệp, thay đổi chỗ ở nhiều lần, khó lâu bền ở một
nơi.`,
  },

  {
    id: 'tieu-hao-tai-thien-di-dac',
    sao: ['Tiểu Hao'],
    cung: ['Thiên Di'],
    trangThai: ['Đắc'],
    doUuTien: 65,
    tomTat: `Khi **Tiểu Hao** **Đắc** địa tại Thiên Di, đương số kinh doanh phát
đạt, "một vốn bốn lời", thực hiện được những giao dịch tài chính lớn — biết
dùng tiền bạc làm công cụ tạo mối quan hệ làm ăn.`,
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
    tomTat: `Khi **Tiểu Hao** cư Tật Ách, sao có tác dụng hao trừ tật bệnh — đẩy
lùi bệnh tật, nhất là các bệnh mãn tính. Đương số có thể dùng tiền chữa chạy.

Bệnh thường gặp liên quan đến bộ phận tiêu hóa, đường ruột, gan, dạ dày.`,
  },

  {
    id: 'tieu-hao-tai-tat-ach-dac',
    sao: ['Tiểu Hao'],
    cung: ['Tật Ách'],
    trangThai: ['Đắc'],
    doUuTien: 70,
    tomTat: `Trường hợp ngoại lệ: khi **Tiểu Hao** **Đắc** địa tại Tật Ách lại
không tốt — sao gây tích tụ, ứ đọng tai họa và bệnh tật, khiến bệnh khi bùng
phát thì dữ dội, dồn dập.`,
  },

  {
    id: 'tieu-hao-tai-tat-ach-pha-quan-song-hao-sat-moc-ky',
    sao: ['Tiểu Hao'],
    cung: ['Tật Ách'],
    ketHop: ['Phá Quân', 'Đại Hao', 'Thất Sát', 'Mộc Dục', 'Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `Khi **Tiểu Hao** tại Tật Ách đi cùng Phá Quân, Đại Hao, Thất Sát,
Mộc Dục hoặc Hóa Kỵ, đương số thường bị ung nhọt, ung thư phải mổ xẻ.`,
  },

  {
    id: 'tieu-hao-tai-tat-ach-kinh-da-khong-kiep-ky',
    sao: ['Tiểu Hao'],
    cung: ['Tật Ách'],
    ketHop: ['Kình Dương', 'Đà La', 'Địa Không', 'Địa Kiếp', 'Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `Khi **Tiểu Hao** tại Tật Ách đi cùng Kình Dương, Đà La, Địa Không,
Địa Kiếp hoặc Hóa Kỵ, đương số vì đam mê thứ gì đó (cờ bạc, rượu chè) mà sinh
ra bệnh.`,
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
    tomTat: `Khi **Tiểu Hao** cư Tài Bạch, sao ảnh hưởng đến tài chính của đương
số rất rõ rệt — biểu hiện theo trạng thái đắc hay hãm.`,
  },

  {
    id: 'tieu-hao-ham-tai-bach-dien-trach-phuc-duc',
    title: 'Tiểu Hao Hãm tại Tài / Điền / Phúc - rất xấu',
    sao: ['Tiểu Hao'],
    cung: ['Tài Bạch', 'Điền Trạch', 'Phúc Đức'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `**Tiểu Hao** **Hãm** địa rất kỵ tại ba cung Tài Bạch, Điền Trạch và
Phúc Đức — bộ ba Tài, Điền, Phúc nếu có Tiểu Hao hãm là rất xấu cho đương số.`,
  },

  {
    id: 'tieu-hao-tai-tai-bach-ham',
    sao: ['Tiểu Hao'],
    cung: ['Tài Bạch'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi **Tiểu Hao** **Hãm** địa cư Tài Bạch, đương số tán tài, hao
tài, nghèo túng; có tiền là phải tiêu luôn, khó tích trữ.`,
  },

  {
    id: 'tieu-hao-tai-tai-bach-dao-hong',
    sao: ['Tiểu Hao'],
    cung: ['Tài Bạch'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 73,
    tomTat: `Khi **Tiểu Hao** tại Tài Bạch đi cùng Đào Hoa hoặc Hồng Loan, đương
số tốn tiền vì nhân tình và chuyện làm đẹp.`,
  },

  {
    id: 'tieu-hao-tai-tai-bach-pha-quan-tuyet',
    sao: ['Tiểu Hao'],
    cung: ['Tài Bạch'],
    ketHop: ['Phá Quân', 'Tuyệt'],
    doUuTien: 73,
    tomTat: `Khi **Tiểu Hao** tại Tài Bạch đi cùng Phá Quân hoặc Tuyệt, đương số
dễ phá sản.`,
  },

  {
    id: 'tieu-hao-tai-tai-bach-kinh-da-khong-kiep',
    sao: ['Tiểu Hao'],
    cung: ['Tài Bạch'],
    ketHop: ['Kình Dương', 'Đà La', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 73,
    tomTat: `Khi **Tiểu Hao** tại Tài Bạch đi cùng Kình Dương, Đà La, Địa Không
hoặc Địa Kiếp, đương số cũng bị phá sản.`,
  },

  {
    id: 'tieu-hao-tai-tai-bach-dac',
    sao: ['Tiểu Hao'],
    cung: ['Tài Bạch'],
    trangThai: ['Đắc'],
    doUuTien: 78,
    tomTat: `Khi **Tiểu Hao** **Đắc** địa cư Tài Bạch, đây là cách cực tốt —
đồng tiền vẫn ra vào liên tục nhưng tạo ra nhiều của cải hơn. Đương số kiếm ra
đồng nào lại đem đi đầu tư, lãi mẹ đẻ lãi con, tạo nên cách vô cùng giàu có:
"buôn may bán đắt", đầu tư không ngừng nghỉ, kiếm lời từ vốn quay vòng.`,
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
    tomTat: `Khi **Tiểu Hao** cư Tử Tức, con cái đương số không ở gần cha mẹ,
sống tự lập từ sớm — kiểu "chim non rời tổ". Con cái đồng thời cũng làm hao tán
tiền của cha mẹ.`,
  },

  {
    id: 'tieu-hao-tai-tu-tuc-ham',
    sao: ['Tiểu Hao'],
    cung: ['Tử Tức'],
    trangThai: ['Hãm'],
    doUuTien: 68,
    tomTat: `Khi **Tiểu Hao** **Hãm** địa cư Tử Tức, đương số giảm số lượng con
cái — sinh nhiều nhưng nuôi ít, dễ mất mát hoặc sa sảy.`,
  },

  {
    id: 'tieu-hao-tai-tu-tuc-dac',
    sao: ['Tiểu Hao'],
    cung: ['Tử Tức'],
    trangThai: ['Đắc'],
    doUuTien: 68,
    tomTat: `Khi **Tiểu Hao** **Đắc** địa tại Tử Tức, đương số đầu tư cho con có
hiệu quả — con cái thông minh, ham học.`,
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
    tomTat: `Khi **Tiểu Hao** cư Phu Thê, sao không ưa cung này; hội thêm sát
bại tinh sẽ làm giảm nhân duyên vợ chồng. Đương số cùng bạn đời dễ xa quê cách
quán.`,
  },

  {
    id: 'tieu-hao-tai-phu-the-ham',
    sao: ['Tiểu Hao'],
    cung: ['Phu Thê'],
    trangThai: ['Hãm'],
    doUuTien: 73,
    tomTat: `Khi **Tiểu Hao** **Hãm** địa tại Phu Thê, người hôn phối của đương
số hoang tàn, phá của, gây cảnh chia ly.`,
  },

  {
    id: 'tieu-hao-tai-phu-the-dac-dao-hong',
    sao: ['Tiểu Hao'],
    cung: ['Phu Thê'],
    trangThai: ['Đắc'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 70,
    tomTat: `Khi **Tiểu Hao** **Đắc** địa tại Phu Thê có Đào Hoa, Hồng Loan thủ
Mệnh, đương số dễ nhiều vợ, lắm thê thiếp — "mỗi ngày ở với một bà".`,
  },

  {
    id: 'tieu-hao-tai-phu-the-da-hinh-rieu',
    sao: ['Tiểu Hao'],
    cung: ['Phu Thê'],
    ketHop: ['Đà La', 'Thiên Hình', 'Thiên Riêu'],
    doUuTien: 70,
    tomTat: `Khi **Tiểu Hao** tại Phu Thê đi cùng Đà La, Thiên Hình hoặc Thiên
Riêu, người hôn phối phong lưu, phá tán; cảnh "ông ăn chả bà ăn nem".`,
  },

  {
    id: 'tieu-hao-tai-phu-the-dac-cat-tinh',
    sao: ['Tiểu Hao'],
    cung: ['Phu Thê'],
    trangThai: ['Đắc'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 70,
    tomTat: `Khi **Tiểu Hao** **Đắc** địa tại Phu Thê đi cùng cát tinh, chủ
mệnh quan tâm, chiều chuộng bạn đời. Người hôn phối giỏi giang, biết xoay sở
tài chính, có duyên kinh doanh.`,
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
    tomTat: `Khi **Tiểu Hao** cư Huynh Đệ, số lượng anh chị em của đương số bị
giảm. Anh chị em ly tán, mỗi người một chí hướng; dễ có người chơi bời phá tán,
gây tổn thất tài sản chung.`,
  },

  {
    id: 'tieu-hao-tai-huynh-de-sat-bai-tinh',
    sao: ['Tiểu Hao'],
    cung: ['Huynh Đệ'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 65,
    tomTat: `Khi **Tiểu Hao** tại Huynh Đệ đi cùng các sát bại tinh, đương số dễ
có anh chị em chết trẻ, khó thọ; mất mát hoặc sa sảy ngay từ trong bụng mẹ.`,
  },

  {
    id: 'tieu-hao-tai-huynh-de-dac',
    sao: ['Tiểu Hao'],
    cung: ['Huynh Đệ'],
    trangThai: ['Đắc'],
    doUuTien: 65,
    tomTat: `Khi **Tiểu Hao** **Đắc** địa tại Huynh Đệ, anh em đương số có người
giỏi làm ăn kinh tế, giàu có khá giả: cảnh "một người làm quan, cả họ được
nhờ".`,
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
    tomTat: `Khi Song Hao đi cùng Cự Môn và Thiên Cơ tại Mão hoặc Dậu, đương số
được hưởng cách cực tốt — rất thông minh, giàu có, tiền bạc thừa thãi vô cùng.

Cách "Cự Cơ Mão Dậu" hợp Song Hao đắc địa thuộc hàng tài lộc đẹp nhất trong
tử vi: tiền tài lưu thông như "Chúng Thủy Triều Đông", càng chi càng có lại.`,
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
    tomTat: `Khi **Tiểu Hao** đi cùng Tuyệt đồng cung, đương số xảo quyệt — mưu
mô, sẵn sàng dùng mánh khóe chiếm lợi từ người khác; dần mất sự tin tưởng của
người xung quanh: "một lần bất tín, vạn lần bất tin".`,
  },

  {
    id: 'tieu-hao-tuyet-menh-vcd',
    title: 'Tiểu Hao + Tuyệt tại Mệnh VCD',
    sao: ['Tiểu Hao'],
    cung: ['Mệnh'],
    ketHop: ['Tuyệt'],
    doUuTien: 65,
    tomTat: `Khi **Tiểu Hao** đi cùng Tuyệt tại Mệnh Vô Chính Diệu, đương số
càng xảo trá, rất keo kiệt và tham lận.`,
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
    tomTat: `Khi Tiểu Hao hoặc Đại Hao đi cùng Đào Hoa, Hồng Loan, đương số tốn
tiền cho nhân tình — đầu tư tiền bạc để chiều lòng nhân tình, làm đẹp. Chủ
mệnh "vung tay quá trán" cho các mối quan hệ ngoài luồng:

- Tài chính thâm hụt
- Tiềm ẩn nguy cơ đổ vỡ hôn nhân, mất hòa khí gia đình`,
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
    tomTat: `Khi **Tiểu Hao** đi cùng Thiên Hình, Địa Không, Địa Kiếp và Hỏa
Linh, đương số dễ rơi vào nghiện ngập (rượu chè, cờ bạc, ma túy). Ban đầu chỉ
"thử một lần cho biết", rồi "ngựa quen đường cũ", càng ngày càng lún sâu:

- Tán gia bại sản
- Hủy hoại sức khỏe
- Như "con thiêu thân lao vào lửa" — biết hại nhưng không dừng được

Hệ quả là vừa tốn tiền của vừa tổn hại đến danh dự, uy tín và các mối quan
hệ.`,
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
    tomTat: `Khi **Tiểu Hao** đi cùng Phá Quân hoặc Tuyệt, đương số dễ phá sản;
khi đi cùng Kình Dương, Đà La, Địa Không, Địa Kiếp cũng dẫn đến cảnh phá sản.

Tâm lý "được ăn cả, ngã về không" khiến chủ mệnh đầu tư quá mức, chơi lớn rồi
mất hết.`,
  },

  {
    id: 'tieu-hao-pha-san-menh-tai-bach',
    title: 'Tiểu Hao phá sản tại Mệnh / Tài Bạch',
    sao: ['Tiểu Hao'],
    cung: ['Mệnh', 'Tài Bạch'],
    ketHop: ['Phá Quân', 'Tuyệt', 'Kình Dương', 'Đà La', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 65,
    tomTat: `Khi **Tiểu Hao** đi cùng các sát phá tinh tại Mệnh hoặc Tài Bạch,
đặc biệt nguy hiểm — nguy cơ phá sản với đương số rất cao.`,
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
    tomTat: `Khi Song Hao đi cùng Quan Phù hoặc Quan Phủ, đương số bị kiện cáo,
tranh tụng làm hao tán — vướng vào kiện tụng tài chính, mất tiền vì pháp lý.`,
  },

  {
    id: 'song-hao-that-sat-thien-hinh',
    title: 'Song Hao + Thất Sát + Thiên Hình - bị cướp',
    sao: ['Tiểu Hao', 'Đại Hao'],
    ketHop: ['Thất Sát', 'Thiên Hình'],
    doUuTien: 55,
    tomTat: `Khi Song Hao đi cùng Thất Sát và Thiên Hình, đương số bị cướp —
thậm chí bị cướp tài sản.`,
  },

  {
    id: 'song-hao-pha-quan-thien-hinh',
    title: 'Song Hao + Phá Quân + Thiên Hình - bị cướp',
    sao: ['Tiểu Hao', 'Đại Hao'],
    ketHop: ['Phá Quân', 'Thiên Hình'],
    doUuTien: 55,
    tomTat: `Khi Song Hao đi cùng Phá Quân và Thiên Hình, đương số bị cướp —
thậm chí bị cướp tài sản.`,
  },

  {
    id: 'song-hao-tham-lang-thien-hinh',
    title: 'Song Hao + Tham Lang + Thiên Hình - bị cướp',
    sao: ['Tiểu Hao', 'Đại Hao'],
    ketHop: ['Tham Lang', 'Thiên Hình'],
    doUuTien: 55,
    tomTat: `Khi Song Hao đi cùng Tham Lang và Thiên Hình, đương số bị cướp —
thậm chí bị cướp tài sản.`,
  },

  // ============================================================
  // 22. Tiểu Hao vào hạn
  // ============================================================
  {
    id: 'tieu-hao-vao-han',
    title: 'Tiểu Hao vào hạn',
    sao: ['Tiểu Hao'],
    doUuTien: 50,
    tomTat: `Khi hạn có **Tiểu Hao**, đây là dịp hao tài tốn của của đương số:
nếu không vì tang khó hay bệnh tật thì cũng bị mất trộm. Riêng trường hợp đắc
địa, chủ mệnh có hoạch tài (được tiền bất ngờ) song dễ hao tốn vì đầu tư vào
chỗ khác.

Cuộc sống thường có sự thay đổi về:

- Nghề nghiệp, chỗ làm
- Nơi ở
- Hoặc đi nước ngoài

Nếu đương số đang ốm đau, hạn này lại dễ mau hết bệnh.`,
  },
];
