import { tinhVongLocTon, VONG_LOC_TON_OFFSET } from '../src/core/tuvi/phu-tinh';

const r = tinhVongLocTon('Canh', 'Dương Nữ');
console.log('=== Vòng Lộc Tồn cho lá số mẫu (Can Canh → khởi Thân, Dương Nữ → đi nghịch) ===');
for (const { sao: saos } of VONG_LOC_TON_OFFSET) {
  for (const sao of saos) {
    console.log(`  ${sao.padEnd(13)} → ${r[sao]}`);
  }
}
