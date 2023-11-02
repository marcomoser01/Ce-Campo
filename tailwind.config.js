/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#1e2833",
        white: "#fff",
      },
      height: {
        "30": "7.5rem",
      }, fontFamily: {
        "dm-sans": "'DM Sans'",
      },
      backgroundColor: {
        bordeaux_chiaro: "#850005",
        bordeaux_scuro: "#6d0004",
      },

    },
    fontSize: {
      xl: "1.25rem",
      inherit: "inherit",
    },
    plugins: [],
  },
  corePlugins: {
    preflight: false,
  },
};

