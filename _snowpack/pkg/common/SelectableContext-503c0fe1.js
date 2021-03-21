import { c as createCommonjsModule, r as react } from './index-d3589913.js';
import { i as interopRequireDefault } from './ThemeProvider-a10cbf64.js';

var NavbarContext = createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = void 0;

var _react = interopRequireDefault(react);

var context = /*#__PURE__*/_react.default.createContext(null);

context.displayName = 'NavbarContext';
var _default = context;
exports.default = _default;
module.exports = exports["default"];
});

var SelectableContext_1 = createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = exports.makeEventKey = void 0;

var _react = interopRequireDefault(react);

var SelectableContext = /*#__PURE__*/_react.default.createContext(null);

var makeEventKey = function makeEventKey(eventKey, href) {
  if (href === void 0) {
    href = null;
  }

  if (eventKey != null) return String(eventKey);
  return href || null;
};

exports.makeEventKey = makeEventKey;
var _default = SelectableContext;
exports.default = _default;
});

export { NavbarContext as N, SelectableContext_1 as S };
