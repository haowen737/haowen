<template lang="html">
  <div class="article-layout">
    <header>
      <div class="logo cur-default">Haowen</div>
      <hr>
      <nav class="article-nav">
        <div class="article-nav-item"><a v-link="{path:'/'}">Home</a></div>
        <div class="article-nav-item"><a v-link="{path:'/code'}">Return</a></div>
        <div class="article-nav-item"><a v-link="{path:'/'}">Haha</a></div>
      </nav>
    </header>
    <div v-html="markdown" class="markdown-body"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      article: '',
      markdown: ''
    }
  },
  computed: {},
  ready () {
    this.getArticle()
  },
  attached () {},
  methods: {
    getArticle () {
      let title = this.$route.params.id
      console.log(title)
      this.query(title)
    },
    query (title) {
      this
        .$http
        .get('/static/doc/' + title + '.md')
        .then((response) => {
          this.article = response.body
          this.formatMarkdown()
        })
        .catch((error) => {
          console.log(error)
        })
    },
    formatMarkdown () {
      console.log(this.article)
      this.markdown = window.markdown.toHTML(this.article)
    }
  },
  components: {}
}
</script>

<style lang="css" scoped>
.article-layout header {
  text-align: center;
}
.logo {
  margin: 40px 0;
}
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 900px;
  margin: 0 auto;
  padding: 45px;
}
.article {
  width: 700px;
  margin: 50px auto;
  text-align: left;
}
.article h1 {
  font-size: 40px;
  text-align: center;
}
.article blockquote {
  color: #999999;
  font-size: 20px;
  margin: 15px 0;
}
.article blockquote:before {
  content: '';
  border: 2px solid #999;
  color: #999999;
  font-size: 20px;
}
.article blockquote>p {
  color: #999999;
  display: inline-block;
  text-indent: 10px;
  font-size: 20px;
}
.article p {
  font-size: 15px;
}
.article-nav {
  display: flex;
  width: 500px;
  margin: 0 auto;
}
.article-nav-item {
  flex: 1 1 auto;
  cursor: pointer;
}
.article-nav-item a {
  transition: all .3s ease-out;
  line-height: 30px;
  display: block;
}
.article-nav-item>a:hover {
  background-color: #000;
  color: #fff;
}
</style>
