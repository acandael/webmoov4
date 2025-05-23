/** @type {import("prettier").Config} */
export default {
  printWidth: 100,
  useTabs: true,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: ["**/*.astro"],
      options: {
        parser: "astro",
      },
    },
  ],
};
