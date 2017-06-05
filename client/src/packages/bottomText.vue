<template lang="html">
  <div class="bottom-bar" :style="{color:color,fontSize:size+'px'}">{{bottomText}}</div>
</template>

<script>
import Ocean from 'assets/scripts/ocean'
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
      this.bottomText = Ocean.RandomWord()
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
