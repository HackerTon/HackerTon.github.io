import{R as l,j as t,F as c,a as e}from"./chunks/chunk.d2487eb1.js";function n(){const[s,a]=l.useState(0);l.useEffect(()=>{setTimeout(()=>a(1),2e3)},[]);const i=s==1?"w-[60%]":"w-[60%] coin";return t(c,{children:[e("div",{className:`absolute bg-black w-full h-screen grid justify-items-center place-content-center ${s==1?"hidden":""}`,children:e("img",{src:"/assets/image/flippinglogo.jpeg",className:i})}),t("div",{className:`bg-[url('/assets/image/Banner.jpg')] h-screen w-full ${s==1?"slidein":""}`,children:[e("div",{className:"w-full h-20 border-b-[0.5px] border-b-white shadow-sm flex items-center pl-5",children:e("div",{className:"text-white text-4xl font-bold hover:animate-bounce",children:"Project 2090"})}),t("div",{className:"flex w-full mt-52 bg-black justify-spread",children:[e("div",{className:"text-xl text-white ",children:"hello"}),e("div",{className:"text-xl text-white ",children:"hello"})]})]}),e("div",{className:"bg-[url('/assets/image/Banner.jpg')] h-screen w-full"})]})}export{n as default};
