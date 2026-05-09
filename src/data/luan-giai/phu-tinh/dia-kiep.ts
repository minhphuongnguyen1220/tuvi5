import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO ĐỊA KIẾP - Lục Sát Tinh
 *
 * Phần chung của bộ Không Kiếp (sát tinh nặng nhất, Tuần Triệt đảo ngược,
 * tính tình đắc/hãm, sao chế giải/tăng ác, các cách kết hợp đặc biệt,
 * đặc biệt nữ mệnh, 3 cách tai ương) đã viết tại file dia-khong.ts với
 * tag cả 2 sao. File này chỉ viết phần RIÊNG của Địa Kiếp + 11 cung.
 */
export const luanGiai_DiaKiep: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung của sao Địa Kiếp
  // ============================================================
  {
    id: 'dia-kiep-tinh-chat-chung',
    title: 'Địa Kiếp - Đặc tính chung',
    sao: ['Địa Kiếp'],
    doUuTien: 30,
    tomTat: `**Địa Kiếp** thuộc bộ Lục Sát Tinh và Tứ Sát, ngũ hành Hỏa
(Dương Hỏa) — khác Địa Không vốn là Âm Hỏa. Hóa khí của sao này là Sát
Tinh, Hung Tinh và Dâm Tinh.

Vị trí miếu hãm:

- **Đắc** địa: Tý, Dần, Mão, Tỵ, Thân
- **Hãm** địa: Sửu, Thìn, Ngọ, Mùi, Dậu, Tuất, Hợi

Đi cùng Địa Không, Địa Kiếp tạo thành bộ "Không Kiếp" — biến cố bộc phát,
tai nạn trực diện, tổn thất khốc liệt; là sao của đổ vỡ không báo trước.

Phần chung Không Kiếp (sát tinh nặng nhất, Tuần Triệt đảo ngược, đắc địa
hoạnh phát hoạnh phá, sao chế giải / tăng ác, đặc biệt bất lợi nữ mệnh,
các cách kết hợp) đã viết tại sao Địa Không.`,

    chiTiet: `So sánh Địa Không và Địa Kiếp:

| | Địa Không | Địa Kiếp |
|---|---|---|
| Tính | Âm Hỏa | Dương Hỏa |
| Bộc phát | Trống rỗng, mất mát ngầm | Trực diện, tổn thất khốc liệt |
| Đắc địa | Dần, Thân, Tỵ, Hợi | Tý, Dần, Mão, Tỵ, Thân |
| Tên gọi | Đoạn Trường Sát | — |

Lưu ý: tại Tỵ và Hợi, Kiếp Không không bao giờ đồng cung — luôn xung chiếu
nhau qua trục Tỵ-Hợi.`,
  },

  // ============================================================
  // 2. Địa Kiếp tại Mệnh
  // ============================================================
  {
    id: 'dia-kiep-tai-menh',
    title: 'Địa Kiếp tại Mệnh',
    sao: ['Địa Kiếp'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Khi Địa Kiếp cư Mệnh, sao này ảnh hưởng mạnh tới nội tâm và
đường đời của đương số — biểu hiện rõ rệt theo trạng thái đắc hay hãm.`,
  },

  {
    id: 'dia-kiep-tai-menh-dac',
    sao: ['Địa Kiếp'],
    cung: ['Mệnh'],
    trangThai: ['Đắc'],
    doUuTien: 75,
    tomTat: `Khi Địa Kiếp **Đắc** địa tại Mệnh, đương số có nội tâm mạnh mẽ,
kiên cường và quyết đoán. Theo tinh thần "đâm lao phải theo lao", chủ mệnh
không dễ khuất phục, luôn tìm cách xoay chuyển tình thế và vượt nghịch
cảnh.`,
  },

  {
    id: 'dia-kiep-tai-menh-dac-tu-vi-thien-tuong-pha-quan',
    sao: ['Địa Kiếp'],
    cung: ['Mệnh'],
    trangThai: ['Đắc'],
    ketHop: ['Thiên Tướng', 'Phá Quân', 'Tử Vi'],
    doUuTien: 72,
    tomTat: `Khi Địa Kiếp Đắc địa tại Mệnh hội cùng Thiên Tướng, Phá Quân
hoặc Tử Vi, vận khí của đương số được thăng tiến và đạt thành tựu lớn.`,
  },

  {
    id: 'dia-kiep-tai-menh-ham',
    sao: ['Địa Kiếp'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    doUuTien: 75,
    tomTat: `Khi Địa Kiếp **Hãm** địa tại Mệnh, đương số căng thẳng nội tâm,
nóng nảy bức bối, hành động thiếu suy nghĩ. Trên đường đời chủ mệnh gặp
trắc trở liên tục, rơi vào bế tắc và cô lập. Cuộc đời nhiều biến động —
"như diều gặp gió" rồi lại "xuống dốc không phanh".`,
  },

  {
    id: 'dia-kiep-tai-menh-kinh-dia-khong',
    sao: ['Địa Kiếp'],
    cung: ['Mệnh'],
    ketHop: ['Kình Dương', 'Địa Không'],
    doUuTien: 72,
    tomTat: `Khi Địa Kiếp tại Mệnh đi cùng Kình Dương hoặc **Địa Không**,
sức khỏe và tài chính của đương số chịu hao tổn nặng nề.`,
  },

  // ============================================================
  // 3. Địa Kiếp tại Phụ Mẫu
  // ============================================================
  {
    id: 'dia-kiep-tai-phu-mau',
    title: 'Địa Kiếp tại Phụ Mẫu',
    sao: ['Địa Kiếp'],
    cung: ['Phụ Mẫu'],
    doUuTien: 70,
    tomTat: `Khi Địa Kiếp cư Phụ Mẫu, quan hệ giữa đương số với cha mẹ chịu
ảnh hưởng nặng — biểu hiện theo trạng thái đắc hay hãm.`,
  },

  {
    id: 'dia-kiep-tai-phu-mau-ham',
    sao: ['Địa Kiếp'],
    cung: ['Phụ Mẫu'],
    trangThai: ['Hãm'],
    doUuTien: 75,
    tomTat: `Khi Địa Kiếp Hãm địa tại Phụ Mẫu, hình khắc giữa đương số và
cha mẹ rất nặng nề. Cha mẹ dễ gặp tai họa, bệnh tật triền miên, hình tù
hoặc ly tán; quan hệ trong nhà căng thẳng, cãi vã, thậm chí bạo hành. Chủ
mệnh không chỉ không nhờ được cha mẹ mà còn phải gánh chịu hậu quả từ họ.
Cha mẹ vất vả, đôi khi mang những thói xấu như nghiện ngập, cờ bạc.`,
  },

  {
    id: 'dia-kiep-tai-phu-mau-dac',
    sao: ['Địa Kiếp'],
    cung: ['Phụ Mẫu'],
    trangThai: ['Đắc'],
    doUuTien: 75,
    tomTat: `Khi Địa Kiếp Đắc địa tại Phụ Mẫu, hình khắc vẫn còn nhưng giảm
bớt. Cha mẹ đương số mạnh mẽ, quyết đoán, làm trong những ngành mạo hiểm
hoặc bí mật. Vẫn có thăng trầm, chủ mệnh khó nhờ cha mẹ, nguy cơ ly cách
hoặc vấn đề sức khỏe vẫn tiềm tàng nhưng không quá nặng.`,
  },

  // ============================================================
  // 4. Địa Kiếp tại Phúc Đức
  // ============================================================
  {
    id: 'dia-kiep-tai-phuc-duc',
    title: 'Địa Kiếp tại Phúc Đức',
    sao: ['Địa Kiếp'],
    cung: ['Phúc Đức'],
    doUuTien: 70,
    tomTat: `Khi Địa Kiếp cư Phúc Đức, sao này ảnh hưởng tới nghiệp duyên
và phúc phần dòng họ của đương số — biểu hiện rõ theo trạng thái đắc hay
hãm.`,
  },

  {
    id: 'dia-kiep-tai-phuc-duc-ham',
    sao: ['Địa Kiếp'],
    cung: ['Phúc Đức'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi Địa Kiếp Hãm địa tại Phúc Đức, dòng họ của đương số sa sút
lụn bại, có người xấu, bất hảo. Sự nghiệp chủ mệnh nhiều biến động, tuổi
thọ chiết giảm, dễ mắc bệnh nan y.

Đây là nghiệp duyên nặng nề — phá hỏng nhân duyên cá nhân, hôn nhân không
trọn vẹn, vợ chồng chia ly. Đương số phải gánh nặng cả hai gia đình.`,
  },

  {
    id: 'dia-kiep-tai-phuc-duc-dac',
    sao: ['Địa Kiếp'],
    cung: ['Phúc Đức'],
    trangThai: ['Đắc'],
    doUuTien: 75,
    tomTat: `Khi Địa Kiếp Đắc địa tại Phúc Đức, dòng họ đương số thịnh vượng,
phát đạt nhanh chóng nhưng không bền. Mộ phần ban đầu được chăm sóc nhưng
dễ bị động chạm, thất lạc về sau.`,
  },

  {
    id: 'dia-kiep-tai-phuc-duc-luc-cat-tu-duc',
    sao: ['Địa Kiếp'],
    cung: ['Phúc Đức'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt', 'Thiên Đức', 'Nguyệt Đức', 'Phúc Đức', 'Long Đức'],
    doUuTien: 72,
    tomTat: `Khi Địa Kiếp tại Phúc Đức gặp Lục Cát Tinh hoặc Tứ Đức (Thiên
Đức, Nguyệt Đức, Phúc Đức, Long Đức), đương số được hưởng phúc lộc trời
ban và gặp quý nhân giúp đỡ.`,
  },

  // ============================================================
  // 5. Địa Kiếp tại Tật Ách
  // ============================================================
  {
    id: 'dia-kiep-tai-tat-ach',
    title: 'Địa Kiếp tại Tật Ách',
    sao: ['Địa Kiếp'],
    cung: ['Tật Ách'],
    doUuTien: 80,
    tomTat: `Khi Địa Kiếp cư Tật Ách, đương số dễ gặp tai họa và bệnh tật
bất ngờ, khó lường.

Lúc bệnh, chủ mệnh dễ tuyệt vọng và sa sút tinh thần, có thể đưa ra những
quyết định sai lầm. Cần lối sống khoa học, tìm hỗ trợ y tế kịp thời để
phòng ngừa.`,
  },

  {
    id: 'dia-kiep-tai-tat-ach-dac',
    sao: ['Địa Kiếp'],
    cung: ['Tật Ách'],
    trangThai: ['Đắc'],
    doUuTien: 75,
    tomTat: `Khi Địa Kiếp Đắc địa tại Tật Ách, đương số có thể mắc bệnh nguy
hiểm nhưng được chữa trị kịp thời, hoặc gặp tai nạn nhưng vượt qua được.
Vẫn cần cẩn trọng — nguy cơ tái phát hoặc biến chứng luôn có thể xảy đến.`,
  },

  {
    id: 'dia-kiep-tai-tat-ach-ham',
    sao: ['Địa Kiếp'],
    cung: ['Tật Ách'],
    trangThai: ['Hãm'],
    doUuTien: 75,
    tomTat: `Khi Địa Kiếp Hãm địa tại Tật Ách, sức ảnh hưởng gấp bội. Bệnh
của đương số thường thành nan y, khó tìm nguyên nhân, điều trị nhiều trở
ngại. Chủ mệnh dễ mắc bệnh lạ, dị tật bẩm sinh; tai nạn bất ngờ ảnh hưởng
tới tuổi thọ.`,
  },

  // ============================================================
  // 6. Địa Kiếp tại Quan Lộc
  // ============================================================
  {
    id: 'dia-kiep-tai-quan-loc',
    title: 'Địa Kiếp tại Quan Lộc',
    sao: ['Địa Kiếp'],
    cung: ['Quan Lộc'],
    doUuTien: 70,
    tomTat: `Khi Địa Kiếp cư Quan Lộc, sao này ảnh hưởng tới đường công danh
sự nghiệp của đương số — biểu hiện theo trạng thái đắc hay hãm.`,
  },

  {
    id: 'dia-kiep-tai-quan-loc-ham',
    sao: ['Địa Kiếp'],
    cung: ['Quan Lộc'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `Khi Địa Kiếp Hãm địa tại Quan Lộc, công danh của đương số bấp
bênh, khó được trọng dụng dù có tài. Chủ mệnh thường mất chức ít nhất một
lần trong đời, dễ bỏ dở học hành hay công việc giữa chừng. Có xu hướng làm
tắt, làm ẩu, dùng mánh khóe không chính đáng.`,
  },

  {
    id: 'dia-kiep-tai-quan-loc-ham-sat-tinh',
    sao: ['Địa Kiếp'],
    cung: ['Quan Lộc'],
    trangThai: ['Hãm'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 73,
    tomTat: `Khi Địa Kiếp Hãm địa tại Quan Lộc đi cùng nhiều sát tinh (bộ Tứ
Sát: Kình, Đà, Hỏa, Linh), đương số có nguy cơ sa ngã vào ngành bất hợp
pháp hoặc thế giới ngầm.`,
  },

  {
    id: 'dia-kiep-tai-quan-loc-dac',
    sao: ['Địa Kiếp'],
    cung: ['Quan Lộc'],
    trangThai: ['Đắc'],
    doUuTien: 75,
    tomTat: `Khi Địa Kiếp Đắc địa tại Quan Lộc, sự nghiệp đương số bùng nổ,
thành công nhanh chóng nhưng không bền — "lên rồi xuống, xuống rồi lại lên",
có khi đỉnh cao rồi mất tất cả. Chủ mệnh thường làm những công việc mạo
hiểm, liều lĩnh, đôi khi phi nhân tính để làm giàu chớp nhoáng.`,
  },

  // ============================================================
  // 7. Địa Kiếp tại Nô Bộc
  // ============================================================
  {
    id: 'dia-kiep-tai-no-boc',
    title: 'Địa Kiếp tại Nô Bộc',
    sao: ['Địa Kiếp'],
    cung: ['Nô Bộc'],
    doUuTien: 70,
    tomTat: `Khi Địa Kiếp cư Nô Bộc, sao này ảnh hưởng tới quan hệ bạn bè và
đồng nghiệp của đương số — biểu hiện theo trạng thái đắc hay hãm.`,
  },

  {
    id: 'dia-kiep-tai-no-boc-ham',
    sao: ['Địa Kiếp'],
    cung: ['Nô Bộc'],
    trangThai: ['Hãm'],
    doUuTien: 75,
    tomTat: `Khi Địa Kiếp Hãm địa tại Nô Bộc, đương số gặp nhiều mâu thuẫn,
hiểu lầm và bị phản bội trong quan hệ bạn bè, đồng nghiệp. Chủ mệnh thường
xuyên có cảm giác cô lập, thiếu hỗ trợ.`,
  },

  {
    id: 'dia-kiep-tai-no-boc-ham-khong-kinh-sat',
    sao: ['Địa Kiếp'],
    cung: ['Nô Bộc'],
    trangThai: ['Hãm'],
    ketHop: ['Địa Không', 'Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 72,
    tomTat: `Khi Địa Kiếp Hãm địa tại Nô Bộc đi cùng **Địa Không**, Kình Dương
hoặc các sát tinh, đương số gặp rắc rối lớn, dễ bị tiểu nhân vu oan. Lời
khuyên: "chọn mặt gửi vàng", tránh giao toàn quyền lực hoặc tài chính cho
người khác.`,
  },

  {
    id: 'dia-kiep-tai-no-boc-dac',
    sao: ['Địa Kiếp'],
    cung: ['Nô Bộc'],
    trangThai: ['Đắc'],
    doUuTien: 75,
    tomTat: `Khi Địa Kiếp Đắc địa tại Nô Bộc, đương số kết giao được với
những người tài năng, có địa vị, kể cả thành phần trong lực lượng vũ trang.
Vẫn tiềm ẩn biến động — chủ mệnh phải đề phòng bạn bè giỏi nhưng có thể
mang tai họa. Phản bội hay lừa gạt vẫn có nhưng kiểm soát được.`,
  },

  // ============================================================
  // 8. Địa Kiếp tại Thiên Di
  // ============================================================
  {
    id: 'dia-kiep-tai-thien-di',
    title: 'Địa Kiếp tại Thiên Di',
    sao: ['Địa Kiếp'],
    cung: ['Thiên Di'],
    doUuTien: 70,
    tomTat: `Khi Địa Kiếp cư Thiên Di, sao này ảnh hưởng tới đường ra ngoài
và đi xa của đương số — biểu hiện rõ theo trạng thái đắc hay hãm.`,
  },

  {
    id: 'dia-kiep-tai-thien-di-dac',
    sao: ['Địa Kiếp'],
    cung: ['Thiên Di'],
    trangThai: ['Đắc'],
    doUuTien: 78,
    tomTat: `Khi Địa Kiếp Đắc địa tại Thiên Di, đương số đi vào cách "phát
dã như lôi" — làm giàu nhanh chóng, trúng mánh hoặc gặp vận may từ bên
ngoài. Tuy nhiên thành công không bền: tiền đến nhanh đi nhanh, đôi khi
mất nhiều hơn kiếm được. Bên ngoài huy hoàng nhưng rủi ro luôn tiềm ẩn.`,
  },

  {
    id: 'dia-kiep-tai-thien-di-ham',
    sao: ['Địa Kiếp'],
    cung: ['Thiên Di'],
    trangThai: ['Hãm'],
    doUuTien: 75,
    tomTat: `Khi Địa Kiếp Hãm địa tại Thiên Di, đương số xa quê thường lạc
lõng, cô đơn. Giao tiếp kém linh hoạt, chủ mệnh khó tạo quan hệ sâu sắc và
dễ bị hiểu lầm, xa cách. Đi xa hay công tác cũng dễ vướng tai tiếng, thị
phi.`,
  },

  // ============================================================
  // 9. Địa Kiếp tại Điền Trạch
  // ============================================================
  {
    id: 'dia-kiep-tai-dien-trach',
    title: 'Địa Kiếp tại Điền Trạch',
    sao: ['Địa Kiếp'],
    cung: ['Điền Trạch'],
    doUuTien: 70,
    tomTat: `Khi Địa Kiếp cư Điền Trạch, sao này ảnh hưởng tới đất đai và
gia sản của đương số — biểu hiện rõ theo trạng thái đắc hay hãm.`,
  },

  {
    id: 'dia-kiep-tai-dien-trach-ham',
    sao: ['Địa Kiếp'],
    cung: ['Điền Trạch'],
    trangThai: ['Hãm'],
    doUuTien: 75,
    tomTat: `Khi Địa Kiếp Hãm địa tại Điền Trạch, đương số dễ gặp tranh chấp
đất đai, rắc rối pháp lý, hoặc mua phải tài sản phong thủy xấu. Chủ mệnh
phải di chuyển nhiều lần. Quan hệ gia đình quanh chuyện đất đai không hòa
thuận, thiếu yên ổn.`,
  },

  {
    id: 'dia-kiep-tai-dien-trach-dac',
    sao: ['Địa Kiếp'],
    cung: ['Điền Trạch'],
    trangThai: ['Đắc'],
    doUuTien: 75,
    tomTat: `Khi Địa Kiếp Đắc địa tại Điền Trạch, đương số quản lý và duy trì
bất động sản ổn định, bền vững theo thời gian. Chủ mệnh gắn bó sâu sắc với
đất tổ tiên, biết giữ gìn và phát huy gia sản.`,
  },

  {
    id: 'dia-kiep-tai-dien-trach-phu-ta-huu-loc',
    sao: ['Địa Kiếp'],
    cung: ['Điền Trạch'],
    ketHop: ['Thiên Phủ', 'Tả Phù', 'Hữu Bật', 'Lộc Tồn'],
    doUuTien: 72,
    tomTat: `Khi Địa Kiếp tại Điền Trạch hội cùng Thiên Phủ, Tả Phù, Hữu
Bật hoặc Lộc Tồn, đương số được thừa kế hoặc mở rộng tài sản âm thầm, ít
người biết. Cần thận trọng — "tham thì thâm".`,
  },

  // ============================================================
  // 10. Địa Kiếp tại Tài Bạch
  // ============================================================
  {
    id: 'dia-kiep-tai-tai-bach',
    title: 'Địa Kiếp tại Tài Bạch',
    sao: ['Địa Kiếp'],
    cung: ['Tài Bạch'],
    doUuTien: 80,
    tomTat: `Khi Địa Kiếp cư Tài Bạch, đương số có khả năng "phất lên cực
nhanh" — trong thời gian ngắn kiếm được khối tài sản lớn. Tuy nhiên phá
sản đến nhanh chóng và bất ngờ không kém lúc làm giàu.

Chủ mệnh có xu hướng kiếm tiền bằng đường táo bạo, mạo hiểm như đầu cơ,
tích trữ, thậm chí bất chính như buôn lậu, mua bán đồ quốc cấm.

Đương số dễ hao tài tốn của do quản lý kém hoặc bị lừa gạt. Thu nhập không
ổn định, dễ mất tiền do tranh chấp hay đầu tư sai lầm — sống trong áp lực
và bất an.`,
  },

  // ============================================================
  // 11. Địa Kiếp tại Tử Tức
  // ============================================================
  {
    id: 'dia-kiep-tai-tu-tuc',
    title: 'Địa Kiếp tại Tử Tức',
    sao: ['Địa Kiếp'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Khi Địa Kiếp cư Tử Tức, tình cảm cha mẹ - con cái của đương số
gặp nhiều vấn đề, hoặc giữa các con cái với nhau cũng dễ xung khắc.`,
  },

  {
    id: 'dia-kiep-tai-tu-tuc-ham',
    sao: ['Địa Kiếp'],
    cung: ['Tử Tức'],
    trangThai: ['Hãm'],
    doUuTien: 70,
    tomTat: `Khi Địa Kiếp Hãm địa tại Tử Tức, đương số có mâu thuẫn hoặc
hiểu lầm nghiêm trọng với con cái. Con dễ mắc các vấn đề về sức khỏe, học
hành; tinh thần không ổn định. Tranh chấp hoặc rạn nứt có thể xảy ra: chủ
mệnh cần kiên nhẫn, mềm mỏng theo lối "mưa dầm thấm lâu" để hóa giải sự
nóng nảy.`,
  },

  {
    id: 'dia-kiep-tai-tu-tuc-dac',
    sao: ['Địa Kiếp'],
    cung: ['Tử Tức'],
    trangThai: ['Đắc'],
    doUuTien: 70,
    tomTat: `Khi Địa Kiếp Đắc địa tại Tử Tức, con cái đương số có năng lực,
phát triển mạnh trong những ngành đặc thù, táo bạo, mạo hiểm. Hiếm muộn
hoặc bất hòa vẫn có nhưng không nghiêm trọng — con tự lập sớm, ít phụ
thuộc cha mẹ.`,
  },

  // ============================================================
  // 12. Địa Kiếp tại Phu Thê
  // ============================================================
  {
    id: 'dia-kiep-tai-phu-the',
    title: 'Địa Kiếp tại Phu Thê',
    sao: ['Địa Kiếp'],
    cung: ['Phu Thê'],
    doUuTien: 80,
    tomTat: `Khi Địa Kiếp cư Phu Thê, tình cảm của đương số thường đến nhanh
— yêu nhanh, cưới nhanh; hôn nhân nhiều biến động.

Hai vợ chồng đến với nhau liều lĩnh, bất chấp phản đối; ban đầu khó khăn.
Sự thịnh vượng không kéo dài: khi có của cải lại nảy sinh xung đột, nguy cơ
tan vỡ. Quan hệ vợ chồng lạnh nhạt, thiếu sẻ chia.`,
  },

  {
    id: 'dia-kiep-tai-phu-the-dac',
    sao: ['Địa Kiếp'],
    cung: ['Phu Thê'],
    trangThai: ['Đắc'],
    doUuTien: 75,
    tomTat: `Khi Địa Kiếp Đắc địa tại Phu Thê, hai vợ chồng đương số đến với
nhau liều lĩnh, ban đầu khó khăn nhưng sau đó phát đạt nhanh chóng.`,
  },

  {
    id: 'dia-kiep-tai-phu-the-khong-kinh-sat',
    sao: ['Địa Kiếp'],
    cung: ['Phu Thê'],
    ketHop: ['Địa Không', 'Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 73,
    tomTat: `Khi Địa Kiếp tại Phu Thê đi cùng **Địa Không**, Kình Dương hoặc
các sát tinh khác, đương số gặp biến cố hôn nhân, rạn nứt lớn — dẫn tới
chia ly.`,
  },

  // ============================================================
  // 13. Địa Kiếp tại Huynh Đệ
  // ============================================================
  {
    id: 'dia-kiep-tai-huynh-de',
    title: 'Địa Kiếp tại Huynh Đệ',
    sao: ['Địa Kiếp'],
    cung: ['Huynh Đệ'],
    doUuTien: 70,
    tomTat: `Khi Địa Kiếp cư Huynh Đệ, sao này ảnh hưởng tới quan hệ anh chị
em của đương số — biểu hiện rõ theo trạng thái đắc hay hãm.`,
  },

  {
    id: 'dia-kiep-tai-huynh-de-ham',
    sao: ['Địa Kiếp'],
    cung: ['Huynh Đệ'],
    trangThai: ['Hãm'],
    doUuTien: 75,
    tomTat: `Khi Địa Kiếp Hãm địa tại Huynh Đệ, quan hệ huynh đệ của đương
số đứt gãy, xa cách lạnh nhạt hoặc rơi vào ganh đua khốc liệt. Người trong
gia tộc mang tâm cơ, dễ xung đột lợi ích, tranh chấp tài sản và quyền lực.
Chủ mệnh có thể khuyết thiếu huynh đệ, sinh ra trong hoàn cảnh đơn chiếc.`,
  },

  {
    id: 'dia-kiep-tai-huynh-de-dac',
    sao: ['Địa Kiếp'],
    cung: ['Huynh Đệ'],
    trangThai: ['Đắc'],
    doUuTien: 75,
    tomTat: `Khi Địa Kiếp Đắc địa tại Huynh Đệ, anh chị em đương số có chí
khí, cùng nhau vượt khó, sát cánh trong sự nghiệp. Quan hệ huynh đệ gắn
bó, có va chạm nhỏ nhưng vẫn giữ được sự kính trọng và nâng đỡ. Anh chị em
cá tính mạnh, dám nghĩ dám làm, có vai trò dẫn dắt.`,
  },

  // ============================================================
  // 14. Hung họa khi sao Địa Kiếp vào hạn
  // ============================================================
  {
    id: 'dia-kiep-han',
    title: 'Địa Kiếp vào hạn - 3 hung họa',
    sao: ['Địa Kiếp'],
    doUuTien: 55,
    tomTat: `Khi hạn đến Địa Kiếp, đương số đối diện với ba hung họa chính:

1. Tiền bạc hao tán — mất mát do đầu tư sai, bị lừa gạt, hoặc chi tiêu đột
   xuất ngoài dự liệu. Chủ mệnh cần "liệu cơm gắp mắm", tránh phung phí và
   may rủi.

2. Mất chức, mất quyền — với người làm quan hay lãnh đạo, dễ xảy ra biến
   động bất lợi do quyết định nóng vội thiếu khôn ngoan. Cần thận trọng
   từng quyết định, khéo léo bảo toàn uy tín.

3. Vận hạn bệnh tật — đặc biệt khi gặp Phá Quân + **Địa Không** + **Địa
   Kiếp** + Đại Hao + Tiểu Hao, đây là cảnh báo bệnh nặng đường hô hấp.
   Đương số cần dưỡng sinh, ăn uống điều độ, khám sức khỏe định kỳ.`,
  },

  {
    id: 'dia-kiep-han-mo-xe',
    title: 'Địa Kiếp + Phá Quân + Đại Hao + Tiểu Hao + Kình Dương + Thiên Hình vào hạn - mổ xẻ',
    sao: ['Địa Kiếp'],
    ketHop: ['Phá Quân', 'Đại Hao', 'Tiểu Hao', 'Kình Dương', 'Thiên Hình'],
    doUuTien: 50,
    tomTat: `Khi Địa Kiếp đi cùng Phá Quân, Đại Hao, Tiểu Hao, Kình Dương và
Thiên Hình vào hạn, đương số phải mổ xẻ — bệnh nặng đường hô hấp cần phẫu
thuật.`,
  },

  // ============================================================
  // 15. Hóa giải Địa Kiếp
  // ============================================================
  {
    id: 'dia-kiep-hoa-giai',
    title: 'Địa Kiếp - Cách hóa giải',
    sao: ['Địa Kiếp'],
    doUuTien: 40,
    tomTat: `Hóa giải Địa Kiếp về cốt lõi là tránh hành động cực đoan và
liều lĩnh. Đương số có thể bám vào những hướng cụ thể sau:

1. Thu lại "cái tôi" — nhìn thẳng vào bản chất vấn đề thay vì phản ứng
   theo cảm xúc. Khi chấp nhận cả ưu lẫn nhược điểm của bản thân, chủ mệnh
   chuyển hóa được tổn thương thành thấu hiểu.

2. Điều chỉnh tam quan (thế giới quan, nhân sinh quan, giá trị quan) cho
   phù hợp với chuẩn mực đạo đức và xã hội. Tránh các hành động cực đoan
   hay liều lĩnh không cần thiết.

3. Tại các cung quan hệ, đương số nên tìm hiểu bản chất từng mối liên
   kết, rèn kỹ năng hòa giải và thiết lập nguyên tắc ngay từ đầu để hạn
   chế rủi ro.

4. Hướng thiện, tu tâm dưỡng tính — đồng thời để cát tinh hội chiếu. Khi
   tâm an định, trí sáng suốt, Địa Kiếp không còn là họa, ngược lại trở
   thành động lực giúp chủ mệnh trưởng thành qua mỗi thử thách.`,
  },
];
