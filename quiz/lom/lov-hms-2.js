const QUIZ_META = {
  "id": "lom-lov-hms-2",
  "title": "Lov & HMS Del 2",
  "subtitle": "LØM Fagskole – Ferieloven, HMS & Andre lover",
  "description": "20 spørsmål – Ferieloven, HMS og regelverk, Andre sentrale lover.",
  "cats": {
    "ferie": {
      "label": "Ferieloven",
      "color": "#3b82f6"
    },
    "hms_reg": {
      "label": "HMS og regelverk",
      "color": "#f59e0b"
    },
    "andre_lover": {
      "label": "Andre sentrale lover",
      "color": "#ec4899"
    }
  }
};

const QUESTIONS = [
  {
    "id": 11,
    "cat": "ferie",
    "catLabel": "Ferieloven",
    "q": "Hvor mange virkedager ferie har norske arbeidstakere krav på etter ferieloven?",
    "opts": [
      "18 virkedager (3 uker)",
      "25 virkedager (4 uker + 1 dag)",
      "24 virkedager (4 uker)",
      "31 virkedager – arbeidstakere over 60 år har rett på 6 ekstra virkedager"
    ],
    "correct": 1,
    "explain": "Ferieloven gir rett til 25 virkedager ferie (lørdag regnes som virkedag, men ikke søndag og helligdager). 25 virkedager tilsvarer 4 uker + 1 dag."
  },
  {
    "id": 12,
    "cat": "ferie",
    "catLabel": "Ferieloven",
    "q": "Hva er feriepengeprosenten for arbeidstakere under 60 år?",
    "opts": [
      "10,2 %",
      "9,5 %",
      "12,0 %",
      "12,5 %"
    ],
    "correct": 0,
    "explain": "Ferieloven fastsetter at feriepenger utgjør minst 10,2 % av feriepengegrunnlaget for arbeidstakere under 60 år."
  },
  {
    "id": 13,
    "cat": "ferie",
    "catLabel": "Ferieloven",
    "q": "Hva er feriepengeprosenten for arbeidstakere som fyller 60 år eller mer i ferieåret?",
    "opts": [
      "10,2 %",
      "11,5 %",
      "12,5 %",
      "14,3 %"
    ],
    "correct": 2,
    "explain": "Ferieloven § 10 nr. 2: arbeidstakere som fyller 60 år i ferieåret har rett til én ekstra ferieuke og en feriepengeprosent på 12,5 % av feriepengegrunnlaget."
  },
  {
    "id": 14,
    "cat": "ferie",
    "catLabel": "Ferieloven",
    "q": "Hvilken periode har arbeidstaker rett til å ta ut 3 sammenhengende ferieuke (hovedferien)?",
    "opts": [
      "Februar – april (vinterferie og påskeperioden)",
      "April – september (vår- og sommerhalvåret)",
      "Mai – september (sommersesongen)",
      "1. juni – 30. september (hovedferieperioden)"
    ],
    "correct": 3,
    "explain": "Ferieloven § 7: arbeidstaker kan kreve å ta ut 3 sammenhengende ferieuke i perioden 1. juni – 30. september. Dette er lovens hovedferieperiode."
  },
  {
    "id": 15,
    "cat": "ferie",
    "catLabel": "Ferieloven",
    "q": "Kan arbeidsgiver nekte arbeidstaker å ta ferie dersom feriepengene ikke er opptjent?",
    "opts": [
      "Nei – retten til feriefritid er uavhengig av om feriepengene er opptjent",
      "Ja, siden feriepengene er en forutsetning for ferierettigheten etter loven",
      "Ja, men kun dersom arbeidstaker har vært ansatt under 6 måneder",
      "Det avhenger av hva partene har avtalt i den individuelle arbeidsavtalen"
    ],
    "correct": 0,
    "explain": "Ferieloven skiller mellom retten til feriefritid (alltid) og retten til feriepenger (basert på opptjening). Arbeidsgiver kan ikke nekte ferie selv om feriepenger ikke er fullt opptjent."
  },
  {
    "id": 16,
    "cat": "ferie",
    "catLabel": "Ferieloven",
    "q": "Hva skjer med ferie som ikke er avviklet innen årets slutt?",
    "opts": [
      "Ferien bortfaller automatisk 31. desember uten mulighet for overføring eller erstatningsutbetaling til arbeidstakeren",
      "Feriepengene for den uavviklede ferien utbetales som et kontant tillegg på lønningsdagen i januar neste år",
      "Inntil 2 uker kan etter avtale overføres til neste ferieår; resten kan erstattes dersom avvikling var umulig",
      "Uavviklet ferie overføres automatisk til neste ferieår og kan avvikles fritt i løpet av de påfølgende 3 ferieårene"
    ],
    "correct": 2,
    "explain": "Ferieloven § 7 nr. 3: inntil 2 uker ferie kan overføres til påfølgende ferieår ved skriftlig avtale. Var avvikling umulig pga. arbeidsgivers forhold, kan arbeidstaker kreve erstatning."
  },
  {
    "id": 25,
    "cat": "hms_reg",
    "catLabel": "HMS og regelverk",
    "q": "Hva er formålet med Internkontrollforskriften (IK-forskriften)?",
    "opts": [
      "Å sikre systematisk HMS-arbeid i virksomheter gjennom dokumenterte rutiner og egenkontroll",
      "Å regulere internrevisjon av regnskap, rapportering og økonomistyring i norske virksomheter og foretak",
      "Å sette tekniske krav til elektriske anlegg og sertifisering av installatører",
      "Å fastsette arbeidsgivers plikt til å betale overtid og nattillegg"
    ],
    "correct": 0,
    "explain": "IK-forskriften krever at virksomheter etablerer et systematisk HMS-system med skriftlige rutiner, dokumentasjon og jevnlig revisjon – internkontroll. Forebyggende og kontinuerlig arbeid."
  },
  {
    "id": 26,
    "cat": "hms_reg",
    "catLabel": "HMS og regelverk",
    "q": "Hva er en SHA-plan?",
    "opts": [
      "En detaljert plan for sykefraværsoppfølging, tilrettelegging og oppfølging av sykemeldte arbeidstakere",
      "En plan for systematisk HMS-opplæring, kompetanseheving og sertifisering av nyansatte og eksisterende ansatte",
      "En overordnet strategiplan for ansvarsdeling, helsemål og organisasjonsstruktur i virksomheten",
      "En plan for sikkerhet, helse og arbeidsmiljø på byggeplasser, påkrevd etter byggherreforskriften"
    ],
    "correct": 3,
    "explain": "SHA-plan (Sikkerhet, Helse og Arbeidsmiljø) er påkrevd etter byggherreforskriften og beskriver risikovurderinger og tiltak for HMS på byggeplassen. Skal utarbeides av byggherren/koordinator FØR byggestart."
  },
  {
    "id": 27,
    "cat": "hms_reg",
    "catLabel": "HMS og regelverk",
    "q": "Hva er en SJA (Sikker jobb-analyse)?",
    "opts": [
      "En systematisk gjennomgang av en arbeidsoperasjon for å identifisere og redusere risiko FØR arbeidet starter",
      "En juridisk gjennomgang og vurdering av arbeidsavtalens gyldighet og konsekvenser for alle parter ved kontraktsbrudd",
      "En rapport som utarbeides ETTER en arbeidsulykke for å kartlegge årsaksforhold og hindre gjentakelse",
      "En statistisk analyse av sykefravær og nær-uhell over en definert tidsperiode i virksomheten"
    ],
    "correct": 0,
    "explain": "SJA er en risikovurderingsmetode der teamet trinn for trinn gjennomgår arbeidsoppgaven, identifiserer farer og iverksetter tiltak FØR arbeidet begynner. Spesielt viktig ved ikke-rutinearbeid og høy risiko."
  },
  {
    "id": 28,
    "cat": "hms_reg",
    "catLabel": "HMS og regelverk",
    "q": "Hva er HMS-kortet (ID-kortet) på byggeplassen?",
    "opts": [
      "Et kort som dokumenterer gjennomført HMS-opplæring, vernekurs og sertifikater for farlig arbeid",
      "Et elektronisk tilgangskort med PIN-kode som styrer adgangskontroll til ulike soner og arealer på anlegget",
      "Et kort med oversikt over lønnsvilkår, feriepenger og pensjonsordning i henhold til gjeldende tariffavtale",
      "Et lovpålagt identitetskort med foto og personnummer som alle på byggeplassen er pliktige å bære synlig"
    ],
    "correct": 3,
    "explain": "HMS-kortet er lovpålagt på alle byggeplasser. Det inneholder foto, navn og personnummer, bæres synlig og er et tiltak mot svart arbeid og for å ha oversikt over hvem som befinner seg på plassen."
  },
  {
    "id": 29,
    "cat": "hms_reg",
    "catLabel": "HMS og regelverk",
    "q": "Hva er hensikten med risikovurdering i HMS-arbeid?",
    "opts": [
      "Å identifisere farer, vurdere sannsynlighet og konsekvens, og iverksette tiltak for å redusere risiko til et akseptabelt nivå",
      "Å skriftlig dokumentere og fastslå hvem som bærer den juridiske erstatningsplikten og strafferettslige ansvaret dersom en arbeidsulykke oppstår",
      "Å innhente bekreftelse på at samtlige ansatte er utstyrt med gyldig og godkjent verneutstyr samt har oppdatert og gyldig HMS-kort",
      "Å kalkulere forsikringspremier, dekningsgrad og erstatningsbeløp som skal utbetales ved godkjente arbeidsulykker og yrkessykdommer"
    ],
    "correct": 0,
    "explain": "Risikovurdering = kartlegge farekilder, vurdere sannsynlighet og konsekvens for skade, og beslutte tiltak. Dette er kjernen i forebyggende og systematisk HMS-arbeid etter IK-forskriften."
  },
  {
    "id": 30,
    "cat": "hms_reg",
    "catLabel": "HMS og regelverk",
    "q": "Hvem har ansvar for å sørge for at arbeidstakere har nødvendig HMS-opplæring?",
    "opts": [
      "Verneombudet, som etter AML har formelt ansvar for å koordinere og gjennomføre HMS-opplæring",
      "Arbeidstakeren selv, som selvstendig må sørge for at HMS-kompetansen til enhver tid er oppdatert",
      "Arbeidsgiver, som har plikt til å gi nødvendig opplæring, øvelse og instruksjon",
      "Fagforeningen, som fremforhandler opplæringsrettigheter i tariffavtalen"
    ],
    "correct": 2,
    "explain": "AML § 3-2: arbeidsgiver har ansvar for at arbeidstakerne har nødvendig opplæring, øvelse og instruksjon i HMS, inkludert bruk av verneutstyr og sikre arbeidsmetoder."
  },
  {
    "id": 31,
    "type": "order",
    "cat": "hms_reg",
    "catLabel": "HMS og regelverk",
    "q": "Sett de fire kjernetrinnene i risikovurdering i riktig rekkefølge. Første trinn øverst, siste trinn nederst.",
    "items": [
      "Iverksette tiltak og evaluere effekten over tid",
      "Fastsette risikoreduserende tiltak for hvert farepunkt",
      "Vurdere sannsynlighet og konsekvens (risikomatrise)",
      "Identifisere farekilder og potensielle hendelser i arbeidsmiljøet"
    ],
    "explain": "Risikovurdering: 1) Identifiser farekilder → 2) Vurder sannsynlighet og konsekvens → 3) Fastsett tiltak → 4) Iverksett og evaluer effekt. Kjernen i systematisk og forebyggende HMS-arbeid etter IK-forskriften."
  },
  {
    "id": 34,
    "cat": "andre_lover",
    "catLabel": "Andre sentrale lover",
    "q": "Hva innebærer habilitetsregelen i aksjeloven for styremedlemmer?",
    "opts": [
      "At styremedlemmer er pliktige til å ha relevant faglig og forretningsmessig kompetanse innen ansvarsområdet sitt",
      "At styret må ha et flertall av aksjonærvalgte representanter med minimum tre års erfaring fra næringslivet",
      "At styremedlemmer ikke kan delta i behandlingen av saker der de har en fremtredende personlig interesse",
      "At daglig leder automatisk er inhabil i alle styresaker og bare kan delta som rådgivende observatør"
    ],
    "correct": 2,
    "explain": "Aksjeloven § 6-27 om habilitet: et styremedlem eller daglig leder er inhabilt og skal ikke delta i behandlingen av saker der vedkommende har en fremtredende personlig eller økonomisk interesse. Formålet er å sikre at styrevedtak ikke påvirkes av egne interesser."
  },
  {
    "id": 35,
    "cat": "andre_lover",
    "catLabel": "Andre sentrale lover",
    "q": "Hva forbyr markedsføringsloven når det gjelder markedspraksis?",
    "opts": [
      "Villedende og aggressiv markedspraksis, urimelige forretningsvilkår og ulovlig direktemarkedsføring",
      "Reklame rettet mot barn, prissammenligning med navngitte konkurrenter og bruk av persondata",
      "Bruk av fremmedspråk i markedsføring uten norsk oversettelse og all skjult produktplassering",
      "All sammenlignende reklame, uoppfordret e-postreklame og kjønnsstereotypiserende reklamefremstillinger"
    ],
    "correct": 0,
    "explain": "Markedsføringsloven forbyr villedende markedspraksis (uriktige påstander, utelatt vesentlig info), aggressiv markedspraksis (utilbørlig press) og urimelige forretningsvilkår. Den gjelder overfor både forbrukere og næringsdrivende."
  },
  {
    "id": 36,
    "cat": "andre_lover",
    "catLabel": "Andre sentrale lover",
    "q": "Hva innebærer angreretten ved kjøp av varer på nett eller utenfor butikk?",
    "opts": [
      "Kjøper kan returnere varen innen 30 dager uten grunn, forutsatt at den er ubrukt og i original emballasje",
      "Kjøper har rett til å gå fra kjøpsavtalen innen 14 dager uten å oppgi grunn og uten ekstra kostnad",
      "Kjøper kan kansellere bestillingen innen 24 timer etter ordrebekreftelse uten gebyr fra selger",
      "Kjøper har returrett for varer dersom emballasjen er uåpnet og original kvittering fremvises"
    ],
    "correct": 1,
    "explain": "Angrerettloven gir forbrukere 14 dagers angrefrist ved fjernsalg (nett, telefon) og salg utenfor butikk. Selger plikter å informere om angreretten; gjøres ikke dette, forlenges fristen til 12 måneder."
  },
  {
    "id": 37,
    "cat": "andre_lover",
    "catLabel": "Andre sentrale lover",
    "q": "Hva er grunnprinsippet for behandling av personopplysninger etter GDPR?",
    "opts": [
      "Personopplysninger kan brukes fritt internt, men deling med tredjeparter krever skriftlig samtykke",
      "Alle virksomheter med over 50 ansatte er forpliktet til å utnevne et eget personvernombud",
      "Personopplysninger kan oppbevares ubegrenset dersom de er krypterte og tilgangsstyrt",
      "Behandling av personopplysninger krever et lovlig grunnlag, f.eks. samtykke, avtale eller rettslig plikt"
    ],
    "correct": 3,
    "explain": "GDPR krever rettslig grunnlag for all behandling av personopplysninger. Lovlige grunnlag er bl.a. samtykke, oppfyllelse av kontrakt, rettslig forpliktelse og berettiget interesse. Behandlingen skal være proporsjonal, avgrenset til formålet og ikke lagres lenger enn nødvendig."
  },
  {
    "id": 38,
    "cat": "andre_lover",
    "catLabel": "Andre sentrale lover",
    "q": "Hva forbyr likestillings- og diskrimineringsloven i arbeidslivet?",
    "opts": [
      "Diskriminering på grunnlag av kjønn, etnisitet, religion, funksjonsnedsettelse og alder ved ansettelse og i arbeidsforholdet",
      "Å stille spørsmål om kandidatens utdanning, arbeidserfaring, referanser og faglige kvalifikasjoner i en ansettelsesprosess",
      "Å velge kandidat fra intern rekruttering fremfor ekstern utlysning, med mindre stillingen er lovpålagt kunngjort",
      "Å bruke prøvetid for nyansatte uten å dokumentere opplæringsplanen, kompetansemålene og oppfølgingskriteriene skriftlig"
    ],
    "correct": 0,
    "explain": "Likestillings- og diskrimineringsloven forbyr diskriminering på grunnlag av kjønn, graviditet, permisjon, etnisitet, religion, livssyn, funksjonsnedsettelse, seksuell orientering og alder. Forbudet gjelder i alle faser: utlysning, ansettelse, lønn, forfremmelse og oppsigelse."
  },
  {
    "id": 39,
    "cat": "andre_lover",
    "catLabel": "Andre sentrale lover",
    "q": "Hva er Hovedavtalen mellom LO og NHO?",
    "opts": [
      "En offentlig lov som fastsetter minstelønn, arbeidstid og ferierettigheter for alle norske arbeidstakere",
      "En bransjespesifikk lønns- og arbeidsavtale fremforhandlet på nytt ved hvert enkelt tariffoppgjør",
      "En grunnleggende rammeavtale som regulerer spillereglene for samarbeid mellom partene i arbeidslivet",
      "En trepartsavtale mellom stat, arbeidsgivere og arbeidstakere om nasjonale lønns- og produktivitetsmål"
    ],
    "correct": 2,
    "explain": "Hovedavtalen (LO–NHO) kalles «arbeidslivets grunnlov» og regulerer rammene for partssamarbeidet: organisasjonsrett, tillitsvalgtes rettigheter og plikter, samarbeidsorganer (bedriftsutvalg) og prosedyreregler for tariffoppgjør. Den danner grunnlaget for alle bransjeavtaler."
  },
  {
    "id": 40,
    "type": "sort",
    "cat": "andre_lover",
    "catLabel": "Andre sentrale lover",
    "q": "Sorter hvert utsagn under riktig lov eller regelverk.",
    "bins": [
      {
        "id": "mfl",
        "label": "Markedsføringsloven",
        "color": "#8b5cf6"
      },
      {
        "id": "gdpr",
        "label": "GDPR / personvernloven",
        "color": "#ef4444"
      },
      {
        "id": "diskr",
        "label": "Diskrimineringsloven",
        "color": "#10b981"
      },
      {
        "id": "angre",
        "label": "Angrerettloven",
        "color": "#f59e0b"
      }
    ],
    "items": [
      {
        "text": "Forbyr villedende og aggressiv markedspraksis",
        "bin": "mfl"
      },
      {
        "text": "Krever rettslig grunnlag for behandling av personopplysninger",
        "bin": "gdpr"
      },
      {
        "text": "Forbyr diskriminering på grunnlag av kjønn og etnisitet",
        "bin": "diskr"
      },
      {
        "text": "14 dagers angrefrist ved fjernsalg og netthandel",
        "bin": "angre"
      },
      {
        "text": "Forbyr ulovlig direktemarkedsføring per e-post (spam)",
        "bin": "mfl"
      },
      {
        "text": "Gir registrerte rett til innsyn i egne lagrede personopplysninger",
        "bin": "gdpr"
      }
    ],
    "explain": "Markedsføringsloven: forbyr villedende/aggressiv markedspraksis og spam. GDPR: rettslig grunnlag for persondata, innsynsrett. Diskrimineringsloven: forbyr usaklig diskriminering. Angrerettloven: 14 dager angrefrist ved fjernsalg."
  }
];
