<template><div><h1 id="what-to-do" tabindex="-1"><a class="header-anchor" href="#what-to-do"><span>What to do</span></a></h1>
<h2 id="模版" tabindex="-1"><a class="header-anchor" href="#模版"><span>模版</span></a></h2>
<p>首先,下载<a href="https://github.com/imgradeone/DDLCModTemplate-Chinese-next" target="_blank" rel="noopener noreferrer">MOD模板</a></p>
<h2 id="ren-py-sdk-7" tabindex="-1"><a class="header-anchor" href="#ren-py-sdk-7"><span>Ren'py SDK 7</span></a></h2>
<p>Ren'Py 7 是 Ren'Py 目前与 Ren'Py 8 平行的版本，目前已经推出到了 7.6 版本。Ren'Py 在功能性上已经大幅增强，甚至支持使用 Live2D 和构建 HTML5 版游戏（虽然本模板不会支持 Web 端构建）。如果您使用 Next 分支，那么您可以使用该版本 SDK，同时减少额外的学习成本。</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>由于 Ren'Py 破坏性更新，目前 DDLC 中文 Mod 模板暂时不支持 Ren'Py SDK 7.4.6 及更高版本。</p>
</div>
<p><a href="https://www.renpy.org/release/7.4.5" target="_blank" rel="noopener noreferrer">下载 Ren'Py SDK 7.4.5</a></p>
<h2 id="代码编辑器" tabindex="-1"><a class="header-anchor" href="#代码编辑器"><span>代码编辑器</span></a></h2>
<p>基本环境搭建好后，您可以准备编辑代码了。但你必须使用一款合适的代码编辑器。</p>
<p><a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer">Visual Studio Code</a> + <a href="https://marketplace.visualstudio.com/items?itemName=LuqueDaniel.languague-renpy" target="_blank" rel="noopener noreferrer">Ren'Py Language 插件</a></p>
<h2 id="使用-ren-py-sdk-7-进行-mod-开发" tabindex="-1"><a class="header-anchor" href="#使用-ren-py-sdk-7-进行-mod-开发"><span>使用 Ren'Py SDK 7 进行 Mod 开发</span></a></h2>
<ol>
<li>
<p>下载并运行 <a href="https://www.renpy.org/release/7.4.5" target="_blank" rel="noopener noreferrer">Ren'Py SDK 7.4.5</a>。</p>
<blockquote>
<p>请注意：使用 Ren'Py 7 构建的 Mod 不兼容 Ren'Py 6。我们也会跟进上游的变动，以完美适配最新的 Ren'Py SDK。目前 Ren'Py SDK 7.4.6-7.4.7 有破坏性改动，会导致 DDLC 转场失效，请暂时不要更新 SDK！！！更多详情请参考 <a href="https://github.com/renpy/renpy/issues/2860" target="_blank" rel="noopener noreferrer">此 Issue</a>。</p>
</blockquote>
</li>
<li>
<p>前往 Releases 页面获取 <a href="https://github.com/imgradeone/DDLCModTemplate-Chinese-next/releases" target="_blank" rel="noopener noreferrer">模板的最新版本</a>。（目前 Mod 模板暂无稳定版本，您可以使用 GitHub 的 <code v-pre>Use this template</code> 创建新工程）</p>
</li>
<li>
<p>从 <a href="https://ddlc.moe" target="_blank" rel="noopener noreferrer">DDLC.moe</a> 或者 <a href="https://store.steampowered.com/app/698780/" target="_blank" rel="noopener noreferrer">Steam</a> 下载 DDLC 游戏，然后将 <code v-pre>DDLC-1.1.1-pc</code> 文件夹（对于 macOS 用户则为 <code v-pre>ddlc-mac</code>，对于 Steam 版本则为 <code v-pre>Doki Doki Literature Club</code>）复制到 Ren'Py SDK（<code v-pre>renpy-&lt;version&gt;-sdk</code>）文件夹（或者您在 Ren'Py SDK 中自定义的文件夹）。将文件夹重命名为你的 Mod 名称。</p>
</li>
<li>
<p>将 Mod 模板 ZIP 包内的内容复制到您刚刚粘贴的 DDLC 文件夹内。如有提示，请允许替换所有文件。</p>
<blockquote>
<p>对于 macOS，请右键单击 <code v-pre>ddlc-mac</code> 文件夹内的 DDLC.app，点击 <code v-pre>显示包内容</code>，然后将 <code v-pre>Contents/Resources/autorun</code> 文件夹内的文件复制过去。如有提示，请允许替换所有文件。<br>
在 Ren'Py SDK 7 中，如果遇到意外启动失败，可能是因为 <code v-pre>game/scripts.rpa</code> 的冲突，您可以尝试删除该文件。</p>
</blockquote>
</li>
<li>
<p>在 Ren'Py SDK 里启动项目。它应正常编译并启动游戏。</p>
<blockquote>
<p>有时候，启动项目可能不会发生任何事情，或者报错。您可以再次单击 <code v-pre>Launch Project</code> / <code v-pre>运行工程</code> ，此时工程应该可以正常启动。</p>
</blockquote>
</li>
<li>
<p>当你完成脚本编写后，转到 Ren'Py SDK 主界面，选择 <code v-pre>Build Distributions</code> / <code v-pre>生成分发版</code>。将 <code v-pre>Build Packages</code> / <code v-pre>生成分发包</code> 中的其他选项全部取消，仅选中 <code v-pre>Ren'Py 7 DDLC Compliant Mod</code>，然后点击 <code v-pre>Build</code> / <code v-pre>生成</code>。这个操作会生成跨平台的 ZIP 文件，这就是你的 Mod 文件。</p>
</li>
</ol>
<h2 id="摆在最后" tabindex="-1"><a class="header-anchor" href="#摆在最后"><span>摆在最后</span></a></h2>
<p>writer:</p>
<p><a href="https://docs.dokimod.top/" target="_blank" rel="noopener noreferrer">dokimod</a></p>
</div></template>


