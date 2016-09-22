<template lang="html">
  <div class="contact-layout" transition="fade-contact">
    <div class="head-img-layout">
      <div class="head-img"></div>
    </div>
    <div class="contact">
      <div class="contact-item">
        <a href="javascript:;" @mouseover="show=1" @mouseout="show=0" @click="jumpTo(1)">
          <img src="./../assets/images/github.png" alt="" />
          <div class="contact-item-text" v-show="show===1" transition="fade-item">Github</div>
        </a>
      </div>
      <div class="contact-item">
        <a href="javascript:;" @mouseover="show=2" @mouseout="show=0" @click="jumpTo(2)">
          <img src="./../assets/images/zhihu.png" alt="" />
          <div class="contact-item-text" v-show="show===2" transition="fade-item">Zhihu</div>
        </a>
      </div>
      <div class="contact-item">
        <a href="mailto: mandychuck@outlook.com" @mouseover="show=3" @mouseout="show=0">
          <img src="./../assets/images/mail.png" alt="" />
          <div class="contact-item-text" v-show="show===3" transition="fade-item">Mail</div>
        </a>
      </div>
      <div class="contact-item">
        <a href="javascript:;" @mouseover="show=4" @mouseout="show=0" @click="jumpTo(4)">
          <img src="./../assets/images/lofter.png" alt="" />
          <div class="contact-item-text" v-show="show===4" transition="fade-item">Lofter</div>
        </a>
      </div>
    </div>
  </div>
  <modal :show.sync='showModal' :body="modalBody"></modal>
</template>

<script>
import Modal from './../directive/modal'
export default {
  data () {
    return {
      show: 0,
      modalBody: '',
      showModal: false
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {
    showText (index) {
      this.show = index
    },
    jumpTo (index) {
      let modalBodytext = '打开郑皓文的 '
      switch (index) {
        case 1 : this.modalBody = modalBodytext + 'github' + ' 页面？'
          break
        case 2 : this.modalBody = modalBodytext + '知乎' + ' 页面？'
          break
        case 3 : this.modalBody = modalBodytext + '3' + ' 页面？'
          break
        case 4 : this.modalBody = modalBodytext + 'lofter' + ' 页面？'
          break
      }
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
  height: 100%;
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
.head-img-layout {
  width: 100%;
  padding: 100px 0;
}
.head-img {
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border-radius: 100px;
  background-color: #f3f3f3;
}
.contact-item-text {
  font-size: 15px;
  color: #000;
  font-weight: 400;
}
/*動畫*/
.fade-item-transition {
  transition: all .5s ease-out;
  opacity: 1;
}
.fade-item-enter, .fade-item-leave {
  opacity: 0;
}
</style>
