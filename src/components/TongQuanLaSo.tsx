import type { LaSo, CungTrongLaSo, Chi, ChinhTinh } from '@/core/tuvi/types';
import { CHINH_TINH_LIST } from '@/core/tuvi/types';
import { boCuaChinhTinh, MO_TA_BO, type BoChinhTinh } from '@/lib/bo-chinh-tinh';
import { mauCuaSao } from '@/lib/mau-ngu-hanh';
import { VIET_TAT_TRANG_THAI } from '@/lib/trang-thai-chinh-tinh';

interface Props {
  laSo: LaSo;
  id?: string;
}

function laChinhTinh(ten: string): ten is ChinhTinh {
  return (CHINH_TINH_LIST as readonly string[]).includes(ten);
}

/** Tìm bộ chính tinh chính của một cung. Trả về undefined nếu vô chính diệu. */
function boChinhCuaCung(cung: CungTrongLaSo): BoChinhTinh | undefined {
  for (const sao of cung.saoChinh) {
    if (laChinhTinh(sao.ten)) return boCuaChinhTinh(sao.ten);
  }
  return undefined;
}

export default function TongQuanLaSo({ laSo, id }: Props) {
  const cungMenh = laSo.cacCung.find(c => c.laMenh)!;
  const cungThan = laSo.cacCung.find(c => c.laThan)!;
  const dongCungMenhThan = cungMenh.chi === cungThan.chi;

  const cungXungChieu = laSo.cacCung.find(c => c.chi === doiCua(cungMenh.chi))!;

  const bo = boChinhCuaCung(cungMenh);

  const tuanChieuMenh = laSo.tuan && (laSo.tuan[0] === cungMenh.chi || laSo.tuan[1] === cungMenh.chi);
  const trietChieuMenh = laSo.triet && (laSo.triet[0] === cungMenh.chi || laSo.triet[1] === cungMenh.chi);

  return (
    <section
      id={id}
      className="bg-white border border-amber-200 rounded-lg p-4 space-y-3 scroll-mt-4"
    >
      <header className="border-b border-amber-100 pb-2">
        <h3 className="text-lg font-bold text-amber-900">Tổng quan</h3>
      </header>

      {/* Bảng tóm tắt nhanh */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-1.5 text-sm text-stone-700">
        <div>
          <span className="text-stone-500">Bản mệnh: </span>
          <span className="font-medium">{laSo.nguHanhNapAm.tenGoi}</span>
        </div>
        <div>
          <span className="text-stone-500">Cục: </span>
          <span className="font-medium">{laSo.cuc.ten}</span>
        </div>
        <div>
          <span className="text-stone-500">Mệnh chủ: </span>
          <span className={`font-medium ${mauCuaSao(laSo.menhChu)}`}>{laSo.menhChu}</span>
        </div>
        <div>
          <span className="text-stone-500">Thân chủ: </span>
          <span className={`font-medium ${mauCuaSao(laSo.thanChu)}`}>{laSo.thanChu}</span>
        </div>
      </div>

      {/* Narrative — Cung Mệnh */}
      <div className="text-sm text-stone-800 space-y-2">
        <p>
          Đương số <span className="font-medium">{laSo.amDuongLaSo}</span>, bản mệnh{' '}
          <span className="font-medium">{laSo.nguHanhNapAm.tenGoi}</span>, an theo{' '}
          <span className="font-medium">{laSo.cuc.ten}</span> (số {laSo.cuc.so}).
        </p>

        <p>
          Cung Mệnh đóng tại {cungMenh.chi} ({cungMenh.can} {cungMenh.chi})
          {cungMenh.saoChinh.length > 0 ? (
            <>
              {' '}có chính tinh{' '}
              {cungMenh.saoChinh.map((sao, i) => (
                <span key={sao.ten}>
                  <span className={`font-medium ${mauCuaSao(sao.ten)}`}>
                    {sao.ten}
                    {sao.trangThai && (
                      <span className="font-normal"> ({VIET_TAT_TRANG_THAI[sao.trangThai]})</span>
                    )}
                  </span>
                  {i < cungMenh.saoChinh.length - 1 && ' + '}
                </span>
              ))}
              {' '}tọa thủ.
            </>
          ) : (
            <>
              {' '}vô chính diệu — mượn chính tinh từ cung xung chiếu{' '}
              {cungXungChieu.chi} (có{' '}
              {cungXungChieu.saoChinh.map(s => s.ten).join(', ') || 'cũng vô chính diệu'}).
            </>
          )}
        </p>

        <p>
          Cung Thân{' '}
          {dongCungMenhThan ? (
            <>đồng cung với cung Mệnh — mệnh số gắn liền, ít chia hai hướng.</>
          ) : (
            <>
              đóng tại {cungThan.chi} (cung {cungThan.ten})
              {cungThan.saoChinh.length > 0 && (
                <>
                  {' '}với chính tinh{' '}
                  {cungThan.saoChinh.map((s, i) => (
                    <span key={s.ten}>
                      <span className={`font-medium ${mauCuaSao(s.ten)}`}>{s.ten}</span>
                      {i < cungThan.saoChinh.length - 1 && ' + '}
                    </span>
                  ))}
                </>
              )}
              . Mệnh và Thân khác nhau cho thấy đời người có hai giai đoạn rõ rệt — Mệnh chi phối nửa đầu, Thân chi phối nửa sau.
            </>
          )}
        </p>

        {/* Bộ chính tinh */}
        {bo && (
          <div className="bg-amber-50 border border-amber-100 rounded p-3 my-2">
            <div className="text-sm font-medium text-amber-900 mb-1">
              Bộ chính tinh: {bo}
            </div>
            <p className="text-sm text-stone-700">{MO_TA_BO[bo]}</p>
          </div>
        )}

        {/* Tuần/Triệt chiếu Mệnh */}
        {(tuanChieuMenh || trietChieuMenh) && (
          <p>
            {tuanChieuMenh && trietChieuMenh ? (
              <>
                Cung Mệnh có cả <span className="font-medium">Tuần</span> và{' '}
                <span className="font-medium">Triệt</span> án ngữ — sức ảnh hưởng của các sao tại
                Mệnh bị tiết chế rất mạnh, đời sống nhiều biến động ngoài dự liệu.
              </>
            ) : tuanChieuMenh ? (
              <>
                <span className="font-medium">Tuần</span> đóng cạnh cung Mệnh — làm giảm bớt
                hung khí (nếu Mệnh xấu) hoặc kiềm chế bớt cát khí (nếu Mệnh tốt). Mệnh số đến
                muộn hơn so với người bình thường.
              </>
            ) : (
              <>
                <span className="font-medium">Triệt</span> đóng cạnh cung Mệnh — chặn đường
                tiến của Mệnh trong nửa đầu cuộc đời, hậu vận thường khá hơn tiền vận.
              </>
            )}
          </p>
        )}

        <p className="text-stone-600 italic text-xs pt-1">
          Cuộn xuống để xem chi tiết từng cung trong mục lục dưới đây.
        </p>
      </div>
    </section>
  );
}

/** Lục xung của 12 chi. */
const DOI: Record<Chi, Chi> = {
  'Tý': 'Ngọ',  'Ngọ': 'Tý',
  'Sửu': 'Mùi', 'Mùi': 'Sửu',
  'Dần': 'Thân','Thân': 'Dần',
  'Mão': 'Dậu', 'Dậu': 'Mão',
  'Thìn': 'Tuất','Tuất': 'Thìn',
  'Tỵ': 'Hợi',  'Hợi': 'Tỵ',
};
function doiCua(chi: Chi): Chi {
  return DOI[chi];
}
