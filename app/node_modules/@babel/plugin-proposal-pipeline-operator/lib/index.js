"use strict";

exports.__esModule = true;
exports.default = _default;

var _pluginSyntaxPipelineOperator = _interopRequireDefault(require("@babel/plugin-syntax-pipeline-operator"));

var _core = require("@babel/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  return {
    inherits: _pluginSyntaxPipelineOperator.default,
    visitor: {
      BinaryExpression: function BinaryExpression(path) {
        var scope = path.scope;
        var node = path.node;
        var operator = node.operator,
            left = node.left;
        var right = node.right;
        if (operator !== "|>") return;

        var optimizeArrow = _core.types.isArrowFunctionExpression(right) && _core.types.isExpression(right.body);

        var param;

        if (optimizeArrow) {
          var _right = right,
              params = _right.params;

          if (params.length === 1 && _core.types.isIdentifier(params[0])) {
            param = params[0];
          } else if (params.length > 0) {
            optimizeArrow = false;
          }
        } else if (_core.types.isIdentifier(right, {
          name: "eval"
        })) {
          right = _core.types.sequenceExpression([_core.types.numericLiteral(0), right]);
        }

        if (optimizeArrow && !param) {
          path.replaceWith(_core.types.sequenceExpression([left, right.body]));
          return;
        }

        var placeholder = scope.generateUidIdentifierBasedOnNode(param || left);
        scope.push({
          id: placeholder
        });

        if (param) {
          path.get("right").scope.rename(param.name, placeholder.name);
        }

        var call = optimizeArrow ? right.body : _core.types.callExpression(right, [placeholder]);
        path.replaceWith(_core.types.sequenceExpression([_core.types.assignmentExpression("=", placeholder, left), call]));
      }
    }
  };
}