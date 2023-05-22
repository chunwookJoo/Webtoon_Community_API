import{Q as w,l as h,T as A,O as G,r as l,j as e,a as s,ap as x,aa as q,ab as L,aq as f,ar as O,N as W,as as j,ad as K}from"./index-4c6f47ce.js";import{S,i as P}from"./user-a2d96752.js";import{I as i}from"./Input-ed245c9f.js";const V=async(o,d)=>{try{const{data:r}=await w.post("/auth/signUp",d);return r}catch(r){throw h(A,"red"),new Error(r,`${o} 회원가입 에러`)}},B=o=>{const d=G(),r=l.useRef(),{platform:g,account:n,token:v,id:C}=o,b=n.email,E=g==="kakao"?n.profile.thumbnail_image_url:n.profile_image,[N,_]=l.useState(g==="kakao"?n.age_range:n.age.replace("-","~")),[k,R]=l.useState(n.gender==="M"||n.gender==="male"?"male":"female"),[c,y]=l.useState(""),[m,I]=l.useState("empty"),p=(a,t)=>{t==="nickname"?y(a.target.value):t==="age"?_(a):t==="gender"&&R(a)},T=async()=>{I(await P(c))},U=async a=>{const t={authToken:v,id:C,email:b,profileImage:E,nickname:c,age:N,gender:k};if(m==="available"){const u=await V(a,t);u.RESULT===200&&(f(O,u.user_data.authToken),f(W,u.jwtToken),d("/"),h(j,"green"))}else r.current.focus(),h(K,"yellow")};return e("div",{className:"regist-container",children:s("div",{className:"regist-form-group",children:[s("div",{className:"regist-title",children:[e(x,{}),e("h3",{children:"회원가입"})]}),s("div",{className:"regist-form",children:[e("div",{className:"regist-input",children:e(i.Wrapper,{label:"이메일",required:!0,children:e(i,{defaultValue:n.email,disabled:!0})})}),s("div",{className:"regist-input",children:[s(i.Wrapper,{label:"닉네임",required:!0,children:[" ",s("span",{style:{fontSize:"12px"},children:["(",c.length,"/8자)"]}),e(i,{maxLength:8,placeholder:"닉네임을 입력하세요.",onChange:a=>p(a,"nickname"),defaultValue:c,ref:r})]}),s("div",{className:"nickname-check",children:[m==="empty"?e("span",{className:"unavailable",children:"닉네임을 입력해주세요."}):m==="available"?e("span",{className:"available",children:"사용할 수 있는 닉네임입니다."}):e("span",{className:"unavailable",children:"이미 사용중인 닉네임입니다."}),e("button",{onClick:a=>T(),children:"중복체크"})]})]}),e("div",{className:"regist-input",children:e(i.Wrapper,{label:"나이",required:!0,children:e(S,{placeholder:"본인 연령대를 선택하세요.",data:q,defaultValue:N,onChange:a=>p(a,"age")})})}),e("div",{className:"regist-input",children:e(i.Wrapper,{label:"성별",required:!0,children:e(S,{placeholder:"성별을 선택하세요.",data:L,defaultValue:k,onChange:a=>p(a,"gender")})})})]}),e("div",{className:"regist-btn",children:e("button",{onClick:()=>U(g),children:"회원가입하기"})})]})})};export{B as S};