<template lang="html">
  <div class="blog-main tags-wrap">
    <div class="tag-family">
      <a class="tag-child" href="javascript:;" v-for="tag in tags" @click="selectTag(tag)">
        <span class="tag-child-title">{{tag}}</span>
      </a>
    </div>
    <transition name="article">
      <div class="article-list" v-show="articles.length">
        <div class="articel" v-for="art in articles">
          <h2>{{art.title}}</h2>
          <p>{{art.summary}}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tags: [],
      articles: [],
      showArticle: false
    }
  },
  mounted () {
    this.getTags()
  },
  methods: {
    getTags () {
      this.$http.get('/api/article/getTags')
      .then((res) => {
        this.tags = res.data
      })
      .catch((err) => {
        console.log(err)
      })
    },
    selectTag (tag) {
      this.articles = []
      this.$http.get('/api/article/getTags/' + tag)
      .then((res) => {
        this.articles = res.data
        console.log(this.articles)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  },
  components: {}
}
</script>

<style lang="css" scoped>
.articel p {
  font-size: 12px;
}
.articel h2 {
  font-size: 14px;
}
.articel {
  margin: 20px 0;
  padding: 20px;
  box-shadow: -1px 1px 2px 1px rgba(0,0,0,0.1);
}
.article-list {
  position: absolute;
  right: 0;
  top: 0;
  width: 300px;
  height: 100%;
  padding: 200px 0;
}
.tag-family {
  display: block;
}
.tag-child-title {
  position: absolute;
  bottom: 2px;
  right: 4px;
}
.tag-child {
  position: relative;
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: 10px;
  background-color: #f7f7f7;
  text-align: right;
}
.tags-wrap {
  margin-top: 10rem;
}
/*動畫*/
.article-enter-active, .article-leave-active {
  transition: all .7s ease;
  right: 0;
  /*transform: translateX(0);*/
}
.article-enter, .article-leave-to /* .fade-leave-active 在 <2.1.8 中 */ {
  opacity: 0;
  /*transform: translateX(100%);*/
  right: -200px;
}
</style>
