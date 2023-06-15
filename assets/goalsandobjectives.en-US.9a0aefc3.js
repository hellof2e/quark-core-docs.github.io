import{d as F,c as E,b as C,o as D}from"./vue.7405726e.js";const A={class:"markdown-body"},B=C("<h1>Quarkc \u76EE\u6807</h1><p>Quarkc \u65E8\u5728\u8BA9 Web \u7EC4\u4EF6\u7684\u6784\u5EFA\u8131\u79BB\u524D\u7AEF\u6846\u67B6\uFF01\u4E0D\u518D\u88AB\u6846\u67B6\u7684\u6761\u6761\u6846\u6846\u6240\u675F\u7F1A\uFF0C\u524D\u7AEF\u6846\u67B6\u6BCF\u5E74\u4F1A\u66F4\u65B0\uFF0C\u4F34\u968F\u7740\u7EC4\u4EF6\u7684\u66F4\u65B0\u8FED\u4EE3\uFF0C\u7F51\u4E0A\u6CDB\u6EE5\u7740\u5404\u79CD\u7EC4\u4EF6\u6587\u6863\uFF0C\u4EE5\u53CAAPI\u3002</p><br><p> \u5982\u679C\u80FD\u505A\u5230\u7EC4\u4EF6\u4E0D\u7528\u4F9D\u8D56\u6846\u67B6\u800C\u5B58\u5728\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u7EC4\u4EF6\u53EF\u4EE5\u7A7F\u8D8A\u6C89\u6D6E\uFF0C\u5386\u7ECF\u957F\u4E45\uFF01\u800C\u8FD9\u4E2A\u7B54\u6848\u5C31\u662F\u56DE\u5F52\u6D4F\u89C8\u5668\u539F\u751F \u2014\u2014 \u7528 Web Components(W3C\u6807\u51C6) \u53BB\u6784\u5EFA\u524D\u7AEF\u7EC4\u4EF6\u3002 </p><br><p> Quarkc \u5C06\u6700\u6D41\u884C\u7684\u524D\u7AEF\u6846\u67B6\u4E2D\u7684\u6700\u4F73\u6982\u5FF5\u7EC4\u5408\u6210\u4E00\u4E2A\u7F16\u8BD1\u65F6\u5DE5\u5177\uFF0C\u800C\u4E0D\u662F\u8FD0\u884C\u65F6\u5DE5\u5177\u3002\u8FD9\u91CC\u9700\u8981\u5F3A\u8C03\u7684\u662F\uFF0CQuarkc \u7684\u76EE\u6807\u4E0D\u662F\u6210\u4E3A\u4E00\u4E2A\u201C\u6846\u67B6\u201D\uFF0C\u4E5F\u4E0D\u5E0C\u671B\u88AB\u89C6\u4E3A\u4E00\u4E2A\u201D\u6846\u67B6\u201C\u3002\u76F8\u53CD\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F\u5728\u6D4F\u89C8\u5668\u8FD0\u884C\u65F6\u4F7F\u7528Web\u6807\u51C6\u7684\u540C\u65F6\uFF0C\u4E3A\u5F00\u53D1\u8005\u63D0\u4F9B\u4E00\u4E2A\u4F18\u79C0\u7684\u524D\u7AEF\u5F00\u53D1\u5DE5\u5177\uFF01 </p><br><h2>\u9762\u5411\u672A\u6765</h2><p> \u968F\u7740\u8F6F\u4EF6\u5F00\u53D1\u7684\u4E0D\u65AD\u53D1\u5C55\uFF0C\u524D\u7AEF\u6846\u67B6\u4E00\u76F4\u4EE5\u6765\u4E5F\u4EE5\u98DE\u5FEB\u7684\u901F\u5EA6\u5728\u4E0D\u65AD\u53D1\u5C55\uFF0C\u76F8\u6BD4\u4E8E\u5176\u4ED6\u7EC4\u4EF6\u6784\u5EFA\u65B9\u5F0F\uFF0CQuark \u7EC4\u4EF6\u9009\u62E9\u4E86\u53E6\u4E00\u6761 <b>\u201C\u8D5B\u9053\u201D</b> \u2014\u2014 \u8FFD\u968F\u6D4F\u89C8\u5668\u539F\u751FAPI\uFF01\u4EE5 <b>\u6781\u5176\u7A33\u5B9A</b> \u7684\u59FF\u6001\u8FDB\u884C\u7EC4\u4EF6\u5F00\u53D1\uFF0C\u505A\u5230\u4E86\u8131\u79BB\u524D\u7AEF\u6846\u67B6\u800C\u5B58\u5728\uFF0C\u4E14\u53EF\u4EE5\u81EA\u7531\u7684\u7FF1\u7FD4\u5728\u5404\u79CD\u6846\u67B6\u5185\u53BB\u4F7F\u7528\u3002 </p><h2>\u6027\u80FD</h2><p>\u4E0D\u540C\u4E8E\u4E3B\u6D41\u524D\u7AEF\u7EC4\u4EF6\u7684\u6784\u5EFA\uFF0CQuark \u7EC4\u4EF6\u6CA1\u6709 Runtime\uFF0C\u7EC4\u4EF6\u8FDB\u5165\u6D4F\u89C8\u5668\u4E0D\u9700\u8981\u5927\u91CF\u7684\u524D\u7F6E\u5DE5\u4F5C\u3002\u666E\u901A\u7684 div \u6807\u7B7E\u5982\u4F55\u6E32\u67D3\uFF0CQuark \u7EC4\u4EF6\u5C31\u600E\u4E48\u6E32\u67D3\u3002</p><h2>\u6781\u5C11\u91CF\u7684API</h2><p>Quarkc \u523B\u610F\u4E0D\u63D0\u4F9B\u4E00\u4E2A\u9700\u8981\u7ECF\u8FC7\u5B66\u4E60\u7684\u5927\u578B\u5B9A\u5236\u7684API\uFF0C\u800C\u662F\u4E25\u683C\u4F9D\u8D56 Web \u6807\u51C6\u3002\u5728\u8FFD\u968F\u4E3B\u6D41\u6846\u67B6\u7684\u6700\u4F73\u4F53\u9A8C\u7684\u540C\u65F6\uFF0C\u5C3D\u53EF\u80FD\u5730\u5C0A\u4ECE\u6D4F\u89C8\u5668\u539F\u751FAPI\uFF0C\u505A\u5230\u514B\u5236\uFF01API\u8D8A\u5C11\uFF0C\u7834\u574F\u8D8A\u5C0F\u3002</p>",13),e=[B],c={},n="",p=F({__name:"goalsandobjectives.en-US",setup(t,{expose:u}){return u({frontmatter:{},excerpt:void 0}),(o,r)=>(D(),E("div",A,e))}});export{p as default,n as excerpt,c as frontmatter};
