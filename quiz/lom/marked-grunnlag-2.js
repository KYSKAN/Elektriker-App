const QUIZ_META = {
  "id": "lom-marked-grunnlag-2",
  "title": "Markedsgrunnlag Del 2",
  "subtitle": "LØM Fagskole – Konkurransemiljø & Kjøpsatferd",
  "description": "16 spørsmål – Konkurransemiljø, Kjøpsprosess og kjøpsatferd.",
  "cats": {
    "konkurranse_env": {
      "label": "Konkurransemiljø",
      "color": "#f59e0b"
    },
    "kjopsatferd": {
      "label": "Kjøpsprosess og kjøpsatferd",
      "color": "#ef4444"
    }
  }
};

const QUESTIONS = [
  {
    "id": 23,
    "cat": "konkurranse_env",
    "catLabel": "Konkurransemiljø",
    "q": "Hva er Porters fem konkurransekrefter?",
    "opts": [
      "Leverandørers forhandlingsmakt, kunders forhandlingsmakt, trusler fra nykommere og substitutter, og rivaliseringsintensiteten",
      "Pris, kvalitet, distribusjon, merkevare og innovasjonstakt – de viktigste parameterne for å vurdere bransjens konkurransedynamikk",
      "Kostnadsstruktur, inntektsmodell, markedsandel, vekstrate og lønnsomhet per segment i bransjeregnskapet",
      "Produkt, pris, plass (distribusjon), påvirkning (promotion) og personell i den utvidede 5P-markedsmiksen"
    ],
    "correct": 0,
    "explain": "Porters fem krefter: (1) Leverandørers makt, (2) Kunders makt, (3) Trussel fra nykommere, (4) Trussel fra substitutter (erstatningsprodukter), (5) Rivalisering blant eksisterende aktører."
  },
  {
    "id": 24,
    "cat": "konkurranse_env",
    "catLabel": "Konkurransemiljø",
    "q": "Hva øker trusselen fra nykommere i en bransje?",
    "opts": [
      "Lave inngangsbarrierer, lite merkevarelojalitet og lave byttkostnader for kundene",
      "Høye etableringskrav, sterk merkevarelojalitet og langvarige kundekontrakter som låser kjøpere",
      "Intens prisrivalisering blant etablerte aktører som gjør bransjen lite attraktiv",
      "Høy leverandørkonsentrasjon og begrenset tilgang på kritiske råvarer"
    ],
    "correct": 0,
    "explain": "Trussel fra nykommere er høy når inngangsbarrierene er lave (lite kapital, regulering, teknologi kreves), merkevarelojaliteten er svak og kundene lett kan bytte leverandør."
  },
  {
    "id": 25,
    "cat": "konkurranse_env",
    "catLabel": "Konkurransemiljø",
    "q": "Hva er et substitutt i Porters modell?",
    "opts": [
      "En konkurrent i samme bransje med et tilnærmet identisk produkt og overlappende målgruppe",
      "En ny leverandør som tilbyr kortere leveringstid og lavere pris",
      "Et produkt eller tjeneste fra en annen bransje som dekker samme kundebehov",
      "En kunde som skifter til et billigere alternativ innenfor samme produktkategori"
    ],
    "correct": 2,
    "explain": "Substitutter er produkter eller tjenester fra andre bransjer som kan erstatte bransjens tilbud. Eksempel: tog er et substitutt for fly; video-streaming er et substitutt for kino."
  },
  {
    "id": 26,
    "cat": "konkurranse_env",
    "catLabel": "Konkurransemiljø",
    "q": "Når er leverandørers forhandlingsmakt høy?",
    "opts": [
      "Når det finnes mange konkurrerende leverandører og bytting er enkelt og billig",
      "Når kundene i bransjen er svært mange og ingen enkelt kjøper dominerer volumet",
      "Når bransjen har få store kjøpere med høy forhandlingsstyrke, store volum og lang innkjøpserfaring",
      "Når leverandøren er unik, leverer kritiske innsatsfaktorer og det er dyrt å bytte leverandør"
    ],
    "correct": 3,
    "explain": "Leverandørers makt er høy når de er få, leverer unike eller kritiske innsatsfaktorer, og det er kostbart eller vanskelig for kunden å bytte leverandør."
  },
  {
    "id": 27,
    "cat": "konkurranse_env",
    "catLabel": "Konkurransemiljø",
    "q": "Hva er hensikten med en konkurrentanalyse?",
    "opts": [
      "Å forstå konkurrentenes styrker, svakheter, strategier og posisjon for å identifisere egne muligheter og trusler",
      "Å hente inspirasjon fra konkurrentenes markedsføring og tilpasse vellykkede kampanjeelementer til egne produkter og kanaler",
      "Å dokumentere prisnivåene i markedet slik at man kan matche dem nøyaktig og unngå å skille seg negativt ut",
      "Å finne nisjemarkeder der konkurrentene ikke er til stede og unngå direkte møte"
    ],
    "correct": 0,
    "explain": "Konkurrentanalyse gir innsikt i hvem konkurrentene er, hva de tilbyr, hvilke segmenter de betjener og hvilke svakheter de har – grunnlag for differensiering og strategivalg."
  },
  {
    "id": 28,
    "cat": "konkurranse_env",
    "catLabel": "Konkurransemiljø",
    "q": "Hva er PESTEL-analyse brukt til?",
    "opts": [
      "Å vurdere effektiviteten i bedriftens interne verdiskapingsprosesser, kostnadsstruktur, ressursbruk og produktivitet",
      "Å utvikle og tilpasse en prisstrategi basert på markedets betalingsvillighet og konkurrentenes priser",
      "Å kartlegge og sammenligne konkurrentenes posisjonering og markedsandeler",
      "Å kartlegge makroomgivelsene: politiske, økonomiske, sosiale, teknologiske, miljø- og juridiske faktorer"
    ],
    "correct": 3,
    "explain": "PESTEL kartlegger makroomgivelsene: Political, Economic, Social, Technological, Environmental, Legal. Brukes til å identifisere eksterne faktorer som kan påvirke bedriftens fremtid."
  },
  {
    "id": 29,
    "cat": "konkurranse_env",
    "catLabel": "Konkurransemiljø",
    "q": "Hva menes med «stuck-in-the-middle» i Porters generiske strategier?",
    "opts": [
      "En bedrift som verken klarer å differensiere seg eller å være kostnadsleder, og dermed mister konkurransefortrinn",
      "En bedrift som bevisst posisjonerer seg i mellomsjiktet av markedet for å nå flest mulig kunder til en moderat pris",
      "En bedrift som satser på en avgrenset og lønnsom markedsnisje fremfor hele markedet",
      "En situasjon der kostnadslederskap og differensiering kombineres vellykket i én og samme strategi"
    ],
    "correct": 0,
    "explain": "Porter advarer mot «stuck-in-the-middle»: bedrifter som verken er tydelige kostnadsledere eller differensierer seg klart, risikerer å miste kunder til begge ender og stagnere lønnsomheten."
  },
  {
    "id": 30,
    "cat": "konkurranse_env",
    "catLabel": "Konkurransemiljø",
    "q": "Hva er en markedsutfordrer ifølge Kotlers fire konkurranseposisjoner?",
    "opts": [
      "Bedriften med størst markedsandel som i stor grad setter bransjestandarden",
      "Bedrifter som holder seg nær markedslederen ved å imitere produkt og pris",
      "Bedrifter som konsentrerer seg om en avgrenset spesialnisje for å unngå direkte konkurranse",
      "Bedrifter som aktivt utfordrer markedslederen og søker å ta over markedsandeler"
    ],
    "correct": 3,
    "explain": "Kotler identifiserer fire posisjoner: markedsleder (størst andel), markedsutfordrer (nr. 2/3, angriper aktivt lederen), markedsfølger (imiterer lederen) og markedsnisje (smal spesialisert målgruppe)."
  },
  {
    "id": 34,
    "cat": "konkurranse_env",
    "catLabel": "Konkurransemiljø",
    "q": "Hvilke to av Porters fem krefter handler om forhandlingsmakt mellom bedriften og direkte motparter i verdikjeden?",
    "opts": [
      "Leverandørers forhandlingsmakt – leverandøren er unik og det er dyrt å bytte",
      "Rivalisering mellom eksisterende aktører – prispress og aggressiv merkevarebygging",
      "Kunders forhandlingsmakt – kunder kan kreve lavere pris eller bedre kvalitet",
      "Trussel fra nye inntrengere – nye aktører utfordrer eksisterende markedsandeler"
    ],
    "correct": [
      0,
      2
    ],
    "explain": "Av Porters fem krefter handler leverandørers og kunders forhandlingsmakt direkte om maktforholdet mellom bedriften og dens motparter i verdikjeden. De tre andre (rivalisering, nykommere, substitutter) handler om bransjens attraktivitet på andre måter."
  },
  {
    "id": 35,
    "cat": "kjopsatferd",
    "catLabel": "Kjøpsprosess og kjøpsatferd",
    "q": "Hva skjer i trinnet «vurdering av alternativer» i kjøpsprosessen?",
    "opts": [
      "Kjøper innser at det eksisterer et udekket behov og begynner å tenke på mulige løsninger",
      "Kjøper sammenligner aktuelle produkter ut fra pris, kvalitet og andre personlige kjøpskriterier",
      "Kjøper gjennomfører selve transaksjonen og bestemmer seg for leverandør og betalingsform",
      "Kjøper evaluerer i etterkant om det gjennomførte kjøpet svarte til forventningene og behovet"
    ],
    "correct": 1,
    "explain": "I «vurdering av alternativer» sammenligner kjøper de produktene som er aktuelle ut fra personlige kjøpskriterier (pris, kvalitet, egenskaper, merkevare). Resultatet er en rangering som leder til kjøpsbeslutningen."
  },
  {
    "id": 36,
    "cat": "kjopsatferd",
    "catLabel": "Kjøpsprosess og kjøpsatferd",
    "q": "Hva er kognitiv dissonans i kjøpssammenheng?",
    "opts": [
      "En uro eller tvil som oppstår hos kjøper etter gjennomført kjøp, der man tviler på at valget var det riktige",
      "En bevisst strategi der selger følger opp kunden etter salg for å bekrefte at kjøpet var riktig",
      "Systematisk motstand mot å endre kjøpsvaner til tross for kjennskap til bedre og billigere alternativer",
      "En psykologisk metode for å kartlegge kundens underbevisste preferanser og kjøpsmotiver gjennom undersøkelse"
    ],
    "correct": 0,
    "explain": "Kognitiv dissonans (kjøperangst) oppstår etter kjøp når forventningene ikke stemmer med erfaringen, eller når man angrer valget. Markedsførere kan redusere den ved å bekrefte at kjøpet var fornuftig – f.eks. gjennom oppfølgingsmail og garanti."
  },
  {
    "id": 37,
    "cat": "kjopsatferd",
    "catLabel": "Kjøpsprosess og kjøpsatferd",
    "q": "Hva kjennetegner et lavinvolveringskjøp?",
    "opts": [
      "Høyt engasjement med grundig produktsammenligning, mange informasjonskilder og lang beslutningsprosess",
      "Rutinepreget kjøp med lav risiko, begrenset informasjonsinnhenting og rask, vanebasert beslutning",
      "Kjøp med høy finansiell, sosial eller personlig risiko som krever grundig gjennomgang av alternativer",
      "Formell innkjøpsprosess med tilbudsinnhenting, grundig leverandørevaluering og skriftlig avtaleinngåelse"
    ],
    "correct": 1,
    "explain": "Lavinvolveringskjøp (f.eks. dagligvarer) kjennetegnes av at forbrukeren ikke bruker mye tid eller energi. Beslutningen tas raskt, gjerne basert på vane eller hylleplassering. Høyinvolvering (f.eks. bil, hus) krever derimot grundig søk og vurdering."
  },
  {
    "id": 38,
    "cat": "kjopsatferd",
    "catLabel": "Kjøpsprosess og kjøpsatferd",
    "q": "Hvilke fire faktorer påvirker forbrukerens kjøpsatferd ifølge Kotler?",
    "opts": [
      "Marked, produkt, pris og distribusjon – de fire P-ene i markedsmiksen som former tilbudet",
      "Politiske, økonomiske, sosiale og teknologiske faktorer – fra makroanalysen av omgivelsene",
      "Motivasjon, persepsjon, læring og holdninger – psykologiske prosesser internt hos forbrukeren",
      "Kulturelle, sosiale, personlige og psykologiske faktorer – fra Kotlers modell for kjøperatferd"
    ],
    "correct": 3,
    "explain": "Kotlers modell: kulturelle faktorer (kultur, subkultur, sosial klasse), sosiale faktorer (referansegrupper, familie, roller), personlige faktorer (alder, livsstil, økonomi) og psykologiske faktorer (motivasjon, persepsjon, holdninger, læring)."
  },
  {
    "id": 39,
    "cat": "kjopsatferd",
    "catLabel": "Kjøpsprosess og kjøpsatferd",
    "q": "Hva er kundereisen (customer journey)?",
    "opts": [
      "Logistikkreisen som produktet gjennomgår fra produksjon, via distribusjonsledd, til den fysiske sluttbrukeren",
      "En kartlegging av kundens bevegelse mellom nettbutikk, fysiske butikker og relevante sosiale medieplattformer",
      "Summen av alle kontaktpunkter og opplevelser kunden har med en bedrift, fra første bevissthet til lojalitet",
      "Bedriftens interne salgsprosess fra prospekt til avsluttet ordre, etter-salgsoppfølging og CRM-registrering"
    ],
    "correct": 2,
    "explain": "Kundereisen (customer journey) beskriver alle kontaktpunkter kunden har med en bedrift – fra bevissthet og vurdering via kjøp til bruk og lojalitet. Kartlegging av kundereisen avdekker forbedringsmuligheter og friksjonspunkter i hvert steg."
  },
  {
    "id": 40,
    "type": "sort",
    "cat": "kjopsatferd",
    "catLabel": "Kjøpsprosess og kjøpsatferd",
    "q": "Sorter hvert kjennetegn under riktig kjøpstype.",
    "bins": [
      {
        "id": "b2c",
        "label": "B2C (forbrukermarkedet)",
        "color": "#ef4444"
      },
      {
        "id": "b2b",
        "label": "B2B (organisasjonsmarkedet)",
        "color": "#3b82f6"
      }
    ],
    "items": [
      {
        "text": "Rask, ofte vanebasert kjøpsbeslutning",
        "bin": "b2c"
      },
      {
        "text": "Formell innkjøpsprosess med innkjøpskomité",
        "bin": "b2b"
      },
      {
        "text": "Kjøp styrt av personlige preferanser og følelser",
        "bin": "b2c"
      },
      {
        "text": "Stor ordrestørrelse og lang beslutningsprosess",
        "bin": "b2b"
      },
      {
        "text": "Mange kjøpere med lav lojalitet til leverandør",
        "bin": "b2c"
      },
      {
        "text": "Noen få store kjøpere med tette leverandørforhold",
        "bin": "b2b"
      }
    ],
    "explain": "B2C: mange kjøpere, følelsesbaserte beslutninger, lav involvering, lav lojalitet. B2B: få store kjøpere, rasjonell og formell prosess med innkjøpskomité, langsiktige leverandørforhold."
  },
  {
    "id": 41,
    "type": "order",
    "cat": "kjopsatferd",
    "catLabel": "Kjøpsprosess og kjøpsatferd",
    "q": "Sett kjøpsprosessens fem trinn i riktig rekkefølge. Første trinn øverst, siste trinn nederst.",
    "items": [
      "Etterkjøpsevaluering – vurderer om produktet møtte forventningene",
      "Kjøpsbeslutning – gjennomfører selve kjøpet",
      "Vurdering av alternativer – sammenligner produkter ut fra kjøpskriterier",
      "Informasjonssøk – henter inn informasjon om mulige produkter og leverandører",
      "Behovserkjennelse – innser et udekket behov eller ønske"
    ],
    "explain": "Kjøpsprosessens 5 trinn: 1) Behovserkjennelse → 2) Informasjonssøk → 3) Vurdering av alternativer → 4) Kjøpsbeslutning → 5) Etterkjøpsevaluering (Kotlers forbrukeratferdsmodell)."
  }
];
