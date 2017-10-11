<template>
  <transition name="fade-contact">
    <div class="project-layout">
      <div class="project-list">
        <div class="project" v-for="p in projects" :key="p">
          <div>{{p.title}}</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    data () {
      return {
        projects: [{
          title: 'oh_MyNewTab'
        }, {
          title: 'Haowen\'s blog'
        }, {
          title: 'j'
        }]
      }
    }
  }
</script>

<style scoped>
.project-layout {
  margin-top: 70px;
}
.project-list {
  margin: 0 auto;
  max-width: 70%;
  display: flex;
}
.project {
  text-align: center;
  width: 33.33%;
}
</style>