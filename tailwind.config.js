/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [function({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          /* For WebKit-based browsers (Chrome, Safari) */
          '-webkit-overflow-scrolling': 'touch',
          'scrollbar-width': 'none', /* For Firefox */
          '-ms-overflow-style': 'none', /* For Internet Explorer and Edge */
          '&::-webkit-scrollbar': {
            display: 'none', /* Hide scrollbar for WebKit-based browsers */
          },
        },
      })
    },],
}

