// Validerer at hvert spørsmål i LØM-quizfilene har en stabil, unik `id`.
// IDene sendes til Supabase som `sporsmal_id` slik at man kan spore hvilke
// spørsmål som er vanskelige/lette over tid.
//
// Regler:
// - Hvert spørsmål må ha `id`-felt med et positivt heltall
// - IDer må være unike innenfor samme fil (men kan være like på tvers av filer,
//   siden tema+id er det som garanterer global unikhet)
// - IDer skal ALDRI gjenbrukes selv om et spørsmål er slettet
//
// Kjøres automatisk i pre-commit. Kan også kjøres manuelt:
//   node scripts/validate-lom-ids.js
//   node scripts/validate-lom-ids.js --next   # vis neste ledige ID per fil

const fs = require('fs');
const path = require('path');

const LOM_DIR = path.join(__dirname, '..', 'quiz', 'lom');
const FILES = fs.readdirSync(LOM_DIR)
  .filter(f => f.endsWith('.js') && !f.startsWith('_'))
  .map(f => path.join(LOM_DIR, f));

const showNext = process.argv.includes('--next');
let errors = 0;

for (const file of FILES) {
  const text = fs.readFileSync(file, 'utf8');
  let questions;
  try {
    const fn = new Function(text + '\nreturn QUESTIONS;');
    questions = fn();
  } catch (e) {
    console.error(`✗ ${path.relative(process.cwd(), file)}: kunne ikke parses (${e.message})`);
    errors++;
    continue;
  }

  const seen = new Map();
  const missing = [];
  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    if (q.id === undefined || q.id === null) {
      missing.push(i);
      continue;
    }
    if (typeof q.id !== 'number' || !Number.isInteger(q.id) || q.id < 1) {
      console.error(`✗ ${path.relative(process.cwd(), file)}: spørsmål ${i} har ugyldig id (${q.id})`);
      errors++;
      continue;
    }
    if (seen.has(q.id)) {
      console.error(`✗ ${path.relative(process.cwd(), file)}: duplikat id=${q.id} (spørsmål ${seen.get(q.id)} og ${i})`);
      errors++;
    } else {
      seen.set(q.id, i);
    }
  }

  if (missing.length) {
    console.error(`✗ ${path.relative(process.cwd(), file)}: ${missing.length} spørsmål mangler id (indeks ${missing.join(', ')})`);
    errors++;
  }

  if (showNext && !missing.length) {
    const max = Math.max(0, ...seen.keys());
    console.log(`${path.basename(file).padEnd(30)} ${questions.length} spm, neste ledige id: ${max + 1}`);
  }
}

if (errors) {
  console.error(`\n${errors} feil i LØM-quizfiler — fikse før commit.`);
  process.exit(1);
}

if (!showNext) {
  console.log(`✓ LØM ID-validering OK (${FILES.length} filer)`);
}
