import type { CungTrongLaSo } from '@/core/tuvi/types';
import { idCuaCung } from '@/lib/slug-cung';

interface Props {
  cacCung: readonly CungTrongLaSo[];
}

export default function MucLucCung({ cacCung }: Props) {
  return (
    <nav
      aria-label="Mục lục các cung"
      className="bg-amber-50 border border-amber-200 rounded-lg p-4"
    >
      <h3 className="text-base font-bold text-amber-900 mb-2">MỤC LỤC</h3>
      <ol className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-1 text-sm list-decimal list-inside marker:text-amber-700">
        {cacCung.map(cung => (
          <li key={cung.chi}>
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
