module.exports = {
    title: "Re_Star's Blog",//网站名称
    description: '一个轮子狂魔的学习笔记     (～￣(OO)￣)ブ',//网站描述
    base: '/blog/',
    themeConfig: {
        author: 'Re_star',
        nav: [
            { text: '主页', link: '/' },
            { text: '目录', link: '/catalog' },
        ],
        smoothScroll: true,//选填
        catalogUrl: '/catalog',//必填 目录路径
        lastUpdated: 'Last Updated',//必填：文章显示最新修改时间
        search: false,
        footer: 'Re_star',//选填
    },
    markdown: {
        lineNumbers: true
    },
    theme: 'ting'//必填：使用vuepress-theme-ting 主题
}