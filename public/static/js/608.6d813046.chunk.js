"use strict";(self.webpackChunkwebtoon_client=self.webpackChunkwebtoon_client||[]).push([[608],{5184:function(e,s,n){n(2791);var t=n(184);s.Z=function(e){var s=e.webtoon,n="naver"===s.service?"\ub124\uc774\ubc84 \uc6f9\ud230":"kakao"===s.service?"\uce74\uce74\uc624 \uc6f9\ud230":"\uce74\uce74\uc624\ud398\uc774\uc9c0 \uc6f9\ud230",a=["\uc6d4\uc694\uc77c","\ud654\uc694\uc77c","\uc218\uc694\uc77c","\ubaa9\uc694\uc77c","\uae08\uc694\uc77c","\ud1a0\uc694\uc77c","\uc77c\uc694\uc77c","\uc644\uacb0","\uc2e0\uc791"];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"webtoon-img",children:(0,t.jsx)("img",{src:s.img})}),(0,t.jsxs)("div",{className:"webtoon-title",children:[(0,t.jsx)("h3",{children:s.title}),(0,t.jsxs)("h5",{children:[s.author," | ",n]})]}),(0,t.jsx)("div",{className:"webtoon-week",children:(0,t.jsx)("ul",{children:s.week.map((function(e,s){return(0,t.jsx)("li",{children:a[e]},s)}))})})]})}},2608:function(e,s,n){n.r(s),n.d(s,{default:function(){return m}});n(2791);var t=n(6871),a=n(1275),o=n(8928),r=n(1267),c=n(4569),l=n.n(c),i=n(3197),d=n(3090),u=(n(6005),n(4063),n(5184)),h=n(184),m=function(){var e=(0,t.TH)().state.webtoonDetailData,s={_id:e._id};return(0,h.jsx)("div",{children:(0,h.jsxs)("section",{className:"webtoon-detail-container",children:[(0,h.jsx)(u.Z,{webtoon:e}),(0,h.jsxs)("div",{className:"webtoon-detail-btns",children:[(0,h.jsx)("a",{className:"mywebtoon-save-btn",onClick:function(){null!==localStorage.getItem("userId")?l().post(i.T5+"/auth/insert/mywebtoon/".concat(localStorage.getItem("userId")),s).then((function(e){200===e.data.RESULT?(0,d.c0)({message:"\ub9c8\uc774\uc6f9\ud230\uc5d0 \uc800\uc7a5\ud588\uc2b5\ub2c8\ub2e4.",autoClose:2e3,radius:"md",color:"green"}):403===e.data.RESULT?(0,d.c0)({message:"\ub9c8\uc774\uc6f9\ud230\uc5d0 \uc774\ubbf8 \uc874\uc7ac\ud569\ub2c8\ub2e4.",autoClose:2e3,radius:"md",color:"yellow"}):(0,d.c0)({message:"\ub9c8\uc774\uc6f9\ud230 \uc800\uc7a5\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.",autoClose:2e3,radius:"md",color:"red"})})):(0,d.c0)({message:"\ub85c\uadf8\uc778\uc744 \uba3c\uc800 \ud574\uc8fc\uc138\uc694.",autoClose:1500,radius:"md",color:"yellow"})},children:(0,h.jsx)("button",{children:"\ub9c8\uc774\uc6f9\ud230\uc5d0 \uc800\uc7a5"})}),(0,h.jsx)("a",{href:e.url,target:"_blank",className:"webtoon-show-btn",children:(0,h.jsxs)("button",{className:"".concat(e.service),children:[(0,h.jsx)("span",{className:"logo",children:"naver"===e.service?(0,h.jsx)(a.r,{}):"kakao"===e.service?(0,h.jsx)(o.r,{}):(0,h.jsx)(r.r,{})}),"\xa0 \uc6f9\ud230 \ubcf4\ub7ec\uac00\uae30"]})})]})]})})}}}]);
//# sourceMappingURL=608.6d813046.chunk.js.map