"use strict";(()=>{var e={};e.id=127,e.ids=[127,888,660],e.modules={2251:(e,t,a)=>{a.r(t),a.d(t,{config:()=>_,default:()=>u,getServerSideProps:()=>P,getStaticPaths:()=>S,getStaticProps:()=>g,reportWebVitals:()=>h,routeModule:()=>f,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>v,unstable_getStaticParams:()=>x,unstable_getStaticPaths:()=>b,unstable_getStaticProps:()=>m});var r={};a.r(r),a.d(r,{default:()=>_id_,getStaticPaths:()=>getStaticPaths,getStaticProps:()=>getStaticProps});var s=a(7093),i=a(5244),l=a(1323),n=a(7481),o=a.n(n),c=a(777),p=a(997);let getStaticPaths=async()=>{let e=await fetch("https://jsonplaceholder.typicode.com/users"),t=await e.json(),a=t.map(e=>({params:{id:e.id.toString()}}));return{paths:a,fallback:!1}},getStaticProps=async e=>{let t=e.params.id,a=await fetch("https://jsonplaceholder.typicode.com/users/"+t),r=await a.json();return{props:{ninja:r}}},_id_=({ninja:e})=>(0,p.jsxs)("div",{children:[p.jsx("h1",{children:e.name}),p.jsx("p",{children:e.email}),p.jsx("p",{children:e.website}),p.jsx("p",{children:e.address.city})]}),d=s.PagesRouteModule,u=(0,l.l)(r,"default"),g=(0,l.l)(r,"getStaticProps"),S=(0,l.l)(r,"getStaticPaths"),P=(0,l.l)(r,"getServerSideProps"),_=(0,l.l)(r,"config"),h=(0,l.l)(r,"reportWebVitals"),m=(0,l.l)(r,"unstable_getStaticProps"),b=(0,l.l)(r,"unstable_getStaticPaths"),x=(0,l.l)(r,"unstable_getStaticParams"),j=(0,l.l)(r,"unstable_getServerProps"),v=(0,l.l)(r,"unstable_getServerSideProps"),f=new d({definition:{kind:i.x.PAGES,page:"/ninjas/[id]",pathname:"/ninjas/[id]",bundlePath:"",filename:""},components:{App:c.default,Document:o()},userland:r})},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},1017:e=>{e.exports=require("path")}};var t=require("../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),a=t.X(0,[174,61,481,450,777],()=>__webpack_exec__(2251));module.exports=a})();