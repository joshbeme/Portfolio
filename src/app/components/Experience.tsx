import React, { useState } from "react";
import resume from "@src/resume.json";
import Image, { StaticImageData } from "next/image";
import tree from "@src/assets/tree.png";
import flame from "@src/assets/flame-1.png";
import block from "@src/assets/block.png";
import townCenter from "@src/assets/town-center.png";
import classNames from "classnames";

const mapCompanyToImage: { [string: string]: StaticImageData } = {
  FilmFreeway: tree,
  Tinder: flame,
  "Minecraft Launcher": block,
  "Engage Town": townCenter,
};

const mapCompanyToStyles: { [string: string]: string } = {
  FilmFreeway: "bg-FilmFreeway",
  Tinder: "bg-Tinder",
  "Minecraft Launcher": "bg-Minecraft",
  "Engage Town": "bg-EngageTown",
};

const tinder = "#ff4458";
const FilmFreeway = "#21b581";
const Minecraft = "#d0c5c0";
const EngageTown = "#fb1150";

const Description = ({ company }: { company: string }) => {
  const description = resume.experience.find(
    (experience) => experience.company === company
  );
  const img = mapCompanyToImage[company];
  const sty = mapCompanyToStyles[company];

  if (!description) return null;
  const { period, title, responsibilities } = description;

  return (
    <div
      className={classNames(
        "nes-container overflow-hidden  h-full p-2 md:p-8 relative bg-white z-10"
      )}
    >
      <div className=" h-full overflow-y-auto overflow-x-hidden  relative z-10">
        <h3 className="text-2xl underline">{company}</h3>
        <p>{title}</p>
        <p>{period}</p>
        <ul className="relative ">
          {responsibilities.map((highlight: string, index: number) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </div>
      <Image
        src={img.src}
        alt={company}
        width={img.width / 2}
        height={img.height / 2}
        className="absolute inline-block bottom-0 opacity-70 z-0 left-1/3 translate-y-1/3  "
      />
    </div>
  );
};

const Experience: React.FC = () => {
  const [activeCompany, setActiveCompany] = useState<string>("Tinder");
  const img = mapCompanyToImage[activeCompany];
  const styleColor = mapCompanyToStyles[activeCompany];

  const handleClick = (company: string) => {
    setActiveCompany(company);
  };

  const bg = "bg-[#f7d51d]";
  return (
    <section className="bg-top bg-cover bg-[url(/Brick.png)] flex flex-col px-0 md:px-8 py-14 lg:px-40 lg:py-28 nes-container">
      <div
        className={classNames(
          "w-full text-center pb-10  bg-transparent text-white"
        )}
      >
        <h3 className="text-4xl">Experience</h3>
      </div>
      <div className="flex p-0 nes-container h-[500px] overflow-hidden bg-transparent">
        <div className="w-32 md:w-72 xl:w-96 relative p-0 border-r-4 border-black -top-1 -bottom-1 h-[101%] bg-white">
          {/* quest selector */}
          {resume.experience.map((experience, index: number) => (
            <button
              key={experience.title}
              onClick={() => handleClick(experience.company)}
              className={classNames(
                "nes-btn text-black text-sm py-4 px-4 w-full -left-1 z-1 xl:text-lg",
                {
                  [`border-r-0 border-r-white selected after:!shadow-[inset,-4px,0px,white] after:!mr-0 ${
                    mapCompanyToStyles[experience.company]
                  }`]: experience.company === activeCompany,
                }
              )}
            >
              <h3>{experience.company}</h3>
            </button>
          ))}
        </div>

        <div
          className={classNames(
            "flex-1 h-100 overflow-auto p-2 md:p-8 z-1",
            styleColor
          )}
        >
          {/* quest  description */}
          <Description key={activeCompany} company={activeCompany} />
          {/* <Image
          src={img.src}
          alt={activeCompany}
          width={img.width / 2}
          height={img.height / 2}
          className="absolute bottom-0 opacity-80 z-0 left-1/2 translate-y-1/3  "
        /> */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
