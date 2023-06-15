/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neon-blue": "#2272ff",
        "dark-gray": "#1d1d1d",
        "cyan-custom": "#00dbde",
        "purple-custom": "#fc00ff",
      },
    },
  },
  plugins: [],
};
