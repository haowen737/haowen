<template lang="html">
  <div class="tags-layout" transition="tag">
    <header>
      <!-- <div class="logo cur-default">Haowen</div> -->
      <div class="tags-header">Tags</div>
      <nav>
        <a class="tag-nav" v-link="{path:'/'}">Home</a>
        <a class="tag-nav border-l" v-link="{path:'/code'}">Code</a>
      </nav>
    </header>
    <div class="tags-body">{{{tag}}}</div>
  </div>
</template>

<script>
import database from './../../database'
export default {
  data () {
    return {
      tags: [],
      tag: ''
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
      console.log(this.tags)
      let template = this.tags.map(this.formatHTML)
      this.tag = template.join('')
      console.log(this.tag)
    },
    formatHTML (text) {
      const colorPreset = ['#000', '#333', '#555', '#777', '#999']
      let index = parseInt(Math.random() * 5)
      let template = '<a href="/#/code" style="left:' +
      Math.random() * 700 +
      'px;top:' +
      Math.random() * 300 +
      'px;font-size:' +
       Math.random() * 30 +
      'px;color: ' +
      colorPreset[index] +
      ';">' +
      text +
      '</a>'
      return template
    }
  },
  components: {}
}
</script>

<style lang="css">
.tags-layout nav {
  display: flex;
  margin: 0 auto;
  width: 400px;
  font-size: 20px;
  font-family: cursive;
}
.tag-nav:hover {
  background-color: #000;
  color: #fff;
}
.tag-nav {
  flex: 1 1 auto;
  padding: 5px 60px;
  transition: all .5s ease;
}
.tags-layout header{
  text-align: center;
}
.tags-header {
  font-size: 70px;
  padding: 50px 0;
}
.tags-body {
  width: 700px;
  position: relative;
  margin: 80px auto;
  font-size: 20px;
}
.tags-body a {
  position:absolute;
  display:block;
  width: auto;
  font-family: cursive;
}
.tags-layout {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: absolute;
}
.tag-transition {
  transition: all .3s ease;
  opacity: 1;
}
.tag-enter {
  opacity: 0;
}
.tag-leave {
  opacity: 0;
}
</style>
