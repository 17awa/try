import comp from "C:/Users/17063/Documents/GitHub/try/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroImage\":\"https://img.picui.cn/free/2024/10/13/670bc3c59d583.jpg\",\"heroText\":\"DokiMod 开发者文档站\",\"tagline\":\"为 Mod 创作赋能。\",\"postList\":\"none\",\"bannerBg\":\"none\",\"actions\":[{\"text\":\"开始开发\",\"link\":\"./log/\",\"type\":\"primary\"}]},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"README.md\",\"excerpt\":\"<div class=\\\"hint-container warning\\\">\\n<p class=\\\"hint-container-title\\\">注意</p>\\n<p>本站文档仍处于编写阶段。欢迎所有人使用 GitHub 来帮助完善文档。</p>\\n</div>\\n\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
