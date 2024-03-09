/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      const newUtilities = {
        ".separated-plus > li:not(:last-child)::after": {
          content: '"+"',
          marginLeft: theme("spacing.2"),
          marginRight: theme("spacing.2"),
        },
      };

      addComponents(newUtilities);
    }),
  ],
};
