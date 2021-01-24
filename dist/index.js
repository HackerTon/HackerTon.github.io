import * as __SNOWPACK_ENV__ from '../_snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;

import React from '../_snowpack/pkg/react.js';
import ReactDOM from '../_snowpack/pkg/react-dom.js';
import GlobalRouter from './main.js';
ReactDOM.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(GlobalRouter, null)), document.getElementById('root')); // Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement

if (undefined /* [snowpack] import.meta.hot */ ) {
  undefined /* [snowpack] import.meta.hot */ .accept();
}