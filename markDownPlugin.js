const addVueLive = md => {
  const fence = md.renderer.rules.fence;
  md.renderer.rules.fence = (...args) => {
    const [tokens, idx] = args;
    const token = tokens[idx];
    const lang = token.info.trim();

    // if it does not ends with live just use default fence
    if (!/ live$/.test(lang)) {
      return fence(...args);
    }

    const code = token.content;
    // TODO: analyze code here to find requires
    // put all requires into an requires object
    // add this as a prop
    return `<vue-live :code="\`${md.utils.escapeHtml(code)}\`" />`;
  };
};

module.exports = function markDownPlugin(config) {
  config.plugins.delete("snippet");
  config
    .plugin("vue-live")
    .use(addVueLive)
    .end();
};
