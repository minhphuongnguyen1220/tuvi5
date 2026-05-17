import type { CungTrongLaSo } from '@/core/tuvi/types';
import { idCuaCung } from '@/lib/slug-cung';

interface Props {
  cacCung: readonly CungTrongLaSo[];
  /** id của section Tổng quan để link đến từ mục lục */
  idTongQuan?: string;
}

export default function MucLucCung({ cacCung, idTongQuan }: Props) {
  return (
    <nav
      aria-label="Mục lục các cung"
      className="bg-amber-50 border border-amber-200 rounded-lg p-4"
    >
      <h3 className="text-base font-bold text-amber-900 mb-2">MỤC LỤC</h3>
      <ol className="columns-2 sm:columns-3 lg:columns-4 gap-x-4 text-sm list-decimal list-inside marker:text-amber-700">
        {idTongQuan && (
          <li className="break-inside-avoid">
            <a
              href={`#${idTongQuan}`}
              className="text-amber-800 hover:text-amber-950 hover:underline font-medium"
            >
              Tổng quan
            </a>
          </li>
        )}
        {cacCung.map(cung => (
          <li key={cung.chi} className="break-inside-avoid">
            <a
              href={`#${idCuaCung(cung.ten)}`}
              className="text-amber-800 hover:text-amber-950 hover:underline"
            >
              Cung {cung.ten}
              {cung.laMenh && <span className="text-amber-600 ml-1">★</span>}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
