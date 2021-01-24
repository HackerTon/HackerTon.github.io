// @ts-nocheck
import React, { useEffect, useState } from '../_snowpack/pkg/react.js';
import Img from '../_snowpack/pkg/react-cool-img.js';
import { Link } from '../_snowpack/pkg/react-router-dom.js';

function Ads(props) {
  const choice = ['Android App', 'PDF Parser', 'Data Visualizer', 'Data Augmentation', 'Desktop Application'];
  const [text, setText] = useState(choice[0]);
  useEffect(() => {
    setInterval(() => {
      const randint = Math.floor(Math.random() * choice.length);
      setText(choice[randint]);
    }, 2000);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "ads"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-white",
    style: {
      fontSize: '50px'
    }
  }, "Need a Personal Website for Business?"), /*#__PURE__*/React.createElement("div", {
    className: "text-white",
    style: {
      fontSize: '45px'
    }
  }, "Want a custom", /*#__PURE__*/React.createElement("div", {
    className: "change-cell",
    style: {
      fontSize: '45px',
      display: 'inline'
    }
  }, "\xA0", text, "\xA0"), "for your task?"), /*#__PURE__*/React.createElement("div", {
    className: "text-white"
  }, "Drop a message to", ' ', /*#__PURE__*/React.createElement(Link, {
    to: "/contact-form"
  }, "wizardlordlam@gmail.com"), " by clicking the link"));
}

function Image(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "polaroid"
  }, /*#__PURE__*/React.createElement(Img, {
    src: props.img,
    style: {
      width: '100%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "box"
  }, /*#__PURE__*/React.createElement("p", null, props.text)));
}

function Hubcounter() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const link = 'https://api.github.com/users/HackerTon/repos';
    fetch(link).then(res => {
      return res.json();
    }).then(json => {
      json.sort((a, b) => {
        if (a.updated_at < b.updated_at) {
          return 1;
        } else {
          return -1;
        }
      });
      setData(json);
    }).catch(e => {
      console.error(e);
    });
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "table"
  }, /*#__PURE__*/React.createElement("table", {
    className: "table table-hover"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "thead-dark"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Name"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Username"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Description"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Last update"))), /*#__PURE__*/React.createElement("tbody", null, data.map(slot => {
    const date = new Date(slot.updated_at);
    const year = date.getFullYear();
    return /*#__PURE__*/React.createElement("tr", {
      key: slot.id
    }, /*#__PURE__*/React.createElement("th", {
      scope: "row"
    }, /*#__PURE__*/React.createElement("a", {
      href: slot.html_url
    }, slot.name)), /*#__PURE__*/React.createElement("td", null, slot.owner.login), /*#__PURE__*/React.createElement("td", null, slot.description), /*#__PURE__*/React.createElement("td", null, year));
  }))));
}

export { Hubcounter, Image, Ads };