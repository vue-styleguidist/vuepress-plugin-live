import layout from "vuepress-plugin-live/live-layout";
import { VueLive } from "vue-live";

export default {
  functional: true,
  render(h, context) {
    const props = { ...context.props, layout };
    return h(VueLive, { props });
  }
};
