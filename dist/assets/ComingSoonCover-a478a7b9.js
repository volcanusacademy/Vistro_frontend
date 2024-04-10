import{u as x,r as i,s as b,a0 as w,j as l,b as e,L as a}from"./index-f31ace3e.js";import{I as v}from"./IconInstagram-0118eb34.js";import{I as N,a as y}from"./IconGoogle-2c38a6c2.js";import{I as k}from"./IconTwitter-d20177f2.js";const S=()=>{const c=x();i.useEffect(()=>{c(b("Coming Soon Cover"))});const[r,d]=i.useState({days:null,hours:null,minutes:null,seconds:null}),[m,o]=i.useState(null),g=()=>{const n=new Date;n.setFullYear(n.getFullYear()+1);const h=n.getTime();let t={};o(setInterval(()=>{const p=new Date().getTime(),s=h-p;t.days=Math.floor(s/(1e3*60*60*24)),t.hours=Math.floor(s%(1e3*60*60*24)/(1e3*60*60)),t.minutes=Math.floor(s%(1e3*60*60)/(1e3*60)),t.seconds=Math.floor(s%(1e3*60)/1e3),d(f=>({...f,...t})),s<0&&clearInterval(m)},1e3))};i.useEffect(()=>(g(),()=>{clearInterval(m)}),[]);const u=w();return l("div",{children:[e("div",{className:"absolute inset-0",children:e("img",{src:"/assets/images/auth/bg-gradient.png",alt:"image",className:"h-full w-full object-cover"})}),l("div",{className:"relative flex min-h-screen items-center justify-center bg-[url(/assets/images/auth/map.png)] bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16",children:[e("img",{src:"/assets/images/auth/coming-soon-object1.png",alt:"image",className:"absolute left-0 top-1/2 h-full max-h-[893px] -translate-y-1/2"}),e("img",{src:"/assets/images/auth/coming-soon-object2.png",alt:"image",className:"absolute left-24 top-0 h-40 md:left-[30%]"}),e("img",{src:"/assets/images/auth/coming-soon-object3.png",alt:"image",className:"absolute right-0 top-0 h-[300px]"}),e("img",{src:"/assets/images/auth/polygon-object.svg",alt:"image",className:"absolute bottom-0 end-[28%]"}),l("div",{className:"relative flex w-full max-w-[1502px] flex-col justify-between overflow-hidden rounded-md bg-white/60 text-center backdrop-blur-lg dark:bg-black/50 lg:min-h-[758px] lg:flex-row lg:gap-10 xl:gap-0",children:[l("div",{className:"relative hidden w-full items-center justify-center p-5 lg:inline-flex lg:max-w-[835px] ltr:xl:-ml-24 ltr:xl:skew-x-[14deg] rtl:xl:-mr-24 rtl:xl:skew-x-[-14deg]",style:{background:"linear-gradient(225deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)"},children:[e("div",{className:"absolute inset-y-0 w-8 from-primary/10 via-transparent to-transparent ltr:-right-10 ltr:bg-gradient-to-r rtl:-left-10 rtl:bg-gradient-to-l xl:w-16 ltr:xl:-right-20 rtl:xl:-left-20"}),l("div",{className:"ltr:xl:-skew-x-[14deg] rtl:xl:skew-x-[14deg]",children:[e(a,{to:"/",className:"w-48 block lg:w-72 mx-auto 2xl:m-0",children:e("img",{src:"/assets/images/auth/logo-white.svg",alt:"Logo",className:"w-full"})}),e("div",{className:"mt-24 hidden w-full max-w-[430px] rtl:rotate-y-180 lg:block",children:e("img",{src:"/assets/images/auth/coming-soon-cover.svg",alt:"Cover Image",className:"w-full"})})]})]}),l("div",{className:"relative w-full px-4 pb-16 pt-6 sm:px-6 lg:max-w-[667px]",children:[l("div",{className:"mx-auto mt-5 w-full max-w-[550px] lg:mt-16",children:[e(a,{to:"/",className:"mb-8 block lg:hidden",children:e("img",{src:"/assets/images/logo.svg",alt:"Logo",className:"mx-auto w-10"})}),l("div",{className:"mb-12",children:[e("h1",{className:"text-3xl font-extrabold uppercase !leading-snug text-primary md:text-4xl",children:"Coming Soon"}),e("p",{className:"text-base font-bold leading-normal text-white-dark",children:"We will be here in a shortwhile....."})]}),l("div",{className:"mb-16 flex items-center justify-center gap-2 text-xl font-bold leading-none text-primary sm:text-2xl md:mb-24 md:gap-4 md:text-[50px]",children:[l("div",{className:"relative inline-flex h-12 w-14 items-center justify-center rounded-md bg-primary-light p-2 sm:h-16 sm:w-16 md:h-24 md:min-w-[120px]",children:[l("div",{className:"absolute inset-1 flex flex-col gap-1",children:[e("span",{className:"h-full w-full rounded-md bg-primary/[12%]"}),e("span",{className:"h-full w-full rounded-md bg-white"})]}),e("span",{className:"relative",children:r.days})]}),e("span",{children:":"}),l("div",{className:"relative inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary-light p-2 sm:h-16 sm:w-16 md:h-24 md:min-w-[96px]",children:[l("div",{className:"absolute inset-1 flex flex-col gap-1",children:[e("span",{className:"h-full w-full rounded-md bg-primary/[12%]"}),e("span",{className:"h-full w-full rounded-md bg-white"})]}),e("span",{className:"relative",children:r.hours})]}),e("span",{children:":"}),l("div",{className:"relative inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary-light p-2 sm:h-16 sm:w-16 md:h-24 md:min-w-[96px]",children:[l("div",{className:"absolute inset-1 flex flex-col gap-1",children:[e("span",{className:"h-full w-full rounded-md bg-primary/[12%]"}),e("span",{className:"h-full w-full rounded-md bg-white"})]}),e("span",{className:"relative",children:r.minutes})]}),e("span",{children:":"}),l("div",{className:"relative inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary-light p-2 sm:h-16 sm:w-16 md:h-24 md:min-w-[96px]",children:[l("div",{className:"absolute inset-1 flex flex-col gap-1",children:[e("span",{className:"h-full w-full rounded-md bg-primary/[12%]"}),e("span",{className:"h-full w-full rounded-md bg-white"})]}),e("span",{className:"relative",children:r.seconds})]})]}),l("div",{className:"mb-20 md:mb-32",children:[e("h2",{className:"text-lg font-bold uppercase dark:text-white sm:text-xl",children:"Subscribe to get notified!"}),l("div",{className:"relative mb-10 mt-8",children:[e("input",{type:"email",placeholder:"mail@gmail.com",className:"form-input mb-5 py-3.5 placeholder:text-base placeholder:text-white-dark sm:mb-0 sm:pe-32"}),e("button",{type:"button",className:"btn btn-gradient end-1.5 top-1/2 inline-flex border-0 px-4 py-1.5 text-base shadow-none sm:absolute sm:-translate-y-1/2",onClick:()=>u("/"),children:"Subscribe"})]}),l("ul",{className:"flex justify-center gap-3.5 text-white",children:[e("li",{children:e(a,{to:"#",className:"inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110",style:{background:"linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)"},children:e(v,{})})}),e("li",{children:e(a,{to:"#",className:"inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110",style:{background:"linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)"},children:e(N,{})})}),e("li",{children:e(a,{to:"#",className:"inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110",style:{background:"linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)"},children:e(k,{fill:!0})})}),e("li",{children:e(a,{to:"#",className:"inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110",style:{background:"linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)"},children:e(y,{})})})]})]})]}),l("p",{className:"absolute bottom-6 w-full text-center dark:text-white",children:["© ",new Date().getFullYear(),".i-SOFTZONE All rights reserved."]})]})]})]})]})};export{S as default};
