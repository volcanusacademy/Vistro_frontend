import{u as h,r as o,s as u,a0 as b,a as r,j as t,b as e,D as f,F as x,d as N,a1 as v,c as w,e as k,a2 as c}from"./index-f31ace3e.js";import{I as y}from"./IconPhoneCall-04f886ca.js";import{I as C}from"./IconPencil-bc947be3.js";import{I as j}from"./IconMessageDots-3755e504.js";const E=()=>{const s=h();o.useEffect(()=>{s(u("Contact Us Boxed"))});const n=b(),d=()=>{n("/")};r(a=>a.themeConfig.theme==="dark"||a.themeConfig.isDarkMode);const m=r(a=>a.themeConfig.rtlClass)==="rtl",i=r(a=>a.themeConfig),p=a=>{g(a),a.toLowerCase()==="ae"?s(c("rtl")):s(c("ltr"))},[l,g]=o.useState(i.locale);return t("div",{children:[e("div",{className:"absolute inset-0",children:e("img",{src:"/assets/images/auth/bg-gradient.png",alt:"image",className:"h-full w-full object-cover"})}),t("div",{className:"relative flex min-h-screen items-center justify-center bg-[url(/assets/images/auth/map.png)] bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16",children:[e("img",{src:"/assets/images/auth/coming-soon-object1.png",alt:"image",className:"absolute left-0 top-1/2 h-full max-h-[893px] -translate-y-1/2"}),e("img",{src:"/assets/images/auth/coming-soon-object2.png",alt:"image",className:"absolute left-24 top-0 h-40 md:left-[30%]"}),e("img",{src:"/assets/images/auth/coming-soon-object3.png",alt:"image",className:"absolute right-0 top-0 h-[300px]"}),e("img",{src:"/assets/images/auth/polygon-object.svg",alt:"image",className:"absolute bottom-0 end-[28%]"}),e("div",{className:"relative w-full max-w-[870px] rounded-md bg-[linear-gradient(45deg,#fff9f9_0%,rgba(255,255,255,0)_25%,rgba(255,255,255,0)_75%,_#fff9f9_100%)] p-2 dark:bg-[linear-gradient(52.22deg,#0E1726_0%,rgba(14,23,38,0)_18.66%,rgba(14,23,38,0)_51.04%,rgba(14,23,38,0)_80.07%,#0E1726_100%)]",children:t("div",{className:"relative flex flex-col justify-center rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 px-6 lg:min-h-[758px] py-20",children:[e("div",{className:"absolute top-6 end-6",children:e("div",{className:"dropdown",children:e(f,{offset:[0,8],placement:`${m?"bottom-start":"bottom-end"}`,btnClassName:"flex items-center gap-2.5 rounded-lg border border-white-dark/30 bg-white px-2 py-1.5 text-white-dark hover:border-primary hover:text-primary dark:bg-black",button:t(x,{children:[e("div",{children:e("img",{src:`/assets/images/flags/${l.toUpperCase()}.svg`,alt:"image",className:"h-5 w-5 rounded-full object-cover"})}),e("div",{className:"text-base font-bold uppercase",children:l}),e("span",{className:"shrink-0",children:e(N,{})})]}),children:e("ul",{className:"!px-2 text-dark dark:text-white-dark grid grid-cols-2 gap-2 font-semibold dark:text-white-light/90 w-[280px]",children:i.languageList.map(a=>e("li",{children:t("button",{type:"button",className:`flex w-full hover:text-primary rounded-lg ${l===a.code?"bg-primary/10 text-primary":""}`,onClick:()=>{v.changeLanguage(a.code),p(a.code)},children:[e("img",{src:`/assets/images/flags/${a.code.toUpperCase()}.svg`,alt:"flag",className:"w-5 h-5 object-cover rounded-full"}),e("span",{className:"ltr:ml-3 rtl:mr-3",children:a.name})]})},a.code))})})})}),t("div",{className:"mx-auto w-full max-w-[440px]",children:[t("div",{className:"mb-10",children:[e("h1",{className:"text-3xl font-extrabold uppercase !leading-snug text-primary md:text-4xl",children:"Contact us"}),e("p",{className:"text-base font-bold leading-normal text-white-dark",children:"Submit your queries and we will get back to you as soon as possible."})]}),t("form",{className:"space-y-5",onSubmit:d,children:[t("div",{className:"relative text-white-dark",children:[e("input",{id:"Name",type:"text",placeholder:"Name",className:"form-input ps-10 placeholder:text-white-dark"}),e("span",{className:"absolute start-4 top-1/2 -translate-y-1/2",children:e(w,{fill:!0})})]}),t("div",{className:"relative text-white-dark",children:[e("input",{id:"Email",type:"email",placeholder:"Email",className:"form-input ps-10 placeholder:text-white-dark"}),e("span",{className:"absolute start-4 top-1/2 -translate-y-1/2",children:e(k,{fill:!0})})]}),t("div",{className:"relative text-white-dark",children:[e("input",{id:"Phone",type:"text",placeholder:"Phone",className:"form-input ps-10 placeholder:text-white-dark"}),e("span",{className:"absolute start-4 top-1/2 -translate-y-1/2",children:e(y,{fill:!0})})]}),t("div",{className:"relative text-white-dark",children:[e("input",{id:"Subject",type:"text",placeholder:"Subject",className:"form-input ps-10 placeholder:text-white-dark"}),e("span",{className:"absolute start-4 top-1/2 -translate-y-1/2",children:e(C,{fill:!0})})]}),t("div",{className:"relative text-white-dark",children:[e("textarea",{id:"Textarea",rows:4,className:"form-textarea resize-none ps-10 placeholder:text-white-dark",placeholder:"Message"}),e("span",{className:"absolute start-4 top-2.5",children:e(j,{fill:!0})})]}),e("button",{type:"submit",className:"btn btn-gradient !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]",children:"Submit"})]})]})]})})]})]})};export{E as default};
