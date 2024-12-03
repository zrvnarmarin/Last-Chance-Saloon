import React from "react";
import { belgrano } from "@/app/layout";
import Link from "next/link";
import { StainButton } from "@/app/page";
import { characterIntroductions, firstChunkOfDialogs, firstHostText, secondChunkOfDialogs, secondHostText, thirdChunkOfDialogs } from './../../data/startersData';

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