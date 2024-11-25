/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'orange-600': '#ea580c',
      },
      screens: {
        pmx: "414px",
        spm: "390px",
        p4m: "430px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.text-shadow-charcoal': {
            textShadow: '4px 4px 2px rgba(234, 88, 12, 0.7)',
          },
          '.text-shadow-charcoal-lg': {
            textShadow: '6px 6px 2px rgba(234, 88, 12, 0.7)',
          },
        },
      );
    },
  ],
};
