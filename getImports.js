const walkes = require("walkes");
const getAst = require("./getAst");

/**
 * Returns a list of all strings used in import statements or require() calls
 */
module.exports = function getImports(code) {
  // Parse example source code, but ignore errors
  const ast = getAst(code);
  if (!ast) {
    return [];
  }

  const imports = [];
  walkes(ast, {
    // import foo from '
    // import 'foo'
    ImportDeclaration(node) {
      if (node.source) {
        imports.push(node.source.value);
      }
    },
    // require('foo')
    CallExpression(node) {
      if (
        node.callee &&
        node.callee.name === "require" &&
        node.arguments &&
        node.arguments[0].value
      ) {
        imports.push(node.arguments[0].value);
      }
    }
  });
  return imports;
};
