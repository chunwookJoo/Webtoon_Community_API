import{G as a,s as e,H as o,J as s}from"./index-e9b5be80.js";const c=async r=>{try{const{data:t}=await a.post("/api/board/create",r);return t}catch(t){throw e(o,"red"),new Error(t,"웹툰 후기 작성 에러")}},d=async r=>{try{const{data:t}=await a.get(`/api${r}`);return t}catch(t){throw e(o,"red"),new Error(t,"웹툰 후기 리스트 조회 에러")}},i=async r=>{try{const{data:t}=await a.get(`/api/board/${r}`);return t}catch(t){throw e(o,"red"),new Error(t,"웹툰 후기 조회 에러")}},w=async r=>{try{const{data:t}=await a.post("/comment/insert",r);return t}catch(t){throw e(o,"red"),new Error(t,"웹툰 후기 댓글 작성 에러")}},y=async r=>{try{const{data:t}=await a.get(`/comment/${r}`);return t}catch(t){throw e(o,"red"),new Error(t,"웹툰 후기 댓글 조회 에러")}},h=s({key:"boardListState",default:null}),p=s({key:"boardDataState",default:[]});export{p as a,h as b,i as c,w as d,y as e,d as g,c as p};
