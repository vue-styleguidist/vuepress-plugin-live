module.exports = {
  dest: "docs/dist",
  title: "VuePress Live",
  description: "Demo site of the VuePress-live plugin",
  themeConfig: {
    repo: "vue-styleguidist/vuepress-live",
    editLinks: true,
    docsDir: "docs"
  },
  plugins: [[require("../../src/index")]]
};
