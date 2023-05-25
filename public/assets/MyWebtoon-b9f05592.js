import{o as $,r as m,q as E,w as d,T as M,$ as je,a0 as ze,X as F,a1 as We,a2 as Be,V as Z,Y as ke,N as Te,y as Ve,j as c,a as I,a3 as j,a4 as Me,a5 as De,E as Ge,L as He,a6 as Ue,k as Ze,a7 as qe,l as Ae}from"./index-8adb18f8.js";import{s as N}from"./Input.styles-b053ed37.js";var Fe=$((e,{orientation:r,buttonBorderWidth:t})=>({root:{display:"flex",flexDirection:r==="vertical"?"column":"row","& [data-button]":{"&:first-of-type":{borderBottomRightRadius:0,[r==="vertical"?"borderBottomLeftRadius":"borderTopRightRadius"]:0,[r==="vertical"?"borderBottomWidth":"borderRightWidth"]:t/2},"&:last-of-type":{borderTopLeftRadius:0,[r==="vertical"?"borderTopRightRadius":"borderBottomLeftRadius"]:0,[r==="vertical"?"borderTopWidth":"borderLeftWidth"]:t/2},"&:not(:first-of-type):not(:last-of-type)":{borderRadius:0,[r==="vertical"?"borderTopWidth":"borderLeftWidth"]:t/2,[r==="vertical"?"borderBottomWidth":"borderRightWidth"]:t/2},"& + [data-button]":{[r==="vertical"?"marginTop":"marginLeft"]:-t,"@media (min-resolution: 192dpi)":{[r==="vertical"?"marginTop":"marginLeft"]:0}}}}}));const Ye=Fe;var Xe=Object.defineProperty,z=Object.getOwnPropertySymbols,me=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable,K=(e,r,t)=>r in e?Xe(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Je=(e,r)=>{for(var t in r||(r={}))me.call(r,t)&&K(e,t,r[t]);if(z)for(var t of z(r))ve.call(r,t)&&K(e,t,r[t]);return e},Ke=(e,r)=>{var t={};for(var a in e)me.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&z)for(var a of z(e))r.indexOf(a)<0&&ve.call(e,a)&&(t[a]=e[a]);return t};const Qe={orientation:"horizontal",buttonBorderWidth:1},ye=m.forwardRef((e,r)=>{const t=E("ButtonGroup",Qe,e),{className:a,orientation:o,buttonBorderWidth:s,unstyled:l}=t,p=Ke(t,["className","orientation","buttonBorderWidth","unstyled"]),{classes:f,cx:n}=Ye({orientation:o,buttonBorderWidth:s},{name:"ButtonGroup",unstyled:l});return d.createElement(M,Je({className:n(f.root,a),ref:r},p))});ye.displayName="@mantine/core/ButtonGroup";var er=Object.defineProperty,rr=Object.defineProperties,tr=Object.getOwnPropertyDescriptors,Q=Object.getOwnPropertySymbols,ar=Object.prototype.hasOwnProperty,or=Object.prototype.propertyIsEnumerable,ee=(e,r,t)=>r in e?er(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,P=(e,r)=>{for(var t in r||(r={}))ar.call(r,t)&&ee(e,t,r[t]);if(Q)for(var t of Q(r))or.call(r,t)&&ee(e,t,r[t]);return e},q=(e,r)=>rr(e,tr(r));const A={xs:{height:N.xs,paddingLeft:14,paddingRight:14},sm:{height:N.sm,paddingLeft:18,paddingRight:18},md:{height:N.md,paddingLeft:22,paddingRight:22},lg:{height:N.lg,paddingLeft:26,paddingRight:26},xl:{height:N.xl,paddingLeft:32,paddingRight:32},"compact-xs":{height:22,paddingLeft:7,paddingRight:7},"compact-sm":{height:26,paddingLeft:8,paddingRight:8},"compact-md":{height:30,paddingLeft:10,paddingRight:10},"compact-lg":{height:34,paddingLeft:12,paddingRight:12},"compact-xl":{height:40,paddingLeft:14,paddingRight:14}};function nr({compact:e,size:r,withLeftIcon:t,withRightIcon:a}){if(e)return A[`compact-${r}`];const o=A[r];return q(P({},o),{paddingLeft:t?o.paddingLeft/1.5:o.paddingLeft,paddingRight:a?o.paddingRight/1.5:o.paddingRight})}const sr=e=>({display:e?"block":"inline-block",width:e?"100%":"auto"});function ir({variant:e,theme:r,color:t,gradient:a}){const o=r.fn.variant({color:t,variant:e,gradient:a});return e==="gradient"?{border:0,backgroundImage:o.background,color:o.color,"&:hover":r.fn.hover({backgroundSize:"200%"})}:P({border:`1px solid ${o.border}`,backgroundColor:o.background,color:o.color},r.fn.hover({backgroundColor:o.hover}))}var lr=$((e,{color:r,size:t,radius:a,fullWidth:o,compact:s,gradient:l,variant:p,withLeftIcon:f,withRightIcon:n})=>({root:q(P(q(P(P(P(P({},nr({compact:s,size:t,withLeftIcon:f,withRightIcon:n})),e.fn.fontStyles()),e.fn.focusStyles()),sr(o)),{borderRadius:e.fn.radius(a),fontWeight:600,position:"relative",lineHeight:1,fontSize:e.fn.size({size:t,sizes:e.fontSizes}),userSelect:"none",cursor:"pointer"}),ir({variant:p,theme:e,color:r,gradient:l})),{"&:active":e.activeStyles,"&[data-disabled]":{borderColor:"transparent",backgroundColor:e.colorScheme==="dark"?e.colors.dark[4]:e.colors.gray[2],color:e.colorScheme==="dark"?e.colors.dark[6]:e.colors.gray[5],cursor:"not-allowed","&:active":{transform:"none"}},"&[data-loading]":{pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,backgroundColor:e.colorScheme==="dark"?e.fn.rgba(e.colors.dark[7],.5):"rgba(255, 255, 255, .5)",borderRadius:e.fn.radius(a),cursor:"not-allowed"}}}),icon:{display:"flex",alignItems:"center"},leftIcon:{marginRight:10},rightIcon:{marginLeft:10},inner:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"},label:{whiteSpace:"nowrap",height:"100%",overflow:"hidden",display:"flex",alignItems:"center"}}));const dr=lr;var cr=Object.defineProperty,W=Object.getOwnPropertySymbols,_e=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable,re=(e,r,t)=>r in e?cr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,te=(e,r)=>{for(var t in r||(r={}))_e.call(r,t)&&re(e,t,r[t]);if(W)for(var t of W(r))he.call(r,t)&&re(e,t,r[t]);return e},pr=(e,r)=>{var t={};for(var a in e)_e.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&W)for(var a of W(e))r.indexOf(a)<0&&he.call(e,a)&&(t[a]=e[a]);return t};const fr={size:"sm",type:"button",variant:"filled",loaderPosition:"left"},Y=m.forwardRef((e,r)=>{const t=E("Button",fr,e),{className:a,size:o,color:s,type:l,disabled:p,children:f,leftIcon:n,rightIcon:i,fullWidth:g,variant:y,radius:v,uppercase:_,compact:S,loading:u,loaderPosition:h,loaderProps:D,gradient:G,classNames:w,styles:H,unstyled:R}=t,x=pr(t,["className","size","color","type","disabled","children","leftIcon","rightIcon","fullWidth","variant","radius","uppercase","compact","loading","loaderPosition","loaderProps","gradient","classNames","styles","unstyled"]),{classes:b,cx:O,theme:L}=dr({radius:v,color:s,size:o,fullWidth:g,compact:S,gradient:G,variant:y,withLeftIcon:!!n,withRightIcon:!!i},{name:"Button",unstyled:R,classNames:w,styles:H}),C=L.fn.variant({color:s,variant:y}),J=d.createElement(je,te({color:C.color,size:L.fn.size({size:o,sizes:A}).height/2},D));return d.createElement(ze,te({className:O(b.root,a),type:l,disabled:p||u,"data-button":!0,"data-disabled":p||void 0,"data-loading":u||void 0,ref:r,unstyled:R},x),d.createElement("div",{className:b.inner},(n||u&&h==="left")&&d.createElement("span",{className:O(b.icon,b.leftIcon)},u&&h==="left"?J:n),d.createElement("span",{className:b.label,style:{textTransform:_?"uppercase":void 0}},f),(i||u&&h==="right")&&d.createElement("span",{className:O(b.icon,b.rightIcon)},u&&h==="right"?J:i)))});Y.displayName="@mantine/core/Button";Y.Group=ye;const ae=F(Y),be=m.createContext({padding:0}),gr=be.Provider,ur=()=>m.useContext(be).padding;var mr=$((e,{padding:r,withBorder:t,inheritPadding:a})=>{const o=e.fn.size({size:r,sizes:e.spacing}),s=-1*o,l=e.colorScheme==="dark"?e.colors.dark[4]:e.colors.gray[3];return{cardSection:{display:"block",marginLeft:s,marginRight:s,paddingLeft:a?o:void 0,paddingRight:a?o:void 0,borderTop:t&&`1px solid ${l}`,borderBottom:t&&`1px solid ${l}`,"& + &":{borderTop:0},"&[data-first]":{marginTop:s,borderTop:0,borderBottom:t&&`1px solid ${l}`},"&[data-last]":{marginBottom:s,borderBottom:0}}}});const vr=mr;var yr=Object.defineProperty,B=Object.getOwnPropertySymbols,we=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable,oe=(e,r,t)=>r in e?yr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,_r=(e,r)=>{for(var t in r||(r={}))we.call(r,t)&&oe(e,t,r[t]);if(B)for(var t of B(r))Pe.call(r,t)&&oe(e,t,r[t]);return e},hr=(e,r)=>{var t={};for(var a in e)we.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&B)for(var a of B(e))r.indexOf(a)<0&&Pe.call(e,a)&&(t[a]=e[a]);return t};const Oe=m.forwardRef((e,r)=>{var t=e,{className:a,withBorder:o=!1,inheritPadding:s=!1,unstyled:l}=t,p=hr(t,["className","withBorder","inheritPadding","unstyled"]);const{classes:f,cx:n}=vr({padding:ur(),withBorder:o,inheritPadding:s},{name:"Card",unstyled:l});return d.createElement(M,_r({className:n(f.cardSection,a),ref:r},p))});Oe.displayName="@mantine/core/CardSection";const $e=F(Oe);var br=$(e=>({root:{position:"relative",overflow:"hidden",backgroundColor:e.colorScheme==="dark"?e.colors.dark[6]:e.white}}));const wr=br;var Pr=Object.defineProperty,k=Object.getOwnPropertySymbols,Se=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable,ne=(e,r,t)=>r in e?Pr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Or=(e,r)=>{for(var t in r||(r={}))Se.call(r,t)&&ne(e,t,r[t]);if(k)for(var t of k(r))Ce.call(r,t)&&ne(e,t,r[t]);return e},$r=(e,r)=>{var t={};for(var a in e)Se.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&k)for(var a of k(e))r.indexOf(a)<0&&Ce.call(e,a)&&(t[a]=e[a]);return t};const Sr={p:"md"},X=m.forwardRef((e,r)=>{const t=E("Card",Sr,e),{className:a,p:o,radius:s,children:l,unstyled:p}=t,f=$r(t,["className","p","radius","children","unstyled"]),{classes:n,cx:i}=wr(null,{name:"Card",unstyled:p}),g=m.Children.toArray(l),y=g.map((v,_)=>typeof v=="object"&&v&&"type"in v&&v.type===$e?m.cloneElement(v,{padding:o,"data-first":_===0||void 0,"data-last":_===g.length-1||void 0}):v);return d.createElement(gr,{value:{padding:o}},d.createElement(We,Or({className:i(n.root,a),radius:s,p:o,ref:r},f),y))});X.Section=$e;X.displayName="@mantine/core/Card";const se=F(X);function Cr(e){return m.Children.toArray(e).filter(Boolean)}const Nr={left:"flex-start",center:"center",right:"flex-end",apart:"space-between"};var Er=$((e,{spacing:r,position:t,noWrap:a,grow:o,align:s,count:l})=>({root:{boxSizing:"border-box",display:"flex",flexDirection:"row",alignItems:s||"center",flexWrap:a?"nowrap":"wrap",justifyContent:Nr[t],gap:e.fn.size({size:r,sizes:e.spacing})},child:{boxSizing:"border-box",maxWidth:o?`calc(${100/l}% - ${e.fn.size({size:r,sizes:e.spacing})-e.fn.size({size:r,sizes:e.spacing})/l}px)`:void 0,flexGrow:o?1:0}}));const Rr=Er;var xr=Object.defineProperty,T=Object.getOwnPropertySymbols,Ne=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable,ie=(e,r,t)=>r in e?xr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Lr=(e,r)=>{for(var t in r||(r={}))Ne.call(r,t)&&ie(e,t,r[t]);if(T)for(var t of T(r))Ee.call(r,t)&&ie(e,t,r[t]);return e},Ir=(e,r)=>{var t={};for(var a in e)Ne.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&T)for(var a of T(e))r.indexOf(a)<0&&Ee.call(e,a)&&(t[a]=e[a]);return t};const jr={position:"left",spacing:"md"},Re=m.forwardRef((e,r)=>{const t=E("Group",jr,e),{className:a,position:o,align:s,children:l,noWrap:p,grow:f,spacing:n,unstyled:i}=t,g=Ir(t,["className","position","align","children","noWrap","grow","spacing","unstyled"]),y=Cr(l),{classes:v,cx:_}=Rr({align:s,grow:f,noWrap:p,spacing:n,position:o,count:y.length},{unstyled:i,name:"Group"}),S=y.map(u=>{var h;return typeof u=="object"&&u!==null&&"props"in u?d.cloneElement(u,{className:_(v.child,(h=u.props)==null?void 0:h.className)}):u});return d.createElement(M,Lr({className:_(v.root,a),ref:r},g),S)});Re.displayName="@mantine/core/Group";var zr=Object.defineProperty,le=Object.getOwnPropertySymbols,Wr=Object.prototype.hasOwnProperty,Br=Object.prototype.propertyIsEnumerable,de=(e,r,t)=>r in e?zr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,kr=(e,r)=>{for(var t in r||(r={}))Wr.call(r,t)&&de(e,t,r[t]);if(le)for(var t of le(r))Br.call(r,t)&&de(e,t,r[t]);return e};function Tr(e){return d.createElement("svg",kr({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),d.createElement("path",{d:"M2.5 1H12.5C13.3284 1 14 1.67157 14 2.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V2.5C1 1.67157 1.67157 1 2.5 1ZM2.5 2C2.22386 2 2 2.22386 2 2.5V8.3636L3.6818 6.6818C3.76809 6.59551 3.88572 6.54797 4.00774 6.55007C4.12975 6.55216 4.24568 6.60372 4.32895 6.69293L7.87355 10.4901L10.6818 7.6818C10.8575 7.50607 11.1425 7.50607 11.3182 7.6818L13 9.3636V2.5C13 2.22386 12.7761 2 12.5 2H2.5ZM2 12.5V9.6364L3.98887 7.64753L7.5311 11.4421L8.94113 13H2.5C2.22386 13 2 12.7761 2 12.5ZM12.5 13H10.155L8.48336 11.153L11 8.6364L13 10.6364V12.5C13 12.7761 12.7761 13 12.5 13ZM6.64922 5.5C6.64922 5.03013 7.03013 4.64922 7.5 4.64922C7.96987 4.64922 8.35078 5.03013 8.35078 5.5C8.35078 5.96987 7.96987 6.35078 7.5 6.35078C7.03013 6.35078 6.64922 5.96987 6.64922 5.5ZM7.5 3.74922C6.53307 3.74922 5.74922 4.53307 5.74922 5.5C5.74922 6.46693 6.53307 7.25078 7.5 7.25078C8.46693 7.25078 9.25078 6.46693 9.25078 5.5C9.25078 4.53307 8.46693 3.74922 7.5 3.74922Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}var Vr=Object.defineProperty,Mr=Object.defineProperties,Dr=Object.getOwnPropertyDescriptors,ce=Object.getOwnPropertySymbols,Gr=Object.prototype.hasOwnProperty,Hr=Object.prototype.propertyIsEnumerable,pe=(e,r,t)=>r in e?Vr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,fe=(e,r)=>{for(var t in r||(r={}))Gr.call(r,t)&&pe(e,t,r[t]);if(ce)for(var t of ce(r))Hr.call(r,t)&&pe(e,t,r[t]);return e},ge=(e,r)=>Mr(e,Dr(r)),Ur=$((e,{radius:r})=>({root:{},imageWrapper:{position:"relative"},figure:{margin:0},image:ge(fe({},e.fn.fontStyles()),{display:"block",width:"100%",height:"100%",border:0,borderRadius:e.fn.size({size:r,sizes:e.radius})}),caption:{color:e.colorScheme==="dark"?e.colors.dark[2]:e.colors.gray[7],marginTop:e.spacing.xs},placeholder:ge(fe({},e.fn.cover()),{display:"flex",alignItems:"center",justifyContent:"center",color:e.colorScheme==="dark"?e.colors.dark[2]:e.colors.gray[6],backgroundColor:e.colorScheme==="dark"?e.colors.dark[8]:e.colors.gray[0],borderRadius:e.fn.size({size:r,sizes:e.radius})})}));const Zr=Ur;var qr=Object.defineProperty,V=Object.getOwnPropertySymbols,xe=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable,ue=(e,r,t)=>r in e?qr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,U=(e,r)=>{for(var t in r||(r={}))xe.call(r,t)&&ue(e,t,r[t]);if(V)for(var t of V(r))Le.call(r,t)&&ue(e,t,r[t]);return e},Ar=(e,r)=>{var t={};for(var a in e)xe.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&V)for(var a of V(e))r.indexOf(a)<0&&Le.call(e,a)&&(t[a]=e[a]);return t};const Fr={fit:"cover",width:"100%",height:"auto",radius:0},Ie=m.forwardRef((e,r)=>{const t=E("Image",Fr,e),{className:a,alt:o,src:s,fit:l,width:p,height:f,radius:n,imageProps:i,withPlaceholder:g,placeholder:y,imageRef:v,classNames:_,styles:S,caption:u,unstyled:h,style:D}=t,G=Ar(t,["className","alt","src","fit","width","height","radius","imageProps","withPlaceholder","placeholder","imageRef","classNames","styles","caption","unstyled","style"]),{classes:w,cx:H}=Zr({radius:n},{classNames:_,styles:S,unstyled:h,name:"Image"}),[R,x]=m.useState(!1),[b,O]=m.useState(!s),L=g&&(!R||b);return Be(()=>{x(!1),O(!1)},[s]),d.createElement(M,U({className:H(w.root,a),ref:r,style:U({width:p,height:f},D)},G),d.createElement("figure",{className:w.figure},d.createElement("div",{className:w.imageWrapper},d.createElement("img",U({className:w.image,src:s,alt:o,style:{objectFit:l,width:p,height:f},ref:v,onLoad:C=>{x(!0),typeof(i==null?void 0:i.onLoad)=="function"&&i.onLoad(C)},onError:C=>{O(!0),typeof(i==null?void 0:i.onError)=="function"&&i.onError(C)}},i)),L&&d.createElement("div",{className:w.placeholder,title:o},y||d.createElement(Tr,{style:{width:40,height:40}}))),!!u&&d.createElement(Z,{component:"figcaption",size:"sm",align:"center",className:w.caption},u)))});Ie.displayName="@mantine/core/Image";ke({key:"userInfoState",default:null});const Jr=()=>{const e=Te(),{data:r,isLoading:t}=Ve(),[a,o]=m.useState(),s=[],l=n=>{e("/webtoon",{state:{webtoonDetailData:n}})},p=async(n,i)=>{const g={_id:i};n.stopPropagation(),(await Ue(g)).RESULT===200&&Ze(qe,"green")},f=async n=>{const i=await Ae(n);s.push(i)};return m.useEffect(()=>{(async()=>{for(let i=0;i<(r==null?void 0:r.myWebtoon.length);i++)await f(r==null?void 0:r.myWebtoon[i]);o(s)})()},[]),c("div",{className:"mywebtoon-container",children:(a==null?void 0:a.length)!==0?c("div",{className:"mywebtoon-list",children:a==null?void 0:a.map((n,i)=>I(se,{shadow:"sm",p:"lg",radius:"md",withBorder:!0,className:"webtoon-card",onClick:()=>l(n),children:[c(se.Section,{children:c(Ie,{src:n.img,alt:"Norway"})}),I(Re,{position:"apart",mt:"md",children:[c(Z,{weight:500,children:n.title}),I(j,{shadow:"md",width:110,position:"bottom-end",children:[c(j.Target,{children:c(ae,{variant:"subtle",size:"xs",onClick:g=>g.stopPropagation(),children:c(Me,{color:"grey"})})}),c(j.Dropdown,{children:c(j.Item,{onClick:g=>p(g,n._id),color:"red",icon:c(De,{size:14}),children:"웹툰 삭제"})})]})]}),c(Z,{size:"sm",color:"dimmed",children:n.author}),c("a",{href:n.url,target:"_blank",onClick:g=>g.stopPropagation(),rel:"noreferrer",children:c(ae,{variant:"light",color:"blue",fullWidth:!0,mt:"md",radius:"md",children:"웹툰 보러가기"})})]},i))}):c(Ge,{className:"webtoon-list-empty",content:I("div",{children:[c("h2",{children:"마이 웹툰이 비어있습니다 :("}),c("h3",{children:"좋아하는 웹툰을 저장해보세요!"}),c(He,{to:"/",children:c("button",{className:"mywebtoon-save-btn",children:"웹툰보러가기"})})]})})})};export{Jr as default};