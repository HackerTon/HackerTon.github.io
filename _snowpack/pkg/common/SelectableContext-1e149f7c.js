import { r as react } from './index-0ff745df.js';

var context = /*#__PURE__*/react.createContext(null);
context.displayName = 'NavbarContext';

var SelectableContext = /*#__PURE__*/react.createContext(null);
var makeEventKey = function makeEventKey(eventKey, href) {
  if (href === void 0) {
    href = null;
  }

  if (eventKey != null) return String(eventKey);
  return href || null;
};

export { SelectableContext as S, context as c, makeEventKey as m };
