import SettingProfile from './components/settingProfile'
import MoodsLogin from './components/moodsLogin'
import Dashboard from './components/dashboard'
import DemoHouse from './components/demoHouse'
import Flextest from './components/flextest'
import Comment from './components/comment'
import Contact from './components/contact'
import Mailbox from './components/mailbox'
import Mirror from './components/mirror'
import Black from './components/black'
import Moods from './components/moods'
import Tags from './components/tags'
import Code from './components/code'
import CodeArticleList from './components/codeArticleList'
import CodeArticle from './components/codeArticle'

import Clock from './demo/clock'
import Cellular from './demo/cellular'
import ZoomSlider from './demo/zoomSlider'
import MusicPlayer from './demo/musicPlayer'

import Loading from './packages/loading'

import DashboardTopbar from './components/dashboardTopbar'

export default [
  {
    path: '/',
    components: {
      default: Dashboard,
      topbar: DashboardTopbar
    }
  }, {
    path: '/mirror',
    component: Mirror
  }, {
    path: '/code',
    component: Code,
    children: [
      {
        path: '/code/article',
        component: CodeArticleList
      }, {
        path: '/tags',
        component: Tags
      }, {
        path: '/code/article/:id',
        component: CodeArticle
      }
    ]
  }, {
    path: '/demo-house',
    component: DemoHouse
  }, {
    path: '/comment',
    component: Comment
  }, {
    path: '/contact',
    component: Contact
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
  }, {
    path: '/mailbox',
    component: Mailbox
  }
]
