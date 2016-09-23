<template lang="html">
  <div class="tags-layout">
    <header>
      <div class="logo cur-default">Haowen</div>
      <div class="tags-header">Tags</div>
    </header>
    <div class="tags-body" v-for="tag in tags">
      <p>{{ tag }}</p>
    </div>
  </div>
</template>

<script>
import database from './../../database'
export default {
  data () {
    return {
      tags: []
    }
  },
  computed: {},
  ready () {
    this.getTags()
  },
  attached () {},
  methods: {
    getTags () {
      let posts = database.posts
      for (var i = 0; i < posts.length; i++) {
        for (var t = 0; t < posts[i].tags.length; t++) {
          this.tags.push(posts[i].tags[t])
        }
      }
      this.formatTags()
    },
    formatTags () {
    }
  },
  components: {}
}
</script>

<style lang="css" scoped>
header{
  text-align: center;
}
.tags-header {
  font-size: 30px;
}
.tags-body {
  width: 500px;
  margin: 0 auto;
}
.tags-body p{
}
</style>
