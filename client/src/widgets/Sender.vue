<!-- 这是一个不可复用的组件，parent是comment -->
<template>
  <div class="sender-wrap">
    <h3 class="sender-title">{{title}}</h3>
    <div class="sender border-b">
      <input v-model="where.content" :placeholder="placeholder" v-if="status===0"></input>
      <input v-model="where.name" :placeholder="placeholder" v-if="status===1"></input>
      <input v-model="where.email" :placeholder="placeholder" v-if="status===2"></input>
    </div>
    <a href="javascript:;" @click="next">{{btnText}}</a>
  </div>
</template>

<script>
const titles = ['title1', 'title2', 'title3']
const placeholders = ['placeholder1', 'placeholder2', 'placeholder3']
const btnTexts = ['btnText1', 'btnText2', 'btnText3']

export default {

  name: 'Sender',

  data () {
    return {
      where: {
        content: '',
        name: '',
        email: ''
      },
      status: 0,
      title: '',
      placeholder: '',
      btnText: ''
    }
  },
  created () {
    this.setData(0)
  },
  methods: {
    next () {
    },
    formChecker () {
      let { content, email } = this.where
      return new Promise((resolve, reject) => {
        if (content && email) {
          resolve()
        } else {
          reject()
        }
      })
    },
    setData (index) {
      this.status = index
      this.title = titles[index]
      this.placeholder = placeholders[index]
      this.btnText = btnTexts[index]
    }
  }
}
</script>

<style lang="css" scoped>
.sender-wrap {
  position: fixed;top: 0px;left: 0px;width: 400px;
  border: 1px solid #efefef;
  background-color: #fff;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.sender-wrap a {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0 10px;
  line-height: 3;
  display: block;
  color: #4d7886;
  text-align: center;
}
.sender-title {
  margin: 10px;
  font-size: 1.4rem;
  font-weight: 400;
}
.sender {
  position: relative;
  margin: 0 10px;
  text-align: center;
}
.sender input {
  margin: 10px 0 40px;
  width: 100%;
  line-height: 2;
  display: block;
  font-size: 17px;
  outline: none;
  border: none;
}
</style>