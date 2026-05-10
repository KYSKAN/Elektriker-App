const QUIZ_META = {
  "id": "lom-marked-strategi-1",
  "title": "Markedsstrategi Del 1",
  "subtitle": "LØM Fagskole – Vekststrategier & Konkurranse",
  "description": "20 spørsmål – Vekststrategier (Ansoff), Konkurransestrategier.",
  "cats": {
    "vekst": {
      "label": "Vekststrategier (Ansoff)",
      "color": "#8b5cf6"
    },
    "konkurranse": {
      "label": "Konkurransestrategier",
      "color": "#3b82f6"
    }
  }
};

const QUESTIONS = [
  {
    "id": 1,
    "cat": "vekst",
    "catLabel": "Vekststrategier (Ansoff)",
    "q": "Hva beskriver produkt/markedsmatrisen (Ansoff-matrisen)?",
    "opts": [
      "Fire vekststrategier basert på kombinasjoner av eksisterende/nye produkter og eksisterende/nye markeder",
      "Fire lønnsomhetsnivåer basert på relativ markedsandel og markedsvekstrate, brukt i BCG-matrisen",
      "Fire segmenteringskriterier for å dele opp markedet: geografi, demografi, psykografi og atferd",
      "Fire faser i produktets livssyklus: introduksjon, vekst, modenhet og tilbakegang"
    ],
    "correct": 0,
    "explain": "Ansoff-matrisen kombinerer produktdimensjonen (eksisterende/nye) med markedsdimensjonen (eksisterende/nye) og gir fire vekststrategier: markedspenetrasjon, markedsutvikling, produktutvikling og diversifisering."
  },
  {
    "id": 2,
    "cat": "vekst",
    "catLabel": "Vekststrategier (Ansoff)",
    "q": "Hva er markedspenetrasjon som vekststrategi?",
    "opts": [
      "Å ekspandere til nye geografiske markeder med eksisterende produkter",
      "Å skape nye produktvarianter tilpasset eksisterende kunders endrede behov",
      "Å øke salget av eksisterende produkter i eksisterende markeder",
      "Å gå inn i nye bransjer med nyutviklede produkter og tjenester"
    ],
    "correct": 2,
    "explain": "Markedspenetrasjon betyr å øke markedsandelen for eksisterende produkter i eksisterende markeder – for eksempel gjennom lavere pris, mer markedsføring eller bedre distribusjon."
  },
  {
    "id": 3,
    "cat": "vekst",
    "catLabel": "Vekststrategier (Ansoff)",
    "q": "Hva er markedsutvikling som vekststrategi?",
    "opts": [
      "Å selge eksisterende produkter i nye markeder eller til nye kundesegmenter",
      "Å forbedre eksisterende produkter basert på tilbakemeldinger fra lojale kunder",
      "Å øke markedsandelen gjennom priskutt og intensivert salgsarbeid",
      "Å kombinere eksisterende produktlinjer i nye pakkeløsninger for samme kunder"
    ],
    "correct": 0,
    "explain": "Markedsutvikling innebærer å ta eksisterende produkter og selge dem i nye markeder (geografisk) eller til nye kundesegmenter man ikke har betjent tidligere."
  },
  {
    "id": 4,
    "cat": "vekst",
    "catLabel": "Vekststrategier (Ansoff)",
    "q": "Hva er produktutvikling som vekststrategi?",
    "opts": [
      "Å selge eksisterende produkter i nye geografiske regioner og kundesegmenter",
      "Å utvikle nye produkter for å selge til eksisterende kunder og markeder",
      "Å kjøpe opp konkurrenter på samme nivå i verdikjeden",
      "Å forbedre distribusjonskanalene for å nå flere kunder raskere"
    ],
    "correct": 1,
    "explain": "Produktutvikling innebærer å skape nye eller forbedrede produkter og selge dem til de eksisterende kundene og markedene bedriften allerede betjener."
  },
  {
    "id": 5,
    "cat": "vekst",
    "catLabel": "Vekststrategier (Ansoff)",
    "q": "Hva er diversifisering som vekststrategi, og hvorfor er det den mest risikable?",
    "opts": [
      "Å bredde produktsortimentet for å betjene eksisterende kunder bedre – noe som gir moderat risiko siden man kjenner kundene",
      "Å lansere nye produkter i nye markeder – høy risiko fordi man har lite erfaring på begge dimensjoner",
      "Å inngå strategiske allianser med leverandører for å sikre råvaretilgang",
      "Å redusere antall produktlinjer for å konsentrere ressurser om kjernesortimentet"
    ],
    "correct": 1,
    "explain": "Diversifisering er den mest risikable strategien – nye produkter i nye markeder – fordi bedriften mangler erfaring på begge dimensjoner. Det kan være relatert (innen kjent bransje) eller urelatert diversifisering."
  },
  {
    "id": 6,
    "cat": "vekst",
    "catLabel": "Vekststrategier (Ansoff)",
    "q": "Hva er vertikal integrasjon som vekststrategi?",
    "opts": [
      "Å fusjonere med konkurrenter på samme nivå i bransjen for å oppnå stordriftsfordeler og økt markedsandel",
      "Å ekspandere bakover (mot leverandør) eller fremover (mot kunde) i verdikjeden",
      "Å etablere datterselskaper i nye land for å nå internasjonale markeder",
      "Å diversifisere inn i bransjer uten tilknytning til kjernevirksomheten"
    ],
    "correct": 1,
    "explain": "Vertikal integrasjon betyr å ekspandere i verdikjeden: bakover (kjøpe leverandør) eller fremover (kjøpe distributør/forhandler). Det gir mer kontroll og reduserer avhengighet."
  },
  {
    "id": 7,
    "cat": "vekst",
    "catLabel": "Vekststrategier (Ansoff)",
    "q": "Hva er horisontal integrasjon?",
    "opts": [
      "Å bevege seg bakover i verdikjeden ved å overta leverandørfunksjoner",
      "Å kjøpe opp konkurrenter på samme nivå i verdikjeden for å øke markedsandelen",
      "Å inngå langsiktige samarbeidsavtaler med bedrifter i komplementære bransjer",
      "Å ekspandere geografisk ved å åpne salgskontor i nye regioner"
    ],
    "correct": 1,
    "explain": "Horisontal integrasjon innebærer å kjøpe opp eller fusjonere med konkurrenter på samme nivå i verdikjeden – dette øker markedsandelen og kan gi stordriftsfordeler."
  },
  {
    "id": 8,
    "cat": "konkurranse",
    "catLabel": "Konkurransestrategier",
    "q": "Hva er Porters tre grunnleggende konkurransestrategier?",
    "opts": [
      "Ekspansjon, markedskonsolidering og nedskalering",
      "Kostnadsleder, differensiering og fokusering",
      "Markedsutvikling, produktutvikling og diversifisering",
      "Prisleder, kvalitetsleder og innovasjonsleder"
    ],
    "correct": 1,
    "explain": "Porter identifiserte tre generiske strategier: kostnadslederskap (laveste pris), differensiering (unikt produkt som kunden betaler mer for) og fokusering (betjene et smalt segment svært godt)."
  },
  {
    "id": 9,
    "cat": "konkurranse",
    "catLabel": "Konkurransestrategier",
    "q": "Hva er kostnadslederskap som konkurransestrategi?",
    "opts": [
      "Å posisjonere seg som det dyreste og mest eksklusive alternativet i bransjen",
      "Å ha de laveste kostnadene i bransjen, noe som muliggjør lavere priser enn konkurrentene",
      "Å prioritere et smalt kundesegment med svært spesialiserte og skreddersydde produktvarianter",
      "Å investere tungt i merkevarebygging og emosjonell differensiering for å skille seg ut over tid"
    ],
    "correct": 1,
    "explain": "Kostnadslederskap betyr å ha de laveste produksjons- og distribusjonskostnadene i bransjen, slik at man kan selge til lavere pris enn konkurrentene og fortsatt ha god margin."
  },
  {
    "id": 10,
    "cat": "konkurranse",
    "catLabel": "Konkurransestrategier",
    "q": "Hva er differensiering som konkurransestrategi?",
    "opts": [
      "Å konsekvent underby alle konkurrenter på pris for å vinne markedsandeler i løpet av kort tid",
      "Å tilby et unikt produkt eller tjeneste som kunden er villig til å betale en premie for",
      "Å begrense tilbudet til ett smalt geografisk marked der konkurransen er moderat og oversiktlig",
      "Å ekspandere produktsortimentet for å dekke flest mulig kundebehov på tvers av segmenter"
    ],
    "correct": 1,
    "explain": "Differensiering innebærer å skape et produkt eller en tjeneste som oppleves som unikt av kundene – på en slik måte at de er villige til å betale en høyere pris for det."
  },
  {
    "id": 11,
    "cat": "konkurranse",
    "catLabel": "Konkurransestrategier",
    "q": "Hva er fokusering som Porters tredje konkurransestrategi?",
    "opts": [
      "Å betjene et smalt segment ekstremt godt – enten via lavest pris eller differensiering innen segmentet",
      "Å konsentrere markedsbudsjettet om digitale kanaler, sosiale medier og målrettet innholdsproduksjon",
      "Å prioritere eksisterende kunder fremfor å bruke ressurser på å skaffe nye kundegrupper",
      "Å samle hele produksjonen om ett produkt for å oppnå stordriftsfordeler og lavere enhetskostnader"
    ],
    "correct": 0,
    "explain": "Fokusering betyr å velge et smalt markedssegment og betjene det bedre enn noen andre – enten via kostnadsfokus (lavest pris til segmentet) eller differensieringsfokus (unikt tilbud til segmentet)."
  },
  {
    "id": 12,
    "cat": "konkurranse",
    "catLabel": "Konkurransestrategier",
    "q": "Hva er de fire markedsposisjonene ifølge Kotler?",
    "opts": [
      "Kostnadsleder, Differensierer, Fokuserer og Nisjespesialist",
      "Pioner, Tidlig-følger, Sen-følger og Etternøler i markedsutviklingen",
      "Markedsleder, Markedsutfordrer, Markedsfølger og Nisjespesialist",
      "Dominerende, Sterk, Middels og Svak aktør"
    ],
    "correct": 2,
    "explain": "Kotler beskriver fire konkurranseposisjoner: Markedsleder (størst markedsandel), Markedsutfordrer (angriper lederen), Markedsfølger (kopierer lederen) og Nisjespesialist (betjener smalt segment)."
  },
  {
    "id": 13,
    "cat": "konkurranse",
    "catLabel": "Konkurransestrategier",
    "q": "Hva kjennetegner en markedsutfordrer?",
    "opts": [
      "Den aktøren som over tid har opparbeidet seg størst markedsandel og setter bransjenormen",
      "En bedrift som rendyrker et smalt nisjesegment og unngår direkte konkurranse",
      "En bedrift som tilpasser markedslederens løsninger og drar fordel av etablert etterspørsel",
      "En bedrift som aktivt angriper og utfordrer markedslederen for å kapre lederposisjonen i markedet"
    ],
    "correct": 3,
    "explain": "Markedsutfordreren er nummer 2 eller 3 i markedet og angriper aktivt markedslederen – gjerne via lavere priser, mer innovasjon eller aggressiv markedsføring for å ta markedsandeler."
  },
  {
    "id": 14,
    "cat": "konkurranse",
    "catLabel": "Konkurransestrategier",
    "q": "Hva er typisk strategi for en markedsfølger?",
    "opts": [
      "Å kopiere eller tilpasse markedslederens produkter og dra nytte av markedet uten å ta store risikoer",
      "Å utfordre markedslederen med aggressiv prissetting og intensivert salgsarbeid i kjernesegmentene",
      "Å spesialisere seg på et svært smalt kundesegment og tilby eksklusiv service for å unngå konkurranse",
      "Å satse tungt på innovasjon og tydelig differensiering fra alle eksisterende markedsaktører"
    ],
    "correct": 0,
    "explain": "Markedsfølgeren velger ikke å utfordre lederen direkte, men kopierer eller tilpasser suksessrike produkter. Dette er mindre risikabelt og krever lavere FoU-investering."
  },
  {
    "id": 25,
    "cat": "konkurranse",
    "catLabel": "Konkurransestrategier",
    "q": "Hva er en nisjespesialist som markedsposisjon?",
    "opts": [
      "Den dominerende aktøren som setter priser og standarder for hele bransjen",
      "En bedrift som konkurrerer primært på pris og volum i et bredt massemarked med mange kunder",
      "En bedrift som kopierer markedslederens løsninger og tilbyr dem til en rimeligere prisklasse",
      "En bedrift som betjener et svært spesifikt og smalt segment bedre enn noen annen aktør"
    ],
    "correct": 3,
    "explain": "Nisjespesialisten fokuserer på et smalt og veldefinert segment – gjerne for smal for store aktører – og betjener dette segmentet langt bedre enn noen generalist kan. Høy lojalitet og ofte god margin."
  },
  {
    "id": 26,
    "cat": "vekst",
    "catLabel": "Vekststrategier (Ansoff)",
    "q": "Et norsk fiskeoppdrettsselskap begynner å selge laks i det kinesiske markedet. Hvilken Ansoff-strategi er dette?",
    "opts": [
      "Markedsutvikling",
      "Markedspenetrasjon",
      "Produktutvikling",
      "Diversifisering"
    ],
    "correct": 0,
    "explain": "Å selge et eksisterende produkt (laks) i et nytt marked (Kina) er markedsutvikling – man ekspanderer geografisk eller til nye kundesegmenter med eksisterende produkter."
  },
  {
    "id": 28,
    "cat": "konkurranse",
    "catLabel": "Konkurransestrategier",
    "q": "Hva er en \"strategisk felle\" man bør unngå ifølge Porter?",
    "opts": [
      "Å velge differensiering fremfor kostnadslederskap i et svært prissensitivt massemarked med lave marginer",
      "Å bruke for store ressurser på markedsanalyser og strategiprosesser over lang tid",
      "Å fokusere for snevert på ett smalt nisjesegment i et marked med stort vekstpotensial",
      "Å havne \"stuck in the middle\" – uten klar strategi, verken lavest pris eller tydelig differensiering"
    ],
    "correct": 3,
    "explain": "Porter advarer mot å bli \"stuck in the middle\" – å prøve å gjøre alt og dermed ikke lykkes med noen av strategiene. Bedrifter bør velge én tydelig konkurransestrategi og holde seg til den."
  },
  {
    "id": 30,
    "cat": "vekst",
    "catLabel": "Vekststrategier (Ansoff)",
    "q": "Hva er en integrasjonsstrategi, og hvilke to typer finnes?",
    "opts": [
      "En strategi for å samordne digitale og fysiske salgskanaler slik at kunden opplever en helhetlig kjøpsreise",
      "En strategi for å konsolidere internasjonale datterselskaper under ett felles konsernstyre og felles rapportering",
      "En strategi for å vokse ved å bevege seg i verdikjeden: vertikal (opp/ned i kjeden) og horisontal (konkurrenter)",
      "En strategi for å samle ulike produktlinjer i ett felles merkevareportfolio"
    ],
    "correct": 2,
    "explain": "Integrasjonsstrategier handler om vekst gjennom å bevege seg i verdikjeden: vertikal integrasjon (bakover mot leverandør eller fremover mot distribusjon/kunde) og horisontal integrasjon (kjøpe opp konkurrenter)."
  },
  {
    "id": 32,
    "type": "sort",
    "cat": "konkurranse",
    "catLabel": "Konkurransestrategier",
    "q": "Sorter hvert kjennetegn til riktig markedsposisjon etter Kotler.",
    "bins": [
      {
        "id": "leder",
        "label": "Markedsleder",
        "color": "#8b5cf6"
      },
      {
        "id": "utfordrer",
        "label": "Markedsutfordrer",
        "color": "#ef4444"
      },
      {
        "id": "følger",
        "label": "Markedsfølger",
        "color": "#3b82f6"
      },
      {
        "id": "nisje",
        "label": "Nisjespesialist",
        "color": "#10b981"
      }
    ],
    "items": [
      {
        "text": "Setter bransjestandarden og har størst markedsandel",
        "bin": "leder"
      },
      {
        "text": "Angriper nr. 1 aktivt for å overta lederposisjonen",
        "bin": "utfordrer"
      },
      {
        "text": "Kopierer og tilpasser lederens produkter til lavere pris",
        "bin": "følger"
      },
      {
        "text": "Betjener et svært smalt segment ingen andre prioriterer",
        "bin": "nisje"
      },
      {
        "text": "Er typisk nr. 2 eller nr. 3 og søker å ta markedsandeler",
        "bin": "utfordrer"
      },
      {
        "text": "Unngår direkte konfrontasjon og fokuserer på spesialkunder",
        "bin": "nisje"
      }
    ],
    "explain": "Kotlers fire posisjoner: Markedsleder (størst andel, setter normen), Markedsutfordrer (angriper lederen aktivt), Markedsfølger (imiterer lederen), Nisjespesialist (smal spesialnisje)."
  },
  {
    "id": 33,
    "cat": "konkurranse",
    "catLabel": "Konkurransestrategier",
    "q": "Hvilke to kjennetegn er riktige om markedsutfordreren?",
    "opts": [
      "Angriper aktivt markedslederen med pris, innovasjon eller reklame",
      "Er bedriften med størst markedsandel som setter normene i bransjen",
      "Befinner seg typisk som nr. 2 eller nr. 3 aktør i markedet sitt",
      "Kopierer og tilpasser lederens produkter til en lavere priskategori"
    ],
    "correct": [
      0,
      2
    ],
    "explain": "Markedsutfordreren er typisk nr. 2 eller nr. 3 i markedet og angriper aktivt markedslederen – gjerne via aggressiv prissetting, mer innovasjon eller intensivert markedsføring. Markedsfølgeren (ikke utfordreren) kopierer lederens produkter."
  }
];
