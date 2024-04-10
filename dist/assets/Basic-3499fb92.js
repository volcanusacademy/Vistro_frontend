import{u as ee,r as o,s as te,a as ae,j as s,b as t,D as se,F as le,d as re}from"./index-f31ace3e.js";import{N as oe}from"./index-aa13a1cb.js";import{s as T}from"./sortBy-ac97f1c2.js";import{l as ie}from"./index-103875cf.js";import{I as ne}from"./IconBell-d09f3ef5.js";import{I}from"./IconFile-dac7ca4a.js";import{I as ce}from"./IconPrinter-a1514190.js";import"./floating-ui.dom-aa888fdc.js";import"./_baseIsEqual-784e37b4.js";import"./_defineProperty-2eda8a70.js";const A=[{id:1,firstName:"Caroline",lastName:"Jensen",email:"carolinejensen@zidant.com",dob:"2004-05-28",address:{street:"529 Scholes Street",city:"Temperanceville",zipcode:5235,geo:{lat:23.806115,lng:164.677197}},phone:"+1 (821) 447-3782",isActive:!0,age:39,company:"POLARAX"},{id:2,firstName:"Celeste",lastName:"Grant",email:"celestegrant@polarax.com",dob:"1989-11-19",address:{street:"639 Kimball Street",city:"Bascom",zipcode:8907,geo:{lat:65.954483,lng:98.906478}},phone:"+1 (838) 515-3408",isActive:!1,age:32,company:"MANGLO"},{id:3,firstName:"Tillman",lastName:"Forbes",email:"tillmanforbes@manglo.com",dob:"2016-09-05",address:{street:"240 Vandalia Avenue",city:"Thynedale",zipcode:8994,geo:{lat:-34.949388,lng:-82.958111}},phone:"+1 (969) 496-2892",isActive:!1,age:26,company:"APPLIDECK"},{id:4,firstName:"Daisy",lastName:"Whitley",email:"daisywhitley@applideck.com",dob:"1987-03-23",address:{street:"350 Pleasant Place",city:"Idledale",zipcode:9369,geo:{lat:-54.458809,lng:-127.476556}},phone:"+1 (861) 564-2877",isActive:!0,age:21,company:"VOLAX"},{id:5,firstName:"Weber",lastName:"Bowman",email:"weberbowman@volax.com",dob:"1983-02-24",address:{street:"154 Conway Street",city:"Broadlands",zipcode:8131,geo:{lat:54.501351,lng:-167.47138}},phone:"+1 (962) 466-3483",isActive:!1,age:26,company:"ORBAXTER"},{id:6,firstName:"Buckley",lastName:"Townsend",email:"buckleytownsend@orbaxter.com",dob:"2011-05-29",address:{street:"131 Guernsey Street",city:"Vallonia",zipcode:6779,geo:{lat:-2.681655,lng:3.528942}},phone:"+1 (884) 595-2643",isActive:!0,age:40,company:"OPPORTECH"},{id:7,firstName:"Latoya",lastName:"Bradshaw",email:"latoyabradshaw@opportech.com",dob:"2010-11-23",address:{street:"668 Lenox Road",city:"Lowgap",zipcode:992,geo:{lat:36.026423,lng:130.412198}},phone:"+1 (906) 474-3155",isActive:!0,age:24,company:"GORGANIC"},{id:8,firstName:"Kate",lastName:"Lindsay",email:"katelindsay@gorganic.com",dob:"1987-07-02",address:{street:"773 Harrison Avenue",city:"Carlton",zipcode:5909,geo:{lat:42.464724,lng:-12.948403}},phone:"+1 (930) 546-2952",isActive:!0,age:24,company:"AVIT"},{id:9,firstName:"Marva",lastName:"Sandoval",email:"marvasandoval@avit.com",dob:"2010-11-02",address:{street:"200 Malta Street",city:"Tuskahoma",zipcode:1292,geo:{lat:-52.206169,lng:74.19452}},phone:"+1 (927) 566-3600",isActive:!1,age:28,company:"QUILCH"},{id:10,firstName:"Decker",lastName:"Russell",email:"deckerrussell@quilch.com",dob:"1994-04-21",address:{street:"708 Bath Avenue",city:"Coultervillle",zipcode:1268,geo:{lat:-41.550295,lng:-146.598075}},phone:"+1 (846) 535-3283",isActive:!1,age:27,company:"MEMORA"},{id:11,firstName:"Odom",lastName:"Mills",email:"odommills@memora.com",dob:"2010-01-24",address:{street:"907 Blake Avenue",city:"Churchill",zipcode:4400,geo:{lat:-56.061694,lng:-130.238523}},phone:"+1 (995) 525-3402",isActive:!0,age:34,company:"ZORROMOP"},{id:12,firstName:"Sellers",lastName:"Walters",email:"sellerswalters@zorromop.com",dob:"1975-11-12",address:{street:"978 Oakland Place",city:"Gloucester",zipcode:3802,geo:{lat:11.732587,lng:96.118099}},phone:"+1 (830) 430-3157",isActive:!0,age:28,company:"ORBOID"},{id:13,firstName:"Wendi",lastName:"Powers",email:"wendipowers@orboid.com",dob:"1979-06-02",address:{street:"376 Greenpoint Avenue",city:"Elliott",zipcode:9149,geo:{lat:-78.159578,lng:-9.835103}},phone:"+1 (863) 457-2088",isActive:!0,age:31,company:"SNORUS"},{id:14,firstName:"Sophie",lastName:"Horn",email:"sophiehorn@snorus.com",dob:"2018-09-20",address:{street:"343 Doughty Street",city:"Homestead",zipcode:330,geo:{lat:65.484087,lng:137.413998}},phone:"+1 (885) 418-3948",isActive:!0,age:22,company:"XTH"},{id:15,firstName:"Levine",lastName:"Rodriquez",email:"levinerodriquez@xth.com",dob:"1973-02-08",address:{street:"643 Allen Avenue",city:"Weedville",zipcode:8931,geo:{lat:-63.185586,lng:117.327808}},phone:"+1 (999) 565-3239",isActive:!0,age:27,company:"COMTRACT"},{id:16,firstName:"Little",lastName:"Hatfield",email:"littlehatfield@comtract.com",dob:"2012-01-03",address:{street:"194 Anthony Street",city:"Williston",zipcode:7456,geo:{lat:47.480837,lng:6.085909}},phone:"+1 (812) 488-3011",isActive:!1,age:33,company:"ZIDANT"},{id:17,firstName:"Larson",lastName:"Kelly",email:"larsonkelly@zidant.com",dob:"2010-06-14",address:{street:"978 Indiana Place",city:"Innsbrook",zipcode:639,geo:{lat:-71.766732,lng:150.854345}},phone:"+1 (892) 484-2162",isActive:!0,age:20,company:"SUREPLEX"},{id:18,firstName:"Kendra",lastName:"Molina",email:"kendramolina@sureplex.com",dob:"2002-07-19",address:{street:"567 Charles Place",city:"Kimmell",zipcode:1966,geo:{lat:50.765816,lng:-117.106499}},phone:"+1 (920) 528-3330",isActive:!1,age:31,company:"DANJA"},{id:19,firstName:"Ebony",lastName:"Livingston",email:"ebonylivingston@danja.com",dob:"1994-10-18",address:{street:"284 Cass Place",city:"Navarre",zipcode:948,geo:{lat:65.271256,lng:-83.064729}},phone:"+1 (970) 591-3039",isActive:!1,age:33,company:"EURON"},{id:20,firstName:"Kaufman",lastName:"Rush",email:"kaufmanrush@euron.com",dob:"2011-07-10",address:{street:"408 Kingsland Avenue",city:"Beaulieu",zipcode:7911,geo:{lat:41.513153,lng:54.821641}},phone:"+1 (924) 463-2934",isActive:!1,age:39,company:"ILLUMITY"},{id:21,firstName:"Frank",lastName:"Hays",email:"frankhays@illumity.com",dob:"2005-06-15",address:{street:"973 Caton Place",city:"Dargan",zipcode:4104,geo:{lat:63.314988,lng:-138.771323}},phone:"+1 (930) 577-2670",isActive:!1,age:31,company:"SYBIXTEX"},{id:22,firstName:"Carmella",lastName:"Mccarty",email:"carmellamccarty@sybixtex.com",dob:"1980-03-06",address:{street:"919 Judge Street",city:"Canby",zipcode:8283,geo:{lat:9.198597,lng:-138.809971}},phone:"+1 (876) 456-3218",isActive:!0,age:21,company:"ZEDALIS"},{id:23,firstName:"Massey",lastName:"Owen",email:"masseyowen@zedalis.com",dob:"2012-03-01",address:{street:"108 Seaview Avenue",city:"Slovan",zipcode:3599,geo:{lat:-74.648318,lng:99.620699}},phone:"+1 (917) 567-3786",isActive:!1,age:40,company:"DYNO"},{id:24,firstName:"Lottie",lastName:"Lowery",email:"lottielowery@dyno.com",dob:"1982-10-10",address:{street:"557 Meserole Avenue",city:"Fowlerville",zipcode:4991,geo:{lat:54.811546,lng:-20.996515}},phone:"+1 (912) 539-3498",isActive:!0,age:36,company:"MULTIFLEX"},{id:25,firstName:"Addie",lastName:"Luna",email:"addieluna@multiflex.com",dob:"1988-05-01",address:{street:"688 Bulwer Place",city:"Harmon",zipcode:7664,geo:{lat:-12.762766,lng:-39.924497}},phone:"+1 (962) 537-2981",isActive:!0,age:32,company:"PHARMACON"}],de=["id","firstName","lastName","company","age","dob","email","phone"],we=()=>{const B=ee();o.useEffect(()=>{B(te("Multiple Tables"))});const M=ae(e=>e.themeConfig.rtlClass)==="rtl",[w,C]=o.useState(1),D=[10,20,30,50,100],[g,F]=o.useState(D[0]),[b,S]=o.useState(T(A,"id")),[H,j]=o.useState(b),[X,K]=o.useState(b),[n,U]=o.useState(""),[v,G]=o.useState({columnAccessor:"id",direction:"asc"}),[i,L]=o.useState(["age","dob","isActive"]),V=(e,a)=>{i.includes(e)?L(r=>i.filter(p=>p!==r)):L([...i,e])},W=[{accessor:"id",title:"ID"},{accessor:"firstName",title:"First Name"},{accessor:"lastName",title:"Last Name"},{accessor:"email",title:"Email"},{accessor:"phone",title:"Phone"},{accessor:"company",title:"Company"},{accessor:"address.street",title:"Address"},{accessor:"age",title:"Age"},{accessor:"dob",title:"Birthdate"},{accessor:"isActive",title:"Active"}];o.useEffect(()=>{C(1)},[g]),o.useEffect(()=>{const e=(w-1)*g,a=e+g;j([...b.slice(e,a)])},[w,g,b]),o.useEffect(()=>{S(()=>X.filter(e=>e.id.toString().includes(n.toLowerCase())||e.firstName.toLowerCase().includes(n.toLowerCase())||e.lastName.toLowerCase().includes(n.toLowerCase())||e.company.toLowerCase().includes(n.toLowerCase())||e.email.toLowerCase().includes(n.toLowerCase())||e.age.toString().toLowerCase().includes(n.toLowerCase())||e.dob.toLowerCase().includes(n.toLowerCase())||e.phone.toLowerCase().includes(n.toLowerCase())))},[n]),o.useEffect(()=>{const e=T(b,v.columnAccessor);S(v.direction==="desc"?e.reverse():e),C(1)},[v]);const[f,me]=o.useState(""),[y,pe]=o.useState("");o.useEffect(()=>{let e=A;f!==""&&f!==null&&(e=e.filter(a=>a.age>=Number(f))),y!==""&&y!==null&&(e=e.filter(a=>a.age<=Number(y))),(f||y)&&(S(e),K(e))},[f,y]);const $=e=>{if(e){const a=new Date(e),r=a.getMonth()+1<10?"0"+(a.getMonth()+1):a.getMonth()+1;return(a.getDate()<10?"0"+a.getDate():a.getDate())+"/"+r+"/"+a.getFullYear()}return""},Y=["Id","First Name","Last Name","Email","Start Date","Phone No.","Age","Company"];function Z(){const e=["id","firstName","lastName","email","dob","phone","age","company"];ie.downloadExcel({fileName:"table",sheet:"react-export-table-to-excel",tablePayload:{header:Y,body:A.map(a=>e.map(r=>a[r]))}})}const k=e=>{let a=de,r=A,p="table",h;if(h=window.navigator,e==="csv"){let d=";",u=`
`,l=a.map(m=>z(m)).join(d);if(l+=u,r.map(m=>{a.map((N,R)=>{R>0&&(l+=d);let E=m[N]?m[N]:"";l+=E}),l+=u}),l==null)return;if(!l.match(/^data:text\/csv/i)&&!h.msSaveOrOpenBlob){var q="data:application/csv;charset=utf-8,"+encodeURIComponent(l),O=document.createElement("a");O.setAttribute("href",q),O.setAttribute("download",p+".csv"),O.click()}else{var J=new Blob([l]);h.msSaveOrOpenBlob&&h.msSaveBlob(J,p+".csv")}}else if(e==="print"){var c="<p>"+p+"</p>";c+='<table style="width: 100%; " cellpadding="0" cellcpacing="0"><thead><tr style="color: #515365; background: #eff5ff; -webkit-print-color-adjust: exact; print-color-adjust: exact; "> ',a.map(d=>{c+="<th>"+z(d)+"</th>"}),c+="</tr></thead>",c+="<tbody>",r.map(d=>{c+="<tr>",a.map(u=>{let l=d[u]?d[u]:"";c+="<td>"+l+"</td>"}),c+="</tr>"}),c+="<style>body {font-family:Arial; color:#495057;}p{text-align:center;font-size:18px;font-weight:bold;margin:15px;}table{ border-collapse: collapse; border-spacing: 0; }th,td{font-size:12px;text-align:left;padding: 4px;}th{padding:8px 4px;}tr:nth-child(2n-1){background:#f7f7f7; }</style>",c+="</tbody></table>";var x=window.open("","","left=0,top=0,width=1000,height=600,toolbar=0,scrollbars=0,status=0");x.document.write("<title>Print</title>"+c),x.document.close(),x.focus(),x.print()}else if(e==="txt"){let d=",",u=`
`,l=a.map(m=>z(m)).join(d);if(l+=u,r.map(m=>{a.map((N,R)=>{R>0&&(l+=d);let E=m[N]?m[N]:"";l+=E}),l+=u}),l==null)return;if(!l.match(/^data:text\/txt/i)&&!h.msSaveOrOpenBlob){var _="data:application/txt;charset=utf-8,"+encodeURIComponent(l),P=document.createElement("a");P.setAttribute("href",_),P.setAttribute("download",p+".txt"),P.click()}else{var Q=new Blob([l]);h.msSaveOrOpenBlob&&h.msSaveBlob(Q,p+".txt")}}},z=e=>e.replace("_"," ").replace("-"," ").toLowerCase().split(" ").map(a=>a.charAt(0).toUpperCase()+a.substring(1)).join(" ");return s("div",{children:[s("div",{className:"panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary",children:[t("div",{className:"rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3",children:t(ne,{})}),t("span",{className:"ltr:mr-3 rtl:ml-3",children:"Documentation: "}),t("a",{href:"https://www.npmjs.com/package/mantine-datatable",target:"_blank",className:"block hover:underline",children:"https://www.npmjs.com/package/mantine-datatable"})]}),s("div",{className:"panel mt-6",children:[s("div",{className:"mb-4.5 flex md:items-center md:flex-row flex-col gap-5",children:[s("div",{className:"flex items-center gap-5",children:[s("div",{className:"flex items-center flex-wrap",children:[s("button",{type:"button",onClick:()=>k("csv"),className:"btn btn-primary btn-sm m-1 ",children:[t(I,{className:"w-5 h-5 ltr:mr-2 rtl:ml-2"}),"CSV"]}),s("button",{type:"button",onClick:()=>k("txt"),className:"btn btn-primary btn-sm m-1",children:[t(I,{className:"w-5 h-5 ltr:mr-2 rtl:ml-2"}),"TXT"]}),s("button",{type:"button",className:"btn btn-primary btn-sm m-1",onClick:Z,children:[t(I,{className:"w-5 h-5 ltr:mr-2 rtl:ml-2"}),"EXCEL"]}),s("button",{type:"button",onClick:()=>k("print"),className:"btn btn-primary btn-sm m-1",children:[t(ce,{className:"ltr:mr-2 rtl:ml-2"}),"PRINT"]}),t("button",{type:"button",className:"btn btn-primary btn-sm m-1",style:{padding:"8px 28px"},children:"OK"}),t("button",{type:"button",className:"btn btn-primary btn-sm m-1",style:{padding:"8px 28px"},children:"CLOSE                            "})]}),t("div",{className:"dropdown",children:t(se,{placement:`${M?"bottom-end":"bottom-start"}`,btnClassName:"!flex items-center border font-semibold border-white-light dark:border-[#253b5c] rounded-md px-4 py-2 text-sm dark:bg-[#1b2e4b] dark:text-white-dark",button:s(le,{children:[t("span",{className:"ltr:mr-1 rtl:ml-1",children:"Columns"}),t(re,{className:"w-5 h-5"})]}),children:t("ul",{className:"!min-w-[140px]",children:W.map((e,a)=>t("li",{className:"flex flex-col",onClick:r=>{r.stopPropagation()},children:t("div",{className:"flex items-center px-4 py-1",children:s("label",{className:"cursor-pointer mb-0",children:[t("input",{type:"checkbox",checked:!i.includes(e.accessor),className:"form-checkbox",defaultValue:e.accessor,onChange:r=>{L(r.target.value),V(e.accessor,r.target.checked)}}),t("span",{className:"ltr:ml-2 rtl:mr-2",children:e.title})]})})},a))})})})]}),t("div",{className:"ltr:ml-auto rtl:mr-auto",children:t("input",{type:"text",className:"form-input w-auto",placeholder:"Search...",value:n,onChange:e=>U(e.target.value)})})]}),t("div",{children:s("table",{children:[s("tr",{children:[t("td",{children:s("label",{htmlFor:"",children:["Transport Name",t("select",{name:"Transport Name",style:{border:"1px solid black",borderRadius:"5px",margin:"0px 6px",width:"144px"},children:t("option",{value:"",children:"--ALL--"})})]})}),t("td",{children:s("label",{htmlFor:"",children:["Transport Firm Name",t("select",{name:"Transport Firm Name",style:{border:"1px solid black",borderRadius:"5px",margin:"0px 6px",width:"144px"},children:t("option",{value:"",children:"--ALL--"})})]})}),t("td",{children:s("label",{htmlFor:"",children:["Mobile No.",t("input",{type:"text",style:{border:"1px solid black",borderRadius:"5px",margin:"0px 6px",width:"144px"}})]})})]}),s("tr",{children:[t("td",{children:s("label",{htmlFor:"",children:["City",t("select",{name:"City",style:{border:"1px solid black",borderRadius:"5px",marginLeft:"84px",width:"144px"},children:t("option",{value:"",children:"--ALL--"})})]})}),t("td",{children:s("label",{htmlFor:"",children:["State",t("select",{name:"State",style:{border:"1px solid black",borderRadius:"5px",marginLeft:"108px",width:"144px"},children:t("option",{value:"",children:"--ALL--"})})]})}),t("td",{children:s("label",{htmlFor:"",children:["Status",s("select",{name:"Status",style:{border:"1px solid black",borderRadius:"5px",marginLeft:"32px",width:"144px"},children:[t("option",{value:"",children:"Active"}),t("option",{value:"",children:"InActive"})]})]})})]})]})}),t("div",{className:"datatables",children:t(oe,{highlightOnHover:!0,className:"whitespace-nowrap table-hover",records:H,columns:[{accessor:"id",title:"Id",sortable:!0,hidden:i.includes("id")},{accessor:"firstName",title:"First Name",sortable:!0,hidden:i.includes("firstName")},{accessor:"lastName",title:"Last Name",sortable:!0,hidden:i.includes("lastName")},{accessor:"email",title:"Email",sortable:!0,hidden:i.includes("email")},{accessor:"phone",title:"Phone",sortable:!0,hidden:i.includes("phone")},{accessor:"company",title:"Company",sortable:!0,hidden:i.includes("company")},{accessor:"address.street",title:"Address",sortable:!0,hidden:i.includes("address.street")},{accessor:"age",title:"Age",sortable:!0,hidden:i.includes("age")},{accessor:"dob",title:"Birthdate",sortable:!0,hidden:i.includes("dob"),render:({dob:e})=>t("div",{children:$(e)})},{accessor:"isActive",title:"Active",sortable:!0,hidden:i.includes("isActive"),render:({isActive:e})=>t("div",{className:`${e?"text-success":"text-danger"} capitalize`,children:e.toString()})}],totalRecords:b.length,recordsPerPage:g,page:w,onPageChange:e=>C(e),recordsPerPageOptions:D,onRecordsPerPageChange:F,sortStatus:v,onSortStatusChange:G,minHeight:200,paginationText:({from:e,to:a,totalRecords:r})=>`Showing  ${e} to ${a} of ${r} entries`})})]})]})};export{we as default};
