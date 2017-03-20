<template lang="html">
  <transition name="fade">
    <div class="profile-container">
      <div class="profile-inner">
        <div class="avatar-container">
          <div class="avatar">

          </div>
        </div>
        <div class="divider">
          <a :class="{'active': activeTab===1}" @click="checkProfile">查看资料</a>
          <a class="border-l" :class="{'active': activeTab===2}" @click="editProfile">编辑资料</a>
        </div>
        <div class="profile-content-container">
          <transition name="fade">
            <div class="profile-content" v-show="activeTab===1">
              <div class="content-nickname float-right">
                {{where.nick_name || '未知'}}
              </div>
              <div class="content float-left">
                TEL: {{where.phone || '未知'}}
              </div>
              <div class="content-motto float-left">
                {{where.motto || '未知'}}
              </div>
              <div class="content float-right">
                注册时间: {{where.created_at | formatDate('YYYY-MM-DD hh:mm') || '未知'}}
              </div>
            </div>
          </transition>
          <transition name="fade">
            <div class="profile-content" v-show="activeTab===2">
              <div class="content-nickname">
                <input class="haowen-input" placeholder="昵称" type="text" name="" v-model="where.nick_name">
              </div>
              <div class="content">
                <input class="haowen-input" placeholder="电话" type="text" name="" v-model="where.phone">
              </div>
              <div class="content">
                <input class="haowen-input" placeholder="邮箱" type="text" name="" v-model="where.email">
              </div>
              <div class="content-motto">
                <textarea class="haowen-textarea" rows="4" placeholder="简介" type="text" name="" v-model="where.motto">
              </div>
              <a href="javascript:;" @click="update">保存</a>
            </div>
          </transition>
        </div>
      </div>
      <login-entrance></login-entrance>
    </div>
  </transition>
</template>

<script>
import LoginEntrance from './loginEntrance'
export default {
  data () {
    return {
      activeTab: 0,
      where: {
        id: '',
        phone: '',
        nick_name: '',
        motto: '',
        gender: ''
      }
    }
  },
  mounted () {
    this.getUser()
  },
  methods: {
    getUser () {
      let id = this.$root.user.id
      this.where.id = id
      this.query(id)
    },
    checkProfile () {
      this.activeTab = 1
    },
    editProfile () {
      this.activeTab = 2
    },
    query (id) {
      this.$http.get('/api/users/get/' + id)
      .then((res) => {
        this.where.nick_name = res.data.user.nick_name
        this.where.phone = res.data.user.phone
        this.where.motto = res.data.user.motto
        this.where.created_at = res.data.user.created_at
        this.activeTab = 1
        console.log(this.user)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    update () {
      let data = this.where
      this.$http.post('/api/users/update', data)
      .then((res) => {
        window.location.reload()
      })
      .catch((err) => {
        console.log(err)
      })
    }
  },
  components: {
    LoginEntrance
  }
}
</script>

<style lang="css" scoped>
.profile-content {
  position: absolute;
  max-width: 500px;
  min-width: 300px;
}
.profile-content-container {
  position: relative;
  display: flex;
  justify-content: center;
}
.active {
  color: #000 !important;
}
.divider a:hover {
  color: #000;
}
.divider a {
  flex: 1 1 auto;
  cursor: pointer;
  color: #bbb;
}
.divider {
  display: flex;
  margin-bottom: 10px;
}
.content-motto {
  max-width: 700px;
}
.content-nickname {
  font-size: 25px;
  font-weight: 500;
}
.content {
  margin: 10px;
}
.avatar {
  width: 200px;
  height: 200px;
  border-radius: 200px;
  background-color: #000;
  margin: auto;
}
.avatar-container {
  border-radius: 200px;
  margin: 50px 0;
}
.profile-inner {
  text-align: center;
}
.profile-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.float-left {
  animation: float-left 1s ease;
  position: relative;
}
@keyframes float-left {
  0% {
    opacity: 0;
    left: -50px;
  }
  100% {
    opacity: 1;
    left: 0;
  }
}
.float-right {
  animation: float-right 1s ease;
  position: relative;
}
@keyframes float-right {
  0% {
    opacity: 0;
    right: -50px;
  }
  100% {
    opacity: 1;
    right: 0;
  }
}
</style>
