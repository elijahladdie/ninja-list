(()=>{var e={};e.id=784,e.ids=[784,888,660],e.modules={4570:e=>{e.exports={single:"Ninjas_single__cxPAv"}},4459:(e,t,s)=>{"use strict";s.r(t),s.d(t,{config:()=>m,default:()=>_,getServerSideProps:()=>j,getStaticPaths:()=>h,getStaticProps:()=>x,reportWebVitals:()=>b,routeModule:()=>A,unstable_getServerProps:()=>w,unstable_getServerSideProps:()=>k,unstable_getStaticParams:()=>q,unstable_getStaticPaths:()=>f,unstable_getStaticProps:()=>v});var r={};s.r(r),s.d(r,{default:()=>ninjas,getStaticProps:()=>getStaticProps});var a=s(7093),i=s(5244),n=s(1323),l=s(7481),c=s.n(l),o=s(777),p=s(997),u=s(1664),d=s.n(u),g=s(4570),S=s.n(g);let getStaticProps=async()=>{let e=await fetch("https://jsonplaceholder.typicode.com/users"),t=await e.json();return{props:{ninjas:t}}},ninjas=({ninjas:e})=>(0,p.jsxs)("div",{children:[p.jsx("h1",{children:" All Ninjas"}),e.map(e=>p.jsx(d(),{href:"/ninjas/"+e.id,className:S().single,children:p.jsx("h3",{children:e.name})},e.id))]}),P=a.PagesRouteModule,_=(0,n.l)(r,"default"),x=(0,n.l)(r,"getStaticProps"),h=(0,n.l)(r,"getStaticPaths"),j=(0,n.l)(r,"getServerSideProps"),m=(0,n.l)(r,"config"),b=(0,n.l)(r,"reportWebVitals"),v=(0,n.l)(r,"unstable_getStaticProps"),f=(0,n.l)(r,"unstable_getStaticPaths"),q=(0,n.l)(r,"unstable_getStaticParams"),w=(0,n.l)(r,"unstable_getServerProps"),k=(0,n.l)(r,"unstable_getServerSideProps"),A=new P({definition:{kind:i.x.PAGES,page:"/ninjas",pathname:"/ninjas",bundlePath:"",filename:""},components:{App:o.default,Document:c()},userland:r})},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),s=t.X(0,[174,61,481,450,777],()=>__webpack_exec__(4459));module.exports=s})();