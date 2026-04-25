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
    motivasjon:  { label: 'Motivasjonsteori',     color: '#f59e0b' },
    lederstil:   { label: 'Lederstil',            color: '#ec4899' },
    organisasjon:{ label: 'Organisasjonsformer',  color: '#00a8e8' },
    personal:    { label: 'Personal & utvikling', color: '#8b5cf6' },
    regelverk:   { label: 'Regelverk & HMS',      color: '#10b981' }
  }
};

const QUESTIONS = [

  {
    cat: 'motivasjon', catLabel: 'Motivasjonsteori',
    q: 'Hva er det øverste behovet i Maslows behovspyramide?',
    opts: ['Sikkerhetsbehov', 'Anerkjennelse og status', 'Selvrealisering', 'Sosiale behov'],
    correct: 2,
    img: SVG_MASLOW,
    explain: 'Maslows pyramide (nedenfra): Fysiologiske behov → Sikkerhetsbehov → Sosiale behov → Anerkjennelse → Selvrealisering. Man må dekke lavere nivåer før høyere motiveres. For en elektriker betyr dette f.eks.: trygg lønn og fast ansettelse (sikkerhet) må være på plass før faglig utvikling og anerkjennelse kan motivere fullt ut.'
  },
  {
    cat: 'motivasjon', catLabel: 'Motivasjonsteori',
    q: 'Hva er det laveste behovet i Maslows behovspyramide?',
    opts: ['Sosiale behov for vennskap, familie og gruppefellesskap', 'Fysiologiske behov (mat, vann, søvn)', 'Sikkerhetsbehov for trygghet og stabilitet i hverdagen', 'Anerkjennelse og status fra omgivelsene'],
    correct: 1,
    img: SVG_MASLOW,
    explain: 'Fysiologiske behov ligger nederst i pyramiden – mat, vann, søvn, varme. Disse må dekkes før sikkerhetsbehov og høyere behov blir aktuelle motivasjonsfaktorer.'
  },
  {
    cat: 'motivasjon', catLabel: 'Motivasjonsteori',
    q: 'Hva er hygienefaktorer i Herzbergs to-faktorteori?',
    opts: [
      'Faktorer som aktivt skaper sterk motivasjon, trivsel og engasjement i arbeidet',
      'Faktorer som hindrer mistrivsel, men ikke skaper motivasjon i seg selv',
      'Faktorer knyttet til fysisk renhold og arbeidshygiene på arbeidsplassen',
      'Faktorer som øker bedriftens lønnsomhet og produktivitet direkte'
    ],
    correct: 1,
    img: SVG_HERZBERG,
    explain: 'Hygienefaktorer (lønn, arbeidsforhold, ledelse, trygghet) forhindrer mistrivsel hvis de er til stede – men de skaper ikke motivasjon alene. For elektrikere: fast lønn, verneutstyr og oversiktlige arbeidstider er hygienefaktorer. Motivasjonsfaktorer gjør det.'
  },
  {
    cat: 'motivasjon', catLabel: 'Motivasjonsteori',
    q: 'Hva er motivasjonsfaktorer i Herzbergs to-faktorteori?',
    opts: [
      'Lønn, arbeidsforhold og kollegaer',
      'Trygghet, pensjonsordning, permisjonsrettigheter og gode velferdsordninger',
      'Ansvar, anerkjennelse, personlig vekst og meningsfullt arbeid',
      'Arbeidskontrakt, arbeidstid, pauser og overtidsregler'
    ],
    correct: 2,
    img: SVG_HERZBERG,
    explain: 'Motivasjonsfaktorer er knyttet til selve arbeidsinnholdet: ansvar, anerkjennelse, læring og mestring. For elektrikere: selvstendige oppdrag, fagbrev/sertifisering, tillit fra leder og det å mestre krevende installasjoner er typiske motivasjonsfaktorer.'
  },
  {
    cat: 'motivasjon', catLabel: 'Motivasjonsteori',
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
    cat: 'motivasjon', catLabel: 'Motivasjonsteori',
    q: 'Hva kjennetegner Teori Y i McGregors X-Y-teori?',
    opts: [
      'Ansatte er grunnleggende late og motvillige, og må overvåkes og kontrolleres nøye av leder',
      'Ansatte er selvmotiverte, søker ansvar og finner arbeid meningsfullt',
      'Ansatte er kun motivert av lønn og materielle goder',
      'Ansatte yter best med klare belønnings- og straffestrukturer'
    ],
    correct: 1,
    explain: 'Teori Y: ansatte er indre motiverte, tar initiativ og ønsker ansvar. Ledere som tror på Teori Y delegerer mer, involverer og gir rom for utvikling. Motstykket er Teori X.'
  },
  {
    cat: 'organisasjon', catLabel: 'Organisasjonsformer',
    q: 'Hva er en linjestabsorganisasjon?',
    opts: [
      'En helt flat organisasjon uten noen som helst formelle ledernivåer eller hierarki',
      'En organisasjon der alle ansatte er fullt likestilte og tar alle beslutninger i fellesskap gjennom avstemning',
      'En organisasjon der linjeledelsen suppleres av stabsfunksjoner med rådgivende rolle',
      'En organisasjonsform som utelukkende finnes i industribedrifter og produksjonsvirksomheter'
    ],
    correct: 2,
    explain: 'Linjestabsorganisasjonen kombinerer linjestrukturen (myndighet går nedover) med stabsenheter (HR, økonomi, IT) som gir faglige råd uten formell beslutningsmyndighet. Mange mellomstor elektrobedrifter bruker denne modellen: montører rapporterer til arbeidsleder, mens HMS-ansvarlig og økonomi fungerer som stabsfunksjoner.'
  },
  {
    cat: 'organisasjon', catLabel: 'Organisasjonsformer',
    q: 'Hva kjennetegner en matriseorganisasjon?',
    opts: [
      'Ansatte har alltid kun én direkte leder med klart og fullt personalansvar',
      'Organisasjonen er hierarkisk bygd opp som en pyramide, uten at rapporteringslinjer krysses',
      'Ansatte rapporterer til to ledere samtidig – f.eks. en funksjonsleder og en prosjektleder',
      'Ingen i organisasjonen har noen form for formell myndighet eller beslutningsmyndighet'
    ],
    correct: 2,
    explain: 'I en matriseorganisasjon har ansatte to rapporteringslinjer (f.eks. faglig leder + prosjektleder). Det gir fleksibilitet, men kan også skape rollekonflikt og uklar myndighet.'
  },
  {
    cat: 'organisasjon', catLabel: 'Organisasjonsformer',
    q: 'Hva er forskjellen mellom formell og uformell organisasjon?',
    opts: [
      'Formell = stor bedrift med mange ansatte; uformell = liten bedrift med få folk',
      'Formell = nedskrevne strukturer og roller; uformell = nettverk og relasjoner som oppstår spontant',
      'Formell = privat sektor med klare hierarkier; uformell = flat offentlig sektor uten struktur',
      'Formell = faste heltidsansatte; uformell = deltids- og midlertidige ansatte'
    ],
    correct: 1,
    explain: 'Den formelle organisasjonen er det offisielle organisasjonskartet med roller og myndighetslinjer. Den uformelle oppstår naturlig gjennom vennskap, tillit og kollegiale grupperinger.'
  },
  {
    cat: 'lederstil', catLabel: 'Lederstil',
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
    cat: 'lederstil', catLabel: 'Lederstil',
    q: 'Hva kjennetegner en autoritær lederstil?',
    opts: [
      'Lederen involverer alle ansatte aktivt i alle beslutninger som tas i virksomheten',
      'Lederen tar beslutninger alene og forventer at ansatte følger ordrer',
      'Lederen er fraværende i det daglige og lar alle ting skje helt av seg selv',
      'Lederen coacher og støtter hver enkelt ansatt individuelt og svært tett'
    ],
    correct: 1,
    explain: 'Autoritær lederstil kjennetegnes av ensidig beslutningstaking og tydelig hierarki. Kan fungere godt i krisesituasjoner eller med uerfarne ansatte, men gir lav medbestemmelse og kan dempe motivasjon.'
  },
  {
    cat: 'lederstil', catLabel: 'Lederstil',
    q: 'Hva betyr laissez-faire-ledelse («la det skure»)?',
    opts: [
      'Lederen gir svært tett og kontinuerlig oppfølging med konkrete, detaljerte direktiver for hvert steg',
      'Lederen involverer og konsulterer alle ansatte grundig i samtlige avgjørelser som tas',
      'Lederen gir stor frihet og griper minimalt inn – ansatte styrer i stor grad selv',
      'Lederen prioriterer ressursene og oppmerksomheten kun mot de aller mest erfarne medarbeiderne'
    ],
    correct: 2,
    explain: 'Laissez-faire ledelse gir høy autonomi. Kan fungere bra for erfarne, selvgående team, men kan føre til uklarhet, manglende retning og dårlig resultater hvis ansatte trenger støtte.'
  },
  {
    cat: 'lederstil', catLabel: 'Lederstil',
    q: 'Hva er kjernen i Hersey og Blanchards situasjonsledelse?',
    opts: [
      'En god leder bør bruke den samme faste lederstilen uavhengig av medarbeider og situasjon',
      'Lederstilen bør tilpasses medarbeiderens kompetanse og motivasjonsnivå',
      'Den beste lederen er den som er mest autoritær og bestemt',
      'Situasjonsledelse handler primært om å håndtere akutte kriser og nødsituasjoner'
    ],
    correct: 1,
    explain: 'Situasjonsledelse sier at lederen bør tilpasse atferden til medarbeiderens «modenhet» – kombinasjonen av kompetanse og motivasjon. En lærling i første opplæringsår trenger tett instruksjon og oppfølging. En erfaren montør med svennebrev trenger mer autonomi og delegering.'
  },
  {
    cat: 'organisasjon', catLabel: 'Organisasjonsformer',
    q: 'Hva menes med organisasjonskultur?',
    opts: [
      'Bedriftens offisielle nedskrevne regler, rutiner og formelle prosedyrer for all drift',
      'Antall ansatte, avdelingsstrukturen og myndighetsfordelingen slik den fremgår av organisasjonskartet',
      'De felles verdier, normer og antakelser som preger atferden i organisasjonen',
      'Bedriftens markedsposisjon, merkevare og omdømme sett utenfra av kunder og konkurrenter'
    ],
    correct: 2,
    explain: 'Organisasjonskultur er «slik gjør vi det her» – de uskrevne reglene og verdiene som påvirker beslutninger og atferd. En sterk, positiv kultur kan være et viktig konkurransefortrinn.'
  },
  {
    cat: 'personal', catLabel: 'Personal & utvikling',
    q: 'Hva er kommunikasjonsstøy?',
    opts: [
      'Høy musikk, støy fra maskiner eller andre lydforstyrrelser som preger arbeidsplassen fysisk',
      'En konflikt mellom to eller flere ansatte som påvirker hele teamets fungering og samarbeid',
      'Alt som forstyrrer eller forvrenger budskapet mellom sender og mottaker',
      'Manglende motivasjon og vilje til å kommunisere åpent med kollegaer og ledere'
    ],
    correct: 2,
    explain: 'Støy i kommunikasjonsmodellen er alt som hindrer budskapet i å nå frem uforvrengt: fysisk støy, språkbarrierer, kulturelle misforståelser, stress, forutinntatthet osv.'
  },
  {
    cat: 'personal', catLabel: 'Personal & utvikling',
    q: 'Hva er forskjellen mellom verbal og non-verbal kommunikasjon?',
    opts: [
      'Verbal kommunikasjon er skriftlig; non-verbal kommunikasjon er muntlig og direkte',
      'Verbal bruker ord (tale/skrift); non-verbal bruker kroppsspråk, mimikk, tonefall og gester',
      'Verbal kommunikasjon er formell og offisiell; non-verbal er uformell og ubevisst',
      'Det er ingen praktisk forskjell – begge formene er like effektive i all kommunikasjon'
    ],
    correct: 1,
    explain: 'Verbal kommunikasjon = selve ordene. Non-verbal = alt annet (kroppsholdning, blikk, tonefall, mimikk). Studier viser at en stor andel av et budskap tolkes gjennom det non-verbale.'
  },
  {
    cat: 'regelverk', catLabel: 'Regelverk & HMS',
    q: 'Hva regulerer Arbeidsmiljøloven (AML)?',
    opts: [
      'Regler for oppsigelse, avskjed og permisjon – gjelder ikke arbeidsmiljø og arbeidstid',
      'Regler som gjelder lønn, feriepenger og utbetaling av overtid',
      'Krav til arbeidsmiljø, arbeidstid, HMS og rettigheter for arbeidsgiver og arbeidstaker',
      'Regler som gjelder for lærlinger, nyansatte og ansatte i prøvetid'
    ],
    correct: 2,
    explain: 'AML setter rammer for fullt forsvarlig arbeidsmiljø: fysisk og psykososialt miljø, arbeidstid, medbestemmelse, HMS-krav, vern mot diskriminering og regler om oppsigelse.'
  },
  {
    cat: 'regelverk', catLabel: 'Regelverk & HMS',
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
    cat: 'regelverk', catLabel: 'Regelverk & HMS',
    q: 'Hva er verneombudets hovedoppgave?',
    opts: [
      'Å representere arbeidsgiveren og ledelsen i alle lønns- og tarifforhandlinger med fagforeninger',
      'Å ivareta arbeidstakernes interesser i saker som angår arbeidsmiljøet',
      'Å lede og administrere HR-avdelingens daglige arbeid og personalbehandling',
      'Å kontrollere og registrere at alle ansatte møter presis og tidsnok på jobb hver dag'
    ],
    correct: 1,
    explain: 'Verneombudet velges av de ansatte og skal se til at arbeidsmiljølovens krav følges. Alle virksomheter med minst 5 ansatte skal normalt ha verneombud (kan avtales bort under visse forhold).'
  },
  {
    cat: 'organisasjon', catLabel: 'Organisasjonsformer',
    q: 'Hva er hovedprinsippet bak LEAN-filosofien?',
    opts: [
      'Å øke antallet ansatte slik at mer arbeid kan gjøres parallelt og raskere',
      'Å eliminere alle former for sløsing og skape mer verdi med færre ressurser',
      'Å outsource alle ikke-kjerneaktiviteter som regnskap, HR og logistikk til spesialiserte underleverandører',
      'Å maksimere lagerbeholdning og sikre store buffere for å oppnå jevn produksjon hele året'
    ],
    correct: 1,
    explain: 'LEAN (opprinnelig Toyota Production System) handler om å identifisere og fjerne sløsing (muda): ventetid, overproduksjon, unødvendig transport, feil, overflødig lager m.m.'
  },
  {
    cat: 'personal', catLabel: 'Personal & utvikling',
    q: 'Hva er delegering?',
    opts: [
      'Å overføre en konkret oppgave til en annen person, men selv beholde fullt ansvar og all myndighet',
      'Å overlate en oppgave til andre, inkludert nødvendig myndighet og ansvar',
      'Å bevisst la være å gjøre noe og utsette oppgaver uten begrunnelse',
      'Å pålegge og kreve overtid av ansatte for å få unna arbeidsoppgaver'
    ],
    correct: 1,
    explain: 'God delegering innebærer at lederen overfører både oppgave, myndighet og ansvar. Delegering frigjør lederen til viktigere oppgaver, utvikler de ansatte og gir eierskap til resultatet.'
  },
  {
    cat: 'personal', catLabel: 'Personal & utvikling',
    q: 'Hva bør en god medarbeidersamtale handle om?',
    opts: [
      'Lønnsforhandling og diskusjon om fremtidige lønnstillegg og bonusordninger',
      'Advarsel, kritikk og gjennomgang av feil og mangler den ansatte har begått',
      'Utvikling, trivsel, mål, samarbeid og konkrete forbedringspunkter – i dialog',
      'Å avklare hvilke ansatte som eventuelt skal sies opp eller omplasseres fremover'
    ],
    correct: 2,
    explain: 'Medarbeidersamtalen er en strukturert, planlagt samtale mellom leder og ansatt (gjerne årlig). Tema: arbeidssituasjon, mål, utvikling, samarbeid og eventuelle utfordringer – en toveis dialog.'
  },
  {
    cat: 'lederstil', catLabel: 'Lederstil',
    q: 'Hva er endringsledelse?',
    opts: [
      'Å gjennomføre nødvendige og brå organisasjonsendringer raskt, uten forhåndsinformasjon til de ansatte',
      'Å lede ansatte og organisasjon gjennom en endringsprosess strukturert med kommunikasjon og oppfølging',
      'Å bytte ut alle eksisterende ansatte og rekruttere et helt nytt team',
      'Å avvikle og legge ned en bedrift som ikke lenger er lønnsom'
    ],
    correct: 1,
    explain: 'Endringsledelse handler om å planlegge, kommunisere og følge opp endringer slik at de blir gjennomført og forankret. Uten god endringsledelse møtes endringer ofte av motstand og dårlige resultater.'
  },
  {
    cat: 'lederstil', catLabel: 'Lederstil',
    q: 'Hva menes med transformasjonsledelse?',
    opts: [
      'En leder som nøye planlegger, gir svært detaljerte instruksjoner og kontrollerer nøye at utførelsen er korrekt',
      'En leder som inspirerer, motiverer og utvikler ansatte gjennom en felles visjon',
      'En leder som fokuserer sterkt på kortsiktige resultater og kvartalsvise mål',
      'En leder som sjelden griper inn og overlater det meste til de ansatte uten tydelig styring'
    ],
    correct: 1,
    explain: 'Transformasjonsledelse bygger på karisma, visjon, intellektuell stimulering og individuell hensyn. Motstykket er transaksjonsledelse, som bygger mer på bytteforhold (belønning for prestasjon).'
  },
  {
    cat: 'personal', catLabel: 'Personal & utvikling',
    q: 'Hva kjennetegner konstruktiv tilbakemelding (feedback)?',
    opts: [
      'Generell, vag og svevende tilbakemelding gitt høylytt i plenum foran alle kollegaer',
      'Personangrep som fokuserer på feil og mangler ved personen, uten å knytte det til arbeidet',
      'Konkret, knyttet til atferd eller arbeid, gitt i tide og med tanke på utvikling',
      'Positiv ros uten konstruktive forbedringspunkter eller utviklingsområder'
    ],
    correct: 2,
    explain: 'Konstruktiv feedback er konkret («jeg la merke til at rapporten manglet tallgrunnlag»), knyttet til atferd (ikke person), gitt i tide og framoverrettet. Både positiv og negativ feedback skal være klar og nyttig.'
  },
  {
    cat: 'personal', catLabel: 'Personal & utvikling',
    q: 'Hva er hensikten med en god rekrutteringsprosess?',
    opts: [
      'Å ansette så raskt som mulig, uavhengig av kompetanse og kulturell tilpasning',
      'Å finne den kandidaten som passer best til stillingen og organisasjonen, basert på krav og kultur',
      'Å foretrekke interne kandidater fremfor eksterne, uavhengig av kompetansenivå',
      'Å hente inn eksterne kandidater fremfor å rekruttere internt i organisasjonen'
    ],
    correct: 1,
    explain: 'En god rekruttering starter med stillingsanalyse og kravspesifikasjon, fortsetter med utlysning, screening, intervju, tester, referansesjekk og beslutning. Målet er riktig person på riktig plass.'
  },
  {
    cat: 'personal', catLabel: 'Personal & utvikling',
    q: 'Hva er konflikthåndtering på arbeidsplassen?',
    opts: [
      'Å bevisst ignorere og nedprioritere alle konflikter i håp om at de løser seg selv over tid',
      'Å identifisere og løse uenigheter konstruktivt gjennom dialog og kompromiss',
      'Å gi støtte og medhold til den ansatte som klager høyest og mest',
      'Å løse konflikten raskt ved å si opp den eller de ansatte som er involvert'
    ],
    correct: 1,
    explain: 'God konflikthåndtering innebærer tidlig avklaring, aktiv lytting, fokus på sak framfor person, og konkrete løsninger. Uløste konflikter drenerer motivasjon og produktivitet.'
  },
  {
    cat: 'lederstil', catLabel: 'Lederstil',
    q: 'Hva er coaching i en ledelsessammenheng?',
    opts: [
      'Å gi svært konkrete og detaljerte ordrer til medarbeideren om nøyaktig hvordan oppgaven skal løses steg for steg',
      'Å stille spørsmål som hjelper medarbeideren å reflektere og finne sine egne løsninger',
      'Å overta arbeidet til den ansatte og utføre det selv i stedet',
      'Å kritisere og korrigere prestasjoner offentlig foran alle kollegaer'
    ],
    correct: 1,
    explain: 'Coaching bygger på tillit til at medarbeideren har svarene selv. Coachen stiller åpne spørsmål, utfordrer antakelser og støtter refleksjon – i motsetning til tradisjonell instruksjon.'
  },

  {
    cat: 'organisasjon', catLabel: 'Organisasjonsformer',
    q: 'Hva kjennetegner prosjektbasert arbeid, slik det er vanlig i elektroinstallasjons-bransjen?',
    opts: [
      'Arbeidet er identisk og repetitivt fra dag til dag, uten noen definert start- eller sluttdato',
      'Arbeidet er tidsavgrenset med definert mål, budsjett og ressurser – avsluttes når oppdraget er ferdig',
      'Prosjekter er alltid uten noen form for fast leder eller koordinerende ansvar',
      'Prosjektarbeid krever ingen planlegging og kan bare settes i gang uten forberedelse'
    ],
    correct: 1,
    explain: 'El-installasjonsprosjekter (f.eks. el-anlegg i en ny skole eller boligblokk) har tydelig start- og sluttdato, definert budsjett, kalkulerte materialkostnader og et team av montører. Prosjektlederen koordinerer fremdrift, bemanning og økonomi. Avvik mot kalkyle må håndteres løpende.'
  },

  {
    cat: 'regelverk', catLabel: 'Regelverk & HMS',
    q: 'Hva er arbeidsgiversiden i elektrobransjen organisert som?',
    opts: [
      'EL & IT Forbundet',
      'Fellesforbundet',
      'NHO Elektro',
      'Arbeidstilsynet'
    ],
    correct: 2,
    explain: 'NHO Elektro er arbeidsgiverorganisasjonen for elektroinstallasjons-bedrifter i Norge og forhandler tariffavtalen (Landsoverenskomsten) mot EL & IT Forbundet på arbeidstakersiden. En arbeidsleder/daglig leder i en el-bedrift bør kjenne til denne strukturen.'
  }
];
