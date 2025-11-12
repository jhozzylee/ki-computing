const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A66C2",
        neutral: "#2C2C2E",
        background: "#F4F6F9",
        muted: "#D2D6DB",
        dark: "#081824",
        surface: {
          dim: "#E4E8EC",
          shade: "#C0C4C9",
        },
      },
      fontFamily: {
        sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
        filson: ["Filson Soft", "sans-serif"],
      },
      fontSize: {
        h1: ["54px", { fontWeight: "700", lineHeight: "1.2" }],
        h2: ["36px", { fontWeight: "700", lineHeight: "1.3" }],
        h3: ["24px", { fontWeight: "500", lineHeight: "1.4" }],
        h4: ["18px", { fontWeight: "500", lineHeight: "1.4" }],
        bodyLg: ["18px", { fontWeight: "400", lineHeight: "1.6" }],
        body: ["16px", { fontWeight: "400", lineHeight: "1.6" }],
        bodySm: ["14px", { fontWeight: "300", lineHeight: "1.6" }],
        bodyXm: ["12px", { fontWeight: "200", lineHeight: "1.8" }],
        btn: ["16px", { fontWeight: "400", lineHeight: "1.4" }],
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        "md-lg": "992px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            p: {
              marginTop: theme("spacing.4"),
              marginBottom: theme("spacing.4"),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
