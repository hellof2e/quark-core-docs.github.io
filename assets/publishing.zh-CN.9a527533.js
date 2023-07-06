import{d as t,c as s,b as e,o as a}from"./vue.2154f368.js";const l={class:"markdown-body"},h=e(`<h2>Publishing</h2><blockquote><p>\u63A8\u8350\u4F7F\u7528\uFF1A<a href="https://github.com/hellof2e/quark-cli">https://github.com/hellof2e/quark-cli</a> \u751F\u6210\u9879\u76EE</p></blockquote><p>\u5F53\u4F60\u4F7F\u7528 <code class="">quarkc</code> \u7F16\u5199\u5B8C\u7EC4\u4EF6\uFF0C\u5C31\u53EF\u4EE5\u53D1\u5E03\u4F60\u81EA\u5DF1\u7684\u65E0\u6846\u67B6\u7EC4\u4EF6\u5566\u3002</p><br><p>quark-cli \u751F\u6210\u7684\u9879\u76EE\u5DF2\u7ECF\u9644\u5E26\u4E86\u6253\u5305\u914D\u7F6E\uFF0C\u6267\u884C</p><pre><code class="language-shell">npm run build
</code></pre><p>\u5373\u53EF\u3002</p><br><p>\u751F\u6210\u7684\u6253\u5305\u4EA7\u7269\u5728 lib/ \u6587\u4EF6\u5939\u4E0B:</p><pre><code class="language-tree">.
\u251C\u2500\u2500 types
|     \u2514\u2500\u2500 install.d.ts
\u251C\u2500\u2500 index.js
\u2514\u2500\u2500 index.umd.js
</code></pre><h3>\u76F4\u63A5\u9879\u76EE\u4E2D\u4F7F\u7528</h3><p>\u76F4\u63A5\u62F7\u8D1D\u4EA7\u7269 <code class="">index.js</code> \u5230\u60A8\u7684\u9879\u76EE\uFF0C\u7136\u540E\u76F4\u63A5\u6309\u7167\u8DEF\u5F84\u5BFC\u5165\u5373\u53EF\u4F7F\u7528\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;your-component&quot;</span>
</code></pre><h3>\u53D1\u5E03\u5230 Npm \u5E73\u53F0</h3><p>\u6216\u8005\uFF0C\u6253\u5305\u7ED3\u675F\uFF0C\u4E5F\u53EF\u5C06\u4F60\u7684\u4EA7\u7269\u53D1\u5E03\u5230 npm\u3002<a href="https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry">npm Docs</a>\u3002</p><p>1\u3001\u4F5C\u4E3A npm \u5305\u4F7F\u7528\uFF1A</p><pre><code class="language-js"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;you-component&quot;</span>
</code></pre><p>2\u3001\u4E5F\u53EF\u4EE5\u91C7\u7528 CDN \u4F7F\u7528\uFF1A</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/quarkc@latest&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/your-published-component@latest&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre><h3>\u4F18\u79C0\u6848\u4F8B</h3><p>\u4F7F\u7528 quarkc \u6784\u5EFA\u7684\u7EC4\u4EF6\u7684<a href="https://github.com/hellof2e/quark#%E4%BC%98%E7%A7%80%E6%A1%88%E4%BE%8B">\u4F18\u79C0\u6848\u4F8B</a>\uFF0C\u4F9B\u53C2\u8003\uFF01</p><table><thead><tr><th>\u4F5C\u8005</th><th>github \u5730\u5740</th><th>\u622A\u56FE / \u94FE\u63A5</th></tr></thead><tbody><tr><td>@khno</td><td><a href="https://github.com/khno/quark-element-demo-celebrate">https://github.com/khno/quark-element-demo-celebrate</a></td><td><a href="https://unpkg.com/quarkc-demo-celebrate@latest/demo.html">https://unpkg.com/quarkc-demo-celebrate@latest/demo.html</a></td></tr><tr><td>@hellof2e</td><td><a href="https://github.com/hellof2e/quark-doc-header">https://github.com/hellof2e/quark-doc-header</a></td><td><img src="https://github.com/hellof2e/quark/assets/14307551/24dd5626-e6a9-452c-9c95-c2cdb8891573" alt="1685501041275"> <a href="https://quark.hellobike.com/#/">https://quark.hellobike.com/#/</a></td></tr><tr><td>@xsf0105</td><td><a href="https://github.com/xsf0105/dark-light-element">https://github.com/xsf0105/dark-light-element</a></td><td><a href="https://unpkg.com/dark-light-element@latest/demo.html">https://unpkg.com/dark-light-element@latest/demo.html</a></td></tr><tr><td>@dyf19118</td><td><a href="https://github.com/dyf19118/quark-ui-rate">https://github.com/dyf19118/quark-ui-rate</a></td><td><img src="https://github.com/hellof2e/quark-cli/assets/14307551/e11e6c49-4c18-4bca-adc3-01a7198ab2e2" alt="image"></td></tr><tr><td>@xsf0105</td><td><a href="https://github.com/hellof2e/quark-doc-home">https://github.com/hellof2e/quark-doc-home</a></td><td><a href="https://vue-quarkdesign.hellobike.com">https://vue-quarkdesign.hellobike.com</a></td></tr></tbody></table>`,22),o=[h],d={},m="",F=t({__name:"publishing.zh-CN",setup(c,{expose:u}){return u({frontmatter:{},excerpt:void 0}),(p,r)=>(a(),s("div",l,o))}});export{F as default,m as excerpt,d as frontmatter};
