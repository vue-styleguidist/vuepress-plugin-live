module.exports = function enhanceAppFiles() {
  const content = `const Vue = require('vue').default;
  // for some reason, buble needs a window.global variable
  window.global = window;
  const { VueLive } = require('vue-live');
  Vue.component('vue-live', VueLive);`;
  return { name: "vue-live-enhancer", content };
};
