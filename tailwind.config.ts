import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  // safelist: [{ pattern: /(.*?)/ }],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      body: ["Press Start 2P"],
    },
    extend: {
      boxShadow: {
        "3xl": `
0 0 4px 3px #c2a500, /* middle magenta */
0 0 7px 7px #f7d51d; /* outer cyan */`,
      },
      fontSize: {
        xs: "0.67rem",
        "2xs": "0.5rem",
        "3xs": "0.4rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        Tinder: "#ff4458",
        FilmFreeway: "#21b581",
        Minecraft: "#d0c5c0",
        EngageTown: "#fb1150",
      },
    },
  },
  plugins: [],
};
export default config;
