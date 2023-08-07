/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "sm-mobile": "200px",
        mobile: "576px",
        tablet: "768px",
        "lg-tablet": "840px",
        laptop: "1024px",
        "lg-laptop": "1192px",
        "xl-laptop": "1264px",
        desktop: "1440px",
        "xl-desktop": "1620px",
      },
      container: {
        padding: "1rem",
        center: true,
        screens: {
          mobile: "100%",
          tablet: "488px",
          laptop: "768px",
          desktop: "1192px",
          "xl-desktop": "1192px",
        },
      },
      colors: {
        "gray-900": "#161616",
        "gray-800": "#353535",
        "gray-700": "#535353",
        "gray-600": "#676767",
        "gray-500": "#8F8F8F",
        "gray-400": "#ACACAC",
        "gray-300": "#CFCFCF",
        "gray-200": "#DEDEDE",
        "gray-100": "#ECECEC",
        "gray-50": "#F1F1F1",
        "gray-25": "#F8F8F8",
        white: "#FFFFFF",
        black: "#000000",
      },
      fontSize: {
        h1: ["48px"],
        h2: ["40px"],
        h3: ["36px"],
        h4: ["32px"],
        h5: ["24px"],
        big: ["20px"],
        medium: ["16px"],
        normal: ["14px"],
        small: ["12px"],
        footnote: ["10px"],
      },
      boxShadow: {
        regular: "4px 4px 50px rgba(118, 118, 118, 0.04)",
      },
    },
  },
  plugins: [],
};
