import Me1w from "../image/alanme.webp.proxy.js";
import Pic9w from "../image/discussiondigicha.webp.proxy.js";
import Pic4w from "../image/group.webp.proxy.js";
import Pic8w from "../image/meandmodel.webp.proxy.js";
import Pic7w from "../image/modelback.webp.proxy.js";
import Pic6w from "../image/modelfront.webp.proxy.js";
import Octo from "../image/octocat.svg.proxy.js";
import Pic1w from "../image/pic1.webp.proxy.js";
import Pic2w from "../image/pic2.webp.proxy.js";
import Pic3w from "../image/pic3.webp.proxy.js";
import Pic5w from "../image/pic5.webp.proxy.js";
import Pic10w from "../image/round2game.webp.proxy.js";
import Pic11w from "../image/round3.webp.proxy.js";
import Twitterw from "../image/twitter.svg.proxy.js";
import Webinar1 from "../image/webinar4.webp.proxy.js";
import Webinar2 from "../image/webinar5.webp.proxy.js";
import Webinar3 from "../image/webinar6.webp.proxy.js";
import Webinar4 from "../image/webinar7.webp.proxy.js";
import Workshop1 from "../image/workshop1.webp.proxy.js";
import Workshop2 from "../image/workshop2.webp.proxy.js";
import Workshop3 from "../image/workshop3.webp.proxy.js";
import Workshop4 from "../image/workshop4.webp.proxy.js";
import React, {useEffect, useState} from "../../snowpack/pkg/react.js";
import {
  LazyLoadImage,
  trackWindowScroll
} from "../../snowpack/pkg/react-lazy-load-image-component.js";
import "../../snowpack/pkg/react-lazy-load-image-component/src/effects/blur.css.proxy.js";
import {Parallax} from "../../snowpack/pkg/react-scroll-parallax.js";
import "./main.css.proxy.js";
const MyImage = ({className, src, alt, scrollPosition}) => {
  const newclassName = className + " flex flex-col items-center justify-between space-y-2";
  return /* @__PURE__ */ React.createElement("div", {
    className: newclassName
  }, /* @__PURE__ */ React.createElement("a", {
    href: src
  }, /* @__PURE__ */ React.createElement(LazyLoadImage, {
    className: "rounded-sm object-contain h-full md:h-52 w-full",
    src,
    effect: "blur",
    scrollPosition
  })), /* @__PURE__ */ React.createElement("div", {
    className: "text-center mx-9"
  }, alt));
};
const Button = (props) => {
  return /* @__PURE__ */ React.createElement("a", {
    className: "transition-all duration-500 rounded-sm ring-2 ring-white p-2 hover:opacity-50" + props.className,
    href: props.href
  }, /* @__PURE__ */ React.createElement("p", {
    className: "fond-mono"
  }, props.text));
};
const Playful = () => {
  let content = "";
  for (let i = 1; i < 1e3; ++i) {
    const dx = i * 1;
    const dy = 400 - Math.random() * 300;
    content = content + `${dx},${dy} `;
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("p", null, "DYNAMIC SOUND"), /* @__PURE__ */ React.createElement("svg", {
    height: "500",
    width: "500"
  }, /* @__PURE__ */ React.createElement("polyline", {
    points: content,
    stroke: "red",
    strokeWidth: "2",
    fill: "none"
  })));
};
export const Header = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("div", {
    className: "sticky top-0 flex items-center justify-between px-4 h-12 w-full bg-yellow-500 shadow-md bg-blend-overlay z-50"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "font-semibold",
    href: "#"
  }, "Alan Website"), /* @__PURE__ */ React.createElement(Button, {
    text: "CONTACT ME",
    href: "#"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "h-screen flex flex-col md:flex-row justify-center md:space-x-5 items-center bg-yellow-400 space-y-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement(LazyLoadImage, {
    className: "rounded-full border-4 border-white shadow-lg h-52 md:h-64",
    src: Me1w,
    effect: "blur"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "text-center md:text-left"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "font-semibold text-5xl"
  }, "Alan Lam"), /* @__PURE__ */ React.createElement("p", {
    className: "font-mono text-md md:text-lg"
  }, "UKM Computer Science B.Sc Student"), /* @__PURE__ */ React.createElement("a", {
    className: "font-mono hover:text-blue-500",
    href: "mailto:A175960@siswa.ukm.edu.my"
  }, "A175960@siswa.ukm.edu.my"), /* @__PURE__ */ React.createElement("div", {
    className: "flex pt-1 space-x-3"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "transform hover:scale-125 ease-out transition-transform duration-700",
    href: "https://github.com/HackerTon"
  }, /* @__PURE__ */ React.createElement(LazyLoadImage, {
    className: "rounded-full border-4 border-white drop-shadow-2xl h-14",
    src: Octo,
    effect: "blur"
  })), /* @__PURE__ */ React.createElement("a", {
    className: "transform hover:scale-125 ease-out transition-transform duration-700",
    href: "https://twitter.com/HackerTonWizard"
  }, /* @__PURE__ */ React.createElement(LazyLoadImage, {
    className: "rounded-full drop-shadow-2xl h-14",
    src: Twitterw,
    effect: "blur"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col space-y-4 pt-2 md:flex-row md:space-y-0 md:space-x-4 pb-16 md:pb-0"
  }, /* @__PURE__ */ React.createElement(Button, {
    text: "VIEW MY BIOGRAPHY",
    href: "#1"
  }), /* @__PURE__ */ React.createElement(Button, {
    text: "VIEW MY WORK",
    href: "#2"
  })))));
};
const ProgressBar = (props) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("p", null, props.text), /* @__PURE__ */ React.createElement("div", {
    className: "flex-1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "overflow-hidden h-3 mb-1 flex rounded w-32 bg-blue-900"
  }, /* @__PURE__ */ React.createElement("div", {
    style: {width: `${props.filled}%`},
    className: "flex flex-col text-center justify-center bg-blue-500 md:animate-pulse"
  }))));
};
export const PersonalDetails = () => {
  return /* @__PURE__ */ React.createElement("div", {
    id: "1",
    className: "bg-yellow-200 flex flex-col px-6 md:px-32 py-16 space-y-2"
  }, /* @__PURE__ */ React.createElement(Parallax, {
    x: [-10, 0]
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-5xl font-bold bg-gray-0 mb-3"
  }, "PERSONAL DETAILS")), /* @__PURE__ */ React.createElement("p", {
    className: "font-mono text-justify"
  }, "I am a first year student at", " ", /* @__PURE__ */ React.createElement("a", {
    className: "transition-opacity duration-300 hover:opacity-50 font-bold",
    href: "http://www.ftsm.ukm.my/"
  }, "National University of Malaysia Falculty of Information Science and Technology"), ", where I pursue my interest in Machine Learning. Previously, I was a Form-6 student at Kajang Highschool majoring in Physics. Over the course of my first semester my contribution to School@UKM was where I managed the program prior by scheduling teams for their specific role in the program, prepared modules for the participants. Together with my team, I designed and was the primary instructor for teaching materials at School@UKM. The program consisted of 26 participants in 2019. Furthermore, I am also a Robotic teacher at CSDS Prima teaching children to build and code robots."), /* @__PURE__ */ React.createElement("p", {
    className: "font-mono text-justify"
  }, "On the fun side, I developed more and more each day. I developed number of Deep Learning projects in Python (i.e:EndToEndselfDriving, ExpandingNetwork, robosot-nav) because I love the simplicity and efficiency of Python."), /* @__PURE__ */ React.createElement("p", {
    className: "font-mono text-justify space-y-1 pt-6"
  }, /* @__PURE__ */ React.createElement("p", null, "Familiar Programing language:"), /* @__PURE__ */ React.createElement(ProgressBar, {
    text: "Python",
    filled: 70
  }), /* @__PURE__ */ React.createElement(ProgressBar, {
    text: "C++",
    filled: 50
  }), /* @__PURE__ */ React.createElement(ProgressBar, {
    text: "Java",
    filled: 20
  }), /* @__PURE__ */ React.createElement(ProgressBar, {
    text: "Javascript",
    filled: 30
  }), /* @__PURE__ */ React.createElement(ProgressBar, {
    text: "NOSQL",
    filled: 20
  }), /* @__PURE__ */ React.createElement("p", {
    className: "pt-2"
  }, "Familiar Tools: git(Collaboration), TravisCI(Continuous deployment), ros(robot operating system), gazebo(robot simulator)")), /* @__PURE__ */ React.createElement("p", {
    className: "font-mono text-justify pt-6"
  }, /* @__PURE__ */ React.createElement("p", null, "Working Experience "), /* @__PURE__ */ React.createElement("p", null, "2019 - Present CSDS Prima Instructor (Part-time)"), /* @__PURE__ */ React.createElement("p", null, "2019 - June 2019 Sri laju Tuition Center Tutor"), /* @__PURE__ */ React.createElement("p", null, "2015 - 2016 D'Touch International Sdn Bhd IT Technician (Part-time)")), /* @__PURE__ */ React.createElement("p", {
    className: "font-mono text-justify pt-6"
  }, "Timeline June 2020: FirstYear BS.c student Running Digital Challenge Dec 2019: FirstYear BS.c student Running digital challenge"));
};
export const Works = trackWindowScroll((props) => {
  return /* @__PURE__ */ React.createElement("div", {
    id: "2",
    className: "bg-gray-200 px-6 md:px-32 p-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement(Parallax, {
    x: [-10, 0]
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-5xl font-bold bg-gray-0 mb-3"
  }, "PAST WORKS"))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "md:grid md:grid-cols-4"
  }, /* @__PURE__ */ React.createElement(MyImage, {
    className: "p-3",
    src: Pic1w,
    alt: "December 2019 Mem Presenting The Certificates",
    scrollPosition: props.scrollPosition
  }), /* @__PURE__ */ React.createElement(MyImage, {
    className: "p-3",
    src: Pic3w,
    alt: "December 2019 Preparing To Teach",
    scrollPosition: props.scrollPosition
  }), /* @__PURE__ */ React.createElement(MyImage, {
    className: "p-3",
    src: Pic2w,
    alt: "December 2019 Registering Participants",
    scrollPosition: props.scrollPosition
  }), /* @__PURE__ */ React.createElement(MyImage, {
    className: "p-3",
    src: Pic4w,
    alt: "December 2019 Group Photo Of Participants and Members",
    scrollPosition: props.scrollPosition
  })), /* @__PURE__ */ React.createElement("div", {
    className: "md:grid md:grid-cols-3"
  }, /* @__PURE__ */ React.createElement(MyImage, {
    className: "p-2",
    src: Pic6w,
    alt: "ALAN",
    scrollPosition: props.scrollPosition
  }), /* @__PURE__ */ React.createElement(MyImage, {
    className: "p-2",
    src: Pic7w,
    alt: "ALAN",
    scrollPosition: props.scrollPosition
  }), /* @__PURE__ */ React.createElement(MyImage, {
    className: "p-2",
    src: Pic8w,
    alt: "ALAN",
    scrollPosition: props.scrollPosition
  })), /* @__PURE__ */ React.createElement("div", {
    className: "md:grid md:grid-cols-4"
  }, /* @__PURE__ */ React.createElement(MyImage, {
    className: "p-2",
    src: Pic5w,
    alt: "ALAN",
    scrollPosition: props.scrollPosition
  }), /* @__PURE__ */ React.createElement(MyImage, {
    className: "p-2",
    src: Pic9w,
    alt: "ALAN",
    scrollPosition: props.scrollPosition
  }), /* @__PURE__ */ React.createElement(MyImage, {
    className: "p-2",
    src: Pic10w,
    alt: "ALAN",
    scrollPosition: props.scrollPosition
  }), /* @__PURE__ */ React.createElement(MyImage, {
    className: "p-2",
    src: Pic11w,
    alt: "ALAN",
    scrollPosition: props.scrollPosition
  })), /* @__PURE__ */ React.createElement("div", {
    className: "md:grid md:grid-cols-4 "
  }, /* @__PURE__ */ React.createElement(MyImage, {
    className: "p-2",
    src: Webinar1,
    alt: "",
    scrollPosition: props.scrollPosition
  }), /* @__PURE__ */ React.createElement(MyImage, {
    className: "p-2",
    src: Webinar2,
    scrollPosition: props.scrollPosition
  }), /* @__PURE__ */ React.createElement(MyImage, {
    className: "p-2",
    src: Webinar3,
    scrollPosition: props.scrollPosition
  }), /* @__PURE__ */ React.createElement(MyImage, {
    className: "p-2",
    src: Webinar4,
    scrollPosition: props.scrollPosition
  })), /* @__PURE__ */ React.createElement("div", {
    className: "md:grid md:grid-cols-4 "
  }, /* @__PURE__ */ React.createElement(MyImage, {
    className: "p-2",
    src: Workshop1,
    scrollPosition: props.scrollPosition
  }), /* @__PURE__ */ React.createElement(MyImage, {
    className: "p-2",
    src: Workshop2,
    scrollPosition: props.scrollPosition
  }), /* @__PURE__ */ React.createElement(MyImage, {
    className: "p-2",
    src: Workshop3,
    scrollPosition: props.scrollPosition
  }), /* @__PURE__ */ React.createElement(MyImage, {
    className: "p-2",
    src: Workshop4,
    scrollPosition: props.scrollPosition
  }))));
});
export const Maintenance = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "min-h-screen bg-yellow-400 flex flex-col justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "m-auto space-y-2 text-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl font-semibold"
  }, "This Page is still under maintenance"), /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl text-gray-600"
  }, "Thank you for your patience")), /* @__PURE__ */ React.createElement("div", {
    className: "bg-white pt-2 pb-2 pl-4 min-w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "font-semibold"
  }, "Designed and coded by hackerton"), /* @__PURE__ */ React.createElement("p", {
    className: "font-mono"
  }, "Copyright © ", new Date().getFullYear(), " ALAN LAM, All Rights Reserved"))));
};
export const Hubcounter = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const link = "https://api.github.com/users/HackerTon/repos";
    fetch(link).then((res) => {
      return res.json();
    }).then((json) => {
      json.sort((a, b) => {
        if (a.updated_at < b.updated_at) {
          return 1;
        } else {
          return -1;
        }
      });
      setData(json);
    }).catch((e) => {
      console.error(e);
    });
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    id: "2",
    className: "bg-blue-50 px-6 md:px-32 p-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement(Parallax, {
    x: [-10, 0]
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-5xl font-bold bg-gray-0 mb-3"
  }, "PAST WORKS"))), /* @__PURE__ */ React.createElement("div", {
    className: "flex align-middle flex-col opacity-70"
  }, /* @__PURE__ */ React.createElement("table", {
    className: "font-thin"
  }, /* @__PURE__ */ React.createElement("thead", {
    className: "thead-dark"
  }, /* @__PURE__ */ React.createElement("tr", {
    className: ""
  }, /* @__PURE__ */ React.createElement("th", {
    className: ""
  }, "Name"), /* @__PURE__ */ React.createElement("th", {
    className: "hidden md:table-cell"
  }, "Username"), /* @__PURE__ */ React.createElement("th", {
    className: "hidden md:table-cell"
  }, "Description"), /* @__PURE__ */ React.createElement("th", {
    className: "hidden md:table-cell"
  }, "Last update"))), /* @__PURE__ */ React.createElement("tbody", null, data.map((slot) => {
    const date = new Date(slot.updated_at);
    const year = date.getFullYear();
    return /* @__PURE__ */ React.createElement("tr", {
      className: "text-left",
      key: slot.id
    }, /* @__PURE__ */ React.createElement("td", {
      className: "border-2 border-blue-600 p-2"
    }, /* @__PURE__ */ React.createElement("a", {
      href: slot.html_url
    }, slot.name)), /* @__PURE__ */ React.createElement("td", {
      className: "border-2 border-blue-600 hidden md:table-cell p-2 text-center"
    }, slot.owner.login), /* @__PURE__ */ React.createElement("td", {
      className: "border-2 border-blue-600 hidden md:table-cell p-2"
    }, slot.description), /* @__PURE__ */ React.createElement("td", {
      className: "border-2 border-blue-600 hidden md:table-cell text-center"
    }, year));
  })))));
};
export const Footer = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "py-2 pl-4 w-full bg-yellow-300"
  }, /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "font-semibold"
  }, "Designed and coded by hackerton"), /* @__PURE__ */ React.createElement("p", {
    className: "font-mono"
  }, "Copyright © ", new Date().getFullYear(), " ALAN LAM, All Rights Reserved")));
};
