"use client";
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

type AccordionContextType = {
  openIds: Set<string>;
  setOpenIds: React.Dispatch<React.SetStateAction<Set<string>>>;
  toggleAccordion: (id: string, override?: boolean) => void;
  isOpen: (id: string) => boolean;
};

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
);

type AccordionProviderProps = {
  children: ReactNode;
  initialOpenIds?: string[];
};

export const AccordionProvider = ({
  children,
  initialOpenIds,
}: AccordionProviderProps) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(initialOpenIds));

  const toggleAccordion = useCallback(
    (id: string, override?: boolean) => {
      setOpenIds((prev) => {
        const next = new Set(prev);

        // If override is true, set the open state based on the override value
        if (typeof override === "boolean" && override) {
          next.add(id);
          return next;
        } else if (typeof override === "boolean" && !override) {
          next.delete(id);
          return next;
        }

        // If no override is provided, toggle the id
        if (next.has(id)) next.delete(id);
        else next.add(id);
        return next;
      });
    },
    [setOpenIds]
  );

  const isOpen = useCallback((id: string) => openIds.has(id), [openIds]);

  const contextValue: AccordionContextType = {
    openIds,
    toggleAccordion,
    isOpen,
    setOpenIds,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      {children}
    </AccordionContext.Provider>
  );
};

export const useAccordion = (): AccordionContextType => {
  const ctx = useContext(AccordionContext);
  if (!ctx) {
    throw new Error("useAccordion must be used within an AccordionProvider");
  }
  return ctx;
};
