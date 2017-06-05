<template lang="html">
  <div class="courier-container">
    <div class="content-wrap">
      <header>
        {{header}}
      </header>
      <p>{{body}}</p>
      <div class="button-group">
        <a href="javascript:;" @click="clickCancel">{{cancelBtnText}}</a>
        <a href="javascript:;" @click="clickConfirm">{{confirmBtnText}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'courier',

  componentName: 'courier',

  props: {
    header: String,
    body: String,
    confirmBtnText: {
      type: String,
      default: '确认'
    },
    cancelBtnText: {
      type: String,
      default: '取消'
    }
  },

  methods: {
    clickCancel () {
      this.$emit('on-cancel')
    },
    clickConfirm () {
      this.$emit('on-confirm')
    }
  }
}
</script>

<style lang="css" scoped>
.button-group a:first-child {
  color: #aeaeae;
}
.button-group a {
  margin-left: 10px;
}
.button-group a:hover {
  border-bottom: 1px solid #000;
}
.button-group {
  float: right;
}
.content-wrap header {
  font-size: 20px;
  font-weight: 500;
}
.courier-container:after {
  position: fixed;
  content: '';
  background-color: #fff;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0.8;
}
.content-wrap {
  position: relative;
  padding: 20px;
  background-color: #fff;
  z-index: 2;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  animation: courier .5s;
}
.courier-container {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
@keyframes courier {
  0% {
    opacity: 0;
    top: -10px;
  }
  100% {
    opacity: 1;
    top: 0;
  }
}
</style>
