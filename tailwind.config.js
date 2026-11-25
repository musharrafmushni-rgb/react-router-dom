/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5', // இங்கே உங்களுக்குப் பிடித்த நிறத்தின் Hex Code-ஐ கொடுங்கள்
      }
    },
  },
  plugins: [],
}