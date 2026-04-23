'use strict';
const QUIZ_META = {
  id: 'tallsystemer',
  title: 'Tallsystemer',
  subtitle: 'Quiz Elektroniske (Bjørns)',
  cats: {
    konvertering: { label: 'Konvertering mellom baser', color: '#5c7cfa' },
    binær:        { label: 'Binær og heksadesimal',     color: '#f59e0b' },
  }
};

const QUESTIONS = [
  // ── Konvertering mellom baser ──
  {
    q: 'Konverter 1106₇ til base 10.',
    opts: ['391', '398', '405', '386'],
    correct: 1, cat: 'konvertering'
  },
  {
    q: 'Konverter 1C4₁₆ til base 10.',
    opts: ['448', '460', '452', '444'],
    correct: 2, cat: 'konvertering'
  },
  {
    q: 'Konverter 139₁₆ til base 7.',
    opts: ['625', '616', '634', '532'],
    correct: 0, cat: 'konvertering'
  },
  {
    q: 'Konverter 145₇ til base 16 (heksadesimal).',
    opts: ['4A', '51', '52', '53'],
    correct: 2, cat: 'konvertering'
  },
  {
    q: 'Konverter 325₇ til base 16 (heksadesimal).',
    opts: ['A5', 'A6', 'A7', 'B6'],
    correct: 1, cat: 'konvertering'
  },
  {
    q: 'Konverter 153₇ til base 10.',
    opts: ['84', '87', '90', '78'],
    correct: 1, cat: 'konvertering'
  },
  {
    q: 'Konverter 730₈ til base 10.',
    opts: ['472', '468', '480', '464'],
    correct: 0, cat: 'konvertering'
  },
  {
    q: 'Konverter 241₇ til base 8 (oktal).',
    opts: ['175', '177', '200', '176'],
    correct: 1, cat: 'konvertering'
  },
  {
    q: 'Konverter 68₁₀ til base 7.',
    opts: ['124', '125', '126', '134'],
    correct: 1, cat: 'konvertering'
  },
  {
    q: 'Konverter 252₁₀ til base 8 (oktal).',
    opts: ['374', '373', '375', '364'],
    correct: 0, cat: 'konvertering'
  },
  {
    q: 'Konverter B6₁₆ til base 8 (oktal).',
    opts: ['265', '266', '267', '276'],
    correct: 1, cat: 'konvertering'
  },
  {
    q: 'Konverter 315₇ til base 16 (heksadesimal).',
    opts: ['9E', '9F', 'A0', '8F'],
    correct: 1, cat: 'konvertering'
  },
  {
    q: 'Konverter 40₁₆ til base 10.',
    opts: ['60', '64', '66', '68'],
    correct: 1, cat: 'konvertering'
  },
  {
    q: 'Konverter 61₁₆ til base 7.',
    opts: ['166', '165', '167', '156'],
    correct: 0, cat: 'konvertering'
  },
  {
    q: 'Konverter 506₇ til base 10.',
    opts: ['248', '254', '245', '251'],
    correct: 3, cat: 'konvertering'
  },
  {
    q: 'Konverter 1E6₁₆ til base 7.',
    opts: ['1262', '1263', '1264', '1253'],
    correct: 1, cat: 'konvertering'
  },
  {
    q: 'Konverter 3456₈ til base 10.',
    opts: ['1838', '1834', '1842', '1828'],
    correct: 0, cat: 'konvertering'
  },
  {
    q: 'Konverter 2025₁₀ til base 7.',
    opts: ['5621', '5622', '5623', '4622'],
    correct: 1, cat: 'konvertering'
  },

  // ── Binær og heksadesimal ──
  {
    q: 'Konverter 10101011₂ til heksadesimal.',
    opts: ['AA', 'AB', 'AC', 'BA'],
    correct: 1, cat: 'binær'
  },
  {
    q: 'Konverter 297₁₀ til binær.',
    opts: ['100100001', '100101001', '100101011', '101001001'],
    correct: 1, cat: 'binær'
  },
  {
    q: 'Konverter 1E6₁₆ til binær.',
    opts: ['111100100', '111100110', '111101110', '110100110'],
    correct: 1, cat: 'binær'
  },
  {
    q: 'Konverter 202₁₀ til binær.',
    opts: ['11001010', '11001000', '11001011', '10001010'],
    correct: 0, cat: 'binær'
  },
  {
    q: 'Konverter 11000011₂ til base 10.',
    opts: ['193', '195', '196', '192'],
    correct: 1, cat: 'binær'
  },
  {
    q: 'Konverter 111100100₂ til heksadesimal.',
    opts: ['1E5', '1D4', '1F4', '1E4'],
    correct: 3, cat: 'binær'
  },
  {
    q: 'Konverter 110011110₂ til oktal (base 8).',
    opts: ['626', '636', '637', '646'],
    correct: 1, cat: 'binær'
  },
  {
    q: 'Konverter 111011100₂ til base 10.',
    opts: ['472', '476', '480', '468'],
    correct: 1, cat: 'binær'
  },
  {
    q: 'Konverter 113₁₆ til binær.',
    opts: ['100010011', '100010010', '100010111', '100100011'],
    correct: 0, cat: 'binær'
  },
  {
    q: 'Konverter 1101100₂ til oktal (base 8).',
    opts: ['153', '154', '155', '164'],
    correct: 1, cat: 'binær'
  },
  {
    q: 'Konverter 11111₂ til base 7.',
    opts: ['42', '43', '44', '41'],
    correct: 1, cat: 'binær'
  },
  {
    q: 'Konverter 7A3F₁₆ til binær.',
    opts: ['0111100000111111', '0111101000111111', '0111101000111110', '0110101000111111'],
    correct: 1, cat: 'binær'
  },
];
