<template lang="html">
  <transition name="fade-content">
    <div class="moods-layout">
      <modal :show.sync='showModal' :body="modalBody" @on-confirm="onConfirm"></modal>
    </div>
  </transition>
</template>

<script>
import Modal from './../packages/modal'
export default {
  data () {
    return {
      showModal: false,
      modalBody: 'hello?'
    }
  },
  computed: {},
  mounted () {
    this.showModal = true
  },
  methods: {
    onConfirm () {
      console.log('this is ok')
    }
  },
  components: {
    Modal
  }
}
</script>

<style lang="css">
</style>
