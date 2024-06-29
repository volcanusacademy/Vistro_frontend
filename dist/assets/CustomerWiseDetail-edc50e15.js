import{u as Ae,r as c,s as oe,a as ie,a0 as ne,b as a,j as l,D as de,F as Ee,d as Ne}from"./index-54e701e9.js";import{N as Ce}from"./index-5b6ba9ac.js";import{s as De}from"./sortBy-f825cfee.js";import{l as ue}from"./index-7b7ee0ed.js";import{I as Y}from"./IconFile-78f45a77.js";import{I as Te}from"./IconPrinter-091d55dc.js";import"./floating-ui.dom-aa888fdc.js";import"./_baseIsEqual-e39dab2a.js";import"./_defineProperty-ce436608.js";const Se=["id","COMPANYID","TRANSPORTID","AFIRMNAME","ACTELEPHONENO","ACMOBILENO","ACADDRESSLINE1","ACADDRESSLINE2","ACADDRESSLINE3","STATUS","AGENTNAME","ADOB","APERSONALIDTYPE","APERSONALID","APMOBILENO","APEMAILID","APADDRESSLINE1","APADDRESSLINE2","APADDRESSLINE3","APCITY","APSTATE","APCOUNTRY","APDISTRICT","APPINCODE","ABANKNAME","AACCOUNTTYPE","AACCOUNTNO","AACCOUNTHOLDERNAME","ABRANCHNAME","AIFSCCODE","ACHEQUENO","ACHEQUEREMARK","AMICRCODE","ATPNOBANK","CREATEDBY","CREATEDON","UPDATEDBY","UPDATEDON","ACCITY","ACSTATE","ACCOUNTRY","ACDISTRICT","ACPINCODE","REMARK","GSTNO"],Ue=()=>{const V=Ae();c.useEffect(()=>{V(oe("Multiple Tables"))});const $=ie(t=>t.themeConfig.rtlClass)==="rtl",[h,p]=c.useState(1),y=[10,20,30,50,100],[T,q]=c.useState(y[0]),[i,P]=c.useState([]),[v,O]=c.useState(i),[_,X]=c.useState(i),[Ie,W]=c.useState(""),[N,Z]=c.useState(""),[R,J]=c.useState({columnAccessor:"id",direction:"asc"}),[b,w]=c.useState(""),[H,k]=c.useState(""),[F,K]=c.useState(""),[G,Q]=c.useState(""),[j,z]=c.useState(""),[e,S]=c.useState(["id","COMPANYID","TRANSPORTID","ACADDRESSLINE1","ACTELEPHONENO","ACADDRESSLINE2","ACADDRESSLINE3","ADOB","APERSONALIDTYPE","APERSONALID","APMOBILENO","APEMAILID","APADDRESSLINE1","APADDRESSLINE2","APADDRESSLINE3","APCOUNTRY","APDISTRICT","APPINCODE","ABANKNAME","AACCOUNTTYPE","AACCOUNTNO","AACCOUNTHOLDERNAME","ABRANCHNAME","AIFSCCODE","ACHEQUENO","ACMOBILENO","ACHEQUEREMARK","AMICRCODE","ATPNOBANK","CREATEDBY","CREATEDON","UPDATEDBY","UPDATEDON","ACCITY","ACSTATE","ACCOUNTRY","ACDISTRICT","ACPINCODE","REMARK","GSTNO"]),L=(t,s)=>{e.includes(t)?S(r=>e.filter(D=>D!==r)):S([...e,t])},o=[{accessor:"id",title:"ID"},{accessor:"COMPANYID",title:"Company ID"},{accessor:"TRANSPORTID",title:"Transport ID"},{accessor:"AFIRMNAME",title:"Firm Name"},{accessor:"ACADDRESSLINE1",title:"Address Line 1"},{accessor:"ACADDRESSLINE2",title:"Address Line 2"},{accessor:"ACADDRESSLINE3",title:"Address Line 3"},{accessor:"STATUS",title:"Status"},{accessor:"AGENTNAME",title:"Agent Name"},{accessor:"ADOB",title:"Date of Birth"},{accessor:"APERSONALIDTYPE",title:"Personal ID Type"},{accessor:"APERSONALID",title:"Personal ID"},{accessor:"APMOBILENO",title:"Mobile No"},{accessor:"APEMAILID",title:"Email ID"},{accessor:"APADDRESSLINE1",title:"Address Line 1"},{accessor:"APADDRESSLINE2",title:"Address Line 2"},{accessor:"APADDRESSLINE3",title:"Address Line 3"},{accessor:"APCITY",title:"City"},{accessor:"APSTATE",title:"State"},{accessor:"APCOUNTRY",title:"Country"},{accessor:"APDISTRICT",title:"District"},{accessor:"APPINCODE",title:"Pincode"},{accessor:"ABANKNAME",title:"Bank Name"},{accessor:"AACCOUNTTYPE",title:"Account Type"},{accessor:"AACCOUNTNO",title:"Account No"},{accessor:"AACCOUNTHOLDERNAME",title:"Account Holder Name"},{accessor:"ABRANCHNAME",title:"Branch Name"},{accessor:"AIFSCCODE",title:"IFSC Code"},{accessor:"ACHEQUENO",title:"Cheque No"},{accessor:"ACHEQUEREMARK",title:"Cheque Remark"},{accessor:"AMICRCODE",title:"MICR Code"},{accessor:"ATPNOBANK",title:"TP No Bank"},{accessor:"CREATEDBY",title:"Created By"},{accessor:"CREATEDON",title:"Created On"},{accessor:"UPDATEDBY",title:"Updated By"},{accessor:"UPDATEDON",title:"Updated On"},{accessor:"ACCITY",title:"City"},{accessor:"ACSTATE",title:"State"},{accessor:"ACCOUNTRY",title:"Country"},{accessor:"ACDISTRICT",title:"District"},{accessor:"ACPINCODE",title:"Pincode"},{accessor:"REMARK",title:"Remark"},{accessor:"GSTNO",title:"GST No"}];c.useEffect(()=>{p(1)},[T]),c.useEffect(()=>{const t=(h-1)*T,s=t+T;O([...i.slice(t,s)])},[h,T,i]),c.useEffect(()=>{P(()=>_.filter(t=>t.TRANSPORTID.toString().includes(N.toLowerCase())||t.AFIRMNAME.toLowerCase().includes(N.toLowerCase())||t.APCITY.toLowerCase().includes(N.toLowerCase())||t.APSTATE.toLowerCase().includes(N.toLowerCase())||t.STATUS.toLowerCase().includes(N.toLowerCase())||t.AGENTNAME.toLowerCase().includes(N.toLowerCase())))},[N]),c.useEffect(()=>{const t=De(i,R.columnAccessor);P(R.direction==="desc"?t.reverse():t),p(1)},[R]);const ee=["Id","COMPANYID","TRANSPORTID","AFIRMNAME","ACTELEPHONENO","ACMOBILENO","ACADDRESSLINE1","ACADDRESSLINE2","ACADDRESSLINE3","STATUS","AGENTNAME","ADOB","APERSONALIDTYPE","APERSONALID","APMOBILENO","APEMAILID","APADDRESSLINE1","APADDRESSLINE2","APADDRESSLINE3","APCITY","APSTATE","APCOUNTRY","APDISTRICT","APPINCODE","ABANKNAME","AACCOUNTTYPE","AACCOUNTNO","AACCOUNTHOLDERNAME","ABRANCHNAME","AIFSCCODE","ACHEQUENO","ACHEQUEREMARK","AMICRCODE","ATPNOBANK","CREATEDBY","CREATEDON","UPDATEDBY","UPDATEDON","ACCITY","ACSTATE","ACCOUNTRY","ACDISTRICT","ACPINCODE","REMARK","GSTNO"];c.useEffect(()=>{fetch(`${ne}/getTransport`).then(t=>t.json()).then(t=>{let s=t;W(s),P(s),O(s),X(s),console.log(s,"dataaaaaa")}).catch(t=>{console.error("Error fetching data:",t)})},[]);function te(){const t=["id","COMPANYID","TRANSPORTID","AFIRMNAME","ACTELEPHONENO","ACMOBILENO","ACADDRESSLINE1","ACADDRESSLINE2","ACADDRESSLINE3","STATUS","AGENTNAME","ADOB","APERSONALIDTYPE","APERSONALID","APMOBILENO","APEMAILID","APADDRESSLINE1","APADDRESSLINE2","APADDRESSLINE3","APCITY","APSTATE","APCOUNTRY","APDISTRICT","APPINCODE","ABANKNAME","AACCOUNTTYPE","AACCOUNTNO","AACCOUNTHOLDERNAME","ABRANCHNAME","AIFSCCODE","ACHEQUENO","ACHEQUEREMARK","AMICRCODE","ATPNOBANK","CREATEDBY","CREATEDON","UPDATEDBY","UPDATEDON","ACCITY","ACSTATE","ACCOUNTRY","ACDISTRICT","ACPINCODE","REMARK","GSTNO"];ue.downloadExcel({fileName:"table",sheet:"react-export-table-to-excel",tablePayload:{header:ee,body:v.map(s=>t.map(r=>s[r]))}})}const M=t=>{let s=Se,r=i,D="table",u;if(u=window.navigator,t==="csv"){let d=";",C=`
`,A=s.map(E=>f(E)).join(d);if(A+=C,r.map(E=>{s.map((I,B)=>{B>0&&(A+=d);let g=E[I]?E[I]:"";A+=g}),A+=C}),A==null)return;if(!A.match(/^data:text\/csv/i)&&!u.msSaveOrOpenBlob){var ae="data:application/csv;charset=utf-8,"+encodeURIComponent(A),x=document.createElement("a");x.setAttribute("href",ae),x.setAttribute("download",D+".csv"),x.click()}else{var re=new Blob([A]);u.msSaveOrOpenBlob&&u.msSaveBlob(re,D+".csv")}}else if(t==="print"){var n="<p>"+D+"</p>";n+='<table style="width: 100%; " cellpadding="0" cellcpacing="0"><thead><tr style="color: #515365; background: #eff5ff; -webkit-print-color-adjust: exact; print-color-adjust: exact; "> ',s.map(d=>{n+="<th>"+f(d)+"</th>"}),n+="</tr></thead>",n+="<tbody>",r.map(d=>{n+="<tr>",s.map(C=>{let A=d[C]?d[C]:"";n+="<td>"+A+"</td>"}),n+="</tr>"}),n+="<style>body {font-family:Arial; color:#495057;}p{text-align:center;font-size:18px;font-weight:bold;margin:15px;}table{ border-collapse: collapse; border-spacing: 0; }th,td{font-size:12px;text-align:left;padding: 4px;}th{padding:8px 4px;}tr:nth-child(2n-1){background:#f7f7f7; }</style>",n+="</tbody></table>";var m=window.open("","","left=0,top=0,width=1000,height=600,toolbar=0,scrollbars=0,status=0");m.document.write("<title>Print</title>"+n),m.document.close(),m.focus(),m.print()}else if(t==="txt"){let d=",",C=`
`,A=s.map(E=>f(E)).join(d);if(A+=C,r.map(E=>{s.map((I,B)=>{B>0&&(A+=d);let g=E[I]?E[I]:"";A+=g}),A+=C}),A==null)return;if(!A.match(/^data:text\/txt/i)&&!u.msSaveOrOpenBlob){var le="data:application/txt;charset=utf-8,"+encodeURIComponent(A),U=document.createElement("a");U.setAttribute("href",le),U.setAttribute("download",D+".txt"),U.click()}else{var ce=new Blob([A]);u.msSaveOrOpenBlob&&u.msSaveBlob(ce,D+".txt")}}},f=t=>t.replace("_"," ").replace("-"," ").toLowerCase().split(" ").map(s=>s.charAt(0).toUpperCase()+s.substring(1)).join(" "),se=t=>{const{name:s,value:r}=t.target;s==="Transport Name"?w(r):s==="Transport Firm Name"?k(r):s==="City"?K(r):s==="State"?Q(r):s==="Status"&&z(r)};return a("div",{children:l("div",{className:"panel mt-6",children:[l("div",{className:"mb-4.5 flex md:items-center md:flex-row flex-col gap-5",children:[l("div",{className:"flex items-center gap-5",children:[l("div",{className:"flex items-center flex-wrap",children:[l("button",{type:"button",onClick:()=>M("csv"),className:"btn btn-primary btn-sm m-1 ",children:[a(Y,{className:"w-5 h-5 ltr:mr-2 rtl:ml-2"}),"CSV"]}),l("button",{type:"button",onClick:()=>M("txt"),className:"btn btn-primary btn-sm m-1",children:[a(Y,{className:"w-5 h-5 ltr:mr-2 rtl:ml-2"}),"TXT"]}),l("button",{type:"button",className:"btn btn-primary btn-sm m-1",onClick:te,children:[a(Y,{className:"w-5 h-5 ltr:mr-2 rtl:ml-2"}),"EXCEL"]}),l("button",{type:"button",onClick:()=>M("print"),className:"btn btn-primary btn-sm m-1",children:[a(Te,{className:"ltr:mr-2 rtl:ml-2"}),"PRINT"]}),a("button",{type:"button",className:"btn btn-primary btn-sm m-1 w-50 h-5 ltr:mr-2 rtl:ml-2",style:{width:"10%",height:"33px"},onClick:()=>{w(""),k(""),K(""),Q(""),z(""),O(i.slice(0,10))},children:"RESET"}),a("button",{type:"button",className:"btn btn-primary btn-sm m-1",style:{padding:"8px 28px"},onClick:()=>{const t=i.filter(s=>(b===""||s.AGENTNAME===b)&&(H===""||s.AFIRMNAME===H)&&(F===""||s.ACCITY===F)&&(G===""||s.ACSTATE===G)&&(j===""||s.STATUS===j));O(t)},children:"SEARCH"})]}),a("div",{className:"dropdown",children:a(de,{placement:`${$?"bottom-end":"bottom-start"}`,btnClassName:"!flex items-center border font-semibold border-white-light dark:border-[#253b5c] rounded-md px-4 py-2 text-sm dark:bg-[#1b2e4b] dark:text-white-dark",button:l(Ee,{children:[a("span",{className:"ltr:mr-1 rtl:ml-1",children:"Columns"}),a(Ne,{className:"w-5 h-5"})]}),children:a("div",{className:"overflow-auto max-h-[300px]",children:a("ul",{className:"!min-w-[140px]",children:o.map((t,s)=>s%3===0?l("li",{className:"flex md:flex-row flex-col ",onClick:r=>{r.stopPropagation()},children:[a("div",{className:"flex items-center px-4 py-1 md:w-1/3",children:l("label",{className:"cursor-pointer mb-0 flex items-center",children:[a("input",{type:"checkbox",checked:!e.includes(t.accessor),className:"form-checkbox mr-2",defaultValue:t.accessor,onChange:r=>{S(r.target.value),L(t.accessor,r.target.checked)}}),a("span",{children:t.title})]})}),o[s+1]&&a("div",{className:"flex items-center px-4 py-1 md:w-1/3",children:l("label",{className:"cursor-pointer mb-0 flex items-center",children:[a("input",{type:"checkbox",checked:!e.includes(o[s+1].accessor),className:"form-checkbox mr-2",defaultValue:o[s+1].accessor,onChange:r=>{S(r.target.value),L(o[s+1].accessor,r.target.checked)}}),a("span",{children:o[s+1].title})]})}),o[s+2]&&a("div",{className:"flex items-center px-4 py-1 md:w-1/3",children:l("label",{className:"cursor-pointer mb-0 flex items-center",children:[a("input",{type:"checkbox",checked:!e.includes(o[s+2].accessor),className:"form-checkbox mr-2",defaultValue:o[s+2].accessor,onChange:r=>{S(r.target.value),L(o[s+2].accessor,r.target.checked)}}),a("span",{children:o[s+2].title})]})})]},s):null)})})})})]}),a("div",{className:"ltr:ml-auto rtl:mr-auto",children:a("input",{type:"text",className:"form-input w-auto",placeholder:"Search...",value:N,onChange:t=>Z(t.target.value)})})]}),a("div",{children:l("table",{children:[l("tr",{children:[a("td",{children:l("label",{htmlFor:"",children:["Customer Name",l("select",{name:"Customer Name",style:{border:"1px solid #e5e7eb",borderRadius:"5px",margin:"0px 6px",width:"144px"},value:b,onChange:se,children:[a("option",{value:"",children:"--ALL--"}),i.map((t,s)=>a("option",{value:t.AGENTNAME,children:t.AGENTNAME},s))]})]})}),a("td",{children:l("label",{htmlFor:"",children:["From Date",a("input",{type:"date",style:{border:"1px solid #e5e7eb",borderRadius:"5px",margin:"0px 6px",width:"144px"}})]})}),a("td",{children:l("label",{htmlFor:"",children:["To Date",a("input",{type:"date",style:{border:"1px solid #e5e7eb",borderRadius:"5px",margin:"0px 6px",width:"144px"}})]})})]}),l("tr",{children:[a("td",{children:l("label",{htmlFor:"",children:["No. From",a("input",{type:"text",style:{border:"1px solid #e5e7eb",borderRadius:"5px",margin:"0px 6px",width:"144px"}})]})}),a("td",{children:l("label",{htmlFor:"",children:["To",a("input",{type:"text",style:{border:"1px solid #e5e7eb",borderRadius:"5px",margin:"0px 6px",width:"144px"}})]})})]})]})}),a("div",{className:"datatables",children:a(Ce,{highlightOnHover:!0,className:"whitespace-nowrap table-hover",records:v,columns:[{accessor:"id",title:"Id",sortable:!0,hidden:e.includes("id")},{accessor:"COMPANYID",title:"Company ID",sortable:!0,hidden:e.includes("COMPANYID")},{accessor:"TRANSPORTID",title:"Transport ID",sortable:!0,hidden:e.includes("TRANSPORTID")},{accessor:"AFIRMNAME",title:"Firm Name",sortable:!0,hidden:e.includes("AFIRMNAME")},{accessor:"ACTELEPHONENO",title:"Telephone No",sortable:!0,hidden:e.includes("ACTELEPHONENO")},{accessor:"ACMOBILENO",title:"Mobile No",sortable:!0,hidden:e.includes("ACMOBILENO")},{accessor:"ACADDRESSLINE1",title:"Address Line 1",sortable:!0,hidden:e.includes("ACADDRESSLINE1")},{accessor:"ACADDRESSLINE2",title:"Address Line 2",sortable:!0,hidden:e.includes("ACADDRESSLINE2")},{accessor:"ACADDRESSLINE3",title:"Address Line 3",sortable:!0,hidden:e.includes("ACADDRESSLINE3")},{accessor:"AGENTNAME",title:"Agent Name",sortable:!0,hidden:e.includes("AGENTNAME")},{accessor:"ADOB",title:"Date of Birth",sortable:!0,hidden:e.includes("ADOB")},{accessor:"APERSONALIDTYPE",title:"Personal ID Type",sortable:!0,hidden:e.includes("APERSONALIDTYPE")},{accessor:"APERSONALID",title:"Personal ID",sortable:!0,hidden:e.includes("APERSONALID")},{accessor:"APMOBILENO",title:"Mobile No",sortable:!0,hidden:e.includes("APMOBILENO")},{accessor:"APEMAILID",title:"Email ID",sortable:!0,hidden:e.includes("APEMAILID")},{accessor:"APADDRESSLINE1",title:"Address Line 1",sortable:!0,hidden:e.includes("APADDRESSLINE1")},{accessor:"APADDRESSLINE2",title:"Address Line 2",sortable:!0,hidden:e.includes("APADDRESSLINE2")},{accessor:"APADDRESSLINE3",title:"Address Line 3",sortable:!0,hidden:e.includes("APADDRESSLINE3")},{accessor:"APCITY",title:"City",sortable:!0,hidden:e.includes("APCITY")},{accessor:"APSTATE",title:"State",sortable:!0,hidden:e.includes("APSTATE")},{accessor:"APCOUNTRY",title:"Country",sortable:!0,hidden:e.includes("APCOUNTRY")},{accessor:"APDISTRICT",title:"District",sortable:!0,hidden:e.includes("APDISTRICT")},{accessor:"APPINCODE",title:"Pincode",sortable:!0,hidden:e.includes("APPINCODE")},{accessor:"ABANKNAME",title:"Bank Name",sortable:!0,hidden:e.includes("ABANKNAME")},{accessor:"AACCOUNTTYPE",title:"Account Type",sortable:!0,hidden:e.includes("AACCOUNTTYPE")},{accessor:"AACCOUNTNO",title:"Account No",sortable:!0,hidden:e.includes("AACCOUNTNO")},{accessor:"AACCOUNTHOLDERNAME",title:"Account Holder Name",sortable:!0,hidden:e.includes("AACCOUNTHOLDERNAME")},{accessor:"ABRANCHNAME",title:"Branch Name",sortable:!0,hidden:e.includes("ABRANCHNAME")},{accessor:"AIFSCCODE",title:"IFSC Code",sortable:!0,hidden:e.includes("AIFSCCODE")},{accessor:"ACHEQUENO",title:"Cheque No",sortable:!0,hidden:e.includes("ACHEQUENO")},{accessor:"ACHEQUEREMARK",title:"Cheque Remark",sortable:!0,hidden:e.includes("ACHEQUEREMARK")},{accessor:"AMICRCODE",title:"MICR Code",sortable:!0,hidden:e.includes("AMICRCODE")},{accessor:"ATPNOBANK",title:"TP No Bank",sortable:!0,hidden:e.includes("ATPNOBANK")},{accessor:"CREATEDBY",title:"Created By",sortable:!0,hidden:e.includes("CREATEDBY")},{accessor:"CREATEDON",title:"Created On",sortable:!0,hidden:e.includes("CREATEDON")},{accessor:"UPDATEDBY",title:"Updated By",sortable:!0,hidden:e.includes("UPDATEDBY")},{accessor:"UPDATEDON",title:"Updated On",sortable:!0,hidden:e.includes("UPDATEDON")},{accessor:"ACCITY",title:"City",sortable:!0,hidden:e.includes("ACCITY")},{accessor:"ACSTATE",title:"State",sortable:!0,hidden:e.includes("ACSTATE")},{accessor:"ACCOUNTRY",title:"Country",sortable:!0,hidden:e.includes("ACCOUNTRY")},{accessor:"ACDISTRICT",title:"District",sortable:!0,hidden:e.includes("ACDISTRICT")},{accessor:"ACPINCODE",title:"Pincode",sortable:!0,hidden:e.includes("ACPINCODE")},{accessor:"REMARK",title:"Remark",sortable:!0,hidden:e.includes("REMARK")},{accessor:"GSTNO",title:"GST No",sortable:!0,hidden:e.includes("GSTNO")},{accessor:"STATUS",title:"Status",sortable:!0,hidden:e.includes("STATUS")}],totalRecords:i.length,recordsPerPage:T,page:h,onPageChange:t=>p(t),recordsPerPageOptions:y,onRecordsPerPageChange:q,sortStatus:R,onSortStatusChange:J,minHeight:200,paginationText:({from:t,to:s,totalRecords:r})=>`Showing  ${t} to ${s} of ${r} entries`})})]})})};export{Ue as default};