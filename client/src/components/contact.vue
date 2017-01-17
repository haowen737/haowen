<template lang="html">
  <transition name="fade-contact">
    <div class="contact-layout">
      <div class="head-img-layout">
        <div class="head-img"></div>
      </div>
      <div class="head-content">
        <p>郑皓文</p>
        <p>中国计量大学</p>
      </div>
      <div class="content-list">
        <div class="contact-item">
          <a href="javascript:;">
            <img src="./../assets/images/github.png" alt="" />
            <transition name="fade-item">
              <div class="contact-item-text" v-show="show===1">Github</div>
            </transition>
          </a>
        </div>
        <div class="contact-item">
          <a href="javascript:;">
            <img src="./../assets/images/zhihu.png" alt="" />
            <transition name="fade-item">
              <div class="contact-item-text" v-show="show===2">Zhihu</div>
            </transition>
          </a>
        </div>
        <div class="contact-item">
          <!-- <a href="mailto: mandychuck@outlook.com" @mouseover="show=3" @mouseout="show=0"> -->
          <a href="javascript:;">
            <img src="./../assets/images/mail.png" alt="" />
            <transition name="fade-item">
              <div class="contact-item-text" v-show="show===3">Mail</div>
            </transition>
          </a>
        </div>
        <div class="contact-item">
          <a href="javascript:;">
            <img src="./../assets/images/500px.png" alt="" />
            <transition name="fade-item">
              <div class="contact-item-text" v-show="show===4">500PX</div>
            </transition>
          </a>
        </div>
        <!-- <div class="contact-item">
          <a href="javascript:;" @mouseover="show=5" @mouseout="show=0" @click="jumpTo(5)">
            <img src="./../assets/images/500px.png" alt="" />
            <transition name="fade-item">
            <div class="contact-item-text" v-show="show===5">Moods</div>
          </a>
        </div> -->
      </div>
      <modal :show.sync='showModal' :body="modalBody" @on-confirm="onConfirm"></modal>
    </div>
  </transition>
</template>

<script>
import Modal from './../packages/modal'
export default {
  data () {
    return {
      show: 0,
      modalBody: '',
      link: '',
      showModal: false
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
      switch (index) {
        case 1 : window.open('https://github.com/popitin')
          break
        case 2 : window.open('https://www.zhihu.com/people/chuck-25')
          break
        case 3 : window.location.href = 'mailto: zt452268020@live.com'
          break
        case 4 : window.open('https://500px.com/haowen')
          break
        case 5 : this.$router.push('/moods/login')
          break
      }
    },
    jumpTo (index) {
      let modalBodytext = '打开郑皓文的 '
      switch (index) {
        case 1 : this.modalBody = modalBodytext + 'github?'
          break
        case 2 : this.modalBody = modalBodytext + '知乎?'
          break
        case 3 : this.modalBody = '给郑皓文写邮件？'
          break
        case 4 : this.modalBody = modalBodytext + '500PX?'
          break
        case 5 : this.modalBody = modalBodytext + '情绪?'
          break
      }
      this.link = index
      this.showModal = true
    }
  },
  components: {
    Modal
  }
}
</script>

<style lang="css" scoped>
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
