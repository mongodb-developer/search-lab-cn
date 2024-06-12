"use strict";(self.webpackChunksearch_party_lab=self.webpackChunksearch_party_lab||[]).push([[4833],{344:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=s(5893),r=s(1151);const o={},c="\ud83d\udc50 \u6784\u5efa\u641c\u7d22\u67e5\u8be2",a={id:"aggregations/search-stage",title:"\ud83d\udc50 \u6784\u5efa\u641c\u7d22\u67e5\u8be2",description:"\u4f60\u53ef\u4ee5\u4f7f\u7528 $search \u805a\u5408\u7ba1\u9053\u9636\u6bb5\u6765\u6784\u5efa Atlas Search \u67e5\u8be2\u3002",source:"@site/docs/3-aggregations/1-search-stage.mdx",sourceDirName:"3-aggregations",slug:"/aggregations/search-stage",permalink:"/search-lab-cn/docs/aggregations/search-stage",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/search-lab-cn/blob/main/docs/3-aggregations/1-search-stage.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u805a\u5408\u7ba1\u9053",permalink:"/search-lab-cn/docs/category/\u805a\u5408\u7ba1\u9053"},next:{title:"\u5b9e\u73b0 Atlas \u641c\u7d22",permalink:"/search-lab-cn/docs/category/\u5b9e\u73b0-atlas-\u641c\u7d22"}},i={},l=[{value:"\u5728 Atlas UI \u4e2d\u8fdb\u884c\u805a\u5408",id:"\u5728-atlas-ui-\u4e2d\u8fdb\u884c\u805a\u5408",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components},{Screenshot:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Screenshot",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"-\u6784\u5efa\u641c\u7d22\u67e5\u8be2",children:"\ud83d\udc50 \u6784\u5efa\u641c\u7d22\u67e5\u8be2"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"$search"})," \u805a\u5408\u7ba1\u9053\u9636\u6bb5\u6765\u6784\u5efa Atlas Search \u67e5\u8be2\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://mongodb.com/docs/manual/core/aggregation-pipeline",children:"MongoDB \u805a\u5408\u7ba1\u9053"})," \u662f\u591a\u9636\u6bb5\u7684\u201c\u6d41\u6c34\u7ebf\u201d\uff0c\u53ef\u4ee5\u91cd\u5851\u6570\u636e\u5e76\u6267\u884c\u8ba1\u7b97\u3002\u7ba1\u9053\u53ef\u4ee5\u7531\u4e00\u4e2a\u6216\u591a\u4e2a\u805a\u5408\u9636\u6bb5\u7ec4\u6210\uff0c\u6267\u884c\u4e0d\u540c\u7684\u64cd\u4f5c\uff0c\u5982\u5339\u914d\u3001\u5206\u7ec4\u3001\u6392\u5e8f\u548c\u8f93\u51fa\u3002\u6709\u5173\u6240\u6709\u53ef\u7528\u9636\u6bb5\u7684\u8be6\u5c3d\u5217\u8868\uff0c\u8bf7\u8bbf\u95ee",(0,t.jsx)(n.a,{href:"https://mongodb.com/docs/manual/reference/operator/aggregation-pipeline/#std-label-aggregation-pipeline-operator-reference",children:"\u5b8c\u6574\u7684\u7ba1\u9053\u64cd\u4f5c\u7b26\u5217\u8868"}),"\u3002"]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u4e0d\u719f\u6089\u805a\u5408\u7ba1\u9053\uff0c\u4f60\u5e94\u8be5\u4ece ",(0,t.jsx)(n.a,{href:"https://mongodb-developer.github.io/aggregation-pipeline-lab-cn/",children:"\u805a\u5408\u7ba1\u9053\u5b9e\u9a8c\u5ba4"})," \u5f00\u59cb\u3002"]})}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"$search"})," \u9636\u6bb5\u6784\u5efa\u4e00\u4e2a\u805a\u5408\u7ba1\u9053\uff0c\u8be5\u9636\u6bb5\u4f7f\u7528\u4f60\u521a\u521a\u521b\u5efa\u7684 Atlas Search \u7d22\u5f15\u6267\u884c\u5168\u6587\u641c\u7d22\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5728-atlas-ui-\u4e2d\u8fdb\u884c\u805a\u5408",children:"\u5728 Atlas UI \u4e2d\u8fdb\u884c\u805a\u5408"}),"\n",(0,t.jsxs)(n.p,{children:["\u5bfc\u822a\u5230\u6570\u636e\u5e93\u90e8\u7f72\u7684 ",(0,t.jsx)(n.strong,{children:"Collections"})," \u9009\u9879\u5361\uff0c\u9009\u62e9 ",(0,t.jsx)(n.code,{children:"books"})," \u96c6\u5408\uff0c\u7136\u540e\u4ece\u96c6\u5408\u8be6\u60c5\u4e0b\u7684\u5bfc\u822a\u680f\u4e2d\u5bfc\u822a\u5230 ",(0,t.jsx)(n.strong,{children:"Aggregation"})," \u9009\u9879\u5361\u3002"]}),"\n",(0,t.jsx)(s,{alt:"\u96c6\u5408\u8be6\u60c5\u9875\u9762\u4e0a\u7a81\u51fa\u663e\u793a\u7684\u805a\u5408\u9009\u9879\u5361",src:"img/screenshots/3-aggregations/1-search-stage/1-aggregation-tab.png",url:"https://cloud.mongodb.com"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["\u6b64\u65f6 Atlas UI \u53ef\u80fd\u4f1a\u663e\u5f97\u6709\u70b9\u62e5\u6324\u3002\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"https://www.mongodb.com/products/tools/compass",children:"Compass"})," \u4e2d\u7684\u805a\u5408\u7ba1\u9053\u6784\u5efa\u5668\u6765\u83b7\u5f97\u66f4\u597d\u7684\u4f53\u9a8c\u3002"]})}),"\n",(0,t.jsxs)(n.p,{children:["\u70b9\u51fb ",(0,t.jsx)(n.strong,{children:"Add Stage"})," \u6309\u94ae\uff0c\u5e76\u5728 ",(0,t.jsx)(n.strong,{children:"select"})," \u8f93\u5165\u6846\u4e2d\u8f93\u5165 ",(0,t.jsx)(n.strong,{children:"$search"}),"\u3002"]}),"\n",(0,t.jsx)(s,{alt:"\u9009\u62e9\u4e86 $search \u9636\u6bb5\u7684\u7ba1\u9053\u7b2c 1 \u9636\u6bb5",src:"img/screenshots/3-aggregations/1-search-stage/2-search-stage.png",url:"https://cloud.mongodb.com"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e3a ",(0,t.jsx)(n.code,{children:"$search"})," \u9636\u6bb5\u6dfb\u52a0\u4ee5\u4e0b\u4ee3\u7801\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{\n    index: "fulltextsearch",\n    text: {\n        query: "cooking",\n        path: ["title"]\n    }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:'\u8be5\u9636\u6bb5\u4f7f\u7528 "fulltextsearch" \u7d22\u5f15\u3002\u5982\u679c\u7d22\u5f15\u662f "default"\uff0c\u4f60\u4e0d\u9700\u8981\u663e\u5f0f\u5b9a\u4e49\u7d22\u5f15\uff0c\u4f46\u4e3a\u4e86\u6e05\u6670\u8d77\u89c1\uff0c\u4f60\u53ef\u4ee5\u4fdd\u7559\u5b83\u3002'}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"text"})," \u64cd\u4f5c\u7b26\u5c06\u5728 ",(0,t.jsx)(n.code,{children:"title"}),' \u5b57\u6bb5\u4e2d\u641c\u7d22 "cooking"\u3002\u4f60\u5e94\u8be5\u5728\u53f3\u4fa7\u770b\u5230\u8fd4\u56de\u7684\u6587\u6863\u96c6\u5408\u3002']}),"\n",(0,t.jsxs)(n.p,{children:["\u70b9\u51fb ",(0,t.jsx)(n.strong,{children:"Add Stage"})," \u6309\u94ae\uff0c\u5411\u4e0b\u6eda\u52a8\u5e76\u9009\u62e9 ",(0,t.jsx)(n.strong,{children:"$project"})," \u4f5c\u4e3a\u7b2c 2 \u9636\u6bb5\u3002"]}),"\n",(0,t.jsx)(s,{alt:"\u9009\u62e9\u4e86 $project \u9636\u6bb5\u7684\u7ba1\u9053\u7b2c 2 \u9636\u6bb5",src:"img/screenshots/3-aggregations/1-search-stage/3-project-stage.png",url:"https://cloud.mongodb.com"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e3a ",(0,t.jsx)(n.code,{children:"$project"})," \u9636\u6bb5\u6dfb\u52a0\u4ee5\u4e0b\u5b9e\u73b0\u4ee3\u7801\u6765\u8fc7\u6ee4\u8fd4\u56de\u7684\u5b57\u6bb5\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"{\n  title: 1,\n  authors: 1,\n  genres: 1,\n  pages: 1\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6b64\u65f6\uff0c\u4f60\u5e94\u8be5\u770b\u5230\u4e0e\u4e0a\u4e00\u8282\u76f8\u4f3c\u7684\u7ed3\u679c\uff0c\u56e0\u4e3a\u8fd9\u51e0\u4e4e\u662f\u76f8\u540c\u7684\u67e5\u8be2\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>c});var t=s(7294);const r={},o=t.createContext(r);function c(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);