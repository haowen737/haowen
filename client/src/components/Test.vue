<template>
<iframe id="iframe" src="http://www.baidu.com"></iframe>
</template>

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
#iframe {
  width: 900px;
  height: 800px;
}
</style>