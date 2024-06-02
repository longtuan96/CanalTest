import{j as e}from"./jsx-runtime-CsGkrc1M.js";import{r as a}from"./index-lToYTJ1z.js";import{c as d,m as b}from"./movie.mock-BL99iBAy.js";import{B as c}from"./Button-DuwweMv9.js";import{g as N}from"./index-Di5JfxvG.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";function y({title:t,titleId:l,...r},s){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":l},r),t?a.createElement("title",{id:l},t):null,a.createElement("path",{fillRule:"evenodd",d:"M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z",clipRule:"evenodd"}))}const R=a.forwardRef(y);function E({title:t,titleId:l,...r},s){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":l},r),t?a.createElement("title",{id:l},t):null,a.createElement("path",{fillRule:"evenodd",d:"M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z",clipRule:"evenodd"}))}const C=a.forwardRef(E);function k({title:t,titleId:l,...r},s){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":l},r),t?a.createElement("title",{id:l},t):null,a.createElement("path",{fillRule:"evenodd",d:"M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z",clipRule:"evenodd"}))}const z=a.forwardRef(k);function M({title:t,titleId:l,...r},s){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":l},r),t?a.createElement("title",{id:l},t):null,a.createElement("path",{fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z",clipRule:"evenodd"}))}const I=a.forwardRef(M);function T({title:t,titleId:l,...r},s){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":l},r),t?a.createElement("title",{id:l},t):null,a.createElement("path",{fillRule:"evenodd",d:"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z",clipRule:"evenodd"}))}const $=a.forwardRef(T);function _({title:t,titleId:l,...r},s){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":l},r),t?a.createElement("title",{id:l},t):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"}))}const L=a.forwardRef(_),m={WATCH_NOW:"Watch Now",PLAY_TRAILER:"Play Trailer"},u=6;function x({data:t,handleShowVideo:l}){const[r,s]=a.useState(0),h=N(),w=()=>{s(r===0?t.length-1:r-1)},g=()=>{r===t.length-1?s(0):s(r+1)},j=n=>{h(`/movie/${n}`)};return e.jsxs("div",{className:"relative h-full overflow-hidden",children:[e.jsx("div",{className:"relative flex h-full w-full transition duration-700 ease-out",style:{transform:`translateX(-${r*100}%)`,zIndex:2},children:t.map((n,o)=>e.jsxs("div",{className:"relative min-w-full",children:[e.jsx("img",{className:"object-fit h-full w-full",src:d("movie",n.backdrop_path)}),e.jsx("div",{className:"carousel-mask carousel-mask-hover absolute left-0 top-0 h-full w-full bg-opacity-50",children:e.jsxs("div",{className:" absolute left-0 top-0 flex w-2/5 flex-col gap-y-5 pl-24 pt-40",style:{maxHeight:"70%"},children:[e.jsx("h1",{className:"fontsize-title",children:n.title}),e.jsx("p",{className:" fontsize-text max-h-24 w-4/5 overflow-hidden text-justify",children:n.overview}),e.jsxs("div",{className:"flex",style:{gap:"8%"},children:[e.jsxs("span",{className:" inline-flex gap-4",children:[e.jsx($,{className:"size-5 text-yellow-400"})," ",`${n.vote_average.toFixed(2)}/10 (${n.vote_count} votes)`]}),e.jsxs("span",{className:" inline-flex gap-4",children:[e.jsx(R,{className:"size-5 text-red-700"}),`${n.popularity.toFixed(0)} Trending`]})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsxs(c,{className:"flex size-1/4 items-center justify-center gap-2",onClick:()=>l(n.id,"movie"),children:[m.WATCH_NOW,e.jsx(I,{className:"size-5 text-white"})]}),e.jsx(c,{className:"size-1/4",onClick:()=>l(n.id,"trailer"),children:m.PLAY_TRAILER}),e.jsx(c,{className:"p-0",background:!1,children:e.jsx(L,{className:" size-6 text-white",onClick:()=>j(n.id)})})]})]})})]},o))}),e.jsxs("div",{className:"absolute top-0  flex h-full w-full items-center justify-between px-10 text-3xl text-white",children:[e.jsx("button",{className:"carousel-button",onClick:w,children:e.jsx(C,{className:"size-10"})}),e.jsx("button",{className:"carousel-button",onClick:g,children:e.jsx(z,{className:"size-10"})})]}),e.jsx("div",{className:"absolute bottom-20 flex w-full items-end justify-start py-4 transition duration-500 ease-in-out",style:{transform:`translateX(${50-u/2-r*(6+.5)}%)`,zIndex:3,gap:"0.5%"},children:t.map((n,o)=>e.jsx("img",{onClick:()=>{s(o)},className:`cursor-pointer transition  duration-500 ease-in-out ${o===r&&"scale-150"}`,style:{width:`${u}%`},src:d("movie",n.poster_path)},"pic"+o))})]})}x.__docgenInfo={description:"",methods:[],displayName:"MovieCarousel",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"z.infer",elements:[{name:"MovieItemResponseSchema"}],raw:"z.infer<typeof MovieItemResponseSchema>"}],raw:"MovieItemResponse[]"},description:""},handleShowVideo:{required:!0,tsType:{name:"signature",type:"function",raw:"(movieId: number, variation: ModalType) => void",signature:{arguments:[{type:{name:"number"},name:"movieId"},{type:{name:"union",raw:'"trailer" | "movie"',elements:[{name:"literal",value:'"trailer"'},{name:"literal",value:'"movie"'}]},name:"variation"}],return:{name:"void"}}},description:""}}};const W={component:x,decorators:[t=>e.jsx("div",{className:"text-white",children:e.jsx(t,{})})]},i={args:{data:b.results,handleShowVideo:()=>{}}};var f,p,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    data: moviePopularMockData.results,
    handleShowVideo: () => {}
  }
}`,...(v=(p=i.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};const D=["Default"];export{i as Default,D as __namedExportsOrder,W as default};