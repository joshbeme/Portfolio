"use client";
import { memo, useEffect, useMemo, useState } from "react";
import classNames from "classnames";
import { useAccordion } from "../contexts/AccordionContext";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  id: string;
};
const Accordion = ({ id, title, children }: AccordionProps) => {
  const { isOpen, toggleAccordion, openIds } = useAccordion();
  const open = useMemo(() => isOpen(id || ""), [isOpen, id]);
  const [contentClassNames, setContentClassNames] = useState("scale-y-0");

  console.log("openIds", openIds);
  const handleClick = () => {
    toggleAccordion(id || "");
  };

  useEffect(() => {
    let current = true;
    if (open) {
      setContentClassNames("scale-y-0");
      setTimeout(() => {
        if (current) setContentClassNames("scale-y-100");
      }, 0);
    } else {
      setContentClassNames("scale-y-0 invisible");
      setTimeout(() => {
        if (current) setContentClassNames("!hidden");
      }, 150);
    }
    return () => {
      current = false;
    };
  }, [open, id]);
  return (
    <div id={id} className="w-full relative">
      <button
        className="relative accordion-header w-full text-center py-6 px-6 mt-4 text-lg font-semibold border-black border-t-4 border-b-4 bg-gray-300 text-black hover:bg-gray-200  hover:-translate-y-[1px]  hover:shadow-2xl transition-all duration-200 ease-linear"
        onClick={handleClick}
        aria-expanded={open}
      >
        <h3 className="text-2xl sm:text-4xl m-0">{title}</h3>
      </button>
      <div
        className={classNames(
          "transition-all duration-75 ease-out relative overflow-hidden origin-top ",
          contentClassNames,
          {
            "": !open,
          }
        )}
      >
        {children}
      </div>
    </div>
  );
};
Accordion.displayName = "Accordion";

export default Accordion;
