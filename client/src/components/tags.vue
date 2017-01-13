<template lang="html">
  <transition name="fade">
    <div class="tags-layout">
      <div class="tags" id="container">
        <header>
          <!-- <div class="tags-header">Tags</div> -->
          <div class="tags-header">Tags<span>{{selectedTag}}</span></div>
          <nav>
            <router-link class="tag-nav" :to="{path:'/code'}" v-show="showTags">Return</router-link>
            <a class="tag-nav" href="javascript:;" @click="showTags=true,selectedTag=''" v-show="!showTags">Return</a>
          </nav>
        </header>
        <div class="tags-body" v-for="tag in tags" v-show="showTags">
          <a href="javascript:;"
          :style="'left:' + Math.random() * 700 + 'px;top:' + Math.random() * 300 + 'px;font-size:' + (Math.random() * 30 + 9) + 'px'"
          @click="selectTag(tag)">{{tag}}</a>
        </div>
      </div>
      <div class="articleList" v-show="!showTags">
        <header class="articleList-header">
        </header>
        <transition name="card">
          <div class="card" v-for="card in cards" v-link="{path:'code/article/' + card.keywords}" v-show="!showTags" track-by="index">
            <h1>{{ card.title }}</h1>
            <span>{{ card.date }}</span>
          </div>
        </transition>
      </div>
    </div>
  </transition>
</template>

<script>
import database from './../../database'
export default {
  data () {
    return {
      cards: [],
      posts: [],
      tags: [],
      selectedTag: '',
      tag: '',
      tagStyle: {},
      showTags: true
    }
  },
  computed: {},
  mounted () {
    this.getTags()
  },
  methods: {
    getTags () {
      this.posts = database.posts
      for (var i = 0; i < this.posts.length; i++) {
        for (var t = 0; t < this.posts[i].tags.length; t++) {
          this.tags.push(this.posts[i].tags[t])
        }
      }
      this.formatTags()
    },
    formatTags () {
      this.tagStyle = {
        'left': Math.random() * 700 + 'px'
      }
    },
    selectTag (tag) {
      this.cards = []
      this.selectedTag = ': ' + tag
      for (var i = 0; i < this.posts.length; i++) {
        for (var t = 0; t < this.posts[i].tags.length; t++) {
          if (tag === this.posts[i].tags[t]) {
            this.cards.push(this.posts[i])
          }
        }
      }
      this.showTags = false
    }
  },
  components: {}
}
</script>

<style lang="css" scoped>
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
  padding: 0 -20px;
}
.tag-nav {
  flex: 1 1 auto;
  padding: 5px 60px;
  transition: all .2s;
  text-align: center;
}
.tags-layout header{
  text-align: center;
}
.tags-header {
  font-size: 70px;
  padding: 50px 0;
  margin: 0 auto;
  display: inline-block;
  position: relative;
}
.tags-body {
  width: 700px;
  position: relative;
  margin: 80px auto;
}
.tags-body a {
  position:absolute;
  top: 0;
  display:block;
  width: auto;
  font-family: cursive;
  font-weight: 100;
}
.tags-body a:hover {
  transition: all .2s;
  border-radius: 5px;
  /*font-size: 30px !important;*/
  transform: rotate(-2deg);
}
.tags-layout {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: absolute;
}
.card {
  position: relative;
  width: 500px;
  box-shadow: 1px 1px 4px rgba(0,0,0,0.1);
  transition: box-shadow .5s ease-out;
  padding: 20px;
  margin: 30px auto 30px;
  border-radius: 5px;
  text-align: left;
}
.card:hover {
  box-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}
.card h1{
  font-size: 16px;
  line-height: 2;
}
.card h1>span{
  font-size: 12px;
  right: 5px;
  top: 5px;
}
.articleList-header {
  text-align: center;
}
/*動畫*/
.card-enter-active, .card-leave-active {
  transition: all 0.5s;
  margin: 30px auto 30px;
  opacity: 1;
}
.card-enter {
  opacity: 0;
  margin: 0;
}
.card-leave-active {
  opacity: 0;
  margin: 0;
}
</style>
