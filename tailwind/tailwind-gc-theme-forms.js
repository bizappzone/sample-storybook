// Example preset
module.exports = {
  theme: {
    extend: {
      colors: {
        formsuccess: {
          400: "#fffffb",
          500: "#dcedc8", //light grey
          600: "#aabb97",
          dark: {
            400: "#737373",
            500: "#404040",
            600: "#171717",
          },
        },
        onformsuccess: {
          400: "#6abf69",
          500: "#388e3c", //Drk green
          600: "#00600f",
          dark: {
            400: "#00223D",
            500: "#00111F", //Drk navy
            600: "#000a12",
          },
        },
        formhelp: {
          400: "#ffffff",
          500: "rgb(243, 245, 246)", //light grey
          600: "#babdbe",
          dark: {
            400: "#c1d5e0",
            500: "#90a4ae", //light grey
            600: "#62757f",
          },
        },
        onformhelp: {
          400: "#c1d5e0",
          500: "#90a4ae", //light grey
          600: "#62757f",
          dark: {
            400: "#00223D",
            500: "#00111F", //Drk navy
            600: "#000a12",
          },
        },
        formerror: {
          400: "#ffffff",
          500: "#ffebee", //light grey
          600: "#ccb9bc",
          dark: {
            400: "#737373",
            500: "#404040",
            600: "#171717",
          },
        },
        onformerror: {
          400: "#9b0000",
          500: "#d50000", //Drk red
          600: "#ff5131",
          dark: {
            400: "#00223D",
            500: "#00111F", //Drk navy
            600: "#000a12",
          },
        },
        bgform: {
          400: "rgb(249, 250, 251)",
          500: "rgb(243, 245, 246)", // offwhite blue
          600: "rgb(237, 240, 242)",
          dark: {
            400: "rgb(38, 50, 56)",
            500: "rgb(29, 38, 42)", // char grey
            600: "rgb(14, 19, 21)",
          },
        },
        bgfieldset: {
          400: "rgb(249, 250, 251)",
          500: "rgb(243, 245, 246)", // offwhite blue
          600: "rgb(237, 240, 242)",
          dark: {
            400: "rgb(38, 50, 56)",
            500: "rgb(29, 38, 42)", // char grey
            600: "rgb(14, 19, 21)",
          },
        },
        bgfields: {
          400: "rgb(248 250 252)",
          500: "rgb(241 245 249)", // slate 100
          600: "rgb(226 232 240)",
          dark: {
            400: "rgb(51 65 85)",
            500: "rgb(30 41 59)", // slate 800
            600: "rgb(15 23 42)",
          },
        },

      },
      backgroundColor: {
        skin: {
          // primary: "#333123",
          // 'primary-button': 'var(--button-color)',
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // require('@tailwindcss/aspect-ratio'),
  ],
};
