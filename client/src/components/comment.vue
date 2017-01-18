<template lang="html">
  <div class="content-wrap">
    <div class="input-container">
      <textarea rows="7" cols="20" v-model="where.content"></textarea>
    </div>
    <a class="send-container" href="javascript:;" @click="prePost">写好了</a>
    <div class="comments-container">
      <transition-group name="commentCard">
        <div class="comment" v-for="(comment, index) in comments" :key="comment" @click="showReply=index, reply.parentId=comment.id">
          <div class="comment-inner">
            <p class="comment-author">#{{index}}&nbsp;{{comment.name}}
              <span class="comment-date">发表于&nbsp;{{comment.created_at | formatDate('YYYY-MM-DD HH:mm')}}<span>
            </p>
            <p class="comment-content">{{comment.content}}</p>
          </div>
          <transition name="replydown">
            <a class="reply-container" v-show="showReply==index"><input placeholder="回复(按下回车键发送)" v-model="reply.content" @keypress="checkReply"></input></a>
          </transition>
        </div>
      </transition-group>
    </div>
    <messangerr
    :input="true"
    :display="showMessanger"
    :value.sync="where.name"
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
      showMessanger: false,
      showReply: -1,
      where: {
        content: '',
        name: ''
      },
      reply: {
        content: '',
        parentId: 0
      }
    }
  },
  mounted () {
    this.query()
  },
  methods: {
    prePost () {
      if (!this.where.content) {
        return
      }
      this.showMessanger = true
    },
    onConfirm () {
      let where = this.where
      this.showMessanger = false
      if (!where.name) {
        where.name = '吃瓜群众'
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
    checkReply (el) {
      let reply = this.reply
      console.log(el.keyCode, this.reply)
      el.keyCode === 13 && this.sendReply(reply)
    },
    sendReply (reply) {
      this.$http.post('/api/comment/reply', reply)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    post () {}
  },
  watch: {
    'reply.content': function (val) {
      console.log(val)
    }
  },
  components: {
    messangerr
  }
}
</script>

<style lang="css" scoped>
.reply-container input {
  padding: 10px 0;
  display: block;
  width: 100%;
  font-size: 15px;
  outline: none;
  border: none
}
.reply-container {
  display: block;
  height: 30px;
  cursor: pointer;
  font-size: 10px;
  color: #ef2f11;
  border-top: 1px dashed rgba(0,0,0,0.2);
}
.comment-inner p {
  padding: 0px;
  margin: 10px 0;
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
.comment {
  position: relative;
  margin: 30px;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 1px 1px 2px rgba(0,0,0,0.2);
}
.comment:hover {
  box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
}
.comments-container {
  border-top: 1px solid #aaa;
  margin: 100px;
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
  transition: all .3s ease;
  height: 30px;
  opacity: 1;
  transform: translateY(0px);
}
.replydown-enter, .replydown-leave-active {
  height: 0;
  opacity: 0;
  transform: translateY(-10px);
}
</style>
