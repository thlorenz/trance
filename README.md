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

  -c, --code      If this flag is supplied code snippets are included in the trace
  -b, --before    How many lines of code to include before the line shown in the trace
  -a, --after     How many lines of code to include after the line shown in the trace

  -n, --nodedir   Provides directory to the Node.js project in case traces are from a Node.js app to resolve paths
  
  -h, --help      Print this help message.

EXAMPLES:

  Include code only for the line shown in the trace

    cat trace.txt | trance -c

  Include code for the line shown in the trace and 2 lines before and 1 line after

    cat trace.txt | trance -c -b 2 -a 1

  Resolve Node.js paths for the given node path ~/dev/node, but include no code

    cat trace.txt | trance --nodedir ~/dev/node 

  Resolve Node.js paths for the given node path ~/dev/node, and include code 1 line before and 1 line after

    cat trace.txt | trance --nodedir ~/dev/node -b 1 - a 1
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
<h4 class="name" id="trance::line"><span class="type-signature"></span>trance::line<span class="signature">(line, before, after, locateFile, cb)</span><span class="type-signature"></span></h4>
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
<td class="name"><code>locateFile</code></td>
<td class="type">
<span class="param-type">function</span>
</td>
<td class="description last"><p>invoked with files that have no path in order to locate them, if <code>null</code>, the <em>identity</em> function is used</p></td>
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
<a href="https://github.com/thlorenz/trance/blob/master/index.js#L130">lineno 130</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trance::lines"><span class="type-signature"></span>trance::lines<span class="signature">(lines, before, after, locateFile, cb)</span><span class="type-signature"></span></h4>
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
<td class="name"><code>locateFile</code></td>
<td class="type">
<span class="param-type">function</span>
</td>
<td class="description last"><p>invoked with files that have no path in order to locate them, if <code>null</code>, the <em>identity</em> function is used</p></td>
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
<a href="https://github.com/thlorenz/trance/blob/master/index.js#L182">lineno 182</a>
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
