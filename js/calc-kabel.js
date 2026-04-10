// ── Kabel og vern kalkulator ──
// Standard: NEK 400 / IEC 60364-5-52
// Beregner: lasstrøm, kabeltverrsnitt, spenningsfall, vernstørrelse

// ── Strømkapasitetstabeller (A), kobber, flerleder ──
// Forlegningsmetoder: A2, B2, C, E, D1  (IEC 60364-5-52 tabell B.52.4 / B.52.5)
const izCuPVC = {
  1.5:  { A2:13,  B2:15,  C:17.5, E:19.5, D1:22  },
  2.5:  { A2:17,  B2:20,  C:24,   E:27,   D1:29  },
  4:    { A2:23,  B2:27,  C:32,   E:36,   D1:38  },
  6:    { A2:29,  B2:34,  C:41,   E:46,   D1:47  },
  10:   { A2:39,  B2:46,  C:57,   E:63,   D1:63  },
  16:   { A2:52,  B2:62,  C:76,   E:85,   D1:81  },
  25:   { A2:68,  B2:80,  C:99,   E:112,  D1:104 },
  35:   { A2:83,  B2:99,  C:119,  E:138,  D1:125 },
  50:   { A2:99,  B2:118, C:144,  E:168,  D1:148 },
  70:   { A2:125, B2:149, C:184,  E:213,  D1:183 },
  95:   { A2:150, B2:179, C:223,  E:258,  D1:216 },
  120:  { A2:172, B2:206, C:259,  E:299,  D1:246 },
};

const izCuPEX = {
  1.5:  { A2:15,  B2:18,  C:21,   E:23,   D1:25  },
  2.5:  { A2:21,  B2:25,  C:28,   E:32,   D1:33  },
  4:    { A2:28,  B2:33,  C:38,   E:43,   D1:44  },
  6:    { A2:36,  B2:42,  C:49,   E:55,   D1:56  },
  10:   { A2:50,  B2:57,  C:68,   E:76,   D1:74  },
  16:   { A2:66,  B2:76,  C:91,   E:101,  D1:96  },
  25:   { A2:84,  B2:99,  C:116,  E:130,  D1:121 },
  35:   { A2:101, B2:120, C:139,  E:158,  D1:144 },
  50:   { A2:121, B2:144, C:168,  E:192,  D1:169 },
  70:   { A2:154, B2:182, C:213,  E:246,  D1:209 },
  95:   { A2:188, B2:220, C:258,  E:298,  D1:248 },
  120:  { A2:216, B2:253, C:299,  E:346,  D1:284 },
};

const crossSections = [1.5, 2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120];
const breakerSizes  = [6, 10, 13, 16, 20, 25, 32, 40, 50, 63, 80, 100, 125];

// ── Temperaturkorreksjonsfaktorer (referanse 30°C, NEK 400 tab. 52B) ──
const tCorrPVC = { 10:1.22, 15:1.17, 20:1.12, 25:1.06, 30:1.00, 35:0.94, 40:0.87, 45:0.79, 50:0.71 };
const tCorrPEX = { 10:1.15, 15:1.12, 20:1.08, 25:1.04, 30:1.00, 35:0.96, 40:0.91, 45:0.87, 50:0.82 };

// ── Resistivitet ved driftstemperatur (Ω·mm²/m) ──
const rhoMap = { Cu_PVC: 0.0225, Cu_PEX: 0.0246, Al_PVC: 0.036, Al_PEX: 0.040 };

// ── Hjelpefunksjoner ──
function getTempFactor(temp, insul) {
  const tbl = insul === 'PEX' ? tCorrPEX : tCorrPVC;
  const t   = Math.max(10, Math.min(50, Math.round(temp / 5) * 5));
  return tbl[t] ?? 1.0;
}

function getToggle(groupId) {
  return document.querySelector(`#${groupId} .toggle-btn.active`)?.dataset.val;
}

function setToggle(groupId, val) {
  document.querySelectorAll(`#${groupId} .toggle-btn`).forEach(btn => {
    btn.classList.toggle('active', btn.dataset.val === val);
  });
}

// ── Hovedberegning ──
function kabelCalc() {
  const length    = parseFloat(document.getElementById('kbLength').value);
  const phases    = parseInt(getToggle('kbPhase'));
  const loadKw    = parseFloat(document.getElementById('kbLoad').value);
  const install   = document.getElementById('kbInstall').value;
  const system    = getToggle('kbSystem');    // 'IT' | 'TN'
  const use       = getToggle('kbUse');       // 'bolig' | 'industri'
  const conductor = getToggle('kbConductor'); // 'Cu' | 'Al'
  const temp      = parseFloat(document.getElementById('kbTemp').value) || 25;
  const insul     = getToggle('kbInsul');     // 'PVC' | 'PEX'

  if (isNaN(length) || isNaN(loadKw)) return;

  // Spenning og lasstrøm (cos φ = 1)
  // IT 230V: L-L = 230V (ingen nøytral i tradisjonelt IT-nett)
  // TN 400V: L-N = 230V (1-fase), L-L = 400V (3-fase)
  const U_I = system === 'IT'
    ? (phases === 1 ? 230 : Math.sqrt(3) * 230)
    : (phases === 1 ? 230 : Math.sqrt(3) * 400);

  const I = (loadKw * 1000) / U_I;

  // Spenningsfallreferanse (NEK 400-5-52)
  const U_ref = system === 'IT' ? 230 : (phases === 1 ? 230 : 400);

  const tFactor  = getTempFactor(temp, insul);
  const alFactor = conductor === 'Al' ? 0.78 : 1.0;
  const minCS    = conductor === 'Al' ? 16 : 1.5;
  const rho      = rhoMap[`${conductor}_${insul}`] ?? rhoMap.Cu_PVC;
  const izTable  = insul === 'PEX' ? izCuPEX : izCuPVC;

  // NEK 400-5-52: maks spenningsfall bolig 4 %, industri 5 %
  const maxDrop = use === 'bolig' ? 4.0 : 5.0;

  const calcDrop = cs => phases === 1
    ? (2 * rho * length * I) / (cs * U_ref) * 100
    : (Math.sqrt(3) * rho * length * I) / (cs * U_ref) * 100;

  // Finn minste tverrsnitt som tilfredsstiller både Iz og spenningsfall
  let chosenCS = null, chosenIz = null, chosenDrop = null;

  for (const cs of crossSections) {
    if (cs < minCS) continue;
    const iz   = (izTable[cs]?.[install] ?? 0) * alFactor * tFactor;
    const drop = calcDrop(cs);
    if (iz >= I && drop <= maxDrop) {
      chosenCS = cs; chosenIz = iz; chosenDrop = drop; break;
    }
    // Strøm OK men spenningsfall for høyt → kandidat, prøv neste
    if (iz >= I && chosenCS === null) {
      chosenCS = cs; chosenIz = iz; chosenDrop = drop;
    }
  }

  // Fall-back: største tilgjengelige tverrsnitt
  if (chosenCS === null) {
    const cs = crossSections[crossSections.length - 1];
    chosenCS   = cs;
    chosenIz   = (izTable[cs]?.[install] ?? 0) * alFactor * tFactor;
    chosenDrop = calcDrop(cs);
  }

  // Vern (NEK 400-43): Ib ≤ In ≤ Iz
  const breaker = breakerSizes.find(b => b >= I && b <= chosenIz)
               ?? breakerSizes.find(b => b >= I)
               ?? breakerSizes[breakerSizes.length - 1];

  // Advarsler
  const warnings = [];
  if (chosenDrop > maxDrop)
    warnings.push(`Spenningsfall ${chosenDrop.toFixed(1)} % > maks ${maxDrop} % (NEK 400-5-52). Vurder kortere kabel eller større tverrsnitt.`);
  if (chosenIz < I)
    warnings.push('Strømkapasitet overskrides. Vurder parallellføring.');
  if (use === 'bolig' && breaker > chosenIz)
    warnings.push(`NEK 400 (bolig): Vern ${breaker} A > Iz ${chosenIz.toFixed(1)} A. Velg større kabel.`);

  // Vis resultat
  document.getElementById('krCurrent').textContent = I.toFixed(1);
  document.getElementById('krCross').textContent   = chosenCS;
  document.getElementById('krBreaker').textContent = breaker;

  const dropEl = document.getElementById('krDrop');
  dropEl.textContent = chosenDrop.toFixed(1);
  dropEl.style.color = chosenDrop > maxDrop ? '#fc8181' : '#68d391';

  const warnEl = document.getElementById('krWarning');
  warnEl.textContent = warnings.join('\n');
  warnEl.classList.toggle('hidden', warnings.length === 0);

  document.getElementById('kbResult').classList.remove('hidden');

  // Utregning
  const iName   = { A2:'i rør i isolert vegg', B2:'i rør på vegg', C:'på vegg/tak', E:'fritt i luft', D1:'nedgravd i rør' }[install] ?? install;
  const izBase  = izTable[chosenCS]?.[install] ?? 0;
  const alLabel = conductor === 'Al' ? ` × ${alFactor}` : '';
  const dFactor = phases === 1 ? '2' : '√3';
  const U_I_label = system === 'IT'
    ? (phases === 1 ? '230' : `√3 × 230 = ${(Math.sqrt(3)*230).toFixed(1)}`)
    : (phases === 1 ? '230' : `√3 × 400 = ${(Math.sqrt(3)*400).toFixed(1)}`);
  const ok = v => v ? '✓' : '✗';

  const lines = [
    `── Lasstrøm (cos φ = 1) ──`,
    `I = ${(loadKw*1000).toFixed(0)} W / ${U_I_label} V`,
    `  = ${I.toFixed(2)} A`,
    ``,
    `── Temperaturkorrigering (${temp}°C, ${insul}) ──`,
    `k_temp = ${tFactor}  (ref. 30°C, NEK 400 tab. 52B)`,
    `Iz_krav = ${I.toFixed(2)} / ${tFactor} = ${(I/tFactor).toFixed(2)} A`,
    ``,
    `── Valgt kabel ──`,
    `${chosenCS} mm² ${conductor} ${insul}, ${iName}`,
    `Iz_tabell = ${izBase} A`,
    `Iz = ${izBase}${alLabel} × ${tFactor} = ${chosenIz.toFixed(1)} A`,
    `Iz (${chosenIz.toFixed(1)} A) ≥ I (${I.toFixed(2)} A)  ${ok(chosenIz >= I)}`,
    ``,
    `── Spenningsfall (NEK 400-5-52, maks ${maxDrop} %) ──`,
    `ρ = ${rho} Ω·mm²/m  (${conductor} ${insul})`,
    `ΔU = ${dFactor} × ${rho} × ${length} m × ${I.toFixed(2)} A`,
    `     / (${chosenCS} mm² × ${U_ref} V) × 100`,
    `   = ${chosenDrop.toFixed(2)} %`,
    `${chosenDrop.toFixed(2)} % ${chosenDrop <= maxDrop ? '≤' : '>'} ${maxDrop} %  ${ok(chosenDrop <= maxDrop)}`,
    ``,
    `── Vern (NEK 400-43): Ib ≤ In ≤ Iz ──`,
    `Ib = ${I.toFixed(2)} A`,
    `In = ${breaker} A  (automatsikring)`,
    `Iz = ${chosenIz.toFixed(1)} A`,
    `${I.toFixed(2)} ≤ ${breaker} ≤ ${chosenIz.toFixed(1)}  ${ok(I <= breaker && breaker <= chosenIz)}`,
    use === 'bolig' ? `\n── Særnorsk krav (bolig) ──\nIn ≤ Iz: ${breaker} ≤ ${chosenIz.toFixed(1)}  ${ok(breaker <= chosenIz)}` : '',
  ].filter(l => l !== undefined);

  document.getElementById('kbUtregning').textContent = lines.join('\n');
  document.getElementById('kbUtregningBox').classList.remove('hidden');
}

function kabelClear() {
  document.getElementById('kbLength').value = '';
  document.getElementById('kbLoad').value   = '';
  document.getElementById('kbTemp').value   = '25';
  document.getElementById('kbResult').classList.add('hidden');
  document.getElementById('kbUtregningBox').classList.add('hidden');
  setToggle('kbSystem',    'TN');
  setToggle('kbPhase',     '1');
  setToggle('kbUse',       'bolig');
  setToggle('kbConductor', 'Cu');
  setToggle('kbInsul',     'PVC');
}
