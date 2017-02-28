import SettingProfile from './components/settingProfile'
import MoodsLogin from './components/moodsLogin'
import Playground from './components/playground'
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
import Theatre from './components/theatre'
import Topic from './components/topic'
import CodeArticleList from './components/codeArticleList'
import CodeArticle from './components/codeArticle'

import Clock from './demo/clock'
import Cellular from './demo/cellular'
import ZoomSlider from './demo/zoomSlider'
import MusicPlayer from './demo/musicPlayer'

import Loading from './packages/loading'

export default [
  {
    path: '/playground',
    component: Playground
  }, {
    path: '/mirror',
    component: Mirror
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
    path: '/demo-house',
    component: DemoHouse
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
