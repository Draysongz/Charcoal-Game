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
        // Custom Breakpoints for Specific Devices
        'spm': '390px',  // Small phones (e.g., iPhone SE, Galaxy A3)
        'p4m': '430px',  // Phones (e.g., iPhone 6, iPhone 7)
        'pmx': '414px',  // Medium phones (e.g., iPhone 12, iPhone 11)
        
        // Tailwind default breakpoints for general devices
        'sm': '640px',  // Small tablets, large phones
        'md': '768px',  // Tablets, small laptops
        'lg': '1024px', // Larger tablets, desktops, laptops
        'xl': '1280px', // Desktops, large laptops
        '2xl': '1536px', // Ultra-wide desktops, big screens
      },
      // Add 'min-width' and 'max-width' for intermediate screen ranges
      // These will be applied for optimized control over smaller screen sizes
      minWidth: {
        'spm': '390px', // Target smaller devices
        'p4m': '430px', // Target medium phones
        'pmx': '414px', // Target medium screens
      },
      maxWidth: {
        'sm': '639px',  // Targets the smaller screens (mobile-first)
        'md': '767px',  // Targets devices smaller than tablet size
        'lg': '1023px', // Devices smaller than large tablets
        'xl': '1279px', // Devices smaller than large desktops
        '2xl': '1535px', // Ultra-wide screen targeting
      }
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
