<template lang="html">
  <div class="photo-layout" transition="fade">
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
          <li class="dialog-block" v-for="log in logs" transition="slidedown">
            <div class="dialog-block-time">{{log.time | formatDate 'HH:mm'}} PM</div>
            <div class="dialog-avatar">
              <div class="robort-dialog-avatar" v-show="log.user===0"></div>
              <div class="user-dialog-avatar" v-show="log.user===1">
                <span>You</span>
              </div>
            </div>
            <div class="dialog-block-text">{{{log.text}}}
            </div>
          </li>
        </ul>
      </div>
      <div class="bottom-bar">
        <div class="isTyping" v-show="showIsTyping" transition="fade">
          Mirror is typing ...
        </div>
        <div class="input-container">
          <input type="text" name="userInput" v-model="userInput" @keypress="submitInput">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IScroll from 'iscroll'
import Modal from './../directive/modal'
export default {
  data: function () {
    return {
      showSidebar: 0,
      greetMode: 0,
      showIsTyping: false,
      dialogText: '',
      username: '',
      userInput: '',
      myScroll: {},
      logs: []
    }
  },
  computed: {},
  ready: function () {
    console.log(3)
    this.initScroll()
    this.initPage()
  },
  attached: function () {},
  methods: {
    initPage () {
      this.username = window.localStorage.getItem('username')
      let username = this.username
      if (!username) {
        this.metFirst()
        return
      }
      if (username) {
        this.metAgain()
        this.greetMode = 1
        return
      }
    },
    initScroll () {
      setTimeout(() => {
        this.myScroll = new IScroll('#wrapper', {
          snap: true,
          mouseWheel: true
        })
      }, 50)
    },
    metFirst () {
      let log = {time: new Date(), text: '初次见面，请多关照, 怎么称呼你呢', user: 0}
      this.pushLog(log)
    },
    askName () {
      console.log(this.logs)
      let log = {time: new Date(), text: '那就称呼你 ' + this.logs[1].text + ' 好吗？', user: 0}
      this.pushLog(log)
      window.localStorage.setItem('username', this.logs[1].text)
      // let answer = this.logs[2]
      // this.storageName(answer)
    },
    storageName (log) {
      let check = log.text.indexOf('不')
      if (check === -1) {
        window.localStorage.setItem('username', this.logs[1].text)
        let log = {time: new Date(), text: '你好啊' + this.logs[1].text, user: 0}
        this.pushLog(log)
        return
      }
      if (check !== -1) {
        return
      }
    },
    metAgain () {
      let log = {time: new Date(), text: '你好啊，' + this.username + '，我们又见面了。', user: 0}
      this.pushLog(log)
    },
    submitInput (el) {
      console.log(el.keyCode, this.userInput)
      let username = window.localStorage.getItem('username')
      if (el.keyCode === 13 && this.userInput && username) {
        this.showIsTyping = true
        let log = {}
        log.time = new Date()
        log.text = this.userInput
        log.user = 1
        this.$nextTick(function () {
          this.userInput = ''
        })
        this.pushLog(log)
        this.checkInput()
        return
      }
      if (el.keyCode === 13 && this.userInput && !username) {
        this.showIsTyping = true
        let log = {}
        log.time = new Date()
        log.text = this.userInput
        log.user = 1
        this.$nextTick(function () {
          this.userInput = ''
        })
        this.pushLog(log)
        this.askName()
      }
    },
    checkInput () {
      let length = this.logs.length
      let userSay = this.logs[length - 1].text
      let log = {}
      setTimeout(() => {
        log.time = new Date()
        log.text = this.ocean(userSay)
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
    }
  },
  beforeDestory: function () {
    console.log(123)
  },
  watch: {
    'showIsTyping': function (val) {
      if (val) {
        setTimeout(() => {
          this.showIsTyping = false
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
  float: left;
  font-size: 12px;
  width: 50px;
  margin-right: 10px;
  display: inline-block;
}
.dialog-block-text:before {
  content: '';
  position: absolute;
  padding: 10px 0;
  top: -20px;
  left: 18px;
  width: 1px;
  background-color: #dedee8;
  height: 200%;
}
.dialog-block-text {
  position: relative;
  padding: 0 10px 0 45px;
  max-width: calc(100% - 81px);
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
.input-container input {
  font-size: 15px;
  position: absolute;
  top: 0;
  height: 100%;
  outline: none;
  border: 1px;
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
