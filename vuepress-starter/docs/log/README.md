---
pageComponent: 
  name: Catalogue
title: 引入
article: false
date: 2021-04-25 18:05:54
---

# What to do

## 模版

首先,下载[MOD模板](https://github.com/imgradeone/DDLCModTemplate-Chinese-next)

## Ren'py SDK 7
Ren'Py 7 是 Ren'Py 目前与 Ren'Py 8 平行的版本，目前已经推出到了 7.6 版本。Ren'Py 在功能性上已经大幅增强，甚至支持使用 Live2D 和构建 HTML5 版游戏（虽然本模板不会支持 Web 端构建）。如果您使用 Next 分支，那么您可以使用该版本 SDK，同时减少额外的学习成本。

::: warning 注意
由于 Ren'Py 破坏性更新，目前 DDLC 中文 Mod 模板暂时不支持 Ren'Py SDK 7.4.6 及更高版本。
:::

[下载 Ren'Py SDK 7.4.5](https://www.renpy.org/release/7.4.5)

## 代码编辑器

基本环境搭建好后，您可以准备编辑代码了。但你必须使用一款合适的代码编辑器。

[Visual Studio Code](https://code.visualstudio.com) + [Ren'Py Language 插件](https://marketplace.visualstudio.com/items?itemName=LuqueDaniel.languague-renpy)

## 使用 Ren'Py SDK 7 进行 Mod 开发
1. 下载并运行 [Ren'Py SDK 7.4.5](https://www.renpy.org/release/7.4.5)。
   
    > 请注意：使用 Ren'Py 7 构建的 Mod 不兼容 Ren'Py 6。我们也会跟进上游的变动，以完美适配最新的 Ren'Py SDK。目前 Ren'Py SDK 7.4.6-7.4.7 有破坏性改动，会导致 DDLC 转场失效，请暂时不要更新 SDK！！！更多详情请参考 [此 Issue](https://github.com/renpy/renpy/issues/2860)。
    
2. 前往 Releases 页面获取 [模板的最新版本](https://github.com/imgradeone/DDLCModTemplate-Chinese-next/releases)。（目前 Mod 模板暂无稳定版本，您可以使用 GitHub 的 `Use this template` 创建新工程）

3. 从 [DDLC.moe](https://ddlc.moe) 或者 [Steam](https://store.steampowered.com/app/698780/) 下载 DDLC 游戏，然后将 `DDLC-1.1.1-pc` 文件夹（对于 macOS 用户则为 `ddlc-mac`，对于 Steam 版本则为 `Doki Doki Literature Club`）复制到 Ren'Py SDK（`renpy-<version>-sdk`）文件夹（或者您在 Ren'Py SDK 中自定义的文件夹）。将文件夹重命名为你的 Mod 名称。

4. 将 Mod 模板 ZIP 包内的内容复制到您刚刚粘贴的 DDLC 文件夹内。如有提示，请允许替换所有文件。  
    > 对于 macOS，请右键单击 `ddlc-mac` 文件夹内的 DDLC.app，点击 `显示包内容`，然后将 `Contents/Resources/autorun` 文件夹内的文件复制过去。如有提示，请允许替换所有文件。  
    > 在 Ren'Py SDK 7 中，如果遇到意外启动失败，可能是因为 `game/scripts.rpa` 的冲突，您可以尝试删除该文件。
    
5. 在 Ren'Py SDK 里启动项目。它应正常编译并启动游戏。
   
    > 有时候，启动项目可能不会发生任何事情，或者报错。您可以再次单击 `Launch Project` / `运行工程` ，此时工程应该可以正常启动。
    
6. 当你完成脚本编写后，转到 Ren'Py SDK 主界面，选择 `Build Distributions` / `生成分发版`。将 `Build Packages` / `生成分发包` 中的其他选项全部取消，仅选中 `Ren'Py 7 DDLC Compliant Mod`，然后点击 `Build` / `生成`。这个操作会生成跨平台的 ZIP 文件，这就是你的 Mod 文件。

## 摆在最后

writer: 

[dokimod](https://docs.dokimod.top/)