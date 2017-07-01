const SettingProfile = (resolve) => require(['./components/settingProfile'], resolve)
const MoodsLogin = (resolve) => require(['./components/moodsLogin'], resolve)
const Playground = (resolve) => require(['./components/playground'], resolve)
const DemoHouse = (resolve) => require(['./components/DemoHouse'], resolve)
const Flextest = (resolve) => require(['./components/flextest'], resolve)
const Theatre = (resolve) => require(['./components/theatre'], resolve)
const Mirror = (resolve) => require(['./components/mirror'], resolve)
const Black = (resolve) => require(['./components/black'], resolve)
const Moods = (resolve) => require(['./components/moods'], resolve)
const Topic = (resolve) => require(['./components/topic'], resolve)
const About = (resolve) => require(['./components/about'], resolve)
const Entrance = (resolve) => require(['./components/Entrance'], resolve)
const Contact = (resolve) => require(['./components/Contact'], resolve)
const Me = (resolve) => require(['./components/Me'], resolve)
const Test = (resolve) => require(['./components/Test'], resolve)

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
    path: '/blog',
    component: Blog,
    children: [
      {
        path: '/',
        component: BlogArticleList
      }, {
        path: 'tags',
        component: BlogTags
      }, {
        path: 'article/:id',
        component: BlogArticle
      }, {
        path: 'comment',
        component: BlogComment
      }, {
        path: 'theatre',
        component: Theatre
      }, {
        path: 'topic',
        component: Topic
      }, {
        path: 'demo-house',
        component: DemoHouse
      }, {
        path: 'black',
        component: Black
      }
    ]
  }, {
    path: '/',
    component: Entrance,
    children: [
      {
        path: '/',
        component: Me
      }, {
        path: 'contact',
        component: Contact
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
  }, {
    path: '/test',
    component: Test
  }
]
