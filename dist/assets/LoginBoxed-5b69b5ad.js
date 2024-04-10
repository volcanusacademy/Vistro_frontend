import{u as b,r as c,s as u,a0 as f,a as i,j as t,b as e,D as x,F as w,d as N,a1 as k,e as v,K as y,L as s,a2 as o}from"./index-f31ace3e.js";import{I as j}from"./IconInstagram-0118eb34.js";import{I as _,a as C}from"./IconGoogle-2c38a6c2.js";import{I}from"./IconTwitter-d20177f2.js";const S=()=>{const r=b();c.useEffect(()=>{r(u("Login Boxed"))});const d=f();i(a=>a.themeConfig.theme==="dark"||a.themeConfig.isDarkMode);const m=i(a=>a.themeConfig.rtlClass)==="rtl",n=i(a=>a.themeConfig),g=a=>{h(a),a.toLowerCase()==="ae"?r(o("rtl")):r(o("ltr"))},[l,h]=c.useState(n.locale),p=()=>{d("/")};return t("div",{children:[e("div",{className:"absolute inset-0",children:e("img",{src:"/assets/images/auth/bg-gradient.png",alt:"image",className:"h-full w-full object-cover"})}),t("div",{className:"relative flex min-h-screen items-center justify-center bg-[url(/assets/images/auth/map.png)] bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16",children:[e("img",{src:"/assets/images/auth/coming-soon-object1.png",alt:"image",className:"absolute left-0 top-1/2 h-full max-h-[893px] -translate-y-1/2"}),e("img",{src:"/assets/images/auth/coming-soon-object2.png",alt:"image",className:"absolute left-24 top-0 h-40 md:left-[30%]"}),e("img",{src:"/assets/images/auth/coming-soon-object3.png",alt:"image",className:"absolute right-0 top-0 h-[300px]"}),e("img",{src:"/assets/images/auth/polygon-object.svg",alt:"image",className:"absolute bottom-0 end-[28%]"}),e("div",{className:"relative w-full max-w-[870px] rounded-md bg-[linear-gradient(45deg,#fff9f9_0%,rgba(255,255,255,0)_25%,rgba(255,255,255,0)_75%,_#fff9f9_100%)] p-2 dark:bg-[linear-gradient(52.22deg,#0E1726_0%,rgba(14,23,38,0)_18.66%,rgba(14,23,38,0)_51.04%,rgba(14,23,38,0)_80.07%,#0E1726_100%)]",children:t("div",{className:"relative flex flex-col justify-center rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 px-6 lg:min-h-[758px] py-20",children:[e("div",{className:"absolute top-6 end-6",children:e("div",{className:"dropdown",children:e(x,{offset:[0,8],placement:`${m?"bottom-start":"bottom-end"}`,btnClassName:"flex items-center gap-2.5 rounded-lg border border-white-dark/30 bg-white px-2 py-1.5 text-white-dark hover:border-primary hover:text-primary dark:bg-black",button:t(w,{children:[e("div",{children:e("img",{src:`/assets/images/flags/${l.toUpperCase()}.svg`,alt:"image",className:"h-5 w-5 rounded-full object-cover"})}),e("div",{className:"text-base font-bold uppercase",children:l}),e("span",{className:"shrink-0",children:e(N,{})})]}),children:e("ul",{className:"!px-2 text-dark dark:text-white-dark grid grid-cols-2 gap-2 font-semibold dark:text-white-light/90 w-[280px]",children:n.languageList.map(a=>e("li",{children:t("button",{type:"button",className:`flex w-full hover:text-primary rounded-lg ${l===a.code?"bg-primary/10 text-primary":""}`,onClick:()=>{k.changeLanguage(a.code),g(a.code)},children:[e("img",{src:`/assets/images/flags/${a.code.toUpperCase()}.svg`,alt:"flag",className:"w-5 h-5 object-cover rounded-full"}),e("span",{className:"ltr:ml-3 rtl:mr-3",children:a.name})]})},a.code))})})})}),t("div",{className:"mx-auto w-full max-w-[440px]",children:[t("div",{className:"mb-10",children:[e("h1",{className:"text-3xl font-extrabold uppercase !leading-snug text-primary md:text-4xl",children:"Sign in"}),e("p",{className:"text-base font-bold leading-normal text-white-dark",children:"Enter your email and password to login"})]}),t("form",{className:"space-y-5 dark:text-white",onSubmit:p,children:[t("div",{children:[e("label",{htmlFor:"Email",children:"Email"}),t("div",{className:"relative text-white-dark",children:[e("input",{id:"Email",type:"email",placeholder:"Enter Email",className:"form-input ps-10 placeholder:text-white-dark"}),e("span",{className:"absolute start-4 top-1/2 -translate-y-1/2",children:e(v,{fill:!0})})]})]}),t("div",{children:[e("label",{htmlFor:"Password",children:"Password"}),t("div",{className:"relative text-white-dark",children:[e("input",{id:"Password",type:"password",placeholder:"Enter Password",className:"form-input ps-10 placeholder:text-white-dark"}),e("span",{className:"absolute start-4 top-1/2 -translate-y-1/2",children:e(y,{fill:!0})})]})]}),e("div",{children:t("label",{className:"flex cursor-pointer items-center",children:[e("input",{type:"checkbox",className:"form-checkbox bg-white dark:bg-black"}),e("span",{className:"text-white-dark",children:"Subscribe to weekly newsletter"})]})}),e("button",{type:"submit",className:"btn btn-gradient !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]",children:"Sign in"})]}),t("div",{className:"relative my-7 text-center md:mb-9",children:[e("span",{className:"absolute inset-x-0 top-1/2 h-px w-full -translate-y-1/2 bg-white-light dark:bg-white-dark"}),e("span",{className:"relative bg-white px-2 font-bold uppercase text-white-dark dark:bg-dark dark:text-white-light",children:"or"})]}),e("div",{className:"mb-10 md:mb-[60px]",children:t("ul",{className:"flex justify-center gap-3.5 text-white",children:[e("li",{children:e(s,{to:"#",className:"inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110",style:{background:"linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)"},children:e(j,{})})}),e("li",{children:e(s,{to:"#",className:"inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110",style:{background:"linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)"},children:e(_,{})})}),e("li",{children:e(s,{to:"#",className:"inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110",style:{background:"linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)"},children:e(I,{fill:!0})})}),e("li",{children:e(s,{to:"#",className:"inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110",style:{background:"linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)"},children:e(C,{})})})]})}),t("div",{className:"text-center dark:text-white",children:["Don't have an account ? ",e(s,{to:"/auth/boxed-signup",className:"uppercase text-primary underline transition hover:text-black dark:hover:text-white",children:"SIGN UP"})]})]})]})})]})]})};export{S as default};
