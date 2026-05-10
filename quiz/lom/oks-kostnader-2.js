const QUIZ_META = {
  "id": "lom-oks-kostnader-2",
  "title": "Kostnader Del 2",
  "subtitle": "Økonomistyring – Regnskap, Avskrivninger & Lønnskostnader",
  "description": "20 spørsmål om kostnadsbegreper, regnskap, avskrivninger og lønnskostnader.",
  "cats": {
    "kostnadsbegreper": {
      "label": "Kostnadsbegreper",
      "color": "#3b82f6"
    },
    "regnskapsprinsipper": {
      "label": "Regnskapsprinsipper",
      "color": "#10b981"
    },
    "avskrivninger": {
      "label": "Avskrivninger",
      "color": "#f59e0b"
    },
    "lonnskostnader": {
      "label": "Lønnskostnader",
      "color": "#ec4899"
    }
  }
};

const QUESTIONS = [
  {
    "id": 27,
    "cat": "kostnadsbegreper",
    "catLabel": "Kostnadsbegreper",
    "q": "Hva er alternativkostnad?",
    "opts": [
      "Den prisen man kunne fått fra den nest rimeligste leverandøren i markedet",
      "De samlede kostnadene som påløper ved å bytte til en alternativ produksjonsmetode",
      "Verdien av det man gir avkall på ved å velge ett alternativ fremfor et annet",
      "Kostnaden for å omstille produksjonen til et annet produkt eller segment"
    ],
    "correct": 2,
    "explain": "Alternativkostnad er det man ofrer ved å velge ett alternativ – f.eks. om du bruker egne lokaler i stedet for å leie dem ut, er alternativkostnaden leieinntekten du mister. Viktig i kalkulatoriske kostnader."
  },
  {
    "id": 29,
    "cat": "kostnadsbegreper",
    "catLabel": "Kostnadsbegreper",
    "q": "Hva er proporsjonale variable kostnader?",
    "opts": [
      "Kostnader som øker raskere enn produksjonsvolumet, typisk ved kapasitetspressing",
      "Kostnader som øker saktere enn produksjonsvolumet som følge av stordriftsfordeler",
      "Kostnader som er uavhengige av produksjonsvolumet innenfor et normalt driftsintervall",
      "Kostnader som øker proporsjonalt med produksjonsvolumet – fast kostnad per produsert enhet"
    ],
    "correct": 3,
    "explain": "Proporsjonale variable kostnader øker i eksakt samme takt som produksjonsvolumet. Eksempel: råvarekostnad per enhet er konstant – dobler man produksjonen, dobles råvarekostnaden."
  },
  {
    "id": 31,
    "type": "sort",
    "cat": "kostnadsbegreper",
    "catLabel": "Kostnadsbegreper",
    "q": "Sorter hvert eksempel i riktig kostnadskategori – fast eller variabel.",
    "bins": [
      {
        "id": "fast",
        "label": "Fast kostnad",
        "color": "#3b82f6"
      },
      {
        "id": "var",
        "label": "Variabel kostnad",
        "color": "#10b981"
      }
    ],
    "items": [
      {
        "text": "Husleie for produksjonslokalet",
        "bin": "fast"
      },
      {
        "text": "Råvarer per produsert enhet",
        "bin": "var"
      },
      {
        "text": "Administrasjonslønn til daglig leder",
        "bin": "fast"
      },
      {
        "text": "Emballasjekostnader per produkt",
        "bin": "var"
      },
      {
        "text": "Forsikringspremie på bedriftens maskiner",
        "bin": "fast"
      },
      {
        "text": "Provisjon til selgere per avsluttet salg",
        "bin": "var"
      }
    ],
    "explain": "Faste kostnader (husleie, adm.lønn, forsikring) er uavhengige av produksjonsvolumet. Variable kostnader (råvarer, emballasje, provisjon) varierer direkte med produksjon og salg."
  },
  {
    "id": 32,
    "type": "sort",
    "cat": "kostnadsbegreper",
    "catLabel": "Kostnadsbegreper",
    "q": "Sorter kostnadene i riktig kategori – direkte eller indirekte.",
    "bins": [
      {
        "id": "dir",
        "label": "Direkte kostnader",
        "color": "#8b5cf6"
      },
      {
        "id": "indir",
        "label": "Indirekte kostnader",
        "color": "#f59e0b"
      }
    ],
    "items": [
      {
        "text": "Trelast brukt til å bygge et bestemt skap",
        "bin": "dir"
      },
      {
        "text": "Strømkostnad for hele produksjonshallen",
        "bin": "indir"
      },
      {
        "text": "Direkte arbeidstid på et spesifikt oppdrag",
        "bin": "dir"
      },
      {
        "text": "Regnskapsførerhonorar til ekstern konsulent",
        "bin": "indir"
      },
      {
        "text": "Maling brukt på et konkret malingsprosjekt",
        "bin": "dir"
      },
      {
        "text": "Administrasjonslønn som ikke knyttes til én ordre",
        "bin": "indir"
      }
    ],
    "explain": "Direkte kostnader kan sporbarbart knyttes til ett bestemt produkt eller prosjekt. Indirekte kostnader (overhead) kan ikke direkte tilordnes og fordeles på produkter via en fordelingsnøkkel."
  },
  {
    "id": 33,
    "cat": "kostnadsbegreper",
    "catLabel": "Kostnadsbegreper",
    "q": "Hva er to kjennetegn ved proporsjonale variable kostnader?",
    "opts": [
      "Kostnaden per enhet er konstant – uavhengig av produksjonsmengden",
      "Kostnadene er uavhengige av produksjonsvolumet innenfor kapasitetsintervallet",
      "Totalkostnaden øker i nøyaktig samme takt som produksjonsvolumet",
      "Kostnadene øker raskere enn produksjonsvolumet når kapasiteten presses"
    ],
    "correct": [
      0,
      2
    ],
    "explain": "Proporsjonale variable kostnader har konstant enhetskostnad (kjennetegn 1) og totalkostnad som øker i nøyaktig samme takt som volumet (kjennetegn 2). Faste kostnader er uavhengige av volum. Overproposjonale øker raskere ved kapasitetspressing."
  },
  {
    "id": 15,
    "cat": "regnskapsprinsipper",
    "catLabel": "Regnskapsprinsipper",
    "q": "Hva sier transaksjonsprinsippet i regnskapsloven?",
    "opts": [
      "Alle transaksjoner mellom nærstående parter skal vurderes til markedsverdi",
      "Transaksjoner skal bokføres fortløpende i den perioden de inngås",
      "Alle transaksjoner over kr 10 000 skal dokumenteres med ekstern faktura",
      "Transaksjoner skal regnskapsføres til verdien på transaksjonstidspunktet"
    ],
    "correct": 3,
    "explain": "Transaksjonsprinsippet: transaksjoner skal regnskapsføres til den verdien de hadde på transaksjonstidspunktet (historisk kost). Dette gir objektivitet og etterprøvbarhet."
  },
  {
    "id": 16,
    "cat": "regnskapsprinsipper",
    "catLabel": "Regnskapsprinsipper",
    "q": "Hva sier opptjeningsprinsippet?",
    "opts": [
      "Inntekter regnskapsføres når de er opptjent – dvs. når varen er levert eller tjenesten utført",
      "Inntekter regnskapsføres først når betaling er mottatt og beløpet er bekreftet innbetalt på bedriftens konto",
      "Inntekter regnskapsføres løpende og gradvis etter hvert som prosjektet fullføres og delleveranser godkjennes",
      "Inntekter opptjenes og regnskapsføres allerede når kontrakten er signert av begge avtaleparter"
    ],
    "correct": 0,
    "explain": "Opptjeningsprinsippet: inntekter skal regnskapsføres i den perioden de opptjenes (varen leveres eller tjenesten utføres) – ikke når betaling mottas. Dette sikrer korrekt periodematch."
  },
  {
    "id": 17,
    "cat": "regnskapsprinsipper",
    "catLabel": "Regnskapsprinsipper",
    "q": "Hva sier sammenstillingsprinsippet?",
    "opts": [
      "Inntekter og kostnader skal sammenstilles slik at budsjettet og regnskapet kan sammenlignes",
      "Alle poster i resultatregnskapet skal sammenstilles mot tilsvarende balanseposter",
      "Kostnader skal regnskapsføres i samme periode som de tilhørende inntektene",
      "Selskapets regnskap skal sammenstilles med bransjens normtall i årsrapporten"
    ],
    "correct": 2,
    "explain": "Sammenstillingsprinsippet: kostnader skal periodiseres og regnskapsføres i samme regnskapsperiode som de inntektene de er med på å generere – dette gir et korrekt bilde av periodens resultat."
  },
  {
    "id": 18,
    "cat": "regnskapsprinsipper",
    "catLabel": "Regnskapsprinsipper",
    "q": "Hva sier forsiktighetsprinsippet?",
    "opts": [
      "Bedriften bør alltid budsjettere med lavere inntekter enn forventet for å unngå overraskelser",
      "Revisor skal velge den tolkningsmetoden som gir lavest mulig skattepliktig inntekt",
      "Bedriften skal holde tilbake utbytte inntil gjelden er under 50 % av totalkapitalen",
      "Urealisert tap skal regnskapsføres, men urealisert gevinst skal ikke regnskapsføres"
    ],
    "correct": 3,
    "explain": "Forsiktighetsprinsippet: usikre tap og nedskrivninger skal regnskapsføres når de identifiseres, men urealiserte gevinster skal IKKE tas med. Dette gir et forsiktig, ikke for optimistisk bilde."
  },
  {
    "id": 19,
    "cat": "avskrivninger",
    "catLabel": "Avskrivninger",
    "q": "Hva er formålet med avskrivninger?",
    "opts": [
      "Å fordele kostnadene for et driftsmiddel over dets levetid – kostnaden periodiseres der driftsmiddelet brukes",
      "Å sette av midler i et reservefond slik at bedriften kan finansiere erstatning av driftsmidlet når levetiden er slutt",
      "Å nedjustere bokført verdi til driftsmidlets estimerte markedsverdi på balansetidspunktet hvert regnskapsår",
      "Å redusere betalbar skatt ved å fradragsføre det beregnede verdifallet på driftsmidlet i skatteregnskapet"
    ],
    "correct": 0,
    "explain": "Avskrivninger fordeler anskaffelseskostnaden for et varig driftsmiddel (maskin, bil, bygg) over den perioden det benyttes – i tråd med sammenstillingsprinsippet."
  },
  {
    "id": 20,
    "cat": "avskrivninger",
    "catLabel": "Avskrivninger",
    "q": "Hva er lineær avskrivning?",
    "opts": [
      "Avskrivning der man avskriver en høyere andel de første årene når driftsmidlet er nytt",
      "Avskrivning der beløpet justeres årlig basert på faktisk utnyttelsesgrad og driftstimer",
      "Avskrivning med likt beløp hvert år i hele driftsmidlets levetid (kostpris / antall bruksår)",
      "Avskrivning beregnet som en fast prosentandel av opprinnelig kostpris hvert år"
    ],
    "correct": 2,
    "explain": "Lineær avskrivning: kostprisen minus eventuell restverdi deles likt på antall bruksår. Brukes i finansregnskapet. Eksempel: bil til kr 300 000 med 5 års levetid gir kr 60 000 i avskrivning per år."
  },
  {
    "id": 21,
    "cat": "avskrivninger",
    "catLabel": "Avskrivninger",
    "q": "Hva er saldoavskrivning (skattemessig avskrivning)?",
    "opts": [
      "En avskrivningsmetode der man avskriver et fast beløp hvert år frem til driftsmidlet er fullt nedskrevet",
      "En avskrivningsmetode der beløpet beregnes som gjenstående restverdi delt på antall gjenværende bruksår",
      "En metode der driftsmidlet fullt ut avskrives i det regnskapsåret det selges, vrakes eller tas ut av bruk",
      "En avskrivningsmetode der man avskriver en fast prosent av bokført verdi hvert år – gir fallende beløp"
    ],
    "correct": 3,
    "explain": "Saldoavskrivning er den skattemessige metoden: man avskriver en fast prosentsats av gjenstående bokført verdi (saldo) hvert år. Dette gir fallende avskrivningsbeløp over tid. Driftsmidler gruppes i saldogrupper a–j."
  },
  {
    "id": 22,
    "cat": "avskrivninger",
    "catLabel": "Avskrivninger",
    "q": "Hva er saldogrupper i skattemessig avskrivning?",
    "opts": [
      "Grupper av driftsmidler (a–j) med ulik avskrivningssats bestemt av skatteloven",
      "Kategorier av langsiktig gjeld som avdras etter ulike satser i skatteregnskapet",
      "Grupper av kostnader som kan direkte fradragsføres i det året de påløper",
      "Klassifiseringer av finansielle eiendeler etter likviditetsgrad og risiko"
    ],
    "correct": 0,
    "explain": "Saldogrupper a–j er kategorier driftsmidler plasseres i for skattemessig avskrivning. Ulike grupper har ulike prosentsatser – f.eks. gruppe b (personbiler) avskrives med 20 %, gruppe d (maskiner) med 20 %."
  },
  {
    "id": 24,
    "cat": "regnskapsprinsipper",
    "catLabel": "Regnskapsprinsipper",
    "q": "Hva er tidsavgrensning i regnskap?",
    "opts": [
      "At regnskapsåret alltid løper fra 1. januar til 31. desember og ikke kan tilpasses bedriftens driftssyklus",
      "At avskrivninger alltid beregnes over nøyaktig den perioden skattemyndighetene fastsetter i saldogruppereglene",
      "At innlevering av årsregnskap, skattemelding og næringsoppgave skjer innen de lovpålagte fristene",
      "Å periodisere inntekter og kostnader til riktig regnskapsperiode, uavhengig av når penger mottas eller betales"
    ],
    "correct": 3,
    "explain": "Tidsavgrensning handler om å matche inntekter og kostnader til den perioden de faktisk tilhører, ikke til den perioden pengene strømmer. Dette er kjernen i god regnskapsføring."
  },
  {
    "id": 28,
    "cat": "avskrivninger",
    "catLabel": "Avskrivninger",
    "q": "Hva er forskjellen mellom finansregnskapets lineære avskrivninger og skattemessige saldoavskrivninger?",
    "opts": [
      "Det er ingen praktisk forskjell – begge gir nøyaktig samme totale avskrivning sett over hele driftsmidlets levetid",
      "Lineær avskrivning benyttes kun for bygninger og fast eiendom; saldoavskrivning gjelder løsøre, maskiner og kjøretøy",
      "Saldoavskrivning gir alltid lavere skattefradrag enn lineær avskrivning i samtlige år gjennom hele levetiden til driftsmidlet",
      "Finansregnskapet bruker lineær avskrivning (likt beløp per år); skattemessig brukes saldometode (fast % av saldo – fallende beløp)"
    ],
    "correct": 3,
    "explain": "Lineær avskrivning (finansregnskap) gir likt beløp hvert år. Saldoavskrivning (skatteregnskap) gir høyere beløp de første årene (fallende med fast %) og lavere etter hvert. Dette skaper midlertidige skattemessige forskjeller."
  },
  {
    "id": 34,
    "cat": "lonnskostnader",
    "catLabel": "Lønnskostnader",
    "q": "Hva inngår i bedriftens totale lønnskostnad per ansatt?",
    "opts": [
      "Kun bruttolønn og feriepenger er direkte lønnskostnader – de øvrige kostnadene bæres av NAV og trygdesystemet",
      "Bruttolønn, feriepenger, arbeidsgiveravgift (AGA), pensjonsinnskudd og yrkesskadeforsikring",
      "Nettolønn, skattetrekk og fagforeningskontingent – samlet kalt direkte personalkostnad",
      "Bruttolønn og arbeidsgiveravgift – pensjon og forsikring er frivillige tillegg etter valg"
    ],
    "correct": 1,
    "explain": "Total lønnskostnad inkluderer: bruttolønn + feriepenger (10,2 %/12,5 %) + arbeidsgiveravgift (AGA, 14,1 % i sone 1) + pensjonsinnskudd (min. 2 %) + yrkesskadeforsikring. Summen er vesentlig høyere enn det arbeidstaker mottar netto."
  },
  {
    "id": 35,
    "cat": "lonnskostnader",
    "catLabel": "Lønnskostnader",
    "q": "Hva er en vanlig tommelfingerregel for total lønnskostnad sammenlignet med bruttolønn?",
    "opts": [
      "Total lønnskostnad tilsvarer om lag 10–15 % over bruttolønn, da AGA er den eneste tilleggsavgiften av betydning",
      "Total lønnskostnad tilsvarer om lag 20–25 % over bruttolønn på grunn av sosiale avgifter",
      "Total lønnskostnad er om lag 25–35 % høyere enn bruttolønn når alle sosiale kostnader inkluderes",
      "Total lønnskostnad overstiger bruttolønn med om lag 45–55 % i de fleste norske virksomheter"
    ],
    "correct": 2,
    "explain": "En vanlig tommelfingerregel er at total lønnskostnad er ca. 25–35 % høyere enn bruttolønn, avhengig av pensjonsordning og AGA-sone. For en ansatt med 500 000 kr bruttolønn vil totalkostnaden typisk ligge på 625 000–675 000 kr."
  },
  {
    "id": 36,
    "cat": "lonnskostnader",
    "catLabel": "Lønnskostnader",
    "q": "Hva er arbeidsgiveravgiften (AGA) i sone 1?",
    "opts": [
      "7,9 % av bruttolønn – gjelder bedrifter i tiltakssoner i Nord-Norge og distriktene",
      "10,6 % av bruttolønn – gjelder mellomstore virksomheter etter en gradvis opptrapping",
      "12,5 % av bruttolønn – tilsvarer den øvre feriepengeprosenten for eldre arbeidstakere",
      "14,1 % av bruttolønn – gjelder for de fleste bedrifter i sentrale og tettbebygde strøk"
    ],
    "correct": 3,
    "explain": "Arbeidsgiveravgiften (AGA) er 14,1 % av bruttolønn i sone 1 (de fleste sentrale strøk). Satsen er lavere i tiltakssoner i distriktene (ned til 0 % i sone V). AGA betales av arbeidsgiver i tillegg til lønnen og er ikke synlig på arbeidstakers lønnsslipp."
  },
  {
    "id": 37,
    "cat": "lonnskostnader",
    "catLabel": "Lønnskostnader",
    "q": "Hvilke to lønnsformer gir variable lønnskostnader for bedriften?",
    "opts": [
      "Akkordlønn og provisjonslønn – varierer direkte med produksjonsmengde eller salgsinntekt",
      "Fastlønn og månedslønn – lønnskostnaden er fast og uavhengig av arbeidsresultat, produktivitet og produksjonsvolum",
      "Timelønn med garantert minstetid og årsbonus fastsatt på forhånd i budsjettet gir tilnærmet faste lønnskostnader",
      "Pensjonskostnad og forsikringspremie – betales med fast sats uavhengig av resultat"
    ],
    "correct": 0,
    "explain": "Variable lønnskostnader endrer seg med produksjonsvolum eller salgsresultat. Akkordlønn (betalt per produsert enhet) og provisjonslønn (betalt per salg) er typiske variable lønnsformer. Fastlønn og månedslønn er faste kostnader."
  },
  {
    "id": 38,
    "cat": "lonnskostnader",
    "catLabel": "Lønnskostnader",
    "q": "Hva er «sosiale kostnader» i regnskaps- og kalkylesammenheng?",
    "opts": [
      "Kostnader knyttet til bedriftens sosiale ansvar (CSR), inkludert tiltak for samfunnet og miljø",
      "Kostnader utover bruttolønn som arbeidsgiver bærer: AGA, pensjon, forsikring og feriepenger",
      "Helse- og trivselsfremmende tiltak på arbeidsplassen som bedriftsidrett og kantineordning",
      "Avsetninger til fremtidige lønnsoppgjør, tariffregulering og ansiennitetsbasert lønnsøkning"
    ],
    "correct": 1,
    "explain": "Sosiale kostnader er personalkostnader utover selve bruttolønnen: AGA, pensjonskostnader, yrkesskadeforsikring og feriepengeavsetning. De tas med i kalkylene som indirekte kostnader eller legges direkte til lønnskostnaden ved beregning av timekost."
  }
];
