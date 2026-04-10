// ── Vanlig kalkulator ──
let current = '0', previous = '', op = null, resetNext = false;

const resultEl     = document.getElementById('result');
const expressionEl = document.getElementById('expression');

function updateDisplay() { resultEl.textContent = current; }

function digit(d) {
  if (resetNext) { current = d; resetNext = false; }
  else current = current === '0' ? d : current + d;
  updateDisplay();
}

function decimal() {
  if (resetNext) { current = '0.'; resetNext = false; }
  else if (!current.includes('.')) current += '.';
  updateDisplay();
}

function operator(o) {
  if (op && !resetNext) equals(true);
  previous = current; op = o; resetNext = true;
  const s = { '/': '÷', '*': '×', '-': '−', '+': '+' };
  expressionEl.textContent = `${previous} ${s[o]}`;
}

function equals(silent = false) {
  if (!op || !previous) return;
  const a = parseFloat(previous), b = parseFloat(current);
  let res;
  switch (op) {
    case '+': res = a + b; break;
    case '-': res = a - b; break;
    case '*': res = a * b; break;
    case '/': res = b !== 0 ? a / b : 'Feil'; break;
  }
  if (!silent) {
    const s = { '/': '÷', '*': '×', '-': '−', '+': '+' };
    expressionEl.textContent = `${previous} ${s[op]} ${current} =`;
  }
  current = res === 'Feil' ? 'Feil' : String(parseFloat(res.toFixed(10)));
  op = null; previous = ''; resetNext = true;
  updateDisplay();
}

function calcClear() {
  current = '0'; previous = ''; op = null; resetNext = false;
  expressionEl.textContent = ''; updateDisplay();
}

function toggleSign() { current = String(parseFloat(current) * -1); updateDisplay(); }
function percent()    { current = String(parseFloat(current) / 100); updateDisplay(); }
