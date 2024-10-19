<template><div><h1 id="简单的脚本" tabindex="-1"><a class="header-anchor" href="#简单的脚本"><span>简单的脚本</span></a></h1>
<div class="hint-container caution">
<p class="hint-container-title">警告！</p>
<p>本文编辑时的 DDLC 中文 Mod 模板可能与教程有极大出入，您应该在文档和模板完善后再来查看本文档。</p>
<p>本节及后续章节均默认您使用 <strong>Future 分支</strong>。</p>
</div>
<p>在 Ren'Py 和 DDLC 的世界里，剧本与视觉内容都围绕着代码展开 —— 但不必慌张！ Ren'Py 的语法已经做到了极致的简约，不用太多理解成本，上手即可。</p>
<h2 id="从-script-rpy-开始" tabindex="-1"><a class="header-anchor" href="#从-script-rpy-开始"><span>从 script.rpy 开始</span></a></h2>
<p>开始之前，你应该先来看一下 <code v-pre>script.rpy</code>，里面包含了串联起整个游戏的逻辑代码。它带有注释，可以看看。</p>
<details class="hint-container details"><summary>点击查看代码</summary>
<div class="language-rpy line-numbers-mode" data-highlighter="prismjs" data-ext="rpy" data-title="rpy"><pre v-pre><code><span class="line"><span class="token comment">## script.rpy</span></span>
<span class="line"><span class="token tag">label</span> start<span class="token punctuation">:</span></span>
<span class="line">    <span class="token tag">$</span> anticheat <span class="token operator">=</span> <span class="token keyword">persistent</span><span class="token punctuation">.</span>anticheat</span>
<span class="line"></span>
<span class="line">    <span class="token tag">$</span> chapter <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 该变量控制玩家是否能在游戏期间跳过暂停时刻。</span></span>
<span class="line">    <span class="token tag">$</span> _dismiss_pause <span class="token operator">=</span> <span class="token keyword">config</span><span class="token punctuation">.</span><span class="token property">developer</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">## 角色命名</span></span>
<span class="line">    <span class="token comment"># 这些变量控制游戏内角色的命名。</span></span>
<span class="line">    <span class="token comment"># 如需添加新角色，请参考下方代码示例：</span></span>
<span class="line">    <span class="token comment">#   $ mi_name = "Mike"</span></span>
<span class="line">    <span class="token comment"># 不要忘记在 definitions.rpy 添加相应角色！</span></span>
<span class="line">    <span class="token tag">$</span> s_name <span class="token operator">=</span> <span class="token string">"???"</span></span>
<span class="line">    <span class="token tag">$</span> m_name <span class="token operator">=</span> <span class="token string">"女孩 3"</span></span>
<span class="line">    <span class="token tag">$</span> n_name <span class="token operator">=</span> <span class="token string">"女孩 2"</span></span>
<span class="line">    <span class="token tag">$</span> y_name <span class="token operator">=</span> <span class="token string">"女孩 1"</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 该变量控制文本框展示时是否显示底部文字菜单，以及是否允许使用 Esc 显示菜单。</span></span>
<span class="line">    <span class="token tag">$</span> quick_menu <span class="token operator">=</span> <span class="token boolean">True</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 该变量控制文本框内的对话文字样式风格，可定义为常规（style.normal）或干扰（style.edited）风格。</span></span>
<span class="line">    <span class="token comment"># 如需干扰风格，您可以使用 style.edited</span></span>
<span class="line">    <span class="token tag">$</span> <span class="token keyword">style</span><span class="token punctuation">.</span>say_dialogue <span class="token operator">=</span> <span class="token keyword">style</span><span class="token punctuation">.</span>normal</span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 控制纱世里是否去世的变量。</span></span>
<span class="line">    <span class="token comment"># 一般不建议修改此项。</span></span>
<span class="line">    <span class="token tag">$</span> in_sayori_kill <span class="token operator">=</span> <span class="token keyword">None</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment"># 这些变量控制是否允许玩家跳过 / 快进对话或转场。</span></span>
<span class="line">    <span class="token tag">$</span> allow_skipping <span class="token operator">=</span> <span class="token boolean">True</span></span>
<span class="line">    <span class="token tag">$</span> <span class="token keyword">config</span><span class="token punctuation">.</span>allow_skipping <span class="token operator">=</span> <span class="token boolean">True</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">## 脚本文件主要部分</span></span>
<span class="line">    <span class="token comment"># This is where your script code is called!</span></span>
<span class="line">    <span class="token comment"># 'persistent.playthrough' controls the playthrough number the player is on i.e (Act 1, 2, 3, 4)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment"># 当你写好故事脚本文件后，再删除下面这一行，然后在此调用（call）您的脚本</span></span>
<span class="line">    <span class="token keyword">call</span> <span class="token tag">screen</span> <span class="token function">dialog</span><span class="token punctuation">(</span>message<span class="token operator">=</span><span class="token string">"您似乎在尝试直接将 Mod 模板作为无故事剧情的新游戏运行。\n这是一个模组模板，而不是一个实际的模组。请为您的模组编写故事，并在“script.rpy”中调用（call）脚本后重试。"</span><span class="token punctuation">,</span> ok_action<span class="token operator">=</span><span class="token function">MainMenu</span><span class="token punctuation">(</span>confirm<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 该 label 定义了一周目的“END”画面。</span></span>
<span class="line"><span class="token tag">label</span> <span class="token function">endgame</span><span class="token punctuation">(</span>pause_length<span class="token operator">=</span><span class="token number">4.0</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token tag">$</span> quick_menu <span class="token operator">=</span> <span class="token boolean">False</span></span>
<span class="line">    <span class="token keyword">stop</span> <span class="token keyword">music</span> <span class="token property">fadeout</span> <span class="token number">2.0</span></span>
<span class="line">    <span class="token keyword">scene</span> black</span>
<span class="line">    <span class="token keyword">show</span> end</span>
<span class="line">    <span class="token operator">with</span> dissolve_scene_full</span>
<span class="line">    <span class="token keyword">pause</span> pause_length</span>
<span class="line">    <span class="token tag">$</span> quick_menu <span class="token operator">=</span> <span class="token boolean">True</span></span>
<span class="line">    <span class="token keyword">return</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="着手创建你的第一个-label" tabindex="-1"><a class="header-anchor" href="#着手创建你的第一个-label"><span>着手创建你的第一个 Label</span></a></h2>
<h3 id="ren-py-sdk-7-分支" tabindex="-1"><a class="header-anchor" href="#ren-py-sdk-7-分支"><span>Ren'py SDK 7 分支</span></a></h3>
<p>如果你使用 Ren'py SDK 7 分支，那么现在您不必再理会 <code v-pre>script.rpy</code> 文件，直接打开 <code v-pre>script-ch1.rpy</code>，然后保留文件第一行的 <code v-pre>label ch1_start:</code>，删除其他内容即可。</p>
<h2 id="开始让角色说话" tabindex="-1"><a class="header-anchor" href="#开始让角色说话"><span>开始让角色说话</span></a></h2>
<p>没有文字的视觉小说可能连小说都算不上，它总得有角色说话。而对于 DDLC，总得有角色出演吧。</p>
<p>现在，我们要来添加旁白和 Monika 的对话。另起一行，按 4 个空格（一些编辑器可以直接按 Tab 键），输入：</p>
<div class="language-rpy line-numbers-mode" data-highlighter="prismjs" data-ext="rpy" data-title="rpy"><pre v-pre><code><span class="line">    <span class="token string">"今天是学园祭的第一天。"</span></span>
<span class="line">    m <span class="token string">"好了，各位！我们开始准备吧！"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning">
<p class="hint-container-title">注意！</p>
<p>包住文字的引号必须使用英文符号 <code v-pre>&quot;&quot;</code>。</p>
</div>
<p>接下来，运行工程，你应该可以看到两句对话，一句是旁白，一句来自 Monika。这就是一段最基础的对话。</p>
<p>理解了这些基础内容后，我们可以添加更多对话与角色，让 Mod 更加热闹一点。在这里，我先来教你 Ren'Py 的对话基础语法：</p>
<div class="language-rpy line-numbers-mode" data-highlighter="prismjs" data-ext="rpy" data-title="rpy"><pre v-pre><code><span class="line">    <span class="token operator">&lt;</span>角色<span class="token operator">></span> <span class="token string">"内容"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>在 DDLC 的演出里，<code v-pre>&lt;角色&gt;</code> 的地方可以填以下几个：</p>
<table>
<thead>
<tr>
<th><code v-pre>&lt;角色&gt;</code></th>
<th>代表的角色</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>m</code></td>
<td>Monika</td>
</tr>
<tr>
<td><code v-pre>s</code></td>
<td>Sayori</td>
</tr>
<tr>
<td><code v-pre>n</code></td>
<td>Natsuki</td>
</tr>
<tr>
<td><code v-pre>y</code></td>
<td>Yuri</td>
</tr>
<tr>
<td><code v-pre>mc</code></td>
<td>主角（你）</td>
</tr>
<tr>
<td>空白</td>
<td>旁白</td>
</tr>
</tbody>
</table>
<p>现在，尝试理解下面的代码，并运行一下：</p>
<div class="language-rpy line-numbers-mode" data-highlighter="prismjs" data-ext="rpy" data-title="rpy"><pre v-pre><code><span class="line">    <span class="token string">"今天是学园祭的第一天。"</span></span>
<span class="line">    m <span class="token string">"好了，各位！我们开始准备吧！"</span></span>
<span class="line">    s <span class="token string">"耶！小饼干！"</span></span>
<span class="line">    n <span class="token string">"要不也来尝下我的纸杯蛋糕？"</span></span>
<span class="line">    y <span class="token string">"...其实都可以了。"</span></span>
<span class="line">    mc <span class="token string">"总之，以后也要多多关照！"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加-bgm" tabindex="-1"><a class="header-anchor" href="#添加-bgm"><span>添加 BGM</span></a></h2>
<p>现在，Mod 已经拥有了对话，但还缺了很多东西，比如 BGM 与背景。这里我们先从 BGM 开始。</p>
<p>本节将以 <code v-pre>t1</code>（Main Theme）为例，为你刚刚写的剧本增加 BGM。</p>
<p>在 label 行与对话之间先空一行，然后输入：</p>
<div class="language-rpy line-numbers-mode" data-highlighter="prismjs" data-ext="rpy" data-title="rpy"><pre v-pre><code><span class="line">    <span class="token keyword">play</span> <span class="token keyword">music</span> t1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>现在运行 Mod 并进入游戏，你应该会发现在对话前游戏（非常生硬地）播放了背景音乐。</p>
<p>如果您需要播放更多 BGM，您可以参阅 BGM 列表（相应文档暂未制作）。</p>
<h2 id="加个背景" tabindex="-1"><a class="header-anchor" href="#加个背景"><span>加个背景</span></a></h2>
<p>这一步，我们来向剧本加入视觉内容。首先，让我们从展示背景图片开始。假设我想使用部室作为背景，那么在 label 行与刚刚增加的背景音乐行间空一行，输入：</p>
<div class="language-rpy line-numbers-mode" data-highlighter="prismjs" data-ext="rpy" data-title="rpy"><pre v-pre><code><span class="line">    <span class="token keyword">stop</span> <span class="token keyword">music</span> <span class="token property">fadeout</span> <span class="token number">2.0</span></span>
<span class="line">    <span class="token keyword">scene</span> bg club_day <span class="token operator">with</span> dissolve_scene_full</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>运行工程，现在的过渡更舒服了，同时我们也终于有了背景图片。</p>
<p>如果您需要更多背景图片，您可以参阅 背景图片列表（相应文档暂未制作）。</p>
<div class="hint-container tip">
<p class="hint-container-title">扩展知识</p>
<p>此处，<code v-pre>scene</code> 的作用是清空当前图层，而 <code v-pre>with</code> 则是过场动画。</p>
<p>具体的介绍将在 角色立绘的那些事 一节中介绍。</p>
</div>
<h2 id="添加角色立绘" tabindex="-1"><a class="header-anchor" href="#添加角色立绘"><span>添加角色立绘</span></a></h2>
<p>在这一步，我们将使剧本展示角色立绘。</p>
<p>将刚刚的对话部分修改为以下内容：</p>
<div class="language-rpy line-numbers-mode" data-highlighter="prismjs" data-ext="rpy" data-title="rpy"><pre v-pre><code><span class="line">    <span class="token string">"今天是学园祭的第一天。"</span></span>
<span class="line">    <span class="token keyword">show</span> monika <span class="token number">2</span> <span class="token operator">at</span> t42</span>
<span class="line">    m <span class="token string">"好了，各位！我们开始准备吧！"</span></span>
<span class="line">    <span class="token keyword">show</span> sayori <span class="token number">4</span>r <span class="token operator">at</span> t43</span>
<span class="line">    s <span class="token string">"耶！小饼干！"</span></span>
<span class="line">    <span class="token keyword">show</span> natsuki <span class="token number">2</span>l <span class="token operator">at</span> t41</span>
<span class="line">    n <span class="token string">"要不也来尝下我的纸杯蛋糕？"</span></span>
<span class="line">    <span class="token keyword">show</span> yuri <span class="token number">3</span>m <span class="token operator">at</span> t44</span>
<span class="line">    y <span class="token string">"...其实都可以了。"</span></span>
<span class="line">    mc <span class="token string">"总之，以后也要多多关照！"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次运行 Mod，你可能会发现角色立绘会有部分角色的立绘不太靠近或过于靠近屏幕。<br>
这时候，就可以用 <code v-pre>zorder</code>：</p>
<div class="language-rpy line-numbers-mode" data-highlighter="prismjs" data-ext="rpy" data-title="rpy"><pre v-pre><code><span class="line">    <span class="token string">"今天是学园祭的第一天。"</span></span>
<span class="line">    <span class="token keyword">show</span> monika <span class="token number">2</span> <span class="token operator">at</span> t42 <span class="token property">zorder</span> <span class="token number">2</span></span>
<span class="line">    m <span class="token string">"好了，各位！我们开始准备吧！"</span></span>
<span class="line">    <span class="token keyword">show</span> sayori <span class="token number">4</span>r <span class="token operator">at</span> t43 <span class="token property">zorder</span> <span class="token number">2</span></span>
<span class="line">    s <span class="token string">"耶！小饼干！"</span></span>
<span class="line">    <span class="token keyword">show</span> natsuki <span class="token number">2</span>l <span class="token operator">at</span> t41 <span class="token property">zorder</span> <span class="token number">2</span></span>
<span class="line">    n <span class="token string">"要不也来尝下我的纸杯蛋糕？"</span></span>
<span class="line">    <span class="token keyword">show</span> yuri <span class="token number">3</span>m <span class="token operator">at</span> t44 <span class="token property">zorder</span> <span class="token number">2</span></span>
<span class="line">    y <span class="token string">"...其实都可以了。"</span></span>
<span class="line">    mc <span class="token string">"总之，以后也要多多关照！"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行 Mod。你会发现这时候角色立绘不会过于的靠近屏幕。<br>
<code v-pre>zorder</code> 的作用就是控制图像在图层 Z 轴上的位置。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示：</p>
<p><code v-pre>zorder</code> 后面的数值越大，图像越远，反之数值越小则越近。</p>
</div>
<p>与 <code v-pre>show</code> 相反，<code v-pre>hide</code> 的作用就是隐藏。用法如下：</p>
<p><code v-pre>hide &lt;之前在屏幕上显示的任何图像的名称&gt;</code></p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p><code v-pre>definitions.rpy</code> 为各个角色定义了许多个表情。<br>
如果你需要使用自带的其他表情，它可以作为参考。这方面以后会展开来讲。</p>
</div>
</div></template>


