import { g as getDefaultExportFromCjs, c as createCommonjsModule, r as react } from '../common/index-d3589913.js';
import { i as interopRequireDefault, _ as _extends_1, o as objectWithoutPropertiesLoose, c as classnames, T as ThemeProvider_1 } from '../common/ThemeProvider-a10cbf64.js';

var Row_1 = createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = void 0;

var _extends2 = interopRequireDefault(_extends_1);

var _objectWithoutPropertiesLoose2 = interopRequireDefault(objectWithoutPropertiesLoose);

var _classnames = interopRequireDefault(classnames);

var _react = interopRequireDefault(react);



var DEVICE_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'];
var defaultProps = {
  noGutters: false
};

var Row = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      noGutters = _ref.noGutters,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "noGutters", "as"]);
  var decoratedBsPrefix = (0, ThemeProvider_1.useBootstrapPrefix)(bsPrefix, 'row');
  var sizePrefix = decoratedBsPrefix + "-cols";
  var classes = [];
  DEVICE_SIZES.forEach(function (brkPoint) {
    var propValue = props[brkPoint];
    delete props[brkPoint];
    var cols;

    if (propValue != null && typeof propValue === 'object') {
      cols = propValue.cols;
    } else {
      cols = propValue;
    }

    var infix = brkPoint !== 'xs' ? "-" + brkPoint : '';
    if (cols != null) classes.push("" + sizePrefix + infix + "-" + cols);
  });
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: _classnames.default.apply(void 0, [className, decoratedBsPrefix, noGutters && 'no-gutters'].concat(classes))
  }));
});

Row.displayName = 'Row';
Row.defaultProps = defaultProps;
var _default = Row;
exports.default = _default;
module.exports = exports["default"];
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(Row_1);

export default __pika_web_default_export_for_treeshaking__;
