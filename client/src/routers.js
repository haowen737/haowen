const SettingProfile = (resolve) => require(['./components/pages/settingProfile'], resolve)
const MoodsLogin = (resolve) => require(['./components/pages/moodsLogin'], resolve)
const Playground = (resolve) => require(['./components/pages/playground'], resolve)
const DemoHouse = (resolve) => require(['./components/pages/demoHouse'], resolve)
const Flextest = (resolve) => require(['./components/pages/flextest'], resolve)
const Comment = (resolve) => require(['./components/pages/comment'], resolve)
const Contact = (resolve) => require(['./components/pages/contact'], resolve)
const Mailbox = (resolve) => require(['./components/pages/mailbox'], resolve)
const Mirror = (resolve) => require(['./components/pages/mirror'], resolve)
const Black = (resolve) => require(['./components/pages/black'], resolve)
const Moods = (resolve) => require(['./components/pages/moods'], resolve)
const Tags = (resolve) => require(['./components/pages/tags'], resolve)
const Dashboard = (resolve) => require(['./components/pages/Dashboard'], resolve)
const Theatre = (resolve) => require(['./components/pages/theatre'], resolve)
const Topic = (resolve) => require(['./components/pages/topic'], resolve)
const CodeArticleList = (resolve) => require(['./components/pages/codeArticleList'], resolve)
const CodeArticle = (resolve) => require(['./components/pages/codeArticle'], resolve)
const About = (resolve) => require(['./components/pages/about'], resolve)

const Clock = (resolve) => require(['demos/clock'], resolve)
const Cellular = (resolve) => require(['demos/cellular'], resolve)
const ZoomSlider = (resolve) => require(['demos/zoomSlider'], resolve)
const MusicPlayer = (resolve) => require(['demos/musicPlayer'], resolve)

const Loading = (resolve) => require(['packages/loading'], resolve)

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
        component: CodeArticleList
      }, {
        path: '/tags',
        component: Tags
      }, {
        path: '/article/:id',
        component: CodeArticle
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
    path: '/contact',
    component: Contact
  }, {
    path: '/demo-house',
    component: DemoHouse
  }, {
    path: '/mailbox',
    component: Mailbox
  }, {
    path: '/moods',
    component: Moods
  }, {
    path: '/moods/login',
    component: MoodsLogin
  }, {
    path: '/demo/loading',
    component: Loading
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
