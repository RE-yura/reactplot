module.exports = {
  purge: ["src/pages/**/*.{js,ts,jsx,tsx}", "src/components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      primary: "#2b2b2e;",
      secondary: "#c6c6c6",
      lightGray: "#8d8d8d",
      danger: "#e3342f",
      error: "#f53e37",
      link: "#1bbbeb",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#3490dc",
      secondary: "#c6c6c6",
      danger: "#e3342f",
    }),
    fontFamily: {
      body: [
        "ShinGoPro",
        "'Noto Sans JP'",
        "Avenir",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "Hiragino Sans",
        "ヒラギノ角ゴシック",
        "メイリオ",
        "Meiryo",
        "YuGothic",
        "Yu Gothic",
        "ＭＳ Ｐゴシック",
        "MS PGothic",
        "sans-serif",
      ],
      title: ["montserrat", "'Noto Sans JP'", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
