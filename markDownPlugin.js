const { parseComponent } = require("vue-template-compiler");
const { isCodeVueSfc } = require("vue-inbrowser-compiler");
const getImports = require("./getImports");

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

    const getScript = code => {
      // script is at the beginning of a line after a return
      // In case we are loading a vue component as an example, extract script tag
      if (isCodeVueSfc(code)) {
        const parts = parseComponent(code);
        return parts && parts.script ? parts.script.content : "";
      }
      //else it could be the weird almost jsx of vue-styleguidist
      return code.split(/\n[\t ]*</)[0];
    };

    const code = token.content;

    // analyze code to find requires
    // put all requires into a "requires" object
    // add this as a prop
    const scr = getScript(code);
    const requires = getImports(scr).map(mod => `'${mod}': require('${mod}')`);

    return `<vue-live :code="\`${md.utils
      .escapeHtml(code)
      .replace(/\`/g, "\\`")
      .replace(/\$/g, "\\$")}\`" :requires="{${requires.join(",")}}"/>`;
  };
};

module.exports = function markDownPlugin(config) {
  config.plugins.delete("snippet");
  config
    .plugin("vue-live")
    .use(addVueLive)
    .end();
};
