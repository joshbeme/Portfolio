import React from "react";
import HeroImage from "@src/assets/8-bit-josh.png";
import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <section className="relative flex flex-col flex-center content-center items-center ">
      <div className="relative nes-container flex justify-center items-center w-full h-[75vh] bg-[url(/Town1.png)] bg-center bg-cover overflow-hidden">
        <div className="nes-container bg-white/60 border-s-black rounded-full absolute -bottom-10 sm:-bottom-12 overflow-hidden max-w-[360px] mx-16">
          <Image
            src={HeroImage}
            alt="Hero Image"
            className="scale-90"
            style={{ imageRendering: "pixelated" }}
          />
        </div>
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
