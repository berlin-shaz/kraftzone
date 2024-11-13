/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        'base': '1rem', // Normal text
        'lg': '1.125rem', // Slightly larger
        'xl': '1.25rem', // Larger text for subtitles
        '2xl': '1.5rem', // Main headers (h1)
        '3xl': '1.875rem', // Larger headers
        
      },
      fontWeight: {
        'normal': 400,
        'medium': 500,
        'bold': 700,
      },
      fontFamily: {
        signature: ['"Great Vibes"', 'cursive'],
      },
    },
  },
  plugins: [],
}

