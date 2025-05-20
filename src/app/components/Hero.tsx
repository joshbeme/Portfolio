"use client";
import React, { useState } from "react";
import Image from "next/image";
import HeroImage from "@src/assets/8-bit-josh.png";
import useCompanyName from "@src/app/hooks/useCompanyName";

interface HeroProps {
  title: string;
  subtitle: string;
}

const CompanyTag = ({
  onClick,
  text,
}: {
  onClick: () => void;
  text: string;
}) => {
  return (
    <a
      onClick={onClick}
      style={{ display: "inline-block" }}
      className="absolute nes-pointer text-center inline-block text-sm left-[52%] bottom-[40vw] sm:bottom-1/3 z-50 nes-balloon from-left"
    >
      Welcome {text}!
    </a>
  );
};

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  const currentCompany = useCompanyName();
  const [textBubble, setTextBubble] = useState(currentCompany.length > 1);
  const closeBubble = () => {
    setTextBubble(false);
  };
  return (
    <section className="relative flex flex-col flex-center content-center items-center ">
      <div className="pt-32 text-4xl relative nes-container flex justify-center items-start w-full h-[75vh] bg-[url(/HeroImage1.png)] bg-center bg-cover overflow-hidden">
        {/* place text here if you want for a hero title */}
        <div
          onClick={closeBubble}
          className="nes-container nes-pointer bg-white/60 border-s-black rounded-full absolute -bottom-10 sm:-bottom-12 overflow-hidden max-w-[360px] mx-16"
        >
          <Image
            src={HeroImage}
            alt="Hero Image"
            className="scale-90"
            style={{ imageRendering: "pixelated" }}
          />
        </div>
        {textBubble && (
          <CompanyTag onClick={closeBubble} text={currentCompany} />
        )}
      </div>
      <h1 className="flex nes-badge absolute -bottom-8 sm:-bottom-10 text-2xl sm:text-3xl z-20">
        <span className="is-primary nes-text left-0 right-0 bottom-0 top-0 self-center">
          About Me
        </span>
      </h1>
    </section>
  );
};

export default Hero;
