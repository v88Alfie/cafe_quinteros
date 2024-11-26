import { Montserrat } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.6rem",
        md: "4rem",
        lg: "10rem",
        xl: "12rem",
        "2xl": "14rem",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      fontSize: {
        montserrat_regular_14: [
          "1.4rem",
          { lineHeight: "1.6rem", fontWeight: "400" },
        ],
        montserrat_regular_16: [
          "1.6rem",
          { lineHeight: "2.5rem", fontWeight: "400" },
        ],
        montserrat_regular_16_2: [
          "1.6rem",
          { lineHeight: "3.2rem", fontWeight: "400" },
        ],
        montserrat_regular_18: [
          "1.8rem",
          { lineHeight: "2.4rem", fontWeight: "400" },
        ],
        montserrat_regular_20: [
          "2rem",
          { lineHeight: "3.2rem", fontWeight: "400" },
        ],
        montserrat_bold_16: [
          "1.6rem",
          { lineHeight: "2.2rem", fontWeight: "700" },
        ],
        montserrat_bold_18: [
          "1.8rem",
          { lineHeight: "2.2rem", fontWeight: "700" },
        ],
        montserrat_bold_20: [
          "2rem",
          { lineHeight: "2.6rem", fontWeight: "700" },
        ],
        montserrat_bold_22: [
          "2.2rem",
          { lineHeight: "2.6rem", fontWeight: "700" },
        ],
        montserrat_bold_24: [
          "2.4rem",
          { lineHeight: "2.6rem", fontWeight: "700" },
        ],
        montserrat_bold_28: [
          "2.8rem",
          { lineHeight: "3.4rem", fontWeight: "700" },
        ],
        montserrat_bold_32: [
          "3.2rem",
          { lineHeight: "3.8rem", fontWeight: "700" },
        ],
        montserrat_bold_34: [
          "3.4rem",
          { lineHeight: "4rem", fontWeight: "700" },
        ],
        montserrat_bold_38: [
          "3.8rem",
          { lineHeight: "4.4rem", fontWeight: "700" },
        ],
        montserrat_bold_40: [
          "4rem",
          { lineHeight: "4.6rem", fontWeight: "700" },
        ],
        montserrat_bold_42: [
          "4.2rem",
          { lineHeight: "5rem", fontWeight: "700" },
        ],
        montserrat_bold_46: [
          "4.6rem",
          { lineHeight: "5.6rem", fontWeight: "700" },
        ],
      },
      colors: {
        primary: "#995B1A",
        text: "#060808",
        white: "#F3FDFF",
        subtext: "#06080899",
        gray: "#E6F3F7",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-50% - 20px))" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "infinite-scroll": "infinite-scroll 40s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
