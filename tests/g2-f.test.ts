/**
 * Test G2-F: Sao theo Chi năm + theo Can năm + đồng cung Vòng Thái Tuế.
 * Sample: Năm Canh Thìn (Can Canh, Chi Thìn, tam hợp Thân-Tý-Thìn).
 */
import {
  tinhThienTru, tinhThienQuanPhuc,
  tinhSaoNghichTuNam, tinhSaoTheoTamHopNam,
  tinhCoThanQuaTu, tinhPhaToai,
  SAO_DONG_CUNG_THAI_TUE, tinhVongThaiTue,
} from '../src/core/tuvi/phu-tinh';

console.log('=== Theo Can Canh ===');
console.log(`  Thiên Trù  → ${tinhThienTru('Canh')}`);
const qf = tinhThienQuanPhuc('Canh');
console.log(`  Thiên Quan → ${qf['Thiên Quan']}`);
console.log(`  Thiên Phúc → ${qf['Thiên Phúc']}`);

console.log('\n=== Sao đồng cung Vòng Thái Tuế (năm Thìn) ===');
const vtt = tinhVongThaiTue('Thìn');
for (const [sao, host] of Object.entries(SAO_DONG_CUNG_THAI_TUE)) {
  console.log(`  ${sao.padEnd(11)} = ${host} → ${vtt[host]}`);
}

console.log('\n=== Khởi cung X (năm Tý) nghịch đến chi năm Thìn ===');
const sn = tinhSaoNghichTuNam('Thìn');
for (const [k, v] of Object.entries(sn)) console.log(`  ${k.padEnd(11)} → ${v}`);

console.log('\n=== Theo tam hợp Thân-Tý-Thìn (chi năm Thìn) ===');
const th = tinhSaoTheoTamHopNam('Thìn');
for (const [k, v] of Object.entries(th)) console.log(`  ${k.padEnd(11)} → ${v}`);

console.log('\n=== Cô Thần + Quả Tú (Thìn ∈ Dần-Mão-Thìn) ===');
const ct = tinhCoThanQuaTu('Thìn');
for (const [k, v] of Object.entries(ct)) console.log(`  ${k.padEnd(11)} → ${v}`);

console.log('\n=== Phá Toái (Thìn ∈ Tứ mộ) ===');
console.log(`  Phá Toái → ${tinhPhaToai('Thìn')}`);
