<template lang="html">
  <div class="modal-container" v-show="show">
    <transition name="madal-mask">
      <div class="madal-mask" v-show="show">
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
  </div>
</template>

<script>
export default {
  name: 'messangerr',

  componentName: 'messangerr',

  props: {
    header: String,
    placeholder: String,
    display: Boolean,
    confirmText: {
      type: String,
      default: '好的'
    },
    type: {
      type: String,
      default: 'text'
    }
  },

  mounted () {},
  methods: {
    handleInput (ev) {
      this.setValue(ev.target.value)
    },
    setValue (value) {
      this.value = value
    },
    onConfirm () {
      this.$emit('on-confirm', this.value)
    },
    handler () {
      this.$emit('handler')
    }
  },

  watch: {
    'display': function (val) {
      console.log('display', val)
      val ? this.show = true : this.show = false
    }
  },
  data () {
    return {
      value: '',
      show: false
    }
  }
}
</script>

<style lang="css" scoped>
.modal-container {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  z-index: 11;
}
.madal-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.2);
}
.madal-mask-enter-active, .madal-mask-leave-active {
  transition: all .3s;
  background-color: rgba(0,0,0,0.2);
  opacity: 1;
}
.madal-mask-enter, .madal-mask-leave-active {
  background-color: rgba(0,0,0,0);
  opacity: 0;
}
.modal-enter-active, .modal-leave-active {
  transition: all .3s ease;
  top: 40%;
  opacity: 1;
}
.modal-enter, .modal-leave-active {
  top: 38%;
  opacity: 0;
}
.modal-input {
  border: none;
  border-bottom: 1px solid rgba(0,0,0,0.2);
  outline: none;
  font-size:17px;
  padding:10px 10px 5px 0px;
  margin-bottom: 5px;
}
</style>
