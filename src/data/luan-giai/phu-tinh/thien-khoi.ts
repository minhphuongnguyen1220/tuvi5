import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THIÊN KHÔI - Lục Cát Tinh, Quý Tinh
 * (Phần chung của cặp Khôi Việt được viết tại đây)
 */
export const luanGiai_ThienKhoi: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung của sao Thiên Khôi
  // ============================================================
  {
    id: 'thien-khoi-tinh-chat-chung',
    title: 'Thiên Khôi - Đặc tính chung',
    sao: ['Thiên Khôi'],
    doUuTien: 30,
    tomTat: `**Thiên Khôi** còn được gọi là **Dương Quý Nhân**, thuộc bộ Lục Cát
Tinh, Nam Đẩu Tinh, ngũ hành Hỏa (Dương Hỏa đới Kim). Hóa khí của sao là Quý
Tinh — chủ về may mắn, khoa giáp, quyền tước, biểu thị sự giúp đỡ trực tiếp
đến từ bên ngoài.

Khi đứng cùng Thiên Việt, hai sao tạo nên bộ Khôi Việt — tức Thiên Ất Quý
Nhân — biểu tượng cho quý nhân phù trợ, khoa giáp, văn chương cùng quyền hành
chức tước.`,

    chiTiet: `## Biểu tượng

Theo phép tượng hình, Thiên Khôi ứng với phần đầu trên cơ thể (Thiên Việt
ứng với vai). Về vật dụng, Khôi tượng trưng cho văn bằng, nghị định, giấy
khen, còn Việt là bút nghiên. Trong việc tang chế, Khôi Việt chỉ thầy cúng,
ông sư, ông cha — những người đứng ra làm lễ tang.

## So sánh Thiên Khôi với Thiên Việt

| | Thiên Khôi | Thiên Việt |
|---|---|---|
| Tên khác | Dương Quý Nhân | Âm Quý Nhân |
| Ngũ hành | Dương Hỏa **đới Kim** | Âm Hỏa **đới Mộc** |
| Cơ thể | Đầu | Vai |
| Quý nhân | Đàn ông quyền thế | Phụ nữ cất nhắc |
| Tính | Mềm mỏng, tình nghĩa | Nghiêm khắc, lý trí |
| Vai vế | Con trưởng | Thứ đoạt trưởng |
| Sức mạnh | Mạnh hơn Việt về tài năng và quyền uy | |

Chữ "Khôi" theo nghĩa Hán Việt mang ý "kẻ làm đầu sỏ cả một đảng" — gợi
đúng phong thái lãnh đạo của sao này.`,
  },

  // ============================================================
  // 2. Khôi Việt - vị trí miếu hãm & nguyên tắc Tuần Triệt
  // ============================================================
  {
    id: 'khoi-viet-vi-tri-mieu-ham',
    title: 'Khôi Việt - Vị trí miếu hãm & nguyên tắc Tuần Triệt',
    sao: ['Thiên Khôi', 'Thiên Việt'],
    doUuTien: 35,
    tomTat: `Khôi và Việt cùng chung một bảng miếu hãm:

- **Miếu** vượng tại Dần và Ngọ — hai cung ban ngày
- Bình thường tại Thân, Dậu (hành Kim)
- **Hãm** địa tại Hợi, Tý (Thủy) cùng Sửu, Mùi (Thổ)
- Không an tại Thìn và Tuất vì là cung La Võng

Một nguyên tắc đặc biệt của bộ Khôi Việt là Tuần Triệt **đảo ngược**: khi
Khôi Việt miếu vượng thì không nên gặp Tuần Triệt — như tấm bằng cấp bị xé
rách, khoa trường thi cử lận đận, không đỗ cao. Ngược lại, khi Khôi Việt hãm
địa lại cần Tuần Triệt — chủ mệnh tuy lận đận ban đầu nhưng cuối cùng vẫn có
được bằng cấp.`,

    chiTiet: `## Lý do của vị trí miếu hãm

Cung ban ngày từ Dần đến Ngọ giống như tấm bằng cấp được đem ra cho công
chúng xem: chủ mệnh trở thành người lãnh đạo được mọi người biết đến. Xét về
ngũ hành, cung sinh sao hoặc đồng hành nên Khôi Việt phát huy tốt.

Cung ban đêm cùng Sửu Mùi lại ví như tấm bằng không treo ra ngoài, ít người
biết đến: chủ mệnh có uy quyền nhưng âm thầm. Về ngũ hành, ở các cung này
hoặc hành sao khắc hành cung (Hỏa khắc Kim), hoặc hành cung khắc hành sao
(Thủy khắc Hỏa), hoặc hành sao sinh hành cung (Hỏa sinh Thổ).

## Vì sao không an ở Thìn Tuất

Thìn Tuất là hai cung La Võng — Thiên La và Địa Võng. Khôi Việt vốn chủ về
quý nhân giúp đỡ, nếu bị La Võng giam hãm thì mất hết ý nghĩa, vì vậy không
an tại đây.

## Đủ bộ mới mạnh

Khôi Việt cần đủ cả hai sao mới phát huy trọn vẹn. Nếu chỉ đứng một mình lại
gặp hãm địa thì ý nghĩa giảm thiểu rất nhiều.`,
  },

  // ============================================================
  // 3. Khôi Việt thủ Mệnh - cách "Ư gia quốc vi nhân trưởng"
  // ============================================================
  {
    id: 'khoi-viet-thu-menh',
    title: 'Khôi Việt thủ Mệnh - Cách "Ư gia quốc vi nhân trưởng"',
    sao: ['Thiên Khôi', 'Thiên Việt'],
    cung: ['Mệnh'],
    ketHop: ['Khôi Việt thủ Mệnh', 'Ư gia quốc vi nhân trưởng'],
    doUuTien: 90,
    tomTat: `Khôi Việt thủ chiếu Mệnh hợp thành cách **"Ư gia quốc vi nhân
trưởng"** — trong nhà ngoài nước đều làm người đứng đầu. Dù gặp hãm địa, chủ
mệnh vẫn trội hơn người bình thường, luôn được mọi người nể phục, có uy tín
và đứng đầu nhóm.

- Ở nhà: chủ mệnh đứng đầu, được cha mẹ thương yêu; là con trưởng nếu là sao
  Khôi, hoặc thứ đoạt trưởng nếu là sao Việt
- Ra ngoài: tốt thì lãnh đạo thiên hạ, làm trưởng cơ quan ban ngành; xấu thì
  cũng được người nể phục, tiếng nói có trọng lượng, dễ kề cận với thượng cấp

Các lá số quý cách như Tử Phủ hay Nhật Nguyệt rất cần Khôi Việt (Hỏa sinh
Thổ): thiếu Khôi Việt thì thiếu thiên uy, không được kính nể.`,

    chiTiet: `## Tính cách khi Khôi Việt thủ chiếu Mệnh

Chủ mệnh thông minh, có năng khiếu đặc biệt, thường giỏi vượt trội về một
lĩnh vực nào đó. Bên cạnh đó là khả năng mưu cơ quyền biến cùng tài lãnh đạo,
tổ chức và chỉ huy. Đầu óc đương số không chịu thua người, luôn muốn hơn
người, có óc lãnh tụ và thích chỉ huy.

Tự ái của chủ mệnh rất cao, không thích bị nói nặng nhẹ, cũng không chịu
được lời lẽ thô ráp. Bù lại, đương số không thù dai, không chấp nhất, cũng
không nhỏ mọn — dễ tha thứ, sống khoáng đạt và cao thượng. Khi có thêm Không
Kiếp (đặc biệt khi hãm địa), do bị chạm tự ái, chủ mệnh dễ chuyển sang ăn
miếng trả miếng.

## Đặt nặng uy tín cá nhân

Khi giao du với người lớn tuổi hoặc có chức quyền, tiếng tăm, đương số
thường có lợi và được giúp đỡ trực tiếp.

## Khôi Việt giải hạn xấu

Mệnh có Khôi Việt mà gặp hạn xấu thường được người khác giúp đỡ — phần lớn
là người có chức có quyền. Khôi Việt giải hạn xấu rất mạnh, đây là một trong
những công năng quý nhất của bộ sao này.

## So sánh Khôi với Việt

Khi cùng đắc hoặc cùng hãm như nhau, tài năng và quyền uy của Khôi mạnh hơn
Việt.`,
  },

  // ============================================================
  // 4. Khôi Việt + cát tinh - Song quý nhân
  // ============================================================
  {
    id: 'khoi-viet-song-quy-nhan',
    title: 'Khôi Việt + cát tinh - "Song Quý Nhân" mang phúc lộc vô biên',
    sao: ['Thiên Khôi', 'Thiên Việt'],
    ketHop: ['Khôi Việt', 'Song Quý Nhân', 'Thiên Ất Quý Nhân'],
    doUuTien: 60,
    tomTat: `Cặp Khôi Việt là một trong những tổ hợp sáng nhất của tử vi —
mang phúc lộc dồi dào, công danh rực rỡ và phúc thọ song toàn cho chủ mệnh.

Hai sao bổ sung lẫn nhau rất khéo: Thiên Khôi mềm mỏng, giàu tình nghĩa, gọi
quý nhân là nam giới quyền thế đến giúp đỡ; Thiên Việt nghiêm khắc, lý trí,
gọi quý nhân là nữ giới đứng ra cất nhắc. Phối hợp lại thành bộ song quý
nhân — vừa tình cảm vừa lý trí, vừa mềm mỏng vừa cứng rắn — giúp đương số
giữ được sự cân bằng để tiến thân.`,
  },

  {
    id: 'khoi-viet-song-quy-nhan-ta-huu',
    title: 'Khôi Việt + Tả Phù / Hữu Bật - hổ mọc thêm cánh',
    sao: ['Thiên Khôi', 'Thiên Việt'],
    ketHop: ['Tả Phù', 'Hữu Bật'],
    doUuTien: 55,
    tomTat: `Khôi Việt gặp thêm **Tả Phù** hoặc **Hữu Bật** ví như hổ mọc
thêm cánh: thi cử thuận lợi, đỗ đạt cao; công danh sự nghiệp thăng hoa với
quý nhân nâng đỡ liên tục; uy tín và danh tiếng vang xa.`,
  },

  {
    id: 'khoi-viet-song-quy-nhan-xuong-khuc',
    title: 'Khôi Việt + Văn Xương / Văn Khúc - hổ mọc thêm cánh',
    sao: ['Thiên Khôi', 'Thiên Việt'],
    ketHop: ['Văn Xương', 'Văn Khúc'],
    doUuTien: 55,
    tomTat: `Khôi Việt gặp thêm **Văn Xương** hoặc **Văn Khúc** ví như hổ
mọc thêm cánh: thi cử thuận lợi, đỗ đạt cao; công danh sự nghiệp thăng hoa
với quý nhân nâng đỡ liên tục; uy tín và danh tiếng vang xa.`,
  },

  {
    id: 'khoi-viet-song-quy-nhan-quang-quy',
    title: 'Khôi Việt + Ân Quang / Thiên Quý - hổ mọc thêm cánh',
    sao: ['Thiên Khôi', 'Thiên Việt'],
    ketHop: ['Ân Quang', 'Thiên Quý'],
    doUuTien: 55,
    tomTat: `Khôi Việt gặp thêm **Ân Quang** hoặc **Thiên Quý** ví như hổ
mọc thêm cánh: thi cử thuận lợi, đỗ đạt cao; công danh sự nghiệp thăng hoa
với quý nhân nâng đỡ liên tục; uy tín và danh tiếng vang xa.`,
  },

  {
    id: 'khoi-viet-song-quy-nhan-long-phuong',
    title: 'Khôi Việt + Long Trì / Phượng Các - hổ mọc thêm cánh',
    sao: ['Thiên Khôi', 'Thiên Việt'],
    ketHop: ['Long Trì', 'Phượng Các'],
    doUuTien: 55,
    tomTat: `Khôi Việt gặp thêm **Long Trì** hoặc **Phượng Các** ví như hổ
mọc thêm cánh: thi cử thuận lợi, đỗ đạt cao; công danh sự nghiệp thăng hoa
với quý nhân nâng đỡ liên tục; uy tín và danh tiếng vang xa.`,
  },

  // ============================================================
  // 5. Thiên Khôi tại Mệnh
  // ============================================================
  {
    id: 'thien-khoi-tai-menh',
    title: 'Thiên Khôi tại Mệnh',
    sao: ['Thiên Khôi'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Thiên Khôi cư Mệnh — tức Dương Quý Nhân tọa thủ — mang lại may
mắn cùng quý nhân phù trợ cho chủ mệnh.

Về tướng mạo, đương số có gương mặt khôi ngô tuấn tú, dễ tạo cảm tình ngay từ
cái nhìn đầu tiên. Tính cách thông minh, khéo léo và trọng tình cảm; sống
giản dị tươm tất và có tinh thần trách nhiệm cao, vì thế thường được giao
việc quan trọng, làm trụ cột trong gia đình hay tập thể.

Vì sống thiên về tình cảm, đương số thích hợp quản lý nhóm nhỏ hơn là điều
hành tổ chức lớn.`,

    chiTiet: `## Công danh

Sự nghiệp của chủ mệnh đi theo hướng "thuận buồm xuôi gió", dễ đỗ đạt, nhận
được học bổng và giải thưởng. Quý nhân thường tới giúp, cấp trên cũng có
lòng nâng đỡ nên đường thăng tiến diễn ra thuận lợi.

## Phúc thọ

Thiên Khôi vốn là phúc tinh, mang lại sự hanh thông và may mắn dài lâu cho
đương số.`,
  },

  {
    id: 'thien-khoi-tai-menh-thien-hinh',
    title: 'Thiên Khôi + Thiên Hình tại Mệnh - sẹo trán mặt',
    sao: ['Thiên Khôi'],
    cung: ['Mệnh'],
    ketHop: ['Thiên Hình'],
    doUuTien: 75,
    tomTat: `Thiên Khôi gặp **Thiên Hình** tại Mệnh: do Thiên Khôi chủ phần
đầu, đương số dễ có sẹo, vết bớt hoặc thương tích ở vùng trán mặt.`,
  },

  {
    id: 'thien-khoi-tai-menh-kinh-duong',
    title: 'Thiên Khôi + Kình Dương tại Mệnh - sẹo trán mặt',
    sao: ['Thiên Khôi'],
    cung: ['Mệnh'],
    ketHop: ['Kình Dương'],
    doUuTien: 75,
    tomTat: `Thiên Khôi gặp **Kình Dương** tại Mệnh: do Thiên Khôi chủ phần
đầu, đương số dễ có sẹo, vết bớt hoặc thương tích ở vùng trán mặt.`,
  },

  {
    id: 'thien-khoi-tai-menh-da-la',
    title: 'Thiên Khôi + Đà La tại Mệnh - sẹo trán mặt',
    sao: ['Thiên Khôi'],
    cung: ['Mệnh'],
    ketHop: ['Đà La'],
    doUuTien: 75,
    tomTat: `Thiên Khôi gặp **Đà La** tại Mệnh: do Thiên Khôi chủ phần đầu,
đương số dễ có sẹo, vết bớt hoặc thương tích ở vùng trán mặt.`,
  },

  {
    id: 'thien-khoi-tai-menh-sat-bai',
    title: 'Thiên Khôi + Sát bại tinh tại Mệnh - tai họa đầu não',
    sao: ['Thiên Khôi'],
    cung: ['Mệnh'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 75,
    tomTat: `Thiên Khôi gặp Sát bại tinh (Lục Sát) tại Mệnh: chủ mệnh dễ vấp
phải tai họa bất ngờ liên quan đến phần đầu cùng não bộ, hoặc tai nạn xe
cộ, điện giật.`,
  },

  // ============================================================
  // 6. Thiên Khôi tại Phu Thê
  // ============================================================
  {
    id: 'thien-khoi-tai-phu-the',
    title: 'Thiên Khôi tại Phu Thê',
    sao: ['Thiên Khôi'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `Thiên Khôi tại Phu Thê: hôn phối của đương số xuất thân từ gia
đình nề nếp, danh giá, có học thức và địa vị xã hội.

Vợ chồng hòa thuận, biết tương trợ lẫn nhau, cùng dựng nên sự nghiệp vững
vàng và được nhiều người kính trọng.`,
  },

  {
    id: 'thien-khoi-tai-phu-the-sat',
    title: 'Thiên Khôi + Sát tinh tại Phu Thê - hôn phối khắt khe',
    sao: ['Thiên Khôi'],
    cung: ['Phu Thê'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 73,
    tomTat: `Thiên Khôi gặp Sát tinh (Lục Sát) tại Phu Thê: hôn phối của
đương số khắt khe, nóng nảy và khó tính. Vợ chồng bất hòa, tình cảm lạnh
nhạt, có thể đi đến chia ly. Bạn đời cũng dễ gặp tai nạn hoặc bệnh tật.`,
  },

  // ============================================================
  // 7. Thiên Khôi tại Quan Lộc
  // ============================================================
  {
    id: 'thien-khoi-tai-quan-loc',
    title: 'Thiên Khôi tại Quan Lộc',
    sao: ['Thiên Khôi'],
    cung: ['Quan Lộc'],
    doUuTien: 80,
    tomTat: `Thiên Khôi tại Quan Lộc: công danh sự nghiệp thịnh vượng, đương
số được tín nhiệm và trọng dụng trong cơ quan, đặc biệt phù hợp với việc
quản lý nhóm nhỏ có gắn bó chặt chẽ.

Với tính chất Hỏa, sao tương ứng với các nghề công nghệ, điện máy, kỹ thuật
cao, hoặc y học chuyên về đầu, não và thần kinh.`,
  },

  {
    id: 'thien-khoi-tai-quan-loc-hung',
    title: 'Thiên Khôi + Hung tinh tại Quan Lộc - lắm tài nhiều tật',
    sao: ['Thiên Khôi'],
    cung: ['Quan Lộc'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 75,
    tomTat: `Thiên Khôi gặp Hung tinh (Lục Sát) tại Quan Lộc: sự nghiệp trắc
trở, công danh thất thường — đúng nghĩa "lắm tài nhiều tật". Đương số tuy
giỏi nhưng hay gặp thị phi, bị ganh ghét và cản trở trên đường tiến thân.`,
  },

  // ============================================================
  // 8. Thiên Khôi tại Tử Tức
  // ============================================================
  {
    id: 'thien-khoi-tai-tu-tuc',
    title: 'Thiên Khôi tại Tử Tức',
    sao: ['Thiên Khôi'],
    cung: ['Tử Tức'],
    doUuTien: 78,
    tomTat: `Thiên Khôi tại Tử Tức: con cái của đương số thông minh, hiếu
thuận và có tài năng, đạt nhiều thành công trong học tập cũng như sự
nghiệp.`,
  },

  {
    id: 'thien-khoi-tai-tu-tuc-van-xuong',
    title: 'Thiên Khôi + Văn Xương tại Tử Tức - con cái sáng danh',
    sao: ['Thiên Khôi'],
    cung: ['Tử Tức'],
    ketHop: ['Văn Xương'],
    doUuTien: 73,
    tomTat: `Thiên Khôi gặp **Văn Xương** tại Tử Tức: con cái càng sáng
danh, trở thành chỗ dựa vững chắc cho cha mẹ về sau.`,
  },

  {
    id: 'thien-khoi-tai-tu-tuc-van-khuc',
    title: 'Thiên Khôi + Văn Khúc tại Tử Tức - con cái sáng danh',
    sao: ['Thiên Khôi'],
    cung: ['Tử Tức'],
    ketHop: ['Văn Khúc'],
    doUuTien: 73,
    tomTat: `Thiên Khôi gặp **Văn Khúc** tại Tử Tức: con cái càng sáng
danh, trở thành chỗ dựa vững chắc cho cha mẹ về sau.`,
  },

  {
    id: 'thien-khoi-tai-tu-tuc-tam-hoa',
    title: 'Thiên Khôi + Tam Hóa (Khoa/Quyền/Lộc) tại Tử Tức - con cái sáng danh',
    sao: ['Thiên Khôi'],
    cung: ['Tử Tức'],
    ketHop: ['Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa'],
    doUuTien: 73,
    tomTat: `Thiên Khôi gặp **Hóa Khoa**, **Hóa Quyền** hoặc **Hóa Lộc** tại
Tử Tức: con cái càng sáng danh, trở thành chỗ dựa vững chắc cho cha mẹ về
sau.`,
  },

  {
    id: 'thien-khoi-tai-tu-tuc-sat',
    title: 'Thiên Khôi + Sát tinh tại Tử Tức - con cái trắc trở',
    sao: ['Thiên Khôi'],
    cung: ['Tử Tức'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 73,
    tomTat: `Thiên Khôi gặp Sát tinh (Lục Sát) tại Tử Tức: đường con cái
nhiều trắc trở, công danh của con thăng trầm thất thường.`,
  },

  {
    id: 'thien-khoi-tai-tu-tuc-hinh',
    title: 'Thiên Khôi + Thiên Hình tại Tử Tức - tai nạn thương tật',
    sao: ['Thiên Khôi'],
    cung: ['Tử Tức'],
    ketHop: ['Thiên Hình'],
    doUuTien: 73,
    tomTat: `Thiên Khôi gặp **Thiên Hình** tại Tử Tức: con cái dễ bị tai nạn
thương tật hoặc bệnh nặng, có khi nguy hiểm đến tính mạng.`,
  },

  {
    id: 'thien-khoi-tai-tu-tuc-linh-hoa',
    title: 'Thiên Khôi + Linh Tinh / Hỏa Tinh tại Tử Tức - tai nạn thương tật',
    sao: ['Thiên Khôi'],
    cung: ['Tử Tức'],
    ketHop: ['Linh Tinh', 'Hỏa Tinh'],
    doUuTien: 73,
    tomTat: `Thiên Khôi gặp **Linh Tinh** hoặc **Hỏa Tinh** tại Tử Tức: con
cái dễ bị tai nạn thương tật hoặc bệnh nặng, có khi nguy hiểm đến tính
mạng.`,
  },

  {
    id: 'thien-khoi-tai-tu-tuc-hoa-ky',
    title: 'Thiên Khôi + Hóa Kỵ tại Tử Tức - tai nạn thương tật',
    sao: ['Thiên Khôi'],
    cung: ['Tử Tức'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 73,
    tomTat: `Thiên Khôi gặp **Hóa Kỵ** tại Tử Tức: con cái dễ bị tai nạn
thương tật hoặc bệnh nặng, có khi nguy hiểm đến tính mạng.`,
  },

  // ============================================================
  // 9. Thiên Khôi tại Tài Bạch
  // ============================================================
  {
    id: 'thien-khoi-tai-tai-bach',
    title: 'Thiên Khôi tại Tài Bạch',
    sao: ['Thiên Khôi'],
    cung: ['Tài Bạch'],
    doUuTien: 78,
    tomTat: `Thiên Khôi tại Tài Bạch: đương số kiếm tiền dễ dàng, lại thường
được giao quản lý quỹ chung hoặc nguồn vốn lớn của tập thể.`,
  },

  {
    id: 'thien-khoi-tai-tai-bach-loc-ton',
    title: 'Thiên Khôi + Lộc Tồn tại Tài Bạch - tài lộc ổn định',
    sao: ['Thiên Khôi'],
    cung: ['Tài Bạch'],
    ketHop: ['Lộc Tồn'],
    doUuTien: 73,
    tomTat: `Thiên Khôi gặp **Lộc Tồn** tại Tài Bạch: tiền tài càng ổn định,
chủ mệnh có cơ hội phát triển trong các nghề tài chính, kế toán, ngân hàng
và quản lý tài sản.`,
  },

  {
    id: 'thien-khoi-tai-tai-bach-hoa-loc',
    title: 'Thiên Khôi + Hóa Lộc tại Tài Bạch - tài lộc ổn định',
    sao: ['Thiên Khôi'],
    cung: ['Tài Bạch'],
    ketHop: ['Hóa Lộc'],
    doUuTien: 73,
    tomTat: `Thiên Khôi gặp **Hóa Lộc** tại Tài Bạch: tiền tài càng ổn định,
chủ mệnh có cơ hội phát triển trong các nghề tài chính, kế toán, ngân hàng
và quản lý tài sản.`,
  },

  {
    id: 'thien-khoi-tai-tai-bach-sat',
    title: 'Thiên Khôi + Sát tinh tại Tài Bạch - hao tài góp vốn',
    sao: ['Thiên Khôi'],
    cung: ['Tài Bạch'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 73,
    tomTat: `Thiên Khôi gặp Sát tinh (Lục Sát) tại Tài Bạch: tiền đến rồi đi
nhanh, đương số phải vất vả mới có tài lộc, lại dễ mắc sai lầm trong quản
lý tài chính. Việc làm ăn chung, góp vốn dễ sinh mâu thuẫn và thiệt hại.`,
  },

  // ============================================================
  // 10. Thiên Khôi tại Thiên Di
  // ============================================================
  {
    id: 'thien-khoi-tai-thien-di',
    title: 'Thiên Khôi tại Thiên Di',
    sao: ['Thiên Khôi'],
    cung: ['Thiên Di'],
    doUuTien: 78,
    tomTat: `Thiên Khôi tại Thiên Di đóng vai trò như "lá bùa hộ mệnh": ra
ngoài, đương số gặp nhiều may mắn, thường có quý nhân giúp đỡ. Đương số có
cơ hội tiếp xúc với bậc quyền cao chức trọng, người có học thức cùng tài
năng vượt trội.

Trường hợp **hãm** địa tại Thiên Di lại khác: chủ mệnh dễ vấp sóng gió, tai
nạn bất ngờ, có nguy cơ bị kẻ xấu lợi dụng hay ganh ghét. Đương số cần thận
trọng và hạn chế tin người lạ.`,
  },

  // ============================================================
  // 11. Thiên Khôi tại Phụ Mẫu
  // ============================================================
  {
    id: 'thien-khoi-tai-phu-mau',
    title: 'Thiên Khôi tại Phụ Mẫu',
    sao: ['Thiên Khôi'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Thiên Khôi tại Phụ Mẫu: cha mẹ của đương số là con trưởng hoặc
người gánh vác trách nhiệm lớn trong gia đình, có học thức và được quý nhân
nâng đỡ, cấp trên trọng dụng — sự nghiệp hanh thông, có vị thế xã hội.

Khi sao **hãm** địa, cha mẹ trở nên khắt khe, nóng nảy và áp đặt tư tưởng:
tình cảm cha mẹ con cái xa cách.`,
  },

  {
    id: 'thien-khoi-tai-phu-mau-ta-huu',
    title: 'Thiên Khôi + Tả Phù / Hữu Bật tại Phụ Mẫu - uy tín bền vững',
    sao: ['Thiên Khôi'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Tả Phù', 'Hữu Bật'],
    doUuTien: 70,
    tomTat: `Thiên Khôi gặp **Tả Phù** hoặc **Hữu Bật** tại Phụ Mẫu: uy tín
của cha mẹ càng bền vững, con cái cũng được hưởng phúc ấm sâu dày.`,
  },

  {
    id: 'thien-khoi-tai-phu-mau-xuong-khuc',
    title: 'Thiên Khôi + Văn Xương / Văn Khúc tại Phụ Mẫu - uy tín bền vững',
    sao: ['Thiên Khôi'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Văn Xương', 'Văn Khúc'],
    doUuTien: 70,
    tomTat: `Thiên Khôi gặp **Văn Xương** hoặc **Văn Khúc** tại Phụ Mẫu: uy
tín của cha mẹ càng bền vững, con cái cũng được hưởng phúc ấm sâu dày.`,
  },

  {
    id: 'thien-khoi-tai-phu-mau-tam-hoa',
    title: 'Thiên Khôi + Tam Hóa (Khoa/Quyền/Lộc) tại Phụ Mẫu - uy tín bền vững',
    sao: ['Thiên Khôi'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa'],
    doUuTien: 70,
    tomTat: `Thiên Khôi gặp **Hóa Khoa**, **Hóa Quyền** hoặc **Hóa Lộc** tại
Phụ Mẫu: uy tín của cha mẹ càng bền vững, con cái cũng được hưởng phúc ấm
sâu dày.`,
  },

  {
    id: 'thien-khoi-tai-phu-mau-kinh-da',
    title: 'Thiên Khôi + Kình Dương / Đà La tại Phụ Mẫu - kiện tụng thị phi',
    sao: ['Thiên Khôi'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 70,
    tomTat: `Thiên Khôi gặp **Kình Dương** hoặc **Đà La** tại Phụ Mẫu: gia
đạo vướng kiện tụng thị phi, không được yên ấm.`,
  },

  {
    id: 'thien-khoi-tai-phu-mau-hoa-ky',
    title: 'Thiên Khôi + Hóa Kỵ tại Phụ Mẫu - kiện tụng thị phi',
    sao: ['Thiên Khôi'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `Thiên Khôi gặp **Hóa Kỵ** tại Phụ Mẫu: gia đạo vướng kiện tụng
thị phi, không được yên ấm.`,
  },

  {
    id: 'thien-khoi-tai-phu-mau-khong-kiep',
    title: 'Thiên Khôi + Địa Không / Địa Kiếp tại Phụ Mẫu - kiện tụng thị phi',
    sao: ['Thiên Khôi'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Thiên Khôi gặp **Địa Không** hoặc **Địa Kiếp** tại Phụ Mẫu: gia
đạo vướng kiện tụng thị phi, không được yên ấm.`,
  },

  // ============================================================
  // 12. Thiên Khôi tại Phúc Đức
  // ============================================================
  {
    id: 'thien-khoi-tai-phuc-duc',
    title: 'Thiên Khôi tại Phúc Đức',
    sao: ['Thiên Khôi'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `Thiên Khôi tại Phúc Đức: dòng họ của đương số phúc lớn, sinh ra
nhiều người tài năng, học hành đỗ đạt cao, mang danh giá cho gia tộc. Chủ
mệnh được che chở vô hình từ tổ tiên cùng thần linh nên dễ vượt qua khó
khăn.

Khi sao **hãm** địa, phúc khí giảm sút: dòng họ dễ rơi vào cảnh đoản mệnh,
tai nạn; gia đạo bất an, hay vướng thị phi kiện tụng.`,
  },

  {
    id: 'thien-khoi-tai-phuc-duc-ta-huu',
    title: 'Thiên Khôi + Tả Phù / Hữu Bật tại Phúc Đức - phúc khí vững bền',
    sao: ['Thiên Khôi'],
    cung: ['Phúc Đức'],
    ketHop: ['Tả Phù', 'Hữu Bật'],
    doUuTien: 73,
    tomTat: `Thiên Khôi gặp **Tả Phù** hoặc **Hữu Bật** tại Phúc Đức: phúc
khí vững bền, con cháu vinh hiển, gia đình giữ được nề nếp uy tín.`,
  },

  {
    id: 'thien-khoi-tai-phuc-duc-xuong-khuc',
    title: 'Thiên Khôi + Văn Xương / Văn Khúc tại Phúc Đức - phúc khí vững bền',
    sao: ['Thiên Khôi'],
    cung: ['Phúc Đức'],
    ketHop: ['Văn Xương', 'Văn Khúc'],
    doUuTien: 73,
    tomTat: `Thiên Khôi gặp **Văn Xương** hoặc **Văn Khúc** tại Phúc Đức:
phúc khí vững bền, con cháu vinh hiển, gia đình giữ được nề nếp uy tín.`,
  },

  {
    id: 'thien-khoi-tai-phuc-duc-tam-hoa',
    title: 'Thiên Khôi + Tam Hóa (Khoa/Quyền/Lộc) tại Phúc Đức - phúc khí vững bền',
    sao: ['Thiên Khôi'],
    cung: ['Phúc Đức'],
    ketHop: ['Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa'],
    doUuTien: 73,
    tomTat: `Thiên Khôi gặp **Hóa Khoa**, **Hóa Quyền** hoặc **Hóa Lộc** tại
Phúc Đức: phúc khí vững bền, con cháu vinh hiển, gia đình giữ được nề nếp
uy tín.`,
  },

  {
    id: 'thien-khoi-tai-phuc-duc-kinh-da',
    title: 'Thiên Khôi Hãm + Kình / Đà tại Phúc Đức - phúc khí giảm',
    sao: ['Thiên Khôi'],
    cung: ['Phúc Đức'],
    chi: ['Hợi', 'Tý', 'Sửu', 'Mùi'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 73,
    tomTat: `Thiên Khôi **Hãm** gặp **Kình Dương** hoặc **Đà La** tại Phúc
Đức: phúc khí suy giảm, dòng họ dễ rơi vào cảnh đoản mệnh, tai nạn; gia đạo
bất an, hay vướng thị phi kiện tụng.`,
  },

  {
    id: 'thien-khoi-tai-phuc-duc-hoa-ky',
    title: 'Thiên Khôi Hãm + Hóa Kỵ tại Phúc Đức - phúc khí giảm',
    sao: ['Thiên Khôi'],
    cung: ['Phúc Đức'],
    chi: ['Hợi', 'Tý', 'Sửu', 'Mùi'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 73,
    tomTat: `Thiên Khôi **Hãm** gặp **Hóa Kỵ** tại Phúc Đức: phúc khí suy
giảm, dòng họ dễ rơi vào cảnh đoản mệnh, tai nạn; gia đạo bất an, hay vướng
thị phi kiện tụng.`,
  },

  {
    id: 'thien-khoi-tai-phuc-duc-khong-kiep',
    title: 'Thiên Khôi Hãm + Địa Không / Địa Kiếp tại Phúc Đức - phúc khí giảm',
    sao: ['Thiên Khôi'],
    cung: ['Phúc Đức'],
    chi: ['Hợi', 'Tý', 'Sửu', 'Mùi'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 73,
    tomTat: `Thiên Khôi **Hãm** gặp **Địa Không** hoặc **Địa Kiếp** tại Phúc
Đức: phúc khí suy giảm, dòng họ dễ rơi vào cảnh đoản mệnh, tai nạn; gia đạo
bất an, hay vướng thị phi kiện tụng.`,
  },

  {
    id: 'thien-khoi-tai-phuc-duc-hinh',
    title: 'Thiên Khôi Hãm + Thiên Hình tại Phúc Đức - phúc khí giảm',
    sao: ['Thiên Khôi'],
    cung: ['Phúc Đức'],
    chi: ['Hợi', 'Tý', 'Sửu', 'Mùi'],
    ketHop: ['Thiên Hình'],
    doUuTien: 73,
    tomTat: `Thiên Khôi **Hãm** gặp **Thiên Hình** tại Phúc Đức: phúc khí
suy giảm, dòng họ dễ rơi vào cảnh đoản mệnh, tai nạn; gia đạo bất an, hay
vướng thị phi kiện tụng.`,
  },

  {
    id: 'thien-khoi-tai-phuc-duc-phuc-binh',
    title: 'Thiên Khôi Hãm + Phục Binh tại Phúc Đức - phúc khí giảm',
    sao: ['Thiên Khôi'],
    cung: ['Phúc Đức'],
    chi: ['Hợi', 'Tý', 'Sửu', 'Mùi'],
    ketHop: ['Phục Binh'],
    doUuTien: 73,
    tomTat: `Thiên Khôi **Hãm** gặp **Phục Binh** tại Phúc Đức: phúc khí
suy giảm, dòng họ dễ rơi vào cảnh đoản mệnh, tai nạn; gia đạo bất an, hay
vướng thị phi kiện tụng.`,
  },

  // ============================================================
  // 13. Thiên Khôi tại Điền Trạch
  // ============================================================
  {
    id: 'thien-khoi-tai-dien-trach',
    title: 'Thiên Khôi tại Điền Trạch',
    sao: ['Thiên Khôi'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Thiên Khôi tại Điền Trạch khi gặp cát tinh: nhà cao cửa rộng,
đương số sở hữu nhiều bất động sản; trong nhà có nhiều giấy tờ chứng nhận,
bằng cấp và khen thưởng.

Hàng xóm quý mến chủ mệnh, vì thế đương số dễ đảm nhận vai trò quản lý cộng
đồng nhỏ — chẳng hạn tổ trưởng dân phố hay ban quản lý khu nhà.`,
  },

  {
    id: 'thien-khoi-tai-dien-trach-kinh-da',
    title: 'Thiên Khôi + Kình Dương / Đà La tại Điền Trạch - tranh chấp nhà',
    sao: ['Thiên Khôi'],
    cung: ['Điền Trạch'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 70,
    tomTat: `Thiên Khôi gặp **Kình Dương** hoặc **Đà La** tại Điền Trạch:
nhà cửa hay xảy ra tranh chấp, đương số phải thay đổi chỗ ở nhiều lần. Gia
đình thiếu hòa thuận, nề nếp gia quy lỏng lẻo.`,
  },

  {
    id: 'thien-khoi-tai-dien-trach-hoa-ky',
    title: 'Thiên Khôi + Hóa Kỵ tại Điền Trạch - tranh chấp nhà',
    sao: ['Thiên Khôi'],
    cung: ['Điền Trạch'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `Thiên Khôi gặp **Hóa Kỵ** tại Điền Trạch: nhà cửa hay xảy ra
tranh chấp, đương số phải thay đổi chỗ ở nhiều lần. Gia đình thiếu hòa
thuận, nề nếp gia quy lỏng lẻo.`,
  },

  // ============================================================
  // 14. Thiên Khôi tại Nô Bộc
  // ============================================================
  {
    id: 'thien-khoi-tai-no-boc',
    title: 'Thiên Khôi tại Nô Bộc',
    sao: ['Thiên Khôi'],
    cung: ['Nô Bộc'],
    doUuTien: 78,
    tomTat: `Thiên Khôi tại Nô Bộc: đương số được bạn bè, học trò và cộng sự
trợ giúp đắc lực. Chủ mệnh thường kết giao với tầng lớp trí thức, quan chức
và quý nhân, nhờ đó dễ được tiến cử cùng nâng đỡ trong sự nghiệp.`,
  },

  {
    id: 'thien-khoi-tai-no-boc-ta-huu',
    title: 'Thiên Khôi + Tả Phù / Hữu Bật tại Nô Bộc - quan hệ bền vững',
    sao: ['Thiên Khôi'],
    cung: ['Nô Bộc'],
    ketHop: ['Tả Phù', 'Hữu Bật'],
    doUuTien: 73,
    tomTat: `Thiên Khôi gặp **Tả Phù** hoặc **Hữu Bật** tại Nô Bộc: quan hệ
xã hội bền vững, đương số có thể trở thành người có ảnh hưởng, hoặc được
chính bạn bè và môn sinh làm rạng danh.`,
  },

  {
    id: 'thien-khoi-tai-no-boc-xuong-khuc',
    title: 'Thiên Khôi + Văn Xương / Văn Khúc tại Nô Bộc - quan hệ bền vững',
    sao: ['Thiên Khôi'],
    cung: ['Nô Bộc'],
    ketHop: ['Văn Xương', 'Văn Khúc'],
    doUuTien: 73,
    tomTat: `Thiên Khôi gặp **Văn Xương** hoặc **Văn Khúc** tại Nô Bộc: quan
hệ xã hội bền vững, đương số có thể trở thành người có ảnh hưởng, hoặc được
chính bạn bè và môn sinh làm rạng danh.`,
  },

  {
    id: 'thien-khoi-tai-no-boc-tam-hoa',
    title: 'Thiên Khôi + Tam Hóa (Khoa/Quyền/Lộc) tại Nô Bộc - quan hệ bền vững',
    sao: ['Thiên Khôi'],
    cung: ['Nô Bộc'],
    ketHop: ['Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa'],
    doUuTien: 73,
    tomTat: `Thiên Khôi gặp **Hóa Khoa**, **Hóa Quyền** hoặc **Hóa Lộc** tại
Nô Bộc: quan hệ xã hội bền vững, đương số có thể trở thành người có ảnh
hưởng, hoặc được chính bạn bè và môn sinh làm rạng danh.`,
  },

  {
    id: 'thien-khoi-tai-no-boc-kinh-da',
    title: 'Thiên Khôi + Kình Dương / Đà La tại Nô Bộc - bạn bè phản bội',
    sao: ['Thiên Khôi'],
    cung: ['Nô Bộc'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 73,
    tomTat: `Thiên Khôi gặp **Kình Dương** hoặc **Đà La** tại Nô Bộc: bạn bè
cộng sự trở thành gánh nặng, đương số dễ bị hãm hại, phản bội, lừa lọc, từ
đó tổn thất cả danh lẫn lợi.`,
  },

  {
    id: 'thien-khoi-tai-no-boc-hoa-ky',
    title: 'Thiên Khôi + Hóa Kỵ tại Nô Bộc - bạn bè phản bội',
    sao: ['Thiên Khôi'],
    cung: ['Nô Bộc'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 73,
    tomTat: `Thiên Khôi gặp **Hóa Kỵ** tại Nô Bộc: bạn bè cộng sự trở thành
gánh nặng, đương số dễ bị hãm hại, phản bội, lừa lọc, từ đó tổn thất cả
danh lẫn lợi.`,
  },

  {
    id: 'thien-khoi-tai-no-boc-phuc-binh',
    title: 'Thiên Khôi + Phục Binh tại Nô Bộc - bạn bè phản bội',
    sao: ['Thiên Khôi'],
    cung: ['Nô Bộc'],
    ketHop: ['Phục Binh'],
    doUuTien: 73,
    tomTat: `Thiên Khôi gặp **Phục Binh** tại Nô Bộc: bạn bè cộng sự trở
thành gánh nặng, đương số dễ bị hãm hại, phản bội, lừa lọc, từ đó tổn thất
cả danh lẫn lợi.`,
  },

  // ============================================================
  // 15. Thiên Khôi tại Tật Ách
  // ============================================================
  {
    id: 'thien-khoi-tai-tat-ach',
    title: 'Thiên Khôi tại Tật Ách',
    sao: ['Thiên Khôi'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `Thiên Khôi tại Tật Ách khi đắc địa: sức khỏe của đương số ổn
định; lúc ốm đau gặp được thầy giỏi thuốc hay nên dễ qua khỏi.

Bệnh thường gặp liên quan đến đầu, mắt và vai — phần lớn cứu chữa kịp thời
mà không để lại di chứng nặng.`,
  },

  {
    id: 'thien-khoi-tai-tat-ach-hinh',
    title: 'Thiên Khôi + Thiên Hình tại Tật Ách - thương tích nặng',
    sao: ['Thiên Khôi'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Hình'],
    doUuTien: 73,
    tomTat: `Thiên Khôi gặp **Thiên Hình** tại Tật Ách: chủ mệnh có thương
tích nặng, dễ mang bệnh mãn tính kéo dài.`,
  },

  {
    id: 'thien-khoi-tai-tat-ach-kinh-da',
    title: 'Thiên Khôi + Kình Dương / Đà La tại Tật Ách - thương tích nặng',
    sao: ['Thiên Khôi'],
    cung: ['Tật Ách'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 73,
    tomTat: `Thiên Khôi gặp **Kình Dương** hoặc **Đà La** tại Tật Ách: chủ
mệnh có thương tích nặng, dễ mang bệnh mãn tính kéo dài.`,
  },

  {
    id: 'thien-khoi-tai-tat-ach-hoa-ky',
    title: 'Thiên Khôi + Hóa Kỵ tại Tật Ách - thương tích nặng',
    sao: ['Thiên Khôi'],
    cung: ['Tật Ách'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 73,
    tomTat: `Thiên Khôi gặp **Hóa Kỵ** tại Tật Ách: chủ mệnh có thương tích
nặng, dễ mang bệnh mãn tính kéo dài.`,
  },

  {
    id: 'thien-khoi-tai-tat-ach-khong-kiep',
    title: 'Thiên Khôi + Địa Không / Địa Kiếp tại Tật Ách - thương tích nặng',
    sao: ['Thiên Khôi'],
    cung: ['Tật Ách'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 73,
    tomTat: `Thiên Khôi gặp **Địa Không** hoặc **Địa Kiếp** tại Tật Ách: chủ
mệnh có thương tích nặng, dễ mang bệnh mãn tính kéo dài.`,
  },

  {
    id: 'thien-khoi-tai-tat-ach-linh-hoa',
    title: 'Thiên Khôi + Linh Tinh / Hỏa Tinh tại Tật Ách - tai nạn điện giật',
    sao: ['Thiên Khôi'],
    cung: ['Tật Ách'],
    ketHop: ['Linh Tinh', 'Hỏa Tinh'],
    doUuTien: 73,
    tomTat: `Thiên Khôi gặp **Linh Tinh** hoặc **Hỏa Tinh** tại Tật Ách:
đương số dễ vướng tai nạn điện giật, hỏa hoạn, gươm đao, súng đạn. Tinh
thần bất mãn, chán đời, có xu hướng ẩn dật.`,
  },

  {
    id: 'thien-khoi-tai-tat-ach-thien-rieu',
    title: 'Thiên Khôi + Thiên Riêu tại Tật Ách - tinh thần bất mãn',
    sao: ['Thiên Khôi'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Riêu'],
    doUuTien: 73,
    tomTat: `Thiên Khôi gặp **Thiên Riêu** tại Tật Ách: đương số dễ vướng
tai nạn điện giật, hỏa hoạn, gươm đao, súng đạn. Tinh thần bất mãn, chán
đời, có xu hướng ẩn dật.`,
  },

  // ============================================================
  // 16. Thiên Khôi tại Huynh Đệ
  // ============================================================
  {
    id: 'thien-khoi-tai-huynh-de',
    title: 'Thiên Khôi tại Huynh Đệ',
    sao: ['Thiên Khôi'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Thiên Khôi tại Huynh Đệ: anh chị em của đương số giỏi giang, có
học thức và địa vị, mang danh giá cho gia đình. Anh em thương yêu, đùm bọc
và hỗ trợ lẫn nhau.

Chủ mệnh thường có nhiều anh hoặc chị; gia đình đông đủ, hòa thuận.`,
  },

  {
    id: 'thien-khoi-tai-huynh-de-sat',
    title: 'Thiên Khôi + Sát tinh tại Huynh Đệ - anh em khó hòa hợp',
    sao: ['Thiên Khôi'],
    cung: ['Huynh Đệ'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `Thiên Khôi gặp Sát tinh (Lục Sát) tại Huynh Đệ: anh chị em khó
hòa hợp với nhau, mỗi người đi theo một chí hướng riêng.`,
  },

  {
    id: 'thien-khoi-tai-huynh-de-kinh-da',
    title: 'Thiên Khôi + Kình Dương / Đà La tại Huynh Đệ - anh em yểu mệnh',
    sao: ['Thiên Khôi'],
    cung: ['Huynh Đệ'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 70,
    tomTat: `Thiên Khôi gặp **Kình Dương** hoặc **Đà La** tại Huynh Đệ: anh
chị em có nguy cơ tai nạn, bệnh tật, yểu mệnh; đương số phải tự thân vận
động.`,
  },

  {
    id: 'thien-khoi-tai-huynh-de-hoa-ky',
    title: 'Thiên Khôi + Hóa Kỵ tại Huynh Đệ - anh em yểu mệnh',
    sao: ['Thiên Khôi'],
    cung: ['Huynh Đệ'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `Thiên Khôi gặp **Hóa Kỵ** tại Huynh Đệ: anh chị em có nguy cơ
tai nạn, bệnh tật, yểu mệnh; đương số phải tự thân vận động.`,
  },
];
