/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'mob':'400px', //custom extra breakpoint
        'sm': '640px',  // Default small breakpoint
        'md': '768px',  // Default medium breakpoint
        'lg': '1024px', // Default large breakpoint
        
      },
    },
  },
  plugins: [],
};
