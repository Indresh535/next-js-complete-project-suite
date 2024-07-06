// ************* Customized tailwind config for this project ****************************

/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif']
    },
    extend: {
      fontSize: {
        14: '14px'
      },
      textColor: {  // Set text color for regular mode
        'primary': 'blue',  // Set text color for dark mode
        'primary-hover': 'blue', 
        'secondary': 'blue',  // Set text color for dark mode
        'secondary-hover': 'blue', 
      },
      backgroundColor: {
        'primary-bg': 'blue',
        'primary-bg-hover': 'lightblue',
        'primary-bg-dark': 'blue',
        'primary-bg-hover-dark': 'lightblue',
        'main-bg': '#ededed',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)'
      },
      borderWidth: {
        1: '1px'
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)'
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px'
      },
      height: {
        80: '80px'
      },
      minHeight: {
        590: '590px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: [],
}

// ******************* Default tailwind Configuration ********************************

// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;
