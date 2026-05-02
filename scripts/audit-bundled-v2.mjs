// Audit v2 — phát hiện entries "bundled ngầm":
// content nhắc tới điều kiện (giới tính / cung khác / chi khác / trạng thái khác)
// mà KHÔNG có filter tương ứng trong fields.

import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

const ROOT = 'src/data/luan-giai';

const CUNG_NAMES = [
  'Mệnh', 'Phụ Mẫu', 'Phúc Đức', 'Điền Trạch', 'Quan Lộc', 'Nô Bộc',
  'Thiên Di', 'Tật Ách', 'Tài Bạch', 'Tử Tức', 'Phu Thê', 'Huynh Đệ',
];

const CHI_NAMES = [
  'Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ',
  'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi',
];

const TRANG_THAI = ['Miếu', 'Vượng', 'Đắc địa', 'Bình hòa', 'Hãm', 'Lạc hãm'];

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (e.isFile() && e.name.endsWith('.ts') && e.name !== 'types.ts') yield p;
  }
}

function extractEntries(src) {
  const entries = [];
  const startIdx = src.indexOf('= [');
  if (startIdx === -1) return entries;
  let i = src.indexOf('{', startIdx);
  const len = src.length;
  while (i !== -1 && i < len) {
    let depth = 0;
    let j = i;
    let inStr = null;
    let inLineComment = false;
    let inBlockComment = false;
    let objStart = i;
    let objEnd = -1;
    for (; j < len; j++) {
      const c = src[j];
      const next = src[j + 1];
      if (inLineComment) { if (c === '\n') inLineComment = false; continue; }
      if (inBlockComment) { if (c === '*' && next === '/') { inBlockComment = false; j++; } continue; }
      if (inStr) { if (c === '\\') { j++; continue; } if (c === inStr) inStr = null; continue; }
      if (c === '/' && next === '/') { inLineComment = true; j++; continue; }
      if (c === '/' && next === '*') { inBlockComment = true; j++; continue; }
      if (c === "'" || c === '"' || c === '`') { inStr = c; continue; }
      if (c === '{') depth++;
      else if (c === '}') { depth--; if (depth === 0) { objEnd = j; break; } }
    }
    if (objEnd === -1) break;
    entries.push({ src: src.slice(objStart, objEnd + 1) });
    i = src.indexOf('{', objEnd + 1);
    if (i === -1) break;
  }
  return entries;
}

function getStringField(objSrc, name) {
  const re = new RegExp(`\\b${name}\\s*:\\s*(['"])((?:\\\\.|(?!\\1).)*?)\\1`);
  const m = objSrc.match(re);
  return m ? m[2] : null;
}

function getArrayField(objSrc, name) {
  // cung: ['Phu Thê', 'Mệnh']
  const re = new RegExp(`\\b${name}\\s*:\\s*\\[([^\\]]*)\\]`);
  const m = objSrc.match(re);
  if (!m) return null;
  const inner = m[1];
  return [...inner.matchAll(/['"]([^'"]+)['"]/g)].map(x => x[1]);
}

function getTemplateField(objSrc, name) {
  const idx = objSrc.search(new RegExp(`\\b${name}\\s*:\\s*\``));
  if (idx === -1) return null;
  const open = objSrc.indexOf('`', idx);
  if (open === -1) return null;
  let k = open + 1;
  while (k < objSrc.length) {
    const c = objSrc[k];
    if (c === '\\') { k += 2; continue; }
    if (c === '`') return objSrc.slice(open + 1, k);
    k++;
  }
  return null;
}

function uniq(arr) { return [...new Set(arr)]; }

function snippetAround(text, term, before = 30, after = 60) {
  const idx = text.indexOf(term);
  if (idx === -1) return null;
  const start = Math.max(0, idx - before);
  const end = Math.min(text.length, idx + term.length + after);
  let s = text.slice(start, end).replace(/\s+/g, ' ').trim();
  if (start > 0) s = '…' + s;
  if (end < text.length) s = s + '…';
  return s;
}

const flagged = [];
let totalEntries = 0;
let totalFiles = 0;

for await (const file of walk(ROOT)) {
  totalFiles++;
  const src = await readFile(file, 'utf8');
  const entries = extractEntries(src);
  const rel = relative(process.cwd(), file).replace(/\\/g, '/').replace('src/data/luan-giai/', '');

  for (const ent of entries) {
    const id = getStringField(ent.src, 'id');
    if (!id) continue;
    totalEntries++;

    const cungField = getArrayField(ent.src, 'cung') || [];
    const chiField = getArrayField(ent.src, 'chi') || [];
    const trangThaiField = getArrayField(ent.src, 'trangThai') || [];
    const ketHopField = getArrayField(ent.src, 'ketHop') || [];
    const gioiTinhStr = getStringField(ent.src, 'gioiTinh');

    // Engine bỏ qua entries không có dimension cụ thể nào — không cần audit
    const hasSpecific = cungField.length || chiField.length ||
      ketHopField.length || trangThaiField.length || gioiTinhStr;
    if (!hasSpecific) continue;

    const tomTatRaw = getTemplateField(ent.src, 'tomTat') || '';
    const chiTietRaw = getTemplateField(ent.src, 'chiTiet') || '';
    // Bỏ qua dòng "pointer" trỏ tới entries đã tách (vd "Xem entry chuyên biệt cho ...").
    // Những dòng này là metadata, không phải rule, không cần audit.
    const stripPointerLines = (s) => s.split('\n').filter(line => {
      const t = line.trim();
      if (/Xem entr(?:y|ies) chuyên biệt/i.test(t)) return false;
      if (/được tách thành luận giải riêng/i.test(t)) return false;
      if (/Tổ hợp .* được tách/i.test(t)) return false;
      return true;
    }).join('\n');
    // "Dần dà" là idiom Vietnamese ("dần dần"), không phải chi Dần.
    const dropIdiomDanDa = (s) => s.replace(/Dần dà/g, 'sau này');
    const tomTat = dropIdiomDanDa(stripPointerLines(tomTatRaw));
    const chiTiet = dropIdiomDanDa(stripPointerLines(chiTietRaw));
    const content = tomTat + '\n' + chiTiet;
    const saoField = getArrayField(ent.src, 'sao') || [];
    const ketHopFieldArr = getArrayField(ent.src, 'ketHop') || [];

    const flags = [];

    // 1. GENDER — chỉ flag nếu entry CHƯA có gioiTinh field nhưng content nhắc giới tính.
    // Nếu entry CÓ gioiTinh, content nhắc giới tính tương ứng là OK.
    // Bỏ qua "phụ nữ" / "đàn ông" khi đứng sau verb chỉ "đối tượng" thay vì chủ thể.
    if (!gioiTinhStr) {
      const genderTerms = ['Nữ mệnh', 'Nam mệnh', 'nữ mệnh', 'nam mệnh', 'Phụ nữ', 'phụ nữ', 'Đàn ông', 'đàn ông'];
      const objectVerbs = /(?:thu hút|hấp dẫn|với|đối với|dành cho|tặng|kèm theo|cùng với|gặp|yêu|lấy|cưới|chiều|chinh phục|lừa|dụ)\s+$/i;
      const genderHits = uniq(genderTerms.filter(t => {
        if (!content.includes(t)) return false;
        // Skip "phụ nữ"/"đàn ông" nếu trước đó có verb chỉ-đối-tượng (FP).
        if (/phụ nữ|đàn ông/i.test(t)) {
          const idx = content.indexOf(t);
          const before = content.slice(Math.max(0, idx - 30), idx);
          if (objectVerbs.test(before)) return false;
        }
        return true;
      }));
      if (genderHits.length > 0) {
        flags.push({ kind: 'GENDER', detail: genderHits.join(', '), snippet: snippetAround(content, genderHits[0]) });
      }
    }

    // 2. CROSS-CUNG — content có tên cung X mà X không trong cungField
    // FP filters:
    //  - Bỏ qua nếu cung name trùng tên 1 sao trong saoField hoặc ketHopField (vd sao Phúc Đức cùng tên cung Phúc Đức).
    //  - Bỏ qua "Mệnh" nếu đi kèm trong idiom "Mệnh - Tài - Quan", "Mệnh/Tài/Quan", "Mệnh thân", "thủ Mệnh tại".
    const saoNames = new Set([...saoField, ...ketHopFieldArr]);
    const cungInContent = uniq(CUNG_NAMES.filter(name => {
      // Skip cung name nếu trùng sao name (sao-cung name overlap, vd Phúc Đức).
      if (saoNames.has(name)) return false;
      const re = new RegExp(`(?:^|[^A-Za-zÀ-ỹ])${name}(?:[^A-Za-zÀ-ỹ]|$)`, 'u');
      if (!re.test(content)) return false;
      // FP idiom check cho "Mệnh".
      if (name === 'Mệnh') {
        const idioms = [
          /Mệnh\s*[-–\/]\s*(?:Tài|Quan|Phúc|Thân)/u,
          /(?:Tài|Quan|Phúc|Thân)\s*[-–\/]\s*Mệnh/u,
          /thủ\s+Mệnh\s+tại/iu,
          /Mệnh\s+(?:thân|VCD)/iu,
          /(?:bản|gia)\s+Mệnh/iu,
        ];
        const stripped = content.replace(/\s+/g, ' ');
        const idiomMatch = idioms.some(re2 => re2.test(stripped));
        // Nếu CHỈ xuất hiện trong idiom, không flag. Cần check xem có dòng nào nhắc Mệnh ngoài idiom không.
        if (idiomMatch) {
          // Đếm số mention "Mệnh" — nếu chỉ 1 và nó nằm trong idiom thì skip.
          const allMentions = [...stripped.matchAll(/(?:^|[^A-Za-zÀ-ỹ])Mệnh(?:[^A-Za-zÀ-ỹ]|$)/gu)];
          let nonIdiomCount = 0;
          for (const m of allMentions) {
            const ctx = stripped.slice(Math.max(0, m.index - 20), m.index + 30);
            const isIdiom = idioms.some(re2 => re2.test(ctx));
            if (!isIdiom) nonIdiomCount++;
          }
          if (nonIdiomCount === 0) return false;
        }
      }
      return true;
    }));
    const crossCung = cungInContent.filter(c => !cungField.includes(c));
    if (crossCung.length > 0) {
      flags.push({ kind: 'CROSS-CUNG', detail: crossCung.join(', ') + ` (entry cung=[${cungField.join(',')}])`, snippet: snippetAround(content, crossCung[0]) });
    }

    // 3. CROSS-CHI — content có tên chi X mà X không trong chiField
    // FP filters:
    //  - Bỏ qua "Thân" khi là phần của "thân xác|thể|hình|tín|phụ|mẫu|phận|nhân|mật|thiết" (chỉ thân thể chứ không phải chi Thân).
    //  - Bỏ qua chi mention nếu đi sau "Tuổi" (chỉ năm sinh, không phải vị trí cung).
    const chiInContent = uniq(CHI_NAMES.filter(name => {
      const re = new RegExp(`(?:^|[^A-Za-zÀ-ỹ])${name}(?:[^A-Za-zÀ-ỹ]|$)`, 'u');
      if (!re.test(content)) return false;
      if (name === 'Thân') {
        // Bỏ qua nếu MỌI mention "Thân" đều theo sau là body word.
        const bodyWords = /^\s*(?:xác|thể|hình|tín|phụ|mẫu|phận|nhân|mật|thiết|cận|tâm|chinh)/u;
        const mentions = [...content.matchAll(/(?:^|[^A-Za-zÀ-ỹ])Thân([^A-Za-zÀ-ỹ]|$)/gu)];
        let realMention = false;
        for (const m of mentions) {
          const after = content.slice(m.index + m[0].length - 1, m.index + m[0].length + 15);
          if (!bodyWords.test(after)) realMention = true;
        }
        if (!realMention) return false;
      }
      // Bỏ qua nếu chi đi sau "Tuổi" (năm sinh, không phải cung).
      const stripped = content.replace(/\s+/g, ' ');
      const tuoiRe = new RegExp(`Tuổi[^.]{0,80}\\b${name}\\b`, 'iu');
      const allRe = new RegExp(`(?:^|[^A-Za-zÀ-ỹ])${name}(?:[^A-Za-zÀ-ỹ]|$)`, 'gu');
      const allMatches = [...stripped.matchAll(allRe)];
      const allInTuoi = allMatches.every(m => {
        const before = stripped.slice(Math.max(0, m.index - 80), m.index);
        return /Tuổi[^.]{0,80}$/iu.test(before);
      });
      if (allInTuoi && allMatches.length > 0) return false;
      return true;
    }));
    const crossChi = chiInContent.filter(c => !chiField.includes(c));
    if (crossChi.length > 0) {
      flags.push({ kind: 'CROSS-CHI', detail: crossChi.join(', ') + ` (entry chi=[${chiField.join(',')}])`, snippet: snippetAround(content, crossChi[0]) });
    }

    // 4. CROSS-TRẠNG THÁI — content có >=2 trạng thái khác nhau mà trangThaiField rỗng
    const ttInContent = uniq(TRANG_THAI.filter(name => {
      const re = new RegExp(`(?:^|[^A-Za-zÀ-ỹ])${name}(?:[^A-Za-zÀ-ỹ]|$)`, 'u');
      return re.test(content);
    }));
    if (trangThaiField.length === 0 && ttInContent.length >= 2) {
      flags.push({ kind: 'TRANG-THAI', detail: ttInContent.join(', ') + ` (entry trangThai=[])`, snippet: snippetAround(content, ttInContent[0]) });
    }

    if (flags.length > 0) flagged.push({ file: rel, id, cungField, chiField, trangThaiField, flags });
  }
}

// In ra report
const byFile = new Map();
for (const f of flagged) {
  if (!byFile.has(f.file)) byFile.set(f.file, []);
  byFile.get(f.file).push(f);
}

const sorted = [...byFile.keys()].sort();
const argv = process.argv.slice(2);
const summaryOnly = argv.includes('--summary');
const filterArg = argv.find(a => a.startsWith('--filter='));
const filterRe = filterArg ? new RegExp(filterArg.slice('--filter='.length)) : null;
if (filterRe) {
  for (const k of [...byFile.keys()]) {
    if (!filterRe.test(k)) byFile.delete(k);
  }
}

{
  // Always write detailed report to file (next to script).
  const lines = [];
  for (const f of sorted) {
    lines.push(`\n## ${f}`);
    for (const e of byFile.get(f)) {
      lines.push(`\n### ${e.id}`);
      lines.push(`  cung=[${e.cungField.join(',')}] chi=[${e.chiField.join(',')}] trangThai=[${e.trangThaiField.join(',')}]`);
      for (const fl of e.flags) {
        lines.push(`  - ${fl.kind}: ${fl.detail}`);
        if (fl.snippet) lines.push(`    "${fl.snippet}"`);
      }
    }
  }
  const { writeFile } = await import('node:fs/promises');
  await writeFile('audit-output.txt', lines.join('\n'), 'utf8');
  if (!summaryOnly) {
    for (const l of lines) console.log(l);
  }
}

// Stats theo loại flag
const stats = { GENDER: 0, 'CROSS-CUNG': 0, 'CROSS-CHI': 0, 'TRANG-THAI': 0 };
const filesByCategory = new Set();
for (const f of flagged) {
  filesByCategory.add(f.file);
  for (const fl of f.flags) stats[fl.kind] = (stats[fl.kind] || 0) + 1;
}

console.log(`\n---`);
console.log(`TỔNG QUAN AUDIT v2`);
console.log(`---`);
console.log(`Files quét: ${totalFiles}`);
console.log(`Entries quét: ${totalEntries}`);
console.log(`Entries có flag: ${flagged.length} (${(flagged.length / totalEntries * 100).toFixed(1)}%)`);
console.log(`Files có entry flag: ${byFile.size}`);
console.log(``);
console.log(`Phân loại flag (1 entry có thể có nhiều flag):`);
console.log(`  - GENDER (giới tính chưa filter): ${stats.GENDER}`);
console.log(`  - CROSS-CUNG (content nhắc cung khác): ${stats['CROSS-CUNG']}`);
console.log(`  - CROSS-CHI (content nhắc chi khác): ${stats['CROSS-CHI']}`);
console.log(`  - TRANG-THAI (content có ≥2 trạng thái, field rỗng): ${stats['TRANG-THAI']}`);
