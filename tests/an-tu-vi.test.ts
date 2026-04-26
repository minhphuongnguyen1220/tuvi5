/**
 * Test thuật toán an Tử Vi.
 * Chạy: npx tsx tests/an-tu-vi.test.ts
 */
import { anTuVi } from '../src/core/tuvi/chinh-tinh';
import { Cuc } from '../src/core/tuvi/types';

const cucs: Cuc[] = [
  { ten: 'Thủy Nhị Cục', hanh: 'Thủy', so: 2 },
  { ten: 'Mộc Tam Cục',  hanh: 'Mộc',  so: 3 },
  { ten: 'Kim Tứ Cục',   hanh: 'Kim',  so: 4 },
  { ten: 'Thổ Ngũ Cục',  hanh: 'Thổ',  so: 5 },
  { ten: 'Hỏa Lục Cục',  hanh: 'Hỏa',  so: 6 },
];

console.log('=== Bảng vị trí Tử Vi theo Cục số và ngày sinh âm ===\n');
console.log('Ngày | Thủy 2 | Mộc 3 | Kim 4 | Thổ 5 | Hỏa 6');
console.log('-----|--------|-------|-------|-------|-------');

for (let d = 1; d <= 30; d++) {
  const cells = cucs.map(c => anTuVi(d, c).padEnd(6));
  console.log(` ${d.toString().padStart(2, ' ')}  | ${cells.join(' | ')}`);
}

console.log('\n=== Ví dụ user đưa ===');
console.log('Ngày 15, Mộc Tam Cục:', anTuVi(15, cucs[1]), '(user: Ngọ - chia hết, thương 5, dừng tại 5 = Ngọ)');
console.log('Ngày 10, Mộc Tam Cục:', anTuVi(10, cucs[1]), '(user: Mùi - mượn 2 chẵn, thương 4 = Tỵ, tiến 2 = Mùi)');

console.log('\n=== Lá số mẫu user ===');
console.log('Ngày 23, Thổ Ngũ Cục:', anTuVi(23, cucs[3]), '(dự kiến: Thân)');
