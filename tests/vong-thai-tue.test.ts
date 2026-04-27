import { tinhVongThaiTue, VONG_THAI_TUE_OFFSET } from '../src/core/tuvi/phu-tinh';

const r = tinhVongThaiTue('Thìn');
console.log('=== Vòng Thái Tuế cho năm Thìn (lá số mẫu Canh Thìn) ===');
for (const { sao: saos } of VONG_THAI_TUE_OFFSET) {
  for (const sao of saos) {
    console.log(`  ${sao.padEnd(14)} → ${r[sao]}`);
  }
}
