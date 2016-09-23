<template lang="html">
  <div class="container">
    <div class="header">
      <div class="header-inner">
        <div class="logo cur-default">Haowen</div>
        <div class="site-subtitle cur-default">Live a life you will remember!</div>
        <nav class="site-nav">
          <ul>
            <li><a v-link="{path:'/'}">Home</a></li>
            <li><a v-link="{path:'/archives'}">Archives</a></li>
            <li><a v-link="{path:'/tags'}">Tags</a></li>
            <li><a v-link="{path:'/contact'}">Me</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="cards">
      <div class="card" v-for="card in cards" v-link="{path:'code/article/' + card.keywords}">
        <h1>{{ card.title }}</h1>
        <span>{{ card.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import database from './../../database'
export default {
  data: function () {
    return {
      cards: {}
    }
  },
  computed: {},
  ready: function () {
    this.getCards()
  },
  attached: function () {},
  methods: {
    getCards () {
      this.cards = database.posts
    }
  },
  components: {
  }
}
</script>

<style lang="css" scoped>
.container {
  text-align: center;
}
/*.header-inner {
  text-align: center;
}*/
.header-inner {
  position: relative;
  padding: 100px 0 70px;
}
.site-subtitle {
  margin-top: 10px;
  font-size: 13px;
  color: #999;
}
.site-nav li{
  display: inline-block;
  margin-top: 20px;
  border-bottom: 1px solid #fff;
  transition: border-bottom 1.3s cubic-bezier(0.72, 1.62, 0.51, 1.58);;
}
.site-nav li:hover {
  border-bottom: 1px solid #999;
}
.site-nav a {
  display: block;
  padding: 5px 30px;
}
.card {
  position: relative;
  margin: 0 auto 30px;
  padding: 20px;
  width: 500px;
  box-shadow: 1px 1px 4px rgba(0,0,0,0.1);
  transition: box-shadow .5s ease-out;
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
</style>
