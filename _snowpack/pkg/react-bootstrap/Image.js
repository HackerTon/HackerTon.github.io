import { _ as _objectWithoutPropertiesLoose, a as _extends } from '../common/objectWithoutPropertiesLoose-0056600f.js';
import { u as useBootstrapPrefix, c as classnames } from '../common/ThemeProvider-ef92f2c1.js';
import { r as react } from '../common/index-0ff745df.js';
import { p as propTypes$1 } from '../common/index-89cdc518.js';

var propTypes = {
  /**
   * @default 'img'
   */
  bsPrefix: propTypes$1.string,

  /**
   * Sets image as fluid image.
   */
  fluid: propTypes$1.bool,

  /**
   * Sets image shape as rounded.
   */
  rounded: propTypes$1.bool,

  /**
   * Sets image shape as circle.
   */
  roundedCircle: propTypes$1.bool,

  /**
   * Sets image shape as thumbnail.
   */
  thumbnail: propTypes$1.bool
};
var defaultProps = {
  fluid: false,
  rounded: false,
  roundedCircle: false,
  thumbnail: false
};
var Image = /*#__PURE__*/react.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      fluid = _ref.fluid,
      rounded = _ref.rounded,
      roundedCircle = _ref.roundedCircle,
      thumbnail = _ref.thumbnail,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "className", "fluid", "rounded", "roundedCircle", "thumbnail"]);

  bsPrefix = useBootstrapPrefix(bsPrefix, 'img');
  var classes = classnames(fluid && bsPrefix + "-fluid", rounded && "rounded", roundedCircle && "rounded-circle", thumbnail && bsPrefix + "-thumbnail");
  return /*#__PURE__*/react.createElement("img", _extends({
    // eslint-disable-line jsx-a11y/alt-text
    ref: ref
  }, props, {
    className: classnames(className, classes)
  }));
});
Image.displayName = 'Image';
Image.defaultProps = defaultProps;

export default Image;
