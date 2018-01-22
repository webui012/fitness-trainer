"use strict";

exports.__esModule = true;
exports.default = _default;

var _pluginSyntaxThrowExpressions = _interopRequireDefault(require("@babel/plugin-syntax-throw-expressions"));

var _core = require("@babel/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  return {
    inherits: _pluginSyntaxThrowExpressions.default,
    visitor: {
      UnaryExpression: function UnaryExpression(path) {
        var _path$node = path.node,
            operator = _path$node.operator,
            argument = _path$node.argument;
        if (operator !== "throw") return;

        var arg = _core.types.identifier("e");

        var arrow = _core.types.functionExpression(null, [arg], _core.types.blockStatement([_core.types.throwStatement(arg)]));

        path.replaceWith(_core.types.callExpression(arrow, [argument]));
      }
    }
  };
}