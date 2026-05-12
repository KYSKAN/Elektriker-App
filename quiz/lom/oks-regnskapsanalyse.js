const QUIZ_META = {
  "id": "lom-oks-regnskapsanalyse-1",
  "title": "Regnskapsanalyse Del 1",
  "subtitle": "Økonomistyring – Lønnsomhet & Soliditet",
  "description": "21 spørsmål – Lønnsomhetsnøkkeltall, Soliditetsnøkkeltall.",
  "cats": {
    "lonnsomhet": {
      "label": "Lønnsomhetsnøkkeltall",
      "color": "#8b5cf6"
    },
    "soliditet": {
      "label": "Soliditetsnøkkeltall",
      "color": "#3b82f6"
    }
  }
};

const QUESTIONS = [
  {
    "id": 1,
    "cat": "lonnsomhet",
    "catLabel": "Lønnsomhetsnøkkeltall",
    "q": "Hva er hensikten med regnskapsanalyse?",
    "opts": [
      "Å beregne skatten bedriften skylder ved årets slutt basert på ligningsmessige avskrivninger og fradrag",
      "Å vurdere bedriftens lønnsomhet, soliditet og likviditet basert på regnskapstall",
      "Å fastsette budsjettet for neste regnskapsår",
      "Å dokumentere verdien av eiendeler for forsikringsformål og salg av virksomheten"
    ],
    "correct": 1,
    "explain": "Regnskapsanalyse brukes for å vurdere bedriftens finansielle helse på tre dimensjoner: lønnsomhet (tjener man nok?), soliditet (tåler man tap?) og likviditet (kan man betale regningene?)."
  },
  {
    "id": 2,
    "cat": "lonnsomhet",
    "catLabel": "Lønnsomhetsnøkkeltall",
    "q": "Hva er resultatmargin (resultatgrad), og hva er en typisk norm?",
    "opts": [
      "Resultatmargin = Driftsresultat / Salgsinntekter × 100; indikerer driftsoverskuddet som andel av omsetning",
      "Resultatmargin = Resultat før skatt / Salgsinntekter × 100; indikerer andelen av omsetningen som er nettoresultat",
      "Resultatmargin = Bruttofortjeneste / Salgsinntekter × 100; bransjenormen er referansenivå for sammenligning",
      "Resultatmargin = Årsresultat / Totalkapital × 100; viser avkastning på investert kapital"
    ],
    "correct": 1,
    "explain": "Resultatmargin = Resultat før skatt / Salgsinntekter × 100. Viser andelen av omsetningen som er igjen etter alle kostnader. Sammenlignes med bransjenormer – varierer mye mellom bransjer."
  },
  {
    "id": 3,
    "cat": "lonnsomhet",
    "catLabel": "Lønnsomhetsnøkkeltall",
    "q": "Hva er driftsmargin, og hva er kravet?",
    "opts": [
      "Driftsresultat / Totale eiendeler × 100; krav: 8% eller høyere for lønnsomhet",
      "Driftsresultat / Salgsinntekter × 100; krav: ~10% eller mer",
      "Salgsinntekter / Totale driftskostnader × 100; krav: over 100%",
      "Bruttofortjeneste / Salgsinntekter × 100; sammenlignes alltid med bransjenorm"
    ],
    "correct": 1,
    "explain": "Driftsmargin = Driftsresultat / Salgsinntekter × 100. Viser driftsoverskuddet som andel av omsetningen. Et krav på ca. 10% er vanlig – under dette anses driften som lite lønnsom."
  },
  {
    "id": 4,
    "cat": "lonnsomhet",
    "catLabel": "Lønnsomhetsnøkkeltall",
    "q": "Hva er bruttofortjeneste og bruttofortjenesteprosent?",
    "opts": [
      "Bruttofortjeneste = Salgsinntekter − Alle driftskostnader inkludert lønn og avskrivninger; BFP = BF / Driftskostnader × 100",
      "Bruttofortjeneste = Salgsinntekter − Varekostnader (i kr); BFP = BF / Salgsinntekter × 100",
      "Bruttofortjeneste = Varekostnader − Salgsinntekter; BFP = varekostnadsandelen × 100",
      "Bruttofortjeneste = Driftsresultat + Avskrivninger; BFP = BF / Totalkapital × 100"
    ],
    "correct": 1,
    "explain": "Bruttofortjeneste = Salgsinntekter − Varekostnad (i kr). BFP = Bruttofortjeneste / Salgsinntekter × 100. Viser andelen av salgsprisene som ikke går til varekostnader."
  },
  {
    "id": 5,
    "cat": "lonnsomhet",
    "catLabel": "Lønnsomhetsnøkkeltall",
    "q": "Hva er avanse, og hvordan skiller det seg fra bruttofortjenesteprosent?",
    "opts": [
      "Avanse = Bruttofortjeneste / Salgsinntekter × 100 – det er et annet navn for BFP, men justeres for rabatter og returer",
      "Avanse = Bruttofortjeneste / Varekostnaden × 100 – beregnes av innkjøpsprisen, ikke salgsprisen",
      "Avanse = Salgsinntekter / Varekostnad × 100 – viser salgsvolum per krone innkjøp og brukes i prissettingsmodeller",
      "Avanse = BFP justert for rabatter og returvarer"
    ],
    "correct": 1,
    "explain": "Avanse = Bruttofortjeneste / Varekostnad × 100. BFP beregnes av salgsprisen, avansen av innkjøpsprisen. Eksempel: vare kjøpt for 100, solgt for 150: BFP = 33%, avanse = 50%."
  },
  {
    "id": 6,
    "cat": "lonnsomhet",
    "catLabel": "Lønnsomhetsnøkkeltall",
    "q": "Hva er totalkapitalrentabilitet (TKR), og hva er kravet?",
    "opts": [
      "TKR = Årsresultat / Gjennomsnittlig totalkapital × 100; krav: over 15%",
      "TKR = (Driftsresultat + Renteinntekter) / Gjennomsnittlig totalkapital × 100; krav: 8–10%",
      "TKR = Salgsinntekter / Gjennomsnittlig totalkapital × 100; krav: over 1 – måler kapitalens evne til å generere omsetning",
      "TKR = Egenkapital / Gjennomsnittlig totalkapital × 100; krav: over 35% i tråd med soliditetskravet"
    ],
    "correct": 1,
    "explain": "TKR = (Driftsresultat + Renteinntekter) / Gjennomsnittlig totalkapital × 100. Viser avkastningen på all kapital (egenkapital + gjeld) uavhengig av finansiering. Krav: minst 8–10%, bør overstige gjeldsrenten."
  },
  {
    "id": 7,
    "cat": "lonnsomhet",
    "catLabel": "Lønnsomhetsnøkkeltall",
    "q": "Hva er egenkapitalrentabilitet (EKR), og hva er kravet?",
    "opts": [
      "EKR = Driftsresultat / Gjennomsnittlig egenkapital × 100; krav: 8–10%",
      "EKR = Årsresultat / Gjennomsnittlig egenkapital × 100; krav: 18–20%",
      "EKR = Egenkapital / Gjennomsnittlig totalkapital × 100; krav: over 35%",
      "EKR = Salgsinntekter / Gjennomsnittlig egenkapital × 100; krav: over 2"
    ],
    "correct": 1,
    "explain": "EKR = Årsresultat / Gjennomsnittlig egenkapital × 100. Viser avkastningen eierne får på sin investering. Krav: 18–20% er vanlig referanse – bør minst overstige alternativ avkastning (aksjeindeks e.l.)."
  },
  {
    "id": 8,
    "cat": "lonnsomhet",
    "catLabel": "Lønnsomhetsnøkkeltall",
    "q": "Hva er kapitalens omløpshastighet, og hva viser den?",
    "opts": [
      "Gjennomsnittlig totalkapital / Driftsinntekter – viser kapital per krone omsetning",
      "Driftsinntekter / Gjennomsnittlig totalkapital – viser hvor effektivt kapitalen brukes til å generere omsetning",
      "Salgsinntekter / Egenkapital – viser eiernes andel av omsetningen og brukes til å vurdere kapitalutnyttelse fra eierperspektiv",
      "Totalkapital / Årsresultat – viser gjennomsnittlig tilbakebetalingstid på investert kapital"
    ],
    "correct": 1,
    "explain": "Kapitalens omløpshastighet = Driftsinntekter / Gjennomsnittlig totalkapital. Viser hvor mange ganger i løpet av et år omsettes totalkapitalen. Høyere er bedre – mer omsetning per krone investert."
  },
  {
    "id": 9,
    "cat": "lonnsomhet",
    "catLabel": "Lønnsomhetsnøkkeltall",
    "q": "Hva er DuPont-modellen?",
    "opts": [
      "TKR = Kapitalens omløpshastighet × Resultatgrad – viser de to veiene til bedre lønnsomhet",
      "EKR = TKR × Gjeldsgrad – viser effekten av gearing på eierens avkastning, og hvordan låneopptak kan forsterke eller svekke eierens avkastning",
      "TKR = Driftsmargin × Egenkapitalprosent – kobler margin til soliditet",
      "Resultatgrad = Driftsmargin / Kapitalomløpshastighet – dekomponerer lønnsomheten"
    ],
    "correct": 0,
    "explain": "DuPont-modellen: TKR = Kapitalens omløpshastighet × Resultatgrad. Viser at lønnsomheten kan bedres enten ved å øke effektiviteten (mer omsetning per krone kapital) eller øke marginene (bedre resultatgrad)."
  },
  {
    "id": 10,
    "cat": "soliditet",
    "catLabel": "Soliditetsnøkkeltall",
    "q": "Hva er soliditet, og hva viser soliditetsnøkkeltallene?",
    "opts": [
      "Bedriftens evne til å betale gjeld ved forfall og unngå betalingsproblemer",
      "Bedriftens evne til å øke omsetning, vinne nye kunder og vokse over tid",
      "Bedriftens evne til å tåle tap over tid – jo mer egenkapital, jo bedre rustet mot nedturer",
      "Bedriftens evne til å hente inn ekstern finansiering ved behov fra banker og investorer"
    ],
    "correct": 2,
    "explain": "Soliditet handler om bedriftens langsiktige finansielle styrke – evnen til å tåle tap og motstå kriser. Jo høyere andel egenkapital i forhold til total kapital, jo mer solid er bedriften."
  },
  {
    "id": 11,
    "cat": "soliditet",
    "catLabel": "Soliditetsnøkkeltall",
    "q": "Hva er arbeidskapital, og hva er normen?",
    "opts": [
      "Arbeidskapital = Omløpsmidler − Kortsiktig gjeld; bør alltid holdes positiv",
      "Arbeidskapital = Egenkapital − Langsiktig gjeld; krav: over null for å unngå finansiell underdekning",
      "Arbeidskapital = Omløpsmidler / Kortsiktig gjeld; bør ligge over 2 for god likviditet",
      "Arbeidskapital = Anleggsmidler − Langsiktig gjeld; viser finansieringsbuffer"
    ],
    "correct": 0,
    "explain": "Arbeidskapital = Omløpsmidler − Kortsiktig gjeld. Viser den frie kapitalen som er tilgjengelig for driften. Bør være positiv – negativ arbeidskapital er et faresignal for likviditeten."
  },
  {
    "id": 12,
    "cat": "soliditet",
    "catLabel": "Soliditetsnøkkeltall",
    "q": "Hva er egenkapitalprosent, og hva er kravet?",
    "opts": [
      "Egenkapital / Salgsinntekter × 100; bransjenorm rundt 10%",
      "Årsresultat / Gjennomsnittlig egenkapital × 100; krav: over 18%",
      "Egenkapital / Gjeld × 100; krav: minst 100% for ren egenfinansiering",
      "Egenkapital / Totalkapital × 100; krav: ~35% eller mer"
    ],
    "correct": 3,
    "explain": "Egenkapitalprosent = Egenkapital / Totalkapital × 100. Viser andelen av totalkapitalen som er finansiert av eiere (ikke lån). Krav: ~35% er en vanlig norm – jo høyere, jo mer solid."
  },
  {
    "id": 13,
    "cat": "soliditet",
    "catLabel": "Soliditetsnøkkeltall",
    "q": "Hva er gjeldsgrad, og hva er normen?",
    "opts": [
      "Gjeldsgrad = Gjeld / Egenkapital; norm: under 7 (men lavere er bedre)",
      "Gjeldsgrad = Gjeld / Totalkapital × 100; norm: under 65% – tilsvarer egenkapitalprosent over 35%",
      "Gjeldsgrad = Langsiktig gjeld / Egenkapital; krav: under 3 for å sikre langsiktig betalingsevne",
      "Gjeldsgrad = Egenkapital / Gjeld; krav: over 0,5"
    ],
    "correct": 0,
    "explain": "Gjeldsgrad = Gjeld / Egenkapital. Viser forholdet mellom fremmedkapital og egenkapital. Norm: under 7, men lav gjeldsgrad er bedre. Høy gjeldsgrad gir sårbarhet for renteøkninger og nedturer."
  },
  {
    "id": 14,
    "cat": "soliditet",
    "catLabel": "Soliditetsnøkkeltall",
    "q": "Hva er finansieringsgrad 1, og hva er normen?",
    "opts": [
      "Omløpsmidler / Kortsiktig gjeld; krav: over 2 for å dekke kortsiktig gjeld",
      "Anleggsmidler / Totalkapital; krav: under 0,5 for balansert kapitalstruktur",
      "Anleggsmidler / (Egenkapital + Langsiktig gjeld); krav: under 1 – anleggsmidler bør finansieres av langsiktig kapital",
      "Egenkapital / Anleggsmidler; krav: over 1 for full egenfinansiering, og høyere verdier betyr at egenkapitalen alene overstiger anleggsmidlenes bokførte verdi"
    ],
    "correct": 2,
    "explain": "Finansieringsgrad 1 = Anleggsmidler / (Egenkapital + Langsiktig gjeld). Krav: under 1. Viser om anleggsmidler er finansiert av langsiktig kapital. Over 1 betyr at kortsiktig gjeld finansierer anleggsmidler – uheldig."
  },
  {
    "id": 23,
    "cat": "lonnsomhet",
    "catLabel": "Lønnsomhetsnøkkeltall",
    "q": "Hva er gjennomsnittsberegning av kapital i rentabilitetsnøkkeltall?",
    "opts": [
      "Man bruker kun inngående balanse (IB) alene for å unngå periodiserings- og sammenligningsfeil",
      "Man bruker alltid kapital per 31.12 (utgående balanse) for å sikre konsistens og sammenlignbarhet",
      "Gjennomsnittlig kapital = (Kapital IB + Kapital UB) / 2 – for å ta hensyn til endringer i løpet av året",
      "Gjennomsnitt beregnes som median av månedlige balansetall for å jevne ut sesongsvingninger"
    ],
    "correct": 2,
    "explain": "Gjennomsnittlig kapital = (Inngående balanse + Utgående balanse) / 2. Brukes i rentabilitetsnøkkeltall (TKR, EKR) fordi kapitalen kan endre seg gjennom året, og gjennomsnittet gir et mer korrekt bilde."
  },
  {
    "id": 24,
    "cat": "soliditet",
    "catLabel": "Soliditetsnøkkeltall",
    "q": "Hva er sammenhengen mellom lønnsomhet og soliditet over tid?",
    "opts": [
      "Det er ingen direkte sammenheng – de måler ulike aspekter av driften",
      "Bedre soliditet fører automatisk til økt lønnsomhet via lavere rentekostnader og lavere finansiell risiko for investorer",
      "Høy soliditet svekker lønnsomheten fordi egenkapital er dyrere enn gjeld",
      "God lønnsomhet gir overskudd som kan tilbakeholdes og øke egenkapitalen – bedrer soliditeten over tid"
    ],
    "correct": 3,
    "explain": "Lønnsomhet og soliditet henger nøye sammen: overskudd fra god lønnsomhet kan tilbakeholdes og øker egenkapitalen, noe som styrker soliditeten. Dermed bidrar lønnsom drift til finansiell styrke over tid."
  },
  {
    "id": 27,
    "cat": "lonnsomhet",
    "catLabel": "Lønnsomhetsnøkkeltall",
    "q": "Hva er benchmarking i regnskapsanalyse?",
    "opts": [
      "En lovpålagt revisjonsmetode der regnskapet kontrolleres systematisk mot gjeldende regnskapsstandarder og lovkrav",
      "En intern planleggingsteknikk for å fastsette de budsjett- og resultatkrav som er basert på foregående periode",
      "En prognosemetode for å anslå bedriftens fremtidige kontantstrøm basert på historiske nøkkeltall og trender",
      "Å sammenligne bedriftens nøkkeltall med bransjenormer, konkurrenter eller historiske tall for å vurdere prestasjoner"
    ],
    "correct": 3,
    "explain": "Benchmarking i regnskapsanalyse betyr å sammenligne egne nøkkeltall mot relevante referanser: bransjegjennomsnitt, konkurrenter og egne historiske tall. Dette gir kontekst for vurderingen."
  },
  {
    "id": 29,
    "cat": "lonnsomhet",
    "catLabel": "Lønnsomhetsnøkkeltall",
    "q": "En bedrift har TKR = 6% og gjennomsnittlig lånerente = 8%. Hva sier dette?",
    "opts": [
      "Bedriften er rimelig godt finansiert – TKR over 5% anses normalt som tilfredsstillende i de fleste bransjer",
      "Lånerenten er irrelevant for lønnsomheten så lenge TKR er positiv og gjelden betjenes",
      "Høy gjeld er en fordel fordi skatteskjoldet reduserer nettokostnaden av rentene og dermed kompenserer for lav TKR",
      "Bedriften har negativ gearingeffekt – gjeldsfinansieringen koster mer enn avkastningen, noe som svekker EKR"
    ],
    "correct": 3,
    "explain": "Når TKR (6%) er lavere enn lånerenten (8%), gir gjeld negativ gearingeffekt – man betaler mer for lånet enn man tjener på kapitalen. Dette svekker egenkapitalrentabiliteten. TKR bør overstige gjeldsrenten."
  },
  {
    "id": 30,
    "cat": "soliditet",
    "catLabel": "Soliditetsnøkkeltall",
    "q": "Hva viser finansieringsgrad 1 over 1?",
    "opts": [
      "At bedriften har god langsiktig kapitaldekning og lav finansieringsrisiko",
      "At omløpsmidler overstiger kortsiktig gjeld – positivt for likviditeten og tegn på god arbeidskapital",
      "At anleggsmidler finansieres av kortsiktig gjeld – en ugunstig og risikabel situasjon",
      "At egenkapitalen er større enn gjelden – bedriften er solid finansiert"
    ],
    "correct": 2,
    "explain": "Finansieringsgrad 1 > 1 betyr at egenkapital + langsiktig gjeld ikke dekker anleggsmidlene – deler av anleggsmidlene finansieres av kortsiktig gjeld. Dette er risikabelt fordi kortsiktig gjeld må fornyes hyppig."
  },
  {
    "id": 31,
    "cat": "lonnsomhet",
    "catLabel": "Lønnsomhetsnøkkeltall",
    "q": "Hva er lønnsomhet?",
    "opts": [
      "Evnen til å betale alle løpende forpliktelser og regninger etter hvert som de forfaller",
      "Andelen egenkapital av totalkapitalen, som viser evnen til å tåle tap og finansielle kriser",
      "Frie kontantstrømmer som gjenstår etter investeringer, gjeldsbetaling og avskrivninger",
      "Bedriftens evne til å skape overskudd og tjene penger – inntektene overstiger kostnadene"
    ],
    "correct": 3,
    "explain": "Lønnsomhet betyr at bedriften tjener penger: inntektene er høyere enn kostnadene. Måles med nøkkeltall som resultatmargin, driftsmargin og rentabilitet. Skilles fra likviditet (betalingsevne) og soliditet (tapsmotstand)."
  },
  {
    "id": 32,
    "cat": "lonnsomhet",
    "catLabel": "Lønnsomhetsnøkkeltall",
    "q": "Hva er avkastning?",
    "opts": [
      "Den totale omsetningen bedriften genererer fra salg av varer og tjenester i perioden",
      "Reduksjonen i bokført verdi av eiendeler som følge av slit, elde og teknisk foreldelse",
      "Bedriftens evne til å betale all kortsiktig gjeld med tilgjengelige omløpsmidler ved forfall",
      "Gevinsten eller overskuddet man oppnår i forhold til investert kapital, normalt i prosent"
    ],
    "correct": 3,
    "explain": "Avkastning er gevinsten relativt til investert kapital – uttrykt i prosent. I regnskapsanalyse brukes TKR (avkastning på totalkapital) og EKR (avkastning på egenkapital). Avkastning sammenlignes mot avkastningskravet for å vurdere om en investering er lønnsom."
  }
];
