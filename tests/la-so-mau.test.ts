/**
 * Lá số mẫu của user để đối chiếu kết quả an cung Mệnh, Thân, 12 cung.
 * Sinh: 18/12/2000 dương, 1h55p sáng, Nữ
 */
import { doiSangAmLich } from '../src/core/tuvi/lich-am';
import { xacDinhAmDuongLaSo, nguHanhCuaCan, nguHanhCuaChi } from '../src/core/tuvi/am-duong';
import { napAmCuaNam } from '../src/core/tuvi/nap-am';
import { menhChuTheoChiNam, thanChuTheoChiNam } from '../src/core/tuvi/menh-than-chu';
import { anCungMenh, anCungThan, tinhCanChi12Cung, canMoi12Cung } from '../src/core/tuvi/cung';
import { xacDinhCuc } from '../src/core/tuvi/cuc';
import { anTuVi, anThienPhu, anChinhTinh } from '../src/core/tuvi/chinh-tinh';
import { CHINH_TINH_LIST, ChinhTinh, Chi } from '../src/core/tuvi/types';

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

// Cục - cần can-chi của cung Mệnh
const canCung = canMoi12Cung(amLich.canChiNam.can);
const canChiCungMenh = { can: canCung[chiMenh], chi: chiMenh };
const cuc = xacDinhCuc(canChiCungMenh);
console.log(`  Cục (Can-Chi cung Mệnh = ${canChiCungMenh.can} ${canChiCungMenh.chi}): ${cuc.ten} (số ${cuc.so})`);

// An 14 chính tinh
const chiTuVi = anTuVi(amLich.ngayAmLich, cuc);
const chiThienPhu = anThienPhu(chiTuVi);
const viTriChinhTinh = anChinhTinh(chiTuVi);
console.log(`\n=== 14 chính tinh (Tử Vi tại ${chiTuVi}, Thiên Phủ tại ${chiThienPhu}) ===`);
for (const sao of CHINH_TINH_LIST) {
  console.log(`  ${sao.padEnd(12)} → ${viTriChinhTinh[sao]}`);
}

// Group sao theo cung
const saoTheoCung: Record<Chi, ChinhTinh[]> = {} as Record<Chi, ChinhTinh[]>;
for (const sao of CHINH_TINH_LIST) {
  const chi = viTriChinhTinh[sao];
  if (!saoTheoCung[chi]) saoTheoCung[chi] = [];
  saoTheoCung[chi].push(sao);
}

console.log('\n=== 12 cung đầy đủ với chính tinh ===');
const fullCung = tinhCanChi12Cung(chiMenh, amLich.canChiNam.can);
console.log('  Tên cung    | Vị trí | Can-Chi   | Chính tinh');
console.log('  ------------|--------|-----------|------------------------');
for (const c of fullCung) {
  const ten = c.tenCung.padEnd(11);
  const chi = c.chi.padEnd(6);
  const cc = `${c.canChi.can} ${c.canChi.chi}`.padEnd(9);
  const sao = (saoTheoCung[c.chi] || []).join(', ') || '(trống)';
  const note = c.chi === chiThan ? '  ⬅ Thân' : '';
  console.log(`  ${ten} | ${chi} | ${cc} | ${sao}${note}`);
}
