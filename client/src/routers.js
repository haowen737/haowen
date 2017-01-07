import Tags from './components/tags'
import Code from './components/code'
import Photo from './components/photo'
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

import Loading from './directive/loading'

export default {
  '/': {
    component: Dashboard
  },
  '/photo': {
    component: Photo
  },
  '/code': {
    component: Code
  },
  '/demo-house': {
    component: DemoHouse
  },
  '/tags': {
    component: Tags
  },
  '/comment': {
    component: Comment
  },
  '/code/article/:id': {
    component: Article
  },
  '/contact': {
    component: Contact
  },
  '/moods': {
    component: Moods
  },
  '/moods/login': {
    component: MoodsLogin
  },
  '/demo/loading': {
    component: Loading
  },
  '/black': {
    component: Black
  },
  '/demo/zoom-slider': {
    component: ZoomSlider
  },
  '/demo/flextest': {
    component: Flextest
  },
  'demo/cellular': {
    component: Cellular
  },
  'demo/clock': {
    component: Clock
  }
}
