/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  safelist: [
    'text-red-500',
    'text-green-500',
    'bg-red-500',
    'bg-green-500'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#030303', 
        surface: '#09090b',    
        border: '#1a1a1a',    
        accent: {
          DEFAULT: '#1d4ed8', 
          light: '#3b82f6',   
          dark: '#1e3a8a',    
        },
        text: {
          primary: '#f5f5f5',  
          secondary: '#a3a3a3', 
          muted: '#525252',  
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0.6, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(1deg)' },
        }
      }
    }
  },
  plugins: [],
}
