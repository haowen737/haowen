<template>
  <div id="page">
    <div class="top-bar">
      <router-link class="router-about" :to="{path: '/me'}">About</router-link>
      <router-link class="router-contact" :to="{path: '/me/contact'}">Contact</router-link>
      <router-link class="router-blog" :to="{path: '/'}" target="_blank">Blog</router-link>
    </div>
    <router-view></router-view>
    <div class="bottom-bar">"很高兴认识你(⁎⁍̴̛ᴗ⁍̴̛⁎)"&nbsp;&nbsp;&nbsp;&nbsp;"我也为你感到高兴！"</div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  data () {
    return {
      lang: 'en'
    }
  },
  methods: {
    langSwitch () {
      this.lang = 'en' || 'ch'
    }
  }
}
</script>

<style lang="css" scoped>
.bottom-bar {
  text-align: center;
  font-size: 1.2rem;
  line-height: 5;
  color: #333;
  background-color: #f9f9f9;
}

.top-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 0 1px rgba(0, 0, 0, .1);
  text-align: center;
  z-index: 100;
  background-color: #fff;
}

.top-bar a {
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0 1rem;
  line-height: 70px;
}

.router-about {
  color: #d2ccff;
}

.router-contact {
  color: #8abfff;
}

.router-blog {
  color: #8fcedd;
}
</style>
