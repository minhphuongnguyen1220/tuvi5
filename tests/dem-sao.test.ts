import { lapLaSo } from '../src/core/tuvi/lap-la-so';

const ls = lapLaSo({ ngaySinh: new Date(2000, 11, 18, 1, 55), gioiTinh: 'Nữ' });

let totalChinh = 0, totalPhu = 0;
for (const c of ls.cacCung) {
  totalChinh += c.saoChinh.length;
  totalPhu += c.saoPhu.length;
}
console.log(`Tổng chính tinh: ${totalChinh}`);
console.log(`Tổng phụ/sát tinh: ${totalPhu}`);
console.log(`Tổng cộng: ${totalChinh + totalPhu} sao\n`);

console.log('=== Chi tiết từng cung ===');
for (const c of ls.cacCung) {
  console.log(`\n${c.ten} (${c.chi}):`);
  if (c.saoChinh.length > 0) {
    console.log(`  Chính: ${c.saoChinh.map(s => s.ten).join(', ')}`);
  }
  if (c.saoPhu.length > 0) {
    console.log(`  Phụ:   ${c.saoPhu.map(s => s.ten).join(', ')}`);
  }
}
