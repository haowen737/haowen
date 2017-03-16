<template lang="html">
  <div class="container" id="container">
    <div id="pageCode">
      <div class="cards">
        <transition-group name="card">
          <article class="card" v-for="card in cards" @click="showBottomFire=false" :key="card">
            <div class="card-img-container"
            v-if="card.thumbnail"
            :style="{backgroundImage:'url(' + card.thumbnail + '?imageView2/0/w/1000)'}"></div>
            <router-link :to="{path:'article/' + card.file_id}">{{ card.title }}</router-link>
            <p class="card-summary">{{card.summary}}</p>
            <p>
              <span class="card-date">{{card.author}} in {{ card.created_at | formatDate('YYYY/MM/DD HH:mm')}}</span>
              <span class="card-bottom-right">感谢{{card.likes}}</span>
              <span class="card-bottom-right">阅读{{card.view_count}}</span>
            </p>
          </article>
        </transition-group>
      </div>
    </div>
    <loading :show="showLoading" top="50%" bg-color="#000"></loading>
    <!-- <login-entrance></login-entrance> -->
  </div>
</template>

<script>
import DashboardTopbar from './dashboardTopbar'
import LoginEntrance from './loginEntrance'
import loading from './../packages/loading'
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
    this.testCo()
    this.query()
    this.$root.activeScrollWatcher()
  },
  methods: {
    testCo () {
      this.$warning()
    },
    query () {
      this.showLoading = true
      this.$http.get('/api/article/getArticles')
      .then(function (res) {
        console.log(res)
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
  components: {
    DashboardTopbar,
    LoginEntrance,
    loading
  }
}
</script>

<style lang="css" scoped>
.card-img-container {
  width: 100%;
  height: 200px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
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
  margin: 30px auto;
  padding: 0 20px;
  width: 500px;
  /*box-shadow: 1px 1px 2px rgba(0,0,0,0.2);*/
  /*transition: box-shadow .5s ease-out;*/
  border-bottom: 1px solid #c9c9c9;
  text-align: left;
  cursor: default;
}
.card a {
  display: inline-block;
  font-size: 1rem;
  font-weight: 400;
  color: #111;
  margin: .7rem 0;
  border-bottom-color: rgba(0,0,0,0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  transition: all .5s;
}
.card a:hover{
  border-bottom-color: #c9c9c9;
}
.card-bottom-right {
  float: right;
  margin-left: 10px;
  color: #c5c5c5;
  font-size: .7rem;
  font-weight: lighter;
  margin-top: 5px;
}
.card-summary {
  margin-top: 0px;
  font-size: .7rem;
  color: #666;
  font-weight: 200;
}
.card-date {
  font-size: .7rem;
  font-weight: 300;
  font-style: italic;
  color: #333;
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
@media screen and (max-width: 375px ) {
  .card {
    width: auto;
  }
}
</style>
