(self.webpackChunkwebtoon_client=self.webpackChunkwebtoon_client||[]).push([[101],{9808:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Z}});var r=t(4165),a=t(2982),c=t(5861),s=t(885),u=t(2791),o=t(6871),i=t(2808),f=t.n(i),p=t(7998),l=t(4198),w=t(9348),k=t(4569),d=t.n(k),b=t(3197),h=d().create({baseURL:b.T5}),x=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(n,t,a){var c,s,u,o,i,f;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=(new Date).getDay(),s=["0","1","2","3","4","5","6"][0===c?6:c-1],u="",o="",e.t0=n,e.next="/"===e.t0?8:"/kakaoPage"===e.t0?10:12;break;case 8:return u="/all",e.abrupt("break",13);case 10:return u="/kakao-page",e.abrupt("break",13);case 12:u=n;case 13:!t.week&&(t.week=s),e.t1=t.week,e.next="fin"===e.t1?17:"new"===e.t1?19:21;break;case 17:return o="/finished?day=".concat(7),e.abrupt("break",22);case 19:return o="/new?day=".concat(8),e.abrupt("break",22);case 21:o="/week?day=".concat(t.week);case 22:return e.prev=22,e.next=25,h.get("/api".concat(u).concat(o,"&page=").concat(a));case 25:return i=e.sent,f=i.data,e.abrupt("return",f);case 30:throw e.prev=30,e.t2=e.catch(22),new Error("\uc6f9\ud230 \ub9ac\uc2a4\ud2b8 \ucd9c\ub825 \uc5d0\ub7ec");case 33:case"end":return e.stop()}}),e,null,[[22,30]])})));return function(n,t,r){return e.apply(this,arguments)}}(),v=t(184),Z=function(){var e=(0,o.TH)(),n=e.search,t=e.pathname,i=(0,u.useState)([]),k=(0,s.Z)(i,2),d=k[0],b=k[1],h=(0,w.YD)(),Z=(0,s.Z)(h,2),m=Z[0],g=Z[1],j=(0,u.useRef)(1),y=(0,u.useRef)(!1),D=f().parse(n,{ignoreQueryPrefix:!0}),N=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(){var n,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g&&(j.current+=1),e.next=3,x(t,D,j.current);case 3:return n=e.sent,e.next=6,n.map((function(e){return(0,v.jsx)(l.default,{webtoonData:e})}));case 6:c=e.sent,b((function(e){return[].concat((0,a.Z)(e),[c])})),y.current=!0;case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){(0,c.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j.current=1,b([]),window.scrollTo(0,0),N();case 4:case"end":return e.stop()}}),e)})))()}),[D.week,t]),(0,u.useEffect)((function(){g&&y.current&&N()}),[g]),(0,v.jsxs)("main",{children:[(0,v.jsx)("section",{className:"contents-container"}),(0,v.jsxs)("section",{className:"contents-container",children:[(0,v.jsx)("ul",{className:"webtoon-list",children:d}),(0,v.jsx)("div",{ref:m}),0===d.length&&(0,v.jsx)("div",{className:"loading",children:(0,v.jsx)(p.Z,{})})]})]})}},4654:function(){}}]);
//# sourceMappingURL=101.cac4df28.chunk.js.map