#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('src/data/luan-giai');
const DRY_RUN = process.argv.includes('--dry');

/**
 * IMPORTANT: NEVER cross/eat the closing backtick of a template literal.
 * All regex use [^\n`]* (not [^\n]*) so we never delete `,` at end of line.
 *
 * Strategy:
 *   1) Match a "Xem entry ..." chunk that ends with "." (no backtick yet).
 *   2) If the chunk starts at line beginning with bullet "- " preceding it,
 *      remove the bullet too. Otherwise just remove the sentence.
 *   3) After replacement, collapse extra whitespace but preserve closing backticks.
 */
function transformContent(src) {
  let out = src;

  // Patterns — all stop at backtick to protect template-literal closers.

  // 1) Inline parenthetical: "(Xem entry ...)" — anywhere, but not crossing backtick
  out = out.replace(/\([Xx]em(?:\s+(?:thêm|các))?\s+entry[^)`]*\)/g, '');

  // 2) Bullet line "- Xem entry ... ." with NO backtick on same line — remove whole line
  // Negative lookahead for backtick before newline
  out = out.replace(/^[ \t]*-[ \t]+(?:Hợp với cát tinh:[ \t]+)?[Xx]em(?:\s+(?:thêm|các))?\s+entry[^\n`]*\n/gm, '');

  // 3) Standalone line "Xem entry ... ." with NO backtick — remove whole line
  out = out.replace(/^[ \t]*[Xx]em(?:\s+(?:thêm|các))?\s+entry[^\n`]*\n/gm, '');

  // 4) Trailing sentence after "." up to next ".": " . Xem entry ... ."
  // Stop at backtick to be safe
  out = out.replace(/[ \t]*[Xx]em(?:\s+(?:thêm|các))?\s+entry chuyên biệt[^.`]*\./g, '');

  // 5) Multi-line wrap: "...\n  xem entry..." (continuation of a wrapped sentence)
  // Specifically when "xem entry" begins a continuation line and ends with . before backtick
  out = out.replace(/[ \t]*\n[ \t]+(?:Xem|xem)(?:\s+(?:thêm|các))?\s+entry chuyên biệt[^`.]*\./g, '');

  // 6) "chia thành các entry chuyên biệt" / "chia theo từng entry chuyên biệt"
  out = out.replace(/[ \t]*[—:–-]?[ \t]*chia (?:thành các|theo từng) entry chuyên biệt[^.`]*\./g, '.');

  // 7) "(chi tiết tách theo entry chuyên biệt)" parenthetical
  out = out.replace(/[ \t]*\(chi tiết tách theo entry[^)`]*\)/g, '');

  // 8) "trong các entry chuyên biệt bên dưới."
  out = out.replace(/[ \t]*trong các entry chuyên biệt[^.`]*\./g, '.');

  // 9) "đã có entry chuyên biệt ..."
  out = out.replace(/[ \t]*[—:–-]?[ \t]*đã có entry chuyên biệt[^.`]*\./g, '.');

  // 10) "tách thành entry riêng" / "tách theo entry"
  out = out.replace(/[ \t]*tách (?:thành|theo) entry[^.`]*\./g, '.');

  // 11) "xem chi tiết ... entry ..."
  out = out.replace(/[ \t]*[—:–-]?[ \t]*xem chi tiết[^`]*?entry[^.`]*\./g, '.');

  // 12) `entry "..."`-style refs: rewrite as `mục "..."`
  out = out.replace(/\bentry "/g, 'mục "');

  // Cleanup ONLY whitespace patterns that don't cross backticks:
  // - Trailing whitespace per line
  out = out.replace(/[ \t]+\n/g, '\n');
  // - Triple newlines → double, but ONLY in between content (not before backtick)
  // Use lookahead to avoid eating newlines just before `,
  out = out.replace(/\n\n\n+(?!`)/g, '\n\n');
  // - Leftover ". ." double periods (whitespace required between, NEVER collapse "..")
  out = out.replace(/\. +\./g, '.');

  return out;
}

function* walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (e.isFile() && p.endsWith('.ts')) yield p;
  }
}

let totalFiles = 0;
let totalRemoved = 0;
for (const file of walk(ROOT)) {
  const src = fs.readFileSync(file, 'utf8');
  if (file.endsWith(path.join('luan-giai', 'index.ts'))) continue;
  // Skip files without "entry" word entirely — avoids whitespace-only churn
  if (!/\bentry\b/.test(src)) continue;
  const out = transformContent(src);
  if (src !== out) {
    totalFiles++;
    const before = (src.match(/\bentry\b/g) || []).length;
    const after = (out.match(/\bentry\b/g) || []).length;
    totalRemoved += (before - after);
    if (!DRY_RUN) fs.writeFileSync(file, out, 'utf8');
    console.log(`${DRY_RUN ? '[dry] ' : ''}${path.relative(process.cwd(), file)}: ${before} → ${after} "entry" refs`);
  }
}

console.log(`\n${DRY_RUN ? '[DRY] Would change' : 'Changed'} ${totalFiles} files, removed ${totalRemoved} "entry" refs`);
