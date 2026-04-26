'use client';

import { useState, FormEvent } from 'react';
import { ThongTinSinh, GioiTinh } from '@/core/tuvi/types';

interface Props {
  onLapLaSo: (thongTin: ThongTinSinh) => void;
}

export default function FormLapLaSo({ onLapLaSo }: Props) {
  const [hoTen, setHoTen] = useState('');
  const [ngayDuong, setNgayDuong] = useState('2000-12-18');
  const [gioPhut, setGioPhut] = useState('01:55');
  const [gioiTinh, setGioiTinh] = useState<GioiTinh>('Nữ');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const [year, month, day] = ngayDuong.split('-').map(Number);
    const [hour, minute] = gioPhut.split(':').map(Number);
    const ngaySinh = new Date(year, month - 1, day, hour, minute);

    onLapLaSo({
      ngaySinh,
      gioiTinh,
      hoTen: hoTen.trim() || undefined,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="bg-amber-50 border border-amber-200 rounded-lg p-6 space-y-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold text-amber-900">Lập lá số tử vi</h2>

      <div>
        <label className="block text-sm font-medium text-stone-700 mb-1">
          Họ tên (tùy chọn)
        </label>
        <input
          type="text"
          value={hoTen}
          onChange={(e) => setHoTen(e.target.value)}
          className="w-full px-3 py-2 border border-stone-300 rounded focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          placeholder="Nguyễn Văn A"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-stone-700 mb-1">
          Ngày sinh (dương lịch)
        </label>
        <input
          type="date"
          value={ngayDuong}
          onChange={(e) => setNgayDuong(e.target.value)}
          required
          min="1900-01-01"
          max="2100-12-31"
          className="w-full px-3 py-2 border border-stone-300 rounded focus:ring-2 focus:ring-amber-500 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-stone-700 mb-1">
          Giờ sinh (giờ:phút)
        </label>
        <input
          type="time"
          value={gioPhut}
          onChange={(e) => setGioPhut(e.target.value)}
          required
          className="w-full px-3 py-2 border border-stone-300 rounded focus:ring-2 focus:ring-amber-500 focus:border-transparent"
        />
        <p className="text-xs text-stone-500 mt-1">
          Lưu ý: giờ Tý gồm 23h và 0h-0h59. 23h vẫn tính theo Can Chi của ngày cũ.
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-stone-700 mb-1">
          Giới tính
        </label>
        <div className="flex gap-3">
          {(['Nam', 'Nữ'] as GioiTinh[]).map((g) => (
            <label key={g} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gioiTinh"
                value={g}
                checked={gioiTinh === g}
                onChange={() => setGioiTinh(g)}
                className="text-amber-600 focus:ring-amber-500"
              />
              <span>{g}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-amber-700 hover:bg-amber-800 text-white font-medium py-2 px-4 rounded transition-colors"
      >
        Lập lá số
      </button>
    </form>
  );
}
