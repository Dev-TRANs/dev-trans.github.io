const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ addComponents  }) => {
      addComponents({
        '.link': {
          "text-decoration-line": "underline",
          '&:hover': {
            "text-decoration-line": "none",
          },
        }
      })
    })
  ],
};
