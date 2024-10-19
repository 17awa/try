export const themeData = JSON.parse("{\"customFonts\":{\"english\":[\"pf\",\"sans-serif\"],\"chinese\":[\"pf\",\"sans-serif\"]},\"lastUpdated\":\"上次更新时间\",\"logo\":\"https://img.picui.cn/free/2024/10/13/670bc3c59d583.jpg\",\"link\":{\"rel\":\"icon\",\"href\":\"https://img.picui.cn/free/2024/10/13/670bc3c59d583.jpg\"},\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"日志\",\"prefix\":\"/log/\",\"children\":[\"README.md\",\"1.md\",\"2.md\"]}],\"sidebar\":[\"/log/1\",\"/log/2\"],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
