import { Chi, Cuc, ChinhTinh, CHI_LIST } from './types';

/**
 * An sao Tử Vi và 13 chính tinh còn lại.
 *
 * QUY TẮC AN TỬ VI (theo cách user xác nhận):
 *   1. mượn = (cục - ngày % cục) % cục   // số phải cộng để ngày chia hết
 *   2. thương = (ngày + mượn) / cục
 *   3. Từ cung Dần đếm là 1, thuận theo chiều thuận đến `thương` thì dừng (= cung pos1)
 *   4. Nếu mượn = 0: Tử Vi ở pos1
 *      Nếu mượn CHẴN: tiến thêm `mượn` cung (thuận) từ pos1
 *      Nếu mượn LẺ:   lùi lại `mượn` cung (nghịch) từ pos1
 *
 * Khác với "công thức ceil + nghịch r" thường gặp ở chỗ direction phụ thuộc parity của mượn.
 */

const DAN_INDEX = CHI_LIST.indexOf('Dần'); // = 2

/**
 * An vị trí sao Tử Vi.
 * @param ngayAmLich Ngày sinh âm lịch (1-30)
 * @param cuc Cục của lá số
 */
export function anTuVi(ngayAmLich: number, cuc: Cuc): Chi {
  if (ngayAmLich < 1 || ngayAmLich > 30) {
    throw new Error(`Ngày âm lịch không hợp lệ: ${ngayAmLich}`);
  }
  const c = cuc.so;
  const muon = (c - (ngayAmLich % c)) % c; // 0 nếu chia hết
  const thuong = (ngayAmLich + muon) / c;

  // Đếm từ Dần là 1 → đến thương: di chuyển (thương - 1) bước thuận
  let pos = (DAN_INDEX + thuong - 1) % 12;

  if (muon !== 0) {
    if (muon % 2 === 0) {
      // Mượn chẵn → tiến thêm mượn cung (thuận)
      pos = (pos + muon) % 12;
    } else {
      // Mượn lẻ → lùi mượn cung (nghịch)
      pos = (pos - muon + 12) % 12;
    }
  }

  return CHI_LIST[pos];
}

/**
 * Tính vị trí sao Thiên Phủ.
 * Thiên Phủ đối xứng với Tử Vi qua trục Dần - Thân.
 *   Dần (idx 2) và Thân (idx 8) nằm trên trục → tự đối xứng (đồng cung Tử Vi nếu Tử Vi tại đó).
 *   Công thức phản chiếu: idx_phản = (2 × 2 - idx + 12) mod 12 = (4 - idx + 12) mod 12.
 *
 * Kiểm tra:
 *   Tử Vi Mão (3)  → Thiên Phủ Sửu (1)
 *   Tử Vi Thìn (4) → Thiên Phủ Tý (0)
 *   Tử Vi Tỵ (5)   → Thiên Phủ Hợi (11)
 *   Tử Vi Ngọ (6)  → Thiên Phủ Tuất (10)
 *   Tử Vi Mùi (7)  → Thiên Phủ Dậu (9)
 *   Tử Vi Dần (2)  → Thiên Phủ Dần (đồng cung)
 *   Tử Vi Thân (8) → Thiên Phủ Thân (đồng cung)
 */
export function anThienPhu(chiTuVi: Chi): Chi {
  const tv = CHI_LIST.indexOf(chiTuVi);
  return CHI_LIST[(4 - tv + 12) % 12];
}

/**
 * An vị trí 14 chính tinh dựa trên vị trí Tử Vi.
 *
 * Vòng Tử Vi (6 sao, đi NGHỊCH chiều kim đồng hồ từ Tử Vi):
 *   Tử Vi → Thiên Cơ (1 nghịch) → Thái Dương (cách 1 ô = 3 nghịch tổng)
 *   → Vũ Khúc (4) → Thiên Đồng (5) → Liêm Trinh (cách 2 ô = 8 nghịch tổng)
 *
 * Vòng Thiên Phủ (8 sao, đi THUẬN chiều kim đồng hồ từ Thiên Phủ):
 *   Thiên Phủ → Thái Âm (1) → Tham Lang (2) → Cự Môn (3) → Thiên Tướng (4)
 *   → Thiên Lương (5) → Thất Sát (6) → Phá Quân (bỏ 3 cung = 10 thuận tổng)
 */
export function anChinhTinh(chiTuVi: Chi): Record<ChinhTinh, Chi> {
  const tvIdx = CHI_LIST.indexOf(chiTuVi);
  const tpIdx = CHI_LIST.indexOf(anThienPhu(chiTuVi));

  // Vòng Tử Vi: offset nghịch (trừ idx)
  const offsetVongTuVi: Record<string, number> = {
    'Tử Vi':      0,
    'Thiên Cơ':   1,
    'Thái Dương': 3,
    'Vũ Khúc':    4,
    'Thiên Đồng': 5,
    'Liêm Trinh': 8,
  };

  // Vòng Thiên Phủ: offset thuận (cộng idx)
  const offsetVongThienPhu: Record<string, number> = {
    'Thiên Phủ':   0,
    'Thái Âm':     1,
    'Tham Lang':   2,
    'Cự Môn':      3,
    'Thiên Tướng': 4,
    'Thiên Lương': 5,
    'Thất Sát':    6,
    'Phá Quân':    10,
  };

  const result = {} as Record<ChinhTinh, Chi>;

  for (const [sao, off] of Object.entries(offsetVongTuVi)) {
    result[sao as ChinhTinh] = CHI_LIST[(tvIdx - off + 12) % 12];
  }
  for (const [sao, off] of Object.entries(offsetVongThienPhu)) {
    result[sao as ChinhTinh] = CHI_LIST[(tpIdx + off) % 12];
  }

  return result;
}

