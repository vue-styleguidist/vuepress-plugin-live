module.exports = {
  title: "VuePress Boilerplate",
  description: "VuePress Project Documentation System",
  themeConfig: {
    docsDir: "docs"
  },
  plugins: [[require("../../dist/index")]]
};
