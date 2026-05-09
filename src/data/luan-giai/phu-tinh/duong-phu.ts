import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO ĐƯỜNG PHÙ - Mộc, Cát Tinh + Quý Tinh.
 *
 * Đặc tính: SỰ THANH TỊNH, CAO SANG, có lợi cho CÔNG DANH - ĐIỀN SẢN - TÀI LỘC.
 * Hình tượng: "LÁ BÙA MAY MẮN" cho công danh và tài lộc.
 *
 * Khả năng CỨU GIẢI: dù là phụ tinh nhưng có khả năng XOAY CHUYỂN VẬN MỆNH,
 * BIẾN NGUY THÀNH AN, gia tăng MAY MẮN và TÀI LỘC.
 *
 * Hợp NGHỀ: trí óc, quản lý, hình ảnh chỉn chu, công quyền, chính phủ.
 */
export const luanGiai_DuongPhu: DoanLuanGiai[] = [
  {
    id: 'duong-phu-tinh-chat-chung',
    title: 'Đường Phù - Đặc tính chung',
    sao: ['Đường Phù'],
    doUuTien: 32,
    tomTat: `**Đường Phù** thuộc nhóm phụ tinh cát tinh kiêm quý tinh, ngũ hành
Mộc, được ví như "lá bùa may mắn" cho công danh và tài lộc của đương số.

Đặc tính nổi bật của sao là sự thanh tịnh, cao sang, đi kèm trí tuệ; công
danh và sự nghiệp đều có triển vọng. Đường Phù có lợi cả cho công danh, điền
sản lẫn tài lộc.

Dù chỉ là phụ tinh, Đường Phù có khả năng cứu giải đáng kể: xoay chuyển vận
mệnh, biến nguy thành an, gia tăng may mắn và tài lộc cho đương số.

Về sự nghiệp, sao này hợp với những công việc trí óc, quản lý, đòi hỏi hình
ảnh chỉn chu, đặc biệt phù hợp với môi trường công quyền và chính phủ.

Về duyên vận, vợ chồng gắn kết chặt chẽ; bạn đời thường có năng lực và phẩm
chất tốt, được nhiều người nể trọng.

Về phúc thọ, Đường Phù giúp giảm tính tác họa của bệnh tật, tránh được tình
trạng nhiều bệnh cùng lúc; khi ốm đau, đương số ắt có cách chữa.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CUNG MỆNH
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'duong-phu-menh-danh-vi-hoc-rong',
    title: 'Đường Phù tại Mệnh - Danh vị học rộng hiểu biết',
    sao: ['Đường Phù'],
    cung: ['Mệnh'],
    doUuTien: 80,
    tomTat: `Khi **Đường Phù** tọa thủ Mệnh, đương số chủ về danh vị, học rộng
và hiểu biết. Phong thái đạo mạo, đĩnh ngộ, uy nghi, đường hoàng và bệ vệ.

Là quý tinh, Đường Phù có lợi cho việc học hành và khoa cử. Đương số thông
minh, học rộng, có khoa bảng bằng cấp; nếu làm trong các cơ quan, đơn vị, tổ
chức thì có cơ hội thăng tiến và nắm chức vụ cao.

Về tâm lý, đương số thích những công việc nhẹ nhàng, nhàn hạ, không muốn lao
động vất vả; thường có xu hướng muốn kiếm tiền nhanh, làm giàu một sớm một
chiều.`,
  },

  {
    id: 'duong-phu-menh-sat-bai-tinh-lieu-linh',
    title: 'Đường Phù + sát bại tinh tại Mệnh - Liều lĩnh gian trá',
    sao: ['Đường Phù'],
    cung: ['Mệnh'],
    ketHop: ['Kình Dương', 'Đà La', 'Địa Không', 'Địa Kiếp', 'Hóa Kỵ', 'Thiên Hình'],
    doUuTien: 60,
    tomTat: `Khi Đường Phù tại Mệnh gặp sát bại tinh như Kình Dương, Đà La, Địa
Không, Địa Kiếp, Hóa Kỵ hay Thiên Hình, vì muốn kiếm tiền nhanh, đương số
trở thành người liều lĩnh, gian trá, sẵn sàng làm những việc bất nhân phi
nghĩa để đạt mục đích bằng mọi giá.`,
  },

  {
    id: 'duong-phu-menh-bach-ho-lao-ly',
    title: 'Đường Phù + Bạch Hổ tại Mệnh - Dính lao lý',
    sao: ['Đường Phù'],
    cung: ['Mệnh'],
    ketHop: ['Bạch Hổ'],
    doUuTien: 65,
    tomTat: `Khi Đường Phù đồng cung Bạch Hổ tại Mệnh, đương số có nguy cơ dính
vào lao lý, thậm chí bị bắt giam, xét xử và kết án.`,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CÁC CUNG KHÁC
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'duong-phu-phu-mau-cha-me-thanh-cao',
    title: 'Đường Phù tại Phụ Mẫu - Cha mẹ cốt cách thanh cao',
    sao: ['Đường Phù'],
    cung: ['Phụ Mẫu'],
    doUuTien: 75,
    tomTat: `Khi Đường Phù tọa Phụ Mẫu, cha mẹ của đương số có cốt cách thanh
cao, quý phái, hiền lành và thích sự thanh nhàn.

Khi hội nhiều cát tinh, cha mẹ là quan chức, thuộc giới quý tộc giàu sang,
kinh tế vững vàng.

Đáng lưu ý, khi đi cùng Địa Không hay sao Bệnh, Bệnh Phù, cha mẹ dễ mắc các
bệnh chuyển hóa, tiểu đường.`,
  },

  {
    id: 'duong-phu-phuc-duc-gia-toc-vung-vang',
    title: 'Đường Phù tại Phúc Đức - Gia tộc nền tảng vững',
    sao: ['Đường Phù'],
    cung: ['Phúc Đức'],
    doUuTien: 75,
    tomTat: `Khi Đường Phù tọa Phúc Đức, gia tộc của đương số có nền tảng vững
vàng.

Khi hội Thiên Khôi, Thiên Việt, Phúc Đức, Thiếu Dương, Hóa Khoa, Hóa Lộc,
đương số được tổ tiên phù hộ, gặp nhiều may mắn và được nhiều người giúp đỡ.

Khi đi cùng nhóm Sát, Hóa Kỵ, Thiên Hình, dễ xảy ra hiện tượng nhà thờ tổ
bị phá hoại, lụn bại; hương hỏa không giữ được lâu.`,
  },

  {
    id: 'duong-phu-dien-trach-buon-ban-dat-dai',
    title: 'Đường Phù tại Điền Trạch - Lợi cho buôn đất đai',
    sao: ['Đường Phù'],
    cung: ['Điền Trạch'],
    doUuTien: 75,
    tomTat: `Khi Đường Phù tọa Điền Trạch, đương số có lợi trong việc buôn bán
đất đai.

Để phát huy được lợi thế này, sao cần đi cùng Tả Phù, Hữu Bật mang tính trợ
lực, đặc biệt cần thêm sao Lộc để gia tăng cơ hội chuyển đổi và giao dịch.

Khi hội Long Trì, Phượng Các, nhà cửa của đương số rộng lớn, uy nghiêm, hoặc
ở gần nơi công quyền.`,
  },

  {
    id: 'duong-phu-quan-loc-cong-quyen-tri-oc',
    title: 'Đường Phù tại Quan Lộc - Việc bàn giấy trí óc công quyền',
    sao: ['Đường Phù'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `Khi Đường Phù tọa Quan Lộc, công việc của đương số gắn với "việc
bàn giấy" — thiên về trí óc và quản lý. Bản chất công việc thanh cao, nhàn
hạ, đòi hỏi hình ảnh chỉn chu.

Khi hội Thiên Hình cùng Hóa Quyền, đương số làm việc trong môi trường công
quyền hay chính phủ.

Lời khuyên: đôi khi việc làm quá quy củ, tuân thủ nguyên tắc cứng nhắc khiến
đương số bỏ lỡ cơ hội. Tinh thần "biết tiến biết thoái, mềm nắn rắn buông"
chính là kim chỉ nam giúp giữ vị trí và phát triển.`,
  },

  {
    id: 'duong-phu-no-boc-quan-he-ro-rang',
    title: 'Đường Phù tại Nô Bộc - Quan hệ rõ ràng dài lâu',
    sao: ['Đường Phù'],
    cung: ['Nô Bộc'],
    doUuTien: 75,
    tomTat: `Khi Đường Phù tọa Nô Bộc, sao này gia tăng tính tốt đẹp cho mối
quan hệ bạn bè của đương số.

Khi đi cùng Tả Phù, Hữu Bật, Hóa Khoa, Đường Phù ngăn chặn những điều mờ ám;
bạn bè chơi với nhau rõ ràng về lợi ích và duy trì được dài lâu.

Khi đi cùng Đà La, Linh Tinh, Địa Kiếp, Lưu Hà, Phục Binh, Đường Phù lại vẽ
ra lối đi cho kẻ xấu — quan hệ nhiều khuất tất gian dối, một khi kéo đương
số vào thì khó thoát ra.`,
  },

  {
    id: 'duong-phu-thien-di-noi-sang-trong',
    title: 'Đường Phù tại Thiên Di - Lui tới nơi sang trọng',
    sao: ['Đường Phù'],
    cung: ['Thiên Di'],
    doUuTien: 75,
    tomTat: `Khi Đường Phù tọa Thiên Di, đương số thường lui tới những nơi sang
trọng, dễ tiếp cận người tầng lớp cao trong xã hội. Việc đi xa giúp đương số
phát triển tích cực, đổi đời, thoát khỏi "ao làng".

Khi hội Địa Kiếp, Lưu Hà, Phục Binh, Đà La, Linh Tinh, Thiên Riêu, Hóa Kỵ,
đương số gặp tai họa khi xuất ngoại; đi xa dễ vướng kiện tụng pháp luật, khó
tránh "lệ làng" ở nơi mình đến.`,
  },

  {
    id: 'duong-phu-tat-ach-giam-benh-tat',
    title: 'Đường Phù tại Tật Ách - Giảm tác họa bệnh tật',
    sao: ['Đường Phù'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `Khi Đường Phù tọa Tật Ách, sao này giúp giảm tính tác họa của
bệnh tật, tránh tình trạng nhiều bệnh cùng lúc; khi ốm đau ắt có cách chữa.

Cung này còn được dùng để suy đoán nghiệp quả của một con người.`,
  },

  {
    id: 'duong-phu-tat-ach-cu-mon-thien-hinh-quyen-kien-tung',
    title: 'Đường Phù + Cự Môn + Thiên Hình/Hóa Quyền + sát tinh tại Tật Ách - Vướng kiện tụng',
    sao: ['Đường Phù'],
    cung: ['Tật Ách'],
    ketHop: ['Cự Môn', 'Thiên Hình', 'Hóa Quyền', 'Địa Kiếp', 'Hóa Kỵ', 'Địa Không', 'Hỏa Tinh', 'Đà La'],
    doUuTien: 60,
    tomTat: `Khi Đường Phù tọa Tật Ách đi cùng Cự Môn, Thiên Hình, Hóa Quyền và
nhóm sát tinh Địa Kiếp, Hóa Kỵ, Địa Không, Hỏa Tinh, Đà La, đương số dễ
vướng vào kiện tụng, phải đứng trước vành móng ngựa và tự biện hộ cho chính
bản thân.`,
  },

  {
    id: 'duong-phu-tat-ach-hoa-hinh-quyen-cat-tinh-cong-quyen',
    title: 'Đường Phù + Hóa Hình/Hóa Quyền + cát tinh - Công việc tố tụng tòa án',
    sao: ['Đường Phù'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Hình', 'Hóa Quyền', 'Tả Phù', 'Hữu Bật'],
    doUuTien: 62,
    tomTat: `Khi Đường Phù đi cùng Thiên Hình, Hóa Quyền và các cát tinh tốt như
Tả Phù, Hữu Bật, đương số phù hợp với công việc liên quan tố tụng, làm việc
ở tòa án hoặc trong môi trường công quyền.`,
  },

  {
    id: 'duong-phu-tai-bach-mot-nguon-thu',
    title: 'Đường Phù tại Tài Bạch - Một nguồn thu duy nhất',
    sao: ['Đường Phù'],
    cung: ['Tài Bạch'],
    doUuTien: 70,
    tomTat: `Khi Đường Phù tọa Tài Bạch, sao này không phát huy được nhiều điểm
tốt. Đương số kiếm tiền bằng những công việc nhẹ nhàng, ít áp lực, song chỉ
có một nguồn thu duy nhất nên luồng tiền bị hạn chế. Đương số cũng không có
động lực để đa dạng hóa cách kiếm tiền, khiến cuộc sống khó phát triển.`,
  },

  {
    id: 'duong-phu-tu-tuc-quan-he-tot-dep',
    title: 'Đường Phù tại Tử Tức - Hỗ trợ quan hệ với con cái',
    sao: ['Đường Phù'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `Khi Đường Phù tọa Tử Tức, sao này hỗ trợ quan hệ giữa đương số với
con cái trở nên tốt đẹp.

Điều kiện tiên quyết là phải có sự gắn kết chặt chẽ từ cát tinh, đặc biệt là
Tả Phù, Hữu Bật, Văn Xương, Văn Khúc.

Khi đi cùng Văn Xương, Văn Khúc, tình cảm cha con càng đậm sâu; cha mẹ luôn
lo lắng và quan tâm đến con cái.

Khi hội sát tinh hình thương, đương số phải đề phòng con cái gặp tai nạn
trên đường lớn, tai nạn giao thông do sai lệch tín hiệu.`,
  },

  {
    id: 'duong-phu-phu-the-vo-chong-gan-ket',
    title: 'Đường Phù tại Phu Thê - Vợ chồng gắn kết bạn đời quý phái',
    sao: ['Đường Phù'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `Khi Đường Phù tọa Phu Thê, vợ chồng của đương số gắn kết chặt chẽ.

Khi đi cùng Văn Xương, Văn Khúc, Quang Quý, vợ chồng càng gắn kết; sau thời
gian dài, tình cảm vẫn "mật ngọt" như buổi đầu.

Khi đi cùng các sao bằng cấp, học thức, danh giá, quyền quý, bạn đời có
năng lực và phẩm chất tốt, được nhiều người nể trọng.

Khi đi cùng Địa Kiếp, Thiên Hình, Hóa Kỵ, mối quan hệ vợ chồng trắc trở.
Đường Phù khi ấy giống như cơ quan công quyền — đến lần đầu để kết hôn, lần
thứ hai lại để ly hôn.`,
  },

  {
    id: 'duong-phu-huynh-de-anh-em-ben-chat',
    title: 'Đường Phù tại Huynh Đệ - Anh em bền chặt khi có Tả Hữu',
    sao: ['Đường Phù'],
    cung: ['Huynh Đệ'],
    doUuTien: 75,
    tomTat: `Khi Đường Phù tọa Huynh Đệ, sao này không tạo ảnh hưởng quá mạnh.

Khi đi cùng Tả Phù, Hữu Bật, mối quan hệ anh chị em bền chặt, thân thiết và
hợp tác ăn ý.

Khi đi cùng Địa Không, Địa Kiếp, Hóa Kỵ, Hỏa Tinh, anh em thân thiết dễ
vướng vòng lao lý, gây liên lụy đến bản thân đương số.`,
  },
];
