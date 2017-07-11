<template>
<div>
  <a href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzIyODUxNzQ0MQ==&scene=110#wechat_redirect">点击关注haowen的公众号</a>
  <a href="http://weixin.qq.com/r/DERwaGHE8TyOrSUL9xEe/MDAyOTgxMzQw">点击关注临城展画的公众号</a>
</template>
</div>
<script>
export default {

  name: 'Test',
  mounted () {
    this.getIframe()
  },
  data () {
    return {

    }
  },
  methods: {
    getIframe () {
      let iframe = document.querySelector('#iframe')
      console.log(iframe.target)
    }
  }
}
</script>

<style lang="css" scoped>
a {
  display: block;
  padding: 20px;
  margin: 50px;
  background-color: green;
}
</style>