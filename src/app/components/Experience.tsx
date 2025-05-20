"use client";
import React, { useState } from "react";
import classNames from "classnames";
import { FaBars, FaLaptop, FaCalendar } from "react-icons/fa";
import resume from "@src/resume.json";
import Image, { StaticImageData } from "next/image";
import tree from "@src/assets/tree.png";
import flame from "@src/assets/flame-1.png";
import block from "@src/assets/block.png";
import townCenter from "@src/assets/town-center.png";

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
        "nes-container flex flex-col overflow-hidden p-4 md:p-8  h-full  relative bg-white z-10 scrollbar-thumb-rounded-full scrollbar-thumb-stone-400 hover:scrollbar-thumb-stone-500"
      )}
    >
      <h3 className="text-lg sm:text-xl md:text-2xl underline">{company}</h3>
      <div className=" h-full  overflow-auto relative z-10 flex-1">
        <p className="text-sm sm:text-lg mb-4">
          <FaLaptop className="inline -mr-2" /> {title}
        </p>
        <p className="text-sm sm:text-lg mb-4">
          <FaCalendar className="inline mr-2" />
          {period}
        </p>

        <div className="lists">
          <ul className="relative nes-list is-disc pl-5 pr-1 tracking-tighter">
            {responsibilities.map((highlight: string, index: number) => (
              <li key={index} className="mb-3 text-xs sm:text-sm">
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Image
        src={img.src}
        alt={company}
        width={img.width / 2}
        height={img.height / 2}
        className="absolute inline-block bottom-0 opacity-20 z-0 left-1/3 translate-y-1/3  "
      />
    </div>
  );
};

const Experience: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [activeCompany, setActiveCompany] = useState<string>("Tinder");
  const img = mapCompanyToImage[activeCompany];
  const styleColor = mapCompanyToStyles[activeCompany];

  const handleClick = (company: string) => {
    const isSelected = activeCompany === company;
    if (isSelected) setIsOpen(false);
    setActiveCompany(company);
  };

  const bg = "bg-[#f7d51d]";
  return (
    <section
      className={classNames(
        "bg-top bg-cover bg-[url(/Brick.png)] flex flex-col p-2 sm:p-5 lg:p-10 border-t-4 border-black"
      )}
    >
      <div
        className={classNames(
          "nes-container w-full text-center pb-6 border-b-0",
          styleColor,
          {
            "text-black": activeCompany === "Minecraft Launcher",
            "text-white": activeCompany !== "Minecraft Launcher",
          }
        )}
      >
        <h3 className="text-2xl sm:text-4xl">Experience</h3>
      </div>
      <div className="flex p-0 nes-container h-[500px] overflow-hidden bg-transparent">
        <div
          className={classNames(
            " max-w-44 sm:max-w-72 xl:max-w-96 relative p-0 border-r-4 border-black -top-1 -bottom-1 h-[101%]", // border-r-4 border-black",
            styleColor,
            {
              "": !isOpen,
              "": isOpen,
            }
          )}
        >
          {/* quest selector */}
          {resume.experience.map((experience, index: number) => (
            <button
              key={experience.title}
              onClick={() => handleClick(experience.company)}
              className={classNames(
                "nes-btn text-black py-4 px-4 w-full -left-1 z-1 text-xs sm:text-lg",
                {
                  ["border-r-0 border-r-white selected after:!shadow-[inset,-4px,0px,white] after:!mr-0 "]:
                    experience.company === activeCompany,
                  [mapCompanyToStyles[experience.company]]:
                    experience.company === activeCompany,
                  " text-white":
                    experience.company === activeCompany &&
                    experience.company !== "Minecraft Launcher",

                  hidden: !isOpen,
                }
              )}
            >
              <h3>{experience.company}</h3>
            </button>
          ))}
          {/* Hamburger menu for mobile */}
          {!isOpen && (
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="text-md md:text-xl lg:text-2xl nes-btn is-secondary m-4 p-2 md:p-3"
            >
              <FaBars className={classNames("")} />
            </button>
          )}
        </div>

        <div
          className={classNames(
            "flex-1 h-100 overflow-auto p-2 md:p-8 z-1",
            styleColor
          )}
        >
          {/* quest  description */}
          <Description key={activeCompany} company={activeCompany} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
