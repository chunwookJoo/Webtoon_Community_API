import{u as c,h as d,j as s,F as N,i as h,a as n,S as m,b as S,c as b,k as g,l as o,p as u,m as I,U as p,I as v,n as W,A as _}from"./index-4c6f47ce.js";import f from"./WebtoonInfoDetail-4e7352fa.js";const L=()=>{const{pathname:t}=c(),i=t.split("/")[2],{data:e,isLoading:r}=d(["webtoonDetail"],()=>I(i));return r?s(N,{children:s(h,{})}):s("div",{children:n("section",{className:"webtoon-detail-container",children:[e&&s(f,{webtoon:e}),n("div",{className:"webtoon-detail-btns",children:[s("a",{className:"mywebtoon-save-btn",onClick:async()=>{const l={_id:e==null?void 0:e._id};if(g(p)===null){o(v,"yellow");return}else{const a=await u(l);a.RESULT===200&&o(W,"green"),a.RESULT===403&&o(_,"yellow")}},children:s("button",{children:"마이웹툰에 저장"})}),s("a",{href:e==null?void 0:e.url,target:"_blank",className:"webtoon-show-btn",rel:"noreferrer",children:n("button",{className:`${e==null?void 0:e.service}`,children:[s("span",{className:"logo",children:(e==null?void 0:e.service)==="naver"?s(m,{}):(e==null?void 0:e.service)==="kakao"?s(S,{}):s(b,{})}),"  웹툰 보러가기"]})})]})]})})};export{L as default};