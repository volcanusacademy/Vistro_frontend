import{u as Ae,r as c,s as ie,a as oe,a0 as ne,b as r,j as a,D as de,F as Ee,d as Ne}from"./index-54e701e9.js";import{N as Ce}from"./index-5b6ba9ac.js";import{s as ue}from"./sortBy-f825cfee.js";import{l as De}from"./index-7b7ee0ed.js";import{I as v}from"./IconFile-78f45a77.js";import{I as Te}from"./IconPrinter-091d55dc.js";import"./floating-ui.dom-aa888fdc.js";import"./_baseIsEqual-e39dab2a.js";import"./_defineProperty-ce436608.js";const Se=["id","COMPANYID","TRANSPORTID","AFIRMNAME","ACTELEPHONENO","ACMOBILENO","ACADDRESSLINE1","ACADDRESSLINE2","ACADDRESSLINE3","STATUS","AGENTNAME","ADOB","APERSONALIDTYPE","APERSONALID","APMOBILENO","APEMAILID","APADDRESSLINE1","APADDRESSLINE2","APADDRESSLINE3","APCITY","APSTATE","APCOUNTRY","APDISTRICT","APPINCODE","ABANKNAME","AACCOUNTTYPE","AACCOUNTNO","AACCOUNTHOLDERNAME","ABRANCHNAME","AIFSCCODE","ACHEQUENO","ACHEQUEREMARK","AMICRCODE","ATPNOBANK","CREATEDBY","CREATEDON","UPDATEDBY","UPDATEDON","ACCITY","ACSTATE","ACCOUNTRY","ACDISTRICT","ACPINCODE","REMARK","GSTNO"],Ue=()=>{const $=Ae();c.useEffect(()=>{$(ie("Multiple Tables"))});const q=oe(e=>e.themeConfig.rtlClass)==="rtl",[R,P]=c.useState(1),w=[10,20,30,50,100],[T,_]=c.useState(w[0]),[i,b]=c.useState([]),[H,h]=c.useState(i),[X,Z]=c.useState(i),[me,J]=c.useState(""),[N,W]=c.useState(""),[I,ee]=c.useState({columnAccessor:"id",direction:"asc"}),[p,F]=c.useState(""),[k,K]=c.useState(""),[G,Q]=c.useState(""),[L,j]=c.useState(""),[z,V]=c.useState(""),[s,S]=c.useState(["id","COMPANYID","TRANSPORTID","ACADDRESSLINE1","ACTELEPHONENO","ACADDRESSLINE2","ACADDRESSLINE3","ADOB","APERSONALIDTYPE","APERSONALID","APMOBILENO","APEMAILID","APADDRESSLINE1","APADDRESSLINE2","APADDRESSLINE3","APCOUNTRY","APDISTRICT","APPINCODE","ABANKNAME","AACCOUNTTYPE","AACCOUNTNO","AACCOUNTHOLDERNAME","ABRANCHNAME","AIFSCCODE","ACHEQUENO","ACMOBILENO","ACHEQUEREMARK","AMICRCODE","ATPNOBANK","CREATEDBY","CREATEDON","UPDATEDBY","UPDATEDON","ACCITY","ACSTATE","ACCOUNTRY","ACDISTRICT","ACPINCODE","REMARK","GSTNO"]),x=(e,t)=>{s.includes(e)?S(l=>s.filter(u=>u!==l)):S([...s,e])},o=[{accessor:"id",title:"ID"},{accessor:"COMPANYID",title:"Company ID"},{accessor:"TRANSPORTID",title:"Transport ID"},{accessor:"AFIRMNAME",title:"Firm Name"},{accessor:"ACADDRESSLINE1",title:"Address Line 1"},{accessor:"ACADDRESSLINE2",title:"Address Line 2"},{accessor:"ACADDRESSLINE3",title:"Address Line 3"},{accessor:"STATUS",title:"Status"},{accessor:"AGENTNAME",title:"Agent Name"},{accessor:"ADOB",title:"Date of Birth"},{accessor:"APERSONALIDTYPE",title:"Personal ID Type"},{accessor:"APERSONALID",title:"Personal ID"},{accessor:"APMOBILENO",title:"Mobile No"},{accessor:"APEMAILID",title:"Email ID"},{accessor:"APADDRESSLINE1",title:"Address Line 1"},{accessor:"APADDRESSLINE2",title:"Address Line 2"},{accessor:"APADDRESSLINE3",title:"Address Line 3"},{accessor:"APCITY",title:"City"},{accessor:"APSTATE",title:"State"},{accessor:"APCOUNTRY",title:"Country"},{accessor:"APDISTRICT",title:"District"},{accessor:"APPINCODE",title:"Pincode"},{accessor:"ABANKNAME",title:"Bank Name"},{accessor:"AACCOUNTTYPE",title:"Account Type"},{accessor:"AACCOUNTNO",title:"Account No"},{accessor:"AACCOUNTHOLDERNAME",title:"Account Holder Name"},{accessor:"ABRANCHNAME",title:"Branch Name"},{accessor:"AIFSCCODE",title:"IFSC Code"},{accessor:"ACHEQUENO",title:"Cheque No"},{accessor:"ACHEQUEREMARK",title:"Cheque Remark"},{accessor:"AMICRCODE",title:"MICR Code"},{accessor:"ATPNOBANK",title:"TP No Bank"},{accessor:"CREATEDBY",title:"Created By"},{accessor:"CREATEDON",title:"Created On"},{accessor:"UPDATEDBY",title:"Updated By"},{accessor:"UPDATEDON",title:"Updated On"},{accessor:"ACCITY",title:"City"},{accessor:"ACSTATE",title:"State"},{accessor:"ACCOUNTRY",title:"Country"},{accessor:"ACDISTRICT",title:"District"},{accessor:"ACPINCODE",title:"Pincode"},{accessor:"REMARK",title:"Remark"},{accessor:"GSTNO",title:"GST No"}];c.useEffect(()=>{P(1)},[T]),c.useEffect(()=>{const e=(R-1)*T,t=e+T;h([...i.slice(e,t)])},[R,T,i]),c.useEffect(()=>{b(()=>X.filter(e=>e.TRANSPORTID.toString().includes(N.toLowerCase())||e.AFIRMNAME.toLowerCase().includes(N.toLowerCase())||e.APCITY.toLowerCase().includes(N.toLowerCase())||e.APSTATE.toLowerCase().includes(N.toLowerCase())||e.STATUS.toLowerCase().includes(N.toLowerCase())||e.AGENTNAME.toLowerCase().includes(N.toLowerCase())))},[N]),c.useEffect(()=>{const e=ue(i,I.columnAccessor);b(I.direction==="desc"?e.reverse():e),P(1)},[I]);const te=["Id","COMPANYID","TRANSPORTID","AFIRMNAME","ACTELEPHONENO","ACMOBILENO","ACADDRESSLINE1","ACADDRESSLINE2","ACADDRESSLINE3","STATUS","AGENTNAME","ADOB","APERSONALIDTYPE","APERSONALID","APMOBILENO","APEMAILID","APADDRESSLINE1","APADDRESSLINE2","APADDRESSLINE3","APCITY","APSTATE","APCOUNTRY","APDISTRICT","APPINCODE","ABANKNAME","AACCOUNTTYPE","AACCOUNTNO","AACCOUNTHOLDERNAME","ABRANCHNAME","AIFSCCODE","ACHEQUENO","ACHEQUEREMARK","AMICRCODE","ATPNOBANK","CREATEDBY","CREATEDON","UPDATEDBY","UPDATEDON","ACCITY","ACSTATE","ACCOUNTRY","ACDISTRICT","ACPINCODE","REMARK","GSTNO"];c.useEffect(()=>{fetch(`${ne}/getTransport`).then(e=>e.json()).then(e=>{let t=e;J(t),b(t),h(t),Z(t)}).catch(e=>{console.error("Error fetching data:",e)})},[]);function se(){const e=["id","COMPANYID","TRANSPORTID","AFIRMNAME","ACTELEPHONENO","ACMOBILENO","ACADDRESSLINE1","ACADDRESSLINE2","ACADDRESSLINE3","STATUS","AGENTNAME","ADOB","APERSONALIDTYPE","APERSONALID","APMOBILENO","APEMAILID","APADDRESSLINE1","APADDRESSLINE2","APADDRESSLINE3","APCITY","APSTATE","APCOUNTRY","APDISTRICT","APPINCODE","ABANKNAME","AACCOUNTTYPE","AACCOUNTNO","AACCOUNTHOLDERNAME","ABRANCHNAME","AIFSCCODE","ACHEQUENO","ACHEQUEREMARK","AMICRCODE","ATPNOBANK","CREATEDBY","CREATEDON","UPDATEDBY","UPDATEDON","ACCITY","ACSTATE","ACCOUNTRY","ACDISTRICT","ACPINCODE","REMARK","GSTNO"];De.downloadExcel({fileName:"table",sheet:"react-export-table-to-excel",tablePayload:{header:te,body:H.map(t=>e.map(l=>t[l]))}})}const M=e=>{let t=Se,l=i,u="table",D;if(D=window.navigator,e==="csv"){let d=";",C=`
`,A=t.map(E=>f(E)).join(d);if(A+=C,l.map(E=>{t.map((m,y)=>{y>0&&(A+=d);let Y=E[m]?E[m]:"";A+=Y}),A+=C}),A==null)return;if(!A.match(/^data:text\/csv/i)&&!D.msSaveOrOpenBlob){var re="data:application/csv;charset=utf-8,"+encodeURIComponent(A),B=document.createElement("a");B.setAttribute("href",re),B.setAttribute("download",u+".csv"),B.click()}else{var ae=new Blob([A]);D.msSaveOrOpenBlob&&D.msSaveBlob(ae,u+".csv")}}else if(e==="print"){var n="<p>"+u+"</p>";n+='<table style="width: 100%; " cellpadding="0" cellcpacing="0"><thead><tr style="color: #515365; background: #eff5ff; -webkit-print-color-adjust: exact; print-color-adjust: exact; "> ',t.map(d=>{n+="<th>"+f(d)+"</th>"}),n+="</tr></thead>",n+="<tbody>",l.map(d=>{n+="<tr>",t.map(C=>{let A=d[C]?d[C]:"";n+="<td>"+A+"</td>"}),n+="</tr>"}),n+="<style>body {font-family:Arial; color:#495057;}p{text-align:center;font-size:18px;font-weight:bold;margin:15px;}table{ border-collapse: collapse; border-spacing: 0; }th,td{font-size:12px;text-align:left;padding: 4px;}th{padding:8px 4px;}tr:nth-child(2n-1){background:#f7f7f7; }</style>",n+="</tbody></table>";var O=window.open("","","left=0,top=0,width=1000,height=600,toolbar=0,scrollbars=0,status=0");O.document.write("<title>Print</title>"+n),O.document.close(),O.focus(),O.print()}else if(e==="txt"){let d=",",C=`
`,A=t.map(E=>f(E)).join(d);if(A+=C,l.map(E=>{t.map((m,y)=>{y>0&&(A+=d);let Y=E[m]?E[m]:"";A+=Y}),A+=C}),A==null)return;if(!A.match(/^data:text\/txt/i)&&!D.msSaveOrOpenBlob){var le="data:application/txt;charset=utf-8,"+encodeURIComponent(A),g=document.createElement("a");g.setAttribute("href",le),g.setAttribute("download",u+".txt"),g.click()}else{var ce=new Blob([A]);D.msSaveOrOpenBlob&&D.msSaveBlob(ce,u+".txt")}}},f=e=>e.replace("_"," ").replace("-"," ").toLowerCase().split(" ").map(t=>t.charAt(0).toUpperCase()+t.substring(1)).join(" "),U=e=>{const{name:t,value:l}=e.target;t==="Transport Name"?F(l):t==="Transport Firm Name"?K(l):t==="City"?Q(l):t==="State"?j(l):t==="Status"&&V(l)};return r("div",{children:a("div",{className:"panel mt-6",children:[a("div",{className:"mb-4.5 flex md:items-center md:flex-row flex-col gap-5",children:[a("div",{className:"flex items-center gap-5",children:[a("div",{className:"flex items-center flex-wrap",children:[a("button",{type:"button",onClick:()=>M("csv"),className:"btn btn-primary btn-sm m-1 ",children:[r(v,{className:"w-5 h-5 ltr:mr-2 rtl:ml-2"}),"CSV"]}),a("button",{type:"button",onClick:()=>M("txt"),className:"btn btn-primary btn-sm m-1",children:[r(v,{className:"w-5 h-5 ltr:mr-2 rtl:ml-2"}),"TXT"]}),a("button",{type:"button",className:"btn btn-primary btn-sm m-1",onClick:se,children:[r(v,{className:"w-5 h-5 ltr:mr-2 rtl:ml-2"}),"EXCEL"]}),a("button",{type:"button",onClick:()=>M("print"),className:"btn btn-primary btn-sm m-1",children:[r(Te,{className:"ltr:mr-2 rtl:ml-2"}),"PRINT"]}),r("button",{type:"button",className:"btn btn-primary btn-sm m-1 w-50 h-5 ltr:mr-2 rtl:ml-2",style:{width:"10%",height:"33px"},onClick:()=>{F(""),K(""),Q(""),j(""),V(""),h(i.slice(0,10))},children:"RESET"}),r("button",{type:"button",className:"btn btn-primary btn-sm m-1",style:{padding:"8px 28px"},onClick:()=>{const e=i.filter(t=>(p===""||t.AGENTNAME===p)&&(k===""||t.AFIRMNAME===k)&&(G===""||t.ACCITY===G)&&(L===""||t.ACSTATE===L)&&(z===""||t.STATUS===z));h(e)},children:"SEARCH"})]}),r("div",{className:"dropdown",children:r(de,{placement:`${q?"bottom-end":"bottom-start"}`,btnClassName:"!flex items-center border font-semibold border-white-light dark:border-[#253b5c] rounded-md px-4 py-2 text-sm dark:bg-[#1b2e4b] dark:text-white-dark",button:a(Ee,{children:[r("span",{className:"ltr:mr-1 rtl:ml-1",children:"Columns"}),r(Ne,{className:"w-5 h-5"})]}),children:r("div",{className:"overflow-auto max-h-[300px]",children:r("ul",{className:"!min-w-[140px]",children:o.map((e,t)=>t%3===0?a("li",{className:"flex md:flex-row flex-col ",onClick:l=>{l.stopPropagation()},children:[r("div",{className:"flex items-center px-4 py-1 md:w-1/3",children:a("label",{className:"cursor-pointer mb-0 flex items-center",children:[r("input",{type:"checkbox",checked:!s.includes(e.accessor),className:"form-checkbox mr-2",defaultValue:e.accessor,onChange:l=>{S(l.target.value),x(e.accessor,l.target.checked)}}),r("span",{children:e.title})]})}),o[t+1]&&r("div",{className:"flex items-center px-4 py-1 md:w-1/3",children:a("label",{className:"cursor-pointer mb-0 flex items-center",children:[r("input",{type:"checkbox",checked:!s.includes(o[t+1].accessor),className:"form-checkbox mr-2",defaultValue:o[t+1].accessor,onChange:l=>{S(l.target.value),x(o[t+1].accessor,l.target.checked)}}),r("span",{children:o[t+1].title})]})}),o[t+2]&&r("div",{className:"flex items-center px-4 py-1 md:w-1/3",children:a("label",{className:"cursor-pointer mb-0 flex items-center",children:[r("input",{type:"checkbox",checked:!s.includes(o[t+2].accessor),className:"form-checkbox mr-2",defaultValue:o[t+2].accessor,onChange:l=>{S(l.target.value),x(o[t+2].accessor,l.target.checked)}}),r("span",{children:o[t+2].title})]})})]},t):null)})})})})]}),r("div",{className:"ltr:ml-auto rtl:mr-auto",children:r("input",{type:"text",className:"form-input w-auto",placeholder:"Search...",value:N,onChange:e=>W(e.target.value)})})]}),r("div",{children:a("table",{children:[a("tr",{children:[r("td",{children:a("label",{htmlFor:"",children:["Customer Name",a("select",{name:"Customer Name",style:{border:"1px solid #e5e7eb",borderRadius:"5px",margin:"0px 6px",width:"100px"},value:p,onChange:U,children:[r("option",{value:"",children:"--ALL--"}),i.map((e,t)=>r("option",{value:e.AGENTNAME,children:e.AGENTNAME},t))]})]})}),r("td",{children:a("label",{htmlFor:"",children:["Consignee Name",a("select",{name:"Consignee Name",style:{border:"1px solid #e5e7eb",borderRadius:"5px",margin:"0px 6px",width:"100px"},value:p,onChange:U,children:[r("option",{value:"",children:"--ALL--"}),i.map((e,t)=>r("option",{value:e.AGENTNAME,children:e.AGENTNAME},t))]})]})})]}),a("tr",{children:[r("td",{children:a("label",{htmlFor:"",children:["No. From",r("input",{type:"text",style:{border:"1px solid #e5e7eb",borderRadius:"5px",margin:"0px 6px",width:"100px"}})]})}),r("td",{children:a("label",{htmlFor:"",children:["To",r("input",{type:"text",style:{border:"1px solid #e5e7eb",borderRadius:"5px",margin:"0px 6px",width:"100px"}})]})}),r("td",{children:a("label",{htmlFor:"",children:["From Date",r("input",{type:"date",style:{border:"1px solid #e5e7eb",borderRadius:"5px",margin:"0px 6px",width:"100px"}})]})}),r("td",{children:a("label",{htmlFor:"",children:["To Date",r("input",{type:"date",style:{border:"1px solid #e5e7eb",borderRadius:"5px",margin:"0px 6px",width:"100px"}})]})}),r("td",{children:a("label",{htmlFor:"",children:["City",a("select",{name:"City",style:{border:"1px solid #e5e7eb",borderRadius:"5px",marginLeft:"108px",width:"100px"},value:L,onChange:U,children:[r("option",{value:"",children:"--ALL--"}),i.map((e,t)=>r("option",{value:e.ACSTATE,children:e.ACSTATE},t))]})]})}),r("td",{children:a("label",{htmlFor:"",children:["Series",r("input",{type:"text",style:{border:"1px solid #e5e7eb",borderRadius:"5px",margin:"0px 6px",width:"100px"}})]})})]})]})}),r("div",{className:"datatables",children:r(Ce,{highlightOnHover:!0,className:"whitespace-nowrap table-hover",records:H,columns:[{accessor:"id",title:"Id",sortable:!0,hidden:s.includes("id")},{accessor:"COMPANYID",title:"Company ID",sortable:!0,hidden:s.includes("COMPANYID")},{accessor:"TRANSPORTID",title:"Transport ID",sortable:!0,hidden:s.includes("TRANSPORTID")},{accessor:"AFIRMNAME",title:"Firm Name",sortable:!0,hidden:s.includes("AFIRMNAME")},{accessor:"ACTELEPHONENO",title:"Telephone No",sortable:!0,hidden:s.includes("ACTELEPHONENO")},{accessor:"ACMOBILENO",title:"Mobile No",sortable:!0,hidden:s.includes("ACMOBILENO")},{accessor:"ACADDRESSLINE1",title:"Address Line 1",sortable:!0,hidden:s.includes("ACADDRESSLINE1")},{accessor:"ACADDRESSLINE2",title:"Address Line 2",sortable:!0,hidden:s.includes("ACADDRESSLINE2")},{accessor:"ACADDRESSLINE3",title:"Address Line 3",sortable:!0,hidden:s.includes("ACADDRESSLINE3")},{accessor:"AGENTNAME",title:"Agent Name",sortable:!0,hidden:s.includes("AGENTNAME")},{accessor:"ADOB",title:"Date of Birth",sortable:!0,hidden:s.includes("ADOB")},{accessor:"APERSONALIDTYPE",title:"Personal ID Type",sortable:!0,hidden:s.includes("APERSONALIDTYPE")},{accessor:"APERSONALID",title:"Personal ID",sortable:!0,hidden:s.includes("APERSONALID")},{accessor:"APMOBILENO",title:"Mobile No",sortable:!0,hidden:s.includes("APMOBILENO")},{accessor:"APEMAILID",title:"Email ID",sortable:!0,hidden:s.includes("APEMAILID")},{accessor:"APADDRESSLINE1",title:"Address Line 1",sortable:!0,hidden:s.includes("APADDRESSLINE1")},{accessor:"APADDRESSLINE2",title:"Address Line 2",sortable:!0,hidden:s.includes("APADDRESSLINE2")},{accessor:"APADDRESSLINE3",title:"Address Line 3",sortable:!0,hidden:s.includes("APADDRESSLINE3")},{accessor:"APCITY",title:"City",sortable:!0,hidden:s.includes("APCITY")},{accessor:"APSTATE",title:"State",sortable:!0,hidden:s.includes("APSTATE")},{accessor:"APCOUNTRY",title:"Country",sortable:!0,hidden:s.includes("APCOUNTRY")},{accessor:"APDISTRICT",title:"District",sortable:!0,hidden:s.includes("APDISTRICT")},{accessor:"APPINCODE",title:"Pincode",sortable:!0,hidden:s.includes("APPINCODE")},{accessor:"ABANKNAME",title:"Bank Name",sortable:!0,hidden:s.includes("ABANKNAME")},{accessor:"AACCOUNTTYPE",title:"Account Type",sortable:!0,hidden:s.includes("AACCOUNTTYPE")},{accessor:"AACCOUNTNO",title:"Account No",sortable:!0,hidden:s.includes("AACCOUNTNO")},{accessor:"AACCOUNTHOLDERNAME",title:"Account Holder Name",sortable:!0,hidden:s.includes("AACCOUNTHOLDERNAME")},{accessor:"ABRANCHNAME",title:"Branch Name",sortable:!0,hidden:s.includes("ABRANCHNAME")},{accessor:"AIFSCCODE",title:"IFSC Code",sortable:!0,hidden:s.includes("AIFSCCODE")},{accessor:"ACHEQUENO",title:"Cheque No",sortable:!0,hidden:s.includes("ACHEQUENO")},{accessor:"ACHEQUEREMARK",title:"Cheque Remark",sortable:!0,hidden:s.includes("ACHEQUEREMARK")},{accessor:"AMICRCODE",title:"MICR Code",sortable:!0,hidden:s.includes("AMICRCODE")},{accessor:"ATPNOBANK",title:"TP No Bank",sortable:!0,hidden:s.includes("ATPNOBANK")},{accessor:"CREATEDBY",title:"Created By",sortable:!0,hidden:s.includes("CREATEDBY")},{accessor:"CREATEDON",title:"Created On",sortable:!0,hidden:s.includes("CREATEDON")},{accessor:"UPDATEDBY",title:"Updated By",sortable:!0,hidden:s.includes("UPDATEDBY")},{accessor:"UPDATEDON",title:"Updated On",sortable:!0,hidden:s.includes("UPDATEDON")},{accessor:"ACCITY",title:"City",sortable:!0,hidden:s.includes("ACCITY")},{accessor:"ACSTATE",title:"State",sortable:!0,hidden:s.includes("ACSTATE")},{accessor:"ACCOUNTRY",title:"Country",sortable:!0,hidden:s.includes("ACCOUNTRY")},{accessor:"ACDISTRICT",title:"District",sortable:!0,hidden:s.includes("ACDISTRICT")},{accessor:"ACPINCODE",title:"Pincode",sortable:!0,hidden:s.includes("ACPINCODE")},{accessor:"REMARK",title:"Remark",sortable:!0,hidden:s.includes("REMARK")},{accessor:"GSTNO",title:"GST No",sortable:!0,hidden:s.includes("GSTNO")},{accessor:"STATUS",title:"Status",sortable:!0,hidden:s.includes("STATUS")}],totalRecords:i.length,recordsPerPage:T,page:R,onPageChange:e=>P(e),recordsPerPageOptions:w,onRecordsPerPageChange:_,sortStatus:I,onSortStatusChange:ee,minHeight:200,paginationText:({from:e,to:t,totalRecords:l})=>`Showing  ${e} to ${t} of ${l} entries`})})]})})};export{Ue as default};
