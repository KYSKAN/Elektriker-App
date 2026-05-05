const QUIZ_META = {
  id: 'lom-oks-investering',
  title: 'Investering og kapitalbinding',
  subtitle: 'Økonomistyring – Kap. 13 og 14',
  description: '31 spørsmål om investeringsanalyse (TBT, NV, IRR), gjensidig utelukkende prosjekter, kapitalbinding, ABC-analyse og DuPont-modellen.',
  cats: {
    investeringsmetoder: { label: 'Investeringsmetoder', color: '#8b5cf6' },
    gjensidig:           { label: 'Gjensidig utelukkende', color: '#3b82f6' },
    kapitalbinding:      { label: 'Kapitalbinding og logistikk', color: '#10b981' },
    abc_dupont:          { label: 'ABC-analyse og DuPont', color: '#f59e0b' },
  }
};

const QUESTIONS = [
  // Q1 – correct=1 (98 tegn). Gjør opt[0] lengre enn riktig (103 tegn).
  {
    id: 1,
    cat: 'investeringsmetoder',
    catLabel: 'Investeringsmetoder',
    q: 'Hva er en realinvestering?',
    opts: [
      'Investering i aksjer, obligasjoner og andre verdipapirer som handles og omsettes løpende i finansmarkedene',
      'Investering i fysiske driftsmidler som maskiner, bygg og utstyr som genererer fremtidig inntjening',
      'Innskudd i bank eller pengemarkedsfond med kjent rente',
      'Kjøp av patenter, varemerker og andre immaterielle rettigheter',
    ],
    correct: 1,
    explain: 'Realinvesteringer er investeringer i fysiske eiendeler: maskiner, bygg, transportmidler, IT-systemer. Disse er til bruk i driften og genererer fremtidig inntjening eller besparelse – i motsetning til finansinvesteringer (aksjer, obligasjoner).',
  },
  // Q2 – correct=1 (129 tegn). Gjør opt[3] lengre enn riktig (135 tegn).
  {
    id: 2,
    cat: 'investeringsmetoder',
    catLabel: 'Investeringsmetoder',
    q: 'Hva er avkastningskrav i investeringsanalyse?',
    opts: [
      'Den renten banken krever for å gi lån til prosjektet',
      'Den minimumavkastning en investering må gi for å være akseptabel – inkluderer risikofri rente, risikotillegg og inflasjonstillegg',
      'Gjennomsnittsavkastningen bedriften har oppnådd de siste tre år',
      'Det utbyttet styret har vedtatt å utbetale til aksjonærene dette regnskapsåret, fastsatt basert på årets overskudd etter skatt og skjønn',
    ],
    correct: 1,
    explain: 'Avkastningskrav (= kalkulasjonsrente = diskonteringsrente) er minimumavkastningen en investering må gi. Det beregnes som: risikofri rente + risikotillegg + inflasjonstillegg. Investeringer med lavere avkastning enn kravet bør avvises.',
  },
  // Q3 – correct=1 (75 tegn). Gjør opt[2] lengre enn riktig (82 tegn).
  {
    id: 3,
    cat: 'investeringsmetoder',
    catLabel: 'Investeringsmetoder',
    q: 'Hva er kontantstrøm i investeringsanalyse?',
    opts: [
      'Driftsresultatet slik det fremkommer i resultatregnskapet',
      'Innbetalinger minus utbetalinger – de faktiske kontante inn- og utstrømmene',
      'Salgsinntekter fratrukket alle kostnader inkludert avskrivninger og renteutgifter',
      'Nettoresultatet etter skatt og rentekostnader',
    ],
    correct: 1,
    explain: 'Kontantstrøm = Innbetalinger − Utbetalinger. Viktig: avskrivninger er IKKE utbetalinger og holdes utenfor. Gjeldsrenter holdes utenfor (avkastningskravet dekker dette). Sunk costs (allerede pådratte kostnader) holdes utenfor.',
  },
  // Q4 – correct=3 (58 tegn). Gjør opt[0] lengre (68 tegn).
  {
    id: 4,
    cat: 'investeringsmetoder',
    catLabel: 'Investeringsmetoder',
    q: 'Hva er pengenes tidsverdi?',
    opts: [
      'At penger er verdt mer i dag enn samme beløp i fremtiden, fordi de kan investeres',
      'At priser stiger over tid på grunn av inflasjon',
      'At penger i banken tjener renter og vokser over tid',
      'Alle over er riktige – de er ulike sider av samme prinsipp',
    ],
    correct: 3,
    explain: 'Pengenes tidsverdi er det grunnleggende prinsippet om at kr 1 i dag er mer verdt enn kr 1 i fremtiden – fordi penger i dag kan investeres og gi avkastning, og fordi fremtidig beløp er mer usikkert og inflasjon reduserer kjøpekraften.',
  },
  // Q5 – correct=1 (132 tegn). Gjør opt[3] lengre enn riktig (138 tegn).
  {
    id: 5,
    cat: 'investeringsmetoder',
    catLabel: 'Investeringsmetoder',
    q: 'Hva er tilbakebetalingsmetoden (TBT)?',
    opts: [
      'En metode som beregner avkastningen uttrykt i prosent av investert beløp',
      'En metode som beregner hvor lang tid det tar å tjene inn investeringsbeløpet: TBT = Investeringsutgift / Årlig innbetalingsoverskudd',
      'En metode som omregner fremtidige kontantstrømmer til dagens pengeverdi',
      'En metode som identifiserer nøyaktig den diskonteringsrenten som gjør nåverdien av prosjektets samlede fremtidige kontantstrøm lik null',
    ],
    correct: 1,
    explain: 'TBT = Investeringsutgift / Årlig innbetalingsoverskudd (ved jevn strøm). Enkel å beregne. Beslutningsregel: gjennomfør hvis TBT < levetiden. Fordeler: enkel, likviditetsfokus. Ulemper: ignorerer pengenes tidsverdi og kontantstrøm etter TBT-perioden.',
  },
  // Q6 – correct=1 (80 tegn). Gjør opt[0] lengre enn riktig (87 tegn).
  {
    id: 6,
    cat: 'investeringsmetoder',
    catLabel: 'Investeringsmetoder',
    q: 'Hva er en svakhet ved tilbakebetalingsmetoden?',
    opts: [
      'Den krever avansert kalkylekompetanse og er vanskelig å bruke riktig i praksis uten spesialkunnskap',
      'Den ignorerer pengenes tidsverdi og hva som skjer etter tilbakebetalingsperioden',
      'Den er ikke egnet for prosjekter med engangsutbetaling ved oppstart',
      'Den forutsetter at kalkulasjonsrenten er kjent på forhånd',
    ],
    correct: 1,
    explain: 'TBT-metodens to store svakheter: (1) den ignorerer pengenes tidsverdi (kr i år 1 og år 5 behandles likt), og (2) den ser ikke på hva som skjer etter tilbakebetalingsperioden – en lønnsom investering kan bli avvist.',
  },
  // Q7 – correct=0 (90 tegn), opt[1]=96. Already good – correct is NOT longest. Leave as is.
  {
    id: 7,
    cat: 'investeringsmetoder',
    catLabel: 'Investeringsmetoder',
    q: 'Hva er nåverdimetoden, og hva er beslutningsregelen?',
    opts: [
      'En metode som diskonterer fremtidige kontantstrømmer til nåverdier; gjennomfør hvis NV > 0',
      'En metode som beregner gjennomsnittlig årlig avkastning; gjennomfør hvis snitt > avkastningskrav',
      'En metode som beregner tilbakebetalingstiden; gjennomfør hvis TBT < levetid',
      'En metode som rangerer prosjekter etter internrente; velg det med høyest IR',
    ],
    correct: 0,
    explain: 'NV-metoden: NV = −I₀ + Σ Cn/(1+k)^n. Fremtidige kontantstrømmer diskonteres til dagens verdi med avkastningskravet k. Beslutningsregel: positiv NV → lønnsomt; ved valg mellom prosjekter → velg høyest positiv NV.',
  },
  // Q8 – correct=1 (95 tegn). Gjør opt[2] lengre enn riktig (102 tegn).
  {
    id: 8,
    cat: 'investeringsmetoder',
    catLabel: 'Investeringsmetoder',
    q: 'Hva er internrentemetoden (IRR)?',
    opts: [
      'En metode som beregner den interne lånekostnaden i prosjektet',
      'Den avkastningsraten som gjør nåverdien av prosjektet = 0; gjennomfør hvis IR > avkastningskrav',
      'En metode som fordeler samtlige rentekostnader og finansieringsutgifter jevnt over hele prosjektets levetid',
      'En metode som beregner egenkapitalavkastningen når lånefinansiering benyttes',
    ],
    correct: 1,
    explain: 'Internrente (IR) er det avkastningskravet som nettopp gjør NV = 0. Beslutningsregel for uavhengige prosjekter: gjennomfør alle prosjekter med IR > avkastningskrav. Høyere IR = bedre avkastning.',
  },
  // Q9 – correct=1 (118 tegn). Gjør opt[0] lengre enn riktig (126 tegn).
  {
    id: 9,
    cat: 'investeringsmetoder',
    catLabel: 'Investeringsmetoder',
    q: 'Hva er en nåverdiprofil?',
    opts: [
      'En strukturert oversikt over investorens risikotoleranse, tidshorisont og avkastningsforventninger ved ulike markedsscenarioer',
      'En grafisk fremstilling av nåverdien som funksjon av avkastningskravet – viser ved hvilken rente NV = 0 (internrenten)',
      'En liste over alle prosjekter med positiv nåverdi rangert etter størrelse',
      'En tabell som viser kontantstrømmene for hvert år i prosjektets levetid',
    ],
    correct: 1,
    explain: 'Nåverdiprofilen viser NV på y-aksen mot avkastningskravet på x-aksen. Der kurven krysser x-aksen (NV = 0) er internrenten. Profilen viser tydelig sammenhengen mellom avkastningskrav og lønnsomhet.',
  },
  // Q10 – correct=0 (128 tegn). Gjør opt[1] lengre enn riktig (136 tegn).
  {
    id: 10,
    cat: 'gjensidig',
    catLabel: 'Gjensidig utelukkende',
    q: 'Hva er gjensidig utelukkende prosjekter?',
    opts: [
      'Prosjekter der valg av ett alternativ utelukker de andre – f.eks. tre tilbud på nytt produksjonsutstyr der man kun kan velge ett',
      'Prosjekter med ulik levetid og investeringsstørrelse som ikke kan sammenlignes direkte uten å justere for disse forskjellene ved annuitetsmethode',
      'Prosjekter som ikke kan gjennomføres i det samme regnskapsåret',
      'Prosjekter som krever godkjenning fra ulike avdelinger i bedriften',
    ],
    correct: 0,
    explain: 'Gjensidig utelukkende prosjekter er alternativer der man BARE kan velge ett – de utelukker hverandre. Eksempel: bytte produksjonsutstyr der man mottar 3 tilbud men kun kan kjøpe ett.',
  },
  // Q11 – correct=2 (174 tegn). Gjør opt[3] lengre enn riktig (182 tegn).
  {
    id: 11,
    cat: 'gjensidig',
    catLabel: 'Gjensidig utelukkende',
    q: 'Hvorfor er internrentemetoden (IRR) UEGNET ved gjensidig utelukkende prosjekter?',
    opts: [
      'IRR kan bare brukes på prosjekter med jevn kontantstrøm hvert år',
      'IRR gir alltid samme rangering som nåverdimetoden, og er dermed overflødig',
      'IRR måler prosentavkastning uten å ta hensyn til prosjektets størrelse – et lite prosjekt med høy % kan gi lavere faktisk fortjeneste (kr) enn et større prosjekt med lavere %',
      'IRR forutsetter at avkastningskravet er kjent med full sikkerhet og er konstant gjennom hele prosjektperioden, noe som sjelden er tilfellet i virkeligheten og gir feil rangering',
    ],
    correct: 2,
    explain: '"Det er pengene vi lever av, ikke prosentene." IRR viser prosentavkastning uten å ta hensyn til størrelse. Et prosjekt med IR = 100% og NV = 1 kr er dårligere enn ett med IR = 50% og NV = 50 kr. NV-metoden velger riktig.',
  },
  // Q12 – correct=3 (46 tegn), opt[1]=66. Already good – correct is NOT longest. Leave as is.
  {
    id: 12,
    cat: 'gjensidig',
    catLabel: 'Gjensidig utelukkende',
    q: 'Hva er beslutningsregelen for gjensidig utelukkende prosjekter med nåverdimetoden?',
    opts: [
      'Gjennomfør alle prosjekter der nåverdien er positiv',
      'Velg prosjektet med kortest tilbakebetalingstid blant de lønnsomme',
      'Velg prosjektet med høyest internrente',
      'Velg det prosjektet med høyest positiv nåverdi',
    ],
    correct: 3,
    explain: 'Ved gjensidig utelukkende prosjekter: bruk nåverdimetoden og velg prosjektet med HØYEST POSITIV nåverdi. Dette er fordi NV viser den faktiske verdiskapingen i kroner.',
  },
  // Q13 – correct=0 (85 tegn). Gjør opt[3] lengre enn riktig (93 tegn).
  {
    id: 13,
    cat: 'gjensidig',
    catLabel: 'Gjensidig utelukkende',
    q: 'Hva er beslutningsregelen for UAVHENGIGE prosjekter med internrentemetoden?',
    opts: [
      'Gjennomfør ALLE prosjekter med IR > avkastningskravet, forutsatt tilgjengelig kapital',
      'Velg kun det prosjektet som har høyest IR blant alle kandidatene',
      'Avvis alle prosjekter med IR under 15 %, uansett avkastningskrav',
      'Bruk alltid nåverdimetoden i stedet – IRR er generelt uegnet og kan gi feil rangering ved ulik størrelse',
    ],
    correct: 0,
    explain: 'For uavhengige prosjekter (man kan gjennomføre flere) er IRR nyttig: gjennomfør alle prosjekter der IR > avkastningskrav. Hvert prosjekt vurderes for seg, og alle lønnsomme gjennomføres hvis kapital tillater det.',
  },
  // Q14 – correct=2 (121 tegn). Gjør opt[0] lengre enn riktig (130 tegn).
  {
    id: 14,
    cat: 'gjensidig',
    catLabel: 'Gjensidig utelukkende',
    q: 'Hva er følsomhetsanalyse i investeringsanalyse?',
    opts: [
      'En systematisk kartlegging av de ansattes holdninger og motstand mot planlagte investeringer og endringstiltak i organisasjonen',
      'En vurdering av om prosjektet tåler konjunktursvingninger over tid',
      'Man endrer én og én forutsetning i kalkylen for å se konsekvensene for nåverdien – vurderer usikkerhet i kontantstrømmene',
      'En analyse av kundenes betalingsvilje ved ulike prisnivåer',
    ],
    correct: 2,
    explain: 'Følsomhetsanalyse: man endrer én og én forutsetning (salgspris, volum, investeringsbeløp, avkastningskrav) og beregner ny NV. Viser hvilke forutsetninger prosjektet er mest følsomt for og hvor mye som kan gå galt før prosjektet blir ulønnsomt.',
  },
  // Q15 – correct=3 (133 tegn). Gjør opt[1] lengre enn riktig (142 tegn).
  {
    id: 15,
    cat: 'gjensidig',
    catLabel: 'Gjensidig utelukkende',
    q: 'Hva er en sunk cost, og hvorfor holdes den utenfor investeringsanalysen?',
    opts: [
      'En kalkulatorisk kostnad som ennå ikke har generert noen betaling',
      'En fremtidig kostnad der beløpet er svært usikkert å anslå presist og derfor vanskelig å modellere korrekt inn i kontantstrøm- og diskonteringsanalysen',
      'En skjult kostnad som ikke fremkommer direkte i kalkylen',
      'En allerede pådratt kostnad som ikke kan gjenvinnes – irrelevant for fremtidige beslutninger fordi den påløper uansett hva man velger',
    ],
    correct: 3,
    explain: 'Sunk cost er en kostnad som allerede er pådratt og ikke kan gjenvinnes. Den er irrelevant for investeringsbeslutningen fordi den påløper uansett hva man bestemmer seg for. Å inkludere sunk costs leder til dårlige beslutninger.',
  },
  // Q16 – correct=0 (127 tegn). Gjør opt[2] lengre enn riktig (136 tegn).
  {
    id: 16,
    cat: 'kapitalbinding',
    catLabel: 'Kapitalbinding og logistikk',
    q: 'Hva er kapitalbinding i omløpsmidler?',
    opts: [
      'Kapital investert i kundefordringer, varelager og råvarer – kapital som ikke gir direkte avkastning og representerer en kostnad',
      'Kapital plassert i aksjer og andre finansielle instrumenter',
      'Kapital bundet i anleggsmidler som bygg, maskiner og transportmidler med lang nedskrivningstid, lav likviditet og høye avskrivninger',
      'Egenkapitalen aksjonærene har skutt inn i selskapet',
    ],
    correct: 0,
    explain: 'Kapitalbinding i omløpsmidler er kapital "fanget" i fordringer, varelager og råvarer. Denne kapitalen er ikke tilgjengelig for annen bruk og representerer en alternativkostnad – den kunne alternativt gitt avkastning andre steder.',
  },
  // Q17 – correct=2 (94 tegn). Gjør opt[1] lengre enn riktig (101 tegn).
  {
    id: 17,
    cat: 'kapitalbinding',
    catLabel: 'Kapitalbinding og logistikk',
    q: 'Hva er konsekvensen av økt kapitalbinding for lønnsomheten (TKR)?',
    opts: [
      'TKR stiger fordi høyere kapital signaliserer vekst og økt aktivitet',
      'TKR forblir uendret siden kapitalbinding og lønnsomhet er i praksis uavhengige størrelser over tid',
      'Økt kapitalbinding øker totalkapitalen og dermed reduseres TKR = Resultat / Totalkapital × 100',
      'TKR bedres fordi større varelager gir høyere salgsinntekter og bedre marginer',
    ],
    correct: 2,
    explain: 'TKR = Resultat / Totalkapital × 100. Økt kapitalbinding (større varelager, lengre kredittid til kunder) øker totalkapitalen uten nødvendigvis å øke resultatet – dermed faller TKR. Effektiv kapitalbinding gir bedre TKR.',
  },
  // Q18 – correct=3 (151 tegn). La riktig være lengst, men juster feil noe.
  {
    id: 18,
    cat: 'kapitalbinding',
    catLabel: 'Kapitalbinding og logistikk',
    q: 'Hva er faktoring som virkemiddel for å redusere kapitalbinding i kundefordringer?',
    opts: [
      'Å tilby utvalgte kunder betraktelig lengre betalingsfrist og gunstige kredittbetingelser for å styrke salgsvolum, lojalitet, omsetning og total markedsandel',
      'Å kreve forhåndsbetaling fra samtlige kunder uavhengig av kundeforhold og betalingshistorikk',
      'Å avvise kunder med dårlig betalingshistorikk gjennom streng kredittvurdering',
      'Å selge kundefordringer til et factoringselskap mot umiddelbar betaling (minus avgift) – reduserer kapital bundet i fordringer og gir kredittforsikring',
    ],
    correct: 3,
    explain: 'Faktoring: bedriften selger kundefordringene til et factoringselskap som betaler umiddelbart (minus en avgift). Fordeler: reduserer kapitalbinding, gir kredittforsikring (beskyttelse mot tap) og frigjør ressurser fra kredittadministrasjon.',
  },
  // Q19 – correct=0 (137 tegn). Gjør opt[2] lengre enn riktig (145 tegn).
  {
    id: 19,
    cat: 'kapitalbinding',
    catLabel: 'Kapitalbinding og logistikk',
    q: 'Hva er defensiv vs. offensiv kredittstyring?',
    opts: [
      'Defensiv = unngå tap gjennom strenge purrerutiner og kredittvurdering; offensiv = bruke kredittpolitikk proaktivt som konkurransefortrinn',
      'Defensiv = sette korte betalingsfrister; offensiv = sette lange betalingsfrister',
      'Defensiv = håndtere kredittstyring internt med egne ressurser; offensiv = outsource hele kredittfunksjonen til et eksternt factoringselskap',
      'Defensiv = streng fakturakontroll; offensiv = aktiv inkassobruk ved forsinkelse',
    ],
    correct: 0,
    explain: 'Defensiv kredittstyring fokuserer på å unngå tap – grundig kredittvurdering, purrerutiner og innkreving. Offensiv kredittstyring bruker kredittpolitikken strategisk – bedre kredittbetingelser som konkurransefortrinn for å vinne kunder.',
  },
  // Q20 – correct=2 (126 tegn). Gjør opt[0] lengre enn riktig (134 tegn).
  {
    id: 20,
    cat: 'kapitalbinding',
    catLabel: 'Kapitalbinding og logistikk',
    q: 'Hva er lagringskostnader, og hva inngår?',
    opts: [
      'Kun fraktkostnader for inn- og utgående varer fra lageret, inkludert toll, spedisjon og transportforsikring for alle forsendelser',
      'Kun leiekostnad for lagerlokalet per kvadratmeter',
      'Svinn og ukurans, avskrivning lagerbygg, renter på bundet kapital, forsikring og servicekostnader – oppgis som % av lagerverdi',
      'Kun lønnskostnader til lagerarbeidere og trucksjåfører',
    ],
    correct: 2,
    explain: 'Lagringskostnader = svinn/ukurans + avskrivning lagerbygg + renter på bundet kapital + forsikring + servicekostnader. Disse oppgis typisk som en prosentandel av gjennomsnittlig lagerverdi per år.',
  },
  // Q21 – correct=3 (125 tegn). La riktig være lengst.
  {
    id: 21,
    cat: 'kapitalbinding',
    catLabel: 'Kapitalbinding og logistikk',
    q: 'Hva er leveringsservicenivå?',
    opts: [
      'Gjennomsnittlig antall kalenderdager fra registrert ordremottak til faktisk godkjent levering bekreftet hos sluttkundens adresse',
      'Antall leveranser bedriften gjennomfører til en bestemt kunde per år',
      'Kundetilfredshetsscore basert på spørreundersøkelse etter levering',
      'Andelen av den totale etterspørselen som kan leveres direkte fra lager – høyere servicenivå krever mer kapital bundet i lager',
    ],
    correct: 3,
    explain: 'Leveringsservicenivå = andel av etterspørselen som leveres direkte fra lager uten forsinkelse. Jo høyere servicenivå man ønsker, jo mer lager må holdes – og lagerkostnadene stiger eksponentielt for å nå meget høye servicenivåer.',
  },
  // Q22 – correct=0 (107 tegn). Gjør opt[3] lengre enn riktig (115 tegn).
  {
    id: 22,
    cat: 'kapitalbinding',
    catLabel: 'Kapitalbinding og logistikk',
    q: 'Hva er optimalt bestillingsvolum/-tidspunkt?',
    opts: [
      'Det punkt der totale lagerkostnader er lavest – der lagringskostnader og bestillingskostnader er like store',
      'Det bestillingstidspunktet som gir lavest lagringskostnad isolert sett',
      'Det volumet der bedriften aldri risikerer å gå tom for varer',
      'Det volumet som utløser høyest mulig kvantumsrabatt fra leverandøren og dermed lavest innkjøpspris per enhet',
    ],
    correct: 0,
    explain: 'Totale lagerkostnader = lagringskostnader + bestillingskostnader. Lagringskostnader stiger med større lager; bestillingskostnader faller med færre og større bestillinger. Optimalt volum er der summen er lavest – der de to kurvene krysses.',
  },
  // Q23 – correct=2 (119 tegn). Gjør opt[1] lengre enn riktig (128 tegn).
  {
    id: 23,
    cat: 'abc_dupont',
    catLabel: 'ABC-analyse og DuPont',
    q: 'Hva er ABC-analyse (Paretoprinsippet)?',
    opts: [
      'En modell for å vurdere ansattes prestasjonsnivå og lønnsfastsettelse',
      'En kostnadsklassifisering der A = direkte variable kostnader, B = indirekte faste kostnader og C = kalkulatoriske og avledede kostnader',
      'En metode basert på 20/80-regelen: 20% av varene/kundene/produktene står for 80% av lagerverdi/omsetning/dekningsbidrag',
      'En budsjetteringsmetode der de tre største kostnadspostene analyseres nøye',
    ],
    correct: 2,
    explain: 'ABC-analyse bygger på Paretoprinsippet (80/20): typisk vil 20% av varene utgjøre 80% av lagerverdien (A-varer), 30% utgjøre 15% (B-varer), og 50% utgjøre 5% (C-varer). A-varer krever tett oppfølging.',
  },
  // Q24 – correct=3 (139 tegn). La riktig være lengst.
  {
    id: 24,
    cat: 'abc_dupont',
    catLabel: 'ABC-analyse og DuPont',
    q: 'Hva er praktisk bruk av ABC-analyse i lagerstyring?',
    opts: [
      'Alle varer gis like mye tid, oppmerksomhet og ressurser for å sikre rettferdig og konsistent behandling av samtlige produkter i hele sortimentet',
      'ABC-analyse brukes utelukkende til å rangere leverandører etter pålitelighet',
      'C-varer prioriteres høyest fordi de utgjør flest unike varenummer i sortimentet',
      'A-varer (høy verdi): tett oppfølging og hyppige tellinger; B-varer: middels; C-varer (lav verdi): enklere rutiner og større sikkerhetslagre',
    ],
    correct: 3,
    explain: 'ABC-analyse gir ulike styringsprinsipper: A-varer (høy verdi, 20% av varenummer, 80% av verdi): hyppige tellinger, tett styring. C-varer (lav verdi, 50% av varenummer, 5% av verdi): enklere rutiner, kan ha større sikkerhetslagre.',
  },
  // Q25 – correct=0 (103 tegn). Gjør opt[3] lengre enn riktig (113 tegn).
  {
    id: 25,
    cat: 'abc_dupont',
    catLabel: 'ABC-analyse og DuPont',
    q: 'Hva er DuPont-modellens formel og hva viser den?',
    opts: [
      'TKR = Kapitalens omløpshastighet × Resultatgrad – viser de to veiene til bedre totalkapitalrentabilitet',
      'TKR = Egenkapitalandel × Resultatgrad × Gjeldsgrad',
      'TKR = Bruttofortjeneste / Driftsinntekter × Totalkapital',
      'TKR = Driftsresultat / Totalgjeld × Soliditetsprosent – måler gjeldsbetjeningsevne og langsiktig finansiell stabilitet',
    ],
    correct: 0,
    explain: 'DuPont: TKR = Kapitalens omløpshastighet (Driftsinntekter/Totalkapital) × Resultatgrad (Resultat/Driftsinntekter × 100). Viser at man kan forbedre TKR enten via effektivitet (mer salg per krone kapital) eller marginer (bedre resultatgrad).',
  },
  // Q26 – correct=2 (85 tegn). Gjør opt[3] lengre enn riktig (94 tegn).
  {
    id: 26,
    cat: 'abc_dupont',
    catLabel: 'ABC-analyse og DuPont',
    q: 'Hva er kapitalens omløpshastighet som del av DuPont-modellen?',
    opts: [
      'Gjennomsnittlig omløpstid for varelageret målt i antall dager',
      'Totalkapital / Egenkapital – også kalt gearingfaktoren',
      'Driftsinntekter / Gjennomsnittlig totalkapital – viser effektiviteten i kapitalbruken',
      'Antall ganger den investerte egenkapitalen og fremmedkapitalen er reinvestert i løpet av ett regnskapsår',
    ],
    correct: 2,
    explain: 'Kapitalens omløpshastighet = Driftsinntekter / Gjennomsnittlig totalkapital. Høy omløpshastighet betyr at bedriften genererer mye omsetning per krone investert kapital – effektiv kapitalbruk. Lav omløpshastighet indikerer for mye kapital bundet.',
  },
  // Q27 – correct=3 (120 tegn). Gjør opt[1] lengre enn riktig (129 tegn).
  {
    id: 27,
    cat: 'investeringsmetoder',
    catLabel: 'Investeringsmetoder',
    q: 'En bedrift vurderer investering A (TBT = 2 år) og investering B (TBT = 3 år), begge med 5 års levetid. Investering B har mye større kontantstrøm etter år 3. Hva bør velges?',
    opts: [
      'Investering A – kortere TBT indikerer alltid bedre lønnsomhet',
      'Begge er like gode – TBT-metoden er fullt ut tilstrekkelig som beslutningsgrunnlag når prosjektenes levetid og størrelse er identiske',
      'Investering B – større kontantstrøm etter år 3 er alltid avgjørende',
      'Det avhenger av nåverdien – TBT-metoden kan være misvisende fordi den ignorerer kontantstrøm etter tilbakebetalingstiden',
    ],
    correct: 3,
    explain: 'TBT-metoden er misvisende her: investering A har kortere TBT, men B kan ha mye høyere nåverdi fordi den genererer store kontantstrømmer etter år 3 som TBT-metoden fullstendig ignorerer. Bruk nåverdimetoden for riktig beslutning.',
  },
  // Q28 – correct=2 (145 tegn). La riktig være lengst.
  {
    id: 28,
    cat: 'kapitalbinding',
    catLabel: 'Kapitalbinding og logistikk',
    q: 'Hva er JIT (Just-In-Time) og LEAN i logistikksammenheng?',
    opts: [
      'Metoder for å automatisere produksjonslinjer med robotteknologi',
      'IT-systemer for sanntidsovervåking av lagerbeholdning, bestillinger og leverandørstatus',
      'JIT: levere materialer akkurat når de trengs – minimerer lager; LEAN: eliminere all sløsing i prosessene inkl. overproduksjon og unødvendig lager',
      'Strategier for å maksimere leveringsservicenivået, redusere ledetid og styrke langsiktig kundelojalitet og lønnsomhet hos nøkkelkunder og strategiske A-kunder',
    ],
    correct: 2,
    explain: 'JIT (Just-In-Time): varer ankommer produksjonen akkurat når de trengs – minimerer varelagerbinding. LEAN eliminerer alle former for muda (sløsing) i prosessen, inkludert overproduksjon, unødvendig lager, venting og unødvendige bevegelser.',
  },
  // Q29 – correct=3 (104 tegn). Gjør opt[1] lengre enn riktig (114 tegn).
  {
    id: 29,
    cat: 'abc_dupont',
    catLabel: 'ABC-analyse og DuPont',
    q: 'Hvilke to tiltak kan bedre DuPont-modellens TKR?',
    opts: [
      'Styrke egenkapitalen og nedbetale langsiktig gjeld',
      'Ansette flere selgere, øke budsjettene for markedsføring og investere mer i kundebearbeiding og CRM-systemer',
      'Utvide varelageret og øke kassekredittrammen',
      'Øke kapitalens omløpshastighet (mer salg per krone kapital) og/eller øke resultatgraden (bedre marginer)',
    ],
    correct: 3,
    explain: 'DuPont-modellen viser klart to veier til bedre TKR: (1) øke kapitalens omløpshastighet – bruk mindre kapital for å generere samme omsetning (reduser varelager, fordringer), eller (2) øke resultatgraden – bedre marginer via høyere priser eller lavere kostnader.',
  },
  {
    id: 30,
    type: 'sort',
    cat: 'investeringsmetoder',
    catLabel: 'Investeringsmetoder',
    q: 'Sorter hvert utsagn under riktig investeringsmetode.',
    bins: [
      { id: 'tbt', label: 'Tilbakebetalingsmetoden (TBT)', color: '#10b981' },
      { id: 'nv',  label: 'Nåverdimetoden (NV)',            color: '#3b82f6' },
      { id: 'irr', label: 'Internrentemetoden (IRR)',        color: '#8b5cf6' },
    ],
    items: [
      { text: 'Ignorerer kontantstrøm etter tilbakebetalingstiden',        bin: 'tbt' },
      { text: 'Tar hensyn til pengenes tidsverdi ved diskontering',        bin: 'nv' },
      { text: 'Gir avkastning uttrykt i prosent, ikke i kroner',           bin: 'irr' },
      { text: 'Enklest å beregne – krever ikke kjennskap til avkastningskrav', bin: 'tbt' },
      { text: 'Beslutningsregel: gjennomfør hvis resultatet er positivt',  bin: 'nv' },
      { text: 'Uegnet som eneste metode ved gjensidig utelukkende prosjekter', bin: 'irr' },
    ],
    explain: 'TBT: enkelt men ignorerer tidsverdi og kontantstrøm etter perioden. NV: diskonterer og gir verdi i kr – den anbefalte metoden. IRR: gir % avkastning, men er uegnet alene ved gjensidig utelukkende prosjekter fordi størrelse ikke vektes.',
  },
  {
    id: 31,
    cat: 'investeringsmetoder',
    catLabel: 'Investeringsmetoder',
    q: 'Hva er to kjente svakheter ved tilbakebetalingsmetoden (TBT)?',
    opts: [
      'Den ignorerer pengenes tidsverdi – tidlige og sene kontantstrømmer vektes likt',
      'Den er for komplisert å beregne for de fleste bedrifter og krever finansekspertise',
      'Den tar ikke hensyn til kontantstrøm som oppstår etter at prosjektet er nedbetalt',
      'Den krever nøyaktig fastsettelse av avkastningskravet for å gi meningsfullt resultat',
    ],
    correct: [0, 2],
    explain: 'TBTs to store svakheter: (1) den ignorerer pengenes tidsverdi – kr i år 1 og år 5 behandles likt. (2) Den ser bort fra all kontantstrøm etter tilbakebetalingstiden – lønnsom langsiktig investering kan feilaktig bli avvist.',
  },
];
