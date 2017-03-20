const SettingProfile = (resolve) => require(['./components/pages/settingProfile'], resolve)
const ArticleList = (resolve) => require(['./components/pages/ArticleList'], resolve)
const MoodsLogin = (resolve) => require(['./components/pages/moodsLogin'], resolve)
const Playground = (resolve) => require(['./components/pages/playground'], resolve)
const DemoHouse = (resolve) => require(['./components/pages/demoHouse'], resolve)
const Dashboard = (resolve) => require(['./components/pages/Dashboard'], resolve)
const Flextest = (resolve) => require(['./components/pages/flextest'], resolve)
const Comment = (resolve) => require(['./components/pages/comment'], resolve)
const Article = (resolve) => require(['./components/pages/Article'], resolve)
const Theatre = (resolve) => require(['./components/pages/theatre'], resolve)
const Mirror = (resolve) => require(['./components/pages/mirror'], resolve)
const Black = (resolve) => require(['./components/pages/black'], resolve)
const Moods = (resolve) => require(['./components/pages/moods'], resolve)
const Topic = (resolve) => require(['./components/pages/topic'], resolve)
const About = (resolve) => require(['./components/pages/about'], resolve)
const Tags = (resolve) => require(['./components/pages/tags'], resolve)
const Me = (resolve) => require(['./components/pages/Me'], resolve)

const Clock = (resolve) => require(['demos/clock'], resolve)
const Cellular = (resolve) => require(['demos/cellular'], resolve)
const ZoomSlider = (resolve) => require(['demos/zoomSlider'], resolve)
const MusicPlayer = (resolve) => require(['demos/musicPlayer'], resolve)

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
    path: '/',
    component: Dashboard,
    children: [
      {
        path: '/',
        component: ArticleList
      }, {
        path: '/tags',
        component: Tags
      }, {
        path: '/article/:id',
        component: Article
      }, {
        path: '/comment',
        component: Comment
      }, {
        path: '/theatre',
        component: Theatre
      }, {
        path: '/topic',
        component: Topic
      }
    ]
  }, {
    path: '/me',
    component: Me
  }, {
    path: '/demo-house',
    component: DemoHouse
  }, {
    path: '/moods',
    component: Moods
  }, {
    path: '/moods/login',
    component: MoodsLogin
  }, {
    path: '/black',
    component: Black
  }, {
    path: '/demo/zoom-slider',
    component: ZoomSlider
  }, {
    path: '/demo/flextest',
    component: Flextest
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
