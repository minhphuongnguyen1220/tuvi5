/**
 * Test G2-B (giờ), G2-D (ngày), G2-E (Lộc Tồn offset).
 * Lá số mẫu: Nữ Canh Thìn, sinh tháng 11 âm, ngày 23 âm, giờ Sửu (1h), Dương Nữ.
 */
import {
  tinhSaoTheoGioSinh, tinhHoaLinhTinh,
  tinhSaoTheoNgaySinh, tinhSaoOffsetTuLocTon, tinhSaoTheoThangSinh,
} from '../src/core/tuvi/phu-tinh';

console.log('=== G2-B: Sao theo GIỜ (giờ Sửu = 1h) ===');
const saoGio = tinhSaoTheoGioSinh(1);
for (const [k, v] of Object.entries(saoGio)) console.log(`  ${k.padEnd(12)} → ${v}`);

console.log('\n=== Hỏa Tinh + Linh Tinh (Chi năm Thìn, giờ Sửu, Dương Nữ) ===');
const hl = tinhHoaLinhTinh('Thìn', 1, 'Dương Nữ');
for (const [k, v] of Object.entries(hl)) console.log(`  ${k.padEnd(12)} → ${v}`);

console.log('\n=== G2-D: Sao theo NGÀY (ngày 23 âm) ===');
const saoThang = tinhSaoTheoThangSinh(11);
const saoNgay = tinhSaoTheoNgaySinh(23, {
  taPhu: saoThang['Tả Phụ'],
  huuBat: saoThang['Hữu Bật'],
  vanXuong: saoGio['Văn Xương'],
  vanKhuc: saoGio['Văn Khúc'],
});
for (const [k, v] of Object.entries(saoNgay)) console.log(`  ${k.padEnd(12)} → ${v}`);

console.log('\n=== G2-E: Sao offset từ Lộc Tồn (Lộc Tồn ở Thân) ===');
const saoLT = tinhSaoOffsetTuLocTon('Thân');
for (const [k, v] of Object.entries(saoLT)) console.log(`  ${k.padEnd(20)} → ${v}`);
