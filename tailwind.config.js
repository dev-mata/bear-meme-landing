/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
          'ber-yellow' : '#FBE3B5',
          'ber-blue' : '#006DFF',
          'ber-gray' : '#D9D9D9'
      },
      keyframes: {
        bounceIn: {
          '0%, 20%, 40%, 60%, 80%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-30px)' },
        },
      },
      animation: {
        'bounce-in': 'bounceIn 1s ease-in-out',
        'spin-slow': 'spin 3s linear infinite',
      },

      
    },
  },
  plugins: [],
};
