const chainWebpack = require("./chainWebpack");
const enhanceAppFiles = require("./enhanceAppFiles");
const chainMarkdown = require("./markDownPlugin");

module.exports = (options, app, plugin) => {
  return {
    name: "vuepress-plugin-live",
    chainWebpack: chainWebpack(options),
    enhanceAppFiles,
    chainMarkdown: chainMarkdown(options),
  };
};
