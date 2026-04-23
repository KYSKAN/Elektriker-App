'use strict';
const QUIZ_META = {
  id: 'mikrokontroller',
  title: 'Mikrokontroller',
  subtitle: 'Bjørns Elektroniske',
  cats: {
    mcu:         { label: 'MCU og arkitektur',         color: '#5c7cfa' },
    grensesnitt: { label: 'Kommunikasjonsgrensesnitt', color: '#f59e0b' },
  }
};

const QUESTIONS = [
  {
    q: 'Hva er en mikrokontroller?',
    opts: ['Kun et minnekort', 'En liten datamaskin med CPU, minne og I/O-porter', 'En ren CPU uten minne', 'En type sensor'],
    correct: 1, cat: 'mcu'
  },
  {
    q: 'Hva inneholder en mikrokontroller?',
    opts: ['CPU og disk', 'RAM', 'CPU, RAM, ROM/Flash og I/O-porter', 'Sensorer'],
    correct: 2, cat: 'mcu'
  },
  {
    q: 'Når ble Intel 4004 utviklet?',
    opts: ['1971', '1974', '1980', '1978'],
    correct: 0, cat: 'mcu'
  },
  {
    q: 'Hva var den første kommersielle mikrokontrolleren?',
    opts: ['Intel 8086', 'PIC16C64', 'Motorola 68HC11', 'Intel 8048'],
    correct: 3, cat: 'mcu'
  },
  {
    q: 'Hva kjennetegner RAM i MCU?',
    opts: ['Er analog', 'Midlertidig lagring', 'Permanent lagring', 'Lagrer programkode'],
    correct: 1, cat: 'mcu'
  },
  {
    q: 'Hva kjennetegner Flash/ROM i MCU?',
    opts: ['Lagrer programkode permanent', 'Brukes som arbeidsminne', 'Er flyktig', 'Brukes som sensor'],
    correct: 0, cat: 'mcu'
  },
  {
    q: 'Hva brukes I/O-porter til?',
    opts: ['Generere strøm', 'Kjøle ned MCU', 'Kommunisere med eksterne enheter', 'Lagre data'],
    correct: 2, cat: 'mcu'
  },
  {
    q: 'Hva brukes timere til i MCU?',
    opts: ['Databasestyring', 'Internettprotokoller', 'Skjermrendering', 'Tidtaking og frekvensgenerering'],
    correct: 3, cat: 'mcu'
  },
  {
    q: 'Hva gjør ADC (Analog-to-Digital Converter)?',
    opts: ['Konverterer analogt signal til digitalt', 'Lagrer data', 'Styrer motorer', 'Konverterer digitalt til analogt'],
    correct: 0, cat: 'mcu'
  },
  {
    q: 'Hva gjør DAC (Digital-to-Analog Converter)?',
    opts: ['Konverterer analogt til digitalt', 'Konverterer digitalt til analogt', 'Lagrer kode', 'Driver kommunikasjon'],
    correct: 1, cat: 'mcu'
  },
  {
    q: 'Hvilken Flash-type brukes ofte til firmware i MCU?',
    opts: ['NAND-flash', 'NOR-flash', 'RAM-cache', 'EEPROM-array'],
    correct: 1, cat: 'mcu'
  },
  {
    q: 'Hva brukes NAND-flash oftest til?',
    opts: ['I/O-styring', 'Timere', 'Firmware', 'Lagring som SSD og USB'],
    correct: 3, cat: 'mcu'
  },
  {
    q: 'Hva er typisk for innebygde systemer (embedded systems)?',
    opts: ['Utfører spesifikke oppgaver', 'Krever GPU', 'Krever mye RAM', 'Generelle PC-oppgaver'],
    correct: 0, cat: 'mcu'
  },
  {
    q: 'Hva gjør MCU egnet for IoT-enheter?',
    opts: ['Krever stor GPU', 'Høyt strømforbruk', 'Lavt strømforbruk', 'Krever kraftig kjøling'],
    correct: 2, cat: 'mcu'
  },
  {
    q: 'Hvor brukes MCU i hjemmeelektronikk?',
    opts: ['Spillmotorer', 'Låser, motorer og skjermer', 'Databaseservere', 'Grafikkprosessorer'],
    correct: 1, cat: 'mcu'
  },
  {
    q: 'Hva brukes mikrokontrollere til i biler?',
    opts: ['Radio', 'Navigasjon', 'ABS og motorstyring', 'Lysstyring'],
    correct: 2, cat: 'mcu'
  },
  {
    q: 'Hva brukes kommunikasjonsgrensesnitt til i MCU?',
    opts: ['Koble MCU til andre enheter', 'Øke CPU-hastighet', 'Lagre data', 'Digitalisere motorer'],
    correct: 0, cat: 'mcu'
  },
  {
    q: 'Hva ble vanlig på 1990-tallet i MCU-utvikling?',
    opts: ['GPU-akselerasjon', 'Flash erstattet ROM', 'Magnetbånd som lagring', 'Lasersensorer'],
    correct: 1, cat: 'mcu'
  },
  {
    q: 'Hva kjennetegner SPI-grensesnittet?',
    opts: ['Halv-duplex', 'Asynkron overføring', 'Synkron full-duplex', 'Ingen klokkelinje'],
    correct: 2, cat: 'grensesnitt'
  },
  {
    q: 'Hvor mange ledninger bruker SPI?',
    opts: ['4 ledninger', '1 ledning', '6 ledninger', '2 ledninger'],
    correct: 0, cat: 'grensesnitt'
  },
  {
    q: 'Hvor mange ledninger brukes i I²C?',
    opts: ['4 ledninger', '3 ledninger', '1 ledning', '2 ledninger'],
    correct: 3, cat: 'grensesnitt'
  },
  {
    q: 'Hva er en ulempe med I²C sammenlignet med SPI?',
    opts: ['Ingen adressering', 'Langsommere enn SPI', 'Full-duplex', 'Krever mange ledninger'],
    correct: 1, cat: 'grensesnitt'
  },
  {
    q: 'Hva kjennetegner UART?',
    opts: ['Asynkron kommunikasjon', 'Synkron overføring', 'Ingen start/stoppbiter', 'Full-duplex med klokke'],
    correct: 0, cat: 'grensesnitt'
  },
  {
    q: 'Hva betyr full-duplex?',
    opts: ['Asynkron overføring', 'Motta data', 'Sende data', 'Sende og motta samtidig'],
    correct: 3, cat: 'grensesnitt'
  },
  {
    q: 'Hvilket kommunikasjonsgrensesnitt er asynkront?',
    opts: ['I²C', 'SPI', 'UART', 'ADC'],
    correct: 2, cat: 'grensesnitt'
  },
];
