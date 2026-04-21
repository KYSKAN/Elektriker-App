# CLAUDE.md — Prosjektoversikt

## Hva er dette?
PWA og nettside for elektrikere. Fagkalkulatorer og quiz. Fungerer som installerbar PWA på Android og iOS, og som nettside i alle nettlesere på mobil og PC. Hostet på GitHub Pages — automatisk deploy ved `git push`. URL: https://kyskan.github.io/Elektriker-App

## Filstruktur
```
AppTilTelefon/
├── index.html             HTML-skjelett — laster CSS og JS, ingen logikk her
├── manifest.json          PWA-konfig: navn, ikon, farger, display-modus
├── service-worker.js      Offline-caching — HUSK: bump CACHE-versjon ved hver deploy
├── CLAUDE.md              Denne filen — alltid i kontekst
├── DEVELOPMENT.md         Utviklingsplan, backlog og roadmap
├── css/
│   └── style.css          All styling, seksjoner kommentert med /* ── Navn ── */
├── js/
│   ├── menu.js            Dropdown-navigasjon, switchTo(), toggle-init (delt)
│   ├── calc-ohm.js        Ohms lov: V/A/Ω/W — fyll inn 2, beregn 2
│   ├── kabel-data.js      Tabeller og konstanter for kabel og vern (IEC 60364-5-52)
│   ├── calc-kabel.js      Kabel og vern: NEK 400, IT/TN, logikk og utregning
│   └── calc-krets.js      RC/RL/RLC: impedans, effekter, fasevinkel
├── icons/
│   └── icon.svg           App-ikon (kalkulator-illustrasjon, mørk bakgrunn)
└── quiz/
    ├── index.html          Quiz-velger — kort per tema, lenker til spill.html?tema=X
    ├── spill.html          Quiz-spill — laster sporsmal-${tema}.js dynamisk fra URL-param
    ├── sporsmal-lom.js     Spørsmål: LØM fagskole (ledelse, marked, regnskap, økonomi)
    ├── sporsmal-rlc.js     Spørsmål: RC/RL/RLC kretser
    └── QUIZ-FORMAT.md      Format og instruksjoner for quiz-data
```

## Kalkulatorer
| Meny-ID | JS-fil          | View-ID     | Funksjon                               |
|---------|-----------------|-------------|----------------------------------------|
| ohm     | calc-ohm.js     | viewOhm     | Ohms lov med multiplikator             |
| kabel   | calc-kabel.js   | viewKabel   | Kabeldimensjonering etter NEK 400      |
| krets   | calc-krets.js   | viewKrets   | RC/RL/RLC: P, Q, S, cos φ, Z, I, φ    |

## Quiz (quiz/)
Separat app på `quiz/index.html`. Lenkes fra hoved-appen via menyen.
- `index.html` viser temavelger — ett kort per quiz-tema
- `spill.html` er selve quiz-motoren — laster spørsmålsfil dynamisk basert på `?tema=X`
- Legg til nytt tema: opprett `sporsmal-X.js` + legg til kort i `index.html`
- Se `quiz/QUIZ-FORMAT.md` for spørsmålsformat og steg-for-steg instruksjoner

## Viktige regler
- **Service worker:** Bump `CACHE` (v18 → v19 osv.) i `service-worker.js` ved HVER deploy — ellers ser ikke telefonen endringene
- **Deploy:** `git add . && git commit -m "..." && git push` — GitHub Pages deployer automatisk
- **Platform:** PWA på Android og iOS, nettside i alle nettlesere på mobil og PC.
- **Stil:** Mørkt tema — bakgrunn `#1a1a2e`, kort `#16213e`, aksentblå `#63b3ed`
- **Knapper:** Aktive toggle/beregn-knapper bruker gradient `#3b82f6 → #6366f1`

## Slik legger du til en ny kalkulator
1. Opprett `js/calc-ny.js` med logikk og `calcNyClear()`
2. Legg til HTML-view i `index.html` med `id="viewNy"`
3. I `js/menu.js`: legg til i `views`, `labels`, `menuIdx`
4. I `index.html`: legg til `<div class="dropdown-item">` og `<script src="js/calc-ny.js">`
5. I `service-worker.js`: legg til `'./js/calc-ny.js'` i `FILES` og bump `CACHE`

## kabel-data.js — tabeller og konstanter
- `izCuPVC` / `izCuPEX`: strømkapasitetstabeller kobber (IEC 60364-5-52), metoder A1–E
- `izAlPVC` / `izAlPEX`: strømkapasitetstabeller aluminium, min. 16 mm²
- `tCorrPVC` / `tCorrPEX`: temperaturkorreksjon luft, ref. 30°C (tab. B.52.14)
- `tCorrGroundPVC` / `tCorrGroundPEX`: temperaturkorreksjon jord, ref. 20°C (tab. B.52.15)
- `rhoMap`: resistivitet (Ω·mm²/m) ved driftstemperatur
- `crossSections`, `breakerSizes`: tilgjengelige tverrsnitt og vernstørrelser

## calc-kabel.js — nøkkelpunkter
- Bruker tabeller fra `kabel-data.js` (lastes før i index.html)
- `updateTempForInstall()`: setter automatisk 20°C ved D1/D2, 30°C ellers
- IT 230V vs TN 400V styrer `U_I` (lasstrøm) og `U_ref` (spenningsfallreferanse)
- NEK 400-5-52: maks 4% spenningsfall (bolig), 5% (industri)
- NEK 400-43: vernkrav `Ib ≤ In ≤ Iz`
- Aluminium: egne `izAlPVC` / `izAlPEX`-tabeller fra IEC 60364-5-52 (B.52.2/B.52.3), min. 16 mm²
- Jordforlegning (D1/D2): `tCorrGroundPVC` / `tCorrGroundPEX` med ref. 20°C (tab. B.52.15)
- Luftforlegning (A1–C, E): `tCorrPVC` / `tCorrPEX` med ref. 30°C (tab. B.52.14)

## calc-krets.js — nøkkelpunkter
- Støtter RC, RL, RLC — C-felt skjules for RL, L-felt for RC
- `updateKretsInputs()` kjøres etter toggle-handler via egen DOMContentLoaded-lytter
- Resonansfrekvens f₀ vises kun for RLC
- `getToggle()` er definert i calc-kabel.js og tilgjengelig globalt
