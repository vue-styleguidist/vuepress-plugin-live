const path = require("path");

module.exports = options => {
  const layoutPath = options.layout || path.resolve(__dirname, "./layout.vue");
  const noSsrPath = options.noSsr
    ? "vue-no-ssr"
    : path.resolve(__dirname, "./dummyComponent.js");
  return function(config) {
    config.resolve.alias
      .set("vue$", "vue/dist/vue.esm.js")
      .set("vuepress-plugin-live/live-layout", layoutPath)
      .set("vue-no-ssr", noSsrPath);
  };
};
