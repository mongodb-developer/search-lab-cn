"use strict";(self.webpackChunksearch_party_lab=self.webpackChunksearch_party_lab||[]).push([[7262],{2647:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=t(5893),c=t(1151);const s={},a="\ud83e\uddb8 \u4f7f\u7528\u5206\u9762\u67e5\u8be2",o={id:"facet/query",title:"\ud83e\uddb8 \u4f7f\u7528\u5206\u9762\u67e5\u8be2",description:"\u73b0\u5728\u4f60\u7684\u7d22\u5f15\u5df2\u7ecf\u5230\u4f4d\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5b83\u8fdb\u884c\u67e5\u8be2\u4e86\u3002",source:"@site/docs/6-facet/3-query.mdx",sourceDirName:"6-facet",slug:"/facet/query",permalink:"/search-lab-cn/docs/facet/query",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/search-lab-cn/blob/main/docs/6-facet/3-query.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83e\uddb8 \u521b\u5efa\u7d22\u5f15",permalink:"/search-lab-cn/docs/facet/create-index"},next:{title:"\u5411\u91cf\u641c\u7d22",permalink:"/search-lab-cn/docs/category/\u5411\u91cf\u641c\u7d22"}},i={},d=[];function l(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,c.a)(),...e.components},{Details:t,Link:s}=n;return t||h("Details",!0),s||h("Link",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"-\u4f7f\u7528\u5206\u9762\u67e5\u8be2",children:"\ud83e\uddb8 \u4f7f\u7528\u5206\u9762\u67e5\u8be2"}),"\n",(0,r.jsx)(n.p,{children:"\u73b0\u5728\u4f60\u7684\u7d22\u5f15\u5df2\u7ecf\u5230\u4f4d\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5b83\u8fdb\u884c\u67e5\u8be2\u4e86\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u4f60\u9700\u8981\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"$searchMeta"})," \u805a\u5408\u9636\u6bb5\u6765\u67e5\u8be2\u4f60\u7684\u6570\u636e\u3002\u4f60\u53ef\u4ee5\u5728 ",(0,r.jsx)(s,{to:"https://www.mongodb.com/docs/atlas/atlas-search/query-syntax/#mongodb-pipeline-pipe.-searchMeta",children:"Atlas Search \u6587\u6863"})," \u4e2d\u627e\u5230\u66f4\u591a\u5173\u4e8e\u8fd9\u4e2a\u9636\u6bb5\u53ca\u5176\u4f7f\u7528\u65b9\u6cd5\u7684\u4fe1\u606f\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u73b0\u5728\u4f60\u5df2\u7ecf\u5728 ",(0,r.jsx)(n.code,{children:"genres"})," \u548c ",(0,r.jsx)(n.code,{children:"year"})," \u5b57\u6bb5\u4e0a\u521b\u5efa\u4e86\u7d22\u5f15\uff0c\u5c1d\u8bd5\u521b\u5efa\u4e00\u4e2a\u67e5\u8be2\uff0c\u8fd4\u56de2000\u5e74\u4ee3\u51fa\u7248\u7684\u6bcf\u4e2a\u7c7b\u578b\u7684\u4e66\u7c4d\u6570\u91cf\u3002"]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"\u70b9\u51fb\u67e5\u770b\u7b54\u6848"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'{\n  $searchMeta: {\n    "index": "facetsIndexName",\n    "facet": {\n      "operator": {\n        "range": {\n          "path": "year",\n          "gte": 2000,\n          "lte": 2010\n        }\n      },\n      "facets": {\n        "genresFacet": {\n          "type": "string",\n          "path": "genres"\n        }\n      }\n    }\n  }\n}\n'})})})]})]})}function p(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var r=t(7294);const c={},s=r.createContext(c);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);