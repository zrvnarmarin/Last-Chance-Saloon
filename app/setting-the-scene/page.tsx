import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="bg-black text-white w-full text-center uppercase py-4 text-4xl">
        Setting the scene
      </h2>
      <br /><br />
      {settingTheSceneText.map(text =>
        <p>{text}</p>
      )}
      <Link href={`/main-game/starters`} className="border-2 border-[#ffffff] text-black bg-white p-8">Link na Starters</Link>

    </div>
  );
}

export const settingTheSceneText = [
  "Kolovoz je 1885. godine u prašnjavom pionirskom gradu Potoku Duhova, a putujuća gatara traži gdje bi utažila žeđ. Otvara škripava drvena vrata Saluna posljednje prilike. Unutra šestero ljudi tiho ispija svoja pića, svak izgubljen u vlastitim mislima.",
  "Gatara naruči čaj – rasuti – i sjedne za prazan stol. Njeno ime je Madame Celeste i putuje zemljom proričući budućnost znatiželjnim klijentima. Predvidjela je brakove, gorke prekide, uspjehe i bolne gubitke, i nikad, ali nikad nije pogriješila.",
  'Čaj stiže i ona ga pije u dugim, pohlepnim gutljajima. Pogleda u razmočene listiće čaja koji se i dalje drže za šalicu i ispusti prodoran vrisak. “Vidim smrt!” Madame Celeste zavapi. "Vidim čovjeka... čovjeka iz ovog grada, ubijenog! Vidim ubojstvo!” Tada tiho, ali odlučno doda: “Bogati čovjek – najbogatiji u gradu – bit će ubijen do kraja ovog dana, a to će učiniti netko iz ove sobe!”',
  "Zapanjeni, šestero gostiju međusobno se pogledava. Najbogatiji čovjek u gradu? Pa to mora da je Avery Rogers, vlasnik najvećeg ranča u Potoku Duhova. Smatra ga se podmuklim, nepoštenim, jednostavno zlim. Neki kažu da bi Avery Rogers prodao i vlastitu majku za novčić i laštenje cipela. Stekao je mnogo neprijatelja u Potoku Duhova, uključujući i nekoga u ovoj sobi. Ali koga je previše pritisnuo? Jedno je sigurno – ako se budući ubojica uskoro ne otkrije, Avery Rogers bit će mrtav prije zalaska sunca, a Potokom Duhova će zavladati potpuni kaos.",
];
