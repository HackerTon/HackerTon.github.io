import { g as getDefaultExportFromCjs, c as createCommonjsModule, r as react } from '../common/index-0ff745df.js';
import { i as interopRequireDefault, _ as _extends_1, o as objectWithoutPropertiesLoose, c as classnames, T as ThemeProvider_1 } from '../common/ThemeProvider-ce5a0fa3.js';
import { p as propTypes } from '../common/index-89cdc518.js';

var Image_1 = createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = exports.propTypes = void 0;

var _extends2 = interopRequireDefault(_extends_1);

var _objectWithoutPropertiesLoose2 = interopRequireDefault(objectWithoutPropertiesLoose);

var _classnames = interopRequireDefault(classnames);

var _react = interopRequireDefault(react);

var _propTypes = interopRequireDefault(propTypes);



var propTypes$1 = {
  /**
   * @default 'img'
   */
  bsPrefix: _propTypes.default.string,

  /**
   * Sets image as fluid image.
   */
  fluid: _propTypes.default.bool,

  /**
   * Sets image shape as rounded.
   */
  rounded: _propTypes.default.bool,

  /**
   * Sets image shape as circle.
   */
  roundedCircle: _propTypes.default.bool,

  /**
   * Sets image shape as thumbnail.
   */
  thumbnail: _propTypes.default.bool
};
exports.propTypes = propTypes$1;
var defaultProps = {
  fluid: false,
  rounded: false,
  roundedCircle: false,
  thumbnail: false
};

var Image = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      fluid = _ref.fluid,
      rounded = _ref.rounded,
      roundedCircle = _ref.roundedCircle,
      thumbnail = _ref.thumbnail,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "fluid", "rounded", "roundedCircle", "thumbnail"]);
  bsPrefix = (0, ThemeProvider_1.useBootstrapPrefix)(bsPrefix, 'img');
  var classes = (0, _classnames.default)(fluid && bsPrefix + "-fluid", rounded && "rounded", roundedCircle && "rounded-circle", thumbnail && bsPrefix + "-thumbnail");
  return /*#__PURE__*/_react.default.createElement("img", (0, _extends2.default)({
    // eslint-disable-line jsx-a11y/alt-text
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, classes)
  }));
});

Image.displayName = 'Image';
Image.defaultProps = defaultProps;
var _default = Image;
exports.default = _default;
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(Image_1);

export default __pika_web_default_export_for_treeshaking__;
