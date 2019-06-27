const path = require("path");
module.exports = {
  dest: "docs/dist",
  title: "VuePress Live",
  description: "Demo site of the VuePress-live plugin",
  themeConfig: {
    repo: "vue-styleguidist/vuepress-plugin-live",
    editLinks: true,
    docsDir: "docs",
    search: false,
    sidebar: ["/", "/Install.md"]
  },
  plugins: [
    [
      require("../../index"),
      {
        layout: path.resolve(__dirname, "../custom-layout")
      }
    ],
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
