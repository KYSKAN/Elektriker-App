// ── Meny og navigasjon ──
const menuBtn   = document.getElementById('menuBtn');
const dropdown  = document.getElementById('dropdown');
const menuLabel = document.getElementById('menuLabel');

const views   = { ohm: 'viewOhm', kabel: 'viewKabel', krets: 'viewKrets' };
const labels  = { ohm: 'Ohms lov', kabel: 'Kabel og vern', krets: 'RC/RL/RLC krets' };
const menuIdx = { kabel: 0, ohm: 1, krets: 2 };

function toggleMenu() {
  menuBtn.classList.toggle('open');
  dropdown.classList.toggle('open');
}

document.addEventListener('click', e => {
  if (!menuBtn.contains(e.target) && !dropdown.contains(e.target)) {
    menuBtn.classList.remove('open');
    dropdown.classList.remove('open');
  }
});

function switchTo(view) {
  Object.values(views).forEach(id => document.getElementById(id).classList.add('hidden'));
  document.getElementById(views[view]).classList.remove('hidden');
  menuLabel.textContent = labels[view];
  menuBtn.classList.remove('open');
  dropdown.classList.remove('open');
  const items = dropdown.querySelectorAll('.dropdown-item:not(.disabled)');
  items.forEach(el => el.classList.remove('active'));
  items[menuIdx[view]].classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Toggle-knapper (delt på tvers av alle kalkulatorer) ──
// Legg til ny kalkulator: ikke noe å endre her, toggle-init er generisk
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.toggle-group').forEach(group => {
    group.querySelectorAll('.toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  });
});
