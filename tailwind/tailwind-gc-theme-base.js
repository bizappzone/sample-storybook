// Example preset
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#e2e8f0",
          500: "#afbdc4", // grey
          600: "#808d94",
          // '600': 'var(--color-primary-600)',
          dark: {
            400: "#e2f1f8",
            500: "#b0bec5", //light grey
            600: "#808e95",
          },
        },
        onprimary: {
          400: "#4f5b62",
          500: "#263238", // dark grey
          600: "#000a12",
          dark: {
            400: "#4f5b62",
            500: "#263238", // dark grey
            600: "#000a12",
          },
        },
        secondary: {
          400: "#005580",
          500: "#003049", // navy
          600: "#002233",
          dark: {
            400: "#5E82A1",
            500: "#5B7D9B",
            600: "#2F4150",
          },
        },
        onsecondary: {
          400: "#EFF2F6",
          500: "#DEE4ED",
          600: "#CED7E4",
          dark: {
            400: "#EDF3F7",
            500: "#DCE6EF",
            600: "#CADAE7",
          },
        },
        accent: {
          400: "#A72539",
          500: "#691724", // burgundy
          600: "#3F0E15",
          dark: {
            400: "#E896A4",
            500: "#D22D49",
            600: "#992135",
          },
        },
        onaccent: {
          400: "#EFF2F6",
          500: "#DEE4ED", //pale blue
          600: "#CED7E4",
          dark: {
            400: "#EFF2F6",
            500: "#DEE4ED",
            600: "#CED7E4",
          },
        },
        warn: {
          400: "#f05545",
          500: "#b71c1c", //red
          600: "#7f0000",
          dark: {
            400: "#EB7A7A",
            500: "#E44E4E",
            600: "#DD2222",
          },
        },
        onwarn: {
          400: "#EFF2F6",
          500: "#DEE4ED", // pale blue
          600: "#CED7E4",
          dark: {
            400: "#EFF2F6",
            500: "#DEE4ED",
            600: "#CED7E4",
          },
        },
        muted: {
          400: "#E7ECEE",
          500: "#cfd8dc", //light grey
          600: "#A5B8C0",
          dark: {
            400: "#737373",
            500: "#404040",
            600: "#171717",
          },
        },
        onmuted: {
          400: "#00223D",
          500: "#00111F", //Drk navy
          600: "#000a12",
          dark: {
            400: "#00223D",
            500: "#00111F", //Drk navy
            600: "#000a12",
          },
        },
        bgbase: {
          400: "rgb(249, 250, 251)",
          500: "rgb(243, 245, 246)", // offwhite blue
          600: "rgb(237, 240, 242)",
          dark: {
            400: "rgb(38, 50, 56)",
            500: "rgb(29, 38, 42)", // char grey
            600: "rgb(14, 19, 21)",
          },
        },
        apptext: {
          500: "#000000",
          dark: {
            500: "#ffffff"
          }
        },
        appinstructions: {
          500: "#afbdc4",
          dark: {
            500: "#b0bec5"
          }
        }
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
