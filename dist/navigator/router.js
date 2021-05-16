import React from "../../snowpack/pkg/react.js";
import {BrowserRouter as Router, Route, Switch} from "../../snowpack/pkg/react-router-dom.js";
import {ParallaxProvider} from "../../snowpack/pkg/react-scroll-parallax.js";
import {Hubcounter, PersonalDetails, Header, Works, Footer} from "../ui/main.js";
const Globalrouter = () => {
  return /* @__PURE__ */ React.createElement(Router, null, /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    path: "/"
  }, /* @__PURE__ */ React.createElement(ParallaxProvider, null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(PersonalDetails, null), /* @__PURE__ */ React.createElement(Works, null), /* @__PURE__ */ React.createElement(Hubcounter, null), /* @__PURE__ */ React.createElement(Footer, null)))));
};
export default Globalrouter;
