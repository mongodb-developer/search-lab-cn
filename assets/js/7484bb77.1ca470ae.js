"use strict";(self.webpackChunksearch_party_lab=self.webpackChunksearch_party_lab||[]).push([[1243],{2409:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>h,contentTitle:()=>o,default:()=>l,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var n=r(5893),t=r(1151);const c={},o="\ud83d\udcd8 phrase \u64cd\u4f5c\u7b26",a={id:"search-operators/phrase",title:"\ud83d\udcd8 phrase \u64cd\u4f5c\u7b26",description:"phrase \u64cd\u4f5c\u7b26\u7528\u4e8e\u6309\u7279\u5b9a\u987a\u5e8f\u641c\u7d22\u4e00\u7ec4\u5355\u8bcd\u3002\u5b83\u7c7b\u4f3c\u4e8e match \u64cd\u4f5c\u7b26\uff0c\u4f46\u5b83\u4f1a\u5339\u914d\u6587\u672c\u4e2d\u7684\u4efb\u4f55\u4f4d\u7f6e\uff0c\u800c\u4e0d\u4ec5\u4ec5\u662f\u5f00\u5934\u3002",source:"@site/docs/5-search-operators/03-phrase.mdx",sourceDirName:"5-search-operators",slug:"/search-operators/phrase",permalink:"/search-lab-cn/docs/search-operators/phrase",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/search-lab-cn/blob/main/docs/5-search-operators/03-phrase.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd8 text \u64cd\u4f5c\u7b26",permalink:"/search-lab-cn/docs/search-operators/text"},next:{title:"\ud83d\udcd8 equals \u64cd\u4f5c\u7b26",permalink:"/search-lab-cn/docs/search-operators/equals"}},h={},d=[{value:"<code>slop</code> \u5c5e\u6027",id:"slop-\u5c5e\u6027",level:2}];function i(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.h1,{id:"-phrase-\u64cd\u4f5c\u7b26",children:["\ud83d\udcd8 ",(0,n.jsx)(s.code,{children:"phrase"})," \u64cd\u4f5c\u7b26"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"phrase"})," \u64cd\u4f5c\u7b26\u7528\u4e8e\u6309\u7279\u5b9a\u987a\u5e8f\u641c\u7d22\u4e00\u7ec4\u5355\u8bcd\u3002\u5b83\u7c7b\u4f3c\u4e8e ",(0,n.jsx)(s.code,{children:"match"})," \u64cd\u4f5c\u7b26\uff0c\u4f46\u5b83\u4f1a\u5339\u914d\u6587\u672c\u4e2d\u7684\u4efb\u4f55\u4f4d\u7f6e\uff0c\u800c\u4e0d\u4ec5\u4ec5\u662f\u5f00\u5934\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"phrase"})," \u64cd\u4f5c\u7b26\u7684\u5b9a\u4e49\u5982\u4e0b\u3002\u60a8\u53ef\u4ee5\u5728",(0,n.jsx)(s.a,{href:"https://www.mongodb.com/docs/atlas/atlas-search/phrase/",children:"\u5b98\u65b9\u6587\u6863"}),"\u4e2d\u627e\u5230\u66f4\u591a\u5173\u4e8e ",(0,n.jsx)(s.code,{children:"phrase"})," \u64cd\u4f5c\u7b26\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:'{\n  $search: {\n     "index": <index name>, // \u53ef\u9009\uff0c\u9ed8\u8ba4\u4e3a "default"\n     "phrase": {\n       "query": "<search-string>",\n       "path": "<field-to-search>",\n       "score": <options>,\n       "slop": <distance-number>\n     }\n  }\n}\n'})}),"\n",(0,n.jsxs)(s.p,{children:["\u5176\u7528\u6cd5\u4e0e\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"text"})," \u64cd\u4f5c\u7b26\u7684\u65b9\u5f0f\u975e\u5e38\u76f8\u4f3c\u3002"]}),"\n",(0,n.jsxs)(s.h2,{id:"slop-\u5c5e\u6027",children:[(0,n.jsx)(s.code,{children:"slop"})," \u5c5e\u6027"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"slop"})," \u5c5e\u6027\u7528\u4e8e\u6307\u5b9a\u77ed\u8bed\u4e2d\u7684\u5355\u8bcd\u53ef\u4ee5\u76f8\u9694\u591a\u8fdc\u3002\u9ed8\u8ba4\u503c\u662f ",(0,n.jsx)(s.code,{children:"0"}),"\uff0c\u8fd9\u610f\u5473\u7740\u5355\u8bcd\u5fc5\u987b\u6309\u67e5\u8be2\u4e2d\u6307\u5b9a\u7684\u786e\u5207\u987a\u5e8f\u6392\u5217\u3002\u5982\u679c\u5c06\u503c\u8bbe\u7f6e\u4e3a ",(0,n.jsx)(s.code,{children:"1"}),"\uff0c\u5219\u5355\u8bcd\u4e4b\u95f4\u53ef\u4ee5\u76f8\u9694\u4e00\u4e2a\u5355\u8bcd\uff0c\u4f9d\u6b64\u7c7b\u63a8\u3002"]})]})}function l(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},1151:(e,s,r)=>{r.d(s,{Z:()=>a,a:()=>o});var n=r(7294);const t={},c=n.createContext(t);function o(e){const s=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(c.Provider,{value:s},e.children)}}}]);