const chainWebpack = require("./chainWebpack");
const enhanceAppFiles = require("./enhanceAppFiles");
const chainMarkdown = require("./markDownPlugin");

module.exports = () => {
  return {
    name: "vuepress-plugin-live",
    chainWebpack,
    enhanceAppFiles,
    chainMarkdown
  };
};
