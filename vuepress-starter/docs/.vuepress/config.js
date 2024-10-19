import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    customFonts: {
        // 英文字体
        english: ['pf', 'sans-serif'],
        // 中文字体
        chinese: ['pf', 'sans-serif'],
      },
    lastUpdated: "上次更新时间",
    logo: 'https://img.picui.cn/free/2024/10/13/670bc3c59d583.jpg',
    link: { rel: 'icon', href: 'https://img.picui.cn/free/2024/10/13/670bc3c59d583.jpg' },
    navbar: [
        // NavbarLink
        {
          text: '首页',
          link: '/',
        },
        // NavbarGroup
        {
          text: '日志',
          prefix: '/log/',
          children: ['README.md', '1.md','2.md'],
        },
      ],
      sidebar: [
        '/log/1',
        '/log/2',
      ],
  }),

    host: 'localhost', // ip
    port: '8099', //端口号
    title: 'JUS2tRY', // 设置网站标题

    plugins: [
        searchProPlugin({
      		indexContent: true,
     		hotReload: true,
             locales: {
                "/": {
                    
                    placeholder: "开始搜索",
                    search: "搜索文字",
                    searching: "搜索中文字",
                    cancel: "取消文字",
                    defaultTitle: "默认标题",
                    select: "选择提示",
                    navigate: "选择提示",
                    autocomplete: "自动补全提示",
                    exit: "关闭提示",
                    loading: "加载提示",
                    queryHistory: "搜索文字历史 标题",
                    resultHistory: "搜索结果历史 标题",
                    emptyHistory: "无搜索历史提示",
                    emptyResult: "无结果提示",
                },
            },
            
    }),
    
    ],

})