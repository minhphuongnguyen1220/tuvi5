import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO LONG TRÌ - Thủy, Cát Tinh.
 * LUÔN đồng cung với QUAN PHÙ (vòng Thái Tuế) - hardcode trong engine.
 * Tam hợp Tuế-Hổ-Phù (Thái Tuế + Bạch Hổ + Quan Phù).
 *
 * Cùng PHƯỢNG CÁC tạo bộ LONG PHƯỢNG - phần CHUNG bộ này viết tại đây.
 * Một trong TỨ LINH (Cái-Long-Hổ-Phượng) - phần chung Tứ Linh đã viết tại thanh-long.ts.
 *
 * Hình tượng: CÁI MŨI.
 */
export const luanGiai_LongTri: DoanLuanGiai[] = [
  {
    id: 'long-tri-tinh-chat-chung',
    title: 'Long Trì - Đặc tính chung',
    sao: ['Long Trì'],
    doUuTien: 32,
    tomTat: `**Long Trì** — phụ tinh **CÁT TINH**.

**Ngũ hành:** **Thủy**.

**Hóa khí:** **Cát Tinh**.

⚡ **Vị thế:**
- **LUÔN đi cùng Quan Phù** (đồng cung — hardcode trong engine)
- Tam hợp **TUẾ - HỔ - PHÙ** (Thái Tuế + Bạch Hổ + Quan Phù) — vòng tam hợp
  của **bậc TRƯỢNG PHU**, **CHÍNH NGHĨA, BỀN BỈ, XÂY DỰNG**
- Một trong **TỨ LINH** (Cái-Long-Hổ-Phượng) — đẹp đẽ hơn khi có **Phượng Các**
  đi cùng

⚡ **Vai trò bên Quan Phù:**
- Quan Phù là **QUAN TÒA xử án**
- Long Trì đi cùng → **TĂNG sự SÁNG SUỐT, THANH CAO**
- **Tránh nhầm lẫn**, **không nghiêng sang cái xấu**
- Đảm bảo Quan Phù luôn là **người có CỐT CÁCH và ÔN HÒA**

⚡ **Hình tượng cơ thể:** **CÁI MŨI**.

**Đặc tính:** **CÔNG DANH, THANH CAO, QUÝ HIỂN, MAY MẮN, QUYỀN QUÝ, KHOA BẢNG**.`,
  },

  {
    id: 'long-phuong-tu-linh',
    title: 'Long Phượng (Long Trì + Phượng Các) - đôi cát tinh khoa bảng',
    sao: ['Long Trì', 'Phượng Các'],
    doUuTien: 75,
    tomTat: `🌟 **Long Trì + Phượng Các** = bộ **LONG PHƯỢNG** — 2 sao thuộc **TỨ LINH** rất
**ƯA ĐI VỚI NHAU**.

🌟 **Tác dụng:** **làm MẠNH THÊM** ý nghĩa về:
- **CÔNG DANH**
- **QUÝ HIỂN**
- **MAY MẮN**
- **QUYỀN QUÝ**
- **KHOA BẢNG**

📜 **Câu phú:**
> "**Phượng, Long Mão - Dậu đôi miền,
> Vượng thời kim bảng đề tên ở đầu.**"

⚡ **Cách cục:**
**Người tuổi MÃO/DẬU + Mệnh đóng tại MÙI/SỬU + Long Phượng đồng cung:**
- **THÔNG MINH, UYÊN BÁC**
- **GIỎI VĂN CHƯƠNG**
- Có **TÀI HÙNG BIỆN**
- Thi cử thường **ĐỖ ĐẠT CAO**, "**bảng vàng xướng danh**"
- Tên tuổi được **TRỌNG VỌNG**

→ Đây là một trong những **CÁCH CỤC ĐẸP NHẤT** cho con đường khoa cử.`,
  },

  {
    id: 'long-tri-tuong-mao-mui',
    title: 'Long Trì - Tướng mạo (cái mũi)',
    sao: ['Long Trì'],
    cung: ['Mệnh'],
    doUuTien: 50,
    tomTat: `🌟 **Long Trì thủ Mệnh - Tướng mạo:**

🌟 **Đặc điểm:**
- **NHAN SẮC RẤT ĐẸP**
- **DA MẶT HỒNG HÀO, THANH TÚ**
- Đặc biệt với **PHỤ NỮ**
- Có **MŨI RẤT ĐẸP** — quý tướng

⚡ **Hình tượng cơ thể:** Long Trì = **CÁI MŨI** → người có Long Trì thủ Mệnh
thường có:
- **MŨI ĐẸP, CAO, THẲNG**
- **QUÝ TƯỚNG**

⚠️ **+ Kình Dương:** mũi **SỐNG TRÂU** (thô, dáng cứng cáp).
⚠️ **+ Thiên Khốc + Thiên Hư + Thiên Hình:** **HAY ĐAU MŨI PHẢI MỔ**.
⚠️ **+ Địa Kiếp** hoặc **+ Thiên Hình:** **MŨI XẤU**, có thể bị **SẸO**.`,
  },

  {
    id: 'long-tri-tai-menh',
    title: 'Long Trì tại Mệnh - thông minh tuấn kiệt',
    sao: ['Long Trì'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `🌟 **Long Trì thủ Mệnh:**

🌟 **Tính cách:**
- **THÔNG MINH, TUẤN KIỆT**, có **VĂN CHẤT**
- **ÔN HÒA, NHÂN HẬU**
- **THANH TAO, ĐIỀM ĐẠM, CỞI MỞ**

🌟 **Công danh - Tài lộc:**
- May mắn trong **KHOA BẢNG VĂN CHƯƠNG**
- **THI ĐỖ CAO**, có **KHOA GIÁP LỚN**
- Tăng thêm **TÀI LỘC, ĐIỀN SẢN** (Long Trì chỉ **NHÀ CỬA, AO HỒ**)
- May mắn trong **HÔN NHÂN** — dễ yêu, dễ cưới, vợ chồng tương đắc
- May mắn trong **SINH NỞ** — dễ sanh, sinh dễ nuôi

⚡ **Vẹn toàn nhiều mặt:**
Long Trì thể hiện **TƯƠNG ĐỐI VẸN TOÀN** về:
- **NHAN SẮC**
- **TÍNH HẠNH**
- **TÀI LỘC**
- **GIA ĐẠO**

→ Đây là **CÁT TINH ĐẸP VẸN TOÀN** trong tử vi.`,
  },

  {
    id: 'long-tri-tai-menh-nu',
    title: 'Long Trì tại Mệnh - nữ mệnh đoan trang',
    sao: ['Long Trì'],
    cung: ['Mệnh'],
    gioiTinh: 'Nữ',
    doUuTien: 72,
    tomTat: `🌟 **Long Trì thủ Mệnh - Nữ mệnh:**
- **ĐOAN TRANG** trong nết hạnh
- "**Công dung ngôn hạnh**" vẹn toàn
- Phẩm hạnh thanh cao
- Thần thái ôn hòa, nhân hậu`,
  },

  {
    id: 'long-tri-thai-phu-phong-cao',
    title: 'Long Trì + Thai Phụ + Phong Cáo - thăng quan tiến chức',
    sao: ['Long Trì'],
    ketHop: ['Thai Phụ', 'Phong Cáo'],
    doUuTien: 75,
    tomTat: `🌟 **Long Trì + Thai Phụ + Phong Cáo:**

🌟 **Đặc trưng:**
- **THĂNG QUAN, TIẾN CHỨC**
- **THI ĐỖ** đạt cao
- Bằng cấp được công nhận

→ Bộ Thai Phụ + Phong Cáo là cặp sao **CHỨC TƯỚC, BẰNG CẤP** kết hợp với
**Long Trì** (khoa bảng) → tạo cách **HIỂN ĐẠT công danh**.`,
  },

  {
    id: 'long-tri-rieu-hy-phi',
    title: 'Long Trì + Thiên Riêu / Thiên Hỷ / Phi Liêm - hỷ sự nhanh',
    sao: ['Long Trì'],
    ketHop: ['Thiên Riêu', 'Thiên Hỷ', 'Phi Liêm'],
    doUuTien: 70,
    tomTat: `🌟 **Long Trì + Thiên Riêu / Thiên Hỷ / Phi Liêm:**

🌟 **Đặc trưng - ĐẮC THỜI:**
- Có **HỶ SỰ ĐẾN NHANH CHÓNG**
- Chủ về:
  - **TÌNH DUYÊN**
  - **THI CỬ**
  - **QUAN LỘ**

→ Đây là cách **TIN VUI ĐẾN GẦN** — đặc biệt khi vào **đại hạn** hay **tiểu hạn**.`,
  },

  {
    id: 'long-tri-thien-luong-hien-phu',
    title: 'Long Trì + Thiên Lương - nữ mệnh có chồng danh giá hiền phu',
    sao: ['Long Trì'],
    ketHop: ['Thiên Lương'],
    cung: ['Phu Thê', 'Mệnh'],
    gioiTinh: 'Nữ',
    doUuTien: 70,
    tomTat: `🌟 **Long Trì + Thiên Lương** (Nữ mệnh):

🌟 **Đặc trưng:**
- Nữ mệnh có **CHỒNG DANH GIÁ**
- **HIỀN PHU** (chồng hiền lành, đức độ)
- Người chồng có **uy tín xã hội**

→ Đây là cách **HÔN NHÂN ĐẸP** đặc biệt cho phụ nữ.`,
  },

  {
    id: 'long-phuong-xuong-khuc-khoi-viet-hien-than',
    title: 'Long Phượng + Xương Khúc + Khôi Việt + Tả Hữu - bộ "Hiền Thần"',
    sao: ['Long Trì', 'Phượng Các'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt', 'Tả Phù', 'Hữu Bật'],
    doUuTien: 85,
    tomTat: `🌟 **Long Phượng + Xương Khúc + Khôi Việt + Tả Hữu** = bộ sao **"HIỀN THẦN"**.

🌟 **Vai trò:**
- Chuyên **PHÒ TÁ** cho **TỬ PHỦ**
- Cách này giúp:
  - **ĐẮC QUAN MAU LẸ**
  - **CAO QUÝ**
  - **VÔ CÙNG GIỎI GIANG**

→ Đây là **CÁCH CỤC VƯƠNG GIẢ** trong tử vi — kết hợp đầy đủ:
- **Long Phượng** (khoa bảng + may mắn)
- **Xương Khúc** (văn chương)
- **Khôi Việt** (quý nhân)
- **Tả Hữu** (trợ thủ)

→ Khi có thêm **TỬ PHỦ** thì thành **MỆNH ĐẾ VƯƠNG**, sự nghiệp **HIỂN ĐẠT TỘT
BẬC**.`,
  },

  {
    id: 'long-tri-tai-phu-mau',
    title: 'Long Trì tại Phụ Mẫu',
    sao: ['Long Trì'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `🌟 **Long Trì tại Phụ Mẫu:**
- Giúp **TĂNG THỌ** cho cha mẹ, đem lại **MAY MẮN**
- Cha mẹ là người **ĐẸP ĐẼ, THANH CAO, ÔN HÒA**

🌟 **+ Cát Tinh + Văn Tinh** (Tả Hữu / Khôi Việt / Xương Khúc / Phượng Các /
Quang Quý):
- Cha mẹ **THÀNH ĐẠT, CÓ HỌC THỨC**
- Có **VỊ TRÍ trong xã hội**
- Dễ làm về **HÀNH PHÁP, PHÁP LUẬT, NƠI CÔNG QUYỀN**
- Khoa bảng hiển đạt

⚠️ **+ Sát Tinh** (Kình Dương / Đà La / Hóa Kỵ / Linh Tinh / Hỏa Tinh / Không
Kiếp):
- Cha mẹ trắc trở về **SỨC KHỎE liên quan MŨI, HÔ HẤP**
- Dễ vướng **KIỆN TỤNG, THỊ PHI**
- Cuộc đời chịu **NHIỀU PHIỀN MUỘN**`,
  },

  {
    id: 'long-tri-tai-phuc-duc',
    title: 'Long Trì tại Phúc Đức',
    sao: ['Long Trì'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `🌟 **Long Trì tại Phúc Đức:**
- Trong dòng họ **NHIỀU NGƯỜI KHÁ GIẢ**
- Nhiều người **ĐỖ KHOA BẢNG CAO**
- Có **TRUYỀN THỐNG PHẨM HẠNH ĐẠO ĐỨC TỐT**

⚡ **Đặc điểm tâm linh:**
- Ông bà tổ tiên **MỒ YÊN MẢ ĐẸP**, **PHÁT PHƯỚC**
- Mộ hay gần **CÁI AO** hay **GIẾNG NƯỚC**

🌟 **+ Cát Tinh + Quyền Tinh** (Tử Vi / Thiên Phủ / Thái Tuế / Quốc Ấn):
- Tổ tiên xưa kia có người **LÀM QUAN LỚN, NỔI DANH**
- **KHẮT KHE và QUYỀN BIẾN**
- Dòng họ hưởng **PHÚC LÂU DÀI**, con cháu **ĐỖ ĐẠT, THĂNG TIẾN**

⚠️ **+ Địa Không / Địa Kiếp / Thiên Hình:**
- **PHÚC PHẬN suy giảm**
- Dễ gặp cảnh **MỘ PHẦN HƯ HỎNG, phong thủy KÉM**
- Hậu duệ thông minh nhưng **ĐOẢN THỌ**`,
  },

  {
    id: 'long-tri-tai-dien-trach',
    title: 'Long Trì tại Điền Trạch - nhà gần ao hồ',
    sao: ['Long Trì'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `🌟 **Long Trì tại Điền Trạch:**
- Nhà **LẤP AO LẤP GIẾNG để ở**
- Nhà cửa **ĐẸP**
- Gần **NƠI CÔNG MÔN, CÔNG QUYỀN, TÒA ÁN, VIỆN KIỂM SÁT**
- Hàng xóm xung quanh nhiều người có **ĐỊA VỊ, CHỨC SẮC**

🌟 **+ Mộ:** có **NHÀ ĐẤT RỘNG RÃI**, **DI SẢN**.

🌟 **+ Thai + Bát Tọa:** **NHÀ LẦU CAO SANG**, có **AO HỒ**.

⚠️ **+ Sát Tinh:**
- Đất ao hồ **KHÓ CẢI TẠO**
- Nhà cửa phải **HAY SỬA CHỮA TỐN KÉM**
- Hoặc phải **BÁN ĐỔI nhiều lần**
- Dễ gặp **KIỆN TỤNG đất đai**`,
  },

  {
    id: 'long-tri-tai-quan-loc',
    title: 'Long Trì tại Quan Lộc',
    sao: ['Long Trì'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `🌟 **Long Trì tại Quan Lộc:**
- Đem lại **MAY MẮN, TÀI LỘC** trong học tập, công việc
- Trong công việc luôn có tính **CÔNG TÂM, XÂY DỰNG**
- Được **NHIỀU NGƯỜI KÍNH NỂ, QUÝ MẾN**

🌟 **Nghề phù hợp** (vì luôn đi cùng Quan Phù):
- **HỌC LUẬT, HÀNH NGHỀ LUẬT**
  - **THẨM PHÁN, TRẠNG SƯ**
- Công việc tính chất **SOI XÉT, PHÁN ĐOÁN, SUY LUẬN**, **KHẮT KHE CAO**
- **BÁC SỸ TAI MŨI HỌNG** (do Long Trì là cái mũi)

🌟 **+ Khôi Việt / Thai / Bát Tọa / Phượng Các / Long Phượng:**
- Công danh **HIỂN ĐẠT**
- Dễ **THĂNG TIẾN**
- Được **QUÝ NHÂN nâng đỡ**

⚠️ **+ Kình Dương / Đà La / Hóa Kỵ:**
- Học hành **DANG DỞ**
- Thi cử **KHÓ KHĂN**
- Sự nghiệp **THĂNG TRẦM**, vướng **TRANH CÃI, THỊ PHI**`,
  },

  {
    id: 'long-tri-tai-no-boc',
    title: 'Long Trì tại Nô Bộc',
    sao: ['Long Trì'],
    cung: ['Nô Bộc'],
    doUuTien: 72,
    tomTat: `🌟 **Long Trì tại Nô Bộc:**
- Bạn bè đồng nghiệp **NHIỀU NGƯỜI QUYỀN QUÝ, GIÀU CÓ, ĐẮC LỰC**
- Hay được bạn bè **GIÚP ĐỠ**
- Đem đến **MAY MẮN và TIỀN BẠC**

🌟 **+ Cát Tinh:** quen nhiều người **THÀNH ĐẠT**, làm về **HÌNH PHÁP, PHÁP
LUẬT**.

⚠️ **+ Sát Tinh:**
- Quan hệ bạn bè dễ sinh **ĐIỀU TIẾNG, TRANH CHẤP**
- Có người **LỢI DỤNG**
- Vướng **KIỆN TỤNG do bạn bè gây ra**`,
  },

  {
    id: 'long-tri-tai-thien-di',
    title: 'Long Trì tại Thiên Di',
    sao: ['Long Trì'],
    cung: ['Thiên Di'],
    doUuTien: 72,
    tomTat: `🌟 **Long Trì tại Thiên Di:**
- Người **THIỆN LƯƠNG, ÔN HÒA**
- Ra ngoài, đi xa hay được **MAY MẮN**, **NGƯỜI KHÁC GIÚP ĐỠ**
- Ra ngoài hay ở trong môi trường **NHIỀU NGƯỜI QUYỀN QUÝ, CHỨC TƯỚC**

⚠️ **+ Hỏa Linh / Không Kiếp / Hóa Kỵ:**
- Ra ngoài hay gặp **RẮC RỐI**
- Bị người khác **LỢI DỤNG, HAO TÀI**
- Dễ vướng **KIỆN CÁO, THỊ PHI**`,
  },

  {
    id: 'long-tri-tai-tat-ach',
    title: 'Long Trì tại Tật Ách - bệnh mũi máu huyết',
    sao: ['Long Trì'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `🌟 **Long Trì tại Tật Ách:**
- Có tác dụng **GIẢI TRỪ BỆNH TẬT, TAI HỌA**
- Bị ốm dễ **GẶP THẦY THUỐC GIỎI**

⚠️ **Bệnh đặc trưng:**
- Liên quan tới **BỘ PHẬN MŨI** (do hình tượng Long Trì)
- **MÁU HUYẾT**

⚠️ **+ Thiên Khốc + Thiên Hư + Thiên Hình:** hay **ĐAU MŨI phải MỔ**.

⚠️ **Quan Phù + Long Trì** (cặp đôi luôn đồng cung) **tại cung Tật:**
- Dễ mắc **TAI HỌA về THỊ PHI, KIỆN CÁO**
- + Thái Tuế / Thiên Hình / Bạch Hổ / Liêm Trinh / Hóa Kỵ → liên quan **PHÁP
  LUẬT, HÌNH TÙ**`,
  },

  {
    id: 'long-tri-tai-tai-bach',
    title: 'Long Trì tại Tài Bạch',
    sao: ['Long Trì'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `🌟 **Long Trì tại Tài Bạch:**
- Đem lại **MAY MẮN về TIỀN CỦA**
- Chủ về **PHÚ QUÝ, GIÀU SANG**

🌟 **Long Trì + Quan Phù** (luôn đồng cung) **cư Tài:**
- Người **CÔNG TÂM về tiền của**
- **TIỀN BẠC PHÂN MINH**
- Luôn kiếm đồng tiền **SẠCH SẼ, THANH CAO**

🌟 **+ Quyền Tinh** (Thái Tuế / Quốc Ấn / Phong Cáo / Bát Tọa):
- Tiền bạc **DƯ DẢ**
- Gắn liền với **UY TÍN, DANH VỊ**

⚠️ **+ Hung Tinh:**
- Tiền bạc **KHÓ GIỮ**
- Dễ vướng **KIỆN TỤNG**
- **HAO TÀI tán của**`,
  },

  {
    id: 'long-tri-tai-tu-tuc',
    title: 'Long Trì tại Tử Tức',
    sao: ['Long Trì'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `🌟 **Long Trì tại Tử Tức:**
- **DỄ SINH CON**
- Sinh con **ĐẸP**
- **DỄ NUÔI**

🌟 **Đặc trưng:**
- Người **DỄ SINH QUÝ TỬ**
- Con cái **THÔNG MINH, TUẤN KIỆT**

🌟 **+ Cát Tinh:**
- Con cái **THÔNG MINH, SUY XÉT TỐT**
- Dễ làm nghề **THẨM PHÁN, QUAN TÒA**`,
  },

  {
    id: 'long-tri-tai-phu-the',
    title: 'Long Trì tại Phu Thê',
    sao: ['Long Trì'],
    cung: ['Phu Thê'],
    doUuTien: 78,
    tomTat: `🌟 **Long Trì tại Phu Thê:**
- Vợ chồng **ĐẸP ĐÔI, TƯƠNG ĐẮC**
- Cưới xin **DỄ DÀNG**
- Người hôn phối là người **QUYỀN QUÝ, THANH CAO**
- Có **ĐIỀU KIỆN KINH TẾ TỐT**

⚡ **Tuổi Mão / Dậu + Tả Hữu:**
- Lấy **NGƯỜI PHƯƠNG XA**
- **KHÉO LÉO**
- Hội thêm **SÁT BẠI TINH** thì là người **HAI VỢ hoặc HAI CHỒNG**

⚠️ **+ Kình Dương / Đà La / Hóa Kỵ:**
- Hôn nhân dễ gặp **TRẮC TRỞ**
- Vợ chồng hay **BẤT HÒA hoặc XA CÁCH**
- Có thể **HAI LẦN ĐÒ**`,
  },

  {
    id: 'long-tri-tai-huynh-de',
    title: 'Long Trì tại Huynh Đệ',
    sao: ['Long Trì'],
    cung: ['Huynh Đệ'],
    doUuTien: 70,
    tomTat: `🌟 **Long Trì tại Huynh Đệ:**
- Anh chị em **NHIỀU NGƯỜI TÀI NĂNG, GIỎI GIANG, THÀNH ĐẠT**
- Sống **NGAY THẲNG, CÔNG TÂM**

⚠️ **Mặt khó:**
- Tính cách **NGHIÊM NGHỊ, KHẮT KHE**
- Đôi khi **KHÓ TÍNH** trong cách ứng xử

🌟 Trong gia đình dễ có người theo ngành **LUẬT PHÁP, HÀNH CHÍNH, THẨM PHÁN,
LUẬT SƯ** hoặc các công việc có tính chất **CÔNG QUYỀN, XÉT ĐOÁN**.`,
  },

  {
    id: 'long-tri-han-cuoi-hoi',
    title: 'Long Trì + Thiên Riêu + Thiên Hỷ vào hạn - cưới hỏi',
    sao: ['Long Trì'],
    ketHop: ['Thiên Riêu', 'Thiên Hỷ'],
    doUuTien: 60,
    tomTat: `🌟 **Long Trì + Thiên Riêu + Thiên Hỷ vào hạn:**

🌟 **Đặc trưng:**
- **HẠN CƯỚI HỎI**
- Đưa đến **HÔN NHÂN**

→ Năm có hạn này, người độc thân dễ **gặp người yêu, cưới hỏi**, có duyên thiên
định.`,
  },

  {
    id: 'long-tri-han-thi-do',
    title: 'Long Trì + Phong Cáo + Quốc Ấn vào hạn - thi đỗ thăng chức',
    sao: ['Long Trì'],
    ketHop: ['Phong Cáo', 'Quốc Ấn'],
    doUuTien: 60,
    tomTat: `🌟 **Long Trì + Phong Cáo + Quốc Ấn vào hạn:**

🌟 **Đặc trưng:**
- **THI ĐỖ**
- **THĂNG CHỨC**

→ Bộ Phong Cáo (bằng cấp) + Quốc Ấn (chức tước) + Long Trì (khoa bảng) → cách
**HIỂN ĐẠT công danh** vào năm có hạn.`,
  },

  {
    id: 'long-tri-loi-khuyen',
    title: 'Lời khuyên cho người Long Trì',
    sao: ['Long Trì'],
    doUuTien: 35,
    tomTat: `💡 **Long Trì là ngôi sao của DANH VỌNG và PHÚC PHẦN** — vừa là **TẤM BÙA HỘ
MỆNH** cho con đường công danh, vừa là **ÁNH SÁNG soi đường** cho sự **HƯNG
THỊNH của GIA ĐẠO**.

🌟 **Ưu điểm vẹn toàn:**
- **NHAN SẮC**, mũi đẹp
- **TÍNH HẠNH** ôn hòa nhân hậu
- **TÀI LỘC** dồi dào
- **GIA ĐẠO** thuận hòa

💡 **Bí quyết phát huy Long Trì:**
- **GIỮ TÂM CHÍNH TRỰC**
- **HÀNH SỰ ĐƯỜNG HOÀNG**
- Phát huy **TÀI VĂN CHƯƠNG, KHOA BẢNG**
- Đi với cát tinh - đặc biệt **Phượng Các** - tạo cách **Long Phượng**
- Chăm sóc sức khỏe **MŨI, HÔ HẤP**

→ Người hữu duyên được Long Trì chiếu chỉ cần **giữ tâm chính trực, hành sự
đường hoàng**, ắt sẽ **hưởng PHÚC LỘC LÂU DÀI** và **LƯU DANH HẬU THẾ**.`,
  },
];
