<template lang="html">
  <transition name="fade-contact">
    <div class="contact-layout">
      <div class="head-img-layout Animated_slidedown">
        <div class="head-img"></div>
      </div>
      <div class="head-content">
        <p class="Animated_slideleft bold fs_17">郑皓文</p>
        <p class="Animated_slideright">中国计量大学</p>
      </div>
      <div class="progressBar-container">
        <progress-bar :progressClass="progressClass" :progressList="progressList"></progress-bar>
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
import progressBar from 'packages/progressBar'
import messangerr from 'packages/messangerr'
export default {
  data () {
    return {
      progressClass: ProgressClass,
      progressList: ProgressList,
      contactList: ContactList,
      show: -1,
      messangerrBody: '',
      link: '',
      showMessanger: false
    }
  },
  computed: {},
  mounted () {},
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
    messangerr,
    progressBar
  }
}
const ProgressClass = {
  container: {
    width: '500px'
  }
}
const ProgressList = [{
  label: 'HTML',
  value: '80'
}, {
  label: 'CSS',
  value: '70'
}, {
  label: 'Javascript',
  value: '60'
}]
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
@import url("./../assets/styles/animation.css");
.progressBar-container {
  margin: 50px auto;
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
.contact-layout {
  position: absolute;
  width: 100%;
  margin: 0 auto;
}
.head-content {
  margin: 50px auto;
  width: 500px;
  text-align: center;
  font-size: 16px;
  /*height: 150px;
  box-shadow: 1px 1px 7px rgba(0,0,0,0.1) inset;*/
}
.head-content p {
  line-height: 1;
}
.head-img-layout {
  width: 100%;
  padding: 100px 0 0 0;
}
.head-img {
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border-radius: 100px;
  background-color: #f3f3f3;
  background-image: url('./../assets/images/me-1.jpg');
  background-size: cover;
  background-position: center;
}
.contact-item-text {
  font-size: 15px;
  color: #000;
  font-weight: 400;
}
/*動畫*/
.fade-item-enter-active, .fade-item-leave-active {
  transition: all .5s ease-out;
  opacity: 1;
}
.fade-item-enter, .fade-item-leave-active {
  opacity: 0;
}
</style>
