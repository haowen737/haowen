<template lang="html">
  <div class="page">
    <ul class="cards">
      <transition-group name="card">
        <li class="card clearfix" v-for="(card, index) in cards" :key="card" @mouseenter="onMouseenter(index)" @mouseout="onMouseout">
          <transition name="fade">
            <div class="like-btn" v-show="showBtn === index"></div>
          </transition>
          <div class="card-img-container"
          :style="{backgroundImage:'url(' + card.thumbnail + '?imageView2/0/w/1000)'}"></div>
          <router-link :to="{path: 'demo/' + card.route}" target="_blank">{{card.title}}</router-link>
          <p class="card-summary">{{card.summary}}</p>
          <p class="card-count">
            <span>{{card.created_at | formatDate('YYYY-MM-DD')}}</span>
            <span class="card-count-view">view {{card.view_count}}&nbsp;&nbsp;like {{card.likes}}</span>
          </p>
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cards: [],
      showBtn: -1
    }
  },
  mounted () {
    this.query()
  },
  methods: {
    onMouseenter (index) {
      this.showBtn = index
    },
    onMouseout () {
      // this.showBtn = -1
      console.log('mouseout')
    },
    query () {
      this.$http.get('/api/demo/getDemos')
      .then((res) => {
        this.cards = res.data
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="css" scoped>
.card-count-view {
  position: absolute;
  right: 0;
}
.like-btn {
  position: absolute;
  left: 0;
  top: 0;
  margin-top: 2rem;
  margin-left: -50px;
  width: 50px;
  height: 50px;
  background-color: blue;
  margin-right: 20px;
}
.card-summary {
  font-size: 1rem;
  font-weight: 300;
}
.card-img-container {
  width: 160px;
  height: 90px;
  float: left;
  margin-right: 1.5rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.card-count {
  color: #ababad;
  font-weight: 100;
  font-size: 1rem;
  top: .2rem;
}
.card {
  display: block;
  position: relative;
  margin: 30px auto;
  padding: 0 1rem;
  max-width: 500px;
  /*box-shadow: 1px 1px 2px rgba(0,0,0,0.2);*/
  /*transition: box-shadow .5s ease-out;*/
  border-bottom: 1px solid #c9c9c9;
  text-align: left;
  cursor: default;
}
.card a {
  display: inline-block;
  color: #2b2d32;
  border-bottom-color: rgba(0,0,0,0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  transition: all .5s;
}
.card {
  padding: 2rem;
  background-color: #fff;
  display: block;
  font-size: 1.3rem;
  font-weight: 400;
  /*list-style-type: none;*/
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
