import{R as a}from"./chunks/index.6dce80b6.js";import{j as e}from"./chunks/jsx-runtime.a8221c3d.js";function p(){const[d,l]=a.useState([]);return a.useEffect(()=>{fetch("https://api.github.com/users/HackerTon/repos").then(async t=>{const s=await t.json();s.sort((n,c)=>n.updated_at<c.updated_at?1:-1),l(s)}).catch(t=>{console.error(t)})},[]),e.exports.jsxs("div",{id:"3",className:"bg-blue-50 px-8 md:px-32 pb-14",children:[e.exports.jsx("h1",{className:"text-5xl font-bold bg-gray-0 py-14",children:"GITHUB PROGRESS"}),e.exports.jsx("div",{className:"grid place-items-center opacity-70",children:e.exports.jsxs("table",{className:"border-separate w-full",children:[e.exports.jsx("thead",{children:e.exports.jsxs("tr",{children:[e.exports.jsx("th",{children:"Name"}),e.exports.jsx("th",{className:"hidden md:table-cell p-2",children:"Username"}),e.exports.jsx("th",{className:"hidden md:table-cell",children:"Description"}),e.exports.jsx("th",{className:"hidden md:table-cell p-2",children:"Last update"})]})}),e.exports.jsx("tbody",{children:d.map(r=>{const s=new Date(r.updated_at).getFullYear();return e.exports.jsxs("tr",{className:"text-left",children:[e.exports.jsx("td",{className:"border border-green-600 p-2",children:e.exports.jsx("a",{href:r.html_url,children:r.name})}),e.exports.jsx("td",{className:"border border-green-600 hidden md:table-cell p-2 text-center",children:r.owner.login}),e.exports.jsx("td",{className:"border border-green-600 hidden md:table-cell p-2",children:r.description}),e.exports.jsx("td",{className:"border border-green-600 hidden md:table-cell text-center p-2",children:s})]},r.id)})})]})})]})}export{p as default};
