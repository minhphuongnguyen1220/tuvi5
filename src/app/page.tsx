'use client';

import { useState } from 'react';
import FormLapLaSo from '@/components/FormLapLaSo';
import LaSo from '@/components/LaSo';
import LuanGiaiCung from '@/components/LuanGiaiCung';
import { lapLaSo } from '@/core/tuvi/lap-la-so';
import type { LaSo as LaSoType, ThongTinSinh } from '@/core/tuvi/types';

export default function Home() {
  const [laSo, setLaSo] = useState<LaSoType | null>(null);
  const [error, setError] = useState<string | null>(null);

  function handleLapLaSo(thongTin: ThongTinSinh) {
    try {
      setError(null);
      setLaSo(lapLaSo(thongTin));
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Có lỗi xảy ra');
      setLaSo(null);
    }
  }

  return (
    <main className="min-h-screen bg-stone-100 py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-3xl font-bold text-amber-900 mb-2">Tử Vi Đẩu Số</h1>
          <p className="text-stone-600">Lập lá số tử vi miễn phí - Bắc phái Việt Nam</p>
        </header>

        <FormLapLaSo onLapLaSo={handleLapLaSo} />

        {error && (
          <div className="max-w-md mx-auto bg-red-50 border border-red-200 text-red-700 rounded p-4">
            {error}
          </div>
        )}

        {laSo && (
          <>
            <section>
              <LaSo laSo={laSo} />
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-amber-900 border-b-2 border-amber-300 pb-2">
                Luận giải 12 cung
              </h2>
              <p className="text-sm text-stone-600">
                Phần luận giải tóm tắt miễn phí. Đọc chi tiết → đăng ký tài khoản (sẽ có ở G4).
              </p>
              <div className="grid gap-4">
                {laSo.cacCung.map(cung => (
                  <LuanGiaiCung key={cung.chi} cung={cung} gioiTinh={laSo.thongTinSinh.gioiTinh} />
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  );
}
