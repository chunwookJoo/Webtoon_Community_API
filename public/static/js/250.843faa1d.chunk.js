"use strict";(self.webpackChunkwebtoon_client=self.webpackChunkwebtoon_client||[]).push([[250,908],{8908:function(e,s,n){n.r(s);n(2791);var t=n(184);s.default=function(e){var s=e.webtoon,n="naver"===s.service?"\ub124\uc774\ubc84 \uc6f9\ud230":"kakao"===s.service?"\uce74\uce74\uc624 \uc6f9\ud230":"\uce74\uce74\uc624\ud398\uc774\uc9c0 \uc6f9\ud230",a=["\uc6d4\uc694\uc77c","\ud654\uc694\uc77c","\uc218\uc694\uc77c","\ubaa9\uc694\uc77c","\uae08\uc694\uc77c","\ud1a0\uc694\uc77c","\uc77c\uc694\uc77c","\uc644\uacb0","\uc2e0\uc791"];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"webtoon-img",children:(0,t.jsx)("img",{src:s.img})}),(0,t.jsxs)("div",{className:"webtoon-title",children:[(0,t.jsx)("h3",{children:s.title}),(0,t.jsxs)("h5",{children:[s.author," | ",n]})]}),(0,t.jsx)("div",{className:"webtoon-week",children:(0,t.jsx)("ul",{children:s.week.map((function(e,s){return(0,t.jsx)("li",{children:a[e]},s)}))})})]})}},7250:function(e,s,n){n.r(s),n.d(s,{default:function(){return m}});n(2791);var t=n(6871),a=n(4569),o=n.n(a),r=n(3197),l=n(3090),c=n(1275),i=n(8928),d=n(1267),u=n(8908),h=n(184),m=function(){var e=(0,t.TH)().state.webtoonDetailData,s={_id:e._id};return(0,h.jsx)("div",{children:(0,h.jsxs)("section",{className:"webtoon-detail-container",children:[(0,h.jsx)(u.default,{webtoon:e}),(0,h.jsxs)("div",{className:"webtoon-detail-btns",children:[(0,h.jsx)("a",{className:"mywebtoon-save-btn",onClick:function(){null!==localStorage.getItem("userId")?o().post(r.T5+"/auth/insert/mywebtoon/".concat(localStorage.getItem("userId")),s).then((function(e){200===e.data.RESULT?(0,l.c0)({message:"\ub9c8\uc774\uc6f9\ud230\uc5d0 \uc800\uc7a5\ud588\uc2b5\ub2c8\ub2e4.",autoClose:2e3,radius:"md",color:"green"}):403===e.data.RESULT?(0,l.c0)({message:"\ub9c8\uc774\uc6f9\ud230\uc5d0 \uc774\ubbf8 \uc874\uc7ac\ud569\ub2c8\ub2e4.",autoClose:2e3,radius:"md",color:"yellow"}):(0,l.c0)({message:"\ub9c8\uc774\uc6f9\ud230 \uc800\uc7a5\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.",autoClose:2e3,radius:"md",color:"red"})})):(0,l.c0)({message:"\ub85c\uadf8\uc778\uc744 \uba3c\uc800 \ud574\uc8fc\uc138\uc694.",autoClose:1500,radius:"md",color:"yellow"})},children:(0,h.jsx)("button",{children:"\ub9c8\uc774\uc6f9\ud230\uc5d0 \uc800\uc7a5"})}),(0,h.jsx)("a",{href:e.url,target:"_blank",className:"webtoon-show-btn",rel:"noreferrer",children:(0,h.jsxs)("button",{className:"".concat(e.service),children:[(0,h.jsx)("span",{className:"logo",children:"naver"===e.service?(0,h.jsx)(c.r,{}):"kakao"===e.service?(0,h.jsx)(i.r,{}):(0,h.jsx)(d.r,{})}),"\xa0 \uc6f9\ud230 \ubcf4\ub7ec\uac00\uae30"]})})]})]})})}}}]);
//# sourceMappingURL=250.843faa1d.chunk.js.map