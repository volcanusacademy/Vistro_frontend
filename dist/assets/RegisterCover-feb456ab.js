import{u as k,r as s,s as y,a0 as j,a as g,j as a,b as e,L as l,D as C,F as I,d as E,a1 as S,c as F,e as L,K as _,a2 as h}from"./index-267a3523.js";import{I as D}from"./IconInstagram-15c40bdb.js";import{I as R,a as U}from"./IconGoogle-d9db39e1.js";import{I as P}from"./IconTwitter-c5b148a5.js";import{a as T}from"./axios-4d564c32.js";import{B as $}from"./config-e886d699.js";const Y=()=>{const r=k();s.useEffect(()=>{r(y("Register Cover"))},[r]);const p=j(),u=g(t=>t.themeConfig.rtlClass)==="rtl",o=g(t=>t.themeConfig),x=t=>{b(t),t.toLowerCase()==="ae"?r(h("rtl")):r(h("ltr"))},[i,b]=s.useState(o.locale),[c,f]=s.useState(""),[d,w]=s.useState(""),[m,v]=s.useState(""),N=async t=>{console.log(c,d,m),t.preventDefault();try{const n=await T.post(`${$}/add_user`,{name:c,email:d,password:m},{headers:{"Content-Type":"application/json"},withCredentials:!0});console.log("Response:",n.data),p("/")}catch(n){console.error("Error:",n)}};return a("div",{children:[e("div",{className:"absolute inset-0",children:e("img",{src:"/assets/images/auth/bg-gradient.png",alt:"image",className:"h-full w-full object-cover"})}),a("div",{className:"relative flex min-h-screen items-center justify-center bg-[url(/assets/images/auth/map.png)] bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16",children:[e("img",{src:"/assets/images/auth/coming-soon-object1.png",alt:"image",className:"absolute left-0 top-1/2 h-full max-h-[893px] -translate-y-1/2"}),e("img",{src:"/assets/images/auth/coming-soon-object2.png",alt:"image",className:"absolute left-24 top-0 h-40 md:left-[30%]"}),e("img",{src:"/assets/images/auth/coming-soon-object3.png",alt:"image",className:"absolute right-0 top-0 h-[300px]"}),e("img",{src:"/assets/images/auth/polygon-object.svg",alt:"image",className:"absolute bottom-0 end-[28%]"}),a("div",{className:"relative flex w-full max-w-[1502px] flex-col justify-between overflow-hidden rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 lg:min-h-[758px] lg:flex-row lg:gap-10 xl:gap-0",children:[a("div",{className:"relative hidden w-full items-center justify-center bg-[linear-gradient(225deg,rgba(239,18,98,1)_0%,rgba(67,97,238,1)_100%)] p-5 lg:inline-flex lg:max-w-[835px] xl:-ms-28 ltr:xl:skew-x-[14deg] rtl:xl:skew-x-[-14deg]",children:[e("div",{className:"absolute inset-y-0 w-8 from-primary/10 via-transparent to-transparent ltr:-right-10 ltr:bg-gradient-to-r rtl:-left-10 rtl:bg-gradient-to-l xl:w-16 ltr:xl:-right-20 rtl:xl:-left-20"}),e("div",{className:"ltr:xl:-skew-x-[14deg] rtl:xl:skew-x-[14deg]",children:e("div",{className:"mt-24 hidden w-full max-w-[430px] lg:block",children:e("img",{src:"/assets/images/auth/register.svg",alt:"Cover Image",className:"w-full"})})})]}),a("div",{className:"relative flex w-full flex-col items-center justify-center gap-6 px-4 pb-16 pt-6 sm:px-6 lg:max-w-[667px]",children:[a("div",{className:"flex w-full max-w-[440px] items-center gap-2 lg:absolute lg:end-6 lg:top-6 lg:max-w-full",children:[e(l,{to:"/",className:"w-8 block lg:hidden",children:e("img",{src:"/assets/images/logo.svg",alt:"Logo",className:"mx-auto w-10"})}),e("div",{className:"dropdown ms-auto w-max",children:e(C,{offset:[0,8],placement:`${u?"bottom-start":"bottom-end"}`,btnClassName:"flex items-center gap-2.5 rounded-lg border border-white-dark/30 bg-white px-2 py-1.5 text-white-dark hover:border-primary hover:text-primary dark:bg-black",button:a(I,{children:[e("div",{children:e("img",{src:`/assets/images/flags/${i.toUpperCase()}.svg`,alt:"image",className:"h-5 w-5 rounded-full object-cover"})}),e("div",{className:"text-base font-bold uppercase",children:i}),e("span",{className:"shrink-0",children:e(E,{})})]}),children:e("ul",{className:"!px-2 text-dark dark:text-white-dark grid grid-cols-2 gap-2 font-semibold dark:text-white-light/90 w-[280px]",children:o.languageList.map(t=>e("li",{children:a("button",{type:"button",className:`flex w-full hover:text-primary rounded-lg ${i===t.code?"bg-primary/10 text-primary":""}`,onClick:()=>{S.changeLanguage(t.code),x(t.code)},children:[e("img",{src:`/assets/images/flags/${t.code.toUpperCase()}.svg`,alt:"flag",className:"w-5 h-5 object-cover rounded-full"}),e("span",{className:"ltr:ml-3 rtl:mr-3",children:t.name})]})},t.code))})})})]}),a("div",{className:"w-full max-w-[440px] lg:mt-16",children:[a("div",{className:"mb-10",children:[e("h1",{className:"text-3xl font-extrabold uppercase !leading-snug text-primary md:text-4xl",children:"Sign Up"}),e("p",{className:"text-base font-bold leading-normal text-white-dark",children:"Enter your email and password to register"})]}),a("form",{className:"space-y-5 dark:text-white",onSubmit:N,children:[a("div",{children:[e("label",{htmlFor:"Name",children:"Name"}),a("div",{className:"relative text-white-dark",children:[e("input",{onChange:t=>f(t.target.value),id:"Name",type:"text",placeholder:"Enter Name",className:"form-input ps-10 placeholder:text-white-dark"}),e("span",{className:"absolute start-4 top-1/2 -translate-y-1/2",children:e(F,{fill:!0})})]})]}),a("div",{children:[e("label",{htmlFor:"Email",children:"Email"}),a("div",{className:"relative text-white-dark",children:[e("input",{onChange:t=>w(t.target.value),id:"Email",type:"email",placeholder:"Enter Email",className:"form-input ps-10 placeholder:text-white-dark"}),e("span",{className:"absolute start-4 top-1/2 -translate-y-1/2",children:e(L,{fill:!0})})]})]}),a("div",{children:[e("label",{htmlFor:"Password",children:"Password"}),a("div",{className:"relative text-white-dark",children:[e("input",{onChange:t=>v(t.target.value),id:"Password",type:"password",placeholder:"Enter Password",className:"form-input ps-10 placeholder:text-white-dark"}),e("span",{className:"absolute start-4 top-1/2 -translate-y-1/2",children:e(_,{fill:!0})})]})]}),e("div",{children:a("label",{className:"flex cursor-pointer items-center",children:[e("input",{type:"checkbox",className:"form-checkbox bg-white dark:bg-black"}),e("span",{className:"text-white-dark",children:"Subscribe to weekly newsletter"})]})}),e("button",{type:"submit",className:"btn btn-gradient !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]",children:"Sign Up"})]}),a("div",{className:"relative my-7 text-center md:mb-9",children:[e("span",{className:"absolute inset-x-0 top-1/2 h-px w-full -translate-y-1/2 bg-white-light dark:bg-white-dark"}),e("span",{className:"relative bg-white px-2 font-bold uppercase text-white-dark dark:bg-dark dark:text-white-light",children:"or"})]}),e("div",{className:"mb-10 md:mb-[60px]",children:a("ul",{className:"flex justify-center gap-3.5 text-white",children:[e("li",{children:e(l,{to:"#",className:"inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110",style:{background:"linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)"},children:e(D,{})})}),e("li",{children:e(l,{to:"#",className:"inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110",style:{background:"linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)"},children:e(R,{})})}),e("li",{children:e(l,{to:"#",className:"inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110",style:{background:"linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)"},children:e(P,{fill:!0})})}),e("li",{children:e(l,{to:"#",className:"inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110",style:{background:"linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)"},children:e(U,{})})})]})}),a("div",{className:"text-center dark:text-white",children:["Already have an account ? ",e(l,{to:"/",className:"uppercase text-primary underline transition hover:text-black dark:hover:text-white",children:"SIGN IN"})]})]}),a("p",{className:"absolute bottom-6 w-full text-center dark:text-white",children:["© ",new Date().getFullYear(),".i-SOFTZONE All rights reserved."]})]})]})]})]})};export{Y as default};
