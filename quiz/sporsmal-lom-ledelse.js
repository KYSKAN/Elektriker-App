// ════════════════════════════════════════════════════════════════
//  QUIZ-DATA: LØM Fagskole – Ledelse & Organisasjon
//  Format: se quiz/QUIZ-FORMAT.md for full dokumentasjon
//  28 spørsmål
// ════════════════════════════════════════════════════════════════

const QUIZ_META = {
  id: 'lom-ledelse',
  title: 'Ledelse & Org.',
  subtitle: 'LØM Fagskole',
  description: '28 spørsmål om Ledelse & Organisasjon fra LØM-pensumet på fagskole.',
  cats: {
    ledelse: { label: 'Ledelse & Organisasjon', color: '#f59e0b' }
  }
};

const QUESTIONS = [

  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva er det øverste behovet i Maslows behovspyramide?',
    opts: ['Sikkerhetsbehov', 'Anerkjennelse og status', 'Selvrealisering', 'Sosiale behov'],
    correct: 2,
    explain: 'Maslows pyramide (nedenfra): Fysiologiske behov → Sikkerhetsbehov → Sosiale behov → Anerkjennelse → Selvrealisering. Man må dekke lavere nivåer før høyere nivåer blir motiverende.'
  },
  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva er det laveste behovet i Maslows behovspyramide?',
    opts: ['Sosiale behov', 'Fysiologiske behov (mat, vann, søvn)', 'Sikkerhetsbehov', 'Anerkjennelse'],
    correct: 1,
    explain: 'Fysiologiske behov ligger nederst i pyramiden – mat, vann, søvn, varme. Disse må dekkes før sikkerhetsbehov og høyere behov blir aktuelle motivasjonsfaktorer.'
  },
  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva er hygienefaktorer i Herzbergs to-faktorteori?',
    opts: [
      'Faktorer som skaper sterk motivasjon og trivsel',
      'Faktorer som hindrer mistrivsel, men ikke skaper motivasjon i seg selv',
      'Faktorer knyttet til fysisk renhold på arbeidsplassen',
      'Faktorer som øker bedriftens lønnsomhet direkte'
    ],
    correct: 1,
    explain: 'Hygienefaktorer (lønn, arbeidsforhold, ledelse, trygghet) forhindrer mistrivsel hvis de er til stede – men de skaper ikke motivasjon alene. Motivasjonsfaktorer gjør det.'
  },
  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva er motivasjonsfaktorer i Herzbergs to-faktorteori?',
    opts: [
      'Lønn, arbeidsforhold og kollegaer',
      'Trygghet, permisjonsrettigheter og pensjonsordning',
      'Ansvar, anerkjennelse, personlig vekst og meningsfullt arbeid',
      'Arbeidskontrakt, arbeidstid og pauser'
    ],
    correct: 2,
    explain: 'Motivasjonsfaktorer er knyttet til selve arbeidsinnholdet: ansvar, anerkjennelse, læring og mestring. Disse skaper reell trivsel og motivasjon – i motsetning til hygienefaktorer.'
  },
  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva kjennetegner Teori X i McGregors X-Y-teori?',
    opts: [
      'Ansatte er selvmotiverte og ønsker ansvar',
      'Ansatte er kreative og trenger autonomi for å blomstre',
      'Ansatte er late, unngår ansvar og må kontrolleres nøye',
      'Ansatte motiveres primært av sosiale relasjoner på jobben'
    ],
    correct: 2,
    explain: 'Teori X antar at mennesker er grunnleggende late og unngår ansvar – ledelsen må overvåke og kontrollere. Teori Y er det motsatte: ansatte er indre motiverte og søker ansvar.'
  },
  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva kjennetegner Teori Y i McGregors X-Y-teori?',
    opts: [
      'Ansatte må kontrolleres og overvåkes',
      'Ansatte er selvmotiverte, søker ansvar og finner arbeid meningsfullt',
      'Ansatte er kun motivert av lønn',
      'Ansatte yter best med straff og belønning'
    ],
    correct: 1,
    explain: 'Teori Y: ansatte er indre motiverte, tar initiativ og ønsker ansvar. Ledere som tror på Teori Y delegerer mer, involverer og gir rom for utvikling. Motstykket er Teori X.'
  },
  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva er en linjestabsorganisasjon?',
    opts: [
      'En flat organisasjon uten noen formelle ledernivåer',
      'En organisasjon der alle ansatte er likestilte og tar beslutninger i fellesskap',
      'En organisasjon der linjeledelsen suppleres av stabsfunksjoner med rådgivende rolle',
      'En organisasjon som kun finnes i industribedrifter'
    ],
    correct: 2,
    explain: 'Linjestabsorganisasjonen kombinerer linjestrukturen (myndighet går nedover) med stabsenheter (HR, økonomi, IT) som gir faglige råd uten formell beslutningsmyndighet.'
  },
  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva kjennetegner en matriseorganisasjon?',
    opts: [
      'Ansatte har kun én leder med fullt ansvar',
      'Organisasjonen er bygd opp som en pyramide uten kryssende linjer',
      'Ansatte rapporterer til to ledere samtidig – f.eks. en funksjonsleder og en prosjektleder',
      'Ingen har formell myndighet'
    ],
    correct: 2,
    explain: 'I en matriseorganisasjon har ansatte to rapporteringslinjer (f.eks. faglig leder + prosjektleder). Det gir fleksibilitet, men kan også skape rollekonflikt og uklar myndighet.'
  },
  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva er forskjellen mellom formell og uformell organisasjon?',
    opts: [
      'Formell = stor bedrift, uformell = liten bedrift',
      'Formell = nedskrevne strukturer og roller; uformell = nettverk og relasjoner som oppstår spontant',
      'Formell = privat sektor, uformell = offentlig sektor',
      'Formell = faste ansatte, uformell = deltidsansatte'
    ],
    correct: 1,
    explain: 'Den formelle organisasjonen er det offisielle organisasjonskartet med roller og myndighetslinjer. Den uformelle oppstår naturlig gjennom vennskap, tillit og kollegiale grupperinger.'
  },
  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva kjennetegner en demokratisk lederstil?',
    opts: [
      'Lederen tar alle beslutninger alene og informerer etterpå',
      'Lederen delegerer alt uten å følge opp',
      'Lederen involverer de ansatte i beslutningsprosessene',
      'Lederen unngår konflikter ved å la alle gjøre som de vil'
    ],
    correct: 2,
    explain: 'Demokratisk (deltakende) lederstil = involvering og medbestemmelse. Autoritær = lederen bestemmer selv. La-det-skure (laissez-faire) = nesten ingen styring fra lederens side.'
  },
  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva kjennetegner en autoritær lederstil?',
    opts: [
      'Lederen involverer alle i beslutninger',
      'Lederen tar beslutninger alene og forventer at ansatte følger ordrer',
      'Lederen er fraværende og lar ting skje av seg selv',
      'Lederen coacher hver enkelt individuelt'
    ],
    correct: 1,
    explain: 'Autoritær lederstil kjennetegnes av ensidig beslutningstaking og tydelig hierarki. Kan fungere godt i krisesituasjoner eller med uerfarne ansatte, men gir lav medbestemmelse og kan dempe motivasjon.'
  },
  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva betyr laissez-faire-ledelse («la det skure»)?',
    opts: [
      'Lederen gir tett oppfølging og klare direktiver',
      'Lederen involverer ansatte i alle avgjørelser',
      'Lederen gir stor frihet og griper minimalt inn – ansatte styrer i stor grad selv',
      'Lederen prioriterer kun de mest erfarne medarbeiderne'
    ],
    correct: 2,
    explain: 'Laissez-faire ledelse gir høy autonomi. Kan fungere bra for erfarne, selvgående team, men kan føre til uklarhet, manglende retning og dårlig resultater hvis ansatte trenger støtte.'
  },
  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva er kjernen i Hersey og Blanchards situasjonsledelse?',
    opts: [
      'En god leder bruker alltid samme lederstil overfor alle',
      'Lederstilen bør tilpasses medarbeiderens kompetanse og motivasjonsnivå',
      'Den beste lederen er alltid den som er mest autoritær',
      'Situasjonsledelse handler kun om å håndtere kriser'
    ],
    correct: 1,
    explain: 'Situasjonsledelse sier at lederen bør tilpasse atferden til medarbeiderens «modenhet» – kombinasjonen av kompetanse og motivasjon. En uerfaren og usikker medarbeider trenger mer instruksjon enn en erfaren og motivert.'
  },
  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva menes med organisasjonskultur?',
    opts: [
      'Bedriftens offisielle regler, rutiner og prosedyrer',
      'Antall ansatte og avdelingsinndeling i organisasjonskartet',
      'De felles verdier, normer og antakelser som preger atferden i organisasjonen',
      'Bedriftens markedsposisjon og omdømme utad'
    ],
    correct: 2,
    explain: 'Organisasjonskultur er «slik gjør vi det her» – de uskrevne reglene og verdiene som påvirker beslutninger og atferd. En sterk, positiv kultur kan være et viktig konkurransefortrinn.'
  },
  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva er kommunikasjonsstøy?',
    opts: [
      'Høy musikk eller lydforstyrrelser på arbeidsplassen',
      'En konflikt mellom to ansatte som påvirker teamet',
      'Alt som forstyrrer eller forvrenger budskapet mellom sender og mottaker',
      'Manglende motivasjon til å kommunisere'
    ],
    correct: 2,
    explain: 'Støy i kommunikasjonsmodellen er alt som hindrer budskapet i å nå frem uforvrengt: fysisk støy, språkbarrierer, kulturelle misforståelser, stress, forutinntatthet osv.'
  },
  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva er forskjellen mellom verbal og non-verbal kommunikasjon?',
    opts: [
      'Verbal er skriftlig, non-verbal er muntlig',
      'Verbal bruker ord (tale/skrift); non-verbal bruker kroppsspråk, mimikk, tonefall og gester',
      'Verbal er formell, non-verbal er uformell',
      'Det er ingen praktisk forskjell'
    ],
    correct: 1,
    explain: 'Verbal kommunikasjon = selve ordene. Non-verbal = alt annet (kroppsholdning, blikk, tonefall, mimikk). Studier viser at en stor andel av et budskap tolkes gjennom det non-verbale.'
  },
  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva regulerer Arbeidsmiljøloven (AML)?',
    opts: [
      'Kun regler for oppsigelse og permisjon',
      'Kun regler for lønn og feriepenger',
      'Krav til arbeidsmiljø, arbeidstid, HMS og rettigheter for arbeidsgiver og arbeidstaker',
      'Kun regler for lærlinger og nyansatte'
    ],
    correct: 2,
    explain: 'AML setter rammer for fullt forsvarlig arbeidsmiljø: fysisk og psykososialt miljø, arbeidstid, medbestemmelse, HMS-krav, vern mot diskriminering og regler om oppsigelse.'
  },
  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva betyr HMS?',
    opts: [
      'Helse, Markedsføring og Service',
      'Helse, Miljø og Sikkerhet',
      'Human Management System',
      'Hjelp, Medbestemmelse og Samarbeid'
    ],
    correct: 1,
    explain: 'HMS = Helse, Miljø og Sikkerhet. Alle virksomheter plikter å arbeide systematisk med HMS (internkontroll) for å forebygge skader, sykdom og ulykker – og ivareta det ytre miljø.'
  },
  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva er verneombudets hovedoppgave?',
    opts: [
      'Å representere arbeidsgiver i lønnsforhandlinger',
      'Å ivareta arbeidstakernes interesser i saker som angår arbeidsmiljøet',
      'Å lede HR-avdelingen',
      'Å kontrollere at ansatte kommer tidsnok på jobb'
    ],
    correct: 1,
    explain: 'Verneombudet velges av de ansatte og skal se til at arbeidsmiljølovens krav følges. Alle virksomheter med minst 5 ansatte skal normalt ha verneombud (kan avtales bort under visse forhold).'
  },
  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva er hovedprinsippet bak LEAN-filosofien?',
    opts: [
      'Å øke antall ansatte slik at mer arbeid kan gjøres parallelt',
      'Å eliminere alle former for sløsing og skape mer verdi med færre ressurser',
      'Å outsource alle ikke-kjerneaktiviteter til underleverandører',
      'Å maksimere lagerbeholdning for å sikre jevn produksjon'
    ],
    correct: 1,
    explain: 'LEAN (opprinnelig Toyota Production System) handler om å identifisere og fjerne sløsing (muda): ventetid, overproduksjon, unødvendig transport, feil, overflødig lager m.m.'
  },
  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva er delegering?',
    opts: [
      'Å overføre en oppgave, men beholde alt ansvar selv',
      'Å overlate en oppgave til andre, inkludert nødvendig myndighet og ansvar',
      'Å la være å gjøre noe',
      'Å kreve overtid av ansatte'
    ],
    correct: 1,
    explain: 'God delegering innebærer at lederen overfører både oppgave, myndighet og ansvar. Delegering frigjør lederen til viktigere oppgaver, utvikler de ansatte og gir eierskap til resultatet.'
  },
  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva bør en god medarbeidersamtale handle om?',
    opts: [
      'Kun lønnsforhandling',
      'Kun advarsel og kritikk',
      'Utvikling, trivsel, mål, samarbeid og konkrete forbedringspunkter – i dialog',
      'Hvilke ansatte som skal sies opp'
    ],
    correct: 2,
    explain: 'Medarbeidersamtalen er en strukturert, planlagt samtale mellom leder og ansatt (gjerne årlig). Tema: arbeidssituasjon, mål, utvikling, samarbeid og eventuelle utfordringer – en toveis dialog.'
  },
  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva er endringsledelse?',
    opts: [
      'Å gjennomføre brå endringer uten informasjon',
      'Å lede ansatte og organisasjon gjennom en endringsprosess på en strukturert måte – med kommunikasjon, involvering og oppfølging',
      'Å bytte ut alle ansatte',
      'Å avvikle en bedrift'
    ],
    correct: 1,
    explain: 'Endringsledelse handler om å planlegge, kommunisere og følge opp endringer slik at de blir gjennomført og forankret. Uten god endringsledelse møtes endringer ofte av motstand og dårlige resultater.'
  },
  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva menes med transformasjonsledelse?',
    opts: [
      'En leder som gir detaljerte instruksjoner og kontrollerer utførelsen',
      'En leder som inspirerer, motiverer og utvikler ansatte til å prestere utover det forventede, gjerne gjennom en felles visjon',
      'En leder som kun fokuserer på kortsiktige mål',
      'En leder som aldri griper inn'
    ],
    correct: 1,
    explain: 'Transformasjonsledelse bygger på karisma, visjon, intellektuell stimulering og individuell hensyn. Motstykket er transaksjonsledelse, som bygger mer på bytteforhold (belønning for prestasjon).'
  },
  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva kjennetegner konstruktiv tilbakemelding (feedback)?',
    opts: [
      'Generell og svevende, gitt i plenum',
      'Personangrep som fokuserer på hva som er galt med personen',
      'Konkret, knyttet til atferd eller arbeid, gitt i tide og med tanke på utvikling',
      'Kun positiv og uten forbedringspunkter'
    ],
    correct: 2,
    explain: 'Konstruktiv feedback er konkret («jeg la merke til at rapporten manglet tallgrunnlag»), knyttet til atferd (ikke person), gitt i tide og framoverrettet. Både positiv og negativ feedback skal være klar og nyttig.'
  },
  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva er hensikten med en god rekrutteringsprosess?',
    opts: [
      'Å ansette så raskt som mulig uansett kompetanse',
      'Å finne den kandidaten som passer best til stillingen og organisasjonen, basert på krav og kultur',
      'Å alltid ansette internt',
      'Å alltid ansette eksternt'
    ],
    correct: 1,
    explain: 'En god rekruttering starter med stillingsanalyse og kravspesifikasjon, fortsetter med utlysning, screening, intervju, tester, referansesjekk og beslutning. Målet er riktig person på riktig plass.'
  },
  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva er konflikthåndtering på arbeidsplassen?',
    opts: [
      'Å ignorere konflikter i håp om at de løser seg selv',
      'Å identifisere, adressere og løse uenigheter på en konstruktiv måte – gjerne gjennom dialog og kompromiss',
      'Å alltid støtte den som klager høyest',
      'Å si opp den som er involvert'
    ],
    correct: 1,
    explain: 'God konflikthåndtering innebærer tidlig avklaring, aktiv lytting, fokus på sak framfor person, og konkrete løsninger. Uløste konflikter drenerer motivasjon og produktivitet.'
  },
  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva er coaching i en ledelsessammenheng?',
    opts: [
      'Å gi direkte ordrer om hvordan en oppgave skal løses',
      'Å stille spørsmål som hjelper medarbeideren å reflektere og finne sine egne løsninger',
      'Å overta arbeidet til den ansatte',
      'Å kritisere prestasjoner foran kollegaer'
    ],
    correct: 1,
    explain: 'Coaching bygger på tillit til at medarbeideren har svarene selv. Coachen stiller åpne spørsmål, utfordrer antakelser og støtter refleksjon – i motsetning til tradisjonell instruksjon.'
  }
];
