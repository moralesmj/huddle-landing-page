/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'violet': '#674baf',
        'soft-magenta': '#e882e8'
      },

      backgroundImage: {
        'mobile': 'url(/assets/bg-mobile.svg)',
        'desktop': 'url(/assets/bg-desktop.svg)'
      }
    },
  },
  plugins: [],
}

