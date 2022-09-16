/** @type {import('tailwindcss').Config} */
const max = 201;
let p = 0;

// Space  padding, margin, width, height, maxHeight, gap, inset, space, and translate 
const Space = {}
for (let i = 0; i < max; i++) {
  Space[i] = `${i*2}px`;
  p = i + 'p'
  Space[p] = `${i}%`;
}

// borderRadius
const borderRadius = {
  '50': '50px',
}

// minHeight, minWidth
const min = {
  40: '40px',
  60: '60px',
  80: '80px',
  100: '100px',
  270: '270px',
  400: '400px',
  420: '420px',
  460: '460px',
  480: '480px',
  500: '500px',
  550: '550px',
  650: '650px',
  720: '720px',
  750: '750px',
  850: '850px',
}

// Colors
const Colors = {
  'cmt': '#f0f2f5',
  'secondary': '#65676B',
  'white-paper': '#ffffff',
  'primary': '#1877f2',
}

// borderWidth
const BorderWidth  = {
  DEFAULT: '1px',
  0: '0',
  1: '1px',
  2: '2px',
  4: '4px',
  8: '8px'
}

// flexBasis
const flexBasis = {
  auto: 'auto'
}

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    "./src/**/*.{html,js}"
    ],
  theme: {
    extend: {
      boxShadow: {
        'bottom': '0 -6px 10px 5px rgba(0,0,0,0.5)',
        'card': '0px 0px 6px rgba(79,95,120,0.1)'
      },
      spacing: Space,
      borderRadius: borderRadius,
      minHeight: min,
      minWidth: min,
      maxHeight: min,
      maxWidth: min,
      colors: Colors,
      flexBasis: flexBasis,
    },
    borderWidth: BorderWidth
  },
  plugins: [],
  mode: "jit"
}
