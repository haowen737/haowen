<template lang="html">
  <div class="content-wrap">
    <div class="input-container">
      <textarea rows="7" cols="20" v-model="where.content"></textarea>
    </div>
    <a class="send-container" href="javascript:;" @click="prePost">写好了</a>
    <div class="" v-for="comment in comments">
      {{comment.content}} author by {{comment.name}} in {{comment.date | formatDate('YYYY-MM-DD')}}
    </div>
    <messanger :show.sync='showDialog' @on-confirm="onConfirm" confirm-text="好啦" :value.sync="where.name" placeholder="留个名字吧"></messanger>
  </div>
</template>

<script>
import messanger from './../directive/messanger'
export default {
  data () {
    return {
      comments: [],
      showDialog: false,
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
      this.showDialog = true
    },
    onConfirm () {
      let where = this.where
      console.log(where, where.name)
      // if (!where.name) {
      //   where.name = 'NEMO'
      // }
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
        console.log(res)
        this.comments = res.data.data.reverse()
      })
      .catch(function (err) {
        console.log(err)
      })
    },
    post () {}
  },
  components: {
    messanger
  }
}
</script>

<style lang="css" scoped>
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
</style>
