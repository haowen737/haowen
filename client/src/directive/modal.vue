<template lang="html">
  <div class="modal-fade" v-show="show" transition="modal-fade" @click="show=false">
    <div class="modal" v-show="show" transition="modal">
      <div class="modal-head" v-show="header">{{header}}</div>
      <div class="modal-body" v-show="body">{{body}}</div>
      <div class="modal-btns">
        <div class="modal-btn" @click="jump">{{confirmText}}</div>
        <div class="modal-btn border-l" @click="show=false" v-show="cancel">{{cancalText}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  template: '#modal',
  props: {
    show: {
      type: Boolean,
      default: false,
      twoWay: true
    },
    header: {
      type: String,
      default: ''
    },
    body: {
      type: String,
      default: '',
      required: true
    },
    confirmText: {
      type: String,
      default: '好的',
      twoWay: true
    },
    cancel: {
      type: Boolean,
      default: false,
      twoWay: true
    },
    cancelText: {
      type: String,
      default: '取消',
      twoWay: true
    }
  },
  data () {
    return {}
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {
    jump () {
      this.show = false
      let index = this.$parent.link
      switch (index) {
        case 1 : window.open('https://github.com/popitin')
          break
        case 2 : window.open('https://www.zhihu.com/people/chuck-25')
          break
        case 3 : window.location.href = 'mailto: zt452268020@live.com'
          break
        case 4 : window.open('https://500px.com/haowen')
          break
      }
    }
  },
  components: {}
}
</script>

<style lang="css" scoped>
.border-l {
  border-left: 1px solid #e7e7e7;
}
.modal-btn:hover {
  background-color: #f3f3f3;
}
.modal-btn {
  flex: 1 1 auto;
  transition: all .5s;
  cursor: pointer;
}
.modal-btns {
  display: flex;
  text-align: center;
  line-height: 2;
  font-size: 16px;
  border-top: 1px solid #e7e7e7;
}
.modal-body {
  padding: 10px 20px;
  font-size: 17px;
  line-height: 1.5;
}
.modal-head {
  padding: 5px 20px;
  font-size: 20px;
  line-height: 2;
  border-bottom: 1px solid #e7e7e7;
}
.modal {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-200px);
  /*margin: 40% auto;*/
  background-color: #fff;
  width: 400px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
}
.modal-fade {
  position: absolute;
  background-color: rgba(0,0,0,0.2);
  width: 100%;
  height: 100%;
}
.modal-fade-transition {
  transition: all .3s;
  opacity: 1;
}
.modal-fade-enter, .modal-fade-leave {
  background-color: rgba(0,0,0,0);
  opacity: 0;
}
.modal-transition {
  transition: all .3s;
  position: relative;
  top: 45%;
  /*height: auto;*/
  opacity: 1;
}
.modal-enter, .modal-leave {
  background-color: rgba(0,0,0,0);
  position: relative;
  top: 40%;
  /*height: 0;*/
  opacity: 0;
}
</style>
