// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".lazy-load-image-background.blur {\n  filter: blur(15px);\n}\n\n.lazy-load-image-background.blur.lazy-load-image-loaded {\n  filter: blur(0);\n  transition: filter .3s;\n}\n\n.lazy-load-image-background.blur > img {\n  opacity: 0;\n}\n\n.lazy-load-image-background.blur.lazy-load-image-loaded > img {\n  opacity: 1;\n  transition: opacity .3s;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}