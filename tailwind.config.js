/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      height: {
        "30": "7.5rem",
        // Aggiungi altri valori personalizzati qui
      },
      backgroundColor: {
        bordeaux_chiaro: "#850005",
        bordeaux_scuro: "#6d0004",
      },

    },
    plugins: [],
  },
};
