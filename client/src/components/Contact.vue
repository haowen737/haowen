<template>
  <transition name="fade-contact">
    <div class="contact-layout">
      <div class="hero">
        <div class="hero-container">
          <div class="hero-name">
            <h1 class="Animated_slidedown" :style="{transform: 'translate3d(' + tx / 2 + 'px,' + ty + 'px,' + tz + 'px)'}">🤔&nbsp;Get IN<br>Contact</h1>
          </div>
          <div class="hero-avatar Animated_slideright">
            <div class="hero-avatar-img"></div>
            <div class="hero-flower" :style="{transform: 'translate3d(0px,' + ty + 'px,' + tz + 'px)'}"></div>
            <div class="hero-tree" :style="{transform: 'translate3d(' + -tx + 'px,' + ty + 'px,' + tz + 'px)'}"></div>
          </div>
        </div>
      </div>
      <div class="content">
        <p>下面有我的GitHub和知乎专栏</p>
        <p>...</p>
        <p>兴趣使然</p>
        <p>所以下面有我的500px网站和我的YouTube频道</p>
        <p>&nbsp;</p>
        <p>如果我们能做个朋友，这是我的邮箱<a href="mailto:haowen737@gmail.com">haowen737@gmail.com</a></p>
      </div>
      <div class="content-list" v-show="!showContentList">
        <div class="contact-item" v-for="(item, index) in contactList" :key="item">
          <a :href="item.to" target="_blank">
            <img :src="item.icon" alt="" />
            <div class="contact-item-text" v-show="false">{{item.label}}</div>
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import messangerr from 'packages/messangerr'
export default {

  name: 'Contact',

  data () {
    return {
      contactList: [],
      tx: 0,
      ty: 0,
      tz: 0
    }
  },
  created () {
    this.contactList = [{
      label: 'Github',
      icon: require('assets/images/github.png'),
      to: 'https://github.com/haowen737'
    }, {
      label: 'Zhihu',
      icon: require('assets/images/zhihu.png'),
      to: 'https://zhuanlan.zhihu.com/fe-sketch'
    }, {
      label: 'Weibo',
      icon: require('assets/images/weibo.png'),
      to: 'https://weibo.com/311170900/'
    }, {
      label: 'youTube',
      icon: require('assets/images/youTube.png'),
      to: 'https://www.youtube.com/channel/UC3cB_GBiRHeRSNLVL19Bz7g'
    }, {
      label: '500PX',
      icon: require('assets/images/500px.png'),
      to: 'https://500px.com/haowen'
    }]
  },
  mounted () {
    window.addEventListener('scroll', this.setAnimation)
  },
  methods: {
    setAnimation () {
      this.tx = -window.scrollY / 4
      this.ty = -window.scrollY / 4
      this.tz = -window.scrollY / 4
    }
  },
  components: {
    messangerr
  }
}
</script>

<style lang="css" scoped>
@import url("./../assets/styles/animation.css");
.content a {
  padding: 0 3px;
  font-style: italic;
  color: #005bff;
  font-weight: 500;
}
.hero-tree {
  position: absolute;
  top: -30px;
  right: -30px;
  width: 100px;
  height: 100px;
  background-color: #c9ffed;
  z-index: -1;
}
.hero-flower {
  position: absolute;
  bottom: -65px;
  left: -65px;
  width: 70px;
  height: 70px;
  border-radius: 100px;
  border: 30px solid #9ec6ff;
}
.hero {
  margin-top: 70px;
  padding: 130px 0;
  background-color: #fdfff7;
}
.hero-container {
  position: relative;
  max-width: 50rem;
  margin: 0 auto;
  text-align: right;
  line-height: 0;
}
.hero-name h1 {
  font-size: 5rem;
  color: #ffa4e0;
  line-height: .9;
  font-weight: 300;
  text-transform: uppercase;
}
.hero-name {
  position: absolute;
  left: 0;
  bottom: 0;
  text-align: left;
  display: inline-block;
  line-height: 1.2;
}
.hero-avatar {
  position: relative;
  display: inline-block;
  z-index: 2;
}
.hero-avatar-img {
  width: 300px;
  height: 300px;
  background-color: #f3f3f3;
  background-image: url('./../assets/images/me-1.jpg');
  background-size: cover;
  background-position: center;
  line-height: 0;
  box-shadow: 0 0 6rem rgba(0,0,0,.3);
}
.contact-layout {
  margin: 70px 0;
}
.contact {
  display: flex;
  width: 700px;
  margin: 0 auto;
}
.contact-item a {
  display: inline-block;
  width: 50px;
  height: 50px;
}
.contact-item img {
  width: 100%;
}
.content-list {
  display: flex;
}
.contact-item {
  flex: 1 1 auto;
  text-align: center;
}
.content {
  margin: 10rem auto;
  max-width: 50rem;
  text-align: center;
  font-size: 1.2rem;
}
</style>
