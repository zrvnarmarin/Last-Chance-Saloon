import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-3xl">STARTERS</h1>
      <h2 className="bg-black text-white w-full text-center uppercase py-4 text-4xl">
        Upoznavanje
      </h2>
      {characterIntroductions.map((ci) => (
        <div
          key={ci.id}
          className="w-full flex gap-8 items-center justify-center"
        >
          {/* Character colored column with dynamic background color */}
          <div className="h-24 w-6" style={{ backgroundColor: ci.color }}></div>
          {/* Character name and character introduction text */}
          <div className="flex flex-col">
            <p>{ci.characterName}</p>
            <p>{ci.introductionText}</p>
          </div>
        </div>
      ))}
      <br /> <br />
      <h2 className="bg-black text-white w-full text-center uppercase py-4 text-4xl">
        Tekst likova
      </h2>
      <br />
      <br />

      <div className="flex flex-col gap-6">
        {firstChunkOfDialogs.map((d) => (
          <div className="flex flex-col">
            <p className="uppercase text-2xl">{d.characterName}</p>
            <p className="text-lg">{d.dialogText}</p>
          </div>
        ))}
      </div>

      <div className="w-full bg-black flex flex-col gap-6">
        {firstHostText.map(hTxt =>
          <p>&#x2022;{hTxt}</p>
        )}
      </div>

      <div className="flex flex-col gap-6">
        {secondChunkOfDialogs.map((d) => (
          <div className="flex flex-col">
            <p className="uppercase text-2xl">{d.characterName}</p>
            <p className="text-lg">{d.dialogText}</p>
          </div>
        ))}
      </div>

      <div className="w-full bg-black flex flex-col gap-6">
        {secondHostText.map(hTxt =>
          <p>&#x2022;{hTxt}</p>
        )}
      </div>

      <div className="flex flex-col gap-6">
        {thirdChunkOfDialogs.map((d) => (
          <div className="flex flex-col">
            <p className="uppercase text-2xl">{d.characterName}</p>
            <p className="text-lg">{d.dialogText}</p>
          </div>
        ))}
      </div>

      <p>KRAJ SCENARIJA ZA PREDJELO </p>

    </div>
  );
}

export const characterIntroductions: CharacterIntroductionsType[] = [
  {
    id: 1,
    color: "#3e00ff",
    characterName: "Earl Colton",
    introductionText:
      "(Cereka se) Pa, to nije nešto što čujete svaki dan, ne gospođo. Vlasnik sam ovog ovdje saluna i vjerujte mi da se ništa u ovom gradu ne događa, a da ja ne znam za to. Ja sam oči, uši i srce Potoka Duhova i nemam pojma o nikakvom planu ubojstva. Mada me ne bi iznenadilo da netko pokušava nasamariti našeg starog Averyja Rogersa.",
  },
  {
    id: 2,
    color: "#000000",
    characterName: "Clara Cassidy",
    introductionText:
      "Znaš, Earl, nikad se ne trebaš bojati propustiti priliku da začepiš! (Eksira ostatak svog pića) Dobro, pa, mrzim Averyjevu smrdljivu, kukavičku pojavu. Što s tim? Prije par godina imala sam svoj vlastiti ranč i bila sam prva žena u ovom okrugu koja je to postigla. Nije to bilo ništa posebno, ali bilo je pošteno i bilo je moje. (Ljutito udari šakom) Onda mi je taj beskorisni prljavi, pokvareni prevarant sve to oteo! Pa, zato sam ovdje svaki dan, ispijam svoju tugu.",
  },
  {
    id: 3,
    color: "#d0ff00",
    characterName: "William Hargreaves",
    introductionText:
      "Moje ime je gospodin Hargreaves i ja, naravno, ne diram vražiji nektar. Svratio sam samo na sarsaparillu nakon napornog radnog dana u pogrebništvu. Možda sam mario za gospodina Rogersa i njegovu materijalistički način života, ali to je između njega i njegovog stvoritelja.",
  },
  {
    id: 4,
    color: "#fa000c",
    characterName: "Scarlett May Beauregard",
    introductionText:
      "Oh, da, gospodine, smatram da ne bi priličilo dami ponašati se tako neotesano! Odgajana sam kao dama i uvijek kažem da svoje manire nosite sa sobom kamo god pošli. Moje ime je gospođica Scarlett May Beauregard, iz obitelji Beauregard iz Južne Karoline. Moj tatica je inženjer — zapravo, baš sam putovala željezničkom prugom koju je on pomogao izgraditi da dođem do ovog, uh, šarmantnog gradića.",
  },
  {
    id: 5,
    color: "#00ff2d",
    characterName: "Sawyer West",
    introductionText:
      "(S pobjedničkim osmijehom) Pa, da, gospođo, ja sam Sawyer West i prošao sam uzduž i poprijeko ovaj veliku zemlju, donoseći svoje poznate ljekovite tonike onima kojima su potrebni. Pomogao sam slijepim ljudima da progledaju, hromim da prohodaju i bolesnima na samrti da požive još pet, deset, pa čak i dvadeset godina duže!",
  },
  {
    id: 6,
    color: "#ed8c12",
    characterName: "Lilly Hart",
    introductionText:
      "(Zagledana u nokte) Skrati priču, gospodine, znam prepoznati varalicu kad ju vidim! Earl, moraš početi biti pažljiviji u vezi toga koga puštaš unutra! A sad, ako me ne znaš, ja sam Lilly Hart, plesačica ovdje u Posljednjoj prilici. Zarađujem dobar novac i dečki su dosta pristojni. Pa, svi sem Averyja.",
  },
];

export type CharacterIntroductionsType = {
  id: number;
  color: string;
  characterName: string;
  introductionText: string;
};

export const firstChunkOfDialogs = [
  {
    id: 1,
    characterName: "Clara",
    dialogText:
      "Pa, budući da smo svi zaglavili ovdje na neko vrijeme, mislim da ću popiti još jedno piće.",
  },
  {
    id: 2,
    characterName: "Earl",
    dialogText: "Imaš para za to? Vodim salun, ne dobrotvornu organizaciju!",
  },
  {
    id: 3,
    characterName: "Clara",
    dialogText:
      "Ti samo otvori račun i proslijedi Averyju Rogersu. On je razlog zašto sam ovdje svaki dan pa bi isto tako on mogao podmiriti taj dug. (Cereka se) Premda bi se trebao požuriti u slučaju da je ona gatara u pravu i da mu zaista slijedi jedno dublje drijemanje odmah nakon zalaska sunca!",
  },
  {
    id: 4,
    characterName: "Scarlett",
    dialogText:
      "(Maše lepezom) Nemojte mi zamjerite što ću ovo reći, ali ja stvarno ne mislim da bi se jedna dama trebala tako ponašati u javnosti. (Šapuće ispod glasa) Gospoda je ovdje prisutna!",
  },
  {
    id: 5,
    characterName: "Clara",
    dialogText:
      "(Ljutito) Oh, tiho tamo šeširdžijo! Ovo nije Južna Karolina i nikog ovdje ne zanima novac tvog tatice. Što ti uopće radiš u Potoku Duhova? Nema debitantskih balova ovdje!",
  },
  {
    id: 6,
    characterName: "Scarlett",
    dialogText:
      "(Ukočeno) Preferiram zadržati svoje privatne stvari upravo takvim – privatnim. Zasigurno nisam odgajana da pričam o svojim osobnim stvarima svima i svakom.",
  },
  {
    id: 7,
    characterName: "Lilly",
    dialogText:
      "(Ponovno nanosi ruž za usne) Takav stav ovdje neće dugo potrajati, ljepojko. Prema Madame Celeste, imamo plan ubojstva koji trebamo zaustaviti, a to će zahtijevati da iznesemo malo prljavog veša.",
  },
  {
    id: 8,
    characterName: "William",
    dialogText:
      "(Ustaje da ode) Meni postaje vrlo jasno da je moja posjeta ovdje bila greška. Ispričajte me ljudi, trebam poći kući pomoliti se.",
  },
  {
    id: 9,
    characterName: "Earl",
    dialogText:
      "Čekaj samo trenutak, druže! Svi mi moramo ostati ovdje dok ne počistimo ovaj užasan nered. (Prepredeno) Ili bi možda radije da nisi tu da se braniš dok mi sjedimo ovdje i kaljamo tvoje ime ...",
  },
  {
    id: 10,
    characterName: "William",
    dialogText:
      "(Zatečen) Zašto ti... ti... beskorisno zadirkivalo! (Sjeda nevoljko) Pa, nisam siguran koja je procedura za tijelo koje već nije pronađeno mrtvo. Moje usluge se obično zatraže kada je tu nešto malo... opipljivije. Još uvijek ne trebate pogrebnika, ali zar ne bismo barem trebali upozoriti šerifa?",
  },
  {
    id: 11,
    characterName: "Earl",
    dialogText:
      "(Smije se) Mislim da ne budući da teturao odavde prije samo sat vremena. (Stišavajući se) Znate, taj šerif Williams je neumoljivi pijanac. Barem jednom tjedno popije toliko šljive da obori razjarenog konja. Neće nam biti od nikakve koristi dok ne odspava.",
  },
  {
    id: 12,
    characterName: "Scarlett",
    dialogText: "(Zadihano) Zakonodavac, pijan?",
  },
  {
    id: 13,
    characterName: "Lilly",
    dialogText:
      "(Smije se) Ne bi bio prvi put! Sam šerifov račun drži svjetla upaljena na ovom mjestu, zar ne, Earl?",
  },
  {
    id: 14,
    characterName: "William",
    dialogText:
      "(Mrmlja) Ovaj grad, svaki dan sve dalje i dalje od božjeg svjetla ...",
  },
  {
    id: 15,
    characterName: "Sawyer",
    dialogText:
      "Poštujem vašu situaciju, ljudi, ali imam gust raspored. Vjerujem da razumijete. (Pruža ruku da se rukuje s Earlom)",
  },
  {
    id: 16,
    characterName: "Earl",
    dialogText:
      "(Ignorira Sawyerovu ruku) Znaš, ovaj trenutak je strašno zgodan. Ne bi bio prvi put da stranac dođe u mali grad i uzrokuje probleme. Stranac, baš kao što si sada ti...",
  },
  {
    id: 17,
    characterName: "Sawyer",
    dialogText:
      "(Sužavajući oči) Ne mogu reći da mi je stalo do onoga što insinuiraš. Ja sam gospodin, pa ću se suzdržati od bilo kakvih odvratnosti, ali mogu te savjetovati da, ako se odlučiš valjati s prascima, trebaš očekivati da ćeš se zaprljati.",
  },
  {
    id: 18,
    characterName: "Earl",
    dialogText:
      "(Pruži ruku, nervozno se smijući) Hej, ništa loše s tim da čovjek ukaže na hipotetsku situaciju! Ne želim nikakvih problema s tobom.",
  },
  {
    id: 19,
    characterName: "Sawyer",
    dialogText: "Onda ti savjetujem da začepiš gubicu.",
  },
  {
    id: 20,
    characterName: "Clara",
    dialogText:
      "(Sawyeru) Slušaj ovdje, kicošu. Earl možda jest beskorisna kukavica, ali ja se tebe ne bojim. Što to imaš u toj torbi?",
  },
  {
    id: 21,
    characterName: "Sawyer",
    dialogText:
      "(Nastoji se pribrati) Gospođo, uz dužno poštovanje, mogu jasno vidjeti Vašu futrolu za pištolj za pojasom. (Slabašno se smijulji) Rekao bih da su Vaše stvari daleko više inkriminirajuće nego moje!",
  },
  {
    id: 22,
    characterName: "Clara",
    dialogText:
      "(Prijeteći upire prstom u Sawyera) Ne iskušavaj me, gospon, mogla bih ti metkom skinuti šešir s glave s trijest stopa.",
  },
  {
    id: 23,
    characterName: "Scarlett",
    dialogText:
      "(blago, Clari) Gospodin ima pravo. Koliko možemo vidjeti, Vi ste jedini ovdje s oružjem ...",
  },
  {
    id: 24,
    characterName: "Clara",
    dialogText:
      "(Udara šakom o stol) Pizdarija! (Zastaje na trenutak) Dobro, kažem da svi ispraznimo džepove i torbe. Ako je netko krenuo na Averyja, sigurno nosi alat za obaviti posao, zar ne?",
  },
  {
    id: 25,
    characterName: "Scarlett",
    dialogText:
      "Sugerirate li da dama isprazni sadržaj svoje torbice pred svima? Pa, možda biste mogli vidjeti (stišava glas do šapta) prljavi rupčić!",
  },
  {
    id: 26,
    characterName: "Lilly",
    dialogText:
      "(Prevrće očima) Draga, ali sada nije vrijeme za biti prikladan.",
  },
  {
    id: 27,
    characterName: "William",
    dialogText: "(Neodobravajuće) Govori bludnica s podvezicom!",
  },
  {
    id: 28,
    characterName: "Sawyer",
    dialogText:
      "Dajte, dajte, nemojmo pribjegavati sitnim svađama! Osim toga, mislim da gospođica Hart izgleda lijepo poput breskve. (Smiješi se)",
  },
  {
    id: 29,
    characterName: "Lilly",
    dialogText: "(Skini mi se)!",
  },
  {
    id: 30,
    characterName: "Earl",
    dialogText:
      "Dakle, koji je plan? Svi po redu ispraznimo svoje džepove i torbe, baš ovdje na šanku?",
  },
  {
    id: 31,
    characterName: "Clara",
    dialogText:
      "Izgleda da imamo prvog dobrovoljca! (Cereka se u piće) Bolje da odmah počnem graditi vješala!",
  },
];

export const firstHostText = [
  "Earl Colton izloži svoje stvari kako bi svi igrači mogli diskutirati o njima.",
  "Zatim, ostajući u liku, igrači naizmjence ispituju Earla o predmetima koje posjeduje.",
  "Igrači mogu postavljati pitanja o bilo kojem predmetu, a Earl mora pokušati dati uvjerljiv razlog zašto ih posjeduje.",
  "Nakon što ispitivanje završi, scenarij se nastavlja."
]


export const secondChunkOfDialogs = [
  {
    id: 1,
    characterName: "Clara",
    dialogText:
      "(odjednom tužno) Pogledaj ovo pismo od Averyjevog odvjetnika! Zapeo je za tvoj bar? To je stvarno tužno, Earl. Znam kakav je osjećaj kad ti neko iščupa tvoj vlastiti biznis iz ruku.",
  },
  {
    id: 2,
    characterName: "Lilly",
    dialogText:
      "Uh, malo bih pričekala s izljevima suosjećanja, Clara. Pogledaj ovu knjigu ovdje – prepuna je svakakvih prljavih malih tajni koje je on načuo u baru, a i tvoje su među njima!",
  },
  {
    id: 3,
    characterName: "Clara",
    dialogText:
      'Što? (Čita naglas) "Clara Cassidy je bila ta koja je pucala u prozor gospodina Ketchuma. Načuo sam kako nekom govori u baru." (Lupne šakom o stol) A je li, ti beskorisni cinkarošu, špijuniraš me! Trebala bih riješiti ovu zavadu istog trena sa svojim pištoljem. (Viče) Toliko sam ljuta da bih mogla rigati vatru! Zašto se uopće vraćam ovamo?',
  },
  {
    id: 4,
    characterName: "Earl",
    dialogText:
      "Zbog istog razloga kao i svi ostali. Ovo je jedini salun u gradu!",
  },
  {
    id: 5,
    characterName: "Sawyer",
    dialogText:
      "(Smije se) E to je ponuda i potražnja! Lukav ste Vi biznismen, gospodine Colton!",
  },
  {
    id: 6,
    characterName: "William",
    dialogText:
      'Gospode Bože! Nije samo Vaše ime tu, gđice Cassidy. Pa, mora da imate nešto napisano o svakoj osobi u gradu – to je kao "Tko je tko" sa zlodjelima!',
  },
  {
    id: 7,
    characterName: "Scarlett",
    dialogText:
      "Jesu li Vas odgajali barbari, gospodine Colton? Imate li uopće časti? Pa, Vi niste ništa više od... od... ucjenjivača!",
  },
  {
    id: 8,
    characterName: "Earl",
    dialogText:
      '(Obrambeno) Ček, ček, nemojmo gubiti glave sad! Ja skupljam ove male... "zapise o incidentima" i koristim te informacije kao neku vrstu osiguranja. (Nervozno se smije) Samo da malo pretegnem vagu u svoju korist!',
  },
  {
    id: 9,
    characterName: "Sawyer",
    dialogText:
      "Moram reći, gospodine, meni to užasno puno zvuči kao ucjena...",
  },
  {
    id: 10,
    characterName: "Earl",
    dialogText:
      "(Obrambeno) Ma šta ti uopće znaš o tome? Ti nisi ništa nego prokleta skitnica!",
  },
  {
    id: 11,
    characterName: "Lilly",
    dialogText:
      "(Oštro) E sad se skuliraj, Earl! Uvijek sam mislila da Salun posljednje prilike nije dobar za tebe. Ovaj prokleti salun te čini luđim od zahodskog štakora!",
  },
  {
    id: 12,
    characterName: "Earl",
    dialogText:
      "Prekini s tom pričom sad odmah, Lilly. Ovaj salon je meni sve! Moj otac ga je posjedovao prije mene i bio je častan i velikodušan čovjek i naradio se kao magarac kako bi održao posao!",
  },
  {
    id: 13,
    characterName: "William",
    dialogText: "(Klimajući ozbiljno) Bio je dobar čovjek, neka počiva u miru.",
  },
  {
    id: 14,
    characterName: "Earl",
    dialogText:
      "(Ljutito) Da, i što mu je to donijelo? Ljudi su ga iskorištavali i umro je bez centa iza sebe! (Tužno) Kada je ovaj salon pripao meni zakleo sam se da neću doživjeti istu sudbinu kao moj stari. Ako ljudi žele izbjeći svoja !dugovanja! i otići bez plaćanja, samo nek probaju. Ova knjiga je moj as iz rukava.",
  },
  {
    id: 15,
    characterName: "Scarlett",
    dialogText:
      "Ne kažem da opravdavam tvoju očito ucjenjivanje, ali mi je stvarno žao što čujem to o tvom tati. Prema ovom pismu od njegovog odvjetnika pretpostavljam da previše rado prihvatio da gospodin Rogers pokušava kupiti tvoje vlasništvo?",
  },
  {
    id: 16,
    characterName: "Earl",
    dialogText:
      "(Mrzovoljno) Rekao sam mu da ga može dobiti preko mene mrtvog!",
  },
  {
    id: 17,
    characterName: "Clara",
    dialogText: "(Mrmljajući) Ili njegovog.",
  },
  {
    id: 18,
    characterName: "Scarlett",
    dialogText:
      'Ali ako imate, nazovimo, "informacije" o svakome u gradu koje oni ne žele da izađu na vidjelo, zar ne bi mogao jednostavno pronaći nešto inkriminirajuće o gospodinu Rogersu?',
  },
  {
    id: 19,
    characterName: "Clara",
    dialogText: "(Podrugljivo) Nemoš vjerovat kolko je naivna!",
  },
  {
    id: 20,
    characterName: "Earl",
    dialogText:
      "(Podrugljivo u znak slaganja) Gospođice, Avery Rogers je najbogatiji, najmoćniji, najvažniji čovjek u gradu. Nije posto stočarski barun jer je bio fin s ljudima i ovdje nema nikog dovoljno hrabrog da mu se suprotstavi.",
  },
  {
    id: 21,
    characterName: "Lilly",
    dialogText:
      "To je sigurno. Avery je nedodirljiv. Drži šerifa u šaci i većinu grada na svojoj platnoj listi na ovaj ili onaj način.",
  },
  {
    id: 22,
    characterName: "Earl",
    dialogText:
      'Dovraga, mogao bih širiti glasine da je Avery imao "osobne odnose" sa starim Smithovim prvorazrednim veprovom i to ne bi ni okrznulo ugled tog čovjeka!',
  },
  {
    id: 23,
    characterName: "William",
    dialogText:
      "(Trljajući čelo) Bože pomozi, trebao bih ti oprati usta sapunom!",
  },
  {
    id: 24,
    characterName: "Sawyer",
    dialogText:
      "Ne bi Vam smetalo da na trenutak igram vražjeg odvjetnika, zar ne? Kao biznismen, znam da ponekad uobičajene metode manipulacije, uh, mislim uobičajene taktike prodaje, ne funkcioniraju. Možda Vam treba drastičnija metoda da se otaraste Rogersa? Pogotovo nakon tog čudnog izgovora zašto imate terpentin i šibice kod sebe!",
  },
  {
    id: 25,
    characterName: "William",
    dialogText:
      "Da ne spominjem one metke. Izvukao sam dobar broj tih mataka iz nekih nesretnih duša i znam kakvu štetu te stvarčice mogu napraviti. Razdvoje dušu od tijela dok trepneš.",
  },
  {
    id: 26,
    characterName: "Earl",
    dialogText:
      "(Očajnički) Gosti trebaju zapaliti cigarete, zar ne? I reci mi nešto bolje od terpentina za skidanje krvavih mrlja s drveta! A što se tiče tih čahura, one su za sačmarica iza šanka – što ako me opljačkaju ili se Clara razvali i opet mi proba izbiti barsku krpu iz ruku?",
  },
  {
    id: 27,
    characterName: "Clara",
    dialogText: "(Ljutito) To se desilo samo jednom, Earl!",
  },
  {
    id: 28,
    characterName: "Sawyer",
    dialogText:
      "To ne mijenja činjenicu da imate opasno, i napunjeno, oružje na raspolaganju...",
  },
  {
    id: 29,
    characterName: "Scarlett",
    dialogText:
      "(Hladeći se) Ovaj Avery Vas je sigurno stavio u vrlo očajnu situaciju, gospodine Colton. Vaš položaj u gradu bi zasigurno bio izgubljen da nemate salun i društveni status koji Vam pruža?",
  },
  {
    id: 30,
    characterName: "Clara",
    dialogText:
      "(Smijući se) Nije l’ to istina, upravo tako! Čak bi i prokleti pas mogao obavljati tvoj posao, Earl! Da te Avery izbaci ne bio ni za to da ležiš sa svinjama!",
  },
  {
    id: 31,
    characterName: "Earl",
    dialogText:
      "(Nervozno) Dajte sad, zar ne pretjerujete malo svi skupa s ovim?",
  },
  {
    id: 32,
    characterName: "Lilly",
    dialogText:
      "(Odlučno) Bez saluna, mislim da bi bio u još goroj poziciji nego tvoj tata. Bez biznisa, bez novca i pola grada bi bilo željno tvoje krvi zbog te proklete knjige! Koliko daleko bi otišao da spriječiš Averyja da ti ščepa tvoju moć, Earl?",
  },
  {
    id: 33,
    characterName: "Earl",
    dialogText:
      "(Pokušavajući skrenuti pozornost) A što je s tobom, gospođice Lilly? Evo ja znam da gajiš stvarno ozbiljnu mržnju prema Averyju. Mislim da je vrijeme da saznamo kakve ti tajne nosiš naokolo!",
  },
];

export const secondHostText = [
  "Lilly Hart izloži svoje stvari kako bi svi igrači mogli diskutirati o njima.",
  "Zatim, ostajući u liku, igrači naizmjence ispituju Lilly o predmetima koje posjeduje.",
  "Igrači mogu postavljati pitanja o bilo kojem predmetu, a Lilly mora pokušati dati uvjerljiv razlog zašto ih posjeduje.",
  "Nakon što ispitivanje završi, scenarij se nastavlja."
]


export const thirdChunkOfDialogs = [
  {
    id: 1,
    characterName: "Sawyer",
    dialogText:
      "(Namigujući) Možda imate lice anđela, gospođice Lilly, ali mene nećete zavarati tim izgovorom!",
  },
  {
    id: 2,
    characterName: "Lilly",
    dialogText:
      "(Oholo) Vjerujte u što god hoćete, gospodine West. To ne mijenja ama baš ništa! Svi ste navrli na pištolj. A svi ste i blagoslovljeni s dva dobra oka, zar ne? Pa, onda biste trebali moći vidjeti da nije ni napunjen. Nije da je to vaša stvar, ali nikad nisam ni kupila metak za njega!",
  },
  {
    id: 3,
    characterName: "Scarlett",
    dialogText:
      "A što je s onom kartom u jednom smjeru za Pariz? Bilo bi strašno zgodno ostaviti sve neugodnosti iza sebe tako. Sumnjam da bi te zakon ikad pronašao tamo!",
  },
  {
    id: 4,
    characterName: "Lilly",
    dialogText:
      "Gledaj, dušo, ne bih ni očekivala da ti to razumiješ jer nisi odavdje. Ali ja jesam, rođena i odrasla ovdje, i ovaj grad nije za žene s ambicijama. Želim glamur, želim luksuz, želim proputovati svijet! Želim život veći od Potoka Duhova. (Uzdiše)",
  },
  {
    id: 5,
    characterName: "William",
    dialogText:
      "Mogu razumjeti zašto bi htjela napustiti mjesto poput Potoka Duhova u kojem buja grijeh, ali što ima loše u tome da postaneš domaćica? Živiš dobar, pošten život, s mladićem možda poput onog na toj slici?",
  },
  {
    id: 6,
    characterName: "Lilly",
    dialogText:
      "(Oštro) Nisam htjela ponovno proživljavati te uspomene jer su još uvijek previše bolne. Čovjek na slici... (Uzdiše) je moj brat. Bio je samo nekoliko godina mlađi od mene, ali preminuo je prošle godine. (Tužno) Bio je rudar, na izvidnici na planini ne daleko od tvog bivšeg ranča, Clara. Dogodila se velika eksplozija, dinamit je bio neispravan. Nakon što je umro, zaklela sam se da neću ostati u ovom gradu i potratiti svoj život.",
  },
  {
    id: 7,
    characterName: "William",
    dialogText:
      "(Pročisti grlo) Žao mi je zbog toga, gospođo. Ne sjećam se da sam spomenuo taj incident. Mnogo je dobrih duša izgubljeno toga dana. Nisam mislio uzrokovati nikakvu uvredu.",
  },
  {
    id: 8,
    characterName: "Clara",
    dialogText:
      "(Sarkastično) To te nikad nije zaustavilo prije, William. Nema potrebe da mijenjaš svoje navike sada!",
  },
  {
    id: 9,
    characterName: "William",
    dialogText:
      "(Oštro) Nisam ovdje da stječem prijatelje, gospođice Cassidy. Ovdje sam da pomognem očistiti ovaj grad pun grijeha. Ako uvrijedim jednu ili dvije osobe putem, pa, to je sve u sklopu mog posla.",
  },
  {
    id: 10,
    characterName: "Earl",
    dialogText:
      "(Sramežljivo) Oh, da? Kao kad si htio izbaciti Gunnera Woodsa iz grada jer je preskočio crkvu dva tjedna zaredom?",
  },
  {
    id: 11,
    characterName: "William",
    dialogText:
      "Kako si to znao...? (Pročisti grlo) Nije me briga za njegovu neobveznost. Ako osoba dopusti da im standardi padnu, može uslijediti svaka vrsta grijeha! Ali nisam htio da ga 'protjeramo iz grada', samo sam ušao u prilično... vatrenu raspravu s pastorom Woodsom o moralnim propustima nakon nedjeljne službe. Ali to je bio privatan razgovor. Kako si saznao za to?",
  },
  {
    id: 12,
    characterName: "Earl",
    dialogText:
      "(Smijući se) Oči i uši, Bille. Ja sam oči i uši ovog grada i ne zaboravi to!",
  },
  {
    id: 13,
    characterName: "Sawyer",
    dialogText:
      "(Smiješeći se Lilly) Hajde da se vratimo na bitno. Sada, sudeći po ovom pismu, pretpostavljam da Rogers ne bi bio sklon ideji da ti odlaziš?",
  },
  {
    id: 14,
    characterName: "Lilly",
    dialogText:
      "(Odmahujući rukom s prezirom) Ne obraćam pažnju na Averyjevu ogorčenost! Idem u Pariz i točka. Imam novca da platim svoj put i kartu s mojim imenom na njoj. On je samo ljubomoran sin...",
  },
  {
    id: 15,
    characterName: "Scarlett",
    dialogText: "(Bijesno se ubacuje) Jezik!",
  },
];

//END
