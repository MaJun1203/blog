import{u as I,j as se,m as te,p as U,q as ae,P as le,v as re,x as ue,l as b,y as k,z as ie,w as J,k as t,A as oe,R as _,B as ne,C as ce,D as ve,E as pe,G as de,H as ye,I as he,J as me,K as ge,L as w,M as Ee,N as He,O as fe,Q as O,S as $,T as Ae}from"./app-Ku0kwQ5V.js";const Qe=["/","/intro.html","/demo/","/demo/disable.html","/demo/layout.html","/demo/markdown.html","/demo/page.html","/posts/JavaWeb/04_XML_Tomcat_HTTP.html","/posts/MySQL/MySQLAdvanced.html","/posts/MySQL/MySQLBase.html","/404.html","/posts/JavaWeb/","/posts/","/posts/MySQL/","/category/","/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","/category/%E6%8C%87%E5%8D%97/","/category/%E8%8B%B9%E6%9E%9C/","/tag/","/tag/%E7%A6%81%E7%94%A8/","/tag/%E5%8A%A0%E5%AF%86/","/tag/%E5%B8%83%E5%B1%80/","/tag/markdown/","/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/","/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","/tag/%E7%BA%A2/","/tag/%E5%A4%A7/","/tag/%E5%9C%86/","/article/","/star/","/timeline/"],Re="SEARCH_PRO_QUERY_HISTORY",g=I(Re,[]),ke=()=>{const{queryHistoryCount:a}=w,l=a>0;return{enabled:l,queryHistory:g,addQueryHistory:r=>{l&&(g.value=Array.from(new Set([r,...g.value.slice(0,a-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},T=a=>Qe[a.id]+("anchor"in a?`#${a.anchor}`:""),we="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:j}=w,E=I(we,[]),Se=()=>{const a=j>0;return{enabled:a,resultHistory:E,addResultHistory:l=>{if(a){const r={link:T(l),display:l.display};"header"in l&&(r.header=l.header),E.value=[r,...E.value.slice(0,j-1)]}},removeResultHistory:l=>{E.value=[...E.value.slice(0,l),...E.value.slice(l+1)]}}},Ce=a=>{const l=pe(),r=U(),S=de(),i=b(0),A=k(()=>i.value>0),y=ye([]);return he(()=>{const{search:h,terminate:C}=me(),H=ge(c=>{const f=c.join(" "),{searchFilter:D=d=>d,splitWord:L,suggestionsFilter:F,...m}=l.value;f?(i.value+=1,h(c.join(" "),r.value,m).then(d=>D(d,f,r.value,S.value)).then(d=>{i.value-=1,y.value=d}).catch(d=>{console.warn(d),i.value-=1,i.value||(y.value=[])})):y.value=[]},w.searchDelay-w.suggestDelay);J([a,r],([c])=>H(c),{immediate:!0}),Ee(()=>{C()})}),{isSearching:A,results:y}};var Le=se({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const r=te(),S=U(),i=ae(le),{enabled:A,addQueryHistory:y,queryHistory:h,removeQueryHistory:C}=ke(),{enabled:H,resultHistory:c,addResultHistory:f,removeResultHistory:D}=Se(),L=A||H,F=re(a,"queries"),{results:m,isSearching:d}=Ce(F),u=ue({isQuery:!0,index:0}),v=b(0),p=b(0),M=k(()=>L&&(h.value.length>0||c.value.length>0)),q=k(()=>m.value.length>0),x=k(()=>m.value[v.value]||null),Y=()=>{const{isQuery:e,index:s}=u;s===0?(u.isQuery=!e,u.index=e?c.value.length-1:h.value.length-1):u.index=s-1},W=()=>{const{isQuery:e,index:s}=u;s===(e?h.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=s+1},z=()=>{v.value=v.value>0?v.value-1:m.value.length-1,p.value=x.value.contents.length-1},G=()=>{v.value=v.value<m.value.length-1?v.value+1:0,p.value=0},K=()=>{p.value<x.value.contents.length-1?p.value+=1:G()},N=()=>{p.value>0?p.value-=1:z()},B=e=>e.map(s=>Ae(s)?s:t(s[0],s[1])),V=e=>{if(e.type==="customField"){const s=He[e.index]||"$content",[o,R=""]=fe(s)?s[S.value].split("$content"):s.split("$content");return e.display.map(n=>t("div",B([o,...n,R])))}return e.display.map(s=>t("div",B(s)))},Q=()=>{v.value=0,p.value=0,l("updateQuery",""),l("close")},X=()=>A?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.queryHistory),h.value.map((e,s)=>t("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===s}],onClick:()=>{l("updateQuery",e)}},[t(O,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:$,onClick:o=>{o.preventDefault(),o.stopPropagation(),C(s)}})]))])):null,Z=()=>H?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,s)=>t(_,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===s}],onClick:()=>{Q()}},()=>[t(O,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(o=>B(o)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:$,onClick:o=>{o.preventDefault(),o.stopPropagation(),D(s)}})]))])):null;return ie("keydown",e=>{if(a.isFocusing){if(q.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")K();else if(e.key==="Enter"){const s=x.value.contents[p.value];y(a.queries.join(" ")),f(s),r.push(T(s)),Q()}}else if(H){if(e.key==="ArrowUp")Y();else if(e.key==="ArrowDown")W();else if(e.key==="Enter"){const{index:s}=u;u.isQuery?(l("updateQuery",h.value[s]),e.preventDefault()):(r.push(c.value[s].link),Q())}}}}),J([v,p],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!q.value:!M.value}],id:"search-pro-results"},a.queries.length?d.value?t(oe,{hint:i.value.searching}):q.value?t("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:s},o)=>{const R=v.value===o;return t("li",{class:["search-pro-result-list-item",{active:R}]},[t("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),s.map((n,ee)=>{const P=R&&p.value===ee;return t(_,{to:T(n),class:["search-pro-result-item",{active:P,"aria-selected":P}],onClick:()=>{y(a.queries.join(" ")),f(n),Q()}},()=>[n.type==="text"?null:t(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?t("div",{class:"content-header"},n.header):null,t("div",V(n))])])})])})):i.value.emptyResult:L?M.value?[X(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{Le as default};
