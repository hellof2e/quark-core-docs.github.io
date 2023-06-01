import{d as a,c as n,b as l,o as p}from"./vue.051b3dff.js";const t={class:"markdown-body"},e=l(`<h2>Rendering</h2><p>\u4E3A\u4F60\u7684\u81EA\u5B9A\u4E49\u5143\u7D20\u6DFB\u52A0\u4E00\u4E2A <code class="">render</code> \u65B9\u6CD5\u3002</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>;
<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-count&quot;</span> })
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Count</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{
   <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
     <span class="hljs-keyword">return</span> (
        <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">button</span>&gt;</span>Count<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></span>
     );
  }
}
</code></pre><p><code class="">Qaurk</code> \u4F7F\u7528 <code class="">tsx</code> \u6765\u4F5C\u4E3A <code class="">UI</code> \u8868\u8FBE\u5F0F\uFF0C\u56E0\u6B64 <code class="">render</code> \u51FD\u6570\u5185\u53EF\u4EE5\u5305\u542B\u4EFB\u4F55 <code class="">tsx</code> \u8BED\u6CD5,\u5982\u6761\u4EF6\u6E32\u67D3\u3001\u4E09\u76EE\u8FD0\u7B97\u7B26\u7B49\u3002\u4F60\u53EF\u4EE5\u50CF\u5199 <code class="">React</code> \u7EC4\u4EF6\u4E00\u6837\uFF0C\u5199 <code class="">Quark</code> \u7EC4\u4EF6\u3002</p><p>\u6761\u4EF6\u6E32\u67D3\uFF1A</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>;

<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-count&quot;</span> })
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Count</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{
   count = <span class="hljs-number">0</span>

   renderItem = <span class="hljs-function">() =&gt;</span> {
     <span class="hljs-keyword">if</span> (<span class="hljs-built_in">this</span>.count &gt; <span class="hljs-number">0</span>) {
        <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>{this.count}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
     }
     <span class="hljs-keyword">return</span> <span class="hljs-literal">null</span>
   }

   <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
     <span class="hljs-keyword">return</span> (
        <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">button</span>&gt;</span>Click<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></span>
        {<span class="hljs-built_in">this</span>.renderItem()}
     );
  }
}
</code></pre><p>\u4E09\u76EE\u8FD0\u7B97\u7B26\uFF1A</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>;
<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-count&quot;</span> })
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Count</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{
   count = <span class="hljs-number">0</span>
   <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
     <span class="hljs-keyword">return</span> (
        <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>{this.count &gt; 0 ? &quot;More&quot; : &quot;Less&quot;}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
     );
  }
}
</code></pre><p>\u5217\u8868\u6E32\u67D3\uFF1A</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>;
<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-count&quot;</span> })
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Count</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{
   list = [{<span class="hljs-attr">key</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span>}, {<span class="hljs-attr">key</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">2</span>},{<span class="hljs-attr">key</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">3</span>}]
   <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
     <span class="hljs-keyword">return</span> (
        <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
          {
            this.list.map((item) =&gt; {
                return <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{item.key}</span>&gt;</span>{item.value}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
            })
          }
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
     );
  }
}
</code></pre><p>\u7B49\u2026</p>`,11),c=[e],j={},d="",m=a({__name:"rendering.en-US",setup(u,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,o)=>(p(),n("div",t,c))}});export{m as default,d as excerpt,j as frontmatter};
