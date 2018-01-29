"use strict";

exports.__esModule = true;
exports.default = _default;

var _pluginSyntaxFunctionBind = _interopRequireDefault(require("@babel/plugin-syntax-function-bind"));

var _core = require("@babel/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  function getTempId(scope) {
    var id = scope.path.getData("functionBind");
    if (id) return id;
    id = scope.generateDeclaredUidIdentifier("context");
    return scope.path.setData("functionBind", id);
  }

  function getStaticContext(bind, scope) {
    var object = bind.object || bind.callee.object;
    return scope.isStatic(object) && object;
  }

  function inferBindContext(bind, scope) {
    var staticContext = getStaticContext(bind, scope);
    if (staticContext) return _core.types.cloneDeep(staticContext);
    var tempId = getTempId(scope);

    if (bind.object) {
      bind.callee = _core.types.sequenceExpression([_core.types.assignmentExpression("=", tempId, bind.object), bind.callee]);
    } else {
      bind.callee.object = _core.types.assignmentExpression("=", tempId, bind.callee.object);
    }

    return tempId;
  }

  return {
    inherits: _pluginSyntaxFunctionBind.default,
    visitor: {
      CallExpression: function CallExpression(_ref) {
        var node = _ref.node,
            scope = _ref.scope;
        var bind = node.callee;
        if (!_core.types.isBindExpression(bind)) return;
        var context = inferBindContext(bind, scope);
        node.callee = _core.types.memberExpression(bind.callee, _core.types.identifier("call"));
        node.arguments.unshift(context);
      },
      BindExpression: function BindExpression(path) {
        var node = path.node,
            scope = path.scope;
        var context = inferBindContext(node, scope);
        path.replaceWith(_core.types.callExpression(_core.types.memberExpression(node.callee, _core.types.identifier("bind")), [context]));
      }
    }
  };
}