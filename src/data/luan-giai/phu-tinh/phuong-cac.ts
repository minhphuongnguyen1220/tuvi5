import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO PHƯỢNG CÁC - Thổ, Cát Tinh.
 * LUÔN đồng cung với GIẢI THẦN (cùng khởi từ Tuất - hardcode trong engine).
 *
 * Cùng LONG TRÌ tạo bộ LONG PHƯỢNG - phần CHUNG (bộ Long Phượng + bộ Hiền Thần
 * + Long Phượng + Tứ Linh) đã viết tại long-tri.ts.
 *
 * Một trong TỨ LINH (Cái-Long-Hổ-Phượng) - phần chung đã viết tại thanh-long.ts.
 * Hình tượng: CÁI TAI.
 */
export const luanGiai_PhuongCac: DoanLuanGiai[] = [
  {
    id: 'phuong-cac-tinh-chat-chung',
    title: 'Phượng Các - Đặc tính chung',
    sao: ['Phượng Các'],
    doUuTien: 32,
    tomTat: `**Phượng Các** — phụ tinh **CÁT TINH**, là **QUÝ TINH, ĐÀI CÁC TINH**.

**Ngũ hành:** **Thổ**.

**Hóa khí:** **Cát Tinh**.

**Vị trí an sao:**
- Lấy vị trí cung **TUẤT** khởi làm năm Tý
- Chạy **NGƯỢC chiều kim đồng hồ** tới địa chi của năm sinh

**Vị thế:**
- Một trong **TỨ LINH** (Cái-Long-Hổ-Phượng)
- Cùng **LONG TRÌ** tạo bộ **LONG PHƯỢNG**
- **LUÔN đồng cung với GIẢI THẦN** (hardcode trong engine — cùng khởi từ Tuất)

**Bản chất:**
- **ÔN HÒA, VUI VẺ, THÔNG MINH**
- **NHÂN CÁCH CAO THƯỢNG**, **KHÍ CHẤT HƠN NGƯỜI**
- **DUNG MẠI KHÔI VĨ, TÚ LỆ**
- **CHÍNH TRỰC, THẲNG THẮN**, **người BẢO VỆ LẼ PHẢI**

**Hình tượng cơ thể:** **CÁI TAI**.

**Đặc tính:** **CÔNG DANH, THANH CAO, QUÝ HIỂN, MAY MẮN, QUYỀN QUÝ, KHOA BẢNG**.`,
  },

  {
    id: 'phuong-cac-giai-than-bua-ho-menh',
    title: 'Phượng Các + Giải Thần - bộ "Phượng Giải" bùa hộ mệnh',
    sao: ['Phượng Các', 'Giải Thần'],
    doUuTien: 75,
    tomTat: `**Phượng Các + Giải Thần** = bộ **"PHƯỢNG GIẢI"** — **LUÔN đồng cung** (quy
luật an sao).

**Giải Thần** = **THIỆN TINH**, chủ về:
- **GIẢI ÁCH, TRỪ HUNG**
- **MAY MẮN, PHÚC THỌ**
- **ĐỘ LƯỢNG**

**Tác dụng bộ Phượng Giải tại Mệnh:**
- **DUNG MẠO ĐẸP**, **KHÍ CHẤT THANH CAO**
- Tâm tính **KHOAN HÒA, ĐỨC ĐỘ, NHÂN TỪ, VỊ THA**
- Như một **LÁ BÙA HỘ MỆNH**
- Người mang bộ này thường được **GIẢI TAI ÁCH BẤT NGỜ**, hay **GẶP MAY**

**Phạm vi tác dụng:**
- **TĂNG PHÚC THỌ** cho cha mẹ, dòng họ
- Mang lại **THUẬN LỢI** trong **THI CỬ, CÔNG DANH**
- Tại **Tật Ách**: **GIẢM HỌA, GIẢI BỆNH**
- Tại **Tài Bạch**: **GIẢM HAO HỤT**, tăng may mắn nếu biết **LÀM VIỆC THIỆN**

**Hạn chế:**
- Giải Thần chỉ có thể **HÓA GIẢI TAI ƯƠNG NHỎ**
- Nếu gặp **ĐẠI HẠN HUNG HIỂM**, **BỆNH NẶNG**: Giải Thần lại trở thành **"TỬ
  THẦN"** — báo hiệu **SỰ RA ĐI ĐỘT NGỘT**

- Phượng Giải vừa tượng trưng cho **PHÚC LỘC MAY MẮN**, vừa nhắc nhở mệnh chủ
**SỐNG THIỆN LÀNH, TÍCH ĐỨC HÀNH THIỆN** để giữ phúc.`,
  },

  {
    id: 'phuong-cac-giai-than-quan-phuc',
    title: 'Phượng Giải + Thiên Quan + Thiên Phúc - càng ứng nghiệm',
    sao: ['Phượng Các', 'Giải Thần'],
    ketHop: ['Thiên Quan', 'Thiên Phúc'],
    doUuTien: 70,
    tomTat: `**Phượng Các + Giải Thần + Thiên Quan + Thiên Phúc:** bộ "Phượng Giải" càng **ỨNG NGHIỆM** — giải tai ách, may mắn, phúc thọ tăng cường.`,
  },

  {
    id: 'phuong-cac-tuong-mao',
    title: 'Phượng Các - Tướng mạo (cái tai)',
    sao: ['Phượng Các'],
    cung: ['Mệnh'],
    doUuTien: 50,
    tomTat: `**Phượng Các thủ Mệnh - Tướng mạo:**

**Đặc điểm:**
- **NHAN SẮC ĐẸP**
- **DA MẶT HỒNG HÀO, THANH TÚ**

**Hình tượng cơ thể** = **CÁI TAI**:
- Người này có **ĐÔI TAI ĐẸP, DÀY**
- Có **KHẢ NĂNG THÍNH GIÁC TỐT**`,
  },

  {
    id: 'phuong-cac-tuong-mao-nu',
    title: 'Phượng Các - Tướng mạo (nữ mệnh)',
    sao: ['Phượng Các'],
    cung: ['Mệnh'],
    gioiTinh: 'Nữ',
    doUuTien: 45,
    tomTat: `**Phượng Các thủ Mệnh - Nữ mệnh:**
- **ĐOAN TRANG, QUÝ PHÁI**
- Da mặt hồng hào, thanh tú
- Tai dày, đẹp, thính giác tốt`,
  },

  {
    id: 'phuong-cac-tuong-mao-nam',
    title: 'Phượng Các - Tướng mạo (nam mệnh)',
    sao: ['Phượng Các'],
    cung: ['Mệnh'],
    gioiTinh: 'Nam',
    doUuTien: 45,
    tomTat: `**Phượng Các thủ Mệnh - Nam mệnh:**
- **KHÔI VĨ, PHONG ĐỘ**
- Tai dày, đẹp, thính giác tốt`,
  },

  {
    id: 'phuong-cac-co-vu-tau-luu-nhac-sy',
    title: 'Phượng Các + Cơ/Vũ/Tấu/Lưu - nhạc sỹ nghệ sỹ',
    sao: ['Phượng Các'],
    ketHop: ['Thiên Cơ', 'Vũ Khúc', 'Tấu Thư', 'Lưu Hà'],
    doUuTien: 75,
    tomTat: `**Phượng Các + Thiên Cơ + Vũ Khúc + Tấu Thư + Lưu Hà:**

**Đặc trưng:**
- Như được **TRỜI PHÚ cho NĂNG KHIẾU NGHỆ THUẬT**
- Có thể làm:
  - **NHẠC SỸ**
  - **NGHỆ SỸ ÂM NHẠC NỔI TIẾNG**

- Vì Phượng Các là **CÁI TAI** + **thính giác tốt**: kết hợp với:
- **Thiên Cơ** (mưu trí, tạo tác)
- **Vũ Khúc** (hành động)
- **Tấu Thư** (giọng hát, văn chương)
- **Lưu Hà** (hùng biện, lưu loát)

- Cách **NGHỆ THUẬT** đẹp nhất.`,
  },

  {
    id: 'phuong-cac-tai-menh',
    title: 'Phượng Các tại Mệnh - thông minh ôn hòa',
    sao: ['Phượng Các'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `**Phượng Các thủ Mệnh:**

**Tính cách:**
- **THÔNG MINH, TUẤN KIỆT**, có **VĂN CHẤT**
- **ÔN HÒA, NHÂN HẬU**
- **THANH TAO, ĐIỀM ĐẠM, CỞI MỞ**
- **CHÍNH TRỰC**, luôn **BẢO VỆ LẼ PHẢI**
- **NHÂN CÁCH CAO THƯỢNG**, **KHÍ CHẤT CAO QUÝ**

**Công danh - Tài lộc:**
- May mắn **KHOA BẢNG VĂN CHƯƠNG**
- **THI ĐỖ CAO**, có **KHOA GIÁP LỚN**
- Tăng **TÀI LỘC, ĐIỀN SẢN**
- May mắn trong **HÔN NHÂN** (dễ yêu, dễ cưới, vợ chồng tương đắc)
- May mắn trong **SINH NỞ** (dễ sanh, sinh dễ nuôi)

**Vẹn toàn nhiều mặt:** **NHAN SẮC, TÍNH HẠNH, TÀI LỘC, GIA ĐẠO**.

**Hỷ sự:** Phượng Các chủ về **HỶ SỰ**: thường gặp:
- Chuyện vui trong gia đình
- **CƯỚI XIN THUẬN LỢI**
- **SINH NỞ DỄ DÀNG**
- Con cái **THÔNG MINH, DỄ NUÔI**`,
  },

  {
    id: 'phuong-cac-tai-menh-nu',
    title: 'Phượng Các tại Mệnh - nữ mệnh đoan trang',
    sao: ['Phượng Các'],
    cung: ['Mệnh'],
    gioiTinh: 'Nữ',
    doUuTien: 72,
    tomTat: `**Phượng Các thủ Mệnh - Nữ mệnh:**
- **ĐOAN TRANG** trong nết hạnh
- Phẩm hạnh **THANH CAO, QUÝ PHÁI**
- Vẹn toàn về **NHAN SẮC, TÍNH HẠNH, TÀI LỘC, GIA ĐẠO**
- May mắn trong **HÔN NHÂN, SINH NỞ**`,
  },

  {
    id: 'phuong-cac-quang-quy-co-nguyet-bac-sy',
    title: 'Phượng Các + Quang Quý + Cơ Nguyệt Đồng Lương - bác sỹ tai mũi họng',
    sao: ['Phượng Các'],
    ketHop: ['Ân Quang', 'Thiên Quý', 'Thiên Cơ', 'Thái Âm', 'Thiên Đồng', 'Thiên Lương'],
    cung: ['Quan Lộc'],
    doUuTien: 75,
    tomTat: `**Phượng Các + Ân Quang + Thiên Quý + Cơ Nguyệt Đồng Lương** (cách cục)
**tại Quan Lộc:**

**Đặc trưng:**
- Có thể làm **BÁC SỸ TAI MŨI HỌNG**
-: Vì Phượng Các = cái **TAI**: biến đặc tính sao thành nghề

- Tương tự Long Trì (cái mũi) + Phá Toái (cuống họng) — **Phượng Các (cái tai)**
hợp với nghề **chữa tai**.

Đây là cách **HÓA GIẢI ĐẸP** — biến đặc tính cơ thể thành **chuyên môn nghề
nghiệp**.`,
  },

  {
    id: 'phuong-cac-ky-da-khong-kiep-tai-diec',
    title: 'Phượng Các + Hóa Kỵ + Đà La + Không Kiếp - tai điếc',
    sao: ['Phượng Các'],
    ketHop: ['Hóa Kỵ', 'Đà La', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 65,
    tomTat: `**Phượng Các + Hóa Kỵ + Đà La + Không Kiếp:**

**Đặc trưng:**
- **TAI ĐIẾC**
- **NGHỄNH NGÃNG**

- Vì Phượng Các là **cái TAI** + các sao **xấu** (Kỵ, Đà, Không, Kiếp): bệnh
**TAI** trở nặng.

**Lời khuyên:** chăm sóc **THÍNH GIÁC từ trẻ**, tránh môi trường **ồn ào**.`,
  },

  {
    id: 'phuong-cac-tai-phu-mau',
    title: 'Phượng Các tại Phụ Mẫu',
    sao: ['Phượng Các'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `**Phượng Các tại Phụ Mẫu:**
- Giúp **TĂNG THỌ** cho cha mẹ
- Đem lại **MAY MẮN**
- Cha mẹ có dung mạo **ĐOAN CHÍNH**, tính tình **ÔN HÒA, PHÚC HẬU**
- **THANH CAO, ÔN HÒA**, có **TÀI CHÍNH, ĐIỀN SẢN**`,
  },

  {
    id: 'phuong-cac-phu-mau-tam-thai-bat-toa-hoa-loc',
    title: 'Phượng Các Phụ Mẫu + Tam Thai + Bát Tọa + Hóa Lộc - cha mẹ học thức giàu sang',
    sao: ['Phượng Các'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Tam Thai', 'Bát Tọa', 'Hóa Lộc'],
    doUuTien: 70,
    tomTat: `**Phượng Các Phụ Mẫu + Tam Thai + Bát Tọa + Hóa Lộc:**
- Cha mẹ **HỌC THỨC, ĐỊA VỊ XÃ HỘI**
- **GIÀU SANG**, có **TÀI CHÍNH, ĐIỀN SẢN VỮNG CHẮC**`,
  },

  {
    id: 'phuong-cac-phu-mau-cat-van-tinh',
    title: 'Phượng Các Phụ Mẫu + Văn tinh - cha mẹ thành đạt học thức',
    sao: ['Phượng Các'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Lưu Niên Văn Tinh', 'Hóa Khoa'],
    doUuTien: 70,
    tomTat: `**Phượng Các Phụ Mẫu + Văn Xương / Văn Khúc / Lưu Niên Văn Tinh:**
- Cha mẹ **THÀNH ĐẠT, có HỌC THỨC**, có **VỊ TRÍ trong xã hội**
- Con cháu được hưởng **NHIỀU PHÚC PHẦN**`,
  },

  {
    id: 'phuong-cac-tai-phuc-duc',
    title: 'Phượng Các tại Phúc Đức - bộ Tứ Linh',
    sao: ['Phượng Các'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `**Phượng Các tại Phúc Đức:**
- Trong dòng họ **NHIỀU NGƯỜI KHÁ GIẢ**
- Nhiều người **ĐỖ KHOA BẢNG CAO**
- Có **TRUYỀN THỐNG PHẨM HẠNH ĐẠO ĐỨC TỐT**
- Ông bà tổ tiên **MỒ YÊN MẢ ĐẸP**, **PHÁT PHƯỚC**`,
  },

  {
    id: 'phuong-cac-phuc-duc-tu-linh',
    title: 'Phượng Các Phúc Đức + Long Trì + Hoa Cái + Bạch Hổ - bộ Tứ Linh',
    sao: ['Phượng Các'],
    cung: ['Phúc Đức'],
    ketHop: ['Long Trì', 'Hoa Cái', 'Bạch Hổ'],
    doUuTien: 73,
    tomTat: `**Phượng Các Phúc Đức + Long Trì + Hoa Cái + Bạch Hổ** = bộ **TỨ LINH** tại Phúc Đức:
- Trong dòng họ nhiều người **ĐỖ KHOA BẢNG**
- Có **PHẨM HẠNH CAO**
- **MỒ MẢ tổ tiên ĐẸP, YÊN VỊ, PHÁT PHÚC**`,
  },

  {
    id: 'phuong-cac-phuc-duc-khoa-xuong-khoi',
    title: 'Phượng Các Phúc Đức + Hóa Khoa + Văn Xương + Thiên Khôi - dòng họ thành danh',
    sao: ['Phượng Các'],
    cung: ['Phúc Đức'],
    ketHop: ['Hóa Khoa', 'Văn Xương', 'Thiên Khôi'],
    doUuTien: 73,
    tomTat: `**Phượng Các Phúc Đức + Hóa Khoa + Văn Xương + Thiên Khôi:**
- Họ hàng không chỉ **KHÁ GIẢ**
- Còn có **NHIỀU NGƯỜI THÀNH DANH**, mang lại **TIẾNG THƠM** cho gia tộc`,
  },

  {
    id: 'phuong-cac-tai-dien-trach',
    title: 'Phượng Các tại Điền Trạch - lầu son gác tía',
    sao: ['Phượng Các'],
    cung: ['Điền Trạch'],
    doUuTien: 78,
    tomTat: `**Phượng Các tại Điền Trạch** = **LỘC TRỜI BAN**:

**Đặc điểm nhà cửa:**
- **NHÀ CỬA RỘNG RÃI, SANG TRỌNG**
- Thường ở **NƠI CAO** (nhà lầu, chung cư)
- Trong nhà có nhiều **HOÀNH PHI, CÂU ĐỐI**
- Mang tính chất **VĂN CHƯƠNG** — biểu tượng cho **NỀ NẾP GIA PHONG, sự HỌC**
- Hàng xóm xung quanh nhiều người có **ĐỊA VỊ, CHỨC SẮC**`,
  },

  {
    id: 'phuong-cac-dien-trach-mo',
    title: 'Phượng Các Điền Trạch + Mộ - nhà đất rộng rãi di sản',
    sao: ['Phượng Các'],
    cung: ['Điền Trạch'],
    ketHop: ['Mộ'],
    doUuTien: 73,
    tomTat: `**Phượng Các Điền Trạch + Mộ:** có **NHÀ ĐẤT RỘNG RÃI**, **DI SẢN**.`,
  },

  {
    id: 'phuong-cac-dien-trach-thai-bat-toa',
    title: 'Phượng Các Điền Trạch + Thai + Bát Tọa - nhà lầu cao sang',
    sao: ['Phượng Các'],
    cung: ['Điền Trạch'],
    ketHop: ['Thai', 'Bát Tọa'],
    doUuTien: 73,
    tomTat: `**Phượng Các Điền Trạch + Thai + Bát Tọa:** **NHÀ LẦU CAO SANG**, có **AO HỒ**.`,
  },

  {
    id: 'phuong-cac-dien-trach-tam-thai-bat-toa',
    title: 'Phượng Các Điền Trạch + Tam Thai + Bát Tọa - hàng xóm quyền quý',
    sao: ['Phượng Các'],
    cung: ['Điền Trạch'],
    ketHop: ['Tam Thai', 'Bát Tọa'],
    doUuTien: 73,
    tomTat: `**Phượng Các Điền Trạch + Tam Thai + Bát Tọa:**
- Không chỉ "**nhà cao cửa rộng**" mà còn có **AO HỒ, ĐIỀN SẢN PHONG PHÚ**
- Hàng xóm toàn **NGƯỜI QUYỀN QUÝ, CHỨC SẮC**`,
  },

  {
    id: 'phuong-cac-tai-quan-loc',
    title: 'Phượng Các tại Quan Lộc',
    sao: ['Phượng Các'],
    cung: ['Quan Lộc'],
    doUuTien: 80,
    tomTat: `**Phượng Các tại Quan Lộc:** **THUẬN BUỒM XUÔI GIÓ** trong công danh sự
nghiệp.

**Đặc trưng:**
- Gia tăng **THUẬN LỢI** về **CẦU CÔNG DANH, CHỨC VỤ, THI CỬ, BẰNG KHEN**
- Trong công việc **CÔNG TÂM, XÂY DỰNG**
- Được **NHIỀU NGƯỜI KÍNH NỂ, QUÝ MẾN**
- **Ngay thẳng**, dễ được lòng **CẤP TRÊN, ĐỒNG NGHIỆP**`,
  },

  {
    id: 'phuong-cac-quan-loc-co-vu-tau-luu',
    title: 'Phượng Các Quan + Cơ + Vũ + Tấu + Lưu Hà - nhạc sỹ nổi tiếng',
    sao: ['Phượng Các'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Cơ', 'Vũ Khúc', 'Tấu Thư', 'Lưu Hà'],
    doUuTien: 75,
    tomTat: `**Phượng Các Quan Lộc + Thiên Cơ + Vũ Khúc + Tấu Thư + Lưu Hà:** có thể làm **NHẠC SỸ, NGHỆ SỸ ÂM NHẠC NỔI TIẾNG**.`,
  },

  {
    id: 'phuong-cac-quan-loc-quang-quy-co-nguyet',
    title: 'Phượng Các Quan + Quang Quý + Cơ Nguyệt Đồng Lương - bác sỹ tai mũi họng',
    sao: ['Phượng Các'],
    cung: ['Quan Lộc'],
    ketHop: ['Ân Quang', 'Thiên Quý', 'Thiên Cơ', 'Thái Âm', 'Thiên Đồng', 'Thiên Lương'],
    doUuTien: 75,
    tomTat: `**Phượng Các Quan Lộc + Ân Quang + Thiên Quý + Cơ Nguyệt Đồng Lương:** **BÁC SỸ TAI MŨI HỌNG**.`,
  },

  {
    id: 'phuong-cac-quan-loc-vu-tau-luu-hong-dao-cai',
    title: 'Phượng Các Quan + Vũ + Tấu + Lưu + Hồng + Đào + Cái - nổi danh nghệ thuật',
    sao: ['Phượng Các'],
    cung: ['Quan Lộc'],
    ketHop: ['Vũ Khúc', 'Tấu Thư', 'Lưu Hà', 'Hồng Loan', 'Đào Hoa', 'Hoa Cái'],
    doUuTien: 75,
    tomTat: `**Phượng Các Quan Lộc + Vũ Khúc + Tấu Thư + Lưu Hà + Hồng Loan + Đào Hoa + Hoa Cái:** **NỔI DANH** trong lĩnh vực **ÂM NHẠC, NGHỆ THUẬT**.`,
  },

  {
    id: 'phuong-cac-tai-no-boc',
    title: 'Phượng Các tại Nô Bộc',
    sao: ['Phượng Các'],
    cung: ['Nô Bộc'],
    doUuTien: 72,
    tomTat: `**Phượng Các tại Nô Bộc:**
- Bạn bè đồng nghiệp **NHIỀU NGƯỜI QUYỀN QUÝ, GIÀU CÓ, ĐẮC LỰC**
- Hay được bạn bè **GIÚP ĐỠ**
- Đem đến **MAY MẮN và TIỀN BẠC**`,
  },

  {
    id: 'phuong-cac-no-boc-ta-huu-quang-quy',
    title: 'Phượng Các Nô + Tả Phù + Hữu Bật + Ân Quang + Thiên Quý - bạn bè giúp đỡ',
    sao: ['Phượng Các'],
    cung: ['Nô Bộc'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Ân Quang', 'Thiên Quý'],
    doUuTien: 67,
    tomTat: `**Phượng Các Nô Bộc + Tả Phù + Hữu Bật + Ân Quang + Thiên Quý:**
- Đương số càng dễ được bạn bè **GIÚP ĐỠ**
- Tăng thêm **MAY MẮN và TÀI LỘC**`,
  },

  {
    id: 'phuong-cac-tai-thien-di',
    title: 'Phượng Các tại Thiên Di',
    sao: ['Phượng Các'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `**Phượng Các tại Thiên Di:**
- Vị trí **THUẬN LỢI** để phát triển **mối quan hệ xã hội**
- Khi ra ngoài thường **GẶP QUÝ NHÂN**
- Được **NHIỀU NGƯỜI YÊU QUÝ, MẾN MỘ**
- Hay xuất hiện trong môi trường **NHIỀU NGƯỜI QUYỀN QUÝ, CHỨC TƯỚC**`,
  },

  {
    id: 'phuong-cac-thien-di-khoi-viet-long-tri',
    title: 'Phượng Các Di + Thiên Khôi + Thiên Việt + Long Trì - quý nhân nâng đỡ',
    sao: ['Phượng Các'],
    cung: ['Thiên Di'],
    ketHop: ['Thiên Khôi', 'Thiên Việt', 'Long Trì'],
    doUuTien: 70,
    tomTat: `**Phượng Các Thiên Di + Thiên Khôi + Thiên Việt + Long Trì:**
- Càng **THỂ HIỆN RÕ NÉT**
- Quý nhân nâng đỡ rõ ràng.`,
  },

  {
    id: 'phuong-cac-tai-tat-ach',
    title: 'Phượng Các tại Tật Ách - Phượng Giải giải bệnh',
    sao: ['Phượng Các'],
    cung: ['Tật Ách'],
    doUuTien: 78,
    tomTat: `**Phượng Các tại Tật Ách:**
- Phượng Các **luôn có Giải Thần đi cùng**: có khả năng **GIẢI TRỪ BỆNH TẬT,
  TAI HỌA**
- Bị ốm dễ **GẶP THẦY THUỐC GIỎI**

**Bệnh đặc trưng:**
- Liên quan tới **BỘ PHẬN TAI** (do hình tượng Phượng Các)
- **THẬN**

**Cảnh báo Phượng Giải:**
Giải Thần chỉ giải được **TAI ƯƠNG NHỎ**. Khi gặp **ĐẠI HẠN HUNG HIỂM** hoặc
**BỆNH NẶNG**: Giải Thần có thể trở thành **"TỬ THẦN"**, báo hiệu **sự ra đi
ĐỘT NGỘT**.`,
  },

  {
    id: 'phuong-cac-tat-ach-ky-da-khong-kiep',
    title: 'Phượng Các Tật + Hóa Kỵ + Đà La + Không Kiếp - tai điếc',
    sao: ['Phượng Các'],
    cung: ['Tật Ách'],
    ketHop: ['Hóa Kỵ', 'Đà La', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 73,
    tomTat: `**Phượng Các Tật Ách + Hóa Kỵ + Đà La + Không Kiếp:** **TAI ĐIẾC, NGHỄNH NGÃNG**.`,
  },

  {
    id: 'phuong-cac-tai-tai-bach',
    title: 'Phượng Các tại Tài Bạch',
    sao: ['Phượng Các'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Phượng Các tại Tài Bạch:**
- Gia tăng **TỐT ĐẸP** về **MƯU CẦU TÀI LỘC, TIỀN BẠC**
- Hoặc được **THỪA HƯỞNG DI SẢN, ĐỊA ỐC**
- **TIỀN TRỢ CẤP, TIỀN HƯU BỔNG**
- Chính mình cũng **CHU CẤP cho người khác**, **làm VIỆC TỪ THIỆN**

**Đặc tính:**
- Người **CÔNG TÂM** về tiền
- **TIỀN BẠC PHÂN MINH**
- Luôn kiếm đồng tiền **SẠCH SẼ, THANH CAO**

**Phượng Giải Thần đi cùng:**
- Nếu biết **DÙNG TIỀN làm VIỆC THIỆN**, **GIÚP ĐỠ CỘNG ĐỒNG**
-: Càng dễ **PHÁT TÀI, GIÀU CÓ**`,
  },

  {
    id: 'phuong-cac-tai-tu-tuc',
    title: 'Phượng Các tại Tử Tức',
    sao: ['Phượng Các'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `**Phượng Các tại Tử Tức:**
- **DỄ SINH CON**
- Sinh con **ĐẸP**
- **DỄ NUÔI**

**Đặc trưng:**
- Người **DỄ SINH QUÝ TỬ**
- Con cái **THÔNG MINH, TUẤN KIỆT**
- Có **KHẢ NĂNG CẢM NHẬN ÂM THANH TỐT** (do Phượng Các là cái tai)`,
  },

  {
    id: 'phuong-cac-tu-tuc-ta-huu-xuong-khuc-khoa',
    title: 'Phượng Các Tử Tức + Tả Hữu + Xương Khúc + Hóa Khoa - con cái thành danh',
    sao: ['Phượng Các'],
    cung: ['Tử Tức'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Hóa Khoa'],
    doUuTien: 70,
    tomTat: `**Phượng Các Tử Tức + Tả Phù + Hữu Bật + Văn Xương + Văn Khúc + Hóa Khoa:**
- Con cái càng **TUẤN KIỆT**
- Dễ **THÀNH DANH**
- Dễ nuôi và **HIẾU THẢO**`,
  },

  {
    id: 'phuong-cac-tai-phu-the',
    title: 'Phượng Các tại Phu Thê - lầu son gác tía',
    sao: ['Phượng Các'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `**Phượng Các tại Phu Thê** — sao của **LẦU SON GÁC TÍA**:

**Đặc trưng:**
- Người hôn phối là người **GIỎI GIANG, XỨNG LỨA VỪA ĐÔI**
- Hoàn cảnh gia đình nhà hôn phối **CÓ ĐIỀU KIỆN và ĐỊA VỊ**
- Vợ chồng **ĐẸP ĐÔI, TƯƠNG ĐẮC**
- Cưới xin **DỄ DÀNG**
- Người hôn phối **QUYỀN QUÝ, THANH CAO**, có **ĐIỀU KIỆN KINH TẾ TỐT**

**Tuổi Mão / Dậu + Tả Hữu:**
- Lấy **NGƯỜI PHƯƠNG XA**
- **KHÉO LÉO, GIỎI GIANG**`,
  },

  {
    id: 'phuong-cac-phu-the-long-quang-quy',
    title: 'Phượng Các Phu Thê + Long Trì + Ân Quang + Thiên Quý - tình duyên đẹp lâu bền',
    sao: ['Phượng Các'],
    cung: ['Phu Thê'],
    ketHop: ['Long Trì', 'Ân Quang', 'Thiên Quý'],
    doUuTien: 73,
    tomTat: `**Phượng Các Phu Thê + Long Trì + Ân Quang + Thiên Quý:** tình duyên càng **ĐẸP**, càng **LÂU BỀN**.`,
  },

  {
    id: 'phuong-cac-phu-the-sat-tinh',
    title: 'Phượng Các Phu Thê + Nhiều Sát Tinh - hôn nhân lận đận',
    sao: ['Phượng Các'],
    cung: ['Phu Thê'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 73,
    tomTat: `**Phượng Các Phu Thê + Nhiều Sát Tinh:**
- Hôn nhân **LẬN ĐẬN**
- Có thể trải qua **HAI LẦN ĐÒ**`,
  },

  {
    id: 'phuong-cac-tai-huynh-de',
    title: 'Phượng Các tại Huynh Đệ',
    sao: ['Phượng Các'],
    cung: ['Huynh Đệ'],
    doUuTien: 70,
    tomTat: `**Phượng Các tại Huynh Đệ:**
- Anh chị em **ĐÔNG ĐỦ**
- Nhiều người **THÀNH ĐẠT, TÀI GIỎI**
- **QUYỀN QUÝ**, có học thức`,
  },

  {
    id: 'phuong-cac-huynh-de-quang-quy-tu-phu-tuong',
    title: 'Phượng Các Huynh Đệ + Quang Quý + Tử Phủ Vũ Tướng - máu chảy ruột mềm',
    sao: ['Phượng Các'],
    cung: ['Huynh Đệ'],
    ketHop: ['Ân Quang', 'Thiên Quý', 'Thiên Phủ', 'Tử Vi', 'Thiên Tướng'],
    doUuTien: 65,
    tomTat: `**Phượng Các Huynh Đệ + Ân Quang + Thiên Quý + Thiên Phủ + Tử Vi + Thiên Tướng:**
- Anh chị em càng **YÊU THƯƠNG, TƯƠNG TRỢ** lẫn nhau
- "**MÁU CHẢY RUỘT MỀM**"
- Gia đình **HƯNG THỊNH**`,
  },

  {
    id: 'phuong-cac-han-thi-do',
    title: 'Phượng Các + Thai Phụ + Phong Cáo vào hạn - thăng quan thi đỗ',
    sao: ['Phượng Các'],
    ketHop: ['Thai Phụ', 'Phong Cáo'],
    doUuTien: 60,
    tomTat: `**Phượng Các + Thai Phụ + Phong Cáo vào hạn:**

**Đặc trưng:**
- **THĂNG QUAN**
- **THI ĐỖ**

- Bộ Thai Phụ + Phong Cáo (chức tước, bằng cấp) + Phượng Các (khoa bảng): cách
**HIỂN ĐẠT công danh** vào năm hạn.`,
  },

  {
    id: 'long-phuong-am-duong-hy-sinh-con',
    title: 'Long Trì + Phượng Các + Âm Dương + Hỷ - dễ sinh con',
    sao: ['Long Trì', 'Phượng Các'],
    ketHop: ['Thái Âm', 'Thái Dương', 'Thiên Hỷ'],
    doUuTien: 65,
    tomTat: `**Long Phượng + Thái Âm + Thái Dương + Thiên Hỷ vào hạn:**

**Đặc trưng:**
- **DỄ SINH CON**
- **SINH CON THUẬN LỢI**

- Bộ Long Phượng (khoa bảng + may mắn) + Nhật Nguyệt (cha mẹ) + Thiên Hỷ (hỷ
sự): cách **đẹp cho việc SINH NỞ**.

- Đặc biệt tốt cho cặp vợ chồng **mong con** vào năm có hạn này.`,
  },

  {
    id: 'phuong-cac-loi-khuyen',
    title: 'Lời khuyên cho người Phượng Các',
    sao: ['Phượng Các'],
    doUuTien: 35,
    tomTat: `**Người sở hữu Phượng Các thường mang vẻ THANH CAO, PHẨM CHẤT ĐÀI CÁC và
PHÚC KHÍ DỒI DÀO**.

**Sức mạnh:**
- **NHAN SẮC ĐẸP** (đặc biệt tai dày, đẹp)
- **THÔNG MINH, TUẤN KIỆT**
- **KHOA BẢNG, HỶ SỰ**
- **GIẢI THẦN đi cùng** = bùa hộ mệnh

**Cảnh báo:** "**Phúc bất trùng lai, họa vô đơn chí**" — để giữ được phúc
tinh bền lâu thì chủ mệnh phải:

**Bí quyết phát huy Phượng Các:**
- **SỐNG THIỆN LÀNH**
- **GIỮ LÒNG NGAY THẲNG**
- **TÍCH ĐỨC HÀNH THIỆN**
- **CHĂM SÓC SỨC KHỎE TAI** từ trẻ
- Phát huy **NĂNG KHIẾU NGHỆ THUẬT, ÂM NHẠC** nếu có
- Đi với **Long Trì** tạo cách **Long Phượng** rực rỡ
- Đi với **Xương Khúc + Khôi Việt + Tả Hữu** tạo cách **HIỀN THẦN PHÒ TỬ PHỦ**

- Như vậy cuộc đời sẽ ngày một **HANH THÔNG, VINH HIỂN**, **PHÚC THỌ VẸN TOÀN**.`,
  },
];
