// ── Load question file(s) based on ?tema= URL param ──────────
const tema = new URLSearchParams(location.search).get('tema') || '';
if (!tema) { location.href = './'; }

const temas = tema.split(',').map(s => s.trim()).filter(Boolean);

const backBtn  = document.getElementById('back-btn');
const homeLink = document.getElementById('home-link');
const bjrons   = ['boolsk', 'porter', 'mikrokontroller', 'minne', 'tallsystemer', 'vipper', 'trh1ek'];
const isLom    = temas.some(t => t.startsWith('lom-'));
const isBjrons = temas.some(t => bjrons.includes(t));
const indexHref = isLom ? './' : isBjrons ? './index-bjrons.html' : './index-elektro.html';
backBtn.href  = indexHref;
homeLink.href = indexHref;

const temaFil = {
  'lom-ool-motivasjon':      'lom/ool-motivasjon.js',
  'lom-ool-kultur':          'lom/ool-kultur.js',
  'lom-ool-endring':         'lom/ool-endring.js',
  'lom-marked-strategi':     'lom/marked-strategi.js',
  'lom-oks-kostnader':       'lom/oks-kostnader.js',
  'lom-oks-regnskapsanalyse':'lom/oks-regnskapsanalyse.js',
  'lom-oks-kalkyl':          'lom/oks-kalkyl.js',
  'lom-oks-budsjettering':   'lom/oks-budsjettering.js',
  'lom-oks-investering':     'lom/oks-investering.js',
  'lom-ool-ledelse':         'lom/ool-ledelse.js',
  'lom-marked-grunnlag':     'lom/marked-grunnlag.js',
  'lom-lov-hms':             'lom/lov-hms.js',
  'lom-oks-tillegg':         'lom/oks-tillegg.js',
  'rlc':           'elektro/rlc.js',
  'boolsk':        'bjrons/boolsk.js',
  'porter':        'bjrons/porter.js',
  'mikrokontroller': 'bjrons/mikrokontroller.js',
  'minne':         'bjrons/minne.js',
  'tallsystemer':  'bjrons/tallsystemer.js',
  'vipper':        'bjrons/vipper.js',
  'trh1ek':        'bjrons/trh1ek.js',
};

let QUESTIONS = [];
let QUIZ_META  = { title: '', subtitle: '', cats: {}, description: '' };

(async () => {
  let illustrationsText = '';
  try {
    const ir = await fetch('illustrations.js');
    if (ir.ok) illustrationsText = await ir.text() + '\n';
  } catch(e) {}

  let allQ    = [];
  let combined = null;
  for (const t of temas) {
    const path = temaFil[t] || (t + '.js');
    try {
      const resp = await fetch(path);
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      const text = await resp.text();
      const fn   = new Function(illustrationsText + text + '\nreturn { Q: QUESTIONS, M: QUIZ_META };');
      const res  = fn();
      allQ = allQ.concat(res.Q);
      if (!combined) {
        combined = { title: res.M.title, subtitle: res.M.subtitle || '', cats: Object.assign({}, res.M.cats), description: res.M.description || '' };
      } else {
        combined.title += ' + ' + res.M.title;
        Object.assign(combined.cats, res.M.cats);
      }
    } catch(e) {
      document.getElementById('loading').textContent = 'Kunne ikke laste spørsmål.';
      return;
    }
  }
  if (!allQ.length) { document.getElementById('loading').textContent = 'Ingen spørsmål funnet.'; return; }
  QUESTIONS = allQ;
  QUIZ_META  = combined;
  initQuiz();
})();

// ── State ────────────────────────────────────────────────────
let questions        = [];
let currentIdx       = 0;
let score            = 0;
let answered         = false;
let catScores        = {};
let wrongAnswers     = [];
let answers          = {};   // currentIdx → { indices, chosen }
let currentIndices   = [];
let minNavigableIdx  = 0;    // kan ikke gå tilbake forbi dette punktet

// ── Storage keys ─────────────────────────────────────────────
const PROGRESS_KEY = `quiz_progress_${tema}`;
const HISTORY_KEY  = `quiz_history_${tema}`;

// ── Progress helpers ─────────────────────────────────────────
function saveProgress() {
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify({
      order: questions.map(q => QUESTIONS.indexOf(q)),
      idx: currentIdx,
      score,
      cats: catScores,
      wrongs: wrongAnswers.map(item => ({
        qIdx: QUESTIONS.indexOf(item.q),
        chosenText: item.chosenText,
        correctText: item.correctText
      }))
    }));
  } catch(e) {}
}

function clearProgress() {
  try { localStorage.removeItem(PROGRESS_KEY); } catch(e) {}
}

function getSavedProgress() {
  try { return JSON.parse(localStorage.getItem(PROGRESS_KEY)); }
  catch { return null; }
}

// ── History helpers ───────────────────────────────────────────
function saveToHistory(sc, total) {
  const pct  = Math.round(sc / total * 100);
  const date = new Date().toLocaleDateString('no-NO', { day: 'numeric', month: 'short' });
  let hist   = getHistory();
  hist.push({ score: sc, total, pct, date });
  hist.sort((a, b) => b.pct - a.pct || b.score - a.score);
  hist = hist.slice(0, 3);
  try { localStorage.setItem(HISTORY_KEY, JSON.stringify(hist)); } catch(e) {}
}

function getHistory() {
  try { return JSON.parse(localStorage.getItem(HISTORY_KEY)) || []; }
  catch { return []; }
}

function renderHistory() {
  const hist = getHistory();
  const section = document.getElementById('history-section');
  if (!hist.length) { section.style.display = 'none'; return; }
  const medals = ['🥇', '🥈', '🥉'];
  section.style.display = 'block';
  const list = document.getElementById('history-list');
  list.innerHTML = '';
  hist.forEach((entry, i) => {
    const div = document.createElement('div');
    div.className = 'history-entry';
    div.innerHTML =
      `<div class="history-entry-left">` +
        `<span class="history-medal">${medals[i]}</span>` +
        `<span class="history-score">${entry.score}/${entry.total}</span>` +
        `<span class="history-pct">${entry.pct}%</span>` +
      `</div>` +
      `<span class="history-date">${entry.date}</span>`;
    list.appendChild(div);
  });
}

// ── Wrong answers helpers ─────────────────────────────────────
function renderWrongAnswers() {
  const wrap = document.getElementById('review-wrap');
  if (!wrongAnswers.length) {
    wrap.innerHTML =
      `<div class="review-all-correct">` +
        `✓ Perfekt! Du svarte riktig på alle spørsmålene.` +
      `</div>`;
    wrap.style.display = 'block';
    return;
  }
  wrap.style.display = 'block';
  document.getElementById('review-toggle-label').textContent =
    wrongAnswers.length === 1 ? 'Se 1 feil svar' : `Se ${wrongAnswers.length} feil svar`;
  document.getElementById('review-toggle-count').textContent =
    `${wrongAnswers.length}`;

  const list = document.getElementById('review-list');
  list.innerHTML = '';
  list.classList.remove('open');
  document.getElementById('review-toggle').classList.remove('open');

  wrongAnswers.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'review-item';
    div.innerHTML =
      `<div class="review-item-num">Feil ${i + 1} av ${wrongAnswers.length}</div>` +
      `<div class="review-item-q">${item.q.q.replace(/\n/g, '<br>')}</div>` +
      `<div class="review-answer-row wrong-ans">` +
        `<span class="review-answer-icon">✗</span>` +
        `<span><strong>Ditt svar:</strong> ${item.chosenText}</span>` +
      `</div>` +
      `<div class="review-answer-row correct-ans">` +
        `<span class="review-answer-icon">✓</span>` +
        `<span><strong>Riktig svar:</strong> ${item.correctText}</span>` +
      `</div>` +
      `<div class="review-explain">${item.q.explain}</div>`;
    list.appendChild(div);
  });
}

function toggleReview() {
  const toggle = document.getElementById('review-toggle');
  const list   = document.getElementById('review-list');
  const open   = toggle.classList.toggle('open');
  list.classList.toggle('open', open);
}

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const LETTERS = ['A', 'B', 'C', 'D'];

// ── Init ─────────────────────────────────────────────────────
function initQuiz() {
  document.getElementById('loading').style.display = 'none';

  document.getElementById('topbar-title').textContent = QUIZ_META.title;
  document.title = QUIZ_META.title + ' Quiz';

  document.getElementById('start-title').textContent = QUIZ_META.title;
  document.getElementById('start-desc').textContent  = QUIZ_META.description;

  const counts = {};
  QUESTIONS.forEach(q => { counts[q.cat] = (counts[q.cat] || 0) + 1; });

  const grid = document.getElementById('topics-grid');
  Object.entries(QUIZ_META.cats).forEach(([key, cat]) => {
    if (!counts[key]) return;
    const div = document.createElement('div');
    div.className = 'topic-item';
    div.innerHTML =
      `<span class="topic-dot" style="background:${cat.color}"></span>` +
      `${cat.label} (${counts[key]} spørsm.)`;
    grid.appendChild(div);
  });

  renderHistory();

  const saved = getSavedProgress();
  if (saved && saved.idx > 0 && saved.idx < saved.order.length) {
    const continueBtn = document.getElementById('continue-btn');
    continueBtn.textContent =
      `Fortsett fra spørsmål ${saved.idx + 1} av ${saved.order.length} (${saved.score} poeng) →`;
    continueBtn.style.display = 'block';
    document.getElementById('new-quiz-btn').textContent = 'Start på nytt';
  }

  if (isLom && temas.length === 1 && localStorage.getItem('quiz_kallenavn') === null) {
    document.getElementById('start-navn-input').value = '';
    document.getElementById('navn-screen').style.display = 'block';
  } else {
    currentNavn = localStorage.getItem('quiz_kallenavn') || '';
    document.getElementById('start-navn-input').value = currentNavn;
    document.getElementById('start-screen').style.display = 'block';
  }

  if (LB_TEMAS.includes(temas[0]) && temas.length === 1) {
    document.getElementById('start-lb-section').style.display = 'block';
    renderStartLeaderboard();
  }
}

function confirmNavn() {
  const navn = document.getElementById('start-navn-input').value.trim();
  currentNavn = navn;
  localStorage.setItem('quiz_kallenavn', navn);
  document.getElementById('navn-screen').style.display = 'none';
  document.getElementById('start-screen').style.display = 'block';
}

// ── Helpers ──────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── Quiz flow ────────────────────────────────────────────────
function skipNavn() {
  currentNavn = '';
  document.getElementById('navn-screen').style.display = 'none';
  document.getElementById('start-screen').style.display = 'block';
}

function startQuiz() {

  clearProgress();
  questions    = shuffle(QUESTIONS);
  currentIdx   = 0;
  score        = 0;
  answered     = false;
  wrongAnswers = [];
  catScores    = {};
  answers          = {};
  minNavigableIdx  = 0;
  questions.forEach(q => {
    if (!catScores[q.cat]) catScores[q.cat] = { correct: 0, total: 0 };
    catScores[q.cat].total++;
  });

  document.getElementById('start-screen').style.display  = 'none';
  document.getElementById('quiz-screen').style.display   = 'block';
  document.getElementById('result-screen').style.display = 'none';
  hideReviewWrap();
  renderQuestion();
}

function continueQuiz() {
  const saved = getSavedProgress();
  if (!saved) { startQuiz(); return; }
  questions    = saved.order.map(i => QUESTIONS[i]);
  currentIdx   = saved.idx;
  score        = saved.score;
  catScores    = saved.cats;
  answered         = false;
  answers          = {};
  minNavigableIdx  = saved.idx;   // kan ikke gå tilbake til allerede talte spørsmål
  wrongAnswers = (saved.wrongs || []).map(item => ({
    q:           QUESTIONS[item.qIdx],
    chosenText:  item.chosenText,
    correctText: item.correctText
  }));

  document.getElementById('start-screen').style.display  = 'none';
  document.getElementById('quiz-screen').style.display   = 'block';
  document.getElementById('result-screen').style.display = 'none';
  hideReviewWrap();
  renderQuestion();
}

function hideReviewWrap() {
  const wrap = document.getElementById('review-wrap');
  wrap.style.display = 'none';
  wrap.innerHTML =
    `<button class="review-toggle" id="review-toggle" onclick="toggleReview()">` +
      `<div class="review-toggle-left">` +
        `<span id="review-toggle-label">Se feil svar</span>` +
        `<span class="review-toggle-count" id="review-toggle-count"></span>` +
      `</div>` +
      `<span class="review-toggle-arrow">›</span>` +
    `</button>` +
    `<div class="review-list" id="review-list"></div>`;
}

function renderQuestion() {
  const q = questions[currentIdx];
  answered = false;

  document.getElementById('q-counter').textContent  = `Spørsmål ${currentIdx + 1} av ${questions.length}`;
  document.getElementById('score-live').textContent = `Poeng: ${score}`;
  document.getElementById('progress-fill').style.width = (currentIdx / questions.length * 100) + '%';

  const cat   = QUIZ_META.cats[q.cat] || { label: q.catLabel || q.cat, color: 'var(--accent)' };
  const badge = document.getElementById('cat-badge');
  badge.textContent       = cat.label;
  badge.style.background  = cat.color + '26';
  badge.style.color       = cat.color;

  const imgDiv = document.getElementById('q-image');
  if (q.img) { imgDiv.innerHTML = q.img; imgDiv.style.display = 'block'; }
  else        { imgDiv.innerHTML = '';    imgDiv.style.display = 'none';  }

  document.getElementById('question-text').innerHTML = q.q.replace(/\n/g, '<br>');

  const expl = document.getElementById('explanation');
  expl.className = 'explanation';
  expl.innerHTML = '';

  const nextBtn = document.getElementById('next-btn');
  nextBtn.textContent = currentIdx === questions.length - 1 ? 'Se resultat →' : 'Neste →';
  nextBtn.disabled = false;

  const prevBtn2 = document.getElementById('prev-btn');
  prevBtn2.disabled = currentIdx <= minNavigableIdx;

  const container0 = document.getElementById('options-container');
  container0.classList.remove('order-mode', 'sort-mode');

  if (q.type === 'order') {
    renderOrderQuestion(q);
    return;
  }

  if (q.type === 'sort') {
    renderSortQuestion(q);
    return;
  }

  const isMulti      = Array.isArray(q.correct);
  const stored       = answers[currentIdx];
  currentIndices     = stored ? stored.indices : shuffle([0, 1, 2, 3]);
  const shuffledOpts = currentIndices.map(i => q.opts[i]);

  // Positions in the shuffled display where correct answers appear
  const correctOriginals = isMulti ? q.correct : [q.correct];
  const correctShuffled  = correctOriginals.map(ci => currentIndices.indexOf(ci));

  const container = document.getElementById('options-container');
  container.innerHTML = '';
  shuffledOpts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="letter">${LETTERS[i]}</span><span>${opt}</span>`;
    btn.addEventListener('click', () => toggleOption(btn, i));
    container.appendChild(btn);
  });

  // Confirm button – always shown for unanswered questions
  const confirmWrap = document.getElementById('confirm-wrap');
  const confirmBtn  = document.getElementById('confirm-btn');
  confirmBtn.textContent = 'Bekreft svar';
  if (!stored) {
    confirmWrap.style.display = 'block';
    confirmBtn.disabled = true;
    confirmBtn.onclick = () => confirmAnswer(correctShuffled, q, shuffledOpts);
  } else {
    confirmWrap.style.display = 'none';
  }

  // Restore answered state when navigating back
  if (stored) {
    answered = true;
    const storedChosen = Array.isArray(stored.chosen) ? stored.chosen : [stored.chosen];
    document.querySelectorAll('.option-btn').forEach((btn, i) => {
      btn.disabled = true;
      if (correctShuffled.includes(i))   btn.classList.add('correct');
      else if (storedChosen.includes(i)) btn.classList.add('wrong');
    });
    const isCorrect = storedChosen.length === correctShuffled.length &&
      storedChosen.every(c => correctShuffled.includes(c));
    expl.innerHTML = `<strong>${isCorrect ? '✓ Riktig!' : '✗ Feil.'}</strong> ${q.explain}`;
    expl.classList.add('show');
  }
}

function selectAnswer(chosen, correctIdx, q, shuffledOpts) {
  if (answered) return;
  answered = true;
  answers[currentIdx] = { indices: currentIndices, chosen };

  document.querySelectorAll('.option-btn').forEach((btn, i) => {
    btn.disabled = true;
    if (i === correctIdx)  btn.classList.add('correct');
    else if (i === chosen) btn.classList.add('wrong');
  });

  if (chosen === correctIdx) {
    score++;
    catScores[q.cat].correct++;
  } else {
    wrongAnswers.push({
      q,
      chosenText:  shuffledOpts[chosen],
      correctText: shuffledOpts[correctIdx]
    });
  }

  saveAnswer(q, chosen === correctIdx);
  document.getElementById('score-live').textContent = `Poeng: ${score}`;

  const expl = document.getElementById('explanation');
  expl.innerHTML = `<strong>${chosen === correctIdx ? '✓ Riktig!' : '✗ Feil.'}</strong> ${q.explain}`;
  expl.classList.add('show');
}

function toggleOption(btn, i) {
  if (answered) return;
  btn.classList.toggle('selected');
  const anySelected = document.querySelectorAll('.option-btn.selected').length > 0;
  document.getElementById('confirm-btn').disabled = !anySelected;
}

function confirmAnswer(correctShuffled, q, shuffledOpts) {
  if (answered) return;
  answered = true;

  const btns = [...document.querySelectorAll('.option-btn')];
  const chosenIndices = btns.reduce((acc, btn, i) => {
    if (btn.classList.contains('selected')) acc.push(i);
    return acc;
  }, []);

  answers[currentIdx] = { indices: currentIndices, chosen: chosenIndices };

  btns.forEach((btn, i) => {
    btn.disabled = true;
    btn.classList.remove('selected');
    if (correctShuffled.includes(i))    btn.classList.add('correct');
    else if (chosenIndices.includes(i)) btn.classList.add('wrong');
  });

  document.getElementById('confirm-wrap').style.display = 'none';

  const isCorrect = chosenIndices.length === correctShuffled.length &&
    chosenIndices.every(c => correctShuffled.includes(c));

  if (isCorrect) {
    score++;
    catScores[q.cat].correct++;
  } else {
    wrongAnswers.push({
      q,
      chosenText:  chosenIndices.length ? chosenIndices.map(i => shuffledOpts[i]).join(' + ') : '(ingen valgt)',
      correctText: correctShuffled.map(i => shuffledOpts[i]).join(' + ')
    });
  }

  saveAnswer(q, isCorrect);

  document.getElementById('score-live').textContent = `Poeng: ${score}`;

  const expl = document.getElementById('explanation');
  expl.innerHTML = `<strong>${isCorrect ? '✓ Riktig!' : '✗ Feil.'}</strong> ${q.explain}`;
  expl.classList.add('show');
}

// ── Order question (drag pyramid) ─────────────────────────────
function renderOrderQuestion(q) {
  const container   = document.getElementById('options-container');
  const confirmWrap = document.getElementById('confirm-wrap');
  const confirmBtn  = document.getElementById('confirm-btn');
  const expl        = document.getElementById('explanation');

  container.classList.add('order-mode');
  container.innerHTML = '';

  const N = q.items.length;
  const stored = answers[currentIdx];

  let order;
  if (stored && stored.order) {
    order = stored.order.slice();
  } else {
    order = [...Array(N).keys()];
    let tries = 0;
    do {
      for (let i = order.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
      }
      tries++;
    } while (order.every((v, i) => v === i) && tries < 8);
  }

  const help = document.createElement('div');
  help.className = 'pyramid-help';
  help.textContent = 'Dra boksene for å bytte plass. Bunnen av pyramiden er nederst.';
  container.appendChild(help);

  const pyramid = document.createElement('div');
  pyramid.className = 'pyramid';
  container.appendChild(pyramid);

  function widthFor(level) {
    return 44 + (N - 1 - level) * (56 / (N - 1));
  }

  for (let displayIdx = 0; displayIdx < N; displayIdx++) {
    const level = N - 1 - displayIdx;
    const itemIdx = order[level];
    const box = document.createElement('div');
    box.className = 'pyramid-box';
    box.dataset.level = level;
    box.style.width = widthFor(level) + '%';
    box.innerHTML =
      `<span class="pyramid-handle">⋮⋮</span>` +
      `<span class="pyramid-label">${esc(q.items[itemIdx])}</span>`;
    pyramid.appendChild(box);
  }

  function refreshLabels() {
    pyramid.querySelectorAll('.pyramid-box').forEach(box => {
      const level = +box.dataset.level;
      box.querySelector('.pyramid-label').textContent = q.items[order[level]];
    });
  }

  if (stored) {
    answered = true;
    pyramid.querySelectorAll('.pyramid-box').forEach(box => {
      const level = +box.dataset.level;
      box.classList.add(order[level] === level ? 'correct' : 'wrong');
      box.classList.add('locked');
    });
    confirmWrap.style.display = 'none';
    expl.innerHTML = `<strong>${stored.isCorrect ? '✓ Riktig!' : '✗ Feil.'}</strong> ${q.explain}`;
    expl.classList.add('show');
    return;
  }

  initPyramidDrag(pyramid, order, refreshLabels);

  confirmWrap.style.display = 'block';
  confirmBtn.disabled = false;
  confirmBtn.textContent = 'Bekreft rekkefølge';
  confirmBtn.onclick = () => confirmOrderAnswer(q, order, pyramid);
}

function initPyramidDrag(pyramid, order, refresh) {
  let grabbed = null;

  function findTargetBox(clientY) {
    let target = null;
    pyramid.querySelectorAll('.pyramid-box').forEach(box => {
      const r = box.getBoundingClientRect();
      if (clientY >= r.top && clientY <= r.bottom) target = box;
    });
    return target;
  }

  function onPointerDown(e) {
    if (answered) return;
    const box = e.currentTarget;
    e.preventDefault();
    const rect = box.getBoundingClientRect();
    const ghost = box.cloneNode(true);
    ghost.classList.add('pyramid-ghost');
    ghost.style.position = 'fixed';
    ghost.style.left   = rect.left + 'px';
    ghost.style.top    = rect.top + 'px';
    ghost.style.width  = rect.width + 'px';
    ghost.style.height = rect.height + 'px';
    ghost.style.margin = '0';
    document.body.appendChild(ghost);
    box.classList.add('grabbing-source');
    grabbed = { box, level: +box.dataset.level, startY: e.clientY, ghost };
    try { box.setPointerCapture(e.pointerId); } catch(_) {}
  }

  function onPointerMove(e) {
    if (!grabbed) return;
    const dy = e.clientY - grabbed.startY;
    grabbed.ghost.style.transform = `translateY(${dy}px)`;
    pyramid.querySelectorAll('.pyramid-box').forEach(b => b.classList.remove('drag-over'));
    const target = findTargetBox(e.clientY);
    if (target && +target.dataset.level !== grabbed.level) {
      target.classList.add('drag-over');
    }
  }

  function onPointerEnd(e) {
    if (!grabbed) return;
    const target = findTargetBox(e.clientY);
    grabbed.box.classList.remove('grabbing-source');
    grabbed.ghost.remove();
    pyramid.querySelectorAll('.pyramid-box').forEach(b => b.classList.remove('drag-over'));
    if (target) {
      const tLevel = +target.dataset.level;
      if (tLevel !== grabbed.level) {
        [order[tLevel], order[grabbed.level]] = [order[grabbed.level], order[tLevel]];
        refresh();
      }
    }
    grabbed = null;
  }

  pyramid.querySelectorAll('.pyramid-box').forEach(box => {
    box.addEventListener('pointerdown',   onPointerDown);
    box.addEventListener('pointermove',   onPointerMove);
    box.addEventListener('pointerup',     onPointerEnd);
    box.addEventListener('pointercancel', onPointerEnd);
  });
}

function confirmOrderAnswer(q, order, pyramid) {
  if (answered) return;
  answered = true;

  const isCorrect = order.every((v, i) => v === i);

  pyramid.querySelectorAll('.pyramid-box').forEach(box => {
    const level = +box.dataset.level;
    box.classList.add(order[level] === level ? 'correct' : 'wrong');
    box.classList.add('locked');
  });

  const userTextBottomToTop    = order.map(i => q.items[i]).join(' → ');
  const correctTextBottomToTop = q.items.join(' → ');

  answers[currentIdx] = {
    type: 'order',
    order: order.slice(),
    isCorrect,
    chosen: 0,
    indices: [0, 1, 2, 3],
  };

  if (isCorrect) {
    score++;
    catScores[q.cat].correct++;
  } else {
    wrongAnswers.push({
      q,
      chosenText:  'Bunn → topp: ' + userTextBottomToTop,
      correctText: 'Bunn → topp: ' + correctTextBottomToTop,
    });
  }

  saveAnswer(q, isCorrect);

  document.getElementById('score-live').textContent = `Poeng: ${score}`;
  document.getElementById('confirm-wrap').style.display = 'none';

  const expl = document.getElementById('explanation');
  expl.innerHTML = `<strong>${isCorrect ? '✓ Riktig!' : '✗ Feil.'}</strong> ${q.explain}`;
  expl.classList.add('show');
}

// ── Sort question (drag into bins) ─────────────────────────────
function renderSortQuestion(q) {
  const container   = document.getElementById('options-container');
  const confirmWrap = document.getElementById('confirm-wrap');
  const confirmBtn  = document.getElementById('confirm-btn');
  const expl        = document.getElementById('explanation');

  container.classList.add('sort-mode');
  container.innerHTML = '';

  const stored = answers[currentIdx];
  const placement = {};
  if (stored && stored.placement) {
    Object.assign(placement, stored.placement);
  } else {
    q.items.forEach((_, i) => placement[i] = 'tray');
  }

  const help = document.createElement('div');
  help.className = 'sort-help';
  help.textContent = 'Dra hver boks til riktig kategori.';
  container.appendChild(help);

  const tray = document.createElement('div');
  tray.className = 'sort-tray';
  tray.dataset.binId = 'tray';
  tray.innerHTML =
    `<div class="sort-bin-label sort-tray-label">Usortert</div>` +
    `<div class="sort-bin-items"></div>`;
  container.appendChild(tray);

  const binsGrid = document.createElement('div');
  binsGrid.className = 'sort-bins';
  q.bins.forEach(bin => {
    const binDiv = document.createElement('div');
    binDiv.className = 'sort-bin';
    binDiv.dataset.binId = bin.id;
    binDiv.style.borderColor = bin.color;
    binDiv.innerHTML =
      `<div class="sort-bin-label" style="background:${bin.color}26;color:${bin.color}">${esc(bin.label)}</div>` +
      `<div class="sort-bin-items"></div>`;
    binsGrid.appendChild(binDiv);
  });
  container.appendChild(binsGrid);

  function renderItems() {
    container.querySelectorAll('.sort-bin-items').forEach(el => el.innerHTML = '');
    q.items.forEach((item, idx) => {
      const binId = placement[idx];
      const target = container.querySelector(`[data-bin-id="${binId}"] .sort-bin-items`);
      if (!target) return;
      const box = document.createElement('div');
      box.className = 'sort-item';
      box.dataset.itemIdx = idx;
      box.innerHTML =
        `<span class="sort-item-handle">⋮⋮</span>` +
        `<span class="sort-item-label">${esc(item.text)}</span>`;
      target.appendChild(box);
    });
  }

  renderItems();

  function trayEmpty() {
    return !Object.values(placement).includes('tray');
  }

  function lockAndShow() {
    container.querySelectorAll('.sort-item').forEach(box => {
      const idx = +box.dataset.itemIdx;
      const item = q.items[idx];
      box.classList.add(placement[idx] === item.bin ? 'correct' : 'wrong');
      box.classList.add('locked');
    });
  }

  if (stored) {
    answered = true;
    lockAndShow();
    confirmWrap.style.display = 'none';
    expl.innerHTML = `<strong>${stored.isCorrect ? '✓ Riktig!' : '✗ Feil.'}</strong> ${q.explain}`;
    expl.classList.add('show');
    return;
  }

  initSortDrag(container, placement, renderItems, () => {
    confirmBtn.disabled = !trayEmpty();
  });

  confirmWrap.style.display = 'block';
  confirmBtn.disabled = !trayEmpty();
  confirmBtn.textContent = 'Bekreft sortering';
  confirmBtn.onclick = () => confirmSortAnswer(q, placement);
}

function initSortDrag(container, placement, refresh, onChange) {
  let grabbed = null;

  function findTargetBin(clientX, clientY) {
    let target = null;
    container.querySelectorAll('[data-bin-id]').forEach(bin => {
      const r = bin.getBoundingClientRect();
      if (clientX >= r.left && clientX <= r.right && clientY >= r.top && clientY <= r.bottom) {
        target = bin;
      }
    });
    return target;
  }

  function onPointerDown(e) {
    if (answered) return;
    const item = e.currentTarget;
    e.preventDefault();
    const rect = item.getBoundingClientRect();
    const ghost = item.cloneNode(true);
    ghost.classList.add('sort-ghost');
    ghost.style.position = 'fixed';
    ghost.style.left   = rect.left + 'px';
    ghost.style.top    = rect.top + 'px';
    ghost.style.width  = rect.width + 'px';
    ghost.style.height = rect.height + 'px';
    ghost.style.margin = '0';
    document.body.appendChild(ghost);
    item.classList.add('grabbing-source');
    grabbed = { item, idx: +item.dataset.itemIdx, startX: e.clientX, startY: e.clientY, ghost };
    try { item.setPointerCapture(e.pointerId); } catch(_) {}
  }

  function onPointerMove(e) {
    if (!grabbed) return;
    grabbed.ghost.style.transform = `translate(${e.clientX - grabbed.startX}px, ${e.clientY - grabbed.startY}px)`;
    container.querySelectorAll('[data-bin-id]').forEach(b => b.classList.remove('drag-over'));
    const target = findTargetBin(e.clientX, e.clientY);
    if (target) target.classList.add('drag-over');
  }

  function onPointerEnd(e) {
    if (!grabbed) return;
    const target = findTargetBin(e.clientX, e.clientY);
    grabbed.item.classList.remove('grabbing-source');
    grabbed.ghost.remove();
    container.querySelectorAll('[data-bin-id]').forEach(b => b.classList.remove('drag-over'));
    if (target) {
      const newBin = target.dataset.binId;
      if (placement[grabbed.idx] !== newBin) {
        placement[grabbed.idx] = newBin;
        refresh();
        attachHandlers();
        onChange();
      }
    }
    grabbed = null;
  }

  function attachHandlers() {
    container.querySelectorAll('.sort-item').forEach(item => {
      item.addEventListener('pointerdown',   onPointerDown);
      item.addEventListener('pointermove',   onPointerMove);
      item.addEventListener('pointerup',     onPointerEnd);
      item.addEventListener('pointercancel', onPointerEnd);
    });
  }

  attachHandlers();
}

function confirmSortAnswer(q, placement) {
  if (answered) return;
  answered = true;

  let allCorrect = true;
  q.items.forEach((item, idx) => {
    if (placement[idx] !== item.bin) allCorrect = false;
  });

  document.querySelectorAll('#options-container .sort-item').forEach(box => {
    const idx = +box.dataset.itemIdx;
    const item = q.items[idx];
    box.classList.add(placement[idx] === item.bin ? 'correct' : 'wrong');
    box.classList.add('locked');
  });

  const userBins = {};
  const correctBins = {};
  q.bins.forEach(b => { userBins[b.id] = []; correctBins[b.id] = []; });
  q.items.forEach((item, idx) => {
    if (userBins[placement[idx]]) userBins[placement[idx]].push(item.text);
    correctBins[item.bin].push(item.text);
  });
  const userText    = q.bins.map(b => `${b.label}: ${userBins[b.id].join(', ') || '(ingen)'}`).join(' | ');
  const correctText = q.bins.map(b => `${b.label}: ${correctBins[b.id].join(', ')}`).join(' | ');

  answers[currentIdx] = {
    type: 'sort',
    placement: { ...placement },
    isCorrect: allCorrect,
    chosen: 0,
    indices: [0, 1, 2, 3],
  };

  if (allCorrect) {
    score++;
    catScores[q.cat].correct++;
  } else {
    wrongAnswers.push({ q, chosenText: userText, correctText });
  }

  saveAnswer(q, allCorrect);
  document.getElementById('score-live').textContent = `Poeng: ${score}`;
  document.getElementById('confirm-wrap').style.display = 'none';

  const expl = document.getElementById('explanation');
  expl.innerHTML = `<strong>${allCorrect ? '✓ Riktig!' : '✗ Feil.'}</strong> ${q.explain}`;
  expl.classList.add('show');
}

function nextQuestion() {
  currentIdx++;
  if (currentIdx >= questions.length) {
    clearProgress();
    showResult();
  } else {
    saveProgress();
    renderQuestion();
  }
}

function prevQuestion() {
  if (currentIdx > minNavigableIdx) {
    currentIdx--;
    renderQuestion();
  }
}

function showResult() {
  document.getElementById('quiz-screen').style.display   = 'none';
  document.getElementById('result-screen').style.display = 'block';

  saveToHistory(score, questions.length);
  renderHistory();

  const pct = Math.round((score / questions.length) * 100);
  let emoji, title, feedback;
  if      (pct >= 90) { emoji = '🏆'; title = 'Utmerket!';    feedback = 'Du behersker pensumet svært godt. Solid grunnlag foran eksamen!'; }
  else if (pct >= 75) { emoji = '🎉'; title = 'Bra jobbet!';   feedback = 'Du kan det meste. Gå gjennom kategoriene du bommet mest på for å tette hullene.'; }
  else if (pct >= 55) { emoji = '📚'; title = 'På rett vei!';  feedback = 'Greit resultat – men det er rom for forbedring. Fokuser på formler og definisjoner.'; }
  else                { emoji = '💪'; title = 'Hold ut!';       feedback = 'Ta en ny runde etter å ha lest gjennom teorien. Du er på vei!'; }

  document.getElementById('result-emoji').textContent    = emoji;
  document.getElementById('result-title').textContent    = title;
  document.getElementById('result-sub').textContent      = `${pct}% riktige svar`;
  document.getElementById('final-score').textContent     = score;
  document.getElementById('final-total').textContent     = `av ${questions.length}`;
  document.getElementById('result-feedback').textContent = feedback;

  const breakdown = document.getElementById('cat-breakdown');
  breakdown.innerHTML = '';
  Object.entries(catScores).forEach(([cat, data]) => {
    const meta = QUIZ_META.cats[cat];
    if (!meta) return;
    const p = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
    breakdown.innerHTML +=
      `<div class="cat-stat">` +
        `<div class="cat-stat-name" style="color:${meta.color}">${meta.label}</div>` +
        `<div class="cat-stat-bar-bg">` +
          `<div class="cat-stat-bar-fill" style="width:${p}%; background:${meta.color}"></div>` +
        `</div>` +
        `<div class="cat-stat-score">${data.correct} / ${data.total} (${p}%)</div>` +
      `</div>`;
  });

  renderWrongAnswers();
  showLeaderboardSection(score, questions.length);
}

function restartQuiz() {
  clearProgress();
  hideReviewWrap();
  document.getElementById('leaderboard-wrap').style.display = 'none';
  document.getElementById('result-screen').style.display = 'none';
  document.getElementById('continue-btn').style.display  = 'none';
  document.getElementById('new-quiz-btn').textContent    = 'Start Quiz →';
  renderHistory();
  document.getElementById('start-screen').style.display  = 'block';
}

// ── Supabase leaderboard ──────────────────────────────────────
const SB_URL  = 'https://cimobeaszhycobffsjes.supabase.co';
const SB_KEY  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpbW9iZWFzemh5Y29iZmZzamVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcyODM3MjQsImV4cCI6MjA5Mjg1OTcyNH0.iaivOt6lh0bXwxB9gTutuDhHizOcmK_7da2cE-Iw5vU';
const LB_TEMAS = ['rlc', 'trh1ek', 'minne', 'mikrokontroller', 'lom-ool-motivasjon', 'lom-ool-kultur', 'lom-ool-endring', 'lom-marked-strategi', 'lom-oks-kostnader', 'lom-oks-regnskapsanalyse', 'lom-oks-kalkyl', 'lom-oks-budsjettering', 'lom-oks-investering', 'lom-ool-ledelse', 'lom-marked-grunnlag', 'lom-lov-hms', 'lom-oks-tillegg'];

let pendingScore  = null;
let currentNavn   = '';

function getDeviceId() {
  let id = localStorage.getItem('quiz_device_id');
  if (!id) {
    id = 'dev_' + Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
    localStorage.setItem('quiz_device_id', id);
  }
  return id;
}

function sbHeaders(extra = {}) {
  return { 'apikey': SB_KEY, 'Authorization': 'Bearer ' + SB_KEY, 'Content-Type': 'application/json', ...extra };
}

async function fetchLeaderboard(t) {
  const res = await fetch(
    `${SB_URL}/rest/v1/scores?tema=eq.${t}&order=score.desc,created_at.asc&limit=50`,
    { headers: sbHeaders() }
  );
  if (!res.ok) return [];
  const all = await res.json();
  // Behold kun beste score per device_id (first-wins siden allerede sortert score desc)
  const seen = new Set();
  const deduped = [];
  for (const entry of all) {
    const key = entry.device_id || `_legacy_${entry.id}`;
    if (seen.has(key)) continue;
    seen.add(key);
    deduped.push(entry);
    if (deduped.length >= 10) break;
  }
  return deduped;
}

async function saveScore(navn, sc, tot, t) {
  const res = await fetch(`${SB_URL}/rest/v1/scores`, {
    method: 'POST',
    headers: sbHeaders({ 'Prefer': 'return=representation' }),
    body: JSON.stringify({ navn, score: sc, total: tot, tema: t, device_id: getDeviceId() })
  });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    console.warn('[saveScore] failed', res.status, body);
  }
}

async function saveAnswer(q, isCorrect) {
  const payload = { tema: temas[0], sporsmal_idx: QUESTIONS.indexOf(q), cat: q.cat, riktig: isCorrect, device_id: getDeviceId() };
  if (q.id !== undefined) payload.sporsmal_id = q.id;
  if (currentNavn) payload.navn = currentNavn;
  try {
    const res = await fetch(`${SB_URL}/rest/v1/svar`, {
      method: 'POST',
      headers: sbHeaders({ 'Prefer': 'return=minimal' }),
      body: JSON.stringify(payload)
    });
    if (!res.ok) {
      const body = await res.text().catch(() => '');
      console.warn('[saveAnswer] failed', res.status, body, payload);
    }
  } catch (e) {
    console.warn('[saveAnswer] network error', e, payload);
  }
}

async function renderLeaderboard(highlightNavn) {
  const list = document.getElementById('lb-list');
  list.innerHTML = '<div class="lb-loading">Laster…</div>';
  const entries = await fetchLeaderboard(temas[0]);
  if (!entries.length) {
    list.innerHTML = '<div class="lb-loading">Ingen scores ennå – vær den første!</div>';
    return;
  }
  const medals = ['🥇', '🥈', '🥉'];
  const rows = entries.map((e, i) => {
    const pct = Math.round(e.score / e.total * 100);
    const hi  = highlightNavn && e.navn === highlightNavn;
    const hidden = i >= 3 ? ' hidden' : '';
    return `<div class="lb-entry${hi ? ' highlight' : ''}${hidden}">` +
      `<span class="lb-rank">${medals[i] || (i + 1) + '.'}</span>` +
      `<span class="lb-navn">${esc(e.navn)}</span>` +
      `<span class="lb-score">${e.score}/${e.total}</span>` +
      `<span class="lb-pct">${pct}%</span>` +
    `</div>`;
  }).join('');
  const rest = entries.length - 3;
  const showMoreBtn = rest > 0
    ? `<button class="lb-show-more" onclick="lbShowAll(this)">Vis alle (${entries.length}) ▾</button>`
    : '';
  list.innerHTML = rows + showMoreBtn;
}

function lbShowAll(btn) {
  document.querySelectorAll('.lb-entry.hidden').forEach(el => el.classList.remove('hidden'));
  btn.remove();
}

async function renderStartLeaderboard() {
  const list = document.getElementById('start-lb-list');
  const entries = await fetchLeaderboard(temas[0]);
  if (!entries.length) {
    list.innerHTML = '<div class="lb-loading">Ingen scores ennå – vær den første!</div>';
    return;
  }
  const medals = ['🥇', '🥈', '🥉'];
  const rows = entries.map((e, i) => {
    const pct = Math.round(e.score / e.total * 100);
    const hidden = i >= 3 ? ' hidden' : '';
    return `<div class="lb-entry${hidden}">` +
      `<span class="lb-rank">${medals[i] || (i + 1) + '.'}</span>` +
      `<span class="lb-navn">${esc(e.navn)}</span>` +
      `<span class="lb-score">${e.score}/${e.total}</span>` +
      `<span class="lb-pct">${pct}%</span>` +
    `</div>`;
  }).join('');
  const rest = entries.length - 3;
  const showMoreBtn = rest > 0
    ? `<button class="lb-show-more" onclick="lbShowAllStart(this)">Vis alle (${entries.length}) ▾</button>`
    : '';
  list.innerHTML = rows + showMoreBtn;
}

function lbShowAllStart(btn) {
  btn.closest('#start-lb-list').querySelectorAll('.lb-entry.hidden').forEach(el => el.classList.remove('hidden'));
  btn.remove();
}

async function handleScoreSubmit() {
  const input = document.getElementById('lb-navn');
  const navn  = input.value.trim() || 'Anonym';
  const btn = document.getElementById('lb-submit-btn');
  btn.disabled    = true;
  btn.textContent = 'Lagrer…';
  try {
    if (input.value.trim()) localStorage.setItem('quiz_kallenavn', input.value.trim());
    await saveScore(navn, pendingScore.score, pendingScore.total, temas[0]);
    document.getElementById('lb-form-wrap').style.display = 'none';
    await renderLeaderboard(navn);
  } catch(e) {
    btn.disabled    = false;
    btn.textContent = 'Lagre';
    alert('Noe gikk galt. Prøv igjen.');
  }
}

function showLeaderboardSection(sc, tot) {
  if (!LB_TEMAS.includes(temas[0]) || temas.length !== 1) return;
  pendingScore = { score: sc, total: tot };
  document.getElementById('leaderboard-wrap').style.display = 'block';
  document.getElementById('lb-tema-label').textContent      = QUIZ_META.title;
  document.getElementById('lb-form-wrap').style.display     = 'flex';
  const btn = document.getElementById('lb-submit-btn');
  btn.disabled    = false;
  btn.textContent = 'Lagre';
  document.getElementById('lb-navn').value = currentNavn || localStorage.getItem('quiz_kallenavn') || '';
  renderLeaderboard(null);
}
