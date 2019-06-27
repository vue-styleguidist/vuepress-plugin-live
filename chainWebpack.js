const path = require("path");

module.exports = options => {
  const layoutPath = options.layout || path.resolve(__dirname, "./layout.vue");
  return function(config) {
    config.resolve.alias
      .set("vue$", "vue/dist/vue.esm.js")
      .set("vuepress-plugin-live/live-layout", layoutPath);
  };
};
