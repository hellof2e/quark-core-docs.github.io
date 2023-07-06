import{d as u,c as e,b as a,o as n}from"./vue.08c63917.js";const t={class:"markdown-body"},c=a(`<h2>Defining a component</h2><p>\u81EA\u5B9A\u4E49\u4E00\u4E2A\u7EE7\u627F\u81EA <code class="">QuarkElement</code> \u7684\u7C7B\uFF0C \u7136\u540E\u4F7F\u7528 <code class="">@customElement</code> \u88C5\u9970\u5668\u4FEE\u9970\u3002</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>;

<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-count&quot;</span> })
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Count</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{<span class="hljs-comment">/***/</span>}
</code></pre><p>\u88C5\u9970\u5668 <code class="">@customElement</code> \u5E95\u5C42\u901A\u8FC7 <a href="https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define">customElements.define</a> \u5411\u6D4F\u89C8\u5668\u6CE8\u518C\u81EA\u5B9A\u4E49\u5143\u7D20\u3002</p><h3>Quark \u7EC4\u4EF6\u662F\u4E00\u4E2A HTML \u5143\u7D20</h3><p>\u901A\u8FC7 <code class="">@customElement</code> \u4FEE\u9970\u7684\u5143\u7D20\uFF0C\u76F8\u5F53\u4E8E\u5728<a href="https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define">\u81EA\u5B9A\u4E49HTML\u5143\u7D20</a> \u3002\u56E0\u6B64\uFF0C\u4F60\u53EF\u4EE5\u50CF\u4F7F\u7528\u4EFB\u4F55 <code class="">HTML</code> \u5185\u7F6E\u5143\u7D20\u90A3\u6837\u4F7F\u7528\u81EA\u5B9A\u4E49\u5143\u7D20\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-count</span> /&gt;</span>
</code></pre><pre><code class="language-tsx"><span class="hljs-keyword">const</span> count = <span class="hljs-built_in">document</span>.createElement(<span class="hljs-string">&#39;quark-count&#39;</span>);
</code></pre>`,8),o=[c],E={},m="",h=u({__name:"defining.en-US",setup(l,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(p,r)=>(n(),e("div",t,o))}});export{h as default,m as excerpt,E as frontmatter};
