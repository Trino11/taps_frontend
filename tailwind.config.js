/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'backgroundT': '#dde5b6',
        'letterT': '#484848',
        'darkT': '#6c584c',
        'witheT': '#f0ead2',
        'backgroudDarkT': '#ADC178',
        'backgroundDT': '#001D3D',
        'letterDT': '#f2e9e4',
        'darkDT': '#FFD60A',
        'witheDT': '#FFC300',
        'backgroudDarkDT': '#000814'
      },
    },
  },
  plugins: [],
} 