<!-- 这是一个不可复用的组件，parent是comment -->
<template>
  <div class="sender-wrap">
    <transition name="slide" mode="out-in">
      <h3 class="sender-title" :key="status">{{title}}</h3>
    </transition>
    <transition name="slide" mode="out-in">
      <div class="sender border-b" :key="inputs">
        <input v-model="inputs.value" :placeholder="inputs.placeholder"></input>
      </div>
    </transition>
    <transition name="slide" mode="out-in">
      <a href="javascript:;" :key="status" @click="btnOnclick">{{btnText}}</a>
    </transition>
  </div>
</template>

<script>
const titles = ['在这里留言', '你的名字']
const placeholders = ['在这里写你的留言', '在这里写你的名字']
const btnTexts = ['然后', '写好了']

export default {

  name: 'Sender',

  data () {
    return {
      where: {
        content: {
          value: '',
          placeholder: placeholders[0]
        },
        username: {
          value: '',
          placeholder: placeholders[1]
        }
      },
      status: 0
    }
  },
  computed: {
    title: function () {
      switch (this.status) {
        case 0: return titles[0]
        case 1: return titles[1]
      }
    },
    inputs: function () {
      switch (this.status) {
        case 0: return this.where.content
        case 1: return this.where.username
      }
    },
    btnText: function () {
      switch (this.status) {
        case 0: return btnTexts[0]
        case 1: return btnTexts[1]
      }
    // },
    // btnOnclick: function () {
    //   switch (this.status) {
    //     case 0: return this.formChecker(this.where.content)
    //     case 1: return this.formChecker(this.where.email)
    //   }
    }
  },
  created () {
    this.setData(0)
  },
  methods: {
    btnOnclick () {
      return this.status === 0
      ? this.formChecker({
        val: this.where.content.value,
        rejectContent: '缺少内容'
      }).then(() => {
        this.setData(1)
      }).catch((err) => {
        console.log(err)
      })
      : this.formChecker({
        val: this.where.username.value,
        rejectContent: '你的名字也是必须的'
      }).then(() => {
        this.send()
      }).catch((err) => {
        console.log(err)
      })
    },
    send () {
      this.$emit('dataReady', {
        userName: this.where.username.value,
        content: this.where.content.value
      })
      this.clearForm()
      // let data = {
      //   userName: this.where.username.value,
      //   comment: this.where.content.value
      // }
      // this.$http.post('/api/comment/addComment', data)
      // .then((res) => {
      //   this.query()
      // })
      // .catch((err) => {
      //   console.log(err)
      // })
    },
    clearForm () {
      this.where.content.value = ''
      this.where.username.value = ''
    },
    formChecker (data) {
      let { val, rejectContent } = data
      console.log(val, rejectContent)
      return new Promise((resolve, reject) => {
        if (val) {
          resolve()
        } else {
          reject(rejectContent || 'empty err msg')
        }
      })
    },
    setData (index) {
      setTimeout(() => {
        this.status = index
      }, 0)
    },
    setDataEmpty () {
      this.status = ''
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
  overflow: hidden;
}
.sender-wrap a {
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
  height: 100%;
}
.sender input {
  width: 100%;
  line-height: 2;
  display: block;
  font-size: 17px;
  outline: none;
  border: none;
  height: 2.4rem;
}
.slide-enter-active, .slide-leave-active {
  transition: all .6s ease;
  opacity: 1;
}
.slide-enter{
  opacity: 0;
  transform: translateX(10%);
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(-10%);
}
</style>