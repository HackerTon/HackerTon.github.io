if(typeof document!="undefined"){const e=`.lazy-load-image-background.blur {
  filter: blur(15px);
}

.lazy-load-image-background.blur.lazy-load-image-loaded {
  filter: blur(0);
  transition: filter .3s;
}

.lazy-load-image-background.blur > img {
  opacity: 0;
}

.lazy-load-image-background.blur.lazy-load-image-loaded > img {
  opacity: 1;
  transition: opacity .3s;
}
`,n=document.createElement("style"),a=document.createTextNode(e);n.type="text/css",n.appendChild(a),document.head.appendChild(n)}
