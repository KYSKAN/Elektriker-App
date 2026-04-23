'use strict';
const QUIZ_META = {
  id: 'minne',
  title: 'Dataminne',
  subtitle: 'Bjørns Elektroniske',
  cats: {
    primær:  { label: 'Primærminne og cache', color: '#5c7cfa' },
    rom:     { label: 'ROM og Flash',         color: '#f59e0b' },
    lagring: { label: 'Lagringsmedier',       color: '#10b981' },
  }
};

const QUESTIONS = [
  {
    q: 'Hva kjennetegner primærminne (RAM)?',
    opts: ['Flyktig minne som mister data uten strøm', 'Permanent lagring', 'Basert på magnetplater', 'Lagrer firmware'],
    correct: 0, cat: 'primær'
  },
  {
    q: 'Hva er den viktigste tekniske forskjellen mellom DRAM og SRAM?',
    opts: ['DRAM er raskere enn SRAM', 'DRAM må oppfriskes, SRAM trenger ikke det', 'SRAM er billigere enn DRAM', 'SRAM er tregere enn DRAM'],
    correct: 1, cat: 'primær'
  },
  {
    q: 'Hva lagres i ROM?',
    opts: ['Prosessdata', 'OS i drift', 'Firmware/BIOS', 'Cache-data'],
    correct: 2, cat: 'rom'
  },
  {
    q: 'Hvilken ROM-type slettes med UV-lys?',
    opts: ['EEPROM', 'Mask-ROM', 'EPROM', 'PROM'],
    correct: 2, cat: 'rom'
  },
  {
    q: 'Hva kjennetegner EEPROM?',
    opts: ['Kan skrives én gang', 'Er flyktig', 'Lagrer kun firmware', 'Slettes elektronisk byte for byte'],
    correct: 3, cat: 'rom'
  },
  {
    q: 'Hva er den definerende teknologien i en HDD?',
    opts: ['Flash-chips', 'Optiske linser', 'Magnetiske plater og roterende disker', 'SRAM-celler'],
    correct: 2, cat: 'lagring'
  },
  {
    q: 'Hva skiller SSD fra HDD?',
    opts: ['Ingen bevegelige deler', 'Tregere tilgang enn HDD', 'Bruker magnetiske plater', 'Mer sårbar for vibrasjon'],
    correct: 0, cat: 'lagring'
  },
  {
    q: 'Hva er en kjent ulempe med SSD?',
    opts: ['Treg tilgang', 'Sårbar for vibrasjon og støt', 'Begrenset antall skriv/slettinger', 'Krever optisk lesing'],
    correct: 2, cat: 'lagring'
  },
  {
    q: 'Hva er den mest definerende tekniske egenskapen til magnetbånd?',
    opts: ['Rask tilfeldig tilgang', 'Flash-basert lagring', 'Sekvensiell tilgang', 'Optisk lesing'],
    correct: 2, cat: 'lagring'
  },
  {
    q: 'Hva kjennetegner optiske medier (CD/DVD/Blu-ray)?',
    opts: ['Laserlesing', 'Magnetisk lesing', 'Flash-basert lagring', 'Raskere enn SSD'],
    correct: 0, cat: 'lagring'
  },
  {
    q: 'Hva er den primære hensikten med cache-minne?',
    opts: ['Permanent lagring av filer', 'Rask tilgang til ofte brukte data', 'Lagre OS-kjerne', 'Øke antall prosessorer'],
    correct: 1, cat: 'primær'
  },
  {
    q: 'Hvor sitter L1-cache?',
    opts: ['I CPU-kjernen', 'På hovedkortet', 'Egen brikke utenfor CPU', 'I RAM-modulen'],
    correct: 0, cat: 'primær'
  },
  {
    q: 'Hva stemmer om cache-hierarkiet L1/L2/L3?',
    opts: ['L2 er raskere enn L1', 'L1 er størst', 'L1 er raskest, L3 er størst', 'L3 sitter i CPU-kjernen'],
    correct: 2, cat: 'primær'
  },
  {
    q: 'Hva er en typisk ulempe med cache-minne?',
    opts: ['Høy pris per GB', 'Rask tilgang', 'Stor kapasitet', 'Sekvensiell tilgang'],
    correct: 0, cat: 'primær'
  },
  {
    q: 'Hva kjennetegner tertiærlagring?',
    opts: ['Rask tilgang', 'Brukes som arbeidsminne', 'Arkivlagring av store datamengder', 'Erstatning for RAM'],
    correct: 2, cat: 'lagring'
  },
  {
    q: 'Hvilken minnetype brukes som systemminne (hovedminne) i datamaskiner?',
    opts: ['SRAM', 'DRAM', 'ROM', 'Magnetbånd'],
    correct: 1, cat: 'primær'
  },
  {
    q: 'Hva brukes SRAM primært til?',
    opts: ['Sekundærlagring', 'Optisk lagring', 'Cache og registre', 'Arkivlagring'],
    correct: 2, cat: 'primær'
  },
  {
    q: 'Hva kjennetegner flyktig minne?',
    opts: ['Beholder data uten strøm', 'Inkluderer ROM', 'Inkluderer flash', 'Mister data når strømmen brytes'],
    correct: 3, cat: 'primær'
  },
  {
    q: 'Hva kjennetegner ikke-flyktig minne?',
    opts: ['Beholder data uten strøm', 'Mister data uten strøm', 'Inkluderer DRAM', 'Krever konstant strøm'],
    correct: 0, cat: 'lagring'
  },
  {
    q: 'Hva er den største fordelen med HDD fremfor SSD?',
    opts: ['Raskere tilgang', 'Ingen mekanikk', 'Billigere per GB', 'Bedre mot mekanisk støt'],
    correct: 2, cat: 'lagring'
  },
  {
    q: 'Hva brukes optiske medier typisk til?',
    opts: ['Daglig arbeidsminne', 'OS-oppstart', 'Backup og arkiv', 'Rask databehandling'],
    correct: 2, cat: 'lagring'
  },
  {
    q: 'Hva er typisk tilgangstid for SRAM?',
    opts: ['5–10 ms', '50–100 ns', '10–50 ns', '1–4 ns'],
    correct: 3, cat: 'primær'
  },
  {
    q: 'Hva er typisk tilgangstid for DRAM?',
    opts: ['10–50 ns', '1–4 ns', '50–100 ns', '5–10 ms'],
    correct: 0, cat: 'primær'
  },
  {
    q: 'Hva er magnetkjerneminne?',
    opts: ['En moderne SSD-type', 'En tidlig minneteknologi fra 1950–70-tallet', 'En type optisk lagring', 'Et SRAM-basert cache'],
    correct: 1, cat: 'lagring'
  },
  {
    q: 'Hva er de viktigste faktorene ved valg av minnetype?',
    opts: ['Farge og design', 'Merke og produsent', 'Hastighet, kostnad og kapasitet', 'Form og vekt'],
    correct: 2, cat: 'lagring'
  },
];
