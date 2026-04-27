'use client';

import ReactMarkdown from 'react-markdown';
import type { CungTrongLaSo } from '@/core/tuvi/types';
import { timLuanGiaiCuaCung } from '@/core/luan-giai/lookup';

interface Props {
  cung: CungTrongLaSo;
}

export default function LuanGiaiCung({ cung }: Props) {
  const danhSach = timLuanGiaiCuaCung(cung);
  const danhSachSao = [
    ...cung.saoChinh.map(s => s.ten),
    ...cung.saoPhu.map(s => s.ten),
  ];

  return (
    <section className="bg-white border border-amber-200 rounded-lg p-4 space-y-3">
      <header className="flex items-baseline justify-between border-b border-amber-100 pb-2">
        <h3 className="text-lg font-bold text-amber-900">
          Cung {cung.ten} {cung.laThan && <span className="text-sm text-amber-600">(Thân)</span>}
        </h3>
        <span className="text-sm text-stone-500">{cung.can} {cung.chi}</span>
      </header>

      {/* Liệt kê sao trong cung */}
      <div className="text-sm text-stone-700">
        <span className="text-stone-500">Sao trong cung: </span>
        {danhSachSao.length > 0 ? danhSachSao.join(', ') : '(không có)'}
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
