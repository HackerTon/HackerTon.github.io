import { _ as _objectWithoutPropertiesLoose, a as _extends } from '../common/objectWithoutPropertiesLoose-0056600f.js';
import { r as react } from '../common/index-0ff745df.js';
import { u as useBootstrapPrefix, c as classnames } from '../common/ThemeProvider-ef92f2c1.js';

var defaultProps = {
  fluid: false
};
var Jumbotron = /*#__PURE__*/react.forwardRef(function (_ref, ref) {
  var _classes;

  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      className = _ref.className,
      fluid = _ref.fluid,
      bsPrefix = _ref.bsPrefix,
      props = _objectWithoutPropertiesLoose(_ref, ["as", "className", "fluid", "bsPrefix"]);

  bsPrefix = useBootstrapPrefix(bsPrefix, 'jumbotron');
  var classes = (_classes = {}, _classes[bsPrefix] = true, _classes[bsPrefix + "-fluid"] = fluid, _classes);
  return /*#__PURE__*/react.createElement(Component, _extends({
    ref: ref
  }, props, {
    className: classnames(className, classes)
  }));
});
Jumbotron.defaultProps = defaultProps;
Jumbotron.displayName = 'Jumbotron';

export default Jumbotron;
