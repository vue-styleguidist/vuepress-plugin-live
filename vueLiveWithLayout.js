import layout from "./layout.vue";

// vuepress is compiled in both node and non-node models
// it needs a "global" variable to make buble work.
// it is missing in browsers, so we add it.
if (typeof window !== "undefined" && window.global === undefined) {
  window.global = {};
}
const { VueLive } = require("vue-live/dist/vue-live.common");

export default {
  functional: true,
  render(h, context) {
    const props = { ...context.props, layout };
    return h(VueLive, { props });
  }
};
