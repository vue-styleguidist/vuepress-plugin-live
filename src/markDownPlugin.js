const addVueLive = md => {
  const fence = md.renderer.rules.fence;
  md.renderer.rules.fence = (...args) => {
    const [tokens, idx] = args;
    const token = tokens[idx];
    const lang = token.info.trim();
    if (!/ live$/.test(lang)) {
      return fence(...args);
    }
    const code = md.utils.escapeHtml(token.content);
    return `<vue-live :code="\`${code}\`" />`;
  };
};

module.exports = function markDownPlugin(config) {
  config.plugins.delete("snippet");
  config
    .plugin("vue-live")
    .use(addVueLive)
    .end();
};
