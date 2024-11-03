import React, { useCallback, useMemo, useState } from "react";
import resume from "@src/resume.json";
import classNames from "classnames";

type SkillBadgeProps = {
  index: number;
  length: number;
  children: string;
};
const SkillBadge = ({ children, index, length }: SkillBadgeProps) => {
  const sides = ["left", "right", "top", "bottom"];
  const isTop = index <= 2;
  const isRight = useMemo(() => {
    const remainder = length % 3;
    if (remainder !== 0 && length - 1 === index) return index === length - 1;
    return (index + 1) % 3 === 0;
  }, [index, length]);
  const isLeft = (index + 3) % 3 === 0;
  const isBottom = useMemo(() => {
    const remainder = length % 3;
    if (remainder === 0) return index >= length - 3;
    return length - remainder > index + 1;
  }, [length, index]);

  const HalfSegment = ({
    position,
  }: {
    position: "top" | "bot" | "left" | "right";
  }) => (
    <span
      aria-hidden="true"
      data-testing={position}
      className={`absolute inline-block rounded-none z-0 bg-black b ${
        position === "bot" && "w-1 h-20 sm:h-40 -bottom-8 sm:-bottom-20"
      } ${position === "top" && "w-1 h-20 sm:h-40 -top-8 sm:-top-20"} ${
        position === "left" && "h-1 w-20 sm:w-40 -left-8 sm:-left-16"
      } ${position === "right" && "h-1 w-20 sm:w-40 -right-8 sm-right-0"}`}
    />
  );

  return (
    <li className="relative z-10 before:hidden flex flex-col align-center p-2 sm:p-5 items-center justify-center  overflow-hidden">
      {isBottom && <HalfSegment position="bot" />}
      {!isLeft && <HalfSegment position="left" />}
      {!isRight && <HalfSegment position="right" />}
      {!isTop && <HalfSegment position="top" />}

      <span className="hover:shadow-3xl hover:cursor-pointer hover:border-white transition-transform bg-[#f7d51d] border-black nes-container z-0 h-[90px] w-[90px] text-3xs sm:text-xs sm:w-[140px] sm:h-[140px]  relative m-0 p-0 text-center flex flex-col items-center justify-center is-primary ">
        {children}
      </span>
    </li>
  );
};
const titleByFirstSkill = (skill: string) => {
  switch (skill) {
    case "Javascript":
      return "General Skills";
    case "Typescript":
      return "Frontend Skills";
    case "AWS Elastic BeanStalk":
      return "Backend Skills";
    default:
      return "";
  }
};

const { technical_skills: technicalSkills } = resume;

const skills = [
  {
    skills: technicalSkills.general,
    backgroundUrl: "bg-[url(/DarkTown5.png)] bg-right",
  },
  {
    skills: technicalSkills.frontend,
    backgroundUrl: "bg-[url(/DarkTown2.png)] bg-left",
  },
  {
    skills: technicalSkills.backend,
    backgroundUrl: "bg-[url(/DarkTown3.png)] bg-right",
  },
];
// const center = 0;

const TechnicalSkills: React.FC = () => {
  const [center, setCenter] = useState(1);
  const right = center === 2 ? 0 : center + 1;
  const left = center === 0 ? 2 : center - 1;

  // console.log({ sortedSkills: sortedSkills.map(({ skills }) => skills[0]) });
  const bgColor = "bg-[#92cc41]";
  return (
    <section className=" flex flex-col p-0 border-y-4 border-black ">
      {/* <h1 className="text-3xl font-bold mb-10 text-center underline">Skills</h1> */}

      <div className="w-full items-center justify-items-center relative h-screen">
        <div
          className={`relative w-full h-[1200px]  ${"bg-[url(/Farm.png)] bg-center"}  bg-cover overflow-hidden after:h-full after:w-full after:scale-110 after:origin-top after:absolute after:top-0 after:left-0 after:bg-[url(/fence4.png)] after:bg-center after:bg-cover after:z-0 after:opacity-90 after:pointer-events-none`}
        >
          {skills.map(({ skills, backgroundUrl }, index) => {
            const isRight = index === right;
            const isLeft = index === left;
            return (
              <div
                key={backgroundUrl}
                onClick={() => {
                  setCenter(index);
                }}
                className={classNames(
                  " absolute transition-all duration-500 ease-in-out transform top-1/2 -translate-x-1/2 -translate-y-1/2",
                  {
                    "left-1/2 z-10  ": index === center,
                    "left-1/4 z-0 scale-[0.6]": isLeft,
                    "left-3/4 z-0 scale-[0.6]": isRight,
                  }
                )}
              >
                <h2 className="max-w-[700px] w-full text-2xl font-bold mb-2 text-center inline-block text-white">
                  {titleByFirstSkill(skills[0])}
                </h2>
                <ul
                  className={classNames(
                    "max-w-[700px] min-w-[529px] scale-90 bg-white p-2 sm:p-5 nes-list is-disc nes-container grid grid-cols-[1fr,1fr,1fr] list-none ",
                    {
                      "shadow-2xl": index === center,
                    }
                  )}
                >
                  {skills.map((skill, index) => (
                    <SkillBadge
                      index={index}
                      length={skills.length}
                      key={skill}
                    >
                      {skill}
                    </SkillBadge>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
