import{u as le,r as c,s as Ae,a as oe,a0 as ie,b as a,j as A,D as ne,F as de,d as Ee}from"./index-54e701e9.js";import{N as Ne}from"./index-5b6ba9ac.js";import{s as Ce}from"./sortBy-f825cfee.js";import{l as De}from"./index-7b7ee0ed.js";import{I as Y}from"./IconFile-78f45a77.js";import{I as Te}from"./IconPrinter-091d55dc.js";import"./floating-ui.dom-aa888fdc.js";import"./_baseIsEqual-e39dab2a.js";import"./_defineProperty-ce436608.js";const ue=["id","COMPANYID","TRANSPORTID","AFIRMNAME","ACTELEPHONENO","ACMOBILENO","ACADDRESSLINE1","ACADDRESSLINE2","ACADDRESSLINE3","STATUS","AGENTNAME","ADOB","APERSONALIDTYPE","APERSONALID","APMOBILENO","APEMAILID","APADDRESSLINE1","APADDRESSLINE2","APADDRESSLINE3","APCITY","APSTATE","APCOUNTRY","APDISTRICT","APPINCODE","ABANKNAME","AACCOUNTTYPE","AACCOUNTNO","AACCOUNTHOLDERNAME","ABRANCHNAME","AIFSCCODE","ACHEQUENO","ACHEQUEREMARK","AMICRCODE","ATPNOBANK","CREATEDBY","CREATEDON","UPDATEDBY","UPDATEDON","ACCITY","ACSTATE","ACCOUNTRY","ACDISTRICT","ACPINCODE","REMARK","GSTNO"],Ue=()=>{const F=le();c.useEffect(()=>{F(Ae("Multiple Tables"))});const G=oe(t=>t.themeConfig.rtlClass)==="rtl",[m,h]=c.useState(1),g=[10,20,30,50,100],[u,Q]=c.useState(g[0]),[d,p]=c.useState([]),[y,O]=c.useState(d),[j,z]=c.useState(d),[Se,V]=c.useState(""),[N,$]=c.useState(""),[R,q]=c.useState({columnAccessor:"id",direction:"asc"}),[v,_]=c.useState(""),[w,X]=c.useState(""),[H,Z]=c.useState(""),[k,J]=c.useState(""),[K,W]=c.useState(""),[e,S]=c.useState(["id","COMPANYID","TRANSPORTID","ACADDRESSLINE1","ACTELEPHONENO","ACADDRESSLINE2","ACADDRESSLINE3","ADOB","APERSONALIDTYPE","APERSONALID","APMOBILENO","APEMAILID","APADDRESSLINE1","APADDRESSLINE2","APADDRESSLINE3","APCOUNTRY","APDISTRICT","APPINCODE","ABANKNAME","AACCOUNTTYPE","AACCOUNTNO","AACCOUNTHOLDERNAME","ABRANCHNAME","AIFSCCODE","ACHEQUENO","ACMOBILENO","ACHEQUEREMARK","AMICRCODE","ATPNOBANK","CREATEDBY","CREATEDON","UPDATEDBY","UPDATEDON","ACCITY","ACSTATE","ACCOUNTRY","ACDISTRICT","ACPINCODE","REMARK","GSTNO"]),b=(t,s)=>{e.includes(t)?S(r=>e.filter(D=>D!==r)):S([...e,t])},o=[{accessor:"id",title:"ID"},{accessor:"COMPANYID",title:"Company ID"},{accessor:"TRANSPORTID",title:"Transport ID"},{accessor:"AFIRMNAME",title:"Firm Name"},{accessor:"ACADDRESSLINE1",title:"Address Line 1"},{accessor:"ACADDRESSLINE2",title:"Address Line 2"},{accessor:"ACADDRESSLINE3",title:"Address Line 3"},{accessor:"STATUS",title:"Status"},{accessor:"AGENTNAME",title:"Agent Name"},{accessor:"ADOB",title:"Date of Birth"},{accessor:"APERSONALIDTYPE",title:"Personal ID Type"},{accessor:"APERSONALID",title:"Personal ID"},{accessor:"APMOBILENO",title:"Mobile No"},{accessor:"APEMAILID",title:"Email ID"},{accessor:"APADDRESSLINE1",title:"Address Line 1"},{accessor:"APADDRESSLINE2",title:"Address Line 2"},{accessor:"APADDRESSLINE3",title:"Address Line 3"},{accessor:"APCITY",title:"City"},{accessor:"APSTATE",title:"State"},{accessor:"APCOUNTRY",title:"Country"},{accessor:"APDISTRICT",title:"District"},{accessor:"APPINCODE",title:"Pincode"},{accessor:"ABANKNAME",title:"Bank Name"},{accessor:"AACCOUNTTYPE",title:"Account Type"},{accessor:"AACCOUNTNO",title:"Account No"},{accessor:"AACCOUNTHOLDERNAME",title:"Account Holder Name"},{accessor:"ABRANCHNAME",title:"Branch Name"},{accessor:"AIFSCCODE",title:"IFSC Code"},{accessor:"ACHEQUENO",title:"Cheque No"},{accessor:"ACHEQUEREMARK",title:"Cheque Remark"},{accessor:"AMICRCODE",title:"MICR Code"},{accessor:"ATPNOBANK",title:"TP No Bank"},{accessor:"CREATEDBY",title:"Created By"},{accessor:"CREATEDON",title:"Created On"},{accessor:"UPDATEDBY",title:"Updated By"},{accessor:"UPDATEDON",title:"Updated On"},{accessor:"ACCITY",title:"City"},{accessor:"ACSTATE",title:"State"},{accessor:"ACCOUNTRY",title:"Country"},{accessor:"ACDISTRICT",title:"District"},{accessor:"ACPINCODE",title:"Pincode"},{accessor:"REMARK",title:"Remark"},{accessor:"GSTNO",title:"GST No"}];c.useEffect(()=>{h(1)},[u]),c.useEffect(()=>{const t=(m-1)*u,s=t+u;O([...d.slice(t,s)])},[m,u,d]),c.useEffect(()=>{p(()=>j.filter(t=>t.TRANSPORTID.toString().includes(N.toLowerCase())||t.AFIRMNAME.toLowerCase().includes(N.toLowerCase())||t.APCITY.toLowerCase().includes(N.toLowerCase())||t.APSTATE.toLowerCase().includes(N.toLowerCase())||t.STATUS.toLowerCase().includes(N.toLowerCase())||t.AGENTNAME.toLowerCase().includes(N.toLowerCase())))},[N]),c.useEffect(()=>{const t=Ce(d,R.columnAccessor);p(R.direction==="desc"?t.reverse():t),h(1)},[R]);const ee=["Id","COMPANYID","TRANSPORTID","AFIRMNAME","ACTELEPHONENO","ACMOBILENO","ACADDRESSLINE1","ACADDRESSLINE2","ACADDRESSLINE3","STATUS","AGENTNAME","ADOB","APERSONALIDTYPE","APERSONALID","APMOBILENO","APEMAILID","APADDRESSLINE1","APADDRESSLINE2","APADDRESSLINE3","APCITY","APSTATE","APCOUNTRY","APDISTRICT","APPINCODE","ABANKNAME","AACCOUNTTYPE","AACCOUNTNO","AACCOUNTHOLDERNAME","ABRANCHNAME","AIFSCCODE","ACHEQUENO","ACHEQUEREMARK","AMICRCODE","ATPNOBANK","CREATEDBY","CREATEDON","UPDATEDBY","UPDATEDON","ACCITY","ACSTATE","ACCOUNTRY","ACDISTRICT","ACPINCODE","REMARK","GSTNO"];c.useEffect(()=>{fetch(`${ie}/getTransport`).then(t=>t.json()).then(t=>{let s=t;V(s),p(s),O(s),z(s),console.log(s,"dataaaaaa")}).catch(t=>{console.error("Error fetching data:",t)})},[]);function te(){const t=["id","COMPANYID","TRANSPORTID","AFIRMNAME","ACTELEPHONENO","ACMOBILENO","ACADDRESSLINE1","ACADDRESSLINE2","ACADDRESSLINE3","STATUS","AGENTNAME","ADOB","APERSONALIDTYPE","APERSONALID","APMOBILENO","APEMAILID","APADDRESSLINE1","APADDRESSLINE2","APADDRESSLINE3","APCITY","APSTATE","APCOUNTRY","APDISTRICT","APPINCODE","ABANKNAME","AACCOUNTTYPE","AACCOUNTNO","AACCOUNTHOLDERNAME","ABRANCHNAME","AIFSCCODE","ACHEQUENO","ACHEQUEREMARK","AMICRCODE","ATPNOBANK","CREATEDBY","CREATEDON","UPDATEDBY","UPDATEDON","ACCITY","ACSTATE","ACCOUNTRY","ACDISTRICT","ACPINCODE","REMARK","GSTNO"];De.downloadExcel({fileName:"table",sheet:"react-export-table-to-excel",tablePayload:{header:ee,body:y.map(s=>t.map(r=>s[r]))}})}const L=t=>{let s=ue,r=d,D="table",T;if(T=window.navigator,t==="csv"){let n=";",C=`
`,l=s.map(E=>M(E)).join(n);if(l+=C,r.map(E=>{s.map((I,B)=>{B>0&&(l+=n);let x=E[I]?E[I]:"";l+=x}),l+=C}),l==null)return;if(!l.match(/^data:text\/csv/i)&&!T.msSaveOrOpenBlob){var se="data:application/csv;charset=utf-8,"+encodeURIComponent(l),f=document.createElement("a");f.setAttribute("href",se),f.setAttribute("download",D+".csv"),f.click()}else{var ae=new Blob([l]);T.msSaveOrOpenBlob&&T.msSaveBlob(ae,D+".csv")}}else if(t==="print"){var i="<p>"+D+"</p>";i+='<table style="width: 100%; " cellpadding="0" cellcpacing="0"><thead><tr style="color: #515365; background: #eff5ff; -webkit-print-color-adjust: exact; print-color-adjust: exact; "> ',s.map(n=>{i+="<th>"+M(n)+"</th>"}),i+="</tr></thead>",i+="<tbody>",r.map(n=>{i+="<tr>",s.map(C=>{let l=n[C]?n[C]:"";i+="<td>"+l+"</td>"}),i+="</tr>"}),i+="<style>body {font-family:Arial; color:#495057;}p{text-align:center;font-size:18px;font-weight:bold;margin:15px;}table{ border-collapse: collapse; border-spacing: 0; }th,td{font-size:12px;text-align:left;padding: 4px;}th{padding:8px 4px;}tr:nth-child(2n-1){background:#f7f7f7; }</style>",i+="</tbody></table>";var P=window.open("","","left=0,top=0,width=1000,height=600,toolbar=0,scrollbars=0,status=0");P.document.write("<title>Print</title>"+i),P.document.close(),P.focus(),P.print()}else if(t==="txt"){let n=",",C=`
`,l=s.map(E=>M(E)).join(n);if(l+=C,r.map(E=>{s.map((I,B)=>{B>0&&(l+=n);let x=E[I]?E[I]:"";l+=x}),l+=C}),l==null)return;if(!l.match(/^data:text\/txt/i)&&!T.msSaveOrOpenBlob){var re="data:application/txt;charset=utf-8,"+encodeURIComponent(l),U=document.createElement("a");U.setAttribute("href",re),U.setAttribute("download",D+".txt"),U.click()}else{var ce=new Blob([l]);T.msSaveOrOpenBlob&&T.msSaveBlob(ce,D+".txt")}}},M=t=>t.replace("_"," ").replace("-"," ").toLowerCase().split(" ").map(s=>s.charAt(0).toUpperCase()+s.substring(1)).join(" ");return a("div",{children:A("div",{className:"panel mt-6",children:[A("div",{className:"mb-4.5 flex md:items-center md:flex-row flex-col gap-5",children:[A("div",{className:"flex items-center gap-5",children:[A("div",{className:"flex items-center flex-wrap",children:[A("button",{type:"button",onClick:()=>L("csv"),className:"btn btn-primary btn-sm m-1 ",children:[a(Y,{className:"w-5 h-5 ltr:mr-2 rtl:ml-2"}),"CSV"]}),A("button",{type:"button",onClick:()=>L("txt"),className:"btn btn-primary btn-sm m-1",children:[a(Y,{className:"w-5 h-5 ltr:mr-2 rtl:ml-2"}),"TXT"]}),A("button",{type:"button",className:"btn btn-primary btn-sm m-1",onClick:te,children:[a(Y,{className:"w-5 h-5 ltr:mr-2 rtl:ml-2"}),"EXCEL"]}),A("button",{type:"button",onClick:()=>L("print"),className:"btn btn-primary btn-sm m-1",children:[a(Te,{className:"ltr:mr-2 rtl:ml-2"}),"PRINT"]}),a("button",{type:"button",className:"btn btn-primary btn-sm m-1 w-50 h-5 ltr:mr-2 rtl:ml-2",style:{width:"10%",height:"33px"},onClick:()=>{_(""),X(""),Z(""),J(""),W(""),O(d.slice(0,10))},children:"RESET"}),a("button",{type:"button",className:"btn btn-primary btn-sm m-1",style:{padding:"8px 28px"},onClick:()=>{const t=d.filter(s=>(v===""||s.AGENTNAME===v)&&(w===""||s.AFIRMNAME===w)&&(H===""||s.ACCITY===H)&&(k===""||s.ACSTATE===k)&&(K===""||s.STATUS===K));O(t)},children:"SEARCH"})]}),a("div",{className:"dropdown",children:a(ne,{placement:`${G?"bottom-end":"bottom-start"}`,btnClassName:"!flex items-center border font-semibold border-white-light dark:border-[#253b5c] rounded-md px-4 py-2 text-sm dark:bg-[#1b2e4b] dark:text-white-dark",button:A(de,{children:[a("span",{className:"ltr:mr-1 rtl:ml-1",children:"Columns"}),a(Ee,{className:"w-5 h-5"})]}),children:a("div",{className:"overflow-auto max-h-[300px]",children:a("ul",{className:"!min-w-[140px]",children:o.map((t,s)=>s%3===0?A("li",{className:"flex md:flex-row flex-col ",onClick:r=>{r.stopPropagation()},children:[a("div",{className:"flex items-center px-4 py-1 md:w-1/3",children:A("label",{className:"cursor-pointer mb-0 flex items-center",children:[a("input",{type:"checkbox",checked:!e.includes(t.accessor),className:"form-checkbox mr-2",defaultValue:t.accessor,onChange:r=>{S(r.target.value),b(t.accessor,r.target.checked)}}),a("span",{children:t.title})]})}),o[s+1]&&a("div",{className:"flex items-center px-4 py-1 md:w-1/3",children:A("label",{className:"cursor-pointer mb-0 flex items-center",children:[a("input",{type:"checkbox",checked:!e.includes(o[s+1].accessor),className:"form-checkbox mr-2",defaultValue:o[s+1].accessor,onChange:r=>{S(r.target.value),b(o[s+1].accessor,r.target.checked)}}),a("span",{children:o[s+1].title})]})}),o[s+2]&&a("div",{className:"flex items-center px-4 py-1 md:w-1/3",children:A("label",{className:"cursor-pointer mb-0 flex items-center",children:[a("input",{type:"checkbox",checked:!e.includes(o[s+2].accessor),className:"form-checkbox mr-2",defaultValue:o[s+2].accessor,onChange:r=>{S(r.target.value),b(o[s+2].accessor,r.target.checked)}}),a("span",{children:o[s+2].title})]})})]},s):null)})})})})]}),a("div",{className:"ltr:ml-auto rtl:mr-auto",children:a("input",{type:"text",className:"form-input w-auto",placeholder:"Search...",value:N,onChange:t=>$(t.target.value)})})]}),a("div",{children:a("table",{children:A("tr",{children:[a("td",{children:A("label",{htmlFor:"",children:["From Date",a("input",{type:"date",style:{border:"1px solid #e5e7eb",borderRadius:"5px",margin:"0px 6px",width:"144px"}})]})}),a("td",{children:A("label",{htmlFor:"",children:["To Date",a("input",{type:"date",style:{border:"1px solid #e5e7eb",borderRadius:"5px",margin:"0px 6px",width:"144px"}})]})})]})})}),a("div",{className:"datatables",children:a(Ne,{highlightOnHover:!0,className:"whitespace-nowrap table-hover",records:y,columns:[{accessor:"id",title:"Id",sortable:!0,hidden:e.includes("id")},{accessor:"COMPANYID",title:"Company ID",sortable:!0,hidden:e.includes("COMPANYID")},{accessor:"TRANSPORTID",title:"Transport ID",sortable:!0,hidden:e.includes("TRANSPORTID")},{accessor:"AFIRMNAME",title:"Firm Name",sortable:!0,hidden:e.includes("AFIRMNAME")},{accessor:"ACTELEPHONENO",title:"Telephone No",sortable:!0,hidden:e.includes("ACTELEPHONENO")},{accessor:"ACMOBILENO",title:"Mobile No",sortable:!0,hidden:e.includes("ACMOBILENO")},{accessor:"ACADDRESSLINE1",title:"Address Line 1",sortable:!0,hidden:e.includes("ACADDRESSLINE1")},{accessor:"ACADDRESSLINE2",title:"Address Line 2",sortable:!0,hidden:e.includes("ACADDRESSLINE2")},{accessor:"ACADDRESSLINE3",title:"Address Line 3",sortable:!0,hidden:e.includes("ACADDRESSLINE3")},{accessor:"AGENTNAME",title:"Agent Name",sortable:!0,hidden:e.includes("AGENTNAME")},{accessor:"ADOB",title:"Date of Birth",sortable:!0,hidden:e.includes("ADOB")},{accessor:"APERSONALIDTYPE",title:"Personal ID Type",sortable:!0,hidden:e.includes("APERSONALIDTYPE")},{accessor:"APERSONALID",title:"Personal ID",sortable:!0,hidden:e.includes("APERSONALID")},{accessor:"APMOBILENO",title:"Mobile No",sortable:!0,hidden:e.includes("APMOBILENO")},{accessor:"APEMAILID",title:"Email ID",sortable:!0,hidden:e.includes("APEMAILID")},{accessor:"APADDRESSLINE1",title:"Address Line 1",sortable:!0,hidden:e.includes("APADDRESSLINE1")},{accessor:"APADDRESSLINE2",title:"Address Line 2",sortable:!0,hidden:e.includes("APADDRESSLINE2")},{accessor:"APADDRESSLINE3",title:"Address Line 3",sortable:!0,hidden:e.includes("APADDRESSLINE3")},{accessor:"APCITY",title:"City",sortable:!0,hidden:e.includes("APCITY")},{accessor:"APSTATE",title:"State",sortable:!0,hidden:e.includes("APSTATE")},{accessor:"APCOUNTRY",title:"Country",sortable:!0,hidden:e.includes("APCOUNTRY")},{accessor:"APDISTRICT",title:"District",sortable:!0,hidden:e.includes("APDISTRICT")},{accessor:"APPINCODE",title:"Pincode",sortable:!0,hidden:e.includes("APPINCODE")},{accessor:"ABANKNAME",title:"Bank Name",sortable:!0,hidden:e.includes("ABANKNAME")},{accessor:"AACCOUNTTYPE",title:"Account Type",sortable:!0,hidden:e.includes("AACCOUNTTYPE")},{accessor:"AACCOUNTNO",title:"Account No",sortable:!0,hidden:e.includes("AACCOUNTNO")},{accessor:"AACCOUNTHOLDERNAME",title:"Account Holder Name",sortable:!0,hidden:e.includes("AACCOUNTHOLDERNAME")},{accessor:"ABRANCHNAME",title:"Branch Name",sortable:!0,hidden:e.includes("ABRANCHNAME")},{accessor:"AIFSCCODE",title:"IFSC Code",sortable:!0,hidden:e.includes("AIFSCCODE")},{accessor:"ACHEQUENO",title:"Cheque No",sortable:!0,hidden:e.includes("ACHEQUENO")},{accessor:"ACHEQUEREMARK",title:"Cheque Remark",sortable:!0,hidden:e.includes("ACHEQUEREMARK")},{accessor:"AMICRCODE",title:"MICR Code",sortable:!0,hidden:e.includes("AMICRCODE")},{accessor:"ATPNOBANK",title:"TP No Bank",sortable:!0,hidden:e.includes("ATPNOBANK")},{accessor:"CREATEDBY",title:"Created By",sortable:!0,hidden:e.includes("CREATEDBY")},{accessor:"CREATEDON",title:"Created On",sortable:!0,hidden:e.includes("CREATEDON")},{accessor:"UPDATEDBY",title:"Updated By",sortable:!0,hidden:e.includes("UPDATEDBY")},{accessor:"UPDATEDON",title:"Updated On",sortable:!0,hidden:e.includes("UPDATEDON")},{accessor:"ACCITY",title:"City",sortable:!0,hidden:e.includes("ACCITY")},{accessor:"ACSTATE",title:"State",sortable:!0,hidden:e.includes("ACSTATE")},{accessor:"ACCOUNTRY",title:"Country",sortable:!0,hidden:e.includes("ACCOUNTRY")},{accessor:"ACDISTRICT",title:"District",sortable:!0,hidden:e.includes("ACDISTRICT")},{accessor:"ACPINCODE",title:"Pincode",sortable:!0,hidden:e.includes("ACPINCODE")},{accessor:"REMARK",title:"Remark",sortable:!0,hidden:e.includes("REMARK")},{accessor:"GSTNO",title:"GST No",sortable:!0,hidden:e.includes("GSTNO")},{accessor:"STATUS",title:"Status",sortable:!0,hidden:e.includes("STATUS")}],totalRecords:d.length,recordsPerPage:u,page:m,onPageChange:t=>h(t),recordsPerPageOptions:g,onRecordsPerPageChange:Q,sortStatus:R,onSortStatusChange:q,minHeight:200,paginationText:({from:t,to:s,totalRecords:r})=>`Showing  ${t} to ${s} of ${r} entries`})})]})})};export{Ue as default};
