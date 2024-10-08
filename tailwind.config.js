/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '100': '25rem', // 400px
        '120': '30rem', // 480px
        '140': '35rem', // 560px
        '160': '40rem', // 640px
        // Agrega más si es necesario
    }
    },
  },
  plugins: [],
}

