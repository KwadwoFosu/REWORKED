/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      eric: ["Castoro","serif"],
      gen: ["Genos","sans-serif"],

    },
    screens: {
      

      'half': '960px',
      // => @media (min-width: 960px) { ... }
      'phone': '400px',
      'phone1': '280px',

    },
  },
  plugins: [],
}