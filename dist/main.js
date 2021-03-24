import React from "../snowpack/pkg/react.js";
import {BrowserRouter as Router, Route, Switch} from "../snowpack/pkg/react-router-dom.js";
import Pic9w from "./image/discussiondigicha.webp.proxy.js";
import Pic4w from "./image/group.webp.proxy.js";
import Pic8w from "./image/meandmodel.webp.proxy.js";
import Pic7w from "./image/modelback.webp.proxy.js";
import Pic6w from "./image/modelfront.webp.proxy.js";
import Pic1w from "./image/pic1.webp.proxy.js";
import Pic2w from "./image/pic2.webp.proxy.js";
import Pic3w from "./image/pic3.webp.proxy.js";
import Pic5w from "./image/pic5.webp.proxy.js";
import Pic10w from "./image/round2game.webp.proxy.js";
import Pic11w from "./image/round3.webp.proxy.js";
import Webinar1 from "./image/webinar4.webp.proxy.js";
import Webinar2 from "./image/webinar5.webp.proxy.js";
import Webinar4 from "./image/webinar7.webp.proxy.js";
import Workshop1 from "./image/workshop1.webp.proxy.js";
import Workshop2 from "./image/workshop2.webp.proxy.js";
import Workshop3 from "./image/workshop3.webp.proxy.js";
import Gif from "./image/trashmoving.gif.proxy.js";
import "./main.css.proxy.js";
import {Hubcounter, Image as Image1} from "./module.js";
function Globalrouter() {
  return /* @__PURE__ */ React.createElement(Router, null, /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    path: "/contact-form"
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/"
  }, /* @__PURE__ */ React.createElement(Maintenance, null))));
}
const Maintenance = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "min-h-screen bg-yellow-400 flex flex-col justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "m-auto space-y-2 text-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl font-semibold"
  }, "This Page is still under maintenance"), /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl text-gray-600"
  }, "Thank you for your patient")), /* @__PURE__ */ React.createElement("div", {
    className: "bg-white pt-2 pb-2 pl-4 min-w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "font-semibold"
  }, "Designed and coded by hackerton"), /* @__PURE__ */ React.createElement("p", {
    className: "font-mono"
  }, "Copyright © ", new Date().getFullYear(), " ALAN LAM, All Rights Reserved"))));
};
const TopBottom = (props) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "min-h-screen bg-yellow-500 p-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "space-y-2 md:grid md:grid-cols-2 bg-white shadow-md rounded-xl p-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: Pic10w,
    className: "rounded-3xl"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "pt-2"
  }, "This is a picture of me")), /* @__PURE__ */ React.createElement("div", {
    className: "md:ml-5 md:flex md:flex-col md:justify-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-black text-4xl font-semibold"
  }, "Hello there,"), /* @__PURE__ */ React.createElement("h1", {
    className: "text-gray-400 text-2xl font-mono"
  }, "my name is Alan"))));
};
function Mainpage() {
  return /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, {
    id: "one"
  }, "Skills", /* @__PURE__ */ React.createElement("br", null), "Language spoken: English, Mandarin, Malay", /* @__PURE__ */ React.createElement("br", null), "Familiar Programing language: C++, Python, Nodejs, CUDA, NoSQL, Javascript", /* @__PURE__ */ React.createElement("br", null), "Familiar Tools: git(Collaboration), TravisCI(Continuous deployment), ros(robot operating system), gazebo(robot simulator)", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", null, "Working Experience", /* @__PURE__ */ React.createElement("br", null), "2019 - Present CSDS Prima Instructor (Part-time)", /* @__PURE__ */ React.createElement("br", null), "2019 - June 2019 Sri laju Tuition Center Tutor", /* @__PURE__ */ React.createElement("br", null), "2015 - 2016 D'Touch International Sdn Bhd IT Technician (Part-time)"), /* @__PURE__ */ React.createElement("p", null, "Timeline", /* @__PURE__ */ React.createElement("br", null), "June 2020: FirstYear BS.c student Running Digital Challenge", /* @__PURE__ */ React.createElement("br", null), "Dec 2019: FirstYear BS.c student Running digital challenge"))), /* @__PURE__ */ React.createElement("hr", {
    className: "soft"
  }), /* @__PURE__ */ React.createElement(Row, {
    id: "two"
  }, /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement("h1", null, "Activities"), /* @__PURE__ */ React.createElement("h2", null, "Workshop Image Classification"), /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement(Image1, {
    text: "December 2020 Teaching about the theory behind deeplearning",
    img: Workshop1
  })), /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement(Image1, {
    text: "December 2020 Using colab notebook to explain the process",
    img: Workshop2
  })), /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement(Image1, {
    text: "December 2020 Evaluating winner and demonstration",
    img: Workshop3
  }))))), /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement("h2", null, "Webinar Industry Robotics and Ros"), /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement(Image1, {
    text: "December 2020 Beginning Of The Session",
    img: Webinar1
  })), /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement(Image1, {
    text: "December 2020 Sharing session of Mr.Khusaifah",
    img: Webinar2
  })), /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement(Image1, {
    text: "December 2020 Inquiring Mr.Fakrul on details of implementation",
    img: Webinar4
  }))))), /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement("h2", null, "Digital Challenge E-Sport"), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col"
  }, /* @__PURE__ */ React.createElement(Image1, {
    text: "June 2020 Program Discussion",
    img: Pic9w
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col"
  }, /* @__PURE__ */ React.createElement(Image1, {
    text: "June 2020 Round 2 Team LCC vs TEAM FSKPEB",
    img: Pic10w
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col"
  }, /* @__PURE__ */ React.createElement(Image1, {
    text: "June 2020 Round 5 team Venomous vs team FSKPEB",
    img: Pic11w
  }))))), /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement("h2", null, "Innovasi Majukan Alam Sekitar"), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col"
  }, /* @__PURE__ */ React.createElement(Image1, {
    text: "June 2020 Me and The Model",
    img: Pic8w
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col"
  }, /* @__PURE__ */ React.createElement(Image1, {
    text: "June 2020 Finish Model Front View",
    img: Pic6w
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col"
  }, /* @__PURE__ */ React.createElement(Image1, {
    text: "June 2020 FInish model Rear View",
    img: Pic7w
  }))), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "polaroid"
  }, /* @__PURE__ */ React.createElement(GifPlayer, {
    gif: Gif,
    autoplay: true
  }), /* @__PURE__ */ React.createElement("div", {
    className: "box"
  }, /* @__PURE__ */ React.createElement("p", null, "June 2020 Demonstration"))))), /* @__PURE__ */ React.createElement("br", null))), /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement("h2", null, "School@UKM"), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col"
  }, /* @__PURE__ */ React.createElement(Image1, {
    text: "December 2019 Registering Participants",
    img: Pic2w
  }))), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col"
  }, /* @__PURE__ */ React.createElement(Image1, {
    text: "December 2019 Preparing To Teach",
    img: Pic3w
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col"
  }, /* @__PURE__ */ React.createElement(Image1, {
    text: "December 2019 Participants Learning About Gazebo",
    img: Pic5w
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col"
  }, /* @__PURE__ */ React.createElement(Image1, {
    text: "December 2019 Mem Presenting The Certificates",
    img: Pic1w
  }))), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col"
  }, /* @__PURE__ */ React.createElement(Image1, {
    text: "December 2019 Group Photo Of Participants and Members",
    img: Pic4w
  }))))), /* @__PURE__ */ React.createElement("hr", {
    className: "soft"
  }), /* @__PURE__ */ React.createElement("div", {
    id: "three"
  }, /* @__PURE__ */ React.createElement("h2", null, "Achievement"), /* @__PURE__ */ React.createElement("div", {
    className: "d-none d-sm-block"
  }, "From the latest updated repo to the least", /* @__PURE__ */ React.createElement(Hubcounter, null))));
}
export default Globalrouter;
