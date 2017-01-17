<template lang="html">
  <transition name="modal-fade">
    <div class="modal-fade" v-show="show" @click="show=false">
      <transition name="modal">
        <div class="modal" v-show="show">
          <div class="modal-head" v-show="header" v-html="header"></div>
          <div class="modal-body">
            <input
            class="modal-input"
            :type="type"
            :value="value"
            :placeholder="placeholder"
            @input="handleInput">
          </div>
          <div class="modal-btns">
            <div class="modal-btn" @click="onConfirm()">{{confirmText}}</div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'messangerr',

  componentName: 'messangerr',

  data () {
    return {
      value: ''
    }
  },

  props: {
    header: String,
    placeholder: String,
    confirmText: {
      type: String,
      default: '好的'
    },
    type: {
      type: String,
      default: 'text'
    }
  },

  computed: {},
  mounted () {},
  methods: {
    handleInput (ev) {
      this.setValue(ev.target.value)
    },
    setValue (value) {
      this.value = value
    },
    onConfirm () {
      this.show = false
      this.$emit('on-confirm', this.value)
    },
    handler () {
      this.$emit('handler')
    }
  },
  components: {}
}
</script>

<style lang="css" scoped>
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
  z-index: 100;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.2);
  width: 100%;
  height: 100%;
}
.modal-fade-enter-active, .modal-fade-leave-active {
  transition: all .3s;
  opacity: 1;
}
.modal-fade-enter, .modal-fade-leave-active {
  background-color: rgba(0,0,0,0);
  opacity: 0;
}
.modal-enter-active, .modal-leave-active {
  transition: all .3s;
  position: relative;
  top: 40%;
  /*height: auto;*/
  opacity: 1;
}
.modal-enter, .modal-leave-active {
  background-color: rgba(0,0,0,0);
  position: relative;
  top: 38%;
  /*height: 0;*/
  opacity: 0;
}
.modal-input {
  border: none;
  border-bottom: 1px solid rgba(0,0,0,0.2);
  outline: none;
  font-size:17px;
  padding:10px 10px 0 0px;
}
</style>
