module.exports = {
    title: "Re_Star's Blog",
    description: "每天都希望能够做自己喜欢做的事情",
    base: '/blog/',
    theme: 'reco',
    markdown: {
        lineNumbers: true
    },
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    themeConfig: {
        modePicker: false, // 默认 true，false 不显示模式调节按钮，true 则显示
        // 博客配置
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: '标签'      // 默认文案 “标签”
            }
        },
        author: 'Re_Star',
        authorAvatar: '/avatar.png',
        type: 'HomePage',
        logo: '/logo.png',
        nav: [
            { text: '首页', link: '/', icon: 'reco-home' },
            { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
            { text: 'Github', link: 'https://github.com/trueLoving', icon: 'reco-github' }
        ]
    },
    // plugins: ['go-top', 'cursor-effects', 'ribbon', 'dynamic-title']
    plugins: ['go-top', 'cursor-effects', 
     'dynamic-title']
}