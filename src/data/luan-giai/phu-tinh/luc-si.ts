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
    tomTat: `**Lực Sĩ** — sao **võ cách** trong **vòng Lộc Tồn / Bác Sĩ** (vị trí
**thứ 2**, sau Bác Sĩ).

**Ngũ hành:** **Hỏa**.

**Đặc tính:** **sức mạnh, to lớn, dũng mãnh, can đảm, uy quyền**.

⚡ **Bản chất:**
- Thiên về **sức mạnh vật chất, hình thể, tay chân**
- Có thiên hướng **võ cách hơn văn cách**
- Có khả năng **gia tăng vật chất, khối lượng, số lượng** khi đi cùng sao khác
  (ví dụ: gia tăng số con khi ở Tử Tức, gia tăng số bạn ở Nô Bộc...)

**Quy luật chung:**
- 🌟 Gặp nhiều **sao tốt** → Lực Sĩ làm **TỐT THÊM** (sức khỏe + chất lượng)
- ⚠️ Gặp nhiều **sao xấu** → tác họa **XẤU HƠN, NHANH HƠN, NGUY HIỂM HƠN**`,
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
    tomTat: `🌟 **Lực Sĩ thủ Mệnh:** người **CƯỜNG TRÁNG, vạm vỡ, sức vóc PHI
THƯỜNG**.

**Tướng mạo:** sức vóc khỏe mạnh, **ăn uống khỏe**, thân hình **vạm vỡ**.

**Tính cách:**
- **Nhanh nhẹn, can đảm**, mạnh bạo
- **Ưa làm trước, nghĩ sau** → dễ bị **lừa gạt**
- **Thật thà, tốt tính**, có **uy quyền, uy lực**, hay **giúp đỡ người khác**

⚡ **Đặc trưng ăn nhậu:** "ăn được ngủ được là tiên" rất đúng với Lực Sĩ.`,
  },

  {
    id: 'luc-si-tai-menh-thien-dong',
    title: 'Lực Sĩ + Thiên Đồng tại Mệnh - ăn khỏe',
    sao: ['Lực Sĩ'],
    cung: ['Mệnh'],
    ketHop: ['Thiên Đồng'],
    doUuTien: 73,
    tomTat: `🌟 **Lực Sĩ + Thiên Đồng tại Mệnh:** **ăn khỏe**, thích **ăn uống
nhậu nhẹt tiệc tùng**.`,
  },

  {
    id: 'luc-si-tai-menh-tham-lang',
    title: 'Lực Sĩ + Tham Lang tại Mệnh - ăn khỏe',
    sao: ['Lực Sĩ'],
    cung: ['Mệnh'],
    ketHop: ['Tham Lang'],
    doUuTien: 73,
    tomTat: `🌟 **Lực Sĩ + Tham Lang tại Mệnh:** **ăn khỏe**, thích **ăn uống
nhậu nhẹt tiệc tùng**.`,
  },

  {
    id: 'luc-si-tai-menh-liem-trinh',
    title: 'Lực Sĩ + Liêm Trinh tại Mệnh - ăn khỏe',
    sao: ['Lực Sĩ'],
    cung: ['Mệnh'],
    ketHop: ['Liêm Trinh'],
    doUuTien: 73,
    tomTat: `🌟 **Lực Sĩ + Liêm Trinh tại Mệnh:** **ăn khỏe**, thích **ăn uống
nhậu nhẹt tiệc tùng**.`,
  },

  {
    id: 'luc-si-tai-menh-thien-tru',
    title: 'Lực Sĩ + Thiên Trù tại Mệnh - ăn khỏe',
    sao: ['Lực Sĩ'],
    cung: ['Mệnh'],
    ketHop: ['Thiên Trù'],
    doUuTien: 73,
    tomTat: `🌟 **Lực Sĩ + Thiên Trù tại Mệnh:** **ăn khỏe**, thích **ăn uống
nhậu nhẹt tiệc tùng**.`,
  },

  {
    id: 'luc-si-tai-menh-hoa-loc',
    title: 'Lực Sĩ + Hóa Lộc tại Mệnh - sành ăn',
    sao: ['Lực Sĩ'],
    cung: ['Mệnh'],
    ketHop: ['Hóa Lộc'],
    doUuTien: 73,
    tomTat: `🌟 **Lực Sĩ + Hóa Lộc tại Mệnh:** càng **sành ăn**, **thích ăn ngon
ăn nhiều**, tìm lạc thú trong sự ăn uống → "cao thủ" trong tiệc tùng.`,
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
    tomTat: `**Lực Sĩ cư Phụ Mẫu:** cha mẹ là người **có sức khỏe, cao lớn, chịu
khó làm ăn**, không nề hà việc lớn bé.

⚠️ **Không có quyền tinh:** cha mẹ chịu thương chịu khó, **"bán mặt cho đất,
bán lưng cho trời"**, thường xuất thân **nông dân hoặc buôn bán nhỏ**.

⚠️ Khi có thêm sao phá tài: cha mẹ phải **lao lực kiếm tiền**, ít thời gian
chăm con → tình cảm gia đình khó trọn vẹn.`,
  },

  {
    id: 'luc-si-tai-phu-mau-phong-cao',
    title: 'Lực Sĩ + Phong Cáo tại Phụ Mẫu - võ nghiệp',
    sao: ['Lực Sĩ'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Phong Cáo'],
    doUuTien: 65,
    tomTat: `🌟 **Lực Sĩ + Phong Cáo tại Phụ Mẫu:** cha mẹ làm **võ nghiệp, quân
nhân, sĩ quan, an ninh**.`,
  },

  {
    id: 'luc-si-tai-phu-mau-hoa-quyen',
    title: 'Lực Sĩ + Hóa Quyền tại Phụ Mẫu - võ nghiệp',
    sao: ['Lực Sĩ'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Hóa Quyền'],
    doUuTien: 65,
    tomTat: `🌟 **Lực Sĩ + Hóa Quyền tại Phụ Mẫu:** cha mẹ làm **võ nghiệp, quân
nhân, sĩ quan, an ninh**.`,
  },

  {
    id: 'luc-si-tai-phu-mau-ta-phu',
    title: 'Lực Sĩ + Tả Phù tại Phụ Mẫu - võ nghiệp',
    sao: ['Lực Sĩ'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Tả Phù'],
    doUuTien: 65,
    tomTat: `🌟 **Lực Sĩ + Tả Phù tại Phụ Mẫu:** cha mẹ làm **võ nghiệp, quân
nhân, sĩ quan, an ninh**.`,
  },

  {
    id: 'luc-si-tai-phu-mau-huu-bat',
    title: 'Lực Sĩ + Hữu Bật tại Phụ Mẫu - võ nghiệp',
    sao: ['Lực Sĩ'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Hữu Bật'],
    doUuTien: 65,
    tomTat: `🌟 **Lực Sĩ + Hữu Bật tại Phụ Mẫu:** cha mẹ làm **võ nghiệp, quân
nhân, sĩ quan, an ninh**.`,
  },

  {
    id: 'luc-si-tai-phu-mau-an-quang',
    title: 'Lực Sĩ + Ân Quang tại Phụ Mẫu - võ nghiệp',
    sao: ['Lực Sĩ'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Ân Quang'],
    doUuTien: 65,
    tomTat: `🌟 **Lực Sĩ + Ân Quang tại Phụ Mẫu:** cha mẹ làm **võ nghiệp, quân
nhân, sĩ quan, an ninh**.`,
  },

  {
    id: 'luc-si-tai-phu-mau-thien-quy',
    title: 'Lực Sĩ + Thiên Quý tại Phụ Mẫu - võ nghiệp',
    sao: ['Lực Sĩ'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Thiên Quý'],
    doUuTien: 65,
    tomTat: `🌟 **Lực Sĩ + Thiên Quý tại Phụ Mẫu:** cha mẹ làm **võ nghiệp, quân
nhân, sĩ quan, an ninh**.`,
  },

  {
    id: 'luc-si-tai-phu-mau-thien-viet',
    title: 'Lực Sĩ + Thiên Việt tại Phụ Mẫu - võ nghiệp',
    sao: ['Lực Sĩ'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Thiên Việt'],
    doUuTien: 65,
    tomTat: `🌟 **Lực Sĩ + Thiên Việt tại Phụ Mẫu:** cha mẹ làm **võ nghiệp, quân
nhân, sĩ quan, an ninh**.`,
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
    tomTat: `**Lực Sĩ cư Phúc Đức:** dòng họ có **gen khỏe mạnh, to lớn**, sức
bền tốt. Tính tình **thẳng thắn, không che giấu**.

🌟 **Mồ mả các cụ to, bề thế**.`,
  },

  {
    id: 'luc-si-tai-phuc-duc-trang-sinh',
    title: 'Lực Sĩ + Tràng Sinh tại Phúc Đức - sống thọ',
    sao: ['Lực Sĩ'],
    cung: ['Phúc Đức'],
    ketHop: ['Tràng Sinh'],
    doUuTien: 67,
    tomTat: `🌟 **Lực Sĩ + Tràng Sinh tại Phúc Đức:** dòng họ **TỐT PHÚC**, nhiều
người **SỐNG THỌ**.`,
  },

  {
    id: 'luc-si-tai-phuc-duc-an-quang',
    title: 'Lực Sĩ + Ân Quang tại Phúc Đức - sống thọ',
    sao: ['Lực Sĩ'],
    cung: ['Phúc Đức'],
    ketHop: ['Ân Quang'],
    doUuTien: 67,
    tomTat: `🌟 **Lực Sĩ + Ân Quang tại Phúc Đức:** dòng họ **TỐT PHÚC**, nhiều
người **SỐNG THỌ**.`,
  },

  {
    id: 'luc-si-tai-phuc-duc-thien-quy',
    title: 'Lực Sĩ + Thiên Quý tại Phúc Đức - sống thọ',
    sao: ['Lực Sĩ'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Quý'],
    doUuTien: 67,
    tomTat: `🌟 **Lực Sĩ + Thiên Quý tại Phúc Đức:** dòng họ **TỐT PHÚC**, nhiều
người **SỐNG THỌ**.`,
  },

  {
    id: 'luc-si-tai-phuc-duc-thien-tho',
    title: 'Lực Sĩ + Thiên Thọ tại Phúc Đức - sống thọ',
    sao: ['Lực Sĩ'],
    cung: ['Phúc Đức'],
    ketHop: ['Thiên Thọ'],
    doUuTien: 67,
    tomTat: `🌟 **Lực Sĩ + Thiên Thọ tại Phúc Đức:** dòng họ **TỐT PHÚC**, nhiều
người **SỐNG THỌ**.`,
  },

  {
    id: 'luc-si-tai-phuc-duc-ta-huu-linh-da',
    title: 'Lực Sĩ + Tả Hữu + Linh Tinh + Đà La tại Phúc Đức - bậc vĩ nhân',
    sao: ['Lực Sĩ'],
    cung: ['Phúc Đức'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Linh Tinh', 'Đà La'],
    doUuTien: 67,
    tomTat: `🌟 **Lực Sĩ + Tả Phù + Hữu Bật + Linh Tinh + Đà La tại Phúc Đức:**
đương số hình thành **khí chất KIÊN ĐỊNH**, mang tinh thần **bậc vĩ nhân**,
**"dùi mài kinh sử"** đến ngày thành công.`,
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
    tomTat: `**Lực Sĩ cư Điền:** nhà **TO, CAO, RỘNG**, được gia cố tốt và **chắc
chắn** dù không quá sang trọng.

⚡ Lực Sĩ chủ về **khối lượng, vật chất** → tuy nhà to cao nhưng **chưa chắc
đẹp và sang**.

🌟 Sống ở nơi dễ gặp **địa chấn**, Lực Sĩ + **Hóa Khoa / Khôi Việt / Quang Quý
/ Tả Phù / Hữu Bật:** giúp **TRÁNH SỤP ĐỔ**, tai họa.`,
  },

  {
    id: 'luc-si-tai-dien-trach-hoa-tinh',
    title: 'Lực Sĩ + Hỏa Tinh tại Điền Trạch - tai nạn không gian kiên cố',
    sao: ['Lực Sĩ'],
    cung: ['Điền Trạch'],
    ketHop: ['Hỏa Tinh'],
    doUuTien: 65,
    tomTat: `⚠️ **Lực Sĩ + Hỏa Tinh tại Điền Trạch:** cẩn trọng nguy cơ **mắc kẹt
hoặc tai nạn** trong những không gian kiên cố.`,
  },

  {
    id: 'luc-si-tai-dien-trach-dia-kiep',
    title: 'Lực Sĩ + Địa Kiếp tại Điền Trạch - tai nạn không gian kiên cố',
    sao: ['Lực Sĩ'],
    cung: ['Điền Trạch'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 65,
    tomTat: `⚠️ **Lực Sĩ + Địa Kiếp tại Điền Trạch:** cẩn trọng nguy cơ **mắc kẹt
hoặc tai nạn** trong những không gian kiên cố.`,
  },

  {
    id: 'luc-si-tai-dien-trach-da-la',
    title: 'Lực Sĩ + Đà La tại Điền Trạch - tai nạn không gian kiên cố',
    sao: ['Lực Sĩ'],
    cung: ['Điền Trạch'],
    ketHop: ['Đà La'],
    doUuTien: 65,
    tomTat: `⚠️ **Lực Sĩ + Đà La tại Điền Trạch:** cẩn trọng nguy cơ **mắc kẹt
hoặc tai nạn** trong những không gian kiên cố.`,
  },

  {
    id: 'luc-si-tai-dien-trach-tu',
    title: 'Lực Sĩ + Tử tại Điền Trạch - tai nạn không gian kiên cố',
    sao: ['Lực Sĩ'],
    cung: ['Điền Trạch'],
    ketHop: ['Tử'],
    doUuTien: 65,
    tomTat: `⚠️ **Lực Sĩ + Tử tại Điền Trạch:** cẩn trọng nguy cơ **mắc kẹt
hoặc tai nạn** trong những không gian kiên cố.`,
  },

  {
    id: 'luc-si-tai-dien-trach-tuan',
    title: 'Lực Sĩ + Tuần tại Điền Trạch - tai nạn không gian kiên cố',
    sao: ['Lực Sĩ'],
    cung: ['Điền Trạch'],
    ketHop: ['Tuần'],
    doUuTien: 65,
    tomTat: `⚠️ **Lực Sĩ + Tuần tại Điền Trạch:** cẩn trọng nguy cơ **mắc kẹt
hoặc tai nạn** trong những không gian kiên cố.`,
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
    tomTat: `🌟 **Lực Sĩ cư Quan:** người **không nề hà công việc**, sẵn sàng
làm bất cứ việc gì được giao, **làm việc không biết mệt mỏi**.

🌟 **Phù hợp:**
- **Võ nghiệp, quân đội, công an, an ninh**
- **Thể thao**
- Ngành nghề yêu cầu **THỂ LỰC LỚN** (lao động chân tay, kỹ thuật nặng)`,
  },

  {
    id: 'luc-si-tai-quan-loc-van-tinh',
    title: 'Lực Sĩ + Văn tinh tại Quan Lộc - sức + trí cân bằng',
    sao: ['Lực Sĩ'],
    cung: ['Quan Lộc'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Lưu Niên Văn Tinh', 'Hóa Khoa'],
    doUuTien: 70,
    tomTat: `🌟 **Lực Sĩ + Văn Xương / Văn Khúc / Lưu Niên Văn Tinh / Hóa Khoa
tại Quan Lộc:** công việc vừa cần **sức** vừa cần **trí** → tạo cân bằng hài
hòa.`,
  },

  {
    id: 'luc-si-tai-quan-loc-that-sat-ky-hinh',
    title: 'Lực Sĩ + Thất Sát + Hóa Kỵ + Thiên Hình tại Quan Lộc - lao lực sinh bệnh',
    sao: ['Lực Sĩ'],
    cung: ['Quan Lộc'],
    ketHop: ['Thất Sát', 'Hóa Kỵ', 'Thiên Hình'],
    doUuTien: 70,
    tomTat: `⚠️ **Lực Sĩ + Thất Sát + Hóa Kỵ + Thiên Hình tại Quan Lộc:** cần xem
thêm sao chủ tật bệnh — công việc có thể khiến sức khỏe **suy giảm**, **"làm
việc quên thân" mà sinh bệnh**.`,
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
    tomTat: `**Lực Sĩ cư Nô:** **tăng SỐ LƯỢNG bạn bè**.`,
  },

  {
    id: 'luc-si-tai-no-boc-ta-phu',
    title: 'Lực Sĩ + Tả Phù tại Nô Bộc - bạn bè chất lượng',
    sao: ['Lực Sĩ'],
    cung: ['Nô Bộc'],
    ketHop: ['Tả Phù'],
    doUuTien: 65,
    tomTat: `🌟 **Lực Sĩ + Tả Phù tại Nô Bộc:** bạn bè **ít nhưng CHẤT LƯỢNG**,
kết giao với người **tử tế, thật lòng**.`,
  },

  {
    id: 'luc-si-tai-no-boc-huu-bat',
    title: 'Lực Sĩ + Hữu Bật tại Nô Bộc - bạn bè chất lượng',
    sao: ['Lực Sĩ'],
    cung: ['Nô Bộc'],
    ketHop: ['Hữu Bật'],
    doUuTien: 65,
    tomTat: `🌟 **Lực Sĩ + Hữu Bật tại Nô Bộc:** bạn bè **ít nhưng CHẤT LƯỢNG**,
kết giao với người **tử tế, thật lòng**.`,
  },

  {
    id: 'luc-si-tai-no-boc-an-quang',
    title: 'Lực Sĩ + Ân Quang tại Nô Bộc - bạn bè chất lượng',
    sao: ['Lực Sĩ'],
    cung: ['Nô Bộc'],
    ketHop: ['Ân Quang'],
    doUuTien: 65,
    tomTat: `🌟 **Lực Sĩ + Ân Quang tại Nô Bộc:** bạn bè **ít nhưng CHẤT LƯỢNG**,
kết giao với người **tử tế, thật lòng**.`,
  },

  {
    id: 'luc-si-tai-no-boc-thien-quy',
    title: 'Lực Sĩ + Thiên Quý tại Nô Bộc - bạn bè chất lượng',
    sao: ['Lực Sĩ'],
    cung: ['Nô Bộc'],
    ketHop: ['Thiên Quý'],
    doUuTien: 65,
    tomTat: `🌟 **Lực Sĩ + Thiên Quý tại Nô Bộc:** bạn bè **ít nhưng CHẤT LƯỢNG**,
kết giao với người **tử tế, thật lòng**.`,
  },

  {
    id: 'luc-si-tai-no-boc-thien-khoi',
    title: 'Lực Sĩ + Thiên Khôi tại Nô Bộc - bạn bè chất lượng',
    sao: ['Lực Sĩ'],
    cung: ['Nô Bộc'],
    ketHop: ['Thiên Khôi'],
    doUuTien: 65,
    tomTat: `🌟 **Lực Sĩ + Thiên Khôi tại Nô Bộc:** bạn bè **ít nhưng CHẤT LƯỢNG**,
kết giao với người **tử tế, thật lòng**.`,
  },

  {
    id: 'luc-si-tai-no-boc-thien-viet',
    title: 'Lực Sĩ + Thiên Việt tại Nô Bộc - bạn bè chất lượng',
    sao: ['Lực Sĩ'],
    cung: ['Nô Bộc'],
    ketHop: ['Thiên Việt'],
    doUuTien: 65,
    tomTat: `🌟 **Lực Sĩ + Thiên Việt tại Nô Bộc:** bạn bè **ít nhưng CHẤT LƯỢNG**,
kết giao với người **tử tế, thật lòng**.`,
  },

  {
    id: 'luc-si-tai-no-boc-thien-tru',
    title: 'Lực Sĩ + Thiên Trù tại Nô Bộc - rủ ăn nhậu',
    sao: ['Lực Sĩ'],
    cung: ['Nô Bộc'],
    ketHop: ['Thiên Trù'],
    doUuTien: 65,
    tomTat: `🌟 **Lực Sĩ + Thiên Trù tại Nô Bộc:** hay được bạn bè **rủ đi ăn
nhậu**, cơ hội tốt nảy nở **trên bàn tiệc** (đặc biệt + sao Lộc).`,
  },

  {
    id: 'luc-si-tai-no-boc-kinh-duong',
    title: 'Lực Sĩ + Kình Dương tại Nô Bộc - bạn xấu giang hồ',
    sao: ['Lực Sĩ'],
    cung: ['Nô Bộc'],
    ketHop: ['Kình Dương'],
    doUuTien: 65,
    tomTat: `⚠️ **Lực Sĩ + Kình Dương tại Nô Bộc:** **nhiều bạn xấu, giang hồ**
→ cẩn thận **bị ám hại, hành hung, phản bội** bởi bạn bè đồng nghiệp.`,
  },

  {
    id: 'luc-si-tai-no-boc-thien-hinh',
    title: 'Lực Sĩ + Thiên Hình tại Nô Bộc - bạn xấu giang hồ',
    sao: ['Lực Sĩ'],
    cung: ['Nô Bộc'],
    ketHop: ['Thiên Hình'],
    doUuTien: 65,
    tomTat: `⚠️ **Lực Sĩ + Thiên Hình tại Nô Bộc:** **nhiều bạn xấu, giang hồ**
→ cẩn thận **bị ám hại, hành hung, phản bội** bởi bạn bè đồng nghiệp.`,
  },

  {
    id: 'luc-si-tai-no-boc-dia-khong',
    title: 'Lực Sĩ + Địa Không tại Nô Bộc - bạn xấu giang hồ',
    sao: ['Lực Sĩ'],
    cung: ['Nô Bộc'],
    ketHop: ['Địa Không'],
    doUuTien: 65,
    tomTat: `⚠️ **Lực Sĩ + Địa Không tại Nô Bộc:** **nhiều bạn xấu, giang hồ**
→ cẩn thận **bị ám hại, hành hung, phản bội** bởi bạn bè đồng nghiệp.`,
  },

  {
    id: 'luc-si-tai-no-boc-dia-kiep',
    title: 'Lực Sĩ + Địa Kiếp tại Nô Bộc - bạn xấu giang hồ',
    sao: ['Lực Sĩ'],
    cung: ['Nô Bộc'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 65,
    tomTat: `⚠️ **Lực Sĩ + Địa Kiếp tại Nô Bộc:** **nhiều bạn xấu, giang hồ**
→ cẩn thận **bị ám hại, hành hung, phản bội** bởi bạn bè đồng nghiệp.`,
  },

  {
    id: 'luc-si-tai-no-boc-hoa-ky',
    title: 'Lực Sĩ + Hóa Kỵ tại Nô Bộc - bạn xấu giang hồ',
    sao: ['Lực Sĩ'],
    cung: ['Nô Bộc'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 65,
    tomTat: `⚠️ **Lực Sĩ + Hóa Kỵ tại Nô Bộc:** **nhiều bạn xấu, giang hồ** →
cẩn thận **bị ám hại, hành hung, phản bội** bởi bạn bè đồng nghiệp.`,
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
    tomTat: `**Lực Sĩ cư Thiên Di:** người ra ngoài **THẬT THÀ, chân chất**, hay
**giúp đỡ người khác**.

⚡ Ra ngoài **vất vả** nhưng mang hình ảnh **khỏe mạnh, nhanh nhẹn**.`,
  },

  {
    id: 'luc-si-tai-thien-di-thien-tru',
    title: 'Lực Sĩ + Thiên Trù tại Thiên Di - đợi mời ăn nhậu',
    sao: ['Lực Sĩ'],
    cung: ['Thiên Di'],
    ketHop: ['Thiên Trù'],
    doUuTien: 65,
    tomTat: `🌟 **Lực Sĩ + Thiên Trù tại Thiên Di:** ra ngoài hay **đợi mời đi
ăn nhậu**.`,
  },

  {
    id: 'luc-si-tai-thien-di-loc-ta-huu',
    title: 'Lực Sĩ + Hóa Lộc + Tả Hữu tại Thiên Di - kết bạn nhiệt huyết',
    sao: ['Lực Sĩ'],
    cung: ['Thiên Di'],
    ketHop: ['Hóa Lộc', 'Tả Phù', 'Hữu Bật'],
    doUuTien: 65,
    tomTat: `🌟 **Lực Sĩ + Hóa Lộc + Tả Phù + Hữu Bật tại Thiên Di:** nên ra
ngoài giao lưu nhiều — có khả năng kết bạn với người **có chí khí, sức vóc,
nhiệt huyết**.`,
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
    tomTat: `⚠️ **Lực Sĩ cư Tật:** làm **GIA TĂNG cường độ tật bệnh** của các
sao đi cùng.

⚠️ Đặc trưng: liên quan tới **THỪA CÂN, ăn uống quá độ**.`,
  },

  {
    id: 'luc-si-tai-tat-ach-da-la',
    title: 'Lực Sĩ + Đà La tại Tật Ách - bệnh dai dẳng',
    sao: ['Lực Sĩ'],
    cung: ['Tật Ách'],
    ketHop: ['Đà La'],
    doUuTien: 67,
    tomTat: `⚠️ **Lực Sĩ + Đà La tại Tật Ách** (sao chủ kéo dài): bệnh tật trở
nên **dai dẳng, khó dứt**.`,
  },

  {
    id: 'luc-si-tai-tat-ach-dia-kiep',
    title: 'Lực Sĩ + Địa Kiếp tại Tật Ách - bệnh dai dẳng',
    sao: ['Lực Sĩ'],
    cung: ['Tật Ách'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 67,
    tomTat: `⚠️ **Lực Sĩ + Địa Kiếp tại Tật Ách** (sao chủ kéo dài): bệnh tật
trở nên **dai dẳng, khó dứt**.`,
  },

  {
    id: 'luc-si-tai-tat-ach-tuan',
    title: 'Lực Sĩ + Tuần tại Tật Ách - bệnh dai dẳng',
    sao: ['Lực Sĩ'],
    cung: ['Tật Ách'],
    ketHop: ['Tuần'],
    doUuTien: 67,
    tomTat: `⚠️ **Lực Sĩ + Tuần tại Tật Ách** (sao chủ kéo dài): bệnh tật trở
nên **dai dẳng, khó dứt**.`,
  },

  {
    id: 'luc-si-tai-tat-ach-ta-phu',
    title: 'Lực Sĩ + Tả Phù tại Tật Ách - động lực chăm sóc sức khỏe',
    sao: ['Lực Sĩ'],
    cung: ['Tật Ách'],
    ketHop: ['Tả Phù'],
    doUuTien: 67,
    tomTat: `🌟 **Lực Sĩ + Tả Phù tại Tật Ách:** tạo **động lực chăm sóc sức
khỏe** → ngoại hình và thể lực tốt.`,
  },

  {
    id: 'luc-si-tai-tat-ach-huu-bat',
    title: 'Lực Sĩ + Hữu Bật tại Tật Ách - động lực chăm sóc sức khỏe',
    sao: ['Lực Sĩ'],
    cung: ['Tật Ách'],
    ketHop: ['Hữu Bật'],
    doUuTien: 67,
    tomTat: `🌟 **Lực Sĩ + Hữu Bật tại Tật Ách:** tạo **động lực chăm sóc sức
khỏe** → ngoại hình và thể lực tốt.`,
  },

  {
    id: 'luc-si-tai-tat-ach-hoa-quyen',
    title: 'Lực Sĩ + Hóa Quyền tại Tật Ách - động lực chăm sóc sức khỏe',
    sao: ['Lực Sĩ'],
    cung: ['Tật Ách'],
    ketHop: ['Hóa Quyền'],
    doUuTien: 67,
    tomTat: `🌟 **Lực Sĩ + Hóa Quyền tại Tật Ách:** tạo **động lực chăm sóc sức
khỏe** → ngoại hình và thể lực tốt.`,
  },

  {
    id: 'luc-si-tai-tat-ach-thien-tru',
    title: 'Lực Sĩ + Thiên Trù tại Tật Ách - béo phì',
    sao: ['Lực Sĩ'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Trù'],
    doUuTien: 67,
    tomTat: `⚠️ **Lực Sĩ + Thiên Trù tại Tật Ách** (sao chủ ăn uống): đề phòng
**béo phì**.`,
  },

  {
    id: 'luc-si-tai-tat-ach-thien-phu',
    title: 'Lực Sĩ + Thiên Phủ tại Tật Ách - béo phì',
    sao: ['Lực Sĩ'],
    cung: ['Tật Ách'],
    ketHop: ['Thiên Phủ'],
    doUuTien: 67,
    tomTat: `⚠️ **Lực Sĩ + Thiên Phủ tại Tật Ách** (sao chủ ăn uống): đề phòng
**béo phì**.`,
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
    tomTat: `**Lực Sĩ cư Tài:** người **kiếm tiền không mệt mỏi, chịu khó**, dùng
**SỨC LỰC, sức lao động** để kiếm tiền.

⚡ **Đặc trưng:** **"một nắng hai sương"**, dựa nhiều vào **sức lực bản thân**.

⚠️ Ăn tiêu **thoải mái**, **không có óc tính toán sâu** — hay tốn tiền cho
mục đích cơ bản: **ăn uống, chơi bời, nhậu nhẹt**.`,
  },

  {
    id: 'luc-si-tai-tai-bach-dia-kiep',
    title: 'Lực Sĩ + Địa Kiếp tại Tài Bạch - tiêu hoang',
    sao: ['Lực Sĩ'],
    cung: ['Tài Bạch'],
    ketHop: ['Địa Kiếp'],
    doUuTien: 67,
    tomTat: `⚠️ **Lực Sĩ + Địa Kiếp tại Tài Bạch:** dễ tiêu pha cho mục đích
**không chính đáng** (nhậu nhẹt, hưởng thụ).`,
  },

  {
    id: 'luc-si-tai-tai-bach-hoa-ky',
    title: 'Lực Sĩ + Hóa Kỵ tại Tài Bạch - tiêu hoang',
    sao: ['Lực Sĩ'],
    cung: ['Tài Bạch'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 67,
    tomTat: `⚠️ **Lực Sĩ + Hóa Kỵ tại Tài Bạch:** dễ tiêu pha cho mục đích
**không chính đáng** (nhậu nhẹt, hưởng thụ).`,
  },

  {
    id: 'luc-si-tai-tai-bach-hoa-tinh',
    title: 'Lực Sĩ + Hỏa Tinh tại Tài Bạch - tiêu hoang',
    sao: ['Lực Sĩ'],
    cung: ['Tài Bạch'],
    ketHop: ['Hỏa Tinh'],
    doUuTien: 67,
    tomTat: `⚠️ **Lực Sĩ + Hỏa Tinh tại Tài Bạch:** dễ tiêu pha cho mục đích
**không chính đáng** (nhậu nhẹt, hưởng thụ).`,
  },

  {
    id: 'luc-si-tai-tai-bach-linh-tinh',
    title: 'Lực Sĩ + Linh Tinh tại Tài Bạch - tiêu hoang',
    sao: ['Lực Sĩ'],
    cung: ['Tài Bạch'],
    ketHop: ['Linh Tinh'],
    doUuTien: 67,
    tomTat: `⚠️ **Lực Sĩ + Linh Tinh tại Tài Bạch:** dễ tiêu pha cho mục đích
**không chính đáng** (nhậu nhẹt, hưởng thụ).`,
  },

  {
    id: 'luc-si-tai-tai-bach-loc-van-xuong',
    title: 'Lực Sĩ + Hóa Lộc + Văn Xương tại Tài Bạch - tay chân + trí lực',
    sao: ['Lực Sĩ'],
    cung: ['Tài Bạch'],
    ketHop: ['Hóa Lộc', 'Văn Xương'],
    doUuTien: 67,
    tomTat: `🌟 **Lực Sĩ + Hóa Lộc + Văn Xương tại Tài Bạch:** kết hợp **lao
động tay chân với trí lực** → công việc nhẹ nhàng hơn, dễ đạt thành tựu tài
chính.`,
  },

  {
    id: 'luc-si-tai-tai-bach-loc-van-khuc',
    title: 'Lực Sĩ + Hóa Lộc + Văn Khúc tại Tài Bạch - tay chân + trí lực',
    sao: ['Lực Sĩ'],
    cung: ['Tài Bạch'],
    ketHop: ['Hóa Lộc', 'Văn Khúc'],
    doUuTien: 67,
    tomTat: `🌟 **Lực Sĩ + Hóa Lộc + Văn Khúc tại Tài Bạch:** kết hợp **lao
động tay chân với trí lực** → công việc nhẹ nhàng hơn, dễ đạt thành tựu tài
chính.`,
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
    tomTat: `🌟 **Lực Sĩ cư Tử Tức:** **GIA TĂNG SỐ LƯỢNG CON** — sinh con thuận
lợi, **"con đàn cháu đống"**, thúc đẩy sự **kế thừa và phát triển** của gia tộc.

🌟 Con cái **khỏe mạnh, tốt tính, đơn giản**.`,
  },

  {
    id: 'luc-si-tai-tu-tuc-thien-khoi',
    title: 'Lực Sĩ + Thiên Khôi tại Tử Tức - hưng vượng',
    sao: ['Lực Sĩ'],
    cung: ['Tử Tức'],
    ketHop: ['Thiên Khôi'],
    doUuTien: 65,
    tomTat: `🌟 **Lực Sĩ + Thiên Khôi tại Tử Tức:** càng rõ rệt — nhiều con và
đều **hưng vượng**.`,
  },

  {
    id: 'luc-si-tai-tu-tuc-thien-viet',
    title: 'Lực Sĩ + Thiên Việt tại Tử Tức - hưng vượng',
    sao: ['Lực Sĩ'],
    cung: ['Tử Tức'],
    ketHop: ['Thiên Việt'],
    doUuTien: 65,
    tomTat: `🌟 **Lực Sĩ + Thiên Việt tại Tử Tức:** càng rõ rệt — nhiều con và
đều **hưng vượng**.`,
  },

  {
    id: 'luc-si-tai-tu-tuc-hoa-loc',
    title: 'Lực Sĩ + Hóa Lộc tại Tử Tức - hưng vượng',
    sao: ['Lực Sĩ'],
    cung: ['Tử Tức'],
    ketHop: ['Hóa Lộc'],
    doUuTien: 65,
    tomTat: `🌟 **Lực Sĩ + Hóa Lộc tại Tử Tức:** càng rõ rệt — nhiều con và
đều **hưng vượng**.`,
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
    tomTat: `**Lực Sĩ cư Phu Thê:** không được đánh giá cao.

**Tướng người hôn phối:** dễ **TO LỚN, có sức khỏe tốt, ăn khỏe**.`,
  },

  {
    id: 'luc-si-phu-the-nam-menh',
    title: 'Lực Sĩ tại Phu Thê - Nam mệnh',
    sao: ['Lực Sĩ'],
    cung: ['Phu Thê'],
    gioiTinh: 'Nam',
    doUuTien: 70,
    tomTat: `⚠️ **Lực Sĩ tại Phu Thê — nam mệnh:**
- Vợ thường **vất vả lao lực**, **giảm nhan sắc**
- Khó giữ **sự mặn nồng** ban đầu
- Vì lo mưu sinh nên khó giữ **lửa tình cảm** trong gia đình`,
  },

  {
    id: 'luc-si-phu-the-nu-bao-hanh',
    title: 'Lực Sĩ + sát tinh tại Phu Thê - Nữ mệnh bạo hành',
    sao: ['Lực Sĩ'],
    cung: ['Phu Thê'],
    gioiTinh: 'Nữ',
    ketHop: ['Thiên Hình', 'Địa Không', 'Địa Kiếp', 'Kình Dương', 'Đà La', 'Hóa Kỵ'],
    doUuTien: 70,
    tomTat: `⚠️ **Lực Sĩ + Thiên Hình / Không Kiếp / Kình Đà / Hóa Kỵ tại Phu Thê — nữ
mệnh:**
- Cần cẩn trọng nguy cơ **BẠO HÀNH GIA ĐÌNH**
- Đặc biệt là **bạo hành thể xác**`,
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
    tomTat: `**Lực Sĩ cư Huynh Đệ:** **TĂNG SỐ LƯỢNG anh chị em**, nhiều người
**to lớn, khỏe mạnh**.`,
  },

  {
    id: 'luc-si-tai-huynh-de-luc-cat',
    title: 'Lực Sĩ + Lục Cát tại Huynh Đệ - gắn bó',
    sao: ['Lực Sĩ'],
    cung: ['Huynh Đệ'],
    ketHop: ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 65,
    tomTat: `🌟 **Lực Sĩ + Cát tinh tại Huynh Đệ** (Tả Phù / Hữu Bật / Văn Xương
/ Văn Khúc / Thiên Khôi / Thiên Việt): anh chị em **gắn bó, bền vững**, trở
thành **chỗ dựa, che chở** cho nhau khi gặp khó khăn.`,
  },

  {
    id: 'luc-si-tai-huynh-de-tu-sat',
    title: 'Lực Sĩ + Tứ Sát tại Huynh Đệ - mâu thuẫn',
    sao: ['Lực Sĩ'],
    cung: ['Huynh Đệ'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 65,
    tomTat: `⚠️ **Lực Sĩ + Sát tinh tại Huynh Đệ** (Kình Dương / Đà La / Hỏa
Tinh / Linh Tinh): dễ **"trâu buộc ghét trâu ăn"** — anh em **mâu thuẫn**, thậm
chí **bắt nạt nhau**.`,
  },

  {
    id: 'luc-si-tai-huynh-de-thien-hinh',
    title: 'Lực Sĩ + Thiên Hình tại Huynh Đệ - mâu thuẫn',
    sao: ['Lực Sĩ'],
    cung: ['Huynh Đệ'],
    ketHop: ['Thiên Hình'],
    doUuTien: 65,
    tomTat: `⚠️ **Lực Sĩ + Thiên Hình tại Huynh Đệ:** dễ **"trâu buộc ghét trâu
ăn"** — anh em **mâu thuẫn**, thậm chí **bắt nạt nhau**.`,
  },

  {
    id: 'luc-si-tai-huynh-de-hoa-ky',
    title: 'Lực Sĩ + Hóa Kỵ tại Huynh Đệ - mâu thuẫn',
    sao: ['Lực Sĩ'],
    cung: ['Huynh Đệ'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 65,
    tomTat: `⚠️ **Lực Sĩ + Hóa Kỵ tại Huynh Đệ:** dễ **"trâu buộc ghét trâu ăn"**
— anh em **mâu thuẫn**, thậm chí **bắt nạt nhau**.`,
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
    tomTat: `🌟 **Lực Sĩ + Thiên Mã** — kiểu người **NĂNG ĐỘNG, TÀI NĂNG, CÓ SỨC
KHỎE** vật chất.

→ Bộ sao cần thiết giúp con người **dễ thành công** khi **vừa có DŨNG, vừa có
MƯU**.

🌟 Khi vào hạn: Lực Sĩ + Thiên Mã = **gặp thời vận TỐT**.`,
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
    tomTat: `🌟 **Lực Sĩ + Thiên Hình hoặc Bạch Hổ:** người có **CHÍ KHÍ SẮT ĐÁ,
MẠNH MẼ**, **ĐÀN ÔNG, HIÊN NGANG**.

→ Mẫu người tướng quân, dũng tướng — sức mạnh + uy nghiêm.`,
  },

  {
    id: 'luc-si-thien-hinh-suc-manh',
    title: 'Lực Sĩ + Thiên Hình - sức mạnh uy nghiêm',
    sao: ['Lực Sĩ'],
    ketHop: ['Thiên Hình'],
    doUuTien: 53,
    tomTat: `⚡ **Lực Sĩ + Thiên Hình:** thể hiện **sức mạnh, uy nghiêm, khó
tính** và phần dũng mãnh.`,
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
    tomTat: `⚠️ **Lực Sĩ + Kình Dương:** tính cương cường **thái quá, gây bất
cập**.

→ Con người trở nên **mạnh bạo, không có điểm dừng**, dễ gây **hiểm họa** —
đúng câu **"CƯƠNG QUÁ THÌ GÃY"**.

⚠️ Ý nghĩa khác: có **tài năng, công lao** nhưng **không được sử dụng, ban
thưởng** → gây **bất mãn**.`,
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
    tomTat: `⚠️ **Lực Sĩ + Tuần / Triệt:** **CÓ SỨC KHỎE NHƯNG HAY BỊ ĐAU ỐM,
MẤT SỨC**.

→ Lực Sĩ vốn chủ sức mạnh, nhưng Tuần Triệt **bẻ gãy** sức mạnh đó → người
**bề ngoài khỏe** nhưng thực tế **suy nhược, dễ ốm vặt**, mất sức không rõ
nguyên nhân.`,
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
    tomTat: `⚠️ **Lực Sĩ + Phục Binh + Thiên Hình:** dùng sức khỏe làm việc **PHI
PHÁP, gian manh**, **mưu mô nham hiểm**.

→ Sức mạnh chuyển hóa thành **bạo lực xấu** — người có thể trở thành **giang
hồ, ác bá**, dùng vũ lực trong những việc khuất tất.`,
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
    tomTat: `⚠️ **Lực Sĩ + Phục Binh + Địa Kiếp + Hóa Kỵ:** chủ mệnh có tài năng
mà **KHÔNG ĐƯỢC TRỌNG DỤNG** — **"ngọc lành chẳng khéo tay thợ"**.

→ Đương số:
- Có **chí, có sức, có khả năng gánh vác**
- Nhưng đường công danh **bị chặn đứng**
- **Cấp trên không nâng đỡ**, **quý nhân không xuất hiện**

⚠️ Nếu thêm cha mẹ không thể giúp đỡ → số phận càng thêm **long đong**.`,
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
    tomTat: `⚠️ **Lực Sĩ + Tử / Bệnh Phù / Hao / Phá Toái:** sức khỏe **giảm
sút, thân thể yếu**.

→ Đương số như **"người vừa ốm dậy"** — dù được cứu giải cũng **chẳng còn sung
sức như xưa**.

**Lời khuyên:** tập trung **dưỡng bệnh, tăng cường thể lực, bồi bổ cho cơ thể**.`,
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
    tomTat: `⚠️ **Lực Sĩ + Địa Kiếp + Hỏa Tinh + Đà La + Hóa Kỵ:** sức mạnh trở
thành **liều lĩnh**, dễ đưa đương số vào **CON ĐƯỜNG LÀM ĂN MỜ ÁM**.

→ Tâm lý: nghĩ mình **có sức, có khả năng kiểm soát mọi việc** → không ngại
**chọn đường tắt**, chấp nhận **rủi ro cao**.

⚠️ "**Tham thì thâm**" — càng liều lĩnh càng dễ vướng họa → **hao tán tiền
của**, **mất uy tín, danh dự**.`,
  },

  // ============================================================
  // 22. Lực Sĩ vào hạn
  // ============================================================
  {
    id: 'luc-si-vao-han',
    title: 'Lực Sĩ vào hạn',
    sao: ['Lực Sĩ'],
    doUuTien: 50,
    tomTat: `🌟 **Hạn có Lực Sĩ:** hạn của hành động, sức khỏe, công việc tay
chân.

⚠️ Cần **rèn tính kiên nhẫn, tránh nóng vội** — sức mạnh nếu không tiết chế dễ
biến thành **gánh nặng**, khiến cuộc sống lao đao.`,
  },

  {
    id: 'luc-si-han-thien-ma',
    title: 'Hạn Lực Sĩ + Thiên Mã - thời vận tốt',
    sao: ['Lực Sĩ'],
    ketHop: ['Thiên Mã'],
    doUuTien: 45,
    tomTat: `🌟 **Hạn có Lực Sĩ + Thiên Mã:** **gặp thời vận tốt**.`,
  },

  {
    id: 'luc-si-han-thien-tru',
    title: 'Hạn Lực Sĩ + Thiên Trù - mời ăn uống',
    sao: ['Lực Sĩ'],
    ketHop: ['Thiên Trù'],
    doUuTien: 45,
    tomTat: `🌟 **Hạn có Lực Sĩ + Thiên Trù:** được **mời ăn uống linh đình**.`,
  },
];
