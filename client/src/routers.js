const SettingProfile = (resolve) => require(['./components/settingProfile'], resolve)
const MoodsLogin = (resolve) => require(['./components/moodsLogin'], resolve)
const Playground = (resolve) => require(['./components/playground'], resolve)
const DemoHouse = (resolve) => require(['./components/demoHouse'], resolve)
const Flextest = (resolve) => require(['./components/flextest'], resolve)
const Comment = (resolve) => require(['./components/comment'], resolve)
const Contact = (resolve) => require(['./components/contact'], resolve)
const Mailbox = (resolve) => require(['./components/mailbox'], resolve)
const Mirror = (resolve) => require(['./components/mirror'], resolve)
const Black = (resolve) => require(['./components/black'], resolve)
const Moods = (resolve) => require(['./components/moods'], resolve)
const Tags = (resolve) => require(['./components/tags'], resolve)
const Code = (resolve) => require(['./components/code'], resolve)
const Theatre = (resolve) => require(['./components/theatre'], resolve)
const Topic = (resolve) => require(['./components/topic'], resolve)
const CodeArticleList = (resolve) => require(['./components/codeArticleList'], resolve)
const CodeArticle = (resolve) => require(['./components/codeArticle'], resolve)
const About = (resolve) => require(['./components/about'], resolve)

const MHello = (resolve) => require(['./webapp/mHello'], resolve)

const Clock = (resolve) => require(['./demo/clock'], resolve)
const Cellular = (resolve) => require(['./demo/cellular'], resolve)
const ZoomSlider = (resolve) => require(['./demo/zoomSlider'], resolve)
const MusicPlayer = (resolve) => require(['./demo/musicPlayer'], resolve)

const Loading = (resolve) => require(['./packages/loading'], resolve)

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
    component: Code,
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
    path: '/m',
    component: MHello
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
