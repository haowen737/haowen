<template lang="html">
  <div class="blog-main">
    <sender @dataReady="send" :show="true"></sender>
    <ul class="comments-container">
      <transition-group name="commentCard">
        <li class="comment" v-for="comment in comments" :key="comment">
          <div class="comment-inner">
            <p class="comment-author">#{{index}}&nbsp;{{comment.user_name}}
              <span class="comment-date">发表于&nbsp;{{comment.created_at | formatDate('YYYY-MM-DD HH:mm')}}<span>
            </p>
            <p class="comment-content">{{comment.content}}</p>
            <p class="comment-foot">
              <a href="javascript:;" @click="reply">回复</a>
            </p>
          </div>
          <div class="reply-container">
            <div class="reply-list-container">
              <div class="reply-list" v-for="child in comment.child" :key="child">
                <a class="reply-item-name">{{child.user_name}}</a>
                <span class="reply-parent-name" v-show="child.parent_name">
                  回复了
                  <a class="reply-item-name">{{child.parent_name}}</a>
                </span>
                <span class="reply-item-content">: {{child.content}}</span>
                <a class="reply-item-reply" @click="reply">回复</a>
              </div>
            </div>
          </div>
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
import Sender from 'widgets/Sender'
export default {
  name: 'comment',
  components: { Sender },
  data () {
    return {
      comments: []
    }
  },
  mounted () {
    this.query()
  },
  methods: {
    send (data) {
      this.$http.post('/api/comment/addComment', {
        userName: data.userName,
        content: data.content
      })
      .then((res) => {
        this.query()
        data.cb && data.cb()
      })
      .catch((err) => {
        this.$Warning(err.msg)
        data.cb && data.cb()
      })
    },
    query () {
      this.$http.get('/api/comment/getComments')
      .then(({data}) => {
        this.comments = data.reverse()
      })
      .catch(({data}) => {
        this.$Warning(data.msg)
      })
    },
    reply () {
    }
  }
}
</script>

<style lang="css" scoped>
.comments-container::before {
  content: '';
  position: absolute;
  top: -20px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #ddd;
  transform: scaleX(1.1);
  animation: scaleX 1s ease;
}
.comments-container {
  position: relative;
  margin-top: 60px;
}
.ball {
  position: fixed;
  bottom: 100px;
  right: 100px;
  width: 70px;
  height: 70px;
  border-radius: 100px;
  background-color: #ddd;
  z-index: 2000;
}
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
  margin-left: 20px; 
  z-index: 1;
  display: block;
  font-size: 10px;
  color: #ef2f11;
  background-color: #fff;
}
.reply-container::before {
  content: '';
  position: absolute;
  height: 100%;
  left: 0;
  top: 0px;
  width: 1px;
  animation: scaleY 1s ease;
  background-color: #ddd;
}
.comment-foot a {
  font-size: 11px;
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
  /*box-shadow: 1px 1px 2px rgba(0,0,0,0.2);*/
}
.comment-inner::before {
  content: '';
  position: absolute;
  height: 100%;
  left: 0;
  top: 0px;
  width: 1px;
  animation: scaleY 1s ease;
  background-color: #ddd;
}
.comments-container li:first-child::before {
  content: '';
  position: absolute;
  height: 100%;
  left: 0;
  top: -40px;
  width: 1px;
  animation: scaleY 1s ease;
  background-color: #ddd;
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
  margin: 40px 0;
  list-style-type: none;
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
@keyframes scaleX {
  0% {
    opacity: 0;
    transform: scaleX(1.5);
  }
  100% {
    opacity: 1;
    transform: scaleX(1.1);
  }
}
@keyframes scaleY {
  0% {
    opacity: 0;
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
</style>
