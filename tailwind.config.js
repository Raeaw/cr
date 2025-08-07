/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}", // Tambahkan sesuai struktur project kamu
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 2.5s infinite',
      },
    },
  },
  plugins: [],
}
