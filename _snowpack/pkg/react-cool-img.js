import { r as react } from './common/index-0ff745df.js';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var observerErr = "💡react-cool-img: the browser doesn't support Intersection Observer, please install polyfill to enable lazy loading: https://github.com/wellyshen/react-cool-img#intersection-observer-polyfill";
var thresholdWarn = "💡react-cool-img: the threshold of observerOptions must be a number. Use 0 as fallback.";
var useObserver = (function (debounce, _ref) {
  var root = _ref.root,
      _ref$rootMargin = _ref.rootMargin,
      rootMargin = _ref$rootMargin === void 0 ? "50px" : _ref$rootMargin,
      _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === void 0 ? 0.01 : _ref$threshold;

  var _useState = react.useState(false),
      startLoad = _useState[0],
      setStartLoad = _useState[1];

  var _useState2 = react.useState(null),
      el = _useState2[0],
      setEl = _useState2[1];

  var observerRef = react.useRef(null);
  var timeoutRef = react.useRef(null);
  var erroredRef = react.useRef(false);
  var numThreshold = threshold;

  if (typeof threshold !== "number") {
    console.warn(thresholdWarn);
    numThreshold = 0;
  }

  var resetTimeout = react.useCallback(function () {
    if (!timeoutRef.current) return;
    clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
  }, []);
  react.useEffect(function () {
    if (!("IntersectionObserver" in window) || !("IntersectionObserverEntry" in window)) {
      if (!erroredRef.current) {
        console.error(observerErr);
        erroredRef.current = true;
      }

      setStartLoad(true);
      return function () {
        return null;
      };
    } // eslint-disable-next-line compat/compat


    observerRef.current = new IntersectionObserver(function (_ref2) {
      var _ref2$ = _ref2[0],
          isIntersecting = _ref2$.isIntersecting,
          intersectionRatio = _ref2$.intersectionRatio;
      var inView = isIntersecting !== undefined ? isIntersecting : intersectionRatio > 0;

      if (inView && !startLoad) {
        timeoutRef.current = setTimeout(function () {
          setStartLoad(true);
        }, debounce);
      } else {
        resetTimeout();
      }
    }, {
      root: root,
      rootMargin: rootMargin,
      threshold: numThreshold
    });
    var observer = observerRef.current;
    if (el) observer.observe(el);
    return function () {
      observer.disconnect();
      resetTimeout();
    };
  }, [el, startLoad, root, rootMargin, numThreshold, debounce, resetTimeout]);
  return [setEl, startLoad];
});

var key = "REACT_COOL_IMG";
var set = function set(src) {
  try {
    var data = JSON.parse(sessionStorage.getItem(key) || "{}");
    data[src] = new Date();
    sessionStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    /* istanbul ignore next */
    console.error("\uD83D\uDCA1 react-cool-img: " + error);
  }
};
var get = function get(src) {
  try {
    var data = JSON.parse(sessionStorage.getItem(key) || "{}");
    return !!data[src];
  } catch (error) {
    /* istanbul ignore next */
    console.error("\uD83D\uDCA1 react-cool-img: " + error);
    /* istanbul ignore next */

    return false;
  }
};

/* eslint-disable lines-between-class-members */
var Imager = /*#__PURE__*/function () {
  function Imager() {
    _defineProperty(this, "img", null);

    _defineProperty(this, "timeout", null);

    _defineProperty(this, "retries", 1);
  }

  var _proto = Imager.prototype;

  _proto.load = function load(src, decode, _ref, onError, onLoad, crossOrigin) {
    var _this = this;

    var _ref$count = _ref.count,
        count = _ref$count === void 0 ? 3 : _ref$count,
        _ref$delay = _ref.delay,
        delay = _ref$delay === void 0 ? 2 : _ref$delay,
        _ref$acc = _ref.acc,
        acc = _ref$acc === void 0 ? "*" : _ref$acc;
    this.img = new Image();
    this.img.src = src;
    if (crossOrigin) this.img.crossOrigin = crossOrigin;
    if (decode && this.img.decode) this.img.decode()["catch"](function () {// Ignore decoding error
    }); // @ts-expect-error

    this.img.onerror = function (event) {
      if (!count || _this.retries > count) {
        onError(event);
        return;
      }

      var time = acc === "*" ? Math.pow(delay, _this.retries) : delay * _this.retries;
      if (acc === false) time = delay;
      _this.timeout = setTimeout(function () {
        _this.clearImgSrc();

        _this.img.src = src;
      }, time * 1000);
      _this.retries += 1;
    };

    this.img.onload = function (event) {
      onLoad(event);
    };
  };

  _proto.unload = function unload() {
    if (this.img) {
      this.img.onerror = null;
      this.img.onload = null;
      this.clearImgSrc();
      this.img = null;
    }

    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }

    this.retries = 1;
  };

  _proto.clearImgSrc = function clearImgSrc() {
    /* istanbul ignore next */
    this.img.src = "";
    /* istanbul ignore next */

    try {
      /* istanbul ignore next */
      // @ts-ignore
      delete this.img.src;
    } catch (error) {// Ignore the error of deleting object properties in Safari strict mode
    }
  };

  return Imager;
}();

var Img = /*#__PURE__*/react.forwardRef(function (_ref, ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className,
      placeholder = _ref.placeholder,
      src = _ref.src,
      error = _ref.error,
      crossOrigin = _ref.crossOrigin,
      _ref$decode = _ref.decode,
      decode = _ref$decode === void 0 ? true : _ref$decode,
      _ref$lazy = _ref.lazy,
      lazy = _ref$lazy === void 0 ? true : _ref$lazy,
      _ref$cache = _ref.cache,
      cache = _ref$cache === void 0 ? true : _ref$cache,
      _ref$debounce = _ref.debounce,
      debounce = _ref$debounce === void 0 ? 300 : _ref$debounce,
      _ref$observerOptions = _ref.observerOptions,
      observerOptions = _ref$observerOptions === void 0 ? {} : _ref$observerOptions,
      _ref$retry = _ref.retry,
      retry = _ref$retry === void 0 ? {} : _ref$retry,
      srcSet = _ref.srcSet,
      sizes = _ref.sizes,
      onError = _ref.onError,
      onLoad = _ref.onLoad,
      rest = _objectWithoutPropertiesLoose(_ref, ["className", "placeholder", "src", "error", "crossOrigin", "decode", "lazy", "cache", "debounce", "observerOptions", "retry", "srcSet", "sizes", "onError", "onLoad"]);

  var imagerRef = react.useRef(new Imager());

  var _useObserver = useObserver(debounce, observerOptions),
      setImg = _useObserver[0],
      startLoad = _useObserver[1];

  var _useState = react.useState(placeholder || "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="),
      source = _useState[0],
      setSource = _useState[1];

  var isSrc = source === src;
  var filename = src ? src.replace(/^.*[\\/]/, "").split(".")[0] : "";

  var setRef = function setRef(el) {
    if (!el) return;
    setImg(el); // eslint-disable-next-line no-param-reassign

    if (ref) ref.current = el;
  };

  var handleError = function handleError(event) {
    if (onError) onError(event);

    if (error) {
      setSource(error);
    } else if (placeholder) {
      setSource(placeholder);
    }
  };

  var handleLoad = function handleLoad(event) {
    if (onLoad) onLoad(event);
    setSource(src);
    if (cache) set(src);
  };

  react.useEffect(function () {
    var imager = imagerRef.current;

    var loadImg = function loadImg() {
      imager.load(src, decode, retry, handleError, handleLoad, crossOrigin);
    };

    if (!lazy || cache && get(src)) {
      loadImg();
    } else if (startLoad) {
      loadImg();
    }

    return function () {
      imager.unload();
    };
  }, [cache, startLoad, src, crossOrigin, decode, retry]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("img", _extends({
    className: className + " no-js-" + filename,
    src: source,
    crossOrigin: isSrc ? crossOrigin : undefined,
    srcSet: isSrc ? srcSet : undefined,
    sizes: isSrc ? sizes : undefined
  }, rest, {
    ref: setRef
  })), /*#__PURE__*/react.createElement("noscript", null, /*#__PURE__*/react.createElement("style", null, ".no-js-" + filename + " { display: none !important; }"), /*#__PURE__*/react.createElement("img", _extends({
    className: className,
    src: src,
    crossOrigin: crossOrigin,
    srcSet: srcSet,
    sizes: sizes
  }, rest))));
});
var index = /*#__PURE__*/react.memo(Img);

export default index;
