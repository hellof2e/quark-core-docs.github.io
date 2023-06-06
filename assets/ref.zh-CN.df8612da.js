import{d as a,c as n,b as l,o as t}from"./vue.da277645.js";const p={class:"markdown-body"},e=l(`<h2>Ref</h2><p>\u901A\u8FC7 <code class="">ref</code> \u83B7\u53D6 <code class="">dom</code> \u8282\u70B9\u5B9E\u4F8B\u3002</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement,
  customElement,
  property,
  state,
  createRef,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>;
<span class="hljs-keyword">import</span> style <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;./style.css&quot;</span>;

<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-badge&quot;</span>, style })
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">QuarkBadge</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{

  <span class="hljs-attr">inputRef</span>: <span class="hljs-built_in">any</span> = createRef();

  <span class="hljs-function"><span class="hljs-title">componentDidMount</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">this</span>.firstUpdated();
  }

  <span class="hljs-function"><span class="hljs-title">firstUpdated</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">this</span>.inputRef.current?.focus();
  }

  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> (
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{this.inputRef}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">input</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  }
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> QuarkBadge;
</code></pre>`,3),c=[e],i={},d="",j=a({__name:"ref.zh-CN",setup(r,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(o,h)=>(t(),n("div",p,c))}});export{j as default,d as excerpt,i as frontmatter};
