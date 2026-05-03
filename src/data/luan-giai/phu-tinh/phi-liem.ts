import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO PHI LIÊM - Hỏa, vòng Lộc Tồn (vị trí 7)
 * Hình tượng đôi cánh / mũi tên / viên đạn - chuyển động, linh hoạt
 */
export const luanGiai_PhiLiem: DoanLuanGiai[] = [
  {
    id: 'phi-liem-tinh-chat-chung',
    title: 'Phi Liêm - Đặc tính chung',
    sao: ['Phi Liêm'],
    doUuTien: 30,
    tomTat: `**Phi Liêm** — phụ tinh trong **vòng Lộc Tồn** (vị trí thứ **7**).

**Ngũ hành:** **Hỏa**.

**Hình tượng:** **đôi cánh, mũi tên, viên đạn** — mang tính **chuyển động,
linh hoạt, nhanh nhẹ**.

**Đối xung với Bác Sĩ + Lộc Tồn** (nhóm ổn định, cẩn thận, kĩ càng): tạo
sự cân bằng động/tĩnh.

**Đặc tính:** **mau lẹ, linh hoạt, thịnh tiến, KHÔNG cẩn thận**.

- Sao đặc trưng chủ **hành vi nhanh chóng, nắm thời cơ** nhưng cũng **dễ mắc
sai lầm**, làm việc sai trái.

**Phi Liêm chủ TÓC, LÔNG** — khi thủ Mệnh là người **tóc tốt, dày**.`,
  },

  {
    id: 'phi-liem-tai-menh',
    title: 'Phi Liêm tại Mệnh',
    sao: ['Phi Liêm'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `**Phi Liêm thủ Mệnh:** người **vui vẻ, hoạt bát, lanh lợi**, tác
phong **nhanh nhẹn, nhạy bén**, phản ứng **mau lẹ**.

**Tướng mạo:** **lông tóc tốt, dày**.

**Khuyết điểm:** **NÓNG VỘI, hấp tấp**, làm nhanh, **không ưa suy nghĩ
sâu**: dễ ra quyết định vội mà thiếu cân nhắc.

**Đặc trưng vị thế:** Phi Liêm thủ Mệnh **luôn xung chiếu với Lộc Tồn** ở
Di: có cách hưởng **Thiên Lộc CHÍNH ĐÁNG**, dễ có **tài sản thừa kế** hoặc
được người khác **giúp đỡ kinh tế**.`,
  },

  {
    id: 'phi-liem-tai-menh-hong-loan',
    title: 'Phi Liêm + Hồng Loan tại Mệnh - tóc rậm xanh tốt',
    sao: ['Phi Liêm'],
    cung: ['Mệnh'],
    ketHop: ['Hồng Loan'],
    doUuTien: 73,
    tomTat: `**Phi Liêm + Hồng Loan tại Mệnh:** tóc mọc **rậm, xanh tốt**.`,
  },

  {
    id: 'phi-liem-tai-menh-dao-hoa',
    title: 'Phi Liêm + Đào Hoa tại Mệnh - tóc rậm xanh tốt',
    sao: ['Phi Liêm'],
    cung: ['Mệnh'],
    ketHop: ['Đào Hoa'],
    doUuTien: 73,
    tomTat: `**Phi Liêm + Đào Hoa tại Mệnh:** tóc mọc **rậm, xanh tốt**.`,
  },

  {
    id: 'phi-liem-tai-menh-tham-lang-hoa-loc',
    title: 'Phi Liêm + Tham Lang + Hóa Lộc tại Mệnh - tu my nam tử',
    sao: ['Phi Liêm'],
    cung: ['Mệnh'],
    ketHop: ['Tham Lang', 'Hóa Lộc'],
    doUuTien: 73,
    tomTat: `**Phi Liêm + Tham Lang + Hóa Lộc tại Mệnh:** **râu tóc đều tốt**
— đúng chất "**diện mạo TU MY NAM TỬ**".`,
  },

  {
    id: 'phi-liem-tai-phu-mau',
    title: 'Phi Liêm tại Phụ Mẫu',
    sao: ['Phi Liêm'],
    cung: ['Phụ Mẫu'],
    doUuTien: 70,
    tomTat: `**Phi Liêm cư Phụ Mẫu:** cha mẹ **từng trải, hiền lương, nhanh
nhẹn**.

Vì Phi Liêm chủ **nhanh chóng**: cha mẹ dễ **lấy nhau và có con TỪ SỚM**.`,
  },

  {
    id: 'phi-liem-tai-phu-mau-sat-bai-tinh',
    title: 'Phi Liêm tại Phụ Mẫu + Sát bại tinh - cha mẹ vất vả',
    sao: ['Phi Liêm'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 65,
    tomTat: `**Phi Liêm tại Phụ Mẫu + Sát bại tinh (Lục Sát):** cha mẹ **vất
vả**, trải qua nhiều thăng trầm, công việc luôn **"chạy ngược chạy xuôi"**,
hối hả.`,
  },

  {
    id: 'phi-liem-tai-phuc-duc',
    title: 'Phi Liêm tại Phúc Đức',
    sao: ['Phi Liêm'],
    cung: ['Phúc Đức'],
    doUuTien: 70,
    tomTat: `**Phi Liêm cư Phúc Đức:**

**Đặc trưng mộ phần:** mộ đặt gần **núi/đồi TRƠ TRỌI**, đất xung quanh
**KHÔ NÓNG, tan lở**. Mồ mả tổ tiên **bị MỐI MỌT**.

Dòng họ nhiều người **đi xa làm ăn**.`,
  },

  {
    id: 'phi-liem-tai-phuc-duc-hinh-viet-hoa-linh-khong-kiep',
    title: 'Phi Liêm + Hình + Việt + Hỏa Linh + Không Kiếp tại Phúc Đức - chết đường chết chợ',
    sao: ['Phi Liêm'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Hình', 'Thiên Việt', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 60,
    tomTat: `**Phi Liêm + Thiên Hình + Thiên Việt + Hỏa Tinh + Linh Tinh +
Địa Không + Địa Kiếp tại Phúc Đức:** trong dòng họ dễ có người **CHẾT ĐƯỜNG
CHẾT CHỢ**, **nhà thờ thương binh liệt sĩ**.`,
  },

  {
    id: 'phi-liem-tai-dien-trach',
    title: 'Phi Liêm tại Điền Trạch',
    sao: ['Phi Liêm'],
    cung: ['Điền Trạch'],
    doUuTien: 70,
    tomTat: `**Phi Liêm cư Điền:** trong nhà **rất nhiều CÔN TRÙNG** — mối,
gián, kiến, ruồi, muỗi: ảnh hưởng sức khỏe, gây **bất tiện sinh hoạt**.

Có thể **truyền mầm bệnh** nguy hiểm: **sốt xuất huyết, sốt rét, đau mắt,
bệnh đường tiêu hóa**.`,
  },

  {
    id: 'phi-liem-tai-dien-trach-dia-khong',
    title: 'Phi Liêm + Địa Không tại Điền Trạch - bom đạn pháo kích',
    sao: ['Phi Liêm'],
    cung: ['Điền Trạch'],
    ketHop: ['Địa Không'],
    doUuTien: 65,
    tomTat: `**Phi Liêm + Địa Không tại Điền Trạch:** nơi ở thời chiến là
**khu vực nhạy cảm**, dễ trúng **bom đạn, pháo kích, súng ống**.`,
  },

  {
    id: 'phi-liem-tai-dien-trach-dia-kiep',
    title: 'Phi Liêm + Địa Kiếp tại Điền Trạch - bom đạn pháo kích',
    sao: ['Phi Liêm'],
    cung: ['Điền Trạch'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 65,
    tomTat: `**Phi Liêm + Địa Kiếp tại Điền Trạch:** nơi ở thời chiến là
**khu vực nhạy cảm**, dễ trúng **bom đạn, pháo kích, súng ống**.`,
  },

  {
    id: 'phi-liem-tai-dien-trach-linh-tinh',
    title: 'Phi Liêm + Linh Tinh tại Điền Trạch - bom đạn pháo kích',
    sao: ['Phi Liêm'],
    cung: ['Điền Trạch'],
    ketHop: ['Linh Tinh'],
    doUuTien: 65,
    tomTat: `**Phi Liêm + Linh Tinh tại Điền Trạch:** nơi ở thời chiến là
**khu vực nhạy cảm**, dễ trúng **bom đạn, pháo kích, súng ống**.`,
  },

  {
    id: 'phi-liem-tai-dien-trach-hoa-tinh',
    title: 'Phi Liêm + Hỏa Tinh tại Điền Trạch - bom đạn pháo kích',
    sao: ['Phi Liêm'],
    cung: ['Điền Trạch'],
    ketHop: ['Hỏa Tinh'],
    doUuTien: 65,
    tomTat: `**Phi Liêm + Hỏa Tinh tại Điền Trạch:** nơi ở thời chiến là
**khu vực nhạy cảm**, dễ trúng **bom đạn, pháo kích, súng ống**.`,
  },

  {
    id: 'phi-liem-tai-quan-loc',
    title: 'Phi Liêm tại Quan Lộc',
    sao: ['Phi Liêm'],
    cung: ['Quan Lộc'],
    doUuTien: 75,
    tomTat: `**Phi Liêm cư Quan + Cát tinh** (Lục Cát: Tả Phù, Hữu Bật, Văn
Xương, Văn Khúc, Thiên Khôi, Thiên Việt): công danh **sớm đạt**, "lên như diều
gặp gió".

**Phù hợp các ngành nghề có TÍNH CHUYỂN ĐỘNG, TỐC ĐỘ CAO:**
- **Hàng không, giao hàng, bưu chính, vận chuyển, viễn thông**
- **Thương mại điện tử**
- **Công nghệ kỹ thuật lửa điện, vi tính**

Dù làm lĩnh vực nào cũng cần **NGUYÊN TẮC, AN TOÀN, cẩn thận** — tránh
**"nghĩ ẩu làm liều"**.`,
  },

  {
    id: 'phi-liem-tai-quan-loc-sat-tinh',
    title: 'Phi Liêm + Sát tinh tại Quan Lộc - quyết định vội vàng',
    sao: ['Phi Liêm'],
    cung: ['Quan Lộc'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `**Phi Liêm + Sát tinh (Lục Sát) tại Quan Lộc:** công danh trắc
trở, **quyết định vội vàng**.`,
  },

  {
    id: 'phi-liem-tai-no-boc',
    title: 'Phi Liêm tại Nô Bộc',
    sao: ['Phi Liêm'],
    cung: ['Nô Bộc'],
    doUuTien: 68,
    tomTat: `**Phi Liêm cư Nô:** bạn bè người **khôn ngoan, lanh lẹ, nhanh
trí**.

Dễ **kết bạn**, hòa đồng — ai cũng chơi, **không tính toán nhiều**.`,
  },

  {
    id: 'phi-liem-tai-thien-di',
    title: 'Phi Liêm tại Thiên Di',
    sao: ['Phi Liêm'],
    cung: ['Thiên Di'],
    doUuTien: 72,
    tomTat: `**Phi Liêm cư Di:** người hay phải **đi lại NHIỀU**, nhanh nhẹn,
hoạt bát, giỏi xoay sở và **ứng biến**.

**Vận gặp Phi Liêm:** dễ **XUẤT NGOẠI**.`,
  },

  {
    id: 'phi-liem-tai-thien-di-am-duong-dong-ma',
    title: 'Phi Liêm + Thái Âm + Thái Dương + Thiên Đồng + Thiên Mã tại Thiên Di - đi đường hàng không',
    sao: ['Phi Liêm'],
    cung: ['Thiên Di'],
    ketHop: ['Thái Âm', 'Thái Dương', 'Thiên Đồng', 'Thiên Mã'],
    doUuTien: 67,
    tomTat: `**Phi Liêm + Thái Âm + Thái Dương + Thiên Đồng + Thiên Mã tại
Thiên Di:** hay đi xa, được đi bằng **ĐƯỜNG HÀNG KHÔNG**.`,
  },

  {
    id: 'phi-liem-tai-tat-ach',
    title: 'Phi Liêm tại Tật Ách - Tai họa từ vật bay nhanh',
    sao: ['Phi Liêm'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `**Phi Liêm cư Tật:** **bệnh tật phát tác NHANH CHÓNG**.

Ám chỉ các vật thể bay gây nguy hiểm: **TÊN, ĐẠN, LỬA ĐIỆN, SẤM SÉT, VI
KHUẨN**, dị vật bay hỗn loạn.

**CỰC NGUY HIỂM** khi Tật Ách có **Thiên Hình + Thiên Việt + Phi Liêm +
Linh Tinh + Hỏa Tinh**: bộ **"LỬA ĐIỆN" rất mạnh**:
- **Súng đạn, lửa điện**
- **SÉT ĐÁNH, TÉ XE**
- Dù làm công nghệ/kỹ thuật/lửa điện cũng phải **đề phòng nạn ách**`,
  },

  {
    id: 'phi-liem-tai-tat-ach-sat-tinh',
    title: 'Phi Liêm + Sát tinh tại Tật Ách - tai nạn đột ngột',
    sao: ['Phi Liêm'],
    cung: ['Tật Ách'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 73,
    tomTat: `**Phi Liêm + Sát tinh (Lục Sát) tại Tật Ách:** đề phòng:
- **Dị vật văng trúng**, thương tích
- **Tai nạn đột ngột**: té xe, lửa điện, **nhiễm virus**`,
  },

  {
    id: 'phi-liem-tai-tai-bach',
    title: 'Phi Liêm tại Tài Bạch',
    sao: ['Phi Liêm'],
    cung: ['Tài Bạch'],
    doUuTien: 72,
    tomTat: `**Phi Liêm cư Tài:** tiền bạc kiếm **NHANH, CHỚP NHOÁNG**. Ngược
lại **chi tiêu cũng NHANH**, ít suy nghĩ.`,
  },

  {
    id: 'phi-liem-tai-tai-bach-cat-tinh',
    title: 'Phi Liêm + Cát tinh tại Tài Bạch - kiếm tiền nhanh',
    sao: ['Phi Liêm'],
    cung: ['Tài Bạch'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 67,
    tomTat: `**Phi Liêm + Cát tinh (Lục Cát) tại Tài Bạch:** dễ kiếm tiền nhanh.`,
  },

  {
    id: 'phi-liem-tai-tai-bach-sat-tinh',
    title: 'Phi Liêm + Sát tinh tại Tài Bạch - dễ bị lừa lỗ vốn',
    sao: ['Phi Liêm'],
    cung: ['Tài Bạch'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 67,
    tomTat: `**Phi Liêm + Sát tinh (Lục Sát) tại Tài Bạch:** khó kiếm, dễ **bị
LỪA**, **đầu tư nóng vội bị LỖ**.`,
  },

  {
    id: 'phi-liem-tai-tu-tuc',
    title: 'Phi Liêm tại Tử Tức - Hiếm muộn',
    sao: ['Phi Liêm'],
    cung: ['Tử Tức'],
    doUuTien: 72,
    tomTat: `**Phi Liêm cư Tử Tức:** **GIẢM SỐ LƯỢNG con cái**, không có lợi
cho thai sản: dễ **SINH NON**, **HIẾM MUỘN**.

**Khả năng hiếm muộn TĂNG CAO** khi hội: Vũ Khúc / Thái Âm hãm / Phá Quân /
Thất Sát / Thiên Hình / Hóa Kỵ / Tang Hổ / Cô Quả / Đẩu Quân / Nhị Hao / Thái
Tuế / Đà La / Lộc Tồn / Không Kiếp / Hỏa Linh / Suy / Bệnh / Kiếp Sát.

- Càng hội nhiều sao này, có thể đến **TUYỆT TỰ**.`,
  },

  {
    id: 'phi-liem-tai-tu-tuc-cat-tinh',
    title: 'Phi Liêm + Cát tinh tại Tử Tức - con vui vẻ lanh lợi',
    sao: ['Phi Liêm'],
    cung: ['Tử Tức'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 67,
    tomTat: `**Phi Liêm + Cát tinh (Lục Cát) tại Tử Tức:** con cái **vui vẻ,
lanh lợi, hoạt bát**.`,
  },

  {
    id: 'phi-liem-tai-phu-the',
    title: 'Phi Liêm tại Phu Thê',
    sao: ['Phi Liêm'],
    cung: ['Phu Thê'],
    doUuTien: 70,
    tomTat: `**Phi Liêm cư Phu Thê:** tình duyên đến **NHANH CHÓNG**, "yêu nhanh
cưới nhanh".

Người hôn phối **nhanh nhẹn, hoạt bát**, có **lông tóc tốt, dày**.

Vì công việc bạn đời thường phải **DI CHUYỂN, đi lại NHIỀU**: vợ chồng
**hay phải xa cách**.`,
  },

  {
    id: 'phi-liem-tai-phu-the-hong-loan',
    title: 'Phi Liêm + Hồng Loan tại Phu Thê - tóc óng mượt',
    sao: ['Phi Liêm'],
    cung: ['Phu Thê'],
    ketHop: ['Hồng Loan'],
    doUuTien: 65,
    tomTat: `**Phi Liêm + Hồng Loan tại Phu Thê:** người hôn phối **tóc tai
óng mượt, đẹp đẽ**.`,
  },

  {
    id: 'phi-liem-tai-huynh-de',
    title: 'Phi Liêm tại Huynh Đệ',
    sao: ['Phi Liêm'],
    cung: ['Huynh Đệ'],
    doUuTien: 68,
    tomTat: `**Phi Liêm cư Huynh Đệ:** **GIẢM SỐ LƯỢNG anh chị em** — ít.

Anh chị em hay **đi xa, ít ở gần**.`,
  },

  {
    id: 'phi-liem-tai-huynh-de-dong-ma-am-duong',
    title: 'Phi Liêm + Thiên Đồng + Thiên Mã + Âm Dương tại Huynh Đệ - anh em đi xa rõ rệt',
    sao: ['Phi Liêm'],
    cung: ['Huynh Đệ'],
    ketHop: ['Thiên Đồng', 'Thiên Mã', 'Thái Âm', 'Thái Dương'],
    doUuTien: 63,
    tomTat: `**Phi Liêm + Thiên Đồng + Thiên Mã + Thái Âm + Thái Dương tại
Huynh Đệ:** anh chị em hay **đi xa, ít ở gần** càng rõ rệt.`,
  },

  {
    id: 'phi-liem-bach-ho-ho-moc-canh',
    title: 'Phi Liêm + Bạch Hổ - "Hổ mọc cánh"',
    sao: ['Phi Liêm'],
    ketHop: ['Bạch Hổ'],
    doUuTien: 65,
    tomTat: `**Phi Liêm + Bạch Hổ** = cách **"HỔ MỌC CÁNH"** — chủ về:
- **MAY MẮN**, **gặp THỜI VẬN tốt**
- **PHÁT ĐẠT**:
  - **Thi đậu**
  - **Thăng quan**
  - **Thương gia đắc lợi**

- Hổ vốn dũng mãnh, lại có thêm cánh để bay: uy lực + tốc độ: tột bậc.`,
  },

  {
    id: 'phi-liem-viet-hoa-hinh',
    title: 'Phi Liêm + Thiên Việt + Hỏa Tinh + Thiên Hình - Tai họa lửa điện',
    sao: ['Phi Liêm'],
    ketHop: ['Thiên Việt', 'Hỏa Tinh', 'Thiên Hình'],
    doUuTien: 65,
    tomTat: `**Phi Liêm + Thiên Việt + Hỏa Tinh + Thiên Hình:** bộ sao **CỰC
KỲ NGUY HIỂM** chủ về:
- **NẠN BINH ĐAO**
- **Bị SÚNG BẮN**
- **SÉT ĐÁNH, GIẬT ĐIỆN**
- **TAI NẠN XE CỘ**

- Những tai họa **xảy ra bất ngờ** — chủ mệnh cần **hết sức cẩn trọng**.`,
  },

  {
    id: 'phi-liem-khong-kiep',
    title: 'Phi Liêm + Không Kiếp - Mất mát tài sản bất ngờ',
    sao: ['Phi Liêm'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 60,
    tomTat: `**Phi Liêm + Địa Không + Địa Kiếp:** chủ về **mất mát, phá tán**
điển hình.

- Không Kiếp = **liều lĩnh, táo bạo**, **gây mất mát phá hoại hoàn toàn**.

- + Phi Liêm = **bạo phát bạo tàn diễn ra NHANH**:
- Đầu tư lớn **bộc phát**
- **Bị lừa đảo**
- Gặp biến cố: **tiêu tan tài sản**`,
  },
];
