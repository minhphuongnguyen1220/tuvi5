import type { DoanLuanGiai } from '../types';

/**
 * LUẬN GIẢI SAO THANH LONG - Thủy, Thiện Tinh, vòng Lộc Tồn (vị trí 3)
 * Hình tượng "Rồng xanh" - sông suối, dòng chảy, trí tuệ, may mắn
 */
export const luanGiai_ThanhLong: DoanLuanGiai[] = [
  // ============================================================
  // 1. Đặc tính chung sao Thanh Long
  // ============================================================
  {
    id: 'thanh-long-tinh-chat-chung',
    title: 'Thanh Long - Đặc tính chung',
    sao: ['Thanh Long'],
    doUuTien: 30,
    tomTat: `**Thanh Long** — sao **CÁT TINH** trong **vòng Lộc Tồn / Bác Sĩ** (vị
trí **thứ 3**, sau Lực Sĩ).

**Ngũ hành:** **Thủy**.

**Hóa khí:** **Thiện Tinh**.

⚡ **Hình tượng:** **sông suối, dòng chảy, RỒNG XANH** — biểu hiện cho **trí
tuệ, tài năng, sự hanh thông và may mắn**.

**Đặc tính:** **vui vẻ, chữ nghĩa, may mắn về công danh, hôn nhân**, **giải
trừ bệnh tật, tai họa nhỏ**.

⚡ **Bản chất:** tuy là sao nhỏ nhưng vốn là **rồng xanh** nên rất **uy dũng,
cao thượng** → đem lại may mắn ở nhiều phương diện:
- **Thi cử, công danh**
- **Hôn nhân, sinh nở**
- **Học hành thông tuệ**

🌟 Người có Thanh Long thường thành công chủ yếu bằng **CON ĐƯỜNG HỌC VẤN**.`,
  },

  // ============================================================
  // 2. Bộ Tứ Linh Cái - Long - Hổ - Phượng
  // ============================================================
  {
    id: 'thanh-long-tu-linh',
    title: 'Bộ Tứ Linh - Cái - Long - Hổ - Phượng',
    sao: ['Thanh Long', 'Bạch Hổ', 'Hoa Cái', 'Phượng Các'],
    ketHop: ['Bạch Hổ', 'Hoa Cái', 'Phượng Các'],
    doUuTien: 65,
    tomTat: `🌟 **Thanh Long + Bạch Hổ + Hoa Cái + Phượng Các** = bộ **"TỨ LINH"**
(hoặc **"Cái - Long - Hổ - Phượng"**).

→ Cách cục **rất rực rỡ về CÔNG DANH, TÀI LỘC**.

⚡ **Lưu ý:** Thanh Long **HOẶC Long Trì** kết hợp với **Giải Thần / Phượng
Các / Hoa Cái / Bạch Hổ** đều thành bộ **Tứ Linh** — Long Trì có thể thay thế
Thanh Long trong cách này.

🌟 Có hiệu lực bổ sung mạnh cho vòng **Tuế Hổ Phù** — như câu "Tuế Hổ Phù rất
cần Tứ Linh để làm sáng đẹp hơn".`,
  },

  // ============================================================
  // 3. Bộ Long - Hổ - Cái
  // ============================================================
  {
    id: 'thanh-long-long-ho-cai',
    title: 'Long - Hổ - Cái (Thanh Long + Bạch Hổ + Hoa Cái)',
    sao: ['Thanh Long', 'Bạch Hổ', 'Hoa Cái'],
    ketHop: ['Bạch Hổ', 'Hoa Cái'],
    doUuTien: 60,
    tomTat: `🌟 **Thanh Long + Bạch Hổ + Hoa Cái** = cách **"LONG HỔ CÁI"** (thiếu
Phượng Các so với Tứ Linh).

→ Cách cục **rực rỡ về TÀI - QUAN** — công danh, sự nghiệp đều phát đạt.

→ Là cách "rút gọn" của Tứ Linh nhưng vẫn rất quý.`,
  },

  // ============================================================
  // 4. Thanh Long tại Mệnh
  // ============================================================
  {
    id: 'thanh-long-tai-menh',
    title: 'Thanh Long tại Mệnh - Học thức, ham học hỏi',
    sao: ['Thanh Long'],
    cung: ['Mệnh'],
    doUuTien: 78,
    tomTat: `🌟 **Thanh Long thủ Mệnh:** người có **HỌC THỨC, ham học hỏi**.

**Tướng mạo:**
- **Gương mặt thanh tú, phương phi, đạo mạo**, cốt cách **sang trọng**
- **Râu tóc tốt**, mặt mũi thanh tú
- **Giọng nói ấm áp**
- **Ánh mắt trong sáng và linh hoạt**
- Tướng người **lịch lãm**

**Tính cách:** vui vẻ, hòa nhã, **thanh lịch**, **lúc nào cũng sạch sẽ**, ăn
mặc gọn gàng tươm tất.

⚡ Hành **Thủy** → tính tình **hài hòa, mềm mại, khéo léo**, khi cần mạnh mẽ
thì rất **mạnh mẽ và quyết đoán**.

🌟 **Lợi ích chính:**
- **Cầu danh, thi cử** — người **văn hay chữ tốt**
- **May mắn về hôn nhân, sinh nở**
- **Giải trừ bệnh tật, tai họa nhỏ**`,
  },

  // ============================================================
  // 5. Thanh Long tại Phụ Mẫu
  // ============================================================
  {
    id: 'thanh-long-tai-phu-mau',
    title: 'Thanh Long tại Phụ Mẫu',
    sao: ['Thanh Long'],
    cung: ['Phụ Mẫu'],
    doUuTien: 72,
    tomTat: `🌟 **Thanh Long cư Phụ Mẫu:** cha mẹ là người **THANH LỊCH, có học
thức, hiền lành, đức độ**.

Cha mẹ là **trụ cột tinh thần** trong gia đình, để lại **phúc đức** cho con
cháu.`,
  },

  {
    id: 'thanh-long-tai-phu-mau-ta-huu',
    title: 'Thanh Long + Tả Phù / Hữu Bật tại Phụ Mẫu - cha mẹ hiển đạt',
    sao: ['Thanh Long'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Tả Phù', 'Hữu Bật'],
    doUuTien: 67,
    tomTat: `🌟 **Thanh Long + Tả Phù / Hữu Bật tại Phụ Mẫu:** cha mẹ càng **hiển
đạt**, thường làm trong ngành **giáo dục, văn hóa, luật pháp**.`,
  },

  {
    id: 'thanh-long-tai-phu-mau-khoi-viet',
    title: 'Thanh Long + Thiên Khôi / Thiên Việt tại Phụ Mẫu - cha mẹ hiển đạt',
    sao: ['Thanh Long'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Thiên Khôi', 'Thiên Việt'],
    doUuTien: 67,
    tomTat: `🌟 **Thanh Long + Thiên Khôi / Thiên Việt tại Phụ Mẫu:** cha mẹ
càng **hiển đạt**, thường làm trong ngành **giáo dục, văn hóa, luật pháp**.`,
  },

  {
    id: 'thanh-long-tai-phu-mau-xuong-khuc',
    title: 'Thanh Long + Văn Xương / Văn Khúc tại Phụ Mẫu - cha mẹ hiển đạt',
    sao: ['Thanh Long'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Văn Xương', 'Văn Khúc'],
    doUuTien: 67,
    tomTat: `🌟 **Thanh Long + Văn Xương / Văn Khúc tại Phụ Mẫu:** cha mẹ càng
**hiển đạt**, thường làm trong ngành **giáo dục, văn hóa, luật pháp**.`,
  },

  {
    id: 'thanh-long-tai-phu-mau-long-tri',
    title: 'Thanh Long + Long Trì tại Phụ Mẫu - cha mẹ hiển đạt',
    sao: ['Thanh Long'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Long Trì'],
    doUuTien: 67,
    tomTat: `🌟 **Thanh Long + Long Trì tại Phụ Mẫu:** cha mẹ càng **hiển đạt**,
thường làm trong ngành **giáo dục, văn hóa, luật pháp**.`,
  },

  {
    id: 'thanh-long-tai-phu-mau-phuong-cac',
    title: 'Thanh Long + Phượng Các tại Phụ Mẫu - cha mẹ hiển đạt',
    sao: ['Thanh Long'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Phượng Các'],
    doUuTien: 67,
    tomTat: `🌟 **Thanh Long + Phượng Các tại Phụ Mẫu:** cha mẹ càng **hiển
đạt**, thường làm trong ngành **giáo dục, văn hóa, luật pháp**.`,
  },

  {
    id: 'thanh-long-tai-phu-mau-kinh-da',
    title: 'Thanh Long + Kình Dương / Đà La tại Phụ Mẫu - cha mẹ bệnh tật',
    sao: ['Thanh Long'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 67,
    tomTat: `⚠️ **Thanh Long + Kình Dương / Đà La tại Phụ Mẫu:** cha mẹ dễ
**bệnh tật**, hay gặp **thị phi**, phải **vất vả lao tâm**.`,
  },

  {
    id: 'thanh-long-tai-phu-mau-khong-kiep',
    title: 'Thanh Long + Địa Không / Địa Kiếp tại Phụ Mẫu - cha mẹ bệnh tật',
    sao: ['Thanh Long'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 67,
    tomTat: `⚠️ **Thanh Long + Địa Không / Địa Kiếp tại Phụ Mẫu:** cha mẹ dễ
**bệnh tật**, hay gặp **thị phi**, phải **vất vả lao tâm**.`,
  },

  {
    id: 'thanh-long-tai-phu-mau-linh-hoa',
    title: 'Thanh Long + Linh Tinh / Hỏa Tinh tại Phụ Mẫu - cha mẹ bệnh tật',
    sao: ['Thanh Long'],
    cung: ['Phụ Mẫu'],
    ketHop: ['Linh Tinh', 'Hỏa Tinh'],
    doUuTien: 67,
    tomTat: `⚠️ **Thanh Long + Linh Tinh / Hỏa Tinh tại Phụ Mẫu:** cha mẹ dễ
**bệnh tật**, hay gặp **thị phi**, phải **vất vả lao tâm**.`,
  },

  // ============================================================
  // 6. Thanh Long tại Phúc Đức
  // ============================================================
  {
    id: 'thanh-long-tai-phuc-duc',
    title: 'Thanh Long tại Phúc Đức',
    sao: ['Thanh Long'],
    cung: ['Phúc Đức'],
    doUuTien: 78,
    tomTat: `🌟 **Thanh Long cư Phúc Đức:** dòng họ **NỀ NẾP, HIẾU HỌC, PHÚ QUÝ**,
nhiều người **đỗ đạt, thành công**.

🌟 **MỘ tổ tiên gần SÔNG NGÒI, đường lớn** → "**đắc địa long mạch**" — phát
mộ phát mả tổ tiên.

🌟 Bản thân khi sinh ra được tiếp xúc với **môi trường tốt**, nhiều người có
học → dễ thành người, **phát triển tốt hơn**.`,
  },

  {
    id: 'thanh-long-tai-phuc-duc-hoa-cai',
    title: 'Thanh Long + Hoa Cái tại Phúc Đức - phúc khí lớn',
    sao: ['Thanh Long'],
    cung: ['Phúc Đức'],
    ketHop: ['Hoa Cái'],
    doUuTien: 73,
    tomTat: `⚡ **Thanh Long + Hoa Cái tại Phúc Đức:** **PHÚC KHÍ rất lớn** —
trong họ **ắt có người làm QUAN TO**, đời trước cũng là người **phục vụ Vua,
triều đình**.`,
  },

  {
    id: 'thanh-long-tai-phuc-duc-phuong-cac',
    title: 'Thanh Long + Phượng Các tại Phúc Đức - phúc khí gia tộc',
    sao: ['Thanh Long'],
    cung: ['Phúc Đức'],
    ketHop: ['Phượng Các'],
    doUuTien: 73,
    tomTat: `🌟 **Thanh Long + Phượng Các tại Phúc Đức:** phúc khí gia tộc **mạnh
mẽ**.`,
  },

  {
    id: 'thanh-long-tai-phuc-duc-long-tri',
    title: 'Thanh Long + Long Trì tại Phúc Đức - phúc khí gia tộc',
    sao: ['Thanh Long'],
    cung: ['Phúc Đức'],
    ketHop: ['Long Trì'],
    doUuTien: 73,
    tomTat: `🌟 **Thanh Long + Long Trì tại Phúc Đức:** phúc khí gia tộc **mạnh
mẽ**.`,
  },

  {
    id: 'thanh-long-tai-phuc-duc-van-xuong',
    title: 'Thanh Long + Văn Xương tại Phúc Đức - phúc khí gia tộc',
    sao: ['Thanh Long'],
    cung: ['Phúc Đức'],
    ketHop: ['Văn Xương'],
    doUuTien: 73,
    tomTat: `🌟 **Thanh Long + Văn Xương tại Phúc Đức:** phúc khí gia tộc **mạnh
mẽ**.`,
  },

  {
    id: 'thanh-long-tai-phuc-duc-van-khuc',
    title: 'Thanh Long + Văn Khúc tại Phúc Đức - phúc khí gia tộc',
    sao: ['Thanh Long'],
    cung: ['Phúc Đức'],
    ketHop: ['Văn Khúc'],
    doUuTien: 73,
    tomTat: `🌟 **Thanh Long + Văn Khúc tại Phúc Đức:** phúc khí gia tộc **mạnh
mẽ**.`,
  },

  {
    id: 'thanh-long-tai-phuc-duc-hoa-tinh',
    title: 'Thanh Long + Hỏa Tinh tại Phúc Đức - tai họa pháp luật',
    sao: ['Thanh Long'],
    cung: ['Phúc Đức'],
    ketHop: ['Hỏa Tinh'],
    doUuTien: 73,
    tomTat: `⚠️ **Thanh Long + Hỏa Tinh tại Phúc Đức:** vướng **tai họa, pháp
luật**, có người **yểu mệnh**, đời sau khó hưởng trọn phúc phần.`,
  },

  {
    id: 'thanh-long-tai-phuc-duc-khong-kiep',
    title: 'Thanh Long + Địa Không / Địa Kiếp tại Phúc Đức - tai họa pháp luật',
    sao: ['Thanh Long'],
    cung: ['Phúc Đức'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 73,
    tomTat: `⚠️ **Thanh Long + Địa Không / Địa Kiếp tại Phúc Đức:** vướng **tai
họa, pháp luật**, có người **yểu mệnh**, đời sau khó hưởng trọn phúc phần.`,
  },

  // ============================================================
  // 7. Thanh Long tại Điền Trạch
  // ============================================================
  {
    id: 'thanh-long-tai-dien-trach',
    title: 'Thanh Long tại Điền Trạch - Đất Rồng đất phát',
    sao: ['Thanh Long'],
    cung: ['Điền Trạch'],
    doUuTien: 78,
    tomTat: `🌟 **Thanh Long cư Điền Trạch:** đất đai điền trạch **TỐT**, con cháu
sinh sống **càng ở lâu càng phát triển và thành đạt**.

⚡ **Tượng trưng cho ĐẤT RỒNG, ĐẤT PHÁT, ĐẤT CỦA ĐẾ VƯƠNG** → sinh ra **nhiều
người THÀNH CÔNG** trong nhà.

→ Đặc biệt **vượng phát cho người ĐÀN ÔNG** trong nhà.

🌟 **Đặc trưng nhà:** **đẹp, rộng, mới**, gần **mặt đường lớn, đường quốc lộ**.
Quanh nhà có **dòng nước, dòng sông** hoặc **mạch nước ngầm** chạy qua.`,
  },

  {
    id: 'thanh-long-tai-dien-trach-long-tri',
    title: 'Thanh Long + Long Trì tại Điền Trạch - nhà cao sang',
    sao: ['Thanh Long'],
    cung: ['Điền Trạch'],
    ketHop: ['Long Trì'],
    doUuTien: 73,
    tomTat: `🌟 **Thanh Long + Long Trì tại Điền Trạch:** nhà cửa càng **cao
sang, rộng rãi**, khu dân cư **văn minh**.`,
  },

  {
    id: 'thanh-long-tai-dien-trach-phuong-cac',
    title: 'Thanh Long + Phượng Các tại Điền Trạch - nhà cao sang',
    sao: ['Thanh Long'],
    cung: ['Điền Trạch'],
    ketHop: ['Phượng Các'],
    doUuTien: 73,
    tomTat: `🌟 **Thanh Long + Phượng Các tại Điền Trạch:** nhà cửa càng **cao
sang, rộng rãi**, khu dân cư **văn minh**.`,
  },

  {
    id: 'thanh-long-tai-dien-trach-ta-huu',
    title: 'Thanh Long + Tả Phù / Hữu Bật tại Điền Trạch - nhà cao sang',
    sao: ['Thanh Long'],
    cung: ['Điền Trạch'],
    ketHop: ['Tả Phù', 'Hữu Bật'],
    doUuTien: 73,
    tomTat: `🌟 **Thanh Long + Tả Phù / Hữu Bật tại Điền Trạch:** nhà cửa càng
**cao sang, rộng rãi**, khu dân cư **văn minh**.`,
  },

  {
    id: 'thanh-long-tai-dien-trach-kinh-da',
    title: 'Thanh Long + Kình Dương / Đà La tại Điền Trạch - tranh chấp nhà',
    sao: ['Thanh Long'],
    cung: ['Điền Trạch'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 73,
    tomTat: `⚠️ **Thanh Long + Kình Dương / Đà La tại Điền Trạch:** trắc trở mua
bán/xây dựng/giữ gìn nhà đất. Nhà xuống cấp nhanh, **tranh chấp pháp lý** hoặc
phong thủy không thuận.`,
  },

  {
    id: 'thanh-long-tai-dien-trach-hoa-ky',
    title: 'Thanh Long + Hóa Kỵ tại Điền Trạch - tranh chấp nhà',
    sao: ['Thanh Long'],
    cung: ['Điền Trạch'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 73,
    tomTat: `⚠️ **Thanh Long + Hóa Kỵ tại Điền Trạch:** trắc trở mua bán/xây
dựng/giữ gìn nhà đất. Nhà xuống cấp nhanh, **tranh chấp pháp lý** hoặc phong
thủy không thuận.`,
  },

  {
    id: 'thanh-long-tai-dien-trach-linh-tinh',
    title: 'Thanh Long + Linh Tinh tại Điền Trạch - tranh chấp nhà',
    sao: ['Thanh Long'],
    cung: ['Điền Trạch'],
    ketHop: ['Linh Tinh'],
    doUuTien: 73,
    tomTat: `⚠️ **Thanh Long + Linh Tinh tại Điền Trạch:** trắc trở mua bán/xây
dựng/giữ gìn nhà đất. Nhà xuống cấp nhanh, **tranh chấp pháp lý** hoặc phong
thủy không thuận.`,
  },

  // ============================================================
  // 8. Thanh Long tại Quan Lộc
  // ============================================================
  {
    id: 'thanh-long-tai-quan-loc',
    title: 'Thanh Long tại Quan Lộc',
    sao: ['Thanh Long'],
    cung: ['Quan Lộc'],
    doUuTien: 78,
    tomTat: `🌟 **Thanh Long cư Quan:** lợi ích cho **CẦU DANH, THI CỬ**, dễ **đỗ
đạt thành danh**.

Trong học tập và công việc:
- **Hết sức chỉnh chu, cẩn thận**
- **Cầu tiến, chuyên nghiệp**

🌟 Được **quý nhân nâng đỡ**, làm việc ở môi trường **học thuật, công quyền**
hoặc có **chức tước, địa vị**.`,
  },

  {
    id: 'thanh-long-tai-quan-loc-luc-cat',
    title: 'Thanh Long + Lục Cát tại Quan Lộc - văn tinh củng mệnh quan',
    sao: ['Thanh Long'],
    cung: ['Quan Lộc'],
    ketHop: ['Văn Xương', 'Văn Khúc', 'Tả Phù', 'Hữu Bật', 'Thiên Khôi', 'Thiên Việt'],
    doUuTien: 73,
    tomTat: `🌟 **Thanh Long + Văn Xương / Văn Khúc / Tả Phù / Hữu Bật / Thiên
Khôi / Thiên Việt tại Quan Lộc** = cách **"VĂN TINH CỦNG MỆNH QUAN"** — công
danh **rực rỡ**, thi cử **đỗ cao**, sự nghiệp vững chắc.`,
  },

  {
    id: 'thanh-long-tai-quan-loc-hoa-tinh',
    title: 'Thanh Long + Hỏa Tinh tại Quan Lộc - sự nghiệp trắc trở',
    sao: ['Thanh Long'],
    cung: ['Quan Lộc'],
    ketHop: ['Hỏa Tinh'],
    doUuTien: 73,
    tomTat: `⚠️ **Thanh Long + Hỏa Tinh tại Quan Lộc:** sự nghiệp **trắc trở**,
công danh **lận đận**, dễ bị **ganh ghét**, vướng **thị phi**, thi cử không
thành.`,
  },

  {
    id: 'thanh-long-tai-quan-loc-khong-kiep',
    title: 'Thanh Long + Địa Không / Địa Kiếp tại Quan Lộc - sự nghiệp trắc trở',
    sao: ['Thanh Long'],
    cung: ['Quan Lộc'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 73,
    tomTat: `⚠️ **Thanh Long + Địa Không / Địa Kiếp tại Quan Lộc:** sự nghiệp
**trắc trở**, công danh **lận đận**, dễ bị **ganh ghét**, vướng **thị phi**,
thi cử không thành.`,
  },

  // ============================================================
  // 9. Thanh Long tại Nô Bộc
  // ============================================================
  {
    id: 'thanh-long-tai-no-boc',
    title: 'Thanh Long tại Nô Bộc',
    sao: ['Thanh Long'],
    cung: ['Nô Bộc'],
    doUuTien: 72,
    tomTat: `🌟 **Thanh Long cư Nô:** **nhiều bạn bè TỐT**, **thanh lịch, có học
thức**, cư xử **nhã nhặn**, giữ vị trí cao trong xã hội.

🌟 Đương số được mọi người **hỗ trợ đắc lực** trong học hành, công việc, đời
sống.

⚠️ Đặc trưng: kết giao với người **hào nhoáng bên ngoài** nhưng **thiếu chân
thành** → bản thân gặp trở ngại trong công việc, mất uy tín.`,
  },

  {
    id: 'thanh-long-tai-no-boc-kinh-da',
    title: 'Thanh Long + Kình Dương / Đà La tại Nô Bộc - bạn bè thị phi',
    sao: ['Thanh Long'],
    cung: ['Nô Bộc'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 67,
    tomTat: `⚠️ **Thanh Long + Kình Dương / Đà La tại Nô Bộc:** mối quan hệ phức
tạp — bạn bè/đồng nghiệp gây **thị phi, ganh ghét, lợi dụng**.`,
  },

  {
    id: 'thanh-long-tai-no-boc-linh-tinh',
    title: 'Thanh Long + Linh Tinh tại Nô Bộc - bạn bè thị phi',
    sao: ['Thanh Long'],
    cung: ['Nô Bộc'],
    ketHop: ['Linh Tinh'],
    doUuTien: 67,
    tomTat: `⚠️ **Thanh Long + Linh Tinh tại Nô Bộc:** mối quan hệ phức tạp —
bạn bè/đồng nghiệp gây **thị phi, ganh ghét, lợi dụng**.`,
  },

  {
    id: 'thanh-long-tai-no-boc-hoa-tinh',
    title: 'Thanh Long + Hỏa Tinh tại Nô Bộc - bạn bè thị phi',
    sao: ['Thanh Long'],
    cung: ['Nô Bộc'],
    ketHop: ['Hỏa Tinh'],
    doUuTien: 67,
    tomTat: `⚠️ **Thanh Long + Hỏa Tinh tại Nô Bộc:** mối quan hệ phức tạp —
bạn bè/đồng nghiệp gây **thị phi, ganh ghét, lợi dụng**.`,
  },

  // ============================================================
  // 10. Thanh Long tại Thiên Di
  // ============================================================
  {
    id: 'thanh-long-tai-thien-di',
    title: 'Thanh Long tại Thiên Di',
    sao: ['Thanh Long'],
    cung: ['Thiên Di'],
    doUuTien: 72,
    tomTat: `🌟 **Thanh Long cư Thiên Di:** ra ngoài **gặp nhiều may mắn**, có
**quý nhân giúp đỡ**.

Ra ngoài **thanh lịch, hanh thông** → gây **thiện cảm** với người khác nhờ
phong thái **gọn gàng, chỉn chu** và cách ứng xử **hòa nhã**.

⚡ **Đặc trưng đối lập:** ở nhà thì **lười nhác, ốm đau** nhưng ra ngoài đi xa
lại **rất gọn gàng chuẩn chỉ**.`,
  },

  {
    id: 'thanh-long-tai-thien-di-linh-hoa',
    title: 'Thanh Long + Linh Tinh / Hỏa Tinh tại Thiên Di - tai họa bất ngờ',
    sao: ['Thanh Long'],
    cung: ['Thiên Di'],
    ketHop: ['Linh Tinh', 'Hỏa Tinh'],
    doUuTien: 67,
    tomTat: `⚠️ **Thanh Long + Linh Tinh / Hỏa Tinh tại Thiên Di:** vướng **thị
phi, tranh cãi**, nguy cơ **tai họa bất ngờ**.`,
  },

  {
    id: 'thanh-long-tai-thien-di-khong-kiep',
    title: 'Thanh Long + Địa Không / Địa Kiếp tại Thiên Di - tai họa bất ngờ',
    sao: ['Thanh Long'],
    cung: ['Thiên Di'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 67,
    tomTat: `⚠️ **Thanh Long + Địa Không / Địa Kiếp tại Thiên Di:** vướng **thị
phi, tranh cãi**, nguy cơ **tai họa bất ngờ**.`,
  },

  // ============================================================
  // 11. Thanh Long tại Tật Ách
  // ============================================================
  {
    id: 'thanh-long-tai-tat-ach',
    title: 'Thanh Long tại Tật Ách - Cứu giải bệnh tật, tai ương nhỏ',
    sao: ['Thanh Long'],
    cung: ['Tật Ách'],
    doUuTien: 75,
    tomTat: `🌟 **Thanh Long cư Tật Ách:** chủ về **CỨU GIẢI** bệnh tật, tai ương
nhỏ.

→ Có khả năng **CHE CHỞ** → tai nạn, bệnh hoạn thường chỉ dừng ở **mức nhỏ**,
**dễ hồi phục**.

⚡ **Bệnh thường gặp:** liên quan **đường ruột, đường tiêu hóa**, bệnh có liên
quan tới **ăn uống** (do hành Thủy).`,
  },

  {
    id: 'thanh-long-tai-tat-ach-kinh-da',
    title: 'Thanh Long + Kình Dương / Đà La tại Tật Ách - đầy hơi khó tiêu',
    sao: ['Thanh Long'],
    cung: ['Tật Ách'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 70,
    tomTat: `⚠️ **Thanh Long + Kình Dương / Đà La tại Tật Ách:** dễ mắc **đầy
hơi, khó tiêu**, hoặc bệnh xuất phát từ **ăn uống không điều độ**.`,
  },

  {
    id: 'thanh-long-tai-tat-ach-linh-tinh',
    title: 'Thanh Long + Linh Tinh tại Tật Ách - đầy hơi khó tiêu',
    sao: ['Thanh Long'],
    cung: ['Tật Ách'],
    ketHop: ['Linh Tinh'],
    doUuTien: 70,
    tomTat: `⚠️ **Thanh Long + Linh Tinh tại Tật Ách:** dễ mắc **đầy hơi, khó
tiêu**, hoặc bệnh xuất phát từ **ăn uống không điều độ**.`,
  },

  // ============================================================
  // 12. Thanh Long tại Tài Bạch
  // ============================================================
  {
    id: 'thanh-long-tai-tai-bach',
    title: 'Thanh Long tại Tài Bạch',
    sao: ['Thanh Long'],
    cung: ['Tài Bạch'],
    doUuTien: 75,
    tomTat: `🌟 **Thanh Long cư Tài:** tiền bạc **HANH THÔNG**, dễ kiếm tiền.

→ Kiếm tiền **nhờ HỌC THỨC, kiến thức** của bản thân — đồng tiền được kiếm
**chính đáng, trong sạch**, bằng **mồ hôi công sức**.

🌟 Chủ mệnh sống **thanh bạch**, ít khi dính **gian dối, tà đạo**, biết cách
cân đối chi tiêu.`,
  },

  {
    id: 'thanh-long-tai-tai-bach-van-xuong',
    title: 'Thanh Long + Văn Xương tại Tài Bạch - càng học càng giàu',
    sao: ['Thanh Long'],
    cung: ['Tài Bạch'],
    ketHop: ['Văn Xương'],
    doUuTien: 70,
    tomTat: `🌟 **Thanh Long + Văn Xương tại Tài Bạch:** **"càng học càng giàu"**
— thường làm việc trong môi trường **TRÍ THỨC, QUAN TRƯỜNG**.`,
  },

  {
    id: 'thanh-long-tai-tai-bach-van-khuc',
    title: 'Thanh Long + Văn Khúc tại Tài Bạch - càng học càng giàu',
    sao: ['Thanh Long'],
    cung: ['Tài Bạch'],
    ketHop: ['Văn Khúc'],
    doUuTien: 70,
    tomTat: `🌟 **Thanh Long + Văn Khúc tại Tài Bạch:** **"càng học càng giàu"**
— thường làm việc trong môi trường **TRÍ THỨC, QUAN TRƯỜNG**.`,
  },

  {
    id: 'thanh-long-tai-tai-bach-khoi-viet',
    title: 'Thanh Long + Thiên Khôi / Thiên Việt tại Tài Bạch - càng học càng giàu',
    sao: ['Thanh Long'],
    cung: ['Tài Bạch'],
    ketHop: ['Thiên Khôi', 'Thiên Việt'],
    doUuTien: 70,
    tomTat: `🌟 **Thanh Long + Thiên Khôi / Thiên Việt tại Tài Bạch:** **"càng
học càng giàu"** — thường làm việc trong môi trường **TRÍ THỨC, QUAN TRƯỜNG**.`,
  },

  {
    id: 'thanh-long-tai-tai-bach-da-la',
    title: 'Thanh Long + Đà La tại Tài Bạch - hao tài khó giữ',
    sao: ['Thanh Long'],
    cung: ['Tài Bạch'],
    ketHop: ['Đà La'],
    doUuTien: 70,
    tomTat: `⚠️ **Thanh Long + Đà La tại Tài Bạch:** việc cầu tài **trở ngại**,
tiền kiếm được **khó giữ**, dễ vướng **kiện tụng tài chính**, bị tiểu nhân lợi
dụng.`,
  },

  {
    id: 'thanh-long-tai-tai-bach-khong-kiep',
    title: 'Thanh Long + Địa Không / Địa Kiếp tại Tài Bạch - hao tài khó giữ',
    sao: ['Thanh Long'],
    cung: ['Tài Bạch'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 70,
    tomTat: `⚠️ **Thanh Long + Địa Không / Địa Kiếp tại Tài Bạch:** việc cầu tài
**trở ngại**, tiền kiếm được **khó giữ**, dễ vướng **kiện tụng tài chính**, bị
tiểu nhân lợi dụng.`,
  },

  {
    id: 'thanh-long-tai-tai-bach-linh-hoa',
    title: 'Thanh Long + Linh Tinh / Hỏa Tinh tại Tài Bạch - hao tài khó giữ',
    sao: ['Thanh Long'],
    cung: ['Tài Bạch'],
    ketHop: ['Linh Tinh', 'Hỏa Tinh'],
    doUuTien: 70,
    tomTat: `⚠️ **Thanh Long + Linh Tinh / Hỏa Tinh tại Tài Bạch:** việc cầu tài
**trở ngại**, tiền kiếm được **khó giữ**, dễ vướng **kiện tụng tài chính**, bị
tiểu nhân lợi dụng.`,
  },

  // ============================================================
  // 13. Thanh Long tại Tử Tức
  // ============================================================
  {
    id: 'thanh-long-tai-tu-tuc',
    title: 'Thanh Long tại Tử Tức',
    sao: ['Thanh Long'],
    cung: ['Tử Tức'],
    doUuTien: 75,
    tomTat: `🌟 **Thanh Long cư Tử Tức:** dấu hiệu **CÁT LỢI** — con cái **thông
minh, giỏi giang, thành đạt, hiếu thảo**.`,
  },

  {
    id: 'thanh-long-tai-tu-tuc-kinh-da',
    title: 'Thanh Long + Kình Dương / Đà La tại Tử Tức - con cái khó nuôi',
    sao: ['Thanh Long'],
    cung: ['Tử Tức'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 70,
    tomTat: `⚠️ **Thanh Long + Kình Dương / Đà La tại Tử Tức:** con cái **khó
nuôi**, **tính tình ngang ngạnh**. Một số trường hợp: **sinh ít con** hoặc **có
con nhưng xa cách**, không sum vầy.`,
  },

  {
    id: 'thanh-long-tai-tu-tuc-hoa-linh',
    title: 'Thanh Long + Hỏa Tinh / Linh Tinh tại Tử Tức - con cái khó nuôi',
    sao: ['Thanh Long'],
    cung: ['Tử Tức'],
    ketHop: ['Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 70,
    tomTat: `⚠️ **Thanh Long + Hỏa Tinh / Linh Tinh tại Tử Tức:** con cái **khó
nuôi**, **tính tình ngang ngạnh**. Một số trường hợp: **sinh ít con** hoặc **có
con nhưng xa cách**, không sum vầy.`,
  },

  {
    id: 'thanh-long-tu-tuc-nu-quy-tu',
    title: 'Thanh Long tại Tử Tức - Nữ may sinh nở quý tử',
    sao: ['Thanh Long'],
    cung: ['Tử Tức'],
    gioiTinh: 'Nữ',
    doUuTien: 70,
    tomTat: `🌟 **Thanh Long tại Tử Tức — nữ mệnh:**
- **MAY MẮN trong sinh nở**
- Dễ có **QUÝ TỬ** → gia đình hưng thịnh
- Đường con cái thuận lợi, ít vất vả`,
  },

  // ============================================================
  // 14. Thanh Long tại Phu Thê
  // ============================================================
  {
    id: 'thanh-long-tai-phu-the',
    title: 'Thanh Long tại Phu Thê',
    sao: ['Thanh Long'],
    cung: ['Phu Thê'],
    doUuTien: 75,
    tomTat: `🌟 **Thanh Long cư Phu Thê:** duyên vợ chồng **TỐT ĐẸP** — hôn nhân
**thuận hòa**, đôi bên sống có **tình nghĩa**, biết cảm thông.

Phú nói: **"Trai lấy vợ đẹp, gái lấy chồng hiền"**.

**Người hôn phối:** hiền hậu, **có học**, **quý hiển**, sống có tình nghĩa.`,
  },

  {
    id: 'thanh-long-tai-phu-the-da-la',
    title: 'Thanh Long + Đà La tại Phu Thê - duyên trắc trở',
    sao: ['Thanh Long'],
    cung: ['Phu Thê'],
    ketHop: ['Đà La'],
    doUuTien: 70,
    tomTat: `⚠️ **Thanh Long + Đà La tại Phu Thê:** duyên phận **trắc trở**, vợ
chồng **bất hòa**, dễ **xa cách** vì công việc hoặc có sự **chia lìa**.`,
  },

  {
    id: 'thanh-long-tai-phu-the-hoa-tinh',
    title: 'Thanh Long + Hỏa Tinh tại Phu Thê - duyên trắc trở',
    sao: ['Thanh Long'],
    cung: ['Phu Thê'],
    ketHop: ['Hỏa Tinh'],
    doUuTien: 70,
    tomTat: `⚠️ **Thanh Long + Hỏa Tinh tại Phu Thê:** duyên phận **trắc trở**,
vợ chồng **bất hòa**, dễ **xa cách** vì công việc hoặc có sự **chia lìa**.`,
  },

  {
    id: 'thanh-long-tai-phu-the-linh-tinh',
    title: 'Thanh Long + Linh Tinh tại Phu Thê - duyên trắc trở',
    sao: ['Thanh Long'],
    cung: ['Phu Thê'],
    ketHop: ['Linh Tinh'],
    doUuTien: 70,
    tomTat: `⚠️ **Thanh Long + Linh Tinh tại Phu Thê:** duyên phận **trắc trở**,
vợ chồng **bất hòa**, dễ **xa cách** vì công việc hoặc có sự **chia lìa**.`,
  },

  {
    id: 'thanh-long-phu-the-nam-vo-dep',
    title: 'Thanh Long tại Phu Thê - Nam mệnh vợ đẹp đoan trang',
    sao: ['Thanh Long'],
    cung: ['Phu Thê'],
    gioiTinh: 'Nam',
    doUuTien: 70,
    tomTat: `🌟 **Thanh Long tại Phu Thê — nam mệnh:**
- Vợ **ĐẸP, ĐOAN TRANG, CÓ HỌC THỨC**
- Biết **VUN VÉN GIA ĐÌNH**
- Hỗ trợ chồng trong **CÔNG DANH**`,
  },

  {
    id: 'thanh-long-phu-the-nu-chong-hien',
    title: 'Thanh Long tại Phu Thê - Nữ mệnh chồng hiền có địa vị',
    sao: ['Thanh Long'],
    cung: ['Phu Thê'],
    gioiTinh: 'Nữ',
    doUuTien: 70,
    tomTat: `🌟 **Thanh Long tại Phu Thê — nữ mệnh:**
- Chồng **HIỀN LÀNH**
- Có **ĐỊA VỊ XÃ HỘI**
- Là **CHỖ DỰA VỮNG CHẮC** cho gia đình`,
  },

  // ============================================================
  // 15. Thanh Long tại Huynh Đệ
  // ============================================================
  {
    id: 'thanh-long-tai-huynh-de',
    title: 'Thanh Long tại Huynh Đệ',
    sao: ['Thanh Long'],
    cung: ['Huynh Đệ'],
    doUuTien: 72,
    tomTat: `🌟 **Thanh Long cư Huynh Đệ:** anh chị em **có học thức, NHÂN HẬU,
sống có tình nghĩa**, mọi người **đoàn kết, yêu thương giúp đỡ** lẫn nhau.

🌟 Đương số hưởng **phúc khí** từ sự gắn bó của anh chị em — dễ có **quý nhân
trong chính anh em ruột thịt**.`,
  },

  {
    id: 'thanh-long-tai-huynh-de-ta-huu',
    title: 'Thanh Long + Tả Phù / Hữu Bật tại Huynh Đệ - anh em uy tín',
    sao: ['Thanh Long'],
    cung: ['Huynh Đệ'],
    ketHop: ['Tả Phù', 'Hữu Bật'],
    doUuTien: 67,
    tomTat: `🌟 **Thanh Long + Tả Phù / Hữu Bật tại Huynh Đệ:** gia đình dễ có
người làm **quan, làm thầy, luật sư** hoặc giữ vị trí **trí thức, uy tín**.`,
  },

  {
    id: 'thanh-long-tai-huynh-de-khoi-viet',
    title: 'Thanh Long + Thiên Khôi / Thiên Việt tại Huynh Đệ - anh em uy tín',
    sao: ['Thanh Long'],
    cung: ['Huynh Đệ'],
    ketHop: ['Thiên Khôi', 'Thiên Việt'],
    doUuTien: 67,
    tomTat: `🌟 **Thanh Long + Thiên Khôi / Thiên Việt tại Huynh Đệ:** gia đình
dễ có người làm **quan, làm thầy, luật sư** hoặc giữ vị trí **trí thức, uy
tín**.`,
  },

  {
    id: 'thanh-long-tai-huynh-de-xuong-khuc',
    title: 'Thanh Long + Văn Xương / Văn Khúc tại Huynh Đệ - anh em uy tín',
    sao: ['Thanh Long'],
    cung: ['Huynh Đệ'],
    ketHop: ['Văn Xương', 'Văn Khúc'],
    doUuTien: 67,
    tomTat: `🌟 **Thanh Long + Văn Xương / Văn Khúc tại Huynh Đệ:** gia đình dễ
có người làm **quan, làm thầy, luật sư** hoặc giữ vị trí **trí thức, uy tín**.`,
  },

  {
    id: 'thanh-long-tai-huynh-de-long-tri',
    title: 'Thanh Long + Long Trì tại Huynh Đệ - anh em uy tín',
    sao: ['Thanh Long'],
    cung: ['Huynh Đệ'],
    ketHop: ['Long Trì'],
    doUuTien: 67,
    tomTat: `🌟 **Thanh Long + Long Trì tại Huynh Đệ:** gia đình dễ có người làm
**quan, làm thầy, luật sư** hoặc giữ vị trí **trí thức, uy tín**.`,
  },

  {
    id: 'thanh-long-tai-huynh-de-phuong-cac',
    title: 'Thanh Long + Phượng Các tại Huynh Đệ - anh em uy tín',
    sao: ['Thanh Long'],
    cung: ['Huynh Đệ'],
    ketHop: ['Phượng Các'],
    doUuTien: 67,
    tomTat: `🌟 **Thanh Long + Phượng Các tại Huynh Đệ:** gia đình dễ có người
làm **quan, làm thầy, luật sư** hoặc giữ vị trí **trí thức, uy tín**.`,
  },

  {
    id: 'thanh-long-tai-huynh-de-kinh-da',
    title: 'Thanh Long + Kình Dương / Đà La tại Huynh Đệ - anh em bất hòa',
    sao: ['Thanh Long'],
    cung: ['Huynh Đệ'],
    ketHop: ['Kình Dương', 'Đà La'],
    doUuTien: 67,
    tomTat: `⚠️ **Thanh Long + Kình Dương / Đà La tại Huynh Đệ:** anh em **bất
hòa, hiểu lầm, xa cách**. Trường hợp nặng: anh em **hình khắc**, trong nhà có
người **yểu mệnh**.`,
  },

  {
    id: 'thanh-long-tai-huynh-de-khong-kiep',
    title: 'Thanh Long + Địa Không / Địa Kiếp tại Huynh Đệ - anh em bất hòa',
    sao: ['Thanh Long'],
    cung: ['Huynh Đệ'],
    ketHop: ['Địa Không', 'Địa Kiếp'],
    doUuTien: 67,
    tomTat: `⚠️ **Thanh Long + Địa Không / Địa Kiếp tại Huynh Đệ:** anh em **bất
hòa, hiểu lầm, xa cách**. Trường hợp nặng: anh em **hình khắc**, trong nhà có
người **yểu mệnh**.`,
  },

  // ============================================================
  // 16. Thanh Long tại Thìn - "Long cư Long vị"
  // ============================================================
  {
    id: 'thanh-long-tai-thin',
    title: 'Thanh Long tại Thìn - "Long cư Long vị"',
    sao: ['Thanh Long'],
    chi: ['Thìn'],
    doUuTien: 65,
    tomTat: `🌟 **Thanh Long tọa cung Thìn** = **"LONG CƯ LONG VỊ"** (Rồng ở vị
trí của rồng) — vị trí **RẤT ĐẸP**.

→ Thanh Long phát huy hết uy lực, **rực rỡ** như các trường hợp cách "Long
Kỵ" (Hóa Kỵ tại Tứ Mộ) hoặc "Long Hà" (Lưu Hà).

🌟 Mang lại **may mắn, phú quý, công danh hiển đạt** ở mức **TỐI ĐA** cho cung
mà nó tọa thủ.`,
  },

  // ============================================================
  // 17. Thanh Long + Hóa Kỵ ở Tứ Mộ - Rồng ẩn trong mây
  // ============================================================
  {
    id: 'thanh-long-hoa-ky-tu-mo',
    title: 'Thanh Long + Hóa Kỵ ở Tứ Mộ - "Rồng ẩn trong mây ngũ sắc"',
    sao: ['Thanh Long'],
    chi: ['Thìn', 'Tuất', 'Sửu', 'Mùi'],
    ketHop: ['Hóa Kỵ'],
    doUuTien: 62,
    tomTat: `🌟 **Thanh Long + Hóa Kỵ ở TỨ MỘ (Thìn / Tuất / Sửu / Mùi):**

→ Ví như **"RỒNG XANH ẨN TRONG MÂY NGŨ SẮC"** — như **rồng gặp mây, người gặp
thời RỰC RỠ**.

⚡ **Đặc biệt:** đây là cách hiếm khi Hóa Kỵ trở thành CÁT — Hóa Kỵ ở Tứ Mộ
giúp Thanh Long phát uy.

🌟 **Có lợi cho:**
- **Phú quý**
- **Hôn nhân, sinh nở**
- **Thi cử**`,
  },

  // ============================================================
  // 18. Thanh Long + Lưu Hà - Rồng vùng vẫy trên sông
  // ============================================================
  {
    id: 'thanh-long-luu-ha',
    title: 'Thanh Long + Lưu Hà - "Rồng xanh vùng vẫy trên sông lớn"',
    sao: ['Thanh Long'],
    ketHop: ['Lưu Hà'],
    doUuTien: 60,
    tomTat: `🌟 **Thanh Long + Lưu Hà:** ví như **"RỒNG XANH VÙNG VẪY TRÊN SÔNG
LỚN"**.

→ Ám chỉ người **GẶP THỜI RỰC RỠ** — hai sao đều mang yếu tố Thủy + dòng
chảy → cộng hưởng mạnh.

🌟 **Có lợi cho:**
- **Phú quý**
- **Hôn nhân, sinh nở**
- **Thi cử**`,
  },

  // ============================================================
  // 19. Thanh Long + Quan Đới - gặp thời đắc dụng
  // ============================================================
  {
    id: 'thanh-long-quan-doi',
    title: 'Thanh Long + Quan Đới - Gặp thời, đắc dụng, thành công',
    sao: ['Thanh Long'],
    ketHop: ['Quan Đới'],
    doUuTien: 58,
    tomTat: `🌟 **Thanh Long + Quan Đới:** người **GẶP THỜI**, **ĐẮC DỤNG**,
**thành công**.

(Quan Đới = một trong 12 sao vòng Tràng Sinh — chỉ giai đoạn được mặc áo nhậm
chức, đắc thế)

→ Thanh Long + Quan Đới = **Rồng đến lúc đăng quan** → công danh hiển đạt.`,
  },

  // ============================================================
  // 20. Thanh Long + sát bại tinh - mất uy lực
  // ============================================================
  {
    id: 'thanh-long-sat-bai-tinh',
    title: 'Thanh Long + Sát bại tinh - Mất uy lực, yểu hèn',
    sao: ['Thanh Long'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    doUuTien: 55,
    tomTat: `⚠️ **Thanh Long hội sát tinh** (Kình Dương / Đà La / Hỏa Tinh / Linh
Tinh): **MẤT HẾT UY LỰC**, trở thành **YỂU và HÈN NHÁT**.

→ Rồng xanh khi gặp sát bại tinh thì như **rồng bị thương, mất sức** → không
còn uy nghiêm, dũng mãnh nữa.`,
  },

  {
    id: 'thanh-long-day-du-sat-bai',
    title: 'Thanh Long + Không Kiếp + Kình Đà + Linh Hỏa + Hóa Kỵ - đại nguy',
    sao: ['Thanh Long'],
    ketHop: ['Địa Không', 'Địa Kiếp', 'Kình Dương', 'Đà La', 'Linh Tinh', 'Hỏa Tinh', 'Hóa Kỵ'],
    doUuTien: 50,
    tomTat: `⚠️ **Thanh Long + Không Kiếp + Kình Đà + Linh Hỏa + Hóa Kỵ đầy đủ:**
đặc biệt nguy hiểm — Thanh Long mất hết uy lực, **đại nguy nan**.`,
  },

  // ============================================================
  // 21. Thanh Long vào hạn
  // ============================================================
  {
    id: 'thanh-long-vao-han',
    title: 'Thanh Long vào hạn',
    sao: ['Thanh Long'],
    doUuTien: 50,
    tomTat: `🌟 **Hạn có Thanh Long:** giai đoạn **HỶ KHÍ, MAY MẮN**:
- **Thi cử đỗ đạt**, học hành thuận lợi
- **Cầu danh** hanh thông
- **Hôn nhân, sinh nở** thuận lợi
- **Bệnh tật/tai họa nhỏ** được giải trừ

🌟 Nếu hội thêm **Hóa Kỵ tại Tứ Mộ** hoặc **Lưu Hà** → cách "Rồng gặp thời" →
**đại phát**.`,
  },

  {
    id: 'thanh-long-vao-han-sat-bai',
    title: 'Thanh Long + Sát bại tinh vào hạn - mất uy lực',
    sao: ['Thanh Long'],
    ketHop: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'],
    doUuTien: 45,
    tomTat: `⚠️ **Thanh Long + Sát bại tinh (Lục Sát) vào hạn:** mất uy lực —
cẩn thận lui về giữ mình.`,
  },
];
