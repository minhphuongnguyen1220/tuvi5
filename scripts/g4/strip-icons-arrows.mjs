#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('src/data/luan-giai');
const DRY_RUN = process.argv.includes('--dry');
const TARGET_FILES = process.argv.filter(a => a.endsWith('.ts')).map(p => path.resolve(p));

const ICONS = ['🌟', '⚠️', '⚡', '✅', '📌', '💫', '🎯', '❌', '✓', '✗', '🥇', '🥈', '🥉', '🔴', '🟢', '🟡', '🔵', '⭐', '🎉', '💡', '📍', '➡️', '↗️', '↘️', '⬆️', '⬇️'];

function transformContent(src) {
  let out = src;

  // 1) Strip leading-line icon markers: "  ⚡ **Header:**" → "  **Header:**"
  for (const ic of ICONS) {
    const escIc = ic.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Beginning of line (after possible whitespace) + icon + space → just whitespace
    out = out.replace(new RegExp(`(^|\\n)([ \\t]*)${escIc}[ \\t]+`, 'g'), '$1$2');
    // Inline icon (not at line start) + optional space → strip
    out = out.replace(new RegExp(`${escIc}[ \\t]?`, 'g'), '');
  }

  // 2) Arrow handling
  // 2a) Line-leading "→ " (after whitespace at line start) → "- "
  out = out.replace(/(^|\n)([ \t]*)→[ \t]+/g, '$1$2- ');
  // 2b) Inline "** X** → Y" or "Y → Z" → replace " → " with ": " for clarity
  // Be conservative: only inline (not at line start, already handled above)
  out = out.replace(/[ \t]→[ \t]/g, ': ');
  // 2c) Any remaining → (rare edge): strip with surrounding spaces
  out = out.replace(/[ \t]*→[ \t]*/g, ' ');

  // 3) Cleanup: collapse double-spaces created by icon stripping (only on text lines, not in code)
  out = out.replace(/(\S) {2,}(\S)/g, '$1 $2');

  // 4) Trim trailing whitespace per line
  out = out.replace(/[ \t]+\n/g, '\n');

  return out;
}

function* walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (e.isFile() && p.endsWith('.ts')) yield p;
  }
}

const files = TARGET_FILES.length > 0 ? TARGET_FILES : Array.from(walk(ROOT));

let totalChanged = 0;
let totalFiles = 0;
for (const file of files) {
  const src = fs.readFileSync(file, 'utf8');
  const out = transformContent(src);
  if (src !== out) {
    totalFiles++;
    const before = (src.match(/🌟|⚠️|⚡|✅|📌|→|✓|✗|❌|💫|🎯|🥇|🥈|🥉/g) || []).length;
    const after = (out.match(/🌟|⚠️|⚡|✅|📌|→|✓|✗|❌|💫|🎯|🥇|🥈|🥉/g) || []).length;
    totalChanged += (before - after);
    if (!DRY_RUN) {
      fs.writeFileSync(file, out, 'utf8');
    }
    console.log(`${DRY_RUN ? '[dry] ' : ''}${path.relative(process.cwd(), file)}: ${before} → ${after} icons/arrows`);
  }
}

console.log(`\n${DRY_RUN ? '[DRY RUN] Would change' : 'Changed'} ${totalFiles} files, removed ${totalChanged} markers`);
