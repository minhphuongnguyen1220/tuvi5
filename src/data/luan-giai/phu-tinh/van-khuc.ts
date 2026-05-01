import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO VĂN KHÚC - Lục Cát Tinh, Văn Tinh + Phúc Tinh
 */
export const luanGiai_VanKhuc: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung của sao Văn Khúc
  // ============================================================
  {
    id: 'van-khuc-tinh-chat-chung',
    title: 'Văn Khúc - Đặc tính chung',
    sao: ['Văn Khúc'],
    doUuTien: 30,
    tomTat: `**Văn Khúc** thuộc bộ **Lục Cát Tinh**, là **Văn Tinh + Phúc Tinh**,
ngũ hành **Thủy**.

**Đặc tính:** chủ về **học vấn, khoa bảng, tài năng nghệ thuật**.

**Vị trí miếu hãm:**
- **Đắc địa:** Thìn, Tuất, Sửu, Mùi, Tỵ, Hợi
- **Hãm địa:** Tý, Dần, Ngọ, Thân

⚠️ Vì là **hành Thủy** → mang **tính đào hoa**, khác Văn Xương (hành Kim).
Cảm xúc dễ thay đổi, **yêu đương phong lưu**.`,

    chiTiet: `## So sánh Văn Xương vs Văn Khúc

| Đặc điểm | Văn Xương | Văn Khúc |
|---|---|---|
| **Ngũ hành** | Kim | **Thủy** |
| **Tính chất** | Chính trực, học vấn | **Đa cảm, đào hoa** |
| **Năng khiếu** | Văn chương, hùng biện | **Nghệ thuật, thủ công** |
| **Vị trí miếu hãm** | Đắc Thìn/Tuất/Sửu/Mùi/Tỵ/Hợi; Hãm Tý/Dần/Ngọ/Thân | Cùng |

→ Cả hai cùng đắc/hãm tại các cung giống nhau, nhưng **bản chất khác**:
- Văn Xương = ngay thẳng, chính trực
- Văn Khúc = đa tình, đào hoa, dễ lay động trước cái đẹp

## Cặp Xương Khúc

Văn Xương + Văn Khúc = bộ **"Xương Khúc"** — biểu trưng cho **tài học vấn,
văn chương, nghệ thuật**.

🌟 **Xương Khúc giáp Mệnh** hoặc **đồng cung** → cách rất quý, thông minh tài
năng, đỗ đạt cao.

## Vận trình

- **Sự nghiệp:** phù hợp **văn học, nghệ thuật, thủ công, mỹ nghệ, ngôn ngữ**
- **Duyên vận:** vợ chồng **"môn đăng hộ đối"**, có học thức, hòa thuận
- **Tài lộc:** kiếm tiền bằng **trí tuệ, học vấn**, có kiến thức **kinh tế** áp
  dụng vào thực tiễn
- **Phúc thọ:** dễ bệnh **tình ái**; hãm hoặc gặp sát tinh → **bệnh nan y khó chữa**`,
  },

  // ============================================================
  // 2. Văn Khúc tại Mệnh
  // ============================================================
  {
    id: 'van-khuc-tai-menh',
    title: 'Văn Khúc tại Mệnh',
    sao: ['Văn Khúc'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `**Văn Khúc cư Mệnh:** vẻ ngoài **thanh tú, điển trai, thanh lịch, thư
sinh**.

Tính cách: đam mê đèn sách, **cẩn thận, thông minh**, "trên thông thiên văn,
dưới tường địa lý", **tự giác cao**. Tài năng về **văn chương, mỹ thuật, âm
nhạc, khiếu ăn nói**.

Không gặp hung sát tinh → **thẳng thắn, chính trực, bảo vệ lẽ phải**, không lọc lừa.

⚠️ Vì hành Thủy + tính nghệ thuật cao → **rất đa cảm**, dễ lay động trước cái đẹp
→ **đào hoa tiềm ẩn**, tình cảm dễ thay đổi, **yêu đương phong lưu**.`,

    chiTiet: `## Tính tình

**Thông minh, có học thức, hoạt bát**, có **năng khiếu sắc bén** về văn chương,
mỹ thuật, âm nhạc và nhiều lĩnh vực khác.

## Công danh tài lộc

**Văn Khúc đắc địa:** bộ sao **phú quý, hiển đạt, phúc thọ rất có giá trị**.
- **+ Lộc Tồn:** tài năng **xuất chúng**
- **+ Vũ Khúc:** tài năng kiêm nhiếp **văn võ**, có **uy danh lừng lẫy** và giàu sang

**Giáp Mệnh** cũng tốt — nhưng đắc thời nhờ **hoàn cảnh bên ngoài** nhiều hơn
là tài năng của chính mình.

⚠️ **Văn Khúc hãm địa:**
- **Khốn khổ**, phải bỏ làng lập nghiệp ở xa
- **Có tật, bị tai họa**, hoặc **yểu tử**`,
  },

  {
    id: 'van-khuc-tai-menh-nu-menh',
    title: 'Văn Khúc tại Mệnh - Nữ mệnh duyên dáng',
    sao: ['Văn Khúc'],
    cung: ['Mệnh'],
    gioiTinh: 'Nữ',
    doUuTien: 75,
    tomTat: `🌟 **Văn Khúc thủ Mệnh — nữ mệnh:**
- **DUYÊN DÁNG, NHAN SẮC XINH ĐẸP**
- Phong thái **ĐOAN TRANG**
- Đa cảm, lãng mạn, dễ lay động trước cái đẹp`,
  },

  {
    id: 'van-khuc-menh-ham-nu-sat-tinh',
    title: 'Văn Khúc Hãm + sát tinh tại Mệnh - Nữ giang hồ',
    sao: ['Văn Khúc'],
    cung: ['Mệnh'],
    trangThai: ['Hãm'],
    gioiTinh: 'Nữ',
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 73,
    tomTat: `⚠️ **Văn Khúc HÃM + sát tinh tại Mệnh — nữ mệnh:**
- Có thể là **gái giang hồ**
- **KHẮC CHỒNG, TI TIỆN**
- **Dâm đãng**, u buồn vì gia đạo`,
  },

  // ============================================================
  // 3. Bộ sao TỐT của Văn Khúc
  // ============================================================
  {
    id: 'van-khuc-bo-sao-tot',
    title: 'Văn Khúc - Bộ sao TỐT',
    sao: ['Văn Khúc'],
    doUuTien: 50,
    tomTat: `**Bộ sao tốt của Văn Khúc:**

- **+ Hóa Khoa:** **thi đỗ dễ và cao**, có **văn bằng cao**
- **+ Hóa Khoa + Khôi Việt:** **khoa giáp tột đỉnh**, thông minh xuất chúng,
  được trọng dụng đắc thời. **+ Nhật Nguyệt sáng:** tài năng đạt **mức quốc tế**
- **+ Thái Dương sáng:** **lịch duyệt, học rộng, biết nhiều**
- **+ Thiên Lương:** **quý hiển, có uy danh lớn**
- **+ Thiên Cơ:** **khéo léo, tinh xảo về thủ công và ngôn ngữ**
- **+ Vũ Khúc** (cách "Lưỡng Khúc"): tài năng **văn võ**, lừng lẫy. **+ Tả Hữu:**
  **phú quý song toàn**, hiển vinh về võ`,
  },

  // ============================================================
  // 4. Bộ sao XẤU của Văn Khúc
  // ============================================================
  {
    id: 'van-khuc-bo-sao-xau',
    title: 'Văn Khúc - Bộ sao XẤU',
    sao: ['Văn Khúc'],
    doUuTien: 50,
    tomTat: `⚠️ **Bộ sao xấu của Văn Khúc:**

- **+ Liêm Trinh ở Sửu/Mùi/Tỵ/Hợi/Mão/Dậu:** **giảm thọ**. Đặc biệt **Tỵ Hợi** —
  hay **tai họa, tù tội, yểu tử**
- **+ Tuần Triệt / Hóa Kỵ / Phá Quân đồng cung:** thi cử **lận đận, dang dở,
  gián đoạn**, công danh chật vật, phải tha phương, bị tù tội, **yểu tử**
- **+ Thiên Riêu:** **lãng mạn, rất xinh đẹp** (đào hoa quá mức, lụy tình)`,
  },

  // ============================================================
  // 5. Cách Xương Khúc - Văn Xương + Văn Khúc
  // ============================================================
  {
    id: 'van-khuc-cach-xuong-khuc',
    title: 'Cách Xương Khúc - Văn Xương + Văn Khúc',
    sao: ['Văn Khúc', 'Văn Xương'],
    doUuTien: 60,
    tomTat: `🌟 **Cách Xương Khúc:** Văn Xương + Văn Khúc đi cùng nhau (đồng cung,
giáp Mệnh, hoặc hội chiếu).

**Khoa giáp tột đỉnh** khi đi với:
- **Hóa Khoa + Thiên Khôi + Thiên Việt:** thông minh xuất chúng, có **tài thao
  lược**, được trọng dụng đắc thời
- **+ Nhật Nguyệt sáng:** tài năng đạt **mức QUỐC TẾ**, dễ **nổi danh**

**Đi cùng Vũ Khúc** = cách **"Lưỡng Khúc"** — văn võ song toàn:
- Có **quyền uy, quyết đoán**
- Có **trí tuệ, danh tiếng, tài lộc thịnh vượng**

⚠️ Dù Nhật Nguyệt hãm địa, **Xương Khúc vẫn giúp thành công sớm** nhờ thông minh
và chăm chỉ.`,
  },

  // ============================================================
  // 6. Văn Khúc tại Phụ Mẫu
  // ============================================================
  {
    id: 'van-khuc-tai-phu-mau',
    title: 'Văn Khúc tại Phụ Mẫu',
    sao: ['Văn Khúc'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Văn Khúc tại Phụ Mẫu:** cha mẹ là người **có học thức**, yêu thích
**nghệ thuật, văn chương**, **sống tình cảm, dễ xúc động**.

Chủ mệnh được sinh ra trong **gia đình gia giáo**, **thừa hưởng tri thức** từ
cha mẹ, có **điều kiện thuận lợi để học tập và rèn luyện**.`,
  },

  // ============================================================
  // 7. Văn Khúc tại Phúc Đức
  // ============================================================
  {
    id: 'van-khuc-tai-phuc-duc',
    title: 'Văn Khúc tại Phúc Đức',
    sao: ['Văn Khúc'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `🌟 **Văn Khúc tại Phúc Đức:** gia tộc có **truyền thống hiếu học**,
nhiều người **đỗ đạt cao, có bằng cấp**.

Đương số thừa hưởng **khả năng nghiên cứu, tinh thần ham học** của dòng họ.

🌟 **+ Văn Xương / Hóa Khoa / Khôi Việt / Quốc Ấn:** nền tảng và phúc phần càng
**dồi dào**. Tổ tiên có **"mồ yên mả đẹp"**, trên mộ thường có **câu đối, câu thơ**.`,
  },

  // ============================================================
  // 8. Văn Khúc tại Điền Trạch
  // ============================================================
  {
    id: 'van-khuc-tai-dien-trach',
    title: 'Văn Khúc tại Điền Trạch',
    sao: ['Văn Khúc'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Văn Khúc tại Điền Trạch:** nhà của đương số **đẹp, có tính nghệ
thuật**, **nhiều sách, tranh ảnh, bằng khen**.

Thường ở **khu vực có dân trí cao** → hàng xóm láng giềng cũng là **người có
học thức, văn hóa**.`,
  },

  // ============================================================
  // 9. Văn Khúc tại Quan Lộc
  // ============================================================
  {
    id: 'van-khuc-tai-quan-loc',
    title: 'Văn Khúc tại Quan Lộc',
    sao: ['Văn Khúc'],
    cung: ['Quan Lộc'],
    doUuTien: 80,
    tomTat: `**Văn Khúc tại Quan Lộc:** phù hợp các nghề liên quan **văn học,
nghệ thuật, thủ công, mỹ nghệ, ngôn ngữ**.

**Học hỏi nhanh**, thích tìm hiểu kiến thức mới → mở rộng vốn sống và tri thức.

🌟 Có **nhiều bằng cấp**, biết vận dụng kiến thức vào công việc → dễ **nổi danh**,
đạt nhiều **thành tựu lớn**.`,
  },

  // ============================================================
  // 10. Văn Khúc tại Nô Bộc
  // ============================================================
  {
    id: 'van-khuc-tai-no-boc',
    title: 'Văn Khúc tại Nô Bộc',
    sao: ['Văn Khúc'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Văn Khúc tại Nô Bộc:** bạn bè đồng nghiệp là **người có học thức,
tài nghệ**, có khả năng **giúp đỡ trong học tập và công việc**.

⚠️ Vì Văn Khúc mang **tính đào hoa** → giữa chủ mệnh và bạn bè đồng nghiệp **dễ
nảy sinh tình cảm** → cần lưu ý tránh các tình huống khó xử.`,
  },

  // ============================================================
  // 11. Văn Khúc tại Thiên Di
  // ============================================================
  {
    id: 'van-khuc-tai-thien-di',
    title: 'Văn Khúc tại Thiên Di',
    sao: ['Văn Khúc'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Văn Khúc tại Thiên Di:** ra ngoài có khả năng **ngoại giao tốt**,
được nhiều người **quý mến, giúp đỡ** — đặc biệt là **người khác giới**.

Thường đến những nơi có **văn hóa**, gặp được **người giỏi** → "đi một ngày đàng,
học một sàng khôn", **mở mang kiến thức và nhân duyên**.`,
  },

  // ============================================================
  // 12. Văn Khúc tại Tật Ách - VỊ TRÍ KHÔNG TỐT
  // ============================================================
  {
    id: 'van-khuc-tai-tat-ach',
    title: '⚠️ Văn Khúc tại Tật Ách - Vị trí KHÔNG TỐT',
    sao: ['Văn Khúc'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `⚠️ **Văn Khúc tại Tật Ách là vị trí KHÔNG TỐT:** chủ về **bệnh tật
liên quan đến tình ái**.

⚠️ **Hãm địa hoặc + Linh Tinh / Hỏa Tinh / Không Kiếp / Hóa Kỵ:** dễ mắc các
**bệnh nan y, bệnh khó chữa**.`,
  },

  // ============================================================
  // 13. Văn Khúc tại Tài Bạch
  // ============================================================
  {
    id: 'van-khuc-tai-tai-bach',
    title: 'Văn Khúc tại Tài Bạch',
    sao: ['Văn Khúc'],
    cung: ['Tài Bạch'],
    doUuTien: 78,
    tomTat: `**Văn Khúc tại Tài Bạch:** kiếm tiền bằng **trí tuệ, học vấn** hoặc
các nghề **văn chương, nghệ thuật**.

Biết **nghiên cứu sâu về tài chính**, có **kiến thức kinh tế áp dụng vào thực tiễn**.

⚠️ Có xu hướng **chi tiêu và đầu tư** nhiều cho **làm đẹp, nghệ thuật**, và cả
**vấn đề yêu đương tình cảm bên ngoài**.`,
  },

  // ============================================================
  // 14. Văn Khúc tại Tử Tức
  // ============================================================
  {
    id: 'van-khuc-tai-tu-tuc',
    title: 'Văn Khúc tại Tử Tức',
    sao: ['Văn Khúc'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Văn Khúc tại Tử Tức:** đương số **có đông con**.

🌟 **+ Văn Xương / Khôi Việt:** con cái **thông minh, chăm chỉ**, có năng khiếu
về **học tập và nghệ thuật**.`,
  },

  // ============================================================
  // 15. Văn Khúc tại Phu Thê
  // ============================================================
  {
    id: 'van-khuc-tai-phu-the',
    title: 'Văn Khúc tại Phu Thê',
    sao: ['Văn Khúc'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `**Văn Khúc tại Phu Thê:** vợ chồng **"môn đăng hộ đối"**, có **học
thức, sống hòa thuận**.

Người hôn phối có **thiên hướng nghệ thuật, ham học hỏi**, có khả năng **học
lên cao**.

Đương số trong tình cảm là người **giàu cảm xúc**.`,
  },

  // ============================================================
  // 16. Văn Khúc tại Huynh Đệ
  // ============================================================
  {
    id: 'van-khuc-tai-huynh-de',
    title: 'Văn Khúc tại Huynh Đệ',
    sao: ['Văn Khúc'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Văn Khúc tại Huynh Đệ:** gia đình **đông anh chị em**, dễ có người
**thành danh, tài hoa, phong lưu**.

Anh chị em thường đi theo con đường **học hành, nghệ thuật, văn chương** → tạo
**truyền thống hiếu học** cho gia đình.

Đương số được **thừa hưởng nhiều** từ môi trường tích cực đó.`,
  },

  // ============================================================
  // 17. Văn Khúc + Liêm Trinh tại Tỵ / Hợi - cách XẤU
  // ============================================================
  {
    id: 'van-khuc-liem-trinh-ty-hoi',
    title: '⚠️ Văn Khúc + Liêm Trinh tại Tỵ / Hợi - Cách XẤU',
    sao: ['Văn Khúc', 'Liêm Trinh'],
    cung: ['Mệnh'],
    chi: ['Tỵ', 'Hợi'],
    doUuTien: 88,
    tomTat: `⚠️ **Văn Khúc + Liêm Trinh tại Tỵ / Hợi** = cách **CỰC XẤU**:

- **Giảm thọ**
- Hay **tai họa, tù tội**
- **Yểu tử**

Đặc biệt khi đi cùng **Tuần / Triệt / Hóa Kỵ / Phá Quân:** học hành thi cử **lận
đận**, công danh chật vật, phải **tha phương**, **tù tội, yểu tử**.`,
  },

  {
    id: 'van-khuc-liem-trinh-rieu-ty-hoi-nu',
    title: 'Văn Khúc + Liêm Trinh + Riêu tại Tỵ/Hợi - Nữ lụy tình',
    sao: ['Văn Khúc', 'Liêm Trinh'],
    cung: ['Mệnh'],
    chi: ['Tỵ', 'Hợi'],
    gioiTinh: 'Nữ',
    ketHop: ['Thiên Riêu'],
    doUuTien: 80,
    tomTat: `⚠️ **Văn Khúc + Liêm Trinh + Thiên Riêu tại Tỵ / Hợi — nữ mệnh:**
- Thêm **ĐÀO HOA, ĐA TÌNH**
- Xinh đẹp lãng mạn nhưng **LỤY TÌNH**
- Thích **tâm linh, tín ngưỡng**`,
  },
];
