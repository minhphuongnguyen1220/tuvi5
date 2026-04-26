/**
 * Test Nhóm 2: Mệnh chủ + Thân chủ.
 * Chạy: npx tsx tests/nhom-2.test.ts
 */
import { menhChuTheoChiNam, thanChuTheoChiNam } from '../src/core/tuvi/menh-than-chu';
import { CHI_LIST } from '../src/core/tuvi/types';

console.log('=== Mệnh chủ theo Chi NĂM SINH ===');
for (const chi of CHI_LIST) {
  console.log(`  Năm ${chi.padEnd(5)} → ${menhChuTheoChiNam(chi)}`);
}

console.log('\n=== Thân chủ theo Chi NĂM SINH ===');
for (const chi of CHI_LIST) {
  console.log(`  Năm ${chi.padEnd(5)} → ${thanChuTheoChiNam(chi)}`);
}
