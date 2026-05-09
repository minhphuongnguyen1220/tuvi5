import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THIÊN LA - Thổ, Ám Tinh.
 *
 * Vị trí: LUÔN cố định tại cung THÌN.
 * Cùng cặp với ĐỊA VÕNG (cố định Tuất): bộ THIÊN LA - ĐỊA VÕNG = "LƯỚI TRỜI".
 *
 * Hóa khí: ÁM TINH ("lưới trời lồng lộng, tuy thưa mà khó thoát").
 * Đặc tính: TÙ HÃM, KHỐN ĐỐN, TRỞ NGẠI, KHÓ KHĂN, RÀNG BUỘC NGHIỆP DUYÊN.
 *
 * Phần CHUNG cặp Thiên La - Địa Võng (hạn cạm bẫy + đi với Lộc/Hình/Liêm)
 * viết tại file `dia-vong.ts`.
 */
export const luanGiai_ThienLa: DoanLuanGiai[] = [
  {
    id: 'thien-la-tinh-chat-chung',
    title: 'Thiên La - Đặc tính chung',
    sao: ['Thiên La'],
    doUuTien: 32,
    tomTat: `**Thiên La** là phụ tinh thuộc ám tinh, ngũ hành Thổ, hóa khí là
ám tinh, mang ý nghĩa trói buộc, trở ngại và khốn đốn. Sao này luôn cố
định tại cung Thìn.

Hình tượng của Thiên La là "lưới trời lồng lộng, tuy thưa mà khó thoát".
Sao mang đặc tính tù hãm, khốn đốn, trở ngại và khó khăn — như vòng kiềm
tỏa quanh đương số, tạo cảm giác bị kìm hãm và gặp nhiều khó khăn trong
công việc cũng như cuộc sống.

Bản chất sao này có hai mặt rõ rệt. Khi đương số làm việc chính nghĩa, dù
khởi đầu khó khăn cũng được ông trời trợ giúp, cuối cùng gặt hái thành
quả. Ngược lại, khi đương số làm việc trái đạo, sao Thiên La giống như
"sa chân vào bùn lầy" — càng vùng vẫy lại càng mắc sâu.

Trong tình duyên, một khi đã yêu thì đương số khó dứt; rời bỏ rồi vẫn đau
đáu nhớ thương. Về phúc thọ, đương số dễ bị bệnh lâu dài, phải chạy chữa
khắp nơi, có khi lạc vào mê tín dị đoan khiến "tiền mất tật mang". Việc
kiếm tiền cũng khó khăn vì lúc nào cũng có "lưới trời" giăng ra chờ sập
bẫy.`,
  },

  {
    id: 'thien-la-co-dinh-thin',
    title: 'Thiên La - Cố định cung Thìn',
    sao: ['Thiên La'],
    chi: ['Thìn'],
    doUuTien: 35,
    tomTat: `Thiên La luôn cố định tại cung Thìn. Theo quy luật vị trí, Thiên
La đóng tại Thìn tượng trưng cho lưới trời, đối cung là vị trí Địa Võng
(lưới đất), tạo thành trục lưới trời. Đây là vị trí đặc biệt chứa nhiều
ràng buộc và nghiệp duyên.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CUNG MỆNH
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-la-menh-rang-buoc-be-tac',
    title: 'Thiên La tại Mệnh - Ràng buộc bế tắc',
    sao: ['Thiên La'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Khi Thiên La tại Mệnh, đương số chịu sự ràng buộc và bế tắc.
Đương số thông minh, có tài xoay xở và tính toán giỏi, nhưng công việc
lại hay bị cản trở, ràng buộc và vướng rắc rối.

Điều quan trọng là trở ngại không hẳn đến từ ngoại cảnh, mà chính từ nội
tâm đương số. Đương số có xu hướng suy nghĩ ngược với quy luật tự nhiên,
hành động trái đạo lý, rồi cảm thấy mình đen đủi và ông trời không thương
— thực chất đang tự tạo ra cái bẫy cho chính mình.

Ví như chiếc lưới trời, đương số dễ sa vào cám dỗ và phạm sai lầm.`,
  },

  {
    id: 'thien-la-menh-sat-bai-tinh-lao-ly',
    title: 'Thiên La + sát bại tinh tại Mệnh - Lao lý tố tụng',
    sao: ['Thiên La'],
    cung: ['Mệnh'],
    ketHop: ['Kình Dương', 'Đà La', 'Thiên Hình', 'Thiên Khốc', 'Thiên Hư', 'Tang Môn', 'Bạch Hổ', 'Đại Hao', 'Tiểu Hao'],
    doUuTien: 60,
    tomTat: `Khi Thiên La tại Mệnh hội cùng Kình Dương, Đà La, Thiên Hình,
Thiên Khốc, Thiên Hư, Tang Môn, Bạch Hổ và Song Hao, đương số rơi vào cảnh
"sa chân vào bùn lầy". Đương số dễ vướng vào lao lý, tố tụng, thậm chí
"thân bại danh liệt" — càng vùng vẫy càng mắc sâu. Đây là cảnh báo nguy
hiểm cao về pháp luật.`,
  },

  {
    id: 'thien-la-menh-cat-tinh-trach-nhiem',
    title: 'Thiên La + cát tinh tại Mệnh - Trách nhiệm nghĩa vụ',
    sao: ['Thiên La'],
    cung: ['Mệnh'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Ân Quang', 'Thiên Quý', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 65,
    tomTat: `Khi Thiên La tại Mệnh hội cùng **Tả Phù**, Hữu Bật, Ân Quang,
Thiên Quý, Thiên Khôi và Thiên Việt, lá số rơi vào cảnh "trong họa có
phúc". Sự ràng buộc của Thiên La hóa thành trách nhiệm và nghĩa vụ, giúp
đương số sống đúng đắn, có đạo nghĩa, biết trước biết sau. Lưới trời nay
trở thành vòng tay che chở.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC CUNG KHÁC
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-la-phu-mau-duyen-no',
    title: 'Thiên La tại Phụ Mẫu - Duyên nợ cha mẹ',
    sao: ['Thiên La'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Khi Thiên La tại Phụ Mẫu, nhân duyên gắn chặt giữa đương số và
cha mẹ — đúng như câu "đời cha ăn mặn, đời con khát nước".

Khi có cát tinh đi cùng, ràng buộc này lại là trách nhiệm và ơn nghĩa
truyền đời; đương số được thừa hưởng phúc ấm, gia sản hoặc sự dìu dắt
của gia tiên.

Khi đồng cung Kình Dương, Đà La, Địa Không, Địa Kiếp, Hỏa Tinh hay Linh
Tinh, gia đình dễ xảy ra cảnh xung khắc, bạo lực gia đình; đương số nên
rời xa bố mẹ từ sớm để phát triển tốt hơn.`,
  },

  {
    id: 'thien-la-phuc-duc-nghiep-dong-toc',
    title: 'Thiên La tại Phúc Đức - Trói buộc nghiệp dòng tộc',
    sao: ['Thiên La'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `Khi Thiên La tại Phúc Đức, sao này tượng trưng cho cái lưới
trói buộc đương số vào nghiệp họ hàng. Đương số khó thoát khỏi ảnh hưởng
dòng tộc và phải gánh nghiệp tổ tiên.

Nếu Thiên La đi cùng Kình Dương, Đà La, Địa Không, Địa Kiếp, Hỏa Tinh hay
Linh Tinh, sự ứng nghiệm càng mạnh, nghiệp dòng tộc càng nặng nề.

Ngược lại, khi đi cùng cát tinh, nghiệp được hóa nhẹ thành phúc; đương số
vẫn giữ được sự gắn bó với gia tộc.`,
  },

  {
    id: 'thien-la-dien-trach-song-gio-dat-dai',
    title: 'Thiên La tại Điền Trạch - Sóng gió đất đai',
    sao: ['Thiên La'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Khi Thiên La tại Điền Trạch, đương số gặp nhiều sóng gió liên
quan đến đất đai và nhà cửa.

Khi hội cùng cát tinh, đương số có khả năng hóa giải nghiệp, biết chăm lo
dọn dẹp nhà cửa, tạo môi trường sống tốt lành; vận nhà yên ổn và đời sống
hưng thịnh.`,
  },

  {
    id: 'thien-la-dien-trach-hoa-tinh',
    title: 'Thiên La + Hỏa Tinh tại Điền Trạch - cháy nổ',
    sao: ['Thiên La'],
    ketHop: ['Hỏa Tinh'],
    cung: ['Điền Trạch'],
    doUuTien: 70,
    tomTat: `Khi Thiên La hội cùng Hỏa Tinh tại Điền Trạch, nhà cửa của
đương số dễ xảy ra cháy nổ.`,
  },

  {
    id: 'thien-la-dien-trach-linh-tinh',
    title: 'Thiên La + Linh Tinh tại Điền Trạch - cháy nổ',
    sao: ['Thiên La'],
    ketHop: ['Linh Tinh'],
    cung: ['Điền Trạch'],
    doUuTien: 70,
    tomTat: `Khi Thiên La hội cùng Linh Tinh tại Điền Trạch, nhà cửa của
đương số dễ xảy ra cháy nổ.`,
  },

  {
    id: 'thien-la-dien-trach-dia-khong',
    title: 'Thiên La + Địa Không tại Điền Trạch - bão lũ thiên tai',
    sao: ['Thiên La'],
    ketHop: ['Địa Không'],
    cung: ['Điền Trạch'],
    doUuTien: 70,
    tomTat: `Khi Thiên La hội cùng Địa Không tại Điền Trạch, đương số cần
đề phòng bão lũ, thiên tai hoặc cảnh mắc kẹt ngay trong nhà.`,
  },

  {
    id: 'thien-la-dien-trach-dia-kiep',
    title: 'Thiên La + Địa Kiếp tại Điền Trạch - bão lũ thiên tai',
    sao: ['Thiên La'],
    ketHop: ['Địa Kiếp'],
    cung: ['Điền Trạch'],
    doUuTien: 70,
    tomTat: `Khi Thiên La hội cùng Địa Kiếp tại Điền Trạch, đương số cần
đề phòng bão lũ, thiên tai hoặc cảnh mắc kẹt ngay trong nhà.`,
  },

  {
    id: 'thien-la-quan-loc-trong-trach-troi-ban',
    title: 'Thiên La tại Quan Lộc - Trọng trách trời ban',
    sao: ['Thiên La'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `Khi Thiên La tại Quan Lộc, đương số được giao "trọng trách trời
ban". Khi đương số làm việc chính nghĩa, khởi đầu tuy khó khăn nhưng được
ông trời trợ giúp; cuối cùng gặt hái thành quả. Điều này càng đúng khi
Thiên La kết hợp với Tả Phù, Hữu Bật, Thiên Khôi và Thiên Việt.

Cảnh báo: nếu Thiên La gặp Kình Dương, Đà La, Thiên Hình hay Tang Môn,
đương số dễ bị cuốn vào công việc phi pháp, trái đạo lý — đúng cảnh "một
bước lầm, muôn đời dại", khó có thể quay đầu.`,
  },

  {
    id: 'thien-la-quan-loc-ta-huu-khoi-viet',
    title: 'Thiên La + Tả Phù/Hữu Bật/Thiên Khôi/Thiên Việt tại Quan Lộc - Trợ lực thành công',
    sao: ['Thiên La'],
    cung: ['Quan Lộc'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 70,
    tomTat: `Khi Thiên La tại Quan Lộc hội cùng **Tả Phù**, Hữu Bật, Thiên
Khôi và Thiên Việt, trọng trách trời ban được trợ lực. Đương số làm việc
chính nghĩa, khởi đầu tuy khó nhưng vẫn thành công, có quý nhân phò tá và
được đền đáp xứng đáng.`,
  },

  {
    id: 'thien-la-no-boc-vuong-hoa-vi-ban',
    title: 'Thiên La tại Nô Bộc - Vướng họa vì bạn',
    sao: ['Thiên La'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Khi Thiên La tại Nô Bộc, đương số dễ vướng họa vì bạn bè. Nếu
kết giao lầm bạn, đương số bị lợi dụng làm việc sai trái, từ vô tình
trở thành đồng phạm — đặc biệt khi gặp Địa Kiếp, Phục Binh, Song Hao và
Đà La.

Khi hội cùng cát tinh, bạn bè trở thành sự ràng buộc tốt; đôi bên hỗ trợ
nhau và mang lại lợi ích thiết thực.`,
  },

  {
    id: 'thien-la-thien-di-tien-thoai-luong-nan',
    title: 'Thiên La tại Thiên Di - Tiến thoái lưỡng nan',
    sao: ['Thiên La'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `Khi Thiên La tại Thiên Di, hình tượng nổi bật là "tiến thoái
lưỡng nan". Đương số ra ngoài gặp cản trở, muốn đi chẳng được, muốn về
không xong.

Khi kết hợp Kình Dương hay Thiên Hình, đương số phải đề phòng tai nạn,
nhất là tai nạn giao thông.

Khi có **Tả Phù** và Hữu Bật trợ lực, trách nhiệm bên ngoài hóa thành cơ
hội; hoàn thành xong nhiệm vụ, đương số được hưởng thành quả và được
người ngoài kính trọng, nể phục.`,
  },

  {
    id: 'thien-la-tat-ach-benh-lau-dai',
    title: 'Thiên La tại Tật Ách - Bệnh lâu dài',
    sao: ['Thiên La'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `Khi Thiên La tại Tật Ách, đương số dễ bị bệnh lâu dài, phải
chạy chữa khắp nơi và có khi lạc vào mê tín dị đoan, khiến "tiền mất tật
mang".

Đáng chú ý, khi kết hợp Địa Không, Địa Kiếp, Hỏa Tinh hay Linh Tinh, bệnh
dễ trở thành nan y.

Để hóa giải, đương số cần hiểu rằng đó là nghiệp thân phải trả; sống
tích phúc, làm lành thì bệnh có thể giảm và họa có thể tiêu.`,
  },

  {
    id: 'thien-la-tai-bach-luoi-troi-giang-bay',
    title: 'Thiên La tại Tài Bạch - Lưới trời giăng bẫy',
    sao: ['Thiên La'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `Khi Thiên La tại Tài Bạch, đương số luôn phải cẩn trọng trong
việc kiếm tiền vì lúc nào cũng có "lưới trời" giăng ra chờ sập bẫy.

Cách hành xử đúng là làm ăn chân chính; dù khó khăn cũng không vi phạm
đạo đức và tôn chỉ. Đi đúng đường, đương số có thể tiền ít nhưng bền,
nghèo mà yên.

Cảnh báo: nếu sa vào đường tắt, gặp thêm sát tinh, Hóa Kỵ hay Thiên Hình,
đương số rơi vào cảnh "một phút huy hoàng, ngàn năm khổ lụy" — một phút
kiếm tiền dễ dàng đổi lấy cả cuộc đời gặp khó khăn.`,
  },

  {
    id: 'thien-la-tu-tuc-no-nghiep-con',
    title: 'Thiên La tại Tử Tức - Sợi dây nợ nghiệp với con',
    sao: ['Thiên La'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Khi Thiên La tại Tử Tức, đương số có sợi dây nợ nghiệp với con
cái. Con làm sai thì cha mẹ chịu, con đau ốm thì cha mẹ phải lo lắng,
con hư hỏng thì cha mẹ khó làm ăn.

Khi hội cát tinh, nợ trở thành duyên — con cái ngoan hiền.

Khi gặp sát tinh, Hóa Kỵ hay Thiên Hình, cha mẹ khổ vì con, muốn thoát
cũng chẳng thể.`,
  },

  {
    id: 'thien-la-phu-the-tinh-nang-duyen-no',
    title: 'Thiên La tại Phu Thê - Tình nặng duyên nợ',
    sao: ['Thiên La'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `Khi Thiên La tại Phu Thê, đương số tạo ra mối tình nặng duyên
nợ. Một khi đã yêu thì khó dứt; rời bỏ rồi vẫn đau đáu nhớ thương.

Khi gặp sát tinh, Hóa Kỵ hay Thiên Hình, tình duyên khổ lụy; chia tay có
cảm giác như "chết đi sống lại".

Khi có cát tinh như Văn Xương, Văn Khúc, **Tả Phù**, Hữu Bật trợ lực, tình
duyên gắn kết vì nghĩa tình chứ không phải do nghiệp xấu.`,
  },

  {
    id: 'thien-la-huynh-de-than-thiet-hoac-tranh-chap',
    title: 'Thiên La tại Huynh Đệ - Anh em thân thiết hoặc tranh chấp',
    sao: ['Thiên La'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Khi Thiên La tại Huynh Đệ, anh chị em của đương số có mối quan
hệ thân thiết kể cả khi đã trưởng thành.

Khi hội Tả Phù, Hữu Bật, Thiên Khôi và Thiên Việt, anh em thường xuyên
tụ họp, giúp đỡ nhau và sống với nhau vì tình nghĩa.

Khi đi cùng Kình Dương và Đà La, anh em dễ xảy ra tranh chấp lợi ích —
nhất là chuyện gia sản và thừa kế — khiến tình cảm rạn nứt.`,
  },
];
