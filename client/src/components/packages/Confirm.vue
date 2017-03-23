<template lang="html">
  <div class="confirm-container" v-show="showValue">
    <div class="mask"></div>
    <div class="ui-confirm">
      <div class="ui-dialog_hd">
        <strong class="ui-dialog_title">{{title}}</strong>
      </div>
      <div class="ui-dialog_bd">
        <div v-html="content"></div>
      </div>
      <div class="ui-dialog_ft">
        <a href="javascript:;" class="ui-dialog_btn" @click="_onCancel">{{cancelText || '取消'}}</a>
        <a href="javascript:;" class="ui-dialog_btn" @click="_onConfirm">{{confirmText || '确定'}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    confirmText: String,
    cancelText: String,
    title: String,
    content: String
  },
  created () {
    this.showValue = this.show
  },
  methods: {
    _onConfirm () {
      this.showValue = false
      this.$emit('on-confirm')
    },
    _onCancel () {
      this.showValue = false
      this.$emit('on-cancel')
    }
  }
}
</script>

<style lang="css" scoped>
.confirm-container {
  width: 100%;
  height: 100%;
}
.ui-confirm {
  position: fixed;
  z-index: 5000;
  width: 80%;
  max-width: 300px;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  background-color: #fff;
  text-align: center;
  border-radius: 3px;
  overflow: hidden;
}
.weui-dialog__hd {
  padding: 1.3em 1.6em .5em;
}
.weui-dialog__bd {
  padding: 0 1.6em .8em;
  min-height: 40px;
  font-size: 15px;
  line-height: 1.3;
  word-wrap: break-word;
  word-break: break-all;
  color: #999;
}
.ui-dialog_ft {
  display: flex;
  line-height: 48px;
}
.ui-dialog_ft a {
  display: block;
  flex: 1;
}
</style>
