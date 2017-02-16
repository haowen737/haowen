<template lang="html">
  <div class="container" id="container">
    <div id="pageCode">
      <div class="header">
        <div class="header-inner">
          <div class="logo cur-default">Haowen</div>
          <div class="site-subtitle cur-default">Live a life you will remember!</div>
          <nav class="site-nav">
            <ul>
              <li><router-link :to="{path:'/'}">首页</router-link></li>
              <li><router-link :to="{path:'/tags'}">标签</router-link></li>
              <li><router-link :to="{path:'/contact'}">我</router-link></li>
              <li><router-link :to="{path:'/comment'}">留言</router-link></li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="cards">
        <transition-group name="card">
          <router-link class="card" v-for="card in cards" :to="{path:'code/article/' + card.file_id}" @click="showBottomFire=false" :key="card">
            <h1>{{ card.title }}</h1>
            <p class="card-summary">{{card.summary}}</p>
            <p class="card-date">{{ card.created_at | formatDate('YYYY-MM-DD HH:mm')}}
              <span>感谢{{card.likes}}</span>
              <span>阅读{{card.view_count}}</span>
            </p>
          </router-link>
        </transition-group>
      </div>
    </div>
    <bottom-fire :show.sync="showBottomFire"></bottom-fire>
    <loading :show="showLoading" top="50%" bg-color="#000"></loading>
    <login-entrance></login-entrance>
  </div>
</template>

<script>
import LoginEntrance from './loginEntrance'
import loading from './../packages/loading'
import BottomFire from './../packages/bottomFire'
// import database from './../../database'
export default {
  data  () {
    return {
      showBottomFire: false,
      showLoading: false,
      cards: []
    }
  },
  computed: {},
  mounted  () {
    // this.getCards()
    this.query()
    this.$root.activeScrollWatcher()
  },
  methods: {
    // getCards () {
    //   this.cards = database.posts
    // },
    query () {
      this.showLoading = true
      this.$http.get('/api/article/getArticles')
      .then(function (res) {
        res = res.data
        console.log(res.data.data)
        this.cards = res.data
        this.showLoading = false
      })
      .catch(function (err) {
        this.showLoading = false
        console.log(err)
      })
    }
  },
  beforeDestroy () {
    this.$root.removeScrollWatcher()
  },
  watch: {
    '$root.scrollY': function (val) {
      // console.log(this.$root.innerHeight, this.$root.scrollY, this.$root.offsetHeight)
      if ((this.$root.innerHeight + this.$root.scrollY) - this.$root.offsetHeight > -50) {
        this.showBottomFire = true
      } else {
        this.showBottomFire = false
      }
    }
  },
  components: {
    LoginEntrance,
    BottomFire,
    loading
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
  border-bottom: 1px solid rgba(0,0,0,0);
  transition: border-bottom 1.3s cubic-bezier(0.72, 1.62, 0.51, 1.58);;
}
.site-nav li:hover {
  border-bottom: 1px solid #000;
}
.site-nav a {
  display: block;
  padding: 5px 30px;
}
.cards {
  padding-bottom: 160px;
}
.card {
  display: block;
  position: relative;
  margin: 30px auto 30px;
  padding: 10px 20px 4px;
  width: 500px;
  box-shadow: 1px 1px 4px rgba(0,0,0,0.1);
  transition: box-shadow .5s ease-out;
  border-radius: 5px;
  text-align: left;
  cursor: default;
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
.card span {
  float: right;
  margin-left: 10px;
  color: #aaa;
  font-size: 11px;
  line-height: 16px;
}
.card-summary {
  margin-top: 0px;
  font-size: 14px;
  color: #666;
  font-weight: 200;
}
.card-date {
  font-size: 14px;
}
.card p {
}
.card-enter-active, .card-leave-active {
  transition: all .5s;
  margin: 30px auto 30px;
  opacity: 1;
}
.card-enter, .card-leave-active {
  opacity: 0;
  margin: 0;
}
</style>
