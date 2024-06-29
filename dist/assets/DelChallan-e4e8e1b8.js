import{u as ue,r as c,s as J,a0 as W,a as pe,j as l,b as e,D as Te,F as De,d as Ie,a2 as Oe}from"./index-54e701e9.js";import{N as Se}from"./index-5b6ba9ac.js";import{s as ee}from"./sortBy-f825cfee.js";import{I as k}from"./IconFile-78f45a77.js";import{I as be}from"./IconPrinter-091d55dc.js";import{l as Re}from"./index-7b7ee0ed.js";/* empty css              */import"./floating-ui.dom-aa888fdc.js";import"./_baseIsEqual-e39dab2a.js";import"./_defineProperty-ce436608.js";const Fe=()=>{const K=ue();c.useEffect(()=>{K(J("Range Search Table"))});const[Pe,te]=c.useState([]),[M,L]=c.useState(1),ae=[10,20,30,50,100],[o,R]=c.useState([]),[G,O]=c.useState(o),[le,Q]=c.useState(o),[C,se]=c.useState(""),[y,j]=c.useState(1),[fe,ce]=c.useState(1),[m,re]=c.useState(10),[ne,oe]=c.useState(0),[D,ie]=c.useState({columnAccessor:"id",direction:"asc"}),[I,z]=c.useState(""),[A,$]=c.useState(""),[S,V]=c.useState(""),[b,q]=c.useState(""),[_,X]=c.useState("");c.useState({COMPANYID:"",AGENTID:"",AFIRMNAME:"",ACTELEPHONENO:"",ACMOBILENO:"",ACADDRESSLINE1:"",ACADDRESSLINE2:"",ACADDRESSLINE3:"",STATUS:"",AGENTNAME:"",ADOB:"",APERSONALIDTYPE:"",APERSONALID:"",APMOBILENO:"",APEMAILID:"",APADDRESSLINE1:"",APADDRESSLINE2:"",APADDRESSLINE3:"",APCITY:"",APSTATE:"",APCOUNTRY:"",APDISTRICT:"",APPINCODE:"",ABANKNAME:"",AACCOUNTTYPE:"",AACCOUNTNO:"",AACCOUNTHOLDERNAME:"",ABRANCHNAME:"",AIFSCCODE:"",ACHEQUENO:"",ACHEQUEREMARK:"",AMICRCODE:"",ATPNOBANK:"",CREATEDBY:"",CREATEDON:"",UPDATEDBY:"",UPDATEDON:"",ACCITY:"",ACSTATE:"",ACCOUNTRY:"",ACDISTRICT:"",ACPINCODE:"",REMARK:""});const n=t=>{const{name:a,value:r}=t.target;a==="Agent Name"?z(r):a==="Agent Firm Name"?$(r):a==="City"?V(r):a==="State"?q(r):a==="Status"&&X(r)},Ae=()=>{const t=o.filter(a=>(I===""||a.AGENTNAME===I)&&(A===""||a.AFIRMNAME===A)&&(S===""||a.APCITY===S)&&(b===""||a.APSTATE===b)&&(_===""||a.STATUS===_));O(t)},de=()=>{z(""),$(""),V(""),q(""),X(""),O(o.slice(0,10))};c.useEffect(()=>{L(1)},[m]),c.useEffect(()=>{fetch(`${W}/getMaster`).then(t=>t.json()).then(t=>{te(t),R(t),O(t),Q(t)}).catch(t=>{console.error("Error fetching data:",t)})},[]),c.useEffect(()=>{(async()=>{try{const a=await Oe.get(`${W}/getMasterPagination?page=${y}`),{totalRecords:r,totalPages:h,currentPage:u,agents:f}=a.data;R(f),O(f),Q(f),ce(h),j(u),oe(r)}catch(a){console.error("Error fetching data:",a)}})()},[y]),c.useEffect(()=>{const t=(M-1)*m,a=t+m;O([...o.slice(t,a)])},[M,m,o]),c.useEffect(()=>{R(()=>le.filter(t=>t.id.toString().includes(C.toLowerCase())||t.AGENTNAME.toLowerCase().includes(C.toLowerCase())||t.AFIRMNAME.toLowerCase().includes(C.toLowerCase())||t.APCOUNTRY.toLowerCase().includes(C.toLowerCase())||t.APEMAILID.toLowerCase().includes(C.toLowerCase())||t.ACADDRESSLINE1.toString().toLowerCase().includes(C.toLowerCase())||t.APCITY.toLowerCase().includes(C.toLowerCase())||t.APMOBILENO.toLowerCase().includes(C.toLowerCase())))},[C]),c.useEffect(()=>{const t=ee(o,D.columnAccessor);R(D.direction==="desc"?t.reverse():t),L(1)},[D]);const Z=["id","COMPANYID","AGENTID","AFIRMNAME","ACTELEPHONENO","ACMOBILENO","ACADDRESSLINE1","STATUS","AGENTNAME","ADOB","APERSONALIDTYPE","APERSONALID","APMOBILENO","APEMAILID","APADDRESSLINE1","APCITY","APSTATE","APCOUNTRY","APDISTRICT","APPINCODE","ABANKNAME","AACCOUNTTYPE","AACCOUNTNO","AACCOUNTHOLDERNAME","ABRANCHNAME","AIFSCCODE","ACHEQUENO","ACHEQUEREMARK","AMICRCODE","ATPNOBANK","CREATEDBY","CREATEDON","UPDATEDBY","UPDATEDBY","UPDATEDON","ACCITY","ACCOUNTRY","ACDISTRICT","ACPINCODE","Remark"],B=t=>{let a=Z,r=o,h="table",u;if(u=window.navigator,t==="csv"){let E=";",T=`
`,i=a.map(p=>U(p)).join(E);if(i+=T,r.map(p=>{a.map((g,F)=>{F>0&&(i+=E);let H=p[g]?p[g]:"";i+=H}),i+=T}),i==null)return;if(!i.match(/^data:text\/csv/i)&&!u.msSaveOrOpenBlob){var f="data:application/csv;charset=utf-8,"+encodeURIComponent(i),Y=document.createElement("a");Y.setAttribute("href",f),Y.setAttribute("download",h+".csv"),Y.click()}else{var Ee=new Blob([i]);u.msSaveOrOpenBlob&&u.msSaveBlob(Ee,h+".csv")}}else if(t==="print"){var N="<p>"+h+"</p>";N+='<table style="width: 100%; " cellpadding="0" cellcpacing="0"><thead><tr style="color: #515365; background: #eff5ff; -webkit-print-color-adjust: exact; print-color-adjust: exact; "> ',a.map(E=>{N+="<th>"+U(E)+"</th>"}),N+="</tr></thead>",N+="<tbody>",r.map(E=>{N+="<tr>",a.map(T=>{let i=E[T]?E[T]:"";N+="<td>"+i+"</td>"}),N+="</tr>"}),N+="<style>body {font-family:Arial; color:#495057;}p{text-align:center;font-size:18px;font-weight:bold;margin:15px;}table{ border-collapse: collapse; border-spacing: 0; }th,td{font-size:12px;text-align:left;padding: 4px;}th{padding:8px 4px;}tr:nth-child(2n-1){background:#f7f7f7; }</style>",N+="</tbody></table>";var v=window.open("","","left=0,top=0,width=1000,height=600,toolbar=0,scrollbars=0,status=0");v.document.write("<title>Print</title>"+N),v.document.close(),v.focus(),v.print()}else if(t==="txt"){let E=",",T=`
`,i=a.map(p=>U(p)).join(E);if(i+=T,r.map(p=>{a.map((g,F)=>{F>0&&(i+=E);let H=p[g]?p[g]:"";i+=H}),i+=T}),i==null)return;if(!i.match(/^data:text\/txt/i)&&!u.msSaveOrOpenBlob){var me="data:application/txt;charset=utf-8,"+encodeURIComponent(i),w=document.createElement("a");w.setAttribute("href",me),w.setAttribute("download",h+".txt"),w.click()}else{var he=new Blob([i]);u.msSaveOrOpenBlob&&u.msSaveBlob(he,h+".txt")}}};function Ce(){const t=["id","COMPANYID","AGENTID","AFIRMNAME","ACTELEPHONENO","ACMOBILENO","ACADDRESSLINE1","STATUS","AGENTNAME","ADOB","APERSONALIDTYPE","APERSONALID","APMOBILENO","APEMAILID","APADDRESSLINE1","APCITY","APSTATE","APCOUNTRY","APDISTRICT","APPINCODE","ABANKNAME","AACCOUNTTYPE","AACCOUNTNO","AACCOUNTHOLDERNAME","ABRANCHNAME","AIFSCCODE","ACHEQUENO","ACHEQUEREMARK","AMICRCODE","ATPNOBANK","CREATEDBY","CREATEDON","UPDATEDBY","UPDATEDBY","UPDATEDON","ACCITY","ACCOUNTRY","ACDISTRICT","ACPINCODE","REMARK"];Re.downloadExcel({fileName:"table",sheet:"react-export-table-to-excel",tablePayload:{header:Z,body:G.map(a=>t.map(r=>a[r]))}})}const U=t=>t.replace("_"," ").replace("-"," ").toLowerCase().split(" ").map(a=>a.charAt(0).toUpperCase()+a.substring(1)).join(" ");c.useEffect(()=>{K(J("Column Chooser Table"))});const Ne=pe(t=>t.themeConfig.rtlClass)==="rtl",[s,P]=c.useState(["age","dob","COMPANYID","AGENTID","ACTELEPHONENO","ACMOBILENO","ACADDRESSLINE1","STATUS","ADOB","APERSONALIDTYPE","APERSONALID","APMOBILENO","APADDRESSLINE1","APCITY","APSTATE","APCOUNTRY","APDISTRICT","APPINCODE","ABANKNAME","AACCOUNTTYPE","AACCOUNTNO","AACCOUNTHOLDERNAME","ABRANCHNAME","AIFSCCODE","ACHEQUENO","ACHEQUEREMARK","AMICRCODE","ATPNOBANK","CREATEDBY","CREATEDON","UPDATEDBY","UPDATEDBY","UPDATEDON","ACCITY","ACCOUNTRY","ACDISTRICT","ACPINCODE","ACSTATE","Remark","isActive"]),x=(t,a)=>{s.includes(t)?P(r=>s.filter(h=>h!==r)):P([...s,t])},d=[{accessor:"id",title:"ID"},{accessor:"agentName",title:"Agent Name"},{accessor:"agentFirmName",title:"Agent Firm Name"},{accessor:"email",title:"Email"},{accessor:"dob",title:"Startdate"},{accessor:"phone",title:"Phone"},{accessor:"age",title:"Status"},{accessor:"Remark",title:"Remark"},{accessor:"AACCOUNTHOLDERNAME",title:"Account Holder Name"},{accessor:"AACCOUNTNO",title:"Account No"},{accessor:"AACCOUNTTYPE",title:"Account Type"},{accessor:"ABANKNAME",title:"Bank Name"},{accessor:"ABRANCHNAME",title:"Branch Name"},{accessor:"ACADDRESSLINE1",title:"Company Address"},{accessor:"ACCITY",title:"Company City"},{accessor:"ACCOUNTRY",title:"Company Country"},{accessor:"ACDISTRICT",title:"Company District"},{accessor:"ACHEQUENO",title:"Cheque No"},{accessor:"ACHEQUEREMARK",title:"Cheque Mark"},{accessor:"ACMOBILENO",title:"Company Contact No"},{accessor:"ACPINCODE",title:"Company Pincode"},{accessor:"ACSTATE",title:"Company State"},{accessor:"ACTELEPHONENO",title:"Company Telephone"},{accessor:"AIFSCCODE",title:"IFSC Code"},{accessor:"AMICRCODE",title:"MICR Code"},{accessor:"APADDRESSLINE1",title:"Agent Address"},{accessor:"APCITY",title:"City"},{accessor:"APDISTRICT",title:"District"},{accessor:"APERSONALIDTYPE",title:"Agent ID Type"},{accessor:"APERSONALID",title:"Agent ID No"},{accessor:"APMOBILENO",title:"Personal Contact No"},{accessor:"APPINCODE",title:"Agent Pincode"},{accessor:"APSTATE",title:"Agent State"},{accessor:"ATPNOBANK",title:"Bank ATP No"}];return c.useEffect(()=>{L(1)},[m]),c.useEffect(()=>{const t=(M-1)*m,a=t+m;O([...o.slice(t,a)])},[M,m,o]),c.useEffect(()=>{const t=ee(o,D.columnAccessor);R(D.direction==="desc"?t.reverse():t),L(1)},[D]),l("div",{children:[l("div",{className:"panel mt-6",children:[l("div",{className:"flex md:items-center justify-between md:flex-row flex-col mb-4.5 gap-1",children:[l("div",{className:"flex items-center ",children:[l("button",{type:"button",onClick:()=>B("csv"),className:"btn btn-primary btn-sm m-1 ",children:[e(k,{className:"w-5 h-5 ltr:mr-2 rtl:ml-2"}),"CSV"]}),l("button",{type:"button",onClick:()=>B("txt"),className:"btn btn-primary btn-sm m-1",children:[e(k,{className:"w-5 h-5 ltr:mr-2 rtl:ml-2"}),"TXT"]}),l("button",{type:"button",className:"btn btn-primary btn-sm m-1",onClick:Ce,children:[e(k,{className:"w-5 h-5 ltr:mr-2 rtl:ml-2"}),"EXCEL"]}),l("button",{type:"button",onClick:()=>B("print"),className:"btn btn-primary btn-sm m-1",children:[e(be,{className:"ltr:mr-2 rtl:ml-2"}),"PRINT"]})]}),e("button",{type:"button",className:"btn btn-primary btn-sm m-1 w-50 h-5 ltr:mr-2 rtl:ml-2",style:{width:"8%",height:"33px"},onClick:de,children:"Reset"}),e("button",{type:"button",className:"btn btn-primary btn-sm m-1 w-50 h-5 ltr:mr-2 rtl:ml-2",style:{width:"8%",height:"33px"},onClick:Ae,children:"Search"}),e("div",{className:"flex md:items-center md:flex-row flex-col  gap-1",children:e("div",{className:"flex items-center gap-5 ltr:ml-auto rtl:mr-auto",children:e("div",{className:"flex md:items-center md:flex-row flex-col gap-1",children:e("div",{className:"dropdown",children:e(Te,{placement:`${Ne?"bottom-end":"bottom-start"}`,btnClassName:"!flex items-center border font-semibold border-white-light dark:border-[#253b5c] rounded-md px-4 py-2 text-sm dark:bg-[#1b2e4b] dark:text-white-dark",button:l(De,{children:[e("span",{className:"ltr:mr-1 rtl:ml-1",children:"Columns"}),e(Ie,{className:"w-5 h-5"})]}),children:e("div",{className:"overflow-auto max-h-[300px]",children:e("ul",{className:"!min-w-[140px]",children:d.map((t,a)=>a%3===0?l("li",{className:"flex md:flex-row flex-col ",onClick:r=>{r.stopPropagation()},children:[e("div",{className:"flex items-center px-4 py-1 md:w-1/3",children:l("label",{className:"cursor-pointer mb-0 flex items-center",children:[e("input",{type:"checkbox",checked:!s.includes(t.accessor),className:"form-checkbox mr-2",defaultValue:t.accessor,onChange:r=>{P(r.target.value),x(t.accessor,r.target.checked)}}),e("span",{children:t.title})]})}),d[a+1]&&e("div",{className:"flex items-center px-4 py-1 md:w-1/3",children:l("label",{className:"cursor-pointer mb-0 flex items-center",children:[e("input",{type:"checkbox",checked:!s.includes(d[a+1].accessor),className:"form-checkbox mr-2",defaultValue:d[a+1].accessor,onChange:r=>{P(r.target.value),x(d[a+1].accessor,r.target.checked)}}),e("span",{children:d[a+1].title})]})}),d[a+2]&&e("div",{className:"flex items-center px-4 py-1 md:w-1/3",children:l("label",{className:"cursor-pointer mb-0 flex items-center",children:[e("input",{type:"checkbox",checked:!s.includes(d[a+2].accessor),className:"form-checkbox mr-2",defaultValue:d[a+2].accessor,onChange:r=>{P(r.target.value),x(d[a+2].accessor,r.target.checked)}}),e("span",{children:d[a+2].title})]})})]},a):null)})})})})})})}),e("input",{type:"text",className:"form-input w-auto",placeholder:"Search...",value:C,onChange:t=>se(t.target.value)})]}),e("div",{className:"container-fluid ",children:l("table",{className:"table table-responsive",children:[e("thead",{className:"",children:l("tr",{className:"row",children:[e("th",{children:l("label",{children:["Customer",e("select",{name:"Customer",className:"form-select",value:I,onChange:n})]})}),e("th",{children:l("label",{children:["From Date",e("input",{type:"date",className:"form-control"})]})}),e("th",{children:l("label",{children:["To Date",e("input",{type:"date",className:"form-control"})]})}),e("th",{children:l("label",{children:["Bill No. From",e("input",{type:"text",className:"form-control"})]})}),e("th",{children:l("label",{children:["To",e("input",{type:"text",className:"form-control"})]})}),e("th",{children:l("label",{children:["Mode",l("select",{name:"Mode",className:"form-select",value:A,onChange:n,children:[e("option",{value:"",children:"--ALL--"}),o.map((t,a)=>e("option",{value:t.AFIRMNAME,children:t.AFIRMNAME},a))]})]})})]})}),e("thead",{children:l("tr",{className:"row",children:[e("th",{children:l("label",{children:["Product",e("select",{name:"Product",className:"form-select",value:I,onChange:n})]})}),e("th",{children:l("label",{children:["Brand",l("select",{name:"Brand",className:"form-select",value:A,onChange:n,children:[e("option",{value:"",children:"--ALL--"}),o.map((t,a)=>e("option",{value:t.AFIRMNAME,children:t.AFIRMNAME},a))]})]})}),e("th",{children:l("label",{children:["Sup Color",l("select",{name:"Sup Color",className:"form-select",value:A,onChange:n,children:[e("option",{value:"",children:"--ALL--"}),o.map((t,a)=>e("option",{value:t.AFIRMNAME,children:t.AFIRMNAME},a))]})]})}),e("th",{children:l("label",{children:["Color",e("select",{name:"Color",className:"form-select",value:S,onChange:n})]})}),e("th",{children:l("label",{children:["Size",e("select",{name:"Size",className:"form-select",value:b,onChange:n})]})})]})}),e("thead",{children:l("tr",{className:"row",children:[e("th",{children:l("label",{children:["Style",e("select",{name:"Style",className:"form-select",value:I,onChange:n})]})}),e("th",{children:l("label",{children:["Sub Group",l("select",{name:"Sub Group",className:"form-select",value:A,onChange:n,children:[e("option",{value:"",children:"--ALL--"}),o.map((t,a)=>e("option",{value:t.AFIRMNAME,children:t.AFIRMNAME},a))]})]})}),e("th",{children:l("label",{children:["Group",l("select",{name:"Group",className:"form-select",value:A,onChange:n,children:[e("option",{value:"",children:"--ALL--"}),o.map((t,a)=>e("option",{value:t.AFIRMNAME,children:t.AFIRMNAME},a))]})]})}),e("th",{children:l("label",{children:["Gender",e("select",{name:"Gender",className:"form-select",value:S,onChange:n})]})}),e("th",{children:l("label",{children:["Buyer",e("select",{name:"Buyer",className:"form-select",value:b,onChange:n})]})})]})}),e("thead",{children:l("tr",{className:"row",children:[e("th",{children:l("label",{children:["Sub Category",e("select",{name:"Sub Category",className:"form-select",value:I,onChange:n})]})}),e("th",{children:l("label",{children:["Category",l("select",{name:"Category",className:"form-select",value:A,onChange:n,children:[e("option",{value:"",children:"--ALL--"}),o.map((t,a)=>e("option",{value:t.AFIRMNAME,children:t.AFIRMNAME},a))]})]})}),e("th",{children:l("label",{children:["Material",l("select",{name:"Material",className:"form-select",value:A,onChange:n,children:[e("option",{value:"",children:"--ALL--"}),o.map((t,a)=>e("option",{value:t.AFIRMNAME,children:t.AFIRMNAME},a))]})]})}),e("th",{children:l("label",{children:["Company",e("select",{name:"Company",className:"form-select",value:S,onChange:n})]})}),e("th",{children:l("label",{children:["Season",e("select",{name:"Season",className:"form-select",value:b,onChange:n})]})})]})}),e("thead",{children:l("tr",{className:"row",children:[e("th",{children:l("label",{children:["Packing",e("select",{name:"Packing",className:"form-select",value:I,onChange:n})]})}),e("th",{children:l("label",{children:["Promotion",l("select",{name:"Promotion",className:"form-select",value:A,onChange:n,children:[e("option",{value:"",children:"--ALL--"}),o.map((t,a)=>e("option",{value:t.AFIRMNAME,children:t.AFIRMNAME},a))]})]})}),e("th",{children:l("label",{children:["Discount",l("select",{name:"Discount",className:"form-select",value:A,onChange:n,children:[e("option",{value:"",children:"--ALL--"}),o.map((t,a)=>e("option",{value:t.AFIRMNAME,children:t.AFIRMNAME},a))]})]})}),e("th",{children:l("label",{children:["Scheme",e("select",{name:"Scheme",className:"form-select",value:S,onChange:n})]})}),e("th",{children:l("label",{children:["Event",e("select",{name:"Event",className:"form-select",value:b,onChange:n})]})})]})})]})}),e("div",{className:"datatables",children:e(Se,{highlightOnHover:!0,className:"whitespace-nowrap table-hover",records:G,style:{position:"relative",zIndex:0},columns:[{accessor:"id",title:"#",sortable:!0,hidden:s.includes("id")},{accessor:"AGENTNAME",title:"Agent Name",sortable:!0,hidden:s.includes("agentName")},{accessor:"AFIRMNAME",title:"Agent Firm Name",sortable:!0,hidden:s.includes("agentFirmName")},{accessor:"APEMAILID",title:"Email",sortable:!0,hidden:s.includes("email")},{accessor:"APMOBILENO",title:"Phone",sortable:!0,hidden:s.includes("phone")},{accessor:"APCOUNTRY",title:"Country",sortable:!0,hidden:s.includes("APCOUNTRY")},{accessor:"APCITY",title:"City",sortable:!0,hidden:s.includes("APCITY")},{accessor:"APSTATE",title:"State",sortable:!0,hidden:s.includes("APSTATE")},{accessor:"APDISTRICT",title:"District",sortable:!0,hidden:s.includes("APDISTRICT")},{accessor:"APADDRESSLINE1",title:"Agent Address",sortable:!0,hidden:s.includes("APADDRESSLINE1")},{accessor:"APERSONALIDTYPE",title:"Agent ID Type",sortable:!0,hidden:s.includes("APERSONALIDTYPE")},{accessor:"APERSONALID",title:"Agent ID No",sortable:!0,hidden:s.includes("APERSONALID")},{accessor:"AACCOUNTHOLDERNAME",title:"Account Holder Name",sortable:!0,hidden:s.includes("AACCOUNTHOLDERNAME")},{accessor:"AACCOUNTTYPE",title:"Account Type",sortable:!0,hidden:s.includes("AACCOUNTTYPE")},{accessor:"AACCOUNTNO",title:"Account Number",sortable:!0,hidden:s.includes("AACCOUNTNO")},{accessor:"ABANKNAME",title:"Bank Name",sortable:!0,hidden:s.includes("ABANKNAME")},{accessor:"ABRANCHNAME",title:"Branch Name",sortable:!0,hidden:s.includes("ABRANCHNAME")},{accessor:"AIFSCCODE",title:"IFSC Code",sortable:!0,hidden:s.includes("AIFSCCODE")},{accessor:"AMICRCODE",title:"MICR Code",sortable:!0,hidden:s.includes("AMICRCODE")},{accessor:"ACHEQUENO",title:"Cheque No",sortable:!0,hidden:s.includes("ACHEQUENO")},{accessor:"ACHEQUEREMARK",title:"Cheque Remark",sortable:!0,hidden:s.includes("ACHEQUEREMARK")},{accessor:"ACADDRESSLINE1",title:"Company Address",sortable:!0,hidden:s.includes("ACADDRESSLINE1")},{accessor:"ACCITY",title:"Company City",sortable:!0,hidden:s.includes("ACCITY")},{accessor:"ACCOUNTRY",title:"Company Country",sortable:!0,hidden:s.includes("ACCOUNTRY")},{accessor:"ACDISTRICT",title:"Company District",sortable:!0,hidden:s.includes("ACDISTRICT")},{accessor:"ACSTATE",title:"Company State",sortable:!0,hidden:s.includes("ACSTATE")},{accessor:"ACMOBILENO",title:"Company Contact No",sortable:!0,hidden:s.includes("ACMOBILENO")},{accessor:"ACTELEPHONENO",title:"Company Telephone",sortable:!0,hidden:s.includes("ACTELEPHONENO")},{accessor:"ACPINCODE",title:"Company Pincode",sortable:!0,hidden:s.includes("ACPINCODE")},{accessor:"CREATEDBY",title:"Created By",sortable:!0,hidden:s.includes("CREATEDBY")},{accessor:"CREATEDON",title:"Created On",sortable:!0,hidden:s.includes("CREATEDON")},{accessor:"REMARK",title:"Remark",sortable:!0,hidden:s.includes("Remark")},{accessor:"UPDATEDBY",title:"Updated By",sortable:!0,hidden:s.includes("UPDATEDBY")},{accessor:"UPDATEDON",title:"Updated On",sortable:!0,hidden:s.includes("UPDATEDON")},{accessor:"STATUS",title:"Status",sortable:!0,hidden:s.includes("age")},{accessor:"ADOB",title:"DOB",sortable:!0,hidden:s.includes("dob")}],totalRecords:ne,recordsPerPage:m,page:y,onPageChange:t=>j(t),recordsPerPageOptions:ae,onRecordsPerPageChange:re,sortStatus:D,onSortStatusChange:ie,minHeight:200,paginationText:({from:t,to:a,totalRecords:r})=>`Showing  ${t} to ${a} of ${r} entries`})})]}),e("div",{className:"panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary"})]})};export{Fe as default};