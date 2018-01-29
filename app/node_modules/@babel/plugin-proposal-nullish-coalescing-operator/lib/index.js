"use strict";

exports.__esModule = true;
exports.default = _default;

var _pluginSyntaxNullishCoalescingOperator = _interopRequireDefault(require("@babel/plugin-syntax-nullish-coalescing-operator"));

var _core = require("@babel/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(api, _ref) {
  var _ref$loose = _ref.loose,
      loose = _ref$loose === void 0 ? false : _ref$loose;
  return {
    inherits: _pluginSyntaxNullishCoalescingOperator.default,
    visitor: {
      LogicalExpression: function LogicalExpression(path) {
        var node = path.node,
            scope = path.scope;

        if (node.operator !== "??") {
          return;
        }

        var ref = scope.generateUidIdentifierBasedOnNode(node.left);
        scope.push({
          id: ref
        });

        var assignment = _core.types.assignmentExpression("=", _core.types.clone(ref), node.left);

        path.replaceWith(_core.types.conditionalExpression(loose ? _core.types.binaryExpression("!=", assignment, _core.types.nullLiteral()) : _core.types.logicalExpression("&&", _core.types.binaryExpression("!==", assignment, _core.types.nullLiteral()), _core.types.binaryExpression("!==", _core.types.clone(ref), scope.buildUndefinedNode())), _core.types.clone(ref), node.right));
      }
    }
  };
}