import{u as Q,r,s as B,a as ee,j as l,b as t,D as te,F as ae,d as se}from"./index-f31ace3e.js";import{N as oe}from"./index-aa13a1cb.js";import{s as k}from"./sortBy-ac97f1c2.js";import{I as R}from"./IconFile-dac7ca4a.js";import{I as le}from"./IconPrinter-a1514190.js";import{l as re}from"./index-103875cf.js";import"./floating-ui.dom-aa888fdc.js";import"./_baseIsEqual-784e37b4.js";import"./_defineProperty-2eda8a70.js";const C=[{id:1,firstName:"Caroline",lastName:"Jensen",email:"carolinejensen@zidant.com",dob:"2004-05-28",address:{street:"529 Scholes Street",city:"Temperanceville",zipcode:5235,geo:{lat:23.806115,lng:164.677197}},phone:"+1 (821) 447-3782",isActive:!0,age:39,company:"POLARAX"},{id:2,firstName:"Celeste",lastName:"Grant",email:"celestegrant@polarax.com",dob:"1989-11-19",address:{street:"639 Kimball Street",city:"Bascom",zipcode:8907,geo:{lat:65.954483,lng:98.906478}},phone:"+1 (838) 515-3408",isActive:!1,age:32,company:"MANGLO"},{id:3,firstName:"Tillman",lastName:"Forbes",email:"tillmanforbes@manglo.com",dob:"2016-09-05",address:{street:"240 Vandalia Avenue",city:"Thynedale",zipcode:8994,geo:{lat:-34.949388,lng:-82.958111}},phone:"+1 (969) 496-2892",isActive:!1,age:26,company:"APPLIDECK"},{id:4,firstName:"Daisy",lastName:"Whitley",email:"daisywhitley@applideck.com",dob:"1987-03-23",address:{street:"350 Pleasant Place",city:"Idledale",zipcode:9369,geo:{lat:-54.458809,lng:-127.476556}},phone:"+1 (861) 564-2877",isActive:!0,age:21,company:"VOLAX"},{id:5,firstName:"Weber",lastName:"Bowman",email:"weberbowman@volax.com",dob:"1983-02-24",address:{street:"154 Conway Street",city:"Broadlands",zipcode:8131,geo:{lat:54.501351,lng:-167.47138}},phone:"+1 (962) 466-3483",isActive:!1,age:26,company:"ORBAXTER"},{id:6,firstName:"Buckley",lastName:"Townsend",email:"buckleytownsend@orbaxter.com",dob:"2011-05-29",address:{street:"131 Guernsey Street",city:"Vallonia",zipcode:6779,geo:{lat:-2.681655,lng:3.528942}},phone:"+1 (884) 595-2643",isActive:!0,age:40,company:"OPPORTECH"},{id:7,firstName:"Latoya",lastName:"Bradshaw",email:"latoyabradshaw@opportech.com",dob:"2010-11-23",address:{street:"668 Lenox Road",city:"Lowgap",zipcode:992,geo:{lat:36.026423,lng:130.412198}},phone:"+1 (906) 474-3155",isActive:!0,age:24,company:"GORGANIC"},{id:8,firstName:"Kate",lastName:"Lindsay",email:"katelindsay@gorganic.com",dob:"1987-07-02",address:{street:"773 Harrison Avenue",city:"Carlton",zipcode:5909,geo:{lat:42.464724,lng:-12.948403}},phone:"+1 (930) 546-2952",isActive:!0,age:24,company:"AVIT"},{id:9,firstName:"Marva",lastName:"Sandoval",email:"marvasandoval@avit.com",dob:"2010-11-02",address:{street:"200 Malta Street",city:"Tuskahoma",zipcode:1292,geo:{lat:-52.206169,lng:74.19452}},phone:"+1 (927) 566-3600",isActive:!1,age:28,company:"QUILCH"},{id:10,firstName:"Decker",lastName:"Russell",email:"deckerrussell@quilch.com",dob:"1994-04-21",address:{street:"708 Bath Avenue",city:"Coultervillle",zipcode:1268,geo:{lat:-41.550295,lng:-146.598075}},phone:"+1 (846) 535-3283",isActive:!1,age:27,company:"MEMORA"},{id:11,firstName:"Odom",lastName:"Mills",email:"odommills@memora.com",dob:"2010-01-24",address:{street:"907 Blake Avenue",city:"Churchill",zipcode:4400,geo:{lat:-56.061694,lng:-130.238523}},phone:"+1 (995) 525-3402",isActive:!0,age:34,company:"ZORROMOP"},{id:12,firstName:"Sellers",lastName:"Walters",email:"sellerswalters@zorromop.com",dob:"1975-11-12",address:{street:"978 Oakland Place",city:"Gloucester",zipcode:3802,geo:{lat:11.732587,lng:96.118099}},phone:"+1 (830) 430-3157",isActive:!0,age:28,company:"ORBOID"},{id:13,firstName:"Wendi",lastName:"Powers",email:"wendipowers@orboid.com",dob:"1979-06-02",address:{street:"376 Greenpoint Avenue",city:"Elliott",zipcode:9149,geo:{lat:-78.159578,lng:-9.835103}},phone:"+1 (863) 457-2088",isActive:!0,age:31,company:"SNORUS"},{id:14,firstName:"Sophie",lastName:"Horn",email:"sophiehorn@snorus.com",dob:"2018-09-20",address:{street:"343 Doughty Street",city:"Homestead",zipcode:330,geo:{lat:65.484087,lng:137.413998}},phone:"+1 (885) 418-3948",isActive:!0,age:22,company:"XTH"},{id:15,firstName:"Levine",lastName:"Rodriquez",email:"levinerodriquez@xth.com",dob:"1973-02-08",address:{street:"643 Allen Avenue",city:"Weedville",zipcode:8931,geo:{lat:-63.185586,lng:117.327808}},phone:"+1 (999) 565-3239",isActive:!0,age:27,company:"COMTRACT"},{id:16,firstName:"Little",lastName:"Hatfield",email:"littlehatfield@comtract.com",dob:"2012-01-03",address:{street:"194 Anthony Street",city:"Williston",zipcode:7456,geo:{lat:47.480837,lng:6.085909}},phone:"+1 (812) 488-3011",isActive:!1,age:33,company:"ZIDANT"},{id:17,firstName:"Larson",lastName:"Kelly",email:"larsonkelly@zidant.com",dob:"2010-06-14",address:{street:"978 Indiana Place",city:"Innsbrook",zipcode:639,geo:{lat:-71.766732,lng:150.854345}},phone:"+1 (892) 484-2162",isActive:!0,age:20,company:"SUREPLEX"},{id:18,firstName:"Kendra",lastName:"Molina",email:"kendramolina@sureplex.com",dob:"2002-07-19",address:{street:"567 Charles Place",city:"Kimmell",zipcode:1966,geo:{lat:50.765816,lng:-117.106499}},phone:"+1 (920) 528-3330",isActive:!1,age:31,company:"DANJA"},{id:19,firstName:"Ebony",lastName:"Livingston",email:"ebonylivingston@danja.com",dob:"1994-10-18",address:{street:"284 Cass Place",city:"Navarre",zipcode:948,geo:{lat:65.271256,lng:-83.064729}},phone:"+1 (970) 591-3039",isActive:!1,age:33,company:"EURON"},{id:20,firstName:"Kaufman",lastName:"Rush",email:"kaufmanrush@euron.com",dob:"2011-07-10",address:{street:"408 Kingsland Avenue",city:"Beaulieu",zipcode:7911,geo:{lat:41.513153,lng:54.821641}},phone:"+1 (924) 463-2934",isActive:!1,age:39,company:"ILLUMITY"},{id:21,firstName:"Frank",lastName:"Hays",email:"frankhays@illumity.com",dob:"2005-06-15",address:{street:"973 Caton Place",city:"Dargan",zipcode:4104,geo:{lat:63.314988,lng:-138.771323}},phone:"+1 (930) 577-2670",isActive:!1,age:31,company:"SYBIXTEX"},{id:22,firstName:"Carmella",lastName:"Mccarty",email:"carmellamccarty@sybixtex.com",dob:"1980-03-06",address:{street:"919 Judge Street",city:"Canby",zipcode:8283,geo:{lat:9.198597,lng:-138.809971}},phone:"+1 (876) 456-3218",isActive:!0,age:21,company:"ZEDALIS"},{id:23,firstName:"Massey",lastName:"Owen",email:"masseyowen@zedalis.com",dob:"2012-03-01",address:{street:"108 Seaview Avenue",city:"Slovan",zipcode:3599,geo:{lat:-74.648318,lng:99.620699}},phone:"+1 (917) 567-3786",isActive:!1,age:40,company:"DYNO"},{id:24,firstName:"Lottie",lastName:"Lowery",email:"lottielowery@dyno.com",dob:"1982-10-10",address:{street:"557 Meserole Avenue",city:"Fowlerville",zipcode:4991,geo:{lat:54.811546,lng:-20.996515}},phone:"+1 (912) 539-3498",isActive:!0,age:36,company:"MULTIFLEX"},{id:25,firstName:"Addie",lastName:"Luna",email:"addieluna@multiflex.com",dob:"1988-05-01",address:{street:"688 Bulwer Place",city:"Harmon",zipcode:7664,geo:{lat:-12.762766,lng:-39.924497}},phone:"+1 (962) 537-2981",isActive:!0,age:32,company:"PHARMACON"}],fe=()=>{const D=Q();r.useEffect(()=>{D(B("Range Search Table"))});const[y,N]=r.useState(1),I=[10,20,30,50,100],[m,M]=r.useState(I[0]),[p,w]=r.useState(k(C,"id")),[F,T]=r.useState(p),[H,ie]=r.useState(p),[s,j]=r.useState(""),[b,X]=r.useState({columnAccessor:"id",direction:"asc"});r.useEffect(()=>{N(1)},[m]),r.useEffect(()=>{const e=(y-1)*m,a=e+m;T([...p.slice(e,a)])},[y,m,p]),r.useEffect(()=>{w(()=>H.filter(e=>e.id.toString().includes(s.toLowerCase())||e.firstName.toLowerCase().includes(s.toLowerCase())||e.lastName.toLowerCase().includes(s.toLowerCase())||e.company.toLowerCase().includes(s.toLowerCase())||e.email.toLowerCase().includes(s.toLowerCase())||e.age.toString().toLowerCase().includes(s.toLowerCase())||e.dob.toLowerCase().includes(s.toLowerCase())||e.phone.toLowerCase().includes(s.toLowerCase())))},[s]),r.useEffect(()=>{const e=k(p,b.columnAccessor);w(b.direction==="desc"?e.reverse():e),N(1)},[b]);const K=e=>{if(e){const a=new Date(e),i=a.getMonth()+1<10?"0"+(a.getMonth()+1):a.getMonth()+1;return(a.getDate()<10?"0"+a.getDate():a.getDate())+"/"+i+"/"+a.getFullYear()}return""},U=["id","firstName","lastName","company","age","dob","email","phone"],A=e=>{let a=U,i=C,h="table",f;if(f=window.navigator,e==="csv"){let d=";",g=`
`,o=a.map(u=>L(u)).join(d);if(o+=g,i.map(u=>{a.map((v,O)=>{O>0&&(o+=d);let P=u[v]?u[v]:"";o+=P}),o+=g}),o==null)return;if(!o.match(/^data:text\/csv/i)&&!f.msSaveOrOpenBlob){var $="data:application/csv;charset=utf-8,"+encodeURIComponent(o),z=document.createElement("a");z.setAttribute("href",$),z.setAttribute("download",h+".csv"),z.click()}else{var q=new Blob([o]);f.msSaveOrOpenBlob&&f.msSaveBlob(q,h+".csv")}}else if(e==="print"){var c="<p>"+h+"</p>";c+='<table style="width: 100%; " cellpadding="0" cellcpacing="0"><thead><tr style="color: #515365; background: #eff5ff; -webkit-print-color-adjust: exact; print-color-adjust: exact; "> ',a.map(d=>{c+="<th>"+L(d)+"</th>"}),c+="</tr></thead>",c+="<tbody>",i.map(d=>{c+="<tr>",a.map(g=>{let o=d[g]?d[g]:"";c+="<td>"+o+"</td>"}),c+="</tr>"}),c+="<style>body {font-family:Arial; color:#495057;}p{text-align:center;font-size:18px;font-weight:bold;margin:15px;}table{ border-collapse: collapse; border-spacing: 0; }th,td{font-size:12px;text-align:left;padding: 4px;}th{padding:8px 4px;}tr:nth-child(2n-1){background:#f7f7f7; }</style>",c+="</tbody></table>";var x=window.open("","","left=0,top=0,width=1000,height=600,toolbar=0,scrollbars=0,status=0");x.document.write("<title>Print</title>"+c),x.document.close(),x.focus(),x.print()}else if(e==="txt"){let d=",",g=`
`,o=a.map(u=>L(u)).join(d);if(o+=g,i.map(u=>{a.map((v,O)=>{O>0&&(o+=d);let P=u[v]?u[v]:"";o+=P}),o+=g}),o==null)return;if(!o.match(/^data:text\/txt/i)&&!f.msSaveOrOpenBlob){var J="data:application/txt;charset=utf-8,"+encodeURIComponent(o),E=document.createElement("a");E.setAttribute("href",J),E.setAttribute("download",h+".txt"),E.click()}else{var _=new Blob([o]);f.msSaveOrOpenBlob&&f.msSaveBlob(_,h+".txt")}}},G=["Id","First Name","Last Name","Email","Start Date","Phone No.","Age","Company"];function V(){const e=["id","firstName","lastName","email","dob","phone","age","company"];re.downloadExcel({fileName:"table",sheet:"react-export-table-to-excel",tablePayload:{header:G,body:C.map(a=>e.map(i=>a[i]))}})}const L=e=>e.replace("_"," ").replace("-"," ").toLowerCase().split(" ").map(a=>a.charAt(0).toUpperCase()+a.substring(1)).join(" ");r.useEffect(()=>{D(B("Column Chooser Table"))});const W=ee(e=>e.themeConfig.rtlClass)==="rtl",[n,S]=r.useState(["age","dob","isActive"]),Y=(e,a)=>{n.includes(e)?S(i=>n.filter(h=>h!==i)):S([...n,e])},Z=[{accessor:"id",title:"ID"},{accessor:"firstName",title:"First Name"},{accessor:"lastName",title:"Last Name"},{accessor:"email",title:"Email"},{accessor:"dob",title:"Startdate"},{accessor:"phone",title:"Phone"},{accessor:"age",title:"Age"},{accessor:"company",title:"Company"}];return r.useEffect(()=>{N(1)},[m]),r.useEffect(()=>{const e=(y-1)*m,a=e+m;T([...p.slice(e,a)])},[y,m,p]),r.useEffect(()=>{w(()=>C.filter(e=>e.id.toString().includes(s.toLowerCase())||e.firstName.toLowerCase().includes(s.toLowerCase())||e.lastName.toLowerCase().includes(s.toLowerCase())||e.company.toLowerCase().includes(s.toLowerCase())||e.email.toLowerCase().includes(s.toLowerCase())||e.age.toString().toLowerCase().includes(s.toLowerCase())||e.dob.toLowerCase().includes(s.toLowerCase())||e.phone.toLowerCase().includes(s.toLowerCase())))},[s]),r.useEffect(()=>{const e=k(p,b.columnAccessor);w(b.direction==="desc"?e.reverse():e),N(1)},[b]),l("div",{children:[l("div",{className:"panel mt-6",children:[l("div",{className:"flex md:items-center justify-between md:flex-row flex-col mb-4.5 gap-1",children:[l("div",{className:"flex items-center ",children:[l("button",{type:"button",onClick:()=>A("csv"),className:"btn btn-primary btn-sm m-1 ",children:[t(R,{className:"w-5 h-5 ltr:mr-2 rtl:ml-2"}),"CSV"]}),l("button",{type:"button",onClick:()=>A("txt"),className:"btn btn-primary btn-sm m-1",children:[t(R,{className:"w-5 h-5 ltr:mr-2 rtl:ml-2"}),"TXT"]}),l("button",{type:"button",className:"btn btn-primary btn-sm m-1",onClick:V,children:[t(R,{className:"w-5 h-5 ltr:mr-2 rtl:ml-2"}),"EXCEL"]}),l("button",{type:"button",onClick:()=>A("print"),className:"btn btn-primary btn-sm m-1",children:[t(le,{className:"ltr:mr-2 rtl:ml-2"}),"PRINT"]})]}),t("button",{type:"button",className:"btn btn-primary btn-sm m-1 w-50 h-5 ltr:mr-2 rtl:ml-2",style:{width:"8%",height:"33px"},children:"OK"}),t("button",{type:"button",className:"btn btn-primary btn-sm m-1",style:{width:"8%",height:"33px"},children:"CLOSE"}),t("div",{className:"flex md:items-center md:flex-row flex-col  gap-1",children:t("div",{className:"flex items-center gap-5 ltr:ml-auto rtl:mr-auto",children:t("div",{className:"flex md:items-center md:flex-row flex-col gap-1",children:t("div",{className:"dropdown",children:t(te,{placement:`${W?"bottom-end":"bottom-start"}`,btnClassName:"!flex items-center border font-semibold border-white-light dark:border-[#253b5c] rounded-md px-4 py-2 text-sm dark:bg-[#1b2e4b] dark:text-white-dark",button:l(ae,{children:[t("span",{className:"ltr:mr-1 rtl:ml-1",children:"Columns"}),t(se,{className:"w-5 h-5"})]}),children:t("ul",{className:"!min-w-[140px]",children:Z.map((e,a)=>t("li",{className:"flex flex-col",onClick:i=>{i.stopPropagation()},children:t("div",{className:"flex items-center px-4 py-1",children:l("label",{className:"cursor-pointer mb-0",children:[t("input",{type:"checkbox",checked:!n.includes(e.accessor),className:"form-checkbox",defaultValue:e.accessor,onChange:i=>{S(i.target.value),Y(e.accessor,i.target.checked)}}),t("span",{className:"ltr:ml-2 rtl:mr-2",children:e.title})]})})},a))})})})})})}),t("input",{type:"text",className:"form-input w-auto",placeholder:"Search...",value:s,onChange:e=>j(e.target.value)})]}),l("table",{children:[l("thead",{children:[t("td",{children:l("label",{htmlFor:"",children:["Agent Name",t("select",{name:"Agent Name",style:{width:"144px",marginLeft:"3px",border:"1px solid #e5e7eb"},children:t("option",{value:"",children:"--ALL--"})})]})}),t("td",{children:l("label",{htmlFor:"",children:["Agent Firm Name",t("select",{name:"Agent Firm Name",style:{width:"144px",marginLeft:"3px",border:"1px solid #e5e7eb"},children:t("option",{value:"",children:"--ALL--"})})]})}),l("td",{children:[t("span",{})," Mobile No. ",t("input",{type:"text",style:{width:"144px",border:"1px solid #e5e7eb"}})]})]}),l("thead",{children:[t("td",{children:l("label",{htmlFor:"",children:["City",t("select",{name:"City",style:{width:"144px",marginLeft:"58px",border:"1px solid #e5e7eb"},children:t("option",{value:"",children:"--ALL--"})})]})}),t("td",{children:l("label",{htmlFor:"",children:["State",t("select",{name:"State",style:{width:"144px",marginLeft:"82px",border:"1px solid #e5e7eb"},children:t("option",{value:"",children:"--ALL--"})})]})}),t("td",{children:l("label",{htmlFor:"",children:["Status",t("select",{name:"Status",style:{width:"144px",marginLeft:"30px",border:"1px solid #e5e7eb"},children:t("option",{value:"",children:"Active"})})]})})]})]}),t("div",{className:"datatables",children:t(oe,{highlightOnHover:!0,className:"whitespace-nowrap table-hover",records:F,columns:[{accessor:"id",title:"#",sortable:!0,hidden:n.includes("id")},{accessor:"firstName",sortable:!0,hidden:n.includes("firstName")},{accessor:"lastName",sortable:!0,hidden:n.includes("lastName")},{accessor:"company",title:"Company",sortable:!0,hidden:n.includes("company")},{accessor:"age",title:"Age",sortable:!0,hidden:n.includes("age")},{accessor:"dob",title:"Start Date",sortable:!0,hidden:n.includes("dob"),render:({dob:e})=>t("div",{children:K(e)})},{accessor:"email",sortable:!0,hidden:n.includes("email")},{accessor:"phone",sortable:!0,hidden:n.includes("phone")}],totalRecords:p.length,recordsPerPage:m,page:y,onPageChange:e=>N(e),recordsPerPageOptions:I,onRecordsPerPageChange:M,sortStatus:b,onSortStatusChange:X,minHeight:200,paginationText:({from:e,to:a,totalRecords:i})=>`Showing  ${e} to ${a} of ${i} entries`})})]}),t("div",{className:"panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary"})]})};export{fe as default};
