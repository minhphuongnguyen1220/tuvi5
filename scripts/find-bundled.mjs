// Script to find bundled entries - entries with multiple "+ X:" combination lines
// in tomTat or chiTiet that should be split into separate entries.

import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

const ROOT = 'src/data/luan-giai';

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (e.isFile() && e.name.endsWith('.ts') && e.name !== 'types.ts') yield p;
  }
}

// Parse a TS file to extract entries (id + tomTat + chiTiet text content)
// Approach: regex-based, since entries are simple object literals.
function extractEntries(src) {
  const entries = [];
  // Match each top-level object in the array.
  // We rely on the pattern "{ id: '...'," beginning a record. But entries can have nested templates.
  // Use a simple state machine: walk through the source counting braces inside the export array.
  const startIdx = src.indexOf('= [');
  if (startIdx === -1) return entries;
  let i = src.indexOf('{', startIdx);
  const len = src.length;
  while (i !== -1 && i < len) {
    // Find balanced object starting at i, but we must skip strings/template/comments.
    let depth = 0;
    let j = i;
    let inStr = null; // null, "'", '"', '`'
    let inLineComment = false;
    let inBlockComment = false;
    let objStart = i;
    let objEnd = -1;
    for (; j < len; j++) {
      const c = src[j];
      const next = src[j + 1];
      if (inLineComment) {
        if (c === '\n') inLineComment = false;
        continue;
      }
      if (inBlockComment) {
        if (c === '*' && next === '/') { inBlockComment = false; j++; }
        continue;
      }
      if (inStr) {
        if (c === '\\') { j++; continue; }
        if (c === inStr) { inStr = null; }
        continue;
      }
      if (c === '/' && next === '/') { inLineComment = true; j++; continue; }
      if (c === '/' && next === '*') { inBlockComment = true; j++; continue; }
      if (c === "'" || c === '"' || c === '`') { inStr = c; continue; }
      if (c === '{') depth++;
      else if (c === '}') {
        depth--;
        if (depth === 0) { objEnd = j; break; }
      }
    }
    if (objEnd === -1) break;
    const objSrc = src.slice(objStart, objEnd + 1);
    entries.push({ start: objStart, end: objEnd, src: objSrc });
    // Move to next object (after comma)
    i = src.indexOf('{', objEnd + 1);
    // But only continue if we haven't passed the array end. A simple check: if remaining source has only whitespace/];
    if (i === -1) break;
    // Heuristic: if no comma between objEnd and i (just whitespace), it's another entry; otherwise we may have run past array end.
    const between = src.slice(objEnd + 1, i);
    if (!/,\s*$/.test(between) && !/^\s*,/.test(between)) {
      // could be end of array; check if a "]" appears between objEnd and i
      if (between.includes(']')) break;
    }
  }
  return entries;
}

function getStringField(objSrc, name) {
  // Capture id: '...'  or id: "..."
  const re = new RegExp(`\\b${name}\\s*:\\s*(['"])((?:\\\\.|(?!\\1).)*?)\\1`);
  const m = objSrc.match(re);
  return m ? m[2] : null;
}

function getTemplateField(objSrc, name) {
  // Capture tomTat: `...` (allowing escaped backticks ignored)
  // Find "name:" then nearest backtick block.
  const idx = objSrc.search(new RegExp(`\\b${name}\\s*:\\s*\``));
  if (idx === -1) return null;
  // Find the opening backtick after the colon
  const open = objSrc.indexOf('`', idx);
  if (open === -1) return null;
  // Walk to matching backtick, handling \` escape and ${...} nesting (ignore - treat as plain)
  let k = open + 1;
  while (k < objSrc.length) {
    const c = objSrc[k];
    if (c === '\\') { k += 2; continue; }
    if (c === '`') return objSrc.slice(open + 1, k);
    k++;
  }
  return null;
}

// Detect "+ X" combination lines in markdown content.
// A bundled-candidate line:
//   - starts (after optional whitespace + bullet markers - or *) with a "+" or "**+" marker
//   - is followed by ": " or "** :" indicating description for the combo
//   - the X portion contains capitalized Vietnamese star/feature words
function findComboLines(text) {
  if (!text) return [];
  const lines = text.split(/\r?\n/);
  const matches = [];
  for (const raw of lines) {
    const line = raw.trim();
    // patterns:
    //  + X: ...
    //  - + X: ...
    //  **+ X**: ...
    //  **+ X:** ...
    //  + **X**: ...
    //  🌟 **+ X:** ...   (with emoji prefix)
    //  ⚠️ **+ X:** ...
    // Strip leading bullet + emoji + bold markers
    let s = line;
    // Remove leading "- " bullet
    s = s.replace(/^[-*]\s*/, '');
    // Remove leading emojis, variation selectors, ZWJ, and whitespace (loop until clean)
    // \p{Extended_Pictographic} covers most emoji; we also strip combining marks and surrogate-related chars.
    let prev;
    do {
      prev = s;
      s = s.replace(/^[\p{Extended_Pictographic}\p{Emoji_Component}‍︎️]\s*/u, '');
      s = s.replace(/^\s+/, '');
    } while (s !== prev);
    // Remove leading "**"
    s = s.replace(/^\*\*\s*/, '');
    // Now check if it starts with "+"
    if (!/^\+\s/.test(s)) continue;
    // Strip leading "+ "
    s = s.replace(/^\+\s+/, '');
    // The combination part should mention sao - require at least one Capital letter.
    // Must have a colon somewhere indicating description.
    const colonIdx = s.search(/[:]/);
    if (colonIdx === -1) continue;
    const combo = s.slice(0, colonIdx).replace(/\*+/g, '').trim();
    if (!combo) continue;
    // Filter out lines that are not actually star combos (e.g. literal "+ Cát tinh").
    // We KEEP these because they ARE candidate bundled entries.
    matches.push(combo);
  }
  return matches;
}

const bundled = [];
let totalFiles = 0;
let totalBundledEntries = 0;

for await (const file of walk(ROOT)) {
  totalFiles++;
  const src = await readFile(file, 'utf8');
  const entries = extractEntries(src);
  for (const ent of entries) {
    const id = getStringField(ent.src, 'id');
    if (!id) continue;
    const tomTat = getTemplateField(ent.src, 'tomTat');
    const chiTiet = getTemplateField(ent.src, 'chiTiet');
    const tomCombos = findComboLines(tomTat);
    const chiCombos = findComboLines(chiTiet);
    const all = [...tomCombos, ...chiCombos];
    // Dedupe combos (case-insensitive) since tomTat/chiTiet may repeat content.
    const seen = new Set();
    const uniqCombos = [];
    for (const c of all) {
      const k = c.toLowerCase();
      if (!seen.has(k)) { seen.add(k); uniqCombos.push(c); }
    }
    if (uniqCombos.length >= 2) {
      bundled.push({ file: relative(process.cwd(), file).replace(/\\/g, '/'), id, count: uniqCombos.length, combos: uniqCombos });
      totalBundledEntries++;
    }
  }
}

// Group by file
const byFile = new Map();
for (const b of bundled) {
  if (!byFile.has(b.file)) byFile.set(b.file, []);
  byFile.get(b.file).push(b);
}

const sortedFiles = [...byFile.keys()].sort();
for (const f of sortedFiles) {
  console.log(`\n## File: ${f.replace('src/data/luan-giai/', '')}`);
  for (const b of byFile.get(f)) {
    const list = b.combos.map(c => `+ ${c}`).join('; ');
    console.log(`- id \`${b.id}\` (${b.count} tổ hợp): ${list}`);
  }
}

console.log(`\n---\nTổng kết: ${byFile.size} file có entry bundled, tổng ${totalBundledEntries} entry bundled cần tách. (Đã quét ${totalFiles} file.)`);
