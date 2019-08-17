const path = require("path");
const vueLivePath = path.join(__dirname, "./vueLiveWithLayout");

module.exports = function enhanceAppFiles() {
  const content = [
    // import live with es6 so that it is compatible with both build and dev
    'import Vue from "vue";',
    // vuepress is compiled in both node and non-node models
    // it needs a "global" variable to make buble work.
    // one of its dependencies, buffer uses global to detect compat with browser
    // it is missing in browsers, so we add it.
    'if (typeof window !== "undefined" && window.global === undefined) {',
    "  window.global = window;",
    "}",
    // and in order for the loading to happen after we assign the variable,
    // we load vue-live as a require instead of an import
    `Vue.component("VueLive", () => import(${JSON.stringify(vueLivePath)}))`
  ].join("\n");
  return { name: "vue-live-enhancer", content };
};
