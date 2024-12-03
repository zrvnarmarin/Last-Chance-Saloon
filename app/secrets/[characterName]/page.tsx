import Link from "next/link";
import React from "react";
import { belgrano } from "@/app/layout";
import { StainButton } from "@/app/page";
import { characterSecrets } from './../../data/secretsData';

export default function Home({
  params,
}: {
  params: { characterName: string };
}) {
  return (
    <div
      className={`flex flex-col items-center gap-6 pt-8 ${belgrano.className}`}
    >
      <h1 className="text-3xl uppercase text-[#6C0000] font-semibold underline decoration-[#6C0000] underline-offset-4">
        TVOJA TAJNA
      </h1>
      {/* <p className="text-2xl">{params.characterName}</p> */}
      {characterSecrets
        .filter((cs) => cs.characterName === params.characterName)
        .map((cs) => (
          <div key={cs.id} className="flex flex-col gap-2">
            <p className="text-[#6C0000] text-start px-6">{cs.characterSecret.generalSecretInfo}</p>
            <div className="flex flex-col gap-2">
              <p className="text-[#6C0000] text-start px-6 pb-2 pt-5">
                {
                  cs.characterSecret.characterPossessions
                    .characterPossessionsIntro
                }
              </p>
              <ul className="px-6">
                {cs.characterSecret.characterPossessions.characterPossessionsList.map(
                  (possession) => (
                    <li key={possession} className="flex items-start gap-2 text-[#6C0000] text-start ">
                      {/* Icon rendered with fixed size */}
                      <span>
                        <StarIcon />
                      </span>
                      {possession}
                    </li>
                  )
                )}
              </ul>
              <p className="text-[#6C0000] text-center px-6 pt-5 font-semibold">{cs.characterSecret.secretInstructions}</p>
            </div>
          </div>
        ))}

      {params.characterName === characterSecrets[5].characterName ? (
        <Link
          href={`/setting-the-scene`}
          className="text-black cursor-pointer pb-8"
        >
          <StainButton />
          {/* Link na Setting the scene */}
        </Link>
      ) : (
        <Link
          href={`/main-game/starters/`}
          className=" text-black cursor-pointer pb-8"
        >
          {/* Link na Starters */}
          <StainButton />
        </Link>
      )}
    </div>
  );
}

// export const characterSecrets = [
//   {
//     id: 1,
//     characterName: "clara-cassidy",
//     characterSecret: {
//       generalSecretInfo:
//         "Imala si vlastiti ranč koji ti je pružao sve što si željela u životu. No podmuklo poslovanje Averyja Rogersa prisililo te na prodaju i sve se raspalo. Danas utapaš svoju tugu u Salunu posljednje prilike proklinjući Rogersovo ime i ispaljujući hitce upozorenja na svakoga tko iskušava tvoju strpljivost. Najveće poniženje je to što si spala na korištenje svojih streljačkih vještina kako bi zaradila nešto novca sudjelujući u sporednoj predstavi na okružnom sajmu. Čak ni Annie Oakley nije pala tako nisko!",
//       characterPossessions: {
//         characterPossessionsIntro:
//           "U nekom trenutku tijekom igre, trebat ćeš improvizirati izgovore kako bi objasnila zašto tvoj lik nosi potencijalno inkriminirajuće predmete, uključujući: ",
//         characterPossessionsList: [
//           "do pola ispijenu bocu viskija",
//           "posudu duhana za žvakanje",
//           "metak na kojem je urezano 'Avery'",
//           "kartu na kojoj je zaokružen Rogersov novi ranč (tj. tvoj stari ranč)",
//           "letak za okružni sajam koji reklamira tvoju točku u sporednoj predstavi: 'Predstavljamo gospođicu Cassidy, razbojnicu sa šeširom, revolveraša u haljini!'",
//           "stari novinski isječak intervjua koji si dala kada si postala prva vlasnica ranča u okrugu",
//         ],
//       },
//       secretInstructions:
//         "Početna objašnjenja koja tvoj lik daje (koja ćeš ti improvizirati) bit će laži, a pravi razlozi bit će otkriveni kasnije u scenariju. Imajući to na umu, možeš davati koliko god divlje ili neobične odgovore želiš – samo moraš ostati u liku!",
//     },
//   },
//   {
//     id: 2,
//     characterName: "lilly-hart",
//     characterSecret: {
//       generalSecretInfo:
//         "Muka ti je od dosadnog života u Potoku Duhova i spremna si sve ostaviti iza sebe. Već neko vrijeme štediš od svoje plaće i napojnica iz saluna i sada napokon imaš dovoljno za kupiti kartu u jednom smjeru za Pariz, Francusku! Jedini problem je što je Avery Rogers jedan od tvojih najboljih klijenata na plesnim predstavama, a počeo je biti vrlo posesivan prema tebi. Ne bi bio previše zadovoljan kad bi čuo za tvoje planove o odlasku, ali ono što ne zna, ne može mu nauditi, zar ne?",
//       characterPossessions: {
//         characterPossessionsIntro:
//           "U nekom trenutku tijekom igre, trebat ćeš improvizirati izgovore kako bi objasnila zašto tvoj lik nosi potencijalno inkriminirajuće predmete, uključujući: ",
//         characterPossessionsList: [
//           "kartu u jednom smjeru za Pariz, s datumom polaska u idućih nekoliko tjedana",
//           "rukom pisano pismo od Averyja o bisernoj ogrlici koju ti je dao",
//           "mali revolver (držiš ga nenapunjenim, ali to ne smiješ spomenuti tijekom ispitivanja)",
//           "fotografiju mladića (ovo je tvoj brat, ali to ne smiješ spomenuti tijekom ispitivanja)",
//           "isječke skupih haljina iz francuskog modnog kataloga",
//         ],
//       },
//       secretInstructions:
//         "Početna objašnjenja koja tvoj lik daje (koja ćeš ti improvizirati) bit će laži, a pravi razlozi bit će otkriveni kasnije u scenariju. Imajući to na umu, možeš davati koliko god divlje ili neobične odgovore želiš – samo moraš ostati u liku!",
//     },
//   },
//   {
//     id: 3,
//     characterName: "scarlett-may-beauregard",
//     characterSecret: {
//       generalSecretInfo:
//         "Odgojena si kao ukočena i pristojna južnjačka ljepotica, ali želiš nešto više od toga. Tijekom obiteljskog posjeta Potoku Duhova zaljubiš se preko ušiju u Rydera Smitha, nevaljalog kauboja zlatnog srca. Međutim, put ljubavi nikada ne ide glatko, a i Avery te ima na oku. Posesivan i kontrolirajuć, odlučan je rastaviti tebe i Rydera smjesta te je izdao tjeralicu za Ryderom na temelju lažnih optužbi. Nećeš se odreći svoje nove ljubavi bez borbe i zato si ti ta koja planira ubiti Averyja Rogersa! Smatraš kako nitko ne bi posumnjao u nekoga tako nježnog kao što si ti.",
//       characterPossessions: {
//         characterPossessionsIntro:
//           "U nekom trenutku tijekom igre, trebat ćeš improvizirati izgovore kako bi objasnila zašto tvoj lik nosi potencijalno inkriminirajuće predmete, uključujući: ",
//         characterPossessionsList: [
//           "iglu za šešir",
//           "šminku",
//           "fotografiju mladića (ovo je Ryder Smith, ali to ne smiješ spomenuti tijekom ispitivanja)",
//           "pismo od Averyja Rogersa u kojem izražava želju da te ponovno vidi",
//           "kartu za povratak u Južnu Karolinu s datumom polaska prije mjesec dana",
//         ],
//       },
//       secretInstructions:
//         "Početna objašnjenja koja tvoj lik daje (koja ćeš ti improvizirati) bit će laži, a pravi razlozi bit će otkriveni kasnije u scenariju. Imajući to na umu, možeš davati koliko god divlje ili neobične odgovore želiš – samo moraš ostati u liku!",
//     },
//   },
//   {
//     id: 4,
//     characterName: "earl-colton",
//     characterSecret: {
//       generalSecretInfo:
//         "Voliš voditi računa o tome što se događa u Potoku Duhova pohranjujući tajne koje načuješ. To ti obično omogućuje da dobiješ ono što želiš – ali kada ti Avery Rogers kaže da namjerava otkupiti tvoj salun, znaš da ucjena neće upaliti. On je najmoćniji čovjek u gradu i ljudi misle ono što im on kaže da misle! Nisi siguran koji ti je sljedeći potez, ali znaš da bi radije bio dva metra pod zemljom nego se odrekao Saluna posljednje prilike!",
//       characterPossessions: {
//         characterPossessionsIntro:
//           "U nekom trenutku tijekom igre, trebat ćeš improvizirati izgovore kako bi objasnio zašto tvoj lik nosi potencijalno inkriminirajuće predmete, uključujući: ",
//         characterPossessionsList: [
//           "kutiju šibica",
//           "bocu terpentina",
//           "čahuru za pušku",
//           "pismo od Rogersovog odvjetnika u kojem se navodi klijentova namjera da kupi tvoj salun",
//           "stranice istrgnute iz tvoje tajne knjige s detaljima svih tračeva koje si načuo u baru",
//         ],
//       },
//       secretInstructions:
//         "Početna objašnjenja koja tvoj lik daje (koja ćeš ti improvizirati) bit će laži, a pravi razlozi bit će otkriveni kasnije u scenariju. Imajući to na umu, možeš davati koliko god divlje ili neobične odgovore želiš – samo moraš ostati u liku!",
//     },
//     disclaimer:
//       "Napomena: Tijekom scenarija za glavno jelo trebat ćeš predočiti skriveni trag. Domaćin će prethodno sakriti taj predmet te će ti tijekom predvečernjih pića tiho reći gdje se on nalazi. Dakle, kada se u scenariju zatraži, dohvati trag i stavi ga na stol da ga ostali igrači vide. ",
//   },
//   {
//     id: 5,
//     characterName: "sawyer-west",
//     characterSecret: {
//       generalSecretInfo:
//         "Revitalizirajući tonici tvrtke West i sinovi potpuna su prijevara - boce su napunjene ničim drugim nego vodom iz potoka, a ti napuštaš grad prije nego što itko od tvojih kupaca uspije posumnjati u tebe. Tvoja prevara te učinila bogatim, ali sve je pošlo po zlu u Južnoj Karolini kada je voda u tvojim bocama ozbiljno razboljela ljude, neke čak i ubila. Promijenio si svoje ime kako bi izbjegao optužbe, ali novi početak je skup, a ti si u totalnom bankrotu. Nadao si se uvući Averyja Rogersa u svoj sljedeći plan, ali čini se da on ne cijeni tvoju poslovnu domišljatost i sada postaješ očajan.",
//       characterPossessions: {
//         characterPossessionsIntro:
//           "U nekom trenutku tijekom igre, trebat ćeš improvizirati izgovore kako bi objasnio zašto tvoj lik nosi potencijalno inkriminirajuće predmete, uključujući: ",
//         characterPossessionsList: [
//           "kozmetičku torbicu s ravnom britvicom i ostalom opremom za brijanje",
//           "novinski članak o trovanju u Južnoj Karolini",
//           "knjigu s prikazom svih vaših troškova i 'Trebam prodaju uskoro!' napisanim i podcrtanim na dnu",
//           "nekoliko naljepnica za vaše boce tonika, svaka s drugačijim imenom tvrtke (one su dio tvog plana o promjeni imena tvrtke i izbjegavanju ljutitih kupaca, ali to ne smiješ spomenuti tijekom ispitivanja)",
//         ],
//       },
//       secretInstructions:
//         "Početna objašnjenja koja tvoj lik daje (koja ćeš ti improvizirati) bit će laži, a pravi razlozi bit će otkriveni kasnije u scenariju. Imajući to na umu, možeš davati koliko god divlje ili neobične odgovore želiš – samo moraš ostati u liku!",
//     },
//   },
//   {
//     id: 6,
//     characterName: "william-hargreaves",
//     characterSecret: {
//       generalSecretInfo:
//         "Tvoj prezir prema nedostatku morala u Potoku Duhova baš i nije tajna. Smatraš da su novac Averya Rogersa te njegov materijalizam i neotesano ponašanje odgovorni za moralni pad te daješ sve od sebe da ga vratiš na pravi put. Ostavljao si mu razne odlomke iz Biblije kako bi mu pomogao da uvidi svoje pogreške, ali bezuspješno. Ne znaš kako spasiti ovo nekoć sjajno mjesto, ali ne želiš ni napustiti svoj rodni grad kako bi pobjegao od izopačenosti.",
//       characterPossessions: {
//         characterPossessionsIntro:
//           "U nekom trenutku tijekom igre, trebat ćeš improvizirati izgovore kako bi objasnio zašto tvoj lik nosi potencijalno inkriminirajuće predmete, uključujući: ",
//         characterPossessionsList: [
//           "nož",
//           "bočicu etera",
//           "rupčić prekriven crvenim mrljama",
//           "stranicu iz tvoje knjige prodaje koja pokazuje da ti Avery Rogers treba platiti rezervirano grobno mjesto u iznosu od 300 dolara",
//           "biblijske odlomke o osveti i pravdi",
//         ],
//       },
//       secretInstructions:
//         "Početna objašnjenja koja tvoj lik daje (koja ćeš ti improvizirati) bit će laži, a pravi razlozi bit će otkriveni kasnije u scenariju. Imajući to na umu, možeš davati koliko god divlje ili neobične odgovore želiš – samo moraš ostati u liku!",
//     },
//   },
// ];

export const StarIcon = () => {
  return (
    <svg
      fill="#542A00"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#542A00"
      width={20}
      height={20} // Ensures fixed size
      className="w-[20px] h-[20px]" // Backup for Tailwind styling
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M16 4.588l2.833 8.719H28l-7.416 5.387 2.832 8.719L16 22.023l-7.417 5.389 2.833-8.719L4 13.307h9.167L16 4.588z"></path>
      </g>
    </svg>
  );
};
