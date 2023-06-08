import{d as a,c as n,b as t,o as l}from"./vue.706f5d7d.js";const p={class:"markdown-body"},u=t(`<h2>Development</h2><p><code class="">quarkc</code> \u652F\u6301 <code class="">TypeScript</code>\uFF0C\u7528 <code class="">quarkc</code> \u7F16\u5199\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u5176\u4EE3\u7801\u7ED3\u6784\u5927\u6982\u5982\u4E0B\uFF1A</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { QuarkElement, customElement, property } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkc&quot;</span>
<span class="hljs-keyword">import</span> style <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./index.css&#39;</span>

<span class="hljs-meta">@customElement</span>({ <span class="hljs-attr">tag</span>: <span class="hljs-string">&quot;quark-count&quot;</span>, style })
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Count</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">QuarkElement</span> </span>{
  <span class="hljs-meta">@property</span>({
    <span class="hljs-attr">type</span>: <span class="hljs-built_in">Boolean</span>,
  })
  disabled = <span class="hljs-literal">false</span>

  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> (
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;quark_count_button&quot;</span>&gt;</span>Click<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></span>
    );
  }
}
</code></pre><p>\u5176\u4E2D\u6837\u5F0F\u91C7\u7528\u72EC\u7ACB\u6587\u4EF6\u7684\u65B9\u5F0F\uFF0C\u56E0\u6B64\u8981\u6C42\u4F60\u7684\u6784\u5EFA\u5DE5\u5177\u652F\u6301\u8FD9\u79CD css \u6587\u4EF6\u7684\u5BFC\u5165\uFF0C\u6BD4\u5982 <code class="">rollup</code> \u7684 <code class="">rollup-plugin-import-css</code>. \u5982\u679C\u4F60\u7684\u7EC4\u4EF6\u9700\u8981\u505A\u5C4F\u5E55\u9002\u914D\uFF0C\u53EF\u4EE5\u5728\u6784\u5EFA\u9636\u6BB5\u4F7F\u7528\u76F8\u5173\u63D2\u4EF6\u89E3\u51B3\uFF0C\u6BD4\u5982 <code class="">postcss-px-to-viewport</code>.</p><p>\u4EE5 <code class="">rollup</code> \u6253\u5305\u5DE5\u5177\u4E3A\u793A\u4F8B\uFF0C\u4E00\u4E2A\u53EF\u7528\u4E8E\u9762\u5411\u751F\u4EA7\u7684\u6784\u5EFA\u914D\u7F6E\u5982\u4E0B\uFF1A</p><pre><code class="language-js"><span class="hljs-comment">/*
* rollup.config.js
*/</span>
<span class="hljs-keyword">import</span> commonjs <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@rollup/plugin-commonjs&quot;</span>;
<span class="hljs-keyword">import</span> { nodeResolve } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@rollup/plugin-node-resolve&quot;</span>;
<span class="hljs-keyword">import</span> { babel } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@rollup/plugin-babel&quot;</span>;
<span class="hljs-keyword">import</span> typescript <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@rollup/plugin-typescript&quot;</span>;
<span class="hljs-keyword">import</span> postcss <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/rollup-plugin-postcss&quot;</span>;
<span class="hljs-keyword">import</span> px2vp <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;postcss-px-to-viewport&quot;</span>;

<span class="hljs-keyword">const</span> extensions = [<span class="hljs-string">&quot;.js&quot;</span>, <span class="hljs-string">&quot;.ts&quot;</span>, <span class="hljs-string">&quot;.tsx&quot;</span>];

<span class="hljs-comment">/**
 * <span class="hljs-doctag">@type <span class="hljs-type">{import(&#39;rollup&#39;).RollupOptions}</span></span>
 */</span>
<span class="hljs-keyword">const</span> options = [
  {
    <span class="hljs-attr">input</span>: <span class="hljs-string">&quot;./src/index.ts&quot;</span>,
    <span class="hljs-attr">output</span>: {
      <span class="hljs-attr">dir</span>: <span class="hljs-string">&quot;lib&quot;</span>,
      <span class="hljs-attr">chunkFileNames</span>: <span class="hljs-string">&quot;[name].js&quot;</span>,
      <span class="hljs-attr">format</span>: <span class="hljs-string">&quot;es&quot;</span>,
    },
    <span class="hljs-attr">treeshake</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">plugins</span>: [
      typescript(),
      commonjs(),
      nodeResolve({
        extensions,
        <span class="hljs-comment">// modulesOnly: true,</span>
      }),
      babel({
        <span class="hljs-attr">babelHelpers</span>: <span class="hljs-string">&quot;runtime&quot;</span>,
        <span class="hljs-attr">exclude</span>: <span class="hljs-string">&quot;node_modules/**&quot;</span>,
        extensions,
      }),
    ],
  },
];

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> options;
</code></pre><pre><code class="language-js"><span class="hljs-comment">/*
* babel.config.js
*/</span>
<span class="hljs-keyword">const</span> presets = [[<span class="hljs-string">&quot;@babel/preset-env&quot;</span>], [<span class="hljs-string">&quot;@babel/preset-typescript&quot;</span>]];
<span class="hljs-keyword">const</span> plugins = [
  [<span class="hljs-string">&quot;@babel/plugin-transform-runtime&quot;</span>],
  [
    <span class="hljs-string">&quot;@babel/plugin-proposal-decorators&quot;</span>,
    {
      <span class="hljs-attr">legacy</span>: <span class="hljs-literal">true</span>,
    },
  ],
];

<span class="hljs-built_in">module</span>.exports = { presets, plugins };
</code></pre><pre><code class="language-json"><span class="hljs-comment">/*
* tsconfig.json
*/</span>
{
  <span class="hljs-attr">&quot;compilerOptions&quot;</span>: {
    <span class="hljs-attr">&quot;noImplicitAny&quot;</span>: <span class="hljs-literal">false</span>,
    <span class="hljs-attr">&quot;noImplicitThis&quot;</span>: <span class="hljs-literal">false</span>,
    <span class="hljs-attr">&quot;baseUrl&quot;</span>: <span class="hljs-string">&quot;.&quot;</span>,
    <span class="hljs-attr">&quot;rootDir&quot;</span>: <span class="hljs-string">&quot;./src&quot;</span>,
    <span class="hljs-attr">&quot;target&quot;</span>: <span class="hljs-string">&quot;esnext&quot;</span>,
    <span class="hljs-attr">&quot;module&quot;</span>: <span class="hljs-string">&quot;esnext&quot;</span>,
    <span class="hljs-attr">&quot;moduleResolution&quot;</span>: <span class="hljs-string">&quot;node&quot;</span>,
    <span class="hljs-attr">&quot;strict&quot;</span>: <span class="hljs-literal">false</span>,
    <span class="hljs-attr">&quot;jsx&quot;</span>: <span class="hljs-string">&quot;react&quot;</span>,
    <span class="hljs-attr">&quot;jsxFactory&quot;</span>: <span class="hljs-string">&quot;QuarkElement.h&quot;</span>,
    <span class="hljs-attr">&quot;sourceMap&quot;</span>: <span class="hljs-literal">false</span>,
    <span class="hljs-attr">&quot;removeComments&quot;</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">&quot;resolveJsonModule&quot;</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">&quot;esModuleInterop&quot;</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">&quot;skipLibCheck&quot;</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">&quot;experimentalDecorators&quot;</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">&quot;outDir&quot;</span>: <span class="hljs-string">&quot;lib&quot;</span>,
    <span class="hljs-attr">&quot;declarationDir&quot;</span>: <span class="hljs-string">&quot;./lib&quot;</span>,
    <span class="hljs-attr">&quot;declaration&quot;</span>: <span class="hljs-literal">true</span> <span class="hljs-comment">/* \u751F\u6210\u76F8\u5173\u7684 &#39;.d.ts&#39; \u6587\u4EF6\u3002 */</span>,
    <span class="hljs-attr">&quot;emitDeclarationOnly&quot;</span>: <span class="hljs-literal">true</span> <span class="hljs-comment">/* \u53EA\u751F\u6210\u58F0\u660E\u6587\u4EF6\uFF0C\u4E0D\u751F\u6210 js \u6587\u4EF6*/</span>,
    <span class="hljs-attr">&quot;lib&quot;</span>: [<span class="hljs-string">&quot;esnext&quot;</span>, <span class="hljs-string">&quot;dom&quot;</span>],
    <span class="hljs-attr">&quot;types&quot;</span>: [<span class="hljs-string">&quot;vite/client&quot;</span>],
    <span class="hljs-attr">&quot;paths&quot;</span>: {
      <span class="hljs-attr">&quot;@/*&quot;</span>: [<span class="hljs-string">&quot;src/*&quot;</span>]
    }
  },
  <span class="hljs-attr">&quot;include&quot;</span>: [<span class="hljs-string">&quot;src/**/*.ts&quot;</span>, <span class="hljs-string">&quot;src/**/*.tsx&quot;</span>],
}
</code></pre>`,8),o=[u],h={},i="",q=a({__name:"development.zh-CN",setup(e,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(c,r)=>(l(),n("div",p,o))}});export{q as default,i as excerpt,h as frontmatter};
