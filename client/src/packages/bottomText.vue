<template lang="html">
  <div class="bottom-bar" :style="{color:color,fontSize:size+'px'}">{{bottomText}}</div>
</template>

<script>
export default {
  name: 'bottomText',

  componentName: 'bottomText',

  props: {
    color: String,
    size: Number
  },

  mounted () {
    this.initBottomText()
  },

  methods: {
    initBottomText () {
      let index = (Math.random() * 10).toFixed(0)
      console.log(index)
      switch (index) {
        case '0':
          this.bottomText = '我在听,有话快说'
          break
        case '1':
          this.bottomText = '说说你的路途见闻吧'
          break
        case '2':
          this.bottomText = '你想被变成青蛙吗?'
          break
        case '3':
          this.bottomText = '天哪!你真高!'
          break
        case '4':
          this.bottomText = '祝你好运。'
          break
        case '5':
          this.bottomText = '你有什么事吗?'
          break
        case '6':
          this.bottomText = '来喝杯啤酒吗?'
          break
        case '7':
          this.bottomText = '你好，旅行者'
          break
        case '8':
          this.bottomText = '每一天，都是一个祝福'
          break
        case '9':
          this.bottomText = '哈哈哈哈...'
          break
      }
    }
  },

  data () {
    return {
      bottomText: ''
    }
  }
}
</script>

<style lang="css" scoped>
.bottom-bar {
  position: absolute;
  bottom: 5px;
  left: 50%;
  color: #999;
  font-size: 14px;
  transform: translateX(-50%);
}
</style>
