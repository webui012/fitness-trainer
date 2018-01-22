"use strict";

exports.__esModule = true;
exports.default = _default;

var _pluginSyntaxOptionalChaining = _interopRequireDefault(require("@babel/plugin-syntax-optional-chaining"));

var _core = require("@babel/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(api, options) {
  var _options$loose = options.loose,
      loose = _options$loose === void 0 ? false : _options$loose;

  function optional(path, replacementPath) {
    var scope = path.scope;
    var optionals = [];
    var nil = scope.buildUndefinedNode();
    var objectPath = path;

    while (objectPath.isMemberExpression() || objectPath.isCallExpression() || objectPath.isNewExpression()) {
      var _objectPath = objectPath,
          node = _objectPath.node;

      if (node.optional) {
        optionals.push(node);
      }

      if (objectPath.isMemberExpression()) {
        objectPath = objectPath.get("object");
      } else {
        objectPath = objectPath.get("callee");
      }
    }

    for (var i = optionals.length - 1; i >= 0; i--) {
      var _node = optionals[i];
      _node.optional = false;

      var isCall = _core.types.isCallExpression(_node);

      var replaceKey = isCall || _core.types.isNewExpression(_node) ? "callee" : "object";
      var chain = _node[replaceKey];
      var ref = void 0;
      var check = void 0;

      if (loose && isCall) {
        check = ref = chain;
      } else {
        ref = scope.maybeGenerateMemoised(chain);

        if (ref) {
          check = _core.types.assignmentExpression("=", ref, chain);
          _node[replaceKey] = ref;
        } else {
          check = ref = chain;
        }
      }

      if (isCall && _core.types.isMemberExpression(chain)) {
        if (loose) {
          _node.callee = chain;
        } else {
          var object = chain.object;
          var context = scope.maybeGenerateMemoised(object);

          if (context) {
            chain.object = _core.types.assignmentExpression("=", context, object);
          } else {
            context = object;
          }

          _node.arguments.unshift(context);

          _node.callee = _core.types.memberExpression(_node.callee, _core.types.identifier("call"));
        }
      }

      replacementPath.replaceWith(_core.types.conditionalExpression(loose ? _core.types.binaryExpression("==", _core.types.clone(check), _core.types.nullLiteral()) : _core.types.logicalExpression("||", _core.types.binaryExpression("===", _core.types.clone(check), _core.types.nullLiteral()), _core.types.binaryExpression("===", _core.types.clone(ref), scope.buildUndefinedNode())), nil, replacementPath.node));
      replacementPath = replacementPath.get("alternate");
    }
  }

  function findReplacementPath(path) {
    return path.find(function (path) {
      var parentPath = path.parentPath;

      if (path.key == "left" && parentPath.isAssignmentExpression()) {
        return false;
      }

      if (path.key == "object" && parentPath.isMemberExpression()) {
        return false;
      }

      if (path.key == "callee" && (parentPath.isCallExpression() || parentPath.isNewExpression())) {
        return false;
      }

      if (path.key == "argument" && parentPath.isUpdateExpression()) {
        return false;
      }

      if (path.key == "argument" && parentPath.isUnaryExpression({
        operator: "delete"
      })) {
        return false;
      }

      return true;
    });
  }

  return {
    inherits: _pluginSyntaxOptionalChaining.default,
    visitor: {
      "MemberExpression|NewExpression|CallExpression": function MemberExpressionNewExpressionCallExpression(path) {
        if (!path.node.optional) {
          return;
        }

        optional(path, findReplacementPath(path));
      }
    }
  };
}