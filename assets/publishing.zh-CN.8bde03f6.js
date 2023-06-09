import{d as t,c as a,b as u,o as n}from"./vue.2934db94.js";const o={class:"markdown-body"},p=u(`<h2>Publishing</h2><p>\u5F53\u4F60\u4F7F\u7528 <code class="">quarkc</code> \u7F16\u5199\u5B8C\u7EC4\u4EF6\uFF0C\u5C31\u53EF\u4EE5\u53D1\u5E03\u4F60\u81EA\u5DF1\u7684\u65E0\u6846\u67B6\u7EC4\u4EF6\u5566\u3002 \u5148\u6839\u636E <a href="http://localhost:8080/workflow/development.html">Development</a> \u914D\u7F6E\u597D\u4F60\u7684\u6253\u5305\u5DE5\u5177\uFF0C\u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u6309\u7167\u81EA\u5DF1\u7684\u9700\u8981\u4FEE\u6539\u6253\u5305\u914D\u7F6E\u3002</p><p>\u4F60\u7684 package.json \u6587\u4EF6 \u5185\u5BB9\u5927\u81F4\u5982\u4E0B\uFF1A</p><pre><code class="language-json">{
  <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;xxx&quot;</span>,
  <span class="hljs-attr">&quot;version&quot;</span>: <span class="hljs-string">&quot;1.0.0&quot;</span>,
  <span class="hljs-attr">&quot;description&quot;</span>: <span class="hljs-string">&quot;Web components&quot;</span>,
  <span class="hljs-attr">&quot;main&quot;</span>: <span class="hljs-string">&quot;lib/index.js&quot;</span>,
  <span class="hljs-attr">&quot;module&quot;</span>: <span class="hljs-string">&quot;lib/index.js&quot;</span>,
  <span class="hljs-attr">&quot;files&quot;</span>: [
    <span class="hljs-string">&quot;/lib&quot;</span>,
    <span class="hljs-string">&quot;README.md&quot;</span>,
    <span class="hljs-string">&quot;package.json&quot;</span>
  ],
  <span class="hljs-attr">&quot;scripts&quot;</span>: {
    <span class="hljs-attr">&quot;build&quot;</span>: <span class="hljs-string">&quot;rimraf lib &amp;&amp; rollup -c&quot;</span>
  },
  <span class="hljs-attr">&quot;dependencies&quot;</span>: {
    <span class="hljs-attr">&quot;quarkc&quot;</span>:<span class="hljs-string">&quot;^1.0.4&quot;</span>
  },
  <span class="hljs-attr">&quot;devDependencies&quot;</span>: {
    <span class="hljs-attr">&quot;@babel/cli&quot;</span>: <span class="hljs-string">&quot;^7.5.5&quot;</span>,
    <span class="hljs-attr">&quot;@babel/core&quot;</span>: <span class="hljs-string">&quot;^7.5.5&quot;</span>,
    <span class="hljs-attr">&quot;@babel/plugin-proposal-decorators&quot;</span>: <span class="hljs-string">&quot;^7.16.5&quot;</span>,
    <span class="hljs-attr">&quot;@babel/plugin-transform-runtime&quot;</span>: <span class="hljs-string">&quot;^7.5.5&quot;</span>,
    <span class="hljs-attr">&quot;@babel/preset-env&quot;</span>: <span class="hljs-string">&quot;^7.5.5&quot;</span>,
    <span class="hljs-attr">&quot;@babel/preset-typescript&quot;</span>: <span class="hljs-string">&quot;^7.16.5&quot;</span>,
    <span class="hljs-attr">&quot;@babel/runtime&quot;</span>: <span class="hljs-string">&quot;^7.5.5&quot;</span>,
    <span class="hljs-attr">&quot;@rollup/plugin-babel&quot;</span>: <span class="hljs-string">&quot;^5.3.0&quot;</span>,
    <span class="hljs-attr">&quot;@rollup/plugin-commonjs&quot;</span>: <span class="hljs-string">&quot;^21.0.0&quot;</span>,
    <span class="hljs-attr">&quot;@rollup/plugin-node-resolve&quot;</span>: <span class="hljs-string">&quot;^13.0.5&quot;</span>,
    <span class="hljs-attr">&quot;@rollup/plugin-typescript&quot;</span>: <span class="hljs-string">&quot;^8.3.0&quot;</span>,
    <span class="hljs-attr">&quot;@types/node&quot;</span>: <span class="hljs-string">&quot;^14.14.31&quot;</span>,
    <span class="hljs-attr">&quot;babel-loader&quot;</span>: <span class="hljs-string">&quot;^8.0.6&quot;</span>,
    <span class="hljs-attr">&quot;rollup-plugin-terser&quot;</span>: <span class="hljs-string">&quot;^7.0.2&quot;</span>,
    <span class="hljs-attr">&quot;typescript&quot;</span>: <span class="hljs-string">&quot;^4.1.5&quot;</span>,
    <span class="hljs-attr">&quot;rimraf&quot;</span>: <span class="hljs-string">&quot;3.0.2&quot;</span>,
    <span class="hljs-attr">&quot;rollup&quot;</span>: <span class="hljs-string">&quot;2.77.0&quot;</span>,
  },
  <span class="hljs-attr">&quot;homepage&quot;</span>: <span class="hljs-string">&quot;https://xxx&quot;</span>,
  <span class="hljs-attr">&quot;repository&quot;</span>: {
    <span class="hljs-attr">&quot;type&quot;</span>: <span class="hljs-string">&quot;git&quot;</span>,
    <span class="hljs-attr">&quot;url&quot;</span>: <span class="hljs-string">&quot;xxxx&quot;</span>
  },
  <span class="hljs-attr">&quot;publishConfig&quot;</span>: {
    <span class="hljs-attr">&quot;access&quot;</span>: <span class="hljs-string">&quot;public&quot;</span>,
    <span class="hljs-attr">&quot;registry&quot;</span>: <span class="hljs-string">&quot;https://registry.npmjs.org/&quot;</span>
  },
  <span class="hljs-attr">&quot;author&quot;</span>: <span class="hljs-string">&quot;&quot;</span>,
  <span class="hljs-attr">&quot;license&quot;</span>: <span class="hljs-string">&quot;ISC&quot;</span>
}

</code></pre><p>\u6267\u884C\uFF1A</p><pre><code class="language-shell">npm run build
</code></pre><p>\u751F\u6210\u7684\u6253\u5305\u4EA7\u7269\u5728 lib \u6587\u4EF6\u5939\u4E0B\uFF0C\u5176\u4E2D\u5DF2\u5305\u542B TypeScript \u7684\u7C7B\u578B\u58F0\u660E\u3002\u6253\u5305\u7ED3\u675F\uFF0C\u5C31\u53EF\u4EE5\u5C06\u4F60\u7684 component \u53D1\u5E03\u5230 npm \u5566\u3002npm \u53D1\u5E03\u76F8\u5173\u53EF\u53C2\u8003<a href="https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry">\u94FE\u63A5</a>\u3002</p>`,7),l=[p],h={},i="",j=t({__name:"publishing.zh-CN",setup(q,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,c)=>(n(),a("div",o,l))}});export{j as default,i as excerpt,h as frontmatter};
