import { tinhSaoTheoThangSinh, SAO_THEO_THANG_SINH, SAO_THEO_CHI_CO_DINH } from '../src/core/tuvi/phu-tinh';

console.log('=== Sao theo Chi cố định (mọi lá số đều giống) ===');
for (const [sao, chi] of Object.entries(SAO_THEO_CHI_CO_DINH)) {
  console.log(`  ${sao.padEnd(11)} → ${chi}`);
}

console.log('\n=== Sao theo Tháng sinh - lá số mẫu sinh tháng 11 âm ===');
const r = tinhSaoTheoThangSinh(11);
for (const { ten } of SAO_THEO_THANG_SINH) {
  console.log(`  ${ten.padEnd(11)} → ${r[ten]}`);
}

console.log('\n=== Verify Tả Phụ + Hữu Bật đối qua trục Sửu-Mùi (sum chi index = 14 mod 12) ===');
const CHI_LIST_LOCAL = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];
for (let t = 1; t <= 12; t++) {
  const r = tinhSaoTheoThangSinh(t);
  const ta = CHI_LIST_LOCAL.indexOf(r['Tả Phụ']);
  const huu = CHI_LIST_LOCAL.indexOf(r['Hữu Bật']);
  console.log(`  Tháng ${t.toString().padStart(2)}: Tả Phụ=${r['Tả Phụ'].padEnd(5)} (${ta}), Hữu Bật=${r['Hữu Bật'].padEnd(5)} (${huu}), sum=${(ta+huu) % 12}`);
}
