'use client';

import ReactMarkdown from 'react-markdown';
import { Fragment } from 'react';
import type { CungTrongLaSo, Sao } from '@/core/tuvi/types';
import { timLuanGiaiCuaCung } from '@/core/luan-giai/lookup';
import { nguHanhCuaCan, nguHanhCuaChi } from '@/core/tuvi/am-duong';
import { mauCuaSao, MAU_NGU_HANH } from '@/lib/mau-ngu-hanh';

interface Props {
  cung: CungTrongLaSo;
}

export default function LuanGiaiCung({ cung }: Props) {
  const danhSach = timLuanGiaiCuaCung(cung);
  const danhSachSao: Sao[] = [...cung.saoChinh, ...cung.saoPhu];

  return (
    <section className="bg-white border border-amber-200 rounded-lg p-4 space-y-3">
      <header className="flex items-baseline justify-between border-b border-amber-100 pb-2">
        <h3 className="text-lg font-bold text-amber-900">
          Cung {cung.ten} {cung.laThan && <span className="text-sm text-amber-600">(Thân)</span>}
        </h3>
        <span className="text-sm font-medium">
          <span className={MAU_NGU_HANH[nguHanhCuaCan(cung.can)]}>{cung.can}</span>
          {' '}
          <span className={MAU_NGU_HANH[nguHanhCuaChi(cung.chi)]}>{cung.chi}</span>
        </span>
      </header>

      {/* Liệt kê sao trong cung — tên sao tô màu theo ngũ hành */}
      <div className="text-sm">
        <span className="text-stone-500">Sao trong cung: </span>
        {danhSachSao.length > 0 ? (
          danhSachSao.map((sao, i) => (
            <Fragment key={`${sao.ten}-${i}`}>
              <span className={`font-medium ${mauCuaSao(sao.ten)}`}>{sao.ten}</span>
              {i < danhSachSao.length - 1 && <span className="text-stone-400">, </span>}
            </Fragment>
          ))
        ) : (
          <span className="text-stone-400">(không có)</span>
        )}
      </div>

      {/* Các đoạn luận giải */}
      {danhSach.length === 0 ? (
        <p className="text-sm text-stone-400 italic">
          (Chưa có nội dung luận giải cho cung này. Sẽ bổ sung dần.)
        </p>
      ) : (
        <div className="space-y-3">
          {danhSach.map(doan => (
            <article key={doan.id} className="text-sm">
              <div className="prose prose-sm max-w-none text-stone-800">
                <ReactMarkdown>{doan.tomTat}</ReactMarkdown>
              </div>
              {doan.chiTiet && (
                <details className="mt-1">
                  <summary className="text-xs text-amber-700 cursor-pointer hover:text-amber-900 select-none">
                    Đọc chi tiết →
                  </summary>
                  <div className="prose prose-sm max-w-none mt-2 pl-3 border-l-2 border-amber-200 text-stone-700">
                    <ReactMarkdown>{doan.chiTiet}</ReactMarkdown>
                  </div>
                </details>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
