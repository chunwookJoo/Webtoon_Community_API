import{r as s,_ as te,i as re,k as ae,l as ne,m as ie,n as se,R as F,o as D,q as oe,t as le,a as n,j as S,b as ce,L as de,M as ue,z as he,F as pe,s as W,E as ge,C as fe,v as Y,w as X,x as me,f as ve,U as be,I as Z,y as Se,u as ye,B as we,D as xe}from"./index-e9b5be80.js";import{p as Ne,b as _e,a as Ce,g as Re}from"./recoilBoardState-b224dcb4.js";import{I as R}from"./Input-e160739b.js";import"./Input.styles-7937fb1d.js";var ze=s.useLayoutEffect,Ee=function(t){var e=s.useRef(t);return ze(function(){e.current=t}),e},U=function(t,e){if(typeof t=="function"){t(e);return}t.current=e},Pe=function(t,e){var r=s.useRef();return s.useCallback(function(o){t.current=o,r.current&&U(r.current,null),r.current=e,e&&U(e,o)},[e])},q={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},K=function(t){Object.keys(q).forEach(function(e){t.style.setProperty(e,q[e],"important")})},m=null,Le=function(t,e){var r=t.scrollHeight;return e.sizingStyle.boxSizing==="border-box"?r+e.borderSize:r-e.paddingSize};function Te(a,t,e,r){e===void 0&&(e=1),r===void 0&&(r=1/0),m||(m=document.createElement("textarea"),m.setAttribute("tabindex","-1"),m.setAttribute("aria-hidden","true"),K(m)),m.parentNode===null&&document.body.appendChild(m);var o=a.paddingSize,d=a.borderSize,u=a.sizingStyle,p=u.boxSizing;Object.keys(u).forEach(function(x){var z=x;m.style[z]=u[z]}),K(m),m.value=t;var i=Le(m,a);m.value="x";var c=m.scrollHeight-o,g=c*e;p==="border-box"&&(g=g+o+d),i=Math.max(g,i);var v=c*r;return p==="border-box"&&(v=v+o+d),i=Math.min(v,i),[i,c]}var $=function(){},Oe=function(t,e){return t.reduce(function(r,o){return r[o]=e[o],r},{})},Be=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],We=!!document.documentElement.currentStyle,Ie=function(t){var e=window.getComputedStyle(t);if(e===null)return null;var r=Oe(Be,e),o=r.boxSizing;if(o==="")return null;We&&o==="border-box"&&(r.width=parseFloat(r.width)+parseFloat(r.borderRightWidth)+parseFloat(r.borderLeftWidth)+parseFloat(r.paddingRight)+parseFloat(r.paddingLeft)+"px");var d=parseFloat(r.paddingBottom)+parseFloat(r.paddingTop),u=parseFloat(r.borderBottomWidth)+parseFloat(r.borderTopWidth);return{sizingStyle:r,paddingSize:d,borderSize:u}},ke=function(t){var e=Ee(t);s.useLayoutEffect(function(){var r=function(d){e.current(d)};return window.addEventListener("resize",r),function(){window.removeEventListener("resize",r)}},[])},Me=function(t,e){var r=t.cacheMeasurements,o=t.maxRows,d=t.minRows,u=t.onChange,p=u===void 0?$:u,i=t.onHeightChange,c=i===void 0?$:i,g=te(t,["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"]),v=g.value!==void 0,x=s.useRef(null),z=Pe(x,e),N=s.useRef(0),y=s.useRef(),_=function(){var f=x.current,P=r&&y.current?y.current:Ie(f);if(P){y.current=P;var l=Te(P,f.value||f.placeholder||"x",d,o),w=l[0],T=l[1];N.current!==w&&(N.current=w,f.style.setProperty("height",w+"px","important"),c(w,{rowHeight:T}))}},E=function(f){v||_(),p(f)};return s.useLayoutEffect(_),ke(_),s.createElement("textarea",re({},g,{onChange:E,ref:z}))},He=s.forwardRef(Me);const Ae=He;var Fe=ae(a=>({input:{paddingTop:a.spacing.xs,paddingBottom:a.spacing.xs}}));const je=Fe;var De=Object.defineProperty,Ve=Object.defineProperties,Ue=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,G=(a,t,e)=>t in a?De(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,L=(a,t)=>{for(var e in t||(t={}))J.call(t,e)&&G(a,e,t[e]);if(I)for(var e of I(t))Q.call(t,e)&&G(a,e,t[e]);return a},j=(a,t)=>Ve(a,Ue(t)),qe=(a,t)=>{var e={};for(var r in a)J.call(a,r)&&t.indexOf(r)<0&&(e[r]=a[r]);if(a!=null&&I)for(var r of I(a))t.indexOf(r)<0&&Q.call(a,r)&&(e[r]=a[r]);return e};const Ke={autosize:!1,size:"sm",__staticSelector:"Textarea"},ee=s.forwardRef((a,t)=>{const e=ne("Textarea",Ke,a),{autosize:r,maxRows:o,minRows:d,label:u,error:p,description:i,id:c,className:g,required:v,style:x,wrapperProps:z,classNames:N,styles:y,size:_,__staticSelector:E,sx:C,errorProps:f,descriptionProps:P,labelProps:l,inputWrapperOrder:w,inputContainer:T,unstyled:O}=e,k=qe(e,["autosize","maxRows","minRows","label","error","description","id","className","required","style","wrapperProps","classNames","styles","size","__staticSelector","sx","errorProps","descriptionProps","labelProps","inputWrapperOrder","inputContainer","unstyled"]),B=ie(c),{classes:M,cx:H}=je(),{systemStyles:V,rest:h}=se(k),b=L({required:v,ref:t,invalid:!!p,id:B,classNames:j(L({},N),{input:H(M.input,N==null?void 0:N.input)}),styles:y,__staticSelector:E,size:_,multiline:!0,unstyled:O},h);return F.createElement(R.Wrapper,L(L({label:u,error:p,id:B,description:i,required:v,style:x,className:g,classNames:N,styles:y,size:_,__staticSelector:E,sx:C,errorProps:f,labelProps:l,descriptionProps:P,inputContainer:T,inputWrapperOrder:w,unstyled:O},V),z),r?F.createElement(R,j(L({},b),{component:Ae,maxRows:o,minRows:d})):F.createElement(R,j(L({},b),{component:"textarea",rows:d})))});ee.displayName="@mantine/core/Textarea";const $e=a=>{const t=a.isOpen,e=a.toggle,r=n(pe,{}),o=[n("li",{className:"no-search-result",children:"검색 결과가 없습니다. 😥"})],[d,u]=s.useState(""),[p,i]=s.useState(""),[c,g]=s.useState(""),[v,x]=s.useState(""),[z,N]=s.useState(!0);let y=2;const _=y*12,[E,C]=s.useState([]),[f,P]=s.useState([]),[l,w]=s.useState(null),T=D(oe);s.useEffect(()=>{p?(async()=>{const h=await le(p);Array.isArray(h)?C(h.map((b,A)=>n("li",{className:"searched-item-wrap",onClick:()=>w(b),children:S("article",{className:"searched-item",children:[n("img",{src:b.img,width:80,height:80}),n("span",{className:"searched-title",children:b.title}),n("small",{children:b.service==="naver"?"네이버":b.service==="kakao"?"카카오":"카카오페이지"})]})},b._id))):C(o)})():C([])},[p]),s.useEffect(()=>{l!==null&&C([])},[l]);const O=()=>{w(null)},k=async()=>{const h={title:c,description:v,author:T._id,webtoon:l==null?void 0:l._id,service:l==null?void 0:l.service};c===""||v===""||l===null?W(ge,"yellow"):(await Ne(h)).RESULT===200&&(e(),g(""),x(""),w(null),W(fe,"green"))},[B,M]=ce();M&&y++;const H=_<f.length&&24<=f.length?n("li",{ref:B,className:"loading",children:n(de,{})}):r;return f.slice(0,y*12).push(H),S(ue,{title:"후기 작성",fullScreen:!0,overflow:"inside",opened:t,onClose:e,className:"create-board-modal-container",children:[n("div",{className:"create-board-input",children:l===null?"":S("article",{className:"selected-item",children:[S("div",{className:"selected-img",children:[n("img",{src:l.img,width:100,height:100}),n("span",{className:"deleted-img",onClick:O,children:n(he,{})})]}),n("span",{className:"searched-title",children:l.title}),n("small",{children:l.service==="naver"?"네이버":l.service==="kakao"?"카카오":"카카오페이지"})]})}),n("div",{className:"create-board-input",children:n(R.Wrapper,{label:"웹툰 검색",required:!0,children:n(R,{disabled:l!==null,placeholder:"작품 또는 작가로 검색한 후 선택하세요.",data:f,value:d,onChange:h=>{N(!0),u(h.target.value);const b=h.target.value;setTimeout(()=>{const A=h.target.value;A===b&&i(A)},500)}})})}),n("ul",{className:"search-result",children:E}),n("div",{className:"create-board-input",children:n(R.Wrapper,{label:"제목",required:!0,children:n(R,{placeholder:"후기 제목을 입력해주세요.",value:c,onChange:h=>{g(h.target.value)}})})}),n("div",{className:"create-board-input",children:n(R.Wrapper,{label:"내용",required:!0,children:n(ee,{minRows:8,maxRows:12,placeholder:"후기 내용을 입력해주세요.",value:v,onChange:h=>{x(h.target.value)}})})}),n("div",{className:"create-board-btn",children:n("button",{onClick:k,children:"후기 작성"})})]})},Ge=()=>{const[a,t]=Y(X),e=()=>{if(ve(be)===null){W(Z,"yellow");return}else t(!a)};return S("div",{className:"create-board-container",children:[n("div",{className:"create-board-btn",onClick:e,children:n(me,{})}),n($e,{isOpen:a,toggle:e})]})};const Qe=()=>{const a=Se(),{state:t}=ye(),[e,r]=Y(_e),o=we(Ce),d=D(xe),u=D(X);s.useEffect(()=>{(async()=>{if(t){const c=await Re(t);r(c)}})()},[t,u]);const p=(i,c)=>{d===null?W(Z,"yellow"):(o(c),a("/board/detail",{state:c._id}))};return S("div",{className:"board-container",children:[(e==null?void 0:e.length)===0?S("div",{className:"empty-board",children:[n("h2",{children:t==="/board"?"후기가 아직 없어요 😥":"해당하는 플랫폼의 후기가 아직 없어요 😥"}),n("h4",{children:"기억에 남는 웹툰의 후기를 작성해보세요."})]}):n("ul",{className:"board-list",children:e==null?void 0:e.map((i,c)=>S("li",{className:"board",onClick:g=>p(g,i),children:[n("div",{className:"board-img-container",children:n("img",{src:i.webtoon.img,className:"board-img"})}),S("div",{className:"board-description",children:[n("h4",{children:i.title}),S("h5",{children:[i.webtoon.title," | ",i.webtoon.author]}),S("div",{className:"creater",children:[n("span",{className:"board-author-img",children:n("img",{src:i.author.profileImage,width:28,height:28})}),"by",n("span",{className:"nickname",children:i.author.nickname})]}),n("p",{children:i.description})]})]},c))}),n(Ge,{})]})};export{Qe as default};
