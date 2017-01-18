<template lang="html">
  <div class="content-wrap">
    <div class="input-container">
      <textarea rows="7" cols="20" v-model="where.content"></textarea>
    </div>
    <a class="send-container" href="javascript:;" @click="prePost">写好了</a>
    <div class="comments-container">
      <transition-group name="commentCard">
        <div class="comment" v-for="comment in comments" :key="comment">
          <div class="comment-inner">
            <p class="comment-content">{{comment.content}}</p>
            <p class="comment-author">by {{comment.name}} &nbsp;&nbsp;&nbsp;&nbsp;{{comment.date | formatDate('YYYY-MM-DD')}}</p>
          </div>
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
      where: {
        content: '',
        name: ''
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
      .then(function (res) {
        this.where.content = ''
        this.query()
      })
      .catch(function (err) {
        console.log(err)
      })
    },
    query () {
      this.$http.get('/api/comment/getComments')
      .then(function (res) {
        this.comments = res.data.data.reverse()
        console.log(this.comments)
      })
      .catch(function (err) {
        console.log(err)
      })
    },
    post () {}
  },
  components: {
    messangerr
  }
}
</script>

<style lang="css" scoped>
.comment-inner {
  padding: 20px;
}
.comment-author {
  text-align: right;
  font-size: 13px;
  color: #999;
}
.comment-content {
  font-size: 18px;
}
.comment p {
  line-height: 1;
}
.comment {
  margin: 30px;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0,0,0,0.2);
}
.comments-container {
  border-top: 1px solid #999;
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
</style>
