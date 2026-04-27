import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO CỰ MÔN
 */
export const luanGiai_CuMon: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung của sao Cự Môn (hiện ở mọi cung có Cự Môn)
  // ============================================================
  {
    id: 'cu-mon-tinh-chat-chung',
    title: 'Cự Môn - Đặc tính chung',
    sao: ['Cự Môn'],
    doUuTien: 30,
    tomTat: `**Cự Môn** thuộc chòm Nam Đẩu Tinh, ngũ hành **Thủy** tính **Âm**.
Hóa khí là **sao Thị Phi**. Tính chất "chảy ngầm" — thường mang nhiều phiền toái
và thị phi cho người có sao này tại các cung quan trọng.

**Vị trí miếu hãm:**
- **Miếu địa:** Mão, Dậu (đồng cung Thiên Cơ) — tốt nhất
- **Vượng địa:** các cung còn lại
- **Đắc địa:** Tý, Ngọ, Hợi
- **Hãm địa:** Thìn, Tuất, Sửu, Mùi — xấu nhất`,

    chiTiet: `## So sánh với các sao khác

**Cự Môn vs Tham Lang vs Thiên Cơ:** cả ba đều thuộc kiểu giao tiếp hướng ngoại
nhưng tính chất khác biệt:
- **Tham Lang:** đa tài đa nghệ, giao tiếp thiên về lãng mạn (tửu, sắc, tài, khí)
- **Thiên Cơ:** giao tiếp thiên về liên lạc, vì người mà bôn tẩu vất vả
- **Cự Môn:** dùng "miệng" là chính, thiên về diễn giảng biện thuyết đúng sai

**Cự Môn vs Văn Khúc:** cả hai đều thiên về tài biện luận:
- **Văn Khúc:** kỹ xảo biện luận, chú trọng tu từ, mang hàm nghĩa "tài" và "đào hoa"
- **Cự Môn:** chú trọng thực tế, gồm phân tích và liên tưởng, "tài khí" tương đối ít

## Khí hóa "Ám"

Khí hóa của Cự Môn là **ám** — trong bóng tối có thể thấy được ánh sáng bên ngoài.
Cự Môn có khả năng quan sát sự vật thấu đáo hơn người.`,
  },

  // ============================================================
  // 2. Cự Môn tại Mệnh - dung mạo & tính cách
  // ============================================================
  {
    id: 'cu-mon-tai-menh-dung-mao-tinh-cach',
    title: 'Cự Môn tại Mệnh - Dung mạo & tính cách',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    doUuTien: 85,
    tomTat: `Người có **Cự Môn cư Mệnh** thường ánh mắt nhìn đoan chính, vẻ mặt
nghiêm túc, giọng nói cao thanh, hành động nhanh nhẹn. **Nhập miếu** thì cơ thể
cao đậm, nhìn vẻ ngoài phúc hậu lương thiện; **lạc hãm** thân thể cao gầy.

Tính cách: ngay thẳng bộc trực, đa nghi, học nhiều nhưng ít tinh thông. Có khả
năng nghiên cứu, hiểu biết rộng, biện luận sắc sảo. Thường lấy công việc là mục
đích hàng đầu, ít thiên về thú vui.`,

    chiTiet: `## Tính cách chi tiết

Có khuôn mặt thánh thiện khả ái, cũng có vẻ mặt hiền lành ít nói. **Lục thân thiếu
hòa hợp**, là người chủ quan và tự tin, thường hay tỏ thái độ bất mãn với hiện
tại nên thích gây chuyện thị phi. Lúc thiện lúc ác thường không biểu hiện ra ngoài.

Học nhiều nhưng ít tinh thông, phong cách làm việc thường tỏ ra khó khăn vất vả
nên khó có được sự thanh nhàn thảnh thơi.

Tính tình đa nghi, **kết bạn ban đầu thì tốt nhưng cuối cùng lại ác**. Tư duy
lãnh đạm, trong lòng nhỏ nhen, hiếm khi rộng lượng. Làm việc lớn thường quá chú
trọng tới hình thức mà bỏ qua khả năng phân tích, quan sát, phán đoán, ghi nhớ
và liên tưởng.

Tuy nhiên, là người **giàu khả năng nghiên cứu**, nên thường có tầm hiểu biết
rộng, có sáng kiến. Dù không giao tiếp nhưng khả năng biểu đạt rất tốt, biện
luận sắc sảo. Có xu hướng sống cuộc đời thanh bạch, lấy công việc là mục đích
hàng đầu.`,
  },

  // ============================================================
  // 3. Cự Môn tại Mệnh - 12 biểu hiện đặc trưng
  // ============================================================
  {
    id: 'cu-mon-tai-menh-12-bieu-hien',
    title: 'Cự Môn tại Mệnh - 12 biểu hiện',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    doUuTien: 70,
    tomTat: `Cự Môn ở Mệnh thường có 12 biểu hiện đặc trưng — bao gồm khả năng
tháo gỡ khó khăn, khoan dung độ lượng, có tài ăn nói, biết hy vọng vào tương lai,
nhưng cũng dễ rơi vào ảo tưởng và bị hiểu lầm. **Bấm "Đọc chi tiết"** để xem đầy đủ.`,

    chiTiet: `## 12 biểu hiện cụ thể

1. Bất luận ở hoàn cảnh khó khăn nào, phần lớn đều có thể tháo gỡ được trở ngại
   khó khăn bước đầu, biết hy vọng vào tương lai.

2. Khoan dung độ lượng, biết khoan dung hơn nữa còn hiểu đạo lý.

3. Có khả năng hội nhập được cuộc sống đa dạng muôn màu, biểu hiện cụ thể bằng
   ngôn ngữ và hành động, dễ được mọi người chấp nhận và hoan nghênh.

4. Có thể hiểu được sự việc và truyền đạt thông tin, hóa giải khúc mắc.

5. Nằm giữa ranh giới thị phi và chính trực, nhưng không bị mất đi bản tính
   lương thiện, mà còn giữ được đạo trung dung.

6. Có chuyện thầm kín trong lòng không thể bày tỏ với người khác, hoặc là dấu
   đầu hở đuôi.

7. Thường rơi vào ảo tưởng mà tự chuốc lấy phiền muộn, thậm chí còn tự hủy hoại
   mình.

8. Nhàn rỗi, càng nói càng sai, **thường khổ tại miệng**, bị người khác hiểu lầm
   oán trách.

9. Trước khi được xã hội công nhận, phải trải qua nhiều vất vả, chỉ cần giữ vững
   ý chí, cuối cùng cũng thành công.

10. Mạnh bạo hơn người, thường làm những chuyện mà mọi người không ngờ tới, hoặc
    những việc không được mọi người tán thành, khiến mọi người bàn tán.

11. Cơ hội sử dụng ngôn ngữ hơn người, cũng thường vận dụng tài ăn nói của mình
    mà đạt được lợi ích.

12. Cuộc đời có nhiều cơ hội phải đấu tranh.`,
  },

  // ============================================================
  // 4. Cự Môn tại Mệnh - phụ nữ
  // ============================================================
  {
    id: 'cu-mon-tai-menh-phu-nu',
    title: 'Cự Môn tại Mệnh - Phụ nữ',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    doUuTien: 75,
    tomTat: `**Phụ nữ có Cự Môn cư Mệnh:** thường có lòng tự tôn cao, bụng thẳng
dạ ngay, sức sống mạnh mẽ, đa nghi. Khi can thiệp công việc của chồng thường
thiếu thận trọng trong ngôn ngữ → dễ tổn thương bầu không khí gia đình. Tuy
nhiên rất chăm chỉ, đảm nhiệm tốt cả công việc và gia đình.

⚠️ **Sao Cự Môn không nên xuất hiện trong Mệnh nữ giới** — câu "ngôn đa tất thất"
áp dụng đặc biệt cho phụ nữ Cự Môn.`,

    chiTiet: `Phụ nữ cung Mệnh có sao Cự Môn thường có lòng tự tôn rất cao, bụng
thẳng dạ ngay, sức sống mạnh mẽ, đa nghi. Thường hay tự so bì với người khác mà
tự chuốc lấy phiền muộn trong lòng.

Khi can thiệp vào chuyện gia đình hay công việc của chồng, thường thiếu thận
trọng trong ngôn ngữ — lời nói phản cảm thường gây tổn thương bầu không khí
hạnh phúc, ấm cúng.

Mặt tích cực: làm việc chăm chỉ cần mẫn, xử lý mọi việc trong gia đình chu đáo,
công việc và gia đình đều đảm nhiệm tốt.`,
  },

  // ============================================================
  // 5. Cự Môn tại Mệnh - nghề nghiệp & "miệng"
  // ============================================================
  {
    id: 'cu-mon-tai-menh-nghe-nghiep',
    title: 'Cự Môn tại Mệnh - Nghề nghiệp',
    sao: ['Cự Môn'],
    cung: ['Mệnh'],
    doUuTien: 70,
    tomTat: `Cự Môn tượng trưng cho **"miệng"** — phù hợp những nghề dùng miệng
là chính: **giáo sư, quan tòa, luật sư, nhà ngoại giao, người dẫn chương trình,
nhân viên kinh doanh, ca sỹ, diễn viên, nghề dịch vụ, người làm PR**.

Khuyên: nên học và tinh thông ngoại ngữ. Cuối đời thường nhận được sự chăm sóc
của con cháu.`,

    chiTiet: `Cự Môn không thể tách rời khỏi "miệng" — có "khẩu phúc", giỏi quan
hệ công chúng, phần nhiều là những người gây dựng sự nghiệp bằng lời nói.

**Lời khuyên nghề nghiệp:** nên theo những nghề dùng miệng, nên học và tinh
thông nhiều ngoại ngữ. Khi đi theo phương thức chính phái, bản tính "thị phi"
dễ bị "phê bình" sẽ chuyển sang xu hướng **"giám sát đúng sai"**, **"đánh giá
sự hoàn thiện"** — phát huy khả năng phân tích thực tiễn của Cự Môn.

**Về "thị phi":** không phải có ý gây chuyện thị phi. Người Cự Môn có khả năng
phân tích rất tốt, rõ ràng nên dễ "thị phi". Cố gắng không nên gây chuyện thị
phi, nhưng cũng khó tránh khỏi.

**Cuối đời:** người Cự Môn thủ Mệnh phần lớn đều nhận được sự chăm sóc của con
cháu.`,
  },

  // ============================================================
  // 6. Cự Môn kết hợp các sao khác (Tứ Hóa, sát tinh)
  // ============================================================
  {
    id: 'cu-mon-ket-hop-tu-hoa-sat-tinh',
    title: 'Cự Môn + Tứ Hóa & sát tinh',
    sao: ['Cự Môn'],
    doUuTien: 50,
    tomTat: `**Cự Môn + Tam Cát Hóa (Lộc/Quyền/Khoa)** = bổng lộc dồi dào, tài
diễn thuyết được trọng dụng. **Hay nhất là Hóa Quyền** miếu vượng → làm quan lớn,
trách nhiệm ngoại giao.

⚠️ **Cự Môn kỵ:**
- **Hóa Kỵ:** ngôn từ sắc bén, nói khó nghe → dễ đắc tội với người
- **Kình Dương + Đà La:** chuyện tình cảm sóng gió, thị phi
- **Hỏa Tinh + Linh Tinh:** tăng phần khó khăn
- **Địa Không + Địa Kiếp** đồng cung Mệnh: một đời vất vả, thậm chí thời thơ
  ấu bị bỏ rơi`,

    chiTiet: `## Cự Môn + Lộc Tồn

Cự Môn là sao đơn độc, **duy có Lộc Tồn mới có thể hóa giải**. Cự Môn thâm nhập
vào các cung Lục thân, chủ về phần lớn người đó bạc duyên với lục thân; nếu
không kết hợp với Lộc Tồn hoặc đồng cung Hóa Lộc → tâm thần thường bất an, hoặc
có hiện tượng cô đơn.

## Cự Môn + Tứ Hóa

Cự Môn được tam cát Hóa Lộc/Quyền/Khoa → bổng lộc dồi dào, tài diễn thuyết hùng
biện được trọng dụng. Tính chất khác biệt:

- **Hóa Lộc:** mang cảm tính, hiền lành không cưỡng bức, quan sát tình cảnh nói chuyện.
- **Hóa Quyền:** giảng lý mang tính quyền uy, trật tự rõ ràng, tăng trọng lượng
  lời nói, tăng lòng tin và độ tin cậy → giảm bớt thị phi.
- **Hóa Khoa:** lời nói nho nhã, mang phong thái quân tử.

**Cự Môn thích nhất Hóa Quyền:** miếu vượng + lục cát tinh → làm quan lớn, trách
nhiệm ngoại giao. Không miếu vượng vẫn gánh trọng trách.

**Cự Môn miếu vượng + Hóa Lộc + cát tinh hội chiếu:** sự nghiệp thấy rõ. Nếu
Hóa Lộc gặp **Hồng Loan, Thiên Hỷ, Văn Xương, Văn Khúc, Hàm Trì** → phát triển
văn hóa nghệ thuật, biểu diễn giải trí, phần nhiều thành danh.

**Cự Môn không thích Hóa Kỵ:** ngôn từ sắc bén, nói khó nghe, dễ đắc tội. Nếu
Hóa Kỵ + Sát tinh → chú ý thị phi nơi quan trường.

## Cự Môn + Sát tinh

- **Kình Dương + Đà La:** kỵ nhất, chuyện tình cảm sóng gió, thị phi nhiều.
- **Hỏa Tinh + Linh Tinh:** tăng phần khó khăn.
- **Địa Không + Địa Kiếp** đồng cung Mệnh: một đời vất vả, thậm chí thời thơ
  ấu bị bỏ rơi.`,
  },
];
