// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "body {\n  margin: 0;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 500;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.jumbotron {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),\n    url('/dist/image/ukmpano.webp');\n  /* background-color: #2e242c; */\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50%;\n  border-radius: 0px 0px 5px 5px;\n}\n\n.img {\n  border-style: solid;\n  border-color: white !important;\n  border-width: 5 !important;\n}\n\n.scroll {\n  position: relative;\n  height: 1000;\n  overflow-y: scroll;\n}\n\n.navbar-transparent {\n  background: rgba(255, 255, 255, 0.8);\n}\n\ndiv.round {\n  border-radius: 30px;\n}\n\ndiv.polaroid:hover {\n  opacity: 0.7;\n}\n\ndiv.polaroid {\n  cursor: pointer;\n  transition: 0.3s;\n  background-color: white;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\ndiv.box {\n  text-align: center;\n  padding: 10px 20px;\n}\n\ndiv.ads {\n  font-family: 'Oswald', serif;\n  border-radius: 10px;\n  width: 80%;\n  padding: 30px;\n  margin: auto;\n  margin-bottom: 45px;\n  background-color: black;\n  transition: 0.3s;\n}\n\ndiv.change-cell {\n  color: gold;\n  padding: 0;\n}\n\ndiv.ads:hover {\n  opacity: 0.9;\n}\n\n.gif_player img {\n  width: 100%;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}