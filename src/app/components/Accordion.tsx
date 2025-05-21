"use client";
import { useEffect, useMemo, useState } from "react";
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
  const accordionContentID = useMemo(() => `${id}-content`, [id]);
  const accordionHeaderID = useMemo(() => `${id}-header`, [id]);

  const handleClick = () => {
    toggleAccordion(id || "");
  };

  useEffect(() => {
    let current = true;
    if (open) {
      setContentClassNames("h-0");
      setTimeout(() => {
        if (current) setContentClassNames("");
      }, 10);
    } else {
      setContentClassNames("h-0 invisible");
      setTimeout(() => {
        if (current) setContentClassNames("!hidden");
      }, 150);
    }
    return () => {
      current = false;
    };
  }, [open, id]);

  return (
    <div
      id={id}
      className={classNames(
        "w-full relative inline-block transition-all duration-200 ease-linear overflow-hidden",
        { "": !open }
      )}
      onMouseEnter={() => {
        console.log("open", open);
        if (!open)
          setContentClassNames("h-0 -translate-y-1 border-b-4 border-black");
        setTimeout(() => {
          if (!open)
            setContentClassNames("h-4 -translate-y-1 border-b-4 border-black");
        }, 1);
      }}
      onMouseLeave={() => {
        if (!open) setContentClassNames("h-0");
        setTimeout(() => {
          if (!open) setContentClassNames("hidden");
        }, 150);
      }}
    >
      <button
        className={classNames(
          "relative accordion-header w-full text-center py-6 px-6 mt-4 text-lg font-semibold border-black border-t-4 border-b-4 bg-gray-300 text-black hover:bg-gray-200 transition-all duration-200 ease-linear",
          {
            "  hover:-translate-y-[1px]  hover:shadow-md": !open,
          }
        )}
        onClick={handleClick}
        aria-expanded={open}
        aria-controls={accordionContentID}
      >
        <h3 id={accordionHeaderID} className="text-2xl sm:text-4xl m-0">
          {title}
        </h3>
      </button>
      <div
        id={accordionContentID}
        role="region"
        aria-labelledby={accordionHeaderID}
        className={classNames(
          "transition-all duration-150 ease-out relative overflow-hidden origin-top bg-black",
          contentClassNames,
          {
            "border-b-4 border-black": open,
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
