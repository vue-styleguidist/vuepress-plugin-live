module.exports = {
  dest: "docs/dist",
  title: "VuePress Live",
  description: "Demo site of the VuePress-live plugin",
  themeConfig: {
    docsDir: "docs"
  },
  plugins: [[require("../../src/index")]]
};
