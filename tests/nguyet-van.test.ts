/**
 * Test Nguyệt vận theo công thức Nam Tông Việt Nam (tháng đếm nghịch, giờ đếm thuận).
 */
import { tinhNguyetVan, cungThangGiengNguyetVan, tinhTieuVan } from '../src/core/tuvi/van';

console.log('=== Ví dụ user: Nam Canh Thìn, sinh tháng 5 âm, giờ Mùi (13h) ===');
console.log('Năm 2024 - tiểu hạn Tuất\n');

// Giờ Mùi = 13h-15h, lấy 13h làm input
const chiThangGieng = cungThangGiengNguyetVan('Tuất', 5, 13);
console.log(`Tháng Giêng năm 2024 = ${chiThangGieng} (dự kiến: Sửu)\n`);

console.log('Tháng | Cung nguyệt vận');
console.log('------|----------------');
for (let t = 1; t <= 12; t++) {
  const nv = tinhNguyetVan('Tuất', 5, 13, t);
  console.log(`  ${t.toString().padStart(2)}  | ${nv.cung}`);
}

console.log('\n=== Lá số mẫu user (Nữ Canh Thìn, sinh tháng 11 âm, giờ Sửu = 1h) ===');
console.log('Năm 2026 - tiểu hạn Thân (tuổi 27 mụ)\n');

const chiThangGiengSample = cungThangGiengNguyetVan('Thân', 11, 1);
console.log(`Tháng Giêng năm 2026 = ${chiThangGiengSample}\n`);

console.log('Tháng | Cung nguyệt vận');
console.log('------|----------------');
for (let t = 1; t <= 12; t++) {
  const nv = tinhNguyetVan('Thân', 11, 1, t);
  console.log(`  ${t.toString().padStart(2)}  | ${nv.cung}`);
}
