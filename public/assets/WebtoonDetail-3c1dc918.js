import{u as r,a as e,j as a,S as i,d as c,e as b,f as d,s,p as N,U as S,I as w,h,A as m}from"./index-a90ff333.js";import v from"./WebtoonInfoDetail-22ac8329.js";const W=()=>{const{state:n}=r(),o=n.webtoonDetailData,l={_id:o._id};return e("div",{children:a("section",{className:"webtoon-detail-container",children:[e(v,{webtoon:o}),a("div",{className:"webtoon-detail-btns",children:[e("a",{className:"mywebtoon-save-btn",onClick:async()=>{if(d(S)===null){s(w,"yellow");return}else{const t=await N(l);t.RESULT===200&&s(h,"green"),t.RESULT===403&&s(m,"yellow")}},children:e("button",{children:"마이웹툰에 저장"})}),e("a",{href:o.url,target:"_blank",className:"webtoon-show-btn",rel:"noreferrer",children:a("button",{className:`${o.service}`,children:[e("span",{className:"logo",children:o.service==="naver"?e(i,{}):o.service==="kakao"?e(c,{}):e(b,{})}),"  웹툰 보러가기"]})})]})]})})};export{W as default};
