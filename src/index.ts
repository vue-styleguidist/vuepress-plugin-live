import chainWebpack from "./chainWebpack";
import enhanceAppFiles from "./enhanceAppFiles";

export interface IVuePressOpenContext {
  isProd: boolean;
  sourceDir: string;
  tempPath: string;
  outDir: string;
  themePath: string;
  base: string;
  writeTemp: string;
}

export interface IVuePressPage {
  path: string;
  filePath?: string;
  content?: string;
  frontmatter?: any;
}

export interface IVuePressComponent {
  name: string;
  path: string;
}

export interface IVueLiveOptions {
  glob?: string;
}

module.exports = () => {
  return {
    name: "vuepress-live-examples",
    chainWebpack,
    enhanceAppFiles
  };
};
