import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THAI - Thổ.
 *
 * Vị trí THỨ 11 trong Vòng Trường Sinh 12 sao:
 * Trường Sinh: Mộc Dục: Quan Đới: Lâm Quan: Đế Vượng: Suy
 * Bệnh: Tử: Mộ: Tuyệt: THAI: Dưỡng
 *
 * An theo CỤC.
 *
 * Đặc trưng:
 * - Sau "Tuyệt" tan biến hết: "Thai" là MẦM SỐNG MỚI BẮT ĐẦU XUẤT HIỆN
 * - Chuẩn bị cho 1 chu kỳ mới, một cuộc sống mới
 * - Giai đoạn SƠ SINH - bào thai trong bụng mẹ - YẾU ỚT cần được bảo vệ
 * - Đại diện cho MẢNH ĐẤT YẾU ỚT chưa định hình
 * - Nhiều lựa chọn nhưng CHƯA HOÀN TOÀN CỐ ĐỊNH
 * - Phụ thuộc HOÀN TOÀN vào yếu tố bên ngoài
 *
 * 4 bộ phận cơ thể liên kết: RỐN, ÂM HỘ, CỔ TỬ CUNG, BÀO THAI.
 * Đặc biệt ảnh hưởng phụ nữ - sinh lý + sinh sản.
 *
 * Câu phú: "Thai lâm Mệnh vi đa học thiểu thành" - học nhiều mà ít thành.
 *
 * KHÁC Thiên Riêu:
 * - Thiên Riêu = tình yêu mê muội về CẢM XÚC
 * - Thai = ham muốn THỂ XÁC, sa đọa nặng hơn
 */
export const luanGiai_Thai: DoanLuanGiai[] = [
  {
    id: 'thai-tinh-chat-chung',
    title: 'Thai - Đặc tính chung',
    sao: ['Thai'],
    doUuTien: 33,
    tomTat: `**Thai** thuộc vòng Trường Sinh, đứng ở vị trí thứ 11 — một dâm
tinh kiêm tái sinh tinh, ngũ hành Thổ. Sao mang khí phong lưu khoái lạc, sắc
dục u mê, đồng thời chủ về sinh nở và tái sinh thêm mới. Đương số có Thai tọa
thủ thường thiếu tự tin, dễ bị lừa gạt; sao này còn chủ chuyện thụ thai và
sinh nở của con người.

Về vai trò trong vòng Trường Sinh, sau giai đoạn Tuyệt tan biến hết thì Thai
là mầm sống mới bắt đầu xuất hiện, chuẩn bị cho một chu kỳ mới. Đây là giai
đoạn sơ sinh — bào thai còn trong bụng mẹ, yếu ớt cần được bảo vệ, đại diện
cho mảnh đất yếu ớt chưa định hình và phụ thuộc hoàn toàn vào yếu tố bên
ngoài.

Trên cơ thể, Thai liên kết với bốn bộ phận: rốn, âm hộ, cổ tử cung và bào
thai. Đây là những bộ phận sinh sản gắn kết với phụ nữ nhiều nhất, song cũng
mang ý nghĩa với sinh lý của cả hai giới.

So với Thiên Riêu, Thai và Thiên Riêu đều là dâm tinh nhưng khác về sắc thái:

- Thiên Riêu thiên về tình yêu mê muội ở mặt cảm xúc.
- Thai thiên về ham muốn thể xác, sa đọa nặng hơn.

Cảnh báo: khi sao Thai gặp Tuần Triệt án ngữ hoặc nhiều sát bại tinh hội tụ,
con sinh ra dễ thiếu tháng, sinh khó, ốm yếu quặt quẹo.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP TÍNH ÁI
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thai-dao-hong-dam-vat-chat-tinh-than',
    title: 'Thai + Đào Hoa / Hồng Loan - Ham ái tình vật chất + tinh thần',
    sao: ['Thai'],
    ketHop: ['Đào Hoa', 'Hồng Loan'],
    doUuTien: 60,
    tomTat: `Khi Thai gặp Đào Hoa hoặc Hồng Loan, đương số ham thích ái tình
cả về vật chất lẫn tinh thần. Chủ mệnh thường coi thường đạo lý, lấy việc
yêu, cho và hưởng làm lạc thú ở đời.

Hệ quả là đời sống tình cảm phóng túng, ham mê thú vui xác thịt, dễ rơi vào
mối quan hệ ngoài luồng.`,
  },

  {
    id: 'thai-xuong-khuc-lang-man-dam-dat',
    title: 'Thai + Xương Khúc - Lãng mạn dâm dật',
    sao: ['Thai'],
    ketHop: ['Văn Xương', 'Văn Khúc'],
    doUuTien: 55,
    tomTat: `Khi Thai đi cùng Văn Xương và Văn Khúc, đương số là người ưa
lãng mạn bay bổng, mang sẵn tính dâm dật và dục tính cao. Văn chương cũng
ướt át, thường viết về tình ái và dục vọng.`,
  },

  {
    id: 'thai-rieu-dam-dat-benh-hoan',
    title: 'Thai + Thiên Riêu - Dâm dật bệnh hoạn',
    sao: ['Thai'],
    ketHop: ['Thiên Riêu'],
    doUuTien: 60,
    tomTat: `Khi Thai gặp Thiên Riêu, đương số mang tính dâm dật mạnh, sinh
lý cao và dễ dẫn đến bệnh hoạn. Bộ Thai-Riêu là hai dâm tinh cùng bộ phận
sinh dục cộng hưởng, nên hệ quả thường thấy là phong tình bệnh hoa liễu, các
quan hệ phóng túng kéo theo bệnh tình dục.`,
  },

  {
    id: 'thai-khong-kiep-bi-cuong-buc',
    title: 'Thai + Không Kiếp - Bị cưỡng bức, hoang thai',
    sao: ['Thai'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 60,
    tomTat: `Khi Thai gặp Địa Không và Địa Kiếp, đương số có nguy cơ bị
hiếp dâm dẫn đến hoang thai, dễ rơi vào cảnh phá thai, sẩy thai hay hư
thai. Đây cũng là trường hợp ứng vào sự bạo dâm.

Các trường hợp chuyên biệt cho cung Tử Tức và nữ mệnh được tách thành luận
giải riêng.`,
  },

  {
    id: 'thai-khong-kiep-bi-cuong-buc-nu',
    title: 'Thai + Không Kiếp - Nữ mệnh đặc biệt nguy hiểm',
    sao: ['Thai'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    gioiTinh: 'Nữ',
    doUuTien: 55,
    tomTat: `Với nữ mệnh, bộ Thai cùng Địa Không và Địa Kiếp đặc biệt nguy
hiểm: đương số đối mặt với nguy cơ bị hiếp dâm dẫn đến hoang thai, hoặc tự
nguyện trong quan hệ rồi bị bỏ rơi.`,
  },

  {
    id: 'thai-khong-kiep-tai-tu-tuc',
    title: 'Thai + Không Kiếp tại Tử Tức - Trụy thai, sát con',
    sao: ['Thai'],
    cung: ['Tử Tức'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Khi Thai cùng Địa Không và Địa Kiếp tọa thủ Tử Tức, đương số bất
lợi trong quá trình mang thai: dễ trụy thai, sẩy thai và sinh nở khó khăn.
Con thường chết trong quá trình sinh nở, hoặc rơi vào cảnh sát con.`,
  },

  {
    id: 'thai-phuc-vuong-tuong-luoi-tinh',
    title: 'Thai + Phục + Vượng + Tướng - Lưới tình đau khổ',
    sao: ['Thai'],
    ketHop: ['Phục Binh', 'Đế Vượng', 'Thiên Tướng'],
    doUuTien: 60,
    tomTat: `Khi Thai hội đủ Phục Binh, Đế Vượng và Thiên Tướng, đương số
vướng vào lưới tình đau khổ — là người thất tiết, từng bị cưỡng bức hoặc có
tư thông, tức quan hệ vụng trộm.

Các trường hợp chuyên biệt cho từng cung Phu Thê và Huynh Đệ được tách
thành luận giải riêng.`,
  },

  {
    id: 'thai-phuc-vuong-tuong-tai-phu-the',
    title: 'Thai + Phục + Vượng + Tướng tại Phu Thê - Có con trước hôn nhân',
    sao: ['Thai'],
    cung: ['Phu Thê'],
    ketHop: ['Phục Binh', 'Đế Vượng', 'Thiên Tướng'],
    doUuTien: 70,
    tomTat: `Khi bộ Thai cùng Phục Binh, Đế Vượng và Thiên Tướng tọa thủ Phu
Thê, đương số dễ có con trước hôn nhân, hoặc có con riêng rồi mới lấy nhau,
con cái mang tật bẩm sinh.`,
  },

  {
    id: 'thai-phuc-vuong-tuong-tai-huynh-de',
    title: 'Thai + Phục + Vượng + Tướng tại Huynh Đệ - Anh chị em dị bào',
    sao: ['Thai'],
    cung: ['Huynh Đệ'],
    ketHop: ['Phục Binh', 'Đế Vượng', 'Thiên Tướng'],
    doUuTien: 70,
    tomTat: `Khi bộ Thai cùng Phục Binh, Đế Vượng và Thiên Tướng tọa thủ
Huynh Đệ, đương số có anh chị em dị bào, hư hỏng, dễ gặp các vấn đề tai nạn
trinh tiết.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC BỘ KẾT HỢP TỐT
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thai-moc-duc-long-phuong-tin-vui',
    title: 'Thai + Mộc Dục + Long Phượng - Tin vui sinh nở',
    sao: ['Thai'],
    ketHop: ['Mộc Dục', 'Long Trì', 'Phượng Các'],
    doUuTien: 55,
    tomTat: `Khi Thai gặp Mộc Dục cùng Long Trì và Phượng Các, đương số gặp
hạn sinh đẻ và có tin vui — thêm thành viên mới trong gia đình, phúc khí
hưng vượng.

Cảnh báo: nếu sao Thai gặp Địa Kiếp, đương số sinh con khó hoặc thai có dị
tật bẩm sinh.`,
  },

  {
    id: 'thai-thanh-long-thien-hy-con-quy-tu',
    title: 'Thai + Thanh Long + Thiên Hỷ - Con quý tử',
    sao: ['Thai'],
    ketHop: ['Thanh Long', 'Thiên Hỷ'],
    doUuTien: 60,
    tomTat: `Khi Thai đi cùng Thanh Long và Thiên Hỷ, đương số mang thai sinh
ra con đẹp và tốt lành. Quá trình sinh nở thuận lợi, mẹ tròn con vuông; gia
đình yên ấm, hỷ sự nối tiếp hỷ sự. Đây là điềm đại cát cho việc con cái.`,
  },

  {
    id: 'thai-nguyet-duc-cau-tu',
    title: 'Thai + Nguyệt Đức tại Tử Tức - Con cầu tự',
    sao: ['Thai'],
    cung: ['Tử Tức'],
    ketHop: ['Nguyệt Đức'],
    doUuTien: 55,
    tomTat: `Khi Thai cùng Nguyệt Đức tọa thủ Tử Tức, đương số phải thành
tâm cầu tự mới mong sinh được quý tử — khó có con tự nhiên, cần đến chùa
khấn nguyện và làm phúc tích đức.`,
  },

  {
    id: 'thai-nhat-nguyet-sinh-doi',
    title: 'Thai + Nhật Nguyệt - Sinh đôi, con dị bào',
    sao: ['Thai'],
    ketHop: ['Thái Dương', 'Thái Âm'],
    doUuTien: 55,
    tomTat: `Khi Thai gặp Thái Dương cùng Thái Âm, đương số có con sinh đôi,
hoặc con dị bào — cùng cha khác mẹ, hoặc cùng mẹ khác cha. Bộ Nhật Nguyệt
cộng Thai mang ý mang thai đôi.`,
  },

  {
    id: 'thai-co-qua-giam-con',
    title: 'Thai + Cô Thần + Quả Tú - Giảm số lượng con',
    sao: ['Thai'],
    ketHop: ['Cô Thần', 'Quả Tú'],
    doUuTien: 55,
    tomTat: `Khi Thai gặp Cô Thần và Quả Tú, số lượng con cái của đương số
giảm đi rõ rệt. Cô Thần Quả Tú là cặp ám tinh chế giảm sinh nở, nên Thai
cộng Cô Quả thành ít con, muộn con. Tình trạng đặc biệt nặng với đương số
đã có sẵn Cô Thần Quả Tú ở vị trí khác.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // THAI TẠI 12 CUNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thai-tai-menh',
    title: 'Thai tại Mệnh',
    sao: ['Thai'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Khi Thai thủ Mệnh, đương số có nhu cầu sinh lý và tình dục cao,
ham mê sắc dục.

Về cơ thể, Thai liên kết với rốn, âm hộ, cổ tử cung và bào thai, đồng thời
mang ý nghĩa về vấn đề sinh lý của cả hai giới chứ không riêng nữ.

Về tính tình, đương số ham mê các thú vui, nhẹ dạ dễ tin người và dễ bị
lôi kéo. Tính cách không quyết đoán, đam mê sắc dục, vì thế khó làm nên
công danh, thi cử khó đỗ đạt. Sao này đại diện cho nhu cầu sinh lý cao,
chủ về giao hợp xác thịt giữa nam và nữ; chủ mệnh thường ham mê sắc dục,
mê gái mê trai.

Về tình yêu, đương số không tìm kiếm tình yêu đích thực đúng nghĩa hòa hợp
tâm hồn mà chỉ chú trọng thỏa mãn nhu cầu sinh lý, dâm dật, thấp hèn, đồng
thời phải thỏa mãn cả khía cạnh vật chất. Khi nhu cầu sinh lý quá cao, cả
thể chất lẫn tâm hồn đều bị ảnh hưởng. So với Thiên Riêu, Thai nặng về sự
sa đọa nhiều hơn.

Về câu phú "Thai lâm Mệnh vi đa học thiểu thành", đương số hay lưỡng lự,
cả thèm chóng chán; cái gì cũng muốn học nhưng không kiên trì, dễ thay đổi
khi có cái mới hay hơn xuất hiện và hay bỏ ngang giữa chừng. Việc học nhiều
nhưng kết quả không trọn vẹn; sự nghiệp công dã tràng, làm nhiều mà ít nên
chuyện.`,
  },

  {
    id: 'thai-tai-phu-mau',
    title: 'Thai tại Phụ Mẫu',
    sao: ['Thai'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Khi Thai cư Phụ Mẫu, bố mẹ của đương số mang tính cách không
kiên định, dễ tin người và dễ bị người khác lừa. Đương số mang số có con
trước hôn nhân. Bố mẹ sống thiên về cảm xúc, hay mềm lòng cả tin và quyết
định theo cảm tính.

Hội thêm Đào Hoa, Hồng Loan, Thiên Hình, Thiên Riêu, Địa Không, Địa Kiếp
hoặc Hóa Kỵ, bố mẹ có tính đào hoa lăng nhăng, dễ có mối quan hệ ngoài
luồng, dễ ly tán và có người thứ ba chen ngang.`,
  },

  {
    id: 'thai-tai-phuc-duc',
    title: 'Thai tại Phúc Đức',
    sao: ['Thai'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `Khi Thai cư Phúc Đức, phúc phần của đương số chưa phát, gốc rễ
tổ tiên chưa vững. Phúc phần và mồ mả tổ tiên chưa được khai phát, đương số
cần chú trọng chăm sóc quan tâm đến mồ mả, làm việc thiện nhiều để tích
phước đức. Trong gia tộc thường có người chửa hoang, có con rơi bên ngoài.

Lời khuyên: con cháu trong tộc cần chuyên tâm tích đức, chăm lo hương khói
và mồ mả tổ tiên cẩn thận để giữ vận khí, bồi đắp phúc phần.

Khi hội thêm Địa Không, Địa Kiếp, Hóa Kỵ hoặc Thiên Riêu, dòng họ dễ vướng
thị phi, gia đạo lục đục, thiếu sự hòa thuận.`,
  },

  {
    id: 'thai-tai-dien-trach',
    title: 'Thai tại Điền Trạch',
    sao: ['Thai'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Khi Thai cư Điền Trạch, nơi ở của đương số thường mang tính
tái định cư, hay thay đổi. Nơi ở thường là các khu tái định cư hoặc đất
nghĩa trang nghĩa địa được xây dựng lên; gần nhà thường có tụ điểm ăn chơi
hoặc gần bệnh viện phụ sản. Tính cách dễ thay đổi và lưỡng lự khiến đương
số thường xuyên phải đổi nhà ở, đổi cơ quan làm việc, bất ổn trong chuyện
nhà cửa và đất đai.

Khi có cát tinh nâng đỡ, đương số vẫn có cơ hội tích lũy đất đai có giá
trị. Ngược lại nếu sát tinh hội tụ, cần đề phòng tranh chấp, gặp phong
thủy bất lợi, không thể yên ổn dài lâu.`,
  },

  {
    id: 'thai-tai-quan-loc',
    title: 'Thai tại Quan Lộc',
    sao: ['Thai'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `Khi Thai cư Quan Lộc, con đường công danh của đương số giảm đà
tiến thân, hay lưỡng lự và khó đưa ra quyết định khi có nhiều cơ hội đến.
Cách sống "đứng núi này trông núi nọ" khiến chủ mệnh thấy gì cũng muốn thử
nhưng nhanh nản; làm nhiều cũng khó bền, dậm chân tại chỗ.

Hội thêm các sao phúc thiện như Quang Quý, Thiên Phúc, Thiên Đức, đương
số có số làm việc liên quan đến sinh nở: bác sĩ phụ sản, hộ sinh, bà đỡ.

Hội nhiều sát bại tinh, đương số dễ liên quan đến mặt trái xã hội, có
mối tình cảm ngoài luồng, sự nghiệp dễ vướng tai tiếng.`,
  },

  {
    id: 'thai-tai-no-boc',
    title: 'Thai tại Nô Bộc',
    sao: ['Thai'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Khi Thai cư Nô Bộc, đương số hay thay đổi bạn bè, tình bạn
không thân thiết bền lâu. Đương số có đông anh chị em, là những người khá
giả, có địa vị tài chính tốt và tốt tính. Tính tình dễ kết giao nhưng khó
gắn bó sâu sắc, dễ nảy sinh hiểu lầm hoặc rạn nứt.

Hội Đào Hoa, Thiên Riêu, Hóa Kỵ, Địa Không hoặc Địa Kiếp, đương số dễ
rơi vào tình trạng ngoại tình sau khi kết hôn, mối quan hệ chuyển biến
tiêu cực.`,
  },

  {
    id: 'thai-tai-thien-di',
    title: 'Thai tại Thiên Di',
    sao: ['Thai'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `Khi Thai cư Thiên Di, đương số dễ vướng vào tình một đêm và
các mối quan hệ ngắn hạn. Chủ mệnh dễ rơi vào, cuốn vào những mối quan
hệ tình dục ngắn hạn.

Khi bản thân có Đế Vượng tọa thủ, đương số mang ngoại hình xinh đẹp hấp
dẫn, thân hình đẫy đà, ra ngoài có nhiều người thích, có sức hút mạnh và
dễ dính vào tình ái sắc dục.

Cảnh báo: những chuyện ái tình thể xác hoặc các mối quan hệ không trong
sạch có thể nảy sinh bất cứ lúc nào.`,
  },

  {
    id: 'thai-tai-tat-ach',
    title: 'Thai tại Tật Ách',
    sao: ['Thai'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `Khi Thai cư Tật Ách, đương số dễ mắc các bệnh liên quan đến
đường sinh dục, sinh đẻ khó khăn và sinh con ra có dị tật. Vấn đề sức
khỏe sinh sản đặc biệt nặng ở phái nữ — khó thụ thai, dễ sảy thai hoặc
thai yếu.

Khi đồng cung Địa Không, Địa Kiếp hoặc Hóa Kỵ, đương số dễ bị bệnh
buồng trứng và tử cung, rối loạn nội tiết, ảnh hưởng khả năng sinh sản
lâu dài.

Mặt nhẹ, đương số hay bị ốm vặt nhưng mau khỏi.`,
  },

  {
    id: 'thai-tai-tai-bach',
    title: 'Thai tại Tài Bạch',
    sao: ['Thai'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `Khi Thai cư Tài Bạch, tài chính của đương số không ổn định,
công việc thường thay đổi, tiền đến rồi lại đi và khó tích lũy lâu dài.

Hội Đào Hoa, Thiên Riêu, Hóa Kỵ, Địa Không hoặc Địa Kiếp, đương số dễ
mang tiền tiêu xài cho nhu cầu giải trí và thỏa mãn sắc dục, thậm chí
dùng thân xác để kiếm tiền.

Lời khuyên: đương số cần biết giữ mình trước cám dỗ, tránh vì phút nông
nổi mà đánh đổi sự ổn định lâu dài.`,
  },

  {
    id: 'thai-tai-tu-tuc',
    title: 'Thai tại Tử Tức',
    sao: ['Thai'],
    cung: ['Tử Tức'],
    doUuTien: 78,
    tomTat: `Khi Thai cư Tử Tức, đương số đối mặt với nhiều thử thách về
sinh sản và nuôi dưỡng con cái. Các bộ kết hợp tại cung này:

- Thai cùng Địa Không và Địa Kiếp: bất lợi mang thai, trụy thai, sẩy
  thai, sinh nở khó khăn; con thường chết trong sinh nở hoặc lâm cảnh
  sát con.
- Thai cùng Nguyệt Đức: con cầu tự mới có.
- Thai cùng Thái Dương và Thái Âm: có con sinh đôi hoặc con dị bào.
- Thai cùng Cô Thần và Quả Tú: giảm số lượng con cái.
- Thai cùng Phục Binh, Đế Vượng và Thiên Tướng: có con riêng rồi mới
  lập gia đình, có con dị bào.`,
  },

  {
    id: 'thai-tai-phu-the',
    title: 'Thai tại Phu Thê',
    sao: ['Thai'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `Khi Thai cư Phu Thê, người hôn phối của đương số là kẻ phong
lưu tài tử, thích vui chơi văn nghệ và thích tụ tập. Bạn đời dễ bị cuốn
theo thú vui tiệc tùng hoặc các mối quan hệ ngoài xã hội.

Các bộ kết hợp tại cung này:

- Thai cùng Đào Hoa và Thiên Riêu: tiền dâm hậu thú, xu hướng hưởng thụ
  tình dục, ăn nằm với nhau rồi mới cưới, vợ chồng lẳng lơ và ngoại tình.
- Thai cùng Phục Binh, Đế Vượng và Thiên Tướng: đương số dễ có con trước
  hôn nhân, có con riêng rồi mới lấy nhau, con cái mang tật bẩm sinh.

Mặt trái là nguy cơ ngoại tình và hôn nhân đổ vỡ nếu thiếu bao dung và
cam kết.`,
  },

  {
    id: 'thai-tai-huynh-de',
    title: 'Thai tại Huynh Đệ',
    sao: ['Thai'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Khi Thai cư Huynh Đệ, đương số có anh chị em sinh đôi, anh chị
em nuôi hoặc anh chị em dị bào. Mối quan hệ gia đình có phần phức tạp; dễ
gặp tình huống có con riêng từ mối quan hệ trước, hoặc có anh em nuôi
không cùng huyết thống.

Bộ kết hợp:

- Thai cùng Phục Binh, Đế Vượng và Thiên Tướng: anh chị em dị bào, hư
  hỏng, dễ vướng vấn đề tai nạn trinh tiết.
- Thai cùng Đào Hoa: anh chị em mang xu hướng dâm dật, lăng loàn, chửa
  hoang.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // HÓA GIẢI THAI
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thai-hoa-giai',
    title: 'Hóa giải sao Thai - Giai đoạn ươm mầm',
    sao: ['Thai'],
    doUuTien: 40,
    tomTat: `Sao Thai nằm giữa Tuyệt và Dưỡng — là giai đoạn ươm mầm chuẩn
bị cho bứt phá, không mang tính xấu tuyệt đối mà là thời gian chuẩn bị cho
giai đoạn phát triển về sau.

Đương số gặp Thai cần lưu ý không vội vàng hành động khi tâm chưa ổn và
dự định còn mơ hồ; nên tạm gác lại những chuyện như đầu tư, cưới hỏi hay
ra quyết định trọng đại nếu chưa có cát tinh hỗ trợ. Đây là thời điểm
thích hợp để tập trung rèn luyện bản thân, chăm sóc sức khỏe, phục hồi và
chuẩn bị cho chu kỳ phát triển kế tiếp.

Ví dụ: một người vừa nghỉ việc văn phòng năm năm — đó là hạn Tuyệt. Trong
hạn Thai kế tiếp, người ấy nảy sinh ý định chuyển hướng viết lách hoặc
học một nghề tay trái; âm thầm theo đuổi sẽ gặt hái thành quả ở tương lai.`,
  },
];
