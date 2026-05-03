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
    tomTat: `**Thiên Khôi** (tên gọi khác: **Dương Quý Nhân**) thuộc bộ **Lục Cát
Tinh**, **Nam Đẩu Tinh**, ngũ hành **Hỏa** (Dương Hỏa đới Kim).

**Hóa khí:** **Quý Tinh**.

**Đặc tính:** **may mắn, khoa giáp, quyền tước**, sự **giúp đỡ trực tiếp từ
bên ngoài**.

**Cùng với Thiên Việt** = bộ **"Khôi Việt"** — gọi là **"Thiên Ất Quý Nhân"**,
biểu tượng của **quý nhân phù trợ, khoa giáp, văn chương, quyền hành chức tước**.`,

    chiTiet: `## Biểu tượng

- **Phần cơ thể:** Thiên Khôi = **ĐẦU** (Thiên Việt = vai)
- **Vật dụng:** Khôi = **văn bằng, nghị định, giấy khen** (Việt = bút nghiên)
- **Tang chế:** Khôi Việt chỉ **thầy cúng, ông sư, ông cha**, người làm lễ tang

## So sánh Thiên Khôi vs Thiên Việt

| | Thiên Khôi | Thiên Việt |
|---|---|---|
| **Tên khác** | Dương Quý Nhân | Âm Quý Nhân |
| **Ngũ hành** | Dương Hỏa **đới Kim** | Âm Hỏa **đới Mộc** |
| **Cơ thể** | Đầu | Vai |
| **Quý nhân** | **Đàn ông** quyền thế | **Phụ nữ** cất nhắc |
| **Tính** | Mềm mỏng, tình nghĩa | Nghiêm khắc, lý trí |
| **Vai vế** | **Con trưởng** | **Thứ đoạt trưởng** |
| **Sức mạnh** | **Mạnh hơn Việt** (về tài năng, quyền uy) | |

- "Khôi" theo nghĩa Hán Việt là **"kẻ làm đầu sỏ cả một đảng"**.`,
  },

  // ============================================================
  // 2. Khôi Việt - vị trí miếu hãm & nguyên tắc Tuần Triệt
  // ============================================================
  {
    id: 'khoi-viet-vi-tri-mieu-ham',
    title: 'Khôi Việt - Vị trí miếu hãm & nguyên tắc Tuần Triệt',
    sao: ['Thiên Khôi', 'Thiên Việt'],
    doUuTien: 35,
    tomTat: `**NGUYÊN TẮC ĐẶC BIỆT về Khôi Việt:**

**Vị trí miếu hãm** (cả Khôi và Việt giống nhau):
- **Miếu vượng:** **Dần: Ngọ** (cung ban ngày)
- **Bình thường:** Thân, Dậu (hành Kim)
- **Hãm địa:** Hợi, Tý (Thủy), Sửu, Mùi (Thổ)
- **KHÔNG AN tại Thìn / Tuất** (cung La Võng)

**Nguyên tắc Tuần Triệt ĐẢO NGƯỢC:**
- **Khôi Việt MIẾU VƯỢNG:** **KHÔNG nên gặp Tuần Triệt** — như bằng cấp **bị
  rách nát**: khoa trường thi cử lận đận, không đỗ cao
- **Khôi Việt HÃM ĐỊA:** **CẦN Tuần Triệt** — vẫn lận đận ban đầu nhưng cuối
  cùng có được bằng cấp`,

    chiTiet: `## Lý do vị trí miếu hãm

**Cung ban ngày (Dần: Ngọ):** giống như **bằng cấp được đem ra cho công chúng
xem**: là người **lãnh đạo được mọi người biết đến**. Về ngũ hành: cung sinh
sao hoặc đồng hành.

**Cung ban đêm hoặc Sửu Mùi:** ví như **bằng cấp không được treo ra ngoài**
ít được người biết đến: người có **uy quyền ngấm ngầm**.

Về ngũ hành ở cung ban đêm: hành sao khắc hành cung (Hỏa khắc Kim) hoặc hành
cung khắc hành sao (Thủy khắc Hỏa) hoặc hành sao sinh hành cung (Hỏa sinh Thổ).

## Tại sao không an ở Thìn Tuất

Hai cung **Thìn Tuất** là **La Võng** (Thiên La - Địa Võng): Khôi Việt vốn
chủ về quý nhân giúp đỡ: bị La Võng giam hãm thì mất ý nghĩa: **không an**.

## Đủ bộ mới mạnh

**Khôi Việt phải đủ cả 2 sao mới mạnh** — nếu **đứng một mình + hãm địa**
thì giảm thiểu rất nhiều ý nghĩa.`,
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
    tomTat: `**Khôi Việt thủ chiếu Mệnh** = cách **"Ư gia quốc vi nhân trưởng"**
— **trong nhà ngoài nước đều làm người đứng đầu**.

Dù **hãm địa cũng vẫn trội hơn người bình thường** — luôn được **mọi người nể
phục, có uy, đứng đầu**.

- **Ở nhà:** đứng đầu, được cha mẹ thương yêu, **con trưởng** (nếu là Khôi) hoặc
  **thứ đoạt trưởng** (nếu là Việt)
- **Ra ngoài:** tốt thì **lãnh đạo thiên hạ**, trưởng cơ quan ban ngành; xấu
  cũng được **người nể phục, tiếng nói có trọng lượng**, dễ kề cận với thượng cấp

**Cần cho lá số quý cách:** Tử Phủ hoặc Nhật Nguyệt **rất cần** Khôi Việt
(Hỏa sinh Thổ) — thiếu Khôi Việt thì thiếu thiên uy, không được kính nể.`,

    chiTiet: `## Tính cách Khôi Việt thủ chiếu Mệnh

- **Thông minh, có năng khiếu đặc biệt**: thường giỏi về một điều gì đó
- Có **mưu cơ, quyền biến**, **tài lãnh đạo, tổ chức, chỉ huy**
- **Đầu óc không chịu thua người**, muốn hơn người, có **óc lãnh tụ**, tính
  thích chỉ huy
- **Tự ái rất cao**, không thích bị nói nặng nhẹ, không chịu được lời nói nặng nhẹ
- **Không thù dai, chấp nhất, nhỏ mọn** — dễ tha thứ, **khoáng đạt, cao thượng**
- Khi có **Không Kiếp** (đặc biệt hãm địa): dễ **ăn miếng trả miếng** do bị
  chạm tự ái

## Đặt nặng uy tín cá nhân

Khi giao du với người **lớn tuổi hoặc có chức quyền tiếng tăm**: thường có
lợi, được giúp đỡ.

## Khôi Việt giải hạn xấu

**Mệnh có Khôi Việt + gặp hạn xấu:** được người **giúp đỡ** (thường là người có
chức có quyền): Khôi Việt **GIẢI HẠN XẤU rất mạnh**.

## So sánh Khôi vs Việt

Khi **cùng đắc/hãm như nhau:** **tài năng, quyền uy của Khôi MẠNH HƠN Việt**.`,
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
    tomTat: `**Cặp Khôi Việt là một trong những tổ hợp SÁNG NHẤT** trong tử vi
— mang **phúc lộc dồi dào, công danh rực rỡ, phúc thọ song toàn**.

**Đặc điểm bổ sung lẫn nhau:**
- **Thiên Khôi:** mềm mỏng, giàu tình nghĩa: quý nhân **nam giới** quyền thế giúp đỡ
- **Thiên Việt:** nghiêm khắc, lý trí: quý nhân **nữ giới** cất nhắc

- Phối hợp tạo thành **bộ song quý nhân** — vừa tình cảm vừa lý trí, vừa mềm
mỏng vừa cứng rắn: giúp bản mệnh **cân bằng** để tiến thân.`,
  },

  {
    id: 'khoi-viet-song-quy-nhan-ta-huu',
    title: 'Khôi Việt + Tả Phù / Hữu Bật - hổ mọc thêm cánh',
    sao: ['Thiên Khôi', 'Thiên Việt'],
    ketHop: ['Tả Phù', 'Hữu Bật'],
    doUuTien: 55,
    tomTat: `**Khôi Việt + Tả Phù / Hữu Bật** = **"hổ mọc thêm cánh"**:
- Thi cử thuận lợi, **đỗ đạt cao**
- Công danh sự nghiệp **thăng hoa**, luôn có quý nhân nâng đỡ
- Uy tín, **danh tiếng vang xa**`,
  },

  {
    id: 'khoi-viet-song-quy-nhan-xuong-khuc',
    title: 'Khôi Việt + Văn Xương / Văn Khúc - hổ mọc thêm cánh',
    sao: ['Thiên Khôi', 'Thiên Việt'],
    ketHop: ['Văn Xương', 'Văn Khúc'],
    doUuTien: 55,
    tomTat: `**Khôi Việt + Văn Xương / Văn Khúc** = **"hổ mọc thêm cánh"**:
- Thi cử thuận lợi, **đỗ đạt cao**
- Công danh sự nghiệp **thăng hoa**, luôn có quý nhân nâng đỡ
- Uy tín, **danh tiếng vang xa**`,
  },

  {
    id: 'khoi-viet-song-quy-nhan-quang-quy',
    title: 'Khôi Việt + Ân Quang / Thiên Quý - hổ mọc thêm cánh',
    sao: ['Thiên Khôi', 'Thiên Việt'],
    ketHop: ['Ân Quang', 'Thiên Quý'],
    doUuTien: 55,
    tomTat: `**Khôi Việt + Ân Quang / Thiên Quý** = **"hổ mọc thêm cánh"**:
- Thi cử thuận lợi, **đỗ đạt cao**
- Công danh sự nghiệp **thăng hoa**, luôn có quý nhân nâng đỡ
- Uy tín, **danh tiếng vang xa**`,
  },

  {
    id: 'khoi-viet-song-quy-nhan-long-phuong',
    title: 'Khôi Việt + Long Trì / Phượng Các - hổ mọc thêm cánh',
    sao: ['Thiên Khôi', 'Thiên Việt'],
    ketHop: ['Long Trì', 'Phượng Các'],
    doUuTien: 55,
    tomTat: `**Khôi Việt + Long Trì / Phượng Các** = **"hổ mọc thêm cánh"**:
- Thi cử thuận lợi, **đỗ đạt cao**
- Công danh sự nghiệp **thăng hoa**, luôn có quý nhân nâng đỡ
- Uy tín, **danh tiếng vang xa**`,
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
    tomTat: `**Thiên Khôi cư Mệnh** — **"Dương Quý Nhân"** mang lại **may mắn,
quý nhân phù trợ**.

**Tướng mạo:** gương mặt **khôi ngô, tuấn tú**, dễ tạo cảm tình ngay từ cái nhìn
đầu tiên.

**Tính cách:** **thông minh, khéo léo, trọng tình cảm**, sống giản dị tươm tất,
**tinh thần trách nhiệm cao**: thường được giao việc quan trọng, **trụ cột**
trong gia đình hay tập thể.

Vì sống thiên về tình cảm: thích hợp **quản lý nhóm nhỏ** thay vì tổ chức lớn.`,

    chiTiet: `## Công danh

- Sự nghiệp **"thuận buồm xuôi gió"**, dễ **đỗ đạt, nhận học bổng, giải thưởng**
- Thường được **quý nhân trợ giúp**, **cấp trên nâng đỡ**: thăng tiến thuận lợi

## Phúc thọ

Thiên Khôi vốn là **phúc tinh** mang lại sự **hanh thông, may mắn**.`,
  },

  {
    id: 'thien-khoi-tai-menh-thien-hinh',
    title: 'Thiên Khôi + Thiên Hình tại Mệnh - sẹo trán mặt',
    sao: ['Thiên Khôi'],
    cung: ['Mệnh'],
    ketHop: ['Thiên Hình'],
    doUuTien: 75,
    tomTat: `**Thiên Khôi + Thiên Hình tại Mệnh:** vì Thiên Khôi chủ phần
**đầu**: dễ có **sẹo, vết bớt, thương tích ở trán mặt**.`,
  },

  {
    id: 'thien-khoi-tai-menh-kinh-duong',
    title: 'Thiên Khôi + Kình Dương tại Mệnh - sẹo trán mặt',
    sao: ['Thiên Khôi'],
    cung: ['Mệnh'],
    ketHop: ['Kình Dương'],
    doUuTien: 75,
    tomTat: `**Thiên Khôi + Kình Dương tại Mệnh:** vì Thiên Khôi chủ phần
**đầu**: dễ có **sẹo, vết bớt, thương tích ở trán mặt**.`,
  },

  {
    id: 'thien-khoi-tai-menh-da-la',
    title: 'Thiên Khôi + Đà La tại Mệnh - sẹo trán mặt',
    sao: ['Thiên Khôi'],
    cung: ['Mệnh'],
    ketHop: ['Đà La'],
    doUuTien: 75,
    tomTat: `**Thiên Khôi + Đà La tại Mệnh:** vì Thiên Khôi chủ phần
**đầu**: dễ có **sẹo, vết bớt, thương tích ở trán mặt**.`,
  },

  {
    id: 'thien-khoi-tai-menh-sat-bai',
    title: 'Thiên Khôi + Sát bại tinh tại Mệnh - tai họa đầu não',
    sao: ['Thiên Khôi'],
    cung: ['Mệnh'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 75,
    tomTat: `**Thiên Khôi + Sát bại tinh (Lục Sát) tại Mệnh:** dễ gặp **tai
họa bất ngờ liên quan đến phần đầu, não bộ** hoặc **tai nạn xe cộ, điện giật**.`,
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
    tomTat: `**Thiên Khôi tại Phu Thê:** người hôn phối xuất thân từ **gia đình nề
nếp, danh giá**, **có học thức và địa vị**.

Vợ chồng **hòa thuận, tương trợ lẫn nhau**, có sự nghiệp vững vàng, được
nhiều người kính trọng.`,
  },

  {
    id: 'thien-khoi-tai-phu-the-sat',
    title: 'Thiên Khôi + Sát tinh tại Phu Thê - hôn phối khắt khe',
    sao: ['Thiên Khôi'],
    cung: ['Phu Thê'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 73,
    tomTat: `**Thiên Khôi + Sát tinh (Lục Sát) tại Phu Thê:** hôn phối **khắt
khe, nóng nảy, khó tính**: vợ chồng bất hòa, tình cảm lạnh nhạt, có thể **chia
ly**. Bạn đời có thể gặp **tai nạn, bệnh tật**.`,
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
    tomTat: `**Thiên Khôi tại Quan Lộc:** công danh sự nghiệp **thịnh vượng**,
được **tín nhiệm và trọng dụng** trong cơ quan.

Phù hợp **quản lý nhóm nhỏ có gắn bó chặt chẽ**.

Với tính chất **Hỏa**, phù hợp các nghề: **công nghệ, điện máy, kỹ thuật cao**,
hoặc **y học chuyên về đầu, não, thần kinh**.`,
  },

  {
    id: 'thien-khoi-tai-quan-loc-hung',
    title: 'Thiên Khôi + Hung tinh tại Quan Lộc - lắm tài nhiều tật',
    sao: ['Thiên Khôi'],
    cung: ['Quan Lộc'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 75,
    tomTat: `**Thiên Khôi + Hung tinh (Lục Sát) tại Quan Lộc:** sự nghiệp
**trắc trở**, công danh thất thường, **"lắm tài nhiều tật"** — giỏi nhưng gặp
thị phi, bị ganh ghét cản trở.`,
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
    tomTat: `**Thiên Khôi tại Tử Tức:** con cái **thông minh, hiếu thuận, tài năng**
và thành công trong học tập, sự nghiệp.`,
  },

  {
    id: 'thien-khoi-tai-tu-tuc-van-xuong',
    title: 'Thiên Khôi + Văn Xương tại Tử Tức - con cái sáng danh',
    sao: ['Thiên Khôi'],
    cung: ['Tử Tức'],
    ketHop: ['Văn Xương'],
    doUuTien: 73,
    tomTat: `**Thiên Khôi + Văn Xương tại Tử Tức:** con cái **càng sáng danh**,
trở thành **chỗ dựa vững chắc** cho cha mẹ.`,
  },

  {
    id: 'thien-khoi-tai-tu-tuc-van-khuc',
    title: 'Thiên Khôi + Văn Khúc tại Tử Tức - con cái sáng danh',
    sao: ['Thiên Khôi'],
    cung: ['Tử Tức'],
    ketHop: ['Văn Khúc'],
    doUuTien: 73,
    tomTat: `**Thiên Khôi + Văn Khúc tại Tử Tức:** con cái **càng sáng danh**,
trở thành **chỗ dựa vững chắc** cho cha mẹ.`,
  },

  {
    id: 'thien-khoi-tai-tu-tuc-tam-hoa',
    title: 'Thiên Khôi + Tam Hóa (Khoa/Quyền/Lộc) tại Tử Tức - con cái sáng danh',
    sao: ['Thiên Khôi'],
    cung: ['Tử Tức'],
    ketHop: ['Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa'],
    doUuTien: 73,
    tomTat: `**Thiên Khôi + Hóa Khoa / Hóa Quyền / Hóa Lộc tại Tử Tức:** con
cái **càng sáng danh**, trở thành **chỗ dựa vững chắc** cho cha mẹ.`,
  },

  {
    id: 'thien-khoi-tai-tu-tuc-sat',
    title: 'Thiên Khôi + Sát tinh tại Tử Tức - con cái trắc trở',
    sao: ['Thiên Khôi'],
    cung: ['Tử Tức'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 73,
    tomTat: `**Thiên Khôi + Sát tinh (Lục Sát) tại Tử Tức:** con cái nhiều
trắc trở, công danh thăng trầm.`,
  },

  {
    id: 'thien-khoi-tai-tu-tuc-hinh',
    title: 'Thiên Khôi + Thiên Hình tại Tử Tức - tai nạn thương tật',
    sao: ['Thiên Khôi'],
    cung: ['Tử Tức'],
    ketHop: ['Thiên Hình'],
    doUuTien: 73,
    tomTat: `**Thiên Khôi + Thiên Hình tại Tử Tức:** **tai nạn thương tật,
bệnh nặng**, có thể nguy hiểm tính mạng.`,
  },

  {
    id: 'thien-khoi-tai-tu-tuc-linh-hoa',
    title: 'Thiên Khôi + Linh Tinh / Hỏa Tinh tại Tử Tức - tai nạn thương tật',
    sao: ['Thiên Khôi'],
    cung: ['Tử Tức'],
    ketHop: ['Linh Tinh', 'Hỏa Tinh'],
    doUuTien: 73,
    tomTat: `**Thiên Khôi + Linh Tinh / Hỏa Tinh tại Tử Tức:** **tai nạn
thương tật, bệnh nặng**, có thể nguy hiểm tính mạng.`,
  },

  {
    id: 'thien-khoi-tai-tu-tuc-hoa-ky',
    title: 'Thiên Khôi + Hóa Kỵ tại Tử Tức - tai nạn thương tật',
    sao: ['Thiên Khôi'],
    cung: ['Tử Tức'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 73,
    tomTat: `**Thiên Khôi + Hóa Kỵ tại Tử Tức:** **tai nạn thương tật, bệnh
nặng**, có thể nguy hiểm tính mạng.`,
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
    tomTat: `**Thiên Khôi tại Tài Bạch:** kiếm tiền **dễ dàng**, được giao **quản
lý quỹ chung hoặc nguồn vốn lớn**.`,
  },

  {
    id: 'thien-khoi-tai-tai-bach-loc-ton',
    title: 'Thiên Khôi + Lộc Tồn tại Tài Bạch - tài lộc ổn định',
    sao: ['Thiên Khôi'],
    cung: ['Tài Bạch'],
    ketHop: ['Lộc Tồn'],
    doUuTien: 73,
    tomTat: `**Thiên Khôi + Lộc Tồn tại Tài Bạch:** tiền tài càng ổn định, có
cơ hội làm trong **tài chính, kế toán, ngân hàng, quản lý tài sản**.`,
  },

  {
    id: 'thien-khoi-tai-tai-bach-hoa-loc',
    title: 'Thiên Khôi + Hóa Lộc tại Tài Bạch - tài lộc ổn định',
    sao: ['Thiên Khôi'],
    cung: ['Tài Bạch'],
    ketHop: ['Hóa Lộc'],
    doUuTien: 73,
    tomTat: `**Thiên Khôi + Hóa Lộc tại Tài Bạch:** tiền tài càng ổn định, có
cơ hội làm trong **tài chính, kế toán, ngân hàng, quản lý tài sản**.`,
  },

  {
    id: 'thien-khoi-tai-tai-bach-sat',
    title: 'Thiên Khôi + Sát tinh tại Tài Bạch - hao tài góp vốn',
    sao: ['Thiên Khôi'],
    cung: ['Tài Bạch'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 73,
    tomTat: `**Thiên Khôi + Sát tinh (Lục Sát) tại Tài Bạch:** tiền đến rồi đi
nhanh, vất vả mới có tài lộc, dễ **mắc sai lầm quản lý tài chính**, **làm ăn
chung góp vốn dễ mâu thuẫn thiệt hại**.`,
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
    tomTat: `**Thiên Khôi tại Thiên Di:** như **"lá bùa hộ mệnh"** — ra ngoài
gặp nhiều **may mắn, quý nhân giúp đỡ**.

Có cơ hội tiếp xúc với **bậc quyền cao chức trọng**, người có **học thức, tài
năng vượt trội**.

**Hãm địa tại Thiên Di:** dễ gặp **sóng gió, tai nạn bất ngờ**, nguy cơ bị
**kẻ xấu lợi dụng, ganh ghét**. Cần thận trọng, hạn chế tin người lạ.`,
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
    tomTat: `**Thiên Khôi tại Phụ Mẫu:** cha mẹ là **con trưởng** hoặc người **gánh
vác trách nhiệm lớn** trong gia đình.

Có **học thức**, được **quý nhân nâng đỡ, cấp trên trọng dụng**: sự nghiệp
hanh thông, có vị thế xã hội.

**Hãm địa:** cha mẹ **khắt khe, nóng nảy, áp đặt tư tưởng**: tình cảm xa
cách.`,
  },

  {
    id: 'thien-khoi-tai-phu-mau-ta-huu',
    title: 'Thiên Khôi + Tả Phù / Hữu Bật tại Phụ Mẫu - uy tín bền vững',
    sao: ['Thiên Khôi'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Tả Phù', 'Hữu Bật'],
    doUuTien: 70,
    tomTat: `**Thiên Khôi + Tả Phù / Hữu Bật tại Phụ Mẫu:** uy tín càng bền
vững, con cái hưởng **phúc ấm**.`,
  },

  {
    id: 'thien-khoi-tai-phu-mau-xuong-khuc',
    title: 'Thiên Khôi + Văn Xương / Văn Khúc tại Phụ Mẫu - uy tín bền vững',
    sao: ['Thiên Khôi'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Văn Xương', 'Văn Khúc'],
    doUuTien: 70,
    tomTat: `**Thiên Khôi + Văn Xương / Văn Khúc tại Phụ Mẫu:** uy tín càng
bền vững, con cái hưởng **phúc ấm**.`,
  },

  {
    id: 'thien-khoi-tai-phu-mau-tam-hoa',
    title: 'Thiên Khôi + Tam Hóa (Khoa/Quyền/Lộc) tại Phụ Mẫu - uy tín bền vững',
    sao: ['Thiên Khôi'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa'],
    doUuTien: 70,
    tomTat: `**Thiên Khôi + Hóa Khoa / Hóa Quyền / Hóa Lộc tại Phụ Mẫu:** uy
tín càng bền vững, con cái hưởng **phúc ấm**.`,
  },

  {
    id: 'thien-khoi-tai-phu-mau-kinh-da',
    title: 'Thiên Khôi + Kình Dương / Đà La tại Phụ Mẫu - kiện tụng thị phi',
    sao: ['Thiên Khôi'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 70,
    tomTat: `**Thiên Khôi + Kình Dương / Đà La tại Phụ Mẫu:** kiện tụng thị
phi, gia đạo bất an.`,
  },

  {
    id: 'thien-khoi-tai-phu-mau-hoa-ky',
    title: 'Thiên Khôi + Hóa Kỵ tại Phụ Mẫu - kiện tụng thị phi',
    sao: ['Thiên Khôi'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `**Thiên Khôi + Hóa Kỵ tại Phụ Mẫu:** kiện tụng thị phi, gia đạo
bất an.`,
  },

  {
    id: 'thien-khoi-tai-phu-mau-khong-kiep',
    title: 'Thiên Khôi + Địa Không / Địa Kiếp tại Phụ Mẫu - kiện tụng thị phi',
    sao: ['Thiên Khôi'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `**Thiên Khôi + Địa Không / Địa Kiếp tại Phụ Mẫu:** kiện tụng thị
phi, gia đạo bất an.`,
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
    tomTat: `**Thiên Khôi tại Phúc Đức:** dòng họ **phúc lớn**, nhiều người
**tài năng, học hành đỗ đạt cao**, mang danh giá cho gia tộc.

Chủ mệnh được **che chở vô hình từ tổ tiên và thần linh**, dễ vượt khó khăn.

**Hãm địa:** phúc khí giảm, dòng họ dễ **đoản mệnh, tai nạn**, gia đạo bất
an, vướng thị phi kiện tụng.`,
  },

  {
    id: 'thien-khoi-tai-phuc-duc-ta-huu',
    title: 'Thiên Khôi + Tả Phù / Hữu Bật tại Phúc Đức - phúc khí vững bền',
    sao: ['Thiên Khôi'],
    cung: ['Phúc Đức'],
    ketHop: ['Tả Phù', 'Hữu Bật'],
    doUuTien: 73,
    tomTat: `**Thiên Khôi + Tả Phù / Hữu Bật tại Phúc Đức:** phúc khí **vững
bền**, con cháu vinh hiển, gia đình giữ nề nếp uy tín.`,
  },

  {
    id: 'thien-khoi-tai-phuc-duc-xuong-khuc',
    title: 'Thiên Khôi + Văn Xương / Văn Khúc tại Phúc Đức - phúc khí vững bền',
    sao: ['Thiên Khôi'],
    cung: ['Phúc Đức'],
    ketHop: ['Văn Xương', 'Văn Khúc'],
    doUuTien: 73,
    tomTat: `**Thiên Khôi + Văn Xương / Văn Khúc tại Phúc Đức:** phúc khí
**vững bền**, con cháu vinh hiển, gia đình giữ nề nếp uy tín.`,
  },

  {
    id: 'thien-khoi-tai-phuc-duc-tam-hoa',
    title: 'Thiên Khôi + Tam Hóa (Khoa/Quyền/Lộc) tại Phúc Đức - phúc khí vững bền',
    sao: ['Thiên Khôi'],
    cung: ['Phúc Đức'],
    ketHop: ['Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa'],
    doUuTien: 73,
    tomTat: `**Thiên Khôi + Hóa Khoa / Hóa Quyền / Hóa Lộc tại Phúc Đức:**
phúc khí **vững bền**, con cháu vinh hiển, gia đình giữ nề nếp uy tín.`,
  },

  {
    id: 'thien-khoi-tai-phuc-duc-kinh-da',
    title: 'Thiên Khôi Hãm + Kình / Đà tại Phúc Đức - phúc khí giảm',
    sao: ['Thiên Khôi'],
    cung: ['Phúc Đức'],
    chi: ['Hợi', 'Tý', 'Sửu', 'Mùi'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 73,
    tomTat: `**Thiên Khôi Hãm + Kình Dương / Đà La tại Phúc Đức:** phúc khí
giảm, dòng họ dễ **đoản mệnh, tai nạn**, gia đạo bất an, vướng thị phi kiện
tụng.`,
  },

  {
    id: 'thien-khoi-tai-phuc-duc-hoa-ky',
    title: 'Thiên Khôi Hãm + Hóa Kỵ tại Phúc Đức - phúc khí giảm',
    sao: ['Thiên Khôi'],
    cung: ['Phúc Đức'],
    chi: ['Hợi', 'Tý', 'Sửu', 'Mùi'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 73,
    tomTat: `**Thiên Khôi Hãm + Hóa Kỵ tại Phúc Đức:** phúc khí giảm, dòng họ
dễ **đoản mệnh, tai nạn**, gia đạo bất an, vướng thị phi kiện tụng.`,
  },

  {
    id: 'thien-khoi-tai-phuc-duc-khong-kiep',
    title: 'Thiên Khôi Hãm + Địa Không / Địa Kiếp tại Phúc Đức - phúc khí giảm',
    sao: ['Thiên Khôi'],
    cung: ['Phúc Đức'],
    chi: ['Hợi', 'Tý', 'Sửu', 'Mùi'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 73,
    tomTat: `**Thiên Khôi Hãm + Địa Không / Địa Kiếp tại Phúc Đức:** phúc khí
giảm, dòng họ dễ **đoản mệnh, tai nạn**, gia đạo bất an, vướng thị phi kiện
tụng.`,
  },

  {
    id: 'thien-khoi-tai-phuc-duc-hinh',
    title: 'Thiên Khôi Hãm + Thiên Hình tại Phúc Đức - phúc khí giảm',
    sao: ['Thiên Khôi'],
    cung: ['Phúc Đức'],
    chi: ['Hợi', 'Tý', 'Sửu', 'Mùi'],
    ketHop: ['Thiên Hình'],
    doUuTien: 73,
    tomTat: `**Thiên Khôi Hãm + Thiên Hình tại Phúc Đức:** phúc khí giảm, dòng
họ dễ **đoản mệnh, tai nạn**, gia đạo bất an, vướng thị phi kiện tụng.`,
  },

  {
    id: 'thien-khoi-tai-phuc-duc-phuc-binh',
    title: 'Thiên Khôi Hãm + Phục Binh tại Phúc Đức - phúc khí giảm',
    sao: ['Thiên Khôi'],
    cung: ['Phúc Đức'],
    chi: ['Hợi', 'Tý', 'Sửu', 'Mùi'],
    ketHop: ['Phục Binh'],
    doUuTien: 73,
    tomTat: `**Thiên Khôi Hãm + Phục Binh tại Phúc Đức:** phúc khí giảm, dòng
họ dễ **đoản mệnh, tai nạn**, gia đạo bất an, vướng thị phi kiện tụng.`,
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
    tomTat: `**Thiên Khôi tại Điền Trạch + cát tinh:** **nhà cao cửa rộng**, sở
hữu nhiều bất động sản. Trong nhà nhiều **giấy tờ chứng nhận, bằng cấp, khen
thưởng**.

Hàng xóm quý mến: dễ đảm nhận **vai trò quản lý** (tổ trưởng dân phố, ban
quản lý khu nhà…).`,
  },

  {
    id: 'thien-khoi-tai-dien-trach-kinh-da',
    title: 'Thiên Khôi + Kình Dương / Đà La tại Điền Trạch - tranh chấp nhà',
    sao: ['Thiên Khôi'],
    cung: ['Điền Trạch'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 70,
    tomTat: `**Thiên Khôi + Kình Dương / Đà La tại Điền Trạch:** nhà cửa
**tranh chấp**, **thay đổi chỗ ở nhiều lần**. Gia đình thiếu hòa thuận, **nề
nếp gia quy lỏng lẻo**.`,
  },

  {
    id: 'thien-khoi-tai-dien-trach-hoa-ky',
    title: 'Thiên Khôi + Hóa Kỵ tại Điền Trạch - tranh chấp nhà',
    sao: ['Thiên Khôi'],
    cung: ['Điền Trạch'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `**Thiên Khôi + Hóa Kỵ tại Điền Trạch:** nhà cửa **tranh chấp**,
**thay đổi chỗ ở nhiều lần**. Gia đình thiếu hòa thuận, **nề nếp gia quy lỏng
lẻo**.`,
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
    tomTat: `**Thiên Khôi tại Nô Bộc:** được **bạn bè, học trò, cộng sự trợ giúp
đắc lực**. Thường kết giao với **tầng lớp trí thức, quan chức, quý nhân**: dễ
được tiến cử, nâng đỡ.`,
  },

  {
    id: 'thien-khoi-tai-no-boc-ta-huu',
    title: 'Thiên Khôi + Tả Phù / Hữu Bật tại Nô Bộc - quan hệ bền vững',
    sao: ['Thiên Khôi'],
    cung: ['Nô Bộc'],
    ketHop: ['Tả Phù', 'Hữu Bật'],
    doUuTien: 73,
    tomTat: `**Thiên Khôi + Tả Phù / Hữu Bật tại Nô Bộc:** quan hệ xã hội
**bền vững**: trở thành **người có ảnh hưởng**, hoặc được bạn bè/môn sinh
**làm rạng danh**.`,
  },

  {
    id: 'thien-khoi-tai-no-boc-xuong-khuc',
    title: 'Thiên Khôi + Văn Xương / Văn Khúc tại Nô Bộc - quan hệ bền vững',
    sao: ['Thiên Khôi'],
    cung: ['Nô Bộc'],
    ketHop: ['Văn Xương', 'Văn Khúc'],
    doUuTien: 73,
    tomTat: `**Thiên Khôi + Văn Xương / Văn Khúc tại Nô Bộc:** quan hệ xã hội
**bền vững**: trở thành **người có ảnh hưởng**, hoặc được bạn bè/môn sinh
**làm rạng danh**.`,
  },

  {
    id: 'thien-khoi-tai-no-boc-tam-hoa',
    title: 'Thiên Khôi + Tam Hóa (Khoa/Quyền/Lộc) tại Nô Bộc - quan hệ bền vững',
    sao: ['Thiên Khôi'],
    cung: ['Nô Bộc'],
    ketHop: ['Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa'],
    doUuTien: 73,
    tomTat: `**Thiên Khôi + Hóa Khoa / Hóa Quyền / Hóa Lộc tại Nô Bộc:** quan
hệ xã hội **bền vững**: trở thành **người có ảnh hưởng**, hoặc được bạn
bè/môn sinh **làm rạng danh**.`,
  },

  {
    id: 'thien-khoi-tai-no-boc-kinh-da',
    title: 'Thiên Khôi + Kình Dương / Đà La tại Nô Bộc - bạn bè phản bội',
    sao: ['Thiên Khôi'],
    cung: ['Nô Bộc'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 73,
    tomTat: `**Thiên Khôi + Kình Dương / Đà La tại Nô Bộc:** bạn bè cộng sự
**trở thành gánh nặng**, dễ bị **hãm hại, phản bội, lừa lọc** gây tổn thất danh
và lợi.`,
  },

  {
    id: 'thien-khoi-tai-no-boc-hoa-ky',
    title: 'Thiên Khôi + Hóa Kỵ tại Nô Bộc - bạn bè phản bội',
    sao: ['Thiên Khôi'],
    cung: ['Nô Bộc'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 73,
    tomTat: `**Thiên Khôi + Hóa Kỵ tại Nô Bộc:** bạn bè cộng sự **trở thành
gánh nặng**, dễ bị **hãm hại, phản bội, lừa lọc** gây tổn thất danh và lợi.`,
  },

  {
    id: 'thien-khoi-tai-no-boc-phuc-binh',
    title: 'Thiên Khôi + Phục Binh tại Nô Bộc - bạn bè phản bội',
    sao: ['Thiên Khôi'],
    cung: ['Nô Bộc'],
    ketHop: ['Phục Binh'],
    doUuTien: 73,
    tomTat: `**Thiên Khôi + Phục Binh tại Nô Bộc:** bạn bè cộng sự **trở
thành gánh nặng**, dễ bị **hãm hại, phản bội, lừa lọc** gây tổn thất danh và
lợi.`,
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
    tomTat: `**Thiên Khôi tại Tật Ách:** đắc địa: sức khỏe **ổn định**, ốm đau
gặp **thầy giỏi thuốc hay**, dễ qua khỏi.

Bệnh thường gặp: liên quan **đầu, mắt, vai** — phần lớn **cứu chữa kịp thời**.`,
  },

  {
    id: 'thien-khoi-tai-tat-ach-hinh',
    title: 'Thiên Khôi + Thiên Hình tại Tật Ách - thương tích nặng',
    sao: ['Thiên Khôi'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Hình'],
    doUuTien: 73,
    tomTat: `**Thiên Khôi + Thiên Hình tại Tật Ách:** thương tích nặng, **bệnh
mãn tính kéo dài**.`,
  },

  {
    id: 'thien-khoi-tai-tat-ach-kinh-da',
    title: 'Thiên Khôi + Kình Dương / Đà La tại Tật Ách - thương tích nặng',
    sao: ['Thiên Khôi'],
    cung: ['Tật Ách'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 73,
    tomTat: `**Thiên Khôi + Kình Dương / Đà La tại Tật Ách:** thương tích
nặng, **bệnh mãn tính kéo dài**.`,
  },

  {
    id: 'thien-khoi-tai-tat-ach-hoa-ky',
    title: 'Thiên Khôi + Hóa Kỵ tại Tật Ách - thương tích nặng',
    sao: ['Thiên Khôi'],
    cung: ['Tật Ách'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 73,
    tomTat: `**Thiên Khôi + Hóa Kỵ tại Tật Ách:** thương tích nặng, **bệnh
mãn tính kéo dài**.`,
  },

  {
    id: 'thien-khoi-tai-tat-ach-khong-kiep',
    title: 'Thiên Khôi + Địa Không / Địa Kiếp tại Tật Ách - thương tích nặng',
    sao: ['Thiên Khôi'],
    cung: ['Tật Ách'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 73,
    tomTat: `**Thiên Khôi + Địa Không / Địa Kiếp tại Tật Ách:** thương tích
nặng, **bệnh mãn tính kéo dài**.`,
  },

  {
    id: 'thien-khoi-tai-tat-ach-linh-hoa',
    title: 'Thiên Khôi + Linh Tinh / Hỏa Tinh tại Tật Ách - tai nạn điện giật',
    sao: ['Thiên Khôi'],
    cung: ['Tật Ách'],
    ketHop: ['Linh Tinh', 'Hỏa Tinh'],
    doUuTien: 73,
    tomTat: `**Thiên Khôi + Linh Tinh / Hỏa Tinh tại Tật Ách:** **tai nạn điện
giật, hỏa hoạn, gươm đao, súng đạn**. Tinh thần bất mãn, chán đời, **xu hướng
ẩn dật**.`,
  },

  {
    id: 'thien-khoi-tai-tat-ach-thien-rieu',
    title: 'Thiên Khôi + Thiên Riêu tại Tật Ách - tinh thần bất mãn',
    sao: ['Thiên Khôi'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Riêu'],
    doUuTien: 73,
    tomTat: `**Thiên Khôi + Thiên Riêu tại Tật Ách:** **tai nạn điện giật,
hỏa hoạn, gươm đao, súng đạn**. Tinh thần bất mãn, chán đời, **xu hướng ẩn
dật**.`,
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
    tomTat: `**Thiên Khôi tại Huynh Đệ:** anh chị em **giỏi giang, có học thức,
địa vị**, mang **danh giá** cho gia đình. Thương yêu, đùm bọc, hỗ trợ nhau.

Thường có **nhiều anh hoặc chị**, gia đình **đông đủ, hòa thuận**.`,
  },

  {
    id: 'thien-khoi-tai-huynh-de-sat',
    title: 'Thiên Khôi + Sát tinh tại Huynh Đệ - anh em khó hòa hợp',
    sao: ['Thiên Khôi'],
    cung: ['Huynh Đệ'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `**Thiên Khôi + Sát tinh (Lục Sát) tại Huynh Đệ:** anh chị em
**khó hòa hợp**, mỗi người một chí hướng.`,
  },

  {
    id: 'thien-khoi-tai-huynh-de-kinh-da',
    title: 'Thiên Khôi + Kình Dương / Đà La tại Huynh Đệ - anh em yểu mệnh',
    sao: ['Thiên Khôi'],
    cung: ['Huynh Đệ'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 70,
    tomTat: `**Thiên Khôi + Kình Dương / Đà La tại Huynh Đệ:** anh chị em có
nguy cơ **tai nạn, bệnh tật, yểu mệnh**: đương số phải tự thân vận động.`,
  },

  {
    id: 'thien-khoi-tai-huynh-de-hoa-ky',
    title: 'Thiên Khôi + Hóa Kỵ tại Huynh Đệ - anh em yểu mệnh',
    sao: ['Thiên Khôi'],
    cung: ['Huynh Đệ'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `**Thiên Khôi + Hóa Kỵ tại Huynh Đệ:** anh chị em có nguy cơ **tai
nạn, bệnh tật, yểu mệnh**: đương số phải tự thân vận động.`,
  },
];
