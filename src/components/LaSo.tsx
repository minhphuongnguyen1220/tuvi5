import { LaSo as LaSoType, Chi, Sao } from '@/core/tuvi/types';
import { nguHanhCuaChi, nguHanhCuaCan } from '@/core/tuvi/am-duong';
import { mauCuaSao, MAU_NGU_HANH } from '@/lib/mau-ngu-hanh';
import { phanLoaiSao } from '@/lib/phan-loai-sao';

/**
 * Component vẽ lá số 12 cung dạng vuông cổ điển.
 *
 * Layout 4x4 grid:
 *   Tỵ  | Ngọ | Mùi | Thân
 *   Thìn|  (thông tin chung)| Dậu
 *   Mão |                   | Tuất
 *   Dần | Sửu | Tý  | Hợi
 */

// Vị trí mỗi cung trong grid 4x4: [row, col]
const VI_TRI_CUNG: Record<Chi, { row: number; col: number }> = {
  'Tỵ':   { row: 1, col: 1 },
  'Ngọ':  { row: 1, col: 2 },
  'Mùi':  { row: 1, col: 3 },
  'Thân': { row: 1, col: 4 },
  'Thìn': { row: 2, col: 1 },
  'Dậu':  { row: 2, col: 4 },
  'Mão':  { row: 3, col: 1 },
  'Tuất': { row: 3, col: 4 },
  'Dần':  { row: 4, col: 1 },
  'Sửu':  { row: 4, col: 2 },
  'Tý':   { row: 4, col: 3 },
  'Hợi':  { row: 4, col: 4 },
};

interface Props {
  laSo: LaSoType;
}

export default function LaSo({ laSo }: Props) {
  return (
    <div
      className="grid grid-cols-4 grid-rows-4 gap-px bg-amber-900 border-2 border-amber-900 aspect-square w-full max-w-[800px] mx-auto"
      style={{ gridTemplateAreas: `
        "ty ngo mui than"
        "thin info1 info1 dau"
        "mao info2 info2 tuat"
        "dan suu ti hoi"
      `}}
    >
      {laSo.cacCung.map((cung) => {
        const vt = VI_TRI_CUNG[cung.chi];
        const isMenh = cung.laMenh;
        const isThan = cung.laThan;
        const daiVan = laSo.daiVan.find(dv => dv.cung === cung.chi);
        const nguyetVan = laSo.nguyetVanCaNam?.find(nv => nv.cung === cung.chi);
        const coTriet = laSo.triet?.includes(cung.chi);
        const coTuan = laSo.tuan?.includes(cung.chi);

        return (
          <div
            key={cung.chi}
            className={`
              bg-amber-50 p-2 flex flex-col text-xs gap-1
              ${isMenh ? 'ring-2 ring-red-500 ring-inset' : ''}
            `}
            style={{ gridRow: vt.row, gridColumn: vt.col }}
          >
            {/* Header row 1: Đại vận (trái) + Nguyệt vận (phải) */}
            <div className="flex justify-between items-baseline text-[9px] leading-none">
              <span className="text-blue-700 font-medium">
                {daiVan ? `${daiVan.tuoiBatDau}-${daiVan.tuoiKetThuc}` : ''}
              </span>
              <span className="text-green-700 font-medium">
                {nguyetVan ? `T${nguyetVan.thangAmLich}` : ''}
              </span>
            </div>

            {/* Header row 2: Tên cung + Can-Chi (màu theo ngũ hành) */}
            <div className="flex justify-between items-start text-[10px]">
              <span className="font-semibold text-amber-900">{cung.ten}{isThan ? ' (Thân)' : ''}</span>
              <span className="font-medium">
                <span className={MAU_NGU_HANH[nguHanhCuaCan(cung.can)]}>{cung.can[0]}</span>
                <span className="text-amber-900">.</span>
                <span className={MAU_NGU_HANH[nguHanhCuaChi(cung.chi)]}>{cung.chi}</span>
              </span>
            </div>

            {/* Chính tinh — ngay dưới header, màu theo ngũ hành sao */}
            <div className="flex flex-col items-center gap-0.5">
              {cung.saoChinh.map(sao => (
                <div
                  key={sao.ten}
                  className={`text-sm font-bold leading-tight text-center ${mauCuaSao(sao.ten, 'text-stone-800')}`}
                >
                  {sao.ten}
                </div>
              ))}
            </div>

            {/* Phụ tinh — chia 2 cột: cát/trung tính TRÁI, hung PHẢI; vòng Trường Sinh GIỮA DƯỚI */}
            {(() => {
              const catList: Sao[] = [];
              const hungList: Sao[] = [];
              const truongSinhList: Sao[] = [];
              for (const sao of cung.saoPhu) {
                const loai = phanLoaiSao(sao.ten);
                if (loai === 'trường sinh') truongSinhList.push(sao);
                else if (loai === 'hung') hungList.push(sao);
                else catList.push(sao);
              }
              return (
                <>
                  {(catList.length > 0 || hungList.length > 0) && (
                    <div className="flex justify-between items-start gap-1 mt-1 flex-1">
                      {/* Cột TRÁI: cát + trung tính */}
                      <div className="flex flex-col gap-0.5 text-left">
                        {catList.map((sao, i) => (
                          <div
                            key={`cat-${sao.ten}-${i}`}
                            className={`text-[10px] leading-tight ${mauCuaSao(sao.ten)}`}
                          >
                            {sao.ten}
                          </div>
                        ))}
                      </div>
                      {/* Cột PHẢI: hung */}
                      <div className="flex flex-col gap-0.5 text-right">
                        {hungList.map((sao, i) => (
                          <div
                            key={`hung-${sao.ten}-${i}`}
                            className={`text-[10px] leading-tight ${mauCuaSao(sao.ten)}`}
                          >
                            {sao.ten}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Spacer khi không có sao nào — đẩy footer xuống */}
                  {catList.length === 0 && hungList.length === 0 && <div className="flex-1" />}

                  {/* Vòng Trường Sinh — giữa dưới, in nghiêng để phân biệt */}
                  {truongSinhList.length > 0 && (
                    <div className="flex justify-center gap-1 flex-wrap mt-1">
                      {truongSinhList.map((sao, i) => (
                        <span
                          key={`ts-${sao.ten}-${i}`}
                          className={`text-[10px] italic leading-tight ${mauCuaSao(sao.ten)}`}
                        >
                          {sao.ten}
                        </span>
                      ))}
                    </div>
                  )}
                </>
              );
            })()}

            {/* Triệt / Tuần — nhãn nhỏ dưới đáy cung */}
            {(coTriet || coTuan) && (
              <div className="flex justify-center gap-2 text-[9px] font-bold mt-1">
                {coTriet && <span className="text-red-600">TRIỆT</span>}
                {coTuan && <span className="text-purple-600">TUẦN</span>}
              </div>
            )}
          </div>
        );
      })}

      {/* Phần thông tin chung ở giữa */}
      <div
        className="bg-amber-50 p-3 flex flex-col text-xs"
        style={{ gridArea: 'info1 / info1 / info2 / info2' }}
      >
        <div className="font-bold text-amber-900 text-sm mb-2">
          {laSo.thongTinSinh.hoTen || 'Lá số tử vi'}
        </div>
        <div className="space-y-1 text-stone-700">
          <div>
            <span className="text-amber-700">Sinh:</span>{' '}
            {laSo.thongTinSinh.ngaySinh.toLocaleString('vi-VN', {
              day: '2-digit', month: '2-digit', year: 'numeric',
              hour: '2-digit', minute: '2-digit',
            })} ({laSo.thongTinSinh.gioiTinh})
          </div>
          <div>
            <span className="text-amber-700">Âm lịch:</span>{' '}
            {laSo.thongTinAmLich.ngayAmLich}/{laSo.thongTinAmLich.thangAmLich}
            {laSo.thongTinAmLich.laThangNhuan ? ' (nhuận)' : ''}/{laSo.thongTinAmLich.namAmLich}
          </div>
          <div>
            <span className="text-amber-700">Tứ trụ:</span>{' '}
            {laSo.thongTinAmLich.canChiNam.can} {laSo.thongTinAmLich.canChiNam.chi} /{' '}
            {laSo.thongTinAmLich.canChiThang.can} {laSo.thongTinAmLich.canChiThang.chi} /{' '}
            {laSo.thongTinAmLich.canChiNgay.can} {laSo.thongTinAmLich.canChiNgay.chi} /{' '}
            {laSo.thongTinAmLich.canChiGio.can} {laSo.thongTinAmLich.canChiGio.chi}
          </div>
          <div>
            <span className="text-amber-700">Lá số:</span> {laSo.amDuongLaSo}
          </div>
          <div>
            <span className="text-amber-700">Bản mệnh:</span> {laSo.nguHanhNapAm.tenGoi}
          </div>
          <div>
            <span className="text-amber-700">Cục:</span> {laSo.cuc.ten} (số {laSo.cuc.so})
          </div>
          <div>
            <span className="text-amber-700">Mệnh chủ:</span> {laSo.menhChu}
          </div>
          <div>
            <span className="text-amber-700">Thân chủ:</span> {laSo.thanChu}
          </div>
          {laSo.tieuVanHienTai && (
            <div className="pt-2 mt-2 border-t border-amber-200">
              <span className="text-amber-700">Tiểu vận năm {new Date().getFullYear()}:</span>{' '}
              cung {laSo.tieuVanHienTai.cung} ({laSo.tieuVanHienTai.tuoi} tuổi mụ)
            </div>
          )}
          {laSo.nguyetVanHienTai && (
            <div>
              <span className="text-amber-700">Nguyệt vận T{laSo.nguyetVanHienTai.thangAmLich}:</span>{' '}
              cung {laSo.nguyetVanHienTai.cung}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
