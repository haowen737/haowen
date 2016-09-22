<template lang="html">
  <!-- <div class="modal-layout" v-show="show"> -->
    <div class="modal" transition="fade" v-show="show">
      <div class="modal-head" v-show="header">{{header}}</div>
      <div class="modal-body" v-show="body">{{body}}</div>
      <div class="modal-btns">
        <div class="modal-btn" @click="show=false">{{confirmText}}</div>
        <div class="modal-btn border-l" @click="show=false" v-show="cancel">{{cancalText}}</div>
      </div>
    </div>
  <!-- </div> -->
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
  methods: {},
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
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
}
.modal-layout {
  position: absolute;
  background-color: rgba(0,0,0,0.5);
  width: 100%;
  height: 100%;
}
</style>
