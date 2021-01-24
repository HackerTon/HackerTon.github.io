import { _ as _objectWithoutPropertiesLoose, a as _extends } from '../common/objectWithoutPropertiesLoose-0056600f.js';
import { u as useBootstrapPrefix, c as classnames } from '../common/ThemeProvider-ef92f2c1.js';
import { r as react } from '../common/index-0ff745df.js';

var defaultProps = {
  fluid: false
};
var Container = /*#__PURE__*/react.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      fluid = _ref.fluid,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "fluid", "as", "className"]);

  var prefix = useBootstrapPrefix(bsPrefix, 'container');
  var suffix = typeof fluid === 'string' ? "-" + fluid : '-fluid';
  return /*#__PURE__*/react.createElement(Component, _extends({
    ref: ref
  }, props, {
    className: classnames(className, fluid ? "" + prefix + suffix : prefix)
  }));
});
Container.displayName = 'Container';
Container.defaultProps = defaultProps;

export default Container;
