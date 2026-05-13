const QUIZ_META = {
  "id": "lom-ool-endring-1",
  "title": "Endringsledelse Del 1",
  "subtitle": "LØM Fagskole – Endringsdefinisjon & Modeller",
  "description": "18 spørsmål – Endringsledelse – grunnlag, Kotters og Lewins modeller.",
  "cats": {
    "endring_def": {
      "label": "Endringsledelse – grunnlag",
      "color": "#8b5cf6"
    },
    "modeller": {
      "label": "Kotters og Lewins modeller",
      "color": "#3b82f6"
    }
  }
};

const QUESTIONS = [
  {
    "id": 1,
    "cat": "endring_def",
    "catLabel": "Endringsledelse – grunnlag",
    "q": "Hva er endringsledelse ifølge Wesenberg (2023)?",
    "opts": [
      "En planmessig og målrettet prosess for å lede mennesker og organisasjoner gjennom ønskede endringer",
      "En styringsmodell for budsjettering og ressursfordeling i omstillingsperioder, som sikrer kostnadseffektiv drift",
      "Et rammeverk for å revidere organisasjonsstrukturen og rapporteringslinjene, tilpasset nye strategiske mål",
      "En metode for å vurdere behovet for teknologi, kompetanse og systemoppgraderinger i virksomheten"
    ],
    "correct": 0,
    "explain": "Endringsledelse er en planmessig og målrettet prosess for å lede mennesker og organisasjoner gjennom ønskede endringer, slik at endringene faktisk fester seg og gir ønskede resultater."
  },
  {
    "id": 2,
    "cat": "endring_def",
    "catLabel": "Endringsledelse – grunnlag",
    "q": "Hvor stor andel av endringsforsøk mislykkes ifølge forskning på feltet?",
    "opts": [
      "30 %",
      "50 %",
      "70 %",
      "90 %"
    ],
    "correct": 2,
    "explain": "Forskning viser at om lag 70 % av alle endringsinitiativ i organisasjoner mislykkes – ofte fordi man undervurderer menneskesiden og fokuserer for mye på tekniske løsninger."
  },
  {
    "id": 3,
    "cat": "endring_def",
    "catLabel": "Endringsledelse – grunnlag",
    "q": "Hva er implementeringssuksess-formelen fra pensum?",
    "opts": [
      "Suksess = Strategi × (Mål + Ressurser + Tidsplan)",
      "Suksess = Kvalitet × (Eierskap + Motivasjon + Kunnskap)",
      "Suksess = Ledelse × (Struktur + Prosess + Kultur)",
      "Suksess = Kompetanse × (Vilje + Kapasitet + Forankring)"
    ],
    "correct": 1,
    "explain": "Implementeringssuksess = Kvalitet × (Eierskap + Motivasjon + Kunnskap). Formelen viser at god teknisk kvalitet ikke er nok – ansatte må eie endringen, være motiverte og forstå den."
  },
  {
    "id": 4,
    "cat": "endring_def",
    "catLabel": "Endringsledelse – grunnlag",
    "q": "Hva er endringskaleidoskopet, og hvilke dimensjoner inngår?",
    "opts": [
      "En analysemodell med 8 komponenter: makt, tid, omfang, bevaring, mangfold, kompetanse, kapasitet og forankring",
      "En strategimodell med 6 dimensjoner: visjon, mål, kommunikasjon, struktur, kultur og løpende evaluering av fremdrift",
      "En beslutningsmodell med 5 faser inspirert av Lewins tine-endre-fryse-tilnærming til organisatorisk endring",
      "En kartleggingsmodell med 4 kategorier basert på interessentenes makt, engasjement og påvirkningspotensial"
    ],
    "correct": 0,
    "explain": "Endringskaleidoskopet er et analyseverktøy med 8 komponenter som hjelper ledere vurdere konteksten for endring: maktforhold, tid, omfang, bevaring, mangfold, kompetanse, kapasitet og forankring."
  },
  {
    "id": 5,
    "cat": "endring_def",
    "catLabel": "Endringsledelse – grunnlag",
    "q": "Hva er akseptmodellen i endringsledelse?",
    "opts": [
      "En kartleggingsmodell: identifisere → kartlegge → vurdere → prioritere",
      "Fire trinn ansatte må gjennom: vite → kunne → ville → ha lov",
      "En tilnærming: sette mål → måle → evaluere → justere kursen",
      "En prosess for motstand: informere → lytte → forhandle → godkjenne"
    ],
    "correct": 1,
    "explain": "Akseptmodellen beskriver fire trinn ansatte må gjennom for å ta til seg en endring: vite (kjenne endringen), kunne (ha kompetanse), ville (være motivert) og ha lov (ha myndighet)."
  },
  {
    "id": 6,
    "cat": "endring_def",
    "catLabel": "Endringsledelse – grunnlag",
    "q": "Hva er en kommunikasjonsplan i endringsarbeid?",
    "opts": [
      "Et opplegg for å presentere endringens resultater og læringspunkter etter gjennomføring",
      "En systematisk plan for hvem som skal informeres om hva, når og hvordan under endringsprosessen",
      "Et dokument som beskriver nye roller, ansvarsfordeling og kommunikasjonskanaler",
      "En oversikt over hvilke budskap som skal ut eksternt – til kunder, leverandører, samarbeidspartnere og media"
    ],
    "correct": 1,
    "explain": "En kommunikasjonsplan sikrer at riktig informasjon når riktige interessenter til riktig tid og via riktige kanaler – kritisk for å redusere usikkerhet og motstand mot endring."
  },
  {
    "id": 7,
    "cat": "modeller",
    "catLabel": "Kotters og Lewins modeller",
    "q": "Hva er de tre fasene i Lewins endringsmodell?",
    "opts": [
      "Planlegge → Gjennomføre → Evaluere",
      "Analysere → Implementere → Følge opp",
      "Tine → Endre → Fryse",
      "Mobilisere → Endre → Forankre"
    ],
    "correct": 2,
    "explain": "Lewins tre faser: Tine (unfreeze – løsne opp etablerte mønstre), Endre (move – gjennomføre endringen) og Fryse (refreeze – forankre den nye tilstanden som ny norm)."
  },
  {
    "id": 8,
    "type": "sort",
    "cat": "modeller",
    "catLabel": "Kotters og Lewins modeller",
    "q": "Sorter hvert tiltak under riktig fase i Lewins endringsmodell.",
    "bins": [
      {
        "id": "tine",
        "label": "Tine (unfreeze)",
        "color": "#3b82f6"
      },
      {
        "id": "endre",
        "label": "Endre (move)",
        "color": "#f59e0b"
      },
      {
        "id": "fryse",
        "label": "Fryse (refreeze)",
        "color": "#10b981"
      }
    ],
    "items": [
      {
        "text": "Skape erkjennelse av at endring er nødvendig",
        "bin": "tine"
      },
      {
        "text": "Løsne opp etablerte rutiner og mønstre",
        "bin": "tine"
      },
      {
        "text": "Gjennomføre opplæring i nye arbeidsmetoder",
        "bin": "endre"
      },
      {
        "text": "Implementere ny organisasjonsstruktur",
        "bin": "endre"
      },
      {
        "text": "Forankre ny atferd som den nye standarden",
        "bin": "fryse"
      },
      {
        "text": "Revidere belønningsstrukturer og systemer",
        "bin": "fryse"
      }
    ],
    "explain": "Tine: skape erkjennelse og løsne opp status quo. Endre: implementere ny praksis og opplæring. Fryse: forankre og stabilisere den nye normalen."
  },
  {
    "id": 9,
    "cat": "modeller",
    "catLabel": "Kotters og Lewins modeller",
    "q": "Hva representerer \"tine\"-fasen i Lewins modell?",
    "opts": [
      "Å gjennomføre den planlagte endringen strukturert – steg for steg i hele organisasjonen",
      "Å forankre ny atferd og nye rutiner som den permanente standarden etter gjennomføring",
      "Å skape motivasjon og erkjennelse av at endring er nødvendig – løsne opp status quo",
      "Å kartlegge resultater og analysere avvik – justere kursen etter tilbakemeldinger"
    ],
    "correct": 2,
    "explain": "Tine-fasen handler om å destabilisere status quo og skape motivasjon for endring – folk må innse at det eksisterende ikke fungerer godt nok og at endring er nødvendig."
  },
  {
    "id": 10,
    "cat": "modeller",
    "catLabel": "Kotters og Lewins modeller",
    "q": "Hvilke to kjennetegn hører hjemme i Lewins tine-fase?",
    "opts": [
      "Skape erkjennelse av at nåværende situasjon ikke er god nok",
      "Gjennomføre opplæring i de nye arbeidsmetodene og systemene",
      "Løsne opp etablerte rutiner og vante tankemønstre i organisasjonen",
      "Forankre den nye atferden som en permanent og akseptert standard"
    ],
    "correct": [
      0,
      2
    ],
    "explain": "Tine-fasen kjennetegnes av å skape erkjennelse av at status quo ikke holder, og å løsne opp etablerte mønstre. Opplæring hører til endre-fasen; forankring hører til fryse-fasen."
  },
  {
    "id": 11,
    "cat": "modeller",
    "catLabel": "Kotters og Lewins modeller",
    "q": "Hva er første steg i Kotters 8-trinnsmodell for endring?",
    "opts": [
      "Bygge koalisjon (av troverdige støttespillere) i hele organisasjonen",
      "Skape en sterk og tydelig følelse av krise og hastverk (urgency)",
      "Kommunisere endringsvisjonen bredt og tydelig (til alle nivåer)",
      "Forankre endringene i organisasjonens kultur (daglig praksis)"
    ],
    "correct": 1,
    "explain": "Kotters første trinn er å skape en sterk følelse av nødvendighet og hastverk (urgency) – uten dette vil ikke folk prioritere endringen fremfor daglig drift."
  },
  {
    "id": 12,
    "cat": "modeller",
    "catLabel": "Kotters og Lewins modeller",
    "q": "Hva er det siste trinnet i Kotters 8-trinnsmodell?",
    "opts": [
      "Planlegge kortsiktige seire for å holde motivasjonen oppe",
      "Kommunisere endringsvisjonen til alle",
      "Forankre endringene i organisasjonens kultur",
      "Fjerne barrierer og strukturer som hemmer gjennomføringen"
    ],
    "correct": 2,
    "explain": "Kotters siste (8.) trinn er å forankre endringene dypt i organisasjonens kultur – slik at de nye måtene å jobbe på blir den nye normalen og ikke glir tilbake til gammel praksis."
  },
  {
    "id": 13,
    "type": "order",
    "cat": "modeller",
    "catLabel": "Kotters og Lewins modeller",
    "q": "Plasser Kotters 8 trinn i riktig rekkefølge. Første trinn øverst, siste trinn nederst.",
    "items": [
      "Forankre endringene i kulturen",
      "Konsolidere gevinster og gå videre",
      "Planlegge og synliggjøre seire",
      "Fjerne barrierer for gjennomføring",
      "Kommunisere endringsvisjonen bredt",
      "Utvikle klar visjon og strategi",
      "Bygge koalisjon av støttespillere",
      "Skape urgency og hastverk"
    ],
    "explain": "Kotters 8 trinn i riktig rekkefølge: 1) Skape urgency og hastverk → 2) Bygge koalisjon av støttespillere → 3) Utvikle klar visjon og strategi → 4) Kommunisere endringsvisjonen bredt → 5) Fjerne barrierer for gjennomføring → 6) Planlegge og synliggjøre seire → 7) Konsolidere gevinster og gå videre → 8) Forankre endringene i kulturen."
  },
  {
    "id": 14,
    "cat": "modeller",
    "catLabel": "Kotters og Lewins modeller",
    "q": "Hva er en viktig forskjell mellom Kotters og Lewins endringsmodeller?",
    "opts": [
      "Lewin er primært utviklet for offentlig sektor; Kotter for kommersielle virksomheter",
      "Kotter har 8 detaljerte trinn med fokus på lederatferd; Lewin har 3 overordnede faser",
      "Lewin vektlegger tekniske løsninger; Kotter vektlegger menneskelige og kulturelle faktorer",
      "Kotter passer best for raske transformasjoner; Lewin for gradvise og langsiktige endringer"
    ],
    "correct": 1,
    "explain": "Kotter tilbyr en mer detaljert, lederorientert 8-trinnsmodell med fokus på spesifikke handlinger ledere bør ta. Lewin gir en enklere, mer overordnet 3-fasemodell."
  },
  {
    "id": 31,
    "cat": "endring_def",
    "catLabel": "Endringsledelse – grunnlag",
    "q": "Hva er prestasjonsledelse i OU-sammenheng?",
    "opts": [
      "En helhetlig tilnærming for å sette mål, følge opp og utvikle ansattes prestasjoner kontinuerlig",
      "Et system for å rapportere og håndtere avvik i produktivitet og måloppnåelse",
      "Et lønns- og insentivsystem koblet til individuelle resultater og teamprestasjoner",
      "En metode for å kartlegge kompetansegap og planlegge opplæringstiltak i organisasjonen"
    ],
    "correct": 0,
    "explain": "Prestasjonsledelse er en helhetlig tilnærming for å sette tydelige mål (SMART), følge opp, gi tilbakemelding og coache ansatte til kontinuerlig utvikling og forbedrede prestasjoner."
  },
  {
    "id": 32,
    "cat": "modeller",
    "catLabel": "Kotters og Lewins modeller",
    "q": "Hva menes med \"fryse\"-fasen i Lewins modell?",
    "opts": [
      "Å avslutte endringsprosessen formelt og overlevere ansvar til linjeledelsen",
      "Å stabilisere organisasjonen etter endringen ved å sette alle videre initiativ på vent",
      "Å dokumentere erfaringene fra endringsprosessen og evaluere resultatene grundig",
      "Å forankre den nye atferden og de nye rutinene som den nye normalen i organisasjonen"
    ],
    "correct": 3,
    "explain": "Fryse-fasen handler om å konsolidere og forankre endringene – de nye arbeidsmetodene, verdiene og atferdene skal bli den nye standarden som tas for gitt, ikke midlertidige unntak."
  },
  {
    "id": 35,
    "cat": "endring_def",
    "catLabel": "Endringsledelse – grunnlag",
    "q": "Hva er en prestasjonskultur?",
    "opts": [
      "En kultur der forventninger er tydelige, ansatte har reelt eierskap til mål og kontinuerlig forbedring er en grunnleggende norm",
      "En kultur der individuelle og kollektive bidrag synliggjøres, anerkjennes og belønnes gjennom regelmessige og strukturerte tilbakemeldinger",
      "En kultur der toppledelsen setter ambisiøse, målbare mål og systematisk holder mellomledere ansvarlige for levering og resultater",
      "En kultur der resultater overvåkes tett, avvik fra plan analyseres grundig og korrigerende tiltak iverksettes raskt og systematisk"
    ],
    "correct": 0,
    "explain": "Prestasjonskultur innebærer at forventninger er tydelige og kjente, at ansatte tar eierskap til egne mål, og at kontinuerlig forbedring og læring er en naturlig del av hverdagen."
  },
  {
    "id": 36,
    "cat": "modeller",
    "catLabel": "Kotters og Lewins modeller",
    "q": "Hva er \"kortsiktige seire\" i Kotters 8-trinnsmodell?",
    "opts": [
      "Å nå planlagte delmål i endringsplanen, dokumentere fremdrift og rapportere status regelmessig til ledergruppen",
      "Å skape synlige, raske resultater av endringen for å bevise at den virker og opprettholde motivasjonen",
      "Å aktivt sikre at budsjettet overholdes i de første fasene, og raskt avdekke og håndtere kostnadsoverskridelser",
      "Å systematisk identifisere, prioritere og løse tekniske og organisatoriske problemer tidlig for å hindre forsinkelser"
    ],
    "correct": 1,
    "explain": "Å planlegge og synliggjøre kortsiktige seire (trinn 6 hos Kotter) er avgjørende for å opprettholde motivasjon og tro på endringen blant ansatte – det viser at kursen er riktig."
  }
];
