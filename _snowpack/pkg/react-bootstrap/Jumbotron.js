import { g as getDefaultExportFromCjs, c as createCommonjsModule, r as react } from '../common/index-d3589913.js';
import { i as interopRequireDefault, _ as _extends_1, o as objectWithoutPropertiesLoose, c as classnames, T as ThemeProvider_1 } from '../common/ThemeProvider-a10cbf64.js';

var Jumbotron_1 = createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = void 0;

var _extends2 = interopRequireDefault(_extends_1);

var _objectWithoutPropertiesLoose2 = interopRequireDefault(objectWithoutPropertiesLoose);

var _react = interopRequireDefault(react);

var _classnames = interopRequireDefault(classnames);



var defaultProps = {
  fluid: false
};

var Jumbotron = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var _classes;

  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      className = _ref.className,
      fluid = _ref.fluid,
      bsPrefix = _ref.bsPrefix,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["as", "className", "fluid", "bsPrefix"]);
  bsPrefix = (0, ThemeProvider_1.useBootstrapPrefix)(bsPrefix, 'jumbotron');
  var classes = (_classes = {}, _classes[bsPrefix] = true, _classes[bsPrefix + "-fluid"] = fluid, _classes);
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, classes)
  }));
});

Jumbotron.defaultProps = defaultProps;
Jumbotron.displayName = 'Jumbotron';
var _default = Jumbotron;
exports.default = _default;
module.exports = exports["default"];
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(Jumbotron_1);

export default __pika_web_default_export_for_treeshaking__;
