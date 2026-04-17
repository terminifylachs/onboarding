/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: {
          navy: "#0A0C12",
          depth: "#0E1018",
        },
        card: {
          surface: "#161A26",
          light: "#1E2235",
        },
        signal: {
          blue: "#4A6CF7",
        },
        highlight: {
          blue: "#5B8AF5",
        },
        proof: {
          amber: "#F5A623",
        },
        close: {
          green: "#22C993",
        },
        reject: {
          red: "#F24E4E",
        },
        "primary-text": "#FFFFFF",
        "body-text": "#9CA3AF",
        "muted-text": "#6B7280",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xs': '6px',
        'sm': '8px',
        'md': '10px',
      },
    },
  },
  plugins: [],
}
