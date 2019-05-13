module.exports = function enhanceAppFiles() {
  const content = `const Vue = require('vue').default;
  if(typeof window !== "undefined"){
    window.global = {}
  }
  const { VueLive } = require('vue-live');
  Vue.component('vue-live', VueLive);`;
  return { name: "vue-live-enhancer", content };
};
