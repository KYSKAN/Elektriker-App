const QUIZ_META = {
  "id": "lom-ool-ledelse-1",
  "title": "Lederstil og organisasjon Del 1",
  "subtitle": "LØM Fagskole – Lederstil, Org.former & Kommunikasjon",
  "description": "29 spørsmål – Lederstil, Organisasjonsformer, Kommunikasjon.",
  "cats": {
    "lederstil": {
      "label": "Lederstil",
      "color": "#8b5cf6"
    },
    "org_former": {
      "label": "Organisasjonsformer",
      "color": "#3b82f6"
    },
    "kommunikasjon": {
      "label": "Kommunikasjon",
      "color": "#10b981"
    }
  }
};

const QUESTIONS = [
  {
    "id": 1,
    "cat": "lederstil",
    "catLabel": "Lederstil",
    "q": "Hva kjennetegner en demokratisk leder?",
    "opts": [
      "Fastsetter mål og retning alene, men forklarer begrunnelsen for de valg som er tatt",
      "Involverer medarbeiderne i beslutningsprosessen, men beholder det endelige ansvaret",
      "Delegerer beslutningsansvar fullt ut til teamet, og trekker seg tilbake fra hele prosessen",
      "Koordinerer gjennom formelle rutiner, standardiserte prosedyrer og tett rapportering"
    ],
    "correct": 1,
    "explain": "En demokratisk leder involverer medarbeiderne i beslutningsprosessen, men beholder det formelle ansvaret. Gir økt motivasjon og bedre beslutningskvalitet."
  },
  {
    "id": 2,
    "cat": "lederstil",
    "catLabel": "Lederstil",
    "q": "Hva kjennetegner laissez-faire-lederstil?",
    "opts": [
      "Lederen setter klare rammer, tydelige forventninger og følger opp resultatene tett",
      "Lederen involverer teamet aktivt i beslutninger og tar det fulle ansvaret for utfallet",
      "Lederen delegerer fullt ut og griper minimalt inn i medarbeidernes arbeid",
      "Lederen styrer gjennom mål og ytelsesbaserte belønningssystemer"
    ],
    "correct": 2,
    "explain": "Laissez-faire («la det skure») betyr at lederen i stor grad lar medarbeiderne styre seg selv og griper minimalt inn. Kan fungere godt for svært selvgående eksperter."
  },
  {
    "id": 3,
    "cat": "lederstil",
    "catLabel": "Lederstil",
    "q": "Hersey og Blanchards situasjonsledelse opererer med fire modenhetsnivåer. Hva kjennetegner M1?",
    "opts": [
      "Høy kompetanse og høy motivasjon – selvgående, fullt utviklet medarbeider",
      "Lav kompetanse, men høy motivasjon – entusiastisk nybegynner",
      "Høy kompetanse, men lav motivasjon – desillusjonert ekspert",
      "Lav kompetanse og lav motivasjon – umotivert, lite engasjert nybegynner"
    ],
    "correct": 1,
    "explain": "M1 = lav kompetanse, høy motivasjon (entusiastisk nybegynner). Anbefalt lederstil er instruerende (S1): fortell nøyaktig hva som skal gjøres og hvordan."
  },
  {
    "id": 4,
    "cat": "lederstil",
    "catLabel": "Lederstil",
    "q": "Hvilken lederstil anbefaler Hersey & Blanchard for en medarbeider på M4-nivå (høy kompetanse og høy motivasjon)?",
    "opts": [
      "Instruerende – definer oppgaven og følg opp underveis",
      "Coachende – still spørsmål og gi faglig tilbakemelding",
      "Støttende – lytt aktivt og anerkjenn innsatsen",
      "Delegerende – gi ansvar og trekk deg tilbake"
    ],
    "correct": 3,
    "explain": "M4 (høy kompetanse, høy motivasjon) = delegerende lederstil (S4). Medarbeideren er selvgående og trenger lite styring eller støtte."
  },
  {
    "id": 5,
    "type": "order",
    "cat": "lederstil",
    "catLabel": "Lederstil",
    "q": "Plasser Hersey & Blanchards fire modenhetsnivåer i riktig rekkefølge, fra lavest (M1) nederst til høyest (M4) øverst.",
    "items": [
      "Lav kompetanse, høy motivasjon – entusiastisk nybegynner",
      "Lav kompetanse, lav motivasjon – desillusjonert nybegynner",
      "Høy kompetanse, lav motivasjon – kapabel, men nølende",
      "Høy kompetanse, høy motivasjon – selvgående ekspert"
    ],
    "explain": "M1: lav kompetanse + høy motivasjon. M2: lav kompetanse + lav motivasjon. M3: høy kompetanse + lav motivasjon. M4: høy kompetanse + høy motivasjon (fullt selvgående)."
  },
  {
    "id": 6,
    "cat": "lederstil",
    "catLabel": "Lederstil",
    "q": "Hva skiller transformasjonsledelse fra transaksjonsledelse?",
    "opts": [
      "Transformasjonsledelse bruker primært belønning og straff som styringsvirkemiddel; transaksjonsledelse inspirerer gjennom felles visjon",
      "Transformasjonsledelse inspirerer og endrer verdier; transaksjonsledelse baserer seg på avtaler og belønning",
      "Transaksjonsledelse er tilpasset endring og usikkerhet; transformasjonsledelse passer best i stabil drift",
      "Transformasjonsledelse fokuserer på individuelle mål; transaksjonsledelse vektlegger kollektiv utvikling"
    ],
    "correct": 1,
    "explain": "Transformasjonsledelse motiverer gjennom visjon, verdier og inspirasjon, og skaper indre motivasjon. Transaksjonsledelse baserer seg på klare avtaler, mål og ytre belønning/straff."
  },
  {
    "id": 7,
    "type": "sort",
    "cat": "lederstil",
    "catLabel": "Lederstil",
    "q": "Sorter hvert kjennetegn under riktig ledelsesstil.",
    "bins": [
      {
        "id": "transform",
        "label": "Transformasjonsledelse",
        "color": "#8b5cf6"
      },
      {
        "id": "transaksj",
        "label": "Transaksjonsledelse",
        "color": "#3b82f6"
      }
    ],
    "items": [
      {
        "text": "Inspirerer gjennom visjon og felles verdier",
        "bin": "transform"
      },
      {
        "text": "Styrer via klare avtaler og belønning",
        "bin": "transaksj"
      },
      {
        "text": "Fremmer indre motivasjon og personlig vekst",
        "bin": "transform"
      },
      {
        "text": "Bruker ytre insentiver og konsekvenser",
        "bin": "transaksj"
      },
      {
        "text": "Endrer holdninger og skaper engasjement",
        "bin": "transform"
      },
      {
        "text": "Kontrollerer at avtalte mål er innfridd",
        "bin": "transaksj"
      }
    ],
    "explain": "Transformasjonsledelse: visjon, indre motivasjon, verdiendring, engasjement. Transaksjonsledelse: klare avtaler, ytre belønning og straff, resultatmåling."
  },
  {
    "id": 8,
    "cat": "lederstil",
    "catLabel": "Lederstil",
    "q": "Hva er coaching i ledersammenheng?",
    "opts": [
      "En direktiv metode der lederen angir løsningen, delegerer oppgaven og forventer selvstendig gjennomføring",
      "En prosess der lederen hjelper medarbeideren til å finne egne løsninger gjennom åpne spørsmål og refleksjon",
      "En strukturert evalueringssamtale basert på fastsatte mål og måltall der resultater gjennomgås",
      "En opplæringsteknikk der erfarne medarbeidere demonstrerer riktig fremgangsmåte"
    ],
    "correct": 1,
    "explain": "Coaching handler om å stille åpne spørsmål og skape refleksjon slik at medarbeideren selv finner løsninger og utvikler sin kompetanse. Lederen er fasilitator, ikke ekspert."
  },
  {
    "id": 9,
    "cat": "lederstil",
    "catLabel": "Lederstil",
    "q": "Hvilke to beskrivelser kjennetegner coaching som ledelsesmetode?",
    "opts": [
      "Stiller åpne spørsmål for å fremme refleksjon hos medarbeideren",
      "Gir detaljerte instruksjoner og forklarer trinn for trinn hva som skal gjøres",
      "Hjelper medarbeideren til å finne egne løsninger fremfor å servere svarene",
      "Evaluerer prestasjonene opp mot fastsatte krav og belønner de beste resultatene"
    ],
    "correct": [
      0,
      2
    ],
    "explain": "Coaching kjennetegnes av åpne spørsmål som fremmer refleksjon, og av at medarbeideren selv finner løsningene. Lederen er fasilitator – ikke instruktør eller evaluator."
  },
  {
    "id": 10,
    "cat": "lederstil",
    "catLabel": "Lederstil",
    "q": "Hva er hensikten med medarbeidersamtalen?",
    "opts": [
      "Å dokumentere avvik, uønsket atferd og hendelser for personalregisteret",
      "Å evaluere prestasjoner, sette mål og avklare utviklingsbehov i en planlagt toveis dialog",
      "Å orientere medarbeideren grundig om organisasjonens overordnede strategi, prioriteringer og fremtidsplaner",
      "Å gjennomgå lønns- og arbeidsvilkår, i henhold til gjeldende tariffavtale"
    ],
    "correct": 1,
    "explain": "Medarbeidersamtalen er et planlagt, toveis møte der leder og medarbeider evaluerer forrige periode, setter mål og planlegger utvikling. Begge parter forbereder seg."
  },
  {
    "id": 11,
    "cat": "lederstil",
    "catLabel": "Lederstil",
    "q": "Hva kjennetegner konstruktiv feedback?",
    "opts": [
      "Den er kort og generell, slik at budskapet ikke virker krenkende eller for direkte",
      "Den retter seg mot holdninger, personlige trekk og verdier for å gi helhetlig vurdering",
      "Den beskriver konkret observert atferd, konsekvenser og foreslår ønsket endring",
      "Den formidles skriftlig, arkiveres og inngår i prestasjonsdokumentasjonen"
    ],
    "correct": 2,
    "explain": "Konstruktiv feedback er konkret, beskriver observert atferd og dens konsekvenser, og antyder hva som bør endres – uten å angripe personen. Fokus på atferd, ikke person."
  },
  {
    "id": 12,
    "cat": "lederstil",
    "catLabel": "Lederstil",
    "q": "Hvilke to kjennetegner konstruktiv feedback?",
    "opts": [
      "Den er knyttet til konkret, observert atferd – ikke personlige egenskaper",
      "Den formidles helst skriftlig og arkiveres i prestasjonsdokumentasjonen",
      "Den peker på konsekvenser og antyder ønsket endring fremover",
      "Den er kort og generell for ikke å virke krenkende overfor mottakeren"
    ],
    "correct": [
      0,
      2
    ],
    "explain": "Konstruktiv feedback (1) tar utgangspunkt i konkret, observert atferd (ikke person), og (2) peker på konsekvenser og antyder ønsket endring. Den er spesifikk og fremoverskuende."
  },
  {
    "id": 13,
    "cat": "org_former",
    "catLabel": "Organisasjonsformer",
    "q": "Hva kjennetegner en linjestabsorganisasjon?",
    "opts": [
      "Alle ansatte inngår i tverrfaglige prosjektteam, og rapporterer direkte til prosjektleder fremfor linjeleder",
      "Linjen har beslutningsmyndighet, mens staben er rådgivende uten beslutningsmyndighet",
      "Staben har overordnet instruksjonsmyndighet, og bestemmer faglige spørsmål over linjelederne",
      "Organisasjonen er delt i geografiske regioner, med egne resultatenheter og lokal styring"
    ],
    "correct": 1,
    "explain": "I en linjestabsorganisasjon har linjen (leder→medarbeider) beslutningsmyndighet. Staben (f.eks. HR, økonomi, HMS) er faglig rådgivende uten instruksjonsmyndighet over linjen."
  },
  {
    "id": 14,
    "cat": "org_former",
    "catLabel": "Organisasjonsformer",
    "q": "Hva er en sentral ulempe med matriseorganisering?",
    "opts": [
      "Svak ressursutnyttelse, fordi kompetanse er låst til faste avdelinger",
      "Medarbeidere kan ha to ledere, noe som skaper uklar myndighet og lojalitetskonflikter",
      "Organisasjonsformen gir dårlig fleksibilitet, og vanskeliggjør tverrfaglig samarbeid",
      "Strukturen er for enkel, og gir for lite spesialisering i de ulike fagfunksjonene"
    ],
    "correct": 1,
    "explain": "I en matriseorganisasjon har medarbeidere både en linjeleder og en prosjektleder. Dette kan gi uklare ansvarsforhold og lojalitetskonflikter – «to herrer å tjene»."
  },
  {
    "id": 15,
    "cat": "org_former",
    "catLabel": "Organisasjonsformer",
    "q": "Hva kjennetegner en prosjektorganisasjon?",
    "opts": [
      "En varig og stabil struktur med faste fagavdelinger, klart definerte roller og permanent lederskap over tid",
      "Midlertidig organisering rundt et bestemt mål, der deltakere hentes fra linjeorganisasjonen",
      "En flat, teambasert struktur uten definerte roller eller ansvarsområder",
      "Organisering etter produktlinje, der hvert produkt har sin egen ledergruppe"
    ],
    "correct": 1,
    "explain": "Prosjektorganisasjoner er midlertidige og samler ressurser fra ulike deler av virksomheten for å nå et spesifikt mål innen tid, budsjett og kvalitet. Oppløses etter avslutning."
  },
  {
    "id": 16,
    "cat": "org_former",
    "catLabel": "Organisasjonsformer",
    "q": "Hva er forskjellen mellom formell og uformell organisasjon?",
    "opts": [
      "Den formelle er det offisielle hierarkiet og strukturen; den uformelle er de faktiske relasjonene og kommunikasjonsmønstrene som oppstår naturlig",
      "Den formelle ivaretar de menneskelige og sosiale behovene i virksomheten; den uformelle sikrer effektiv ressursstyring og resultatkontroll",
      "Den uformelle organisasjonen er nedfelt i stillingsbeskrivelser og organisasjonskart; den formelle oppstår spontant gjennom sosiale nettverk blant ansatte",
      "Det er en teoretisk distinksjon uten praktisk relevans, da formell og uformell struktur alltid overlapper"
    ],
    "correct": 0,
    "explain": "Formell organisasjon = nedfelt i organisasjonskart og stillingsbeskrivelser. Uformell organisasjon = de sosiale nettverkene og kommunikasjonsmønstrene som oppstår naturlig blant ansatte."
  },
  {
    "id": 17,
    "type": "sort",
    "cat": "org_former",
    "catLabel": "Organisasjonsformer",
    "q": "Sorter hvert kjennetegn under riktig organisasjonsform.",
    "bins": [
      {
        "id": "linjestab",
        "label": "Linjestabsorg.",
        "color": "#3b82f6"
      },
      {
        "id": "matrise",
        "label": "Matriseorg.",
        "color": "#8b5cf6"
      },
      {
        "id": "prosjekt",
        "label": "Prosjektorg.",
        "color": "#10b981"
      }
    ],
    "items": [
      {
        "text": "Linjen bestemmer, staben er rådgivende",
        "bin": "linjestab"
      },
      {
        "text": "Midlertidig – oppløses etter avslutning",
        "bin": "prosjekt"
      },
      {
        "text": "Medarbeider kan ha to ledere",
        "bin": "matrise"
      },
      {
        "text": "Stab uten instruksjonsmyndighet over linjen",
        "bin": "linjestab"
      },
      {
        "text": "Ressurser samles for ett spesifikt mål",
        "bin": "prosjekt"
      },
      {
        "text": "Risiko for lojalitetskonflikter",
        "bin": "matrise"
      }
    ],
    "explain": "Linjestab: linjen bestemmer, staben rådgir uten instruksjonsmyndighet. Matrise: to ledere, risiko for lojalitetskonflikter. Prosjekt: midlertidig, samler ressurser mot ett mål."
  },
  {
    "id": 18,
    "cat": "org_former",
    "catLabel": "Organisasjonsformer",
    "q": "Hva er EL&IT Forbundets funksjon?",
    "opts": [
      "Å fastsette lønnsnivå og arbeidsvilkår for alle tekniske yrker i offentlig sektor",
      "Å utstede fagbrev og godkjenne lærebedrifter og opplæringskontorer i elektro- og IKT-faget",
      "Å representere arbeidstakerne i elektrobransjen og forhandle tariffavtaler på deres vegne",
      "Å håndheve arbeidsmiljølovgivningen og føre tilsyn med arbeidsplassene"
    ],
    "correct": 2,
    "explain": "EL&IT Forbundet er fagforbundet for bl.a. elektrikere. De organiserer arbeidstakerne og forhandler tariffavtaler (bl.a. Landsoverenskomsten) overfor NHO Elektro."
  },
  {
    "id": 19,
    "cat": "org_former",
    "catLabel": "Organisasjonsformer",
    "q": "Hva er NHO Elektro sin rolle?",
    "opts": [
      "En tilsynsmyndighet som kontrollerer elsikkerheten på vegne av Direktoratet for samfunnssikkerhet",
      "En bransjeorganisasjon for norske produsenter, importører og distributører av elektrisk utstyr og komponenter",
      "Et sertifiseringsorgan for elektrikere og faglige prøvenemnder i opplæringsløpet",
      "Arbeidsgiverorganisasjonen for elektroentreprenører og NHOs forhandlingsmotpart overfor EL&IT Forbundet"
    ],
    "correct": 3,
    "explain": "NHO Elektro er arbeidsgiverorganisasjonen for elektroentreprenører. De forhandler tariffavtaler, bl.a. Landsoverenskomsten, overfor EL&IT Forbundet."
  },
  {
    "id": 20,
    "cat": "org_former",
    "catLabel": "Organisasjonsformer",
    "q": "Hva er endringskynisme i organisasjoner (Amundsen & Kongsvik)?",
    "opts": [
      "Et sterkt internt press om hurtig omstilling og tilpasning, drevet frem av utenforliggende konkurranse og rask teknologiskifte",
      "En konstruktiv, løsningsorientert holdning til endring som over tid styrker virksomhetens innovasjonsevne",
      "En kritisk og skeptisk holdning til planlagte endringer, basert på negative erfaringer fra tidligere endringsprosesser",
      "En bevisst ledelsestaktikk der endringstakten bremses, for å sikre god forankring i organisasjonen"
    ],
    "correct": 2,
    "explain": "Endringskynisme (Amundsen & Kongsvik) er en kritisk og skeptisk holdning til endring. Den oppstår gjerne når ansatte gjentatte ganger opplever at endringer ikke gir lovede resultater, eller at de ikke involveres."
  },
  {
    "id": 21,
    "cat": "org_former",
    "catLabel": "Organisasjonsformer",
    "q": "Hvilke fem dimensjoner beskriver graden av endringskynisme hos ansatte?",
    "opts": [
      "Behov for endringen, endringshistorie, praksis i gjennomføringen, synliggjøring av resultater og grad av medvirkning",
      "Endringsmål, ressursallokering, tidshorisont, risikotoleranse og systematisk kompetanseutvikling blant de berørte",
      "Visjon, lederforankring, kommunikasjonsstrategi, kulturell beredskap i organisasjonen og strukturell tilpasning",
      "Planlegging, pilotgjennomføring, evaluering, korrigering og bred implementering av tiltakene"
    ],
    "correct": 0,
    "explain": "Amundsen & Kongsvik beskriver fem dimensjoner som forklarer endringskynisme: (1) behov for endring, (2) endringshistorie, (3) praksis i gjennomføringen, (4) synliggjøring av resultater, (5) grad av medvirkning."
  },
  {
    "id": 22,
    "cat": "kommunikasjon",
    "catLabel": "Kommunikasjon",
    "q": "Hva er forskjellen mellom verbal og non-verbal kommunikasjon?",
    "opts": [
      "Verbal kommunikasjon skjer skriftlig, gjennom tekst og dokumenter (formelt); non-verbal kun gjennom samtale",
      "Verbal er formell, strukturert og regelbasert; non-verbal er uformell og situasjonsbestemt",
      "Verbal bruker ord (muntlig og skriftlig); non-verbal bruker kroppsspråk, mimikk, tonefall og gester",
      "Non-verbal kommunikasjon er mer presis, entydig og klar (mindre tolkningsrom) enn verbal"
    ],
    "correct": 2,
    "explain": "Verbal kommunikasjon = ord (tale og skrift). Non-verbal = alt annet: kroppsspråk, mimikk, øyekontakt, tonefall, avstand og gester. Ca. 55–65 % av kommunikasjon er ikke-verbal."
  },
  {
    "id": 23,
    "cat": "kommunikasjon",
    "catLabel": "Kommunikasjon",
    "q": "Hva er kommunikasjonsstøy?",
    "opts": [
      "Bakgrunnslyd og fysiske forstyrrelser som svekker konsentrasjonen på arbeidsplassen",
      "Overdreven mengde informasjon som overstiger mottakerens kapasitet til å bearbeide den",
      "Mellommenneskelige spenninger og misforståelser som oppstår i konfliktsituasjoner",
      "Alt som forstyrrer eller forvrenger budskapet mellom sender og mottaker"
    ],
    "correct": 3,
    "explain": "Støy i kommunikasjon er alt som hindrer budskapet i å nå frem slik det var ment – fysisk støy, språkbarrierer, følelsesmessige filtre, kulturelle misforståelser eller tekniske feil."
  },
  {
    "id": 24,
    "cat": "kommunikasjon",
    "catLabel": "Kommunikasjon",
    "q": "Hva innebærer intern rekruttering fremfor ekstern rekruttering?",
    "opts": [
      "Intern rekruttering betyr å hente kandidater fra egne ansatte – gir motivasjon og kulturkjennskap, men kan begrense nytenkning",
      "Intern rekruttering er raskere og gir sterkere lojalitet – men krever nesten like mye onboarding og opplæring som ekstern rekruttering",
      "Ekstern rekruttering er gjennomgående billigere – gir raskere onboarding, opplæring og tilpasning",
      "Intern rekruttering forutsetter alltid formell utlysning, og ekstern kunngjøring av stillingen i henhold til lovkrav"
    ],
    "correct": 0,
    "explain": "Intern rekruttering gir motivasjon (synlige karrieremuligheter) og god kulturforståelse. Ulempen er at det kan gi ensretting. Ekstern rekruttering bringer friske øyne og ny kompetanse, men krever mer onboarding."
  },
  {
    "id": 25,
    "cat": "kommunikasjon",
    "catLabel": "Kommunikasjon",
    "q": "Hva er de fem effektene av å involvere ansatte i endringsprosesser?",
    "opts": [
      "Raskere gjennomføring, lavere kostnader, færre prosessfeil, økt produktivitet og bedre dokumentasjon",
      "Kortere møtetid, tydeligere rollefordeling, klarere beslutningslinjer, redusert sykefravær og økt effektivitet",
      "Lavere turnover, styrket omdømme, bedre rekrutteringsgrunnlag, sterkere kunderelasjoner og økt innovasjon",
      "Økt motivasjon, økt tilfredshet, bedre kvalitet på beslutninger, økt aksept for endringen og kompetanseheving"
    ],
    "correct": 3,
    "explain": "De fem effektene av involvering: (1) økt motivasjon, (2) økt tilfredshet, (3) bedre beslutningskvalitet, (4) økt aksept for endringen, (5) kompetanseheving hos de involverte."
  },
  {
    "id": 26,
    "cat": "kommunikasjon",
    "catLabel": "Kommunikasjon",
    "q": "Hva menes med konflikthåndtering i organisasjoner?",
    "opts": [
      "Å identifisere, forstå og løse uenigheter på en konstruktiv måte som ivaretar relasjoner og organisasjonens mål",
      "Å forebygge uenigheter gjennom tydelige regler, klare prosedyrer og konsekvent og rettferdig disiplinering",
      "Å overlate til partene selv å finne en løsning, med lederen som passiv observatør uten innblanding",
      "Å omorganisere teamet og bytte arbeidsgruppe slik at parter i konflikt ikke lenger jobber tett"
    ],
    "correct": 0,
    "explain": "God konflikthåndtering handler om å adressere konflikter konstruktivt: anerkjenne uenigheten, forstå begge parters perspektiv og finne løsninger som ivaretar relasjoner og produktivitet."
  },
  {
    "id": 27,
    "cat": "kommunikasjon",
    "catLabel": "Kommunikasjon",
    "q": "Hva er delegering, og hva er en viktig forutsetning for at det skal fungere?",
    "opts": [
      "Delegering er å fordele rutineoppgaver jevnt, mellom tilgjengelige medarbeidere; forutsetning: oppgavene må være klart, skriftlig beskrevet",
      "Delegering er en midlertidig overføring av arbeidsoppgaver til medarbeidere; forutsetning: lederen kan alltid hente tilbake oppgavene, ved behov",
      "Delegering betyr at lederen instruerer medarbeideren detaljert, kontrollerer og følger opp hvert enkelt steg",
      "Delegering er å overføre oppgaver og beslutningsmyndighet til medarbeidere; forutsetning: myndighet, ansvar og ressurser må følge med oppgaven"
    ],
    "correct": 3,
    "explain": "Delegering innebærer å overføre oppgaver med tilhørende myndighet og ressurser. Lederen beholder det overordnede ansvaret (ansvar kan ikke delegeres), men myndigheten til å handle overføres."
  },
  {
    "id": 28,
    "cat": "kommunikasjon",
    "catLabel": "Kommunikasjon",
    "q": "Hvilke to elementer er nødvendige for at delegering skal fungere godt?",
    "opts": [
      "Myndighet til å treffe beslutninger innenfor det delegerte ansvaret",
      "En skriftlig statusrapport til leder etter hvert enkelt steg i prosessen",
      "Tilstrekkelige ressurser og kompetanse til å løse oppgaven selvstendig",
      "En garanti fra lederen om at oppgaven kan gjennomføres uten feil"
    ],
    "correct": [
      0,
      2
    ],
    "explain": "For at delegering skal fungere må myndighet (beslutningsrett) og ressurser (tid, penger, kompetanse) følge med oppgaven. Uten disse kan medarbeideren ikke lykkes, uansett vilje."
  },
  {
    "id": 29,
    "cat": "kommunikasjon",
    "catLabel": "Kommunikasjon",
    "q": "Hva er beste virkemiddel mot motstand mot endring, ifølge Kanter (1992)?",
    "opts": [
      "Hyppig og tydelig informasjon fra ledelsen om endringens formål og forventede gevinster",
      "Klare konsekvenser for medarbeidere som aktivt motarbeider gjennomføringen",
      "Tidlig og reell involvering av de berørte partene i planleggingen",
      "Å knytte endringsvillighet til prestasjonsvurdering og karriereutvikling"
    ],
    "correct": 2,
    "explain": "Kanter (1992) viser at motstand mot endring reduseres mest effektivt gjennom tidlig og reell involvering av de berørte. Informasjon alene er ikke tilstrekkelig – folk vil ha innflytelse, ikke bare beskjed."
  }
];
