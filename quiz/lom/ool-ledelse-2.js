const QUIZ_META = {
  "id": "lom-ool-ledelse-2",
  "title": "Lederstil og organisasjon Del 2",
  "subtitle": "LØM Fagskole – Supplement, Rekruttering & Fagdokumentasjon",
  "description": "15 spørsmål – Supplement, Rekruttering og kompetanse, Faglige dokumenter.",
  "cats": {
    "supplement": {
      "label": "Supplement",
      "color": "#f59e0b"
    },
    "rekruttering": {
      "label": "Rekruttering og kompetanse",
      "color": "#ec4899"
    },
    "fagdok": {
      "label": "Faglige dokumenter",
      "color": "#14b8a6"
    }
  }
};

const QUESTIONS = [
  {
    "id": 30,
    "cat": "supplement",
    "catLabel": "Supplement",
    "q": "Hvilken av følgende er IKKE blant de praktiske tiltakene for å øke motivasjon på arbeidsplassen?",
    "opts": [
      "Gi regelmessig anerkjennelse og konkret ros for godt og synlig arbeid",
      "Sett tydelige og utfordrende, men realistisk oppnåelige mål",
      "Innfør strengere kontroll for å sikre at alle jobber tilstrekkelig",
      "Gi medarbeiderne reell autonomi og meningsfull medbestemmelse"
    ],
    "correct": 2,
    "explain": "Strengere kontroll reduserer typisk den indre motivasjonen (korrumperingseffekt). Anerkjennelse, tydelige mål, autonomi og meningsfulle oppgaver er dokumenterte tiltak for å øke motivasjonen."
  },
  {
    "id": 31,
    "cat": "supplement",
    "catLabel": "Supplement",
    "q": "Hvilke fem effekter har organisasjonskulturen på medarbeidernes atferd?",
    "opts": [
      "Tilhørighet, motivasjon, tillit, samarbeid/koordinering og styring (uformell kontroll)",
      "Lønn (forventning), karrieremuligheter, stillingsstatus, kompetanseutvikling og anerkjennelse",
      "Rekruttering, onboarding (oppstart), prestasjonsstyring, belønningssystemer og avgangsrate",
      "Strategi, struktur, systemer, bemanning (HR) og individuelle ferdigheter"
    ],
    "correct": 0,
    "explain": "Organisasjonskultur påvirker atferd gjennom: (1) tilhørighet – vi-følelse og identitet, (2) motivasjon – stolthet og engasjement, (3) tillit – åpenhet og psykologisk trygghet, (4) samarbeid og koordinering, (5) styring – uformell kontroll uten skriftlige regler."
  },
  {
    "id": 32,
    "cat": "supplement",
    "catLabel": "Supplement",
    "q": "Hva er en av de mest effektive måtene ledere kan bygge og bevare organisasjonskulturen?",
    "opts": [
      "Prioritere faglig kompetanse og erfaring framfor personlige verdier ved ansettelse",
      "Fylle ledige stillinger raskt for å opprettholde driftskapasitet og redusere belastningen",
      "Hente inn kandidater utenfra for å tilføre nye perspektiver og fornye kulturen",
      "Velge kandidater som deler organisasjonens verdier og kulturelle forventninger"
    ],
    "correct": 3,
    "explain": "Rekruttering er et av lederens viktigste kulturbyggingsverktøy. Å velge kandidater som deler organisasjonens verdier (cultural fit) bidrar til å bevare og forsterke kulturen over tid."
  },
  {
    "id": 35,
    "cat": "supplement",
    "catLabel": "Supplement",
    "q": "Thorsruds demokratiseringsprinsipper (industrielt demokrati) vektlegger at arbeidet bør gi medarbeideren:",
    "opts": [
      "Konkurransedyktig lønn, prestasjonsbonus og tydelig karrierestige",
      "Klart definerte arbeidsoppgaver med målbare krav og jevnlige prestasjonsvurderinger",
      "Variasjon, mulighet for læring, ansvar, medbestemmelse og sosiale relasjoner",
      "Forutsigbare arbeidsrammer, trygge ansettelsesbetingelser og god pensjonsordning"
    ],
    "correct": 2,
    "explain": "Thorsruds psykologiske jobbkrav innebærer at arbeidet bør gi: variasjon, læring, ansvar, medbestemmelse og sosiale relasjoner. Dette gir meningsfullhet og øker den indre motivasjonen."
  },
  {
    "id": 37,
    "cat": "rekruttering",
    "catLabel": "Rekruttering og kompetanse",
    "q": "Hva er det første trinnet i en systematisk rekrutteringsprosess?",
    "opts": [
      "Å publisere stillingen eksternt og sende intern kunngjøring til alle ansatte i virksomheten",
      "En behovsanalyse som kartlegger kompetansegap og hva den nye stillingen skal løse",
      "Gjennomføre strukturerte intervjuer av de best kvalifiserte kandidatene som søker",
      "Å utarbeide detaljerte arbeidsoppgaver, ansvarsområder og kompetansekrav for stillingen"
    ],
    "correct": 1,
    "explain": "Rekrutteringsprosessen starter med en behovsanalyse: Hva slags kompetanse mangler vi? Hva skal den nye medarbeideren bidra med? Uten klar behovsavklaring risikerer man å ansette feil person til feil stilling."
  },
  {
    "id": 38,
    "cat": "rekruttering",
    "catLabel": "Rekruttering og kompetanse",
    "q": "Hva kjennetegner et strukturert jobbintervju?",
    "opts": [
      "Åpne samtaler der kandidaten styrer temaene for å vise sin personlighet og motivasjon",
      "Et formelt intervju som dekker CV-gjennomgang, referansesjekk og lønnsforhandling",
      "Et intervju uten forhåndsbestemte spørsmål der naturlig dialog og fri samtale avdekker kandidatens egnethet",
      "Forhåndsdefinerte spørsmål stilt likt til alle, der svarene vurderes etter en fast skala"
    ],
    "correct": 3,
    "explain": "Et strukturert intervju bruker forhåndsbestemte spørsmål (gjerne kompetansebaserte) som stilles likt til alle kandidater, og svarene evalueres etter en forhåndsdefinert skala. Dette øker reliabiliteten og reduserer risikoen for diskriminering."
  },
  {
    "id": 39,
    "cat": "rekruttering",
    "catLabel": "Rekruttering og kompetanse",
    "q": "Hva er 70-20-10-modellen for kompetanseutvikling?",
    "opts": [
      "70 % av læringen skjer i jobben, 20 % gjennom andre og feedback, 10 % via formell opplæring",
      "70 % av kompetansebudsjettet brukes på formelle kurs, 20 % til coaching-samtaler og 10 % til e-læring",
      "70 % av alle medarbeidere lærer best alene, 20 % i grupper og 10 % via selvstudier og oppslagsverk",
      "70 % av effektiv jobbutføring handler om praktiske ferdigheter, 20 % om holdninger og 10 % om kunnskap"
    ],
    "correct": 0,
    "explain": "70-20-10-modellen (Lombardo & Eichinger) viser at mesteparten av kompetanseutvikling skjer uformelt: 70 % gjennom utfordrende arbeidsoppgaver, 20 % fra andre (mentorer, tilbakemelding), og bare 10 % fra formell opplæring som kurs og utdanning."
  },
  {
    "id": 40,
    "cat": "rekruttering",
    "catLabel": "Rekruttering og kompetanse",
    "q": "Hva er en kompetansegap-analyse?",
    "opts": [
      "En evaluering av kandidaters tekniske ferdigheter via praktiske prøver i rekruttering",
      "En undersøkelse som kartlegger avvik mellom faktisk jobbinnhold og formell kompetansebeskrivelse",
      "En kartlegging av avviket mellom virksomhetens nåværende kompetanse og fremtidig kompetansebehov",
      "En vurdering av om opplæringstilbudet dekker bransjens sertifiseringskrav og faglige standarder"
    ],
    "correct": 2,
    "explain": "En kompetansegap-analyse identifiserer forskjellen mellom hvilken kompetanse virksomheten har i dag og hvilken kompetanse som er nødvendig for å nå fremtidige mål. Resultatet brukes som grunnlag for rekruttering og kompetanseutvikling."
  },
  {
    "id": 41,
    "cat": "rekruttering",
    "catLabel": "Rekruttering og kompetanse",
    "q": "Hva er hensikten med et strukturert onboarding-program for nyansatte?",
    "opts": [
      "Å dokumentere den nyansattes arbeidskapasitet og faglige nivå for den første prestasjonsvurderingen",
      "Å raskt integrere den nyansatte faglig og sosialt, redusere innkjøringstiden og senke risiko for tidlig avgang",
      "Å sikre at alle arbeidsavtaler og HMS-dokumenter er signert og korrekt arkivert i personalregisteret",
      "Å gjennomgå organisasjonskart, stillingsbeskrivelser, kulturforventninger og interne prosedyrer grundig med nyansatt"
    ],
    "correct": 1,
    "explain": "Et strukturert onboarding-program reduserer tiden det tar før en nyansatt er fullt produktiv, forbedrer trivsel og reduserer risikoen for at nyansatte slutter tidlig – tidlig avgang er svært kostbart for virksomheten."
  },
  {
    "id": 42,
    "cat": "rekruttering",
    "catLabel": "Rekruttering og kompetanse",
    "q": "Hva er talent management?",
    "opts": [
      "En metode for å systematisk redusere bemanning via frivillige sluttpakker og naturlig avgang",
      "En strategi der alle ansatte tilbys identiske karriereplaner og like muligheter for opplæring og karriereutvikling",
      "En administrativ prosess for å registrere, kartlegge og regelmessig oppdatere ansattes kompetanseprofil i HR-systemet",
      "En helhetlig strategi for å identifisere, utvikle, beholde og erstatte nøkkelpersoner i virksomheten"
    ],
    "correct": 3,
    "explain": "Talent management er en strategisk HR-prosess som handler om å identifisere medarbeidere med høyt potensial, gi dem målrettet utvikling og karrieremuligheter, og sikre at virksomheten beholder kritisk kompetanse også på lengre sikt."
  },
  {
    "id": 43,
    "cat": "fagdok",
    "catLabel": "Faglige dokumenter",
    "q": "Hva er en forretningsplan, og hvem er den primært rettet mot?",
    "opts": [
      "En helhetlig beskrivelse av forretningsidé, marked, strategi og økonomi – primært for investorer, banker og eiere",
      "Et internt styringsdokument med budsjetter og nøkkeltall – primært beregnet for regnskapsavdelingen",
      "En lovpålagt registreringsdokumentasjon som leveres til Brønnøysundregistrene ved stiftelse av selskap",
      "En strategianalyse med SWOT og PESTEL som danner grunnlag for styrevedtak om virksomhetens fremtidsretning og prioriteringer"
    ],
    "correct": 0,
    "explain": "En forretningsplan gir et helhetlig bilde av virksomheten: forretningsidé, markedsanalyse, strategi, organisasjon, risikovurdering og finansiell plan. Den brukes for å skaffe finansiering fra banker og investorer, og som internt styringsverktøy."
  },
  {
    "id": 44,
    "cat": "fagdok",
    "catLabel": "Faglige dokumenter",
    "q": "Hva er en handlingsplan, og hva er de typiske elementene?",
    "opts": [
      "En strategianalyse med situasjonsbeskrivelse, mulighetsrom og prioriterte satsingsområder for ledergruppa",
      "Et budsjettdokument med detaljerte kostnadsrammer, finansieringsplan og resultatprognoser per kvartal",
      "Et operativt dokument som konkretiserer mål, tiltak, ansvarlige, frister og måleindikatorer",
      "En risikovurdering med tilhørende beredskapsplan og beskrivelse av eskaleringsrutiner ved avvik"
    ],
    "correct": 2,
    "explain": "En handlingsplan konkretiserer HVEM som gjør HVA, NÅR og med HVILKE ressurser. Typiske elementer: overordnet mål, konkrete tiltak, ansvarlig person/enhet, frist og suksesskriterier (KPI). Gjør strategi om til operative aktiviteter."
  },
  {
    "id": 45,
    "cat": "fagdok",
    "catLabel": "Faglige dokumenter",
    "q": "Hva bør alltid fremgå av en formell møteinnkalling med saksframlegg?",
    "opts": [
      "Deltakernes ansiennitet, stilling og vedtaksmyndighet, slik at rollene i møtet er tydelig avklart",
      "Tid, sted, deltakere, saksliste med nødvendig bakgrunnsinformasjon og eventuelle beslutningsforslag",
      "Referat fra forrige møte, oppfølgingsstatus på åpne tiltak og agendapunkt for hvert enkelt tiltak",
      "Budsjettkonsekvenser per saksforslag, vedtaksmyndighet og referanse til overordnet strategiplan"
    ],
    "correct": 1,
    "explain": "En møteinnkalling skal inneholde: tid og sted, liste over innkalte deltakere, saksliste med tilstrekkelig bakgrunnsinformasjon og eventuelle beslutningsforslag (saksframlegg). Sendes i god tid slik at deltakerne kan forberede seg."
  },
  {
    "id": 46,
    "cat": "fagdok",
    "catLabel": "Faglige dokumenter",
    "q": "Hva bør et skriftlig pristilbud inneholde for å være juridisk trygt og informativt?",
    "opts": [
      "Prisgrunnlag, spesifiserte leveranser, gyldighetsperiode og eventuelle forbehold og tilleggsvilkår",
      "Selskapets årsregnskap, oppdatert kredittrating, referanser fra tidligere oppdragsgivere og gyldig forsikringsbevis",
      "En detaljert kostnadskalkyle etter selvkostmetoden, inkludert alle direkte og indirekte kostnader",
      "Fullmaktsdokumentasjon som viser hvem i bedriften som er autorisert til å binde selskapet"
    ],
    "correct": 0,
    "explain": "Et profesjonelt pristilbud bør spesifisere: hva som inngår (leveranseomfang), pris (inkl./ekskl. MVA), gyldighetsperiode (tilbudet er bindende i X dager), leveringstid og forbehold (f.eks. prisjusteringsklausul). Tydelighet reduserer risiko for konflikter."
  },
  {
    "id": 47,
    "cat": "fagdok",
    "catLabel": "Faglige dokumenter",
    "q": "Hva er den viktigste forskjellen mellom en markedsplan og en forretningsplan?",
    "opts": [
      "Forretningsplanen lages typisk bare én gang ved bedriftsetablering; markedsplanen revideres og oppdateres langt hyppigere",
      "Markedsplanen er mer detaljert om finansieringsstruktur, kapitalinnskudd og eierforhold enn det forretningsplanen er",
      "Markedsplanen fokuserer på markedsaktiviteter og kunder; forretningsplanen er helhetlig med økonomi og strategi",
      "Forretningsplanen er et lovpålagt registreringsdokument for aksjeselskaper; markedsplanen er frivillig men anbefalt"
    ],
    "correct": 2,
    "explain": "En markedsplan fokuserer spesifikt på markedsaktiviteter: situasjonsanalyse, målgruppe, posisjonering, 5P og markedsmål. Forretningsplanen er bredere og dekker hele virksomheten: forretningsidé, marked, strategi, organisasjon og finansiell plan."
  }
];
