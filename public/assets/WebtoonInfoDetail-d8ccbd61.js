import{a as r,F as t,j as i}from"./index-8adb18f8.js";const d=({webtoon:e})=>{const a=e.service==="naver"?"네이버 웹툰":e.service==="kakao"?"카카오 웹툰":"카카오페이지 웹툰",l=["월요일","화요일","수요일","목요일","금요일","토요일","일요일","완결","신작"];return r(t,{children:[i("div",{className:"webtoon-img",children:i("img",{src:e.img,alt:e.title})}),r("div",{className:"webtoon-title",children:[i("h3",{children:e.title}),r("h5",{children:[e.author," | ",a]})]}),i("div",{className:"webtoon-week",children:i("ul",{children:e.week.map((s,c)=>i("li",{children:l[s]},c))})})]})};export{d as default};