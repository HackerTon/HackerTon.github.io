(this.webpackJsonpdigitalcv=this.webpackJsonpdigitalcv||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/me1.a46c004f.jpg"},function(e,t,a){e.exports=a.p+"static/media/octocat.db05858c.svg"},function(e,t,a){e.exports=a.p+"static/media/pic1.3038cd8e.jpg"},function(e,t,a){e.exports=a.p+"static/media/pic2.32e8509a.jpg"},function(e,t,a){e.exports=a.p+"static/media/pic3.a301810a.jpg"},function(e,t,a){e.exports=a.p+"static/media/pic4.a30d4710.jpg"},function(e,t,a){e.exports=a.p+"static/media/pic5.ba848636.jpg"},function(e,t,a){e.exports=a(33)},,,,,function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),i=(a(27),a(1)),s=a(2),m=a(3),o=a(5),u=a(4),d=a(6),p=(a(9),a(15)),h=a.n(p),E=a(16),b=a.n(E),g=a(17),f=a.n(g),v=a(18),N=a.n(v),w=a(19),y=a.n(w),j=a(20),k=a.n(j),T=a(21),x=a.n(T),S=a(10),I=(a(31),{apiKey:"AIzaSyD9P5Vz9e11x-1OkSzSLTg4-0mb5jmJouc",authDomain:"notiweb-b3f9b.firebaseapp.com",databaseURL:"https://notiweb-b3f9b.firebaseio.com",projectId:"notiweb-b3f9b",storageBucket:"notiweb-b3f9b.appspot.com",messagingSenderId:"119785406202",appId:"1:119785406202:web:f7dee407e1c74ad8c31343",measurementId:"G-KF19NW29FP"});S.initializeApp(I),S.firestore().collection("paper").get().then((function(e){e.forEach((function(e){console.log(e.id,"=>",e.data())}))}));var O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={data:[],mounted:!1},a.update(),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"update",value:function(){var e=this;fetch("https://api.github.com/users/HackerTon/repos").then((function(e){return e.json()})).then((function(t){e.setState({data:t,mounted:!e.mounted})})).catch((function(t){return console.error(e.props.url)}))}},{key:"render",value:function(){return this.state.mounted?r.a.createElement("div",{className:"container"},r.a.createElement("table",{className:"table table-hover"},r.a.createElement("thead",{class:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"Username"),r.a.createElement("th",{scope:"col"},"Description"),r.a.createElement("th",{scope:"col"},"Url"))),r.a.createElement("tbody",null,this.state.data.map((function(e){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},e.name),r.a.createElement("td",null,e.owner.login),r.a.createElement("td",null,e.description),r.a.createElement("td",null,r.a.createElement("a",{href:e.html_url},e.html_url)))}))))):r.a.createElement("div",{className:"container"})}}]),t}(r.a.Component),P=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={passTrue:!0},a.onclick=a.onclick.bind(Object(i.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"onclick",value:function(){this.setState((function(e){return{passTrue:!e.passTrue}}))}},{key:"render",value:function(){return console.log("debug"),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.onclick},this.state.passTrue?"You Found mE":"Oi!"),this.state.passTrue?"":"Press! Press! Press! You kid ahhh?!")}}]),t}(r.a.Component),D=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"header",className:"bg1"},r.a.createElement("div",{id:"headerblob"},r.a.createElement("img",{src:h.a,className:"img-circle imgme"}),r.a.createElement("div",{id:"headertext"},r.a.createElement("div",{id:"htname"},"Lam Ken Lun"),r.a.createElement("div",{id:"htdesc"},"UKM Computer Science B.Sc student"),r.a.createElement("div",{id:"htem"},"A175960@siswa.ukm.edu.my"),r.a.createElement("div",{id:"icons"},r.a.createElement("div",{id:"svgico"},r.a.createElement("a",{href:"https://github.com/HackerTon"},r.a.createElement("img",{src:b.a,width:"56px"}))))))),r.a.createElement("div",{className:"container",style:{fontSize:"18px",fontWeight:"300",marginBottom:"50px",marginTop:"50px"}},r.a.createElement("b",null,"Bio.")," I am a first year student at ",r.a.createElement("a",{href:"http://www.ftsm.ukm.my/"},"National University of Malaysia Falculty of Information Science and Technology"),", where I pursue my interest in Machine Learning. Previously, I was a Form-6 student at Kajang Highschool majoring in Physics. Over the course of my first semester my contribution to School@UKM was where I managed the program prior by scheduling teams for their specific role in the program, prepared modules for the participants. Together with my team, I designed and was the primary instructor for teaching materials at School@UKM. The program consisted of 26 participants in 2019. Furthermore, I am also a Robotic teacher at ",r.a.createElement("a",{href:"http://www.csds.com.my/"},"CSDS Prima")," teaching children to build and code robots.",r.a.createElement("br",null),r.a.createElement("br",null),"On the fun side, I developed more and more each day. I developed number of Deep Learning projects in Python (e.g. ",r.a.createElement("a",{href:"https://github.com/HackerTon/end2endselfdriving"},"EndToEndselfDriving"),", ",r.a.createElement("a",{href:"https://github.com/HackerTon/expanding-network"},"ExpandingNetwork"),", ",r.a.createElement("a",{href:"https://github.com/HackerTon/imagenet_downloader"},"robosot-nav"),") because I love the simplicity and efficiency of Python.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"Academic Achievement"),r.a.createElement("br",null),r.a.createElement("span",{className:"t2when"},"2016 - 2018"),r.a.createElement("div",null,"SMK TINGGI KAJANG",r.a.createElement("br",null),"STPM: 3B, 1C",r.a.createElement("br",null),"SPM: 3A",r.a.createElement("br",null),"MUET: Band 4",r.a.createElement("br",null),"IETLS: Band 7.0",r.a.createElement("br",null)),r.a.createElement("br",null),r.a.createElement("b",null,"Skills"),r.a.createElement("br",null),r.a.createElement("span",{className:"t2when"},"Language spoken: ")," English, Mandarin, Malay",r.a.createElement("br",null),r.a.createElement("span",{className:"t2when"},"Familiar Programing language: ")," C++, Python, Nodejs, CUDA, NoSQL, Javascript",r.a.createElement("br",null),r.a.createElement("span",{className:"t2when"},"Familiar Tools: ")," git(Collaboration), TravisCI(Continuous deployment), ros(robot operating system), gazebo(robot simulator)",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"Working experience"),r.a.createElement("br",null),r.a.createElement("span",{className:"t2when"}," 2019 - Present"),r.a.createElement("span",{className:"t2who"}," CSDS Prima"),r.a.createElement("span",{className:""}," Instructor (Part-time)"),r.a.createElement("br",null),r.a.createElement("span",{className:"t2when"}," 2019 - June 2019"),r.a.createElement("span",{className:"t2who"}," Sri laju Tuition Center"),r.a.createElement("span",{className:""}," Tutor "),r.a.createElement("br",null),r.a.createElement("span",{className:"t2when"}," 2015 - 2016"),r.a.createElement("span",{className:"t2who"}," D'Touch International Sdn Bhd"),r.a.createElement("span",{className:""}," IT Technician (Part-time)"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"Timeline."),r.a.createElement("br",null),r.a.createElement("span",{className:"t2when"},"Dec 2019-now: "),r.a.createElement("span",{className:"t2who"},"FirstYear BS.c student "),r.a.createElement("span",{className:"t2what"},"Running school@ukm")),r.a.createElement("hr",{className:"soft"}),r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Activities"),r.a.createElement("h1",{style:{textAlign:"center",textDecoration:"underline"}},"School@UKM"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"ts"},"December 2019 Registering participants"),r.a.createElement("a",{href:"picture"},r.a.createElement("img",{src:N.a,className:"img-thumbnail",style:{width:"100%",borderRadius:"3px",rotate:"180deg"}})))),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md"},r.a.createElement("div",{className:"ts"},"December 2019 Preparing to teach"),r.a.createElement("a",{href:"picture"},r.a.createElement("img",{src:y.a,className:"img-thumbnail",style:{width:"100%",borderRadius:"3px"}}))),r.a.createElement("div",{className:"col-md"},r.a.createElement("div",{className:"ts"},"December 2019 Participants learning Gazebo"),r.a.createElement("a",{href:"picture"},r.a.createElement("img",{src:x.a,className:"img-thumbnail",style:{width:"100%",borderRadius:"3px"}}))),r.a.createElement("div",{className:"col-md"},r.a.createElement("div",{className:"ts"},"December 2019 Me presenting the certificate"),r.a.createElement("a",{href:"picture"},r.a.createElement("img",{src:f.a,className:"img-thumbnail",style:{width:"100%",borderRadius:"3px"}})))),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md"},r.a.createElement("div",{className:"ts"},"December 2019 Group photo of participants and members"),r.a.createElement("a",{href:"picture"},r.a.createElement("img",{src:k.a,className:"img-thumbnail",style:{width:"100%",borderRadius:"3px"}}))))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("hr",{className:"soft"}),r.a.createElement("br",null),r.a.createElement("div",{id:"box"},r.a.createElement(P,null)),r.a.createElement("h2",null,"Misc."),r.a.createElement(O,null),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md",style:{textAlign:"center"}},r.a.createElement("div",{id:"httem"},"Designed and coded by ALAN LAM"))))}}]),t}(r.a.Component);l.a.render(r.a.createElement(D,null),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.ac8cd234.chunk.js.map