"use strict";(self.webpackChunkwebtoon_client=self.webpackChunkwebtoon_client||[]).push([[77],{8808:function(e,r,t){t.r(r),t.d(r,{default:function(){return X}});var n=t(885),a=t(2791),i=t(6871),s=t(6005),o=t(4063),l=t(4569),c=t.n(l),d=t(3197),u=t(3090),p=t(8956),h=t(4165),m=t(5861),f=t(1832),x=t(4746),v=t(7762),g=t(7462),b=t(3366),j=a.useLayoutEffect,y=function(e,r){"function"!==typeof e?e.current=r:e(r)},w=function(e,r){var t=(0,a.useRef)();return(0,a.useCallback)((function(n){e.current=n,t.current&&y(t.current,null),t.current=r,r&&y(r,n)}),[r])},N={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},S=function(e){Object.keys(N).forEach((function(r){e.style.setProperty(r,N[r],"important")}))},z=null;var R=function(){},C=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],Z=!!document.documentElement.currentStyle,k=function(e){var r=function(e){var r=a.useRef(e);return j((function(){r.current=e})),r}(e);(0,a.useLayoutEffect)((function(){var e=function(e){r.current(e)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[])},E=function(e,r){var t=e.cacheMeasurements,n=e.maxRows,i=e.minRows,s=e.onChange,o=void 0===s?R:s,l=e.onHeightChange,c=void 0===l?R:l,d=(0,b.Z)(e,["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"]);var u=void 0!==d.value,p=(0,a.useRef)(null),h=w(p,r),m=(0,a.useRef)(0),f=(0,a.useRef)(),x=function(){var e=p.current,r=t&&f.current?f.current:function(e){var r=window.getComputedStyle(e);if(null===r)return null;var t,n=(t=r,C.reduce((function(e,r){return e[r]=t[r],e}),{})),a=n.boxSizing;return""===a?null:(Z&&"border-box"===a&&(n.width=parseFloat(n.width)+parseFloat(n.borderRightWidth)+parseFloat(n.borderLeftWidth)+parseFloat(n.paddingRight)+parseFloat(n.paddingLeft)+"px"),{sizingStyle:n,paddingSize:parseFloat(n.paddingBottom)+parseFloat(n.paddingTop),borderSize:parseFloat(n.borderBottomWidth)+parseFloat(n.borderTopWidth)})}(e);if(r){f.current=r;var a=function(e,r,t,n){void 0===t&&(t=1),void 0===n&&(n=1/0),z||((z=document.createElement("textarea")).setAttribute("tabindex","-1"),z.setAttribute("aria-hidden","true"),S(z)),null===z.parentNode&&document.body.appendChild(z);var a=e.paddingSize,i=e.borderSize,s=e.sizingStyle,o=s.boxSizing;Object.keys(s).forEach((function(e){var r=e;z.style[r]=s[r]})),S(z),z.value=r;var l=function(e,r){var t=e.scrollHeight;return"border-box"===r.sizingStyle.boxSizing?t+r.borderSize:t-r.paddingSize}(z,e);z.value="x";var c=z.scrollHeight-a,d=c*t;"border-box"===o&&(d=d+a+i),l=Math.max(d,l);var u=c*n;return"border-box"===o&&(u=u+a+i),[l=Math.min(u,l),c]}(r,e.value||e.placeholder||"x",i,n),s=a[0],o=a[1];m.current!==s&&(m.current=s,e.style.setProperty("height",s+"px","important"),c(s,{rowHeight:o}))}};return(0,a.useLayoutEffect)(x),k(x),(0,a.createElement)("textarea",(0,g.Z)({},d,{onChange:function(e){u||x(),o(e)},ref:h}))},O=(0,a.forwardRef)(E),P=t(9557),F=t(6081),T=t(1005),W=(0,t(7581).k)((function(e){return{input:{paddingTop:e.spacing.xs,paddingBottom:e.spacing.xs}}})),_=Object.defineProperty,I=Object.defineProperties,L=Object.getOwnPropertyDescriptors,q=Object.getOwnPropertySymbols,H=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,M=function(e,r,t){return r in e?_(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t},V=function(e,r){for(var t in r||(r={}))H.call(r,t)&&M(e,t,r[t]);if(q){var n,a=(0,v.Z)(q(r));try{for(a.s();!(n=a.n()).done;){t=n.value;B.call(r,t)&&M(e,t,r[t])}}catch(i){a.e(i)}finally{a.f()}}return e},A=function(e,r){return I(e,L(r))},D={autosize:!1,size:"sm",__staticSelector:"Textarea"},Q=(0,a.forwardRef)((function(e,r){var t=(0,F.N4)("Textarea",D,e),n=t.autosize,i=t.maxRows,s=t.minRows,o=t.label,l=t.error,c=t.description,d=t.id,u=t.className,p=t.required,h=t.style,m=t.wrapperProps,f=t.classNames,g=t.styles,b=t.size,j=t.__staticSelector,y=t.sx,w=t.errorProps,N=t.descriptionProps,S=t.labelProps,z=t.inputWrapperOrder,R=t.inputContainer,C=t.unstyled,Z=function(e,r){var t={};for(var n in e)H.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&q){var a,i=(0,v.Z)(q(e));try{for(i.s();!(a=i.n()).done;)n=a.value,r.indexOf(n)<0&&B.call(e,n)&&(t[n]=e[n])}catch(s){i.e(s)}finally{i.f()}}return t}(t,["autosize","maxRows","minRows","label","error","description","id","className","required","style","wrapperProps","classNames","styles","size","__staticSelector","sx","errorProps","descriptionProps","labelProps","inputWrapperOrder","inputContainer","unstyled"]),k=(0,P.M)(d),E=W(),_=E.classes,I=E.cx,L=(0,T.x)(Z),M=L.systemStyles,Q=L.rest,Y=V({required:p,ref:r,invalid:!!l,id:k,classNames:A(V({},f),{input:I(_.input,null==f?void 0:f.input)}),styles:g,__staticSelector:j,size:b,multiline:!0,unstyled:C},Q);return a.createElement(x.I.Wrapper,V(V({label:o,error:l,id:k,description:c,required:p,style:h,className:u,classNames:f,styles:g,size:b,__staticSelector:j,sx:y,errorProps:w,labelProps:S,descriptionProps:N,inputContainer:R,inputWrapperOrder:z,unstyled:C},M),m),n?a.createElement(x.I,A(V({},Y),{component:O,maxRows:i,minRows:s})):a.createElement(x.I,A(V({},Y),{component:"textarea",rows:s})))}));Q.displayName="@mantine/core/Textarea";var Y=t(9348),G=t(9388),K=t(184),U=function(e){var r=e.isOpen,t=e.toggle,i=(0,K.jsx)(K.Fragment,{}),l=[(0,K.jsx)("li",{className:"no-search-result",children:"\uac80\uc0c9 \uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \ud83d\ude25"})],v=(0,a.useState)(""),g=(0,n.Z)(v,2),b=g[0],j=g[1],y=(0,a.useState)(""),w=(0,n.Z)(y,2),N=w[0],S=w[1],z=(0,a.useState)(""),R=(0,n.Z)(z,2),C=R[0],Z=R[1],k=(0,a.useState)(""),E=(0,n.Z)(k,2),O=E[0],P=E[1],F=(0,a.useState)(!0),T=(0,n.Z)(F,2),W=(T[0],T[1]),_=2,I=12*_,L=(0,a.useState)([]),q=(0,n.Z)(L,2),H=q[0],B=q[1],M=(0,a.useState)([]),V=(0,n.Z)(M,2),A=V[0],D=(V[1],(0,a.useState)(null)),U=(0,n.Z)(D,2),J=U[0],X=U[1],$=(0,s.FV)(o.E),ee=(0,n.Z)($,2),re=ee[0];ee[1];(0,a.useEffect)((function(){N?(0,m.Z)((0,h.Z)().mark((function e(){var r,t;return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("".concat(d.T5,"/search?keyword=").concat(N));case 2:r=e.sent,t=r.data,Array.isArray(t)?B(t.map((function(e,r){return(0,K.jsx)("li",{className:"searched-item-wrap",onClick:function(){return X(e)},children:(0,K.jsxs)("article",{className:"searched-item",children:[(0,K.jsx)("img",{src:e.img,width:80,height:80}),(0,K.jsx)("span",{className:"searched-title",children:e.title}),(0,K.jsx)("small",{children:"naver"===e.service?"\ub124\uc774\ubc84":"kakao"===e.service?"\uce74\uce74\uc624":"\uce74\uce74\uc624\ud398\uc774\uc9c0"})]})},r)}))):B(l);case 5:case"end":return e.stop()}}),e)})))():B([])}),[N]),(0,a.useEffect)((function(){null!==J&&B([])}),[J]);var te={title:C,description:O,author:re._id,webtoon:null===J||void 0===J?void 0:J._id,service:null===J||void 0===J?void 0:J.service},ne=(0,Y.YD)(),ae=(0,n.Z)(ne,2),ie=ae[0];ae[1]&&_++;var se=I<A.length&&24<=A.length?(0,K.jsx)("li",{ref:ie,className:"loading",children:(0,K.jsx)(G.Z,{})}):i;return A.slice(0,12*_).push(se),(0,K.jsxs)(f.u,{title:"\ud6c4\uae30 \uc791\uc131",fullScreen:!0,overflow:"inside",opened:r,onClose:t,className:"create-board-modal-container",children:[(0,K.jsx)("div",{className:"create-board-input",children:null===J?"":(0,K.jsxs)("article",{className:"selected-item",children:[(0,K.jsxs)("div",{className:"selected-img",children:[(0,K.jsx)("img",{src:J.img,width:100,height:100}),(0,K.jsx)("span",{className:"deleted-img",onClick:function(){X(null)},children:(0,K.jsx)(p.NZF,{})})]}),(0,K.jsx)("span",{className:"searched-title",children:J.title}),(0,K.jsx)("small",{children:"naver"===J.service?"\ub124\uc774\ubc84":"kakao"===J.service?"\uce74\uce74\uc624":"\uce74\uce74\uc624\ud398\uc774\uc9c0"})]})}),(0,K.jsx)("div",{className:"create-board-input",children:(0,K.jsx)(x.I.Wrapper,{label:"\uc6f9\ud230 \uac80\uc0c9",required:!0,children:(0,K.jsx)(x.I,{disabled:null!==J,placeholder:"\uc791\ud488 \ub610\ub294 \uc791\uac00\ub85c \uac80\uc0c9\ud55c \ud6c4 \uc120\ud0dd\ud558\uc138\uc694.",data:A,value:b,onChange:function(e){W(!0),j(e.target.value);var r=e.target.value;setTimeout((function(){var t=e.target.value;t===r&&S(t)}),500)}})})}),(0,K.jsx)("ul",{className:"search-result",children:H}),(0,K.jsx)("div",{className:"create-board-input",children:(0,K.jsx)(x.I.Wrapper,{label:"\uc81c\ubaa9",required:!0,children:(0,K.jsx)(x.I,{placeholder:"\ud6c4\uae30 \uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",value:C,onChange:function(e){Z(e.target.value)}})})}),(0,K.jsx)("div",{className:"create-board-input",children:(0,K.jsx)(x.I.Wrapper,{label:"\ub0b4\uc6a9",required:!0,children:(0,K.jsx)(Q,{minRows:8,maxRows:12,placeholder:"\ud6c4\uae30 \ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",value:O,onChange:function(e){P(e.target.value)}})})}),(0,K.jsx)("div",{className:"create-board-btn",children:(0,K.jsx)("button",{onClick:function(){""===C||""===O||null===J?(0,u.c0)({message:"\ubaa8\ub450 \uc785\ub825\ud574\uc8fc\uc138\uc694.",autoClose:1500,radius:"md",color:"yellow"}):c().post(d.T5+"/board/create",te).then((function(e){200===e.data.RESULT?(t(),Z(""),P(""),X(null),(0,u.c0)({message:"\ud6c4\uae30\uac00 \uc815\uc0c1\uc801\uc73c\ub85c \uc791\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",autoClose:2e3,radius:"md",color:"green"})):console.log(e)}))},children:"\ud6c4\uae30 \uc791\uc131"})})]})},J=function(){var e=(0,s.FV)(o.QD),r=(0,n.Z)(e,2),t=r[0],a=r[1],i=function(){return a(!t)};return(0,K.jsxs)("div",{className:"create-board-container",children:[(0,K.jsx)("div",{className:"create-board-btn",onClick:i,children:(0,K.jsx)(p.TRY,{})}),(0,K.jsx)(U,{isOpen:t,toggle:i})]})},X=function(){var e=(0,i.s0)(),r=(0,i.TH)().state,t=(0,s.FV)(o.Gg),l=(0,n.Z)(t,2),p=l[0],h=l[1],m=(0,s.FV)(o.sK),f=(0,n.Z)(m,2),x=f[0],v=(f[1],(0,s.FV)(o.QD)),g=(0,n.Z)(v,2),b=g[0];g[1];(0,a.useEffect)((function(){c().get(d.T5+(null===r?"/board":r)).then((function(e){h(e.data)}))}),[r,b]);return(0,K.jsxs)("div",{className:"board-container",children:[0===(null===p||void 0===p?void 0:p.length)?(0,K.jsxs)("div",{className:"empty-board",children:[(0,K.jsx)("h2",{children:"/board"===r?"\ud6c4\uae30\uac00 \uc544\uc9c1 \uc5c6\uc5b4\uc694 \ud83d\ude25":"\ud574\ub2f9\ud558\ub294 \ud50c\ub7ab\ud3fc\uc758 \ud6c4\uae30\uac00 \uc544\uc9c1 \uc5c6\uc5b4\uc694 \ud83d\ude25"}),(0,K.jsx)("h4",{children:"\uae30\uc5b5\uc5d0 \ub0a8\ub294 \uc6f9\ud230\uc758 \ud6c4\uae30\ub97c \uc791\uc131\ud574\ubcf4\uc138\uc694."})]}):(0,K.jsx)("ul",{className:"board-list",children:null===p||void 0===p?void 0:p.map((function(r,t){return(0,K.jsxs)("li",{className:"board",onClick:function(t){return function(r,t){null===x?(0,u.c0)({message:"\ub85c\uadf8\uc778\uc744 \uba3c\uc800 \ud574\uc8fc\uc138\uc694.",autoClose:1500,radius:"md",color:"yellow"}):e("/board/detail",{state:t})}(0,r)},children:[(0,K.jsx)("div",{className:"board-img-container",children:(0,K.jsx)("img",{src:r.webtoon.img,className:"board-img"})}),(0,K.jsxs)("div",{className:"board-description",children:[(0,K.jsx)("h4",{children:r.title}),(0,K.jsxs)("h5",{children:[r.webtoon.title," | ",r.webtoon.author]}),(0,K.jsxs)("div",{className:"creater",children:[(0,K.jsx)("span",{className:"board-author-img",children:(0,K.jsx)("img",{src:r.author.profileImage,width:28,height:28})}),"by",(0,K.jsx)("span",{className:"nickname",children:r.author.nickname})]}),(0,K.jsx)("p",{children:r.description})]})]},t)}))}),(0,K.jsx)(J,{})]})}}}]);
//# sourceMappingURL=77.8088ccae.chunk.js.map