import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO ĐIẾU KHÁCH - Hỏa, Bại Tinh, vòng Thái Tuế (vị trí 11).
 * Tam hợp Tang Tuế Điếu (Tang Môn + Thái Tuế + Điếu Khách) - phần CHUNG đã viết tại tang-mon.ts.
 * Nhị hợp Hồng Loan, Lục Hại Thiên Hỷ.
 * Mã Khốc Khách (Thiên Mã + Thiên Khốc + Điếu Khách) đã viết tại thien-ma.ts.
 * Tang Hổ Điếu Binh (Tứ Hung) đã viết tại bach-ho.ts.
 *
 *: SAO CUỐI hoàn tất vòng Thái Tuế 12/12!
 */
export const luanGiai_DieuKhach: DoanLuanGiai[] = [
  {
    id: 'dieu-khach-tinh-chat-chung',
    title: 'Điếu Khách - Đặc tính chung',
    sao: ['Điếu Khách'],
    doUuTien: 32,
    tomTat: `**Điếu Khách** — phụ tinh **BẠI TINH** trong **vòng Thái Tuế**, vị trí thứ
**11**.

**Ngũ hành:** **Hỏa**.

**Hóa khí:** **Bại Tinh**.

**Vị thế:**
- Tam hợp **TANG - TUẾ - ĐIẾU** (Tang Môn + Thái Tuế + Điếu Khách)
- **NHỊ HỢP** với **Hồng Loan**
- **LỤC HẠI** với **Thiên Hỷ**
- Tam hợp hoặc đồng cung với **THIÊN MÃ**

**Ý nghĩa chiết tự:**
- **KHÁCH** = **Lữ Khách, Khách phương xa, Thực Khách, Quý Khách**
- **ĐIẾU** = **lời văn tiếng nói**, hoặc **VĂN ĐIẾU** (lời chia buồn)
-: Sao chủ về **CHIA BUỒN, ĂN CHƠI, ĐI XA**

**Đặc tính:** **ĂN CHƠI, PHÁ SẢN, TÀI ĂN NÓI, NÓI PHÉT, KHOÁC LÁC**, **tiệc tùng,
phù phiếm, văn điếu chia buồn**.`,
  },

  {
    id: 'dieu-khach-ma-khoc-khach',
    title: 'Mã Khốc Khách (Thiên Mã + Thiên Khốc + Điếu Khách) - Ngựa rung chuông vàng',
    sao: ['Điếu Khách'],
    ketHop: ['Thiên Mã', 'Thiên Khốc'],
    doUuTien: 80,
    tomTat: `**Điếu Khách + Thiên Mã + Thiên Khốc** = cách **MÃ KHỐC KHÁCH** = "**NGỰA
RUNG CHUÔNG VÀNG**".

**Đây là CÁCH CỤC RẤT QUÝ trong khoa tử vi:**

**Phân tích từng sao:**
- **Thiên Khốc:** chủ về **buồn bã, thiệt thòi**
- **Điếu Khách:** chủ về **ăn chơi, đi xa**
- **Thiên Mã:** chủ về **may mắn và nghị lực**

**Đặc trưng:**
- Đương số là người có **NGHỊ LỰC**
- Gặp **NHIỀU KHÓ KHĂN VẪN VƯỢT QUA**
- Nỗi buồn (Khốc) + sự xa cách (Khách) + động lực (Mã): **biến thành ĐỘNG LỰC
  TIẾN LÊN**
- Người **đi xa thành đạt**

- Cách cục **ĐẸP NHẤT** của Điếu Khách — biến **bại tinh thành quý tinh**.`,
  },

  {
    id: 'dieu-khach-tu-ngo-mao-dau-co-qua',
    title: 'Điếu Khách tại Tý/Ngọ/Mão/Dậu - đồng cung Quả Tú + tam hợp Cô Thần',
    sao: ['Điếu Khách'],
    chi: ['Tý', 'Ngọ', 'Mão', 'Dậu'],
    doUuTien: 75,
    tomTat: `**Đặc biệt với 4 người tuổi TÝ - NGỌ - MÃO - DẬU:**

**Quy luật an sao bắt buộc:**
- **Điếu Khách LUÔN đồng cung Quả Tú**
- **Điếu Khách tam hợp Cô Thần**

**Đặc trưng:**
- **TÍNH TỰ LẬP CAO**
- Luôn **TÌM TÒI CÁI MỚI** trong công việc
- Làm việc **LỌ MỌ** và **CHĂM CHỈ**

**Sao Cô Quả** có tính **CÔ ĐỘC**: khi đi cùng Điếu Khách:
- Đương số có **CHUYÊN MÔN GIỎI**
- **CHỊU KHÓ NGHIÊN CỨU và SÁNG TẠO**

- Đây là cách **HÓA GIẢI tính ăn chơi** của Điếu Khách — biến thành **chuyên gia
ngành nghề**.`,
  },

  {
    id: 'dieu-khach-tai-menh',
    title: 'Điếu Khách tại Mệnh - ăn chơi hưởng lạc',
    sao: ['Điếu Khách'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `**Điếu Khách thủ Mệnh:**

**Tính cách:**
- **PHONG KHOÁNG**, có **TÀI ĂN NÓI**, **GIỎI GIAO TIẾP**
- **ĐAM MÊ CỜ BẠC**, thích **VẬN ĐỎ ĐEN**
- **ĂN CHƠI HƯỞNG LẠC**, đam mê **THÚ VUI PHÙ PHIẾM**
- **HAM VUI, HAM CHƠI** (cả nam và nữ)
- Thích **ĐI MUA SẮM** không tiếc tay

**Đặc trưng nói nhiều:**
- **THÍCH NÓI, THÍCH VUI, THÍCH "CHÉM GIÓ"**
- Dễ trở thành người **BA HOA, BỐC PHÉT**, **NÓI PHÉT, KHOÁC LÁC**
- Thu hút bằng lời nhưng đôi khi quá đà khiến người nghe **bán tín bán nghi**

**Quy luật cung tam hợp:** đương số mặc định **chi tiêu không có chủ đích**
và **luôn lo lắng** trong công việc (do cấu trúc tam hợp Tang Tuế Điếu).

**Cảnh báo:**
- Thẩm mỹ chỉ chú ý **vẻ ngoài hào nhoáng** hơn giá trị lâu dài
- **CHI TIÊU như "ngựa hoang đứt dây cương"**
- Thích cờ bạc, dễ tạo **NỢ NẦN, VAY MƯỢN khắp nơi**
- Vì tam hợp Tang Tuế Điếu: dễ **CHÁN NẢN, BUỒN VU VƠ, LO LẮNG**`,
  },

  {
    id: 'dieu-khach-van-tinh',
    title: 'Điếu Khách + Văn Tinh - học hành chăm chỉ',
    sao: ['Điếu Khách'],
    ketHop: ['Văn Xương', 'Văn Khúc'],
    doUuTien: 70,
    tomTat: `**Điếu Khách + nhiều Văn Tinh** (Văn Xương / Văn Khúc):

**Đặc trưng:**
- Là người **HỌC HÀNH SIÊNG NĂNG**
- **ĐAM MÊ CÔNG VIỆC**
- **MẢI MÊ KIẾM TIỀN** chứ KHÔNG đam mê cờ bạc nữa
- **TÀI ĂN NÓI** kết hợp **TRÍ TUỆ**: thuyết phục, hùng biện

- Đây là cách **CHUYỂN HÓA** Điếu Khách từ **ăn chơi** sang **học hành chăm chỉ**.

Cùng với 2 cách hóa giải khác (Mã Khốc Khách + cách đồng cung Cô-Quả): 3
cách hóa giải tính xấu của Điếu Khách.`,
  },

  {
    id: 'dieu-khach-chinh-tinh-an-choi',
    title: 'Điếu Khách + Chính Tinh ăn chơi - tăng độ hào phóng',
    sao: ['Điếu Khách'],
    ketHop: ['Thiên Đồng', 'Tham Lang', 'Thái Âm', 'Liêm Trinh', 'Thiên Phủ'],
    doUuTien: 70,
    tomTat: `**Điếu Khách + Thiên Đồng / Tham Lang / Thái Âm / Liêm Trinh / Thiên Phủ:**

Càng **TĂNG độ ĂN CHƠI, HÀO PHÓNG**:
- **Thiên Đồng:** ăn chơi hưởng lạc bẩm sinh
- **Tham Lang:** đào hoa, hưởng thụ, cờ bạc
- **Thái Âm:** đa cảm, lãng mạn quá mức
- **Liêm Trinh:** cứng đầu, đam mê đam đến cùng
- **Thiên Phủ:** giàu có nhưng tiêu hoang

- Trong trường hợp này cần **xét thêm Lục Sát Tinh, Ám Tinh, Tuần Triệt** mới
có thể kết luận chính xác.`,
  },

  {
    id: 'dieu-khach-chinh-tinh-an-choi-sat-tinh',
    title: 'Điếu Khách + Chính Tinh ăn chơi + Sát tinh - cờ bạc nợ nần',
    sao: ['Điếu Khách'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 65,
    tomTat: `**Điếu Khách + chính tinh ăn chơi (Đồng / Tham / Âm / Liêm /
Phủ) + Sát tinh (Lục Sát):** càng dễ **DÍNH DÁNG CỜ BẠC, NỢ NẦN**.`,
  },

  {
    id: 'dieu-khach-tai-phu-mau',
    title: 'Điếu Khách tại Phụ Mẫu',
    sao: ['Điếu Khách'],
    cung: ['Phụ Mẫu'],
    doUuTien: 72,
    tomTat: `**Điếu Khách tại Phụ Mẫu:**
- Cha mẹ là người **ĂN CHƠI, PHONG KHOÁNG**
- Bố mẹ **HAY ĐI**
- Quan hệ giữa cha mẹ và con cái **MANG TÍNH XÃ GIAO**, **THIẾU sự gần gũi, thân
  mật**
- Cha mẹ **NHƯ KHÁCH ĐẾN NHÀ**, có khuynh hướng **xa cách**

Vì Điếu Khách cũng là sao **buồn phiền, cờ bạc**:
- Bố mẹ cũng dễ bị **LY TÁN**`,
  },

  {
    id: 'dieu-khach-tai-phu-mau-sat',
    title: 'Điếu Khách + Sát tinh tại Phụ Mẫu - bố mẹ ly tán',
    sao: ['Điếu Khách'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 67,
    tomTat: `**Điếu Khách + Sát tinh (Lục Sát) tại Phụ Mẫu:**
- Mối quan hệ càng dễ **ĐỔ VỠ**
- Bố mẹ **LY TÁN** hoặc **buồn phiền, vướng vào tệ nạn**`,
  },

  {
    id: 'dieu-khach-tai-phu-mau-hoa-ky',
    title: 'Điếu Khách + Hóa Kỵ tại Phụ Mẫu - bố mẹ ly tán',
    sao: ['Điếu Khách'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 67,
    tomTat: `**Điếu Khách + Hóa Kỵ tại Phụ Mẫu:**
- Mối quan hệ càng dễ **ĐỔ VỠ**
- Bố mẹ **LY TÁN** hoặc **buồn phiền, vướng vào tệ nạn**`,
  },

  {
    id: 'dieu-khach-tai-phu-mau-thien-hinh',
    title: 'Điếu Khách + Thiên Hình tại Phụ Mẫu - bố mẹ ly tán',
    sao: ['Điếu Khách'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Thiên Hình'],
    doUuTien: 67,
    tomTat: `**Điếu Khách + Thiên Hình tại Phụ Mẫu:**
- Mối quan hệ càng dễ **ĐỔ VỠ**
- Bố mẹ **LY TÁN** hoặc **buồn phiền, vướng vào tệ nạn**`,
  },

  {
    id: 'dieu-khach-tai-phuc-duc',
    title: 'Điếu Khách tại Phúc Đức',
    sao: ['Điếu Khách'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `**Điếu Khách tại Phúc Đức** (đương số mặc định bị Thái Tuế chiếu chủ thân):

**Tính cách đương số:**
- Có **TÀI ĂN NÓI**
- Tính tình **THẲNG THẮN**, **TÔN TRỌNG SỰ THẬT**
- Là người **DÁM NGHĨ DÁM LÀM**
- Có thể **GÁNH VÁC ĐƯỢC VIỆC LỚN**

**Mặt khó:**
- Trong **TÂM LÝ và SUY NGHĨ** ẩn giấu luôn có những **BẤT MÃN**
- Tinh thần **KHÓ ĐƯỢC YÊN ỔN**

**Dòng họ:**
- Đời trước có người **ĂN CHƠI, CỜ BẠC, NỢ NẦN**
- Trong họ thường có những **TIỆC TÙNG TO LỚN**
- Hoặc phải đi xa để **TÌM KIẾM CƠ HỘI**`,
  },

  {
    id: 'dieu-khach-tai-phuc-duc-dai-hao',
    title: 'Điếu Khách + Đại Hao tại Phúc Đức - liên lụy họ hàng',
    sao: ['Điếu Khách'],
    cung: ['Phúc Đức'],
    ketHop: ['Đại Hao'],
    doUuTien: 70,
    tomTat: `**Điếu Khách + Đại Hao tại Phúc Đức:** đương số dễ **BỊ LIÊN
LỤY** từ họ hàng (đời trước ăn chơi cờ bạc nợ nần).`,
  },

  {
    id: 'dieu-khach-tai-phuc-duc-tieu-hao',
    title: 'Điếu Khách + Tiểu Hao tại Phúc Đức - liên lụy họ hàng',
    sao: ['Điếu Khách'],
    cung: ['Phúc Đức'],
    ketHop: ['Tiểu Hao'],
    doUuTien: 70,
    tomTat: `**Điếu Khách + Tiểu Hao tại Phúc Đức:** đương số dễ **BỊ LIÊN
LỤY** từ họ hàng (đời trước ăn chơi cờ bạc nợ nần).`,
  },

  {
    id: 'dieu-khach-tai-phuc-duc-thien-ma',
    title: 'Điếu Khách + Thiên Mã tại Phúc Đức - liên lụy họ hàng',
    sao: ['Điếu Khách'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Mã'],
    doUuTien: 70,
    tomTat: `**Điếu Khách + Thiên Mã tại Phúc Đức:** đương số dễ **BỊ LIÊN
LỤY** từ họ hàng (đời trước ăn chơi cờ bạc nợ nần).`,
  },

  {
    id: 'dieu-khach-tai-phuc-duc-da-la',
    title: 'Điếu Khách + Đà La tại Phúc Đức - liên lụy họ hàng',
    sao: ['Điếu Khách'],
    cung: ['Phúc Đức'],
    ketHop: ['Đà La'],
    doUuTien: 70,
    tomTat: `**Điếu Khách + Đà La tại Phúc Đức:** đương số dễ **BỊ LIÊN LỤY**
từ họ hàng (đời trước ăn chơi cờ bạc nợ nần).`,
  },

  {
    id: 'dieu-khach-tai-phuc-duc-thien-rieu',
    title: 'Điếu Khách + Thiên Riêu tại Phúc Đức - liên lụy họ hàng',
    sao: ['Điếu Khách'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Riêu'],
    doUuTien: 70,
    tomTat: `**Điếu Khách + Thiên Riêu tại Phúc Đức:** đương số dễ **BỊ LIÊN
LỤY** từ họ hàng (đời trước ăn chơi cờ bạc nợ nần).`,
  },

  {
    id: 'dieu-khach-tai-phuc-duc-hoa-ky',
    title: 'Điếu Khách + Hóa Kỵ tại Phúc Đức - liên lụy họ hàng',
    sao: ['Điếu Khách'],
    cung: ['Phúc Đức'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `**Điếu Khách + Hóa Kỵ tại Phúc Đức:** đương số dễ **BỊ LIÊN LỤY**
từ họ hàng (đời trước ăn chơi cờ bạc nợ nần).`,
  },

  {
    id: 'dieu-khach-tai-phuc-duc-dia-kiep',
    title: 'Điếu Khách + Địa Kiếp tại Phúc Đức - liên lụy họ hàng',
    sao: ['Điếu Khách'],
    cung: ['Phúc Đức'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 70,
    tomTat: `**Điếu Khách + Địa Kiếp tại Phúc Đức:** đương số dễ **BỊ LIÊN
LỤY** từ họ hàng (đời trước ăn chơi cờ bạc nợ nần).`,
  },

  {
    id: 'dieu-khach-tai-dien-trach',
    title: 'Điếu Khách tại Điền Trạch',
    sao: ['Điếu Khách'],
    cung: ['Điền Trạch'],
    doUuTien: 72,
    tomTat: `**Điếu Khách tại Điền Trạch:**
- **NHÀ CỬA ĐẸP**
- Đương số thích **TRANG TRÍ LÀM ĐẸP** cho nhà cửa
- **THAY ĐỔI nhiều chỗ ở**, được đi đến **NHIỀU NƠI**
- Hay **DI CHUYỂN văn phòng, công ty, nhà xưởng**

**Đặc trưng "vẽ rồng vẽ phượng":**
- Chú trọng **TRANG HOÀNG nhà cửa LỘNG LẪY bên ngoài** để khoe với người khác
- "**Vẽ rồng vẽ phượng mà ruột rỗng tuếch**": khiến mọi người nhìn vào thấy
  **GIẢ TẠO**
- **NGƯỠNG MỘ thì ít** mà **BÀN RA TÁN VÀO thì NHIỀU**

Vì mang bản chất **"ĐỘNG"**: Điếu Khách thể hiện chủ mệnh thường phải **chuyển
văn phòng, công ty, nhà ở NHIỀU LẦN trong đời**.`,
  },

  {
    id: 'dieu-khach-tai-quan-loc',
    title: 'Điếu Khách tại Quan Lộc',
    sao: ['Điếu Khách'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `**Điếu Khách tại Quan Lộc:**
- Đương số làm việc trong môi trường **TIỆC TÙNG**
- Có **QUAN KHÁCH tới lui** thường xuyên
- Hoặc các công việc có tính **DỊCH VỤ**

**Mặt khó:**
- Hay phải **ĐI LẠI**
- Hay **THAY ĐỔI CÔNG VIỆC**
- Công việc **KHÔNG THUẬN LỢI**

**Khác biệt xã hội xưa và nay:**
- **Xã hội xưa:** sự bận rộn = **VẤT VẢ**, thuộc tầng lớp **lao động** hoặc dưới
  trướng **người quyền quý**
- **Xã hội hiện đại:** sự bận rộn = **TIỀN TÀI DỄ KIẾM** dù vẫn phải đánh đổi
  sức lực`,
  },

  {
    id: 'dieu-khach-tai-quan-loc-ma-khoc-khach',
    title: 'Điếu Khách + Thiên Mã + Thiên Khốc tại Quan Lộc - Mã Khốc Khách',
    sao: ['Điếu Khách'],
    cung: ['Quan Lộc'],
    ketHop: ['Thiên Mã', 'Thiên Khốc'],
    doUuTien: 73,
    tomTat: `**Điếu Khách + Thiên Mã + Thiên Khốc tại Quan Lộc** (Mã Khốc
Khách):
- Cách **TỐT**
- Công việc gặp **NHIỀU MAY MẮN**
- **DỄ KIẾM TIỀN**
- Công việc có tính **ĐƯA ĐÓN, BẬN RỘN**`,
  },

  {
    id: 'dieu-khach-tai-no-boc',
    title: 'Điếu Khách tại Nô Bộc',
    sao: ['Điếu Khách'],
    cung: ['Nô Bộc'],
    doUuTien: 72,
    tomTat: `**Điếu Khách tại Nô Bộc:** bạn bè là người **ĂN CHƠI, PHÓNG KHOÁNG**.

**Mặt tích cực:**
- Tính chất **CỞI MỞ** giúp dễ **KẾT GIAO**
- **BÀN VIỆC ngay TRÊN BÀN TIỆC**
- Phù hợp với người làm **NGOẠI GIAO, KINH DOANH**

**Mặt tiêu cực:**
- Kéo theo những **MỐI QUAN HỆ TIÊU CỰC**
- **SA ĐÀ vào THÓI XẤU**`,
  },

  {
    id: 'dieu-khach-tai-no-boc-dai-hao',
    title: 'Điếu Khách + Đại Hao tại Nô Bộc - bạn bè mờ ám',
    sao: ['Điếu Khách'],
    cung: ['Nô Bộc'],
    ketHop: ['Đại Hao'],
    doUuTien: 67,
    tomTat: `**Điếu Khách + Đại Hao tại Nô Bộc:** bạn bè **dây dưa, liên đới,
mờ ám** — đương số dễ **BỊ KÉO VÀO** thói hư tật xấu.`,
  },

  {
    id: 'dieu-khach-tai-no-boc-tieu-hao',
    title: 'Điếu Khách + Tiểu Hao tại Nô Bộc - bạn bè mờ ám',
    sao: ['Điếu Khách'],
    cung: ['Nô Bộc'],
    ketHop: ['Tiểu Hao'],
    doUuTien: 67,
    tomTat: `**Điếu Khách + Tiểu Hao tại Nô Bộc:** bạn bè **dây dưa, liên
đới, mờ ám** — đương số dễ **BỊ KÉO VÀO** thói hư tật xấu.`,
  },

  {
    id: 'dieu-khach-tai-no-boc-dia-kiep',
    title: 'Điếu Khách + Địa Kiếp tại Nô Bộc - bạn bè mờ ám',
    sao: ['Điếu Khách'],
    cung: ['Nô Bộc'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 67,
    tomTat: `**Điếu Khách + Địa Kiếp tại Nô Bộc:** bạn bè **dây dưa, liên
đới, mờ ám** — đương số dễ **BỊ KÉO VÀO** thói hư tật xấu.`,
  },

  {
    id: 'dieu-khach-tai-no-boc-da-la',
    title: 'Điếu Khách + Đà La tại Nô Bộc - bạn bè mờ ám',
    sao: ['Điếu Khách'],
    cung: ['Nô Bộc'],
    ketHop: ['Đà La'],
    doUuTien: 67,
    tomTat: `**Điếu Khách + Đà La tại Nô Bộc:** bạn bè **dây dưa, liên đới,
mờ ám** — đương số dễ **BỊ KÉO VÀO** thói hư tật xấu.`,
  },

  {
    id: 'dieu-khach-tai-no-boc-thien-rieu',
    title: 'Điếu Khách + Thiên Riêu tại Nô Bộc - bạn bè mờ ám',
    sao: ['Điếu Khách'],
    cung: ['Nô Bộc'],
    ketHop: ['Thiên Riêu'],
    doUuTien: 67,
    tomTat: `**Điếu Khách + Thiên Riêu tại Nô Bộc:** bạn bè **dây dưa, liên
đới, mờ ám** — đương số dễ **BỊ KÉO VÀO** thói hư tật xấu.`,
  },

  {
    id: 'dieu-khach-tai-no-boc-hoa-ky',
    title: 'Điếu Khách + Hóa Kỵ tại Nô Bộc - bạn bè mờ ám',
    sao: ['Điếu Khách'],
    cung: ['Nô Bộc'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 67,
    tomTat: `**Điếu Khách + Hóa Kỵ tại Nô Bộc:** bạn bè **dây dưa, liên đới,
mờ ám** — đương số dễ **BỊ KÉO VÀO** thói hư tật xấu.`,
  },

  {
    id: 'dieu-khach-tai-thien-di',
    title: 'Điếu Khách tại Thiên Di - xuất ngoại lập nghiệp',
    sao: ['Điếu Khách'],
    cung: ['Thiên Di'],
    doUuTien: 78,
    tomTat: `**Điếu Khách tại Thiên Di** (cấu trúc tam hợp tạo phối với Thiên Mã):

**Đặc trưng:**
- Họ hàng nhiều người **LY TÔNG TỔ NGHIỆP**, **LẬP NGHIỆP PHƯƠNG XA**
- Đương số dễ có số **XUẤT NGOẠI**
- Ra ngoài **NGOẠI GIAO TỐT**, có **TÀI ĂN NÓI**
- Ra ngoài hay **ĂN UỐNG TIỆC TÙNG**

(Xem entry chuyên biệt cho nam mệnh, sao động mạnh, cách ngoại giao.)`,
  },

  {
    id: 'dieu-khach-tai-thien-di-thai-duong',
    title: 'Điếu Khách + Thái Dương tại Thiên Di',
    sao: ['Điếu Khách'],
    cung: ['Thiên Di'],
    ketHop: ['Thái Dương'],
    doUuTien: 73,
    tomTat: `**Điếu Khách + Thái Dương tại Thiên Di** (sao "động" mạnh):
càng có xu hướng **XUẤT NGOẠI**.`,
  },

  {
    id: 'dieu-khach-tai-thien-di-vu-khuc',
    title: 'Điếu Khách + Vũ Khúc tại Thiên Di',
    sao: ['Điếu Khách'],
    cung: ['Thiên Di'],
    ketHop: ['Vũ Khúc'],
    doUuTien: 73,
    tomTat: `**Điếu Khách + Vũ Khúc tại Thiên Di** (sao "động" mạnh): càng
có xu hướng **XUẤT NGOẠI**.`,
  },

  {
    id: 'dieu-khach-tai-thien-di-cu-mon',
    title: 'Điếu Khách + Cự Môn tại Thiên Di',
    sao: ['Điếu Khách'],
    cung: ['Thiên Di'],
    ketHop: ['Cự Môn'],
    doUuTien: 73,
    tomTat: `**Điếu Khách + Cự Môn tại Thiên Di** (sao "động" mạnh): càng
có xu hướng **XUẤT NGOẠI**.`,
  },

  {
    id: 'dieu-khach-tai-thien-di-hoa-tinh',
    title: 'Điếu Khách + Hỏa Tinh tại Thiên Di',
    sao: ['Điếu Khách'],
    cung: ['Thiên Di'],
    ketHop: ['Hỏa Tinh'],
    doUuTien: 73,
    tomTat: `**Điếu Khách + Hỏa Tinh tại Thiên Di** (sao "động" mạnh): càng
có xu hướng **XUẤT NGOẠI**.`,
  },

  {
    id: 'dieu-khach-tai-thien-di-luu-ha',
    title: 'Điếu Khách + Lưu Hà tại Thiên Di - cách đẹp ngoại giao',
    sao: ['Điếu Khách'],
    cung: ['Thiên Di'],
    ketHop: ['Lưu Hà'],
    doUuTien: 73,
    tomTat: `**Điếu Khách + Lưu Hà tại Thiên Di** = cách đẹp ngoại giao:
việc **KÝ KẾT HỢP TÁC** thường xảy ra trong những lần đi giao lưu với đối tác —
phù hợp với công việc **NGOẠI GIAO**.`,
  },

  {
    id: 'dieu-khach-tai-thien-di-quoc-an',
    title: 'Điếu Khách + Quốc Ấn tại Thiên Di - cách đẹp ngoại giao',
    sao: ['Điếu Khách'],
    cung: ['Thiên Di'],
    ketHop: ['Quốc Ấn'],
    doUuTien: 73,
    tomTat: `**Điếu Khách + Quốc Ấn tại Thiên Di** = cách đẹp ngoại giao:
việc **KÝ KẾT HỢP TÁC** thường xảy ra trong những lần đi giao lưu với đối tác —
phù hợp với công việc **NGOẠI GIAO**.`,
  },

  {
    id: 'dieu-khach-tai-thien-di-hoa-loc',
    title: 'Điếu Khách + Hóa Lộc tại Thiên Di - cách đẹp ngoại giao',
    sao: ['Điếu Khách'],
    cung: ['Thiên Di'],
    ketHop: ['Hóa Lộc'],
    doUuTien: 73,
    tomTat: `**Điếu Khách + Hóa Lộc tại Thiên Di** = cách đẹp ngoại giao:
việc **KÝ KẾT HỢP TÁC** thường xảy ra trong những lần đi giao lưu với đối tác —
phù hợp với công việc **NGOẠI GIAO**.`,
  },

  {
    id: 'dieu-khach-tai-thien-di-tham-lang',
    title: 'Điếu Khách + Tham Lang tại Thiên Di - cách đẹp ngoại giao',
    sao: ['Điếu Khách'],
    cung: ['Thiên Di'],
    ketHop: ['Tham Lang'],
    doUuTien: 73,
    tomTat: `**Điếu Khách + Tham Lang tại Thiên Di** = cách đẹp ngoại giao:
việc **KÝ KẾT HỢP TÁC** thường xảy ra trong những lần đi giao lưu với đối tác —
phù hợp với công việc **NGOẠI GIAO**.`,
  },

  {
    id: 'dieu-khach-tai-thien-di-nam-menh',
    title: 'Điếu Khách tại Thiên Di - Nam mệnh',
    sao: ['Điếu Khách'],
    cung: ['Thiên Di'],
    gioiTinh: 'Nam',
    doUuTien: 70,
    tomTat: `**Điếu Khách tại Thiên Di - Nam mệnh:**

Vì bản chất **"LÀM KHÁCH"**: ra ngoài **ĂN UỐNG TIỆC TÙNG** sẽ **GIẢM SỰ
QUAN TÂM gia đình**:
- Ảnh hưởng xấu đến **TÌNH DUYÊN, GIA ĐẠO**`,
  },

  {
    id: 'dieu-khach-tai-tat-ach',
    title: 'Điếu Khách tại Tật Ách - nghiệp hưởng thụ',
    sao: ['Điếu Khách'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `**Điếu Khách tại Tật Ách** phản ánh **"NGHIỆP" nhiều hơn BỆNH TẬT**.

**Đặc trưng tâm lý:**
- Bệnh về **TÂM LÝ**
- Nếu đã rơi vào **VÒNG XOÁY ĐAM MÊ tiêu tiền** hay sự **XA HOA** thì **KHÓ BỎ**
- Giống như người bị "**BÙA MÊ THUỐC LÚ**" mà không dứt ra được

**Đặc trưng tài chính:**
- Hay phải **CHI TIỀN BẤT NGỜ**
- Có nhiều **ĐAM MÊ THÚ VUI TỐN TIỀN**, **đã mê là KHÓ BỎ**
- **THOÁNG TÍNH**, thích **ĂN NGON MẶC ĐẸP**
- **Có nhiều tiêu nhiều, có ít tiêu ít**, **KHÓ GIỮ TIỀN BẠC**

**Nghiệp HƯỞNG THỤ:**
Đây cũng là **NGHIỆP QUẢ** của bại tinh này — chỉ nhìn vào **CÁI TRƯỚC MẮT** mà
**không toan tính lâu dài**.

Vì vậy, khi rơi vào cảnh **KHÓ KHĂN**:
- Người khác vất vả một
- Đương số **VẤT VẢ MƯỜI**`,
  },

  {
    id: 'dieu-khach-tai-tai-bach',
    title: 'Điếu Khách tại Tài Bạch',
    sao: ['Điếu Khách'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `**Điếu Khách tại Tài Bạch:**
- Đương số hay **LO NGHĨ**
- Đồng tiền **TỤ TÁN** (không tụ tán thất thường nhưng "**tiền như vật ngoài
  thân**")
- Trong công việc luôn phải **CỐ GẮNG**, hay gặp **NGƯỜI PHÁ BÌNH**
- Chi tiêu **KHÓ GIỮ LẠI VỀ MÌNH**

**Đặc trưng:**
Cổ nhân nói "**Đồng tiền đi liền khúc ruột**", ngôi sao này thì chẳng khác nào
"**DỐC HẾT RUỘT GAN cho người khác**".

**Nghề phù hợp:**
- **MỞ NHÀ HÀNG, THỰC PHẨM**
- **PHỤC VỤ ĂN UỐNG**
- **KINH DOANH TANG LỄ** (vì Điếu = văn điếu)`,
  },

  {
    id: 'dieu-khach-tai-tai-bach-thien-khoi',
    title: 'Điếu Khách + Thiên Khôi tại Tài Bạch - làm chủ',
    sao: ['Điếu Khách'],
    cung: ['Tài Bạch'],
    ketHop: ['Thiên Khôi'],
    doUuTien: 70,
    tomTat: `**Điếu Khách + Thiên Khôi tại Tài Bạch:** đương số có khả năng
**LÀM CHỦ**.`,
  },

  {
    id: 'dieu-khach-tai-tai-bach-thien-viet',
    title: 'Điếu Khách + Thiên Việt tại Tài Bạch - làm chủ',
    sao: ['Điếu Khách'],
    cung: ['Tài Bạch'],
    ketHop: ['Thiên Việt'],
    doUuTien: 70,
    tomTat: `**Điếu Khách + Thiên Việt tại Tài Bạch:** đương số có khả năng
**LÀM CHỦ**.`,
  },

  {
    id: 'dieu-khach-tai-tai-bach-hoa-quyen',
    title: 'Điếu Khách + Hóa Quyền tại Tài Bạch - làm chủ',
    sao: ['Điếu Khách'],
    cung: ['Tài Bạch'],
    ketHop: ['Hóa Quyền'],
    doUuTien: 70,
    tomTat: `**Điếu Khách + Hóa Quyền tại Tài Bạch:** đương số có khả năng
**LÀM CHỦ**.`,
  },

  {
    id: 'dieu-khach-tai-tai-bach-ta-phu',
    title: 'Điếu Khách + Tả Phù tại Tài Bạch - làm chủ',
    sao: ['Điếu Khách'],
    cung: ['Tài Bạch'],
    ketHop: ['Tả Phù'],
    doUuTien: 70,
    tomTat: `**Điếu Khách + Tả Phù tại Tài Bạch:** đương số có khả năng **LÀM
CHỦ**.`,
  },

  {
    id: 'dieu-khach-tai-tai-bach-huu-bat',
    title: 'Điếu Khách + Hữu Bật tại Tài Bạch - làm chủ',
    sao: ['Điếu Khách'],
    cung: ['Tài Bạch'],
    ketHop: ['Hữu Bật'],
    doUuTien: 70,
    tomTat: `**Điếu Khách + Hữu Bật tại Tài Bạch:** đương số có khả năng
**LÀM CHỦ**.`,
  },

  {
    id: 'dieu-khach-tai-tai-bach-dia-kiep',
    title: 'Điếu Khách + Địa Kiếp tại Tài Bạch - cờ bạc xa hoa',
    sao: ['Điếu Khách'],
    cung: ['Tài Bạch'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 70,
    tomTat: `**Điếu Khách + Địa Kiếp tại Tài Bạch:**
- Dễ **ĐAM MÊ CỜ BẠC**
- Hoặc dùng nhiều tiền để **PHỤC VỤ NHU CẦU XA HOA của bản thân**`,
  },

  {
    id: 'dieu-khach-tai-tai-bach-phuc-binh',
    title: 'Điếu Khách + Phục Binh tại Tài Bạch - cờ bạc xa hoa',
    sao: ['Điếu Khách'],
    cung: ['Tài Bạch'],
    ketHop: ['Phục Binh'],
    doUuTien: 70,
    tomTat: `**Điếu Khách + Phục Binh tại Tài Bạch:**
- Dễ **ĐAM MÊ CỜ BẠC**
- Hoặc dùng nhiều tiền để **PHỤC VỤ NHU CẦU XA HOA của bản thân**`,
  },

  {
    id: 'dieu-khach-tai-tai-bach-dai-hao',
    title: 'Điếu Khách + Đại Hao tại Tài Bạch - cờ bạc xa hoa',
    sao: ['Điếu Khách'],
    cung: ['Tài Bạch'],
    ketHop: ['Đại Hao'],
    doUuTien: 70,
    tomTat: `**Điếu Khách + Đại Hao tại Tài Bạch:**
- Dễ **ĐAM MÊ CỜ BẠC**
- Hoặc dùng nhiều tiền để **PHỤC VỤ NHU CẦU XA HOA của bản thân**`,
  },

  {
    id: 'dieu-khach-tai-tai-bach-tieu-hao',
    title: 'Điếu Khách + Tiểu Hao tại Tài Bạch - cờ bạc xa hoa',
    sao: ['Điếu Khách'],
    cung: ['Tài Bạch'],
    ketHop: ['Tiểu Hao'],
    doUuTien: 70,
    tomTat: `**Điếu Khách + Tiểu Hao tại Tài Bạch:**
- Dễ **ĐAM MÊ CỜ BẠC**
- Hoặc dùng nhiều tiền để **PHỤC VỤ NHU CẦU XA HOA của bản thân**`,
  },

  {
    id: 'dieu-khach-tai-tai-bach-da-la',
    title: 'Điếu Khách + Đà La tại Tài Bạch - cờ bạc xa hoa',
    sao: ['Điếu Khách'],
    cung: ['Tài Bạch'],
    ketHop: ['Đà La'],
    doUuTien: 70,
    tomTat: `**Điếu Khách + Đà La tại Tài Bạch:**
- Dễ **ĐAM MÊ CỜ BẠC**
- Hoặc dùng nhiều tiền để **PHỤC VỤ NHU CẦU XA HOA của bản thân**`,
  },

  {
    id: 'dieu-khach-tai-tai-bach-kinh-duong',
    title: 'Điếu Khách + Kình Dương tại Tài Bạch - cờ bạc xa hoa',
    sao: ['Điếu Khách'],
    cung: ['Tài Bạch'],
    ketHop: ['Kình Dương'],
    doUuTien: 70,
    tomTat: `**Điếu Khách + Kình Dương tại Tài Bạch:**
- Dễ **ĐAM MÊ CỜ BẠC**
- Hoặc dùng nhiều tiền để **PHỤC VỤ NHU CẦU XA HOA của bản thân**`,
  },

  {
    id: 'dieu-khach-tai-tu-tuc',
    title: 'Điếu Khách tại Tử Tức - con du học',
    sao: ['Điếu Khách'],
    cung: ['Tử Tức'],
    doUuTien: 72,
    tomTat: `**Điếu Khách tại Tử Tức:**
- Con cái **CÓ PHẦN ĂN CHƠI**
- Con cái hay **ĐI HỌC Ở XA NHÀ**
- **THÔNG MINH, HOẠT NGÔN**
- Có **NHIỀU TÀI LẺ**
- Con dễ **ĐI DU HỌC NƯỚC NGOÀI**

**Mặt khó:**
- Tâm hướng **ra ngoài**: **TRƯỞNG THÀNH SỚM**
- Bố mẹ dễ **PHIỀN LỤY LO LẮNG** con cái bị **CÁI XẤU LÔI KÉO**
- Mối quan hệ thiếu **THÂN MẬT**`,
  },

  {
    id: 'dieu-khach-tai-tu-tuc-sat-tinh',
    title: 'Điếu Khách + Sát tinh tại Tử Tức - con khó nuôi',
    sao: ['Điếu Khách'],
    cung: ['Tử Tức'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 67,
    tomTat: `**Điếu Khách + Sát tinh (Lục Sát) tại Tử Tức:**
- Con cái **NUÔI NẤNG KHÓ KHĂN**
- **TỐN KÉM tiền bạc**`,
  },

  {
    id: 'dieu-khach-tai-phu-the',
    title: 'Điếu Khách tại Phu Thê',
    sao: ['Điếu Khách'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `**Điếu Khách tại Phu Thê:** ngôi sao Hỏa **không hợp** cung này: mối quan
hệ vợ chồng **XA CÁCH, THIẾU TÌNH CẢM**.

**Tính cách đương số:**
- **CHÍNH TRỰC, THẲNG THẮN**
- Quan điểm đúng sai **RÕ RÀNG**
- Có **Ý CHÍ và NGHỊ LỰC**, **BẢN LĨNH, KIÊN TRÌ, BỀN BỈ**
- **TỰ LẬP**, có chút **NGANG TÀNG và BẢO THỦ**

**Người hôn phối:**
- **VUI VẺ, HÒA ĐỒNG, HOẠT BÁT**
- **KIẾM TIỀN GIỎI**, giỏi **XOAY XỞ ĐỒNG TIỀN**
- **TIÊU TIỀN PHÓNG KHOÁNG**
- Có **TÀI ĂN NÓI**, **HAM VUI HAM CHƠI**`,
  },

  {
    id: 'dieu-khach-tai-phu-the-dia-kiep',
    title: 'Điếu Khách + Địa Kiếp tại Phu Thê - bị đào tiền',
    sao: ['Điếu Khách'],
    cung: ['Phu Thê'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 70,
    tomTat: `**Điếu Khách + Địa Kiếp tại Phu Thê** (kèm Lộc ở vị trí bổ trợ):
sẽ thành tình huống người bạn đời nhìn mình như "**MỎ VÀNG**": bị đào tiền.`,
  },

  {
    id: 'dieu-khach-tai-phu-the-da-la',
    title: 'Điếu Khách + Đà La tại Phu Thê - bị đào tiền',
    sao: ['Điếu Khách'],
    cung: ['Phu Thê'],
    ketHop: ['Đà La'],
    doUuTien: 70,
    tomTat: `**Điếu Khách + Đà La tại Phu Thê** (kèm Lộc ở vị trí bổ trợ):
sẽ thành tình huống người bạn đời nhìn mình như "**MỎ VÀNG**": bị đào tiền.`,
  },

  {
    id: 'dieu-khach-tai-phu-the-thien-rieu',
    title: 'Điếu Khách + Thiên Riêu tại Phu Thê - bị đào tiền',
    sao: ['Điếu Khách'],
    cung: ['Phu Thê'],
    ketHop: ['Thiên Riêu'],
    doUuTien: 70,
    tomTat: `**Điếu Khách + Thiên Riêu tại Phu Thê** (kèm Lộc ở vị trí bổ
trợ): sẽ thành tình huống người bạn đời nhìn mình như "**MỎ VÀNG**": bị đào
tiền.`,
  },

  {
    id: 'dieu-khach-tai-phu-the-hoa-ky',
    title: 'Điếu Khách + Hóa Kỵ tại Phu Thê - bị đào tiền',
    sao: ['Điếu Khách'],
    cung: ['Phu Thê'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `**Điếu Khách + Hóa Kỵ tại Phu Thê** (kèm Lộc ở vị trí bổ trợ):
sẽ thành tình huống người bạn đời nhìn mình như "**MỎ VÀNG**": bị đào tiền.`,
  },

  {
    id: 'dieu-khach-tai-phu-the-xuong-khuc-ta-huu',
    title: 'Điếu Khách + Văn Xương + Văn Khúc + Tả Phù + Hữu Bật tại Phu Thê - tương kính như tân',
    sao: ['Điếu Khách'],
    cung: ['Phu Thê'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Tả Phù', 'Hữu Bật'],
    doUuTien: 70,
    tomTat: `**Điếu Khách + Văn Xương + Văn Khúc + Tả Phù + Hữu Bật tại Phu
Thê** (đắc cách):
- Mối quan hệ **ỔN ĐỊNH**
- Vợ chồng dù sau thời gian dài chung sống vẫn "**TƯƠNG KÍNH NHƯ TÂN**"
- Chuyển hóa thành **LỊCH SỰ, GIỮ KHOẢNG CÁCH**`,
  },

  {
    id: 'dieu-khach-tai-huynh-de',
    title: 'Điếu Khách tại Huynh Đệ',
    sao: ['Điếu Khách'],
    cung: ['Huynh Đệ'],
    doUuTien: 70,
    tomTat: `**Điếu Khách tại Huynh Đệ:**
- Anh em có người **ĂN CHƠI, CHI TIÊU RỘNG RÃI**
- Cũng có anh em phải **CHI TIỀN NHIỀU** cho việc **ỐM ĐAU**
- Mối quan hệ **KÉM THÂN THIẾT**, nhiều sự **KHÁCH KHÍ, XÃ GIAO**`,
  },

  {
    id: 'dieu-khach-tai-huynh-de-dai-hao',
    title: 'Điếu Khách + Đại Hao tại Huynh Đệ - kéo vào thói hư',
    sao: ['Điếu Khách'],
    cung: ['Huynh Đệ'],
    ketHop: ['Đại Hao'],
    doUuTien: 65,
    tomTat: `**Điếu Khách + Đại Hao tại Huynh Đệ:** anh em chị em trong nhà
có xu hướng **KÉO ĐƯƠNG SỐ vào THÓI HƯ TẬT XẤU**.`,
  },

  {
    id: 'dieu-khach-tai-huynh-de-tieu-hao',
    title: 'Điếu Khách + Tiểu Hao tại Huynh Đệ - kéo vào thói hư',
    sao: ['Điếu Khách'],
    cung: ['Huynh Đệ'],
    ketHop: ['Tiểu Hao'],
    doUuTien: 65,
    tomTat: `**Điếu Khách + Tiểu Hao tại Huynh Đệ:** anh em chị em trong nhà
có xu hướng **KÉO ĐƯƠNG SỐ vào THÓI HƯ TẬT XẤU**.`,
  },

  {
    id: 'dieu-khach-tai-huynh-de-dia-kiep',
    title: 'Điếu Khách + Địa Kiếp tại Huynh Đệ - kéo vào thói hư',
    sao: ['Điếu Khách'],
    cung: ['Huynh Đệ'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 65,
    tomTat: `**Điếu Khách + Địa Kiếp tại Huynh Đệ:** anh em chị em trong nhà
có xu hướng **KÉO ĐƯƠNG SỐ vào THÓI HƯ TẬT XẤU**.`,
  },

  {
    id: 'dieu-khach-tai-huynh-de-da-la',
    title: 'Điếu Khách + Đà La tại Huynh Đệ - kéo vào thói hư',
    sao: ['Điếu Khách'],
    cung: ['Huynh Đệ'],
    ketHop: ['Đà La'],
    doUuTien: 65,
    tomTat: `**Điếu Khách + Đà La tại Huynh Đệ:** anh em chị em trong nhà có
xu hướng **KÉO ĐƯƠNG SỐ vào THÓI HƯ TẬT XẤU**.`,
  },

  {
    id: 'dieu-khach-tai-huynh-de-thien-rieu',
    title: 'Điếu Khách + Thiên Riêu tại Huynh Đệ - kéo vào thói hư',
    sao: ['Điếu Khách'],
    cung: ['Huynh Đệ'],
    ketHop: ['Thiên Riêu'],
    doUuTien: 65,
    tomTat: `**Điếu Khách + Thiên Riêu tại Huynh Đệ:** anh em chị em trong
nhà có xu hướng **KÉO ĐƯƠNG SỐ vào THÓI HƯ TẬT XẤU**.`,
  },

  {
    id: 'dieu-khach-tai-huynh-de-hoa-ky',
    title: 'Điếu Khách + Hóa Kỵ tại Huynh Đệ - kéo vào thói hư',
    sao: ['Điếu Khách'],
    cung: ['Huynh Đệ'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 65,
    tomTat: `**Điếu Khách + Hóa Kỵ tại Huynh Đệ:** anh em chị em trong nhà
có xu hướng **KÉO ĐƯƠNG SỐ vào THÓI HƯ TẬT XẤU**.`,
  },

  {
    id: 'dieu-khach-tai-huynh-de-van-xuong',
    title: 'Điếu Khách + Văn Xương tại Huynh Đệ - hưởng tiếng thơm',
    sao: ['Điếu Khách'],
    cung: ['Huynh Đệ'],
    ketHop: ['Văn Xương'],
    doUuTien: 65,
    tomTat: `**Điếu Khách + Văn Xương (sao khoa bảng) tại Huynh Đệ:** chủ
mệnh được **HƯỞNG TIẾNG THƠM** từ anh chị em.`,
  },

  {
    id: 'dieu-khach-tai-huynh-de-van-khuc',
    title: 'Điếu Khách + Văn Khúc tại Huynh Đệ - hưởng tiếng thơm',
    sao: ['Điếu Khách'],
    cung: ['Huynh Đệ'],
    ketHop: ['Văn Khúc'],
    doUuTien: 65,
    tomTat: `**Điếu Khách + Văn Khúc (sao khoa bảng) tại Huynh Đệ:** chủ
mệnh được **HƯỞNG TIẾNG THƠM** từ anh chị em.`,
  },

  {
    id: 'dieu-khach-tai-huynh-de-hoa-khoa',
    title: 'Điếu Khách + Hóa Khoa tại Huynh Đệ - hưởng tiếng thơm',
    sao: ['Điếu Khách'],
    cung: ['Huynh Đệ'],
    ketHop: ['Hóa Khoa'],
    doUuTien: 65,
    tomTat: `**Điếu Khách + Hóa Khoa (sao khoa bảng) tại Huynh Đệ:** chủ
mệnh được **HƯỞNG TIẾNG THƠM** từ anh chị em.`,
  },

  {
    id: 'dieu-khach-tai-huynh-de-phong-cao',
    title: 'Điếu Khách + Phong Cáo tại Huynh Đệ - hưởng tiếng thơm',
    sao: ['Điếu Khách'],
    cung: ['Huynh Đệ'],
    ketHop: ['Phong Cáo'],
    doUuTien: 65,
    tomTat: `**Điếu Khách + Phong Cáo (sao khoa bảng) tại Huynh Đệ:** chủ
mệnh được **HƯỞNG TIẾNG THƠM** từ anh chị em.`,
  },

  {
    id: 'dieu-khach-co-bac-no-nan',
    title: 'Điếu Khách + Đà La + Địa Kiếp - cờ bạc nợ nần',
    sao: ['Điếu Khách'],
    ketHop: ['Đà La', 'Địa Kiếp'],
    doUuTien: 65,
    tomTat: `**Điếu Khách + Đà La + Địa Kiếp** (+ Hỏa Tinh / Đại Hao / Hóa Kỵ + chính
tinh dễ kích động như Thiên Cơ / Cự Môn):

**Đặc trưng:**
- Hình thành xu hướng **DÍNH DÁNG CỜ BẠC NỢ NẦN**
- Tâm lý **ĐỐ KỴ với người khác**
- **NGHIỆN cảm giác KÍCH THÍCH** khi chiến thắng
- Tạo thành **VÒNG LẶP NỢ NẦN, KHÓ THOÁT RA**

- Cách cục **CỰC NGUY HIỂM** — cần đặc biệt thận trọng vào hạn.`,
  },

  {
    id: 'dieu-khach-co-bac-no-nan-tuan-khong',
    title: 'Điếu Khách + Đà La + Địa Kiếp + Tuần Không - càng kẹt vòng lặp',
    sao: ['Điếu Khách'],
    ketHop: ['Đà La', 'Địa Kiếp', 'Tuần'],
    doUuTien: 60,
    tomTat: `**Điếu Khách + Đà La + Địa Kiếp + Tuần (Tuần Không):** càng kẹt
trong vòng lặp cờ bạc nợ nần, **KHÓ THOÁT RA**.`,
  },

  {
    id: 'dieu-khach-kiep-kinh-hoa-tang',
    title: 'Điếu Khách + Kiếp + Kình + Hỏa - tang thương',
    sao: ['Điếu Khách'],
    ketHop: ['Địa Kiếp', 'Kình Dương', 'Hỏa Tinh'],
    doUuTien: 65,
    tomTat: `**Điếu Khách + Địa Kiếp + Kình Dương + Hỏa Tinh** (cấu trúc tang thương):

**Cơ sở triết tự:** "**Điếu**" trong **VĂN ĐIẾU** = lời **buồn thương, chia
buồn**.

Khi tổ hợp này nhập hạn vào các cung **lục thân**:
- Sẽ thúc đẩy **TAI NẠN** hoặc **VẤN ĐỀ TANG THƯƠNG**
- Gây **PHIỀN LỤY** cho đương số
- Gia đình gặp **TANG TÓC**

(Xem entry chuyên biệt theo cung Phụ Mẫu / Phu Thê / Tử Tức / Huynh Đệ.)`,
  },

  {
    id: 'dieu-khach-kiep-kinh-hoa-luc-than-tang',
    title: 'Điếu Khách + Kiếp + Kình + Hỏa tại Lục Thân - Tang thương',
    sao: ['Điếu Khách'],
    cung: ['Phụ Mẫu', 'Phu Thê', 'Tử Tức', 'Huynh Đệ'],
    ketHop: ['Địa Kiếp', 'Kình Dương', 'Hỏa Tinh'],
    doUuTien: 60,
    tomTat: `**Điếu Khách + Địa Kiếp + Kình Dương + Hỏa Tinh tại các cung lục thân**
(Phụ Mẫu / Phu Thê / Tử Tức / Huynh Đệ):

- Hạn này thúc đẩy **TAI NẠN** hoặc **VẤN ĐỀ TANG THƯƠNG** với người thân
  thuộc cung tương ứng
- Gây **PHIỀN LỤY** cho đương số
- Gia đình gặp **TANG TÓC**`,
  },

  {
    id: 'dieu-khach-kinh-hinh-tai-nan',
    title: 'Điếu Khách + Kình Dương + Thiên Hình - tai nạn đi xa',
    sao: ['Điếu Khách'],
    ketHop: ['Kình Dương', 'Thiên Hình'],
    doUuTien: 65,
    tomTat: `**Điếu Khách + Kình Dương + Thiên Hình:**

Là sao có tính **PHƯƠNG XA**: khi nhập hạn **đi xa**:
- Đương số dễ gặp **TAI NẠN BẤT NGỜ**
- Hoặc dễ bị **NGƯỜI LẠ MẶT TIẾP CẬN** với **Ý ĐỒ XẤU**

**Lời khuyên hạn:**
- Cẩn trọng khi **ĐI XA**
- Tránh **TIẾP XÚC NGƯỜI LẠ** không rõ nguồn gốc
- **CHỌN NGÀY GIỜ TỐT** để xuất hành`,
  },

  {
    id: 'dieu-khach-loi-khuyen',
    title: 'Lời khuyên cho người Điếu Khách',
    sao: ['Điếu Khách'],
    doUuTien: 35,
    tomTat: `**Điếu Khách vừa có thể mang lại SỰ KHÉO LÉO trong giao tiếp**, vừa dễ đẩy
con người vào **VÒNG XOÁY của PHÙ HOA, HƯỞNG LẠC**.

**Sức mạnh:**
- **TÀI ĂN NÓI, GIAO TIẾP GIỎI**
- **PHONG KHOÁNG, COI MỞ**
- Có thể có cách **MÃ KHỐC KHÁCH** (Ngựa rung chuông vàng) - nghị lực vượt khó

**Yếu điểm:**
- **ĂN CHƠI**, dễ sa vào **CỜ BẠC**
- **NÓI PHÉT, KHOÁC LÁC**
- **TIỀN BẠC khó giữ**
- Mối quan hệ thiếu **chiều sâu**, mang tính **xã giao**

**3 cách HÓA GIẢI Điếu Khách:**
1. **Mã Khốc Khách:** kết hợp Thiên Mã + Thiên Khốc: biến nỗi buồn thành nghị
   lực
2. **Tý/Ngọ/Mão/Dậu + Cô Quả:** đồng cung Quả Tú: tự lập, chuyên môn giỏi
3. **Văn Xương + Văn Khúc:** học hành chăm chỉ, mải mê kiếm tiền không cờ bạc

**Bí quyết phát huy Điếu Khách:**
- **TIẾT CHẾ CHI TIÊU** — tránh mua sắm phù phiếm
- **TRÁNH CỜ BẠC, ĐỎ ĐEN** — đó là vực thẳm
- **DÙNG TÀI ĂN NÓI** vào **CÔNG VIỆC** (ngoại giao, kinh doanh) thay vì "chém
  gió"
- **BIẾN PHIÊU LƯU thành HỌC TẬP** — đi xa để học hỏi, không chỉ ăn chơi
- **GIỮ MỐI QUAN HỆ chiều sâu** với gia đình, không chỉ xã giao bên ngoài

- Khi biết hóa giải đúng cách, Điếu Khách trở thành **DOANH NHÂN GIỎI NGOẠI
GIAO**, **KÝ KẾT HỢP ĐỒNG TRÊN BÀN TIỆC** — biến **bại tinh thành quý tinh**.`,
  },
];
