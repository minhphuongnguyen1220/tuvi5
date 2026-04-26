/**
 * Test nhanh hàm lich-am.ts để xác nhận:
 * - Đổi dương → âm chính xác
 * - Tính Can Chi giờ đúng theo Ngũ Thử Độn
 *
 * Chạy: npx tsx tests/lich-am.test.ts
 */
import { doiSangAmLich, canChiCuaGio, chiCuaGio } from '../src/core/tuvi/lich-am';

// Test 1: Một ngày bất kỳ - kiểm tra các trường có giá trị
const ngay = new Date(1990, 0, 15, 10, 30); // 15/01/1990 10:30
const amLich = doiSangAmLich(ngay);
console.log('=== Test 1: 15/01/1990 10:30 ===');
console.log(amLich);

// Test 2: Can Chi giờ - quy tắc Ngũ Thử Độn
console.log('\n=== Test 2: Can Chi giờ theo ngày Giáp ===');
console.log('Ngày Giáp, giờ 0h (Tý):', canChiCuaGio('Giáp', 0));   // Giáp Tý
console.log('Ngày Giáp, giờ 2h (Sửu):', canChiCuaGio('Giáp', 2));  // Ất Sửu
console.log('Ngày Giáp, giờ 12h (Ngọ):', canChiCuaGio('Giáp', 12)); // Canh Ngọ
console.log('Ngày Giáp, giờ 23h (Tý):', canChiCuaGio('Giáp', 23)); // Giáp Tý

console.log('\n=== Test 3: Can Chi giờ theo ngày Đinh ===');
console.log('Ngày Đinh, giờ 0h (Tý):', canChiCuaGio('Đinh', 0));   // Canh Tý
console.log('Ngày Đinh, giờ 12h (Ngọ):', canChiCuaGio('Đinh', 12)); // Bính Ngọ

console.log('\n=== Test 4: Chi của các giờ ===');
for (const h of [0, 1, 2, 3, 11, 12, 13, 22, 23]) {
  console.log(`  ${h}h →`, chiCuaGio(h));
}
