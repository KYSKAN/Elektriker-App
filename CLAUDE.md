# CLAUDE.md — Prosjektoversikt

## Hva er dette?
Personlig PWA-app for Android (Chrome). Starter som kalkulator, bygges ut til avansert elektriker-verktøy. Hostet på Netlify via drag-and-drop.

## Filstruktur
```
AppTilTelefon/
├── index.html             HTML-skjelett — laster CSS og JS, ingen logikk her
├── manifest.json          PWA-konfig: navn, ikon, farger, display-modus
├── service-worker.js      Offline-caching — HUSK: bump CACHE-versjon ved hver deploy
├── CLAUDE.md              Denne filen — alltid i kontekst
├── DEVELOPMENT.md         Utviklingsplan og roadmap
├── css/
│   └── style.css          All styling, seksjoner kommentert med /* ── Navn ── */
├── js/
│   ├── menu.js            Dropdown-navigasjon, switchTo(), toggle-init (delt)
│   ├── calc-standard.js   Vanlig kalkulator: digit, operator, equals
│   ├── calc-ohm.js        Ohms lov: V/A/Ω/W — fyll inn 2, beregn 2
│   └── calc-kabel.js      Kabel og vern: NEK 400, IT/TN, tabeller, utregning
└── icons/
    └── icon.svg           App-ikon (kalkulator-illustrasjon, mørk bakgrunn)
```

## Kalkulatorer
| Meny-ID | JS-fil           | View-ID     | Funksjon                              |
|---------|------------------|-------------|---------------------------------------|
| calc    | calc-standard.js | viewCalc    | Grunnleggende regneoperasjoner        |
| ohm     | calc-ohm.js      | viewOhm     | Ohms lov med multiplikator            |
| kabel   | calc-kabel.js    | viewKabel   | Kabeldimensjonering etter NEK 400     |

## Viktige regler
- **Service worker:** Bump `CACHE` (v7 → v8 osv.) i `service-worker.js` ved HVER deploy — ellers ser ikke telefonen endringene
- **Netlify:** Drag-and-drop hele mappen. 300 credits/mnd, resetter månedlig.
- **Platform:** Android-only, Chrome PWA. Ingen iOS/Safari-støtte nødvendig.
- **Stil:** Mørkt tema, fargepalett: bakgrunn `#1a1a2e`, kort `#16213e`, aksentblå `#63b3ed`, grønn `#38a169`, rød `#e94560`

## Slik legger du til en ny kalkulator
1. Opprett `js/calc-ny.js` med logikk og `calcNyClear()`
2. Legg til HTML-view i `index.html` med `id="viewNy"`
3. I `js/menu.js`: legg til i `views`, `labels`, `menuIdx`
4. I `index.html`: legg til `<div class="dropdown-item">` og `<script src="js/calc-ny.js">`
5. I `service-worker.js`: legg til `'./js/calc-ny.js'` i `FILES` og bump `CACHE`

## calc-kabel.js — nøkkelpunkter
- `izCuPVC` / `izCuPEX`: strømkapasitetstabeller (IEC 60364-5-52)
- `tCorrPVC` / `tCorrPEX`: temperaturkorreksjon, referanse 30°C
- `rhoMap`: resistivitet (Ω·mm²/m) ved driftstemperatur
- IT 230V vs TN 400V styrer `U_I` (lasstrøm) og `U_ref` (spenningsfallreferanse)
- NEK 400-5-52: maks 4% spenningsfall (bolig), 5% (industri)
- NEK 400-43: vernkrav `Ib ≤ In ≤ Iz`
