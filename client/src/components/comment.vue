<template lang="html">
  <div class="content-wrap">
    <textarea rows="3" cols="20" v-model="where.content" autofocus>
    </textarea>
    <a href="javascript:;" @click="post">fasong</a>
    <div class="" v-for="comment in comments">
      {{comment.name}}----{{comment.content}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      comments: [],
      where: {
        content: ''
      }
    }
  },
  ready () {
    this.query()
  },
  methods: {
    query () {
      this.$http.get('/api/comment/getComments')
      .then(function (res) {
        console.log(res)
        this.comments = res.data.data
      })
      .catch(function (err) {
        console.log(err)
      })
    },
    post () {}
  }
}
</script>

<style lang="css">
</style>
