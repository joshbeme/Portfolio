import React from "react";
import resume from "@src/resume.json";

const Summary = ({}) => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[3fr,2fr,3fr] gap-10 lg:h-[25vh] mt-8 sm:mt-4  mb-12 sm:mb-4 px-4 text-center">
      <div className="hidden sm:flex flex-col sm:flex-row justify-between m-auto">
        <div className="flex flex-col items-center justify-end p-4">
          <i className="mb-1 nes-octocat animate" />6 years experience
        </div>
        {/* <div className="flex flex-col items-center justify-end p-4">
          <i className="mb-1  nes-ash animate" />
          <span className="mt-1">JavaScript Expert</span>
        </div> */}
      </div>
      <div className="my-4 lg:my-0 mx-10 lg:mx-0 -order-1 lg:order-none flex flex-col justify-center h-full text-center">
        <h2 className="text-xl font-bold">{resume.name}</h2>
        <hr className="my-5 h-1 border-none bg-black" />
        <p className="">{resume.profession}</p>
      </div>
      <div className="hidden sm:flex flex-col sm:flex-row justify-between m-auto">
        {/* <div className="flex flex-col items-center justify-end p-4">
          <i className="mb-1 nes-kirby" />
          Fullstack Developer
        </div> */}
        <div className="flex flex-col items-center justify-end p-4">
          <i className="mb-1 nes-pokeball animate" />
          JavaScript Master
        </div>
      </div>
    </section>
  );
};

export default Summary;
