"use client";
import { useState } from "react";
import Main from "@src/app/components/Main";
import MusicButton from "./components/MusicButton";

const INITIAL_SITE =
  "<main class='bg-gray-900 p-8 text-white font-sans' style='font-family: monospace;'> <link href='https://unpkg.com/nes.css/css/nes.min.css' rel='stylesheet' /> <link href='https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css' rel='stylesheet'> <header class='mb-12'> <div class='nes-container is-rounded is-dark flex justify-between items-center p-4'> <div> <h1 class='text-4xl nes-text is-primary'>Joshua Owens</h1> <p class='text-lg'> <a href='mailto:JoshuaMOwens70@gmail.com' class='nes-link text-white'>JoshuaMOwens70@gmail.com</a> | <a href='https://github.com/joshbeme' class='nes-link text-white'>github.com/joshbeme</a> | (562)968-7713 </p> </div> <div class='nes-balloon from-right'> <p class='text-lg'>Lets-a go!</p> </div> </div> </header> <section class='mb-12'> <div class='nes-container is-rounded is-dark p-4'> <h2 class='text-3xl mb-4 nes-text is-primary'>Technical Skills</h2> <div class='grid grid-cols-1 md:grid-cols-2 gap-4'> <div> <h3 class='text-2xl mb-2 nes-text is-error'>General</h3> <ul class='list-disc pl-5'> <li>Object-oriented programming</li> <li>Data-oriented design</li> <li>Git version control</li> <li>REST APIs</li> <li>Jira Project Management</li> <li>GitHub Actions</li> <li>Design patterns</li> <li>Functional programming</li> </ul> </div> <div> <h3 class='text-2xl mb-2 nes-text is-error'>Frontend</h3> <ul class='list-disc pl-5'> <li>Modern JavaScript technologies: <a href='https://www.typescriptlang.org/docs/' class='nes-link text-white'>TypeScript</a>, <a href='https://reactjs.org/docs/getting-started.html' class='nes-link text-white'>React</a>, <a href='https://redux.js.org/' class='nes-link text-white'>Redux</a>, Async/Await, Flux, <a href='https://webpack.js.org/concepts/' class='nes-link text-white'>Webpack</a></li> <li>Graphics engine development for canvas</li> <li>Testable frontend code with <a href='https://jestjs.io/docs/getting-started' class='nes-link text-white'>Jest</a></li> <li>Web game development</li> <li>Progressive Web Apps: Service workers, IndexedDB, Notifications API</li> <li>WebAssembly with <a href='https://rustwasm.github.io/docs/book/' class='nes-link text-white'>Rust</a> and <a href='https://yew.rs/docs' class='nes-link text-white'>Yew</a></li> </ul> </div> <div> <h3 class='text-2xl mb-2 nes-text is-error'>Backend</h3> <ul class='list-disc pl-5'> <li>Server-side rendering</li> <li>Distributed Systems patterns</li> <li>REST/GraphQL API development</li> <li>Elasticsearch</li> <li>SQL databases: MySQL</li> <li> <a href='https://docs.docker.com/' class='nes-link text-white'>Docker</a></li> <li>Languages: JavaScript, TypeScript, Ruby, and Rust</li> <li>Web Frameworks: <a href='https://expressjs.com/' class='nes-link text-white'>Express</a>, <a href='https://nextjs.org/docs' class='nes-link text-white'>Next.js</a>, <a href='https://guides.rubyonrails.org/' class='nes-link text-white'>Ruby on Rails</a>, and <a href='https://rocket.rs/' class='nes-link text-white'>Rocket.rs</a></li> </ul> </div> </div> </div> </section> <section class='mb-12'> <div class='nes-container is-rounded is-dark p-4'> <h2 class='text-3xl mb-4 nes-text is-primary'>Experience</h2> <article class='mb-6'> <h3 class='text-2xl nes-text'>Tinder</h3> <h4 class='text-xl text-gray-400'>Full Stack Developer - Full Time (May 2022 – Present)</h4> <ul class='list-disc pl-5'> <li>Integrated CMS Contentful with safety and legal content, reducing developer time by 20 workdays per year on average through automating manual processes</li> <li>Implemented ban screens and ban token integration within our ban appeal center</li> <li>Updated Protobuf tools to increase developer velocity and remove deprecated package Prototool</li> <li>Migrated static site from being served on AWS to Netlify</li> </ul> </article> <article class='mb-6'> <h3 class='text-2xl nes-text'>Microsoft: Minecraft Launcher</h3> <h4 class='text-xl text-gray-400'>Software Development Engineer 2 - Contract (March 2021 – April 2022)</h4> <ul class='list-disc pl-5'> <li>Updated portions of the app’s architecture, allowing for a simpler and declarative interface when adding or updating Mojang games</li> <li>Maintained and updated skin rendering systems in <a href='https://threejs.org/docs/' class='nes-link text-white'>ThreeJS</a></li> <li>Fixed longstanding and complex bugs that were caused by message passing architecture between C++ backend and React frontend</li> <li>Proposed and implemented parallelization of CI/CD jobs to increase development velocity</li> </ul> </article> <article class='mb-6'> <h3 class='text-2xl nes-text'>FilmFreeway</h3> <h4 class='text-xl text-gray-400'>Software Engineer - Full Time (August 2019 – March 2021)</h4> <ul class='list-disc pl-5'> <li>Heavily impacted decoupling of frontend and backend in monolithic application, allowing our Ruby runtime to no longer use an embedded JavaScript runtime</li> <li>API development in Node.js and Ruby on Rails creating functionality like Recaptcha, festival notification management, and Internationalization</li> <li>Built a canvas graphics engine to generate images, saving thousands of dollars a year in CPU time. Built with React, Redux, and an Entity Component System architecture</li> <li>Implemented internationalization of currency on the client and in our Node.js backend</li> <li>Reduced bugs by creating and developing frontend testing environment and integrating TypeScript</li> </ul> </article> <article class='mb-6'> <h3 class='text-2xl nes-text'>EngageTown</h3> <h4 class='text-xl text-gray-400'>Front End Engineer - Full Time (January 2018 – August 2019)</h4> <ul class='list-disc pl-5'> <li>Led and reviewed frontend code</li> <li>Integrated PDF exporting of citizen feedback, used by Santa Monica city council during town meetings</li> <li>Feature development in React redux system such as client-side searching and filtering of aggregated data in the main feed</li> <li>Fixed longstanding state issues on the main feed which were preventing further development in that area</li> <li>Designed web app currently being developed separately from working product</li> </ul> </article> </div> </section> </main>";

export default function Home() {
  const [site, setSite] = useState("");
  return (
    <>
      <MusicButton site={site} setSite={setSite} />

      {site ? <div dangerouslySetInnerHTML={{ __html: site }} /> : <Main />}
    </>
  );
}
