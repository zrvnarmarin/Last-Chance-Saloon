import { CharacterIntroductionsType } from "../types";

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

export const firstChunkOfDialogs = [
  {
    id: 1,
    characterName: "Earl Colton",
    color: "#3e00ff", // Earl's color from characterIntroductions
    dialogText: `Znate, gospodine Hargreaves, cijelo ste ovo vrijeme bili užasno tihi. Sjećate se
      onog gospodina Johnsa, plašljivog malog bankovnog činovnika? Uhvatili su ga sa
      zamjenikovom ženom, namazali su ga katranom, posuli perjem i protjerali iz grada! S
      razlogom se kaže da su uvijek tihi momci ti koji imaju najviše za sakriti...`,
  },
  {
    id: 2,
    characterName: "Clara Cassidy",
    color: "#000000", // Clara's color from characterIntroductions
    dialogText: `(Toči još jedno piće) Iz mog iskustva, svi su momci krivi kao grijeh.`,
  },
  {
    id: 3,
    characterName: "Scarlett May Beauregard",
    color: "#fa000c", // Scarlett's color from characterIntroductions
    dialogText: `Ignorirajte ju, gospodine Hargreaves, ali biste li bili tako ljubazni udovoljiti
      nam?`,
  },
  {
    id: 4,
    characterName: "William Hargreaves",
    color: "#d0ff00", // William's color from characterIntroductions
    dialogText: `Pa, volio bih da se zna da sam protiv ovog... ovog bogohuljenja. U cijelom
      svom životu, nikad nisam čuo za nešto poput pokušaja predviđanja ubojstva..
      (Mrmlja) Ovaj grad ide ravno u pakao, u košari!`,
  },
];

export const firstHostText = [
  "William Hargreaves izloži svoje stvari kako bi svi igrači mogli diskutirati o njima",
  "Zatim, ostajući u liku, igrači naizmjence ispituju Williama o predmetima koje posjeduje",
  "Igrači mogu postavljati pitanja o bilo kojem predmetu, a William mora pokušati dati uvjerljiv razlog zašto ih posjeduje",
  "Nakon što ispitivanje završi, scenarij se nastavlja",
];

export const secondChunkOfDialogs = [
  {
    id: 1,
    characterName: "Sawyer West",
    color: "#00ff2d", // Sawyer's color from characterIntroductions
    dialogText: `Vidio sam neke ljude na svojim putovanjima kako nose neke čudne stvari sa
      sobom, ali nisam siguran da vjerujem u Vaše isprike! Zar ne bi bilo sigurnije samo
      ostaviti nož kod pogrebnika! Vrlo je opasno nositi tu stvar okolo...`,
  },
  {
    id: 2,
    characterName: "Lilly Hart",
    color: "#ed8c12", // Lilly's color from characterIntroductions
    dialogText: `Upravo tako! Tko kaže da se ne bi mogao samo prišuljati iza Averyja i...`,
  },
  {
    id: 3,
    characterName: "Scarlett May Beauregard",
    color: "#fa000c", // Scarlett's color from characterIntroductions
    dialogText: `(Prekida razgovor dramatično podižući ruku na čelo kao da će se
      onesvijestiti) Molim vas, nema potrebe da budete tako slikoviti!`,
  },
  {
    id: 4,
    characterName: "Clara Cassidy",
    color: "#000000", // Clara's color from characterIntroductions
    dialogText: `(Koluta očima) Saberi se! No, Lilly ima pravo. Nož je jednako dobro oružje za
      ubojstvo kao i bilo koje drugo, a ne trebaju mu ni meci ni ništa.`,
  },
  {
    id: 5,
    characterName: "Sawyer West",
    color: "#00ff2d", // Sawyer's color from characterIntroductions
    dialogText: `Što je s tom bocom etera? Čujem da te stvari čovjeka mogu vrlo lako
      onesvijestiti. Avery bi bio preslab i da ubije komarca ako bi samo nekoliko puta to
      udahnuo!`,
  },
  {
    id: 6,
    characterName: "William Hargreaves",
    color: "#d0ff00", // William's color from characterIntroductions
    dialogText: `(Brbljajući) Ovo je nečuveno! Nema nikakvog zlokobnog razloga zašto su te
      stvari kod mene. Tehnički, u velikim dozama, eter se može koristiti kao anestezija, ali
      ja ga koristim za smirivanje živaca ožalošćenih. A nož, pa, često me zovu da
      pripremim tijela jadnih duša koje su se susrele s nesretnim krajevima.`,
  },
  {
    id: 7,
    characterName: "Clara Cassidy",
    color: "#000000", // Clara's color from characterIntroductions
    dialogText: `(Frkne od smijeha) Kako smo mogli zaboraviti! Zato si ti gradski bauk!`,
  },
  {
    id: 8,
    characterName: "Earl Colton",
    color: "#3e00ff", // Earl's color from characterIntroductions
    dialogText: `(Smije se) Kako ono ide ona rima koju mladi pjevaju? (Pjevajućim glasom)
      "Noćas nas dobro zaključaj tata, jer gospodin Hargreaves dolazi na vrata. Rasjeći će
      nas i odsjeći nam glavu, neće čekat smrt, bili su u pravu!"`,
  },
  {
    id: 9,
    characterName: "William Hargreaves",
    color: "#d0ff00", // William's color from characterIntroductions
    dialogText: `(Odlučno) Djeca bi trebala više ići u crkvu, a manje smišljati glupe pjesmice
      na igralištu! Možda imam reputaciju da sam strog, ali držim se po strani i pokušavam
      živjeti tihi život, slobodan od grijeha. Nemam razloga nikome željeti zlo.`,
  },
  {
    id: 10,
    characterName: "Sawyer West",
    color: "#00ff2d", // Sawyer's color from characterIntroductions
    dialogText: `(Smije se) Ne kupujem ono što prodaješ! Pogledajte te biblijske odlomke –
      upoznao sam neke fanatike u svoje vrijeme, ali Vi ste, gospodine, priča za sebe.`,
  },
  {
    id: 11,
    characterName: "Scarlett May Beauregard",
    color: "#fa000c", // Scarlett's color from characterIntroductions
    dialogText: `Čak ste i sami rekli, gospodine Hargreaves, da mislite da Avery kvari grad i
      truje umove svih jadnih grešnika koji ovdje žive. Možda smatrate svojom moralnom
      dužnošću da... "otjerate vraga iz grada", da tako kažem?`,
  },
  {
    id: 12,
    characterName: "Lilly Hart",
    color: "#ed8c12", // Lilly's color from characterIntroductions
    dialogText: `(Kolutajući očima) Vi južnjačke ljepotice i vaši maniri. Dušo, ako ga optužuješ da
      planira ubit Averyja, moraš to reći jasno i glasno.`,
  },
  {
    id: 13,
    characterName: "William Hargreaves",
    color: "#d0ff00", // William's color from characterIntroductions
    dialogText: `(Strogo) Samo sam mu namjeravao dostaviti te stranice kao podsjetnik na to
      da još nije kasno za pokajanje! Mislim da nećete naći zakona protiv pokušaja
      spašavanja nečije duše od vječnog prokletstva. Kao pogrebnik, znam što takav brzi
      način života može učiniti čovjeku. Samo želim pomoći svoj svojoj braći i sestrama da
      ugledaju svjetlo!`,
  },
  {
    id: 14,
    characterName: "Clara Cassidy",
    color: "#000000", // Clara's color from characterIntroductions
    dialogText: `Pomalo, pomalo! Čula sam od nekolicine ljudi u gradu kako im se voliš unositi
      u lice i govor't im zaš su oni samo hrpa zlih grešnika. Krotka i blaga, noga moja!`,
  },
  {
    id: 15,
    characterName: "Earl Colton",
    color: "#3e00ff", // Earl's color from characterIntroductions
    dialogText: `(radosno) Pogledajte ovo! Avery ima neplaćeni račun! Oh, ovo je veća stvar
      nego kad je stara gospođa Simpson uhvaćena dok je pokušavala ukrasti teglu
      štapića peperminta iz trgovine!`,
  },
  {
    id: 16,
    characterName: "Sawyer West",
    color: "#00ff2d", // Sawyer's color from characterIntroductions
    dialogText: `Vidi ti to! Znate, novac je podjednako jak motiv kao i svaki drugi da nekog
      pošaljete dva metra pod zemlju.`,
  },
  {
    id: 17,
    characterName: "William Hargreaves",
    color: "#d0ff00", // William's color from characterIntroductions
    dialogText: `Što god vi ljudi mislili o meni, ja baš i ne volim previše tračati o nečijim
      privatnim stvarima. (Nevoljko) Ali, da, kupio je od mene grobno mjesto i još nije
      podmirio svoj dug.`,
  },
  {
    id: 18,
    characterName: "Clara Cassidy",
    color: "#000000", // Clara's color from characterIntroductions
    dialogText: `Pa, nije li to kap koja je prelila čašu! "Ne kradi, plaćaj svoje račune", ili što
      god sveta knjiga kaže. Kladim se da te to raspizdilo, pogotovo zato što je on
      najpretenciozniji čovjek u gradu!`,
  },
  {
    id: 19,
    characterName: "William Hargreaves",
    color: "#d0ff00", // William's color from characterIntroductions
    dialogText: `Ne mogu reći da me to zabavlja, ne. Ako čovjek ima dug, treba ga platiti. Svi
      ostali u gradu, izgleda, mogu platiti svoje dugove, ali najbogatiji čovjek u Potoku
      Duhova očekuje da se može neprestano zaduživati! (Mrmlja) Nije ostalo puno čestitih
      ljudi u ovom jadnom gradu.`,
  },
  {
    id: 20,
    characterName: "Earl Colton",
    color: "#3e00ff", // Earl's color from characterIntroductions
    dialogText: `Znaš, Bille, živiš u ovom gradu čak duže i od mene. Jesi li oduvijek smatrao
      sebe boljim od ljudi koji ovdje žive?`,
  },
  {
    id: 21,
    characterName: "William Hargreaves",
    color: "#d0ff00", // William's color from characterIntroductions
    dialogText: `(Tužno) Ovo je nekad bio tako dobar grad, pun poštenih, bogobojaznih ljudi.
      Bio sam ovdje od osnutka grada i vidio sam kako se mijenja otkako je Avery Rogers
      počeo otkupljivati svu zemlju, razbacivati se novcem i upuštati se u... nekulturno
      ponašanje.`,
  },
  {
    id: 22,
    characterName: "Earl Colton",
    color: "#3e00ff", // Earl's color from characterIntroductions
    dialogText: `(Smijući se) Jesi l’ čuo za onaj put kad je proveo dan nalijevajući se šljivom, a
      onda je pokušao vitlati lasom i zavezati ruke i noge službeniku u trgovini? Na sreću,
      bio je previše naliven da bi normalno razmišljao, ali taj momak još uvijek bude blijed
      kao krpa kadgod rodeo dođe u grad!`,
  },
  {
    id: 23,
    characterName: "William Hargreaves",
    color: "#d0ff00", // William's color from characterIntroductions
    dialogText: `(Neodobravajući) To nije način na koji bi se jedan gospodin trebao ponašati.`,
  },
  {
    id: 24,
    characterName: "Scarlett May Beauregard",
    color: "#fa000c", // Scarlett's color from characterIntroductions
    dialogText: `(Mršteći se prema Earlu) Slažem se, uopće nije smiješno! Zašto niste
      napustili Potok Duhova ako Vas čini tako nesretnim? Zasigurno mora postojati neki
      drugi grad koji je više u skladu s Vašim načinom razmišljanja!`,
  },
  {
    id: 25,
    characterName: "William Hargreaves",
    color: "#d0ff00", // William's color from characterIntroductions
    dialogText: `Zašto bih ja bio taj koji mora otići? Ovdje sam izgradio svoj život, svoj biznis
      –zaslužujem biti ovdje! Averyjevo nepošteno, razmetljivo ponašanje pravi sprdnju od
      svega što Sveto pismo promiče, ja jednostavno... jednostavno ne znam što da
      napravim po tom pitanju.`,
  },
  {
    id: 26,
    characterName: "Clara Cassidy",
    color: "#000000", // Clara's color from characterIntroductions
    dialogText: `Onda možda nosiš taj nož u slučaju da te inspiracija pogodi, ha, doktore?
      Nema sumnje. Nijedan božji čovjek ne bi trebao nositi takve stvari okolo sa sobom.`,
  },
  {
    id: 27,
    characterName: "William Hargreaves",
    color: "#d0ff00", // William's color from characterIntroductions
    dialogText: `(Strogo) Ako sam fanatik kakvim me smatraš, onda je sigurno najmanja
      vjerojatnost da ja počinim ubojstvo? Iskreno sumnjam da ste vidjeli unutrašnjost
      crkve već neko vrijeme, gospođice Cassidy, ali čak ćete se i Vi sjetiti da je ubojstvo
      ultimativni grijeh.`,
  },
  {
    id: 28,
    characterName: "Lilly Hart",
    color: "#ed8c12", // Lilly's color from characterIntroductions
    dialogText: `Ali ako ste mislili da spašavate dušu grada, pročišćavanje ovog mjesta bi Vas
      učinilo nekom vrstom heroja, zar ne?`,
  },
  {
    id: 29,
    characterName: "Sawyer West",
    color: "#00ff2d", // Sawyer's color from characterIntroductions
    dialogText: `Pa, kladim se da biste čak mogli namjestiti da to izgleda kao nesreća!
      Pronaći neku posebnu arteriju ili nešto da polako iskrvari kako ne bi privuklo pažnju!`,
  },
  {
    id: 30,
    characterName: "Lilly Hart",
    color: "#ed8c12", // Lilly's color from characterIntroductions
    dialogText: `(Zapanjeno) Što za ime svijeta...?`,
  },
  {
    id: 31,
    characterName: "Sawyer West",
    color: "#00ff2d", // Sawyer's color from characterIntroductions
    dialogText: `(Pročišćava grlo) Uh, pročitao sam puno krimića na svojim putovanjima.
      Ubojice u tim pričama uvijek pronađu neobičan način da prekriju svoje tragove.`,
  },
  {
    id: 32,
    characterName: "William Hargreaves",
    color: "#d0ff00", // William's color from characterIntroductions
    dialogText: `(Oštro) Drži se terenske prodaje svoje budalaste vode i ostavi anatomiju
      onima koji su je izučavali. Ovo je izvan svakih granica. Čovjekova djela sudi samo
      jedna osoba, a ja nikad ne bi bogohulio tako što bih napravio od sebe krvnika!
      (Slabašno) Mislim da ću uzeti tu sarsaparilu sad, molim, gospodine Colton.`,
  },
  {
    id: 33,
    characterName: "Lilly Hart",
    color: "#ed8c12", // Lilly's color from characterIntroductions
    dialogText: `Gospođice Scarlett, izgledate malo blijedo. Pretpostavljam da je sva ta priča o
      rezanju na šnite i kockice učinila svoje, ha? Vjerojatno je najbolje da si ti iduća na
      redu, prije nego što padneš u nesvijest s te barske stolice pa će ti još Earl trebati
      mesti piljevinu s kose.`,
  },
];

export const secondHostText = [
  "Scarlett May Beauregard izloži svoje stvari kako bi svi igrači mogli diskutirati o njima.",
  "Zatim, ostajući u liku, igrači naizmjence ispituju Scarlett o predmetima koje posjeduje.",
  "Igrači mogu postavljati pitanja o bilo kojem predmetu, a Scarlett mora pokušati dati uvjerljiv razlog zašto ih posjeduje.",
  "Nakon što ispitivanje završi, scenarij se nastavlja.",
];

export const thirdChunkOfDialogs = [
  {
    id: 1,
    characterName: "Sawyer West",
    color: "#00ff2d",
    dialogText: `Možda uče vas debitantice kako se nakloniti i lijepo sjediti, ali bome vas ne
      uče kako lagati!`,
  },
  {
    id: 2,
    characterName: "Scarlett May Beauregard",
    color: "#fa000c",
    dialogText: `(Odmahujući kosom) Zasigurno ne znam o čemu govorite!`,
  },
  {
    id: 3,
    characterName: "Clara Cassidy",
    color: "#000000",
    dialogText: `A što je s ovom šiljatom stvarčicom ovdje? Nisam znala da vi južnjačke žene
      nosite ukrašene bodeže?`,
  },
  {
    id: 4,
    characterName: "Scarlett May Beauregard",
    color: "#fa000c",
    dialogText: `To je igla za šešir, i trebala bi biti šiljata. Da nije, šešir bi mi pao ravno s
      glave!`,
  },
  {
    id: 5,
    characterName: "Earl Colton",
    color: "#3e00ff",
    dialogText: `Pogledajte ovu ovdje kartu za vlak. Čini se da malo kasniš na svoj vlak za
      povratak u Južnu Karolinu. Što te sprječava da ne odjuriš natrag svojoj palači i
      sluškinjama?`,
  },
  {
    id: 6,
    characterName: "Clara Cassidy",
    color: "#000000",
    dialogText: `(Sarkastično) Ha, očito se zadržala zbog fine kulture Potoka Duhova. Kladim
      se da još nije popila ni popodnevni čaj s Buckom Vadizubom.`,
  },
  {
    id: 7,
    characterName: "Lilly Hart",
    color: "#ed8c12",
    dialogText: `Dušo, ovdje, u ovom gradu strašno upadaš u oči. Šta uopće radiš u Potoku
      Duhova?`,
  },
  {
    id: 8,
    characterName: "Scarlett May Beauregard",
    color: "#fa000c",
    dialogText: `To zaista ne bi trebala biti vaša stvar, ali prvi put sam došla u Potok Duhova
      prije nekoliko mjeseci s obitelji jer je moj tatica tražio zemljište za potencijalnu novu
      željezničku prugu. Pa, doslovno sam bila izvan sebe koliko mi je bilo dosadno! Nema
      se što raditi u ovom gradu s jednom jedinom trgovinom, pa sam i sama malo
      istraživala i naišla na nešto mnogo zanimljivije!`,
  },
  {
    id: 9,
    characterName: "Earl Colton",
    color: "#3e00ff",
    dialogText: `(Sarkastično) Grad s dvije trgovine?`,
  },
  {
    id: 10,
    characterName: "Sawyer West",
    color: "#00ff2d",
    dialogText: `(Raširenih očiju) Što si našla? Zlato? Zakopano blago?`,
  },
  {
    id: 11,
    characterName: "Scarlett May Beauregard",
    color: "#fa000c",
    dialogText: `(Sanjivo) Ne baš, ali on zasigurno vrijedi kao zlato!`,
  },
  {
    id: 12,
    characterName: "Clara Cassidy",
    color: "#000000",
    dialogText: `(Praveći grimase) Uh, može još jedno piće, Earl, i slobodno ostavi bocu ovaj
      put. Trebat će mi.`,
  },
  {
    id: 13,
    characterName: "Lilly Hart",
    color: "#ed8c12",
    dialogText: `Ne obaziri se na Claru, nema sumnje da je samo ljubomorna. (Pokazuje na
      fotografiju) Dakle, pretpostavljam da je ovaj ovdje zgodni gospodin razlog zašto se
      još motaš ovdje?`,
  },
  {
    id: 14,
    characterName: "Scarlett May Beauregard",
    color: "#fa000c",
    dialogText: `(Hladeći se lepezom) Strašno je zgodan, zar ne? Upoznala sam Rydera tek
      prošlog mjeseca i moram reći da je zarobio moje srce! Nitko koga znam nije poput
      njega, on je tako... slobodan! Možda je siromašniji od crkvenog miša, ali je pun
      avanture i uzbuđenja. Osjećam se kao da sam prije nego što sam upoznala Rydera
      samo mjesečarila čitav život!`,
  },
  {
    id: 15,
    characterName: "William Hargreaves",
    color: "#d0ff00",
    dialogText: `Taj momak mi izgleda poznato. Je li iz ovih krajeva?`,
  },
  {
    id: 16,
    characterName: "Scarlett May Beauregard",
    color: "#fa000c",
    dialogText: `(Oprezno) Živi u Potoku Duhova, da.`,
  },
  {
    id: 17,
    characterName: "William Hargreaves",
    color: "#d0ff00",
    dialogText: `Znam da sam već vidio njegovo lice...`,
  },
  {
    id: 18,
    characterName: "Scarlett May Beauregard",
    color: "#fa000c",
    dialogText: `(Nervozno se smijući) Pa, naravno da jeste! Ako živi ovdje, onda bi ga
      očigledno prepoznali! Iskreno rečeno, baš glupa izjava!`,
  },
  {
    id: 19,
    characterName: "William Hargreaves",
    color: "#d0ff00",
    dialogText: `(Oštro) Nemoj me vrijeđati, mlada damo. Trebali biste imati više poštovanja
      prema starijima. Ono što sam htio reći je da sam već vidio tu fotografiju negdje. U
      svakom slučaju, mislim da izgleda kao smutljivac. Taj dečko, ima vraga u očima!`,
  },
  {
    id: 20,
    characterName: "Lilly Hart",
    color: "#ed8c12",
    dialogText: `Prekini s tim, Williame. Nije svatko koga pogledaš bezvrijedni grešnik!`,
  },
  {
    id: 21,
    characterName: "Earl Colton",
    color: "#3e00ff",
    dialogText: `Mislim da bi William mogao biti u pravu u ovom slučaju. Znam gdje sam već
      vidio tu sliku. (Ustaje i zgrabi "Traži se" poster s mjesta gdje je skriven) Bacite oko na
      ovo! (Samodopadno) Izgleda da je Vaš novi dečko traženi čovjek.`,
  },
  {
    id: 22,
    characterName: "William Hargreaves",
    color: "#d0ff00",
    dialogText: `Pa to je isti čovjek! Mora da sam prošao pored te slike u pošti desetak puta.
      Gospode, smiluj se, zaljubljeni ste u zločinca?`,
  },
  {
    id: 23,
    characterName: "Clara Cassidy",
    color: "#000000",
    dialogText: `(Smijući se) Ne mogu vjerovati! Ovdje piše da je on pošteni kradljivac stoke!`,
  },
  {
    id: 24,
    characterName: "Scarlett May Beauregard",
    color: "#fa000c",
    dialogText: `On nije zločinac, sve je ovo jedan veliki nesporazum! Imam dogovoren
      sastanak sa šerifom sutra i samo ću sve ovo razjasniti. Ali, moj bože, gospodine
      Colton, zašto za ime svijeta uopće imate ovo?`,
  },
  {
    id: 25,
    characterName: "Earl Colton",
    color: "#3e00ff",
    dialogText: `(Lukavo) Držim sve gradske postere s traženim osobama iza šanka kako bih
      znao koga trebam paziti. U gradu stvarno ima loših kukolja, zar ne znate?`,
  },
  {
    id: 26,
    characterName: "Scarlett May Beauregard",
    color: "#fa000c",
    dialogText: `(Ljutito) Vi, gospodine, lažete kao pas!`,
  },
  {
    id: 27,
    characterName: "William Hargreaves",
    color: "#d0ff00",
    dialogText: `(Zapanjeno) Gospođice Scarlett! Trebao sam znati. Nitko nema takav temperament
      kao prezrena dama s Juga!`,
  },
  {
    id: 28,
    characterName: "Lilly Hart",
    color: "#ed8c12",
    dialogText: `Momci, jeste li gotovi s provociranjem gospođice Scarlett? Sad, kažete da se
      sastajete sa šerifom – istim onim šerifom kojeg Avery plaća iz vlastitog džepa?
      Shvaćate li da tu nagradu financira Avery? Što mislite koliko će taj sastanak biti
      uspješan?`,
  },
  {
    id: 29,
    characterName: "Scarlett May Beauregard",
    color: "#fa000c",
    dialogText: `(Emotivno) Ryder ne bi povrijedio ni muhu, a sada ga progone kao nekog
      kriminalca!`,
  },
  {
    id: 30,
    characterName: "Sawyer West",
    color: "#00ff2d",
    dialogText: `Recimo na trenutak da je to istina. Zašto bi Rogers htio pretvoriti ovog
      jadnog nevinog kauboja u metu vrijednu 200 dolara?`,
  },
  {
    id: 31,
    characterName: "Scarlett May Beauregard",
    color: "#fa000c",
    dialogText: `Ne znam zašto! Gospodin Rogers je loš čovjek, zar to nije ono što svi stalno
      govorite? Što bi ga spriječilo da baci jadnog čovjeka lavovima samo da dokaže koliko
      je moćan?`,
  },
  {
    id: 32,
    characterName: "Clara Cassidy",
    color: "#000000",
    dialogText: `(Klimajući glavom u znak slaganja) Avery je zlobno smeće, to Vam priznajem.`,
  },
  {
    id: 33,
    characterName: "Sawyer West",
    color: "#00ff2d",
    dialogText: `A što je s ovim pismom od Averyja? Izgleda da ste se već upoznali s njim,
      pa nam nemojte pokušavati mazati oči!`,
  },
  {
    id: 34,
    characterName: "Earl Colton",
    color: "#3e00ff",
    dialogText: `Sad kad to spominjete, sjećam se da sam čuo neki razgovor ne tako davno.
      Avery je bjesnio zbog neke dame. Mislio sam da govori o Lilly, ali možda ste to bili Vi!`,
  },
  {
    id: 35,
    characterName: "Scarlett May Beauregard",
    color: "#fa000c",
    dialogText: `Upoznala sam gospodina Rogersa nedugo nakon što sam stigla u Potok
      Duhova. Razmijenili smo nekoliko "Kako ste", ali naši susreti su uvijek bili uljudni.
      Jednostavno ne znam zašto se ovo događa!`,
  },
  {
    id: 36,
    characterName: "Clara Cassidy",
    color: "#000000",
    dialogText: `Imam prilično dobru ideju. Ili tvoj dragi laže o tom kol’ko je moralan, il’ si ti ta
      koja laže...`,
  },
  {
    id: 37,
    characterName: "Scarlett May Beauregard",
    color: "#fa000c",
    dialogText: `(Zapanjeno uzdahne) Ja?`,
  },
  {
    id: 38,
    characterName: "Sawyer West",
    color: "#00ff2d",
    dialogText: `Zgodna žena poput Vas, kladim se da ste potpuno izludili Rogersa. Možda
      ste ga, kad je saznao da ste bili s gospodinom Smithom, naljutili dovoljno da učini
      nešto ludo!`,
  },
  {
    id: 39,
    characterName: "Scarlett May Beauregard",
    color: "#fa000c",
    dialogText: `(Ljutito) To je apsurdno! Ne moram ovdje stajati i trpjeti ovakvo poniženje!`,
  },
  {
    id: 40,
    characterName: "Lilly Hart",
    color: "#ed8c12",
    dialogText: `(Šaleći se) Pa, sada znamo da je temperamentna!`,
  },
  {
    id: 41,
    characterName: "Earl Colton",
    color: "#3e00ff",
    dialogText: `(Cerekajući se) Imate Vi puno slojeva, gospođice Scarlett, to Vam moram
      priznati. Nisam siguran da su svi oni posebno ugodni, ipak...`,
  },
  {
    id: 42,
    characterName: "Scarlett May Beauregard",
    color: "#fa000c",
    dialogText: `(Mašući lepezom) U nekoliko se navrata gospođica Cassidy jako zabavljala
      činjenicom da padam u nesvijest pri samom spomenu (Šapćući) krvi. Svakako je
      jasno da nisam sposobna počiniti ubojstvo!`,
  },
  {
    id: 43,
    characterName: "Sawyer West",
    color: "#00ff2d",
    dialogText: `Zasigurno sam vidio čudnijih stvari, posebno u svom poslu. Ali nisam onaj
      koji bi uznemirivao damu, pa bismo možda trebali prijeći na sljedeću osobu?`,
  },
  {
    id: 44,
    characterName: "William Hargreaves",
    color: "#d0ff00",
    dialogText: `(Uzdišući) Ajmo samo pokušati završiti ovu grozotu prije nego što svi
      postanemo prokleti.`,
  },
];
