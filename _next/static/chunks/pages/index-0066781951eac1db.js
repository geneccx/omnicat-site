(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6055:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(8199)}])},4948:function(e,t,s){"use strict";s.d(t,{E:function(){return u}});var l=s(1527),r=s(959),i=s(6398),n=s(8082),a=s(4658);let o=[[4,4,!0,!0],[4,44,!0],[36,22],[50,146,!0,!0],[64,43,!0,!0],[76,30,!0],[101,116],[140,36,!0],[149,134],[162,74,!0],[171,96,!0,!0],[210,56,!0,!0],[235,90],[275,82,!0,!0],[306,6],[307,64,!0,!0],[380,68,!0],[380,108,!0,!0],[391,148,!0,!0],[405,18,!0],[412,86,!0,!0],[426,210,!0,!0],[427,56,!0,!0],[538,138],[563,88,!0,!0],[611,154,!0,!0],[637,150],[651,146,!0],[682,70,!0,!0],[683,128],[781,82,!0,!0],[785,158,!0],[832,146,!0,!0],[852,89]],c=[[[247,103],[261,86],[307,104],[357,36]],[[586,120],[516,100],[491,62],[440,107],[477,180],[516,100]],[[733,100],[803,120],[879,113],[823,164],[803,120]]];function d(e){let{blurId:t,point:[s,i,a,o]}=e,c=(0,r.useRef)(),d=(0,r.useRef)();return(0,r.useEffect)(()=>{let e=2*Math.random(),t=[(0,n.j)(c.current,{opacity:1},{duration:4,delay:e}),(0,n.j)(d.current,{opacity:a?[.2,.5]:[1,.6],scale:a?[1,1.2]:[1.2,1]},{delay:e,duration:2*Math.random()+2,direction:"alternate",repeat:1/0})];return()=>{for(let e of t)e.cancel()}},[a]),(0,l.jsx)("g",{ref:c,className:"opacity-0",children:(0,l.jsx)("circle",{ref:d,cx:s,cy:i,r:1,style:{transformOrigin:`${s/16}rem ${i/16}rem`,opacity:a?.2:1,transform:`scale(${a?1:1.2})`},filter:o?`url(#${t})`:void 0})})}function f(e){let{points:t}=e,s=(0,r.useRef)(),i=t.filter((e,s)=>t.findIndex(t=>String(t)===String(e))===s),n=i.length!==t.length;return(0,r.useEffect)(()=>{let e=(0,a.Z)([[s.current,{strokeDashoffset:0,visibility:"visible"},{duration:5,delay:3*Math.random()+2}],...n?[[s.current,{fill:"rgb(255 255 255 / 0.02)"},{duration:1}]]:[]]);return()=>{e.cancel()}},[n]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("path",{ref:s,stroke:"white",strokeOpacity:"0.2",strokeDasharray:1,strokeDashoffset:1,pathLength:1,fill:"transparent",d:`M ${t.join("L")}`,className:"invisible"}),i.map((e,t)=>(0,l.jsx)(d,{point:e},t))]})}function u(e){let{className:t}=e,s=(0,r.useId)();return(0,l.jsxs)("svg",{viewBox:"0 0 881 211",fill:"white","aria-hidden":"true",className:(0,i.Z)("pointer-events-none absolute w-[55.0625rem] origin-top-right rotate-[30deg] overflow-visible opacity-70",t),children:[(0,l.jsx)("defs",{children:(0,l.jsx)("filter",{id:s,children:(0,l.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:".5"})})}),c.map((e,t)=>(0,l.jsx)(f,{points:e},t)),o.map((e,t)=>(0,l.jsx)(d,{point:e,blurId:s},t))]})}},8199:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return j},default:function(){return v}});var l=s(1527),r=s(959),i=s(504),n=s.n(i);function a(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{children:(0,l.jsx)(n(),{href:"/",children:"Omnicat"})}),(0,l.jsxs)("h1",{className:"mt-14 font-display text-4xl/tight font-light text-white",children:["Fediverse browser"," "]}),(0,l.jsx)("p",{className:"mt-4 text-sm/6 text-gray-300",children:"A work in progress"})]})}function o(){return(0,l.jsx)("p",{className:"flex items-baseline gap-x-2 text-[0.8125rem]/6 text-gray-500"})}var c=s(4948),d=s(89);function f(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",...e,children:(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-5-8a5 5 0 0 0 5 5V7a5 5 0 0 0-5 5Z"})})}function u(){let[e,t]=(0,r.useState)(!1),{resolvedTheme:s,setTheme:i}=(0,d.F)(),n="dark"===s?"light":"dark";return((0,r.useEffect)(()=>{t(!0)},[]),e)?(0,l.jsxs)("button",{type:"button",className:"group absolute right-4 top-4 z-50 -m-2.5 p-2.5",onClick:()=>i(n),children:[(0,l.jsxs)("span",{className:"sr-only",children:["Switch to ",n," theme"]}),(0,l.jsx)(f,{className:"h-6 w-6 fill-white opacity-50 transition-opacity group-hover:opacity-100 lg:fill-gray-900 lg:dark:fill-white"})]}):null}function x(){let e=(0,r.useId)();return(0,l.jsx)("div",{className:"pointer-events-none absolute inset-0 z-50 overflow-hidden lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-visible",children:(0,l.jsxs)("svg",{className:"absolute left-[max(0px,calc(50%-18.125rem))] top-0 h-full w-1.5 lg:left-full lg:ml-1 xl:left-auto xl:right-1 xl:ml-0","aria-hidden":"true",children:[(0,l.jsx)("defs",{children:(0,l.jsx)("pattern",{id:e,width:"6",height:"8",patternUnits:"userSpaceOnUse",children:(0,l.jsx)("path",{d:"M0 0H6M0 8H6",className:"stroke-sky-900/10 dark:stroke-white/10 xl:stroke-white/10",fill:"none"})})}),(0,l.jsx)("rect",{width:"100%",height:"100%",fill:`url(#${e})`})]})})}function h(){let e=(0,r.useId)();return(0,l.jsxs)("div",{className:"absolute inset-0 -z-10 overflow-hidden bg-gray-950 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem]",children:[(0,l.jsxs)("svg",{className:"absolute -bottom-48 left-[-40%] h-[80rem] w-[180%] lg:-right-40 lg:bottom-auto lg:left-auto lg:top-[-40%] lg:h-[180%] lg:w-[80rem]","aria-hidden":"true",children:[(0,l.jsxs)("defs",{children:[(0,l.jsxs)("radialGradient",{id:`${e}-desktop`,cx:"100%",children:[(0,l.jsx)("stop",{offset:"0%",stopColor:"rgba(56, 189, 248, 0.3)"}),(0,l.jsx)("stop",{offset:"53.95%",stopColor:"rgba(0, 71, 255, 0.09)"}),(0,l.jsx)("stop",{offset:"100%",stopColor:"rgba(10, 14, 23, 0)"})]}),(0,l.jsxs)("radialGradient",{id:`${e}-mobile`,cy:"100%",children:[(0,l.jsx)("stop",{offset:"0%",stopColor:"rgba(56, 189, 248, 0.3)"}),(0,l.jsx)("stop",{offset:"53.95%",stopColor:"rgba(0, 71, 255, 0.09)"}),(0,l.jsx)("stop",{offset:"100%",stopColor:"rgba(10, 14, 23, 0)"})]})]}),(0,l.jsx)("rect",{width:"100%",height:"100%",fill:`url(#${e}-desktop)`,className:"hidden lg:block"}),(0,l.jsx)("rect",{width:"100%",height:"100%",fill:`url(#${e}-mobile)`,className:"lg:hidden"})]}),(0,l.jsx)("div",{className:"absolute inset-x-0 bottom-0 right-0 h-px bg-white mix-blend-overlay lg:left-auto lg:top-0 lg:h-auto lg:w-px"})]})}function g(e){let{main:t,footer:s}=e;return(0,l.jsxs)("div",{className:"relative flex-none overflow-hidden px-6 lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex lg:px-0",children:[(0,l.jsx)(h,{}),(0,l.jsx)("div",{className:"relative flex w-full lg:pointer-events-auto lg:mr-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-y-auto lg:overflow-x-hidden lg:pl-[max(4rem,calc(50%-38rem))]",children:(0,l.jsxs)("div",{className:"mx-auto max-w-lg lg:mx-0 lg:flex lg:w-96 lg:max-w-none lg:flex-col lg:before:flex-1 lg:before:pt-6",children:[(0,l.jsx)("div",{className:"pb-16 pt-20 sm:pb-20 sm:pt-32 lg:py-20",children:(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)(c.E,{className:"-right-44 top-14"}),t]})}),(0,l.jsx)("div",{className:"flex flex-1 items-end justify-center pb-4 lg:justify-start lg:pb-6",children:s})]})})]})}function m(e){let{children:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g,{main:(0,l.jsx)(a,{}),footer:(0,l.jsx)(o,{})}),(0,l.jsx)(u,{}),(0,l.jsxs)("div",{className:"relative flex-auto",children:[(0,l.jsx)(x,{}),(0,l.jsx)("main",{className:"space-y-20 py-20 sm:space-y-32 sm:py-32",children:t})]})]})}function p(e){return(0,l.jsx)(l.Fragment,{})}var j=!0,v=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.jsx)(m,Object.assign({},e,{children:(0,l.jsx)(p,e)}))}}},function(e){e.O(0,[807,774,888,179],function(){return e(e.s=6055)}),_N_E=e.O()}]);