<template lang="html">
  <transition name="fade">
    <div class="profile-container">
      <div class="profile-inner">
        <div class="avatar-container">
          <div class="avatar">

          </div>
        </div>
        <div class="content-nickname">
          {{user.nick_name || '未知'}}
        </div>
        <div class="content">
          TEL: {{user.phone || '未知'}}
        </div>
        <div class="content">
          CREATED_AT: {{user.phone || '未知'}}
        </div>
        <div class="content-motto">
          {{user.motto || '未知'}}
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      user: {}
    }
  },
  mounted () {
    this.getUser()
  },
  methods: {
    getUser () {
      let id = this.$root.user.id
      this.query(id)
    },
    query (id) {
      this.$http.get('/api/users/get/' + id)
      .then((res) => {
        this.user = res.data.data.user
        console.log(this.user)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="css" scoped>
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
</style>
