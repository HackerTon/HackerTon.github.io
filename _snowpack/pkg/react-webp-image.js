import { r as react } from './common/index-0ff745df.js';

var _this = undefined,
    _jsxFileName = "/Users/tylerwolff/dev/react-webp-image/src/index.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var __pika_web_default_export_for_treeshaking__ = (function (_ref) {
  var webp = _ref.webp,
      src = _ref.src,
      rest = _objectWithoutPropertiesLoose(_ref, ["webp", "src"]);

  return /*#__PURE__*/react.createElement("picture", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 3
    }
  }, /*#__PURE__*/react.createElement("source", {
    srcSet: webp,
    type: "image/webp",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }), /*#__PURE__*/react.createElement("source", {
    srcSet: src,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }), /*#__PURE__*/react.createElement("img", _extends({
    src: src
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  })));
});

export default __pika_web_default_export_for_treeshaking__;
