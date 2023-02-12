import{k as S}from"./index-e9b5be80.js";var _=Object.defineProperty,v=Object.defineProperties,C=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,d=(o,r,n)=>r in o?_(o,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[r]=n,i=(o,r)=>{for(var n in r||(r={}))x.call(r,n)&&d(o,n,r[n]);if(t)for(var n of t(r))O.call(r,n)&&d(o,n,r[n]);return o},p=(o,r)=>v(o,C(r));const l={xs:30,sm:36,md:42,lg:50,xl:60};function P({theme:o,variant:r}){return r==="default"?{border:`1px solid ${o.colorScheme==="dark"?o.colors.dark[4]:o.colors.gray[4]}`,backgroundColor:o.colorScheme==="dark"?o.colors.dark[6]:o.white,transition:"border-color 100ms ease","&:focus, &:focus-within":{outline:"none",borderColor:o.colors[o.primaryColor][o.fn.primaryShade()]}}:r==="filled"?{border:"1px solid transparent",backgroundColor:o.colorScheme==="dark"?o.colors.dark[5]:o.colors.gray[1],"&:focus, &:focus-within":{outline:"none",borderColor:`${o.colors[o.primaryColor][o.fn.primaryShade()]} !important`}}:{borderWidth:0,color:o.colorScheme==="dark"?o.colors.dark[0]:o.black,backgroundColor:"transparent",minHeight:28,outline:0,"&:focus, &:focus-within":{outline:"none",borderColor:"transparent"},"&:disabled":{backgroundColor:"transparent","&:focus, &:focus-within":{outline:"none",borderColor:"transparent"}}}}var z=S((o,{size:r,multiline:n,radius:u,variant:a,invalid:f,rightSectionWidth:e,withRightSection:b,iconWidth:s,offsetBottom:g,offsetTop:k,pointer:y})=>{const c=o.fn.variant({variant:"filled",color:"red"}).background,w=a==="default"||a==="filled"?{minHeight:o.fn.size({size:r,sizes:l}),paddingLeft:o.fn.size({size:r,sizes:l})/3,paddingRight:b?e:o.fn.size({size:r,sizes:l})/3,borderRadius:o.fn.radius(u)}:null;return{wrapper:{position:"relative",marginTop:k?o.spacing.xs/2:void 0,marginBottom:g?o.spacing.xs/2:void 0},input:i(p(i(p(i({},o.fn.fontStyles()),{height:n?a==="unstyled"?void 0:"auto":o.fn.size({size:r,sizes:l}),WebkitTapHighlightColor:"transparent",lineHeight:n?o.lineHeight:`${o.fn.size({size:r,sizes:l})-2}px`,appearance:"none",resize:"none",boxSizing:"border-box",fontSize:o.fn.size({size:r,sizes:o.fontSizes}),width:"100%",color:o.colorScheme==="dark"?o.colors.dark[0]:o.black,display:"block",textAlign:"left",cursor:y?"pointer":void 0}),w),{"&:disabled":{backgroundColor:o.colorScheme==="dark"?o.colors.dark[6]:o.colors.gray[1],color:o.colors.dark[2],opacity:.6,cursor:"not-allowed","&::placeholder":{color:o.colors.dark[2]}},"&::placeholder":{opacity:1,userSelect:"none",color:o.colorScheme==="dark"?o.colors.dark[3]:o.colors.gray[5]},"&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":{appearance:"none"},"&[type=number]":{MozAppearance:"textfield"}}),P({theme:o,variant:a})),withIcon:{paddingLeft:typeof s=="number"?s:o.fn.size({size:r,sizes:l})},invalid:{color:c,borderColor:c,"&::placeholder":{opacity:1,color:c}},disabled:{backgroundColor:o.colorScheme==="dark"?o.colors.dark[6]:o.colors.gray[1],color:o.colors.dark[2],opacity:.6,cursor:"not-allowed","&::placeholder":{color:o.colors.dark[2]}},icon:{pointerEvents:"none",position:"absolute",zIndex:1,left:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",width:typeof s=="number"?s:o.fn.size({size:r,sizes:l}),color:f?o.colors.red[o.colorScheme==="dark"?6:7]:o.colorScheme==="dark"?o.colors.dark[2]:o.colors.gray[5]},rightSection:{position:"absolute",top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"center",width:e}}});const I=z;export{l as s,I as u};
