import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO VĂN XƯƠNG - Lục Cát Tinh, Văn Tinh
 */
export const luanGiai_VanXuong: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung của sao Văn Xương
  // ============================================================
  {
    id: 'van-xuong-tinh-chat-chung',
    title: 'Văn Xương - Đặc tính chung',
    sao: ['Văn Xương'],
    doUuTien: 30,
    tomTat: `**Văn Xương** thuộc bộ **Lục Cát Tinh**, là **Văn Tinh**, ngũ hành
**Kim**.

**Đặc tính:** **khoa giáp, quý hiển, thông minh**.

**Ưu điểm:** có **tài văn chương, nghệ thuật, hiếu học**, **tư duy tốt**, có
khả năng **lý luận, hùng biện**.

**Nhược điểm:** **cảm xúc dễ bị lay động**.

**Vị trí miếu hãm:**
- **Đắc địa:** Thìn, Tuất, Sửu, Mùi, Tỵ, Hợi
- **Hãm địa:** Tý, Dần, Ngọ, Thân

Luôn đi cặp với **Văn Khúc** (bộ "Xương Khúc") — biểu trưng cho **học vấn, văn
hóa, nghệ thuật**.`,
  },

  // ============================================================
  // 2. Văn Xương tại Mệnh - tướng mạo & tính cách
  // ============================================================
  {
    id: 'van-xuong-tai-menh',
    title: 'Văn Xương tại Mệnh',
    sao: ['Văn Xương'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `**Văn Xương cư Mệnh:** vẻ mặt **thanh tú, khôi ngô**. Nữ thì có **nhan
sắc**.

Tính cách: **thông minh bẩm sinh, tài năng, học thức**, có **tâm hồn nhạy cảm**,
thích khám phá kiến thức mới. Có **năng khiếu nghệ thuật** (văn chương, mỹ thuật,
âm nhạc), nhạy cảm với **ngôn từ, hình ảnh, màu sắc, âm thanh**.

🌟 Có **khả năng hùng biện mạnh mẽ**, ăn nói **lưu loát và khéo léo**.

→ Con đường công danh, tài lộc **phát triển tốt**.`,

    chiTiet: `## Sự nghiệp

- Dễ **thành danh, đắc thời** bởi chính tài năng
- Sự nghiệp **phát triển**, dễ tạo được **uy danh, sự nổi tiếng**, gặt hái nhiều
  thành tựu
- Có thể dành **rất nhiều thời gian cho việc học** → xu hướng học **thạc sĩ, tiến
  sĩ, giáo sư**

## Hôn nhân

- **Giàu tình cảm, đa cảm, đa tình, nhạy cảm**
- Mối quan hệ hôn nhân **khá ổn định**
- Người hôn phối có thể là **danh giá, có học thức, nhiều bằng cấp**

## Tài lộc

- Biết **tận dụng tri thức** để tạo dựng tài lộc
- **Chi tiêu hợp lý**, có **kế hoạch tích lũy và đầu tư**
- Tài vận **ổn định**, ít khi túng thiếu

## Phúc thọ

**Phú quý, phúc thọ** — cuộc sống **ổn định, có uy danh**, ít gặp tai họa nguy
hiểm.`,
  },

  // ============================================================
  // 3. Bộ sao TỐT của Văn Xương
  // ============================================================
  {
    id: 'van-xuong-bo-sao-tot',
    title: 'Văn Xương - Bộ sao TỐT (chỉ dẫn chung)',
    sao: ['Văn Xương'],
    doUuTien: 50,
    tomTat: `**Bộ sao tốt của Văn Xương:** xem các entry chuyên biệt theo từng kết hợp sao.`,
  },

  {
    id: 'van-xuong-khuc-khoa',
    title: 'Văn Xương + Văn Khúc + Hóa Khoa - đỗ đạt văn bằng cao',
    sao: ['Văn Xương'],
    ketHop: ['Văn Khúc', 'Hóa Khoa'],
    doUuTien: 45,
    tomTat: `🌟 **Văn Xương + Văn Khúc + Hóa Khoa:** dễ dàng **đỗ đạt**, có **văn bằng và chứng chỉ cao**.`,
  },

  {
    id: 'van-xuong-khoi-viet',
    title: 'Văn Xương + Thiên Khôi + Thiên Việt - quý nhân phù trợ',
    sao: ['Văn Xương'],
    ketHop: ['Thiên Khôi', 'Thiên Việt'],
    doUuTien: 45,
    tomTat: `🌟 **Văn Xương + Thiên Khôi + Thiên Việt:** **gặp quý nhân phù trợ**, đường học hành công danh thuận lợi.`,
  },

  {
    id: 'van-xuong-thai-phong',
    title: 'Văn Xương + Thai Phụ + Phong Cáo - tiến thân qua bằng cấp',
    sao: ['Văn Xương'],
    ketHop: ['Thai Phụ', 'Phong Cáo'],
    doUuTien: 45,
    tomTat: `🌟 **Văn Xương + Thai Phụ + Phong Cáo:** cơ hội **tiến thân qua bằng cấp giấy tờ**, gia đình có **truyền thống hiếu học**.`,
  },

  {
    id: 'van-xuong-vu-khuc',
    title: 'Văn Xương + Vũ Khúc - tài năng văn chương nghệ thuật',
    sao: ['Văn Xương'],
    ketHop: ['Vũ Khúc'],
    doUuTien: 45,
    tomTat: `🌟 **Văn Xương + Vũ Khúc:** **tài năng văn chương, nghệ thuật**, dễ có **danh tiếng lẫy lừng**.`,
  },

  {
    id: 'van-xuong-vu-khuc-ta-huu',
    title: 'Văn Xương + Vũ Khúc + Tả Phù + Hữu Bật - phú quý hiển vinh',
    sao: ['Văn Xương'],
    ketHop: ['Vũ Khúc', 'Tả Phù', 'Hữu Bật'],
    doUuTien: 45,
    tomTat: `🌟 **Văn Xương + Vũ Khúc + Tả Phù + Hữu Bật:** càng **phú quý hiển vinh**.`,
  },

  // ============================================================
  // 4. Bộ sao XẤU của Văn Xương
  // ============================================================
  {
    id: 'van-xuong-bo-sao-xau',
    title: 'Văn Xương - Bộ sao XẤU (chỉ dẫn chung)',
    sao: ['Văn Xương'],
    doUuTien: 50,
    tomTat: `⚠️ **Bộ sao xấu của Văn Xương:** xem các entry chuyên biệt theo từng kết hợp sao.`,
  },

  {
    id: 'van-xuong-hoa-ky',
    title: 'Văn Xương + Hóa Kỵ - học mà không ứng dụng',
    sao: ['Văn Xương'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 45,
    tomTat: `⚠️ **Văn Xương + Hóa Kỵ:** **học nhiều mà không ứng dụng được**, dễ **vướng tai tiếng, thị phi**.`,
  },

  {
    id: 'van-xuong-khong-kiep',
    title: 'Văn Xương + Địa Không / Địa Kiếp - công danh gián đoạn',
    sao: ['Văn Xương'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 45,
    tomTat: `⚠️ **Văn Xương + Địa Không / Địa Kiếp:** khó khăn trắc trở học hành công việc, có thể **tai họa bất ngờ** khiến công danh **gián đoạn**.`,
  },

  {
    id: 'van-xuong-thien-hinh',
    title: 'Văn Xương + Thiên Hình - thương tật pháp lý',
    sao: ['Văn Xương'],
    ketHop: ['Thiên Hình'],
    doUuTien: 45,
    tomTat: `⚠️ **Văn Xương + Thiên Hình:** có thể **bị thương tật** hoặc gặp **rắc rối pháp lý**.`,
  },

  {
    id: 'van-xuong-phuc-binh-bach-ho',
    title: 'Văn Xương + Phục Binh / Bạch Hổ - tiểu nhân hại sau lưng',
    sao: ['Văn Xương'],
    ketHop: ['Phục Binh', 'Bạch Hổ'],
    doUuTien: 45,
    tomTat: `⚠️ **Văn Xương + Phục Binh / Bạch Hổ:** dễ bị **phản bội, cản trở** bởi người thân/bạn bè, có **tiểu nhân gây họa sau lưng**.`,
  },

  // ============================================================
  // 5. Văn Xương tại Phụ Mẫu
  // ============================================================
  {
    id: 'van-xuong-tai-phu-mau',
    title: 'Văn Xương tại Phụ Mẫu',
    sao: ['Văn Xương'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Văn Xương tại Phụ Mẫu:** cha mẹ là người **có học thức, chức danh**,
hoặc là người **tài nghệ khéo léo**, có **danh tiếng về thủ công, nghệ thuật**.

Cha mẹ thường **dễ xúc động, đa sầu đa cảm**, dễ lung lay trước cái đẹp — **nhạy
cảm với tâm hồn nghệ sĩ lãng mạn, nhẹ nhàng**.`,
  },

  // ============================================================
  // 6. Văn Xương tại Phúc Đức
  // ============================================================
  {
    id: 'van-xuong-tai-phuc-duc',
    title: 'Văn Xương tại Phúc Đức',
    sao: ['Văn Xương'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `🌟 **Văn Xương tại Phúc Đức:** dòng họ có **truyền thống hiếu học**,
nhiều người **có bằng cấp, đạt chức vị cao**.

Đương số được **hưởng phúc đức** của gia đình dòng họ, **học tập tốt**, dễ
**thành công và gặt hái nhiều thành tựu**.`,
  },

  // ============================================================
  // 7. Văn Xương tại Điền Trạch
  // ============================================================
  {
    id: 'van-xuong-tai-dien-trach',
    title: 'Văn Xương tại Điền Trạch',
    sao: ['Văn Xương'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `**Văn Xương tại Điền Trạch:** dễ có được **điền sản**.

Nhà cửa thường ở **khu vực có dân trí cao**, hàng xóm láng giềng là **người có
học thức**.

Đương số thích **bài trí, chăm chút nhà cửa** → không gian sống **gọn gàng,
sạch sẽ, có tính nghệ thuật cao**.`,
  },

  // ============================================================
  // 8. Văn Xương tại Quan Lộc
  // ============================================================
  {
    id: 'van-xuong-tai-quan-loc',
    title: 'Văn Xương tại Quan Lộc',
    sao: ['Văn Xương'],
    cung: ['Quan Lộc'],
    doUuTien: 80,
    tomTat: `**Văn Xương tại Quan Lộc:** người **ham học**, thích tìm hiểu điều
mới mẻ, **khéo tay**, có **trí tưởng tượng và khả năng cảm thụ nghệ thuật tốt**.

Phù hợp các công việc liên quan: **đồ thủ công, mỹ nghệ, mỹ thuật, văn học**,
mỹ phẩm, thiết kế… → dễ **phát triển mạnh mẽ**.`,
  },

  // ============================================================
  // 9. Văn Xương tại Nô Bộc
  // ============================================================
  {
    id: 'van-xuong-tai-no-boc',
    title: 'Văn Xương tại Nô Bộc',
    sao: ['Văn Xương'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `**Văn Xương tại Nô Bộc:** bạn bè đồng nghiệp là **người có học thức,
tốt bụng nhưng ham vui**.

Họ có **thiên hướng nghệ thuật**, ăn nói **khéo léo**, dễ tạo thiện cảm. ⚠️ Đôi
khi **thiếu thực tế** hoặc dễ bị **chi phối bởi cảm xúc**.

Đương số dễ được **đồng nghiệp quý mến, hỗ trợ** nhờ giao tiếp **nhẹ nhàng, lịch
thiệp, hiểu biết sâu rộng**.`,
  },

  // ============================================================
  // 10. Văn Xương tại Thiên Di
  // ============================================================
  {
    id: 'van-xuong-tai-thien-di',
    title: 'Văn Xương tại Thiên Di',
    sao: ['Văn Xương'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Văn Xương tại Thiên Di:** ra ngoài được **làm quen, tiếp cận với
nhiều bạn bè có học thức, danh giá**.

Xây dựng được **mối quan hệ chất lượng** → **học hỏi nhiều điều mới mẻ**, được
**hỗ trợ và giúp đỡ nhiệt tình**.`,
  },

  // ============================================================
  // 11. Văn Xương tại Tật Ách
  // ============================================================
  {
    id: 'van-xuong-tai-tat-ach',
    title: 'Văn Xương tại Tật Ách',
    sao: ['Văn Xương'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `**Văn Xương tại Tật Ách:** đương số **ít bệnh, sức khỏe ổn định**,
hiếm khi gặp bệnh nghiêm trọng.`,
  },

  {
    id: 'van-xuong-tat-ach-linh-hoa-khong-kiep-ky',
    title: 'Văn Xương Tật + Linh / Hỏa / Không / Kiếp / Kỵ - bệnh nan y',
    sao: ['Văn Xương'],
    cung: ['Tật Ách'],
    ketHop: ['Linh Tinh', 'Hỏa Tinh', 'Địa Không', 'Địa Kiếp', 'Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `⚠️ **Văn Xương Tật Ách + Linh Tinh / Hỏa Tinh / Không Kiếp / Hóa Kỵ:** dễ gặp **bệnh nan y khó chữa** — nhưng cũng có khả năng gặp **quý nhân hỗ trợ, tai qua nạn khỏi**.`,
  },

  // ============================================================
  // 12. Văn Xương tại Tài Bạch
  // ============================================================
  {
    id: 'van-xuong-tai-tai-bach',
    title: 'Văn Xương tại Tài Bạch',
    sao: ['Văn Xương'],
    cung: ['Tài Bạch'],
    doUuTien: 78,
    tomTat: `**Văn Xương tại Tài Bạch** — chất lượng tài chính phụ thuộc nặng vào sao kết hợp.`,
  },

  {
    id: 'van-xuong-tai-bach-ta-huu-quang-quy-khuc-khoi-viet',
    title: 'Văn Xương Tài + Tả Hữu / Quang Quý / Văn Khúc / Khôi Việt - giàu có sung túc',
    sao: ['Văn Xương'],
    cung: ['Tài Bạch'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Ân Quang', 'Thiên Quý', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 73,
    tomTat: `🌟 **Văn Xương Tài Bạch + Tả Phù / Hữu Bật / Ân Quang / Thiên Quý / Văn Khúc / Thiên Khôi / Thiên Việt:** **giàu có, sung túc, tài chính dư dả**.`,
  },

  {
    id: 'van-xuong-tai-bach-khong-kiep-kinh-da-hoa-linh-ky-hao',
    title: 'Văn Xương Tài + Không / Kiếp / Kình / Đà / Hỏa / Linh / Kỵ / Hao - phá tán',
    sao: ['Văn Xương'],
    cung: ['Tài Bạch'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Hóa Kỵ', 'Đại Hao'],
    doUuTien: 73,
    tomTat: `⚠️ **Văn Xương Tài Bạch + Không Kiếp / Kình Đà / Hỏa Linh / Hóa Kỵ / Đại Hao:** dễ **phá tán**, tài sản **tiêu hao dần**. Tuy nhiên dù phá tán vẫn có **người giúp đỡ, hỗ trợ vực dậy**.`,
  },

  // ============================================================
  // 13. Văn Xương tại Tử Tức
  // ============================================================
  {
    id: 'van-xuong-tai-tu-tuc',
    title: 'Văn Xương tại Tử Tức',
    sao: ['Văn Xương'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Văn Xương tại Tử Tức:** con cái **học hành tài giỏi, chăm chỉ, ham
tìm tòi**, trong nhà dễ có người **theo nghệ thuật**.`,
  },

  {
    id: 'van-xuong-tu-tuc-ta-huu-thien-dong-dac',
    title: 'Văn Xương Tử Tức + Tả Hữu / Thiên Đồng đắc - nhiều con phát đạt',
    sao: ['Văn Xương'],
    cung: ['Tử Tức'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Thiên Đồng'],
    doUuTien: 70,
    tomTat: `🌟 **Văn Xương Tử Tức + Tả Phù / Hữu Bật / Thiên Đồng đắc địa:** thường có **nhiều con**, con cái **phát đạt và giàu có**.`,
  },

  // ============================================================
  // 14. Văn Xương tại Phu Thê
  // ============================================================
  {
    id: 'van-xuong-tai-phu-the',
    title: 'Văn Xương tại Phu Thê',
    sao: ['Văn Xương'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `**Văn Xương tại Phu Thê:** hôn phối là người **có học thức, danh giá**.

Mối quan hệ hôn nhân **hòa thuận**, vợ chồng **ít xảy ra mâu thuẫn**.`,
  },

  // ============================================================
  // 15. Văn Xương tại Huynh Đệ
  // ============================================================
  {
    id: 'van-xuong-tai-huynh-de',
    title: 'Văn Xương tại Huynh Đệ',
    sao: ['Văn Xương'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `**Văn Xương tại Huynh Đệ:** **đông anh chị em**, có người **thành
danh xây dựng sự nghiệp lớn**, có người **phong lưu tài hoa theo nghệ thuật**.

⚠️ Riêng **chị em gái:** tình duyên khá **lận đận**.`,
  },

  {
    id: 'van-xuong-huynh-de-hoa-khoa',
    title: 'Văn Xương Huynh Đệ + Hóa Khoa - anh em đùm bọc',
    sao: ['Văn Xương'],
    cung: ['Huynh Đệ'],
    ketHop: ['Hóa Khoa'],
    doUuTien: 70,
    tomTat: `🌟 **Văn Xương Huynh Đệ + Hóa Khoa:** anh chị em **đùm bọc yêu thương nhau**.`,
  },

  {
    id: 'van-xuong-huynh-de-hoa-ky',
    title: 'Văn Xương Huynh Đệ + Hóa Kỵ - mâu thuẫn tài sản',
    sao: ['Văn Xương'],
    cung: ['Huynh Đệ'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `⚠️ **Văn Xương Huynh Đệ + Hóa Kỵ:** anh chị em dễ **mâu thuẫn về tài sản**.`,
  },

  {
    id: 'van-xuong-huynh-de-kinh-khong-kiep',
    title: 'Văn Xương Huynh Đệ + Kình Dương / Không Kiếp - nguy hiểm bản mệnh',
    sao: ['Văn Xương'],
    cung: ['Huynh Đệ'],
    ketHop: ['Kình Dương', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `⚠️ **Văn Xương Huynh Đệ + Kình Dương / Không Kiếp:** dễ có người **gặp chuyện nguy hiểm đến bản mệnh**.`,
  },

  // ============================================================
  // 16. Hạn gặp Văn Xương
  // ============================================================
  {
    id: 'van-xuong-han',
    title: 'Hạn gặp Văn Xương',
    sao: ['Văn Xương'],
    doUuTien: 50,
    tomTat: `**Hạn đến Văn Xương:** **có lợi cho học tập, công danh**.

**Cách hóa giải:**
- Bình tĩnh tỉnh táo, **không hành động vội vàng**
- Tập trung **học tập và chuyên môn**
- Tu dưỡng tâm tính, **làm việc thiện** để hóa nghiệp
- **Chọn bạn mà chơi**, tránh thị phi`,
  },

  {
    id: 'van-xuong-han-khong-kiep-kinh-da-hoa-linh-ky-hinh',
    title: 'Văn Xương vào hạn + Không / Kiếp / Kình / Đà / Hỏa / Linh / Kỵ / Hình - trở ngại thi cử',
    sao: ['Văn Xương'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Hóa Kỵ', 'Thiên Hình'],
    doUuTien: 45,
    tomTat: `⚠️ **Hạn Văn Xương + Không Kiếp / Kình Đà / Hỏa Linh / Hóa Kỵ / Thiên Hình:** **trở ngại thi cử, học hành**, sự nghiệp **gián đoạn**, dễ vướng **thị phi, kiện tụng, tranh chấp**.`,
  },
];
