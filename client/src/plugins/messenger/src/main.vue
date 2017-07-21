<template lang="html">
  <transition name="fade">
    <div class="messenger-wrap" v-show="show">
      <div class="messenger" v-show="show">
        <header class="messenger-title border-b" v-show="title" v-html="title">{{title}}</header>
        <div class="messenger-content" v-show="content">{{content}}</div>
        <div class="messenger-footer border-t">
          <div class="messenger-btn border-l" @click="onCancel()" v-show="showCancel">{{cancelText}}</div>
          <div class="messenger-btn" @click="onConfirm()">{{confirmText}}</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'messenger',
  template: '#messenger',
  data () {
    return {
      show: false,
      showCancel: true,
      title: '',
      content: '',
      confirmText: '',
      cancelText: ''
    }
  },
  computed: {},
  mounted () {},
  methods: {
    onConfirm () {},
    onCancel () {}
  },
  components: {}
}
</script>

<style lang="css" scoped>
.messenger-wrap {
  position: fixed;top: 0;left: 0;width: 100%;height: 100%;z-index: 1000;background-color: rgba(0,0,0,.2);
  display: flex;
  justify-content: center;
  align-items: center;
}
.messenger {
  width: 30rem;
  background-color: #fff;
  box-shadow: 2px 2px 1px rgba(0,0,0,0.2);
}
.messenger-title {
  text-align: center;line-height: 2.5;font-size: 1.3rem;
}
.messenger-content {
  padding: 1rem 3rem;
}
.messenger-footer {
  display: flex;
}
.messenger-btn {
  flex: 1;
  text-align: center;font-size: 1.2rem;line-height: 2.5;
}
</style>
