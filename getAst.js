const { Parser } = require("acorn");

const ACORN_OPTIONS = {
  ecmaVersion: 2019,
  sourceType: "module"
};

/**
 * Parse source code with Acorn and return AST, returns undefined in case of errors
 */
module.exports = function getAst(code, plugins = []) {
  const parser = Parser.extend(...plugins);

  try {
    return parser.parse(code, ACORN_OPTIONS);
  } catch (err) {
    return undefined;
  }
};
