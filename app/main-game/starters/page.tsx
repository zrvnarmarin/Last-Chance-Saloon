import React from "react";
import { belgrano } from "@/app/layout";
import Link from "next/link";
import { StainButton } from "@/app/page";

export default function Home() {
  return (
    <div className={`flex flex-col items-center gap-6 ${belgrano.className}`}>
      <h1 className="text-3xl uppercase text-[#6C0000] pt-6 font-semibold underline decoration-[#6C0000] underline-offset-4">Predjelo</h1>
      <h2 className="w-full text-base text-[#ffffff] uppercase bg-[#6C0000] text-center p-2">
        Upoznavanje
      </h2>
      <div className="w-full flex flex-col gap-4">
        {characterIntroductions.map((ci) => (
          <div
            key={ci.id}
            className={`w-full h-full flex gap-4 items-center justify-center border-l-2 border-[${ci.color}]`}
          >
            <div className="h-24 w-2" style={{ backgroundColor: ci.color }}></div>
            <div className="w-full flex flex-col pr-2">
              <p className="font-semibold text-[#000000] text-start pt-2">{ci.characterName}: </p>
              <p className="text-[#000000] text-start pt-2">{ci.introductionText}</p>
            </div>
          </div>
        ))}
      </div>
      <br /> 
      {/* <h2 className="bg-black text-white w-full text-center uppercase py-4 text-4xl">
        Tekst likova
      </h2> */}
      <div className="flex flex-col gap-4">
        {firstChunkOfDialogs.map((d) => (
          <div className="flex gap-4" key={d.id}>
            <div className="h-24 w-2" style={{ backgroundColor: d.color }}></div>
            <div className="w-full flex flex-col pr-2">
              <p className="font-semibold text-[#000000] text-start pt-2">{d.characterName}:</p>
              <p className="text-[#000000] text-start pt-2">{d.dialogText}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full bg-black flex flex-col gap-4 justify-center py-4">
        {firstHostText.map((hTxt) => (
          <p className="text-[#ffffff] text-start px-6" key={hTxt}>&#x2022; {hTxt}</p>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {secondChunkOfDialogs.map((d) => (
          <div className="flex gap-4" key={d.id}>
            <div className="h-24 w-2" style={{ backgroundColor: d.color }}></div>
            <div className="w-full flex flex-col pr-2">
              <p className="font-semibold text-[#000000] text-start pt-2">{d.characterName}:</p>
              <p className="text-[#000000] text-start pt-2">{d.dialogText}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full bg-black flex flex-col gap-4 justify-center py-4">
        {secondHostText.map((hTxt) => (
          <p className="text-[#ffffff] text-start px-6" key={hTxt}>&#x2022; {hTxt}</p>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {thirdChunkOfDialogs.map((d) => (
          <div className="flex gap-4" key={d.id}>
            <div className="h-24 w-2" style={{ backgroundColor: d.color }}></div>
            <div className="w-full flex flex-col pr-2">
              <p className="font-semibold text-[#000000] text-start pt-2">{d.characterName}:</p>
              <p className="text-[#000000] text-start pt-2">{d.dialogText}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="w-full pb-6 px-6 italic text-center">KRAJ SCENARIJA ZA PREDJELO </p>
      <Link
          href={`/main-game/main-course/`}
          className=" text-black cursor-pointer pb-8"
        >
          {/* Link na Starters */}
          <StainButton />
        </Link>
    </div>
  );
}

export const characterIntroductions: CharacterIntroductionsType[] = [
  {
    id: 1,
    color: "#3e00ff",
    characterName: "Earl Colton",
    introductionText:
      "(Cereka se) Pa, to nije nešto što čujete svaki dan, ne gospođo. Vlasnik sam ovog ovdje saluna i vjerujte mi da se ništa u ovom gradu ne događa, a da ja ne znam za to. Ja sam oči, uši i utroba Potoka Duhova i nemam pojma o ni o kakvom planu ubojstva. Mada me ne bi iznenadilo da netko pokušava nasamariti našeg starog Averyja Rogersa. On nije baš ono što biste nazvali `dobrim čovjekom`. Priče koje bih Vam mogao ispričati... (cereka se opet, znakovito) Sad, Clara, ako si završila s podupiranjem šanka, zašto ne ispričaš dobrim ljudima o svom poslu s gospodinom Rogersom? Ako niste čuli ovu priču, ljudi, stvarno je nevjerojatna!",
  },
  {
    id: 2,
    color: "#000000",
    characterName: "Clara Cassidy",
    introductionText:
      "Znaš, Earl, nikad se ne trebaš bojati propustiti priliku da začepiš! (Eksira ostatak svog pića) Dobro, pa, mrzim Averyjevu smrdljivu, kukavičku pojavu. Što s tim? Prije par godina imala sam svoj vlastiti ranč i bila sam prva žena u ovom okrugu koja je to postigla. Nije to bilo ništa posebno, ali bilo je pošteno i bilo je moje. (Ljutito udari šakom) Onda mi je taj beskorisni, prljavi, pokvareni prevarant sve to oteo! Pa sam ovdje svaki dan, ispijam svoju tugu. (Toči još jedno piće) A ti, Smijuljko, voliš li i ti šljivu?",
  },
  {
    id: 3,
    color: "#d0ff00",
    characterName: "William Hargreaves",
    introductionText:
      "Moje ime je gospodin Hargreaves i ja, naravno, ne diram vražji nektar. Svratio sam samo na sarsaparilu nakon napornog radnog dana u pogrebništvu. Možda sam mario za gospodina Rogersa i njegov neukusan način života, ali to je između njega i njegovog stvoritelja. I, naravno, vidim kako vuče ovaj grad u propast sa svojim nemoralnim ponašanjem. (Počinje brbljat i buncati) I valjda mu nije dovoljno što laže i vara, mora pokvariti sve naše poštene građane. Ako se nešto ne dogodi uskoro, pa, možda će morati preimenovati ovaj Vražji Potok pošto ovdje neće ostati ništa osim hrpe grešnika! (Naglo zastane i pročisti grlo) Ali naravno, nemam ništa protiv čovjeka osobno. (Obraća se Scarlett) Vi, gospođice, primijetio sam da se i Vi također suzdržavate od viskija?",
  },
  {
    id: 4,
    color: "#fa000c",
    characterName: "Scarlett May Beauregard",
    introductionText:
      "Oh, da, gospodine, smatram da ne bi priličilo dami ponašati se tako neotesano! Odgajana sam kao dama i uvijek kažem da svoje manire nosite sa sobom kamo god pošli. Moje ime je gospođica Scarlett May Beauregard, iz obitelji Beauregard iz Južne Karoline. Moj tatica je inženjer — zapravo, putovala sam baš onom željezničkom prugom koju je on pomogao izgraditi da dođem do ovog, uh, šarmantnog gradića. Imala sam priliku upoznati se s gospodinom Rogersom i zaista potvrđujem to da bi se trebao naučiti kako se ponašati u prisutnosti jedne dame! Vi, gospodine, rekla bih da Vas prepoznajem! Jeste li ikad bili u Južnoj Karolini?",
  },
  {
    id: 5,
    color: "#00ff2d",
    characterName: "Sawyer West",
    introductionText:
      "(S pobjedničkim osmijehom) Pa, da, gospođo, ja sam Sawyer West i prošao sam uzduž i poprijeko ovu veliku zemlju, donoseći svoje poznate ljekovite tonike onima kojima su potrebni. Pomogao sam slijepim ljudima da progledaju, hromim da prohodaju i bolesnima na samrti da požive još pet, deset, pa čak i dvadeset godina duže! Ne postoji niti jedno oboljenje koje moji tonici ne mogu izliječiti — probavne smetnje, grčevi i giht nemaju šanse protiv West i sinovi revitalizirajućeg tonika! Sastao sam se s gospodinom Rogersom zbog poslovnog razgovora. Ne mogu svjedočiti ni o kakvim pritužbama koje bi vi pošteni ljudi mogli imati, ali mogu sa sigurnošću reći da on ne prepoznaje dobar posao kad ga vidi! A sada, Vi, mlada damo, zasigurno Vam mogu nabaviti bočicu ili dvije ako biste bili zainteresirani?",
  },
  {
    id: 6,
    color: "#ed8c12",
    characterName: "Lilly Hart",
    introductionText:
      "(Zagledana u nokte) Skrati priču, gospodine, znam prepoznati varalicu kad ju vidim! Earl, moraš počet biti pažljiviji u vezi toga koga puštaš ovdje! A sad, ako me ne znaš, ja sam Lilly Hart, plesačica ovdje u Posljednjoj prilici. Zarađujem dobar novac i dečki su dosta pristojni. Pa, svi sem Averyja. On misli da, samo zato što ima duboke džepove, ima pravo monopolizirati ženino vrijeme! Rođen je s glavom visoko u prokletim oblacima... ako me kužiš. Čini se da bi nam svima bilo puno bolje bez njega, to je j... sigurno. Ali ubojstvo? Sad, tko bi išao učiniti nešto takvo?",
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
    color: "#000000",
  },
  {
    id: 2,
    characterName: "Earl",
    dialogText: "Imaš para za to? Vodim salun, ne dobrotvornu organizaciju!",
    color: "#3e00ff",
  },
  {
    id: 3,
    characterName: "Clara",
    dialogText:
      "Ti samo otvori račun i proslijedi Averyju Rogersu. On je razlog zašto sam ovdje svaki dan pa bi isto tako on mogao podmiriti taj dug. (Cereka se) Premda bi se trebao požuriti u slučaju da je ona gatara u pravu i da mu zaista slijedi jedno dublje drijemanje odmah nakon zalaska sunca!",
    color: "#000000",
  },
  {
    id: 4,
    characterName: "Scarlett",
    dialogText:
      "Scarlett: (Maše lepezom) Nemojte mi zamjeriti što ću ovo reći , ali ja stvarno ne mislim da bi se jedna dama trebala tako ponašati u javnosti. (Šapuće ispod glasa) Gospoda je ovdje prisutna!",
    color: "#fa000c",
  },
  {
    id: 5,
    characterName: "Clara",
    dialogText:
      "Clara: (Ljutito) Oh, tiho tamo Šeširdžijo! Ovo nije Južna Karolina i nikog ovdje ne zanima novac tvog tatice. Što ti uopće radiš u Potoku Duhova? Nema debitantskih balova ovdje!",
    color: "#000000",
  },
  {
    id: 6,
    characterName: "Scarlett",
    dialogText:
      "Scarlett: (Ukočeno) Preferiram zadržati svoje privatne stvari upravo takvim – privatnim. Zasigurno nisam odgajana da pričam o svojim osobnim stvarima svima i svakom.",
    color: "#fa000c",
  },
  {
    id: 7,
    characterName: "Lilly",
    dialogText:
      "(Ponovno nanosi ruž za usne) Takav stav ovdje neće dugo potrajati, ljepojko. Prema Madame Celeste, imamo plan ubojstva koji trebamo zaustaviti, a to će zahtijevati da iznesemo malo prljavog veša.",
    color: "#ed8c12",
  },
  {
    id: 8,
    characterName: "William",
    dialogText:
      "William: (Ustaje da ode) Postaje mi vrlo jasno da je moja posjeta ovdje bila greška. Ispričajte me ljudi, trebam poći kući pomoliti se.",
    color: "#d0ff00",
  },
  {
    id: 9,
    characterName: "Earl",
    dialogText:
      "Earl: Čekaj samo trenutak, druže! Svi mi moramo ostati ovdje dok ne počistimo ovaj užasan nered. (Prepredeno) Ili bi možda radije da nisi tu da se braniš dok mi sjedimo ovdje i kaljamo tvoje ime...",
    color: "#3e00ff",
  },
  {
    id: 10,
    characterName: "William",
    dialogText:
      "William: (Zatečen) Zašto ti... ti... beskorisno zadirkivalo! (Sjeda nevoljko) Pa, nisam siguran koja je procedura za tijelo koje već nije pronađeno mrtvo. Moje usluge se obično zatraže kada je tu nešto malo... opipljivije. Još uvijek ne trebate pogrebnika, ali zar ne bismo barem trebali upozoriti šerifa?",
    color: "#d0ff00",
  },
  {
    id: 11,
    characterName: "Earl",
    dialogText:
      "Earl: (Smije se) Mislim da ne budući da je teturao odavde prije samo sat vremena. (Stišavajući se) Znate, taj šerif Williams je neumoljivi pijanac. Barem jednom tjedno popije toliko šljive da bi mogao oboriti razjarenog konja. Neće nam biti ni od kakve koristi dok ne odspava.",
    color: "#3e00ff",
  },
  {
    id: 12,
    characterName: "Scarlett",
    dialogText: "(Zadihano) Zakonodavac, pijan?",
    color: "#fa000c",
  },
  {
    id: 13,
    characterName: "Lilly",
    dialogText:
      "Lilly: (Smije se) Ne bi bio prvi put! Sam šerifov račun drži svjetla upaljena ovdje, zar ne, Earl?",
    color: "#ed8c12",
  },
  {
    id: 14,
    characterName: "William",
    dialogText:
      "(Mrmlja) Ovaj grad, svaki dan sve dalje i dalje od božjeg svjetla...",
    color: "#d0ff00",
  },
  {
    id: 15,
    characterName: "Sawyer",
    dialogText:
      "Poštujem vašu situaciju, ljudi, ali imam gust raspored. Vjerujem da razumijete. (Pruža ruku da se rukuje s Earlom)",
    color: "#00ff2d",
  },
  {
    id: 16,
    characterName: "Earl",
    dialogText:
      "Earl: (Ignorira Sawyerovu ruku) Znaš, ovaj trenutak je strašno zgodan. Ne bi bio prvi put da stranac dođe u mali grad i uzrokuje probleme. Stranac, baš kao što si sada ti...",
    color: "#3e00ff",
  },
  {
    id: 17,
    characterName: "Sawyer",
    dialogText:
      "Sawyer: (Sužavajući oči) Ne mogu reći da me briga za to što insinuirate. Ja sam gospodin, pa ću se suzdržati od bilo kakvih odvratnosti, ali mogu Vas savjetovati da, ako se odlučite valjati s prascima, trebate očekivati da ćete se zaprljati.",
    color: "#00ff2d",
  },
  {
    id: 18,
    characterName: "Earl",
    dialogText:
      "(Pruži ruku, nervozno se smijući) Hej, ništa loše s tim da čovjek ukaže na hipotetsku situaciju! Ne želim nikakvih problema s tobom.",
    color: "#3e00ff",
  },
  {
    id: 19,
    characterName: "Sawyer",
    dialogText: "Onda ti savjetujem da začepiš gubicu.",
    color: "#00ff2d",
  },
  {
    id: 20,
    characterName: "Clara",
    dialogText:
      "Clara: (Sawyeru) Slušaj ovdje, kicošu. Earl možda jest beskorisna kukavica, ali ja se tebe ne bojim. Što je to tu u tvojoj torbi?",
    color: "#000000",
  },
  {
    id: 21,
    characterName: "Sawyer",
    dialogText:
      "Sawyer: (Nastoji se pribrati) Gospođo, uz dužno poštovanje, mogu jasno vidjeti da ste naoružani. (Slabašno se smijulji) Rekao bih da su Vaše stvari daleko više inkriminirajuće nego moje!",
    color: "#00ff2d",
  },
  {
    id: 22,
    characterName: "Clara",
    dialogText:
      "(Prijeteći upire prstom u Sawyera) Ne iskušavaj me, gospon, mogla bih ti metkom skinuti šešir s glave s trijest stopa.",
    color: "#000000",
  },
  {
    id: 23,
    characterName: "Scarlett",
    dialogText:
      "(blago, Clari) Gospodin ima pravo. Koliko možemo vidjeti, Vi ste jedini ovdje s oružjem...",
    color: "#fa000c",
  },
  {
    id: 24,
    characterName: "Clara",
    dialogText:
      "(Udara šakom o stol) Pizdarija! (Zastaje na trenutak) Dobro, kažem da svi ispraznimo džepove i torbe. Ako je netko krenuo na Averyja, sigurno nosi alat za obaviti posao, zar ne?",
    color: "#000000",
  },
  {
    id: 25,
    characterName: "Scarlett",
    dialogText:
      "Sugerirate li da dama isprazni sadržaj svoje torbice pred svima? Pa, možda biste mogli vidjeti (stišava glas do šapta) prljavi rupčić!",
    color: "#fa000c",
  },
  {
    id: 26,
    characterName: "Lilly",
    dialogText:
      "(Prevrće očima) Blagoslovljena bila draga, ali sada nije vrijeme za pristojnost.",
    color: "#ed8c12",
  },
  {
    id: 27,
    characterName: "William",
    dialogText: "(Neodobravajuće) Govori bludnica s podvezicom!",
    color: "#d0ff00",
  },
  {
    id: 28,
    characterName: "Sawyer",
    dialogText:
      "Dajte, dajte, nemojmo pribjegavati sitnim svađama! Osim toga, mislim da gospođica Hart izgleda lijepo baš poput breskve. (Smiješi se)",
    color: "#00ff2d",
  },
  {
    id: 29,
    characterName: "Lilly",
    dialogText: "(Ispod glasa): Skini mi se!",
    color: "#ed8c12",
  },
  {
    id: 30,
    characterName: "Earl",
    dialogText:
      "Dakle, koji je plan? Svi po redu ispraznimo svoje torbe, baš ovdje na šanku?",
    color: "#3e00ff",
  },
  {
    id: 31,
    characterName: "Clara",
    dialogText:
      "Izgleda da imamo prvog dobrovoljca! (Cereka se u piće) Bolje da odmah počnem graditi vješala!",
    color: "#000000",
  },
];

export const firstHostText = [
  "Earl Colton izloži svoje stvari kako bi svi igrači mogli diskutirati o njima",
  "Zatim, ostajući u liku, igrači naizmjence ispituju Earla o predmetima koje posjeduje",
  "Igrači mogu postavljati pitanja o bilo kojem predmetu, a Earl mora pokušati dati uvjerljiv razlog zašto ih posjeduje",
  "Nakon što ispitivanje završi, scenarij se nastavlja",
];

export const secondChunkOfDialogs = [
  {
    id: 1,
    characterName: "Clara",
    dialogText:
      "(odjednom tužno) Pogledaj ovo pismo od Averyjevog odvjetnika! Zapeo je za tvoj bar? To je stvarno tužno, Earl. Znam kakav je osjećaj kad ti neko iščupa tvoj vlastiti biznis iz ruku.",
    color: "#000000",
  },
  {
    id: 2,
    characterName: "Lilly",
    dialogText:
      "Uh, malo bih pričekala s izljevima suosjećanja, Clara. Pogledaj ovu knjigu ovdje – prepuna je svakakvih prljavih malih tajni koje je on načuo u baru, a i tvoje su među njima!",
    color: "#ed8c12",
  },
  {
    id: 3,
    characterName: "Clara",
    dialogText:
      'Što? (Čita naglas) "Clara Cassidy je bila ta koja je pucala u prozor gospodina Ketchuma. Načuo sam kako nekom govori u baru." (Lupne šakom o stol) A je li, ti beskorisni cinkarošu, špijuniraš me! Trebala bih riješiti ovaj spor istog trena sa svojim pištoljem. (Viče) Toliko sam ljuta da bih mogla rigati vatru! Zašto se uopće vraćam ovamo?',
    color: "#000000",
  },
  {
    id: 4,
    characterName: "Earl",
    dialogText:
      "Zbog istog razloga kao i svi ostali. Ovo je jedini salun u gradu!",
    color: "#3e00ff",
  },
  {
    id: 5,
    characterName: "Sawyer",
    dialogText:
      "(Smije se) E to je ponuda i potražnja! Lukav ste Vi biznismen, gospodine Colton!",
    color: "#00ff2d",
  },
  {
    id: 6,
    characterName: "William",
    dialogText:
      'Gospode Bože! Nije samo Vaše ime tu, gospođice Cassidy. Pa, mora da imate nešto napisano o svakoj osobi u gradu – to je kao "Tko je tko" sa zlodjelima!',
    color: "#d0ff00",
  },
  {
    id: 7,
    characterName: "Scarlett",
    dialogText:
      "Jesu li Vas odgajali barbari, gospodine Colton? Imate li uopće časti? Pa, Vi niste ništa više od... od... ucjenjivača!",
    color: "#fa000c",
  },
  {
    id: 8,
    characterName: "Earl",
    dialogText:
      '(Obrambeno) Ček, ček, nemojmo gubiti glave sad! Ja skupljam ove male... "zapise o incidentima" i koristim te informacije kao neku vrstu osiguranja. (Nervozno se smije) Samo da malo pretegnem vagu u svoju korist!',
    color: "#3e00ff",
  },
  {
    id: 9,
    characterName: "Sawyer",
    dialogText:
      "Moram reći, gospodine, meni to užasno puno zvuči kao ucjena...",
    color: "#00ff2d",
  },
  {
    id: 10,
    characterName: "Earl",
    dialogText:
      "(Obrambeno) Ma šta ti uopće znaš o tome? Ti nisi ništa nego prokleta skitnica!",
    color: "#3e00ff",
  },
  {
    id: 11,
    characterName: "Lilly",
    dialogText:
      "(Oštro) E sad se skuliraj, Earl! Uvijek sam mislila da Salun posljednje prilike nije dobar za tebe. Ovaj prokleti salun te čini luđim od zahodskog štakora!",
    color: "#ed8c12",
  },
  {
    id: 12,
    characterName: "Earl",
    dialogText:
      "Prekini s tom pričom sad odmah, Lilly. Ovaj salun je meni sve! Moj otac ga je posjedovao prije mene i bio je častan i velikodušan čovjek i naradio se kao magarac kako bi održao posao!",
    color: "#3e00ff",
  },
  {
    id: 13,
    characterName: "William",
    dialogText: "(Klimajući ozbiljno) Bio je dobar čovjek, neka počiva u miru.",
    color: "#d0ff00",
  },
  {
    id: 14,
    characterName: "Earl",
    dialogText:
      "(Ljutito) Da, i što mu je to donijelo? Ljudi su ga iskorištavali i umro je bez ostavljenog centa! (Tužno) Kada je ovaj salun pripao meni zakleo sam se da neću doživjeti istu sudbinu kao moj stari. Ako ljudi žele izbjeći svoje dugove i otići okrenutih leđa, samo nek probaju. Ova knjiga je moj as iz rukava.",
    color: "#3e00ff",
  },
  {
    id: 15,
    characterName: "Scarlett",
    dialogText:
      "Ne kažem da opravdavam Vaše očito ucjenjivanje, ali mi je stvarno žao što čujem to o Vašem tati. Prema ovom pismu od njegovog odvjetnika pretpostavljam da niste previše rado prihvatili da gospodin Rogers pokušava kupiti Vaše vlasništvo?",
    color: "#fa000c",
  },
  {
    id: 16,
    characterName: "Earl",
    dialogText:
      "(Mrzovoljno) Rekao sam mu da ga može dobiti preko mene mrtvog!",
    color: "#3e00ff",
  },
  {
    id: 17,
    characterName: "Clara",
    dialogText: "(Mrmljajući) Ili njega.",
    color: "#000000",
  },
  {
    id: 18,
    characterName: "Scarlett",
    dialogText:
      'Ali ako imate, nazovimo, "informacije" o svakome u gradu koje oni ne žele da izađu na vidjelo, zar ne biste mogli jednostavno pronaći nešto inkriminirajuće o gospodinu Rogersu?',
    color: "#fa000c",
  },
  {
    id: 19,
    characterName: "Clara",
    dialogText: "(Podrugljivo) Nemoš vjerovat kolko je naivna!",
    color: "#000000",
  },
  {
    id: 20,
    characterName: "Earl",
    dialogText:
      "(Podrugljivo u znak slaganja) Gospođice, Avery Rogers je najbogatiji, najmoćniji, najvažniji čovjek u gradu. Nije posto stočarski barun jer je bio fin s ljudima i ovdje nema nikog dovoljno hrabrog da mu se suprotstavi.",
    color: "#3e00ff",
  },
  {
    id: 21,
    characterName: "Lilly",
    dialogText:
      "To je sigurno. Avery je nedodirljiv. Drži šerifa u šaci i većinu grada na svojoj platnoj listi na ovaj ili onaj način.",
    color: "#ed8c12",
  },
  {
    id: 22,
    characterName: "Earl",
    dialogText:
      "Dovraga, mogao bih širiti glasine da je Avery imao `bliski odnos` sa starim Smithovim prvorazrednim veprom i to ne bi ni okrznulo ugled tog čovjeka!",
    color: "#3e00ff",
  },
  {
    id: 23,
    characterName: "William",
    dialogText:
      "(Trljajući čelo) Bože pomozi, trebao bih ti oprati usta sapunom!",
    color: "#d0ff00",
  },
  {
    id: 24,
    characterName: "Sawyer",
    dialogText:
      "Ne bi Vam smetalo da na trenutak igram vražjeg odvjetnika, zar ne? Kao biznismen, znam da ponekad uobičajene metode manipulacije, uh, mislim uobičajene taktike prodaje, ne funkcioniraju. Možda Vam treba drastičnija metoda da se otarasite Rogersa? Pogotovo nakon onog čudnog izgovora o tome zašto imate terpentin i šibice kod sebe!",
    color: "#00ff2d",
  },
  {
    id: 25,
    characterName: "William",
    dialogText:
      "Da ne spominjemo onu čahuru. Izvukao sam dobar broj tih metaka iz nekih nesretnih duša i znam kakvu štetu te stvarčice mogu napraviti. Razdvoje dušu od tijela dok trepneš.",
    color: "#d0ff00",
  },
  {
    id: 26,
    characterName: "Earl",
    dialogText:
      "(Očajnički) Gosti trebaju zapaliti cigarete, zar ne? I reci mi nešto bolje od terpentina za skidanje krvavih mrlja s drveta! A što se tiče te čahure, ona je za sačmaricu iza šanka – što ako me opljačkaju ili se Clara razvali i opet mi proba izbiti barsku krpu iz ruku?",
    color: "#3e00ff",
  },
  {
    id: 27,
    characterName: "Clara",
    dialogText: "(Ljutito) To se desilo samo jednom, Earl!",
    color: "#000000",
  },
  {
    id: 28,
    characterName: "Sawyer",
    dialogText:
      "To ne mijenja činjenicu da imate opasno, i napunjeno, oružje na raspolaganju...",
    color: "#00ff2d",
  },
  {
    id: 29,
    characterName: "Scarlett",
    dialogText:
      "(Hladeći se lepezom) Ovaj Avery Vas je svakako stavio u vrlo očajnu situaciju, gospodine Colton. Vaš položaj u gradu bi zasigurno bio izgubljen da nemate salun i društveni status koji Vam pruža?",
    color: "#fa000c",
  },
  {
    id: 30,
    characterName: "Clara",
    dialogText:
      "(Smijući se) Nije l’ to istina, upravo tako! Čak bi i prokleti pas mogao obavljati tvoj posao, Earl! Da te Avery izbaci ne bio ni za to da ležiš sa svinjama!",
    color: "#000000",
  },
  {
    id: 31,
    characterName: "Earl",
    dialogText:
      "(Nervozno) Dajte sad, zar ne pretjerujete malo svi skupa s ovim?",
    color: "#3e00ff",
  },
  {
    id: 32,
    characterName: "Lilly",
    dialogText:
      "(Odlučno) Bez saluna, mislim da bi bio u još goroj poziciji nego tvoj tata. Bez biznisa, bez novca i pola grada bi bilo željno tvoje krvi zbog te proklete knjige! Koliko daleko bi išao da spriječiš Averyja da ti ščepa tvoju moć, Earl?",
    color: "#ed8c12",
  },
  {
    id: 33,
    characterName: "Earl",
    dialogText:
      "(Pokušavajući skrenuti pozornost) A što je s tobom, gospođice Lilly? Evo ja znam da gajiš stvarno ozbiljnu mržnju prema Averyju. Mislim da je vrijeme da saznamo kakve ti tajne nosiš naokolo!",
    color: "#3e00ff",
  },
];


export const secondHostText = [
  "Lilly Hart izloži svoje stvari kako bi svi igrači mogli diskutirati o njima",
  "Zatim, ostajući u liku, igrači naizmjence ispituju Lilly o predmetima koje posjeduje",
  "Igrači mogu postavljati pitanja o bilo kojem predmetu, a Lilly mora pokušati dati uvjerljiv razlog zašto ih posjeduje",
  "Nakon što ispitivanje završi, scenarij se nastavlja",
];

export const thirdChunkOfDialogs = [
  {
    id: 1,
    characterName: "Sawyer",
    dialogText:
      "(Namigujući) Možda imate lice anđela, gospođice Lilly, ali mene nećete zavarati tim izgovorom!",
    color: "#00ff2d",
  },
  {
    id: 2,
    characterName: "Lilly",
    dialogText:
      "(Oholo) Vjerujte u što god hoćete, gospodine West. To ne mijenja ama baš ništa! Svi ste navrli na pištolj. A svi ste i blagoslovljeni s dva zdrava oka, zar ne? Pa, onda biste trebali moći vidjeti da nije ni napunjen. Nije da je to vaša stvar, ali nikad nisam ni kupila metak za njega!",
    color: "#ed8c12",
  },
  {
    id: 3,
    characterName: "Scarlett",
    dialogText:
      "A što je s onom kartom u jednom smjeru za Pariz? Bilo bi strašno zgodno ostaviti sve neugodnosti iza sebe tako. Sumnjam da bi Vas zakon ikad pronašao tamo!",
    color: "#fa000c",
  },
  {
    id: 4,
    characterName: "Lilly",
    dialogText:
      "Gledaj, dušo, ne bih ni očekivala da ti to razumiješ jer nisi odavde. Ali ja jesam, rođena i odrasla ovdje, i ovaj grad nije za žene s ambicijama. Želim glamur, želim luksuz, želim proputovati svijet! Želim život veći od Potoka Duhova. (Uzdiše)",
    color: "#ed8c12",
  },
  {
    id: 5,
    characterName: "William",
    dialogText:
      "Pa, mogu razumjeti zašto bi htjela napustiti mjesto poput Potoka Duhova u kojem buja grijeh, ali što ima loše u tome da postaneš domaćica? Živiš dobar, pošten život, s mladićem možda poput onog na toj slici?",
    color: "#0077ff",
  },
  {
    id: 6,
    characterName: "Lilly",
    dialogText:
      "(Oštro) Nisam htjela ponovno proživljavati te uspomene jer su još uvijek previše bolne. Čovjek na slici... (Uzdiše) je moj brat. Bio je samo nekoliko godina mlađi od mene, ali preminuo je prošle godine. (Tužno) Bio je rudar, na izvidnici na planini ne daleko od tvog bivšeg ranča, Clara. Dogodila se velika eksplozija, dinamit je bio neispravan. Nakon što je umro, zaklela sam se da neću ostati u ovom gradu i potratiti svoj život.",
    color: "#ed8c12",
  },
  {
    id: 7,
    characterName: "William",
    dialogText:
      "Pa. (Pročisti grlo) Žao mi je zbog toga, gospođo. Sjetio sam se tog incidenta sad kad ste ga spomenuli. Mnogo je dobrih duša izgubljeno tog dana. Nisam mislio izazvati nikakvu uvredu.",
    color: "#0077ff",
  },
  {
    id: 8,
    characterName: "Clara",
    dialogText:
      "(Sarkastično) To te nikad prije nije zaustavilo, William. Nema potrebe da mijenjaš svoju cjeloživotnu naviku sada!",
    color: "#000000",
  },
  {
    id: 9,
    characterName: "William",
    dialogText:
      "(Oštro) Nisam ovdje da stječem prijatelje, gospođice Cassidy. Ovdje sam da pomognem očistiti ovaj grad pun grijeha. Ako uvrijedim jednu ili dvije osobe putem, pa, to je sve u opisu mog posla.",
    color: "#0077ff",
  },
  {
    id: 10,
    characterName: "Earl",
    dialogText:
      "(Prepredeno) Oh, da? Kao kad si htio izbaciti Gunnera Woodsa iz grada jer je preskočio misu dva tjedna zaredom?",
    color: "#3e00ff",
  },
  {
    id: 11,
    characterName: "William",
    dialogText:
      "Kako si to...? (Pročisti grlo) Nije me briga za njegov nedostatak predanosti. Ako osoba dopusti da joj standardi padnu, može uslijediti svaka vrsta grijeha! Ali nisam htio da ga 'protjeramo iz grada', samo sam ušao u prilično... vatrenu raspravu s velečasnim o moralnim propustima gospodina Woodsa nakon nedjeljne službe. Ali to je bio privatan razgovor. Kako si, za ime svijeta, saznao za to?",
    color: "#0077ff",
  },
  {
    id: 12,
    characterName: "Earl",
    dialogText:
      "(Smijući se) Oči i uši, Bille. Ja sam oči i uši ovog grada i nemoj da to zaboraviš!",
    color: "#3e00ff",
  },
  {
    id: 13,
    characterName: "Sawyer",
    dialogText:
      "(Smiješeći se Lilly) Hajde da se vratimo na bitno. Sada, sudeći po ovom pismu, pretpostavljam da Rogers ne bi dobro reagirao na ideju da ti odlaziš?",
    color: "#00ff2d",
  },
  {
    id: 14,
    characterName: "Lilly",
    dialogText:
      "(Odmahujući rukom s prezirom) Ne obraćam pažnju na Averyjevu ogorčenost! Idem u Pariz i to je to. Imam novca da platim svoj put i kartu s mojim imenom na njoj. On je samo ljubomoran kučkin...",
    color: "#ed8c12",
  },
  {
    id: 15,
    characterName: "Scarlett",
    dialogText: "(Bijesno se ubacuje) Jezik!",
    color: "#fa000c",
  },
  {
    id: 16,
    characterName: "Lilly",
    dialogText:
      "(Zaglađuje si kosu) Oprostite, gospođice Scarlett. Navikla sam na njegove prazne prijetnje i na to da uznemiruje ostale muškarce za koje plešem.",
    color: "#ed8c12",
  },
  {
    id: 17,
    characterName: "Earl",
    dialogText:
      "Ali to nisu samo prazne prijetnje, Lilly. Bio sam tamo jednom kada ti je prijetio, čuo sam cijelu stvar! Kunem se, bio je na jedan korak od toga da te zaključa samo da ostaneš!",
    color: "#3e00ff",
  },
  {
    id: 18,
    characterName: "Lilly",
    dialogText:
      "(Ljutito) Oh, je li i to u tvojoj knjizi, Earl? Nisam vidjela ni trunku ove- 'brige' kada je prijetio da će iskopat oči Billyju Rayu preda mnom jer je prev'še buljio u mene!",
    color: "#ed8c12",
  },
  {
    id: 19,
    characterName: "Scarlett",
    dialogText: "(Zadihano maše lepezom) Rekao je što?",
    color: "#fa000c",
  },
  {
    id: 20,
    characterName: "Clara",
    dialogText:
      "(Smijući se) Brzo, donesite mirisne soli! Gospođica Scarlett će se onesvijestiti!",
    color: "#000000",
  },
  {
    id: 21,
    characterName: "Scarlett",
    dialogText:
      "(Sarkastično) Ne cijenim Vaš ton! (Pročisti grlo, smirujući se) Gospođice Hart, ne zvuči kao da bi gospodin Rogers bio voljan pustiti Vas. Zna li on za vaše planove da napustite Potok Duhova?",
    color: "#fa000c",
  },
  {
    id: 22,
    characterName: "Lilly",
    dialogText:
      "Pa, ako su Earl i njegova velika usta imala ikakve veze s tim, kladim se da je čuo neka šaptanja o tome. Mada mu nisam to rekla otvoreno. Iskreno, moj plan je bio da zaradim svoj novac, a zatim spakiram svoje torbe i uskočim u prvi vlak za dokove. Nisam namjeravala nikome reći. (Tužno) Bez mog brata, nemam više obitelji ovdje, nikakvih veza.",
    color: "#ed8c12",
  },
  {
    id: 23,
    characterName: "Scarlett",
    dialogText:
      "(Hladeći se lepezom) Pa, kao dama sa skupim ukusom, mogu Vam reći da život u Parizu neće biti jeftin! Sumnjam da Vam je plesanje u krčmi u zabiti omogućilo sredstva koja su Vam potrebna za Vaš odabrani stil života. Možda ste mislili da biste mogli iznuditi novac od gospodina Rogersa prije nego što odete, ili – i stvarno mrzim što ću damu optužiti za to – možda ste čak planirali opljačkati ga i ubiti prije nego što uskočite u taj vlak!",
    color: "#fa000c",
  },
  {
    id: 24,
    characterName: "Lilly",
    dialogText:
      "(Smijući se) To je smiješno! (Tiho) Vidi, gospodin me blagoslovio s pobjedničkim osmijehom i s više tvrdoglavosti nego magarca. Možda svi mislite da je to naivno, ali ovo će uspjeti!",
    color: "#ed8c12",
  },
  {
    id: 25,
    characterName: "William",
    dialogText:
      "(Strogo) Nemojmo uvlačiti dobrog Gospodina u ovu raspravu, dobro? Recimo da je, bez da je to znao, gospodin Rogers financirao ovaj tvoj ludi plan. Sad kada zna, tko kaže da neće pokušati uzeti taj novac kako bi te prisilio da ostaneš?",
    color: "#0077ff",
  },
  {
    id: 26,
    characterName: "Clara",
    dialogText:
      "Da, kada Avery nešto želi, obično to i dobije, bez obzira na to tko mu stane na put. Taj čovjek je toliko svadljiv da bi mogao započeti svađu u praznoj kući.",
    color: "#000000",
  },
  {
    id: 27,
    characterName: "Sawyer",
    dialogText:
      "Iz iskustva znam kakav postane muškarac kada nešto drži na oku. Zaista, sjećam se kada sam morao loviti kupca koji mi je pobjegao. Pratio sam ga po cijeloj državi, za ono što mi s pravom pripada! (Pročisti grlo) Dakle, uh, što želim reći je, ako bi Rogers učinio sve što je u njegovoj moći da Vas zaustavi, možda biste i Vi učiniti sve što je u Vašoj moći da njega zaustavite!",
    color: "#00ff2d",
  },
  {
    id: 28,
    characterName: "Earl",
    dialogText:
      "(Ubacujući se) Da, i za razliku od većine nas, kladim se da bi mu se mogla sasvim približiti i srediti ga, a on ne bi ni posumnjao!",
    color: "#3e00ff",
  },
  {
    id: 29,
    characterName: "Lilly",
    dialogText:
      "(Ljutito) Hej, sad začepi – neću ovakvo nepoštovanje! Mislim da ste se svi zabavili sad. Vrijeme je da se pređe na sljedećeg jadnog nesretnika.",
    color: "#ed8c12",
  },
];


//END
