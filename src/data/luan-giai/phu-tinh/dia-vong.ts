import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO ĐỊA VÕNG - Thổ, Ám Tinh.
 *
 * Vị trí: LUÔN cố định tại cung TUẤT.
 * Cùng cặp với THIÊN LA (cố định Thìn): bộ THIÊN LA - ĐỊA VÕNG = "LƯỚI TRỜI".
 *
 * Hóa khí: ÁM TINH ("lưới trời lồng lộng, tuy thưa mà khó lọt").
 * Đặc tính: NGHIỆP DUYÊN, NHÂN QUẢ, RÀNG BUỘC, MẮC KẸT.
 * Mang ý nghĩa GỐC ĐẠO ĐỨC + NHÂN QUẢ ĐẠO PHẬT.
 *
 * Phần CHUNG cặp Thiên La - Địa Võng (hạn cạm bẫy + đi với Lộc/Hình/Liêm)
 * viết tại file này.
 */
export const luanGiai_DiaVong: DoanLuanGiai[] = [
  {
    id: 'dia-vong-tinh-chat-chung',
    title: 'Địa Võng - Đặc tính chung',
    sao: ['Địa Võng'],
    doUuTien: 32,
    tomTat: `**Địa Võng** là phụ tinh thuộc nhóm Ám Tinh, mang ngũ hành Thổ, hóa
khí cũng là Ám Tinh. Sao luôn cố định tại cung Tuất, hợp cùng Thiên La (cố
định ở Thìn) tạo thành cặp **Thiên La - Địa Võng** — gọi nôm na là "lưới
trời".

Hình tượng của sao chính là câu "lưới trời lồng lộng, tuy thưa mà khó lọt".
Sao mang ý nghĩa nhân quả và nghiệp chướng theo đạo Phật, là cái gốc của đạo
đức trong tử vi: kẻ làm điều ác thì người chịu nghiệp quả — càng cựa quậy
càng mắc vào nhiều hơn.

Tác động chính của Địa Võng nằm ở cảm giác bị mắc kẹt, gặp nhiều rào cản và
khó khăn khi đạt mục tiêu, dễ bị ảnh hưởng bởi những tình huống không mong
muốn.

Về sự nghiệp, đương số có thể giảm nghiệp chướng nếu làm các công việc bảo vệ
cái đúng, lẽ phải — hợp với kiểm sát, hải quan, tư pháp.

Về tình duyên, Địa Võng như cái lưới giúp mối quan hệ duy trì bền lâu; nhưng
ngược lại, đó cũng là cái khó của người muốn thoát ra mà không thể.

Về phúc thọ, khi có bệnh tật chủ mệnh cần nỗ lực hóa giải, không nên mù quáng
mê tín; phải giữ tâm lý trí, vì càng mưu cầu thoát khỏi thì càng mắc kẹt.`,
  },

  {
    id: 'dia-vong-co-dinh-tuat',
    title: 'Địa Võng - Cố định cung Tuất',
    sao: ['Địa Võng'],
    chi: ['Tuất'],
    doUuTien: 35,
    tomTat: `Địa Võng luôn cố định tại cung Tuất — gọi là "lưới đất". Đây là
một nửa của trục lưới trời, cùng Thiên La phía đối diện. Hai cung xung chiếu
nhau tạo nên cặp đôi nghiệp duyên ràng buộc xuyên suốt lá số.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CUNG MỆNH
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'dia-vong-menh-thong-minh-muu-luoc',
    title: 'Địa Võng tại Mệnh - Thông minh mưu lược',
    sao: ['Địa Võng'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Khi Địa Võng tại Mệnh, đương số là người thông minh, lanh lợi,
tính toán giỏi; có phần mưu lược và khéo xoay chuyển tình thế.

Mặt khác, chủ mệnh cũng phải đối mặt với những trắc trở bất ngờ — đang xuôi
chèo mát mái thì vướng rắc rối, đi trái đạo lý hay quy luật tự nhiên thì bị
cản trở. Nhiều khi không nhận ra, đương số chỉ cho rằng mình đen đủi, là do
ông trời không ủng hộ.

Triết lý đúng của sao này rất quan trọng: khó khăn, ngăn trở chỉ đáng lo khi
đương số làm điều xấu, trái luân thường đạo lý. Còn khi làm điều đúng đắn,
thượng tôn pháp luật, tốt đời đẹp đạo, đương số được hưởng điều tốt và có
cuộc sống trật tự, bình ổn để phát triển.`,
  },

  {
    id: 'dia-vong-menh-sat-tinh-tham-san-si',
    title: 'Địa Võng + sát tinh tại Mệnh - Tham sân si kiện tụng',
    sao: ['Địa Võng'],
    cung: ['Mệnh'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Đà La', 'Hóa Kỵ', 'Thiên Hình', 'Bạch Hổ', 'Thiên Riêu', 'Phục Binh'],
    doUuTien: 60,
    tomTat: `Khi Địa Võng tại Mệnh hội cùng Địa Không, Địa Kiếp, Đà La, Hóa Kỵ,
Thiên Hình, Bạch Hổ, Thiên Riêu hay Phục Binh, đương số vướng nghiệp chướng
nặng. Có lúc tâm khởi điều xấu xa, va vào các nghiệp tham, sân, si, mạn,
nghi, tà kiến — gây nghiệp chướng và dễ dính tới pháp luật, kiện tụng.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC CUNG KHÁC
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'dia-vong-phu-mau-mac-ket-nghiep',
    title: 'Địa Võng tại Phụ Mẫu - Mắc kẹt nghiệp gia',
    sao: ['Địa Võng'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Khi Địa Võng tại Phụ Mẫu, mối quan hệ với trưởng bối có nhiều
điểm mắc kẹt — đương số dễ rơi vào vòng lặp khó thoát, đúng như câu "đời cha
ăn mặn, đời con khát nước".

Khi Địa Võng đi cùng Địa Không, Địa Kiếp, Hóa Kỵ hay Thiên Hình tại Phụ Mẫu:

- Cha mẹ làm việc xấu khiến con cái chịu liên lụy
- Cha mẹ vay nợ thì con cái phải trả
- Đời này không trả được thì đời cháu tiếp tục gánh nghiệp`,
  },

  {
    id: 'dia-vong-phu-mau-xuong-khuc-khoa-bang',
    title: 'Địa Võng + Văn Xương/Văn Khúc/Hóa Khoa/Phong Cáo/Thai Phụ/Lưu Hà - Tri thức truyền',
    sao: ['Địa Võng'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Hóa Khoa', 'Phong Cáo', 'Thai Phụ', 'Lưu Hà'],
    doUuTien: 68,
    tomTat: `Khi Địa Võng tại Phụ Mẫu hội cùng bộ khoa bảng (Văn Xương, Văn
Khúc, Hóa Khoa, Phong Cáo, Thai Phụ, Lưu Hà), tri thức được lưu truyền từ cha
mẹ sang đương số.

Nét đẹp văn hóa và đạo đức trong cách hành xử của bố mẹ ảnh hưởng tới con
cái; đương số kế thừa được những điều đẹp ấy và phát triển tốt hơn ngay trong
thế hệ của mình.`,
  },

  {
    id: 'dia-vong-phuc-duc-khong-tach-dong-toc',
    title: 'Địa Võng tại Phúc Đức - Không tách rời dòng họ',
    sao: ['Địa Võng'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `Khi Địa Võng tại Phúc Đức, đương số không thể tách rời dòng họ —
đúng câu "cây có gốc, nước có nguồn". Dù muốn hay không, chủ mệnh vẫn phải
chịu ảnh hưởng từ tổ tiên.`,
  },

  {
    id: 'dia-vong-phuc-menh-co-khong-thoat-the-tuc',
    title: 'Địa Võng Phúc + sao Không tại Mệnh - Thoát ly thế tục',
    sao: ['Địa Võng'],
    cung: ['Phúc Đức', 'Mệnh'],
    ketHop: ['Địa Không', 'Thiên Không'],
    doUuTien: 65,
    tomTat: `Khi Địa Võng tại Phúc Đức kết hợp sao Không (Địa Không hoặc Thiên
Không) tọa thủ tại Mệnh, đương số hình thành suy nghĩ muốn thoát ly thế tục
như một cách trả nghiệp. Chủ mệnh dễ có duyên với tu tập, đi tu hoặc ẩn cư.`,
  },

  {
    id: 'dia-vong-dien-trach-nha-bi-phong-toa',
    title: 'Địa Võng tại Điền Trạch - Nhà bị lưới bủa vây',
    sao: ['Địa Võng'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Khi Địa Võng tại Điền Trạch, nhà cửa của đương số bị lưới bủa
vây. Có thể là nhà bị phong tỏa, hoặc nhà ở vị trí ranh giới, biên giới.`,
  },

  {
    id: 'dia-vong-tai-bach-da-ky-hinh-hao-tich-thu',
    title: 'Địa Võng Điền + Đà Kỵ Hình Hao tại Tài - Tài sản bị tịch thu',
    sao: ['Địa Võng'],
    cung: ['Điền Trạch', 'Tài Bạch'],
    ketHop: ['Đà La', 'Hóa Kỵ', 'Thiên Hình', 'Đại Hao', 'Tiểu Hao'],
    doUuTien: 65,
    tomTat: `Khi Địa Võng đóng tại Điền Trạch và cung Tài Bạch hội tụ Đà La,
Hóa Kỵ, Thiên Hình, Đại Hao hay Tiểu Hao, đương số dễ rơi vào con đường kiếm
tiền phi pháp. Đến lúc trả nghiệp, nhà cửa, đất đai và tài sản bị phong tỏa,
giam cầm hay tịch thu.`,
  },

  {
    id: 'dia-vong-quan-loc-tuan-thu-phap-luat',
    title: 'Địa Võng tại Quan Lộc - Tuân thủ pháp luật',
    sao: ['Địa Võng'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `Khi Địa Võng tại Quan Lộc, đương số buộc phải làm đúng và tuân
thủ pháp luật. Chỉ cần làm sai là rất dễ bị phạt.

Cách giảm nghiệp chướng tốt nhất là theo những công việc bảo vệ cái đúng, lẽ
phải — như kiểm sát, hải quan, tư pháp.`,
  },

  {
    id: 'dia-vong-quan-loc-quan-phu-thien-hinh',
    title: 'Địa Võng + Quan Phù/Quan Phủ/Thiên Hình tại Quan Lộc - Liên quan pháp luật',
    sao: ['Địa Võng'],
    cung: ['Quan Lộc'],
    ketHop: ['Quan Phù', 'Quan Phủ', 'Thiên Hình'],
    doUuTien: 70,
    tomTat: `Khi Địa Võng tại Quan Lộc hội cùng Quan Phù, Quan Phủ và Thiên
Hình, công việc của đương số liên quan trực tiếp tới pháp luật. Đây là bộ sao
xét nét, kỷ luật và pháp lý — chủ mệnh phải chú ý mọi việc dính tới pháp luật
và phù hợp với các nghề tư pháp, luật sư, kiểm sát, an ninh.`,
  },

  {
    id: 'dia-vong-no-boc-nghiep-xa-hoi',
    title: 'Địa Võng tại Nô Bộc - Nghiệp quan hệ xã hội',
    sao: ['Địa Võng'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Khi Địa Võng tại Nô Bộc, đương số mang nghiệp trong quan hệ xã
hội. Sao gắn kết chủ mệnh với những người lướt qua đời mình; nếu đương số làm
chủ và có cấp dưới, sao phản ánh việc cấp dưới làm cho mình lâu dài.

Khi cung này hội nhiều sát kỵ hình, đương số vướng trắc trở và khó khăn trong
quan hệ — lợi ít hại nhiều, cần tỉnh táo để không liên tiếp mắc sai lầm.`,
  },

  {
    id: 'dia-vong-thien-di-troi-dat-soi-xet',
    title: 'Địa Võng tại Thiên Di - Trời đất soi xét',
    sao: ['Địa Võng'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `Khi Địa Võng tại Thiên Di, đương số đi đâu, làm gì cũng có trời
đất soi xét. Làm điều sai sẽ có hình phạt đi kèm — cũng giống như sự chứng
giám.

Ngược lại, càng làm điều đúng đắn, đương số càng có lợi. Chủ mệnh dễ có duyên
với những người ngay thẳng, biết tuân thủ đạo đức và pháp luật, có thể học
tập tính tốt từ họ.`,
  },

  {
    id: 'dia-vong-tat-ach-nghiep-phap-luat-benh-tat',
    title: 'Địa Võng tại Tật Ách - Nghiệp pháp luật và bệnh tật',
    sao: ['Địa Võng'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `Khi Địa Võng tại Tật Ách, cung này trở thành chỗ ngồi của nghiệp
quả. Đương số dễ dính tới pháp luật, hình pháp; bệnh tật phải nỗ lực hóa
giải.

Cảnh báo rất quan trọng: chủ mệnh không nên mù quáng mê tín dị đoan, mà phải
giữ tâm lý trí. Càng mưu cầu thoát khỏi, đương số càng mắc kẹt sâu hơn.`,
  },

  {
    id: 'dia-vong-tai-bach-kiem-tien-bat-chinh',
    title: 'Địa Võng tại Tài Bạch - Kiếm tiền bất chính sinh chuyện',
    sao: ['Địa Võng'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `Khi Địa Võng tại Tài Bạch, hễ kiếm tiền bất chính ắt sinh chuyện
— "một lần nhúng chàm, khó rửa sạch tay". Đương số đã vướng vào sai lầm thì
sai lầm đó tiếp tục mời gọi, câu dẫn lún sâu hơn.

Hiện tượng này càng đúng nếu Địa Võng đi cùng Đà La, Địa Kiếp hay Bệnh Phù —
những sao chủ về sự dây dưa.

Ngược lại, nếu đồng tiền của đương số là đồng tiền thiện lành thì không có gì
đáng lo.`,
  },

  {
    id: 'dia-vong-tu-tuc-duyen-no-con-cai',
    title: 'Địa Võng tại Tử Tức - Duyên nợ con cái',
    sao: ['Địa Võng'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Khi Địa Võng tại Tử Tức, đương số không có duyên thì cũng có
phận với con cái. Dù phải xa rời con, chủ mệnh vẫn duy trì cảm giác bổn phận
của bậc cha mẹ.

Khi sao hội thêm Thiên Khôi, Thiên Việt, Ân Quang, Thiên Quý, đó là duyên
thiện lành, có lợi cho chuyện sinh nở.

Khi kết hợp nhiều sao xấu, đương số phải trả nghiệp; cần tích phúc đức cho
con cái và hậu thế.`,
  },

  {
    id: 'dia-vong-phu-the-tinh-cam-vuong-mac',
    title: 'Địa Võng tại Phu Thê - Hôn nhân vướng mắc',
    sao: ['Địa Võng'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `Khi Địa Võng tại Phu Thê, đương số phải nhìn vào thực tế để giải
quyết. Nếu không, vướng mắc này tiếp nối vướng mắc khác, chồng chéo khó giải
quyết.

Sao tựa cái lưới giúp mối quan hệ duy trì bền lâu, nhưng đó cũng chính là cái
khó của người muốn thoát ra mà không thể.`,
  },

  {
    id: 'dia-vong-huynh-de-ruot-thit-vuong-mac',
    title: 'Địa Võng tại Huynh Đệ - Ruột thịt vướng mắc',
    sao: ['Địa Võng'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Khi Địa Võng tại Huynh Đệ, quan hệ ruột thịt của đương số có
nhiều vướng mắc.

Cảnh báo cần lưu ý: khi sao đi cùng Địa Không, Địa Kiếp, Thiên Hình, Hóa Kỵ,
Bạch Hổ, Đại Hao, Tiểu Hao hay Thiên Riêu, mối quan hệ đi theo chiều xấu, dễ
vướng vào những rắc rối khó dứt.

Lời khuyên: đương số không nên hợp tác làm ăn hay dính líu nhiều với anh chị
em — nhẹ thì xa cách, nặng thì tranh chấp khó dứt.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // PHẦN CHUNG CẶP THIÊN LA - ĐỊA VÕNG
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'thien-la-dia-vong-cam-bay-bua-vay',
    title: 'Hạn Thiên La - Địa Võng - Cạm bẫy bủa vây',
    sao: ['Thiên La', 'Địa Võng'],
    doUuTien: 70,
    tomTat: `Khi hạn của đương số gặp **Thiên La - Địa Võng**, cạm bẫy bủa
vây tứ phía. Chủ mệnh dễ sa vào bẫy, càng vùng vẫy thì càng mắc sâu.

Khi vận hạn này hội thêm cát tinh, đó là dấu hiệu của trách nhiệm và nghĩa vụ
lớn — tuy vất vả nhưng cuối cùng đương số sẽ được đền đáp.

Khi gặp Hóa Kỵ hay Địa Kiếp, càng làm càng sai — đúng kiểu "làm một mất
mười".

Lời khuyên cho hạn này:

- Biết dừng đúng lúc mới là khôn ngoan
- Thận trọng từng bước
- Soi xét hậu quả trước khi hành động
- Giữ cái tâm tỉnh táo thì lưới trời sẽ hóa thành lời cảnh tỉnh`,
  },

  {
    id: 'thien-la-dia-vong-loc-phat-dat',
    title: 'Thiên La - Địa Võng + Lộc - Sự nghiệp phát đạt',
    sao: ['Thiên La', 'Địa Võng'],
    ketHop: ['Lộc Tồn', 'Hóa Lộc', 'Thiên Lương', 'Thiên Đồng', 'Hóa Khoa', 'Thái Dương', 'Văn Xương', 'Văn Khúc'],
    doUuTien: 65,
    tomTat: `Khi Thiên La hoặc Địa Võng kết hợp với Lộc Tồn, Hóa Lộc cùng các
cát tinh, sự nghiệp đương số phát đạt và giàu sang. Hội họp cát tinh làm tăng
tính bền vững cho cả Mệnh - Tài - Quan; đây là chất xúc tác giúp đương số kéo
dài cái duyên với tiền bạc và công danh.

Khi này, tưởng muốn buông bỏ chuyện kiếm tiền thì tiền lại đến; tưởng muốn
sống ẩn nhưng lại vang danh.

Đặc thù phát đạt giàu sang đúng nhất khi Thiên La / Địa Võng đi cùng Thiên
Lương hay Thiên Đồng — những sao chủ về quý.

Đặc thù danh tiếng lâu bền đúng nhất khi đi cùng Hóa Khoa, Thái Dương, Văn
Xương hay Văn Khúc — những sao chủ về danh.`,
  },

  {
    id: 'thien-la-dia-vong-thien-hinh-liem-trinh-tu-tung',
    title: 'Thiên La - Địa Võng + Thiên Hình + Liêm Trinh - Dính líu pháp luật tù túng',
    sao: ['Thiên La', 'Địa Võng'],
    ketHop: ['Thiên Hình', 'Liêm Trinh', 'Thiên Lương', 'Địa Kiếp', 'Đà La', 'Quan Phù', 'Quan Phủ'],
    doUuTien: 60,
    tomTat: `Khi Thiên La hoặc Địa Võng kết hợp Thiên Hình, Liêm Trinh, Thiên
Lương, Địa Kiếp, Đà La, Quan Phù hay Quan Phủ, đương số dễ dính líu pháp luật
và tù túng.

Lưới trời rất kỵ đi cùng những sao chủ về kiện tụng và tù túng kể trên — đây
là tổ hợp dễ kéo đương số vào pháp luật.

Cảnh báo cho hạn: khi vận hạn có Địa Võng, đương số cần đề phòng các vấn đề
pháp luật. Một khi vướng vào, sẽ gặp rất nhiều phiền phức và phải tập trung
giải quyết dứt điểm.`,
  },
];
