import { tinhThienTai, tinhThienTho, tinhDauQuan, tinhTriet, tinhTuan } from '../src/core/tuvi/phu-tinh';

console.log('=== Lá số mẫu (Canh Thìn, Mệnh Hợi, Thân Sửu, tháng 11 âm, giờ Sửu) ===');
console.log(`Thiên Tài (cung Mệnh Hợi + chi năm Thìn): ${tinhThienTai('Hợi', 'Thìn')}`);
console.log(`Thiên Thọ (cung Thân Sửu + chi năm Thìn): ${tinhThienTho('Sửu', 'Thìn')}`);
console.log(`Đẩu Quân (chi năm Thìn, tháng 11 âm, giờ Sửu): ${tinhDauQuan('Thìn', 11, 1)}`);
console.log(`Triệt (Can Canh): giữa ${tinhTriet('Canh').join(' - ')}`);
console.log(`Tuần (Canh Thìn): giữa ${tinhTuan('Canh', 'Thìn').join(' - ')}`);

console.log('\n=== Verify ví dụ user: Ất Hợi → Tuần giữa Thân-Dậu ===');
console.log(`Tuần (Ất Hợi): giữa ${tinhTuan('Ất', 'Hợi').join(' - ')}`);
