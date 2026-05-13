const QUIZ_META = {
  "id": "lom-ool-kultur-2",
  "title": "Organisasjonskultur Del 2",
  "subtitle": "LØM Fagskole – Subkulturer & Belbin",
  "description": "18 spørsmål – Subkulturer og dynamikk, Belbins grupperoller.",
  "cats": {
    "subkulturer": {
      "label": "Subkulturer og dynamikk",
      "color": "#10b981"
    },
    "belbin": {
      "label": "Belbins grupperoller",
      "color": "#f59e0b"
    }
  }
};

const QUESTIONS = [
  {
    "id": 18,
    "cat": "subkulturer",
    "catLabel": "Subkulturer og dynamikk",
    "q": "Hva er en subkultur i en organisasjon?",
    "opts": [
      "En svakere kulturvariant som gradvis løses opp og over tid absorberes og innlemmes i den dominerende organisasjonskulturen",
      "En distinkt kultur som eksisterer innenfor den dominerende organisasjonskulturen – gjerne i en avdeling eller faggruppe",
      "En kulturvariant som primært oppstår i multinasjonale selskaper – med mange nasjonale avdelinger og lokale kontorer",
      "En uformell sosial gruppe med egne aktiviteter, men uten varig innvirkning på organisasjonens kultur"
    ],
    "correct": 1,
    "explain": "Subkulturer er distinkte kulturer som oppstår i undergrupper av organisasjonen (avdelinger, faggrupper, lokasjoner). De kan sameksistere med og styrke dominantkulturen."
  },
  {
    "id": 19,
    "cat": "subkulturer",
    "catLabel": "Subkulturer og dynamikk",
    "q": "Hva kjennetegner en motkultur i en organisasjon?",
    "opts": [
      "En kultur som aktivt utfordrer og motarbeider den dominerende organisasjonskulturen",
      "En kultur som støtter og forsterker organisasjonens offisielle verdier og normer",
      "En kultur som vokser frem i geografisk spredte avdelinger med begrenset kontakt med hovedkontoret",
      "En midlertidig kulturvariant som oppstår under omstillingsprosesser og forsvinner etterpå"
    ],
    "correct": 0,
    "explain": "En motkultur er en gruppe som ikke bare er annerledes, men som aktivt motarbeider den dominerende kulturen. Dette kan hemme endringsprosesser og skape konflikter."
  },
  {
    "id": 20,
    "cat": "subkulturer",
    "catLabel": "Subkulturer og dynamikk",
    "q": "Hva er gruppetenkning (groupthink) ifølge Irving Janis?",
    "opts": [
      "En gruppebasert teknikk for effektiv idéinnsamling og kreativ problemløsning i team",
      "En kognitiv evne til å koordinere tankeprosesser og handle som én enhet i krevende situasjoner",
      "En fasilitert teknikk for å bygge felles forståelse og styrke teamkulturen i en gruppe",
      "Et fenomen der konformitetspress undertrykker kritisk tenkning og gir dårlige beslutninger"
    ],
    "correct": 3,
    "explain": "Gruppetenkning (Janis) oppstår når press for konsensus i gruppen undertrykker kritisk tenkning. Gruppen unngår uenighet, og dette kan føre til svært dårlige beslutninger – som ved Bay of Pigs-invasjonen."
  },
  {
    "id": 21,
    "cat": "subkulturer",
    "catLabel": "Subkulturer og dynamikk",
    "q": "Hvilke to kjennetegn er typiske for gruppetenkning (groupthink) ifølge Janis?",
    "opts": [
      "Gruppen undertrykker avvikende meninger for å opprettholde konsensus og enighet",
      "Gruppen søker aktivt utenperspektiv og fageksperter for å utfordre egne antagelser",
      "Gruppen oppmuntrer til åpen diskusjon og kritisk gjennomgang av egne beslutninger",
      "Gruppen er overbevist om at den aldri tar feil og at egne beslutninger alltid er riktige"
    ],
    "correct": [
      0,
      3
    ],
    "explain": "To typiske kjennetegn på gruppetenkning (Janis): (1) press for konformitet – avvikende meninger undertrykkes for å bevare konsensus, og (2) en overdreven tro på egne beslutninger – gruppen tror den aldri tar feil og stiller ikke spørsmål ved egne valg."
  },
  {
    "id": 22,
    "cat": "subkulturer",
    "catLabel": "Subkulturer og dynamikk",
    "q": "Hva er dysfunksjonell organisasjonskultur?",
    "opts": [
      "En kultur som hemmer organisasjonens effektivitet, arbeidstrivsel og måloppnåelse",
      "En kultur som mangler skriftlige verdierklæringer, formelle normdokumenter og rutiner",
      "En sterk, ekskluderende kultur som gjør det vanskelig for nye medarbeidere å bli inkludert",
      "En kulturvariant som preger organisasjoner i krise, omstilling eller alvorlig omstrukturering"
    ],
    "correct": 0,
    "explain": "Dysfunksjonell kultur er en kultur som aktivt hemmer organisasjonens evne til å fungere godt – f.eks. gjennom taushetsnormer, fryktkultur, nepotisme eller gruppetenkning."
  },
  {
    "id": 23,
    "cat": "subkulturer",
    "catLabel": "Subkulturer og dynamikk",
    "q": "Hvilken rolle spiller leder i kulturbygging?",
    "opts": [
      "Ledere har begrenset innflytelse på kulturen – den formes primært av de ansattes daglige samhandling",
      "Kulturen formes av medarbeiderne i fellesskap, og er ikke særlig påvirket av enkeltpersoner",
      "Ledere påvirker kulturen ved å utarbeide nye retningslinjer, prosedyrer og oppdatere håndbøker",
      "Ledere setter eksempel, definerer hva som belønnes og straffer, og former ritualene i organisasjonen"
    ],
    "correct": 3,
    "explain": "Ledere er de viktigste kulturbærerne og -skaperne. Gjennom hva de prioriterer, belønner, straffer, sier og gjør, sender de kontinuerlige signaler om hva som er viktig i organisasjonen."
  },
  {
    "id": 24,
    "cat": "subkulturer",
    "catLabel": "Subkulturer og dynamikk",
    "q": "Hva kan seleksjon og rekruttering gjøre med organisasjonskulturen?",
    "opts": [
      "Rekruttering av like-minded kandidater kan forsterke eksisterende kultur; mangfold kan utfordre og fornye den",
      "Rekruttering har liten kulturell effekt – kulturen formes av strukturer og systemer, ikke enkeltpersoner",
      "Nyansatte går gjennom sosialisering og tilpasser seg kulturen uten å påvirke den nevneverdig",
      "Seleksjon bør balansere mellom faglige kvalifikasjoner og kulturell tilpasning – ikke prioritere én faktor"
    ],
    "correct": 0,
    "explain": "Rekruttering er et viktig kulturvirkemiddel. Å ansette folk som \"passer inn\" forsterker kulturen, mens bevisst rekruttering av mangfold kan bidra til kulturell fornyelse."
  },
  {
    "id": 25,
    "cat": "belbin",
    "catLabel": "Belbins grupperoller",
    "q": "Hvor mange grupperoller identifiserte Meredith Belbin i sin forskning?",
    "opts": [
      "6",
      "7",
      "8",
      "9"
    ],
    "correct": 3,
    "explain": "Belbin identifiserte 9 grupperoller fordelt på tre kategorier: handlingsroller, sosiale roller og reflekterende (tanke-)roller."
  },
  {
    "id": 26,
    "cat": "belbin",
    "catLabel": "Belbins grupperoller",
    "q": "Hvilke tre roller utgjør handlingsrollene i Belbins modell?",
    "opts": [
      "Idéskaper, Vurderer og Spesialist",
      "Koordinator, Lagspiller og Ressurskontakt",
      "Iverksetter, Avslutter og Pådriver",
      "Koordinator, Iverksetter og Idéskaper"
    ],
    "correct": 2,
    "explain": "Belbins handlingsroller er Iverksetter (strukturerer og gjennomfører), Avslutter (kvalitetssikrer og ferdigstiller) og Pådriver (driver gruppen fremover med energi)."
  },
  {
    "id": 27,
    "cat": "belbin",
    "catLabel": "Belbins grupperoller",
    "q": "Hvilke tre roller utgjør de sosiale rollene i Belbins modell?",
    "opts": [
      "Iverksetter, Avslutter og Pådriver",
      "Idéskaper, Vurderer og Spesialist",
      "Koordinator, Lagspiller og Ressurskontakt",
      "Pådriver, Koordinator og Avslutter"
    ],
    "correct": 2,
    "explain": "Belbins sosiale roller er Koordinator (delegerer og fasiliterer), Lagspiller (støtter og samarbeider) og Ressurskontakt (henter ressurser og kontakter utenfra)."
  },
  {
    "id": 28,
    "cat": "belbin",
    "catLabel": "Belbins grupperoller",
    "q": "Hvilke tre roller utgjør de reflekterende rollene i Belbins modell?",
    "opts": [
      "Koordinator, Lagspiller og Ressurskontakt",
      "Pådriver, Idéskaper og Koordinator",
      "Iverksetter, Avslutter og Pådriver",
      "Idéskaper, Vurderer og Spesialist"
    ],
    "correct": 3,
    "explain": "Belbins reflekterende roller er Idéskaper (kreativ problemløser), Vurderer (kritisk analytiker) og Spesialist (dyp fagekspertise på et smalt felt)."
  },
  {
    "id": 29,
    "cat": "belbin",
    "catLabel": "Belbins grupperoller",
    "q": "Hva er kjennetegnet på rollen \"Idéskaper\" i Belbins modell?",
    "opts": [
      "Følger opp detaljer og sikrer at arbeidet er ferdig og feilfritt ved leveranse",
      "Bygger og vedlikeholder et nettverk av kontakter og ressurser utenfor gruppen",
      "Kreativ tenker som genererer originale ideer og løser vanskelige problemer",
      "Koordinerer gruppens arbeid, tydeliggjør mål og delegerer oppgaver til rette personer"
    ],
    "correct": 2,
    "explain": "Idéskaperen er den kreative og ukonvensjonelle tenkeren i gruppen – genererer originale ideer og løser vanskelige problemer, men kan være dårlig på å kommunisere ideene til andre."
  },
  {
    "id": 30,
    "cat": "belbin",
    "catLabel": "Belbins grupperoller",
    "q": "Hva kjennetegner Idéskaperen i Belbins modell?",
    "opts": [
      "Genererer originale og kreative ideer for å løse vanskelige problemer",
      "Sikrer at gruppen følger tidsplanen og ikke mister fokus på målet",
      "Kan ha utfordringer med å kommunisere ideene sine til resten av gruppen",
      "Ferdigstiller arbeidet og sikrer høy kvalitet og presisjon ved leveranse"
    ],
    "correct": [
      0,
      2
    ],
    "explain": "Idéskaperen er kreativ og genererer originale ideer, men har ofte utfordringer med å kommunisere dem tydelig til andre. Å holde tidsplan er Pådriverens rolle, og å ferdigstille er Avsluterens."
  },
  {
    "id": 31,
    "cat": "belbin",
    "catLabel": "Belbins grupperoller",
    "q": "Hva er kjennetegnet på rollen \"Avslutter\" i Belbins modell?",
    "opts": [
      "Kvalitetssikrer arbeidet, følger opp detaljer og sikrer at alt er ferdig og feilfritt",
      "Oppsummerer diskusjoner, tar beslutninger og driver gruppen videre i prosessen",
      "Megler mellom gruppemedlemmene, løser opp i konflikter og bygger samhold underveis",
      "Påtar seg de mest komplekse deloppgavene, og driver dem frem mot ferdigstilling"
    ],
    "correct": 0,
    "explain": "Avslutteren er perfeksjonisten i gruppen – følger opp detaljer, søker etter feil og mangler, og sørger for at arbeidet holder høy kvalitet ved leveranse."
  },
  {
    "id": 32,
    "cat": "belbin",
    "catLabel": "Belbins grupperoller",
    "q": "Hva er kjennetegnet på rollen \"Koordinator\" i Belbins modell?",
    "opts": [
      "Leder gruppen ved å tydeliggjøre mål, delegere oppgaver og fremme felles beslutninger",
      "Sørger for at fremdrift, tempo og arbeidsflyt holder seg på sporet gjennom prosjektperioden",
      "Sikrer at leveranser fra ulike bidragsytere henger sammen, koordineres og leveres samlet",
      "Kontrollerer at etablerte regler, prosedyrer og standarder etterleves i gruppen"
    ],
    "correct": 0,
    "explain": "Koordinatoren er en moden og trygg ledertype som tydeliggjør mål, delegerer oppgaver til riktige mennesker og fremmer samarbeid og felles beslutninger i gruppen."
  },
  {
    "id": 33,
    "cat": "belbin",
    "catLabel": "Belbins grupperoller",
    "q": "Hva er kjennetegnet på rollen \"Ressurskontakt\" i Belbins modell?",
    "opts": [
      "Utforskende og entusiastisk – henter inn kontakter, ideer og ressurser utenfra gruppen",
      "Dyp faglig spesialistkompetanse – bidrar med inngående kunnskap, ekspertise på et smalt felt",
      "Holder oversikt over prosjektets budsjett – sørger for forsvarlig ressursbruk, oppfølging og kontroll",
      "Kartlegger gruppens samlede kompetanse, og foreslår hvordan ressursene bør fordeles"
    ],
    "correct": 0,
    "explain": "Ressurskontakten er utadvendt og entusiastisk – et nettverk av kontakter utenfor gruppen og henter inn impulser, ideer og ressurser som kan hjelpe gruppen fremover."
  },
  {
    "id": 34,
    "cat": "belbin",
    "catLabel": "Belbins grupperoller",
    "q": "Hva er kjennetegnet på rollen \"Vurderer\" i Belbins modell?",
    "opts": [
      "Strategisk og kritisk analytiker som vurderer ideer objektivt og oppdager svakheter",
      "Engasjert og kreativ bidragsyter som genererer et bredt spekter av originale løsningsforslag",
      "Evaluerer gruppemedlemmenes innsats og gir konstruktiv tilbakemelding på prestasjoner",
      "Fatter hurtige og selvstendige beslutninger når gruppen er under tidspress"
    ],
    "correct": 0,
    "explain": "Vurdereren er den strategiske, kritiske analytikeren. Er dyktig til å vurdere ideer og forslag objektivt, oppdager svakheter og hindrer dårlige beslutninger – men kan oppfattes som kritisk og kynisk."
  },
  {
    "id": 35,
    "type": "sort",
    "cat": "belbin",
    "catLabel": "Belbins grupperoller",
    "q": "Sorter hver av Belbins 9 roller i riktig kategori.",
    "bins": [
      {
        "id": "handling",
        "label": "Handlingsroller",
        "color": "#ef4444"
      },
      {
        "id": "sosial",
        "label": "Sosiale roller",
        "color": "#3b82f6"
      },
      {
        "id": "tanke",
        "label": "Reflekterende roller",
        "color": "#8b5cf6"
      }
    ],
    "items": [
      {
        "text": "Iverksetter",
        "bin": "handling"
      },
      {
        "text": "Avslutter",
        "bin": "handling"
      },
      {
        "text": "Pådriver",
        "bin": "handling"
      },
      {
        "text": "Koordinator",
        "bin": "sosial"
      },
      {
        "text": "Lagspiller",
        "bin": "sosial"
      },
      {
        "text": "Ressurskontakt",
        "bin": "sosial"
      },
      {
        "text": "Idéskaper",
        "bin": "tanke"
      },
      {
        "text": "Vurderer",
        "bin": "tanke"
      },
      {
        "text": "Spesialist",
        "bin": "tanke"
      }
    ],
    "explain": "Handlingsroller: Iverksetter, Avslutter, Pådriver. Sosiale roller: Koordinator, Lagspiller, Ressurskontakt. Reflekterende (tanke-)roller: Idéskaper, Vurderer, Spesialist."
  }
];
