const QUIZ_META = {
  "id": "lom-lov-hms-1",
  "title": "Lov & HMS Del 1",
  "subtitle": "LØM Fagskole – Arbeidsmiljøloven & Tariffavtaler",
  "description": "20 spørsmål – Arbeidsmiljøloven, Tariffavtaler.",
  "cats": {
    "aml": {
      "label": "Arbeidsmiljøloven",
      "color": "#8b5cf6"
    },
    "tariff": {
      "label": "Tariffavtaler",
      "color": "#10b981"
    }
  }
};

const QUESTIONS = [
  {
    "id": 1,
    "cat": "aml",
    "catLabel": "Arbeidsmiljøloven",
    "q": "Hvem har det overordnede ansvaret for å sikre et fullt forsvarlig arbeidsmiljø etter AML § 2-1?",
    "opts": [
      "Verneombudet",
      "Arbeidstilsynet",
      "Arbeidsgiver",
      "Fagforeningen"
    ],
    "correct": 2,
    "explain": "AML § 2-1 slår fast at arbeidsgiver har det overordnede ansvaret for at arbeidsmiljøet er fullt forsvarlig. Ansvaret kan ikke delegeres bort."
  },
  {
    "id": 2,
    "cat": "aml",
    "catLabel": "Arbeidsmiljøloven",
    "q": "Hva er den alminnelige arbeidstiden per uke etter AML § 10-4?",
    "opts": [
      "37,5 timer",
      "38 timer",
      "40 timer",
      "45 timer"
    ],
    "correct": 2,
    "explain": "AML § 10-4 fastsetter at alminnelig arbeidstid ikke må overstige 9 timer per dag eller 40 timer per uke."
  },
  {
    "id": 3,
    "cat": "aml",
    "catLabel": "Arbeidsmiljøloven",
    "q": "Hva er grensene for overtid etter AML § 10-6?",
    "opts": [
      "10 timer per uke og 40 timer per 4 uker, med unntak for krisesituasjoner etter § 10-12",
      "15 timer per uke, 40 timer per 4 uker og 250 timer per kalenderår – kan utvides ved tariffavtale",
      "10 timer per uke, 25 timer per 4 uker og 200 timer per kalenderår",
      "20 timer per uke og 60 timer per måned"
    ],
    "correct": 2,
    "explain": "AML § 10-6: overtid er begrenset til 10 timer per uke, 25 timer per 4 sammenhengende uker, og 200 timer per kalenderår. Utvidet grense kan avtales med tillitsvalgte."
  },
  {
    "id": 4,
    "cat": "aml",
    "catLabel": "Arbeidsmiljøloven",
    "q": "Når skal det velges verneombud etter AML § 6-1?",
    "opts": [
      "Alle virksomheter med minst én fast ansatt er pliktige",
      "Virksomheter med minst 10 arbeidstakere",
      "Kun i offentlig sektor",
      "Virksomheter med minst 20 ansatte og AMU"
    ],
    "correct": 1,
    "explain": "AML § 6-1: det skal velges verneombud i virksomheter med minst 10 arbeidstakere. I mindre virksomheter kan det avtales at verneombud ikke er nødvendig."
  },
  {
    "id": 5,
    "cat": "aml",
    "catLabel": "Arbeidsmiljøloven",
    "q": "Hva er Arbeidsmiljøutvalgets (AMU) rolle, og fra hvilken virksomhetsstørrelse er det påkrevd?",
    "opts": [
      "AMU fastsetter lønn og tillegg; påkrevd fra 30 ansatte",
      "AMU arbeider med HMS og samarbeid om arbeidsmiljø; påkrevd fra 50 ansatte",
      "AMU er rådgivende for arbeidstid; påkrevd fra 20 ansatte",
      "AMU er frivillig og anbefales i store virksomheter, men er ikke lovpålagt uansett virksomhetsstørrelse"
    ],
    "correct": 1,
    "explain": "AML § 7-1: AMU er påkrevd i virksomheter med minst 50 ansatte. AMU behandler HMS-saker og sikrer samarbeid mellom arbeidsgiver og arbeidstakere om arbeidsmiljøet."
  },
  {
    "id": 6,
    "cat": "aml",
    "catLabel": "Arbeidsmiljøloven",
    "q": "Hva er oppsigelsesfristen for en arbeidstaker med over 5 års ansettelse, etter AML § 15-3?",
    "opts": [
      "1 måned (gjensidig)",
      "2 måneder (gjensidig)",
      "3 måneder (gjensidig)",
      "6 måneder (gjensidig)"
    ],
    "correct": 1,
    "explain": "AML § 15-3: ved over 5 år men under 10 år er fristen minst 2 måneder. Fra 10 år = 3 mnd, fra 15 år = 4 mnd, fra 20+ år = 6 mnd. Fristene er gjensidige."
  },
  {
    "id": 7,
    "cat": "aml",
    "catLabel": "Arbeidsmiljøloven",
    "q": "Hva er prøvetiden i et arbeidsforhold, og hva er oppsigelsesfristen i prøvetiden?",
    "opts": [
      "Prøvetid er inntil 3 måneder; vanlig oppsigelsesfrist på 1 måned gjelder",
      "Prøvetid er inntil 6 måneder; oppsigelsesfrist er 14 dager",
      "Prøvetid er inntil 12 måneder; oppsigelsesfrist er 1 måned",
      "Prøvetid er inntil 6 måneder; ingen særskilt oppsigelsesfrist"
    ],
    "correct": 1,
    "explain": "AML § 15-6: prøvetid kan avtales for inntil 6 måneder. I prøvetiden er den gjensidige oppsigelsesfristen 14 dager (med mindre annet er avtalt eller følger av tariffavtale)."
  },
  {
    "id": 8,
    "cat": "aml",
    "catLabel": "Arbeidsmiljøloven",
    "q": "Hva krever AML § 14-6 om arbeidsavtalen?",
    "opts": [
      "Muntlig avtale er tilstrekkelig for kortere arbeidsforhold, men begge parter kan til enhver tid kreve at avtalen settes opp skriftlig",
      "Arbeidsavtalen skal alltid inngås skriftlig og inneholde lovpålagte minimumskrav: partenes navn, arbeidsplass, stillingstittel og lønn",
      "Arbeidsavtalen kan bekreftes digitalt uten fysisk signatur fra arbeidsgiver, forutsatt at begge parter samtykker til elektronisk kommunikasjon",
      "Skriftlig kontrakt kreves kun for ansettelser over 6 måneder, mens kortere vikariater kan inngås muntlig uten dokumentasjonsplikt"
    ],
    "correct": 1,
    "explain": "AML § 14-6: alle arbeidsforhold skal ha skriftlig arbeidsavtale. Den skal bl.a. inneholde: navn/adresse, arbeidssted, stillingstittel, arbeidstid og lønn."
  },
  {
    "id": 9,
    "cat": "aml",
    "catLabel": "Arbeidsmiljøloven",
    "q": "Hva kontrollerer Arbeidstilsynet?",
    "opts": [
      "Skatteinnbetaling, moms, merverdiavgift og særavgifter fra norske bedrifter og enkeltpersonforetak",
      "At virksomheter overholder arbeidsmiljølovgivningen – HMS, arbeidstid, lønn og krav til arbeidsavtale m.m.",
      "At lønnsoppgjør, tariffforhandlinger og streikevarsler gjennomføres i samsvar med arbeidstvistlovens krav",
      "At feriepengeutbetaling, skattetrekk og arbeidsgiveravgift innberettes og utbetales til rett tid"
    ],
    "correct": 1,
    "explain": "Arbeidstilsynet er statens tilsynsorgan for arbeidsmiljølovgivningen. De fører tilsyn med at bedriftene overholder AML, herunder HMS-krav, arbeidstidsregler og krav om skriftlig arbeidsavtale."
  },
  {
    "id": 10,
    "cat": "aml",
    "catLabel": "Arbeidsmiljøloven",
    "q": "Hva er meldeplikten etter AML § 5-2?",
    "opts": [
      "Alle sykefraværsdager over 3 sammenhengende dager skal meldes skriftlig til Arbeidstilsynet med diagnose og årsak",
      "Alvorlige arbeidsulykker og yrkessykdommer skal varsles til Arbeidstilsynet og politiet uten ugrunnet opphold",
      "Bedriften skal systematisk melde alle nær-uhell og uønskede hendelser til Arbeidstilsynet innen 24 timer etter hendelsen",
      "Arbeidstaker skal melde alle personskader, uavhengig av alvorlighetsgrad, skriftlig til verneombudet og HMS-leder samme dag"
    ],
    "correct": 1,
    "explain": "AML § 5-2: alvorlige arbeidsulykker og yrkessykdommer skal varsles umiddelbart til Arbeidstilsynet og politiet, og registreres i bedriftens skaderegister."
  },
  {
    "id": 17,
    "cat": "tariff",
    "catLabel": "Tariffavtaler",
    "q": "Hva er Landsoverenskomsten for elektrofaget?",
    "opts": [
      "En lov om minstelønn og lønnsregulering i elektrobransjen vedtatt av Stortinget og revidert hvert annet år",
      "Et regjeringsdirektiv som fastsetter særskilte arbeidsrettigheter og arbeidstidsregler i kraftforsyningssektoren",
      "En sentral og allmenngjort avtale mellom NHO og LO som automatisk gjelder for alle bedrifter i norsk industri",
      "En tariffavtale mellom NHO Elektro og EL&IT Forbundet som regulerer lønn, arbeidstid og vilkår for elektrikere"
    ],
    "correct": 3,
    "explain": "Landsoverenskomsten er tariffavtalen mellom NHO Elektro (arbeidsgiversiden) og EL&IT Forbundet (arbeidstakersiden). Den regulerer lønn, arbeidstid og andre arbeidsvilkår for elektrikere."
  },
  {
    "id": 18,
    "cat": "tariff",
    "catLabel": "Tariffavtaler",
    "q": "Hva er ufravikelighetsprinsippet i tariffavtaler?",
    "opts": [
      "At individuelle arbeidsavtaler ikke kan gi dårligere vilkår enn det tariffavtalen fastsetter",
      "At tariffavtalen ikke kan endres i perioden og kun reforhandles ved kontraktens utløp",
      "At tariffavtalen kun er bindende for fagforeningsmedlemmer i den aktuelle organisasjonen",
      "At verken arbeidsgiver eller arbeidstaker ensidig kan fravike tariffavtalens fastsatte vilkår"
    ],
    "correct": 0,
    "explain": "Ufravikelighetsprinsippet: individuelle arbeidsavtaler kan ikke gi dårligere vilkår enn tariffavtalen fastsetter. Tariffavtalen setter et gulv – ikke et tak. Bedre vilkår er alltid tillatt."
  },
  {
    "id": 19,
    "cat": "tariff",
    "catLabel": "Tariffavtaler",
    "q": "Hva er normalt overtidstillegget på hverdager etter Landsoverenskomsten for elektrofaget?",
    "opts": [
      "25 %",
      "40 %",
      "50 %",
      "100 %"
    ],
    "correct": 2,
    "explain": "Landsoverenskomsten fastsetter normalt 50 % tillegg for overtid på hverdager. Tillegget øker ved nattarbeid (etter kl. 21:00) og på søndager/helligdager."
  },
  {
    "id": 20,
    "cat": "tariff",
    "catLabel": "Tariffavtaler",
    "q": "Hva er overtidstillegget etter kl. 21:00 og på søndager/helligdager etter Landsoverenskomsten?",
    "opts": [
      "50 %",
      "75 %",
      "100 %",
      "125 %"
    ],
    "correct": 2,
    "explain": "Landsoverenskomsten: overtid etter kl. 21:00 og på søndager/helligdager gir 100 % tillegg – altså dobbel timelønn."
  },
  {
    "id": 21,
    "cat": "tariff",
    "catLabel": "Tariffavtaler",
    "q": "Hva skiller en tariffavtale fra en individuell arbeidsavtale?",
    "opts": [
      "En tariffavtale er inngått mellom en fagforening og en arbeidsgiverorganisasjon og gjelder kollektivt for alle bundne",
      "Tariffavtaler er ufravikelige og gjelder automatisk alle bedrifter i bransjen, uavhengig av om bedriften er organisert i NHO",
      "Individuelle avtaler kan lovlig gi svakere vilkår enn tariffavtalen dersom arbeidstaker gir skriftlig og informert samtykke",
      "Det er ingen rettslig forskjell mellom tariffavtale og individuell arbeidsavtale i norsk rett, ettersom begge er bindende"
    ],
    "correct": 0,
    "explain": "Tariffavtaler inngås mellom en fagforening (f.eks. EL&IT) og en arbeidsgiverorganisasjon (f.eks. NHO Elektro) og gjelder kollektivt for alle virksomheter og arbeidstakere som er bundet av avtalen."
  },
  {
    "id": 22,
    "cat": "tariff",
    "catLabel": "Tariffavtaler",
    "q": "Hva er permittering i arbeidsretten?",
    "opts": [
      "En oppsigelsesform der arbeidstaker fritas fra møteplikt, men fortsatt mottar full lønn",
      "Lønnet permisjon for faglig oppdatering etter tariffavtalen",
      "En formell skriftlig advarsel fra arbeidsgiver om atferd eller prestasjoner, som kan lede til oppsigelse ved gjentakelse av forholdet",
      "Et midlertidig fritak fra arbeidsplikt og lønnsplikt, typisk ved mangel på arbeid eller råvarer"
    ],
    "correct": 3,
    "explain": "Permittering er en midlertidig ordning der arbeidsgiver fritar arbeidstaker fra arbeidsplikt og lønnsplikt pga. driftsproblemer. Arbeidstaker mottar dagpenger fra NAV etter en kortere arbeidsgiverperiode."
  },
  {
    "id": 23,
    "cat": "tariff",
    "catLabel": "Tariffavtaler",
    "q": "Hva er fast ansettelse etter AML § 14-9?",
    "opts": [
      "Ansettelse uten tidsbegrensning – dette er lovens klare hovedregel",
      "Ansettelse som er tidsbegrenset til 12 måneder med mulighet for forlengelse",
      "Ansettelse i deltidsstilling med fast ukentlig arbeidstid",
      "Ansettelse med prøvetid, der § 15-6 gir særskilt oppsigelsesfrist"
    ],
    "correct": 0,
    "explain": "AML § 14-9: fast ansettelse (uten tidsbegrensning) er lovens klare hovedregel. Midlertidig ansettelse er kun tillatt i bestemte situasjoner som er uttømmende opplistet i loven."
  },
  {
    "id": 24,
    "cat": "tariff",
    "catLabel": "Tariffavtaler",
    "q": "Hva dekker sykepenger fra Folketrygdloven?",
    "opts": [
      "Alt sykefravær uavhengig av årsak og diagnose, for alle innbyggere over 18 år uten krav til forutgående opptjening",
      "Full lønn uten beløpstak i opptil 2 sammenhengende år, for alle yrkesaktive og næringsdrivende med inntekt",
      "Kun godkjente og dokumenterte arbeidsulykker og yrkessykdommer som er formelt meldt og godkjent etter Ftrl. § 13-3",
      "Inntektsbortfall ved arbeidsuførhet pga. sykdom eller skade, begrenset til 6G, med krav om arbeidstilknytning"
    ],
    "correct": 3,
    "explain": "Sykepenger fra Folketrygden dekker inntektsbortfall ved sykefravær i opptil 52 uker. Sykepenger beregnes av inntekt opptil 6G. Arbeidsgiverperioden er de første 16 dagene (arbeidsgiver betaler)."
  },
  {
    "id": 32,
    "type": "sort",
    "cat": "tariff",
    "catLabel": "Tariffavtaler",
    "q": "Sorter hvert lovkrav under riktig rettslig kilde.",
    "bins": [
      {
        "id": "aml",
        "label": "Arbeidsmiljøloven (AML)",
        "color": "#8b5cf6"
      },
      {
        "id": "ferie",
        "label": "Ferieloven",
        "color": "#3b82f6"
      },
      {
        "id": "tariff",
        "label": "Tariffavtalen (LO/NHO)",
        "color": "#f59e0b"
      }
    ],
    "items": [
      {
        "text": "Rett til 25 virkedager ferie per år",
        "bin": "ferie"
      },
      {
        "text": "Arbeidsgiver har overordnet ansvar for HMS",
        "bin": "aml"
      },
      {
        "text": "50 % tillegg for overtid på hverdager",
        "bin": "tariff"
      },
      {
        "text": "Alminnelig arbeidstid maks 40 timer per uke",
        "bin": "aml"
      },
      {
        "text": "Feriepengeprosent på 10,2 % for ansatte under 60 år",
        "bin": "ferie"
      },
      {
        "text": "100 % tillegg for arbeid etter kl. 21:00 og på søndager",
        "bin": "tariff"
      }
    ],
    "explain": "AML regulerer arbeidstid, verneombud og HMS-ansvar. Ferieloven regulerer ferieuttak og feriepengeprosent. Tariffavtalen (f.eks. Landsoverenskomsten for elektrofaget) fastsetter lønn, overtidssatser og andre vilkår."
  },
  {
    "id": 33,
    "cat": "tariff",
    "catLabel": "Tariffavtaler",
    "q": "Hvilke to utsagn er riktige om permittering?",
    "opts": [
      "Arbeidstaker beholder full lønn fra arbeidsgiver gjennom hele permitteringsperioden",
      "Permittering fritar arbeidstaker fra arbeidsplikt og arbeidsgiver fra lønnsplikt",
      "Permittering kan bare iverksettes med skriftlig godkjenning fra Arbeidstilsynet",
      "Arbeidstaker mottar dagpenger fra NAV etter at arbeidsgiverperioden er avsluttet"
    ],
    "correct": [
      1,
      3
    ],
    "explain": "Permittering er et midlertidig fritak fra arbeidsplikt OG lønnsplikt – arbeidsgiver betaler kun en kortere arbeidsgiverperiode (vanligvis 10 dager), deretter overtar NAV og betaler dagpenger. Arbeidstilsynets godkjenning er ikke påkrevd."
  }
];
