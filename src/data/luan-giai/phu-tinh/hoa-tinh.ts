import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO HỎA TINH - Lục Sát Tinh
 */
export const luanGiai_HoaTinh: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung của sao Hỏa Tinh
  // ============================================================
  {
    id: 'hoa-tinh-tinh-chat-chung',
    title: 'Hỏa Tinh - Đặc tính chung',
    sao: ['Hỏa Tinh'],
    doUuTien: 30,
    tomTat: `**Hỏa Tinh** thuộc bộ Lục Sát Tinh, ngũ hành Hỏa, là hung tinh.
Sao này cùng Linh Tinh tạo thành bộ "Hỏa Linh", thường kéo theo tai họa, hung
hiểm và những biến cố bất ngờ.

Đặc tính cốt lõi của Hỏa Tinh là gan dạ, quyết liệt và bộc trực. Khi đi
thuận thế, sao này như ngọn đuốc soi đường, mang lại dũng khí và ý chí cho
đương số. Khi đi nghịch thế, Hỏa Tinh lại biến thành sự liều lĩnh, nóng nảy
và khó kiểm soát cảm xúc.

Về vị trí, Hỏa Tinh **đắc** ở Dần, Mão, Thìn, Tỵ, Ngọ; **hãm** ở Tý, Sửu,
Mùi, Thân, Dậu, Tuất, Hợi.`,

    chiTiet: `Mặt tích cực, Hỏa Tinh khơi dậy tinh thần chiến đấu và ý chí
vững vàng nơi đương số, rất phù hợp với những lĩnh vực đòi hỏi sự quyết đoán
và mạo hiểm. Mặt tiêu cực thì tiềm ẩn nguy cơ va chạm, cháy nổ, tai nạn bất
ngờ hoặc các vấn đề về thần kinh.

Về vận trình, sự nghiệp của đương số khi Hỏa Tinh đắc địa có bước tiến nhanh
và dễ nắm quyền; ngược lại khi hãm địa, công danh thường "lên nhanh xuống
nhanh".

Duyên vận của đương số dễ bất hòa do tính khí nóng nảy. Nếu cung tình duyên
xấu hoặc có nhiều sát tinh hội họp, hôn nhân có thể đổ vỡ; nặng hơn còn ứng
vào cảnh sát phu hoặc sát thê.

Về tài lộc, đương số có năng lực kiếm tiền nhưng không giỏi giữ của. Khi đi
cùng Tham Lang sẽ có cơ may cải thiện; nhưng nếu hội thêm Linh Tinh, Địa Kiếp
hay Đại Hao thì tài chính thất thường, hao hụt do đầu tư sai lầm hoặc các
biến cố bất ngờ.`,
  },

  // ============================================================
  // 2. Hỏa Tinh tại Mệnh - tướng mạo
  // ============================================================
  {
    id: 'hoa-tinh-tai-menh-tuong-mao',
    title: 'Hỏa Tinh tại Mệnh - Tướng mạo',
    sao: ['Hỏa Tinh'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `Khi Hỏa Tinh cư Mệnh, đương số có vẻ ngoài thô kệch, tóc và lông
mang sắc vàng hoặc đỏ. Trên người thường có sẹo hoặc các dấu vết thương tích.

Dáng người dễ gầy gò, ốm yếu; gương mặt đôi khi đượm vẻ u sầu, ánh mắt mơ
màng và thiếu tập trung.`,
  },

  // ============================================================
  // 3. Hỏa Tinh tại Mệnh - tính cách & tâm lý
  // ============================================================
  {
    id: 'hoa-tinh-tai-menh-tinh-cach',
    title: 'Hỏa Tinh tại Mệnh - Tính cách & tâm lý',
    sao: ['Hỏa Tinh'],
    cung: ['Mệnh'],
    doUuTien: 85,
    tomTat: `Đương số có Hỏa Tinh cư Mệnh dũng mãnh, gai góc nhưng dễ trở nên
nóng nảy và liều lĩnh, khó giữ được "cái đầu lạnh" trong những thời khắc
căng thẳng.

Về tính cách, đương số hay lo nghĩ, ôm rơm nặng bụng nên dễ mắc chứng mất
ngủ, căng thẳng và trầm cảm. Đương số biết tính toán, song nếu đi quá đà
thì lại trở thành chi ly, keo kiệt.

Về tâm lý, nội tâm của đương số khá bất ổn. Khi sống trong môi trường tiêu
cực, tâm trạng dễ mất cân bằng. Nếu lá số có thêm nhiều ám tinh hội họp, sự
nhạy cảm trở thành gánh nặng — đương số có xu hướng theo đuổi con đường tâm
linh để tìm điểm tựa.

Đặc biệt, khi Hỏa Tinh gặp Tham Lang đồng cung sẽ tạo thành cách **Hỏa Tham**
— bộ "Hỏa Tham thượng cách", một trong những cách cục đắt giá nhất gắn với
Hỏa Tinh.`,
  },

  {
    id: 'hoa-tinh-menh-dac-cat-tinh',
    title: 'Hỏa Tinh tại Mệnh - Đắc địa + cát tinh',
    sao: ['Hỏa Tinh'],
    cung: ['Mệnh'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    doUuTien: 80,
    tomTat: `Khi Hỏa Tinh ở thế **Miếu**, **Vượng** hoặc **Đắc** tại Mệnh và có
cát tinh hội họp, sự nghiệp của đương số hanh thông, tài lộc ổn định. Mặt
tích cực của sao được phát huy trọn vẹn ở dũng khí, ý chí và sự quyết đoán.`,
  },

  {
    id: 'hoa-tinh-menh-ham-hung-tinh',
    title: 'Hỏa Tinh tại Mệnh - Hãm + hung tinh',
    sao: ['Hỏa Tinh'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `Khi Hỏa Tinh **hãm** tại Mệnh, hoặc gặp hung tinh hội họp, đường
công danh của đương số bị cản trở. Đương số có thể gặp họa liên quan đến
lửa hoặc điện; tâm tính nóng nảy, liều lĩnh trở nên khó kiểm soát.`,
  },

  // ============================================================
  // 4. Hỏa Tham - Thượng cách
  // ============================================================
  {
    id: 'hoa-tinh-hoa-tham',
    title: 'Hỏa Tham - Thượng cách của Hỏa Tinh',
    sao: ['Hỏa Tinh', 'Tham Lang'],
    ketHop: ['Hỏa Tham'],
    doUuTien: 65,
    tomTat: `Khi Hỏa Tinh đồng cung Tham Lang, hai sao tạo thành cách **Hỏa
Tham** — thượng cách của Hỏa Tinh. Đương số có số nắm quyền uy, hợp với võ
nghiệp hoặc buôn bán quy mô lớn; nếu hội cùng tài tinh và phụ tinh phù hợp
thì thành công lớn.

Khi hạn đến Hỏa Tham mà có thêm cát tinh hội họp, đương số "một bước lên
mây" về cả công danh lẫn tài lộc — thăng tiến rất nhanh, đặc biệt trong các
ngành kỹ thuật, quân sự và thương mại.`,
  },

  // ============================================================
  // 5. Hỏa Tinh + sát tinh - Tai ương dữ dội
  // ============================================================
  {
    id: 'hoa-tinh-sat-tinh',
    title: 'Hỏa Tinh + Sát tinh - Tai ương dữ dội',
    sao: ['Hỏa Tinh'],
    ketHop: ['Thiên Hình', 'Linh Tinh', 'Địa Không', 'Địa Kiếp', 'Kình Dương'],
    doUuTien: 60,
    tomTat: `Khi Hỏa Tinh gặp Thiên Hình, Linh Tinh, Địa Không, Địa Kiếp hay
Kình Dương, các sát tinh này như "thêm dầu vào lửa". Đương số có nguy cơ gặp
tai họa đột ngột nguy hiểm tính mạng — như cháy nổ, điện giật, sét đánh,
súng đạn, hoặc va chạm giao thông.`,
  },

  {
    id: 'hoa-tinh-am-tinh',
    title: 'Hỏa Tinh + Ám tinh - Bất ổn thần kinh',
    sao: ['Hỏa Tinh'],
    ketHop: ['Đà La', 'Hóa Kỵ', 'Thiên Riêu'],
    doUuTien: 55,
    tomTat: `Khi Hỏa Tinh đi cùng các ám tinh như Đà La, Hóa Kỵ hay Thiên
Riêu, đương số sống trong trạng thái "ngồi trên đống lửa": dễ rơi vào trầm
cảm, lo âu và bất ổn thần kinh kéo dài.`,
  },

  // ============================================================
  // 6. Hỏa Tinh hãm + sát tinh - Hạn tang bệnh
  // ============================================================
  {
    id: 'hoa-tinh-han',
    title: 'Hạn Hỏa Tinh - Tang bệnh khi hãm địa',
    sao: ['Hỏa Tinh'],
    doUuTien: 50,
    tomTat: `Khi hạn đến Hỏa Tinh, sự cát hung phụ thuộc vào trạng thái và sao
hội họp.

Nếu Hỏa Tinh đắc địa cùng Tham Lang và có thêm tài tinh, đương số "một bước
lên mây" — thăng tiến nhanh về công danh và tài lộc, đặc biệt trong các
ngành kỹ thuật, quân sự và thương mại.

Nếu Hỏa Tinh hãm địa hoặc bị sát tinh vây hãm, hạn này kéo theo tang sự,
bệnh tật và tai nạn bất ngờ. Đương số cần đề phòng các bệnh thần kinh, tai
họa liên quan đến điện, lửa, cháy nổ; trường hợp nặng có thể gặp biến cố
nhanh và dữ dội với hậu quả khó lường.`,
  },

  // ============================================================
  // 7. Hỏa Tinh tại Phụ Mẫu
  // ============================================================
  {
    id: 'hoa-tinh-tai-phu-mau',
    title: 'Hỏa Tinh tại Phụ Mẫu',
    sao: ['Hỏa Tinh'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Khi Hỏa Tinh đóng tại Phụ Mẫu, gia đình đương số rơi vào cảnh
"cơm không lành, canh chẳng ngọt". Cha mẹ hay khắc khẩu, sức khỏe yếu, dễ
mắc các chứng bệnh thần kinh, huyết áp hoặc stress kéo dài — biểu hiện đặc
biệt rõ khi có sát tinh hội họp.`,
  },

  {
    id: 'hoa-tinh-tai-phu-mau-tham-lang',
    title: 'Hỏa Tinh + Tham Lang tại Phụ Mẫu',
    sao: ['Hỏa Tinh'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Tham Lang'],
    doUuTien: 70,
    tomTat: `Khi Hỏa Tinh cùng Tham Lang tại Phụ Mẫu, cha mẹ của đương số có
thể là người "tay trắng dựng cơ đồ", giỏi kinh doanh và gặt hái thành công
về mặt tài chính.`,
  },

  // ============================================================
  // 8. Hỏa Tinh tại Phúc Đức
  // ============================================================
  {
    id: 'hoa-tinh-tai-phuc-duc',
    title: 'Hỏa Tinh tại Phúc Đức',
    sao: ['Hỏa Tinh'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `Khi Hỏa Tinh đóng tại Phúc Đức, đương số gắn với những biến cố
bất ngờ và rủi ro khó lường về vận khí dòng họ.

Mộ phần tổ tiên thường ở những nơi đất khô cằn, nắng nóng gay gắt, ít cây
cối — phong thủy cảnh báo sinh khí dòng tộc đời sau suy giảm, ứng vào câu
"đời cha ăn mặn, đời con khát nước".`,
  },

  {
    id: 'hoa-tinh-tai-phuc-duc-kinh',
    title: 'Hỏa Tinh + Kình Dương tại Phúc Đức',
    sao: ['Hỏa Tinh'],
    cung: ['Phúc Đức'],
    ketHop: ['Kình Dương'],
    doUuTien: 70,
    tomTat: `Khi Hỏa Tinh cùng Kình Dương tại Phúc Đức, gia tộc của đương số
dễ có người bần hàn, bệnh tật triền miên, tinh thần bất ổn hoặc điên loạn.`,
  },

  {
    id: 'hoa-tinh-tai-phuc-duc-da',
    title: 'Hỏa Tinh + Đà La tại Phúc Đức',
    sao: ['Hỏa Tinh'],
    cung: ['Phúc Đức'],
    ketHop: ['Đà La'],
    doUuTien: 70,
    tomTat: `Khi Hỏa Tinh cùng Đà La tại Phúc Đức, gia tộc của đương số dễ có
người bần hàn, bệnh tật triền miên, tinh thần bất ổn hoặc điên loạn.`,
  },

  {
    id: 'hoa-tinh-tai-phuc-duc-linh',
    title: 'Hỏa Tinh + Linh Tinh tại Phúc Đức',
    sao: ['Hỏa Tinh'],
    cung: ['Phúc Đức'],
    ketHop: ['Linh Tinh'],
    doUuTien: 70,
    tomTat: `Khi Hỏa Tinh cùng Linh Tinh tại Phúc Đức, gia tộc của đương số
dễ có người bần hàn, bệnh tật triền miên, tinh thần bất ổn hoặc điên loạn.`,
  },

  // ============================================================
  // 9. Hỏa Tinh tại Điền Trạch
  // ============================================================
  {
    id: 'hoa-tinh-tai-dien-trach',
    title: 'Hỏa Tinh tại Điền Trạch',
    sao: ['Hỏa Tinh'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Khi Hỏa Tinh đóng tại Điền Trạch, việc giữ sản nghiệp tổ tiên
của đương số khó khăn như "giữ cát trong tay" — càng nắm chặt càng dễ tuột.

Tính nóng cộng với sát khí của Hỏa Tinh khiến chỗ ở dễ bị hỏa hoạn, chập
điện hoặc vướng vào tranh chấp pháp lý. Có những trường hợp nhà của đương
số ở gần cột điện, trạm phát sóng — yếu tố này ảnh hưởng tới sức khỏe lâu
dài.`,
  },

  {
    id: 'hoa-tinh-tai-dien-trach-linh',
    title: 'Hỏa Tinh + Linh Tinh tại Điền Trạch',
    sao: ['Hỏa Tinh'],
    cung: ['Điền Trạch'],
    ketHop: ['Linh Tinh'],
    doUuTien: 70,
    tomTat: `Khi Hỏa Tinh cùng Linh Tinh tại Điền Trạch, nhà cửa của đương số
tiêu tán; vị trí ở thường rơi vào đất dữ, có vong linh hoặc tà khí.`,
  },

  {
    id: 'hoa-tinh-tai-dien-trach-khong',
    title: 'Hỏa Tinh + Địa Không tại Điền Trạch',
    sao: ['Hỏa Tinh'],
    cung: ['Điền Trạch'],
    ketHop: ['Địa Không'],
    doUuTien: 70,
    tomTat: `Khi Hỏa Tinh cùng Địa Không tại Điền Trạch, nhà cửa của đương số
tiêu tán; vị trí ở thường rơi vào đất dữ, có vong linh hoặc tà khí.`,
  },

  {
    id: 'hoa-tinh-tai-dien-trach-dai-hao',
    title: 'Hỏa Tinh + Đại Hao tại Điền Trạch',
    sao: ['Hỏa Tinh'],
    cung: ['Điền Trạch'],
    ketHop: ['Đại Hao'],
    doUuTien: 70,
    tomTat: `Khi Hỏa Tinh cùng Đại Hao tại Điền Trạch, nhà cửa của đương số
tiêu tán; vị trí ở thường rơi vào đất dữ, có vong linh hoặc tà khí.`,
  },

  {
    id: 'hoa-tinh-tai-dien-trach-tang',
    title: 'Hỏa Tinh + Tang Môn tại Điền Trạch - cháy nổ',
    sao: ['Hỏa Tinh'],
    cung: ['Điền Trạch'],
    ketHop: ['Tang Môn'],
    doUuTien: 70,
    tomTat: `Khi Hỏa Tinh cùng Tang Môn tại Điền Trạch, đương số đặc biệt cần
đề phòng nguy cơ cháy nổ.`,
  },

  // ============================================================
  // 10. Hỏa Tinh tại Quan Lộc
  // ============================================================
  {
    id: 'hoa-tinh-tai-quan-loc',
    title: 'Hỏa Tinh tại Quan Lộc',
    sao: ['Hỏa Tinh'],
    cung: ['Quan Lộc'],
    doUuTien: 80,
    tomTat: `Khi Hỏa Tinh đóng tại Quan Lộc, sao này ảnh hưởng trực tiếp đến
công danh và sự nghiệp của đương số; cát hung tùy thuộc vào trạng thái và
các sao đi kèm.`,
  },

  {
    id: 'hoa-tinh-tai-quan-loc-sat-tinh',
    title: 'Hỏa Tinh + Tứ Sát tại Quan Lộc',
    sao: ['Hỏa Tinh'],
    cung: ['Quan Lộc'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 70,
    tomTat: `Khi Hỏa Tinh cùng các sát tinh thuộc Tứ Sát (Kình Dương, Đà La,
Hỏa Tinh, Linh Tinh) tại Quan Lộc, áp lực công việc đè nặng đương số. Đương
số dễ rơi vào căng thẳng, suy nhược hoặc xảy ra mâu thuẫn với cấp trên và
đồng nghiệp.`,
  },

  {
    id: 'hoa-tinh-quan-dac-linh-tinh',
    title: 'Hỏa Tinh tại Quan Lộc - Đắc + Linh Tinh đắc',
    sao: ['Hỏa Tinh'],
    cung: ['Quan Lộc'],
    trangThai: ['Miếu', 'Vượng', 'Đắc'],
    ketHop: ['Linh Tinh'],
    doUuTien: 75,
    tomTat: `Khi Hỏa Tinh ở thế **Miếu**, **Vượng** hoặc **Đắc** tại Quan Lộc
và Linh Tinh cũng đắc, hai sao "tiếp lửa" cho nhau về mặt ý chí. Đương số
chăm chỉ, quyết đoán, giỏi phán đoán thời cơ và có tư duy phân tích tốt —
rất phù hợp với các ngành cơ khí, điện tử, truyền thông, quân sự và an
ninh.`,
  },

  {
    id: 'hoa-tinh-quan-ham',
    title: 'Hỏa Tinh tại Quan Lộc - Hãm địa',
    sao: ['Hỏa Tinh'],
    cung: ['Quan Lộc'],
    trangThai: ['Hãm'],
    doUuTien: 75,
    tomTat: `Khi Hỏa Tinh **hãm** tại Quan Lộc, công danh của đương số trắc
trở. Sự nghiệp "lên bổng xuống trầm", lên nhanh xuống cũng nhanh, đương số
khó giữ được chức vị một cách ổn định.`,
  },

  // ============================================================
  // 11. Hỏa Tinh tại Nô Bộc
  // ============================================================
  {
    id: 'hoa-tinh-tai-no-boc',
    title: 'Hỏa Tinh tại Nô Bộc',
    sao: ['Hỏa Tinh'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Khi Hỏa Tinh đóng tại Nô Bộc và rơi vào hãm địa, đương số phải
lo toan, gánh trách nhiệm thay cho bạn bè đồng nghiệp, "mang nợ ân tình"
mà chưa chắc được đền đáp.`,
  },

  {
    id: 'hoa-tinh-tai-no-boc-sat-pha-tham',
    title: 'Hỏa Tinh + Sát Phá Tham tại Nô Bộc',
    sao: ['Hỏa Tinh'],
    cung: ['Nô Bộc'],
    ketHop: ['Thất Sát', 'Phá Quân', 'Tham Lang'],
    doUuTien: 70,
    tomTat: `Khi Hỏa Tinh hội cùng bộ Sát Phá Tham (Thất Sát, Phá Quân, Tham
Lang) tại Nô Bộc, đương số có nhiều bạn bè đồng nghiệp tốt — họ cùng nhau
phát triển và thành đạt.`,
  },

  {
    id: 'hoa-tinh-tai-no-boc-rieu',
    title: 'Hỏa Tinh + Thiên Riêu tại Nô Bộc',
    sao: ['Hỏa Tinh'],
    cung: ['Nô Bộc'],
    ketHop: ['Thiên Riêu'],
    doUuTien: 70,
    tomTat: `Khi Hỏa Tinh cùng Thiên Riêu tại Nô Bộc, bạn bè hoặc bản thân
đương số có thể làm các lĩnh vực tâm linh, huyền học.`,
  },

  {
    id: 'hoa-tinh-tai-no-boc-da',
    title: 'Hỏa Tinh + Đà La tại Nô Bộc',
    sao: ['Hỏa Tinh'],
    cung: ['Nô Bộc'],
    ketHop: ['Đà La'],
    doUuTien: 70,
    tomTat: `Khi Hỏa Tinh cùng Đà La tại Nô Bộc, bạn bè hoặc bản thân đương
số có thể làm các lĩnh vực tâm linh, huyền học.`,
  },

  // ============================================================
  // 12. Hỏa Tinh tại Thiên Di
  // ============================================================
  {
    id: 'hoa-tinh-tai-thien-di',
    title: 'Hỏa Tinh tại Thiên Di',
    sao: ['Hỏa Tinh'],
    cung: ['Thiên Di'],
    doUuTien: 78,
    tomTat: `Khi Hỏa Tinh đóng tại Thiên Di, đương số ra ngoài gặp nhiều vất
vả, gian nan — "chưa ấm chỗ đã gặp chuyện", khó tìm được sự ổn định khi đổi
nơi ở hay môi trường làm việc.

Đương số cũng thường lui tới những nơi linh thiêng hoặc dễ chịu ảnh hưởng
của các năng lượng tiêu cực.`,
  },

  {
    id: 'hoa-tinh-tai-thien-di-linh',
    title: 'Hỏa Tinh + Linh Tinh tại Thiên Di',
    sao: ['Hỏa Tinh'],
    cung: ['Thiên Di'],
    ketHop: ['Linh Tinh'],
    doUuTien: 70,
    tomTat: `Khi Hỏa Tinh cùng Linh Tinh tại Thiên Di, đây là điềm báo tai
nạn nghiêm trọng cho đương số.`,
  },

  {
    id: 'hoa-tinh-tai-thien-di-thien-viet',
    title: 'Hỏa Tinh + Thiên Việt tại Thiên Di',
    sao: ['Hỏa Tinh'],
    cung: ['Thiên Di'],
    ketHop: ['Thiên Việt'],
    doUuTien: 70,
    tomTat: `Khi Hỏa Tinh cùng Thiên Việt tại Thiên Di, đây là điềm báo tai
nạn nghiêm trọng cho đương số.`,
  },

  {
    id: 'hoa-tinh-tai-thien-di-thien-hinh',
    title: 'Hỏa Tinh + Thiên Hình tại Thiên Di',
    sao: ['Hỏa Tinh'],
    cung: ['Thiên Di'],
    ketHop: ['Thiên Hình'],
    doUuTien: 70,
    tomTat: `Khi Hỏa Tinh cùng Thiên Hình tại Thiên Di, đây là điềm báo tai
nạn nghiêm trọng cho đương số.`,
  },

  {
    id: 'hoa-tinh-tai-thien-di-thien-ma',
    title: 'Hỏa Tinh + Thiên Mã tại Thiên Di',
    sao: ['Hỏa Tinh'],
    cung: ['Thiên Di'],
    ketHop: ['Thiên Mã'],
    doUuTien: 73,
    tomTat: `Khi Hỏa Tinh cùng Thiên Mã tại Thiên Di, cuộc sống của đương số
bôn ba, di chuyển nhiều — sống cảnh "một nắng hai sương".`,
  },

  // ============================================================
  // 13. Hỏa Tinh tại Tật Ách
  // ============================================================
  {
    id: 'hoa-tinh-tai-tat-ach',
    title: 'Hỏa Tinh tại Tật Ách',
    sao: ['Hỏa Tinh'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `Khi Hỏa Tinh đóng tại Tật Ách, đương số chủ về các bệnh thần kinh
— đau đầu, mất ngủ, suy nhược tinh thần.

Nhiều người có sao này còn bị tác động bởi khí âm hoặc vong linh, khiến sức
khỏe và tinh thần khó phục hồi.`,
  },

  {
    id: 'hoa-tinh-tai-tat-ach-moc-duc',
    title: 'Hỏa Tinh + Mộc Dục tại Tật Ách',
    sao: ['Hỏa Tinh'],
    cung: ['Tật Ách'],
    ketHop: ['Mộc Dục'],
    doUuTien: 70,
    tomTat: `Khi Hỏa Tinh cùng Mộc Dục tại Tật Ách, đương số cần đề phòng
nguy cơ bị bỏng nước sôi.`,
  },

  {
    id: 'hoa-tinh-tai-tat-ach-thien-hinh',
    title: 'Hỏa Tinh + Thiên Hình tại Tật Ách',
    sao: ['Hỏa Tinh'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Hình'],
    doUuTien: 70,
    tomTat: `Khi Hỏa Tinh cùng Thiên Hình tại Tật Ách, đương số dễ gặp các
thương tích do dao kéo, cháy nổ, điện giật hoặc tai nạn giao thông.`,
  },

  {
    id: 'hoa-tinh-tai-tat-ach-linh',
    title: 'Hỏa Tinh + Linh Tinh tại Tật Ách',
    sao: ['Hỏa Tinh'],
    cung: ['Tật Ách'],
    ketHop: ['Linh Tinh'],
    doUuTien: 70,
    tomTat: `Khi Hỏa Tinh cùng Linh Tinh tại Tật Ách, đương số dễ gặp các
thương tích do dao kéo, cháy nổ, điện giật hoặc tai nạn giao thông.`,
  },

  {
    id: 'hoa-tinh-tai-tat-ach-thien-viet',
    title: 'Hỏa Tinh + Thiên Việt tại Tật Ách',
    sao: ['Hỏa Tinh'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Việt'],
    doUuTien: 70,
    tomTat: `Khi Hỏa Tinh cùng Thiên Việt tại Tật Ách, đương số dễ gặp các
thương tích do dao kéo, cháy nổ, điện giật hoặc tai nạn giao thông.`,
  },

  {
    id: 'hoa-tinh-tat-ach-kinh-thin-chet-duoi',
    title: 'Hỏa Tinh tại Tật + Kình Dương hãm tại Thìn - Chết đuối',
    sao: ['Hỏa Tinh'],
    cung: ['Tật Ách'],
    chi: ['Thìn'],
    ketHop: ['Kình Dương'],
    doUuTien: 70,
    tomTat: `Khi Hỏa Tinh tại Tật Ách đi cùng Kình Dương hãm tại Thìn, đương
số cần cẩn trọng môi trường sông nước và đặc biệt đề phòng nguy cơ chết đuối.`,
  },

  // ============================================================
  // 14. Hỏa Tinh tại Tài Bạch
  // ============================================================
  {
    id: 'hoa-tinh-tai-tai-bach',
    title: 'Hỏa Tinh tại Tài Bạch',
    sao: ['Hỏa Tinh'],
    cung: ['Tài Bạch'],
    doUuTien: 78,
    tomTat: `Khi Hỏa Tinh đóng tại Tài Bạch, đường tiền bạc của đương số
ứng vào câu "có tiền mà không có của" — kiếm được tiền nhưng thất thoát
nhanh vì những lý do bất ngờ.`,
  },

  {
    id: 'hoa-tinh-tai-tai-bach-tham-lang',
    title: 'Hỏa Tinh + Tham Lang tại Tài Bạch',
    sao: ['Hỏa Tinh'],
    cung: ['Tài Bạch'],
    ketHop: ['Tham Lang'],
    doUuTien: 70,
    tomTat: `Khi Hỏa Tinh cùng Tham Lang tại Tài Bạch, tài lộc và khả năng
tích lũy của đương số được cải thiện rõ rệt. Nếu kinh doanh quy mô lớn và
có thêm tài tinh hay cát tinh hỗ trợ, đương số phát đạt.`,
  },

  {
    id: 'hoa-tinh-tai-tai-bach-linh',
    title: 'Hỏa Tinh + Linh Tinh tại Tài Bạch',
    sao: ['Hỏa Tinh'],
    cung: ['Tài Bạch'],
    ketHop: ['Linh Tinh'],
    doUuTien: 70,
    tomTat: `Khi Hỏa Tinh cùng Linh Tinh tại Tài Bạch, "tiền vào nhà khó như
gió vào nhà trống". Của để dành của đương số cũng dễ mất do đầu tư sai lầm
hoặc bị lừa gạt.`,
  },

  {
    id: 'hoa-tinh-tai-tai-bach-kiep',
    title: 'Hỏa Tinh + Địa Kiếp tại Tài Bạch',
    sao: ['Hỏa Tinh'],
    cung: ['Tài Bạch'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Khi Hỏa Tinh cùng Địa Kiếp tại Tài Bạch, "tiền vào nhà khó như
gió vào nhà trống". Của để dành của đương số cũng dễ mất do đầu tư sai lầm
hoặc bị lừa gạt.`,
  },

  {
    id: 'hoa-tinh-tai-tai-bach-dai-hao',
    title: 'Hỏa Tinh + Đại Hao tại Tài Bạch',
    sao: ['Hỏa Tinh'],
    cung: ['Tài Bạch'],
    ketHop: ['Đại Hao'],
    doUuTien: 70,
    tomTat: `Khi Hỏa Tinh cùng Đại Hao tại Tài Bạch, "tiền vào nhà khó như
gió vào nhà trống". Của để dành của đương số cũng dễ mất do đầu tư sai lầm
hoặc bị lừa gạt.`,
  },

  // ============================================================
  // 15. Hỏa Tinh tại Tử Tức
  // ============================================================
  {
    id: 'hoa-tinh-tai-tu-tuc',
    title: 'Hỏa Tinh tại Tử Tức',
    sao: ['Hỏa Tinh'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Khi Hỏa Tinh đóng tại Tử Tức, đường con cái của đương số không
tốt — ít con hoặc hiếm muộn.

Con sinh ra cũng khó nuôi, tính cách "như nước với lửa" với cha mẹ; lớn lên
dễ bất đồng với đương số về suy nghĩ và cách sống.`,
  },

  {
    id: 'hoa-tinh-tai-tu-tuc-sat-pha-tham',
    title: 'Hỏa Tinh + Sát Phá Tham tại Tử Tức',
    sao: ['Hỏa Tinh'],
    cung: ['Tử Tức'],
    ketHop: ['Thất Sát', 'Phá Quân', 'Tham Lang'],
    doUuTien: 70,
    tomTat: `Khi Hỏa Tinh hội cùng bộ Sát Phá Tham (Thất Sát, Phá Quân, Tham
Lang) tại Tử Tức, con cái của đương số về sau khá giả, thành đạt và có thể
báo hiếu cha mẹ khi về già.`,
  },

  // ============================================================
  // 16. Hỏa Tinh tại Phu Thê
  // ============================================================
  {
    id: 'hoa-tinh-tai-phu-the',
    title: 'Hỏa Tinh tại Phu Thê',
    sao: ['Hỏa Tinh'],
    cung: ['Phu Thê'],
    doUuTien: 80,
    tomTat: `Khi Hỏa Tinh đóng tại Phu Thê, sao này như "ngòi nổ" đặt giữa
hôn nhân của đương số. Tính nóng, gấp và khó kiềm chế khiến vợ chồng dễ
bất hòa — từ lối sống, quan điểm cho đến tín ngưỡng.

Người phối ngẫu của đương số thường có sức khỏe kém, dễ gặp tai nạn liên
quan đến cháy nổ, điện hoặc các vấn đề về thần kinh.`,
  },

  {
    id: 'hoa-tinh-tai-phu-the-khong',
    title: 'Hỏa Tinh + Địa Không tại Phu Thê',
    sao: ['Hỏa Tinh'],
    cung: ['Phu Thê'],
    ketHop: ['Địa Không'],
    doUuTien: 73,
    tomTat: `Khi Hỏa Tinh cùng Địa Không tại Phu Thê, tình cảm của đương số
rạn nứt, ly tán; nếu lá số xấu có thể ứng vào cảnh sát phu hoặc sát thê.`,
  },

  {
    id: 'hoa-tinh-tai-phu-the-kiep',
    title: 'Hỏa Tinh + Địa Kiếp tại Phu Thê',
    sao: ['Hỏa Tinh'],
    cung: ['Phu Thê'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 73,
    tomTat: `Khi Hỏa Tinh cùng Địa Kiếp tại Phu Thê, tình cảm của đương số
rạn nứt, ly tán; nếu lá số xấu có thể ứng vào cảnh sát phu hoặc sát thê.`,
  },

  {
    id: 'hoa-tinh-tai-phu-the-rieu',
    title: 'Hỏa Tinh + Thiên Riêu tại Phu Thê',
    sao: ['Hỏa Tinh'],
    cung: ['Phu Thê'],
    ketHop: ['Thiên Riêu'],
    doUuTien: 73,
    tomTat: `Khi Hỏa Tinh cùng Thiên Riêu tại Phu Thê, tình cảm của đương số
rạn nứt, ly tán; nếu lá số xấu có thể ứng vào cảnh sát phu hoặc sát thê.`,
  },

  {
    id: 'hoa-tinh-tai-phu-the-thien-hinh',
    title: 'Hỏa Tinh + Thiên Hình tại Phu Thê',
    sao: ['Hỏa Tinh'],
    cung: ['Phu Thê'],
    ketHop: ['Thiên Hình'],
    doUuTien: 73,
    tomTat: `Khi Hỏa Tinh cùng Thiên Hình tại Phu Thê, tình cảm của đương số
rạn nứt, ly tán; nếu lá số xấu có thể ứng vào cảnh sát phu hoặc sát thê.`,
  },

  // ============================================================
  // 17. Hỏa Tinh tại Huynh Đệ
  // ============================================================
  {
    id: 'hoa-tinh-tai-huynh-de',
    title: 'Hỏa Tinh tại Huynh Đệ',
    sao: ['Hỏa Tinh'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Khi Hỏa Tinh đóng tại Huynh Đệ, anh chị em của đương số rơi vào
cảnh "kẻ đầu sông, người cuối bãi" — xa cách cả về địa lý lẫn tình cảm,
tương tự khi gặp Cô Thần.

Người trong nhà có thể mang bệnh tật lâu năm, tàn tật hoặc gặp các biến cố
bất ngờ dẫn đến tử nạn.`,
  },

  {
    id: 'hoa-tinh-tai-huynh-de-linh',
    title: 'Hỏa Tinh + Linh Tinh tại Huynh Đệ',
    sao: ['Hỏa Tinh'],
    cung: ['Huynh Đệ'],
    ketHop: ['Linh Tinh'],
    doUuTien: 70,
    tomTat: `Khi Hỏa Tinh cùng Linh Tinh tại Huynh Đệ, anh chị em của đương
số ly tán và nghèo khổ.`,
  },

  {
    id: 'hoa-tinh-tai-huynh-de-khong',
    title: 'Hỏa Tinh + Địa Không tại Huynh Đệ',
    sao: ['Hỏa Tinh'],
    cung: ['Huynh Đệ'],
    ketHop: ['Địa Không'],
    doUuTien: 70,
    tomTat: `Khi Hỏa Tinh cùng Địa Không tại Huynh Đệ, anh chị em của đương
số ly tán và nghèo khổ.`,
  },

  {
    id: 'hoa-tinh-tai-huynh-de-kiep-sat',
    title: 'Hỏa Tinh + Kiếp Sát tại Huynh Đệ',
    sao: ['Hỏa Tinh'],
    cung: ['Huynh Đệ'],
    ketHop: ['Kiếp Sát'],
    doUuTien: 70,
    tomTat: `Khi Hỏa Tinh cùng Kiếp Sát tại Huynh Đệ, anh chị em của đương số
ly tán và nghèo khổ.`,
  },

  {
    id: 'hoa-tinh-tai-huynh-de-thien-hinh',
    title: 'Hỏa Tinh + Thiên Hình tại Huynh Đệ',
    sao: ['Hỏa Tinh'],
    cung: ['Huynh Đệ'],
    ketHop: ['Thiên Hình'],
    doUuTien: 70,
    tomTat: `Khi Hỏa Tinh cùng Thiên Hình tại Huynh Đệ, nguy cơ xảy ra sự cố
nghiêm trọng ảnh hưởng tới sức khỏe của anh chị em đương số gần như khó
tránh.`,
  },

  {
    id: 'hoa-tinh-tai-huynh-de-thien-viet',
    title: 'Hỏa Tinh + Thiên Việt tại Huynh Đệ',
    sao: ['Hỏa Tinh'],
    cung: ['Huynh Đệ'],
    ketHop: ['Thiên Việt'],
    doUuTien: 70,
    tomTat: `Khi Hỏa Tinh cùng Thiên Việt tại Huynh Đệ, nguy cơ xảy ra sự cố
nghiêm trọng ảnh hưởng tới sức khỏe của anh chị em đương số gần như khó
tránh.`,
  },
];
