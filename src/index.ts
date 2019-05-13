import chainWebpack from "./chainWebpack";
import enhanceAppFiles from "./enhanceAppFiles";
import chainMarkdown from "./markDownPlugin";

module.exports = () => {
  return {
    name: "vuepress-live-examples",
    chainWebpack,
    enhanceAppFiles,
    chainMarkdown
  };
};
