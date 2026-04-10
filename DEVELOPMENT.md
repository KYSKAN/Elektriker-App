# AppTilTelefon — Utviklingsdokument

## Formål
Personlig PWA-app til eget bruk på Android. Startet som enkel kalkulator, bygges ut til **avansert kalkulator for elektrikere**.

## Nåværende status
PWA er oppe og kjører på telefon via Netlify. Tre kalkulatorer er implementert:
- **Vanlig kalkulator** — `+`, `-`, `×`, `÷`, `%`, `+/-`
- **Ohms lov** — V, A, Ω, W. Fyll inn 2, beregn 2. Støtter multiplikator.
- **Kabel og vern** — Kabeldimensjonering og vernvalg etter NEK 400

---

## Teknologi
| Hva | Valg |
|---|---|
| Markup | HTML5 |
| Logikk | Vanilla JavaScript (splittet per kalkulator) |
| Styling | CSS (`css/style.css`) |
| Distribusjonsformat | PWA — Android / Chrome |
| Hosting | Netlify (drag-and-drop, 300 credits/mnd) |
| Versjonskontroll | Ingen ennå — se forbedringer under |

---

## Filstruktur
```
AppTilTelefon/
├── index.html
├── manifest.json
├── service-worker.js
├── CLAUDE.md
├── DEVELOPMENT.md
├── css/
│   └── style.css
├── js/
│   ├── menu.js
│   ├── calc-standard.js
│   ├── calc-ohm.js
│   └── calc-kabel.js
└── icons/
    └── icon.svg
```

---

## Forbedringer — backlog

### Høy prioritet
- [ ] **Git + GitHub + koble til Netlify**
  - Gir versionshistorikk og mulighet til å rulle tilbake ved feil
  - Automatisk deploy ved `git push` — bruker ikke Netlify credits
  - Backup av kode (nå ligger alt kun lokalt)

- [ ] **Input-validering i kabel-kalkulatoren**
  - Negativ kabellengde, 0 kW, ekstremt høye verdier gir i dag rare resultater
  - Legg til sjekk og brukervennlig feilmelding

### Lav prioritet
- [ ] **Scroll reset ved kalkulator-bytte**
  - Siden scroller ikke tilbake til toppen når man bytter kalkulator i menyen

---

## Planlagte kalkulatorer (Fase 2 — Elektriker)

- **Cos φ / effektfaktor** — aktiv, reaktiv og tilsynelatende effekt
- **3-fase beregninger** — U_linje vs U_fase, totalt effektuttak
- **Kabelberegning avansert** — parallelkabling, flere belastninger
- **Kortslutningsstrøm** — Icc-beregning for vernkoordinering
- **Jordfeil / isolasjonsmåling** — veiledende verdier

---

## Notater
- Android-only, ingen iOS/Safari-hensyn
- Hold all logikk i frontend — ingen server nødvendig
- Legg til ny kalkulator: se instruksjoner i `CLAUDE.md`
- **Husk:** Bump `CACHE`-versjon i `service-worker.js` ved hver Netlify-deploy
