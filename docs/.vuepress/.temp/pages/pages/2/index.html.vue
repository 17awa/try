<template><div><h1 id="选择菜单与多-label" tabindex="-1"><a class="header-anchor" href="#选择菜单与多-label"><span>选择菜单与多 Label</span></a></h1>
<div class="hint-container warning">
<p class="hint-container-title">注意！！！</p>
<p>本文将假定您有一定的 Python 基础，因为本文涉及到变量，虽然也很简单，但我仍建议您在了解 Python 基础知识后再来完成本教程。</p>
</div>
<p>这一次我们所接触的东西可能会比较复杂，但它可以为你的 Mod 注入灵魂。</p>
<h2 id="选项菜单" tabindex="-1"><a class="header-anchor" href="#选项菜单"><span>选项菜单</span></a></h2>
<p>让我们先复习一下上节课学的脚本：</p>
<div class="language-rpy line-numbers-mode" data-highlighter="prismjs" data-ext="rpy" data-title="rpy"><pre v-pre><code><span class="line"><span class="token tag">label</span> ch1_start<span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">stop</span> <span class="token keyword">music</span> <span class="token property">fadeout</span> <span class="token number">2.0</span></span>
<span class="line">    <span class="token keyword">scene</span> bg club_day <span class="token operator">with</span> dissolve_scene_full</span>
<span class="line">    <span class="token string">"今天是学园祭的第一天。"</span></span>
<span class="line">    <span class="token keyword">show</span> monika <span class="token number">2</span> <span class="token operator">at</span> t42 <span class="token property">zorder</span> <span class="token number">2</span></span>
<span class="line">    m <span class="token string">"好了，各位！我们开始准备吧！"</span></span>
<span class="line">    <span class="token keyword">show</span> sayori <span class="token number">4</span>r <span class="token operator">at</span> t43 <span class="token property">zorder</span> <span class="token number">2</span></span>
<span class="line">    s @<span class="token number">1</span>r <span class="token string">"耶！小饼干！"</span></span>
<span class="line">    <span class="token keyword">show</span> natsuki <span class="token number">2</span>l <span class="token operator">at</span> t41 <span class="token property">zorder</span> <span class="token number">2</span></span>
<span class="line">    n <span class="token string">"要不也来尝下我的纸杯蛋糕？"</span></span>
<span class="line">    <span class="token keyword">show</span> yuri <span class="token number">3</span>m <span class="token operator">at</span> t44 <span class="token property">zorder</span> <span class="token number">2</span></span>
<span class="line">    y <span class="token string">"...其实都可以了。"</span></span>
<span class="line">    mc <span class="token string">"总之，以后也要多多关照！"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果只是单纯的让角色说话，与玩家没有任何的互动，是不是很枯燥无味？因此，我们需要给游戏增加一些与玩家的互动，比如一个选项菜单。
简单来说，通过一个选项菜单，游戏能够给玩家提供一或多个选项，玩家选择一个选项后，通常有相应的回应，例如一段剧情。</p>
<p>试试下面的代码：</p>
<div class="language-rpy line-numbers-mode" data-highlighter="prismjs" data-ext="rpy" data-title="rpy"><pre v-pre><code><span class="line"><span class="token tag">label</span> ch1_start<span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">stop</span> <span class="token keyword">music</span> <span class="token property">fadeout</span> <span class="token number">2.0</span></span>
<span class="line">    <span class="token keyword">scene</span> bg club_day <span class="token operator">with</span> dissolve_scene_full</span>
<span class="line">    <span class="token string">"今天是学园祭的第一天。"</span></span>
<span class="line">    <span class="token keyword">show</span> monika <span class="token number">2</span> <span class="token operator">at</span> t42</span>
<span class="line">    m <span class="token string">"好了，各位！我们开始准备吧！"</span></span>
<span class="line">    <span class="token keyword">show</span> sayori <span class="token number">4</span>r <span class="token operator">at</span> t43</span>
<span class="line">    s <span class="token string">"耶！小饼干！"</span></span>
<span class="line">    <span class="token keyword">show</span> natsuki <span class="token number">2</span>l <span class="token operator">at</span> t41</span>
<span class="line">    n <span class="token string">"要不也来尝下我的纸杯蛋糕？"</span></span>
<span class="line">    <span class="token keyword">show</span> yuri <span class="token number">3</span>m <span class="token operator">at</span> t44</span>
<span class="line">    y <span class="token string">"...其实都可以了。"</span></span>
<span class="line">    <span class="token tag">menu</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token string">"那么，我该先吃些什么呢？"</span></span>
<span class="line">        <span class="token string">"纸杯蛋糕"</span><span class="token punctuation">:</span></span>
<span class="line">            n <span class="token string">"怎么样，是不是很好吃啊？"</span></span>
<span class="line">        <span class="token string">"小饼干"</span><span class="token punctuation">:</span></span>
<span class="line">            s <span class="token string">"怎么样，是不是很好吃？"</span></span>
<span class="line">    mc <span class="token string">"总之，以后也要多多关照！"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行代码，你会发现剧情里多了一个选择菜单，询问我们是要吃纸杯蛋糕还是小饼干。</p>
<p>这是 menu 的基本语法：</p>
<div class="language-rpy line-numbers-mode" data-highlighter="prismjs" data-ext="rpy" data-title="rpy"><pre v-pre><code><span class="line"><span class="token tag">menu</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token string">"我是一个菜单"</span> <span class="token comment"># 文本框内显示的内容。</span></span>
<span class="line">    <span class="token string">"选项 1"</span><span class="token punctuation">:</span> <span class="token comment"># 选项名称</span></span>
<span class="line">        <span class="token comment"># 选择此项后所发生的事件。</span></span>
<span class="line">    <span class="token string">"选项 2"</span><span class="token punctuation">:</span> <span class="token comment"># 选项名称</span></span>
<span class="line">        <span class="token comment"># 选择此项后所发生的事件。</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token comment"># 可以添加更多选项。</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning">
<p class="hint-container-title">注意！</p>
<p>上面的 <code v-pre>:</code> 和 <code v-pre>&quot;&quot;</code> 都必须使用英文符号。</p>
</div>
<p>现在，尝试着理解一下下面的代码，并运行一下。</p>
<div class="language-rpy line-numbers-mode" data-highlighter="prismjs" data-ext="rpy" data-title="rpy"><pre v-pre><code><span class="line"><span class="token tag">label</span> ch1_start<span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">stop</span> <span class="token keyword">music</span> <span class="token property">fadeout</span> <span class="token number">2.0</span></span>
<span class="line">    <span class="token keyword">scene</span> bg club_day <span class="token operator">with</span> dissolve_scene_full</span>
<span class="line">    <span class="token string">"今天是学园祭的第一天。"</span></span>
<span class="line">    <span class="token keyword">show</span> monika <span class="token number">2</span> <span class="token operator">at</span> t42</span>
<span class="line">    m <span class="token string">"好了，各位！我们开始准备吧！"</span></span>
<span class="line">    <span class="token keyword">show</span> sayori <span class="token number">4</span>r <span class="token operator">at</span> t43</span>
<span class="line">    s <span class="token string">"耶！小饼干！"</span></span>
<span class="line">    <span class="token keyword">show</span> natsuki <span class="token number">2</span>l <span class="token operator">at</span> t41</span>
<span class="line">    n <span class="token string">"要不也来尝下我的纸杯蛋糕？"</span></span>
<span class="line">    <span class="token keyword">show</span> yuri <span class="token number">3</span>m <span class="token operator">at</span> t44</span>
<span class="line">    y <span class="token string">"...其实都可以了。"</span></span>
<span class="line">    <span class="token tag">menu</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token string">"那么，我该先吃些什么呢？"</span></span>
<span class="line">        <span class="token string">"纸杯蛋糕"</span><span class="token punctuation">:</span></span>
<span class="line">            n <span class="token string">"怎么样，是不是很好吃啊？"</span></span>
<span class="line">        <span class="token string">"小饼干"</span><span class="token punctuation">:</span></span>
<span class="line">            s <span class="token string">"怎么样，是不是很好吃？"</span></span>
<span class="line">    <span class="token tag">menu</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token string">"我该先和谁交流？"</span></span>
<span class="line">        <span class="token string">"纱世里"</span><span class="token punctuation">:</span></span>
<span class="line">            s <span class="token string">"你好啊！在文学部感觉怎么样？"</span></span>
<span class="line">        <span class="token string">"莫妮卡"</span><span class="token punctuation">:</span></span>
<span class="line">            m <span class="token string">"嗨，有什么事吗？"</span></span>
<span class="line">        <span class="token string">"夏树"</span><span class="token punctuation">:</span></span>
<span class="line">            n <span class="token string">"哼，看我干什么？"</span></span>
<span class="line">        <span class="token string">"优里"</span><span class="token punctuation">:</span></span>
<span class="line">            y <span class="token string">"你好..."</span></span>
<span class="line">    mc <span class="token string">"总之，以后也要多多关照！"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>不理解上面的脚本吗？没关系，看了下面的解释，你大概就会懂了。</p>
<p>在 Ren'Py 中，<code v-pre>$</code> 与 <code v-pre>[init] [优先级] python [hide/early]/[in ...]:</code> 都表示 Python 语句。区别为 <code v-pre>$</code> 开头的语句只有后续单行的代码被视为 Python 语句，而 包含在 <code v-pre>[init] python [hide/early]/[in &lt;变量名&gt;]:</code> 块中的代码全部被视为 Python 代码</p>
<ul>
<li><code v-pre>python hide</code>：以匿名者视角运行，允许使用不能被保存的临时变量。</li>
<li><code v-pre>python in &lt;变量名&gt;</code>：以下的 Python 语句被放在 <code v-pre>&lt;变量名&gt;</code> 储存区中允许，若要使用在其代码块中定义的变量、函数等，需以 <code v-pre>&lt;变量名&gt;.&lt;变量名、函数名...&gt;</code></li>
<li><code v-pre>init [优先级] python</code>：以下 Python 语句将在游戏初始化阶运行。可以在 <code v-pre>init</code> 与 <code v-pre>python</code> 之前加上一个整数表示运行优先级。数字越大代表越往后运行，越小则越先运行，默认优先级为 0。我们不建议您将优先级设为负数，具体原因将在后续章节解释。</li>
</ul>
</div>
<h2 id="多-label" tabindex="-1"><a class="header-anchor" href="#多-label"><span>多 Label</span></a></h2>
<p>在剧情里，我们常常会需要编写多个分支，如果剧情只围绕一个分支来讲述故事，那么一定是很枯燥的。这时候，就需要定义多个 label。</p>
<div class="language-rpy line-numbers-mode" data-highlighter="prismjs" data-ext="rpy" data-title="rpy"><pre v-pre><code><span class="line"><span class="token tag">label</span> ch1_start<span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">stop</span> <span class="token keyword">music</span> <span class="token property">fadeout</span> <span class="token number">2.0</span></span>
<span class="line">    <span class="token keyword">scene</span> bg club_day <span class="token operator">with</span> dissolve_scene_full</span>
<span class="line">    <span class="token keyword">play</span> <span class="token keyword">music</span> t1</span>
<span class="line">    <span class="token string">"今天是学园祭的第一天。"</span></span>
<span class="line">    <span class="token keyword">show</span> monika <span class="token number">2</span> <span class="token operator">at</span> t42</span>
<span class="line">    m <span class="token string">"好了，各位！我们开始准备吧！"</span></span>
<span class="line">    <span class="token keyword">show</span> sayori <span class="token number">4</span>r <span class="token operator">at</span> t43</span>
<span class="line">    s <span class="token string">"耶！小饼干！"</span></span>
<span class="line">    <span class="token keyword">show</span> natsuki <span class="token number">2</span>l <span class="token operator">at</span> t41</span>
<span class="line">    n <span class="token string">"要不也来尝下我的纸杯蛋糕？"</span></span>
<span class="line">    <span class="token keyword">show</span> yuri <span class="token number">3</span>m <span class="token operator">at</span> t44</span>
<span class="line">    y <span class="token string">"...其实都可以了。"</span></span>
<span class="line">    <span class="token tag">menu</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token string">"那么，我该先吃些什么呢？"</span></span>
<span class="line">        <span class="token string">"纸杯蛋糕"</span><span class="token punctuation">:</span></span>
<span class="line">            n <span class="token string">"怎么样，是不是很好吃啊？"</span></span>
<span class="line">            <span class="token keyword">call</span> ch1_natsuki</span>
<span class="line">        <span class="token string">"小饼干"</span><span class="token punctuation">:</span></span>
<span class="line">            s <span class="token string">"怎么样，是不是很好吃？"</span></span>
<span class="line">            <span class="token keyword">call</span> ch1_sayori</span>
<span class="line">    mc <span class="token string">"总之，以后也要多多关照！"</span></span>
<span class="line">    <span class="token keyword">return</span></span>
<span class="line"></span>
<span class="line"><span class="token tag">label</span> ch1_natsuki<span class="token punctuation">:</span></span>
<span class="line">    <span class="token string">"您已进入夏树分支"</span></span>
<span class="line">    <span class="token keyword">return</span></span>
<span class="line"></span>
<span class="line"><span class="token tag">label</span> ch1_sayori<span class="token punctuation">:</span></span>
<span class="line">    <span class="token string">"您已进入纱世里分支"</span></span>
<span class="line">    <span class="token keyword">return</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行上面的代码后，我们会看到在选择完吃哪个食物时，会提示进入到了 xxx 分支，然后会返回到主脚本里。</p>
<p>这就是多 label，当然多个 label 也可以分在多个 rpy 文件里，Ren'Py 会初始化所有 rpy 文件里的 label。</p>
<h3 id="return" tabindex="-1"><a class="header-anchor" href="#return"><span>return</span></a></h3>
<p>其中，你应该能注意到 <code v-pre>return</code>，这个语句相当于返回上级，这个概念比较复杂，但如果两个节点属于并列状态，你必须在每个节点末尾添加 <code v-pre>return</code>。在本例中，如果不添加 <code v-pre>return</code> 的话，等价于以下效果：</p>
<div class="language-rpy line-numbers-mode" data-highlighter="prismjs" data-ext="rpy" data-title="rpy"><pre v-pre><code><span class="line"><span class="token comment"># 假定你选择的是夏树的纸杯蛋糕</span></span>
<span class="line"><span class="token tag">label</span> ch1_natsuki<span class="token punctuation">:</span></span>
<span class="line">    <span class="token string">"您已进入夏树分支"</span></span>
<span class="line"></span>
<span class="line"><span class="token tag">label</span> ch1_sayori<span class="token punctuation">:</span></span>
<span class="line">    <span class="token string">"您已进入纱世里分支"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>即：</p>
<div class="language-rpy line-numbers-mode" data-highlighter="prismjs" data-ext="rpy" data-title="rpy"><pre v-pre><code><span class="line"><span class="token string">"您已进入夏树分支"</span></span>
<span class="line"><span class="token string">"您已进入纱世里分支"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>意味着，只要你选择夏树的分支，那么就会同时出现 <code v-pre>&quot;您已进入夏树分支&quot;</code> 和 <code v-pre>&quot;您已进入纱世里分支&quot;</code> 两句对话。</p>
<hr>
<p>在 Ren'Py 里，有两种方法可以跳转到其他分支里，<code v-pre>call</code> 和 <code v-pre>jump</code>。接下来，我会介绍 <code v-pre>call</code> 和<code v-pre> jump</code> 的区别。</p>
<h3 id="call" tabindex="-1"><a class="header-anchor" href="#call"><span>call</span></a></h3>
<p><code v-pre>call</code> 的语法如下：</p>
<div class="language-rpy line-numbers-mode" data-highlighter="prismjs" data-ext="rpy" data-title="rpy"><pre v-pre><code><span class="line"><span class="token keyword">call</span> <span class="token operator">&lt;</span><span class="token tag">label</span> 名称<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>call 的作用是调用分支，如下例：</p>
<div class="language-rpy line-numbers-mode" data-highlighter="prismjs" data-ext="rpy" data-title="rpy"><pre v-pre><code><span class="line"><span class="token tag">label</span> a<span class="token punctuation">:</span></span>
<span class="line">    <span class="token string">"你好！"</span></span>
<span class="line">    <span class="token keyword">call</span> b</span>
<span class="line">    <span class="token string">"你已回到 a 分支。"</span></span>
<span class="line">    <span class="token keyword">return</span></span>
<span class="line"></span>
<span class="line"><span class="token tag">label</span> b<span class="token punctuation">:</span></span>
<span class="line">    <span class="token string">"你已进入 b 分支。"</span></span>
<span class="line">    <span class="token keyword">return</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行这个脚本，你会发现在旁白说完 <code v-pre>你好</code> 后会跳入 b 分支并提示 <code v-pre>你已进入 b 分支</code> ，然后会回到 a 分支并提示 <code v-pre>你已返回 a 分支</code>。</p>
<p>可以看到，call 的作用就是在一个 label 里调用另一个 label，在另一个 label 里的脚本 return 后会跳回到原先的 label 并继续执行。</p>
<h3 id="jump" tabindex="-1"><a class="header-anchor" href="#jump"><span>jump</span></a></h3>
<p><code v-pre>jump</code> 格式如下：</p>
<div class="language-rpy line-numbers-mode" data-highlighter="prismjs" data-ext="rpy" data-title="rpy"><pre v-pre><code><span class="line"><span class="token keyword">jump</span> <span class="token operator">&lt;</span><span class="token tag">label</span> 名称<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><code v-pre>jump</code> 的作用是跳转，如下例：</p>
<div class="language-rpy line-numbers-mode" data-highlighter="prismjs" data-ext="rpy" data-title="rpy"><pre v-pre><code><span class="line"><span class="token tag">label</span> a<span class="token punctuation">:</span></span>
<span class="line">    <span class="token string">"你好！"</span></span>
<span class="line">    <span class="token keyword">jump</span> b</span>
<span class="line">    <span class="token string">"你已回到 a 分支。"</span></span>
<span class="line">    <span class="token keyword">return</span></span>
<span class="line"></span>
<span class="line"><span class="token tag">label</span> b<span class="token punctuation">:</span></span>
<span class="line">    <span class="token string">"你已进入 b 分支。"</span></span>
<span class="line">    <span class="token keyword">return</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行这个脚本，你会发现旁白在说完 <code v-pre>你好</code> 和 <code v-pre>你已进入 b 分支</code> 后并不会说 <code v-pre>你已回到 a 分支</code>。</p>
<p>可以看到，jump 的作用就是从一个脚本里跳转到另一个脚本。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>jump 与 call 的不同点是：</p>
<ul>
<li>call 执行完另一个 label 里的内容后会跳回原 label。</li>
<li>而 jump 执行另一个 label 里的内容后不会跳回原 label。</li>
</ul>
</div>
<div class="hint-container tip">
<p class="hint-container-title">扩展知识</p>
<p>调用 <code v-pre>call</code> 和 <code v-pre>jump</code> 时想要使用表达式运算 label 名？只需要在 <code v-pre>call</code> 或 <code v-pre>jump</code> 后面加上 <code v-pre>expression</code>。如下：</p>
<div class="language-rpy line-numbers-mode" data-highlighter="prismjs" data-ext="rpy" data-title="rpy"><pre v-pre><code><span class="line"><span class="token tag">label</span> main<span class="token punctuation">:</span></span>
<span class="line">    <span class="token tag">$</span> chapter <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">stop</span> <span class="token keyword">music</span> <span class="token property">fadeout</span> <span class="token number">2.0</span></span>
<span class="line">    <span class="token keyword">scene</span> bg club_day <span class="token operator">with</span> dissolve_scene_full</span>
<span class="line">    <span class="token keyword">play</span> <span class="token keyword">music</span> t1</span>
<span class="line">    <span class="token string">"今天是学园祭的第一天。"</span></span>
<span class="line">    <span class="token keyword">show</span> monika <span class="token number">2</span> <span class="token operator">at</span> t42</span>
<span class="line">    m <span class="token string">"好了，各位！我们开始准备吧！"</span></span>
<span class="line">    <span class="token keyword">show</span> sayori <span class="token number">4</span>r <span class="token operator">at</span> t43</span>
<span class="line">    s <span class="token string">"耶！小饼干！"</span></span>
<span class="line">    <span class="token keyword">show</span> natsuki <span class="token number">2</span>l <span class="token operator">at</span> t41</span>
<span class="line">    n <span class="token string">"要不也来尝下我的纸杯蛋糕？"</span></span>
<span class="line">    <span class="token keyword">show</span> yuri <span class="token number">3</span>m <span class="token operator">at</span> t44</span>
<span class="line">    y <span class="token string">"...其实都可以了。"</span></span>
<span class="line">    <span class="token tag">menu</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token string">"那么，我该先吃些什么呢？"</span></span>
<span class="line">        <span class="token string">"纸杯蛋糕"</span><span class="token punctuation">:</span></span>
<span class="line">            n <span class="token string">"怎么样，是不是很好吃啊？"</span></span>
<span class="line">            <span class="token tag">$</span> winner <span class="token operator">=</span> <span class="token string">"natsuki"</span></span>
<span class="line">        <span class="token string">"小饼干"</span><span class="token punctuation">:</span></span>
<span class="line">            s <span class="token string">"怎么样，是不是很好吃？"</span></span>
<span class="line">            <span class="token tag">$</span> winner <span class="token operator">=</span> <span class="token string">"sayori"</span></span>
<span class="line">    <span class="token keyword">scene</span> bg club_day <span class="token operator">with</span> wipeleft_scene</span>
<span class="line">    mc <span class="token string">"总之，以后也要多多关照！"</span></span>
<span class="line">    <span class="token keyword">call</span> <span class="token keyword">expression</span> <span class="token punctuation">(</span><span class="token string">"ch"</span> <span class="token operator">+</span> <span class="token function">str</span><span class="token punctuation">(</span>chapter<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"_"</span> <span class="token operator">+</span> winner<span class="token punctuation">)</span></span>
<span class="line">    <span class="token string">"第二天"</span></span>
<span class="line">    <span class="token keyword">call</span> <span class="token keyword">expression</span> <span class="token punctuation">(</span><span class="token string">"ch"</span> <span class="token operator">+</span> <span class="token function">str</span><span class="token punctuation">(</span>chapter<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"_"</span> <span class="token operator">+</span> winner<span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">return</span></span>
<span class="line"></span>
<span class="line"><span class="token tag">label</span> ch1_natsuki<span class="token punctuation">:</span></span>
<span class="line">    <span class="token string">"您已进入夏树分支"</span></span>
<span class="line">    <span class="token tag">$</span> chapter <span class="token operator">=</span> <span class="token number">2</span></span>
<span class="line">    <span class="token keyword">return</span></span>
<span class="line"></span>
<span class="line"><span class="token tag">label</span> ch1_sayori<span class="token punctuation">:</span></span>
<span class="line">    <span class="token string">"您已进入纱世里分支"</span></span>
<span class="line">    <span class="token tag">$</span> chapter <span class="token operator">=</span> <span class="token number">2</span></span>
<span class="line">    <span class="token keyword">return</span></span>
<span class="line"></span>
<span class="line"><span class="token tag">label</span> ch2_sayori<span class="token punctuation">:</span></span>
<span class="line">    <span class="token string">"您已进入第二章的纱世里分支"</span></span>
<span class="line">    <span class="token keyword">return</span></span>
<span class="line"></span>
<span class="line"><span class="token tag">label</span> ch2_natsuki<span class="token punctuation">:</span></span>
<span class="line">    <span class="token string">"您已进入第二章的夏树分支"</span></span>
<span class="line">    <span class="token keyword">return</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<p>另外，所有 label 不必要放在一个文件里，可以存放于多个 rpy 文件内，如下例：</p>
<p>script-ch1.rpy：</p>
<div class="language-rpy line-numbers-mode" data-highlighter="prismjs" data-ext="rpy" data-title="rpy"><pre v-pre><code><span class="line"><span class="token tag">label</span> ch1_start<span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">stop</span> <span class="token keyword">music</span> <span class="token property">fadeout</span> <span class="token number">2.0</span></span>
<span class="line">    <span class="token keyword">scene</span> bg club_day <span class="token operator">with</span> dissolve_scene_full</span>
<span class="line">    <span class="token keyword">play</span> <span class="token keyword">music</span> t1</span>
<span class="line">    <span class="token string">"今天是学园祭的第一天。"</span></span>
<span class="line">    <span class="token keyword">show</span> monika <span class="token number">2</span> <span class="token operator">at</span> t42</span>
<span class="line">    m <span class="token string">"好了，各位！我们开始准备吧！"</span></span>
<span class="line">    <span class="token keyword">show</span> sayori <span class="token number">4</span>r <span class="token operator">at</span> t43</span>
<span class="line">    s <span class="token string">"耶！小饼干！"</span></span>
<span class="line">    <span class="token keyword">show</span> natsuki <span class="token number">2</span>l <span class="token operator">at</span> t41</span>
<span class="line">    n <span class="token string">"要不也来尝下我的纸杯蛋糕？"</span></span>
<span class="line">    <span class="token keyword">show</span> yuri <span class="token number">3</span>m <span class="token operator">at</span> t44</span>
<span class="line">    y <span class="token string">"...其实都可以了。"</span></span>
<span class="line">    <span class="token tag">menu</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token string">"那么，我该先吃些什么呢？"</span></span>
<span class="line">        <span class="token string">"纸杯蛋糕"</span><span class="token punctuation">:</span></span>
<span class="line">            n <span class="token string">"怎么样，是不是很好吃啊？"</span></span>
<span class="line">            <span class="token keyword">call</span> ch1_natsuki</span>
<span class="line">        <span class="token string">"小饼干"</span><span class="token punctuation">:</span></span>
<span class="line">            s <span class="token string">"怎么样，是不是很好吃？"</span></span>
<span class="line">            <span class="token keyword">call</span> ch1_sayori</span>
<span class="line">    mc <span class="token string">"总之，以后也要多多关照！"</span></span>
<span class="line">    <span class="token keyword">return</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>script-ch1_2.rpy：</p>
<div class="language-rpy line-numbers-mode" data-highlighter="prismjs" data-ext="rpy" data-title="rpy"><pre v-pre><code><span class="line"><span class="token tag">label</span> ch1_natsuki<span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">stop</span> <span class="token keyword">music</span> <span class="token property">fadeout</span> <span class="token number">2.0</span></span>
<span class="line">    <span class="token string">"您已进入夏树分支"</span></span>
<span class="line">    <span class="token keyword">return</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token tag">label</span> ch1_sayori<span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">stop</span> <span class="token keyword">music</span> <span class="token property">fadeout</span> <span class="token number">2.0</span></span>
<span class="line">    <span class="token string">"您已进入纱世里分支"</span></span>
<span class="line">    <span class="token keyword">return</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 script-ch1.rpy，我们可以发现即使 label <code v-pre>ch1_natsuki</code>、<code v-pre>ch1_sayori</code>、<code v-pre>ch1_start</code> 放在不同的文件里，脚本依然可以正常运行。</p>
<h3 id="可是-label-到底是什么" tabindex="-1"><a class="header-anchor" href="#可是-label-到底是什么"><span>可是，Label 到底是什么？</span></a></h3>
<p>好问题。Label，你可以把它理解为“视觉小说脚本的片段”，或者是“一个书签”，它在 Ren'Py 中起到“随叫随到”的作用。像 <code v-pre>script.rpy</code> 中的 <code v-pre>call ch1_start</code> 那样</p>
</div></template>


