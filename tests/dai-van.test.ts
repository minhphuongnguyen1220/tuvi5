/**
 * Test Đại vận với lá số mẫu của user.
 * Sinh: 18/12/2000 dương, 1h55, Nữ
 * Cục: Thổ Ngũ Cục (5)
 * Cung Mệnh: Hợi
 * Âm dương lá số: Dương Nữ → ĐẠI VẬN ĐI NGHỊCH
 */
import { tinhDaiVan } from '../src/core/tuvi/van';
import { Cuc } from '../src/core/tuvi/types';

const cuc: Cuc = { ten: 'Thổ Ngũ Cục', hanh: 'Thổ', so: 5 };

console.log('=== Đại vận lá số mẫu (Dương Nữ, Cục 5, Mệnh tại Hợi) ===\n');
const dv = tinhDaiVan(cuc, 'Dương Nữ', 'Hợi');

console.log('STT | Tuổi          | Cung (Chi)');
console.log('----|---------------|------------');
const tenCungThuTu = ['Mệnh', 'Huynh Đệ', 'Phu Thê', 'Tử Tức', 'Tài Bạch', 'Tật Ách',
                     'Thiên Di', 'Nô Bộc', 'Quan Lộc', 'Điền Trạch', 'Phúc Đức', 'Phụ Mẫu'];
dv.forEach((v, i) => {
  console.log(` ${(i+1).toString().padStart(2)} | ${v.tuoiBatDau}-${v.tuoiKetThuc.toString().padEnd(3)} tuổi | ${v.cung} (${tenCungThuTu[i]})`);
});

console.log('\n=== So sánh với Dương Nam (đi thuận) ===\n');
const dvThuan = tinhDaiVan(cuc, 'Dương Nam', 'Hợi');
const tenCungThuan = ['Mệnh', 'Phụ Mẫu', 'Phúc Đức', 'Điền Trạch', 'Quan Lộc', 'Nô Bộc',
                      'Thiên Di', 'Tật Ách', 'Tài Bạch', 'Tử Tức', 'Phu Thê', 'Huynh Đệ'];
dvThuan.forEach((v, i) => {
  console.log(` ${(i+1).toString().padStart(2)} | ${v.tuoiBatDau}-${v.tuoiKetThuc.toString().padEnd(3)} tuổi | ${v.cung} (${tenCungThuan[i]})`);
});
