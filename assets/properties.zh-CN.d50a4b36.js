import{d as a,c as n,b as l,o as u}from"./vue.ffe6b1ca.js";const p={class:"markdown-body"},c=l(`<h2>Reactive properties</h2><h3>Props</h3><p>\u901A\u8FC7 <code class="">@property</code> \u4E3A\u4F60\u7684\u7EC4\u4EF6\u5C5E\u6027\u589E\u52A0\u54CD\u5E94\u5F0F\u7279\u6027\uFF0C<code class="">@property</code> \u652F\u6301\u901A\u8FC7\u53C2\u6570\u6765\u6807\u6CE8\u7C7B\u578B\u3002</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement, property} <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>;

<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-count&quot;</span> })
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Count</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{
   <span class="hljs-meta">@property</span>({
     <span class="hljs-attr">type</span>: <span class="hljs-built_in">Number</span>,
   })
   count = <span class="hljs-number">0</span>
   <span class="hljs-meta">@property</span>({
     <span class="hljs-attr">type</span>: <span class="hljs-built_in">Boolean</span>,
   })
   disabled = <span class="hljs-literal">false</span>
   click = <span class="hljs-function">() =&gt;</span> {
     <span class="hljs-keyword">if</span>(!disabled) {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;count click&#39;</span>)
     }
   }
   <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
        <span class="hljs-keyword">return</span> (
            <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{this.click}</span>&gt;</span>{count}<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></span>
        );
  }
}
</code></pre><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-count</span> <span class="hljs-attr">count</span> = <span class="hljs-string">&quot;6&quot;</span> <span class="hljs-attr">disabled</span> /&gt;</span>
</code></pre><p>\u5F53 <code class="">count</code> \u6216\u8005 <code class="">disabled</code> \u5C5E\u6027\u53D8\u66F4\u540E\uFF0C\u7EC4\u4EF6\u5C06\u81EA\u52A8\u66F4\u65B0\u3002</p><ul><li>\u7531\u4E8E <code class="">HTML</code> \u5143\u7D20\u7684\u5C5E\u6027\u53EA\u80FD\u662F\u5B57\u7B26\u4E32\uFF0C\u56E0\u6B64\u7EC4\u4EF6\u5185\u90E8\u7684\u5C5E\u6027\u9700\u8981\u6B63\u786E\u6807\u8BB0\u7C7B\u578B\uFF0C\u8FD9\u6837 <code class="">Quark</code> \u5E95\u5C42\u4F1A\u5E2E\u52A9\u505A\u7C7B\u578B\u8F6C\u6362\u3002</li></ul><h3>State</h3><p>\u901A\u8FC7 <code class="">@state</code> \u4E3A\u4F60\u7EC4\u4EF6\u7684\u5185\u90E8\u72B6\u6001\u589E\u52A0\u54CD\u5E94\u5F0F\u7279\u6027\u3002</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement, property} <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>;

<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-count&quot;</span> })
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Count</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{
   <span class="hljs-meta">@state</span>()
   count = <span class="hljs-number">0</span>
   click = <span class="hljs-function">() =&gt;</span> {
     <span class="hljs-built_in">this</span>.count += <span class="hljs-number">1</span>;
   }
   <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
        <span class="hljs-keyword">return</span> (
            <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{this.click}</span>&gt;</span>{count}<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></span>
        );
  }
}
</code></pre><p>\u70B9\u51FB\u6309\u94AE\u540E\uFF0C\u7EC4\u4EF6\u5C06\u81EA\u52A8\u66F4\u65B0\u3002</p><h3>\u9AD8\u7EA7\u6280\u5DE7</h3><p>\u9488\u5BF9\u6709\u4E9B\u7EC4\u4EF6\u9700\u8981\u4F20\u9012\u590D\u6742\u6570\u636E\u7C7B\u578B\u7684\u573A\u666F\uFF0C\u53EF\u91C7\u7528\u5982\u4E0B\u65B9\u5F0F\uFF1A</p><p>\u7EC4\u4EF6\u5185\u90E8\u66B4\u9732\u4E00\u4E2A <code class="">setColumns</code> \u65B9\u6CD5\u3002</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">interface</span> PickerColumn { text: <span class="hljs-built_in">string</span>; children: PickerColumn[] }

<span class="hljs-meta">@customElement</span>({<span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-cascade-picker&quot;</span>})
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">QuarkCascadePicker</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{
  <span class="hljs-function"><span class="hljs-title">constructor</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">super</span>();
  }
  <span class="hljs-attr">columns</span>: PickerColumn[] = [];

  <span class="hljs-function"><span class="hljs-title">setColumns</span>(<span class="hljs-params">columns: PickerColumn[]</span>)</span> {
    <span class="hljs-keyword">if</span> (!columns || columns.length &lt; <span class="hljs-number">1</span>) {
      <span class="hljs-keyword">return</span>;
    }
    <span class="hljs-built_in">this</span>.columns = columns;
  }

  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> (
      <span class="hljs-comment">/***/</span>
    );
  }
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> QuarkCascadePicker;
</code></pre><p>\u4F7F\u7528\u65F6\uFF0C\u901A\u8FC7 <code class="">ref</code> \u62FF\u5230\u7EC4\u4EF6\u7684\u5B9E\u4F8B\uFF0C\u7136\u540E\u8C03\u7528\u66B4\u9732\u7684 <code class="">setColumns</code> \u65B9\u6CD5\u5373\u53EF\u5B8C\u6210\u590D\u6742\u6570\u636E\u7C7B\u578B\u7684\u4F20\u9012\u3002</p><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> pickerRef = useRef(<span class="hljs-literal">null</span>);

  useEffect(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> { <span class="hljs-attr">current</span>: pickerCurrent } = pickerRef;
      pickerCurrent.setColumns([]);
  }, []);

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">quark-cascade-picker</span>
        <span class="hljs-attr">ref</span>=<span class="hljs-string">{pickerRef}</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><p><a href="https://github.com/hellof2e/quark-design/blob/main/packages/quark/src/cascadepicker/index.tsx">\u66F4\u591A\u4F7F\u7528\u6280\u5DE7\u53C2\u8003</a></p>`,18),t=[c],j={},i="",d=a({__name:"properties.zh-CN",setup(e,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,o)=>(u(),n("div",p,t))}});export{d as default,i as excerpt,j as frontmatter};
