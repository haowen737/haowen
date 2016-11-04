# 从Vue1.x迁移至vue2.0
*Haowen in 2016-11-4*

vue2.0正式版发布有一个月了，可是一直没有仔仔细细的看过文档，今天上手写一个vue2.0的input组件，遇到好多坑，老老实实的去看了一遍[Vue2.0文档](https://vuefe.cn/)。顺便

1. 现在起每个组件只有一个根节点了
2. ```v-for```传递参数的顺序变了，现在是(value, index)
3. ```$index111```与```$key```被移除了
4. ```track-by```被```key```取代了
现在应该写成

```
<div v-for="item in items" v-bind:key="item.id">
```

5. ```v-for```排序值变了，现在```v-for="num in 10"```将从1-10迭代
6. Props的```twoWay```将智能单项传递
7. 现在在组件上使用```v-on```只会监听自定义事件（组件用 $emit 触发的事件）。如果要监听根元素的原生事件，可以使用```.native```修饰符，比如：

```
<my-component v-on:click.native="doSomething"></my-component>
```


```
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

```
