const QUIZ_META = {
  "id": "lom-oks-kostnader-1",
  "title": "Kostnader Del 1",
  "subtitle": "Økonomistyring – Styring & Kostnadsbegreper",
  "description": "18 spørsmål om styring og kostnadsbegreper.",
  "cats": {
    "styring": {
      "label": "Økonomistyring – grunnlag",
      "color": "#8b5cf6"
    },
    "kostnadsbegreper": {
      "label": "Kostnadsbegreper",
      "color": "#3b82f6"
    }
  }
};

const QUESTIONS = [
  {
    "id": 1,
    "cat": "styring",
    "catLabel": "Økonomistyring – grunnlag",
    "q": "Hva er definisjonen på økonomistyring?",
    "opts": [
      "Å planlegge og rapportere budsjett gjennom koordinert innsats fra regnskapsavdelingen og linjelederne",
      "Å skape verdier for bedriften og sørge for at det alltid er nok penger til å betale regningene",
      "Å maksimere inntektene i inneværende regnskapsperiode",
      "Å analysere lønnsomheten per produkt og justere prisene deretter for å nå budsjettmålet"
    ],
    "correct": 1,
    "explain": "Økonomistyring er prosessen med å planlegge, koordinere og kontrollere en bedrifts ressurser for å skape verdier OG sikre at bedriften til enhver tid har tilstrekkelig likviditet."
  },
  {
    "id": 2,
    "cat": "styring",
    "catLabel": "Økonomistyring – grunnlag",
    "q": "Hva er de tre styringsnivåene i en bedrift?",
    "opts": [
      "Strategisk planlegging, taktisk planlegging og operativ planlegging",
      "Strategisk planlegging, økonomistyring og operativ styring",
      "Langsiktig budsjettering, mellomlang ressursallokering og kortsiktig kostnadsstyring",
      "Inntektsstyring, kostnadsstyring og likviditetsstyring"
    ],
    "correct": 1,
    "explain": "De tre styringsnivåene er: strategisk planlegging (langsiktige mål og retning), økonomistyring (ressursallokering og oppfølging) og operativ styring (daglig drift og kontroll)."
  },
  {
    "id": 3,
    "cat": "styring",
    "catLabel": "Økonomistyring – grunnlag",
    "q": "Hvem er bedriftens typiske interessenter?",
    "opts": [
      "Aksjonærer, styremedlemmer og konsernledelse – de som bærer det finansielle ansvaret",
      "Leverandører, kunder, eiere, ansatte, långivere og myndigheter",
      "Kunder, ansatte og lokalmiljøet der bedriften er etablert",
      "Revisorer, regnskapsførere og økonomiansvarlige i administrasjonen"
    ],
    "correct": 1,
    "explain": "Bedriftens interessenter er alle parter som har interesse i bedriftens resultater: leverandører, kunder, eiere, ansatte, långivere (banker) og myndigheter (stat, kommune)."
  },
  {
    "id": 4,
    "cat": "styring",
    "catLabel": "Økonomistyring – grunnlag",
    "q": "Hva er de fire regnskapstypene i en bedrift?",
    "opts": [
      "Lønnsregnskap, skatteregnskap, driftsregnskap og prosjektregnskap",
      "Finansregnskap, skatteregnskap, likviditetsoversikt og driftsregnskap",
      "Budsjett, resultatregnskap, likviditetsprognose og avdelingsregnskap",
      "Resultatregnskap, balanseregnskap, kontantstrøm og kostnadsregnskap"
    ],
    "correct": 1,
    "explain": "Fire regnskapstyper: Finansregnskap (lovpålagt, til eksterne), Skatteregnskap (grunnlag for skatt), Likviditetsoversikt (kontantstrøm) og Driftsregnskap (internt styringsverktøy)."
  },
  {
    "id": 5,
    "cat": "styring",
    "catLabel": "Økonomistyring – grunnlag",
    "q": "Hva er sammenhengen mellom lønnsomhet og balansen?",
    "opts": [
      "Lønnsomhet = Egenkapital ÷ Totalkapital × 100 – viser avkastning; Balanse = Omløpsmidler + Anleggsmidler",
      "Lønnsomhet = Inntekter − Kostnader = Resultat, som øker egenkapitalen; Balanse = Eiendeler = Gjeld + Egenkapital",
      "Lønnsomhet måles i resultatet som driftsmargin og uttrykkes i prosent av omsetningen; Balanse viser kun finansieringen",
      "Balansen viser kumulativ lønnsomhet over alle regnskapsår siden stiftelse; Resultat viser årets bidrag"
    ],
    "correct": 1,
    "explain": "Lønnsomhet = Inntekter − Kostnader = Resultat. Balanselikningen: Eiendeler = Gjeld + Egenkapital. Overskudd øker egenkapitalen i balansen over tid."
  },
  {
    "id": 25,
    "cat": "styring",
    "catLabel": "Økonomistyring – grunnlag",
    "q": "Hva er finansregnskapet, og hvem er det primært beregnet for?",
    "opts": [
      "Et internt styringsverktøy som gir ledelsen detaljert kostnadsinformasjon per avdeling, produkt og prosjekt i virksomheten",
      "En oversikt over variable og faste kostnader per produkt, brukt som grunnlag for intern priskalkylering og budsjettprosessen",
      "Et lovpålagt regnskap som viser bedriftens samlede økonomi – primært for eksterne brukere som kreditorer, eiere og myndigheter",
      "Et spesialregnskap for skattemessige beregninger som kun benyttes for å rapportere og innbetale skyldig skatt til myndighetene"
    ],
    "correct": 2,
    "explain": "Finansregnskapet er lovpålagt og viser bedriftens samlede økonomi i et standardisert format. Det er primært beregnet for eksterne interessenter: investorer, kreditorer, myndigheter og kunder."
  },
  {
    "id": 26,
    "cat": "styring",
    "catLabel": "Økonomistyring – grunnlag",
    "q": "Hva er driftsregnskapet, og hva brukes det til?",
    "opts": [
      "Et lovpålagt regnskap som rapporteres til Brønnøysundregistrene hvert regnskapsår",
      "En oversikt over driftsavtaler og leverandørforhold som brukes ved reforhandlinger",
      "Et internt budsjettdokument som samler alle kostnads- og inntektsprognoser",
      "Et frivillig internt regnskap som viser lønnsomheten per produkt, prosjekt eller avdeling"
    ],
    "correct": 3,
    "explain": "Driftsregnskapet er ikke lovpålagt og er et internt styringsverktøy. Det gir detaljert lønnsomhetsinformasjon per produkt, prosjekt, kunde eller avdeling – grunnlaget for priskalkylering og beslutninger."
  },
  {
    "id": 30,
    "cat": "styring",
    "catLabel": "Økonomistyring – grunnlag",
    "q": "Hva er omsetning?",
    "opts": [
      "Summen av alle kostnader og utgifter bedriften har pådratt seg i regnskapsperioden",
      "Nettoresultatet etter at alle drifts- og finanskostnader er trukket fra salgsinntektene",
      "Total verdi av varer og tjenester solgt i perioden – beregnes som pris × solgt mengde",
      "Alle innbetalinger på bedriftens kontoer, inkludert lån og kapitalinnskudd fra eiere"
    ],
    "correct": 2,
    "explain": "Omsetning (salgsinntekter) er den totale verdien av varer og tjenester solgt i en periode. Beregnes som pris × solgt mengde. Det er utgangspunktet for alle lønnsomhetsberegninger: omsetning − kostnader = resultat."
  },
  {
    "id": 6,
    "cat": "kostnadsbegreper",
    "catLabel": "Kostnadsbegreper",
    "q": "Hva er forskjellen mellom utgift, kostnad og utbetaling?",
    "opts": [
      "De brukes om hverandre i dagligtale, men i regnskapet er kostnad det sentrale begrepet",
      "Utgift = anskaffelsestidspunkt; Kostnad = forbrukstidspunkt; Utbetaling = betalingstidspunkt",
      "Utgift = fakturabeløp inkl. mva; Kostnad = netto uten mva; Utbetaling = netto fratrukket rabatter",
      "Kostnad = totalbeløp over levetid; Utgift = periodens andel; Utbetaling = kontantandelen"
    ],
    "correct": 1,
    "explain": "Utgift oppstår når man anskaffer noe (f.eks. kjøper varer). Kostnad oppstår når varen forbrukes i produksjonen. Utbetaling er den faktiske kontantbetalingen – disse tre tidspunktene er ofte forskjellige."
  },
  {
    "id": 7,
    "cat": "kostnadsbegreper",
    "catLabel": "Kostnadsbegreper",
    "q": "Hva er faste kostnader?",
    "opts": [
      "Kostnader som varierer i takt med antall ansatte og arbeidede timer i produksjonen",
      "Kostnader som er uavhengige av produksjonsvolumet innenfor et gitt intervall",
      "Kostnader med fast beløp per enhet, men som totalt stiger proporsjonalt med produksjonsvolumet",
      "Kostnader som er forhåndsavtalt med leverandør til fast pris for hele kontraktsperioden"
    ],
    "correct": 1,
    "explain": "Faste kostnader er uavhengige av produksjonsvolumet innenfor et kapasitetsintervall – f.eks. husleie, administrasjonslønn, forsikring. De endres ikke om man produserer mer eller mindre."
  },
  {
    "id": 8,
    "cat": "kostnadsbegreper",
    "catLabel": "Kostnadsbegreper",
    "q": "Hva er sprangvise faste kostnader?",
    "opts": [
      "Faste kostnader som øker brått når produksjonen overstiger en kapasitetsgrense",
      "Faste kostnader som reduseres gradvis etter hvert som effektiviteten øker",
      "Variable kostnader som stiger uforholdsmessig raskt ved høy kapasitetsutnyttelse",
      "Kostnader som inntreffer periodisk, typisk ved sesongstopp eller prosjektstart"
    ],
    "correct": 0,
    "explain": "Sprangvise faste kostnader er faste innenfor et intervall, men stiger brått (i \"sprang\") når produksjonen overstiger en kapasitetsgrense – f.eks. når man må leie ett ekstra lager."
  },
  {
    "id": 9,
    "cat": "kostnadsbegreper",
    "catLabel": "Kostnadsbegreper",
    "q": "Hva er variable kostnader, og hva er de tre undertypene?",
    "opts": [
      "Kostnader som er faste på kort sikt men kan justeres på lang sikt; undertyper: direkte, indirekte og kalkulatoriske",
      "Kostnader som svinger i takt med markedsprisene på innsatsfaktorer; undertyper: råvarer, energi og transport",
      "Kostnader som varierer med produksjonsvolumet; undertyper: proporsjonale, overproposjonale og underproposjonale",
      "Lønnskostnader knyttet til produksjon; undertyper: grunnlønn, overtid og akkord"
    ],
    "correct": 2,
    "explain": "Variable kostnader varierer med produksjonen. Tre typer: proporsjonale (øker likt med produksjon), overproposjonale (øker raskere enn produksjon – f.eks. overtid) og underproposjonale (øker saktere)."
  },
  {
    "id": 10,
    "cat": "kostnadsbegreper",
    "catLabel": "Kostnadsbegreper",
    "q": "Hva er direkte kostnader?",
    "opts": [
      "Kostnader som kan knyttes direkte til et bestemt produkt, prosjekt eller ordre",
      "Kostnader som belastes umiddelbart i regnskapet uten noen fordeling eller periodisering over tid",
      "Kostnader som varierer proporsjonalt med produksjonsvolumet og følger enhetsforbruket",
      "Alle variable kostnader som inngår i både bidrags- og selvkostkalkylen som direkte poster"
    ],
    "correct": 0,
    "explain": "Direkte kostnader er kostnader som kan knyttes direkte til et bestemt produkt, prosjekt eller ordre – f.eks. råvarer og direkte arbeidstid for et spesifikt produkt."
  },
  {
    "id": 11,
    "cat": "kostnadsbegreper",
    "catLabel": "Kostnadsbegreper",
    "q": "Hva er indirekte kostnader, og hvordan håndteres de?",
    "opts": [
      "Kostnader som ikke kan knyttes til ett bestemt produkt, men fordeles etter en fordelingsnøkkel",
      "Kostnader som oppstår hos underleverandører og viderefaktureres videre til sluttkundens faktura",
      "Kostnader som ikke er direkte synlige i resultatregnskapet, men fremkommer kun i noter til årsregnskapet",
      "Skjulte transaksjonskostnader og administrative tillegg som avdekkes ved intern revisjon av enkeltprosjekter"
    ],
    "correct": 0,
    "explain": "Indirekte kostnader (overhead) kan ikke direkte knyttes til ett produkt – f.eks. administrasjonslønn, strøm, husleie. De fordeles ut på produkter/prosjekter ved hjelp av en fordelingsnøkkel."
  },
  {
    "id": 12,
    "cat": "kostnadsbegreper",
    "catLabel": "Kostnadsbegreper",
    "q": "Hva er kalkulatoriske kostnader?",
    "opts": [
      "Estimerte fremtidige kostnader som beregnes i budsjettprosessen og formelt godkjennes av ledelsen i styret eller ledergruppen",
      "Interne kostnader som overføres mellom avdelinger via et fastsatt internprissystem for rettferdig allokering av fellesressurser",
      "Kostnader fastsatt av regnskapsfører på grunnlag av historiske gjennomsnittsverdier og bransjens normaldata per produsert enhet",
      "Kostnader uten faktisk utbetaling som representerer en alternativkostnad – f.eks. kalkulatorisk rente og kalkulatorisk eierlønn"
    ],
    "correct": 3,
    "explain": "Kalkulatoriske kostnader representerer alternativkostnad – hva ressurser alternativt kunne ha innbrakt. Eksempler: kalkulatorisk rente på egenkapital (avkastning man går glipp av), kalkulatorisk eierlønn og kalkulatoriske avskrivninger."
  },
  {
    "id": 13,
    "cat": "kostnadsbegreper",
    "catLabel": "Kostnadsbegreper",
    "q": "Hva er differansepris (minimumspris)?",
    "opts": [
      "Prisen som dekker kun de variable kostnadene pluss et lite bidrag – brukes ved tilleggsordrer med ledig kapasitet",
      "Den prisen som gir et bidrag som tilsvarer det aritmetiske gjennomsnittet av samtlige faste og variable kostnader",
      "Differansen mellom kalkulert selvkostpris og den normalprisen som markedet og konkurrenter forventer",
      "En pris fastsatt politisk som kompromiss mellom full selvkost og ren variabel kostpris"
    ],
    "correct": 0,
    "explain": "Differansepris (minimumspris) er den prisen som dekker de variable kostnadene som påløper spesifikt for en ordre, pluss eventuelt et bidrag til dekning av faste kostnader. Brukes når man har ledig kapasitet."
  },
  {
    "id": 14,
    "cat": "kostnadsbegreper",
    "catLabel": "Kostnadsbegreper",
    "q": "Hva er inntekt definert som i pensum?",
    "opts": [
      "Totalt innbetalt beløp på bankkonto fratrukket mva og avgifter i perioden",
      "Omsetning minus returer, rabatter og krediteringer til kunder",
      "Pris × Mengde – verdien av det som er solgt/levert i perioden",
      "Overskuddet bedriften sitter igjen med etter at alle kostnader er trukket fra"
    ],
    "correct": 2,
    "explain": "Inntekt = Pris × Mengde. Det er verdien av varer og tjenester levert til kunder i perioden – uavhengig av om betaling er mottatt. Inntekt opptjenes ved levering, ikke ved betaling."
  },
  {
    "id": 23,
    "cat": "kostnadsbegreper",
    "catLabel": "Kostnadsbegreper",
    "q": "Et trykkeri kjøper inn papir for 50 000 kr i mars og bruker det i produksjonen i april. Hva er utgift, kostnad og utbetaling?",
    "opts": [
      "Alle tre inntreffer i mars, siden kjøpet og forpliktelsen oppstår samtidig",
      "Kostnad oppstår i mars (kjøpstidspunktet), utgift i april (forbrukstidspunktet), utbetaling i mars",
      "Utgift i mars, kostnad i april, utbetaling avhenger av kredittiden til leverandøren",
      "Utgift og kostnad begge i april; utbetaling i mars ved avtaleinngåelse"
    ],
    "correct": 2,
    "explain": "Utgift oppstår i mars (kjøpstidspunktet). Kostnad oppstår i april (forbrukstidspunktet). Utbetaling skjer når fakturaen betales – avhenger av kredittiden til leverandøren."
  }
];
