"use client";
import {
  EXPERIENCE_ACCORDION_ID,
  SKILLS_ACCORDION_ID,
} from "@src/app/constants";
import Experience from "./Experience";
import Footer from "./Footer";
import Hero from "./Hero";
import Summary from "./Summary";
import TechnicalSkills from "./TechnicalSkills";
import Accordion from "./Accordion";
import { AccordionProvider } from "@src/app/contexts/AccordionContext";

const Main = () => {
  return (
    <main>
      <AccordionProvider>
        <Hero title="" subtitle="" />
        <Summary />
        <Accordion id={EXPERIENCE_ACCORDION_ID} title="Experience">
          <Experience />
        </Accordion>
        <Accordion id={SKILLS_ACCORDION_ID} title="Skills">
          <TechnicalSkills />
        </Accordion>
        <Footer />
      </AccordionProvider>
    </main>
  );
};

export default Main;
