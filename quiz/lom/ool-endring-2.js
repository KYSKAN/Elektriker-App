const QUIZ_META = {
  "id": "lom-ool-endring-2",
  "title": "Endringsledelse Del 2",
  "subtitle": "LØM Fagskole – Interessenter & OU/TQL",
  "description": "18 spørsmål – Interessenter og motstand, OU, TKL, LEAN og Senge.",
  "cats": {
    "interessenter": {
      "label": "Interessenter og motstand",
      "color": "#ef4444"
    },
    "ou_tql": {
      "label": "OU, TKL, LEAN og Senge",
      "color": "#10b981"
    }
  }
};

const QUESTIONS = [
  {
    "id": 15,
    "cat": "interessenter",
    "catLabel": "Interessenter og motstand",
    "q": "Hva er en interessentanalyse i endringsarbeid?",
    "opts": [
      "En vurdering av hvilke avdelinger som berøres mest – de som trenger ekstra støtte og oppfølging",
      "En kartlegging av alle berørte parter etter to dimensjoner: makt og interesse – for å prioritere involvering",
      "En analyse av markedets reaksjon på organisatoriske endringer – omdømmerisiko og ekstern legitimitet",
      "Et verktøy for å kartlegge interne konflikter og avgjøre hvem som bør involveres aktivt i endrings- og løsningsarbeidet"
    ],
    "correct": 1,
    "explain": "Interessentanalysen kartlegger alle som berøres av endringen og plasserer dem i en 2×2 matrise etter makt (høy/lav) og interesse (høy/lav) – for å avgjøre hvor mye innsats som bør legges i å involvere dem."
  },
  {
    "id": 16,
    "cat": "interessenter",
    "catLabel": "Interessenter og motstand",
    "q": "Hvem bør prioriteres høyest i en interessentanalyse?",
    "opts": [
      "De med lav makt og høy interesse",
      "De med høy makt og lav interesse",
      "De med høy makt og høy interesse",
      "De med lav makt og lav interesse"
    ],
    "correct": 2,
    "explain": "Interessenter med høy makt og høy interesse er \"nøkkelspillere\" som bør involveres aktivt. De har både mulighet til å blokkere endringen og sterk motivasjon til å gjøre det."
  },
  {
    "id": 17,
    "cat": "interessenter",
    "catLabel": "Interessenter og motstand",
    "q": "Hvilke er de vanligste årsakene til motstand mot endring ifølge Kanter (1992)?",
    "opts": [
      "Tap av kontroll, høy usikkerhet, mangel på informasjon og frykt for å tape noe man har",
      "Manglende digital kompetanse og vansker med å tilpasse seg nye teknologiske systemer",
      "Uenighet om endringsstrategien og ønske om andre prioriteringer i bedriften",
      "Dårlig timing, for høyt endringstempo og for utilstrekkelige ressurser til gjennomføringen"
    ],
    "correct": 0,
    "explain": "Kanter identifiserte motstand mot endring som drevet av: tap av kontroll, usikkerhet om fremtiden, mangel på tilstrekkelig informasjon, frykt for å miste noe man verdsetter, og bekymring for inkompetanse."
  },
  {
    "id": 18,
    "cat": "interessenter",
    "catLabel": "Interessenter og motstand",
    "q": "Hvilke to er vanlige årsaker til motstand mot endring ifølge Kanter (1992)?",
    "opts": [
      "Tap av kontroll og redusert selvbestemmelse i arbeidshverdagen",
      "Mangel på digital kompetanse og kunnskap om nye systemer og verktøy",
      "Frykt for å miste noe man verdsetter eller har bygd opp over tid",
      "Uenighet om de prioriteringene og budsjettrammene endringen krever"
    ],
    "correct": [
      0,
      2
    ],
    "explain": "Kanter (1992) peker på tap av kontroll og frykt for å miste noe man verdsetter som sentrale drivere bak motstand mot endring – begge handler om en opplevd trussel mot det kjente og trygge."
  },
  {
    "id": 19,
    "cat": "interessenter",
    "catLabel": "Interessenter og motstand",
    "q": "Hva er det beste virkemiddelet for å redusere motstand mot endring?",
    "opts": [
      "Å gjennomføre endringen i rolig tempo, steg for steg, slik at ansatte rekker å tilpasse seg",
      "Å gi berørte medarbeidere ekstra tid og ressurser til å mestre den nye situasjonen",
      "Tidlig og ærlig kommunikasjon kombinert med reell involvering av berørte parter",
      "Å sikre at ledere er synlige og tilgjengelige gjennom hele gjennomføringsfasen"
    ],
    "correct": 2,
    "explain": "Tidlig, ærlig og god kommunikasjon om hvorfor endringen skjer og hva den innebærer, kombinert med reell involvering av de berørte, er det mest effektive virkemiddelet mot motstand."
  },
  {
    "id": 20,
    "cat": "ou_tql",
    "catLabel": "OU, TKL, LEAN og Senge",
    "q": "Hva er organisasjonsutvikling (OU) sin todelte definisjon?",
    "opts": [
      "Å styrke lederkompetansen og forbedre samhandlingen mellom avdelinger",
      "Å forbedre interne prosesser og øke produktiviteten gjennom systematisk forbedringsarbeid",
      "Å modernisere strukturer og innføre ny teknologi tilpasset markedets behov",
      "Å tilpasse organisasjonen til omgivelsene og møte ansattes behov for vekst og utvikling"
    ],
    "correct": 3,
    "explain": "OU har to dimensjoner: (1) tilpasse organisasjonen til skiftende omgivelser og (2) tilfredsstille ansattes behov for vekst, mestring og utvikling – begge er nødvendige for varig suksess."
  },
  {
    "id": 21,
    "cat": "ou_tql",
    "catLabel": "OU, TKL, LEAN og Senge",
    "q": "Hva er Total Kvalitetsledelse (TKL/TQM)?",
    "opts": [
      "En ledelsesfilosofi opprinnelig fra Japan med fokus på kontinuerlig forbedring, kundefokus og beste praksis i alle ledd",
      "Et styringssystem for å overvåke kostnader og avvik i produksjon, leverandørkjede og interne prosesser på tvers av enheter",
      "En sertifiseringsordning for systematisk kvalitetssikring av produkter, tjenester og prosesser gjennom hele verdikjeden",
      "En metode for å rangere og belønne ansatte etter individuelle bidrag til kvalitetsmål og kundeklagehåndtering"
    ],
    "correct": 0,
    "explain": "TKL (Total Quality Management) er en helhetlig ledelsesfilosofi opprinnelig fra Japan (Deming) med fokus på kontinuerlig forbedring, totalt kundefokus og involvering av alle ansatte i kvalitetsarbeidet."
  },
  {
    "id": 22,
    "cat": "ou_tql",
    "catLabel": "OU, TKL, LEAN og Senge",
    "q": "Hva er PDCA-hjulet, og hvem er det knyttet til?",
    "opts": [
      "En markedsføringssirkel (Product, Distribution, Communication, Audience) – Kotler",
      "En endringsledelsesmodell (Prioritize, Delegate, Control, Adjust) – Kotter",
      "En kvalitetsforbedringssirkel (Plan, Do, Check, Act) – Deming",
      "En budsjetteringssyklus (Plan, Control, Assess) – Lewin"
    ],
    "correct": 2,
    "explain": "PDCA-hjulet (Plan-Do-Check-Act), også kalt Deming-hjulet, er et verktøy for kontinuerlig forbedring: planlegg tiltak → gjennomfør → sjekk resultater → juster og forbedre."
  },
  {
    "id": 23,
    "cat": "ou_tql",
    "catLabel": "OU, TKL, LEAN og Senge",
    "q": "Hva er LEAN, og hva er dets hovedmål?",
    "opts": [
      "En finansmodell for å beregne avkastning og nåverdi (NPV) ved investeringer i prosessforbedring",
      "En teknisk tilnærming for å forenkle design (modulbygging) og standardisere komponenter i produksjonen",
      "En personalmodell for å kartlegge, dimensjonere og effektivisere bemanningsbehov (HR-planlegging)",
      "En ledelsesfilosofi avledet fra TKL med fokus på å eliminere all sløsing (muda) i alle prosesser"
    ],
    "correct": 3,
    "explain": "LEAN er en produksjons- og ledelsesfilosofi opprinnelig fra Toyota, avledet fra TKL, med fokus på å eliminere all sløsing (muda/waste) i prosesser og levere maksimal verdi til kunden."
  },
  {
    "id": 24,
    "cat": "ou_tql",
    "catLabel": "OU, TKL, LEAN og Senge",
    "q": "Hvilke to kjennetegner LEAN som ledelsesfilosofi?",
    "opts": [
      "Eliminere all sløsing (muda) i alle ledd av prosessen",
      "Sentralisert beslutningstaking og tydelig toppstyring i organisasjonen",
      "Levere maksimal verdi til kunden med minst mulig ressursbruk",
      "Belønne individuelle prestasjoner gjennom intern konkurranse og rangering"
    ],
    "correct": [
      0,
      2
    ],
    "explain": "LEAN bygger på to kjerneprinsipper: eliminere sløsing (muda/waste) i alle prosesser, og levere maksimal verdi til kunden. Filosofien er avledet fra TQM og Toyota Production System."
  },
  {
    "id": 25,
    "cat": "ou_tql",
    "catLabel": "OU, TKL, LEAN og Senge",
    "q": "Hva kjennetegner \"den lærende organisasjon\" slik Peter Senge beskriver det?",
    "opts": [
      "En organisasjon med strukturerte opplæringsprogrammer og obligatorisk faglig påfyll hvert år",
      "En organisasjon som kontinuerlig utvikler kapasitet til å skape ønskede resultater gjennom 5 disipliner",
      "En organisasjon som systematisk evaluerer prosjekter og deler erfaringer på tvers av team",
      "En organisasjon der ledere tar ansvar for kunnskapsoverføring og faglig veiledning av ansatte"
    ],
    "correct": 1,
    "explain": "Senges lærende organisasjon kontinuerlig utvikler og utvider sin kapasitet gjennom 5 disipliner: systemtenkning, personlig mestring, mentale modeller, felles visjon og læring i team."
  },
  {
    "id": 26,
    "cat": "ou_tql",
    "catLabel": "OU, TKL, LEAN og Senge",
    "q": "Hva er \"systemtenkning\" som Senges 5. og overordnede disiplin?",
    "opts": [
      "Å digitalisere informasjonsflyt og knytte avdelinger gjennom felles IT-plattformer",
      "Å kartlegge delsystemer, tydeliggjøre ansvarsområder og definere grensesnitt mellom enheter",
      "Å se helheten og sammenhengene mellom deler i organisasjonen fremfor å se på isolerte hendelser",
      "Å bruke strukturerte analysemetoder og datagrunnlag for å planlegge og fordele ressurser optimalt på tvers av enheter"
    ],
    "correct": 2,
    "explain": "Systemtenkning er evnen til å se organisasjonen som et komplekst system av sammenhenger og feedback-sløyfer – fremfor å fokusere på isolerte hendelser. Det er den overordnede disiplinen som binder de andre 4 sammen."
  },
  {
    "id": 27,
    "cat": "ou_tql",
    "catLabel": "OU, TKL, LEAN og Senge",
    "q": "Hva er \"personlig mestring\" i Senges modell?",
    "opts": [
      "At lederen tar aktivt ansvar for å forme organisasjonskulturen og sette tydelige standarder for ønsket atferd i teamet",
      "At ledere systematisk bygger bred faglig kompetanse og fleksibelt kan fylle ulike roller og funksjoner i organisasjonen",
      "At ansatte jobber målrettet mot toppresultater og konkurrerer om de beste prestasjonene",
      "At hvert individ forplikter seg til livslang læring og kontinuerlig utvikling av egne ferdigheter og forståelse"
    ],
    "correct": 3,
    "explain": "Personlig mestring handler om individets forpliktelse til livslang læring, kontinuerlig klargjøring av personlig visjon og å se virkeligheten objektivt. Organisasjoner lærer bare gjennom individer som lærer."
  },
  {
    "id": 28,
    "cat": "ou_tql",
    "catLabel": "OU, TKL, LEAN og Senge",
    "q": "Hva er \"felles visjon\" i Senges modell?",
    "opts": [
      "En ekte, delt visjon som engasjerer og forplikter alle i organisasjonen – ikke bare pålagt ovenfra",
      "En strategiplan som ledergruppen utvikler – kommuniseres ned til resten av organisasjonen",
      "Et sett med kjerneverdier og atferdsnormer som beskriver ønsket kultur i virksomheten",
      "Et felles målbilde der avdelinger koordinerer sine delmål – mot et overordnet resultat"
    ],
    "correct": 0,
    "explain": "Felles visjon handler om å bygge en ekte, delt forståelse av hva organisasjonen ønsker å skape – en visjon som folk genuint deler og forplikter seg til, ikke bare en slogan som er pålagt ovenfra."
  },
  {
    "id": 29,
    "type": "sort",
    "cat": "ou_tql",
    "catLabel": "OU, TKL, LEAN og Senge",
    "q": "Match hvert utsagn med riktig disiplin hos Peter Senge.",
    "bins": [
      {
        "id": "personlig",
        "label": "Personlig mestring",
        "color": "#8b5cf6"
      },
      {
        "id": "mentale",
        "label": "Mentale modeller",
        "color": "#3b82f6"
      },
      {
        "id": "visjon",
        "label": "Felles visjon",
        "color": "#10b981"
      },
      {
        "id": "team",
        "label": "Læring i team",
        "color": "#f59e0b"
      },
      {
        "id": "systemtenk",
        "label": "Systemtenkning",
        "color": "#ef4444"
      }
    ],
    "items": [
      {
        "text": "Forplikte seg til livslang læring og personlig utvikling",
        "bin": "personlig"
      },
      {
        "text": "Bevisstgjøre og utfordre egne antakelser og forestillinger",
        "bin": "mentale"
      },
      {
        "text": "Bygge en ekte, delt retning alle genuint forplikter seg til",
        "bin": "visjon"
      },
      {
        "text": "Teamet tenker og lærer som en enhet – mer enn summen",
        "bin": "team"
      },
      {
        "text": "Se helheten og sammenhengene fremfor isolerte hendelser",
        "bin": "systemtenk"
      }
    ],
    "explain": "Personlig mestring: livslang læring. Mentale modeller: utfordre antakelser. Felles visjon: delt forpliktelse. Læring i team: kollektiv intelligens. Systemtenkning: se helheter og feedback-sløyfer."
  },
  {
    "id": 30,
    "cat": "ou_tql",
    "catLabel": "OU, TKL, LEAN og Senge",
    "q": "Hvilke OU-verktøy brukes for å fremme organisasjonsutvikling i praksis?",
    "opts": [
      "Lønnssamtaler, stillingsbeskrivelser og formelle ansettelsesprosedyrer",
      "Prosjektplaner, milepælsrapporter og risikoanalyser for endringsinitiativer",
      "Organisasjonskart, rolleavklaringer og styringsmodeller for teamstruktur",
      "Medarbeidersamtaler, kompetanseutvikling og medarbeiderundersøkelser"
    ],
    "correct": 3,
    "explain": "Konkrete OU-verktøy inkluderer: medarbeidersamtaler (systematisk dialog), kompetanseutvikling (kurs, hospitering) og medarbeiderundersøkelser (kartlegge trivsel og utfordringer)."
  },
  {
    "id": 33,
    "cat": "ou_tql",
    "catLabel": "OU, TKL, LEAN og Senge",
    "q": "Hva er \"mentale modeller\" som Senges disiplin?",
    "opts": [
      "Bevissthet om og kritisk utfordring av egne og kollektive antakelser og forestillinger som påvirker beslutninger",
      "Psykologiske profiler og tester som kartlegger ansattes personlighetstyper, kognitiv stil og individuelle beslutningsstiler",
      "Strukturerte tankemodeller og rammeverk som teamet bruker for systematisk å planlegge, prioritere og gjennomføre prosjekter",
      "Møtemetodikk og fasiliterte prosesser som aktivt fremmer åpen dialog, psykologisk trygghet og felles problemløsning"
    ],
    "correct": 0,
    "explain": "Mentale modeller er de dype antakelsene, generaliseringene og bildene vi bærer med oss som påvirker hva vi ser og hvordan vi handler. Disiplinen handler om å bli bevisst på og utfordre disse for bedre beslutninger."
  },
  {
    "id": 34,
    "cat": "ou_tql",
    "catLabel": "OU, TKL, LEAN og Senge",
    "q": "Hva er \"læring i team\" som Senges disiplin?",
    "opts": [
      "At teammedlemmer deler fagkunnskap og roterer på oppgaver – bygger bred kompetanse på tvers av roller",
      "At teamet regelmessig setter av strukturert tid til felles refleksjon, erfaringsutveksling og læring etter hvert prosjekt",
      "At leder legger til rette for individuell læring – veileder hvert teammedlem separat mot mål",
      "Kollektiv prosess der teamet tenker og lærer som en enhet, noe som gir bedre resultater enn summen av individene"
    ],
    "correct": 3,
    "explain": "Læring i team handler om kollektiv tenkning og dialog – der teamets samlede intelligens overstiger summen av enkeltindividene. Dette krever evne til å sette til side antakelser og tenke fritt sammen."
  }
];
