/**
 * Test Nhóm 1: Âm/Dương lá số + Ngũ hành Nạp âm.
 * Chạy: npx tsx tests/nhom-1.test.ts
 */
import { xacDinhAmDuongLaSo, amDuongCuaCan, nguHanhCuaCan, nguHanhCuaChi } from '../src/core/tuvi/am-duong';
import { napAmCuaNam } from '../src/core/tuvi/nap-am';
import { Can, Chi, CAN_LIST, CHI_LIST } from '../src/core/tuvi/types';

console.log('=== Âm/Dương Can ===');
for (const c of CAN_LIST) {
  console.log(`  ${c}: ${amDuongCuaCan(c)} (${nguHanhCuaCan(c)})`);
}

console.log('\n=== Ngũ hành Chi ===');
for (const c of CHI_LIST) {
  console.log(`  ${c}: ${nguHanhCuaChi(c)}`);
}

console.log('\n=== Âm/Dương lá số (4 trường hợp) ===');
console.log('  Giáp + Nam:', xacDinhAmDuongLaSo('Giáp', 'Nam'));
console.log('  Ất + Nam:', xacDinhAmDuongLaSo('Ất', 'Nam'));
console.log('  Giáp + Nữ:', xacDinhAmDuongLaSo('Giáp', 'Nữ'));
console.log('  Ất + Nữ:', xacDinhAmDuongLaSo('Ất', 'Nữ'));

console.log('\n=== Bảng 60 hoa giáp - Ngũ hành Nạp âm (toàn bộ) ===');
console.log('STT | Can Chi | Nạp âm');
console.log('-----|---------|-----------------');

// Sinh tất cả 60 năm, bắt đầu từ Giáp Tý
for (let i = 0; i < 60; i++) {
  const can = CAN_LIST[i % 10] as Can;
  const chi = CHI_LIST[i % 12] as Chi;
  const napAm = napAmCuaNam({ can, chi });
  const stt = (i + 1).toString().padStart(2, ' ');
  const canChi = `${can} ${chi}`.padEnd(10, ' ');
  console.log(` ${stt} | ${canChi} | ${napAm.tenGoi} (${napAm.hanh})`);
}

console.log('\n=== Vài năm cụ thể để bạn kiểm tra ===');
const cacNamMau: { ten: string; canChi: { can: Can; chi: Chi } }[] = [
  { ten: '1990 Canh Ngọ', canChi: { can: 'Canh', chi: 'Ngọ' } },
  { ten: '1985 Ất Sửu', canChi: { can: 'Ất', chi: 'Sửu' } },
  { ten: '2000 Canh Thìn', canChi: { can: 'Canh', chi: 'Thìn' } },
  { ten: '1995 Ất Hợi', canChi: { can: 'Ất', chi: 'Hợi' } },
];
for (const { ten, canChi } of cacNamMau) {
  const napAm = napAmCuaNam(canChi);
  console.log(`  Năm ${ten}: ${napAm.tenGoi} (${napAm.hanh})`);
}
