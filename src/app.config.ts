export default {
  pages: [
    'pages/index/index',
    'pages/article/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    navigationStyle: 'custom'
  },
  tabBar: {
    list: [
      {
        // 'iconPath': 'resource/latest.png',
        // 'selectedIconPath': 'resource/lastest_on.png',
        pagePath: 'pages/index/index',
        text: '文章'
      },
      {
        pagePath: 'pages/index/index',
        text: '我的'
      },
    ],
    'color': '#000',
    'selectedColor': '#56abe4',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
}
