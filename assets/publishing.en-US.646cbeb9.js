import{d as e,c as t,e as a,b as u,o as n}from"./vue.80204f33.js";const o={class:"markdown-body"},p=u(`<h2>Publishing</h2><blockquote><p>\u63A8\u8350\u4F7F\u7528\uFF1A<a href="https://github.com/hellof2e/quark-cli">https://github.com/hellof2e/quark-cli</a> \u751F\u6210\u9879\u76EE</p></blockquote><p>\u5F53\u4F60\u4F7F\u7528 <code class="">quarkc</code> \u7F16\u5199\u5B8C\u7EC4\u4EF6\uFF0C\u5C31\u53EF\u4EE5\u53D1\u5E03\u4F60\u81EA\u5DF1\u7684\u65E0\u6846\u67B6\u7EC4\u4EF6\u5566\u3002</p><br><p>quark-cli \u751F\u6210\u7684\u9879\u76EE\u5DF2\u7ECF\u9644\u5E26\u4E86\u6253\u5305\u914D\u7F6E\uFF0C\u6267\u884C</p><pre><code class="language-shell">npm run build
</code></pre><p>\u5373\u53EF\u3002</p><br><p>\u751F\u6210\u7684\u6253\u5305\u4EA7\u7269\u5728 lib/ \u6587\u4EF6\u5939\u4E0B:</p><pre><code class="language-tree">.
\u251C\u2500\u2500 types
|     \u2514\u2500\u2500 install.d.ts
\u251C\u2500\u2500 index.js
\u251C\u2500\u2500 index.umd.cjs
\u2514\u2500\u2500 style.css
</code></pre><h3>\u53D1\u5E03\u5230 npm</h3><p>\u6253\u5305\u7ED3\u675F\uFF0C\u5C31\u53EF\u4EE5\u5C06\u4F60\u7684 component \u53D1\u5E03\u5230 npm ~</p><br>`,13),c=u(`<p>\u4F5C\u4E3A node \u5305\u4F7F\u7528</p><pre><code class="language-js"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;you-component&quot;</span>
</code></pre><p>\u4F5C\u4E3A CDN \u4F7F\u7528</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://unpkg.com/your-component/lib/index.js&quot;</span> /&gt;</span>
</code></pre><h3>\u76F4\u63A5\u9879\u76EE\u4E2D\u4F7F\u7528</h3><p>\u76F4\u63A5\u62F7\u8D1D\u4EA7\u7269 <code class="">index.js</code> \u5230\u60A8\u7684\u9879\u76EE</p><pre><code class="language-js"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;index.js&quot;</span>
</code></pre><h3>\u76F8\u5173\u6848\u4F8B</h3><p>\u4F7F\u7528 quarkc \u6784\u5EFA\u7684\u7EC4\u4EF6\u6848\u4F8B\uFF0C\u4F9B\u53C2\u8003\uFF01 <a href="https://github.com/hellof2e/quark#%E4%BC%98%E7%A7%80%E6%A1%88%E4%BE%8B">https://github.com/hellof2e/quark#\u4F18\u79C0\u6848\u4F8B</a></p>`,9),h={},d="",i=e({__name:"publishing.en-US",setup(l,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(F,r)=>(n(),t("div",o,[p,a(" npm \u53D1\u5E03\u76F8\u5173\u53EF\u53C2\u8003[\u94FE\u63A5](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)\u3002 "),c]))}});export{i as default,d as excerpt,h as frontmatter};
