<template lang="html">
  <div class="blog-main tags-wrap">
    <div class="tag-family">
      <a class="tag-child" href="javascript:;" v-for="tag in tags" @click="selectTag(tag)">
        <span class="tag-child-title">{{tag}}</span>
      </a>
    </div>
    <transition name="article">
      <div class="article-list" v-if="articles.length">
        <div class="articel" v-for="art in articles" :key="art">
          <h2>{{art.title}}</h2>
          <p>{{art.summary}}</p>
        </div>
        <a class="article-close" href="javascript:;" @click="clickArticleClose">x</a>
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
      showArticle: false,
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
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
      })
      .catch((err) => {
        console.log(err)
      })
    },
    clickArticleClose () {
      this.articles = []
    }
  },
  components: {}
}
</script>

<style lang="css" scoped>
.flip-list-move {
  transition: transform 1s;
}
.articel p {
  font-size: 12px;
}
.articel h2 {
  font-size: 14px;
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
/*動畫*/
@keyframes slide {
  from {
    right: -200;
  }
  to {
    right: 0;
  }
}
@media screen and (min-width: 500px) {
  
  .article-list {
    position: absolute;
    right: 0;
    top: 0;
    width: 300px;
    padding-top: 80px;
  }
  
  .articel {
    margin: 20px 0;
    padding: 20px;
    box-shadow: -1px 1px 2px 1px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
  
  .article-close {
    display: none;
  }

  .article-leave-active {
    transition: all .4s ease;
  }

  .article-enter-active {
    transition: all .7s ease;
    transform: translateX(0);
    opacity: 1;
  }

  .article-enter {
    opacity: 0;
    transform: translateX(50%);
  }

  .article-leave-to {
    opacity: 0;
    transform: translateX(-50%);
  }

}
@media screen and (max-width: 500px) {
  
  .article-list {
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    background-color: #fff;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  }

  
  .article-close {
    display: block;
    text-align: center;
  }

  
  .articel {
    padding: 20px;
    background-color: #fff;
  }


  .article-leave-active {
    transition: all .4s ease;
  }

  .article-enter-active {
    transition: all .7s ease;
    transform: translateY(0);
    opacity: 1;
  }

  .article-enter {
    opacity: 0;
    transform: translateY(-50%);
  }

  .article-leave-to {
    opacity: 0;
    transform: translateY(-50%);
  }

}


</style>
