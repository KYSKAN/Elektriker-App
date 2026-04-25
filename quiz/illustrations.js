// ════════════════════════════════════════════════════════════════
//  QUIZ-ILLUSTRASJONER — alle SVG-er samlet på ett sted
//  Bruk: img: SVG_NAVN  i quiz-filene
//  Lastes av spill.html FØR quiz-filen evalueres
// ════════════════════════════════════════════════════════════════

// ── Ledelse & Organisasjon (ledelse.js) ──────────────────────────

const SVG_MASLOW = `<svg viewBox="0 0 280 190" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="cp-maslow"><polygon points="140,4 276,186 4,186"/></clipPath></defs><rect width="280" height="190" fill="#161927" rx="8"/><rect x="0" y="4" width="280" height="36" fill="#8b5cf6" clip-path="url(#cp-maslow)"/><rect x="0" y="40" width="280" height="37" fill="#5c7cfa" clip-path="url(#cp-maslow)"/><rect x="0" y="77" width="280" height="36" fill="#00a8e8" clip-path="url(#cp-maslow)"/><rect x="0" y="113" width="280" height="36" fill="#10b981" clip-path="url(#cp-maslow)"/><rect x="0" y="149" width="280" height="37" fill="#f59e0b" clip-path="url(#cp-maslow)"/><polygon points="140,4 276,186 4,186" fill="none" stroke="#161927" stroke-width="2.5"/><line x1="113" y1="40" x2="167" y2="40" stroke="#161927" stroke-width="1.5"/><line x1="85" y1="77" x2="195" y2="77" stroke="#161927" stroke-width="1.5"/><line x1="57" y1="113" x2="223" y2="113" stroke="#161927" stroke-width="1.5"/><line x1="29" y1="149" x2="251" y2="149" stroke="#161927" stroke-width="1.5"/><text x="140" y="180" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Maslows behovspyramide – 5 nivåer</text></svg>`;

const SVG_HERZBERG = `<svg viewBox="0 0 280 175" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="175" fill="#161927" rx="8"/><rect x="8" y="8" width="122" height="32" rx="6" fill="#3b82f6" opacity="0.85"/><rect x="150" y="8" width="122" height="32" rx="6" fill="#8b5cf6" opacity="0.85"/><text x="69" y="28" fill="white" font-size="11" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="600">Hygienefaktorer</text><text x="211" y="28" fill="white" font-size="11" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="600">Motivasjonsfaktorer</text><line x1="140" y1="8" x2="140" y2="167" stroke="#2a2f4a" stroke-width="1"/><rect x="18" y="48" width="102" height="100" rx="4" fill="#3b82f6" opacity="0.08"/><rect x="160" y="48" width="102" height="100" rx="4" fill="#8b5cf6" opacity="0.08"/><text x="69" y="100" fill="#3b82f6" font-size="22" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700">?</text><text x="211" y="100" fill="#8b5cf6" font-size="22" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700">?</text><text x="140" y="165" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Herzbergs to-faktorteori</text></svg>`;

// ── Markedsføringsledelse (marked.js) ────────────────────────────

const SVG_FIRE_P = `<svg viewBox="0 0 280 162" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="162" fill="#161927" rx="8"/><rect x="8" y="8" width="124" height="70" rx="6" fill="#5c7cfa" opacity="0.2"/><rect x="148" y="8" width="124" height="70" rx="6" fill="#ec4899" opacity="0.2"/><rect x="8" y="86" width="124" height="70" rx="6" fill="#10b981" opacity="0.2"/><rect x="148" y="86" width="124" height="70" rx="6" fill="#f59e0b" opacity="0.2"/><text x="70" y="38" fill="#5c7cfa" font-size="13" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="600">Hva tilbyr vi?</text><text x="70" y="56" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">P _ _ _ _ _ _</text><text x="210" y="38" fill="#ec4899" font-size="13" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="600">Hva koster det?</text><text x="210" y="56" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">P _ _</text><text x="70" y="117" fill="#10b981" font-size="13" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="600">Hvordan nå kunden?</text><text x="70" y="134" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">P _ _ _ _</text><text x="210" y="117" fill="#f59e0b" font-size="13" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="600">Hvordan kommunisere?</text><text x="210" y="134" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">P _ _ _ _ _ _ _ _ _</text></svg>`;

const SVG_AIDA = `<svg viewBox="0 0 280 172" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="172" fill="#161927" rx="8"/><polygon points="10,10 270,10 242,50 38,50" fill="#5c7cfa" opacity="0.8"/><polygon points="38,56 242,56 214,96 66,96" fill="#00a8e8" opacity="0.8"/><polygon points="66,102 214,102 190,137 90,137" fill="#10b981" opacity="0.8"/><polygon points="90,143 190,143 172,165 108,165" fill="#f59e0b" opacity="0.8"/><text x="140" y="35" fill="white" font-size="12" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700">Steg 1 – _ _ _ _ _ _ _ _ _</text><text x="140" y="80" fill="white" font-size="12" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700">Steg 2 – _ _ _ _ _ _ _ _</text><text x="140" y="124" fill="white" font-size="11" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700">Steg 3 – _ _ _ _ _ _</text><text x="140" y="158" fill="white" font-size="10" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700">Steg 4 – _ _ _ _ _</text></svg>`;

const SVG_PRODUKTLIVSSYKLUS = `<svg viewBox="0 0 280 162" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="162" fill="#161927" rx="8"/><line x1="22" y1="10" x2="22" y2="138" stroke="#2a2f4a" stroke-width="1.5"/><line x1="22" y1="138" x2="268" y2="138" stroke="#2a2f4a" stroke-width="1.5"/><text x="145" y="155" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Tid →</text><text x="10" y="75" fill="#7b82a8" font-size="8" text-anchor="middle" font-family="system-ui,sans-serif" transform="rotate(-90,10,75)">Salg</text><path d="M22,133 C38,133 48,122 63,98 C78,73 98,38 128,26 C158,14 182,30 206,64 C224,90 240,118 268,133" fill="none" stroke="#5c7cfa" stroke-width="2.5" stroke-linecap="round"/><line x1="70" y1="14" x2="70" y2="138" stroke="#2a2f4a" stroke-width="1" stroke-dasharray="4,3"/><line x1="138" y1="14" x2="138" y2="138" stroke="#2a2f4a" stroke-width="1" stroke-dasharray="4,3"/><line x1="206" y1="14" x2="206" y2="138" stroke="#2a2f4a" stroke-width="1" stroke-dasharray="4,3"/><text x="46" y="12" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Fase 1</text><text x="104" y="12" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Fase 2</text><text x="172" y="12" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Fase 3</text><text x="237" y="12" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Fase 4</text></svg>`;

const SVG_SWOT = `<svg viewBox="0 0 280 182" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="182" fill="#161927" rx="8"/><text x="140" y="14" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">← Internt →</text><text x="140" y="104" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">← Eksternt →</text><rect x="8" y="18" width="120" height="74" rx="6" fill="#10b981" opacity="0.18"/><rect x="152" y="18" width="120" height="74" rx="6" fill="#e74c3c" opacity="0.18"/><rect x="8" y="106" width="120" height="72" rx="6" fill="#5c7cfa" opacity="0.18"/><rect x="152" y="106" width="120" height="72" rx="6" fill="#f59e0b" opacity="0.18"/><text x="68" y="72" fill="#10b981" font-size="11" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="600">Positivt / intern</text><text x="212" y="72" fill="#e74c3c" font-size="11" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="600">Negativt / intern</text><text x="68" y="148" fill="#5c7cfa" font-size="11" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="600">Positivt / ekstern</text><text x="212" y="148" fill="#f59e0b" font-size="11" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="600">Negativt / ekstern</text><text x="140" y="175" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">2×2-matrise – hva heter de fire feltene?</text></svg>`;

// ── Regnskapsanalyse (regnskap.js) ───────────────────────────────

const SVG_RESULTATGRAD = `<svg viewBox="0 0 280 100" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="100" fill="#161927" rx="8"/><text x="22" y="26" fill="#7b82a8" font-size="11" font-family="system-ui,sans-serif" font-weight="600">Resultatgrad =</text><rect x="150" y="10" width="90" height="24" fill="#1e2235" rx="4"/><text x="195" y="26" fill="#e8eaf6" font-size="10" text-anchor="middle" font-family="system-ui,sans-serif">Teller (A)</text><line x1="148" y1="36" x2="244" y2="36" stroke="#5c7cfa" stroke-width="2"/><rect x="150" y="40" width="90" height="24" fill="#1e2235" rx="4"/><text x="195" y="56" fill="#e8eaf6" font-size="10" text-anchor="middle" font-family="system-ui,sans-serif">Nevner (B)</text><text x="252" y="56" fill="#7b82a8" font-size="12" font-family="system-ui,sans-serif">× 100</text><text x="22" y="82" fill="#7b82a8" font-size="9" font-family="system-ui,sans-serif">Hvilke regnskapsstørrelser er A og B?</text></svg>`;

const SVG_LIKVIDITETSGRAD1 = `<svg viewBox="0 0 280 130" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="130" fill="#161927" rx="8"/><text x="140" y="18" fill="#7b82a8" font-size="10" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="600">Likviditetsgrad 1 = A ÷ B</text><rect x="20" y="28" width="86" height="72" fill="rgba(92,124,250,0.1)" rx="6" stroke="#5c7cfa" stroke-width="1.5"/><text x="63" y="70" fill="#5c7cfa" font-size="32" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700">A</text><text x="63" y="90" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Teller</text><text x="140" y="72" fill="#7b82a8" font-size="28" text-anchor="middle" font-family="system-ui,sans-serif">÷</text><rect x="174" y="50" width="86" height="50" fill="rgba(231,76,60,0.1)" rx="6" stroke="#e74c3c" stroke-width="1.5"/><text x="217" y="80" fill="#e74c3c" font-size="28" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700">B</text><text x="217" y="90" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Nevner</text><text x="140" y="118" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Hva er A og B? Hva er kravet for god likviditet?</text></svg>`;

const SVG_ARBEIDSKAPITAL = `<svg viewBox="0 0 280 90" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="90" fill="#161927" rx="8"/><text x="140" y="16" fill="#7b82a8" font-size="10" text-anchor="middle" font-family="system-ui,sans-serif">Arbeidskapital = ?</text><rect x="14" y="26" width="80" height="46" fill="rgba(92,124,250,0.12)" rx="6" stroke="#5c7cfa" stroke-width="1.5"/><text x="54" y="53" fill="#5c7cfa" font-size="14" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="600">Del A</text><text x="108" y="55" fill="#7b82a8" font-size="22" text-anchor="middle" font-family="system-ui,sans-serif">−</text><rect x="126" y="36" width="56" height="30" fill="rgba(231,76,60,0.12)" rx="6" stroke="#e74c3c" stroke-width="1.5"/><text x="154" y="55" fill="#e74c3c" font-size="14" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="600">Del B</text><text x="196" y="55" fill="#7b82a8" font-size="22" text-anchor="middle" font-family="system-ui,sans-serif">=</text><rect x="212" y="26" width="56" height="46" fill="rgba(16,185,129,0.12)" rx="6" stroke="#10b981" stroke-width="1.5"/><text x="240" y="50" fill="#10b981" font-size="10" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="600">Arbeids-kapital</text></svg>`;

const SVG_BALANSE = `<svg viewBox="0 0 280 172" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="172" fill="#161927" rx="8"/><line x1="140" y1="10" x2="140" y2="162" stroke="#2a2f4a" stroke-width="2"/><line x1="10" y1="36" x2="270" y2="36" stroke="#2a2f4a" stroke-width="2"/><text x="75" y="28" fill="#5c7cfa" font-size="11" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700">EIENDELER</text><text x="205" y="28" fill="#ec4899" font-size="11" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700">EK + GJELD</text><text x="18" y="54" fill="#7b82a8" font-size="10" font-family="system-ui,sans-serif" font-weight="600">Anleggsmidler:</text><text x="22" y="68" fill="#e8eaf6" font-size="9" font-family="system-ui,sans-serif">Biler, verktøy, maskiner</text><text x="22" y="80" fill="#e8eaf6" font-size="9" font-family="system-ui,sans-serif">Bygninger, datautstyr</text><text x="18" y="98" fill="#7b82a8" font-size="10" font-family="system-ui,sans-serif" font-weight="600">Omløpsmidler:</text><text x="22" y="112" fill="#e8eaf6" font-size="9" font-family="system-ui,sans-serif">Varelager, fordringer</text><text x="22" y="124" fill="#e8eaf6" font-size="9" font-family="system-ui,sans-serif">Bank og kontanter</text><text x="148" y="54" fill="#7b82a8" font-size="10" font-family="system-ui,sans-serif" font-weight="600">Egenkapital:</text><text x="152" y="68" fill="#e8eaf6" font-size="9" font-family="system-ui,sans-serif">Aksjekapital</text><text x="152" y="80" fill="#e8eaf6" font-size="9" font-family="system-ui,sans-serif">Opptjent overskudd</text><text x="148" y="98" fill="#7b82a8" font-size="10" font-family="system-ui,sans-serif" font-weight="600">Gjeld:</text><text x="152" y="112" fill="#e8eaf6" font-size="9" font-family="system-ui,sans-serif">Langsiktig (banklån)</text><text x="152" y="124" fill="#e8eaf6" font-size="9" font-family="system-ui,sans-serif">Kortsiktig (lev.gjeld)</text><line x1="10" y1="142" x2="130" y2="142" stroke="#2a2f4a" stroke-width="1"/><line x1="150" y1="142" x2="270" y2="142" stroke="#2a2f4a" stroke-width="1"/><text x="75" y="157" fill="#5c7cfa" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Sum eiendeler</text><text x="205" y="157" fill="#ec4899" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Sum EK + Gjeld</text></svg>`;

const SVG_AVSKRIVNING = `<svg viewBox="0 0 280 130" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="130" fill="#161927" rx="8"/><text x="140" y="16" fill="#7b82a8" font-size="10" text-anchor="middle" font-family="system-ui,sans-serif">Bokført verdi over tid</text><line x1="28" y1="22" x2="28" y2="106" stroke="#2a2f4a" stroke-width="1.5"/><line x1="28" y1="106" x2="268" y2="106" stroke="#2a2f4a" stroke-width="1.5"/><rect x="34" y="28" width="30" height="78" fill="#5c7cfa" rx="3" opacity="0.9"/><rect x="72" y="46" width="30" height="60" fill="#5c7cfa" rx="3" opacity="0.75"/><rect x="110" y="59" width="30" height="47" fill="#5c7cfa" rx="3" opacity="0.65"/><rect x="148" y="70" width="30" height="36" fill="#5c7cfa" rx="3" opacity="0.5"/><rect x="186" y="79" width="30" height="27" fill="#5c7cfa" rx="3" opacity="0.4"/><rect x="224" y="86" width="30" height="20" fill="#5c7cfa" rx="3" opacity="0.3"/><text x="49" y="118" fill="#7b82a8" font-size="8" text-anchor="middle" font-family="system-ui,sans-serif">År 1</text><text x="87" y="118" fill="#7b82a8" font-size="8" text-anchor="middle" font-family="system-ui,sans-serif">År 2</text><text x="125" y="118" fill="#7b82a8" font-size="8" text-anchor="middle" font-family="system-ui,sans-serif">År 3</text><text x="163" y="118" fill="#7b82a8" font-size="8" text-anchor="middle" font-family="system-ui,sans-serif">År 4</text><text x="201" y="118" fill="#7b82a8" font-size="8" text-anchor="middle" font-family="system-ui,sans-serif">År 5</text><text x="239" y="118" fill="#7b82a8" font-size="8" text-anchor="middle" font-family="system-ui,sans-serif">År 6</text></svg>`;

const SVG_DUPONT_BEREGNING = `<svg viewBox="0 0 280 80" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="80" fill="#161927" rx="8"/><text x="140" y="16" fill="#7b82a8" font-size="10" text-anchor="middle" font-family="system-ui,sans-serif">DuPont: TKR = Resultatgrad × Omløpshastighet</text><rect x="14" y="26" width="76" height="32" fill="#1e2235" rx="6" stroke="#10b981" stroke-width="1"/><text x="52" y="47" fill="#10b981" font-size="16" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700">7,25 %</text><text x="104" y="47" fill="#7b82a8" font-size="22" text-anchor="middle" font-family="system-ui,sans-serif">×</text><rect x="118" y="26" width="52" height="32" fill="#1e2235" rx="6" stroke="#10b981" stroke-width="1"/><text x="144" y="47" fill="#10b981" font-size="16" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700">2,0</text><text x="186" y="47" fill="#7b82a8" font-size="22" text-anchor="middle" font-family="system-ui,sans-serif">=</text><rect x="202" y="24" width="64" height="36" fill="rgba(92,124,250,0.15)" rx="6" stroke="#5c7cfa" stroke-width="1.5"/><text x="234" y="47" fill="#5c7cfa" font-size="22" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700">?</text><text x="140" y="72" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Hva er TKR?</text></svg>`;

// ── Økonomistyring (okonomi.js) ───────────────────────────────────

const SVG_NULLPUNKT = `<svg viewBox="0 0 280 172" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="172" fill="#161927" rx="8"/><line x1="28" y1="12" x2="28" y2="148" stroke="#2a2f4a" stroke-width="1.5"/><line x1="28" y1="148" x2="268" y2="148" stroke="#2a2f4a" stroke-width="1.5"/><text x="148" y="163" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Omsetning / volum</text><line x1="28" y1="106" x2="268" y2="106" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6,3"/><line x1="28" y1="106" x2="268" y2="56" stroke="#e74c3c" stroke-width="2"/><line x1="28" y1="148" x2="268" y2="28" stroke="#10b981" stroke-width="2"/><circle cx="168" cy="84" r="5" fill="white" stroke="#5c7cfa" stroke-width="2.5"/><line x1="168" y1="84" x2="168" y2="148" stroke="#5c7cfa" stroke-width="1.5" stroke-dasharray="4,3"/><text x="244" y="104" fill="#f59e0b" font-size="9" font-family="system-ui,sans-serif">FK</text><text x="244" y="50" fill="#e74c3c" font-size="9" font-family="system-ui,sans-serif">TK</text><text x="244" y="24" fill="#10b981" font-size="9" font-family="system-ui,sans-serif">Inntekt</text><text x="168" y="160" fill="#5c7cfa" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Nullpunkt</text><text x="90" y="136" fill="#e74c3c" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">TAP</text><text x="220" y="136" fill="#10b981" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">OVERSKUDD</text></svg>`;

const SVG_VARIABLE_KOSTNADER = `<svg viewBox="0 0 280 140" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="140" fill="#161927" rx="8"/><text x="140" y="14" fill="#7b82a8" font-size="10" text-anchor="middle" font-family="system-ui,sans-serif">Kostnad i forhold til produksjonsmengde</text><line x1="30" y1="18" x2="30" y2="116" stroke="#2a2f4a" stroke-width="1.5"/><line x1="30" y1="116" x2="265" y2="116" stroke="#2a2f4a" stroke-width="1.5"/><text x="9" y="72" fill="#7b82a8" font-size="8" text-anchor="middle" font-family="system-ui,sans-serif" transform="rotate(-90 9 72)">Kostnad (kr)</text><text x="148" y="130" fill="#7b82a8" font-size="8" text-anchor="middle" font-family="system-ui,sans-serif">Produksjonsmengde →</text><line x1="30" y1="116" x2="255" y2="22" stroke="#10b981" stroke-width="2.5"/><text x="220" y="18" fill="#10b981" font-size="9" font-family="system-ui,sans-serif" font-weight="600">Kostnadslinje</text></svg>`;

const SVG_FASTE_KOSTNADER = `<svg viewBox="0 0 280 140" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="140" fill="#161927" rx="8"/><text x="140" y="14" fill="#7b82a8" font-size="10" text-anchor="middle" font-family="system-ui,sans-serif">Kostnad i forhold til produksjonsmengde</text><line x1="30" y1="18" x2="30" y2="116" stroke="#2a2f4a" stroke-width="1.5"/><line x1="30" y1="116" x2="265" y2="116" stroke="#2a2f4a" stroke-width="1.5"/><text x="9" y="72" fill="#7b82a8" font-size="8" text-anchor="middle" font-family="system-ui,sans-serif" transform="rotate(-90 9 72)">Kostnad (kr)</text><text x="148" y="130" fill="#7b82a8" font-size="8" text-anchor="middle" font-family="system-ui,sans-serif">Produksjonsmengde →</text><line x1="30" y1="60" x2="255" y2="60" stroke="#5c7cfa" stroke-width="2.5"/><text x="218" y="54" fill="#5c7cfa" font-size="9" font-family="system-ui,sans-serif" font-weight="600">Kostnadslinje</text></svg>`;

const SVG_NAVERDIMETODEN = `<svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="120" fill="#161927" rx="8"/><text x="140" y="14" fill="#7b82a8" font-size="10" text-anchor="middle" font-family="system-ui,sans-serif">Fremtidige kontantstrømmer diskonteres til i dag</text><line x1="24" y1="50" x2="264" y2="50" stroke="#2a2f4a" stroke-width="1.5"/><circle cx="24" cy="50" r="5" fill="#e74c3c"/><text x="24" y="68" fill="#e74c3c" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">−I₀</text><text x="24" y="80" fill="#7b82a8" font-size="8" text-anchor="middle" font-family="system-ui,sans-serif">År 0</text><circle cx="100" cy="50" r="5" fill="#10b981"/><text x="100" y="36" fill="#10b981" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">+C₁</text><text x="100" y="68" fill="#7b82a8" font-size="8" text-anchor="middle" font-family="system-ui,sans-serif">År 1</text><circle cx="176" cy="50" r="5" fill="#10b981"/><text x="176" y="36" fill="#10b981" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">+C₂</text><text x="176" y="68" fill="#7b82a8" font-size="8" text-anchor="middle" font-family="system-ui,sans-serif">År 2</text><circle cx="252" cy="50" r="5" fill="#10b981"/><text x="252" y="36" fill="#10b981" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">+C₃</text><text x="252" y="68" fill="#7b82a8" font-size="8" text-anchor="middle" font-family="system-ui,sans-serif">År 3</text><path d="M 96 54 Q 60 96 28 54" stroke="#5c7cfa" stroke-width="1.5" fill="none" stroke-dasharray="4,2"/><path d="M 172 54 Q 98 102 28 54" stroke="#5c7cfa" stroke-width="1.5" fill="none" stroke-dasharray="4,2"/><path d="M 248 54 Q 136 108 28 54" stroke="#5c7cfa" stroke-width="1.5" fill="none" stroke-dasharray="4,2"/><text x="140" y="110" fill="#5c7cfa" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">← hva skjer med disse pilene?</text></svg>`;

const SVG_DUPONT_MODELL = `<svg viewBox="0 0 280 90" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="90" fill="#161927" rx="8"/><text x="140" y="16" fill="#7b82a8" font-size="10" text-anchor="middle" font-family="system-ui,sans-serif">Totalkapitalrentabilitet (TKR) kan splittes</text><rect x="14" y="26" width="94" height="34" fill="#1e2235" rx="6" stroke="#5c7cfa" stroke-width="1"/><text x="61" y="47" fill="#7b82a8" font-size="11" text-anchor="middle" font-family="system-ui,sans-serif">Faktor 1 = ?</text><text x="120" y="49" fill="#7b82a8" font-size="22" text-anchor="middle" font-family="system-ui,sans-serif">×</text><rect x="136" y="26" width="94" height="34" fill="#1e2235" rx="6" stroke="#5c7cfa" stroke-width="1"/><text x="183" y="47" fill="#7b82a8" font-size="11" text-anchor="middle" font-family="system-ui,sans-serif">Faktor 2 = ?</text><text x="242" y="49" fill="#7b82a8" font-size="22" text-anchor="middle" font-family="system-ui,sans-serif">=</text><text x="265" y="49" fill="#5c7cfa" font-size="11" font-family="system-ui,sans-serif" font-weight="700">TKR</text><text x="140" y="78" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Hva er faktor 1 og faktor 2?</text></svg>`;

const SVG_ABC_ANALYSE = `<svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="150" fill="#161927" rx="8"/><text x="140" y="14" fill="#7b82a8" font-size="10" text-anchor="middle" font-family="system-ui,sans-serif">Lagervarer sortert etter verdi</text><line x1="28" y1="20" x2="28" y2="118" stroke="#2a2f4a" stroke-width="1.5"/><line x1="28" y1="118" x2="268" y2="118" stroke="#2a2f4a" stroke-width="1.5"/><text x="9" y="72" fill="#7b82a8" font-size="8" text-anchor="middle" font-family="system-ui,sans-serif" transform="rotate(-90 9 72)">Verdi</text><rect x="34" y="28" width="36" height="90" fill="#5c7cfa" rx="3" opacity="0.9"/><rect x="76" y="40" width="36" height="78" fill="#5c7cfa" rx="3" opacity="0.7"/><rect x="118" y="72" width="22" height="46" fill="#f59e0b" rx="3" opacity="0.85"/><rect x="144" y="76" width="22" height="42" fill="#f59e0b" rx="3" opacity="0.7"/><rect x="170" y="86" width="14" height="32" fill="#10b981" rx="3" opacity="0.7"/><rect x="188" y="90" width="14" height="28" fill="#10b981" rx="3" opacity="0.6"/><rect x="206" y="94" width="14" height="24" fill="#10b981" rx="3" opacity="0.5"/><rect x="224" y="98" width="14" height="20" fill="#10b981" rx="3" opacity="0.4"/><rect x="242" y="102" width="14" height="16" fill="#10b981" rx="3" opacity="0.35"/><text x="52" y="132" fill="#5c7cfa" font-size="13" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700">A</text><text x="130" y="132" fill="#f59e0b" font-size="13" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700">B</text><text x="210" y="132" fill="#10b981" font-size="13" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700">C</text><text x="52" y="144" fill="#7b82a8" font-size="8" text-anchor="middle" font-family="system-ui,sans-serif">få varer</text><text x="130" y="144" fill="#7b82a8" font-size="8" text-anchor="middle" font-family="system-ui,sans-serif">medium</text><text x="210" y="144" fill="#7b82a8" font-size="8" text-anchor="middle" font-family="system-ui,sans-serif">mange varer</text></svg>`;

// ── Boolsk algebra (boolsk.js) ────────────────────────────────────

const SVG_DE_MORGAN_NAND = `<svg viewBox="0 0 280 90" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="90" fill="#161927" rx="8"/><text x="140" y="16" fill="#7b82a8" font-size="10" text-anchor="middle" font-family="system-ui,sans-serif">De Morgans lover — to ekvivalente former</text><rect x="14" y="26" width="110" height="34" fill="#1e2235" rx="6" stroke="#5c7cfa" stroke-width="1.5"/><text x="69" y="47" fill="#5c7cfa" font-size="13" text-anchor="middle" font-family="monospace"><tspan text-decoration="overline">A·B</tspan> = ?</text><text x="136" y="47" fill="#7b82a8" font-size="20" text-anchor="middle">→</text><rect x="156" y="26" width="110" height="34" fill="#1e2235" rx="6" stroke="#7b82a8" stroke-width="1" stroke-dasharray="4,3"/><text x="211" y="47" fill="#7b82a8" font-size="13" text-anchor="middle" font-family="monospace">?</text><text x="140" y="78" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Hvilken av alternativene fyller inn i høyre boks?</text></svg>`;

const SVG_BOOLSK_EVAL_AND_OR = `<svg viewBox="0 0 280 80" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="80" fill="#161927" rx="8"/><text x="140" y="15" fill="#7b82a8" font-size="10" text-anchor="middle" font-family="system-ui,sans-serif">Husk: AND evalueres før OR</text><rect x="40" y="24" width="200" height="46" fill="#1e2235" rx="6" stroke="#5c7cfa" stroke-width="1.5"/><text x="140" y="40" fill="#5c7cfa" font-size="12" text-anchor="middle" font-family="monospace">A=1, B=0, C=1</text><text x="140" y="60" fill="#e8eaf6" font-size="12" text-anchor="middle" font-family="monospace">F = A·B + C = ?</text></svg>`;

const SVG_BOOLSK_XOR = `<svg viewBox="0 0 280 80" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="80" fill="#161927" rx="8"/><text x="140" y="15" fill="#7b82a8" font-size="10" text-anchor="middle" font-family="system-ui,sans-serif">Dette er XOR-uttrykket — evaluer for A=1, B=0</text><rect x="40" y="24" width="200" height="46" fill="#1e2235" rx="6" stroke="#5c7cfa" stroke-width="1.5"/><text x="140" y="40" fill="#5c7cfa" font-size="12" text-anchor="middle" font-family="monospace">A=1, B=0</text><text x="140" y="60" fill="#e8eaf6" font-size="12" text-anchor="middle" font-family="monospace"><tspan text-decoration="overline">A</tspan>·B + A·<tspan text-decoration="overline">B</tspan> = ?</text></svg>`;

// ── Logiske porter (porter.js) — sannhetstabellgenerator ──────────

function tt2(f00, f01, f10, f11) {
  const col = v => v === '1' ? '#2ecc71' : '#e74c3c';
  return `<svg viewBox="0 0 280 138" xmlns="http://www.w3.org/2000/svg">
    <rect width="280" height="138" fill="#161927" rx="8"/>
    <text x="140" y="16" fill="#7b82a8" font-size="10" text-anchor="middle" font-family="system-ui,sans-serif">Sannhetstabell for ukjent port</text>
    <line x1="20" y1="43" x2="260" y2="43" stroke="#2a2f4a" stroke-width="1"/>
    <line x1="103" y1="22" x2="103" y2="130" stroke="#2a2f4a" stroke-width="1"/>
    <line x1="177" y1="22" x2="177" y2="130" stroke="#2a2f4a" stroke-width="1"/>
    <text x="61"  y="37" fill="#5c7cfa" font-size="13" text-anchor="middle" font-family="monospace" font-weight="700">A</text>
    <text x="140" y="37" fill="#5c7cfa" font-size="13" text-anchor="middle" font-family="monospace" font-weight="700">B</text>
    <text x="219" y="37" fill="#5c7cfa" font-size="13" text-anchor="middle" font-family="monospace" font-weight="700">F</text>
    <text x="61"  y="60"  fill="#e8eaf6" font-size="13" text-anchor="middle" font-family="monospace">0</text>
    <text x="140" y="60"  fill="#e8eaf6" font-size="13" text-anchor="middle" font-family="monospace">0</text>
    <text x="219" y="60"  fill="${col(f00)}" font-size="14" text-anchor="middle" font-family="monospace" font-weight="700">${f00}</text>
    <text x="61"  y="82"  fill="#e8eaf6" font-size="13" text-anchor="middle" font-family="monospace">0</text>
    <text x="140" y="82"  fill="#e8eaf6" font-size="13" text-anchor="middle" font-family="monospace">1</text>
    <text x="219" y="82"  fill="${col(f01)}" font-size="14" text-anchor="middle" font-family="monospace" font-weight="700">${f01}</text>
    <text x="61"  y="104" fill="#e8eaf6" font-size="13" text-anchor="middle" font-family="monospace">1</text>
    <text x="140" y="104" fill="#e8eaf6" font-size="13" text-anchor="middle" font-family="monospace">0</text>
    <text x="219" y="104" fill="${col(f10)}" font-size="14" text-anchor="middle" font-family="monospace" font-weight="700">${f10}</text>
    <text x="61"  y="126" fill="#e8eaf6" font-size="13" text-anchor="middle" font-family="monospace">1</text>
    <text x="140" y="126" fill="#e8eaf6" font-size="13" text-anchor="middle" font-family="monospace">1</text>
    <text x="219" y="126" fill="${col(f11)}" font-size="14" text-anchor="middle" font-family="monospace" font-weight="700">${f11}</text>
  </svg>`;
}

const SVG_TT_AND  = tt2('0','0','0','1');
const SVG_TT_OR   = tt2('0','1','1','1');
const SVG_TT_NAND = tt2('1','1','1','0');
const SVG_TT_NOR  = tt2('1','0','0','0');
const SVG_TT_XOR  = tt2('0','1','1','0');
const SVG_TT_XNOR = tt2('1','0','0','1');

// ── TRH-1EK Elektroniske systemer (trh1ek.js) ────────────────────

const SVG_SR_NOR_KRETS = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" style="display:block;margin:0 auto 8px;max-width:320px;background:#1a1a2e;border-radius:8px;padding:8px;">
  <style>text{font:13px monospace;fill:#e2e8f0;} .lbl{font:12px monospace;fill:#a0aec0;} .wire{stroke:#63b3ed;stroke-width:1.8;fill:none;} .gate{stroke:#63b3ed;stroke-width:1.8;fill:#16213e;}</style>
  <!-- NOR gate 1 (top) body -->
  <path class="gate" d="M80,30 Q95,30 105,50 Q115,70 105,70 Q95,70 80,70 Q90,50 80,30Z"/>
  <path class="gate" d="M80,30 Q70,50 80,70" fill="none"/>
  <!-- NOR bubble top -->
  <circle cx="116" cy="50" r="4" class="gate"/>
  <!-- NOR gate 2 (bottom) body -->
  <path class="gate" d="M80,130 Q95,130 105,150 Q115,170 105,170 Q95,170 80,170 Q90,150 80,130Z"/>
  <path class="gate" d="M80,130 Q70,150 80,170" fill="none"/>
  <!-- NOR bubble bottom -->
  <circle cx="116" cy="150" r="4" class="gate"/>
  <!-- S input -->
  <line class="wire" x1="30" y1="40" x2="83" y2="40"/>
  <text x="10" y="44" class="lbl">S</text>
  <!-- R input -->
  <line class="wire" x1="30" y1="160" x2="83" y2="160"/>
  <text x="10" y="164" class="lbl">R</text>
  <!-- Q output line from top gate -->
  <line class="wire" x1="120" y1="50" x2="200" y2="50"/>
  <text x="206" y="54">Q</text>
  <!-- Q-bar output line from bottom gate -->
  <line class="wire" x1="120" y1="150" x2="200" y2="150"/>
  <text x="206" y="154">Q̄</text>
  <!-- Feedback: Q → second input of bottom NOR -->
  <line class="wire" x1="180" y1="50" x2="180" y2="100"/>
  <line class="wire" x1="180" y1="100" x2="60" y2="100"/>
  <line class="wire" x1="60" y1="100" x2="60" y2="160"/>
  <line class="wire" x1="60" y1="160" x2="83" y2="160"/>
  <!-- Feedback: Q-bar → second input of top NOR -->
  <line class="wire" x1="160" y1="150" x2="160" y2="110"/>
  <line class="wire" x1="160" y1="110" x2="50" y2="110"/>
  <line class="wire" x1="50" y1="110" x2="50" y2="60"/>
  <line class="wire" x1="50" y1="60" x2="83" y2="60"/>
  <!-- Dots at junctions -->
  <circle cx="180" cy="50" r="3" fill="#63b3ed"/>
  <circle cx="160" cy="150" r="3" fill="#63b3ed"/>
  <!-- Labels -->
  <text x="82" y="16" style="font:11px monospace;fill:#f6ad55;">SR-krets (NOR)</text>
</svg>`;

const SVG_D_NAND_KRETS = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 395 210" style="display:block;margin:0 auto 8px;max-width:395px;background:#1a1a2e;border-radius:8px;padding:8px;">
<style>.w{stroke:#63b3ed;stroke-width:1.8;fill:none;} .g{stroke:#63b3ed;stroke-width:1.8;fill:#16213e;} .lbl{font:12px monospace;fill:#a0aec0;} .out{font:bold 14px monospace;fill:#e2e8f0;} .dot{fill:#63b3ed;}</style>
<!-- D input -->
<text class="lbl" x="3" y="97">D</text>
<line class="w" x1="8" y1="100" x2="22" y2="100"/>
<!-- Inverter: triangle + bubble -->
<polygon class="g" points="22,88 22,112 50,100"/>
<circle class="g" cx="55" cy="100" r="5"/>
<!-- D̄ wire: inverter output → up → NAND1 top input (y=72) -->
<line class="w" x1="60" y1="100" x2="72" y2="100"/>
<line class="w" x1="72" y1="72" x2="72" y2="100"/>
<line class="w" x1="72" y1="72" x2="85" y2="72"/>
<!-- D branch: junction on D wire → down → NAND2 top input (y=138) -->
<line class="w" x1="18" y1="100" x2="18" y2="138"/>
<line class="w" x1="18" y1="138" x2="85" y2="138"/>
<circle class="dot" cx="18" cy="100" r="3"/>
<!-- CLK input -->
<text class="lbl" x="3" y="196">CLK</text>
<line class="w" x1="8" y1="180" x2="77" y2="180"/>
<!-- CLK vertical: up to NAND1 bottom (y=92), junction branch to NAND2 bottom (y=158) -->
<line class="w" x1="77" y1="92" x2="77" y2="180"/>
<line class="w" x1="77" y1="92" x2="85" y2="92"/>
<line class="w" x1="77" y1="158" x2="85" y2="158"/>
<circle class="dot" cx="77" cy="158" r="3"/>
<!-- NAND1: D̄+CLK → S̄ (inputs: top y=72, bottom y=92; center y=82) -->
<path class="g" d="M85,62 L85,102 Q130,102 130,82 Q130,62 85,62Z"/>
<circle class="g" cx="134" cy="82" r="4.5"/>
<!-- NAND2: D+CLK → R̄ (inputs: top y=138, bottom y=158; center y=148) -->
<path class="g" d="M85,128 L85,168 Q130,168 130,148 Q130,128 85,128Z"/>
<circle class="g" cx="134" cy="148" r="4.5"/>
<!-- S̄ wire: NAND1 out → jog up → NAND3 top input (y=68) -->
<line class="w" x1="138" y1="82" x2="178" y2="82"/>
<line class="w" x1="178" y1="68" x2="178" y2="82"/>
<line class="w" x1="178" y1="68" x2="203" y2="68"/>
<!-- R̄ wire: NAND2 out → jog down → NAND4 bottom input (y=158) -->
<line class="w" x1="138" y1="148" x2="178" y2="148"/>
<line class="w" x1="178" y1="148" x2="178" y2="158"/>
<line class="w" x1="178" y1="158" x2="203" y2="158"/>
<!-- NAND3: S̄+Q̄_fb → Q (inputs: top y=68, bottom y=88; center y=78) -->
<path class="g" d="M203,58 L203,98 Q248,98 248,78 Q248,58 203,58Z"/>
<circle class="g" cx="252" cy="78" r="4.5"/>
<!-- NAND4: Q_fb+R̄ → Q̄ (inputs: top y=138, bottom y=158; center y=148) -->
<path class="g" d="M203,128 L203,168 Q248,168 248,148 Q248,128 203,128Z"/>
<circle class="g" cx="252" cy="148" r="4.5"/>
<!-- Q output -->
<line class="w" x1="256" y1="78" x2="362" y2="78"/>
<text class="out" x="366" y="83">Q</text>
<!-- Q̄ output -->
<line class="w" x1="256" y1="148" x2="362" y2="148"/>
<text class="out" x="366" y="153">Q̄</text>
<!-- Feedback Q → NAND4 top input (y=138): loop above -->
<line class="w" x1="325" y1="78" x2="325" y2="35"/>
<line class="w" x1="325" y1="35" x2="198" y2="35"/>
<line class="w" x1="198" y1="35" x2="198" y2="138"/>
<line class="w" x1="198" y1="138" x2="203" y2="138"/>
<circle class="dot" cx="325" cy="78" r="3"/>
<!-- Feedback Q̄ → NAND3 bottom input (y=88): loop below -->
<line class="w" x1="313" y1="148" x2="313" y2="192"/>
<line class="w" x1="313" y1="192" x2="188" y2="192"/>
<line class="w" x1="188" y1="192" x2="188" y2="88"/>
<line class="w" x1="188" y1="88" x2="203" y2="88"/>
<circle class="dot" cx="313" cy="148" r="3"/>
</svg>`;
