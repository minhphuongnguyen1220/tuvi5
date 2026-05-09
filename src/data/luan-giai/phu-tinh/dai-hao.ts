import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO ĐẠI HAO - Hỏa, Bại Tinh, vòng Lộc Tồn (vị trí 10)
 * (Phần CHUNG Song Hao - Chúng Thủy Triều Đông - Cự Cơ Mão Dậu - các tổ hợp Tuyệt/
 * Đào Hồng/Phá Tuyệt/Kình Đà/Quan Phù... đã viết tại tieu-hao.ts)
 * (File này chỉ chứa phần RIÊNG của Đại Hao + 11 cung + tổ hợp riêng)
 */
export const luanGiai_DaiHao: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính riêng sao Đại Hao
  // ============================================================
  {
    id: 'dai-hao-tinh-chat-chung',
    title: 'Đại Hao - Đặc tính chung (Hao tán KHỐI LƯỢNG LỚN)',
    sao: ['Đại Hao'],
    doUuTien: 30,
    tomTat: `**Đại Hao** là bại tinh trong vòng Lộc Tồn, đứng ở vị trí thứ 10.
Ngũ hành Hỏa, hóa khí thuộc nhóm Hao Tinh - Bại Tinh, mang đặc tính hao tán,
tích tụ, thất thường nhưng luôn ở quy mô khối lượng lớn.

Đại Hao luôn đối cung với Tiểu Hao, tạo thành cách **Song Hao**. Khác biệt
giữa hai sao có thể tóm gọn:

- Quy mô: Đại Hao lớn, Tiểu Hao nhỏ
- Đầu tư: Đại Hao nghĩ lớn làm to, Tiểu Hao chỉ tiêu vặt tản mạn
- Bùng phát: Đại Hao dữ dội dồn dập, Tiểu Hao lai rai kéo dài

Vị trí miếu hãm:

- **Đắc** địa tại Dần, Thân, Mão, Dậu
- Hãm địa tại Tý, Sửu, Thìn, Tỵ, Ngọ, Mùi, Tuất, Hợi

Khi đắc địa, Đại Hao lên như diều gặp gió, bùng phát dữ dội theo hướng tốt.`,
  },

  // ============================================================
  // 2. Đại Hao tại Mệnh
  // ============================================================
  {
    id: 'dai-hao-tai-menh',
    title: 'Đại Hao tại Mệnh',
    sao: ['Đại Hao'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `Khi Đại Hao thủ Mệnh, đương số có dáng thấp bé, gầy yếu, hay ốm
đau, má hóp đít tóp. Tính khí sáng nắng chiều mưa, hay thay đổi chí hướng và
nghề nghiệp, không bền chí và chóng chán.

Điểm khác biệt rõ nhất so với Tiểu Hao là đặc trưng "quy mô lớn":

- Tiêu xài phung phí, tiêu pha những khoản tiền to
- Đầu tư lớn chứ không phải tiêu vặt như Tiểu Hao
- Hào phóng, nghĩ lớn làm to

Khi Đại Hao **Đắc** địa, đương số tiêu xài rộng rãi nhưng tiền ra rồi lại
vào, đồng tiền thâu xuất nhưng vẫn có lợi. Đương số thông minh lanh lợi, tuy
ham chơi nhưng có lúc rất ham học, muốn trông xa biết rộng. Một khi đã muốn
làm gì là nghĩ lớn làm to, ra ngô ra khoai cho bằng được.

Khi Đại Hao **Hãm** mà gặp Hóa Kỵ, Phá Quân hoặc sát tinh, đương số đam mê
cờ bạc rượu chè, dễ "cháy túi", lâm vào cảnh túng thiếu thất thường.

Về nghề nghiệp, đương số phù hợp với xuất nhập khẩu, vận tải, kinh doanh
lớn, đầu tư to — những nghề lưu động, ly hương lập nghiệp.`,
  },

  // ============================================================
  // 3. Đại Hao tại Phụ Mẫu
  // ============================================================
  {
    id: 'dai-hao-tai-phu-mau',
    title: 'Đại Hao tại Phụ Mẫu',
    sao: ['Đại Hao'],
    cung: ['Phụ Mẫu'],
    doUuTien: 70,
    tomTat: `Khi Đại Hao cư Phụ Mẫu, cha mẹ đương số phải tha hương cầu thực,
sống xa quê cha đất tổ, hay thay đổi nơi ở và nghề nghiệp. Khác biệt giữa
trạng thái Đắc và Hãm được tách thành luận giải riêng.`,
  },
  {
    id: 'dai-hao-tai-phu-mau-hinh-viet',
    title: 'Đại Hao tại Phụ Mẫu + Thiên Hình/Thiên Việt - Cha mẹ nghiêm khắc',
    sao: ['Đại Hao'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Thiên Hình', 'Thiên Việt'],
    doUuTien: 65,
    tomTat: `Khi Đại Hao cùng Thiên Hình hoặc Thiên Việt tại Phụ Mẫu, cha mẹ
đương số nghiêm khắc, giáo điều, "nói một là một", con cái khó lòng trái ý.`,
  },

  {
    id: 'dai-hao-tai-phu-mau-dac',
    title: 'Đại Hao tại Phụ Mẫu - Đắc địa kinh doanh lớn',
    sao: ['Đại Hao'],
    cung: ['Phụ Mẫu'],
    chi: ['Dần', 'Thân', 'Mão', 'Dậu'],
    trangThai: ['Đắc'],
    doUuTien: 65,
    tomTat: `Khi Đại Hao **Đắc** địa tại Phụ Mẫu (Dần, Thân, Mão, Dậu), cha mẹ
đương số kinh doanh lớn, đầu tư mạnh. Dòng tiền giữa con cái và cha mẹ lưu
thông liên tục, có thể cha mẹ hỗ trợ tài chính cho con hoặc ngược lại, quy
mô tài chính của gia đình ở mức lớn.`,
  },

  {
    id: 'dai-hao-tai-phu-mau-ham',
    title: 'Đại Hao tại Phụ Mẫu - Hãm địa cha mẹ vất vả',
    sao: ['Đại Hao'],
    cung: ['Phụ Mẫu'],
    trangThai: ['Hãm'],
    doUuTien: 65,
    tomTat: `Khi Đại Hao **Hãm** địa tại Phụ Mẫu, cha mẹ đương số gầy gò vất
vả, đồng tiền thất thường — kiếm được ít mà lúc mất thì mất cả cục to, đúng
đặc trưng quy mô lớn của Đại Hao.`,
  },

  // ============================================================
  // 4. Đại Hao tại Phúc Đức
  // ============================================================
  {
    id: 'dai-hao-tai-phuc-duc',
    title: 'Đại Hao tại Phúc Đức',
    sao: ['Đại Hao'],
    cung: ['Phúc Đức'],
    doUuTien: 72,
    tomTat: `Khi Đại Hao **Hãm** cư Phúc Đức, đương số tiêu hao phúc lộc tổ
tiên, may mắn của thế hệ trước để lại không còn nhiều. Họ hàng chia ly mỗi
người một phương, hiếm khi đoàn tụ; hao hớt mỗi người một nơi, lúc tìm về
thì chẳng còn ai.

Khi Đại Hao **Đắc** địa cư Phúc, đương số thừa hưởng phước đức tổ tiên, may
mắn về tiền của — biết dùng tiền làm phúc, gieo nhân lành gặt quả tốt, chăm
lo mồ mả và tu tạo phúc phần cho bản thân lẫn hậu thế.

Đặc trưng mộ phần ở cách này là xung quanh có dòng nước lớn (suối, sông) hoặc
mạch ngầm chảy qua — biểu tượng phúc khí lưu chuyển. Tốt xấu cụ thể tùy vào
trạng thái đắc hay hãm.`,
  },
  {
    id: 'dai-hao-tai-phuc-duc-dia-kiep',
    title: 'Đại Hao tại Phúc Đức + Địa Kiếp - Kiếm tiền bất chính',
    sao: ['Đại Hao'],
    cung: ['Phúc Đức'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 67,
    tomTat: `Khi Đại Hao gặp Địa Kiếp tại Phúc Đức, đương số càng cô độc vất
vả; kiếm tiền bằng con đường không chính nghĩa, vì thế mà tổn hao phước đức.`,
  },

  // ============================================================
  // 5. Đại Hao tại Điền Trạch
  // ============================================================
  {
    id: 'dai-hao-tai-dien-trach',
    title: 'Đại Hao tại Điền Trạch',
    sao: ['Đại Hao'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Khi Đại Hao **Hãm** cư Điền Trạch, đương số thất thoát của thiên
trả địa, tán nhiều tụ ít, khó giàu có — đặc biệt khi có thêm Địa Không, Địa
Kiếp. Đương số hay tính toán sai, gây thất hao tổn; nhà cửa so với giá trị
thực tế chênh lệch lớn.

Khi Đại Hao **Đắc** địa cư Điền, đương số kinh doanh bất động sản quy mô
lớn:

- Có nhà gần sông, mạch ngầm
- Tuy lên xuống nhưng cuối cùng vẫn có lãi, nhà ngày càng to hơn
- Có thể mở xưởng sản xuất chế tạo số lượng lớn

Khi cách **Song Hao** đi cùng Địa Không, Địa Kiếp đắc địa, điền sản của
đương số mua đi bán lại rất mau nhưng không bền, chỉ được một thời gian —
môi giới nhà đất kiểu "ăn xổi".`,
  },

  // ============================================================
  // 6. Đại Hao tại Quan Lộc
  // ============================================================
  {
    id: 'dai-hao-tai-quan-loc',
    title: 'Đại Hao tại Quan Lộc',
    sao: ['Đại Hao'],
    cung: ['Quan Lộc'],
    doUuTien: 75,
    tomTat: `Khi Đại Hao cư Quan Lộc, công việc của đương số mang tính lưu
động, hay thay đổi chỗ làm và nghề nghiệp.

Khác với Tiểu Hao, ở đây công việc bao giờ cũng có quy mô lớn và khối lượng
lớn:

- Đầu tư tầm cỡ
- Xuất nhập khẩu cho cả nước, cả thế giới
- Giao thương ở quy mô vĩ mô

Khi Đại Hao **Hãm** địa, công danh bị cản trở, sự nghiệp của đương số bị
chí hướng không bền kéo lại, trồi sụt khó ổn định lâu dài.`,
  },

  // ============================================================
  // 7. Đại Hao tại Nô Bộc
  // ============================================================
  {
    id: 'dai-hao-tai-no-boc',
    title: 'Đại Hao tại Nô Bộc',
    sao: ['Đại Hao'],
    cung: ['Nô Bộc'],
    doUuTien: 70,
    tomTat: `Khi Đại Hao cư Nô Bộc, đương số khó thuê mướn người làm, dễ bị
tôi tớ trộm cắp với số lượng lớn — khác với Tiểu Hao chỉ vặt vãnh.

Đương số đặt niềm tin và đầu tư nhiều vào bạn bè, mối quan hệ:

- Khi **Đắc** địa, được đáp lại tương xứng
- Khi **Hãm** địa, thất thoát hao tán không hợp lý

Cộng sự của đương số không ổn định, dễ bị đâm sau lưng. Bạn bè hao hụt, ít
ai chơi được lâu bền.`,
  },

  // ============================================================
  // 8. Đại Hao tại Thiên Di
  // ============================================================
  {
    id: 'dai-hao-tai-thien-di',
    title: 'Đại Hao tại Thiên Di',
    sao: ['Đại Hao'],
    cung: ['Thiên Di'],
    doUuTien: 70,
    tomTat: `Khi Đại Hao cư Thiên Di, đương số ra ngoài hay tốn tiền và tổn
hao nhiều với quy mô lớn. Đây là người tha hương lập nghiệp, sống xa nhà,
làm ăn nơi đất khách quê người và phải thay đổi chỗ ở nhiều lần.

Khi **Đắc** địa, đương số làm ăn xa gặp nhiều thuận lợi, biết cách dùng
tiền mở đường quan hệ, thực hiện những giao dịch tài chính lớn.`,
  },

  // ============================================================
  // 9. Đại Hao tại Tật Ách
  // ============================================================
  {
    id: 'dai-hao-tai-tat-ach',
    title: 'Đại Hao tại Tật Ách',
    sao: ['Đại Hao'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `Khi Đại Hao cư Tật Ách, đương số được đẩy lùi bệnh mãn tính.

Tuy nhiên đây là vị trí ngoại lệ: Đại Hao **Đắc** địa tại Tật lại không
tốt, vì tích tụ năng lượng lớn — khi yên thì rất yên ả, nhưng khi phát thì
dồn dập dữ dội, không kịp chống đỡ.

Bệnh thường gặp ở đường ruột, tiêu hóa, dạ dày và gan.`,
  },
  {
    id: 'dai-hao-tai-tat-ach-pha-sat-moc-duc-ky',
    title: 'Đại Hao tại Tật Ách + Phá/Sát/Mộc Dục/Hóa Kỵ - Ung nhọt mổ xẻ',
    sao: ['Đại Hao'],
    cung: ['Tật Ách'],
    ketHop: ['Phá Quân', 'Thất Sát', 'Mộc Dục', 'Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `Khi Đại Hao gặp Phá Quân, Thất Sát, Mộc Dục hoặc Hóa Kỵ tại Tật
Ách, đương số mắc các bệnh ung nhọt, ung thư phải mổ xẻ.`,
  },
  {
    id: 'dai-hao-tai-tat-ach-kinh-da-khong-kiep-ky',
    title: 'Đại Hao tại Tật Ách + Kình/Đà/Không Kiếp/Hóa Kỵ - Đam mê sinh bệnh',
    sao: ['Đại Hao'],
    cung: ['Tật Ách'],
    ketHop: ['Kình Dương', 'Đà La', 'Địa Không', 'Địa Kiếp', 'Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `Khi Đại Hao gặp Kình Dương, Đà La, Địa Không, Địa Kiếp hoặc Hóa
Kỵ tại Tật Ách, đương số dễ vì đam mê (cờ bạc, rượu chè) mà sinh bệnh.`,
  },

  // ============================================================
  // 10. Đại Hao tại Tài Bạch
  // ============================================================
  {
    id: 'dai-hao-tai-tai-bach',
    title: 'Đại Hao tại Tài Bạch',
    sao: ['Đại Hao'],
    cung: ['Tài Bạch'],
    doUuTien: 80,
    tomTat: `Khi Đại Hao **Hãm** cư Tài Bạch, đồng tiền của đương số tán tụ
thất thường — vào nhỏ giọt, ra thành dòng, có tiền là phải tiêu luôn, khó
mà tích trữ được.

Khi Đại Hao **Đắc** địa cư Tài, đồng tiền ra vào liên tục với số lượng lớn,
tạo ra nhiều của cải hơn:

- Kiếm ra đồng nào lại đem đầu tư
- Lãi mẹ đẻ lãi con
- Ở tầng lớp kinh doanh, buôn bán lớn
- Cách cục vô cùng giàu có

Lưu ý: Đại Hao **Hãm** rất kỵ ở Tài, Điền và Phúc — ba cung này có Đại Hao
Hãm là xấu nhất.`,
  },
  {
    id: 'dai-hao-tai-tai-bach-dao-hong',
    title: 'Đại Hao tại Tài Bạch + Đào Hồng - Tốn tiền tình nhân',
    sao: ['Đại Hao'],
    cung: ['Tài Bạch'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 75,
    tomTat: `Khi Đại Hao gặp Đào Hoa hoặc Hồng Loan tại Tài Bạch, đương số
tốn nhiều tiền cho tình nhân và việc làm đẹp.`,
  },
  {
    id: 'dai-hao-tai-tai-bach-pha-tuyet',
    title: 'Đại Hao tại Tài Bạch + Phá/Tuyệt - Đầu tư phá sản',
    sao: ['Đại Hao'],
    cung: ['Tài Bạch'],
    ketHop: ['Phá Quân', 'Tuyệt'],
    doUuTien: 75,
    tomTat: `Khi Đại Hao gặp Phá Quân hoặc Tuyệt tại Tài Bạch, đương số dễ
đầu tư lớn, chơi lớn rồi phá sản.`,
  },
  {
    id: 'dai-hao-tai-tai-bach-kinh-da-khong-kiep',
    title: 'Đại Hao tại Tài Bạch + Kình/Đà/Không/Kiếp - Phá sản',
    sao: ['Đại Hao'],
    cung: ['Tài Bạch'],
    ketHop: ['Kình Dương', 'Đà La', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 75,
    tomTat: `Khi Đại Hao gặp Kình Dương, Đà La, Địa Không hoặc Địa Kiếp tại
Tài Bạch, đương số đối diện với khả năng phá sản.`,
  },

  // ============================================================
  // 11. Đại Hao tại Tử Tức
  // ============================================================
  {
    id: 'dai-hao-tai-tu-tuc',
    title: 'Đại Hao tại Tử Tức',
    sao: ['Đại Hao'],
    cung: ['Tử Tức'],
    doUuTien: 70,
    tomTat: `Khi Đại Hao **Hãm** cư Tử Tức, số lượng con cái của đương số
giảm đi — sinh nhiều nhưng nuôi ít. Con cái không ở gần cha mẹ, sống tự
lập từ sớm.

Tính chất ở đây mạnh mẽ hơn Tiểu Hao: với quy mô lớn của Đại Hao, con cái
làm hao tán tiền của cha mẹ ở mức nặng hơn.

Khi **Đắc** địa, đầu tư cho con cái có hiệu quả; con cái thông minh và ham
học.`,
  },

  // ============================================================
  // 12. Đại Hao tại Phu Thê
  // ============================================================
  {
    id: 'dai-hao-tai-phu-the',
    title: 'Đại Hao tại Phu Thê',
    sao: ['Đại Hao'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `Đại Hao không ưa cư Phu Thê — sao này làm giảm nhân duyên vợ
chồng, đôi bên dễ xa quê cách quán.

Khi Đại Hao **Hãm**, người hôn phối hoang tàn phá của, gây chia ly; bạn đời
tiêu xài phung phí, tổn thất tài chính lớn.

Khi Đại Hao **Đắc** địa cùng cát tinh, đương số tháo vát, biết quan tâm và
chiều chuộng bạn đời.`,
  },
  {
    id: 'dai-hao-tai-phu-the-da-hinh-rieu',
    title: 'Đại Hao tại Phu Thê + Đà La/Thiên Hình/Thiên Riêu - Phong lưu',
    sao: ['Đại Hao'],
    cung: ['Phu Thê'],
    ketHop: ['Đà La', 'Thiên Hình', 'Thiên Riêu'],
    doUuTien: 70,
    tomTat: `Khi Đại Hao gặp Đà La, Thiên Hình hoặc Thiên Riêu tại Phu Thê,
người hôn phối phong lưu thái trượng, tài tử và phá tán; cảnh "ông ăn chả
bà ăn nem" khó tránh.`,
  },

  {
    id: 'dai-hao-phu-the-dac-dao-hong-menh',
    title: 'Đại Hao đắc tại Phu Thê + Đào Hồng hội chiếu - nhiều vợ thê thiếp',
    sao: ['Đại Hao'],
    cung: ['Phu Thê'],
    trangThai: ['Đắc'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 65,
    tomTat: `Khi Đại Hao **Đắc** địa tại Phu Thê có thêm Đào Hoa, Hồng Loan
hội chiếu cung gốc, đương số dễ nhiều vợ và thê thiếp, có nhiều mối quan hệ
tình cảm cùng lúc.

Khác với Tiểu Hao kiểu "mỗi ngày một bà", Đại Hao mạnh hơn ở quy mô lớn:
duyên đa, nhân tình nhân ngãi nhiều cùng lúc.`,
  },

  // ============================================================
  // 13. Đại Hao tại Huynh Đệ
  // ============================================================
  {
    id: 'dai-hao-tai-huynh-de',
    title: 'Đại Hao tại Huynh Đệ',
    sao: ['Đại Hao'],
    cung: ['Huynh Đệ'],
    doUuTien: 70,
    tomTat: `Khi Đại Hao cư Huynh Đệ, số lượng anh chị em của đương số giảm
đi. Anh em ly tán, mỗi người một chí hướng và dễ mâu thuẫn với nhau vì tiền.

Khi Đại Hao **Đắc** địa, anh em có người giỏi làm ăn kinh tế, giàu có khá
giả và biết giúp đỡ nhau về sau.`,
  },
  {
    id: 'dai-hao-tai-huynh-de-sat-bai',
    title: 'Đại Hao tại Huynh Đệ + Sát bại tinh - Anh em chết trẻ',
    sao: ['Đại Hao'],
    cung: ['Huynh Đệ'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp', 'Hóa Kỵ', 'Tiểu Hao'],
    doUuTien: 65,
    tomTat: `Khi Đại Hao gặp các sát bại tinh (Kình Dương, Đà La, Hỏa Tinh,
Linh Tinh, Địa Không, Địa Kiếp, Hóa Kỵ, Tiểu Hao) tại Huynh Đệ, anh em đương
số dễ có người chết trẻ, khó thọ, hoặc mất mát sa sảy ngay từ trong bụng mẹ.`,
  },

  // ============================================================
  // 14. Đại Hao + Tham Lang - hiếu sắc kín đáo (RIÊNG ĐẠI HAO)
  // ============================================================
  {
    id: 'dai-hao-tham-lang',
    title: 'Đại Hao + Tham Lang - Hiếu sắc, dâm dật KÍN ĐÁO',
    sao: ['Đại Hao'],
    ketHop: ['Tham Lang'],
    doUuTien: 60,
    tomTat: `Khi Đại Hao đồng cung hoặc xung chiếu Tham Lang (đặc trưng riêng
của Đại Hao), đương số hiếu sắc, dâm dật nhưng rất kín đáo. Đương số ham mê
tình ái mà không bộc lộ ra ngoài, đam mê âm thầm và giữ kín sự việc một
cách kỹ càng — khác với Tiểu Hao có thể lộ liễu, Đại Hao quy mô lớn lại biết
cách che đậy.

Cách cục này thường tiềm ẩn rắc rối tình ái sâu xa, khó phát hiện sớm; khi
vỡ lở thì hậu quả lớn.`,
  },

  // ============================================================
  // 15. Đại Hao + Hóa Kỵ - vất vả túng thiếu (RIÊNG ĐẠI HAO)
  // ============================================================
  {
    id: 'dai-hao-hoa-ky',
    title: 'Đại Hao + Hóa Kỵ - Vất vả, túng thiếu',
    sao: ['Đại Hao'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 60,
    tomTat: `Khi Đại Hao đi cùng **Hóa Kỵ**, đương số vất vả và túng thiếu.
Hai sao đều mang tính trở ngại và hao tổn, kết hợp lại thành cách: lao động
cực nhọc nhưng kiếm được không tương xứng, tiền ra nhiều mà vào ít, cuộc
sống nghèo khó kéo dài.`,
  },

  // ============================================================
  // 16. Đại Hao + Hỏa Linh - nghiện + ngang bướng bảo thủ (riêng Đại)
  // ============================================================
  {
    id: 'dai-hao-hoa-linh',
    title: 'Đại Hao + Hỏa Linh - Nghiện + Ngang bướng bảo thủ',
    sao: ['Đại Hao'],
    ketHop: ['Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 60,
    tomTat: `Khi Đại Hao đi cùng Hỏa Tinh hoặc Linh Tinh (riêng Đại Hao có
thêm tính ngang bướng bảo thủ), đương số dễ bị nghiện rượu chè, cờ bạc, ăn
chơi trác táng; tính tình ngang bướng và bảo thủ — đặc trưng riêng so với
Tiểu Hao.

Hỏa Tinh và Linh Tinh chủ về bốc đồng nóng nảy, kết hợp với Đại Hao khiến
đương số dễ lao vào cám dỗ trần tục, biến thành nghiện ngập, ảnh hưởng tới
sức khỏe và làm tiêu tan sự nghiệp gia đình.`,
  },

  // ============================================================
  // 17. Song Hao + Linh Hỏa + Cơ + Riêu - căn đồng số lính
  // ============================================================
  {
    id: 'song-hao-linh-hoa-co-rieu-can-dong',
    title: 'Song Hao + Linh Hỏa + Thiên Cơ + Thiên Riêu - Căn đồng số lính',
    sao: ['Đại Hao', 'Tiểu Hao'],
    ketHop: ['Linh Tinh', 'Hỏa Tinh', 'Thiên Cơ', 'Thiên Riêu'],
    doUuTien: 65,
    tomTat: `Khi cách **Song Hao** đi cùng Linh Tinh, Hỏa Tinh, Thiên Cơ và
Thiên Riêu, đương số mang căn đồng số lính, dễ bị "cơ đầy". Đây là người có
duyên với tâm linh và đồng cốt — bị các vong hoặc căn quả đeo bám, hoặc có
khả năng làm đồng cốt thầy bà.

Nếu không tu tập đúng cách, đương số dễ lạc vào tà đạo hoặc mắc bệnh tâm
thần.`,
  },

  // ============================================================
  // 18. Đại Hao vào hạn
  // ============================================================
  {
    id: 'dai-hao-vao-han',
    title: 'Đại Hao vào hạn',
    sao: ['Đại Hao'],
    doUuTien: 50,
    tomTat: `Hạn có Đại Hao chủ về hao tài tốn của ở quy mô lớn. Nếu không
phải vì tang khó hay bệnh tật, đương số bị mất trộm số lượng lớn, hoặc chi
tiêu lớn vì ốm đau, tai nạn, sửa sang nhà cửa, mua sắm.

Khi **Đắc** địa, hạn lại mở ra vận hoạch tài: cơ hội mở rộng làm ăn, chớp
được vận may, có thể trúng thưởng, được cho hoặc được thừa kế, và đầu tư
vào chỗ khác sinh lợi.

Hạn này cũng thường mang đến những thay đổi lớn:

- Chuyển nhà, đi công tác xa
- Xuất ngoại, định cư ở nước ngoài
- Thay đổi môi trường sống

Nếu đang ốm đau, bệnh tình của đương số thuyên giảm nhanh chóng, sức khỏe
hồi phục.`,
  },

  // ============================================================
  // 19. Lời khuyên giải trừ tác hại Đại Hao
  // ============================================================
  {
    id: 'dai-hao-giai-tru',
    title: 'Lời khuyên giải trừ tác hại Đại Hao',
    sao: ['Đại Hao'],
    doUuTien: 70,
    tomTat: `Để hóa giải Đại Hao, nguyên tắc chung là chuyển "hao tán" thành
"hao mà sinh lợi", hoặc "hao nhỏ để tránh hao nặng hơn".

Hao chủ động để tránh hao bị động:

- Mua tài sản (bất động sản, vàng, đầu tư có kế hoạch)
- Hao để từ thiện, giúp người, tích phúc đức
- Hao để đầu tư vào bản thân (học hành, kỹ năng)
- Mua bảo hiểm
- Chủ động đi khám và chữa bệnh để tránh rủi ro bất ngờ

Tận dụng tính lưu động của Đại Hao:

- Đi du lịch cùng người thân để làm mới mình
- Học hỏi lĩnh vực mới — hao sức nhưng phát triển bản thân

Quản lý tài chính chặt chẽ:

- Tránh vay mượn, tránh đầu tư mạo hiểm
- Tuyệt đối tránh cờ bạc, cá độ và những thú vui không lành mạnh
- Lập kế hoạch chi tiêu rõ ràng, có quỹ dự phòng`,
  },
];
