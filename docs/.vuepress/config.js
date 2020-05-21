module.exports = {
    // title: "Re_Star's Blog",//网站名称
    // description: '一个轮子狂魔的学习笔记     (～￣(OO)￣)ブ',//网站描述
    title: "Re_Star's Blog",
    base: '/blog/',
    theme: 'reco',
    themeConfig: {
        // 博客配置
        blogConfig: {
            category: {
                location: 1,     // 在导航栏菜单中所占的位置，默认2
                text: 'Category' // 默认文案 “分类”
            },
            tag: {
                location: 2,     // 在导航栏菜单中所占的位置，默认3
                text: 'Tag'      // 默认文案 “标签”
            }
        },
        // sidebar: 'auto',//在所有页面中启用自动生成侧栏
        author: 'Re_Star',
        authorAvatar: '/avatar.png',
        type: 'blog',
        logo:'/logo.png',
        nav: [
            { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
            { text: 'Github', link: 'https://github.com/trueLoving', icon: 'reco-github' }
        ]
    }
}