import React, {useEffect, useState} from "../../snowpack/pkg/react.js";
import {Link} from "../../snowpack/pkg/react-router-dom.js";
export const Ads = () => {
  const choice = [
    "Android App",
    "PDF Parser",
    "Data Visualizer",
    "Data Augmentation",
    "Desktop Application"
  ];
  const [text, setText] = useState(choice[0]);
  useEffect(() => {
    setInterval(() => {
      const randint = Math.floor(Math.random() * choice.length);
      setText(choice[randint]);
    }, 2e3);
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    className: "ads"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-white",
    style: {fontSize: "50px"}
  }, "Need a Personal Website for Business?"), /* @__PURE__ */ React.createElement("div", {
    className: "text-white",
    style: {fontSize: "45px"}
  }, "Want a custom", /* @__PURE__ */ React.createElement("div", {
    className: "change-cell",
    style: {fontSize: "45px", display: "inline"}
  }, " ", text, " "), "for your task?"), /* @__PURE__ */ React.createElement("div", {
    className: "text-white"
  }, "Drop a message to", " ", /* @__PURE__ */ React.createElement(Link, {
    to: "/contact-form"
  }, "wizardlordlam@gmail.com"), " by clicking the link"));
};
