"use client";
import { memo, useEffect, useMemo, useRef, useState } from "react";
import classNames from "classnames";
import { useAccordion } from "@src/app/contexts/AccordionContext";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  id: string;
};

const Accordion = memo(({ id, title, children }: AccordionProps) => {
  const { isOpen, toggleAccordion, openIds } = useAccordion();
  const open = useMemo(() => isOpen(id || ""), [isOpen, id]);
  const mouseEntered = useRef(false);

  const [contentClassNames, setContentClassNames] = useState("hidden");
  const accordionContentID = useMemo(() => `${id}-content`, [id]);
  const accordionHeaderID = useMemo(() => `${id}-header`, [id]);

  const handleClick = () => {
    if (id) toggleAccordion(id);
  };

  useEffect(() => {
    let current = true;
    if (open) {
      setContentClassNames("h-0");
      setTimeout(() => {
        if (current && open) setContentClassNames("");
      }, 10);
    } else {
      setContentClassNames("h-0 ");
      setTimeout(() => {
        if (current && !open) setContentClassNames("hidden");
      }, 100);
    }
    return () => {
      current = false;
    };
  }, [open, id, setContentClassNames]);

  return (
    <div
      id={id}
      className={classNames(
        "w-full relative inline-block transition-all duration-200 ease-linear overflow-hidden",
        { "": !open }
      )}
      onMouseEnter={() => {
        mouseEntered.current = true;
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
          if (!open && mouseEntered.current) setContentClassNames("hidden");
        }, 150);
      }}
      onBlur={(e) => {
        mouseEntered.current = false;
      }}
    >
      <button
        type="button"
        className={classNames(
          "relative accordion-header w-full text-center py-6 px-6 mt-4 text-lg font-semibold border-black border-t-4 border-b-4 bg-gray-300 text-black hover:bg-gray-200 transition-all duration-200 ease-linear",
          {
            "hover:-translate-y-[1px]  hover:shadow-md": !open,
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
});

Accordion.displayName = "Accordion";

export default Accordion;
