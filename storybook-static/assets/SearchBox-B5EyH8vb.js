import{j as a}from"./jsx-runtime-CsGkrc1M.js";import{r as t}from"./index-lToYTJ1z.js";import{g as l}from"./index-Di5JfxvG.js";function u({title:e,titleId:n,...r},s){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":n},r),e?t.createElement("title",{id:n},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"}))}const d=t.forwardRef(u),h=()=>{const[e,n]=t.useState(""),r=l(),s=t.useCallback(o=>{o.key==="Enter"&&c()},[e]),c=t.useCallback(()=>{r(`/movie/search?query=${e}`)},[e]),i=o=>{n(o.target.value)};return a.jsxs("div",{className:"search-box",children:[a.jsx("button",{className:"btn-search flex-center focus:outline-none",children:a.jsx("div",{children:a.jsx(d,{className:"size-6 text-white"})})}),a.jsx("input",{value:e,onKeyDown:s,onChange:i,type:"text",className:"input-search bg-red-600",placeholder:"Type to Search..."})]})};h.__docgenInfo={description:"",methods:[],displayName:"SearchBox"};export{h as S};