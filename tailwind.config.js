/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: '#3C2222', // Change this to the shade of red you prefer, this is a hex value for pure red
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    // Add any other plugins if needed
  ],
}
