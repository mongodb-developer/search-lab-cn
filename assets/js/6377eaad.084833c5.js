"use strict";(self.webpackChunksearch_party_lab=self.webpackChunksearch_party_lab||[]).push([[5372],{2027:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>i});var r=s(5893),t=s(1151);const o={},c="\ud83d\udcd8 \u6df7\u5408\u548c\u5339\u914d",a={id:"search-operators/mix-and-match",title:"\ud83d\udcd8 \u6df7\u5408\u548c\u5339\u914d",description:"\u4f7f\u7528\u8fd9\u4e9b\u64cd\u4f5c\u7b26\u7684\u5168\u90e8\u4ef7\u503c\u5728\u4e8e\u5c06\u5b83\u4eec\u7ec4\u5408\u8d77\u6765\uff0c\u4ee5\u521b\u5efa\u5bf9\u7528\u6237\u66f4\u76f8\u5173\u7684\u641c\u7d22\u7ed3\u679c\u3002",source:"@site/docs/5-search-operators/08-mix-and-match.mdx",sourceDirName:"5-search-operators",slug:"/search-operators/mix-and-match",permalink:"/search-lab-cn/docs/search-operators/mix-and-match",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/search-lab-cn/blob/main/docs/5-search-operators/08-mix-and-match.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd8 \u8bc4\u5206\u4fee\u9970\u7b26",permalink:"/search-lab-cn/docs/search-operators/score-modifier"},next:{title:"\ud83d\udc50 \u7ec3\u4e60",permalink:"/search-lab-cn/docs/search-operators/exercises"}},d={},i=[{value:"\u4f7f\u7528\u8bc4\u5206\u7684\u590d\u5408\u67e5\u8be2",id:"\u4f7f\u7528\u8bc4\u5206\u7684\u590d\u5408\u67e5\u8be2",level:2}];function h(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...n.components},{Details:s}=e;return s||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"-\u6df7\u5408\u548c\u5339\u914d",children:"\ud83d\udcd8 \u6df7\u5408\u548c\u5339\u914d"}),"\n",(0,r.jsx)(e.p,{children:"\u4f7f\u7528\u8fd9\u4e9b\u64cd\u4f5c\u7b26\u7684\u5168\u90e8\u4ef7\u503c\u5728\u4e8e\u5c06\u5b83\u4eec\u7ec4\u5408\u8d77\u6765\uff0c\u4ee5\u521b\u5efa\u5bf9\u7528\u6237\u66f4\u76f8\u5173\u7684\u641c\u7d22\u7ed3\u679c\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"compound"})," \u64cd\u4f5c\u7b26\uff0c\u60a8\u53ef\u4ee5\u6df7\u5408\u548c\u5339\u914d\u521a\u624d\u770b\u5230\u7684\u4e00\u4e9b\u64cd\u4f5c\u7b26\u3002",(0,r.jsx)(e.code,{children:"compound"})," \u64cd\u4f5c\u7b26\u7684\u8bed\u6cd5\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'{\n  $search: {\n    "index": <index name>, // \u53ef\u9009\uff0c\u9ed8\u8ba4\u4e3a "default"\n    "compound": {\n      <must | mustNot | should | filter>: [ { <clauses> } ],\n      "score": <options>\n    }\n  }\n}\n'})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"must"}),"\n\u5fc5\u987b\u5339\u914d\u7684\u5b50\u53e5\uff0c\u6587\u6863\u624d\u80fd\u5305\u542b\u5728\u7ed3\u679c\u4e2d\u3002\u8fd4\u56de\u7684\u8bc4\u5206\u662f\u5b50\u53e5\u4e2d\u6240\u6709\u5b50\u67e5\u8be2\u7684\u8bc4\u5206\u4e4b\u548c\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u6620\u5c04\u5230 AND \u5e03\u5c14\u64cd\u4f5c\u7b26\u3002"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"mustNot"}),"\n\u4e0d\u5f97\u5339\u914d\u7684\u5b50\u53e5\uff0c\u6587\u6863\u624d\u80fd\u5305\u542b\u5728\u7ed3\u679c\u4e2d\u3002mustNot \u5b50\u53e5\u4e0d\u4f1a\u5f71\u54cd\u8fd4\u56de\u6587\u6863\u7684\u8bc4\u5206\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u6620\u5c04\u5230 AND NOT \u5e03\u5c14\u64cd\u4f5c\u7b26\u3002"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"should"}),"\n\u5e0c\u671b\u5728\u7ed3\u679c\u4e2d\u5305\u542b\u7684\u6587\u6863\u4e2d\u5339\u914d\u7684\u5b50\u53e5\u3002\u5305\u542b should \u5b50\u53e5\u5339\u914d\u7684\u6587\u6863\u6bd4\u4e0d\u5305\u542b should \u5b50\u53e5\u7684\u6587\u6863\u5f97\u5206\u66f4\u9ad8\u3002\u8fd4\u56de\u7684\u8bc4\u5206\u662f\u5b50\u53e5\u4e2d\u6240\u6709\u5b50\u67e5\u8be2\u7684\u8bc4\u5206\u4e4b\u548c\u3002"]}),"\n",(0,r.jsx)(e.p,{children:'\u5047\u8bbe\u60a8\u60f3\u8981\u641c\u7d22\u6807\u9898\u4e2d\u5305\u542b "cats" \u7684\u4e66\uff0c\u4f46\u60a8\u66f4\u559c\u6b22\u8f83\u77ed\u7684\u4e66\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u67e5\u8be2\uff1a'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'{\n  $search: {\n    "index": "fulltextsearch",\n    "compound": {\n      "must": [\n        {\n          "text": {\n            "query": "cats",\n            "path": "title"\n          }\n        }\n      ],\n      "should": [\n        {\n          "range": {\n            "path": "pages",\n            "gt": 0,\n            "lt": 100\n          }\n        }\n      ]\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:'\u8fd9\u5c06\u8fd4\u56de\u6240\u6709\u6807\u9898\u4e2d\u5305\u542b "cats" \u7684\u4e66\uff0c\u4f46\u4f1a\u4f18\u5148\u663e\u793a\u8f83\u77ed\u7684\u4e66\u3002\u5b83\u4ecd\u7136\u4f1a\u8fd4\u56de\u8f83\u957f\u7684\u4e66\uff0c\u4f46\u5b83\u4eec\u7684\u5f97\u5206\u4f1a\u4f4e\u4e8e\u8f83\u77ed\u7684\u4e66\u3002'}),"\n",(0,r.jsx)(e.h2,{id:"\u4f7f\u7528\u8bc4\u5206\u7684\u590d\u5408\u67e5\u8be2",children:"\u4f7f\u7528\u8bc4\u5206\u7684\u590d\u5408\u67e5\u8be2"}),"\n",(0,r.jsxs)(e.p,{children:["\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"compound"})," \u64cd\u4f5c\u7b26\u548c ",(0,r.jsx)(e.code,{children:"score"}),' \u9009\u9879\u6765\u63a7\u5236\u5b50\u67e5\u8be2\u8bc4\u5206\u7684\u7ec4\u5408\u65b9\u5f0f\u3002\u5047\u8bbe\u56fe\u4e66\u9986\u6709\u4e00\u4e2a\u6708\u5ea6\u4e3b\u9898\uff0c\u4ed6\u4eec\u5e0c\u671b\u63a8\u5e7f\u5728\u7b80\u4ecb\u4e2d\u5305\u542b\u7279\u5b9a\u8bcd\u7684\u4e66\u7c4d\u3002\u672c\u6708\u7684\u4e3b\u9898\u662f "bears"\u3002\u8bd5\u7740\u5199\u4e00\u4e2a\u641c\u7d22\u67e5\u8be2\uff0c\u5c06\u7528\u6237\u67e5\u8be2\u7684\u4e66\u7c4d\u8fd4\u56de\uff0c\u4f46\u5305\u542b "bear" \u4e00\u8bcd\u7684\u4e66\u7c4d\u8bc4\u5206\u66f4\u9ad8\uff0c\u5e76\u6392\u5728\u524d\u9762\u3002\u8bd5\u7740\u8ba9\u4e00\u672c\u5173\u4e8e Winnie the Pooh \u7684\u4e66\u5728\u7528\u6237\u641c\u7d22 "honey" \u65f6\u6392\u5728\u7b2c\u4e00\u4f4d\u3002']}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"\u70b9\u51fb\u67e5\u770b\u7b54\u6848"}),(0,r.jsx)("div",{children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'{\n    "index": "fulltextsearch",\n    "compound": {\n      "must": [\n        {\n          "text": {\n            "query": "honey",\n            "path": ["title", "author.name", "synopsis"]\n          }\n        }\n      ],\n      "should": [\n        {\n          "text": {\n            "query": "bear",\n            "path": "synopsis",\n            "score": {\n              "boost": { value: 10 }\n            }\n          }\n        }\n      ]\n    }\n  }\n'})})})]})]})}function l(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},1151:(n,e,s)=>{s.d(e,{Z:()=>a,a:()=>c});var r=s(7294);const t={},o=r.createContext(t);function c(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);