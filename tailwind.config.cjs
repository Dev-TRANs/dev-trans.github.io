const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: { 
        "primary": '#007bff',
      },
      screens: {
        sms: '432px',
        mds: '800px',
      },  
      lineHeight: {
        'full': '100%',
      },
      aspectRatio: {
        'oblong': '2 / 1',
      },
      zIndex: {
        'highest': '9999',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(({ addUtilities, addComponents, e, prefix, config  }) => {
      addComponents({
        ".link": {
          "text-decoration-line": "underline",
          '&:hover': {
            "text-decoration-line": "none",
          },
        }
      });
      addUtilities({
        ".horizontal-tb": {
          writingMode: "horizontal-tb",
        },
        ".vertical-rl": {
          writingMode: "vertical-rl",
        },
        ".vertical-lr": {
          writingMode: "vertical-lr",
        },
      });
    })
  ],
};
