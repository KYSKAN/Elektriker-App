const QUIZ_META = {
  "id": "lom-marked-grunnlag-1",
  "title": "Markedsgrunnlag Del 1",
  "subtitle": "LØM Fagskole – Markedsdefinisjon, Analyse & STP/AIDA",
  "description": "25 spørsmål – Markedsdefinisjoner, Markedsanalyse, AIDA og STP.",
  "cats": {
    "marked_def": {
      "label": "Markedsdefinisjoner",
      "color": "#8b5cf6"
    },
    "analyse": {
      "label": "Markedsanalyse",
      "color": "#3b82f6"
    },
    "aida_stp": {
      "label": "AIDA og STP",
      "color": "#10b981"
    }
  }
};

const QUESTIONS = [
  {
    "id": 1,
    "cat": "marked_def",
    "catLabel": "Markedsdefinisjoner",
    "q": "Hva er BOMOF-modellen en beskrivelse av?",
    "opts": [
      "Trinnene i Kotlers strategiske markedsplanleggingsprosess",
      "De fem grunnleggende markeds- og kjøpersegmentene",
      "Nøkkelelementene i den utvidede markedsmiksen (5P)",
      "Fasene i produktets livssyklus fra introduksjon til tilbakegang"
    ],
    "correct": 1,
    "explain": "BOMOF = Forbrukermarkedet (B), Organisasjonsmarkedet (O), Mellomhandlermarkedet (M), det Offentlige markedet (O) og Finansmarkedet (F) – de fem grunnleggende kjøpermarkedene."
  },
  {
    "id": 2,
    "cat": "marked_def",
    "catLabel": "Markedsdefinisjoner",
    "q": "Hva kjennetegner B2B-markedet sammenlignet med B2C?",
    "opts": [
      "Færre kunder, større volum per transaksjon og mer rasjonell, formell kjøpsatferd",
      "Mange kunder, lav lojalitet og korte beslutningsprosesser uten formelle rutiner eller innkjøpskomité",
      "Tilnærmet samme kjøpsatferd som B2C, men med høyere reklamekostnader",
      "Hyppigere kjøpssituasjoner med lavere enhetspris og impulsbaserte valg"
    ],
    "correct": 0,
    "explain": "B2B (business-to-business) kjennetegnes av færre kjøpere, høyere transaksjonsvolum og mer rasjonell, formell kjøpsprosess med innkjøpskomiteer, enn B2C (business-to-consumer)."
  },
  {
    "id": 3,
    "cat": "marked_def",
    "catLabel": "Markedsdefinisjoner",
    "q": "Hva er et mellomhandlermarked?",
    "opts": [
      "Et marked der sluttbrukere handler direkte fra produsenten uten mellomledd, og prisene settes fritt",
      "Et marked der bedrifter kjøper varer for å videreselge dem med fortjeneste",
      "Et digitalt marked for finansielle tjenester og betalingsformidling",
      "Et marked der staten kjøper inn tjenester på vegne av innbyggerne"
    ],
    "correct": 1,
    "explain": "Mellomhandlermarkedet (videreforhandlermarkedet) består av aktører som kjøper varer for å videreselge – f.eks. grossister og detaljister. De kjøper for å selge videre, ikke til eget forbruk."
  },
  {
    "id": 4,
    "cat": "marked_def",
    "catLabel": "Markedsdefinisjoner",
    "q": "Hva kjennetegner rasjonell kjøpsatferd i organisasjonsmarkedet?",
    "opts": [
      "Kjøp styrt av merkevarepreferanser og eksisterende relasjoner til en bestemt selger",
      "Hurtige beslutninger tatt av én person basert på erfaring, intuisjon og forrige kjøp",
      "Systematisk behovsvurdering, innhenting av tilbud og formell godkjenning av kjøpsbeslutningen",
      "Lojalitet til eksisterende leverandør uavhengig av prisnivå, kvalitet og leveringsdyktighet"
    ],
    "correct": 2,
    "explain": "Organisasjonsmarkedet kjennetegnes av rasjonell kjøpsatferd: systematisk behovsvurdering, tilbudsinnhenting, formelle innkjøpsprosedyrer og beslutninger som involverer flere personer (innkjøpskomité)."
  },
  {
    "id": 5,
    "cat": "marked_def",
    "catLabel": "Markedsdefinisjoner",
    "q": "Hva er markedsorientering?",
    "opts": [
      "Fokus på å øke produksjonskapasiteten for å redusere enhetskostnadene",
      "Fokus på kundens behov og ønsker som utgangspunkt for alle forretningsbeslutninger",
      "Fokus på kontinuerlig produktinnovasjon drevet av teknologiavdelingen i samarbeid med R&D",
      "Fokus på å øke salgsvolum gjennom bred distribusjon og lavere priser"
    ],
    "correct": 1,
    "explain": "En markedsorientert bedrift tar utgangspunkt i kundens behov og bygger strategi og produktutvikling rundt dette. I motsetning til produktorientering (fokus på produktet) og salgsorientering."
  },
  {
    "id": 6,
    "cat": "marked_def",
    "catLabel": "Markedsdefinisjoner",
    "q": "Hva er relasjonsmarkedsføring?",
    "opts": [
      "Kortvarig kampanjemarkedsføring rettet mot å maksimere salg i en enkelt periode gjennom prisnedslag og tilbud",
      "En strategi for å bygge og vedlikeholde langvarige og lønnsomme relasjoner med kunder og partnere",
      "Markedsføring gjennom anbefalinger og muntlig videreformidling mellom kunder",
      "En prismodell der lojalitet belønnes med gradvis lavere pris over tid"
    ],
    "correct": 1,
    "explain": "Relasjonsmarkedsføring fokuserer på langvarige kundeforhold fremfor enkelttransaksjoner. Lojale kunder er mer lønnsomme, klager sjeldnere og fungerer som ambassadører for merkevaren."
  },
  {
    "id": 7,
    "cat": "marked_def",
    "catLabel": "Markedsdefinisjoner",
    "q": "Hva er de fire fasene i produktlivssyklusen?",
    "opts": [
      "Utvikling, lansering, ekspansjon og avvikling",
      "Introduksjon, vekst, modning og gradvis tilbakegang",
      "Konsept, pilottest, skalering og optimalisering",
      "Analyse, design, produksjon og distribusjon"
    ],
    "correct": 1,
    "explain": "Produktlivssyklusen: Introduksjon (lavt salg, høye kostnader) → Vekst (raskt stigende salg) → Modning (stabilt høyt salg, sterk konkurranse) → Tilbakegang (synkende salg)."
  },
  {
    "id": 8,
    "cat": "marked_def",
    "catLabel": "Markedsdefinisjoner",
    "q": "Hva kjennetegner modningstfasen i produktlivssyklusen?",
    "opts": [
      "Høye utviklingskostnader og begrenset salgsvolum i oppstartsfasen",
      "Raskt stigende salg og mange nyetableringer i bransjen",
      "Stabilt høyt salg, sterk priskonkurranse, mange aktører og behov for differensiering",
      "Kraftig salgsfall og tydelig marginpress som tvinger de fleste aktører gradvis ut av markedet"
    ],
    "correct": 2,
    "explain": "I modningstfasen er salget stabilt høyt, men veksten flater ut. Konkurransen er sterk, prisene presses ned, og bedriften må differensiere seg for å beholde markedsandeler."
  },
  {
    "id": 9,
    "cat": "analyse",
    "catLabel": "Markedsanalyse",
    "q": "Hva er forskjellen mellom primærdata og sekundærdata i markedsundersøkelser?",
    "opts": [
      "Primærdata er eldre arkivdata fra egne arkiver; sekundærdata er oppdatert og fersk informasjon innhentet fra eksterne kilder i nær fortid",
      "Primærdata samles inn spesifikt for formålet (f.eks. intervju/spørreskjema); sekundærdata er allerede innsamlet av andre",
      "Primærdata er alltid tallbasert, strukturert og målbart; sekundærdata er alltid tekstbasert og åpent tolkende",
      "Primærdata gir alltid lavere kostnader enn sekundærdata fordi den er enklere og raskere å hente inn"
    ],
    "correct": 1,
    "explain": "Primærdata = ny data samlet inn for dette spesifikke formålet (intervjuer, spørreskjema, observasjon). Sekundærdata = eksisterende data fra andres undersøkelser, statistikk, rapporter og databaser."
  },
  {
    "id": 10,
    "cat": "analyse",
    "catLabel": "Markedsanalyse",
    "q": "Hva brukes en SWOT-analyse til?",
    "opts": [
      "Å vurdere kundesegmentenes kjøpsmotiver, beslutningsprosess og grad av merkelojalitet",
      "Å kartlegge interne styrker og svakheter samt eksterne muligheter og trusler",
      "Å beregne markedsandeler og estimere bransjeomsetning",
      "Å sette priser basert på kostnadsstruktur og konkurransenivå"
    ],
    "correct": 1,
    "explain": "SWOT = Strengths (styrker), Weaknesses (svakheter), Opportunities (muligheter), Threats (trusler). SWOT analyserer virksomhetens interne og eksterne strategiske situasjon."
  },
  {
    "id": 11,
    "cat": "analyse",
    "catLabel": "Markedsanalyse",
    "q": "Hva er segmentering i markedsføring?",
    "opts": [
      "Å kategorisere produktene etter pris, størrelse og bruksområde",
      "Å dele markedet inn i grupper med lignende behov, kjøpsatferd eller egenskaper",
      "Å vurdere hvilke distribusjonskanaler som gir lavest logistikkostnad og høyest dekningsbidrag",
      "Å tilpasse prisstrategien til ulike geografiske regioner"
    ],
    "correct": 1,
    "explain": "Segmentering innebærer å dele et marked inn i homogene grupper (segmenter) slik at man kan tilpasse markedsføringen til hvert segments spesifikke behov og ønsker."
  },
  {
    "id": 12,
    "cat": "analyse",
    "catLabel": "Markedsanalyse",
    "q": "Hva er «targeting» i STP-modellen?",
    "opts": [
      "Å velge hvilke kundesegmenter man ønsker å betjene med sine tilbud",
      "Å skape en klar og attraktiv posisjon i målgruppens bevissthet",
      "Å identifisere homogene grupper i markedet",
      "Å beregne lønnsomheten i ulike prisklasser og kanaler"
    ],
    "correct": 0,
    "explain": "Targeting = valg av målsegment(er). Etter å ha segmentert markedet velger bedriften hvilke segmenter den vil rette seg mot, basert på attraktivitet og egne ressurser/kompetanse."
  },
  {
    "id": 13,
    "cat": "analyse",
    "catLabel": "Markedsanalyse",
    "q": "Hva er posisjonering?",
    "opts": [
      "Å bestemme hvilke utsalgssteder og nettkanaler produktet skal selges gjennom, basert på målgruppens kjøpsvaner",
      "Å justere og tilpasse prisen kontinuerlig basert på konkurrentenes løpende tilbud og kampanjesyklus",
      "Å skape en tydelig, differensiert og varig, verdifull plass i målgruppens bevissthet relativt til konkurrentene",
      "Å analysere salgstall og markedsandeler fordelt på ulike geografiske regioner og distrikter"
    ],
    "correct": 2,
    "explain": "Posisjonering handler om hvordan bedriften ønsker at kundene skal oppfatte produktet eller merkenavnet relativt til konkurrentene – hvilken plass i kundens sinn man ønsker å okkupere."
  },
  {
    "id": 14,
    "cat": "analyse",
    "catLabel": "Markedsanalyse",
    "q": "Hva er Porters verdikjede?",
    "opts": [
      "En modell for å analysere hvilke aktiviteter i bedriften som skaper verdi og bygger konkurransefortrinn",
      "En modell som beskriver flyten av varer fra råvare til sluttforbruker gjennom hele forsyningskjeden og logistikknettverket",
      "En metode for å beregne produktets bidragsmargin og totalkostnad per enhet",
      "En modell for å vurdere samarbeidspartnere og strategiske allianser i bransjen"
    ],
    "correct": 0,
    "explain": "Porters verdikjede deler bedriftens aktiviteter i primæraktiviteter (inngående logistikk, drift, utgående logistikk, markedsføring, service) og støtteaktiviteter, og identifiserer hvor verdi skapes."
  },
  {
    "id": 15,
    "cat": "analyse",
    "catLabel": "Markedsanalyse",
    "q": "Hva er en forretningsidé i markedsplan-kontekst?",
    "opts": [
      "En budsjettert salgsplan med konkrete tall for kommende kvartal",
      "En selskapsrettslig beskrivelse av virksomhetens formål og organisasjonsform i henhold til foretaksregisterloven",
      "En teknisk spesifikasjon over produktporteføljens egenskaper og funksjoner",
      "En kortfattet beskrivelse av hva bedriften tilbyr, til hvem og hvorfor kundene velger dem"
    ],
    "correct": 3,
    "explain": "Forretningsidéen svarer på: hvilken kundeverdi skaper vi, for hvem og på hvilken måte. Den danner grunnlag for markedsstrategi, posisjonering og differensiering."
  },
  {
    "id": 16,
    "cat": "aida_stp",
    "catLabel": "AIDA og STP",
    "q": "Hva står AIDA for i markedsføring?",
    "opts": [
      "Attention (oppmerksomhet), Interest (interesse), Desire (ønske), Action (handling)",
      "Analyse, Innsikt, Dialog, Avslutning – fire trinn i en markedskommunikasjonsmodell for B2B-salg",
      "Anerkjennelse, Involvering, Differensiering, Aktivering",
      "Anskaffelse, Implementering, Distribusjon, Avkastning"
    ],
    "correct": 0,
    "explain": "AIDA = Attention (fange oppmerksomhet) → Interest (skape interesse) → Desire (bygge ønske/behov) → Action (stimulere til kjøp). Brukes til å forstå kjøpsprosessen og utforme kommunikasjon."
  },
  {
    "id": 17,
    "cat": "aida_stp",
    "catLabel": "AIDA og STP",
    "q": "I hvilken fase av AIDA brukes tilbud, rabatter og «kjøp nå»-knapper mest effektivt?",
    "opts": [
      "Attention – skape første kontakt og vekke nysgjerrighet",
      "Interest – holde engasjementet oppe og gi mer informasjon om produktets fordeler og egenskaper",
      "Desire – styrke produktets appell og relevans for kunden",
      "Action – konvertere interesse og begjær til faktisk kjøp og handling"
    ],
    "correct": 3,
    "explain": "Action-fasen handler om å få kunden til å handle nå. Tilbud, rabatter, enkle bestillingsprosesser og tydelige handlingsoppfordringer (call to action) er typiske virkemidler her."
  },
  {
    "id": 18,
    "cat": "aida_stp",
    "catLabel": "AIDA og STP",
    "q": "Hva er rekkefølgen i STP-prosessen?",
    "opts": [
      "Targeting → Segmentering → Posisjonering (top-down tilnærming)",
      "Posisjonering → Segmentering → Targeting",
      "Segmentering → Targeting → Posisjonering",
      "Targeting → Posisjonering → Segmentering"
    ],
    "correct": 2,
    "explain": "STP-prosessen: (1) Segmentering – del markedet inn i grupper, (2) Targeting – velg hvilke segmenter du vil betjene, (3) Posisjonering – avgjør hvordan du vil oppfattes i det valgte segmentet."
  },
  {
    "id": 19,
    "cat": "aida_stp",
    "catLabel": "AIDA og STP",
    "q": "Hvilken variabel er IKKE et typisk segmenteringskriterium i forbrukermarkedet?",
    "opts": [
      "Geografi (region, by/land)",
      "Demografi (alder, kjønn, inntekt)",
      "Leverandørens kredittverdighet og betalingsbetingelser",
      "Psykografi (livsstil, verdier og personlighet) – en av de fire hovedgruppene"
    ],
    "correct": 2,
    "explain": "Typiske segmenteringskriterier i forbrukermarkedet: geografi, demografi, psykografi og atferd. Leverandørens kredittverdighet er en variabel relevant for leverandørvurdering, ikke kundesegmentering."
  },
  {
    "id": 20,
    "cat": "aida_stp",
    "catLabel": "AIDA og STP",
    "q": "Hva er markedsplanens funksjon?",
    "opts": [
      "En rapporteringsplikt overfor Brønnøysundregistrene hvert regnskapsår",
      "En finansiell analyse beregnet for ekstern revisjon, kredittvurdering og investorrapportering hvert år",
      "Et styringsdokument som beskriver mål, strategi og tiltak for markedsarbeidet i en gitt periode",
      "Et opplæringshefte for nyansatte som skal lære bedriftens produktsortiment"
    ],
    "correct": 2,
    "explain": "Markedsplanen er et handlingsdokument som konkretiserer mål (gjerne SMART), strategi (STP, differensiering) og operasjonelle tiltak (5P) for en definert tidsperiode."
  },
  {
    "id": 21,
    "cat": "aida_stp",
    "catLabel": "AIDA og STP",
    "q": "Hva er «place» (distribusjon) i 5P-markedsmiksen?",
    "opts": [
      "Geografisk plassering av annonsering og reklamemateriell i det fysiske og digitale markedsrom",
      "Produksjonsstedet der varene tilvirkes, kvalitetssikres og klargjøres for salg, pakking og utsendelse til grossist",
      "Prisnivået som til enhver tid gjelder for produktet i de ulike salgskanalene og geografiske markedene",
      "Alle kanaler og metoder for å gjøre produktet tilgjengelig for kunden der de ønsker å kjøpe"
    ],
    "correct": 3,
    "explain": "Place (distribusjon) handler om å gjøre produktet tilgjengelig til rett tid og sted – via nettbutikk, grossister, detaljister, direkte salg eller andre kanaler."
  },
  {
    "id": 22,
    "cat": "aida_stp",
    "catLabel": "AIDA og STP",
    "q": "Hva er den femte P-en i den utvidede 5P-markedsmiksen?",
    "opts": [
      "Profitt (finansielt nettoresultat og dekningsbidrag)",
      "Prosess (interne styringsrutiner og tjenestelevering)",
      "People (menneskene og personalet som møter kunden)",
      "Partnerskap (strategiske allianser og samarbeidsavtaler med leverandører)"
    ],
    "correct": 2,
    "explain": "Den tradisjonelle 4P-en (Produkt, Pris, Plass, Påvirkning) er utvidet med People (mennesker/personell) som femte P, spesielt relevant for tjenesteyting der de ansattes kompetanse og atferd er kritisk."
  },
  {
    "id": 31,
    "type": "order",
    "cat": "aida_stp",
    "catLabel": "AIDA og STP",
    "q": "Sett AIDA-modellens faser i riktig rekkefølge. Første fase øverst, siste fase nederst.",
    "items": [
      "Action – stimulere til konkret kjøpshandling",
      "Desire – bygge ønske og relevans for produktet",
      "Interest – skape interesse og engasjement",
      "Attention – fange målgruppens oppmerksomhet"
    ],
    "explain": "AIDA: 1) Attention (fange oppmerksomheten) → 2) Interest (skape interesse) → 3) Desire (bygge ønske) → 4) Action (stimulere til kjøp). Modellen beskriver kjøperens vei fra første kontakt til kjøpsbeslutning."
  },
  {
    "id": 32,
    "type": "order",
    "cat": "marked_def",
    "catLabel": "Markedsdefinisjoner",
    "q": "Sett produktlivssyklusens faser i riktig rekkefølge. Første fase øverst, siste fase nederst.",
    "items": [
      "Tilbakegang – synkende salg, mange trekker seg ut av markedet",
      "Modning – stabilt høyt salg, sterk priskonkurranse",
      "Vekst – raskt stigende salg, nye aktører entrer bransjen",
      "Introduksjon – lavt salg, høye kostnader og begrenset distribusjon"
    ],
    "explain": "Produktlivssyklusen: 1) Introduksjon → 2) Vekst → 3) Modning → 4) Tilbakegang. Markedsstrategien bør tilpasses fasen – reklame og distribusjon i introduksjon, priskutt i modning."
  },
  {
    "id": 33,
    "type": "sort",
    "cat": "marked_def",
    "catLabel": "Markedsdefinisjoner",
    "q": "Sorter hvert eksempel til riktig marked i BOMOF-modellen.",
    "bins": [
      {
        "id": "b",
        "label": "B – Forbrukermarkedet",
        "color": "#8b5cf6"
      },
      {
        "id": "o_org",
        "label": "O – Organisasjonsmarkedet",
        "color": "#3b82f6"
      },
      {
        "id": "m",
        "label": "M – Mellomhandlermarkedet",
        "color": "#10b981"
      },
      {
        "id": "o_off",
        "label": "O – Det offentlige markedet",
        "color": "#f59e0b"
      }
    ],
    "items": [
      {
        "text": "En privatperson kjøper mat i dagligvarebutikken",
        "bin": "b"
      },
      {
        "text": "En storbedrift kjøper kontormøbler til nye lokaler",
        "bin": "o_org"
      },
      {
        "text": "En grossist kjøper tekstiler for å videreselge til butikker",
        "bin": "m"
      },
      {
        "text": "Et sykehus kjøper medisinsk utstyr gjennom anbud",
        "bin": "o_off"
      },
      {
        "text": "En student kjøper laptop til eget studiebruk",
        "bin": "b"
      },
      {
        "text": "En detaljist kjøper inn varer fra produsent for salg i butikk",
        "bin": "m"
      }
    ],
    "explain": "BOMOF: B=Forbrukermarkedet (privatpersoner til eget forbruk), O=Organisasjonsmarkedet (bedrifter til bruk i driften), M=Mellomhandlermarkedet (kjøper for å videreselge), O=Offentlig markedet (stat og kommune)."
  }
];
