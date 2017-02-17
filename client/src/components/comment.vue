<template lang="html">
  <div class="content-wrap">
    <div class="input-container">
      <textarea rows="7" cols="20" v-model="where.content"></textarea>
    </div>
    <a class="send-container" href="javascript:;" @click="onConfirm">写好了</a>
    <div class="comments-container">
      <div class="comments-welcome">Friend {{where.userName}}</div>
      <transition-group name="commentCard">
        <div class="comment" v-for="comment in comments" :key="comment">
          <div class="comment-inner">
            <p class="comment-author">#{{index}}&nbsp;{{comment.user_name}}
              <span class="comment-date">发表于&nbsp;{{comment.created_at | formatDate('YYYY-MM-DD HH:mm')}}<span>
            </p>
            <p class="comment-content">{{comment.content}}</p>
            <p class="comment-foot">
              <a href="javascript:;" @click="getReply(comment)">回复</a>
            </p>
          </div>
          <!-- <transition name="replydown"> -->
            <div class="reply-container" v-show="showReply==comment.id">
              <div class="reply-input">
                <input placeholder="回复(按下回车键发送)" v-model="reply.content"></input>
                <a href="javascript:;" @click="sendReply">发送</a>
              </div>
              <div class="reply-list-container">
                <!-- <transition-group name="replydown"> -->
                  <div class="reply-list" v-for="reply in replyList" v-show="replyList.length" :key="reply">
                    <a class="reply-item-name">{{reply.user_name}}</a>
                    <span class="reply-parent-name" v-show="reply.parent_name">
                      回复了
                      <a class="reply-item-name">{{reply.parent_name}}</a>
                    </span>
                    <span class="reply-item-content">: {{reply.content}}</span>
                    <a class="reply-item-reply" @click="boforeSendReply(reply)">回复</a>
                  </div>
                <!-- </transition-group> -->
              </div>
            </div>
          <!-- </transition> -->
        </div>
      </transition-group>
    </div>
    <messangerr
    :input="true"
    :display="showMessanger"
    :value.sync="where.userName"
    @on-confirm="onConfirm"
    confirm-text="好啦"
    placeholder="留个名字吧"></messangerr>
  </div>
</template>

<script>
import messangerr from './../packages/messangerr'
export default {
  data () {
    return {
      comments: [],
      replyList: [],
      showMessanger: false,
      showReply: -1,
      where: {
        content: '',
        userName: ''
      },
      reply: {
        content: '',
        parentId: 0,
        userName: '',
        parentName: ''
      }
    }
  },
  mounted () {
    this.query()
    this.initPage()
  },
  methods: {
    initPage () {
      setTimeout(() => {
        this.checkLogin()
      }, 1000)
    },
    checkLogin () {
      this.where.userName = this.$root.user.user_name
      if (!this.where.userName) {
        window.alert('未登录')
        this.$router.push({path: '/moods/login', query: {
          redirect: '/comment'
        }})
      }
    },
    prePost () {
      if (!this.where.content) {
        return
      }
      this.showMessanger = true
    },
    onConfirm () {
      let where = this.where
      this.showMessanger = false
      if (!where.userName) {
        where.userName = '吃瓜群众'
      }
      this.sendComment(where)
    },
    sendComment (where) {
      this.$http.post('/api/comment/addComment', where)
      .then((res) => {
        this.where.content = ''
        this.query()
      })
      .catch((err) => {
        console.log(err)
      })
    },
    query () {
      this.$http.get('/api/comment/getComments')
      .then((res) => {
        this.comments = res.data.data.reverse()
        console.log(this.comments)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    boforeSendReply (reply) {
      console.log(reply.user_name)
      if (reply.user_name) {
        this.reply.parentId = reply.parent_id
        this.reply.parentName = reply.user_name
        this.reply.content = '@' + reply.user_name + ': '
      } else {
        this.reply.parentName = null
      }
    },
    sendReply () {
      let reply = {}
      reply.content = this.formatReply(this.reply.content)
      if (!reply.content) {
        return
      }
      if (!this.reply.userName) {
        this.reply.userName = this.where.userName
      }
      console.log(reply.parent_name)
      reply.parent_id = this.reply.parentId
      reply.parent_name = this.reply.parentName
      reply.user_name = this.reply.userName
      this.$http.post('/api/comment/reply', reply)
      .then((res) => {
        this.replyList.push(reply)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    getReply (comment) {
      if (this.showReply !== -1) {
        this.showReply = -1
        return
      }
      this.replyList = []
      let id = comment.id
      this.reply.parentId = id
      this.$http.get('/api/comment/getReply/' + id)
      .then((res) => {
        res = res.data
        this.replyList = res.data
        this.showReply = id
        console.log(this.replyList)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    formatReply (text) {
      if (text.indexOf('@') !== -1) {
        let pattern = /(?:\s+)\S+/
        text = text.match(pattern)[0]
        console.log(text)
      }
      return text
    },
    post () {}
  },
  watch: {
  },
  components: {
    messangerr
  }
}
</script>

<style lang="css" scoped>
.reply-input {
  position: relative;
}
.reply-input a {
  position: absolute;
  display: block;
  width: 60px;
  line-height: 30px;
  text-align: center;
  color: #fff;
  background-color: #000;
  right: 5px;
  top: 4px;
}
.reply-parent-name {
  color: #000;
}
.reply-item-reply {
  margin-right: 10px;
  float: right;
  cursor: pointer;
  color: #aaa;
  font-size: 11px;
}
.reply-item-name {
  color: #7594B3;
}
.reply-item-content {
  color: #000;
}
.reply-list {
  font-size: 13px;
  background-color: #fff;
  padding: 7px 10px 7px;
}
.reply-list-container {
  border-top: 1px dashed rgba(0,0,0,0.2);
}
.reply-container input {
  padding: 10px 0;
  display: block;
  width: 100%;
  font-size: 15px;
  outline: none;
  border: none;
  text-indent: 10px;
}
.reply-container {
  position: relative;
  z-index: 1;
  display: block;
  font-size: 10px;
  color: #ef2f11;
  background-color: #fff;
  border-top: 1px dashed rgba(0,0,0,0.2);
}
.comment-foot a {
  color: #aaa;
  font-size: 11px;
}
.comment-foot {
  text-align: right;
}
.comment-inner p {
  padding: 0px;
  margin: 10px 0;
}
.comment-inner {
  position: relative;
  z-index: 2;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 1px 1px 2px rgba(0,0,0,0.2);
}
.comment-date {
  float: right;
}
.comment-author {
  text-align: left;
  font-size: 13px;
  color: #aaa;
}
.comment-content {
  font-size: 15px;
}
.comment p {
  line-height: 1;
}
.comments-welcome {
  border-bottom: 1px solid #aaa;
}
.comment {
  position: relative;
  margin: 30px;
}
.comment-inner:hover {
  box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
}
.comments-container {
  padding: 100px;
}
.name-input {
  border: 1px solid rgba(0,0,0,0.2);
  outline: none;
}
.name-asker input {
  width: 100%;
  border: none;
  box-shadow: 0 0 2px rgba(0,0,0,0.2);
  margin: auto;
}
.name-asker {
  width: 50%;
  height: 300px;
  margin: auto;
  background-color: #fff;
}
.content-wrap {
  width: 100%;
}
.input-container {
  width: 100%;
  text-align: center;
}
.input-container textarea {
  width: 60%;
  margin: 60px 0 10px 0;
  font-size: 17px;
  padding: 10px;
  outline: none;
  border: none;
  box-shadow: 0 0 3px rgba(0,0,0,0.2);
  border-radius: 5px;
}
.input-container input {
  display: block;
}
.send-container {
  display: block;
  text-align: center;
  color: #222;
  width: 60%;
  margin: 0 auto;
  padding: 10px;
  height: 20px;
  box-shadow: 0 0 3px rgba(0,0,0,0.2);
  background-color: #fff;
  border-radius: 5px;
  transition: all .6s;
}
.send-container:hover {
  box-shadow: 0 0 5px rgba(0,0,0,0.3);
}
.name-asker-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.2);
}
.name-asker-mask {
  background-color: rgba(0,0,0,0.1);
  width: 100%;
  height: 100%;
}
.content-wrap {
  background-color: #ededef;
  min-height: 100%;
}
.commentCard-enter-active, .commentCard-leave-active {
  transition: all .5s;
  transform: translateY(0);
  opacity: 1;
}
.commentCard-enter, .commentCard-leave-active {
  transform: translateY(-30%);
  opacity: 0;
}
.replydown-enter-active, .replydown-leave-active {
  transition: all .5s;
  max-height: 300px;
  opacity: 1;
}
.replydown-enter, .replydown-leave-active {
  max-height: 0;
  opacity: 0;
}
@media screen and (max-width: 500px) {
  .comments-container {
    padding: 0 0 30px 0!important;
  }
}
</style>
