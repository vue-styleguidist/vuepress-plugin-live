export default function chainWebpack(config) {
  config.resolve.alias.set("vue$", "vue/dist/vue.esm.js");
}
