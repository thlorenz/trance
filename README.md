# trance [![build status](https://secure.travis-ci.org/thlorenz/trance.png)](http://travis-ci.org/thlorenz/trance)

TRAce enhaNCEr. Adds relevant code snippets to a trace.

```sh
cat trace.txt | trance -b 2 -a 2
```

## Usage

```
cat trace.txt | trance <options>

  Enriches trace with relevant code snippets for the files in the trace.

OPTIONS:

  -b, --before    How many lines of code to include before the line shown in the trace
  -a, --after     How many lines of code to include after the line shown in the trace
  
  -h, --help      Print this help message.

EXAMPLES:

  Include code only for the line shown in the trace

    cat trace.txt | trance

  Include code for the line shown in the trace and 2 lines above and 1 line below

    cat trace.txt | trance -b 2 -a 1
```

## Installation

    npm install trance

## API

<!-- START docme generated API please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN docme TO UPDATE -->

<div>
<div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="trance::line"><span class="type-signature"></span>trance::line<span class="signature">(line, before, after, cb)</span><span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Resolves and highlights code matching the file location found inside the
given line.<br>If no location and/or code could be resolved it calls back with nothing.</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>line</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="description last"><p>which hopefully contains a file location</p></td>
</tr>
<tr>
<td class="name"><code>before</code></td>
<td class="type">
<span class="param-type">number</span>
</td>
<td class="description last"><p>how many lines of code to include before the matching lineno</p></td>
</tr>
<tr>
<td class="name"><code>after</code></td>
<td class="type">
<span class="param-type">number</span>
</td>
<td class="description last"><p>how many lines of code to include after the matching lineno</p></td>
</tr>
<tr>
<td class="name"><code>cb</code></td>
<td class="type">
<span class="param-type">function</span>
</td>
<td class="description last"><p>called back with an error or resolved and highlighted code or nothing</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/trance/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/trance/blob/master/index.js#L118">lineno 118</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trance::lines"><span class="type-signature"></span>trance::lines<span class="signature">(lines, before, after, cb)</span><span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Enhances multiple lines with code samples</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>lines</code></td>
<td class="type">
<span class="param-type">Array.&lt;string></span>
</td>
<td class="description last"><p>which hopefully contain a file location</p></td>
</tr>
<tr>
<td class="name"><code>before</code></td>
<td class="type">
<span class="param-type">number</span>
</td>
<td class="description last"><p>how many lines of code to include before the matching lineno</p></td>
</tr>
<tr>
<td class="name"><code>after</code></td>
<td class="type">
<span class="param-type">number</span>
</td>
<td class="description last"><p>how many lines of code to include after the matching lineno</p></td>
</tr>
<tr>
<td class="name"><code>cb</code></td>
<td class="type">
<span class="param-type">function</span>
</td>
<td class="description last"><p>called back with <code>Array.&lt;Object&gt;</code> each containing <code>{ line, code }</code></p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/trance/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/trance/blob/master/index.js#L154">lineno 154</a>
</li>
</ul></dd>
</dl>
</dd>
</dl>
</article>
</section>
</div>

*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->

## License

MIT
