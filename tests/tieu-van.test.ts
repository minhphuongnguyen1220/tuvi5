/**
 * Test Tiểu vận với lá số mẫu user (Nữ Canh Thìn).
 * Năm sinh chi Thìn → tam hợp Thân-Tý-Thìn → cung khởi đầu = Tuất.
 * Nữ → đi nghịch.
 */
import { tinhTieuVan } from '../src/core/tuvi/van';

console.log('=== Tiểu vận lá số mẫu (Nữ Thìn, khởi Tuất, đi nghịch) ===\n');
console.log('Tuổi mụ | Cung tiểu vận');
console.log('--------|---------------');
for (let tuoi = 1; tuoi <= 30; tuoi++) {
  const tv = tinhTieuVan('Thìn', 'Nữ', tuoi);
  console.log(`  ${tuoi.toString().padStart(2)}    | ${tv.cung}`);
}

console.log('\n=== So sánh với Nam Thìn (đi thuận) ===\n');
console.log('Tuổi mụ | Cung tiểu vận');
console.log('--------|---------------');
for (let tuoi = 1; tuoi <= 15; tuoi++) {
  const tv = tinhTieuVan('Thìn', 'Nam', tuoi);
  console.log(`  ${tuoi.toString().padStart(2)}    | ${tv.cung}`);
}

console.log('\n=== Người sinh chi Hợi (Nữ, đi nghịch, khởi Sửu) - kiểm tra ví dụ user ===\n');
for (let tuoi = 1; tuoi <= 5; tuoi++) {
  console.log(`  Tuổi ${tuoi} → ${tinhTieuVan('Hợi', 'Nữ', tuoi).cung}`);
}
