/**
 * Test Nhóm 3: An cung Mệnh, an cung Thân, 12 cung, can mỗi cung.
 * Chạy: npx tsx tests/nhom-3.test.ts
 */
import {
  anCungMenh, anCungThan, diaChi12Cung, canMoi12Cung, tinhCanChi12Cung,
} from '../src/core/tuvi/cung';
import { Can, Chi } from '../src/core/tuvi/types';

console.log('=== Ví dụ 1: Tháng 1, giờ Tý (giờ sinh 0h) ===');
console.log('  Cung Mệnh:', anCungMenh(1, 0));   // Khởi Dần, thuận tháng 1 = Dần, nghịch giờ Tý 0 bước = Dần
console.log('  Cung Thân:', anCungThan(1, 0));   // Khởi Dần, thuận tháng 1 = Dần, thuận giờ Tý 0 bước = Dần
console.log('  → Mệnh Thân đồng cung tại Dần');

console.log('\n=== Ví dụ 2: Tháng 5, giờ Sửu (1h) ===');
console.log('  Cung Mệnh:', anCungMenh(5, 1));   // Dần+4=Ngọ, nghịch 1=Tỵ
console.log('  Cung Thân:', anCungThan(5, 1));   // Dần+4=Ngọ, thuận 1=Mùi

console.log('\n=== Ví dụ 3: Tháng 8, giờ Ngọ (12h) ===');
console.log('  Cung Mệnh:', anCungMenh(8, 12));  // Dần+7=Dậu, nghịch 6 (Ngọ idx)=Mão
console.log('  Cung Thân:', anCungThan(8, 12));  // Dần+7=Dậu, thuận 6=Mão (đồng cung)

console.log('\n=== Ví dụ 4: 12 cung khi cung Mệnh ở Tỵ ===');
const cung12 = diaChi12Cung('Tỵ');
for (const [tenCung, chi] of Object.entries(cung12)) {
  console.log(`  ${tenCung.padEnd(10)} → ${chi}`);
}

console.log('\n=== Ví dụ 5: Can của 12 cung khi năm sinh Giáp ===');
const can12 = canMoi12Cung('Giáp' as Can);
for (const [chi, can] of Object.entries(can12)) {
  console.log(`  ${chi.padEnd(5)} → ${can}`);
}

console.log('\n=== Ví dụ 6: Lá số tổng hợp - sinh tháng 5, giờ Sửu, năm Giáp Tý ===');
const chiMenh = anCungMenh(5, 1);
console.log(`  Cung Mệnh: ${chiMenh}`);
const fullCung = tinhCanChi12Cung(chiMenh, 'Giáp' as Can);
console.log('  Tên cung    | Chi   | Can-Chi');
console.log('  ------------|-------|----------');
for (const c of fullCung) {
  const ten = c.tenCung.padEnd(10);
  const chi = c.chi.padEnd(5);
  const cc = `${c.canChi.can} ${c.canChi.chi}`;
  console.log(`  ${ten}  | ${chi} | ${cc}`);
}
