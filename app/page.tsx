import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-24">
      <h2 className="text-white w-full text-center uppercase py-4 text-4xl">
        NASLOV IGRE
      </h2>

      <div className="grid grid-cols-3 place-items-center gap-6">
        {characterColors.map((characterColor) => (
          <Link
            href={`/secrets/${formatCharacterName(
              characterColor.characterName
            )}`} // Use the function to format the name
            key={characterColor.id}
            className="rounded-full border-black border-2 p-4 text-center"
            style={{ backgroundColor: characterColor.color }} // Use inline style for dynamic colors
          >
            {characterColor.characterName}
          </Link>
        ))}
      </div>
    </div>
  );
}

// Function to format the character name
const formatCharacterName = (name: string) => {
  return name.toLowerCase().replace(/\s+/g, "-");
};

export const characterColors: CharacterColor[] = [
  {
    id: 1,
    color: "#000000",
    characterName: "Clara Cassidy",
  },
  {
    id: 2,
    color: "#ed8c12",
    characterName: "Lilly Hart",
  },
  {
    id: 3,
    color: "#fa000c",
    characterName: "Scarlett May Beauregard",
  },
  {
    id: 4,
    color: "#3e00ff",
    characterName: "Earl Colton",
  },
  {
    id: 5,
    color: "#00ff2d",
    characterName: "Sawyer West",
  },
  {
    id: 6,
    color: "#d0ff00",
    characterName: "William Hargreaves",
  },
];

export type CharacterColor = {
  id: number;
  color: string;
  characterName: string;
};
