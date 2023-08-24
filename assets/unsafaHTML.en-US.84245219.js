import{d as a,c as n,b as t,o as e}from"./vue.01821cea.js";const l={class:"markdown-body"},p=t(`<h2>Unsafe HTML</h2><p>Rendering unsafe HTML structures.</p><pre><code class="language-jsx"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">MyComponent</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{
  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">dangerouslySetInnerHTML</span>=<span class="hljs-string">{{__html:</span> \`<span class="hljs-attr">lorem</span> &lt;<span class="hljs-attr">b</span> <span class="hljs-attr">onmouseover</span>=<span class="hljs-string">&quot;alert(&#39;mouseover&#39;);&quot;</span>&gt;</span>ipsum<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span>\`}}  /&gt;</span>
  }
}
</code></pre>`,3),c=[p],j={},m="",i=a({__name:"unsafaHTML.en-US",setup(r,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(o,h)=>(e(),n("div",l,c))}});export{i as default,m as excerpt,j as frontmatter};
