<template>
  <transition name="fade-contact">
    <div class="contact-layout">
      <div class="hero">
        <div class="hero-container">
          <div class="hero-name">
            <h1 class="Animated_slidedown" :style="{transform: 'translate3d(' + tx + 'px,' + 0 + 'px,' + tz + 'px)'}">Get<br>Contact</h1>
          </div>
          <div class="hero-avatar Animated_slideright">
            <div class="hero-avatar-img"></div> 
            <div class="hero-flower" :style="{transform: 'translate3d(0px,' + ty + 'px,' + tz + 'px)'}"></div>
            <div class="hero-tree" :style="{transform: 'translate3d(' + tx + 'px,' + ty + 'px,' + tz + 'px)'}"></div>
          </div>
        </div>
      </div>
      <div class="content-list" v-show="!showContentList">
        <div class="contact-item" v-for="(item, index) in contactList">
          <a href="javascript:;" @mouseover="show=index" @mouseout="show=-1" @click="jumpTo(1)">
            <img :src="item.icon" alt="" />
            <transition name="fade-item">
              <div class="contact-item-text" v-show="show===index">{{item.label}}</div>
            </transition>
          </a>
        </div>
      </div>
      <messangerr
      :display='showMessanger'
      :messangerrBody="messangerrBody"
      @on-confirm="onConfirm"
      @clickMask="onClickMask"></messangerr>
    </div>
  </transition>
</template>

<script>
import messangerr from 'packages/messangerr'
export default {

  name: 'Contact',

  data () {
    return {
      contactList: ContactList,
      link: '',
      messangerrBody: '',
      showMessanger: false
    }
  },
  methods: {
    showText (index) {
      this.show = index
    },
    onConfirm () {
      this.show = false
      let index = this.link
      MessangerBox[index].action()
    },
    jumpTo (index) {
      this.messangerrBody = MessangerBox[index].content
      this.link = index
      this.showMessanger = true
    },
    onClickMask () {
      this.showMessanger = false
      this.messangerrBody = ''
    }
  },
  components: {
    messangerr
  }
}
const ContactList = [{
  label: 'Github',
  icon: require('assets/images/github.png')
}, {
  label: 'Zhihu',
  icon: require('assets/images/zhihu.png')
}, {
  label: 'Mail',
  icon: require('assets/images/mail.png')
}, {
  label: '500PX',
  icon: require('assets/images/500px.png')
}]
const MessangerBox = [{
  content: '打开郑皓文的github?',
  action: () => {
    window.open('https://github.com/popitin')
  }
}, {
  content: '打开郑皓文的知乎?',
  action: () => {
    window.open('https://www.zhihu.com/people/chuck-25')
  }
}, {
  content: '给郑皓文写邮件?',
  action: () => {
    window.location.href = 'mailto: zt452268020@live.com'
  }
}, {
  content: '打开郑皓文的500PX?',
  action: () => {
    window.open('https://500px.com/haowen')
  }
}]
</script>

<style lang="css" scoped>
.hero-tree {
  position: absolute;
  top: -30px;
  left: -30px;
  width: 100px;
  height: 100px;
  background-color: #c9ffed;
  z-index: -1;
}
.hero-flower {
  position: absolute;
  bottom: -40px;
  right: -40px;
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background-color: #9ec6ff;
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
</style>