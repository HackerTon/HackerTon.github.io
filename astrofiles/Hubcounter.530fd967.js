import{j as e}from"./jsx-runtime.b9e88e07.js";import{R as d}from"./index.03be2d59.js";function o(){const[s,l]=d.useState([]);return d.useEffect(()=>{fetch("https://api.github.com/users/HackerTon/repos").then(async r=>{const a=await r.json();a.sort((n,c)=>n.updated_at<c.updated_at?1:-1),l(a)}).catch(r=>{console.error(r)})},[]),e.jsxs("div",{id:"3",className:"bg-blue-50 px-8 md:px-32 pb-14",children:[e.jsx("h1",{className:"md:text-5xl text-2xl font-bold bg-gray-0 py-14",children:"GITHUB PROGRESS"}),e.jsx("div",{className:"grid place-items-center opacity-70",children:e.jsxs("table",{className:"border-separate w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{className:"hidden md:table-cell p-2",children:"Username"}),e.jsx("th",{className:"hidden md:table-cell",children:"Description"}),e.jsx("th",{className:"hidden md:table-cell p-2",children:"Last update"})]})}),e.jsx("tbody",{children:s.map(t=>{const a=new Date(t.updated_at).getFullYear();return e.jsxs("tr",{className:"text-left",children:[e.jsx("td",{className:"border border-green-600 p-2",children:e.jsx("a",{href:t.html_url,children:t.name})}),e.jsx("td",{className:"border border-green-600 hidden md:table-cell p-2 text-center",children:t.owner.login}),e.jsx("td",{className:"border border-green-600 hidden md:table-cell p-2",children:t.description}),e.jsx("td",{className:"border border-green-600 hidden md:table-cell text-center p-2",children:a})]},t.id)})})]})})]})}export{o as default};
