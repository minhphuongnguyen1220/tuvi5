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

⚡ **Đặc trưng ăn nhậu:** "ăn được ngủ được là tiên" rất đúng với Lực Sĩ.

🌟 **+ Thiên Đồng / Tham Lang / Liêm Trinh / Thiên Trù:** **ăn khỏe**, thích
**ăn uống nhậu nhẹt tiệc tùng**.

🌟 **+ Hóa Lộc:** càng **sành ăn**, **thích ăn ngon ăn nhiều**, tìm lạc thú
trong sự ăn uống → "cao thủ" trong tiệc tùng.`,
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

🌟 **+ Phong Cáo / Hóa Quyền / Tả Hữu / Quang Quý / Thiên Việt:** cha mẹ làm
**võ nghiệp, quân nhân, sĩ quan, an ninh**.

⚠️ **Không có quyền tinh:** cha mẹ chịu thương chịu khó, **"bán mặt cho đất,
bán lưng cho trời"**, thường xuất thân **nông dân hoặc buôn bán nhỏ**.

⚠️ **+ Sao phá tài:** cha mẹ phải **lao lực kiếm tiền**, ít thời gian chăm con
→ tình cảm gia đình khó trọn vẹn.`,
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

🌟 **Mồ mả các cụ to, bề thế**.

🌟 **+ Tràng Sinh / Quang Quý / Thiên Thọ:** dòng họ **TỐT PHÚC**, nhiều người
**SỐNG THỌ**.

🌟 **+ Tả Hữu + Linh Tinh + Đà La:** đương số hình thành **khí chất KIÊN ĐỊNH**,
mang tinh thần **bậc vĩ nhân**, **"dùi mài kinh sử"** đến ngày thành công.`,
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
/ Tả Phù / Hữu Bật:** giúp **TRÁNH SỤP ĐỔ**, tai họa.

⚠️ **+ Hỏa / Kiếp / Đà / Tử / Tuần:** cẩn trọng nguy cơ **mắc kẹt hoặc tai
nạn** trong những không gian kiên cố.`,
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
- Ngành nghề yêu cầu **THỂ LỰC LỚN** (lao động chân tay, kỹ thuật nặng)

🌟 **+ Văn tinh** (Xương Khúc): công việc vừa cần **sức** vừa cần **trí** →
tạo cân bằng hài hòa.

⚠️ **+ Thất Sát + Hóa Kỵ + Thiên Hình:** cần xem cung Tật Ách — công việc có
thể khiến sức khỏe **suy giảm**, **"làm việc quên thân" mà sinh bệnh**.`,
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
    tomTat: `**Lực Sĩ cư Nô:** **tăng SỐ LƯỢNG bạn bè**.

🌟 **+ Tả Hữu / Quang Quý / Khôi Việt:** bạn bè **ít nhưng CHẤT LƯỢNG**, kết
giao với người **tử tế, thật lòng**.

🌟 **+ Thiên Trù:** hay được bạn bè **rủ đi ăn nhậu**, cơ hội tốt nảy nở **trên
bàn tiệc** (đặc biệt + sao Lộc).

⚠️ **+ Kình Dương / Thiên Hình / Không Kiếp / Hóa Kỵ:** **nhiều bạn xấu, giang
hồ** → cẩn thận **bị ám hại, hành hung, phản bội** bởi bạn bè đồng nghiệp.`,
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

⚡ Ra ngoài **vất vả** nhưng mang hình ảnh **khỏe mạnh, nhanh nhẹn**.

🌟 **+ Thiên Trù:** ra ngoài hay **đợi mời đi ăn nhậu**.

🌟 **+ Lộc + Tả Hữu:** nên ra ngoài giao lưu nhiều — có khả năng kết bạn với
người **có chí khí, sức vóc, nhiệt huyết**.`,
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

⚠️ Đặc trưng: liên quan tới **THỪA CÂN, ăn uống quá độ**.

⚠️ **+ Đà La / Kiếp / Tuần** (sao chủ kéo dài): bệnh tật trở nên **dai dẳng,
khó dứt**.

🌟 **+ Tả Hữu / Hóa Quyền:** tạo **động lực chăm sóc sức khỏe** → ngoại hình
và thể lực tốt.

⚠️ **+ Thiên Trù / Thiên Phủ** (sao chủ ăn uống): đề phòng **béo phì**.`,
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
mục đích cơ bản: **ăn uống, chơi bời, nhậu nhẹt**.

⚠️ **+ Kiếp / Kỵ / Hỏa Tinh / Linh Tinh:** dễ tiêu pha cho mục đích **không
chính đáng** (nhậu nhẹt, hưởng thụ).

🌟 **+ Lộc + văn tinh:** kết hợp **lao động tay chân với trí lực** → công việc
nhẹ nhàng hơn, dễ đạt thành tựu tài chính.`,
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

🌟 Con cái **khỏe mạnh, tốt tính, đơn giản**.

🌟 **+ Khôi Việt / Hóa Lộc:** càng rõ rệt — nhiều con và đều **hưng vượng**.`,
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
    tomTat: `**Lực Sĩ cư Phu Thê:** không được đánh giá cao, đặc biệt với **nam
mệnh**.

**Tướng người hôn phối:** dễ **TO LỚN, có sức khỏe tốt, ăn khỏe**.

⚠️ **Nam mệnh:** vợ thường **vất vả lao lực**, **giảm nhan sắc**, khó giữ
**sự mặn nồng** ban đầu — vì lo mưu sinh nên khó giữ **lửa tình cảm** trong gia
đình.

⚠️ **Nữ mệnh + Thiên Hình / Không Kiếp / Kình Đà / Hóa Kỵ:** cần cẩn trọng
nguy cơ **BẠO HÀNH GIA ĐÌNH** — đặc biệt là **bạo hành thể xác**.`,
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
**to lớn, khỏe mạnh**.

🌟 **+ Cát tinh:** anh chị em **gắn bó, bền vững**, trở thành **chỗ dựa, che
chở** cho nhau khi gặp khó khăn.

⚠️ **+ Sát / Hình / Kỵ:** dễ **"trâu buộc ghét trâu ăn"** — anh em **mâu thuẫn**,
thậm chí **bắt nạt nhau**.`,
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

→ Mẫu người tướng quân, dũng tướng — sức mạnh + uy nghiêm.

⚡ **+ Thiên Hình:** thể hiện **sức mạnh, uy nghiêm, khó tính** và phần dũng
mãnh.`,
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

⚠️ Nếu cung **Phụ Mẫu cũng xấu** (cha mẹ không thể giúp đỡ) → số phận càng
thêm **long đong**.`,
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
    tomTat: `🌟 **Hạn có Lực Sĩ:**

- **+ Thiên Mã:** **gặp thời vận tốt**
- **+ Thiên Trù:** được **mời ăn uống linh đình**

→ Hạn của hành động, sức khỏe, công việc tay chân.

⚠️ Cần **rèn tính kiên nhẫn, tránh nóng vội** — sức mạnh nếu không tiết chế dễ
biến thành **gánh nặng**, khiến cuộc sống lao đao.`,
  },
];
