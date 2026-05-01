import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO HÓA LỘC - Tứ Hóa
 */
export const luanGiai_HoaLoc: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung của sao Hóa Lộc
  // ============================================================
  {
    id: 'hoa-loc-tinh-chat-chung',
    title: 'Hóa Lộc - Đặc tính chung',
    sao: ['Hóa Lộc'],
    doUuTien: 30,
    tomTat: `**Hóa Lộc** thuộc bộ **Tứ Hóa** (Hóa Lộc, Hóa Quyền, Hóa Khoa, Hóa Kỵ),
ngũ hành **Mộc**.

**Hóa khí:** **Phúc Tinh + Tài Tinh** — chủ về **tài lộc, may mắn, sung túc**.

**"Hóa"** = biến chuyển, **"Lộc"** = kho thóc, kho tiền → tượng trưng cho **của
cải và quyền hành**.

**Vị trí miếu hãm:**
- **Đắc địa:** Thìn, Tuất, Sửu, Mùi, Dần, Mão
- **Hãm địa:** Tý, Ngọ, Thân, Dậu, Tỵ, Hợi

**Cách an:** theo **Thiên Can năm sinh** — mỗi người chỉ có **DUY NHẤT 1 Hóa
Lộc** trong lá số.`,

    chiTiet: `## Đặc điểm

- **Sao TÀI** chủ sự **phong phú về tiền bạc**
- Có khả năng **"kích tài"** mạnh mẽ → giúp các sao đi cùng phát huy mặt cát lợi
- Hóa Lộc là **sự HÀNH ĐỘNG - CHỦ ĐỘNG** → người Mệnh Hóa Lộc phải **hành động
  thực tế** mới khai phá được "kho lộc"
- Khác Lộc Tồn (chờ may mắn đến) — Hóa Lộc **thôi thúc cải tiến, biến hóa**

## Đắc địa vs Hãm địa

🌟 **Đắc địa:** mở cơ hội **giàu sang, thăng tiến**, "tiền vào như nước".

⚠️ **Hãm địa:** lộc đến dễ tan, kéo theo nhiều hệ lụy về tài chính, sự nghiệp.`,
  },

  // ============================================================
  // 2. Hóa Lộc tại Mệnh - tướng mạo & tính cách
  // ============================================================
  {
    id: 'hoa-loc-tai-menh-tinh-cach',
    title: 'Hóa Lộc tại Mệnh - Tướng mạo & tính cách',
    sao: ['Hóa Lộc'],
    cung: ['Mệnh'],
    doUuTien: 85,
    tomTat: `**Hóa Lộc cư Mệnh** mang **phong thái phú quý**, gương mặt sáng sủa, duyên dáng, **dễ tạo thiện cảm**. Lông tóc tốt, **nam giới râu rậm**. Ít bệnh tật, lạc quan, giàu sức sống.

⚠️ **Đặc điểm chung:** thiên về hưởng thụ → dễ **lười biếng, thực dụng, tham lam, chú trọng vẻ ngoài** nếu không tu tập.`,

    chiTiet: `## Năng khiếu ẩm thực đặc trưng

Người Hóa Lộc thủ Mệnh **rất tinh tế trong ẩm thực** — biết nhiều **món ăn lạ, rượu ngon**, có thể biết cả **nấu nướng, biến chế sành điệu**.

→ Đây là kiểu người **chuyên gia về vị giác**, biết **thưởng thức cái ngon, cái đẹp**, có xu hướng **chăm sóc người khác qua bữa ăn**.

## Sự nghiệp & tài lộc

Hợp ngành: **tài chính, ngân hàng, kinh doanh, nghệ thuật, ẩm thực, dịch vụ cao cấp**.

Có **đầu óc kinh doanh nhạy bén**, **năng lực chuyển hóa ý tưởng thành tiền bạc**. Trong công sở: **mẫn cán, khéo léo**, được cấp trên ưu ái và đồng nghiệp quý mến.`,
  },

  {
    id: 'hoa-loc-tai-menh-dac-dia',
    title: 'Hóa Lộc Mệnh - Đắc địa',
    sao: ['Hóa Lộc'],
    cung: ['Mệnh'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 85,
    tomTat: `🌟 **Hóa Lộc ĐẮC địa Mệnh:** **dịu dàng, tinh anh, khéo léo giao tiếp**, **mềm mỏng như nhành liễu** (hành Mộc), **lạc quan, sức hút tự nhiên**. Cởi mở, nhanh nhẹn, **nắm bắt thời cơ nhạy bén**.`,
  },

  {
    id: 'hoa-loc-tai-menh-ham',
    title: 'Hóa Lộc Mệnh - Hãm địa',
    sao: ['Hóa Lộc'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    doUuTien: 85,
    tomTat: `⚠️ **Hóa Lộc HÃM Mệnh:** **hấp tấp, nóng vội** — đặc biệt với quyết định tài chính. "Nôn nóng hái quả non, hỏng cả vụ mùa".`,
  },

  {
    id: 'hoa-loc-tai-menh-tau-thu',
    title: 'Hóa Lộc Mệnh + Tấu Thư',
    sao: ['Hóa Lộc'],
    cung: ['Mệnh'],
    ketHop: ['Tấu Thư'],
    doUuTien: 75,
    tomTat: `🌟 **Hóa Lộc Mệnh + Tấu Thư:** vị giác càng **vi diệu** — chuyên gia ẩm thực.`,
  },

  {
    id: 'hoa-loc-tai-menh-xuong-khuc-khoa',
    title: 'Hóa Lộc Mệnh + Xương Khúc / Hóa Khoa',
    sao: ['Hóa Lộc'],
    cung: ['Mệnh'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Hóa Khoa'],
    doUuTien: 75,
    tomTat: `🌟 **Hóa Lộc Mệnh + Xương Khúc / Hóa Khoa:** có thể **sáng tác sách gia chánh, dạy nấu ăn, chế rượu**.`,
  },

  // ============================================================
  // 3. Hóa Lộc tại Mệnh - hôn nhân & sức khỏe
  // ============================================================
  {
    id: 'hoa-loc-tai-menh-hon-nhan-suc-khoe',
    title: 'Hóa Lộc tại Mệnh - Hôn nhân & sức khỏe',
    sao: ['Hóa Lộc'],
    cung: ['Mệnh'],
    doUuTien: 75,
    tomTat: `**Hôn nhân:** **ấm áp và sung túc** — tính hiền dịu, dễ chịu → quan
hệ hôn nhân **cân bằng**. Biết kiếm tiền → **trụ cột gia đình**, hôn nhân nền
tảng tốt.

⚠️ Dễ **lười biếng, ỷ lại** → khi việc chung bị đùn đẩy thì xích mích. Cần giữ
**ranh giới giao tiếp xã giao** để tránh hiểu lầm.

**Sức khỏe:** Hóa Lộc là phúc tinh có khả năng **GIẢI TRỪ bệnh tật** → khi đau
ốm gặp **thầy giỏi thuốc hay**.

⚠️ Lưu ý bệnh **tiêu hóa, gan mật, dư thừa dưỡng chất** → cần **tiết chế ăn
uống**, sống điều độ.

**Tài lộc:** không chỉ may mắn — đến từ **xoay sở và óc kinh doanh nhạy bén**.
"Tiền đẻ ra tiền". **+ Thiên Mã:** cách **"Lộc Mã giao trì"**.`,
  },

  // ============================================================
  // 4. Bộ sao TỐT - Lộc Mã giao trì
  // ============================================================
  {
    id: 'hoa-loc-loc-ma-giao-tri',
    title: '🌟 Lộc Mã giao trì - Hóa Lộc + Thiên Mã',
    sao: ['Hóa Lộc', 'Thiên Mã'],
    ketHop: ['Lộc Mã giao trì', 'Lộc Mã'],
    doUuTien: 65,
    tomTat: `🌟 **Hóa Lộc + Thiên Mã** = cách **"LỘC MÃ GIAO TRÌ"** — **giàu có và
có tài năng**, thịnh đạt công danh.

- Giữ **chức vụ cao cấp**, có **bổng lộc cao**, có **nhà công, xe nhà nước**
- Được người **trọng nể** vì cả **tiền bạc và quyền tước**
- Càng làm càng lớn, **càng vất vả càng có thành quả**

📌 **Lưu ý:** thường cần **đi xa làm ăn**.

**Lộc Mã đồng cung:** "đích thị **phú thương** chi nghiệp" — số **buôn bán
giàu**.`,
  },

  {
    id: 'hoa-loc-loc-ma-giao-tri-thien-di',
    title: 'Lộc Mã giao trì tại Thiên Di',
    sao: ['Hóa Lộc', 'Thiên Mã'],
    cung: ['Thiên Di'],
    ketHop: ['Lộc Mã'],
    doUuTien: 70,
    tomTat: `🌟 **Lộc Mã giao trì tại Thiên Di:** đặc biệt ứng nghiệm — đi xa làm ăn
**RẤT THUẬN LỢI**, công danh sự nghiệp **thăng tiến nhanh**.`,
  },

  // ============================================================
  // 5. Bộ Tam Hóa - Lộc Quyền Khoa
  // ============================================================
  {
    id: 'hoa-loc-tam-hoa',
    title: '🌟 Bộ Tam Hóa - Lộc Quyền Khoa',
    sao: ['Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa'],
    ketHop: ['Tam Hóa', 'Lộc Quyền Khoa'],
    doUuTien: 70,
    tomTat: `🌟 **Hóa Lộc + Hóa Quyền + Hóa Khoa** = bộ **"TAM HÓA"** — vừa **văn
hóa, quyền hành, tiền bạc**.

→ **Phúc thọ tăng tiến mau lẹ**, tai họa **giảm thiểu tối đa**.

→ **Hiệu lực CẢI XẤU THÀNH TỐT** trên **3 phương diện**: học vấn, quyền uy, tài lộc.

**Cái tốt liên tục** — phúc đến liên tiếp, áp dụng cho cả nam và nữ.`,
  },

  {
    id: 'hoa-loc-tam-hoa-cung-menh-ta-huu',
    title: 'Tam Hóa củng Mệnh + Tả Hữu',
    sao: ['Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa'],
    cung: ['Mệnh'],
    ketHop: ['Tả Phù', 'Hữu Bật'],
    doUuTien: 75,
    tomTat: `🌟 **Tam Hóa củng Mệnh + Tả Hữu:** làm tới **CÔNG KHANH**.`,
  },

  // ============================================================
  // 6. Các bộ sao tốt khác của Hóa Lộc
  // ============================================================
  {
    id: 'hoa-loc-bo-sao-tot',
    title: 'Hóa Lộc - Các bộ sao TỐT khác',
    sao: ['Hóa Lộc'],
    doUuTien: 55,
    tomTat: `**Bộ sao tốt khác của Hóa Lộc** (chi tiết tách theo entry chuyên biệt).`,
  },

  {
    id: 'hoa-loc-tu-phu',
    title: 'Hóa Lộc + Tử Vi / Thiên Phủ',
    sao: ['Hóa Lộc'],
    ketHop: ['Tử Vi', 'Thiên Phủ'],
    doUuTien: 60,
    tomTat: `🌟 **Hóa Lộc + Tử Vi / Thiên Phủ:** hưởng **phú và quý cao độ**.`,
  },

  {
    id: 'hoa-loc-quyen-sat',
    title: 'Hóa Lộc + Hóa Quyền + Thất Sát',
    sao: ['Hóa Lộc'],
    ketHop: ['Hóa Quyền', 'Thất Sát'],
    doUuTien: 60,
    tomTat: `🌟 **Hóa Lộc + Hóa Quyền + Thất Sát:** **VÕ TƯỚNG quyền hành lớn**, hiển đạt.`,
  },

  {
    id: 'hoa-loc-co-luong',
    title: 'Hóa Lộc + Cơ Lương đồng cung',
    sao: ['Hóa Lộc'],
    ketHop: ['Thiên Cơ', 'Thiên Lương'],
    doUuTien: 60,
    tomTat: `🌟 **Hóa Lộc + Cơ Lương đồng cung:** **TRIỆU/TỶ PHÚ, đại tư bản** — bố thí, làm việc xã hội văn hóa.`,
  },

  {
    id: 'hoa-loc-luong-ty-ngo',
    title: 'Hóa Lộc + Thiên Lương ở Tý / Ngọ',
    sao: ['Hóa Lộc'],
    chi: ['Tý', 'Ngọ'],
    ketHop: ['Thiên Lương'],
    doUuTien: 62,
    tomTat: `🌟 **Hóa Lộc + Thiên Lương ở Tý / Ngọ:** **VĨ NHÂN** kinh bang tế thế, năng tài xuất chúng, sự nghiệp lớn lao.`,
  },

  {
    id: 'hoa-loc-thien-ma-tuong',
    title: 'Hóa Lộc + Thiên Mã + Tướng Quân',
    sao: ['Hóa Lộc'],
    ketHop: ['Thiên Mã', 'Tướng Quân'],
    doUuTien: 60,
    tomTat: `🌟 **Hóa Lộc + Thiên Mã + Tướng Quân:** **anh hùng, quyền quý, giàu sang**.`,
  },

  {
    id: 'hoa-loc-thien-tuong',
    title: 'Hóa Lộc + Thiên Tướng',
    sao: ['Hóa Lộc'],
    ketHop: ['Thiên Tướng'],
    doUuTien: 58,
    tomTat: `🌟 **Hóa Lộc + Thiên Tướng:** **đẹp trai, nhiều nam tính**, có sức **thu hút phụ nữ**.`,
  },

  {
    id: 'hoa-loc-long-phuong-phu-the',
    title: 'Hóa Lộc Phu Thê + Long Phượng',
    sao: ['Hóa Lộc'],
    cung: ['Phu Thê'],
    ketHop: ['Long Trì', 'Phượng Các'],
    doUuTien: 70,
    tomTat: `🌟 **Hóa Lộc Phu Thê + Long Phượng:** sánh duyên người **giàu sang đẹp đẽ**.`,
  },

  {
    id: 'hoa-loc-hong-loan-phu-the-tai-no',
    title: 'Hóa Lộc + Hồng Loan tại Phu Thê / Tài / Nô',
    sao: ['Hóa Lộc'],
    cung: ['Phu Thê', 'Tài Bạch', 'Nô Bộc'],
    ketHop: ['Hồng Loan'],
    doUuTien: 70,
    tomTat: `🌟 **Hóa Lộc + Hồng Loan tại Phu Thê / Tài Bạch / Nô Bộc:** **nhờ của vợ làm giàu**.`,
  },

  {
    id: 'hoa-loc-nu-loc-ton',
    title: 'Hóa Lộc Nữ Mệnh + Lộc Tồn',
    sao: ['Hóa Lộc'],
    cung: ['Mệnh'],
    gioiTinh: 'Nữ',
    ketHop: ['Lộc Tồn'],
    doUuTien: 70,
    tomTat: `🌟 **Hóa Lộc nữ Mệnh + Lộc Tồn:** **vượng phu ích tử**, đại cát.`,
  },

  // ============================================================
  // 7. Bộ sao XẤU của Hóa Lộc
  // ============================================================
  {
    id: 'hoa-loc-bo-sao-xau',
    title: 'Hóa Lộc - Bộ sao XẤU',
    sao: ['Hóa Lộc'],
    doUuTien: 55,
    tomTat: `⚠️ **Bất luận sát tinh nào đi với Hóa Lộc cũng PHÁ HẦU HẾT lợi điểm** — đặc biệt **Tuần Triệt, Không Kiếp**.`,
  },

  {
    id: 'hoa-loc-khong-kiep',
    title: 'Hóa Lộc + Không Kiếp - phá sản',
    sao: ['Hóa Lộc'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 60,
    tomTat: `⚠️ **Hóa Lộc + Không Kiếp:** **phá sản** hoặc lúc có lúc phá. Không Kiếp đắc địa → **thủ đắc tài lộc bất ngờ và mau chóng**. Hãm địa → **làm tiền bằng phương pháp ám muội** (buôn lậu, tham nhũng, sang đoạt) hoặc **bị cướp**.`,
  },

  {
    id: 'hoa-loc-tam-khong',
    title: 'Hóa Lộc + Tam Không (Mệnh vô chính diệu)',
    sao: ['Hóa Lộc'],
    cung: ['Mệnh'],
    ketHop: ['Tuần', 'Triệt', 'Thiên Không'],
    doUuTien: 58,
    tomTat: `⚠️ **Hóa Lộc + Tam Không (Mệnh vô chính diệu):** **giàu sang nhưng KHÔNG BỀN** — phải có lúc **bại sản 1 lần** trong đời.`,
  },

  {
    id: 'hoa-loc-loc-ton-song-loc',
    title: 'Hóa Lộc + Lộc Tồn (Song Lộc)',
    sao: ['Hóa Lộc'],
    ketHop: ['Lộc Tồn'],
    doUuTien: 58,
    tomTat: `⚠️ **Hóa Lộc + Lộc Tồn đồng cung (Song Lộc):** có tiền nhưng thường **bị tai họa vì tiền**.`,
  },

  {
    id: 'hoa-loc-thien-hy-cu-vu',
    title: 'Hóa Lộc + Thiên Hỷ / Cự Vũ',
    sao: ['Hóa Lộc'],
    ketHop: ['Thiên Hỷ', 'Cự Môn', 'Vũ Khúc'],
    doUuTien: 55,
    tomTat: `⚠️ **Hóa Lộc + Thiên Hỷ / Cự Vũ:** chuyên chính.`,
  },

  {
    id: 'hoa-loc-song-loc-tuan-kiep-kinh',
    title: 'Song Lộc + Tuần Không / Kiếp Kình',
    sao: ['Hóa Lộc'],
    ketHop: ['Lộc Tồn', 'Tuần', 'Thiên Không', 'Địa Kiếp', 'Kình Dương'],
    doUuTien: 58,
    tomTat: `⚠️ **Song Lộc gặp Tuần Không / Kiếp Kình:** tài KHÔNG BỀN, mà BẦN TIỆN.`,
  },

  // ============================================================
  // 8. Hóa Lộc tại Phụ Mẫu
  // ============================================================
  {
    id: 'hoa-loc-tai-phu-mau',
    title: 'Hóa Lộc tại Phụ Mẫu',
    sao: ['Hóa Lộc'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Hóa Lộc tại Phụ Mẫu:** ảnh hưởng đến quan hệ cha mẹ.`,
  },

  {
    id: 'hoa-loc-tai-phu-mau-dac-dia',
    title: 'Hóa Lộc Phụ Mẫu - Đắc địa',
    sao: ['Hóa Lộc'],
    cung: ['Phụ Mẫu'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 78,
    tomTat: `🌟 **Hóa Lộc ĐẮC Phụ Mẫu:** cha mẹ có **địa vị xã hội** hoặc vị trí **trách nhiệm và uy tín cao**.`,
  },

  {
    id: 'hoa-loc-tai-phu-mau-van-tinh',
    title: 'Hóa Lộc Phụ Mẫu + Văn Tinh / Hóa Khoa',
    sao: ['Hóa Lộc'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Lưu Niên Văn Tinh', 'Hóa Khoa'],
    doUuTien: 73,
    tomTat: `🌟 **Hóa Lộc Phụ Mẫu + Văn Tinh / Hóa Khoa:** cha mẹ **rộng lượng, thông thái**, hỗ trợ con vượt chông gai.`,
  },

  {
    id: 'hoa-loc-tai-phu-mau-thien-ma',
    title: 'Hóa Lộc Phụ Mẫu + Thiên Mã',
    sao: ['Hóa Lộc'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Thiên Mã'],
    doUuTien: 73,
    tomTat: `🌟 **Hóa Lộc Phụ Mẫu + Thiên Mã:** cha mẹ **giàu có**.`,
  },

  {
    id: 'hoa-loc-tai-phu-mau-ham',
    title: 'Hóa Lộc Phụ Mẫu - Hãm địa',
    sao: ['Hóa Lộc'],
    cung: ['Phụ Mẫu'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `⚠️ **Hóa Lộc HÃM Phụ Mẫu:** mái ấm **áp lực tài chính**, **xung đột thiếu quan tâm**.`,
  },

  {
    id: 'hoa-loc-tai-phu-mau-sat',
    title: 'Hóa Lộc Phụ Mẫu + Kình Đà / Không Kiếp / Linh Hỏa',
    sao: ['Hóa Lộc'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Kình Dương', 'Đà La', 'Địa Không', 'Địa Kiếp', 'Linh Tinh', 'Hỏa Tinh'],
    doUuTien: 73,
    tomTat: `⚠️ **Hóa Lộc Phụ Mẫu + Kình Đà / Không Kiếp / Linh Hỏa:** mâu thuẫn bùng phát mạnh, biến cố **sức khỏe và tài sản**.`,
  },

  // ============================================================
  // 9. Hóa Lộc tại Phúc Đức
  // ============================================================
  {
    id: 'hoa-loc-tai-phuc-duc',
    title: 'Hóa Lộc tại Phúc Đức',
    sao: ['Hóa Lộc'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `🌟 **Hóa Lộc tại Phúc Đức** ví như **"của để dành"** cho cả dòng họ.

- Trong họ nhiều người **thành đạt**, anh em chan hòa hỗ trợ
- **Mồ mả tổ tiên** đẹp → vận khí đời sau **hưng thịnh**
- Đương số hưởng phúc, **tránh tai ương lớn**, gặp **may bất ngờ**`,
  },

  {
    id: 'hoa-loc-tai-phuc-duc-quyen',
    title: 'Hóa Lộc Phúc Đức + Hóa Quyền',
    sao: ['Hóa Lộc'],
    cung: ['Phúc Đức'],
    ketHop: ['Hóa Quyền'],
    doUuTien: 75,
    tomTat: `🌟 **Hóa Lộc Phúc Đức + Hóa Quyền:** **vinh hiển**.`,
  },

  {
    id: 'hoa-loc-tai-phuc-duc-song-loc',
    title: 'Hóa Lộc Phúc Đức + Lộc Tồn (Song Lộc)',
    sao: ['Hóa Lộc'],
    cung: ['Phúc Đức'],
    ketHop: ['Lộc Tồn'],
    doUuTien: 75,
    tomTat: `🌟 **Hóa Lộc Phúc Đức + Lộc Tồn (Song Lộc):** **đại phú**. Mồ mả có **ngôi mả phát hình cờ** → giàu.`,
  },

  {
    id: 'hoa-loc-tai-phuc-duc-ham',
    title: 'Hóa Lộc Phúc Đức - Hãm địa',
    sao: ['Hóa Lộc'],
    cung: ['Phúc Đức'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `⚠️ **Hóa Lộc HÃM Phúc Đức:** dòng họ **tranh chấp tài sản, đất đai** → vận khí giảm. → Cần **hành thiện tích đức** để nuôi gốc phúc.`,
  },

  {
    id: 'hoa-loc-tai-phuc-duc-kinh-da-rieu',
    title: 'Hóa Lộc Phúc Đức + Kình Đà / Thiên Riêu',
    sao: ['Hóa Lộc'],
    cung: ['Phúc Đức'],
    ketHop: ['Kình Dương', 'Đà La', 'Thiên Riêu'],
    doUuTien: 73,
    tomTat: `⚠️ **Hóa Lộc Phúc Đức + Kình Đà / Thiên Riêu:** đề phòng **bệnh tật, sự cố**.`,
  },

  // ============================================================
  // 10. Hóa Lộc tại Điền Trạch
  // ============================================================
  {
    id: 'hoa-loc-tai-dien-trach',
    title: 'Hóa Lộc tại Điền Trạch',
    sao: ['Hóa Lộc'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `🌟 **Hóa Lộc tại Điền Trạch:** "đất lành chim đậu" — nhà cửa **khang trang, vị trí đẹp, hợp phong thủy**.`,
  },

  {
    id: 'hoa-loc-tai-dien-trach-dac-dia',
    title: 'Hóa Lộc Điền Trạch - Đắc địa',
    sao: ['Hóa Lộc'],
    cung: ['Điền Trạch'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 78,
    tomTat: `🌟 **Hóa Lộc ĐẮC Điền Trạch:** dễ **mua bán, tích lũy bất động sản**, thuận lợi ngành **đất đai, xây dựng, nội thất**.`,
  },

  {
    id: 'hoa-loc-tai-dien-trach-thien-tuong',
    title: 'Hóa Lộc Điền Trạch + Thiên Tướng',
    sao: ['Hóa Lộc'],
    cung: ['Điền Trạch'],
    ketHop: ['Thiên Tướng'],
    doUuTien: 73,
    tomTat: `🌟 **Hóa Lộc Điền Trạch + Thiên Tướng:** có **nhiều ruộng đất**.`,
  },

  {
    id: 'hoa-loc-tai-dien-trach-tam-hoa',
    title: 'Hóa Lộc Điền Trạch + Tam Hóa + Cơ + Thái Âm',
    sao: ['Hóa Lộc'],
    cung: ['Điền Trạch'],
    ketHop: ['Hóa Quyền', 'Hóa Khoa', 'Thiên Cơ', 'Thái Âm'],
    doUuTien: 73,
    tomTat: `🌟 **Hóa Lộc Điền Trạch + Tam Hóa + Cơ + Thái Âm:** có **đất nhiều**.`,
  },

  {
    id: 'hoa-loc-tai-dien-trach-ham',
    title: 'Hóa Lộc Điền Trạch - Hãm địa',
    sao: ['Hóa Lộc'],
    cung: ['Điền Trạch'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `⚠️ **Hóa Lộc HÃM Điền Trạch:** dễ **tranh chấp đất đai**, nhà xuống cấp / vị trí xấu.`,
  },

  {
    id: 'hoa-loc-tai-dien-trach-kinh-da',
    title: 'Hóa Lộc Điền Trạch + Kình Đà',
    sao: ['Hóa Lộc'],
    cung: ['Điền Trạch'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 73,
    tomTat: `⚠️ **Hóa Lộc Điền Trạch + Kình Đà:** mất tài sản, **kiện tụng đất đai**.`,
  },

  // ============================================================
  // 11. Hóa Lộc tại Quan Lộc
  // ============================================================
  {
    id: 'hoa-loc-tai-quan-loc',
    title: 'Hóa Lộc tại Quan Lộc',
    sao: ['Hóa Lộc'],
    cung: ['Quan Lộc'],
    doUuTien: 82,
    tomTat: `🌟 **Hóa Lộc tại Quan Lộc:** đường sự nghiệp **hanh thông như cá gặp nước** — lĩnh vực **kinh doanh, tài chính, quản lý, lãnh đạo**.

Có **tài tổ chức**, biết tận dụng thời cơ, được **đồng nghiệp và cấp trên tín nhiệm**.

**Hóa Lộc tại Quan = NGHỀ TÀI CHÍNH KINH TẾ:** thuế vụ, ngân khố, ngân hàng, kế toán.`,
  },

  {
    id: 'hoa-loc-tai-quan-loc-quyen-khoa',
    title: 'Hóa Lộc Quan Lộc + Hóa Quyền + Hóa Khoa',
    sao: ['Hóa Lộc'],
    cung: ['Quan Lộc'],
    ketHop: ['Hóa Quyền', 'Hóa Khoa'],
    doUuTien: 78,
    tomTat: `🌟 **Hóa Lộc Quan Lộc + Hóa Quyền + Hóa Khoa:** trí tuệ nổi bật, thành công **danh vọng và tiền tài** song hành.`,
  },

  {
    id: 'hoa-loc-tai-quan-loc-quyen-tu-phu-trang-sinh',
    title: 'Hóa Lộc Quan Lộc + Hóa Quyền + Tử Phủ + Tràng Sinh',
    sao: ['Hóa Lộc'],
    cung: ['Quan Lộc'],
    ketHop: ['Hóa Quyền', 'Tử Vi', 'Thiên Phủ', 'Tràng Sinh'],
    doUuTien: 80,
    tomTat: `🌟 **Hóa Lộc Quan Lộc + Hóa Quyền + Tử Vi / Thiên Phủ + Tràng Sinh:** **ĐẠI QUÝ**.`,
  },

  {
    id: 'hoa-loc-tai-quan-loc-quyen-ma-nhat-nguyet',
    title: 'Hóa Lộc Quan Lộc + Hóa Quyền + Thiên Mã + Nhật Nguyệt đắc',
    sao: ['Hóa Lộc'],
    cung: ['Quan Lộc'],
    ketHop: ['Hóa Quyền', 'Thiên Mã', 'Thái Dương', 'Thái Âm'],
    doUuTien: 78,
    tomTat: `🌟 **Hóa Lộc Quan Lộc + Hóa Quyền + Thiên Mã + Nhật Nguyệt đắc:** **giàu sang rực rỡ**.`,
  },

  {
    id: 'hoa-loc-tai-quan-loc-thien-ma',
    title: 'Hóa Lộc Quan Lộc + Thiên Mã',
    sao: ['Hóa Lộc'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Mã'],
    doUuTien: 75,
    tomTat: `🌟 **Hóa Lộc Quan Lộc + Thiên Mã:** **thương nghiệp** phát đạt.`,
  },

  {
    id: 'hoa-loc-tai-quan-loc-ham',
    title: 'Hóa Lộc Quan Lộc - Hãm địa',
    sao: ['Hóa Lộc'],
    cung: ['Quan Lộc'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `⚠️ **Hóa Lộc HÃM Quan Lộc:** công danh **cản trở, thị phi nơi công sở**, "đứng núi này trông núi nọ" → tuột mất cơ hội thăng tiến.`,
  },

  // ============================================================
  // 12. Hóa Lộc tại Nô Bộc
  // ============================================================
  {
    id: 'hoa-loc-tai-no-boc',
    title: 'Hóa Lộc tại Nô Bộc',
    sao: ['Hóa Lộc'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Hóa Lộc tại Nô Bộc:** ảnh hưởng đến quan hệ bạn bè, cấp dưới.`,
  },

  {
    id: 'hoa-loc-tai-no-boc-dac-dia',
    title: 'Hóa Lộc Nô Bộc - Đắc địa',
    sao: ['Hóa Lộc'],
    cung: ['Nô Bộc'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 78,
    tomTat: `🌟 **Hóa Lộc ĐẮC Nô Bộc:** quan hệ xã hội **rộng mở**, dễ kết giao, bạn bè đồng nghiệp **nhiệt tình**. **Quý nhân vây quanh**, cộng sự cấp dưới **hậu thuẫn cả tài chính lẫn cơ hội làm ăn**.`,
  },

  {
    id: 'hoa-loc-tai-no-boc-tu-vi',
    title: 'Hóa Lộc Nô Bộc + Tử Vi chiếu',
    sao: ['Hóa Lộc'],
    cung: ['Nô Bộc'],
    ketHop: ['Tử Vi'],
    doUuTien: 73,
    tomTat: `🌟 **Hóa Lộc Nô Bộc + Tử Vi chiếu:** được **người chân tay trung thành**.`,
  },

  {
    id: 'hoa-loc-tai-no-boc-quyen',
    title: 'Hóa Lộc Nô Bộc + Hóa Quyền',
    sao: ['Hóa Lộc'],
    cung: ['Nô Bộc'],
    ketHop: ['Hóa Quyền'],
    doUuTien: 73,
    tomTat: `🌟 **Hóa Lộc Nô Bộc + Hóa Quyền:** **nhờ bạn thân làm nên**.`,
  },

  {
    id: 'hoa-loc-tai-no-boc-ham',
    title: 'Hóa Lộc Nô Bộc - Hãm địa',
    sao: ['Hóa Lộc'],
    cung: ['Nô Bộc'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `⚠️ **Hóa Lộc HÃM Nô Bộc:** "**bạn ít bè nhiều**", ngoài thân thiết mà trong **ngấm ngầm tính toán**.`,
  },

  {
    id: 'hoa-loc-tai-no-boc-xuong-khuc',
    title: 'Hóa Lộc Nô Bộc + Văn Xương / Văn Khúc',
    sao: ['Hóa Lộc'],
    cung: ['Nô Bộc'],
    ketHop: ['Văn Xương', 'Văn Khúc'],
    doUuTien: 73,
    tomTat: `🌟 **Hóa Lộc Nô Bộc + Văn Xương / Văn Khúc:** gặp **bạn hiền hợp tác thành công**.`,
  },

  {
    id: 'hoa-loc-tai-no-boc-kiep-hinh',
    title: 'Hóa Lộc Nô Bộc + Địa Kiếp / Thiên Hình',
    sao: ['Hóa Lộc'],
    cung: ['Nô Bộc'],
    ketHop: ['Địa Kiếp', 'Thiên Hình'],
    doUuTien: 73,
    tomTat: `⚠️ **Hóa Lộc Nô Bộc + Địa Kiếp / Thiên Hình:** "mật ngọt chết ruồi" — cần tỉnh táo chọn bạn.`,
  },

  // ============================================================
  // 13. Hóa Lộc tại Thiên Di
  // ============================================================
  {
    id: 'hoa-loc-tai-thien-di',
    title: 'Hóa Lộc tại Thiên Di',
    sao: ['Hóa Lộc'],
    cung: ['Thiên Di'],
    doUuTien: 78,
    tomTat: `🌟 **Hóa Lộc tại Thiên Di:** "**ra ngõ gặp quý nhân**".`,
  },

  {
    id: 'hoa-loc-tai-thien-di-tham-lang',
    title: 'Hóa Lộc Thiên Di + Tham Lang',
    sao: ['Hóa Lộc'],
    cung: ['Thiên Di'],
    ketHop: ['Tham Lang'],
    doUuTien: 75,
    tomTat: `🌟 **Hóa Lộc Thiên Di + Tham Lang:** càng **giàu sang**, có tài **quảng giao**, biết nắm bắt thời cơ làm giàu. Lợi thế lớn cho ngành **ngoại giao, kinh doanh, dịch vụ**.`,
  },

  {
    id: 'hoa-loc-tai-thien-di-thien-ma',
    title: 'Hóa Lộc Thiên Di + Thiên Mã',
    sao: ['Hóa Lộc'],
    cung: ['Thiên Di'],
    ketHop: ['Thiên Mã'],
    doUuTien: 75,
    tomTat: `🌟 **Hóa Lộc Thiên Di + Thiên Mã:** **sinh tài hữu lực** — đi xa thì phát đạt.`,
  },

  {
    id: 'hoa-loc-tai-thien-di-ham',
    title: 'Hóa Lộc Thiên Di - Hãm địa',
    sao: ['Hóa Lộc'],
    cung: ['Thiên Di'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `⚠️ **Hóa Lộc HÃM Thiên Di:** "đi đêm lắm có ngày gặp ma" — cần **tỉnh táo** khi giao dịch / hợp tác với người mới quen.`,
  },

  {
    id: 'hoa-loc-tai-thien-di-sat',
    title: 'Hóa Lộc Thiên Di + Kình Đà / Địa Kiếp / Thiên Hình',
    sao: ['Hóa Lộc'],
    cung: ['Thiên Di'],
    ketHop: ['Kình Dương', 'Đà La', 'Địa Kiếp', 'Thiên Hình'],
    doUuTien: 73,
    tomTat: `⚠️ **Hóa Lộc Thiên Di + Kình Đà / Địa Kiếp / Thiên Hình:** vướng **rắc rối, bị kẻ khác phá hoại**.`,
  },

  // ============================================================
  // 14. Hóa Lộc tại Tật Ách
  // ============================================================
  {
    id: 'hoa-loc-tai-tat-ach',
    title: 'Hóa Lộc tại Tật Ách',
    sao: ['Hóa Lộc'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `🌟 **Hóa Lộc tại Tật Ách:** sức khỏe **ổn định**, hồi phục nhanh khi đau ốm.`,
  },

  {
    id: 'hoa-loc-tai-tat-ach-dac-dia',
    title: 'Hóa Lộc Tật Ách - Đắc địa',
    sao: ['Hóa Lộc'],
    cung: ['Tật Ách'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 80,
    tomTat: `🌟 **Hóa Lộc ĐẮC Tật Ách:** **mau hết bệnh**, gặp **thầy gặp thuốc**, có cơ duyên gặp **thầy thuốc giỏi** hoặc phương pháp chữa phù hợp.`,
  },

  {
    id: 'hoa-loc-tai-tat-ach-dong-luong-tu-phu',
    title: 'Hóa Lộc Tật Ách + Đồng + Lương + Tử + Phủ',
    sao: ['Hóa Lộc'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Đồng', 'Thiên Lương', 'Tử Vi', 'Thiên Phủ'],
    doUuTien: 75,
    tomTat: `🌟 **Hóa Lộc Tật Ách + Thiên Đồng + Thiên Lương + Tử Vi + Thiên Phủ:** ốm gặp thuốc, **nạn gặp người cứu**.`,
  },

  {
    id: 'hoa-loc-tai-tat-ach-ham',
    title: 'Hóa Lộc Tật Ách - Hãm địa',
    sao: ['Hóa Lộc'],
    cung: ['Tật Ách'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `⚠️ **Hóa Lộc HÃM Tật Ách:** sức khỏe **hao tổn** bởi **bệnh mãn tính** — đặc biệt **tiêu hóa, gan mật**, "dai như đỉa bám".`,
  },

  {
    id: 'hoa-loc-tai-tat-ach-sat',
    title: 'Hóa Lộc Tật Ách + Kình Đà / Địa Kiếp / Thiên Hình',
    sao: ['Hóa Lộc'],
    cung: ['Tật Ách'],
    ketHop: ['Kình Dương', 'Đà La', 'Địa Kiếp', 'Thiên Hình'],
    doUuTien: 73,
    tomTat: `⚠️ **Hóa Lộc Tật Ách + Kình Đà / Địa Kiếp / Thiên Hình:** cảnh giác **bệnh nặng, tai nạn bất ngờ**.`,
  },

  // ============================================================
  // 15. Hóa Lộc tại Tài Bạch - VỊ TRÍ HỢP VỊ
  // ============================================================
  {
    id: 'hoa-loc-tai-tai-bach',
    title: '🌟 Hóa Lộc tại Tài Bạch - Vị trí HỢP VỊ',
    sao: ['Hóa Lộc'],
    cung: ['Tài Bạch'],
    doUuTien: 88,
    tomTat: `🌟 **Hóa Lộc tại Tài Bạch là VỊ TRÍ HỢP VỊ** — tượng trưng **lợi lộc tiền bạc**, giàu có dưới mọi hình thức (có tiền, có điền sản, có lộc ăn).

Dòng tiền **ổn định, sinh lời dài lâu**.`,
  },

  {
    id: 'hoa-loc-tai-tai-bach-dac-dia',
    title: 'Hóa Lộc Tài Bạch - Đắc địa',
    sao: ['Hóa Lộc'],
    cung: ['Tài Bạch'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 88,
    tomTat: `🌟 **Hóa Lộc ĐẮC Tài Bạch:** tài chính **bền vững**, làm ăn thuận lợi, có duyên **kinh doanh, ngân hàng, bất động sản**.`,
  },

  {
    id: 'hoa-loc-tai-tai-bach-loc-ma-phu',
    title: 'Hóa Lộc Tài Bạch + Lộc Tồn / Thiên Mã / Thiên Phủ',
    sao: ['Hóa Lộc'],
    cung: ['Tài Bạch'],
    ketHop: ['Lộc Tồn', 'Thiên Mã', 'Thiên Phủ'],
    doUuTien: 80,
    tomTat: `🌟 **Hóa Lộc Tài Bạch + Lộc Tồn / Thiên Mã / Thiên Phủ:** vận tiền tài **càng vượng**, "của vào như nước", **đại phú**.`,
  },

  {
    id: 'hoa-loc-tai-tai-bach-co-luong',
    title: 'Hóa Lộc Tài Bạch + Cơ Lương / Song Lộc',
    sao: ['Hóa Lộc'],
    cung: ['Tài Bạch'],
    ketHop: ['Thiên Cơ', 'Thiên Lương', 'Lộc Tồn'],
    doUuTien: 78,
    tomTat: `🌟 **Hóa Lộc Tài Bạch + Cơ Lương / Song Lộc (Hóa Lộc + Lộc Tồn):** **đại phú**.`,
  },

  {
    id: 'hoa-loc-tai-tai-bach-hong-loan-da-la',
    title: 'Hóa Lộc Tài Bạch + Hồng Loan + Đà La',
    sao: ['Hóa Lộc'],
    cung: ['Tài Bạch'],
    ketHop: ['Hồng Loan', 'Đà La'],
    doUuTien: 75,
    tomTat: `🌟 **Hóa Lộc Tài Bạch + Hồng Loan + Đà La:** hưởng **của thừa tự** người trong họ.`,
  },

  {
    id: 'hoa-loc-tai-tai-bach-an-quang',
    title: 'Hóa Lộc Tài Bạch + Ân Quang',
    sao: ['Hóa Lộc'],
    cung: ['Tài Bạch'],
    ketHop: ['Ân Quang'],
    doUuTien: 73,
    tomTat: `🌟 **Hóa Lộc Tài Bạch + Ân Quang:** **hiển đạt**.`,
  },

  {
    id: 'hoa-loc-tai-tai-bach-mo',
    title: 'Hóa Lộc Tài Bạch + Mộ',
    sao: ['Hóa Lộc'],
    cung: ['Tài Bạch'],
    ketHop: ['Mộ'],
    doUuTien: 73,
    tomTat: `🌟 **Hóa Lộc Tài Bạch + Mộ:** **của đến tận tay**.`,
  },

  {
    id: 'hoa-loc-tai-tai-bach-dai-tieu-hao',
    title: 'Hóa Lộc Tài Bạch + Đại Hao / Tiểu Hao',
    sao: ['Hóa Lộc'],
    cung: ['Tài Bạch'],
    ketHop: ['Đại Hao', 'Tiểu Hao'],
    doUuTien: 75,
    tomTat: `⚠️ **Hóa Lộc Tài Bạch + Đại Hao / Tiểu Hao:** **kiếm nhiều hết sạch**.`,
  },

  {
    id: 'hoa-loc-tai-tai-bach-ham-khong-kiep-ky',
    title: 'Hóa Lộc Tài Bạch - Hãm + Không Kiếp / Hóa Kỵ',
    sao: ['Hóa Lộc'],
    cung: ['Tài Bạch'],
    trangThai: ['Hãm'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Hóa Kỵ'],
    doUuTien: 80,
    tomTat: `⚠️ **Hóa Lộc HÃM Tài Bạch + Không Kiếp / Hóa Kỵ:** "thấy đỏ tưởng chín" → **mất trắng**, mỗi giao dịch phải cân nhắc kỹ — sơ suất → **thất thoát hoặc kiện tụng**.`,
  },

  // ============================================================
  // 16. Hóa Lộc tại Tử Tức
  // ============================================================
  {
    id: 'hoa-loc-tai-tu-tuc',
    title: 'Hóa Lộc tại Tử Tức',
    sao: ['Hóa Lộc'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Hóa Lộc tại Tử Tức:** ảnh hưởng đến con cái.`,
  },

  {
    id: 'hoa-loc-tai-tu-tuc-dac-dia',
    title: 'Hóa Lộc Tử Tức - Đắc địa',
    sao: ['Hóa Lộc'],
    cung: ['Tử Tức'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 78,
    tomTat: `🌟 **Hóa Lộc ĐẮC Tử Tức:** con cái **khôi ngô, sáng dạ, sớm bộc lộ tố chất và chí tiến thủ**.`,
  },

  {
    id: 'hoa-loc-tai-tu-tuc-khoa-xuong',
    title: 'Hóa Lộc Tử Tức + Hóa Khoa / Văn Xương',
    sao: ['Hóa Lộc'],
    cung: ['Tử Tức'],
    ketHop: ['Hóa Khoa', 'Văn Xương'],
    doUuTien: 73,
    tomTat: `🌟 **Hóa Lộc Tử Tức + Hóa Khoa / Văn Xương:** "**vinh quy bái tổ**", làm rạng danh gia tộc.`,
  },

  {
    id: 'hoa-loc-tai-tu-tuc-tam-hoa',
    title: 'Hóa Lộc Tử Tức + Tam Hóa',
    sao: ['Hóa Lộc'],
    cung: ['Tử Tức'],
    ketHop: ['Hóa Quyền', 'Hóa Khoa'],
    doUuTien: 73,
    tomTat: `🌟 **Hóa Lộc Tử Tức + Tam Hóa (Hóa Quyền + Hóa Khoa):** con **quý nhân làm nên sang giàu**.`,
  },

  {
    id: 'hoa-loc-tai-tu-tuc-ham',
    title: 'Hóa Lộc Tử Tức - Hãm địa',
    sao: ['Hóa Lộc'],
    cung: ['Tử Tức'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `⚠️ **Hóa Lộc HÃM Tử Tức:** **hiếm muộn** hoặc con **sức khỏe yếu, tính bướng bỉnh**.`,
  },

  {
    id: 'hoa-loc-tai-tu-tuc-kinh-kiep',
    title: 'Hóa Lộc Tử Tức + Kình Dương / Địa Kiếp',
    sao: ['Hóa Lộc'],
    cung: ['Tử Tức'],
    ketHop: ['Kình Dương', 'Địa Kiếp'],
    doUuTien: 73,
    tomTat: `⚠️ **Hóa Lộc Tử Tức + Kình Dương / Địa Kiếp:** chuyện buồn — **bệnh tật, xa cách, ly tán** → cần kiên nhẫn bao dung.`,
  },

  // ============================================================
  // 17. Hóa Lộc tại Phu Thê
  // ============================================================
  {
    id: 'hoa-loc-tai-phu-the',
    title: 'Hóa Lộc tại Phu Thê',
    sao: ['Hóa Lộc'],
    cung: ['Phu Thê'],
    doUuTien: 80,
    tomTat: `🌟 **Hóa Lộc tại Phu Thê:** vợ chồng **đồng lòng**, tình cảm **sắt son, gắn bó**, biết **đồng cam cộng khổ**, cùng vun đắp mái ấm và kinh tế.`,
  },

  {
    id: 'hoa-loc-tai-phu-the-tam-hoa-khoi-viet',
    title: 'Hóa Lộc Phu Thê + Tam Hóa + Khôi Việt',
    sao: ['Hóa Lộc'],
    cung: ['Phu Thê'],
    ketHop: ['Hóa Quyền', 'Hóa Khoa', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 75,
    tomTat: `🌟 **Hóa Lộc Phu Thê + Tam Hóa + Khôi Việt:** **quý nhân phối hợp**.`,
  },

  {
    id: 'hoa-loc-tai-phu-the-hong-loan',
    title: 'Hóa Lộc Phu Thê + Hồng Loan',
    sao: ['Hóa Lộc'],
    cung: ['Phu Thê'],
    ketHop: ['Hồng Loan'],
    doUuTien: 75,
    tomTat: `🌟 **Hóa Lộc Phu Thê + Hồng Loan:** **nhờ của vợ làm giàu**.`,
  },

  {
    id: 'hoa-loc-tai-phu-the-phu-quyen',
    title: 'Hóa Lộc Phu Thê + Thiên Phủ + Hóa Quyền',
    sao: ['Hóa Lộc'],
    cung: ['Phu Thê'],
    ketHop: ['Thiên Phủ', 'Hóa Quyền'],
    doUuTien: 75,
    tomTat: `🌟 **Hóa Lộc Phu Thê + Thiên Phủ + Hóa Quyền:** hôn nhân **bền chặt, ấm êm**.`,
  },

  {
    id: 'hoa-loc-tai-phu-the-ham',
    title: 'Hóa Lộc Phu Thê - Hãm địa',
    sao: ['Hóa Lộc'],
    cung: ['Phu Thê'],
    trangThai: ['Hãm'],
    doUuTien: 80,
    tomTat: `⚠️ **Hóa Lộc HÃM Phu Thê:** "cơm chẳng lành canh chẳng ngọt" do **tiền bạc, công việc, ngoại cảnh**.`,
  },

  {
    id: 'hoa-loc-tai-phu-the-ky-kinh-kiep',
    title: 'Hóa Lộc Phu Thê + Hóa Kỵ / Kình Đà / Địa Kiếp',
    sao: ['Hóa Lộc'],
    cung: ['Phu Thê'],
    ketHop: ['Hóa Kỵ', 'Kình Dương', 'Đà La', 'Địa Kiếp'],
    doUuTien: 75,
    tomTat: `⚠️ **Hóa Lộc Phu Thê + Hóa Kỵ / Kình Đà / Địa Kiếp:** **rạn nứt, chia ly, người thứ ba**.`,
  },

  // ============================================================
  // 18. Hóa Lộc tại Huynh Đệ
  // ============================================================
  {
    id: 'hoa-loc-tai-huynh-de',
    title: 'Hóa Lộc tại Huynh Đệ',
    sao: ['Hóa Lộc'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Hóa Lộc tại Huynh Đệ:** ảnh hưởng đến anh chị em.`,
  },

  {
    id: 'hoa-loc-tai-huynh-de-dac-dia',
    title: 'Hóa Lộc Huynh Đệ - Đắc địa',
    sao: ['Hóa Lộc'],
    cung: ['Huynh Đệ'],
    trangThai: ['Đắc', 'Vượng', 'Miếu'],
    doUuTien: 78,
    tomTat: `🌟 **Hóa Lộc ĐẮC Huynh Đệ:** anh em **hòa thuận, gắn bó, hỗ trợ tinh thần lẫn vật chất**. "Máu chảy ruột mềm" — có thể **hợp tác làm ăn** thành công.`,
  },

  {
    id: 'hoa-loc-tai-huynh-de-tuong-loc',
    title: 'Hóa Lộc Huynh Đệ + Thiên Tướng + Song Lộc',
    sao: ['Hóa Lộc'],
    cung: ['Huynh Đệ'],
    ketHop: ['Thiên Tướng', 'Lộc Tồn'],
    doUuTien: 73,
    tomTat: `🌟 **Hóa Lộc tại Huynh Đệ + Thiên Tướng + Song Lộc (Hóa Lộc + Lộc Tồn):**
anh em có **người quyền quý**, làm quan có chức vị.`,
  },

  {
    id: 'hoa-loc-tai-huynh-de-thien-ma',
    title: 'Hóa Lộc Huynh Đệ + Thiên Mã',
    sao: ['Hóa Lộc'],
    cung: ['Huynh Đệ'],
    ketHop: ['Thiên Mã'],
    doUuTien: 73,
    tomTat: `🌟 **Hóa Lộc Huynh Đệ + Thiên Mã:** có người **buôn bán giàu**.`,
  },

  {
    id: 'hoa-loc-tai-huynh-de-ham',
    title: 'Hóa Lộc Huynh Đệ - Hãm địa',
    sao: ['Hóa Lộc'],
    cung: ['Huynh Đệ'],
    trangThai: ['Hãm'],
    doUuTien: 78,
    tomTat: `⚠️ **Hóa Lộc HÃM Huynh Đệ:** tình cảm **phai nhạt**, mâu thuẫn / **tranh chấp tài sản**.`,
  },

  {
    id: 'hoa-loc-tai-huynh-de-kinh-kiep-khong-ky',
    title: 'Hóa Lộc Huynh Đệ + Kình Đà / Địa Kiếp / Thiên Không / Hóa Kỵ',
    sao: ['Hóa Lộc'],
    cung: ['Huynh Đệ'],
    ketHop: ['Kình Dương', 'Đà La', 'Địa Kiếp', 'Thiên Không', 'Hóa Kỵ'],
    doUuTien: 73,
    tomTat: `⚠️ **Hóa Lộc Huynh Đệ + Kình Đà / Địa Kiếp / Thiên Không / Hóa Kỵ:** sứt mẻ khó hàn gắn, nặng → **tuyệt giao**.`,
  },

  // ============================================================
  // 19. Hóa Lộc gặp Sao XẤU - cát xứ tàng hung
  // ============================================================
  {
    id: 'hoa-loc-cat-xu-tang-hung',
    title: '⚠️ Hóa Lộc + sao xấu - "Cát xứ tàng hung"',
    sao: ['Hóa Lộc'],
    doUuTien: 55,
    tomTat: `⚠️ **Hóa Lộc + sao xấu** dễ thành cách **"cát xứ tàng hung"** — bề ngoài tốt, ẩn họa lớn.

→ Người Hóa Lộc cần **hành động thực tế** và **tỉnh táo** mới khai phá được kho lộc.`,
  },

  {
    id: 'hoa-loc-bao-phat-bao-tan',
    title: 'Hóa Lộc + Không Kiếp - bạo phát bạo tàn',
    sao: ['Hóa Lộc'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 56,
    tomTat: `⚠️ **Hóa Lộc + Không Kiếp:** **bạo phát bạo tàn** — cơ hội tưởng tốt nhưng nhiều rắc rối, mất nhiều hơn được.`,
  },

  {
    id: 'hoa-loc-canh-tranh-kinh-da',
    title: 'Hóa Lộc + Kình Đà - cạnh tranh',
    sao: ['Hóa Lộc'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 56,
    tomTat: `⚠️ **Hóa Lộc + Kình Đà:** dễ gặp **cạnh tranh** — không sợ cạnh tranh, chỉ sợ bản thân **không chịu phát triển**.`,
  },

  {
    id: 'hoa-loc-co-hoi-hoa-linh',
    title: 'Hóa Lộc + Hỏa Linh - cơ hội bất ngờ',
    sao: ['Hóa Lộc'],
    ketHop: ['Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 56,
    tomTat: `⚠️ **Hóa Lộc + Hỏa Linh:** cuộc đời nhiều **cơ hội bất ngờ** — đòi hỏi **nắm bắt nhanh nhạy**.`,
  },
];
