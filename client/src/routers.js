const SettingProfile = (resolve) => require(['./components/settingProfile'], resolve)
const ArticleList = (resolve) => require(['./components/ArticleList'], resolve)
const MoodsLogin = (resolve) => require(['./components/moodsLogin'], resolve)
const Playground = (resolve) => require(['./components/playground'], resolve)
const DemoHouse = (resolve) => require(['./components/DemoHouse'], resolve)
const Dashboard = (resolve) => require(['./components/Dashboard'], resolve)
const Flextest = (resolve) => require(['./components/flextest'], resolve)
const Comment = (resolve) => require(['./components/comment'], resolve)
const Article = (resolve) => require(['./components/Article'], resolve)
const Theatre = (resolve) => require(['./components/theatre'], resolve)
const Mirror = (resolve) => require(['./components/mirror'], resolve)
const Black = (resolve) => require(['./components/black'], resolve)
const Moods = (resolve) => require(['./components/moods'], resolve)
const Topic = (resolve) => require(['./components/topic'], resolve)
const About = (resolve) => require(['./components/about'], resolve)
const Tags = (resolve) => require(['./components/tags'], resolve)
const Me = (resolve) => require(['./components/Me'], resolve)

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
      }, {
        path: '/demo-house',
        component: DemoHouse
      }, {
        path: '/me',
        component: Me
      }, {
        path: '/black',
        component: Black
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
