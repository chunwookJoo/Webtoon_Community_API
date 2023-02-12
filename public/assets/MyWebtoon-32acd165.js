import{k as $,r as m,l as x,R as d,K as M,Q as je,V as ze,N as F,X as We,Y as Be,T as U,y as ke,v as Te,q as Ve,a as c,j as N,Z as j,$ as Me,a0 as De,a1 as Ge,a2 as Ze,s as He,a3 as Ue,a4 as qe}from"./index-a90ff333.js";import{s as R}from"./Input.styles-73bb39d9.js";var Ae=$((e,{orientation:r,buttonBorderWidth:t})=>({root:{display:"flex",flexDirection:r==="vertical"?"column":"row","& [data-button]":{"&:first-of-type":{borderBottomRightRadius:0,[r==="vertical"?"borderBottomLeftRadius":"borderTopRightRadius"]:0,[r==="vertical"?"borderBottomWidth":"borderRightWidth"]:t/2},"&:last-of-type":{borderTopLeftRadius:0,[r==="vertical"?"borderTopRightRadius":"borderBottomLeftRadius"]:0,[r==="vertical"?"borderTopWidth":"borderLeftWidth"]:t/2},"&:not(:first-of-type):not(:last-of-type)":{borderRadius:0,[r==="vertical"?"borderTopWidth":"borderLeftWidth"]:t/2,[r==="vertical"?"borderBottomWidth":"borderRightWidth"]:t/2},"& + [data-button]":{[r==="vertical"?"marginTop":"marginLeft"]:-t,"@media (min-resolution: 192dpi)":{[r==="vertical"?"marginTop":"marginLeft"]:0}}}}}));const Fe=Ae;var Ye=Object.defineProperty,z=Object.getOwnPropertySymbols,me=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable,X=(e,r,t)=>r in e?Ye(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Ke=(e,r)=>{for(var t in r||(r={}))me.call(r,t)&&X(e,t,r[t]);if(z)for(var t of z(r))ve.call(r,t)&&X(e,t,r[t]);return e},Qe=(e,r)=>{var t={};for(var o in e)me.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&z)for(var o of z(e))r.indexOf(o)<0&&ve.call(e,o)&&(t[o]=e[o]);return t};const Xe={orientation:"horizontal",buttonBorderWidth:1},ye=m.forwardRef((e,r)=>{const t=x("ButtonGroup",Xe,e),{className:o,orientation:a,buttonBorderWidth:s,unstyled:l}=t,p=Qe(t,["className","orientation","buttonBorderWidth","unstyled"]),{classes:f,cx:n}=Fe({orientation:a,buttonBorderWidth:s},{name:"ButtonGroup",unstyled:l});return d.createElement(M,Ke({className:n(f.root,o),ref:r},p))});ye.displayName="@mantine/core/ButtonGroup";var Je=Object.defineProperty,er=Object.defineProperties,rr=Object.getOwnPropertyDescriptors,J=Object.getOwnPropertySymbols,tr=Object.prototype.hasOwnProperty,or=Object.prototype.propertyIsEnumerable,ee=(e,r,t)=>r in e?Je(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,w=(e,r)=>{for(var t in r||(r={}))tr.call(r,t)&&ee(e,t,r[t]);if(J)for(var t of J(r))or.call(r,t)&&ee(e,t,r[t]);return e},q=(e,r)=>er(e,rr(r));const A={xs:{height:R.xs,paddingLeft:14,paddingRight:14},sm:{height:R.sm,paddingLeft:18,paddingRight:18},md:{height:R.md,paddingLeft:22,paddingRight:22},lg:{height:R.lg,paddingLeft:26,paddingRight:26},xl:{height:R.xl,paddingLeft:32,paddingRight:32},"compact-xs":{height:22,paddingLeft:7,paddingRight:7},"compact-sm":{height:26,paddingLeft:8,paddingRight:8},"compact-md":{height:30,paddingLeft:10,paddingRight:10},"compact-lg":{height:34,paddingLeft:12,paddingRight:12},"compact-xl":{height:40,paddingLeft:14,paddingRight:14}};function ar({compact:e,size:r,withLeftIcon:t,withRightIcon:o}){if(e)return A[`compact-${r}`];const a=A[r];return q(w({},a),{paddingLeft:t?a.paddingLeft/1.5:a.paddingLeft,paddingRight:o?a.paddingRight/1.5:a.paddingRight})}const nr=e=>({display:e?"block":"inline-block",width:e?"100%":"auto"});function sr({variant:e,theme:r,color:t,gradient:o}){const a=r.fn.variant({color:t,variant:e,gradient:o});return e==="gradient"?{border:0,backgroundImage:a.background,color:a.color,"&:hover":r.fn.hover({backgroundSize:"200%"})}:w({border:`1px solid ${a.border}`,backgroundColor:a.background,color:a.color},r.fn.hover({backgroundColor:a.hover}))}var ir=$((e,{color:r,size:t,radius:o,fullWidth:a,compact:s,gradient:l,variant:p,withLeftIcon:f,withRightIcon:n})=>({root:q(w(q(w(w(w(w({},ar({compact:s,size:t,withLeftIcon:f,withRightIcon:n})),e.fn.fontStyles()),e.fn.focusStyles()),nr(a)),{borderRadius:e.fn.radius(o),fontWeight:600,position:"relative",lineHeight:1,fontSize:e.fn.size({size:t,sizes:e.fontSizes}),userSelect:"none",cursor:"pointer"}),sr({variant:p,theme:e,color:r,gradient:l})),{"&:active":e.activeStyles,"&[data-disabled]":{borderColor:"transparent",backgroundColor:e.colorScheme==="dark"?e.colors.dark[4]:e.colors.gray[2],color:e.colorScheme==="dark"?e.colors.dark[6]:e.colors.gray[5],cursor:"not-allowed","&:active":{transform:"none"}},"&[data-loading]":{pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,backgroundColor:e.colorScheme==="dark"?e.fn.rgba(e.colors.dark[7],.5):"rgba(255, 255, 255, .5)",borderRadius:e.fn.radius(o),cursor:"not-allowed"}}}),icon:{display:"flex",alignItems:"center"},leftIcon:{marginRight:10},rightIcon:{marginLeft:10},inner:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"},label:{whiteSpace:"nowrap",height:"100%",overflow:"hidden",display:"flex",alignItems:"center"}}));const lr=ir;var dr=Object.defineProperty,W=Object.getOwnPropertySymbols,_e=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable,re=(e,r,t)=>r in e?dr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,te=(e,r)=>{for(var t in r||(r={}))_e.call(r,t)&&re(e,t,r[t]);if(W)for(var t of W(r))he.call(r,t)&&re(e,t,r[t]);return e},cr=(e,r)=>{var t={};for(var o in e)_e.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&W)for(var o of W(e))r.indexOf(o)<0&&he.call(e,o)&&(t[o]=e[o]);return t};const pr={size:"sm",type:"button",variant:"filled",loaderPosition:"left"},Y=m.forwardRef((e,r)=>{const t=x("Button",pr,e),{className:o,size:a,color:s,type:l,disabled:p,children:f,leftIcon:n,rightIcon:i,fullWidth:g,variant:y,radius:v,uppercase:_,compact:S,loading:u,loaderPosition:h,loaderProps:D,gradient:G,classNames:P,styles:Z,unstyled:E}=t,I=cr(t,["className","size","color","type","disabled","children","leftIcon","rightIcon","fullWidth","variant","radius","uppercase","compact","loading","loaderPosition","loaderProps","gradient","classNames","styles","unstyled"]),{classes:b,cx:O,theme:L}=lr({radius:v,color:s,size:a,fullWidth:g,compact:S,gradient:G,variant:y,withLeftIcon:!!n,withRightIcon:!!i},{name:"Button",unstyled:E,classNames:P,styles:Z}),C=L.fn.variant({color:s,variant:y}),Q=d.createElement(je,te({color:C.color,size:L.fn.size({size:a,sizes:A}).height/2},D));return d.createElement(ze,te({className:O(b.root,o),type:l,disabled:p||u,"data-button":!0,"data-disabled":p||void 0,"data-loading":u||void 0,ref:r,unstyled:E},I),d.createElement("div",{className:b.inner},(n||u&&h==="left")&&d.createElement("span",{className:O(b.icon,b.leftIcon)},u&&h==="left"?Q:n),d.createElement("span",{className:b.label,style:{textTransform:_?"uppercase":void 0}},f),(i||u&&h==="right")&&d.createElement("span",{className:O(b.icon,b.rightIcon)},u&&h==="right"?Q:i)))});Y.displayName="@mantine/core/Button";Y.Group=ye;const oe=F(Y),be=m.createContext({padding:0}),fr=be.Provider,gr=()=>m.useContext(be).padding;var ur=$((e,{padding:r,withBorder:t,inheritPadding:o})=>{const a=e.fn.size({size:r,sizes:e.spacing}),s=-1*a,l=e.colorScheme==="dark"?e.colors.dark[4]:e.colors.gray[3];return{cardSection:{display:"block",marginLeft:s,marginRight:s,paddingLeft:o?a:void 0,paddingRight:o?a:void 0,borderTop:t&&`1px solid ${l}`,borderBottom:t&&`1px solid ${l}`,"& + &":{borderTop:0},"&[data-first]":{marginTop:s,borderTop:0,borderBottom:t&&`1px solid ${l}`},"&[data-last]":{marginBottom:s,borderBottom:0}}}});const mr=ur;var vr=Object.defineProperty,B=Object.getOwnPropertySymbols,Pe=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable,ae=(e,r,t)=>r in e?vr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,yr=(e,r)=>{for(var t in r||(r={}))Pe.call(r,t)&&ae(e,t,r[t]);if(B)for(var t of B(r))we.call(r,t)&&ae(e,t,r[t]);return e},_r=(e,r)=>{var t={};for(var o in e)Pe.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&B)for(var o of B(e))r.indexOf(o)<0&&we.call(e,o)&&(t[o]=e[o]);return t};const Oe=m.forwardRef((e,r)=>{var t=e,{className:o,withBorder:a=!1,inheritPadding:s=!1,unstyled:l}=t,p=_r(t,["className","withBorder","inheritPadding","unstyled"]);const{classes:f,cx:n}=mr({padding:gr(),withBorder:a,inheritPadding:s},{name:"Card",unstyled:l});return d.createElement(M,yr({className:n(f.cardSection,o),ref:r},p))});Oe.displayName="@mantine/core/CardSection";const $e=F(Oe);var hr=$(e=>({root:{position:"relative",overflow:"hidden",backgroundColor:e.colorScheme==="dark"?e.colors.dark[6]:e.white}}));const br=hr;var Pr=Object.defineProperty,k=Object.getOwnPropertySymbols,Se=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable,ne=(e,r,t)=>r in e?Pr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,wr=(e,r)=>{for(var t in r||(r={}))Se.call(r,t)&&ne(e,t,r[t]);if(k)for(var t of k(r))Ce.call(r,t)&&ne(e,t,r[t]);return e},Or=(e,r)=>{var t={};for(var o in e)Se.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&k)for(var o of k(e))r.indexOf(o)<0&&Ce.call(e,o)&&(t[o]=e[o]);return t};const $r={p:"md"},K=m.forwardRef((e,r)=>{const t=x("Card",$r,e),{className:o,p:a,radius:s,children:l,unstyled:p}=t,f=Or(t,["className","p","radius","children","unstyled"]),{classes:n,cx:i}=br(null,{name:"Card",unstyled:p}),g=m.Children.toArray(l),y=g.map((v,_)=>typeof v=="object"&&v&&"type"in v&&v.type===$e?m.cloneElement(v,{padding:a,"data-first":_===0||void 0,"data-last":_===g.length-1||void 0}):v);return d.createElement(fr,{value:{padding:a}},d.createElement(We,wr({className:i(n.root,o),radius:s,p:a,ref:r},f),y))});K.Section=$e;K.displayName="@mantine/core/Card";const se=F(K);function Sr(e){return m.Children.toArray(e).filter(Boolean)}const Cr={left:"flex-start",center:"center",right:"flex-end",apart:"space-between"};var Nr=$((e,{spacing:r,position:t,noWrap:o,grow:a,align:s,count:l})=>({root:{boxSizing:"border-box",display:"flex",flexDirection:"row",alignItems:s||"center",flexWrap:o?"nowrap":"wrap",justifyContent:Cr[t],gap:e.fn.size({size:r,sizes:e.spacing})},child:{boxSizing:"border-box",maxWidth:a?`calc(${100/l}% - ${e.fn.size({size:r,sizes:e.spacing})-e.fn.size({size:r,sizes:e.spacing})/l}px)`:void 0,flexGrow:a?1:0}}));const Rr=Nr;var xr=Object.defineProperty,T=Object.getOwnPropertySymbols,Ne=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable,ie=(e,r,t)=>r in e?xr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Er=(e,r)=>{for(var t in r||(r={}))Ne.call(r,t)&&ie(e,t,r[t]);if(T)for(var t of T(r))Re.call(r,t)&&ie(e,t,r[t]);return e},Ir=(e,r)=>{var t={};for(var o in e)Ne.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&T)for(var o of T(e))r.indexOf(o)<0&&Re.call(e,o)&&(t[o]=e[o]);return t};const Lr={position:"left",spacing:"md"},xe=m.forwardRef((e,r)=>{const t=x("Group",Lr,e),{className:o,position:a,align:s,children:l,noWrap:p,grow:f,spacing:n,unstyled:i}=t,g=Ir(t,["className","position","align","children","noWrap","grow","spacing","unstyled"]),y=Sr(l),{classes:v,cx:_}=Rr({align:s,grow:f,noWrap:p,spacing:n,position:a,count:y.length},{unstyled:i,name:"Group"}),S=y.map(u=>{var h;return typeof u=="object"&&u!==null&&"props"in u?d.cloneElement(u,{className:_(v.child,(h=u.props)==null?void 0:h.className)}):u});return d.createElement(M,Er({className:_(v.root,o),ref:r},g),S)});xe.displayName="@mantine/core/Group";var jr=Object.defineProperty,le=Object.getOwnPropertySymbols,zr=Object.prototype.hasOwnProperty,Wr=Object.prototype.propertyIsEnumerable,de=(e,r,t)=>r in e?jr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Br=(e,r)=>{for(var t in r||(r={}))zr.call(r,t)&&de(e,t,r[t]);if(le)for(var t of le(r))Wr.call(r,t)&&de(e,t,r[t]);return e};function kr(e){return d.createElement("svg",Br({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),d.createElement("path",{d:"M2.5 1H12.5C13.3284 1 14 1.67157 14 2.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V2.5C1 1.67157 1.67157 1 2.5 1ZM2.5 2C2.22386 2 2 2.22386 2 2.5V8.3636L3.6818 6.6818C3.76809 6.59551 3.88572 6.54797 4.00774 6.55007C4.12975 6.55216 4.24568 6.60372 4.32895 6.69293L7.87355 10.4901L10.6818 7.6818C10.8575 7.50607 11.1425 7.50607 11.3182 7.6818L13 9.3636V2.5C13 2.22386 12.7761 2 12.5 2H2.5ZM2 12.5V9.6364L3.98887 7.64753L7.5311 11.4421L8.94113 13H2.5C2.22386 13 2 12.7761 2 12.5ZM12.5 13H10.155L8.48336 11.153L11 8.6364L13 10.6364V12.5C13 12.7761 12.7761 13 12.5 13ZM6.64922 5.5C6.64922 5.03013 7.03013 4.64922 7.5 4.64922C7.96987 4.64922 8.35078 5.03013 8.35078 5.5C8.35078 5.96987 7.96987 6.35078 7.5 6.35078C7.03013 6.35078 6.64922 5.96987 6.64922 5.5ZM7.5 3.74922C6.53307 3.74922 5.74922 4.53307 5.74922 5.5C5.74922 6.46693 6.53307 7.25078 7.5 7.25078C8.46693 7.25078 9.25078 6.46693 9.25078 5.5C9.25078 4.53307 8.46693 3.74922 7.5 3.74922Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}var Tr=Object.defineProperty,Vr=Object.defineProperties,Mr=Object.getOwnPropertyDescriptors,ce=Object.getOwnPropertySymbols,Dr=Object.prototype.hasOwnProperty,Gr=Object.prototype.propertyIsEnumerable,pe=(e,r,t)=>r in e?Tr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,fe=(e,r)=>{for(var t in r||(r={}))Dr.call(r,t)&&pe(e,t,r[t]);if(ce)for(var t of ce(r))Gr.call(r,t)&&pe(e,t,r[t]);return e},ge=(e,r)=>Vr(e,Mr(r)),Zr=$((e,{radius:r})=>({root:{},imageWrapper:{position:"relative"},figure:{margin:0},image:ge(fe({},e.fn.fontStyles()),{display:"block",width:"100%",height:"100%",border:0,borderRadius:e.fn.size({size:r,sizes:e.radius})}),caption:{color:e.colorScheme==="dark"?e.colors.dark[2]:e.colors.gray[7],marginTop:e.spacing.xs},placeholder:ge(fe({},e.fn.cover()),{display:"flex",alignItems:"center",justifyContent:"center",color:e.colorScheme==="dark"?e.colors.dark[2]:e.colors.gray[6],backgroundColor:e.colorScheme==="dark"?e.colors.dark[8]:e.colors.gray[0],borderRadius:e.fn.size({size:r,sizes:e.radius})})}));const Hr=Zr;var Ur=Object.defineProperty,V=Object.getOwnPropertySymbols,Ee=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable,ue=(e,r,t)=>r in e?Ur(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,H=(e,r)=>{for(var t in r||(r={}))Ee.call(r,t)&&ue(e,t,r[t]);if(V)for(var t of V(r))Ie.call(r,t)&&ue(e,t,r[t]);return e},qr=(e,r)=>{var t={};for(var o in e)Ee.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&V)for(var o of V(e))r.indexOf(o)<0&&Ie.call(e,o)&&(t[o]=e[o]);return t};const Ar={fit:"cover",width:"100%",height:"auto",radius:0},Le=m.forwardRef((e,r)=>{const t=x("Image",Ar,e),{className:o,alt:a,src:s,fit:l,width:p,height:f,radius:n,imageProps:i,withPlaceholder:g,placeholder:y,imageRef:v,classNames:_,styles:S,caption:u,unstyled:h,style:D}=t,G=qr(t,["className","alt","src","fit","width","height","radius","imageProps","withPlaceholder","placeholder","imageRef","classNames","styles","caption","unstyled","style"]),{classes:P,cx:Z}=Hr({radius:n},{classNames:_,styles:S,unstyled:h,name:"Image"}),[E,I]=m.useState(!1),[b,O]=m.useState(!s),L=g&&(!E||b);return Be(()=>{I(!1),O(!1)},[s]),d.createElement(M,H({className:Z(P.root,o),ref:r,style:H({width:p,height:f},D)},G),d.createElement("figure",{className:P.figure},d.createElement("div",{className:P.imageWrapper},d.createElement("img",H({className:P.image,src:s,alt:a,style:{objectFit:l,width:p,height:f},ref:v,onLoad:C=>{I(!0),typeof(i==null?void 0:i.onLoad)=="function"&&i.onLoad(C)},onError:C=>{O(!0),typeof(i==null?void 0:i.onError)=="function"&&i.onError(C)}},i)),L&&d.createElement("div",{className:P.placeholder,title:a},y||d.createElement(kr,{style:{width:40,height:40}}))),!!u&&d.createElement(U,{component:"figcaption",size:"sm",align:"center",className:P.caption},u)))});Le.displayName="@mantine/core/Image";const Kr=()=>{const e=ke(),[r,t]=Te(Ve),[o,a]=m.useState(),s=[],l=n=>{e("/webtoon",{state:{webtoonDetailData:n}})},p=async(n,i)=>{const g={_id:i};n.stopPropagation();const y=await Ze(g);y.RESULT===200&&(t(y.user),He(Ue,"green"))},f=async n=>{const i=await qe(n);s.push(i)};return m.useEffect(()=>{(async()=>{for(let i=0;i<r.myWebtoon.length;i++)await f(r.myWebtoon[i]);a(s)})()},[r]),c("div",{className:"mywebtoon-container",children:(o==null?void 0:o.length)!==0?c("div",{className:"mywebtoon-list",children:o==null?void 0:o.map((n,i)=>N(se,{shadow:"sm",p:"lg",radius:"md",withBorder:!0,className:"webtoon-card",onClick:()=>l(n),children:[c(se.Section,{children:c(Le,{src:n.img,alt:"Norway"})}),N(xe,{position:"apart",mt:"md",children:[c(U,{weight:500,children:n.title}),N(j,{shadow:"md",width:110,position:"bottom-end",children:[c(j.Target,{children:c(oe,{variant:"subtle",size:"xs",onClick:g=>g.stopPropagation(),children:c(Me,{color:"grey"})})}),c(j.Dropdown,{children:c(j.Item,{onClick:g=>p(g,n._id),color:"red",icon:c(De,{size:14}),children:"웹툰 삭제"})})]})]}),c(U,{size:"sm",color:"dimmed",children:n.author}),c("a",{href:n.url,target:"_blank",onClick:g=>g.stopPropagation(),rel:"noreferrer",children:c(oe,{variant:"light",color:"blue",fullWidth:!0,mt:"md",radius:"md",children:"웹툰 보러가기"})})]},i))}):N("div",{className:"webtoon-list-empty",children:[N("div",{children:[c("h2",{children:"마이 웹툰이 비어있습니다 :("}),c("h3",{children:"좋아하는 웹툰을 저장해보세요!"})]}),c("div",{children:c(Ge,{to:"/",children:c("button",{className:"mywebtoon-save-btn",children:"웹툰보러가기"})})})]})})};export{Kr as default};
