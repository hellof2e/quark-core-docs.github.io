import{d as a,c as n,b as t,o as l}from"./vue.ab60813e.js";const p={class:"markdown-body"},e=t(`<h2>Testing</h2><p>\u6211\u4EEC\u63A8\u8350 <a href="https://open-wc.org/docs/testing/testing-package/">@open-wc/testing</a> \u4F5C\u4E3A Web components \u7684\u6D4B\u8BD5\u6846\u67B6\uFF0C<code class="">@open-wc/testing</code>\u662F\u4E00\u4E2A\u4E13\u95E8\u9488\u5BF9 Web components \u7684\u6D4B\u8BD5\u5E93\u3002 \u4EE5\u4E00\u4E2A button \u7EC4\u4EF6\u4E3A\u4F8B\uFF1A</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> QuarkElement, { property, customElement, createRef } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;../loading&quot;</span>;
<span class="hljs-keyword">import</span> style <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;./style.css&quot;</span>;

<span class="hljs-meta">@customElement</span>({
  <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-button&quot;</span>,
  style,
})
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">QuarkButton</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{
  <span class="hljs-function"><span class="hljs-title">constructor</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">super</span>();
  }

  <span class="hljs-meta">@property</span>({
    <span class="hljs-attr">type</span>: <span class="hljs-built_in">Boolean</span>,
  })
  disabled = <span class="hljs-literal">false</span>;

  <span class="hljs-meta">@property</span>()
  <span class="hljs-attr">size</span>: <span class="hljs-built_in">string</span>;

  <span class="hljs-meta">@property</span>()
  <span class="hljs-keyword">type</span> = <span class="hljs-string">&quot;&quot;</span>;

  <span class="hljs-meta">@property</span>()
  <span class="hljs-attr">icon</span>: <span class="hljs-built_in">string</span> | <span class="hljs-literal">undefined</span> = <span class="hljs-literal">undefined</span>;

  <span class="hljs-meta">@property</span>()
  <span class="hljs-attr">shape</span>: <span class="hljs-built_in">string</span>;

  <span class="hljs-meta">@property</span>({
    <span class="hljs-attr">type</span>: <span class="hljs-built_in">Boolean</span>,
  })
  loading = <span class="hljs-literal">false</span>;

  <span class="hljs-meta">@property</span>()
  <span class="hljs-attr">loadtype</span>: <span class="hljs-built_in">string</span>;

  <span class="hljs-meta">@property</span>()
  <span class="hljs-attr">loadingcolor</span>: <span class="hljs-built_in">string</span>;

  <span class="hljs-meta">@property</span>()
  <span class="hljs-attr">loadingsize</span>: <span class="hljs-built_in">number</span>;

  <span class="hljs-meta">@property</span>({
    <span class="hljs-attr">type</span>: <span class="hljs-built_in">Boolean</span>,
  })
  plain = <span class="hljs-literal">false</span>;

  slotRef: <span class="hljs-built_in">any</span> = createRef();

  renderIcon = <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">if</span> (<span class="hljs-built_in">this</span>.icon &amp;&amp; <span class="hljs-built_in">this</span>.icon.startsWith(<span class="hljs-string">&quot;http&quot;</span>)) {
      <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;quark-button-icon&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{this.icon}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">img</span>&gt;</span></span>;
    }
    <span class="hljs-keyword">if</span> (<span class="hljs-built_in">this</span>.loading) {
      <span class="hljs-keyword">return</span> (
        <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">quark-loading</span>
          <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;quark-button-load&quot;</span>
          <span class="hljs-attr">color</span>=<span class="hljs-string">{this.loadingcolor</span> ? <span class="hljs-attr">this.loadingcolor</span> <span class="hljs-attr">:</span> &quot;#<span class="hljs-attr">fff</span>&quot;}
          <span class="hljs-attr">size</span>=<span class="hljs-string">{this.loadingsize</span> ? <span class="hljs-attr">pxToVw</span>(<span class="hljs-attr">this.loadingsize</span>) <span class="hljs-attr">:</span> <span class="hljs-attr">pxToVw</span>(<span class="hljs-attr">20</span>)}
          <span class="hljs-attr">type</span>=<span class="hljs-string">{this.loadtype</span> ? <span class="hljs-attr">this.loadtype</span> <span class="hljs-attr">:</span> &quot;<span class="hljs-attr">spinner</span>&quot;}
        /&gt;</span></span>
      );
    }
    <span class="hljs-keyword">return</span> <span class="hljs-literal">null</span>;
  };

  <span class="hljs-function"><span class="hljs-title">componentDidMount</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">this</span>.slotRef.current.addEventListener(<span class="hljs-string">&quot;click&quot;</span>, <span class="hljs-function">(<span class="hljs-params">e: Event</span>) =&gt;</span> {
      <span class="hljs-keyword">if</span> (<span class="hljs-built_in">this</span>.disabled || <span class="hljs-built_in">this</span>.loading) {
        e.stopPropagation();
      }
    });
  }

  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> (
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{this.slotRef}</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;quark-button&quot;</span>&gt;</span>
        {this.renderIcon()}
        <span class="hljs-tag">&lt;<span class="hljs-name">slot</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">slot</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  }
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> QuarkButton;

</code></pre><p>\u5176\u5355\u6D4B\u7528\u4F8B\u5982\u4E0B\uFF1A</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { expect, fixture } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@open-wc/testing&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/button&quot;</span>;
<span class="hljs-keyword">import</span> sinon <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;sinon&quot;</span>;

<span class="hljs-keyword">const</span> data = {
  <span class="hljs-attr">slotText</span>: <span class="hljs-string">&quot;\u4E3B\u8981\u6309\u94AE&quot;</span>,
  <span class="hljs-attr">disabled</span>: <span class="hljs-literal">false</span>,
  <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;primary&quot;</span>,
  <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https://nve_tel%20(1).png&quot;</span>,
  <span class="hljs-attr">loading</span>: <span class="hljs-literal">true</span>,
  <span class="hljs-attr">shape</span>: <span class="hljs-string">&quot;round&quot;</span>,
};
<span class="hljs-keyword">let</span> el;

describe(<span class="hljs-string">&quot;&lt;quark-button&gt;&quot;</span>, <span class="hljs-keyword">async</span> () =&gt; {
  it(<span class="hljs-string">&quot;icon exist&quot;</span>, <span class="hljs-keyword">async</span> () =&gt; {
    el = <span class="hljs-keyword">await</span> fixture(
      <span class="hljs-string">\`&lt;quark-button 
          icon=<span class="hljs-subst">\${data.icon}</span>
        &gt;
          <span class="hljs-subst">\${data.slotText}</span>
        &lt;/quark-button&gt;\`</span>
    );
    <span class="hljs-keyword">const</span> icon = el.shadowRoot.querySelector(<span class="hljs-string">&quot;.quark-button-icon&quot;</span>);
    expect(icon).to.exist;
  });

  it(<span class="hljs-string">&quot;disabled attribute&quot;</span>, <span class="hljs-keyword">async</span> () =&gt; {
    el = <span class="hljs-keyword">await</span> fixture(
      <span class="hljs-string">\`&lt;quark-button disabled=<span class="hljs-subst">\${data.disabled}</span>&gt;
          <span class="hljs-subst">\${data.slotText}</span>
        &lt;/quark-button&gt;\`</span>
    );
    expect(el.disabled).to.equal(data.disabled);
  });

  it(<span class="hljs-string">&quot;type attribute&quot;</span>, <span class="hljs-keyword">async</span> () =&gt; {
    el = <span class="hljs-keyword">await</span> fixture(
      <span class="hljs-string">\`&lt;quark-button type=<span class="hljs-subst">\${data.<span class="hljs-keyword">type</span>}</span>&gt;
          <span class="hljs-subst">\${data.slotText}</span>
        &lt;/quark-button&gt;\`</span>
    );
    expect(el.type).to.equal(data.type);
  });

  it(<span class="hljs-string">&quot;loading attribute&quot;</span>, <span class="hljs-keyword">async</span> () =&gt; {
    el = <span class="hljs-keyword">await</span> fixture(
      <span class="hljs-string">\`&lt;quark-button loading=<span class="hljs-subst">\${data.loading}</span>&gt;
          <span class="hljs-subst">\${data.slotText}</span>
        &lt;/quark-button&gt;\`</span>
    );
    expect(el.loading).to.equal(data.loading);
  });

  it(<span class="hljs-string">&quot;shape attribute&quot;</span>, <span class="hljs-keyword">async</span> () =&gt; {
    el = <span class="hljs-keyword">await</span> fixture(
      <span class="hljs-string">\`&lt;quark-button shape=<span class="hljs-subst">\${data.shape}</span>&gt;
          <span class="hljs-subst">\${data.slotText}</span>
        &lt;/quark-button&gt;\`</span>
    );
    expect(el.shape).to.equal(data.shape);
  });

  it(<span class="hljs-string">&quot;slot attribute&quot;</span>, <span class="hljs-keyword">async</span> () =&gt; {
    el = <span class="hljs-keyword">await</span> fixture(
      <span class="hljs-string">\`&lt;quark-button shape=<span class="hljs-subst">\${data.shape}</span>&gt;<span class="hljs-subst">\${data.slotText}</span>&lt;/quark-button&gt;\`</span>
    );
    <span class="hljs-keyword">const</span> slot = el.textContent;
    expect(data.slotText).to.equal(slot);
  });

  it(<span class="hljs-string">&quot;plain attribute&quot;</span>, <span class="hljs-keyword">async</span> () =&gt; {
    el = <span class="hljs-keyword">await</span> fixture(<span class="hljs-string">\`&lt;quark-button&gt;<span class="hljs-subst">\${data.slotText}</span>&lt;/quark-button&gt;\`</span>);
    expect(el.plain).to.equal(<span class="hljs-literal">false</span>);
  });

  it(<span class="hljs-string">&quot;loading attribute default type&quot;</span>, <span class="hljs-keyword">async</span> () =&gt; {
    el = <span class="hljs-keyword">await</span> fixture(<span class="hljs-string">\`&lt;quark-button loading&gt;<span class="hljs-subst">\${data.slotText}</span>&lt;/quark-button&gt;\`</span>);
    <span class="hljs-keyword">const</span> loading = el.shadowRoot.querySelector(<span class="hljs-string">&quot;.quark-button-load&quot;</span>);
    expect(loading.color).to.equal(<span class="hljs-string">&quot;#fff&quot;</span>);
    expect(loading.type).to.equal(<span class="hljs-string">&quot;spinner&quot;</span>);
    expect(loading.size).to.equal(<span class="hljs-string">&quot;20&quot;</span>);
  });

  it(<span class="hljs-string">&quot;loading attribute customize type&quot;</span>, <span class="hljs-keyword">async</span> () =&gt; {
    el = <span class="hljs-keyword">await</span> fixture(
      <span class="hljs-string">\`&lt;quark-button loading loadtype=&quot;circular&quot; loadingcolor=&quot;red&quot; loadingsize=&quot;30&quot;&gt;<span class="hljs-subst">\${data.slotText}</span>&lt;/quark-button&gt;\`</span>
    );
    <span class="hljs-keyword">const</span> loading = el.shadowRoot.querySelector(<span class="hljs-string">&quot;.quark-button-load&quot;</span>);
    expect(loading.color).to.equal(<span class="hljs-string">&quot;red&quot;</span>);
    expect(loading.type).to.equal(<span class="hljs-string">&quot;circular&quot;</span>);
    expect(loading.size).to.equal(<span class="hljs-string">&quot;30&quot;</span>);
  });

  it(<span class="hljs-string">&quot;should change loading state instantly by default&quot;</span>, <span class="hljs-keyword">async</span> () =&gt; {
    el = <span class="hljs-keyword">await</span> fixture(
      <span class="hljs-string">\`&lt;quark-button loading=&quot;false&quot; id=&quot;btn&quot;&gt;<span class="hljs-subst">\${data.slotText}</span>&lt;/quark-button&gt;\`</span>
    );
    el.addEventListener(<span class="hljs-string">&quot;click&quot;</span>, <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">handleClick</span>(<span class="hljs-params"></span>) </span>{
      el.loading = <span class="hljs-literal">true</span>;
    });
    el.dispatchEvent(<span class="hljs-keyword">new</span> Event(<span class="hljs-string">&quot;click&quot;</span>));
    expect(el.loading).to.equal(<span class="hljs-literal">true</span>);
  });

  it(<span class="hljs-string">&quot;should not clickable when button is loading&quot;</span>, <span class="hljs-keyword">async</span> () =&gt; {
    <span class="hljs-keyword">const</span> eventspy = sinon.spy();
    el = <span class="hljs-keyword">await</span> fixture(
      <span class="hljs-string">\`&lt;quark-button loading=&quot;true&quot;&gt;<span class="hljs-subst">\${data.slotText}</span>&lt;/quark-button&gt;\`</span>
    );
    el.dispatchEvent(<span class="hljs-keyword">new</span> Event(<span class="hljs-string">&quot;click&quot;</span>));
    expect(eventspy.called).to.equal(<span class="hljs-literal">false</span>);
  });
});


</code></pre><p>\u66F4\u591A\u4F7F\u7528\u793A\u4F8B\uFF0C\u8BF7\u53C2\u8003<a href="https://open-wc.org/docs/testing/testing-package/">\u5B98\u7F51</a></p>`,6),o=[e],h={},j="",d=a({__name:"testing.zh-CN",setup(c,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,u)=>(l(),n("div",p,o))}});export{d as default,j as excerpt,h as frontmatter};
