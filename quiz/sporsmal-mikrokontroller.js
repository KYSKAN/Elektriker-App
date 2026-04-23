'use strict';
const QUIZ_META = {
  id: 'mikrokontroller',
  title: 'Mikrokontroller',
  subtitle: 'Quiz Elektroniske (Bjørns)',
  cats: {
    mcu:         { label: 'MCU og arkitektur',         color: '#5c7cfa' },
    grensesnitt: { label: 'Kommunikasjonsgrensesnitt', color: '#f59e0b' },
  }
};

const QUESTIONS = [
  {
    cat: 'mcu',
    q: 'Hva er en mikrokontroller?',
    opts: [
      'Kun et minnekort',
      'En liten datamaskin med CPU, minne og I/O-porter',
      'En ren CPU uten minne',
      'En type sensor'
    ],
    correct: 1,
    explain: 'En mikrokontroller (MCU) er en liten datamaskin på én enkelt integrert krets som inneholder CPU, minne (RAM og ROM/Flash) og I/O-porter for å styre eksterne enheter.'
  },
  {
    cat: 'mcu',
    q: 'Hva inneholder en mikrokontroller?',
    opts: [
      'Kun CPU og disk',
      'Kun RAM',
      'CPU, RAM, ROM/Flash og I/O-porter',
      'Kun sensorer'
    ],
    correct: 2,
    explain: 'MCU inneholder CPU (prosessor), RAM (midlertidig lagring), Flash/ROM (permanent programlagring) og I/O-porter for kommunikasjon med omverdenen — alt på én brikke.'
  },
  {
    cat: 'mcu',
    q: 'Når ble Intel 4004 utviklet?',
    opts: ['1974', '1980', '1971', '1978'],
    correct: 2,
    explain: 'Intel 4004 kom i 1971 og var den første kommersielle mikroprosessoren, utviklet av Intel. Den markerte starten på en ny æra innen databehandling.'
  },
  {
    cat: 'mcu',
    q: 'Hva var den første kommersielle mikrokontrolleren?',
    opts: ['Intel 8086', 'Intel 8048', 'PIC16C64', 'Motorola 68HC11'],
    correct: 1,
    explain: 'Intel 8048 fra 1978 var den første kommersielle mikrokontrolleren. Den ble blant annet brukt i tastaturer og satte standarden for fremtidige MCU-er.'
  },
  {
    cat: 'mcu',
    q: 'Hva kjennetegner RAM i MCU?',
    opts: [
      'Er analog',
      'Permanent lagring',
      'Firmware-lagring',
      'Midlertidig lagring'
    ],
    correct: 3,
    explain: 'RAM (Random Access Memory) er flyktig og lagrer variabler og data midlertidig mens programmet kjører. Dataene forsvinner når strømmen slås av.'
  },
  {
    cat: 'mcu',
    q: 'Hva kjennetegner Flash/ROM i MCU?',
    opts: [
      'Brukes som arbeidsminne',
      'Er flyktig',
      'Brukes som sensor',
      'Lagrer programkode permanent'
    ],
    correct: 3,
    explain: 'Flash/ROM er ikke-flyktig og lagrer firmware (programkoden) permanent. Koden beholdes selv uten strøm, og leses av CPU-en ved oppstart.'
  },
  {
    cat: 'mcu',
    q: 'Hva brukes I/O-porter til?',
    opts: [
      'Generere strøm',
      'Kjøle ned MCU',
      'Lagre data',
      'Kommunisere med eksterne enheter'
    ],
    correct: 3,
    explain: 'I/O-porter (Input/Output) brukes til å kommunisere med og styre eksterne enheter som sensorer, motorer, skjermer og andre komponenter.'
  },
  {
    cat: 'mcu',
    q: 'Hva brukes timere til i MCU?',
    opts: [
      'Databasestyring',
      'Internettprotokoller',
      'Skjermrendering',
      'Tidtaking og frekvensgenerering'
    ],
    correct: 3,
    explain: 'Timere i MCU brukes til tidtaking, frekvensgenerering og PWM-signaler. De er essensielle for å styre tidspresise oppgaver som motorstyring og kommunikasjonsprotokoll-timing.'
  },
  {
    cat: 'mcu',
    q: 'Hva gjør ADC?',
    opts: [
      'Lagrer data',
      'Konverterer analogt til digitalt',
      'Styrer motorer',
      'Konverterer digitalt til analogt'
    ],
    correct: 1,
    explain: 'ADC (Analog-to-Digital Converter) konverterer analoge signaler (f.eks. fra en temperatursensor) til digitale verdier som MCU-en kan behandle.'
  },
  {
    cat: 'mcu',
    q: 'Hva gjør DAC?',
    opts: [
      'Konverterer analogt til digitalt',
      'Konverterer digitalt til analogt',
      'Lagrer kode',
      'Driver kommunikasjon'
    ],
    correct: 1,
    explain: 'DAC (Digital-to-Analog Converter) gjør digitale verdier om til analoge signaler, for eksempel for å styre en høyttaler eller produsere en analog utgangsspenning.'
  },
  {
    cat: 'grensesnitt',
    q: 'Hva kjennetegner SPI?',
    opts: [
      'Halv-duplex',
      'Synkron full-duplex',
      'Asynkron',
      'Ingen klokkelinje'
    ],
    correct: 1,
    explain: 'SPI (Serial Peripheral Interface) er synkront (bruker klokkelinje) og full-duplex (sender og mottar data samtidig). Det er høyhastighets og enkelt å implementere.'
  },
  {
    cat: 'grensesnitt',
    q: 'Hvor mange ledninger bruker SPI?',
    opts: ['1', '6', '4', '2'],
    correct: 2,
    explain: 'SPI bruker minst 4 ledninger: SCK (klokke), MOSI (data fra master), MISO (data fra slave) og CS/SS (chip select). Ved flere slaveenheter trengs én ekstra CS per enhet.'
  },
  {
    cat: 'grensesnitt',
    q: 'Hvor mange ledninger brukes i I²C?',
    opts: ['2', '4', '3', '1'],
    correct: 0,
    explain: 'I²C bruker kun 2 ledninger: SDA (datalianje) og SCL (klokkeline). Til tross for dette kan mange enheter kobles til samme buss ved hjelp av unike adresser.'
  },
  {
    cat: 'grensesnitt',
    q: 'Hva er en ulempe med I²C?',
    opts: [
      'Ingen adresser',
      'Full-duplex',
      'Krever mange ledninger',
      'Langsommere enn SPI'
    ],
    correct: 3,
    explain: 'I²C er tregere enn SPI og støtter kun halv-duplex. Protokollen er også mer kompleks med adressering og acknowledge-mekanismer, noe som gir høyere overhead.'
  },
  {
    cat: 'grensesnitt',
    q: 'Hva kjennetegner UART?',
    opts: [
      'Synkron',
      'Asynkron kommunikasjon',
      'Ingen start/stoppbiter',
      'Full-duplex med klokke'
    ],
    correct: 1,
    explain: 'UART (Universal Asynchronous Receiver-Transmitter) er asynkront — det bruker ingen felles klokkelinje. I stedet synkroniseres overføringen med start- og stoppbiter samt forhåndsavtalt baudrate.'
  },
  {
    cat: 'mcu',
    q: 'Hva brukes mikrokontrollere til i biler?',
    opts: [
      'Kun radio',
      'ABS og motorstyring',
      'Kun navigasjon',
      'Kun lysstyring'
    ],
    correct: 1,
    explain: 'MCU-er er kritiske i moderne biler og brukes i ABS-bremser, motorstyring, airbag-systemer og infotainment. En typisk bil kan inneholde over 100 mikrokontrollere.'
  },
  {
    cat: 'mcu',
    q: 'Hvilken Flash-type brukes ofte til firmware?',
    opts: ['NOR-flash', 'NAND-flash', 'RAM', 'Cache'],
    correct: 0,
    explain: 'NOR-flash gir rask tilfeldig leseaksess og er derfor foretrukket for lagring av firmware i MCU-er og rutere. Koden kan kjøres direkte fra NOR-flash (execute-in-place).'
  },
  {
    cat: 'mcu',
    q: 'Hva brukes NAND-flash oftest til?',
    opts: ['I/O', 'Timere', 'Lagring som SSD og USB', 'Firmware'],
    correct: 2,
    explain: 'NAND-flash er optimalisert for høy lagringstetthet og brukes i masselagringsenheter som SSD-er, USB-pinner og minnekort. Det er billigere per GB enn NOR-flash.'
  },
  {
    cat: 'mcu',
    q: 'Hva er typisk for innebygde systemer?',
    opts: [
      'Utfører spesifikke oppgaver',
      'Krever GPU',
      'Krever mye RAM',
      'Generelle PC-oppgaver'
    ],
    correct: 0,
    explain: 'Innebygde systemer (embedded systems) er designet for å utføre én eller få dedikerte oppgaver. De er optimalisert for lav pris, lite strømforbruk og kompakt størrelse.'
  },
  {
    cat: 'mcu',
    q: 'Hva gjør MCU egnet for IoT?',
    opts: [
      'Krever stor GPU',
      'Lavt strømforbruk',
      'Høyt strømforbruk',
      'Krever kraftig kjøling'
    ],
    correct: 1,
    explain: 'MCU-er har lavt strømforbruk og kan gå i dvalemodus mellom målinger, noe som gjør dem ideelle for batteridrevne IoT-enheter som smarte sensorer og termostater.'
  },
  {
    cat: 'mcu',
    q: 'Hvor brukes MCU i hjemmeelektronikk?',
    opts: [
      'Spillmotorer',
      'Databaseservere',
      'Låser, motorer, skjermer',
      'Grafikkprosessorer'
    ],
    correct: 2,
    explain: 'MCU-er styrer hverdagselektronikk som vaskemaskiner, smarte låser, mikrobølgeovner og TV-er. De håndterer alt fra brukergrensesnitt til motorstyring og kommunikasjon.'
  },
  {
    cat: 'grensesnitt',
    q: 'Hva brukes kommunikasjonsgrensesnitt til?',
    opts: [
      'Koble MCU til andre enheter',
      'Øke CPU-hastighet',
      'Lagre data',
      'Digitalisere motorer'
    ],
    correct: 0,
    explain: 'Kommunikasjonsgrensesnitt som SPI, I²C og UART brukes til å koble MCU-en til moduler og sensorer som GPS, display, Bluetooth og andre mikrokontrollere.'
  },
  {
    cat: 'grensesnitt',
    q: 'Hva betyr full-duplex?',
    opts: [
      'Asynkron kun',
      'Kun motta',
      'Sende og motta samtidig',
      'Kun sende'
    ],
    correct: 2,
    explain: 'Full-duplex betyr toveis kommunikasjon som skjer samtidig — enheten kan sende og motta data på samme tid. SPI er full-duplex, mens I²C er halv-duplex.'
  },
  {
    cat: 'grensesnitt',
    q: 'Hvilket grensesnitt er asynkront?',
    opts: ['I²C', 'UART', 'ADC', 'SPI'],
    correct: 1,
    explain: 'UART er asynkront — det krever ingen felles klokkelinje. Sender og mottaker er enige om baudrate på forhånd, og start/stoppbiter markerer begynnelsen og slutten av en dataramme.'
  },
  {
    cat: 'mcu',
    q: 'Hva ble vanlig på 1990-tallet i MCU?',
    opts: [
      'GPU-akselerasjon',
      'Flash erstattet ROM',
      'Magnetbånd',
      'Lasersensorer'
    ],
    correct: 1,
    explain: 'På 1990-tallet ble Flash-minne standard i MCU-er og erstattet maskeprogrammert ROM. Dette gjorde det mulig å oppdatere firmware uten å bytte brikken.'
  },
];
