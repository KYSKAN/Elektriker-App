const QUIZ_META = {
  "id": "lom-marked-strategi-2",
  "title": "Markedsstrategi Del 2",
  "subtitle": "LØM Fagskole – Markedsplan & Markedsmiks",
  "description": "17 spørsmål – Markedsplan og mål, Markedsmiksen 5P, Distribusjon og kommunikasjon.",
  "cats": {
    "markedsplan": {
      "label": "Markedsplan og mål",
      "color": "#10b981"
    },
    "markedsmiks": {
      "label": "Markedsmiksen 5P",
      "color": "#f59e0b"
    },
    "distribusjon": {
      "label": "Distribusjon og kommunikasjon",
      "color": "#ec4899"
    }
  }
};

const QUESTIONS = [
  {
    "id": 15,
    "cat": "markedsplan",
    "catLabel": "Markedsplan og mål",
    "q": "Hva er en markedsstrategi?",
    "opts": [
      "En kortfattet annonseplan med budsjett, valg av kanaler og tidsplan for kommende kvartal",
      "En systematisk gjennomgang av konkurrentenes styrker, svakheter og markedsposisjon",
      "En langsiktig plan som beskriver hvordan bedriften skal nå sine markedsmål gjennom valg av målgrupper og markedsmiks",
      "En detaljert prisoversikt som viser hva bedriften tar for ulike produkter, tjenester og skreddersydde pakkeløsninger for ulike kundegrupper"
    ],
    "correct": 2,
    "explain": "Markedsstrategien er en overordnet, langsiktig plan som angir hvordan bedriften skal nå sine markedsmål – gjennom valg av segmenter, målgrupper og sammensetning av markedsmiksen."
  },
  {
    "id": 16,
    "cat": "markedsplan",
    "catLabel": "Markedsplan og mål",
    "q": "Hva er riktig rekkefølge for prosessen med å utarbeide en markedsplan?",
    "opts": [
      "Strategi → Situasjonsanalyse → Markedsmål → Program → Budsjettering → Kontroll",
      "Situasjonsanalyse → Strategi → Markedsmål → Program → Budsjettering → Aktiviteter",
      "Kontroll → Situasjonsanalyse → Markedsmål → Strategi → Gjennomføring → Evaluering",
      "Overordnede mål → Situasjonsanalyse → Markedsmål → Strategi → Program → Aktiviteter → Kontroll"
    ],
    "correct": 3,
    "explain": "Markedsplanprosessen starter med overordnede mål og forretningsidé, går via situasjonsanalyse og SMART-markedsmål, til strategi, program, konkrete aktiviteter og til slutt kontroll av resultater."
  },
  {
    "id": 18,
    "cat": "markedsplan",
    "catLabel": "Markedsplan og mål",
    "q": "Hva er et markedssegment?",
    "opts": [
      "Et geografisk distrikt der bedriften har størst salgsvolum og høyest markedsandel sammenlignet med konkurrentene",
      "En produktkategori som er forbeholdt og distribueres til én bestemt type forhandlere og salgskanaler",
      "En gruppe kunder med felles kjennetegn, behov eller kjøpsatferd som reagerer likt på markedstiltak",
      "Et prissjikt som avgjør hvilke kundegrupper som har råd til produktet"
    ],
    "correct": 2,
    "explain": "Et markedssegment er en gruppe potensielle kunder med felles kjennetegn (geografi, demografi, psykografi, atferd) som reagerer relativt likt på et markedsbudskap eller -tilbud."
  },
  {
    "id": 19,
    "cat": "markedsplan",
    "catLabel": "Markedsplan og mål",
    "q": "Hvorfor er segmentering viktig i markedsføring?",
    "opts": [
      "Det gir mulighet til å nå alle kunder med én felles kampanje og ett budskap",
      "Det er primært nyttig for store konsern med mange produktlinjer og internasjonale markeder",
      "Det gjør det mulig å tilby identiske produkter til alle kundegrupper uten kostbar tilpasning",
      "Det gjør at man kan tilpasse markedsbudskapet til ulike grupper og bruke ressurser mer effektivt"
    ],
    "correct": 3,
    "explain": "Segmentering gjør at bedriften kan skreddersy produkter, priser, distribusjon og kommunikasjon til ulike kundegrupper – noe som gir høyere effektivitet og bedre match mellom tilbud og behov."
  },
  {
    "id": 20,
    "cat": "markedsmiks",
    "catLabel": "Markedsmiksen 5P",
    "q": "Hva er de fem P-ene i markedsmiksen?",
    "opts": [
      "Produkt, Pris, Distribusjon (Place), Påvirkning (Promotion) og Personale",
      "Produkt, Pris, Promotering (reklame), Posisjonering og Prosess (leveranse)",
      "Planlegging, Produkt, Pris, PR (public relations) og Partnerskap (samarbeid)",
      "Produkt, Profitt, Plass (plassering), Promotering og Prosess (gjennomføring)"
    ],
    "correct": 0,
    "explain": "Markedsmiksen 5P: Produkt (hva selges), Pris (hva koster det), Distribusjon/Place (hvor og hvordan kjøper kunden), Påvirkning/Promotion (hvordan kommuniseres det) og Personale (mennesker som leverer tjenesten)."
  },
  {
    "id": 21,
    "cat": "markedsmiks",
    "catLabel": "Markedsmiksen 5P",
    "q": "Hva innebærer \"Produkt\"-P-en i markedsmiksen?",
    "opts": [
      "Nivået på prisen som settes, inkludert rabatter, kampanjepriser og betalingsbetingelser overfor ulike kunder",
      "Salgs- og distribusjonskanalene produktet gjøres tilgjengelig gjennom for sluttkundene",
      "Alt som tilbys til kundene: fysisk produkt, service, garantier, design, merkevare og emballasje",
      "Reklamekampanjene og promoteringstiltakene som brukes for å markedsføre produktet til målgruppen"
    ],
    "correct": 2,
    "explain": "Produkt-P-en encompasser alt bedriften tilbyr kunden – fysiske egenskaper, design, kvalitet, merkevare, emballasje, service, garantier og tilleggstjenester."
  },
  {
    "id": 23,
    "cat": "markedsmiks",
    "catLabel": "Markedsmiksen 5P",
    "q": "Hva innebærer \"Påvirkning\" (Promotion) i markedsmiksen?",
    "opts": [
      "Alle kommunikasjonstiltak for å informere, påvirke og bygge relasjoner med kunder: reklame, PR, sosiale medier, direktesalg",
      "Å justere prisen ned midlertidig i kortere perioder for å stimulere til økt kjøpsatferd og tiltrekke prissensitive kunder i målgruppen",
      "Å utbetale provisjon og bonuser til selgere som overstiger det månedlige salgsmålet og volumkravene",
      "Å oppgradere produktets funksjonelle egenskaper og estetiske design fortløpende basert på ny kundeinnsikt"
    ],
    "correct": 0,
    "explain": "Påvirkning (Promotion) er kommunikasjonsmiksen – alle tiltak for å informere og overtale målgruppen: reklame, PR, sosiale medier, event-markedsføring, direkte markedsføring og personlig salg."
  },
  {
    "id": 27,
    "cat": "markedsplan",
    "catLabel": "Markedsplan og mål",
    "q": "Hva kjennetegner et godt markedsmål ifølge SMART-prinsippet?",
    "opts": [
      "\"Vi skal bli en ledende og respektert aktør som kundene setter pris på\"",
      "\"Vi skal vokse og styrke posisjonen vår i markedet kommende år\"",
      "\"Vi skal øke markedsandelen med 5 prosentpoeng innen utgangen av inneværende kalenderår\"",
      "\"Vi skal levere bedre kundeservice enn konkurrentene i løpet av det kommende kalenderåret\""
    ],
    "correct": 2,
    "explain": "Et SMART markedsmål er Spesifikt (5 prosentpoeng), Målbart (kan verifiseres), Akseptert, Realistisk og Tidsbestemt (innen utgangen av kalenderåret). Vage formuleringer er ikke SMART."
  },
  {
    "id": 29,
    "cat": "markedsmiks",
    "catLabel": "Markedsmiksen 5P",
    "q": "Hva påvirker valg av prisstrategi for et produkt?",
    "opts": [
      "Kostnader, konkurrentenes priser, kundenes betalingsvilje, posisjonering og markedsstrategi",
      "Primært de direkte produksjonskostnadene – alt annet er klart sekundært i prissettingsprosessen",
      "Størrelsen på salgsavdelingen og antall aktive kunder i bedriftens eksisterende kundeportefølje",
      "Først og fremst hva kundene historisk sett har betalt for tilsvarende produkter og tjenester"
    ],
    "correct": 0,
    "explain": "Prissetting er komplekst og avhenger av mange faktorer: egne kostnader, konkurrentenes priser, kundenes betalingsvilje, ønsket posisjonering (premium vs. massemarked) og overordnet markedsstrategi."
  },
  {
    "id": 31,
    "type": "order",
    "cat": "markedsplan",
    "catLabel": "Markedsplan og mål",
    "q": "Sett trinnene i markedsplanprosessen i riktig rekkefølge. Første trinn øverst, siste trinn nederst.",
    "items": [
      "Kontroll av resultater mot mål",
      "Konkrete aktiviteter og tiltak",
      "Program og gjennomføringsplan",
      "Markedsstrategi (STP og markedsmiks)",
      "Markedsmål (SMART-formulerte)",
      "Situasjonsanalyse (SWOT, PESTEL)",
      "Overordnede mål og forretningsidé"
    ],
    "explain": "Markedsplanprosessen: 1) Overordnede mål → 2) Situasjonsanalyse → 3) Markedsmål → 4) Strategi → 5) Program → 6) Aktiviteter → 7) Kontroll."
  },
  {
    "id": 34,
    "cat": "distribusjon",
    "catLabel": "Distribusjon og kommunikasjon",
    "q": "Hva er direkte distribusjon?",
    "opts": [
      "Salg gjennom et begrenset antall eksklusive forhandlere med tett oppfølging og sertifisert servicekvalitet per region",
      "Produsenten selger direkte til sluttbruker uten bruk av mellomledd, f.eks. via nettbutikk eller eget utsalg",
      "En ekspressbasert leveringsordning der varen sendes direkte fra produsent til sluttforbruker innen 24 timer uten mellomledd",
      "En distribusjonsmodell der grossisten styrer prissettingen og plasseres mellom produsent og detaljist"
    ],
    "correct": 1,
    "explain": "Direkte distribusjon innebærer at produsenten selger direkte til sluttbruker uten mellomledd – via nettbutikk, egne butikker, telefonsalg eller dørselgere. Fordel: full kontroll over kunderelasjonen. Ulempe: krever mer ressurser til distribusjon."
  },
  {
    "id": 35,
    "cat": "distribusjon",
    "catLabel": "Distribusjon og kommunikasjon",
    "q": "Hva kjennetegner intensiv distribusjon?",
    "opts": [
      "Produktet selges kun gjennom én eksklusiv forhandler per geografisk område etter kontrakt",
      "Produktet distribueres gjennom et nøye utvalgt antall forhandlere som tilfredsstiller kravene",
      "Produktet selges kun gjennom produsentens egne butikker og nettkanal, uten eksterne forhandlere",
      "Produktet gjøres tilgjengelig gjennom flest mulig utsalgssteder for å maksimere markedsdekning"
    ],
    "correct": 3,
    "explain": "Intensiv distribusjon betyr å gjøre produktet tilgjengelig gjennom så mange utsalgssteder som mulig. Brukes gjerne for lavprisartikler (sjokolade, brus) der tilgjengelighet er avgjørende for salget."
  },
  {
    "id": 36,
    "cat": "distribusjon",
    "catLabel": "Distribusjon og kommunikasjon",
    "q": "Hva er eksklusiv distribusjon, og hvilke produkter passer denne strategien for?",
    "opts": [
      "Salg gjennom svært få, utvalgte forhandlere per marked – brukes for luksusvarer og merkevarer med høy prestisje",
      "Salg gjennom flest mulig utsalgssteder – brukes for hverdagsprodukter der tilgjengelighet er avgjørende",
      "Salg utelukkende via egne nettkanaler og nettbutikk, slik at konkurrentene ikke kan sammenligne prisene i fysiske butikker",
      "Salg gjennom et nøye utvalgt, moderat antall forhandlere som tilfredsstiller krav til servicenivå og merkevareprofilering"
    ],
    "correct": 0,
    "explain": "Eksklusiv distribusjon = svært få forhandlere per marked, typisk én per region. Passer for luksusprodukter (Rolex, Ferrari) der eksklusivitet og kontrollert merkevareopplevelse er avgjørende. Selektiv distribusjon er mellomvarianten."
  },
  {
    "id": 37,
    "cat": "distribusjon",
    "catLabel": "Distribusjon og kommunikasjon",
    "q": "Hva er en omnikanalstrategi?",
    "opts": [
      "En strategi der virksomheten reduserer antall kanaler for å konsentrere ressursene om kjernekanalen",
      "En prismodell der kunden tilbys differensiert pris og ulikt rabattnivå avhengig av hvilken salgskanal de velger for kjøpet",
      "En helhetlig tilnærming der alle salgs- og kommunikasjonskanaler er integrerte og gir konsistent opplevelse",
      "En distribusjonsstrategi som prioriterer digitale kanaler og gradvis faser ut fysiske utsalgssteder"
    ],
    "correct": 2,
    "explain": "Omnikanalstrategi integrerer alle kanaler (nettbutikk, app, fysisk butikk, sosiale medier) slik at kunden opplever en sømløs og konsistent handel på tvers. Kontrast til multikanal, der kanalene er separate siloer uten integrasjon."
  },
  {
    "id": 38,
    "cat": "distribusjon",
    "catLabel": "Distribusjon og kommunikasjon",
    "q": "Hva bør tilpasses når man kommuniserer med ulike målgrupper?",
    "opts": [
      "Produksjonskostnaden for kampanjen – yngre målgrupper krever større budsjett til innholdsproduksjon",
      "Budskapet, tonen, kanalvalget og virkemidlene – tilpasset målgruppens preferanser og medievaner",
      "Primært produktets egenskaper og spesifikasjoner – selve produktet er det viktigste å kommunisere",
      "Kun prisnivå og tilbudsperiode – merkevare og posisjonering er uforanderlig på tvers av grupper"
    ],
    "correct": 1,
    "explain": "Effektiv markedskommunikasjon krever tilpasning til målgruppen: budskapet (hva du sier), tonen (formell/uformell), kanalvalget (TikTok vs. LinkedIn vs. avis) og virkemidlene (bilde, tekst, video). Kjenner du målgruppen, velger du riktig."
  },
  {
    "id": 39,
    "cat": "distribusjon",
    "catLabel": "Distribusjon og kommunikasjon",
    "q": "Hva er forskjellen mellom push- og pull-strategi i markedsføring?",
    "opts": [
      "Push betyr å senke prisen for å øke volumet; pull betyr å heve kvaliteten for å trekke kunder inn",
      "Push er mest effektivt i B2C-markedet for kjente merkevarer; pull-strategi er primært egnet for B2B og direktesalg til sluttbruker",
      "Pull-strategien driver produkter gjennom distribusjonskjeden ved at produsenten bearbeider forhandlere via salgsstøtte og bonuser",
      "Push presser produktet gjennom distribusjonskjeden via forhandlere; pull trekker kunder via forbrukerrettet reklame"
    ],
    "correct": 3,
    "explain": "Push-strategi: produsenten retter seg mot forhandlerne og presser produktet gjennom kjeden (f.eks. via salgsstøtte og incentiver). Pull-strategi: produsenten retter seg mot sluttbruker via reklame, slik at forbrukeren etterspør produktet i butikken."
  },
  {
    "id": 40,
    "type": "sort",
    "cat": "distribusjon",
    "catLabel": "Distribusjon og kommunikasjon",
    "q": "Sorter hvert eksempel til riktig distribusjonsstrategi.",
    "bins": [
      {
        "id": "eks",
        "label": "Eksklusiv distribusjon",
        "color": "#8b5cf6"
      },
      {
        "id": "sel",
        "label": "Selektiv distribusjon",
        "color": "#3b82f6"
      },
      {
        "id": "int",
        "label": "Intensiv distribusjon",
        "color": "#10b981"
      }
    ],
    "items": [
      {
        "text": "Rolex selges kun i utvalgte prestisjejuvelerforretninger",
        "bin": "eks"
      },
      {
        "text": "Brus og sjokolade finnes i alle kiosker og dagligvarebutikker",
        "bin": "int"
      },
      {
        "text": "Nike-sko selges gjennom godkjente sportsforretninger",
        "bin": "sel"
      },
      {
        "text": "Ferrari har én offisiell forhandler per storbyregion",
        "bin": "eks"
      },
      {
        "text": "Tyggegummi distribueres til bensinstasjoner og matbutikker",
        "bin": "int"
      },
      {
        "text": "Merkevare-kosmetikk selges kun i sertifiserte parfymerier",
        "bin": "sel"
      }
    ],
    "explain": "Eksklusiv: svært få forhandlere, luksusvarer. Selektiv: utvalgte forhandlere som oppfyller krav til service og profil. Intensiv: flest mulig utsalgssteder for hverdagsvarer med impulspreget kjøp."
  }
];
