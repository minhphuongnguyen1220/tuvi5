/**
 * Lá số mẫu của user để đối chiếu kết quả an cung Mệnh, Thân, 12 cung.
 * Sinh: 18/12/2000 dương, 1h55p sáng, Nữ
 */
import { doiSangAmLich } from '../src/core/tuvi/lich-am';
import { xacDinhAmDuongLaSo, nguHanhCuaCan, nguHanhCuaChi } from '../src/core/tuvi/am-duong';
import { napAmCuaNam } from '../src/core/tuvi/nap-am';
import { menhChuTheoChiNam, thanChuTheoChiNam } from '../src/core/tuvi/menh-than-chu';
import { anCungMenh, anCungThan, tinhCanChi12Cung } from '../src/core/tuvi/cung';

const ngaySinh = new Date(2000, 11, 18, 1, 55); // tháng JS index 0 → 11 = December
const gioiTinh = 'Nữ' as const;

console.log('=== Thông tin sinh ===');
console.log(`  Ngày dương: ${ngaySinh.toLocaleString('vi-VN')}`);
console.log(`  Giới tính:  ${gioiTinh}`);

const amLich = doiSangAmLich(ngaySinh);
console.log('\n=== Đổi sang âm lịch ===');
console.log(`  Ngày âm:    ${amLich.ngayAmLich}/${amLich.thangAmLich}/${amLich.namAmLich}` +
            `${amLich.laThangNhuan ? ' (nhuận)' : ''}`);
console.log(`  Năm:  ${amLich.canChiNam.can} ${amLich.canChiNam.chi}`);
console.log(`  Tháng:${amLich.canChiThang.can} ${amLich.canChiThang.chi}`);
console.log(`  Ngày: ${amLich.canChiNgay.can} ${amLich.canChiNgay.chi}`);
console.log(`  Giờ:  ${amLich.canChiGio.can} ${amLich.canChiGio.chi}`);

console.log('\n=== An cung Mệnh & Thân ===');
const chiMenh = anCungMenh(amLich.thangAmLich, ngaySinh.getHours());
const chiThan = anCungThan(amLich.thangAmLich, ngaySinh.getHours());
console.log(`  Cung Mệnh ở: ${chiMenh}`);
console.log(`  Cung Thân ở: ${chiThan}`);
if (chiMenh === chiThan) console.log('  → Mệnh Thân đồng cung');

console.log('\n=== Thông tin cơ bản ===');
const amDuongLaSo = xacDinhAmDuongLaSo(amLich.canChiNam.can, gioiTinh);
const napAm = napAmCuaNam(amLich.canChiNam);
console.log(`  Âm dương lá số:  ${amDuongLaSo}`);
console.log(`  Ngũ hành nạp âm: ${napAm.tenGoi} (${napAm.hanh})`);
console.log(`  Mệnh chủ (theo Chi năm ${amLich.canChiNam.chi}):       ${menhChuTheoChiNam(amLich.canChiNam.chi)}`);
console.log(`  Thân chủ (theo Chi năm ${amLich.canChiNam.chi}):       ${thanChuTheoChiNam(amLich.canChiNam.chi)}`);

console.log('\n=== 12 cung đầy đủ ===');
const fullCung = tinhCanChi12Cung(chiMenh, amLich.canChiNam.can);
console.log('  Tên cung    | Vị trí | Can-Chi cung');
console.log('  ------------|--------|---------------');
for (const c of fullCung) {
  const ten = c.tenCung.padEnd(11);
  const chi = c.chi.padEnd(6);
  const cc = `${c.canChi.can} ${c.canChi.chi}`;
  const note = c.chi === chiThan ? '  ⬅ Thân' : '';
  console.log(`  ${ten} | ${chi} | ${cc}${note}`);
}
