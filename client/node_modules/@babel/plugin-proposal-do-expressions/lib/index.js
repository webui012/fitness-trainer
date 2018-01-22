"use strict";

exports.__esModule = true;
exports.default = _default;

var _pluginSyntaxDoExpressions = _interopRequireDefault(require("@babel/plugin-syntax-do-expressions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  return {
    inherits: _pluginSyntaxDoExpressions.default,
    visitor: {
      DoExpression: {
        exit: function exit(path) {
          var body = path.node.body.body;

          if (body.length) {
            path.replaceExpressionWithStatements(body);
          } else {
            path.replaceWith(path.scope.buildUndefinedNode());
          }
        }
      }
    }
  };
}