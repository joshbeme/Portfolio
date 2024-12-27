import React, { memo, useMemo, useState } from "react";
import classNames from "classnames";
import resume from "@src/resume.json";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type SkillBadgeProps = {
  index: number;
  length: number;
  children: string;
};
const SkillBadge = memo(({ children, index, length }: SkillBadgeProps) => {
  const sides = ["left", "right", "top", "bottom"];
  const isTop = index <= 2;
  const isRight = useMemo(() => {
    const remainder = length % 3;
    if (remainder !== 0 && length - 1 === index) return index === length - 1;
    return (index + 1) % 3 === 0;
  }, [index, length]);
  const isLeft = index % 3 === 0;
  const isBottom = useMemo(() => {
    const remainder = length % 3;
    if (remainder === 0) return index >= length - 3;
    return length - remainder > index + 1;
  }, [length, index]);
  console.log(isLeft, index);

  const HalfSegment = ({
    position,
  }: {
    position: "top" | "bot" | "left" | "right";
  }) => (
    <span
      aria-hidden="true"
      data-testing={position}
      className={`absolute inline-block rounded-none z-0 bg-black b ${
        position === "bot" && "w-1 h-20 md:h-40 -bottom-8 md:-bottom-20"
      } ${position === "top" && "w-1 h-20 md:h-40 -top-8 md:-top-20"} ${
        position === "left" && "h-1 w-20 md:w-40 -left-8 md:-left-16"
      } ${position === "right" && "h-1 w-20 md:w-40 left-1/2 "}`}
    />
  );

  return (
    <li className="relative z-10 before:hidden flex flex-col align-center p-2 md:p-3 items-center justify-center  overflow-hidden">
      {isBottom && <HalfSegment position="bot" />}
      {!isLeft && <HalfSegment position="left" />}
      {!isRight && <HalfSegment position="right" />}
      {!isTop && <HalfSegment position="top" />}

      <span className="hover:shadow-3xl hover:cursor-pointer hover:border-white transition-transform bg-[#f7d51d] border-black nes-container z-0 h-[90px] w-[90px] text-3xs md:text-xs md:w-[140px] md:h-[140px]  relative m-0 p-0 text-center flex flex-col items-center justify-center is-primary ">
        {children}
      </span>
    </li>
  );
});
SkillBadge.displayName = "SkillBadge";
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

const bgColor = "bg-[#92cc41]";

const TechnicalSkills: React.FC = () => {
  const [center, setCenter] = useState(1);
  const right = center === 2 ? 0 : center + 1;
  const left = center === 0 ? 2 : center - 1;

  return (
    <section className=" flex flex-col p-0 border-y-4 border-black ">
      <div className="w-full items-center justify-items-center relative">
        <div className="relative w-full h-[800px] md:h-[1000px] bg-[url(/Farm.png)] bg-center bg-cover overflow-hidden after:inline after:h-full after:w-full after:scale-125 after:origin-top after:absolute after:top-0 after:left-0 after:bg-[url(/fence4.png)] after:bg-center after:bg-cover after:z-0 after:opacity-90 after:pointer-events-none">
          {skills.map(({ skills, backgroundUrl }, index) => {
            const isRight = index === right;
            const isLeft = index === left;
            return (
              <>
                <div
                  key={backgroundUrl}
                  onClick={() => {
                    setCenter(index);
                  }}
                  className={classNames(
                    " absolute transition-all duration-500 ease-in-out transform top-1/2 -translate-x-1/2 -translate-y-1/2",
                    {
                      "left-1/2 z-10": index === center,
                      "left-1/4 z-0 scale-[0.6]": isLeft,
                      "left-3/4 z-0 scale-[0.6]": isRight,
                    }
                  )}
                >
                  <h2 className="max-w-[700px] w-full text-lg sm:text-2xl font-bold mb-2 text-center inline-block text-white">
                    {titleByFirstSkill(skills[0])}
                  </h2>
                  <ul
                    className={classNames(
                      "max-w-[700px] min-w-[338px] md:min-w-[524px] scale-90 bg-white p-2 md:p-3 nes-list is-disc nes-container grid grid-cols-[1fr,1fr,1fr] list-none ",
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
              </>
            );
          })}{" "}
          <button
            aria-label="Scroll carousel left"
            onClick={() => setCenter(left)}
            className="nes-btn is-primary p-1 md:p-5 absolute left-1 md:left-[10%] top-1/2 transform -translate-y-1/2 text-4xl text-white cursor-pointer z-10 opacity-50 hover:opacity-100"
          >
            <FaArrowLeft className="" />
          </button>
          <button
            aria-label="Scroll carousel right"
            onClick={() => setCenter(right)}
            className="nes-btn is-primary p-1 md:p-5 absolute right-1 md:right-[10%] top-1/2 transform -translate-y-1/2 text-4xl text-white cursor-pointer z-10 opacity-50 hover:opacity-100"
          >
            <FaArrowRight className="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
