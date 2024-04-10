import{u as h,r as i,s as b,j as t,b as e,L as p}from"./index-f31ace3e.js";import{C as o}from"./Highlight-253c8b2e.js";import{I as d}from"./IconCode-01429d9b.js";const g=()=>{const c=h();i.useEffect(()=>{c(b("Jumbotron"))});const[r,a]=i.useState([]),s=l=>{r.includes(l)?a(m=>m.filter(n=>n!==l)):a([...r,l])};return t("div",{children:[t("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e("li",{children:e(p,{to:"#",className:"text-primary hover:underline",children:"Elements"})}),e("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e("span",{children:"Jumbotron"})})]}),t("div",{className:"pt-5 grid xl:grid-cols-2 grid-cols-1 gap-6",children:[t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Basic"}),e("button",{type:"button",onClick:()=>{s("code1")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:t("span",{className:"flex items-center",children:[e(d,{className:"me-2"}),"Code"]})})]}),t("div",{className:"prose bg-[#f1f2f3] px-4 py-9 sm:px-8 sm:py-16 rounded max-w-full dark:bg-[#1b2e4b] dark:text-white-light w-full mb-5",children:[e("h2",{className:"text-dark mb-5  mt-4 text-center text-5xl dark:text-white-light",children:"Hello, world!"}),e("p",{className:"lead mt-3 mb-4 dark:text-white-light",children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),e("hr",{className:"my-4 dark:border-[#191e3a]"}),e("p",{className:"mb-5",children:"It uses utility classes for typography and spacing to space content out within the larger container."}),e("p",{className:"lead",children:e("button",{type:"button",className:"btn btn-dark",children:"Learn more"})})]}),r.includes("code1")&&e(o,{children:e("pre",{children:`<div className="prose bg-[#f1f2f3] px-4 py-9 sm:px-8 sm:py-16 rounded max-w-full dark:bg-[#1b2e4b] dark:text-white-light w-full mb-5">
    <h2 className="text-dark mb-5  mt-4 text-center text-5xl dark:text-white-light">Hello, world!</h2>
    <p className="lead mt-3 mb-4 dark:text-white-light">
        This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
    </p>
    <hr className="my-4 dark:border-[#191e3a]" />
    <p className="mb-5">It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p className="lead">
        <button type="button" className="btn btn-dark">
            Learn more
        </button>
    </p>
</div>`})})]}),t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Jumbotron Fluid"}),e("button",{type:"button",onClick:()=>{s("code2")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:t("span",{className:"flex items-center",children:[e(d,{className:"me-2"}),"Code"]})})]}),t("div",{className:"prose bg-[#f1f2f3] px-4 py-9 sm:px-8 sm:py-16 rounded max-w-full dark:bg-[#1b2e4b] dark:text-white-light w-full mb-5",children:[e("h2",{className:"text-dark mb-5  mt-4 text-center text-5xl dark:text-white-light",children:"Fluid Jumbotron"}),e("p",{className:"lead mt-3 mb-4 dark:text-white-light",children:"This is a modified jumbotron that occupies the entire horizontal space of its parent."}),t("blockquote",{className:"text-black p-5 ltr:pl-3.5 rtl:pr-3.5 bg-white shadow-md rounded-tr-md rounded-br-md border border-white-light border-l-2 !border-l-primary dark:bg-[#060818] dark:border-[#060818]",children:[t("div",{className:"flex items-start",children:[e("div",{className:"w-14 h-14 ltr:mr-5 rtl:ml-5 flex-none",children:e("img",{src:"/assets/images/profile-34.jpeg",alt:"img",className:"w-14 h-14 rounded-full object-cover m-auto"})}),e("p",{className:"not-italic text-[#515365] text-sm dark:text-white-light m-0",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."})]}),t("small",{className:"ltr:text-right rtl:text-left w-full not-italic text-xs text-[#777] block before:w-3 before:h-[1px] before:bg-[#777] before:inline-block before:opacity-50 before:relative before:-top-1 before:ltr:mr-1 rtl:before:ml-1",children:["Someone famous ",e("cite",{className:"italic",children:"Source Title"})]})]})]}),r.includes("code2")&&e(o,{children:e("pre",{children:`<div className="prose bg-[#f1f2f3] px-4 py-9 sm:px-8 sm:py-16 rounded max-w-full dark:bg-[#1b2e4b] dark:text-white-light w-full mb-5">
    <h2 className="text-dark mb-5  mt-4 text-center text-5xl dark:text-white-light">Fluid Jumbotron</h2>
    <p className="lead mt-3 mb-4 dark:text-white-light">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
    <blockquote className="text-black p-5 ltr:pl-3.5 rtl:pr-3.5 bg-white shadow-md rounded-tr-md rounded-br-md border border-white-light border-l-2 !border-l-primary dark:bg-[#060818] dark:border-[#060818]">
        <div className="flex items-start">
            <div className="w-14 h-14 ltr:mr-5 rtl:ml-5 flex-none">
                <img src="/assets/images/profile-34.jpeg" alt="img" className="w-14 h-14 rounded-full object-cover m-auto" />
            </div>
            <p className="not-italic text-[#515365] text-sm dark:text-white-light m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        </div>
        <small className="ltr:text-right rtl:text-left w-full not-italic text-xs text-[#777] block before:w-3 before:h-[1px] before:bg-[#777] before:inline-block before:opacity-50 before:relative before:-top-1 before:ltr:mr-1 rtl:before:ml-1">
            Someone famous <cite className="italic">Source Title</cite>
        </small>
    </blockquote>
</div>`})})]})]})]})};export{g as default};
