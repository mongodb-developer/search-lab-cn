"use strict";(self.webpackChunksearch_party_lab=self.webpackChunksearch_party_lab||[]).push([[249],{1195:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var s=r(5893),c=r(1151);const t={},o="\ud83d\udcd8 \u8bc4\u5206",a={id:"search-operators/scoring",title:"\ud83d\udcd8 \u8bc4\u5206",description:"\u60a8\u53ef\u80fd\u5df2\u7ecf\u6ce8\u610f\u5230\uff0c\u5927\u591a\u6570\u64cd\u4f5c\u7b26\u90fd\u6709\u4e00\u4e2a score \u5c5e\u6027\uff0c\u4f46\u6211\u4eec\u8fd8\u6ca1\u6709\u771f\u6b63\u8ba8\u8bba\u8fc7\u5b83\u3002",source:"@site/docs/5-search-operators/06-scoring.mdx",sourceDirName:"5-search-operators",slug:"/search-operators/scoring",permalink:"/search-lab-cn/docs/search-operators/scoring",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/search-lab-cn/blob/main/docs/5-search-operators/06-scoring.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd8 range \u64cd\u4f5c\u7b26",permalink:"/search-lab-cn/docs/search-operators/range"},next:{title:"\ud83d\udcd8 \u8bc4\u5206\u4fee\u9970\u7b26",permalink:"/search-lab-cn/docs/search-operators/score-modifier"}},i={},l=[];function d(e){const n={code:"code",em:"em",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"-\u8bc4\u5206",children:"\ud83d\udcd8 \u8bc4\u5206"}),"\n",(0,s.jsxs)(n.p,{children:["\u60a8\u53ef\u80fd\u5df2\u7ecf\u6ce8\u610f\u5230\uff0c\u5927\u591a\u6570\u64cd\u4f5c\u7b26\u90fd\u6709\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"score"})," \u5c5e\u6027\uff0c\u4f46\u6211\u4eec\u8fd8\u6ca1\u6709\u771f\u6b63\u8ba8\u8bba\u8fc7\u5b83\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u6df1\u5165\u4e86\u89e3\u8bc4\u5206\u4e4b\u524d\uff0c\u91cd\u8981\u7684\u662f\u8981\u7406\u89e3\u6587\u6863\u8bc4\u5206\u662f\u4ec0\u4e48\u3002\u6bcf\u4e2a\u7531 Atlas Search \u67e5\u8be2\u8fd4\u56de\u7684\u6587\u6863\u90fd\u4f1a\u6839\u636e\u76f8\u5173\u6027\u5206\u914d\u4e00\u4e2a\u8bc4\u5206\uff0c\u5e76\u4e14\u7ed3\u679c\u96c6\u4e2d\u5305\u542b\u7684\u6587\u6863\u4f1a\u6309\u4ece\u9ad8\u5230\u4f4e\u7684\u8bc4\u5206\u987a\u5e8f\u8fd4\u56de\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4e00\u4e9b\u53ef\u4ee5\u5f71\u54cd\u8bc4\u5206\u7684\u56e0\u7d20\u5305\u62ec\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u641c\u7d22\u8bcd\u5728\u6587\u6863\u4e2d\u7684\u4f4d\u7f6e\uff0c"}),"\n",(0,s.jsx)(n.li,{children:"\u641c\u7d22\u8bcd\u5728\u6587\u6863\u4e2d\u51fa\u73b0\u7684\u9891\u7387\uff0c"}),"\n",(0,s.jsx)(n.li,{children:"\u67e5\u8be2\u4f7f\u7528\u7684\u64cd\u4f5c\u7b26\u7c7b\u578b\uff0c"}),"\n",(0,s.jsx)(n.li,{children:"\u67e5\u8be2\u4f7f\u7528\u7684\u5206\u6790\u5668\u7c7b\u578b\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8981\u67e5\u770b\u8bc4\u5206\uff0c\u60a8\u9700\u8981\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"$meta"})," \u6295\u5f71\u4e00\u4e2a\u65b0\u7684\u5143\u6570\u636e\u5b57\u6bb5\u3002\u8981\u5728\u7b80\u5355\u7684\u77ed\u8bed\u641c\u7d22 ",(0,s.jsx)(n.em,{children:"Alice in Wonderland"})," \u4e2d\u67e5\u770b\u6587\u6863\u8bc4\u5206\uff0c\u8bf7\u5c1d\u8bd5\u4ee5\u4e0b\u805a\u5408\u7ba1\u9053\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u5728 Atlas UI \u6216 Compass \u7684\u805a\u5408\u6784\u5efa\u5668\u4e2d\u8fd0\u884c\u6b64\u4ee3\u7801\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'[\n  {\n    $search: {\n      index: "fulltextsearch",\n      phrase: {\n        query: "Alice in Wonderland",\n        path: "title",\n      },\n    },\n  },\n  {\n    $project: {\n      title: 1,\n      authors: 1,\n      pages: 1,\n      year: 1,\n      score: {\n        $meta: "searchScore",\n      },\n    },\n  },\n]\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u60a8\u7684\u7b2c\u4e00\u4e2a\u7ed3\u679c\u5e94\u8be5\u662f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n  "_id": "0831702877",\n  "title": "Alice in Wonderland",\n  "authors": [\n    {\n      "_id": "64cc2db4830ba29148da7bbc",\n      "name": "Walt Disney Productions"\n    },\n    {\n      "_id": "64cc2db4830ba29148da8db5",\n      "name": "Mouse Works"\n    }\n  ],\n  "pages": 95,\n  "year": 1997,\n  "score": 10.441896438598633\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u5b83\u5f97\u5206\u6bd4\u4e0b\u4e00\u4e2a\u9ad8\u5f97\u591a\uff0c\u56e0\u4e3a\u5b83\u662f\u4e00\u4e2a\u5b8c\u5168\u5339\u914d\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>o});var s=r(7294);const c={},t=s.createContext(c);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);