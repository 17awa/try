export const redirects = JSON.parse("{\"/log/1.html\":\"/pages/1/\",\"/log/2.html\":\"/pages/2/\"}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"C:/Users/17063/Documents/GitHub/try/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/17063/Documents/GitHub/try/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/pages/1/", { loader: () => import(/* webpackChunkName: "pages_1_index.html" */"C:/Users/17063/Documents/GitHub/try/vuepress-starter/docs/.vuepress/.temp/pages/pages/1/index.html.js"), meta: {"title":"简单的脚本"} }],
  ["/pages/2/", { loader: () => import(/* webpackChunkName: "pages_2_index.html" */"C:/Users/17063/Documents/GitHub/try/vuepress-starter/docs/.vuepress/.temp/pages/pages/2/index.html.js"), meta: {"title":"选择菜单与多 Label"} }],
  ["/log/", { loader: () => import(/* webpackChunkName: "log_index.html" */"C:/Users/17063/Documents/GitHub/try/vuepress-starter/docs/.vuepress/.temp/pages/log/index.html.js"), meta: {"title":"引入"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/17063/Documents/GitHub/try/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
