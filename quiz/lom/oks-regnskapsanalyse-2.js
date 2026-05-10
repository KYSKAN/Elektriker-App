const QUIZ_META = {
  "id": "lom-oks-regnskapsanalyse-2",
  "title": "Regnskapsanalyse Del 2",
  "subtitle": "Økonomistyring – Likviditet & Tiltak",
  "description": "14 spørsmål – Likviditetsnøkkeltall, Tiltak og vurdering.",
  "cats": {
    "likviditet": {
      "label": "Likviditetsnøkkeltall",
      "color": "#10b981"
    },
    "tiltak": {
      "label": "Tiltak og vurdering",
      "color": "#f59e0b"
    }
  }
};

const QUESTIONS = [
  {
    "id": 15,
    "cat": "likviditet",
    "catLabel": "Likviditetsnøkkeltall",
    "q": "Hva er likviditetsgrad 1 (LG1), og hva er kravet?",
    "opts": [
      "LG1 = Omløpsmidler / Langsiktig gjeld; krav: over 2",
      "LG1 = (Omløpsmidler − Varelager) / Kortsiktig gjeld; krav: over 1",
      "LG1 = Kortsiktig gjeld / Omløpsmidler; krav: under 0,5",
      "LG1 = Omløpsmidler / Kortsiktig gjeld; krav: over 2"
    ],
    "correct": 3,
    "explain": "LG1 = Omløpsmidler / Kortsiktig gjeld. Krav: over 2 (dvs. omløpsmidler bør minst være dobbelt så store som kortsiktig gjeld). LG1 mellom 1 og 2 er advarsel; under 1 er kritisk."
  },
  {
    "id": 16,
    "cat": "likviditet",
    "catLabel": "Likviditetsnøkkeltall",
    "q": "Hva er likviditetsgrad 2 (LG2), og hva er kravet?",
    "opts": [
      "LG2 = (Omløpsmidler − Varelager) / Kortsiktig gjeld; krav: over 1",
      "LG2 = Omløpsmidler / Kortsiktig gjeld; krav: over 2 (samme som LG1)",
      "LG2 = (Bankinnskudd + Kasse) / Kortsiktig gjeld; krav: over 0,5",
      "LG2 = Kundefordringer / Langsiktig gjeld; krav: over 1"
    ],
    "correct": 0,
    "explain": "LG2 = (Omløpsmidler − Varelager) / Kortsiktig gjeld. Krav: over 1. Viser om de mest likvide omløpsmidlene (ekskl. varelager som kan være vanskelig å selge raskt) dekker kortsiktig gjeld."
  },
  {
    "id": 17,
    "cat": "likviditet",
    "catLabel": "Likviditetsnøkkeltall",
    "q": "Hva er varelagerets omløpshastighet, og hva er en god verdi?",
    "opts": [
      "Varekostnad / Gjennomsnittlig varelager; høy verdi er bra (betyr hurtig omsetning)",
      "Gjennomsnittlig varelager / Varekostnad × 365; lav verdi (færre dager) er bra",
      "Salgsinntekter / Varelager; bør ligge nær bransjegjennomsnitt og justeres for sesongmessige lagerbehov",
      "Varelager / Varekostnad; bør være under 0,1 for effektiv lagerstyring og redusert kapitalbinding i lager"
    ],
    "correct": 0,
    "explain": "Varelagerets omløpshastighet = Varekostnad / Gjennomsnittlig varelager. Høy verdi betyr at varelageret omsettes raskt – lite kapital bundet opp i lager. Lav verdi kan indikere svakt salg eller overfylt lager."
  },
  {
    "id": 18,
    "cat": "likviditet",
    "catLabel": "Likviditetsnøkkeltall",
    "q": "Hva er kredittid for kunder, og hva beregner den?",
    "opts": [
      "Antall dager fra kunden mottar faktura til betaling i gjennomsnitt; = Gjennomsnittlige kundefordringer × 360 / Kredittsalg inkl. mva",
      "Antall dager kunden har på seg til å betale ifølge kontrakten, uavhengig av faktisk betalingsatferd og forfalte krav",
      "Kredittsalg / Gjennomsnittlige kundefordringer – viser omsetningshastighet på fordringer og brukes til å beregne effektiv innkrevingsfrekvens",
      "Andel av kunder som betaler etter forfall; beregnes som Forfalte fordringer / Totale kundefordringer × 100 og brukes i kredittrisikostyring"
    ],
    "correct": 0,
    "explain": "Kredittid kunder = Gjennomsnittlige kundefordringer × 360 / Kredittsalg inkl. mva. Viser gjennomsnittlig antall dager fra fakturering til betaling. Kort kredittid er bedre for likviditeten."
  },
  {
    "id": 19,
    "cat": "likviditet",
    "catLabel": "Likviditetsnøkkeltall",
    "q": "Hva er kredittid for leverandører?",
    "opts": [
      "Gjennomsnittlig leverandørgjeld × 360 / Varekjøp inkl. mva – viser hvor lenge man utsetter betaling til leverandører",
      "Antall dager leverandøren innvilger kredit ifølge kontrakten, uavhengig av faktisk betalingspraksis og om bedriften betaler innen fristen",
      "Varekjøp / Gjennomsnittlig leverandørgjeld – viser leverandørgjeldets omløpshastighet",
      "Leverandørgjeld / Totale driftskostnader × 360 – viser gjeldsbyrden mot leverandører"
    ],
    "correct": 0,
    "explain": "Kredittid leverandører = Gjennomsnittlig leverandørgjeld × 360 / Varekjøp inkl. mva. Viser gjennomsnittlig antall dager man venter med å betale leverandørene. Lengre kredittid bedrer likviditeten på kort sikt, men kan skade leverandørforholdet."
  },
  {
    "id": 20,
    "cat": "tiltak",
    "catLabel": "Tiltak og vurdering",
    "q": "Hvilke tiltak kan bedre lønnsomheten?",
    "opts": [
      "Redusere antall ansatte og midlertidig utsette leverandørbetalinger for å frigi kapital",
      "Ta opp mer lån for å finansiere investeringer og vekst i nye markedssegmenter, og dermed øke omsetningsgrunnlaget på sikt",
      "Øke salgsprisene, redusere varekostnaden, øke bruttofortjenesteprosenten, kutte kostnader og øke omsetning",
      "Øke varelageret og innføre lengre betalingsfrister for kunder"
    ],
    "correct": 2,
    "explain": "Lønnsomheten bedres ved: øke inntekter (høyere pris, mer salg), bedre varekostnad (forhandlinger, redusere svinn), kutte unødvendige kostnader, forbedre bruttofortjeneste og øke kapitaleffektiviteten."
  },
  {
    "id": 21,
    "cat": "tiltak",
    "catLabel": "Tiltak og vurdering",
    "q": "Hvilke tiltak kan bedre soliditeten?",
    "opts": [
      "Øke kortsiktig gjeld for å finansiere løpende drift",
      "Selge anleggsmidler og dele ut gevinsten som utbytte",
      "Ta opp mer langsiktig lån og investere i nye anleggsmidler",
      "Tilbakeholde overskudd (ikke dele ut utbytte), skyte inn ny egenkapital, nedbetale gjeld"
    ],
    "correct": 3,
    "explain": "Soliditeten (egenkapitalandelen) bedres ved: tilbakeholde overskudd i stedet for å dele ut utbytte, skyte inn ny egenkapital fra eiere, betale ned gjeld og unngå unødvendige lån."
  },
  {
    "id": 22,
    "cat": "tiltak",
    "catLabel": "Tiltak og vurdering",
    "q": "Hvilke tiltak kan bedre likviditeten?",
    "opts": [
      "Kortere kredittid til kunder, bedre innkrevingsrutiner, redusere varelager, utvide kassekreditt, utsette utbytte",
      "Øke varelager for å sikre leveranser og unngå utsalg, samt forlenge kundefordringer for å øke kundenes kjøpslyst og styrke salgsvolum",
      "Dele ut mer utbytte og øke egenkapitalen via emisjon for å styrke soliditeten",
      "Investere i ny produksjonskapasitet finansiert med kortsiktig gjeld og øke anleggsmidlene"
    ],
    "correct": 0,
    "explain": "Likviditeten bedres ved: raskere innbetaling fra kunder (kortere kredittid, faktoring), redusere varelager, forhandle lengre kredittid fra leverandører, kutte unødvendige utbetalinger og holde tilbake utbytte."
  },
  {
    "id": 25,
    "cat": "tiltak",
    "catLabel": "Tiltak og vurdering",
    "q": "Hva er den viktigste årsaken til dårlig likviditet?",
    "opts": [
      "For lav bruttofortjenesteprosent og høye varekostnader",
      "For lav egenkapitalprosent og høy gjeldsgrad",
      "Lang kredittid til kunder, stor kapital bundet i varelager, sesonmessige svingninger og investeringer",
      "For høy omløpshastighet på varelageret og for korte leverandørkreditter, noe som tapper driftskapitalen"
    ],
    "correct": 2,
    "explain": "Dårlig likviditet skyldes typisk: lang innbetalingstid fra kunder, store varelager som binder kapital, sesongsvingninger, store investeringer og store utbyttebetalinger. God lønnsomhet garanterer ikke god likviditet."
  },
  {
    "id": 26,
    "cat": "likviditet",
    "catLabel": "Likviditetsnøkkeltall",
    "q": "En bedrift har LG1 = 1,4 og LG2 = 0,7. Hva sier dette om likviditeten?",
    "opts": [
      "Begge verdier er innenfor normal variasjon – ingen umiddelbar bekymring siden kravene varierer mellom bransjer og man bør se trenden over flere år",
      "LG1 er akseptabel, men LG2 er ikke relevant når varelager er lite",
      "LG1 under 2 er et advarselssignal, LG2 under 1 er kritisk – bedriften kan ha problemer med å betale kortsiktig gjeld",
      "Begge verdier er for høye – bedriften binder for mye kapital i omløpsmidler og bør øke kortsiktig gjeld"
    ],
    "correct": 2,
    "explain": "LG1 = 1,4 er under kravet på 2 (advarsel). LG2 = 0,7 er under kravet på 1 (kritisk – de likvide omløpsmidlene dekker ikke kortsiktig gjeld). Bedriften bør iverksette tiltak for å bedre likviditeten."
  },
  {
    "id": 28,
    "cat": "tiltak",
    "catLabel": "Tiltak og vurdering",
    "q": "Hva er faktoring, og hva brukes det til for å bedre likviditeten?",
    "opts": [
      "En metode der bedriften reduserer varelageret ved å selge ut med rabatt og frigjøre kapital fra lager",
      "En finansieringsform der leverandøren gir lenger betalingsfrist mot en avgift, noe som utsetter kontantutgangen og bedrer den kortsiktige betalingsevnen",
      "Å selge kundefordringer til et factoringselskap mot umiddelbar betaling (minus en avgift) – gir raskere innbetaling",
      "En ordning der banken overtar innkrevingen og stiller kassekreditt til disposisjon mot pant i fordringer"
    ],
    "correct": 2,
    "explain": "Faktoring innebærer at bedriften selger sine kundefordringer til et factoringselskap som betaler umiddelbart (minus en avgift). Dette omgjør kortsiktige fordringer til kontanter og bedrer likviditeten raskt."
  },
  {
    "id": 33,
    "cat": "likviditet",
    "catLabel": "Likviditetsnøkkeltall",
    "q": "Hva er likviditet?",
    "opts": [
      "Bedriftens evne til å betale alle forpliktelser og regninger etter hvert som de forfaller",
      "Bedriftens evne til å skape overskudd over tid, der inntektene er høyere enn kostnadene",
      "Andelen egenkapital av totalkapitalen, som viser styrken til å motstå tap og nedgangstider",
      "Kontantstrømmene som gjenstår fra driften etter at alle investeringer og avdrag er betalt"
    ],
    "correct": 0,
    "explain": "Likviditet betyr betalingsevne – at bedriften til enhver tid kan betale regningene sine. Måles med likviditetsgrad 1 og 2. God lønnsomhet gir ikke automatisk god likviditet: man kan ha stort overskudd men likevel slite med å betale forpliktelsene."
  },
  {
    "id": 34,
    "type": "sort",
    "cat": "tiltak",
    "catLabel": "Tiltak og vurdering",
    "q": "Sorter hvert nøkkeltall under riktig analysekategori.",
    "bins": [
      {
        "id": "lonn",
        "label": "Lønnsomhet",
        "color": "#8b5cf6"
      },
      {
        "id": "sol",
        "label": "Soliditet",
        "color": "#3b82f6"
      },
      {
        "id": "lik",
        "label": "Likviditet",
        "color": "#10b981"
      }
    ],
    "items": [
      {
        "text": "Totalkapitalrentabilitet (TKR)",
        "bin": "lonn"
      },
      {
        "text": "Egenkapitalprosent",
        "bin": "sol"
      },
      {
        "text": "Likviditetsgrad 1 (LG1)",
        "bin": "lik"
      },
      {
        "text": "Driftsmargin",
        "bin": "lonn"
      },
      {
        "text": "Gjeldsgrad",
        "bin": "sol"
      },
      {
        "text": "Varelagerets omløpshastighet",
        "bin": "lik"
      },
      {
        "text": "Egenkapitalrentabilitet (EKR)",
        "bin": "lonn"
      },
      {
        "text": "Finansieringsgrad 1",
        "bin": "sol"
      }
    ],
    "explain": "Lønnsomhet: TKR, EKR, driftsmargin, resultatmargin. Soliditet: egenkapitalprosent, gjeldsgrad, finansieringsgrad 1. Likviditet: LG1, LG2, varelagerets omløpshastighet, kredittid kunder/leverandører."
  },
  {
    "id": 35,
    "cat": "tiltak",
    "catLabel": "Tiltak og vurdering",
    "q": "Hvilke to tiltak bedrer soliditeten til en bedrift?",
    "opts": [
      "Tilbakeholde overskudd i stedet for å betale ut utbytte til eierne",
      "Ta opp mer kortsiktig gjeld for å finansiere den løpende driften",
      "Skyte inn ny egenkapital via emisjon til eksisterende eller nye eiere",
      "Øke varelageret for å styrke leveringsevnen og redusere leveringstiden"
    ],
    "correct": [
      0,
      2
    ],
    "explain": "Soliditet (egenkapitalandelen) bedres ved å øke egenkapitalen: tilbakeholde overskudd (ikke dele ut utbytte) og skyte inn ny kapital fra eiere. Mer kortsiktig gjeld og større varelager svekker soliditeten."
  }
];
