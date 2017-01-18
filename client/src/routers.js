import Tags from './components/tags'
import Code from './components/code'
import Mirror from './components/mirror'
import Black from './components/black'
import Moods from './components/moods'
import Article from './components/article'
import Comment from './components/comment'
import Contact from './components/contact'
import Flextest from './components/flextest'
import Dashboard from './components/dashboard'
import DemoHouse from './components/demoHouse'
import MoodsLogin from './components/moodsLogin'

import Clock from './demo/clock'
import Cellular from './demo/cellular'
import ZoomSlider from './demo/zoomSlider'

import Loading from './packages/loading'

export default [
  {
    path: '/',
    component: Dashboard
  }, {
    path: '/mirror',
    component: Mirror
  }, {
    path: '/code',
    component: Code
  }, {
    path: '/demo-house',
    component: DemoHouse
  }, {
    path: '/tags',
    component: Tags
  }, {
    path: '/comment',
    component: Comment
  }, {
    path: '/code/article/:id',
    component: Article
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
    path: 'demo/cellular',
    component: Cellular
  }, {
    path: 'demo/clock',
    component: Clock
  }
]
