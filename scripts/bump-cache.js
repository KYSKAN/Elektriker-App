const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const SW_PATH = path.join(__dirname, '..', 'service-worker.js');
const RE = /kalkulator-v(\d+)/;

const current = fs.readFileSync(SW_PATH, 'utf8').match(RE);
if (!current) {
  console.error('bump-cache: fant ikke kalkulator-vN i service-worker.js');
  process.exit(1);
}

let head = null;
try {
  const headSw = execSync('git show HEAD:service-worker.js', { encoding: 'utf8' });
  const m = headSw.match(RE);
  if (m) head = parseInt(m[1]);
} catch (_) {}

const currentN = parseInt(current[1]);

if (head !== null && currentN > head) {
  console.log(`bump-cache: allerede oppdatert (v${currentN}, HEAD var v${head})`);
  process.exit(0);
}

const next = currentN + 1;
const content = fs.readFileSync(SW_PATH, 'utf8').replace(RE, `kalkulator-v${next}`);
fs.writeFileSync(SW_PATH, content);
console.log(`bump-cache: v${currentN} -> v${next}`);
