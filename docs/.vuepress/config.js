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
    sidebar: ["/", "/Install.md"],
  },
  plugins: [
    ["code-copy", { selector: `div:not(.editor)[class*="language-"] pre` }],
    [
      require("../../index"),
      {
        // uncomment next line to use a custom layout
        // layout: path.resolve(__dirname, "./components/custom-layout.vue"),
        noSsr: true,
      },
    ],
    [
      "@vuepress/register-components",
      {
        components: [
          {
            name: "vue-slider",
            path: path.resolve(__dirname, "../vue-slider"),
          },
        ],
      },
    ],
  ],
};
