import{d as a,c as n,b as t,o as l}from"./vue.c3a40bc1.js";const e={class:"markdown-body"},p=t(`<h2>Unsafe HTML</h2><p>\u6E32\u67D3\u4E0D\u5B89\u5168\u7684 HTML \u7ED3\u6784\u3002</p><pre><code class="language-jsx"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">MyComponent</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{
  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">dangerouslySetInnerHTML</span>=<span class="hljs-string">{{__html:</span> \`<span class="hljs-attr">lorem</span> &lt;<span class="hljs-attr">b</span> <span class="hljs-attr">onmouseover</span>=<span class="hljs-string">&quot;alert(&#39;mouseover&#39;);&quot;</span>&gt;</span>ipsum<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span>\`}}  /&gt;</span>
  }
}
</code></pre>`,3),c=[p],d={},j="",m=a({__name:"unsafeHTML.zh-CN",setup(o,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,h)=>(l(),n("div",e,c))}});export{m as default,j as excerpt,d as frontmatter};
