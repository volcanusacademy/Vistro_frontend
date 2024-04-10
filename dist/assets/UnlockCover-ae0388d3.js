import{u,r as i,s as x,a0 as b,a as c,j as a,b as e,L as o,D as f,F as w,d as v,a1 as N,K as k,a2 as n}from"./index-f31ace3e.js";const j=()=>{const l=u();i.useEffect(()=>{l(x("Unlock Cover"))});const d=b(),m=c(s=>s.themeConfig.rtlClass)==="rtl",r=c(s=>s.themeConfig),g=s=>{h(s),s.toLowerCase()==="ae"?l(n("rtl")):l(n("ltr"))},[t,h]=i.useState(r.locale),p=()=>{d("/")};return a("div",{children:[e("div",{className:"absolute inset-0",children:e("img",{src:"/assets/images/auth/bg-gradient.png",alt:"image",className:"h-full w-full object-cover"})}),a("div",{className:"relative flex min-h-screen items-center justify-center bg-[url(/assets/images/auth/map.png)] bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16",children:[e("img",{src:"/assets/images/auth/coming-soon-object1.png",alt:"image",className:"absolute left-0 top-1/2 h-full max-h-[893px] -translate-y-1/2"}),e("img",{src:"/assets/images/auth/coming-soon-object2.png",alt:"image",className:"absolute left-24 top-0 h-40 md:left-[30%]"}),e("img",{src:"/assets/images/auth/coming-soon-object3.png",alt:"image",className:"absolute right-0 top-0 h-[300px]"}),e("img",{src:"/assets/images/auth/polygon-object.svg",alt:"image",className:"absolute bottom-0 end-[28%]"}),a("div",{className:"relative flex w-full max-w-[1502px] flex-col justify-between overflow-hidden rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 lg:min-h-[758px] lg:flex-row lg:gap-10 xl:gap-0",children:[a("div",{className:"relative hidden w-full items-center justify-center bg-[linear-gradient(225deg,rgba(239,18,98,1)_0%,rgba(67,97,238,1)_100%)] p-5 lg:inline-flex lg:max-w-[835px] xl:-ms-28 ltr:xl:skew-x-[14deg] rtl:xl:skew-x-[-14deg]",children:[e("div",{className:"absolute inset-y-0 w-8 from-primary/10 via-transparent to-transparent ltr:-right-10 ltr:bg-gradient-to-r rtl:-left-10 rtl:bg-gradient-to-l xl:w-16 ltr:xl:-right-20 rtl:xl:-left-20"}),a("div",{className:"ltr:xl:-skew-x-[14deg] rtl:xl:skew-x-[14deg]",children:[e(o,{to:"/",className:"w-48 block lg:w-72 ms-10",children:e("img",{src:"/assets/images/auth/logo-white.svg",alt:"Logo",className:"w-full"})}),e("div",{className:"mt-24 hidden w-full max-w-[430px] lg:block",children:e("img",{src:"/assets/images/auth/unlock.svg",alt:"Cover Image",className:"w-full"})})]})]}),a("div",{className:"relative flex w-full flex-col items-center justify-center gap-6 px-4 pb-16 pt-6 sm:px-6 lg:max-w-[667px]",children:[a("div",{className:"flex w-full max-w-[440px] items-center gap-2 lg:absolute lg:end-6 lg:top-6 lg:max-w-full",children:[e(o,{to:"/",className:"w-8 block lg:hidden",children:e("img",{src:"/assets/images/logo.svg",alt:"Logo",className:"mx-auto w-10"})}),e("div",{className:"dropdown ms-auto w-max",children:e(f,{offset:[0,8],placement:`${m?"bottom-start":"bottom-end"}`,btnClassName:"flex items-center gap-2.5 rounded-lg border border-white-dark/30 bg-white px-2 py-1.5 text-white-dark hover:border-primary hover:text-primary dark:bg-black",button:a(w,{children:[e("div",{children:e("img",{src:`/assets/images/flags/${t.toUpperCase()}.svg`,alt:"image",className:"h-5 w-5 rounded-full object-cover"})}),e("div",{className:"text-base font-bold uppercase",children:t}),e("span",{className:"shrink-0",children:e(v,{})})]}),children:e("ul",{className:"!px-2 text-dark dark:text-white-dark grid grid-cols-2 gap-2 font-semibold dark:text-white-light/90 w-[280px]",children:r.languageList.map(s=>e("li",{children:a("button",{type:"button",className:`flex w-full hover:text-primary rounded-lg ${t===s.code?"bg-primary/10 text-primary":""}`,onClick:()=>{N.changeLanguage(s.code),g(s.code)},children:[e("img",{src:`/assets/images/flags/${s.code.toUpperCase()}.svg`,alt:"flag",className:"w-5 h-5 object-cover rounded-full"}),e("span",{className:"ltr:ml-3 rtl:mr-3",children:s.name})]})},s.code))})})})]}),a("div",{className:"w-full max-w-[440px] lg:mt-16",children:[a("div",{className:"mb-10 flex items-center",children:[e("div",{className:"flex h-16 w-16 items-end justify-center overflow-hidden rounded-full bg-[#00AB55] ltr:mr-4 rtl:ml-4",children:e("img",{src:"/assets/images/auth/user.png",className:"w-full object-cover",alt:"images"})}),a("div",{className:"flex-1",children:[e("h4",{className:"text-2xl dark:text-white",children:"Shaun Park"}),e("p",{className:"text-white-dark",children:"Enter your password to unlock your ID"})]})]}),a("form",{className:"space-y-5 dark:text-white",onSubmit:p,children:[a("div",{children:[e("label",{htmlFor:"Password",children:"Password"}),a("div",{className:"relative text-white-dark",children:[e("input",{id:"Password",type:"password",placeholder:"Enter Password",className:"form-input ps-10 placeholder:text-white-dark"}),e("span",{className:"absolute start-4 top-1/2 -translate-y-1/2",children:e(k,{fill:!0})})]})]}),e("button",{type:"submit",className:"btn btn-gradient !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]",children:"UNLOCK"})]})]}),a("p",{className:"absolute bottom-6 w-full text-center dark:text-white",children:["© ",new Date().getFullYear(),".i-SOFTZONE All rights reserved."]})]})]})]})]})};export{j as default};
