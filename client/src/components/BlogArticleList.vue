<template lang="html">
  <div class="blog-main">
    <div class="cards">
      <transition-group name="card">
        <article class="card" v-for="card in cards" @click="showBottomFire=false" :key="card">
          <div class="card-img-container" v-if="card.thumbnail">
            <img :src="card.thumbnail + '?imageView2/0/w/1000'" alt="">
          </div>
          <router-link :to="{path:'blog/article/' + card.file_id}">{{ card.title }}</router-link>
          <p class="card-summary">{{card.summary}}</p>
          <p>
            <span class="card-date">{{card.author}} in {{ card.created_at | formatDate('YYYY/MM/DD HH:mm')}}</span>
            <span class="card-bottom-right"><i class="fa fa-thumbs-o-up"></i>&nbsp;{{card.likes}}</span>
            <span class="card-bottom-right"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;{{card.view_count}}</span>
          </p>
        </article>
      </transition-group>
    </div>
    <confirm content="content" title="title"></confirm>
  </div>
</template>

<script>
import Confirm from 'packages/Confirm'
import LoginEntrance from './loginEntrance'
export default {
  data  () {
    return {
      showBottomFire: false,
      cards: []
    }
  },
  computed: {},
  mounted  () {
    this.query()
  },
  methods: {
    query () {
      this
        .$http.get('/api/article/getArticles')
        .then(({data}) => {
          this.cards = data
        })
        .catch(({data}) => {
          this.$warning(data.msg)
        })
    }
  },
  components: {
    LoginEntrance,
    Confirm
  }
}
</script>

<style lang="css" scoped>
.card-img-container img:hover {
  transform: scale(1.1);
}
.card-img-container img {
  transform: scale(1);
  transition: all .7s;
  position: absolute;
  width: 100%;
}
.card-img-container {
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
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
.card {
  display: block;
  position: relative;
  margin: 30px auto;
  padding: 0 1rem;
  /*box-shadow: 1px 1px 2px rgba(0,0,0,0.2);*/
  /*transition: box-shadow .5s ease-out;*/
  border-bottom: 1px solid rgba(0,0,0,.1);
  text-align: left;
  cursor: default;
}
.card a {
  display: inline-block;
  font-size: 2rem;
  font-weight: 400;
  color: #2b2d32;
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
  margin-left: 15px;
  color: #999;
  font-size: .7rem;
  font-weight: lighter;
  margin-top: 5px;
}
.card-summary {
  margin-top: 0px;
  font-size: 1.6rem;
  color: #666;
  font-weight: 200;
}
.card-date {
  font-size: 1.5rem;
  font-weight: 300;
  font-style: italic;
  color: #333;
}
.cards {
  /*box-shadow: 0 5px 10px rgba(0,0,0,.2);*/
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
