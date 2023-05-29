import{d as a,c as n,b as l,o as t}from"./vue.ffe6b1ca.js";const p={class:"markdown-body"},c=l(`<h2>Install</h2><pre><code class="language-shell">npm i quarkc --save
</code></pre><h3>\u5FEB\u901F\u5F00\u59CB</h3><p>\u81EA\u5B9A\u4E49\u5143\u7D20\uFF1A</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, property, customElement } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>;

<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-count&quot;</span> })
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Count</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{
  <span class="hljs-meta">@property</span>({
    <span class="hljs-attr">type</span>: <span class="hljs-built_in">Number</span>
  })
  <span class="hljs-attr">count</span>: <span class="hljs-built_in">number</span> = <span class="hljs-number">0</span>;
  add = <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-built_in">this</span>.count += <span class="hljs-number">1</span>;
  }
  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> (
        <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{this.add}</span>&gt;</span>count is: { this.count}<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></span>
    );
  }
}
</code></pre><p>\u5F00\u59CB\u4F7F\u7528\uFF1A</p><pre><code class="language-html"> <span class="hljs-tag">&lt;<span class="hljs-name">quark-count</span> <span class="hljs-attr">count</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-count</span>&gt;</span>
</code></pre><p>\u606D\u559C\uFF0C\u4F60\u5DF2\u7ECF\u5165\u95E8\u4E86\uFF01</p>`,8),e=[c],j={},i="",d=a({__name:"install.en-US",setup(u,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(o,r)=>(t(),n("div",p,e))}});export{d as default,i as excerpt,j as frontmatter};
