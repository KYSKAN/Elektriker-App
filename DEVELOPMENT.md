# Elektriker-App — Utviklingsdokument

## Formål
PWA og nettside for elektrikere. Fagkalkulatorer og quiz. Fungerer på Android, iOS og i alle nettlesere på mobil og PC.

## Nåværende status
PWA er oppe og kjører på https://kyskan.github.io/Elektriker-App. Koblet til GitHub — automatisk deploy via GitHub Pages ved `git push`. Service worker på v217.

**Backend:** Supabase (PostgreSQL) — tabeller `scores` (toppliste) og `svar` (alle svar per spørsmål).

---

## Implementerte kalkulatorer
- **Ohms lov** — V, A, Ω, W. Fyll inn 2, beregn 2. Støtter multiplikator.
- **Kabel og vern** — Kabeldimensjonering og vernvalg etter NEK 400. Forlegningsmetoder A1–E inkl. D1/D2 (jord). Auto-temperatur ved jordforlegning. Støtter kobber og aluminium.
- **Spenningsfall** — Spenningsfallkalkulator.
- **RC/RL/RLC krets** — Aktiv, reaktiv og syneffekt, impedans, strøm, fasevinkel, resonansfrekvens.

---

## Quiz-temaer (21 totalt, 661 spørsmål)

### LØM (Fagskole) — 13 temaer, 424 spørsmål
| Tema                       | Slug                       | Spørsmål | Toppliste |
|----------------------------|----------------------------|----------|-----------|
| OOL – Motivasjon           | lom-ool-motivasjon         | 29       | ✓         |
| OOL – Organisasjonskultur  | lom-ool-kultur             | 37       | ✓         |
| OOL – Endringsledelse      | lom-ool-endring            | 36       | ✓         |
| OOL – Lederstil & org.     | lom-ool-ledelse            | 36       | ✓         |
| Marked – Strategi & 4P     | lom-marked-strategi        | 33       | ✓         |
| Marked – Grunnlag          | lom-marked-grunnlag        | 34       | ✓         |
| ØKS – Kostnader            | lom-oks-kostnader          | 33       | ✓         |
| ØKS – Regnskapsanalyse     | lom-oks-regnskapsanalyse   | 35       | ✓         |
| ØKS – Kalkulasjon          | lom-oks-kalkyl             | 30       | ✓         |
| ØKS – Budsjettering        | lom-oks-budsjettering      | 29       | ✓         |
| ØKS – Investering          | lom-oks-investering        | 31       | ✓         |
| ØKS – Tillegg (MVA, m.m.)  | lom-oks-tillegg            | 28       | ✓         |
| Lov – AML, ferie, HMS      | lom-lov-hms                | 33       | ✓         |

### Elektro
| Tema       | Slug | Spørsmål | Toppliste |
|------------|------|----------|-----------|
| RLC-kretser | rlc | 28       | ✓         |

### Elektroniske (Bjørns)
| Tema             | Slug            | Spørsmål | Toppliste |
|------------------|-----------------|----------|-----------|
| Boolsk algebra   | boolsk          | 31       |           |
| Logiske porter   | porter          | 26       |           |
| Mikrokontroller  | mikrokontroller | 25       | ✓         |
| Dataminne        | minne           | 25       | ✓         |
| Tallsystemer     | tallsystemer    | 30       |           |
| Vipper (FF)      | vipper          | 22       |           |
| TRH-1EK prøve    | trh1ek          | 50       | ✓         |

---

## Teknologi
| Hva              | Valg                                          |
|------------------|-----------------------------------------------|
| Markup           | HTML5                                         |
| Logikk           | Vanilla JavaScript (én fil per kalkulator)    |
| Styling          | CSS (`kalkulator/css/style.css`)              |
| Backend/database | Supabase (PostgreSQL + REST API)              |
| Distribusjonsformat | PWA (Android/iOS) + nettside              |
| Hosting          | GitHub Pages (auto-deploy via git push)       |
| Versjonskontroll | Git + GitHub (KYSKAN/Elektriker-App)          |

---

## Backlog

### Kabel og vern — faglig
- [x] Cos φ — eget felt, default 1,0
- [x] Aluminium-tabeller (IEC 60364-5-52 B.52.2/B.52.3)
- [x] Jordtemperatur-korreksjon (tab. B.52.15, ref. 20°C)
- [x] Last i W eller A (toggle)
- [ ] Samlefaktor — korreksjon for flere kabler i samme rør/grøft (NEK 400)
- [ ] Kortslutningsstrøm — Icc-beregning for vernkoordinering
- [ ] Jordfeil / isolasjonsmåling — veiledende verdier

### Quiz — toppliste
- [x] RLC, TRH-1EK, Minne, Mikrokontroller
- [x] Alle 13 LØM-temaer
- [ ] Boolsk, Porter, Tallsystemer, Vipper mangler toppliste

### Quiz — kvalitet (svar-mønstre)
- [x] LØM: omskrevet alle feil-svar slik at riktig svar ikke skiller seg ut på lengde, posisjon, komma, bindestrek eller parentes (april 2026, runde 1–4)
- [x] Verifikasjonsskript og akseptkriterier dokumentert i CLAUDE.md
- [ ] Tilsvarende gjennomgang av Elektro- og Bjørns-quizene (RLC, boolsk, porter, mikrokontroller, minne, tallsystemer, vipper, trh1ek)
- [ ] Kotters 8 trinn (ool-endring): bytt fra pyramide-visning til vanlig rekkefølge-liste — trinnene er sekvensielle, ikke hierarkiske som Maslow

### Quiz — dataanalyse (Supabase)
- [x] Alle svar logges til `svar`-tabellen med tema, sporsmal_idx, cat, riktig, navn
- [x] Navn påkrevd for LØM-quizzene (lagres med hvert svar)
- [x] Stabile spørsmåls-IDer for LØM (`sporsmal_id`) — 424 spørsmål nummerert 1–N per fil. Pre-commit hook validerer integritet (`scripts/validate-lom-ids.js`). Krever Supabase-kolonne `sporsmal_id int4 NULL` i `svar`-tabellen (lagt til 2026-05).
- [ ] Dashboard / visning av svar-statistikk (hvilke spørsmål er vanskeligst?)
- [ ] Gjennomsnittscore per tema vist på quiz-velger-siden

### Potensielle nye funksjoner
- [ ] Klassekode — lærer oppretter kode, elever kobler seg til, lærer ser alle resultater
- [ ] Personlig historikk — skriv navn, se dine egne resultater over tid
- [ ] Daglig utfordring — alle tar samme 10 spørsmål, felles toppliste

---

## Notater
- Støtter Android, iOS og desktop-nettlesere
- All logikk i frontend — Supabase er eneste ekstern tjeneste
- Legg til ny kalkulator: se instruksjoner i `CLAUDE.md`
- Legg til nytt quiz-tema: se instruksjoner i `CLAUDE.md`
- **Cache-bump:** Skjer automatisk via `hooks/pre-commit` (krever `git config core.hooksPath hooks` én gang per klone)
- **Husk:** Bruk `git add <spesifikke filer>` — ikke `git add -A` (unngå å committe .claude/)
- **.nojekyll** i rot er kritisk — uten den feiler GitHub Pages-deploy
- **Linjeskift:** `.gitattributes` styrer at alle tekstfiler er LF i repoet — kjør `git add --renormalize .` etter første klone for å fjerne CRLF-advarsler
