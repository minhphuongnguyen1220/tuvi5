'use client';

import { useState } from 'react';
import { LaSo as LaSoType, Chi, Sao } from '@/core/tuvi/types';
import { nguHanhCuaChi, nguHanhCuaCan } from '@/core/tuvi/am-duong';
import { mauCuaSao, MAU_NGU_HANH } from '@/lib/mau-ngu-hanh';
import { phanLoaiSao } from '@/lib/phan-loai-sao';
import { VIET_TAT_TRANG_THAI } from '@/lib/trang-thai-chinh-tinh';

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

/**
 * Tính TÂM của một cung dưới dạng % (cho cả style position và SVG viewBox 0-100).
 */
function tamCuaCung(chi: Chi): { x: number; y: number } {
  const v = VI_TRI_CUNG[chi];
  return { x: (v.col - 0.5) * 25, y: (v.row - 0.5) * 25 };
}

/**
 * Tọa độ MIDPOINT giữa 2 cung (% theo container).
 * Dùng để đặt label "Tuần"/"Triệt" overlay tại đường biên giữa 2 cell.
 */
function viTriGiuaCung(chi1: Chi, chi2: Chi): { left: string; top: string } {
  const a = tamCuaCung(chi1);
  const b = tamCuaCung(chi2);
  return {
    left: `${(a.x + b.x) / 2}%`,
    top:  `${(a.y + b.y) / 2}%`,
  };
}

/**
 * Bảng tam hợp 4 cục: Hỏa (Dần-Ngọ-Tuất), Thủy (Thân-Tý-Thìn),
 * Kim (Tỵ-Dậu-Sửu), Mộc (Hợi-Mão-Mùi).
 */
const TAM_HOP: Record<Chi, [Chi, Chi, Chi]> = {
  'Tý':   ['Thân', 'Tý',  'Thìn'],
  'Sửu':  ['Tỵ',   'Dậu', 'Sửu'],
  'Dần':  ['Dần',  'Ngọ', 'Tuất'],
  'Mão':  ['Hợi',  'Mão', 'Mùi'],
  'Thìn': ['Thân', 'Tý',  'Thìn'],
  'Tỵ':   ['Tỵ',   'Dậu', 'Sửu'],
  'Ngọ':  ['Dần',  'Ngọ', 'Tuất'],
  'Mùi':  ['Hợi',  'Mão', 'Mùi'],
  'Thân': ['Thân', 'Tý',  'Thìn'],
  'Dậu':  ['Tỵ',   'Dậu', 'Sửu'],
  'Tuất': ['Dần',  'Ngọ', 'Tuất'],
  'Hợi':  ['Hợi',  'Mão', 'Mùi'],
};

/**
 * Bảng lục xung — mỗi chi có 1 chi đối (xung).
 */
const DOI: Record<Chi, Chi> = {
  'Tý':   'Ngọ', 'Ngọ':  'Tý',
  'Sửu':  'Mùi', 'Mùi':  'Sửu',
  'Dần':  'Thân','Thân': 'Dần',
  'Mão':  'Dậu', 'Dậu':  'Mão',
  'Thìn': 'Tuất','Tuất': 'Thìn',
  'Tỵ':   'Hợi', 'Hợi':  'Tỵ',
};

interface Props {
  laSo: LaSoType;
}

export default function LaSo({ laSo }: Props) {
  const [hoveredChi, setHoveredChi] = useState<Chi | null>(null);

  return (
    <div className="w-full max-w-[800px] mx-auto space-y-3">
    <div
      className="relative grid grid-cols-4 grid-rows-4 gap-px bg-amber-900 border-2 border-amber-900 aspect-square w-full"
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

        return (
          <div
            key={cung.chi}
            className={`
              bg-amber-50 p-2 flex flex-col text-xs gap-1
              ${isMenh ? 'ring-2 ring-red-500 ring-inset' : ''}
            `}
            style={{ gridRow: vt.row, gridColumn: vt.col }}
            onMouseEnter={() => setHoveredChi(cung.chi)}
            onMouseLeave={() => setHoveredChi(null)}
          >
            {/* Header row 1: Đại vận (trái) + Nguyệt vận (phải) */}
            <div className="grid grid-cols-[auto_1fr_auto] items-baseline gap-1 text-[9px] leading-none">
              <span className="text-blue-700 font-medium">
                {daiVan ? `${daiVan.tuoiBatDau}-${daiVan.tuoiKetThuc}` : ''}
              </span>
              {/* Chính tinh — TOP CENTER, lớn + đậm, giữa ĐV và NV */}
              <div className="flex flex-col items-center gap-0.5">
                {cung.saoChinh.map(sao => (
                  <div
                    key={sao.ten}
                    className={`text-[15px] font-extrabold leading-tight text-center ${mauCuaSao(sao.ten, 'text-stone-800')}`}
                  >
                    {sao.ten}
                    {sao.trangThai && (
                      <span className="ml-0.5 text-[12px] font-bold">({VIET_TAT_TRANG_THAI[sao.trangThai]})</span>
                    )}
                  </div>
                ))}
              </div>
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
          </div>
        );
      })}

      {/* Tuần / Triệt — overlay floating ở GIỮA 2 cung (đường biên).
          Style: nền đen chữ trắng. Cùng vị trí thì gộp thành "Tuần - Triệt". */}
      {(() => {
        const triet = laSo.triet;
        const tuan = laSo.tuan;
        const cungViTri = (a: [Chi, Chi], b: [Chi, Chi]) =>
          (a[0] === b[0] && a[1] === b[1]) || (a[0] === b[1] && a[1] === b[0]);
        const labelClass =
          'absolute z-10 -translate-x-1/2 -translate-y-1/2 px-2 py-0.5 bg-stone-900 rounded text-[11px] font-bold text-white shadow pointer-events-none whitespace-nowrap';

        if (triet && tuan && cungViTri(triet, tuan)) {
          return (
            <div className={labelClass} style={viTriGiuaCung(triet[0], triet[1])}>
              Tuần - Triệt
            </div>
          );
        }
        return (
          <>
            {triet && (
              <div className={labelClass} style={viTriGiuaCung(triet[0], triet[1])}>
                Triệt
              </div>
            )}
            {tuan && (
              <div className={labelClass} style={viTriGiuaCung(tuan[0], tuan[1])}>
                Tuần
              </div>
            )}
          </>
        );
      })()}

      {/* Hover: tam hợp (3 đường mờ) + đối (1 đường đỏ) */}
      {hoveredChi && (
        <svg
          className="absolute inset-0 z-20 pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Tam hợp: tam giác viền nâu mảnh, không fill */}
          {(() => {
            const [a, b, c] = TAM_HOP[hoveredChi];
            const pa = tamCuaCung(a);
            const pb = tamCuaCung(b);
            const pc = tamCuaCung(c);
            return (
              <polygon
                points={`${pa.x},${pa.y} ${pb.x},${pb.y} ${pc.x},${pc.y}`}
                fill="none"
                stroke="rgba(180, 83, 9, 0.35)"
                strokeWidth="0.15"
                strokeDasharray="0.8 0.6"
              />
            );
          })()}
          {/* Đối: đường đỏ mảnh, mờ */}
          {(() => {
            const opp = DOI[hoveredChi];
            const ph = tamCuaCung(hoveredChi);
            const po = tamCuaCung(opp);
            return (
              <line
                x1={ph.x}
                y1={ph.y}
                x2={po.x}
                y2={po.y}
                stroke="rgba(220, 38, 38, 0.45)"
                strokeWidth="0.18"
              />
            );
          })()}
        </svg>
      )}

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

    {/* CHÚ GIẢI: trạng thái + ngũ hành */}
    <div className="bg-amber-50 border border-amber-200 rounded-md p-3 text-xs space-y-1.5">
      <div className="font-semibold text-amber-900 text-[11px] uppercase tracking-wide">Chú giải</div>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="text-stone-500">Trạng thái sao:</span>
        <span><span className="font-bold">(M)</span> Miếu</span>
        <span><span className="font-bold">(V)</span> Vượng</span>
        <span><span className="font-bold">(Đ)</span> Đắc</span>
        <span><span className="font-bold">(B)</span> Bình</span>
        <span><span className="font-bold">(H)</span> Hãm</span>
      </div>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="text-stone-500">Ngũ hành tên sao:</span>
        <span className={`${MAU_NGU_HANH['Kim']} font-medium`}>● Kim</span>
        <span className={`${MAU_NGU_HANH['Mộc']} font-medium`}>● Mộc</span>
        <span className={`${MAU_NGU_HANH['Thủy']} font-medium`}>● Thủy</span>
        <span className={`${MAU_NGU_HANH['Hỏa']} font-medium`}>● Hỏa</span>
        <span className={`${MAU_NGU_HANH['Thổ']} font-medium`}>● Thổ</span>
      </div>
      <div className="text-stone-500 text-[11px] italic pt-1 border-t border-amber-200">
        Di chuột vào cung để xem tam hợp (đường nâu) và xung đối (đường đỏ).
      </div>
    </div>
    </div>
  );
}
