<template lang="html">
  <div class="article-layout" id="container">
    <header>
      <div class="logo cur-default">Haowen</div>
      <nav class="article-nav">
        <div class="article-nav-item"><a @click="back">上一页</a></a></div>
        <div class="article-nav-item"><router-link :to="{path:'/'}">评论</router-link></a></div>
        <div class="article-nav-item"><router-link :to="{path:'/'}">干嘛</router-link></a></div>
      </nav>
      <hr>
    </header>
    <div v-html="content" class="markdown-body"></div>
    <div class="bottom-bar">
      <a href="javascript:;" @click="likeThisArticle">喜欢</a>
      <div class="bottom-bar-comment-header">
        文章评论
      </div>
      <div class="login-container">
        <a href="javascript:;" class="login-btn">登录</a>后参与讨论
      </div>
      <div class="input-container">
        <textarea rows="7" cols="20" v-model="where.content"></textarea>
      </div>
      <div class="bottom-bar-comme-body">

      </div>
    </div>
    <loading :show="showLoading" top="50%" bg-color="#000"></loading>
  </div>
</template>

<script>
import Markdown from 'markdown/lib/markdown.js'
import loading from './../packages/loading'
export default {
  data () {
    return {
      article: '',
      content: '',
      showLoading: false,
      where: {
        content: '',
        articleId: ''
      }
    }
  },
  computed: {},
  mounted () {
    this.showLoading = true
    this.getArticle()
  },
  methods: {
    getArticle () {
      let title = parseInt(this.$route.params.id)
      this.where.articleId = title
      this.query(title)
    },
    query (title) {
      this
        .$http
        .get('/static/doc/' + title + '.md')
        .then((response) => {
          this.article = response.body
          this.formatMarkdown()
          this.showLoading = false
        })
        .catch((error) => {
          console.log(error)
        })
    },
    likeThisArticle () {
      let param = {}
      param.id = this.where.articleId
      this.$http.post('/api/article/like', param)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    formatMarkdown () {
      console.log(Markdown)
      this.content = Markdown.toHTML(this.article)
    },
    back () {
      this.$router.go(-1)
    }
  },
  components: {
    loading, Markdown
  }
}
</script>

<style lang="css" scoped>
.login-btn {
  color: #003c21;
  padding-right: 5px;
}
.login-container {
  margin: 10px 0;
}
.input-container {
  width: 100%;
  text-align: center;
}
.input-container textarea {
  width: 100%;
  margin: 10px 0 10px 0;
  font-size: 17px;
  padding: 10px;
  outline: none;
  border: none;
  box-shadow: 0 0 3px rgba(0,0,0,0.2);
  border-radius: 5px;
}
.bottom-bar-comment-header:before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  display: inline-block;
  width: 5px;
  background-color: #000;
  margin-right: 10px;
}
.bottom-bar-comment-header {
  position: relative;
  padding-left: 10px;
  font-size: 20px;
}
.bottom-bar {
  margin: 0 auto 100px;
  min-width: 200px;
  max-width: 900px;
  padding: 0 45px;
}
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
  margin: 0 auto 100px;
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
