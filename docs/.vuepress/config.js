const path = require("path");
module.exports = {
  dest: "docs/dist",
  title: "VuePress Live",
  description: "Demo site of the VuePress-live plugin",
  themeConfig: {
    repo: "vue-styleguidist/vuepress-live",
    editLinks: true,
    docsDir: "docs"
  },
  plugins: [
    [require("../../src/index")],
    [
      "@vuepress/register-components",
      {
        components: [
          {
            name: "vue-slider",
            path: path.resolve(__dirname, "../vue-slider")
          }
        ]
      }
    ]
  ]
};
