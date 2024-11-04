import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      colors: {
        blueDark: '#20207B',
        background: "#F0EBE1",
        primaryOne: "#9FDC26",
        primaryTwo: "#F29C33",
        primaryThree: "#EE6352",
        primaryFour: "#C4E5FC",
        light: "#FFFBF2",
        dark: "#262522",
      },
      backgroundImage: {
        'bg-one': "url('/background/first.svg')",
        'bg-two': "url('/background/second.svg')",
        'bg-thre': "url('/background/third.svg')",
        'bg-for': "url('/background/for.svg')",
      },
      keyframes: {
        faderight: {
          "0%": { transform: "translateX(-400px)", opacity: "0" },
          "100%": { transform: "translateX(0px)", opacity: "1" },
        },
        fadeleft: {
          "0%": { transform: "translateX(400px)", opacity: "0" },
          "100%": { transform: "translateX(0px)", opacity: "1" },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
      animation: {
        faderight: "faderight 1s ease-in-out",
        fadeleft: "fadeleft 1s ease-in-out",
        shimmer: "shimmer 2s linear infinite",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        bl: "1000",
      },
      
    },
  },
  darkMode: "class",
  plugins: [nextui(), addVariablesForColors],
};
export default config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
