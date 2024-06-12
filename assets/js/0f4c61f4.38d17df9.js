"use strict";(self.webpackChunksearch_party_lab=self.webpackChunksearch_party_lab||[]).push([[4399],{1576:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var t=r(5893),s=r(1151);const c={},o="\u4f7f\u7528 OpenAI",i={id:"vector-search/create-vectors/openai",title:"\u4f7f\u7528 OpenAI",description:"\u5bb6\u5ead\u4f5c\u4e1a\u6d3b\u52a8\uff0c\u5982\u679c\u60a8\u5728\u5bb6\u4e2d\u81ea\u884c\u5b8c\u6210\uff0c\u8bf7\u6267\u884c\u6b64\u64cd\u4f5c\uff0c\u4e0d\u4f1a\u5728\u52a8\u624b\u5b9e\u9a8c\u4e2d\u8986\u76d6\u3002",source:"@site/docs/7-vector-search/5-create-vectors/1-openai.mdx",sourceDirName:"7-vector-search/5-create-vectors",slug:"/vector-search/create-vectors/openai",permalink:"/search-lab-cn/docs/vector-search/create-vectors/openai",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/search-lab-cn/blob/main/docs/7-vector-search/5-create-vectors/1-openai.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udfe1 \u5411\u91cf\u5316\u6570\u636e",permalink:"/search-lab-cn/docs/category/-\u5411\u91cf\u5316\u6570\u636e"},next:{title:"\u4f7f\u7528 Google Cloud Vertex AI",permalink:"/search-lab-cn/docs/vector-search/create-vectors/google-vertex"}},a={},d=[{value:"\u521b\u5efa OpenAI \u8d26\u6237\u5e76\u83b7\u53d6 API \u5bc6\u94a5",id:"\u521b\u5efa-openai-\u8d26\u6237\u5e76\u83b7\u53d6-api-\u5bc6\u94a5",level:2},{value:"\u4e3a\u6587\u6863\u521b\u5efa\u5d4c\u5165",id:"\u4e3a\u6587\u6863\u521b\u5efa\u5d4c\u5165",level:2},{value:"\u4e3a\u4e66\u7c4d\u521b\u5efa\u5d4c\u5165",id:"\u4e3a\u4e66\u7c4d\u521b\u5efa\u5d4c\u5165",level:2},{value:"\u4f7f\u7528\u5411\u91cf\u8fdb\u884c\u67e5\u8be2",id:"\u4f7f\u7528\u5411\u91cf\u8fdb\u884c\u67e5\u8be2",level:2},{value:"\u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f",id:"\u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components},{Screenshot:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Screenshot",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u4f7f\u7528-openai",children:"\u4f7f\u7528 OpenAI"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"\u5bb6\u5ead\u4f5c\u4e1a\u6d3b\u52a8\uff0c\u5982\u679c\u60a8\u5728\u5bb6\u4e2d\u81ea\u884c\u5b8c\u6210\uff0c\u8bf7\u6267\u884c\u6b64\u64cd\u4f5c\uff0c\u4e0d\u4f1a\u5728\u52a8\u624b\u5b9e\u9a8c\u4e2d\u8986\u76d6\u3002"})}),"\n",(0,t.jsxs)(n.p,{children:["OpenAI \u662f\u4e00\u5bb6\u5f00\u53d1\u81ea\u7136\u8bed\u8a00\u5904\u7406 AI \u6a21\u578b\u7684\u516c\u53f8\u3002\u4ed6\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u514d\u8d39\u7684 API\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u5b83\u4e3a\u6587\u6863\u521b\u5efa\u5d4c\u5165\u3002\u8be5 API \u79f0\u4e3a ",(0,t.jsx)(n.a,{href:"https://platform.openai.com/docs/api-reference/embeddings",children:"OpenAI \u7684\u5d4c\u5165 API"}),"\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u8981\u4f7f\u7528\u4ed6\u4eec\u7684 API \u83b7\u53d6\u4e00\u4e9b\u5d4c\u5165\uff0c\u60a8\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u8d26\u6237\u5e76\u83b7\u53d6\u4e00\u4e2a API \u5bc6\u94a5\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u521b\u5efa-openai-\u8d26\u6237\u5e76\u83b7\u53d6-api-\u5bc6\u94a5",children:"\u521b\u5efa OpenAI \u8d26\u6237\u5e76\u83b7\u53d6 API \u5bc6\u94a5"}),"\n",(0,t.jsxs)(n.p,{children:["\u8981\u521b\u5efa\u8d26\u6237\uff0c\u8bf7\u8bbf\u95ee ",(0,t.jsx)(n.a,{href:"http://openai.com/",children:"https://openai.com/"})," \u5e76\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684\u201c\u767b\u5f55\u201d\u6309\u94ae\u3002\u8fd9\u5c06\u91cd\u5b9a\u5411\u60a8\u5230\u767b\u5f55\u9875\u9762\uff0c\u60a8\u53ef\u4ee5\u9009\u62e9\u6ce8\u518c\u4ed6\u4eec\u7684\u670d\u52a1\u3002"]}),"\n",(0,t.jsx)(r,{src:"img/screenshots/7-vector-search/5-create-vectors/3-openai/1-signup.png",url:"https://openai.com/",alt:"OpenAI \u6ce8\u518c\u9875\u9762"}),"\n",(0,t.jsx)(n.p,{children:"\u6309\u7167\u5c4f\u5e55\u4e0a\u7684\u8bf4\u660e\u64cd\u4f5c\uff0c\u5e76\u9a8c\u8bc1\u60a8\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e00\u65e6\u60a8\u6709\u4e86\u8d26\u6237\uff0c\u5c31\u53ef\u4ee5\u8f6c\u5230 ",(0,t.jsx)(n.a,{href:"https://platform.openai.com/account/api-keys",children:"API \u5bc6\u94a5\u9875\u9762"})," \u83b7\u53d6 API \u5bc6\u94a5\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u90a3\u91cc\uff0c\u70b9\u51fb ",(0,t.jsx)(n.strong,{children:"\u521b\u5efa\u65b0\u5bc6\u94a5"})," \u6309\u94ae\u3002"]}),"\n",(0,t.jsx)(r,{src:"img/screenshots/7-vector-search/5-create-vectors/3-openai/2-create-key.png",url:"https://platform.openai.com/account/api-keys",alt:"OpenAI API \u5bc6\u94a5\u9875\u9762"}),"\n",(0,t.jsxs)(n.p,{children:["\u60a8\u5c06\u88ab\u63d0\u793a\u7ed9\u60a8\u7684\u5bc6\u94a5\u547d\u540d\u3002\u60a8\u53ef\u4ee5\u5c06\u5176\u79f0\u4e3a\u201cMongoDB \u5411\u91cf\u641c\u7d22\u6f14\u793a\u201d\u3002\u7136\u540e\u70b9\u51fb ",(0,t.jsx)(n.strong,{children:"\u521b\u5efa\u5bc6\u94a5"})," \u6309\u94ae\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u7136\u540e\u4f1a\u663e\u793a\u60a8\u7684 API \u5bc6\u94a5\u3002\u590d\u5236\u5b83\u5e76\u4fdd\u5b58\u5728\u5b89\u5168\u7684\u5730\u65b9\u3002"}),"\n",(0,t.jsx)(r,{src:"img/screenshots/7-vector-search/5-create-vectors/3-openai/3-api-key.png",url:"https://platform.openai.com/account/api-keys",alt:"OpenAI API \u5bc6\u94a5"}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"\u8bf7\u786e\u4fdd\u60a8\u5c06\u6b64\u5bc6\u94a5\u590d\u5236\u5230\u67d0\u4e2a\u5730\u65b9\u4ee5\u4fbf\u7a0d\u540e\u4f7f\u7528\uff0c\u4e4b\u540e\u60a8\u5c06\u65e0\u6cd5\u518d\u6b21\u770b\u5230\u5b83\u3002"})}),"\n",(0,t.jsx)(n.p,{children:"\u73b0\u5728\u60a8\u6709\u4e86 API \u5bc6\u94a5\uff0c\u53ef\u4ee5\u7528\u5b83\u4e3a\u60a8\u7684\u6587\u6863\u521b\u5efa\u5d4c\u5165\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u4e3a\u6587\u6863\u521b\u5efa\u5d4c\u5165",children:"\u4e3a\u6587\u6863\u521b\u5efa\u5d4c\u5165"}),"\n",(0,t.jsx)(n.p,{children:"\u8981\u901a\u8fc7\u53d1\u9001 curl \u547d\u4ee4\u5230 OpenAI API \u4e3a\u60a8\u7684\u6587\u6863\u521b\u5efa\u5d4c\u5165\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'OPENAI_API_KEY=<YOUR_API_KEY>\ncurl https://api.openai.com/v1/embeddings \\\n  -H "Authorization: Bearer $OPENAI_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "input": "The food was delicious and the waiter...",\n    "model": "text-embedding-ada-002"\n  }\'\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u5728 ",(0,t.jsx)(n.a,{href:"https://platform.openai.com/docs/api-reference/embeddings",children:"OpenAI \u6587\u6863"})," \u4e2d\u627e\u5230\u6709\u5173\u8be5 API \u7684\u66f4\u591a\u4fe1\u606f\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4e3a\u4e66\u7c4d\u521b\u5efa\u5d4c\u5165",children:"\u4e3a\u4e66\u7c4d\u521b\u5efa\u5d4c\u5165"}),"\n",(0,t.jsx)(n.p,{children:"\u8981\u4e3a\u60a8\u7684\u96c6\u5408\u4e2d\u7684\u4e66\u7c4d\u521b\u5efa\u5d4c\u5165\uff0c\u60a8\u5e94\u8be5\u4e3a\u6bcf\u672c\u4e66\u8fd0\u884c\u6b64 curl \u547d\u4ee4\uff0c\u6216\u4f7f\u7528 Node.js \u5e93\u3002\u8fd9\u4e2a\u8fc7\u7a0b\u6709\u70b9\u8017\u65f6\uff0c\u6240\u4ee5\u6211\u4eec\u5df2\u7ecf\u4e3a\u60a8\u521b\u5efa\u4e86\u5b83\u4eec\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u5728\u4e66\u7c4d\u7684 ",(0,t.jsx)(n.code,{children:"embeddings"})," \u5b57\u6bb5\u4e2d\u627e\u5230 1586 \u7ef4\u5ea6\u7684\u5411\u91cf\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u56e0\u4e3a\u6211\u4eec\u5df2\u7ecf\u6709\u4e86\u4e66\u7c4d\u7684\u5411\u91cf\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u7528\u5b83\u4eec\u8fdb\u884c\u5411\u91cf\u641c\u7d22\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u7528\u5411\u91cf\u8fdb\u884c\u67e5\u8be2",children:"\u4f7f\u7528\u5411\u91cf\u8fdb\u884c\u67e5\u8be2"}),"\n",(0,t.jsx)(n.p,{children:"\u8981\u67e5\u8be2\u6570\u636e\uff0c\u5411\u91cf\u641c\u7d22\u9700\u8981\u8ba1\u7b97\u67e5\u8be2\u5411\u91cf\u4e0e\u96c6\u5408\u4e2d\u6587\u6863\u5411\u91cf\u4e4b\u95f4\u7684\u8ddd\u79bb\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4e3a\u6b64\uff0c\u60a8\u9700\u8981\u5411\u91cf\u5316\u60a8\u7684\u67e5\u8be2\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u76f8\u540c\u7684\u51fd\u6570\u6765\u5411\u91cf\u5316\u60a8\u7684\u67e5\u8be2\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u56fe\u4e66\u9986\u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2a\u51fd\u6570\u6765\u4e3a\u60a8\u5411\u91cf\u5316\u67e5\u8be2\u3002\u60a8\u53ef\u4ee5\u5728 ",(0,t.jsx)(n.code,{children:"server/src/embeddings/openai.ts"})," \u6587\u4ef6\u4e2d\u627e\u5230\u5b83\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import OpenAI from 'openai';\n\nconst { EMBEDDING_KEY } = process.env;\n\nlet openai;\n\nconst getTermEmbeddings = async (text) => {\n    if (!openai) {\n        openai = new OpenAI({apiKey: EMBEDDING_KEY});\n    }\n    const embeddings = await openai.embeddings.create({\n        model: 'text-embedding-ada-002',\n        input: text,\n    });\n    return embeddings?.data[0]?.embedding;\n};\n\nexport default getTermEmbeddings;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f",children:"\u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728 ",(0,t.jsx)(n.code,{children:"server/.env"})," \u6587\u4ef6\u4e2d\uff0c\u60a8\u4f1a\u627e\u5230\u4e00\u4e9b\u53d8\u91cf\uff0c\u53ef\u4ee5\u7528\u6765\u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u7b2c\u4e00\u4e2a\u662f ",(0,t.jsx)(n.code,{children:"EMBEDDINGS_SOURCE"}),"\u3002\u5b83\u544a\u8bc9\u5e94\u7528\u7a0b\u5e8f\u4ece\u54ea\u91cc\u83b7\u53d6\u5d4c\u5165\u3002\u60a8\u53ef\u4ee5\u5c06\u5176\u8bbe\u7f6e\u4e3a ",(0,t.jsx)(n.code,{children:"openai"}),"\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u73b0\u5728\u60a8\u6709\u4e86 OpenAI API \u5bc6\u94a5\uff0c\u53ef\u4ee5\u5c06"})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>o});var t=r(7294);const s={},c=t.createContext(s);function o(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);