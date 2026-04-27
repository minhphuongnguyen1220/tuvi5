/**
 * Test sao theo Can năm sinh: Thiên Khôi/Việt, Lưu Hà, Tứ Hóa.
 * Lá số mẫu: năm Canh Thìn.
 */
import { tinhKhoiViet, tinhLuuHa, BANG_TU_HOA } from '../src/core/tuvi/phu-tinh';
import { lapLaSo } from '../src/core/tuvi/lap-la-so';

console.log('=== Thiên Khôi + Thiên Việt (Can Canh) ===');
const kv = tinhKhoiViet('Canh');
for (const [k, v] of Object.entries(kv)) console.log(`  ${k} → ${v}`);

console.log('\n=== Lưu Hà (Can Canh) ===');
console.log(`  Lưu Hà → ${tinhLuuHa('Canh')}`);

console.log('\n=== Tứ Hóa (Canh) — sao mà 4 hóa gắn vào ===');
const th = BANG_TU_HOA['Canh'];
console.log(`  Hóa Lộc  → ${th.loc}`);
console.log(`  Hóa Quyền → ${th.quyen}`);
console.log(`  Hóa Khoa → ${th.khoa}`);
console.log(`  Hóa Kỵ   → ${th.ky}`);

console.log('\n=== Vị trí Tứ Hóa trên lá số mẫu ===');
const ls = lapLaSo({
  ngaySinh: new Date(2000, 11, 18, 1, 55),
  gioiTinh: 'Nữ',
});

// In ra tất cả phụ tinh có chữ "Hóa"
for (const cung of ls.cacCung) {
  const hoaSao = cung.saoPhu.filter(s => s.ten.startsWith('Hóa'));
  if (hoaSao.length > 0) {
    console.log(`  Cung ${cung.ten} (${cung.chi}):`);
    for (const s of hoaSao) console.log(`    - ${s.ten}`);
  }
}
