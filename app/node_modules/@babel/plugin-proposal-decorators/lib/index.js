"use strict";

exports.__esModule = true;
exports.default = _default;

var _pluginSyntaxDecorators = _interopRequireDefault(require("@babel/plugin-syntax-decorators"));

var _core = require("@babel/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buildClassDecorator = (0, _core.template)("\n  DECORATOR(CLASS_REF = INNER) || CLASS_REF;\n");
var buildClassPrototype = (0, _core.template)("\n  CLASS_REF.prototype;\n");
var buildGetDescriptor = (0, _core.template)("\n    Object.getOwnPropertyDescriptor(TARGET, PROPERTY);\n");
var buildGetObjectInitializer = (0, _core.template)("\n    (TEMP = Object.getOwnPropertyDescriptor(TARGET, PROPERTY), (TEMP = TEMP ? TEMP.value : undefined), {\n        enumerable: true,\n        configurable: true,\n        writable: true,\n        initializer: function(){\n            return TEMP;\n        }\n    })\n");
var buildInitializerWarningHelper = (0, _core.template)("\n    function NAME(descriptor, context){\n        throw new Error(\n          'Decorating class property failed. Please ensure that ' +\n          'proposal-class-properties is enabled and set to use loose mode. ' +\n          'To use proposal-class-properties in spec mode with decorators, wait for ' +\n          'the next major version of decorators in stage 2.'\n        );\n    }\n");
var buildInitializerDefineProperty = (0, _core.template)("\n    function NAME(target, property, descriptor, context){\n        if (!descriptor) return;\n\n        Object.defineProperty(target, property, {\n            enumerable: descriptor.enumerable,\n            configurable: descriptor.configurable,\n            writable: descriptor.writable,\n            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0,\n        });\n    }\n");
var buildApplyDecoratedDescriptor = (0, _core.template)("\n    function NAME(target, property, decorators, descriptor, context){\n        var desc = {};\n        Object['ke' + 'ys'](descriptor).forEach(function(key){\n            desc[key] = descriptor[key];\n        });\n        desc.enumerable = !!desc.enumerable;\n        desc.configurable = !!desc.configurable;\n        if ('value' in desc || desc.initializer){\n            desc.writable = true;\n        }\n\n        desc = decorators.slice().reverse().reduce(function(desc, decorator){\n            return decorator(target, property, desc) || desc;\n        }, desc);\n\n        if (context && desc.initializer !== void 0){\n            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;\n            desc.initializer = undefined;\n        }\n\n        if (desc.initializer === void 0){\n            // This is a hack to avoid this being processed by 'transform-runtime'.\n            // See issue #9.\n            Object['define' + 'Property'](target, property, desc);\n            desc = null;\n        }\n\n        return desc;\n    }\n");

function _default() {
  function ensureApplyDecoratedDescriptorHelper(path, state) {
    if (!state.applyDecoratedDescriptor) {
      state.applyDecoratedDescriptor = path.scope.generateUidIdentifier("applyDecoratedDescriptor");
      var helper = buildApplyDecoratedDescriptor({
        NAME: state.applyDecoratedDescriptor
      });
      path.scope.getProgramParent().path.unshiftContainer("body", helper);
    }

    return state.applyDecoratedDescriptor;
  }

  function ensureInitializerDefineProp(path, state) {
    if (!state.initializerDefineProp) {
      state.initializerDefineProp = path.scope.generateUidIdentifier("initDefineProp");
      var helper = buildInitializerDefineProperty({
        NAME: state.initializerDefineProp
      });
      path.scope.getProgramParent().path.unshiftContainer("body", helper);
    }

    return state.initializerDefineProp;
  }

  function ensureInitializerWarning(path, state) {
    if (!state.initializerWarningHelper) {
      state.initializerWarningHelper = path.scope.generateUidIdentifier("initializerWarningHelper");
      var helper = buildInitializerWarningHelper({
        NAME: state.initializerWarningHelper
      });
      path.scope.getProgramParent().path.unshiftContainer("body", helper);
    }

    return state.initializerWarningHelper;
  }

  function applyEnsureOrdering(path) {
    var decorators = (path.isClass() ? [path].concat(path.get("body.body")) : path.get("properties")).reduce(function (acc, prop) {
      return acc.concat(prop.node.decorators || []);
    }, []);
    var identDecorators = decorators.filter(function (decorator) {
      return !_core.types.isIdentifier(decorator.expression);
    });
    if (identDecorators.length === 0) return;
    return _core.types.sequenceExpression(identDecorators.map(function (decorator) {
      var expression = decorator.expression;
      var id = decorator.expression = path.scope.generateDeclaredUidIdentifier("dec");
      return _core.types.assignmentExpression("=", id, expression);
    }).concat([path.node]));
  }

  function applyClassDecorators(classPath) {
    var decorators = classPath.node.decorators || [];
    classPath.node.decorators = null;
    if (decorators.length === 0) return;
    var name = classPath.scope.generateDeclaredUidIdentifier("class");
    return decorators.map(function (dec) {
      return dec.expression;
    }).reverse().reduce(function (acc, decorator) {
      return buildClassDecorator({
        CLASS_REF: name,
        DECORATOR: decorator,
        INNER: acc
      }).expression;
    }, classPath.node);
  }

  function applyMethodDecorators(path, state) {
    var hasMethodDecorators = path.node.body.body.some(function (node) {
      return (node.decorators || []).length > 0;
    });
    if (!hasMethodDecorators) return;
    return applyTargetDecorators(path, state, path.node.body.body);
  }

  function applyObjectDecorators(path, state) {
    var hasMethodDecorators = path.node.properties.some(function (node) {
      return (node.decorators || []).length > 0;
    });
    if (!hasMethodDecorators) return;
    return applyTargetDecorators(path, state, path.node.properties);
  }

  function applyTargetDecorators(path, state, decoratedProps) {
    var name = path.scope.generateDeclaredUidIdentifier(path.isClass() ? "class" : "obj");
    var exprs = decoratedProps.reduce(function (acc, node) {
      var decorators = node.decorators || [];
      node.decorators = null;
      if (decorators.length === 0) return acc;

      if (node.computed) {
        throw path.buildCodeFrameError("Computed method/property decorators are not yet supported.");
      }

      var property = _core.types.isLiteral(node.key) ? node.key : _core.types.stringLiteral(node.key.name);
      var target = path.isClass() && !node.static ? buildClassPrototype({
        CLASS_REF: name
      }).expression : name;

      if (_core.types.isClassProperty(node, {
        static: false
      })) {
        var descriptor = path.scope.generateDeclaredUidIdentifier("descriptor");
        var initializer = node.value ? _core.types.functionExpression(null, [], _core.types.blockStatement([_core.types.returnStatement(node.value)])) : _core.types.nullLiteral();
        node.value = _core.types.callExpression(ensureInitializerWarning(path, state), [descriptor, _core.types.thisExpression()]);
        acc = acc.concat([_core.types.assignmentExpression("=", descriptor, _core.types.callExpression(ensureApplyDecoratedDescriptorHelper(path, state), [target, property, _core.types.arrayExpression(decorators.map(function (dec) {
          return dec.expression;
        })), _core.types.objectExpression([_core.types.objectProperty(_core.types.identifier("enumerable"), _core.types.booleanLiteral(true)), _core.types.objectProperty(_core.types.identifier("initializer"), initializer)])]))]);
      } else {
        acc = acc.concat(_core.types.callExpression(ensureApplyDecoratedDescriptorHelper(path, state), [target, property, _core.types.arrayExpression(decorators.map(function (dec) {
          return dec.expression;
        })), _core.types.isObjectProperty(node) || _core.types.isClassProperty(node, {
          static: true
        }) ? buildGetObjectInitializer({
          TEMP: path.scope.generateDeclaredUidIdentifier("init"),
          TARGET: target,
          PROPERTY: property
        }).expression : buildGetDescriptor({
          TARGET: target,
          PROPERTY: property
        }).expression, target]));
      }

      return acc;
    }, []);
    return _core.types.sequenceExpression([_core.types.assignmentExpression("=", name, path.node), _core.types.sequenceExpression(exprs), name]);
  }

  return {
    inherits: _pluginSyntaxDecorators.default,
    visitor: {
      ExportDefaultDeclaration: function ExportDefaultDeclaration(path) {
        if (!path.get("declaration").isClassDeclaration()) return;
        var node = path.node;
        var ref = node.declaration.id || path.scope.generateUidIdentifier("default");
        node.declaration.id = ref;
        path.replaceWith(node.declaration);
        path.insertAfter(_core.types.exportNamedDeclaration(null, [_core.types.exportSpecifier(ref, _core.types.identifier("default"))]));
      },
      ClassDeclaration: function ClassDeclaration(path) {
        var node = path.node;
        var ref = node.id || path.scope.generateUidIdentifier("class");
        path.replaceWith(_core.types.variableDeclaration("let", [_core.types.variableDeclarator(ref, _core.types.toExpression(node))]));
      },
      ClassExpression: function ClassExpression(path, state) {
        var decoratedClass = applyEnsureOrdering(path) || applyClassDecorators(path, state) || applyMethodDecorators(path, state);
        if (decoratedClass) path.replaceWith(decoratedClass);
      },
      ObjectExpression: function ObjectExpression(path, state) {
        var decoratedObject = applyEnsureOrdering(path) || applyObjectDecorators(path, state);
        if (decoratedObject) path.replaceWith(decoratedObject);
      },
      AssignmentExpression: function AssignmentExpression(path, state) {
        if (!state.initializerWarningHelper) return;
        if (!path.get("left").isMemberExpression()) return;
        if (!path.get("left.property").isIdentifier()) return;
        if (!path.get("right").isCallExpression()) return;

        if (!path.get("right.callee").isIdentifier({
          name: state.initializerWarningHelper.name
        })) {
          return;
        }

        path.replaceWith(_core.types.callExpression(ensureInitializerDefineProp(path, state), [path.get("left.object").node, _core.types.stringLiteral(path.get("left.property").node.name), path.get("right.arguments")[0].node, path.get("right.arguments")[1].node]));
      }
    }
  };
}