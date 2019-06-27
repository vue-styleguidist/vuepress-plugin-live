import layout from "vuepress-plugin-live/live-layout";

// vuepress is compiled in both node and non-node models
// it needs a "global" variable to make buble work.
// it is missing in browsers, so we add it.
if (typeof window !== "undefined" && window.global === undefined) {
  window.global = {};
}
const { VueLive } = require("vue-live");

export default {
  functional: true,
  render(h, context) {
    const props = { ...context.props, layout };
    return h(VueLive, { props });
  }
};
