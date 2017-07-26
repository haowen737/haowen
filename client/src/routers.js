const SettingProfile = (resolve) => require(['./components/settingProfile'], resolve)
const MoodsLogin = (resolve) => require(['./components/moodsLogin'], resolve)
const Playground = (resolve) => require(['./components/playground'], resolve)
const DemoHouse = (resolve) => require(['./components/DemoHouse'], resolve)
const Mirror = (resolve) => require(['./components/mirror'], resolve)
const Black = (resolve) => require(['./components/black'], resolve)
const Moods = (resolve) => require(['./components/moods'], resolve)
const About = (resolve) => require(['./components/about'], resolve)
const Entrance = (resolve) => require(['./components/Entrance'], resolve)
const Contact = (resolve) => require(['./components/Contact'], resolve)
const Me = (resolve) => require(['./components/Me'], resolve)
const Dashboard = (resolve) => require(['./components/Dashboard'], resolve)

const BlogArticleList = (resolve) => require(['./components/BlogArticleList'], resolve)
const BlogComment = (resolve) => require(['./components/BlogComment'], resolve)
const BlogArticle = (resolve) => require(['./components/BlogArticle'], resolve)
const BlogTags = (resolve) => require(['./components/BlogTags'], resolve)
const Blog = (resolve) => require(['./components/Blog'], resolve)

const Clock = (resolve) => require(['./demos/clock'], resolve)
const Cellular = (resolve) => require(['./demos/cellular'], resolve)
const ZoomSlider = (resolve) => require(['./demos/zoomSlider'], resolve)
const MusicPlayer = (resolve) => require(['./demos/musicPlayer'], resolve)

export default [
  {
    path: '/playground',
    component: Playground
  }, {
    path: '/mirror',
    component: Mirror
  }, {
    path: '/about',
    component: About
  }, {
    path: '/dashboard',
    component: Dashboard
  }, {
    path: '/blog',
    component: Blog,
    children: [
      {
        path: '/',
        component: BlogArticleList,
        name: '博客主页'
      }, {
        path: 'tags',
        component: BlogTags,
        name: '标签'
      }, {
        path: 'article/:id',
        component: BlogArticle,
        name: '文章'
      }, {
        path: 'comment',
        component: BlogComment,
        name: '评论'
      }, {
        path: 'demo-house',
        component: DemoHouse,
        name: 'demo'
      }, {
        path: 'black',
        component: Black,
        name: '黑'
      }
    ]
  }, {
    path: '/',
    component: Dashboard
  }, {
    path: '/aboutme',
    component: Entrance,
    children: [
      {
        path: '/',
        component: Me,
        name: '我'
      }, {
        path: 'contact',
        component: Contact,
        name: '联系方式'
      }
    ]
  }, {
    path: '/moods',
    component: Moods
  }, {
    path: '/moods/login',
    component: MoodsLogin
  }, {
    path: '/demo/zoom-slider',
    component: ZoomSlider
  }, {
    path: '/demo/cellular',
    component: Cellular
  }, {
    path: '/demo/clock',
    component: Clock
  }, {
    path: '/demo/music-player',
    component: MusicPlayer
  }, {
    path: '/setting/profile',
    component: SettingProfile
  }
]
