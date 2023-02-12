import{G as q,s as N,H as L,y as P,r as o,B as E,D as W,q as K,a as e,j as t,ai as V,aj as _,ak as B,U as D,al as H,a7 as M}from"./index-4e988fb6.js";import{S as b,A as O,G as $,i as z}from"./user-20d939d1.js";import{I as r}from"./Input-260a7fbf.js";const J=async(d,p)=>{const g=d==="kakao"?"kakaoSignUp":"naverSignUp";try{const{data:s}=await q.post(`/auth/${g}`,p);return s}catch(s){throw N(L,"red"),new Error(s,`${d} 회원가입 에러`)}};const Y=d=>{const p=P(),g=o.useRef(),{platform:s,account:n,token:S,id:f}=d,v=n.email,C=s==="kakao"?n.profile.thumbnail_image_url:n.profile_image,[m,U]=o.useState(s==="kakao"?n.age_range:n.age.replace("-","~")),[u,I]=o.useState(n.gender==="M"||n.gender==="male"?"male":"female"),R=E(W),w=E(K),[l,y]=o.useState(""),[k,G]=o.useState("empty"),h=(a,i)=>{i==="nickname"?y(a.target.value):i==="age"?U(a):i==="gender"&&I(a)},A=async()=>{G(await z(l))},T=async(a,i)=>{const j={kakaoToken:S,id:f,email:v,profileImage:C,nickname:l,age:m,gender:u},x={naverToken:S,id:f,email:v,profileImage:C,nickname:l,age:m,gender:u};if(k==="available"){const c=await J(i,i==="kakao"?j:x);c.RESULT===200&&(R(c.jwtToken),w(c.user_data),_(B,c.jwtToken),_(D,c.user_data.id),p("/"),N(H,"green"))}else g.current.focus(),N(M,"yellow")};return e("div",{className:"regist-container",children:t("div",{className:"regist-form-group",children:[t("div",{className:"regist-title",children:[e(V,{}),e("h3",{children:"회원가입"})]}),t("div",{className:"regist-form",children:[e("div",{className:"regist-input",children:e(r.Wrapper,{label:"이메일",required:!0,children:e(r,{defaultValue:n.email,disabled:!0})})}),t("div",{className:"regist-input",children:[t(r.Wrapper,{label:"닉네임",required:!0,children:[" ",t("span",{style:{fontSize:"12px"},children:["(",l.length,"/8자)"]}),e(r,{maxLength:8,placeholder:"닉네임을 입력하세요.",onChange:a=>h(a,"nickname"),defaultValue:l,ref:g})]}),t("div",{className:"nickname-check",children:[k==="empty"?e("span",{className:"unavailable",children:"닉네임을 입력해주세요."}):k==="available"?e("span",{className:"available",children:"사용할 수 있는 닉네임입니다."}):e("span",{className:"unavailable",children:"이미 사용중인 닉네임입니다."}),e("button",{onClick:a=>A(),children:"중복체크"})]})]}),e("div",{className:"regist-input",children:e(r.Wrapper,{label:"나이",required:!0,children:e(b,{placeholder:"본인 연령대를 선택하세요.",data:O,defaultValue:m,onChange:a=>h(a,"age")})})}),e("div",{className:"regist-input",children:e(r.Wrapper,{label:"성별",required:!0,children:e(b,{placeholder:"성별을 선택하세요.",data:$,defaultValue:u,onChange:a=>h(a,"gender")})})})]}),e("div",{className:"regist-btn",children:e("button",{onClick:a=>T(a,s),children:"회원가입하기"})})]})})};export{Y as S};
