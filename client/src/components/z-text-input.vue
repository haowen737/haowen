<template lang="html">
  <div class="form-group">
    <label for="for" class="col-md-3 control-label">{{label}}</label>
    <div class="col-md-7">
      <input
      class="form-control"
      type="text"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      :readonly="readonly"
      v-bind:value="value"
      v-on:input="onInput">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: [String, Number],
    label: {
      type: String,
      default: 'label'
    },
    placeholder: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    inline: {
      type: Boolean,
      default: false
    },
    for: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onInput: function (ev) {
      this.$emit('input', ev.target.value)
    }
  }
}
// 包括大部分表单控件、文本输入域控件，还支持所有HTML5类型的输入控件
// text、password、datetime、datetime-local、date、month、time、week、number、email、url、search、tel 和 color。
//
// 必须添加类型声明
// 只有正确设置了 type 属性的输入控件才能被赋予正确的样式。
</script>

<style lang="css">
</style>
