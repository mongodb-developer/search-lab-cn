"use strict";(self.webpackChunksearch_party_lab=self.webpackChunksearch_party_lab||[]).push([[7496],{7611:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var o=s(5893),r=s(1151);const t={},a="\ud83d\udc50 \u7ec3\u4e60",c={id:"search-operators/exercises",title:"\ud83d\udc50 \u7ec3\u4e60",description:"\u73b0\u5728\u662f\u7ec3\u4e60\u4f60\u6240\u5b66\u6982\u5ff5\u7684\u65f6\u5019\u4e86\uff01\u5c1d\u8bd5\u5c3d\u4f60\u6240\u80fd\u56de\u7b54\u4ee5\u4e0b\u95ee\u9898\u3002\u53ef\u4ee5\u53c2\u8003\u4f60\u5728\u8bfe\u7a0b\u4e2d\u67e5\u770b\u7684\u5e7b\u706f\u7247\u548c\u8bb0\u5f55\u7684\u7b14\u8bb0\u3002",source:"@site/docs/5-search-operators/09-exercises.mdx",sourceDirName:"5-search-operators",slug:"/search-operators/exercises",permalink:"/search-lab-cn/docs/search-operators/exercises",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/search-lab-cn/blob/main/docs/5-search-operators/09-exercises.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd8 \u6df7\u5408\u548c\u5339\u914d",permalink:"/search-lab-cn/docs/search-operators/mix-and-match"},next:{title:"\ud83e\uddb8 \u9ad8\u7ea7\u7ec3\u4e60",permalink:"/search-lab-cn/docs/search-operators/advanced-exercises"}},i={},l=[{value:"\u6dfb\u52a0\u6a21\u7cca\u641c\u7d22",id:"\u6dfb\u52a0\u6a21\u7cca\u641c\u7d22",level:2},{value:"\u63a8\u5e7f\u6708\u5ea6\u63a8\u8350\u4e66\u7c4d",id:"\u63a8\u5e7f\u6708\u5ea6\u63a8\u8350\u4e66\u7c4d",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"-\u7ec3\u4e60",children:"\ud83d\udc50 \u7ec3\u4e60"}),"\n",(0,o.jsx)(n.p,{children:"\u73b0\u5728\u662f\u7ec3\u4e60\u4f60\u6240\u5b66\u6982\u5ff5\u7684\u65f6\u5019\u4e86\uff01\u5c1d\u8bd5\u5c3d\u4f60\u6240\u80fd\u56de\u7b54\u4ee5\u4e0b\u95ee\u9898\u3002\u53ef\u4ee5\u53c2\u8003\u4f60\u5728\u8bfe\u7a0b\u4e2d\u67e5\u770b\u7684\u5e7b\u706f\u7247\u548c\u8bb0\u5f55\u7684\u7b14\u8bb0\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u4e0d\u8981\u4f5c\u5f0a\uff01\u5c3d\u91cf\u5728\u5c1d\u8bd5\u56de\u7b54\u540e\u518d\u67e5\u770b\u7b54\u6848\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"\u6dfb\u52a0\u6a21\u7cca\u641c\u7d22",children:"\u6dfb\u52a0\u6a21\u7cca\u641c\u7d22"}),"\n",(0,o.jsx)(n.p,{children:"\u5c1d\u8bd5\u5728\u4f60\u7684\u5e94\u7528\u4e2d\u6dfb\u52a0\u6a21\u7cca\u641c\u7d22\u529f\u80fd\uff0c\u4ee5\u4fbf\u5373\u4f7f\u7528\u6237\u8f93\u5165\u6709\u62fc\u5199\u9519\u8bef\u4e5f\u80fd\u627e\u5230\u6b63\u786e\u7684\u4e66\u7c4d\u3002"}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["\u8fd8\u8bb0\u5f97 ",(0,o.jsx)(n.a,{href:"https://www.mongodb.com/docs/atlas/atlas-search/text/#std-label-text-ref",children:(0,o.jsx)(n.code,{children:"text"})})," \u64cd\u4f5c\u7b26\u7684 ",(0,o.jsx)(n.code,{children:"fuzzy"})," \u53c2\u6570\u5417\uff1f\u5c31\u662f\u5728\u8fd9\u91cc\u4f7f\u7528\u5b83\u3002"]})}),"\n",(0,o.jsxs)(s,{children:[(0,o.jsx)("summary",{children:"\u7b54\u6848"}),(0,o.jsx)("div",{children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"public async searchBooks(query: string): Promise<Book[]> {\n  const aggregationPipeline = [\n      {\n          $search: {\n              index: 'fulltextsearch',\n              text: {\n                  query,\n                  path: ['title', 'authors.name', 'genres'],\n                  fuzzy: {\n                    maxEdits: 2\n                  }\n              }\n          }\n      }\n  ];\n  const books = await collections?.books?.aggregate(aggregationPipeline).toArray() as Book[];\n  return books;\n}\n"})})})]}),"\n",(0,o.jsx)(n.h2,{id:"\u63a8\u5e7f\u6708\u5ea6\u63a8\u8350\u4e66\u7c4d",children:"\u63a8\u5e7f\u6708\u5ea6\u63a8\u8350\u4e66\u7c4d"}),"\n",(0,o.jsx)(n.p,{children:"\u5e02\u573a\u56e2\u961f\u51b3\u5b9a\u8981\u63a8\u5e7f\u6708\u5ea6\u63a8\u8350\u4e66\u7c4d\u3002\u4ed6\u4eec\u5e0c\u671b\u5728\u641c\u7d22\u7ed3\u679c\u4e2d\u9996\u5148\u663e\u793a\u8fd9\u4e9b\u4e66\u7c4d\u3002\u4f60\u4f1a\u600e\u4e48\u505a\u5462\uff1f"}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["\u4f60\u9700\u8981\u5728\u8fd9\u91cc\u4f7f\u7528 ",(0,o.jsx)(n.a,{href:"https://www.mongodb.com/docs/atlas/atlas-search/compound/#std-label-compound-ref",children:(0,o.jsx)(n.code,{children:"compound"})})," \u64cd\u4f5c\u7b26\u548c\u591a\u4e2a\u64cd\u4f5c\u7b26\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e9b\u4e66\u7c4d\u4e0a\u7684 ",(0,o.jsx)(n.code,{children:"bookOfTheMonth"})," \u5e03\u5c14\u5b57\u6bb5\u3002"]})}),"\n",(0,o.jsxs)(s,{children:[(0,o.jsx)("summary",{children:"\u7b54\u6848"}),(0,o.jsx)("div",{children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'public async searchBooks(query: string): Promise<Book[]> {\n    const aggregationPipeline = [\n        {\n          $search: {\n            "index": "fulltextsearch",\n            "compound": {\n              "must": [\n                {\n                  "text": {\n                    query,\n                    "path": ["title", "authors.name", "genres"],\n                    fuzzy: {\n                      maxEdits: 2\n                    }\n                  }\n                }\n              ],\n              "should": [\n                {\n                  "equals": {\n                    "value": true,\n                    "path": "bookOfTheMonth",\n                    "score": {\n                      "boost": { value: 10 }\n                    }\n                  }\n                }\n              ]\n            }\n          }\n        }\n      ];\n    const books = await collections?.books?.aggregate(aggregationPipeline).toArray() as Book[];\n    return books;\n}\n'})})})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>a});var o=s(7294);const r={},t=o.createContext(r);function a(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);