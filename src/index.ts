import chainWebpack from "./chainWebpack";
import enhanceAppFiles from "./enhanceAppFiles";

module.exports = () => {
  return {
    name: "vuepress-live-examples",
    chainWebpack,
    enhanceAppFiles
  };
};
