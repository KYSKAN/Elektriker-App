const QUIZ_META = {
  "id": "lom-ool-kultur-1",
  "title": "Organisasjonskultur Del 1",
  "subtitle": "LØM Fagskole – Schein & Kulturtyper",
  "description": "19 spørsmål – Scheins kulturmodell, De fire kulturtypene.",
  "cats": {
    "schein": {
      "label": "Scheins kulturmodell",
      "color": "#8b5cf6"
    },
    "kulturtyper": {
      "label": "De fire kulturtypene",
      "color": "#3b82f6"
    }
  }
};

const QUESTIONS = [
  {
    "id": 1,
    "cat": "schein",
    "catLabel": "Scheins kulturmodell",
    "q": "Hvem utviklet den mest brukte definisjonen av organisasjonskultur som \"et mønster av felles grunnleggende antakelser\"?",
    "opts": [
      "Peter Senge",
      "Edgar Schein",
      "Douglas McGregor",
      "Meredith Belbin"
    ],
    "correct": 1,
    "explain": "Edgar Schein definerte organisasjonskultur som et mønster av felles grunnleggende antakelser som en gruppe har lært seg gjennom å løse problemer med ekstern tilpasning og intern integrasjon."
  },
  {
    "id": 2,
    "cat": "schein",
    "catLabel": "Scheins kulturmodell",
    "q": "Hva er artefakter i Scheins kulturmodell?",
    "opts": [
      "De dypeste, ubevisste antakelsene – forankret i organisasjonens grunnleggende tro på virkeligheten",
      "De synlige, overfladiske uttrykkene for kultur: symboler, ritualer, kleskode, kontorlandskap",
      "De offisielle verdiene ledelsen har vedtatt, og som er kommunisert til hele organisasjonen",
      "De skriftlige normene, reglene og retningslinjene som er beskrevet i personalhåndboken"
    ],
    "correct": 1,
    "explain": "Artefakter er det synlige og øverste nivået i Scheins modell – fysiske og atferdsmessige uttrykk for kulturen: logoer, ritualer, kleskode, kontorlandskap og språk."
  },
  {
    "id": 3,
    "cat": "schein",
    "catLabel": "Scheins kulturmodell",
    "q": "Hvilke av følgende er eksempler på artefakter i Scheins kulturmodell?",
    "opts": [
      "Kleskode, kontorlandskap og synlige symboler",
      "Grunnleggende antakelser om menneskelig natur",
      "Ritualer, seremonier og fellesarrangementer",
      "Delte normer for hva som er riktig og gal atferd"
    ],
    "correct": [
      0,
      2
    ],
    "explain": "Artefakter er de synlige, konkrete uttrykkene for kulturen – kleskode, kontorlandskap, symboler, ritualer og seremonier. Grunnleggende antakelser er det dypeste nivået, og normer hører til verdier/normer-nivået."
  },
  {
    "id": 4,
    "cat": "schein",
    "catLabel": "Scheins kulturmodell",
    "q": "Hva representerer \"verdier og normer\" som det midtre nivået i Scheins modell?",
    "opts": [
      "Det lett observerbare laget – synlig for utenforstående gjennom symboler og ritualer",
      "Delte oppfatninger om hva som er riktig atferd – delvis bevisst og kan diskuteres",
      "Dype, ubevisste antakelser om virkeligheten som sjelden stilles spørsmål ved",
      "Formelle regler og prosedyrer som er nedskrevet i organisasjonens håndbøker"
    ],
    "correct": 1,
    "explain": "Verdier og normer er det midtre nivået – felles oppfatninger om hva som er riktig, viktig og ønskelig atferd. De er delvis bevisste og kan diskuteres, men er ikke alltid synlige for utenforstående."
  },
  {
    "id": 5,
    "cat": "schein",
    "catLabel": "Scheins kulturmodell",
    "q": "Hva er grunnleggende antakelser i Scheins kulturmodell?",
    "opts": [
      "De synlige symbolene, ritualene og atferdsmønstrene som preger hverdagen i organisasjonen",
      "De nedskrevne kjerneverdiene som presenteres i årsrapporten, brosjyrer og på nettsiden",
      "Dype, ubevisste antagelser om virkeligheten som tas fullstendig for gitt",
      "De formelle målene, strategiene og planene som er vedtatt i organisasjonens strategi"
    ],
    "correct": 2,
    "explain": "Grunnleggende antakelser er det dypeste og mest usynlige nivået – ubevisste antagelser om verden, mennesket og relasjoner som tas helt for gitt og sjelden stilles spørsmål ved."
  },
  {
    "id": 6,
    "cat": "schein",
    "catLabel": "Scheins kulturmodell",
    "q": "Hva illustrerer isfjellmodellen i organisasjonskulturens kontekst?",
    "opts": [
      "At organisasjonskultur (særlig artefaktene) primært utvikler seg i store, etablerte bedrifter",
      "At den synlige delen (artefakter) er liten, mens den usynlige delen (verdier, antakelser) er mye større og dypere",
      "At kulturen er stabil, tung å bevege – som et isfjell som driver sakte gjennom havet",
      "At ledelsen sjelden forstår de kulturelle strømningene (subkulturer), som faktisk preger organisasjonen"
    ],
    "correct": 1,
    "explain": "Isfjellmodellen illustrerer at bare en liten del av kulturen er synlig (artefakter over vannflaten), mens den største og viktigste delen (verdier, normer og grunnleggende antakelser) er usynlig under overflaten."
  },
  {
    "id": 7,
    "cat": "schein",
    "catLabel": "Scheins kulturmodell",
    "q": "Hva betyr ekstern tilpasning i Scheins kulturmodell?",
    "opts": [
      "Å rekruttere nye medarbeidere utenfra – tilfører organisasjonen friske perspektiver, kompetanse og fornying",
      "At kulturen hjelper organisasjonen å forstå og tilpasse seg omgivelsene – marked, konkurrenter, samfunn",
      "At organisasjonen gradvis overtar verdier, normer og praksiser – særlig fra bransjeledende konkurrenter",
      "At kulturen justeres fortløpende, i takt med teknologiske endringer i omgivelsene"
    ],
    "correct": 1,
    "explain": "Ekstern tilpasning handler om at kulturen gir felles forståelse for mål, strategi og metoder som hjelper organisasjonen navigere og tilpasse seg ytre omgivelser."
  },
  {
    "id": 8,
    "cat": "schein",
    "catLabel": "Scheins kulturmodell",
    "q": "Hva betyr intern integrasjon i Scheins kulturmodell?",
    "opts": [
      "At medarbeidere har samme stillingstittel, lønnsnivå og formelt sett lik myndighet i organisasjonen",
      "At kulturen skaper felles identitet, samhold og felles forståelse internt i organisasjonen",
      "At avdelingene benytter de samme IT-systemene, plattformene og digitale arbeidsverktøyene",
      "At organisasjonen samler ansatte i ett fysisk lokale, for å styrke samarbeidet på tvers"
    ],
    "correct": 1,
    "explain": "Intern integrasjon innebærer at kulturen skaper et felles \"vi\" – felles identitet, kommunikasjonsmåter, grenser for inn- og utgrupper, og felles forståelse for makt og status."
  },
  {
    "id": 9,
    "cat": "schein",
    "catLabel": "Scheins kulturmodell",
    "q": "Hvilke to funksjoner fyller organisasjonskultur ifølge Schein?",
    "opts": [
      "Ekstern tilpasning – hjelper organisasjonen forstå og tilpasse seg omgivelsene",
      "Hierarkisk kontroll – definerer maktforhold og beslutningsveier i organisasjonen",
      "Intern integrasjon – skaper felles identitet og samhold internt i organisasjonen",
      "Kulturell dominans – sikrer at én kultur vinner frem over konkurrerende subkulturer"
    ],
    "correct": [
      0,
      2
    ],
    "explain": "Scheins to hovefunksjoner for organisasjonskultur er ekstern tilpasning (hjelpe organisasjonen navigere omgivelsene) og intern integrasjon (skape et felles \"vi\" med felles identitet og samhold)."
  },
  {
    "id": 10,
    "type": "order",
    "pyramid": true,
    "cat": "schein",
    "catLabel": "Scheins kulturmodell",
    "q": "Plasser de tre lagene i Scheins kulturmodell i riktig rekkefølge. Det mest synlige laget øverst, det dypeste laget nederst.",
    "items": [
      "Grunnleggende antakelser",
      "Verdier og normer",
      "Artefakter"
    ],
    "explain": "Scheins kulturmodell fra overflate til dybde: Artefakter (synlige symboler og ritualer) øverst → Verdier og normer (delvis bevisste) i midten → Grunnleggende antakelser (ubevisste, tas for gitt) dypest."
  },
  {
    "id": 11,
    "cat": "kulturtyper",
    "catLabel": "De fire kulturtypene",
    "q": "Hva kjennetegner klankultur?",
    "opts": [
      "Sterk resultatorientering med fokus på konkurranse, salgsmål og markedsandeler",
      "Rigid hierarki med klare regler, prosedyrer og systematisk kontroll av atferd",
      "Familie-lignende atmosfære med høy lojalitet, samarbeid og omsorg for ansatte",
      "Innovasjon, risikovilje og kreativitet som prioriteres fremfor stabilitet og forutsigbarhet"
    ],
    "correct": 2,
    "explain": "Klankultur er kjennetegnet av et familie-lignende miljø med sterk lojalitet, samarbeid, deltakelse og omsorg for de ansatte. Ledere fungerer som mentorer."
  },
  {
    "id": 12,
    "cat": "kulturtyper",
    "catLabel": "De fire kulturtypene",
    "q": "Hva kjennetegner adhockultur?",
    "opts": [
      "Stabilitet, kontroll og klare prosedyrer som sikrer forutsigbar og effektiv drift",
      "Sterk konkurranseorientering mot markedet, kundene og kundesegmentene",
      "Innovasjon, kreativitet, fleksibilitet og villighet til å ta risiko",
      "Familie-lignende samhold, trygghet og omsorg for ansattes trivsel og faglige utvikling"
    ],
    "correct": 2,
    "explain": "Adhockultur kjennetegnes av dynamisme, kreativitet og risikovilje. Organisasjonen er villig til å prøve nytt og aksepterer usikkerhet. Typisk i oppstartsbedrifter og FoU-miljøer."
  },
  {
    "id": 13,
    "cat": "kulturtyper",
    "catLabel": "De fire kulturtypene",
    "q": "Hva kjennetegner hierarkikultur?",
    "opts": [
      "Innovasjon, kreativitet og nytenkning – organisasjonen belønner eksperimentering",
      "Formelle regler, klare prosedyrer, stabilitet og effektivitet gjennom kontroll",
      "Sterkt fokus på å vinne i markedet, oppnå bedre resultater enn konkurrentene",
      "Uformell, familie-lignende atmosfære der samhold og trivsel settes høyt"
    ],
    "correct": 1,
    "explain": "Hierarkikultur vektlegger formelle regler, prosedyrer, standardisering og stabilitet. Lederne er koordinatorer og organisatorer. Typisk i offentlige etater og tradisjonelle produksjonsbedrifter."
  },
  {
    "id": 14,
    "cat": "kulturtyper",
    "catLabel": "De fire kulturtypene",
    "q": "Hva kjennetegner markedskultur?",
    "opts": [
      "Omsorg for ansattes trivsel og et uformelt, fleksibelt arbeidsmiljø",
      "Kreativitet, vilje til å ta risiko og fokus på å drive frem innovasjon",
      "Resultatorientering, konkurranse og fokus på å nå markedsmål",
      "Strenge regler, prosedyrer og et tydelig hierarki"
    ],
    "correct": 2,
    "explain": "Markedskultur er resultat- og konkurranseorientert. Fokuset er på å nå mål, vinne markedsandeler og slå konkurrentene. Ledere er pådrivere og krevende."
  },
  {
    "id": 15,
    "cat": "kulturtyper",
    "catLabel": "De fire kulturtypene",
    "q": "Hvilken kulturtype passer best for en offentlig etat med mange regler og standardiserte prosedyrer?",
    "opts": [
      "Adhockultur",
      "Klankultur",
      "Hierarkikultur",
      "Markedskultur"
    ],
    "correct": 2,
    "explain": "Hierarkikultur med vekt på regler, prosedyrer, stabilitet og kontroll passer best for offentlige etater og organisasjoner som krever høy grad av standardisering."
  },
  {
    "id": 16,
    "cat": "kulturtyper",
    "catLabel": "De fire kulturtypene",
    "q": "Hvilken kulturtype vil typisk dominere i en startup-bedrift som utvikler ny teknologi?",
    "opts": [
      "Hierarkikultur",
      "Markedskultur",
      "Klankultur",
      "Adhockultur"
    ],
    "correct": 3,
    "explain": "Adhockultur med vekt på innovasjon, fleksibilitet, risikovilje og kreativitet er typisk for oppstartsbedrifter og teknologiselskaper i vekst."
  },
  {
    "id": 17,
    "type": "sort",
    "cat": "kulturtyper",
    "catLabel": "De fire kulturtypene",
    "q": "Sorter hvert kjennetegn til riktig kulturtype.",
    "bins": [
      {
        "id": "klan",
        "label": "Klankultur",
        "color": "#10b981"
      },
      {
        "id": "adhoc",
        "label": "Adhockultur",
        "color": "#8b5cf6"
      },
      {
        "id": "hierarki",
        "label": "Hierarkikultur",
        "color": "#3b82f6"
      },
      {
        "id": "marked",
        "label": "Markedskultur",
        "color": "#ef4444"
      }
    ],
    "items": [
      {
        "text": "Familie-lignende samhold",
        "bin": "klan"
      },
      {
        "text": "Innovasjon og risikovilje",
        "bin": "adhoc"
      },
      {
        "text": "Regler og prosedyrer",
        "bin": "hierarki"
      },
      {
        "text": "Konkurranseorientering",
        "bin": "marked"
      },
      {
        "text": "Mentorledelse",
        "bin": "klan"
      },
      {
        "text": "Kreativitet og fleksibilitet",
        "bin": "adhoc"
      },
      {
        "text": "Standardisering og kontroll",
        "bin": "hierarki"
      },
      {
        "text": "Fokus på markedsandeler",
        "bin": "marked"
      }
    ],
    "explain": "Klankultur: familie-samhold, mentorledelse. Adhockultur: innovasjon, risikovilje, kreativitet. Hierarkikultur: regler, prosedyrer, standardisering og kontroll. Markedskultur: konkurranse, markedsandeler, resultatorientering."
  },
  {
    "id": 36,
    "cat": "schein",
    "catLabel": "Scheins kulturmodell",
    "q": "Hvilken utfordring møter man ved kulturendring ifølge Scheins modell?",
    "opts": [
      "De grunnleggende antakelsene er ubevisste og tas for gitt – dermed svært vanskelig å endre",
      "Kulturendring er enkelt – formuler og kommuniser nye verdier til de ansatte",
      "Kulturen er relativt stabil, men kan gradvis justeres gjennom målrettet lederskap over tid",
      "Artefaktene er vanskeligst å endre – verdier og antakelser lar seg derimot forme raskt"
    ],
    "correct": 0,
    "explain": "De grunnleggende antakelsene er det dypeste og mest resistente nivået. De er ubevisste og tas for gitt, noe som gjør kulturendring krevende og tidkrevende – man kan ikke bare skrive nye verdier."
  },
  {
    "id": 37,
    "cat": "kulturtyper",
    "catLabel": "De fire kulturtypene",
    "q": "En bedrift som fokuserer sterkt på å slå konkurrentene, nå salgsmål og øke markedsandelen, kjennetegnes av hvilken kulturtype?",
    "opts": [
      "Klankultur",
      "Adhockultur",
      "Hierarkikultur",
      "Markedskultur"
    ],
    "correct": 3,
    "explain": "Markedskultur kjennetegnes av sterk resultatorientering og konkurranseinstinkt – fokus på å nå mål, vinne markedsandeler og overgå konkurrentene."
  }
];
