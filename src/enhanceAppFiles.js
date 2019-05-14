const path = require("path");

module.exports = function enhanceAppFiles() {
  const content = [
    // import live with es6 so that it is compatible with both build and dev
    'import Vue from "vue";',
    // and in order for the loading to happen after we assign the variable,
    // we load vue-live as a require instead of an import
    `import VueLive from ${JSON.stringify(
      path.join(__dirname, "./vueLiveWithLayout")
    )};`,
    "Vue.component('vue-live', VueLive);"
  ].join("\n");
  return { name: "vue-live-enhancer", content };
};
