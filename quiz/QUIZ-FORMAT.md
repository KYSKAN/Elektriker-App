# Quiz – Filformat og bruksanvisning

## Filstruktur

```
quiz/
├── index.html          Quiz-app (UI + logikk) — rør ikke denne for å bytte tema
├── sporsmal-lom.js     Spørsmålsdata for LØM fagskole — bytt denne for nytt tema
└── QUIZ-FORMAT.md      Denne filen
```

---

## Slik bytter du quiztema

1. Lag en ny fil, f.eks. `sporsmal-elektro.js`, med samme format som `sporsmal-lom.js`
2. I `quiz/index.html`, finn linjen:
   ```html
   <script src="sporsmal-lom.js"></script>
   ```
   Bytt filnavnet til den nye filen.
3. Oppdater `CAT_META`-objektet i `index.html` hvis det nye temaet har andre kategorier.
4. Bump cache-versjon i `service-worker.js` og push.

---

## Format for spørsmålsfilen

Filen eksporterer én global variabel: `const QUESTIONS = [ ... ]`

Hvert element i arrayet ser slik ut:

```js
{
  cat: 'kategorinøkkel',       // kort nøkkel, kun bokstaver (ingen mellomrom)
  catLabel: 'Visningsnavn',    // vises som badge på spørsmålskortet
  q: 'Spørsmålsteksten?',      // selve spørsmålet
  opts: [
    'Alternativ A',
    'Alternativ B',
    'Alternativ C',
    'Alternativ D'
  ],
  correct: 2,                  // indeks (0–3) for riktig svar
  explain: 'Forklaringstekst som vises etter svar.'
}
```

### Kategorier i LØM-filen

| `cat`-nøkkel | Visningsnavn            | Farge   |
|--------------|-------------------------|---------|
| `ledelse`    | Ledelse & Organisasjon  | #f59e0b |
| `marked`     | Markedsføringsledelse   | #ec4899 |
| `regnskap`   | Regnskapsanalyse        | #00a8e8 |
| `okonomi`    | Økonomistyring          | #10b981 |

---

## Slik legger du til nye kategorier

1. Legg til spørsmål med en ny `cat`-nøkkel i spørsmålsfilen.
2. I `quiz/index.html`, finn `CAT_META`-objektet og legg til en ny rad:
   ```js
   nykategori: { label: 'Visningsnavn', color: '#hexfarge' }
   ```
3. Legg eventuelt til en CSS-klasse for badge-farge i `<style>`-blokken:
   ```css
   .cat-nykategori { background: rgba(r,g,b,0.15); color: var(--cat-nykategori); }
   ```
   Og CSS-variabelen i `:root`:
   ```css
   --cat-nykategori: #hexfarge;
   ```

---

## Slik legger du til et nytt spørsmål

Kopier et eksisterende spørsmål i spørsmålsfilen og rediger feltene. Sjekk at:
- `correct` er riktig indeks (teller fra 0)
- `cat` matcher en nøkkel i `CAT_META`
- `opts` har nøyaktig 4 elementer

---

## Husk etter endringer

- Bump `CACHE`-versjonen i `service-worker.js` (f.eks. v50 → v51)
- Legg til nye JS-filer i `FILES`-arrayet i `service-worker.js`
- `git add . && git commit -m "..." && git push`
