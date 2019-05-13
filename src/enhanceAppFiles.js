module.exports = function enhanceAppFiles() {
  const content = [
    // import live with es6 so that it is compatible with both build and dev
    'import Vue from "vue";',
    // vuepress is compiled in both node and non-node models
    // it needs a "global" variable to make buble work.
    // it is missing in browsers, so we add it.
    'if(typeof window !== "undefined" && window.global === undefined){window.global = {};}',
    // and in order for the loading to happen after we assign the variable,
    // we load vue-live as a require instead of an import
    "const { VueLive } = require('vue-live');",
    "Vue.component('vue-live', VueLive);"
  ].join("\n");
  return { name: "vue-live-enhancer", content };
};
