import{u as D,H as f,r,j as e,a as s,F as C,B as p,l as g,Z as _,$ as E}from"./index-5b0a59ef.js";import{a as h,c as I,d as y,e as T}from"./recoilBoardState-85713a19.js";import B from"./WebtoonInfoDetail-4c29540a.js";import{u as x}from"./recoilAuthState-87d6657f.js";import{I as k}from"./Input-99bb2273.js";import"./Input.styles-ad25343a.js";const A=o=>{const[a,l]=f(h),[n,c]=r.useState();return r.useEffect(()=>{(async()=>{const i=await T(a._id);c(i)})()},[o.commentState]),e("div",{className:"comment-lists",children:(n==null?void 0:n.length)===0?s("h6",{style:{textAlign:"center",paddingTop:"2rem"},children:["아직 댓글이 없습니다. ",e("br",{}),"첫 댓글을 작성해보세요."]}):e(C,{children:n==null?void 0:n.map((t,i)=>s("div",{className:"comment",children:[s("div",{className:"comment-user",children:[e("span",{className:"comment-img",children:e("img",{src:t==null?void 0:t.author.profileImage,width:24,height:24})}),s("div",{className:"nickname",children:[e("h5",{children:t==null?void 0:t.author.nickname}),e("span",{children:t==null?void 0:t.createdAt.split("T")[0]})]})]}),e("div",{className:"comment-des",children:t==null?void 0:t.comment})]},i))})})},M=()=>{const o=r.useRef(),a=p(x),l=p(h),[n,c]=r.useState(""),[t,i]=r.useState(),d=new Date,N=d.getFullYear(),b=("0"+(d.getMonth()+1)).slice(-2),w=("0"+d.getDate()).slice(-2),v=N+"-"+b+"-"+w,S=async()=>{const m={board_id:l._id,comment:n,author:a._id,createdAt:v};if(n==="")g(_,"yellow"),o.current.focus();else{const u=await y(m);u.RESULT===200&&(c(""),i(u),g(E,"green"))}};return s("section",{className:"webtoon-review",children:[e("div",{children:e("hr",{})}),e(A,{commentState:t}),s("div",{className:"comment-container",children:[e("span",{className:"comment-img",children:e("img",{src:a.profileImage,width:28,height:28})}),e(k,{ref:o,value:n,onChange:m=>c(m.target.value),className:"comment-input",placeholder:"댓글을 남겨주세요.",radius:"lg"}),e("span",{className:"comment-btn",children:e("button",{onClick:S,children:"등록"})})]})]})},P=()=>{const{state:o}=D(),[a,l]=f(h);return r.useEffect(()=>{(async()=>{window.scrollTo(0,0);const c=await I(o);l(c)})()},[]),e("div",{className:"board-detail-global",children:a.length===0?"":s(C,{children:[s("section",{className:"board-title-container",children:[e("h1",{children:a.title}),s("div",{className:"creater",children:[e("span",{className:"board-author-img",children:e("img",{src:a.author.profileImage,width:30,height:30})}),e("span",{className:"nickname",children:a.author.nickname})]})]}),e("section",{className:"webtoon-detail-container",children:e(B,{webtoon:a.webtoon})}),e("section",{className:"board-description-container",children:e("div",{children:a.description})}),e("section",{children:e(M,{})})]})})};export{P as default};
