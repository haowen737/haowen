const DemoHouse = (resolve) => require(['./components/DemoHouse'], resolve)
const Black = (resolve) => require(['./components/black'], resolve)
// const Entrance = (resolve) => require(['./components/Entrance'], resolve)
const Me = (resolve) => require(['./components/Me'], resolve)
const MeContact = (resolve) => require(['./components/MeContact'], resolve)
const MeAbout = (resolve) => require(['./components/MeAbout'], resolve)
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
const Mirror = (resolve) => require(['./demos/mirror'], resolve)
const MoodsLogin = (resolve) => require(['./demos/moodsLogin'], resolve)
const spinningSpread = (resolve) => require(['./demos/spinningSpread'], resolve)

const DebuggerMapMarker = (resolve) => require(['./demos/debugger-map-marker'], resolve)

export default [
  {
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
    path: '/me',
    component: Me,
    children: [
      {
        path: '/',
        component: MeAbout,
        name: '我'
      }, {
        path: 'contact',
        component: MeContact,
        name: '联系方式'
      }
    ]
  }, {
    path: '/demo/moods-login',
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
    path: '/demo/mirror',
    component: Mirror
  }, {
    path: '/demo/spinning-spread',
    component: spinningSpread
  }, {
    path: '/demo/debugger-map-marker',
    component: DebuggerMapMarker
  }
]
