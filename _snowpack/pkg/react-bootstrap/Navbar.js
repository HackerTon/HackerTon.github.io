import { c as createCommonjsModule, r as react, g as getDefaultExportFromCjs } from '../common/index-d3589913.js';
import { i as interopRequireDefault, _ as _extends_1, o as objectWithoutPropertiesLoose, c as classnames, T as ThemeProvider_1, a as interopRequireWildcard } from '../common/ThemeProvider-a10cbf64.js';
import { c as createChainedFunction_1, u as useEventCallback, e as esm } from '../common/createChainedFunction-91af6b76.js';
import { s as style, T as Transition, t as transitionEndListener_1, a as triggerBrowserReflow_1, c as createWithBsPrefix_1 } from '../common/triggerBrowserReflow-42a15417.js';
import { N as NavbarContext, S as SelectableContext_1 } from '../common/SelectableContext-503c0fe1.js';
import '../common/extends-f0c40b8d.js';
import '../common/index-f36ceb1e.js';
import '../common/index-1486f345.js';

var NavbarBrand_1 = createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = void 0;

var _extends2 = interopRequireDefault(_extends_1);

var _objectWithoutPropertiesLoose2 = interopRequireDefault(objectWithoutPropertiesLoose);

var _classnames = interopRequireDefault(classnames);

var _react = interopRequireDefault(react);



var NavbarBrand = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      as = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "as"]);
  bsPrefix = (0, ThemeProvider_1.useBootstrapPrefix)(bsPrefix, 'navbar-brand');
  var Component = as || (props.href ? 'a' : 'span');
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, bsPrefix)
  }));
});

NavbarBrand.displayName = 'NavbarBrand';
var _default = NavbarBrand;
exports.default = _default;
module.exports = exports["default"];
});

var Collapse_1 = createCommonjsModule(function (module, exports) {





exports.__esModule = true;
exports.default = void 0;

var _extends2 = interopRequireDefault(_extends_1);

var _objectWithoutPropertiesLoose2 = interopRequireDefault(objectWithoutPropertiesLoose);

var _classnames = interopRequireDefault(classnames);

var _css = interopRequireDefault(style);

var _react = interopRequireWildcard(react);

var _Transition = interopRequireWildcard(Transition);

var _transitionEndListener = interopRequireDefault(transitionEndListener_1);

var _createChainedFunction = interopRequireDefault(createChainedFunction_1);

var _triggerBrowserReflow = interopRequireDefault(triggerBrowserReflow_1);

var _collapseStyles;

var MARGINS = {
  height: ['marginTop', 'marginBottom'],
  width: ['marginLeft', 'marginRight']
};

function getDefaultDimensionValue(dimension, elem) {
  var offset = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
  var value = elem[offset];
  var margins = MARGINS[dimension];
  return value + // @ts-ignore
  parseInt((0, _css.default)(elem, margins[0]), 10) + // @ts-ignore
  parseInt((0, _css.default)(elem, margins[1]), 10);
}

var collapseStyles = (_collapseStyles = {}, _collapseStyles[_Transition.EXITED] = 'collapse', _collapseStyles[_Transition.EXITING] = 'collapsing', _collapseStyles[_Transition.ENTERING] = 'collapsing', _collapseStyles[_Transition.ENTERED] = 'collapse show', _collapseStyles);
var defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  getDimensionValue: getDefaultDimensionValue
};

var Collapse = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var onEnter = _ref.onEnter,
      onEntering = _ref.onEntering,
      onEntered = _ref.onEntered,
      onExit = _ref.onExit,
      onExiting = _ref.onExiting,
      className = _ref.className,
      children = _ref.children,
      _ref$dimension = _ref.dimension,
      dimension = _ref$dimension === void 0 ? 'height' : _ref$dimension,
      _ref$getDimensionValu = _ref.getDimensionValue,
      getDimensionValue = _ref$getDimensionValu === void 0 ? getDefaultDimensionValue : _ref$getDimensionValu,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "className", "children", "dimension", "getDimensionValue"]);
  /* Compute dimension */

  var computedDimension = typeof dimension === 'function' ? dimension() : dimension;
  /* -- Expanding -- */

  var handleEnter = (0, _react.useMemo)(function () {
    return (0, _createChainedFunction.default)(function (elem) {
      elem.style[computedDimension] = '0';
    }, onEnter);
  }, [computedDimension, onEnter]);
  var handleEntering = (0, _react.useMemo)(function () {
    return (0, _createChainedFunction.default)(function (elem) {
      var scroll = "scroll" + computedDimension[0].toUpperCase() + computedDimension.slice(1);
      elem.style[computedDimension] = elem[scroll] + "px";
    }, onEntering);
  }, [computedDimension, onEntering]);
  var handleEntered = (0, _react.useMemo)(function () {
    return (0, _createChainedFunction.default)(function (elem) {
      elem.style[computedDimension] = null;
    }, onEntered);
  }, [computedDimension, onEntered]);
  /* -- Collapsing -- */

  var handleExit = (0, _react.useMemo)(function () {
    return (0, _createChainedFunction.default)(function (elem) {
      elem.style[computedDimension] = getDimensionValue(computedDimension, elem) + "px";
      (0, _triggerBrowserReflow.default)(elem);
    }, onExit);
  }, [onExit, getDimensionValue, computedDimension]);
  var handleExiting = (0, _react.useMemo)(function () {
    return (0, _createChainedFunction.default)(function (elem) {
      elem.style[computedDimension] = null;
    }, onExiting);
  }, [computedDimension, onExiting]);
  return /*#__PURE__*/_react.default.createElement(_Transition.default // @ts-ignore
  , (0, _extends2.default)({
    ref: ref,
    addEndListener: _transitionEndListener.default
  }, props, {
    "aria-expanded": props.role ? props.in : null,
    onEnter: handleEnter,
    onEntering: handleEntering,
    onEntered: handleEntered,
    onExit: handleExit,
    onExiting: handleExiting
  }), function (state, innerProps) {
    return /*#__PURE__*/_react.default.cloneElement(children, (0, _extends2.default)({}, innerProps, {
      className: (0, _classnames.default)(className, children.props.className, collapseStyles[state], computedDimension === 'width' && 'width')
    }));
  });
}); // @ts-ignore
// @ts-ignore


Collapse.defaultProps = defaultProps;
var _default = Collapse;
exports.default = _default;
module.exports = exports["default"];
});

var NavbarCollapse_1 = createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = void 0;

var _extends2 = interopRequireDefault(_extends_1);

var _objectWithoutPropertiesLoose2 = interopRequireDefault(objectWithoutPropertiesLoose);

var _react = interopRequireDefault(react);

var _Collapse = interopRequireDefault(Collapse_1);



var _NavbarContext = interopRequireDefault(NavbarContext);

var NavbarCollapse = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      bsPrefix = _ref.bsPrefix,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["children", "bsPrefix"]);
  bsPrefix = (0, ThemeProvider_1.useBootstrapPrefix)(bsPrefix, 'navbar-collapse');
  return /*#__PURE__*/_react.default.createElement(_NavbarContext.default.Consumer, null, function (context) {
    return /*#__PURE__*/_react.default.createElement(_Collapse.default, (0, _extends2.default)({
      in: !!(context && context.expanded)
    }, props), /*#__PURE__*/_react.default.createElement("div", {
      ref: ref,
      className: bsPrefix
    }, children));
  });
});

NavbarCollapse.displayName = 'NavbarCollapse';
var _default = NavbarCollapse;
exports.default = _default;
module.exports = exports["default"];
});

var NavbarToggle_1 = createCommonjsModule(function (module, exports) {





exports.__esModule = true;
exports.default = void 0;

var _extends2 = interopRequireDefault(_extends_1);

var _objectWithoutPropertiesLoose2 = interopRequireDefault(objectWithoutPropertiesLoose);

var _classnames = interopRequireDefault(classnames);

var _react = interopRequireWildcard(react);

var _useEventCallback = interopRequireDefault(useEventCallback);



var _NavbarContext = interopRequireDefault(NavbarContext);

var defaultProps = {
  label: 'Toggle navigation'
};

var NavbarToggle = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      label = _ref.label,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'button' : _ref$as,
      onClick = _ref.onClick,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "children", "label", "as", "onClick"]);
  bsPrefix = (0, ThemeProvider_1.useBootstrapPrefix)(bsPrefix, 'navbar-toggler');

  var _ref2 = (0, _react.useContext)(_NavbarContext.default) || {},
      onToggle = _ref2.onToggle,
      expanded = _ref2.expanded;

  var handleClick = (0, _useEventCallback.default)(function (e) {
    if (onClick) onClick(e);
    if (onToggle) onToggle();
  });

  if (Component === 'button') {
    props.type = 'button';
  }

  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    onClick: handleClick,
    "aria-label": label,
    className: (0, _classnames.default)(className, bsPrefix, !expanded && 'collapsed')
  }), children || /*#__PURE__*/_react.default.createElement("span", {
    className: bsPrefix + "-icon"
  }));
});

NavbarToggle.displayName = 'NavbarToggle';
NavbarToggle.defaultProps = defaultProps;
var _default = NavbarToggle;
exports.default = _default;
module.exports = exports["default"];
});

var Navbar_1 = createCommonjsModule(function (module, exports) {





exports.__esModule = true;
exports.default = void 0;

var _extends2 = interopRequireDefault(_extends_1);

var _objectWithoutPropertiesLoose2 = interopRequireDefault(objectWithoutPropertiesLoose);

var _classnames = interopRequireDefault(classnames);

var _react = interopRequireWildcard(react);



var _createWithBsPrefix = interopRequireDefault(createWithBsPrefix_1);

var _NavbarBrand = interopRequireDefault(NavbarBrand_1);

var _NavbarCollapse = interopRequireDefault(NavbarCollapse_1);

var _NavbarToggle = interopRequireDefault(NavbarToggle_1);



var _NavbarContext = interopRequireDefault(NavbarContext);

var _SelectableContext = interopRequireDefault(SelectableContext_1);

var NavbarText = (0, _createWithBsPrefix.default)('navbar-text', {
  Component: 'span'
});
var defaultProps = {
  expand: true,
  variant: 'light',
  collapseOnSelect: false
};

var Navbar = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _useUncontrolled = (0, esm.useUncontrolled)(props, {
    expanded: 'onToggle'
  }),
      initialBsPrefix = _useUncontrolled.bsPrefix,
      expand = _useUncontrolled.expand,
      variant = _useUncontrolled.variant,
      bg = _useUncontrolled.bg,
      fixed = _useUncontrolled.fixed,
      sticky = _useUncontrolled.sticky,
      className = _useUncontrolled.className,
      children = _useUncontrolled.children,
      _useUncontrolled$as = _useUncontrolled.as,
      Component = _useUncontrolled$as === void 0 ? 'nav' : _useUncontrolled$as,
      expanded = _useUncontrolled.expanded,
      _onToggle = _useUncontrolled.onToggle,
      onSelect = _useUncontrolled.onSelect,
      collapseOnSelect = _useUncontrolled.collapseOnSelect,
      controlledProps = (0, _objectWithoutPropertiesLoose2.default)(_useUncontrolled, ["bsPrefix", "expand", "variant", "bg", "fixed", "sticky", "className", "children", "as", "expanded", "onToggle", "onSelect", "collapseOnSelect"]);

  var bsPrefix = (0, ThemeProvider_1.useBootstrapPrefix)(initialBsPrefix, 'navbar');
  var handleCollapse = (0, _react.useCallback)(function () {
    if (onSelect) onSelect.apply(void 0, arguments);

    if (collapseOnSelect && expanded) {
      if (_onToggle) {
        _onToggle(false);
      }
    }
  }, [onSelect, collapseOnSelect, expanded, _onToggle]); // will result in some false positives but that seems better
  // than false negatives. strict `undefined` check allows explicit
  // "nulling" of the role if the user really doesn't want one

  if (controlledProps.role === undefined && Component !== 'nav') {
    controlledProps.role = 'navigation';
  }

  var expandClass = bsPrefix + "-expand";
  if (typeof expand === 'string') expandClass = expandClass + "-" + expand;
  var navbarContext = (0, _react.useMemo)(function () {
    return {
      onToggle: function onToggle() {
        return _onToggle && _onToggle(!expanded);
      },
      bsPrefix: bsPrefix,
      expanded: !!expanded
    };
  }, [bsPrefix, expanded, _onToggle]);
  return /*#__PURE__*/_react.default.createElement(_NavbarContext.default.Provider, {
    value: navbarContext
  }, /*#__PURE__*/_react.default.createElement(_SelectableContext.default.Provider, {
    value: handleCollapse
  }, /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, controlledProps, {
    className: (0, _classnames.default)(className, bsPrefix, expand && expandClass, variant && bsPrefix + "-" + variant, bg && "bg-" + bg, sticky && "sticky-" + sticky, fixed && "fixed-" + fixed)
  }), children)));
});

Navbar.defaultProps = defaultProps;
Navbar.displayName = 'Navbar';
Navbar.Brand = _NavbarBrand.default;
Navbar.Toggle = _NavbarToggle.default;
Navbar.Collapse = _NavbarCollapse.default;
Navbar.Text = NavbarText;
var _default = Navbar;
exports.default = _default;
module.exports = exports["default"];
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(Navbar_1);

export default __pika_web_default_export_for_treeshaking__;
