<template lang="html">
  <div class="ui-input-container">
    <input class="ui-input" v-if="type==='text'" type="text" :placeholder="placeholder" :value.lazy="currentValue" @input="input">
    <input class="ui-input" v-if="type==='number'" type="number" :placeholder="placeholder" :value.lazy="currentValue" @input="input">
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    placeholder: String
  },
  methods: {
    input (ev) {
      this.$emit('input', ev.target.value)
    }
  },
  data () {
    return {
      currentValue: ''
    }
  }
}
</script>

<style lang="css" scoped>
.ui-input-container {
  padding: .7rem 0;
}
.ui-input {
  width: 100%;
  text-indent: .3rem;
  font-size: 1.2rem;
  font-weight: 100;
  line-height: 1.8;
  color: #666;
  outline: none;
  border: none;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  transition: all .3s;
}
.ui-input:focus {
  border-bottom: 1px solid rgba(0,0,0,0.3);
  color: #333;
}
</style>
