import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO LỰC SĨ - Hỏa, vòng Lộc Tồn (vị trí 2)
 * Sao võ cách - sức mạnh, to lớn, dũng mãnh, can đảm
 */
export const luanGiai_LucSi: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung sao Lực Sĩ
  // ============================================================
  {
    id: 'luc-si-tinh-chat-chung',
    title: 'Lực Sĩ - Đặc tính chung',
    sao: ['Lực Sĩ'],
    doUuTien: 30,
    tomTat: `**Lực Sĩ** là sao võ cách trong vòng Lộc Tồn / Bác Sĩ, đứng ở vị
trí thứ hai sau Bác Sĩ, ngũ hành thuộc Hỏa. Sao mang đặc tính sức mạnh, to
lớn, dũng mãnh, can đảm và có uy quyền.

Bản chất Lực Sĩ thiên về sức mạnh vật chất, hình thể và tay chân, nghiêng
hẳn về võ cách hơn văn cách. Khi đi cùng sao khác, Lực Sĩ có khả năng gia
tăng vật chất, khối lượng và số lượng — chẳng hạn gia tăng số con khi đóng ở
Tử Tức, gia tăng số bạn khi đóng ở Nô Bộc.

Quy luật chung khi xét Lực Sĩ:

- Gặp nhiều sao tốt, Lực Sĩ làm tốt thêm cả về sức khỏe lẫn chất lượng
- Gặp nhiều sao xấu, tác họa trở nên nặng hơn, nhanh hơn và nguy hiểm hơn`,
  },

  // ============================================================
  // 2. Lực Sĩ tại Mệnh
  // ============================================================
  {
    id: 'luc-si-tai-menh',
    title: 'Lực Sĩ tại Mệnh - Cường tráng, mạnh mẽ',
    sao: ['Lực Sĩ'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `Đương số có **Lực Sĩ** thủ Mệnh thường cường tráng, vạm vỡ, sức
vóc phi thường. Tướng mạo khỏe mạnh, ăn uống khỏe, thân hình rắn rỏi.

Về tính cách:

- Nhanh nhẹn, can đảm và mạnh bạo
- Ưa làm trước nghĩ sau nên dễ bị lừa gạt
- Thật thà, tốt tính, có uy quyền và uy lực, hay giúp đỡ người khác

Câu "ăn được ngủ được là tiên" rất đúng với đương số có Lực Sĩ tại Mệnh.`,
  },

  {
    id: 'luc-si-tai-menh-thien-dong',
    title: 'Lực Sĩ + Thiên Đồng tại Mệnh - ăn khỏe',
    sao: ['Lực Sĩ'],
    cung: ['Mệnh'],
    ketHop: ['Thiên Đồng'],
    doUuTien: 73,
    tomTat: `Khi Lực Sĩ đi cùng Thiên Đồng tại Mệnh, đương số ăn rất khỏe và
thích ăn uống nhậu nhẹt tiệc tùng.`,
  },

  {
    id: 'luc-si-tai-menh-tham-lang',
    title: 'Lực Sĩ + Tham Lang tại Mệnh - ăn khỏe',
    sao: ['Lực Sĩ'],
    cung: ['Mệnh'],
    ketHop: ['Tham Lang'],
    doUuTien: 73,
    tomTat: `Khi Lực Sĩ đi cùng Tham Lang tại Mệnh, đương số ăn rất khỏe và
thích ăn uống nhậu nhẹt tiệc tùng.`,
  },

  {
    id: 'luc-si-tai-menh-liem-trinh',
    title: 'Lực Sĩ + Liêm Trinh tại Mệnh - ăn khỏe',
    sao: ['Lực Sĩ'],
    cung: ['Mệnh'],
    ketHop: ['Liêm Trinh'],
    doUuTien: 73,
    tomTat: `Khi Lực Sĩ đi cùng Liêm Trinh tại Mệnh, đương số ăn rất khỏe và
thích ăn uống nhậu nhẹt tiệc tùng.`,
  },

  {
    id: 'luc-si-tai-menh-thien-tru',
    title: 'Lực Sĩ + Thiên Trù tại Mệnh - ăn khỏe',
    sao: ['Lực Sĩ'],
    cung: ['Mệnh'],
    ketHop: ['Thiên Trù'],
    doUuTien: 73,
    tomTat: `Khi Lực Sĩ đi cùng Thiên Trù tại Mệnh, đương số ăn rất khỏe và
thích ăn uống nhậu nhẹt tiệc tùng.`,
  },

  {
    id: 'luc-si-tai-menh-hoa-loc',
    title: 'Lực Sĩ + Hóa Lộc tại Mệnh - sành ăn',
    sao: ['Lực Sĩ'],
    cung: ['Mệnh'],
    ketHop: ['Hóa Lộc'],
    doUuTien: 73,
    tomTat: `Khi Lực Sĩ gặp Hóa Lộc tại Mệnh, đương số càng sành ăn, thích ăn
ngon ăn nhiều, tìm thấy lạc thú trong sự ăn uống và trở thành "cao thủ"
trong những bữa tiệc tùng.`,
  },

  // ============================================================
  // 3. Lực Sĩ tại Phụ Mẫu
  // ============================================================
  {
    id: 'luc-si-tai-phu-mau',
    title: 'Lực Sĩ tại Phụ Mẫu',
    sao: ['Lực Sĩ'],
    cung: ['Phụ Mẫu'],
    doUuTien: 70,
    tomTat: `Khi Lực Sĩ cư Phụ Mẫu, cha mẹ của đương số có sức khỏe, cao lớn,
chịu khó làm ăn và không nề hà việc lớn bé.

Nếu không có quyền tinh đi cùng, cha mẹ chịu thương chịu khó theo kiểu "bán
mặt cho đất, bán lưng cho trời", thường xuất thân nông dân hoặc buôn bán
nhỏ.

Khi có thêm sao phá tài, cha mẹ phải lao lực kiếm tiền nên ít thời gian
chăm con; tình cảm gia đình khó trọn vẹn.`,
  },

  {
    id: 'luc-si-tai-phu-mau-phong-cao',
    title: 'Lực Sĩ + Phong Cáo tại Phụ Mẫu - võ nghiệp',
    sao: ['Lực Sĩ'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Phong Cáo'],
    doUuTien: 65,
    tomTat: `Khi Lực Sĩ đi cùng Phong Cáo tại Phụ Mẫu, cha mẹ đương số làm võ
nghiệp, quân nhân, sĩ quan hoặc an ninh.`,
  },

  {
    id: 'luc-si-tai-phu-mau-hoa-quyen',
    title: 'Lực Sĩ + Hóa Quyền tại Phụ Mẫu - võ nghiệp',
    sao: ['Lực Sĩ'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Hóa Quyền'],
    doUuTien: 65,
    tomTat: `Khi Lực Sĩ gặp Hóa Quyền tại Phụ Mẫu, cha mẹ đương số làm võ
nghiệp, quân nhân, sĩ quan hoặc an ninh.`,
  },

  {
    id: 'luc-si-tai-phu-mau-ta-phu',
    title: 'Lực Sĩ + Tả Phù tại Phụ Mẫu - võ nghiệp',
    sao: ['Lực Sĩ'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Tả Phù'],
    doUuTien: 65,
    tomTat: `Khi Lực Sĩ đi cùng Tả Phù tại Phụ Mẫu, cha mẹ đương số làm võ
nghiệp, quân nhân, sĩ quan hoặc an ninh.`,
  },

  {
    id: 'luc-si-tai-phu-mau-huu-bat',
    title: 'Lực Sĩ + Hữu Bật tại Phụ Mẫu - võ nghiệp',
    sao: ['Lực Sĩ'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Hữu Bật'],
    doUuTien: 65,
    tomTat: `Khi Lực Sĩ đi cùng Hữu Bật tại Phụ Mẫu, cha mẹ đương số làm võ
nghiệp, quân nhân, sĩ quan hoặc an ninh.`,
  },

  {
    id: 'luc-si-tai-phu-mau-an-quang',
    title: 'Lực Sĩ + Ân Quang tại Phụ Mẫu - võ nghiệp',
    sao: ['Lực Sĩ'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Ân Quang'],
    doUuTien: 65,
    tomTat: `Khi Lực Sĩ đi cùng Ân Quang tại Phụ Mẫu, cha mẹ đương số làm võ
nghiệp, quân nhân, sĩ quan hoặc an ninh.`,
  },

  {
    id: 'luc-si-tai-phu-mau-thien-quy',
    title: 'Lực Sĩ + Thiên Quý tại Phụ Mẫu - võ nghiệp',
    sao: ['Lực Sĩ'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Thiên Quý'],
    doUuTien: 65,
    tomTat: `Khi Lực Sĩ đi cùng Thiên Quý tại Phụ Mẫu, cha mẹ đương số làm võ
nghiệp, quân nhân, sĩ quan hoặc an ninh.`,
  },

  {
    id: 'luc-si-tai-phu-mau-thien-viet',
    title: 'Lực Sĩ + Thiên Việt tại Phụ Mẫu - võ nghiệp',
    sao: ['Lực Sĩ'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Thiên Việt'],
    doUuTien: 65,
    tomTat: `Khi Lực Sĩ đi cùng Thiên Việt tại Phụ Mẫu, cha mẹ đương số làm võ
nghiệp, quân nhân, sĩ quan hoặc an ninh.`,
  },

  // ============================================================
  // 4. Lực Sĩ tại Phúc Đức
  // ============================================================
  {
    id: 'luc-si-tai-phuc-duc',
    title: 'Lực Sĩ tại Phúc Đức',
    sao: ['Lực Sĩ'],
    cung: ['Phúc Đức'],
    doUuTien: 72,
    tomTat: `Khi Lực Sĩ cư Phúc Đức, dòng họ đương số có gen khỏe mạnh, to
lớn, sức bền tốt. Tính tình thẳng thắn, không che giấu. Mồ mả các cụ
thường to và bề thế.`,
  },

  {
    id: 'luc-si-tai-phuc-duc-trang-sinh',
    title: 'Lực Sĩ + Tràng Sinh tại Phúc Đức - sống thọ',
    sao: ['Lực Sĩ'],
    cung: ['Phúc Đức'],
    ketHop: ['Tràng Sinh'],
    doUuTien: 67,
    tomTat: `Khi Lực Sĩ đi cùng Tràng Sinh tại Phúc Đức, dòng họ đương số tốt
phúc, nhiều người sống thọ.`,
  },

  {
    id: 'luc-si-tai-phuc-duc-an-quang',
    title: 'Lực Sĩ + Ân Quang tại Phúc Đức - sống thọ',
    sao: ['Lực Sĩ'],
    cung: ['Phúc Đức'],
    ketHop: ['Ân Quang'],
    doUuTien: 67,
    tomTat: `Khi Lực Sĩ đi cùng Ân Quang tại Phúc Đức, dòng họ đương số tốt
phúc, nhiều người sống thọ.`,
  },

  {
    id: 'luc-si-tai-phuc-duc-thien-quy',
    title: 'Lực Sĩ + Thiên Quý tại Phúc Đức - sống thọ',
    sao: ['Lực Sĩ'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Quý'],
    doUuTien: 67,
    tomTat: `Khi Lực Sĩ đi cùng Thiên Quý tại Phúc Đức, dòng họ đương số tốt
phúc, nhiều người sống thọ.`,
  },

  {
    id: 'luc-si-tai-phuc-duc-thien-tho',
    title: 'Lực Sĩ + Thiên Thọ tại Phúc Đức - sống thọ',
    sao: ['Lực Sĩ'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Thọ'],
    doUuTien: 67,
    tomTat: `Khi Lực Sĩ đi cùng Thiên Thọ tại Phúc Đức, dòng họ đương số tốt
phúc, nhiều người sống thọ.`,
  },

  {
    id: 'luc-si-tai-phuc-duc-ta-huu-linh-da',
    title: 'Lực Sĩ + Tả Hữu + Linh Tinh + Đà La tại Phúc Đức - bậc vĩ nhân',
    sao: ['Lực Sĩ'],
    cung: ['Phúc Đức'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Linh Tinh', 'Đà La'],
    doUuTien: 67,
    tomTat: `Khi Lực Sĩ hội đủ Tả Phù, Hữu Bật, Linh Tinh và Đà La tại Phúc
Đức, đương số hình thành khí chất kiên định, mang tinh thần của bậc vĩ
nhân, "dùi mài kinh sử" cho đến ngày thành công.`,
  },

  // ============================================================
  // 5. Lực Sĩ tại Điền Trạch
  // ============================================================
  {
    id: 'luc-si-tai-dien-trach',
    title: 'Lực Sĩ tại Điền Trạch',
    sao: ['Lực Sĩ'],
    cung: ['Điền Trạch'],
    doUuTien: 70,
    tomTat: `Khi Lực Sĩ cư Điền Trạch, nhà cửa của đương số to, cao, rộng,
được gia cố tốt và chắc chắn dù không quá sang trọng. Vì Lực Sĩ chủ về khối
lượng và vật chất, nhà tuy to cao nhưng chưa chắc đẹp và sang.

Nếu sống ở nơi dễ gặp địa chấn, đương số rất cần Hóa Khoa, Thiên Khôi,
Thiên Việt, Ân Quang, Thiên Quý, Tả Phù hoặc Hữu Bật để giúp tránh sụp đổ
và tai họa.`,
  },

  {
    id: 'luc-si-tai-dien-trach-hoa-tinh',
    title: 'Lực Sĩ + Hỏa Tinh tại Điền Trạch - tai nạn không gian kiên cố',
    sao: ['Lực Sĩ'],
    cung: ['Điền Trạch'],
    ketHop: ['Hỏa Tinh'],
    doUuTien: 65,
    tomTat: `Khi Lực Sĩ đi cùng Hỏa Tinh tại Điền Trạch, đương số cần cẩn
trọng nguy cơ mắc kẹt hoặc gặp tai nạn trong những không gian kiên cố.`,
  },

  {
    id: 'luc-si-tai-dien-trach-dia-kiep',
    title: 'Lực Sĩ + Địa Kiếp tại Điền Trạch - tai nạn không gian kiên cố',
    sao: ['Lực Sĩ'],
    cung: ['Điền Trạch'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 65,
    tomTat: `Khi Lực Sĩ đi cùng Địa Kiếp tại Điền Trạch, đương số cần cẩn
trọng nguy cơ mắc kẹt hoặc gặp tai nạn trong những không gian kiên cố.`,
  },

  {
    id: 'luc-si-tai-dien-trach-da-la',
    title: 'Lực Sĩ + Đà La tại Điền Trạch - tai nạn không gian kiên cố',
    sao: ['Lực Sĩ'],
    cung: ['Điền Trạch'],
    ketHop: ['Đà La'],
    doUuTien: 65,
    tomTat: `Khi Lực Sĩ đi cùng Đà La tại Điền Trạch, đương số cần cẩn trọng
nguy cơ mắc kẹt hoặc gặp tai nạn trong những không gian kiên cố.`,
  },

  {
    id: 'luc-si-tai-dien-trach-tu',
    title: 'Lực Sĩ + Tử tại Điền Trạch - tai nạn không gian kiên cố',
    sao: ['Lực Sĩ'],
    cung: ['Điền Trạch'],
    ketHop: ['Tử'],
    doUuTien: 65,
    tomTat: `Khi Lực Sĩ đi cùng Tử tại Điền Trạch, đương số cần cẩn trọng
nguy cơ mắc kẹt hoặc gặp tai nạn trong những không gian kiên cố.`,
  },

  {
    id: 'luc-si-tai-dien-trach-tuan',
    title: 'Lực Sĩ + Tuần tại Điền Trạch - tai nạn không gian kiên cố',
    sao: ['Lực Sĩ'],
    cung: ['Điền Trạch'],
    ketHop: ['Tuần'],
    doUuTien: 65,
    tomTat: `Khi Lực Sĩ đi cùng Tuần tại Điền Trạch, đương số cần cẩn trọng
nguy cơ mắc kẹt hoặc gặp tai nạn trong những không gian kiên cố.`,
  },

  // ============================================================
  // 6. Lực Sĩ tại Quan Lộc
  // ============================================================
  {
    id: 'luc-si-tai-quan-loc',
    title: 'Lực Sĩ tại Quan Lộc',
    sao: ['Lực Sĩ'],
    cung: ['Quan Lộc'],
    doUuTien: 75,
    tomTat: `Khi Lực Sĩ cư Quan Lộc, đương số không nề hà công việc, sẵn sàng
làm bất cứ việc gì được giao và làm việc không biết mệt mỏi.

Những hướng nghề phù hợp:

- Võ nghiệp, quân đội, công an, an ninh
- Thể thao
- Các ngành nghề yêu cầu thể lực lớn như lao động chân tay hay kỹ thuật
  nặng`,
  },

  {
    id: 'luc-si-tai-quan-loc-van-tinh',
    title: 'Lực Sĩ + Văn tinh tại Quan Lộc - sức + trí cân bằng',
    sao: ['Lực Sĩ'],
    cung: ['Quan Lộc'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Lưu Niên Văn Tinh', 'Hóa Khoa'],
    doUuTien: 70,
    tomTat: `Khi Lực Sĩ gặp Văn Xương, Văn Khúc, Lưu Niên Văn Tinh hoặc Hóa
Khoa tại Quan Lộc, công việc của đương số vừa cần sức vừa cần trí, nhờ vậy
mà tạo được sự cân bằng hài hòa.`,
  },

  {
    id: 'luc-si-tai-quan-loc-that-sat-ky-hinh',
    title: 'Lực Sĩ + Thất Sát + Hóa Kỵ + Thiên Hình tại Quan Lộc - lao lực sinh bệnh',
    sao: ['Lực Sĩ'],
    cung: ['Quan Lộc'],
    ketHop: ['Thất Sát', 'Hóa Kỵ', 'Thiên Hình'],
    doUuTien: 70,
    tomTat: `Khi Lực Sĩ hội cùng Thất Sát, Hóa Kỵ và Thiên Hình tại Quan Lộc,
cần xem thêm sao chủ tật bệnh — công việc có thể khiến sức khỏe đương số
suy giảm, "làm việc quên thân mà sinh bệnh".`,
  },

  // ============================================================
  // 7. Lực Sĩ tại Nô Bộc
  // ============================================================
  {
    id: 'luc-si-tai-no-boc',
    title: 'Lực Sĩ tại Nô Bộc',
    sao: ['Lực Sĩ'],
    cung: ['Nô Bộc'],
    doUuTien: 70,
    tomTat: `Khi Lực Sĩ cư Nô Bộc, số lượng bạn bè của đương số tăng lên đáng
kể.`,
  },

  {
    id: 'luc-si-tai-no-boc-ta-phu',
    title: 'Lực Sĩ + Tả Phù tại Nô Bộc - bạn bè chất lượng',
    sao: ['Lực Sĩ'],
    cung: ['Nô Bộc'],
    ketHop: ['Tả Phù'],
    doUuTien: 65,
    tomTat: `Khi Lực Sĩ đi cùng Tả Phù tại Nô Bộc, bạn bè đương số ít nhưng
chất lượng, kết giao toàn người tử tế và thật lòng.`,
  },

  {
    id: 'luc-si-tai-no-boc-huu-bat',
    title: 'Lực Sĩ + Hữu Bật tại Nô Bộc - bạn bè chất lượng',
    sao: ['Lực Sĩ'],
    cung: ['Nô Bộc'],
    ketHop: ['Hữu Bật'],
    doUuTien: 65,
    tomTat: `Khi Lực Sĩ đi cùng Hữu Bật tại Nô Bộc, bạn bè đương số ít nhưng
chất lượng, kết giao toàn người tử tế và thật lòng.`,
  },

  {
    id: 'luc-si-tai-no-boc-an-quang',
    title: 'Lực Sĩ + Ân Quang tại Nô Bộc - bạn bè chất lượng',
    sao: ['Lực Sĩ'],
    cung: ['Nô Bộc'],
    ketHop: ['Ân Quang'],
    doUuTien: 65,
    tomTat: `Khi Lực Sĩ đi cùng Ân Quang tại Nô Bộc, bạn bè đương số ít nhưng
chất lượng, kết giao toàn người tử tế và thật lòng.`,
  },

  {
    id: 'luc-si-tai-no-boc-thien-quy',
    title: 'Lực Sĩ + Thiên Quý tại Nô Bộc - bạn bè chất lượng',
    sao: ['Lực Sĩ'],
    cung: ['Nô Bộc'],
    ketHop: ['Thiên Quý'],
    doUuTien: 65,
    tomTat: `Khi Lực Sĩ đi cùng Thiên Quý tại Nô Bộc, bạn bè đương số ít nhưng
chất lượng, kết giao toàn người tử tế và thật lòng.`,
  },

  {
    id: 'luc-si-tai-no-boc-thien-khoi',
    title: 'Lực Sĩ + Thiên Khôi tại Nô Bộc - bạn bè chất lượng',
    sao: ['Lực Sĩ'],
    cung: ['Nô Bộc'],
    ketHop: ['Thiên Khôi'],
    doUuTien: 65,
    tomTat: `Khi Lực Sĩ đi cùng Thiên Khôi tại Nô Bộc, bạn bè đương số ít nhưng
chất lượng, kết giao toàn người tử tế và thật lòng.`,
  },

  {
    id: 'luc-si-tai-no-boc-thien-viet',
    title: 'Lực Sĩ + Thiên Việt tại Nô Bộc - bạn bè chất lượng',
    sao: ['Lực Sĩ'],
    cung: ['Nô Bộc'],
    ketHop: ['Thiên Việt'],
    doUuTien: 65,
    tomTat: `Khi Lực Sĩ đi cùng Thiên Việt tại Nô Bộc, bạn bè đương số ít nhưng
chất lượng, kết giao toàn người tử tế và thật lòng.`,
  },

  {
    id: 'luc-si-tai-no-boc-thien-tru',
    title: 'Lực Sĩ + Thiên Trù tại Nô Bộc - rủ ăn nhậu',
    sao: ['Lực Sĩ'],
    cung: ['Nô Bộc'],
    ketHop: ['Thiên Trù'],
    doUuTien: 65,
    tomTat: `Khi Lực Sĩ đi cùng Thiên Trù tại Nô Bộc, đương số hay được bạn
bè rủ đi ăn nhậu, cơ hội tốt cũng nảy nở ngay trên bàn tiệc — đặc biệt rõ
khi có thêm sao Lộc.`,
  },

  {
    id: 'luc-si-tai-no-boc-kinh-duong',
    title: 'Lực Sĩ + Kình Dương tại Nô Bộc - bạn xấu giang hồ',
    sao: ['Lực Sĩ'],
    cung: ['Nô Bộc'],
    ketHop: ['Kình Dương'],
    doUuTien: 65,
    tomTat: `Khi Lực Sĩ đi cùng Kình Dương tại Nô Bộc, đương số có nhiều bạn
xấu, giang hồ; cần cẩn thận bị ám hại, hành hung hoặc phản bội bởi chính
bạn bè đồng nghiệp.`,
  },

  {
    id: 'luc-si-tai-no-boc-thien-hinh',
    title: 'Lực Sĩ + Thiên Hình tại Nô Bộc - bạn xấu giang hồ',
    sao: ['Lực Sĩ'],
    cung: ['Nô Bộc'],
    ketHop: ['Thiên Hình'],
    doUuTien: 65,
    tomTat: `Khi Lực Sĩ đi cùng Thiên Hình tại Nô Bộc, đương số có nhiều bạn
xấu, giang hồ; cần cẩn thận bị ám hại, hành hung hoặc phản bội bởi chính
bạn bè đồng nghiệp.`,
  },

  {
    id: 'luc-si-tai-no-boc-dia-khong',
    title: 'Lực Sĩ + Địa Không tại Nô Bộc - bạn xấu giang hồ',
    sao: ['Lực Sĩ'],
    cung: ['Nô Bộc'],
    ketHop: ['Địa Không'],
    doUuTien: 65,
    tomTat: `Khi Lực Sĩ đi cùng Địa Không tại Nô Bộc, đương số có nhiều bạn
xấu, giang hồ; cần cẩn thận bị ám hại, hành hung hoặc phản bội bởi chính
bạn bè đồng nghiệp.`,
  },

  {
    id: 'luc-si-tai-no-boc-dia-kiep',
    title: 'Lực Sĩ + Địa Kiếp tại Nô Bộc - bạn xấu giang hồ',
    sao: ['Lực Sĩ'],
    cung: ['Nô Bộc'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 65,
    tomTat: `Khi Lực Sĩ đi cùng Địa Kiếp tại Nô Bộc, đương số có nhiều bạn
xấu, giang hồ; cần cẩn thận bị ám hại, hành hung hoặc phản bội bởi chính
bạn bè đồng nghiệp.`,
  },

  {
    id: 'luc-si-tai-no-boc-hoa-ky',
    title: 'Lực Sĩ + Hóa Kỵ tại Nô Bộc - bạn xấu giang hồ',
    sao: ['Lực Sĩ'],
    cung: ['Nô Bộc'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 65,
    tomTat: `Khi Lực Sĩ gặp Hóa Kỵ tại Nô Bộc, đương số có nhiều bạn xấu,
giang hồ; cần cẩn thận bị ám hại, hành hung hoặc phản bội bởi chính bạn bè
đồng nghiệp.`,
  },

  // ============================================================
  // 8. Lực Sĩ tại Thiên Di
  // ============================================================
  {
    id: 'luc-si-tai-thien-di',
    title: 'Lực Sĩ tại Thiên Di',
    sao: ['Lực Sĩ'],
    cung: ['Thiên Di'],
    doUuTien: 70,
    tomTat: `Khi Lực Sĩ cư Thiên Di, đương số ra ngoài tỏ ra thật thà, chân
chất và hay giúp đỡ người khác. Ra ngoài tuy vất vả nhưng vẫn mang hình ảnh
khỏe mạnh, nhanh nhẹn.`,
  },

  {
    id: 'luc-si-tai-thien-di-thien-tru',
    title: 'Lực Sĩ + Thiên Trù tại Thiên Di - đợi mời ăn nhậu',
    sao: ['Lực Sĩ'],
    cung: ['Thiên Di'],
    ketHop: ['Thiên Trù'],
    doUuTien: 65,
    tomTat: `Khi Lực Sĩ đi cùng Thiên Trù tại Thiên Di, đương số ra ngoài hay
đợi được người khác mời đi ăn nhậu.`,
  },

  {
    id: 'luc-si-tai-thien-di-loc-ta-huu',
    title: 'Lực Sĩ + Hóa Lộc + Tả Hữu tại Thiên Di - kết bạn nhiệt huyết',
    sao: ['Lực Sĩ'],
    cung: ['Thiên Di'],
    ketHop: ['Hóa Lộc', 'Tả Phù', 'Hữu Bật'],
    doUuTien: 65,
    tomTat: `Khi Lực Sĩ hội cùng Hóa Lộc, Tả Phù và Hữu Bật tại Thiên Di,
đương số nên ra ngoài giao lưu nhiều — đây là cơ hội kết bạn với những
người có chí khí, sức vóc và bầu nhiệt huyết.`,
  },

  // ============================================================
  // 9. Lực Sĩ tại Tật Ách
  // ============================================================
  {
    id: 'luc-si-tai-tat-ach',
    title: 'Lực Sĩ tại Tật Ách',
    sao: ['Lực Sĩ'],
    cung: ['Tật Ách'],
    doUuTien: 72,
    tomTat: `Khi Lực Sĩ cư Tật Ách, sao này làm gia tăng cường độ tật bệnh
của các sao đi cùng. Đặc trưng nổi bật là các vấn đề liên quan tới thừa
cân và ăn uống quá độ.`,
  },

  {
    id: 'luc-si-tai-tat-ach-da-la',
    title: 'Lực Sĩ + Đà La tại Tật Ách - bệnh dai dẳng',
    sao: ['Lực Sĩ'],
    cung: ['Tật Ách'],
    ketHop: ['Đà La'],
    doUuTien: 67,
    tomTat: `Khi Lực Sĩ đi cùng Đà La tại Tật Ách (sao chủ kéo dài), bệnh tật
của đương số trở nên dai dẳng và khó dứt.`,
  },

  {
    id: 'luc-si-tai-tat-ach-dia-kiep',
    title: 'Lực Sĩ + Địa Kiếp tại Tật Ách - bệnh dai dẳng',
    sao: ['Lực Sĩ'],
    cung: ['Tật Ách'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 67,
    tomTat: `Khi Lực Sĩ đi cùng Địa Kiếp tại Tật Ách (sao chủ kéo dài), bệnh
tật của đương số trở nên dai dẳng và khó dứt.`,
  },

  {
    id: 'luc-si-tai-tat-ach-tuan',
    title: 'Lực Sĩ + Tuần tại Tật Ách - bệnh dai dẳng',
    sao: ['Lực Sĩ'],
    cung: ['Tật Ách'],
    ketHop: ['Tuần'],
    doUuTien: 67,
    tomTat: `Khi Lực Sĩ đi cùng Tuần tại Tật Ách (sao chủ kéo dài), bệnh tật
của đương số trở nên dai dẳng và khó dứt.`,
  },

  {
    id: 'luc-si-tai-tat-ach-ta-phu',
    title: 'Lực Sĩ + Tả Phù tại Tật Ách - động lực chăm sóc sức khỏe',
    sao: ['Lực Sĩ'],
    cung: ['Tật Ách'],
    ketHop: ['Tả Phù'],
    doUuTien: 67,
    tomTat: `Khi Lực Sĩ đi cùng Tả Phù tại Tật Ách, đương số có động lực chăm
sóc sức khỏe; nhờ vậy ngoại hình và thể lực đều tốt.`,
  },

  {
    id: 'luc-si-tai-tat-ach-huu-bat',
    title: 'Lực Sĩ + Hữu Bật tại Tật Ách - động lực chăm sóc sức khỏe',
    sao: ['Lực Sĩ'],
    cung: ['Tật Ách'],
    ketHop: ['Hữu Bật'],
    doUuTien: 67,
    tomTat: `Khi Lực Sĩ đi cùng Hữu Bật tại Tật Ách, đương số có động lực chăm
sóc sức khỏe; nhờ vậy ngoại hình và thể lực đều tốt.`,
  },

  {
    id: 'luc-si-tai-tat-ach-hoa-quyen',
    title: 'Lực Sĩ + Hóa Quyền tại Tật Ách - động lực chăm sóc sức khỏe',
    sao: ['Lực Sĩ'],
    cung: ['Tật Ách'],
    ketHop: ['Hóa Quyền'],
    doUuTien: 67,
    tomTat: `Khi Lực Sĩ gặp Hóa Quyền tại Tật Ách, đương số có động lực chăm
sóc sức khỏe; nhờ vậy ngoại hình và thể lực đều tốt.`,
  },

  {
    id: 'luc-si-tai-tat-ach-thien-tru',
    title: 'Lực Sĩ + Thiên Trù tại Tật Ách - béo phì',
    sao: ['Lực Sĩ'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Trù'],
    doUuTien: 67,
    tomTat: `Khi Lực Sĩ đi cùng Thiên Trù tại Tật Ách (sao chủ ăn uống), đương
số cần đề phòng béo phì.`,
  },

  {
    id: 'luc-si-tai-tat-ach-thien-phu',
    title: 'Lực Sĩ + Thiên Phủ tại Tật Ách - béo phì',
    sao: ['Lực Sĩ'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Phủ'],
    doUuTien: 67,
    tomTat: `Khi Lực Sĩ đi cùng Thiên Phủ tại Tật Ách (sao chủ ăn uống), đương
số cần đề phòng béo phì.`,
  },

  // ============================================================
  // 10. Lực Sĩ tại Tài Bạch
  // ============================================================
  {
    id: 'luc-si-tai-tai-bach',
    title: 'Lực Sĩ tại Tài Bạch',
    sao: ['Lực Sĩ'],
    cung: ['Tài Bạch'],
    doUuTien: 72,
    tomTat: `Khi Lực Sĩ cư Tài Bạch, đương số kiếm tiền không mệt mỏi, chịu
khó, dùng sức lực và sức lao động để mưu sinh. Đặc trưng "một nắng hai
sương", dựa nhiều vào sức vóc bản thân.

Đương số ăn tiêu thoải mái, không có óc tính toán sâu nên hay tốn tiền cho
những mục đích cơ bản như ăn uống, chơi bời và nhậu nhẹt.`,
  },

  {
    id: 'luc-si-tai-tai-bach-dia-kiep',
    title: 'Lực Sĩ + Địa Kiếp tại Tài Bạch - tiêu hoang',
    sao: ['Lực Sĩ'],
    cung: ['Tài Bạch'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 67,
    tomTat: `Khi Lực Sĩ đi cùng Địa Kiếp tại Tài Bạch, đương số dễ tiêu pha
cho những mục đích không chính đáng như nhậu nhẹt, hưởng thụ.`,
  },

  {
    id: 'luc-si-tai-tai-bach-hoa-ky',
    title: 'Lực Sĩ + Hóa Kỵ tại Tài Bạch - tiêu hoang',
    sao: ['Lực Sĩ'],
    cung: ['Tài Bạch'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 67,
    tomTat: `Khi Lực Sĩ gặp Hóa Kỵ tại Tài Bạch, đương số dễ tiêu pha cho
những mục đích không chính đáng như nhậu nhẹt, hưởng thụ.`,
  },

  {
    id: 'luc-si-tai-tai-bach-hoa-tinh',
    title: 'Lực Sĩ + Hỏa Tinh tại Tài Bạch - tiêu hoang',
    sao: ['Lực Sĩ'],
    cung: ['Tài Bạch'],
    ketHop: ['Hỏa Tinh'],
    doUuTien: 67,
    tomTat: `Khi Lực Sĩ đi cùng Hỏa Tinh tại Tài Bạch, đương số dễ tiêu pha
cho những mục đích không chính đáng như nhậu nhẹt, hưởng thụ.`,
  },

  {
    id: 'luc-si-tai-tai-bach-linh-tinh',
    title: 'Lực Sĩ + Linh Tinh tại Tài Bạch - tiêu hoang',
    sao: ['Lực Sĩ'],
    cung: ['Tài Bạch'],
    ketHop: ['Linh Tinh'],
    doUuTien: 67,
    tomTat: `Khi Lực Sĩ đi cùng Linh Tinh tại Tài Bạch, đương số dễ tiêu pha
cho những mục đích không chính đáng như nhậu nhẹt, hưởng thụ.`,
  },

  {
    id: 'luc-si-tai-tai-bach-loc-van-xuong',
    title: 'Lực Sĩ + Hóa Lộc + Văn Xương tại Tài Bạch - tay chân + trí lực',
    sao: ['Lực Sĩ'],
    cung: ['Tài Bạch'],
    ketHop: ['Hóa Lộc', 'Văn Xương'],
    doUuTien: 67,
    tomTat: `Khi Lực Sĩ hội cùng Hóa Lộc và Văn Xương tại Tài Bạch, đương số
biết kết hợp lao động tay chân với trí lực; công việc nhờ thế mà nhẹ nhàng
hơn và dễ đạt thành tựu tài chính.`,
  },

  {
    id: 'luc-si-tai-tai-bach-loc-van-khuc',
    title: 'Lực Sĩ + Hóa Lộc + Văn Khúc tại Tài Bạch - tay chân + trí lực',
    sao: ['Lực Sĩ'],
    cung: ['Tài Bạch'],
    ketHop: ['Hóa Lộc', 'Văn Khúc'],
    doUuTien: 67,
    tomTat: `Khi Lực Sĩ hội cùng Hóa Lộc và Văn Khúc tại Tài Bạch, đương số
biết kết hợp lao động tay chân với trí lực; công việc nhờ thế mà nhẹ nhàng
hơn và dễ đạt thành tựu tài chính.`,
  },

  // ============================================================
  // 11. Lực Sĩ tại Tử Tức
  // ============================================================
  {
    id: 'luc-si-tai-tu-tuc',
    title: 'Lực Sĩ tại Tử Tức',
    sao: ['Lực Sĩ'],
    cung: ['Tử Tức'],
    doUuTien: 70,
    tomTat: `Khi Lực Sĩ cư Tử Tức, sao này làm gia tăng số lượng con — đương
số sinh con thuận lợi, "con đàn cháu đống", thúc đẩy sự kế thừa và phát
triển của gia tộc.

Con cái đương số phần lớn khỏe mạnh, tốt tính và đơn giản.`,
  },

  {
    id: 'luc-si-tai-tu-tuc-thien-khoi',
    title: 'Lực Sĩ + Thiên Khôi tại Tử Tức - hưng vượng',
    sao: ['Lực Sĩ'],
    cung: ['Tử Tức'],
    ketHop: ['Thiên Khôi'],
    doUuTien: 65,
    tomTat: `Khi Lực Sĩ đi cùng Thiên Khôi tại Tử Tức, ý nghĩa đông con càng
rõ rệt — đương số nhiều con và tất cả đều hưng vượng.`,
  },

  {
    id: 'luc-si-tai-tu-tuc-thien-viet',
    title: 'Lực Sĩ + Thiên Việt tại Tử Tức - hưng vượng',
    sao: ['Lực Sĩ'],
    cung: ['Tử Tức'],
    ketHop: ['Thiên Việt'],
    doUuTien: 65,
    tomTat: `Khi Lực Sĩ đi cùng Thiên Việt tại Tử Tức, ý nghĩa đông con càng
rõ rệt — đương số nhiều con và tất cả đều hưng vượng.`,
  },

  {
    id: 'luc-si-tai-tu-tuc-hoa-loc',
    title: 'Lực Sĩ + Hóa Lộc tại Tử Tức - hưng vượng',
    sao: ['Lực Sĩ'],
    cung: ['Tử Tức'],
    ketHop: ['Hóa Lộc'],
    doUuTien: 65,
    tomTat: `Khi Lực Sĩ gặp Hóa Lộc tại Tử Tức, ý nghĩa đông con càng rõ rệt
— đương số nhiều con và tất cả đều hưng vượng.`,
  },

  // ============================================================
  // 12. Lực Sĩ tại Phu Thê
  // ============================================================
  {
    id: 'luc-si-tai-phu-the',
    title: 'Lực Sĩ tại Phu Thê',
    sao: ['Lực Sĩ'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `Lực Sĩ cư Phu Thê không được đánh giá cao. Người hôn phối của
đương số dễ to lớn, có sức khỏe tốt và ăn khỏe.`,
  },

  {
    id: 'luc-si-phu-the-nam-menh',
    title: 'Lực Sĩ tại Phu Thê - Nam mệnh',
    sao: ['Lực Sĩ'],
    cung: ['Phu Thê'],
    gioiTinh: 'Nam',
    doUuTien: 70,
    tomTat: `Nam mệnh có Lực Sĩ tại Phu Thê thì người vợ thường vất vả lao
lực, theo thời gian dần giảm nhan sắc. Đương số khó giữ được sự mặn nồng
như buổi đầu, vì lo mưu sinh nên cũng khó giữ ngọn lửa tình cảm trong gia
đình.`,
  },

  {
    id: 'luc-si-phu-the-nu-bao-hanh',
    title: 'Lực Sĩ + sát tinh tại Phu Thê - Nữ mệnh bạo hành',
    sao: ['Lực Sĩ'],
    cung: ['Phu Thê'],
    gioiTinh: 'Nữ',
    ketHop: ['Thiên Hình', 'Địa Không', 'Địa Kiếp', 'Kình Dương', 'Đà La', 'Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `Nữ mệnh có Lực Sĩ tại Phu Thê hội cùng Thiên Hình, Địa Không,
Địa Kiếp, Kình Dương, Đà La hoặc Hóa Kỵ cần hết sức cẩn trọng nguy cơ bạo
hành gia đình, đặc biệt là bạo hành thể xác.`,
  },

  // ============================================================
  // 13. Lực Sĩ tại Huynh Đệ
  // ============================================================
  {
    id: 'luc-si-tai-huynh-de',
    title: 'Lực Sĩ tại Huynh Đệ',
    sao: ['Lực Sĩ'],
    cung: ['Huynh Đệ'],
    doUuTien: 70,
    tomTat: `Khi Lực Sĩ cư Huynh Đệ, số lượng anh chị em của đương số tăng
lên, trong số đó nhiều người to lớn và khỏe mạnh.`,
  },

  {
    id: 'luc-si-tai-huynh-de-luc-cat',
    title: 'Lực Sĩ + Lục Cát tại Huynh Đệ - gắn bó',
    sao: ['Lực Sĩ'],
    cung: ['Huynh Đệ'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 65,
    tomTat: `Khi Lực Sĩ hội cùng các cát tinh như Tả Phù, Hữu Bật, Văn Xương,
Văn Khúc, Thiên Khôi hay Thiên Việt tại Huynh Đệ, anh chị em của đương số
gắn bó bền vững, trở thành chỗ dựa che chở cho nhau khi gặp khó khăn.`,
  },

  {
    id: 'luc-si-tai-huynh-de-tu-sat',
    title: 'Lực Sĩ + Tứ Sát tại Huynh Đệ - mâu thuẫn',
    sao: ['Lực Sĩ'],
    cung: ['Huynh Đệ'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 65,
    tomTat: `Khi Lực Sĩ hội cùng Kình Dương, Đà La, Hỏa Tinh hoặc Linh Tinh
tại Huynh Đệ, anh em đương số dễ rơi vào cảnh "trâu buộc ghét trâu ăn" —
mâu thuẫn, thậm chí bắt nạt nhau.`,
  },

  {
    id: 'luc-si-tai-huynh-de-thien-hinh',
    title: 'Lực Sĩ + Thiên Hình tại Huynh Đệ - mâu thuẫn',
    sao: ['Lực Sĩ'],
    cung: ['Huynh Đệ'],
    ketHop: ['Thiên Hình'],
    doUuTien: 65,
    tomTat: `Khi Lực Sĩ đi cùng Thiên Hình tại Huynh Đệ, anh em đương số dễ
rơi vào cảnh "trâu buộc ghét trâu ăn" — mâu thuẫn, thậm chí bắt nạt nhau.`,
  },

  {
    id: 'luc-si-tai-huynh-de-hoa-ky',
    title: 'Lực Sĩ + Hóa Kỵ tại Huynh Đệ - mâu thuẫn',
    sao: ['Lực Sĩ'],
    cung: ['Huynh Đệ'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 65,
    tomTat: `Khi Lực Sĩ gặp Hóa Kỵ tại Huynh Đệ, anh em đương số dễ rơi vào
cảnh "trâu buộc ghét trâu ăn" — mâu thuẫn, thậm chí bắt nạt nhau.`,
  },

  // ============================================================
  // 14. Lực Sĩ + Thiên Mã - vừa dũng vừa mưu
  // ============================================================
  {
    id: 'luc-si-thien-ma',
    title: 'Lực Sĩ + Thiên Mã - Vừa dũng vừa mưu',
    sao: ['Lực Sĩ'],
    ketHop: ['Thiên Mã'],
    doUuTien: 60,
    tomTat: `Khi Lực Sĩ đi cùng Thiên Mã, đương số là kiểu người năng động,
tài năng và có sức khỏe vật chất. Đây là bộ sao cần thiết giúp đương số dễ
thành công khi vừa có dũng vừa có mưu.

Khi vào hạn, Lực Sĩ đi với Thiên Mã báo hiệu thời vận tốt sắp tới.`,
  },

  // ============================================================
  // 15. Lực Sĩ + Thiên Hình / Bạch Hổ - chí khí sắt đá
  // ============================================================
  {
    id: 'luc-si-thien-hinh-bach-ho',
    title: 'Lực Sĩ + Thiên Hình / Bạch Hổ - Chí khí sắt đá',
    sao: ['Lực Sĩ'],
    ketHop: ['Thiên Hình', 'Bạch Hổ'],
    doUuTien: 58,
    tomTat: `Khi Lực Sĩ đi cùng Thiên Hình hoặc Bạch Hổ, đương số có chí khí
sắt đá, mạnh mẽ, mang dáng dấp hiên ngang của bậc đàn ông đúng nghĩa. Đây
là mẫu người tướng quân, dũng tướng — có cả sức mạnh lẫn uy nghiêm.`,
  },

  {
    id: 'luc-si-thien-hinh-suc-manh',
    title: 'Lực Sĩ + Thiên Hình - sức mạnh uy nghiêm',
    sao: ['Lực Sĩ'],
    ketHop: ['Thiên Hình'],
    doUuTien: 53,
    tomTat: `Khi Lực Sĩ đi cùng Thiên Hình, đương số thể hiện rõ sức mạnh, uy
nghiêm, hơi khó tính và có phần dũng mãnh.`,
  },

  // ============================================================
  // 16. Lực Sĩ + Kình Dương - cương quá thì gãy
  // ============================================================
  {
    id: 'luc-si-kinh-duong',
    title: 'Lực Sĩ + Kình Dương - "Cương quá thì gãy"',
    sao: ['Lực Sĩ'],
    ketHop: ['Kình Dương'],
    doUuTien: 60,
    tomTat: `Khi Lực Sĩ đi cùng Kình Dương, tính cương cường của đương số trở
nên thái quá và gây bất cập. Đương số mạnh bạo không có điểm dừng, dễ gây
hiểm họa — đúng câu "cương quá thì gãy".

Một ý nghĩa khác: đương số có tài năng, có công lao nhưng không được sử
dụng hay ban thưởng, từ đó sinh ra bất mãn.`,
  },

  // ============================================================
  // 17. Lực Sĩ + Tuần Triệt - đau ốm mất sức
  // ============================================================
  {
    id: 'luc-si-tuan-triet',
    title: 'Lực Sĩ + Tuần Triệt - Có sức khỏe nhưng hay đau ốm',
    sao: ['Lực Sĩ'],
    ketHop: ['Tuần', 'Triệt'],
    doUuTien: 58,
    tomTat: `Khi Lực Sĩ gặp Tuần hoặc Triệt, đương số có sức khỏe nhưng hay
đau ốm và mất sức. Lực Sĩ vốn chủ sức mạnh, song Tuần Triệt bẻ gãy sức mạnh
ấy: đương số bề ngoài trông khỏe nhưng thực tế suy nhược, dễ ốm vặt và mất
sức không rõ nguyên nhân.`,
  },

  // ============================================================
  // 18. Lực Sĩ + Phục Binh + Thiên Hình - mưu mô nham hiểm
  // ============================================================
  {
    id: 'luc-si-phuc-binh-thien-hinh',
    title: 'Lực Sĩ + Phục Binh + Thiên Hình - Mưu mô nham hiểm',
    sao: ['Lực Sĩ'],
    ketHop: ['Phục Binh', 'Thiên Hình'],
    doUuTien: 60,
    tomTat: `Khi Lực Sĩ hội cùng Phục Binh và Thiên Hình, đương số dùng sức
khỏe để làm việc phi pháp, gian manh, mưu mô nham hiểm. Sức mạnh chuyển
hóa thành bạo lực xấu — đương số có thể trở thành giang hồ, ác bá, dùng vũ
lực trong những việc khuất tất.`,
  },

  // ============================================================
  // 19. Lực Sĩ + Phục Binh + Kiếp + Kỵ - có tài không được trọng dụng
  // ============================================================
  {
    id: 'luc-si-phuc-kiep-ky',
    title: 'Lực Sĩ + Phục Binh + Địa Kiếp + Hóa Kỵ - Có tài không được trọng dụng',
    sao: ['Lực Sĩ'],
    ketHop: ['Phục Binh', 'Địa Kiếp', 'Hóa Kỵ'],
    doUuTien: 60,
    tomTat: `Khi Lực Sĩ hội cùng Phục Binh, Địa Kiếp và Hóa Kỵ, chủ mệnh có
tài năng mà không được trọng dụng — đúng cảnh "ngọc lành chẳng khéo tay
thợ". Đương số:

- Có chí, có sức, có khả năng gánh vác
- Nhưng đường công danh bị chặn đứng
- Cấp trên không nâng đỡ, quý nhân không xuất hiện

Nếu thêm cha mẹ không thể giúp đỡ, số phận đương số càng thêm long đong.`,
  },

  // ============================================================
  // 20. Lực Sĩ + Tử Bệnh Hao Phá - ốm đau mất sức
  // ============================================================
  {
    id: 'luc-si-tu-benh-hao-pha',
    title: 'Lực Sĩ + Tử / Bệnh Phù / Hao / Phá - Ốm đau mất sức',
    sao: ['Lực Sĩ'],
    ketHop: ['Tử', 'Bệnh Phù', 'Đại Hao', 'Tiểu Hao', 'Phá Toái'],
    doUuTien: 58,
    tomTat: `Khi Lực Sĩ hội cùng Tử, Bệnh Phù, Đại Hao, Tiểu Hao hay Phá
Toái, sức khỏe đương số giảm sút, thân thể yếu. Đương số như "người vừa ốm
dậy" — dù được cứu giải cũng chẳng còn sung sức như xưa.

Lời khuyên cho đương số là tập trung dưỡng bệnh, tăng cường thể lực và bồi
bổ cho cơ thể.`,
  },

  // ============================================================
  // 21. Lực Sĩ + Kiếp Hỏa Đà Kỵ - làm ăn mờ ám
  // ============================================================
  {
    id: 'luc-si-kiep-hoa-da-ky',
    title: 'Lực Sĩ + Kiếp / Hỏa / Đà / Kỵ - Làm ăn mờ ám',
    sao: ['Lực Sĩ'],
    ketHop: ['Địa Kiếp', 'Hỏa Tinh', 'Đà La', 'Hóa Kỵ'],
    doUuTien: 60,
    tomTat: `Khi Lực Sĩ hội cùng Địa Kiếp, Hỏa Tinh, Đà La và Hóa Kỵ, sức
mạnh trở thành liều lĩnh, dễ đưa đương số vào con đường làm ăn mờ ám. Tâm
lý đương số nghĩ mình có sức, có khả năng kiểm soát mọi việc nên không
ngại chọn đường tắt và chấp nhận rủi ro cao.

"Tham thì thâm" — càng liều lĩnh càng dễ vướng họa: hao tán tiền của, mất
uy tín và danh dự.`,
  },

  // ============================================================
  // 22. Lực Sĩ vào hạn
  // ============================================================
  {
    id: 'luc-si-vao-han',
    title: 'Lực Sĩ vào hạn',
    sao: ['Lực Sĩ'],
    doUuTien: 50,
    tomTat: `Hạn có Lực Sĩ là hạn của hành động, sức khỏe và công việc tay
chân. Đương số cần rèn tính kiên nhẫn, tránh nóng vội — sức mạnh nếu không
tiết chế dễ biến thành gánh nặng, khiến cuộc sống lao đao.`,
  },

  {
    id: 'luc-si-han-thien-ma',
    title: 'Hạn Lực Sĩ + Thiên Mã - thời vận tốt',
    sao: ['Lực Sĩ'],
    ketHop: ['Thiên Mã'],
    doUuTien: 45,
    tomTat: `Khi hạn có Lực Sĩ đi cùng Thiên Mã, đương số gặp thời vận tốt.`,
  },

  {
    id: 'luc-si-han-thien-tru',
    title: 'Hạn Lực Sĩ + Thiên Trù - mời ăn uống',
    sao: ['Lực Sĩ'],
    ketHop: ['Thiên Trù'],
    doUuTien: 45,
    tomTat: `Khi hạn có Lực Sĩ đi cùng Thiên Trù, đương số được mời ăn uống
linh đình.`,
  },
];
