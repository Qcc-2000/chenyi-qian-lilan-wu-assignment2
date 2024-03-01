function generateGridColumns(lastValue) {
  let obj = {};
  for (let i = 13; i <= lastValue; i++) {
    obj[`${i}`] = `repeat(${i}, minmax(0, 1fr))`;
  }
  return obj;
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        ...generateGridColumns(40),
      },
    },
  },
  plugins: [],
};
