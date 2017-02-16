<template lang="html">
  <transition name="fade">
    <div class="photo-layout">
      <div class="dialog-container">
        <div class="top-bar">It's like you're my mirror </div>
        <div class="robort-info-bar">
          <div class="robort-info-avatar"></div>
          <div class="btn-group">
          </div>
          <div class="robort-info-text">
            <div class="robort-info-text-col-1">镜子</div>
            <div class="robort-info-text-col-2">My mirror staring back at me</div>
          </div>
        </div>
        <div class="dialog-content" id="wrapper">
          <ul>
            <transition-group name="slidedown">
              <li class="dialog-block" v-for="log in logs" :key="log">
                <div class="dialog-block-time">{{log.time | formatDate('HH:mm')}} PM</div>
                <div class="dialog-avatar">
                  <div class="robort-dialog-avatar" v-show="log.user===0"></div>
                  <div class="user-dialog-avatar" v-show="log.user===1">
                    <span>You</span>
                  </div>
                </div>
                <div class="dialog-block-text" v-html="log.text">
                </div>
              </li>
            </transition-group>
          </ul>
        </div>
        <div class="bottom-bar">
          <transition name="fade">
            <div class="isTyping" v-show="show.isTyping">
              对方正在输入中 ...
            </div>
          </transition>
          <div class="input-container">
            <input type="text" name="userInput" v-model="userInput" @keypress="submitInput">
            <a href="javascript:;" @click="send">发送</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Ocean from './../ocean'
import IScroll from 'iscroll'
import Modal from './../packages/modal'
export default {
  data  () {
    return {
      show: {
        isTyping: false
      },
      dialogText: '',
      userName: '',
      userInput: '',
      user: {},
      myScroll: {},
      logs: []
    }
  },
  computed: {},
  mounted  () {
    this.initPage()
  },
  methods: {
    initPage () {
      let user
      try {
        user = JSON.parse(window.localStorage.getItem('withyoufriendsuseraccount'))
        this.userName = user.nick_name ? user.nick_name : user.user_name
      } catch (e) {
        window.alert('请先登录')
        this.$router.push({
          path: '/moods/login',
          query: {
            redirect: '/mirror'
          }
        })
      }
      this.greet()
      this.initScroll()
    },
    initScroll () {
      setTimeout(() => {
        this.myScroll = new IScroll('#wrapper', {
          snap: true,
          mouseWheel: true
        })
      }, 50)
    },
    greet () {
      let log = this.newDialog('你好啊，' + this.userName + '，我们又见面了。', 0)
      this.pushLog(log)
    },
    send () {
      if (this.userInput && this.userName) {
        this.show.isTyping = true
        let log = {}
        log.time = new Date()
        log.text = this.userInput
        log.user = 1
        this.$nextTick(() => {
          this.userInput = ''
        })
        this.pushLog(log)
        this.checkInput()
      }
    },
    submitInput (el) {
      el.keyCode === 13 && this.send()
    },
    checkInput () {
      let length = this.logs.length
      let userSay = this.logs[length - 1].text
      let log = {}
      setTimeout(() => {
        log.time = new Date()
        log.text = Ocean.AI(userSay)
        log.user = 0
        this.pushLog(log)
      }, 1000)
    },
    pushLog (log) {
      this.logs.push(log)
      setTimeout(() => {
        this.myScroll.refresh()
        let y = this.myScroll.maxScrollY
        this.myScroll.scrollTo(0, y, 500)
      }, 150)
    },
    newDialog (text, rule) {
      let dialogue = {}
      dialogue.time = new Date()
      dialogue.text = text
      dialogue.user = rule
      return dialogue
    }
  },
  beforeDestory: function () {
    console.log(123)
  },
  watch: {
    'show.isTyping': function (val) {
      if (val) {
        setTimeout(() => {
          this.show.isTyping = false
        }, 2000)
      }
    }
  },
  components: {
    Modal
  }
}
</script>

<style lang="css" scoped>
.btn-group {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  display: inline-block;
  width: 50px;
  height: 50px;
}
.dialog-avatar {
  position: absolute;
  top: 12px;
  z-index: 2;
  display: inline-block;
  width: 35px;
  height: 35px;
}
.user-dialog-avatar {
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  color: #ff9898;
  font-weight: 600;
}
.robort-dialog-avatar {
  width: 100%;
  height: 100%;
  background: url('./../assets/images/mirror-avatar.jpg');
  background-size: cover;
}
.isTyping {
  position: absolute;
  color: #bcbcc4;
  top: -20px;
  right: 20px;
  font-size: 11px;
}
.dialog-block-time {
  position: relative;
  top: -6px;
  float: left;
  font-size: 12px;
  width: 38px;
  display: inline-block;
}
.dialog-block-text:before {
  content: '';
  position: absolute;
  padding: 10px 0;
  top: -20px;
  left: -28px;
  width: 1px;
  background-color: #dedee8;
  height: 200%;
}
.dialog-block-text {
  /*position: relative;
  padding: 0 10px 0 45px;*/
  position: relative;
  margin-left: 45px;
  width: calc(100% - 121px);
  word-wrap: break-word;
  word-break: break-all;
  display: inline-block;
}
.dialog-block {
  position: relative;
  color: #888f99;
  font-size: 14px;
  font-weight: 100;
  padding: 20px;
}
.dialog-content {
  /*overflow: scroll;*/
  height: calc(100% - 125px)
}
.input-container a {
  position: absolute;
  right: 0;
  width: 60px;
  height: 100%;
  line-height: 35px;
  text-align: center;
  box-sizing: border-box;
  padding: 0;
  background-color: #ffcaca;
  color: #fff;
}
.input-container input {
  font-size: 15px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  outline: none;
  border: 1px;
  padding: 0 70px 0 10px;
}
.input-container {
  position: relative;
  height: 100%;
  padding: 0 5px;
  background-color: #fff;
}
.bottom-bar {
  position: relative;
  height: 35px;
  padding: 10px 10px;
  background-color: #dedee8;
}
.robort-info-text-col-1 {
  font-size: 15px;
  position: relative;
  top: 3px;
}
.robort-info-text-col-2 {
  font-size: 12px;
  color: #666;
}
.robort-info-text-col-1, .robort-info-text-col-2 {
  line-height: 25px;
  margin: 0 60px;
}
.robort-info-text {
  line-height: 1;
  box-shadow: 0 1px 10px rgba(0,0,0,0.1);
}
.robort-info-avatar {
  float: left;
  display: inline-block;
  width: 50px;
  height: 50px;
  background: url('./../assets/images/mirror-avatar.jpg');
  background-size: cover;
}
.robort-info-bar {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 50px;
  background-color: #fff;
}
.top-bar {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 20px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  font-weight: 100;
  background-color: #ffcaca;
}
.dialog-container {
  position: absolute;
  width: 80%;
  height: 75%;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%,-50%);
          transform: translate(-50%,-50%);
  background-color: #f3f4f8;
  overflow: hidden;
  box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.1);
}
.photo-layout {
  width: 100%;
  height: 100%;
}
</style>
