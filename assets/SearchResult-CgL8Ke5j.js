import{u as U,j as te,m as ae,p as M,q as se,P as le,v as re,x as ue,l as F,y as R,z as oe,w as Y,k as a,A as ie,R as $,B as ne,C as ce,D as pe,E as ve,G as he,H as de,I as ye,J as me,K as Ee,L as k,M as ge,N as Ae,O as fe,Q as j,S as I,T as Be}from"./app-DcDyRPRL.js";const He=["/intro.html","/","/demo/disable.html","/demo/layout.html","/demo/markdown.html","/demo/page.html","/demo/","/posts/cherry.html","/posts/dragonfruit.html","/posts/strawberry.html","/posts/tomato.html","/posts/banana/1.html","/posts/banana/2.html","/posts/banana/3.html","/posts/banana/4.html","/posts/apple/1.html","/posts/apple/2.html","/posts/apple/3.html","/posts/apple/4.html","/404.html","/posts/","/posts/banana/","/posts/apple/","/category/","/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","/category/%E6%8C%87%E5%8D%97/","/category/%E6%A8%B1%E6%A1%83/","/category/%E7%81%AB%E9%BE%99%E6%9E%9C/","/category/%E6%B0%B4%E6%9E%9C/","/category/%E8%8D%89%E8%8E%93/","/category/%E8%94%AC%E8%8F%9C/","/category/%E9%A6%99%E8%95%89/","/category/%E8%8B%B9%E6%9E%9C/","/tag/","/tag/%E7%A6%81%E7%94%A8/","/tag/%E5%8A%A0%E5%AF%86/","/tag/%E5%B8%83%E5%B1%80/","/tag/markdown/","/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/","/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","/tag/%E7%BA%A2/","/tag/%E5%B0%8F/","/tag/%E5%9C%86/","/tag/%E5%A4%A7/","/tag/%E9%BB%84/","/tag/%E5%BC%AF%E6%9B%B2%E7%9A%84/","/tag/%E9%95%BF/","/article/","/star/","/timeline/"],Ce="SEARCH_PRO_QUERY_HISTORY",E=U(Ce,[]),Re=()=>{const{queryHistoryCount:s}=k,l=s>0;return{enabled:l,queryHistory:E,addQueryHistory:r=>{l&&(E.value=Array.from(new Set([r,...E.value.slice(0,s-1)])))},removeQueryHistory:r=>{E.value=[...E.value.slice(0,r),...E.value.slice(r+1)]}}},L=s=>He[s.id]+("anchor"in s?`#${s.anchor}`:""),ke="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:_}=k,g=U(ke,[]),we=()=>{const s=_>0;return{enabled:s,resultHistory:g,addResultHistory:l=>{if(s){const r={link:L(l),display:l.display};"header"in l&&(r.header=l.header),g.value=[r,...g.value.slice(0,_-1)]}},removeResultHistory:l=>{g.value=[...g.value.slice(0,l),...g.value.slice(l+1)]}}},De=s=>{const l=ve(),r=M(),w=he(),o=F(0),B=R(()=>o.value>0),d=de([]);return ye(()=>{const{search:y,terminate:D}=me(),A=Ee(c=>{const f=c.join(" "),{searchFilter:Q=h=>h,splitWord:b,suggestionsFilter:O,...m}=l.value;f?(o.value+=1,y(c.join(" "),r.value,m).then(h=>Q(h,f,r.value,w.value)).then(h=>{o.value-=1,d.value=h}).catch(h=>{console.warn(h),o.value-=1,o.value||(d.value=[])})):d.value=[]},k.searchDelay-k.suggestDelay);Y([s,r],([c])=>A(c),{immediate:!0}),ge(()=>{D()})}),{isSearching:B,results:d}};var be=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(s,{emit:l}){const r=ae(),w=M(),o=se(le),{enabled:B,addQueryHistory:d,queryHistory:y,removeQueryHistory:D}=Re(),{enabled:A,resultHistory:c,addResultHistory:f,removeResultHistory:Q}=we(),b=B||A,O=re(s,"queries"),{results:m,isSearching:h}=De(O),u=ue({isQuery:!0,index:0}),p=F(0),v=F(0),P=R(()=>b&&(y.value.length>0||c.value.length>0)),q=R(()=>m.value.length>0),x=R(()=>m.value[p.value]||null),z=()=>{const{isQuery:e,index:t}=u;t===0?(u.isQuery=!e,u.index=e?c.value.length-1:y.value.length-1):u.index=t-1},G=()=>{const{isQuery:e,index:t}=u;t===(e?y.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=t+1},J=()=>{p.value=p.value>0?p.value-1:m.value.length-1,v.value=x.value.contents.length-1},K=()=>{p.value=p.value<m.value.length-1?p.value+1:0,v.value=0},N=()=>{v.value<x.value.contents.length-1?v.value+=1:K()},V=()=>{v.value>0?v.value-=1:J()},S=e=>e.map(t=>Be(t)?t:a(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=Ae[e.index]||"$content",[i,C=""]=fe(t)?t[w.value].split("$content"):t.split("$content");return e.display.map(n=>a("div",S([i,...n,C])))}return e.display.map(t=>a("div",S(t)))},H=()=>{p.value=0,v.value=0,l("updateQuery",""),l("close")},X=()=>B?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},o.value.queryHistory),y.value.map((e,t)=>a("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===t}],onClick:()=>{l("updateQuery",e)}},[a(j,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},e),a("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:i=>{i.preventDefault(),i.stopPropagation(),D(t)}})]))])):null,Z=()=>A?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},o.value.resultHistory),c.value.map((e,t)=>a($,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===t}],onClick:()=>{H()}},()=>[a(j,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[e.header?a("div",{class:"content-header"},e.header):null,a("div",e.display.map(i=>S(i)).flat())]),a("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:i=>{i.preventDefault(),i.stopPropagation(),Q(t)}})]))])):null;return oe("keydown",e=>{if(s.isFocusing){if(q.value){if(e.key==="ArrowUp")V();else if(e.key==="ArrowDown")N();else if(e.key==="Enter"){const t=x.value.contents[v.value];d(s.queries.join(" ")),f(t),r.push(L(t)),H()}}else if(A){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:t}=u;u.isQuery?(l("updateQuery",y.value[t]),e.preventDefault()):(r.push(c.value[t].link),H())}}}}),Y([p,v],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>a("div",{class:["search-pro-result-wrapper",{empty:s.queries.length?!q.value:!P.value}],id:"search-pro-results"},s.queries.length?h.value?a(ie,{hint:o.value.searching}):q.value?a("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:t},i)=>{const C=p.value===i;return a("li",{class:["search-pro-result-list-item",{active:C}]},[a("div",{class:"search-pro-result-title"},e||o.value.defaultTitle),t.map((n,ee)=>{const T=C&&v.value===ee;return a($,{to:L(n),class:["search-pro-result-item",{active:T,"aria-selected":T}],onClick:()=>{d(s.queries.join(" ")),f(n),H()}},()=>[n.type==="text"?null:a(n.type==="title"?ne:n.type==="heading"?ce:pe,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?a("div",{class:"content-header"},n.header):null,a("div",W(n))])])})])})):o.value.emptyResult:b?P.value?[X(),Z()]:o.value.emptyHistory:o.value.emptyResult)}});export{be as default};