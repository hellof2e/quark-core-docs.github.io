import{d as s,c as n,b as e,o as a}from"./vue.d5f22cb1.js";const t={class:"markdown-body"},o=e(`<h2>Defining a component</h2><p>\u81EA\u5B9A\u4E49\u4E00\u4E2A\u7EE7\u627F\u81EA <code class="">QuarkElement</code> \u7684\u7C7B\uFF0C \u7136\u540E\u4F7F\u7528 <code class="">@customElement</code> \u88C5\u9970\u5668\u4FEE\u9970\u3002</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>

<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-count&quot;</span> })
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Count</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{<span class="hljs-comment">/***/</span>}
</code></pre><p>\u88C5\u9970\u5668 <code class="">@customElement</code> \u5E95\u5C42\u901A\u8FC7 <a href="https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define">customElements.define</a> \u5411\u6D4F\u89C8\u5668\u6CE8\u518C\u81EA\u5B9A\u4E49\u5143\u7D20\u3002</p><h3>Quarkc \u7EC4\u4EF6\u672C\u8D28\u662F\u4E00\u4E2A\u81EA\u5B9A\u4E49\u6807\u7B7E</h3><p>\u901A\u8FC7 <code class="">@customElement</code> \u521B\u5EFA\u7684\u7EC4\u4EF6\uFF0C\u76F8\u5F53\u4E8E\u5728<a href="https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define">\u81EA\u5B9A\u4E49HTML\u5143\u7D20</a> \u3002</p><p>\u56E0\u6B64\uFF0C\u4F60\u53EF\u4EE5\u50CF\u4F7F\u7528\u4EFB\u4F55 <code class="">HTML</code> \u5185\u7F6E\u5143\u7D20\u90A3\u6837\u4F7F\u7528\u81EA\u5B9A\u4E49\u5143\u7D20\u3002</p><h3>\u4F7F\u7528 Quarkc \u7EC4\u4EF6</h3><p>\u4E0D\u50CF\u6280\u672F\u6846\u67B6\u521B\u5EFA\u7684\u7EC4\u4EF6\uFF0C\u4F7F\u7528 Quarkc \u7EC4\u4EF6\u7684\u65F6\u5019\u4F60\u53EA\u9700\u8981\u5BFC\u5165\u5373\u53EF</p><pre><code class="language-js"><span class="hljs-keyword">import</span> <span class="hljs-string">&#39;my-component&#39;</span>  <span class="hljs-comment">// \u2611\uFE0F</span>
<span class="hljs-comment">// import Count from &quot;my-component&quot;  \u274C</span>
<span class="hljs-comment">// import { Count } from &quot;my-component&quot; \u274C</span>

&lt;quark-count /&gt;  <span class="hljs-comment">// \u4F7F\u7528</span>
</code></pre><p>\u6216\u8005\u7528 JS \u7684\u65B9\u5F0F\u521B\u5EFA\u8FD9\u4E2A\u5143\u7D20\uFF08\u7EC4\u4EF6\uFF09\u3002</p><pre><code class="language-tsx"><span class="hljs-keyword">const</span> count = <span class="hljs-built_in">document</span>.createElement(<span class="hljs-string">&#39;quark-count&#39;</span>)
</code></pre>`,12),c=[o],F={},m="",d=s({__name:"defining.zh-CN",setup(l,{expose:u}){return u({frontmatter:{},excerpt:void 0}),(p,E)=>(a(),n("div",t,c))}});export{d as default,m as excerpt,F as frontmatter};
