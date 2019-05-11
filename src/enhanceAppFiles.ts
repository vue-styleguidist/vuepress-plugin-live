export default function enhanceAppFiles(): { name: string; content: string } {
  const content = `const Vue = require('vue').default;
  // for some reason, buble need a window.global variable
  window.global = window;
  const { VueLive } = require('vue-live');
  Vue.component('vue-live', VueLive);`;
  return { name: "vue-live-enhancer", content };
}
