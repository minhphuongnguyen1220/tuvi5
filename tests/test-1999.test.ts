import { lapLaSo } from '../src/core/tuvi/lap-la-so';

const ls = lapLaSo({
  ngaySinh: new Date(1999, 4, 29, 12, 55),
  gioiTinh: 'Nam',
  hoTen: 'Test 1999',
});

console.log('Năm:', ls.thongTinAmLich.canChiNam.can, ls.thongTinAmLich.canChiNam.chi);
console.log('Tháng âm:', ls.thongTinAmLich.thangAmLich, ls.thongTinAmLich.canChiThang.can, ls.thongTinAmLich.canChiThang.chi);
console.log('Ngày âm:', ls.thongTinAmLich.ngayAmLich, ls.thongTinAmLich.canChiNgay.can, ls.thongTinAmLich.canChiNgay.chi);
console.log('Cung Mệnh:', ls.cungMenh);
console.log('Cục:', ls.cuc.ten);
console.log('Mệnh chủ:', ls.menhChu);
console.log('Thân chủ:', ls.thanChu);
console.log('Nạp âm:', ls.nguHanhNapAm.tenGoi);
console.log('Tử Vi tại:', ls.cacCung.find(c => c.saoChinh.some(s => s.ten === 'Tử Vi'))?.chi);
