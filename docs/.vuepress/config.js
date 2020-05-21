module.exports = {
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
        author: 'Re_Star',
        authorAvatar: '/avatar.png',
        type: 'HomePage',
        logo: '/logo.png',
        nav: [
            { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
            { text: 'Github', link: 'https://github.com/trueLoving', icon: 'reco-github' }
        ]
    }
}